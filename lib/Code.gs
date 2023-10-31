/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Yf=s((eoe,Jf)=>{"use strict";var W0r=typeof Object.defineProperty=="function"?Object.defineProperty:null;Jf.exports=W0r});var $f=s((toe,Zf)=>{"use strict";var x0r=Yf();function D0r(){try{return x0r({},"x",{}),!0}catch{return!1}}Zf.exports=D0r});var Kf=s((ioe,Qf)=>{"use strict";var z0r=Object.defineProperty;Qf.exports=z0r});var Vu=s((noe,r6)=>{"use strict";function X0r(r){return typeof r=="number"}r6.exports=X0r});var Uu=s((aoe,t6)=>{"use strict";function J0r(r){return r[0]==="-"}function e6(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Y0r(r,e,t){var i=!1,n=e-r.length;return n<0||(J0r(r)&&(i=!0,r=r.substr(1)),r=t?r+e6(n):e6(n)+r,i&&(r="-"+r)),r}t6.exports=Y0r});var s6=s((soe,a6)=>{"use strict";var Z0r=Vu(),i6=Uu(),$0r=String.prototype.toLowerCase,n6=String.prototype.toUpperCase;function Q0r(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Z0r(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=i6(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=i6(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===n6.call(r.specifier)?n6.call(t):$0r.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}a6.exports=Q0r});var o6=s((uoe,u6)=>{"use strict";function K0r(r){return typeof r=="string"}u6.exports=K0r});var c6=s((ooe,f6)=>{"use strict";var rsr=Vu(),esr=Math.abs,tsr=String.prototype.toLowerCase,v6=String.prototype.toUpperCase,Pt=String.prototype.replace,isr=/e\+(\d)$/,nsr=/e-(\d)$/,asr=/^(\d+)$/,ssr=/^(\d+)e/,usr=/\.0$/,osr=/\.0*e/,vsr=/(\..*[^0])0*e/;function fsr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!rsr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":esr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Pt.call(t,vsr,"$1e"),t=Pt.call(t,osr,"e"),t=Pt.call(t,usr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Pt.call(t,isr,"e+0$1"),t=Pt.call(t,nsr,"e-0$1"),r.alternate&&(t=Pt.call(t,asr,"$1."),t=Pt.call(t,ssr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===v6.call(r.specifier)?v6.call(t):tsr.call(t),t}f6.exports=fsr});var g6=s((voe,p6)=>{"use strict";function l6(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function csr(r,e,t){var i=e-r.length;return i<0||(r=t?r+l6(i):l6(i)+r),r}p6.exports=csr});var d6=s((foe,m6)=>{"use strict";var lsr=s6(),psr=o6(),gsr=c6(),msr=g6(),dsr=Uu(),hsr=String.fromCharCode,sa=isNaN,qsr=Array.isArray;function ysr(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function bsr(r){var e,t,i,n,a,u,o,f,v;if(!qsr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,f=0;f<r.length;f++)if(i=r[f],psr(i))u+=i;else{if(e=i.precision!==void 0,i=ysr(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,v=0;v<t.length;v++)switch(n=t.charAt(v),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,sa(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,sa(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=lsr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!sa(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=sa(a)?String(i.arg):hsr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=gsr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=dsr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=msr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}m6.exports=bsr});var q6=s((coe,h6)=>{"use strict";var wsr=d6();h6.exports=wsr});var b6=s((loe,y6)=>{"use strict";var ua=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Esr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function Nsr(r){var e,t,i,n;for(t=[],n=0,i=ua.exec(r);i;)e=r.slice(n,ua.lastIndex-i[0].length),e.length&&t.push(e),t.push(Esr(i)),n=ua.lastIndex,i=ua.exec(r);return e=r.slice(n),e.length&&t.push(e),t}y6.exports=Nsr});var E6=s((poe,w6)=>{"use strict";var Osr=b6();w6.exports=Osr});var O6=s((goe,N6)=>{"use strict";function Asr(r){return typeof r=="string"}N6.exports=Asr});var T6=s((moe,S6)=>{"use strict";var Ssr=q6(),Tsr=E6(),_sr=O6();function A6(r){var e,t,i;if(!_sr(r))throw new TypeError(A6("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Tsr(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Ssr.apply(null,t)}S6.exports=A6});var y=s((doe,_6)=>{"use strict";var Isr=T6();_6.exports=Isr});var M6=s((hoe,F6)=>{"use strict";var I6=y(),Kt=Object.prototype,L6=Kt.toString,R6=Kt.__defineGetter__,P6=Kt.__defineSetter__,Lsr=Kt.__lookupGetter__,Rsr=Kt.__lookupSetter__;function Psr(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||L6.call(r)==="[object Array]")throw new TypeError(I6("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||L6.call(t)==="[object Array]")throw new TypeError(I6("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(Lsr.call(r,e)||Rsr.call(r,e)?(i=r.__proto__,r.__proto__=Kt,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&R6&&R6.call(r,e,t.get),u&&P6&&P6.call(r,e,t.set),r}F6.exports=Psr});var De=s((qoe,B6)=>{"use strict";var Fsr=$f(),Msr=Kf(),Bsr=M6(),Gu;Fsr()?Gu=Msr:Gu=Bsr;B6.exports=Gu});var j6=s((yoe,k6)=>{"use strict";var ksr=De();function jsr(r,e,t){ksr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}k6.exports=jsr});var b=s((boe,C6)=>{"use strict";var Csr=j6();C6.exports=Csr});var U6=s((woe,V6)=>{"use strict";var Vsr=De();function Usr(r,e,t){Vsr(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}V6.exports=Usr});var rr=s((Eoe,G6)=>{"use strict";var Gsr=U6();G6.exports=Gsr});var W6=s((Noe,H6)=>{"use strict";function Hsr(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}H6.exports=Hsr});var D6=s((Ooe,x6)=>{"use strict";var Wsr=W6();x6.exports=Wsr});var X6=s((Aoe,z6)=>{"use strict";function xsr(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}z6.exports=xsr});var Hu=s((Soe,J6)=>{"use strict";var Dsr=X6();J6.exports=Dsr});var Z6=s((Toe,Y6)=>{"use strict";var zsr=Hu();function Xsr(r){return zsr(0,r)}Y6.exports=Xsr});var Wu=s((_oe,$6)=>{"use strict";var Jsr=Z6();$6.exports=Jsr});var rc=s((Ioe,K6)=>{"use strict";var nn=D6(),Ysr=Wu(),Q6=y();function Zsr(r,e,t){var i,n,a,u,o,f,v,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,v=o;v<u;v++)i=[i];for(a=Ysr(u),v=u-1;v>=0;v--)if(c=o-u+v,!(c<0)){if(f=e[c],n=t[v],n!==0&&n<f)throw new Error(Q6("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",nn(e).join(", "),nn(t).join(", "),v));if(f===n)a[v]=1;else if(f===1)a[v]=0;else throw new Error(Q6("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",nn(e).join(", "),nn(t).join(", "),v))}return{ref:r,data:i,shape:nn(t),strides:a}}K6.exports=Zsr});var xu=s((Loe,ec)=>{"use strict";var $sr=rc();ec.exports=$sr});var nc=s((Roe,ic)=>{"use strict";var tc=xu();function Qsr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,S,x,Q;if(N=e[2],o=N[1],f=N[0],!(o<=0||f<=0))for(F=tc(r[0],e[0],N),S=F.data,O=F.strides,i=O[1],n=O[0],F=tc(r[1],e[1],N),x=F.data,O=F.strides,a=O[1],u=O[0],Q=r[2],p=0,h=0,c=0;c<f;c++){for(l=0,g=0,d=S[p],m=x[h],q=Q[c],v=0;v<o;v++)q[v]=t(d[l],m[g]),l+=i,g+=a;p+=n,h+=u}}ic.exports=Qsr});var Du=s((Poe,ac)=>{"use strict";var Ksr=nc();ac.exports=Ksr});var uc=s((Foe,sc)=>{"use strict";var zu=xu();function rur(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,S,x,Q,G,_r,Ir,or,Rt,Xf;if(Q=e[3],v=Q[1],c=Q[0],!(v<=0||c<=0))for(_r=zu(r[0],e[0],Q),Ir=_r.data,G=_r.strides,i=G[1],n=G[0],_r=zu(r[1],e[1],Q),or=_r.data,G=_r.strides,a=G[1],u=G[0],_r=zu(r[2],e[2],Q),Rt=_r.data,G=_r.strides,o=G[1],f=G[0],Xf=r[3],h=0,m=0,N=0,p=0;p<c;p++){for(g=0,d=0,q=0,O=Ir[h],F=or[m],S=Rt[N],x=Xf[p],l=0;l<v;l++)x[l]=t(O[g],F[d],S[q]),g+=i,d+=a,q+=o;h+=n,m+=u,N+=f}}sc.exports=rur});var Xu=s((Moe,oc)=>{"use strict";var eur=uc();oc.exports=eur});var fc=s((Boe,vc)=>{"use strict";function tur(r){var e,t,i,n,a,u,o,f,v,c,l;if(f=r.length,t=[],f===0)return t;if(n=r[0],v=n.length,f===1){for(c=0;c<v;c++)t.push(n[c]);return t}for(e=[v],c=1;c<f;c++)e.push(r[c].length),e[c]>v&&(v=e[c]);for(c=0;c<v;c++)t.push(0);for(c=v-1;c>=0;){for(a=e[0]-v+c,a>=0?i=n[a]:i=1,l=1;l<f;l++){if(u=e[l]-v+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}vc.exports=tur});var oa=s((koe,cc)=>{"use strict";var iur=fc();cc.exports=iur});var pc=s((joe,lc)=>{"use strict";var nur=Hu();function aur(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(nur(r,i));return t}lc.exports=aur});var va=s((Coe,gc)=>{"use strict";var sur=pc();gc.exports=sur});var dc=s((Voe,mc)=>{"use strict";function uur(r,e,t){var i,n,a,u,o,f;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],f=0;f<a;f++)n.push(e.call(t,[o,f]));i.push(n)}return i}mc.exports=uur});var qc=s((Uoe,hc)=>{"use strict";var our=dc();hc.exports=our});var bc=s((Goe,yc)=>{"use strict";function vur(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}yc.exports=vur});var Ju=s((Hoe,wc)=>{"use strict";var fur=bc();wc.exports=fur});var Nc=s((Woe,Ec)=>{"use strict";var cur=/./;Ec.exports=cur});var Yu=s((xoe,Oc)=>{"use strict";function lur(r){return typeof r=="boolean"}Oc.exports=lur});var Sc=s((Doe,Ac)=>{"use strict";function pur(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}Ac.exports=pur});var _c=s((zoe,Tc)=>{"use strict";var gur=Sc();Tc.exports=gur});var Lc=s((Xoe,Ic)=>{"use strict";var mur=_c(),dur=mur();function hur(){return dur&&typeof Symbol.toStringTag=="symbol"}Ic.exports=hur});var ri=s((Joe,Rc)=>{"use strict";var qur=Lc();Rc.exports=qur});var Zu=s((Yoe,Pc)=>{"use strict";var yur=Object.prototype.toString;Pc.exports=yur});var Mc=s((Zoe,Fc)=>{"use strict";var bur=Zu();function wur(r){return bur.call(r)}Fc.exports=wur});var kc=s(($oe,Bc)=>{"use strict";var Eur=Object.prototype.hasOwnProperty;function Nur(r,e){return r==null?!1:Eur.call(r,e)}Bc.exports=Nur});var A=s((Qoe,jc)=>{"use strict";var Our=kc();jc.exports=Our});var Vc=s((Koe,Cc)=>{"use strict";var Aur=typeof Symbol=="function"?Symbol:void 0;Cc.exports=Aur});var $u=s((r2e,Uc)=>{"use strict";var Sur=Vc();Uc.exports=Sur});var Wc=s((e2e,Hc)=>{"use strict";var Gc=$u(),Tur=typeof Gc=="function"?Gc.toStringTag:"";Hc.exports=Tur});var Dc=s((t2e,xc)=>{"use strict";var _ur=A(),an=Wc(),Qu=Zu();function Iur(r){var e,t,i;if(r==null)return Qu.call(r);t=r[an],e=_ur(r,an);try{r[an]=void 0}catch{return Qu.call(r)}return i=Qu.call(r),e?r[an]=t:delete r[an],i}xc.exports=Iur});var er=s((i2e,zc)=>{"use strict";var Lur=ri(),Rur=Mc(),Pur=Dc(),Ku;Lur()?Ku=Pur:Ku=Rur;zc.exports=Ku});var Jc=s((n2e,Xc)=>{"use strict";var Fur=Boolean;Xc.exports=Fur});var ro=s((a2e,Yc)=>{"use strict";var Mur=Jc();Yc.exports=Mur});var $c=s((s2e,Zc)=>{"use strict";var Bur=Boolean.prototype.toString;Zc.exports=Bur});var Kc=s((u2e,Qc)=>{"use strict";var kur=$c();function jur(r){try{return kur.call(r),!0}catch{return!1}}Qc.exports=jur});var eo=s((o2e,r4)=>{"use strict";var Cur=ri(),Vur=er(),Uur=ro(),Gur=Kc(),Hur=Cur();function Wur(r){return typeof r=="object"?r instanceof Uur?!0:Hur?Gur(r):Vur(r)==="[object Boolean]":!1}r4.exports=Wur});var t4=s((v2e,e4)=>{"use strict";var xur=Yu(),Dur=eo();function zur(r){return xur(r)||Dur(r)}e4.exports=zur});var gr=s((f2e,n4)=>{"use strict";var i4=b(),to=t4(),Xur=Yu(),Jur=eo();i4(to,"isPrimitive",Xur);i4(to,"isObject",Jur);n4.exports=to});var s4=s((c2e,a4)=>{"use strict";function Yur(){return new Function("return this;")()}a4.exports=Yur});var o4=s((l2e,u4)=>{"use strict";var Zur=typeof self=="object"?self:null;u4.exports=Zur});var f4=s((p2e,v4)=>{"use strict";var $ur=typeof window=="object"?window:null;v4.exports=$ur});var l4=s((g2e,c4)=>{"use strict";var Qur=typeof globalThis=="object"?globalThis:null;c4.exports=Qur});var io=s((m2e,d4)=>{"use strict";var Kur=gr().isPrimitive,ror=y(),eor=s4(),p4=o4(),g4=f4(),m4=l4();function tor(r){if(arguments.length){if(!Kur(r))throw new TypeError(ror("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return eor()}if(m4)return m4;if(p4)return p4;if(g4)return g4;throw new Error("unexpected error. Unable to resolve global object.")}d4.exports=tor});var y4=s((d2e,q4)=>{"use strict";var ior=io(),h4=ior(),nor=h4.document&&h4.document.childNodes;q4.exports=nor});var w4=s((h2e,b4)=>{"use strict";var aor=Int8Array;b4.exports=aor});var N4=s((q2e,E4)=>{"use strict";var sor=Nc(),uor=y4(),oor=w4();function vor(){return typeof sor=="function"||typeof oor=="object"||typeof uor=="function"}E4.exports=vor});var no=s((y2e,O4)=>{"use strict";function cor(){return/^\s*function\s*([^(]*)/i}O4.exports=cor});var S4=s((b2e,A4)=>{"use strict";var lor=no(),por=lor();A4.exports=por});var ao=s((w2e,_4)=>{"use strict";var gor=b(),T4=no(),mor=S4();gor(T4,"REGEXP",mor);_4.exports=T4});var L4=s((E2e,I4)=>{"use strict";var dor=er(),so;function hor(r){return dor(r)==="[object Array]"}Array.isArray?so=Array.isArray:so=hor;I4.exports=so});var mr=s((N2e,R4)=>{"use strict";var qor=L4();R4.exports=qor});var F4=s((O2e,P4)=>{"use strict";var yor=mr(),bor=y();function wor(r){if(typeof r!="function")throw new TypeError(bor("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!yor(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}P4.exports=wor});var B4=s((A2e,M4)=>{"use strict";var Eor=F4();M4.exports=Eor});var j4=s((S2e,k4)=>{"use strict";function Nor(r){return r!==null&&typeof r=="object"}k4.exports=Nor});var oo=s((T2e,C4)=>{"use strict";var Oor=b(),Aor=B4(),uo=j4(),Sor=Aor(uo);Oor(uo,"isObjectLikeArray",Sor);C4.exports=uo});var U4=s((_2e,V4)=>{"use strict";var Tor=oo();function _or(r){return Tor(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}V4.exports=_or});var Ft=s((I2e,G4)=>{"use strict";var Ior=U4();G4.exports=Ior});var W4=s((L2e,H4)=>{"use strict";var Lor=er(),Ror=ao().REGEXP,Por=Ft();function For(r){var e,t,i;if(t=Lor(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Ror.exec(i.toString()),e)return e[1]}return Por(r)?"Buffer":t}H4.exports=For});var ze=s((R2e,x4)=>{"use strict";var Mor=W4();x4.exports=Mor});var z4=s((P2e,D4)=>{"use strict";var Bor=ze();function kor(r){var e;return r===null?"null":(e=typeof r,e==="object"?Bor(r).toLowerCase():e)}D4.exports=kor});var J4=s((F2e,X4)=>{"use strict";var jor=ze();function Cor(r){return jor(r).toLowerCase()}X4.exports=Cor});var fa=s((M2e,Y4)=>{"use strict";var Vor=N4(),Uor=z4(),Gor=J4(),Hor=Vor()?Gor:Uor;Y4.exports=Hor});var $4=s((B2e,Z4)=>{"use strict";var Wor=fa();function xor(r){return Wor(r)==="function"}Z4.exports=xor});var _=s((k2e,Q4)=>{"use strict";var Dor=$4();Q4.exports=Dor});var rl=s((j2e,K4)=>{"use strict";var zor=Math.floor;K4.exports=zor});var X=s((C2e,el)=>{"use strict";var Xor=rl();el.exports=Xor});var il=s((V2e,tl)=>{"use strict";var Jor=X();function Yor(r){return Jor(r)===r}tl.exports=Yor});var Lr=s((U2e,nl)=>{"use strict";var Zor=il();nl.exports=Zor});var sl=s((G2e,al)=>{"use strict";var $or=9007199254740991;al.exports=$or});var ol=s((H2e,ul)=>{"use strict";var Qor=Lr(),Kor=sl();function r2r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Qor(r.length)&&r.length>=0&&r.length<=Kor}ul.exports=r2r});var Wr=s((W2e,vl)=>{"use strict";var e2r=ol();vl.exports=e2r});var cl=s((x2e,fl)=>{"use strict";var t2r=_();function i2r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&t2r(r.next)}fl.exports=i2r});var pl=s((D2e,ll)=>{"use strict";var n2r=cl();ll.exports=n2r});var dl=s((z2e,ml)=>{"use strict";var gl="function";function a2r(r){return typeof r.get===gl&&typeof r.set===gl}ml.exports=a2r});var vo=s((X2e,hl)=>{"use strict";var s2r=dl();hl.exports=s2r});var bl=s((J2e,yl)=>{"use strict";var ql={complex128:u2r,complex64:o2r,default:v2r};function u2r(r,e,t){r.set(t,e)}function o2r(r,e,t){r.set(t,e)}function v2r(r,e,t){r.set(t,e)}function f2r(r){var e=ql[r];return typeof e=="function"?e:ql.default}yl.exports=f2r});var fo=s((Y2e,wl)=>{"use strict";var c2r=bl();wl.exports=c2r});var Ol=s((Z2e,Nl)=>{"use strict";var El={float64:l2r,float32:p2r,int32:g2r,int16:m2r,int8:d2r,uint32:h2r,uint16:q2r,uint8:y2r,uint8c:b2r,generic:w2r,default:E2r};function l2r(r,e,t){r[e]=t}function p2r(r,e,t){r[e]=t}function g2r(r,e,t){r[e]=t}function m2r(r,e,t){r[e]=t}function d2r(r,e,t){r[e]=t}function h2r(r,e,t){r[e]=t}function q2r(r,e,t){r[e]=t}function y2r(r,e,t){r[e]=t}function b2r(r,e,t){r[e]=t}function w2r(r,e,t){r[e]=t}function E2r(r,e,t){r[e]=t}function N2r(r){var e=El[r];return typeof e=="function"?e:El.default}Nl.exports=N2r});var co=s(($2e,Al)=>{"use strict";var O2r=Ol();Al.exports=O2r});var Tl=s((Q2e,Sl)=>{"use strict";var A2r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};Sl.exports=A2r});var Il=s((K2e,_l)=>{"use strict";var S2r=er(),T2r=typeof Float64Array=="function";function _2r(r){return T2r&&r instanceof Float64Array||S2r(r)==="[object Float64Array]"}_l.exports=_2r});var Rl=s((r1e,Ll)=>{"use strict";var I2r=Il();Ll.exports=I2r});var Fl=s((e1e,Pl)=>{"use strict";var L2r=typeof Float64Array=="function"?Float64Array:null;Pl.exports=L2r});var kl=s((t1e,Bl)=>{"use strict";var R2r=Rl(),Ml=Fl();function P2r(){var r,e;if(typeof Ml!="function")return!1;try{e=new Ml([1,3.14,-3.14,NaN]),r=R2r(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}Bl.exports=P2r});var lo=s((i1e,jl)=>{"use strict";var F2r=kl();jl.exports=F2r});var Vl=s((n1e,Cl)=>{"use strict";var M2r=typeof Float64Array=="function"?Float64Array:void 0;Cl.exports=M2r});var Gl=s((a1e,Ul)=>{"use strict";function B2r(){throw new Error("not implemented")}Ul.exports=B2r});var cr=s((s1e,Hl)=>{"use strict";var k2r=lo(),j2r=Vl(),C2r=Gl(),po;k2r()?po=j2r:po=C2r;Hl.exports=po});var xl=s((u1e,Wl)=>{"use strict";var V2r=er(),U2r=typeof Float32Array=="function";function G2r(r){return U2r&&r instanceof Float32Array||V2r(r)==="[object Float32Array]"}Wl.exports=G2r});var zl=s((o1e,Dl)=>{"use strict";var H2r=xl();Dl.exports=H2r});var I=s((v1e,Xl)=>{"use strict";var W2r=Number.POSITIVE_INFINITY;Xl.exports=W2r});var Yl=s((f1e,Jl)=>{"use strict";var x2r=typeof Float32Array=="function"?Float32Array:null;Jl.exports=x2r});var Ql=s((c1e,$l)=>{"use strict";var D2r=zl(),z2r=I(),Zl=Yl();function X2r(){var r,e;if(typeof Zl!="function")return!1;try{e=new Zl([1,3.14,-3.14,5e40]),r=D2r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===z2r}catch{r=!1}return r}$l.exports=X2r});var r8=s((l1e,Kl)=>{"use strict";var J2r=Ql();Kl.exports=J2r});var t8=s((p1e,e8)=>{"use strict";var Y2r=typeof Float32Array=="function"?Float32Array:void 0;e8.exports=Y2r});var n8=s((g1e,i8)=>{"use strict";function Z2r(){throw new Error("not implemented")}i8.exports=Z2r});var Zr=s((m1e,a8)=>{"use strict";var $2r=r8(),Q2r=t8(),K2r=n8(),go;$2r()?go=Q2r:go=K2r;a8.exports=go});var u8=s((d1e,s8)=>{"use strict";var r1r=er(),e1r=typeof Uint32Array=="function";function t1r(r){return e1r&&r instanceof Uint32Array||r1r(r)==="[object Uint32Array]"}s8.exports=t1r});var ve=s((h1e,o8)=>{"use strict";var i1r=u8();o8.exports=i1r});var ei=s((q1e,v8)=>{"use strict";var n1r=4294967295;v8.exports=n1r});var c8=s((y1e,f8)=>{"use strict";var a1r=typeof Uint32Array=="function"?Uint32Array:null;f8.exports=a1r});var g8=s((b1e,p8)=>{"use strict";var s1r=ve(),mo=ei(),l8=c8();function u1r(){var r,e;if(typeof l8!="function")return!1;try{e=[1,3.14,-3.14,mo+1,mo+2],e=new l8(e),r=s1r(e)&&e[0]===1&&e[1]===3&&e[2]===mo-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}p8.exports=u1r});var d8=s((w1e,m8)=>{"use strict";var o1r=g8();m8.exports=o1r});var q8=s((E1e,h8)=>{"use strict";var v1r=typeof Uint32Array=="function"?Uint32Array:void 0;h8.exports=v1r});var b8=s((N1e,y8)=>{"use strict";function f1r(){throw new Error("not implemented")}y8.exports=f1r});var lr=s((O1e,w8)=>{"use strict";var c1r=d8(),l1r=q8(),p1r=b8(),ho;c1r()?ho=l1r:ho=p1r;w8.exports=ho});var N8=s((A1e,E8)=>{"use strict";var g1r=er(),m1r=typeof Int32Array=="function";function d1r(r){return m1r&&r instanceof Int32Array||g1r(r)==="[object Int32Array]"}E8.exports=d1r});var ca=s((S1e,O8)=>{"use strict";var h1r=N8();O8.exports=h1r});var ti=s((T1e,A8)=>{"use strict";var q1r=2147483647;A8.exports=q1r});var T8=s((_1e,S8)=>{"use strict";var y1r=-2147483648;S8.exports=y1r});var I8=s((I1e,_8)=>{"use strict";var b1r=typeof Int32Array=="function"?Int32Array:null;_8.exports=b1r});var P8=s((L1e,R8)=>{"use strict";var w1r=ca(),E1r=ti(),N1r=T8(),L8=I8();function O1r(){var r,e;if(typeof L8!="function")return!1;try{e=new L8([1,3.14,-3.14,E1r+1]),r=w1r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===N1r}catch{r=!1}return r}R8.exports=O1r});var M8=s((R1e,F8)=>{"use strict";var A1r=P8();F8.exports=A1r});var k8=s((P1e,B8)=>{"use strict";var S1r=typeof Int32Array=="function"?Int32Array:void 0;B8.exports=S1r});var C8=s((F1e,j8)=>{"use strict";function T1r(){throw new Error("not implemented")}j8.exports=T1r});var Xe=s((M1e,V8)=>{"use strict";var _1r=M8(),I1r=k8(),L1r=C8(),qo;_1r()?qo=I1r:qo=L1r;V8.exports=qo});var G8=s((B1e,U8)=>{"use strict";var R1r=er(),P1r=typeof Uint16Array=="function";function F1r(r){return P1r&&r instanceof Uint16Array||R1r(r)==="[object Uint16Array]"}U8.exports=F1r});var W8=s((k1e,H8)=>{"use strict";var M1r=G8();H8.exports=M1r});var D8=s((j1e,x8)=>{"use strict";var B1r=65535;x8.exports=B1r});var X8=s((C1e,z8)=>{"use strict";var k1r=typeof Uint16Array=="function"?Uint16Array:null;z8.exports=k1r});var Z8=s((V1e,Y8)=>{"use strict";var j1r=W8(),yo=D8(),J8=X8();function C1r(){var r,e;if(typeof J8!="function")return!1;try{e=[1,3.14,-3.14,yo+1,yo+2],e=new J8(e),r=j1r(e)&&e[0]===1&&e[1]===3&&e[2]===yo-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Y8.exports=C1r});var Q8=s((U1e,$8)=>{"use strict";var V1r=Z8();$8.exports=V1r});var r5=s((G1e,K8)=>{"use strict";var U1r=typeof Uint16Array=="function"?Uint16Array:void 0;K8.exports=U1r});var t5=s((H1e,e5)=>{"use strict";function G1r(){throw new Error("not implemented")}e5.exports=G1r});var Mt=s((W1e,i5)=>{"use strict";var H1r=Q8(),W1r=r5(),x1r=t5(),bo;H1r()?bo=W1r:bo=x1r;i5.exports=bo});var a5=s((x1e,n5)=>{"use strict";var D1r=er(),z1r=typeof Int16Array=="function";function X1r(r){return z1r&&r instanceof Int16Array||D1r(r)==="[object Int16Array]"}n5.exports=X1r});var u5=s((D1e,s5)=>{"use strict";var J1r=a5();s5.exports=J1r});var v5=s((z1e,o5)=>{"use strict";var Y1r=32767;o5.exports=Y1r});var c5=s((X1e,f5)=>{"use strict";var Z1r=-32768;f5.exports=Z1r});var p5=s((J1e,l5)=>{"use strict";var $1r=typeof Int16Array=="function"?Int16Array:null;l5.exports=$1r});var d5=s((Y1e,m5)=>{"use strict";var Q1r=u5(),K1r=v5(),r3r=c5(),g5=p5();function e3r(){var r,e;if(typeof g5!="function")return!1;try{e=new g5([1,3.14,-3.14,K1r+1]),r=Q1r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===r3r}catch{r=!1}return r}m5.exports=e3r});var q5=s((Z1e,h5)=>{"use strict";var t3r=d5();h5.exports=t3r});var b5=s(($1e,y5)=>{"use strict";var i3r=typeof Int16Array=="function"?Int16Array:void 0;y5.exports=i3r});var E5=s((Q1e,w5)=>{"use strict";function n3r(){throw new Error("not implemented")}w5.exports=n3r});var ii=s((K1e,N5)=>{"use strict";var a3r=q5(),s3r=b5(),u3r=E5(),wo;a3r()?wo=s3r:wo=u3r;N5.exports=wo});var A5=s((r3e,O5)=>{"use strict";var o3r=er(),v3r=typeof Uint8Array=="function";function f3r(r){return v3r&&r instanceof Uint8Array||o3r(r)==="[object Uint8Array]"}O5.exports=f3r});var T5=s((e3e,S5)=>{"use strict";var c3r=A5();S5.exports=c3r});var I5=s((t3e,_5)=>{"use strict";var l3r=255;_5.exports=l3r});var R5=s((i3e,L5)=>{"use strict";var p3r=typeof Uint8Array=="function"?Uint8Array:null;L5.exports=p3r});var M5=s((n3e,F5)=>{"use strict";var g3r=T5(),Eo=I5(),P5=R5();function m3r(){var r,e;if(typeof P5!="function")return!1;try{e=[1,3.14,-3.14,Eo+1,Eo+2],e=new P5(e),r=g3r(e)&&e[0]===1&&e[1]===3&&e[2]===Eo-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}F5.exports=m3r});var k5=s((a3e,B5)=>{"use strict";var d3r=M5();B5.exports=d3r});var C5=s((s3e,j5)=>{"use strict";var h3r=typeof Uint8Array=="function"?Uint8Array:void 0;j5.exports=h3r});var U5=s((u3e,V5)=>{"use strict";function q3r(){throw new Error("not implemented")}V5.exports=q3r});var $r=s((o3e,G5)=>{"use strict";var y3r=k5(),b3r=C5(),w3r=U5(),No;y3r()?No=b3r:No=w3r;G5.exports=No});var W5=s((v3e,H5)=>{"use strict";var E3r=er(),N3r=typeof Uint8ClampedArray=="function";function O3r(r){return N3r&&r instanceof Uint8ClampedArray||E3r(r)==="[object Uint8ClampedArray]"}H5.exports=O3r});var D5=s((f3e,x5)=>{"use strict";var A3r=W5();x5.exports=A3r});var X5=s((c3e,z5)=>{"use strict";var S3r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;z5.exports=S3r});var Z5=s((l3e,Y5)=>{"use strict";var T3r=D5(),J5=X5();function _3r(){var r,e;if(typeof J5!="function")return!1;try{e=new J5([-1,0,1,3.14,4.99,255,256]),r=T3r(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}Y5.exports=_3r});var Q5=s((p3e,$5)=>{"use strict";var I3r=Z5();$5.exports=I3r});var r7=s((g3e,K5)=>{"use strict";var L3r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;K5.exports=L3r});var t7=s((m3e,e7)=>{"use strict";function R3r(){throw new Error("not implemented")}e7.exports=R3r});var ni=s((d3e,i7)=>{"use strict";var P3r=Q5(),F3r=r7(),M3r=t7(),Oo;P3r()?Oo=F3r:Oo=M3r;i7.exports=Oo});var a7=s((h3e,n7)=>{"use strict";var B3r=er(),k3r=typeof Int8Array=="function";function j3r(r){return k3r&&r instanceof Int8Array||B3r(r)==="[object Int8Array]"}n7.exports=j3r});var u7=s((q3e,s7)=>{"use strict";var C3r=a7();s7.exports=C3r});var v7=s((y3e,o7)=>{"use strict";var V3r=127;o7.exports=V3r});var c7=s((b3e,f7)=>{"use strict";var U3r=-128;f7.exports=U3r});var p7=s((w3e,l7)=>{"use strict";var G3r=typeof Int8Array=="function"?Int8Array:null;l7.exports=G3r});var d7=s((E3e,m7)=>{"use strict";var H3r=u7(),W3r=v7(),x3r=c7(),g7=p7();function D3r(){var r,e;if(typeof g7!="function")return!1;try{e=new g7([1,3.14,-3.14,W3r+1]),r=H3r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===x3r}catch{r=!1}return r}m7.exports=D3r});var q7=s((N3e,h7)=>{"use strict";var z3r=d7();h7.exports=z3r});var b7=s((O3e,y7)=>{"use strict";var X3r=typeof Int8Array=="function"?Int8Array:void 0;y7.exports=X3r});var E7=s((A3e,w7)=>{"use strict";function J3r(){throw new Error("not implemented")}w7.exports=J3r});var ai=s((S3e,N7)=>{"use strict";var Y3r=q7(),Z3r=b7(),$3r=E7(),Ao;Y3r()?Ao=Z3r:Ao=$3r;N7.exports=Ao});var So=s((T3e,O7)=>{"use strict";function Q3r(r){return typeof r=="number"}O7.exports=Q3r});var S7=s((_3e,A7)=>{"use strict";A7.exports=Number});var la=s((I3e,T7)=>{"use strict";var K3r=S7();T7.exports=K3r});var I7=s((L3e,_7)=>{"use strict";var rvr=la(),evr=rvr.prototype.toString;_7.exports=evr});var R7=s((R3e,L7)=>{"use strict";var tvr=I7();function ivr(r){try{return tvr.call(r),!0}catch{return!1}}L7.exports=ivr});var To=s((P3e,P7)=>{"use strict";var nvr=ri(),avr=er(),svr=la(),uvr=R7(),ovr=nvr();function vvr(r){return typeof r=="object"?r instanceof svr?!0:ovr?uvr(r):avr(r)==="[object Number]":!1}P7.exports=vvr});var M7=s((F3e,F7)=>{"use strict";var fvr=So(),cvr=To();function lvr(r){return fvr(r)||cvr(r)}F7.exports=lvr});var j=s((M3e,k7)=>{"use strict";var B7=b(),_o=M7(),pvr=So(),gvr=To();B7(_o,"isPrimitive",pvr);B7(_o,"isObject",gvr);k7.exports=_o});var V=s((B3e,j7)=>{"use strict";var mvr=la(),dvr=mvr.NEGATIVE_INFINITY;j7.exports=dvr});var Io=s((k3e,C7)=>{"use strict";var hvr=I(),qvr=V(),yvr=Lr();function bvr(r){return r<hvr&&r>qvr&&yvr(r)}C7.exports=bvr});var Lo=s((j3e,V7)=>{"use strict";var wvr=j().isPrimitive,Evr=Io();function Nvr(r){return wvr(r)&&Evr(r)}V7.exports=Nvr});var Ro=s((C3e,U7)=>{"use strict";var Ovr=j().isObject,Avr=Io();function Svr(r){return Ovr(r)&&Avr(r.valueOf())}U7.exports=Svr});var H7=s((V3e,G7)=>{"use strict";var Tvr=Lo(),_vr=Ro();function Ivr(r){return Tvr(r)||_vr(r)}G7.exports=Ivr});var Br=s((U3e,x7)=>{"use strict";var W7=b(),Po=H7(),Lvr=Lo(),Rvr=Ro();W7(Po,"isPrimitive",Lvr);W7(Po,"isObject",Rvr);x7.exports=Po});var Fo=s((G3e,D7)=>{"use strict";var Pvr=Br().isPrimitive;function Fvr(r){return Pvr(r)&&r>=0}D7.exports=Fvr});var Mo=s((H3e,z7)=>{"use strict";var Mvr=Br().isObject;function Bvr(r){return Mvr(r)&&r.valueOf()>=0}z7.exports=Bvr});var J7=s((W3e,X7)=>{"use strict";var kvr=Fo(),jvr=Mo();function Cvr(r){return kvr(r)||jvr(r)}X7.exports=Cvr});var kr=s((x3e,Z7)=>{"use strict";var Y7=b(),Bo=J7(),Vvr=Fo(),Uvr=Mo();Y7(Bo,"isPrimitive",Vvr);Y7(Bo,"isObject",Uvr);Z7.exports=Bo});var Q7=s((D3e,$7)=>{"use strict";var Gvr=4294967295;$7.exports=Gvr});var r9=s((z3e,K7)=>{"use strict";var Hvr=Lr(),Wvr=Q7();function xvr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Hvr(r.length)&&r.length>=0&&r.length<=Wvr}K7.exports=xvr});var Bt=s((X3e,e9)=>{"use strict";var Dvr=r9();e9.exports=Dvr});var i9=s((J3e,t9)=>{"use strict";var zvr=er(),Xvr=typeof ArrayBuffer=="function";function Jvr(r){return Xvr&&r instanceof ArrayBuffer||zvr(r)==="[object ArrayBuffer]"}t9.exports=Jvr});var pa=s((Y3e,n9)=>{"use strict";var Yvr=i9();n9.exports=Yvr});var s9=s((Z3e,a9)=>{"use strict";var Zvr=mr();function $vr(r){return typeof r=="object"&&r!==null&&!Zvr(r)}a9.exports=$vr});var ga=s(($3e,u9)=>{"use strict";var Qvr=s9();u9.exports=Qvr});var v9=s((Q3e,o9)=>{"use strict";function Kvr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}o9.exports=Kvr});var c9=s((K3e,f9)=>{"use strict";function rfr(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}f9.exports=rfr});var d9=s((rve,m9)=>{"use strict";var l9=j().isPrimitive,p9=De(),sn=b(),g9=y(),efr=v9(),tfr=c9();function kt(r,e){if(!(this instanceof kt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!l9(r))throw new TypeError(g9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!l9(e))throw new TypeError(g9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return p9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),p9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}sn(kt,"BYTES_PER_ELEMENT",8);sn(kt.prototype,"BYTES_PER_ELEMENT",8);sn(kt.prototype,"byteLength",16);sn(kt.prototype,"toString",efr);sn(kt.prototype,"toJSON",tfr);m9.exports=kt});var si=s((eve,h9)=>{"use strict";var ifr=d9();h9.exports=ifr});var y9=s((tve,q9)=>{"use strict";var nfr=typeof Math.fround=="function"?Math.fround:null;q9.exports=nfr});var E9=s((ive,w9)=>{"use strict";var afr=Zr(),b9=new afr(1);function sfr(r){return b9[0]=r,b9[0]}w9.exports=sfr});var A9=s((nve,O9)=>{"use strict";var N9=y9(),ufr=E9(),ko;typeof N9=="function"?ko=N9:ko=ufr;O9.exports=ko});var T9=s((ave,S9)=>{"use strict";function ofr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}S9.exports=ofr});var I9=s((sve,_9)=>{"use strict";function vfr(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}_9.exports=vfr});var B9=s((uve,M9)=>{"use strict";var L9=j().isPrimitive,R9=De(),un=b(),P9=A9(),F9=y(),ffr=T9(),cfr=I9();function jt(r,e){if(!(this instanceof jt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!L9(r))throw new TypeError(F9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!L9(e))throw new TypeError(F9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return R9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:P9(r)}),R9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:P9(e)}),this}un(jt,"BYTES_PER_ELEMENT",4);un(jt.prototype,"BYTES_PER_ELEMENT",4);un(jt.prototype,"byteLength",8);un(jt.prototype,"toString",ffr);un(jt.prototype,"toJSON",cfr);M9.exports=jt});var ui=s((ove,k9)=>{"use strict";var lfr=B9();k9.exports=lfr});var C9=s((vve,j9)=>{"use strict";var pfr=si(),gfr=ui();function mfr(r){return r instanceof pfr||r instanceof gfr?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}j9.exports=mfr});var xr=s((fve,V9)=>{"use strict";var dfr=C9();V9.exports=dfr});var G9=s((cve,U9)=>{"use strict";var hfr=Lr();function qfr(r){return hfr(r/2)}U9.exports=qfr});var ma=s((lve,H9)=>{"use strict";var yfr=G9();H9.exports=yfr});var x9=s((pve,W9)=>{"use strict";var bfr=A(),da=$u();function wfr(){return typeof da=="function"&&typeof da("foo")=="symbol"&&bfr(da,"iterator")&&typeof da.iterator=="symbol"}W9.exports=wfr});var ha=s((gve,D9)=>{"use strict";var Efr=x9();D9.exports=Efr});var X9=s((mve,z9)=>{"use strict";var Nfr=ha(),Ofr=Nfr()?Symbol.iterator:null;z9.exports=Ofr});var qa=s((dve,J9)=>{"use strict";var Afr=X9();J9.exports=Afr});var Z9=s((hve,Y9)=>{"use strict";var Sfr=De();function Tfr(r,e,t){Sfr(r,e,{configurable:!1,enumerable:!1,get:t})}Y9.exports=Tfr});var R=s((qve,$9)=>{"use strict";var _fr=Z9();$9.exports=_fr});var K9=s((yve,Q9)=>{"use strict";function Ifr(r){return r.re}Q9.exports=Ifr});var Je=s((bve,rp)=>{"use strict";var Lfr=K9();rp.exports=Lfr});var tp=s((wve,ep)=>{"use strict";function Rfr(r){return r.im}ep.exports=Rfr});var Ye=s((Eve,ip)=>{"use strict";var Pfr=tp();ip.exports=Pfr});var ap=s((Nve,np)=>{"use strict";var Ffr=Zr();function Mfr(r,e){return new Ffr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}np.exports=Mfr});var oi=s((Ove,sp)=>{"use strict";var Bfr=ap();sp.exports=Bfr});var op=s((Ave,up)=>{"use strict";var kfr=cr();function jfr(r,e){return new kfr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}up.exports=jfr});var vi=s((Sve,vp)=>{"use strict";var Cfr=op();vp.exports=Cfr});var lp=s((Tve,cp)=>{"use strict";var fp={float64:Vfr,float32:Ufr,int32:Gfr,int16:Hfr,int8:Wfr,uint32:xfr,uint16:Dfr,uint8:zfr,uint8c:Xfr,generic:Jfr,default:Yfr};function Vfr(r,e){return r[e]}function Ufr(r,e){return r[e]}function Gfr(r,e){return r[e]}function Hfr(r,e){return r[e]}function Wfr(r,e){return r[e]}function xfr(r,e){return r[e]}function Dfr(r,e){return r[e]}function zfr(r,e){return r[e]}function Xfr(r,e){return r[e]}function Jfr(r,e){return r[e]}function Yfr(r,e){return r[e]}function Zfr(r){var e=fp[r];return typeof e=="function"?e:fp.default}cp.exports=Zfr});var ya=s((_ve,pp)=>{"use strict";var $fr=lp();pp.exports=$fr});var dp=s((Ive,mp)=>{"use strict";var gp={complex128:Qfr,complex64:Kfr,default:r6r};function Qfr(r,e){return r.get(e)}function Kfr(r,e){return r.get(e)}function r6r(r,e){return r.get(e)}function e6r(r){var e=gp[r];return typeof e=="function"?e:gp.default}mp.exports=e6r});var ba=s((Lve,hp)=>{"use strict";var t6r=dp();hp.exports=t6r});var yp=s((Rve,qp)=>{"use strict";var i6r=Bt(),n6r=xr(),a6r=Je(),s6r=Ye(),u6r=y();function o6r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,i6r(i)&&i.length>=2)e.push(i[0],i[1]);else if(n6r(i))e.push(a6r(i),s6r(i));else return new TypeError(u6r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}qp.exports=o6r});var wp=s((Pve,bp)=>{"use strict";var v6r=Bt(),f6r=xr(),c6r=Je(),l6r=Ye(),p6r=y();function g6r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),v6r(a)&&a.length>=2)i.push(a[0],a[1]);else if(f6r(a))i.push(c6r(a),l6r(a));else return new TypeError(p6r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}bp.exports=g6r});var Np=s((Fve,Ep)=>{"use strict";var m6r=xr(),d6r=Je(),h6r=Ye();function q6r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!m6r(i))return null;r[a]=d6r(i),r[a+1]=h6r(i),a+=2}return r}Ep.exports=q6r});var Pp=s((Mve,Rp)=>{"use strict";var on=kr().isPrimitive,Op=Bt(),Co=Wr(),Ap=pa(),Sp=ga(),y6r=mr(),Ct=_(),fi=xr(),wa=ma(),jo=Lr(),b6r=ha(),ci=qa(),dr=b(),Oa=R(),jr=Zr(),Tp=ui(),Z=y(),Ea=Je(),Na=Ye(),w6r=oi(),E6r=vi(),N6r=ya(),O6r=ba(),_p=yp(),A6r=wp(),S6r=Np(),Rr=jr.BYTES_PER_ELEMENT*2,Ip=b6r();function li(r){return r instanceof tr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Lp(r){return r===tr||r.name==="Complex128Array"}function T6r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Rr}function _6r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Rr*2}function tr(){var r,e,t,i;if(e=arguments.length,!(this instanceof tr))return e===0?new tr:e===1?new tr(arguments[0]):e===2?new tr(arguments[0],arguments[1]):new tr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new jr(0);else if(e===1)if(on(arguments[0]))t=new jr(arguments[0]*2);else if(Co(arguments[0]))if(t=arguments[0],i=t.length,i&&y6r(t)&&fi(t[0])){if(t=S6r(new jr(i*2),t),t===null){if(!wa(i))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new jr(arguments[0])}}else{if(T6r(t))t=w6r(t,0);else if(_6r(t))t=E6r(t,0);else if(!wa(i))throw new RangeError(Z("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new jr(t)}else if(Ap(arguments[0])){if(t=arguments[0],!jo(t.byteLength/Rr))throw new RangeError(Z("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Rr,t.byteLength));t=new jr(t)}else if(Sp(arguments[0])){if(t=arguments[0],Ip===!1)throw new TypeError(Z("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ct(t[ci]))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ci](),!Ct(t.next))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=_p(t),t instanceof Error)throw t;t=new jr(t)}else throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!Ap(t))throw new TypeError(Z("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!on(r))throw new TypeError(Z("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!jo(r/Rr))throw new RangeError(Z("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Rr,r));if(e===2){if(i=t.byteLength-r,!jo(i/Rr))throw new RangeError(Z("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Rr,i));t=new jr(t,r)}else{if(i=arguments[2],!on(i))throw new TypeError(Z("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Rr>t.byteLength-r)throw new RangeError(Z("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Rr));t=new jr(t,r,i*2)}}return dr(this,"_buffer",t),dr(this,"_length",t.length/2),this}dr(tr,"BYTES_PER_ELEMENT",Rr);dr(tr,"name","Complex64Array");dr(tr,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,g;if(!Ct(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Lp(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Ct(n))throw new TypeError(Z("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(li(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),fi(l))u[g]=Ea(l),u[g+1]=Na(l);else if(Op(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(Co(e)){if(n){for(v=e.length,e.get&&e.set?f=O6r("default"):f=N6r("default"),p=0;p<v;p++)if(!fi(f(e,p))){c=!0;break}if(c){if(!wa(v))throw new RangeError(Z("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),fi(l))u[g]=Ea(l),u[g+1]=Na(l);else if(Op(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(Sp(e)&&Ip&&Ct(e[ci])){if(u=e[ci](),!Ct(u.next))throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=A6r(u,n,t):o=_p(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});dr(tr,"of",function(){var e,t;if(!Ct(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Lp(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Oa(tr.prototype,"buffer",function(){return this._buffer.buffer});Oa(tr.prototype,"byteLength",function(){return this._buffer.byteLength});Oa(tr.prototype,"byteOffset",function(){return this._buffer.byteOffset});dr(tr.prototype,"BYTES_PER_ELEMENT",tr.BYTES_PER_ELEMENT);dr(tr.prototype,"copyWithin",function(e,t){if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});dr(tr.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},dr(i,"next",f),dr(i,"return",v),ci&&dr(i,ci,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new Tp(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});dr(tr.prototype,"get",function(e){var t;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!on(e))throw new TypeError(Z("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Tp(t[e],t[e+1])});Oa(tr.prototype,"length",function(){return this._length});dr(tr.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!on(i))throw new TypeError(Z("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(fi(e)){if(i>=this._length)throw new RangeError(Z("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ea(e),n[i+1]=Na(e);return}if(li(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Rr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new jr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(Co(e)){for(o=e.length,v=0;v<o;v++)if(!fi(e[v])){u=!0;break}if(u){if(!wa(o))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Rr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new jr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=Ea(f),n[i+1]=Na(f),i+=2;return}throw new TypeError(Z("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Rp.exports=tr});var pi=s((Bve,Fp)=>{"use strict";var I6r=Pp();Fp.exports=I6r});var Bp=s((kve,Mp)=>{"use strict";function L6r(r){return r.re}Mp.exports=L6r});var Qr=s((jve,kp)=>{"use strict";var R6r=Bp();kp.exports=R6r});var Cp=s((Cve,jp)=>{"use strict";function P6r(r){return r.im}jp.exports=P6r});var Kr=s((Vve,Vp)=>{"use strict";var F6r=Cp();Vp.exports=F6r});var Gp=s((Uve,Up)=>{"use strict";var M6r=Bt(),B6r=xr(),k6r=y(),j6r=Qr(),C6r=Kr();function V6r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,M6r(i)&&i.length>=2)e.push(i[0],i[1]);else if(B6r(i))e.push(j6r(i),C6r(i));else return new TypeError(k6r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Up.exports=V6r});var Wp=s((Gve,Hp)=>{"use strict";var U6r=Bt(),G6r=xr(),H6r=y(),W6r=Qr(),x6r=Kr();function D6r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),U6r(a)&&a.length>=2)i.push(a[0],a[1]);else if(G6r(a))i.push(W6r(a),x6r(a));else return new TypeError(H6r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}Hp.exports=D6r});var Dp=s((Hve,xp)=>{"use strict";var z6r=xr(),X6r=Qr(),J6r=Kr();function Y6r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!z6r(i))return null;r[a]=X6r(i),r[a+1]=J6r(i),a+=2}return r}xp.exports=Y6r});var rg=s((Wve,Kp)=>{"use strict";var vn=kr().isPrimitive,zp=Bt(),Uo=Wr(),Xp=pa(),Jp=ga(),Z6r=mr(),Vt=_(),gi=xr(),Aa=ma(),Vo=Lr(),$6r=ha(),mi=qa(),hr=b(),_a=R(),Cr=cr(),Yp=si(),Sa=Qr(),Ta=Kr(),Q6r=oi(),K6r=vi(),rcr=ya(),ecr=ba(),$=y(),Zp=Gp(),tcr=Wp(),icr=Dp(),Pr=Cr.BYTES_PER_ELEMENT*2,$p=$6r();function di(r){return r instanceof ir||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Qp(r){return r===ir||r.name==="Complex64Array"}function ncr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Pr/2}function acr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Pr}function ir(){var r,e,t,i;if(e=arguments.length,!(this instanceof ir))return e===0?new ir:e===1?new ir(arguments[0]):e===2?new ir(arguments[0],arguments[1]):new ir(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Cr(0);else if(e===1)if(vn(arguments[0]))t=new Cr(arguments[0]*2);else if(Uo(arguments[0]))if(t=arguments[0],i=t.length,i&&Z6r(t)&&gi(t[0])){if(t=icr(new Cr(i*2),t),t===null){if(!Aa(i))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Cr(arguments[0])}}else{if(ncr(t))t=Q6r(t,0);else if(acr(t))t=K6r(t,0);else if(!Aa(i))throw new RangeError($("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Cr(t)}else if(Xp(arguments[0])){if(t=arguments[0],!Vo(t.byteLength/Pr))throw new RangeError($("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Pr,t.byteLength));t=new Cr(t)}else if(Jp(arguments[0])){if(t=arguments[0],$p===!1)throw new TypeError($("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Vt(t[mi]))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[mi](),!Vt(t.next))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Zp(t),t instanceof Error)throw t;t=new Cr(t)}else throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!Xp(t))throw new TypeError($("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!vn(r))throw new TypeError($("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Vo(r/Pr))throw new RangeError($("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Pr,r));if(e===2){if(i=t.byteLength-r,!Vo(i/Pr))throw new RangeError($("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Pr,i));t=new Cr(t,r)}else{if(i=arguments[2],!vn(i))throw new TypeError($("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Pr>t.byteLength-r)throw new RangeError($("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Pr));t=new Cr(t,r,i*2)}}return hr(this,"_buffer",t),hr(this,"_length",t.length/2),this}hr(ir,"BYTES_PER_ELEMENT",Pr);hr(ir,"name","Complex128Array");hr(ir,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,g;if(!Vt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Qp(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Vt(n))throw new TypeError($("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(di(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),gi(l))u[g]=Sa(l),u[g+1]=Ta(l);else if(zp(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(Uo(e)){if(n){for(v=e.length,e.get&&e.set?f=ecr("default"):f=rcr("default"),p=0;p<v;p++)if(!gi(f(e,p))){c=!0;break}if(c){if(!Aa(v))throw new RangeError($("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),gi(l))u[g]=Sa(l),u[g+1]=Ta(l);else if(zp(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(Jp(e)&&$p&&Vt(e[mi])){if(u=e[mi](),!Vt(u.next))throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=tcr(u,n,t):o=Zp(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});hr(ir,"of",function(){var e,t;if(!Vt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Qp(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});_a(ir.prototype,"buffer",function(){return this._buffer.buffer});_a(ir.prototype,"byteLength",function(){return this._buffer.byteLength});_a(ir.prototype,"byteOffset",function(){return this._buffer.byteOffset});hr(ir.prototype,"BYTES_PER_ELEMENT",ir.BYTES_PER_ELEMENT);hr(ir.prototype,"copyWithin",function(e,t){if(!di(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});hr(ir.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!di(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},hr(i,"next",f),hr(i,"return",v),mi&&hr(i,mi,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new Yp(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});hr(ir.prototype,"get",function(e){var t;if(!di(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!vn(e))throw new TypeError($("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Yp(t[e],t[e+1])});_a(ir.prototype,"length",function(){return this._length});hr(ir.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!di(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!vn(i))throw new TypeError($("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(gi(e)){if(i>=this._length)throw new RangeError($("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Sa(e),n[i+1]=Ta(e);return}if(di(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Cr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(Uo(e)){for(o=e.length,v=0;v<o;v++)if(!gi(e[v])){u=!0;break}if(u){if(!Aa(o))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Cr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=Sa(f),n[i+1]=Ta(f),i+=2;return}throw new TypeError($("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Kp.exports=ir});var hi=s((xve,eg)=>{"use strict";var scr=rg();eg.exports=scr});var ig=s((Dve,tg)=>{"use strict";var ucr=cr(),ocr=Zr(),vcr=lr(),fcr=Xe(),ccr=Mt(),lcr=ii(),pcr=$r(),gcr=ni(),mcr=ai(),dcr=pi(),hcr=hi(),qcr=[ucr,ocr,fcr,vcr,lcr,ccr,mcr,pcr,gcr,dcr,hcr];tg.exports=qcr});var ag=s((zve,ng)=>{"use strict";var ycr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];ng.exports=ycr});var og=s((Xve,ug)=>{"use strict";var bcr=Ft(),wcr=mr(),Ecr=ze(),Ncr=Tl(),Ocr=ig(),sg=ag(),Acr=sg.length;function Scr(r){var e;if(wcr(r))return"generic";if(bcr(r))return null;for(e=0;e<Acr;e++)if(r instanceof Ocr[e])return sg[e];return Ncr[Ecr(r)]||null}ug.exports=Scr});var Ia=s((Jve,vg)=>{"use strict";var Tcr=og();vg.exports=Tcr});var lg=s((Yve,cg)=>{"use strict";var fg=_(),_cr=Wr(),Icr=pl(),Lcr=vo(),Rcr=fo(),Pcr=co(),Fcr=Ia(),Go=y();function Mcr(){var r,e,t,i,n,a,u,o,f;if(r=arguments[0],arguments.length>1)if(_cr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!fg(t))throw new TypeError(Go("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!fg(t))throw new TypeError(Go("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!Icr(r))throw new TypeError(Go("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,f=r.next(),!f.done;)i.push(t.call(e,f.value,o));return i}for(;f=r.next(),!f.done;)i.push(f.value);return i}if(n=i.length,u=Fcr(i),Lcr(i)?a=Rcr(u):a=Pcr(u),t){for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,t.call(e,f.value,o));return i}for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,f.value);return i}cg.exports=Mcr});var gg=s((Zve,pg)=>{"use strict";var Bcr=lg();pg.exports=Bcr});var dg=s(($ve,mg)=>{"use strict";function kcr(r){return r!==r}mg.exports=kcr});var E=s((Qve,hg)=>{"use strict";var jcr=dg();hg.exports=jcr});var yg=s((Kve,qg)=>{"use strict";var Ccr={Complex64:"complex64",Complex128:"complex128"};qg.exports=Ccr});var wg=s((rfe,bg)=>{"use strict";var Vcr=ui(),Ucr=si(),Gcr=[Vcr,Ucr];bg.exports=Gcr});var Ng=s((efe,Eg)=>{"use strict";var Hcr=["complex64","complex128"];Eg.exports=Hcr});var Sg=s((tfe,Ag)=>{"use strict";var Wcr=ze(),xcr=yg(),Dcr=wg(),Og=Ng(),zcr=Og.length;function Xcr(r){var e;for(e=0;e<zcr;e++)if(r instanceof Dcr[e])return Og[e];return xcr[Wcr(r)]||null}Ag.exports=Xcr});var Ho=s((ife,Tg)=>{"use strict";var Jcr=Sg();Tg.exports=Jcr});var Ig=s((nfe,_g)=>{"use strict";var Ycr=cr(),Zcr=Zr(),$cr=hi(),Qcr=pi(),Kcr={float64:Ycr,float32:Zcr,complex128:$cr,complex64:Qcr};_g.exports=Kcr});var Rg=s((afe,Lg)=>{"use strict";var r4r=Ig();function e4r(r){return r4r[r]||null}Lg.exports=e4r});var Fg=s((sfe,Pg)=>{"use strict";var t4r=Rg();Pg.exports=t4r});var Bg=s((ufe,Mg)=>{"use strict";function i4r(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}Mg.exports=i4r});var Gg=s((ofe,Ug)=>{"use strict";var n4r=ui(),a4r=si(),kg=Qr(),jg=Kr(),Cg=Je(),Vg=Ye();function s4r(r,e,t,i,n,a){var u,o,f,v,c,l,p,g,h,d,m,q,N;if(n===0)return[];if(o=0,r==="float64"?(v=e,l=0):r==="complex64"?(o+=1,v=Cg(e),l=Vg(e)):(v=kg(e),l=jg(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=Cg(i),p=Vg(i)):(c=kg(i),p=jg(i)),o===2?u=n4r:u=a4r,n===1)return a?[new u(c,p)]:[new u(v,l)];for(f=[new u(v,l)],a?q=n-1:q=n,d=(c-v)/q,m=(p-l)/q,N=1;N<q;N++)g=v+d*N,h=l+m*N,f.push(new u(g,h));return a&&f.push(new u(c,p)),f}Ug.exports=s4r});var Wo=s((vfe,Hg)=>{"use strict";function u4r(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}Hg.exports=u4r});var xo=s((ffe,Xg)=>{"use strict";var Wg=Qr(),xg=Kr(),Dg=Je(),zg=Ye();function o4r(r,e,t,i,n,a,u){var o,f,v,c,l,p,g,h,d;if(a===0)return r;if(e==="float64"?(o=t,v=0):e==="complex64"?(o=Dg(t),v=zg(t)):(o=Wg(t),v=xg(t)),i==="float64"?(f=n,c=0):i==="complex64"?(f=Dg(n),c=zg(n)):(f=Wg(n),c=xg(n)),a===1)return u?(r[0]=f,r[1]=c):(r[0]=o,r[1]=v),r;for(r[0]=o,r[1]=v,u?g=a-1:g=a,l=(f-o)/g,p=(c-v)/g,d=2,h=1;h<g;h++)r[d]=o+l*h,r[d+1]=v+p*h,d+=2;return u&&(r[d]=f,r[d+1]=c),r}Xg.exports=o4r});var Yg=s((cfe,Jg)=>{"use strict";var v4r=Object;Jg.exports=v4r});var qi=s((lfe,Zg)=>{"use strict";var f4r=Yg();Zg.exports=f4r});var Qg=s((pfe,$g)=>{"use strict";var c4r=Object.getPrototypeOf;$g.exports=c4r});var rm=s((gfe,Kg)=>{"use strict";function l4r(r){return r.__proto__}Kg.exports=l4r});var tm=s((mfe,em)=>{"use strict";var p4r=er(),g4r=rm();function m4r(r){var e=g4r(r);return e||e===null?e:p4r(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}em.exports=m4r});var nm=s((dfe,im)=>{"use strict";var d4r=_(),h4r=Qg(),q4r=tm(),Do;d4r(Object.getPrototypeOf)?Do=h4r:Do=q4r;im.exports=Do});var sm=s((hfe,am)=>{"use strict";var y4r=qi(),b4r=nm();function w4r(r){return r==null?null:(r=y4r(r),b4r(r))}am.exports=w4r});var Ut=s((qfe,um)=>{"use strict";var E4r=sm();um.exports=E4r});var fm=s((yfe,vm)=>{"use strict";var N4r=ga(),om=_(),O4r=Ut(),La=A(),A4r=er(),S4r=Object.prototype;function T4r(r){var e;for(e in r)if(!La(r,e))return!1;return!0}function _4r(r){var e;return N4r(r)?(e=O4r(r),e?!La(r,"constructor")&&La(e,"constructor")&&om(e.constructor)&&A4r(e.constructor)==="[object Function]"&&La(e,"isPrototypeOf")&&om(e.isPrototypeOf)&&(e===S4r||T4r(r)):!0):!1}vm.exports=_4r});var L=s((bfe,cm)=>{"use strict";var I4r=fm();cm.exports=I4r});var zo=s((wfe,lm)=>{"use strict";function L4r(r){return typeof r=="string"}lm.exports=L4r});var gm=s((Efe,pm)=>{"use strict";var R4r=String.prototype.valueOf;pm.exports=R4r});var dm=s((Nfe,mm)=>{"use strict";var P4r=gm();function F4r(r){try{return P4r.call(r),!0}catch{return!1}}mm.exports=F4r});var Xo=s((Ofe,hm)=>{"use strict";var M4r=ri(),B4r=er(),k4r=dm(),j4r=M4r();function C4r(r){return typeof r=="object"?r instanceof String?!0:j4r?k4r(r):B4r(r)==="[object String]":!1}hm.exports=C4r});var ym=s((Afe,qm)=>{"use strict";var V4r=zo(),U4r=Xo();function G4r(r){return V4r(r)||U4r(r)}qm.exports=G4r});var K=s((Sfe,wm)=>{"use strict";var bm=b(),Jo=ym(),H4r=zo(),W4r=Xo();bm(Jo,"isPrimitive",H4r);bm(Jo,"isObject",W4r);wm.exports=Jo});var Zo=s((Tfe,Nm)=>{"use strict";var x4r=L(),Em=A(),D4r=K().isPrimitive,z4r=gr().isPrimitive,Yo=y();function X4r(r,e){return x4r(e)?Em(e,"dtype")&&(r.dtype=e.dtype,!D4r(r.dtype))?new TypeError(Yo("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):Em(e,"endpoint")&&(r.endpoint=e.endpoint,!z4r(r.endpoint))?new TypeError(Yo("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(Yo("invalid argument. Options argument must be an object. Value: `%s`.",e))}Nm.exports=X4r});var $o=s((_fe,J4r)=>{J4r.exports={endpoint:!0}});var Lm=s((Ife,Im)=>{"use strict";var Om=xr(),Am=j().isPrimitive,Y4r=kr().isPrimitive,Sm=E(),Tm=Ho(),Z4r=Fg(),$4r=oi(),Q4r=vi(),yi=y(),K4r=Bg(),rlr=Gg(),elr=Wo(),_m=xo(),tlr=Zo(),ilr=$o();function nlr(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(o=Tm(r),o===null){if(!Om(r))throw new TypeError(yi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}v=!0}else{if(!Am(r)||Sm(r))throw new TypeError(yi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(f=Tm(e),f===null){if(!Om(e))throw new TypeError(yi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="complex128"}v=!0}else{if(!Am(e)||Sm(e))throw new TypeError(yi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="float64"}if(!Y4r(t))throw new TypeError(yi("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:ilr.endpoint},o===f?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=tlr(i,arguments[3]),a))throw a;if(i.dtype==="generic")return v?rlr(o,r,f,e,t,i.endpoint):K4r(r,e,t,i.endpoint);if(n=Z4r(i.dtype),n===null)throw new TypeError(yi('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return _m($4r(u,0),o,r,f,e,t,i.endpoint),u;if(i.dtype==="complex128")return _m(Q4r(u,0),o,r,f,e,t,i.endpoint),u;if(v)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return elr(u,r,e,t,i.endpoint)}Im.exports=nlr});var Pm=s((Lfe,Rm)=>{"use strict";var alr=vo(),slr=ya(),ulr=co(),olr=ba(),vlr=fo(),flr=Ia();function clr(r){var e=flr(r);return alr(r)?{accessorProtocol:!0,accessors:[olr(e),vlr(e)]}:{accessorProtocol:!1,accessors:[slr(e),ulr(e)]}}Rm.exports=clr});var Mm=s((Rfe,Fm)=>{"use strict";var llr=Pm();Fm.exports=llr});var km=s((Pfe,Bm)=>{"use strict";var plr=Mm();function glr(r){var e=plr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}Bm.exports=glr});var fn=s((Ffe,jm)=>{"use strict";var mlr=km();jm.exports=mlr});var Wm=s((Mfe,Hm)=>{"use strict";var dlr=ui(),hlr=si(),Cm=Qr(),Vm=Kr(),Um=Je(),Gm=Ye();function qlr(r,e,t,i,n,a,u){var o,f,v,c,l,p,g,h,d,m,q,N,O,F;if(a===0)return r;if(f=0,e==="float64"?(v=t,l=0):e==="complex64"?(f+=1,v=Um(t),l=Gm(t)):(v=Cm(t),l=Vm(t)),i==="float64"?(c=n,p=0):i==="complex64"?(f+=1,c=Um(n),p=Gm(n)):(c=Cm(n),p=Vm(n)),f===2?o=dlr:o=hlr,h=r.data,g=r.accessors[1],a===1)return u?g(h,0,new o(c,p)):g(h,0,new o(v,l)),r;for(g(h,0,new o(v,l)),u?O=a-1:O=a,q=(c-v)/O,N=(p-l)/O,F=1;F<O;F++)d=v+q*F,m=l+N*F,g(h,F,new o(d,m));return u&&g(h,O,new o(c,p)),r}Hm.exports=qlr});var Dm=s((Bfe,xm)=>{"use strict";function ylr(r,e,t,i,n){var a,u,o,f,v;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,f=(t-e)/o,v=1;v<o;v++)u(a,v,e+f*v);return n&&u(a,o,t),r}xm.exports=ylr});var Km=s((kfe,Qm)=>{"use strict";var zm=xr(),Xm=j().isPrimitive,blr=Wr(),cn=y(),Jm=E(),Ym=Ho(),wlr=Ia(),Elr=oi(),Nlr=vi(),Zm=fn(),Olr=Wm(),Alr=Dm(),$m=xo(),Slr=Wo(),Tlr=Zo(),_lr=$o();function Ilr(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(a=Ym(r),a===null){if(!zm(r))throw new TypeError(cn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!Xm(r)||Jm(r))throw new TypeError(cn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=Ym(e),u===null){if(!zm(e))throw new TypeError(cn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!Xm(e)||Jm(e))throw new TypeError(cn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!blr(t))throw new TypeError(cn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:_lr.endpoint},arguments.length>3&&(n=Tlr(i,arguments[3]),n))throw n;if(f=wlr(t),f===null&&(f="generic"),f==="complex64")return $m(Elr(t,0),a,r,u,e,t.length,i.endpoint),t;if(f==="complex128")return $m(Nlr(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(f==="generic")return v=Zm(t),Olr(v,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return v=Zm(t),v.accessorProtocol?(Alr(v,r,e,t.length,i.endpoint),t):(Slr(t,r,e,t.length,i.endpoint),t)}Qm.exports=Ilr});var td=s((jfe,ed)=>{"use strict";var Llr=b(),rd=Lm(),Rlr=Km();Llr(rd,"assign",Rlr);ed.exports=rd});var nd=s((Cfe,id)=>{"use strict";var Plr=j().isPrimitive,Flr=K().isPrimitive,Mlr=gr().isPrimitive,Blr=mr(),klr=y(),jlr={number:Plr,string:Flr,boolean:Mlr};function Clr(r,e,t){var i,n,a,u,o,f;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],f=0;f<r.length;f++)if(o=r[f],a=e[f],u=jlr[a],u(o))i.push([[o]]),n.push([1,1]);else if(Blr(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(klr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[f],a,a,String(o)));return[i,n]}id.exports=Clr});var Ra=s((Vfe,ad)=>{"use strict";var Vlr=nd();ad.exports=Vlr});var ud=s((Ufe,sd)=>{"use strict";var Ulr=va();function Glr(r){return Ulr(1,r)}sd.exports=Glr});var vd=s((Gfe,od)=>{"use strict";var Hlr=ud();od.exports=Hlr});var cd=s((Hfe,fd)=>{"use strict";function Wlr(r,e,t){var i,n,a,u,o,f,v,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(v=r[0],c=r[1],u=0;u<n;u++)for(o=v[u],f=c[u],a=0;a<i;a++)f[a]=t(o[a])}fd.exports=Wlr});var Qo=s((Wfe,ld)=>{"use strict";var xlr=cd();ld.exports=xlr});var gd=s((xfe,pd)=>{"use strict";var Dlr=va();function zlr(r){return Dlr(0,r)}pd.exports=zlr});var Pa=s((Dfe,md)=>{"use strict";var Xlr=gd();md.exports=Xlr});var hd=s((zfe,dd)=>{"use strict";var Vr=rr(),Jlr=Du(),Ylr=Xu(),Zlr=oa(),$lr=va(),Qlr=qc(),Klr=Ju(),r8r=gg(),e8r=td(),t8r=Ra(),i8r=vd(),n8r=Qo(),a8r=Pa();function s8r(r){return Vr(r,"bbinary2d",Jlr),Vr(r,"bternary2d",Ylr),Vr(r,"broadcastShapes",Zlr),Vr(r,"filled2d",$lr),Vr(r,"filled2dBy",Qlr),Vr(r,"flattenArray",Klr),Vr(r,"iterator2array",r8r),Vr(r,"linspace",e8r),Vr(r,"normalizeBroadcastArgs",t8r),Vr(r,"ones2d",i8r),Vr(r,"unary2d",n8r),Vr(r,"zeros2d",a8r),r}dd.exports=s8r});var bd=s((Xfe,yd)=>{"use strict";var qd=y();function u8r(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(qd('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(qd('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}yd.exports=u8r});var Ed=s((Jfe,wd)=>{"use strict";var o8r=bd();wd.exports=o8r});var Od=s((Yfe,Nd)=>{"use strict";var v8r=j().isPrimitive,f8r=Ed(),c8r=y();function l8r(r,e,t,i,n,a){var u,o;if(!(v8r(r)&&f8r(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(c8r("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}Nd.exports=l8r});var Sd=s((Zfe,Ad)=>{"use strict";var p8r=Od();Ad.exports=p8r});var _d=s(($fe,Td)=>{"use strict";var g8r=gr().isPrimitive,m8r=y();function d8r(r,e){if(!g8r(r))throw new TypeError(m8r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}Td.exports=d8r});var Ld=s((Qfe,Id)=>{"use strict";var h8r=_d();Id.exports=h8r});var Pd=s((Kfe,Rd)=>{"use strict";function q8r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}Rd.exports=q8r});var Md=s((r6e,Fd)=>{"use strict";var y8r=Pd();Fd.exports=y8r});var kd=s((e6e,Bd)=>{"use strict";var b8r=y(),w8r=Md();function E8r(r,e,t){if(!w8r(r,e))throw new TypeError(b8r("invalid argument. %s must be broadcast compatible.",t))}Bd.exports=E8r});var Cd=s((t6e,jd)=>{"use strict";var N8r=kd();jd.exports=N8r});var Ud=s((i6e,Vd)=>{"use strict";function O8r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}Vd.exports=O8r});var Hd=s((n6e,Gd)=>{"use strict";var A8r=Ud();Gd.exports=A8r});var xd=s((a6e,Wd)=>{"use strict";var S8r=y(),T8r=Hd();function _8r(r,e,t,i){if(!T8r(r,e))throw new TypeError(S8r("invalid argument. %s must be broadcast compatible with %s.",t,i))}Wd.exports=_8r});var zd=s((s6e,Dd)=>{"use strict";var I8r=xd();Dd.exports=I8r});var Jd=s((u6e,Xd)=>{"use strict";var L8r=y();function R8r(r,e){if(r===void 0)throw new Error(L8r("invalid invocation. Must provide %s.",e))}Xd.exports=R8r});var Ko=s((o6e,Yd)=>{"use strict";var P8r=Jd();Yd.exports=P8r});var $d=s((v6e,Zd)=>{"use strict";var F8r=y();function M8r(r,e,t,i){if(!(r>e))throw new TypeError(F8r("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}Zd.exports=M8r});var Kd=s((f6e,Qd)=>{"use strict";var B8r=$d();Qd.exports=B8r});var eh=s((c6e,rh)=>{"use strict";var k8r=y();function j8r(r,e,t,i){if(!(r>=e))throw new TypeError(k8r("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}rh.exports=j8r});var ih=s((l6e,th)=>{"use strict";var C8r=eh();th.exports=C8r});var ah=s((p6e,nh)=>{"use strict";var V8r=Br().isPrimitive,U8r=y();function G8r(r,e){if(!V8r(r))throw new TypeError(U8r("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}nh.exports=G8r});var uh=s((g6e,sh)=>{"use strict";var H8r=ah();sh.exports=H8r});var vh=s((m6e,oh)=>{"use strict";var W8r=y();function x8r(r,e,t,i){if(!(r<e))throw new TypeError(W8r("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}oh.exports=x8r});var ch=s((d6e,fh)=>{"use strict";var D8r=vh();fh.exports=D8r});var ph=s((h6e,lh)=>{"use strict";var z8r=y();function X8r(r,e,t,i){if(!(r<=e))throw new TypeError(z8r("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}lh.exports=X8r});var mh=s((q6e,gh)=>{"use strict";var J8r=ph();gh.exports=J8r});var hh=s((y6e,dh)=>{"use strict";var Y8r=kr().isPrimitive,Z8r=y();function $8r(r,e){if(!Y8r(r))throw new TypeError(Z8r("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}dh.exports=$8r});var yh=s((b6e,qh)=>{"use strict";var Q8r=hh();qh.exports=Q8r});var r2=s((w6e,bh)=>{"use strict";var K8r=j().isPrimitive;function r5r(r){return K8r(r)&&r>=0}bh.exports=r5r});var e2=s((E6e,wh)=>{"use strict";var e5r=j().isObject;function t5r(r){return e5r(r)&&r.valueOf()>=0}wh.exports=t5r});var Nh=s((N6e,Eh)=>{"use strict";var i5r=r2(),n5r=e2();function a5r(r){return i5r(r)||n5r(r)}Eh.exports=a5r});var Fa=s((O6e,Ah)=>{"use strict";var Oh=b(),t2=Nh(),s5r=r2(),u5r=e2();Oh(t2,"isPrimitive",s5r);Oh(t2,"isObject",u5r);Ah.exports=t2});var Th=s((A6e,Sh)=>{"use strict";var o5r=Fa().isPrimitive,v5r=y();function f5r(r,e){if(!o5r(r))throw new TypeError(v5r("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}Sh.exports=f5r});var Ih=s((S6e,_h)=>{"use strict";var c5r=Th();_h.exports=c5r});var Rh=s((T6e,Lh)=>{"use strict";var l5r=j().isPrimitive,p5r=y();function g5r(r,e){if(!l5r(r))throw new TypeError(p5r("invalid argument. %s must be a number. Value: %s.",e,String(r)))}Lh.exports=g5r});var Fh=s((_6e,Ph)=>{"use strict";var m5r=Rh();Ph.exports=m5r});var Bh=s((I6e,Mh)=>{"use strict";var d5r=y();function h5r(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(d5r('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}Mh.exports=h5r});var jh=s((L6e,kh)=>{"use strict";var q5r=Bh();kh.exports=q5r});var i2=s((R6e,Ch)=>{"use strict";var y5r=Br().isPrimitive;function b5r(r){return y5r(r)&&r>0}Ch.exports=b5r});var n2=s((P6e,Vh)=>{"use strict";var w5r=Br().isObject;function E5r(r){return w5r(r)&&r.valueOf()>0}Vh.exports=E5r});var Gh=s((F6e,Uh)=>{"use strict";var N5r=i2(),O5r=n2();function A5r(r){return N5r(r)||O5r(r)}Uh.exports=A5r});var re=s((M6e,Wh)=>{"use strict";var Hh=b(),a2=Gh(),S5r=i2(),T5r=n2();Hh(a2,"isPrimitive",S5r);Hh(a2,"isObject",T5r);Wh.exports=a2});var Dh=s((B6e,xh)=>{"use strict";var _5r=re().isPrimitive,I5r=y();function L5r(r,e){if(!_5r(r))throw new TypeError(I5r("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}xh.exports=L5r});var s2=s((k6e,zh)=>{"use strict";var R5r=Dh();zh.exports=R5r});var u2=s((j6e,Xh)=>{"use strict";var P5r=j().isPrimitive;function F5r(r){return P5r(r)&&r>0}Xh.exports=F5r});var o2=s((C6e,Jh)=>{"use strict";var M5r=j().isObject;function B5r(r){return M5r(r)&&r.valueOf()>0}Jh.exports=B5r});var Zh=s((V6e,Yh)=>{"use strict";var k5r=u2(),j5r=o2();function C5r(r){return k5r(r)||j5r(r)}Yh.exports=C5r});var D=s((U6e,Qh)=>{"use strict";var $h=b(),v2=Zh(),V5r=u2(),U5r=o2();$h(v2,"isPrimitive",V5r);$h(v2,"isObject",U5r);Qh.exports=v2});var rq=s((G6e,Kh)=>{"use strict";var G5r=D().isPrimitive,H5r=y();function W5r(r,e){if(!G5r(r))throw new TypeError(H5r("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}Kh.exports=W5r});var tq=s((H6e,eq)=>{"use strict";var x5r=rq();eq.exports=x5r});var f2=s((W6e,iq)=>{"use strict";var D5r=j().isPrimitive;function z5r(r){return D5r(r)&&r>=0&&r<=1}iq.exports=z5r});var c2=s((x6e,nq)=>{"use strict";var X5r=j().isObject;function J5r(r){return X5r(r)&&r.valueOf()>=0&&r.valueOf()<=1}nq.exports=J5r});var sq=s((D6e,aq)=>{"use strict";var Y5r=f2(),Z5r=c2();function $5r(r){return Y5r(r)||Z5r(r)}aq.exports=$5r});var ln=s((z6e,oq)=>{"use strict";var uq=b(),l2=sq(),Q5r=f2(),K5r=c2();uq(l2,"isPrimitive",Q5r);uq(l2,"isObject",K5r);oq.exports=l2});var fq=s((X6e,vq)=>{"use strict";var r7r=ln().isPrimitive,e7r=y();function t7r(r,e){if(!r7r(r))throw new TypeError(e7r("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}vq.exports=t7r});var lq=s((J6e,cq)=>{"use strict";var i7r=fq();cq.exports=i7r});var gq=s((Y6e,pq)=>{"use strict";var n7r=mr(),a7r=y();function s7r(r,e){if(!n7r(r))throw new TypeError(a7r("invalid argument. %s must be a range. Value: %s.",e,String(r)))}pq.exports=s7r});var dq=s((Z6e,mq)=>{"use strict";var u7r=gq();mq.exports=u7r});var qq=s(($6e,hq)=>{"use strict";function o7r(r){return r.length===1||r[0].length===1}hq.exports=o7r});var bq=s((Q6e,yq)=>{"use strict";var v7r=qq();yq.exports=v7r});var Eq=s((K6e,wq)=>{"use strict";var f7r=mr(),c7r=bq();function l7r(r){return f7r(r)&&c7r(r)}wq.exports=l7r});var Oq=s((rce,Nq)=>{"use strict";var p7r=Eq();Nq.exports=p7r});var Sq=s((ece,Aq)=>{"use strict";var g7r=y(),m7r=Oq();function d7r(r,e){if(!m7r(r))throw new TypeError(g7r("invalid argument. %s must consist of only a single row or a single column.",e))}Aq.exports=d7r});var _q=s((tce,Tq)=>{"use strict";var h7r=Sq();Tq.exports=h7r});var Lq=s((ice,Iq)=>{"use strict";function q7r(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}Iq.exports=q7r});var Pq=s((nce,Rq)=>{"use strict";var y7r=Lq();Rq.exports=y7r});var Mq=s((ace,Fq)=>{"use strict";var b7r=y(),w7r=Pq();function E7r(r,e,t){if(!w7r(r,e))throw new TypeError(b7r("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}Fq.exports=E7r});var kq=s((sce,Bq)=>{"use strict";var N7r=Mq();Bq.exports=N7r});var Cq=s((uce,jq)=>{"use strict";var O7r=K().isPrimitive,A7r=y();function S7r(r,e){if(!O7r(r))throw new TypeError(A7r("invalid argument. %s must be a string. Value: %s.",e,String(r)))}jq.exports=S7r});var Uq=s((oce,Vq)=>{"use strict";var T7r=Cq();Vq.exports=T7r});var Hq=s((vce,Gq)=>{"use strict";var _7r=y(),I7r=kr().isPrimitive;function L7r(r,e){var t;for(t=0;t<r.length;t++)if(!I7r(r[t]))throw new TypeError(_7r("invalid argument. %s must contain only nonnegative integers.",e))}Gq.exports=L7r});var xq=s((fce,Wq)=>{"use strict";var R7r=Hq();Wq.exports=R7r});var zq=s((cce,Dq)=>{"use strict";var P7r=y();function F7r(r){throw new Error(P7r("invalid argument. Unrecognized option name. Value: %s.",String(r)))}Dq.exports=F7r});var Jq=s((lce,Xq)=>{"use strict";var M7r=zq();Xq.exports=M7r});var $q=s((pce,Zq)=>{"use strict";var Yq=s2(),B7r=Ko();function k7r(r,e,t){Yq(r,"Number of rows"),Yq(e,"Number of columns"),B7r(t,"a pseudorandom number generator seed")}Zq.exports=k7r});var Kq=s((gce,Qq)=>{"use strict";var j7r=$q();Qq.exports=j7r});var ey=s((mce,ry)=>{"use strict";var bi=rr(),C7r=mr(),V7r=Br().isPrimitive,U7r=kr().isPrimitive,G7r=Fa().isPrimitive,H7r=re().isPrimitive,W7r=D().isPrimitive;function x7r(r){return bi(r,"isArray",C7r),bi(r,"isInteger",V7r),bi(r,"isNonNegativeInteger",U7r),bi(r,"isNonNegativeNumber",G7r),bi(r,"isPositiveInteger",H7r),bi(r,"isPositiveNumber",W7r),r}ry.exports=x7r});var iy=s((dce,ty)=>{"use strict";var Y=rr(),D7r=Sd(),z7r=Ld(),X7r=Cd(),J7r=zd(),Y7r=Ko(),Z7r=Kd(),$7r=ih(),Q7r=uh(),K7r=ch(),r9r=mh(),e9r=yh(),t9r=Ih(),i9r=Fh(),n9r=jh(),a9r=s2(),s9r=tq(),u9r=lq(),o9r=dq(),v9r=_q(),f9r=kq(),c9r=Uq(),l9r=xq(),p9r=Jq(),g9r=Kq(),m9r=ey();function d9r(r){return Y(r,"isBetween",D7r),Y(r,"isBoolean",z7r),Y(r,"isBroadcastCompatible",X7r),Y(r,"isBroadcastCompatibleWith",J7r),Y(r,"isDefined",Y7r),Y(r,"isGreaterThan",Z7r),Y(r,"isGreaterThanEqual",$7r),Y(r,"isInteger",Q7r),Y(r,"isLessThan",K7r),Y(r,"isLessThanEqual",r9r),Y(r,"isNonNegativeInteger",e9r),Y(r,"isNonNegativeNumber",t9r),Y(r,"isNumber",i9r),Y(r,"isOneOf",n9r),Y(r,"isPositiveInteger",a9r),Y(r,"isPositiveNumber",s9r),Y(r,"isProbability",u9r),Y(r,"isRange",o9r),Y(r,"isRange1d",v9r),Y(r,"isSameShape",f9r),Y(r,"isString",c9r),Y(r,"isValidShape",l9r),Y(r,"unrecognizedOptionName",p9r),Y(r,"verifyCommonPRNGArgs",g9r),Y(r,"base",m9r({})),r}ty.exports=d9r});var ay=s((hce,ny)=>{"use strict";var p2=4;function h9r(r,e,t,i,n,a){var u,o,f,v;if(r<=0||e===0)return n;if(i===1&&a===1){if(f=r%p2,f>0)for(v=0;v<f;v++)n[v]+=e*t[v];if(r<p2)return n;for(v=f;v<r;v+=p2)n[v]+=e*t[v],n[v+1]+=e*t[v+1],n[v+2]+=e*t[v+2],n[v+3]+=e*t[v+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,v=0;v<r;v++)n[o]+=e*t[u],u+=i,o+=a;return n}ny.exports=h9r});var uy=s((qce,sy)=>{"use strict";var pn=4;function q9r(r,e,t,i,n,a,u,o){var f,v,c,l;if(r<=0||e===0)return a;if(f=n,v=o,i===1&&u===1){if(c=r%pn,c>0)for(l=0;l<c;l++)a[v]+=e*t[f],f+=i,v+=u;if(r<pn)return a;for(l=c;l<r;l+=pn)a[v]+=e*t[f],a[v+1]+=e*t[f+1],a[v+2]+=e*t[f+2],a[v+3]+=e*t[f+3],f+=pn,v+=pn;return a}for(l=0;l<r;l++)a[v]+=e*t[f],f+=i,v+=u;return a}sy.exports=q9r});var g2=s((yce,vy)=>{"use strict";var y9r=b(),oy=ay(),b9r=uy();y9r(oy,"ndarray",b9r);vy.exports=oy});var ly=s((bce,cy)=>{"use strict";var fy=rr(),w9r=g2().ndarray,E9r=g2().ndarray;function N9r(r){return fy(r,"daxpy",w9r),fy(r,"saxpy",E9r),r}cy.exports=N9r});var gy=s((wce,py)=>{"use strict";var O9r=Ut(),A9r=er();function S9r(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(A9r(r)==="[object Error]")return!0;r=O9r(r)}return!1}py.exports=S9r});var dy=s((Ece,my)=>{"use strict";var T9r=gy();my.exports=T9r});var m2=s((Nce,hy)=>{"use strict";function _9r(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}hy.exports=_9r});var yy=s((Oce,qy)=>{"use strict";var I9r=m2(),L9r=I9r();qy.exports=L9r});var Ey=s((Ace,wy)=>{"use strict";var R9r=b(),by=m2(),P9r=yy();R9r(by,"REGEXP",P9r);wy.exports=by});var Oy=s((Sce,Ny)=>{"use strict";var F9r=K().isPrimitive,M9r=Ey(),B9r=y();function k9r(r){if(!F9r(r))throw new TypeError(B9r("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=M9r().exec(r),r?new RegExp(r[1],r[2]):null}Ny.exports=k9r});var Sy=s((Tce,Ay)=>{"use strict";var j9r=Oy();Ay.exports=j9r});var d2=s((_ce,Ty)=>{"use strict";var C9r=j().isPrimitive,V9r=E();function U9r(r){return C9r(r)&&V9r(r)}Ty.exports=U9r});var h2=s((Ice,_y)=>{"use strict";var G9r=j().isObject,H9r=E();function W9r(r){return G9r(r)&&H9r(r.valueOf())}_y.exports=W9r});var Ly=s((Lce,Iy)=>{"use strict";var x9r=d2(),D9r=h2();function z9r(r){return x9r(r)||D9r(r)}Iy.exports=z9r});var vr=s((Rce,Py)=>{"use strict";var Ry=b(),q2=Ly(),X9r=d2(),J9r=h2();Ry(q2,"isPrimitive",X9r);Ry(q2,"isObject",J9r);Py.exports=q2});var ky=s((Pce,By)=>{"use strict";var Fy=vr(),Y9r=Wr(),Z9r=K().isPrimitive,$9r=Br().isPrimitive,My=y();function Q9r(r,e,t){var i,n;if(!Y9r(r)&&!Z9r(r))throw new TypeError(My("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!$9r(t))throw new TypeError(My("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(Fy(e)){for(;n<i;n++)if(Fy(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}By.exports=Q9r});var Ma=s((Fce,jy)=>{"use strict";var K9r=ky();jy.exports=K9r});var Ba=s((Mce,Cy)=>{"use strict";function rpr(r){return Object.keys(Object(r))}Cy.exports=rpr});var Uy=s((Bce,Vy)=>{"use strict";var epr=Ba();function tpr(){return(epr(arguments)||"").length!==2}function ipr(){return tpr(1,2)}Vy.exports=ipr});var Hy=s((kce,Gy)=>{"use strict";var npr=typeof Object.keys<"u";Gy.exports=npr});var y2=s((jce,Wy)=>{"use strict";var apr=er();function spr(r){return apr(r)==="[object Arguments]"}Wy.exports=spr});var zy=s((Cce,Dy)=>{"use strict";var upr=y2(),xy;function opr(){return upr(arguments)}xy=opr();Dy.exports=xy});var b2=s((Vce,Xy)=>{"use strict";var vpr=Object.prototype.propertyIsEnumerable;Xy.exports=vpr});var Zy=s((Uce,Yy)=>{"use strict";var fpr=b2(),Jy;function cpr(){return!fpr.call("beep","0")}Jy=cpr();Yy.exports=Jy});var Qy=s((Gce,$y)=>{"use strict";var lpr=K(),ppr=vr().isPrimitive,gpr=Br().isPrimitive,mpr=b2(),dpr=Zy();function hpr(r,e){var t;return r==null?!1:(t=mpr.call(r,e),!t&&dpr&&lpr(r)?(e=+e,!ppr(e)&&gpr(e)&&e>=0&&e<r.length):t)}$y.exports=hpr});var gn=s((Hce,Ky)=>{"use strict";var qpr=Qy();Ky.exports=qpr});var eb=s((Wce,rb)=>{"use strict";var ypr=A(),bpr=gn(),wpr=mr(),Epr=Lr(),Npr=ei();function Opr(r){return r!==null&&typeof r=="object"&&!wpr(r)&&typeof r.length=="number"&&Epr(r.length)&&r.length>=0&&r.length<=Npr&&ypr(r,"callee")&&!bpr(r,"callee")}rb.exports=Opr});var E2=s((xce,tb)=>{"use strict";var Apr=zy(),Spr=y2(),Tpr=eb(),w2;Apr?w2=Spr:w2=Tpr;tb.exports=w2});var ab=s((Dce,nb)=>{"use strict";var _pr=E2(),ib=Ba(),Ipr=Array.prototype.slice;function Lpr(r){return _pr(r)?ib(Ipr.call(r)):ib(r)}nb.exports=Lpr});var ub=s((zce,sb)=>{"use strict";function Rpr(){}sb.exports=Rpr});var C=s((Xce,ob)=>{"use strict";var Ppr=ub();ob.exports=Ppr});var fb=s((Jce,vb)=>{"use strict";var Fpr=gn(),Mpr=C(),Bpr=Fpr(Mpr,"prototype");vb.exports=Bpr});var lb=s((Yce,cb)=>{"use strict";var kpr=gn(),jpr={toString:null},Cpr=!kpr(jpr,"toString");cb.exports=Cpr});var N2=s((Zce,pb)=>{"use strict";function Vpr(r){return r.constructor&&r.constructor.prototype===r}pb.exports=Vpr});var gb=s(($ce,Upr)=>{Upr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var db=s((Qce,mb)=>{"use strict";var Gpr=typeof window>"u"?void 0:window;mb.exports=Gpr});var bb=s((Kce,yb)=>{"use strict";var Hpr=A(),Wpr=Ma(),hb=fa(),xpr=N2(),Dpr=gb(),wi=db(),qb;function zpr(){var r;if(hb(wi)==="undefined")return!1;for(r in wi)try{Wpr(Dpr,r)===-1&&Hpr(wi,r)&&wi[r]!==null&&hb(wi[r])==="object"&&xpr(wi[r])}catch{return!0}return!1}qb=zpr();yb.exports=qb});var Eb=s((r4e,wb)=>{"use strict";var Xpr=typeof window<"u";wb.exports=Xpr});var Ab=s((e4e,Ob)=>{"use strict";var Jpr=bb(),Nb=N2(),Ypr=Eb();function Zpr(r){if(Ypr===!1&&!Jpr)return Nb(r);try{return Nb(r)}catch{return!1}}Ob.exports=Zpr});var Sb=s((t4e,$pr)=>{$pr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Ib=s((i4e,_b)=>{"use strict";var Qpr=oo(),O2=A(),Kpr=E2(),rgr=fb(),egr=lb(),tgr=Ab(),Tb=Sb();function igr(r){var e,t,i,n,a,u,o;if(n=[],Kpr(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!O2(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!Qpr(r))return n;t=rgr&&i}for(a in r)!(t&&a==="prototype")&&O2(r,a)&&n.push(String(a));if(egr)for(e=tgr(r),o=0;o<Tb.length;o++)u=Tb[o],!(e&&u==="constructor")&&O2(r,u)&&n.push(String(u));return n}_b.exports=igr});var Rb=s((n4e,Lb)=>{"use strict";var ngr=Uy(),agr=Hy(),sgr=Ba(),ugr=ab(),ogr=Ib(),ka;agr?ngr()?ka=ugr:ka=sgr:ka=ogr;Lb.exports=ka});var Ei=s((a4e,Pb)=>{"use strict";var vgr=Rb();Pb.exports=vgr});var Mb=s((s4e,Fb)=>{"use strict";var fgr=typeof Object.getOwnPropertyNames<"u";Fb.exports=fgr});var jb=s((u4e,kb)=>{"use strict";var Bb=qi(),cgr=Bb.getOwnPropertyNames;function lgr(r){return cgr(Bb(r))}kb.exports=lgr});var Vb=s((o4e,Cb)=>{"use strict";var pgr=qi(),ggr=Ei();function mgr(r){return ggr(pgr(r))}Cb.exports=mgr});var Gb=s((v4e,Ub)=>{"use strict";var dgr=Mb(),hgr=jb(),qgr=Vb(),A2;dgr?A2=hgr:A2=qgr;Ub.exports=A2});var Wb=s((f4e,Hb)=>{"use strict";var ygr=typeof Object.getOwnPropertyDescriptor<"u";Hb.exports=ygr});var Db=s((c4e,xb)=>{"use strict";var bgr=Object.getOwnPropertyDescriptor;function wgr(r,e){var t;return r==null?null:(t=bgr(r,e),t===void 0?null:t)}xb.exports=wgr});var Xb=s((l4e,zb)=>{"use strict";var Egr=A();function Ngr(r,e){return Egr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}zb.exports=Ngr});var Yb=s((p4e,Jb)=>{"use strict";var Ogr=Wb(),Agr=Db(),Sgr=Xb(),S2;Ogr?S2=Agr:S2=Sgr;Jb.exports=S2});var $b=s((g4e,Zb)=>{"use strict";var Tgr=typeof Buffer=="function"?Buffer:null;Zb.exports=Tgr});var Kb=s((m4e,Qb)=>{"use strict";var _gr=Ft(),ja=$b();function Igr(){var r,e;if(typeof ja!="function")return!1;try{typeof ja.from=="function"?e=ja.from([1,2,3,4]):e=new ja([1,2,3,4]),r=_gr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}Qb.exports=Igr});var ew=s((d4e,rw)=>{"use strict";var Lgr=Kb();rw.exports=Lgr});var nw=s(Ca=>{"use strict";Ca.byteLength=Pgr;Ca.toByteArray=Mgr;Ca.fromByteArray=jgr;var ee=[],Ur=[],Rgr=typeof Uint8Array<"u"?Uint8Array:Array,T2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Gt=0,tw=T2.length;Gt<tw;++Gt)ee[Gt]=T2[Gt],Ur[T2.charCodeAt(Gt)]=Gt;var Gt,tw;Ur["-".charCodeAt(0)]=62;Ur["_".charCodeAt(0)]=63;function iw(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function Pgr(r){var e=iw(r),t=e[0],i=e[1];return(t+i)*3/4-i}function Fgr(r,e,t){return(e+t)*3/4-t}function Mgr(r){var e,t=iw(r),i=t[0],n=t[1],a=new Rgr(Fgr(r,i,n)),u=0,o=n>0?i-4:i,f;for(f=0;f<o;f+=4)e=Ur[r.charCodeAt(f)]<<18|Ur[r.charCodeAt(f+1)]<<12|Ur[r.charCodeAt(f+2)]<<6|Ur[r.charCodeAt(f+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=Ur[r.charCodeAt(f)]<<2|Ur[r.charCodeAt(f+1)]>>4,a[u++]=e&255),n===1&&(e=Ur[r.charCodeAt(f)]<<10|Ur[r.charCodeAt(f+1)]<<4|Ur[r.charCodeAt(f+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function Bgr(r){return ee[r>>18&63]+ee[r>>12&63]+ee[r>>6&63]+ee[r&63]}function kgr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(Bgr(i));return n.join("")}function jgr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(kgr(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(ee[e>>2]+ee[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(ee[e>>10]+ee[e>>4&63]+ee[e<<2&63]+"=")),n.join("")}});var aw=s(_2=>{_2.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,f=(1<<o)-1,v=f>>1,c=-7,l=t?n-1:0,p=t?-1:1,g=r[e+l];for(l+=p,a=g&(1<<-c)-1,g>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-v;else{if(a===f)return u?NaN:(g?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-v}return(g?-1:1)*u*Math.pow(2,a-i)};_2.write=function(r,e,t,i,n,a){var u,o,f,v=a*8-n-1,c=(1<<v)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-u))<1&&(u--,f*=2),u+l>=1?e+=p/f:e+=p*Math.pow(2,1-l),e*f>=2&&(u++,f/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*f-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+g]=o&255,g+=h,o/=256,n-=8);for(u=u<<n|o,v+=n;v>0;r[t+g]=u&255,g+=h,u/=256,v-=8);r[t+g-h]|=d*128}});var Ew=s(Si=>{"use strict";var I2=nw(),Oi=aw(),sw=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Si.Buffer=w;Si.SlowBuffer=Wgr;Si.INSPECT_MAX_BYTES=50;var Va=2147483647;Si.kMaxLength=Va;w.TYPED_ARRAY_SUPPORT=Cgr();!w.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Cgr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(w.prototype,"parent",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.buffer}});Object.defineProperty(w.prototype,"offset",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.byteOffset}});function fe(r){if(r>Va)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,w.prototype),e}function w(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return F2(r)}return fw(r,e,t)}w.poolSize=8192;function fw(r,e,t){if(typeof r=="string")return Ugr(r,e);if(ArrayBuffer.isView(r))return Ggr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(te(r,ArrayBuffer)||r&&te(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(te(r,SharedArrayBuffer)||r&&te(r.buffer,SharedArrayBuffer)))return R2(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return w.from(i,e,t);let n=Hgr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return w.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}w.from=function(r,e,t){return fw(r,e,t)};Object.setPrototypeOf(w.prototype,Uint8Array.prototype);Object.setPrototypeOf(w,Uint8Array);function cw(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function Vgr(r,e,t){return cw(r),r<=0?fe(r):e!==void 0?typeof t=="string"?fe(r).fill(e,t):fe(r).fill(e):fe(r)}w.alloc=function(r,e,t){return Vgr(r,e,t)};function F2(r){return cw(r),fe(r<0?0:M2(r)|0)}w.allocUnsafe=function(r){return F2(r)};w.allocUnsafeSlow=function(r){return F2(r)};function Ugr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!w.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=lw(r,e)|0,i=fe(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function L2(r){let e=r.length<0?0:M2(r.length)|0,t=fe(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function Ggr(r){if(te(r,Uint8Array)){let e=new Uint8Array(r);return R2(e.buffer,e.byteOffset,e.byteLength)}return L2(r)}function R2(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,w.prototype),i}function Hgr(r){if(w.isBuffer(r)){let e=M2(r.length)|0,t=fe(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||k2(r.length)?fe(0):L2(r);if(r.type==="Buffer"&&Array.isArray(r.data))return L2(r.data)}function M2(r){if(r>=Va)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Va.toString(16)+" bytes");return r|0}function Wgr(r){return+r!=r&&(r=0),w.alloc(+r)}w.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==w.prototype};w.compare=function(e,t){if(te(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),te(t,Uint8Array)&&(t=w.from(t,t.offset,t.byteLength)),!w.isBuffer(e)||!w.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};w.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};w.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return w.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=w.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(te(u,Uint8Array))a+u.length>n.length?(w.isBuffer(u)||(u=w.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(w.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function lw(r,e){if(w.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||te(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return P2(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return ww(r).length;default:if(n)return i?-1:P2(r).length;e=(""+e).toLowerCase(),n=!0}}w.byteLength=lw;function xgr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return rmr(this,e,t);case"utf8":case"utf-8":return gw(this,e,t);case"ascii":return Qgr(this,e,t);case"latin1":case"binary":return Kgr(this,e,t);case"base64":return Zgr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return emr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}w.prototype._isBuffer=!0;function Ht(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}w.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Ht(this,t,t+1);return this};w.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Ht(this,t,t+3),Ht(this,t+1,t+2);return this};w.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Ht(this,t,t+7),Ht(this,t+1,t+6),Ht(this,t+2,t+5),Ht(this,t+3,t+4);return this};w.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?gw(this,0,e):xgr.apply(this,arguments)};w.prototype.toLocaleString=w.prototype.toString;w.prototype.equals=function(e){if(!w.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:w.compare(this,e)===0};w.prototype.inspect=function(){let e="",t=Si.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};sw&&(w.prototype[sw]=w.prototype.inspect);w.prototype.compare=function(e,t,i,n,a){if(te(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),!w.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,f=Math.min(u,o),v=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<f;++l)if(v[l]!==c[l]){u=v[l],o=c[l];break}return u<o?-1:o<u?1:0};function pw(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,k2(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=w.from(e,i)),w.isBuffer(e))return e.length===0?-1:uw(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):uw(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function uw(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function f(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let v;if(n){let c=-1;for(v=t;v<u;v++)if(f(r,v)===f(e,c===-1?0:v-c)){if(c===-1&&(c=v),v-c+1===o)return c*a}else c!==-1&&(v-=v-c),c=-1}else for(t+o>u&&(t=u-o),v=t;v>=0;v--){let c=!0;for(let l=0;l<o;l++)if(f(r,v+l)!==f(e,l)){c=!1;break}if(c)return v}return-1}w.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};w.prototype.indexOf=function(e,t,i){return pw(this,e,t,i,!0)};w.prototype.lastIndexOf=function(e,t,i){return pw(this,e,t,i,!1)};function Dgr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(k2(o))return u;r[t+u]=o}return u}function zgr(r,e,t,i){return Ua(P2(e,r.length-t),r,t,i)}function Xgr(r,e,t,i){return Ua(amr(e),r,t,i)}function Jgr(r,e,t,i){return Ua(ww(e),r,t,i)}function Ygr(r,e,t,i){return Ua(smr(e,r.length-t),r,t,i)}w.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return Dgr(this,e,t,i);case"utf8":case"utf-8":return zgr(this,e,t,i);case"ascii":case"latin1":case"binary":return Xgr(this,e,t,i);case"base64":return Jgr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Ygr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};w.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Zgr(r,e,t){return e===0&&t===r.length?I2.fromByteArray(r):I2.fromByteArray(r.slice(e,t))}function gw(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let f,v,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:f=r[n+1],(f&192)===128&&(l=(a&31)<<6|f&63,l>127&&(u=l));break;case 3:f=r[n+1],v=r[n+2],(f&192)===128&&(v&192)===128&&(l=(a&15)<<12|(f&63)<<6|v&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:f=r[n+1],v=r[n+2],c=r[n+3],(f&192)===128&&(v&192)===128&&(c&192)===128&&(l=(a&15)<<18|(f&63)<<12|(v&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return $gr(i)}var ow=4096;function $gr(r){let e=r.length;if(e<=ow)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=ow));return t}function Qgr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function Kgr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function rmr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=umr[r[a]];return n}function emr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}w.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,w.prototype),n};function fr(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}w.prototype.readUintLE=w.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};w.prototype.readUintBE=w.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};w.prototype.readUint8=w.prototype.readUInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]};w.prototype.readUint16LE=w.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]|this[e+1]<<8};w.prototype.readUint16BE=w.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]<<8|this[e+1]};w.prototype.readUint32LE=w.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};w.prototype.readUint32BE=w.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};w.prototype.readBigUInt64LE=Ze(function(e){e=e>>>0,Ai(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&mn(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});w.prototype.readBigUInt64BE=Ze(function(e){e=e>>>0,Ai(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&mn(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});w.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};w.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};w.prototype.readInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};w.prototype.readInt16LE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};w.prototype.readInt16BE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};w.prototype.readInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};w.prototype.readInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};w.prototype.readBigInt64LE=Ze(function(e){e=e>>>0,Ai(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&mn(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});w.prototype.readBigInt64BE=Ze(function(e){e=e>>>0,Ai(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&mn(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});w.prototype.readFloatLE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Oi.read(this,e,!0,23,4)};w.prototype.readFloatBE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Oi.read(this,e,!1,23,4)};w.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Oi.read(this,e,!0,52,8)};w.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Oi.read(this,e,!1,52,8)};function qr(r,e,t,i,n,a){if(!w.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}w.prototype.writeUintLE=w.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};w.prototype.writeUintBE=w.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};w.prototype.writeUint8=w.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,255,0),this[t]=e&255,t+1};w.prototype.writeUint16LE=w.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeUint16BE=w.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeUint32LE=w.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};w.prototype.writeUint32BE=w.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function mw(r,e,t,i,n){bw(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function dw(r,e,t,i,n){bw(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}w.prototype.writeBigUInt64LE=Ze(function(e,t=0){return mw(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeBigUInt64BE=Ze(function(e,t=0){return dw(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);qr(this,e,t,i,f-1,-f)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);qr(this,e,t,i,f-1,-f)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};w.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};w.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};w.prototype.writeBigInt64LE=Ze(function(e,t=0){return mw(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});w.prototype.writeBigInt64BE=Ze(function(e,t=0){return dw(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function hw(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function qw(r,e,t,i,n){return e=+e,t=t>>>0,n||hw(r,e,t,4,34028234663852886e22,-34028234663852886e22),Oi.write(r,e,t,i,23,4),t+4}w.prototype.writeFloatLE=function(e,t,i){return qw(this,e,t,!0,i)};w.prototype.writeFloatBE=function(e,t,i){return qw(this,e,t,!1,i)};function yw(r,e,t,i,n){return e=+e,t=t>>>0,n||hw(r,e,t,8,17976931348623157e292,-17976931348623157e292),Oi.write(r,e,t,i,52,8),t+8}w.prototype.writeDoubleLE=function(e,t,i){return yw(this,e,t,!0,i)};w.prototype.writeDoubleBE=function(e,t,i){return yw(this,e,t,!1,i)};w.prototype.copy=function(e,t,i,n){if(!w.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};w.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!w.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=w.isBuffer(e)?e:w.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var Ni={};function B2(r,e,t){Ni[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}B2("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);B2("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);B2("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=vw(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=vw(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function vw(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function tmr(r,e,t){Ai(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&mn(e,r.length-(t+1))}function bw(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new Ni.ERR_OUT_OF_RANGE("value",o,r)}tmr(i,n,a)}function Ai(r,e){if(typeof r!="number")throw new Ni.ERR_INVALID_ARG_TYPE(e,"number",r)}function mn(r,e,t){throw Math.floor(r)!==r?(Ai(r,t),new Ni.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Ni.ERR_BUFFER_OUT_OF_BOUNDS:new Ni.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var imr=/[^+/0-9A-Za-z-_]/g;function nmr(r){if(r=r.split("=")[0],r=r.trim().replace(imr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function P2(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function amr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function smr(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function ww(r){return I2.toByteArray(nmr(r))}function Ua(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function te(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function k2(r){return r!==r}var umr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function Ze(r){return typeof BigInt>"u"?omr:r}function omr(){throw new Error("BigInt not supported")}});var Ow=s((w4e,Nw)=>{"use strict";var vmr=Ew().Buffer;Nw.exports=vmr});var Sw=s((E4e,Aw)=>{"use strict";function fmr(){throw new Error("not implemented")}Aw.exports=fmr});var $e=s((N4e,Tw)=>{"use strict";var cmr=ew(),lmr=Ow(),pmr=Sw(),j2;cmr()?j2=lmr:j2=pmr;Tw.exports=j2});var Iw=s((O4e,_w)=>{"use strict";var gmr=_(),mmr=$e(),dmr=gmr(mmr.from);_w.exports=dmr});var Rw=s((A4e,Lw)=>{"use strict";var hmr=Ft(),qmr=y(),ymr=$e();function bmr(r){if(!hmr(r))throw new TypeError(qmr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return ymr.from(r)}Lw.exports=bmr});var Fw=s((S4e,Pw)=>{"use strict";var wmr=Ft(),Emr=y(),Nmr=$e();function Omr(r){if(!wmr(r))throw new TypeError(Emr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new Nmr(r)}Pw.exports=Omr});var Bw=s((T4e,Mw)=>{"use strict";var Amr=Iw(),Smr=Rw(),Tmr=Fw(),C2;Amr?C2=Smr:C2=Tmr;Mw.exports=C2});var Cw=s((_4e,jw)=>{"use strict";var _mr=ai(),Imr=$r(),Lmr=ni(),Rmr=ii(),Pmr=Mt(),Fmr=Xe(),Mmr=lr(),Bmr=Zr(),kmr=cr(),kw;function jmr(r){return new _mr(r)}function Cmr(r){return new Imr(r)}function Vmr(r){return new Lmr(r)}function Umr(r){return new Rmr(r)}function Gmr(r){return new Pmr(r)}function Hmr(r){return new Fmr(r)}function Wmr(r){return new Mmr(r)}function xmr(r){return new Bmr(r)}function Dmr(r){return new kmr(r)}function zmr(){var r={int8array:jmr,uint8array:Cmr,uint8clampedarray:Vmr,int16array:Umr,uint16array:Gmr,int32array:Hmr,uint32array:Wmr,float32array:xmr,float64array:Dmr};return r}kw=zmr();jw.exports=kw});var Ww=s((I4e,Hw)=>{"use strict";var Ga=A(),V2=mr(),Vw=Ft(),Xmr=dy(),Uw=fa(),Jmr=Sy(),Ymr=Ma(),Gw=Ei(),Zmr=Gb(),dn=Yb(),$mr=Ut(),hn=De(),Qmr=Bw(),Kmr=Cw();function rdr(r){var e,t,i,n,a,u,o,f;for(e=[],n=[],o=Object.create($mr(r)),e.push(r),n.push(o),t=Zmr(r),f=0;f<t.length;f++)i=t[f],a=dn(r,i),Ga(a,"value")&&(u=V2(r[i])?[]:{},a.value=Wt(r[i],u,e,n,-1)),hn(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function edr(r){var e=[],t=[],i,n,a,u,o,f;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=Gw(r),f=0;f<i.length;f++)u=i[f],n=dn(r,u),Ga(n,"value")&&(a=V2(r[u])?[]:{},n.value=Wt(r[u],a,e,t,-1)),hn(o,u,n);return o}function Wt(r,e,t,i,n){var a,u,o,f,v,c,l,p,g,h;if(n-=1,typeof r!="object"||r===null)return r;if(Vw(r))return Qmr(r);if(Xmr(r))return edr(r);if(o=Uw(r),o==="date")return new Date(+r);if(o==="regexp")return Jmr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(v=Kmr[o],v)return v(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?rdr(r):{};if(u=Gw(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=Uw(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||Vw(p)){a==="object"?(f=dn(r,c),Ga(f,"value")&&(f.value=Wt(p)),hn(e,c,f)):e[c]=Wt(p);continue}if(g=Ymr(t,p),g!==-1){e[c]=i[g];continue}l=V2(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=Wt(p,l,t,i,n):(f=dn(r,c),Ga(f,"value")&&(f.value=Wt(p,l,t,i,n)),hn(e,c,f))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],f=dn(r,c),hn(e,c,f);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}Hw.exports=Wt});var Dw=s((L4e,xw)=>{"use strict";var tdr=mr(),idr=kr().isPrimitive,ndr=y(),adr=I(),sdr=Ww();function udr(r,e){var t;if(arguments.length>1){if(!idr(e))throw new TypeError(ndr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=adr;return t=tdr(r)?new Array(r.length):{},sdr(r,t,[r],[t],e)}xw.exports=udr});var qn=s((R4e,zw)=>{"use strict";var odr=Dw();zw.exports=odr});var Xw=s((P4e,vdr)=>{vdr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var Yw=s((F4e,Jw)=>{"use strict";var fdr=qn(),cdr=Xw();function ldr(){return fdr(cdr)}Jw.exports=ldr});var Zw=s((M4e,pdr)=>{pdr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var Qw=s((B4e,$w)=>{"use strict";var gdr=qn(),mdr=Zw();function ddr(){return gdr(mdr)}$w.exports=ddr});var Kw=s((k4e,hdr)=>{hdr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var eE=s((j4e,rE)=>{"use strict";var qdr=qn(),ydr=Kw();function bdr(){return qdr(ydr)}rE.exports=bdr});var tE=s((C4e,wdr)=>{wdr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var nE=s((V4e,iE)=>{"use strict";var Edr=tE();function Ndr(){return Edr.slice()}iE.exports=Ndr});var aE=s((U4e,Odr)=>{Odr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var uE=s((G4e,sE)=>{"use strict";var Adr=qn(),Sdr=aE();function Tdr(){return Adr(Sdr)}sE.exports=Tdr});var vE=s((H4e,oE)=>{"use strict";var yn=rr(),_dr=Yw(),Idr=Qw(),Ldr=eE(),Rdr=nE(),Pdr=uE();function Fdr(r){return yn(r,"AFINN_111",_dr),yn(r,"AFINN_96",Idr),yn(r,"ANSCOMBES_QUARTET",Ldr),yn(r,"HERNDON_VENUS_SEMIDIAMETERS",Rdr),yn(r,"NIGHTINGALES_ROSE",Pdr),r}oE.exports=Fdr});var cE=s((W4e,fE)=>{"use strict";function Mdr(r,e){return r+e}fE.exports=Mdr});var pE=s((x4e,lE)=>{"use strict";var Bdr=cE();lE.exports=Bdr});var mE=s((D4e,gE)=>{"use strict";var kdr=I(),jdr=V();function Cdr(r){return r===kdr||r===jdr}gE.exports=Cdr});var Fr=s((z4e,dE)=>{"use strict";var Vdr=mE();dE.exports=Vdr});var yE=s((X4e,qE)=>{"use strict";var hE=ma();function Udr(r){return r>0?hE(r-1):hE(r+1)}qE.exports=Udr});var Ha=s((J4e,bE)=>{"use strict";var Gdr=yE();bE.exports=Gdr});var EE=s((Y4e,wE)=>{"use strict";var Hdr=Math.sqrt;wE.exports=Hdr});var U=s((Z4e,NE)=>{"use strict";var Wdr=EE();NE.exports=Wdr});var AE=s(($4e,OE)=>{"use strict";function xdr(r){return Math.abs(r)}OE.exports=xdr});var J=s((Q4e,SE)=>{"use strict";var Ddr=AE();SE.exports=Ddr});var _E=s((K4e,TE)=>{"use strict";var zdr=$r(),Xdr=Mt(),Jdr={uint16:Xdr,uint8:zdr};TE.exports=Jdr});var PE=s((rle,RE)=>{"use strict";var IE=_E(),LE;function Ydr(){var r,e;return r=new IE.uint16(1),r[0]=4660,e=new IE.uint8(r.buffer),e[0]===52}LE=Ydr();RE.exports=LE});var Dr=s((ele,FE)=>{"use strict";var Zdr=PE();FE.exports=Zdr});var kE=s((tle,BE)=>{"use strict";var $dr=Dr(),ME,U2,G2;$dr===!0?(U2=1,G2=0):(U2=0,G2=1);ME={HIGH:U2,LOW:G2};BE.exports=ME});var H2=s((ile,UE)=>{"use strict";var Qdr=lr(),Kdr=cr(),CE=kE(),VE=new Kdr(1),jE=new Qdr(VE.buffer),rhr=CE.HIGH,ehr=CE.LOW;function thr(r,e,t,i){return VE[0]=r,e[i]=jE[rhr],e[i+t]=jE[ehr],e}UE.exports=thr});var HE=s((nle,GE)=>{"use strict";var ihr=H2();function nhr(r){return ihr(r,[0>>>0,0>>>0],1,0)}GE.exports=nhr});var Ti=s((ale,xE)=>{"use strict";var ahr=b(),WE=HE(),shr=H2();ahr(WE,"assign",shr);xE.exports=WE});var zE=s((sle,DE)=>{"use strict";var uhr=Dr(),W2;uhr===!0?W2=0:W2=1;DE.exports=W2});var JE=s((ule,XE)=>{"use strict";var ohr=lr(),vhr=cr(),fhr=zE(),x2=new vhr(1),chr=new ohr(x2.buffer);function lhr(r,e){return x2[0]=r,chr[fhr]=e>>>0,x2[0]}XE.exports=lhr});var ce=s((ole,YE)=>{"use strict";var phr=JE();YE.exports=phr});var $E=s((vle,ZE)=>{"use strict";function ghr(r){return r|0}ZE.exports=ghr});var D2=s((fle,QE)=>{"use strict";var mhr=$E();QE.exports=mhr});var ie=s((cle,KE)=>{"use strict";var dhr=2147483647;KE.exports=dhr});var z2=s((lle,rN)=>{"use strict";var hhr=2147483648;rN.exports=hhr});var tN=s((ple,eN)=>{"use strict";var qhr=Dr(),X2;qhr===!0?X2=1:X2=0;eN.exports=X2});var aN=s((gle,nN)=>{"use strict";var yhr=lr(),bhr=cr(),whr=tN(),iN=new bhr(1),Ehr=new yhr(iN.buffer);function Nhr(r){return iN[0]=r,Ehr[whr]}nN.exports=Nhr});var ar=s((mle,sN)=>{"use strict";var Ohr=aN();sN.exports=Ohr});var vN=s((dle,oN)=>{"use strict";var Ahr=Dr(),uN,J2,Y2;Ahr===!0?(J2=1,Y2=0):(J2=0,Y2=1);uN={HIGH:J2,LOW:Y2};oN.exports=uN});var gN=s((hle,pN)=>{"use strict";var Shr=lr(),Thr=cr(),cN=vN(),lN=new Thr(1),fN=new Shr(lN.buffer),_hr=cN.HIGH,Ihr=cN.LOW;function Lhr(r,e){return fN[_hr]=r,fN[Ihr]=e,lN[0]}pN.exports=Lhr});var _i=s((qle,mN)=>{"use strict";var Rhr=gN();mN.exports=Rhr});var hN=s((yle,dN)=>{"use strict";var Phr=z2(),Fhr=ie(),Mhr=Ti(),Bhr=ar(),khr=_i(),Z2=[0,0];function jhr(r,e){var t,i;return Mhr.assign(r,Z2,1,0),t=Z2[0],t&=Fhr,i=Bhr(e),i&=Phr,t|=i,khr(t,Z2[1])}dN.exports=jhr});var Wa=s((ble,qN)=>{"use strict";var Chr=hN();qN.exports=Chr});var wN=s((wle,bN)=>{"use strict";var yN=Ha(),Vhr=Wa(),Uhr=V(),xa=I();function Ghr(r,e){return e===Uhr?xa:e===xa?0:e>0?yN(e)?r:0:yN(e)?Vhr(xa,r):xa}bN.exports=Ghr});var NN=s((Ele,EN)=>{"use strict";var Hhr=ie(),Whr=ar(),xhr=1072693247,Da=1e300,za=1e-300;function Dhr(r,e){var t,i;return i=Whr(r),t=i&Hhr,t<=xhr?e<0?Da*Da:za*za:e>0?Da*Da:za*za}EN.exports=Dhr});var SN=s((Nle,AN)=>{"use strict";var zhr=J(),ON=I();function Xhr(r,e){return r===-1?(r-r)/(r-r):r===1?1:zhr(r)<1==(e===ON)?0:ON}AN.exports=Xhr});var _N=s((Ole,TN)=>{"use strict";var Jhr=Dr(),$2;Jhr===!0?$2=1:$2=0;TN.exports=$2});var LN=s((Ale,IN)=>{"use strict";var Yhr=lr(),Zhr=cr(),$hr=_N(),Q2=new Zhr(1),Qhr=new Yhr(Q2.buffer);function Khr(r,e){return Q2[0]=r,Qhr[$hr]=e>>>0,Q2[0]}IN.exports=Khr});var le=s((Sle,RN)=>{"use strict";var rqr=LN();RN.exports=rqr});var ne=s((Tle,PN)=>{"use strict";var eqr=1023;PN.exports=eqr});var MN=s((_le,FN)=>{"use strict";function tqr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}FN.exports=tqr});var CN=s((Ile,jN)=>{"use strict";var iqr=ar(),Xa=ce(),BN=le(),nqr=ne(),aqr=MN(),sqr=1048575,kN=1048576,uqr=1072693248,oqr=536870912,vqr=524288,fqr=20,cqr=9007199254740992,lqr=.9617966939259756,pqr=.9617967009544373,gqr=-7028461650952758e-24,mqr=[1,1.5],dqr=[0,.5849624872207642],hqr=[0,1350039202129749e-23];function qqr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,S,x,Q,G;return x=0,t<kN&&(e*=cqr,x-=53,t=iqr(e)),x+=(t>>fqr)-nqr|0,Q=t&sqr|0,t=Q|uqr|0,Q<=235662?G=0:Q<767610?G=1:(G=0,x+=1,t-=kN),e=BN(e,t),c=mqr[G],F=e-c,S=1/(e+c),n=F*S,u=Xa(n,0),i=(t>>1|oqr)+vqr,i+=G<<18,f=BN(0,i),v=e-(f-c),o=S*(F-u*f-u*v),a=n*n,O=a*a*aqr(a),O+=o*(u+n),a=u*u,f=3+a+O,f=Xa(f,0),v=O-(f-3-a),F=u*f,S=o*f+v*n,p=F+S,p=Xa(p,0),g=S-(p-F),h=pqr*p,d=gqr*p+g*lqr+hqr[G],l=dqr[G],N=x,m=h+d+l+N,m=Xa(m,0),q=d-(m-N-l-h),r[0]=m,r[1]=q,r}jN.exports=qqr});var UN=s((Lle,VN)=>{"use strict";function yqr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}VN.exports=yqr});var HN=s((Rle,GN)=>{"use strict";var bqr=ce(),wqr=UN(),Eqr=1.4426950408889634,Nqr=1.4426950216293335,Oqr=19259629911266175e-24;function Aqr(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*wqr(n),u=Nqr*n,o=n*Oqr-a*Eqr,i=u+o,i=bqr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}GN.exports=Aqr});var K2=s((Ple,WN)=>{"use strict";var Sqr=1023;WN.exports=Sqr});var DN=s((Fle,xN)=>{"use strict";var Tqr=-1023;xN.exports=Tqr});var r1=s((Mle,zN)=>{"use strict";var _qr=-1074;zN.exports=_qr});var e1=s((Ble,XN)=>{"use strict";var Iqr=22250738585072014e-324;XN.exports=Iqr});var t1=s((kle,JN)=>{"use strict";var Lqr=e1(),Rqr=Fr(),Pqr=E(),Fqr=J(),Mqr=4503599627370496;function Bqr(r,e,t,i){return Pqr(r)||Rqr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&Fqr(r)<Lqr?(e[i]=r*Mqr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}JN.exports=Bqr});var ZN=s((jle,YN)=>{"use strict";var kqr=t1();function jqr(r){return kqr(r,[0,0],1,0)}YN.exports=jqr});var KN=s((Cle,QN)=>{"use strict";var Cqr=b(),$N=ZN(),Vqr=t1();Cqr($N,"assign",Vqr);QN.exports=$N});var bn=s((Vle,rO)=>{"use strict";var Uqr=2146435072;rO.exports=Uqr});var tO=s((Ule,eO)=>{"use strict";var Gqr=ar(),Hqr=bn(),Wqr=ne();function xqr(r){var e=Gqr(r);return e=(e&Hqr)>>>20,e-Wqr|0}eO.exports=xqr});var nO=s((Gle,iO)=>{"use strict";var Dqr=tO();iO.exports=Dqr});var sO=s((Hle,aO)=>{"use strict";var zqr=I(),Xqr=V(),Jqr=ne(),Yqr=K2(),Zqr=DN(),$qr=r1(),Qqr=E(),Kqr=Fr(),ryr=Wa(),eyr=KN().assign,tyr=nO(),iyr=Ti(),nyr=_i(),ayr=2220446049250313e-31,syr=2148532223>>>0,i1=[0,0],n1=[0,0];function uyr(r,e){var t,i;return e===0||r===0||Qqr(r)||Kqr(r)?r:(eyr(r,i1,1,0),r=i1[0],e+=i1[1],e+=tyr(r),e<$qr?ryr(0,r):e>Yqr?r<0?Xqr:zqr:(e<=Zqr?(e+=52,i=ayr):i=1,iyr.assign(r,n1,1,0),t=n1[0],t&=syr,t|=e+Jqr<<20,i*nyr(t,n1[1])))}aO.exports=uyr});var Ja=s((Wle,uO)=>{"use strict";var oyr=sO();uO.exports=oyr});var Ya=s((xle,oO)=>{"use strict";var vyr=.6931471805599453;oO.exports=vyr});var Za=s((Dle,vO)=>{"use strict";var fyr=1048575;vO.exports=fyr});var cO=s((zle,fO)=>{"use strict";function cyr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}fO.exports=cyr});var qO=s((Xle,hO)=>{"use strict";var lyr=ar(),lO=le(),pyr=ce(),gyr=D2(),myr=Ja(),dyr=Ya(),pO=ne(),gO=ie(),mO=Za(),hyr=cO(),dO=1048576,qyr=1071644672,wn=20,yyr=.6931471824645996,byr=-1904654299957768e-24;function wyr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g;return p=r&gO|0,g=(p>>wn)-pO|0,l=0,p>qyr&&(l=r+(dO>>g+1)>>>0,g=((l&gO)>>wn)-pO|0,i=(l&~(mO>>g))>>>0,a=lO(0,i),l=(l&mO|dO)>>wn-g>>>0,r<0&&(l=-l),e-=a),a=t+e,a=pyr(a,0),o=a*yyr,f=(t-(a-e))*dyr+a*byr,c=o+f,v=f-(c-o),a=c*c,n=c-a*hyr(a),u=c*n/(n-2)-(v+c*v),c=1-(u-c),r=lyr(c),r=gyr(r),r+=l<<wn>>>0,r>>wn<=0?c=myr(c,l):c=lO(c,r),c}hO.exports=wyr});var IO=s((Jle,_O)=>{"use strict";var yO=E(),bO=Ha(),wO=Fr(),Eyr=Lr(),EO=U(),Nyr=J(),a1=Ti(),Oyr=ce(),NO=D2(),Ayr=V(),Syr=I(),s1=ie(),Tyr=wN(),_yr=NN(),Iyr=SN(),Lyr=CN(),Ryr=HN(),Pyr=qO(),Fyr=1072693247,Myr=1105199104,Byr=1139802112,OO=1083179008,kyr=1072693248,jyr=1083231232,Cyr=3230714880>>>0,AO=31,Qe=1e300,Ke=1e-300,Vyr=8008566259537294e-32,pe=[0,0],SO=[0,0];function TO(r,e){var t,i,n,a,u,o,f,v,c,l,p,g,h,d,m,q;if(yO(r)||yO(e))return NaN;if(a1.assign(e,pe,1,0),o=pe[0],f=pe[1],f===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return EO(r);if(e===-.5)return 1/EO(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(wO(e))return Iyr(r,e)}if(a1.assign(r,pe,1,0),a=pe[0],u=pe[1],u===0){if(a===0)return Tyr(r,e);if(r===1)return 1;if(r===-1&&bO(e))return-1;if(wO(r))return r===Ayr?TO(-0,-e):e<0?0:Syr}if(r<0&&Eyr(e)===!1)return(r-r)/(r-r);if(n=Nyr(r),t=a&s1|0,i=o&s1|0,v=a>>>AO|0,c=o>>>AO|0,v&&bO(e)?v=-1:v=1,i>Myr){if(i>Byr)return _yr(r,e);if(t<Fyr)return c===1?v*Qe*Qe:v*Ke*Ke;if(t>kyr)return c===0?v*Qe*Qe:v*Ke*Ke;h=Ryr(SO,n)}else h=Lyr(SO,n,t);if(l=Oyr(e,0),g=(e-l)*h[0]+e*h[1],p=l*h[0],d=g+p,a1.assign(d,pe,1,0),m=NO(pe[0]),q=NO(pe[1]),m>=OO){if((m-OO|q)!==0||g+Vyr>d-p)return v*Qe*Qe}else if((m&s1)>=jyr&&((m-Cyr|q)!==0||g<=d-p))return v*Ke*Ke;return d=Pyr(m,p,g),v*d}_O.exports=TO});var W=s((Yle,LO)=>{"use strict";var Uyr=IO();LO.exports=Uyr});var Ii=s((Zle,RO)=>{"use strict";var Gyr=9007199254740991;RO.exports=Gyr});var $a=s(($le,PO)=>{"use strict";var Hyr=308;PO.exports=Hyr});var u1=s((Qle,FO)=>{"use strict";var Wyr=-308;FO.exports=Wyr});var Qa=s((Kle,MO)=>{"use strict";var xyr=-324;MO.exports=xyr});var GO=s((r8e,UO)=>{"use strict";var BO=E(),Ka=Fr(),kO=W(),Dyr=J(),jO=X(),zyr=Ii(),CO=$a(),Xyr=u1(),Jyr=Qa(),Yyr=V(),Zyr=zyr+1,VO=1e308;function $yr(r,e){var t,i;return BO(r)||BO(e)||Ka(e)?NaN:Ka(r)||r===0||e<Jyr||Dyr(r)>Zyr&&e<=0?r:e>CO?r>=0?0:Yyr:e<Xyr?(t=kO(10,-(e+CO)),i=r*VO*t,Ka(i)?r:jO(i)/VO/t):(t=kO(10,-e),i=r*t,Ka(i)?r:jO(i)/t)}UO.exports=$yr});var WO=s((e8e,HO)=>{"use strict";var Qyr=GO();HO.exports=Qyr});var DO=s((t8e,xO)=>{"use strict";function Kyr(r,e){return r*e}xO.exports=Kyr});var XO=s((i8e,zO)=>{"use strict";var rbr=DO();zO.exports=rbr});var YO=s((n8e,JO)=>{"use strict";function ebr(r,e){return r-e}JO.exports=ebr});var $O=s((a8e,ZO)=>{"use strict";var tbr=YO();ZO.exports=tbr});var KO=s((s8e,QO)=>{"use strict";var En=rr(),ibr=pE(),nbr=WO(),abr=XO(),sbr=W(),ubr=$O();function obr(r){return En(r,"add",ibr),En(r,"floorn",nbr),En(r,"mul",abr),En(r,"pow",sbr),En(r,"sub",ubr),r}QO.exports=obr});var iA=s((u8e,tA)=>{"use strict";var rA=j().isPrimitive,vbr=I(),fbr=V(),eA=y();function cbr(r,e){return t;function t(i,n){var a;if(!rA(i)){if(e.nonnumeric===void 0)throw new TypeError(eA("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!rA(n)){if(e.nonnumeric===void 0)throw new TypeError(eA("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===vbr?e.pinf:a===fbr?e.ninf:a}}tA.exports=cbr});var o1=s((o8e,nA)=>{"use strict";var lbr=iA();nA.exports=lbr});var sA=s((v8e,aA)=>{"use strict";var pbr=oa(),gbr=Du(),mbr=Pa(),dbr=y(),hbr=Ra(),qbr=o1(),ybr=["number","number"],bbr=["First argument","Second argument"];function wbr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(dbr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=hbr([r[0],r[1]],ybr,bbr),t=pbr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=mbr(t),a=qbr(e,i),r[0].push(n),r[1].push(t),gbr(r[0],r[1],a),n}aA.exports=wbr});var oA=s((f8e,uA)=>{"use strict";var Ebr=sA();uA.exports=Ebr});var fA=s((c8e,vA)=>{"use strict";var Nbr=j().isPrimitive,Obr=I(),Abr=V(),Sbr=y();function Tbr(r,e){return t;function t(i){var n;if(!Nbr(i)){if(e.nonnumeric===void 0)throw new TypeError(Sbr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===Obr?e.pinf:n===Abr?e.ninf:n}}vA.exports=Tbr});var v1=s((l8e,cA)=>{"use strict";var _br=fA();cA.exports=_br});var pA=s((p8e,lA)=>{"use strict";var f1=j().isPrimitive,Ibr=I(),Lbr=V(),c1=y();function Rbr(r,e){return t;function t(i,n,a){var u;if(!f1(i)){if(e.nonnumeric===void 0)throw new TypeError(c1("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!f1(n)){if(e.nonnumeric===void 0)throw new TypeError(c1("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!f1(a)){if(e.nonnumeric===void 0)throw new TypeError(c1("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===Ibr?e.pinf:u===Lbr?e.ninf:u}}lA.exports=Rbr});var l1=s((g8e,gA)=>{"use strict";var Pbr=pA();gA.exports=Pbr});var dA=s((m8e,mA)=>{"use strict";var r0=j().isPrimitive,Fbr=I(),Mbr=V(),e0=y();function Bbr(r,e){return t;function t(i,n,a,u){var o;if(!r0(i)){if(e.nonnumeric===void 0)throw new TypeError(e0("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!r0(n)){if(e.nonnumeric===void 0)throw new TypeError(e0("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!r0(a)){if(e.nonnumeric===void 0)throw new TypeError(e0("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!r0(u)){if(e.nonnumeric===void 0)throw new TypeError(e0("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,a,u),o!==o?e.nan:o===Fbr?e.pinf:o===Mbr?e.ninf:o}}mA.exports=Bbr});var qA=s((d8e,hA)=>{"use strict";var kbr=dA();hA.exports=kbr});var bA=s((h8e,yA)=>{"use strict";var Nn=j().isPrimitive,jbr=I(),Cbr=V(),On=y();function Vbr(r,e){return t;function t(i,n,a,u,o){var f;if(!Nn(i)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Nn(n)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Nn(a)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Nn(u)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Nn(o)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return f=r(i,n,a,u,o),f!==f?e.nan:f===jbr?e.pinf:f===Cbr?e.ninf:f}}yA.exports=Vbr});var EA=s((q8e,wA)=>{"use strict";var Ubr=bA();wA.exports=Ubr});var OA=s((y8e,NA)=>{"use strict";var Gbr=oa(),Hbr=Xu(),Wbr=Pa(),xbr=y(),Dbr=Ra(),zbr=l1(),Xbr=["number","number","number"],Jbr=["First argument","Second argument","Third argument"];function Ybr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(xbr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=Dbr([r[0],r[1],r[2]],Xbr,Jbr),t=Gbr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=Wbr(t),a=zbr(e,i),r[0].push(n),r[1].push(t),Hbr(r[0],r[1],a),n}NA.exports=Ybr});var SA=s((b8e,AA)=>{"use strict";var Zbr=OA();AA.exports=Zbr});var _A=s((w8e,TA)=>{"use strict";var $br=mr(),Qbr=Qo(),Kbr=y(),rwr=v1();function ewr(r,e){var t,i,n,a,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(a=r[u],a==="nonnumeric"||a==="nan"||a==="pinf"||a==="ninf")i[a]=r[u+1];else throw new Error(Kbr("invalid argument. Unrecognized option name. Value: %s.",String(a)));return n=rwr(e,i),$br(t)?(Qbr([t,t],[t.length,t[0].length],n),t):n(t)}TA.exports=ewr});var LA=s((E8e,IA)=>{"use strict";var twr=_A();IA.exports=twr});var PA=s((N8e,RA)=>{"use strict";var rt=rr(),iwr=oA(),nwr=v1(),awr=o1(),swr=l1(),uwr=qA(),owr=EA(),vwr=SA(),fwr=LA();function cwr(r){return rt(r,"binary",iwr),rt(r,"d_d",nwr),rt(r,"dd_d",awr),rt(r,"ddd_d",swr),rt(r,"dddd_d",uwr),rt(r,"ddddd_d",owr),rt(r,"ternary",vwr),rt(r,"unary",fwr),r}RA.exports=cwr});var MA=s((O8e,FA)=>{"use strict";function lwr(r){return r*r}FA.exports=lwr});var t0=s((A8e,BA)=>{"use strict";var pwr=MA();BA.exports=pwr});var i0=s((S8e,kA)=>{"use strict";var gwr=.7853981633974483;kA.exports=gwr});var CA=s((T8e,jA)=>{"use strict";function mwr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}jA.exports=mwr});var UA=s((_8e,VA)=>{"use strict";function dwr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}VA.exports=dwr});var WA=s((I8e,HA)=>{"use strict";var hwr=E(),qwr=U(),GA=i0(),ywr=CA(),bwr=UA(),wwr=6123233995736766e-32;function Ewr(r){var e,t,i,n,a;if(hwr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*bwr(t),t=qwr(t+t),a=GA-t,t=t*n-wwr,a-=t,a+=GA;else{if(i<1e-8)return r;t=i*i,a=t*ywr(t),a=i*a+i}return e?-a:a}HA.exports=Ewr});var xt=s((L8e,xA)=>{"use strict";var Nwr=WA();xA.exports=Nwr});var JA=s((R8e,XA)=>{"use strict";var Owr=E(),DA=xt(),Awr=U(),zA=i0(),Swr=6123233995736766e-32;function Twr(r){var e;return Owr(r)?NaN:r<-1||r>1?NaN:r>.5?2*DA(Awr(.5-.5*r)):(e=zA-DA(r),e+=Swr,e+=zA,e)}XA.exports=Twr});var An=s((P8e,YA)=>{"use strict";var _wr=JA();YA.exports=_wr});var $A=s((F8e,ZA)=>{"use strict";function Iwr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}ZA.exports=Iwr});var tS=s((M8e,eS)=>{"use strict";var Lwr=E(),QA=ar(),KA=le(),Rwr=I(),Pwr=V(),rS=ne(),Fwr=$A(),p1=.6931471803691238,g1=19082149292705877e-26,Mwr=.41421356237309503,Bwr=-.2928932188134525,kwr=1862645149230957e-24,jwr=5551115123125783e-32,Cwr=9007199254740992,Vwr=.6666666666666666;function Uwr(r){var e,t,i,n,a,u,o,f,v,c;if(r<-1||Lwr(r))return NaN;if(r===-1)return Pwr;if(r===Rwr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<Mwr){if(i<kwr)return i<jwr?r:r-r*r*.5;r>Bwr&&(c=0,n=r,t=1)}return c!==0&&(i<Cwr?(v=1+r,t=QA(v),c=(t>>20)-rS,c>0?a=1-(v-r):a=r-(v-1),a/=v):(v=r,t=QA(v),c=(t>>20)-rS,a=0),t&=1048575,t<434334?v=KA(v,t|1072693248):(c+=1,v=KA(v,t|1071644672),t=1048576-t>>2),n=v-1),e=.5*n*n,t===0?n===0?(a+=c*g1,c*p1+a):(f=e*(1-Vwr*n),c*p1-(f-(c*g1+a)-n)):(u=n/(2+n),o=u*u,f=o*Fwr(o),c===0?n-(e-u*(e+f)):c*p1-(e-(u*(e+f)+(c*g1+a))-n))}eS.exports=Uwr});var et=s((B8e,iS)=>{"use strict";var Gwr=tS();iS.exports=Gwr});var aS=s((k8e,nS)=>{"use strict";function Hwr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}nS.exports=Hwr});var uS=s((j8e,sS)=>{"use strict";function Wwr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}sS.exports=Wwr});var cS=s((C8e,fS)=>{"use strict";var oS=ar(),xwr=le(),Dwr=E(),zwr=ne(),Xwr=V(),Jwr=aS(),Ywr=uS(),n0=.6931471803691238,a0=19082149292705877e-26,Zwr=0x40000000000000,$wr=.3333333333333333,vS=1048575,Qwr=2146435072,Kwr=1048576,rEr=1072693248;function eEr(r){var e,t,i,n,a,u,o,f,v,c,l,p;return r===0?Xwr:Dwr(r)||r<0?NaN:(t=oS(r),a=0,t<Kwr&&(a-=54,r*=Zwr,t=oS(r)),t>=Qwr?r+r:(a+=(t>>20)-zwr|0,t&=vS,f=t+614244&1048576|0,r=xwr(r,t|f^rEr),a+=f>>20|0,o=r-1,(vS&2+t)<3?o===0?a===0?0:a*n0+a*a0:(u=o*o*(.5-$wr*o),a===0?o-u:a*n0-(u-a*a0-o)):(c=o/(2+o),p=c*c,f=t-398458|0,l=p*p,v=440401-t|0,n=l*Jwr(l),i=p*Ywr(l),f|=v,u=i+n,f>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*n0-(e-(c*(e+u)+a*a0)-o)):a===0?o-c*(o-u):a*n0-(c*(o-u)-a*a0-o))))}fS.exports=eEr});var P=s((V8e,lS)=>{"use strict";var tEr=cS();lS.exports=tEr});var dS=s((U8e,mS)=>{"use strict";var iEr=E(),nEr=et(),pS=U(),aEr=Ya(),gS=P(),sEr=1<<28;function uEr(r){var e;return iEr(r)||r<1?NaN:r===1?0:r>=sEr?gS(r)+aEr:r>2?gS(2*r-1/(r+pS(r*r-1))):(e=r-1,nEr(e+pS(2*e+e*e)))}mS.exports=uEr});var qS=s((G8e,hS)=>{"use strict";var oEr=dS();hS.exports=oEr});var s0=s((H8e,yS)=>{"use strict";var vEr=1.5707963267948966;yS.exports=vEr});var wS=s((W8e,bS)=>{"use strict";function fEr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}bS.exports=fEr});var NS=s((x8e,ES)=>{"use strict";function cEr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}ES.exports=cEr});var SS=s((D8e,AS)=>{"use strict";var lEr=E(),pEr=I(),m1=s0(),gEr=i0(),mEr=V(),dEr=wS(),hEr=NS(),OS=6123233995736766e-32,qEr=2.414213562373095;function yEr(r){var e,t,i,n;return lEr(r)||r===0?r:r===pEr?m1:r===mEr?-m1:(r<0&&(t=!0,r=-r),e=0,r>qEr?(i=m1,e=1,r=-(1/r)):r<=.66?i=0:(i=gEr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*dEr(n)/hEr(n),n=r*n+r,e===2?n+=.5*OS:e===1&&(n+=OS),i+=n,t?-i:i)}AS.exports=yEr});var u0=s((z8e,TS)=>{"use strict";var bEr=SS();TS.exports=bEr});var IS=s((X8e,_S)=>{"use strict";var wEr=u0();function EEr(r){return wEr(1/r)}_S.exports=EEr});var RS=s((J8e,LS)=>{"use strict";var NEr=IS();LS.exports=NEr});var FS=s((Y8e,PS)=>{"use strict";var OEr=xt();function AEr(r){return OEr(1+r)}PS.exports=AEr});var BS=s((Z8e,MS)=>{"use strict";var SEr=FS();MS.exports=SEr});var jS=s(($8e,kS)=>{"use strict";var TEr=xt();function _Er(r){return TEr(1-r)}kS.exports=_Er});var VS=s((Q8e,CS)=>{"use strict";var IEr=jS();CS.exports=IEr});var GS=s((K8e,US)=>{"use strict";var LEr=xt();function REr(r){return LEr(1/r)}US.exports=REr});var WS=s((r5e,HS)=>{"use strict";var PEr=GS();HS.exports=PEr});var XS=s((e5e,zS)=>{"use strict";var FEr=Fr(),MEr=E(),BEr=et(),xS=U(),kEr=Ya(),DS=P(),jEr=1/(1<<28),CEr=1<<28;function VEr(r){var e,t,i;return MEr(r)||FEr(r)?r:(r<0&&(r=-r,e=!0),r<jEr?i=r:r>CEr?i=DS(r)+kEr:r>2?i=DS(2*r+1/(xS(r*r+1)+r)):(t=r*r,i=BEr(r+t/(1+xS(1+t)))),e?-i:i)}zS.exports=VEr});var d1=s((t5e,JS)=>{"use strict";var UEr=XS();JS.exports=UEr});var ZS=s((i5e,YS)=>{"use strict";var GEr=d1();function HEr(r){return GEr(1/r)}YS.exports=HEr});var QS=s((n5e,$S)=>{"use strict";var WEr=ZS();$S.exports=WEr});var rT=s((a5e,KS)=>{"use strict";var xEr=An(),DEr=U();function zEr(r){return 2*xEr(DEr(r))}KS.exports=zEr});var tT=s((s5e,eT)=>{"use strict";var XEr=rT();eT.exports=XEr});var nT=s((u5e,iT)=>{"use strict";var JEr=xt(),YEr=U();function ZEr(r){return 2*JEr(YEr(r))}iT.exports=ZEr});var sT=s((o5e,aT)=>{"use strict";var $Er=nT();aT.exports=$Er});var vT=s((v5e,oT)=>{"use strict";var QEr=E(),uT=et(),KEr=I(),rNr=V(),eNr=1/(1<<28);function tNr(r){var e,t;return QEr(r)||r<-1||r>1?NaN:r===1?KEr:r===-1?rNr:(r<0&&(e=!0,r=-r),r<eNr?e?-r:r:(r<.5?(t=r+r,t=.5*uT(t+t*r/(1-r))):t=.5*uT((r+r)/(1-r)),e?-t:t))}oT.exports=tNr});var cT=s((f5e,fT)=>{"use strict";var iNr=vT();fT.exports=iNr});var pT=s((c5e,lT)=>{"use strict";var nNr=An();function aNr(r){return nNr(1+r)}lT.exports=aNr});var mT=s((l5e,gT)=>{"use strict";var sNr=pT();gT.exports=sNr});var hT=s((p5e,dT)=>{"use strict";var uNr=An();function oNr(r){return uNr(1-r)}dT.exports=oNr});var yT=s((g5e,qT)=>{"use strict";var vNr=hT();qT.exports=vNr});var wT=s((m5e,bT)=>{"use strict";var fNr=X();function cNr(r){return fNr(r)===r&&r>=0}bT.exports=cNr});var h1=s((d5e,ET)=>{"use strict";var lNr=wT();ET.exports=lNr});var NT=s((h5e,pNr)=>{pNr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var AT=s((q5e,OT)=>{"use strict";var gNr=h1(),mNr=E(),dNr=Ha(),hNr=V(),qNr=I(),yNr=NT(),bNr=258;function wNr(r){return mNr(r)||!gNr(r)?NaN:dNr(r)?0:r>bNr?r/2&1?qNr:hNr:yNr[r/2]}OT.exports=wNr});var TT=s((y5e,ST)=>{"use strict";var ENr=AT();ST.exports=ENr});var IT=s((b5e,_T)=>{"use strict";var NNr=Dr(),q1;NNr===!0?q1=0:q1=1;_T.exports=q1});var PT=s((w5e,RT)=>{"use strict";var ONr=lr(),ANr=cr(),SNr=IT(),LT=new ANr(1),TNr=new ONr(LT.buffer);function _Nr(r){return LT[0]=r,TNr[SNr]}RT.exports=_Nr});var MT=s((E5e,FT)=>{"use strict";var INr=PT();FT.exports=INr});var VT=s((N5e,CT)=>{"use strict";var LNr=X(),o0=Ja(),c0=Wu(),kT=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],RNr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],y1=16777216,b1=5960464477539063e-23,v0=c0(20),BT=c0(20),f0=c0(20),pr=c0(20);function jT(r,e,t,i,n,a,u,o,f){var v,c,l,p,g,h,d,m,q;for(p=a,q=i[t],m=t,g=0;m>0;g++)c=b1*q|0,pr[g]=q-y1*c|0,q=i[m-1]+c,m-=1;if(q=o0(q,n),q-=8*LNr(q*.125),d=q|0,q-=d,l=0,n>0?(g=pr[t-1]>>24-n,d+=g,pr[t-1]-=g<<24-n,l=pr[t-1]>>23-n):n===0?l=pr[t-1]>>23:q>=.5&&(l=2),l>0){for(d+=1,v=0,g=0;g<t;g++)m=pr[g],v===0?m!==0&&(v=1,pr[g]=16777216-m):pr[g]=16777215-m;if(n>0)switch(n){case 1:pr[t-1]&=8388607;break;case 2:pr[t-1]&=4194303;break}l===2&&(q=1-q,v!==0&&(q-=o0(1,n)))}if(q===0){for(m=0,g=t-1;g>=a;g--)m|=pr[g];if(m===0){for(h=1;pr[a-h]===0;h++);for(g=t+1;g<=t+h;g++){for(f[o+g]=kT[u+g],c=0,m=0;m<=o;m++)c+=r[m]*f[o+(g-m)];i[g]=c}return t+=h,jT(r,e,t,i,n,a,u,o,f)}}if(q===0)for(t-=1,n-=24;pr[t]===0;)t-=1,n-=24;else q=o0(q,-n),q>=y1?(c=b1*q|0,pr[t]=q-y1*c|0,t+=1,n+=24,pr[t]=c):pr[t]=q|0;for(c=o0(1,n),g=t;g>=0;g--)i[g]=c*pr[g],c*=b1;for(g=t;g>=0;g--){for(c=0,h=0;h<=p&&h<=t-g;h++)c+=RNr[h]*i[g+h];f0[t-g]=c}for(c=0,g=t;g>=0;g--)c+=f0[g];for(l===0?e[0]=c:e[0]=-c,c=f0[0]-c,g=1;g<=t;g++)c+=f0[g];return l===0?e[1]=c:e[1]=-c,d&7}function PNr(r,e,t,i){var n,a,u,o,f,v,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),v=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?v0[c]=0:v0[c]=kT[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*v0[o+(c-l)];BT[c]=n}return f=a,jT(r,e,f,BT,v,a,u,o,v0)}CT.exports=PNr});var GT=s((O5e,UT)=>{"use strict";var FNr=Math.round;UT.exports=FNr});var w1=s((A5e,HT)=>{"use strict";var MNr=GT();HT.exports=MNr});var zT=s((S5e,DT)=>{"use strict";var BNr=w1(),WT=ar(),kNr=.6366197723675814,jNr=1.5707963267341256,CNr=6077100506506192e-26,VNr=6077100506303966e-26,UNr=20222662487959506e-37,GNr=20222662487111665e-37,HNr=84784276603689e-45,xT=2047;function WNr(r,e,t){var i,n,a,u,o,f,v;return n=BNr(r*kNr),u=r-n*jNr,o=n*CNr,v=e>>20|0,t[0]=u-o,i=WT(t[0]),f=v-(i>>20&xT),f>16&&(a=u,o=n*VNr,u=a-o,o=n*UNr-(a-u-o),t[0]=u-o,i=WT(t[0]),f=v-(i>>20&xT),f>49&&(a=u,o=n*GNr,u=a-o,o=n*HNr-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}DT.exports=WNr});var JT=s((T5e,XT)=>{"use strict";var xNr=ie(),DNr=bn(),zNr=Za(),XNr=ar(),JNr=MT(),YNr=_i(),ZNr=VT(),l0=zT(),$Nr=0,QNr=16777216,tt=1.5707963267341256,Dt=6077100506506192e-26,p0=2*Dt,g0=3*Dt,m0=4*Dt,KNr=598523,rOr=1072243195,eOr=1073928572,tOr=1074752122,iOr=1074977148,nOr=1075183036,aOr=1075388923,sOr=1075594811,uOr=1094263291,Sn=[0,0,0],Tn=[0,0];function oOr(r,e){var t,i,n,a,u,o,f,v;if(n=XNr(r),a=n&xNr|0,a<=rOr)return e[0]=r,e[1]=0,0;if(a<=tOr)return(a&zNr)===KNr?l0(r,a,e):a<=eOr?r>0?(v=r-tt,e[0]=v-Dt,e[1]=v-e[0]-Dt,1):(v=r+tt,e[0]=v+Dt,e[1]=v-e[0]+Dt,-1):r>0?(v=r-2*tt,e[0]=v-p0,e[1]=v-e[0]-p0,2):(v=r+2*tt,e[0]=v+p0,e[1]=v-e[0]+p0,-2);if(a<=sOr)return a<=nOr?a===iOr?l0(r,a,e):r>0?(v=r-3*tt,e[0]=v-g0,e[1]=v-e[0]-g0,3):(v=r+3*tt,e[0]=v+g0,e[1]=v-e[0]+g0,-3):a===aOr?l0(r,a,e):r>0?(v=r-4*tt,e[0]=v-m0,e[1]=v-e[0]-m0,4):(v=r+4*tt,e[0]=v+m0,e[1]=v-e[0]+m0,-4);if(a<uOr)return l0(r,a,e);if(a>=DNr)return e[0]=NaN,e[1]=NaN,0;for(t=JNr(r),i=(a>>20)-1046,v=YNr(a-(i<<20|0),t),o=0;o<2;o++)Sn[o]=v|0,v=(v-Sn[o])*QNr;for(Sn[2]=v,u=3;Sn[u-1]===$Nr;)u-=1;return f=ZNr(Sn,Tn,i,u,1),r<0?(e[0]=-Tn[0],e[1]=-Tn[1],-f):(e[0]=Tn[0],e[1]=Tn[1],f)}XT.exports=oOr});var _n=s((_5e,YT)=>{"use strict";var vOr=JT();YT.exports=vOr});var QT=s((I5e,$T)=>{"use strict";var ZT=-.16666666666666632,fOr=.00833333333332249,cOr=-.0001984126982985795,lOr=27557313707070068e-22,pOr=-25050760253406863e-24,gOr=158969099521155e-24,mOr=.0416666666666666,dOr=-.001388888888887411,hOr=2480158728947673e-20,qOr=-27557314351390663e-23,yOr=2087572321298175e-24,bOr=-11359647557788195e-27;function wOr(r,e,t,i,n){var a,u,o,f,v;return v=r*r,f=v*v,u=fOr+v*(cOr+v*lOr)+v*f*(pOr+v*gOr),o=v*r,e===0?t[n]=r+o*(ZT+v*u):t[n]=r-(v*(.5*e-o*u)-e-o*ZT),u=v*(mOr+v*(dOr+v*hOr)),u+=f*f*(qOr+v*(yOr+v*bOr)),a=.5*v,f=1-a,t[n+i]=f+(1-f-a+(v*u-r*e)),t}$T.exports=wOr});var N1=s((L5e,r_)=>{"use strict";var EOr=ie(),NOr=bn(),OOr=ar(),AOr=_n(),KT=QT(),SOr=1072243195,TOr=1044381696,E1=[0,0];function _Or(r,e,t,i){var n,a;if(n=OOr(r),n&=EOr,n<=SOr)return n<TOr&&(r|0)===0&&(e[i]=r,e[i+t]=0),KT(r,0,e,t,i);if(n>=NOr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=AOr(r,E1),KT(E1[0],E1[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}r_.exports=_Or});var t_=s((R5e,e_)=>{"use strict";var IOr=N1();function LOr(r){return IOr(r,[0,0],1,0)}e_.exports=LOr});var In=s((P5e,n_)=>{"use strict";var ROr=b(),i_=t_(),POr=N1();ROr(i_,"assign",POr);n_.exports=i_});var s_=s((F5e,a_)=>{"use strict";function FOr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}a_.exports=FOr});var o_=s((M5e,u_)=>{"use strict";function MOr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}u_.exports=MOr});var f_=s((B5e,v_)=>{"use strict";function BOr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}v_.exports=BOr});var l_=s((k5e,c_)=>{"use strict";function kOr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}c_.exports=kOr});var g_=s((j5e,p_)=>{"use strict";var jOr=U(),COr=In().assign,VOr=I(),UOr=s_(),GOr=o_(),HOr=f_(),WOr=l_(),xOr=.5641895835477563,DOr=2.404825557695773,zOr=5.520078110286311,XOr=616,JOr=-.0014244423042272315,YOr=1413,ZOr=.0005468602863106496,Ln=[0,0];function $Or(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===VOr?0:r===0?1:r<=4?(a=r*r,n=UOr(a),u=(r+DOr)*(r-XOr/256-JOr),u*n):r<=8?(a=1-r*r/64,n=GOr(a),u=(r+zOr)*(r-YOr/256-ZOr),u*n):(a=8/r,i=a*a,e=HOr(i),t=WOr(i),u=xOr/jOr(r),COr(r,Ln,1,0),u*(e*(Ln[1]+Ln[0])-a*t*(Ln[0]-Ln[1])))}p_.exports=$Or});var O1=s((C5e,m_)=>{"use strict";var QOr=g_();m_.exports=QOr});var d0=s((V5e,d_)=>{"use strict";var KOr=1.772453850905516;d_.exports=KOr});var q_=s((U5e,h_)=>{"use strict";function rAr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}h_.exports=rAr});var b_=s((G5e,y_)=>{"use strict";function eAr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}y_.exports=eAr});var E_=s((H5e,w_)=>{"use strict";function tAr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}w_.exports=tAr});var O_=s((W5e,N_)=>{"use strict";function iAr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}N_.exports=iAr});var S_=s((x5e,A_)=>{"use strict";var nAr=U(),aAr=J(),sAr=In().assign,uAr=I(),oAr=d0(),vAr=q_(),fAr=b_(),cAr=E_(),lAr=O_(),pAr=3.8317059702075125,gAr=7.015586669815619,mAr=981,dAr=-.0003252797924876844,hAr=1796,qAr=-38330184381246464e-21,Rn=[0,0];function yAr(r){var e,t,i,n,a,u,o,f;return f=aAr(r),r===0||f===uAr?0:(f<=4?(u=r*r,a=vAr(u),o=f*(f+pAr)*(f-mAr/256-dAr),e=o*a):f<=8?(u=r*r,a=fAr(u),o=f*(f+gAr)*(f-hAr/256-qAr),e=o*a):(u=8/f,n=u*u,t=cAr(n),i=lAr(n),o=1/(nAr(f)*oAr),sAr(f,Rn,1,0),e=o*(t*(Rn[0]-Rn[1])+u*i*(Rn[0]+Rn[1]))),r<0&&(e*=-1),e)}A_.exports=yAr});var A1=s((D5e,T_)=>{"use strict";var bAr=S_();T_.exports=bAr});var Mr=s((z5e,__)=>{"use strict";var wAr=3.141592653589793;__.exports=wAr});var L_=s((X5e,I_)=>{"use strict";function EAr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}I_.exports=EAr});var P_=s((J5e,R_)=>{"use strict";function NAr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}R_.exports=NAr});var M_=s((Y5e,F_)=>{"use strict";function OAr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}F_.exports=OAr});var k_=s((Z5e,B_)=>{"use strict";function AAr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}B_.exports=AAr});var C_=s(($5e,j_)=>{"use strict";function SAr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}j_.exports=SAr});var W_=s((Q5e,H_)=>{"use strict";var S1=P(),TAr=U(),_Ar=Mr(),IAr=d0(),LAr=V(),RAr=I(),PAr=In().assign,T1=O1(),FAr=L_(),MAr=P_(),BAr=M_(),kAr=k_(),jAr=C_(),CAr=1/IAr,_1=2/_Ar,V_=.8935769662791675,U_=3.957678419314858,G_=7.086051060301773,VAr=228,UAr=.0029519662791675214,GAr=1013,HAr=.0006471693148578684,WAr=1814,xAr=.00011356030177269763,Pn=[0,0];function DAr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?LAr:r===RAr?0:r<=3?(a=r*r,u=S1(r/V_)*T1(r)*_1,n=FAr(a),o=(r+V_)*(r-VAr/256-UAr),u+o*n):r<=5.5?(a=r*r,u=S1(r/U_)*T1(r)*_1,n=MAr(a),o=(r+U_)*(r-GAr/256-HAr),u+o*n):r<=8?(a=r*r,u=S1(r/G_)*T1(r)*_1,n=BAr(a),o=(r+G_)*(r-WAr/256-xAr),u+o*n):(a=8/r,i=a*a,e=kAr(i),t=jAr(i),o=CAr/TAr(r),PAr(r,Pn,1,0),o*(e*(Pn[0]-Pn[1])+a*t*(Pn[1]+Pn[0])))}H_.exports=DAr});var D_=s((K5e,x_)=>{"use strict";var zAr=W_();x_.exports=zAr});var X_=s((r7e,z_)=>{"use strict";function XAr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}z_.exports=XAr});var Y_=s((e7e,J_)=>{"use strict";function JAr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}J_.exports=JAr});var $_=s((t7e,Z_)=>{"use strict";function YAr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}Z_.exports=YAr});var K_=s((i7e,Q_)=>{"use strict";function ZAr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}Q_.exports=ZAr});var sI=s((n7e,aI)=>{"use strict";var rI=P(),$Ar=U(),QAr=Mr(),KAr=d0(),rSr=V(),eSr=I(),tSr=In().assign,eI=A1(),iSr=X_(),nSr=Y_(),aSr=$_(),sSr=K_(),uSr=1/KAr,tI=2/QAr,iI=2.197141326031017,nI=5.429681040794135,oSr=562,vSr=.001828826031017035,fSr=1390,cSr=-6459205864867228e-21,Fn=[0,0];function lSr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?rSr:r===eSr?0:r<=4?(a=r*r,u=rI(r/iI)*eI(r)*tI,n=iSr(a),o=(r+iI)*(r-oSr/256-vSr)/r,u+o*n):r<=8?(a=r*r,u=rI(r/nI)*eI(r)*tI,n=nSr(a),o=(r+nI)*(r-fSr/256-cSr)/r,u+o*n):(a=8/r,i=a*a,e=aSr(i),t=sSr(i),o=uSr/$Ar(r),tSr(r,Fn,1,0),o*(a*t*(Fn[0]-Fn[1])-e*(Fn[0]+Fn[1])))}aI.exports=lSr});var oI=s((a7e,uI)=>{"use strict";var pSr=sI();uI.exports=pSr});var fI=s((s7e,vI)=>{"use strict";function gSr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}vI.exports=gSr});var lI=s((u7e,cI)=>{"use strict";function mSr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}cI.exports=mSr});var gI=s((o7e,pI)=>{"use strict";var dSr=fI(),hSr=lI();function qSr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*dSr(a),i+=n*n*hSr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}pI.exports=qSr});var I1=s((v7e,mI)=>{"use strict";var ySr=gI();mI.exports=ySr});var qI=s((f7e,hI)=>{"use strict";var dI=-.16666666666666632,bSr=.00833333333332249,wSr=-.0001984126982985795,ESr=27557313707070068e-22,NSr=-25050760253406863e-24,OSr=158969099521155e-24;function ASr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=bSr+a*(wSr+a*ESr)+a*n*(NSr+a*OSr),i=a*r,e===0?r+i*(dI+a*t):r-(a*(.5*e-i*t)-e-i*dI)}hI.exports=ASr});var L1=s((c7e,yI)=>{"use strict";var SSr=qI();yI.exports=SSr});var EI=s((l7e,wI)=>{"use strict";var TSr=ar(),R1=I1(),bI=L1(),_Sr=_n(),ge=[0,0],ISr=2147483647,LSr=1072243195,RSr=1044381696,PSr=2146435072;function FSr(r){var e,t;if(e=TSr(r),e&=ISr,e<=LSr)return e<RSr?1:R1(r,0);if(e>=PSr)return NaN;switch(t=_Sr(r,ge),t&3){case 0:return R1(ge[0],ge[1]);case 1:return-bI(ge[0],ge[1]);case 2:return-R1(ge[0],ge[1]);default:return bI(ge[0],ge[1])}}wI.exports=FSr});var zt=s((p7e,NI)=>{"use strict";var MSr=EI();NI.exports=MSr});var SI=s((g7e,AI)=>{"use strict";var BSr=ie(),kSr=bn(),jSr=ar(),OI=I1(),P1=L1(),CSr=_n(),VSr=1072243195,USr=1045430272,me=[0,0];function GSr(r){var e,t;if(e=jSr(r),e&=BSr,e<=VSr)return e<USr?r:P1(r,0);if(e>=kSr)return NaN;switch(t=CSr(r,me),t&3){case 0:return P1(me[0],me[1]);case 1:return OI(me[0],me[1]);case 2:return-P1(me[0],me[1]);default:return-OI(me[0],me[1])}}AI.exports=GSr});var Xt=s((m7e,TI)=>{"use strict";var HSr=SI();TI.exports=HSr});var LI=s((d7e,II)=>{"use strict";var WSr=E(),xSr=Fr(),DSr=J(),_I=zt(),zSr=Xt(),XSr=X(),F1=Mr(),JSr=Ii(),YSr=JSr+1;function ZSr(r){var e,t,i,n;return WSr(r)?NaN:xSr(r)?NaN:(e=DSr(r),e>YSr?1:(t=XSr(e),i=e-t,i===.5?0:(i<.25?n=_I(F1*i):i<.75?(i=.5-i,n=zSr(F1*i)):(i=1-i,n=-_I(F1*i)),t%2===1?-n:n)))}II.exports=ZSr});var PI=s((h7e,RI)=>{"use strict";var $Sr=LI();RI.exports=$Sr});var MI=s((q7e,FI)=>{"use strict";var QSr=1.618033988749895;FI.exports=QSr});var kI=s((y7e,BI)=>{"use strict";var KSr=E(),rTr=PI(),eTr=W(),tTr=MI(),iTr=I(),nTr=V(),aTr=2.23606797749979;function sTr(r){var e,t;return KSr(r)||r===iTr||r===nTr?NaN:(e=eTr(tTr,r),t=rTr(r)/e,(e-t)/aTr)}BI.exports=sTr});var CI=s((b7e,jI)=>{"use strict";var uTr=kI();jI.exports=uTr});var UI=s((w7e,VI)=>{"use strict";function oTr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}VI.exports=oTr});var xI=s((E7e,WI)=>{"use strict";var vTr=e1(),fTr=z2(),GI=ie(),B1=ar(),cTr=le(),lTr=Fr(),HI=_i(),pTr=Ti(),gTr=E(),mTr=UI(),dTr=4294967295>>>0,hTr=3221225472>>>0,qTr=0x40000000000000,M1=2147483648>>>0,yTr=1>>>0,bTr=715094163>>>0,wTr=696219795>>>0,ETr=B1(vTr),Jt=[0>>>0,0>>>0];function NTr(r){var e,t,i,n,a,u,o;return r===0||gTr(r)||lTr(r)?r:(t=B1(r)>>>0,e=(t&fTr)>>>0,t&=GI,t<ETr?(u=qTr*r,i=(B1(u)&GI)>>>0,i=(i/3>>>0)+wTr>>>0,u=HI(e|i,0)):(u=0,i=(t/3>>>0)+bTr>>>0,u=cTr(u,e|i)),n=u*u*(u/r),u*=mTr(n),pTr.assign(u,Jt,1,0),Jt[1]&M1?(Jt[0]+=yTr,Jt[1]&=~M1):Jt[1]|=M1,u=HI(Jt[0]&dTr,Jt[1]&hTr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}WI.exports=NTr});var zI=s((N7e,DI)=>{"use strict";var OTr=xI();DI.exports=OTr});var JI=s((O7e,XI)=>{"use strict";var ATr=Math.ceil;XI.exports=ATr});var Mn=s((A7e,YI)=>{"use strict";var STr=JI();YI.exports=STr});var $I=s((S7e,ZI)=>{"use strict";function TTr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}ZI.exports=TTr});var KI=s((T7e,QI)=>{"use strict";function _Tr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}QI.exports=_Tr});var tL=s((_7e,eL)=>{"use strict";var ITr=ar(),LTr=$I(),RTr=KI(),rL=1048575,PTr=.3333333333333333;function FTr(r){var e,t,i,n,a,u,o,f,v,c,l;return n=ITr(r),a=r-1,(rL&2+n)<3?a===0?0:a*a*(PTr*a-.5):(u=a/(2+a),o=u*u,n&=rL,c=n-398458|0,v=o*o,l=440401-n|0,t=v*LTr(v),i=o*RTr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}eL.exports=FTr});var sL=s((I7e,aL)=>{"use strict";var iL=ar(),MTr=le(),BTr=ce(),kTr=E(),jTr=ne(),CTr=V(),VTr=tL(),UTr=0x40000000000000,nL=.4342944818781689,GTr=25082946711645275e-27,HTr=.30102999566361177,WTr=3694239077158931e-28,xTr=1048575,DTr=2146435072,zTr=1048576,XTr=1072693248;function JTr(r){var e,t,i,n,a,u,o,f;return kTr(r)||r<0?NaN:r===0?CTr:(t=iL(r),u=0,t<zTr&&(u-=54,r*=UTr,t=iL(r)),t>=DTr?r+r:(u+=(t>>20)-jTr|0,t&=xTr,a=t+614244&1048576|0,r=MTr(r,t|a^XTr),u+=a>>20|0,o=u,n=VTr(r),r-=1,e=BTr(r,0),i=r-e,f=o*WTr+(r+n)*GTr,f+=(i+n)*nL+e*nL,f+o*HTr))}aL.exports=JTr});var oL=s((L7e,uL)=>{"use strict";var YTr=sL();uL.exports=YTr});var fL=s((R7e,vL)=>{"use strict";var ZTr=E(),$Tr=Fr(),QTr=W(),KTr=X(),r_r=Mn(),e_r=oL(),t_r=$a(),i_r=Qa(),n_r=I();function a_r(r){var e,t;return ZTr(r)||$Tr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=e_r(r),e===-1?t=KTr(t):t=r_r(t),t<=i_r?e*0:t>t_r?n_r:e*QTr(10,t))}vL.exports=a_r});var lL=s((P7e,cL)=>{"use strict";var s_r=fL();cL.exports=s_r});var gL=s((F7e,pL)=>{"use strict";function u_r(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}pL.exports=u_r});var dL=s((M7e,mL)=>{"use strict";function o_r(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}mL.exports=o_r});var yL=s((B7e,qL)=>{"use strict";var v_r=ar(),f_r=gL(),c_r=dL(),hL=1048575,l_r=.3333333333333333;function p_r(r){var e,t,i,n,a,u,o,f,v,c,l;return n=v_r(r),a=r-1,(hL&2+n)<3?a===0?0:a*a*(l_r*a-.5):(u=a/(2+a),o=u*u,n&=hL,c=n-398458|0,v=o*o,l=440401-n|0,t=v*f_r(v),i=o*c_r(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}qL.exports=p_r});var EL=s((k7e,wL)=>{"use strict";var g_r=ar(),m_r=le(),d_r=ce(),h_r=Ti(),q_r=E(),y_r=ie(),b_r=Za(),w_r=ne(),E_r=V(),N_r=yL(),O_r=0x40000000000000,bL=1.4426950407214463,A_r=16751713164886512e-26,S_r=2146435072,T_r=1048576,__r=1072693248,k1=[0,0];function I_r(r){var e,t,i,n,a,u,o;if(q_r(r)||r<0)return NaN;if(h_r.assign(r,k1,1,0),i=k1[0],n=k1[1],o=0,i<T_r){if((i&y_r|n)===0)return E_r;o-=54,r*=O_r,i=g_r(r)}return i>=S_r?r+r:(o+=(i>>20)-w_r|0,i&=b_r,u=i+614244&1048576|0,r=m_r(r,i|u^__r),o+=u>>20|0,a=N_r(r),r-=1,e=d_r(r,0),t=r-e,(r+a)*A_r+(t+a)*bL+e*bL+o)}wL.exports=I_r});var OL=s((j7e,NL)=>{"use strict";var L_r=EL();NL.exports=L_r});var SL=s((C7e,AL)=>{"use strict";var R_r=E(),P_r=Fr(),F_r=W(),M_r=X(),B_r=Mn(),k_r=OL(),j_r=K2(),C_r=r1(),V_r=I();function U_r(r){var e,t;return R_r(r)||P_r(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=k_r(r),t===C_r)?r:(e===-1?t=M_r(t):t=B_r(t),t>j_r?V_r:e*F_r(2,t))}AL.exports=U_r});var _L=s((V7e,TL)=>{"use strict";var G_r=SL();TL.exports=G_r});var LL=s((U7e,IL)=>{"use strict";var H_r=X(),W_r=Mn();function x_r(r){return r<0?W_r(r):H_r(r)}IL.exports=x_r});var h0=s((G7e,RL)=>{"use strict";var D_r=LL();RL.exports=D_r});var FL=s((H7e,PL)=>{"use strict";function z_r(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}PL.exports=z_r});var BL=s((W7e,ML)=>{"use strict";var X_r=Ja(),J_r=FL();function Y_r(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*J_r(n),u=1-(e-i*a/(2-a)-r),X_r(u,t)}ML.exports=Y_r});var GL=s((x7e,UL)=>{"use strict";var Z_r=E(),kL=h0(),$_r=V(),jL=I(),Q_r=BL(),K_r=.6931471803691238,rIr=19082149292705877e-26,CL=1.4426950408889634,eIr=709.782712893384,tIr=-745.1332191019411,VL=1/(1<<28),iIr=-VL;function nIr(r){var e,t,i;return Z_r(r)||r===jL?r:r===$_r?0:r>eIr?jL:r<tIr?0:r>iIr&&r<VL?1+r:(r<0?i=kL(CL*r-.5):i=kL(CL*r+.5),e=r-i*K_r,t=i*rIr,Q_r(e,t,i))}UL.exports=nIr});var sr=s((D7e,HL)=>{"use strict";var aIr=GL();HL.exports=aIr});var xL=s((z7e,WL)=>{"use strict";var sIr=V();function uIr(r){return r===0&&1/r===sIr}WL.exports=uIr});var j1=s((X7e,DL)=>{"use strict";var oIr=xL();DL.exports=oIr});var C1=s((J7e,zL)=>{"use strict";var vIr=2.5066282746310007;zL.exports=vIr});var JL=s((Y7e,XL)=>{"use strict";function fIr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}XL.exports=fIr});var $L=s((Z7e,ZL)=>{"use strict";var cIr=C1(),YL=W(),lIr=sr(),pIr=JL(),gIr=143.01608;function mIr(r){var e,t,i;return e=1/r,e=1+e*pIr(e),t=lIr(r),r>gIr?(i=YL(r,.5*r-.25),t=i*(i/t)):t=YL(r,r-.5)/t,cIr*t*e}ZL.exports=mIr});var KL=s(($7e,QL)=>{"use strict";var dIr=.5772156649015329;QL.exports=dIr});var eR=s((Q7e,rR)=>{"use strict";var hIr=KL();function qIr(r,e){return e/((1+hIr*r)*r)}rR.exports=qIr});var iR=s((K7e,tR)=>{"use strict";function yIr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}tR.exports=yIr});var cR=s((r9e,fR)=>{"use strict";var bIr=E(),wIr=Lr(),EIr=j1(),nR=J(),NIr=X(),OIr=Xt(),aR=I(),sR=V(),uR=Mr(),oR=$L(),vR=eR(),AIr=iR();function SIr(r){var e,t,i,n;if(wIr(r)&&r<0||r===sR||bIr(r))return NaN;if(r===0)return EIr(r)?sR:aR;if(r>171.61447887182297)return aR;if(r<-170.5674972726612)return 0;if(t=nR(r),t>33)return r>=0?oR(r):(i=NIr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*OIr(uR*n),e*uR/(nR(n)*oR(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return vR(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return vR(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*AIr(r))}fR.exports=SIr});var Li=s((e9e,lR)=>{"use strict";var TIr=cR();lR.exports=TIr});var mR=s((t9e,gR)=>{"use strict";var _Ir=E(),IIr=Fr(),pR=zt(),V1=Xt(),LIr=J(),Bn=Wa(),kn=Mr();function RIr(r){var e,t;return _Ir(r)?NaN:IIr(r)?NaN:(t=r%2,e=LIr(t),e===0||e===1?Bn(0,t):e<.25?V1(kn*t):e<.75?(e=.5-e,Bn(pR(kn*e),t)):e<1.25?(t=Bn(1,t)-t,V1(kn*t)):e<1.75?(e-=1.5,-Bn(pR(kn*e),t)):(t-=Bn(2,t),V1(kn*t)))}gR.exports=RIr});var jn=s((i9e,dR)=>{"use strict";var PIr=mR();dR.exports=PIr});var qR=s((n9e,hR)=>{"use strict";function FIr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}hR.exports=FIr});var bR=s((a9e,yR)=>{"use strict";function MIr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}yR.exports=MIr});var ER=s((s9e,wR)=>{"use strict";function BIr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}wR.exports=BIr});var OR=s((u9e,NR)=>{"use strict";function kIr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}NR.exports=kIr});var SR=s((o9e,AR)=>{"use strict";function jIr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}AR.exports=jIr});var _R=s((v9e,TR)=>{"use strict";function CIr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}TR.exports=CIr});var LR=s((f9e,IR)=>{"use strict";function VIr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}IR.exports=VIr});var PR=s((c9e,RR)=>{"use strict";function UIr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}RR.exports=UIr});var MR=s((l9e,FR)=>{"use strict";function GIr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}FR.exports=GIr});var kR=s((p9e,BR)=>{"use strict";function HIr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}BR.exports=HIr});var VR=s((g9e,CR)=>{"use strict";var WIr=E(),xIr=Fr(),DIr=J(),Ri=P(),zIr=h0(),XIr=jn(),JIr=Mr(),U1=I(),YIr=qR(),ZIr=bR(),$Ir=ER(),QIr=OR(),KIr=SR(),rLr=_R(),eLr=LR(),tLr=PR(),iLr=MR(),nLr=kR(),aLr=.07721566490153287,sLr=.3224670334241136,uLr=1,oLr=-.07721566490153287,vLr=.48383612272381005,fLr=-.1475877229945939,cLr=.06462494023913339,lLr=-.07721566490153287,pLr=1,gLr=.4189385332046727,q0=1.4616321449683622,mLr=4503599627370496,dLr=0x400000000000000,hLr=8470329472543003e-37,jR=1.4616321449683622,qLr=-.12148629053584961,yLr=-3638676997039505e-33;function bLr(r){var e,t,i,n,a,u,o,f,v,c,l,p,g;if(WIr(r)||xIr(r))return r;if(r===0)return U1;if(r<0?(e=!0,r=-r):e=!1,r<hLr)return-Ri(r);if(e){if(r>=mLr||(v=XIr(r),v===0))return U1;t=Ri(JIr/DIr(v*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(g=-Ri(r),r>=q0-1+.27?(l=1-r,i=0):r>=q0-1-.27?(l=r-(jR-1),i=1):(l=r,i=2)):(g=0,r>=q0+.27?(l=2-r,i=0):r>=q0-.27?(l=r-jR,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=aLr+p*YIr(p),a=p*(sLr+p*ZIr(p)),o=l*u+a,g+=o-.5*l;break;case 1:p=l*l,c=p*l,u=vLr+c*KIr(c),a=fLr+c*rLr(c),n=cLr+c*eLr(c),o=p*u-(yLr-c*(a+l*n)),g+=qLr+o;break;case 2:u=l*(lLr+l*tLr(l)),a=pLr+l*iLr(l),g+=-.5*l+u/a;break}else if(r<8)switch(i=zIr(r),l=r-i,o=l*(oLr+l*QIr(l)),f=uLr+l*$Ir(l),g=.5*l+o/f,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,g+=Ri(p)}else r<dLr?(v=Ri(r),p=1/r,l=p*p,c=gLr+p*nLr(l),g=(r-.5)*(v-1)+c):g=r*(Ri(r)-1);return e&&(g=t-g),g}CR.exports=bLr});var Cn=s((m9e,UR)=>{"use strict";var wLr=VR();UR.exports=wLr});var it=s((d9e,GR)=>{"use strict";var ELr=6.283185307179586;GR.exports=ELr});var G1=s((h9e,HR)=>{"use strict";var NLr=14901161193847656e-24;HR.exports=NLr});var H1=s((q9e,WR)=>{"use strict";var OLr=.9189385332046728;WR.exports=OLr});var xR=s((y9e,ALr)=>{ALr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var DR=s((b9e,SLr)=>{SLr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var zR=s((w9e,TLr)=>{TLr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var JR=s((E9e,XR)=>{"use strict";function _Lr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}XR.exports=_Lr});var ZR=s((N9e,YR)=>{"use strict";function ILr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}YR.exports=ILr});var QR=s((O9e,$R)=>{"use strict";function LLr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}$R.exports=LLr});var rP=s((A9e,KR)=>{"use strict";function RLr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}KR.exports=RLr});var tP=s((S9e,eP)=>{"use strict";function PLr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}eP.exports=PLr});var nP=s((T9e,iP)=>{"use strict";function FLr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}iP.exports=FLr});var vP=s((_9e,oP)=>{"use strict";var MLr=E(),BLr=Lr(),kLr=J(),y0=sr(),jLr=X(),CLr=Li(),VLr=Cn(),aP=jn(),sP=W(),ULr=P(),GLr=I(),HLr=V(),uP=it(),WLr=G1(),xLr=H1(),DLr=xR(),zLr=DR(),XLr=zR(),JLr=JR(),YLr=ZR(),ZLr=QR(),$Lr=rP(),QLr=tP(),KLr=nP(),rRr=129,eRr=170,tRr=709,iRr=1.2433929443359375,nRr=.6986598968505859;function W1(r){var e,t,i,n,a,u;if(MLr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(BLr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=rRr)return-XLr[u]/(i+1)}else return(n&1)===0?zLr[n/2]:DLr[(n-3)/2];return kLr(r)<WLr?-.5-xLr*r:(t=1-r,r<0?jLr(r/2)===r/2?0:(e=r,r=t,t=e,r>eRr?(e=aP(.5*t)*2*W1(r),a=VLr(r),a-=r*ULr(uP),a>tRr?e<0?HLr:GLr:e*y0(a)):aP(.5*t)*2*sP(uP,-r)*CLr(r)*W1(r)):r<1?(e=JLr(t),e-=iRr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+YLr(t)):r<=4?(e=nRr+1/-t,e+ZLr(r-2)):r<=7?(e=$Lr(r-4),1+y0(e)):r<15?(e=QLr(r-7),1+y0(e)):r<36?(e=KLr(r-15),1+y0(e)):1+sP(2,-r))}oP.exports=W1});var cP=s((I9e,fP)=>{"use strict";var aRr=vP();fP.exports=aRr});var pP=s((L9e,lP)=>{"use strict";var H=rr(),sRr=J(),uRr=t0(),oRr=An(),vRr=qS(),fRr=RS(),cRr=BS(),lRr=VS(),pRr=WS(),gRr=QS(),mRr=tT(),dRr=sT(),hRr=xt(),qRr=d1(),yRr=u0(),bRr=cT(),wRr=mT(),ERr=yT(),NRr=TT(),ORr=O1(),ARr=A1(),SRr=D_(),TRr=oI(),_Rr=CI(),IRr=zI(),LRr=Mn(),RRr=lL(),PRr=_L(),FRr=zt(),MRr=Xt(),BRr=U(),kRr=cP();function jRr(r){return H(r,"abs",sRr),H(r,"abs2",uRr),H(r,"acos",oRr),H(r,"acosh",vRr),H(r,"acot",fRr),H(r,"acovercos",cRr),H(r,"acoversin",lRr),H(r,"acsc",pRr),H(r,"acsch",gRr),H(r,"ahavercos",mRr),H(r,"ahaversin",dRr),H(r,"asin",hRr),H(r,"asinh",qRr),H(r,"atan",yRr),H(r,"atanh",bRr),H(r,"avercos",wRr),H(r,"aversin",ERr),H(r,"bernoulli",NRr),H(r,"besselj0",ORr),H(r,"besselj1",ARr),H(r,"bessely0",SRr),H(r,"bessely1",TRr),H(r,"binet",_Rr),H(r,"cbrt",IRr),H(r,"ceil",LRr),H(r,"ceil10",RRr),H(r,"ceil2",PRr),H(r,"cos",FRr),H(r,"sin",MRr),H(r,"sqrt",BRr),H(r,"zeta",kRr),r}lP.exports=jRr});var mP=s((R9e,gP)=>{"use strict";var CRr=rr(),VRr=KO(),URr=PA(),GRr=pP();function HRr(r){return CRr(r,"tools",URr({})),r=VRr(r),r=GRr(r),r}gP.exports=HRr});var qP=s((P9e,hP)=>{"use strict";function dP(r,e,t,i,n,a){var u,o,f,v,c;if(a>=e.length)return r.accessors[0](r.data,i);for(f=[],v=e[a],u=t[a],c=0;c<v;c++)o=dP(r,e,t,i,n,a+1),f.push(o),i+=u;return f}hP.exports=dP});var bP=s((F9e,yP)=>{"use strict";var WRr=fn(),xRr=qP();function DRr(r,e,t,i,n){var a;if(e.length===0)return[];for(a=0;a<e.length;a++)if(e[a]===0)return[];return xRr(WRr(r),e,t,i,n,0)}yP.exports=DRr});var EP=s((M9e,wP)=>{"use strict";var zRr=bP();wP.exports=zRr});var OP=s((B9e,NP)=>{"use strict";function XRr(r){var e,t,i,n;for(e=r.length,t=[],n=0;n<e;n++)t.push(0);for(i=1,n=e-1;n>=0;n--)t[n]=i,i*=r[n];return t}function JRr(r){var e,t,i;for(e=[],t=1,i=0;i<r.length;i++)e.push(t),t*=r[i];return e}function YRr(r,e){return e==="column-major"?JRr(r):XRr(r)}NP.exports=YRr});var SP=s((k9e,AP)=>{"use strict";function ZRr(r,e){var t,i,n;for(t=r.length,i=1,n=t-1;n>=0;n--)e[n]=i,i*=r[n];return e}function $Rr(r,e){var t,i;for(t=1,i=0;i<r.length;i++)e[i]=t,t*=r[i];return e}function QRr(r,e,t){return e==="column-major"?$Rr(r,t):ZRr(r,t)}AP.exports=QRr});var IP=s((j9e,_P)=>{"use strict";var KRr=b(),TP=OP(),rPr=SP();KRr(TP,"assign",rPr);_P.exports=TP});var RP=s((C9e,LP)=>{"use strict";function ePr(r,e){var t,i,n;for(i=r.length,t=0,n=0;n<i;n++)e[n]<0&&(t-=e[n]*(r[n]-1));return t}LP.exports=ePr});var FP=s((V9e,PP)=>{"use strict";var tPr=RP();PP.exports=tPr});var BP=s((U9e,MP)=>{"use strict";var iPr=$e(),nPr=cr(),aPr=Zr(),sPr=ii(),uPr=Xe(),oPr=ai(),vPr=Mt(),fPr=lr(),cPr=$r(),lPr=ni(),pPr=pi(),gPr=hi(),mPr={binary:iPr,float64:nPr,float32:aPr,generic:Array,int16:sPr,int32:uPr,int8:oPr,uint16:vPr,uint32:fPr,uint8:cPr,uint8c:lPr,complex64:pPr,complex128:gPr};MP.exports=mPr});var jP=s((G9e,kP)=>{"use strict";var dPr=BP();function hPr(r){return dPr[r]||null}kP.exports=hPr});var VP=s((H9e,CP)=>{"use strict";var qPr=jP();CP.exports=qPr});var GP=s((W9e,UP)=>{"use strict";var yPr=_(),bPr=$e(),wPr=yPr(bPr.allocUnsafe);UP.exports=wPr});var WP=s((x9e,HP)=>{"use strict";var EPr=kr(),NPr=y(),OPr=$e();function APr(r){if(!EPr(r))throw new TypeError(NPr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return OPr.allocUnsafe(r)}HP.exports=APr});var DP=s((D9e,xP)=>{"use strict";var SPr=kr(),TPr=y(),_Pr=$e();function IPr(r){if(!SPr(r))throw new TypeError(TPr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new _Pr(r)}xP.exports=IPr});var XP=s((z9e,zP)=>{"use strict";var LPr=GP(),RPr=WP(),PPr=DP(),x1;LPr?x1=RPr:x1=PPr;zP.exports=x1});var YP=s((X9e,JP)=>{"use strict";function FPr(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}JP.exports=FPr});var $P=s((J9e,ZP)=>{"use strict";var MPr=VP(),BPr=XP(),kPr=YP();function jPr(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}function CPr(r){return kPr(BPr(r))}function VPr(r,e){var t=MPr(r);return t?new t(e):null}function UPr(r,e){return r==="generic"?jPr(e):r==="binary"?CPr(e):VPr(r,e)}ZP.exports=UPr});var KP=s((Y9e,QP)=>{"use strict";var GPr=$P();QP.exports=GPr});var tF=s((Z9e,eF)=>{"use strict";var HPr=io(),rF=HPr();function WPr(){return typeof rF.BigInt=="function"&&typeof BigInt=="function"&&typeof rF.BigInt("1")=="bigint"&&typeof BigInt("1")=="bigint"}eF.exports=WPr});var nF=s(($9e,iF)=>{"use strict";var xPr=tF();iF.exports=xPr});var aF=s((Q9e,DPr)=>{DPr.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var uF=s((K9e,sF)=>{"use strict";var zPr=aF();function XPr(r){return zPr[r]||null}sF.exports=XPr});var vF=s((rpe,oF)=>{"use strict";var JPr=uF();oF.exports=JPr});var cF=s((epe,fF)=>{"use strict";function YPr(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return e===0?1:e===r.length?-1:0}fF.exports=YPr});var pF=s((tpe,lF)=>{"use strict";var ZPr=cF();lF.exports=ZPr});var dF=s((ipe,mF)=>{"use strict";var gF=J();function $Pr(r){var e,t,i,n,a,u;if(t=r.length,t===0)return 0;for(e=!0,i=!0,n=gF(r[0]),u=1;u<t;u++)if(a=gF(r[u]),e&&a<n?e=!1:i&&a>n&&(i=!1),i||e)n=a;else return 0;return i&&e?3:i?1:2}mF.exports=$Pr});var qF=s((npe,hF)=>{"use strict";var QPr=dF();hF.exports=QPr});var bF=s((ape,yF)=>{"use strict";function KPr(r,e){return e&&(r===2||r===3)}yF.exports=KPr});var EF=s((spe,wF)=>{"use strict";function rFr(r,e){return e&&(r===1||r===3)}wF.exports=rFr});var OF=s((upe,NF)=>{"use strict";function eFr(r,e,t){var i,n,a,u,o;for(i=r.length,n=t,a=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?a+=u*(r[o]-1):u<0&&(n+=u*(r[o]-1))}return[n,a]}NF.exports=eFr});var SF=s((ope,AF)=>{"use strict";function tFr(r,e,t,i){var n,a,u,o,f;for(n=r.length,a=t,u=t,f=0;f<n;f++){if(r[f]===0)return i[0]=t,i[1]=t,i;o=e[f],o>0?u+=o*(r[f]-1):o<0&&(a+=o*(r[f]-1))}return i[0]=a,i[1]=u,i}AF.exports=tFr});var IF=s((vpe,_F)=>{"use strict";var iFr=b(),TF=OF(),nFr=SF();iFr(TF,"assign",nFr);_F.exports=TF});var RF=s((fpe,LF)=>{"use strict";var aFr=IF();function sFr(r,e,t,i,n){var a;return r===0||n===0?!1:(a=aFr(e,t,i),r===a[1]-a[0]+1)}LF.exports=sFr});var FF=s((cpe,PF)=>{"use strict";function uFr(r){return{ROW_MAJOR_CONTIGUOUS:r.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:r.COLUMN_MAJOR_CONTIGUOUS,READONLY:r.READONLY}}PF.exports=uFr});var BF=s((lpe,MF)=>{"use strict";function oFr(r){var e,t,i,n,a,u;if(i=this._ndims,i===0)return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.get(this._offset+r):this._buffer[this._offset+r];if(this._iterationOrder===-1)return this._accessors?this._buffer.get(this.offset-r):this._buffer[this._offset-r]}if(t=this._shape,e=this._strides,n=this._offset,this._order==="column-major"){for(u=0;u<i;u++)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}for(u=i-1;u>=0;u--)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}MF.exports=oFr});var jF=s((ppe,kF)=>{"use strict";function vFr(r,e){var t,i,n,a,u,o;if(n=this._ndims,n===0)return this._accessors?this._buffer.set(r,this._offset):this._buffer[this._offset]=r,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.set(e,this._offset+r):this._buffer[this._offset+r]=e,this;if(this._iterationOrder===-1)return this._accessors?this._buffer.set(e,this._offset-r):this._buffer[this._offset-r]=e,this}if(i=this._shape,t=this._strides,a=this._offset,this._order==="column-major"){for(o=0;o<n;o++)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}for(o=n-1;o>=0;o--)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}kF.exports=vFr});var VF=s((gpe,CF)=>{"use strict";function fFr(){var r,e;for(r=this._offset,e=0;e<arguments.length-1;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],r):this._buffer[r]=arguments[e],this}CF.exports=fFr});var GF=s((mpe,UF)=>{"use strict";function cFr(){var r,e;for(r=this._offset,e=0;e<arguments.length;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(r):this._buffer[r]}UF.exports=cFr});var WF=s((dpe,HF)=>{"use strict";var lFr=Qr(),pFr=Kr();function gFr(){var r,e,t,i;for(e=this._length,r={},r.type="ndarray",r.dtype=this.dtype,r.flags={READONLY:this._flags.READONLY},r.order=this._order,r.shape=this._shape.slice(),r.strides=this._strides.slice(),i=0;i<e;i++)r.strides[i]<0&&(r.strides[i]*=-1);if(r.data=[],r.dtype==="complex64"||r.dtype==="complex128")for(i=0;i<e;i++)t=this.iget(i),r.data.push(lFr(t),pFr(t));else for(i=0;i<e;i++)r.data.push(this.iget(i));return r}HF.exports=gFr});var zF=s((hpe,DF)=>{"use strict";var mFr=K().isPrimitive,dFr=y(),xF=/[-\/\\^$*+?.()|[\]{}]/g;function hFr(r){var e,t,i;if(!mFr(r))throw new TypeError(dFr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(xF,"\\$&"):(t=r.substring(1,i),t=t.replace(xF,"\\$&"),r=r[0]+t+r.substring(i),r)}DF.exports=hFr});var JF=s((qpe,XF)=>{"use strict";var qFr=zF();XF.exports=qFr});var ZF=s((ype,YF)=>{"use strict";var yFr=RegExp.prototype.exec;YF.exports=yFr});var QF=s((bpe,$F)=>{"use strict";var bFr=ZF();function wFr(r){try{return bFr.call(r),!0}catch{return!1}}$F.exports=wFr});var rM=s((wpe,KF)=>{"use strict";var EFr=ri(),NFr=er(),OFr=QF(),AFr=EFr();function SFr(r){return typeof r=="object"?r instanceof RegExp?!0:AFr?OFr(r):NFr(r)==="[object RegExp]":!1}KF.exports=SFr});var tM=s((Epe,eM)=>{"use strict";var TFr=rM();eM.exports=TFr});var nM=s((Npe,iM)=>{"use strict";function _Fr(r,e,t){return r.replace(e,t)}iM.exports=_Fr});var nt=s((Ope,aM)=>{"use strict";var IFr=nM();aM.exports=IFr});var uM=s((Ape,sM)=>{"use strict";var LFr=JF(),RFr=_(),D1=K().isPrimitive,PFr=tM(),z1=y(),FFr=nt();function MFr(r,e,t){if(!D1(r))throw new TypeError(z1("invalid argument. First argument must be a string. Value: `%s`.",r));if(D1(e))e=new RegExp(LFr(e),"g");else if(!PFr(e))throw new TypeError(z1("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!D1(t)&&!RFr(t))throw new TypeError(z1("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return FFr(r,e,t)}sM.exports=MFr});var vM=s((Spe,oM)=>{"use strict";var BFr=uM();oM.exports=BFr});var cM=s((Tpe,fM)=>{"use strict";var kFr=vM(),X1=Qr(),J1=Kr(),jFr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};function CFr(){var r,e,t,i,n,a,u;if(e=this._shape.length,n=this._dtype,i="ndarray( '"+n+"', ",r="",this._length<=100)if(n==="complex64"||n==="complex128")for(u=0;u<this._length;u++)a=this.iget(u),r+=X1(a)+", "+J1(a),u<this._length-1&&(r+=", ");else for(u=0;u<this._length;u++)r+=this.iget(u),u<this._length-1&&(r+=", ");else{if(n==="complex64"||n==="complex128")for(u=0;u<3;u++)a=this.iget(u),r+=X1(a)+", "+J1(a),u<2&&(r+=", ");else for(u=0;u<3;u++)r+=this.iget(u),u<2&&(r+=", ");if(r+=", ..., ",n==="complex64"||n==="complex128")for(u=2;u>=0;u--)a=this.iget(this._length-1-u),r+=X1(a)+", "+J1(a),u>0&&(r+=", ");else for(u=2;u>=0;u--)r+=this.iget(this._length-1-u),u>0&&(r+=", ")}if(t=jFr[this.dtype],i+=kFr(t,"{{data}}",r),i+=", ",e===0?i+="[]":i+="[ "+this._shape.join(", ")+" ]",i+=", ",i+="[ ",e===0)i+="0";else for(u=0;u<e;u++)this._strides[u]<0?i+=-this._strides[u]:i+=this._strides[u],u<e-1&&(i+=", ");return i+=" ]",i+=", ",i+="0",i+=", ",i+="'"+this._order+"'",i+=" )",i}fM.exports=CFr});var pM=s((_pe,lM)=>{"use strict";var VFr=typeof ArrayBuffer=="function"?ArrayBuffer:null;lM.exports=VFr});var mM=s((Ipe,gM)=>{"use strict";var UFr=pa(),GFr=cr(),b0=pM();function HFr(){var r,e,t;if(typeof b0!="function")return!1;try{t=new b0(16),r=UFr(t)&&typeof b0.isView=="function",r&&(e=new GFr(t),e[0]=-3.14,e[1]=NaN,r=r&&b0.isView(e)&&t.byteLength===16&&e[0]===-3.14&&e[1]!==e[1])}catch{r=!1}return r}gM.exports=HFr});var hM=s((Lpe,dM)=>{"use strict";var WFr=mM();dM.exports=WFr});var yM=s((Rpe,qM)=>{"use strict";var xFr=typeof ArrayBuffer=="function"?ArrayBuffer:void 0;qM.exports=xFr});var wM=s((Ppe,bM)=>{"use strict";function DFr(){throw new Error("not implemented")}bM.exports=DFr});var w0=s((Fpe,EM)=>{"use strict";var zFr=hM(),XFr=yM(),JFr=wM(),Y1;zFr()?Y1=XFr:Y1=JFr;EM.exports=Y1});var OM=s((Mpe,NM)=>{"use strict";var YFr=er(),ZFr=typeof DataView=="function";function $Fr(r){return ZFr&&r instanceof DataView||YFr(r)==="[object DataView]"}NM.exports=$Fr});var SM=s((Bpe,AM)=>{"use strict";var QFr=OM();AM.exports=QFr});var _M=s((kpe,TM)=>{"use strict";var KFr=typeof DataView=="function"?DataView:null;TM.exports=KFr});var RM=s((jpe,LM)=>{"use strict";var rMr=SM(),eMr=w0(),IM=_M();function tMr(){var r,e,t;if(typeof IM!="function")return!1;try{t=new eMr(24),e=new IM(t,8),r=rMr(e)&&typeof e.getFloat64=="function"&&typeof e.setFloat64=="function",r&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),r=r&&e.buffer===t&&e.byteLength===16&&e.byteOffset===8&&e.getFloat64(0)===-3.14&&e.getFloat64(8)!==e.getFloat64(8))}catch{r=!1}return r}LM.exports=tMr});var FM=s((Cpe,PM)=>{"use strict";var iMr=RM();PM.exports=iMr});var BM=s((Vpe,MM)=>{"use strict";var nMr=typeof DataView=="function"?DataView:void 0;MM.exports=nMr});var jM=s((Upe,kM)=>{"use strict";function aMr(){throw new Error("not implemented")}kM.exports=aMr});var Vn=s((Gpe,CM)=>{"use strict";var sMr=FM(),uMr=BM(),oMr=jM(),Z1;sMr()?Z1=uMr:Z1=oMr;CM.exports=Z1});var UM=s((Hpe,VM)=>{"use strict";var vMr=typeof BigInt=="function"?BigInt:void 0;VM.exports=vMr});var HM=s((Wpe,GM)=>{"use strict";var fMr=UM();GM.exports=fMr});var WM=s((xpe,cMr)=>{cMr.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var zM=s((Dpe,DM)=>{"use strict";var xM=WM();function lMr(){var r;return arguments.length===0?xM.all.slice():(r=xM[arguments[0]],r?r.slice():[])}DM.exports=lMr});var JM=s((zpe,XM)=>{"use strict";function pMr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}XM.exports=pMr});var ZM=s((Xpe,YM)=>{"use strict";var gMr=rr(),mMr=Ei();function dMr(r,e){var t,i,n;for(t=mMr(e),n=0;n<t.length;n++)i=t[n],gMr(r,i,e[i]);return r}YM.exports=dMr});var Q1=s((Jpe,QM)=>{"use strict";var hMr=b(),$1=zM(),$M=JM(),qMr=ZM();hMr($1,"enum",$M);qMr($1,$M());QM.exports=$1});var KM=s((Ype,yMr)=>{yMr.exports=["row-major","column-major"]});var eB=s((Zpe,rB)=>{"use strict";var bMr=KM();function wMr(){return bMr.slice()}rB.exports=wMr});var iB=s(($pe,tB)=>{"use strict";function EMr(){return{"row-major":1,"column-major":2}}tB.exports=EMr});var K1=s((Qpe,aB)=>{"use strict";var NMr=b(),nB=eB(),OMr=iB();NMr(nB,"enum",OMr);aB.exports=nB});var sB=s((Kpe,AMr)=>{AMr.exports=["throw","clamp","wrap"]});var oB=s((rge,uB)=>{"use strict";var SMr=sB();function TMr(){return SMr.slice()}uB.exports=TMr});var fB=s((ege,vB)=>{"use strict";function _Mr(){return{throw:1,clamp:2,wrap:3}}vB.exports=_Mr});var r3=s((tge,lB)=>{"use strict";var IMr=b(),cB=oB(),LMr=fB();IMr(cB,"enum",LMr);lB.exports=cB});var mB=s((ige,gB)=>{"use strict";var at=Dr(),RMr=w0(),PMr=Vn(),Un=HM(),FMr=Q1().enum,MMr=K1().enum,BMr=r3().enum,kMr=FMr(),jMr=MMr(),pB=BMr();function CMr(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g;if(f=this._mode||"throw",u=this._submode||[f],l=this._ndims,p=u.length,t=33+l*16+p,o=this.__meta_dataview__,o&&o.byteLength===t)return o;for(o=new PMr(new RMr(t)),n=this._shape,a=this._strides,i=this._dtype,r=this._bytesPerElement,v=0,o.setInt8(v,at?1:0),v+=1,o.setInt16(v,kMr[i],at),v+=2,o.setBigInt64(v,Un(l),at),c=l*8,v+=8,g=0;g<l;g++)o.setBigInt64(v,Un(n[g]),at),o.setBigInt64(v+c,Un(a[g]*r),at),v+=8;for(v+=c,o.setBigInt64(v,Un(this._offset*r),at),v+=8,o.setInt8(v,jMr[this._order]),v+=1,o.setInt8(v,pB[f]),v+=1,o.setBigInt64(v,Un(p),at),v+=8,g=0;g<p;g++)o.setInt8(v,pB[u[g]]),v+=1;return e=0,e|=this._flags.READONLY?4:0,o.setInt32(v,e,at),this.__meta_dataview__=o,o}gB.exports=CMr});var hB=s((nge,dB)=>{"use strict";var Gn=Dr(),VMr=$r(),UMr=Vn(),GMr=X(),HMr=4294967295>>>0,WMr=4294967296;function xMr(r){var e,t,i,n;return e=new VMr(8),r===0||(n=(r&HMr)>>>0,i=GMr(r/WMr),t=new UMr(e.buffer),Gn?(t.setUint32(0,n,Gn),t.setUint32(4,i,Gn)):(t.setUint32(0,i,Gn),t.setUint32(4,n,Gn))),e}dB.exports=xMr});var yB=s((age,qB)=>{"use strict";var Hn=Dr(),DMr=$r(),zMr=Vn(),XMr=X(),JMr=4294967295>>>0,YMr=4294967296,N0=new DMr(8),E0=new zMr(N0.buffer);function ZMr(r,e,t,i){var n,a,u;if(r===0){for(u=0;u<N0.length;u++)e[i]=0,i+=t;return e}for(a=(r&JMr)>>>0,n=XMr(r/YMr),Hn?(E0.setUint32(0,a,Hn),E0.setUint32(4,n,Hn)):(E0.setUint32(0,n,Hn),E0.setUint32(4,a,Hn)),u=0;u<N0.length;u++)e[i]=N0[u],i+=t;return e}qB.exports=ZMr});var EB=s((sge,wB)=>{"use strict";var $Mr=b(),bB=hB(),QMr=yB();$Mr(bB,"assign",QMr);wB.exports=bB});var AB=s((uge,OB)=>{"use strict";var e3=Dr(),KMr=w0(),rBr=Vn(),eBr=$r(),tBr=Q1().enum,iBr=K1().enum,nBr=r3().enum,Wn=EB().assign,aBr=tBr(),sBr=iBr(),NB=nBr();function uBr(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g,h;if(v=this._mode||"throw",o=this._submode||[v],p=this._ndims,g=o.length,i=33+p*16+g,f=this.__meta_dataview__,f&&f.byteLength===i)return f;for(f=new rBr(new KMr(i)),e=new eBr(f.buffer),a=this._shape,u=this._strides,n=this._dtype,r=this._bytesPerElement,c=0,f.setInt8(c,e3?1:0),c+=1,f.setInt16(c,aBr[n],e3),c+=2,Wn(p,e,1,c),l=p*8,c+=8,h=0;h<p;h++)Wn(a[h],e,1,c),Wn(u[h]*r,e,1,c+l),c+=8;for(c+=l,Wn(this._offset*r,e,1,c),c+=8,f.setInt8(c,sBr[this._order]),c+=1,f.setInt8(c,NB[v]),c+=1,Wn(g,e,1,c),c+=8,h=0;h<g;h++)f.setInt8(c,NB[o[h]]),c+=1;return t=0,t|=this._flags.READONLY?4:0,f.setInt32(c,t,e3),this.__meta_dataview__=f,f}OB.exports=uBr});var TB=s((oge,SB)=>{"use strict";var oBr=nF(),st=b(),zr=R(),vBr=vF(),fBr=pF(),cBr=qF(),lBr=ro(),pBr=bF(),gBr=EF(),mBr=RF(),dBr=FF(),hBr=BF(),qBr=jF(),yBr=VF(),bBr=GF(),wBr=WF(),EBr=cM(),NBr=mB(),OBr=AB();function nr(r,e,t,i,n,a){var u,o,f,v,c;if(!(this instanceof nr))return new nr(r,e,t,i,n,a);for(v=1,c=0;c<t.length;c++)v*=t[c];return e.BYTES_PER_ELEMENT?o=e.BYTES_PER_ELEMENT*v:o=null,this._byteLength=o,this._bytesPerElement=vBr(r),this._buffer=e,this._dtype=r,this._length=v,this._ndims=t.length,this._offset=n,this._order=a,this._shape=t,this._strides=i,this._accessors=lBr(e.get&&e.set),this._iterationOrder=fBr(i),u=mBr(v,t,i,n,this._iterationOrder),f=cBr(i),this._flags={ROW_MAJOR_CONTIGUOUS:gBr(f,u),COLUMN_MAJOR_CONTIGUOUS:pBr(f,u),READONLY:!1},this.__meta_dataview__=null,this}st(nr,"name","ndarray");zr(nr.prototype,"byteLength",function(){return this._byteLength});zr(nr.prototype,"BYTES_PER_ELEMENT",function(){return this._bytesPerElement});zr(nr.prototype,"data",function(){return this._buffer});zr(nr.prototype,"dtype",function(){return this._dtype});zr(nr.prototype,"flags",function(){return dBr(this._flags)});zr(nr.prototype,"length",function(){return this._length});zr(nr.prototype,"ndims",function(){return this._ndims});zr(nr.prototype,"offset",function(){return this._offset});zr(nr.prototype,"order",function(){return this._order});zr(nr.prototype,"shape",function(){return this._shape.slice()});zr(nr.prototype,"strides",function(){return this._strides.slice()});st(nr.prototype,"get",bBr);st(nr.prototype,"iget",hBr);st(nr.prototype,"set",yBr);st(nr.prototype,"iset",qBr);st(nr.prototype,"toString",EBr);st(nr.prototype,"toJSON",wBr);st(nr.prototype,"__array_meta_dataview__",oBr()?NBr:OBr);SB.exports=nr});var IB=s((vge,_B)=>{"use strict";var ABr=TB();_B.exports=ABr});var RB=s((fge,LB)=>{"use strict";function SBr(r){var e,t,i;if(e=r.length,e===0)return 0;for(t=1,i=0;i<e;i++)t*=r[i];return t}LB.exports=SBr});var FB=s((cge,PB)=>{"use strict";var TBr=RB();PB.exports=TBr});var BB=s((lge,MB)=>{"use strict";var _Br=IP(),IBr=FP(),LBr=KP(),RBr=y(),PBr=IB(),FBr=FB();function MBr(r,e,t){var i,n,a,u;if(i=e.length,i>0?(a=FBr(e),u=_Br(e,t)):(a=1,u=[0]),n=LBr(r,a),n===null)throw new TypeError(RBr("invalid argument. First argument must be a recognized data type. Value: `%s`.",r));return new PBr(r,n,e,u,IBr(e,u),t)}MB.exports=MBr});var jB=s((pge,kB)=>{"use strict";var BBr=BB();kB.exports=BBr});var UB=s((gge,VB)=>{"use strict";var CB=rr(),kBr=EP(),jBr=jB();function CBr(r){return CB(r,"toArray",kBr),CB(r,"zeros",jBr),r}VB.exports=CBr});var HB=s((mge,GB)=>{"use strict";var VBr=De();function UBr(r,e,t,i){VBr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}GB.exports=UBr});var M=s((dge,WB)=>{"use strict";var GBr=HB();WB.exports=GBr});var DB=s((hge,xB)=>{"use strict";function HBr(r){return e;function e(){return r}}xB.exports=HBr});var T=s((qge,zB)=>{"use strict";var WBr=DB();zB.exports=WBr});var JB=s((yge,XB)=>{"use strict";var xBr=I();function DBr(r){return r===0&&1/r===xBr}XB.exports=DBr});var ut=s((bge,YB)=>{"use strict";var zBr=JB();YB.exports=zBr});var QB=s((wge,$B)=>{"use strict";var XBr=ut(),ZB=E(),t3=I();function JBr(r,e){return ZB(r)||ZB(e)?NaN:r===t3||e===t3?t3:r===e&&r===0?XBr(r)?r:e:r>e?r:e}$B.exports=JBr});var i3=s((Ege,KB)=>{"use strict";var YBr=QB();KB.exports=YBr});var tk=s((Nge,ek)=>{"use strict";var rk=65535;function ZBr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&rk)>>>0,o=(e&rk)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}ek.exports=ZBr});var nk=s((Oge,ik)=>{"use strict";var $Br=tk();ik.exports=$Br});var n3=s((Age,ak)=>{"use strict";function QBr(r,e,t,i,n,a,u){var o,f,v,c,l,p,g;for(o=e.data,f=n.data,c=e.accessors[0],v=n.accessors[1],l=i,p=u,g=0;g<r;g++)v(f,p,c(o,l)),l+=t,p+=a;return e}ak.exports=QBr});var ok=s((Sge,uk)=>{"use strict";var sk=fn(),KBr=n3(),a3=8;function rkr(r,e,t,i,n){var a,u,o,f,v,c;if(r<=0)return i;if(o=sk(e),f=sk(i),o.accessorProtocol||f.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,KBr(r,o,t,a,f,n,u),f.data;if(t===1&&n===1){if(v=r%a3,v>0)for(c=0;c<v;c++)i[c]=e[c];if(r<a3)return i;for(c=v;c<r;c+=a3)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}uk.exports=rkr});var ck=s((Tge,fk)=>{"use strict";var vk=fn(),ekr=n3(),xn=8;function tkr(r,e,t,i,n,a,u){var o,f,v,c,l,p;if(r<=0)return n;if(v=vk(e),c=vk(n),v.accessorProtocol||c.accessorProtocol)return ekr(r,v,t,i,c,a,u),c.data;if(o=i,f=u,t===1&&a===1){if(l=r%xn,l>0)for(p=0;p<l;p++)n[f]=e[o],o+=t,f+=a;if(r<xn)return n;for(p=l;p<r;p+=xn)n[f]=e[o],n[f+1]=e[o+1],n[f+2]=e[o+2],n[f+3]=e[o+3],n[f+4]=e[o+4],n[f+5]=e[o+5],n[f+6]=e[o+6],n[f+7]=e[o+7],o+=xn,f+=xn;return n}for(p=0;p<r;p++)n[f]=e[o],o+=t,f+=a;return n}fk.exports=tkr});var ot=s((_ge,pk)=>{"use strict";var ikr=b(),lk=ok(),nkr=ck();ikr(lk,"ndarray",nkr);pk.exports=lk});var mk=s((Ige,gk)=>{"use strict";function akr(){}gk.exports=akr});var hk=s((Lge,dk)=>{"use strict";var skr=mk();function ukr(){return skr.name==="foo"}dk.exports=ukr});var yk=s((Rge,qk)=>{"use strict";var okr=hk();qk.exports=okr});var wk=s((Pge,bk)=>{"use strict";var vkr=_(),fkr=yk(),ckr=y(),lkr=ao().REGEXP,pkr=fkr();function gkr(r){if(vkr(r)===!1)throw new TypeError(ckr("invalid argument. Must provide a function. Value: `%s`.",r));return pkr?r.name:lkr.exec(r.toString())[1]}bk.exports=gkr});var Nk=s((Fge,Ek)=>{"use strict";var mkr=wk();Ek.exports=mkr});var Ak=s((Mge,Ok)=>{"use strict";var dkr=ai(),hkr=$r(),qkr=ni(),ykr=ii(),bkr=Mt(),wkr=Xe(),Ekr=lr(),Nkr=Zr(),Okr=cr(),Akr=[Okr,Nkr,wkr,Ekr,ykr,bkr,dkr,hkr,qkr];Ok.exports=Akr});var Sk=s((Bge,Skr)=>{Skr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var Pk=s((kge,Rk)=>{"use strict";var Tkr=ze(),_kr=Nk(),Ik=Ut(),Ikr=lo(),Lkr=cr(),Tk=Ak(),_k=Sk(),O0=Ikr()?Ik(Lkr):Lk;O0=_kr(O0)==="TypedArray"?O0:Lk;function Lk(){}function Rkr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof O0)return!0;for(t=0;t<Tk.length;t++)if(r instanceof Tk[t])return!0;for(;r;){for(e=Tkr(r),t=0;t<_k.length;t++)if(_k[t]===e)return!0;r=Ik(r)}return!1}Rk.exports=Rkr});var Mk=s((jge,Fk)=>{"use strict";var Pkr=Pk();Fk.exports=Pkr});var kk=s((Cge,Bk)=>{"use strict";var Fkr=pi(),Mkr=hi(),Bkr=[Mkr,Fkr];Bk.exports=Bkr});var jk=s((Vge,kkr)=>{kkr.exports=["Complex64Array","Complex128Array"]});var Gk=s((Uge,Uk)=>{"use strict";var jkr=ze(),Ckr=Ut(),Ck=kk(),Vk=jk();function Vkr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<Ck.length;t++)if(r instanceof Ck[t])return!0;for(;r;){for(e=jkr(r),t=0;t<Vk.length;t++)if(Vk[t]===e)return!0;r=Ckr(r)}return!1}Uk.exports=Vkr});var Wk=s((Gge,Hk)=>{"use strict";var Ukr=Gk();Hk.exports=Ukr});var Dk=s((Hge,xk)=>{"use strict";var Gkr=y();function Hkr(r,e){if(typeof e!="function")throw new TypeError(Gkr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}xk.exports=Hkr});var Xk=s((Wge,zk)=>{"use strict";var Wkr=Dk();zk.exports=Wkr});var Yk=s((xge,Jk)=>{"use strict";var xkr=ai(),Dkr=$r(),zkr=ni(),Xkr=ii(),Jkr=Mt(),Ykr=Xe(),Zkr=lr(),$kr=Zr(),Qkr=cr(),Kkr=pi(),rjr=hi(),ejr=[[Qkr,"Float64Array"],[$kr,"Float32Array"],[Ykr,"Int32Array"],[Zkr,"Uint32Array"],[Xkr,"Int16Array"],[Jkr,"Uint16Array"],[xkr,"Int8Array"],[Dkr,"Uint8Array"],[zkr,"Uint8ClampedArray"],[Kkr,"Complex64Array"],[rjr,"Complex128Array"]];Jk.exports=ejr});var $k=s((Dge,Zk)=>{"use strict";var tjr=Xk(),ijr=ze(),njr=Ut(),Pi=Yk();function ajr(r){var e,t;for(t=0;t<Pi.length;t++)if(tjr(r,Pi[t][0]))return Pi[t][1];for(;r;){for(e=ijr(r),t=0;t<Pi.length;t++)if(e===Pi[t][1])return Pi[t][1];r=njr(r)}}Zk.exports=ajr});var Kk=s((zge,Qk)=>{"use strict";var sjr=Mk(),ujr=Wk(),ojr=oi(),vjr=vi(),fjr=y(),cjr=$k();function ljr(r){var e,t,i;if(sjr(r))e=r;else if(ujr(r))r.BYTES_PER_ELEMENT===8?e=ojr(r,0):e=vjr(r,0);else throw new TypeError(fjr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:cjr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}Qk.exports=ljr});var B=s((Xge,rj)=>{"use strict";var pjr=Kk();rj.exports=pjr});var s3=s((Jge,ej)=>{"use strict";var gjr=ei(),mjr=X(),djr=gjr-1;function hjr(){var r=mjr(1+djr*Math.random());return r>>>0}ej.exports=hjr});var g3=s((Yge,lj)=>{"use strict";var de=b(),vt=R(),tj=M(),u3=A(),qjr=L(),yjr=Wr(),ij=ve(),bjr=gr().isPrimitive,nj=re().isPrimitive,vj=Ii(),fj=ei(),yr=lr(),wjr=i3(),p3=nk(),Fi=ot(),Ejr=B(),wr=y(),aj=s3(),ur=624,o3=397,sj=fj>>>0,Njr=19650218>>>0,v3=2147483648>>>0,f3=2147483647>>>0,Ojr=1812433253>>>0,Ajr=1664525>>>0,Sjr=1566083941>>>0,Tjr=2636928640>>>0,_jr=4022730752>>>0,Ijr=2567483615>>>0,c3=[0>>>0,Ijr>>>0],cj=1/(vj+1),Ljr=67108864>>>0,Rjr=2147483648>>>0,l3=1>>>0,Pjr=vj*cj,A0=1,S0=3,ft=2,ct=ur+3,br=ur+5,Dn=ur+6;function uj(r,e){var t;return e?t="option":t="argument",r.length<Dn+1?new RangeError(wr("invalid %s. `state` array has insufficient length.",t)):r[0]!==A0?new RangeError(wr("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,A0,r[0])):r[1]!==S0?new RangeError(wr("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,S0,r[1])):r[ft]!==ur?new RangeError(wr("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ur,r[ft])):r[ct]!==1?new RangeError(wr("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[ct])):r[br]!==r.length-Dn?new RangeError(wr("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Dn,r[br])):null}function oj(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=p3(t,Ojr)+i>>>0;return r}function Fjr(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=wjr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=p3(n,Ajr)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=p3(n,Sjr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=Rjr,r}function Mjr(r){var e,t,i,n;for(n=ur-o3,t=0;t<n;t++)e=r[t]&v3|r[t+1]&f3,r[t]=r[t+o3]^e>>>1^c3[e&l3];for(i=ur-1;t<i;t++)e=r[t]&v3|r[t+1]&f3,r[t]=r[t-n]^e>>>1^c3[e&l3];return e=r[i]&v3|r[0]&f3,r[i]=r[o3-1]^e>>>1^c3[e&l3],r}function Bjr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!qjr(r))throw new TypeError(wr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(u3(r,"copy")&&(i.copy=r.copy,!bjr(r.copy)))throw new TypeError(wr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(u3(r,"state")){if(t=r.state,i.state=!0,!ij(t))throw new TypeError(wr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=uj(t,!0),u)throw u;i.copy===!1?e=t:(e=new yr(t.length),Fi(t.length,t,1,e,1)),t=new yr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,ur),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,t[br])}if(n===void 0)if(u3(r,"seed"))if(n=r.seed,i.seed=!0,nj(n)){if(n>sj)throw new RangeError(wr("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(yjr(n)===!1||n.length<1)throw new TypeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!nj(n))throw new TypeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>sj)throw new RangeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new yr(Dn+a),e[0]=A0,e[1]=S0,e[ft]=ur,e[ct]=1,e[ct+1]=ur,e[br]=a,Fi.ndarray(a,n,1,0,e,1,br+1),t=new yr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,ur),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,a),t=oj(t,ur,Njr),t=Fjr(t,ur,n,a)}else n=aj()>>>0}else n=aj()>>>0;return t===void 0&&(e=new yr(Dn+1),e[0]=A0,e[1]=S0,e[ft]=ur,e[ct]=1,e[ct+1]=ur,e[br]=1,e[br+1]=n,t=new yr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,ur),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,1),t=oj(t,ur,n)),de(h,"NAME","mt19937"),vt(h,"seed",o),vt(h,"seedLength",f),tj(h,"state",l,p),vt(h,"stateLength",v),vt(h,"byteLength",c),de(h,"toJSON",g),de(h,"MIN",0),de(h,"MAX",fj),de(h,"normalized",d),de(d,"NAME",h.NAME),vt(d,"seed",o),vt(d,"seedLength",f),tj(d,"state",l,p),vt(d,"stateLength",v),vt(d,"byteLength",c),de(d,"toJSON",g),de(d,"MIN",0),de(d,"MAX",Pjr),h;function o(){var m=e[br];return Fi(m,n,1,new yr(m),1)}function f(){return e[br]}function v(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return Fi(m,e,1,new yr(m),1)}function p(m){var q;if(!ij(m))throw new TypeError(wr("invalid argument. Must provide a Uint32Array. Value: `%s`.",m));if(q=uj(m,!1),q)throw q;i.copy===!1?i.state&&m.length===e.length?Fi(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new yr(m.length)),Fi(m.length,m,1,e,1)),t=new yr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,ur),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,e[br])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=Ejr(e),m.params=[],m}function h(){var m,q;return q=e[ct+1],q>=ur&&(t=Mjr(t),q=0),m=t[q],e[ct+1]=q+1,m^=m>>>11,m^=m<<7&Tjr,m^=m<<15&_jr,m^=m>>>18,m>>>0}function d(){var m=h()>>>5,q=h()>>>6;return(m*Ljr+q)*cj}}lj.exports=Bjr});var gj=s((Zge,pj)=>{"use strict";var kjr=g3(),jjr=s3(),Cjr=kjr({seed:jjr()});pj.exports=Cjr});var z=s(($ge,dj)=>{"use strict";var Vjr=b(),mj=gj(),Ujr=g3();Vjr(mj,"factory",Ujr);dj.exports=mj});var bj=s((Qge,yj)=>{"use strict";var hj=j().isPrimitive,m3=y(),qj=vr();function Gjr(r,e){return!hj(r)||qj(r)?new TypeError(m3("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!hj(e)||qj(e)?new TypeError(m3("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(m3("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}yj.exports=Gjr});var Ej=s((Kge,wj)=>{"use strict";var Hjr=W(),Wjr=Xt(),xjr=s0();function Djr(r,e,t){return e+Hjr(Wjr(xjr*r()),2)*(t-e)}wj.exports=Djr});var d3=s((rme,Lj)=>{"use strict";var he=b(),T0=R(),Nj=M(),Oj=L(),Aj=_(),Sj=A(),Tj=T(),zjr=C(),_0=z().factory,_j=E(),Xjr=B(),I0=y(),Jjr=bj(),Ij=Ej();function Yjr(){var r,e,t,i,n,a;if(arguments.length===0)e=_0();else if(arguments.length===1){if(r=arguments[0],!Oj(r))throw new TypeError(I0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Sj(r,"prng")){if(!Aj(r.prng))throw new TypeError(I0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=_0(r)}else{if(n=arguments[0],a=arguments[1],i=Jjr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Oj(r))throw new TypeError(I0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Sj(r,"prng")){if(!Aj(r.prng))throw new TypeError(I0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=_0(r)}else e=_0()}return n===void 0?t=h:t=g,he(t,"NAME","arcsine"),r&&r.prng?(he(t,"seed",null),he(t,"seedLength",null),Nj(t,"state",Tj(null),zjr),he(t,"stateLength",null),he(t,"byteLength",null),he(t,"toJSON",Tj(null)),he(t,"PRNG",e)):(T0(t,"seed",u),T0(t,"seedLength",o),Nj(t,"state",c,l),T0(t,"stateLength",f),T0(t,"byteLength",v),he(t,"toJSON",p),he(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Xjr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return Ij(e,n,a)}function h(d,m){return _j(d)||_j(m)||d>=m?NaN:Ij(e,d,m)}}Lj.exports=Yjr});var Pj=s((eme,Rj)=>{"use strict";var Zjr=d3(),$jr=Zjr();Rj.exports=$jr});var Bj=s((tme,Mj)=>{"use strict";var Qjr=b(),Fj=Pj(),Kjr=d3();Qjr(Fj,"factory",Kjr);Mj.exports=Fj});var h3=s((ime,Gj)=>{"use strict";var qe=b(),L0=R(),kj=M(),jj=L(),rCr=ln().isPrimitive,Cj=_(),Vj=A(),Uj=T(),eCr=C(),R0=z().factory,tCr=E(),iCr=B(),P0=y();function nCr(){var r,e,t,i;if(arguments.length===0)e=R0();else if(arguments.length===1&&jj(arguments[0]))if(r=arguments[0],Vj(r,"prng")){if(!Cj(r.prng))throw new TypeError(P0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=R0(r);else{if(i=arguments[0],!rCr(i))throw new TypeError(P0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!jj(r))throw new TypeError(P0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Vj(r,"prng")){if(!Cj(r.prng))throw new TypeError(P0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=R0(r)}else e=R0()}return i===void 0?t=p:t=l,qe(t,"NAME","bernoulli"),r&&r.prng?(qe(t,"seed",null),qe(t,"seedLength",null),kj(t,"state",Uj(null),eCr),qe(t,"stateLength",null),qe(t,"byteLength",null),qe(t,"toJSON",Uj(null)),qe(t,"PRNG",e)):(L0(t,"seed",n),L0(t,"seedLength",a),kj(t,"state",f,v),L0(t,"stateLength",u),L0(t,"byteLength",o),qe(t,"toJSON",c),qe(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=iCr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return e()<=i?1:0}function p(g){return tCr(g)||g<0||g>1?NaN:e()<=g?1:0}}Gj.exports=nCr});var Wj=s((nme,Hj)=>{"use strict";var aCr=h3(),sCr=aCr();Hj.exports=sCr});var zj=s((ame,Dj)=>{"use strict";var uCr=b(),xj=Wj(),oCr=h3();uCr(xj,"factory",oCr);Dj.exports=xj});var Zj=s((sme,Yj)=>{"use strict";var vCr=U(),Xj=sr(),fCr=P(),Jj=.00991256303526217;function cCr(r,e){var t,i,n;for(i=Xj(-.5*e*e),t=[],t.push(Jj/i),t.push(e),n=2;n<r;n++)t[n]=vCr(-2*fCr(Jj/t[n-1]+i)),i=Xj(-.5*t[n]*t[n]);return t.push(0),t}Yj.exports=cCr});var Qj=s((ume,$j)=>{"use strict";function lCr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}$j.exports=lCr});var eC=s((ome,rC)=>{"use strict";var Kj=P();function pCr(r,e,t){var i,n;do i=Kj(r())/e,n=Kj(r());while(-2*n<i*i);return t?i-e:e-i}rC.exports=pCr});var aC=s((vme,nC)=>{"use strict";var gCr=J(),tC=sr(),mCr=Zj(),dCr=Qj(),hCr=eC(),qCr=128,iC=3.442619855899,Yt=mCr(qCr,iC),yCr=dCr(Yt),bCr=127;function wCr(r,e){return t;function t(){for(var i,n,a,u,o,f,v;;){if(o=2*r()-1,f=e()&bCr,gCr(o)<yCr[f])return o*Yt[f];if(f===0)return hCr(r,iC,o<0);if(u=o*Yt[f],a=u*u,v=f+1,i=tC(-.5*(Yt[f]*Yt[f]-a)),n=tC(-.5*(Yt[v]*Yt[v]-a)),n+r()*(i-n)<1)return u}}}nC.exports=wCr});var y3=s((fme,oC)=>{"use strict";var lt=b(),F0=R(),sC=M(),ECr=_(),NCr=L(),OCr=gr().isPrimitive,M0=A(),ACr=ve(),q3=z().factory,uC=T(),SCr=C(),TCr=X(),_Cr=ei(),ICr=B(),zn=y(),LCr=aC();function RCr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!NCr(r))throw new TypeError(zn("invalid argument. Must provide an object. Value: `%s`.",r));if(M0(r,"copy")&&(n.copy=r.copy,!OCr(r.copy)))throw new TypeError(zn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(M0(r,"prng")){if(!ECr(r.prng))throw new TypeError(zn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(M0(r,"state")){if(n.state=r.state,!ACr(r.state))throw new TypeError(zn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(M0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(zn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=q3(n),e=t.normalized):(t=q3({seed:TCr(1+_Cr*e()),copy:n.copy}),n.seed=null):(t=q3(n),e=t.normalized),i=LCr(e,t),lt(i,"NAME","improved-ziggurat"),n.seed===null?(lt(i,"seed",null),lt(i,"seedLength",null)):(F0(i,"seed",a),F0(i,"seedLength",u)),r&&r.prng?(sC(i,"state",uC(null),SCr),lt(i,"stateLength",null),lt(i,"byteLength",null),lt(i,"toJSON",uC(null))):(sC(i,"state",v,c),F0(i,"stateLength",o),F0(i,"byteLength",f),lt(i,"toJSON",l)),lt(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function f(){return t.byteLength}function v(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=ICr(t.state),p.params=[],p}}oC.exports=RCr});var fC=s((cme,vC)=>{"use strict";var PCr=y3(),FCr=PCr();vC.exports=FCr});var pt=s((lme,lC)=>{"use strict";var MCr=b(),cC=fC(),BCr=y3();MCr(cC,"factory",BCr);lC.exports=cC});var gC=s((pme,pC)=>{"use strict";var kCr=_(),jCr=kCr(Object.assign);pC.exports=jCr});var dC=s((gme,mC)=>{"use strict";var CCr=Object.assign;mC.exports=CCr});var qC=s((mme,hC)=>{"use strict";var VCr=typeof Object.getOwnPropertySymbols<"u";hC.exports=VCr});var wC=s((dme,bC)=>{"use strict";var yC=qi(),UCr=yC.getOwnPropertySymbols;function GCr(r){return UCr(yC(r))}bC.exports=GCr});var NC=s((hme,EC)=>{"use strict";function HCr(){return[]}EC.exports=HCr});var AC=s((qme,OC)=>{"use strict";var WCr=qC(),xCr=wC(),DCr=NC(),b3;WCr?b3=xCr:b3=DCr;OC.exports=b3});var TC=s((yme,SC)=>{"use strict";var zCr=Ei(),XCr=AC(),JCr=gn();function YCr(r){var e,t,i;for(e=zCr(r),t=XCr(r),i=0;i<t.length;i++)JCr(r,t[i])&&e.push(t[i]);return e}SC.exports=YCr});var IC=s((bme,_C)=>{"use strict";var ZCr=TC();_C.exports=ZCr});var PC=s((wme,RC)=>{"use strict";var $Cr=IC(),LC=qi(),QCr=y();function KCr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(QCr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=LC(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=$Cr(LC(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}RC.exports=KCr});var Xn=s((Eme,FC)=>{"use strict";var rVr=gC(),eVr=dC(),tVr=PC(),w3;rVr?w3=eVr:w3=tVr;FC.exports=w3});var jC=s((Nme,kC)=>{"use strict";var MC=D().isPrimitive,BC=y();function iVr(r,e){return MC(r)?MC(e)?null:new TypeError(BC("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(BC("invalid argument. First argument must be a positive number. Value: `%s`.",r))}kC.exports=iVr});var HC=s((Ome,GC)=>{"use strict";var CC=P(),VC=U(),nVr=W(),UC=1/3;function aVr(r,e,t){var i,n,a,u,o,f,v,c,l,p;for(t<1?(f=t+1-UC,o=1/VC(9*f),c=nVr(r(),1/t)):(f=t-UC,o=1/VC(9*f),c=1),i=!0;i;){do v=e(),p=1+o*v;while(p<=0);p*=p*p,n=v*v,a=1-.331*n*n,u=.5*n+f*(1-p+CC(p)),l=r(),(l<a||CC(l)<u)&&(i=!1)}return f*p*c}GC.exports=aVr});var DC=s((Ame,xC)=>{"use strict";var E3=W(),WC=P();function sVr(r,e,t){var i,n,a,u,o,f,v,c;for(a=t-1,o=E3(a+a,.5),i=!0;i===!0;)u=e(),v=.5*(1+u/o),v>=0&&v<=1&&(f=r(),n=E3(u,4),c=8*t-12,c=1-n/c,f<=c?i=!1:(c+=.5*E3(n/(8*t-8),2),f<c&&(c=a*WC(4*v*(1-v)),c+=u*u/2,c>=WC(f)&&(i=!1))));return v}xC.exports=sVr});var XC=s((Sme,zC)=>{"use strict";var uVr=W(),B0=P();function oVr(r,e,t,i){var n,a,u,o,f,v,c,l,p,g,h;for(o=t-1,f=i-1,v=o+f,c=v*B0(v),u=o/v,n=.5/uVr(v,.5),a=!0;a===!0;)l=e(),g=u+l*n,g>=0&&g<=1&&(p=r(),h=o*B0(g/o),h+=f*B0((1-g)/f),h+=c+.5*l*l,h>=B0(p)&&(a=!1));return g}zC.exports=oVr});var ZC=s((Tme,YC)=>{"use strict";var N3=sr(),JC=W(),O3=P();function vVr(r,e,t){for(var i,n,a,u,o,f,v;;)if(u=r(),o=r(),f=JC(u,1/e),v=JC(o,1/t),a=f+v,a<=1)return a>0?f/a:(i=O3(u)/e,n=O3(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),N3(i-O3(N3(i)+N3(n))))}YC.exports=vVr});var KC=s((_me,QC)=>{"use strict";var $C=HC(),fVr=DC(),cVr=XC(),lVr=ZC();function pVr(r,e,t,i){var n,a;return t===i&&t>1.5?fVr(r,e,t):t>1&&i>1?cVr(r,e,t,i):t<1&&i<1?lVr(r,t,i):(n=$C(r,e,t),a=$C(r,e,i),n/(n+a))}QC.exports=pVr});var _3=s((Ime,vV)=>{"use strict";var ye=b(),k0=R(),rV=M(),eV=L(),tV=gr().isPrimitive,iV=_(),Mi=A(),nV=T(),gVr=C(),aV=pt().factory,j0=z().factory,sV=E(),A3=ot(),S3=lr(),T3=ve(),uV=Xn(),mVr=B(),be=y(),dVr=jC(),oV=KC();function hVr(){var r,e,t,i,n,a,u,o,f;if(o=!0,arguments.length===0)n={copy:!1},a=j0(n);else if(arguments.length===1){if(n=arguments[0],!eV(n))throw new TypeError(be("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Mi(n,"copy")&&!tV(n.copy))throw new TypeError(be("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Mi(n,"prng")){if(!iV(n.prng))throw new TypeError(be("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Mi(n,"state")&&!T3(n.state))throw new TypeError(be("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=uV({},n),n.copy===!1?o=!1:n.state&&(n.state=A3(n.state.length,n.state,1,new S3(n.state.length),1)),n.copy=!1,a=j0(n)}}else{if(t=arguments[0],i=arguments[1],f=dVr(t,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!eV(n))throw new TypeError(be("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Mi(n,"copy")&&!tV(n.copy))throw new TypeError(be("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Mi(n,"prng")){if(!iV(n.prng))throw new TypeError(be("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Mi(n,"state")&&!T3(n.state))throw new TypeError(be("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=uV({},n),n.copy===!1?o=!1:n.state&&(n.state=A3(n.state.length,n.state,1,new S3(n.state.length),1)),n.copy=!1,a=j0(n)}}else n={copy:!1},a=j0(n)}return n&&n.prng?e=aV({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=aV({state:r,copy:!1})),t===void 0?u=q:u=m,ye(u,"NAME","beta"),n&&n.prng?(ye(u,"seed",null),ye(u,"seedLength",null),rV(u,"state",nV(null),gVr),ye(u,"stateLength",null),ye(u,"byteLength",null),ye(u,"toJSON",nV(null)),ye(u,"PRNG",a)):(k0(u,"seed",v),k0(u,"seedLength",c),rV(u,"state",g,h),k0(u,"stateLength",l),k0(u,"byteLength",p),ye(u,"toJSON",d),ye(u,"PRNG",a),a=a.normalized),u;function v(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function g(){return a.state}function h(N){if(!T3(N))throw new TypeError(be("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=A3(N.length,N,1,new S3(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=mVr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function m(){return oV(a,e,t,i)}function q(N,O){return sV(N)||sV(O)||N<=0||O<=0?NaN:oV(a,e,N,O)}}vV.exports=hVr});var cV=s((Lme,fV)=>{"use strict";var qVr=_3(),yVr=qVr();fV.exports=yVr});var gV=s((Rme,pV)=>{"use strict";var bVr=b(),lV=cV(),wVr=_3();bVr(lV,"factory",wVr);pV.exports=lV});var qV=s((Pme,hV)=>{"use strict";var mV=D().isPrimitive,dV=y();function EVr(r,e){return mV(r)?mV(e)?null:new TypeError(dV("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(dV("invalid argument. First argument must be a positive number. Value: `%s`.",r))}hV.exports=EVr});var wV=s((Fme,bV)=>{"use strict";var yV=P();function NVr(r,e,t,i,n){var a,u,o,f,v,c,l;for(a=!0;a;){do v=e(),l=1+n*v;while(l<=0);l*=l*l,u=v*v,o=1-.331*u*u,f=.5*u+i*(1-l+yV(l)),c=r(),(c<o||yV(c)<f)&&(a=!1)}return 1/t*i*l}bV.exports=NVr});var F3=s((Mme,RV)=>{"use strict";var we=b(),C0=R(),EV=M(),NV=L(),I3=ve(),OV=gr().isPrimitive,AV=_(),Bi=A(),SV=T(),OVr=C(),TV=pt().factory,V0=z().factory,_V=E(),L3=U(),IV=W(),R3=ot(),P3=lr(),AVr=B(),LV=Xn(),Ee=y(),SVr=qV(),U0=wV(),G0=1/3;function TVr(){var r,e,t,i,n,a,u,o,f,v,c;if(o=!0,arguments.length===0)n={copy:!1},a=V0(n);else if(arguments.length===1){if(n=arguments[0],!NV(n))throw new TypeError(Ee("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Bi(n,"copy")&&!OV(n.copy))throw new TypeError(Ee("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Bi(n,"prng")){if(!AV(n.prng))throw new TypeError(Ee("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Bi(n,"state")&&!I3(n.state))throw new TypeError(Ee("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=LV({},n),n.copy===!1?o=!1:n.state&&(n.state=R3(n.state.length,n.state,1,new P3(n.state.length),1)),n.copy=!1,a=V0(n)}}else{if(e=arguments[0],i=arguments[1],f=SVr(e,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!NV(n))throw new TypeError(Ee("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Bi(n,"copy")&&!OV(n.copy))throw new TypeError(Ee("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Bi(n,"prng")){if(!AV(n.prng))throw new TypeError(Ee("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Bi(n,"state")&&!I3(n.state))throw new TypeError(Ee("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=LV({},n),n.copy===!1?o=!1:n.state&&(n.state=R3(n.state.length,n.state,1,new P3(n.state.length),1)),n.copy=!1,a=V0(n)}}else n={copy:!1},a=V0(n)}return n&&n.prng?t=TV({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=TV({state:r,copy:!1})),e===void 0?u=F:(e>=1?(u=N,c=e-G0):(u=O,c=e+1-G0),v=1/L3(9*c)),we(u,"NAME","gamma"),n&&n.prng?(we(u,"seed",null),we(u,"seedLength",null),EV(u,"state",SV(null),OVr),we(u,"stateLength",null),we(u,"byteLength",null),we(u,"toJSON",SV(null)),we(u,"PRNG",a)):(C0(u,"seed",l),C0(u,"seedLength",p),EV(u,"state",d,m),C0(u,"stateLength",g),C0(u,"byteLength",h),we(u,"toJSON",q),we(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function g(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function m(S){if(!I3(S))throw new TypeError(Ee("invalid argument. Must provide a Uint32Array. Value: `%s`.",S));o&&(S=R3(S.length,S,1,new P3(S.length),1)),a.state=S}function q(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=AVr(a.state),e===void 0?S.params=[]:S.params=[e,i],S}function N(){return U0(a,t,i,c,v)}function O(){return U0(a,t,i,c,v)*IV(a(),1/e)}function F(S,x){var Q,G;return _V(S)||_V(x)||S<=0||x<=0?NaN:S<1?(G=S+1-G0,Q=1/L3(9*G),U0(a,t,x,G,Q)*IV(a(),1/S)):(G=S-G0,Q=1/L3(9*G),U0(a,t,x,G,Q))}}RV.exports=TVr});var FV=s((Bme,PV)=>{"use strict";var _Vr=F3(),IVr=_Vr();PV.exports=IVr});var ki=s((kme,BV)=>{"use strict";var LVr=b(),MV=FV(),RVr=F3();LVr(MV,"factory",RVr);BV.exports=MV});var VV=s((jme,CV)=>{"use strict";var kV=D().isPrimitive,jV=y();function PVr(r,e){return kV(r)?kV(e)?null:new TypeError(jV("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(jV("invalid argument. First argument must be a positive number. Value: `%s`.",r))}CV.exports=PVr});var GV=s((Cme,UV)=>{"use strict";function FVr(r,e,t){return r(e,1)/r(t,1)}UV.exports=FVr});var M3=s((Vme,JV)=>{"use strict";var gt=b(),H0=R(),HV=M(),WV=L(),xV=T(),MVr=C(),W0=ki().factory,DV=E(),BVr=B(),zV=y(),kVr=VV(),XV=GV();function jVr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=W0();else if(arguments.length===1){if(i=arguments[0],!WV(i))throw new TypeError(zV("invalid argument. Options argument must be an object. Value: `%s`.",i));r=W0(i)}else{if(e=arguments[0],t=arguments[1],u=kVr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!WV(i))throw new TypeError(zV("invalid argument. Options argument must be an object. Value: `%s`.",i));r=W0(i)}else r=W0()}return e===void 0?a=d:a=h,n=r.PRNG,gt(a,"NAME","betaprime"),i&&i.prng?(gt(a,"seed",null),gt(a,"seedLength",null),HV(a,"state",xV(null),MVr),gt(a,"stateLength",null),gt(a,"byteLength",null),gt(a,"toJSON",xV(null))):(H0(a,"seed",o),H0(a,"seedLength",f),HV(a,"state",l,p),H0(a,"stateLength",v),H0(a,"byteLength",c),gt(a,"toJSON",g)),gt(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=BVr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return XV(r,e,t)}function d(m,q){return DV(m)||DV(q)||m<=0||q<=0?NaN:XV(r,m,q)}}JV.exports=jVr});var ZV=s((Ume,YV)=>{"use strict";var CVr=M3(),VVr=CVr();YV.exports=VVr});var KV=s((Gme,QV)=>{"use strict";var UVr=b(),$V=ZV(),GVr=M3();UVr($V,"factory",GVr);QV.exports=$V});var eU=s((Hme,rU)=>{"use strict";var HVr=X();function WVr(r){return HVr(r)===r&&r>0}rU.exports=WVr});var B3=s((Wme,tU)=>{"use strict";var xVr=eU();tU.exports=xVr});var nU=s((xme,iU)=>{"use strict";function DVr(r){return r>=0&&r<=1}iU.exports=DVr});var sU=s((Dme,aU)=>{"use strict";var zVr=nU();aU.exports=zVr});var vU=s((zme,oU)=>{"use strict";var XVr=re().isPrimitive,JVr=ln().isPrimitive,uU=y();function YVr(r,e){return XVr(r)?JVr(e)?null:new TypeError(uU("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(uU("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}oU.exports=YVr});var cU=s((Xme,fU)=>{"use strict";function ZVr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}fU.exports=ZVr});var pU=s((Jme,lU)=>{"use strict";var $Vr=E();function QVr(r){return r===0||$Vr(r)?r:r<0?-1:1}lU.exports=QVr});var x0=s((Yme,gU)=>{"use strict";var KVr=pU();gU.exports=KVr});var dU=s((Zme,mU)=>{"use strict";var rUr=W(),eUr=1/12,tUr=1/360,iUr=1/1260;function nUr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=rUr(r,2),(eUr-(tUr-iUr/e)/e)/r}}mU.exports=nUr});var qU=s(($me,hU)=>{"use strict";var k3=X(),aUr=x0(),sUr=U(),j3=J(),D0=P(),z0=dU(),uUr=1/6;function oUr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,S,x,Q,G,_r,Ir,or,Rt;for(x=k3((e+1)*t),v=e-x+1,Q=1-t,G=t/Q,c=(e+1)*G,u=e*t*Q,a=sUr(u),m=1.15+2.53*a,d=-.0873+.0248*m+.01*t,q=e*t+.5,i=(2.83+5.1/m)*a,h=.92-4.2/m,n=.86*h,O=(x+.5)*D0((x+1)/(G*v)),O+=z0(x)+z0(e-x);;){if(or=r(),or<=n)return Ir=or/h-.43,G=Ir*(2*d/(.5-j3(Ir))+m)+q,k3(G);if(or>=h?Ir=r()-.5:(Ir=or/h-.93,Ir=aUr(Ir)*.5-Ir,or=h*r()),l=.5-j3(Ir),S=k3(Ir*(2*d/l+m)+q),!(S<0||S>e))if(or=or*i/(d/(l*l)+m),p=j3(S-x),p>15){if(or=D0(or),o=p/u,f=(p/3+.625)*p,f+=uUr,f/=u,o*=f+.5,_r=-(p*p)/(2*u),or<_r-o||or<=_r+o&&(g=e-S+1,Rt=O+(e+1)*D0(v/g),Rt+=(S+.5)*D0(g*G/(S+1)),Rt+=-(z0(S)+z0(e-S)),or<=Rt))return S}else{if(N=1,x<S)for(F=x;F<=S;F++)N*=c/F-G;else if(x>S)for(F=S;F<=x;F++)or*=c/F-G;if(or<=N)return S}}}hU.exports=oUr});var wU=s((Qme,bU)=>{"use strict";var vUr=cU(),fUr=qU();function yU(r,e,t){return t>.5?e-yU(r,e,1-t):e*t<10?vUr(r,e,t):fUr(r,e,t)}bU.exports=yU});var C3=s((Kme,IU)=>{"use strict";var Ne=b(),X0=R(),EU=M(),NU=L(),OU=_(),AU=A(),SU=T(),cUr=C(),TU=E(),lUr=B3(),pUr=sU(),J0=z().factory,gUr=B(),Y0=y(),mUr=vU(),_U=wU();function dUr(){var r,e,t,i,n,a;if(arguments.length===0)e=J0();else if(arguments.length===1){if(r=arguments[0],!NU(r))throw new TypeError(Y0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(AU(r,"prng")){if(!OU(r.prng))throw new TypeError(Y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=J0(r)}else{if(n=arguments[0],a=arguments[1],i=mUr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!NU(r))throw new TypeError(Y0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(AU(r,"prng")){if(!OU(r.prng))throw new TypeError(Y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=J0(r)}else e=J0()}return n===void 0?t=h:t=g,Ne(t,"NAME","binomial"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),EU(t,"state",SU(null),cUr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",SU(null)),Ne(t,"PRNG",e)):(X0(t,"seed",u),X0(t,"seedLength",o),EU(t,"state",c,l),X0(t,"stateLength",f),X0(t,"byteLength",v),Ne(t,"toJSON",p),Ne(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=gUr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return _U(e,n,a)}function h(d,m){return TU(d)||TU(m)||!lUr(d)||!pUr(m)?NaN:_U(e,d,m)}}IU.exports=dUr});var RU=s((rde,LU)=>{"use strict";var hUr=C3(),qUr=hUr();LU.exports=qUr});var MU=s((ede,FU)=>{"use strict";var yUr=b(),PU=RU(),bUr=C3();yUr(PU,"factory",bUr);FU.exports=PU});var kU=s((tde,BU)=>{"use strict";var wUr=U(),EUr=P(),NUr=Xt(),OUr=zt(),AUr=it();function SUr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=wUr(-2*EUr(n)),o=AUr*a,t=u*OUr(o),e=!1,u*NUr(o)}return e=!0,t}}BU.exports=SUr});var CU=s((ide,jU)=>{"use strict";var TUr=U(),_Ur=P(),IUr=zt(),LUr=Mr(),RUr=IUr(LUr);function PUr(r){var e=TUr(-2*_Ur(r));return e*RUr}jU.exports=PUr});var UU=s((nde,VU)=>{"use strict";var FUr=U(),MUr=P(),BUr=zt(),kUr=it();function jUr(r){var e=FUr(-2*MUr(r)),t=kUr*r;return e*BUr(t)}VU.exports=jUr});var V3=s((ade,xU)=>{"use strict";var Gr=b(),Z0=R(),GU=M(),CUr=L(),VUr=_(),UUr=gr().isPrimitive,Jn=A(),GUr=ve(),HU=z().factory,WU=T(),HUr=C(),WUr=B(),Yn=y(),xUr=kU(),DUr=CU(),zUr=UU();function XUr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!CUr(r))throw new TypeError(Yn("invalid argument. Must provide an object. Value: `%s`.",r));if(Jn(r,"copy")&&(n.copy=r.copy,!UUr(r.copy)))throw new TypeError(Yn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Jn(r,"prng")){if(!VUr(r.prng))throw new TypeError(Yn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Jn(r,"state")){if(n.state=r.state,!GUr(r.state))throw new TypeError(Yn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Jn(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Yn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=HU(n),e=i.normalized):n.seed=null:(i=HU(n),e=i.normalized),t=xUr(e),Gr(t,"NAME","box-muller"),n.seed===null?(Gr(t,"seed",null),Gr(t,"seedLength",null)):(Z0(t,"seed",a),Z0(t,"seedLength",u)),r&&r.prng?(GU(t,"state",WU(null),HUr),Gr(t,"stateLength",null),Gr(t,"byteLength",null),Gr(t,"toJSON",WU(null))):(GU(t,"state",v,c),Z0(t,"stateLength",o),Z0(t,"byteLength",f),Gr(t,"toJSON",l)),Gr(t,"PRNG",e),Jn(e,"MIN")?(Gr(t,"MIN",DUr(e.MIN)),Gr(t,"MAX",zUr(e.MIN))):(Gr(t,"MIN",null),Gr(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function f(){return i.byteLength}function v(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=WUr(i.state),p.params=[],p}}xU.exports=XUr});var zU=s((sde,DU)=>{"use strict";var JUr=V3(),YUr=JUr();DU.exports=YUr});var YU=s((ude,JU)=>{"use strict";var ZUr=b(),XU=zU(),$Ur=V3();ZUr(XU,"factory",$Ur);JU.exports=XU});var QU=s((ode,$U)=>{"use strict";var QUr=j().isPrimitive,KUr=D().isPrimitive,ZU=y(),rGr=vr();function eGr(r,e){return!QUr(r)||rGr(r)?new TypeError(ZU("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):KUr(e)?null:new TypeError(ZU("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}$U.exports=eGr});var rG=s((vde,KU)=>{"use strict";function tGr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}KU.exports=tGr});var tG=s((fde,eG)=>{"use strict";function iGr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}eG.exports=iGr});var aG=s((cde,nG)=>{"use strict";var nGr=ar(),iG=ce(),aGr=rG(),sGr=tG(),uGr=.7853981633974483,oGr=3061616997868383e-32,vGr=.3333333333333341,fGr=2147483647;function cGr(r,e,t){var i,n,a,u,o,f,v,c,l;return i=nGr(r),n=i&fGr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=uGr-r,c=oGr-e,r=l+c,e=0),l=r*r,c=l*l,u=aGr(c),v=l*sGr(c),o=l*r,u=e+l*(o*(u+v)+e),u+=vGr*o,c=r+u,n>=1072010280?(v=t,(1-(i>>30&2))*(v-2*(r-(c*c/(c+v)-u)))):t===1?c:(l=iG(c,0),v=u-(l-r),a=-1/c,f=iG(a,0),o=1+f*l,f+a*(o+f*v))}nG.exports=cGr});var uG=s((lde,sG)=>{"use strict";var lGr=aG();sG.exports=lGr});var fG=s((pde,vG)=>{"use strict";var pGr=ar(),oG=uG(),gGr=_n(),U3=[0,0],mGr=2147483647,dGr=1072243195,hGr=2146435072,qGr=1044381696;function yGr(r){var e,t;return e=pGr(r),e&=mGr,e<=dGr?e<qGr?r:oG(r,0,1):e>=hGr?NaN:(t=gGr(r,U3),oG(U3[0],U3[1],1-((t&1)<<1)))}vG.exports=yGr});var G3=s((gde,cG)=>{"use strict";var bGr=fG();cG.exports=bGr});var pG=s((mde,lG)=>{"use strict";var wGr=G3(),EGr=Mr();function NGr(r,e,t){return e+t*wGr(EGr*(r()-.5))}lG.exports=NGr});var H3=s((dde,wG)=>{"use strict";var mt=b(),$0=R(),gG=M(),mG=L(),dG=_(),hG=A(),qG=T(),OGr=C(),yG=E(),ji=pt().factory,AGr=B(),Q0=y(),SGr=QU(),bG=pG();function TGr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=ji();else if(arguments.length===1){if(t=arguments[0],!mG(t))throw new TypeError(Q0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(hG(t,"prng")){if(!dG(t.prng))throw new TypeError(Q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ji({prng:t.prng})}else e=ji(t)}else{if(u=arguments[0],r=arguments[1],a=SGr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!mG(t))throw new TypeError(Q0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(hG(t,"prng")){if(!dG(t.prng))throw new TypeError(Q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ji({prng:t.prng})}else e=ji(t)}else e=ji()}return u===void 0?n=d:n=h,i=e.PRNG,mt(n,"NAME","cauchy"),t&&t.prng?(mt(n,"seed",null),mt(n,"seedLength",null),gG(n,"state",qG(null),OGr),mt(n,"stateLength",null),mt(n,"byteLength",null),mt(n,"toJSON",qG(null))):($0(n,"seed",o),$0(n,"seedLength",f),gG(n,"state",l,p),$0(n,"stateLength",v),$0(n,"byteLength",c),mt(n,"toJSON",g)),mt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=AGr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return bG(e,u,r)}function d(m,q){return yG(m)||yG(q)||q<=0?NaN:bG(e,m,q)}}wG.exports=TGr});var NG=s((hde,EG)=>{"use strict";var _Gr=H3(),IGr=_Gr();EG.exports=IGr});var SG=s((qde,AG)=>{"use strict";var LGr=b(),OG=NG(),RGr=H3();LGr(OG,"factory",RGr);AG.exports=OG});var W3=s((yde,PG)=>{"use strict";var dt=b(),K0=R(),TG=M(),PGr=D().isPrimitive,_G=L(),IG=_(),LG=A(),RG=T(),FGr=C(),MGr=E(),Ci=ki().factory,BGr=B(),rs=y();function kGr(){var r,e,t,i,n;if(arguments.length===0)r=Ci();else if(arguments.length===1&&_G(arguments[0]))if(t=arguments[0],LG(t,"prng")){if(!IG(t.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ci({prng:t.prng})}else r=Ci(t);else{if(n=arguments[0],!PGr(n))throw new TypeError(rs("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!_G(t))throw new TypeError(rs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(LG(t,"prng")){if(!IG(t.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ci(n/2,.5,{prng:t.prng})}else r=Ci(n/2,.5,t)}else r=Ci(n/2,.5)}return n===void 0?i=g:i=p,e=r.PRNG,dt(i,"NAME","chisquare"),t&&t.prng?(dt(i,"seed",null),dt(i,"seedLength",null),TG(i,"state",RG(null),FGr),dt(i,"stateLength",null),dt(i,"byteLength",null),dt(i,"toJSON",RG(null))):(K0(i,"seed",a),K0(i,"seedLength",u),TG(i,"state",v,c),K0(i,"stateLength",o),K0(i,"byteLength",f),dt(i,"toJSON",l)),dt(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=BGr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function g(h){return MGr(h)||h<=0?NaN:r(h/2,.5)}}PG.exports=kGr});var MG=s((bde,FG)=>{"use strict";var jGr=W3(),CGr=jGr();FG.exports=CGr});var Zn=s((wde,kG)=>{"use strict";var VGr=b(),BG=MG(),UGr=W3();VGr(BG,"factory",UGr);kG.exports=BG});var x3=s((Ede,WG)=>{"use strict";var ht=b(),es=R(),jG=M(),GGr=D().isPrimitive,CG=L(),VG=_(),UG=A(),GG=T(),HGr=C(),WGr=E(),Vi=Zn().factory,xGr=B(),HG=U(),ts=y();function DGr(){var r,e,t,i,n;if(arguments.length===0)r=Vi();else if(arguments.length===1&&CG(arguments[0]))if(t=arguments[0],UG(t,"prng")){if(!VG(t.prng))throw new TypeError(ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Vi({prng:t.prng})}else r=Vi(t);else{if(n=arguments[0],!GGr(n))throw new TypeError(ts("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!CG(t))throw new TypeError(ts("invalid argument. Options argument must be an object. Value: `%s`.",t));if(UG(t,"prng")){if(!VG(t.prng))throw new TypeError(ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Vi(n,{prng:t.prng})}else r=Vi(n,t)}else r=Vi(n)}return n===void 0?i=g:i=p,e=r.PRNG,ht(i,"NAME","chi"),t&&t.prng?(ht(i,"seed",null),ht(i,"seedLength",null),jG(i,"state",GG(null),HGr),ht(i,"stateLength",null),ht(i,"byteLength",null),ht(i,"toJSON",GG(null))):(es(i,"seed",a),es(i,"seedLength",u),jG(i,"state",v,c),es(i,"stateLength",o),es(i,"byteLength",f),ht(i,"toJSON",l)),ht(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=xGr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return HG(r())}function g(h){return WGr(h)||h<=0?NaN:HG(r(h))}}WG.exports=DGr});var DG=s((Nde,xG)=>{"use strict";var zGr=x3(),XGr=zGr();xG.exports=XGr});var JG=s((Ode,XG)=>{"use strict";var JGr=b(),zG=DG(),YGr=x3();JGr(zG,"factory",YGr);XG.exports=zG});var $G=s((Ade,ZG)=>{"use strict";var ZGr=j().isPrimitive,$Gr=D().isPrimitive,YG=y(),QGr=vr();function KGr(r,e){return!ZGr(r)||QGr(r)?new TypeError(YG("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):$Gr(e)?null:new TypeError(YG("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}ZG.exports=KGr});var KG=s((Sde,QG)=>{"use strict";var D3=E(),rHr=jn(),eHr=Mr();function tHr(r,e,t){var i;return D3(r)||D3(e)||D3(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+rHr(i)/eHr)/2)}QG.exports=tHr});var tH=s((Tde,eH)=>{"use strict";var rH=E();function iHr(r,e){return rH(r)||rH(e)?NaN:r<e?0:1}eH.exports=iHr});var aH=s((_de,nH)=>{"use strict";var nHr=T(),iH=E();function aHr(r){if(iH(r))return nHr(NaN);return e;function e(t){return iH(t)?NaN:t<r?0:1}}nH.exports=aHr});var is=s((Ide,uH)=>{"use strict";var sHr=b(),sH=tH(),uHr=aH();sHr(sH,"factory",uHr);uH.exports=sH});var vH=s((Lde,oH)=>{"use strict";var oHr=T(),vHr=is().factory,z3=E(),fHr=jn(),cHr=Mr();function lHr(r,e){if(z3(r)||z3(e)||e<0)return oHr(NaN);if(e===0)return vHr(r);return t;function t(i){var n;return z3(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+fHr(n)/cHr)/2)}}oH.exports=lHr});var lH=s((Rde,cH)=>{"use strict";var pHr=b(),fH=KG(),gHr=vH();pHr(fH,"factory",gHr);cH.exports=fH});var X3=s((Pde,pH)=>{"use strict";var mHr=lH(),dHr=1e4,hHr=1e-12;function qHr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<dHr;){if(u=(i+n)/2,n-i<hHr)return u;a=mHr(u,e,t),r>a?i=u:n=u,o+=1}return u}pH.exports=qHr});var mH=s((Fde,gH)=>{"use strict";var J3=E(),yHr=X3();function bHr(r,e,t){return J3(e)||J3(t)||J3(r)||t<0||r<0||r>1?NaN:t===0?e:yHr(r,e,t)}gH.exports=bHr});var hH=s((Mde,dH)=>{"use strict";var wHr=E();function EHr(r,e){return wHr(r)||r<0||r>1?NaN:e}dH.exports=EHr});var bH=s((Bde,yH)=>{"use strict";var NHr=T(),qH=E();function OHr(r){if(qH(r))return NHr(NaN);return e;function e(t){return qH(t)||t<0||t>1?NaN:r}}yH.exports=OHr});var Y3=s((kde,EH)=>{"use strict";var AHr=b(),wH=hH(),SHr=bH();AHr(wH,"factory",SHr);EH.exports=wH});var OH=s((jde,NH)=>{"use strict";var THr=T(),_Hr=Y3().factory,Z3=E(),IHr=X3();function LHr(r,e){if(Z3(r)||Z3(e)||e<0)return THr(NaN);if(e===0)return _Hr(r);return t;function t(i){return Z3(i)||i<0||i>1?NaN:IHr(i,r,e)}}NH.exports=LHr});var TH=s((Cde,SH)=>{"use strict";var RHr=b(),AH=mH(),PHr=OH();RHr(AH,"factory",PHr);SH.exports=AH});var IH=s((Vde,_H)=>{"use strict";var FHr=TH();function MHr(r,e,t){return FHr(r(),e,t)}_H.exports=MHr});var $3=s((Ude,jH)=>{"use strict";var Oe=b(),ns=R(),LH=M(),RH=L(),PH=_(),FH=A(),MH=T(),BHr=C(),as=z().factory,BH=E(),kHr=B(),ss=y(),jHr=$G(),kH=IH();function CHr(){var r,e,t,i,n,a;if(arguments.length===0)e=as();else if(arguments.length===1){if(r=arguments[0],!RH(r))throw new TypeError(ss("invalid argument. Options argument must be an object. Value: `%s`.",r));if(FH(r,"prng")){if(!PH(r.prng))throw new TypeError(ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=as(r)}else{if(n=arguments[0],a=arguments[1],i=jHr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!RH(r))throw new TypeError(ss("invalid argument. Options argument must be an object. Value: `%s`.",r));if(FH(r,"prng")){if(!PH(r.prng))throw new TypeError(ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=as(r)}else e=as()}return n===void 0?t=h:t=g,Oe(t,"NAME","cosine"),r&&r.prng?(Oe(t,"seed",null),Oe(t,"seedLength",null),LH(t,"state",MH(null),BHr),Oe(t,"stateLength",null),Oe(t,"byteLength",null),Oe(t,"toJSON",MH(null)),Oe(t,"PRNG",e)):(ns(t,"seed",u),ns(t,"seedLength",o),LH(t,"state",c,l),ns(t,"stateLength",f),ns(t,"byteLength",v),Oe(t,"toJSON",p),Oe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=kHr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return kH(e,n,a)}function h(d,m){return BH(d)||BH(m)||m<=0?NaN:kH(e,d,m)}}jH.exports=CHr});var VH=s((Gde,CH)=>{"use strict";var VHr=$3(),UHr=VHr();CH.exports=UHr});var HH=s((Hde,GH)=>{"use strict";var GHr=b(),UH=VH(),HHr=$3();GHr(UH,"factory",HHr);GH.exports=UH});var zH=s((Wde,DH)=>{"use strict";var WH=Br().isPrimitive,Q3=y(),xH=vr();function WHr(r,e){return!WH(r)||xH(r)?new TypeError(Q3("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!WH(e)||xH(e)?new TypeError(Q3("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(Q3("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}DH.exports=WHr});var YH=s((xde,JH)=>{"use strict";var K3=Ii(),Ui=X();function XH(r,e,t){var i,n,a,u,o,f,v,c,l;if(a=t-e,a===0)return e;if(v=r.MIN,c=r.MAX,n=c-v,n===a)return r()-v+e;if(n<a)for(u=0;;){for(a===K3?(u=Ui(a/(n+1)),a%(n+1)===n&&(u+=1)):u=Ui((a+1)/(n+1)),i=0,f=1;f<=u;){if(i+=(r()-v)*f,f*n===a-f+1)return i;f*=n+1}if(l=XH(r,0,Ui(a/f)),!(l>K3/f)&&(l*=f,i+=l,!(i>a)))return i+e}for(n===K3?(o=Ui(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Ui((n+1)/(a+1));;)if(i=r()-v,i=Ui(i/o),i<=a)return i+e}JH.exports=XH});var rv=s((Dde,iW)=>{"use strict";var Ae=b(),us=R(),ZH=M(),$H=L(),QH=_(),KH=A(),rW=T(),xHr=C(),os=z().factory,eW=E(),Gi=Lr(),DHr=B(),qt=y(),zHr=zH(),tW=YH();function XHr(){var r,e,t,i,n,a;if(arguments.length===0)e=os();else if(arguments.length===1){if(r=arguments[0],!$H(r))throw new TypeError(qt("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KH(r,"prng")){if(!QH(r.prng))throw new TypeError(qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Gi(e.MIN))throw new TypeError(qt("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Gi(e.MAX))throw new TypeError(qt("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=os(r)}else{if(n=arguments[0],a=arguments[1],i=zHr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!$H(r))throw new TypeError(qt("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KH(r,"prng")){if(!QH(r.prng))throw new TypeError(qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Gi(e.MIN))throw new TypeError(qt("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Gi(e.MAX))throw new TypeError(qt("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=os(r)}else e=os()}return n===void 0?t=h:t=g,Ae(t,"NAME","discrete-uniform"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),ZH(t,"state",rW(null),xHr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",rW(null)),Ae(t,"PRNG",e)):(us(t,"seed",u),us(t,"seedLength",o),ZH(t,"state",c,l),us(t,"stateLength",f),us(t,"byteLength",v),Ae(t,"toJSON",p),Ae(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=DHr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return tW(e,n,a)}function h(d,m){return eW(d)||eW(m)||!Gi(d)||!Gi(m)||d>m?NaN:tW(e,d,m)}}iW.exports=XHr});var aW=s((zde,nW)=>{"use strict";var JHr=rv(),YHr=JHr();nW.exports=YHr});var oW=s((Xde,uW)=>{"use strict";var ZHr=b(),sW=aW(),$Hr=rv();ZHr(sW,"factory",$Hr);uW.exports=sW});var cW=s((Jde,fW)=>{"use strict";var QHr=D().isPrimitive,KHr=re().isPrimitive,vW=y();function rWr(r,e){return KHr(r)?QHr(e)?null:new TypeError(vW("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(vW("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}fW.exports=rWr});var pW=s((Yde,lW)=>{"use strict";var eWr=P();function tWr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*eWr(i)}lW.exports=tWr});var ev=s((Zde,wW)=>{"use strict";var Se=b(),vs=R(),gW=M(),mW=L(),dW=_(),hW=A(),qW=T(),iWr=C(),fs=z().factory,yW=E(),nWr=B3(),aWr=B(),cs=y(),sWr=cW(),bW=pW();function uWr(){var r,e,t,i,n,a;if(arguments.length===0)e=fs();else if(arguments.length===1){if(t=arguments[0],!mW(t))throw new TypeError(cs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(hW(t,"prng")){if(!dW(t.prng))throw new TypeError(cs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=fs(t)}else{if(a=arguments[0],r=arguments[1],n=sWr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!mW(t))throw new TypeError(cs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(hW(t,"prng")){if(!dW(t.prng))throw new TypeError(cs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=fs(t)}else e=fs()}return a===void 0?i=h:i=g,Se(i,"NAME","erlang"),t&&t.prng?(Se(i,"seed",null),Se(i,"seedLength",null),gW(i,"state",qW(null),iWr),Se(i,"stateLength",null),Se(i,"byteLength",null),Se(i,"toJSON",qW(null)),Se(i,"PRNG",e)):(vs(i,"seed",u),vs(i,"seedLength",o),gW(i,"state",c,l),vs(i,"stateLength",f),vs(i,"byteLength",v),Se(i,"toJSON",p),Se(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=aWr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return bW(e,a,r)}function h(d,m){return yW(d)||yW(m)||!nWr(d)||m<=0?NaN:bW(e,d,m)}}wW.exports=uWr});var NW=s(($de,EW)=>{"use strict";var oWr=ev(),vWr=oWr();EW.exports=vWr});var SW=s((Qde,AW)=>{"use strict";var fWr=b(),OW=NW(),cWr=ev();fWr(OW,"factory",cWr);AW.exports=OW});var _W=s((Kde,TW)=>{"use strict";var lWr=P();function pWr(r,e){return-lWr(1-r())/e}TW.exports=pWr});var tv=s((rhe,BW)=>{"use strict";var Te=b(),ls=R(),IW=M(),gWr=D().isPrimitive,LW=L(),RW=_(),PW=A(),FW=T(),mWr=C(),ps=z().factory,dWr=E(),hWr=B(),gs=y(),MW=_W();function qWr(){var r,e,t,i;if(arguments.length===0)t=ps();else if(arguments.length===1&&LW(arguments[0]))if(e=arguments[0],PW(e,"prng")){if(!RW(e.prng))throw new TypeError(gs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ps(e);else{if(r=arguments[0],!gWr(r))throw new TypeError(gs("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!LW(e))throw new TypeError(gs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(PW(e,"prng")){if(!RW(e.prng))throw new TypeError(gs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ps(e)}else t=ps()}return r===void 0?i=p:i=l,Te(i,"NAME","exponential"),e&&e.prng?(Te(i,"seed",null),Te(i,"seedLength",null),IW(i,"state",FW(null),mWr),Te(i,"stateLength",null),Te(i,"byteLength",null),Te(i,"toJSON",FW(null)),Te(i,"PRNG",t)):(ls(i,"seed",n),ls(i,"seedLength",a),IW(i,"state",f,v),ls(i,"stateLength",u),ls(i,"byteLength",o),Te(i,"toJSON",c),Te(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=hWr(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return MW(t,r)}function p(g){return dWr(g)||g<=0?NaN:MW(t,g)}}BW.exports=qWr});var jW=s((ehe,kW)=>{"use strict";var yWr=tv(),bWr=yWr();kW.exports=bWr});var UW=s((the,VW)=>{"use strict";var wWr=b(),CW=jW(),EWr=tv();wWr(CW,"factory",EWr);VW.exports=CW});var xW=s((ihe,WW)=>{"use strict";var GW=D().isPrimitive,HW=y();function NWr(r,e){return GW(r)?GW(e)?null:new TypeError(HW("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(HW("invalid argument. First argument must be a positive number. Value: `%s`.",r))}WW.exports=NWr});var zW=s((nhe,DW)=>{"use strict";function OWr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}DW.exports=OWr});var iv=s((ahe,rx)=>{"use strict";var yt=b(),ms=R(),XW=M(),JW=L(),YW=_(),ZW=A(),$W=T(),AWr=C(),Hi=Zn().factory,QW=E(),SWr=B(),ds=y(),TWr=xW(),KW=zW();function _Wr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Hi();else if(arguments.length===1){if(e=arguments[0],!JW(e))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ZW(e,"prng")){if(!YW(e.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Hi({prng:e.prng})}else r=Hi(e)}else{if(a=arguments[0],u=arguments[1],n=TWr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!JW(e))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ZW(e,"prng")){if(!YW(e.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Hi({prng:e.prng})}else r=Hi(e)}else r=Hi()}return a===void 0?i=d:i=h,t=r.PRNG,yt(i,"NAME","f"),e&&e.prng?(yt(i,"seed",null),yt(i,"seedLength",null),XW(i,"state",$W(null),AWr),yt(i,"stateLength",null),yt(i,"byteLength",null),yt(i,"toJSON",$W(null))):(ms(i,"seed",o),ms(i,"seedLength",f),XW(i,"state",l,p),ms(i,"stateLength",v),ms(i,"byteLength",c),yt(i,"toJSON",g)),yt(i,"PRNG",t),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=SWr(t.state),a===void 0?m.params=[]:m.params=[a,u],m}function h(){return KW(r,a,u)}function d(m,q){return QW(m)||QW(q)||m<=0||q<=0?NaN:KW(r,m,q)}}rx.exports=_Wr});var tx=s((she,ex)=>{"use strict";var IWr=iv(),LWr=IWr();ex.exports=LWr});var ax=s((uhe,nx)=>{"use strict";var RWr=b(),ix=tx(),PWr=iv();RWr(ix,"factory",PWr);nx.exports=ix});var ox=s((ohe,ux)=>{"use strict";var sx=D().isPrimitive,FWr=j().isPrimitive,nv=vr(),av=y();function MWr(r,e,t){return!sx(r)||nv(r)?new TypeError(av("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!sx(e)||nv(e)?new TypeError(av("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!FWr(t)||nv(t)?new TypeError(av("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}ux.exports=MWr});var fx=s((vhe,vx)=>{"use strict";var BWr=W(),kWr=P();function jWr(r,e,t,i){return i+t*BWr(-kWr(r()),-1/e)}vx.exports=jWr});var uv=s((fhe,hx)=>{"use strict";var _e=b(),hs=R(),cx=M(),lx=L(),px=_(),gx=A(),mx=T(),CWr=C(),qs=z().factory,sv=E(),VWr=B(),ys=y(),UWr=ox(),dx=fx();function GWr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=qs();else if(arguments.length===1){if(e=arguments[0],!lx(e))throw new TypeError(ys("invalid argument. Options argument must be an object. Value: `%s`.",e));if(gx(e,"prng")){if(!px(e.prng))throw new TypeError(ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=qs(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=UWr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!lx(e))throw new TypeError(ys("invalid argument. Options argument must be an object. Value: `%s`.",e));if(gx(e,"prng")){if(!px(e.prng))throw new TypeError(ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=qs(e)}else t=qs()}return r===void 0?i=d:i=h,_e(i,"NAME","frechet"),e&&e.prng?(_e(i,"seed",null),_e(i,"seedLength",null),cx(i,"state",mx(null),CWr),_e(i,"stateLength",null),_e(i,"byteLength",null),_e(i,"toJSON",mx(null)),_e(i,"PRNG",t)):(hs(i,"seed",o),hs(i,"seedLength",f),cx(i,"state",l,p),hs(i,"stateLength",v),hs(i,"byteLength",c),_e(i,"toJSON",g),_e(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=VWr(t.state),r===void 0?m.params=[]:m.params=[r,a,u],m}function h(){return dx(t,r,a,u)}function d(m,q,N){return sv(m)||sv(q)||sv(N)||m<=0||q<=0?NaN:dx(t,m,q,N)}}hx.exports=GWr});var yx=s((che,qx)=>{"use strict";var HWr=uv(),WWr=HWr();qx.exports=WWr});var Ex=s((lhe,wx)=>{"use strict";var xWr=b(),bx=yx(),DWr=uv();xWr(bx,"factory",DWr);wx.exports=bx});var Ax=s((phe,Ox)=>{"use strict";var zWr=X(),Nx=P();function XWr(r,e){var t=r();return t===0&&(t=r()),zWr(Nx(t)/Nx(1-e))}Ox.exports=XWr});var ov=s((ghe,Px)=>{"use strict";var Ie=b(),bs=R(),Sx=M(),Tx=L(),JWr=ln().isPrimitive,_x=_(),Ix=A(),Lx=T(),YWr=C(),ws=z().factory,ZWr=E(),$Wr=B(),Es=y(),Rx=Ax();function QWr(){var r,e,t,i;if(arguments.length===0)e=ws();else if(arguments.length===1&&Tx(arguments[0]))if(r=arguments[0],Ix(r,"prng")){if(!_x(r.prng))throw new TypeError(Es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ws(r);else{if(i=arguments[0],!JWr(i))throw new TypeError(Es("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!Tx(r))throw new TypeError(Es("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Ix(r,"prng")){if(!_x(r.prng))throw new TypeError(Es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ws(r)}else e=ws()}return i===void 0?t=p:t=l,Ie(t,"NAME","geometric"),r&&r.prng?(Ie(t,"seed",null),Ie(t,"seedLength",null),Sx(t,"state",Lx(null),YWr),Ie(t,"stateLength",null),Ie(t,"byteLength",null),Ie(t,"toJSON",Lx(null)),Ie(t,"PRNG",e)):(bs(t,"seed",n),bs(t,"seedLength",a),Sx(t,"state",f,v),bs(t,"stateLength",u),bs(t,"byteLength",o),Ie(t,"toJSON",c),Ie(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=$Wr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return Rx(e,i)}function p(g){return ZWr(g)||g<0||g>1?NaN:Rx(e,g)}}Px.exports=QWr});var Mx=s((mhe,Fx)=>{"use strict";var KWr=ov(),rxr=KWr();Fx.exports=rxr});var jx=s((dhe,kx)=>{"use strict";var exr=b(),Bx=Mx(),txr=ov();exr(Bx,"factory",txr);kx.exports=Bx});var Ux=s((hhe,Vx)=>{"use strict";var ixr=j().isPrimitive,nxr=D().isPrimitive,Cx=y(),axr=vr();function sxr(r,e){return!ixr(r)||axr(r)?new TypeError(Cx("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):nxr(e)?null:new TypeError(Cx("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Vx.exports=sxr});var Wx=s((qhe,Hx)=>{"use strict";var Gx=P();function uxr(r,e,t){return e-t*Gx(-Gx(r()))}Hx.exports=uxr});var vv=s((yhe,$x)=>{"use strict";var Le=b(),Ns=R(),xx=M(),Dx=L(),zx=_(),Xx=A(),Jx=T(),oxr=C(),Os=z().factory,Yx=E(),vxr=B(),As=y(),fxr=Ux(),Zx=Wx();function cxr(){var r,e,t,i,n,a;if(arguments.length===0)t=Os();else if(arguments.length===1){if(e=arguments[0],!Dx(e))throw new TypeError(As("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Xx(e,"prng")){if(!zx(e.prng))throw new TypeError(As("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Os(e)}else{if(a=arguments[0],r=arguments[1],n=fxr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!Dx(e))throw new TypeError(As("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Xx(e,"prng")){if(!zx(e.prng))throw new TypeError(As("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Os(e)}else t=Os()}return a===void 0?i=h:i=g,Le(i,"NAME","gumbel"),e&&e.prng?(Le(i,"seed",null),Le(i,"seedLength",null),xx(i,"state",Jx(null),oxr),Le(i,"stateLength",null),Le(i,"byteLength",null),Le(i,"toJSON",Jx(null)),Le(i,"PRNG",t)):(Ns(i,"seed",u),Ns(i,"seedLength",o),xx(i,"state",c,l),Ns(i,"stateLength",f),Ns(i,"byteLength",v),Le(i,"toJSON",p),Le(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=vxr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return Zx(t,a,r)}function h(d,m){return Yx(d)||Yx(m)||m<=0?NaN:Zx(t,d,m)}}$x.exports=cxr});var Kx=s((bhe,Qx)=>{"use strict";var lxr=vv(),pxr=lxr();Qx.exports=pxr});var tD=s((whe,eD)=>{"use strict";var gxr=b(),rD=Kx(),mxr=vv();gxr(rD,"factory",mxr);eD.exports=rD});var nD=s((Ehe,iD)=>{"use strict";var fv=kr().isPrimitive,$n=y();function dxr(r,e,t){return fv(r)?fv(e)?fv(t)?t>r?new RangeError($n("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError($n("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError($n("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError($n("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError($n("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}iD.exports=dxr});var aD=s((Nhe,hxr)=>{hxr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var uD=s((Ohe,sD)=>{"use strict";var qxr=E(),yxr=Lr(),bxr=Li(),wxr=I(),Exr=aD(),Nxr=170;function Oxr(r){return qxr(r)?NaN:yxr(r)?r<0?NaN:r<=Nxr?Exr[r]:wxr:bxr(r+1)}sD.exports=Oxr});var vD=s((Ahe,oD)=>{"use strict";var Axr=uD();oD.exports=Axr});var cD=s((She,fD)=>{"use strict";var bt=vD();function Sxr(r,e,t,i){var n,a,u;for(i<t?(n=bt(t)*bt(e+t-i)/(bt(e+t)*bt(t-i)),u=0):(n=bt(e)*bt(i)/(bt(i-t)*bt(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}fD.exports=Sxr});var pD=s((The,lD)=>{"use strict";var Ss=cD();function Txr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=Ss(r,n,a,u),t-o):(a=t,n=e-t,o=Ss(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=Ss(r,n,a,u),o):(n=e-t,a=t,o=Ss(r,n,a,u),i-o))}lD.exports=Txr});var lv=s((_he,wD)=>{"use strict";var Re=b(),Ts=R(),gD=M(),mD=L(),dD=_(),hD=A(),qD=T(),_xr=C(),_s=z().factory,cv=h1(),yD=I(),Ixr=B(),Is=y(),Lxr=nD(),bD=pD();function Rxr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=_s();else if(arguments.length===1){if(r=arguments[0],!mD(r))throw new TypeError(Is("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hD(r,"prng")){if(!dD(r.prng))throw new TypeError(Is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=_s(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=Lxr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!mD(r))throw new TypeError(Is("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hD(r,"prng")){if(!dD(r.prng))throw new TypeError(Is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=_s(r)}else e=_s()}return n===void 0?t=d:t=h,Re(t,"NAME","hypergeometric"),r&&r.prng?(Re(t,"seed",null),Re(t,"seedLength",null),gD(t,"state",qD(null),_xr),Re(t,"stateLength",null),Re(t,"byteLength",null),Re(t,"toJSON",qD(null)),Re(t,"PRNG",e)):(Ts(t,"seed",o),Ts(t,"seedLength",f),gD(t,"state",l,p),Ts(t,"stateLength",v),Ts(t,"byteLength",c),Re(t,"toJSON",g),Re(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Ixr(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return bD(e,n,a,u)}function d(m,q,N){return m===yD||q===yD||!cv(m)||!cv(q)||!cv(N)||N>m?NaN:bD(e,m,q,N)}}wD.exports=Rxr});var ND=s((Ihe,ED)=>{"use strict";var Pxr=lv(),Fxr=Pxr();ED.exports=Fxr});var SD=s((Lhe,AD)=>{"use strict";var Mxr=b(),OD=ND(),Bxr=lv();Mxr(OD,"factory",Bxr);AD.exports=OD});var LD=s((Rhe,ID)=>{"use strict";var TD=D().isPrimitive,_D=y();function kxr(r,e){return TD(r)?TD(e)?null:new TypeError(_D("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(_D("invalid argument. First argument must be a positive number. Value: `%s`.",r))}ID.exports=kxr});var pv=s((Phe,jD)=>{"use strict";var wt=b(),Ls=R(),RD=M(),PD=L(),FD=_(),MD=A(),BD=T(),jxr=C(),Wi=ki().factory,kD=E(),Cxr=B(),Rs=y(),Vxr=LD();function Uxr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Wi();else if(arguments.length===1){if(i=arguments[0],!PD(i))throw new TypeError(Rs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(MD(i,"prng")){if(!FD(i.prng))throw new TypeError(Rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Wi({prng:i.prng})}else r=Wi(i)}else{if(e=arguments[0],t=arguments[1],u=Vxr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!PD(i))throw new TypeError(Rs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(MD(i,"prng")){if(!FD(i.prng))throw new TypeError(Rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Wi(e,t,{prng:i.prng})}else r=Wi(e,t,i)}else r=Wi(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,wt(a,"NAME","invgamma"),i&&i.prng?(wt(a,"seed",null),wt(a,"seedLength",null),RD(a,"state",BD(null),jxr),wt(a,"stateLength",null),wt(a,"byteLength",null),wt(a,"toJSON",BD(null))):(Ls(a,"seed",o),Ls(a,"seedLength",f),RD(a,"state",l,p),Ls(a,"stateLength",v),Ls(a,"byteLength",c),wt(a,"toJSON",g)),wt(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=Cxr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return 1/r()}function d(m,q){return kD(m)||kD(q)||m<=0||q<=0?NaN:1/r(m,q)}}jD.exports=Uxr});var VD=s((Fhe,CD)=>{"use strict";var Gxr=pv(),Hxr=Gxr();CD.exports=Hxr});var HD=s((Mhe,GD)=>{"use strict";var Wxr=b(),UD=VD(),xxr=pv();Wxr(UD,"factory",xxr);GD.exports=UD});var zD=s((Bhe,DD)=>{"use strict";var WD=D().isPrimitive,xD=y();function Dxr(r,e){return WD(r)?WD(e)?null:new TypeError(xD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(xD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}DD.exports=Dxr});var YD=s((khe,JD)=>{"use strict";var XD=W();function zxr(r,e,t){var i=r();return XD(1-XD(1-i,1/t),1/e)}JD.exports=zxr});var gv=s((jhe,iz)=>{"use strict";var Pe=b(),Ps=R(),ZD=M(),$D=L(),QD=_(),KD=A(),rz=T(),Xxr=C(),Fs=z().factory,ez=E(),Jxr=B(),Ms=y(),Yxr=zD(),tz=YD();function Zxr(){var r,e,t,i,n,a;if(arguments.length===0)e=Fs();else if(arguments.length===1){if(r=arguments[0],!$D(r))throw new TypeError(Ms("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KD(r,"prng")){if(!QD(r.prng))throw new TypeError(Ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Fs(r)}else{if(n=arguments[0],a=arguments[1],i=Yxr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!$D(r))throw new TypeError(Ms("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KD(r,"prng")){if(!QD(r.prng))throw new TypeError(Ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Fs(r)}else e=Fs()}return n===void 0?t=h:t=g,Pe(t,"NAME","kumaraswamy"),r&&r.prng?(Pe(t,"seed",null),Pe(t,"seedLength",null),ZD(t,"state",rz(null),Xxr),Pe(t,"stateLength",null),Pe(t,"byteLength",null),Pe(t,"toJSON",rz(null)),Pe(t,"PRNG",e)):(Ps(t,"seed",u),Ps(t,"seedLength",o),ZD(t,"state",c,l),Ps(t,"stateLength",f),Ps(t,"byteLength",v),Pe(t,"toJSON",p),Pe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Jxr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return tz(e,n,a)}function h(d,m){return ez(d)||ez(m)||d<=0||m<=0?NaN:tz(e,d,m)}}iz.exports=Zxr});var az=s((Che,nz)=>{"use strict";var $xr=gv(),Qxr=$xr();nz.exports=Qxr});var oz=s((Vhe,uz)=>{"use strict";var Kxr=b(),sz=az(),rDr=gv();Kxr(sz,"factory",rDr);uz.exports=sz});var cz=s((Uhe,fz)=>{"use strict";var eDr=j().isPrimitive,tDr=D().isPrimitive,vz=y(),iDr=vr();function nDr(r,e){return!eDr(r)||iDr(r)?new TypeError(vz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):tDr(e)?null:new TypeError(vz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}fz.exports=nDr});var pz=s((Ghe,lz)=>{"use strict";var aDr=x0(),sDr=J(),uDr=P();function oDr(r,e,t){var i=r()-.5;return e-t*aDr(i)*uDr(1-2*sDr(i))}lz.exports=oDr});var mv=s((Hhe,wz)=>{"use strict";var Fe=b(),Bs=R(),gz=M(),mz=L(),dz=_(),hz=A(),qz=T(),vDr=C(),ks=z().factory,yz=E(),fDr=B(),js=y(),cDr=cz(),bz=pz();function lDr(){var r,e,t,i,n,a;if(arguments.length===0)e=ks();else if(arguments.length===1){if(r=arguments[0],!mz(r))throw new TypeError(js("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hz(r,"prng")){if(!dz(r.prng))throw new TypeError(js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ks(r)}else{if(n=arguments[0],a=arguments[1],i=cDr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!mz(r))throw new TypeError(js("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hz(r,"prng")){if(!dz(r.prng))throw new TypeError(js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ks(r)}else e=ks()}return n===void 0?t=h:t=g,Fe(t,"NAME","laplace"),r&&r.prng?(Fe(t,"seed",null),Fe(t,"seedLength",null),gz(t,"state",qz(null),vDr),Fe(t,"stateLength",null),Fe(t,"byteLength",null),Fe(t,"toJSON",qz(null)),Fe(t,"PRNG",e)):(Bs(t,"seed",u),Bs(t,"seedLength",o),gz(t,"state",c,l),Bs(t,"stateLength",f),Bs(t,"byteLength",v),Fe(t,"toJSON",p),Fe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=fDr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return bz(e,n,a)}function h(d,m){return yz(d)||yz(m)||m<=0?NaN:bz(e,d,m)}}wz.exports=lDr});var Nz=s((Whe,Ez)=>{"use strict";var pDr=mv(),gDr=pDr();Ez.exports=gDr});var Sz=s((xhe,Az)=>{"use strict";var mDr=b(),Oz=Nz(),dDr=mv();mDr(Oz,"factory",dDr);Az.exports=Oz});var Iz=s((Dhe,_z)=>{"use strict";var hDr=j().isPrimitive,qDr=D().isPrimitive,Tz=y(),yDr=vr();function bDr(r,e){return!hDr(r)||yDr(r)?new TypeError(Tz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):qDr(e)?null:new TypeError(Tz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}_z.exports=bDr});var Rz=s((zhe,Lz)=>{"use strict";function wDr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}Lz.exports=wDr});var Fz=s((Xhe,Pz)=>{"use strict";function EDr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}Pz.exports=EDr});var Bz=s((Jhe,Mz)=>{"use strict";function NDr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}Mz.exports=NDr});var jz=s((Yhe,kz)=>{"use strict";function ODr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}kz.exports=ODr});var Vz=s((Zhe,Cz)=>{"use strict";function ADr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}Cz.exports=ADr});var Wz=s(($he,Hz)=>{"use strict";var SDr=E(),Uz=U(),Gz=P(),TDr=I(),_Dr=V(),IDr=Rz(),LDr=Fz(),RDr=Bz(),PDr=jz(),FDr=Vz(),MDr=.08913147449493408,BDr=2.249481201171875,kDr=.807220458984375,jDr=.9399557113647461,CDr=.9836282730102539;function VDr(r){var e,t,i,n,a,u;return SDr(r)?NaN:r===1?TDr:r===-1?_Dr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=IDr(t),e*(a*MDr+a*u)):n>=.25?(a=Uz(-2*Gz(n)),n-=.25,u=LDr(n),e*(a/(BDr+u))):(n=Uz(-Gz(n)),n<3?(i=n-1.125,u=RDr(i),e*(kDr*n+u*n)):n<6?(i=n-3,u=PDr(i),e*(jDr*n+u*n)):(i=n-6,u=FDr(i),e*(CDr*n+u*n))))}Hz.exports=VDr});var dv=s((Qhe,xz)=>{"use strict";var UDr=Wz();xz.exports=UDr});var zz=s((Khe,Dz)=>{"use strict";var GDr=dv(),hv=E(),HDr=U();function WDr(r,e,t){var i,n;return hv(e)||hv(t)||hv(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*HDr(2),i+n*GDr(2*r-1))}Dz.exports=WDr});var Jz=s((rqe,Xz)=>{"use strict";var xDr=T(),DDr=Y3().factory,zDr=dv(),qv=E(),XDr=U();function JDr(r,e){var t,i;if(qv(r)||qv(e)||e<0)return xDr(NaN);return e===0&&DDr(r),t=r,i=e*XDr(2),n;function n(a){return qv(a)||a<0||a>1?NaN:t+i*zDr(2*a-1)}}Xz.exports=JDr});var yv=s((eqe,Zz)=>{"use strict";var YDr=b(),Yz=zz(),ZDr=Jz();YDr(Yz,"factory",ZDr);Zz.exports=Yz});var Qz=s((tqe,$z)=>{"use strict";var $Dr=yv();function QDr(r,e,t){var i=$Dr(1-r()/2,0,1);return e+t/(i*i)}$z.exports=QDr});var bv=s((iqe,sX)=>{"use strict";var Me=b(),Cs=R(),Kz=M(),rX=L(),eX=_(),tX=A(),iX=T(),KDr=C(),Vs=z().factory,nX=E(),rzr=B(),Us=y(),ezr=Iz(),aX=Qz();function tzr(){var r,e,t,i,n,a;if(arguments.length===0)e=Vs();else if(arguments.length===1){if(r=arguments[0],!rX(r))throw new TypeError(Us("invalid argument. Options argument must be an object. Value: `%s`.",r));if(tX(r,"prng")){if(!eX(r.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Vs(r)}else{if(n=arguments[0],a=arguments[1],i=ezr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!rX(r))throw new TypeError(Us("invalid argument. Options argument must be an object. Value: `%s`.",r));if(tX(r,"prng")){if(!eX(r.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Vs(r)}else e=Vs()}return n===void 0?t=h:t=g,Me(t,"NAME","levy"),r&&r.prng?(Me(t,"seed",null),Me(t,"seedLength",null),Kz(t,"state",iX(null),KDr),Me(t,"stateLength",null),Me(t,"byteLength",null),Me(t,"toJSON",iX(null)),Me(t,"PRNG",e)):(Cs(t,"seed",u),Cs(t,"seedLength",o),Kz(t,"state",c,l),Cs(t,"stateLength",f),Cs(t,"byteLength",v),Me(t,"toJSON",p),Me(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=rzr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return aX(e,n,a)}function h(d,m){return nX(d)||nX(m)||m<=0?NaN:aX(e,d,m)}}sX.exports=tzr});var oX=s((nqe,uX)=>{"use strict";var izr=bv(),nzr=izr();uX.exports=nzr});var cX=s((aqe,fX)=>{"use strict";var azr=b(),vX=oX(),szr=bv();azr(vX,"factory",szr);fX.exports=vX});var gX=s((sqe,pX)=>{"use strict";var uzr=j().isPrimitive,ozr=D().isPrimitive,vzr=vr(),lX=y();function fzr(r,e){return!uzr(r)||vzr(r)?new TypeError(lX("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):ozr(e)?null:new TypeError(lX("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}pX.exports=fzr});var dX=s((uqe,mX)=>{"use strict";var czr=P();function lzr(r,e,t){var i=r();return e+t*czr(i/(1-i))}mX.exports=lzr});var wv=s((oqe,OX)=>{"use strict";var Be=b(),Gs=R(),hX=M(),qX=L(),yX=_(),bX=A(),wX=T(),pzr=C(),Hs=z().factory,EX=E(),gzr=B(),Ws=y(),mzr=gX(),NX=dX();function dzr(){var r,e,t,i,n,a;if(arguments.length===0)e=Hs();else if(arguments.length===1){if(r=arguments[0],!qX(r))throw new TypeError(Ws("invalid argument. Options argument must be an object. Value: `%s`.",r));if(bX(r,"prng")){if(!yX(r.prng))throw new TypeError(Ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Hs(r)}else{if(n=arguments[0],a=arguments[1],i=mzr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!qX(r))throw new TypeError(Ws("invalid argument. Options argument must be an object. Value: `%s`.",r));if(bX(r,"prng")){if(!yX(r.prng))throw new TypeError(Ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Hs(r)}else e=Hs()}return n===void 0?t=h:t=g,Be(t,"NAME","logistic"),r&&r.prng?(Be(t,"seed",null),Be(t,"seedLength",null),hX(t,"state",wX(null),pzr),Be(t,"stateLength",null),Be(t,"byteLength",null),Be(t,"toJSON",wX(null)),Be(t,"PRNG",e)):(Gs(t,"seed",u),Gs(t,"seedLength",o),hX(t,"state",c,l),Gs(t,"stateLength",f),Gs(t,"byteLength",v),Be(t,"toJSON",p),Be(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=gzr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return NX(e,n,a)}function h(d,m){return EX(d)||EX(m)||m<=0?NaN:NX(e,d,m)}}OX.exports=dzr});var SX=s((vqe,AX)=>{"use strict";var hzr=wv(),qzr=hzr();AX.exports=qzr});var IX=s((fqe,_X)=>{"use strict";var yzr=b(),TX=SX(),bzr=wv();yzr(TX,"factory",bzr);_X.exports=TX});var PX=s((cqe,RX)=>{"use strict";var wzr=j().isPrimitive,Ezr=D().isPrimitive,LX=y(),Nzr=vr();function Ozr(r,e){return!wzr(r)||Nzr(r)?new TypeError(LX("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Ezr(e)?null:new TypeError(LX("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}RX.exports=Ozr});var MX=s((lqe,FX)=>{"use strict";var Azr=sr();function Szr(r,e,t){return Azr(e+t*r())}FX.exports=Szr});var Ev=s((pqe,HX)=>{"use strict";var Et=b(),xs=R(),BX=M(),kX=L(),jX=_(),CX=A(),VX=T(),Tzr=C(),xi=pt().factory,UX=E(),_zr=B(),Ds=y(),Izr=PX(),GX=MX();function Lzr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=xi();else if(arguments.length===1){if(t=arguments[0],!kX(t))throw new TypeError(Ds("invalid argument. Options argument must be an object. Value: `%s`.",t));if(CX(t,"prng")){if(!jX(t.prng))throw new TypeError(Ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=xi({prng:t.prng})}else e=xi(t)}else{if(u=arguments[0],r=arguments[1],a=Izr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!kX(t))throw new TypeError(Ds("invalid argument. Options argument must be an object. Value: `%s`.",t));if(CX(t,"prng")){if(!jX(t.prng))throw new TypeError(Ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=xi({prng:t.prng})}else e=xi(t)}else e=xi()}return u===void 0?n=d:n=h,i=e.PRNG,Et(n,"NAME","lognormal"),t&&t.prng?(Et(n,"seed",null),Et(n,"seedLength",null),BX(n,"state",VX(null),Tzr),Et(n,"stateLength",null),Et(n,"byteLength",null),Et(n,"toJSON",VX(null))):(xs(n,"seed",o),xs(n,"seedLength",f),BX(n,"state",l,p),xs(n,"stateLength",v),xs(n,"byteLength",c),Et(n,"toJSON",g)),Et(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=_zr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return GX(e,u,r)}function d(m,q){return UX(m)||UX(q)||q<=0?NaN:GX(e,m,q)}}HX.exports=Lzr});var xX=s((gqe,WX)=>{"use strict";var Rzr=Ev(),Pzr=Rzr();WX.exports=Pzr});var XX=s((mqe,zX)=>{"use strict";var Fzr=b(),DX=xX(),Mzr=Ev();Fzr(DX,"factory",Mzr);zX.exports=DX});var Nv=s((dqe,JX)=>{"use strict";var Bzr=ti(),kzr=X(),jzr=Bzr-1;function Czr(){var r=kzr(1+jzr*Math.random());return r|0}JX.exports=Czr});var Sv=s((hqe,KX)=>{"use strict";var ke=b(),Nt=R(),YX=M(),Ov=A(),Vzr=L(),Uzr=gr().isPrimitive,Gzr=Wr(),Hzr=re().isPrimitive,ZX=ca(),Xr=y(),zs=ti(),Er=Xe(),Di=ot(),Wzr=B(),$X=Nv(),Av=zs-1|0,xzr=zs-1|0,Dzr=16807,Xs=1,Js=2,Ot=2,Nr=4,Qn=5;function QX(r,e){var t;return e?t="option":t="argument",r.length<Qn+1?new RangeError(Xr("invalid %s. State array has insufficient length.",t)):r[0]!==Xs?new RangeError(Xr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Xs,r[0])):r[1]!==Js?new RangeError(Xr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Js,r[1])):r[Ot]!==1?new RangeError(Xr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[Ot])):r[Nr]!==r.length-Qn?new RangeError(Xr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Qn,r[Nr])):null}function zzr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!Vzr(r))throw new TypeError(Xr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Ov(r,"copy")&&(i.copy=r.copy,!Uzr(r.copy)))throw new TypeError(Xr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Ov(r,"state")){if(t=r.state,i.state=!0,!ZX(t))throw new TypeError(Xr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=QX(t,!0),u)throw u;i.copy===!1?e=t:(e=new Er(t.length),Di(t.length,t,1,e,1)),t=new Er(e.buffer,e.byteOffset+(Ot+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,t[Nr])}if(n===void 0)if(Ov(r,"seed"))if(n=r.seed,i.seed=!0,Hzr(n)){if(n>xzr)throw new RangeError(Xr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(Gzr(n)&&n.length>0)a=n.length,e=new Er(Qn+a),e[0]=Xs,e[1]=Js,e[Ot]=1,e[Nr]=a,Di.ndarray(a,n,1,0,e,1,Nr+1),t=new Er(e.buffer,e.byteOffset+(Ot+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Xr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=$X()|0}else n=$X()|0;return t===void 0&&(e=new Er(Qn+1),e[0]=Xs,e[1]=Js,e[Ot]=1,e[Nr]=1,e[Nr+1]=n,t=new Er(e.buffer,e.byteOffset+(Ot+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),ke(h,"NAME","minstd"),Nt(h,"seed",o),Nt(h,"seedLength",f),YX(h,"state",l,p),Nt(h,"stateLength",v),Nt(h,"byteLength",c),ke(h,"toJSON",g),ke(h,"MIN",1),ke(h,"MAX",zs-1),ke(h,"normalized",d),ke(d,"NAME",h.NAME),Nt(d,"seed",o),Nt(d,"seedLength",f),YX(d,"state",l,p),Nt(d,"stateLength",v),Nt(d,"byteLength",c),ke(d,"toJSON",g),ke(d,"MIN",(h.MIN-1)/Av),ke(d,"MAX",(h.MAX-1)/Av),h;function o(){var m=e[Nr];return Di(m,n,1,new Er(m),1)}function f(){return e[Nr]}function v(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return Di(m,e,1,new Er(m),1)}function p(m){var q;if(!ZX(m))throw new TypeError(Xr("invalid argument. Must provide an Int32Array. Value: `%s`.",m));if(q=QX(m,!1),q)throw q;i.copy===!1?i.state&&m.length===e.length?Di(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new Er(m.length)),Di(m.length,m,1,e,1)),t=new Er(e.buffer,e.byteOffset+(Ot+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,e[Nr])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=Wzr(e),m.params=[],m}function h(){var m=t[0]|0;return m=Dzr*m%zs|0,t[0]=m,m|0}function d(){return(h()-1)/Av}}KX.exports=zzr});var eJ=s((qqe,rJ)=>{"use strict";var Xzr=Sv(),Jzr=Nv(),Yzr=Xzr({seed:Jzr()});rJ.exports=Yzr});var nJ=s((yqe,iJ)=>{"use strict";var Zzr=b(),tJ=eJ(),$zr=Sv();Zzr(tJ,"factory",$zr);iJ.exports=tJ});var sJ=s((bqe,aJ)=>{"use strict";var Qzr=E(),Kzr=8;function rXr(r,e,t){var i,n;for(n=0;n<Kzr;n++)if(i=r(),Qzr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}aJ.exports=rXr});var Tv=s((wqe,uJ)=>{"use strict";var eXr=ti(),tXr=X(),iXr=eXr-1;function nXr(){var r=tXr(1+iXr*Math.random());return r|0}uJ.exports=nXr});var Lv=s((Eqe,pJ)=>{"use strict";var je=b(),At=R(),oJ=M(),_v=A(),aXr=L(),sXr=gr().isPrimitive,uXr=Wr(),oXr=re().isPrimitive,vJ=ca(),zi=ot(),vXr=X(),Or=Xe(),Kn=ti(),fXr=B(),Hr=y(),fJ=sJ(),cJ=Tv(),Iv=Kn-1|0,cXr=Kn-1|0,lXr=16807,Sr=32,$s=1,Qs=3,St=2,Xi=Sr+3,Ar=Sr+6,ra=Sr+7,Ys=Xi+1,Zs=Xi+2;function lJ(r,e){var t;return e?t="option":t="argument",r.length<ra+1?new RangeError(Hr("invalid %s. State array has insufficient length.",t)):r[0]!==$s?new RangeError(Hr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,$s,r[0])):r[1]!==Qs?new RangeError(Hr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Qs,r[1])):r[St]!==Sr?new RangeError(Hr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Sr,r[St])):r[Xi]!==2?new RangeError(Hr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[Xi])):r[Ar]!==r.length-ra?new RangeError(Hr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-ra,r[Ar])):null}function pXr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!aXr(r))throw new TypeError(Hr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(_v(r,"copy")&&(i.copy=r.copy,!sXr(r.copy)))throw new TypeError(Hr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(_v(r,"state")){if(t=r.state,i.state=!0,!vJ(t))throw new TypeError(Hr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=lJ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Or(t.length),zi(t.length,t,1,e,1)),t=new Or(e.buffer,e.byteOffset+(St+1)*e.BYTES_PER_ELEMENT,Sr),n=new Or(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,t[Ar])}if(n===void 0)if(_v(r,"seed"))if(n=r.seed,i.seed=!0,oXr(n)){if(n>cXr)throw new RangeError(Hr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(uXr(n)&&n.length>0)a=n.length,e=new Or(ra+a),e[0]=$s,e[1]=Qs,e[St]=Sr,e[Xi]=2,e[Zs]=n[0],e[Ar]=a,zi.ndarray(a,n,1,0,e,1,Ar+1),t=new Or(e.buffer,e.byteOffset+(St+1)*e.BYTES_PER_ELEMENT,Sr),n=new Or(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,a),t=fJ(h,t,Sr),e[Ys]=t[0];else throw new TypeError(Hr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=cJ()|0}else n=cJ()|0;return t===void 0&&(e=new Or(ra+1),e[0]=$s,e[1]=Qs,e[St]=Sr,e[Xi]=2,e[Zs]=n,e[Ar]=1,e[Ar+1]=n,t=new Or(e.buffer,e.byteOffset+(St+1)*e.BYTES_PER_ELEMENT,Sr),n=new Or(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,1),t=fJ(h,t,Sr),e[Ys]=t[0]),je(d,"NAME","minstd-shuffle"),At(d,"seed",o),At(d,"seedLength",f),oJ(d,"state",l,p),At(d,"stateLength",v),At(d,"byteLength",c),je(d,"toJSON",g),je(d,"MIN",1),je(d,"MAX",Kn-1),je(d,"normalized",m),je(m,"NAME",d.NAME),At(m,"seed",o),At(m,"seedLength",f),oJ(m,"state",l,p),At(m,"stateLength",v),At(m,"byteLength",c),je(m,"toJSON",g),je(m,"MIN",(d.MIN-1)/Iv),je(m,"MAX",(d.MAX-1)/Iv),d;function o(){var q=e[Ar];return zi(q,n,1,new Or(q),1)}function f(){return e[Ar]}function v(){return e.length}function c(){return e.byteLength}function l(){var q=e.length;return zi(q,e,1,new Or(q),1)}function p(q){var N;if(!vJ(q))throw new TypeError(Hr("invalid argument. Must provide an Int32Array. Value: `%s`.",q));if(N=lJ(q,!1),N)throw N;i.copy===!1?i.state&&q.length===e.length?zi(q.length,q,1,e,1):(e=q,i.state=!0):(q.length!==e.length&&(e=new Or(q.length)),zi(q.length,q,1,e,1)),t=new Or(e.buffer,e.byteOffset+(St+1)*e.BYTES_PER_ELEMENT,Sr),n=new Or(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,e[Ar])}function g(){var q={};return q.type="PRNG",q.name=d.NAME,q.state=fXr(e),q.params=[],q}function h(){var q=e[Zs]|0;return q=lXr*q%Kn|0,e[Zs]=q,q|0}function d(){var q,N;return q=e[Ys],N=vXr(Sr*(q/Kn)),q=t[N],e[Ys]=q,t[N]=h(),q}function m(){return(d()-1)/Iv}}pJ.exports=pXr});var mJ=s((Nqe,gJ)=>{"use strict";var gXr=Lv(),mXr=Tv(),dXr=gXr({seed:mXr()});gJ.exports=dXr});var qJ=s((Oqe,hJ)=>{"use strict";var hXr=b(),dJ=mJ(),qXr=Lv();hXr(dJ,"factory",qXr);hJ.exports=dJ});var bJ=s((Aqe,yJ)=>{"use strict";var yXr=sr();function bXr(r,e){for(var t=r(),i=1;t>yXr(-e);)i+=1,t*=r();return i-1}yJ.exports=bXr});var EJ=s((Sqe,wJ)=>{"use strict";var wXr=X();function EXr(r){return wXr(r)===r&&r<0}wJ.exports=EXr});var OJ=s((Tqe,NJ)=>{"use strict";var NXr=EJ();NJ.exports=NXr});var SJ=s((_qe,AJ)=>{"use strict";var OXr=OJ(),AXr=Cn();function SXr(r){return OXr(r)?NaN:AXr(r+1)}AJ.exports=SXr});var _J=s((Iqe,TJ)=>{"use strict";var TXr=SJ();TJ.exports=TXr});var PJ=s((Lqe,RJ)=>{"use strict";var _Xr=_J(),IJ=X(),IXr=x0(),LXr=U(),LJ=J(),Ks=P(),RXr=H1(),PXr=1/12,FXr=1/360;function MXr(r,e){var t,i,n,a,u,o,f,v,c,l;for(t=LXr(e),f=2.53*t+.931,o=.02483*f-.059,i=1.1328/(f-3.4)+1.1239,u=-3.6224/(f-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-LJ(c))+f,c+=e+.445,IJ(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=IXr(c)*.5-c,l=u*r()),a=.5-LJ(c),(a>=.013||a>=l)&&(v=IJ((2*o/a+f)*c+e+.445),l*=i/(o/(a*a)+f),c=(v+.5)*Ks(e/v),c+=-e-RXr+v,c-=(PXr-FXr/(v*v))/v,v>=10&&c>=Ks(l*t)||(c=v*Ks(e)-e-_Xr(v),v>=0&&v<=9&&c>=Ks(l))))return v}}RJ.exports=MXr});var MJ=s((Rqe,FJ)=>{"use strict";var BXr=bJ(),kXr=PJ();function jXr(r,e){return e<30?BXr(r,e):kXr(r,e)}FJ.exports=jXr});var Rv=s((Pqe,GJ)=>{"use strict";var Ce=b(),ru=R(),BJ=M(),CXr=D().isPrimitive,kJ=L(),jJ=_(),CJ=A(),VJ=T(),VXr=C(),eu=z().factory,UXr=E(),GXr=B(),tu=y(),UJ=MJ();function HXr(){var r,e,t,i;if(arguments.length===0)t=eu();else if(arguments.length===1&&kJ(arguments[0]))if(e=arguments[0],CJ(e,"prng")){if(!jJ(e.prng))throw new TypeError(tu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=eu(e);else{if(r=arguments[0],!CXr(r))throw new TypeError(tu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!kJ(e))throw new TypeError(tu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(CJ(e,"prng")){if(!jJ(e.prng))throw new TypeError(tu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=eu(e)}else t=eu()}return r===void 0?i=p:i=l,Ce(i,"NAME","poisson"),e&&e.prng?(Ce(i,"seed",null),Ce(i,"seedLength",null),BJ(i,"state",VJ(null),VXr),Ce(i,"stateLength",null),Ce(i,"byteLength",null),Ce(i,"toJSON",VJ(null)),Ce(i,"PRNG",t)):(ru(i,"seed",n),ru(i,"seedLength",a),BJ(i,"state",f,v),ru(i,"stateLength",u),ru(i,"byteLength",o),Ce(i,"toJSON",c),Ce(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=GXr(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return UJ(t,r)}function p(g){return UXr(g)||g<=0?NaN:UJ(t,g)}}GJ.exports=HXr});var WJ=s((Fqe,HJ)=>{"use strict";var WXr=Rv(),xXr=WXr();HJ.exports=xXr});var Pv=s((Mqe,DJ)=>{"use strict";var DXr=b(),xJ=WJ(),zXr=Rv();DXr(xJ,"factory",zXr);DJ.exports=xJ});var XJ=s((Bqe,zJ)=>{"use strict";var XXr=D().isPrimitive,JXr=j().isPrimitive,Fv=y(),YXr=vr();function ZXr(r,e){return XXr(r)?!JXr(e)||YXr(e)?new TypeError(Fv("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Fv("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Fv("invalid argument. First argument must be a positive number. Value: `%s`.",r))}zJ.exports=ZXr});var jv=s((kqe,eY)=>{"use strict";var Tt=b(),iu=R(),JJ=M(),Ji=A(),YJ=L(),Mv=ve(),ZJ=gr().isPrimitive,$J=_(),QJ=T(),$Xr=C(),KJ=E(),Yi=Pv().factory,nu=ki().factory,Bv=ot(),kv=lr(),rY=Xn(),QXr=B(),Ve=y(),KXr=XJ();function rJr(){var r,e,t,i,n,a,u,o,f,v;if(u=!0,arguments.length===0)i={copy:!1},t=Yi(i);else if(arguments.length===1){if(i=arguments[0],!YJ(i))throw new TypeError(Ve("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ji(i,"copy")&&!ZJ(i.copy))throw new TypeError(Ve("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ji(i,"prng")){if(!$J(i.prng))throw new TypeError(Ve("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Yi({prng:i.prng})}else{if(Ji(i,"state")&&!Mv(i.state))throw new TypeError(Ve("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=rY({},i),i.copy===!1?u=!1:i.state&&(i.state=Bv(i.state.length,i.state,1,new kv(i.state.length),1)),i.copy=!1,t=Yi(i)}}else{if(v=arguments[0],f=arguments[1],o=KXr(v,f),o)throw o;if(arguments.length>2){if(i=arguments[2],!YJ(i))throw new TypeError(Ve("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ji(i,"copy")&&!ZJ(i.copy))throw new TypeError(Ve("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ji(i,"prng")){if(!$J(i.prng))throw new TypeError(Ve("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Yi({prng:i.prng})}else{if(Ji(i,"state")&&!Mv(i.state))throw new TypeError(Ve("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=rY({},i),i.copy===!1?u=!1:i.state&&(i.state=Bv(i.state.length,i.state,1,new kv(i.state.length),1)),i.copy=!1,t=Yi(i)}}else i={copy:!1},t=Yi(i)}return i&&i.prng?v===void 0?r=nu({prng:i.prng}):r=nu(v,f/(1-f),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),v===void 0?r=nu({state:e,copy:!1}):r=nu(v,f/(1-f),{state:e,copy:!1})),v===void 0?n=N:n=q,a=t.PRNG,Tt(n,"NAME","negative-binomial"),i&&i.prng?(Tt(n,"seed",null),Tt(n,"seedLength",null),JJ(n,"state",QJ(null),$Xr),Tt(n,"stateLength",null),Tt(n,"byteLength",null),Tt(n,"toJSON",QJ(null))):(iu(n,"seed",c),iu(n,"seedLength",l),JJ(n,"state",h,d),iu(n,"stateLength",p),iu(n,"byteLength",g),Tt(n,"toJSON",m)),Tt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function g(){return a.byteLength}function h(){return a.state}function d(O){if(!Mv(O))throw new TypeError(Ve("invalid argument. Must provide a Uint32Array. Value: `%s`.",O));u&&(O=Bv(O.length,O,1,new kv(O.length),1)),a.state=O}function m(){var O={};return O.type="PRNG",O.name=n.NAME,O.state=QXr(a.state),v===void 0?O.params=[]:O.params=[v,f],O}function q(){return t(r())}function N(O,F){return KJ(O)||KJ(F)||F<=0||F>=1?NaN:t(r(O,F/(1-F)))}}eY.exports=rJr});var iY=s((jqe,tY)=>{"use strict";var eJr=jv(),tJr=eJr();tY.exports=tJr});var sY=s((Cqe,aY)=>{"use strict";var iJr=b(),nY=iY(),nJr=jv();iJr(nY,"factory",nJr);aY.exports=nY});var vY=s((Vqe,oY)=>{"use strict";var aJr=j().isPrimitive,sJr=D().isPrimitive,uY=y(),uJr=vr();function oJr(r,e){return!aJr(r)||uJr(r)?new TypeError(uY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):sJr(e)?null:new TypeError(uY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}oY.exports=oJr});var cY=s((Uqe,fY)=>{"use strict";function vJr(r,e,t){return e+t*r()}fY.exports=vJr});var Cv=s((Gqe,yY)=>{"use strict";var _t=b(),au=R(),lY=M(),pY=L(),gY=_(),mY=A(),dY=T(),fJr=C(),Zi=pt().factory,hY=E(),cJr=B(),su=y(),lJr=vY(),qY=cY();function pJr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Zi();else if(arguments.length===1){if(t=arguments[0],!pY(t))throw new TypeError(su("invalid argument. Options argument must be an object. Value: `%s`.",t));if(mY(t,"prng")){if(!gY(t.prng))throw new TypeError(su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Zi({prng:t.prng})}else e=Zi(t)}else{if(u=arguments[0],r=arguments[1],a=lJr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!pY(t))throw new TypeError(su("invalid argument. Options argument must be an object. Value: `%s`.",t));if(mY(t,"prng")){if(!gY(t.prng))throw new TypeError(su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Zi({prng:t.prng})}else e=Zi(t)}else e=Zi()}return u===void 0?n=d:n=h,i=e.PRNG,_t(n,"NAME","normal"),t&&t.prng?(_t(n,"seed",null),_t(n,"seedLength",null),lY(n,"state",dY(null),fJr),_t(n,"stateLength",null),_t(n,"byteLength",null),_t(n,"toJSON",dY(null))):(au(n,"seed",o),au(n,"seedLength",f),lY(n,"state",l,p),au(n,"stateLength",v),au(n,"byteLength",c),_t(n,"toJSON",g)),_t(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=cJr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return qY(e,u,r)}function d(m,q){return hY(m)||hY(q)||q<=0?NaN:qY(e,m,q)}}yY.exports=pJr});var wY=s((Hqe,bY)=>{"use strict";var gJr=Cv(),mJr=gJr();bY.exports=mJr});var OY=s((Wqe,NY)=>{"use strict";var dJr=b(),EY=wY(),hJr=Cv();dJr(EY,"factory",hJr);NY.exports=EY});var _Y=s((xqe,TY)=>{"use strict";var AY=D().isPrimitive,SY=y();function qJr(r,e){return AY(r)?AY(e)?null:new TypeError(SY("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(SY("invalid argument. First argument must be a positive number. Value: `%s`.",r))}TY.exports=qJr});var LY=s((Dqe,IY)=>{"use strict";var yJr=W();function bJr(r,e,t){return t/yJr(r(),1/e)}IY.exports=bJr});var Vv=s((zqe,CY)=>{"use strict";var Ue=b(),uu=R(),RY=M(),PY=L(),FY=_(),MY=A(),BY=T(),wJr=C(),ou=z().factory,kY=E(),EJr=B(),vu=y(),NJr=_Y(),jY=LY();function OJr(){var r,e,t,i,n,a;if(arguments.length===0)i=ou();else if(arguments.length===1){if(t=arguments[0],!PY(t))throw new TypeError(vu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(MY(t,"prng")){if(!FY(t.prng))throw new TypeError(vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=ou(t)}else{if(r=arguments[0],e=arguments[1],a=NJr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!PY(t))throw new TypeError(vu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(MY(t,"prng")){if(!FY(t.prng))throw new TypeError(vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=ou(t)}else i=ou()}return r===void 0?n=h:n=g,Ue(n,"NAME","pareto-type1"),t&&t.prng?(Ue(n,"seed",null),Ue(n,"seedLength",null),RY(n,"state",BY(null),wJr),Ue(n,"stateLength",null),Ue(n,"byteLength",null),Ue(n,"toJSON",BY(null)),Ue(n,"PRNG",i)):(uu(n,"seed",u),uu(n,"seedLength",o),RY(n,"state",c,l),uu(n,"stateLength",f),uu(n,"byteLength",v),Ue(n,"toJSON",p),Ue(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function f(){return i.stateLength}function v(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=EJr(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function g(){return jY(i,r,e)}function h(d,m){return kY(d)||kY(m)||d<=0||m<=0?NaN:jY(i,d,m)}}CY.exports=OJr});var UY=s((Xqe,VY)=>{"use strict";var AJr=Vv(),SJr=AJr();VY.exports=SJr});var WY=s((Jqe,HY)=>{"use strict";var TJr=b(),GY=UY(),_Jr=Vv();TJr(GY,"factory",_Jr);HY.exports=GY});var DY=s((Yqe,xY)=>{"use strict";var IJr=U(),LJr=P();function RJr(r,e){return e*IJr(-2*LJr(r()))}xY.exports=RJr});var Uv=s((Zqe,QY)=>{"use strict";var Ge=b(),fu=R(),zY=M(),PJr=D().isPrimitive,XY=L(),JY=_(),YY=A(),ZY=T(),FJr=C(),cu=z().factory,MJr=E(),BJr=B(),lu=y(),$Y=DY();function kJr(){var r,e,t,i;if(arguments.length===0)t=cu();else if(arguments.length===1&&XY(arguments[0]))if(e=arguments[0],YY(e,"prng")){if(!JY(e.prng))throw new TypeError(lu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=cu(e);else{if(r=arguments[0],!PJr(r))throw new TypeError(lu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!XY(e))throw new TypeError(lu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(YY(e,"prng")){if(!JY(e.prng))throw new TypeError(lu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=cu(e)}else t=cu()}return r===void 0?i=p:i=l,Ge(i,"NAME","rayleigh"),e&&e.prng?(Ge(i,"seed",null),Ge(i,"seedLength",null),zY(i,"state",ZY(null),FJr),Ge(i,"stateLength",null),Ge(i,"byteLength",null),Ge(i,"toJSON",ZY(null)),Ge(i,"PRNG",t)):(fu(i,"seed",n),fu(i,"seedLength",a),zY(i,"state",f,v),fu(i,"stateLength",u),fu(i,"byteLength",o),Ge(i,"toJSON",c),Ge(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=BJr(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return $Y(t,r)}function p(g){return MJr(g)||g<=0?NaN:$Y(t,g)}}QY.exports=kJr});var rZ=s(($qe,KY)=>{"use strict";var jJr=Uv(),CJr=jJr();KY.exports=CJr});var iZ=s((Qqe,tZ)=>{"use strict";var VJr=b(),eZ=rZ(),UJr=Uv();VJr(eZ,"factory",UJr);tZ.exports=eZ});var xv=s((Kqe,lZ)=>{"use strict";var It=b(),pu=R(),nZ=M(),$i=A(),aZ=D().isPrimitive,sZ=L(),Gv=ve(),uZ=gr().isPrimitive,GJr=E(),oZ=_(),vZ=T(),HJr=C(),gu=Zn().factory,Qi=pt().factory,Hv=ot(),Wv=lr(),fZ=Xn(),WJr=B(),ae=y(),cZ=U();function xJr(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=Qi(n);else if(arguments.length===1)if(sZ(arguments[0])){if(n=arguments[0],$i(n,"copy")&&!uZ(n.copy))throw new TypeError(ae("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if($i(n,"prng")){if(!oZ(n.prng))throw new TypeError(ae("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Qi({prng:n.prng})}else{if($i(n,"state")&&!Gv(n.state))throw new TypeError(ae("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=fZ({},n),n.copy===!1?u=!1:n.state&&(n.state=Hv(n.state.length,n.state,1,new Wv(n.state.length),1)),n.copy=!1,t=Qi(n)}}else{if(o=arguments[0],!aZ(o))throw new TypeError(ae("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=Qi(n)}else{if(o=arguments[0],!aZ(o))throw new TypeError(ae("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!sZ(n))throw new TypeError(ae("invalid argument. Options argument must be an object. Value: `%s`.",n));if($i(n,"copy")&&!uZ(n.copy))throw new TypeError(ae("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if($i(n,"prng")){if(!oZ(n.prng))throw new TypeError(ae("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Qi({prng:n.prng})}else{if($i(n,"state")&&!Gv(n.state))throw new TypeError(ae("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=fZ({},n),n.copy===!1?u=!1:n.state&&(n.state=Hv(n.state.length,n.state,1,new Wv(n.state.length),1)),n.copy=!1,t=Qi(n)}}return n&&n.prng?o===void 0?r=gu({prng:n.prng}):r=gu(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=gu({state:e,copy:!1}):r=gu(o,{state:e,copy:!1})),o===void 0?a=m:a=d,i=t.PRNG,It(a,"NAME","t"),n&&n.prng?(It(a,"seed",null),It(a,"seedLength",null),nZ(a,"state",vZ(null),HJr),It(a,"stateLength",null),It(a,"byteLength",null),It(a,"toJSON",vZ(null))):(pu(a,"seed",f),pu(a,"seedLength",v),nZ(a,"state",p,g),pu(a,"stateLength",c),pu(a,"byteLength",l),It(a,"toJSON",h)),It(a,"PRNG",i),a;function f(){return i.seed}function v(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function g(q){if(!Gv(q))throw new TypeError(ae("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));u&&(q=Hv(q.length,q,1,new Wv(q.length),1)),i.state=q}function h(){var q={};return q.type="PRNG",q.name=a.NAME,q.state=WJr(i.state),o===void 0?q.params=[]:q.params=[o],q}function d(){return t()/cZ(r()/o)}function m(q){return GJr(q)||q<=0?NaN:t()/cZ(r(q)/q)}}lZ.exports=xJr});var gZ=s((rye,pZ)=>{"use strict";var DJr=xv(),zJr=DJr();pZ.exports=zJr});var hZ=s((eye,dZ)=>{"use strict";var XJr=b(),mZ=gZ(),JJr=xv();XJr(mZ,"factory",JJr);dZ.exports=mZ});var yZ=s((tye,qZ)=>{"use strict";var Dv=j().isPrimitive,mu=y(),zv=vr();function YJr(r,e,t){return!Dv(r)||zv(r)?new TypeError(mu("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Dv(e)||zv(e)?new TypeError(mu("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Dv(t)||zv(t)?new TypeError(mu("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(mu("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}qZ.exports=YJr});var EZ=s((iye,wZ)=>{"use strict";var bZ=U();function ZJr(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+bZ(a*u)):(a=(t-e)*(t-i),t-bZ(a*(1-u)))}wZ.exports=ZJr});var Jv=s((nye,IZ)=>{"use strict";var He=b(),du=R(),NZ=M(),OZ=L(),AZ=_(),SZ=A(),TZ=T(),$Jr=C(),hu=z().factory,Xv=E(),QJr=B(),qu=y(),KJr=yZ(),_Z=EZ();function rYr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=hu();else if(arguments.length===1){if(r=arguments[0],!OZ(r))throw new TypeError(qu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SZ(r,"prng")){if(!AZ(r.prng))throw new TypeError(qu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=hu(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=KJr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!OZ(r))throw new TypeError(qu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SZ(r,"prng")){if(!AZ(r.prng))throw new TypeError(qu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=hu(r)}else e=hu()}return n===void 0?t=d:t=h,He(t,"NAME","triangular"),r&&r.prng?(He(t,"seed",null),He(t,"seedLength",null),NZ(t,"state",TZ(null),$Jr),He(t,"stateLength",null),He(t,"byteLength",null),He(t,"toJSON",TZ(null)),He(t,"PRNG",e)):(du(t,"seed",o),du(t,"seedLength",f),NZ(t,"state",l,p),du(t,"stateLength",v),du(t,"byteLength",c),He(t,"toJSON",g),He(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=QJr(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return _Z(e,n,a,u)}function d(m,q,N){return Xv(m)||Xv(q)||Xv(N)||!(m<=N&&N<=q)?NaN:_Z(e,m,q,N)}}IZ.exports=rYr});var RZ=s((aye,LZ)=>{"use strict";var eYr=Jv(),tYr=eYr();LZ.exports=tYr});var MZ=s((sye,FZ)=>{"use strict";var iYr=b(),PZ=RZ(),nYr=Jv();iYr(PZ,"factory",nYr);FZ.exports=PZ});var CZ=s((uye,jZ)=>{"use strict";var BZ=j().isPrimitive,Yv=y(),kZ=vr();function aYr(r,e){return!BZ(r)||kZ(r)?new TypeError(Yv("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!BZ(e)||kZ(e)?new TypeError(Yv("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Yv("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}jZ.exports=aYr});var UZ=s((oye,VZ)=>{"use strict";function sYr(r,e,t){var i=r();return t*i+(1-i)*e}VZ.exports=sYr});var Zv=s((vye,JZ)=>{"use strict";var We=b(),yu=R(),GZ=M(),HZ=L(),WZ=_(),xZ=A(),DZ=T(),uYr=C(),bu=z().factory,zZ=E(),oYr=B(),wu=y(),vYr=CZ(),XZ=UZ();function fYr(){var r,e,t,i,n,a;if(arguments.length===0)e=bu();else if(arguments.length===1){if(r=arguments[0],!HZ(r))throw new TypeError(wu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(xZ(r,"prng")){if(!WZ(r.prng))throw new TypeError(wu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=bu(r)}else{if(n=arguments[0],a=arguments[1],i=vYr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!HZ(r))throw new TypeError(wu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(xZ(r,"prng")){if(!WZ(r.prng))throw new TypeError(wu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=bu(r)}else e=bu()}return n===void 0?t=h:t=g,We(t,"NAME","uniform"),r&&r.prng?(We(t,"seed",null),We(t,"seedLength",null),GZ(t,"state",DZ(null),uYr),We(t,"stateLength",null),We(t,"byteLength",null),We(t,"toJSON",DZ(null)),We(t,"PRNG",e)):(yu(t,"seed",u),yu(t,"seedLength",o),GZ(t,"state",c,l),yu(t,"stateLength",f),yu(t,"byteLength",v),We(t,"toJSON",p),We(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=oYr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return XZ(e,n,a)}function h(d,m){return zZ(d)||zZ(m)||d>=m?NaN:XZ(e,d,m)}}JZ.exports=fYr});var ZZ=s((fye,YZ)=>{"use strict";var cYr=Zv(),lYr=cYr();YZ.exports=lYr});var KZ=s((cye,QZ)=>{"use strict";var pYr=b(),$Z=ZZ(),gYr=Zv();pYr($Z,"factory",gYr);QZ.exports=$Z});var i$=s((lye,t$)=>{"use strict";var r$=D().isPrimitive,e$=y();function mYr(r,e){return r$(r)?r$(e)?null:new TypeError(e$("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(e$("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}t$.exports=mYr});var a$=s((pye,n$)=>{"use strict";var dYr=W(),hYr=P();function qYr(r,e,t){return t*dYr(-hYr(1-r()),1/e)}n$.exports=qYr});var $v=s((gye,p$)=>{"use strict";var xe=b(),Eu=R(),s$=M(),u$=L(),o$=_(),v$=A(),f$=T(),yYr=C(),Nu=z().factory,c$=E(),bYr=B(),Ou=y(),wYr=i$(),l$=a$();function EYr(){var r,e,t,i,n,a;if(arguments.length===0)t=Nu();else if(arguments.length===1){if(e=arguments[0],!u$(e))throw new TypeError(Ou("invalid argument. Options argument must be an object. Value: `%s`.",e));if(v$(e,"prng")){if(!o$(e.prng))throw new TypeError(Ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Nu(e)}else{if(a=arguments[0],r=arguments[1],n=wYr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!u$(e))throw new TypeError(Ou("invalid argument. Options argument must be an object. Value: `%s`.",e));if(v$(e,"prng")){if(!o$(e.prng))throw new TypeError(Ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Nu(e)}else t=Nu()}return r===void 0?i=h:i=g,xe(i,"NAME","weibull"),e&&e.prng?(xe(i,"seed",null),xe(i,"seedLength",null),s$(i,"state",f$(null),yYr),xe(i,"stateLength",null),xe(i,"byteLength",null),xe(i,"toJSON",f$(null)),xe(i,"PRNG",t)):(Eu(i,"seed",u),Eu(i,"seedLength",o),s$(i,"state",c,l),Eu(i,"stateLength",f),Eu(i,"byteLength",v),xe(i,"toJSON",p),xe(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=bYr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return l$(t,a,r)}function h(d,m){return c$(d)||c$(m)||d<=0||m<=0?NaN:l$(t,d,m)}}p$.exports=EYr});var m$=s((mye,g$)=>{"use strict";var NYr=$v(),OYr=NYr();g$.exports=OYr});var q$=s((dye,h$)=>{"use strict";var AYr=b(),d$=m$(),SYr=$v();AYr(d$,"factory",SYr);h$.exports=d$});var b$=s((hye,y$)=>{"use strict";var TYr=mr(),_Yr=Br().isPrimitive,IYr=y(),LYr=Ju();function RYr(r){if(_Yr(r))return r;if(TYr(r))return LYr(r);throw new TypeError(IYr("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}y$.exports=RYr});var E$=s((qye,w$)=>{"use strict";var PYr=b$();w$.exports=PYr});var O$=s((yye,N$)=>{"use strict";var k=rr(),FYr=Bj().factory,MYr=zj().factory,BYr=gV().factory,kYr=KV().factory,jYr=MU().factory,CYr=YU().factory,VYr=SG().factory,UYr=JG().factory,GYr=Zn().factory,HYr=HH().factory,WYr=oW().factory,xYr=SW().factory,DYr=UW().factory,zYr=ax().factory,XYr=Ex().factory,JYr=ki().factory,YYr=jx().factory,ZYr=tD().factory,$Yr=SD().factory,QYr=pt().factory,KYr=HD().factory,rZr=oz().factory,eZr=Sz().factory,tZr=cX().factory,iZr=IX().factory,nZr=XX().factory,aZr=nJ().factory,sZr=qJ().factory,uZr=z().factory,oZr=sY().factory,vZr=OY().factory,fZr=WY().factory,cZr=Pv().factory,lZr=iZ().factory,pZr=hZ().factory,gZr=MZ().factory,mZr=KZ().factory,dZr=q$().factory,hZr=E$();function qZr(r){return k(r,"arcsine",FYr),k(r,"bernoulli",MYr),k(r,"beta",BYr),k(r,"betaprime",kYr),k(r,"binomial",jYr),k(r,"boxMuller",CYr),k(r,"cauchy",VYr),k(r,"chi",UYr),k(r,"chisquare",GYr),k(r,"cosine",HYr),k(r,"discreteUniform",WYr),k(r,"erlang",xYr),k(r,"exponential",DYr),k(r,"f",zYr),k(r,"frechet",XYr),k(r,"gamma",JYr),k(r,"geometric",YYr),k(r,"gumbel",ZYr),k(r,"hypergeometric",$Yr),k(r,"improvedZiggurat",QYr),k(r,"invgamma",KYr),k(r,"kumaraswamy",rZr),k(r,"laplace",eZr),k(r,"levy",tZr),k(r,"logistic",iZr),k(r,"lognormal",nZr),k(r,"minstd",aZr),k(r,"minstdShuffle",sZr),k(r,"mt19937",uZr),k(r,"negativeBinomial",oZr),k(r,"normal",vZr),k(r,"pareto1",fZr),k(r,"poisson",cZr),k(r,"rayleigh",lZr),k(r,"t",pZr),k(r,"triangular",gZr),k(r,"uniform",mZr),k(r,"weibull",dZr),r.base={},k(r.base,"normalizeSeed",hZr),r}N$.exports=qZr});var S$=s((bye,A$)=>{"use strict";var yZr=L(),Au=A(),bZr=Br().isPrimitive,wZr=re().isPrimitive,EZr=kr().isPrimitive,NZr=Fa().isPrimitive,ea=y();function OZr(r,e){return yZr(e)?Au(e,"period")&&(r.period=e.period,!wZr(e.period))?new TypeError(ea("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):Au(e,"amplitude")&&(r.amplitude=e.amplitude,!NZr(e.amplitude))?new TypeError(ea("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):Au(e,"offset")&&(r.offset=e.offset,!bZr(e.offset))?new TypeError(ea("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):Au(e,"iter")&&(r.iter=e.iter,!EZr(e.iter))?new TypeError(ea("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(ea("invalid argument. Options argument must be an object. Value: `%s`.",e))}A$.exports=OZr});var L$=s((wye,I$)=>{"use strict";var Qv=b(),T$=qa(),AZr=G3(),SZr=u0(),TZr=s0(),_Zr=Mr(),IZr=S$();function _$(r){var e,t,i,n,a,u,o,f;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=IZr(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=_Zr/e.period,o=e.amplitude/TZr,f=0,t={},Qv(t,"next",v),Qv(t,"return",c),T$&&Qv(t,T$,l),t;function v(){return f+=1,i||f>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*SZr(AZr(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return _$(e)}}I$.exports=_$});var P$=s((Eye,R$)=>{"use strict";var LZr=L$();R$.exports=LZr});var M$=s((Nye,F$)=>{"use strict";var RZr=rr(),PZr=P$();function FZr(r){return RZr(r,"iterSawtoothWave",PZr),r}F$.exports=FZr});var k$=s((Oye,B$)=>{"use strict";var MZr=17976931348623157e292;B$.exports=MZr});var Su=s((Aye,j$)=>{"use strict";var BZr=709.782712893384;j$.exports=BZr});var V$=s((Sye,C$)=>{"use strict";var kZr=sr();function jZr(r,e){var t,i,n,a;if(n=kZr(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}C$.exports=jZr});var G$=s((Tye,U$)=>{"use strict";function CZr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}U$.exports=CZr});var W$=s((_ye,H$)=>{"use strict";function VZr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}H$.exports=VZr});var D$=s((Iye,x$)=>{"use strict";function UZr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}x$.exports=UZr});var X$=s((Lye,z$)=>{"use strict";function GZr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}z$.exports=GZr});var Y$=s((Rye,J$)=>{"use strict";function HZr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}J$.exports=HZr});var $$=s((Pye,Z$)=>{"use strict";function WZr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}Z$.exports=WZr});var K$=s((Fye,Q$)=>{"use strict";function xZr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}Q$.exports=xZr});var eQ=s((Mye,rQ)=>{"use strict";function DZr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}rQ.exports=DZr});var aQ=s((Bye,nQ)=>{"use strict";var zZr=E(),tQ=sr(),XZr=ce(),JZr=I(),YZr=V(),ZZr=G$(),$Zr=W$(),QZr=D$(),KZr=X$(),r$r=Y$(),e$r=$$(),t$r=K$(),i$r=eQ(),Tu=1e-300,n$r=13877787807814457e-33,iQ=.8450629115104675,a$r=.12837916709551256,s$r=1,u$r=-.0023621185607526594,o$r=1,v$r=-.009864944034847148,f$r=1,c$r=-.0098649429247001,l$r=1;function p$r(r){var e,t,i,n,a,u,o,f;if(zZr(r))return NaN;if(r===JZr)return 0;if(r===YZr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<n$r?1-r:(i=r*r,n=a$r+i*ZZr(i),a=s$r+i*$Zr(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=u$r+a*QZr(a),f=o$r+a*KZr(a),e?1+iQ+o/f:1-iQ-o/f;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=v$r+a*r$r(a),a=f$r+a*e$r(a);else{if(r<-6)return 2-Tu;n=c$r+a*t$r(a),a=l$r+a*i$r(a)}return i=XZr(t,0),n=tQ(-(i*i)-.5625)*tQ((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-Tu:Tu*Tu}nQ.exports=p$r});var Zt=s((kye,sQ)=>{"use strict";var g$r=aQ();sQ.exports=g$r});var vQ=s((jye,oQ)=>{"use strict";var m$r=Zt(),uQ=U(),d$r=sr(),h$r=Mr();function q$r(r,e){var t,i,n,a,u;if(a=m$r(uQ(e)),a!==0&&r>1){for(i=d$r(-e)/uQ(h$r*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}oQ.exports=q$r});var Kv=s((Cye,fQ)=>{"use strict";var y$r=-708.3964185322641;fQ.exports=y$r});var gQ=s((Vye,pQ)=>{"use strict";var Ki=sr(),_u=W(),b$r=P(),cQ=Su(),lQ=Kv();function w$r(r,e){var t,i;return i=r*b$r(e),e>=1?i<cQ&&-e>lQ?t=_u(e,r)*Ki(-e):r>=1?t=_u(e/Ki(e/r),r):t=Ki(i-e):i>lQ?t=_u(e,r)*Ki(-e):e/r<cQ?t=_u(e/Ki(e/r),r):t=Ki(i-e),t}pQ.exports=w$r});var rf=s((Uye,mQ)=>{"use strict";function E$r(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}mQ.exports=E$r});var hQ=s((Gye,dQ)=>{"use strict";var N$r=Function;dQ.exports=N$r});var yQ=s((Hye,qQ)=>{"use strict";var O$r=hQ();qQ.exports=O$r});var wQ=s((Wye,bQ)=>{"use strict";var A$r=yQ(),S$r=rf();function T$r(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new A$r(e)();function a(u){return S$r(r,u)}}bQ.exports=T$r});var OQ=s((xye,NQ)=>{"use strict";var _$r=b(),EQ=rf(),I$r=wQ();_$r(EQ,"factory",I$r);NQ.exports=EQ});var $t=s((Dye,AQ)=>{"use strict";var L$r=2220446049250313e-31;AQ.exports=L$r});var TQ=s((zye,SQ)=>{"use strict";var R$r=eval;SQ.exports=R$r});var IQ=s((Xye,_Q)=>{"use strict";var P$r=TQ();function F$r(){var r;try{P$r('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}_Q.exports=F$r});var ef=s((Jye,LQ)=>{"use strict";var M$r=IQ();LQ.exports=M$r});var PQ=s((Yye,RQ)=>{"use strict";var Iu=J(),B$r=$t(),k$r=1e6;function j$r(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||B$r,a=o.maxTerms||k$r,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,Iu(i*u)>=Iu(n)||--a===0)break}else do n=r(),u+=n;while(Iu(i*u)<Iu(n)&&--a);return u}RQ.exports=j$r});var BQ=s((Zye,MQ)=>{"use strict";var FQ=J(),C$r=$t(),V$r=1e6;function U$r(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||C$r,n=u.maxTerms||V$r,a=u.initialValue||0;do i=r(),a+=i;while(FQ(t*a)<FQ(i)&&--n);return a}MQ.exports=U$r});var Lu=s(($ye,kQ)=>{"use strict";var G$r=ef(),H$r=PQ(),W$r=BQ(),tf;G$r()?tf=H$r:tf=W$r;kQ.exports=tf});var CQ=s((Qye,jQ)=>{"use strict";function x$r(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}jQ.exports=x$r});var UQ=s((Kye,VQ)=>{"use strict";var D$r=J(),z$r=P(),X$r=$t(),J$r=Lu(),Y$r=CQ();function Z$r(r){var e,t;return r<=-1?NaN:(t=D$r(r),t>.95?z$r(1+r)-r:t<X$r?-r*r/2:(e={initialValue:-r},J$r(Y$r(r),e)))}VQ.exports=Z$r});var HQ=s((rbe,GQ)=>{"use strict";var $$r=UQ();GQ.exports=$$r});var xQ=s((ebe,WQ)=>{"use strict";function Q$r(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}WQ.exports=Q$r});var zQ=s((tbe,DQ)=>{"use strict";function K$r(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}DQ.exports=K$r});var JQ=s((ibe,XQ)=>{"use strict";function rQr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}XQ.exports=rQr});var ZQ=s((nbe,YQ)=>{"use strict";function eQr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}YQ.exports=eQr});var QQ=s((abe,$Q)=>{"use strict";function tQr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}$Q.exports=tQr});var rK=s((sbe,KQ)=>{"use strict";function iQr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}KQ.exports=iQr});var tK=s((ube,eK)=>{"use strict";function nQr(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}eK.exports=nQr});var nK=s((obe,iK)=>{"use strict";function aQr(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}iK.exports=aQr});var sK=s((vbe,aK)=>{"use strict";function sQr(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}aK.exports=sQr});var oK=s((fbe,uK)=>{"use strict";var uQr=OQ(),oQr=HQ(),vQr=Zt(),nf=U(),fQr=sr(),cQr=it(),lQr=xQ(),pQr=zQ(),gQr=JQ(),mQr=ZQ(),dQr=QQ(),hQr=rK(),qQr=tK(),yQr=nK(),bQr=sK(),Jr=[0,0,0,0,0,0,0,0,0,0];function wQr(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-oQr(i),a=r*n,u=nf(2*n),e<r&&(u=-u),Jr[0]=lQr(u),Jr[1]=pQr(u),Jr[2]=gQr(u),Jr[3]=mQr(u),Jr[4]=dQr(u),Jr[5]=hQr(u),Jr[6]=qQr(u),Jr[7]=yQr(u),Jr[8]=bQr(u),Jr[9]=-.0005967612901927463,t=uQr(Jr,1/r),t*=fQr(-a)/nf(cQr*r),e<r&&(t=-t),t+=vQr(nf(a))/2,t}uK.exports=wQr});var fK=s((cbe,vK)=>{"use strict";function EQr(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}vK.exports=EQr});var lK=s((lbe,cK)=>{"use strict";var NQr=Lu(),OQr=fK();function AQr(r,e,t){var i,n;return t=t||0,n=OQr(r,e),i=NQr(n,{initialValue:t}),i}cK.exports=AQr});var gK=s((pbe,pK)=>{"use strict";function SQr(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}pK.exports=SQr});var dK=s((gbe,mK)=>{"use strict";var TQr=gK();mK.exports=TQr});var qK=s((mbe,hK)=>{"use strict";var _Qr=dK();hK.exports=_Qr});var wK=s((dbe,bK)=>{"use strict";var IQr=j1(),yK=E(),af=V();function LQr(r,e){return yK(r)||yK(e)?NaN:r===af||e===af?af:r===e&&r===0?IQr(r)?r:e:r<e?r:e}bK.exports=LQr});var NK=s((hbe,EK)=>{"use strict";var RQr=wK();EK.exports=RQr});var AK=s((qbe,OK)=>{"use strict";var PQr=10.900511;OK.exports=PQr});var sf=s((ybe,SK)=>{"use strict";var FQr=2.718281828459045;SK.exports=FQr});var IK=s((bbe,_K)=>{"use strict";var MQr=qK(),BQr=Cn(),kQr=Li(),jQr=et(),CQr=U(),VQr=J(),Lt=sr(),ta=W(),uf=i3(),of=NK(),TK=P(),Ru=Su(),ia=Kv(),vf=AK(),UQr=sf();function GQr(r,e){var t,i,n,a,u,o,f;return n=r+vf-.5,f=(e-r-vf+.5)/n,r<1?e<=ia?Lt(r*TK(e)-e-BQr(r)):ta(e,r)*Lt(-e)/kQr(r):(VQr(f*f*r)<=100&&r>150?(t=r*(jQr(f)-f)+e*(.5-vf)/n,t=Lt(t)):(a=r*TK(e/n),u=r-e,of(a,u)<=ia||uf(a,u)>=Ru?(i=u/r,of(a,u)/2>ia&&uf(a,u)/2<Ru?(o=ta(e/n,r/2)*Lt(u/2),t=o*o):of(a,u)/4>ia&&uf(a,u)/4<Ru&&e>r?(o=ta(e/n,r/4)*Lt(u/4),t=o*o,t*=t):i>ia&&i<Ru?t=ta(e*Lt(i)/n,r):t=Lt(a+u)):t=ta(e/n,r)*Lt(u)),t*=CQr(n/UQr)/MQr(r),t)}_K.exports=GQr});var RK=s((wbe,LK)=>{"use strict";var HQr=.34657359027997264;LK.exports=HQr});var FK=s((Ebe,PK)=>{"use strict";function WQr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}PK.exports=WQr});var VK=s((Nbe,CK)=>{"use strict";var xQr=E(),MK=ar(),ff=le(),DQr=_i(),BK=I(),zQr=V(),kK=ne(),XQr=RK(),JQr=FK(),YQr=709.782712893384,cf=.6931471803691238,lf=19082149292705877e-26,jK=1.4426950408889634,ZQr=38.816242111356935,$Qr=1.0397207708399179;function QQr(r){var e,t,i,n,a,u,o,f,v,c,l,p,g;if(r===BK||xQr(r))return r;if(r===zQr)return-1;if(r===0)return r;if(r<0?(i=!0,f=-r):(i=!1,f=r),f>=ZQr){if(i)return-1;if(f>=YQr)return BK}if(u=MK(f)|0,f>XQr)f<$Qr?i?(n=r+cf,a=-lf,g=-1):(n=r-cf,a=lf,g=1):(i?g=jK*r-.5:g=jK*r+.5,g|=0,l=g,n=r-l*cf,a=l*lf),r=n-a,c=n-r-a;else{if(u<1016070144)return r;g=0}return e=.5*r,v=r*e,o=1+v*JQr(v),l=3-o*e,p=v*((o-l)/(6-r*l)),g===0?r-(r*p-v):(t=DQr(kK+g<<20,0),p=r*(p-c)-c,p-=v,g===-1?.5*(r-p)-.5:g===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):g<=-2||g>56?(f=1-(p-r),g===1024?(n=MK(f)+(g<<20)|0,f=ff(f,n)):f*=t,f-1):(l=1,g<20?(n=1072693248-(2097152>>g)|0,l=ff(l,n),f=l-(p-r)):(n=kK-g<<20|0,l=ff(l,n),f=r-(p+l),f+=1),f*=t,f))}CK.exports=QQr});var pf=s((Obe,UK)=>{"use strict";var KQr=VK();UK.exports=KQr});var xK=s((Abe,WK)=>{"use strict";var GK=E(),HK=J(),rKr=pf(),eKr=P(),tKr=W(),iKr=h0();function nKr(r,e){var t;if(GK(r)||GK(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((HK(e*(r-1))<.5||HK(e)<.2)&&(t=eKr(r)*e,t<.5))return rKr(t)}else if(iKr(e)!==e)return NaN;return tKr(r,e)-1}WK.exports=nKr});var zK=s((Sbe,DK)=>{"use strict";var aKr=xK();DK.exports=aKr});var JK=s((Tbe,XK)=>{"use strict";function sKr(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}XK.exports=sKr});var ZK=s((_be,YK)=>{"use strict";function uKr(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}YK.exports=uKr});var QK=s((Ibe,$K)=>{"use strict";function oKr(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}$K.exports=oKr});var rrr=s((Lbe,KK)=>{"use strict";var gf=P(),vKr=$t(),fKr=JK(),cKr=ZK(),lKr=QK(),pKr=.15896368026733398,gKr=.5281534194946289,mKr=.45201730728149414;function dKr(r,e,t){var i,n,a,u;if(r<vKr)return-gf(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=gf(r);while(r>=3);t=r-2}return a=t*(r+1),u=fKr(t),n+=a*pKr+a*u,n}return r<1&&(n+=-gf(r),t=e,e=r,r+=1),r<=1.5?(a=cKr(e),i=e*t,n+=i*gKr+i*a,n):(a=t*e,u=lKr(-t),n+=a*mKr+a*u,n)}KK.exports=dKr});var arr=s((Rbe,nrr)=>{"use strict";var err=Li(),trr=pf(),hKr=et(),qKr=E(),irr=rrr();function yKr(r){return qKr(r)?NaN:r<0?r<-.5?err(1+r)-1:trr(-hKr(r)+irr(r+2,r+1,r)):r<2?trr(irr(r+1,r,r-1)):err(1+r)-1}nrr.exports=yKr});var urr=s((Pbe,srr)=>{"use strict";var bKr=arr();srr.exports=bKr});var vrr=s((Fbe,orr)=>{"use strict";function wKr(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}orr.exports=wKr});var crr=s((Mbe,frr)=>{"use strict";var EKr=zK(),NKr=Lu(),OKr=urr(),AKr=vrr();function SKr(r,e,t){var i,n,a,u,o;return n=OKr(r),a=(n+1)/r,u=EKr(e,r),n-=u,n/=r,o=AKr(r,e),u+=1,i=t?a:0,n=-u*NKr(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}frr.exports=SKr});var mf=s((Bbe,lrr)=>{"use strict";var TKr=11754943508222875e-54;lrr.exports=TKr});var grr=s((kbe,prr)=>{"use strict";var Pu=J(),se=mf(),_Kr=$t(),IKr=1e6;function LKr(r,e,t){var i,n,a,u,o,f,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),u=v[1],a=v[0],u===0&&(u=se),o=u,f=0,i===!0)do v=r.next().value,v&&(f=v[1]+v[0]*f,f===0&&(f=se),o=v[1]+v[0]/o,o===0&&(o=se),f=1/f,n=o*f,u*=n);while(Pu(n-1)>e&&--t);else do v=r(),v&&(f=v[1]+v[0]*f,f===0&&(f=se),o=v[1]+v[0]/o,o===0&&(o=se),f=1/f,n=o*f,u*=n);while(v&&Pu(n-1)>e&&--t);return a/u}function RKr(r,e,t){var i,n,a,u,o,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),a=f[1],a===0&&(a=se),u=a,o=0,i===!0)do f=r.next().value,f&&(o=f[1]+f[0]*o,o===0&&(o=se),u=f[1]+f[0]/u,u===0&&(u=se),o=1/o,n=u*o,a*=n);while(f&&Pu(n-1)>e&&--t);else do f=r(),f&&(o=f[1]+f[0]*o,o===0&&(o=se),u=f[1]+f[0]/u,u===0&&(u=se),o=1/o,n=u*o,a*=n);while(f&&Pu(n-1)>e&&--t);return a}function PKr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||IKr,n=i.tolerance||_Kr,i.keep?RKr(r,n,t):LKr(r,n,t)}prr.exports=PKr});var hrr=s((jbe,drr)=>{"use strict";var mrr=J(),FKr=$t(),rn=mf(),MKr=1e6;function BKr(r,e,t){var i,n,a,u,o,f;f=r(),o=f[1],n=f[0],o===0&&(o=rn),a=o,u=0;do f=r(),f&&(u=f[1]+f[0]*u,u===0&&(u=rn),a=f[1]+f[0]/a,a===0&&(a=rn),u=1/u,i=a*u,o*=i);while(f&&mrr(i-1)>e&&--t);return n/o}function kKr(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=rn),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=rn),n=o[1]+o[0]/n,n===0&&(n=rn),a=1/a,i=n*a,u*=i);while(o&&mrr(i-1)>e&&--t);return u}function jKr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||FKr,t=i.maxIter||MKr,i.keep?kKr(r,n,t):BKr(r,n,t)}drr.exports=jKr});var yrr=s((Cbe,qrr)=>{"use strict";var CKr=ef(),VKr=grr(),UKr=hrr(),df;CKr()?df=VKr:df=UKr;qrr.exports=df});var wrr=s((Vbe,brr)=>{"use strict";function GKr(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}brr.exports=GKr});var Nrr=s((Ube,Err)=>{"use strict";var HKr=yrr(),WKr=wrr();function xKr(r,e){var t=WKr(r,e);return 1/(e-r+1+HKr(t))}Err.exports=xKr});var Frr=s((Gbe,Prr)=>{"use strict";var DKr=Cn(),zKr=X(),na=Li(),Orr=J(),XKr=sr(),Arr=W(),Yr=P(),JKr=G1(),Srr=k$(),YKr=C1(),Trr=Su(),ZKr=I(),$Kr=V$(),QKr=vQ(),_rr=gQ(),KKr=oK(),hf=lK(),Irr=IK(),rre=crr(),Lrr=Nrr(),ere=170;function Rrr(r,e,t,i){var n,a,u,o,f,v,c,l,p,g,h,d,m,q,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=ere&&!a)return l&&e*4<r?(p=e*Yr(r)-r,p+=Yr(Lrr(e,r))):!l&&e>4*r?(p=e*Yr(r)-r,o=0,p+=Yr(hf(e,r,o)/e)):(p=Rrr(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Yr(p)-e+(e-.5)*Yr(e),p+=Yr(YKr)):(p=e*Yr(r)-r,o=0,p+=Yr(hf(e,r,o)/e)):p=Yr(p)+DKr(e)),p>Trr?ZKr:XKr(p);switch(c=e<30&&e<=r+1&&r<Trr,c?(q=zKr(e),g=q===e,f=g?!1:Orr(q-e)===.5):g=f=!1,g&&r>.6?(l=!l,u=0):f&&r>.2?(l=!l,u=1):r<JKr&&e>1?u=6:r<.5?-.4/Yr(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(v=!1,a&&e>20&&(h=Orr((r-e)/e),e>200?20/e>h*h&&(v=!0):h<.4&&(v=!0)),v?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=$Kr(e,r),a===!1&&(p*=na(e));break;case 1:p=QKr(e,r),a===!1&&(p*=na(e));break;case 2:p=a?Irr(e,r):_rr(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:na(e),a||p>=1||Srr*p>o?(o/=p,a||e<1||Srr/e>o?(o*=-e,n=!0):o=0):o=0)),p*=hf(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,m=rre(e,r,l),p=m[0],N=m[1],l=!1,a&&(p/=N);break;case 4:p=a?Irr(e,r):_rr(e,r),p!==0&&(p*=Lrr(e,r));break;case 5:p=KKr(e,r),r>=e&&(l=!l);break;case 6:p=a?Arr(r,e)/na(e+1):Arr(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:na(e),p=d-p),p}Prr.exports=Rrr});var qf=s((Hbe,Mrr)=>{"use strict";var tre=Frr();Mrr.exports=tre});var krr=s((Wbe,Brr)=>{"use strict";var ire=qf(),yf=E(),nre=I();function are(r,e,t){return yf(r)||yf(e)||yf(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===nre?1:ire(r*t,e)}Brr.exports=are});var Vrr=s((xbe,Crr)=>{"use strict";var sre=T(),ure=is().factory,ore=qf(),jrr=E(),vre=I();function fre(r,e){if(jrr(r)||jrr(e)||r<0||e<=0)return sre(NaN);if(r===0)return ure(0);return t;function t(i){return i<=0?0:i===vre?1:ore(i*e,r)}}Crr.exports=fre});var bf=s((Dbe,Grr)=>{"use strict";var cre=b(),Urr=krr(),lre=Vrr();cre(Urr,"factory",lre);Grr.exports=Urr});var Wrr=s((zbe,Hrr)=>{"use strict";var pre=bf();function gre(r,e){return pre(r,e/2,.5)}Hrr.exports=gre});var Drr=s((Xbe,xrr)=>{"use strict";var mre=bf().factory;function dre(r){return mre(r/2,.5)}xrr.exports=dre});var Jrr=s((Jbe,Xrr)=>{"use strict";var hre=b(),zrr=Wrr(),qre=Drr();hre(zrr,"factory",qre);Xrr.exports=zrr});var Qrr=s((Ybe,$rr)=>{"use strict";var yre=L(),bre=A(),wre=Ma(),Yrr=y(),Zrr=["values","indices","*"];function Ere(r,e){return yre(e)?bre(e,"returns")&&(r.returns=e.returns,wre(Zrr,r.returns)===-1)?new TypeError(Yrr('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Zrr.join('", "'),r.returns)):null:new TypeError(Yrr("invalid argument. Options argument must be an object. Value: `%s`.",e))}$rr.exports=Ere});var rer=s((Zbe,Krr)=>{"use strict";var Nre=A();function Ore(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),Nre(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}Krr.exports=Ore});var ter=s(($be,eer)=>{"use strict";var Are=A();function Sre(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),Are(t,n)?t[n].push(a):t[n]=[a];return t}eer.exports=Sre});var ner=s((Qbe,ier)=>{"use strict";var Tre=A();function _re(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),Tre(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}ier.exports=_re});var oer=s((Kbe,uer)=>{"use strict";var aer=Wr(),ser=y(),Ire=Qrr(),Lre=rer(),Rre=ter(),Pre=ner();function Fre(r,e,t){var i,n,a;if(!aer(r))throw new TypeError(ser("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=Ire(i,e),n)throw n;a=t}if(!aer(a))throw new TypeError(ser("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?Lre(r,a):i.returns==="indices"?Rre(r,a):Pre(r,a)}uer.exports=Fre});var fer=s((rwe,ver)=>{"use strict";var Mre=oer();ver.exports=Mre});var ler=s((ewe,cer)=>{"use strict";function Bre(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}cer.exports=Bre});var mer=s((twe,ger)=>{"use strict";var kre=mr(),jre=j().isPrimitive,Cre=L(),Vre=vr(),per=A(),wf=y();function Ure(r,e){return Cre(e)?per(e,"alpha")&&(r.alpha=e.alpha,!jre(r.alpha)||Vre(r.alpha))?new TypeError(wf("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):per(e,"groups")&&(r.groups=e.groups,!kre(r.groups))?new TypeError(wf("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(wf("invalid argument. Options argument must be an object. Value: `%s`.",e))}ger.exports=Ure});var Eer=s((iwe,wer)=>{"use strict";var der=E(),Fu=Fr(),her=W(),Gre=J(),qer=w1(),Hre=Ii(),yer=$a(),Wre=u1(),xre=Qa(),Dre=Hre+1,ber=1e308;function zre(r,e){var t,i;return der(r)||der(e)||Fu(e)?NaN:Fu(r)||r===0||e<xre||Gre(r)>Dre&&e<=0?r:e>yer?0*r:e<Wre?(t=her(10,-(e+yer)),i=r*ber*t,Fu(i)?r:qer(i)/ber/t):(t=her(10,-e),i=r*t,Fu(i)?r:qer(i)/t)}wer.exports=zre});var Oer=s((nwe,Ner)=>{"use strict";var Xre=Eer();Ner.exports=Xre});var Ter=s((awe,Ser)=>{"use strict";var Jre=re(),Yre=L(),Zre=gr().isPrimitive,Aer=A(),Ef=y(),Nf=Oer();function $re(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!Yre(r))throw new TypeError(Ef("invalid argument. First argument must be an object. Value: `%s`.",r));if(Aer(r,"digits")){if(!Jre(r.digits))throw new TypeError(Ef("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(Aer(r,"decision")){if(!Zre(r.decision))throw new TypeError(Ef("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+Nf(this.pValue,-t)+`
`,i+="    statistic: "+Nf(this.statistic,-t)+`
`,i+="    df: "+Nf(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}Ser.exports=$re});var Ler=s((swe,Ier)=>{"use strict";var Qre=Wr(),Kre=L(),Qt=rr(),ree=Ei(),Mu=y(),eee=Jrr(),tee=fer(),_er=P(),iee=ler(),nee=mer(),aee=Ter();function see(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O;if(f=[],e=arguments.length,v={},Kre(arguments[e-1])&&(r=arguments[e-1],e-=1,g=nee(v,r),g))throw g;if(v.groups){if(n=tee(arguments[0],v.groups),i=ree(n),e=i.length,e<2)throw new Error(Mu("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(O=0;O<e;O++)f.push(n[i[O]])}else for(O=0;O<e;O++)f.push(arguments[O]);for(u=0,t=0,o=0,h=0,q=new Array(e),N=q.slice(),O=0;O<e;O++){if(p=f[O],!Qre(p))throw new TypeError(Mu("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(Mu("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));q[O]=p.length-1,u+=q[O],t+=1/q[O],N[O]=iee(p),o+=q[O]*N[O],h+=q[O]*_er(N[O])}if(o/=u,v.alpha===void 0?a=.05:a=v.alpha,a<0||a>1)throw new RangeError(Mu("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*_er(o)-h,l/=1+(t-1/u)/(3*(e-1)),m=e-1,c=1-eee(l,m),d={},Qt(d,"rejected",c<=a),Qt(d,"alpha",a),Qt(d,"pValue",c),Qt(d,"statistic",l),Qt(d,"df",m),Qt(d,"method","Bartlett's test of equal variances"),Qt(d,"print",aee),d}Ier.exports=see});var Per=s((uwe,Rer)=>{"use strict";var uee=Ler();Rer.exports=uee});var Mer=s((owe,Fer)=>{"use strict";var Of=E(),oee=ut();function vee(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,v=1,Of(a)===!1)for(v;v<r;v++){if(u+=t,f=e[u],Of(f)){a=f;break}(f>a||f===a&&oee(f))&&(a=f),i[o]=a,o+=n}if(Of(a))for(v;v<r;v++)i[o]=a,o+=n;return i}Fer.exports=vee});var ker=s((vwe,Ber)=>{"use strict";var Af=E(),fee=ut();function cee(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return n;if(f=i,v=u,o=e[f],n[v]=o,v+=a,l=1,Af(o)===!1)for(l;l<r;l++){if(f+=t,c=e[f],Af(c)){o=c;break}(c>o||c===o&&fee(c))&&(o=c),n[v]=o,v+=a}if(Af(o))for(l;l<r;l++)n[v]=o,v+=a;return n}Ber.exports=cee});var Ver=s((fwe,Cer)=>{"use strict";var lee=b(),jer=Mer(),pee=ker();lee(jer,"ndarray",pee);Cer.exports=jer});var Ger=s((cwe,Uer)=>{"use strict";var gee=Ver();Uer.exports=gee});var Wer=s((lwe,Her)=>{"use strict";var mee=E(),dee=ut();function hee(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],mee(a))return a;(a>i||a===i&&dee(a))&&(i=a)}return i}Her.exports=hee});var Der=s((pwe,xer)=>{"use strict";var qee=E(),yee=ut();function bee(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],qee(u))return u;(u>n||u===n&&yee(u))&&(n=u)}return n}xer.exports=bee});var Jer=s((gwe,Xer)=>{"use strict";var wee=b(),zer=Wer(),Eee=Der();wee(zer,"ndarray",Eee);Xer.exports=zer});var Zer=s((mwe,Yer)=>{"use strict";var Nee=Jer();Yer.exports=Nee});var Ker=s((dwe,Qer)=>{"use strict";var $er=E(),Oee=ut();function Aee(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,v=0;v<r&&i[o]!==0;v++)u+=t,o+=n;if(v===r)return NaN;if(a=e[u],$er(a))return a;for(v+=1,v;v<r;v++)if(u+=t,o+=n,!i[o]){if(f=e[u],$er(f))return f;(f>a||f===a&&Oee(f))&&(a=f)}return a}Qer.exports=Aee});var ttr=s((hwe,etr)=>{"use strict";var rtr=E(),See=ut();function Tee(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return NaN;for(f=i,v=u,l=0;l<r&&n[v]!==0;l++)f+=t,v+=a;if(l===r)return NaN;if(o=e[f],rtr(o))return o;for(l+=1,l;l<r;l++)if(f+=t,v+=a,!n[v]){if(c=e[f],rtr(c))return c;(c>o||c===o&&See(c))&&(o=c)}return o}etr.exports=Tee});var atr=s((qwe,ntr)=>{"use strict";var _ee=b(),itr=Ker(),Iee=ttr();_ee(itr,"ndarray",Iee);ntr.exports=itr});var utr=s((ywe,str)=>{"use strict";var Lee=Zt(),Ree=U(),Sf=E();function Pee(r,e,t){var i,n;return Sf(r)||Sf(e)||Sf(t)||t<0?NaN:t===0?r<e?0:1:(i=t*Ree(2),n=r-e,.5*Lee(-n/i))}str.exports=Pee});var vtr=s((bwe,otr)=>{"use strict";var Fee=T(),Mee=is().factory,Tf=E(),Bee=U(),kee=Zt();function jee(r,e){var t;if(Tf(r)||Tf(e)||e<0)return Fee(NaN);if(e===0)return Mee(r);return t=e*Bee(2),i;function i(n){var a;return Tf(n)?NaN:(a=n-r,.5*kee(-a/t))}}otr.exports=jee});var ltr=s((wwe,ctr)=>{"use strict";var Cee=b(),ftr=utr(),Vee=vtr();Cee(ftr,"factory",Vee);ctr.exports=ftr});var mtr=s((Ewe,gtr)=>{"use strict";var ptr=E(),Uee=P(),Gee=it(),Hee=sf();function Wee(r,e){return ptr(r)||ptr(e)||e<=0?NaN:.5*Uee(Gee*Hee*e*e)}gtr.exports=Wee});var htr=s((Nwe,dtr)=>{"use strict";var xee=mtr();dtr.exports=xee});var btr=s((Owe,ytr)=>{"use strict";var qtr=E();function Dee(r,e){return qtr(r)||qtr(e)||e<=0?NaN:0}ytr.exports=Dee});var Etr=s((Awe,wtr)=>{"use strict";var zee=btr();wtr.exports=zee});var Otr=s((Swe,Ntr)=>{"use strict";var Xee=X(),Jee=[Yee,Zee,$ee,Qee,Kee,rte,ete,tte,ite,nte,ate,ste,ute,ote,vte,fte,cte,lte,pte,gte,mte,dte,hte,qte,yte,bte,wte,Ete,Nte,Ote,Ate,Ste,Tte,_te,Ite,Lte,Rte,Pte,Fte,Mte,Bte,kte,jte,Cte,Vte,Ute,Gte,Hte,Wte,xte,Dte,zte,Xte,Jte,Yte,Zte,$te,Qte,Kte,rie,eie,tie,iie,nie,aie,sie,uie,oie,vie,fie,cie,lie,pie,gie,mie,die,hie,qie,yie,bie,wie,Eie,Nie,Oie,Aie,Sie,Tie,_ie,Iie,Lie,Rie,Pie,Fie,Mie,Bie,kie,jie,Cie,Vie,Uie,Gie];function Yee(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function Zee(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function $ee(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function Qee(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function Kee(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function rte(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function ete(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function tte(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function ite(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function nte(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function ate(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function ste(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function ute(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function ote(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function vte(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function fte(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function cte(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function lte(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function pte(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function gte(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function mte(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function dte(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function hte(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function qte(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function yte(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function bte(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function wte(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function Ete(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function Nte(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function Ote(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function Ate(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function Ste(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function Tte(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function _te(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function Ite(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function Lte(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function Rte(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function Pte(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function Fte(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function Mte(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function Bte(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function kte(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function jte(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function Cte(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function Vte(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function Ute(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function Gte(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function Hte(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function Wte(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function xte(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function Dte(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function zte(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function Xte(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function Jte(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function Yte(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function Zte(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function $te(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function Qte(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function Kte(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function rie(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function eie(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function tie(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function iie(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function nie(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function aie(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function sie(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function uie(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function oie(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function vie(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function fie(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function cie(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function lie(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function pie(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function gie(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function mie(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function die(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function hie(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function qie(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function yie(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function bie(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function wie(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function Eie(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function Nie(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function Oie(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function Aie(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function Sie(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function Tie(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function _ie(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function Iie(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function Lie(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function Rie(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function Pie(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function Fie(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function Mie(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function Bie(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function kie(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function jie(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function Cie(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function Vie(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function Uie(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function Gie(){return 1}function Hie(r){var e=Xee(r),t=Jee[e];return t(2*r-(2*e+1))}Ntr.exports=Hie});var Itr=s((Twe,_tr)=>{"use strict";var Atr=sr(),Wie=I(),Str=Otr(),Ttr=.5641895835477563;function xie(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?Ttr/r:(e=r*r,Ttr*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):Str(400/(4+r)):r<-26.7?Wie:(e=r*r,r<-6.1?2*Atr(e):2*Atr(e)-Str(400/(4-r)))}_tr.exports=xie});var _f=s((_we,Ltr)=>{"use strict";var Die=Itr();Ltr.exports=Die});var Ftr=s((Iwe,Ptr)=>{"use strict";var zie=P(),Xie=et(),Jie=t0(),Yie=Zt(),Zie=_f(),$ie=V(),If=E(),Rtr=.7071067811865475;function Qie(r,e,t){var i;return If(r)||If(e)||If(t)||t<0?NaN:t===0?r<e?$ie:0:(i=(r-e)/t,i<-1?zie(Zie(-i*Rtr)/2)-Jie(i)/2:Xie(-Yie(i*Rtr)/2))}Ptr.exports=Qie});var ktr=s((Lwe,Btr)=>{"use strict";var Mtr=E(),Kie=V();function rne(r,e){return Mtr(r)||Mtr(e)?NaN:r<e?Kie:0}Btr.exports=rne});var Vtr=s((Rwe,Ctr)=>{"use strict";var ene=T(),jtr=E(),tne=V();function ine(r){if(jtr(r))return ene(NaN);return e;function e(t){return jtr(t)?NaN:t<r?tne:0}}Ctr.exports=ine});var Htr=s((Pwe,Gtr)=>{"use strict";var nne=b(),Utr=ktr(),ane=Vtr();nne(Utr,"factory",ane);Gtr.exports=Utr});var ztr=s((Fwe,Dtr)=>{"use strict";var sne=T(),une=Htr().factory,Wtr=E(),one=et(),vne=t0(),fne=Zt(),cne=_f(),lne=P(),xtr=.7071067811865475;function pne(r,e){if(Wtr(r)||Wtr(e)||e<0)return sne(NaN);if(e===0)return une(r);return t;function t(i){var n=(i-r)/e;return n<-1?lne(cne(-n*xtr)/2)-vne(n)/2:one(-fne(n*xtr)/2)}}Dtr.exports=pne});var Ytr=s((Mwe,Jtr)=>{"use strict";var gne=b(),Xtr=Ftr(),mne=ztr();gne(Xtr,"factory",mne);Jtr.exports=Xtr});var Lf=s((Bwe,Ztr)=>{"use strict";var dne=1.8378770664093456;Ztr.exports=dne});var Ktr=s((kwe,Qtr)=>{"use strict";var hne=P(),$tr=W(),qne=Lf(),yne=V(),bne=I(),Rf=E();function wne(r,e,t){var i,n,a;return Rf(r)||Rf(e)||Rf(t)||t<0?NaN:t===0?r===e?bne:yne:(i=$tr(t,2),n=-.5*(2*hne(t)+qne),a=-1/(2*i),n+a*$tr(r-e,2))}Qtr.exports=wne});var tir=s((jwe,eir)=>{"use strict";var Ene=I(),Nne=V(),rir=E();function One(r,e){return rir(r)||rir(e)?NaN:r===e?Ene:Nne}eir.exports=One});var air=s((Cwe,nir)=>{"use strict";var Ane=T(),Sne=I(),Tne=V(),iir=E();function _ne(r){if(iir(r))return Ane(NaN);return e;function e(t){return iir(t)?NaN:t===r?Sne:Tne}}nir.exports=_ne});var oir=s((Vwe,uir)=>{"use strict";var Ine=b(),sir=tir(),Lne=air();Ine(sir,"factory",Lne);uir.exports=sir});var lir=s((Uwe,cir)=>{"use strict";var Rne=T(),Pne=oir().factory,Fne=Lf(),vir=E(),fir=W(),Mne=P();function Bne(r,e){var t,i,n;if(vir(r)||vir(e)||e<0)return Rne(NaN);if(e===0)return Pne(r);return t=fir(e,2),i=-.5*(2*Mne(e)+Fne),n=-1/(2*t),a;function a(u){return i+n*fir(u-r,2)}}cir.exports=Bne});var mir=s((Gwe,gir)=>{"use strict";var kne=b(),pir=Ktr(),jne=lir();kne(pir,"factory",jne);gir.exports=pir});var qir=s((Hwe,hir)=>{"use strict";var dir=E();function Cne(r,e){return dir(r)||dir(e)||e<=0?NaN:r}hir.exports=Cne});var bir=s((Wwe,yir)=>{"use strict";var Vne=qir();yir.exports=Vne});var Nir=s((xwe,Eir)=>{"use strict";var wir=E();function Une(r,e){return wir(r)||wir(e)||e<=0?NaN:r}Eir.exports=Une});var Air=s((Dwe,Oir)=>{"use strict";var Gne=Nir();Oir.exports=Gne});var Tir=s((zwe,Sir)=>{"use strict";var Pf=E(),Hne=sr(),Wne=W();function xne(r,e,t){return Pf(r)||Pf(e)||Pf(t)||t<=0?NaN:Hne(e*r+.5*Wne(t*r,2))}Sir.exports=xne});var Iir=s((Xwe,_ir)=>{"use strict";var Dne=T(),Ff=E(),zne=sr(),Xne=W();function Jne(r,e){if(Ff(r)||Ff(e)||e<=0)return Dne(NaN);return t;function t(i){return Ff(i)?NaN:zne(r*i+.5*Xne(e*i,2))}}_ir.exports=Jne});var Pir=s((Jwe,Rir)=>{"use strict";var Yne=b(),Lir=Tir(),Zne=Iir();Yne(Lir,"factory",Zne);Rir.exports=Lir});var Bir=s((Ywe,Mir)=>{"use strict";var Fir=E();function $ne(r,e){return Fir(r)||Fir(e)||e<=0?NaN:r}Mir.exports=$ne});var jir=s((Zwe,kir)=>{"use strict";var Qne=Bir();kir.exports=Qne});var Uir=s(($we,Vir)=>{"use strict";var Kne=sr(),Cir=W(),rae=U(),eae=it(),tae=I(),Mf=E();function iae(r,e,t){var i,n,a;return Mf(r)||Mf(e)||Mf(t)||t<0?NaN:t===0?r===e?tae:0:(i=Cir(t,2),n=1/rae(i*eae),a=-1/(2*i),n*Kne(a*Cir(r-e,2)))}Vir.exports=iae});var Wir=s((Qwe,Hir)=>{"use strict";var nae=I(),Gir=E();function aae(r,e){return Gir(r)||Gir(e)?NaN:r===e?nae:0}Hir.exports=aae});var zir=s((Kwe,Dir)=>{"use strict";var sae=T(),uae=I(),xir=E();function oae(r){if(xir(r))return sae(NaN);return e;function e(t){return xir(t)?NaN:t===r?uae:0}}Dir.exports=oae});var Yir=s((rEe,Jir)=>{"use strict";var vae=b(),Xir=Wir(),fae=zir();vae(Xir,"factory",fae);Jir.exports=Xir});var Qir=s((eEe,$ir)=>{"use strict";var cae=T(),lae=Yir().factory,Bf=E(),pae=U(),gae=sr(),Zir=W(),mae=it();function dae(r,e){var t,i,n;if(Bf(r)||Bf(e)||e<0)return cae(NaN);if(e===0)return lae(r);return t=Zir(e,2),i=1/pae(t*mae),n=-1/(2*t),a;function a(u){return Bf(u)?NaN:i*gae(n*Zir(u-r,2))}}$ir.exports=dae});var enr=s((tEe,rnr)=>{"use strict";var hae=b(),Kir=Uir(),qae=Qir();hae(Kir,"factory",qae);rnr.exports=Kir});var nnr=s((iEe,inr)=>{"use strict";var tnr=E();function yae(r,e){return tnr(r)||tnr(e)||e<=0?NaN:0}inr.exports=yae});var snr=s((nEe,anr)=>{"use strict";var bae=nnr();anr.exports=bae});var vnr=s((aEe,onr)=>{"use strict";var unr=E();function wae(r,e){return unr(r)||unr(e)||e<=0?NaN:e}onr.exports=wae});var cnr=s((sEe,fnr)=>{"use strict";var Eae=vnr();fnr.exports=Eae});var gnr=s((uEe,pnr)=>{"use strict";var lnr=E();function Nae(r,e){return lnr(r)||lnr(e)||e<=0?NaN:e*e}pnr.exports=Nae});var dnr=s((oEe,mnr)=>{"use strict";var Oae=gnr();mnr.exports=Oae});var qnr=s((vEe,hnr)=>{"use strict";var Tr=rr(),Aae=ltr(),Sae=htr(),Tae=Etr(),_ae=Ytr(),Iae=mir(),Lae=bir(),Rae=Air(),Pae=Pir(),Fae=jir(),Mae=enr(),Bae=yv(),kae=snr(),jae=cnr(),Cae=dnr();function Vae(r){return Tr(r,"cdf",Aae),Tr(r,"entropy",Sae),Tr(r,"kurtosis",Tae),Tr(r,"logcdf",_ae),Tr(r,"logpdf",Iae),Tr(r,"mean",Lae),Tr(r,"median",Rae),Tr(r,"mgf",Pae),Tr(r,"mode",Fae),Tr(r,"pdf",Mae),Tr(r,"quantile",Bae),Tr(r,"skewness",kae),Tr(r,"stdev",jae),Tr(r,"variance",Cae),r}hnr.exports=Vae});var bnr=s((fEe,ynr)=>{"use strict";var Uae=rr(),Gae=qnr();function Hae(r){return Uae(r,"normal",Gae({})),r}ynr.exports=Hae});var Enr=s((cEe,wnr)=>{"use strict";var aa=rr(),Wae=Per(),xae=Ger().ndarray,Dae=Zer().ndarray,zae=atr().ndarray,Xae=bnr();function Jae(r){return aa(r,"bartlettTest",Wae),aa(r,"cumax",xae),aa(r,"max",Dae),aa(r,"mskmax",zae),aa(r,"dists",Xae({})),r}wnr.exports=Jae});var Onr=s((lEe,Nnr)=>{"use strict";var Yae=K().isPrimitive,Zae=y();function $ae(r){return e;function e(t){if(!Yae(t))throw new TypeError(Zae("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}Nnr.exports=$ae});var Snr=s((pEe,Anr)=>{"use strict";var Qae=Onr();Anr.exports=Qae});var Lnr=s((gEe,Inr)=>{"use strict";var Tnr=K().isPrimitive,_nr=y();function Kae(r){return e;function e(t,i){if(!Tnr(t))throw new TypeError(_nr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Tnr(i))throw new TypeError(_nr("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}Inr.exports=Kae});var Pnr=s((mEe,Rnr)=>{"use strict";var r0e=Lnr();Rnr.exports=r0e});var Mnr=s((dEe,Fnr)=>{"use strict";var kf=K().isPrimitive,jf=y();function e0e(r){return e;function e(t,i,n){if(!kf(t))throw new TypeError(jf("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!kf(i))throw new TypeError(jf("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!kf(n))throw new TypeError(jf("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}Fnr.exports=e0e});var knr=s((hEe,Bnr)=>{"use strict";var t0e=Mnr();Bnr.exports=t0e});var Cnr=s((qEe,jnr)=>{"use strict";var Cf=rr(),i0e=Snr(),n0e=Pnr(),a0e=knr();function s0e(r){return Cf(r,"s_o",i0e),Cf(r,"ss_o",n0e),Cf(r,"sss_o",a0e),r}jnr.exports=s0e});var Unr=s((yEe,Vnr)=>{"use strict";function u0e(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}Vnr.exports=u0e});var Bu=s((bEe,Gnr)=>{"use strict";var o0e=Unr();Gnr.exports=o0e});var Wnr=s((wEe,Hnr)=>{"use strict";function v0e(r){return r.toLowerCase()}Hnr.exports=v0e});var en=s((EEe,xnr)=>{"use strict";var f0e=Wnr();xnr.exports=f0e});var znr=s((NEe,Dnr)=>{"use strict";var c0e=typeof String.prototype.trim<"u";Dnr.exports=c0e});var Vf=s((OEe,Xnr)=>{"use strict";var l0e=String.prototype.trim;Xnr.exports=l0e});var $nr=s((AEe,Znr)=>{"use strict";var Jnr=Vf(),p0e=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,Ynr="\u180E";function g0e(){return Jnr.call(p0e)===""&&Jnr.call(Ynr)===Ynr}Znr.exports=g0e});var Knr=s((SEe,Qnr)=>{"use strict";var m0e=nt(),d0e=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function h0e(r){return m0e(r,d0e,"$1")}Qnr.exports=h0e});var ear=s((TEe,rar)=>{"use strict";var q0e=Vf();function y0e(r){return q0e.call(r)}rar.exports=y0e});var tn=s((_Ee,tar)=>{"use strict";var b0e=znr(),w0e=$nr(),E0e=Knr(),N0e=ear(),Uf;b0e&&w0e()?Uf=N0e:Uf=E0e;tar.exports=Uf});var nar=s((IEe,iar)=>{"use strict";var O0e=Bu(),A0e=en(),ku=nt(),S0e=tn(),T0e=/\s+/g,_0e=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,I0e=/(?:\s|^)([^\s]+)(?=\s|$)/g,L0e=/([a-z0-9])([A-Z])/g;function R0e(r,e,t){return e=A0e(e),t===0?e:O0e(e)}function P0e(r){return r=ku(r,_0e," "),r=ku(r,T0e," "),r=ku(r,L0e,"$1 $2"),r=S0e(r),ku(r,I0e,R0e)}iar.exports=P0e});var sar=s((LEe,aar)=>{"use strict";var F0e=nar();aar.exports=F0e});var oar=s((REe,uar)=>{"use strict";var M0e=K().isPrimitive,B0e=y(),k0e=sar();function j0e(r){if(!M0e(r))throw new TypeError(B0e("invalid argument. First argument must be a string. Value: `%s`.",r));return k0e(r)}uar.exports=j0e});var car=s((PEe,far)=>{"use strict";var C0e=oar();far.exports=C0e});var par=s((FEe,lar)=>{"use strict";var V0e=K().isPrimitive,U0e=y(),G0e=Bu();function H0e(r){if(!V0e(r))throw new TypeError(U0e("invalid argument. First argument must be a string. Value: `%s`.",r));return G0e(r)}lar.exports=H0e});var mar=s((MEe,gar)=>{"use strict";var W0e=par();gar.exports=W0e});var har=s((BEe,dar)=>{"use strict";function x0e(r){return r.toUpperCase()}dar.exports=x0e});var yar=s((kEe,qar)=>{"use strict";var D0e=har();qar.exports=D0e});var war=s((jEe,bar)=>{"use strict";var z0e=yar(),Gf=nt(),X0e=tn(),J0e=/\s+/g,Y0e=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Z0e=/([a-z0-9])([A-Z])/g;function $0e(r){return r=Gf(r,Y0e," "),r=Gf(r,Z0e,"$1 $2"),r=X0e(r),r=Gf(r,J0e,"_"),z0e(r)}bar.exports=$0e});var Nar=s((CEe,Ear)=>{"use strict";var Q0e=war();Ear.exports=Q0e});var Aar=s((VEe,Oar)=>{"use strict";var K0e=K().isPrimitive,rse=y(),ese=Nar();function tse(r){if(!K0e(r))throw new TypeError(rse("invalid argument. Must provide a string. Value: `%s`.",r));return ese(r)}Oar.exports=tse});var Tar=s((UEe,Sar)=>{"use strict";var ise=Aar();Sar.exports=ise});var Iar=s((GEe,_ar)=>{"use strict";var nse=en(),Hf=nt(),ase=tn(),sse=/\s+/g,use=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,ose=/([a-z0-9])([A-Z])/g;function vse(r){return r=Hf(r,use," "),r=Hf(r,ose,"$1 $2"),r=ase(r),r=Hf(r,sse,"-"),nse(r)}_ar.exports=vse});var Rar=s((HEe,Lar)=>{"use strict";var fse=Iar();Lar.exports=fse});var Far=s((WEe,Par)=>{"use strict";var cse=K().isPrimitive,lse=y(),pse=Rar();function gse(r){if(!cse(r))throw new TypeError(lse("invalid argument. Must provide a string. Value: `%s`.",r));return pse(r)}Par.exports=gse});var Bar=s((xEe,Mar)=>{"use strict";var mse=Far();Mar.exports=mse});var jar=s((DEe,kar)=>{"use strict";var dse=K().isPrimitive,hse=y(),qse=en();function yse(r){if(!dse(r))throw new TypeError(hse("invalid argument. Must provide a string. Value: `%s`.",r));return qse(r)}kar.exports=yse});var Var=s((zEe,Car)=>{"use strict";var bse=jar();Car.exports=bse});var Gar=s((XEe,Uar)=>{"use strict";var wse=Bu(),Ese=en(),ju=nt(),Nse=tn(),Ose=/\s+/g,Ase=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Sse=/(?:\s|^)([^\s]+)(?=\s|$)/g,Tse=/([a-z0-9])([A-Z])/g;function _se(r,e){return wse(Ese(e))}function Ise(r){return r=ju(r,Ase," "),r=ju(r,Ose," "),r=ju(r,Tse,"$1 $2"),r=Nse(r),ju(r,Sse,_se)}Uar.exports=Ise});var War=s((JEe,Har)=>{"use strict";var Lse=Gar();Har.exports=Lse});var Dar=s((YEe,xar)=>{"use strict";var Rse=K().isPrimitive,Pse=y(),Fse=War();function Mse(r){if(!Rse(r))throw new TypeError(Pse("invalid argument. First argument must be a string. Value: `%s`.",r));return Fse(r)}xar.exports=Mse});var Xar=s((ZEe,zar)=>{"use strict";var Bse=Dar();zar.exports=Bse});var Yar=s(($Ee,Jar)=>{"use strict";var kse=en(),Wf=nt(),jse=tn(),Cse=/\s+/g,Vse=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Use=/([a-z0-9])([A-Z])/g;function Gse(r){return r=Wf(r,Vse," "),r=Wf(r,Use,"$1 $2"),r=jse(r),r=Wf(r,Cse,"_"),kse(r)}Jar.exports=Gse});var $ar=s((QEe,Zar)=>{"use strict";var Hse=Yar();Zar.exports=Hse});var Kar=s((KEe,Qar)=>{"use strict";var Wse=K().isPrimitive,xse=y(),Dse=$ar();function zse(r){if(!Wse(r))throw new TypeError(xse("invalid argument. Must provide a string. Value: `%s`.",r));return Dse(r)}Qar.exports=zse});var e0r=s((rNe,r0r)=>{"use strict";var Xse=Kar();r0r.exports=Xse});var n0r=s((eNe,i0r)=>{"use strict";var Jse=L(),t0r=A(),Yse=gr().isPrimitive,Zse=K().isPrimitive,xf=y();function $se(r,e){return Jse(e)?t0r(e,"flags")&&(r.flags=e.flags,!Zse(r.flags))?new TypeError(xf("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):t0r(e,"capture")&&(r.capture=e.capture,!Yse(r.capture))?new TypeError(xf("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(xf("invalid argument. Options argument must be an object. Value: `%s`.",e))}i0r.exports=$se});var Cu=s((tNe,s0r)=>{"use strict";var Qse=n0r(),a0r=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function Kse(r){var e,t;if(arguments.length>0){if(e={},t=Qse(e,r),t)throw t;return e.capture?new RegExp("("+a0r+")",e.flags):new RegExp(a0r,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}s0r.exports=Kse});var o0r=s((iNe,u0r)=>{"use strict";var rue=Cu(),eue=rue({capture:!0});u0r.exports=eue});var f0r=s((nNe,v0r)=>{"use strict";var tue=Cu(),iue=tue();v0r.exports=iue});var p0r=s((aNe,l0r)=>{"use strict";var c0r=b(),Df=Cu(),nue=o0r(),aue=f0r();c0r(Df,"REGEXP",aue);c0r(Df,"REGEXP_CAPTURE",nue);l0r.exports=Df});var m0r=s((sNe,g0r)=>{"use strict";var sue=p0r().REGEXP;function uue(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),sue.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}g0r.exports=uue});var h0r=s((uNe,d0r)=>{"use strict";var oue=m0r();d0r.exports=oue});var y0r=s((oNe,q0r)=>{"use strict";var vue=K().isPrimitive,fue=y(),cue=h0r();function lue(r){if(!vue(r))throw new TypeError(fue("invalid argument. Must provide a string. Value: `%s`.",r));return cue(r)}q0r.exports=lue});var w0r=s((vNe,b0r)=>{"use strict";var pue=y0r();b0r.exports=pue});var N0r=s((fNe,E0r)=>{"use strict";function gue(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}E0r.exports=gue});var A0r=s((cNe,O0r)=>{"use strict";var mue=N0r();O0r.exports=mue});var T0r=s((lNe,S0r)=>{"use strict";var due=K().isPrimitive,hue=y(),que=A0r();function yue(r){if(!due(r))throw new TypeError(hue("invalid argument. First argument must be a string. Value: `%s`.",r));return que(r)}S0r.exports=yue});var I0r=s((pNe,_0r)=>{"use strict";var bue=T0r();_0r.exports=bue});var R0r=s((gNe,L0r)=>{"use strict";var wue=K().isPrimitive,Eue=y();function Nue(r){if(!wue(r))throw new TypeError(Eue("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}L0r.exports=Nue});var F0r=s((mNe,P0r)=>{"use strict";var Oue=R0r();P0r.exports=Oue});var B0r=s((dNe,M0r)=>{"use strict";var ue=rr(),Aue=car(),Sue=mar(),Tue=Tar(),_ue=Bar(),Iue=Var(),Lue=Xar(),Rue=e0r(),Pue=w0r(),Fue=I0r(),Mue=F0r();function Bue(r){return ue(r,"camelcase",Aue),ue(r,"capitalize",Sue),ue(r,"constantcase",Tue),ue(r,"kebabcase",_ue),ue(r,"lowercase",Iue),ue(r,"pascalcase",Lue),ue(r,"snakecase",Rue),ue(r,"startcase",Pue),ue(r,"uncapitalize",Fue),ue(r,"uppercase",Mue),r}M0r.exports=Bue});var j0r=s((hNe,k0r)=>{"use strict";var kue=rr(),jue=Cnr(),Cue=B0r();function Vue(r){return kue(r,"tools",jue({})),r=Cue(r),r}k0r.exports=Vue});var V0r=s((qNe,C0r)=>{"use strict";var oe=rr(),Uue=hd(),Gue=iy(),Hue=ly(),Wue=vE(),xue=mP(),Due=UB(),zue=O$(),Xue=M$(),Jue=Enr(),Yue=j0r();function Zue(){var r={};return oe(r,"array",Uue({})),oe(r,"assert",Gue({})),oe(r,"blas",Hue({})),oe(r,"datasets",Wue({})),oe(r,"math",xue({})),oe(r,"ndarray",Due({})),oe(r,"random",zue({})),oe(r,"simulate",Xue({})),oe(r,"stats",Jue({})),oe(r,"string",Yue({})),r}C0r.exports=Zue});var G0r=s((yNe,U0r)=>{"use strict";var $ue=b(),zf=V0r();$ue(zf,"CACHED",zf());U0r.exports=zf});var Kue=s((bNe,H0r)=>{var Que=G0r().CACHED;H0r.exports=Que});return Kue();})();
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
* @returns {ndarray} zero-filled ndarray
*
* @example
* STDLIB_NDZEROS( { 10, 1 } )
*/
function STDLIB_NDZEROS( shape, order, orderValue ) { 
	var header;
	var ndims;
	var opts;
	var arr;
	var len;
	var st;
	var d;
	var o;
	var i;
	// TODO: consider if we want to support an option specifying whether the output should be a column or a row
	opts = {
		'order': 'row-major',
		'dtype': 'generic'
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'order' ) {
			opts[ o ] = arguments[ i+1 ];
			// TODO: validate order value
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.isRange1d( shape, 'First argument' );
	shape = ns.array.flattenArray( shape );
	ns.assert.isValidShape( shape, 'First argument' );
	arr = ns.ndarray.zeros( opts.dtype, shape, opts.order );
	len = arr.length;
	ndims = shape.length;
	header = [];
	header.push( [ 'shape' ] );
	for ( i = 0; i < ndims; i++ ) {
		header.push( [ shape[i] ] );
	}
	header.push( [ 'strides' ] );
	st = arr.strides;
	for ( i = 0; i < ndims; i++ ) {
		header.push( [ st[i] ] );
	}
	header.push( [ 'offset' ] );
	header.push( [ arr.offset ] );
	header.push( [ 'order' ] );
	header.push( [ opts.order ] );
	header.push( [ 'dtype' ] );
	header.push( [ 'number' ] );
	header.push( [ 'data' ] );
	d = ns.ndarray.toArray( arr.data, [ len, 1 ], [ 1, 1 ], 0, 'row-major' );
	return header.concat( d );
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
