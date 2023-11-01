/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var r6=s((Moe,Kf)=>{"use strict";var nsr=typeof Object.defineProperty=="function"?Object.defineProperty:null;Kf.exports=nsr});var t6=s((Boe,e6)=>{"use strict";var asr=r6();function ssr(){try{return asr({},"x",{}),!0}catch{return!1}}e6.exports=ssr});var n6=s((koe,i6)=>{"use strict";var usr=Object.defineProperty;i6.exports=usr});var Gu=s((joe,a6)=>{"use strict";function osr(r){return typeof r=="number"}a6.exports=osr});var Hu=s((Coe,u6)=>{"use strict";function vsr(r){return r[0]==="-"}function s6(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function fsr(r,e,t){var i=!1,n=e-r.length;return n<0||(vsr(r)&&(i=!0,r=r.substr(1)),r=t?r+s6(n):s6(n)+r,i&&(r="-"+r)),r}u6.exports=fsr});var c6=s((Voe,f6)=>{"use strict";var csr=Gu(),o6=Hu(),lsr=String.prototype.toLowerCase,v6=String.prototype.toUpperCase;function psr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!csr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o6(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=o6(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===v6.call(r.specifier)?v6.call(t):lsr.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}f6.exports=psr});var p6=s((Uoe,l6)=>{"use strict";function gsr(r){return typeof r=="string"}l6.exports=gsr});var d6=s((Goe,m6)=>{"use strict";var msr=Gu(),dsr=Math.abs,hsr=String.prototype.toLowerCase,g6=String.prototype.toUpperCase,Pt=String.prototype.replace,qsr=/e\+(\d)$/,ysr=/e-(\d)$/,bsr=/^(\d+)$/,wsr=/^(\d+)e/,Esr=/\.0$/,Nsr=/\.0*e/,Osr=/(\..*[^0])0*e/;function Asr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!msr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":dsr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Pt.call(t,Osr,"$1e"),t=Pt.call(t,Nsr,"e"),t=Pt.call(t,Esr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Pt.call(t,qsr,"e+0$1"),t=Pt.call(t,ysr,"e-0$1"),r.alternate&&(t=Pt.call(t,bsr,"$1."),t=Pt.call(t,wsr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===g6.call(r.specifier)?g6.call(t):hsr.call(t),t}m6.exports=Asr});var y6=s((Hoe,q6)=>{"use strict";function h6(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function Ssr(r,e,t){var i=e-r.length;return i<0||(r=t?r+h6(i):h6(i)+r),r}q6.exports=Ssr});var w6=s((Woe,b6)=>{"use strict";var Tsr=c6(),_sr=p6(),Isr=d6(),Lsr=y6(),Rsr=Hu(),Psr=String.fromCharCode,ua=isNaN,Fsr=Array.isArray;function Msr(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Bsr(r){var e,t,i,n,a,u,o,f,v;if(!Fsr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,f=0;f<r.length;f++)if(i=r[f],_sr(i))u+=i;else{if(e=i.precision!==void 0,i=Msr(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,v=0;v<t.length;v++)switch(n=t.charAt(v),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,ua(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,ua(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=Tsr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!ua(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=ua(a)?String(i.arg):Psr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=Isr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Rsr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Lsr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}b6.exports=Bsr});var N6=s((xoe,E6)=>{"use strict";var ksr=w6();E6.exports=ksr});var A6=s((Doe,O6)=>{"use strict";var oa=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function jsr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function Csr(r){var e,t,i,n;for(t=[],n=0,i=oa.exec(r);i;)e=r.slice(n,oa.lastIndex-i[0].length),e.length&&t.push(e),t.push(jsr(i)),n=oa.lastIndex,i=oa.exec(r);return e=r.slice(n),e.length&&t.push(e),t}O6.exports=Csr});var T6=s((zoe,S6)=>{"use strict";var Vsr=A6();S6.exports=Vsr});var I6=s((Xoe,_6)=>{"use strict";function Usr(r){return typeof r=="string"}_6.exports=Usr});var P6=s((Joe,R6)=>{"use strict";var Gsr=N6(),Hsr=T6(),Wsr=I6();function L6(r){var e,t,i;if(!Wsr(r))throw new TypeError(L6("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Hsr(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Gsr.apply(null,t)}R6.exports=L6});var y=s((Yoe,F6)=>{"use strict";var xsr=P6();F6.exports=xsr});var V6=s((Zoe,C6)=>{"use strict";var M6=y(),Kt=Object.prototype,B6=Kt.toString,k6=Kt.__defineGetter__,j6=Kt.__defineSetter__,Dsr=Kt.__lookupGetter__,zsr=Kt.__lookupSetter__;function Xsr(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||B6.call(r)==="[object Array]")throw new TypeError(M6("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||B6.call(t)==="[object Array]")throw new TypeError(M6("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(Dsr.call(r,e)||zsr.call(r,e)?(i=r.__proto__,r.__proto__=Kt,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&k6&&k6.call(r,e,t.get),u&&j6&&j6.call(r,e,t.set),r}C6.exports=Xsr});var De=s(($oe,U6)=>{"use strict";var Jsr=t6(),Ysr=n6(),Zsr=V6(),Wu;Jsr()?Wu=Ysr:Wu=Zsr;U6.exports=Wu});var H6=s((Qoe,G6)=>{"use strict";var $sr=De();function Qsr(r,e,t){$sr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}G6.exports=Qsr});var b=s((Koe,W6)=>{"use strict";var Ksr=H6();W6.exports=Ksr});var D6=s((r2e,x6)=>{"use strict";var rur=De();function eur(r,e,t){rur(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}x6.exports=eur});var rr=s((e2e,z6)=>{"use strict";var tur=D6();z6.exports=tur});var J6=s((t2e,X6)=>{"use strict";function iur(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}X6.exports=iur});var Z6=s((i2e,Y6)=>{"use strict";var nur=J6();Y6.exports=nur});var Q6=s((n2e,$6)=>{"use strict";function aur(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}$6.exports=aur});var xu=s((a2e,K6)=>{"use strict";var sur=Q6();K6.exports=sur});var ec=s((s2e,rc)=>{"use strict";var uur=xu();function our(r){return uur(0,r)}rc.exports=our});var va=s((u2e,tc)=>{"use strict";var vur=ec();tc.exports=vur});var ac=s((o2e,nc)=>{"use strict";var nn=Z6(),fur=va(),ic=y();function cur(r,e,t){var i,n,a,u,o,f,v,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,v=o;v<u;v++)i=[i];for(a=fur(u),v=u-1;v>=0;v--)if(c=o-u+v,!(c<0)){if(f=e[c],n=t[v],n!==0&&n<f)throw new Error(ic("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",nn(e).join(", "),nn(t).join(", "),v));if(f===n)a[v]=1;else if(f===1)a[v]=0;else throw new Error(ic("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",nn(e).join(", "),nn(t).join(", "),v))}return{ref:r,data:i,shape:nn(t),strides:a}}nc.exports=cur});var Du=s((v2e,sc)=>{"use strict";var lur=ac();sc.exports=lur});var vc=s((f2e,oc)=>{"use strict";var uc=Du();function pur(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,S,x,Q;if(N=e[2],o=N[1],f=N[0],!(o<=0||f<=0))for(F=uc(r[0],e[0],N),S=F.data,O=F.strides,i=O[1],n=O[0],F=uc(r[1],e[1],N),x=F.data,O=F.strides,a=O[1],u=O[0],Q=r[2],p=0,h=0,c=0;c<f;c++){for(l=0,g=0,d=S[p],m=x[h],q=Q[c],v=0;v<o;v++)q[v]=t(d[l],m[g]),l+=i,g+=a;p+=n,h+=u}}oc.exports=pur});var zu=s((c2e,fc)=>{"use strict";var gur=vc();fc.exports=gur});var lc=s((l2e,cc)=>{"use strict";var Xu=Du();function mur(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,S,x,Q,G,_r,Ir,or,Rt,Qf;if(Q=e[3],v=Q[1],c=Q[0],!(v<=0||c<=0))for(_r=Xu(r[0],e[0],Q),Ir=_r.data,G=_r.strides,i=G[1],n=G[0],_r=Xu(r[1],e[1],Q),or=_r.data,G=_r.strides,a=G[1],u=G[0],_r=Xu(r[2],e[2],Q),Rt=_r.data,G=_r.strides,o=G[1],f=G[0],Qf=r[3],h=0,m=0,N=0,p=0;p<c;p++){for(g=0,d=0,q=0,O=Ir[h],F=or[m],S=Rt[N],x=Qf[p],l=0;l<v;l++)x[l]=t(O[g],F[d],S[q]),g+=i,d+=a,q+=o;h+=n,m+=u,N+=f}}cc.exports=mur});var Ju=s((p2e,pc)=>{"use strict";var dur=lc();pc.exports=dur});var mc=s((g2e,gc)=>{"use strict";function hur(r){var e,t,i,n,a,u,o,f,v,c,l;if(f=r.length,t=[],f===0)return t;if(n=r[0],v=n.length,f===1){for(c=0;c<v;c++)t.push(n[c]);return t}for(e=[v],c=1;c<f;c++)e.push(r[c].length),e[c]>v&&(v=e[c]);for(c=0;c<v;c++)t.push(0);for(c=v-1;c>=0;){for(a=e[0]-v+c,a>=0?i=n[a]:i=1,l=1;l<f;l++){if(u=e[l]-v+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}gc.exports=hur});var fa=s((m2e,dc)=>{"use strict";var qur=mc();dc.exports=qur});var qc=s((d2e,hc)=>{"use strict";var yur=xu();function bur(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(yur(r,i));return t}hc.exports=bur});var ca=s((h2e,yc)=>{"use strict";var wur=qc();yc.exports=wur});var wc=s((q2e,bc)=>{"use strict";function Eur(r,e,t){var i,n,a,u,o,f;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],f=0;f<a;f++)n.push(e.call(t,[o,f]));i.push(n)}return i}bc.exports=Eur});var Nc=s((y2e,Ec)=>{"use strict";var Nur=wc();Ec.exports=Nur});var Ac=s((b2e,Oc)=>{"use strict";function Our(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}Oc.exports=Our});var Tc=s((w2e,Sc)=>{"use strict";function Aur(r,e,t,i){var n,a,u,o,f,v;for(a=r.length,u=r[0].length,n=i,f=0;f<a;f++)for(o=r[f],v=0;v<u;v++)e[n]=o[v],n+=t;return e}Sc.exports=Aur});var Yu=s((E2e,Ic)=>{"use strict";var Sur=b(),_c=Ac(),Tur=Tc();Sur(_c,"assign",Tur);Ic.exports=_c});var Rc=s((N2e,Lc)=>{"use strict";var _ur=/./;Lc.exports=_ur});var Zu=s((O2e,Pc)=>{"use strict";function Iur(r){return typeof r=="boolean"}Pc.exports=Iur});var Mc=s((A2e,Fc)=>{"use strict";function Lur(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}Fc.exports=Lur});var kc=s((S2e,Bc)=>{"use strict";var Rur=Mc();Bc.exports=Rur});var Cc=s((T2e,jc)=>{"use strict";var Pur=kc(),Fur=Pur();function Mur(){return Fur&&typeof Symbol.toStringTag=="symbol"}jc.exports=Mur});var ri=s((_2e,Vc)=>{"use strict";var Bur=Cc();Vc.exports=Bur});var $u=s((I2e,Uc)=>{"use strict";var kur=Object.prototype.toString;Uc.exports=kur});var Hc=s((L2e,Gc)=>{"use strict";var jur=$u();function Cur(r){return jur.call(r)}Gc.exports=Cur});var xc=s((R2e,Wc)=>{"use strict";var Vur=Object.prototype.hasOwnProperty;function Uur(r,e){return r==null?!1:Vur.call(r,e)}Wc.exports=Uur});var A=s((P2e,Dc)=>{"use strict";var Gur=xc();Dc.exports=Gur});var Xc=s((F2e,zc)=>{"use strict";var Hur=typeof Symbol=="function"?Symbol:void 0;zc.exports=Hur});var Qu=s((M2e,Jc)=>{"use strict";var Wur=Xc();Jc.exports=Wur});var $c=s((B2e,Zc)=>{"use strict";var Yc=Qu(),xur=typeof Yc=="function"?Yc.toStringTag:"";Zc.exports=xur});var Kc=s((k2e,Qc)=>{"use strict";var Dur=A(),an=$c(),Ku=$u();function zur(r){var e,t,i;if(r==null)return Ku.call(r);t=r[an],e=Dur(r,an);try{r[an]=void 0}catch{return Ku.call(r)}return i=Ku.call(r),e?r[an]=t:delete r[an],i}Qc.exports=zur});var er=s((j2e,r4)=>{"use strict";var Xur=ri(),Jur=Hc(),Yur=Kc(),ro;Xur()?ro=Yur:ro=Jur;r4.exports=ro});var t4=s((C2e,e4)=>{"use strict";var Zur=Boolean;e4.exports=Zur});var eo=s((V2e,i4)=>{"use strict";var $ur=t4();i4.exports=$ur});var a4=s((U2e,n4)=>{"use strict";var Qur=Boolean.prototype.toString;n4.exports=Qur});var u4=s((G2e,s4)=>{"use strict";var Kur=a4();function ror(r){try{return Kur.call(r),!0}catch{return!1}}s4.exports=ror});var to=s((H2e,o4)=>{"use strict";var eor=ri(),tor=er(),ior=eo(),nor=u4(),aor=eor();function sor(r){return typeof r=="object"?r instanceof ior?!0:aor?nor(r):tor(r)==="[object Boolean]":!1}o4.exports=sor});var f4=s((W2e,v4)=>{"use strict";var uor=Zu(),oor=to();function vor(r){return uor(r)||oor(r)}v4.exports=vor});var gr=s((x2e,l4)=>{"use strict";var c4=b(),io=f4(),cor=Zu(),lor=to();c4(io,"isPrimitive",cor);c4(io,"isObject",lor);l4.exports=io});var g4=s((D2e,p4)=>{"use strict";function por(){return new Function("return this;")()}p4.exports=por});var d4=s((z2e,m4)=>{"use strict";var gor=typeof self=="object"?self:null;m4.exports=gor});var q4=s((X2e,h4)=>{"use strict";var mor=typeof window=="object"?window:null;h4.exports=mor});var b4=s((J2e,y4)=>{"use strict";var dor=typeof globalThis=="object"?globalThis:null;y4.exports=dor});var no=s((Y2e,O4)=>{"use strict";var hor=gr().isPrimitive,qor=y(),yor=g4(),w4=d4(),E4=q4(),N4=b4();function bor(r){if(arguments.length){if(!hor(r))throw new TypeError(qor("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return yor()}if(N4)return N4;if(w4)return w4;if(E4)return E4;throw new Error("unexpected error. Unable to resolve global object.")}O4.exports=bor});var T4=s((Z2e,S4)=>{"use strict";var wor=no(),A4=wor(),Eor=A4.document&&A4.document.childNodes;S4.exports=Eor});var I4=s(($2e,_4)=>{"use strict";var Nor=Int8Array;_4.exports=Nor});var R4=s((Q2e,L4)=>{"use strict";var Oor=Rc(),Aor=T4(),Sor=I4();function Tor(){return typeof Oor=="function"||typeof Sor=="object"||typeof Aor=="function"}L4.exports=Tor});var ao=s((K2e,P4)=>{"use strict";function _or(){return/^\s*function\s*([^(]*)/i}P4.exports=_or});var M4=s((r1e,F4)=>{"use strict";var Ior=ao(),Lor=Ior();F4.exports=Lor});var so=s((e1e,k4)=>{"use strict";var Ror=b(),B4=ao(),Por=M4();Ror(B4,"REGEXP",Por);k4.exports=B4});var C4=s((t1e,j4)=>{"use strict";var For=er(),uo;function Mor(r){return For(r)==="[object Array]"}Array.isArray?uo=Array.isArray:uo=Mor;j4.exports=uo});var mr=s((i1e,V4)=>{"use strict";var Bor=C4();V4.exports=Bor});var G4=s((n1e,U4)=>{"use strict";var kor=mr(),jor=y();function Cor(r){if(typeof r!="function")throw new TypeError(jor("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!kor(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}U4.exports=Cor});var W4=s((a1e,H4)=>{"use strict";var Vor=G4();H4.exports=Vor});var D4=s((s1e,x4)=>{"use strict";function Uor(r){return r!==null&&typeof r=="object"}x4.exports=Uor});var vo=s((u1e,z4)=>{"use strict";var Gor=b(),Hor=W4(),oo=D4(),Wor=Hor(oo);Gor(oo,"isObjectLikeArray",Wor);z4.exports=oo});var J4=s((o1e,X4)=>{"use strict";var xor=vo();function Dor(r){return xor(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}X4.exports=Dor});var Ft=s((v1e,Y4)=>{"use strict";var zor=J4();Y4.exports=zor});var $4=s((f1e,Z4)=>{"use strict";var Xor=er(),Jor=so().REGEXP,Yor=Ft();function Zor(r){var e,t,i;if(t=Xor(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Jor.exec(i.toString()),e)return e[1]}return Yor(r)?"Buffer":t}Z4.exports=Zor});var ze=s((c1e,Q4)=>{"use strict";var $or=$4();Q4.exports=$or});var rl=s((l1e,K4)=>{"use strict";var Qor=ze();function Kor(r){var e;return r===null?"null":(e=typeof r,e==="object"?Qor(r).toLowerCase():e)}K4.exports=Kor});var tl=s((p1e,el)=>{"use strict";var r2r=ze();function e2r(r){return r2r(r).toLowerCase()}el.exports=e2r});var la=s((g1e,il)=>{"use strict";var t2r=R4(),i2r=rl(),n2r=tl(),a2r=t2r()?n2r:i2r;il.exports=a2r});var al=s((m1e,nl)=>{"use strict";var s2r=la();function u2r(r){return s2r(r)==="function"}nl.exports=u2r});var _=s((d1e,sl)=>{"use strict";var o2r=al();sl.exports=o2r});var ol=s((h1e,ul)=>{"use strict";var v2r=Math.floor;ul.exports=v2r});var J=s((q1e,vl)=>{"use strict";var f2r=ol();vl.exports=f2r});var cl=s((y1e,fl)=>{"use strict";var c2r=J();function l2r(r){return c2r(r)===r}fl.exports=l2r});var Lr=s((b1e,ll)=>{"use strict";var p2r=cl();ll.exports=p2r});var gl=s((w1e,pl)=>{"use strict";var g2r=9007199254740991;pl.exports=g2r});var dl=s((E1e,ml)=>{"use strict";var m2r=Lr(),d2r=gl();function h2r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&m2r(r.length)&&r.length>=0&&r.length<=d2r}ml.exports=h2r});var Wr=s((N1e,hl)=>{"use strict";var q2r=dl();hl.exports=q2r});var yl=s((O1e,ql)=>{"use strict";var y2r=_();function b2r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&y2r(r.next)}ql.exports=b2r});var wl=s((A1e,bl)=>{"use strict";var w2r=yl();bl.exports=w2r});var Ol=s((S1e,Nl)=>{"use strict";var El="function";function E2r(r){return typeof r.get===El&&typeof r.set===El}Nl.exports=E2r});var fo=s((T1e,Al)=>{"use strict";var N2r=Ol();Al.exports=N2r});var _l=s((_1e,Tl)=>{"use strict";var Sl={complex128:O2r,complex64:A2r,default:S2r};function O2r(r,e,t){r.set(t,e)}function A2r(r,e,t){r.set(t,e)}function S2r(r,e,t){r.set(t,e)}function T2r(r){var e=Sl[r];return typeof e=="function"?e:Sl.default}Tl.exports=T2r});var co=s((I1e,Il)=>{"use strict";var _2r=_l();Il.exports=_2r});var Pl=s((L1e,Rl)=>{"use strict";var Ll={float64:I2r,float32:L2r,int32:R2r,int16:P2r,int8:F2r,uint32:M2r,uint16:B2r,uint8:k2r,uint8c:j2r,generic:C2r,default:V2r};function I2r(r,e,t){r[e]=t}function L2r(r,e,t){r[e]=t}function R2r(r,e,t){r[e]=t}function P2r(r,e,t){r[e]=t}function F2r(r,e,t){r[e]=t}function M2r(r,e,t){r[e]=t}function B2r(r,e,t){r[e]=t}function k2r(r,e,t){r[e]=t}function j2r(r,e,t){r[e]=t}function C2r(r,e,t){r[e]=t}function V2r(r,e,t){r[e]=t}function U2r(r){var e=Ll[r];return typeof e=="function"?e:Ll.default}Rl.exports=U2r});var lo=s((R1e,Fl)=>{"use strict";var G2r=Pl();Fl.exports=G2r});var Bl=s((P1e,Ml)=>{"use strict";var H2r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};Ml.exports=H2r});var jl=s((F1e,kl)=>{"use strict";var W2r=er(),x2r=typeof Float64Array=="function";function D2r(r){return x2r&&r instanceof Float64Array||W2r(r)==="[object Float64Array]"}kl.exports=D2r});var Vl=s((M1e,Cl)=>{"use strict";var z2r=jl();Cl.exports=z2r});var Gl=s((B1e,Ul)=>{"use strict";var X2r=typeof Float64Array=="function"?Float64Array:null;Ul.exports=X2r});var xl=s((k1e,Wl)=>{"use strict";var J2r=Vl(),Hl=Gl();function Y2r(){var r,e;if(typeof Hl!="function")return!1;try{e=new Hl([1,3.14,-3.14,NaN]),r=J2r(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}Wl.exports=Y2r});var po=s((j1e,Dl)=>{"use strict";var Z2r=xl();Dl.exports=Z2r});var Xl=s((C1e,zl)=>{"use strict";var $2r=typeof Float64Array=="function"?Float64Array:void 0;zl.exports=$2r});var Yl=s((V1e,Jl)=>{"use strict";function Q2r(){throw new Error("not implemented")}Jl.exports=Q2r});var cr=s((U1e,Zl)=>{"use strict";var K2r=po(),r1r=Xl(),e1r=Yl(),go;K2r()?go=r1r:go=e1r;Zl.exports=go});var Ql=s((G1e,$l)=>{"use strict";var t1r=er(),i1r=typeof Float32Array=="function";function n1r(r){return i1r&&r instanceof Float32Array||t1r(r)==="[object Float32Array]"}$l.exports=n1r});var r8=s((H1e,Kl)=>{"use strict";var a1r=Ql();Kl.exports=a1r});var I=s((W1e,e8)=>{"use strict";var s1r=Number.POSITIVE_INFINITY;e8.exports=s1r});var i8=s((x1e,t8)=>{"use strict";var u1r=typeof Float32Array=="function"?Float32Array:null;t8.exports=u1r});var s8=s((D1e,a8)=>{"use strict";var o1r=r8(),v1r=I(),n8=i8();function f1r(){var r,e;if(typeof n8!="function")return!1;try{e=new n8([1,3.14,-3.14,5e40]),r=o1r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===v1r}catch{r=!1}return r}a8.exports=f1r});var o8=s((z1e,u8)=>{"use strict";var c1r=s8();u8.exports=c1r});var f8=s((X1e,v8)=>{"use strict";var l1r=typeof Float32Array=="function"?Float32Array:void 0;v8.exports=l1r});var l8=s((J1e,c8)=>{"use strict";function p1r(){throw new Error("not implemented")}c8.exports=p1r});var Zr=s((Y1e,p8)=>{"use strict";var g1r=o8(),m1r=f8(),d1r=l8(),mo;g1r()?mo=m1r:mo=d1r;p8.exports=mo});var m8=s((Z1e,g8)=>{"use strict";var h1r=er(),q1r=typeof Uint32Array=="function";function y1r(r){return q1r&&r instanceof Uint32Array||h1r(r)==="[object Uint32Array]"}g8.exports=y1r});var ve=s(($1e,d8)=>{"use strict";var b1r=m8();d8.exports=b1r});var ei=s((Q1e,h8)=>{"use strict";var w1r=4294967295;h8.exports=w1r});var y8=s((K1e,q8)=>{"use strict";var E1r=typeof Uint32Array=="function"?Uint32Array:null;q8.exports=E1r});var E8=s((r3e,w8)=>{"use strict";var N1r=ve(),ho=ei(),b8=y8();function O1r(){var r,e;if(typeof b8!="function")return!1;try{e=[1,3.14,-3.14,ho+1,ho+2],e=new b8(e),r=N1r(e)&&e[0]===1&&e[1]===3&&e[2]===ho-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}w8.exports=O1r});var O8=s((e3e,N8)=>{"use strict";var A1r=E8();N8.exports=A1r});var S8=s((t3e,A8)=>{"use strict";var S1r=typeof Uint32Array=="function"?Uint32Array:void 0;A8.exports=S1r});var _8=s((i3e,T8)=>{"use strict";function T1r(){throw new Error("not implemented")}T8.exports=T1r});var lr=s((n3e,I8)=>{"use strict";var _1r=O8(),I1r=S8(),L1r=_8(),qo;_1r()?qo=I1r:qo=L1r;I8.exports=qo});var R8=s((a3e,L8)=>{"use strict";var R1r=er(),P1r=typeof Int32Array=="function";function F1r(r){return P1r&&r instanceof Int32Array||R1r(r)==="[object Int32Array]"}L8.exports=F1r});var pa=s((s3e,P8)=>{"use strict";var M1r=R8();P8.exports=M1r});var ti=s((u3e,F8)=>{"use strict";var B1r=2147483647;F8.exports=B1r});var B8=s((o3e,M8)=>{"use strict";var k1r=-2147483648;M8.exports=k1r});var j8=s((v3e,k8)=>{"use strict";var j1r=typeof Int32Array=="function"?Int32Array:null;k8.exports=j1r});var U8=s((f3e,V8)=>{"use strict";var C1r=pa(),V1r=ti(),U1r=B8(),C8=j8();function G1r(){var r,e;if(typeof C8!="function")return!1;try{e=new C8([1,3.14,-3.14,V1r+1]),r=C1r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===U1r}catch{r=!1}return r}V8.exports=G1r});var H8=s((c3e,G8)=>{"use strict";var H1r=U8();G8.exports=H1r});var x8=s((l3e,W8)=>{"use strict";var W1r=typeof Int32Array=="function"?Int32Array:void 0;W8.exports=W1r});var z8=s((p3e,D8)=>{"use strict";function x1r(){throw new Error("not implemented")}D8.exports=x1r});var Xe=s((g3e,X8)=>{"use strict";var D1r=H8(),z1r=x8(),X1r=z8(),yo;D1r()?yo=z1r:yo=X1r;X8.exports=yo});var Y8=s((m3e,J8)=>{"use strict";var J1r=er(),Y1r=typeof Uint16Array=="function";function Z1r(r){return Y1r&&r instanceof Uint16Array||J1r(r)==="[object Uint16Array]"}J8.exports=Z1r});var $8=s((d3e,Z8)=>{"use strict";var $1r=Y8();Z8.exports=$1r});var K8=s((h3e,Q8)=>{"use strict";var Q1r=65535;Q8.exports=Q1r});var e5=s((q3e,r5)=>{"use strict";var K1r=typeof Uint16Array=="function"?Uint16Array:null;r5.exports=K1r});var n5=s((y3e,i5)=>{"use strict";var r3r=$8(),bo=K8(),t5=e5();function e3r(){var r,e;if(typeof t5!="function")return!1;try{e=[1,3.14,-3.14,bo+1,bo+2],e=new t5(e),r=r3r(e)&&e[0]===1&&e[1]===3&&e[2]===bo-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}i5.exports=e3r});var s5=s((b3e,a5)=>{"use strict";var t3r=n5();a5.exports=t3r});var o5=s((w3e,u5)=>{"use strict";var i3r=typeof Uint16Array=="function"?Uint16Array:void 0;u5.exports=i3r});var f5=s((E3e,v5)=>{"use strict";function n3r(){throw new Error("not implemented")}v5.exports=n3r});var Mt=s((N3e,c5)=>{"use strict";var a3r=s5(),s3r=o5(),u3r=f5(),wo;a3r()?wo=s3r:wo=u3r;c5.exports=wo});var p5=s((O3e,l5)=>{"use strict";var o3r=er(),v3r=typeof Int16Array=="function";function f3r(r){return v3r&&r instanceof Int16Array||o3r(r)==="[object Int16Array]"}l5.exports=f3r});var m5=s((A3e,g5)=>{"use strict";var c3r=p5();g5.exports=c3r});var h5=s((S3e,d5)=>{"use strict";var l3r=32767;d5.exports=l3r});var y5=s((T3e,q5)=>{"use strict";var p3r=-32768;q5.exports=p3r});var w5=s((_3e,b5)=>{"use strict";var g3r=typeof Int16Array=="function"?Int16Array:null;b5.exports=g3r});var O5=s((I3e,N5)=>{"use strict";var m3r=m5(),d3r=h5(),h3r=y5(),E5=w5();function q3r(){var r,e;if(typeof E5!="function")return!1;try{e=new E5([1,3.14,-3.14,d3r+1]),r=m3r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===h3r}catch{r=!1}return r}N5.exports=q3r});var S5=s((L3e,A5)=>{"use strict";var y3r=O5();A5.exports=y3r});var _5=s((R3e,T5)=>{"use strict";var b3r=typeof Int16Array=="function"?Int16Array:void 0;T5.exports=b3r});var L5=s((P3e,I5)=>{"use strict";function w3r(){throw new Error("not implemented")}I5.exports=w3r});var ii=s((F3e,R5)=>{"use strict";var E3r=S5(),N3r=_5(),O3r=L5(),Eo;E3r()?Eo=N3r:Eo=O3r;R5.exports=Eo});var F5=s((M3e,P5)=>{"use strict";var A3r=er(),S3r=typeof Uint8Array=="function";function T3r(r){return S3r&&r instanceof Uint8Array||A3r(r)==="[object Uint8Array]"}P5.exports=T3r});var B5=s((B3e,M5)=>{"use strict";var _3r=F5();M5.exports=_3r});var j5=s((k3e,k5)=>{"use strict";var I3r=255;k5.exports=I3r});var V5=s((j3e,C5)=>{"use strict";var L3r=typeof Uint8Array=="function"?Uint8Array:null;C5.exports=L3r});var H5=s((C3e,G5)=>{"use strict";var R3r=B5(),No=j5(),U5=V5();function P3r(){var r,e;if(typeof U5!="function")return!1;try{e=[1,3.14,-3.14,No+1,No+2],e=new U5(e),r=R3r(e)&&e[0]===1&&e[1]===3&&e[2]===No-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}G5.exports=P3r});var x5=s((V3e,W5)=>{"use strict";var F3r=H5();W5.exports=F3r});var z5=s((U3e,D5)=>{"use strict";var M3r=typeof Uint8Array=="function"?Uint8Array:void 0;D5.exports=M3r});var J5=s((G3e,X5)=>{"use strict";function B3r(){throw new Error("not implemented")}X5.exports=B3r});var $r=s((H3e,Y5)=>{"use strict";var k3r=x5(),j3r=z5(),C3r=J5(),Oo;k3r()?Oo=j3r:Oo=C3r;Y5.exports=Oo});var $5=s((W3e,Z5)=>{"use strict";var V3r=er(),U3r=typeof Uint8ClampedArray=="function";function G3r(r){return U3r&&r instanceof Uint8ClampedArray||V3r(r)==="[object Uint8ClampedArray]"}Z5.exports=G3r});var K5=s((x3e,Q5)=>{"use strict";var H3r=$5();Q5.exports=H3r});var e7=s((D3e,r7)=>{"use strict";var W3r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;r7.exports=W3r});var n7=s((z3e,i7)=>{"use strict";var x3r=K5(),t7=e7();function D3r(){var r,e;if(typeof t7!="function")return!1;try{e=new t7([-1,0,1,3.14,4.99,255,256]),r=x3r(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}i7.exports=D3r});var s7=s((X3e,a7)=>{"use strict";var z3r=n7();a7.exports=z3r});var o7=s((J3e,u7)=>{"use strict";var X3r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;u7.exports=X3r});var f7=s((Y3e,v7)=>{"use strict";function J3r(){throw new Error("not implemented")}v7.exports=J3r});var ni=s((Z3e,c7)=>{"use strict";var Y3r=s7(),Z3r=o7(),$3r=f7(),Ao;Y3r()?Ao=Z3r:Ao=$3r;c7.exports=Ao});var p7=s(($3e,l7)=>{"use strict";var Q3r=er(),K3r=typeof Int8Array=="function";function rvr(r){return K3r&&r instanceof Int8Array||Q3r(r)==="[object Int8Array]"}l7.exports=rvr});var m7=s((Q3e,g7)=>{"use strict";var evr=p7();g7.exports=evr});var h7=s((K3e,d7)=>{"use strict";var tvr=127;d7.exports=tvr});var y7=s((rve,q7)=>{"use strict";var ivr=-128;q7.exports=ivr});var w7=s((eve,b7)=>{"use strict";var nvr=typeof Int8Array=="function"?Int8Array:null;b7.exports=nvr});var O7=s((tve,N7)=>{"use strict";var avr=m7(),svr=h7(),uvr=y7(),E7=w7();function ovr(){var r,e;if(typeof E7!="function")return!1;try{e=new E7([1,3.14,-3.14,svr+1]),r=avr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===uvr}catch{r=!1}return r}N7.exports=ovr});var S7=s((ive,A7)=>{"use strict";var vvr=O7();A7.exports=vvr});var _7=s((nve,T7)=>{"use strict";var fvr=typeof Int8Array=="function"?Int8Array:void 0;T7.exports=fvr});var L7=s((ave,I7)=>{"use strict";function cvr(){throw new Error("not implemented")}I7.exports=cvr});var ai=s((sve,R7)=>{"use strict";var lvr=S7(),pvr=_7(),gvr=L7(),So;lvr()?So=pvr:So=gvr;R7.exports=So});var To=s((uve,P7)=>{"use strict";function mvr(r){return typeof r=="number"}P7.exports=mvr});var M7=s((ove,F7)=>{"use strict";F7.exports=Number});var ga=s((vve,B7)=>{"use strict";var dvr=M7();B7.exports=dvr});var j7=s((fve,k7)=>{"use strict";var hvr=ga(),qvr=hvr.prototype.toString;k7.exports=qvr});var V7=s((cve,C7)=>{"use strict";var yvr=j7();function bvr(r){try{return yvr.call(r),!0}catch{return!1}}C7.exports=bvr});var _o=s((lve,U7)=>{"use strict";var wvr=ri(),Evr=er(),Nvr=ga(),Ovr=V7(),Avr=wvr();function Svr(r){return typeof r=="object"?r instanceof Nvr?!0:Avr?Ovr(r):Evr(r)==="[object Number]":!1}U7.exports=Svr});var H7=s((pve,G7)=>{"use strict";var Tvr=To(),_vr=_o();function Ivr(r){return Tvr(r)||_vr(r)}G7.exports=Ivr});var j=s((gve,x7)=>{"use strict";var W7=b(),Io=H7(),Lvr=To(),Rvr=_o();W7(Io,"isPrimitive",Lvr);W7(Io,"isObject",Rvr);x7.exports=Io});var V=s((mve,D7)=>{"use strict";var Pvr=ga(),Fvr=Pvr.NEGATIVE_INFINITY;D7.exports=Fvr});var Lo=s((dve,z7)=>{"use strict";var Mvr=I(),Bvr=V(),kvr=Lr();function jvr(r){return r<Mvr&&r>Bvr&&kvr(r)}z7.exports=jvr});var Ro=s((hve,X7)=>{"use strict";var Cvr=j().isPrimitive,Vvr=Lo();function Uvr(r){return Cvr(r)&&Vvr(r)}X7.exports=Uvr});var Po=s((qve,J7)=>{"use strict";var Gvr=j().isObject,Hvr=Lo();function Wvr(r){return Gvr(r)&&Hvr(r.valueOf())}J7.exports=Wvr});var Z7=s((yve,Y7)=>{"use strict";var xvr=Ro(),Dvr=Po();function zvr(r){return xvr(r)||Dvr(r)}Y7.exports=zvr});var Rr=s((bve,Q7)=>{"use strict";var $7=b(),Fo=Z7(),Xvr=Ro(),Jvr=Po();$7(Fo,"isPrimitive",Xvr);$7(Fo,"isObject",Jvr);Q7.exports=Fo});var Mo=s((wve,K7)=>{"use strict";var Yvr=Rr().isPrimitive;function Zvr(r){return Yvr(r)&&r>=0}K7.exports=Zvr});var Bo=s((Eve,r9)=>{"use strict";var $vr=Rr().isObject;function Qvr(r){return $vr(r)&&r.valueOf()>=0}r9.exports=Qvr});var t9=s((Nve,e9)=>{"use strict";var Kvr=Mo(),rfr=Bo();function efr(r){return Kvr(r)||rfr(r)}e9.exports=efr});var jr=s((Ove,n9)=>{"use strict";var i9=b(),ko=t9(),tfr=Mo(),ifr=Bo();i9(ko,"isPrimitive",tfr);i9(ko,"isObject",ifr);n9.exports=ko});var s9=s((Ave,a9)=>{"use strict";var nfr=4294967295;a9.exports=nfr});var o9=s((Sve,u9)=>{"use strict";var afr=Lr(),sfr=s9();function ufr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&afr(r.length)&&r.length>=0&&r.length<=sfr}u9.exports=ufr});var Bt=s((Tve,v9)=>{"use strict";var ofr=o9();v9.exports=ofr});var c9=s((_ve,f9)=>{"use strict";var vfr=er(),ffr=typeof ArrayBuffer=="function";function cfr(r){return ffr&&r instanceof ArrayBuffer||vfr(r)==="[object ArrayBuffer]"}f9.exports=cfr});var ma=s((Ive,l9)=>{"use strict";var lfr=c9();l9.exports=lfr});var g9=s((Lve,p9)=>{"use strict";var pfr=mr();function gfr(r){return typeof r=="object"&&r!==null&&!pfr(r)}p9.exports=gfr});var da=s((Rve,m9)=>{"use strict";var mfr=g9();m9.exports=mfr});var h9=s((Pve,d9)=>{"use strict";function dfr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}d9.exports=dfr});var y9=s((Fve,q9)=>{"use strict";function hfr(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}q9.exports=hfr});var O9=s((Mve,N9)=>{"use strict";var b9=j().isPrimitive,w9=De(),sn=b(),E9=y(),qfr=h9(),yfr=y9();function kt(r,e){if(!(this instanceof kt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!b9(r))throw new TypeError(E9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!b9(e))throw new TypeError(E9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return w9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),w9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}sn(kt,"BYTES_PER_ELEMENT",8);sn(kt.prototype,"BYTES_PER_ELEMENT",8);sn(kt.prototype,"byteLength",16);sn(kt.prototype,"toString",qfr);sn(kt.prototype,"toJSON",yfr);N9.exports=kt});var si=s((Bve,A9)=>{"use strict";var bfr=O9();A9.exports=bfr});var T9=s((kve,S9)=>{"use strict";var wfr=typeof Math.fround=="function"?Math.fround:null;S9.exports=wfr});var L9=s((jve,I9)=>{"use strict";var Efr=Zr(),_9=new Efr(1);function Nfr(r){return _9[0]=r,_9[0]}I9.exports=Nfr});var F9=s((Cve,P9)=>{"use strict";var R9=T9(),Ofr=L9(),jo;typeof R9=="function"?jo=R9:jo=Ofr;P9.exports=jo});var B9=s((Vve,M9)=>{"use strict";function Afr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}M9.exports=Afr});var j9=s((Uve,k9)=>{"use strict";function Sfr(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}k9.exports=Sfr});var W9=s((Gve,H9)=>{"use strict";var C9=j().isPrimitive,V9=De(),un=b(),U9=F9(),G9=y(),Tfr=B9(),_fr=j9();function jt(r,e){if(!(this instanceof jt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!C9(r))throw new TypeError(G9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!C9(e))throw new TypeError(G9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return V9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:U9(r)}),V9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:U9(e)}),this}un(jt,"BYTES_PER_ELEMENT",4);un(jt.prototype,"BYTES_PER_ELEMENT",4);un(jt.prototype,"byteLength",8);un(jt.prototype,"toString",Tfr);un(jt.prototype,"toJSON",_fr);H9.exports=jt});var ui=s((Hve,x9)=>{"use strict";var Ifr=W9();x9.exports=Ifr});var z9=s((Wve,D9)=>{"use strict";var Lfr=si(),Rfr=ui();function Pfr(r){return r instanceof Lfr||r instanceof Rfr?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}D9.exports=Pfr});var xr=s((xve,X9)=>{"use strict";var Ffr=z9();X9.exports=Ffr});var Y9=s((Dve,J9)=>{"use strict";var Mfr=Lr();function Bfr(r){return Mfr(r/2)}J9.exports=Bfr});var ha=s((zve,Z9)=>{"use strict";var kfr=Y9();Z9.exports=kfr});var Q9=s((Xve,$9)=>{"use strict";var jfr=A(),qa=Qu();function Cfr(){return typeof qa=="function"&&typeof qa("foo")=="symbol"&&jfr(qa,"iterator")&&typeof qa.iterator=="symbol"}$9.exports=Cfr});var ya=s((Jve,K9)=>{"use strict";var Vfr=Q9();K9.exports=Vfr});var ep=s((Yve,rp)=>{"use strict";var Ufr=ya(),Gfr=Ufr()?Symbol.iterator:null;rp.exports=Gfr});var ba=s((Zve,tp)=>{"use strict";var Hfr=ep();tp.exports=Hfr});var np=s(($ve,ip)=>{"use strict";var Wfr=De();function xfr(r,e,t){Wfr(r,e,{configurable:!1,enumerable:!1,get:t})}ip.exports=xfr});var R=s((Qve,ap)=>{"use strict";var Dfr=np();ap.exports=Dfr});var up=s((Kve,sp)=>{"use strict";function zfr(r){return r.re}sp.exports=zfr});var Je=s((rfe,op)=>{"use strict";var Xfr=up();op.exports=Xfr});var fp=s((efe,vp)=>{"use strict";function Jfr(r){return r.im}vp.exports=Jfr});var Ye=s((tfe,cp)=>{"use strict";var Yfr=fp();cp.exports=Yfr});var pp=s((ife,lp)=>{"use strict";var Zfr=Zr();function $fr(r,e){return new Zfr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}lp.exports=$fr});var oi=s((nfe,gp)=>{"use strict";var Qfr=pp();gp.exports=Qfr});var dp=s((afe,mp)=>{"use strict";var Kfr=cr();function r6r(r,e){return new Kfr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}mp.exports=r6r});var vi=s((sfe,hp)=>{"use strict";var e6r=dp();hp.exports=e6r});var bp=s((ufe,yp)=>{"use strict";var qp={float64:t6r,float32:i6r,int32:n6r,int16:a6r,int8:s6r,uint32:u6r,uint16:o6r,uint8:v6r,uint8c:f6r,generic:c6r,default:l6r};function t6r(r,e){return r[e]}function i6r(r,e){return r[e]}function n6r(r,e){return r[e]}function a6r(r,e){return r[e]}function s6r(r,e){return r[e]}function u6r(r,e){return r[e]}function o6r(r,e){return r[e]}function v6r(r,e){return r[e]}function f6r(r,e){return r[e]}function c6r(r,e){return r[e]}function l6r(r,e){return r[e]}function p6r(r){var e=qp[r];return typeof e=="function"?e:qp.default}yp.exports=p6r});var wa=s((ofe,wp)=>{"use strict";var g6r=bp();wp.exports=g6r});var Op=s((vfe,Np)=>{"use strict";var Ep={complex128:m6r,complex64:d6r,default:h6r};function m6r(r,e){return r.get(e)}function d6r(r,e){return r.get(e)}function h6r(r,e){return r.get(e)}function q6r(r){var e=Ep[r];return typeof e=="function"?e:Ep.default}Np.exports=q6r});var Ea=s((ffe,Ap)=>{"use strict";var y6r=Op();Ap.exports=y6r});var Tp=s((cfe,Sp)=>{"use strict";var b6r=Bt(),w6r=xr(),E6r=Je(),N6r=Ye(),O6r=y();function A6r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,b6r(i)&&i.length>=2)e.push(i[0],i[1]);else if(w6r(i))e.push(E6r(i),N6r(i));else return new TypeError(O6r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Sp.exports=A6r});var Ip=s((lfe,_p)=>{"use strict";var S6r=Bt(),T6r=xr(),_6r=Je(),I6r=Ye(),L6r=y();function R6r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),S6r(a)&&a.length>=2)i.push(a[0],a[1]);else if(T6r(a))i.push(_6r(a),I6r(a));else return new TypeError(L6r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}_p.exports=R6r});var Rp=s((pfe,Lp)=>{"use strict";var P6r=xr(),F6r=Je(),M6r=Ye();function B6r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!P6r(i))return null;r[a]=F6r(i),r[a+1]=M6r(i),a+=2}return r}Lp.exports=B6r});var Up=s((gfe,Vp)=>{"use strict";var on=jr().isPrimitive,Pp=Bt(),Vo=Wr(),Fp=ma(),Mp=da(),k6r=mr(),Ct=_(),fi=xr(),Na=ha(),Co=Lr(),j6r=ya(),ci=ba(),dr=b(),Sa=R(),Cr=Zr(),Bp=ui(),Z=y(),Oa=Je(),Aa=Ye(),C6r=oi(),V6r=vi(),U6r=wa(),G6r=Ea(),kp=Tp(),H6r=Ip(),W6r=Rp(),Pr=Cr.BYTES_PER_ELEMENT*2,jp=j6r();function li(r){return r instanceof tr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Cp(r){return r===tr||r.name==="Complex128Array"}function x6r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Pr}function D6r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Pr*2}function tr(){var r,e,t,i;if(e=arguments.length,!(this instanceof tr))return e===0?new tr:e===1?new tr(arguments[0]):e===2?new tr(arguments[0],arguments[1]):new tr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Cr(0);else if(e===1)if(on(arguments[0]))t=new Cr(arguments[0]*2);else if(Vo(arguments[0]))if(t=arguments[0],i=t.length,i&&k6r(t)&&fi(t[0])){if(t=W6r(new Cr(i*2),t),t===null){if(!Na(i))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Cr(arguments[0])}}else{if(x6r(t))t=C6r(t,0);else if(D6r(t))t=V6r(t,0);else if(!Na(i))throw new RangeError(Z("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Cr(t)}else if(Fp(arguments[0])){if(t=arguments[0],!Co(t.byteLength/Pr))throw new RangeError(Z("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Pr,t.byteLength));t=new Cr(t)}else if(Mp(arguments[0])){if(t=arguments[0],jp===!1)throw new TypeError(Z("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ct(t[ci]))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ci](),!Ct(t.next))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=kp(t),t instanceof Error)throw t;t=new Cr(t)}else throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!Fp(t))throw new TypeError(Z("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!on(r))throw new TypeError(Z("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Co(r/Pr))throw new RangeError(Z("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Pr,r));if(e===2){if(i=t.byteLength-r,!Co(i/Pr))throw new RangeError(Z("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Pr,i));t=new Cr(t,r)}else{if(i=arguments[2],!on(i))throw new TypeError(Z("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Pr>t.byteLength-r)throw new RangeError(Z("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Pr));t=new Cr(t,r,i*2)}}return dr(this,"_buffer",t),dr(this,"_length",t.length/2),this}dr(tr,"BYTES_PER_ELEMENT",Pr);dr(tr,"name","Complex64Array");dr(tr,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,g;if(!Ct(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Cp(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Ct(n))throw new TypeError(Z("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(li(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),fi(l))u[g]=Oa(l),u[g+1]=Aa(l);else if(Pp(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(Vo(e)){if(n){for(v=e.length,e.get&&e.set?f=G6r("default"):f=U6r("default"),p=0;p<v;p++)if(!fi(f(e,p))){c=!0;break}if(c){if(!Na(v))throw new RangeError(Z("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),fi(l))u[g]=Oa(l),u[g+1]=Aa(l);else if(Pp(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(Mp(e)&&jp&&Ct(e[ci])){if(u=e[ci](),!Ct(u.next))throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=H6r(u,n,t):o=kp(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});dr(tr,"of",function(){var e,t;if(!Ct(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Cp(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Sa(tr.prototype,"buffer",function(){return this._buffer.buffer});Sa(tr.prototype,"byteLength",function(){return this._buffer.byteLength});Sa(tr.prototype,"byteOffset",function(){return this._buffer.byteOffset});dr(tr.prototype,"BYTES_PER_ELEMENT",tr.BYTES_PER_ELEMENT);dr(tr.prototype,"copyWithin",function(e,t){if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});dr(tr.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},dr(i,"next",f),dr(i,"return",v),ci&&dr(i,ci,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new Bp(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});dr(tr.prototype,"get",function(e){var t;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!on(e))throw new TypeError(Z("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Bp(t[e],t[e+1])});Sa(tr.prototype,"length",function(){return this._length});dr(tr.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!on(i))throw new TypeError(Z("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(fi(e)){if(i>=this._length)throw new RangeError(Z("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Oa(e),n[i+1]=Aa(e);return}if(li(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Cr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(Vo(e)){for(o=e.length,v=0;v<o;v++)if(!fi(e[v])){u=!0;break}if(u){if(!Na(o))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Cr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=Oa(f),n[i+1]=Aa(f),i+=2;return}throw new TypeError(Z("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Vp.exports=tr});var pi=s((mfe,Gp)=>{"use strict";var z6r=Up();Gp.exports=z6r});var Wp=s((dfe,Hp)=>{"use strict";function X6r(r){return r.re}Hp.exports=X6r});var Qr=s((hfe,xp)=>{"use strict";var J6r=Wp();xp.exports=J6r});var zp=s((qfe,Dp)=>{"use strict";function Y6r(r){return r.im}Dp.exports=Y6r});var Kr=s((yfe,Xp)=>{"use strict";var Z6r=zp();Xp.exports=Z6r});var Yp=s((bfe,Jp)=>{"use strict";var $6r=Bt(),Q6r=xr(),K6r=y(),rcr=Qr(),ecr=Kr();function tcr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,$6r(i)&&i.length>=2)e.push(i[0],i[1]);else if(Q6r(i))e.push(rcr(i),ecr(i));else return new TypeError(K6r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Jp.exports=tcr});var $p=s((wfe,Zp)=>{"use strict";var icr=Bt(),ncr=xr(),acr=y(),scr=Qr(),ucr=Kr();function ocr(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),icr(a)&&a.length>=2)i.push(a[0],a[1]);else if(ncr(a))i.push(scr(a),ucr(a));else return new TypeError(acr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}Zp.exports=ocr});var Kp=s((Efe,Qp)=>{"use strict";var vcr=xr(),fcr=Qr(),ccr=Kr();function lcr(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!vcr(i))return null;r[a]=fcr(i),r[a+1]=ccr(i),a+=2}return r}Qp.exports=lcr});var og=s((Nfe,ug)=>{"use strict";var vn=jr().isPrimitive,rg=Bt(),Go=Wr(),eg=ma(),tg=da(),pcr=mr(),Vt=_(),gi=xr(),Ta=ha(),Uo=Lr(),gcr=ya(),mi=ba(),hr=b(),La=R(),Vr=cr(),ig=si(),_a=Qr(),Ia=Kr(),mcr=oi(),dcr=vi(),hcr=wa(),qcr=Ea(),$=y(),ng=Yp(),ycr=$p(),bcr=Kp(),Fr=Vr.BYTES_PER_ELEMENT*2,ag=gcr();function di(r){return r instanceof ir||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function sg(r){return r===ir||r.name==="Complex64Array"}function wcr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Fr/2}function Ecr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Fr}function ir(){var r,e,t,i;if(e=arguments.length,!(this instanceof ir))return e===0?new ir:e===1?new ir(arguments[0]):e===2?new ir(arguments[0],arguments[1]):new ir(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Vr(0);else if(e===1)if(vn(arguments[0]))t=new Vr(arguments[0]*2);else if(Go(arguments[0]))if(t=arguments[0],i=t.length,i&&pcr(t)&&gi(t[0])){if(t=bcr(new Vr(i*2),t),t===null){if(!Ta(i))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Vr(arguments[0])}}else{if(wcr(t))t=mcr(t,0);else if(Ecr(t))t=dcr(t,0);else if(!Ta(i))throw new RangeError($("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Vr(t)}else if(eg(arguments[0])){if(t=arguments[0],!Uo(t.byteLength/Fr))throw new RangeError($("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Fr,t.byteLength));t=new Vr(t)}else if(tg(arguments[0])){if(t=arguments[0],ag===!1)throw new TypeError($("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Vt(t[mi]))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[mi](),!Vt(t.next))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=ng(t),t instanceof Error)throw t;t=new Vr(t)}else throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!eg(t))throw new TypeError($("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!vn(r))throw new TypeError($("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Uo(r/Fr))throw new RangeError($("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Fr,r));if(e===2){if(i=t.byteLength-r,!Uo(i/Fr))throw new RangeError($("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Fr,i));t=new Vr(t,r)}else{if(i=arguments[2],!vn(i))throw new TypeError($("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Fr>t.byteLength-r)throw new RangeError($("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Fr));t=new Vr(t,r,i*2)}}return hr(this,"_buffer",t),hr(this,"_length",t.length/2),this}hr(ir,"BYTES_PER_ELEMENT",Fr);hr(ir,"name","Complex128Array");hr(ir,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,g;if(!Vt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!sg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Vt(n))throw new TypeError($("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(di(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),gi(l))u[g]=_a(l),u[g+1]=Ia(l);else if(rg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(Go(e)){if(n){for(v=e.length,e.get&&e.set?f=qcr("default"):f=hcr("default"),p=0;p<v;p++)if(!gi(f(e,p))){c=!0;break}if(c){if(!Ta(v))throw new RangeError($("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),gi(l))u[g]=_a(l),u[g+1]=Ia(l);else if(rg(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(tg(e)&&ag&&Vt(e[mi])){if(u=e[mi](),!Vt(u.next))throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=ycr(u,n,t):o=ng(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});hr(ir,"of",function(){var e,t;if(!Vt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!sg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});La(ir.prototype,"buffer",function(){return this._buffer.buffer});La(ir.prototype,"byteLength",function(){return this._buffer.byteLength});La(ir.prototype,"byteOffset",function(){return this._buffer.byteOffset});hr(ir.prototype,"BYTES_PER_ELEMENT",ir.BYTES_PER_ELEMENT);hr(ir.prototype,"copyWithin",function(e,t){if(!di(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});hr(ir.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!di(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},hr(i,"next",f),hr(i,"return",v),mi&&hr(i,mi,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new ig(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});hr(ir.prototype,"get",function(e){var t;if(!di(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!vn(e))throw new TypeError($("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new ig(t[e],t[e+1])});La(ir.prototype,"length",function(){return this._length});hr(ir.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!di(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!vn(i))throw new TypeError($("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(gi(e)){if(i>=this._length)throw new RangeError($("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=_a(e),n[i+1]=Ia(e);return}if(di(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Fr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Vr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(Go(e)){for(o=e.length,v=0;v<o;v++)if(!gi(e[v])){u=!0;break}if(u){if(!Ta(o))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Fr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Vr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=_a(f),n[i+1]=Ia(f),i+=2;return}throw new TypeError($("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});ug.exports=ir});var hi=s((Ofe,vg)=>{"use strict";var Ncr=og();vg.exports=Ncr});var cg=s((Afe,fg)=>{"use strict";var Ocr=cr(),Acr=Zr(),Scr=lr(),Tcr=Xe(),_cr=Mt(),Icr=ii(),Lcr=$r(),Rcr=ni(),Pcr=ai(),Fcr=pi(),Mcr=hi(),Bcr=[Ocr,Acr,Tcr,Scr,Icr,_cr,Pcr,Lcr,Rcr,Fcr,Mcr];fg.exports=Bcr});var pg=s((Sfe,lg)=>{"use strict";var kcr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];lg.exports=kcr});var dg=s((Tfe,mg)=>{"use strict";var jcr=Ft(),Ccr=mr(),Vcr=ze(),Ucr=Bl(),Gcr=cg(),gg=pg(),Hcr=gg.length;function Wcr(r){var e;if(Ccr(r))return"generic";if(jcr(r))return null;for(e=0;e<Hcr;e++)if(r instanceof Gcr[e])return gg[e];return Ucr[Vcr(r)]||null}mg.exports=Wcr});var Ra=s((_fe,hg)=>{"use strict";var xcr=dg();hg.exports=xcr});var bg=s((Ife,yg)=>{"use strict";var qg=_(),Dcr=Wr(),zcr=wl(),Xcr=fo(),Jcr=co(),Ycr=lo(),Zcr=Ra(),Ho=y();function $cr(){var r,e,t,i,n,a,u,o,f;if(r=arguments[0],arguments.length>1)if(Dcr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!qg(t))throw new TypeError(Ho("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!qg(t))throw new TypeError(Ho("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!zcr(r))throw new TypeError(Ho("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,f=r.next(),!f.done;)i.push(t.call(e,f.value,o));return i}for(;f=r.next(),!f.done;)i.push(f.value);return i}if(n=i.length,u=Zcr(i),Xcr(i)?a=Jcr(u):a=Ycr(u),t){for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,t.call(e,f.value,o));return i}for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,f.value);return i}yg.exports=$cr});var Eg=s((Lfe,wg)=>{"use strict";var Qcr=bg();wg.exports=Qcr});var Og=s((Rfe,Ng)=>{"use strict";function Kcr(r){return r!==r}Ng.exports=Kcr});var E=s((Pfe,Ag)=>{"use strict";var r4r=Og();Ag.exports=r4r});var Tg=s((Ffe,Sg)=>{"use strict";var e4r={Complex64:"complex64",Complex128:"complex128"};Sg.exports=e4r});var Ig=s((Mfe,_g)=>{"use strict";var t4r=ui(),i4r=si(),n4r=[t4r,i4r];_g.exports=n4r});var Rg=s((Bfe,Lg)=>{"use strict";var a4r=["complex64","complex128"];Lg.exports=a4r});var Mg=s((kfe,Fg)=>{"use strict";var s4r=ze(),u4r=Tg(),o4r=Ig(),Pg=Rg(),v4r=Pg.length;function f4r(r){var e;for(e=0;e<v4r;e++)if(r instanceof o4r[e])return Pg[e];return u4r[s4r(r)]||null}Fg.exports=f4r});var Wo=s((jfe,Bg)=>{"use strict";var c4r=Mg();Bg.exports=c4r});var jg=s((Cfe,kg)=>{"use strict";var l4r=cr(),p4r=Zr(),g4r=hi(),m4r=pi(),d4r={float64:l4r,float32:p4r,complex128:g4r,complex64:m4r};kg.exports=d4r});var Vg=s((Vfe,Cg)=>{"use strict";var h4r=jg();function q4r(r){return h4r[r]||null}Cg.exports=q4r});var Gg=s((Ufe,Ug)=>{"use strict";var y4r=Vg();Ug.exports=y4r});var Wg=s((Gfe,Hg)=>{"use strict";function b4r(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}Hg.exports=b4r});var Yg=s((Hfe,Jg)=>{"use strict";var w4r=ui(),E4r=si(),xg=Qr(),Dg=Kr(),zg=Je(),Xg=Ye();function N4r(r,e,t,i,n,a){var u,o,f,v,c,l,p,g,h,d,m,q,N;if(n===0)return[];if(o=0,r==="float64"?(v=e,l=0):r==="complex64"?(o+=1,v=zg(e),l=Xg(e)):(v=xg(e),l=Dg(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=zg(i),p=Xg(i)):(c=xg(i),p=Dg(i)),o===2?u=w4r:u=E4r,n===1)return a?[new u(c,p)]:[new u(v,l)];for(f=[new u(v,l)],a?q=n-1:q=n,d=(c-v)/q,m=(p-l)/q,N=1;N<q;N++)g=v+d*N,h=l+m*N,f.push(new u(g,h));return a&&f.push(new u(c,p)),f}Jg.exports=N4r});var xo=s((Wfe,Zg)=>{"use strict";function O4r(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}Zg.exports=O4r});var Do=s((xfe,em)=>{"use strict";var $g=Qr(),Qg=Kr(),Kg=Je(),rm=Ye();function A4r(r,e,t,i,n,a,u){var o,f,v,c,l,p,g,h,d;if(a===0)return r;if(e==="float64"?(o=t,v=0):e==="complex64"?(o=Kg(t),v=rm(t)):(o=$g(t),v=Qg(t)),i==="float64"?(f=n,c=0):i==="complex64"?(f=Kg(n),c=rm(n)):(f=$g(n),c=Qg(n)),a===1)return u?(r[0]=f,r[1]=c):(r[0]=o,r[1]=v),r;for(r[0]=o,r[1]=v,u?g=a-1:g=a,l=(f-o)/g,p=(c-v)/g,d=2,h=1;h<g;h++)r[d]=o+l*h,r[d+1]=v+p*h,d+=2;return u&&(r[d]=f,r[d+1]=c),r}em.exports=A4r});var im=s((Dfe,tm)=>{"use strict";var S4r=Object;tm.exports=S4r});var qi=s((zfe,nm)=>{"use strict";var T4r=im();nm.exports=T4r});var sm=s((Xfe,am)=>{"use strict";var _4r=Object.getPrototypeOf;am.exports=_4r});var om=s((Jfe,um)=>{"use strict";function I4r(r){return r.__proto__}um.exports=I4r});var fm=s((Yfe,vm)=>{"use strict";var L4r=er(),R4r=om();function P4r(r){var e=R4r(r);return e||e===null?e:L4r(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}vm.exports=P4r});var lm=s((Zfe,cm)=>{"use strict";var F4r=_(),M4r=sm(),B4r=fm(),zo;F4r(Object.getPrototypeOf)?zo=M4r:zo=B4r;cm.exports=zo});var gm=s(($fe,pm)=>{"use strict";var k4r=qi(),j4r=lm();function C4r(r){return r==null?null:(r=k4r(r),j4r(r))}pm.exports=C4r});var Ut=s((Qfe,mm)=>{"use strict";var V4r=gm();mm.exports=V4r});var qm=s((Kfe,hm)=>{"use strict";var U4r=da(),dm=_(),G4r=Ut(),Pa=A(),H4r=er(),W4r=Object.prototype;function x4r(r){var e;for(e in r)if(!Pa(r,e))return!1;return!0}function D4r(r){var e;return U4r(r)?(e=G4r(r),e?!Pa(r,"constructor")&&Pa(e,"constructor")&&dm(e.constructor)&&H4r(e.constructor)==="[object Function]"&&Pa(e,"isPrototypeOf")&&dm(e.isPrototypeOf)&&(e===W4r||x4r(r)):!0):!1}hm.exports=D4r});var L=s((r6e,ym)=>{"use strict";var z4r=qm();ym.exports=z4r});var Xo=s((e6e,bm)=>{"use strict";function X4r(r){return typeof r=="string"}bm.exports=X4r});var Em=s((t6e,wm)=>{"use strict";var J4r=String.prototype.valueOf;wm.exports=J4r});var Om=s((i6e,Nm)=>{"use strict";var Y4r=Em();function Z4r(r){try{return Y4r.call(r),!0}catch{return!1}}Nm.exports=Z4r});var Jo=s((n6e,Am)=>{"use strict";var $4r=ri(),Q4r=er(),K4r=Om(),rlr=$4r();function elr(r){return typeof r=="object"?r instanceof String?!0:rlr?K4r(r):Q4r(r)==="[object String]":!1}Am.exports=elr});var Tm=s((a6e,Sm)=>{"use strict";var tlr=Xo(),ilr=Jo();function nlr(r){return tlr(r)||ilr(r)}Sm.exports=nlr});var K=s((s6e,Im)=>{"use strict";var _m=b(),Yo=Tm(),alr=Xo(),slr=Jo();_m(Yo,"isPrimitive",alr);_m(Yo,"isObject",slr);Im.exports=Yo});var $o=s((u6e,Rm)=>{"use strict";var ulr=L(),Lm=A(),olr=K().isPrimitive,vlr=gr().isPrimitive,Zo=y();function flr(r,e){return ulr(e)?Lm(e,"dtype")&&(r.dtype=e.dtype,!olr(r.dtype))?new TypeError(Zo("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):Lm(e,"endpoint")&&(r.endpoint=e.endpoint,!vlr(r.endpoint))?new TypeError(Zo("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(Zo("invalid argument. Options argument must be an object. Value: `%s`.",e))}Rm.exports=flr});var Qo=s((o6e,clr)=>{clr.exports={endpoint:!0}});var Cm=s((v6e,jm)=>{"use strict";var Pm=xr(),Fm=j().isPrimitive,llr=jr().isPrimitive,Mm=E(),Bm=Wo(),plr=Gg(),glr=oi(),mlr=vi(),yi=y(),dlr=Wg(),hlr=Yg(),qlr=xo(),km=Do(),ylr=$o(),blr=Qo();function wlr(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(o=Bm(r),o===null){if(!Pm(r))throw new TypeError(yi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}v=!0}else{if(!Fm(r)||Mm(r))throw new TypeError(yi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(f=Bm(e),f===null){if(!Pm(e))throw new TypeError(yi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="complex128"}v=!0}else{if(!Fm(e)||Mm(e))throw new TypeError(yi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="float64"}if(!llr(t))throw new TypeError(yi("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:blr.endpoint},o===f?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=ylr(i,arguments[3]),a))throw a;if(i.dtype==="generic")return v?hlr(o,r,f,e,t,i.endpoint):dlr(r,e,t,i.endpoint);if(n=plr(i.dtype),n===null)throw new TypeError(yi('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return km(glr(u,0),o,r,f,e,t,i.endpoint),u;if(i.dtype==="complex128")return km(mlr(u,0),o,r,f,e,t,i.endpoint),u;if(v)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return qlr(u,r,e,t,i.endpoint)}jm.exports=wlr});var Um=s((f6e,Vm)=>{"use strict";var Elr=fo(),Nlr=wa(),Olr=lo(),Alr=Ea(),Slr=co(),Tlr=Ra();function _lr(r){var e=Tlr(r);return Elr(r)?{accessorProtocol:!0,accessors:[Alr(e),Slr(e)]}:{accessorProtocol:!1,accessors:[Nlr(e),Olr(e)]}}Vm.exports=_lr});var Hm=s((c6e,Gm)=>{"use strict";var Ilr=Um();Gm.exports=Ilr});var xm=s((l6e,Wm)=>{"use strict";var Llr=Hm();function Rlr(r){var e=Llr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}Wm.exports=Rlr});var fn=s((p6e,Dm)=>{"use strict";var Plr=xm();Dm.exports=Plr});var $m=s((g6e,Zm)=>{"use strict";var Flr=ui(),Mlr=si(),zm=Qr(),Xm=Kr(),Jm=Je(),Ym=Ye();function Blr(r,e,t,i,n,a,u){var o,f,v,c,l,p,g,h,d,m,q,N,O,F;if(a===0)return r;if(f=0,e==="float64"?(v=t,l=0):e==="complex64"?(f+=1,v=Jm(t),l=Ym(t)):(v=zm(t),l=Xm(t)),i==="float64"?(c=n,p=0):i==="complex64"?(f+=1,c=Jm(n),p=Ym(n)):(c=zm(n),p=Xm(n)),f===2?o=Flr:o=Mlr,h=r.data,g=r.accessors[1],a===1)return u?g(h,0,new o(c,p)):g(h,0,new o(v,l)),r;for(g(h,0,new o(v,l)),u?O=a-1:O=a,q=(c-v)/O,N=(p-l)/O,F=1;F<O;F++)d=v+q*F,m=l+N*F,g(h,F,new o(d,m));return u&&g(h,O,new o(c,p)),r}Zm.exports=Blr});var Km=s((m6e,Qm)=>{"use strict";function klr(r,e,t,i,n){var a,u,o,f,v;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,f=(t-e)/o,v=1;v<o;v++)u(a,v,e+f*v);return n&&u(a,o,t),r}Qm.exports=klr});var ud=s((d6e,sd)=>{"use strict";var rd=xr(),ed=j().isPrimitive,jlr=Wr(),cn=y(),td=E(),id=Wo(),Clr=Ra(),Vlr=oi(),Ulr=vi(),nd=fn(),Glr=$m(),Hlr=Km(),ad=Do(),Wlr=xo(),xlr=$o(),Dlr=Qo();function zlr(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(a=id(r),a===null){if(!rd(r))throw new TypeError(cn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!ed(r)||td(r))throw new TypeError(cn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=id(e),u===null){if(!rd(e))throw new TypeError(cn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!ed(e)||td(e))throw new TypeError(cn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!jlr(t))throw new TypeError(cn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:Dlr.endpoint},arguments.length>3&&(n=xlr(i,arguments[3]),n))throw n;if(f=Clr(t),f===null&&(f="generic"),f==="complex64")return ad(Vlr(t,0),a,r,u,e,t.length,i.endpoint),t;if(f==="complex128")return ad(Ulr(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(f==="generic")return v=nd(t),Glr(v,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return v=nd(t),v.accessorProtocol?(Hlr(v,r,e,t.length,i.endpoint),t):(Wlr(t,r,e,t.length,i.endpoint),t)}sd.exports=zlr});var fd=s((h6e,vd)=>{"use strict";var Xlr=b(),od=Cm(),Jlr=ud();Xlr(od,"assign",Jlr);vd.exports=od});var ld=s((q6e,cd)=>{"use strict";var Ylr=j().isPrimitive,Zlr=K().isPrimitive,$lr=gr().isPrimitive,Qlr=mr(),Klr=y(),r8r={number:Ylr,string:Zlr,boolean:$lr};function e8r(r,e,t){var i,n,a,u,o,f;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],f=0;f<r.length;f++)if(o=r[f],a=e[f],u=r8r[a],u(o))i.push([[o]]),n.push([1,1]);else if(Qlr(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(Klr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[f],a,a,String(o)));return[i,n]}cd.exports=e8r});var Fa=s((y6e,pd)=>{"use strict";var t8r=ld();pd.exports=t8r});var md=s((b6e,gd)=>{"use strict";var i8r=ca();function n8r(r){return i8r(1,r)}gd.exports=n8r});var hd=s((w6e,dd)=>{"use strict";var a8r=md();dd.exports=a8r});var yd=s((E6e,qd)=>{"use strict";function s8r(r,e,t){var i,n,a,u,o,f,v,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(v=r[0],c=r[1],u=0;u<n;u++)for(o=v[u],f=c[u],a=0;a<i;a++)f[a]=t(o[a])}qd.exports=s8r});var Ko=s((N6e,bd)=>{"use strict";var u8r=yd();bd.exports=u8r});var Ed=s((O6e,wd)=>{"use strict";var o8r=ca();function v8r(r){return o8r(0,r)}wd.exports=v8r});var Ma=s((A6e,Nd)=>{"use strict";var f8r=Ed();Nd.exports=f8r});var Ad=s((S6e,Od)=>{"use strict";var Mr=rr(),c8r=zu(),l8r=Ju(),p8r=fa(),g8r=ca(),m8r=Nc(),d8r=Yu(),h8r=Eg(),q8r=fd(),y8r=Fa(),b8r=hd(),w8r=Ko(),E8r=va(),N8r=Ma();function O8r(r){return Mr(r,"bbinary2d",c8r),Mr(r,"bternary2d",l8r),Mr(r,"broadcastShapes",p8r),Mr(r,"filled2d",g8r),Mr(r,"filled2dBy",m8r),Mr(r,"flatten2d",d8r),Mr(r,"iterator2array",h8r),Mr(r,"linspace",q8r),Mr(r,"normalizeBroadcastArgs",y8r),Mr(r,"ones2d",b8r),Mr(r,"unary2d",w8r),Mr(r,"zeros",E8r),Mr(r,"zeros2d",N8r),r}Od.exports=O8r});var _d=s((T6e,Td)=>{"use strict";var Sd=y();function A8r(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(Sd('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(Sd('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}Td.exports=A8r});var Ld=s((_6e,Id)=>{"use strict";var S8r=_d();Id.exports=S8r});var Pd=s((I6e,Rd)=>{"use strict";var T8r=j().isPrimitive,_8r=Ld(),I8r=y();function L8r(r,e,t,i,n,a){var u,o;if(!(T8r(r)&&_8r(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(I8r("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}Rd.exports=L8r});var Md=s((L6e,Fd)=>{"use strict";var R8r=Pd();Fd.exports=R8r});var kd=s((R6e,Bd)=>{"use strict";var P8r=gr().isPrimitive,F8r=y();function M8r(r,e){if(!P8r(r))throw new TypeError(F8r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}Bd.exports=M8r});var Cd=s((P6e,jd)=>{"use strict";var B8r=kd();jd.exports=B8r});var Ud=s((F6e,Vd)=>{"use strict";function k8r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}Vd.exports=k8r});var Hd=s((M6e,Gd)=>{"use strict";var j8r=Ud();Gd.exports=j8r});var xd=s((B6e,Wd)=>{"use strict";var C8r=y(),V8r=Hd();function U8r(r,e,t){if(!V8r(r,e))throw new TypeError(C8r("invalid argument. %s must be broadcast compatible.",t))}Wd.exports=U8r});var zd=s((k6e,Dd)=>{"use strict";var G8r=xd();Dd.exports=G8r});var Jd=s((j6e,Xd)=>{"use strict";function H8r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}Xd.exports=H8r});var Zd=s((C6e,Yd)=>{"use strict";var W8r=Jd();Yd.exports=W8r});var Qd=s((V6e,$d)=>{"use strict";var x8r=y(),D8r=Zd();function z8r(r,e,t,i){if(!D8r(r,e))throw new TypeError(x8r("invalid argument. %s must be broadcast compatible with %s.",t,i))}$d.exports=z8r});var rh=s((U6e,Kd)=>{"use strict";var X8r=Qd();Kd.exports=X8r});var th=s((G6e,eh)=>{"use strict";function J8r(r,e,t){var i,n,a,u,o;for(i=r.length,n=t,a=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?a+=u*(r[o]-1):u<0&&(n+=u*(r[o]-1))}return[n,a]}eh.exports=J8r});var nh=s((H6e,ih)=>{"use strict";function Y8r(r,e,t,i){var n,a,u,o,f;for(n=r.length,a=t,u=t,f=0;f<n;f++){if(r[f]===0)return i[0]=t,i[1]=t,i;o=e[f],o>0?u+=o*(r[f]-1):o<0&&(a+=o*(r[f]-1))}return i[0]=a,i[1]=u,i}ih.exports=Y8r});var r2=s((W6e,sh)=>{"use strict";var Z8r=b(),ah=th(),$8r=nh();Z8r(ah,"assign",$8r);sh.exports=ah});var oh=s((x6e,uh)=>{"use strict";var Q8r=r2();function K8r(r,e,t,i){var n=Q8r(e,t,i);return n[0]>=0&&n[1]<r}uh.exports=K8r});var fh=s((D6e,vh)=>{"use strict";var r5r=oh();vh.exports=r5r});var lh=s((z6e,ch)=>{"use strict";var e5r=fh();function t5r(r,e,t,i){if(e.length&&!e5r(r,e,t,i))throw new Error("invalid arguments. Data buffer is incompatible with the specified ndarray meta data. Ensure that the offset is valid with regard to the strides array and that the data buffer has enough elements to satisfy the desired array shape.")}ch.exports=t5r});var gh=s((X6e,ph)=>{"use strict";var i5r=lh();ph.exports=i5r});var dh=s((J6e,mh)=>{"use strict";var n5r=y();function a5r(r,e){if(r===void 0)throw new Error(n5r("invalid invocation. Must provide %s.",e))}mh.exports=a5r});var e2=s((Y6e,hh)=>{"use strict";var s5r=dh();hh.exports=s5r});var yh=s((Z6e,qh)=>{"use strict";var u5r=y();function o5r(r,e,t,i){if(!(r>e))throw new TypeError(u5r("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}qh.exports=o5r});var wh=s(($6e,bh)=>{"use strict";var v5r=yh();bh.exports=v5r});var Nh=s((Q6e,Eh)=>{"use strict";var f5r=y();function c5r(r,e,t,i){if(!(r>=e))throw new TypeError(f5r("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Eh.exports=c5r});var Ah=s((K6e,Oh)=>{"use strict";var l5r=Nh();Oh.exports=l5r});var Th=s((rce,Sh)=>{"use strict";var p5r=Rr().isPrimitive,g5r=y();function m5r(r,e){if(!p5r(r))throw new TypeError(g5r("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}Sh.exports=m5r});var Ih=s((ece,_h)=>{"use strict";var d5r=Th();_h.exports=d5r});var Rh=s((tce,Lh)=>{"use strict";var h5r=y();function q5r(r,e,t,i){if(!(r<e))throw new TypeError(h5r("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}Lh.exports=q5r});var Fh=s((ice,Ph)=>{"use strict";var y5r=Rh();Ph.exports=y5r});var Bh=s((nce,Mh)=>{"use strict";var b5r=y();function w5r(r,e,t,i){if(!(r<=e))throw new TypeError(b5r("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Mh.exports=w5r});var jh=s((ace,kh)=>{"use strict";var E5r=Bh();kh.exports=E5r});var Vh=s((sce,Ch)=>{"use strict";var N5r=jr().isPrimitive,O5r=y();function A5r(r,e){if(!N5r(r))throw new TypeError(O5r("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}Ch.exports=A5r});var Gh=s((uce,Uh)=>{"use strict";var S5r=Vh();Uh.exports=S5r});var t2=s((oce,Hh)=>{"use strict";var T5r=j().isPrimitive;function _5r(r){return T5r(r)&&r>=0}Hh.exports=_5r});var i2=s((vce,Wh)=>{"use strict";var I5r=j().isObject;function L5r(r){return I5r(r)&&r.valueOf()>=0}Wh.exports=L5r});var Dh=s((fce,xh)=>{"use strict";var R5r=t2(),P5r=i2();function F5r(r){return R5r(r)||P5r(r)}xh.exports=F5r});var Ba=s((cce,Xh)=>{"use strict";var zh=b(),n2=Dh(),M5r=t2(),B5r=i2();zh(n2,"isPrimitive",M5r);zh(n2,"isObject",B5r);Xh.exports=n2});var Yh=s((lce,Jh)=>{"use strict";var k5r=Ba().isPrimitive,j5r=y();function C5r(r,e){if(!k5r(r))throw new TypeError(j5r("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}Jh.exports=C5r});var $h=s((pce,Zh)=>{"use strict";var V5r=Yh();Zh.exports=V5r});var Kh=s((gce,Qh)=>{"use strict";var U5r=j().isPrimitive,G5r=y();function H5r(r,e){if(!U5r(r))throw new TypeError(G5r("invalid argument. %s must be a number. Value: %s.",e,String(r)))}Qh.exports=H5r});var eq=s((mce,rq)=>{"use strict";var W5r=Kh();rq.exports=W5r});var iq=s((dce,tq)=>{"use strict";var x5r=y();function D5r(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(x5r('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}tq.exports=D5r});var aq=s((hce,nq)=>{"use strict";var z5r=iq();nq.exports=z5r});var a2=s((qce,sq)=>{"use strict";var X5r=Rr().isPrimitive;function J5r(r){return X5r(r)&&r>0}sq.exports=J5r});var s2=s((yce,uq)=>{"use strict";var Y5r=Rr().isObject;function Z5r(r){return Y5r(r)&&r.valueOf()>0}uq.exports=Z5r});var vq=s((bce,oq)=>{"use strict";var $5r=a2(),Q5r=s2();function K5r(r){return $5r(r)||Q5r(r)}oq.exports=K5r});var re=s((wce,cq)=>{"use strict";var fq=b(),u2=vq(),r7r=a2(),e7r=s2();fq(u2,"isPrimitive",r7r);fq(u2,"isObject",e7r);cq.exports=u2});var pq=s((Ece,lq)=>{"use strict";var t7r=re().isPrimitive,i7r=y();function n7r(r,e){if(!t7r(r))throw new TypeError(i7r("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}lq.exports=n7r});var o2=s((Nce,gq)=>{"use strict";var a7r=pq();gq.exports=a7r});var v2=s((Oce,mq)=>{"use strict";var s7r=j().isPrimitive;function u7r(r){return s7r(r)&&r>0}mq.exports=u7r});var f2=s((Ace,dq)=>{"use strict";var o7r=j().isObject;function v7r(r){return o7r(r)&&r.valueOf()>0}dq.exports=v7r});var qq=s((Sce,hq)=>{"use strict";var f7r=v2(),c7r=f2();function l7r(r){return f7r(r)||c7r(r)}hq.exports=l7r});var D=s((Tce,bq)=>{"use strict";var yq=b(),c2=qq(),p7r=v2(),g7r=f2();yq(c2,"isPrimitive",p7r);yq(c2,"isObject",g7r);bq.exports=c2});var Eq=s((_ce,wq)=>{"use strict";var m7r=D().isPrimitive,d7r=y();function h7r(r,e){if(!m7r(r))throw new TypeError(d7r("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}wq.exports=h7r});var Oq=s((Ice,Nq)=>{"use strict";var q7r=Eq();Nq.exports=q7r});var l2=s((Lce,Aq)=>{"use strict";var y7r=j().isPrimitive;function b7r(r){return y7r(r)&&r>=0&&r<=1}Aq.exports=b7r});var p2=s((Rce,Sq)=>{"use strict";var w7r=j().isObject;function E7r(r){return w7r(r)&&r.valueOf()>=0&&r.valueOf()<=1}Sq.exports=E7r});var _q=s((Pce,Tq)=>{"use strict";var N7r=l2(),O7r=p2();function A7r(r){return N7r(r)||O7r(r)}Tq.exports=A7r});var ln=s((Fce,Lq)=>{"use strict";var Iq=b(),g2=_q(),S7r=l2(),T7r=p2();Iq(g2,"isPrimitive",S7r);Iq(g2,"isObject",T7r);Lq.exports=g2});var Pq=s((Mce,Rq)=>{"use strict";var _7r=ln().isPrimitive,I7r=y();function L7r(r,e){if(!_7r(r))throw new TypeError(I7r("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}Rq.exports=L7r});var Mq=s((Bce,Fq)=>{"use strict";var R7r=Pq();Fq.exports=R7r});var kq=s((kce,Bq)=>{"use strict";var P7r=mr(),F7r=y();function M7r(r,e){if(!P7r(r))throw new TypeError(F7r("invalid argument. %s must be a range. Value: %s.",e,String(r)))}Bq.exports=M7r});var Cq=s((jce,jq)=>{"use strict";var B7r=kq();jq.exports=B7r});var Uq=s((Cce,Vq)=>{"use strict";function k7r(r){return r.length===1||r[0].length===1}Vq.exports=k7r});var Hq=s((Vce,Gq)=>{"use strict";var j7r=Uq();Gq.exports=j7r});var xq=s((Uce,Wq)=>{"use strict";var C7r=mr(),V7r=Hq();function U7r(r){return C7r(r)&&V7r(r)}Wq.exports=U7r});var zq=s((Gce,Dq)=>{"use strict";var G7r=xq();Dq.exports=G7r});var Jq=s((Hce,Xq)=>{"use strict";var H7r=y(),W7r=zq();function x7r(r,e){if(!W7r(r))throw new TypeError(H7r("invalid argument. %s must consist of only a single row or a single column.",e))}Xq.exports=x7r});var Zq=s((Wce,Yq)=>{"use strict";var D7r=Jq();Yq.exports=D7r});var Qq=s((xce,$q)=>{"use strict";function z7r(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}$q.exports=z7r});var ry=s((Dce,Kq)=>{"use strict";var X7r=Qq();Kq.exports=X7r});var ty=s((zce,ey)=>{"use strict";var J7r=y(),Y7r=ry();function Z7r(r,e,t){if(!Y7r(r,e))throw new TypeError(J7r("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}ey.exports=Z7r});var ny=s((Xce,iy)=>{"use strict";var $7r=ty();iy.exports=$7r});var sy=s((Jce,ay)=>{"use strict";var Q7r=K().isPrimitive,K7r=y();function r9r(r,e){if(!Q7r(r))throw new TypeError(K7r("invalid argument. %s must be a string. Value: %s.",e,String(r)))}ay.exports=r9r});var oy=s((Yce,uy)=>{"use strict";var e9r=sy();uy.exports=e9r});var fy=s((Zce,vy)=>{"use strict";var t9r=y(),i9r=jr().isPrimitive;function n9r(r,e){var t;for(t=0;t<r.length;t++)if(!i9r(r[t]))throw new TypeError(t9r("invalid argument. %s must contain only nonnegative integers.",e))}vy.exports=n9r});var ly=s(($ce,cy)=>{"use strict";var a9r=fy();cy.exports=a9r});var gy=s((Qce,py)=>{"use strict";var s9r=y(),u9r=Rr().isPrimitive;function o9r(r,e){var t;for(t=0;t<r.length;t++)if(!u9r(r[t]))throw new TypeError(s9r("invalid argument. %s must contain only integers.",e))}py.exports=o9r});var dy=s((Kce,my)=>{"use strict";var v9r=gy();my.exports=v9r});var qy=s((r4e,hy)=>{"use strict";var f9r=y();function c9r(r){throw new Error(f9r("invalid argument. Unrecognized option name. Value: %s.",String(r)))}hy.exports=c9r});var by=s((e4e,yy)=>{"use strict";var l9r=qy();yy.exports=l9r});var Ny=s((t4e,Ey)=>{"use strict";var wy=o2(),p9r=e2();function g9r(r,e,t){wy(r,"Number of rows"),wy(e,"Number of columns"),p9r(t,"a pseudorandom number generator seed")}Ey.exports=g9r});var Ay=s((i4e,Oy)=>{"use strict";var m9r=Ny();Oy.exports=m9r});var Ty=s((n4e,Sy)=>{"use strict";var bi=rr(),d9r=mr(),h9r=Rr().isPrimitive,q9r=jr().isPrimitive,y9r=Ba().isPrimitive,b9r=re().isPrimitive,w9r=D().isPrimitive;function E9r(r){return bi(r,"isArray",d9r),bi(r,"isInteger",h9r),bi(r,"isNonNegativeInteger",q9r),bi(r,"isNonNegativeNumber",y9r),bi(r,"isPositiveInteger",b9r),bi(r,"isPositiveNumber",w9r),r}Sy.exports=E9r});var Iy=s((a4e,_y)=>{"use strict";var z=rr(),N9r=Md(),O9r=Cd(),A9r=zd(),S9r=rh(),T9r=gh(),_9r=e2(),I9r=wh(),L9r=Ah(),R9r=Ih(),P9r=Fh(),F9r=jh(),M9r=Gh(),B9r=$h(),k9r=eq(),j9r=aq(),C9r=o2(),V9r=Oq(),U9r=Mq(),G9r=Cq(),H9r=Zq(),W9r=ny(),x9r=oy(),D9r=ly(),z9r=dy(),X9r=by(),J9r=Ay(),Y9r=Ty();function Z9r(r){return z(r,"isBetween",N9r),z(r,"isBoolean",O9r),z(r,"isBroadcastCompatible",A9r),z(r,"isBroadcastCompatibleWith",S9r),z(r,"isBufferLengthCompatible",T9r),z(r,"isDefined",_9r),z(r,"isGreaterThan",I9r),z(r,"isGreaterThanEqual",L9r),z(r,"isInteger",R9r),z(r,"isLessThan",P9r),z(r,"isLessThanEqual",F9r),z(r,"isNonNegativeInteger",M9r),z(r,"isNonNegativeNumber",B9r),z(r,"isNumber",k9r),z(r,"isOneOf",j9r),z(r,"isPositiveInteger",C9r),z(r,"isPositiveNumber",V9r),z(r,"isProbability",U9r),z(r,"isRange",G9r),z(r,"isRange1d",H9r),z(r,"isSameShape",W9r),z(r,"isString",x9r),z(r,"isValidShape",D9r),z(r,"isValidStrides",z9r),z(r,"unrecognizedOptionName",X9r),z(r,"verifyCommonPRNGArgs",J9r),z(r,"base",Y9r({})),r}_y.exports=Z9r});var Ry=s((s4e,Ly)=>{"use strict";var m2=4;function $9r(r,e,t,i,n,a){var u,o,f,v;if(r<=0||e===0)return n;if(i===1&&a===1){if(f=r%m2,f>0)for(v=0;v<f;v++)n[v]+=e*t[v];if(r<m2)return n;for(v=f;v<r;v+=m2)n[v]+=e*t[v],n[v+1]+=e*t[v+1],n[v+2]+=e*t[v+2],n[v+3]+=e*t[v+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,v=0;v<r;v++)n[o]+=e*t[u],u+=i,o+=a;return n}Ly.exports=$9r});var Fy=s((u4e,Py)=>{"use strict";var pn=4;function Q9r(r,e,t,i,n,a,u,o){var f,v,c,l;if(r<=0||e===0)return a;if(f=n,v=o,i===1&&u===1){if(c=r%pn,c>0)for(l=0;l<c;l++)a[v]+=e*t[f],f+=i,v+=u;if(r<pn)return a;for(l=c;l<r;l+=pn)a[v]+=e*t[f],a[v+1]+=e*t[f+1],a[v+2]+=e*t[f+2],a[v+3]+=e*t[f+3],f+=pn,v+=pn;return a}for(l=0;l<r;l++)a[v]+=e*t[f],f+=i,v+=u;return a}Py.exports=Q9r});var d2=s((o4e,By)=>{"use strict";var K9r=b(),My=Ry(),rpr=Fy();K9r(My,"ndarray",rpr);By.exports=My});var Cy=s((v4e,jy)=>{"use strict";var ky=rr(),epr=d2().ndarray,tpr=d2().ndarray;function ipr(r){return ky(r,"daxpy",epr),ky(r,"saxpy",tpr),r}jy.exports=ipr});var Uy=s((f4e,Vy)=>{"use strict";var npr=Ut(),apr=er();function spr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(apr(r)==="[object Error]")return!0;r=npr(r)}return!1}Vy.exports=spr});var Hy=s((c4e,Gy)=>{"use strict";var upr=Uy();Gy.exports=upr});var h2=s((l4e,Wy)=>{"use strict";function opr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}Wy.exports=opr});var Dy=s((p4e,xy)=>{"use strict";var vpr=h2(),fpr=vpr();xy.exports=fpr});var Jy=s((g4e,Xy)=>{"use strict";var cpr=b(),zy=h2(),lpr=Dy();cpr(zy,"REGEXP",lpr);Xy.exports=zy});var Zy=s((m4e,Yy)=>{"use strict";var ppr=K().isPrimitive,gpr=Jy(),mpr=y();function dpr(r){if(!ppr(r))throw new TypeError(mpr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=gpr().exec(r),r?new RegExp(r[1],r[2]):null}Yy.exports=dpr});var Qy=s((d4e,$y)=>{"use strict";var hpr=Zy();$y.exports=hpr});var q2=s((h4e,Ky)=>{"use strict";var qpr=j().isPrimitive,ypr=E();function bpr(r){return qpr(r)&&ypr(r)}Ky.exports=bpr});var y2=s((q4e,rb)=>{"use strict";var wpr=j().isObject,Epr=E();function Npr(r){return wpr(r)&&Epr(r.valueOf())}rb.exports=Npr});var tb=s((y4e,eb)=>{"use strict";var Opr=q2(),Apr=y2();function Spr(r){return Opr(r)||Apr(r)}eb.exports=Spr});var vr=s((b4e,nb)=>{"use strict";var ib=b(),b2=tb(),Tpr=q2(),_pr=y2();ib(b2,"isPrimitive",Tpr);ib(b2,"isObject",_pr);nb.exports=b2});var ob=s((w4e,ub)=>{"use strict";var ab=vr(),Ipr=Wr(),Lpr=K().isPrimitive,Rpr=Rr().isPrimitive,sb=y();function Ppr(r,e,t){var i,n;if(!Ipr(r)&&!Lpr(r))throw new TypeError(sb("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!Rpr(t))throw new TypeError(sb("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(ab(e)){for(;n<i;n++)if(ab(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}ub.exports=Ppr});var ka=s((E4e,vb)=>{"use strict";var Fpr=ob();vb.exports=Fpr});var ja=s((N4e,fb)=>{"use strict";function Mpr(r){return Object.keys(Object(r))}fb.exports=Mpr});var lb=s((O4e,cb)=>{"use strict";var Bpr=ja();function kpr(){return(Bpr(arguments)||"").length!==2}function jpr(){return kpr(1,2)}cb.exports=jpr});var gb=s((A4e,pb)=>{"use strict";var Cpr=typeof Object.keys<"u";pb.exports=Cpr});var w2=s((S4e,mb)=>{"use strict";var Vpr=er();function Upr(r){return Vpr(r)==="[object Arguments]"}mb.exports=Upr});var qb=s((T4e,hb)=>{"use strict";var Gpr=w2(),db;function Hpr(){return Gpr(arguments)}db=Hpr();hb.exports=db});var E2=s((_4e,yb)=>{"use strict";var Wpr=Object.prototype.propertyIsEnumerable;yb.exports=Wpr});var Eb=s((I4e,wb)=>{"use strict";var xpr=E2(),bb;function Dpr(){return!xpr.call("beep","0")}bb=Dpr();wb.exports=bb});var Ob=s((L4e,Nb)=>{"use strict";var zpr=K(),Xpr=vr().isPrimitive,Jpr=Rr().isPrimitive,Ypr=E2(),Zpr=Eb();function $pr(r,e){var t;return r==null?!1:(t=Ypr.call(r,e),!t&&Zpr&&zpr(r)?(e=+e,!Xpr(e)&&Jpr(e)&&e>=0&&e<r.length):t)}Nb.exports=$pr});var gn=s((R4e,Ab)=>{"use strict";var Qpr=Ob();Ab.exports=Qpr});var Tb=s((P4e,Sb)=>{"use strict";var Kpr=A(),rgr=gn(),egr=mr(),tgr=Lr(),igr=ei();function ngr(r){return r!==null&&typeof r=="object"&&!egr(r)&&typeof r.length=="number"&&tgr(r.length)&&r.length>=0&&r.length<=igr&&Kpr(r,"callee")&&!rgr(r,"callee")}Sb.exports=ngr});var O2=s((F4e,_b)=>{"use strict";var agr=qb(),sgr=w2(),ugr=Tb(),N2;agr?N2=sgr:N2=ugr;_b.exports=N2});var Rb=s((M4e,Lb)=>{"use strict";var ogr=O2(),Ib=ja(),vgr=Array.prototype.slice;function fgr(r){return ogr(r)?Ib(vgr.call(r)):Ib(r)}Lb.exports=fgr});var Fb=s((B4e,Pb)=>{"use strict";function cgr(){}Pb.exports=cgr});var C=s((k4e,Mb)=>{"use strict";var lgr=Fb();Mb.exports=lgr});var kb=s((j4e,Bb)=>{"use strict";var pgr=gn(),ggr=C(),mgr=pgr(ggr,"prototype");Bb.exports=mgr});var Cb=s((C4e,jb)=>{"use strict";var dgr=gn(),hgr={toString:null},qgr=!dgr(hgr,"toString");jb.exports=qgr});var A2=s((V4e,Vb)=>{"use strict";function ygr(r){return r.constructor&&r.constructor.prototype===r}Vb.exports=ygr});var Ub=s((U4e,bgr)=>{bgr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var Hb=s((G4e,Gb)=>{"use strict";var wgr=typeof window>"u"?void 0:window;Gb.exports=wgr});var zb=s((H4e,Db)=>{"use strict";var Egr=A(),Ngr=ka(),Wb=la(),Ogr=A2(),Agr=Ub(),wi=Hb(),xb;function Sgr(){var r;if(Wb(wi)==="undefined")return!1;for(r in wi)try{Ngr(Agr,r)===-1&&Egr(wi,r)&&wi[r]!==null&&Wb(wi[r])==="object"&&Ogr(wi[r])}catch{return!0}return!1}xb=Sgr();Db.exports=xb});var Jb=s((W4e,Xb)=>{"use strict";var Tgr=typeof window<"u";Xb.exports=Tgr});var $b=s((x4e,Zb)=>{"use strict";var _gr=zb(),Yb=A2(),Igr=Jb();function Lgr(r){if(Igr===!1&&!_gr)return Yb(r);try{return Yb(r)}catch{return!1}}Zb.exports=Lgr});var Qb=s((D4e,Rgr)=>{Rgr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var ew=s((z4e,rw)=>{"use strict";var Pgr=vo(),S2=A(),Fgr=O2(),Mgr=kb(),Bgr=Cb(),kgr=$b(),Kb=Qb();function jgr(r){var e,t,i,n,a,u,o;if(n=[],Fgr(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!S2(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!Pgr(r))return n;t=Mgr&&i}for(a in r)!(t&&a==="prototype")&&S2(r,a)&&n.push(String(a));if(Bgr)for(e=kgr(r),o=0;o<Kb.length;o++)u=Kb[o],!(e&&u==="constructor")&&S2(r,u)&&n.push(String(u));return n}rw.exports=jgr});var iw=s((X4e,tw)=>{"use strict";var Cgr=lb(),Vgr=gb(),Ugr=ja(),Ggr=Rb(),Hgr=ew(),Ca;Vgr?Cgr()?Ca=Ggr:Ca=Ugr:Ca=Hgr;tw.exports=Ca});var Ei=s((J4e,nw)=>{"use strict";var Wgr=iw();nw.exports=Wgr});var sw=s((Y4e,aw)=>{"use strict";var xgr=typeof Object.getOwnPropertyNames<"u";aw.exports=xgr});var vw=s((Z4e,ow)=>{"use strict";var uw=qi(),Dgr=uw.getOwnPropertyNames;function zgr(r){return Dgr(uw(r))}ow.exports=zgr});var cw=s(($4e,fw)=>{"use strict";var Xgr=qi(),Jgr=Ei();function Ygr(r){return Jgr(Xgr(r))}fw.exports=Ygr});var pw=s((Q4e,lw)=>{"use strict";var Zgr=sw(),$gr=vw(),Qgr=cw(),T2;Zgr?T2=$gr:T2=Qgr;lw.exports=T2});var mw=s((K4e,gw)=>{"use strict";var Kgr=typeof Object.getOwnPropertyDescriptor<"u";gw.exports=Kgr});var hw=s((rle,dw)=>{"use strict";var rmr=Object.getOwnPropertyDescriptor;function emr(r,e){var t;return r==null?null:(t=rmr(r,e),t===void 0?null:t)}dw.exports=emr});var yw=s((ele,qw)=>{"use strict";var tmr=A();function imr(r,e){return tmr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}qw.exports=imr});var ww=s((tle,bw)=>{"use strict";var nmr=mw(),amr=hw(),smr=yw(),_2;nmr?_2=amr:_2=smr;bw.exports=_2});var Nw=s((ile,Ew)=>{"use strict";var umr=typeof Buffer=="function"?Buffer:null;Ew.exports=umr});var Aw=s((nle,Ow)=>{"use strict";var omr=Ft(),Va=Nw();function vmr(){var r,e;if(typeof Va!="function")return!1;try{typeof Va.from=="function"?e=Va.from([1,2,3,4]):e=new Va([1,2,3,4]),r=omr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}Ow.exports=vmr});var Tw=s((ale,Sw)=>{"use strict";var fmr=Aw();Sw.exports=fmr});var Lw=s(Ua=>{"use strict";Ua.byteLength=lmr;Ua.toByteArray=gmr;Ua.fromByteArray=hmr;var ee=[],Ur=[],cmr=typeof Uint8Array<"u"?Uint8Array:Array,I2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Gt=0,_w=I2.length;Gt<_w;++Gt)ee[Gt]=I2[Gt],Ur[I2.charCodeAt(Gt)]=Gt;var Gt,_w;Ur["-".charCodeAt(0)]=62;Ur["_".charCodeAt(0)]=63;function Iw(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function lmr(r){var e=Iw(r),t=e[0],i=e[1];return(t+i)*3/4-i}function pmr(r,e,t){return(e+t)*3/4-t}function gmr(r){var e,t=Iw(r),i=t[0],n=t[1],a=new cmr(pmr(r,i,n)),u=0,o=n>0?i-4:i,f;for(f=0;f<o;f+=4)e=Ur[r.charCodeAt(f)]<<18|Ur[r.charCodeAt(f+1)]<<12|Ur[r.charCodeAt(f+2)]<<6|Ur[r.charCodeAt(f+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=Ur[r.charCodeAt(f)]<<2|Ur[r.charCodeAt(f+1)]>>4,a[u++]=e&255),n===1&&(e=Ur[r.charCodeAt(f)]<<10|Ur[r.charCodeAt(f+1)]<<4|Ur[r.charCodeAt(f+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function mmr(r){return ee[r>>18&63]+ee[r>>12&63]+ee[r>>6&63]+ee[r&63]}function dmr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(mmr(i));return n.join("")}function hmr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(dmr(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(ee[e>>2]+ee[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(ee[e>>10]+ee[e>>4&63]+ee[e<<2&63]+"=")),n.join("")}});var Rw=s(L2=>{L2.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,f=(1<<o)-1,v=f>>1,c=-7,l=t?n-1:0,p=t?-1:1,g=r[e+l];for(l+=p,a=g&(1<<-c)-1,g>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-v;else{if(a===f)return u?NaN:(g?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-v}return(g?-1:1)*u*Math.pow(2,a-i)};L2.write=function(r,e,t,i,n,a){var u,o,f,v=a*8-n-1,c=(1<<v)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-u))<1&&(u--,f*=2),u+l>=1?e+=p/f:e+=p*Math.pow(2,1-l),e*f>=2&&(u++,f/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*f-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+g]=o&255,g+=h,o/=256,n-=8);for(u=u<<n|o,v+=n;v>0;r[t+g]=u&255,g+=h,u/=256,v-=8);r[t+g-h]|=d*128}});var Jw=s(Si=>{"use strict";var R2=Lw(),Oi=Rw(),Pw=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Si.Buffer=w;Si.SlowBuffer=Nmr;Si.INSPECT_MAX_BYTES=50;var Ga=2147483647;Si.kMaxLength=Ga;w.TYPED_ARRAY_SUPPORT=qmr();!w.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function qmr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(w.prototype,"parent",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.buffer}});Object.defineProperty(w.prototype,"offset",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.byteOffset}});function fe(r){if(r>Ga)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,w.prototype),e}function w(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return B2(r)}return kw(r,e,t)}w.poolSize=8192;function kw(r,e,t){if(typeof r=="string")return bmr(r,e);if(ArrayBuffer.isView(r))return wmr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(te(r,ArrayBuffer)||r&&te(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(te(r,SharedArrayBuffer)||r&&te(r.buffer,SharedArrayBuffer)))return F2(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return w.from(i,e,t);let n=Emr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return w.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}w.from=function(r,e,t){return kw(r,e,t)};Object.setPrototypeOf(w.prototype,Uint8Array.prototype);Object.setPrototypeOf(w,Uint8Array);function jw(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function ymr(r,e,t){return jw(r),r<=0?fe(r):e!==void 0?typeof t=="string"?fe(r).fill(e,t):fe(r).fill(e):fe(r)}w.alloc=function(r,e,t){return ymr(r,e,t)};function B2(r){return jw(r),fe(r<0?0:k2(r)|0)}w.allocUnsafe=function(r){return B2(r)};w.allocUnsafeSlow=function(r){return B2(r)};function bmr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!w.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=Cw(r,e)|0,i=fe(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function P2(r){let e=r.length<0?0:k2(r.length)|0,t=fe(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function wmr(r){if(te(r,Uint8Array)){let e=new Uint8Array(r);return F2(e.buffer,e.byteOffset,e.byteLength)}return P2(r)}function F2(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,w.prototype),i}function Emr(r){if(w.isBuffer(r)){let e=k2(r.length)|0,t=fe(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||C2(r.length)?fe(0):P2(r);if(r.type==="Buffer"&&Array.isArray(r.data))return P2(r.data)}function k2(r){if(r>=Ga)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ga.toString(16)+" bytes");return r|0}function Nmr(r){return+r!=r&&(r=0),w.alloc(+r)}w.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==w.prototype};w.compare=function(e,t){if(te(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),te(t,Uint8Array)&&(t=w.from(t,t.offset,t.byteLength)),!w.isBuffer(e)||!w.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};w.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};w.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return w.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=w.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(te(u,Uint8Array))a+u.length>n.length?(w.isBuffer(u)||(u=w.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(w.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function Cw(r,e){if(w.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||te(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return M2(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Xw(r).length;default:if(n)return i?-1:M2(r).length;e=(""+e).toLowerCase(),n=!0}}w.byteLength=Cw;function Omr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Mmr(this,e,t);case"utf8":case"utf-8":return Uw(this,e,t);case"ascii":return Pmr(this,e,t);case"latin1":case"binary":return Fmr(this,e,t);case"base64":return Lmr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Bmr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}w.prototype._isBuffer=!0;function Ht(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}w.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Ht(this,t,t+1);return this};w.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Ht(this,t,t+3),Ht(this,t+1,t+2);return this};w.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Ht(this,t,t+7),Ht(this,t+1,t+6),Ht(this,t+2,t+5),Ht(this,t+3,t+4);return this};w.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?Uw(this,0,e):Omr.apply(this,arguments)};w.prototype.toLocaleString=w.prototype.toString;w.prototype.equals=function(e){if(!w.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:w.compare(this,e)===0};w.prototype.inspect=function(){let e="",t=Si.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};Pw&&(w.prototype[Pw]=w.prototype.inspect);w.prototype.compare=function(e,t,i,n,a){if(te(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),!w.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,f=Math.min(u,o),v=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<f;++l)if(v[l]!==c[l]){u=v[l],o=c[l];break}return u<o?-1:o<u?1:0};function Vw(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,C2(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=w.from(e,i)),w.isBuffer(e))return e.length===0?-1:Fw(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Fw(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function Fw(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function f(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let v;if(n){let c=-1;for(v=t;v<u;v++)if(f(r,v)===f(e,c===-1?0:v-c)){if(c===-1&&(c=v),v-c+1===o)return c*a}else c!==-1&&(v-=v-c),c=-1}else for(t+o>u&&(t=u-o),v=t;v>=0;v--){let c=!0;for(let l=0;l<o;l++)if(f(r,v+l)!==f(e,l)){c=!1;break}if(c)return v}return-1}w.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};w.prototype.indexOf=function(e,t,i){return Vw(this,e,t,i,!0)};w.prototype.lastIndexOf=function(e,t,i){return Vw(this,e,t,i,!1)};function Amr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(C2(o))return u;r[t+u]=o}return u}function Smr(r,e,t,i){return Ha(M2(e,r.length-t),r,t,i)}function Tmr(r,e,t,i){return Ha(Vmr(e),r,t,i)}function _mr(r,e,t,i){return Ha(Xw(e),r,t,i)}function Imr(r,e,t,i){return Ha(Umr(e,r.length-t),r,t,i)}w.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return Amr(this,e,t,i);case"utf8":case"utf-8":return Smr(this,e,t,i);case"ascii":case"latin1":case"binary":return Tmr(this,e,t,i);case"base64":return _mr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Imr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};w.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Lmr(r,e,t){return e===0&&t===r.length?R2.fromByteArray(r):R2.fromByteArray(r.slice(e,t))}function Uw(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let f,v,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:f=r[n+1],(f&192)===128&&(l=(a&31)<<6|f&63,l>127&&(u=l));break;case 3:f=r[n+1],v=r[n+2],(f&192)===128&&(v&192)===128&&(l=(a&15)<<12|(f&63)<<6|v&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:f=r[n+1],v=r[n+2],c=r[n+3],(f&192)===128&&(v&192)===128&&(c&192)===128&&(l=(a&15)<<18|(f&63)<<12|(v&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return Rmr(i)}var Mw=4096;function Rmr(r){let e=r.length;if(e<=Mw)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=Mw));return t}function Pmr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function Fmr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function Mmr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=Gmr[r[a]];return n}function Bmr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}w.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,w.prototype),n};function fr(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}w.prototype.readUintLE=w.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};w.prototype.readUintBE=w.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};w.prototype.readUint8=w.prototype.readUInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]};w.prototype.readUint16LE=w.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]|this[e+1]<<8};w.prototype.readUint16BE=w.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]<<8|this[e+1]};w.prototype.readUint32LE=w.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};w.prototype.readUint32BE=w.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};w.prototype.readBigUInt64LE=Ze(function(e){e=e>>>0,Ai(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&mn(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});w.prototype.readBigUInt64BE=Ze(function(e){e=e>>>0,Ai(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&mn(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});w.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};w.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};w.prototype.readInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};w.prototype.readInt16LE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};w.prototype.readInt16BE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};w.prototype.readInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};w.prototype.readInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};w.prototype.readBigInt64LE=Ze(function(e){e=e>>>0,Ai(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&mn(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});w.prototype.readBigInt64BE=Ze(function(e){e=e>>>0,Ai(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&mn(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});w.prototype.readFloatLE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Oi.read(this,e,!0,23,4)};w.prototype.readFloatBE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Oi.read(this,e,!1,23,4)};w.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Oi.read(this,e,!0,52,8)};w.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Oi.read(this,e,!1,52,8)};function qr(r,e,t,i,n,a){if(!w.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}w.prototype.writeUintLE=w.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};w.prototype.writeUintBE=w.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};w.prototype.writeUint8=w.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,255,0),this[t]=e&255,t+1};w.prototype.writeUint16LE=w.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeUint16BE=w.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeUint32LE=w.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};w.prototype.writeUint32BE=w.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function Gw(r,e,t,i,n){zw(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function Hw(r,e,t,i,n){zw(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}w.prototype.writeBigUInt64LE=Ze(function(e,t=0){return Gw(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeBigUInt64BE=Ze(function(e,t=0){return Hw(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);qr(this,e,t,i,f-1,-f)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);qr(this,e,t,i,f-1,-f)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};w.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};w.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};w.prototype.writeBigInt64LE=Ze(function(e,t=0){return Gw(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});w.prototype.writeBigInt64BE=Ze(function(e,t=0){return Hw(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Ww(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function xw(r,e,t,i,n){return e=+e,t=t>>>0,n||Ww(r,e,t,4,34028234663852886e22,-34028234663852886e22),Oi.write(r,e,t,i,23,4),t+4}w.prototype.writeFloatLE=function(e,t,i){return xw(this,e,t,!0,i)};w.prototype.writeFloatBE=function(e,t,i){return xw(this,e,t,!1,i)};function Dw(r,e,t,i,n){return e=+e,t=t>>>0,n||Ww(r,e,t,8,17976931348623157e292,-17976931348623157e292),Oi.write(r,e,t,i,52,8),t+8}w.prototype.writeDoubleLE=function(e,t,i){return Dw(this,e,t,!0,i)};w.prototype.writeDoubleBE=function(e,t,i){return Dw(this,e,t,!1,i)};w.prototype.copy=function(e,t,i,n){if(!w.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};w.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!w.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=w.isBuffer(e)?e:w.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var Ni={};function j2(r,e,t){Ni[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}j2("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);j2("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);j2("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=Bw(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=Bw(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function Bw(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function kmr(r,e,t){Ai(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&mn(e,r.length-(t+1))}function zw(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new Ni.ERR_OUT_OF_RANGE("value",o,r)}kmr(i,n,a)}function Ai(r,e){if(typeof r!="number")throw new Ni.ERR_INVALID_ARG_TYPE(e,"number",r)}function mn(r,e,t){throw Math.floor(r)!==r?(Ai(r,t),new Ni.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Ni.ERR_BUFFER_OUT_OF_BOUNDS:new Ni.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var jmr=/[^+/0-9A-Za-z-_]/g;function Cmr(r){if(r=r.split("=")[0],r=r.trim().replace(jmr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function M2(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function Vmr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function Umr(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function Xw(r){return R2.toByteArray(Cmr(r))}function Ha(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function te(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function C2(r){return r!==r}var Gmr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function Ze(r){return typeof BigInt>"u"?Hmr:r}function Hmr(){throw new Error("BigInt not supported")}});var Zw=s((fle,Yw)=>{"use strict";var Wmr=Jw().Buffer;Yw.exports=Wmr});var Qw=s((cle,$w)=>{"use strict";function xmr(){throw new Error("not implemented")}$w.exports=xmr});var $e=s((lle,Kw)=>{"use strict";var Dmr=Tw(),zmr=Zw(),Xmr=Qw(),V2;Dmr()?V2=zmr:V2=Xmr;Kw.exports=V2});var eE=s((ple,rE)=>{"use strict";var Jmr=_(),Ymr=$e(),Zmr=Jmr(Ymr.from);rE.exports=Zmr});var iE=s((gle,tE)=>{"use strict";var $mr=Ft(),Qmr=y(),Kmr=$e();function rdr(r){if(!$mr(r))throw new TypeError(Qmr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return Kmr.from(r)}tE.exports=rdr});var aE=s((mle,nE)=>{"use strict";var edr=Ft(),tdr=y(),idr=$e();function ndr(r){if(!edr(r))throw new TypeError(tdr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new idr(r)}nE.exports=ndr});var uE=s((dle,sE)=>{"use strict";var adr=eE(),sdr=iE(),udr=aE(),U2;adr?U2=sdr:U2=udr;sE.exports=U2});var fE=s((hle,vE)=>{"use strict";var odr=ai(),vdr=$r(),fdr=ni(),cdr=ii(),ldr=Mt(),pdr=Xe(),gdr=lr(),mdr=Zr(),ddr=cr(),oE;function hdr(r){return new odr(r)}function qdr(r){return new vdr(r)}function ydr(r){return new fdr(r)}function bdr(r){return new cdr(r)}function wdr(r){return new ldr(r)}function Edr(r){return new pdr(r)}function Ndr(r){return new gdr(r)}function Odr(r){return new mdr(r)}function Adr(r){return new ddr(r)}function Sdr(){var r={int8array:hdr,uint8array:qdr,uint8clampedarray:ydr,int16array:bdr,uint16array:wdr,int32array:Edr,uint32array:Ndr,float32array:Odr,float64array:Adr};return r}oE=Sdr();vE.exports=oE});var mE=s((qle,gE)=>{"use strict";var Wa=A(),G2=mr(),cE=Ft(),Tdr=Hy(),lE=la(),_dr=Qy(),Idr=ka(),pE=Ei(),Ldr=pw(),dn=ww(),Rdr=Ut(),hn=De(),Pdr=uE(),Fdr=fE();function Mdr(r){var e,t,i,n,a,u,o,f;for(e=[],n=[],o=Object.create(Rdr(r)),e.push(r),n.push(o),t=Ldr(r),f=0;f<t.length;f++)i=t[f],a=dn(r,i),Wa(a,"value")&&(u=G2(r[i])?[]:{},a.value=Wt(r[i],u,e,n,-1)),hn(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function Bdr(r){var e=[],t=[],i,n,a,u,o,f;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=pE(r),f=0;f<i.length;f++)u=i[f],n=dn(r,u),Wa(n,"value")&&(a=G2(r[u])?[]:{},n.value=Wt(r[u],a,e,t,-1)),hn(o,u,n);return o}function Wt(r,e,t,i,n){var a,u,o,f,v,c,l,p,g,h;if(n-=1,typeof r!="object"||r===null)return r;if(cE(r))return Pdr(r);if(Tdr(r))return Bdr(r);if(o=lE(r),o==="date")return new Date(+r);if(o==="regexp")return _dr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(v=Fdr[o],v)return v(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?Mdr(r):{};if(u=pE(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=lE(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||cE(p)){a==="object"?(f=dn(r,c),Wa(f,"value")&&(f.value=Wt(p)),hn(e,c,f)):e[c]=Wt(p);continue}if(g=Idr(t,p),g!==-1){e[c]=i[g];continue}l=G2(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=Wt(p,l,t,i,n):(f=dn(r,c),Wa(f,"value")&&(f.value=Wt(p,l,t,i,n)),hn(e,c,f))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],f=dn(r,c),hn(e,c,f);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}gE.exports=Wt});var hE=s((yle,dE)=>{"use strict";var kdr=mr(),jdr=jr().isPrimitive,Cdr=y(),Vdr=I(),Udr=mE();function Gdr(r,e){var t;if(arguments.length>1){if(!jdr(e))throw new TypeError(Cdr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=Vdr;return t=kdr(r)?new Array(r.length):{},Udr(r,t,[r],[t],e)}dE.exports=Gdr});var qn=s((ble,qE)=>{"use strict";var Hdr=hE();qE.exports=Hdr});var yE=s((wle,Wdr)=>{Wdr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var wE=s((Ele,bE)=>{"use strict";var xdr=qn(),Ddr=yE();function zdr(){return xdr(Ddr)}bE.exports=zdr});var EE=s((Nle,Xdr)=>{Xdr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var OE=s((Ole,NE)=>{"use strict";var Jdr=qn(),Ydr=EE();function Zdr(){return Jdr(Ydr)}NE.exports=Zdr});var AE=s((Ale,$dr)=>{$dr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var TE=s((Sle,SE)=>{"use strict";var Qdr=qn(),Kdr=AE();function rhr(){return Qdr(Kdr)}SE.exports=rhr});var _E=s((Tle,ehr)=>{ehr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var LE=s((_le,IE)=>{"use strict";var thr=_E();function ihr(){return thr.slice()}IE.exports=ihr});var RE=s((Ile,nhr)=>{nhr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var FE=s((Lle,PE)=>{"use strict";var ahr=qn(),shr=RE();function uhr(){return ahr(shr)}PE.exports=uhr});var BE=s((Rle,ME)=>{"use strict";var yn=rr(),ohr=wE(),vhr=OE(),fhr=TE(),chr=LE(),lhr=FE();function phr(r){return yn(r,"AFINN_111",ohr),yn(r,"AFINN_96",vhr),yn(r,"ANSCOMBES_QUARTET",fhr),yn(r,"HERNDON_VENUS_SEMIDIAMETERS",chr),yn(r,"NIGHTINGALES_ROSE",lhr),r}ME.exports=phr});var jE=s((Ple,kE)=>{"use strict";function ghr(r,e){return r+e}kE.exports=ghr});var VE=s((Fle,CE)=>{"use strict";var mhr=jE();CE.exports=mhr});var GE=s((Mle,UE)=>{"use strict";var dhr=I(),hhr=V();function qhr(r){return r===dhr||r===hhr}UE.exports=qhr});var Br=s((Ble,HE)=>{"use strict";var yhr=GE();HE.exports=yhr});var DE=s((kle,xE)=>{"use strict";var WE=ha();function bhr(r){return r>0?WE(r-1):WE(r+1)}xE.exports=bhr});var xa=s((jle,zE)=>{"use strict";var whr=DE();zE.exports=whr});var JE=s((Cle,XE)=>{"use strict";var Ehr=Math.sqrt;XE.exports=Ehr});var U=s((Vle,YE)=>{"use strict";var Nhr=JE();YE.exports=Nhr});var $E=s((Ule,ZE)=>{"use strict";function Ohr(r){return Math.abs(r)}ZE.exports=Ohr});var Y=s((Gle,QE)=>{"use strict";var Ahr=$E();QE.exports=Ahr});var rN=s((Hle,KE)=>{"use strict";var Shr=$r(),Thr=Mt(),_hr={uint16:Thr,uint8:Shr};KE.exports=_hr});var nN=s((Wle,iN)=>{"use strict";var eN=rN(),tN;function Ihr(){var r,e;return r=new eN.uint16(1),r[0]=4660,e=new eN.uint8(r.buffer),e[0]===52}tN=Ihr();iN.exports=tN});var Dr=s((xle,aN)=>{"use strict";var Lhr=nN();aN.exports=Lhr});var oN=s((Dle,uN)=>{"use strict";var Rhr=Dr(),sN,H2,W2;Rhr===!0?(H2=1,W2=0):(H2=0,W2=1);sN={HIGH:H2,LOW:W2};uN.exports=sN});var x2=s((zle,lN)=>{"use strict";var Phr=lr(),Fhr=cr(),fN=oN(),cN=new Fhr(1),vN=new Phr(cN.buffer),Mhr=fN.HIGH,Bhr=fN.LOW;function khr(r,e,t,i){return cN[0]=r,e[i]=vN[Mhr],e[i+t]=vN[Bhr],e}lN.exports=khr});var gN=s((Xle,pN)=>{"use strict";var jhr=x2();function Chr(r){return jhr(r,[0>>>0,0>>>0],1,0)}pN.exports=Chr});var Ti=s((Jle,dN)=>{"use strict";var Vhr=b(),mN=gN(),Uhr=x2();Vhr(mN,"assign",Uhr);dN.exports=mN});var qN=s((Yle,hN)=>{"use strict";var Ghr=Dr(),D2;Ghr===!0?D2=0:D2=1;hN.exports=D2});var bN=s((Zle,yN)=>{"use strict";var Hhr=lr(),Whr=cr(),xhr=qN(),z2=new Whr(1),Dhr=new Hhr(z2.buffer);function zhr(r,e){return z2[0]=r,Dhr[xhr]=e>>>0,z2[0]}yN.exports=zhr});var ce=s(($le,wN)=>{"use strict";var Xhr=bN();wN.exports=Xhr});var NN=s((Qle,EN)=>{"use strict";function Jhr(r){return r|0}EN.exports=Jhr});var X2=s((Kle,ON)=>{"use strict";var Yhr=NN();ON.exports=Yhr});var ie=s((r8e,AN)=>{"use strict";var Zhr=2147483647;AN.exports=Zhr});var J2=s((e8e,SN)=>{"use strict";var $hr=2147483648;SN.exports=$hr});var _N=s((t8e,TN)=>{"use strict";var Qhr=Dr(),Y2;Qhr===!0?Y2=1:Y2=0;TN.exports=Y2});var RN=s((i8e,LN)=>{"use strict";var Khr=lr(),rqr=cr(),eqr=_N(),IN=new rqr(1),tqr=new Khr(IN.buffer);function iqr(r){return IN[0]=r,tqr[eqr]}LN.exports=iqr});var ar=s((n8e,PN)=>{"use strict";var nqr=RN();PN.exports=nqr});var BN=s((a8e,MN)=>{"use strict";var aqr=Dr(),FN,Z2,$2;aqr===!0?(Z2=1,$2=0):(Z2=0,$2=1);FN={HIGH:Z2,LOW:$2};MN.exports=FN});var UN=s((s8e,VN)=>{"use strict";var sqr=lr(),uqr=cr(),jN=BN(),CN=new uqr(1),kN=new sqr(CN.buffer),oqr=jN.HIGH,vqr=jN.LOW;function fqr(r,e){return kN[oqr]=r,kN[vqr]=e,CN[0]}VN.exports=fqr});var _i=s((u8e,GN)=>{"use strict";var cqr=UN();GN.exports=cqr});var WN=s((o8e,HN)=>{"use strict";var lqr=J2(),pqr=ie(),gqr=Ti(),mqr=ar(),dqr=_i(),Q2=[0,0];function hqr(r,e){var t,i;return gqr.assign(r,Q2,1,0),t=Q2[0],t&=pqr,i=mqr(e),i&=lqr,t|=i,dqr(t,Q2[1])}HN.exports=hqr});var Da=s((v8e,xN)=>{"use strict";var qqr=WN();xN.exports=qqr});var XN=s((f8e,zN)=>{"use strict";var DN=xa(),yqr=Da(),bqr=V(),za=I();function wqr(r,e){return e===bqr?za:e===za?0:e>0?DN(e)?r:0:DN(e)?yqr(za,r):za}zN.exports=wqr});var YN=s((c8e,JN)=>{"use strict";var Eqr=ie(),Nqr=ar(),Oqr=1072693247,Xa=1e300,Ja=1e-300;function Aqr(r,e){var t,i;return i=Nqr(r),t=i&Eqr,t<=Oqr?e<0?Xa*Xa:Ja*Ja:e>0?Xa*Xa:Ja*Ja}JN.exports=Aqr});var QN=s((l8e,$N)=>{"use strict";var Sqr=Y(),ZN=I();function Tqr(r,e){return r===-1?(r-r)/(r-r):r===1?1:Sqr(r)<1==(e===ZN)?0:ZN}$N.exports=Tqr});var rO=s((p8e,KN)=>{"use strict";var _qr=Dr(),K2;_qr===!0?K2=1:K2=0;KN.exports=K2});var tO=s((g8e,eO)=>{"use strict";var Iqr=lr(),Lqr=cr(),Rqr=rO(),r1=new Lqr(1),Pqr=new Iqr(r1.buffer);function Fqr(r,e){return r1[0]=r,Pqr[Rqr]=e>>>0,r1[0]}eO.exports=Fqr});var le=s((m8e,iO)=>{"use strict";var Mqr=tO();iO.exports=Mqr});var ne=s((d8e,nO)=>{"use strict";var Bqr=1023;nO.exports=Bqr});var sO=s((h8e,aO)=>{"use strict";function kqr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}aO.exports=kqr});var fO=s((q8e,vO)=>{"use strict";var jqr=ar(),Ya=ce(),uO=le(),Cqr=ne(),Vqr=sO(),Uqr=1048575,oO=1048576,Gqr=1072693248,Hqr=536870912,Wqr=524288,xqr=20,Dqr=9007199254740992,zqr=.9617966939259756,Xqr=.9617967009544373,Jqr=-7028461650952758e-24,Yqr=[1,1.5],Zqr=[0,.5849624872207642],$qr=[0,1350039202129749e-23];function Qqr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,S,x,Q,G;return x=0,t<oO&&(e*=Dqr,x-=53,t=jqr(e)),x+=(t>>xqr)-Cqr|0,Q=t&Uqr|0,t=Q|Gqr|0,Q<=235662?G=0:Q<767610?G=1:(G=0,x+=1,t-=oO),e=uO(e,t),c=Yqr[G],F=e-c,S=1/(e+c),n=F*S,u=Ya(n,0),i=(t>>1|Hqr)+Wqr,i+=G<<18,f=uO(0,i),v=e-(f-c),o=S*(F-u*f-u*v),a=n*n,O=a*a*Vqr(a),O+=o*(u+n),a=u*u,f=3+a+O,f=Ya(f,0),v=O-(f-3-a),F=u*f,S=o*f+v*n,p=F+S,p=Ya(p,0),g=S-(p-F),h=Xqr*p,d=Jqr*p+g*zqr+$qr[G],l=Zqr[G],N=x,m=h+d+l+N,m=Ya(m,0),q=d-(m-N-l-h),r[0]=m,r[1]=q,r}vO.exports=Qqr});var lO=s((y8e,cO)=>{"use strict";function Kqr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}cO.exports=Kqr});var gO=s((b8e,pO)=>{"use strict";var ryr=ce(),eyr=lO(),tyr=1.4426950408889634,iyr=1.4426950216293335,nyr=19259629911266175e-24;function ayr(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*eyr(n),u=iyr*n,o=n*nyr-a*tyr,i=u+o,i=ryr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}pO.exports=ayr});var e1=s((w8e,mO)=>{"use strict";var syr=1023;mO.exports=syr});var hO=s((E8e,dO)=>{"use strict";var uyr=-1023;dO.exports=uyr});var t1=s((N8e,qO)=>{"use strict";var oyr=-1074;qO.exports=oyr});var i1=s((O8e,yO)=>{"use strict";var vyr=22250738585072014e-324;yO.exports=vyr});var n1=s((A8e,bO)=>{"use strict";var fyr=i1(),cyr=Br(),lyr=E(),pyr=Y(),gyr=4503599627370496;function myr(r,e,t,i){return lyr(r)||cyr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&pyr(r)<fyr?(e[i]=r*gyr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}bO.exports=myr});var EO=s((S8e,wO)=>{"use strict";var dyr=n1();function hyr(r){return dyr(r,[0,0],1,0)}wO.exports=hyr});var AO=s((T8e,OO)=>{"use strict";var qyr=b(),NO=EO(),yyr=n1();qyr(NO,"assign",yyr);OO.exports=NO});var bn=s((_8e,SO)=>{"use strict";var byr=2146435072;SO.exports=byr});var _O=s((I8e,TO)=>{"use strict";var wyr=ar(),Eyr=bn(),Nyr=ne();function Oyr(r){var e=wyr(r);return e=(e&Eyr)>>>20,e-Nyr|0}TO.exports=Oyr});var LO=s((L8e,IO)=>{"use strict";var Ayr=_O();IO.exports=Ayr});var PO=s((R8e,RO)=>{"use strict";var Syr=I(),Tyr=V(),_yr=ne(),Iyr=e1(),Lyr=hO(),Ryr=t1(),Pyr=E(),Fyr=Br(),Myr=Da(),Byr=AO().assign,kyr=LO(),jyr=Ti(),Cyr=_i(),Vyr=2220446049250313e-31,Uyr=2148532223>>>0,a1=[0,0],s1=[0,0];function Gyr(r,e){var t,i;return e===0||r===0||Pyr(r)||Fyr(r)?r:(Byr(r,a1,1,0),r=a1[0],e+=a1[1],e+=kyr(r),e<Ryr?Myr(0,r):e>Iyr?r<0?Tyr:Syr:(e<=Lyr?(e+=52,i=Vyr):i=1,jyr.assign(r,s1,1,0),t=s1[0],t&=Uyr,t|=e+_yr<<20,i*Cyr(t,s1[1])))}RO.exports=Gyr});var Za=s((P8e,FO)=>{"use strict";var Hyr=PO();FO.exports=Hyr});var $a=s((F8e,MO)=>{"use strict";var Wyr=.6931471805599453;MO.exports=Wyr});var Qa=s((M8e,BO)=>{"use strict";var xyr=1048575;BO.exports=xyr});var jO=s((B8e,kO)=>{"use strict";function Dyr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}kO.exports=Dyr});var xO=s((k8e,WO)=>{"use strict";var zyr=ar(),CO=le(),Xyr=ce(),Jyr=X2(),Yyr=Za(),Zyr=$a(),VO=ne(),UO=ie(),GO=Qa(),$yr=jO(),HO=1048576,Qyr=1071644672,wn=20,Kyr=.6931471824645996,rbr=-1904654299957768e-24;function ebr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g;return p=r&UO|0,g=(p>>wn)-VO|0,l=0,p>Qyr&&(l=r+(HO>>g+1)>>>0,g=((l&UO)>>wn)-VO|0,i=(l&~(GO>>g))>>>0,a=CO(0,i),l=(l&GO|HO)>>wn-g>>>0,r<0&&(l=-l),e-=a),a=t+e,a=Xyr(a,0),o=a*Kyr,f=(t-(a-e))*Zyr+a*rbr,c=o+f,v=f-(c-o),a=c*c,n=c-a*$yr(a),u=c*n/(n-2)-(v+c*v),c=1-(u-c),r=zyr(c),r=Jyr(r),r+=l<<wn>>>0,r>>wn<=0?c=Yyr(c,l):c=CO(c,r),c}WO.exports=ebr});var eA=s((j8e,rA)=>{"use strict";var DO=E(),zO=xa(),XO=Br(),tbr=Lr(),JO=U(),ibr=Y(),u1=Ti(),nbr=ce(),YO=X2(),abr=V(),sbr=I(),o1=ie(),ubr=XN(),obr=YN(),vbr=QN(),fbr=fO(),cbr=gO(),lbr=xO(),pbr=1072693247,gbr=1105199104,mbr=1139802112,ZO=1083179008,dbr=1072693248,hbr=1083231232,qbr=3230714880>>>0,$O=31,Qe=1e300,Ke=1e-300,ybr=8008566259537294e-32,pe=[0,0],QO=[0,0];function KO(r,e){var t,i,n,a,u,o,f,v,c,l,p,g,h,d,m,q;if(DO(r)||DO(e))return NaN;if(u1.assign(e,pe,1,0),o=pe[0],f=pe[1],f===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return JO(r);if(e===-.5)return 1/JO(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(XO(e))return vbr(r,e)}if(u1.assign(r,pe,1,0),a=pe[0],u=pe[1],u===0){if(a===0)return ubr(r,e);if(r===1)return 1;if(r===-1&&zO(e))return-1;if(XO(r))return r===abr?KO(-0,-e):e<0?0:sbr}if(r<0&&tbr(e)===!1)return(r-r)/(r-r);if(n=ibr(r),t=a&o1|0,i=o&o1|0,v=a>>>$O|0,c=o>>>$O|0,v&&zO(e)?v=-1:v=1,i>gbr){if(i>mbr)return obr(r,e);if(t<pbr)return c===1?v*Qe*Qe:v*Ke*Ke;if(t>dbr)return c===0?v*Qe*Qe:v*Ke*Ke;h=cbr(QO,n)}else h=fbr(QO,n,t);if(l=nbr(e,0),g=(e-l)*h[0]+e*h[1],p=l*h[0],d=g+p,u1.assign(d,pe,1,0),m=YO(pe[0]),q=YO(pe[1]),m>=ZO){if((m-ZO|q)!==0||g+ybr>d-p)return v*Qe*Qe}else if((m&o1)>=hbr&&((m-qbr|q)!==0||g<=d-p))return v*Ke*Ke;return d=lbr(m,p,g),v*d}rA.exports=KO});var W=s((C8e,tA)=>{"use strict";var bbr=eA();tA.exports=bbr});var Ii=s((V8e,iA)=>{"use strict";var wbr=9007199254740991;iA.exports=wbr});var Ka=s((U8e,nA)=>{"use strict";var Ebr=308;nA.exports=Ebr});var v1=s((G8e,aA)=>{"use strict";var Nbr=-308;aA.exports=Nbr});var r0=s((H8e,sA)=>{"use strict";var Obr=-324;sA.exports=Obr});var pA=s((W8e,lA)=>{"use strict";var uA=E(),e0=Br(),oA=W(),Abr=Y(),vA=J(),Sbr=Ii(),fA=Ka(),Tbr=v1(),_br=r0(),Ibr=V(),Lbr=Sbr+1,cA=1e308;function Rbr(r,e){var t,i;return uA(r)||uA(e)||e0(e)?NaN:e0(r)||r===0||e<_br||Abr(r)>Lbr&&e<=0?r:e>fA?r>=0?0:Ibr:e<Tbr?(t=oA(10,-(e+fA)),i=r*cA*t,e0(i)?r:vA(i)/cA/t):(t=oA(10,-e),i=r*t,e0(i)?r:vA(i)/t)}lA.exports=Rbr});var mA=s((x8e,gA)=>{"use strict";var Pbr=pA();gA.exports=Pbr});var hA=s((D8e,dA)=>{"use strict";function Fbr(r,e){return r*e}dA.exports=Fbr});var yA=s((z8e,qA)=>{"use strict";var Mbr=hA();qA.exports=Mbr});var wA=s((X8e,bA)=>{"use strict";function Bbr(r,e){return r-e}bA.exports=Bbr});var NA=s((J8e,EA)=>{"use strict";var kbr=wA();EA.exports=kbr});var AA=s((Y8e,OA)=>{"use strict";var En=rr(),jbr=VE(),Cbr=mA(),Vbr=yA(),Ubr=W(),Gbr=NA();function Hbr(r){return En(r,"add",jbr),En(r,"floorn",Cbr),En(r,"mul",Vbr),En(r,"pow",Ubr),En(r,"sub",Gbr),r}OA.exports=Hbr});var IA=s((Z8e,_A)=>{"use strict";var SA=j().isPrimitive,Wbr=I(),xbr=V(),TA=y();function Dbr(r,e){return t;function t(i,n){var a;if(!SA(i)){if(e.nonnumeric===void 0)throw new TypeError(TA("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!SA(n)){if(e.nonnumeric===void 0)throw new TypeError(TA("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===Wbr?e.pinf:a===xbr?e.ninf:a}}_A.exports=Dbr});var f1=s(($8e,LA)=>{"use strict";var zbr=IA();LA.exports=zbr});var PA=s((Q8e,RA)=>{"use strict";var Xbr=fa(),Jbr=zu(),Ybr=Ma(),Zbr=y(),$br=Fa(),Qbr=f1(),Kbr=["number","number"],rwr=["First argument","Second argument"];function ewr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(Zbr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=$br([r[0],r[1]],Kbr,rwr),t=Xbr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=Ybr(t),a=Qbr(e,i),r[0].push(n),r[1].push(t),Jbr(r[0],r[1],a),n}RA.exports=ewr});var MA=s((K8e,FA)=>{"use strict";var twr=PA();FA.exports=twr});var kA=s((r5e,BA)=>{"use strict";var iwr=j().isPrimitive,nwr=I(),awr=V(),swr=y();function uwr(r,e){return t;function t(i){var n;if(!iwr(i)){if(e.nonnumeric===void 0)throw new TypeError(swr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===nwr?e.pinf:n===awr?e.ninf:n}}BA.exports=uwr});var c1=s((e5e,jA)=>{"use strict";var owr=kA();jA.exports=owr});var VA=s((t5e,CA)=>{"use strict";var l1=j().isPrimitive,vwr=I(),fwr=V(),p1=y();function cwr(r,e){return t;function t(i,n,a){var u;if(!l1(i)){if(e.nonnumeric===void 0)throw new TypeError(p1("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!l1(n)){if(e.nonnumeric===void 0)throw new TypeError(p1("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!l1(a)){if(e.nonnumeric===void 0)throw new TypeError(p1("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===vwr?e.pinf:u===fwr?e.ninf:u}}CA.exports=cwr});var g1=s((i5e,UA)=>{"use strict";var lwr=VA();UA.exports=lwr});var HA=s((n5e,GA)=>{"use strict";var t0=j().isPrimitive,pwr=I(),gwr=V(),i0=y();function mwr(r,e){return t;function t(i,n,a,u){var o;if(!t0(i)){if(e.nonnumeric===void 0)throw new TypeError(i0("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!t0(n)){if(e.nonnumeric===void 0)throw new TypeError(i0("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!t0(a)){if(e.nonnumeric===void 0)throw new TypeError(i0("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!t0(u)){if(e.nonnumeric===void 0)throw new TypeError(i0("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,a,u),o!==o?e.nan:o===pwr?e.pinf:o===gwr?e.ninf:o}}GA.exports=mwr});var xA=s((a5e,WA)=>{"use strict";var dwr=HA();WA.exports=dwr});var zA=s((s5e,DA)=>{"use strict";var Nn=j().isPrimitive,hwr=I(),qwr=V(),On=y();function ywr(r,e){return t;function t(i,n,a,u,o){var f;if(!Nn(i)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Nn(n)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Nn(a)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Nn(u)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Nn(o)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return f=r(i,n,a,u,o),f!==f?e.nan:f===hwr?e.pinf:f===qwr?e.ninf:f}}DA.exports=ywr});var JA=s((u5e,XA)=>{"use strict";var bwr=zA();XA.exports=bwr});var ZA=s((o5e,YA)=>{"use strict";var wwr=fa(),Ewr=Ju(),Nwr=Ma(),Owr=y(),Awr=Fa(),Swr=g1(),Twr=["number","number","number"],_wr=["First argument","Second argument","Third argument"];function Iwr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(Owr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=Awr([r[0],r[1],r[2]],Twr,_wr),t=wwr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=Nwr(t),a=Swr(e,i),r[0].push(n),r[1].push(t),Ewr(r[0],r[1],a),n}YA.exports=Iwr});var QA=s((v5e,$A)=>{"use strict";var Lwr=ZA();$A.exports=Lwr});var rS=s((f5e,KA)=>{"use strict";var Rwr=mr(),Pwr=Ko(),Fwr=y(),Mwr=c1();function Bwr(r,e){var t,i,n,a,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(a=r[u],a==="nonnumeric"||a==="nan"||a==="pinf"||a==="ninf")i[a]=r[u+1];else throw new Error(Fwr("invalid argument. Unrecognized option name. Value: %s.",String(a)));return n=Mwr(e,i),Rwr(t)?(Pwr([t,t],[t.length,t[0].length],n),t):n(t)}KA.exports=Bwr});var tS=s((c5e,eS)=>{"use strict";var kwr=rS();eS.exports=kwr});var nS=s((l5e,iS)=>{"use strict";var rt=rr(),jwr=MA(),Cwr=c1(),Vwr=f1(),Uwr=g1(),Gwr=xA(),Hwr=JA(),Wwr=QA(),xwr=tS();function Dwr(r){return rt(r,"binary",jwr),rt(r,"d_d",Cwr),rt(r,"dd_d",Vwr),rt(r,"ddd_d",Uwr),rt(r,"dddd_d",Gwr),rt(r,"ddddd_d",Hwr),rt(r,"ternary",Wwr),rt(r,"unary",xwr),r}iS.exports=Dwr});var sS=s((p5e,aS)=>{"use strict";function zwr(r){return r*r}aS.exports=zwr});var n0=s((g5e,uS)=>{"use strict";var Xwr=sS();uS.exports=Xwr});var a0=s((m5e,oS)=>{"use strict";var Jwr=.7853981633974483;oS.exports=Jwr});var fS=s((d5e,vS)=>{"use strict";function Ywr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}vS.exports=Ywr});var lS=s((h5e,cS)=>{"use strict";function Zwr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}cS.exports=Zwr});var mS=s((q5e,gS)=>{"use strict";var $wr=E(),Qwr=U(),pS=a0(),Kwr=fS(),rEr=lS(),eEr=6123233995736766e-32;function tEr(r){var e,t,i,n,a;if($wr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*rEr(t),t=Qwr(t+t),a=pS-t,t=t*n-eEr,a-=t,a+=pS;else{if(i<1e-8)return r;t=i*i,a=t*Kwr(t),a=i*a+i}return e?-a:a}gS.exports=tEr});var xt=s((y5e,dS)=>{"use strict";var iEr=mS();dS.exports=iEr});var bS=s((b5e,yS)=>{"use strict";var nEr=E(),hS=xt(),aEr=U(),qS=a0(),sEr=6123233995736766e-32;function uEr(r){var e;return nEr(r)?NaN:r<-1||r>1?NaN:r>.5?2*hS(aEr(.5-.5*r)):(e=qS-hS(r),e+=sEr,e+=qS,e)}yS.exports=uEr});var An=s((w5e,wS)=>{"use strict";var oEr=bS();wS.exports=oEr});var NS=s((E5e,ES)=>{"use strict";function vEr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}ES.exports=vEr});var _S=s((N5e,TS)=>{"use strict";var fEr=E(),OS=ar(),AS=le(),cEr=I(),lEr=V(),SS=ne(),pEr=NS(),m1=.6931471803691238,d1=19082149292705877e-26,gEr=.41421356237309503,mEr=-.2928932188134525,dEr=1862645149230957e-24,hEr=5551115123125783e-32,qEr=9007199254740992,yEr=.6666666666666666;function bEr(r){var e,t,i,n,a,u,o,f,v,c;if(r<-1||fEr(r))return NaN;if(r===-1)return lEr;if(r===cEr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<gEr){if(i<dEr)return i<hEr?r:r-r*r*.5;r>mEr&&(c=0,n=r,t=1)}return c!==0&&(i<qEr?(v=1+r,t=OS(v),c=(t>>20)-SS,c>0?a=1-(v-r):a=r-(v-1),a/=v):(v=r,t=OS(v),c=(t>>20)-SS,a=0),t&=1048575,t<434334?v=AS(v,t|1072693248):(c+=1,v=AS(v,t|1071644672),t=1048576-t>>2),n=v-1),e=.5*n*n,t===0?n===0?(a+=c*d1,c*m1+a):(f=e*(1-yEr*n),c*m1-(f-(c*d1+a)-n)):(u=n/(2+n),o=u*u,f=o*pEr(o),c===0?n-(e-u*(e+f)):c*m1-(e-(u*(e+f)+(c*d1+a))-n))}TS.exports=bEr});var et=s((O5e,IS)=>{"use strict";var wEr=_S();IS.exports=wEr});var RS=s((A5e,LS)=>{"use strict";function EEr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}LS.exports=EEr});var FS=s((S5e,PS)=>{"use strict";function NEr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}PS.exports=NEr});var jS=s((T5e,kS)=>{"use strict";var MS=ar(),OEr=le(),AEr=E(),SEr=ne(),TEr=V(),_Er=RS(),IEr=FS(),s0=.6931471803691238,u0=19082149292705877e-26,LEr=0x40000000000000,REr=.3333333333333333,BS=1048575,PEr=2146435072,FEr=1048576,MEr=1072693248;function BEr(r){var e,t,i,n,a,u,o,f,v,c,l,p;return r===0?TEr:AEr(r)||r<0?NaN:(t=MS(r),a=0,t<FEr&&(a-=54,r*=LEr,t=MS(r)),t>=PEr?r+r:(a+=(t>>20)-SEr|0,t&=BS,f=t+614244&1048576|0,r=OEr(r,t|f^MEr),a+=f>>20|0,o=r-1,(BS&2+t)<3?o===0?a===0?0:a*s0+a*u0:(u=o*o*(.5-REr*o),a===0?o-u:a*s0-(u-a*u0-o)):(c=o/(2+o),p=c*c,f=t-398458|0,l=p*p,v=440401-t|0,n=l*_Er(l),i=p*IEr(l),f|=v,u=i+n,f>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*s0-(e-(c*(e+u)+a*u0)-o)):a===0?o-c*(o-u):a*s0-(c*(o-u)-a*u0-o))))}kS.exports=BEr});var P=s((_5e,CS)=>{"use strict";var kEr=jS();CS.exports=kEr});var HS=s((I5e,GS)=>{"use strict";var jEr=E(),CEr=et(),VS=U(),VEr=$a(),US=P(),UEr=1<<28;function GEr(r){var e;return jEr(r)||r<1?NaN:r===1?0:r>=UEr?US(r)+VEr:r>2?US(2*r-1/(r+VS(r*r-1))):(e=r-1,CEr(e+VS(2*e+e*e)))}GS.exports=GEr});var xS=s((L5e,WS)=>{"use strict";var HEr=HS();WS.exports=HEr});var o0=s((R5e,DS)=>{"use strict";var WEr=1.5707963267948966;DS.exports=WEr});var XS=s((P5e,zS)=>{"use strict";function xEr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}zS.exports=xEr});var YS=s((F5e,JS)=>{"use strict";function DEr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}JS.exports=DEr});var QS=s((M5e,$S)=>{"use strict";var zEr=E(),XEr=I(),h1=o0(),JEr=a0(),YEr=V(),ZEr=XS(),$Er=YS(),ZS=6123233995736766e-32,QEr=2.414213562373095;function KEr(r){var e,t,i,n;return zEr(r)||r===0?r:r===XEr?h1:r===YEr?-h1:(r<0&&(t=!0,r=-r),e=0,r>QEr?(i=h1,e=1,r=-(1/r)):r<=.66?i=0:(i=JEr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*ZEr(n)/$Er(n),n=r*n+r,e===2?n+=.5*ZS:e===1&&(n+=ZS),i+=n,t?-i:i)}$S.exports=KEr});var v0=s((B5e,KS)=>{"use strict";var rNr=QS();KS.exports=rNr});var eT=s((k5e,rT)=>{"use strict";var eNr=v0();function tNr(r){return eNr(1/r)}rT.exports=tNr});var iT=s((j5e,tT)=>{"use strict";var iNr=eT();tT.exports=iNr});var aT=s((C5e,nT)=>{"use strict";var nNr=xt();function aNr(r){return nNr(1+r)}nT.exports=aNr});var uT=s((V5e,sT)=>{"use strict";var sNr=aT();sT.exports=sNr});var vT=s((U5e,oT)=>{"use strict";var uNr=xt();function oNr(r){return uNr(1-r)}oT.exports=oNr});var cT=s((G5e,fT)=>{"use strict";var vNr=vT();fT.exports=vNr});var pT=s((H5e,lT)=>{"use strict";var fNr=xt();function cNr(r){return fNr(1/r)}lT.exports=cNr});var mT=s((W5e,gT)=>{"use strict";var lNr=pT();gT.exports=lNr});var yT=s((x5e,qT)=>{"use strict";var pNr=Br(),gNr=E(),mNr=et(),dT=U(),dNr=$a(),hT=P(),hNr=1/(1<<28),qNr=1<<28;function yNr(r){var e,t,i;return gNr(r)||pNr(r)?r:(r<0&&(r=-r,e=!0),r<hNr?i=r:r>qNr?i=hT(r)+dNr:r>2?i=hT(2*r+1/(dT(r*r+1)+r)):(t=r*r,i=mNr(r+t/(1+dT(1+t)))),e?-i:i)}qT.exports=yNr});var q1=s((D5e,bT)=>{"use strict";var bNr=yT();bT.exports=bNr});var ET=s((z5e,wT)=>{"use strict";var wNr=q1();function ENr(r){return wNr(1/r)}wT.exports=ENr});var OT=s((X5e,NT)=>{"use strict";var NNr=ET();NT.exports=NNr});var ST=s((J5e,AT)=>{"use strict";var ONr=An(),ANr=U();function SNr(r){return 2*ONr(ANr(r))}AT.exports=SNr});var _T=s((Y5e,TT)=>{"use strict";var TNr=ST();TT.exports=TNr});var LT=s((Z5e,IT)=>{"use strict";var _Nr=xt(),INr=U();function LNr(r){return 2*_Nr(INr(r))}IT.exports=LNr});var PT=s(($5e,RT)=>{"use strict";var RNr=LT();RT.exports=RNr});var BT=s((Q5e,MT)=>{"use strict";var PNr=E(),FT=et(),FNr=I(),MNr=V(),BNr=1/(1<<28);function kNr(r){var e,t;return PNr(r)||r<-1||r>1?NaN:r===1?FNr:r===-1?MNr:(r<0&&(e=!0,r=-r),r<BNr?e?-r:r:(r<.5?(t=r+r,t=.5*FT(t+t*r/(1-r))):t=.5*FT((r+r)/(1-r)),e?-t:t))}MT.exports=kNr});var jT=s((K5e,kT)=>{"use strict";var jNr=BT();kT.exports=jNr});var VT=s((r7e,CT)=>{"use strict";var CNr=An();function VNr(r){return CNr(1+r)}CT.exports=VNr});var GT=s((e7e,UT)=>{"use strict";var UNr=VT();UT.exports=UNr});var WT=s((t7e,HT)=>{"use strict";var GNr=An();function HNr(r){return GNr(1-r)}HT.exports=HNr});var DT=s((i7e,xT)=>{"use strict";var WNr=WT();xT.exports=WNr});var XT=s((n7e,zT)=>{"use strict";var xNr=J();function DNr(r){return xNr(r)===r&&r>=0}zT.exports=DNr});var y1=s((a7e,JT)=>{"use strict";var zNr=XT();JT.exports=zNr});var YT=s((s7e,XNr)=>{XNr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var $T=s((u7e,ZT)=>{"use strict";var JNr=y1(),YNr=E(),ZNr=xa(),$Nr=V(),QNr=I(),KNr=YT(),rOr=258;function eOr(r){return YNr(r)||!JNr(r)?NaN:ZNr(r)?0:r>rOr?r/2&1?QNr:$Nr:KNr[r/2]}ZT.exports=eOr});var KT=s((o7e,QT)=>{"use strict";var tOr=$T();QT.exports=tOr});var e_=s((v7e,r_)=>{"use strict";var iOr=Dr(),b1;iOr===!0?b1=0:b1=1;r_.exports=b1});var n_=s((f7e,i_)=>{"use strict";var nOr=lr(),aOr=cr(),sOr=e_(),t_=new aOr(1),uOr=new nOr(t_.buffer);function oOr(r){return t_[0]=r,uOr[sOr]}i_.exports=oOr});var s_=s((c7e,a_)=>{"use strict";var vOr=n_();a_.exports=vOr});var c_=s((l7e,f_)=>{"use strict";var fOr=J(),f0=Za(),p0=va(),o_=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],cOr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],w1=16777216,E1=5960464477539063e-23,c0=p0(20),u_=p0(20),l0=p0(20),pr=p0(20);function v_(r,e,t,i,n,a,u,o,f){var v,c,l,p,g,h,d,m,q;for(p=a,q=i[t],m=t,g=0;m>0;g++)c=E1*q|0,pr[g]=q-w1*c|0,q=i[m-1]+c,m-=1;if(q=f0(q,n),q-=8*fOr(q*.125),d=q|0,q-=d,l=0,n>0?(g=pr[t-1]>>24-n,d+=g,pr[t-1]-=g<<24-n,l=pr[t-1]>>23-n):n===0?l=pr[t-1]>>23:q>=.5&&(l=2),l>0){for(d+=1,v=0,g=0;g<t;g++)m=pr[g],v===0?m!==0&&(v=1,pr[g]=16777216-m):pr[g]=16777215-m;if(n>0)switch(n){case 1:pr[t-1]&=8388607;break;case 2:pr[t-1]&=4194303;break}l===2&&(q=1-q,v!==0&&(q-=f0(1,n)))}if(q===0){for(m=0,g=t-1;g>=a;g--)m|=pr[g];if(m===0){for(h=1;pr[a-h]===0;h++);for(g=t+1;g<=t+h;g++){for(f[o+g]=o_[u+g],c=0,m=0;m<=o;m++)c+=r[m]*f[o+(g-m)];i[g]=c}return t+=h,v_(r,e,t,i,n,a,u,o,f)}}if(q===0)for(t-=1,n-=24;pr[t]===0;)t-=1,n-=24;else q=f0(q,-n),q>=w1?(c=E1*q|0,pr[t]=q-w1*c|0,t+=1,n+=24,pr[t]=c):pr[t]=q|0;for(c=f0(1,n),g=t;g>=0;g--)i[g]=c*pr[g],c*=E1;for(g=t;g>=0;g--){for(c=0,h=0;h<=p&&h<=t-g;h++)c+=cOr[h]*i[g+h];l0[t-g]=c}for(c=0,g=t;g>=0;g--)c+=l0[g];for(l===0?e[0]=c:e[0]=-c,c=l0[0]-c,g=1;g<=t;g++)c+=l0[g];return l===0?e[1]=c:e[1]=-c,d&7}function lOr(r,e,t,i){var n,a,u,o,f,v,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),v=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?c0[c]=0:c0[c]=o_[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*c0[o+(c-l)];u_[c]=n}return f=a,v_(r,e,f,u_,v,a,u,o,c0)}f_.exports=lOr});var p_=s((p7e,l_)=>{"use strict";var pOr=Math.round;l_.exports=pOr});var N1=s((g7e,g_)=>{"use strict";var gOr=p_();g_.exports=gOr});var q_=s((m7e,h_)=>{"use strict";var mOr=N1(),m_=ar(),dOr=.6366197723675814,hOr=1.5707963267341256,qOr=6077100506506192e-26,yOr=6077100506303966e-26,bOr=20222662487959506e-37,wOr=20222662487111665e-37,EOr=84784276603689e-45,d_=2047;function NOr(r,e,t){var i,n,a,u,o,f,v;return n=mOr(r*dOr),u=r-n*hOr,o=n*qOr,v=e>>20|0,t[0]=u-o,i=m_(t[0]),f=v-(i>>20&d_),f>16&&(a=u,o=n*yOr,u=a-o,o=n*bOr-(a-u-o),t[0]=u-o,i=m_(t[0]),f=v-(i>>20&d_),f>49&&(a=u,o=n*wOr,u=a-o,o=n*EOr-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}h_.exports=NOr});var b_=s((d7e,y_)=>{"use strict";var OOr=ie(),AOr=bn(),SOr=Qa(),TOr=ar(),_Or=s_(),IOr=_i(),LOr=c_(),g0=q_(),ROr=0,POr=16777216,tt=1.5707963267341256,Dt=6077100506506192e-26,m0=2*Dt,d0=3*Dt,h0=4*Dt,FOr=598523,MOr=1072243195,BOr=1073928572,kOr=1074752122,jOr=1074977148,COr=1075183036,VOr=1075388923,UOr=1075594811,GOr=1094263291,Sn=[0,0,0],Tn=[0,0];function HOr(r,e){var t,i,n,a,u,o,f,v;if(n=TOr(r),a=n&OOr|0,a<=MOr)return e[0]=r,e[1]=0,0;if(a<=kOr)return(a&SOr)===FOr?g0(r,a,e):a<=BOr?r>0?(v=r-tt,e[0]=v-Dt,e[1]=v-e[0]-Dt,1):(v=r+tt,e[0]=v+Dt,e[1]=v-e[0]+Dt,-1):r>0?(v=r-2*tt,e[0]=v-m0,e[1]=v-e[0]-m0,2):(v=r+2*tt,e[0]=v+m0,e[1]=v-e[0]+m0,-2);if(a<=UOr)return a<=COr?a===jOr?g0(r,a,e):r>0?(v=r-3*tt,e[0]=v-d0,e[1]=v-e[0]-d0,3):(v=r+3*tt,e[0]=v+d0,e[1]=v-e[0]+d0,-3):a===VOr?g0(r,a,e):r>0?(v=r-4*tt,e[0]=v-h0,e[1]=v-e[0]-h0,4):(v=r+4*tt,e[0]=v+h0,e[1]=v-e[0]+h0,-4);if(a<GOr)return g0(r,a,e);if(a>=AOr)return e[0]=NaN,e[1]=NaN,0;for(t=_Or(r),i=(a>>20)-1046,v=IOr(a-(i<<20|0),t),o=0;o<2;o++)Sn[o]=v|0,v=(v-Sn[o])*POr;for(Sn[2]=v,u=3;Sn[u-1]===ROr;)u-=1;return f=LOr(Sn,Tn,i,u,1),r<0?(e[0]=-Tn[0],e[1]=-Tn[1],-f):(e[0]=Tn[0],e[1]=Tn[1],f)}y_.exports=HOr});var _n=s((h7e,w_)=>{"use strict";var WOr=b_();w_.exports=WOr});var O_=s((q7e,N_)=>{"use strict";var E_=-.16666666666666632,xOr=.00833333333332249,DOr=-.0001984126982985795,zOr=27557313707070068e-22,XOr=-25050760253406863e-24,JOr=158969099521155e-24,YOr=.0416666666666666,ZOr=-.001388888888887411,$Or=2480158728947673e-20,QOr=-27557314351390663e-23,KOr=2087572321298175e-24,rAr=-11359647557788195e-27;function eAr(r,e,t,i,n){var a,u,o,f,v;return v=r*r,f=v*v,u=xOr+v*(DOr+v*zOr)+v*f*(XOr+v*JOr),o=v*r,e===0?t[n]=r+o*(E_+v*u):t[n]=r-(v*(.5*e-o*u)-e-o*E_),u=v*(YOr+v*(ZOr+v*$Or)),u+=f*f*(QOr+v*(KOr+v*rAr)),a=.5*v,f=1-a,t[n+i]=f+(1-f-a+(v*u-r*e)),t}N_.exports=eAr});var A1=s((y7e,S_)=>{"use strict";var tAr=ie(),iAr=bn(),nAr=ar(),aAr=_n(),A_=O_(),sAr=1072243195,uAr=1044381696,O1=[0,0];function oAr(r,e,t,i){var n,a;if(n=nAr(r),n&=tAr,n<=sAr)return n<uAr&&(r|0)===0&&(e[i]=r,e[i+t]=0),A_(r,0,e,t,i);if(n>=iAr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=aAr(r,O1),A_(O1[0],O1[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}S_.exports=oAr});var __=s((b7e,T_)=>{"use strict";var vAr=A1();function fAr(r){return vAr(r,[0,0],1,0)}T_.exports=fAr});var In=s((w7e,L_)=>{"use strict";var cAr=b(),I_=__(),lAr=A1();cAr(I_,"assign",lAr);L_.exports=I_});var P_=s((E7e,R_)=>{"use strict";function pAr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}R_.exports=pAr});var M_=s((N7e,F_)=>{"use strict";function gAr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}F_.exports=gAr});var k_=s((O7e,B_)=>{"use strict";function mAr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}B_.exports=mAr});var C_=s((A7e,j_)=>{"use strict";function dAr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}j_.exports=dAr});var U_=s((S7e,V_)=>{"use strict";var hAr=U(),qAr=In().assign,yAr=I(),bAr=P_(),wAr=M_(),EAr=k_(),NAr=C_(),OAr=.5641895835477563,AAr=2.404825557695773,SAr=5.520078110286311,TAr=616,_Ar=-.0014244423042272315,IAr=1413,LAr=.0005468602863106496,Ln=[0,0];function RAr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===yAr?0:r===0?1:r<=4?(a=r*r,n=bAr(a),u=(r+AAr)*(r-TAr/256-_Ar),u*n):r<=8?(a=1-r*r/64,n=wAr(a),u=(r+SAr)*(r-IAr/256-LAr),u*n):(a=8/r,i=a*a,e=EAr(i),t=NAr(i),u=OAr/hAr(r),qAr(r,Ln,1,0),u*(e*(Ln[1]+Ln[0])-a*t*(Ln[0]-Ln[1])))}V_.exports=RAr});var S1=s((T7e,G_)=>{"use strict";var PAr=U_();G_.exports=PAr});var q0=s((_7e,H_)=>{"use strict";var FAr=1.772453850905516;H_.exports=FAr});var x_=s((I7e,W_)=>{"use strict";function MAr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}W_.exports=MAr});var z_=s((L7e,D_)=>{"use strict";function BAr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}D_.exports=BAr});var J_=s((R7e,X_)=>{"use strict";function kAr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}X_.exports=kAr});var Z_=s((P7e,Y_)=>{"use strict";function jAr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}Y_.exports=jAr});var Q_=s((F7e,$_)=>{"use strict";var CAr=U(),VAr=Y(),UAr=In().assign,GAr=I(),HAr=q0(),WAr=x_(),xAr=z_(),DAr=J_(),zAr=Z_(),XAr=3.8317059702075125,JAr=7.015586669815619,YAr=981,ZAr=-.0003252797924876844,$Ar=1796,QAr=-38330184381246464e-21,Rn=[0,0];function KAr(r){var e,t,i,n,a,u,o,f;return f=VAr(r),r===0||f===GAr?0:(f<=4?(u=r*r,a=WAr(u),o=f*(f+XAr)*(f-YAr/256-ZAr),e=o*a):f<=8?(u=r*r,a=xAr(u),o=f*(f+JAr)*(f-$Ar/256-QAr),e=o*a):(u=8/f,n=u*u,t=DAr(n),i=zAr(n),o=1/(CAr(f)*HAr),UAr(f,Rn,1,0),e=o*(t*(Rn[0]-Rn[1])+u*i*(Rn[0]+Rn[1]))),r<0&&(e*=-1),e)}$_.exports=KAr});var T1=s((M7e,K_)=>{"use strict";var rSr=Q_();K_.exports=rSr});var kr=s((B7e,rI)=>{"use strict";var eSr=3.141592653589793;rI.exports=eSr});var tI=s((k7e,eI)=>{"use strict";function tSr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}eI.exports=tSr});var nI=s((j7e,iI)=>{"use strict";function iSr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}iI.exports=iSr});var sI=s((C7e,aI)=>{"use strict";function nSr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}aI.exports=nSr});var oI=s((V7e,uI)=>{"use strict";function aSr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}uI.exports=aSr});var fI=s((U7e,vI)=>{"use strict";function sSr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}vI.exports=sSr});var mI=s((G7e,gI)=>{"use strict";var _1=P(),uSr=U(),oSr=kr(),vSr=q0(),fSr=V(),cSr=I(),lSr=In().assign,I1=S1(),pSr=tI(),gSr=nI(),mSr=sI(),dSr=oI(),hSr=fI(),qSr=1/vSr,L1=2/oSr,cI=.8935769662791675,lI=3.957678419314858,pI=7.086051060301773,ySr=228,bSr=.0029519662791675214,wSr=1013,ESr=.0006471693148578684,NSr=1814,OSr=.00011356030177269763,Pn=[0,0];function ASr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?fSr:r===cSr?0:r<=3?(a=r*r,u=_1(r/cI)*I1(r)*L1,n=pSr(a),o=(r+cI)*(r-ySr/256-bSr),u+o*n):r<=5.5?(a=r*r,u=_1(r/lI)*I1(r)*L1,n=gSr(a),o=(r+lI)*(r-wSr/256-ESr),u+o*n):r<=8?(a=r*r,u=_1(r/pI)*I1(r)*L1,n=mSr(a),o=(r+pI)*(r-NSr/256-OSr),u+o*n):(a=8/r,i=a*a,e=dSr(i),t=hSr(i),o=qSr/uSr(r),lSr(r,Pn,1,0),o*(e*(Pn[0]-Pn[1])+a*t*(Pn[1]+Pn[0])))}gI.exports=ASr});var hI=s((H7e,dI)=>{"use strict";var SSr=mI();dI.exports=SSr});var yI=s((W7e,qI)=>{"use strict";function TSr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}qI.exports=TSr});var wI=s((x7e,bI)=>{"use strict";function _Sr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}bI.exports=_Sr});var NI=s((D7e,EI)=>{"use strict";function ISr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}EI.exports=ISr});var AI=s((z7e,OI)=>{"use strict";function LSr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}OI.exports=LSr});var PI=s((X7e,RI)=>{"use strict";var SI=P(),RSr=U(),PSr=kr(),FSr=q0(),MSr=V(),BSr=I(),kSr=In().assign,TI=T1(),jSr=yI(),CSr=wI(),VSr=NI(),USr=AI(),GSr=1/FSr,_I=2/PSr,II=2.197141326031017,LI=5.429681040794135,HSr=562,WSr=.001828826031017035,xSr=1390,DSr=-6459205864867228e-21,Fn=[0,0];function zSr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?MSr:r===BSr?0:r<=4?(a=r*r,u=SI(r/II)*TI(r)*_I,n=jSr(a),o=(r+II)*(r-HSr/256-WSr)/r,u+o*n):r<=8?(a=r*r,u=SI(r/LI)*TI(r)*_I,n=CSr(a),o=(r+LI)*(r-xSr/256-DSr)/r,u+o*n):(a=8/r,i=a*a,e=VSr(i),t=USr(i),o=GSr/RSr(r),kSr(r,Fn,1,0),o*(a*t*(Fn[0]-Fn[1])-e*(Fn[0]+Fn[1])))}RI.exports=zSr});var MI=s((J7e,FI)=>{"use strict";var XSr=PI();FI.exports=XSr});var kI=s((Y7e,BI)=>{"use strict";function JSr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}BI.exports=JSr});var CI=s((Z7e,jI)=>{"use strict";function YSr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}jI.exports=YSr});var UI=s(($7e,VI)=>{"use strict";var ZSr=kI(),$Sr=CI();function QSr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*ZSr(a),i+=n*n*$Sr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}VI.exports=QSr});var R1=s((Q7e,GI)=>{"use strict";var KSr=UI();GI.exports=KSr});var xI=s((K7e,WI)=>{"use strict";var HI=-.16666666666666632,rTr=.00833333333332249,eTr=-.0001984126982985795,tTr=27557313707070068e-22,iTr=-25050760253406863e-24,nTr=158969099521155e-24;function aTr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=rTr+a*(eTr+a*tTr)+a*n*(iTr+a*nTr),i=a*r,e===0?r+i*(HI+a*t):r-(a*(.5*e-i*t)-e-i*HI)}WI.exports=aTr});var P1=s((r9e,DI)=>{"use strict";var sTr=xI();DI.exports=sTr});var JI=s((e9e,XI)=>{"use strict";var uTr=ar(),F1=R1(),zI=P1(),oTr=_n(),ge=[0,0],vTr=2147483647,fTr=1072243195,cTr=1044381696,lTr=2146435072;function pTr(r){var e,t;if(e=uTr(r),e&=vTr,e<=fTr)return e<cTr?1:F1(r,0);if(e>=lTr)return NaN;switch(t=oTr(r,ge),t&3){case 0:return F1(ge[0],ge[1]);case 1:return-zI(ge[0],ge[1]);case 2:return-F1(ge[0],ge[1]);default:return zI(ge[0],ge[1])}}XI.exports=pTr});var zt=s((t9e,YI)=>{"use strict";var gTr=JI();YI.exports=gTr});var QI=s((i9e,$I)=>{"use strict";var mTr=ie(),dTr=bn(),hTr=ar(),ZI=R1(),M1=P1(),qTr=_n(),yTr=1072243195,bTr=1045430272,me=[0,0];function wTr(r){var e,t;if(e=hTr(r),e&=mTr,e<=yTr)return e<bTr?r:M1(r,0);if(e>=dTr)return NaN;switch(t=qTr(r,me),t&3){case 0:return M1(me[0],me[1]);case 1:return ZI(me[0],me[1]);case 2:return-M1(me[0],me[1]);default:return-ZI(me[0],me[1])}}$I.exports=wTr});var Xt=s((n9e,KI)=>{"use strict";var ETr=QI();KI.exports=ETr});var tL=s((a9e,eL)=>{"use strict";var NTr=E(),OTr=Br(),ATr=Y(),rL=zt(),STr=Xt(),TTr=J(),B1=kr(),_Tr=Ii(),ITr=_Tr+1;function LTr(r){var e,t,i,n;return NTr(r)?NaN:OTr(r)?NaN:(e=ATr(r),e>ITr?1:(t=TTr(e),i=e-t,i===.5?0:(i<.25?n=rL(B1*i):i<.75?(i=.5-i,n=STr(B1*i)):(i=1-i,n=-rL(B1*i)),t%2===1?-n:n)))}eL.exports=LTr});var nL=s((s9e,iL)=>{"use strict";var RTr=tL();iL.exports=RTr});var sL=s((u9e,aL)=>{"use strict";var PTr=1.618033988749895;aL.exports=PTr});var oL=s((o9e,uL)=>{"use strict";var FTr=E(),MTr=nL(),BTr=W(),kTr=sL(),jTr=I(),CTr=V(),VTr=2.23606797749979;function UTr(r){var e,t;return FTr(r)||r===jTr||r===CTr?NaN:(e=BTr(kTr,r),t=MTr(r)/e,(e-t)/VTr)}uL.exports=UTr});var fL=s((v9e,vL)=>{"use strict";var GTr=oL();vL.exports=GTr});var lL=s((f9e,cL)=>{"use strict";function HTr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}cL.exports=HTr});var dL=s((c9e,mL)=>{"use strict";var WTr=i1(),xTr=J2(),pL=ie(),j1=ar(),DTr=le(),zTr=Br(),gL=_i(),XTr=Ti(),JTr=E(),YTr=lL(),ZTr=4294967295>>>0,$Tr=3221225472>>>0,QTr=0x40000000000000,k1=2147483648>>>0,KTr=1>>>0,r_r=715094163>>>0,e_r=696219795>>>0,t_r=j1(WTr),Jt=[0>>>0,0>>>0];function i_r(r){var e,t,i,n,a,u,o;return r===0||JTr(r)||zTr(r)?r:(t=j1(r)>>>0,e=(t&xTr)>>>0,t&=pL,t<t_r?(u=QTr*r,i=(j1(u)&pL)>>>0,i=(i/3>>>0)+e_r>>>0,u=gL(e|i,0)):(u=0,i=(t/3>>>0)+r_r>>>0,u=DTr(u,e|i)),n=u*u*(u/r),u*=YTr(n),XTr.assign(u,Jt,1,0),Jt[1]&k1?(Jt[0]+=KTr,Jt[1]&=~k1):Jt[1]|=k1,u=gL(Jt[0]&ZTr,Jt[1]&$Tr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}mL.exports=i_r});var qL=s((l9e,hL)=>{"use strict";var n_r=dL();hL.exports=n_r});var bL=s((p9e,yL)=>{"use strict";var a_r=Math.ceil;yL.exports=a_r});var Mn=s((g9e,wL)=>{"use strict";var s_r=bL();wL.exports=s_r});var NL=s((m9e,EL)=>{"use strict";function u_r(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}EL.exports=u_r});var AL=s((d9e,OL)=>{"use strict";function o_r(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}OL.exports=o_r});var _L=s((h9e,TL)=>{"use strict";var v_r=ar(),f_r=NL(),c_r=AL(),SL=1048575,l_r=.3333333333333333;function p_r(r){var e,t,i,n,a,u,o,f,v,c,l;return n=v_r(r),a=r-1,(SL&2+n)<3?a===0?0:a*a*(l_r*a-.5):(u=a/(2+a),o=u*u,n&=SL,c=n-398458|0,v=o*o,l=440401-n|0,t=v*f_r(v),i=o*c_r(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}TL.exports=p_r});var PL=s((q9e,RL)=>{"use strict";var IL=ar(),g_r=le(),m_r=ce(),d_r=E(),h_r=ne(),q_r=V(),y_r=_L(),b_r=0x40000000000000,LL=.4342944818781689,w_r=25082946711645275e-27,E_r=.30102999566361177,N_r=3694239077158931e-28,O_r=1048575,A_r=2146435072,S_r=1048576,T_r=1072693248;function __r(r){var e,t,i,n,a,u,o,f;return d_r(r)||r<0?NaN:r===0?q_r:(t=IL(r),u=0,t<S_r&&(u-=54,r*=b_r,t=IL(r)),t>=A_r?r+r:(u+=(t>>20)-h_r|0,t&=O_r,a=t+614244&1048576|0,r=g_r(r,t|a^T_r),u+=a>>20|0,o=u,n=y_r(r),r-=1,e=m_r(r,0),i=r-e,f=o*N_r+(r+n)*w_r,f+=(i+n)*LL+e*LL,f+o*E_r))}RL.exports=__r});var ML=s((y9e,FL)=>{"use strict";var I_r=PL();FL.exports=I_r});var kL=s((b9e,BL)=>{"use strict";var L_r=E(),R_r=Br(),P_r=W(),F_r=J(),M_r=Mn(),B_r=ML(),k_r=Ka(),j_r=r0(),C_r=I();function V_r(r){var e,t;return L_r(r)||R_r(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=B_r(r),e===-1?t=F_r(t):t=M_r(t),t<=j_r?e*0:t>k_r?C_r:e*P_r(10,t))}BL.exports=V_r});var CL=s((w9e,jL)=>{"use strict";var U_r=kL();jL.exports=U_r});var UL=s((E9e,VL)=>{"use strict";function G_r(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}VL.exports=G_r});var HL=s((N9e,GL)=>{"use strict";function H_r(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}GL.exports=H_r});var DL=s((O9e,xL)=>{"use strict";var W_r=ar(),x_r=UL(),D_r=HL(),WL=1048575,z_r=.3333333333333333;function X_r(r){var e,t,i,n,a,u,o,f,v,c,l;return n=W_r(r),a=r-1,(WL&2+n)<3?a===0?0:a*a*(z_r*a-.5):(u=a/(2+a),o=u*u,n&=WL,c=n-398458|0,v=o*o,l=440401-n|0,t=v*x_r(v),i=o*D_r(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}xL.exports=X_r});var JL=s((A9e,XL)=>{"use strict";var J_r=ar(),Y_r=le(),Z_r=ce(),$_r=Ti(),Q_r=E(),K_r=ie(),rIr=Qa(),eIr=ne(),tIr=V(),iIr=DL(),nIr=0x40000000000000,zL=1.4426950407214463,aIr=16751713164886512e-26,sIr=2146435072,uIr=1048576,oIr=1072693248,C1=[0,0];function vIr(r){var e,t,i,n,a,u,o;if(Q_r(r)||r<0)return NaN;if($_r.assign(r,C1,1,0),i=C1[0],n=C1[1],o=0,i<uIr){if((i&K_r|n)===0)return tIr;o-=54,r*=nIr,i=J_r(r)}return i>=sIr?r+r:(o+=(i>>20)-eIr|0,i&=rIr,u=i+614244&1048576|0,r=Y_r(r,i|u^oIr),o+=u>>20|0,a=iIr(r),r-=1,e=Z_r(r,0),t=r-e,(r+a)*aIr+(t+a)*zL+e*zL+o)}XL.exports=vIr});var ZL=s((S9e,YL)=>{"use strict";var fIr=JL();YL.exports=fIr});var QL=s((T9e,$L)=>{"use strict";var cIr=E(),lIr=Br(),pIr=W(),gIr=J(),mIr=Mn(),dIr=ZL(),hIr=e1(),qIr=t1(),yIr=I();function bIr(r){var e,t;return cIr(r)||lIr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=dIr(r),t===qIr)?r:(e===-1?t=gIr(t):t=mIr(t),t>hIr?yIr:e*pIr(2,t))}$L.exports=bIr});var rR=s((_9e,KL)=>{"use strict";var wIr=QL();KL.exports=wIr});var tR=s((I9e,eR)=>{"use strict";var EIr=J(),NIr=Mn();function OIr(r){return r<0?NIr(r):EIr(r)}eR.exports=OIr});var y0=s((L9e,iR)=>{"use strict";var AIr=tR();iR.exports=AIr});var aR=s((R9e,nR)=>{"use strict";function SIr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}nR.exports=SIr});var uR=s((P9e,sR)=>{"use strict";var TIr=Za(),_Ir=aR();function IIr(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*_Ir(n),u=1-(e-i*a/(2-a)-r),TIr(u,t)}sR.exports=IIr});var pR=s((F9e,lR)=>{"use strict";var LIr=E(),oR=y0(),RIr=V(),vR=I(),PIr=uR(),FIr=.6931471803691238,MIr=19082149292705877e-26,fR=1.4426950408889634,BIr=709.782712893384,kIr=-745.1332191019411,cR=1/(1<<28),jIr=-cR;function CIr(r){var e,t,i;return LIr(r)||r===vR?r:r===RIr?0:r>BIr?vR:r<kIr?0:r>jIr&&r<cR?1+r:(r<0?i=oR(fR*r-.5):i=oR(fR*r+.5),e=r-i*FIr,t=i*MIr,PIr(e,t,i))}lR.exports=CIr});var sr=s((M9e,gR)=>{"use strict";var VIr=pR();gR.exports=VIr});var dR=s((B9e,mR)=>{"use strict";var UIr=V();function GIr(r){return r===0&&1/r===UIr}mR.exports=GIr});var V1=s((k9e,hR)=>{"use strict";var HIr=dR();hR.exports=HIr});var U1=s((j9e,qR)=>{"use strict";var WIr=2.5066282746310007;qR.exports=WIr});var bR=s((C9e,yR)=>{"use strict";function xIr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}yR.exports=xIr});var NR=s((V9e,ER)=>{"use strict";var DIr=U1(),wR=W(),zIr=sr(),XIr=bR(),JIr=143.01608;function YIr(r){var e,t,i;return e=1/r,e=1+e*XIr(e),t=zIr(r),r>JIr?(i=wR(r,.5*r-.25),t=i*(i/t)):t=wR(r,r-.5)/t,DIr*t*e}ER.exports=YIr});var AR=s((U9e,OR)=>{"use strict";var ZIr=.5772156649015329;OR.exports=ZIr});var TR=s((G9e,SR)=>{"use strict";var $Ir=AR();function QIr(r,e){return e/((1+$Ir*r)*r)}SR.exports=QIr});var IR=s((H9e,_R)=>{"use strict";function KIr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}_R.exports=KIr});var jR=s((W9e,kR)=>{"use strict";var rLr=E(),eLr=Lr(),tLr=V1(),LR=Y(),iLr=J(),nLr=Xt(),RR=I(),PR=V(),FR=kr(),MR=NR(),BR=TR(),aLr=IR();function sLr(r){var e,t,i,n;if(eLr(r)&&r<0||r===PR||rLr(r))return NaN;if(r===0)return tLr(r)?PR:RR;if(r>171.61447887182297)return RR;if(r<-170.5674972726612)return 0;if(t=LR(r),t>33)return r>=0?MR(r):(i=iLr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*nLr(FR*n),e*FR/(LR(n)*MR(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return BR(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return BR(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*aLr(r))}kR.exports=sLr});var Li=s((x9e,CR)=>{"use strict";var uLr=jR();CR.exports=uLr});var GR=s((D9e,UR)=>{"use strict";var oLr=E(),vLr=Br(),VR=zt(),G1=Xt(),fLr=Y(),Bn=Da(),kn=kr();function cLr(r){var e,t;return oLr(r)?NaN:vLr(r)?NaN:(t=r%2,e=fLr(t),e===0||e===1?Bn(0,t):e<.25?G1(kn*t):e<.75?(e=.5-e,Bn(VR(kn*e),t)):e<1.25?(t=Bn(1,t)-t,G1(kn*t)):e<1.75?(e-=1.5,-Bn(VR(kn*e),t)):(t-=Bn(2,t),G1(kn*t)))}UR.exports=cLr});var jn=s((z9e,HR)=>{"use strict";var lLr=GR();HR.exports=lLr});var xR=s((X9e,WR)=>{"use strict";function pLr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}WR.exports=pLr});var zR=s((J9e,DR)=>{"use strict";function gLr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}DR.exports=gLr});var JR=s((Y9e,XR)=>{"use strict";function mLr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}XR.exports=mLr});var ZR=s((Z9e,YR)=>{"use strict";function dLr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}YR.exports=dLr});var QR=s(($9e,$R)=>{"use strict";function hLr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}$R.exports=hLr});var rP=s((Q9e,KR)=>{"use strict";function qLr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}KR.exports=qLr});var tP=s((K9e,eP)=>{"use strict";function yLr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}eP.exports=yLr});var nP=s((rpe,iP)=>{"use strict";function bLr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}iP.exports=bLr});var sP=s((epe,aP)=>{"use strict";function wLr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}aP.exports=wLr});var oP=s((tpe,uP)=>{"use strict";function ELr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}uP.exports=ELr});var cP=s((ipe,fP)=>{"use strict";var NLr=E(),OLr=Br(),ALr=Y(),Ri=P(),SLr=y0(),TLr=jn(),_Lr=kr(),H1=I(),ILr=xR(),LLr=zR(),RLr=JR(),PLr=ZR(),FLr=QR(),MLr=rP(),BLr=tP(),kLr=nP(),jLr=sP(),CLr=oP(),VLr=.07721566490153287,ULr=.3224670334241136,GLr=1,HLr=-.07721566490153287,WLr=.48383612272381005,xLr=-.1475877229945939,DLr=.06462494023913339,zLr=-.07721566490153287,XLr=1,JLr=.4189385332046727,b0=1.4616321449683622,YLr=4503599627370496,ZLr=0x400000000000000,$Lr=8470329472543003e-37,vP=1.4616321449683622,QLr=-.12148629053584961,KLr=-3638676997039505e-33;function rRr(r){var e,t,i,n,a,u,o,f,v,c,l,p,g;if(NLr(r)||OLr(r))return r;if(r===0)return H1;if(r<0?(e=!0,r=-r):e=!1,r<$Lr)return-Ri(r);if(e){if(r>=YLr||(v=TLr(r),v===0))return H1;t=Ri(_Lr/ALr(v*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(g=-Ri(r),r>=b0-1+.27?(l=1-r,i=0):r>=b0-1-.27?(l=r-(vP-1),i=1):(l=r,i=2)):(g=0,r>=b0+.27?(l=2-r,i=0):r>=b0-.27?(l=r-vP,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=VLr+p*ILr(p),a=p*(ULr+p*LLr(p)),o=l*u+a,g+=o-.5*l;break;case 1:p=l*l,c=p*l,u=WLr+c*FLr(c),a=xLr+c*MLr(c),n=DLr+c*BLr(c),o=p*u-(KLr-c*(a+l*n)),g+=QLr+o;break;case 2:u=l*(zLr+l*kLr(l)),a=XLr+l*jLr(l),g+=-.5*l+u/a;break}else if(r<8)switch(i=SLr(r),l=r-i,o=l*(HLr+l*PLr(l)),f=GLr+l*RLr(l),g=.5*l+o/f,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,g+=Ri(p)}else r<ZLr?(v=Ri(r),p=1/r,l=p*p,c=JLr+p*CLr(l),g=(r-.5)*(v-1)+c):g=r*(Ri(r)-1);return e&&(g=t-g),g}fP.exports=rRr});var Cn=s((npe,lP)=>{"use strict";var eRr=cP();lP.exports=eRr});var it=s((ape,pP)=>{"use strict";var tRr=6.283185307179586;pP.exports=tRr});var W1=s((spe,gP)=>{"use strict";var iRr=14901161193847656e-24;gP.exports=iRr});var x1=s((upe,mP)=>{"use strict";var nRr=.9189385332046728;mP.exports=nRr});var dP=s((ope,aRr)=>{aRr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var hP=s((vpe,sRr)=>{sRr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var qP=s((fpe,uRr)=>{uRr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var bP=s((cpe,yP)=>{"use strict";function oRr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}yP.exports=oRr});var EP=s((lpe,wP)=>{"use strict";function vRr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}wP.exports=vRr});var OP=s((ppe,NP)=>{"use strict";function fRr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}NP.exports=fRr});var SP=s((gpe,AP)=>{"use strict";function cRr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}AP.exports=cRr});var _P=s((mpe,TP)=>{"use strict";function lRr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}TP.exports=lRr});var LP=s((dpe,IP)=>{"use strict";function pRr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}IP.exports=pRr});var BP=s((hpe,MP)=>{"use strict";var gRr=E(),mRr=Lr(),dRr=Y(),w0=sr(),hRr=J(),qRr=Li(),yRr=Cn(),RP=jn(),PP=W(),bRr=P(),wRr=I(),ERr=V(),FP=it(),NRr=W1(),ORr=x1(),ARr=dP(),SRr=hP(),TRr=qP(),_Rr=bP(),IRr=EP(),LRr=OP(),RRr=SP(),PRr=_P(),FRr=LP(),MRr=129,BRr=170,kRr=709,jRr=1.2433929443359375,CRr=.6986598968505859;function D1(r){var e,t,i,n,a,u;if(gRr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(mRr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=MRr)return-TRr[u]/(i+1)}else return(n&1)===0?SRr[n/2]:ARr[(n-3)/2];return dRr(r)<NRr?-.5-ORr*r:(t=1-r,r<0?hRr(r/2)===r/2?0:(e=r,r=t,t=e,r>BRr?(e=RP(.5*t)*2*D1(r),a=yRr(r),a-=r*bRr(FP),a>kRr?e<0?ERr:wRr:e*w0(a)):RP(.5*t)*2*PP(FP,-r)*qRr(r)*D1(r)):r<1?(e=_Rr(t),e-=jRr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+IRr(t)):r<=4?(e=CRr+1/-t,e+LRr(r-2)):r<=7?(e=RRr(r-4),1+w0(e)):r<15?(e=PRr(r-7),1+w0(e)):r<36?(e=FRr(r-15),1+w0(e)):1+PP(2,-r))}MP.exports=D1});var jP=s((qpe,kP)=>{"use strict";var VRr=BP();kP.exports=VRr});var VP=s((ype,CP)=>{"use strict";var H=rr(),URr=Y(),GRr=n0(),HRr=An(),WRr=xS(),xRr=iT(),DRr=uT(),zRr=cT(),XRr=mT(),JRr=OT(),YRr=_T(),ZRr=PT(),$Rr=xt(),QRr=q1(),KRr=v0(),rPr=jT(),ePr=GT(),tPr=DT(),iPr=KT(),nPr=S1(),aPr=T1(),sPr=hI(),uPr=MI(),oPr=fL(),vPr=qL(),fPr=Mn(),cPr=CL(),lPr=rR(),pPr=zt(),gPr=Xt(),mPr=U(),dPr=jP();function hPr(r){return H(r,"abs",URr),H(r,"abs2",GRr),H(r,"acos",HRr),H(r,"acosh",WRr),H(r,"acot",xRr),H(r,"acovercos",DRr),H(r,"acoversin",zRr),H(r,"acsc",XRr),H(r,"acsch",JRr),H(r,"ahavercos",YRr),H(r,"ahaversin",ZRr),H(r,"asin",$Rr),H(r,"asinh",QRr),H(r,"atan",KRr),H(r,"atanh",rPr),H(r,"avercos",ePr),H(r,"aversin",tPr),H(r,"bernoulli",iPr),H(r,"besselj0",nPr),H(r,"besselj1",aPr),H(r,"bessely0",sPr),H(r,"bessely1",uPr),H(r,"binet",oPr),H(r,"cbrt",vPr),H(r,"ceil",fPr),H(r,"ceil10",cPr),H(r,"ceil2",lPr),H(r,"cos",pPr),H(r,"sin",gPr),H(r,"sqrt",mPr),H(r,"zeta",dPr),r}CP.exports=hPr});var GP=s((bpe,UP)=>{"use strict";var qPr=rr(),yPr=AA(),bPr=nS(),wPr=VP();function EPr(r){return qPr(r,"tools",bPr({})),r=yPr(r),r=wPr(r),r}UP.exports=EPr});var WP=s((wpe,HP)=>{"use strict";function NPr(r){var e,t,i;if(e=r.length,e===0)return 0;for(t=1,i=0;i<e;i++)t*=r[i];return t}HP.exports=NPr});var z1=s((Epe,xP)=>{"use strict";var OPr=WP();xP.exports=OPr});var zP=s((Npe,DP)=>{"use strict";function APr(r){var e,t,i,n;for(e=r.length,t=[],n=0;n<e;n++)t.push(0);for(i=1,n=e-1;n>=0;n--)t[n]=i,i*=r[n];return t}function SPr(r){var e,t,i;for(e=[],t=1,i=0;i<r.length;i++)e.push(t),t*=r[i];return e}function TPr(r,e){return e==="column-major"?SPr(r):APr(r)}DP.exports=TPr});var JP=s((Ope,XP)=>{"use strict";function _Pr(r,e){var t,i,n;for(t=r.length,i=1,n=t-1;n>=0;n--)e[n]=i,i*=r[n];return e}function IPr(r,e){var t,i;for(t=1,i=0;i<r.length;i++)e[i]=t,t*=r[i];return e}function LPr(r,e,t){return e==="column-major"?IPr(r,t):_Pr(r,t)}XP.exports=LPr});var X1=s((Ape,ZP)=>{"use strict";var RPr=b(),YP=zP(),PPr=JP();RPr(YP,"assign",PPr);ZP.exports=YP});var QP=s((Spe,$P)=>{"use strict";function FPr(r,e){var t,i,n;for(i=r.length,t=0,n=0;n<i;n++)e[n]<0&&(t-=e[n]*(r[n]-1));return t}$P.exports=FPr});var J1=s((Tpe,KP)=>{"use strict";var MPr=QP();KP.exports=MPr});var tF=s((_pe,eF)=>{"use strict";function rF(r,e,t,i,n,a){var u,o,f,v,c;if(a>=e.length)return r.accessors[0](r.data,i);for(f=[],v=e[a],u=t[a],c=0;c<v;c++)o=rF(r,e,t,i,n,a+1),f.push(o),i+=u;return f}eF.exports=rF});var nF=s((Ipe,iF)=>{"use strict";var BPr=fn(),kPr=tF();function jPr(r,e,t,i,n){var a;if(e.length===0)return[];for(a=0;a<e.length;a++)if(e[a]===0)return[];return kPr(BPr(r),e,t,i,n,0)}iF.exports=jPr});var sF=s((Lpe,aF)=>{"use strict";var CPr=nF();aF.exports=CPr});var oF=s((Rpe,uF)=>{"use strict";var VPr=$e(),UPr=cr(),GPr=Zr(),HPr=ii(),WPr=Xe(),xPr=ai(),DPr=Mt(),zPr=lr(),XPr=$r(),JPr=ni(),YPr=pi(),ZPr=hi(),$Pr={binary:VPr,float64:UPr,float32:GPr,generic:Array,int16:HPr,int32:WPr,int8:xPr,uint16:DPr,uint32:zPr,uint8:XPr,uint8c:JPr,complex64:YPr,complex128:ZPr};uF.exports=$Pr});var fF=s((Ppe,vF)=>{"use strict";var QPr=oF();function KPr(r){return QPr[r]||null}vF.exports=KPr});var lF=s((Fpe,cF)=>{"use strict";var rFr=fF();cF.exports=rFr});var gF=s((Mpe,pF)=>{"use strict";var eFr=_(),tFr=$e(),iFr=eFr(tFr.allocUnsafe);pF.exports=iFr});var dF=s((Bpe,mF)=>{"use strict";var nFr=jr(),aFr=y(),sFr=$e();function uFr(r){if(!nFr(r))throw new TypeError(aFr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return sFr.allocUnsafe(r)}mF.exports=uFr});var qF=s((kpe,hF)=>{"use strict";var oFr=jr(),vFr=y(),fFr=$e();function cFr(r){if(!oFr(r))throw new TypeError(vFr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new fFr(r)}hF.exports=cFr});var bF=s((jpe,yF)=>{"use strict";var lFr=gF(),pFr=dF(),gFr=qF(),Y1;lFr?Y1=pFr:Y1=gFr;yF.exports=Y1});var EF=s((Cpe,wF)=>{"use strict";function mFr(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}wF.exports=mFr});var OF=s((Vpe,NF)=>{"use strict";var dFr=lF(),hFr=bF(),qFr=EF();function yFr(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}function bFr(r){return qFr(hFr(r))}function wFr(r,e){var t=dFr(r);return t?new t(e):null}function EFr(r,e){return r==="generic"?yFr(e):r==="binary"?bFr(e):wFr(r,e)}NF.exports=EFr});var SF=s((Upe,AF)=>{"use strict";var NFr=OF();AF.exports=NFr});var IF=s((Gpe,_F)=>{"use strict";var OFr=no(),TF=OFr();function AFr(){return typeof TF.BigInt=="function"&&typeof BigInt=="function"&&typeof TF.BigInt("1")=="bigint"&&typeof BigInt("1")=="bigint"}_F.exports=AFr});var RF=s((Hpe,LF)=>{"use strict";var SFr=IF();LF.exports=SFr});var PF=s((Wpe,TFr)=>{TFr.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var MF=s((xpe,FF)=>{"use strict";var _Fr=PF();function IFr(r){return _Fr[r]||null}FF.exports=IFr});var kF=s((Dpe,BF)=>{"use strict";var LFr=MF();BF.exports=LFr});var CF=s((zpe,jF)=>{"use strict";function RFr(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return e===0?1:e===r.length?-1:0}jF.exports=RFr});var UF=s((Xpe,VF)=>{"use strict";var PFr=CF();VF.exports=PFr});var WF=s((Jpe,HF)=>{"use strict";var GF=Y();function FFr(r){var e,t,i,n,a,u;if(t=r.length,t===0)return 0;for(e=!0,i=!0,n=GF(r[0]),u=1;u<t;u++)if(a=GF(r[u]),e&&a<n?e=!1:i&&a>n&&(i=!1),i||e)n=a;else return 0;return i&&e?3:i?1:2}HF.exports=FFr});var DF=s((Ype,xF)=>{"use strict";var MFr=WF();xF.exports=MFr});var XF=s((Zpe,zF)=>{"use strict";function BFr(r,e){return e&&(r===2||r===3)}zF.exports=BFr});var YF=s(($pe,JF)=>{"use strict";function kFr(r,e){return e&&(r===1||r===3)}JF.exports=kFr});var $F=s((Qpe,ZF)=>{"use strict";var jFr=r2();function CFr(r,e,t,i,n){var a;return r===0||n===0?!1:(a=jFr(e,t,i),r===a[1]-a[0]+1)}ZF.exports=CFr});var KF=s((Kpe,QF)=>{"use strict";function VFr(r){return{ROW_MAJOR_CONTIGUOUS:r.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:r.COLUMN_MAJOR_CONTIGUOUS,READONLY:r.READONLY}}QF.exports=VFr});var eM=s((rge,rM)=>{"use strict";function UFr(r){var e,t,i,n,a,u;if(i=this._ndims,i===0)return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.get(this._offset+r):this._buffer[this._offset+r];if(this._iterationOrder===-1)return this._accessors?this._buffer.get(this.offset-r):this._buffer[this._offset-r]}if(t=this._shape,e=this._strides,n=this._offset,this._order==="column-major"){for(u=0;u<i;u++)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}for(u=i-1;u>=0;u--)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}rM.exports=UFr});var iM=s((ege,tM)=>{"use strict";function GFr(r,e){var t,i,n,a,u,o;if(n=this._ndims,n===0)return this._accessors?this._buffer.set(r,this._offset):this._buffer[this._offset]=r,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.set(e,this._offset+r):this._buffer[this._offset+r]=e,this;if(this._iterationOrder===-1)return this._accessors?this._buffer.set(e,this._offset-r):this._buffer[this._offset-r]=e,this}if(i=this._shape,t=this._strides,a=this._offset,this._order==="column-major"){for(o=0;o<n;o++)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}for(o=n-1;o>=0;o--)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}tM.exports=GFr});var aM=s((tge,nM)=>{"use strict";function HFr(){var r,e;for(r=this._offset,e=0;e<arguments.length-1;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],r):this._buffer[r]=arguments[e],this}nM.exports=HFr});var uM=s((ige,sM)=>{"use strict";function WFr(){var r,e;for(r=this._offset,e=0;e<arguments.length;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(r):this._buffer[r]}sM.exports=WFr});var vM=s((nge,oM)=>{"use strict";var xFr=Qr(),DFr=Kr();function zFr(){var r,e,t,i;for(e=this._length,r={},r.type="ndarray",r.dtype=this.dtype,r.flags={READONLY:this._flags.READONLY},r.order=this._order,r.shape=this._shape.slice(),r.strides=this._strides.slice(),i=0;i<e;i++)r.strides[i]<0&&(r.strides[i]*=-1);if(r.data=[],r.dtype==="complex64"||r.dtype==="complex128")for(i=0;i<e;i++)t=this.iget(i),r.data.push(xFr(t),DFr(t));else for(i=0;i<e;i++)r.data.push(this.iget(i));return r}oM.exports=zFr});var lM=s((age,cM)=>{"use strict";var XFr=K().isPrimitive,JFr=y(),fM=/[-\/\\^$*+?.()|[\]{}]/g;function YFr(r){var e,t,i;if(!XFr(r))throw new TypeError(JFr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(fM,"\\$&"):(t=r.substring(1,i),t=t.replace(fM,"\\$&"),r=r[0]+t+r.substring(i),r)}cM.exports=YFr});var gM=s((sge,pM)=>{"use strict";var ZFr=lM();pM.exports=ZFr});var dM=s((uge,mM)=>{"use strict";var $Fr=RegExp.prototype.exec;mM.exports=$Fr});var qM=s((oge,hM)=>{"use strict";var QFr=dM();function KFr(r){try{return QFr.call(r),!0}catch{return!1}}hM.exports=KFr});var bM=s((vge,yM)=>{"use strict";var rMr=ri(),eMr=er(),tMr=qM(),iMr=rMr();function nMr(r){return typeof r=="object"?r instanceof RegExp?!0:iMr?tMr(r):eMr(r)==="[object RegExp]":!1}yM.exports=nMr});var EM=s((fge,wM)=>{"use strict";var aMr=bM();wM.exports=aMr});var OM=s((cge,NM)=>{"use strict";function sMr(r,e,t){return r.replace(e,t)}NM.exports=sMr});var nt=s((lge,AM)=>{"use strict";var uMr=OM();AM.exports=uMr});var TM=s((pge,SM)=>{"use strict";var oMr=gM(),vMr=_(),Z1=K().isPrimitive,fMr=EM(),$1=y(),cMr=nt();function lMr(r,e,t){if(!Z1(r))throw new TypeError($1("invalid argument. First argument must be a string. Value: `%s`.",r));if(Z1(e))e=new RegExp(oMr(e),"g");else if(!fMr(e))throw new TypeError($1("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!Z1(t)&&!vMr(t))throw new TypeError($1("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return cMr(r,e,t)}SM.exports=lMr});var IM=s((gge,_M)=>{"use strict";var pMr=TM();_M.exports=pMr});var RM=s((mge,LM)=>{"use strict";var gMr=IM(),Q1=Qr(),K1=Kr(),mMr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};function dMr(){var r,e,t,i,n,a,u;if(e=this._shape.length,n=this._dtype,i="ndarray( '"+n+"', ",r="",this._length<=100)if(n==="complex64"||n==="complex128")for(u=0;u<this._length;u++)a=this.iget(u),r+=Q1(a)+", "+K1(a),u<this._length-1&&(r+=", ");else for(u=0;u<this._length;u++)r+=this.iget(u),u<this._length-1&&(r+=", ");else{if(n==="complex64"||n==="complex128")for(u=0;u<3;u++)a=this.iget(u),r+=Q1(a)+", "+K1(a),u<2&&(r+=", ");else for(u=0;u<3;u++)r+=this.iget(u),u<2&&(r+=", ");if(r+=", ..., ",n==="complex64"||n==="complex128")for(u=2;u>=0;u--)a=this.iget(this._length-1-u),r+=Q1(a)+", "+K1(a),u>0&&(r+=", ");else for(u=2;u>=0;u--)r+=this.iget(this._length-1-u),u>0&&(r+=", ")}if(t=mMr[this.dtype],i+=gMr(t,"{{data}}",r),i+=", ",e===0?i+="[]":i+="[ "+this._shape.join(", ")+" ]",i+=", ",i+="[ ",e===0)i+="0";else for(u=0;u<e;u++)this._strides[u]<0?i+=-this._strides[u]:i+=this._strides[u],u<e-1&&(i+=", ");return i+=" ]",i+=", ",i+="0",i+=", ",i+="'"+this._order+"'",i+=" )",i}LM.exports=dMr});var FM=s((dge,PM)=>{"use strict";var hMr=typeof ArrayBuffer=="function"?ArrayBuffer:null;PM.exports=hMr});var BM=s((hge,MM)=>{"use strict";var qMr=ma(),yMr=cr(),E0=FM();function bMr(){var r,e,t;if(typeof E0!="function")return!1;try{t=new E0(16),r=qMr(t)&&typeof E0.isView=="function",r&&(e=new yMr(t),e[0]=-3.14,e[1]=NaN,r=r&&E0.isView(e)&&t.byteLength===16&&e[0]===-3.14&&e[1]!==e[1])}catch{r=!1}return r}MM.exports=bMr});var jM=s((qge,kM)=>{"use strict";var wMr=BM();kM.exports=wMr});var VM=s((yge,CM)=>{"use strict";var EMr=typeof ArrayBuffer=="function"?ArrayBuffer:void 0;CM.exports=EMr});var GM=s((bge,UM)=>{"use strict";function NMr(){throw new Error("not implemented")}UM.exports=NMr});var N0=s((wge,HM)=>{"use strict";var OMr=jM(),AMr=VM(),SMr=GM(),r3;OMr()?r3=AMr:r3=SMr;HM.exports=r3});var xM=s((Ege,WM)=>{"use strict";var TMr=er(),_Mr=typeof DataView=="function";function IMr(r){return _Mr&&r instanceof DataView||TMr(r)==="[object DataView]"}WM.exports=IMr});var zM=s((Nge,DM)=>{"use strict";var LMr=xM();DM.exports=LMr});var JM=s((Oge,XM)=>{"use strict";var RMr=typeof DataView=="function"?DataView:null;XM.exports=RMr});var $M=s((Age,ZM)=>{"use strict";var PMr=zM(),FMr=N0(),YM=JM();function MMr(){var r,e,t;if(typeof YM!="function")return!1;try{t=new FMr(24),e=new YM(t,8),r=PMr(e)&&typeof e.getFloat64=="function"&&typeof e.setFloat64=="function",r&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),r=r&&e.buffer===t&&e.byteLength===16&&e.byteOffset===8&&e.getFloat64(0)===-3.14&&e.getFloat64(8)!==e.getFloat64(8))}catch{r=!1}return r}ZM.exports=MMr});var KM=s((Sge,QM)=>{"use strict";var BMr=$M();QM.exports=BMr});var eB=s((Tge,rB)=>{"use strict";var kMr=typeof DataView=="function"?DataView:void 0;rB.exports=kMr});var iB=s((_ge,tB)=>{"use strict";function jMr(){throw new Error("not implemented")}tB.exports=jMr});var Vn=s((Ige,nB)=>{"use strict";var CMr=KM(),VMr=eB(),UMr=iB(),e3;CMr()?e3=VMr:e3=UMr;nB.exports=e3});var sB=s((Lge,aB)=>{"use strict";var GMr=typeof BigInt=="function"?BigInt:void 0;aB.exports=GMr});var oB=s((Rge,uB)=>{"use strict";var HMr=sB();uB.exports=HMr});var vB=s((Pge,WMr)=>{WMr.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var lB=s((Fge,cB)=>{"use strict";var fB=vB();function xMr(){var r;return arguments.length===0?fB.all.slice():(r=fB[arguments[0]],r?r.slice():[])}cB.exports=xMr});var gB=s((Mge,pB)=>{"use strict";function DMr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}pB.exports=DMr});var dB=s((Bge,mB)=>{"use strict";var zMr=rr(),XMr=Ei();function JMr(r,e){var t,i,n;for(t=XMr(e),n=0;n<t.length;n++)i=t[n],zMr(r,i,e[i]);return r}mB.exports=JMr});var i3=s((kge,qB)=>{"use strict";var YMr=b(),t3=lB(),hB=gB(),ZMr=dB();YMr(t3,"enum",hB);ZMr(t3,hB());qB.exports=t3});var yB=s((jge,$Mr)=>{$Mr.exports=["row-major","column-major"]});var wB=s((Cge,bB)=>{"use strict";var QMr=yB();function KMr(){return QMr.slice()}bB.exports=KMr});var NB=s((Vge,EB)=>{"use strict";function rBr(){return{"row-major":1,"column-major":2}}EB.exports=rBr});var n3=s((Uge,AB)=>{"use strict";var eBr=b(),OB=wB(),tBr=NB();eBr(OB,"enum",tBr);AB.exports=OB});var SB=s((Gge,iBr)=>{iBr.exports=["throw","clamp","wrap"]});var _B=s((Hge,TB)=>{"use strict";var nBr=SB();function aBr(){return nBr.slice()}TB.exports=aBr});var LB=s((Wge,IB)=>{"use strict";function sBr(){return{throw:1,clamp:2,wrap:3}}IB.exports=sBr});var a3=s((xge,PB)=>{"use strict";var uBr=b(),RB=_B(),oBr=LB();uBr(RB,"enum",oBr);PB.exports=RB});var BB=s((Dge,MB)=>{"use strict";var at=Dr(),vBr=N0(),fBr=Vn(),Un=oB(),cBr=i3().enum,lBr=n3().enum,pBr=a3().enum,gBr=cBr(),mBr=lBr(),FB=pBr();function dBr(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g;if(f=this._mode||"throw",u=this._submode||[f],l=this._ndims,p=u.length,t=33+l*16+p,o=this.__meta_dataview__,o&&o.byteLength===t)return o;for(o=new fBr(new vBr(t)),n=this._shape,a=this._strides,i=this._dtype,r=this._bytesPerElement,v=0,o.setInt8(v,at?1:0),v+=1,o.setInt16(v,gBr[i],at),v+=2,o.setBigInt64(v,Un(l),at),c=l*8,v+=8,g=0;g<l;g++)o.setBigInt64(v,Un(n[g]),at),o.setBigInt64(v+c,Un(a[g]*r),at),v+=8;for(v+=c,o.setBigInt64(v,Un(this._offset*r),at),v+=8,o.setInt8(v,mBr[this._order]),v+=1,o.setInt8(v,FB[f]),v+=1,o.setBigInt64(v,Un(p),at),v+=8,g=0;g<p;g++)o.setInt8(v,FB[u[g]]),v+=1;return e=0,e|=this._flags.READONLY?4:0,o.setInt32(v,e,at),this.__meta_dataview__=o,o}MB.exports=dBr});var jB=s((zge,kB)=>{"use strict";var Gn=Dr(),hBr=$r(),qBr=Vn(),yBr=J(),bBr=4294967295>>>0,wBr=4294967296;function EBr(r){var e,t,i,n;return e=new hBr(8),r===0||(n=(r&bBr)>>>0,i=yBr(r/wBr),t=new qBr(e.buffer),Gn?(t.setUint32(0,n,Gn),t.setUint32(4,i,Gn)):(t.setUint32(0,i,Gn),t.setUint32(4,n,Gn))),e}kB.exports=EBr});var VB=s((Xge,CB)=>{"use strict";var Hn=Dr(),NBr=$r(),OBr=Vn(),ABr=J(),SBr=4294967295>>>0,TBr=4294967296,A0=new NBr(8),O0=new OBr(A0.buffer);function _Br(r,e,t,i){var n,a,u;if(r===0){for(u=0;u<A0.length;u++)e[i]=0,i+=t;return e}for(a=(r&SBr)>>>0,n=ABr(r/TBr),Hn?(O0.setUint32(0,a,Hn),O0.setUint32(4,n,Hn)):(O0.setUint32(0,n,Hn),O0.setUint32(4,a,Hn)),u=0;u<A0.length;u++)e[i]=A0[u],i+=t;return e}CB.exports=_Br});var HB=s((Jge,GB)=>{"use strict";var IBr=b(),UB=jB(),LBr=VB();IBr(UB,"assign",LBr);GB.exports=UB});var DB=s((Yge,xB)=>{"use strict";var s3=Dr(),RBr=N0(),PBr=Vn(),FBr=$r(),MBr=i3().enum,BBr=n3().enum,kBr=a3().enum,Wn=HB().assign,jBr=MBr(),CBr=BBr(),WB=kBr();function VBr(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g,h;if(v=this._mode||"throw",o=this._submode||[v],p=this._ndims,g=o.length,i=33+p*16+g,f=this.__meta_dataview__,f&&f.byteLength===i)return f;for(f=new PBr(new RBr(i)),e=new FBr(f.buffer),a=this._shape,u=this._strides,n=this._dtype,r=this._bytesPerElement,c=0,f.setInt8(c,s3?1:0),c+=1,f.setInt16(c,jBr[n],s3),c+=2,Wn(p,e,1,c),l=p*8,c+=8,h=0;h<p;h++)Wn(a[h],e,1,c),Wn(u[h]*r,e,1,c+l),c+=8;for(c+=l,Wn(this._offset*r,e,1,c),c+=8,f.setInt8(c,CBr[this._order]),c+=1,f.setInt8(c,WB[v]),c+=1,Wn(g,e,1,c),c+=8,h=0;h<g;h++)f.setInt8(c,WB[o[h]]),c+=1;return t=0,t|=this._flags.READONLY?4:0,f.setInt32(c,t,s3),this.__meta_dataview__=f,f}xB.exports=VBr});var XB=s((Zge,zB)=>{"use strict";var UBr=RF(),st=b(),zr=R(),GBr=kF(),HBr=UF(),WBr=DF(),xBr=eo(),DBr=XF(),zBr=YF(),XBr=$F(),JBr=KF(),YBr=eM(),ZBr=iM(),$Br=aM(),QBr=uM(),KBr=vM(),rkr=RM(),ekr=BB(),tkr=DB();function nr(r,e,t,i,n,a){var u,o,f,v,c;if(!(this instanceof nr))return new nr(r,e,t,i,n,a);for(v=1,c=0;c<t.length;c++)v*=t[c];return e.BYTES_PER_ELEMENT?o=e.BYTES_PER_ELEMENT*v:o=null,this._byteLength=o,this._bytesPerElement=GBr(r),this._buffer=e,this._dtype=r,this._length=v,this._ndims=t.length,this._offset=n,this._order=a,this._shape=t,this._strides=i,this._accessors=xBr(e.get&&e.set),this._iterationOrder=HBr(i),u=XBr(v,t,i,n,this._iterationOrder),f=WBr(i),this._flags={ROW_MAJOR_CONTIGUOUS:zBr(f,u),COLUMN_MAJOR_CONTIGUOUS:DBr(f,u),READONLY:!1},this.__meta_dataview__=null,this}st(nr,"name","ndarray");zr(nr.prototype,"byteLength",function(){return this._byteLength});zr(nr.prototype,"BYTES_PER_ELEMENT",function(){return this._bytesPerElement});zr(nr.prototype,"data",function(){return this._buffer});zr(nr.prototype,"dtype",function(){return this._dtype});zr(nr.prototype,"flags",function(){return JBr(this._flags)});zr(nr.prototype,"length",function(){return this._length});zr(nr.prototype,"ndims",function(){return this._ndims});zr(nr.prototype,"offset",function(){return this._offset});zr(nr.prototype,"order",function(){return this._order});zr(nr.prototype,"shape",function(){return this._shape.slice()});zr(nr.prototype,"strides",function(){return this._strides.slice()});st(nr.prototype,"get",QBr);st(nr.prototype,"iget",YBr);st(nr.prototype,"set",$Br);st(nr.prototype,"iset",ZBr);st(nr.prototype,"toString",rkr);st(nr.prototype,"toJSON",KBr);st(nr.prototype,"__array_meta_dataview__",UBr()?ekr:tkr);zB.exports=nr});var YB=s(($ge,JB)=>{"use strict";var ikr=XB();JB.exports=ikr});var $B=s((Qge,ZB)=>{"use strict";var nkr=X1(),akr=J1(),skr=SF(),ukr=y(),okr=YB(),vkr=z1();function fkr(r,e,t){var i,n,a,u;if(i=e.length,i>0?(a=vkr(e),u=nkr(e,t)):(a=1,u=[0]),n=skr(r,a),n===null)throw new TypeError(ukr("invalid argument. First argument must be a recognized data type. Value: `%s`.",r));return new okr(r,n,e,u,akr(e,u),t)}ZB.exports=fkr});var KB=s((Kge,QB)=>{"use strict";var ckr=$B();QB.exports=ckr});var ek=s((rme,rk)=>{"use strict";var xn=rr(),lkr=z1(),pkr=X1(),gkr=J1(),mkr=sF(),dkr=KB();function hkr(r){return xn(r,"numel",lkr),xn(r,"shape2strides",pkr),xn(r,"strides2offset",gkr),xn(r,"toArray",mkr),xn(r,"zeros",dkr),r}rk.exports=hkr});var ik=s((eme,tk)=>{"use strict";var qkr=De();function ykr(r,e,t,i){qkr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}tk.exports=ykr});var M=s((tme,nk)=>{"use strict";var bkr=ik();nk.exports=bkr});var sk=s((ime,ak)=>{"use strict";function wkr(r){return e;function e(){return r}}ak.exports=wkr});var T=s((nme,uk)=>{"use strict";var Ekr=sk();uk.exports=Ekr});var vk=s((ame,ok)=>{"use strict";var Nkr=I();function Okr(r){return r===0&&1/r===Nkr}ok.exports=Okr});var ut=s((sme,fk)=>{"use strict";var Akr=vk();fk.exports=Akr});var pk=s((ume,lk)=>{"use strict";var Skr=ut(),ck=E(),u3=I();function Tkr(r,e){return ck(r)||ck(e)?NaN:r===u3||e===u3?u3:r===e&&r===0?Skr(r)?r:e:r>e?r:e}lk.exports=Tkr});var o3=s((ome,gk)=>{"use strict";var _kr=pk();gk.exports=_kr});var hk=s((vme,dk)=>{"use strict";var mk=65535;function Ikr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&mk)>>>0,o=(e&mk)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}dk.exports=Ikr});var yk=s((fme,qk)=>{"use strict";var Lkr=hk();qk.exports=Lkr});var v3=s((cme,bk)=>{"use strict";function Rkr(r,e,t,i,n,a,u){var o,f,v,c,l,p,g;for(o=e.data,f=n.data,c=e.accessors[0],v=n.accessors[1],l=i,p=u,g=0;g<r;g++)v(f,p,c(o,l)),l+=t,p+=a;return e}bk.exports=Rkr});var Nk=s((lme,Ek)=>{"use strict";var wk=fn(),Pkr=v3(),f3=8;function Fkr(r,e,t,i,n){var a,u,o,f,v,c;if(r<=0)return i;if(o=wk(e),f=wk(i),o.accessorProtocol||f.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,Pkr(r,o,t,a,f,n,u),f.data;if(t===1&&n===1){if(v=r%f3,v>0)for(c=0;c<v;c++)i[c]=e[c];if(r<f3)return i;for(c=v;c<r;c+=f3)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}Ek.exports=Fkr});var Sk=s((pme,Ak)=>{"use strict";var Ok=fn(),Mkr=v3(),Dn=8;function Bkr(r,e,t,i,n,a,u){var o,f,v,c,l,p;if(r<=0)return n;if(v=Ok(e),c=Ok(n),v.accessorProtocol||c.accessorProtocol)return Mkr(r,v,t,i,c,a,u),c.data;if(o=i,f=u,t===1&&a===1){if(l=r%Dn,l>0)for(p=0;p<l;p++)n[f]=e[o],o+=t,f+=a;if(r<Dn)return n;for(p=l;p<r;p+=Dn)n[f]=e[o],n[f+1]=e[o+1],n[f+2]=e[o+2],n[f+3]=e[o+3],n[f+4]=e[o+4],n[f+5]=e[o+5],n[f+6]=e[o+6],n[f+7]=e[o+7],o+=Dn,f+=Dn;return n}for(p=0;p<r;p++)n[f]=e[o],o+=t,f+=a;return n}Ak.exports=Bkr});var ot=s((gme,_k)=>{"use strict";var kkr=b(),Tk=Nk(),jkr=Sk();kkr(Tk,"ndarray",jkr);_k.exports=Tk});var Lk=s((mme,Ik)=>{"use strict";function Ckr(){}Ik.exports=Ckr});var Pk=s((dme,Rk)=>{"use strict";var Vkr=Lk();function Ukr(){return Vkr.name==="foo"}Rk.exports=Ukr});var Mk=s((hme,Fk)=>{"use strict";var Gkr=Pk();Fk.exports=Gkr});var kk=s((qme,Bk)=>{"use strict";var Hkr=_(),Wkr=Mk(),xkr=y(),Dkr=so().REGEXP,zkr=Wkr();function Xkr(r){if(Hkr(r)===!1)throw new TypeError(xkr("invalid argument. Must provide a function. Value: `%s`.",r));return zkr?r.name:Dkr.exec(r.toString())[1]}Bk.exports=Xkr});var Ck=s((yme,jk)=>{"use strict";var Jkr=kk();jk.exports=Jkr});var Uk=s((bme,Vk)=>{"use strict";var Ykr=ai(),Zkr=$r(),$kr=ni(),Qkr=ii(),Kkr=Mt(),rjr=Xe(),ejr=lr(),tjr=Zr(),ijr=cr(),njr=[ijr,tjr,rjr,ejr,Qkr,Kkr,Ykr,Zkr,$kr];Vk.exports=njr});var Gk=s((wme,ajr)=>{ajr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var Xk=s((Eme,zk)=>{"use strict";var sjr=ze(),ujr=Ck(),xk=Ut(),ojr=po(),vjr=cr(),Hk=Uk(),Wk=Gk(),S0=ojr()?xk(vjr):Dk;S0=ujr(S0)==="TypedArray"?S0:Dk;function Dk(){}function fjr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof S0)return!0;for(t=0;t<Hk.length;t++)if(r instanceof Hk[t])return!0;for(;r;){for(e=sjr(r),t=0;t<Wk.length;t++)if(Wk[t]===e)return!0;r=xk(r)}return!1}zk.exports=fjr});var Yk=s((Nme,Jk)=>{"use strict";var cjr=Xk();Jk.exports=cjr});var $k=s((Ome,Zk)=>{"use strict";var ljr=pi(),pjr=hi(),gjr=[pjr,ljr];Zk.exports=gjr});var Qk=s((Ame,mjr)=>{mjr.exports=["Complex64Array","Complex128Array"]});var tj=s((Sme,ej)=>{"use strict";var djr=ze(),hjr=Ut(),Kk=$k(),rj=Qk();function qjr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<Kk.length;t++)if(r instanceof Kk[t])return!0;for(;r;){for(e=djr(r),t=0;t<rj.length;t++)if(rj[t]===e)return!0;r=hjr(r)}return!1}ej.exports=qjr});var nj=s((Tme,ij)=>{"use strict";var yjr=tj();ij.exports=yjr});var sj=s((_me,aj)=>{"use strict";var bjr=y();function wjr(r,e){if(typeof e!="function")throw new TypeError(bjr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}aj.exports=wjr});var oj=s((Ime,uj)=>{"use strict";var Ejr=sj();uj.exports=Ejr});var fj=s((Lme,vj)=>{"use strict";var Njr=ai(),Ojr=$r(),Ajr=ni(),Sjr=ii(),Tjr=Mt(),_jr=Xe(),Ijr=lr(),Ljr=Zr(),Rjr=cr(),Pjr=pi(),Fjr=hi(),Mjr=[[Rjr,"Float64Array"],[Ljr,"Float32Array"],[_jr,"Int32Array"],[Ijr,"Uint32Array"],[Sjr,"Int16Array"],[Tjr,"Uint16Array"],[Njr,"Int8Array"],[Ojr,"Uint8Array"],[Ajr,"Uint8ClampedArray"],[Pjr,"Complex64Array"],[Fjr,"Complex128Array"]];vj.exports=Mjr});var lj=s((Rme,cj)=>{"use strict";var Bjr=oj(),kjr=ze(),jjr=Ut(),Pi=fj();function Cjr(r){var e,t;for(t=0;t<Pi.length;t++)if(Bjr(r,Pi[t][0]))return Pi[t][1];for(;r;){for(e=kjr(r),t=0;t<Pi.length;t++)if(e===Pi[t][1])return Pi[t][1];r=jjr(r)}}cj.exports=Cjr});var gj=s((Pme,pj)=>{"use strict";var Vjr=Yk(),Ujr=nj(),Gjr=oi(),Hjr=vi(),Wjr=y(),xjr=lj();function Djr(r){var e,t,i;if(Vjr(r))e=r;else if(Ujr(r))r.BYTES_PER_ELEMENT===8?e=Gjr(r,0):e=Hjr(r,0);else throw new TypeError(Wjr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:xjr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}pj.exports=Djr});var B=s((Fme,mj)=>{"use strict";var zjr=gj();mj.exports=zjr});var c3=s((Mme,dj)=>{"use strict";var Xjr=ei(),Jjr=J(),Yjr=Xjr-1;function Zjr(){var r=Jjr(1+Yjr*Math.random());return r>>>0}dj.exports=Zjr});var y3=s((Bme,Tj)=>{"use strict";var de=b(),vt=R(),hj=M(),l3=A(),$jr=L(),Qjr=Wr(),qj=ve(),Kjr=gr().isPrimitive,yj=re().isPrimitive,Oj=Ii(),Aj=ei(),yr=lr(),rCr=o3(),q3=yk(),Fi=ot(),eCr=B(),wr=y(),bj=c3(),ur=624,p3=397,wj=Aj>>>0,tCr=19650218>>>0,g3=2147483648>>>0,m3=2147483647>>>0,iCr=1812433253>>>0,nCr=1664525>>>0,aCr=1566083941>>>0,sCr=2636928640>>>0,uCr=4022730752>>>0,oCr=2567483615>>>0,d3=[0>>>0,oCr>>>0],Sj=1/(Oj+1),vCr=67108864>>>0,fCr=2147483648>>>0,h3=1>>>0,cCr=Oj*Sj,T0=1,_0=3,ft=2,ct=ur+3,br=ur+5,zn=ur+6;function Ej(r,e){var t;return e?t="option":t="argument",r.length<zn+1?new RangeError(wr("invalid %s. `state` array has insufficient length.",t)):r[0]!==T0?new RangeError(wr("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,T0,r[0])):r[1]!==_0?new RangeError(wr("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,_0,r[1])):r[ft]!==ur?new RangeError(wr("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ur,r[ft])):r[ct]!==1?new RangeError(wr("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[ct])):r[br]!==r.length-zn?new RangeError(wr("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-zn,r[br])):null}function Nj(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=q3(t,iCr)+i>>>0;return r}function lCr(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=rCr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=q3(n,nCr)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=q3(n,aCr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=fCr,r}function pCr(r){var e,t,i,n;for(n=ur-p3,t=0;t<n;t++)e=r[t]&g3|r[t+1]&m3,r[t]=r[t+p3]^e>>>1^d3[e&h3];for(i=ur-1;t<i;t++)e=r[t]&g3|r[t+1]&m3,r[t]=r[t-n]^e>>>1^d3[e&h3];return e=r[i]&g3|r[0]&m3,r[i]=r[p3-1]^e>>>1^d3[e&h3],r}function gCr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!$jr(r))throw new TypeError(wr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(l3(r,"copy")&&(i.copy=r.copy,!Kjr(r.copy)))throw new TypeError(wr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(l3(r,"state")){if(t=r.state,i.state=!0,!qj(t))throw new TypeError(wr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=Ej(t,!0),u)throw u;i.copy===!1?e=t:(e=new yr(t.length),Fi(t.length,t,1,e,1)),t=new yr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,ur),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,t[br])}if(n===void 0)if(l3(r,"seed"))if(n=r.seed,i.seed=!0,yj(n)){if(n>wj)throw new RangeError(wr("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(Qjr(n)===!1||n.length<1)throw new TypeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!yj(n))throw new TypeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>wj)throw new RangeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new yr(zn+a),e[0]=T0,e[1]=_0,e[ft]=ur,e[ct]=1,e[ct+1]=ur,e[br]=a,Fi.ndarray(a,n,1,0,e,1,br+1),t=new yr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,ur),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,a),t=Nj(t,ur,tCr),t=lCr(t,ur,n,a)}else n=bj()>>>0}else n=bj()>>>0;return t===void 0&&(e=new yr(zn+1),e[0]=T0,e[1]=_0,e[ft]=ur,e[ct]=1,e[ct+1]=ur,e[br]=1,e[br+1]=n,t=new yr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,ur),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,1),t=Nj(t,ur,n)),de(h,"NAME","mt19937"),vt(h,"seed",o),vt(h,"seedLength",f),hj(h,"state",l,p),vt(h,"stateLength",v),vt(h,"byteLength",c),de(h,"toJSON",g),de(h,"MIN",0),de(h,"MAX",Aj),de(h,"normalized",d),de(d,"NAME",h.NAME),vt(d,"seed",o),vt(d,"seedLength",f),hj(d,"state",l,p),vt(d,"stateLength",v),vt(d,"byteLength",c),de(d,"toJSON",g),de(d,"MIN",0),de(d,"MAX",cCr),h;function o(){var m=e[br];return Fi(m,n,1,new yr(m),1)}function f(){return e[br]}function v(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return Fi(m,e,1,new yr(m),1)}function p(m){var q;if(!qj(m))throw new TypeError(wr("invalid argument. Must provide a Uint32Array. Value: `%s`.",m));if(q=Ej(m,!1),q)throw q;i.copy===!1?i.state&&m.length===e.length?Fi(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new yr(m.length)),Fi(m.length,m,1,e,1)),t=new yr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,ur),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,e[br])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=eCr(e),m.params=[],m}function h(){var m,q;return q=e[ct+1],q>=ur&&(t=pCr(t),q=0),m=t[q],e[ct+1]=q+1,m^=m>>>11,m^=m<<7&sCr,m^=m<<15&uCr,m^=m>>>18,m>>>0}function d(){var m=h()>>>5,q=h()>>>6;return(m*vCr+q)*Sj}}Tj.exports=gCr});var Ij=s((kme,_j)=>{"use strict";var mCr=y3(),dCr=c3(),hCr=mCr({seed:dCr()});_j.exports=hCr});var X=s((jme,Rj)=>{"use strict";var qCr=b(),Lj=Ij(),yCr=y3();qCr(Lj,"factory",yCr);Rj.exports=Lj});var Bj=s((Cme,Mj)=>{"use strict";var Pj=j().isPrimitive,b3=y(),Fj=vr();function bCr(r,e){return!Pj(r)||Fj(r)?new TypeError(b3("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Pj(e)||Fj(e)?new TypeError(b3("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(b3("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}Mj.exports=bCr});var jj=s((Vme,kj)=>{"use strict";var wCr=W(),ECr=Xt(),NCr=o0();function OCr(r,e,t){return e+wCr(ECr(NCr*r()),2)*(t-e)}kj.exports=OCr});var w3=s((Ume,Dj)=>{"use strict";var he=b(),I0=R(),Cj=M(),Vj=L(),Uj=_(),Gj=A(),Hj=T(),ACr=C(),L0=X().factory,Wj=E(),SCr=B(),R0=y(),TCr=Bj(),xj=jj();function _Cr(){var r,e,t,i,n,a;if(arguments.length===0)e=L0();else if(arguments.length===1){if(r=arguments[0],!Vj(r))throw new TypeError(R0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Gj(r,"prng")){if(!Uj(r.prng))throw new TypeError(R0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=L0(r)}else{if(n=arguments[0],a=arguments[1],i=TCr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Vj(r))throw new TypeError(R0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Gj(r,"prng")){if(!Uj(r.prng))throw new TypeError(R0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=L0(r)}else e=L0()}return n===void 0?t=h:t=g,he(t,"NAME","arcsine"),r&&r.prng?(he(t,"seed",null),he(t,"seedLength",null),Cj(t,"state",Hj(null),ACr),he(t,"stateLength",null),he(t,"byteLength",null),he(t,"toJSON",Hj(null)),he(t,"PRNG",e)):(I0(t,"seed",u),I0(t,"seedLength",o),Cj(t,"state",c,l),I0(t,"stateLength",f),I0(t,"byteLength",v),he(t,"toJSON",p),he(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=SCr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return xj(e,n,a)}function h(d,m){return Wj(d)||Wj(m)||d>=m?NaN:xj(e,d,m)}}Dj.exports=_Cr});var Xj=s((Gme,zj)=>{"use strict";var ICr=w3(),LCr=ICr();zj.exports=LCr});var Zj=s((Hme,Yj)=>{"use strict";var RCr=b(),Jj=Xj(),PCr=w3();RCr(Jj,"factory",PCr);Yj.exports=Jj});var E3=s((Wme,tC)=>{"use strict";var qe=b(),P0=R(),$j=M(),Qj=L(),FCr=ln().isPrimitive,Kj=_(),rC=A(),eC=T(),MCr=C(),F0=X().factory,BCr=E(),kCr=B(),M0=y();function jCr(){var r,e,t,i;if(arguments.length===0)e=F0();else if(arguments.length===1&&Qj(arguments[0]))if(r=arguments[0],rC(r,"prng")){if(!Kj(r.prng))throw new TypeError(M0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=F0(r);else{if(i=arguments[0],!FCr(i))throw new TypeError(M0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!Qj(r))throw new TypeError(M0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(rC(r,"prng")){if(!Kj(r.prng))throw new TypeError(M0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=F0(r)}else e=F0()}return i===void 0?t=p:t=l,qe(t,"NAME","bernoulli"),r&&r.prng?(qe(t,"seed",null),qe(t,"seedLength",null),$j(t,"state",eC(null),MCr),qe(t,"stateLength",null),qe(t,"byteLength",null),qe(t,"toJSON",eC(null)),qe(t,"PRNG",e)):(P0(t,"seed",n),P0(t,"seedLength",a),$j(t,"state",f,v),P0(t,"stateLength",u),P0(t,"byteLength",o),qe(t,"toJSON",c),qe(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=kCr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return e()<=i?1:0}function p(g){return BCr(g)||g<0||g>1?NaN:e()<=g?1:0}}tC.exports=jCr});var nC=s((xme,iC)=>{"use strict";var CCr=E3(),VCr=CCr();iC.exports=VCr});var uC=s((Dme,sC)=>{"use strict";var UCr=b(),aC=nC(),GCr=E3();UCr(aC,"factory",GCr);sC.exports=aC});var cC=s((zme,fC)=>{"use strict";var HCr=U(),oC=sr(),WCr=P(),vC=.00991256303526217;function xCr(r,e){var t,i,n;for(i=oC(-.5*e*e),t=[],t.push(vC/i),t.push(e),n=2;n<r;n++)t[n]=HCr(-2*WCr(vC/t[n-1]+i)),i=oC(-.5*t[n]*t[n]);return t.push(0),t}fC.exports=xCr});var pC=s((Xme,lC)=>{"use strict";function DCr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}lC.exports=DCr});var dC=s((Jme,mC)=>{"use strict";var gC=P();function zCr(r,e,t){var i,n;do i=gC(r())/e,n=gC(r());while(-2*n<i*i);return t?i-e:e-i}mC.exports=zCr});var bC=s((Yme,yC)=>{"use strict";var XCr=Y(),hC=sr(),JCr=cC(),YCr=pC(),ZCr=dC(),$Cr=128,qC=3.442619855899,Yt=JCr($Cr,qC),QCr=YCr(Yt),KCr=127;function rVr(r,e){return t;function t(){for(var i,n,a,u,o,f,v;;){if(o=2*r()-1,f=e()&KCr,XCr(o)<QCr[f])return o*Yt[f];if(f===0)return ZCr(r,qC,o<0);if(u=o*Yt[f],a=u*u,v=f+1,i=hC(-.5*(Yt[f]*Yt[f]-a)),n=hC(-.5*(Yt[v]*Yt[v]-a)),n+r()*(i-n)<1)return u}}}yC.exports=rVr});var O3=s((Zme,NC)=>{"use strict";var lt=b(),B0=R(),wC=M(),eVr=_(),tVr=L(),iVr=gr().isPrimitive,k0=A(),nVr=ve(),N3=X().factory,EC=T(),aVr=C(),sVr=J(),uVr=ei(),oVr=B(),Xn=y(),vVr=bC();function fVr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!tVr(r))throw new TypeError(Xn("invalid argument. Must provide an object. Value: `%s`.",r));if(k0(r,"copy")&&(n.copy=r.copy,!iVr(r.copy)))throw new TypeError(Xn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(k0(r,"prng")){if(!eVr(r.prng))throw new TypeError(Xn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(k0(r,"state")){if(n.state=r.state,!nVr(r.state))throw new TypeError(Xn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(k0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Xn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=N3(n),e=t.normalized):(t=N3({seed:sVr(1+uVr*e()),copy:n.copy}),n.seed=null):(t=N3(n),e=t.normalized),i=vVr(e,t),lt(i,"NAME","improved-ziggurat"),n.seed===null?(lt(i,"seed",null),lt(i,"seedLength",null)):(B0(i,"seed",a),B0(i,"seedLength",u)),r&&r.prng?(wC(i,"state",EC(null),aVr),lt(i,"stateLength",null),lt(i,"byteLength",null),lt(i,"toJSON",EC(null))):(wC(i,"state",v,c),B0(i,"stateLength",o),B0(i,"byteLength",f),lt(i,"toJSON",l)),lt(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function f(){return t.byteLength}function v(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=oVr(t.state),p.params=[],p}}NC.exports=fVr});var AC=s(($me,OC)=>{"use strict";var cVr=O3(),lVr=cVr();OC.exports=lVr});var pt=s((Qme,TC)=>{"use strict";var pVr=b(),SC=AC(),gVr=O3();pVr(SC,"factory",gVr);TC.exports=SC});var IC=s((Kme,_C)=>{"use strict";var mVr=_(),dVr=mVr(Object.assign);_C.exports=dVr});var RC=s((rde,LC)=>{"use strict";var hVr=Object.assign;LC.exports=hVr});var FC=s((ede,PC)=>{"use strict";var qVr=typeof Object.getOwnPropertySymbols<"u";PC.exports=qVr});var kC=s((tde,BC)=>{"use strict";var MC=qi(),yVr=MC.getOwnPropertySymbols;function bVr(r){return yVr(MC(r))}BC.exports=bVr});var CC=s((ide,jC)=>{"use strict";function wVr(){return[]}jC.exports=wVr});var UC=s((nde,VC)=>{"use strict";var EVr=FC(),NVr=kC(),OVr=CC(),A3;EVr?A3=NVr:A3=OVr;VC.exports=A3});var HC=s((ade,GC)=>{"use strict";var AVr=Ei(),SVr=UC(),TVr=gn();function _Vr(r){var e,t,i;for(e=AVr(r),t=SVr(r),i=0;i<t.length;i++)TVr(r,t[i])&&e.push(t[i]);return e}GC.exports=_Vr});var xC=s((sde,WC)=>{"use strict";var IVr=HC();WC.exports=IVr});var XC=s((ude,zC)=>{"use strict";var LVr=xC(),DC=qi(),RVr=y();function PVr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(RVr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=DC(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=LVr(DC(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}zC.exports=PVr});var Jn=s((ode,JC)=>{"use strict";var FVr=IC(),MVr=RC(),BVr=XC(),S3;FVr?S3=MVr:S3=BVr;JC.exports=S3});var QC=s((vde,$C)=>{"use strict";var YC=D().isPrimitive,ZC=y();function kVr(r,e){return YC(r)?YC(e)?null:new TypeError(ZC("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(ZC("invalid argument. First argument must be a positive number. Value: `%s`.",r))}$C.exports=kVr});var iV=s((fde,tV)=>{"use strict";var KC=P(),rV=U(),jVr=W(),eV=1/3;function CVr(r,e,t){var i,n,a,u,o,f,v,c,l,p;for(t<1?(f=t+1-eV,o=1/rV(9*f),c=jVr(r(),1/t)):(f=t-eV,o=1/rV(9*f),c=1),i=!0;i;){do v=e(),p=1+o*v;while(p<=0);p*=p*p,n=v*v,a=1-.331*n*n,u=.5*n+f*(1-p+KC(p)),l=r(),(l<a||KC(l)<u)&&(i=!1)}return f*p*c}tV.exports=CVr});var sV=s((cde,aV)=>{"use strict";var T3=W(),nV=P();function VVr(r,e,t){var i,n,a,u,o,f,v,c;for(a=t-1,o=T3(a+a,.5),i=!0;i===!0;)u=e(),v=.5*(1+u/o),v>=0&&v<=1&&(f=r(),n=T3(u,4),c=8*t-12,c=1-n/c,f<=c?i=!1:(c+=.5*T3(n/(8*t-8),2),f<c&&(c=a*nV(4*v*(1-v)),c+=u*u/2,c>=nV(f)&&(i=!1))));return v}aV.exports=VVr});var oV=s((lde,uV)=>{"use strict";var UVr=W(),j0=P();function GVr(r,e,t,i){var n,a,u,o,f,v,c,l,p,g,h;for(o=t-1,f=i-1,v=o+f,c=v*j0(v),u=o/v,n=.5/UVr(v,.5),a=!0;a===!0;)l=e(),g=u+l*n,g>=0&&g<=1&&(p=r(),h=o*j0(g/o),h+=f*j0((1-g)/f),h+=c+.5*l*l,h>=j0(p)&&(a=!1));return g}uV.exports=GVr});var cV=s((pde,fV)=>{"use strict";var _3=sr(),vV=W(),I3=P();function HVr(r,e,t){for(var i,n,a,u,o,f,v;;)if(u=r(),o=r(),f=vV(u,1/e),v=vV(o,1/t),a=f+v,a<=1)return a>0?f/a:(i=I3(u)/e,n=I3(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),_3(i-I3(_3(i)+_3(n))))}fV.exports=HVr});var gV=s((gde,pV)=>{"use strict";var lV=iV(),WVr=sV(),xVr=oV(),DVr=cV();function zVr(r,e,t,i){var n,a;return t===i&&t>1.5?WVr(r,e,t):t>1&&i>1?xVr(r,e,t,i):t<1&&i<1?DVr(r,t,i):(n=lV(r,e,t),a=lV(r,e,i),n/(n+a))}pV.exports=zVr});var F3=s((mde,OV)=>{"use strict";var ye=b(),C0=R(),mV=M(),dV=L(),hV=gr().isPrimitive,qV=_(),Mi=A(),yV=T(),XVr=C(),bV=pt().factory,V0=X().factory,wV=E(),L3=ot(),R3=lr(),P3=ve(),EV=Jn(),JVr=B(),be=y(),YVr=QC(),NV=gV();function ZVr(){var r,e,t,i,n,a,u,o,f;if(o=!0,arguments.length===0)n={copy:!1},a=V0(n);else if(arguments.length===1){if(n=arguments[0],!dV(n))throw new TypeError(be("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Mi(n,"copy")&&!hV(n.copy))throw new TypeError(be("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Mi(n,"prng")){if(!qV(n.prng))throw new TypeError(be("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Mi(n,"state")&&!P3(n.state))throw new TypeError(be("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=EV({},n),n.copy===!1?o=!1:n.state&&(n.state=L3(n.state.length,n.state,1,new R3(n.state.length),1)),n.copy=!1,a=V0(n)}}else{if(t=arguments[0],i=arguments[1],f=YVr(t,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!dV(n))throw new TypeError(be("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Mi(n,"copy")&&!hV(n.copy))throw new TypeError(be("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Mi(n,"prng")){if(!qV(n.prng))throw new TypeError(be("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Mi(n,"state")&&!P3(n.state))throw new TypeError(be("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=EV({},n),n.copy===!1?o=!1:n.state&&(n.state=L3(n.state.length,n.state,1,new R3(n.state.length),1)),n.copy=!1,a=V0(n)}}else n={copy:!1},a=V0(n)}return n&&n.prng?e=bV({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=bV({state:r,copy:!1})),t===void 0?u=q:u=m,ye(u,"NAME","beta"),n&&n.prng?(ye(u,"seed",null),ye(u,"seedLength",null),mV(u,"state",yV(null),XVr),ye(u,"stateLength",null),ye(u,"byteLength",null),ye(u,"toJSON",yV(null)),ye(u,"PRNG",a)):(C0(u,"seed",v),C0(u,"seedLength",c),mV(u,"state",g,h),C0(u,"stateLength",l),C0(u,"byteLength",p),ye(u,"toJSON",d),ye(u,"PRNG",a),a=a.normalized),u;function v(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function g(){return a.state}function h(N){if(!P3(N))throw new TypeError(be("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=L3(N.length,N,1,new R3(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=JVr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function m(){return NV(a,e,t,i)}function q(N,O){return wV(N)||wV(O)||N<=0||O<=0?NaN:NV(a,e,N,O)}}OV.exports=ZVr});var SV=s((dde,AV)=>{"use strict";var $Vr=F3(),QVr=$Vr();AV.exports=QVr});var IV=s((hde,_V)=>{"use strict";var KVr=b(),TV=SV(),rUr=F3();KVr(TV,"factory",rUr);_V.exports=TV});var FV=s((qde,PV)=>{"use strict";var LV=D().isPrimitive,RV=y();function eUr(r,e){return LV(r)?LV(e)?null:new TypeError(RV("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(RV("invalid argument. First argument must be a positive number. Value: `%s`.",r))}PV.exports=eUr});var kV=s((yde,BV)=>{"use strict";var MV=P();function tUr(r,e,t,i,n){var a,u,o,f,v,c,l;for(a=!0;a;){do v=e(),l=1+n*v;while(l<=0);l*=l*l,u=v*v,o=1-.331*u*u,f=.5*u+i*(1-l+MV(l)),c=r(),(c<o||MV(c)<f)&&(a=!1)}return 1/t*i*l}BV.exports=tUr});var C3=s((bde,zV)=>{"use strict";var we=b(),U0=R(),jV=M(),CV=L(),M3=ve(),VV=gr().isPrimitive,UV=_(),Bi=A(),GV=T(),iUr=C(),HV=pt().factory,G0=X().factory,WV=E(),B3=U(),xV=W(),k3=ot(),j3=lr(),nUr=B(),DV=Jn(),Ee=y(),aUr=FV(),H0=kV(),W0=1/3;function sUr(){var r,e,t,i,n,a,u,o,f,v,c;if(o=!0,arguments.length===0)n={copy:!1},a=G0(n);else if(arguments.length===1){if(n=arguments[0],!CV(n))throw new TypeError(Ee("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Bi(n,"copy")&&!VV(n.copy))throw new TypeError(Ee("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Bi(n,"prng")){if(!UV(n.prng))throw new TypeError(Ee("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Bi(n,"state")&&!M3(n.state))throw new TypeError(Ee("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=DV({},n),n.copy===!1?o=!1:n.state&&(n.state=k3(n.state.length,n.state,1,new j3(n.state.length),1)),n.copy=!1,a=G0(n)}}else{if(e=arguments[0],i=arguments[1],f=aUr(e,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!CV(n))throw new TypeError(Ee("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Bi(n,"copy")&&!VV(n.copy))throw new TypeError(Ee("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Bi(n,"prng")){if(!UV(n.prng))throw new TypeError(Ee("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Bi(n,"state")&&!M3(n.state))throw new TypeError(Ee("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=DV({},n),n.copy===!1?o=!1:n.state&&(n.state=k3(n.state.length,n.state,1,new j3(n.state.length),1)),n.copy=!1,a=G0(n)}}else n={copy:!1},a=G0(n)}return n&&n.prng?t=HV({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=HV({state:r,copy:!1})),e===void 0?u=F:(e>=1?(u=N,c=e-W0):(u=O,c=e+1-W0),v=1/B3(9*c)),we(u,"NAME","gamma"),n&&n.prng?(we(u,"seed",null),we(u,"seedLength",null),jV(u,"state",GV(null),iUr),we(u,"stateLength",null),we(u,"byteLength",null),we(u,"toJSON",GV(null)),we(u,"PRNG",a)):(U0(u,"seed",l),U0(u,"seedLength",p),jV(u,"state",d,m),U0(u,"stateLength",g),U0(u,"byteLength",h),we(u,"toJSON",q),we(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function g(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function m(S){if(!M3(S))throw new TypeError(Ee("invalid argument. Must provide a Uint32Array. Value: `%s`.",S));o&&(S=k3(S.length,S,1,new j3(S.length),1)),a.state=S}function q(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=nUr(a.state),e===void 0?S.params=[]:S.params=[e,i],S}function N(){return H0(a,t,i,c,v)}function O(){return H0(a,t,i,c,v)*xV(a(),1/e)}function F(S,x){var Q,G;return WV(S)||WV(x)||S<=0||x<=0?NaN:S<1?(G=S+1-W0,Q=1/B3(9*G),H0(a,t,x,G,Q)*xV(a(),1/S)):(G=S-W0,Q=1/B3(9*G),H0(a,t,x,G,Q))}}zV.exports=sUr});var JV=s((wde,XV)=>{"use strict";var uUr=C3(),oUr=uUr();XV.exports=oUr});var ki=s((Ede,ZV)=>{"use strict";var vUr=b(),YV=JV(),fUr=C3();vUr(YV,"factory",fUr);ZV.exports=YV});var rU=s((Nde,KV)=>{"use strict";var $V=D().isPrimitive,QV=y();function cUr(r,e){return $V(r)?$V(e)?null:new TypeError(QV("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(QV("invalid argument. First argument must be a positive number. Value: `%s`.",r))}KV.exports=cUr});var tU=s((Ode,eU)=>{"use strict";function lUr(r,e,t){return r(e,1)/r(t,1)}eU.exports=lUr});var V3=s((Ade,vU)=>{"use strict";var gt=b(),x0=R(),iU=M(),nU=L(),aU=T(),pUr=C(),D0=ki().factory,sU=E(),gUr=B(),uU=y(),mUr=rU(),oU=tU();function dUr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=D0();else if(arguments.length===1){if(i=arguments[0],!nU(i))throw new TypeError(uU("invalid argument. Options argument must be an object. Value: `%s`.",i));r=D0(i)}else{if(e=arguments[0],t=arguments[1],u=mUr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!nU(i))throw new TypeError(uU("invalid argument. Options argument must be an object. Value: `%s`.",i));r=D0(i)}else r=D0()}return e===void 0?a=d:a=h,n=r.PRNG,gt(a,"NAME","betaprime"),i&&i.prng?(gt(a,"seed",null),gt(a,"seedLength",null),iU(a,"state",aU(null),pUr),gt(a,"stateLength",null),gt(a,"byteLength",null),gt(a,"toJSON",aU(null))):(x0(a,"seed",o),x0(a,"seedLength",f),iU(a,"state",l,p),x0(a,"stateLength",v),x0(a,"byteLength",c),gt(a,"toJSON",g)),gt(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=gUr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return oU(r,e,t)}function d(m,q){return sU(m)||sU(q)||m<=0||q<=0?NaN:oU(r,m,q)}}vU.exports=dUr});var cU=s((Sde,fU)=>{"use strict";var hUr=V3(),qUr=hUr();fU.exports=qUr});var gU=s((Tde,pU)=>{"use strict";var yUr=b(),lU=cU(),bUr=V3();yUr(lU,"factory",bUr);pU.exports=lU});var dU=s((_de,mU)=>{"use strict";var wUr=J();function EUr(r){return wUr(r)===r&&r>0}mU.exports=EUr});var U3=s((Ide,hU)=>{"use strict";var NUr=dU();hU.exports=NUr});var yU=s((Lde,qU)=>{"use strict";function OUr(r){return r>=0&&r<=1}qU.exports=OUr});var wU=s((Rde,bU)=>{"use strict";var AUr=yU();bU.exports=AUr});var OU=s((Pde,NU)=>{"use strict";var SUr=re().isPrimitive,TUr=ln().isPrimitive,EU=y();function _Ur(r,e){return SUr(r)?TUr(e)?null:new TypeError(EU("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(EU("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}NU.exports=_Ur});var SU=s((Fde,AU)=>{"use strict";function IUr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}AU.exports=IUr});var _U=s((Mde,TU)=>{"use strict";var LUr=E();function RUr(r){return r===0||LUr(r)?r:r<0?-1:1}TU.exports=RUr});var z0=s((Bde,IU)=>{"use strict";var PUr=_U();IU.exports=PUr});var RU=s((kde,LU)=>{"use strict";var FUr=W(),MUr=1/12,BUr=1/360,kUr=1/1260;function jUr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=FUr(r,2),(MUr-(BUr-kUr/e)/e)/r}}LU.exports=jUr});var FU=s((jde,PU)=>{"use strict";var G3=J(),CUr=z0(),VUr=U(),H3=Y(),X0=P(),J0=RU(),UUr=1/6;function GUr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,S,x,Q,G,_r,Ir,or,Rt;for(x=G3((e+1)*t),v=e-x+1,Q=1-t,G=t/Q,c=(e+1)*G,u=e*t*Q,a=VUr(u),m=1.15+2.53*a,d=-.0873+.0248*m+.01*t,q=e*t+.5,i=(2.83+5.1/m)*a,h=.92-4.2/m,n=.86*h,O=(x+.5)*X0((x+1)/(G*v)),O+=J0(x)+J0(e-x);;){if(or=r(),or<=n)return Ir=or/h-.43,G=Ir*(2*d/(.5-H3(Ir))+m)+q,G3(G);if(or>=h?Ir=r()-.5:(Ir=or/h-.93,Ir=CUr(Ir)*.5-Ir,or=h*r()),l=.5-H3(Ir),S=G3(Ir*(2*d/l+m)+q),!(S<0||S>e))if(or=or*i/(d/(l*l)+m),p=H3(S-x),p>15){if(or=X0(or),o=p/u,f=(p/3+.625)*p,f+=UUr,f/=u,o*=f+.5,_r=-(p*p)/(2*u),or<_r-o||or<=_r+o&&(g=e-S+1,Rt=O+(e+1)*X0(v/g),Rt+=(S+.5)*X0(g*G/(S+1)),Rt+=-(J0(S)+J0(e-S)),or<=Rt))return S}else{if(N=1,x<S)for(F=x;F<=S;F++)N*=c/F-G;else if(x>S)for(F=S;F<=x;F++)or*=c/F-G;if(or<=N)return S}}}PU.exports=GUr});var kU=s((Cde,BU)=>{"use strict";var HUr=SU(),WUr=FU();function MU(r,e,t){return t>.5?e-MU(r,e,1-t):e*t<10?HUr(r,e,t):WUr(r,e,t)}BU.exports=MU});var W3=s((Vde,xU)=>{"use strict";var Ne=b(),Y0=R(),jU=M(),CU=L(),VU=_(),UU=A(),GU=T(),xUr=C(),HU=E(),DUr=U3(),zUr=wU(),Z0=X().factory,XUr=B(),$0=y(),JUr=OU(),WU=kU();function YUr(){var r,e,t,i,n,a;if(arguments.length===0)e=Z0();else if(arguments.length===1){if(r=arguments[0],!CU(r))throw new TypeError($0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(UU(r,"prng")){if(!VU(r.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Z0(r)}else{if(n=arguments[0],a=arguments[1],i=JUr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!CU(r))throw new TypeError($0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(UU(r,"prng")){if(!VU(r.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Z0(r)}else e=Z0()}return n===void 0?t=h:t=g,Ne(t,"NAME","binomial"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),jU(t,"state",GU(null),xUr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",GU(null)),Ne(t,"PRNG",e)):(Y0(t,"seed",u),Y0(t,"seedLength",o),jU(t,"state",c,l),Y0(t,"stateLength",f),Y0(t,"byteLength",v),Ne(t,"toJSON",p),Ne(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=XUr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return WU(e,n,a)}function h(d,m){return HU(d)||HU(m)||!DUr(d)||!zUr(m)?NaN:WU(e,d,m)}}xU.exports=YUr});var zU=s((Ude,DU)=>{"use strict";var ZUr=W3(),$Ur=ZUr();DU.exports=$Ur});var YU=s((Gde,JU)=>{"use strict";var QUr=b(),XU=zU(),KUr=W3();QUr(XU,"factory",KUr);JU.exports=XU});var $U=s((Hde,ZU)=>{"use strict";var rGr=U(),eGr=P(),tGr=Xt(),iGr=zt(),nGr=it();function aGr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=rGr(-2*eGr(n)),o=nGr*a,t=u*iGr(o),e=!1,u*tGr(o)}return e=!0,t}}ZU.exports=aGr});var KU=s((Wde,QU)=>{"use strict";var sGr=U(),uGr=P(),oGr=zt(),vGr=kr(),fGr=oGr(vGr);function cGr(r){var e=sGr(-2*uGr(r));return e*fGr}QU.exports=cGr});var eG=s((xde,rG)=>{"use strict";var lGr=U(),pGr=P(),gGr=zt(),mGr=it();function dGr(r){var e=lGr(-2*pGr(r)),t=mGr*r;return e*gGr(t)}rG.exports=dGr});var x3=s((Dde,aG)=>{"use strict";var Gr=b(),Q0=R(),tG=M(),hGr=L(),qGr=_(),yGr=gr().isPrimitive,Yn=A(),bGr=ve(),iG=X().factory,nG=T(),wGr=C(),EGr=B(),Zn=y(),NGr=$U(),OGr=KU(),AGr=eG();function SGr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!hGr(r))throw new TypeError(Zn("invalid argument. Must provide an object. Value: `%s`.",r));if(Yn(r,"copy")&&(n.copy=r.copy,!yGr(r.copy)))throw new TypeError(Zn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Yn(r,"prng")){if(!qGr(r.prng))throw new TypeError(Zn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Yn(r,"state")){if(n.state=r.state,!bGr(r.state))throw new TypeError(Zn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Yn(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Zn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=iG(n),e=i.normalized):n.seed=null:(i=iG(n),e=i.normalized),t=NGr(e),Gr(t,"NAME","box-muller"),n.seed===null?(Gr(t,"seed",null),Gr(t,"seedLength",null)):(Q0(t,"seed",a),Q0(t,"seedLength",u)),r&&r.prng?(tG(t,"state",nG(null),wGr),Gr(t,"stateLength",null),Gr(t,"byteLength",null),Gr(t,"toJSON",nG(null))):(tG(t,"state",v,c),Q0(t,"stateLength",o),Q0(t,"byteLength",f),Gr(t,"toJSON",l)),Gr(t,"PRNG",e),Yn(e,"MIN")?(Gr(t,"MIN",OGr(e.MIN)),Gr(t,"MAX",AGr(e.MIN))):(Gr(t,"MIN",null),Gr(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function f(){return i.byteLength}function v(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=EGr(i.state),p.params=[],p}}aG.exports=SGr});var uG=s((zde,sG)=>{"use strict";var TGr=x3(),_Gr=TGr();sG.exports=_Gr});var fG=s((Xde,vG)=>{"use strict";var IGr=b(),oG=uG(),LGr=x3();IGr(oG,"factory",LGr);vG.exports=oG});var pG=s((Jde,lG)=>{"use strict";var RGr=j().isPrimitive,PGr=D().isPrimitive,cG=y(),FGr=vr();function MGr(r,e){return!RGr(r)||FGr(r)?new TypeError(cG("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):PGr(e)?null:new TypeError(cG("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}lG.exports=MGr});var mG=s((Yde,gG)=>{"use strict";function BGr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}gG.exports=BGr});var hG=s((Zde,dG)=>{"use strict";function kGr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}dG.exports=kGr});var bG=s(($de,yG)=>{"use strict";var jGr=ar(),qG=ce(),CGr=mG(),VGr=hG(),UGr=.7853981633974483,GGr=3061616997868383e-32,HGr=.3333333333333341,WGr=2147483647;function xGr(r,e,t){var i,n,a,u,o,f,v,c,l;return i=jGr(r),n=i&WGr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=UGr-r,c=GGr-e,r=l+c,e=0),l=r*r,c=l*l,u=CGr(c),v=l*VGr(c),o=l*r,u=e+l*(o*(u+v)+e),u+=HGr*o,c=r+u,n>=1072010280?(v=t,(1-(i>>30&2))*(v-2*(r-(c*c/(c+v)-u)))):t===1?c:(l=qG(c,0),v=u-(l-r),a=-1/c,f=qG(a,0),o=1+f*l,f+a*(o+f*v))}yG.exports=xGr});var EG=s((Qde,wG)=>{"use strict";var DGr=bG();wG.exports=DGr});var AG=s((Kde,OG)=>{"use strict";var zGr=ar(),NG=EG(),XGr=_n(),D3=[0,0],JGr=2147483647,YGr=1072243195,ZGr=2146435072,$Gr=1044381696;function QGr(r){var e,t;return e=zGr(r),e&=JGr,e<=YGr?e<$Gr?r:NG(r,0,1):e>=ZGr?NaN:(t=XGr(r,D3),NG(D3[0],D3[1],1-((t&1)<<1)))}OG.exports=QGr});var z3=s((rhe,SG)=>{"use strict";var KGr=AG();SG.exports=KGr});var _G=s((ehe,TG)=>{"use strict";var rHr=z3(),eHr=kr();function tHr(r,e,t){return e+t*rHr(eHr*(r()-.5))}TG.exports=tHr});var X3=s((the,kG)=>{"use strict";var mt=b(),K0=R(),IG=M(),LG=L(),RG=_(),PG=A(),FG=T(),iHr=C(),MG=E(),ji=pt().factory,nHr=B(),rs=y(),aHr=pG(),BG=_G();function sHr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=ji();else if(arguments.length===1){if(t=arguments[0],!LG(t))throw new TypeError(rs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(PG(t,"prng")){if(!RG(t.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ji({prng:t.prng})}else e=ji(t)}else{if(u=arguments[0],r=arguments[1],a=aHr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!LG(t))throw new TypeError(rs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(PG(t,"prng")){if(!RG(t.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ji({prng:t.prng})}else e=ji(t)}else e=ji()}return u===void 0?n=d:n=h,i=e.PRNG,mt(n,"NAME","cauchy"),t&&t.prng?(mt(n,"seed",null),mt(n,"seedLength",null),IG(n,"state",FG(null),iHr),mt(n,"stateLength",null),mt(n,"byteLength",null),mt(n,"toJSON",FG(null))):(K0(n,"seed",o),K0(n,"seedLength",f),IG(n,"state",l,p),K0(n,"stateLength",v),K0(n,"byteLength",c),mt(n,"toJSON",g)),mt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=nHr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return BG(e,u,r)}function d(m,q){return MG(m)||MG(q)||q<=0?NaN:BG(e,m,q)}}kG.exports=sHr});var CG=s((ihe,jG)=>{"use strict";var uHr=X3(),oHr=uHr();jG.exports=oHr});var GG=s((nhe,UG)=>{"use strict";var vHr=b(),VG=CG(),fHr=X3();vHr(VG,"factory",fHr);UG.exports=VG});var J3=s((ahe,XG)=>{"use strict";var dt=b(),es=R(),HG=M(),cHr=D().isPrimitive,WG=L(),xG=_(),DG=A(),zG=T(),lHr=C(),pHr=E(),Ci=ki().factory,gHr=B(),ts=y();function mHr(){var r,e,t,i,n;if(arguments.length===0)r=Ci();else if(arguments.length===1&&WG(arguments[0]))if(t=arguments[0],DG(t,"prng")){if(!xG(t.prng))throw new TypeError(ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ci({prng:t.prng})}else r=Ci(t);else{if(n=arguments[0],!cHr(n))throw new TypeError(ts("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!WG(t))throw new TypeError(ts("invalid argument. Options argument must be an object. Value: `%s`.",t));if(DG(t,"prng")){if(!xG(t.prng))throw new TypeError(ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ci(n/2,.5,{prng:t.prng})}else r=Ci(n/2,.5,t)}else r=Ci(n/2,.5)}return n===void 0?i=g:i=p,e=r.PRNG,dt(i,"NAME","chisquare"),t&&t.prng?(dt(i,"seed",null),dt(i,"seedLength",null),HG(i,"state",zG(null),lHr),dt(i,"stateLength",null),dt(i,"byteLength",null),dt(i,"toJSON",zG(null))):(es(i,"seed",a),es(i,"seedLength",u),HG(i,"state",v,c),es(i,"stateLength",o),es(i,"byteLength",f),dt(i,"toJSON",l)),dt(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=gHr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function g(h){return pHr(h)||h<=0?NaN:r(h/2,.5)}}XG.exports=mHr});var YG=s((she,JG)=>{"use strict";var dHr=J3(),hHr=dHr();JG.exports=hHr});var $n=s((uhe,$G)=>{"use strict";var qHr=b(),ZG=YG(),yHr=J3();qHr(ZG,"factory",yHr);$G.exports=ZG});var Y3=s((ohe,nH)=>{"use strict";var ht=b(),is=R(),QG=M(),bHr=D().isPrimitive,KG=L(),rH=_(),eH=A(),tH=T(),wHr=C(),EHr=E(),Vi=$n().factory,NHr=B(),iH=U(),ns=y();function OHr(){var r,e,t,i,n;if(arguments.length===0)r=Vi();else if(arguments.length===1&&KG(arguments[0]))if(t=arguments[0],eH(t,"prng")){if(!rH(t.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Vi({prng:t.prng})}else r=Vi(t);else{if(n=arguments[0],!bHr(n))throw new TypeError(ns("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!KG(t))throw new TypeError(ns("invalid argument. Options argument must be an object. Value: `%s`.",t));if(eH(t,"prng")){if(!rH(t.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Vi(n,{prng:t.prng})}else r=Vi(n,t)}else r=Vi(n)}return n===void 0?i=g:i=p,e=r.PRNG,ht(i,"NAME","chi"),t&&t.prng?(ht(i,"seed",null),ht(i,"seedLength",null),QG(i,"state",tH(null),wHr),ht(i,"stateLength",null),ht(i,"byteLength",null),ht(i,"toJSON",tH(null))):(is(i,"seed",a),is(i,"seedLength",u),QG(i,"state",v,c),is(i,"stateLength",o),is(i,"byteLength",f),ht(i,"toJSON",l)),ht(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=NHr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return iH(r())}function g(h){return EHr(h)||h<=0?NaN:iH(r(h))}}nH.exports=OHr});var sH=s((vhe,aH)=>{"use strict";var AHr=Y3(),SHr=AHr();aH.exports=SHr});var vH=s((fhe,oH)=>{"use strict";var THr=b(),uH=sH(),_Hr=Y3();THr(uH,"factory",_Hr);oH.exports=uH});var lH=s((che,cH)=>{"use strict";var IHr=j().isPrimitive,LHr=D().isPrimitive,fH=y(),RHr=vr();function PHr(r,e){return!IHr(r)||RHr(r)?new TypeError(fH("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):LHr(e)?null:new TypeError(fH("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}cH.exports=PHr});var gH=s((lhe,pH)=>{"use strict";var Z3=E(),FHr=jn(),MHr=kr();function BHr(r,e,t){var i;return Z3(r)||Z3(e)||Z3(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+FHr(i)/MHr)/2)}pH.exports=BHr});var hH=s((phe,dH)=>{"use strict";var mH=E();function kHr(r,e){return mH(r)||mH(e)?NaN:r<e?0:1}dH.exports=kHr});var bH=s((ghe,yH)=>{"use strict";var jHr=T(),qH=E();function CHr(r){if(qH(r))return jHr(NaN);return e;function e(t){return qH(t)?NaN:t<r?0:1}}yH.exports=CHr});var as=s((mhe,EH)=>{"use strict";var VHr=b(),wH=hH(),UHr=bH();VHr(wH,"factory",UHr);EH.exports=wH});var OH=s((dhe,NH)=>{"use strict";var GHr=T(),HHr=as().factory,$3=E(),WHr=jn(),xHr=kr();function DHr(r,e){if($3(r)||$3(e)||e<0)return GHr(NaN);if(e===0)return HHr(r);return t;function t(i){var n;return $3(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+WHr(n)/xHr)/2)}}NH.exports=DHr});var TH=s((hhe,SH)=>{"use strict";var zHr=b(),AH=gH(),XHr=OH();zHr(AH,"factory",XHr);SH.exports=AH});var Q3=s((qhe,_H)=>{"use strict";var JHr=TH(),YHr=1e4,ZHr=1e-12;function $Hr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<YHr;){if(u=(i+n)/2,n-i<ZHr)return u;a=JHr(u,e,t),r>a?i=u:n=u,o+=1}return u}_H.exports=$Hr});var LH=s((yhe,IH)=>{"use strict";var K3=E(),QHr=Q3();function KHr(r,e,t){return K3(e)||K3(t)||K3(r)||t<0||r<0||r>1?NaN:t===0?e:QHr(r,e,t)}IH.exports=KHr});var PH=s((bhe,RH)=>{"use strict";var rWr=E();function eWr(r,e){return rWr(r)||r<0||r>1?NaN:e}RH.exports=eWr});var BH=s((whe,MH)=>{"use strict";var tWr=T(),FH=E();function iWr(r){if(FH(r))return tWr(NaN);return e;function e(t){return FH(t)||t<0||t>1?NaN:r}}MH.exports=iWr});var rv=s((Ehe,jH)=>{"use strict";var nWr=b(),kH=PH(),aWr=BH();nWr(kH,"factory",aWr);jH.exports=kH});var VH=s((Nhe,CH)=>{"use strict";var sWr=T(),uWr=rv().factory,ev=E(),oWr=Q3();function vWr(r,e){if(ev(r)||ev(e)||e<0)return sWr(NaN);if(e===0)return uWr(r);return t;function t(i){return ev(i)||i<0||i>1?NaN:oWr(i,r,e)}}CH.exports=vWr});var HH=s((Ohe,GH)=>{"use strict";var fWr=b(),UH=LH(),cWr=VH();fWr(UH,"factory",cWr);GH.exports=UH});var xH=s((Ahe,WH)=>{"use strict";var lWr=HH();function pWr(r,e,t){return lWr(r(),e,t)}WH.exports=pWr});var tv=s((She,QH)=>{"use strict";var Oe=b(),ss=R(),DH=M(),zH=L(),XH=_(),JH=A(),YH=T(),gWr=C(),us=X().factory,ZH=E(),mWr=B(),os=y(),dWr=lH(),$H=xH();function hWr(){var r,e,t,i,n,a;if(arguments.length===0)e=us();else if(arguments.length===1){if(r=arguments[0],!zH(r))throw new TypeError(os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(JH(r,"prng")){if(!XH(r.prng))throw new TypeError(os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=us(r)}else{if(n=arguments[0],a=arguments[1],i=dWr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!zH(r))throw new TypeError(os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(JH(r,"prng")){if(!XH(r.prng))throw new TypeError(os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=us(r)}else e=us()}return n===void 0?t=h:t=g,Oe(t,"NAME","cosine"),r&&r.prng?(Oe(t,"seed",null),Oe(t,"seedLength",null),DH(t,"state",YH(null),gWr),Oe(t,"stateLength",null),Oe(t,"byteLength",null),Oe(t,"toJSON",YH(null)),Oe(t,"PRNG",e)):(ss(t,"seed",u),ss(t,"seedLength",o),DH(t,"state",c,l),ss(t,"stateLength",f),ss(t,"byteLength",v),Oe(t,"toJSON",p),Oe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=mWr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return $H(e,n,a)}function h(d,m){return ZH(d)||ZH(m)||m<=0?NaN:$H(e,d,m)}}QH.exports=hWr});var rW=s((The,KH)=>{"use strict";var qWr=tv(),yWr=qWr();KH.exports=yWr});var iW=s((_he,tW)=>{"use strict";var bWr=b(),eW=rW(),wWr=tv();bWr(eW,"factory",wWr);tW.exports=eW});var uW=s((Ihe,sW)=>{"use strict";var nW=Rr().isPrimitive,iv=y(),aW=vr();function EWr(r,e){return!nW(r)||aW(r)?new TypeError(iv("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!nW(e)||aW(e)?new TypeError(iv("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(iv("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}sW.exports=EWr});var fW=s((Lhe,vW)=>{"use strict";var nv=Ii(),Ui=J();function oW(r,e,t){var i,n,a,u,o,f,v,c,l;if(a=t-e,a===0)return e;if(v=r.MIN,c=r.MAX,n=c-v,n===a)return r()-v+e;if(n<a)for(u=0;;){for(a===nv?(u=Ui(a/(n+1)),a%(n+1)===n&&(u+=1)):u=Ui((a+1)/(n+1)),i=0,f=1;f<=u;){if(i+=(r()-v)*f,f*n===a-f+1)return i;f*=n+1}if(l=oW(r,0,Ui(a/f)),!(l>nv/f)&&(l*=f,i+=l,!(i>a)))return i+e}for(n===nv?(o=Ui(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Ui((n+1)/(a+1));;)if(i=r()-v,i=Ui(i/o),i<=a)return i+e}vW.exports=oW});var av=s((Rhe,qW)=>{"use strict";var Ae=b(),vs=R(),cW=M(),lW=L(),pW=_(),gW=A(),mW=T(),NWr=C(),fs=X().factory,dW=E(),Gi=Lr(),OWr=B(),qt=y(),AWr=uW(),hW=fW();function SWr(){var r,e,t,i,n,a;if(arguments.length===0)e=fs();else if(arguments.length===1){if(r=arguments[0],!lW(r))throw new TypeError(qt("invalid argument. Options argument must be an object. Value: `%s`.",r));if(gW(r,"prng")){if(!pW(r.prng))throw new TypeError(qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Gi(e.MIN))throw new TypeError(qt("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Gi(e.MAX))throw new TypeError(qt("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=fs(r)}else{if(n=arguments[0],a=arguments[1],i=AWr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!lW(r))throw new TypeError(qt("invalid argument. Options argument must be an object. Value: `%s`.",r));if(gW(r,"prng")){if(!pW(r.prng))throw new TypeError(qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Gi(e.MIN))throw new TypeError(qt("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Gi(e.MAX))throw new TypeError(qt("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=fs(r)}else e=fs()}return n===void 0?t=h:t=g,Ae(t,"NAME","discrete-uniform"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),cW(t,"state",mW(null),NWr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",mW(null)),Ae(t,"PRNG",e)):(vs(t,"seed",u),vs(t,"seedLength",o),cW(t,"state",c,l),vs(t,"stateLength",f),vs(t,"byteLength",v),Ae(t,"toJSON",p),Ae(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=OWr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return hW(e,n,a)}function h(d,m){return dW(d)||dW(m)||!Gi(d)||!Gi(m)||d>m?NaN:hW(e,d,m)}}qW.exports=SWr});var bW=s((Phe,yW)=>{"use strict";var TWr=av(),_Wr=TWr();yW.exports=_Wr});var NW=s((Fhe,EW)=>{"use strict";var IWr=b(),wW=bW(),LWr=av();IWr(wW,"factory",LWr);EW.exports=wW});var SW=s((Mhe,AW)=>{"use strict";var RWr=D().isPrimitive,PWr=re().isPrimitive,OW=y();function FWr(r,e){return PWr(r)?RWr(e)?null:new TypeError(OW("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(OW("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}AW.exports=FWr});var _W=s((Bhe,TW)=>{"use strict";var MWr=P();function BWr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*MWr(i)}TW.exports=BWr});var sv=s((khe,kW)=>{"use strict";var Se=b(),cs=R(),IW=M(),LW=L(),RW=_(),PW=A(),FW=T(),kWr=C(),ls=X().factory,MW=E(),jWr=U3(),CWr=B(),ps=y(),VWr=SW(),BW=_W();function UWr(){var r,e,t,i,n,a;if(arguments.length===0)e=ls();else if(arguments.length===1){if(t=arguments[0],!LW(t))throw new TypeError(ps("invalid argument. Options argument must be an object. Value: `%s`.",t));if(PW(t,"prng")){if(!RW(t.prng))throw new TypeError(ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=ls(t)}else{if(a=arguments[0],r=arguments[1],n=VWr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!LW(t))throw new TypeError(ps("invalid argument. Options argument must be an object. Value: `%s`.",t));if(PW(t,"prng")){if(!RW(t.prng))throw new TypeError(ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=ls(t)}else e=ls()}return a===void 0?i=h:i=g,Se(i,"NAME","erlang"),t&&t.prng?(Se(i,"seed",null),Se(i,"seedLength",null),IW(i,"state",FW(null),kWr),Se(i,"stateLength",null),Se(i,"byteLength",null),Se(i,"toJSON",FW(null)),Se(i,"PRNG",e)):(cs(i,"seed",u),cs(i,"seedLength",o),IW(i,"state",c,l),cs(i,"stateLength",f),cs(i,"byteLength",v),Se(i,"toJSON",p),Se(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=CWr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return BW(e,a,r)}function h(d,m){return MW(d)||MW(m)||!jWr(d)||m<=0?NaN:BW(e,d,m)}}kW.exports=UWr});var CW=s((jhe,jW)=>{"use strict";var GWr=sv(),HWr=GWr();jW.exports=HWr});var GW=s((Che,UW)=>{"use strict";var WWr=b(),VW=CW(),xWr=sv();WWr(VW,"factory",xWr);UW.exports=VW});var WW=s((Vhe,HW)=>{"use strict";var DWr=P();function zWr(r,e){return-DWr(1-r())/e}HW.exports=zWr});var uv=s((Uhe,ZW)=>{"use strict";var Te=b(),gs=R(),xW=M(),XWr=D().isPrimitive,DW=L(),zW=_(),XW=A(),JW=T(),JWr=C(),ms=X().factory,YWr=E(),ZWr=B(),ds=y(),YW=WW();function $Wr(){var r,e,t,i;if(arguments.length===0)t=ms();else if(arguments.length===1&&DW(arguments[0]))if(e=arguments[0],XW(e,"prng")){if(!zW(e.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ms(e);else{if(r=arguments[0],!XWr(r))throw new TypeError(ds("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!DW(e))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",e));if(XW(e,"prng")){if(!zW(e.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ms(e)}else t=ms()}return r===void 0?i=p:i=l,Te(i,"NAME","exponential"),e&&e.prng?(Te(i,"seed",null),Te(i,"seedLength",null),xW(i,"state",JW(null),JWr),Te(i,"stateLength",null),Te(i,"byteLength",null),Te(i,"toJSON",JW(null)),Te(i,"PRNG",t)):(gs(i,"seed",n),gs(i,"seedLength",a),xW(i,"state",f,v),gs(i,"stateLength",u),gs(i,"byteLength",o),Te(i,"toJSON",c),Te(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=ZWr(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return YW(t,r)}function p(g){return YWr(g)||g<=0?NaN:YW(t,g)}}ZW.exports=$Wr});var QW=s((Ghe,$W)=>{"use strict";var QWr=uv(),KWr=QWr();$W.exports=KWr});var ex=s((Hhe,rx)=>{"use strict";var rxr=b(),KW=QW(),exr=uv();rxr(KW,"factory",exr);rx.exports=KW});var ax=s((Whe,nx)=>{"use strict";var tx=D().isPrimitive,ix=y();function txr(r,e){return tx(r)?tx(e)?null:new TypeError(ix("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(ix("invalid argument. First argument must be a positive number. Value: `%s`.",r))}nx.exports=txr});var ux=s((xhe,sx)=>{"use strict";function ixr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}sx.exports=ixr});var ov=s((Dhe,mx)=>{"use strict";var yt=b(),hs=R(),ox=M(),vx=L(),fx=_(),cx=A(),lx=T(),nxr=C(),Hi=$n().factory,px=E(),axr=B(),qs=y(),sxr=ax(),gx=ux();function uxr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Hi();else if(arguments.length===1){if(e=arguments[0],!vx(e))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(cx(e,"prng")){if(!fx(e.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Hi({prng:e.prng})}else r=Hi(e)}else{if(a=arguments[0],u=arguments[1],n=sxr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!vx(e))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(cx(e,"prng")){if(!fx(e.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Hi({prng:e.prng})}else r=Hi(e)}else r=Hi()}return a===void 0?i=d:i=h,t=r.PRNG,yt(i,"NAME","f"),e&&e.prng?(yt(i,"seed",null),yt(i,"seedLength",null),ox(i,"state",lx(null),nxr),yt(i,"stateLength",null),yt(i,"byteLength",null),yt(i,"toJSON",lx(null))):(hs(i,"seed",o),hs(i,"seedLength",f),ox(i,"state",l,p),hs(i,"stateLength",v),hs(i,"byteLength",c),yt(i,"toJSON",g)),yt(i,"PRNG",t),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=axr(t.state),a===void 0?m.params=[]:m.params=[a,u],m}function h(){return gx(r,a,u)}function d(m,q){return px(m)||px(q)||m<=0||q<=0?NaN:gx(r,m,q)}}mx.exports=uxr});var hx=s((zhe,dx)=>{"use strict";var oxr=ov(),vxr=oxr();dx.exports=vxr});var bx=s((Xhe,yx)=>{"use strict";var fxr=b(),qx=hx(),cxr=ov();fxr(qx,"factory",cxr);yx.exports=qx});var Nx=s((Jhe,Ex)=>{"use strict";var wx=D().isPrimitive,lxr=j().isPrimitive,vv=vr(),fv=y();function pxr(r,e,t){return!wx(r)||vv(r)?new TypeError(fv("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!wx(e)||vv(e)?new TypeError(fv("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!lxr(t)||vv(t)?new TypeError(fv("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}Ex.exports=pxr});var Ax=s((Yhe,Ox)=>{"use strict";var gxr=W(),mxr=P();function dxr(r,e,t,i){return i+t*gxr(-mxr(r()),-1/e)}Ox.exports=dxr});var lv=s((Zhe,Px)=>{"use strict";var _e=b(),ys=R(),Sx=M(),Tx=L(),_x=_(),Ix=A(),Lx=T(),hxr=C(),bs=X().factory,cv=E(),qxr=B(),ws=y(),yxr=Nx(),Rx=Ax();function bxr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=bs();else if(arguments.length===1){if(e=arguments[0],!Tx(e))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Ix(e,"prng")){if(!_x(e.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=bs(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=yxr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!Tx(e))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Ix(e,"prng")){if(!_x(e.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=bs(e)}else t=bs()}return r===void 0?i=d:i=h,_e(i,"NAME","frechet"),e&&e.prng?(_e(i,"seed",null),_e(i,"seedLength",null),Sx(i,"state",Lx(null),hxr),_e(i,"stateLength",null),_e(i,"byteLength",null),_e(i,"toJSON",Lx(null)),_e(i,"PRNG",t)):(ys(i,"seed",o),ys(i,"seedLength",f),Sx(i,"state",l,p),ys(i,"stateLength",v),ys(i,"byteLength",c),_e(i,"toJSON",g),_e(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=qxr(t.state),r===void 0?m.params=[]:m.params=[r,a,u],m}function h(){return Rx(t,r,a,u)}function d(m,q,N){return cv(m)||cv(q)||cv(N)||m<=0||q<=0?NaN:Rx(t,m,q,N)}}Px.exports=bxr});var Mx=s(($he,Fx)=>{"use strict";var wxr=lv(),Exr=wxr();Fx.exports=Exr});var jx=s((Qhe,kx)=>{"use strict";var Nxr=b(),Bx=Mx(),Oxr=lv();Nxr(Bx,"factory",Oxr);kx.exports=Bx});var Ux=s((Khe,Vx)=>{"use strict";var Axr=J(),Cx=P();function Sxr(r,e){var t=r();return t===0&&(t=r()),Axr(Cx(t)/Cx(1-e))}Vx.exports=Sxr});var pv=s((rqe,Xx)=>{"use strict";var Ie=b(),Es=R(),Gx=M(),Hx=L(),Txr=ln().isPrimitive,Wx=_(),xx=A(),Dx=T(),_xr=C(),Ns=X().factory,Ixr=E(),Lxr=B(),Os=y(),zx=Ux();function Rxr(){var r,e,t,i;if(arguments.length===0)e=Ns();else if(arguments.length===1&&Hx(arguments[0]))if(r=arguments[0],xx(r,"prng")){if(!Wx(r.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r);else{if(i=arguments[0],!Txr(i))throw new TypeError(Os("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!Hx(r))throw new TypeError(Os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(xx(r,"prng")){if(!Wx(r.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r)}else e=Ns()}return i===void 0?t=p:t=l,Ie(t,"NAME","geometric"),r&&r.prng?(Ie(t,"seed",null),Ie(t,"seedLength",null),Gx(t,"state",Dx(null),_xr),Ie(t,"stateLength",null),Ie(t,"byteLength",null),Ie(t,"toJSON",Dx(null)),Ie(t,"PRNG",e)):(Es(t,"seed",n),Es(t,"seedLength",a),Gx(t,"state",f,v),Es(t,"stateLength",u),Es(t,"byteLength",o),Ie(t,"toJSON",c),Ie(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Lxr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return zx(e,i)}function p(g){return Ixr(g)||g<0||g>1?NaN:zx(e,g)}}Xx.exports=Rxr});var Yx=s((eqe,Jx)=>{"use strict";var Pxr=pv(),Fxr=Pxr();Jx.exports=Fxr});var Qx=s((tqe,$x)=>{"use strict";var Mxr=b(),Zx=Yx(),Bxr=pv();Mxr(Zx,"factory",Bxr);$x.exports=Zx});var eD=s((iqe,rD)=>{"use strict";var kxr=j().isPrimitive,jxr=D().isPrimitive,Kx=y(),Cxr=vr();function Vxr(r,e){return!kxr(r)||Cxr(r)?new TypeError(Kx("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):jxr(e)?null:new TypeError(Kx("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}rD.exports=Vxr});var nD=s((nqe,iD)=>{"use strict";var tD=P();function Uxr(r,e,t){return e-t*tD(-tD(r()))}iD.exports=Uxr});var gv=s((aqe,lD)=>{"use strict";var Le=b(),As=R(),aD=M(),sD=L(),uD=_(),oD=A(),vD=T(),Gxr=C(),Ss=X().factory,fD=E(),Hxr=B(),Ts=y(),Wxr=eD(),cD=nD();function xxr(){var r,e,t,i,n,a;if(arguments.length===0)t=Ss();else if(arguments.length===1){if(e=arguments[0],!sD(e))throw new TypeError(Ts("invalid argument. Options argument must be an object. Value: `%s`.",e));if(oD(e,"prng")){if(!uD(e.prng))throw new TypeError(Ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ss(e)}else{if(a=arguments[0],r=arguments[1],n=Wxr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!sD(e))throw new TypeError(Ts("invalid argument. Options argument must be an object. Value: `%s`.",e));if(oD(e,"prng")){if(!uD(e.prng))throw new TypeError(Ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ss(e)}else t=Ss()}return a===void 0?i=h:i=g,Le(i,"NAME","gumbel"),e&&e.prng?(Le(i,"seed",null),Le(i,"seedLength",null),aD(i,"state",vD(null),Gxr),Le(i,"stateLength",null),Le(i,"byteLength",null),Le(i,"toJSON",vD(null)),Le(i,"PRNG",t)):(As(i,"seed",u),As(i,"seedLength",o),aD(i,"state",c,l),As(i,"stateLength",f),As(i,"byteLength",v),Le(i,"toJSON",p),Le(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=Hxr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return cD(t,a,r)}function h(d,m){return fD(d)||fD(m)||m<=0?NaN:cD(t,d,m)}}lD.exports=xxr});var gD=s((sqe,pD)=>{"use strict";var Dxr=gv(),zxr=Dxr();pD.exports=zxr});var hD=s((uqe,dD)=>{"use strict";var Xxr=b(),mD=gD(),Jxr=gv();Xxr(mD,"factory",Jxr);dD.exports=mD});var yD=s((oqe,qD)=>{"use strict";var mv=jr().isPrimitive,Qn=y();function Yxr(r,e,t){return mv(r)?mv(e)?mv(t)?t>r?new RangeError(Qn("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(Qn("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(Qn("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(Qn("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(Qn("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}qD.exports=Yxr});var bD=s((vqe,Zxr)=>{Zxr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var ED=s((fqe,wD)=>{"use strict";var $xr=E(),Qxr=Lr(),Kxr=Li(),rDr=I(),eDr=bD(),tDr=170;function iDr(r){return $xr(r)?NaN:Qxr(r)?r<0?NaN:r<=tDr?eDr[r]:rDr:Kxr(r+1)}wD.exports=iDr});var OD=s((cqe,ND)=>{"use strict";var nDr=ED();ND.exports=nDr});var SD=s((lqe,AD)=>{"use strict";var bt=OD();function aDr(r,e,t,i){var n,a,u;for(i<t?(n=bt(t)*bt(e+t-i)/(bt(e+t)*bt(t-i)),u=0):(n=bt(e)*bt(i)/(bt(i-t)*bt(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}AD.exports=aDr});var _D=s((pqe,TD)=>{"use strict";var _s=SD();function sDr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=_s(r,n,a,u),t-o):(a=t,n=e-t,o=_s(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=_s(r,n,a,u),o):(n=e-t,a=t,o=_s(r,n,a,u),i-o))}TD.exports=sDr});var hv=s((gqe,kD)=>{"use strict";var Re=b(),Is=R(),ID=M(),LD=L(),RD=_(),PD=A(),FD=T(),uDr=C(),Ls=X().factory,dv=y1(),MD=I(),oDr=B(),Rs=y(),vDr=yD(),BD=_D();function fDr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Ls();else if(arguments.length===1){if(r=arguments[0],!LD(r))throw new TypeError(Rs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PD(r,"prng")){if(!RD(r.prng))throw new TypeError(Rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ls(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=vDr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!LD(r))throw new TypeError(Rs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PD(r,"prng")){if(!RD(r.prng))throw new TypeError(Rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ls(r)}else e=Ls()}return n===void 0?t=d:t=h,Re(t,"NAME","hypergeometric"),r&&r.prng?(Re(t,"seed",null),Re(t,"seedLength",null),ID(t,"state",FD(null),uDr),Re(t,"stateLength",null),Re(t,"byteLength",null),Re(t,"toJSON",FD(null)),Re(t,"PRNG",e)):(Is(t,"seed",o),Is(t,"seedLength",f),ID(t,"state",l,p),Is(t,"stateLength",v),Is(t,"byteLength",c),Re(t,"toJSON",g),Re(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=oDr(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return BD(e,n,a,u)}function d(m,q,N){return m===MD||q===MD||!dv(m)||!dv(q)||!dv(N)||N>m?NaN:BD(e,m,q,N)}}kD.exports=fDr});var CD=s((mqe,jD)=>{"use strict";var cDr=hv(),lDr=cDr();jD.exports=lDr});var GD=s((dqe,UD)=>{"use strict";var pDr=b(),VD=CD(),gDr=hv();pDr(VD,"factory",gDr);UD.exports=VD});var DD=s((hqe,xD)=>{"use strict";var HD=D().isPrimitive,WD=y();function mDr(r,e){return HD(r)?HD(e)?null:new TypeError(WD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(WD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}xD.exports=mDr});var qv=s((qqe,QD)=>{"use strict";var wt=b(),Ps=R(),zD=M(),XD=L(),JD=_(),YD=A(),ZD=T(),dDr=C(),Wi=ki().factory,$D=E(),hDr=B(),Fs=y(),qDr=DD();function yDr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Wi();else if(arguments.length===1){if(i=arguments[0],!XD(i))throw new TypeError(Fs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(YD(i,"prng")){if(!JD(i.prng))throw new TypeError(Fs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Wi({prng:i.prng})}else r=Wi(i)}else{if(e=arguments[0],t=arguments[1],u=qDr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!XD(i))throw new TypeError(Fs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(YD(i,"prng")){if(!JD(i.prng))throw new TypeError(Fs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Wi(e,t,{prng:i.prng})}else r=Wi(e,t,i)}else r=Wi(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,wt(a,"NAME","invgamma"),i&&i.prng?(wt(a,"seed",null),wt(a,"seedLength",null),zD(a,"state",ZD(null),dDr),wt(a,"stateLength",null),wt(a,"byteLength",null),wt(a,"toJSON",ZD(null))):(Ps(a,"seed",o),Ps(a,"seedLength",f),zD(a,"state",l,p),Ps(a,"stateLength",v),Ps(a,"byteLength",c),wt(a,"toJSON",g)),wt(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=hDr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return 1/r()}function d(m,q){return $D(m)||$D(q)||m<=0||q<=0?NaN:1/r(m,q)}}QD.exports=yDr});var rz=s((yqe,KD)=>{"use strict";var bDr=qv(),wDr=bDr();KD.exports=wDr});var iz=s((bqe,tz)=>{"use strict";var EDr=b(),ez=rz(),NDr=qv();EDr(ez,"factory",NDr);tz.exports=ez});var uz=s((wqe,sz)=>{"use strict";var nz=D().isPrimitive,az=y();function ODr(r,e){return nz(r)?nz(e)?null:new TypeError(az("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(az("invalid argument. First argument must be a positive number. Value: `%s`.",r))}sz.exports=ODr});var fz=s((Eqe,vz)=>{"use strict";var oz=W();function ADr(r,e,t){var i=r();return oz(1-oz(1-i,1/t),1/e)}vz.exports=ADr});var yv=s((Nqe,qz)=>{"use strict";var Pe=b(),Ms=R(),cz=M(),lz=L(),pz=_(),gz=A(),mz=T(),SDr=C(),Bs=X().factory,dz=E(),TDr=B(),ks=y(),_Dr=uz(),hz=fz();function IDr(){var r,e,t,i,n,a;if(arguments.length===0)e=Bs();else if(arguments.length===1){if(r=arguments[0],!lz(r))throw new TypeError(ks("invalid argument. Options argument must be an object. Value: `%s`.",r));if(gz(r,"prng")){if(!pz(r.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bs(r)}else{if(n=arguments[0],a=arguments[1],i=_Dr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!lz(r))throw new TypeError(ks("invalid argument. Options argument must be an object. Value: `%s`.",r));if(gz(r,"prng")){if(!pz(r.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bs(r)}else e=Bs()}return n===void 0?t=h:t=g,Pe(t,"NAME","kumaraswamy"),r&&r.prng?(Pe(t,"seed",null),Pe(t,"seedLength",null),cz(t,"state",mz(null),SDr),Pe(t,"stateLength",null),Pe(t,"byteLength",null),Pe(t,"toJSON",mz(null)),Pe(t,"PRNG",e)):(Ms(t,"seed",u),Ms(t,"seedLength",o),cz(t,"state",c,l),Ms(t,"stateLength",f),Ms(t,"byteLength",v),Pe(t,"toJSON",p),Pe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=TDr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return hz(e,n,a)}function h(d,m){return dz(d)||dz(m)||d<=0||m<=0?NaN:hz(e,d,m)}}qz.exports=IDr});var bz=s((Oqe,yz)=>{"use strict";var LDr=yv(),RDr=LDr();yz.exports=RDr});var Nz=s((Aqe,Ez)=>{"use strict";var PDr=b(),wz=bz(),FDr=yv();PDr(wz,"factory",FDr);Ez.exports=wz});var Sz=s((Sqe,Az)=>{"use strict";var MDr=j().isPrimitive,BDr=D().isPrimitive,Oz=y(),kDr=vr();function jDr(r,e){return!MDr(r)||kDr(r)?new TypeError(Oz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):BDr(e)?null:new TypeError(Oz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Az.exports=jDr});var _z=s((Tqe,Tz)=>{"use strict";var CDr=z0(),VDr=Y(),UDr=P();function GDr(r,e,t){var i=r()-.5;return e-t*CDr(i)*UDr(1-2*VDr(i))}Tz.exports=GDr});var bv=s((_qe,kz)=>{"use strict";var Fe=b(),js=R(),Iz=M(),Lz=L(),Rz=_(),Pz=A(),Fz=T(),HDr=C(),Cs=X().factory,Mz=E(),WDr=B(),Vs=y(),xDr=Sz(),Bz=_z();function DDr(){var r,e,t,i,n,a;if(arguments.length===0)e=Cs();else if(arguments.length===1){if(r=arguments[0],!Lz(r))throw new TypeError(Vs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Pz(r,"prng")){if(!Rz(r.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Cs(r)}else{if(n=arguments[0],a=arguments[1],i=xDr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Lz(r))throw new TypeError(Vs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Pz(r,"prng")){if(!Rz(r.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Cs(r)}else e=Cs()}return n===void 0?t=h:t=g,Fe(t,"NAME","laplace"),r&&r.prng?(Fe(t,"seed",null),Fe(t,"seedLength",null),Iz(t,"state",Fz(null),HDr),Fe(t,"stateLength",null),Fe(t,"byteLength",null),Fe(t,"toJSON",Fz(null)),Fe(t,"PRNG",e)):(js(t,"seed",u),js(t,"seedLength",o),Iz(t,"state",c,l),js(t,"stateLength",f),js(t,"byteLength",v),Fe(t,"toJSON",p),Fe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=WDr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return Bz(e,n,a)}function h(d,m){return Mz(d)||Mz(m)||m<=0?NaN:Bz(e,d,m)}}kz.exports=DDr});var Cz=s((Iqe,jz)=>{"use strict";var zDr=bv(),XDr=zDr();jz.exports=XDr});var Gz=s((Lqe,Uz)=>{"use strict";var JDr=b(),Vz=Cz(),YDr=bv();JDr(Vz,"factory",YDr);Uz.exports=Vz});var xz=s((Rqe,Wz)=>{"use strict";var ZDr=j().isPrimitive,$Dr=D().isPrimitive,Hz=y(),QDr=vr();function KDr(r,e){return!ZDr(r)||QDr(r)?new TypeError(Hz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):$Dr(e)?null:new TypeError(Hz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Wz.exports=KDr});var zz=s((Pqe,Dz)=>{"use strict";function rzr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}Dz.exports=rzr});var Jz=s((Fqe,Xz)=>{"use strict";function ezr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}Xz.exports=ezr});var Zz=s((Mqe,Yz)=>{"use strict";function tzr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}Yz.exports=tzr});var Qz=s((Bqe,$z)=>{"use strict";function izr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}$z.exports=izr});var rX=s((kqe,Kz)=>{"use strict";function nzr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}Kz.exports=nzr});var nX=s((jqe,iX)=>{"use strict";var azr=E(),eX=U(),tX=P(),szr=I(),uzr=V(),ozr=zz(),vzr=Jz(),fzr=Zz(),czr=Qz(),lzr=rX(),pzr=.08913147449493408,gzr=2.249481201171875,mzr=.807220458984375,dzr=.9399557113647461,hzr=.9836282730102539;function qzr(r){var e,t,i,n,a,u;return azr(r)?NaN:r===1?szr:r===-1?uzr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=ozr(t),e*(a*pzr+a*u)):n>=.25?(a=eX(-2*tX(n)),n-=.25,u=vzr(n),e*(a/(gzr+u))):(n=eX(-tX(n)),n<3?(i=n-1.125,u=fzr(i),e*(mzr*n+u*n)):n<6?(i=n-3,u=czr(i),e*(dzr*n+u*n)):(i=n-6,u=lzr(i),e*(hzr*n+u*n))))}iX.exports=qzr});var wv=s((Cqe,aX)=>{"use strict";var yzr=nX();aX.exports=yzr});var uX=s((Vqe,sX)=>{"use strict";var bzr=wv(),Ev=E(),wzr=U();function Ezr(r,e,t){var i,n;return Ev(e)||Ev(t)||Ev(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*wzr(2),i+n*bzr(2*r-1))}sX.exports=Ezr});var vX=s((Uqe,oX)=>{"use strict";var Nzr=T(),Ozr=rv().factory,Azr=wv(),Nv=E(),Szr=U();function Tzr(r,e){var t,i;if(Nv(r)||Nv(e)||e<0)return Nzr(NaN);return e===0&&Ozr(r),t=r,i=e*Szr(2),n;function n(a){return Nv(a)||a<0||a>1?NaN:t+i*Azr(2*a-1)}}oX.exports=Tzr});var Ov=s((Gqe,cX)=>{"use strict";var _zr=b(),fX=uX(),Izr=vX();_zr(fX,"factory",Izr);cX.exports=fX});var pX=s((Hqe,lX)=>{"use strict";var Lzr=Ov();function Rzr(r,e,t){var i=Lzr(1-r()/2,0,1);return e+t/(i*i)}lX.exports=Rzr});var Av=s((Wqe,wX)=>{"use strict";var Me=b(),Us=R(),gX=M(),mX=L(),dX=_(),hX=A(),qX=T(),Pzr=C(),Gs=X().factory,yX=E(),Fzr=B(),Hs=y(),Mzr=xz(),bX=pX();function Bzr(){var r,e,t,i,n,a;if(arguments.length===0)e=Gs();else if(arguments.length===1){if(r=arguments[0],!mX(r))throw new TypeError(Hs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hX(r,"prng")){if(!dX(r.prng))throw new TypeError(Hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Gs(r)}else{if(n=arguments[0],a=arguments[1],i=Mzr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!mX(r))throw new TypeError(Hs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hX(r,"prng")){if(!dX(r.prng))throw new TypeError(Hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Gs(r)}else e=Gs()}return n===void 0?t=h:t=g,Me(t,"NAME","levy"),r&&r.prng?(Me(t,"seed",null),Me(t,"seedLength",null),gX(t,"state",qX(null),Pzr),Me(t,"stateLength",null),Me(t,"byteLength",null),Me(t,"toJSON",qX(null)),Me(t,"PRNG",e)):(Us(t,"seed",u),Us(t,"seedLength",o),gX(t,"state",c,l),Us(t,"stateLength",f),Us(t,"byteLength",v),Me(t,"toJSON",p),Me(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Fzr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return bX(e,n,a)}function h(d,m){return yX(d)||yX(m)||m<=0?NaN:bX(e,d,m)}}wX.exports=Bzr});var NX=s((xqe,EX)=>{"use strict";var kzr=Av(),jzr=kzr();EX.exports=jzr});var SX=s((Dqe,AX)=>{"use strict";var Czr=b(),OX=NX(),Vzr=Av();Czr(OX,"factory",Vzr);AX.exports=OX});var IX=s((zqe,_X)=>{"use strict";var Uzr=j().isPrimitive,Gzr=D().isPrimitive,Hzr=vr(),TX=y();function Wzr(r,e){return!Uzr(r)||Hzr(r)?new TypeError(TX("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Gzr(e)?null:new TypeError(TX("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}_X.exports=Wzr});var RX=s((Xqe,LX)=>{"use strict";var xzr=P();function Dzr(r,e,t){var i=r();return e+t*xzr(i/(1-i))}LX.exports=Dzr});var Sv=s((Jqe,VX)=>{"use strict";var Be=b(),Ws=R(),PX=M(),FX=L(),MX=_(),BX=A(),kX=T(),zzr=C(),xs=X().factory,jX=E(),Xzr=B(),Ds=y(),Jzr=IX(),CX=RX();function Yzr(){var r,e,t,i,n,a;if(arguments.length===0)e=xs();else if(arguments.length===1){if(r=arguments[0],!FX(r))throw new TypeError(Ds("invalid argument. Options argument must be an object. Value: `%s`.",r));if(BX(r,"prng")){if(!MX(r.prng))throw new TypeError(Ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=xs(r)}else{if(n=arguments[0],a=arguments[1],i=Jzr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!FX(r))throw new TypeError(Ds("invalid argument. Options argument must be an object. Value: `%s`.",r));if(BX(r,"prng")){if(!MX(r.prng))throw new TypeError(Ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=xs(r)}else e=xs()}return n===void 0?t=h:t=g,Be(t,"NAME","logistic"),r&&r.prng?(Be(t,"seed",null),Be(t,"seedLength",null),PX(t,"state",kX(null),zzr),Be(t,"stateLength",null),Be(t,"byteLength",null),Be(t,"toJSON",kX(null)),Be(t,"PRNG",e)):(Ws(t,"seed",u),Ws(t,"seedLength",o),PX(t,"state",c,l),Ws(t,"stateLength",f),Ws(t,"byteLength",v),Be(t,"toJSON",p),Be(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Xzr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return CX(e,n,a)}function h(d,m){return jX(d)||jX(m)||m<=0?NaN:CX(e,d,m)}}VX.exports=Yzr});var GX=s((Yqe,UX)=>{"use strict";var Zzr=Sv(),$zr=Zzr();UX.exports=$zr});var xX=s((Zqe,WX)=>{"use strict";var Qzr=b(),HX=GX(),Kzr=Sv();Qzr(HX,"factory",Kzr);WX.exports=HX});var XX=s(($qe,zX)=>{"use strict";var rXr=j().isPrimitive,eXr=D().isPrimitive,DX=y(),tXr=vr();function iXr(r,e){return!rXr(r)||tXr(r)?new TypeError(DX("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):eXr(e)?null:new TypeError(DX("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}zX.exports=iXr});var YX=s((Qqe,JX)=>{"use strict";var nXr=sr();function aXr(r,e,t){return nXr(e+t*r())}JX.exports=aXr});var Tv=s((Kqe,iJ)=>{"use strict";var Et=b(),zs=R(),ZX=M(),$X=L(),QX=_(),KX=A(),rJ=T(),sXr=C(),xi=pt().factory,eJ=E(),uXr=B(),Xs=y(),oXr=XX(),tJ=YX();function vXr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=xi();else if(arguments.length===1){if(t=arguments[0],!$X(t))throw new TypeError(Xs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(KX(t,"prng")){if(!QX(t.prng))throw new TypeError(Xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=xi({prng:t.prng})}else e=xi(t)}else{if(u=arguments[0],r=arguments[1],a=oXr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!$X(t))throw new TypeError(Xs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(KX(t,"prng")){if(!QX(t.prng))throw new TypeError(Xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=xi({prng:t.prng})}else e=xi(t)}else e=xi()}return u===void 0?n=d:n=h,i=e.PRNG,Et(n,"NAME","lognormal"),t&&t.prng?(Et(n,"seed",null),Et(n,"seedLength",null),ZX(n,"state",rJ(null),sXr),Et(n,"stateLength",null),Et(n,"byteLength",null),Et(n,"toJSON",rJ(null))):(zs(n,"seed",o),zs(n,"seedLength",f),ZX(n,"state",l,p),zs(n,"stateLength",v),zs(n,"byteLength",c),Et(n,"toJSON",g)),Et(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=uXr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return tJ(e,u,r)}function d(m,q){return eJ(m)||eJ(q)||q<=0?NaN:tJ(e,m,q)}}iJ.exports=vXr});var aJ=s((rye,nJ)=>{"use strict";var fXr=Tv(),cXr=fXr();nJ.exports=cXr});var oJ=s((eye,uJ)=>{"use strict";var lXr=b(),sJ=aJ(),pXr=Tv();lXr(sJ,"factory",pXr);uJ.exports=sJ});var _v=s((tye,vJ)=>{"use strict";var gXr=ti(),mXr=J(),dXr=gXr-1;function hXr(){var r=mXr(1+dXr*Math.random());return r|0}vJ.exports=hXr});var Rv=s((iye,gJ)=>{"use strict";var ke=b(),Nt=R(),fJ=M(),Iv=A(),qXr=L(),yXr=gr().isPrimitive,bXr=Wr(),wXr=re().isPrimitive,cJ=pa(),Xr=y(),Js=ti(),Er=Xe(),Di=ot(),EXr=B(),lJ=_v(),Lv=Js-1|0,NXr=Js-1|0,OXr=16807,Ys=1,Zs=2,Ot=2,Nr=4,Kn=5;function pJ(r,e){var t;return e?t="option":t="argument",r.length<Kn+1?new RangeError(Xr("invalid %s. State array has insufficient length.",t)):r[0]!==Ys?new RangeError(Xr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ys,r[0])):r[1]!==Zs?new RangeError(Xr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Zs,r[1])):r[Ot]!==1?new RangeError(Xr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[Ot])):r[Nr]!==r.length-Kn?new RangeError(Xr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Kn,r[Nr])):null}function AXr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!qXr(r))throw new TypeError(Xr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Iv(r,"copy")&&(i.copy=r.copy,!yXr(r.copy)))throw new TypeError(Xr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Iv(r,"state")){if(t=r.state,i.state=!0,!cJ(t))throw new TypeError(Xr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=pJ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Er(t.length),Di(t.length,t,1,e,1)),t=new Er(e.buffer,e.byteOffset+(Ot+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,t[Nr])}if(n===void 0)if(Iv(r,"seed"))if(n=r.seed,i.seed=!0,wXr(n)){if(n>NXr)throw new RangeError(Xr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(bXr(n)&&n.length>0)a=n.length,e=new Er(Kn+a),e[0]=Ys,e[1]=Zs,e[Ot]=1,e[Nr]=a,Di.ndarray(a,n,1,0,e,1,Nr+1),t=new Er(e.buffer,e.byteOffset+(Ot+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Xr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=lJ()|0}else n=lJ()|0;return t===void 0&&(e=new Er(Kn+1),e[0]=Ys,e[1]=Zs,e[Ot]=1,e[Nr]=1,e[Nr+1]=n,t=new Er(e.buffer,e.byteOffset+(Ot+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),ke(h,"NAME","minstd"),Nt(h,"seed",o),Nt(h,"seedLength",f),fJ(h,"state",l,p),Nt(h,"stateLength",v),Nt(h,"byteLength",c),ke(h,"toJSON",g),ke(h,"MIN",1),ke(h,"MAX",Js-1),ke(h,"normalized",d),ke(d,"NAME",h.NAME),Nt(d,"seed",o),Nt(d,"seedLength",f),fJ(d,"state",l,p),Nt(d,"stateLength",v),Nt(d,"byteLength",c),ke(d,"toJSON",g),ke(d,"MIN",(h.MIN-1)/Lv),ke(d,"MAX",(h.MAX-1)/Lv),h;function o(){var m=e[Nr];return Di(m,n,1,new Er(m),1)}function f(){return e[Nr]}function v(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return Di(m,e,1,new Er(m),1)}function p(m){var q;if(!cJ(m))throw new TypeError(Xr("invalid argument. Must provide an Int32Array. Value: `%s`.",m));if(q=pJ(m,!1),q)throw q;i.copy===!1?i.state&&m.length===e.length?Di(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new Er(m.length)),Di(m.length,m,1,e,1)),t=new Er(e.buffer,e.byteOffset+(Ot+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,e[Nr])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=EXr(e),m.params=[],m}function h(){var m=t[0]|0;return m=OXr*m%Js|0,t[0]=m,m|0}function d(){return(h()-1)/Lv}}gJ.exports=AXr});var dJ=s((nye,mJ)=>{"use strict";var SXr=Rv(),TXr=_v(),_Xr=SXr({seed:TXr()});mJ.exports=_Xr});var yJ=s((aye,qJ)=>{"use strict";var IXr=b(),hJ=dJ(),LXr=Rv();IXr(hJ,"factory",LXr);qJ.exports=hJ});var wJ=s((sye,bJ)=>{"use strict";var RXr=E(),PXr=8;function FXr(r,e,t){var i,n;for(n=0;n<PXr;n++)if(i=r(),RXr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}bJ.exports=FXr});var Pv=s((uye,EJ)=>{"use strict";var MXr=ti(),BXr=J(),kXr=MXr-1;function jXr(){var r=BXr(1+kXr*Math.random());return r|0}EJ.exports=jXr});var Bv=s((oye,_J)=>{"use strict";var je=b(),At=R(),NJ=M(),Fv=A(),CXr=L(),VXr=gr().isPrimitive,UXr=Wr(),GXr=re().isPrimitive,OJ=pa(),zi=ot(),HXr=J(),Or=Xe(),ra=ti(),WXr=B(),Hr=y(),AJ=wJ(),SJ=Pv(),Mv=ra-1|0,xXr=ra-1|0,DXr=16807,Sr=32,Ks=1,ru=3,St=2,Xi=Sr+3,Ar=Sr+6,ea=Sr+7,$s=Xi+1,Qs=Xi+2;function TJ(r,e){var t;return e?t="option":t="argument",r.length<ea+1?new RangeError(Hr("invalid %s. State array has insufficient length.",t)):r[0]!==Ks?new RangeError(Hr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ks,r[0])):r[1]!==ru?new RangeError(Hr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,ru,r[1])):r[St]!==Sr?new RangeError(Hr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Sr,r[St])):r[Xi]!==2?new RangeError(Hr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[Xi])):r[Ar]!==r.length-ea?new RangeError(Hr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-ea,r[Ar])):null}function zXr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!CXr(r))throw new TypeError(Hr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Fv(r,"copy")&&(i.copy=r.copy,!VXr(r.copy)))throw new TypeError(Hr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Fv(r,"state")){if(t=r.state,i.state=!0,!OJ(t))throw new TypeError(Hr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=TJ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Or(t.length),zi(t.length,t,1,e,1)),t=new Or(e.buffer,e.byteOffset+(St+1)*e.BYTES_PER_ELEMENT,Sr),n=new Or(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,t[Ar])}if(n===void 0)if(Fv(r,"seed"))if(n=r.seed,i.seed=!0,GXr(n)){if(n>xXr)throw new RangeError(Hr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(UXr(n)&&n.length>0)a=n.length,e=new Or(ea+a),e[0]=Ks,e[1]=ru,e[St]=Sr,e[Xi]=2,e[Qs]=n[0],e[Ar]=a,zi.ndarray(a,n,1,0,e,1,Ar+1),t=new Or(e.buffer,e.byteOffset+(St+1)*e.BYTES_PER_ELEMENT,Sr),n=new Or(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,a),t=AJ(h,t,Sr),e[$s]=t[0];else throw new TypeError(Hr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=SJ()|0}else n=SJ()|0;return t===void 0&&(e=new Or(ea+1),e[0]=Ks,e[1]=ru,e[St]=Sr,e[Xi]=2,e[Qs]=n,e[Ar]=1,e[Ar+1]=n,t=new Or(e.buffer,e.byteOffset+(St+1)*e.BYTES_PER_ELEMENT,Sr),n=new Or(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,1),t=AJ(h,t,Sr),e[$s]=t[0]),je(d,"NAME","minstd-shuffle"),At(d,"seed",o),At(d,"seedLength",f),NJ(d,"state",l,p),At(d,"stateLength",v),At(d,"byteLength",c),je(d,"toJSON",g),je(d,"MIN",1),je(d,"MAX",ra-1),je(d,"normalized",m),je(m,"NAME",d.NAME),At(m,"seed",o),At(m,"seedLength",f),NJ(m,"state",l,p),At(m,"stateLength",v),At(m,"byteLength",c),je(m,"toJSON",g),je(m,"MIN",(d.MIN-1)/Mv),je(m,"MAX",(d.MAX-1)/Mv),d;function o(){var q=e[Ar];return zi(q,n,1,new Or(q),1)}function f(){return e[Ar]}function v(){return e.length}function c(){return e.byteLength}function l(){var q=e.length;return zi(q,e,1,new Or(q),1)}function p(q){var N;if(!OJ(q))throw new TypeError(Hr("invalid argument. Must provide an Int32Array. Value: `%s`.",q));if(N=TJ(q,!1),N)throw N;i.copy===!1?i.state&&q.length===e.length?zi(q.length,q,1,e,1):(e=q,i.state=!0):(q.length!==e.length&&(e=new Or(q.length)),zi(q.length,q,1,e,1)),t=new Or(e.buffer,e.byteOffset+(St+1)*e.BYTES_PER_ELEMENT,Sr),n=new Or(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,e[Ar])}function g(){var q={};return q.type="PRNG",q.name=d.NAME,q.state=WXr(e),q.params=[],q}function h(){var q=e[Qs]|0;return q=DXr*q%ra|0,e[Qs]=q,q|0}function d(){var q,N;return q=e[$s],N=HXr(Sr*(q/ra)),q=t[N],e[$s]=q,t[N]=h(),q}function m(){return(d()-1)/Mv}}_J.exports=zXr});var LJ=s((vye,IJ)=>{"use strict";var XXr=Bv(),JXr=Pv(),YXr=XXr({seed:JXr()});IJ.exports=YXr});var FJ=s((fye,PJ)=>{"use strict";var ZXr=b(),RJ=LJ(),$Xr=Bv();ZXr(RJ,"factory",$Xr);PJ.exports=RJ});var BJ=s((cye,MJ)=>{"use strict";var QXr=sr();function KXr(r,e){for(var t=r(),i=1;t>QXr(-e);)i+=1,t*=r();return i-1}MJ.exports=KXr});var jJ=s((lye,kJ)=>{"use strict";var rJr=J();function eJr(r){return rJr(r)===r&&r<0}kJ.exports=eJr});var VJ=s((pye,CJ)=>{"use strict";var tJr=jJ();CJ.exports=tJr});var GJ=s((gye,UJ)=>{"use strict";var iJr=VJ(),nJr=Cn();function aJr(r){return iJr(r)?NaN:nJr(r+1)}UJ.exports=aJr});var WJ=s((mye,HJ)=>{"use strict";var sJr=GJ();HJ.exports=sJr});var XJ=s((dye,zJ)=>{"use strict";var uJr=WJ(),xJ=J(),oJr=z0(),vJr=U(),DJ=Y(),eu=P(),fJr=x1(),cJr=1/12,lJr=1/360;function pJr(r,e){var t,i,n,a,u,o,f,v,c,l;for(t=vJr(e),f=2.53*t+.931,o=.02483*f-.059,i=1.1328/(f-3.4)+1.1239,u=-3.6224/(f-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-DJ(c))+f,c+=e+.445,xJ(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=oJr(c)*.5-c,l=u*r()),a=.5-DJ(c),(a>=.013||a>=l)&&(v=xJ((2*o/a+f)*c+e+.445),l*=i/(o/(a*a)+f),c=(v+.5)*eu(e/v),c+=-e-fJr+v,c-=(cJr-lJr/(v*v))/v,v>=10&&c>=eu(l*t)||(c=v*eu(e)-e-uJr(v),v>=0&&v<=9&&c>=eu(l))))return v}}zJ.exports=pJr});var YJ=s((hye,JJ)=>{"use strict";var gJr=BJ(),mJr=XJ();function dJr(r,e){return e<30?gJr(r,e):mJr(r,e)}JJ.exports=dJr});var kv=s((qye,tY)=>{"use strict";var Ce=b(),tu=R(),ZJ=M(),hJr=D().isPrimitive,$J=L(),QJ=_(),KJ=A(),rY=T(),qJr=C(),iu=X().factory,yJr=E(),bJr=B(),nu=y(),eY=YJ();function wJr(){var r,e,t,i;if(arguments.length===0)t=iu();else if(arguments.length===1&&$J(arguments[0]))if(e=arguments[0],KJ(e,"prng")){if(!QJ(e.prng))throw new TypeError(nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=iu(e);else{if(r=arguments[0],!hJr(r))throw new TypeError(nu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!$J(e))throw new TypeError(nu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(KJ(e,"prng")){if(!QJ(e.prng))throw new TypeError(nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=iu(e)}else t=iu()}return r===void 0?i=p:i=l,Ce(i,"NAME","poisson"),e&&e.prng?(Ce(i,"seed",null),Ce(i,"seedLength",null),ZJ(i,"state",rY(null),qJr),Ce(i,"stateLength",null),Ce(i,"byteLength",null),Ce(i,"toJSON",rY(null)),Ce(i,"PRNG",t)):(tu(i,"seed",n),tu(i,"seedLength",a),ZJ(i,"state",f,v),tu(i,"stateLength",u),tu(i,"byteLength",o),Ce(i,"toJSON",c),Ce(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=bJr(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return eY(t,r)}function p(g){return yJr(g)||g<=0?NaN:eY(t,g)}}tY.exports=wJr});var nY=s((yye,iY)=>{"use strict";var EJr=kv(),NJr=EJr();iY.exports=NJr});var jv=s((bye,sY)=>{"use strict";var OJr=b(),aY=nY(),AJr=kv();OJr(aY,"factory",AJr);sY.exports=aY});var oY=s((wye,uY)=>{"use strict";var SJr=D().isPrimitive,TJr=j().isPrimitive,Cv=y(),_Jr=vr();function IJr(r,e){return SJr(r)?!TJr(e)||_Jr(e)?new TypeError(Cv("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Cv("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Cv("invalid argument. First argument must be a positive number. Value: `%s`.",r))}uY.exports=IJr});var Hv=s((Eye,dY)=>{"use strict";var Tt=b(),au=R(),vY=M(),Ji=A(),fY=L(),Vv=ve(),cY=gr().isPrimitive,lY=_(),pY=T(),LJr=C(),gY=E(),Yi=jv().factory,su=ki().factory,Uv=ot(),Gv=lr(),mY=Jn(),RJr=B(),Ve=y(),PJr=oY();function FJr(){var r,e,t,i,n,a,u,o,f,v;if(u=!0,arguments.length===0)i={copy:!1},t=Yi(i);else if(arguments.length===1){if(i=arguments[0],!fY(i))throw new TypeError(Ve("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ji(i,"copy")&&!cY(i.copy))throw new TypeError(Ve("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ji(i,"prng")){if(!lY(i.prng))throw new TypeError(Ve("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Yi({prng:i.prng})}else{if(Ji(i,"state")&&!Vv(i.state))throw new TypeError(Ve("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=mY({},i),i.copy===!1?u=!1:i.state&&(i.state=Uv(i.state.length,i.state,1,new Gv(i.state.length),1)),i.copy=!1,t=Yi(i)}}else{if(v=arguments[0],f=arguments[1],o=PJr(v,f),o)throw o;if(arguments.length>2){if(i=arguments[2],!fY(i))throw new TypeError(Ve("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ji(i,"copy")&&!cY(i.copy))throw new TypeError(Ve("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ji(i,"prng")){if(!lY(i.prng))throw new TypeError(Ve("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Yi({prng:i.prng})}else{if(Ji(i,"state")&&!Vv(i.state))throw new TypeError(Ve("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=mY({},i),i.copy===!1?u=!1:i.state&&(i.state=Uv(i.state.length,i.state,1,new Gv(i.state.length),1)),i.copy=!1,t=Yi(i)}}else i={copy:!1},t=Yi(i)}return i&&i.prng?v===void 0?r=su({prng:i.prng}):r=su(v,f/(1-f),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),v===void 0?r=su({state:e,copy:!1}):r=su(v,f/(1-f),{state:e,copy:!1})),v===void 0?n=N:n=q,a=t.PRNG,Tt(n,"NAME","negative-binomial"),i&&i.prng?(Tt(n,"seed",null),Tt(n,"seedLength",null),vY(n,"state",pY(null),LJr),Tt(n,"stateLength",null),Tt(n,"byteLength",null),Tt(n,"toJSON",pY(null))):(au(n,"seed",c),au(n,"seedLength",l),vY(n,"state",h,d),au(n,"stateLength",p),au(n,"byteLength",g),Tt(n,"toJSON",m)),Tt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function g(){return a.byteLength}function h(){return a.state}function d(O){if(!Vv(O))throw new TypeError(Ve("invalid argument. Must provide a Uint32Array. Value: `%s`.",O));u&&(O=Uv(O.length,O,1,new Gv(O.length),1)),a.state=O}function m(){var O={};return O.type="PRNG",O.name=n.NAME,O.state=RJr(a.state),v===void 0?O.params=[]:O.params=[v,f],O}function q(){return t(r())}function N(O,F){return gY(O)||gY(F)||F<=0||F>=1?NaN:t(r(O,F/(1-F)))}}dY.exports=FJr});var qY=s((Nye,hY)=>{"use strict";var MJr=Hv(),BJr=MJr();hY.exports=BJr});var wY=s((Oye,bY)=>{"use strict";var kJr=b(),yY=qY(),jJr=Hv();kJr(yY,"factory",jJr);bY.exports=yY});var OY=s((Aye,NY)=>{"use strict";var CJr=j().isPrimitive,VJr=D().isPrimitive,EY=y(),UJr=vr();function GJr(r,e){return!CJr(r)||UJr(r)?new TypeError(EY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):VJr(e)?null:new TypeError(EY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}NY.exports=GJr});var SY=s((Sye,AY)=>{"use strict";function HJr(r,e,t){return e+t*r()}AY.exports=HJr});var Wv=s((Tye,MY)=>{"use strict";var _t=b(),uu=R(),TY=M(),_Y=L(),IY=_(),LY=A(),RY=T(),WJr=C(),Zi=pt().factory,PY=E(),xJr=B(),ou=y(),DJr=OY(),FY=SY();function zJr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Zi();else if(arguments.length===1){if(t=arguments[0],!_Y(t))throw new TypeError(ou("invalid argument. Options argument must be an object. Value: `%s`.",t));if(LY(t,"prng")){if(!IY(t.prng))throw new TypeError(ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Zi({prng:t.prng})}else e=Zi(t)}else{if(u=arguments[0],r=arguments[1],a=DJr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!_Y(t))throw new TypeError(ou("invalid argument. Options argument must be an object. Value: `%s`.",t));if(LY(t,"prng")){if(!IY(t.prng))throw new TypeError(ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Zi({prng:t.prng})}else e=Zi(t)}else e=Zi()}return u===void 0?n=d:n=h,i=e.PRNG,_t(n,"NAME","normal"),t&&t.prng?(_t(n,"seed",null),_t(n,"seedLength",null),TY(n,"state",RY(null),WJr),_t(n,"stateLength",null),_t(n,"byteLength",null),_t(n,"toJSON",RY(null))):(uu(n,"seed",o),uu(n,"seedLength",f),TY(n,"state",l,p),uu(n,"stateLength",v),uu(n,"byteLength",c),_t(n,"toJSON",g)),_t(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=xJr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return FY(e,u,r)}function d(m,q){return PY(m)||PY(q)||q<=0?NaN:FY(e,m,q)}}MY.exports=zJr});var kY=s((_ye,BY)=>{"use strict";var XJr=Wv(),JJr=XJr();BY.exports=JJr});var VY=s((Iye,CY)=>{"use strict";var YJr=b(),jY=kY(),ZJr=Wv();YJr(jY,"factory",ZJr);CY.exports=jY});var WY=s((Lye,HY)=>{"use strict";var UY=D().isPrimitive,GY=y();function $Jr(r,e){return UY(r)?UY(e)?null:new TypeError(GY("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(GY("invalid argument. First argument must be a positive number. Value: `%s`.",r))}HY.exports=$Jr});var DY=s((Rye,xY)=>{"use strict";var QJr=W();function KJr(r,e,t){return t/QJr(r(),1/e)}xY.exports=KJr});var xv=s((Pye,KY)=>{"use strict";var Ue=b(),vu=R(),zY=M(),XY=L(),JY=_(),YY=A(),ZY=T(),rYr=C(),fu=X().factory,$Y=E(),eYr=B(),cu=y(),tYr=WY(),QY=DY();function iYr(){var r,e,t,i,n,a;if(arguments.length===0)i=fu();else if(arguments.length===1){if(t=arguments[0],!XY(t))throw new TypeError(cu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(YY(t,"prng")){if(!JY(t.prng))throw new TypeError(cu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=fu(t)}else{if(r=arguments[0],e=arguments[1],a=tYr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!XY(t))throw new TypeError(cu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(YY(t,"prng")){if(!JY(t.prng))throw new TypeError(cu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=fu(t)}else i=fu()}return r===void 0?n=h:n=g,Ue(n,"NAME","pareto-type1"),t&&t.prng?(Ue(n,"seed",null),Ue(n,"seedLength",null),zY(n,"state",ZY(null),rYr),Ue(n,"stateLength",null),Ue(n,"byteLength",null),Ue(n,"toJSON",ZY(null)),Ue(n,"PRNG",i)):(vu(n,"seed",u),vu(n,"seedLength",o),zY(n,"state",c,l),vu(n,"stateLength",f),vu(n,"byteLength",v),Ue(n,"toJSON",p),Ue(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function f(){return i.stateLength}function v(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=eYr(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function g(){return QY(i,r,e)}function h(d,m){return $Y(d)||$Y(m)||d<=0||m<=0?NaN:QY(i,d,m)}}KY.exports=iYr});var eZ=s((Fye,rZ)=>{"use strict";var nYr=xv(),aYr=nYr();rZ.exports=aYr});var nZ=s((Mye,iZ)=>{"use strict";var sYr=b(),tZ=eZ(),uYr=xv();sYr(tZ,"factory",uYr);iZ.exports=tZ});var sZ=s((Bye,aZ)=>{"use strict";var oYr=U(),vYr=P();function fYr(r,e){return e*oYr(-2*vYr(r()))}aZ.exports=fYr});var Dv=s((kye,pZ)=>{"use strict";var Ge=b(),lu=R(),uZ=M(),cYr=D().isPrimitive,oZ=L(),vZ=_(),fZ=A(),cZ=T(),lYr=C(),pu=X().factory,pYr=E(),gYr=B(),gu=y(),lZ=sZ();function mYr(){var r,e,t,i;if(arguments.length===0)t=pu();else if(arguments.length===1&&oZ(arguments[0]))if(e=arguments[0],fZ(e,"prng")){if(!vZ(e.prng))throw new TypeError(gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=pu(e);else{if(r=arguments[0],!cYr(r))throw new TypeError(gu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!oZ(e))throw new TypeError(gu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(fZ(e,"prng")){if(!vZ(e.prng))throw new TypeError(gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=pu(e)}else t=pu()}return r===void 0?i=p:i=l,Ge(i,"NAME","rayleigh"),e&&e.prng?(Ge(i,"seed",null),Ge(i,"seedLength",null),uZ(i,"state",cZ(null),lYr),Ge(i,"stateLength",null),Ge(i,"byteLength",null),Ge(i,"toJSON",cZ(null)),Ge(i,"PRNG",t)):(lu(i,"seed",n),lu(i,"seedLength",a),uZ(i,"state",f,v),lu(i,"stateLength",u),lu(i,"byteLength",o),Ge(i,"toJSON",c),Ge(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=gYr(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return lZ(t,r)}function p(g){return pYr(g)||g<=0?NaN:lZ(t,g)}}pZ.exports=mYr});var mZ=s((jye,gZ)=>{"use strict";var dYr=Dv(),hYr=dYr();gZ.exports=hYr});var qZ=s((Cye,hZ)=>{"use strict";var qYr=b(),dZ=mZ(),yYr=Dv();qYr(dZ,"factory",yYr);hZ.exports=dZ});var Yv=s((Vye,TZ)=>{"use strict";var It=b(),mu=R(),yZ=M(),$i=A(),bZ=D().isPrimitive,wZ=L(),zv=ve(),EZ=gr().isPrimitive,bYr=E(),NZ=_(),OZ=T(),wYr=C(),du=$n().factory,Qi=pt().factory,Xv=ot(),Jv=lr(),AZ=Jn(),EYr=B(),ae=y(),SZ=U();function NYr(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=Qi(n);else if(arguments.length===1)if(wZ(arguments[0])){if(n=arguments[0],$i(n,"copy")&&!EZ(n.copy))throw new TypeError(ae("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if($i(n,"prng")){if(!NZ(n.prng))throw new TypeError(ae("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Qi({prng:n.prng})}else{if($i(n,"state")&&!zv(n.state))throw new TypeError(ae("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=AZ({},n),n.copy===!1?u=!1:n.state&&(n.state=Xv(n.state.length,n.state,1,new Jv(n.state.length),1)),n.copy=!1,t=Qi(n)}}else{if(o=arguments[0],!bZ(o))throw new TypeError(ae("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=Qi(n)}else{if(o=arguments[0],!bZ(o))throw new TypeError(ae("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!wZ(n))throw new TypeError(ae("invalid argument. Options argument must be an object. Value: `%s`.",n));if($i(n,"copy")&&!EZ(n.copy))throw new TypeError(ae("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if($i(n,"prng")){if(!NZ(n.prng))throw new TypeError(ae("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Qi({prng:n.prng})}else{if($i(n,"state")&&!zv(n.state))throw new TypeError(ae("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=AZ({},n),n.copy===!1?u=!1:n.state&&(n.state=Xv(n.state.length,n.state,1,new Jv(n.state.length),1)),n.copy=!1,t=Qi(n)}}return n&&n.prng?o===void 0?r=du({prng:n.prng}):r=du(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=du({state:e,copy:!1}):r=du(o,{state:e,copy:!1})),o===void 0?a=m:a=d,i=t.PRNG,It(a,"NAME","t"),n&&n.prng?(It(a,"seed",null),It(a,"seedLength",null),yZ(a,"state",OZ(null),wYr),It(a,"stateLength",null),It(a,"byteLength",null),It(a,"toJSON",OZ(null))):(mu(a,"seed",f),mu(a,"seedLength",v),yZ(a,"state",p,g),mu(a,"stateLength",c),mu(a,"byteLength",l),It(a,"toJSON",h)),It(a,"PRNG",i),a;function f(){return i.seed}function v(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function g(q){if(!zv(q))throw new TypeError(ae("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));u&&(q=Xv(q.length,q,1,new Jv(q.length),1)),i.state=q}function h(){var q={};return q.type="PRNG",q.name=a.NAME,q.state=EYr(i.state),o===void 0?q.params=[]:q.params=[o],q}function d(){return t()/SZ(r()/o)}function m(q){return bYr(q)||q<=0?NaN:t()/SZ(r(q)/q)}}TZ.exports=NYr});var IZ=s((Uye,_Z)=>{"use strict";var OYr=Yv(),AYr=OYr();_Z.exports=AYr});var PZ=s((Gye,RZ)=>{"use strict";var SYr=b(),LZ=IZ(),TYr=Yv();SYr(LZ,"factory",TYr);RZ.exports=LZ});var MZ=s((Hye,FZ)=>{"use strict";var Zv=j().isPrimitive,hu=y(),$v=vr();function _Yr(r,e,t){return!Zv(r)||$v(r)?new TypeError(hu("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Zv(e)||$v(e)?new TypeError(hu("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Zv(t)||$v(t)?new TypeError(hu("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(hu("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}FZ.exports=_Yr});var jZ=s((Wye,kZ)=>{"use strict";var BZ=U();function IYr(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+BZ(a*u)):(a=(t-e)*(t-i),t-BZ(a*(1-u)))}kZ.exports=IYr});var Kv=s((xye,xZ)=>{"use strict";var He=b(),qu=R(),CZ=M(),VZ=L(),UZ=_(),GZ=A(),HZ=T(),LYr=C(),yu=X().factory,Qv=E(),RYr=B(),bu=y(),PYr=MZ(),WZ=jZ();function FYr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=yu();else if(arguments.length===1){if(r=arguments[0],!VZ(r))throw new TypeError(bu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(GZ(r,"prng")){if(!UZ(r.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=yu(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=PYr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!VZ(r))throw new TypeError(bu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(GZ(r,"prng")){if(!UZ(r.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=yu(r)}else e=yu()}return n===void 0?t=d:t=h,He(t,"NAME","triangular"),r&&r.prng?(He(t,"seed",null),He(t,"seedLength",null),CZ(t,"state",HZ(null),LYr),He(t,"stateLength",null),He(t,"byteLength",null),He(t,"toJSON",HZ(null)),He(t,"PRNG",e)):(qu(t,"seed",o),qu(t,"seedLength",f),CZ(t,"state",l,p),qu(t,"stateLength",v),qu(t,"byteLength",c),He(t,"toJSON",g),He(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=RYr(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return WZ(e,n,a,u)}function d(m,q,N){return Qv(m)||Qv(q)||Qv(N)||!(m<=N&&N<=q)?NaN:WZ(e,m,q,N)}}xZ.exports=FYr});var zZ=s((Dye,DZ)=>{"use strict";var MYr=Kv(),BYr=MYr();DZ.exports=BYr});var YZ=s((zye,JZ)=>{"use strict";var kYr=b(),XZ=zZ(),jYr=Kv();kYr(XZ,"factory",jYr);JZ.exports=XZ});var KZ=s((Xye,QZ)=>{"use strict";var ZZ=j().isPrimitive,rf=y(),$Z=vr();function CYr(r,e){return!ZZ(r)||$Z(r)?new TypeError(rf("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!ZZ(e)||$Z(e)?new TypeError(rf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(rf("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}QZ.exports=CYr});var e$=s((Jye,r$)=>{"use strict";function VYr(r,e,t){var i=r();return t*i+(1-i)*e}r$.exports=VYr});var ef=s((Yye,v$)=>{"use strict";var We=b(),wu=R(),t$=M(),i$=L(),n$=_(),a$=A(),s$=T(),UYr=C(),Eu=X().factory,u$=E(),GYr=B(),Nu=y(),HYr=KZ(),o$=e$();function WYr(){var r,e,t,i,n,a;if(arguments.length===0)e=Eu();else if(arguments.length===1){if(r=arguments[0],!i$(r))throw new TypeError(Nu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(a$(r,"prng")){if(!n$(r.prng))throw new TypeError(Nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Eu(r)}else{if(n=arguments[0],a=arguments[1],i=HYr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!i$(r))throw new TypeError(Nu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(a$(r,"prng")){if(!n$(r.prng))throw new TypeError(Nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Eu(r)}else e=Eu()}return n===void 0?t=h:t=g,We(t,"NAME","uniform"),r&&r.prng?(We(t,"seed",null),We(t,"seedLength",null),t$(t,"state",s$(null),UYr),We(t,"stateLength",null),We(t,"byteLength",null),We(t,"toJSON",s$(null)),We(t,"PRNG",e)):(wu(t,"seed",u),wu(t,"seedLength",o),t$(t,"state",c,l),wu(t,"stateLength",f),wu(t,"byteLength",v),We(t,"toJSON",p),We(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=GYr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return o$(e,n,a)}function h(d,m){return u$(d)||u$(m)||d>=m?NaN:o$(e,d,m)}}v$.exports=WYr});var c$=s((Zye,f$)=>{"use strict";var xYr=ef(),DYr=xYr();f$.exports=DYr});var g$=s(($ye,p$)=>{"use strict";var zYr=b(),l$=c$(),XYr=ef();zYr(l$,"factory",XYr);p$.exports=l$});var q$=s((Qye,h$)=>{"use strict";var m$=D().isPrimitive,d$=y();function JYr(r,e){return m$(r)?m$(e)?null:new TypeError(d$("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(d$("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}h$.exports=JYr});var b$=s((Kye,y$)=>{"use strict";var YYr=W(),ZYr=P();function $Yr(r,e,t){return t*YYr(-ZYr(1-r()),1/e)}y$.exports=$Yr});var tf=s((rbe,_$)=>{"use strict";var xe=b(),Ou=R(),w$=M(),E$=L(),N$=_(),O$=A(),A$=T(),QYr=C(),Au=X().factory,S$=E(),KYr=B(),Su=y(),rZr=q$(),T$=b$();function eZr(){var r,e,t,i,n,a;if(arguments.length===0)t=Au();else if(arguments.length===1){if(e=arguments[0],!E$(e))throw new TypeError(Su("invalid argument. Options argument must be an object. Value: `%s`.",e));if(O$(e,"prng")){if(!N$(e.prng))throw new TypeError(Su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Au(e)}else{if(a=arguments[0],r=arguments[1],n=rZr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!E$(e))throw new TypeError(Su("invalid argument. Options argument must be an object. Value: `%s`.",e));if(O$(e,"prng")){if(!N$(e.prng))throw new TypeError(Su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Au(e)}else t=Au()}return r===void 0?i=h:i=g,xe(i,"NAME","weibull"),e&&e.prng?(xe(i,"seed",null),xe(i,"seedLength",null),w$(i,"state",A$(null),QYr),xe(i,"stateLength",null),xe(i,"byteLength",null),xe(i,"toJSON",A$(null)),xe(i,"PRNG",t)):(Ou(i,"seed",u),Ou(i,"seedLength",o),w$(i,"state",c,l),Ou(i,"stateLength",f),Ou(i,"byteLength",v),xe(i,"toJSON",p),xe(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=KYr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return T$(t,a,r)}function h(d,m){return S$(d)||S$(m)||d<=0||m<=0?NaN:T$(t,d,m)}}_$.exports=eZr});var L$=s((ebe,I$)=>{"use strict";var tZr=tf(),iZr=tZr();I$.exports=iZr});var F$=s((tbe,P$)=>{"use strict";var nZr=b(),R$=L$(),aZr=tf();nZr(R$,"factory",aZr);P$.exports=R$});var B$=s((ibe,M$)=>{"use strict";var sZr=mr(),uZr=Rr().isPrimitive,oZr=y(),vZr=Yu();function fZr(r){if(uZr(r))return r;if(sZr(r))return vZr(r);throw new TypeError(oZr("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}M$.exports=fZr});var j$=s((nbe,k$)=>{"use strict";var cZr=B$();k$.exports=cZr});var V$=s((abe,C$)=>{"use strict";var k=rr(),lZr=Zj().factory,pZr=uC().factory,gZr=IV().factory,mZr=gU().factory,dZr=YU().factory,hZr=fG().factory,qZr=GG().factory,yZr=vH().factory,bZr=$n().factory,wZr=iW().factory,EZr=NW().factory,NZr=GW().factory,OZr=ex().factory,AZr=bx().factory,SZr=jx().factory,TZr=ki().factory,_Zr=Qx().factory,IZr=hD().factory,LZr=GD().factory,RZr=pt().factory,PZr=iz().factory,FZr=Nz().factory,MZr=Gz().factory,BZr=SX().factory,kZr=xX().factory,jZr=oJ().factory,CZr=yJ().factory,VZr=FJ().factory,UZr=X().factory,GZr=wY().factory,HZr=VY().factory,WZr=nZ().factory,xZr=jv().factory,DZr=qZ().factory,zZr=PZ().factory,XZr=YZ().factory,JZr=g$().factory,YZr=F$().factory,ZZr=j$();function $Zr(r){return k(r,"arcsine",lZr),k(r,"bernoulli",pZr),k(r,"beta",gZr),k(r,"betaprime",mZr),k(r,"binomial",dZr),k(r,"boxMuller",hZr),k(r,"cauchy",qZr),k(r,"chi",yZr),k(r,"chisquare",bZr),k(r,"cosine",wZr),k(r,"discreteUniform",EZr),k(r,"erlang",NZr),k(r,"exponential",OZr),k(r,"f",AZr),k(r,"frechet",SZr),k(r,"gamma",TZr),k(r,"geometric",_Zr),k(r,"gumbel",IZr),k(r,"hypergeometric",LZr),k(r,"improvedZiggurat",RZr),k(r,"invgamma",PZr),k(r,"kumaraswamy",FZr),k(r,"laplace",MZr),k(r,"levy",BZr),k(r,"logistic",kZr),k(r,"lognormal",jZr),k(r,"minstd",CZr),k(r,"minstdShuffle",VZr),k(r,"mt19937",UZr),k(r,"negativeBinomial",GZr),k(r,"normal",HZr),k(r,"pareto1",WZr),k(r,"poisson",xZr),k(r,"rayleigh",DZr),k(r,"t",zZr),k(r,"triangular",XZr),k(r,"uniform",JZr),k(r,"weibull",YZr),r.base={},k(r.base,"normalizeSeed",ZZr),r}C$.exports=$Zr});var G$=s((sbe,U$)=>{"use strict";var QZr=L(),Tu=A(),KZr=Rr().isPrimitive,r$r=re().isPrimitive,e$r=jr().isPrimitive,t$r=Ba().isPrimitive,ta=y();function i$r(r,e){return QZr(e)?Tu(e,"period")&&(r.period=e.period,!r$r(e.period))?new TypeError(ta("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):Tu(e,"amplitude")&&(r.amplitude=e.amplitude,!t$r(e.amplitude))?new TypeError(ta("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):Tu(e,"offset")&&(r.offset=e.offset,!KZr(e.offset))?new TypeError(ta("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):Tu(e,"iter")&&(r.iter=e.iter,!e$r(e.iter))?new TypeError(ta("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(ta("invalid argument. Options argument must be an object. Value: `%s`.",e))}U$.exports=i$r});var D$=s((ube,x$)=>{"use strict";var nf=b(),H$=ba(),n$r=z3(),a$r=v0(),s$r=o0(),u$r=kr(),o$r=G$();function W$(r){var e,t,i,n,a,u,o,f;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=o$r(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=u$r/e.period,o=e.amplitude/s$r,f=0,t={},nf(t,"next",v),nf(t,"return",c),H$&&nf(t,H$,l),t;function v(){return f+=1,i||f>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*a$r(n$r(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return W$(e)}}x$.exports=W$});var X$=s((obe,z$)=>{"use strict";var v$r=D$();z$.exports=v$r});var Y$=s((vbe,J$)=>{"use strict";var f$r=rr(),c$r=X$();function l$r(r){return f$r(r,"iterSawtoothWave",c$r),r}J$.exports=l$r});var $$=s((fbe,Z$)=>{"use strict";var p$r=17976931348623157e292;Z$.exports=p$r});var _u=s((cbe,Q$)=>{"use strict";var g$r=709.782712893384;Q$.exports=g$r});var rQ=s((lbe,K$)=>{"use strict";var m$r=sr();function d$r(r,e){var t,i,n,a;if(n=m$r(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}K$.exports=d$r});var tQ=s((pbe,eQ)=>{"use strict";function h$r(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}eQ.exports=h$r});var nQ=s((gbe,iQ)=>{"use strict";function q$r(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}iQ.exports=q$r});var sQ=s((mbe,aQ)=>{"use strict";function y$r(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}aQ.exports=y$r});var oQ=s((dbe,uQ)=>{"use strict";function b$r(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}uQ.exports=b$r});var fQ=s((hbe,vQ)=>{"use strict";function w$r(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}vQ.exports=w$r});var lQ=s((qbe,cQ)=>{"use strict";function E$r(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}cQ.exports=E$r});var gQ=s((ybe,pQ)=>{"use strict";function N$r(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}pQ.exports=N$r});var dQ=s((bbe,mQ)=>{"use strict";function O$r(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}mQ.exports=O$r});var bQ=s((wbe,yQ)=>{"use strict";var A$r=E(),hQ=sr(),S$r=ce(),T$r=I(),_$r=V(),I$r=tQ(),L$r=nQ(),R$r=sQ(),P$r=oQ(),F$r=fQ(),M$r=lQ(),B$r=gQ(),k$r=dQ(),Iu=1e-300,j$r=13877787807814457e-33,qQ=.8450629115104675,C$r=.12837916709551256,V$r=1,U$r=-.0023621185607526594,G$r=1,H$r=-.009864944034847148,W$r=1,x$r=-.0098649429247001,D$r=1;function z$r(r){var e,t,i,n,a,u,o,f;if(A$r(r))return NaN;if(r===T$r)return 0;if(r===_$r)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<j$r?1-r:(i=r*r,n=C$r+i*I$r(i),a=V$r+i*L$r(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=U$r+a*R$r(a),f=G$r+a*P$r(a),e?1+qQ+o/f:1-qQ-o/f;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=H$r+a*F$r(a),a=W$r+a*M$r(a);else{if(r<-6)return 2-Iu;n=x$r+a*B$r(a),a=D$r+a*k$r(a)}return i=S$r(t,0),n=hQ(-(i*i)-.5625)*hQ((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-Iu:Iu*Iu}yQ.exports=z$r});var Zt=s((Ebe,wQ)=>{"use strict";var X$r=bQ();wQ.exports=X$r});var OQ=s((Nbe,NQ)=>{"use strict";var J$r=Zt(),EQ=U(),Y$r=sr(),Z$r=kr();function $$r(r,e){var t,i,n,a,u;if(a=J$r(EQ(e)),a!==0&&r>1){for(i=Y$r(-e)/EQ(Z$r*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}NQ.exports=$$r});var af=s((Obe,AQ)=>{"use strict";var Q$r=-708.3964185322641;AQ.exports=Q$r});var IQ=s((Abe,_Q)=>{"use strict";var Ki=sr(),Lu=W(),K$r=P(),SQ=_u(),TQ=af();function rQr(r,e){var t,i;return i=r*K$r(e),e>=1?i<SQ&&-e>TQ?t=Lu(e,r)*Ki(-e):r>=1?t=Lu(e/Ki(e/r),r):t=Ki(i-e):i>TQ?t=Lu(e,r)*Ki(-e):e/r<SQ?t=Lu(e/Ki(e/r),r):t=Ki(i-e),t}_Q.exports=rQr});var sf=s((Sbe,LQ)=>{"use strict";function eQr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}LQ.exports=eQr});var PQ=s((Tbe,RQ)=>{"use strict";var tQr=Function;RQ.exports=tQr});var MQ=s((_be,FQ)=>{"use strict";var iQr=PQ();FQ.exports=iQr});var kQ=s((Ibe,BQ)=>{"use strict";var nQr=MQ(),aQr=sf();function sQr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new nQr(e)();function a(u){return aQr(r,u)}}BQ.exports=sQr});var VQ=s((Lbe,CQ)=>{"use strict";var uQr=b(),jQ=sf(),oQr=kQ();uQr(jQ,"factory",oQr);CQ.exports=jQ});var $t=s((Rbe,UQ)=>{"use strict";var vQr=2220446049250313e-31;UQ.exports=vQr});var HQ=s((Pbe,GQ)=>{"use strict";var fQr=eval;GQ.exports=fQr});var xQ=s((Fbe,WQ)=>{"use strict";var cQr=HQ();function lQr(){var r;try{cQr('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}WQ.exports=lQr});var uf=s((Mbe,DQ)=>{"use strict";var pQr=xQ();DQ.exports=pQr});var XQ=s((Bbe,zQ)=>{"use strict";var Ru=Y(),gQr=$t(),mQr=1e6;function dQr(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||gQr,a=o.maxTerms||mQr,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,Ru(i*u)>=Ru(n)||--a===0)break}else do n=r(),u+=n;while(Ru(i*u)<Ru(n)&&--a);return u}zQ.exports=dQr});var ZQ=s((kbe,YQ)=>{"use strict";var JQ=Y(),hQr=$t(),qQr=1e6;function yQr(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||hQr,n=u.maxTerms||qQr,a=u.initialValue||0;do i=r(),a+=i;while(JQ(t*a)<JQ(i)&&--n);return a}YQ.exports=yQr});var Pu=s((jbe,$Q)=>{"use strict";var bQr=uf(),wQr=XQ(),EQr=ZQ(),of;bQr()?of=wQr:of=EQr;$Q.exports=of});var KQ=s((Cbe,QQ)=>{"use strict";function NQr(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}QQ.exports=NQr});var eK=s((Vbe,rK)=>{"use strict";var OQr=Y(),AQr=P(),SQr=$t(),TQr=Pu(),_Qr=KQ();function IQr(r){var e,t;return r<=-1?NaN:(t=OQr(r),t>.95?AQr(1+r)-r:t<SQr?-r*r/2:(e={initialValue:-r},TQr(_Qr(r),e)))}rK.exports=IQr});var iK=s((Ube,tK)=>{"use strict";var LQr=eK();tK.exports=LQr});var aK=s((Gbe,nK)=>{"use strict";function RQr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}nK.exports=RQr});var uK=s((Hbe,sK)=>{"use strict";function PQr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}sK.exports=PQr});var vK=s((Wbe,oK)=>{"use strict";function FQr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}oK.exports=FQr});var cK=s((xbe,fK)=>{"use strict";function MQr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}fK.exports=MQr});var pK=s((Dbe,lK)=>{"use strict";function BQr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}lK.exports=BQr});var mK=s((zbe,gK)=>{"use strict";function kQr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}gK.exports=kQr});var hK=s((Xbe,dK)=>{"use strict";function jQr(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}dK.exports=jQr});var yK=s((Jbe,qK)=>{"use strict";function CQr(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}qK.exports=CQr});var wK=s((Ybe,bK)=>{"use strict";function VQr(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}bK.exports=VQr});var NK=s((Zbe,EK)=>{"use strict";var UQr=VQ(),GQr=iK(),HQr=Zt(),vf=U(),WQr=sr(),xQr=it(),DQr=aK(),zQr=uK(),XQr=vK(),JQr=cK(),YQr=pK(),ZQr=mK(),$Qr=hK(),QQr=yK(),KQr=wK(),Jr=[0,0,0,0,0,0,0,0,0,0];function rKr(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-GQr(i),a=r*n,u=vf(2*n),e<r&&(u=-u),Jr[0]=DQr(u),Jr[1]=zQr(u),Jr[2]=XQr(u),Jr[3]=JQr(u),Jr[4]=YQr(u),Jr[5]=ZQr(u),Jr[6]=$Qr(u),Jr[7]=QQr(u),Jr[8]=KQr(u),Jr[9]=-.0005967612901927463,t=UQr(Jr,1/r),t*=WQr(-a)/vf(xQr*r),e<r&&(t=-t),t+=HQr(vf(a))/2,t}EK.exports=rKr});var AK=s(($be,OK)=>{"use strict";function eKr(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}OK.exports=eKr});var TK=s((Qbe,SK)=>{"use strict";var tKr=Pu(),iKr=AK();function nKr(r,e,t){var i,n;return t=t||0,n=iKr(r,e),i=tKr(n,{initialValue:t}),i}SK.exports=nKr});var IK=s((Kbe,_K)=>{"use strict";function aKr(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}_K.exports=aKr});var RK=s((rwe,LK)=>{"use strict";var sKr=IK();LK.exports=sKr});var FK=s((ewe,PK)=>{"use strict";var uKr=RK();PK.exports=uKr});var kK=s((twe,BK)=>{"use strict";var oKr=V1(),MK=E(),ff=V();function vKr(r,e){return MK(r)||MK(e)?NaN:r===ff||e===ff?ff:r===e&&r===0?oKr(r)?r:e:r<e?r:e}BK.exports=vKr});var CK=s((iwe,jK)=>{"use strict";var fKr=kK();jK.exports=fKr});var UK=s((nwe,VK)=>{"use strict";var cKr=10.900511;VK.exports=cKr});var cf=s((awe,GK)=>{"use strict";var lKr=2.718281828459045;GK.exports=lKr});var xK=s((swe,WK)=>{"use strict";var pKr=FK(),gKr=Cn(),mKr=Li(),dKr=et(),hKr=U(),qKr=Y(),Lt=sr(),ia=W(),lf=o3(),pf=CK(),HK=P(),Fu=_u(),na=af(),gf=UK(),yKr=cf();function bKr(r,e){var t,i,n,a,u,o,f;return n=r+gf-.5,f=(e-r-gf+.5)/n,r<1?e<=na?Lt(r*HK(e)-e-gKr(r)):ia(e,r)*Lt(-e)/mKr(r):(qKr(f*f*r)<=100&&r>150?(t=r*(dKr(f)-f)+e*(.5-gf)/n,t=Lt(t)):(a=r*HK(e/n),u=r-e,pf(a,u)<=na||lf(a,u)>=Fu?(i=u/r,pf(a,u)/2>na&&lf(a,u)/2<Fu?(o=ia(e/n,r/2)*Lt(u/2),t=o*o):pf(a,u)/4>na&&lf(a,u)/4<Fu&&e>r?(o=ia(e/n,r/4)*Lt(u/4),t=o*o,t*=t):i>na&&i<Fu?t=ia(e*Lt(i)/n,r):t=Lt(a+u)):t=ia(e/n,r)*Lt(u)),t*=hKr(n/yKr)/pKr(r),t)}WK.exports=bKr});var zK=s((uwe,DK)=>{"use strict";var wKr=.34657359027997264;DK.exports=wKr});var JK=s((owe,XK)=>{"use strict";function EKr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}XK.exports=EKr});var rrr=s((vwe,KK)=>{"use strict";var NKr=E(),YK=ar(),mf=le(),OKr=_i(),ZK=I(),AKr=V(),$K=ne(),SKr=zK(),TKr=JK(),_Kr=709.782712893384,df=.6931471803691238,hf=19082149292705877e-26,QK=1.4426950408889634,IKr=38.816242111356935,LKr=1.0397207708399179;function RKr(r){var e,t,i,n,a,u,o,f,v,c,l,p,g;if(r===ZK||NKr(r))return r;if(r===AKr)return-1;if(r===0)return r;if(r<0?(i=!0,f=-r):(i=!1,f=r),f>=IKr){if(i)return-1;if(f>=_Kr)return ZK}if(u=YK(f)|0,f>SKr)f<LKr?i?(n=r+df,a=-hf,g=-1):(n=r-df,a=hf,g=1):(i?g=QK*r-.5:g=QK*r+.5,g|=0,l=g,n=r-l*df,a=l*hf),r=n-a,c=n-r-a;else{if(u<1016070144)return r;g=0}return e=.5*r,v=r*e,o=1+v*TKr(v),l=3-o*e,p=v*((o-l)/(6-r*l)),g===0?r-(r*p-v):(t=OKr($K+g<<20,0),p=r*(p-c)-c,p-=v,g===-1?.5*(r-p)-.5:g===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):g<=-2||g>56?(f=1-(p-r),g===1024?(n=YK(f)+(g<<20)|0,f=mf(f,n)):f*=t,f-1):(l=1,g<20?(n=1072693248-(2097152>>g)|0,l=mf(l,n),f=l-(p-r)):(n=$K-g<<20|0,l=mf(l,n),f=r-(p+l),f+=1),f*=t,f))}KK.exports=RKr});var qf=s((fwe,err)=>{"use strict";var PKr=rrr();err.exports=PKr});var arr=s((cwe,nrr)=>{"use strict";var trr=E(),irr=Y(),FKr=qf(),MKr=P(),BKr=W(),kKr=y0();function jKr(r,e){var t;if(trr(r)||trr(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((irr(e*(r-1))<.5||irr(e)<.2)&&(t=MKr(r)*e,t<.5))return FKr(t)}else if(kKr(e)!==e)return NaN;return BKr(r,e)-1}nrr.exports=jKr});var urr=s((lwe,srr)=>{"use strict";var CKr=arr();srr.exports=CKr});var vrr=s((pwe,orr)=>{"use strict";function VKr(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}orr.exports=VKr});var crr=s((gwe,frr)=>{"use strict";function UKr(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}frr.exports=UKr});var prr=s((mwe,lrr)=>{"use strict";function GKr(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}lrr.exports=GKr});var mrr=s((dwe,grr)=>{"use strict";var yf=P(),HKr=$t(),WKr=vrr(),xKr=crr(),DKr=prr(),zKr=.15896368026733398,XKr=.5281534194946289,JKr=.45201730728149414;function YKr(r,e,t){var i,n,a,u;if(r<HKr)return-yf(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=yf(r);while(r>=3);t=r-2}return a=t*(r+1),u=WKr(t),n+=a*zKr+a*u,n}return r<1&&(n+=-yf(r),t=e,e=r,r+=1),r<=1.5?(a=xKr(e),i=e*t,n+=i*XKr+i*a,n):(a=t*e,u=DKr(-t),n+=a*JKr+a*u,n)}grr.exports=YKr});var brr=s((hwe,yrr)=>{"use strict";var drr=Li(),hrr=qf(),ZKr=et(),$Kr=E(),qrr=mrr();function QKr(r){return $Kr(r)?NaN:r<0?r<-.5?drr(1+r)-1:hrr(-ZKr(r)+qrr(r+2,r+1,r)):r<2?hrr(qrr(r+1,r,r-1)):drr(1+r)-1}yrr.exports=QKr});var Err=s((qwe,wrr)=>{"use strict";var KKr=brr();wrr.exports=KKr});var Orr=s((ywe,Nrr)=>{"use strict";function rre(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}Nrr.exports=rre});var Srr=s((bwe,Arr)=>{"use strict";var ere=urr(),tre=Pu(),ire=Err(),nre=Orr();function are(r,e,t){var i,n,a,u,o;return n=ire(r),a=(n+1)/r,u=ere(e,r),n-=u,n/=r,o=nre(r,e),u+=1,i=t?a:0,n=-u*tre(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}Arr.exports=are});var bf=s((wwe,Trr)=>{"use strict";var sre=11754943508222875e-54;Trr.exports=sre});var Irr=s((Ewe,_rr)=>{"use strict";var Mu=Y(),se=bf(),ure=$t(),ore=1e6;function vre(r,e,t){var i,n,a,u,o,f,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),u=v[1],a=v[0],u===0&&(u=se),o=u,f=0,i===!0)do v=r.next().value,v&&(f=v[1]+v[0]*f,f===0&&(f=se),o=v[1]+v[0]/o,o===0&&(o=se),f=1/f,n=o*f,u*=n);while(Mu(n-1)>e&&--t);else do v=r(),v&&(f=v[1]+v[0]*f,f===0&&(f=se),o=v[1]+v[0]/o,o===0&&(o=se),f=1/f,n=o*f,u*=n);while(v&&Mu(n-1)>e&&--t);return a/u}function fre(r,e,t){var i,n,a,u,o,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),a=f[1],a===0&&(a=se),u=a,o=0,i===!0)do f=r.next().value,f&&(o=f[1]+f[0]*o,o===0&&(o=se),u=f[1]+f[0]/u,u===0&&(u=se),o=1/o,n=u*o,a*=n);while(f&&Mu(n-1)>e&&--t);else do f=r(),f&&(o=f[1]+f[0]*o,o===0&&(o=se),u=f[1]+f[0]/u,u===0&&(u=se),o=1/o,n=u*o,a*=n);while(f&&Mu(n-1)>e&&--t);return a}function cre(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||ore,n=i.tolerance||ure,i.keep?fre(r,n,t):vre(r,n,t)}_rr.exports=cre});var Prr=s((Nwe,Rrr)=>{"use strict";var Lrr=Y(),lre=$t(),rn=bf(),pre=1e6;function gre(r,e,t){var i,n,a,u,o,f;f=r(),o=f[1],n=f[0],o===0&&(o=rn),a=o,u=0;do f=r(),f&&(u=f[1]+f[0]*u,u===0&&(u=rn),a=f[1]+f[0]/a,a===0&&(a=rn),u=1/u,i=a*u,o*=i);while(f&&Lrr(i-1)>e&&--t);return n/o}function mre(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=rn),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=rn),n=o[1]+o[0]/n,n===0&&(n=rn),a=1/a,i=n*a,u*=i);while(o&&Lrr(i-1)>e&&--t);return u}function dre(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||lre,t=i.maxIter||pre,i.keep?mre(r,n,t):gre(r,n,t)}Rrr.exports=dre});var Mrr=s((Owe,Frr)=>{"use strict";var hre=uf(),qre=Irr(),yre=Prr(),wf;hre()?wf=qre:wf=yre;Frr.exports=wf});var krr=s((Awe,Brr)=>{"use strict";function bre(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}Brr.exports=bre});var Crr=s((Swe,jrr)=>{"use strict";var wre=Mrr(),Ere=krr();function Nre(r,e){var t=Ere(r,e);return 1/(e-r+1+wre(t))}jrr.exports=Nre});var Jrr=s((Twe,Xrr)=>{"use strict";var Ore=Cn(),Are=J(),aa=Li(),Vrr=Y(),Sre=sr(),Urr=W(),Yr=P(),Tre=W1(),Grr=$$(),_re=U1(),Hrr=_u(),Ire=I(),Lre=rQ(),Rre=OQ(),Wrr=IQ(),Pre=NK(),Ef=TK(),xrr=xK(),Fre=Srr(),Drr=Crr(),Mre=170;function zrr(r,e,t,i){var n,a,u,o,f,v,c,l,p,g,h,d,m,q,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=Mre&&!a)return l&&e*4<r?(p=e*Yr(r)-r,p+=Yr(Drr(e,r))):!l&&e>4*r?(p=e*Yr(r)-r,o=0,p+=Yr(Ef(e,r,o)/e)):(p=zrr(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Yr(p)-e+(e-.5)*Yr(e),p+=Yr(_re)):(p=e*Yr(r)-r,o=0,p+=Yr(Ef(e,r,o)/e)):p=Yr(p)+Ore(e)),p>Hrr?Ire:Sre(p);switch(c=e<30&&e<=r+1&&r<Hrr,c?(q=Are(e),g=q===e,f=g?!1:Vrr(q-e)===.5):g=f=!1,g&&r>.6?(l=!l,u=0):f&&r>.2?(l=!l,u=1):r<Tre&&e>1?u=6:r<.5?-.4/Yr(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(v=!1,a&&e>20&&(h=Vrr((r-e)/e),e>200?20/e>h*h&&(v=!0):h<.4&&(v=!0)),v?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=Lre(e,r),a===!1&&(p*=aa(e));break;case 1:p=Rre(e,r),a===!1&&(p*=aa(e));break;case 2:p=a?xrr(e,r):Wrr(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:aa(e),a||p>=1||Grr*p>o?(o/=p,a||e<1||Grr/e>o?(o*=-e,n=!0):o=0):o=0)),p*=Ef(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,m=Fre(e,r,l),p=m[0],N=m[1],l=!1,a&&(p/=N);break;case 4:p=a?xrr(e,r):Wrr(e,r),p!==0&&(p*=Drr(e,r));break;case 5:p=Pre(e,r),r>=e&&(l=!l);break;case 6:p=a?Urr(r,e)/aa(e+1):Urr(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:aa(e),p=d-p),p}Xrr.exports=zrr});var Nf=s((_we,Yrr)=>{"use strict";var Bre=Jrr();Yrr.exports=Bre});var $rr=s((Iwe,Zrr)=>{"use strict";var kre=Nf(),Of=E(),jre=I();function Cre(r,e,t){return Of(r)||Of(e)||Of(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===jre?1:kre(r*t,e)}Zrr.exports=Cre});var rer=s((Lwe,Krr)=>{"use strict";var Vre=T(),Ure=as().factory,Gre=Nf(),Qrr=E(),Hre=I();function Wre(r,e){if(Qrr(r)||Qrr(e)||r<0||e<=0)return Vre(NaN);if(r===0)return Ure(0);return t;function t(i){return i<=0?0:i===Hre?1:Gre(i*e,r)}}Krr.exports=Wre});var Af=s((Rwe,ter)=>{"use strict";var xre=b(),eer=$rr(),Dre=rer();xre(eer,"factory",Dre);ter.exports=eer});var ner=s((Pwe,ier)=>{"use strict";var zre=Af();function Xre(r,e){return zre(r,e/2,.5)}ier.exports=Xre});var ser=s((Fwe,aer)=>{"use strict";var Jre=Af().factory;function Yre(r){return Jre(r/2,.5)}aer.exports=Yre});var ver=s((Mwe,oer)=>{"use strict";var Zre=b(),uer=ner(),$re=ser();Zre(uer,"factory",$re);oer.exports=uer});var per=s((Bwe,ler)=>{"use strict";var Qre=L(),Kre=A(),ree=ka(),fer=y(),cer=["values","indices","*"];function eee(r,e){return Qre(e)?Kre(e,"returns")&&(r.returns=e.returns,ree(cer,r.returns)===-1)?new TypeError(fer('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",cer.join('", "'),r.returns)):null:new TypeError(fer("invalid argument. Options argument must be an object. Value: `%s`.",e))}ler.exports=eee});var mer=s((kwe,ger)=>{"use strict";var tee=A();function iee(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),tee(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}ger.exports=iee});var her=s((jwe,der)=>{"use strict";var nee=A();function aee(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),nee(t,n)?t[n].push(a):t[n]=[a];return t}der.exports=aee});var yer=s((Cwe,qer)=>{"use strict";var see=A();function uee(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),see(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}qer.exports=uee});var Ner=s((Vwe,Eer)=>{"use strict";var ber=Wr(),wer=y(),oee=per(),vee=mer(),fee=her(),cee=yer();function lee(r,e,t){var i,n,a;if(!ber(r))throw new TypeError(wer("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=oee(i,e),n)throw n;a=t}if(!ber(a))throw new TypeError(wer("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?vee(r,a):i.returns==="indices"?fee(r,a):cee(r,a)}Eer.exports=lee});var Aer=s((Uwe,Oer)=>{"use strict";var pee=Ner();Oer.exports=pee});var Ter=s((Gwe,Ser)=>{"use strict";function gee(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}Ser.exports=gee});var Ler=s((Hwe,Ier)=>{"use strict";var mee=mr(),dee=j().isPrimitive,hee=L(),qee=vr(),_er=A(),Sf=y();function yee(r,e){return hee(e)?_er(e,"alpha")&&(r.alpha=e.alpha,!dee(r.alpha)||qee(r.alpha))?new TypeError(Sf("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):_er(e,"groups")&&(r.groups=e.groups,!mee(r.groups))?new TypeError(Sf("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(Sf("invalid argument. Options argument must be an object. Value: `%s`.",e))}Ier.exports=yee});var jer=s((Wwe,ker)=>{"use strict";var Rer=E(),Bu=Br(),Per=W(),bee=Y(),Fer=N1(),wee=Ii(),Mer=Ka(),Eee=v1(),Nee=r0(),Oee=wee+1,Ber=1e308;function Aee(r,e){var t,i;return Rer(r)||Rer(e)||Bu(e)?NaN:Bu(r)||r===0||e<Nee||bee(r)>Oee&&e<=0?r:e>Mer?0*r:e<Eee?(t=Per(10,-(e+Mer)),i=r*Ber*t,Bu(i)?r:Fer(i)/Ber/t):(t=Per(10,-e),i=r*t,Bu(i)?r:Fer(i)/t)}ker.exports=Aee});var Ver=s((xwe,Cer)=>{"use strict";var See=jer();Cer.exports=See});var Her=s((Dwe,Ger)=>{"use strict";var Tee=re(),_ee=L(),Iee=gr().isPrimitive,Uer=A(),Tf=y(),_f=Ver();function Lee(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!_ee(r))throw new TypeError(Tf("invalid argument. First argument must be an object. Value: `%s`.",r));if(Uer(r,"digits")){if(!Tee(r.digits))throw new TypeError(Tf("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(Uer(r,"decision")){if(!Iee(r.decision))throw new TypeError(Tf("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+_f(this.pValue,-t)+`
`,i+="    statistic: "+_f(this.statistic,-t)+`
`,i+="    df: "+_f(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}Ger.exports=Lee});var Der=s((zwe,xer)=>{"use strict";var Ree=Wr(),Pee=L(),Qt=rr(),Fee=Ei(),ku=y(),Mee=ver(),Bee=Aer(),Wer=P(),kee=Ter(),jee=Ler(),Cee=Her();function Vee(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O;if(f=[],e=arguments.length,v={},Pee(arguments[e-1])&&(r=arguments[e-1],e-=1,g=jee(v,r),g))throw g;if(v.groups){if(n=Bee(arguments[0],v.groups),i=Fee(n),e=i.length,e<2)throw new Error(ku("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(O=0;O<e;O++)f.push(n[i[O]])}else for(O=0;O<e;O++)f.push(arguments[O]);for(u=0,t=0,o=0,h=0,q=new Array(e),N=q.slice(),O=0;O<e;O++){if(p=f[O],!Ree(p))throw new TypeError(ku("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(ku("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));q[O]=p.length-1,u+=q[O],t+=1/q[O],N[O]=kee(p),o+=q[O]*N[O],h+=q[O]*Wer(N[O])}if(o/=u,v.alpha===void 0?a=.05:a=v.alpha,a<0||a>1)throw new RangeError(ku("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*Wer(o)-h,l/=1+(t-1/u)/(3*(e-1)),m=e-1,c=1-Mee(l,m),d={},Qt(d,"rejected",c<=a),Qt(d,"alpha",a),Qt(d,"pValue",c),Qt(d,"statistic",l),Qt(d,"df",m),Qt(d,"method","Bartlett's test of equal variances"),Qt(d,"print",Cee),d}xer.exports=Vee});var Xer=s((Xwe,zer)=>{"use strict";var Uee=Der();zer.exports=Uee});var Yer=s((Jwe,Jer)=>{"use strict";var If=E(),Gee=ut();function Hee(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,v=1,If(a)===!1)for(v;v<r;v++){if(u+=t,f=e[u],If(f)){a=f;break}(f>a||f===a&&Gee(f))&&(a=f),i[o]=a,o+=n}if(If(a))for(v;v<r;v++)i[o]=a,o+=n;return i}Jer.exports=Hee});var $er=s((Ywe,Zer)=>{"use strict";var Lf=E(),Wee=ut();function xee(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return n;if(f=i,v=u,o=e[f],n[v]=o,v+=a,l=1,Lf(o)===!1)for(l;l<r;l++){if(f+=t,c=e[f],Lf(c)){o=c;break}(c>o||c===o&&Wee(c))&&(o=c),n[v]=o,v+=a}if(Lf(o))for(l;l<r;l++)n[v]=o,v+=a;return n}Zer.exports=xee});var rtr=s((Zwe,Ker)=>{"use strict";var Dee=b(),Qer=Yer(),zee=$er();Dee(Qer,"ndarray",zee);Ker.exports=Qer});var ttr=s(($we,etr)=>{"use strict";var Xee=rtr();etr.exports=Xee});var ntr=s((Qwe,itr)=>{"use strict";var Jee=E(),Yee=ut();function Zee(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],Jee(a))return a;(a>i||a===i&&Yee(a))&&(i=a)}return i}itr.exports=Zee});var str=s((Kwe,atr)=>{"use strict";var $ee=E(),Qee=ut();function Kee(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],$ee(u))return u;(u>n||u===n&&Qee(u))&&(n=u)}return n}atr.exports=Kee});var vtr=s((rEe,otr)=>{"use strict";var rte=b(),utr=ntr(),ete=str();rte(utr,"ndarray",ete);otr.exports=utr});var ctr=s((eEe,ftr)=>{"use strict";var tte=vtr();ftr.exports=tte});var gtr=s((tEe,ptr)=>{"use strict";var ltr=E(),ite=ut();function nte(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,v=0;v<r&&i[o]!==0;v++)u+=t,o+=n;if(v===r)return NaN;if(a=e[u],ltr(a))return a;for(v+=1,v;v<r;v++)if(u+=t,o+=n,!i[o]){if(f=e[u],ltr(f))return f;(f>a||f===a&&ite(f))&&(a=f)}return a}ptr.exports=nte});var htr=s((iEe,dtr)=>{"use strict";var mtr=E(),ate=ut();function ste(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return NaN;for(f=i,v=u,l=0;l<r&&n[v]!==0;l++)f+=t,v+=a;if(l===r)return NaN;if(o=e[f],mtr(o))return o;for(l+=1,l;l<r;l++)if(f+=t,v+=a,!n[v]){if(c=e[f],mtr(c))return c;(c>o||c===o&&ate(c))&&(o=c)}return o}dtr.exports=ste});var btr=s((nEe,ytr)=>{"use strict";var ute=b(),qtr=gtr(),ote=htr();ute(qtr,"ndarray",ote);ytr.exports=qtr});var Etr=s((aEe,wtr)=>{"use strict";var vte=Zt(),fte=U(),Rf=E();function cte(r,e,t){var i,n;return Rf(r)||Rf(e)||Rf(t)||t<0?NaN:t===0?r<e?0:1:(i=t*fte(2),n=r-e,.5*vte(-n/i))}wtr.exports=cte});var Otr=s((sEe,Ntr)=>{"use strict";var lte=T(),pte=as().factory,Pf=E(),gte=U(),mte=Zt();function dte(r,e){var t;if(Pf(r)||Pf(e)||e<0)return lte(NaN);if(e===0)return pte(r);return t=e*gte(2),i;function i(n){var a;return Pf(n)?NaN:(a=n-r,.5*mte(-a/t))}}Ntr.exports=dte});var Ttr=s((uEe,Str)=>{"use strict";var hte=b(),Atr=Etr(),qte=Otr();hte(Atr,"factory",qte);Str.exports=Atr});var Ltr=s((oEe,Itr)=>{"use strict";var _tr=E(),yte=P(),bte=it(),wte=cf();function Ete(r,e){return _tr(r)||_tr(e)||e<=0?NaN:.5*yte(bte*wte*e*e)}Itr.exports=Ete});var Ptr=s((vEe,Rtr)=>{"use strict";var Nte=Ltr();Rtr.exports=Nte});var Btr=s((fEe,Mtr)=>{"use strict";var Ftr=E();function Ote(r,e){return Ftr(r)||Ftr(e)||e<=0?NaN:0}Mtr.exports=Ote});var jtr=s((cEe,ktr)=>{"use strict";var Ate=Btr();ktr.exports=Ate});var Vtr=s((lEe,Ctr)=>{"use strict";var Ste=J(),Tte=[_te,Ite,Lte,Rte,Pte,Fte,Mte,Bte,kte,jte,Cte,Vte,Ute,Gte,Hte,Wte,xte,Dte,zte,Xte,Jte,Yte,Zte,$te,Qte,Kte,rie,eie,tie,iie,nie,aie,sie,uie,oie,vie,fie,cie,lie,pie,gie,mie,die,hie,qie,yie,bie,wie,Eie,Nie,Oie,Aie,Sie,Tie,_ie,Iie,Lie,Rie,Pie,Fie,Mie,Bie,kie,jie,Cie,Vie,Uie,Gie,Hie,Wie,xie,Die,zie,Xie,Jie,Yie,Zie,$ie,Qie,Kie,rne,ene,tne,ine,nne,ane,sne,une,one,vne,fne,cne,lne,pne,gne,mne,dne,hne,qne,yne,bne];function _te(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function Ite(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function Lte(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function Rte(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function Pte(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function Fte(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function Mte(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function Bte(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function kte(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function jte(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function Cte(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function Vte(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function Ute(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function Gte(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function Hte(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function Wte(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function xte(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function Dte(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function zte(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function Xte(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function Jte(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function Yte(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function Zte(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function $te(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function Qte(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function Kte(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function rie(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function eie(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function tie(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function iie(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function nie(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function aie(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function sie(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function uie(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function oie(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function vie(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function fie(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function cie(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function lie(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function pie(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function gie(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function mie(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function die(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function hie(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function qie(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function yie(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function bie(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function wie(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function Eie(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function Nie(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function Oie(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function Aie(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function Sie(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function Tie(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function _ie(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function Iie(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function Lie(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function Rie(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function Pie(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function Fie(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function Mie(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function Bie(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function kie(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function jie(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function Cie(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function Vie(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function Uie(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function Gie(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function Hie(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function Wie(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function xie(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function Die(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function zie(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function Xie(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function Jie(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function Yie(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function Zie(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function $ie(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function Qie(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function Kie(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function rne(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function ene(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function tne(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function ine(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function nne(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function ane(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function sne(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function une(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function one(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function vne(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function fne(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function cne(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function lne(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function pne(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function gne(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function mne(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function dne(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function hne(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function qne(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function yne(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function bne(){return 1}function wne(r){var e=Ste(r),t=Tte[e];return t(2*r-(2*e+1))}Ctr.exports=wne});var xtr=s((pEe,Wtr)=>{"use strict";var Utr=sr(),Ene=I(),Gtr=Vtr(),Htr=.5641895835477563;function Nne(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?Htr/r:(e=r*r,Htr*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):Gtr(400/(4+r)):r<-26.7?Ene:(e=r*r,r<-6.1?2*Utr(e):2*Utr(e)-Gtr(400/(4-r)))}Wtr.exports=Nne});var Ff=s((gEe,Dtr)=>{"use strict";var One=xtr();Dtr.exports=One});var Jtr=s((mEe,Xtr)=>{"use strict";var Ane=P(),Sne=et(),Tne=n0(),_ne=Zt(),Ine=Ff(),Lne=V(),Mf=E(),ztr=.7071067811865475;function Rne(r,e,t){var i;return Mf(r)||Mf(e)||Mf(t)||t<0?NaN:t===0?r<e?Lne:0:(i=(r-e)/t,i<-1?Ane(Ine(-i*ztr)/2)-Tne(i)/2:Sne(-_ne(i*ztr)/2))}Xtr.exports=Rne});var $tr=s((dEe,Ztr)=>{"use strict";var Ytr=E(),Pne=V();function Fne(r,e){return Ytr(r)||Ytr(e)?NaN:r<e?Pne:0}Ztr.exports=Fne});var rir=s((hEe,Ktr)=>{"use strict";var Mne=T(),Qtr=E(),Bne=V();function kne(r){if(Qtr(r))return Mne(NaN);return e;function e(t){return Qtr(t)?NaN:t<r?Bne:0}}Ktr.exports=kne});var iir=s((qEe,tir)=>{"use strict";var jne=b(),eir=$tr(),Cne=rir();jne(eir,"factory",Cne);tir.exports=eir});var uir=s((yEe,sir)=>{"use strict";var Vne=T(),Une=iir().factory,nir=E(),Gne=et(),Hne=n0(),Wne=Zt(),xne=Ff(),Dne=P(),air=.7071067811865475;function zne(r,e){if(nir(r)||nir(e)||e<0)return Vne(NaN);if(e===0)return Une(r);return t;function t(i){var n=(i-r)/e;return n<-1?Dne(xne(-n*air)/2)-Hne(n)/2:Gne(-Wne(n*air)/2)}}sir.exports=zne});var fir=s((bEe,vir)=>{"use strict";var Xne=b(),oir=Jtr(),Jne=uir();Xne(oir,"factory",Jne);vir.exports=oir});var Bf=s((wEe,cir)=>{"use strict";var Yne=1.8378770664093456;cir.exports=Yne});var gir=s((EEe,pir)=>{"use strict";var Zne=P(),lir=W(),$ne=Bf(),Qne=V(),Kne=I(),kf=E();function rae(r,e,t){var i,n,a;return kf(r)||kf(e)||kf(t)||t<0?NaN:t===0?r===e?Kne:Qne:(i=lir(t,2),n=-.5*(2*Zne(t)+$ne),a=-1/(2*i),n+a*lir(r-e,2))}pir.exports=rae});var hir=s((NEe,dir)=>{"use strict";var eae=I(),tae=V(),mir=E();function iae(r,e){return mir(r)||mir(e)?NaN:r===e?eae:tae}dir.exports=iae});var bir=s((OEe,yir)=>{"use strict";var nae=T(),aae=I(),sae=V(),qir=E();function uae(r){if(qir(r))return nae(NaN);return e;function e(t){return qir(t)?NaN:t===r?aae:sae}}yir.exports=uae});var Nir=s((AEe,Eir)=>{"use strict";var oae=b(),wir=hir(),vae=bir();oae(wir,"factory",vae);Eir.exports=wir});var Tir=s((SEe,Sir)=>{"use strict";var fae=T(),cae=Nir().factory,lae=Bf(),Oir=E(),Air=W(),pae=P();function gae(r,e){var t,i,n;if(Oir(r)||Oir(e)||e<0)return fae(NaN);if(e===0)return cae(r);return t=Air(e,2),i=-.5*(2*pae(e)+lae),n=-1/(2*t),a;function a(u){return i+n*Air(u-r,2)}}Sir.exports=gae});var Lir=s((TEe,Iir)=>{"use strict";var mae=b(),_ir=gir(),dae=Tir();mae(_ir,"factory",dae);Iir.exports=_ir});var Fir=s((_Ee,Pir)=>{"use strict";var Rir=E();function hae(r,e){return Rir(r)||Rir(e)||e<=0?NaN:r}Pir.exports=hae});var Bir=s((IEe,Mir)=>{"use strict";var qae=Fir();Mir.exports=qae});var Cir=s((LEe,jir)=>{"use strict";var kir=E();function yae(r,e){return kir(r)||kir(e)||e<=0?NaN:r}jir.exports=yae});var Uir=s((REe,Vir)=>{"use strict";var bae=Cir();Vir.exports=bae});var Hir=s((PEe,Gir)=>{"use strict";var jf=E(),wae=sr(),Eae=W();function Nae(r,e,t){return jf(r)||jf(e)||jf(t)||t<=0?NaN:wae(e*r+.5*Eae(t*r,2))}Gir.exports=Nae});var xir=s((FEe,Wir)=>{"use strict";var Oae=T(),Cf=E(),Aae=sr(),Sae=W();function Tae(r,e){if(Cf(r)||Cf(e)||e<=0)return Oae(NaN);return t;function t(i){return Cf(i)?NaN:Aae(r*i+.5*Sae(e*i,2))}}Wir.exports=Tae});var Xir=s((MEe,zir)=>{"use strict";var _ae=b(),Dir=Hir(),Iae=xir();_ae(Dir,"factory",Iae);zir.exports=Dir});var Zir=s((BEe,Yir)=>{"use strict";var Jir=E();function Lae(r,e){return Jir(r)||Jir(e)||e<=0?NaN:r}Yir.exports=Lae});var Qir=s((kEe,$ir)=>{"use strict";var Rae=Zir();$ir.exports=Rae});var enr=s((jEe,rnr)=>{"use strict";var Pae=sr(),Kir=W(),Fae=U(),Mae=it(),Bae=I(),Vf=E();function kae(r,e,t){var i,n,a;return Vf(r)||Vf(e)||Vf(t)||t<0?NaN:t===0?r===e?Bae:0:(i=Kir(t,2),n=1/Fae(i*Mae),a=-1/(2*i),n*Pae(a*Kir(r-e,2)))}rnr.exports=kae});var nnr=s((CEe,inr)=>{"use strict";var jae=I(),tnr=E();function Cae(r,e){return tnr(r)||tnr(e)?NaN:r===e?jae:0}inr.exports=Cae});var unr=s((VEe,snr)=>{"use strict";var Vae=T(),Uae=I(),anr=E();function Gae(r){if(anr(r))return Vae(NaN);return e;function e(t){return anr(t)?NaN:t===r?Uae:0}}snr.exports=Gae});var fnr=s((UEe,vnr)=>{"use strict";var Hae=b(),onr=nnr(),Wae=unr();Hae(onr,"factory",Wae);vnr.exports=onr});var pnr=s((GEe,lnr)=>{"use strict";var xae=T(),Dae=fnr().factory,Uf=E(),zae=U(),Xae=sr(),cnr=W(),Jae=it();function Yae(r,e){var t,i,n;if(Uf(r)||Uf(e)||e<0)return xae(NaN);if(e===0)return Dae(r);return t=cnr(e,2),i=1/zae(t*Jae),n=-1/(2*t),a;function a(u){return Uf(u)?NaN:i*Xae(n*cnr(u-r,2))}}lnr.exports=Yae});var dnr=s((HEe,mnr)=>{"use strict";var Zae=b(),gnr=enr(),$ae=pnr();Zae(gnr,"factory",$ae);mnr.exports=gnr});var ynr=s((WEe,qnr)=>{"use strict";var hnr=E();function Qae(r,e){return hnr(r)||hnr(e)||e<=0?NaN:0}qnr.exports=Qae});var wnr=s((xEe,bnr)=>{"use strict";var Kae=ynr();bnr.exports=Kae});var Onr=s((DEe,Nnr)=>{"use strict";var Enr=E();function r0e(r,e){return Enr(r)||Enr(e)||e<=0?NaN:e}Nnr.exports=r0e});var Snr=s((zEe,Anr)=>{"use strict";var e0e=Onr();Anr.exports=e0e});var Inr=s((XEe,_nr)=>{"use strict";var Tnr=E();function t0e(r,e){return Tnr(r)||Tnr(e)||e<=0?NaN:e*e}_nr.exports=t0e});var Rnr=s((JEe,Lnr)=>{"use strict";var i0e=Inr();Lnr.exports=i0e});var Fnr=s((YEe,Pnr)=>{"use strict";var Tr=rr(),n0e=Ttr(),a0e=Ptr(),s0e=jtr(),u0e=fir(),o0e=Lir(),v0e=Bir(),f0e=Uir(),c0e=Xir(),l0e=Qir(),p0e=dnr(),g0e=Ov(),m0e=wnr(),d0e=Snr(),h0e=Rnr();function q0e(r){return Tr(r,"cdf",n0e),Tr(r,"entropy",a0e),Tr(r,"kurtosis",s0e),Tr(r,"logcdf",u0e),Tr(r,"logpdf",o0e),Tr(r,"mean",v0e),Tr(r,"median",f0e),Tr(r,"mgf",c0e),Tr(r,"mode",l0e),Tr(r,"pdf",p0e),Tr(r,"quantile",g0e),Tr(r,"skewness",m0e),Tr(r,"stdev",d0e),Tr(r,"variance",h0e),r}Pnr.exports=q0e});var Bnr=s((ZEe,Mnr)=>{"use strict";var y0e=rr(),b0e=Fnr();function w0e(r){return y0e(r,"normal",b0e({})),r}Mnr.exports=w0e});var jnr=s(($Ee,knr)=>{"use strict";var sa=rr(),E0e=Xer(),N0e=ttr().ndarray,O0e=ctr().ndarray,A0e=btr().ndarray,S0e=Bnr();function T0e(r){return sa(r,"bartlettTest",E0e),sa(r,"cumax",N0e),sa(r,"max",O0e),sa(r,"mskmax",A0e),sa(r,"dists",S0e({})),r}knr.exports=T0e});var Vnr=s((QEe,Cnr)=>{"use strict";var _0e=K().isPrimitive,I0e=y();function L0e(r){return e;function e(t){if(!_0e(t))throw new TypeError(I0e("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}Cnr.exports=L0e});var Gnr=s((KEe,Unr)=>{"use strict";var R0e=Vnr();Unr.exports=R0e});var Dnr=s((rNe,xnr)=>{"use strict";var Hnr=K().isPrimitive,Wnr=y();function P0e(r){return e;function e(t,i){if(!Hnr(t))throw new TypeError(Wnr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Hnr(i))throw new TypeError(Wnr("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}xnr.exports=P0e});var Xnr=s((eNe,znr)=>{"use strict";var F0e=Dnr();znr.exports=F0e});var Ynr=s((tNe,Jnr)=>{"use strict";var Gf=K().isPrimitive,Hf=y();function M0e(r){return e;function e(t,i,n){if(!Gf(t))throw new TypeError(Hf("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Gf(i))throw new TypeError(Hf("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Gf(n))throw new TypeError(Hf("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}Jnr.exports=M0e});var $nr=s((iNe,Znr)=>{"use strict";var B0e=Ynr();Znr.exports=B0e});var Knr=s((nNe,Qnr)=>{"use strict";var Wf=rr(),k0e=Gnr(),j0e=Xnr(),C0e=$nr();function V0e(r){return Wf(r,"s_o",k0e),Wf(r,"ss_o",j0e),Wf(r,"sss_o",C0e),r}Qnr.exports=V0e});var ear=s((aNe,rar)=>{"use strict";function U0e(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}rar.exports=U0e});var ju=s((sNe,tar)=>{"use strict";var G0e=ear();tar.exports=G0e});var nar=s((uNe,iar)=>{"use strict";function H0e(r){return r.toLowerCase()}iar.exports=H0e});var en=s((oNe,aar)=>{"use strict";var W0e=nar();aar.exports=W0e});var uar=s((vNe,sar)=>{"use strict";var x0e=typeof String.prototype.trim<"u";sar.exports=x0e});var xf=s((fNe,oar)=>{"use strict";var D0e=String.prototype.trim;oar.exports=D0e});var par=s((cNe,lar)=>{"use strict";var far=xf(),z0e=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,car="\u180E";function X0e(){return far.call(z0e)===""&&far.call(car)===car}lar.exports=X0e});var mar=s((lNe,gar)=>{"use strict";var J0e=nt(),Y0e=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function Z0e(r){return J0e(r,Y0e,"$1")}gar.exports=Z0e});var har=s((pNe,dar)=>{"use strict";var $0e=xf();function Q0e(r){return $0e.call(r)}dar.exports=Q0e});var tn=s((gNe,qar)=>{"use strict";var K0e=uar(),rse=par(),ese=mar(),tse=har(),Df;K0e&&rse()?Df=tse:Df=ese;qar.exports=Df});var bar=s((mNe,yar)=>{"use strict";var ise=ju(),nse=en(),Cu=nt(),ase=tn(),sse=/\s+/g,use=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,ose=/(?:\s|^)([^\s]+)(?=\s|$)/g,vse=/([a-z0-9])([A-Z])/g;function fse(r,e,t){return e=nse(e),t===0?e:ise(e)}function cse(r){return r=Cu(r,use," "),r=Cu(r,sse," "),r=Cu(r,vse,"$1 $2"),r=ase(r),Cu(r,ose,fse)}yar.exports=cse});var Ear=s((dNe,war)=>{"use strict";var lse=bar();war.exports=lse});var Oar=s((hNe,Nar)=>{"use strict";var pse=K().isPrimitive,gse=y(),mse=Ear();function dse(r){if(!pse(r))throw new TypeError(gse("invalid argument. First argument must be a string. Value: `%s`.",r));return mse(r)}Nar.exports=dse});var Sar=s((qNe,Aar)=>{"use strict";var hse=Oar();Aar.exports=hse});var _ar=s((yNe,Tar)=>{"use strict";var qse=K().isPrimitive,yse=y(),bse=ju();function wse(r){if(!qse(r))throw new TypeError(yse("invalid argument. First argument must be a string. Value: `%s`.",r));return bse(r)}Tar.exports=wse});var Lar=s((bNe,Iar)=>{"use strict";var Ese=_ar();Iar.exports=Ese});var Par=s((wNe,Rar)=>{"use strict";function Nse(r){return r.toUpperCase()}Rar.exports=Nse});var Mar=s((ENe,Far)=>{"use strict";var Ose=Par();Far.exports=Ose});var kar=s((NNe,Bar)=>{"use strict";var Ase=Mar(),zf=nt(),Sse=tn(),Tse=/\s+/g,_se=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Ise=/([a-z0-9])([A-Z])/g;function Lse(r){return r=zf(r,_se," "),r=zf(r,Ise,"$1 $2"),r=Sse(r),r=zf(r,Tse,"_"),Ase(r)}Bar.exports=Lse});var Car=s((ONe,jar)=>{"use strict";var Rse=kar();jar.exports=Rse});var Uar=s((ANe,Var)=>{"use strict";var Pse=K().isPrimitive,Fse=y(),Mse=Car();function Bse(r){if(!Pse(r))throw new TypeError(Fse("invalid argument. Must provide a string. Value: `%s`.",r));return Mse(r)}Var.exports=Bse});var Har=s((SNe,Gar)=>{"use strict";var kse=Uar();Gar.exports=kse});var xar=s((TNe,War)=>{"use strict";var jse=en(),Xf=nt(),Cse=tn(),Vse=/\s+/g,Use=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Gse=/([a-z0-9])([A-Z])/g;function Hse(r){return r=Xf(r,Use," "),r=Xf(r,Gse,"$1 $2"),r=Cse(r),r=Xf(r,Vse,"-"),jse(r)}War.exports=Hse});var zar=s((_Ne,Dar)=>{"use strict";var Wse=xar();Dar.exports=Wse});var Jar=s((INe,Xar)=>{"use strict";var xse=K().isPrimitive,Dse=y(),zse=zar();function Xse(r){if(!xse(r))throw new TypeError(Dse("invalid argument. Must provide a string. Value: `%s`.",r));return zse(r)}Xar.exports=Xse});var Zar=s((LNe,Yar)=>{"use strict";var Jse=Jar();Yar.exports=Jse});var Qar=s((RNe,$ar)=>{"use strict";var Yse=K().isPrimitive,Zse=y(),$se=en();function Qse(r){if(!Yse(r))throw new TypeError(Zse("invalid argument. Must provide a string. Value: `%s`.",r));return $se(r)}$ar.exports=Qse});var r0r=s((PNe,Kar)=>{"use strict";var Kse=Qar();Kar.exports=Kse});var t0r=s((FNe,e0r)=>{"use strict";var rue=ju(),eue=en(),Vu=nt(),tue=tn(),iue=/\s+/g,nue=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,aue=/(?:\s|^)([^\s]+)(?=\s|$)/g,sue=/([a-z0-9])([A-Z])/g;function uue(r,e){return rue(eue(e))}function oue(r){return r=Vu(r,nue," "),r=Vu(r,iue," "),r=Vu(r,sue,"$1 $2"),r=tue(r),Vu(r,aue,uue)}e0r.exports=oue});var n0r=s((MNe,i0r)=>{"use strict";var vue=t0r();i0r.exports=vue});var s0r=s((BNe,a0r)=>{"use strict";var fue=K().isPrimitive,cue=y(),lue=n0r();function pue(r){if(!fue(r))throw new TypeError(cue("invalid argument. First argument must be a string. Value: `%s`.",r));return lue(r)}a0r.exports=pue});var o0r=s((kNe,u0r)=>{"use strict";var gue=s0r();u0r.exports=gue});var f0r=s((jNe,v0r)=>{"use strict";var mue=en(),Jf=nt(),due=tn(),hue=/\s+/g,que=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,yue=/([a-z0-9])([A-Z])/g;function bue(r){return r=Jf(r,que," "),r=Jf(r,yue,"$1 $2"),r=due(r),r=Jf(r,hue,"_"),mue(r)}v0r.exports=bue});var l0r=s((CNe,c0r)=>{"use strict";var wue=f0r();c0r.exports=wue});var g0r=s((VNe,p0r)=>{"use strict";var Eue=K().isPrimitive,Nue=y(),Oue=l0r();function Aue(r){if(!Eue(r))throw new TypeError(Nue("invalid argument. Must provide a string. Value: `%s`.",r));return Oue(r)}p0r.exports=Aue});var d0r=s((UNe,m0r)=>{"use strict";var Sue=g0r();m0r.exports=Sue});var y0r=s((GNe,q0r)=>{"use strict";var Tue=L(),h0r=A(),_ue=gr().isPrimitive,Iue=K().isPrimitive,Yf=y();function Lue(r,e){return Tue(e)?h0r(e,"flags")&&(r.flags=e.flags,!Iue(r.flags))?new TypeError(Yf("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):h0r(e,"capture")&&(r.capture=e.capture,!_ue(r.capture))?new TypeError(Yf("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(Yf("invalid argument. Options argument must be an object. Value: `%s`.",e))}q0r.exports=Lue});var Uu=s((HNe,w0r)=>{"use strict";var Rue=y0r(),b0r=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function Pue(r){var e,t;if(arguments.length>0){if(e={},t=Rue(e,r),t)throw t;return e.capture?new RegExp("("+b0r+")",e.flags):new RegExp(b0r,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}w0r.exports=Pue});var N0r=s((WNe,E0r)=>{"use strict";var Fue=Uu(),Mue=Fue({capture:!0});E0r.exports=Mue});var A0r=s((xNe,O0r)=>{"use strict";var Bue=Uu(),kue=Bue();O0r.exports=kue});var _0r=s((DNe,T0r)=>{"use strict";var S0r=b(),Zf=Uu(),jue=N0r(),Cue=A0r();S0r(Zf,"REGEXP",Cue);S0r(Zf,"REGEXP_CAPTURE",jue);T0r.exports=Zf});var L0r=s((zNe,I0r)=>{"use strict";var Vue=_0r().REGEXP;function Uue(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),Vue.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}I0r.exports=Uue});var P0r=s((XNe,R0r)=>{"use strict";var Gue=L0r();R0r.exports=Gue});var M0r=s((JNe,F0r)=>{"use strict";var Hue=K().isPrimitive,Wue=y(),xue=P0r();function Due(r){if(!Hue(r))throw new TypeError(Wue("invalid argument. Must provide a string. Value: `%s`.",r));return xue(r)}F0r.exports=Due});var k0r=s((YNe,B0r)=>{"use strict";var zue=M0r();B0r.exports=zue});var C0r=s((ZNe,j0r)=>{"use strict";function Xue(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}j0r.exports=Xue});var U0r=s(($Ne,V0r)=>{"use strict";var Jue=C0r();V0r.exports=Jue});var H0r=s((QNe,G0r)=>{"use strict";var Yue=K().isPrimitive,Zue=y(),$ue=U0r();function Que(r){if(!Yue(r))throw new TypeError(Zue("invalid argument. First argument must be a string. Value: `%s`.",r));return $ue(r)}G0r.exports=Que});var x0r=s((KNe,W0r)=>{"use strict";var Kue=H0r();W0r.exports=Kue});var z0r=s((rOe,D0r)=>{"use strict";var roe=K().isPrimitive,eoe=y();function toe(r){if(!roe(r))throw new TypeError(eoe("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}D0r.exports=toe});var J0r=s((eOe,X0r)=>{"use strict";var ioe=z0r();X0r.exports=ioe});var Z0r=s((tOe,Y0r)=>{"use strict";var ue=rr(),noe=Sar(),aoe=Lar(),soe=Har(),uoe=Zar(),ooe=r0r(),voe=o0r(),foe=d0r(),coe=k0r(),loe=x0r(),poe=J0r();function goe(r){return ue(r,"camelcase",noe),ue(r,"capitalize",aoe),ue(r,"constantcase",soe),ue(r,"kebabcase",uoe),ue(r,"lowercase",ooe),ue(r,"pascalcase",voe),ue(r,"snakecase",foe),ue(r,"startcase",coe),ue(r,"uncapitalize",loe),ue(r,"uppercase",poe),r}Y0r.exports=goe});var Q0r=s((iOe,$0r)=>{"use strict";var moe=rr(),doe=Knr(),hoe=Z0r();function qoe(r){return moe(r,"tools",doe({})),r=hoe(r),r}$0r.exports=qoe});var rsr=s((nOe,K0r)=>{"use strict";var oe=rr(),yoe=Ad(),boe=Iy(),woe=Cy(),Eoe=BE(),Noe=GP(),Ooe=ek(),Aoe=V$(),Soe=Y$(),Toe=jnr(),_oe=Q0r();function Ioe(){var r={};return oe(r,"array",yoe({})),oe(r,"assert",boe({})),oe(r,"blas",woe({})),oe(r,"datasets",Eoe({})),oe(r,"math",Noe({})),oe(r,"ndarray",Ooe({})),oe(r,"random",Aoe({})),oe(r,"simulate",Soe({})),oe(r,"stats",Toe({})),oe(r,"string",_oe({})),r}K0r.exports=Ioe});var tsr=s((aOe,esr)=>{"use strict";var Loe=b(),$f=rsr();Loe($f,"CACHED",$f());esr.exports=$f});var Poe=s((sOe,isr)=>{var Roe=tsr().CACHED;isr.exports=Roe});return Poe();})();
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
