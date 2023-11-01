/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var a=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var r6=a((Ioe,Kf)=>{"use strict";var esr=typeof Object.defineProperty=="function"?Object.defineProperty:null;Kf.exports=esr});var t6=a((Loe,e6)=>{"use strict";var tsr=r6();function isr(){try{return tsr({},"x",{}),!0}catch{return!1}}e6.exports=isr});var n6=a((Roe,i6)=>{"use strict";var nsr=Object.defineProperty;i6.exports=nsr});var Gu=a((Poe,a6)=>{"use strict";function asr(r){return typeof r=="number"}a6.exports=asr});var Hu=a((Foe,u6)=>{"use strict";function ssr(r){return r[0]==="-"}function s6(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function usr(r,e,t){var i=!1,n=e-r.length;return n<0||(ssr(r)&&(i=!0,r=r.substr(1)),r=t?r+s6(n):s6(n)+r,i&&(r="-"+r)),r}u6.exports=usr});var c6=a((Moe,f6)=>{"use strict";var osr=Gu(),o6=Hu(),vsr=String.prototype.toLowerCase,v6=String.prototype.toUpperCase;function fsr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!osr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=o6(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=o6(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===v6.call(r.specifier)?v6.call(t):vsr.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}f6.exports=fsr});var p6=a((Boe,l6)=>{"use strict";function csr(r){return typeof r=="string"}l6.exports=csr});var d6=a((koe,m6)=>{"use strict";var lsr=Gu(),psr=Math.abs,gsr=String.prototype.toLowerCase,g6=String.prototype.toUpperCase,Pt=String.prototype.replace,msr=/e\+(\d)$/,dsr=/e-(\d)$/,hsr=/^(\d+)$/,qsr=/^(\d+)e/,ysr=/\.0$/,bsr=/\.0*e/,wsr=/(\..*[^0])0*e/;function Esr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!lsr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":psr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Pt.call(t,wsr,"$1e"),t=Pt.call(t,bsr,"e"),t=Pt.call(t,ysr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Pt.call(t,msr,"e+0$1"),t=Pt.call(t,dsr,"e-0$1"),r.alternate&&(t=Pt.call(t,hsr,"$1."),t=Pt.call(t,qsr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===g6.call(r.specifier)?g6.call(t):gsr.call(t),t}m6.exports=Esr});var y6=a((joe,q6)=>{"use strict";function h6(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function Nsr(r,e,t){var i=e-r.length;return i<0||(r=t?r+h6(i):h6(i)+r),r}q6.exports=Nsr});var w6=a((Coe,b6)=>{"use strict";var Osr=c6(),Asr=p6(),Ssr=d6(),Tsr=y6(),_sr=Hu(),Isr=String.fromCharCode,ua=isNaN,Lsr=Array.isArray;function Rsr(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Psr(r){var e,t,i,n,s,u,o,f,v;if(!Lsr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,f=0;f<r.length;f++)if(i=r[f],Asr(i))u+=i;else{if(e=i.precision!==void 0,i=Rsr(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,v=0;v<t.length;v++)switch(n=t.charAt(v),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,ua(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,ua(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=Osr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!ua(i.arg)){if(s=parseInt(i.arg,10),s<0||s>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=ua(s)?String(i.arg):Isr(s)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=Ssr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=_sr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Tsr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}b6.exports=Psr});var N6=a((Voe,E6)=>{"use strict";var Fsr=w6();E6.exports=Fsr});var A6=a((Uoe,O6)=>{"use strict";var oa=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Msr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function Bsr(r){var e,t,i,n;for(t=[],n=0,i=oa.exec(r);i;)e=r.slice(n,oa.lastIndex-i[0].length),e.length&&t.push(e),t.push(Msr(i)),n=oa.lastIndex,i=oa.exec(r);return e=r.slice(n),e.length&&t.push(e),t}O6.exports=Bsr});var T6=a((Goe,S6)=>{"use strict";var ksr=A6();S6.exports=ksr});var I6=a((Hoe,_6)=>{"use strict";function jsr(r){return typeof r=="string"}_6.exports=jsr});var P6=a((Woe,R6)=>{"use strict";var Csr=N6(),Vsr=T6(),Usr=I6();function L6(r){var e,t,i;if(!Usr(r))throw new TypeError(L6("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Vsr(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Csr.apply(null,t)}R6.exports=L6});var y=a((xoe,F6)=>{"use strict";var Gsr=P6();F6.exports=Gsr});var V6=a((Doe,C6)=>{"use strict";var M6=y(),Kt=Object.prototype,B6=Kt.toString,k6=Kt.__defineGetter__,j6=Kt.__defineSetter__,Hsr=Kt.__lookupGetter__,Wsr=Kt.__lookupSetter__;function xsr(r,e,t){var i,n,s,u;if(typeof r!="object"||r===null||B6.call(r)==="[object Array]")throw new TypeError(M6("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||B6.call(t)==="[object Array]")throw new TypeError(M6("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(Hsr.call(r,e)||Wsr.call(r,e)?(i=r.__proto__,r.__proto__=Kt,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),s="get"in t,u="set"in t,n&&(s||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&k6&&k6.call(r,e,t.get),u&&j6&&j6.call(r,e,t.set),r}C6.exports=xsr});var De=a((zoe,U6)=>{"use strict";var Dsr=t6(),zsr=n6(),Xsr=V6(),Wu;Dsr()?Wu=zsr:Wu=Xsr;U6.exports=Wu});var H6=a((Xoe,G6)=>{"use strict";var Jsr=De();function Ysr(r,e,t){Jsr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}G6.exports=Ysr});var b=a((Joe,W6)=>{"use strict";var Zsr=H6();W6.exports=Zsr});var D6=a((Yoe,x6)=>{"use strict";var $sr=De();function Qsr(r,e,t){$sr(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}x6.exports=Qsr});var rr=a((Zoe,z6)=>{"use strict";var Ksr=D6();z6.exports=Ksr});var J6=a(($oe,X6)=>{"use strict";function rur(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}X6.exports=rur});var Z6=a((Qoe,Y6)=>{"use strict";var eur=J6();Y6.exports=eur});var Q6=a((Koe,$6)=>{"use strict";function tur(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}$6.exports=tur});var xu=a((r2e,K6)=>{"use strict";var iur=Q6();K6.exports=iur});var ec=a((e2e,rc)=>{"use strict";var nur=xu();function aur(r){return nur(0,r)}rc.exports=aur});var va=a((t2e,tc)=>{"use strict";var sur=ec();tc.exports=sur});var ac=a((i2e,nc)=>{"use strict";var nn=Z6(),uur=va(),ic=y();function our(r,e,t){var i,n,s,u,o,f,v,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,v=o;v<u;v++)i=[i];for(s=uur(u),v=u-1;v>=0;v--)if(c=o-u+v,!(c<0)){if(f=e[c],n=t[v],n!==0&&n<f)throw new Error(ic("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",nn(e).join(", "),nn(t).join(", "),v));if(f===n)s[v]=1;else if(f===1)s[v]=0;else throw new Error(ic("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",nn(e).join(", "),nn(t).join(", "),v))}return{ref:r,data:i,shape:nn(t),strides:s}}nc.exports=our});var Du=a((n2e,sc)=>{"use strict";var vur=ac();sc.exports=vur});var vc=a((a2e,oc)=>{"use strict";var uc=Du();function fur(r,e,t){var i,n,s,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,S,x,Q;if(N=e[2],o=N[1],f=N[0],!(o<=0||f<=0))for(F=uc(r[0],e[0],N),S=F.data,O=F.strides,i=O[1],n=O[0],F=uc(r[1],e[1],N),x=F.data,O=F.strides,s=O[1],u=O[0],Q=r[2],p=0,h=0,c=0;c<f;c++){for(l=0,g=0,d=S[p],m=x[h],q=Q[c],v=0;v<o;v++)q[v]=t(d[l],m[g]),l+=i,g+=s;p+=n,h+=u}}oc.exports=fur});var zu=a((s2e,fc)=>{"use strict";var cur=vc();fc.exports=cur});var lc=a((u2e,cc)=>{"use strict";var Xu=Du();function lur(r,e,t){var i,n,s,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,S,x,Q,G,_r,Ir,or,Rt,Qf;if(Q=e[3],v=Q[1],c=Q[0],!(v<=0||c<=0))for(_r=Xu(r[0],e[0],Q),Ir=_r.data,G=_r.strides,i=G[1],n=G[0],_r=Xu(r[1],e[1],Q),or=_r.data,G=_r.strides,s=G[1],u=G[0],_r=Xu(r[2],e[2],Q),Rt=_r.data,G=_r.strides,o=G[1],f=G[0],Qf=r[3],h=0,m=0,N=0,p=0;p<c;p++){for(g=0,d=0,q=0,O=Ir[h],F=or[m],S=Rt[N],x=Qf[p],l=0;l<v;l++)x[l]=t(O[g],F[d],S[q]),g+=i,d+=s,q+=o;h+=n,m+=u,N+=f}}cc.exports=lur});var Ju=a((o2e,pc)=>{"use strict";var pur=lc();pc.exports=pur});var mc=a((v2e,gc)=>{"use strict";function gur(r){var e,t,i,n,s,u,o,f,v,c,l;if(f=r.length,t=[],f===0)return t;if(n=r[0],v=n.length,f===1){for(c=0;c<v;c++)t.push(n[c]);return t}for(e=[v],c=1;c<f;c++)e.push(r[c].length),e[c]>v&&(v=e[c]);for(c=0;c<v;c++)t.push(0);for(c=v-1;c>=0;){for(s=e[0]-v+c,s>=0?i=n[s]:i=1,l=1;l<f;l++){if(u=e[l]-v+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}gc.exports=gur});var fa=a((f2e,dc)=>{"use strict";var mur=mc();dc.exports=mur});var qc=a((c2e,hc)=>{"use strict";var dur=xu();function hur(r,e){var t,i,n,s;for(i=e[1],n=e[0],t=[],s=0;s<n;s++)t.push(dur(r,i));return t}hc.exports=hur});var ca=a((l2e,yc)=>{"use strict";var qur=qc();yc.exports=qur});var wc=a((p2e,bc)=>{"use strict";function yur(r,e,t){var i,n,s,u,o,f;for(s=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],f=0;f<s;f++)n.push(e.call(t,[o,f]));i.push(n)}return i}bc.exports=yur});var Nc=a((g2e,Ec)=>{"use strict";var bur=wc();Ec.exports=bur});var Ac=a((m2e,Oc)=>{"use strict";function wur(r){var e,t,i,n,s,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],s=0;s<t;s++)for(n=r[s],u=0;u<i;u++)e.push(n[u]);return e}Oc.exports=wur});var Yu=a((d2e,Sc)=>{"use strict";var Eur=Ac();Sc.exports=Eur});var _c=a((h2e,Tc)=>{"use strict";var Nur=/./;Tc.exports=Nur});var Zu=a((q2e,Ic)=>{"use strict";function Our(r){return typeof r=="boolean"}Ic.exports=Our});var Rc=a((y2e,Lc)=>{"use strict";function Aur(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}Lc.exports=Aur});var Fc=a((b2e,Pc)=>{"use strict";var Sur=Rc();Pc.exports=Sur});var Bc=a((w2e,Mc)=>{"use strict";var Tur=Fc(),_ur=Tur();function Iur(){return _ur&&typeof Symbol.toStringTag=="symbol"}Mc.exports=Iur});var ri=a((E2e,kc)=>{"use strict";var Lur=Bc();kc.exports=Lur});var $u=a((N2e,jc)=>{"use strict";var Rur=Object.prototype.toString;jc.exports=Rur});var Vc=a((O2e,Cc)=>{"use strict";var Pur=$u();function Fur(r){return Pur.call(r)}Cc.exports=Fur});var Gc=a((A2e,Uc)=>{"use strict";var Mur=Object.prototype.hasOwnProperty;function Bur(r,e){return r==null?!1:Mur.call(r,e)}Uc.exports=Bur});var A=a((S2e,Hc)=>{"use strict";var kur=Gc();Hc.exports=kur});var xc=a((T2e,Wc)=>{"use strict";var jur=typeof Symbol=="function"?Symbol:void 0;Wc.exports=jur});var Qu=a((_2e,Dc)=>{"use strict";var Cur=xc();Dc.exports=Cur});var Jc=a((I2e,Xc)=>{"use strict";var zc=Qu(),Vur=typeof zc=="function"?zc.toStringTag:"";Xc.exports=Vur});var Zc=a((L2e,Yc)=>{"use strict";var Uur=A(),an=Jc(),Ku=$u();function Gur(r){var e,t,i;if(r==null)return Ku.call(r);t=r[an],e=Uur(r,an);try{r[an]=void 0}catch{return Ku.call(r)}return i=Ku.call(r),e?r[an]=t:delete r[an],i}Yc.exports=Gur});var er=a((R2e,$c)=>{"use strict";var Hur=ri(),Wur=Vc(),xur=Zc(),ro;Hur()?ro=xur:ro=Wur;$c.exports=ro});var Kc=a((P2e,Qc)=>{"use strict";var Dur=Boolean;Qc.exports=Dur});var eo=a((F2e,r4)=>{"use strict";var zur=Kc();r4.exports=zur});var t4=a((M2e,e4)=>{"use strict";var Xur=Boolean.prototype.toString;e4.exports=Xur});var n4=a((B2e,i4)=>{"use strict";var Jur=t4();function Yur(r){try{return Jur.call(r),!0}catch{return!1}}i4.exports=Yur});var to=a((k2e,a4)=>{"use strict";var Zur=ri(),$ur=er(),Qur=eo(),Kur=n4(),ror=Zur();function eor(r){return typeof r=="object"?r instanceof Qur?!0:ror?Kur(r):$ur(r)==="[object Boolean]":!1}a4.exports=eor});var u4=a((j2e,s4)=>{"use strict";var tor=Zu(),ior=to();function nor(r){return tor(r)||ior(r)}s4.exports=nor});var gr=a((C2e,v4)=>{"use strict";var o4=b(),io=u4(),aor=Zu(),sor=to();o4(io,"isPrimitive",aor);o4(io,"isObject",sor);v4.exports=io});var c4=a((V2e,f4)=>{"use strict";function uor(){return new Function("return this;")()}f4.exports=uor});var p4=a((U2e,l4)=>{"use strict";var oor=typeof self=="object"?self:null;l4.exports=oor});var m4=a((G2e,g4)=>{"use strict";var vor=typeof window=="object"?window:null;g4.exports=vor});var h4=a((H2e,d4)=>{"use strict";var cor=typeof globalThis=="object"?globalThis:null;d4.exports=cor});var no=a((W2e,w4)=>{"use strict";var lor=gr().isPrimitive,por=y(),gor=c4(),q4=p4(),y4=m4(),b4=h4();function mor(r){if(arguments.length){if(!lor(r))throw new TypeError(por("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return gor()}if(b4)return b4;if(q4)return q4;if(y4)return y4;throw new Error("unexpected error. Unable to resolve global object.")}w4.exports=mor});var O4=a((x2e,N4)=>{"use strict";var dor=no(),E4=dor(),hor=E4.document&&E4.document.childNodes;N4.exports=hor});var S4=a((D2e,A4)=>{"use strict";var qor=Int8Array;A4.exports=qor});var _4=a((z2e,T4)=>{"use strict";var yor=_c(),bor=O4(),wor=S4();function Eor(){return typeof yor=="function"||typeof wor=="object"||typeof bor=="function"}T4.exports=Eor});var ao=a((X2e,I4)=>{"use strict";function Nor(){return/^\s*function\s*([^(]*)/i}I4.exports=Nor});var R4=a((J2e,L4)=>{"use strict";var Oor=ao(),Aor=Oor();L4.exports=Aor});var so=a((Y2e,F4)=>{"use strict";var Sor=b(),P4=ao(),Tor=R4();Sor(P4,"REGEXP",Tor);F4.exports=P4});var B4=a((Z2e,M4)=>{"use strict";var _or=er(),uo;function Ior(r){return _or(r)==="[object Array]"}Array.isArray?uo=Array.isArray:uo=Ior;M4.exports=uo});var mr=a(($2e,k4)=>{"use strict";var Lor=B4();k4.exports=Lor});var C4=a((Q2e,j4)=>{"use strict";var Ror=mr(),Por=y();function For(r){if(typeof r!="function")throw new TypeError(Por("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!Ror(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}j4.exports=For});var U4=a((K2e,V4)=>{"use strict";var Mor=C4();V4.exports=Mor});var H4=a((r1e,G4)=>{"use strict";function Bor(r){return r!==null&&typeof r=="object"}G4.exports=Bor});var vo=a((e1e,W4)=>{"use strict";var kor=b(),jor=U4(),oo=H4(),Cor=jor(oo);kor(oo,"isObjectLikeArray",Cor);W4.exports=oo});var D4=a((t1e,x4)=>{"use strict";var Vor=vo();function Uor(r){return Vor(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}x4.exports=Uor});var Ft=a((i1e,z4)=>{"use strict";var Gor=D4();z4.exports=Gor});var J4=a((n1e,X4)=>{"use strict";var Hor=er(),Wor=so().REGEXP,xor=Ft();function Dor(r){var e,t,i;if(t=Hor(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Wor.exec(i.toString()),e)return e[1]}return xor(r)?"Buffer":t}X4.exports=Dor});var ze=a((a1e,Y4)=>{"use strict";var zor=J4();Y4.exports=zor});var $4=a((s1e,Z4)=>{"use strict";var Xor=ze();function Jor(r){var e;return r===null?"null":(e=typeof r,e==="object"?Xor(r).toLowerCase():e)}Z4.exports=Jor});var K4=a((u1e,Q4)=>{"use strict";var Yor=ze();function Zor(r){return Yor(r).toLowerCase()}Q4.exports=Zor});var la=a((o1e,rl)=>{"use strict";var $or=_4(),Qor=$4(),Kor=K4(),r2r=$or()?Kor:Qor;rl.exports=r2r});var tl=a((v1e,el)=>{"use strict";var e2r=la();function t2r(r){return e2r(r)==="function"}el.exports=t2r});var _=a((f1e,il)=>{"use strict";var i2r=tl();il.exports=i2r});var al=a((c1e,nl)=>{"use strict";var n2r=Math.floor;nl.exports=n2r});var J=a((l1e,sl)=>{"use strict";var a2r=al();sl.exports=a2r});var ol=a((p1e,ul)=>{"use strict";var s2r=J();function u2r(r){return s2r(r)===r}ul.exports=u2r});var Lr=a((g1e,vl)=>{"use strict";var o2r=ol();vl.exports=o2r});var cl=a((m1e,fl)=>{"use strict";var v2r=9007199254740991;fl.exports=v2r});var pl=a((d1e,ll)=>{"use strict";var f2r=Lr(),c2r=cl();function l2r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&f2r(r.length)&&r.length>=0&&r.length<=c2r}ll.exports=l2r});var Wr=a((h1e,gl)=>{"use strict";var p2r=pl();gl.exports=p2r});var dl=a((q1e,ml)=>{"use strict";var g2r=_();function m2r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&g2r(r.next)}ml.exports=m2r});var ql=a((y1e,hl)=>{"use strict";var d2r=dl();hl.exports=d2r});var wl=a((b1e,bl)=>{"use strict";var yl="function";function h2r(r){return typeof r.get===yl&&typeof r.set===yl}bl.exports=h2r});var fo=a((w1e,El)=>{"use strict";var q2r=wl();El.exports=q2r});var Al=a((E1e,Ol)=>{"use strict";var Nl={complex128:y2r,complex64:b2r,default:w2r};function y2r(r,e,t){r.set(t,e)}function b2r(r,e,t){r.set(t,e)}function w2r(r,e,t){r.set(t,e)}function E2r(r){var e=Nl[r];return typeof e=="function"?e:Nl.default}Ol.exports=E2r});var co=a((N1e,Sl)=>{"use strict";var N2r=Al();Sl.exports=N2r});var Il=a((O1e,_l)=>{"use strict";var Tl={float64:O2r,float32:A2r,int32:S2r,int16:T2r,int8:_2r,uint32:I2r,uint16:L2r,uint8:R2r,uint8c:P2r,generic:F2r,default:M2r};function O2r(r,e,t){r[e]=t}function A2r(r,e,t){r[e]=t}function S2r(r,e,t){r[e]=t}function T2r(r,e,t){r[e]=t}function _2r(r,e,t){r[e]=t}function I2r(r,e,t){r[e]=t}function L2r(r,e,t){r[e]=t}function R2r(r,e,t){r[e]=t}function P2r(r,e,t){r[e]=t}function F2r(r,e,t){r[e]=t}function M2r(r,e,t){r[e]=t}function B2r(r){var e=Tl[r];return typeof e=="function"?e:Tl.default}_l.exports=B2r});var lo=a((A1e,Ll)=>{"use strict";var k2r=Il();Ll.exports=k2r});var Pl=a((S1e,Rl)=>{"use strict";var j2r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};Rl.exports=j2r});var Ml=a((T1e,Fl)=>{"use strict";var C2r=er(),V2r=typeof Float64Array=="function";function U2r(r){return V2r&&r instanceof Float64Array||C2r(r)==="[object Float64Array]"}Fl.exports=U2r});var kl=a((_1e,Bl)=>{"use strict";var G2r=Ml();Bl.exports=G2r});var Cl=a((I1e,jl)=>{"use strict";var H2r=typeof Float64Array=="function"?Float64Array:null;jl.exports=H2r});var Gl=a((L1e,Ul)=>{"use strict";var W2r=kl(),Vl=Cl();function x2r(){var r,e;if(typeof Vl!="function")return!1;try{e=new Vl([1,3.14,-3.14,NaN]),r=W2r(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}Ul.exports=x2r});var po=a((R1e,Hl)=>{"use strict";var D2r=Gl();Hl.exports=D2r});var xl=a((P1e,Wl)=>{"use strict";var z2r=typeof Float64Array=="function"?Float64Array:void 0;Wl.exports=z2r});var zl=a((F1e,Dl)=>{"use strict";function X2r(){throw new Error("not implemented")}Dl.exports=X2r});var cr=a((M1e,Xl)=>{"use strict";var J2r=po(),Y2r=xl(),Z2r=zl(),go;J2r()?go=Y2r:go=Z2r;Xl.exports=go});var Yl=a((B1e,Jl)=>{"use strict";var $2r=er(),Q2r=typeof Float32Array=="function";function K2r(r){return Q2r&&r instanceof Float32Array||$2r(r)==="[object Float32Array]"}Jl.exports=K2r});var $l=a((k1e,Zl)=>{"use strict";var r1r=Yl();Zl.exports=r1r});var I=a((j1e,Ql)=>{"use strict";var e1r=Number.POSITIVE_INFINITY;Ql.exports=e1r});var r8=a((C1e,Kl)=>{"use strict";var t1r=typeof Float32Array=="function"?Float32Array:null;Kl.exports=t1r});var i8=a((V1e,t8)=>{"use strict";var i1r=$l(),n1r=I(),e8=r8();function a1r(){var r,e;if(typeof e8!="function")return!1;try{e=new e8([1,3.14,-3.14,5e40]),r=i1r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===n1r}catch{r=!1}return r}t8.exports=a1r});var a8=a((U1e,n8)=>{"use strict";var s1r=i8();n8.exports=s1r});var u8=a((G1e,s8)=>{"use strict";var u1r=typeof Float32Array=="function"?Float32Array:void 0;s8.exports=u1r});var v8=a((H1e,o8)=>{"use strict";function o1r(){throw new Error("not implemented")}o8.exports=o1r});var Zr=a((W1e,f8)=>{"use strict";var v1r=a8(),f1r=u8(),c1r=v8(),mo;v1r()?mo=f1r:mo=c1r;f8.exports=mo});var l8=a((x1e,c8)=>{"use strict";var l1r=er(),p1r=typeof Uint32Array=="function";function g1r(r){return p1r&&r instanceof Uint32Array||l1r(r)==="[object Uint32Array]"}c8.exports=g1r});var ve=a((D1e,p8)=>{"use strict";var m1r=l8();p8.exports=m1r});var ei=a((z1e,g8)=>{"use strict";var d1r=4294967295;g8.exports=d1r});var d8=a((X1e,m8)=>{"use strict";var h1r=typeof Uint32Array=="function"?Uint32Array:null;m8.exports=h1r});var y8=a((J1e,q8)=>{"use strict";var q1r=ve(),ho=ei(),h8=d8();function y1r(){var r,e;if(typeof h8!="function")return!1;try{e=[1,3.14,-3.14,ho+1,ho+2],e=new h8(e),r=q1r(e)&&e[0]===1&&e[1]===3&&e[2]===ho-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}q8.exports=y1r});var w8=a((Y1e,b8)=>{"use strict";var b1r=y8();b8.exports=b1r});var N8=a((Z1e,E8)=>{"use strict";var w1r=typeof Uint32Array=="function"?Uint32Array:void 0;E8.exports=w1r});var A8=a(($1e,O8)=>{"use strict";function E1r(){throw new Error("not implemented")}O8.exports=E1r});var lr=a((Q1e,S8)=>{"use strict";var N1r=w8(),O1r=N8(),A1r=A8(),qo;N1r()?qo=O1r:qo=A1r;S8.exports=qo});var _8=a((K1e,T8)=>{"use strict";var S1r=er(),T1r=typeof Int32Array=="function";function _1r(r){return T1r&&r instanceof Int32Array||S1r(r)==="[object Int32Array]"}T8.exports=_1r});var pa=a((r3e,I8)=>{"use strict";var I1r=_8();I8.exports=I1r});var ti=a((e3e,L8)=>{"use strict";var L1r=2147483647;L8.exports=L1r});var P8=a((t3e,R8)=>{"use strict";var R1r=-2147483648;R8.exports=R1r});var M8=a((i3e,F8)=>{"use strict";var P1r=typeof Int32Array=="function"?Int32Array:null;F8.exports=P1r});var j8=a((n3e,k8)=>{"use strict";var F1r=pa(),M1r=ti(),B1r=P8(),B8=M8();function k1r(){var r,e;if(typeof B8!="function")return!1;try{e=new B8([1,3.14,-3.14,M1r+1]),r=F1r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===B1r}catch{r=!1}return r}k8.exports=k1r});var V8=a((a3e,C8)=>{"use strict";var j1r=j8();C8.exports=j1r});var G8=a((s3e,U8)=>{"use strict";var C1r=typeof Int32Array=="function"?Int32Array:void 0;U8.exports=C1r});var W8=a((u3e,H8)=>{"use strict";function V1r(){throw new Error("not implemented")}H8.exports=V1r});var Xe=a((o3e,x8)=>{"use strict";var U1r=V8(),G1r=G8(),H1r=W8(),yo;U1r()?yo=G1r:yo=H1r;x8.exports=yo});var z8=a((v3e,D8)=>{"use strict";var W1r=er(),x1r=typeof Uint16Array=="function";function D1r(r){return x1r&&r instanceof Uint16Array||W1r(r)==="[object Uint16Array]"}D8.exports=D1r});var J8=a((f3e,X8)=>{"use strict";var z1r=z8();X8.exports=z1r});var Z8=a((c3e,Y8)=>{"use strict";var X1r=65535;Y8.exports=X1r});var Q8=a((l3e,$8)=>{"use strict";var J1r=typeof Uint16Array=="function"?Uint16Array:null;$8.exports=J1r});var e5=a((p3e,r5)=>{"use strict";var Y1r=J8(),bo=Z8(),K8=Q8();function Z1r(){var r,e;if(typeof K8!="function")return!1;try{e=[1,3.14,-3.14,bo+1,bo+2],e=new K8(e),r=Y1r(e)&&e[0]===1&&e[1]===3&&e[2]===bo-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}r5.exports=Z1r});var i5=a((g3e,t5)=>{"use strict";var $1r=e5();t5.exports=$1r});var a5=a((m3e,n5)=>{"use strict";var Q1r=typeof Uint16Array=="function"?Uint16Array:void 0;n5.exports=Q1r});var u5=a((d3e,s5)=>{"use strict";function K1r(){throw new Error("not implemented")}s5.exports=K1r});var Mt=a((h3e,o5)=>{"use strict";var r3r=i5(),e3r=a5(),t3r=u5(),wo;r3r()?wo=e3r:wo=t3r;o5.exports=wo});var f5=a((q3e,v5)=>{"use strict";var i3r=er(),n3r=typeof Int16Array=="function";function a3r(r){return n3r&&r instanceof Int16Array||i3r(r)==="[object Int16Array]"}v5.exports=a3r});var l5=a((y3e,c5)=>{"use strict";var s3r=f5();c5.exports=s3r});var g5=a((b3e,p5)=>{"use strict";var u3r=32767;p5.exports=u3r});var d5=a((w3e,m5)=>{"use strict";var o3r=-32768;m5.exports=o3r});var q5=a((E3e,h5)=>{"use strict";var v3r=typeof Int16Array=="function"?Int16Array:null;h5.exports=v3r});var w5=a((N3e,b5)=>{"use strict";var f3r=l5(),c3r=g5(),l3r=d5(),y5=q5();function p3r(){var r,e;if(typeof y5!="function")return!1;try{e=new y5([1,3.14,-3.14,c3r+1]),r=f3r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===l3r}catch{r=!1}return r}b5.exports=p3r});var N5=a((O3e,E5)=>{"use strict";var g3r=w5();E5.exports=g3r});var A5=a((A3e,O5)=>{"use strict";var m3r=typeof Int16Array=="function"?Int16Array:void 0;O5.exports=m3r});var T5=a((S3e,S5)=>{"use strict";function d3r(){throw new Error("not implemented")}S5.exports=d3r});var ii=a((T3e,_5)=>{"use strict";var h3r=N5(),q3r=A5(),y3r=T5(),Eo;h3r()?Eo=q3r:Eo=y3r;_5.exports=Eo});var L5=a((_3e,I5)=>{"use strict";var b3r=er(),w3r=typeof Uint8Array=="function";function E3r(r){return w3r&&r instanceof Uint8Array||b3r(r)==="[object Uint8Array]"}I5.exports=E3r});var P5=a((I3e,R5)=>{"use strict";var N3r=L5();R5.exports=N3r});var M5=a((L3e,F5)=>{"use strict";var O3r=255;F5.exports=O3r});var k5=a((R3e,B5)=>{"use strict";var A3r=typeof Uint8Array=="function"?Uint8Array:null;B5.exports=A3r});var V5=a((P3e,C5)=>{"use strict";var S3r=P5(),No=M5(),j5=k5();function T3r(){var r,e;if(typeof j5!="function")return!1;try{e=[1,3.14,-3.14,No+1,No+2],e=new j5(e),r=S3r(e)&&e[0]===1&&e[1]===3&&e[2]===No-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}C5.exports=T3r});var G5=a((F3e,U5)=>{"use strict";var _3r=V5();U5.exports=_3r});var W5=a((M3e,H5)=>{"use strict";var I3r=typeof Uint8Array=="function"?Uint8Array:void 0;H5.exports=I3r});var D5=a((B3e,x5)=>{"use strict";function L3r(){throw new Error("not implemented")}x5.exports=L3r});var $r=a((k3e,z5)=>{"use strict";var R3r=G5(),P3r=W5(),F3r=D5(),Oo;R3r()?Oo=P3r:Oo=F3r;z5.exports=Oo});var J5=a((j3e,X5)=>{"use strict";var M3r=er(),B3r=typeof Uint8ClampedArray=="function";function k3r(r){return B3r&&r instanceof Uint8ClampedArray||M3r(r)==="[object Uint8ClampedArray]"}X5.exports=k3r});var Z5=a((C3e,Y5)=>{"use strict";var j3r=J5();Y5.exports=j3r});var Q5=a((V3e,$5)=>{"use strict";var C3r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;$5.exports=C3r});var e7=a((U3e,r7)=>{"use strict";var V3r=Z5(),K5=Q5();function U3r(){var r,e;if(typeof K5!="function")return!1;try{e=new K5([-1,0,1,3.14,4.99,255,256]),r=V3r(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}r7.exports=U3r});var i7=a((G3e,t7)=>{"use strict";var G3r=e7();t7.exports=G3r});var a7=a((H3e,n7)=>{"use strict";var H3r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;n7.exports=H3r});var u7=a((W3e,s7)=>{"use strict";function W3r(){throw new Error("not implemented")}s7.exports=W3r});var ni=a((x3e,o7)=>{"use strict";var x3r=i7(),D3r=a7(),z3r=u7(),Ao;x3r()?Ao=D3r:Ao=z3r;o7.exports=Ao});var f7=a((D3e,v7)=>{"use strict";var X3r=er(),J3r=typeof Int8Array=="function";function Y3r(r){return J3r&&r instanceof Int8Array||X3r(r)==="[object Int8Array]"}v7.exports=Y3r});var l7=a((z3e,c7)=>{"use strict";var Z3r=f7();c7.exports=Z3r});var g7=a((X3e,p7)=>{"use strict";var $3r=127;p7.exports=$3r});var d7=a((J3e,m7)=>{"use strict";var Q3r=-128;m7.exports=Q3r});var q7=a((Y3e,h7)=>{"use strict";var K3r=typeof Int8Array=="function"?Int8Array:null;h7.exports=K3r});var w7=a((Z3e,b7)=>{"use strict";var rvr=l7(),evr=g7(),tvr=d7(),y7=q7();function ivr(){var r,e;if(typeof y7!="function")return!1;try{e=new y7([1,3.14,-3.14,evr+1]),r=rvr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===tvr}catch{r=!1}return r}b7.exports=ivr});var N7=a(($3e,E7)=>{"use strict";var nvr=w7();E7.exports=nvr});var A7=a((Q3e,O7)=>{"use strict";var avr=typeof Int8Array=="function"?Int8Array:void 0;O7.exports=avr});var T7=a((K3e,S7)=>{"use strict";function svr(){throw new Error("not implemented")}S7.exports=svr});var ai=a((rve,_7)=>{"use strict";var uvr=N7(),ovr=A7(),vvr=T7(),So;uvr()?So=ovr:So=vvr;_7.exports=So});var To=a((eve,I7)=>{"use strict";function fvr(r){return typeof r=="number"}I7.exports=fvr});var R7=a((tve,L7)=>{"use strict";L7.exports=Number});var ga=a((ive,P7)=>{"use strict";var cvr=R7();P7.exports=cvr});var M7=a((nve,F7)=>{"use strict";var lvr=ga(),pvr=lvr.prototype.toString;F7.exports=pvr});var k7=a((ave,B7)=>{"use strict";var gvr=M7();function mvr(r){try{return gvr.call(r),!0}catch{return!1}}B7.exports=mvr});var _o=a((sve,j7)=>{"use strict";var dvr=ri(),hvr=er(),qvr=ga(),yvr=k7(),bvr=dvr();function wvr(r){return typeof r=="object"?r instanceof qvr?!0:bvr?yvr(r):hvr(r)==="[object Number]":!1}j7.exports=wvr});var V7=a((uve,C7)=>{"use strict";var Evr=To(),Nvr=_o();function Ovr(r){return Evr(r)||Nvr(r)}C7.exports=Ovr});var j=a((ove,G7)=>{"use strict";var U7=b(),Io=V7(),Avr=To(),Svr=_o();U7(Io,"isPrimitive",Avr);U7(Io,"isObject",Svr);G7.exports=Io});var V=a((vve,H7)=>{"use strict";var Tvr=ga(),_vr=Tvr.NEGATIVE_INFINITY;H7.exports=_vr});var Lo=a((fve,W7)=>{"use strict";var Ivr=I(),Lvr=V(),Rvr=Lr();function Pvr(r){return r<Ivr&&r>Lvr&&Rvr(r)}W7.exports=Pvr});var Ro=a((cve,x7)=>{"use strict";var Fvr=j().isPrimitive,Mvr=Lo();function Bvr(r){return Fvr(r)&&Mvr(r)}x7.exports=Bvr});var Po=a((lve,D7)=>{"use strict";var kvr=j().isObject,jvr=Lo();function Cvr(r){return kvr(r)&&jvr(r.valueOf())}D7.exports=Cvr});var X7=a((pve,z7)=>{"use strict";var Vvr=Ro(),Uvr=Po();function Gvr(r){return Vvr(r)||Uvr(r)}z7.exports=Gvr});var Rr=a((gve,Y7)=>{"use strict";var J7=b(),Fo=X7(),Hvr=Ro(),Wvr=Po();J7(Fo,"isPrimitive",Hvr);J7(Fo,"isObject",Wvr);Y7.exports=Fo});var Mo=a((mve,Z7)=>{"use strict";var xvr=Rr().isPrimitive;function Dvr(r){return xvr(r)&&r>=0}Z7.exports=Dvr});var Bo=a((dve,$7)=>{"use strict";var zvr=Rr().isObject;function Xvr(r){return zvr(r)&&r.valueOf()>=0}$7.exports=Xvr});var K7=a((hve,Q7)=>{"use strict";var Jvr=Mo(),Yvr=Bo();function Zvr(r){return Jvr(r)||Yvr(r)}Q7.exports=Zvr});var jr=a((qve,e9)=>{"use strict";var r9=b(),ko=K7(),$vr=Mo(),Qvr=Bo();r9(ko,"isPrimitive",$vr);r9(ko,"isObject",Qvr);e9.exports=ko});var i9=a((yve,t9)=>{"use strict";var Kvr=4294967295;t9.exports=Kvr});var a9=a((bve,n9)=>{"use strict";var rfr=Lr(),efr=i9();function tfr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&rfr(r.length)&&r.length>=0&&r.length<=efr}n9.exports=tfr});var Bt=a((wve,s9)=>{"use strict";var ifr=a9();s9.exports=ifr});var o9=a((Eve,u9)=>{"use strict";var nfr=er(),afr=typeof ArrayBuffer=="function";function sfr(r){return afr&&r instanceof ArrayBuffer||nfr(r)==="[object ArrayBuffer]"}u9.exports=sfr});var ma=a((Nve,v9)=>{"use strict";var ufr=o9();v9.exports=ufr});var c9=a((Ove,f9)=>{"use strict";var ofr=mr();function vfr(r){return typeof r=="object"&&r!==null&&!ofr(r)}f9.exports=vfr});var da=a((Ave,l9)=>{"use strict";var ffr=c9();l9.exports=ffr});var g9=a((Sve,p9)=>{"use strict";function cfr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}p9.exports=cfr});var d9=a((Tve,m9)=>{"use strict";function lfr(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}m9.exports=lfr});var w9=a((_ve,b9)=>{"use strict";var h9=j().isPrimitive,q9=De(),sn=b(),y9=y(),pfr=g9(),gfr=d9();function kt(r,e){if(!(this instanceof kt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!h9(r))throw new TypeError(y9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!h9(e))throw new TypeError(y9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return q9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),q9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}sn(kt,"BYTES_PER_ELEMENT",8);sn(kt.prototype,"BYTES_PER_ELEMENT",8);sn(kt.prototype,"byteLength",16);sn(kt.prototype,"toString",pfr);sn(kt.prototype,"toJSON",gfr);b9.exports=kt});var si=a((Ive,E9)=>{"use strict";var mfr=w9();E9.exports=mfr});var O9=a((Lve,N9)=>{"use strict";var dfr=typeof Math.fround=="function"?Math.fround:null;N9.exports=dfr});var T9=a((Rve,S9)=>{"use strict";var hfr=Zr(),A9=new hfr(1);function qfr(r){return A9[0]=r,A9[0]}S9.exports=qfr});var L9=a((Pve,I9)=>{"use strict";var _9=O9(),yfr=T9(),jo;typeof _9=="function"?jo=_9:jo=yfr;I9.exports=jo});var P9=a((Fve,R9)=>{"use strict";function bfr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}R9.exports=bfr});var M9=a((Mve,F9)=>{"use strict";function wfr(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}F9.exports=wfr});var U9=a((Bve,V9)=>{"use strict";var B9=j().isPrimitive,k9=De(),un=b(),j9=L9(),C9=y(),Efr=P9(),Nfr=M9();function jt(r,e){if(!(this instanceof jt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!B9(r))throw new TypeError(C9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!B9(e))throw new TypeError(C9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return k9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:j9(r)}),k9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:j9(e)}),this}un(jt,"BYTES_PER_ELEMENT",4);un(jt.prototype,"BYTES_PER_ELEMENT",4);un(jt.prototype,"byteLength",8);un(jt.prototype,"toString",Efr);un(jt.prototype,"toJSON",Nfr);V9.exports=jt});var ui=a((kve,G9)=>{"use strict";var Ofr=U9();G9.exports=Ofr});var W9=a((jve,H9)=>{"use strict";var Afr=si(),Sfr=ui();function Tfr(r){return r instanceof Afr||r instanceof Sfr?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}H9.exports=Tfr});var xr=a((Cve,x9)=>{"use strict";var _fr=W9();x9.exports=_fr});var z9=a((Vve,D9)=>{"use strict";var Ifr=Lr();function Lfr(r){return Ifr(r/2)}D9.exports=Lfr});var ha=a((Uve,X9)=>{"use strict";var Rfr=z9();X9.exports=Rfr});var Y9=a((Gve,J9)=>{"use strict";var Pfr=A(),qa=Qu();function Ffr(){return typeof qa=="function"&&typeof qa("foo")=="symbol"&&Pfr(qa,"iterator")&&typeof qa.iterator=="symbol"}J9.exports=Ffr});var ya=a((Hve,Z9)=>{"use strict";var Mfr=Y9();Z9.exports=Mfr});var Q9=a((Wve,$9)=>{"use strict";var Bfr=ya(),kfr=Bfr()?Symbol.iterator:null;$9.exports=kfr});var ba=a((xve,K9)=>{"use strict";var jfr=Q9();K9.exports=jfr});var ep=a((Dve,rp)=>{"use strict";var Cfr=De();function Vfr(r,e,t){Cfr(r,e,{configurable:!1,enumerable:!1,get:t})}rp.exports=Vfr});var R=a((zve,tp)=>{"use strict";var Ufr=ep();tp.exports=Ufr});var np=a((Xve,ip)=>{"use strict";function Gfr(r){return r.re}ip.exports=Gfr});var Je=a((Jve,ap)=>{"use strict";var Hfr=np();ap.exports=Hfr});var up=a((Yve,sp)=>{"use strict";function Wfr(r){return r.im}sp.exports=Wfr});var Ye=a((Zve,op)=>{"use strict";var xfr=up();op.exports=xfr});var fp=a(($ve,vp)=>{"use strict";var Dfr=Zr();function zfr(r,e){return new Dfr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}vp.exports=zfr});var oi=a((Qve,cp)=>{"use strict";var Xfr=fp();cp.exports=Xfr});var pp=a((Kve,lp)=>{"use strict";var Jfr=cr();function Yfr(r,e){return new Jfr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}lp.exports=Yfr});var vi=a((rfe,gp)=>{"use strict";var Zfr=pp();gp.exports=Zfr});var hp=a((efe,dp)=>{"use strict";var mp={float64:$fr,float32:Qfr,int32:Kfr,int16:r6r,int8:e6r,uint32:t6r,uint16:i6r,uint8:n6r,uint8c:a6r,generic:s6r,default:u6r};function $fr(r,e){return r[e]}function Qfr(r,e){return r[e]}function Kfr(r,e){return r[e]}function r6r(r,e){return r[e]}function e6r(r,e){return r[e]}function t6r(r,e){return r[e]}function i6r(r,e){return r[e]}function n6r(r,e){return r[e]}function a6r(r,e){return r[e]}function s6r(r,e){return r[e]}function u6r(r,e){return r[e]}function o6r(r){var e=mp[r];return typeof e=="function"?e:mp.default}dp.exports=o6r});var wa=a((tfe,qp)=>{"use strict";var v6r=hp();qp.exports=v6r});var wp=a((ife,bp)=>{"use strict";var yp={complex128:f6r,complex64:c6r,default:l6r};function f6r(r,e){return r.get(e)}function c6r(r,e){return r.get(e)}function l6r(r,e){return r.get(e)}function p6r(r){var e=yp[r];return typeof e=="function"?e:yp.default}bp.exports=p6r});var Ea=a((nfe,Ep)=>{"use strict";var g6r=wp();Ep.exports=g6r});var Op=a((afe,Np)=>{"use strict";var m6r=Bt(),d6r=xr(),h6r=Je(),q6r=Ye(),y6r=y();function b6r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,m6r(i)&&i.length>=2)e.push(i[0],i[1]);else if(d6r(i))e.push(h6r(i),q6r(i));else return new TypeError(y6r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Np.exports=b6r});var Sp=a((sfe,Ap)=>{"use strict";var w6r=Bt(),E6r=xr(),N6r=Je(),O6r=Ye(),A6r=y();function S6r(r,e,t){var i,n,s,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,s=e.call(t,n.value,u),w6r(s)&&s.length>=2)i.push(s[0],s[1]);else if(E6r(s))i.push(N6r(s),O6r(s));else return new TypeError(A6r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));return i}Ap.exports=S6r});var _p=a((ufe,Tp)=>{"use strict";var T6r=xr(),_6r=Je(),I6r=Ye();function L6r(r,e){var t,i,n,s;for(t=e.length,s=0,n=0;n<t;n++){if(i=e[n],!T6r(i))return null;r[s]=_6r(i),r[s+1]=I6r(i),s+=2}return r}Tp.exports=L6r});var jp=a((ofe,kp)=>{"use strict";var on=jr().isPrimitive,Ip=Bt(),Vo=Wr(),Lp=ma(),Rp=da(),R6r=mr(),Ct=_(),fi=xr(),Na=ha(),Co=Lr(),P6r=ya(),ci=ba(),dr=b(),Sa=R(),Cr=Zr(),Pp=ui(),Z=y(),Oa=Je(),Aa=Ye(),F6r=oi(),M6r=vi(),B6r=wa(),k6r=Ea(),Fp=Op(),j6r=Sp(),C6r=_p(),Pr=Cr.BYTES_PER_ELEMENT*2,Mp=P6r();function li(r){return r instanceof tr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Bp(r){return r===tr||r.name==="Complex128Array"}function V6r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Pr}function U6r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Pr*2}function tr(){var r,e,t,i;if(e=arguments.length,!(this instanceof tr))return e===0?new tr:e===1?new tr(arguments[0]):e===2?new tr(arguments[0],arguments[1]):new tr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Cr(0);else if(e===1)if(on(arguments[0]))t=new Cr(arguments[0]*2);else if(Vo(arguments[0]))if(t=arguments[0],i=t.length,i&&R6r(t)&&fi(t[0])){if(t=C6r(new Cr(i*2),t),t===null){if(!Na(i))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Cr(arguments[0])}}else{if(V6r(t))t=F6r(t,0);else if(U6r(t))t=M6r(t,0);else if(!Na(i))throw new RangeError(Z("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Cr(t)}else if(Lp(arguments[0])){if(t=arguments[0],!Co(t.byteLength/Pr))throw new RangeError(Z("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Pr,t.byteLength));t=new Cr(t)}else if(Rp(arguments[0])){if(t=arguments[0],Mp===!1)throw new TypeError(Z("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ct(t[ci]))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ci](),!Ct(t.next))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Fp(t),t instanceof Error)throw t;t=new Cr(t)}else throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!Lp(t))throw new TypeError(Z("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!on(r))throw new TypeError(Z("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Co(r/Pr))throw new RangeError(Z("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Pr,r));if(e===2){if(i=t.byteLength-r,!Co(i/Pr))throw new RangeError(Z("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Pr,i));t=new Cr(t,r)}else{if(i=arguments[2],!on(i))throw new TypeError(Z("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Pr>t.byteLength-r)throw new RangeError(Z("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Pr));t=new Cr(t,r,i*2)}}return dr(this,"_buffer",t),dr(this,"_length",t.length/2),this}dr(tr,"BYTES_PER_ELEMENT",Pr);dr(tr,"name","Complex64Array");dr(tr,"from",function(e){var t,i,n,s,u,o,f,v,c,l,p,g;if(!Ct(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Bp(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Ct(n))throw new TypeError(Z("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(li(e)){if(v=e.length,n){for(s=new this(v),u=s._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),fi(l))u[g]=Oa(l),u[g+1]=Aa(l);else if(Ip(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return s}return new this(e)}if(Vo(e)){if(n){for(v=e.length,e.get&&e.set?f=k6r("default"):f=B6r("default"),p=0;p<v;p++)if(!fi(f(e,p))){c=!0;break}if(c){if(!Na(v))throw new RangeError(Z("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,v));for(s=new this(v/2),u=s._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return s}for(s=new this(v),u=s._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),fi(l))u[g]=Oa(l),u[g+1]=Aa(l);else if(Ip(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return s}return new this(e)}if(Rp(e)&&Mp&&Ct(e[ci])){if(u=e[ci](),!Ct(u.next))throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=j6r(u,n,t):o=Fp(u),o instanceof Error)throw o;for(v=o.length/2,s=new this(v),u=s._buffer,p=0;p<v;p++)u[p]=o[p];return s}throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});dr(tr,"of",function(){var e,t;if(!Ct(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Bp(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Sa(tr.prototype,"buffer",function(){return this._buffer.buffer});Sa(tr.prototype,"byteLength",function(){return this._buffer.byteLength});Sa(tr.prototype,"byteOffset",function(){return this._buffer.byteOffset});dr(tr.prototype,"BYTES_PER_ELEMENT",tr.BYTES_PER_ELEMENT);dr(tr.prototype,"copyWithin",function(e,t){if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});dr(tr.prototype,"entries",function(){var e,t,i,n,s,u,o;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},dr(i,"next",f),dr(i,"return",v),ci&&dr(i,ci,c),i;function f(){var l;return u+=1,s||u>=n?{done:!0}:(o+=2,l=new Pp(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return s=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});dr(tr.prototype,"get",function(e){var t;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!on(e))throw new TypeError(Z("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Pp(t[e],t[e+1])});Sa(tr.prototype,"length",function(){return this._length});dr(tr.prototype,"set",function(e){var t,i,n,s,u,o,f,v,c;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!on(i))throw new TypeError(Z("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(fi(e)){if(i>=this._length)throw new RangeError(Z("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Oa(e),n[i+1]=Aa(e);return}if(li(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(s=new Cr(t.length),v=0;v<t.length;v++)s[v]=t[v];t=s}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(Vo(e)){for(o=e.length,v=0;v<o;v++)if(!fi(e[v])){u=!0;break}if(u){if(!Na(o))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(s=new Cr(o),v=0;v<o;v++)s[v]=t[v];t=s}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=Oa(f),n[i+1]=Aa(f),i+=2;return}throw new TypeError(Z("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});kp.exports=tr});var pi=a((vfe,Cp)=>{"use strict";var G6r=jp();Cp.exports=G6r});var Up=a((ffe,Vp)=>{"use strict";function H6r(r){return r.re}Vp.exports=H6r});var Qr=a((cfe,Gp)=>{"use strict";var W6r=Up();Gp.exports=W6r});var Wp=a((lfe,Hp)=>{"use strict";function x6r(r){return r.im}Hp.exports=x6r});var Kr=a((pfe,xp)=>{"use strict";var D6r=Wp();xp.exports=D6r});var zp=a((gfe,Dp)=>{"use strict";var z6r=Bt(),X6r=xr(),J6r=y(),Y6r=Qr(),Z6r=Kr();function $6r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,z6r(i)&&i.length>=2)e.push(i[0],i[1]);else if(X6r(i))e.push(Y6r(i),Z6r(i));else return new TypeError(J6r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Dp.exports=$6r});var Jp=a((mfe,Xp)=>{"use strict";var Q6r=Bt(),K6r=xr(),rcr=y(),ecr=Qr(),tcr=Kr();function icr(r,e,t){var i,n,s,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,s=e.call(t,n.value,u),Q6r(s)&&s.length>=2)i.push(s[0],s[1]);else if(K6r(s))i.push(ecr(s),tcr(s));else return new TypeError(rcr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",s));return i}Xp.exports=icr});var Zp=a((dfe,Yp)=>{"use strict";var ncr=xr(),acr=Qr(),scr=Kr();function ucr(r,e){var t,i,n,s;for(t=e.length,s=0,n=0;n<t;n++){if(i=e[n],!ncr(i))return null;r[s]=acr(i),r[s+1]=scr(i),s+=2}return r}Yp.exports=ucr});var ag=a((hfe,ng)=>{"use strict";var vn=jr().isPrimitive,$p=Bt(),Go=Wr(),Qp=ma(),Kp=da(),ocr=mr(),Vt=_(),gi=xr(),Ta=ha(),Uo=Lr(),vcr=ya(),mi=ba(),hr=b(),La=R(),Vr=cr(),rg=si(),_a=Qr(),Ia=Kr(),fcr=oi(),ccr=vi(),lcr=wa(),pcr=Ea(),$=y(),eg=zp(),gcr=Jp(),mcr=Zp(),Fr=Vr.BYTES_PER_ELEMENT*2,tg=vcr();function di(r){return r instanceof ir||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function ig(r){return r===ir||r.name==="Complex64Array"}function dcr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Fr/2}function hcr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Fr}function ir(){var r,e,t,i;if(e=arguments.length,!(this instanceof ir))return e===0?new ir:e===1?new ir(arguments[0]):e===2?new ir(arguments[0],arguments[1]):new ir(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Vr(0);else if(e===1)if(vn(arguments[0]))t=new Vr(arguments[0]*2);else if(Go(arguments[0]))if(t=arguments[0],i=t.length,i&&ocr(t)&&gi(t[0])){if(t=mcr(new Vr(i*2),t),t===null){if(!Ta(i))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Vr(arguments[0])}}else{if(dcr(t))t=fcr(t,0);else if(hcr(t))t=ccr(t,0);else if(!Ta(i))throw new RangeError($("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Vr(t)}else if(Qp(arguments[0])){if(t=arguments[0],!Uo(t.byteLength/Fr))throw new RangeError($("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Fr,t.byteLength));t=new Vr(t)}else if(Kp(arguments[0])){if(t=arguments[0],tg===!1)throw new TypeError($("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Vt(t[mi]))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[mi](),!Vt(t.next))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=eg(t),t instanceof Error)throw t;t=new Vr(t)}else throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!Qp(t))throw new TypeError($("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!vn(r))throw new TypeError($("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Uo(r/Fr))throw new RangeError($("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Fr,r));if(e===2){if(i=t.byteLength-r,!Uo(i/Fr))throw new RangeError($("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Fr,i));t=new Vr(t,r)}else{if(i=arguments[2],!vn(i))throw new TypeError($("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Fr>t.byteLength-r)throw new RangeError($("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Fr));t=new Vr(t,r,i*2)}}return hr(this,"_buffer",t),hr(this,"_length",t.length/2),this}hr(ir,"BYTES_PER_ELEMENT",Fr);hr(ir,"name","Complex128Array");hr(ir,"from",function(e){var t,i,n,s,u,o,f,v,c,l,p,g;if(!Vt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ig(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Vt(n))throw new TypeError($("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(di(e)){if(v=e.length,n){for(s=new this(v),u=s._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),gi(l))u[g]=_a(l),u[g+1]=Ia(l);else if($p(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return s}return new this(e)}if(Go(e)){if(n){for(v=e.length,e.get&&e.set?f=pcr("default"):f=lcr("default"),p=0;p<v;p++)if(!gi(f(e,p))){c=!0;break}if(c){if(!Ta(v))throw new RangeError($("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",v));for(s=new this(v/2),u=s._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return s}for(s=new this(v),u=s._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),gi(l))u[g]=_a(l),u[g+1]=Ia(l);else if($p(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return s}return new this(e)}if(Kp(e)&&tg&&Vt(e[mi])){if(u=e[mi](),!Vt(u.next))throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=gcr(u,n,t):o=eg(u),o instanceof Error)throw o;for(v=o.length/2,s=new this(v),u=s._buffer,p=0;p<v;p++)u[p]=o[p];return s}throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});hr(ir,"of",function(){var e,t;if(!Vt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ig(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});La(ir.prototype,"buffer",function(){return this._buffer.buffer});La(ir.prototype,"byteLength",function(){return this._buffer.byteLength});La(ir.prototype,"byteOffset",function(){return this._buffer.byteOffset});hr(ir.prototype,"BYTES_PER_ELEMENT",ir.BYTES_PER_ELEMENT);hr(ir.prototype,"copyWithin",function(e,t){if(!di(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});hr(ir.prototype,"entries",function(){var e,t,i,n,s,u,o;if(!di(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},hr(i,"next",f),hr(i,"return",v),mi&&hr(i,mi,c),i;function f(){var l;return u+=1,s||u>=n?{done:!0}:(o+=2,l=new rg(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return s=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});hr(ir.prototype,"get",function(e){var t;if(!di(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!vn(e))throw new TypeError($("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new rg(t[e],t[e+1])});La(ir.prototype,"length",function(){return this._length});hr(ir.prototype,"set",function(e){var t,i,n,s,u,o,f,v,c;if(!di(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!vn(i))throw new TypeError($("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(gi(e)){if(i>=this._length)throw new RangeError($("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=_a(e),n[i+1]=Ia(e);return}if(di(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Fr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(s=new Vr(t.length),v=0;v<t.length;v++)s[v]=t[v];t=s}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(Go(e)){for(o=e.length,v=0;v<o;v++)if(!gi(e[v])){u=!0;break}if(u){if(!Ta(o))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Fr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(s=new Vr(o),v=0;v<o;v++)s[v]=t[v];t=s}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=_a(f),n[i+1]=Ia(f),i+=2;return}throw new TypeError($("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});ng.exports=ir});var hi=a((qfe,sg)=>{"use strict";var qcr=ag();sg.exports=qcr});var og=a((yfe,ug)=>{"use strict";var ycr=cr(),bcr=Zr(),wcr=lr(),Ecr=Xe(),Ncr=Mt(),Ocr=ii(),Acr=$r(),Scr=ni(),Tcr=ai(),_cr=pi(),Icr=hi(),Lcr=[ycr,bcr,Ecr,wcr,Ocr,Ncr,Tcr,Acr,Scr,_cr,Icr];ug.exports=Lcr});var fg=a((bfe,vg)=>{"use strict";var Rcr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];vg.exports=Rcr});var pg=a((wfe,lg)=>{"use strict";var Pcr=Ft(),Fcr=mr(),Mcr=ze(),Bcr=Pl(),kcr=og(),cg=fg(),jcr=cg.length;function Ccr(r){var e;if(Fcr(r))return"generic";if(Pcr(r))return null;for(e=0;e<jcr;e++)if(r instanceof kcr[e])return cg[e];return Bcr[Mcr(r)]||null}lg.exports=Ccr});var Ra=a((Efe,gg)=>{"use strict";var Vcr=pg();gg.exports=Vcr});var hg=a((Nfe,dg)=>{"use strict";var mg=_(),Ucr=Wr(),Gcr=ql(),Hcr=fo(),Wcr=co(),xcr=lo(),Dcr=Ra(),Ho=y();function zcr(){var r,e,t,i,n,s,u,o,f;if(r=arguments[0],arguments.length>1)if(Ucr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!mg(t))throw new TypeError(Ho("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!mg(t))throw new TypeError(Ho("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!Gcr(r))throw new TypeError(Ho("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,f=r.next(),!f.done;)i.push(t.call(e,f.value,o));return i}for(;f=r.next(),!f.done;)i.push(f.value);return i}if(n=i.length,u=Dcr(i),Hcr(i)?s=Wcr(u):s=xcr(u),t){for(;o<n-1&&(o+=1,f=r.next(),!f.done);)s(i,o,t.call(e,f.value,o));return i}for(;o<n-1&&(o+=1,f=r.next(),!f.done);)s(i,o,f.value);return i}dg.exports=zcr});var yg=a((Ofe,qg)=>{"use strict";var Xcr=hg();qg.exports=Xcr});var wg=a((Afe,bg)=>{"use strict";function Jcr(r){return r!==r}bg.exports=Jcr});var E=a((Sfe,Eg)=>{"use strict";var Ycr=wg();Eg.exports=Ycr});var Og=a((Tfe,Ng)=>{"use strict";var Zcr={Complex64:"complex64",Complex128:"complex128"};Ng.exports=Zcr});var Sg=a((_fe,Ag)=>{"use strict";var $cr=ui(),Qcr=si(),Kcr=[$cr,Qcr];Ag.exports=Kcr});var _g=a((Ife,Tg)=>{"use strict";var r4r=["complex64","complex128"];Tg.exports=r4r});var Rg=a((Lfe,Lg)=>{"use strict";var e4r=ze(),t4r=Og(),i4r=Sg(),Ig=_g(),n4r=Ig.length;function a4r(r){var e;for(e=0;e<n4r;e++)if(r instanceof i4r[e])return Ig[e];return t4r[e4r(r)]||null}Lg.exports=a4r});var Wo=a((Rfe,Pg)=>{"use strict";var s4r=Rg();Pg.exports=s4r});var Mg=a((Pfe,Fg)=>{"use strict";var u4r=cr(),o4r=Zr(),v4r=hi(),f4r=pi(),c4r={float64:u4r,float32:o4r,complex128:v4r,complex64:f4r};Fg.exports=c4r});var kg=a((Ffe,Bg)=>{"use strict";var l4r=Mg();function p4r(r){return l4r[r]||null}Bg.exports=p4r});var Cg=a((Mfe,jg)=>{"use strict";var g4r=kg();jg.exports=g4r});var Ug=a((Bfe,Vg)=>{"use strict";function m4r(r,e,t,i){var n,s,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?s=t-1:s=t,u=(e-r)/s,o=1;o<s;o++)n.push(r+u*o);return i&&n.push(e),n}Vg.exports=m4r});var zg=a((kfe,Dg)=>{"use strict";var d4r=ui(),h4r=si(),Gg=Qr(),Hg=Kr(),Wg=Je(),xg=Ye();function q4r(r,e,t,i,n,s){var u,o,f,v,c,l,p,g,h,d,m,q,N;if(n===0)return[];if(o=0,r==="float64"?(v=e,l=0):r==="complex64"?(o+=1,v=Wg(e),l=xg(e)):(v=Gg(e),l=Hg(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=Wg(i),p=xg(i)):(c=Gg(i),p=Hg(i)),o===2?u=d4r:u=h4r,n===1)return s?[new u(c,p)]:[new u(v,l)];for(f=[new u(v,l)],s?q=n-1:q=n,d=(c-v)/q,m=(p-l)/q,N=1;N<q;N++)g=v+d*N,h=l+m*N,f.push(new u(g,h));return s&&f.push(new u(c,p)),f}Dg.exports=q4r});var xo=a((jfe,Xg)=>{"use strict";function y4r(r,e,t,i,n){var s,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?s=i-1:s=i,u=(t-e)/s,o=1;o<s;o++)r[o]=e+u*o;return n&&(r[s]=t),r}Xg.exports=y4r});var Do=a((Cfe,Qg)=>{"use strict";var Jg=Qr(),Yg=Kr(),Zg=Je(),$g=Ye();function b4r(r,e,t,i,n,s,u){var o,f,v,c,l,p,g,h,d;if(s===0)return r;if(e==="float64"?(o=t,v=0):e==="complex64"?(o=Zg(t),v=$g(t)):(o=Jg(t),v=Yg(t)),i==="float64"?(f=n,c=0):i==="complex64"?(f=Zg(n),c=$g(n)):(f=Jg(n),c=Yg(n)),s===1)return u?(r[0]=f,r[1]=c):(r[0]=o,r[1]=v),r;for(r[0]=o,r[1]=v,u?g=s-1:g=s,l=(f-o)/g,p=(c-v)/g,d=2,h=1;h<g;h++)r[d]=o+l*h,r[d+1]=v+p*h,d+=2;return u&&(r[d]=f,r[d+1]=c),r}Qg.exports=b4r});var rm=a((Vfe,Kg)=>{"use strict";var w4r=Object;Kg.exports=w4r});var qi=a((Ufe,em)=>{"use strict";var E4r=rm();em.exports=E4r});var im=a((Gfe,tm)=>{"use strict";var N4r=Object.getPrototypeOf;tm.exports=N4r});var am=a((Hfe,nm)=>{"use strict";function O4r(r){return r.__proto__}nm.exports=O4r});var um=a((Wfe,sm)=>{"use strict";var A4r=er(),S4r=am();function T4r(r){var e=S4r(r);return e||e===null?e:A4r(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}sm.exports=T4r});var vm=a((xfe,om)=>{"use strict";var _4r=_(),I4r=im(),L4r=um(),zo;_4r(Object.getPrototypeOf)?zo=I4r:zo=L4r;om.exports=zo});var cm=a((Dfe,fm)=>{"use strict";var R4r=qi(),P4r=vm();function F4r(r){return r==null?null:(r=R4r(r),P4r(r))}fm.exports=F4r});var Ut=a((zfe,lm)=>{"use strict";var M4r=cm();lm.exports=M4r});var mm=a((Xfe,gm)=>{"use strict";var B4r=da(),pm=_(),k4r=Ut(),Pa=A(),j4r=er(),C4r=Object.prototype;function V4r(r){var e;for(e in r)if(!Pa(r,e))return!1;return!0}function U4r(r){var e;return B4r(r)?(e=k4r(r),e?!Pa(r,"constructor")&&Pa(e,"constructor")&&pm(e.constructor)&&j4r(e.constructor)==="[object Function]"&&Pa(e,"isPrototypeOf")&&pm(e.isPrototypeOf)&&(e===C4r||V4r(r)):!0):!1}gm.exports=U4r});var L=a((Jfe,dm)=>{"use strict";var G4r=mm();dm.exports=G4r});var Xo=a((Yfe,hm)=>{"use strict";function H4r(r){return typeof r=="string"}hm.exports=H4r});var ym=a((Zfe,qm)=>{"use strict";var W4r=String.prototype.valueOf;qm.exports=W4r});var wm=a(($fe,bm)=>{"use strict";var x4r=ym();function D4r(r){try{return x4r.call(r),!0}catch{return!1}}bm.exports=D4r});var Jo=a((Qfe,Em)=>{"use strict";var z4r=ri(),X4r=er(),J4r=wm(),Y4r=z4r();function Z4r(r){return typeof r=="object"?r instanceof String?!0:Y4r?J4r(r):X4r(r)==="[object String]":!1}Em.exports=Z4r});var Om=a((Kfe,Nm)=>{"use strict";var $4r=Xo(),Q4r=Jo();function K4r(r){return $4r(r)||Q4r(r)}Nm.exports=K4r});var K=a((r6e,Sm)=>{"use strict";var Am=b(),Yo=Om(),rlr=Xo(),elr=Jo();Am(Yo,"isPrimitive",rlr);Am(Yo,"isObject",elr);Sm.exports=Yo});var $o=a((e6e,_m)=>{"use strict";var tlr=L(),Tm=A(),ilr=K().isPrimitive,nlr=gr().isPrimitive,Zo=y();function alr(r,e){return tlr(e)?Tm(e,"dtype")&&(r.dtype=e.dtype,!ilr(r.dtype))?new TypeError(Zo("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):Tm(e,"endpoint")&&(r.endpoint=e.endpoint,!nlr(r.endpoint))?new TypeError(Zo("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(Zo("invalid argument. Options argument must be an object. Value: `%s`.",e))}_m.exports=alr});var Qo=a((t6e,slr)=>{slr.exports={endpoint:!0}});var Bm=a((i6e,Mm)=>{"use strict";var Im=xr(),Lm=j().isPrimitive,ulr=jr().isPrimitive,Rm=E(),Pm=Wo(),olr=Cg(),vlr=oi(),flr=vi(),yi=y(),clr=Ug(),llr=zg(),plr=xo(),Fm=Do(),glr=$o(),mlr=Qo();function dlr(r,e,t){var i,n,s,u,o,f,v;if(typeof r=="object"){if(o=Pm(r),o===null){if(!Im(r))throw new TypeError(yi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}v=!0}else{if(!Lm(r)||Rm(r))throw new TypeError(yi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(f=Pm(e),f===null){if(!Im(e))throw new TypeError(yi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="complex128"}v=!0}else{if(!Lm(e)||Rm(e))throw new TypeError(yi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="float64"}if(!ulr(t))throw new TypeError(yi("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:mlr.endpoint},o===f?i.dtype=o:i.dtype="complex128",arguments.length>3&&(s=glr(i,arguments[3]),s))throw s;if(i.dtype==="generic")return v?llr(o,r,f,e,t,i.endpoint):clr(r,e,t,i.endpoint);if(n=olr(i.dtype),n===null)throw new TypeError(yi('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return Fm(vlr(u,0),o,r,f,e,t,i.endpoint),u;if(i.dtype==="complex128")return Fm(flr(u,0),o,r,f,e,t,i.endpoint),u;if(v)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return plr(u,r,e,t,i.endpoint)}Mm.exports=dlr});var jm=a((n6e,km)=>{"use strict";var hlr=fo(),qlr=wa(),ylr=lo(),blr=Ea(),wlr=co(),Elr=Ra();function Nlr(r){var e=Elr(r);return hlr(r)?{accessorProtocol:!0,accessors:[blr(e),wlr(e)]}:{accessorProtocol:!1,accessors:[qlr(e),ylr(e)]}}km.exports=Nlr});var Vm=a((a6e,Cm)=>{"use strict";var Olr=jm();Cm.exports=Olr});var Gm=a((s6e,Um)=>{"use strict";var Alr=Vm();function Slr(r){var e=Alr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}Um.exports=Slr});var fn=a((u6e,Hm)=>{"use strict";var Tlr=Gm();Hm.exports=Tlr});var Jm=a((o6e,Xm)=>{"use strict";var _lr=ui(),Ilr=si(),Wm=Qr(),xm=Kr(),Dm=Je(),zm=Ye();function Llr(r,e,t,i,n,s,u){var o,f,v,c,l,p,g,h,d,m,q,N,O,F;if(s===0)return r;if(f=0,e==="float64"?(v=t,l=0):e==="complex64"?(f+=1,v=Dm(t),l=zm(t)):(v=Wm(t),l=xm(t)),i==="float64"?(c=n,p=0):i==="complex64"?(f+=1,c=Dm(n),p=zm(n)):(c=Wm(n),p=xm(n)),f===2?o=_lr:o=Ilr,h=r.data,g=r.accessors[1],s===1)return u?g(h,0,new o(c,p)):g(h,0,new o(v,l)),r;for(g(h,0,new o(v,l)),u?O=s-1:O=s,q=(c-v)/O,N=(p-l)/O,F=1;F<O;F++)d=v+q*F,m=l+N*F,g(h,F,new o(d,m));return u&&g(h,O,new o(c,p)),r}Xm.exports=Llr});var Zm=a((v6e,Ym)=>{"use strict";function Rlr(r,e,t,i,n){var s,u,o,f,v;if(i===0)return r;if(s=r.data,u=r.accessors[1],i===1)return n?u(s,0,t):u(s,0,e),r;for(u(s,0,e),n?o=i-1:o=i,f=(t-e)/o,v=1;v<o;v++)u(s,v,e+f*v);return n&&u(s,o,t),r}Ym.exports=Rlr});var nd=a((f6e,id)=>{"use strict";var $m=xr(),Qm=j().isPrimitive,Plr=Wr(),cn=y(),Km=E(),rd=Wo(),Flr=Ra(),Mlr=oi(),Blr=vi(),ed=fn(),klr=Jm(),jlr=Zm(),td=Do(),Clr=xo(),Vlr=$o(),Ulr=Qo();function Glr(r,e,t){var i,n,s,u,o,f,v;if(typeof r=="object"){if(s=rd(r),s===null){if(!$m(r))throw new TypeError(cn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));s="complex128"}o=!0}else{if(!Qm(r)||Km(r))throw new TypeError(cn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));s="float64"}if(typeof e=="object"){if(u=rd(e),u===null){if(!$m(e))throw new TypeError(cn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!Qm(e)||Km(e))throw new TypeError(cn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!Plr(t))throw new TypeError(cn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:Ulr.endpoint},arguments.length>3&&(n=Vlr(i,arguments[3]),n))throw n;if(f=Flr(t),f===null&&(f="generic"),f==="complex64")return td(Mlr(t,0),s,r,u,e,t.length,i.endpoint),t;if(f==="complex128")return td(Blr(t,0),s,r,u,e,t.length,i.endpoint),t;if(o){if(f==="generic")return v=ed(t),klr(v,s,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return v=ed(t),v.accessorProtocol?(jlr(v,r,e,t.length,i.endpoint),t):(Clr(t,r,e,t.length,i.endpoint),t)}id.exports=Glr});var ud=a((c6e,sd)=>{"use strict";var Hlr=b(),ad=Bm(),Wlr=nd();Hlr(ad,"assign",Wlr);sd.exports=ad});var vd=a((l6e,od)=>{"use strict";var xlr=j().isPrimitive,Dlr=K().isPrimitive,zlr=gr().isPrimitive,Xlr=mr(),Jlr=y(),Ylr={number:xlr,string:Dlr,boolean:zlr};function Zlr(r,e,t){var i,n,s,u,o,f;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],f=0;f<r.length;f++)if(o=r[f],s=e[f],u=Ylr[s],u(o))i.push([[o]]),n.push([1,1]);else if(Xlr(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(Jlr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[f],s,s,String(o)));return[i,n]}od.exports=Zlr});var Fa=a((p6e,fd)=>{"use strict";var $lr=vd();fd.exports=$lr});var ld=a((g6e,cd)=>{"use strict";var Qlr=ca();function Klr(r){return Qlr(1,r)}cd.exports=Klr});var gd=a((m6e,pd)=>{"use strict";var r8r=ld();pd.exports=r8r});var dd=a((d6e,md)=>{"use strict";function e8r(r,e,t){var i,n,s,u,o,f,v,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(v=r[0],c=r[1],u=0;u<n;u++)for(o=v[u],f=c[u],s=0;s<i;s++)f[s]=t(o[s])}md.exports=e8r});var Ko=a((h6e,hd)=>{"use strict";var t8r=dd();hd.exports=t8r});var yd=a((q6e,qd)=>{"use strict";var i8r=ca();function n8r(r){return i8r(0,r)}qd.exports=n8r});var Ma=a((y6e,bd)=>{"use strict";var a8r=yd();bd.exports=a8r});var Ed=a((b6e,wd)=>{"use strict";var Mr=rr(),s8r=zu(),u8r=Ju(),o8r=fa(),v8r=ca(),f8r=Nc(),c8r=Yu(),l8r=yg(),p8r=ud(),g8r=Fa(),m8r=gd(),d8r=Ko(),h8r=va(),q8r=Ma();function y8r(r){return Mr(r,"bbinary2d",s8r),Mr(r,"bternary2d",u8r),Mr(r,"broadcastShapes",o8r),Mr(r,"filled2d",v8r),Mr(r,"filled2dBy",f8r),Mr(r,"flattenArray",c8r),Mr(r,"iterator2array",l8r),Mr(r,"linspace",p8r),Mr(r,"normalizeBroadcastArgs",g8r),Mr(r,"ones2d",m8r),Mr(r,"unary2d",d8r),Mr(r,"zeros",h8r),Mr(r,"zeros2d",q8r),r}wd.exports=y8r});var Ad=a((w6e,Od)=>{"use strict";var Nd=y();function b8r(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(Nd('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(Nd('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}Od.exports=b8r});var Td=a((E6e,Sd)=>{"use strict";var w8r=Ad();Sd.exports=w8r});var Id=a((N6e,_d)=>{"use strict";var E8r=j().isPrimitive,N8r=Td(),O8r=y();function A8r(r,e,t,i,n,s){var u,o;if(!(E8r(r)&&N8r(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(O8r("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",s,u,e,t,o,String(r)))}_d.exports=A8r});var Rd=a((O6e,Ld)=>{"use strict";var S8r=Id();Ld.exports=S8r});var Fd=a((A6e,Pd)=>{"use strict";var T8r=gr().isPrimitive,_8r=y();function I8r(r,e){if(!T8r(r))throw new TypeError(_8r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}Pd.exports=I8r});var Bd=a((S6e,Md)=>{"use strict";var L8r=Fd();Md.exports=L8r});var jd=a((T6e,kd)=>{"use strict";function R8r(r){var e,t,i,n,s,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(s=arguments[u],i=s.length,n=s[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}kd.exports=R8r});var Vd=a((_6e,Cd)=>{"use strict";var P8r=jd();Cd.exports=P8r});var Gd=a((I6e,Ud)=>{"use strict";var F8r=y(),M8r=Vd();function B8r(r,e,t){if(!M8r(r,e))throw new TypeError(F8r("invalid argument. %s must be broadcast compatible.",t))}Ud.exports=B8r});var Wd=a((L6e,Hd)=>{"use strict";var k8r=Gd();Hd.exports=k8r});var Dd=a((R6e,xd)=>{"use strict";function j8r(r){var e,t,i,n,s,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(s=arguments[u],i=s.length,n=s[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}xd.exports=j8r});var Xd=a((P6e,zd)=>{"use strict";var C8r=Dd();zd.exports=C8r});var Yd=a((F6e,Jd)=>{"use strict";var V8r=y(),U8r=Xd();function G8r(r,e,t,i){if(!U8r(r,e))throw new TypeError(V8r("invalid argument. %s must be broadcast compatible with %s.",t,i))}Jd.exports=G8r});var $d=a((M6e,Zd)=>{"use strict";var H8r=Yd();Zd.exports=H8r});var Kd=a((B6e,Qd)=>{"use strict";function W8r(r,e,t){var i,n,s,u,o;for(i=r.length,n=t,s=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?s+=u*(r[o]-1):u<0&&(n+=u*(r[o]-1))}return[n,s]}Qd.exports=W8r});var eh=a((k6e,rh)=>{"use strict";function x8r(r,e,t,i){var n,s,u,o,f;for(n=r.length,s=t,u=t,f=0;f<n;f++){if(r[f]===0)return i[0]=t,i[1]=t,i;o=e[f],o>0?u+=o*(r[f]-1):o<0&&(s+=o*(r[f]-1))}return i[0]=s,i[1]=u,i}rh.exports=x8r});var r2=a((j6e,ih)=>{"use strict";var D8r=b(),th=Kd(),z8r=eh();D8r(th,"assign",z8r);ih.exports=th});var ah=a((C6e,nh)=>{"use strict";var X8r=r2();function J8r(r,e,t,i){var n=X8r(e,t,i);return n[0]>=0&&n[1]<r}nh.exports=J8r});var uh=a((V6e,sh)=>{"use strict";var Y8r=ah();sh.exports=Y8r});var vh=a((U6e,oh)=>{"use strict";var Z8r=uh();function $8r(r,e,t,i){if(e.length&&!Z8r(r,e,t,i))throw new Error("invalid arguments. Data buffer is incompatible with the specified ndarray meta data. Ensure that the offset is valid with regard to the strides array and that the data buffer has enough elements to satisfy the desired array shape.")}oh.exports=$8r});var ch=a((G6e,fh)=>{"use strict";var Q8r=vh();fh.exports=Q8r});var ph=a((H6e,lh)=>{"use strict";var K8r=y();function r5r(r,e){if(r===void 0)throw new Error(K8r("invalid invocation. Must provide %s.",e))}lh.exports=r5r});var e2=a((W6e,gh)=>{"use strict";var e5r=ph();gh.exports=e5r});var dh=a((x6e,mh)=>{"use strict";var t5r=y();function i5r(r,e,t,i){if(!(r>e))throw new TypeError(t5r("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}mh.exports=i5r});var qh=a((D6e,hh)=>{"use strict";var n5r=dh();hh.exports=n5r});var bh=a((z6e,yh)=>{"use strict";var a5r=y();function s5r(r,e,t,i){if(!(r>=e))throw new TypeError(a5r("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}yh.exports=s5r});var Eh=a((X6e,wh)=>{"use strict";var u5r=bh();wh.exports=u5r});var Oh=a((J6e,Nh)=>{"use strict";var o5r=Rr().isPrimitive,v5r=y();function f5r(r,e){if(!o5r(r))throw new TypeError(v5r("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}Nh.exports=f5r});var Sh=a((Y6e,Ah)=>{"use strict";var c5r=Oh();Ah.exports=c5r});var _h=a((Z6e,Th)=>{"use strict";var l5r=y();function p5r(r,e,t,i){if(!(r<e))throw new TypeError(l5r("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}Th.exports=p5r});var Lh=a(($6e,Ih)=>{"use strict";var g5r=_h();Ih.exports=g5r});var Ph=a((Q6e,Rh)=>{"use strict";var m5r=y();function d5r(r,e,t,i){if(!(r<=e))throw new TypeError(m5r("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}Rh.exports=d5r});var Mh=a((K6e,Fh)=>{"use strict";var h5r=Ph();Fh.exports=h5r});var kh=a((rce,Bh)=>{"use strict";var q5r=jr().isPrimitive,y5r=y();function b5r(r,e){if(!q5r(r))throw new TypeError(y5r("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}Bh.exports=b5r});var Ch=a((ece,jh)=>{"use strict";var w5r=kh();jh.exports=w5r});var t2=a((tce,Vh)=>{"use strict";var E5r=j().isPrimitive;function N5r(r){return E5r(r)&&r>=0}Vh.exports=N5r});var i2=a((ice,Uh)=>{"use strict";var O5r=j().isObject;function A5r(r){return O5r(r)&&r.valueOf()>=0}Uh.exports=A5r});var Hh=a((nce,Gh)=>{"use strict";var S5r=t2(),T5r=i2();function _5r(r){return S5r(r)||T5r(r)}Gh.exports=_5r});var Ba=a((ace,xh)=>{"use strict";var Wh=b(),n2=Hh(),I5r=t2(),L5r=i2();Wh(n2,"isPrimitive",I5r);Wh(n2,"isObject",L5r);xh.exports=n2});var zh=a((sce,Dh)=>{"use strict";var R5r=Ba().isPrimitive,P5r=y();function F5r(r,e){if(!R5r(r))throw new TypeError(P5r("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}Dh.exports=F5r});var Jh=a((uce,Xh)=>{"use strict";var M5r=zh();Xh.exports=M5r});var Zh=a((oce,Yh)=>{"use strict";var B5r=j().isPrimitive,k5r=y();function j5r(r,e){if(!B5r(r))throw new TypeError(k5r("invalid argument. %s must be a number. Value: %s.",e,String(r)))}Yh.exports=j5r});var Qh=a((vce,$h)=>{"use strict";var C5r=Zh();$h.exports=C5r});var rq=a((fce,Kh)=>{"use strict";var V5r=y();function U5r(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(V5r('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}Kh.exports=U5r});var tq=a((cce,eq)=>{"use strict";var G5r=rq();eq.exports=G5r});var a2=a((lce,iq)=>{"use strict";var H5r=Rr().isPrimitive;function W5r(r){return H5r(r)&&r>0}iq.exports=W5r});var s2=a((pce,nq)=>{"use strict";var x5r=Rr().isObject;function D5r(r){return x5r(r)&&r.valueOf()>0}nq.exports=D5r});var sq=a((gce,aq)=>{"use strict";var z5r=a2(),X5r=s2();function J5r(r){return z5r(r)||X5r(r)}aq.exports=J5r});var re=a((mce,oq)=>{"use strict";var uq=b(),u2=sq(),Y5r=a2(),Z5r=s2();uq(u2,"isPrimitive",Y5r);uq(u2,"isObject",Z5r);oq.exports=u2});var fq=a((dce,vq)=>{"use strict";var $5r=re().isPrimitive,Q5r=y();function K5r(r,e){if(!$5r(r))throw new TypeError(Q5r("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}vq.exports=K5r});var o2=a((hce,cq)=>{"use strict";var r7r=fq();cq.exports=r7r});var v2=a((qce,lq)=>{"use strict";var e7r=j().isPrimitive;function t7r(r){return e7r(r)&&r>0}lq.exports=t7r});var f2=a((yce,pq)=>{"use strict";var i7r=j().isObject;function n7r(r){return i7r(r)&&r.valueOf()>0}pq.exports=n7r});var mq=a((bce,gq)=>{"use strict";var a7r=v2(),s7r=f2();function u7r(r){return a7r(r)||s7r(r)}gq.exports=u7r});var D=a((wce,hq)=>{"use strict";var dq=b(),c2=mq(),o7r=v2(),v7r=f2();dq(c2,"isPrimitive",o7r);dq(c2,"isObject",v7r);hq.exports=c2});var yq=a((Ece,qq)=>{"use strict";var f7r=D().isPrimitive,c7r=y();function l7r(r,e){if(!f7r(r))throw new TypeError(c7r("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}qq.exports=l7r});var wq=a((Nce,bq)=>{"use strict";var p7r=yq();bq.exports=p7r});var l2=a((Oce,Eq)=>{"use strict";var g7r=j().isPrimitive;function m7r(r){return g7r(r)&&r>=0&&r<=1}Eq.exports=m7r});var p2=a((Ace,Nq)=>{"use strict";var d7r=j().isObject;function h7r(r){return d7r(r)&&r.valueOf()>=0&&r.valueOf()<=1}Nq.exports=h7r});var Aq=a((Sce,Oq)=>{"use strict";var q7r=l2(),y7r=p2();function b7r(r){return q7r(r)||y7r(r)}Oq.exports=b7r});var ln=a((Tce,Tq)=>{"use strict";var Sq=b(),g2=Aq(),w7r=l2(),E7r=p2();Sq(g2,"isPrimitive",w7r);Sq(g2,"isObject",E7r);Tq.exports=g2});var Iq=a((_ce,_q)=>{"use strict";var N7r=ln().isPrimitive,O7r=y();function A7r(r,e){if(!N7r(r))throw new TypeError(O7r("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}_q.exports=A7r});var Rq=a((Ice,Lq)=>{"use strict";var S7r=Iq();Lq.exports=S7r});var Fq=a((Lce,Pq)=>{"use strict";var T7r=mr(),_7r=y();function I7r(r,e){if(!T7r(r))throw new TypeError(_7r("invalid argument. %s must be a range. Value: %s.",e,String(r)))}Pq.exports=I7r});var Bq=a((Rce,Mq)=>{"use strict";var L7r=Fq();Mq.exports=L7r});var jq=a((Pce,kq)=>{"use strict";function R7r(r){return r.length===1||r[0].length===1}kq.exports=R7r});var Vq=a((Fce,Cq)=>{"use strict";var P7r=jq();Cq.exports=P7r});var Gq=a((Mce,Uq)=>{"use strict";var F7r=mr(),M7r=Vq();function B7r(r){return F7r(r)&&M7r(r)}Uq.exports=B7r});var Wq=a((Bce,Hq)=>{"use strict";var k7r=Gq();Hq.exports=k7r});var Dq=a((kce,xq)=>{"use strict";var j7r=y(),C7r=Wq();function V7r(r,e){if(!C7r(r))throw new TypeError(j7r("invalid argument. %s must consist of only a single row or a single column.",e))}xq.exports=V7r});var Xq=a((jce,zq)=>{"use strict";var U7r=Dq();zq.exports=U7r});var Yq=a((Cce,Jq)=>{"use strict";function G7r(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}Jq.exports=G7r});var $q=a((Vce,Zq)=>{"use strict";var H7r=Yq();Zq.exports=H7r});var Kq=a((Uce,Qq)=>{"use strict";var W7r=y(),x7r=$q();function D7r(r,e,t){if(!x7r(r,e))throw new TypeError(W7r("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}Qq.exports=D7r});var ey=a((Gce,ry)=>{"use strict";var z7r=Kq();ry.exports=z7r});var iy=a((Hce,ty)=>{"use strict";var X7r=K().isPrimitive,J7r=y();function Y7r(r,e){if(!X7r(r))throw new TypeError(J7r("invalid argument. %s must be a string. Value: %s.",e,String(r)))}ty.exports=Y7r});var ay=a((Wce,ny)=>{"use strict";var Z7r=iy();ny.exports=Z7r});var uy=a((xce,sy)=>{"use strict";var $7r=y(),Q7r=jr().isPrimitive;function K7r(r,e){var t;for(t=0;t<r.length;t++)if(!Q7r(r[t]))throw new TypeError($7r("invalid argument. %s must contain only nonnegative integers.",e))}sy.exports=K7r});var vy=a((Dce,oy)=>{"use strict";var r9r=uy();oy.exports=r9r});var cy=a((zce,fy)=>{"use strict";var e9r=y(),t9r=Rr().isPrimitive;function i9r(r,e){var t;for(t=0;t<r.length;t++)if(!t9r(r[t]))throw new TypeError(e9r("invalid argument. %s must contain only integers.",e))}fy.exports=i9r});var py=a((Xce,ly)=>{"use strict";var n9r=cy();ly.exports=n9r});var my=a((Jce,gy)=>{"use strict";var a9r=y();function s9r(r){throw new Error(a9r("invalid argument. Unrecognized option name. Value: %s.",String(r)))}gy.exports=s9r});var hy=a((Yce,dy)=>{"use strict";var u9r=my();dy.exports=u9r});var by=a((Zce,yy)=>{"use strict";var qy=o2(),o9r=e2();function v9r(r,e,t){qy(r,"Number of rows"),qy(e,"Number of columns"),o9r(t,"a pseudorandom number generator seed")}yy.exports=v9r});var Ey=a(($ce,wy)=>{"use strict";var f9r=by();wy.exports=f9r});var Oy=a((Qce,Ny)=>{"use strict";var bi=rr(),c9r=mr(),l9r=Rr().isPrimitive,p9r=jr().isPrimitive,g9r=Ba().isPrimitive,m9r=re().isPrimitive,d9r=D().isPrimitive;function h9r(r){return bi(r,"isArray",c9r),bi(r,"isInteger",l9r),bi(r,"isNonNegativeInteger",p9r),bi(r,"isNonNegativeNumber",g9r),bi(r,"isPositiveInteger",m9r),bi(r,"isPositiveNumber",d9r),r}Ny.exports=h9r});var Sy=a((Kce,Ay)=>{"use strict";var z=rr(),q9r=Rd(),y9r=Bd(),b9r=Wd(),w9r=$d(),E9r=ch(),N9r=e2(),O9r=qh(),A9r=Eh(),S9r=Sh(),T9r=Lh(),_9r=Mh(),I9r=Ch(),L9r=Jh(),R9r=Qh(),P9r=tq(),F9r=o2(),M9r=wq(),B9r=Rq(),k9r=Bq(),j9r=Xq(),C9r=ey(),V9r=ay(),U9r=vy(),G9r=py(),H9r=hy(),W9r=Ey(),x9r=Oy();function D9r(r){return z(r,"isBetween",q9r),z(r,"isBoolean",y9r),z(r,"isBroadcastCompatible",b9r),z(r,"isBroadcastCompatibleWith",w9r),z(r,"isBufferLengthCompatible",E9r),z(r,"isDefined",N9r),z(r,"isGreaterThan",O9r),z(r,"isGreaterThanEqual",A9r),z(r,"isInteger",S9r),z(r,"isLessThan",T9r),z(r,"isLessThanEqual",_9r),z(r,"isNonNegativeInteger",I9r),z(r,"isNonNegativeNumber",L9r),z(r,"isNumber",R9r),z(r,"isOneOf",P9r),z(r,"isPositiveInteger",F9r),z(r,"isPositiveNumber",M9r),z(r,"isProbability",B9r),z(r,"isRange",k9r),z(r,"isRange1d",j9r),z(r,"isSameShape",C9r),z(r,"isString",V9r),z(r,"isValidShape",U9r),z(r,"isValidStrides",G9r),z(r,"unrecognizedOptionName",H9r),z(r,"verifyCommonPRNGArgs",W9r),z(r,"base",x9r({})),r}Ay.exports=D9r});var _y=a((r4e,Ty)=>{"use strict";var m2=4;function z9r(r,e,t,i,n,s){var u,o,f,v;if(r<=0||e===0)return n;if(i===1&&s===1){if(f=r%m2,f>0)for(v=0;v<f;v++)n[v]+=e*t[v];if(r<m2)return n;for(v=f;v<r;v+=m2)n[v]+=e*t[v],n[v+1]+=e*t[v+1],n[v+2]+=e*t[v+2],n[v+3]+=e*t[v+3];return n}for(i<0?u=(1-r)*i:u=0,s<0?o=(1-r)*s:o=0,v=0;v<r;v++)n[o]+=e*t[u],u+=i,o+=s;return n}Ty.exports=z9r});var Ly=a((e4e,Iy)=>{"use strict";var pn=4;function X9r(r,e,t,i,n,s,u,o){var f,v,c,l;if(r<=0||e===0)return s;if(f=n,v=o,i===1&&u===1){if(c=r%pn,c>0)for(l=0;l<c;l++)s[v]+=e*t[f],f+=i,v+=u;if(r<pn)return s;for(l=c;l<r;l+=pn)s[v]+=e*t[f],s[v+1]+=e*t[f+1],s[v+2]+=e*t[f+2],s[v+3]+=e*t[f+3],f+=pn,v+=pn;return s}for(l=0;l<r;l++)s[v]+=e*t[f],f+=i,v+=u;return s}Iy.exports=X9r});var d2=a((t4e,Py)=>{"use strict";var J9r=b(),Ry=_y(),Y9r=Ly();J9r(Ry,"ndarray",Y9r);Py.exports=Ry});var By=a((i4e,My)=>{"use strict";var Fy=rr(),Z9r=d2().ndarray,$9r=d2().ndarray;function Q9r(r){return Fy(r,"daxpy",Z9r),Fy(r,"saxpy",$9r),r}My.exports=Q9r});var jy=a((n4e,ky)=>{"use strict";var K9r=Ut(),rpr=er();function epr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(rpr(r)==="[object Error]")return!0;r=K9r(r)}return!1}ky.exports=epr});var Vy=a((a4e,Cy)=>{"use strict";var tpr=jy();Cy.exports=tpr});var h2=a((s4e,Uy)=>{"use strict";function ipr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}Uy.exports=ipr});var Hy=a((u4e,Gy)=>{"use strict";var npr=h2(),apr=npr();Gy.exports=apr});var Dy=a((o4e,xy)=>{"use strict";var spr=b(),Wy=h2(),upr=Hy();spr(Wy,"REGEXP",upr);xy.exports=Wy});var Xy=a((v4e,zy)=>{"use strict";var opr=K().isPrimitive,vpr=Dy(),fpr=y();function cpr(r){if(!opr(r))throw new TypeError(fpr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=vpr().exec(r),r?new RegExp(r[1],r[2]):null}zy.exports=cpr});var Yy=a((f4e,Jy)=>{"use strict";var lpr=Xy();Jy.exports=lpr});var q2=a((c4e,Zy)=>{"use strict";var ppr=j().isPrimitive,gpr=E();function mpr(r){return ppr(r)&&gpr(r)}Zy.exports=mpr});var y2=a((l4e,$y)=>{"use strict";var dpr=j().isObject,hpr=E();function qpr(r){return dpr(r)&&hpr(r.valueOf())}$y.exports=qpr});var Ky=a((p4e,Qy)=>{"use strict";var ypr=q2(),bpr=y2();function wpr(r){return ypr(r)||bpr(r)}Qy.exports=wpr});var vr=a((g4e,eb)=>{"use strict";var rb=b(),b2=Ky(),Epr=q2(),Npr=y2();rb(b2,"isPrimitive",Epr);rb(b2,"isObject",Npr);eb.exports=b2});var ab=a((m4e,nb)=>{"use strict";var tb=vr(),Opr=Wr(),Apr=K().isPrimitive,Spr=Rr().isPrimitive,ib=y();function Tpr(r,e,t){var i,n;if(!Opr(r)&&!Apr(r))throw new TypeError(ib("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!Spr(t))throw new TypeError(ib("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(tb(e)){for(;n<i;n++)if(tb(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}nb.exports=Tpr});var ka=a((d4e,sb)=>{"use strict";var _pr=ab();sb.exports=_pr});var ja=a((h4e,ub)=>{"use strict";function Ipr(r){return Object.keys(Object(r))}ub.exports=Ipr});var vb=a((q4e,ob)=>{"use strict";var Lpr=ja();function Rpr(){return(Lpr(arguments)||"").length!==2}function Ppr(){return Rpr(1,2)}ob.exports=Ppr});var cb=a((y4e,fb)=>{"use strict";var Fpr=typeof Object.keys<"u";fb.exports=Fpr});var w2=a((b4e,lb)=>{"use strict";var Mpr=er();function Bpr(r){return Mpr(r)==="[object Arguments]"}lb.exports=Bpr});var mb=a((w4e,gb)=>{"use strict";var kpr=w2(),pb;function jpr(){return kpr(arguments)}pb=jpr();gb.exports=pb});var E2=a((E4e,db)=>{"use strict";var Cpr=Object.prototype.propertyIsEnumerable;db.exports=Cpr});var yb=a((N4e,qb)=>{"use strict";var Vpr=E2(),hb;function Upr(){return!Vpr.call("beep","0")}hb=Upr();qb.exports=hb});var wb=a((O4e,bb)=>{"use strict";var Gpr=K(),Hpr=vr().isPrimitive,Wpr=Rr().isPrimitive,xpr=E2(),Dpr=yb();function zpr(r,e){var t;return r==null?!1:(t=xpr.call(r,e),!t&&Dpr&&Gpr(r)?(e=+e,!Hpr(e)&&Wpr(e)&&e>=0&&e<r.length):t)}bb.exports=zpr});var gn=a((A4e,Eb)=>{"use strict";var Xpr=wb();Eb.exports=Xpr});var Ob=a((S4e,Nb)=>{"use strict";var Jpr=A(),Ypr=gn(),Zpr=mr(),$pr=Lr(),Qpr=ei();function Kpr(r){return r!==null&&typeof r=="object"&&!Zpr(r)&&typeof r.length=="number"&&$pr(r.length)&&r.length>=0&&r.length<=Qpr&&Jpr(r,"callee")&&!Ypr(r,"callee")}Nb.exports=Kpr});var O2=a((T4e,Ab)=>{"use strict";var rgr=mb(),egr=w2(),tgr=Ob(),N2;rgr?N2=egr:N2=tgr;Ab.exports=N2});var _b=a((_4e,Tb)=>{"use strict";var igr=O2(),Sb=ja(),ngr=Array.prototype.slice;function agr(r){return igr(r)?Sb(ngr.call(r)):Sb(r)}Tb.exports=agr});var Lb=a((I4e,Ib)=>{"use strict";function sgr(){}Ib.exports=sgr});var C=a((L4e,Rb)=>{"use strict";var ugr=Lb();Rb.exports=ugr});var Fb=a((R4e,Pb)=>{"use strict";var ogr=gn(),vgr=C(),fgr=ogr(vgr,"prototype");Pb.exports=fgr});var Bb=a((P4e,Mb)=>{"use strict";var cgr=gn(),lgr={toString:null},pgr=!cgr(lgr,"toString");Mb.exports=pgr});var A2=a((F4e,kb)=>{"use strict";function ggr(r){return r.constructor&&r.constructor.prototype===r}kb.exports=ggr});var jb=a((M4e,mgr)=>{mgr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var Vb=a((B4e,Cb)=>{"use strict";var dgr=typeof window>"u"?void 0:window;Cb.exports=dgr});var Wb=a((k4e,Hb)=>{"use strict";var hgr=A(),qgr=ka(),Ub=la(),ygr=A2(),bgr=jb(),wi=Vb(),Gb;function wgr(){var r;if(Ub(wi)==="undefined")return!1;for(r in wi)try{qgr(bgr,r)===-1&&hgr(wi,r)&&wi[r]!==null&&Ub(wi[r])==="object"&&ygr(wi[r])}catch{return!0}return!1}Gb=wgr();Hb.exports=Gb});var Db=a((j4e,xb)=>{"use strict";var Egr=typeof window<"u";xb.exports=Egr});var Jb=a((C4e,Xb)=>{"use strict";var Ngr=Wb(),zb=A2(),Ogr=Db();function Agr(r){if(Ogr===!1&&!Ngr)return zb(r);try{return zb(r)}catch{return!1}}Xb.exports=Agr});var Yb=a((V4e,Sgr)=>{Sgr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Qb=a((U4e,$b)=>{"use strict";var Tgr=vo(),S2=A(),_gr=O2(),Igr=Fb(),Lgr=Bb(),Rgr=Jb(),Zb=Yb();function Pgr(r){var e,t,i,n,s,u,o;if(n=[],_gr(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!S2(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!Tgr(r))return n;t=Igr&&i}for(s in r)!(t&&s==="prototype")&&S2(r,s)&&n.push(String(s));if(Lgr)for(e=Rgr(r),o=0;o<Zb.length;o++)u=Zb[o],!(e&&u==="constructor")&&S2(r,u)&&n.push(String(u));return n}$b.exports=Pgr});var rw=a((G4e,Kb)=>{"use strict";var Fgr=vb(),Mgr=cb(),Bgr=ja(),kgr=_b(),jgr=Qb(),Ca;Mgr?Fgr()?Ca=kgr:Ca=Bgr:Ca=jgr;Kb.exports=Ca});var Ei=a((H4e,ew)=>{"use strict";var Cgr=rw();ew.exports=Cgr});var iw=a((W4e,tw)=>{"use strict";var Vgr=typeof Object.getOwnPropertyNames<"u";tw.exports=Vgr});var sw=a((x4e,aw)=>{"use strict";var nw=qi(),Ugr=nw.getOwnPropertyNames;function Ggr(r){return Ugr(nw(r))}aw.exports=Ggr});var ow=a((D4e,uw)=>{"use strict";var Hgr=qi(),Wgr=Ei();function xgr(r){return Wgr(Hgr(r))}uw.exports=xgr});var fw=a((z4e,vw)=>{"use strict";var Dgr=iw(),zgr=sw(),Xgr=ow(),T2;Dgr?T2=zgr:T2=Xgr;vw.exports=T2});var lw=a((X4e,cw)=>{"use strict";var Jgr=typeof Object.getOwnPropertyDescriptor<"u";cw.exports=Jgr});var gw=a((J4e,pw)=>{"use strict";var Ygr=Object.getOwnPropertyDescriptor;function Zgr(r,e){var t;return r==null?null:(t=Ygr(r,e),t===void 0?null:t)}pw.exports=Zgr});var dw=a((Y4e,mw)=>{"use strict";var $gr=A();function Qgr(r,e){return $gr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}mw.exports=Qgr});var qw=a((Z4e,hw)=>{"use strict";var Kgr=lw(),rmr=gw(),emr=dw(),_2;Kgr?_2=rmr:_2=emr;hw.exports=_2});var bw=a(($4e,yw)=>{"use strict";var tmr=typeof Buffer=="function"?Buffer:null;yw.exports=tmr});var Ew=a((Q4e,ww)=>{"use strict";var imr=Ft(),Va=bw();function nmr(){var r,e;if(typeof Va!="function")return!1;try{typeof Va.from=="function"?e=Va.from([1,2,3,4]):e=new Va([1,2,3,4]),r=imr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}ww.exports=nmr});var Ow=a((K4e,Nw)=>{"use strict";var amr=Ew();Nw.exports=amr});var Tw=a(Ua=>{"use strict";Ua.byteLength=umr;Ua.toByteArray=vmr;Ua.fromByteArray=lmr;var ee=[],Ur=[],smr=typeof Uint8Array<"u"?Uint8Array:Array,I2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Gt=0,Aw=I2.length;Gt<Aw;++Gt)ee[Gt]=I2[Gt],Ur[I2.charCodeAt(Gt)]=Gt;var Gt,Aw;Ur["-".charCodeAt(0)]=62;Ur["_".charCodeAt(0)]=63;function Sw(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function umr(r){var e=Sw(r),t=e[0],i=e[1];return(t+i)*3/4-i}function omr(r,e,t){return(e+t)*3/4-t}function vmr(r){var e,t=Sw(r),i=t[0],n=t[1],s=new smr(omr(r,i,n)),u=0,o=n>0?i-4:i,f;for(f=0;f<o;f+=4)e=Ur[r.charCodeAt(f)]<<18|Ur[r.charCodeAt(f+1)]<<12|Ur[r.charCodeAt(f+2)]<<6|Ur[r.charCodeAt(f+3)],s[u++]=e>>16&255,s[u++]=e>>8&255,s[u++]=e&255;return n===2&&(e=Ur[r.charCodeAt(f)]<<2|Ur[r.charCodeAt(f+1)]>>4,s[u++]=e&255),n===1&&(e=Ur[r.charCodeAt(f)]<<10|Ur[r.charCodeAt(f+1)]<<4|Ur[r.charCodeAt(f+2)]>>2,s[u++]=e>>8&255,s[u++]=e&255),s}function fmr(r){return ee[r>>18&63]+ee[r>>12&63]+ee[r>>6&63]+ee[r&63]}function cmr(r,e,t){for(var i,n=[],s=e;s<t;s+=3)i=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),n.push(fmr(i));return n.join("")}function lmr(r){for(var e,t=r.length,i=t%3,n=[],s=16383,u=0,o=t-i;u<o;u+=s)n.push(cmr(r,u,u+s>o?o:u+s));return i===1?(e=r[t-1],n.push(ee[e>>2]+ee[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(ee[e>>10]+ee[e>>4&63]+ee[e<<2&63]+"=")),n.join("")}});var _w=a(L2=>{L2.read=function(r,e,t,i,n){var s,u,o=n*8-i-1,f=(1<<o)-1,v=f>>1,c=-7,l=t?n-1:0,p=t?-1:1,g=r[e+l];for(l+=p,s=g&(1<<-c)-1,g>>=-c,c+=o;c>0;s=s*256+r[e+l],l+=p,c-=8);for(u=s&(1<<-c)-1,s>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(s===0)s=1-v;else{if(s===f)return u?NaN:(g?-1:1)*(1/0);u=u+Math.pow(2,i),s=s-v}return(g?-1:1)*u*Math.pow(2,s-i)};L2.write=function(r,e,t,i,n,s){var u,o,f,v=s*8-n-1,c=(1<<v)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=i?0:s-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-u))<1&&(u--,f*=2),u+l>=1?e+=p/f:e+=p*Math.pow(2,1-l),e*f>=2&&(u++,f/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*f-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+g]=o&255,g+=h,o/=256,n-=8);for(u=u<<n|o,v+=n;v>0;r[t+g]=u&255,g+=h,u/=256,v-=8);r[t+g-h]|=d*128}});var Dw=a(Si=>{"use strict";var R2=Tw(),Oi=_w(),Iw=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Si.Buffer=w;Si.SlowBuffer=qmr;Si.INSPECT_MAX_BYTES=50;var Ga=2147483647;Si.kMaxLength=Ga;w.TYPED_ARRAY_SUPPORT=pmr();!w.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function pmr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(w.prototype,"parent",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.buffer}});Object.defineProperty(w.prototype,"offset",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.byteOffset}});function fe(r){if(r>Ga)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,w.prototype),e}function w(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return B2(r)}return Fw(r,e,t)}w.poolSize=8192;function Fw(r,e,t){if(typeof r=="string")return mmr(r,e);if(ArrayBuffer.isView(r))return dmr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(te(r,ArrayBuffer)||r&&te(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(te(r,SharedArrayBuffer)||r&&te(r.buffer,SharedArrayBuffer)))return F2(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return w.from(i,e,t);let n=hmr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return w.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}w.from=function(r,e,t){return Fw(r,e,t)};Object.setPrototypeOf(w.prototype,Uint8Array.prototype);Object.setPrototypeOf(w,Uint8Array);function Mw(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function gmr(r,e,t){return Mw(r),r<=0?fe(r):e!==void 0?typeof t=="string"?fe(r).fill(e,t):fe(r).fill(e):fe(r)}w.alloc=function(r,e,t){return gmr(r,e,t)};function B2(r){return Mw(r),fe(r<0?0:k2(r)|0)}w.allocUnsafe=function(r){return B2(r)};w.allocUnsafeSlow=function(r){return B2(r)};function mmr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!w.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=Bw(r,e)|0,i=fe(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function P2(r){let e=r.length<0?0:k2(r.length)|0,t=fe(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function dmr(r){if(te(r,Uint8Array)){let e=new Uint8Array(r);return F2(e.buffer,e.byteOffset,e.byteLength)}return P2(r)}function F2(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,w.prototype),i}function hmr(r){if(w.isBuffer(r)){let e=k2(r.length)|0,t=fe(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||C2(r.length)?fe(0):P2(r);if(r.type==="Buffer"&&Array.isArray(r.data))return P2(r.data)}function k2(r){if(r>=Ga)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ga.toString(16)+" bytes");return r|0}function qmr(r){return+r!=r&&(r=0),w.alloc(+r)}w.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==w.prototype};w.compare=function(e,t){if(te(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),te(t,Uint8Array)&&(t=w.from(t,t.offset,t.byteLength)),!w.isBuffer(e)||!w.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let s=0,u=Math.min(i,n);s<u;++s)if(e[s]!==t[s]){i=e[s],n=t[s];break}return i<n?-1:n<i?1:0};w.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};w.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return w.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=w.allocUnsafe(t),s=0;for(i=0;i<e.length;++i){let u=e[i];if(te(u,Uint8Array))s+u.length>n.length?(w.isBuffer(u)||(u=w.from(u)),u.copy(n,s)):Uint8Array.prototype.set.call(n,u,s);else if(w.isBuffer(u))u.copy(n,s);else throw new TypeError('"list" argument must be an Array of Buffers');s+=u.length}return n};function Bw(r,e){if(w.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||te(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return M2(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return xw(r).length;default:if(n)return i?-1:M2(r).length;e=(""+e).toLowerCase(),n=!0}}w.byteLength=Bw;function ymr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Imr(this,e,t);case"utf8":case"utf-8":return jw(this,e,t);case"ascii":return Tmr(this,e,t);case"latin1":case"binary":return _mr(this,e,t);case"base64":return Amr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Lmr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}w.prototype._isBuffer=!0;function Ht(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}w.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Ht(this,t,t+1);return this};w.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Ht(this,t,t+3),Ht(this,t+1,t+2);return this};w.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Ht(this,t,t+7),Ht(this,t+1,t+6),Ht(this,t+2,t+5),Ht(this,t+3,t+4);return this};w.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?jw(this,0,e):ymr.apply(this,arguments)};w.prototype.toLocaleString=w.prototype.toString;w.prototype.equals=function(e){if(!w.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:w.compare(this,e)===0};w.prototype.inspect=function(){let e="",t=Si.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};Iw&&(w.prototype[Iw]=w.prototype.inspect);w.prototype.compare=function(e,t,i,n,s){if(te(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),!w.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),s===void 0&&(s=this.length),t<0||i>e.length||n<0||s>this.length)throw new RangeError("out of range index");if(n>=s&&t>=i)return 0;if(n>=s)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,s>>>=0,this===e)return 0;let u=s-n,o=i-t,f=Math.min(u,o),v=this.slice(n,s),c=e.slice(t,i);for(let l=0;l<f;++l)if(v[l]!==c[l]){u=v[l],o=c[l];break}return u<o?-1:o<u?1:0};function kw(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,C2(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=w.from(e,i)),w.isBuffer(e))return e.length===0?-1:Lw(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Lw(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function Lw(r,e,t,i,n){let s=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;s=2,u/=2,o/=2,t/=2}function f(c,l){return s===1?c[l]:c.readUInt16BE(l*s)}let v;if(n){let c=-1;for(v=t;v<u;v++)if(f(r,v)===f(e,c===-1?0:v-c)){if(c===-1&&(c=v),v-c+1===o)return c*s}else c!==-1&&(v-=v-c),c=-1}else for(t+o>u&&(t=u-o),v=t;v>=0;v--){let c=!0;for(let l=0;l<o;l++)if(f(r,v+l)!==f(e,l)){c=!1;break}if(c)return v}return-1}w.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};w.prototype.indexOf=function(e,t,i){return kw(this,e,t,i,!0)};w.prototype.lastIndexOf=function(e,t,i){return kw(this,e,t,i,!1)};function bmr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let s=e.length;i>s/2&&(i=s/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(C2(o))return u;r[t+u]=o}return u}function wmr(r,e,t,i){return Ha(M2(e,r.length-t),r,t,i)}function Emr(r,e,t,i){return Ha(Mmr(e),r,t,i)}function Nmr(r,e,t,i){return Ha(xw(e),r,t,i)}function Omr(r,e,t,i){return Ha(Bmr(e,r.length-t),r,t,i)}w.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let s=this.length-t;if((i===void 0||i>s)&&(i=s),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return bmr(this,e,t,i);case"utf8":case"utf-8":return wmr(this,e,t,i);case"ascii":case"latin1":case"binary":return Emr(this,e,t,i);case"base64":return Nmr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Omr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};w.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Amr(r,e,t){return e===0&&t===r.length?R2.fromByteArray(r):R2.fromByteArray(r.slice(e,t))}function jw(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let s=r[n],u=null,o=s>239?4:s>223?3:s>191?2:1;if(n+o<=t){let f,v,c,l;switch(o){case 1:s<128&&(u=s);break;case 2:f=r[n+1],(f&192)===128&&(l=(s&31)<<6|f&63,l>127&&(u=l));break;case 3:f=r[n+1],v=r[n+2],(f&192)===128&&(v&192)===128&&(l=(s&15)<<12|(f&63)<<6|v&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:f=r[n+1],v=r[n+2],c=r[n+3],(f&192)===128&&(v&192)===128&&(c&192)===128&&(l=(s&15)<<18|(f&63)<<12|(v&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return Smr(i)}var Rw=4096;function Smr(r){let e=r.length;if(e<=Rw)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=Rw));return t}function Tmr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function _mr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function Imr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let s=e;s<t;++s)n+=kmr[r[s]];return n}function Lmr(r,e,t){let i=r.slice(e,t),n="";for(let s=0;s<i.length-1;s+=2)n+=String.fromCharCode(i[s]+i[s+1]*256);return n}w.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,w.prototype),n};function fr(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}w.prototype.readUintLE=w.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],s=1,u=0;for(;++u<t&&(s*=256);)n+=this[e+u]*s;return n};w.prototype.readUintBE=w.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e+--t],s=1;for(;t>0&&(s*=256);)n+=this[e+--t]*s;return n};w.prototype.readUint8=w.prototype.readUInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]};w.prototype.readUint16LE=w.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]|this[e+1]<<8};w.prototype.readUint16BE=w.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]<<8|this[e+1]};w.prototype.readUint32LE=w.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};w.prototype.readUint32BE=w.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};w.prototype.readBigUInt64LE=Ze(function(e){e=e>>>0,Ai(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&mn(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(s)<<BigInt(32))});w.prototype.readBigUInt64BE=Ze(function(e){e=e>>>0,Ai(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&mn(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(s)});w.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],s=1,u=0;for(;++u<t&&(s*=256);)n+=this[e+u]*s;return s*=128,n>=s&&(n-=Math.pow(2,8*t)),n};w.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=t,s=1,u=this[e+--n];for(;n>0&&(s*=256);)u+=this[e+--n]*s;return s*=128,u>=s&&(u-=Math.pow(2,8*t)),u};w.prototype.readInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};w.prototype.readInt16LE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};w.prototype.readInt16BE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};w.prototype.readInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};w.prototype.readInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};w.prototype.readBigInt64LE=Ze(function(e){e=e>>>0,Ai(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&mn(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});w.prototype.readBigInt64BE=Ze(function(e){e=e>>>0,Ai(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&mn(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});w.prototype.readFloatLE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Oi.read(this,e,!0,23,4)};w.prototype.readFloatBE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Oi.read(this,e,!1,23,4)};w.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Oi.read(this,e,!0,52,8)};w.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Oi.read(this,e,!1,52,8)};function qr(r,e,t,i,n,s){if(!w.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<s)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}w.prototype.writeUintLE=w.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let s=1,u=0;for(this[t]=e&255;++u<i&&(s*=256);)this[t+u]=e/s&255;return t+i};w.prototype.writeUintBE=w.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let s=i-1,u=1;for(this[t+s]=e&255;--s>=0&&(u*=256);)this[t+s]=e/u&255;return t+i};w.prototype.writeUint8=w.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,255,0),this[t]=e&255,t+1};w.prototype.writeUint16LE=w.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeUint16BE=w.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeUint32LE=w.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};w.prototype.writeUint32BE=w.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function Cw(r,e,t,i,n){Ww(e,i,n,r,t,7);let s=Number(e&BigInt(4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function Vw(r,e,t,i,n){Ww(e,i,n,r,t,7);let s=Number(e&BigInt(4294967295));r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>8,r[t+5]=s,s=s>>8,r[t+4]=s;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}w.prototype.writeBigUInt64LE=Ze(function(e,t=0){return Cw(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeBigUInt64BE=Ze(function(e,t=0){return Vw(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);qr(this,e,t,i,f-1,-f)}let s=0,u=1,o=0;for(this[t]=e&255;++s<i&&(u*=256);)e<0&&o===0&&this[t+s-1]!==0&&(o=1),this[t+s]=(e/u>>0)-o&255;return t+i};w.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);qr(this,e,t,i,f-1,-f)}let s=i-1,u=1,o=0;for(this[t+s]=e&255;--s>=0&&(u*=256);)e<0&&o===0&&this[t+s+1]!==0&&(o=1),this[t+s]=(e/u>>0)-o&255;return t+i};w.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};w.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};w.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};w.prototype.writeBigInt64LE=Ze(function(e,t=0){return Cw(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});w.prototype.writeBigInt64BE=Ze(function(e,t=0){return Vw(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function Uw(r,e,t,i,n,s){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Gw(r,e,t,i,n){return e=+e,t=t>>>0,n||Uw(r,e,t,4,34028234663852886e22,-34028234663852886e22),Oi.write(r,e,t,i,23,4),t+4}w.prototype.writeFloatLE=function(e,t,i){return Gw(this,e,t,!0,i)};w.prototype.writeFloatBE=function(e,t,i){return Gw(this,e,t,!1,i)};function Hw(r,e,t,i,n){return e=+e,t=t>>>0,n||Uw(r,e,t,8,17976931348623157e292,-17976931348623157e292),Oi.write(r,e,t,i,52,8),t+8}w.prototype.writeDoubleLE=function(e,t,i){return Hw(this,e,t,!0,i)};w.prototype.writeDoubleBE=function(e,t,i){return Hw(this,e,t,!1,i)};w.prototype.copy=function(e,t,i,n){if(!w.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let s=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),s};w.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!w.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let s;if(typeof e=="number")for(s=t;s<i;++s)this[s]=e;else{let u=w.isBuffer(e)?e:w.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<i-t;++s)this[s+t]=u[s%o]}return this};var Ni={};function j2(r,e,t){Ni[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}j2("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);j2("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);j2("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=Pw(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=Pw(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function Pw(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function Rmr(r,e,t){Ai(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&mn(e,r.length-(t+1))}function Ww(r,e,t,i,n,s){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw s>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(s+1)*8}${u}`:o=`>= -(2${u} ** ${(s+1)*8-1}${u}) and < 2 ** ${(s+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new Ni.ERR_OUT_OF_RANGE("value",o,r)}Rmr(i,n,s)}function Ai(r,e){if(typeof r!="number")throw new Ni.ERR_INVALID_ARG_TYPE(e,"number",r)}function mn(r,e,t){throw Math.floor(r)!==r?(Ai(r,t),new Ni.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Ni.ERR_BUFFER_OUT_OF_BOUNDS:new Ni.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var Pmr=/[^+/0-9A-Za-z-_]/g;function Fmr(r){if(r=r.split("=")[0],r=r.trim().replace(Pmr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function M2(r,e){e=e||1/0;let t,i=r.length,n=null,s=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&s.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&s.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&s.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;s.push(t)}else if(t<2048){if((e-=2)<0)break;s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;s.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}function Mmr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function Bmr(r,e){let t,i,n,s=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,s.push(n),s.push(i);return s}function xw(r){return R2.toByteArray(Fmr(r))}function Ha(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function te(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function C2(r){return r!==r}var kmr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function Ze(r){return typeof BigInt>"u"?jmr:r}function jmr(){throw new Error("BigInt not supported")}});var Xw=a((nle,zw)=>{"use strict";var Cmr=Dw().Buffer;zw.exports=Cmr});var Yw=a((ale,Jw)=>{"use strict";function Vmr(){throw new Error("not implemented")}Jw.exports=Vmr});var $e=a((sle,Zw)=>{"use strict";var Umr=Ow(),Gmr=Xw(),Hmr=Yw(),V2;Umr()?V2=Gmr:V2=Hmr;Zw.exports=V2});var Qw=a((ule,$w)=>{"use strict";var Wmr=_(),xmr=$e(),Dmr=Wmr(xmr.from);$w.exports=Dmr});var rE=a((ole,Kw)=>{"use strict";var zmr=Ft(),Xmr=y(),Jmr=$e();function Ymr(r){if(!zmr(r))throw new TypeError(Xmr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return Jmr.from(r)}Kw.exports=Ymr});var tE=a((vle,eE)=>{"use strict";var Zmr=Ft(),$mr=y(),Qmr=$e();function Kmr(r){if(!Zmr(r))throw new TypeError($mr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new Qmr(r)}eE.exports=Kmr});var nE=a((fle,iE)=>{"use strict";var rdr=Qw(),edr=rE(),tdr=tE(),U2;rdr?U2=edr:U2=tdr;iE.exports=U2});var uE=a((cle,sE)=>{"use strict";var idr=ai(),ndr=$r(),adr=ni(),sdr=ii(),udr=Mt(),odr=Xe(),vdr=lr(),fdr=Zr(),cdr=cr(),aE;function ldr(r){return new idr(r)}function pdr(r){return new ndr(r)}function gdr(r){return new adr(r)}function mdr(r){return new sdr(r)}function ddr(r){return new udr(r)}function hdr(r){return new odr(r)}function qdr(r){return new vdr(r)}function ydr(r){return new fdr(r)}function bdr(r){return new cdr(r)}function wdr(){var r={int8array:ldr,uint8array:pdr,uint8clampedarray:gdr,int16array:mdr,uint16array:ddr,int32array:hdr,uint32array:qdr,float32array:ydr,float64array:bdr};return r}aE=wdr();sE.exports=aE});var lE=a((lle,cE)=>{"use strict";var Wa=A(),G2=mr(),oE=Ft(),Edr=Vy(),vE=la(),Ndr=Yy(),Odr=ka(),fE=Ei(),Adr=fw(),dn=qw(),Sdr=Ut(),hn=De(),Tdr=nE(),_dr=uE();function Idr(r){var e,t,i,n,s,u,o,f;for(e=[],n=[],o=Object.create(Sdr(r)),e.push(r),n.push(o),t=Adr(r),f=0;f<t.length;f++)i=t[f],s=dn(r,i),Wa(s,"value")&&(u=G2(r[i])?[]:{},s.value=Wt(r[i],u,e,n,-1)),hn(o,i,s);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function Ldr(r){var e=[],t=[],i,n,s,u,o,f;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=fE(r),f=0;f<i.length;f++)u=i[f],n=dn(r,u),Wa(n,"value")&&(s=G2(r[u])?[]:{},n.value=Wt(r[u],s,e,t,-1)),hn(o,u,n);return o}function Wt(r,e,t,i,n){var s,u,o,f,v,c,l,p,g,h;if(n-=1,typeof r!="object"||r===null)return r;if(oE(r))return Tdr(r);if(Edr(r))return Ldr(r);if(o=vE(r),o==="date")return new Date(+r);if(o==="regexp")return Ndr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(v=_dr[o],v)return v(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?Idr(r):{};if(u=fE(r),n>0)for(s=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=vE(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||oE(p)){s==="object"?(f=dn(r,c),Wa(f,"value")&&(f.value=Wt(p)),hn(e,c,f)):e[c]=Wt(p);continue}if(g=Odr(t,p),g!==-1){e[c]=i[g];continue}l=G2(p)?new Array(p.length):{},t.push(p),i.push(l),s==="array"?e[c]=Wt(p,l,t,i,n):(f=dn(r,c),Wa(f,"value")&&(f.value=Wt(p,l,t,i,n)),hn(e,c,f))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],f=dn(r,c),hn(e,c,f);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}cE.exports=Wt});var gE=a((ple,pE)=>{"use strict";var Rdr=mr(),Pdr=jr().isPrimitive,Fdr=y(),Mdr=I(),Bdr=lE();function kdr(r,e){var t;if(arguments.length>1){if(!Pdr(e))throw new TypeError(Fdr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=Mdr;return t=Rdr(r)?new Array(r.length):{},Bdr(r,t,[r],[t],e)}pE.exports=kdr});var qn=a((gle,mE)=>{"use strict";var jdr=gE();mE.exports=jdr});var dE=a((mle,Cdr)=>{Cdr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var qE=a((dle,hE)=>{"use strict";var Vdr=qn(),Udr=dE();function Gdr(){return Vdr(Udr)}hE.exports=Gdr});var yE=a((hle,Hdr)=>{Hdr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var wE=a((qle,bE)=>{"use strict";var Wdr=qn(),xdr=yE();function Ddr(){return Wdr(xdr)}bE.exports=Ddr});var EE=a((yle,zdr)=>{zdr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var OE=a((ble,NE)=>{"use strict";var Xdr=qn(),Jdr=EE();function Ydr(){return Xdr(Jdr)}NE.exports=Ydr});var AE=a((wle,Zdr)=>{Zdr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var TE=a((Ele,SE)=>{"use strict";var $dr=AE();function Qdr(){return $dr.slice()}SE.exports=Qdr});var _E=a((Nle,Kdr)=>{Kdr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var LE=a((Ole,IE)=>{"use strict";var rhr=qn(),ehr=_E();function thr(){return rhr(ehr)}IE.exports=thr});var PE=a((Ale,RE)=>{"use strict";var yn=rr(),ihr=qE(),nhr=wE(),ahr=OE(),shr=TE(),uhr=LE();function ohr(r){return yn(r,"AFINN_111",ihr),yn(r,"AFINN_96",nhr),yn(r,"ANSCOMBES_QUARTET",ahr),yn(r,"HERNDON_VENUS_SEMIDIAMETERS",shr),yn(r,"NIGHTINGALES_ROSE",uhr),r}RE.exports=ohr});var ME=a((Sle,FE)=>{"use strict";function vhr(r,e){return r+e}FE.exports=vhr});var kE=a((Tle,BE)=>{"use strict";var fhr=ME();BE.exports=fhr});var CE=a((_le,jE)=>{"use strict";var chr=I(),lhr=V();function phr(r){return r===chr||r===lhr}jE.exports=phr});var Br=a((Ile,VE)=>{"use strict";var ghr=CE();VE.exports=ghr});var HE=a((Lle,GE)=>{"use strict";var UE=ha();function mhr(r){return r>0?UE(r-1):UE(r+1)}GE.exports=mhr});var xa=a((Rle,WE)=>{"use strict";var dhr=HE();WE.exports=dhr});var DE=a((Ple,xE)=>{"use strict";var hhr=Math.sqrt;xE.exports=hhr});var U=a((Fle,zE)=>{"use strict";var qhr=DE();zE.exports=qhr});var JE=a((Mle,XE)=>{"use strict";function yhr(r){return Math.abs(r)}XE.exports=yhr});var Y=a((Ble,YE)=>{"use strict";var bhr=JE();YE.exports=bhr});var $E=a((kle,ZE)=>{"use strict";var whr=$r(),Ehr=Mt(),Nhr={uint16:Ehr,uint8:whr};ZE.exports=Nhr});var eN=a((jle,rN)=>{"use strict";var QE=$E(),KE;function Ohr(){var r,e;return r=new QE.uint16(1),r[0]=4660,e=new QE.uint8(r.buffer),e[0]===52}KE=Ohr();rN.exports=KE});var Dr=a((Cle,tN)=>{"use strict";var Ahr=eN();tN.exports=Ahr});var aN=a((Vle,nN)=>{"use strict";var Shr=Dr(),iN,H2,W2;Shr===!0?(H2=1,W2=0):(H2=0,W2=1);iN={HIGH:H2,LOW:W2};nN.exports=iN});var x2=a((Ule,vN)=>{"use strict";var Thr=lr(),_hr=cr(),uN=aN(),oN=new _hr(1),sN=new Thr(oN.buffer),Ihr=uN.HIGH,Lhr=uN.LOW;function Rhr(r,e,t,i){return oN[0]=r,e[i]=sN[Ihr],e[i+t]=sN[Lhr],e}vN.exports=Rhr});var cN=a((Gle,fN)=>{"use strict";var Phr=x2();function Fhr(r){return Phr(r,[0>>>0,0>>>0],1,0)}fN.exports=Fhr});var Ti=a((Hle,pN)=>{"use strict";var Mhr=b(),lN=cN(),Bhr=x2();Mhr(lN,"assign",Bhr);pN.exports=lN});var mN=a((Wle,gN)=>{"use strict";var khr=Dr(),D2;khr===!0?D2=0:D2=1;gN.exports=D2});var hN=a((xle,dN)=>{"use strict";var jhr=lr(),Chr=cr(),Vhr=mN(),z2=new Chr(1),Uhr=new jhr(z2.buffer);function Ghr(r,e){return z2[0]=r,Uhr[Vhr]=e>>>0,z2[0]}dN.exports=Ghr});var ce=a((Dle,qN)=>{"use strict";var Hhr=hN();qN.exports=Hhr});var bN=a((zle,yN)=>{"use strict";function Whr(r){return r|0}yN.exports=Whr});var X2=a((Xle,wN)=>{"use strict";var xhr=bN();wN.exports=xhr});var ie=a((Jle,EN)=>{"use strict";var Dhr=2147483647;EN.exports=Dhr});var J2=a((Yle,NN)=>{"use strict";var zhr=2147483648;NN.exports=zhr});var AN=a((Zle,ON)=>{"use strict";var Xhr=Dr(),Y2;Xhr===!0?Y2=1:Y2=0;ON.exports=Y2});var _N=a(($le,TN)=>{"use strict";var Jhr=lr(),Yhr=cr(),Zhr=AN(),SN=new Yhr(1),$hr=new Jhr(SN.buffer);function Qhr(r){return SN[0]=r,$hr[Zhr]}TN.exports=Qhr});var ar=a((Qle,IN)=>{"use strict";var Khr=_N();IN.exports=Khr});var PN=a((Kle,RN)=>{"use strict";var rqr=Dr(),LN,Z2,$2;rqr===!0?(Z2=1,$2=0):(Z2=0,$2=1);LN={HIGH:Z2,LOW:$2};RN.exports=LN});var jN=a((r8e,kN)=>{"use strict";var eqr=lr(),tqr=cr(),MN=PN(),BN=new tqr(1),FN=new eqr(BN.buffer),iqr=MN.HIGH,nqr=MN.LOW;function aqr(r,e){return FN[iqr]=r,FN[nqr]=e,BN[0]}kN.exports=aqr});var _i=a((e8e,CN)=>{"use strict";var sqr=jN();CN.exports=sqr});var UN=a((t8e,VN)=>{"use strict";var uqr=J2(),oqr=ie(),vqr=Ti(),fqr=ar(),cqr=_i(),Q2=[0,0];function lqr(r,e){var t,i;return vqr.assign(r,Q2,1,0),t=Q2[0],t&=oqr,i=fqr(e),i&=uqr,t|=i,cqr(t,Q2[1])}VN.exports=lqr});var Da=a((i8e,GN)=>{"use strict";var pqr=UN();GN.exports=pqr});var xN=a((n8e,WN)=>{"use strict";var HN=xa(),gqr=Da(),mqr=V(),za=I();function dqr(r,e){return e===mqr?za:e===za?0:e>0?HN(e)?r:0:HN(e)?gqr(za,r):za}WN.exports=dqr});var zN=a((a8e,DN)=>{"use strict";var hqr=ie(),qqr=ar(),yqr=1072693247,Xa=1e300,Ja=1e-300;function bqr(r,e){var t,i;return i=qqr(r),t=i&hqr,t<=yqr?e<0?Xa*Xa:Ja*Ja:e>0?Xa*Xa:Ja*Ja}DN.exports=bqr});var YN=a((s8e,JN)=>{"use strict";var wqr=Y(),XN=I();function Eqr(r,e){return r===-1?(r-r)/(r-r):r===1?1:wqr(r)<1==(e===XN)?0:XN}JN.exports=Eqr});var $N=a((u8e,ZN)=>{"use strict";var Nqr=Dr(),K2;Nqr===!0?K2=1:K2=0;ZN.exports=K2});var KN=a((o8e,QN)=>{"use strict";var Oqr=lr(),Aqr=cr(),Sqr=$N(),r1=new Aqr(1),Tqr=new Oqr(r1.buffer);function _qr(r,e){return r1[0]=r,Tqr[Sqr]=e>>>0,r1[0]}QN.exports=_qr});var le=a((v8e,rO)=>{"use strict";var Iqr=KN();rO.exports=Iqr});var ne=a((f8e,eO)=>{"use strict";var Lqr=1023;eO.exports=Lqr});var iO=a((c8e,tO)=>{"use strict";function Rqr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}tO.exports=Rqr});var uO=a((l8e,sO)=>{"use strict";var Pqr=ar(),Ya=ce(),nO=le(),Fqr=ne(),Mqr=iO(),Bqr=1048575,aO=1048576,kqr=1072693248,jqr=536870912,Cqr=524288,Vqr=20,Uqr=9007199254740992,Gqr=.9617966939259756,Hqr=.9617967009544373,Wqr=-7028461650952758e-24,xqr=[1,1.5],Dqr=[0,.5849624872207642],zqr=[0,1350039202129749e-23];function Xqr(r,e,t){var i,n,s,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,S,x,Q,G;return x=0,t<aO&&(e*=Uqr,x-=53,t=Pqr(e)),x+=(t>>Vqr)-Fqr|0,Q=t&Bqr|0,t=Q|kqr|0,Q<=235662?G=0:Q<767610?G=1:(G=0,x+=1,t-=aO),e=nO(e,t),c=xqr[G],F=e-c,S=1/(e+c),n=F*S,u=Ya(n,0),i=(t>>1|jqr)+Cqr,i+=G<<18,f=nO(0,i),v=e-(f-c),o=S*(F-u*f-u*v),s=n*n,O=s*s*Mqr(s),O+=o*(u+n),s=u*u,f=3+s+O,f=Ya(f,0),v=O-(f-3-s),F=u*f,S=o*f+v*n,p=F+S,p=Ya(p,0),g=S-(p-F),h=Hqr*p,d=Wqr*p+g*Gqr+zqr[G],l=Dqr[G],N=x,m=h+d+l+N,m=Ya(m,0),q=d-(m-N-l-h),r[0]=m,r[1]=q,r}sO.exports=Xqr});var vO=a((p8e,oO)=>{"use strict";function Jqr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}oO.exports=Jqr});var cO=a((g8e,fO)=>{"use strict";var Yqr=ce(),Zqr=vO(),$qr=1.4426950408889634,Qqr=1.4426950216293335,Kqr=19259629911266175e-24;function ryr(r,e){var t,i,n,s,u,o;return n=e-1,s=n*n*Zqr(n),u=Qqr*n,o=n*Kqr-s*$qr,i=u+o,i=Yqr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}fO.exports=ryr});var e1=a((m8e,lO)=>{"use strict";var eyr=1023;lO.exports=eyr});var gO=a((d8e,pO)=>{"use strict";var tyr=-1023;pO.exports=tyr});var t1=a((h8e,mO)=>{"use strict";var iyr=-1074;mO.exports=iyr});var i1=a((q8e,dO)=>{"use strict";var nyr=22250738585072014e-324;dO.exports=nyr});var n1=a((y8e,hO)=>{"use strict";var ayr=i1(),syr=Br(),uyr=E(),oyr=Y(),vyr=4503599627370496;function fyr(r,e,t,i){return uyr(r)||syr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&oyr(r)<ayr?(e[i]=r*vyr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}hO.exports=fyr});var yO=a((b8e,qO)=>{"use strict";var cyr=n1();function lyr(r){return cyr(r,[0,0],1,0)}qO.exports=lyr});var EO=a((w8e,wO)=>{"use strict";var pyr=b(),bO=yO(),gyr=n1();pyr(bO,"assign",gyr);wO.exports=bO});var bn=a((E8e,NO)=>{"use strict";var myr=2146435072;NO.exports=myr});var AO=a((N8e,OO)=>{"use strict";var dyr=ar(),hyr=bn(),qyr=ne();function yyr(r){var e=dyr(r);return e=(e&hyr)>>>20,e-qyr|0}OO.exports=yyr});var TO=a((O8e,SO)=>{"use strict";var byr=AO();SO.exports=byr});var IO=a((A8e,_O)=>{"use strict";var wyr=I(),Eyr=V(),Nyr=ne(),Oyr=e1(),Ayr=gO(),Syr=t1(),Tyr=E(),_yr=Br(),Iyr=Da(),Lyr=EO().assign,Ryr=TO(),Pyr=Ti(),Fyr=_i(),Myr=2220446049250313e-31,Byr=2148532223>>>0,a1=[0,0],s1=[0,0];function kyr(r,e){var t,i;return e===0||r===0||Tyr(r)||_yr(r)?r:(Lyr(r,a1,1,0),r=a1[0],e+=a1[1],e+=Ryr(r),e<Syr?Iyr(0,r):e>Oyr?r<0?Eyr:wyr:(e<=Ayr?(e+=52,i=Myr):i=1,Pyr.assign(r,s1,1,0),t=s1[0],t&=Byr,t|=e+Nyr<<20,i*Fyr(t,s1[1])))}_O.exports=kyr});var Za=a((S8e,LO)=>{"use strict";var jyr=IO();LO.exports=jyr});var $a=a((T8e,RO)=>{"use strict";var Cyr=.6931471805599453;RO.exports=Cyr});var Qa=a((_8e,PO)=>{"use strict";var Vyr=1048575;PO.exports=Vyr});var MO=a((I8e,FO)=>{"use strict";function Uyr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}FO.exports=Uyr});var GO=a((L8e,UO)=>{"use strict";var Gyr=ar(),BO=le(),Hyr=ce(),Wyr=X2(),xyr=Za(),Dyr=$a(),kO=ne(),jO=ie(),CO=Qa(),zyr=MO(),VO=1048576,Xyr=1071644672,wn=20,Jyr=.6931471824645996,Yyr=-1904654299957768e-24;function Zyr(r,e,t){var i,n,s,u,o,f,v,c,l,p,g;return p=r&jO|0,g=(p>>wn)-kO|0,l=0,p>Xyr&&(l=r+(VO>>g+1)>>>0,g=((l&jO)>>wn)-kO|0,i=(l&~(CO>>g))>>>0,s=BO(0,i),l=(l&CO|VO)>>wn-g>>>0,r<0&&(l=-l),e-=s),s=t+e,s=Hyr(s,0),o=s*Jyr,f=(t-(s-e))*Dyr+s*Yyr,c=o+f,v=f-(c-o),s=c*c,n=c-s*zyr(s),u=c*n/(n-2)-(v+c*v),c=1-(u-c),r=Gyr(c),r=Wyr(r),r+=l<<wn>>>0,r>>wn<=0?c=xyr(c,l):c=BO(c,r),c}UO.exports=Zyr});var QO=a((R8e,$O)=>{"use strict";var HO=E(),WO=xa(),xO=Br(),$yr=Lr(),DO=U(),Qyr=Y(),u1=Ti(),Kyr=ce(),zO=X2(),rbr=V(),ebr=I(),o1=ie(),tbr=xN(),ibr=zN(),nbr=YN(),abr=uO(),sbr=cO(),ubr=GO(),obr=1072693247,vbr=1105199104,fbr=1139802112,XO=1083179008,cbr=1072693248,lbr=1083231232,pbr=3230714880>>>0,JO=31,Qe=1e300,Ke=1e-300,gbr=8008566259537294e-32,pe=[0,0],YO=[0,0];function ZO(r,e){var t,i,n,s,u,o,f,v,c,l,p,g,h,d,m,q;if(HO(r)||HO(e))return NaN;if(u1.assign(e,pe,1,0),o=pe[0],f=pe[1],f===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return DO(r);if(e===-.5)return 1/DO(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(xO(e))return nbr(r,e)}if(u1.assign(r,pe,1,0),s=pe[0],u=pe[1],u===0){if(s===0)return tbr(r,e);if(r===1)return 1;if(r===-1&&WO(e))return-1;if(xO(r))return r===rbr?ZO(-0,-e):e<0?0:ebr}if(r<0&&$yr(e)===!1)return(r-r)/(r-r);if(n=Qyr(r),t=s&o1|0,i=o&o1|0,v=s>>>JO|0,c=o>>>JO|0,v&&WO(e)?v=-1:v=1,i>vbr){if(i>fbr)return ibr(r,e);if(t<obr)return c===1?v*Qe*Qe:v*Ke*Ke;if(t>cbr)return c===0?v*Qe*Qe:v*Ke*Ke;h=sbr(YO,n)}else h=abr(YO,n,t);if(l=Kyr(e,0),g=(e-l)*h[0]+e*h[1],p=l*h[0],d=g+p,u1.assign(d,pe,1,0),m=zO(pe[0]),q=zO(pe[1]),m>=XO){if((m-XO|q)!==0||g+gbr>d-p)return v*Qe*Qe}else if((m&o1)>=lbr&&((m-pbr|q)!==0||g<=d-p))return v*Ke*Ke;return d=ubr(m,p,g),v*d}$O.exports=ZO});var W=a((P8e,KO)=>{"use strict";var mbr=QO();KO.exports=mbr});var Ii=a((F8e,rA)=>{"use strict";var dbr=9007199254740991;rA.exports=dbr});var Ka=a((M8e,eA)=>{"use strict";var hbr=308;eA.exports=hbr});var v1=a((B8e,tA)=>{"use strict";var qbr=-308;tA.exports=qbr});var r0=a((k8e,iA)=>{"use strict";var ybr=-324;iA.exports=ybr});var fA=a((j8e,vA)=>{"use strict";var nA=E(),e0=Br(),aA=W(),bbr=Y(),sA=J(),wbr=Ii(),uA=Ka(),Ebr=v1(),Nbr=r0(),Obr=V(),Abr=wbr+1,oA=1e308;function Sbr(r,e){var t,i;return nA(r)||nA(e)||e0(e)?NaN:e0(r)||r===0||e<Nbr||bbr(r)>Abr&&e<=0?r:e>uA?r>=0?0:Obr:e<Ebr?(t=aA(10,-(e+uA)),i=r*oA*t,e0(i)?r:sA(i)/oA/t):(t=aA(10,-e),i=r*t,e0(i)?r:sA(i)/t)}vA.exports=Sbr});var lA=a((C8e,cA)=>{"use strict";var Tbr=fA();cA.exports=Tbr});var gA=a((V8e,pA)=>{"use strict";function _br(r,e){return r*e}pA.exports=_br});var dA=a((U8e,mA)=>{"use strict";var Ibr=gA();mA.exports=Ibr});var qA=a((G8e,hA)=>{"use strict";function Lbr(r,e){return r-e}hA.exports=Lbr});var bA=a((H8e,yA)=>{"use strict";var Rbr=qA();yA.exports=Rbr});var EA=a((W8e,wA)=>{"use strict";var En=rr(),Pbr=kE(),Fbr=lA(),Mbr=dA(),Bbr=W(),kbr=bA();function jbr(r){return En(r,"add",Pbr),En(r,"floorn",Fbr),En(r,"mul",Mbr),En(r,"pow",Bbr),En(r,"sub",kbr),r}wA.exports=jbr});var SA=a((x8e,AA)=>{"use strict";var NA=j().isPrimitive,Cbr=I(),Vbr=V(),OA=y();function Ubr(r,e){return t;function t(i,n){var s;if(!NA(i)){if(e.nonnumeric===void 0)throw new TypeError(OA("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!NA(n)){if(e.nonnumeric===void 0)throw new TypeError(OA("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return s=r(i,n),s!==s?e.nan:s===Cbr?e.pinf:s===Vbr?e.ninf:s}}AA.exports=Ubr});var f1=a((D8e,TA)=>{"use strict";var Gbr=SA();TA.exports=Gbr});var IA=a((z8e,_A)=>{"use strict";var Hbr=fa(),Wbr=zu(),xbr=Ma(),Dbr=y(),zbr=Fa(),Xbr=f1(),Jbr=["number","number"],Ybr=["First argument","Second argument"];function Zbr(r,e){var t,i,n,s,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(Dbr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=zbr([r[0],r[1]],Jbr,Ybr),t=Hbr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=xbr(t),s=Xbr(e,i),r[0].push(n),r[1].push(t),Wbr(r[0],r[1],s),n}_A.exports=Zbr});var RA=a((X8e,LA)=>{"use strict";var $br=IA();LA.exports=$br});var FA=a((J8e,PA)=>{"use strict";var Qbr=j().isPrimitive,Kbr=I(),rwr=V(),ewr=y();function twr(r,e){return t;function t(i){var n;if(!Qbr(i)){if(e.nonnumeric===void 0)throw new TypeError(ewr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===Kbr?e.pinf:n===rwr?e.ninf:n}}PA.exports=twr});var c1=a((Y8e,MA)=>{"use strict";var iwr=FA();MA.exports=iwr});var kA=a((Z8e,BA)=>{"use strict";var l1=j().isPrimitive,nwr=I(),awr=V(),p1=y();function swr(r,e){return t;function t(i,n,s){var u;if(!l1(i)){if(e.nonnumeric===void 0)throw new TypeError(p1("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!l1(n)){if(e.nonnumeric===void 0)throw new TypeError(p1("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!l1(s)){if(e.nonnumeric===void 0)throw new TypeError(p1("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(s)));return e.nonnumeric}return u=r(i,n,s),u!==u?e.nan:u===nwr?e.pinf:u===awr?e.ninf:u}}BA.exports=swr});var g1=a(($8e,jA)=>{"use strict";var uwr=kA();jA.exports=uwr});var VA=a((Q8e,CA)=>{"use strict";var t0=j().isPrimitive,owr=I(),vwr=V(),i0=y();function fwr(r,e){return t;function t(i,n,s,u){var o;if(!t0(i)){if(e.nonnumeric===void 0)throw new TypeError(i0("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!t0(n)){if(e.nonnumeric===void 0)throw new TypeError(i0("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!t0(s)){if(e.nonnumeric===void 0)throw new TypeError(i0("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(s)));return e.nonnumeric}if(!t0(u)){if(e.nonnumeric===void 0)throw new TypeError(i0("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,s,u),o!==o?e.nan:o===owr?e.pinf:o===vwr?e.ninf:o}}CA.exports=fwr});var GA=a((K8e,UA)=>{"use strict";var cwr=VA();UA.exports=cwr});var WA=a((r5e,HA)=>{"use strict";var Nn=j().isPrimitive,lwr=I(),pwr=V(),On=y();function gwr(r,e){return t;function t(i,n,s,u,o){var f;if(!Nn(i)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Nn(n)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Nn(s)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(s)));return e.nonnumeric}if(!Nn(u)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Nn(o)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return f=r(i,n,s,u,o),f!==f?e.nan:f===lwr?e.pinf:f===pwr?e.ninf:f}}HA.exports=gwr});var DA=a((e5e,xA)=>{"use strict";var mwr=WA();xA.exports=mwr});var XA=a((t5e,zA)=>{"use strict";var dwr=fa(),hwr=Ju(),qwr=Ma(),ywr=y(),bwr=Fa(),wwr=g1(),Ewr=["number","number","number"],Nwr=["First argument","Second argument","Third argument"];function Owr(r,e){var t,i,n,s,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(ywr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=bwr([r[0],r[1],r[2]],Ewr,Nwr),t=dwr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=qwr(t),s=wwr(e,i),r[0].push(n),r[1].push(t),hwr(r[0],r[1],s),n}zA.exports=Owr});var YA=a((i5e,JA)=>{"use strict";var Awr=XA();JA.exports=Awr});var $A=a((n5e,ZA)=>{"use strict";var Swr=mr(),Twr=Ko(),_wr=y(),Iwr=c1();function Lwr(r,e){var t,i,n,s,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(s=r[u],s==="nonnumeric"||s==="nan"||s==="pinf"||s==="ninf")i[s]=r[u+1];else throw new Error(_wr("invalid argument. Unrecognized option name. Value: %s.",String(s)));return n=Iwr(e,i),Swr(t)?(Twr([t,t],[t.length,t[0].length],n),t):n(t)}ZA.exports=Lwr});var KA=a((a5e,QA)=>{"use strict";var Rwr=$A();QA.exports=Rwr});var eS=a((s5e,rS)=>{"use strict";var rt=rr(),Pwr=RA(),Fwr=c1(),Mwr=f1(),Bwr=g1(),kwr=GA(),jwr=DA(),Cwr=YA(),Vwr=KA();function Uwr(r){return rt(r,"binary",Pwr),rt(r,"d_d",Fwr),rt(r,"dd_d",Mwr),rt(r,"ddd_d",Bwr),rt(r,"dddd_d",kwr),rt(r,"ddddd_d",jwr),rt(r,"ternary",Cwr),rt(r,"unary",Vwr),r}rS.exports=Uwr});var iS=a((u5e,tS)=>{"use strict";function Gwr(r){return r*r}tS.exports=Gwr});var n0=a((o5e,nS)=>{"use strict";var Hwr=iS();nS.exports=Hwr});var a0=a((v5e,aS)=>{"use strict";var Wwr=.7853981633974483;aS.exports=Wwr});var uS=a((f5e,sS)=>{"use strict";function xwr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}sS.exports=xwr});var vS=a((c5e,oS)=>{"use strict";function Dwr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}oS.exports=Dwr});var lS=a((l5e,cS)=>{"use strict";var zwr=E(),Xwr=U(),fS=a0(),Jwr=uS(),Ywr=vS(),Zwr=6123233995736766e-32;function $wr(r){var e,t,i,n,s;if(zwr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*Ywr(t),t=Xwr(t+t),s=fS-t,t=t*n-Zwr,s-=t,s+=fS;else{if(i<1e-8)return r;t=i*i,s=t*Jwr(t),s=i*s+i}return e?-s:s}cS.exports=$wr});var xt=a((p5e,pS)=>{"use strict";var Qwr=lS();pS.exports=Qwr});var hS=a((g5e,dS)=>{"use strict";var Kwr=E(),gS=xt(),rEr=U(),mS=a0(),eEr=6123233995736766e-32;function tEr(r){var e;return Kwr(r)?NaN:r<-1||r>1?NaN:r>.5?2*gS(rEr(.5-.5*r)):(e=mS-gS(r),e+=eEr,e+=mS,e)}dS.exports=tEr});var An=a((m5e,qS)=>{"use strict";var iEr=hS();qS.exports=iEr});var bS=a((d5e,yS)=>{"use strict";function nEr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}yS.exports=nEr});var AS=a((h5e,OS)=>{"use strict";var aEr=E(),wS=ar(),ES=le(),sEr=I(),uEr=V(),NS=ne(),oEr=bS(),m1=.6931471803691238,d1=19082149292705877e-26,vEr=.41421356237309503,fEr=-.2928932188134525,cEr=1862645149230957e-24,lEr=5551115123125783e-32,pEr=9007199254740992,gEr=.6666666666666666;function mEr(r){var e,t,i,n,s,u,o,f,v,c;if(r<-1||aEr(r))return NaN;if(r===-1)return uEr;if(r===sEr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<vEr){if(i<cEr)return i<lEr?r:r-r*r*.5;r>fEr&&(c=0,n=r,t=1)}return c!==0&&(i<pEr?(v=1+r,t=wS(v),c=(t>>20)-NS,c>0?s=1-(v-r):s=r-(v-1),s/=v):(v=r,t=wS(v),c=(t>>20)-NS,s=0),t&=1048575,t<434334?v=ES(v,t|1072693248):(c+=1,v=ES(v,t|1071644672),t=1048576-t>>2),n=v-1),e=.5*n*n,t===0?n===0?(s+=c*d1,c*m1+s):(f=e*(1-gEr*n),c*m1-(f-(c*d1+s)-n)):(u=n/(2+n),o=u*u,f=o*oEr(o),c===0?n-(e-u*(e+f)):c*m1-(e-(u*(e+f)+(c*d1+s))-n))}OS.exports=mEr});var et=a((q5e,SS)=>{"use strict";var dEr=AS();SS.exports=dEr});var _S=a((y5e,TS)=>{"use strict";function hEr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}TS.exports=hEr});var LS=a((b5e,IS)=>{"use strict";function qEr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}IS.exports=qEr});var MS=a((w5e,FS)=>{"use strict";var RS=ar(),yEr=le(),bEr=E(),wEr=ne(),EEr=V(),NEr=_S(),OEr=LS(),s0=.6931471803691238,u0=19082149292705877e-26,AEr=0x40000000000000,SEr=.3333333333333333,PS=1048575,TEr=2146435072,_Er=1048576,IEr=1072693248;function LEr(r){var e,t,i,n,s,u,o,f,v,c,l,p;return r===0?EEr:bEr(r)||r<0?NaN:(t=RS(r),s=0,t<_Er&&(s-=54,r*=AEr,t=RS(r)),t>=TEr?r+r:(s+=(t>>20)-wEr|0,t&=PS,f=t+614244&1048576|0,r=yEr(r,t|f^IEr),s+=f>>20|0,o=r-1,(PS&2+t)<3?o===0?s===0?0:s*s0+s*u0:(u=o*o*(.5-SEr*o),s===0?o-u:s*s0-(u-s*u0-o)):(c=o/(2+o),p=c*c,f=t-398458|0,l=p*p,v=440401-t|0,n=l*NEr(l),i=p*OEr(l),f|=v,u=i+n,f>0?(e=.5*o*o,s===0?o-(e-c*(e+u)):s*s0-(e-(c*(e+u)+s*u0)-o)):s===0?o-c*(o-u):s*s0-(c*(o-u)-s*u0-o))))}FS.exports=LEr});var P=a((E5e,BS)=>{"use strict";var REr=MS();BS.exports=REr});var VS=a((N5e,CS)=>{"use strict";var PEr=E(),FEr=et(),kS=U(),MEr=$a(),jS=P(),BEr=1<<28;function kEr(r){var e;return PEr(r)||r<1?NaN:r===1?0:r>=BEr?jS(r)+MEr:r>2?jS(2*r-1/(r+kS(r*r-1))):(e=r-1,FEr(e+kS(2*e+e*e)))}CS.exports=kEr});var GS=a((O5e,US)=>{"use strict";var jEr=VS();US.exports=jEr});var o0=a((A5e,HS)=>{"use strict";var CEr=1.5707963267948966;HS.exports=CEr});var xS=a((S5e,WS)=>{"use strict";function VEr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}WS.exports=VEr});var zS=a((T5e,DS)=>{"use strict";function UEr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}DS.exports=UEr});var YS=a((_5e,JS)=>{"use strict";var GEr=E(),HEr=I(),h1=o0(),WEr=a0(),xEr=V(),DEr=xS(),zEr=zS(),XS=6123233995736766e-32,XEr=2.414213562373095;function JEr(r){var e,t,i,n;return GEr(r)||r===0?r:r===HEr?h1:r===xEr?-h1:(r<0&&(t=!0,r=-r),e=0,r>XEr?(i=h1,e=1,r=-(1/r)):r<=.66?i=0:(i=WEr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*DEr(n)/zEr(n),n=r*n+r,e===2?n+=.5*XS:e===1&&(n+=XS),i+=n,t?-i:i)}JS.exports=JEr});var v0=a((I5e,ZS)=>{"use strict";var YEr=YS();ZS.exports=YEr});var QS=a((L5e,$S)=>{"use strict";var ZEr=v0();function $Er(r){return ZEr(1/r)}$S.exports=$Er});var rT=a((R5e,KS)=>{"use strict";var QEr=QS();KS.exports=QEr});var tT=a((P5e,eT)=>{"use strict";var KEr=xt();function rNr(r){return KEr(1+r)}eT.exports=rNr});var nT=a((F5e,iT)=>{"use strict";var eNr=tT();iT.exports=eNr});var sT=a((M5e,aT)=>{"use strict";var tNr=xt();function iNr(r){return tNr(1-r)}aT.exports=iNr});var oT=a((B5e,uT)=>{"use strict";var nNr=sT();uT.exports=nNr});var fT=a((k5e,vT)=>{"use strict";var aNr=xt();function sNr(r){return aNr(1/r)}vT.exports=sNr});var lT=a((j5e,cT)=>{"use strict";var uNr=fT();cT.exports=uNr});var dT=a((C5e,mT)=>{"use strict";var oNr=Br(),vNr=E(),fNr=et(),pT=U(),cNr=$a(),gT=P(),lNr=1/(1<<28),pNr=1<<28;function gNr(r){var e,t,i;return vNr(r)||oNr(r)?r:(r<0&&(r=-r,e=!0),r<lNr?i=r:r>pNr?i=gT(r)+cNr:r>2?i=gT(2*r+1/(pT(r*r+1)+r)):(t=r*r,i=fNr(r+t/(1+pT(1+t)))),e?-i:i)}mT.exports=gNr});var q1=a((V5e,hT)=>{"use strict";var mNr=dT();hT.exports=mNr});var yT=a((U5e,qT)=>{"use strict";var dNr=q1();function hNr(r){return dNr(1/r)}qT.exports=hNr});var wT=a((G5e,bT)=>{"use strict";var qNr=yT();bT.exports=qNr});var NT=a((H5e,ET)=>{"use strict";var yNr=An(),bNr=U();function wNr(r){return 2*yNr(bNr(r))}ET.exports=wNr});var AT=a((W5e,OT)=>{"use strict";var ENr=NT();OT.exports=ENr});var TT=a((x5e,ST)=>{"use strict";var NNr=xt(),ONr=U();function ANr(r){return 2*NNr(ONr(r))}ST.exports=ANr});var IT=a((D5e,_T)=>{"use strict";var SNr=TT();_T.exports=SNr});var PT=a((z5e,RT)=>{"use strict";var TNr=E(),LT=et(),_Nr=I(),INr=V(),LNr=1/(1<<28);function RNr(r){var e,t;return TNr(r)||r<-1||r>1?NaN:r===1?_Nr:r===-1?INr:(r<0&&(e=!0,r=-r),r<LNr?e?-r:r:(r<.5?(t=r+r,t=.5*LT(t+t*r/(1-r))):t=.5*LT((r+r)/(1-r)),e?-t:t))}RT.exports=RNr});var MT=a((X5e,FT)=>{"use strict";var PNr=PT();FT.exports=PNr});var kT=a((J5e,BT)=>{"use strict";var FNr=An();function MNr(r){return FNr(1+r)}BT.exports=MNr});var CT=a((Y5e,jT)=>{"use strict";var BNr=kT();jT.exports=BNr});var UT=a((Z5e,VT)=>{"use strict";var kNr=An();function jNr(r){return kNr(1-r)}VT.exports=jNr});var HT=a(($5e,GT)=>{"use strict";var CNr=UT();GT.exports=CNr});var xT=a((Q5e,WT)=>{"use strict";var VNr=J();function UNr(r){return VNr(r)===r&&r>=0}WT.exports=UNr});var y1=a((K5e,DT)=>{"use strict";var GNr=xT();DT.exports=GNr});var zT=a((r7e,HNr)=>{HNr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var JT=a((e7e,XT)=>{"use strict";var WNr=y1(),xNr=E(),DNr=xa(),zNr=V(),XNr=I(),JNr=zT(),YNr=258;function ZNr(r){return xNr(r)||!WNr(r)?NaN:DNr(r)?0:r>YNr?r/2&1?XNr:zNr:JNr[r/2]}XT.exports=ZNr});var ZT=a((t7e,YT)=>{"use strict";var $Nr=JT();YT.exports=$Nr});var QT=a((i7e,$T)=>{"use strict";var QNr=Dr(),b1;QNr===!0?b1=0:b1=1;$T.exports=b1});var e_=a((n7e,r_)=>{"use strict";var KNr=lr(),rOr=cr(),eOr=QT(),KT=new rOr(1),tOr=new KNr(KT.buffer);function iOr(r){return KT[0]=r,tOr[eOr]}r_.exports=iOr});var i_=a((a7e,t_)=>{"use strict";var nOr=e_();t_.exports=nOr});var o_=a((s7e,u_)=>{"use strict";var aOr=J(),f0=Za(),p0=va(),a_=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],sOr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],w1=16777216,E1=5960464477539063e-23,c0=p0(20),n_=p0(20),l0=p0(20),pr=p0(20);function s_(r,e,t,i,n,s,u,o,f){var v,c,l,p,g,h,d,m,q;for(p=s,q=i[t],m=t,g=0;m>0;g++)c=E1*q|0,pr[g]=q-w1*c|0,q=i[m-1]+c,m-=1;if(q=f0(q,n),q-=8*aOr(q*.125),d=q|0,q-=d,l=0,n>0?(g=pr[t-1]>>24-n,d+=g,pr[t-1]-=g<<24-n,l=pr[t-1]>>23-n):n===0?l=pr[t-1]>>23:q>=.5&&(l=2),l>0){for(d+=1,v=0,g=0;g<t;g++)m=pr[g],v===0?m!==0&&(v=1,pr[g]=16777216-m):pr[g]=16777215-m;if(n>0)switch(n){case 1:pr[t-1]&=8388607;break;case 2:pr[t-1]&=4194303;break}l===2&&(q=1-q,v!==0&&(q-=f0(1,n)))}if(q===0){for(m=0,g=t-1;g>=s;g--)m|=pr[g];if(m===0){for(h=1;pr[s-h]===0;h++);for(g=t+1;g<=t+h;g++){for(f[o+g]=a_[u+g],c=0,m=0;m<=o;m++)c+=r[m]*f[o+(g-m)];i[g]=c}return t+=h,s_(r,e,t,i,n,s,u,o,f)}}if(q===0)for(t-=1,n-=24;pr[t]===0;)t-=1,n-=24;else q=f0(q,-n),q>=w1?(c=E1*q|0,pr[t]=q-w1*c|0,t+=1,n+=24,pr[t]=c):pr[t]=q|0;for(c=f0(1,n),g=t;g>=0;g--)i[g]=c*pr[g],c*=E1;for(g=t;g>=0;g--){for(c=0,h=0;h<=p&&h<=t-g;h++)c+=sOr[h]*i[g+h];l0[t-g]=c}for(c=0,g=t;g>=0;g--)c+=l0[g];for(l===0?e[0]=c:e[0]=-c,c=l0[0]-c,g=1;g<=t;g++)c+=l0[g];return l===0?e[1]=c:e[1]=-c,d&7}function uOr(r,e,t,i){var n,s,u,o,f,v,c,l,p;for(s=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),v=t-24*(u+1),l=u-o,p=o+s,c=0;c<=p;c++)l<0?c0[c]=0:c0[c]=a_[l],l+=1;for(c=0;c<=s;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*c0[o+(c-l)];n_[c]=n}return f=s,s_(r,e,f,n_,v,s,u,o,c0)}u_.exports=uOr});var f_=a((u7e,v_)=>{"use strict";var oOr=Math.round;v_.exports=oOr});var N1=a((o7e,c_)=>{"use strict";var vOr=f_();c_.exports=vOr});var m_=a((v7e,g_)=>{"use strict";var fOr=N1(),l_=ar(),cOr=.6366197723675814,lOr=1.5707963267341256,pOr=6077100506506192e-26,gOr=6077100506303966e-26,mOr=20222662487959506e-37,dOr=20222662487111665e-37,hOr=84784276603689e-45,p_=2047;function qOr(r,e,t){var i,n,s,u,o,f,v;return n=fOr(r*cOr),u=r-n*lOr,o=n*pOr,v=e>>20|0,t[0]=u-o,i=l_(t[0]),f=v-(i>>20&p_),f>16&&(s=u,o=n*gOr,u=s-o,o=n*mOr-(s-u-o),t[0]=u-o,i=l_(t[0]),f=v-(i>>20&p_),f>49&&(s=u,o=n*dOr,u=s-o,o=n*hOr-(s-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}g_.exports=qOr});var h_=a((f7e,d_)=>{"use strict";var yOr=ie(),bOr=bn(),wOr=Qa(),EOr=ar(),NOr=i_(),OOr=_i(),AOr=o_(),g0=m_(),SOr=0,TOr=16777216,tt=1.5707963267341256,Dt=6077100506506192e-26,m0=2*Dt,d0=3*Dt,h0=4*Dt,_Or=598523,IOr=1072243195,LOr=1073928572,ROr=1074752122,POr=1074977148,FOr=1075183036,MOr=1075388923,BOr=1075594811,kOr=1094263291,Sn=[0,0,0],Tn=[0,0];function jOr(r,e){var t,i,n,s,u,o,f,v;if(n=EOr(r),s=n&yOr|0,s<=IOr)return e[0]=r,e[1]=0,0;if(s<=ROr)return(s&wOr)===_Or?g0(r,s,e):s<=LOr?r>0?(v=r-tt,e[0]=v-Dt,e[1]=v-e[0]-Dt,1):(v=r+tt,e[0]=v+Dt,e[1]=v-e[0]+Dt,-1):r>0?(v=r-2*tt,e[0]=v-m0,e[1]=v-e[0]-m0,2):(v=r+2*tt,e[0]=v+m0,e[1]=v-e[0]+m0,-2);if(s<=BOr)return s<=FOr?s===POr?g0(r,s,e):r>0?(v=r-3*tt,e[0]=v-d0,e[1]=v-e[0]-d0,3):(v=r+3*tt,e[0]=v+d0,e[1]=v-e[0]+d0,-3):s===MOr?g0(r,s,e):r>0?(v=r-4*tt,e[0]=v-h0,e[1]=v-e[0]-h0,4):(v=r+4*tt,e[0]=v+h0,e[1]=v-e[0]+h0,-4);if(s<kOr)return g0(r,s,e);if(s>=bOr)return e[0]=NaN,e[1]=NaN,0;for(t=NOr(r),i=(s>>20)-1046,v=OOr(s-(i<<20|0),t),o=0;o<2;o++)Sn[o]=v|0,v=(v-Sn[o])*TOr;for(Sn[2]=v,u=3;Sn[u-1]===SOr;)u-=1;return f=AOr(Sn,Tn,i,u,1),r<0?(e[0]=-Tn[0],e[1]=-Tn[1],-f):(e[0]=Tn[0],e[1]=Tn[1],f)}d_.exports=jOr});var _n=a((c7e,q_)=>{"use strict";var COr=h_();q_.exports=COr});var w_=a((l7e,b_)=>{"use strict";var y_=-.16666666666666632,VOr=.00833333333332249,UOr=-.0001984126982985795,GOr=27557313707070068e-22,HOr=-25050760253406863e-24,WOr=158969099521155e-24,xOr=.0416666666666666,DOr=-.001388888888887411,zOr=2480158728947673e-20,XOr=-27557314351390663e-23,JOr=2087572321298175e-24,YOr=-11359647557788195e-27;function ZOr(r,e,t,i,n){var s,u,o,f,v;return v=r*r,f=v*v,u=VOr+v*(UOr+v*GOr)+v*f*(HOr+v*WOr),o=v*r,e===0?t[n]=r+o*(y_+v*u):t[n]=r-(v*(.5*e-o*u)-e-o*y_),u=v*(xOr+v*(DOr+v*zOr)),u+=f*f*(XOr+v*(JOr+v*YOr)),s=.5*v,f=1-s,t[n+i]=f+(1-f-s+(v*u-r*e)),t}b_.exports=ZOr});var A1=a((p7e,N_)=>{"use strict";var $Or=ie(),QOr=bn(),KOr=ar(),rAr=_n(),E_=w_(),eAr=1072243195,tAr=1044381696,O1=[0,0];function iAr(r,e,t,i){var n,s;if(n=KOr(r),n&=$Or,n<=eAr)return n<tAr&&(r|0)===0&&(e[i]=r,e[i+t]=0),E_(r,0,e,t,i);if(n>=QOr)return e[i]=NaN,e[i+t]=NaN,e;switch(s=rAr(r,O1),E_(O1[0],O1[1],e,t,i),s&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}N_.exports=iAr});var A_=a((g7e,O_)=>{"use strict";var nAr=A1();function aAr(r){return nAr(r,[0,0],1,0)}O_.exports=aAr});var In=a((m7e,T_)=>{"use strict";var sAr=b(),S_=A_(),uAr=A1();sAr(S_,"assign",uAr);T_.exports=S_});var I_=a((d7e,__)=>{"use strict";function oAr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}__.exports=oAr});var R_=a((h7e,L_)=>{"use strict";function vAr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}L_.exports=vAr});var F_=a((q7e,P_)=>{"use strict";function fAr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}P_.exports=fAr});var B_=a((y7e,M_)=>{"use strict";function cAr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}M_.exports=cAr});var j_=a((b7e,k_)=>{"use strict";var lAr=U(),pAr=In().assign,gAr=I(),mAr=I_(),dAr=R_(),hAr=F_(),qAr=B_(),yAr=.5641895835477563,bAr=2.404825557695773,wAr=5.520078110286311,EAr=616,NAr=-.0014244423042272315,OAr=1413,AAr=.0005468602863106496,Ln=[0,0];function SAr(r){var e,t,i,n,s,u;return r<0&&(r=-r),r===gAr?0:r===0?1:r<=4?(s=r*r,n=mAr(s),u=(r+bAr)*(r-EAr/256-NAr),u*n):r<=8?(s=1-r*r/64,n=dAr(s),u=(r+wAr)*(r-OAr/256-AAr),u*n):(s=8/r,i=s*s,e=hAr(i),t=qAr(i),u=yAr/lAr(r),pAr(r,Ln,1,0),u*(e*(Ln[1]+Ln[0])-s*t*(Ln[0]-Ln[1])))}k_.exports=SAr});var S1=a((w7e,C_)=>{"use strict";var TAr=j_();C_.exports=TAr});var q0=a((E7e,V_)=>{"use strict";var _Ar=1.772453850905516;V_.exports=_Ar});var G_=a((N7e,U_)=>{"use strict";function IAr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}U_.exports=IAr});var W_=a((O7e,H_)=>{"use strict";function LAr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}H_.exports=LAr});var D_=a((A7e,x_)=>{"use strict";function RAr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}x_.exports=RAr});var X_=a((S7e,z_)=>{"use strict";function PAr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}z_.exports=PAr});var Y_=a((T7e,J_)=>{"use strict";var FAr=U(),MAr=Y(),BAr=In().assign,kAr=I(),jAr=q0(),CAr=G_(),VAr=W_(),UAr=D_(),GAr=X_(),HAr=3.8317059702075125,WAr=7.015586669815619,xAr=981,DAr=-.0003252797924876844,zAr=1796,XAr=-38330184381246464e-21,Rn=[0,0];function JAr(r){var e,t,i,n,s,u,o,f;return f=MAr(r),r===0||f===kAr?0:(f<=4?(u=r*r,s=CAr(u),o=f*(f+HAr)*(f-xAr/256-DAr),e=o*s):f<=8?(u=r*r,s=VAr(u),o=f*(f+WAr)*(f-zAr/256-XAr),e=o*s):(u=8/f,n=u*u,t=UAr(n),i=GAr(n),o=1/(FAr(f)*jAr),BAr(f,Rn,1,0),e=o*(t*(Rn[0]-Rn[1])+u*i*(Rn[0]+Rn[1]))),r<0&&(e*=-1),e)}J_.exports=JAr});var T1=a((_7e,Z_)=>{"use strict";var YAr=Y_();Z_.exports=YAr});var kr=a((I7e,$_)=>{"use strict";var ZAr=3.141592653589793;$_.exports=ZAr});var K_=a((L7e,Q_)=>{"use strict";function $Ar(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}Q_.exports=$Ar});var eI=a((R7e,rI)=>{"use strict";function QAr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}rI.exports=QAr});var iI=a((P7e,tI)=>{"use strict";function KAr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}tI.exports=KAr});var aI=a((F7e,nI)=>{"use strict";function rSr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}nI.exports=rSr});var uI=a((M7e,sI)=>{"use strict";function eSr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}sI.exports=eSr});var lI=a((B7e,cI)=>{"use strict";var _1=P(),tSr=U(),iSr=kr(),nSr=q0(),aSr=V(),sSr=I(),uSr=In().assign,I1=S1(),oSr=K_(),vSr=eI(),fSr=iI(),cSr=aI(),lSr=uI(),pSr=1/nSr,L1=2/iSr,oI=.8935769662791675,vI=3.957678419314858,fI=7.086051060301773,gSr=228,mSr=.0029519662791675214,dSr=1013,hSr=.0006471693148578684,qSr=1814,ySr=.00011356030177269763,Pn=[0,0];function bSr(r){var e,t,i,n,s,u,o;return r<0?NaN:r===0?aSr:r===sSr?0:r<=3?(s=r*r,u=_1(r/oI)*I1(r)*L1,n=oSr(s),o=(r+oI)*(r-gSr/256-mSr),u+o*n):r<=5.5?(s=r*r,u=_1(r/vI)*I1(r)*L1,n=vSr(s),o=(r+vI)*(r-dSr/256-hSr),u+o*n):r<=8?(s=r*r,u=_1(r/fI)*I1(r)*L1,n=fSr(s),o=(r+fI)*(r-qSr/256-ySr),u+o*n):(s=8/r,i=s*s,e=cSr(i),t=lSr(i),o=pSr/tSr(r),uSr(r,Pn,1,0),o*(e*(Pn[0]-Pn[1])+s*t*(Pn[1]+Pn[0])))}cI.exports=bSr});var gI=a((k7e,pI)=>{"use strict";var wSr=lI();pI.exports=wSr});var dI=a((j7e,mI)=>{"use strict";function ESr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}mI.exports=ESr});var qI=a((C7e,hI)=>{"use strict";function NSr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}hI.exports=NSr});var bI=a((V7e,yI)=>{"use strict";function OSr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}yI.exports=OSr});var EI=a((U7e,wI)=>{"use strict";function ASr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}wI.exports=ASr});var II=a((G7e,_I)=>{"use strict";var NI=P(),SSr=U(),TSr=kr(),_Sr=q0(),ISr=V(),LSr=I(),RSr=In().assign,OI=T1(),PSr=dI(),FSr=qI(),MSr=bI(),BSr=EI(),kSr=1/_Sr,AI=2/TSr,SI=2.197141326031017,TI=5.429681040794135,jSr=562,CSr=.001828826031017035,VSr=1390,USr=-6459205864867228e-21,Fn=[0,0];function GSr(r){var e,t,i,n,s,u,o;return r<0?NaN:r===0?ISr:r===LSr?0:r<=4?(s=r*r,u=NI(r/SI)*OI(r)*AI,n=PSr(s),o=(r+SI)*(r-jSr/256-CSr)/r,u+o*n):r<=8?(s=r*r,u=NI(r/TI)*OI(r)*AI,n=FSr(s),o=(r+TI)*(r-VSr/256-USr)/r,u+o*n):(s=8/r,i=s*s,e=MSr(i),t=BSr(i),o=kSr/SSr(r),RSr(r,Fn,1,0),o*(s*t*(Fn[0]-Fn[1])-e*(Fn[0]+Fn[1])))}_I.exports=GSr});var RI=a((H7e,LI)=>{"use strict";var HSr=II();LI.exports=HSr});var FI=a((W7e,PI)=>{"use strict";function WSr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}PI.exports=WSr});var BI=a((x7e,MI)=>{"use strict";function xSr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}MI.exports=xSr});var jI=a((D7e,kI)=>{"use strict";var DSr=FI(),zSr=BI();function XSr(r,e){var t,i,n,s;return s=r*r,n=s*s,i=s*DSr(s),i+=n*n*zSr(s),t=.5*s,n=1-t,n+(1-n-t+(s*i-r*e))}kI.exports=XSr});var R1=a((z7e,CI)=>{"use strict";var JSr=jI();CI.exports=JSr});var GI=a((X7e,UI)=>{"use strict";var VI=-.16666666666666632,YSr=.00833333333332249,ZSr=-.0001984126982985795,$Sr=27557313707070068e-22,QSr=-25050760253406863e-24,KSr=158969099521155e-24;function rTr(r,e){var t,i,n,s;return s=r*r,n=s*s,t=YSr+s*(ZSr+s*$Sr)+s*n*(QSr+s*KSr),i=s*r,e===0?r+i*(VI+s*t):r-(s*(.5*e-i*t)-e-i*VI)}UI.exports=rTr});var P1=a((J7e,HI)=>{"use strict";var eTr=GI();HI.exports=eTr});var DI=a((Y7e,xI)=>{"use strict";var tTr=ar(),F1=R1(),WI=P1(),iTr=_n(),ge=[0,0],nTr=2147483647,aTr=1072243195,sTr=1044381696,uTr=2146435072;function oTr(r){var e,t;if(e=tTr(r),e&=nTr,e<=aTr)return e<sTr?1:F1(r,0);if(e>=uTr)return NaN;switch(t=iTr(r,ge),t&3){case 0:return F1(ge[0],ge[1]);case 1:return-WI(ge[0],ge[1]);case 2:return-F1(ge[0],ge[1]);default:return WI(ge[0],ge[1])}}xI.exports=oTr});var zt=a((Z7e,zI)=>{"use strict";var vTr=DI();zI.exports=vTr});var YI=a(($7e,JI)=>{"use strict";var fTr=ie(),cTr=bn(),lTr=ar(),XI=R1(),M1=P1(),pTr=_n(),gTr=1072243195,mTr=1045430272,me=[0,0];function dTr(r){var e,t;if(e=lTr(r),e&=fTr,e<=gTr)return e<mTr?r:M1(r,0);if(e>=cTr)return NaN;switch(t=pTr(r,me),t&3){case 0:return M1(me[0],me[1]);case 1:return XI(me[0],me[1]);case 2:return-M1(me[0],me[1]);default:return-XI(me[0],me[1])}}JI.exports=dTr});var Xt=a((Q7e,ZI)=>{"use strict";var hTr=YI();ZI.exports=hTr});var KI=a((K7e,QI)=>{"use strict";var qTr=E(),yTr=Br(),bTr=Y(),$I=zt(),wTr=Xt(),ETr=J(),B1=kr(),NTr=Ii(),OTr=NTr+1;function ATr(r){var e,t,i,n;return qTr(r)?NaN:yTr(r)?NaN:(e=bTr(r),e>OTr?1:(t=ETr(e),i=e-t,i===.5?0:(i<.25?n=$I(B1*i):i<.75?(i=.5-i,n=wTr(B1*i)):(i=1-i,n=-$I(B1*i)),t%2===1?-n:n)))}QI.exports=ATr});var eL=a((r9e,rL)=>{"use strict";var STr=KI();rL.exports=STr});var iL=a((e9e,tL)=>{"use strict";var TTr=1.618033988749895;tL.exports=TTr});var aL=a((t9e,nL)=>{"use strict";var _Tr=E(),ITr=eL(),LTr=W(),RTr=iL(),PTr=I(),FTr=V(),MTr=2.23606797749979;function BTr(r){var e,t;return _Tr(r)||r===PTr||r===FTr?NaN:(e=LTr(RTr,r),t=ITr(r)/e,(e-t)/MTr)}nL.exports=BTr});var uL=a((i9e,sL)=>{"use strict";var kTr=aL();sL.exports=kTr});var vL=a((n9e,oL)=>{"use strict";function jTr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}oL.exports=jTr});var pL=a((a9e,lL)=>{"use strict";var CTr=i1(),VTr=J2(),fL=ie(),j1=ar(),UTr=le(),GTr=Br(),cL=_i(),HTr=Ti(),WTr=E(),xTr=vL(),DTr=4294967295>>>0,zTr=3221225472>>>0,XTr=0x40000000000000,k1=2147483648>>>0,JTr=1>>>0,YTr=715094163>>>0,ZTr=696219795>>>0,$Tr=j1(CTr),Jt=[0>>>0,0>>>0];function QTr(r){var e,t,i,n,s,u,o;return r===0||WTr(r)||GTr(r)?r:(t=j1(r)>>>0,e=(t&VTr)>>>0,t&=fL,t<$Tr?(u=XTr*r,i=(j1(u)&fL)>>>0,i=(i/3>>>0)+ZTr>>>0,u=cL(e|i,0)):(u=0,i=(t/3>>>0)+YTr>>>0,u=UTr(u,e|i)),n=u*u*(u/r),u*=xTr(n),HTr.assign(u,Jt,1,0),Jt[1]&k1?(Jt[0]+=JTr,Jt[1]&=~k1):Jt[1]|=k1,u=cL(Jt[0]&DTr,Jt[1]&zTr),s=u*u,n=r/s,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}lL.exports=QTr});var mL=a((s9e,gL)=>{"use strict";var KTr=pL();gL.exports=KTr});var hL=a((u9e,dL)=>{"use strict";var r_r=Math.ceil;dL.exports=r_r});var Mn=a((o9e,qL)=>{"use strict";var e_r=hL();qL.exports=e_r});var bL=a((v9e,yL)=>{"use strict";function t_r(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}yL.exports=t_r});var EL=a((f9e,wL)=>{"use strict";function i_r(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}wL.exports=i_r});var AL=a((c9e,OL)=>{"use strict";var n_r=ar(),a_r=bL(),s_r=EL(),NL=1048575,u_r=.3333333333333333;function o_r(r){var e,t,i,n,s,u,o,f,v,c,l;return n=n_r(r),s=r-1,(NL&2+n)<3?s===0?0:s*s*(u_r*s-.5):(u=s/(2+s),o=u*u,n&=NL,c=n-398458|0,v=o*o,l=440401-n|0,t=v*a_r(v),i=o*s_r(v),c|=l,f=i+t,c>0?(e=.5*s*s,u*(e+f)-e):u*(f-s))}OL.exports=o_r});var IL=a((l9e,_L)=>{"use strict";var SL=ar(),v_r=le(),f_r=ce(),c_r=E(),l_r=ne(),p_r=V(),g_r=AL(),m_r=0x40000000000000,TL=.4342944818781689,d_r=25082946711645275e-27,h_r=.30102999566361177,q_r=3694239077158931e-28,y_r=1048575,b_r=2146435072,w_r=1048576,E_r=1072693248;function N_r(r){var e,t,i,n,s,u,o,f;return c_r(r)||r<0?NaN:r===0?p_r:(t=SL(r),u=0,t<w_r&&(u-=54,r*=m_r,t=SL(r)),t>=b_r?r+r:(u+=(t>>20)-l_r|0,t&=y_r,s=t+614244&1048576|0,r=v_r(r,t|s^E_r),u+=s>>20|0,o=u,n=g_r(r),r-=1,e=f_r(r,0),i=r-e,f=o*q_r+(r+n)*d_r,f+=(i+n)*TL+e*TL,f+o*h_r))}_L.exports=N_r});var RL=a((p9e,LL)=>{"use strict";var O_r=IL();LL.exports=O_r});var FL=a((g9e,PL)=>{"use strict";var A_r=E(),S_r=Br(),T_r=W(),__r=J(),I_r=Mn(),L_r=RL(),R_r=Ka(),P_r=r0(),F_r=I();function M_r(r){var e,t;return A_r(r)||S_r(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=L_r(r),e===-1?t=__r(t):t=I_r(t),t<=P_r?e*0:t>R_r?F_r:e*T_r(10,t))}PL.exports=M_r});var BL=a((m9e,ML)=>{"use strict";var B_r=FL();ML.exports=B_r});var jL=a((d9e,kL)=>{"use strict";function k_r(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}kL.exports=k_r});var VL=a((h9e,CL)=>{"use strict";function j_r(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}CL.exports=j_r});var HL=a((q9e,GL)=>{"use strict";var C_r=ar(),V_r=jL(),U_r=VL(),UL=1048575,G_r=.3333333333333333;function H_r(r){var e,t,i,n,s,u,o,f,v,c,l;return n=C_r(r),s=r-1,(UL&2+n)<3?s===0?0:s*s*(G_r*s-.5):(u=s/(2+s),o=u*u,n&=UL,c=n-398458|0,v=o*o,l=440401-n|0,t=v*V_r(v),i=o*U_r(v),c|=l,f=i+t,c>0?(e=.5*s*s,u*(e+f)-e):u*(f-s))}GL.exports=H_r});var DL=a((y9e,xL)=>{"use strict";var W_r=ar(),x_r=le(),D_r=ce(),z_r=Ti(),X_r=E(),J_r=ie(),Y_r=Qa(),Z_r=ne(),$_r=V(),Q_r=HL(),K_r=0x40000000000000,WL=1.4426950407214463,rIr=16751713164886512e-26,eIr=2146435072,tIr=1048576,iIr=1072693248,C1=[0,0];function nIr(r){var e,t,i,n,s,u,o;if(X_r(r)||r<0)return NaN;if(z_r.assign(r,C1,1,0),i=C1[0],n=C1[1],o=0,i<tIr){if((i&J_r|n)===0)return $_r;o-=54,r*=K_r,i=W_r(r)}return i>=eIr?r+r:(o+=(i>>20)-Z_r|0,i&=Y_r,u=i+614244&1048576|0,r=x_r(r,i|u^iIr),o+=u>>20|0,s=Q_r(r),r-=1,e=D_r(r,0),t=r-e,(r+s)*rIr+(t+s)*WL+e*WL+o)}xL.exports=nIr});var XL=a((b9e,zL)=>{"use strict";var aIr=DL();zL.exports=aIr});var YL=a((w9e,JL)=>{"use strict";var sIr=E(),uIr=Br(),oIr=W(),vIr=J(),fIr=Mn(),cIr=XL(),lIr=e1(),pIr=t1(),gIr=I();function mIr(r){var e,t;return sIr(r)||uIr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=cIr(r),t===pIr)?r:(e===-1?t=vIr(t):t=fIr(t),t>lIr?gIr:e*oIr(2,t))}JL.exports=mIr});var $L=a((E9e,ZL)=>{"use strict";var dIr=YL();ZL.exports=dIr});var KL=a((N9e,QL)=>{"use strict";var hIr=J(),qIr=Mn();function yIr(r){return r<0?qIr(r):hIr(r)}QL.exports=yIr});var y0=a((O9e,rR)=>{"use strict";var bIr=KL();rR.exports=bIr});var tR=a((A9e,eR)=>{"use strict";function wIr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}eR.exports=wIr});var nR=a((S9e,iR)=>{"use strict";var EIr=Za(),NIr=tR();function OIr(r,e,t){var i,n,s,u;return i=r-e,n=i*i,s=i-n*NIr(n),u=1-(e-i*s/(2-s)-r),EIr(u,t)}iR.exports=OIr});var fR=a((T9e,vR)=>{"use strict";var AIr=E(),aR=y0(),SIr=V(),sR=I(),TIr=nR(),_Ir=.6931471803691238,IIr=19082149292705877e-26,uR=1.4426950408889634,LIr=709.782712893384,RIr=-745.1332191019411,oR=1/(1<<28),PIr=-oR;function FIr(r){var e,t,i;return AIr(r)||r===sR?r:r===SIr?0:r>LIr?sR:r<RIr?0:r>PIr&&r<oR?1+r:(r<0?i=aR(uR*r-.5):i=aR(uR*r+.5),e=r-i*_Ir,t=i*IIr,TIr(e,t,i))}vR.exports=FIr});var sr=a((_9e,cR)=>{"use strict";var MIr=fR();cR.exports=MIr});var pR=a((I9e,lR)=>{"use strict";var BIr=V();function kIr(r){return r===0&&1/r===BIr}lR.exports=kIr});var V1=a((L9e,gR)=>{"use strict";var jIr=pR();gR.exports=jIr});var U1=a((R9e,mR)=>{"use strict";var CIr=2.5066282746310007;mR.exports=CIr});var hR=a((P9e,dR)=>{"use strict";function VIr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}dR.exports=VIr});var bR=a((F9e,yR)=>{"use strict";var UIr=U1(),qR=W(),GIr=sr(),HIr=hR(),WIr=143.01608;function xIr(r){var e,t,i;return e=1/r,e=1+e*HIr(e),t=GIr(r),r>WIr?(i=qR(r,.5*r-.25),t=i*(i/t)):t=qR(r,r-.5)/t,UIr*t*e}yR.exports=xIr});var ER=a((M9e,wR)=>{"use strict";var DIr=.5772156649015329;wR.exports=DIr});var OR=a((B9e,NR)=>{"use strict";var zIr=ER();function XIr(r,e){return e/((1+zIr*r)*r)}NR.exports=XIr});var SR=a((k9e,AR)=>{"use strict";function JIr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}AR.exports=JIr});var MR=a((j9e,FR)=>{"use strict";var YIr=E(),ZIr=Lr(),$Ir=V1(),TR=Y(),QIr=J(),KIr=Xt(),_R=I(),IR=V(),LR=kr(),RR=bR(),PR=OR(),rLr=SR();function eLr(r){var e,t,i,n;if(ZIr(r)&&r<0||r===IR||YIr(r))return NaN;if(r===0)return $Ir(r)?IR:_R;if(r>171.61447887182297)return _R;if(r<-170.5674972726612)return 0;if(t=TR(r),t>33)return r>=0?RR(r):(i=QIr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*KIr(LR*n),e*LR/(TR(n)*RR(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return PR(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return PR(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*rLr(r))}FR.exports=eLr});var Li=a((C9e,BR)=>{"use strict";var tLr=MR();BR.exports=tLr});var CR=a((V9e,jR)=>{"use strict";var iLr=E(),nLr=Br(),kR=zt(),G1=Xt(),aLr=Y(),Bn=Da(),kn=kr();function sLr(r){var e,t;return iLr(r)?NaN:nLr(r)?NaN:(t=r%2,e=aLr(t),e===0||e===1?Bn(0,t):e<.25?G1(kn*t):e<.75?(e=.5-e,Bn(kR(kn*e),t)):e<1.25?(t=Bn(1,t)-t,G1(kn*t)):e<1.75?(e-=1.5,-Bn(kR(kn*e),t)):(t-=Bn(2,t),G1(kn*t)))}jR.exports=sLr});var jn=a((U9e,VR)=>{"use strict";var uLr=CR();VR.exports=uLr});var GR=a((G9e,UR)=>{"use strict";function oLr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}UR.exports=oLr});var WR=a((H9e,HR)=>{"use strict";function vLr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}HR.exports=vLr});var DR=a((W9e,xR)=>{"use strict";function fLr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}xR.exports=fLr});var XR=a((x9e,zR)=>{"use strict";function cLr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}zR.exports=cLr});var YR=a((D9e,JR)=>{"use strict";function lLr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}JR.exports=lLr});var $R=a((z9e,ZR)=>{"use strict";function pLr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}ZR.exports=pLr});var KR=a((X9e,QR)=>{"use strict";function gLr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}QR.exports=gLr});var eP=a((J9e,rP)=>{"use strict";function mLr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}rP.exports=mLr});var iP=a((Y9e,tP)=>{"use strict";function dLr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}tP.exports=dLr});var aP=a((Z9e,nP)=>{"use strict";function hLr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}nP.exports=hLr});var oP=a(($9e,uP)=>{"use strict";var qLr=E(),yLr=Br(),bLr=Y(),Ri=P(),wLr=y0(),ELr=jn(),NLr=kr(),H1=I(),OLr=GR(),ALr=WR(),SLr=DR(),TLr=XR(),_Lr=YR(),ILr=$R(),LLr=KR(),RLr=eP(),PLr=iP(),FLr=aP(),MLr=.07721566490153287,BLr=.3224670334241136,kLr=1,jLr=-.07721566490153287,CLr=.48383612272381005,VLr=-.1475877229945939,ULr=.06462494023913339,GLr=-.07721566490153287,HLr=1,WLr=.4189385332046727,b0=1.4616321449683622,xLr=4503599627370496,DLr=0x400000000000000,zLr=8470329472543003e-37,sP=1.4616321449683622,XLr=-.12148629053584961,JLr=-3638676997039505e-33;function YLr(r){var e,t,i,n,s,u,o,f,v,c,l,p,g;if(qLr(r)||yLr(r))return r;if(r===0)return H1;if(r<0?(e=!0,r=-r):e=!1,r<zLr)return-Ri(r);if(e){if(r>=xLr||(v=ELr(r),v===0))return H1;t=Ri(NLr/bLr(v*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(g=-Ri(r),r>=b0-1+.27?(l=1-r,i=0):r>=b0-1-.27?(l=r-(sP-1),i=1):(l=r,i=2)):(g=0,r>=b0+.27?(l=2-r,i=0):r>=b0-.27?(l=r-sP,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=MLr+p*OLr(p),s=p*(BLr+p*ALr(p)),o=l*u+s,g+=o-.5*l;break;case 1:p=l*l,c=p*l,u=CLr+c*_Lr(c),s=VLr+c*ILr(c),n=ULr+c*LLr(c),o=p*u-(JLr-c*(s+l*n)),g+=XLr+o;break;case 2:u=l*(GLr+l*RLr(l)),s=HLr+l*PLr(l),g+=-.5*l+u/s;break}else if(r<8)switch(i=wLr(r),l=r-i,o=l*(jLr+l*TLr(l)),f=kLr+l*SLr(l),g=.5*l+o/f,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,g+=Ri(p)}else r<DLr?(v=Ri(r),p=1/r,l=p*p,c=WLr+p*FLr(l),g=(r-.5)*(v-1)+c):g=r*(Ri(r)-1);return e&&(g=t-g),g}uP.exports=YLr});var Cn=a((Q9e,vP)=>{"use strict";var ZLr=oP();vP.exports=ZLr});var it=a((K9e,fP)=>{"use strict";var $Lr=6.283185307179586;fP.exports=$Lr});var W1=a((rpe,cP)=>{"use strict";var QLr=14901161193847656e-24;cP.exports=QLr});var x1=a((epe,lP)=>{"use strict";var KLr=.9189385332046728;lP.exports=KLr});var pP=a((tpe,rRr)=>{rRr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var gP=a((ipe,eRr)=>{eRr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var mP=a((npe,tRr)=>{tRr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var hP=a((ape,dP)=>{"use strict";function iRr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}dP.exports=iRr});var yP=a((spe,qP)=>{"use strict";function nRr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}qP.exports=nRr});var wP=a((upe,bP)=>{"use strict";function aRr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}bP.exports=aRr});var NP=a((ope,EP)=>{"use strict";function sRr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}EP.exports=sRr});var AP=a((vpe,OP)=>{"use strict";function uRr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}OP.exports=uRr});var TP=a((fpe,SP)=>{"use strict";function oRr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}SP.exports=oRr});var PP=a((cpe,RP)=>{"use strict";var vRr=E(),fRr=Lr(),cRr=Y(),w0=sr(),lRr=J(),pRr=Li(),gRr=Cn(),_P=jn(),IP=W(),mRr=P(),dRr=I(),hRr=V(),LP=it(),qRr=W1(),yRr=x1(),bRr=pP(),wRr=gP(),ERr=mP(),NRr=hP(),ORr=yP(),ARr=wP(),SRr=NP(),TRr=AP(),_Rr=TP(),IRr=129,LRr=170,RRr=709,PRr=1.2433929443359375,FRr=.6986598968505859;function D1(r){var e,t,i,n,s,u;if(vRr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(fRr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=IRr)return-ERr[u]/(i+1)}else return(n&1)===0?wRr[n/2]:bRr[(n-3)/2];return cRr(r)<qRr?-.5-yRr*r:(t=1-r,r<0?lRr(r/2)===r/2?0:(e=r,r=t,t=e,r>LRr?(e=_P(.5*t)*2*D1(r),s=gRr(r),s-=r*mRr(LP),s>RRr?e<0?hRr:dRr:e*w0(s)):_P(.5*t)*2*IP(LP,-r)*pRr(r)*D1(r)):r<1?(e=NRr(t),e-=PRr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+ORr(t)):r<=4?(e=FRr+1/-t,e+ARr(r-2)):r<=7?(e=SRr(r-4),1+w0(e)):r<15?(e=TRr(r-7),1+w0(e)):r<36?(e=_Rr(r-15),1+w0(e)):1+IP(2,-r))}RP.exports=D1});var MP=a((lpe,FP)=>{"use strict";var MRr=PP();FP.exports=MRr});var kP=a((ppe,BP)=>{"use strict";var H=rr(),BRr=Y(),kRr=n0(),jRr=An(),CRr=GS(),VRr=rT(),URr=nT(),GRr=oT(),HRr=lT(),WRr=wT(),xRr=AT(),DRr=IT(),zRr=xt(),XRr=q1(),JRr=v0(),YRr=MT(),ZRr=CT(),$Rr=HT(),QRr=ZT(),KRr=S1(),rPr=T1(),ePr=gI(),tPr=RI(),iPr=uL(),nPr=mL(),aPr=Mn(),sPr=BL(),uPr=$L(),oPr=zt(),vPr=Xt(),fPr=U(),cPr=MP();function lPr(r){return H(r,"abs",BRr),H(r,"abs2",kRr),H(r,"acos",jRr),H(r,"acosh",CRr),H(r,"acot",VRr),H(r,"acovercos",URr),H(r,"acoversin",GRr),H(r,"acsc",HRr),H(r,"acsch",WRr),H(r,"ahavercos",xRr),H(r,"ahaversin",DRr),H(r,"asin",zRr),H(r,"asinh",XRr),H(r,"atan",JRr),H(r,"atanh",YRr),H(r,"avercos",ZRr),H(r,"aversin",$Rr),H(r,"bernoulli",QRr),H(r,"besselj0",KRr),H(r,"besselj1",rPr),H(r,"bessely0",ePr),H(r,"bessely1",tPr),H(r,"binet",iPr),H(r,"cbrt",nPr),H(r,"ceil",aPr),H(r,"ceil10",sPr),H(r,"ceil2",uPr),H(r,"cos",oPr),H(r,"sin",vPr),H(r,"sqrt",fPr),H(r,"zeta",cPr),r}BP.exports=lPr});var CP=a((gpe,jP)=>{"use strict";var pPr=rr(),gPr=EA(),mPr=eS(),dPr=kP();function hPr(r){return pPr(r,"tools",mPr({})),r=gPr(r),r=dPr(r),r}jP.exports=hPr});var UP=a((mpe,VP)=>{"use strict";function qPr(r){var e,t,i;if(e=r.length,e===0)return 0;for(t=1,i=0;i<e;i++)t*=r[i];return t}VP.exports=qPr});var z1=a((dpe,GP)=>{"use strict";var yPr=UP();GP.exports=yPr});var WP=a((hpe,HP)=>{"use strict";function bPr(r){var e,t,i,n;for(e=r.length,t=[],n=0;n<e;n++)t.push(0);for(i=1,n=e-1;n>=0;n--)t[n]=i,i*=r[n];return t}function wPr(r){var e,t,i;for(e=[],t=1,i=0;i<r.length;i++)e.push(t),t*=r[i];return e}function EPr(r,e){return e==="column-major"?wPr(r):bPr(r)}HP.exports=EPr});var DP=a((qpe,xP)=>{"use strict";function NPr(r,e){var t,i,n;for(t=r.length,i=1,n=t-1;n>=0;n--)e[n]=i,i*=r[n];return e}function OPr(r,e){var t,i;for(t=1,i=0;i<r.length;i++)e[i]=t,t*=r[i];return e}function APr(r,e,t){return e==="column-major"?OPr(r,t):NPr(r,t)}xP.exports=APr});var X1=a((ype,XP)=>{"use strict";var SPr=b(),zP=WP(),TPr=DP();SPr(zP,"assign",TPr);XP.exports=zP});var YP=a((bpe,JP)=>{"use strict";function _Pr(r,e){var t,i,n;for(i=r.length,t=0,n=0;n<i;n++)e[n]<0&&(t-=e[n]*(r[n]-1));return t}JP.exports=_Pr});var J1=a((wpe,ZP)=>{"use strict";var IPr=YP();ZP.exports=IPr});var KP=a((Epe,QP)=>{"use strict";function $P(r,e,t,i,n,s){var u,o,f,v,c;if(s>=e.length)return r.accessors[0](r.data,i);for(f=[],v=e[s],u=t[s],c=0;c<v;c++)o=$P(r,e,t,i,n,s+1),f.push(o),i+=u;return f}QP.exports=$P});var eF=a((Npe,rF)=>{"use strict";var LPr=fn(),RPr=KP();function PPr(r,e,t,i,n){var s;if(e.length===0)return[];for(s=0;s<e.length;s++)if(e[s]===0)return[];return RPr(LPr(r),e,t,i,n,0)}rF.exports=PPr});var iF=a((Ope,tF)=>{"use strict";var FPr=eF();tF.exports=FPr});var aF=a((Ape,nF)=>{"use strict";var MPr=$e(),BPr=cr(),kPr=Zr(),jPr=ii(),CPr=Xe(),VPr=ai(),UPr=Mt(),GPr=lr(),HPr=$r(),WPr=ni(),xPr=pi(),DPr=hi(),zPr={binary:MPr,float64:BPr,float32:kPr,generic:Array,int16:jPr,int32:CPr,int8:VPr,uint16:UPr,uint32:GPr,uint8:HPr,uint8c:WPr,complex64:xPr,complex128:DPr};nF.exports=zPr});var uF=a((Spe,sF)=>{"use strict";var XPr=aF();function JPr(r){return XPr[r]||null}sF.exports=JPr});var vF=a((Tpe,oF)=>{"use strict";var YPr=uF();oF.exports=YPr});var cF=a((_pe,fF)=>{"use strict";var ZPr=_(),$Pr=$e(),QPr=ZPr($Pr.allocUnsafe);fF.exports=QPr});var pF=a((Ipe,lF)=>{"use strict";var KPr=jr(),rFr=y(),eFr=$e();function tFr(r){if(!KPr(r))throw new TypeError(rFr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return eFr.allocUnsafe(r)}lF.exports=tFr});var mF=a((Lpe,gF)=>{"use strict";var iFr=jr(),nFr=y(),aFr=$e();function sFr(r){if(!iFr(r))throw new TypeError(nFr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new aFr(r)}gF.exports=sFr});var hF=a((Rpe,dF)=>{"use strict";var uFr=cF(),oFr=pF(),vFr=mF(),Y1;uFr?Y1=oFr:Y1=vFr;dF.exports=Y1});var yF=a((Ppe,qF)=>{"use strict";function fFr(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}qF.exports=fFr});var wF=a((Fpe,bF)=>{"use strict";var cFr=vF(),lFr=hF(),pFr=yF();function gFr(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}function mFr(r){return pFr(lFr(r))}function dFr(r,e){var t=cFr(r);return t?new t(e):null}function hFr(r,e){return r==="generic"?gFr(e):r==="binary"?mFr(e):dFr(r,e)}bF.exports=hFr});var NF=a((Mpe,EF)=>{"use strict";var qFr=wF();EF.exports=qFr});var SF=a((Bpe,AF)=>{"use strict";var yFr=no(),OF=yFr();function bFr(){return typeof OF.BigInt=="function"&&typeof BigInt=="function"&&typeof OF.BigInt("1")=="bigint"&&typeof BigInt("1")=="bigint"}AF.exports=bFr});var _F=a((kpe,TF)=>{"use strict";var wFr=SF();TF.exports=wFr});var IF=a((jpe,EFr)=>{EFr.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var RF=a((Cpe,LF)=>{"use strict";var NFr=IF();function OFr(r){return NFr[r]||null}LF.exports=OFr});var FF=a((Vpe,PF)=>{"use strict";var AFr=RF();PF.exports=AFr});var BF=a((Upe,MF)=>{"use strict";function SFr(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return e===0?1:e===r.length?-1:0}MF.exports=SFr});var jF=a((Gpe,kF)=>{"use strict";var TFr=BF();kF.exports=TFr});var UF=a((Hpe,VF)=>{"use strict";var CF=Y();function _Fr(r){var e,t,i,n,s,u;if(t=r.length,t===0)return 0;for(e=!0,i=!0,n=CF(r[0]),u=1;u<t;u++)if(s=CF(r[u]),e&&s<n?e=!1:i&&s>n&&(i=!1),i||e)n=s;else return 0;return i&&e?3:i?1:2}VF.exports=_Fr});var HF=a((Wpe,GF)=>{"use strict";var IFr=UF();GF.exports=IFr});var xF=a((xpe,WF)=>{"use strict";function LFr(r,e){return e&&(r===2||r===3)}WF.exports=LFr});var zF=a((Dpe,DF)=>{"use strict";function RFr(r,e){return e&&(r===1||r===3)}DF.exports=RFr});var JF=a((zpe,XF)=>{"use strict";var PFr=r2();function FFr(r,e,t,i,n){var s;return r===0||n===0?!1:(s=PFr(e,t,i),r===s[1]-s[0]+1)}XF.exports=FFr});var ZF=a((Xpe,YF)=>{"use strict";function MFr(r){return{ROW_MAJOR_CONTIGUOUS:r.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:r.COLUMN_MAJOR_CONTIGUOUS,READONLY:r.READONLY}}YF.exports=MFr});var QF=a((Jpe,$F)=>{"use strict";function BFr(r){var e,t,i,n,s,u;if(i=this._ndims,i===0)return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.get(this._offset+r):this._buffer[this._offset+r];if(this._iterationOrder===-1)return this._accessors?this._buffer.get(this.offset-r):this._buffer[this._offset-r]}if(t=this._shape,e=this._strides,n=this._offset,this._order==="column-major"){for(u=0;u<i;u++)s=r%t[u],r-=s,r/=t[u],n+=s*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}for(u=i-1;u>=0;u--)s=r%t[u],r-=s,r/=t[u],n+=s*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}$F.exports=BFr});var rM=a((Ype,KF)=>{"use strict";function kFr(r,e){var t,i,n,s,u,o;if(n=this._ndims,n===0)return this._accessors?this._buffer.set(r,this._offset):this._buffer[this._offset]=r,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.set(e,this._offset+r):this._buffer[this._offset+r]=e,this;if(this._iterationOrder===-1)return this._accessors?this._buffer.set(e,this._offset-r):this._buffer[this._offset-r]=e,this}if(i=this._shape,t=this._strides,s=this._offset,this._order==="column-major"){for(o=0;o<n;o++)u=r%i[o],r-=u,r/=i[o],s+=u*t[o];return this._accessors?this._buffer.set(e,s):this._buffer[s]=e,this}for(o=n-1;o>=0;o--)u=r%i[o],r-=u,r/=i[o],s+=u*t[o];return this._accessors?this._buffer.set(e,s):this._buffer[s]=e,this}KF.exports=kFr});var tM=a((Zpe,eM)=>{"use strict";function jFr(){var r,e;for(r=this._offset,e=0;e<arguments.length-1;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],r):this._buffer[r]=arguments[e],this}eM.exports=jFr});var nM=a(($pe,iM)=>{"use strict";function CFr(){var r,e;for(r=this._offset,e=0;e<arguments.length;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(r):this._buffer[r]}iM.exports=CFr});var sM=a((Qpe,aM)=>{"use strict";var VFr=Qr(),UFr=Kr();function GFr(){var r,e,t,i;for(e=this._length,r={},r.type="ndarray",r.dtype=this.dtype,r.flags={READONLY:this._flags.READONLY},r.order=this._order,r.shape=this._shape.slice(),r.strides=this._strides.slice(),i=0;i<e;i++)r.strides[i]<0&&(r.strides[i]*=-1);if(r.data=[],r.dtype==="complex64"||r.dtype==="complex128")for(i=0;i<e;i++)t=this.iget(i),r.data.push(VFr(t),UFr(t));else for(i=0;i<e;i++)r.data.push(this.iget(i));return r}aM.exports=GFr});var vM=a((Kpe,oM)=>{"use strict";var HFr=K().isPrimitive,WFr=y(),uM=/[-\/\\^$*+?.()|[\]{}]/g;function xFr(r){var e,t,i;if(!HFr(r))throw new TypeError(WFr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(uM,"\\$&"):(t=r.substring(1,i),t=t.replace(uM,"\\$&"),r=r[0]+t+r.substring(i),r)}oM.exports=xFr});var cM=a((rge,fM)=>{"use strict";var DFr=vM();fM.exports=DFr});var pM=a((ege,lM)=>{"use strict";var zFr=RegExp.prototype.exec;lM.exports=zFr});var mM=a((tge,gM)=>{"use strict";var XFr=pM();function JFr(r){try{return XFr.call(r),!0}catch{return!1}}gM.exports=JFr});var hM=a((ige,dM)=>{"use strict";var YFr=ri(),ZFr=er(),$Fr=mM(),QFr=YFr();function KFr(r){return typeof r=="object"?r instanceof RegExp?!0:QFr?$Fr(r):ZFr(r)==="[object RegExp]":!1}dM.exports=KFr});var yM=a((nge,qM)=>{"use strict";var rMr=hM();qM.exports=rMr});var wM=a((age,bM)=>{"use strict";function eMr(r,e,t){return r.replace(e,t)}bM.exports=eMr});var nt=a((sge,EM)=>{"use strict";var tMr=wM();EM.exports=tMr});var OM=a((uge,NM)=>{"use strict";var iMr=cM(),nMr=_(),Z1=K().isPrimitive,aMr=yM(),$1=y(),sMr=nt();function uMr(r,e,t){if(!Z1(r))throw new TypeError($1("invalid argument. First argument must be a string. Value: `%s`.",r));if(Z1(e))e=new RegExp(iMr(e),"g");else if(!aMr(e))throw new TypeError($1("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!Z1(t)&&!nMr(t))throw new TypeError($1("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return sMr(r,e,t)}NM.exports=uMr});var SM=a((oge,AM)=>{"use strict";var oMr=OM();AM.exports=oMr});var _M=a((vge,TM)=>{"use strict";var vMr=SM(),Q1=Qr(),K1=Kr(),fMr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};function cMr(){var r,e,t,i,n,s,u;if(e=this._shape.length,n=this._dtype,i="ndarray( '"+n+"', ",r="",this._length<=100)if(n==="complex64"||n==="complex128")for(u=0;u<this._length;u++)s=this.iget(u),r+=Q1(s)+", "+K1(s),u<this._length-1&&(r+=", ");else for(u=0;u<this._length;u++)r+=this.iget(u),u<this._length-1&&(r+=", ");else{if(n==="complex64"||n==="complex128")for(u=0;u<3;u++)s=this.iget(u),r+=Q1(s)+", "+K1(s),u<2&&(r+=", ");else for(u=0;u<3;u++)r+=this.iget(u),u<2&&(r+=", ");if(r+=", ..., ",n==="complex64"||n==="complex128")for(u=2;u>=0;u--)s=this.iget(this._length-1-u),r+=Q1(s)+", "+K1(s),u>0&&(r+=", ");else for(u=2;u>=0;u--)r+=this.iget(this._length-1-u),u>0&&(r+=", ")}if(t=fMr[this.dtype],i+=vMr(t,"{{data}}",r),i+=", ",e===0?i+="[]":i+="[ "+this._shape.join(", ")+" ]",i+=", ",i+="[ ",e===0)i+="0";else for(u=0;u<e;u++)this._strides[u]<0?i+=-this._strides[u]:i+=this._strides[u],u<e-1&&(i+=", ");return i+=" ]",i+=", ",i+="0",i+=", ",i+="'"+this._order+"'",i+=" )",i}TM.exports=cMr});var LM=a((fge,IM)=>{"use strict";var lMr=typeof ArrayBuffer=="function"?ArrayBuffer:null;IM.exports=lMr});var PM=a((cge,RM)=>{"use strict";var pMr=ma(),gMr=cr(),E0=LM();function mMr(){var r,e,t;if(typeof E0!="function")return!1;try{t=new E0(16),r=pMr(t)&&typeof E0.isView=="function",r&&(e=new gMr(t),e[0]=-3.14,e[1]=NaN,r=r&&E0.isView(e)&&t.byteLength===16&&e[0]===-3.14&&e[1]!==e[1])}catch{r=!1}return r}RM.exports=mMr});var MM=a((lge,FM)=>{"use strict";var dMr=PM();FM.exports=dMr});var kM=a((pge,BM)=>{"use strict";var hMr=typeof ArrayBuffer=="function"?ArrayBuffer:void 0;BM.exports=hMr});var CM=a((gge,jM)=>{"use strict";function qMr(){throw new Error("not implemented")}jM.exports=qMr});var N0=a((mge,VM)=>{"use strict";var yMr=MM(),bMr=kM(),wMr=CM(),r3;yMr()?r3=bMr:r3=wMr;VM.exports=r3});var GM=a((dge,UM)=>{"use strict";var EMr=er(),NMr=typeof DataView=="function";function OMr(r){return NMr&&r instanceof DataView||EMr(r)==="[object DataView]"}UM.exports=OMr});var WM=a((hge,HM)=>{"use strict";var AMr=GM();HM.exports=AMr});var DM=a((qge,xM)=>{"use strict";var SMr=typeof DataView=="function"?DataView:null;xM.exports=SMr});var JM=a((yge,XM)=>{"use strict";var TMr=WM(),_Mr=N0(),zM=DM();function IMr(){var r,e,t;if(typeof zM!="function")return!1;try{t=new _Mr(24),e=new zM(t,8),r=TMr(e)&&typeof e.getFloat64=="function"&&typeof e.setFloat64=="function",r&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),r=r&&e.buffer===t&&e.byteLength===16&&e.byteOffset===8&&e.getFloat64(0)===-3.14&&e.getFloat64(8)!==e.getFloat64(8))}catch{r=!1}return r}XM.exports=IMr});var ZM=a((bge,YM)=>{"use strict";var LMr=JM();YM.exports=LMr});var QM=a((wge,$M)=>{"use strict";var RMr=typeof DataView=="function"?DataView:void 0;$M.exports=RMr});var rB=a((Ege,KM)=>{"use strict";function PMr(){throw new Error("not implemented")}KM.exports=PMr});var Vn=a((Nge,eB)=>{"use strict";var FMr=ZM(),MMr=QM(),BMr=rB(),e3;FMr()?e3=MMr:e3=BMr;eB.exports=e3});var iB=a((Oge,tB)=>{"use strict";var kMr=typeof BigInt=="function"?BigInt:void 0;tB.exports=kMr});var aB=a((Age,nB)=>{"use strict";var jMr=iB();nB.exports=jMr});var sB=a((Sge,CMr)=>{CMr.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var vB=a((Tge,oB)=>{"use strict";var uB=sB();function VMr(){var r;return arguments.length===0?uB.all.slice():(r=uB[arguments[0]],r?r.slice():[])}oB.exports=VMr});var cB=a((_ge,fB)=>{"use strict";function UMr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}fB.exports=UMr});var pB=a((Ige,lB)=>{"use strict";var GMr=rr(),HMr=Ei();function WMr(r,e){var t,i,n;for(t=HMr(e),n=0;n<t.length;n++)i=t[n],GMr(r,i,e[i]);return r}lB.exports=WMr});var i3=a((Lge,mB)=>{"use strict";var xMr=b(),t3=vB(),gB=cB(),DMr=pB();xMr(t3,"enum",gB);DMr(t3,gB());mB.exports=t3});var dB=a((Rge,zMr)=>{zMr.exports=["row-major","column-major"]});var qB=a((Pge,hB)=>{"use strict";var XMr=dB();function JMr(){return XMr.slice()}hB.exports=JMr});var bB=a((Fge,yB)=>{"use strict";function YMr(){return{"row-major":1,"column-major":2}}yB.exports=YMr});var n3=a((Mge,EB)=>{"use strict";var ZMr=b(),wB=qB(),$Mr=bB();ZMr(wB,"enum",$Mr);EB.exports=wB});var NB=a((Bge,QMr)=>{QMr.exports=["throw","clamp","wrap"]});var AB=a((kge,OB)=>{"use strict";var KMr=NB();function rBr(){return KMr.slice()}OB.exports=rBr});var TB=a((jge,SB)=>{"use strict";function eBr(){return{throw:1,clamp:2,wrap:3}}SB.exports=eBr});var a3=a((Cge,IB)=>{"use strict";var tBr=b(),_B=AB(),iBr=TB();tBr(_B,"enum",iBr);IB.exports=_B});var PB=a((Vge,RB)=>{"use strict";var at=Dr(),nBr=N0(),aBr=Vn(),Un=aB(),sBr=i3().enum,uBr=n3().enum,oBr=a3().enum,vBr=sBr(),fBr=uBr(),LB=oBr();function cBr(){var r,e,t,i,n,s,u,o,f,v,c,l,p,g;if(f=this._mode||"throw",u=this._submode||[f],l=this._ndims,p=u.length,t=33+l*16+p,o=this.__meta_dataview__,o&&o.byteLength===t)return o;for(o=new aBr(new nBr(t)),n=this._shape,s=this._strides,i=this._dtype,r=this._bytesPerElement,v=0,o.setInt8(v,at?1:0),v+=1,o.setInt16(v,vBr[i],at),v+=2,o.setBigInt64(v,Un(l),at),c=l*8,v+=8,g=0;g<l;g++)o.setBigInt64(v,Un(n[g]),at),o.setBigInt64(v+c,Un(s[g]*r),at),v+=8;for(v+=c,o.setBigInt64(v,Un(this._offset*r),at),v+=8,o.setInt8(v,fBr[this._order]),v+=1,o.setInt8(v,LB[f]),v+=1,o.setBigInt64(v,Un(p),at),v+=8,g=0;g<p;g++)o.setInt8(v,LB[u[g]]),v+=1;return e=0,e|=this._flags.READONLY?4:0,o.setInt32(v,e,at),this.__meta_dataview__=o,o}RB.exports=cBr});var MB=a((Uge,FB)=>{"use strict";var Gn=Dr(),lBr=$r(),pBr=Vn(),gBr=J(),mBr=4294967295>>>0,dBr=4294967296;function hBr(r){var e,t,i,n;return e=new lBr(8),r===0||(n=(r&mBr)>>>0,i=gBr(r/dBr),t=new pBr(e.buffer),Gn?(t.setUint32(0,n,Gn),t.setUint32(4,i,Gn)):(t.setUint32(0,i,Gn),t.setUint32(4,n,Gn))),e}FB.exports=hBr});var kB=a((Gge,BB)=>{"use strict";var Hn=Dr(),qBr=$r(),yBr=Vn(),bBr=J(),wBr=4294967295>>>0,EBr=4294967296,A0=new qBr(8),O0=new yBr(A0.buffer);function NBr(r,e,t,i){var n,s,u;if(r===0){for(u=0;u<A0.length;u++)e[i]=0,i+=t;return e}for(s=(r&wBr)>>>0,n=bBr(r/EBr),Hn?(O0.setUint32(0,s,Hn),O0.setUint32(4,n,Hn)):(O0.setUint32(0,n,Hn),O0.setUint32(4,s,Hn)),u=0;u<A0.length;u++)e[i]=A0[u],i+=t;return e}BB.exports=NBr});var VB=a((Hge,CB)=>{"use strict";var OBr=b(),jB=MB(),ABr=kB();OBr(jB,"assign",ABr);CB.exports=jB});var HB=a((Wge,GB)=>{"use strict";var s3=Dr(),SBr=N0(),TBr=Vn(),_Br=$r(),IBr=i3().enum,LBr=n3().enum,RBr=a3().enum,Wn=VB().assign,PBr=IBr(),FBr=LBr(),UB=RBr();function MBr(){var r,e,t,i,n,s,u,o,f,v,c,l,p,g,h;if(v=this._mode||"throw",o=this._submode||[v],p=this._ndims,g=o.length,i=33+p*16+g,f=this.__meta_dataview__,f&&f.byteLength===i)return f;for(f=new TBr(new SBr(i)),e=new _Br(f.buffer),s=this._shape,u=this._strides,n=this._dtype,r=this._bytesPerElement,c=0,f.setInt8(c,s3?1:0),c+=1,f.setInt16(c,PBr[n],s3),c+=2,Wn(p,e,1,c),l=p*8,c+=8,h=0;h<p;h++)Wn(s[h],e,1,c),Wn(u[h]*r,e,1,c+l),c+=8;for(c+=l,Wn(this._offset*r,e,1,c),c+=8,f.setInt8(c,FBr[this._order]),c+=1,f.setInt8(c,UB[v]),c+=1,Wn(g,e,1,c),c+=8,h=0;h<g;h++)f.setInt8(c,UB[o[h]]),c+=1;return t=0,t|=this._flags.READONLY?4:0,f.setInt32(c,t,s3),this.__meta_dataview__=f,f}GB.exports=MBr});var xB=a((xge,WB)=>{"use strict";var BBr=_F(),st=b(),zr=R(),kBr=FF(),jBr=jF(),CBr=HF(),VBr=eo(),UBr=xF(),GBr=zF(),HBr=JF(),WBr=ZF(),xBr=QF(),DBr=rM(),zBr=tM(),XBr=nM(),JBr=sM(),YBr=_M(),ZBr=PB(),$Br=HB();function nr(r,e,t,i,n,s){var u,o,f,v,c;if(!(this instanceof nr))return new nr(r,e,t,i,n,s);for(v=1,c=0;c<t.length;c++)v*=t[c];return e.BYTES_PER_ELEMENT?o=e.BYTES_PER_ELEMENT*v:o=null,this._byteLength=o,this._bytesPerElement=kBr(r),this._buffer=e,this._dtype=r,this._length=v,this._ndims=t.length,this._offset=n,this._order=s,this._shape=t,this._strides=i,this._accessors=VBr(e.get&&e.set),this._iterationOrder=jBr(i),u=HBr(v,t,i,n,this._iterationOrder),f=CBr(i),this._flags={ROW_MAJOR_CONTIGUOUS:GBr(f,u),COLUMN_MAJOR_CONTIGUOUS:UBr(f,u),READONLY:!1},this.__meta_dataview__=null,this}st(nr,"name","ndarray");zr(nr.prototype,"byteLength",function(){return this._byteLength});zr(nr.prototype,"BYTES_PER_ELEMENT",function(){return this._bytesPerElement});zr(nr.prototype,"data",function(){return this._buffer});zr(nr.prototype,"dtype",function(){return this._dtype});zr(nr.prototype,"flags",function(){return WBr(this._flags)});zr(nr.prototype,"length",function(){return this._length});zr(nr.prototype,"ndims",function(){return this._ndims});zr(nr.prototype,"offset",function(){return this._offset});zr(nr.prototype,"order",function(){return this._order});zr(nr.prototype,"shape",function(){return this._shape.slice()});zr(nr.prototype,"strides",function(){return this._strides.slice()});st(nr.prototype,"get",XBr);st(nr.prototype,"iget",xBr);st(nr.prototype,"set",zBr);st(nr.prototype,"iset",DBr);st(nr.prototype,"toString",YBr);st(nr.prototype,"toJSON",JBr);st(nr.prototype,"__array_meta_dataview__",BBr()?ZBr:$Br);WB.exports=nr});var zB=a((Dge,DB)=>{"use strict";var QBr=xB();DB.exports=QBr});var JB=a((zge,XB)=>{"use strict";var KBr=X1(),rkr=J1(),ekr=NF(),tkr=y(),ikr=zB(),nkr=z1();function akr(r,e,t){var i,n,s,u;if(i=e.length,i>0?(s=nkr(e),u=KBr(e,t)):(s=1,u=[0]),n=ekr(r,s),n===null)throw new TypeError(tkr("invalid argument. First argument must be a recognized data type. Value: `%s`.",r));return new ikr(r,n,e,u,rkr(e,u),t)}XB.exports=akr});var ZB=a((Xge,YB)=>{"use strict";var skr=JB();YB.exports=skr});var QB=a((Jge,$B)=>{"use strict";var xn=rr(),ukr=z1(),okr=X1(),vkr=J1(),fkr=iF(),ckr=ZB();function lkr(r){return xn(r,"numel",ukr),xn(r,"shape2strides",okr),xn(r,"strides2offset",vkr),xn(r,"toArray",fkr),xn(r,"zeros",ckr),r}$B.exports=lkr});var rk=a((Yge,KB)=>{"use strict";var pkr=De();function gkr(r,e,t,i){pkr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}KB.exports=gkr});var M=a((Zge,ek)=>{"use strict";var mkr=rk();ek.exports=mkr});var ik=a(($ge,tk)=>{"use strict";function dkr(r){return e;function e(){return r}}tk.exports=dkr});var T=a((Qge,nk)=>{"use strict";var hkr=ik();nk.exports=hkr});var sk=a((Kge,ak)=>{"use strict";var qkr=I();function ykr(r){return r===0&&1/r===qkr}ak.exports=ykr});var ut=a((rme,uk)=>{"use strict";var bkr=sk();uk.exports=bkr});var fk=a((eme,vk)=>{"use strict";var wkr=ut(),ok=E(),u3=I();function Ekr(r,e){return ok(r)||ok(e)?NaN:r===u3||e===u3?u3:r===e&&r===0?wkr(r)?r:e:r>e?r:e}vk.exports=Ekr});var o3=a((tme,ck)=>{"use strict";var Nkr=fk();ck.exports=Nkr});var gk=a((ime,pk)=>{"use strict";var lk=65535;function Okr(r,e){var t,i,n,s,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,s=e>>>16>>>0,u=(r&lk)>>>0,o=(e&lk)>>>0,t=u*o>>>0,i=n*o+u*s<<16>>>0,t+i>>>0}pk.exports=Okr});var dk=a((nme,mk)=>{"use strict";var Akr=gk();mk.exports=Akr});var v3=a((ame,hk)=>{"use strict";function Skr(r,e,t,i,n,s,u){var o,f,v,c,l,p,g;for(o=e.data,f=n.data,c=e.accessors[0],v=n.accessors[1],l=i,p=u,g=0;g<r;g++)v(f,p,c(o,l)),l+=t,p+=s;return e}hk.exports=Skr});var bk=a((sme,yk)=>{"use strict";var qk=fn(),Tkr=v3(),f3=8;function _kr(r,e,t,i,n){var s,u,o,f,v,c;if(r<=0)return i;if(o=qk(e),f=qk(i),o.accessorProtocol||f.accessorProtocol)return t<0?s=(1-r)*t:s=0,n<0?u=(1-r)*n:u=0,Tkr(r,o,t,s,f,n,u),f.data;if(t===1&&n===1){if(v=r%f3,v>0)for(c=0;c<v;c++)i[c]=e[c];if(r<f3)return i;for(c=v;c<r;c+=f3)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?s=(1-r)*t:s=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[s],s+=t,u+=n;return i}yk.exports=_kr});var Nk=a((ume,Ek)=>{"use strict";var wk=fn(),Ikr=v3(),Dn=8;function Lkr(r,e,t,i,n,s,u){var o,f,v,c,l,p;if(r<=0)return n;if(v=wk(e),c=wk(n),v.accessorProtocol||c.accessorProtocol)return Ikr(r,v,t,i,c,s,u),c.data;if(o=i,f=u,t===1&&s===1){if(l=r%Dn,l>0)for(p=0;p<l;p++)n[f]=e[o],o+=t,f+=s;if(r<Dn)return n;for(p=l;p<r;p+=Dn)n[f]=e[o],n[f+1]=e[o+1],n[f+2]=e[o+2],n[f+3]=e[o+3],n[f+4]=e[o+4],n[f+5]=e[o+5],n[f+6]=e[o+6],n[f+7]=e[o+7],o+=Dn,f+=Dn;return n}for(p=0;p<r;p++)n[f]=e[o],o+=t,f+=s;return n}Ek.exports=Lkr});var ot=a((ome,Ak)=>{"use strict";var Rkr=b(),Ok=bk(),Pkr=Nk();Rkr(Ok,"ndarray",Pkr);Ak.exports=Ok});var Tk=a((vme,Sk)=>{"use strict";function Fkr(){}Sk.exports=Fkr});var Ik=a((fme,_k)=>{"use strict";var Mkr=Tk();function Bkr(){return Mkr.name==="foo"}_k.exports=Bkr});var Rk=a((cme,Lk)=>{"use strict";var kkr=Ik();Lk.exports=kkr});var Fk=a((lme,Pk)=>{"use strict";var jkr=_(),Ckr=Rk(),Vkr=y(),Ukr=so().REGEXP,Gkr=Ckr();function Hkr(r){if(jkr(r)===!1)throw new TypeError(Vkr("invalid argument. Must provide a function. Value: `%s`.",r));return Gkr?r.name:Ukr.exec(r.toString())[1]}Pk.exports=Hkr});var Bk=a((pme,Mk)=>{"use strict";var Wkr=Fk();Mk.exports=Wkr});var jk=a((gme,kk)=>{"use strict";var xkr=ai(),Dkr=$r(),zkr=ni(),Xkr=ii(),Jkr=Mt(),Ykr=Xe(),Zkr=lr(),$kr=Zr(),Qkr=cr(),Kkr=[Qkr,$kr,Ykr,Zkr,Xkr,Jkr,xkr,Dkr,zkr];kk.exports=Kkr});var Ck=a((mme,rjr)=>{rjr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var xk=a((dme,Wk)=>{"use strict";var ejr=ze(),tjr=Bk(),Gk=Ut(),ijr=po(),njr=cr(),Vk=jk(),Uk=Ck(),S0=ijr()?Gk(njr):Hk;S0=tjr(S0)==="TypedArray"?S0:Hk;function Hk(){}function ajr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof S0)return!0;for(t=0;t<Vk.length;t++)if(r instanceof Vk[t])return!0;for(;r;){for(e=ejr(r),t=0;t<Uk.length;t++)if(Uk[t]===e)return!0;r=Gk(r)}return!1}Wk.exports=ajr});var zk=a((hme,Dk)=>{"use strict";var sjr=xk();Dk.exports=sjr});var Jk=a((qme,Xk)=>{"use strict";var ujr=pi(),ojr=hi(),vjr=[ojr,ujr];Xk.exports=vjr});var Yk=a((yme,fjr)=>{fjr.exports=["Complex64Array","Complex128Array"]});var Kk=a((bme,Qk)=>{"use strict";var cjr=ze(),ljr=Ut(),Zk=Jk(),$k=Yk();function pjr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<Zk.length;t++)if(r instanceof Zk[t])return!0;for(;r;){for(e=cjr(r),t=0;t<$k.length;t++)if($k[t]===e)return!0;r=ljr(r)}return!1}Qk.exports=pjr});var ej=a((wme,rj)=>{"use strict";var gjr=Kk();rj.exports=gjr});var ij=a((Eme,tj)=>{"use strict";var mjr=y();function djr(r,e){if(typeof e!="function")throw new TypeError(mjr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}tj.exports=djr});var aj=a((Nme,nj)=>{"use strict";var hjr=ij();nj.exports=hjr});var uj=a((Ome,sj)=>{"use strict";var qjr=ai(),yjr=$r(),bjr=ni(),wjr=ii(),Ejr=Mt(),Njr=Xe(),Ojr=lr(),Ajr=Zr(),Sjr=cr(),Tjr=pi(),_jr=hi(),Ijr=[[Sjr,"Float64Array"],[Ajr,"Float32Array"],[Njr,"Int32Array"],[Ojr,"Uint32Array"],[wjr,"Int16Array"],[Ejr,"Uint16Array"],[qjr,"Int8Array"],[yjr,"Uint8Array"],[bjr,"Uint8ClampedArray"],[Tjr,"Complex64Array"],[_jr,"Complex128Array"]];sj.exports=Ijr});var vj=a((Ame,oj)=>{"use strict";var Ljr=aj(),Rjr=ze(),Pjr=Ut(),Pi=uj();function Fjr(r){var e,t;for(t=0;t<Pi.length;t++)if(Ljr(r,Pi[t][0]))return Pi[t][1];for(;r;){for(e=Rjr(r),t=0;t<Pi.length;t++)if(e===Pi[t][1])return Pi[t][1];r=Pjr(r)}}oj.exports=Fjr});var cj=a((Sme,fj)=>{"use strict";var Mjr=zk(),Bjr=ej(),kjr=oi(),jjr=vi(),Cjr=y(),Vjr=vj();function Ujr(r){var e,t,i;if(Mjr(r))e=r;else if(Bjr(r))r.BYTES_PER_ELEMENT===8?e=kjr(r,0):e=jjr(r,0);else throw new TypeError(Cjr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:Vjr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}fj.exports=Ujr});var B=a((Tme,lj)=>{"use strict";var Gjr=cj();lj.exports=Gjr});var c3=a((_me,pj)=>{"use strict";var Hjr=ei(),Wjr=J(),xjr=Hjr-1;function Djr(){var r=Wjr(1+xjr*Math.random());return r>>>0}pj.exports=Djr});var y3=a((Ime,Oj)=>{"use strict";var de=b(),vt=R(),gj=M(),l3=A(),zjr=L(),Xjr=Wr(),mj=ve(),Jjr=gr().isPrimitive,dj=re().isPrimitive,wj=Ii(),Ej=ei(),yr=lr(),Yjr=o3(),q3=dk(),Fi=ot(),Zjr=B(),wr=y(),hj=c3(),ur=624,p3=397,qj=Ej>>>0,$jr=19650218>>>0,g3=2147483648>>>0,m3=2147483647>>>0,Qjr=1812433253>>>0,Kjr=1664525>>>0,rCr=1566083941>>>0,eCr=2636928640>>>0,tCr=4022730752>>>0,iCr=2567483615>>>0,d3=[0>>>0,iCr>>>0],Nj=1/(wj+1),nCr=67108864>>>0,aCr=2147483648>>>0,h3=1>>>0,sCr=wj*Nj,T0=1,_0=3,ft=2,ct=ur+3,br=ur+5,zn=ur+6;function yj(r,e){var t;return e?t="option":t="argument",r.length<zn+1?new RangeError(wr("invalid %s. `state` array has insufficient length.",t)):r[0]!==T0?new RangeError(wr("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,T0,r[0])):r[1]!==_0?new RangeError(wr("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,_0,r[1])):r[ft]!==ur?new RangeError(wr("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ur,r[ft])):r[ct]!==1?new RangeError(wr("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[ct])):r[br]!==r.length-zn?new RangeError(wr("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-zn,r[br])):null}function bj(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=q3(t,Qjr)+i>>>0;return r}function uCr(r,e,t,i){var n,s,u,o;for(s=1,u=0,o=Yjr(e,i);o>0;o--)n=r[s-1]>>>0,n=(n^n>>>30)>>>0,n=q3(n,Kjr)>>>0,r[s]=(r[s]>>>0^n)+t[u]+u>>>0,s+=1,u+=1,s>=e&&(r[0]=r[e-1],s=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[s-1]>>>0,n=(n^n>>>30)>>>0,n=q3(n,rCr)>>>0,r[s]=(r[s]>>>0^n)-s>>>0,s+=1,s>=e&&(r[0]=r[e-1],s=1);return r[0]=aCr,r}function oCr(r){var e,t,i,n;for(n=ur-p3,t=0;t<n;t++)e=r[t]&g3|r[t+1]&m3,r[t]=r[t+p3]^e>>>1^d3[e&h3];for(i=ur-1;t<i;t++)e=r[t]&g3|r[t+1]&m3,r[t]=r[t-n]^e>>>1^d3[e&h3];return e=r[i]&g3|r[0]&m3,r[i]=r[p3-1]^e>>>1^d3[e&h3],r}function vCr(r){var e,t,i,n,s,u;if(i={},arguments.length){if(!zjr(r))throw new TypeError(wr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(l3(r,"copy")&&(i.copy=r.copy,!Jjr(r.copy)))throw new TypeError(wr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(l3(r,"state")){if(t=r.state,i.state=!0,!mj(t))throw new TypeError(wr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=yj(t,!0),u)throw u;i.copy===!1?e=t:(e=new yr(t.length),Fi(t.length,t,1,e,1)),t=new yr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,ur),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,t[br])}if(n===void 0)if(l3(r,"seed"))if(n=r.seed,i.seed=!0,dj(n)){if(n>qj)throw new RangeError(wr("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(Xjr(n)===!1||n.length<1)throw new TypeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!dj(n))throw new TypeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>qj)throw new RangeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else s=n.length,e=new yr(zn+s),e[0]=T0,e[1]=_0,e[ft]=ur,e[ct]=1,e[ct+1]=ur,e[br]=s,Fi.ndarray(s,n,1,0,e,1,br+1),t=new yr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,ur),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,s),t=bj(t,ur,$jr),t=uCr(t,ur,n,s)}else n=hj()>>>0}else n=hj()>>>0;return t===void 0&&(e=new yr(zn+1),e[0]=T0,e[1]=_0,e[ft]=ur,e[ct]=1,e[ct+1]=ur,e[br]=1,e[br+1]=n,t=new yr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,ur),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,1),t=bj(t,ur,n)),de(h,"NAME","mt19937"),vt(h,"seed",o),vt(h,"seedLength",f),gj(h,"state",l,p),vt(h,"stateLength",v),vt(h,"byteLength",c),de(h,"toJSON",g),de(h,"MIN",0),de(h,"MAX",Ej),de(h,"normalized",d),de(d,"NAME",h.NAME),vt(d,"seed",o),vt(d,"seedLength",f),gj(d,"state",l,p),vt(d,"stateLength",v),vt(d,"byteLength",c),de(d,"toJSON",g),de(d,"MIN",0),de(d,"MAX",sCr),h;function o(){var m=e[br];return Fi(m,n,1,new yr(m),1)}function f(){return e[br]}function v(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return Fi(m,e,1,new yr(m),1)}function p(m){var q;if(!mj(m))throw new TypeError(wr("invalid argument. Must provide a Uint32Array. Value: `%s`.",m));if(q=yj(m,!1),q)throw q;i.copy===!1?i.state&&m.length===e.length?Fi(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new yr(m.length)),Fi(m.length,m,1,e,1)),t=new yr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,ur),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,e[br])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=Zjr(e),m.params=[],m}function h(){var m,q;return q=e[ct+1],q>=ur&&(t=oCr(t),q=0),m=t[q],e[ct+1]=q+1,m^=m>>>11,m^=m<<7&eCr,m^=m<<15&tCr,m^=m>>>18,m>>>0}function d(){var m=h()>>>5,q=h()>>>6;return(m*nCr+q)*Nj}}Oj.exports=vCr});var Sj=a((Lme,Aj)=>{"use strict";var fCr=y3(),cCr=c3(),lCr=fCr({seed:cCr()});Aj.exports=lCr});var X=a((Rme,_j)=>{"use strict";var pCr=b(),Tj=Sj(),gCr=y3();pCr(Tj,"factory",gCr);_j.exports=Tj});var Pj=a((Pme,Rj)=>{"use strict";var Ij=j().isPrimitive,b3=y(),Lj=vr();function mCr(r,e){return!Ij(r)||Lj(r)?new TypeError(b3("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Ij(e)||Lj(e)?new TypeError(b3("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(b3("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}Rj.exports=mCr});var Mj=a((Fme,Fj)=>{"use strict";var dCr=W(),hCr=Xt(),qCr=o0();function yCr(r,e,t){return e+dCr(hCr(qCr*r()),2)*(t-e)}Fj.exports=yCr});var w3=a((Mme,Hj)=>{"use strict";var he=b(),I0=R(),Bj=M(),kj=L(),jj=_(),Cj=A(),Vj=T(),bCr=C(),L0=X().factory,Uj=E(),wCr=B(),R0=y(),ECr=Pj(),Gj=Mj();function NCr(){var r,e,t,i,n,s;if(arguments.length===0)e=L0();else if(arguments.length===1){if(r=arguments[0],!kj(r))throw new TypeError(R0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Cj(r,"prng")){if(!jj(r.prng))throw new TypeError(R0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=L0(r)}else{if(n=arguments[0],s=arguments[1],i=ECr(n,s),i)throw i;if(arguments.length>2){if(r=arguments[2],!kj(r))throw new TypeError(R0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Cj(r,"prng")){if(!jj(r.prng))throw new TypeError(R0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=L0(r)}else e=L0()}return n===void 0?t=h:t=g,he(t,"NAME","arcsine"),r&&r.prng?(he(t,"seed",null),he(t,"seedLength",null),Bj(t,"state",Vj(null),bCr),he(t,"stateLength",null),he(t,"byteLength",null),he(t,"toJSON",Vj(null)),he(t,"PRNG",e)):(I0(t,"seed",u),I0(t,"seedLength",o),Bj(t,"state",c,l),I0(t,"stateLength",f),I0(t,"byteLength",v),he(t,"toJSON",p),he(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=wCr(e.state),n===void 0?d.params=[]:d.params=[n,s],d}function g(){return Gj(e,n,s)}function h(d,m){return Uj(d)||Uj(m)||d>=m?NaN:Gj(e,d,m)}}Hj.exports=NCr});var xj=a((Bme,Wj)=>{"use strict";var OCr=w3(),ACr=OCr();Wj.exports=ACr});var Xj=a((kme,zj)=>{"use strict";var SCr=b(),Dj=xj(),TCr=w3();SCr(Dj,"factory",TCr);zj.exports=Dj});var E3=a((jme,Kj)=>{"use strict";var qe=b(),P0=R(),Jj=M(),Yj=L(),_Cr=ln().isPrimitive,Zj=_(),$j=A(),Qj=T(),ICr=C(),F0=X().factory,LCr=E(),RCr=B(),M0=y();function PCr(){var r,e,t,i;if(arguments.length===0)e=F0();else if(arguments.length===1&&Yj(arguments[0]))if(r=arguments[0],$j(r,"prng")){if(!Zj(r.prng))throw new TypeError(M0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=F0(r);else{if(i=arguments[0],!_Cr(i))throw new TypeError(M0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!Yj(r))throw new TypeError(M0("invalid argument. Options argument must be an object. Value: `%s`.",r));if($j(r,"prng")){if(!Zj(r.prng))throw new TypeError(M0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=F0(r)}else e=F0()}return i===void 0?t=p:t=l,qe(t,"NAME","bernoulli"),r&&r.prng?(qe(t,"seed",null),qe(t,"seedLength",null),Jj(t,"state",Qj(null),ICr),qe(t,"stateLength",null),qe(t,"byteLength",null),qe(t,"toJSON",Qj(null)),qe(t,"PRNG",e)):(P0(t,"seed",n),P0(t,"seedLength",s),Jj(t,"state",f,v),P0(t,"stateLength",u),P0(t,"byteLength",o),qe(t,"toJSON",c),qe(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function s(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=RCr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return e()<=i?1:0}function p(g){return LCr(g)||g<0||g>1?NaN:e()<=g?1:0}}Kj.exports=PCr});var eC=a((Cme,rC)=>{"use strict";var FCr=E3(),MCr=FCr();rC.exports=MCr});var nC=a((Vme,iC)=>{"use strict";var BCr=b(),tC=eC(),kCr=E3();BCr(tC,"factory",kCr);iC.exports=tC});var oC=a((Ume,uC)=>{"use strict";var jCr=U(),aC=sr(),CCr=P(),sC=.00991256303526217;function VCr(r,e){var t,i,n;for(i=aC(-.5*e*e),t=[],t.push(sC/i),t.push(e),n=2;n<r;n++)t[n]=jCr(-2*CCr(sC/t[n-1]+i)),i=aC(-.5*t[n]*t[n]);return t.push(0),t}uC.exports=VCr});var fC=a((Gme,vC)=>{"use strict";function UCr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}vC.exports=UCr});var pC=a((Hme,lC)=>{"use strict";var cC=P();function GCr(r,e,t){var i,n;do i=cC(r())/e,n=cC(r());while(-2*n<i*i);return t?i-e:e-i}lC.exports=GCr});var hC=a((Wme,dC)=>{"use strict";var HCr=Y(),gC=sr(),WCr=oC(),xCr=fC(),DCr=pC(),zCr=128,mC=3.442619855899,Yt=WCr(zCr,mC),XCr=xCr(Yt),JCr=127;function YCr(r,e){return t;function t(){for(var i,n,s,u,o,f,v;;){if(o=2*r()-1,f=e()&JCr,HCr(o)<XCr[f])return o*Yt[f];if(f===0)return DCr(r,mC,o<0);if(u=o*Yt[f],s=u*u,v=f+1,i=gC(-.5*(Yt[f]*Yt[f]-s)),n=gC(-.5*(Yt[v]*Yt[v]-s)),n+r()*(i-n)<1)return u}}}dC.exports=YCr});var O3=a((xme,bC)=>{"use strict";var lt=b(),B0=R(),qC=M(),ZCr=_(),$Cr=L(),QCr=gr().isPrimitive,k0=A(),KCr=ve(),N3=X().factory,yC=T(),rVr=C(),eVr=J(),tVr=ei(),iVr=B(),Xn=y(),nVr=hC();function aVr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!$Cr(r))throw new TypeError(Xn("invalid argument. Must provide an object. Value: `%s`.",r));if(k0(r,"copy")&&(n.copy=r.copy,!QCr(r.copy)))throw new TypeError(Xn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(k0(r,"prng")){if(!ZCr(r.prng))throw new TypeError(Xn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(k0(r,"state")){if(n.state=r.state,!KCr(r.state))throw new TypeError(Xn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(k0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Xn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=N3(n),e=t.normalized):(t=N3({seed:eVr(1+tVr*e()),copy:n.copy}),n.seed=null):(t=N3(n),e=t.normalized),i=nVr(e,t),lt(i,"NAME","improved-ziggurat"),n.seed===null?(lt(i,"seed",null),lt(i,"seedLength",null)):(B0(i,"seed",s),B0(i,"seedLength",u)),r&&r.prng?(qC(i,"state",yC(null),rVr),lt(i,"stateLength",null),lt(i,"byteLength",null),lt(i,"toJSON",yC(null))):(qC(i,"state",v,c),B0(i,"stateLength",o),B0(i,"byteLength",f),lt(i,"toJSON",l)),lt(i,"PRNG",e),i;function s(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function f(){return t.byteLength}function v(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=iVr(t.state),p.params=[],p}}bC.exports=aVr});var EC=a((Dme,wC)=>{"use strict";var sVr=O3(),uVr=sVr();wC.exports=uVr});var pt=a((zme,OC)=>{"use strict";var oVr=b(),NC=EC(),vVr=O3();oVr(NC,"factory",vVr);OC.exports=NC});var SC=a((Xme,AC)=>{"use strict";var fVr=_(),cVr=fVr(Object.assign);AC.exports=cVr});var _C=a((Jme,TC)=>{"use strict";var lVr=Object.assign;TC.exports=lVr});var LC=a((Yme,IC)=>{"use strict";var pVr=typeof Object.getOwnPropertySymbols<"u";IC.exports=pVr});var FC=a((Zme,PC)=>{"use strict";var RC=qi(),gVr=RC.getOwnPropertySymbols;function mVr(r){return gVr(RC(r))}PC.exports=mVr});var BC=a(($me,MC)=>{"use strict";function dVr(){return[]}MC.exports=dVr});var jC=a((Qme,kC)=>{"use strict";var hVr=LC(),qVr=FC(),yVr=BC(),A3;hVr?A3=qVr:A3=yVr;kC.exports=A3});var VC=a((Kme,CC)=>{"use strict";var bVr=Ei(),wVr=jC(),EVr=gn();function NVr(r){var e,t,i;for(e=bVr(r),t=wVr(r),i=0;i<t.length;i++)EVr(r,t[i])&&e.push(t[i]);return e}CC.exports=NVr});var GC=a((rde,UC)=>{"use strict";var OVr=VC();UC.exports=OVr});var xC=a((ede,WC)=>{"use strict";var AVr=GC(),HC=qi(),SVr=y();function TVr(r){var e,t,i,n,s,u,o;if(r==null)throw new TypeError(SVr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(s=HC(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=AVr(HC(e)),n=t.length,o=0;o<n;o++)i=t[o],s[i]=e[i];return s}WC.exports=TVr});var Jn=a((tde,DC)=>{"use strict";var _Vr=SC(),IVr=_C(),LVr=xC(),S3;_Vr?S3=IVr:S3=LVr;DC.exports=S3});var YC=a((ide,JC)=>{"use strict";var zC=D().isPrimitive,XC=y();function RVr(r,e){return zC(r)?zC(e)?null:new TypeError(XC("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(XC("invalid argument. First argument must be a positive number. Value: `%s`.",r))}JC.exports=RVr});var rV=a((nde,KC)=>{"use strict";var ZC=P(),$C=U(),PVr=W(),QC=1/3;function FVr(r,e,t){var i,n,s,u,o,f,v,c,l,p;for(t<1?(f=t+1-QC,o=1/$C(9*f),c=PVr(r(),1/t)):(f=t-QC,o=1/$C(9*f),c=1),i=!0;i;){do v=e(),p=1+o*v;while(p<=0);p*=p*p,n=v*v,s=1-.331*n*n,u=.5*n+f*(1-p+ZC(p)),l=r(),(l<s||ZC(l)<u)&&(i=!1)}return f*p*c}KC.exports=FVr});var iV=a((ade,tV)=>{"use strict";var T3=W(),eV=P();function MVr(r,e,t){var i,n,s,u,o,f,v,c;for(s=t-1,o=T3(s+s,.5),i=!0;i===!0;)u=e(),v=.5*(1+u/o),v>=0&&v<=1&&(f=r(),n=T3(u,4),c=8*t-12,c=1-n/c,f<=c?i=!1:(c+=.5*T3(n/(8*t-8),2),f<c&&(c=s*eV(4*v*(1-v)),c+=u*u/2,c>=eV(f)&&(i=!1))));return v}tV.exports=MVr});var aV=a((sde,nV)=>{"use strict";var BVr=W(),j0=P();function kVr(r,e,t,i){var n,s,u,o,f,v,c,l,p,g,h;for(o=t-1,f=i-1,v=o+f,c=v*j0(v),u=o/v,n=.5/BVr(v,.5),s=!0;s===!0;)l=e(),g=u+l*n,g>=0&&g<=1&&(p=r(),h=o*j0(g/o),h+=f*j0((1-g)/f),h+=c+.5*l*l,h>=j0(p)&&(s=!1));return g}nV.exports=kVr});var oV=a((ude,uV)=>{"use strict";var _3=sr(),sV=W(),I3=P();function jVr(r,e,t){for(var i,n,s,u,o,f,v;;)if(u=r(),o=r(),f=sV(u,1/e),v=sV(o,1/t),s=f+v,s<=1)return s>0?f/s:(i=I3(u)/e,n=I3(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),_3(i-I3(_3(i)+_3(n))))}uV.exports=jVr});var cV=a((ode,fV)=>{"use strict";var vV=rV(),CVr=iV(),VVr=aV(),UVr=oV();function GVr(r,e,t,i){var n,s;return t===i&&t>1.5?CVr(r,e,t):t>1&&i>1?VVr(r,e,t,i):t<1&&i<1?UVr(r,t,i):(n=vV(r,e,t),s=vV(r,e,i),n/(n+s))}fV.exports=GVr});var F3=a((vde,wV)=>{"use strict";var ye=b(),C0=R(),lV=M(),pV=L(),gV=gr().isPrimitive,mV=_(),Mi=A(),dV=T(),HVr=C(),hV=pt().factory,V0=X().factory,qV=E(),L3=ot(),R3=lr(),P3=ve(),yV=Jn(),WVr=B(),be=y(),xVr=YC(),bV=cV();function DVr(){var r,e,t,i,n,s,u,o,f;if(o=!0,arguments.length===0)n={copy:!1},s=V0(n);else if(arguments.length===1){if(n=arguments[0],!pV(n))throw new TypeError(be("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Mi(n,"copy")&&!gV(n.copy))throw new TypeError(be("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Mi(n,"prng")){if(!mV(n.prng))throw new TypeError(be("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));s=n.prng}else{if(Mi(n,"state")&&!P3(n.state))throw new TypeError(be("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=yV({},n),n.copy===!1?o=!1:n.state&&(n.state=L3(n.state.length,n.state,1,new R3(n.state.length),1)),n.copy=!1,s=V0(n)}}else{if(t=arguments[0],i=arguments[1],f=xVr(t,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!pV(n))throw new TypeError(be("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Mi(n,"copy")&&!gV(n.copy))throw new TypeError(be("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Mi(n,"prng")){if(!mV(n.prng))throw new TypeError(be("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));s=n.prng}else{if(Mi(n,"state")&&!P3(n.state))throw new TypeError(be("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=yV({},n),n.copy===!1?o=!1:n.state&&(n.state=L3(n.state.length,n.state,1,new R3(n.state.length),1)),n.copy=!1,s=V0(n)}}else n={copy:!1},s=V0(n)}return n&&n.prng?e=hV({prng:n.prng}):(n.state?r=n.state:(r=s.state,s.state=r),e=hV({state:r,copy:!1})),t===void 0?u=q:u=m,ye(u,"NAME","beta"),n&&n.prng?(ye(u,"seed",null),ye(u,"seedLength",null),lV(u,"state",dV(null),HVr),ye(u,"stateLength",null),ye(u,"byteLength",null),ye(u,"toJSON",dV(null)),ye(u,"PRNG",s)):(C0(u,"seed",v),C0(u,"seedLength",c),lV(u,"state",g,h),C0(u,"stateLength",l),C0(u,"byteLength",p),ye(u,"toJSON",d),ye(u,"PRNG",s),s=s.normalized),u;function v(){return s.seed}function c(){return s.seedLength}function l(){return s.stateLength}function p(){return s.byteLength}function g(){return s.state}function h(N){if(!P3(N))throw new TypeError(be("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=L3(N.length,N,1,new R3(N.length),1)),s.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=WVr(s.state),t===void 0?N.params=[]:N.params=[t,i],N}function m(){return bV(s,e,t,i)}function q(N,O){return qV(N)||qV(O)||N<=0||O<=0?NaN:bV(s,e,N,O)}}wV.exports=DVr});var NV=a((fde,EV)=>{"use strict";var zVr=F3(),XVr=zVr();EV.exports=XVr});var SV=a((cde,AV)=>{"use strict";var JVr=b(),OV=NV(),YVr=F3();JVr(OV,"factory",YVr);AV.exports=OV});var LV=a((lde,IV)=>{"use strict";var TV=D().isPrimitive,_V=y();function ZVr(r,e){return TV(r)?TV(e)?null:new TypeError(_V("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(_V("invalid argument. First argument must be a positive number. Value: `%s`.",r))}IV.exports=ZVr});var FV=a((pde,PV)=>{"use strict";var RV=P();function $Vr(r,e,t,i,n){var s,u,o,f,v,c,l;for(s=!0;s;){do v=e(),l=1+n*v;while(l<=0);l*=l*l,u=v*v,o=1-.331*u*u,f=.5*u+i*(1-l+RV(l)),c=r(),(c<o||RV(c)<f)&&(s=!1)}return 1/t*i*l}PV.exports=$Vr});var C3=a((gde,WV)=>{"use strict";var we=b(),U0=R(),MV=M(),BV=L(),M3=ve(),kV=gr().isPrimitive,jV=_(),Bi=A(),CV=T(),QVr=C(),VV=pt().factory,G0=X().factory,UV=E(),B3=U(),GV=W(),k3=ot(),j3=lr(),KVr=B(),HV=Jn(),Ee=y(),rUr=LV(),H0=FV(),W0=1/3;function eUr(){var r,e,t,i,n,s,u,o,f,v,c;if(o=!0,arguments.length===0)n={copy:!1},s=G0(n);else if(arguments.length===1){if(n=arguments[0],!BV(n))throw new TypeError(Ee("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Bi(n,"copy")&&!kV(n.copy))throw new TypeError(Ee("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Bi(n,"prng")){if(!jV(n.prng))throw new TypeError(Ee("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));s=n.prng}else{if(Bi(n,"state")&&!M3(n.state))throw new TypeError(Ee("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=HV({},n),n.copy===!1?o=!1:n.state&&(n.state=k3(n.state.length,n.state,1,new j3(n.state.length),1)),n.copy=!1,s=G0(n)}}else{if(e=arguments[0],i=arguments[1],f=rUr(e,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!BV(n))throw new TypeError(Ee("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Bi(n,"copy")&&!kV(n.copy))throw new TypeError(Ee("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Bi(n,"prng")){if(!jV(n.prng))throw new TypeError(Ee("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));s=n.prng}else{if(Bi(n,"state")&&!M3(n.state))throw new TypeError(Ee("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=HV({},n),n.copy===!1?o=!1:n.state&&(n.state=k3(n.state.length,n.state,1,new j3(n.state.length),1)),n.copy=!1,s=G0(n)}}else n={copy:!1},s=G0(n)}return n&&n.prng?t=VV({prng:n.prng}):(n.state?r=n.state:(r=s.state,s.state=r),t=VV({state:r,copy:!1})),e===void 0?u=F:(e>=1?(u=N,c=e-W0):(u=O,c=e+1-W0),v=1/B3(9*c)),we(u,"NAME","gamma"),n&&n.prng?(we(u,"seed",null),we(u,"seedLength",null),MV(u,"state",CV(null),QVr),we(u,"stateLength",null),we(u,"byteLength",null),we(u,"toJSON",CV(null)),we(u,"PRNG",s)):(U0(u,"seed",l),U0(u,"seedLength",p),MV(u,"state",d,m),U0(u,"stateLength",g),U0(u,"byteLength",h),we(u,"toJSON",q),we(u,"PRNG",s),s=s.normalized),u;function l(){return s.seed}function p(){return s.seedLength}function g(){return s.stateLength}function h(){return s.byteLength}function d(){return s.state}function m(S){if(!M3(S))throw new TypeError(Ee("invalid argument. Must provide a Uint32Array. Value: `%s`.",S));o&&(S=k3(S.length,S,1,new j3(S.length),1)),s.state=S}function q(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=KVr(s.state),e===void 0?S.params=[]:S.params=[e,i],S}function N(){return H0(s,t,i,c,v)}function O(){return H0(s,t,i,c,v)*GV(s(),1/e)}function F(S,x){var Q,G;return UV(S)||UV(x)||S<=0||x<=0?NaN:S<1?(G=S+1-W0,Q=1/B3(9*G),H0(s,t,x,G,Q)*GV(s(),1/S)):(G=S-W0,Q=1/B3(9*G),H0(s,t,x,G,Q))}}WV.exports=eUr});var DV=a((mde,xV)=>{"use strict";var tUr=C3(),iUr=tUr();xV.exports=iUr});var ki=a((dde,XV)=>{"use strict";var nUr=b(),zV=DV(),aUr=C3();nUr(zV,"factory",aUr);XV.exports=zV});var $V=a((hde,ZV)=>{"use strict";var JV=D().isPrimitive,YV=y();function sUr(r,e){return JV(r)?JV(e)?null:new TypeError(YV("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(YV("invalid argument. First argument must be a positive number. Value: `%s`.",r))}ZV.exports=sUr});var KV=a((qde,QV)=>{"use strict";function uUr(r,e,t){return r(e,1)/r(t,1)}QV.exports=uUr});var V3=a((yde,sU)=>{"use strict";var gt=b(),x0=R(),rU=M(),eU=L(),tU=T(),oUr=C(),D0=ki().factory,iU=E(),vUr=B(),nU=y(),fUr=$V(),aU=KV();function cUr(){var r,e,t,i,n,s,u;if(arguments.length===0)r=D0();else if(arguments.length===1){if(i=arguments[0],!eU(i))throw new TypeError(nU("invalid argument. Options argument must be an object. Value: `%s`.",i));r=D0(i)}else{if(e=arguments[0],t=arguments[1],u=fUr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!eU(i))throw new TypeError(nU("invalid argument. Options argument must be an object. Value: `%s`.",i));r=D0(i)}else r=D0()}return e===void 0?s=d:s=h,n=r.PRNG,gt(s,"NAME","betaprime"),i&&i.prng?(gt(s,"seed",null),gt(s,"seedLength",null),rU(s,"state",tU(null),oUr),gt(s,"stateLength",null),gt(s,"byteLength",null),gt(s,"toJSON",tU(null))):(x0(s,"seed",o),x0(s,"seedLength",f),rU(s,"state",l,p),x0(s,"stateLength",v),x0(s,"byteLength",c),gt(s,"toJSON",g)),gt(s,"PRNG",n),s;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=s.NAME,m.state=vUr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return aU(r,e,t)}function d(m,q){return iU(m)||iU(q)||m<=0||q<=0?NaN:aU(r,m,q)}}sU.exports=cUr});var oU=a((bde,uU)=>{"use strict";var lUr=V3(),pUr=lUr();uU.exports=pUr});var cU=a((wde,fU)=>{"use strict";var gUr=b(),vU=oU(),mUr=V3();gUr(vU,"factory",mUr);fU.exports=vU});var pU=a((Ede,lU)=>{"use strict";var dUr=J();function hUr(r){return dUr(r)===r&&r>0}lU.exports=hUr});var U3=a((Nde,gU)=>{"use strict";var qUr=pU();gU.exports=qUr});var dU=a((Ode,mU)=>{"use strict";function yUr(r){return r>=0&&r<=1}mU.exports=yUr});var qU=a((Ade,hU)=>{"use strict";var bUr=dU();hU.exports=bUr});var wU=a((Sde,bU)=>{"use strict";var wUr=re().isPrimitive,EUr=ln().isPrimitive,yU=y();function NUr(r,e){return wUr(r)?EUr(e)?null:new TypeError(yU("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(yU("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}bU.exports=NUr});var NU=a((Tde,EU)=>{"use strict";function OUr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}EU.exports=OUr});var AU=a((_de,OU)=>{"use strict";var AUr=E();function SUr(r){return r===0||AUr(r)?r:r<0?-1:1}OU.exports=SUr});var z0=a((Ide,SU)=>{"use strict";var TUr=AU();SU.exports=TUr});var _U=a((Lde,TU)=>{"use strict";var _Ur=W(),IUr=1/12,LUr=1/360,RUr=1/1260;function PUr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=_Ur(r,2),(IUr-(LUr-RUr/e)/e)/r}}TU.exports=PUr});var LU=a((Rde,IU)=>{"use strict";var G3=J(),FUr=z0(),MUr=U(),H3=Y(),X0=P(),J0=_U(),BUr=1/6;function kUr(r,e,t){var i,n,s,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,S,x,Q,G,_r,Ir,or,Rt;for(x=G3((e+1)*t),v=e-x+1,Q=1-t,G=t/Q,c=(e+1)*G,u=e*t*Q,s=MUr(u),m=1.15+2.53*s,d=-.0873+.0248*m+.01*t,q=e*t+.5,i=(2.83+5.1/m)*s,h=.92-4.2/m,n=.86*h,O=(x+.5)*X0((x+1)/(G*v)),O+=J0(x)+J0(e-x);;){if(or=r(),or<=n)return Ir=or/h-.43,G=Ir*(2*d/(.5-H3(Ir))+m)+q,G3(G);if(or>=h?Ir=r()-.5:(Ir=or/h-.93,Ir=FUr(Ir)*.5-Ir,or=h*r()),l=.5-H3(Ir),S=G3(Ir*(2*d/l+m)+q),!(S<0||S>e))if(or=or*i/(d/(l*l)+m),p=H3(S-x),p>15){if(or=X0(or),o=p/u,f=(p/3+.625)*p,f+=BUr,f/=u,o*=f+.5,_r=-(p*p)/(2*u),or<_r-o||or<=_r+o&&(g=e-S+1,Rt=O+(e+1)*X0(v/g),Rt+=(S+.5)*X0(g*G/(S+1)),Rt+=-(J0(S)+J0(e-S)),or<=Rt))return S}else{if(N=1,x<S)for(F=x;F<=S;F++)N*=c/F-G;else if(x>S)for(F=S;F<=x;F++)or*=c/F-G;if(or<=N)return S}}}IU.exports=kUr});var FU=a((Pde,PU)=>{"use strict";var jUr=NU(),CUr=LU();function RU(r,e,t){return t>.5?e-RU(r,e,1-t):e*t<10?jUr(r,e,t):CUr(r,e,t)}PU.exports=RU});var W3=a((Fde,GU)=>{"use strict";var Ne=b(),Y0=R(),MU=M(),BU=L(),kU=_(),jU=A(),CU=T(),VUr=C(),VU=E(),UUr=U3(),GUr=qU(),Z0=X().factory,HUr=B(),$0=y(),WUr=wU(),UU=FU();function xUr(){var r,e,t,i,n,s;if(arguments.length===0)e=Z0();else if(arguments.length===1){if(r=arguments[0],!BU(r))throw new TypeError($0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(jU(r,"prng")){if(!kU(r.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Z0(r)}else{if(n=arguments[0],s=arguments[1],i=WUr(n,s),i)throw i;if(arguments.length>2){if(r=arguments[2],!BU(r))throw new TypeError($0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(jU(r,"prng")){if(!kU(r.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Z0(r)}else e=Z0()}return n===void 0?t=h:t=g,Ne(t,"NAME","binomial"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),MU(t,"state",CU(null),VUr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",CU(null)),Ne(t,"PRNG",e)):(Y0(t,"seed",u),Y0(t,"seedLength",o),MU(t,"state",c,l),Y0(t,"stateLength",f),Y0(t,"byteLength",v),Ne(t,"toJSON",p),Ne(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=HUr(e.state),n===void 0?d.params=[]:d.params=[n,s],d}function g(){return UU(e,n,s)}function h(d,m){return VU(d)||VU(m)||!UUr(d)||!GUr(m)?NaN:UU(e,d,m)}}GU.exports=xUr});var WU=a((Mde,HU)=>{"use strict";var DUr=W3(),zUr=DUr();HU.exports=zUr});var zU=a((Bde,DU)=>{"use strict";var XUr=b(),xU=WU(),JUr=W3();XUr(xU,"factory",JUr);DU.exports=xU});var JU=a((kde,XU)=>{"use strict";var YUr=U(),ZUr=P(),$Ur=Xt(),QUr=zt(),KUr=it();function rGr(r){var e,t;return e=!0,i;function i(){var n,s,u,o;if(e){do n=r(),s=r();while(n===0);return u=YUr(-2*ZUr(n)),o=KUr*s,t=u*QUr(o),e=!1,u*$Ur(o)}return e=!0,t}}XU.exports=rGr});var ZU=a((jde,YU)=>{"use strict";var eGr=U(),tGr=P(),iGr=zt(),nGr=kr(),aGr=iGr(nGr);function sGr(r){var e=eGr(-2*tGr(r));return e*aGr}YU.exports=sGr});var QU=a((Cde,$U)=>{"use strict";var uGr=U(),oGr=P(),vGr=zt(),fGr=it();function cGr(r){var e=uGr(-2*oGr(r)),t=fGr*r;return e*vGr(t)}$U.exports=cGr});var x3=a((Vde,tG)=>{"use strict";var Gr=b(),Q0=R(),KU=M(),lGr=L(),pGr=_(),gGr=gr().isPrimitive,Yn=A(),mGr=ve(),rG=X().factory,eG=T(),dGr=C(),hGr=B(),Zn=y(),qGr=JU(),yGr=ZU(),bGr=QU();function wGr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!lGr(r))throw new TypeError(Zn("invalid argument. Must provide an object. Value: `%s`.",r));if(Yn(r,"copy")&&(n.copy=r.copy,!gGr(r.copy)))throw new TypeError(Zn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Yn(r,"prng")){if(!pGr(r.prng))throw new TypeError(Zn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Yn(r,"state")){if(n.state=r.state,!mGr(r.state))throw new TypeError(Zn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Yn(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Zn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=rG(n),e=i.normalized):n.seed=null:(i=rG(n),e=i.normalized),t=qGr(e),Gr(t,"NAME","box-muller"),n.seed===null?(Gr(t,"seed",null),Gr(t,"seedLength",null)):(Q0(t,"seed",s),Q0(t,"seedLength",u)),r&&r.prng?(KU(t,"state",eG(null),dGr),Gr(t,"stateLength",null),Gr(t,"byteLength",null),Gr(t,"toJSON",eG(null))):(KU(t,"state",v,c),Q0(t,"stateLength",o),Q0(t,"byteLength",f),Gr(t,"toJSON",l)),Gr(t,"PRNG",e),Yn(e,"MIN")?(Gr(t,"MIN",yGr(e.MIN)),Gr(t,"MAX",bGr(e.MIN))):(Gr(t,"MIN",null),Gr(t,"MAX",null)),t;function s(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function f(){return i.byteLength}function v(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=hGr(i.state),p.params=[],p}}tG.exports=wGr});var nG=a((Ude,iG)=>{"use strict";var EGr=x3(),NGr=EGr();iG.exports=NGr});var uG=a((Gde,sG)=>{"use strict";var OGr=b(),aG=nG(),AGr=x3();OGr(aG,"factory",AGr);sG.exports=aG});var fG=a((Hde,vG)=>{"use strict";var SGr=j().isPrimitive,TGr=D().isPrimitive,oG=y(),_Gr=vr();function IGr(r,e){return!SGr(r)||_Gr(r)?new TypeError(oG("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):TGr(e)?null:new TypeError(oG("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}vG.exports=IGr});var lG=a((Wde,cG)=>{"use strict";function LGr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}cG.exports=LGr});var gG=a((xde,pG)=>{"use strict";function RGr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}pG.exports=RGr});var hG=a((Dde,dG)=>{"use strict";var PGr=ar(),mG=ce(),FGr=lG(),MGr=gG(),BGr=.7853981633974483,kGr=3061616997868383e-32,jGr=.3333333333333341,CGr=2147483647;function VGr(r,e,t){var i,n,s,u,o,f,v,c,l;return i=PGr(r),n=i&CGr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=BGr-r,c=kGr-e,r=l+c,e=0),l=r*r,c=l*l,u=FGr(c),v=l*MGr(c),o=l*r,u=e+l*(o*(u+v)+e),u+=jGr*o,c=r+u,n>=1072010280?(v=t,(1-(i>>30&2))*(v-2*(r-(c*c/(c+v)-u)))):t===1?c:(l=mG(c,0),v=u-(l-r),s=-1/c,f=mG(s,0),o=1+f*l,f+s*(o+f*v))}dG.exports=VGr});var yG=a((zde,qG)=>{"use strict";var UGr=hG();qG.exports=UGr});var EG=a((Xde,wG)=>{"use strict";var GGr=ar(),bG=yG(),HGr=_n(),D3=[0,0],WGr=2147483647,xGr=1072243195,DGr=2146435072,zGr=1044381696;function XGr(r){var e,t;return e=GGr(r),e&=WGr,e<=xGr?e<zGr?r:bG(r,0,1):e>=DGr?NaN:(t=HGr(r,D3),bG(D3[0],D3[1],1-((t&1)<<1)))}wG.exports=XGr});var z3=a((Jde,NG)=>{"use strict";var JGr=EG();NG.exports=JGr});var AG=a((Yde,OG)=>{"use strict";var YGr=z3(),ZGr=kr();function $Gr(r,e,t){return e+t*YGr(ZGr*(r()-.5))}OG.exports=$Gr});var X3=a((Zde,FG)=>{"use strict";var mt=b(),K0=R(),SG=M(),TG=L(),_G=_(),IG=A(),LG=T(),QGr=C(),RG=E(),ji=pt().factory,KGr=B(),rs=y(),rHr=fG(),PG=AG();function eHr(){var r,e,t,i,n,s,u;if(arguments.length===0)e=ji();else if(arguments.length===1){if(t=arguments[0],!TG(t))throw new TypeError(rs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(IG(t,"prng")){if(!_G(t.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ji({prng:t.prng})}else e=ji(t)}else{if(u=arguments[0],r=arguments[1],s=rHr(u,r),s)throw s;if(arguments.length>2){if(t=arguments[2],!TG(t))throw new TypeError(rs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(IG(t,"prng")){if(!_G(t.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ji({prng:t.prng})}else e=ji(t)}else e=ji()}return u===void 0?n=d:n=h,i=e.PRNG,mt(n,"NAME","cauchy"),t&&t.prng?(mt(n,"seed",null),mt(n,"seedLength",null),SG(n,"state",LG(null),QGr),mt(n,"stateLength",null),mt(n,"byteLength",null),mt(n,"toJSON",LG(null))):(K0(n,"seed",o),K0(n,"seedLength",f),SG(n,"state",l,p),K0(n,"stateLength",v),K0(n,"byteLength",c),mt(n,"toJSON",g)),mt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=KGr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return PG(e,u,r)}function d(m,q){return RG(m)||RG(q)||q<=0?NaN:PG(e,m,q)}}FG.exports=eHr});var BG=a(($de,MG)=>{"use strict";var tHr=X3(),iHr=tHr();MG.exports=iHr});var CG=a((Qde,jG)=>{"use strict";var nHr=b(),kG=BG(),aHr=X3();nHr(kG,"factory",aHr);jG.exports=kG});var J3=a((Kde,xG)=>{"use strict";var dt=b(),es=R(),VG=M(),sHr=D().isPrimitive,UG=L(),GG=_(),HG=A(),WG=T(),uHr=C(),oHr=E(),Ci=ki().factory,vHr=B(),ts=y();function fHr(){var r,e,t,i,n;if(arguments.length===0)r=Ci();else if(arguments.length===1&&UG(arguments[0]))if(t=arguments[0],HG(t,"prng")){if(!GG(t.prng))throw new TypeError(ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ci({prng:t.prng})}else r=Ci(t);else{if(n=arguments[0],!sHr(n))throw new TypeError(ts("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!UG(t))throw new TypeError(ts("invalid argument. Options argument must be an object. Value: `%s`.",t));if(HG(t,"prng")){if(!GG(t.prng))throw new TypeError(ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ci(n/2,.5,{prng:t.prng})}else r=Ci(n/2,.5,t)}else r=Ci(n/2,.5)}return n===void 0?i=g:i=p,e=r.PRNG,dt(i,"NAME","chisquare"),t&&t.prng?(dt(i,"seed",null),dt(i,"seedLength",null),VG(i,"state",WG(null),uHr),dt(i,"stateLength",null),dt(i,"byteLength",null),dt(i,"toJSON",WG(null))):(es(i,"seed",s),es(i,"seedLength",u),VG(i,"state",v,c),es(i,"stateLength",o),es(i,"byteLength",f),dt(i,"toJSON",l)),dt(i,"PRNG",e),i;function s(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=vHr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function g(h){return oHr(h)||h<=0?NaN:r(h/2,.5)}}xG.exports=fHr});var zG=a((rhe,DG)=>{"use strict";var cHr=J3(),lHr=cHr();DG.exports=lHr});var $n=a((ehe,JG)=>{"use strict";var pHr=b(),XG=zG(),gHr=J3();pHr(XG,"factory",gHr);JG.exports=XG});var Y3=a((the,eH)=>{"use strict";var ht=b(),is=R(),YG=M(),mHr=D().isPrimitive,ZG=L(),$G=_(),QG=A(),KG=T(),dHr=C(),hHr=E(),Vi=$n().factory,qHr=B(),rH=U(),ns=y();function yHr(){var r,e,t,i,n;if(arguments.length===0)r=Vi();else if(arguments.length===1&&ZG(arguments[0]))if(t=arguments[0],QG(t,"prng")){if(!$G(t.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Vi({prng:t.prng})}else r=Vi(t);else{if(n=arguments[0],!mHr(n))throw new TypeError(ns("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!ZG(t))throw new TypeError(ns("invalid argument. Options argument must be an object. Value: `%s`.",t));if(QG(t,"prng")){if(!$G(t.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Vi(n,{prng:t.prng})}else r=Vi(n,t)}else r=Vi(n)}return n===void 0?i=g:i=p,e=r.PRNG,ht(i,"NAME","chi"),t&&t.prng?(ht(i,"seed",null),ht(i,"seedLength",null),YG(i,"state",KG(null),dHr),ht(i,"stateLength",null),ht(i,"byteLength",null),ht(i,"toJSON",KG(null))):(is(i,"seed",s),is(i,"seedLength",u),YG(i,"state",v,c),is(i,"stateLength",o),is(i,"byteLength",f),ht(i,"toJSON",l)),ht(i,"PRNG",e),i;function s(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=qHr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return rH(r())}function g(h){return hHr(h)||h<=0?NaN:rH(r(h))}}eH.exports=yHr});var iH=a((ihe,tH)=>{"use strict";var bHr=Y3(),wHr=bHr();tH.exports=wHr});var sH=a((nhe,aH)=>{"use strict";var EHr=b(),nH=iH(),NHr=Y3();EHr(nH,"factory",NHr);aH.exports=nH});var vH=a((ahe,oH)=>{"use strict";var OHr=j().isPrimitive,AHr=D().isPrimitive,uH=y(),SHr=vr();function THr(r,e){return!OHr(r)||SHr(r)?new TypeError(uH("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):AHr(e)?null:new TypeError(uH("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}oH.exports=THr});var cH=a((she,fH)=>{"use strict";var Z3=E(),_Hr=jn(),IHr=kr();function LHr(r,e,t){var i;return Z3(r)||Z3(e)||Z3(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+_Hr(i)/IHr)/2)}fH.exports=LHr});var gH=a((uhe,pH)=>{"use strict";var lH=E();function RHr(r,e){return lH(r)||lH(e)?NaN:r<e?0:1}pH.exports=RHr});var hH=a((ohe,dH)=>{"use strict";var PHr=T(),mH=E();function FHr(r){if(mH(r))return PHr(NaN);return e;function e(t){return mH(t)?NaN:t<r?0:1}}dH.exports=FHr});var as=a((vhe,yH)=>{"use strict";var MHr=b(),qH=gH(),BHr=hH();MHr(qH,"factory",BHr);yH.exports=qH});var wH=a((fhe,bH)=>{"use strict";var kHr=T(),jHr=as().factory,$3=E(),CHr=jn(),VHr=kr();function UHr(r,e){if($3(r)||$3(e)||e<0)return kHr(NaN);if(e===0)return jHr(r);return t;function t(i){var n;return $3(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+CHr(n)/VHr)/2)}}bH.exports=UHr});var OH=a((che,NH)=>{"use strict";var GHr=b(),EH=cH(),HHr=wH();GHr(EH,"factory",HHr);NH.exports=EH});var Q3=a((lhe,AH)=>{"use strict";var WHr=OH(),xHr=1e4,DHr=1e-12;function zHr(r,e,t){var i,n,s,u,o;for(o=1,i=e-t,n=e+t;o<xHr;){if(u=(i+n)/2,n-i<DHr)return u;s=WHr(u,e,t),r>s?i=u:n=u,o+=1}return u}AH.exports=zHr});var TH=a((phe,SH)=>{"use strict";var K3=E(),XHr=Q3();function JHr(r,e,t){return K3(e)||K3(t)||K3(r)||t<0||r<0||r>1?NaN:t===0?e:XHr(r,e,t)}SH.exports=JHr});var IH=a((ghe,_H)=>{"use strict";var YHr=E();function ZHr(r,e){return YHr(r)||r<0||r>1?NaN:e}_H.exports=ZHr});var PH=a((mhe,RH)=>{"use strict";var $Hr=T(),LH=E();function QHr(r){if(LH(r))return $Hr(NaN);return e;function e(t){return LH(t)||t<0||t>1?NaN:r}}RH.exports=QHr});var rv=a((dhe,MH)=>{"use strict";var KHr=b(),FH=IH(),rWr=PH();KHr(FH,"factory",rWr);MH.exports=FH});var kH=a((hhe,BH)=>{"use strict";var eWr=T(),tWr=rv().factory,ev=E(),iWr=Q3();function nWr(r,e){if(ev(r)||ev(e)||e<0)return eWr(NaN);if(e===0)return tWr(r);return t;function t(i){return ev(i)||i<0||i>1?NaN:iWr(i,r,e)}}BH.exports=nWr});var VH=a((qhe,CH)=>{"use strict";var aWr=b(),jH=TH(),sWr=kH();aWr(jH,"factory",sWr);CH.exports=jH});var GH=a((yhe,UH)=>{"use strict";var uWr=VH();function oWr(r,e,t){return uWr(r(),e,t)}UH.exports=oWr});var tv=a((bhe,YH)=>{"use strict";var Oe=b(),ss=R(),HH=M(),WH=L(),xH=_(),DH=A(),zH=T(),vWr=C(),us=X().factory,XH=E(),fWr=B(),os=y(),cWr=vH(),JH=GH();function lWr(){var r,e,t,i,n,s;if(arguments.length===0)e=us();else if(arguments.length===1){if(r=arguments[0],!WH(r))throw new TypeError(os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(DH(r,"prng")){if(!xH(r.prng))throw new TypeError(os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=us(r)}else{if(n=arguments[0],s=arguments[1],i=cWr(n,s),i)throw i;if(arguments.length>2){if(r=arguments[2],!WH(r))throw new TypeError(os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(DH(r,"prng")){if(!xH(r.prng))throw new TypeError(os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=us(r)}else e=us()}return n===void 0?t=h:t=g,Oe(t,"NAME","cosine"),r&&r.prng?(Oe(t,"seed",null),Oe(t,"seedLength",null),HH(t,"state",zH(null),vWr),Oe(t,"stateLength",null),Oe(t,"byteLength",null),Oe(t,"toJSON",zH(null)),Oe(t,"PRNG",e)):(ss(t,"seed",u),ss(t,"seedLength",o),HH(t,"state",c,l),ss(t,"stateLength",f),ss(t,"byteLength",v),Oe(t,"toJSON",p),Oe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=fWr(e.state),n===void 0?d.params=[]:d.params=[n,s],d}function g(){return JH(e,n,s)}function h(d,m){return XH(d)||XH(m)||m<=0?NaN:JH(e,d,m)}}YH.exports=lWr});var $H=a((whe,ZH)=>{"use strict";var pWr=tv(),gWr=pWr();ZH.exports=gWr});var rW=a((Ehe,KH)=>{"use strict";var mWr=b(),QH=$H(),dWr=tv();mWr(QH,"factory",dWr);KH.exports=QH});var nW=a((Nhe,iW)=>{"use strict";var eW=Rr().isPrimitive,iv=y(),tW=vr();function hWr(r,e){return!eW(r)||tW(r)?new TypeError(iv("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!eW(e)||tW(e)?new TypeError(iv("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(iv("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}iW.exports=hWr});var uW=a((Ohe,sW)=>{"use strict";var nv=Ii(),Ui=J();function aW(r,e,t){var i,n,s,u,o,f,v,c,l;if(s=t-e,s===0)return e;if(v=r.MIN,c=r.MAX,n=c-v,n===s)return r()-v+e;if(n<s)for(u=0;;){for(s===nv?(u=Ui(s/(n+1)),s%(n+1)===n&&(u+=1)):u=Ui((s+1)/(n+1)),i=0,f=1;f<=u;){if(i+=(r()-v)*f,f*n===s-f+1)return i;f*=n+1}if(l=aW(r,0,Ui(s/f)),!(l>nv/f)&&(l*=f,i+=l,!(i>s)))return i+e}for(n===nv?(o=Ui(n/(s+1)),n%(s+1)===s&&(o+=1)):o=Ui((n+1)/(s+1));;)if(i=r()-v,i=Ui(i/o),i<=s)return i+e}sW.exports=aW});var av=a((Ahe,mW)=>{"use strict";var Ae=b(),vs=R(),oW=M(),vW=L(),fW=_(),cW=A(),lW=T(),qWr=C(),fs=X().factory,pW=E(),Gi=Lr(),yWr=B(),qt=y(),bWr=nW(),gW=uW();function wWr(){var r,e,t,i,n,s;if(arguments.length===0)e=fs();else if(arguments.length===1){if(r=arguments[0],!vW(r))throw new TypeError(qt("invalid argument. Options argument must be an object. Value: `%s`.",r));if(cW(r,"prng")){if(!fW(r.prng))throw new TypeError(qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Gi(e.MIN))throw new TypeError(qt("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Gi(e.MAX))throw new TypeError(qt("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=fs(r)}else{if(n=arguments[0],s=arguments[1],i=bWr(n,s),i)throw i;if(arguments.length>2){if(r=arguments[2],!vW(r))throw new TypeError(qt("invalid argument. Options argument must be an object. Value: `%s`.",r));if(cW(r,"prng")){if(!fW(r.prng))throw new TypeError(qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Gi(e.MIN))throw new TypeError(qt("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Gi(e.MAX))throw new TypeError(qt("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=fs(r)}else e=fs()}return n===void 0?t=h:t=g,Ae(t,"NAME","discrete-uniform"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),oW(t,"state",lW(null),qWr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",lW(null)),Ae(t,"PRNG",e)):(vs(t,"seed",u),vs(t,"seedLength",o),oW(t,"state",c,l),vs(t,"stateLength",f),vs(t,"byteLength",v),Ae(t,"toJSON",p),Ae(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=yWr(e.state),n===void 0?d.params=[]:d.params=[n,s],d}function g(){return gW(e,n,s)}function h(d,m){return pW(d)||pW(m)||!Gi(d)||!Gi(m)||d>m?NaN:gW(e,d,m)}}mW.exports=wWr});var hW=a((She,dW)=>{"use strict";var EWr=av(),NWr=EWr();dW.exports=NWr});var bW=a((The,yW)=>{"use strict";var OWr=b(),qW=hW(),AWr=av();OWr(qW,"factory",AWr);yW.exports=qW});var NW=a((_he,EW)=>{"use strict";var SWr=D().isPrimitive,TWr=re().isPrimitive,wW=y();function _Wr(r,e){return TWr(r)?SWr(e)?null:new TypeError(wW("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(wW("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}EW.exports=_Wr});var AW=a((Ihe,OW)=>{"use strict";var IWr=P();function LWr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*IWr(i)}OW.exports=LWr});var sv=a((Lhe,FW)=>{"use strict";var Se=b(),cs=R(),SW=M(),TW=L(),_W=_(),IW=A(),LW=T(),RWr=C(),ls=X().factory,RW=E(),PWr=U3(),FWr=B(),ps=y(),MWr=NW(),PW=AW();function BWr(){var r,e,t,i,n,s;if(arguments.length===0)e=ls();else if(arguments.length===1){if(t=arguments[0],!TW(t))throw new TypeError(ps("invalid argument. Options argument must be an object. Value: `%s`.",t));if(IW(t,"prng")){if(!_W(t.prng))throw new TypeError(ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=ls(t)}else{if(s=arguments[0],r=arguments[1],n=MWr(s,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!TW(t))throw new TypeError(ps("invalid argument. Options argument must be an object. Value: `%s`.",t));if(IW(t,"prng")){if(!_W(t.prng))throw new TypeError(ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=ls(t)}else e=ls()}return s===void 0?i=h:i=g,Se(i,"NAME","erlang"),t&&t.prng?(Se(i,"seed",null),Se(i,"seedLength",null),SW(i,"state",LW(null),RWr),Se(i,"stateLength",null),Se(i,"byteLength",null),Se(i,"toJSON",LW(null)),Se(i,"PRNG",e)):(cs(i,"seed",u),cs(i,"seedLength",o),SW(i,"state",c,l),cs(i,"stateLength",f),cs(i,"byteLength",v),Se(i,"toJSON",p),Se(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=FWr(e.state),s===void 0?d.params=[]:d.params=[s,r],d}function g(){return PW(e,s,r)}function h(d,m){return RW(d)||RW(m)||!PWr(d)||m<=0?NaN:PW(e,d,m)}}FW.exports=BWr});var BW=a((Rhe,MW)=>{"use strict";var kWr=sv(),jWr=kWr();MW.exports=jWr});var CW=a((Phe,jW)=>{"use strict";var CWr=b(),kW=BW(),VWr=sv();CWr(kW,"factory",VWr);jW.exports=kW});var UW=a((Fhe,VW)=>{"use strict";var UWr=P();function GWr(r,e){return-UWr(1-r())/e}VW.exports=GWr});var uv=a((Mhe,XW)=>{"use strict";var Te=b(),gs=R(),GW=M(),HWr=D().isPrimitive,HW=L(),WW=_(),xW=A(),DW=T(),WWr=C(),ms=X().factory,xWr=E(),DWr=B(),ds=y(),zW=UW();function zWr(){var r,e,t,i;if(arguments.length===0)t=ms();else if(arguments.length===1&&HW(arguments[0]))if(e=arguments[0],xW(e,"prng")){if(!WW(e.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ms(e);else{if(r=arguments[0],!HWr(r))throw new TypeError(ds("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!HW(e))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",e));if(xW(e,"prng")){if(!WW(e.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ms(e)}else t=ms()}return r===void 0?i=p:i=l,Te(i,"NAME","exponential"),e&&e.prng?(Te(i,"seed",null),Te(i,"seedLength",null),GW(i,"state",DW(null),WWr),Te(i,"stateLength",null),Te(i,"byteLength",null),Te(i,"toJSON",DW(null)),Te(i,"PRNG",t)):(gs(i,"seed",n),gs(i,"seedLength",s),GW(i,"state",f,v),gs(i,"stateLength",u),gs(i,"byteLength",o),Te(i,"toJSON",c),Te(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function s(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=DWr(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return zW(t,r)}function p(g){return xWr(g)||g<=0?NaN:zW(t,g)}}XW.exports=zWr});var YW=a((Bhe,JW)=>{"use strict";var XWr=uv(),JWr=XWr();JW.exports=JWr});var QW=a((khe,$W)=>{"use strict";var YWr=b(),ZW=YW(),ZWr=uv();YWr(ZW,"factory",ZWr);$W.exports=ZW});var tx=a((jhe,ex)=>{"use strict";var KW=D().isPrimitive,rx=y();function $Wr(r,e){return KW(r)?KW(e)?null:new TypeError(rx("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(rx("invalid argument. First argument must be a positive number. Value: `%s`.",r))}ex.exports=$Wr});var nx=a((Che,ix)=>{"use strict";function QWr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}ix.exports=QWr});var ov=a((Vhe,lx)=>{"use strict";var yt=b(),hs=R(),ax=M(),sx=L(),ux=_(),ox=A(),vx=T(),KWr=C(),Hi=$n().factory,fx=E(),rxr=B(),qs=y(),exr=tx(),cx=nx();function txr(){var r,e,t,i,n,s,u;if(arguments.length===0)r=Hi();else if(arguments.length===1){if(e=arguments[0],!sx(e))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ox(e,"prng")){if(!ux(e.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Hi({prng:e.prng})}else r=Hi(e)}else{if(s=arguments[0],u=arguments[1],n=exr(s,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!sx(e))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ox(e,"prng")){if(!ux(e.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Hi({prng:e.prng})}else r=Hi(e)}else r=Hi()}return s===void 0?i=d:i=h,t=r.PRNG,yt(i,"NAME","f"),e&&e.prng?(yt(i,"seed",null),yt(i,"seedLength",null),ax(i,"state",vx(null),KWr),yt(i,"stateLength",null),yt(i,"byteLength",null),yt(i,"toJSON",vx(null))):(hs(i,"seed",o),hs(i,"seedLength",f),ax(i,"state",l,p),hs(i,"stateLength",v),hs(i,"byteLength",c),yt(i,"toJSON",g)),yt(i,"PRNG",t),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=rxr(t.state),s===void 0?m.params=[]:m.params=[s,u],m}function h(){return cx(r,s,u)}function d(m,q){return fx(m)||fx(q)||m<=0||q<=0?NaN:cx(r,m,q)}}lx.exports=txr});var gx=a((Uhe,px)=>{"use strict";var ixr=ov(),nxr=ixr();px.exports=nxr});var hx=a((Ghe,dx)=>{"use strict";var axr=b(),mx=gx(),sxr=ov();axr(mx,"factory",sxr);dx.exports=mx});var bx=a((Hhe,yx)=>{"use strict";var qx=D().isPrimitive,uxr=j().isPrimitive,vv=vr(),fv=y();function oxr(r,e,t){return!qx(r)||vv(r)?new TypeError(fv("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!qx(e)||vv(e)?new TypeError(fv("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!uxr(t)||vv(t)?new TypeError(fv("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}yx.exports=oxr});var Ex=a((Whe,wx)=>{"use strict";var vxr=W(),fxr=P();function cxr(r,e,t,i){return i+t*vxr(-fxr(r()),-1/e)}wx.exports=cxr});var lv=a((xhe,Ix)=>{"use strict";var _e=b(),ys=R(),Nx=M(),Ox=L(),Ax=_(),Sx=A(),Tx=T(),lxr=C(),bs=X().factory,cv=E(),pxr=B(),ws=y(),gxr=bx(),_x=Ex();function mxr(){var r,e,t,i,n,s,u;if(arguments.length===0)t=bs();else if(arguments.length===1){if(e=arguments[0],!Ox(e))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Sx(e,"prng")){if(!Ax(e.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=bs(e)}else{if(r=arguments[0],s=arguments[1],u=arguments[2],n=gxr(r,s,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!Ox(e))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Sx(e,"prng")){if(!Ax(e.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=bs(e)}else t=bs()}return r===void 0?i=d:i=h,_e(i,"NAME","frechet"),e&&e.prng?(_e(i,"seed",null),_e(i,"seedLength",null),Nx(i,"state",Tx(null),lxr),_e(i,"stateLength",null),_e(i,"byteLength",null),_e(i,"toJSON",Tx(null)),_e(i,"PRNG",t)):(ys(i,"seed",o),ys(i,"seedLength",f),Nx(i,"state",l,p),ys(i,"stateLength",v),ys(i,"byteLength",c),_e(i,"toJSON",g),_e(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=pxr(t.state),r===void 0?m.params=[]:m.params=[r,s,u],m}function h(){return _x(t,r,s,u)}function d(m,q,N){return cv(m)||cv(q)||cv(N)||m<=0||q<=0?NaN:_x(t,m,q,N)}}Ix.exports=mxr});var Rx=a((Dhe,Lx)=>{"use strict";var dxr=lv(),hxr=dxr();Lx.exports=hxr});var Mx=a((zhe,Fx)=>{"use strict";var qxr=b(),Px=Rx(),yxr=lv();qxr(Px,"factory",yxr);Fx.exports=Px});var jx=a((Xhe,kx)=>{"use strict";var bxr=J(),Bx=P();function wxr(r,e){var t=r();return t===0&&(t=r()),bxr(Bx(t)/Bx(1-e))}kx.exports=wxr});var pv=a((Jhe,xx)=>{"use strict";var Ie=b(),Es=R(),Cx=M(),Vx=L(),Exr=ln().isPrimitive,Ux=_(),Gx=A(),Hx=T(),Nxr=C(),Ns=X().factory,Oxr=E(),Axr=B(),Os=y(),Wx=jx();function Sxr(){var r,e,t,i;if(arguments.length===0)e=Ns();else if(arguments.length===1&&Vx(arguments[0]))if(r=arguments[0],Gx(r,"prng")){if(!Ux(r.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r);else{if(i=arguments[0],!Exr(i))throw new TypeError(Os("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!Vx(r))throw new TypeError(Os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Gx(r,"prng")){if(!Ux(r.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r)}else e=Ns()}return i===void 0?t=p:t=l,Ie(t,"NAME","geometric"),r&&r.prng?(Ie(t,"seed",null),Ie(t,"seedLength",null),Cx(t,"state",Hx(null),Nxr),Ie(t,"stateLength",null),Ie(t,"byteLength",null),Ie(t,"toJSON",Hx(null)),Ie(t,"PRNG",e)):(Es(t,"seed",n),Es(t,"seedLength",s),Cx(t,"state",f,v),Es(t,"stateLength",u),Es(t,"byteLength",o),Ie(t,"toJSON",c),Ie(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function s(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Axr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return Wx(e,i)}function p(g){return Oxr(g)||g<0||g>1?NaN:Wx(e,g)}}xx.exports=Sxr});var zx=a((Yhe,Dx)=>{"use strict";var Txr=pv(),_xr=Txr();Dx.exports=_xr});var Yx=a((Zhe,Jx)=>{"use strict";var Ixr=b(),Xx=zx(),Lxr=pv();Ixr(Xx,"factory",Lxr);Jx.exports=Xx});var Qx=a(($he,$x)=>{"use strict";var Rxr=j().isPrimitive,Pxr=D().isPrimitive,Zx=y(),Fxr=vr();function Mxr(r,e){return!Rxr(r)||Fxr(r)?new TypeError(Zx("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Pxr(e)?null:new TypeError(Zx("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}$x.exports=Mxr});var eD=a((Qhe,rD)=>{"use strict";var Kx=P();function Bxr(r,e,t){return e-t*Kx(-Kx(r()))}rD.exports=Bxr});var gv=a((Khe,vD)=>{"use strict";var Le=b(),As=R(),tD=M(),iD=L(),nD=_(),aD=A(),sD=T(),kxr=C(),Ss=X().factory,uD=E(),jxr=B(),Ts=y(),Cxr=Qx(),oD=eD();function Vxr(){var r,e,t,i,n,s;if(arguments.length===0)t=Ss();else if(arguments.length===1){if(e=arguments[0],!iD(e))throw new TypeError(Ts("invalid argument. Options argument must be an object. Value: `%s`.",e));if(aD(e,"prng")){if(!nD(e.prng))throw new TypeError(Ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ss(e)}else{if(s=arguments[0],r=arguments[1],n=Cxr(s,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!iD(e))throw new TypeError(Ts("invalid argument. Options argument must be an object. Value: `%s`.",e));if(aD(e,"prng")){if(!nD(e.prng))throw new TypeError(Ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ss(e)}else t=Ss()}return s===void 0?i=h:i=g,Le(i,"NAME","gumbel"),e&&e.prng?(Le(i,"seed",null),Le(i,"seedLength",null),tD(i,"state",sD(null),kxr),Le(i,"stateLength",null),Le(i,"byteLength",null),Le(i,"toJSON",sD(null)),Le(i,"PRNG",t)):(As(i,"seed",u),As(i,"seedLength",o),tD(i,"state",c,l),As(i,"stateLength",f),As(i,"byteLength",v),Le(i,"toJSON",p),Le(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=jxr(t.state),s===void 0?d.params=[]:d.params=[s,r],d}function g(){return oD(t,s,r)}function h(d,m){return uD(d)||uD(m)||m<=0?NaN:oD(t,d,m)}}vD.exports=Vxr});var cD=a((rqe,fD)=>{"use strict";var Uxr=gv(),Gxr=Uxr();fD.exports=Gxr});var gD=a((eqe,pD)=>{"use strict";var Hxr=b(),lD=cD(),Wxr=gv();Hxr(lD,"factory",Wxr);pD.exports=lD});var dD=a((tqe,mD)=>{"use strict";var mv=jr().isPrimitive,Qn=y();function xxr(r,e,t){return mv(r)?mv(e)?mv(t)?t>r?new RangeError(Qn("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(Qn("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(Qn("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(Qn("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(Qn("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}mD.exports=xxr});var hD=a((iqe,Dxr)=>{Dxr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var yD=a((nqe,qD)=>{"use strict";var zxr=E(),Xxr=Lr(),Jxr=Li(),Yxr=I(),Zxr=hD(),$xr=170;function Qxr(r){return zxr(r)?NaN:Xxr(r)?r<0?NaN:r<=$xr?Zxr[r]:Yxr:Jxr(r+1)}qD.exports=Qxr});var wD=a((aqe,bD)=>{"use strict";var Kxr=yD();bD.exports=Kxr});var ND=a((sqe,ED)=>{"use strict";var bt=wD();function rDr(r,e,t,i){var n,s,u;for(i<t?(n=bt(t)*bt(e+t-i)/(bt(e+t)*bt(t-i)),u=0):(n=bt(e)*bt(i)/(bt(i-t)*bt(e+t)),u=i-t),s=r();s>n;)s-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}ED.exports=rDr});var AD=a((uqe,OD)=>{"use strict";var _s=ND();function eDr(r,e,t,i){var n,s,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,s=e-t,o=_s(r,n,s,u),t-o):(s=t,n=e-t,o=_s(r,n,s,u),i-e+t+o)):(u=i,2*t<=e?(n=t,s=e-t,o=_s(r,n,s,u),o):(n=e-t,s=t,o=_s(r,n,s,u),i-o))}OD.exports=eDr});var hv=a((oqe,FD)=>{"use strict";var Re=b(),Is=R(),SD=M(),TD=L(),_D=_(),ID=A(),LD=T(),tDr=C(),Ls=X().factory,dv=y1(),RD=I(),iDr=B(),Rs=y(),nDr=dD(),PD=AD();function aDr(){var r,e,t,i,n,s,u;if(arguments.length===0)e=Ls();else if(arguments.length===1){if(r=arguments[0],!TD(r))throw new TypeError(Rs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ID(r,"prng")){if(!_D(r.prng))throw new TypeError(Rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ls(r)}else{if(n=arguments[0],s=arguments[1],u=arguments[2],i=nDr(n,s,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!TD(r))throw new TypeError(Rs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ID(r,"prng")){if(!_D(r.prng))throw new TypeError(Rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ls(r)}else e=Ls()}return n===void 0?t=d:t=h,Re(t,"NAME","hypergeometric"),r&&r.prng?(Re(t,"seed",null),Re(t,"seedLength",null),SD(t,"state",LD(null),tDr),Re(t,"stateLength",null),Re(t,"byteLength",null),Re(t,"toJSON",LD(null)),Re(t,"PRNG",e)):(Is(t,"seed",o),Is(t,"seedLength",f),SD(t,"state",l,p),Is(t,"stateLength",v),Is(t,"byteLength",c),Re(t,"toJSON",g),Re(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=iDr(e.state),n===void 0?m.params=[]:m.params=[n,s,u],m}function h(){return PD(e,n,s,u)}function d(m,q,N){return m===RD||q===RD||!dv(m)||!dv(q)||!dv(N)||N>m?NaN:PD(e,m,q,N)}}FD.exports=aDr});var BD=a((vqe,MD)=>{"use strict";var sDr=hv(),uDr=sDr();MD.exports=uDr});var CD=a((fqe,jD)=>{"use strict";var oDr=b(),kD=BD(),vDr=hv();oDr(kD,"factory",vDr);jD.exports=kD});var HD=a((cqe,GD)=>{"use strict";var VD=D().isPrimitive,UD=y();function fDr(r,e){return VD(r)?VD(e)?null:new TypeError(UD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(UD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}GD.exports=fDr});var qv=a((lqe,YD)=>{"use strict";var wt=b(),Ps=R(),WD=M(),xD=L(),DD=_(),zD=A(),XD=T(),cDr=C(),Wi=ki().factory,JD=E(),lDr=B(),Fs=y(),pDr=HD();function gDr(){var r,e,t,i,n,s,u;if(arguments.length===0)r=Wi();else if(arguments.length===1){if(i=arguments[0],!xD(i))throw new TypeError(Fs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(zD(i,"prng")){if(!DD(i.prng))throw new TypeError(Fs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Wi({prng:i.prng})}else r=Wi(i)}else{if(e=arguments[0],t=arguments[1],u=pDr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!xD(i))throw new TypeError(Fs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(zD(i,"prng")){if(!DD(i.prng))throw new TypeError(Fs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Wi(e,t,{prng:i.prng})}else r=Wi(e,t,i)}else r=Wi(e,t)}return e===void 0?s=d:s=h,n=r.PRNG,wt(s,"NAME","invgamma"),i&&i.prng?(wt(s,"seed",null),wt(s,"seedLength",null),WD(s,"state",XD(null),cDr),wt(s,"stateLength",null),wt(s,"byteLength",null),wt(s,"toJSON",XD(null))):(Ps(s,"seed",o),Ps(s,"seedLength",f),WD(s,"state",l,p),Ps(s,"stateLength",v),Ps(s,"byteLength",c),wt(s,"toJSON",g)),wt(s,"PRNG",n),s;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=s.NAME,m.state=lDr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return 1/r()}function d(m,q){return JD(m)||JD(q)||m<=0||q<=0?NaN:1/r(m,q)}}YD.exports=gDr});var $D=a((pqe,ZD)=>{"use strict";var mDr=qv(),dDr=mDr();ZD.exports=dDr});var rz=a((gqe,KD)=>{"use strict";var hDr=b(),QD=$D(),qDr=qv();hDr(QD,"factory",qDr);KD.exports=QD});var nz=a((mqe,iz)=>{"use strict";var ez=D().isPrimitive,tz=y();function yDr(r,e){return ez(r)?ez(e)?null:new TypeError(tz("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(tz("invalid argument. First argument must be a positive number. Value: `%s`.",r))}iz.exports=yDr});var uz=a((dqe,sz)=>{"use strict";var az=W();function bDr(r,e,t){var i=r();return az(1-az(1-i,1/t),1/e)}sz.exports=bDr});var yv=a((hqe,mz)=>{"use strict";var Pe=b(),Ms=R(),oz=M(),vz=L(),fz=_(),cz=A(),lz=T(),wDr=C(),Bs=X().factory,pz=E(),EDr=B(),ks=y(),NDr=nz(),gz=uz();function ODr(){var r,e,t,i,n,s;if(arguments.length===0)e=Bs();else if(arguments.length===1){if(r=arguments[0],!vz(r))throw new TypeError(ks("invalid argument. Options argument must be an object. Value: `%s`.",r));if(cz(r,"prng")){if(!fz(r.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bs(r)}else{if(n=arguments[0],s=arguments[1],i=NDr(n,s),i)throw i;if(arguments.length>2){if(r=arguments[2],!vz(r))throw new TypeError(ks("invalid argument. Options argument must be an object. Value: `%s`.",r));if(cz(r,"prng")){if(!fz(r.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bs(r)}else e=Bs()}return n===void 0?t=h:t=g,Pe(t,"NAME","kumaraswamy"),r&&r.prng?(Pe(t,"seed",null),Pe(t,"seedLength",null),oz(t,"state",lz(null),wDr),Pe(t,"stateLength",null),Pe(t,"byteLength",null),Pe(t,"toJSON",lz(null)),Pe(t,"PRNG",e)):(Ms(t,"seed",u),Ms(t,"seedLength",o),oz(t,"state",c,l),Ms(t,"stateLength",f),Ms(t,"byteLength",v),Pe(t,"toJSON",p),Pe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=EDr(e.state),n===void 0?d.params=[]:d.params=[n,s],d}function g(){return gz(e,n,s)}function h(d,m){return pz(d)||pz(m)||d<=0||m<=0?NaN:gz(e,d,m)}}mz.exports=ODr});var hz=a((qqe,dz)=>{"use strict";var ADr=yv(),SDr=ADr();dz.exports=SDr});var bz=a((yqe,yz)=>{"use strict";var TDr=b(),qz=hz(),_Dr=yv();TDr(qz,"factory",_Dr);yz.exports=qz});var Nz=a((bqe,Ez)=>{"use strict";var IDr=j().isPrimitive,LDr=D().isPrimitive,wz=y(),RDr=vr();function PDr(r,e){return!IDr(r)||RDr(r)?new TypeError(wz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):LDr(e)?null:new TypeError(wz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Ez.exports=PDr});var Az=a((wqe,Oz)=>{"use strict";var FDr=z0(),MDr=Y(),BDr=P();function kDr(r,e,t){var i=r()-.5;return e-t*FDr(i)*BDr(1-2*MDr(i))}Oz.exports=kDr});var bv=a((Eqe,Fz)=>{"use strict";var Fe=b(),js=R(),Sz=M(),Tz=L(),_z=_(),Iz=A(),Lz=T(),jDr=C(),Cs=X().factory,Rz=E(),CDr=B(),Vs=y(),VDr=Nz(),Pz=Az();function UDr(){var r,e,t,i,n,s;if(arguments.length===0)e=Cs();else if(arguments.length===1){if(r=arguments[0],!Tz(r))throw new TypeError(Vs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Iz(r,"prng")){if(!_z(r.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Cs(r)}else{if(n=arguments[0],s=arguments[1],i=VDr(n,s),i)throw i;if(arguments.length>2){if(r=arguments[2],!Tz(r))throw new TypeError(Vs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Iz(r,"prng")){if(!_z(r.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Cs(r)}else e=Cs()}return n===void 0?t=h:t=g,Fe(t,"NAME","laplace"),r&&r.prng?(Fe(t,"seed",null),Fe(t,"seedLength",null),Sz(t,"state",Lz(null),jDr),Fe(t,"stateLength",null),Fe(t,"byteLength",null),Fe(t,"toJSON",Lz(null)),Fe(t,"PRNG",e)):(js(t,"seed",u),js(t,"seedLength",o),Sz(t,"state",c,l),js(t,"stateLength",f),js(t,"byteLength",v),Fe(t,"toJSON",p),Fe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=CDr(e.state),n===void 0?d.params=[]:d.params=[n,s],d}function g(){return Pz(e,n,s)}function h(d,m){return Rz(d)||Rz(m)||m<=0?NaN:Pz(e,d,m)}}Fz.exports=UDr});var Bz=a((Nqe,Mz)=>{"use strict";var GDr=bv(),HDr=GDr();Mz.exports=HDr});var Cz=a((Oqe,jz)=>{"use strict";var WDr=b(),kz=Bz(),xDr=bv();WDr(kz,"factory",xDr);jz.exports=kz});var Gz=a((Aqe,Uz)=>{"use strict";var DDr=j().isPrimitive,zDr=D().isPrimitive,Vz=y(),XDr=vr();function JDr(r,e){return!DDr(r)||XDr(r)?new TypeError(Vz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):zDr(e)?null:new TypeError(Vz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Uz.exports=JDr});var Wz=a((Sqe,Hz)=>{"use strict";function YDr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}Hz.exports=YDr});var Dz=a((Tqe,xz)=>{"use strict";function ZDr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}xz.exports=ZDr});var Xz=a((_qe,zz)=>{"use strict";function $Dr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}zz.exports=$Dr});var Yz=a((Iqe,Jz)=>{"use strict";function QDr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}Jz.exports=QDr});var $z=a((Lqe,Zz)=>{"use strict";function KDr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}Zz.exports=KDr});var eX=a((Rqe,rX)=>{"use strict";var rzr=E(),Qz=U(),Kz=P(),ezr=I(),tzr=V(),izr=Wz(),nzr=Dz(),azr=Xz(),szr=Yz(),uzr=$z(),ozr=.08913147449493408,vzr=2.249481201171875,fzr=.807220458984375,czr=.9399557113647461,lzr=.9836282730102539;function pzr(r){var e,t,i,n,s,u;return rzr(r)?NaN:r===1?ezr:r===-1?tzr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(s=t*(t+10),u=izr(t),e*(s*ozr+s*u)):n>=.25?(s=Qz(-2*Kz(n)),n-=.25,u=nzr(n),e*(s/(vzr+u))):(n=Qz(-Kz(n)),n<3?(i=n-1.125,u=azr(i),e*(fzr*n+u*n)):n<6?(i=n-3,u=szr(i),e*(czr*n+u*n)):(i=n-6,u=uzr(i),e*(lzr*n+u*n))))}rX.exports=pzr});var wv=a((Pqe,tX)=>{"use strict";var gzr=eX();tX.exports=gzr});var nX=a((Fqe,iX)=>{"use strict";var mzr=wv(),Ev=E(),dzr=U();function hzr(r,e,t){var i,n;return Ev(e)||Ev(t)||Ev(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*dzr(2),i+n*mzr(2*r-1))}iX.exports=hzr});var sX=a((Mqe,aX)=>{"use strict";var qzr=T(),yzr=rv().factory,bzr=wv(),Nv=E(),wzr=U();function Ezr(r,e){var t,i;if(Nv(r)||Nv(e)||e<0)return qzr(NaN);return e===0&&yzr(r),t=r,i=e*wzr(2),n;function n(s){return Nv(s)||s<0||s>1?NaN:t+i*bzr(2*s-1)}}aX.exports=Ezr});var Ov=a((Bqe,oX)=>{"use strict";var Nzr=b(),uX=nX(),Ozr=sX();Nzr(uX,"factory",Ozr);oX.exports=uX});var fX=a((kqe,vX)=>{"use strict";var Azr=Ov();function Szr(r,e,t){var i=Azr(1-r()/2,0,1);return e+t/(i*i)}vX.exports=Szr});var Av=a((jqe,qX)=>{"use strict";var Me=b(),Us=R(),cX=M(),lX=L(),pX=_(),gX=A(),mX=T(),Tzr=C(),Gs=X().factory,dX=E(),_zr=B(),Hs=y(),Izr=Gz(),hX=fX();function Lzr(){var r,e,t,i,n,s;if(arguments.length===0)e=Gs();else if(arguments.length===1){if(r=arguments[0],!lX(r))throw new TypeError(Hs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(gX(r,"prng")){if(!pX(r.prng))throw new TypeError(Hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Gs(r)}else{if(n=arguments[0],s=arguments[1],i=Izr(n,s),i)throw i;if(arguments.length>2){if(r=arguments[2],!lX(r))throw new TypeError(Hs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(gX(r,"prng")){if(!pX(r.prng))throw new TypeError(Hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Gs(r)}else e=Gs()}return n===void 0?t=h:t=g,Me(t,"NAME","levy"),r&&r.prng?(Me(t,"seed",null),Me(t,"seedLength",null),cX(t,"state",mX(null),Tzr),Me(t,"stateLength",null),Me(t,"byteLength",null),Me(t,"toJSON",mX(null)),Me(t,"PRNG",e)):(Us(t,"seed",u),Us(t,"seedLength",o),cX(t,"state",c,l),Us(t,"stateLength",f),Us(t,"byteLength",v),Me(t,"toJSON",p),Me(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=_zr(e.state),n===void 0?d.params=[]:d.params=[n,s],d}function g(){return hX(e,n,s)}function h(d,m){return dX(d)||dX(m)||m<=0?NaN:hX(e,d,m)}}qX.exports=Lzr});var bX=a((Cqe,yX)=>{"use strict";var Rzr=Av(),Pzr=Rzr();yX.exports=Pzr});var NX=a((Vqe,EX)=>{"use strict";var Fzr=b(),wX=bX(),Mzr=Av();Fzr(wX,"factory",Mzr);EX.exports=wX});var SX=a((Uqe,AX)=>{"use strict";var Bzr=j().isPrimitive,kzr=D().isPrimitive,jzr=vr(),OX=y();function Czr(r,e){return!Bzr(r)||jzr(r)?new TypeError(OX("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):kzr(e)?null:new TypeError(OX("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}AX.exports=Czr});var _X=a((Gqe,TX)=>{"use strict";var Vzr=P();function Uzr(r,e,t){var i=r();return e+t*Vzr(i/(1-i))}TX.exports=Uzr});var Sv=a((Hqe,kX)=>{"use strict";var Be=b(),Ws=R(),IX=M(),LX=L(),RX=_(),PX=A(),FX=T(),Gzr=C(),xs=X().factory,MX=E(),Hzr=B(),Ds=y(),Wzr=SX(),BX=_X();function xzr(){var r,e,t,i,n,s;if(arguments.length===0)e=xs();else if(arguments.length===1){if(r=arguments[0],!LX(r))throw new TypeError(Ds("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PX(r,"prng")){if(!RX(r.prng))throw new TypeError(Ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=xs(r)}else{if(n=arguments[0],s=arguments[1],i=Wzr(n,s),i)throw i;if(arguments.length>2){if(r=arguments[2],!LX(r))throw new TypeError(Ds("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PX(r,"prng")){if(!RX(r.prng))throw new TypeError(Ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=xs(r)}else e=xs()}return n===void 0?t=h:t=g,Be(t,"NAME","logistic"),r&&r.prng?(Be(t,"seed",null),Be(t,"seedLength",null),IX(t,"state",FX(null),Gzr),Be(t,"stateLength",null),Be(t,"byteLength",null),Be(t,"toJSON",FX(null)),Be(t,"PRNG",e)):(Ws(t,"seed",u),Ws(t,"seedLength",o),IX(t,"state",c,l),Ws(t,"stateLength",f),Ws(t,"byteLength",v),Be(t,"toJSON",p),Be(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Hzr(e.state),n===void 0?d.params=[]:d.params=[n,s],d}function g(){return BX(e,n,s)}function h(d,m){return MX(d)||MX(m)||m<=0?NaN:BX(e,d,m)}}kX.exports=xzr});var CX=a((Wqe,jX)=>{"use strict";var Dzr=Sv(),zzr=Dzr();jX.exports=zzr});var GX=a((xqe,UX)=>{"use strict";var Xzr=b(),VX=CX(),Jzr=Sv();Xzr(VX,"factory",Jzr);UX.exports=VX});var xX=a((Dqe,WX)=>{"use strict";var Yzr=j().isPrimitive,Zzr=D().isPrimitive,HX=y(),$zr=vr();function Qzr(r,e){return!Yzr(r)||$zr(r)?new TypeError(HX("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Zzr(e)?null:new TypeError(HX("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}WX.exports=Qzr});var zX=a((zqe,DX)=>{"use strict";var Kzr=sr();function rXr(r,e,t){return Kzr(e+t*r())}DX.exports=rXr});var Tv=a((Xqe,rJ)=>{"use strict";var Et=b(),zs=R(),XX=M(),JX=L(),YX=_(),ZX=A(),$X=T(),eXr=C(),xi=pt().factory,QX=E(),tXr=B(),Xs=y(),iXr=xX(),KX=zX();function nXr(){var r,e,t,i,n,s,u;if(arguments.length===0)e=xi();else if(arguments.length===1){if(t=arguments[0],!JX(t))throw new TypeError(Xs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(ZX(t,"prng")){if(!YX(t.prng))throw new TypeError(Xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=xi({prng:t.prng})}else e=xi(t)}else{if(u=arguments[0],r=arguments[1],s=iXr(u,r),s)throw s;if(arguments.length>2){if(t=arguments[2],!JX(t))throw new TypeError(Xs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(ZX(t,"prng")){if(!YX(t.prng))throw new TypeError(Xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=xi({prng:t.prng})}else e=xi(t)}else e=xi()}return u===void 0?n=d:n=h,i=e.PRNG,Et(n,"NAME","lognormal"),t&&t.prng?(Et(n,"seed",null),Et(n,"seedLength",null),XX(n,"state",$X(null),eXr),Et(n,"stateLength",null),Et(n,"byteLength",null),Et(n,"toJSON",$X(null))):(zs(n,"seed",o),zs(n,"seedLength",f),XX(n,"state",l,p),zs(n,"stateLength",v),zs(n,"byteLength",c),Et(n,"toJSON",g)),Et(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=tXr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return KX(e,u,r)}function d(m,q){return QX(m)||QX(q)||q<=0?NaN:KX(e,m,q)}}rJ.exports=nXr});var tJ=a((Jqe,eJ)=>{"use strict";var aXr=Tv(),sXr=aXr();eJ.exports=sXr});var aJ=a((Yqe,nJ)=>{"use strict";var uXr=b(),iJ=tJ(),oXr=Tv();uXr(iJ,"factory",oXr);nJ.exports=iJ});var _v=a((Zqe,sJ)=>{"use strict";var vXr=ti(),fXr=J(),cXr=vXr-1;function lXr(){var r=fXr(1+cXr*Math.random());return r|0}sJ.exports=lXr});var Rv=a(($qe,cJ)=>{"use strict";var ke=b(),Nt=R(),uJ=M(),Iv=A(),pXr=L(),gXr=gr().isPrimitive,mXr=Wr(),dXr=re().isPrimitive,oJ=pa(),Xr=y(),Js=ti(),Er=Xe(),Di=ot(),hXr=B(),vJ=_v(),Lv=Js-1|0,qXr=Js-1|0,yXr=16807,Ys=1,Zs=2,Ot=2,Nr=4,Kn=5;function fJ(r,e){var t;return e?t="option":t="argument",r.length<Kn+1?new RangeError(Xr("invalid %s. State array has insufficient length.",t)):r[0]!==Ys?new RangeError(Xr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ys,r[0])):r[1]!==Zs?new RangeError(Xr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Zs,r[1])):r[Ot]!==1?new RangeError(Xr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[Ot])):r[Nr]!==r.length-Kn?new RangeError(Xr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Kn,r[Nr])):null}function bXr(r){var e,t,i,n,s,u;if(i={},arguments.length){if(!pXr(r))throw new TypeError(Xr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Iv(r,"copy")&&(i.copy=r.copy,!gXr(r.copy)))throw new TypeError(Xr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Iv(r,"state")){if(t=r.state,i.state=!0,!oJ(t))throw new TypeError(Xr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=fJ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Er(t.length),Di(t.length,t,1,e,1)),t=new Er(e.buffer,e.byteOffset+(Ot+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,t[Nr])}if(n===void 0)if(Iv(r,"seed"))if(n=r.seed,i.seed=!0,dXr(n)){if(n>qXr)throw new RangeError(Xr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(mXr(n)&&n.length>0)s=n.length,e=new Er(Kn+s),e[0]=Ys,e[1]=Zs,e[Ot]=1,e[Nr]=s,Di.ndarray(s,n,1,0,e,1,Nr+1),t=new Er(e.buffer,e.byteOffset+(Ot+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,s),t[0]=n[0];else throw new TypeError(Xr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=vJ()|0}else n=vJ()|0;return t===void 0&&(e=new Er(Kn+1),e[0]=Ys,e[1]=Zs,e[Ot]=1,e[Nr]=1,e[Nr+1]=n,t=new Er(e.buffer,e.byteOffset+(Ot+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),ke(h,"NAME","minstd"),Nt(h,"seed",o),Nt(h,"seedLength",f),uJ(h,"state",l,p),Nt(h,"stateLength",v),Nt(h,"byteLength",c),ke(h,"toJSON",g),ke(h,"MIN",1),ke(h,"MAX",Js-1),ke(h,"normalized",d),ke(d,"NAME",h.NAME),Nt(d,"seed",o),Nt(d,"seedLength",f),uJ(d,"state",l,p),Nt(d,"stateLength",v),Nt(d,"byteLength",c),ke(d,"toJSON",g),ke(d,"MIN",(h.MIN-1)/Lv),ke(d,"MAX",(h.MAX-1)/Lv),h;function o(){var m=e[Nr];return Di(m,n,1,new Er(m),1)}function f(){return e[Nr]}function v(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return Di(m,e,1,new Er(m),1)}function p(m){var q;if(!oJ(m))throw new TypeError(Xr("invalid argument. Must provide an Int32Array. Value: `%s`.",m));if(q=fJ(m,!1),q)throw q;i.copy===!1?i.state&&m.length===e.length?Di(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new Er(m.length)),Di(m.length,m,1,e,1)),t=new Er(e.buffer,e.byteOffset+(Ot+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,e[Nr])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=hXr(e),m.params=[],m}function h(){var m=t[0]|0;return m=yXr*m%Js|0,t[0]=m,m|0}function d(){return(h()-1)/Lv}}cJ.exports=bXr});var pJ=a((Qqe,lJ)=>{"use strict";var wXr=Rv(),EXr=_v(),NXr=wXr({seed:EXr()});lJ.exports=NXr});var dJ=a((Kqe,mJ)=>{"use strict";var OXr=b(),gJ=pJ(),AXr=Rv();OXr(gJ,"factory",AXr);mJ.exports=gJ});var qJ=a((rye,hJ)=>{"use strict";var SXr=E(),TXr=8;function _Xr(r,e,t){var i,n;for(n=0;n<TXr;n++)if(i=r(),SXr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}hJ.exports=_Xr});var Pv=a((eye,yJ)=>{"use strict";var IXr=ti(),LXr=J(),RXr=IXr-1;function PXr(){var r=LXr(1+RXr*Math.random());return r|0}yJ.exports=PXr});var Bv=a((tye,AJ)=>{"use strict";var je=b(),At=R(),bJ=M(),Fv=A(),FXr=L(),MXr=gr().isPrimitive,BXr=Wr(),kXr=re().isPrimitive,wJ=pa(),zi=ot(),jXr=J(),Or=Xe(),ra=ti(),CXr=B(),Hr=y(),EJ=qJ(),NJ=Pv(),Mv=ra-1|0,VXr=ra-1|0,UXr=16807,Sr=32,Ks=1,ru=3,St=2,Xi=Sr+3,Ar=Sr+6,ea=Sr+7,$s=Xi+1,Qs=Xi+2;function OJ(r,e){var t;return e?t="option":t="argument",r.length<ea+1?new RangeError(Hr("invalid %s. State array has insufficient length.",t)):r[0]!==Ks?new RangeError(Hr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ks,r[0])):r[1]!==ru?new RangeError(Hr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,ru,r[1])):r[St]!==Sr?new RangeError(Hr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Sr,r[St])):r[Xi]!==2?new RangeError(Hr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[Xi])):r[Ar]!==r.length-ea?new RangeError(Hr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-ea,r[Ar])):null}function GXr(r){var e,t,i,n,s,u;if(i={},arguments.length){if(!FXr(r))throw new TypeError(Hr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Fv(r,"copy")&&(i.copy=r.copy,!MXr(r.copy)))throw new TypeError(Hr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Fv(r,"state")){if(t=r.state,i.state=!0,!wJ(t))throw new TypeError(Hr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=OJ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Or(t.length),zi(t.length,t,1,e,1)),t=new Or(e.buffer,e.byteOffset+(St+1)*e.BYTES_PER_ELEMENT,Sr),n=new Or(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,t[Ar])}if(n===void 0)if(Fv(r,"seed"))if(n=r.seed,i.seed=!0,kXr(n)){if(n>VXr)throw new RangeError(Hr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(BXr(n)&&n.length>0)s=n.length,e=new Or(ea+s),e[0]=Ks,e[1]=ru,e[St]=Sr,e[Xi]=2,e[Qs]=n[0],e[Ar]=s,zi.ndarray(s,n,1,0,e,1,Ar+1),t=new Or(e.buffer,e.byteOffset+(St+1)*e.BYTES_PER_ELEMENT,Sr),n=new Or(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,s),t=EJ(h,t,Sr),e[$s]=t[0];else throw new TypeError(Hr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=NJ()|0}else n=NJ()|0;return t===void 0&&(e=new Or(ea+1),e[0]=Ks,e[1]=ru,e[St]=Sr,e[Xi]=2,e[Qs]=n,e[Ar]=1,e[Ar+1]=n,t=new Or(e.buffer,e.byteOffset+(St+1)*e.BYTES_PER_ELEMENT,Sr),n=new Or(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,1),t=EJ(h,t,Sr),e[$s]=t[0]),je(d,"NAME","minstd-shuffle"),At(d,"seed",o),At(d,"seedLength",f),bJ(d,"state",l,p),At(d,"stateLength",v),At(d,"byteLength",c),je(d,"toJSON",g),je(d,"MIN",1),je(d,"MAX",ra-1),je(d,"normalized",m),je(m,"NAME",d.NAME),At(m,"seed",o),At(m,"seedLength",f),bJ(m,"state",l,p),At(m,"stateLength",v),At(m,"byteLength",c),je(m,"toJSON",g),je(m,"MIN",(d.MIN-1)/Mv),je(m,"MAX",(d.MAX-1)/Mv),d;function o(){var q=e[Ar];return zi(q,n,1,new Or(q),1)}function f(){return e[Ar]}function v(){return e.length}function c(){return e.byteLength}function l(){var q=e.length;return zi(q,e,1,new Or(q),1)}function p(q){var N;if(!wJ(q))throw new TypeError(Hr("invalid argument. Must provide an Int32Array. Value: `%s`.",q));if(N=OJ(q,!1),N)throw N;i.copy===!1?i.state&&q.length===e.length?zi(q.length,q,1,e,1):(e=q,i.state=!0):(q.length!==e.length&&(e=new Or(q.length)),zi(q.length,q,1,e,1)),t=new Or(e.buffer,e.byteOffset+(St+1)*e.BYTES_PER_ELEMENT,Sr),n=new Or(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,e[Ar])}function g(){var q={};return q.type="PRNG",q.name=d.NAME,q.state=CXr(e),q.params=[],q}function h(){var q=e[Qs]|0;return q=UXr*q%ra|0,e[Qs]=q,q|0}function d(){var q,N;return q=e[$s],N=jXr(Sr*(q/ra)),q=t[N],e[$s]=q,t[N]=h(),q}function m(){return(d()-1)/Mv}}AJ.exports=GXr});var TJ=a((iye,SJ)=>{"use strict";var HXr=Bv(),WXr=Pv(),xXr=HXr({seed:WXr()});SJ.exports=xXr});var LJ=a((nye,IJ)=>{"use strict";var DXr=b(),_J=TJ(),zXr=Bv();DXr(_J,"factory",zXr);IJ.exports=_J});var PJ=a((aye,RJ)=>{"use strict";var XXr=sr();function JXr(r,e){for(var t=r(),i=1;t>XXr(-e);)i+=1,t*=r();return i-1}RJ.exports=JXr});var MJ=a((sye,FJ)=>{"use strict";var YXr=J();function ZXr(r){return YXr(r)===r&&r<0}FJ.exports=ZXr});var kJ=a((uye,BJ)=>{"use strict";var $Xr=MJ();BJ.exports=$Xr});var CJ=a((oye,jJ)=>{"use strict";var QXr=kJ(),KXr=Cn();function rJr(r){return QXr(r)?NaN:KXr(r+1)}jJ.exports=rJr});var UJ=a((vye,VJ)=>{"use strict";var eJr=CJ();VJ.exports=eJr});var xJ=a((fye,WJ)=>{"use strict";var tJr=UJ(),GJ=J(),iJr=z0(),nJr=U(),HJ=Y(),eu=P(),aJr=x1(),sJr=1/12,uJr=1/360;function oJr(r,e){var t,i,n,s,u,o,f,v,c,l;for(t=nJr(e),f=2.53*t+.931,o=.02483*f-.059,i=1.1328/(f-3.4)+1.1239,u=-3.6224/(f-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-HJ(c))+f,c+=e+.445,GJ(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=iJr(c)*.5-c,l=u*r()),s=.5-HJ(c),(s>=.013||s>=l)&&(v=GJ((2*o/s+f)*c+e+.445),l*=i/(o/(s*s)+f),c=(v+.5)*eu(e/v),c+=-e-aJr+v,c-=(sJr-uJr/(v*v))/v,v>=10&&c>=eu(l*t)||(c=v*eu(e)-e-tJr(v),v>=0&&v<=9&&c>=eu(l))))return v}}WJ.exports=oJr});var zJ=a((cye,DJ)=>{"use strict";var vJr=PJ(),fJr=xJ();function cJr(r,e){return e<30?vJr(r,e):fJr(r,e)}DJ.exports=cJr});var kv=a((lye,KJ)=>{"use strict";var Ce=b(),tu=R(),XJ=M(),lJr=D().isPrimitive,JJ=L(),YJ=_(),ZJ=A(),$J=T(),pJr=C(),iu=X().factory,gJr=E(),mJr=B(),nu=y(),QJ=zJ();function dJr(){var r,e,t,i;if(arguments.length===0)t=iu();else if(arguments.length===1&&JJ(arguments[0]))if(e=arguments[0],ZJ(e,"prng")){if(!YJ(e.prng))throw new TypeError(nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=iu(e);else{if(r=arguments[0],!lJr(r))throw new TypeError(nu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!JJ(e))throw new TypeError(nu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ZJ(e,"prng")){if(!YJ(e.prng))throw new TypeError(nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=iu(e)}else t=iu()}return r===void 0?i=p:i=l,Ce(i,"NAME","poisson"),e&&e.prng?(Ce(i,"seed",null),Ce(i,"seedLength",null),XJ(i,"state",$J(null),pJr),Ce(i,"stateLength",null),Ce(i,"byteLength",null),Ce(i,"toJSON",$J(null)),Ce(i,"PRNG",t)):(tu(i,"seed",n),tu(i,"seedLength",s),XJ(i,"state",f,v),tu(i,"stateLength",u),tu(i,"byteLength",o),Ce(i,"toJSON",c),Ce(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function s(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=mJr(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return QJ(t,r)}function p(g){return gJr(g)||g<=0?NaN:QJ(t,g)}}KJ.exports=dJr});var eY=a((pye,rY)=>{"use strict";var hJr=kv(),qJr=hJr();rY.exports=qJr});var jv=a((gye,iY)=>{"use strict";var yJr=b(),tY=eY(),bJr=kv();yJr(tY,"factory",bJr);iY.exports=tY});var aY=a((mye,nY)=>{"use strict";var wJr=D().isPrimitive,EJr=j().isPrimitive,Cv=y(),NJr=vr();function OJr(r,e){return wJr(r)?!EJr(e)||NJr(e)?new TypeError(Cv("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Cv("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Cv("invalid argument. First argument must be a positive number. Value: `%s`.",r))}nY.exports=OJr});var Hv=a((dye,pY)=>{"use strict";var Tt=b(),au=R(),sY=M(),Ji=A(),uY=L(),Vv=ve(),oY=gr().isPrimitive,vY=_(),fY=T(),AJr=C(),cY=E(),Yi=jv().factory,su=ki().factory,Uv=ot(),Gv=lr(),lY=Jn(),SJr=B(),Ve=y(),TJr=aY();function _Jr(){var r,e,t,i,n,s,u,o,f,v;if(u=!0,arguments.length===0)i={copy:!1},t=Yi(i);else if(arguments.length===1){if(i=arguments[0],!uY(i))throw new TypeError(Ve("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ji(i,"copy")&&!oY(i.copy))throw new TypeError(Ve("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ji(i,"prng")){if(!vY(i.prng))throw new TypeError(Ve("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Yi({prng:i.prng})}else{if(Ji(i,"state")&&!Vv(i.state))throw new TypeError(Ve("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=lY({},i),i.copy===!1?u=!1:i.state&&(i.state=Uv(i.state.length,i.state,1,new Gv(i.state.length),1)),i.copy=!1,t=Yi(i)}}else{if(v=arguments[0],f=arguments[1],o=TJr(v,f),o)throw o;if(arguments.length>2){if(i=arguments[2],!uY(i))throw new TypeError(Ve("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ji(i,"copy")&&!oY(i.copy))throw new TypeError(Ve("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ji(i,"prng")){if(!vY(i.prng))throw new TypeError(Ve("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Yi({prng:i.prng})}else{if(Ji(i,"state")&&!Vv(i.state))throw new TypeError(Ve("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=lY({},i),i.copy===!1?u=!1:i.state&&(i.state=Uv(i.state.length,i.state,1,new Gv(i.state.length),1)),i.copy=!1,t=Yi(i)}}else i={copy:!1},t=Yi(i)}return i&&i.prng?v===void 0?r=su({prng:i.prng}):r=su(v,f/(1-f),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),v===void 0?r=su({state:e,copy:!1}):r=su(v,f/(1-f),{state:e,copy:!1})),v===void 0?n=N:n=q,s=t.PRNG,Tt(n,"NAME","negative-binomial"),i&&i.prng?(Tt(n,"seed",null),Tt(n,"seedLength",null),sY(n,"state",fY(null),AJr),Tt(n,"stateLength",null),Tt(n,"byteLength",null),Tt(n,"toJSON",fY(null))):(au(n,"seed",c),au(n,"seedLength",l),sY(n,"state",h,d),au(n,"stateLength",p),au(n,"byteLength",g),Tt(n,"toJSON",m)),Tt(n,"PRNG",s),n;function c(){return s.seed}function l(){return s.seedLength}function p(){return s.stateLength}function g(){return s.byteLength}function h(){return s.state}function d(O){if(!Vv(O))throw new TypeError(Ve("invalid argument. Must provide a Uint32Array. Value: `%s`.",O));u&&(O=Uv(O.length,O,1,new Gv(O.length),1)),s.state=O}function m(){var O={};return O.type="PRNG",O.name=n.NAME,O.state=SJr(s.state),v===void 0?O.params=[]:O.params=[v,f],O}function q(){return t(r())}function N(O,F){return cY(O)||cY(F)||F<=0||F>=1?NaN:t(r(O,F/(1-F)))}}pY.exports=_Jr});var mY=a((hye,gY)=>{"use strict";var IJr=Hv(),LJr=IJr();gY.exports=LJr});var qY=a((qye,hY)=>{"use strict";var RJr=b(),dY=mY(),PJr=Hv();RJr(dY,"factory",PJr);hY.exports=dY});var wY=a((yye,bY)=>{"use strict";var FJr=j().isPrimitive,MJr=D().isPrimitive,yY=y(),BJr=vr();function kJr(r,e){return!FJr(r)||BJr(r)?new TypeError(yY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):MJr(e)?null:new TypeError(yY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}bY.exports=kJr});var NY=a((bye,EY)=>{"use strict";function jJr(r,e,t){return e+t*r()}EY.exports=jJr});var Wv=a((wye,RY)=>{"use strict";var _t=b(),uu=R(),OY=M(),AY=L(),SY=_(),TY=A(),_Y=T(),CJr=C(),Zi=pt().factory,IY=E(),VJr=B(),ou=y(),UJr=wY(),LY=NY();function GJr(){var r,e,t,i,n,s,u;if(arguments.length===0)e=Zi();else if(arguments.length===1){if(t=arguments[0],!AY(t))throw new TypeError(ou("invalid argument. Options argument must be an object. Value: `%s`.",t));if(TY(t,"prng")){if(!SY(t.prng))throw new TypeError(ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Zi({prng:t.prng})}else e=Zi(t)}else{if(u=arguments[0],r=arguments[1],s=UJr(u,r),s)throw s;if(arguments.length>2){if(t=arguments[2],!AY(t))throw new TypeError(ou("invalid argument. Options argument must be an object. Value: `%s`.",t));if(TY(t,"prng")){if(!SY(t.prng))throw new TypeError(ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Zi({prng:t.prng})}else e=Zi(t)}else e=Zi()}return u===void 0?n=d:n=h,i=e.PRNG,_t(n,"NAME","normal"),t&&t.prng?(_t(n,"seed",null),_t(n,"seedLength",null),OY(n,"state",_Y(null),CJr),_t(n,"stateLength",null),_t(n,"byteLength",null),_t(n,"toJSON",_Y(null))):(uu(n,"seed",o),uu(n,"seedLength",f),OY(n,"state",l,p),uu(n,"stateLength",v),uu(n,"byteLength",c),_t(n,"toJSON",g)),_t(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=VJr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return LY(e,u,r)}function d(m,q){return IY(m)||IY(q)||q<=0?NaN:LY(e,m,q)}}RY.exports=GJr});var FY=a((Eye,PY)=>{"use strict";var HJr=Wv(),WJr=HJr();PY.exports=WJr});var kY=a((Nye,BY)=>{"use strict";var xJr=b(),MY=FY(),DJr=Wv();xJr(MY,"factory",DJr);BY.exports=MY});var UY=a((Oye,VY)=>{"use strict";var jY=D().isPrimitive,CY=y();function zJr(r,e){return jY(r)?jY(e)?null:new TypeError(CY("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(CY("invalid argument. First argument must be a positive number. Value: `%s`.",r))}VY.exports=zJr});var HY=a((Aye,GY)=>{"use strict";var XJr=W();function JJr(r,e,t){return t/XJr(r(),1/e)}GY.exports=JJr});var xv=a((Sye,ZY)=>{"use strict";var Ue=b(),vu=R(),WY=M(),xY=L(),DY=_(),zY=A(),XY=T(),YJr=C(),fu=X().factory,JY=E(),ZJr=B(),cu=y(),$Jr=UY(),YY=HY();function QJr(){var r,e,t,i,n,s;if(arguments.length===0)i=fu();else if(arguments.length===1){if(t=arguments[0],!xY(t))throw new TypeError(cu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(zY(t,"prng")){if(!DY(t.prng))throw new TypeError(cu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=fu(t)}else{if(r=arguments[0],e=arguments[1],s=$Jr(r,e),s)throw s;if(arguments.length>2){if(t=arguments[2],!xY(t))throw new TypeError(cu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(zY(t,"prng")){if(!DY(t.prng))throw new TypeError(cu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=fu(t)}else i=fu()}return r===void 0?n=h:n=g,Ue(n,"NAME","pareto-type1"),t&&t.prng?(Ue(n,"seed",null),Ue(n,"seedLength",null),WY(n,"state",XY(null),YJr),Ue(n,"stateLength",null),Ue(n,"byteLength",null),Ue(n,"toJSON",XY(null)),Ue(n,"PRNG",i)):(vu(n,"seed",u),vu(n,"seedLength",o),WY(n,"state",c,l),vu(n,"stateLength",f),vu(n,"byteLength",v),Ue(n,"toJSON",p),Ue(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function f(){return i.stateLength}function v(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=ZJr(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function g(){return YY(i,r,e)}function h(d,m){return JY(d)||JY(m)||d<=0||m<=0?NaN:YY(i,d,m)}}ZY.exports=QJr});var QY=a((Tye,$Y)=>{"use strict";var KJr=xv(),rYr=KJr();$Y.exports=rYr});var eZ=a((_ye,rZ)=>{"use strict";var eYr=b(),KY=QY(),tYr=xv();eYr(KY,"factory",tYr);rZ.exports=KY});var iZ=a((Iye,tZ)=>{"use strict";var iYr=U(),nYr=P();function aYr(r,e){return e*iYr(-2*nYr(r()))}tZ.exports=aYr});var Dv=a((Lye,fZ)=>{"use strict";var Ge=b(),lu=R(),nZ=M(),sYr=D().isPrimitive,aZ=L(),sZ=_(),uZ=A(),oZ=T(),uYr=C(),pu=X().factory,oYr=E(),vYr=B(),gu=y(),vZ=iZ();function fYr(){var r,e,t,i;if(arguments.length===0)t=pu();else if(arguments.length===1&&aZ(arguments[0]))if(e=arguments[0],uZ(e,"prng")){if(!sZ(e.prng))throw new TypeError(gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=pu(e);else{if(r=arguments[0],!sYr(r))throw new TypeError(gu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!aZ(e))throw new TypeError(gu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(uZ(e,"prng")){if(!sZ(e.prng))throw new TypeError(gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=pu(e)}else t=pu()}return r===void 0?i=p:i=l,Ge(i,"NAME","rayleigh"),e&&e.prng?(Ge(i,"seed",null),Ge(i,"seedLength",null),nZ(i,"state",oZ(null),uYr),Ge(i,"stateLength",null),Ge(i,"byteLength",null),Ge(i,"toJSON",oZ(null)),Ge(i,"PRNG",t)):(lu(i,"seed",n),lu(i,"seedLength",s),nZ(i,"state",f,v),lu(i,"stateLength",u),lu(i,"byteLength",o),Ge(i,"toJSON",c),Ge(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function s(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=vYr(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return vZ(t,r)}function p(g){return oYr(g)||g<=0?NaN:vZ(t,g)}}fZ.exports=fYr});var lZ=a((Rye,cZ)=>{"use strict";var cYr=Dv(),lYr=cYr();cZ.exports=lYr});var mZ=a((Pye,gZ)=>{"use strict";var pYr=b(),pZ=lZ(),gYr=Dv();pYr(pZ,"factory",gYr);gZ.exports=pZ});var Yv=a((Fye,OZ)=>{"use strict";var It=b(),mu=R(),dZ=M(),$i=A(),hZ=D().isPrimitive,qZ=L(),zv=ve(),yZ=gr().isPrimitive,mYr=E(),bZ=_(),wZ=T(),dYr=C(),du=$n().factory,Qi=pt().factory,Xv=ot(),Jv=lr(),EZ=Jn(),hYr=B(),ae=y(),NZ=U();function qYr(){var r,e,t,i,n,s,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=Qi(n);else if(arguments.length===1)if(qZ(arguments[0])){if(n=arguments[0],$i(n,"copy")&&!yZ(n.copy))throw new TypeError(ae("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if($i(n,"prng")){if(!bZ(n.prng))throw new TypeError(ae("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Qi({prng:n.prng})}else{if($i(n,"state")&&!zv(n.state))throw new TypeError(ae("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=EZ({},n),n.copy===!1?u=!1:n.state&&(n.state=Xv(n.state.length,n.state,1,new Jv(n.state.length),1)),n.copy=!1,t=Qi(n)}}else{if(o=arguments[0],!hZ(o))throw new TypeError(ae("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=Qi(n)}else{if(o=arguments[0],!hZ(o))throw new TypeError(ae("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!qZ(n))throw new TypeError(ae("invalid argument. Options argument must be an object. Value: `%s`.",n));if($i(n,"copy")&&!yZ(n.copy))throw new TypeError(ae("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if($i(n,"prng")){if(!bZ(n.prng))throw new TypeError(ae("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Qi({prng:n.prng})}else{if($i(n,"state")&&!zv(n.state))throw new TypeError(ae("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=EZ({},n),n.copy===!1?u=!1:n.state&&(n.state=Xv(n.state.length,n.state,1,new Jv(n.state.length),1)),n.copy=!1,t=Qi(n)}}return n&&n.prng?o===void 0?r=du({prng:n.prng}):r=du(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=du({state:e,copy:!1}):r=du(o,{state:e,copy:!1})),o===void 0?s=m:s=d,i=t.PRNG,It(s,"NAME","t"),n&&n.prng?(It(s,"seed",null),It(s,"seedLength",null),dZ(s,"state",wZ(null),dYr),It(s,"stateLength",null),It(s,"byteLength",null),It(s,"toJSON",wZ(null))):(mu(s,"seed",f),mu(s,"seedLength",v),dZ(s,"state",p,g),mu(s,"stateLength",c),mu(s,"byteLength",l),It(s,"toJSON",h)),It(s,"PRNG",i),s;function f(){return i.seed}function v(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function g(q){if(!zv(q))throw new TypeError(ae("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));u&&(q=Xv(q.length,q,1,new Jv(q.length),1)),i.state=q}function h(){var q={};return q.type="PRNG",q.name=s.NAME,q.state=hYr(i.state),o===void 0?q.params=[]:q.params=[o],q}function d(){return t()/NZ(r()/o)}function m(q){return mYr(q)||q<=0?NaN:t()/NZ(r(q)/q)}}OZ.exports=qYr});var SZ=a((Mye,AZ)=>{"use strict";var yYr=Yv(),bYr=yYr();AZ.exports=bYr});var IZ=a((Bye,_Z)=>{"use strict";var wYr=b(),TZ=SZ(),EYr=Yv();wYr(TZ,"factory",EYr);_Z.exports=TZ});var RZ=a((kye,LZ)=>{"use strict";var Zv=j().isPrimitive,hu=y(),$v=vr();function NYr(r,e,t){return!Zv(r)||$v(r)?new TypeError(hu("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Zv(e)||$v(e)?new TypeError(hu("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Zv(t)||$v(t)?new TypeError(hu("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(hu("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}LZ.exports=NYr});var MZ=a((jye,FZ)=>{"use strict";var PZ=U();function OYr(r,e,t,i){var n,s,u;return n=(i-e)/(t-e),u=r(),u<n?(s=(t-e)*(i-e),e+PZ(s*u)):(s=(t-e)*(t-i),t-PZ(s*(1-u)))}FZ.exports=OYr});var Kv=a((Cye,GZ)=>{"use strict";var He=b(),qu=R(),BZ=M(),kZ=L(),jZ=_(),CZ=A(),VZ=T(),AYr=C(),yu=X().factory,Qv=E(),SYr=B(),bu=y(),TYr=RZ(),UZ=MZ();function _Yr(){var r,e,t,i,n,s,u;if(arguments.length===0)e=yu();else if(arguments.length===1){if(r=arguments[0],!kZ(r))throw new TypeError(bu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(CZ(r,"prng")){if(!jZ(r.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=yu(r)}else{if(n=arguments[0],s=arguments[1],u=arguments[2],i=TYr(n,s,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!kZ(r))throw new TypeError(bu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(CZ(r,"prng")){if(!jZ(r.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=yu(r)}else e=yu()}return n===void 0?t=d:t=h,He(t,"NAME","triangular"),r&&r.prng?(He(t,"seed",null),He(t,"seedLength",null),BZ(t,"state",VZ(null),AYr),He(t,"stateLength",null),He(t,"byteLength",null),He(t,"toJSON",VZ(null)),He(t,"PRNG",e)):(qu(t,"seed",o),qu(t,"seedLength",f),BZ(t,"state",l,p),qu(t,"stateLength",v),qu(t,"byteLength",c),He(t,"toJSON",g),He(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=SYr(e.state),n===void 0?m.params=[]:m.params=[n,s,u],m}function h(){return UZ(e,n,s,u)}function d(m,q,N){return Qv(m)||Qv(q)||Qv(N)||!(m<=N&&N<=q)?NaN:UZ(e,m,q,N)}}GZ.exports=_Yr});var WZ=a((Vye,HZ)=>{"use strict";var IYr=Kv(),LYr=IYr();HZ.exports=LYr});var zZ=a((Uye,DZ)=>{"use strict";var RYr=b(),xZ=WZ(),PYr=Kv();RYr(xZ,"factory",PYr);DZ.exports=xZ});var ZZ=a((Gye,YZ)=>{"use strict";var XZ=j().isPrimitive,rf=y(),JZ=vr();function FYr(r,e){return!XZ(r)||JZ(r)?new TypeError(rf("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!XZ(e)||JZ(e)?new TypeError(rf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(rf("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}YZ.exports=FYr});var QZ=a((Hye,$Z)=>{"use strict";function MYr(r,e,t){var i=r();return t*i+(1-i)*e}$Z.exports=MYr});var ef=a((Wye,s$)=>{"use strict";var We=b(),wu=R(),KZ=M(),r$=L(),e$=_(),t$=A(),i$=T(),BYr=C(),Eu=X().factory,n$=E(),kYr=B(),Nu=y(),jYr=ZZ(),a$=QZ();function CYr(){var r,e,t,i,n,s;if(arguments.length===0)e=Eu();else if(arguments.length===1){if(r=arguments[0],!r$(r))throw new TypeError(Nu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(t$(r,"prng")){if(!e$(r.prng))throw new TypeError(Nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Eu(r)}else{if(n=arguments[0],s=arguments[1],i=jYr(n,s),i)throw i;if(arguments.length>2){if(r=arguments[2],!r$(r))throw new TypeError(Nu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(t$(r,"prng")){if(!e$(r.prng))throw new TypeError(Nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Eu(r)}else e=Eu()}return n===void 0?t=h:t=g,We(t,"NAME","uniform"),r&&r.prng?(We(t,"seed",null),We(t,"seedLength",null),KZ(t,"state",i$(null),BYr),We(t,"stateLength",null),We(t,"byteLength",null),We(t,"toJSON",i$(null)),We(t,"PRNG",e)):(wu(t,"seed",u),wu(t,"seedLength",o),KZ(t,"state",c,l),wu(t,"stateLength",f),wu(t,"byteLength",v),We(t,"toJSON",p),We(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=kYr(e.state),n===void 0?d.params=[]:d.params=[n,s],d}function g(){return a$(e,n,s)}function h(d,m){return n$(d)||n$(m)||d>=m?NaN:a$(e,d,m)}}s$.exports=CYr});var o$=a((xye,u$)=>{"use strict";var VYr=ef(),UYr=VYr();u$.exports=UYr});var c$=a((Dye,f$)=>{"use strict";var GYr=b(),v$=o$(),HYr=ef();GYr(v$,"factory",HYr);f$.exports=v$});var m$=a((zye,g$)=>{"use strict";var l$=D().isPrimitive,p$=y();function WYr(r,e){return l$(r)?l$(e)?null:new TypeError(p$("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(p$("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}g$.exports=WYr});var h$=a((Xye,d$)=>{"use strict";var xYr=W(),DYr=P();function zYr(r,e,t){return t*xYr(-DYr(1-r()),1/e)}d$.exports=zYr});var tf=a((Jye,A$)=>{"use strict";var xe=b(),Ou=R(),q$=M(),y$=L(),b$=_(),w$=A(),E$=T(),XYr=C(),Au=X().factory,N$=E(),JYr=B(),Su=y(),YYr=m$(),O$=h$();function ZYr(){var r,e,t,i,n,s;if(arguments.length===0)t=Au();else if(arguments.length===1){if(e=arguments[0],!y$(e))throw new TypeError(Su("invalid argument. Options argument must be an object. Value: `%s`.",e));if(w$(e,"prng")){if(!b$(e.prng))throw new TypeError(Su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Au(e)}else{if(s=arguments[0],r=arguments[1],n=YYr(r,s),n)throw n;if(arguments.length>2){if(e=arguments[2],!y$(e))throw new TypeError(Su("invalid argument. Options argument must be an object. Value: `%s`.",e));if(w$(e,"prng")){if(!b$(e.prng))throw new TypeError(Su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Au(e)}else t=Au()}return r===void 0?i=h:i=g,xe(i,"NAME","weibull"),e&&e.prng?(xe(i,"seed",null),xe(i,"seedLength",null),q$(i,"state",E$(null),XYr),xe(i,"stateLength",null),xe(i,"byteLength",null),xe(i,"toJSON",E$(null)),xe(i,"PRNG",t)):(Ou(i,"seed",u),Ou(i,"seedLength",o),q$(i,"state",c,l),Ou(i,"stateLength",f),Ou(i,"byteLength",v),xe(i,"toJSON",p),xe(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=JYr(t.state),s===void 0?d.params=[]:d.params=[s,r],d}function g(){return O$(t,s,r)}function h(d,m){return N$(d)||N$(m)||d<=0||m<=0?NaN:O$(t,d,m)}}A$.exports=ZYr});var T$=a((Yye,S$)=>{"use strict";var $Yr=tf(),QYr=$Yr();S$.exports=QYr});var L$=a((Zye,I$)=>{"use strict";var KYr=b(),_$=T$(),rZr=tf();KYr(_$,"factory",rZr);I$.exports=_$});var P$=a(($ye,R$)=>{"use strict";var eZr=mr(),tZr=Rr().isPrimitive,iZr=y(),nZr=Yu();function aZr(r){if(tZr(r))return r;if(eZr(r))return nZr(r);throw new TypeError(iZr("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}R$.exports=aZr});var M$=a((Qye,F$)=>{"use strict";var sZr=P$();F$.exports=sZr});var k$=a((Kye,B$)=>{"use strict";var k=rr(),uZr=Xj().factory,oZr=nC().factory,vZr=SV().factory,fZr=cU().factory,cZr=zU().factory,lZr=uG().factory,pZr=CG().factory,gZr=sH().factory,mZr=$n().factory,dZr=rW().factory,hZr=bW().factory,qZr=CW().factory,yZr=QW().factory,bZr=hx().factory,wZr=Mx().factory,EZr=ki().factory,NZr=Yx().factory,OZr=gD().factory,AZr=CD().factory,SZr=pt().factory,TZr=rz().factory,_Zr=bz().factory,IZr=Cz().factory,LZr=NX().factory,RZr=GX().factory,PZr=aJ().factory,FZr=dJ().factory,MZr=LJ().factory,BZr=X().factory,kZr=qY().factory,jZr=kY().factory,CZr=eZ().factory,VZr=jv().factory,UZr=mZ().factory,GZr=IZ().factory,HZr=zZ().factory,WZr=c$().factory,xZr=L$().factory,DZr=M$();function zZr(r){return k(r,"arcsine",uZr),k(r,"bernoulli",oZr),k(r,"beta",vZr),k(r,"betaprime",fZr),k(r,"binomial",cZr),k(r,"boxMuller",lZr),k(r,"cauchy",pZr),k(r,"chi",gZr),k(r,"chisquare",mZr),k(r,"cosine",dZr),k(r,"discreteUniform",hZr),k(r,"erlang",qZr),k(r,"exponential",yZr),k(r,"f",bZr),k(r,"frechet",wZr),k(r,"gamma",EZr),k(r,"geometric",NZr),k(r,"gumbel",OZr),k(r,"hypergeometric",AZr),k(r,"improvedZiggurat",SZr),k(r,"invgamma",TZr),k(r,"kumaraswamy",_Zr),k(r,"laplace",IZr),k(r,"levy",LZr),k(r,"logistic",RZr),k(r,"lognormal",PZr),k(r,"minstd",FZr),k(r,"minstdShuffle",MZr),k(r,"mt19937",BZr),k(r,"negativeBinomial",kZr),k(r,"normal",jZr),k(r,"pareto1",CZr),k(r,"poisson",VZr),k(r,"rayleigh",UZr),k(r,"t",GZr),k(r,"triangular",HZr),k(r,"uniform",WZr),k(r,"weibull",xZr),r.base={},k(r.base,"normalizeSeed",DZr),r}B$.exports=zZr});var C$=a((rbe,j$)=>{"use strict";var XZr=L(),Tu=A(),JZr=Rr().isPrimitive,YZr=re().isPrimitive,ZZr=jr().isPrimitive,$Zr=Ba().isPrimitive,ta=y();function QZr(r,e){return XZr(e)?Tu(e,"period")&&(r.period=e.period,!YZr(e.period))?new TypeError(ta("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):Tu(e,"amplitude")&&(r.amplitude=e.amplitude,!$Zr(e.amplitude))?new TypeError(ta("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):Tu(e,"offset")&&(r.offset=e.offset,!JZr(e.offset))?new TypeError(ta("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):Tu(e,"iter")&&(r.iter=e.iter,!ZZr(e.iter))?new TypeError(ta("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(ta("invalid argument. Options argument must be an object. Value: `%s`.",e))}j$.exports=QZr});var H$=a((ebe,G$)=>{"use strict";var nf=b(),V$=ba(),KZr=z3(),r$r=v0(),e$r=o0(),t$r=kr(),i$r=C$();function U$(r){var e,t,i,n,s,u,o,f;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=i$r(e,r),n))throw n;return s=(e.period-e.offset)%e.period,s<0&&(s+=e.period),s-=1,u=t$r/e.period,o=e.amplitude/e$r,f=0,t={},nf(t,"next",v),nf(t,"return",c),V$&&nf(t,V$,l),t;function v(){return f+=1,i||f>e.iter?{done:!0}:(s+=1,s%=e.period,{value:o*r$r(KZr(u*s)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return U$(e)}}G$.exports=U$});var x$=a((tbe,W$)=>{"use strict";var n$r=H$();W$.exports=n$r});var z$=a((ibe,D$)=>{"use strict";var a$r=rr(),s$r=x$();function u$r(r){return a$r(r,"iterSawtoothWave",s$r),r}D$.exports=u$r});var J$=a((nbe,X$)=>{"use strict";var o$r=17976931348623157e292;X$.exports=o$r});var _u=a((abe,Y$)=>{"use strict";var v$r=709.782712893384;Y$.exports=v$r});var $$=a((sbe,Z$)=>{"use strict";var f$r=sr();function c$r(r,e){var t,i,n,s;if(n=f$r(-e),i=n,i!==0)for(t=i,s=1;s<r;++s)t/=s,t*=e,i+=t;return i}Z$.exports=c$r});var K$=a((ube,Q$)=>{"use strict";function l$r(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}Q$.exports=l$r});var eQ=a((obe,rQ)=>{"use strict";function p$r(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}rQ.exports=p$r});var iQ=a((vbe,tQ)=>{"use strict";function g$r(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}tQ.exports=g$r});var aQ=a((fbe,nQ)=>{"use strict";function m$r(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}nQ.exports=m$r});var uQ=a((cbe,sQ)=>{"use strict";function d$r(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}sQ.exports=d$r});var vQ=a((lbe,oQ)=>{"use strict";function h$r(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}oQ.exports=h$r});var cQ=a((pbe,fQ)=>{"use strict";function q$r(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}fQ.exports=q$r});var pQ=a((gbe,lQ)=>{"use strict";function y$r(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}lQ.exports=y$r});var hQ=a((mbe,dQ)=>{"use strict";var b$r=E(),gQ=sr(),w$r=ce(),E$r=I(),N$r=V(),O$r=K$(),A$r=eQ(),S$r=iQ(),T$r=aQ(),_$r=uQ(),I$r=vQ(),L$r=cQ(),R$r=pQ(),Iu=1e-300,P$r=13877787807814457e-33,mQ=.8450629115104675,F$r=.12837916709551256,M$r=1,B$r=-.0023621185607526594,k$r=1,j$r=-.009864944034847148,C$r=1,V$r=-.0098649429247001,U$r=1;function G$r(r){var e,t,i,n,s,u,o,f;if(b$r(r))return NaN;if(r===E$r)return 0;if(r===N$r)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<P$r?1-r:(i=r*r,n=F$r+i*O$r(i),s=M$r+i*A$r(i),u=n/s,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return s=t-1,o=B$r+s*S$r(s),f=k$r+s*T$r(s),e?1+mQ+o/f:1-mQ-o/f;if(t<28){if(s=1/(t*t),t<2.857142857142857)n=j$r+s*_$r(s),s=C$r+s*I$r(s);else{if(r<-6)return 2-Iu;n=V$r+s*L$r(s),s=U$r+s*R$r(s)}return i=w$r(t,0),n=gQ(-(i*i)-.5625)*gQ((i-t)*(i+t)+n/s),e?2-n/t:n/t}return e?2-Iu:Iu*Iu}dQ.exports=G$r});var Zt=a((dbe,qQ)=>{"use strict";var H$r=hQ();qQ.exports=H$r});var wQ=a((hbe,bQ)=>{"use strict";var W$r=Zt(),yQ=U(),x$r=sr(),D$r=kr();function z$r(r,e){var t,i,n,s,u;if(s=W$r(yQ(e)),s!==0&&r>1){for(i=x$r(-e)/yQ(D$r*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;s+=n}return s}bQ.exports=z$r});var af=a((qbe,EQ)=>{"use strict";var X$r=-708.3964185322641;EQ.exports=X$r});var SQ=a((ybe,AQ)=>{"use strict";var Ki=sr(),Lu=W(),J$r=P(),NQ=_u(),OQ=af();function Y$r(r,e){var t,i;return i=r*J$r(e),e>=1?i<NQ&&-e>OQ?t=Lu(e,r)*Ki(-e):r>=1?t=Lu(e/Ki(e/r),r):t=Ki(i-e):i>OQ?t=Lu(e,r)*Ki(-e):e/r<NQ?t=Lu(e/Ki(e/r),r):t=Ki(i-e),t}AQ.exports=Y$r});var sf=a((bbe,TQ)=>{"use strict";function Z$r(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}TQ.exports=Z$r});var IQ=a((wbe,_Q)=>{"use strict";var $$r=Function;_Q.exports=$$r});var RQ=a((Ebe,LQ)=>{"use strict";var Q$r=IQ();LQ.exports=Q$r});var FQ=a((Nbe,PQ)=>{"use strict";var K$r=RQ(),rQr=sf();function eQr(r){var e,t,i,n;if(r.length>500)return s;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new K$r(e)();function s(u){return rQr(r,u)}}PQ.exports=eQr});var kQ=a((Obe,BQ)=>{"use strict";var tQr=b(),MQ=sf(),iQr=FQ();tQr(MQ,"factory",iQr);BQ.exports=MQ});var $t=a((Abe,jQ)=>{"use strict";var nQr=2220446049250313e-31;jQ.exports=nQr});var VQ=a((Sbe,CQ)=>{"use strict";var aQr=eval;CQ.exports=aQr});var GQ=a((Tbe,UQ)=>{"use strict";var sQr=VQ();function uQr(){var r;try{sQr('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}UQ.exports=uQr});var uf=a((_be,HQ)=>{"use strict";var oQr=GQ();HQ.exports=oQr});var xQ=a((Ibe,WQ)=>{"use strict";var Ru=Y(),vQr=$t(),fQr=1e6;function cQr(r,e){var t,i,n,s,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||vQr,s=o.maxTerms||fQr,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,Ru(i*u)>=Ru(n)||--s===0)break}else do n=r(),u+=n;while(Ru(i*u)<Ru(n)&&--s);return u}WQ.exports=cQr});var XQ=a((Lbe,zQ)=>{"use strict";var DQ=Y(),lQr=$t(),pQr=1e6;function gQr(r,e){var t,i,n,s,u;u={},arguments.length>1&&(u=e),t=u.tolerance||lQr,n=u.maxTerms||pQr,s=u.initialValue||0;do i=r(),s+=i;while(DQ(t*s)<DQ(i)&&--n);return s}zQ.exports=gQr});var Pu=a((Rbe,JQ)=>{"use strict";var mQr=uf(),dQr=xQ(),hQr=XQ(),of;mQr()?of=dQr:of=hQr;JQ.exports=of});var ZQ=a((Pbe,YQ)=>{"use strict";function qQr(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}YQ.exports=qQr});var QQ=a((Fbe,$Q)=>{"use strict";var yQr=Y(),bQr=P(),wQr=$t(),EQr=Pu(),NQr=ZQ();function OQr(r){var e,t;return r<=-1?NaN:(t=yQr(r),t>.95?bQr(1+r)-r:t<wQr?-r*r/2:(e={initialValue:-r},EQr(NQr(r),e)))}$Q.exports=OQr});var rK=a((Mbe,KQ)=>{"use strict";var AQr=QQ();KQ.exports=AQr});var tK=a((Bbe,eK)=>{"use strict";function SQr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}eK.exports=SQr});var nK=a((kbe,iK)=>{"use strict";function TQr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}iK.exports=TQr});var sK=a((jbe,aK)=>{"use strict";function _Qr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}aK.exports=_Qr});var oK=a((Cbe,uK)=>{"use strict";function IQr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}uK.exports=IQr});var fK=a((Vbe,vK)=>{"use strict";function LQr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}vK.exports=LQr});var lK=a((Ube,cK)=>{"use strict";function RQr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}cK.exports=RQr});var gK=a((Gbe,pK)=>{"use strict";function PQr(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}pK.exports=PQr});var dK=a((Hbe,mK)=>{"use strict";function FQr(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}mK.exports=FQr});var qK=a((Wbe,hK)=>{"use strict";function MQr(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}hK.exports=MQr});var bK=a((xbe,yK)=>{"use strict";var BQr=kQ(),kQr=rK(),jQr=Zt(),vf=U(),CQr=sr(),VQr=it(),UQr=tK(),GQr=nK(),HQr=sK(),WQr=oK(),xQr=fK(),DQr=lK(),zQr=gK(),XQr=dK(),JQr=qK(),Jr=[0,0,0,0,0,0,0,0,0,0];function YQr(r,e){var t,i,n,s,u;return i=(e-r)/r,n=-kQr(i),s=r*n,u=vf(2*n),e<r&&(u=-u),Jr[0]=UQr(u),Jr[1]=GQr(u),Jr[2]=HQr(u),Jr[3]=WQr(u),Jr[4]=xQr(u),Jr[5]=DQr(u),Jr[6]=zQr(u),Jr[7]=XQr(u),Jr[8]=JQr(u),Jr[9]=-.0005967612901927463,t=BQr(Jr,1/r),t*=CQr(-s)/vf(VQr*r),e<r&&(t=-t),t+=jQr(vf(s))/2,t}yK.exports=YQr});var EK=a((Dbe,wK)=>{"use strict";function ZQr(r,e){var t=1,i=r,n=e;return s;function s(){var u=t;return i+=1,t*=n/i,u}}wK.exports=ZQr});var OK=a((zbe,NK)=>{"use strict";var $Qr=Pu(),QQr=EK();function KQr(r,e,t){var i,n;return t=t||0,n=QQr(r,e),i=$Qr(n,{initialValue:t}),i}NK.exports=KQr});var SK=a((Xbe,AK)=>{"use strict";function rKr(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}AK.exports=rKr});var _K=a((Jbe,TK)=>{"use strict";var eKr=SK();TK.exports=eKr});var LK=a((Ybe,IK)=>{"use strict";var tKr=_K();IK.exports=tKr});var FK=a((Zbe,PK)=>{"use strict";var iKr=V1(),RK=E(),ff=V();function nKr(r,e){return RK(r)||RK(e)?NaN:r===ff||e===ff?ff:r===e&&r===0?iKr(r)?r:e:r<e?r:e}PK.exports=nKr});var BK=a(($be,MK)=>{"use strict";var aKr=FK();MK.exports=aKr});var jK=a((Qbe,kK)=>{"use strict";var sKr=10.900511;kK.exports=sKr});var cf=a((Kbe,CK)=>{"use strict";var uKr=2.718281828459045;CK.exports=uKr});var GK=a((rwe,UK)=>{"use strict";var oKr=LK(),vKr=Cn(),fKr=Li(),cKr=et(),lKr=U(),pKr=Y(),Lt=sr(),ia=W(),lf=o3(),pf=BK(),VK=P(),Fu=_u(),na=af(),gf=jK(),gKr=cf();function mKr(r,e){var t,i,n,s,u,o,f;return n=r+gf-.5,f=(e-r-gf+.5)/n,r<1?e<=na?Lt(r*VK(e)-e-vKr(r)):ia(e,r)*Lt(-e)/fKr(r):(pKr(f*f*r)<=100&&r>150?(t=r*(cKr(f)-f)+e*(.5-gf)/n,t=Lt(t)):(s=r*VK(e/n),u=r-e,pf(s,u)<=na||lf(s,u)>=Fu?(i=u/r,pf(s,u)/2>na&&lf(s,u)/2<Fu?(o=ia(e/n,r/2)*Lt(u/2),t=o*o):pf(s,u)/4>na&&lf(s,u)/4<Fu&&e>r?(o=ia(e/n,r/4)*Lt(u/4),t=o*o,t*=t):i>na&&i<Fu?t=ia(e*Lt(i)/n,r):t=Lt(s+u)):t=ia(e/n,r)*Lt(u)),t*=lKr(n/gKr)/oKr(r),t)}UK.exports=mKr});var WK=a((ewe,HK)=>{"use strict";var dKr=.34657359027997264;HK.exports=dKr});var DK=a((twe,xK)=>{"use strict";function hKr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}xK.exports=hKr});var $K=a((iwe,ZK)=>{"use strict";var qKr=E(),zK=ar(),mf=le(),yKr=_i(),XK=I(),bKr=V(),JK=ne(),wKr=WK(),EKr=DK(),NKr=709.782712893384,df=.6931471803691238,hf=19082149292705877e-26,YK=1.4426950408889634,OKr=38.816242111356935,AKr=1.0397207708399179;function SKr(r){var e,t,i,n,s,u,o,f,v,c,l,p,g;if(r===XK||qKr(r))return r;if(r===bKr)return-1;if(r===0)return r;if(r<0?(i=!0,f=-r):(i=!1,f=r),f>=OKr){if(i)return-1;if(f>=NKr)return XK}if(u=zK(f)|0,f>wKr)f<AKr?i?(n=r+df,s=-hf,g=-1):(n=r-df,s=hf,g=1):(i?g=YK*r-.5:g=YK*r+.5,g|=0,l=g,n=r-l*df,s=l*hf),r=n-s,c=n-r-s;else{if(u<1016070144)return r;g=0}return e=.5*r,v=r*e,o=1+v*EKr(v),l=3-o*e,p=v*((o-l)/(6-r*l)),g===0?r-(r*p-v):(t=yKr(JK+g<<20,0),p=r*(p-c)-c,p-=v,g===-1?.5*(r-p)-.5:g===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):g<=-2||g>56?(f=1-(p-r),g===1024?(n=zK(f)+(g<<20)|0,f=mf(f,n)):f*=t,f-1):(l=1,g<20?(n=1072693248-(2097152>>g)|0,l=mf(l,n),f=l-(p-r)):(n=JK-g<<20|0,l=mf(l,n),f=r-(p+l),f+=1),f*=t,f))}ZK.exports=SKr});var qf=a((nwe,QK)=>{"use strict";var TKr=$K();QK.exports=TKr});var trr=a((awe,err)=>{"use strict";var KK=E(),rrr=Y(),_Kr=qf(),IKr=P(),LKr=W(),RKr=y0();function PKr(r,e){var t;if(KK(r)||KK(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((rrr(e*(r-1))<.5||rrr(e)<.2)&&(t=IKr(r)*e,t<.5))return _Kr(t)}else if(RKr(e)!==e)return NaN;return LKr(r,e)-1}err.exports=PKr});var nrr=a((swe,irr)=>{"use strict";var FKr=trr();irr.exports=FKr});var srr=a((uwe,arr)=>{"use strict";function MKr(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}arr.exports=MKr});var orr=a((owe,urr)=>{"use strict";function BKr(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}urr.exports=BKr});var frr=a((vwe,vrr)=>{"use strict";function kKr(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}vrr.exports=kKr});var lrr=a((fwe,crr)=>{"use strict";var yf=P(),jKr=$t(),CKr=srr(),VKr=orr(),UKr=frr(),GKr=.15896368026733398,HKr=.5281534194946289,WKr=.45201730728149414;function xKr(r,e,t){var i,n,s,u;if(r<jKr)return-yf(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=yf(r);while(r>=3);t=r-2}return s=t*(r+1),u=CKr(t),n+=s*GKr+s*u,n}return r<1&&(n+=-yf(r),t=e,e=r,r+=1),r<=1.5?(s=VKr(e),i=e*t,n+=i*HKr+i*s,n):(s=t*e,u=UKr(-t),n+=s*WKr+s*u,n)}crr.exports=xKr});var hrr=a((cwe,drr)=>{"use strict";var prr=Li(),grr=qf(),DKr=et(),zKr=E(),mrr=lrr();function XKr(r){return zKr(r)?NaN:r<0?r<-.5?prr(1+r)-1:grr(-DKr(r)+mrr(r+2,r+1,r)):r<2?grr(mrr(r+1,r,r-1)):prr(1+r)-1}drr.exports=XKr});var yrr=a((lwe,qrr)=>{"use strict";var JKr=hrr();qrr.exports=JKr});var wrr=a((pwe,brr)=>{"use strict";function YKr(r,e){var t,i,n,s;return t=-e,e=-e,i=r+1,n=1,u;function u(){return s=t/i,t*=e,n+=1,t/=n,i+=1,s}}brr.exports=YKr});var Nrr=a((gwe,Err)=>{"use strict";var ZKr=nrr(),$Kr=Pu(),QKr=yrr(),KKr=wrr();function rre(r,e,t){var i,n,s,u,o;return n=QKr(r),s=(n+1)/r,u=ZKr(e,r),n-=u,n/=r,o=KKr(r,e),u+=1,i=t?s:0,n=-u*$Kr(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,s]}Err.exports=rre});var bf=a((mwe,Orr)=>{"use strict";var ere=11754943508222875e-54;Orr.exports=ere});var Srr=a((dwe,Arr)=>{"use strict";var Mu=Y(),se=bf(),tre=$t(),ire=1e6;function nre(r,e,t){var i,n,s,u,o,f,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),u=v[1],s=v[0],u===0&&(u=se),o=u,f=0,i===!0)do v=r.next().value,v&&(f=v[1]+v[0]*f,f===0&&(f=se),o=v[1]+v[0]/o,o===0&&(o=se),f=1/f,n=o*f,u*=n);while(Mu(n-1)>e&&--t);else do v=r(),v&&(f=v[1]+v[0]*f,f===0&&(f=se),o=v[1]+v[0]/o,o===0&&(o=se),f=1/f,n=o*f,u*=n);while(v&&Mu(n-1)>e&&--t);return s/u}function are(r,e,t){var i,n,s,u,o,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),s=f[1],s===0&&(s=se),u=s,o=0,i===!0)do f=r.next().value,f&&(o=f[1]+f[0]*o,o===0&&(o=se),u=f[1]+f[0]/u,u===0&&(u=se),o=1/o,n=u*o,s*=n);while(f&&Mu(n-1)>e&&--t);else do f=r(),f&&(o=f[1]+f[0]*o,o===0&&(o=se),u=f[1]+f[0]/u,u===0&&(u=se),o=1/o,n=u*o,s*=n);while(f&&Mu(n-1)>e&&--t);return s}function sre(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||ire,n=i.tolerance||tre,i.keep?are(r,n,t):nre(r,n,t)}Arr.exports=sre});var Irr=a((hwe,_rr)=>{"use strict";var Trr=Y(),ure=$t(),rn=bf(),ore=1e6;function vre(r,e,t){var i,n,s,u,o,f;f=r(),o=f[1],n=f[0],o===0&&(o=rn),s=o,u=0;do f=r(),f&&(u=f[1]+f[0]*u,u===0&&(u=rn),s=f[1]+f[0]/s,s===0&&(s=rn),u=1/u,i=s*u,o*=i);while(f&&Trr(i-1)>e&&--t);return n/o}function fre(r,e,t){var i,n,s,u,o;o=r(),u=o[1],u===0&&(u=rn),n=u,s=0;do o=r(),o&&(s=o[1]+o[0]*s,s===0&&(s=rn),n=o[1]+o[0]/n,n===0&&(n=rn),s=1/s,i=n*s,u*=i);while(o&&Trr(i-1)>e&&--t);return u}function cre(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||ure,t=i.maxIter||ore,i.keep?fre(r,n,t):vre(r,n,t)}_rr.exports=cre});var Rrr=a((qwe,Lrr)=>{"use strict";var lre=uf(),pre=Srr(),gre=Irr(),wf;lre()?wf=pre:wf=gre;Lrr.exports=wf});var Frr=a((ywe,Prr)=>{"use strict";function mre(r,e){var t=e-r+1,i=r,n=0;return s;function s(){return n+=1,t+=2,[n*(i-n),t]}}Prr.exports=mre});var Brr=a((bwe,Mrr)=>{"use strict";var dre=Rrr(),hre=Frr();function qre(r,e){var t=hre(r,e);return 1/(e-r+1+dre(t))}Mrr.exports=qre});var Drr=a((wwe,xrr)=>{"use strict";var yre=Cn(),bre=J(),aa=Li(),krr=Y(),wre=sr(),jrr=W(),Yr=P(),Ere=W1(),Crr=J$(),Nre=U1(),Vrr=_u(),Ore=I(),Are=$$(),Sre=wQ(),Urr=SQ(),Tre=bK(),Ef=OK(),Grr=GK(),_re=Nrr(),Hrr=Brr(),Ire=170;function Wrr(r,e,t,i){var n,s,u,o,f,v,c,l,p,g,h,d,m,q,N;if(r<0||e<=0)return NaN;if(s=t===void 0?!0:t,l=i,p=0,e>=Ire&&!s)return l&&e*4<r?(p=e*Yr(r)-r,p+=Yr(Hrr(e,r))):!l&&e>4*r?(p=e*Yr(r)-r,o=0,p+=Yr(Ef(e,r,o)/e)):(p=Wrr(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Yr(p)-e+(e-.5)*Yr(e),p+=Yr(Nre)):(p=e*Yr(r)-r,o=0,p+=Yr(Ef(e,r,o)/e)):p=Yr(p)+yre(e)),p>Vrr?Ore:wre(p);switch(c=e<30&&e<=r+1&&r<Vrr,c?(q=bre(e),g=q===e,f=g?!1:krr(q-e)===.5):g=f=!1,g&&r>.6?(l=!l,u=0):f&&r>.2?(l=!l,u=1):r<Ere&&e>1?u=6:r<.5?-.4/Yr(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(v=!1,s&&e>20&&(h=krr((r-e)/e),e>200?20/e>h*h&&(v=!0):h<.4&&(v=!0)),v?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=Are(e,r),s===!1&&(p*=aa(e));break;case 1:p=Sre(e,r),s===!1&&(p*=aa(e));break;case 2:p=s?Grr(e,r):Urr(e,r),p!==0&&(o=0,n=!1,l&&(o=s?1:aa(e),s||p>=1||Crr*p>o?(o/=p,s||e<1||Crr/e>o?(o*=-e,n=!0):o=0):o=0)),p*=Ef(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,m=_re(e,r,l),p=m[0],N=m[1],l=!1,s&&(p/=N);break;case 4:p=s?Grr(e,r):Urr(e,r),p!==0&&(p*=Hrr(e,r));break;case 5:p=Tre(e,r),r>=e&&(l=!l);break;case 6:p=s?jrr(r,e)/aa(e+1):jrr(r,e)/e,p*=1-e*r/(e+1);break}return s&&p>1&&(p=1),l&&(d=s?1:aa(e),p=d-p),p}xrr.exports=Wrr});var Nf=a((Ewe,zrr)=>{"use strict";var Lre=Drr();zrr.exports=Lre});var Jrr=a((Nwe,Xrr)=>{"use strict";var Rre=Nf(),Of=E(),Pre=I();function Fre(r,e,t){return Of(r)||Of(e)||Of(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===Pre?1:Rre(r*t,e)}Xrr.exports=Fre});var $rr=a((Owe,Zrr)=>{"use strict";var Mre=T(),Bre=as().factory,kre=Nf(),Yrr=E(),jre=I();function Cre(r,e){if(Yrr(r)||Yrr(e)||r<0||e<=0)return Mre(NaN);if(r===0)return Bre(0);return t;function t(i){return i<=0?0:i===jre?1:kre(i*e,r)}}Zrr.exports=Cre});var Af=a((Awe,Krr)=>{"use strict";var Vre=b(),Qrr=Jrr(),Ure=$rr();Vre(Qrr,"factory",Ure);Krr.exports=Qrr});var eer=a((Swe,rer)=>{"use strict";var Gre=Af();function Hre(r,e){return Gre(r,e/2,.5)}rer.exports=Hre});var ier=a((Twe,ter)=>{"use strict";var Wre=Af().factory;function xre(r){return Wre(r/2,.5)}ter.exports=xre});var ser=a((_we,aer)=>{"use strict";var Dre=b(),ner=eer(),zre=ier();Dre(ner,"factory",zre);aer.exports=ner});var fer=a((Iwe,ver)=>{"use strict";var Xre=L(),Jre=A(),Yre=ka(),uer=y(),oer=["values","indices","*"];function Zre(r,e){return Xre(e)?Jre(e,"returns")&&(r.returns=e.returns,Yre(oer,r.returns)===-1)?new TypeError(uer('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",oer.join('", "'),r.returns)):null:new TypeError(uer("invalid argument. Options argument must be an object. Value: `%s`.",e))}ver.exports=Zre});var ler=a((Lwe,cer)=>{"use strict";var $re=A();function Qre(r,e){var t,i,n,s;for(i=r.length,t={},s=0;s<i;s++)n=e[s].toString(),$re(t,n)?t[n].push(r[s]):t[n]=[r[s]];return t}cer.exports=Qre});var ger=a((Rwe,per)=>{"use strict";var Kre=A();function ree(r,e){var t,i,n,s;for(i=r.length,t={},s=0;s<i;s++)n=e[s].toString(),Kre(t,n)?t[n].push(s):t[n]=[s];return t}per.exports=ree});var der=a((Pwe,mer)=>{"use strict";var eee=A();function tee(r,e){var t,i,n,s;for(i=r.length,t={},s=0;s<i;s++)n=e[s].toString(),eee(t,n)?t[n].push([s,r[s]]):t[n]=[[s,r[s]]];return t}mer.exports=tee});var ber=a((Fwe,yer)=>{"use strict";var her=Wr(),qer=y(),iee=fer(),nee=ler(),aee=ger(),see=der();function uee(r,e,t){var i,n,s;if(!her(r))throw new TypeError(qer("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)s=e;else{if(n=iee(i,e),n)throw n;s=t}if(!her(s))throw new TypeError(qer("invalid argument. Last argument must be a collection. Value: `%s`.",s));if(r.length!==s.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?nee(r,s):i.returns==="indices"?aee(r,s):see(r,s)}yer.exports=uee});var Eer=a((Mwe,wer)=>{"use strict";var oee=ber();wer.exports=oee});var Oer=a((Bwe,Ner)=>{"use strict";function vee(r){var e,t,i,n,s,u;for(e=0,t=0,n=0,i=r.length,s=0;s<i;s++)u=r[s],e=u-t,t+=e/(s+1),n+=e*(u-t);return n/(s-1)}Ner.exports=vee});var Ter=a((kwe,Ser)=>{"use strict";var fee=mr(),cee=j().isPrimitive,lee=L(),pee=vr(),Aer=A(),Sf=y();function gee(r,e){return lee(e)?Aer(e,"alpha")&&(r.alpha=e.alpha,!cee(r.alpha)||pee(r.alpha))?new TypeError(Sf("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):Aer(e,"groups")&&(r.groups=e.groups,!fee(r.groups))?new TypeError(Sf("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(Sf("invalid argument. Options argument must be an object. Value: `%s`.",e))}Ser.exports=gee});var Mer=a((jwe,Fer)=>{"use strict";var _er=E(),Bu=Br(),Ier=W(),mee=Y(),Ler=N1(),dee=Ii(),Rer=Ka(),hee=v1(),qee=r0(),yee=dee+1,Per=1e308;function bee(r,e){var t,i;return _er(r)||_er(e)||Bu(e)?NaN:Bu(r)||r===0||e<qee||mee(r)>yee&&e<=0?r:e>Rer?0*r:e<hee?(t=Ier(10,-(e+Rer)),i=r*Per*t,Bu(i)?r:Ler(i)/Per/t):(t=Ier(10,-e),i=r*t,Bu(i)?r:Ler(i)/t)}Fer.exports=bee});var ker=a((Cwe,Ber)=>{"use strict";var wee=Mer();Ber.exports=wee});var Ver=a((Vwe,Cer)=>{"use strict";var Eee=re(),Nee=L(),Oee=gr().isPrimitive,jer=A(),Tf=y(),_f=ker();function Aee(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!Nee(r))throw new TypeError(Tf("invalid argument. First argument must be an object. Value: `%s`.",r));if(jer(r,"digits")){if(!Eee(r.digits))throw new TypeError(Tf("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(jer(r,"decision")){if(!Oee(r.decision))throw new TypeError(Tf("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+_f(this.pValue,-t)+`
`,i+="    statistic: "+_f(this.statistic,-t)+`
`,i+="    df: "+_f(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}Cer.exports=Aee});var Her=a((Uwe,Ger)=>{"use strict";var See=Wr(),Tee=L(),Qt=rr(),_ee=Ei(),ku=y(),Iee=ser(),Lee=Eer(),Uer=P(),Ree=Oer(),Pee=Ter(),Fee=Ver();function Mee(){var r,e,t,i,n,s,u,o,f,v,c,l,p,g,h,d,m,q,N,O;if(f=[],e=arguments.length,v={},Tee(arguments[e-1])&&(r=arguments[e-1],e-=1,g=Pee(v,r),g))throw g;if(v.groups){if(n=Lee(arguments[0],v.groups),i=_ee(n),e=i.length,e<2)throw new Error(ku("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(O=0;O<e;O++)f.push(n[i[O]])}else for(O=0;O<e;O++)f.push(arguments[O]);for(u=0,t=0,o=0,h=0,q=new Array(e),N=q.slice(),O=0;O<e;O++){if(p=f[O],!See(p))throw new TypeError(ku("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(ku("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));q[O]=p.length-1,u+=q[O],t+=1/q[O],N[O]=Ree(p),o+=q[O]*N[O],h+=q[O]*Uer(N[O])}if(o/=u,v.alpha===void 0?s=.05:s=v.alpha,s<0||s>1)throw new RangeError(ku("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",s));return l=u*Uer(o)-h,l/=1+(t-1/u)/(3*(e-1)),m=e-1,c=1-Iee(l,m),d={},Qt(d,"rejected",c<=s),Qt(d,"alpha",s),Qt(d,"pValue",c),Qt(d,"statistic",l),Qt(d,"df",m),Qt(d,"method","Bartlett's test of equal variances"),Qt(d,"print",Fee),d}Ger.exports=Mee});var xer=a((Gwe,Wer)=>{"use strict";var Bee=Her();Wer.exports=Bee});var zer=a((Hwe,Der)=>{"use strict";var If=E(),kee=ut();function jee(r,e,t,i,n){var s,u,o,f,v;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,s=e[u],i[o]=s,o+=n,v=1,If(s)===!1)for(v;v<r;v++){if(u+=t,f=e[u],If(f)){s=f;break}(f>s||f===s&&kee(f))&&(s=f),i[o]=s,o+=n}if(If(s))for(v;v<r;v++)i[o]=s,o+=n;return i}Der.exports=jee});var Jer=a((Wwe,Xer)=>{"use strict";var Lf=E(),Cee=ut();function Vee(r,e,t,i,n,s,u){var o,f,v,c,l;if(r<=0)return n;if(f=i,v=u,o=e[f],n[v]=o,v+=s,l=1,Lf(o)===!1)for(l;l<r;l++){if(f+=t,c=e[f],Lf(c)){o=c;break}(c>o||c===o&&Cee(c))&&(o=c),n[v]=o,v+=s}if(Lf(o))for(l;l<r;l++)n[v]=o,v+=s;return n}Xer.exports=Vee});var $er=a((xwe,Zer)=>{"use strict";var Uee=b(),Yer=zer(),Gee=Jer();Uee(Yer,"ndarray",Gee);Zer.exports=Yer});var Ker=a((Dwe,Qer)=>{"use strict";var Hee=$er();Qer.exports=Hee});var etr=a((zwe,rtr)=>{"use strict";var Wee=E(),xee=ut();function Dee(r,e,t){var i,n,s,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,s=e[n],Wee(s))return s;(s>i||s===i&&xee(s))&&(i=s)}return i}rtr.exports=Dee});var itr=a((Xwe,ttr)=>{"use strict";var zee=E(),Xee=ut();function Jee(r,e,t,i){var n,s,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(s=i,n=e[s],o=1;o<r;o++){if(s+=t,u=e[s],zee(u))return u;(u>n||u===n&&Xee(u))&&(n=u)}return n}ttr.exports=Jee});var str=a((Jwe,atr)=>{"use strict";var Yee=b(),ntr=etr(),Zee=itr();Yee(ntr,"ndarray",Zee);atr.exports=ntr});var otr=a((Ywe,utr)=>{"use strict";var $ee=str();utr.exports=$ee});var ctr=a((Zwe,ftr)=>{"use strict";var vtr=E(),Qee=ut();function Kee(r,e,t,i,n){var s,u,o,f,v;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,v=0;v<r&&i[o]!==0;v++)u+=t,o+=n;if(v===r)return NaN;if(s=e[u],vtr(s))return s;for(v+=1,v;v<r;v++)if(u+=t,o+=n,!i[o]){if(f=e[u],vtr(f))return f;(f>s||f===s&&Qee(f))&&(s=f)}return s}ftr.exports=Kee});var gtr=a(($we,ptr)=>{"use strict";var ltr=E(),rte=ut();function ete(r,e,t,i,n,s,u){var o,f,v,c,l;if(r<=0)return NaN;for(f=i,v=u,l=0;l<r&&n[v]!==0;l++)f+=t,v+=s;if(l===r)return NaN;if(o=e[f],ltr(o))return o;for(l+=1,l;l<r;l++)if(f+=t,v+=s,!n[v]){if(c=e[f],ltr(c))return c;(c>o||c===o&&rte(c))&&(o=c)}return o}ptr.exports=ete});var htr=a((Qwe,dtr)=>{"use strict";var tte=b(),mtr=ctr(),ite=gtr();tte(mtr,"ndarray",ite);dtr.exports=mtr});var ytr=a((Kwe,qtr)=>{"use strict";var nte=Zt(),ate=U(),Rf=E();function ste(r,e,t){var i,n;return Rf(r)||Rf(e)||Rf(t)||t<0?NaN:t===0?r<e?0:1:(i=t*ate(2),n=r-e,.5*nte(-n/i))}qtr.exports=ste});var wtr=a((rEe,btr)=>{"use strict";var ute=T(),ote=as().factory,Pf=E(),vte=U(),fte=Zt();function cte(r,e){var t;if(Pf(r)||Pf(e)||e<0)return ute(NaN);if(e===0)return ote(r);return t=e*vte(2),i;function i(n){var s;return Pf(n)?NaN:(s=n-r,.5*fte(-s/t))}}btr.exports=cte});var Otr=a((eEe,Ntr)=>{"use strict";var lte=b(),Etr=ytr(),pte=wtr();lte(Etr,"factory",pte);Ntr.exports=Etr});var Ttr=a((tEe,Str)=>{"use strict";var Atr=E(),gte=P(),mte=it(),dte=cf();function hte(r,e){return Atr(r)||Atr(e)||e<=0?NaN:.5*gte(mte*dte*e*e)}Str.exports=hte});var Itr=a((iEe,_tr)=>{"use strict";var qte=Ttr();_tr.exports=qte});var Ptr=a((nEe,Rtr)=>{"use strict";var Ltr=E();function yte(r,e){return Ltr(r)||Ltr(e)||e<=0?NaN:0}Rtr.exports=yte});var Mtr=a((aEe,Ftr)=>{"use strict";var bte=Ptr();Ftr.exports=bte});var ktr=a((sEe,Btr)=>{"use strict";var wte=J(),Ete=[Nte,Ote,Ate,Ste,Tte,_te,Ite,Lte,Rte,Pte,Fte,Mte,Bte,kte,jte,Cte,Vte,Ute,Gte,Hte,Wte,xte,Dte,zte,Xte,Jte,Yte,Zte,$te,Qte,Kte,rie,eie,tie,iie,nie,aie,sie,uie,oie,vie,fie,cie,lie,pie,gie,mie,die,hie,qie,yie,bie,wie,Eie,Nie,Oie,Aie,Sie,Tie,_ie,Iie,Lie,Rie,Pie,Fie,Mie,Bie,kie,jie,Cie,Vie,Uie,Gie,Hie,Wie,xie,Die,zie,Xie,Jie,Yie,Zie,$ie,Qie,Kie,rne,ene,tne,ine,nne,ane,sne,une,one,vne,fne,cne,lne,pne,gne,mne];function Nte(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function Ote(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function Ate(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function Ste(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function Tte(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function _te(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function Ite(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function Lte(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function Rte(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function Pte(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function Fte(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function Mte(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function Bte(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function kte(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function jte(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function Cte(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function Vte(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function Ute(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function Gte(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function Hte(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function Wte(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function xte(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function Dte(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function zte(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function Xte(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function Jte(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function Yte(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function Zte(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function $te(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function Qte(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function Kte(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function rie(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function eie(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function tie(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function iie(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function nie(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function aie(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function sie(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function uie(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function oie(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function vie(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function fie(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function cie(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function lie(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function pie(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function gie(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function mie(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function die(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function hie(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function qie(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function yie(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function bie(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function wie(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function Eie(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function Nie(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function Oie(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function Aie(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function Sie(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function Tie(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function _ie(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function Iie(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function Lie(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function Rie(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function Pie(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function Fie(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function Mie(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function Bie(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function kie(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function jie(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function Cie(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function Vie(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function Uie(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function Gie(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function Hie(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function Wie(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function xie(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function Die(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function zie(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function Xie(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function Jie(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function Yie(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function Zie(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function $ie(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function Qie(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function Kie(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function rne(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function ene(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function tne(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function ine(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function nne(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function ane(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function sne(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function une(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function one(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function vne(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function fne(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function cne(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function lne(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function pne(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function gne(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function mne(){return 1}function dne(r){var e=wte(r),t=Ete[e];return t(2*r-(2*e+1))}Btr.exports=dne});var Gtr=a((uEe,Utr)=>{"use strict";var jtr=sr(),hne=I(),Ctr=ktr(),Vtr=.5641895835477563;function qne(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?Vtr/r:(e=r*r,Vtr*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):Ctr(400/(4+r)):r<-26.7?hne:(e=r*r,r<-6.1?2*jtr(e):2*jtr(e)-Ctr(400/(4-r)))}Utr.exports=qne});var Ff=a((oEe,Htr)=>{"use strict";var yne=Gtr();Htr.exports=yne});var Dtr=a((vEe,xtr)=>{"use strict";var bne=P(),wne=et(),Ene=n0(),Nne=Zt(),One=Ff(),Ane=V(),Mf=E(),Wtr=.7071067811865475;function Sne(r,e,t){var i;return Mf(r)||Mf(e)||Mf(t)||t<0?NaN:t===0?r<e?Ane:0:(i=(r-e)/t,i<-1?bne(One(-i*Wtr)/2)-Ene(i)/2:wne(-Nne(i*Wtr)/2))}xtr.exports=Sne});var Jtr=a((fEe,Xtr)=>{"use strict";var ztr=E(),Tne=V();function _ne(r,e){return ztr(r)||ztr(e)?NaN:r<e?Tne:0}Xtr.exports=_ne});var $tr=a((cEe,Ztr)=>{"use strict";var Ine=T(),Ytr=E(),Lne=V();function Rne(r){if(Ytr(r))return Ine(NaN);return e;function e(t){return Ytr(t)?NaN:t<r?Lne:0}}Ztr.exports=Rne});var rir=a((lEe,Ktr)=>{"use strict";var Pne=b(),Qtr=Jtr(),Fne=$tr();Pne(Qtr,"factory",Fne);Ktr.exports=Qtr});var nir=a((pEe,iir)=>{"use strict";var Mne=T(),Bne=rir().factory,eir=E(),kne=et(),jne=n0(),Cne=Zt(),Vne=Ff(),Une=P(),tir=.7071067811865475;function Gne(r,e){if(eir(r)||eir(e)||e<0)return Mne(NaN);if(e===0)return Bne(r);return t;function t(i){var n=(i-r)/e;return n<-1?Une(Vne(-n*tir)/2)-jne(n)/2:kne(-Cne(n*tir)/2)}}iir.exports=Gne});var uir=a((gEe,sir)=>{"use strict";var Hne=b(),air=Dtr(),Wne=nir();Hne(air,"factory",Wne);sir.exports=air});var Bf=a((mEe,oir)=>{"use strict";var xne=1.8378770664093456;oir.exports=xne});var cir=a((dEe,fir)=>{"use strict";var Dne=P(),vir=W(),zne=Bf(),Xne=V(),Jne=I(),kf=E();function Yne(r,e,t){var i,n,s;return kf(r)||kf(e)||kf(t)||t<0?NaN:t===0?r===e?Jne:Xne:(i=vir(t,2),n=-.5*(2*Dne(t)+zne),s=-1/(2*i),n+s*vir(r-e,2))}fir.exports=Yne});var gir=a((hEe,pir)=>{"use strict";var Zne=I(),$ne=V(),lir=E();function Qne(r,e){return lir(r)||lir(e)?NaN:r===e?Zne:$ne}pir.exports=Qne});var hir=a((qEe,dir)=>{"use strict";var Kne=T(),rae=I(),eae=V(),mir=E();function tae(r){if(mir(r))return Kne(NaN);return e;function e(t){return mir(t)?NaN:t===r?rae:eae}}dir.exports=tae});var bir=a((yEe,yir)=>{"use strict";var iae=b(),qir=gir(),nae=hir();iae(qir,"factory",nae);yir.exports=qir});var Oir=a((bEe,Nir)=>{"use strict";var aae=T(),sae=bir().factory,uae=Bf(),wir=E(),Eir=W(),oae=P();function vae(r,e){var t,i,n;if(wir(r)||wir(e)||e<0)return aae(NaN);if(e===0)return sae(r);return t=Eir(e,2),i=-.5*(2*oae(e)+uae),n=-1/(2*t),s;function s(u){return i+n*Eir(u-r,2)}}Nir.exports=vae});var Tir=a((wEe,Sir)=>{"use strict";var fae=b(),Air=cir(),cae=Oir();fae(Air,"factory",cae);Sir.exports=Air});var Lir=a((EEe,Iir)=>{"use strict";var _ir=E();function lae(r,e){return _ir(r)||_ir(e)||e<=0?NaN:r}Iir.exports=lae});var Pir=a((NEe,Rir)=>{"use strict";var pae=Lir();Rir.exports=pae});var Bir=a((OEe,Mir)=>{"use strict";var Fir=E();function gae(r,e){return Fir(r)||Fir(e)||e<=0?NaN:r}Mir.exports=gae});var jir=a((AEe,kir)=>{"use strict";var mae=Bir();kir.exports=mae});var Vir=a((SEe,Cir)=>{"use strict";var jf=E(),dae=sr(),hae=W();function qae(r,e,t){return jf(r)||jf(e)||jf(t)||t<=0?NaN:dae(e*r+.5*hae(t*r,2))}Cir.exports=qae});var Gir=a((TEe,Uir)=>{"use strict";var yae=T(),Cf=E(),bae=sr(),wae=W();function Eae(r,e){if(Cf(r)||Cf(e)||e<=0)return yae(NaN);return t;function t(i){return Cf(i)?NaN:bae(r*i+.5*wae(e*i,2))}}Uir.exports=Eae});var xir=a((_Ee,Wir)=>{"use strict";var Nae=b(),Hir=Vir(),Oae=Gir();Nae(Hir,"factory",Oae);Wir.exports=Hir});var Xir=a((IEe,zir)=>{"use strict";var Dir=E();function Aae(r,e){return Dir(r)||Dir(e)||e<=0?NaN:r}zir.exports=Aae});var Yir=a((LEe,Jir)=>{"use strict";var Sae=Xir();Jir.exports=Sae});var Qir=a((REe,$ir)=>{"use strict";var Tae=sr(),Zir=W(),_ae=U(),Iae=it(),Lae=I(),Vf=E();function Rae(r,e,t){var i,n,s;return Vf(r)||Vf(e)||Vf(t)||t<0?NaN:t===0?r===e?Lae:0:(i=Zir(t,2),n=1/_ae(i*Iae),s=-1/(2*i),n*Tae(s*Zir(r-e,2)))}$ir.exports=Rae});var enr=a((PEe,rnr)=>{"use strict";var Pae=I(),Kir=E();function Fae(r,e){return Kir(r)||Kir(e)?NaN:r===e?Pae:0}rnr.exports=Fae});var nnr=a((FEe,inr)=>{"use strict";var Mae=T(),Bae=I(),tnr=E();function kae(r){if(tnr(r))return Mae(NaN);return e;function e(t){return tnr(t)?NaN:t===r?Bae:0}}inr.exports=kae});var unr=a((MEe,snr)=>{"use strict";var jae=b(),anr=enr(),Cae=nnr();jae(anr,"factory",Cae);snr.exports=anr});var fnr=a((BEe,vnr)=>{"use strict";var Vae=T(),Uae=unr().factory,Uf=E(),Gae=U(),Hae=sr(),onr=W(),Wae=it();function xae(r,e){var t,i,n;if(Uf(r)||Uf(e)||e<0)return Vae(NaN);if(e===0)return Uae(r);return t=onr(e,2),i=1/Gae(t*Wae),n=-1/(2*t),s;function s(u){return Uf(u)?NaN:i*Hae(n*onr(u-r,2))}}vnr.exports=xae});var pnr=a((kEe,lnr)=>{"use strict";var Dae=b(),cnr=Qir(),zae=fnr();Dae(cnr,"factory",zae);lnr.exports=cnr});var dnr=a((jEe,mnr)=>{"use strict";var gnr=E();function Xae(r,e){return gnr(r)||gnr(e)||e<=0?NaN:0}mnr.exports=Xae});var qnr=a((CEe,hnr)=>{"use strict";var Jae=dnr();hnr.exports=Jae});var wnr=a((VEe,bnr)=>{"use strict";var ynr=E();function Yae(r,e){return ynr(r)||ynr(e)||e<=0?NaN:e}bnr.exports=Yae});var Nnr=a((UEe,Enr)=>{"use strict";var Zae=wnr();Enr.exports=Zae});var Snr=a((GEe,Anr)=>{"use strict";var Onr=E();function $ae(r,e){return Onr(r)||Onr(e)||e<=0?NaN:e*e}Anr.exports=$ae});var _nr=a((HEe,Tnr)=>{"use strict";var Qae=Snr();Tnr.exports=Qae});var Lnr=a((WEe,Inr)=>{"use strict";var Tr=rr(),Kae=Otr(),r0e=Itr(),e0e=Mtr(),t0e=uir(),i0e=Tir(),n0e=Pir(),a0e=jir(),s0e=xir(),u0e=Yir(),o0e=pnr(),v0e=Ov(),f0e=qnr(),c0e=Nnr(),l0e=_nr();function p0e(r){return Tr(r,"cdf",Kae),Tr(r,"entropy",r0e),Tr(r,"kurtosis",e0e),Tr(r,"logcdf",t0e),Tr(r,"logpdf",i0e),Tr(r,"mean",n0e),Tr(r,"median",a0e),Tr(r,"mgf",s0e),Tr(r,"mode",u0e),Tr(r,"pdf",o0e),Tr(r,"quantile",v0e),Tr(r,"skewness",f0e),Tr(r,"stdev",c0e),Tr(r,"variance",l0e),r}Inr.exports=p0e});var Pnr=a((xEe,Rnr)=>{"use strict";var g0e=rr(),m0e=Lnr();function d0e(r){return g0e(r,"normal",m0e({})),r}Rnr.exports=d0e});var Mnr=a((DEe,Fnr)=>{"use strict";var sa=rr(),h0e=xer(),q0e=Ker().ndarray,y0e=otr().ndarray,b0e=htr().ndarray,w0e=Pnr();function E0e(r){return sa(r,"bartlettTest",h0e),sa(r,"cumax",q0e),sa(r,"max",y0e),sa(r,"mskmax",b0e),sa(r,"dists",w0e({})),r}Fnr.exports=E0e});var knr=a((zEe,Bnr)=>{"use strict";var N0e=K().isPrimitive,O0e=y();function A0e(r){return e;function e(t){if(!N0e(t))throw new TypeError(O0e("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}Bnr.exports=A0e});var Cnr=a((XEe,jnr)=>{"use strict";var S0e=knr();jnr.exports=S0e});var Hnr=a((JEe,Gnr)=>{"use strict";var Vnr=K().isPrimitive,Unr=y();function T0e(r){return e;function e(t,i){if(!Vnr(t))throw new TypeError(Unr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Vnr(i))throw new TypeError(Unr("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}Gnr.exports=T0e});var xnr=a((YEe,Wnr)=>{"use strict";var _0e=Hnr();Wnr.exports=_0e});var znr=a((ZEe,Dnr)=>{"use strict";var Gf=K().isPrimitive,Hf=y();function I0e(r){return e;function e(t,i,n){if(!Gf(t))throw new TypeError(Hf("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Gf(i))throw new TypeError(Hf("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Gf(n))throw new TypeError(Hf("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}Dnr.exports=I0e});var Jnr=a(($Ee,Xnr)=>{"use strict";var L0e=znr();Xnr.exports=L0e});var Znr=a((QEe,Ynr)=>{"use strict";var Wf=rr(),R0e=Cnr(),P0e=xnr(),F0e=Jnr();function M0e(r){return Wf(r,"s_o",R0e),Wf(r,"ss_o",P0e),Wf(r,"sss_o",F0e),r}Ynr.exports=M0e});var Qnr=a((KEe,$nr)=>{"use strict";function B0e(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}$nr.exports=B0e});var ju=a((rNe,Knr)=>{"use strict";var k0e=Qnr();Knr.exports=k0e});var ear=a((eNe,rar)=>{"use strict";function j0e(r){return r.toLowerCase()}rar.exports=j0e});var en=a((tNe,tar)=>{"use strict";var C0e=ear();tar.exports=C0e});var nar=a((iNe,iar)=>{"use strict";var V0e=typeof String.prototype.trim<"u";iar.exports=V0e});var xf=a((nNe,aar)=>{"use strict";var U0e=String.prototype.trim;aar.exports=U0e});var far=a((aNe,oar)=>{"use strict";var sar=xf(),G0e=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,uar="\u180E";function H0e(){return sar.call(G0e)===""&&sar.call(uar)===uar}oar.exports=H0e});var lar=a((sNe,car)=>{"use strict";var W0e=nt(),x0e=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function D0e(r){return W0e(r,x0e,"$1")}car.exports=D0e});var gar=a((uNe,par)=>{"use strict";var z0e=xf();function X0e(r){return z0e.call(r)}par.exports=X0e});var tn=a((oNe,mar)=>{"use strict";var J0e=nar(),Y0e=far(),Z0e=lar(),$0e=gar(),Df;J0e&&Y0e()?Df=$0e:Df=Z0e;mar.exports=Df});var har=a((vNe,dar)=>{"use strict";var Q0e=ju(),K0e=en(),Cu=nt(),rse=tn(),ese=/\s+/g,tse=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,ise=/(?:\s|^)([^\s]+)(?=\s|$)/g,nse=/([a-z0-9])([A-Z])/g;function ase(r,e,t){return e=K0e(e),t===0?e:Q0e(e)}function sse(r){return r=Cu(r,tse," "),r=Cu(r,ese," "),r=Cu(r,nse,"$1 $2"),r=rse(r),Cu(r,ise,ase)}dar.exports=sse});var yar=a((fNe,qar)=>{"use strict";var use=har();qar.exports=use});var war=a((cNe,bar)=>{"use strict";var ose=K().isPrimitive,vse=y(),fse=yar();function cse(r){if(!ose(r))throw new TypeError(vse("invalid argument. First argument must be a string. Value: `%s`.",r));return fse(r)}bar.exports=cse});var Nar=a((lNe,Ear)=>{"use strict";var lse=war();Ear.exports=lse});var Aar=a((pNe,Oar)=>{"use strict";var pse=K().isPrimitive,gse=y(),mse=ju();function dse(r){if(!pse(r))throw new TypeError(gse("invalid argument. First argument must be a string. Value: `%s`.",r));return mse(r)}Oar.exports=dse});var Tar=a((gNe,Sar)=>{"use strict";var hse=Aar();Sar.exports=hse});var Iar=a((mNe,_ar)=>{"use strict";function qse(r){return r.toUpperCase()}_ar.exports=qse});var Rar=a((dNe,Lar)=>{"use strict";var yse=Iar();Lar.exports=yse});var Far=a((hNe,Par)=>{"use strict";var bse=Rar(),zf=nt(),wse=tn(),Ese=/\s+/g,Nse=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Ose=/([a-z0-9])([A-Z])/g;function Ase(r){return r=zf(r,Nse," "),r=zf(r,Ose,"$1 $2"),r=wse(r),r=zf(r,Ese,"_"),bse(r)}Par.exports=Ase});var Bar=a((qNe,Mar)=>{"use strict";var Sse=Far();Mar.exports=Sse});var jar=a((yNe,kar)=>{"use strict";var Tse=K().isPrimitive,_se=y(),Ise=Bar();function Lse(r){if(!Tse(r))throw new TypeError(_se("invalid argument. Must provide a string. Value: `%s`.",r));return Ise(r)}kar.exports=Lse});var Var=a((bNe,Car)=>{"use strict";var Rse=jar();Car.exports=Rse});var Gar=a((wNe,Uar)=>{"use strict";var Pse=en(),Xf=nt(),Fse=tn(),Mse=/\s+/g,Bse=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,kse=/([a-z0-9])([A-Z])/g;function jse(r){return r=Xf(r,Bse," "),r=Xf(r,kse,"$1 $2"),r=Fse(r),r=Xf(r,Mse,"-"),Pse(r)}Uar.exports=jse});var War=a((ENe,Har)=>{"use strict";var Cse=Gar();Har.exports=Cse});var Dar=a((NNe,xar)=>{"use strict";var Vse=K().isPrimitive,Use=y(),Gse=War();function Hse(r){if(!Vse(r))throw new TypeError(Use("invalid argument. Must provide a string. Value: `%s`.",r));return Gse(r)}xar.exports=Hse});var Xar=a((ONe,zar)=>{"use strict";var Wse=Dar();zar.exports=Wse});var Yar=a((ANe,Jar)=>{"use strict";var xse=K().isPrimitive,Dse=y(),zse=en();function Xse(r){if(!xse(r))throw new TypeError(Dse("invalid argument. Must provide a string. Value: `%s`.",r));return zse(r)}Jar.exports=Xse});var $ar=a((SNe,Zar)=>{"use strict";var Jse=Yar();Zar.exports=Jse});var Kar=a((TNe,Qar)=>{"use strict";var Yse=ju(),Zse=en(),Vu=nt(),$se=tn(),Qse=/\s+/g,Kse=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,rue=/(?:\s|^)([^\s]+)(?=\s|$)/g,eue=/([a-z0-9])([A-Z])/g;function tue(r,e){return Yse(Zse(e))}function iue(r){return r=Vu(r,Kse," "),r=Vu(r,Qse," "),r=Vu(r,eue,"$1 $2"),r=$se(r),Vu(r,rue,tue)}Qar.exports=iue});var e0r=a((_Ne,r0r)=>{"use strict";var nue=Kar();r0r.exports=nue});var i0r=a((INe,t0r)=>{"use strict";var aue=K().isPrimitive,sue=y(),uue=e0r();function oue(r){if(!aue(r))throw new TypeError(sue("invalid argument. First argument must be a string. Value: `%s`.",r));return uue(r)}t0r.exports=oue});var a0r=a((LNe,n0r)=>{"use strict";var vue=i0r();n0r.exports=vue});var u0r=a((RNe,s0r)=>{"use strict";var fue=en(),Jf=nt(),cue=tn(),lue=/\s+/g,pue=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,gue=/([a-z0-9])([A-Z])/g;function mue(r){return r=Jf(r,pue," "),r=Jf(r,gue,"$1 $2"),r=cue(r),r=Jf(r,lue,"_"),fue(r)}s0r.exports=mue});var v0r=a((PNe,o0r)=>{"use strict";var due=u0r();o0r.exports=due});var c0r=a((FNe,f0r)=>{"use strict";var hue=K().isPrimitive,que=y(),yue=v0r();function bue(r){if(!hue(r))throw new TypeError(que("invalid argument. Must provide a string. Value: `%s`.",r));return yue(r)}f0r.exports=bue});var p0r=a((MNe,l0r)=>{"use strict";var wue=c0r();l0r.exports=wue});var d0r=a((BNe,m0r)=>{"use strict";var Eue=L(),g0r=A(),Nue=gr().isPrimitive,Oue=K().isPrimitive,Yf=y();function Aue(r,e){return Eue(e)?g0r(e,"flags")&&(r.flags=e.flags,!Oue(r.flags))?new TypeError(Yf("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):g0r(e,"capture")&&(r.capture=e.capture,!Nue(r.capture))?new TypeError(Yf("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(Yf("invalid argument. Options argument must be an object. Value: `%s`.",e))}m0r.exports=Aue});var Uu=a((kNe,q0r)=>{"use strict";var Sue=d0r(),h0r=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function Tue(r){var e,t;if(arguments.length>0){if(e={},t=Sue(e,r),t)throw t;return e.capture?new RegExp("("+h0r+")",e.flags):new RegExp(h0r,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}q0r.exports=Tue});var b0r=a((jNe,y0r)=>{"use strict";var _ue=Uu(),Iue=_ue({capture:!0});y0r.exports=Iue});var E0r=a((CNe,w0r)=>{"use strict";var Lue=Uu(),Rue=Lue();w0r.exports=Rue});var A0r=a((VNe,O0r)=>{"use strict";var N0r=b(),Zf=Uu(),Pue=b0r(),Fue=E0r();N0r(Zf,"REGEXP",Fue);N0r(Zf,"REGEXP_CAPTURE",Pue);O0r.exports=Zf});var T0r=a((UNe,S0r)=>{"use strict";var Mue=A0r().REGEXP;function Bue(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),Mue.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}S0r.exports=Bue});var I0r=a((GNe,_0r)=>{"use strict";var kue=T0r();_0r.exports=kue});var R0r=a((HNe,L0r)=>{"use strict";var jue=K().isPrimitive,Cue=y(),Vue=I0r();function Uue(r){if(!jue(r))throw new TypeError(Cue("invalid argument. Must provide a string. Value: `%s`.",r));return Vue(r)}L0r.exports=Uue});var F0r=a((WNe,P0r)=>{"use strict";var Gue=R0r();P0r.exports=Gue});var B0r=a((xNe,M0r)=>{"use strict";function Hue(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}M0r.exports=Hue});var j0r=a((DNe,k0r)=>{"use strict";var Wue=B0r();k0r.exports=Wue});var V0r=a((zNe,C0r)=>{"use strict";var xue=K().isPrimitive,Due=y(),zue=j0r();function Xue(r){if(!xue(r))throw new TypeError(Due("invalid argument. First argument must be a string. Value: `%s`.",r));return zue(r)}C0r.exports=Xue});var G0r=a((XNe,U0r)=>{"use strict";var Jue=V0r();U0r.exports=Jue});var W0r=a((JNe,H0r)=>{"use strict";var Yue=K().isPrimitive,Zue=y();function $ue(r){if(!Yue(r))throw new TypeError(Zue("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}H0r.exports=$ue});var D0r=a((YNe,x0r)=>{"use strict";var Que=W0r();x0r.exports=Que});var X0r=a((ZNe,z0r)=>{"use strict";var ue=rr(),Kue=Nar(),roe=Tar(),eoe=Var(),toe=Xar(),ioe=$ar(),noe=a0r(),aoe=p0r(),soe=F0r(),uoe=G0r(),ooe=D0r();function voe(r){return ue(r,"camelcase",Kue),ue(r,"capitalize",roe),ue(r,"constantcase",eoe),ue(r,"kebabcase",toe),ue(r,"lowercase",ioe),ue(r,"pascalcase",noe),ue(r,"snakecase",aoe),ue(r,"startcase",soe),ue(r,"uncapitalize",uoe),ue(r,"uppercase",ooe),r}z0r.exports=voe});var Y0r=a(($Ne,J0r)=>{"use strict";var foe=rr(),coe=Znr(),loe=X0r();function poe(r){return foe(r,"tools",coe({})),r=loe(r),r}J0r.exports=poe});var $0r=a((QNe,Z0r)=>{"use strict";var oe=rr(),goe=Ed(),moe=Sy(),doe=By(),hoe=PE(),qoe=CP(),yoe=QB(),boe=k$(),woe=z$(),Eoe=Mnr(),Noe=Y0r();function Ooe(){var r={};return oe(r,"array",goe({})),oe(r,"assert",moe({})),oe(r,"blas",doe({})),oe(r,"datasets",hoe({})),oe(r,"math",qoe({})),oe(r,"ndarray",yoe({})),oe(r,"random",boe({})),oe(r,"simulate",woe({})),oe(r,"stats",Eoe({})),oe(r,"string",Noe({})),r}Z0r.exports=Ooe});var K0r=a((KNe,Q0r)=>{"use strict";var Aoe=b(),$f=$0r();Aoe($f,"CACHED",$f());Q0r.exports=$f});var Toe=a((rOe,rsr)=>{var Soe=K0r().CACHED;rsr.exports=Soe});return Toe();})();
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
	out = ns.blas.saxpy( N, alpha, ns.array.flattenArray( x ), strideX, offsetX, ns.array.flattenArray( y ), strideY, offsetY ); 
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
	out = ns.blas.daxpy( N, alpha, ns.array.flattenArray( x ), strideX, offsetX, ns.array.flattenArray( y ), strideY, offsetY ); 
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
	shape = ns.array.flattenArray( shape );
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
	data = ns.array.flattenArray( data );
	if ( opts.shape === null ) {
		opts.shape = [ data.length ];
	} else {
		ns.assert.isRange1d( opts.shape, 'Shape argument' );
		opts.shape = ns.array.flattenArray( opts.shape );
		ns.assert.isValidShape( opts.shape, 'Shape argument' );
	}
	if ( opts.strides === null ) {
		opts.strides = ns.ndarray.shape2strides( opts.shape, opts.order );
	} else {
		ns.assert.isRange1d( opts.strides, 'Strides argument' );
		opts.strides = ns.array.flattenArray( opts.strides );
		ns.assert.isValidStrides( opts.strides, 'Strides argument' );
	}
	if ( opts.offset === null ) {
		opts.offset = ns.ndarray.strides2offset( opts.shape, opts.strides );
	} else {
		ns.assert.isNonNegativeInteger( opts.offset, 'Offset argument' );
	}
	ns.assert.isBufferLengthCompatible( data.length, opts.shape, opts.strides, opts.offset ); 
	ndims = opts.shape.length;
	// 6 field names + 2 fields having length rank(shape) + 3 fields having one value + the number of array elements
	len = 6 + (2*ndims) + (3*1) + ns.ndarray.numel( opts.shape );
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
	arr[ ix ] = 'number';
	ix += 1;
	arr[ ix ] = 'data';
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
			opts[ o ] = ns.array.flattenArray( v );
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
	out = ns.stats.bartlettTest( ns.array.flattenArray( values ), opts );
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
	sarray = ns.array.flattenArray( x );
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
	sarray = ns.array.flattenArray( x );
	smask = ns.array.flattenArray( mask );
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
	sarray = ns.array.flattenArray( x );
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
