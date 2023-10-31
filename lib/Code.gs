/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Qf=s((noe,$f)=>{"use strict";var W0r=typeof Object.defineProperty=="function"?Object.defineProperty:null;$f.exports=W0r});var r6=s((aoe,Kf)=>{"use strict";var x0r=Qf();function D0r(){try{return x0r({},"x",{}),!0}catch{return!1}}Kf.exports=D0r});var t6=s((soe,e6)=>{"use strict";var z0r=Object.defineProperty;e6.exports=z0r});var Gu=s((uoe,i6)=>{"use strict";function X0r(r){return typeof r=="number"}i6.exports=X0r});var Hu=s((ooe,a6)=>{"use strict";function J0r(r){return r[0]==="-"}function n6(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Y0r(r,e,t){var i=!1,n=e-r.length;return n<0||(J0r(r)&&(i=!0,r=r.substr(1)),r=t?r+n6(n):n6(n)+r,i&&(r="-"+r)),r}a6.exports=Y0r});var v6=s((voe,o6)=>{"use strict";var Z0r=Gu(),s6=Hu(),$0r=String.prototype.toLowerCase,u6=String.prototype.toUpperCase;function Q0r(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Z0r(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=s6(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=s6(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===u6.call(r.specifier)?u6.call(t):$0r.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}o6.exports=Q0r});var c6=s((foe,f6)=>{"use strict";function K0r(r){return typeof r=="string"}f6.exports=K0r});var g6=s((coe,p6)=>{"use strict";var rsr=Gu(),esr=Math.abs,tsr=String.prototype.toLowerCase,l6=String.prototype.toUpperCase,Pt=String.prototype.replace,isr=/e\+(\d)$/,nsr=/e-(\d)$/,asr=/^(\d+)$/,ssr=/^(\d+)e/,usr=/\.0$/,osr=/\.0*e/,vsr=/(\..*[^0])0*e/;function fsr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!rsr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":esr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Pt.call(t,vsr,"$1e"),t=Pt.call(t,osr,"e"),t=Pt.call(t,usr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Pt.call(t,isr,"e+0$1"),t=Pt.call(t,nsr,"e-0$1"),r.alternate&&(t=Pt.call(t,asr,"$1."),t=Pt.call(t,ssr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l6.call(r.specifier)?l6.call(t):tsr.call(t),t}p6.exports=fsr});var h6=s((loe,d6)=>{"use strict";function m6(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function csr(r,e,t){var i=e-r.length;return i<0||(r=t?r+m6(i):m6(i)+r),r}d6.exports=csr});var y6=s((poe,q6)=>{"use strict";var lsr=v6(),psr=c6(),gsr=g6(),msr=h6(),dsr=Hu(),hsr=String.fromCharCode,sa=isNaN,qsr=Array.isArray;function ysr(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function bsr(r){var e,t,i,n,a,u,o,f,v;if(!qsr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,f=0;f<r.length;f++)if(i=r[f],psr(i))u+=i;else{if(e=i.precision!==void 0,i=ysr(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,v=0;v<t.length;v++)switch(n=t.charAt(v),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,sa(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,sa(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=lsr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!sa(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=sa(a)?String(i.arg):hsr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=gsr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=dsr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=msr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}q6.exports=bsr});var w6=s((goe,b6)=>{"use strict";var wsr=y6();b6.exports=wsr});var N6=s((moe,E6)=>{"use strict";var ua=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Esr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function Nsr(r){var e,t,i,n;for(t=[],n=0,i=ua.exec(r);i;)e=r.slice(n,ua.lastIndex-i[0].length),e.length&&t.push(e),t.push(Esr(i)),n=ua.lastIndex,i=ua.exec(r);return e=r.slice(n),e.length&&t.push(e),t}E6.exports=Nsr});var A6=s((doe,O6)=>{"use strict";var Osr=N6();O6.exports=Osr});var T6=s((hoe,S6)=>{"use strict";function Asr(r){return typeof r=="string"}S6.exports=Asr});var L6=s((qoe,I6)=>{"use strict";var Ssr=w6(),Tsr=A6(),_sr=T6();function _6(r){var e,t,i;if(!_sr(r))throw new TypeError(_6("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Tsr(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Ssr.apply(null,t)}I6.exports=_6});var y=s((yoe,R6)=>{"use strict";var Isr=L6();R6.exports=Isr});var j6=s((boe,k6)=>{"use strict";var P6=y(),Kt=Object.prototype,F6=Kt.toString,M6=Kt.__defineGetter__,B6=Kt.__defineSetter__,Lsr=Kt.__lookupGetter__,Rsr=Kt.__lookupSetter__;function Psr(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||F6.call(r)==="[object Array]")throw new TypeError(P6("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||F6.call(t)==="[object Array]")throw new TypeError(P6("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(Lsr.call(r,e)||Rsr.call(r,e)?(i=r.__proto__,r.__proto__=Kt,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&M6&&M6.call(r,e,t.get),u&&B6&&B6.call(r,e,t.set),r}k6.exports=Psr});var De=s((woe,C6)=>{"use strict";var Fsr=r6(),Msr=t6(),Bsr=j6(),Wu;Fsr()?Wu=Msr:Wu=Bsr;C6.exports=Wu});var U6=s((Eoe,V6)=>{"use strict";var ksr=De();function jsr(r,e,t){ksr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}V6.exports=jsr});var b=s((Noe,G6)=>{"use strict";var Csr=U6();G6.exports=Csr});var W6=s((Ooe,H6)=>{"use strict";var Vsr=De();function Usr(r,e,t){Vsr(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}H6.exports=Usr});var rr=s((Aoe,x6)=>{"use strict";var Gsr=W6();x6.exports=Gsr});var z6=s((Soe,D6)=>{"use strict";function Hsr(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}D6.exports=Hsr});var J6=s((Toe,X6)=>{"use strict";var Wsr=z6();X6.exports=Wsr});var Z6=s((_oe,Y6)=>{"use strict";function xsr(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}Y6.exports=xsr});var xu=s((Ioe,$6)=>{"use strict";var Dsr=Z6();$6.exports=Dsr});var K6=s((Loe,Q6)=>{"use strict";var zsr=xu();function Xsr(r){return zsr(0,r)}Q6.exports=Xsr});var oa=s((Roe,rc)=>{"use strict";var Jsr=K6();rc.exports=Jsr});var ic=s((Poe,tc)=>{"use strict";var nn=J6(),Ysr=oa(),ec=y();function Zsr(r,e,t){var i,n,a,u,o,f,v,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,v=o;v<u;v++)i=[i];for(a=Ysr(u),v=u-1;v>=0;v--)if(c=o-u+v,!(c<0)){if(f=e[c],n=t[v],n!==0&&n<f)throw new Error(ec("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",nn(e).join(", "),nn(t).join(", "),v));if(f===n)a[v]=1;else if(f===1)a[v]=0;else throw new Error(ec("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",nn(e).join(", "),nn(t).join(", "),v))}return{ref:r,data:i,shape:nn(t),strides:a}}tc.exports=Zsr});var Du=s((Foe,nc)=>{"use strict";var $sr=ic();nc.exports=$sr});var uc=s((Moe,sc)=>{"use strict";var ac=Du();function Qsr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,S,x,Q;if(N=e[2],o=N[1],f=N[0],!(o<=0||f<=0))for(F=ac(r[0],e[0],N),S=F.data,O=F.strides,i=O[1],n=O[0],F=ac(r[1],e[1],N),x=F.data,O=F.strides,a=O[1],u=O[0],Q=r[2],p=0,h=0,c=0;c<f;c++){for(l=0,g=0,d=S[p],m=x[h],q=Q[c],v=0;v<o;v++)q[v]=t(d[l],m[g]),l+=i,g+=a;p+=n,h+=u}}sc.exports=Qsr});var zu=s((Boe,oc)=>{"use strict";var Ksr=uc();oc.exports=Ksr});var fc=s((koe,vc)=>{"use strict";var Xu=Du();function rur(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,S,x,Q,G,_r,Ir,or,Rt,Zf;if(Q=e[3],v=Q[1],c=Q[0],!(v<=0||c<=0))for(_r=Xu(r[0],e[0],Q),Ir=_r.data,G=_r.strides,i=G[1],n=G[0],_r=Xu(r[1],e[1],Q),or=_r.data,G=_r.strides,a=G[1],u=G[0],_r=Xu(r[2],e[2],Q),Rt=_r.data,G=_r.strides,o=G[1],f=G[0],Zf=r[3],h=0,m=0,N=0,p=0;p<c;p++){for(g=0,d=0,q=0,O=Ir[h],F=or[m],S=Rt[N],x=Zf[p],l=0;l<v;l++)x[l]=t(O[g],F[d],S[q]),g+=i,d+=a,q+=o;h+=n,m+=u,N+=f}}vc.exports=rur});var Ju=s((joe,cc)=>{"use strict";var eur=fc();cc.exports=eur});var pc=s((Coe,lc)=>{"use strict";function tur(r){var e,t,i,n,a,u,o,f,v,c,l;if(f=r.length,t=[],f===0)return t;if(n=r[0],v=n.length,f===1){for(c=0;c<v;c++)t.push(n[c]);return t}for(e=[v],c=1;c<f;c++)e.push(r[c].length),e[c]>v&&(v=e[c]);for(c=0;c<v;c++)t.push(0);for(c=v-1;c>=0;){for(a=e[0]-v+c,a>=0?i=n[a]:i=1,l=1;l<f;l++){if(u=e[l]-v+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}lc.exports=tur});var va=s((Voe,gc)=>{"use strict";var iur=pc();gc.exports=iur});var dc=s((Uoe,mc)=>{"use strict";var nur=xu();function aur(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(nur(r,i));return t}mc.exports=aur});var fa=s((Goe,hc)=>{"use strict";var sur=dc();hc.exports=sur});var yc=s((Hoe,qc)=>{"use strict";function uur(r,e,t){var i,n,a,u,o,f;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],f=0;f<a;f++)n.push(e.call(t,[o,f]));i.push(n)}return i}qc.exports=uur});var wc=s((Woe,bc)=>{"use strict";var our=yc();bc.exports=our});var Nc=s((xoe,Ec)=>{"use strict";function vur(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}Ec.exports=vur});var Yu=s((Doe,Oc)=>{"use strict";var fur=Nc();Oc.exports=fur});var Sc=s((zoe,Ac)=>{"use strict";var cur=/./;Ac.exports=cur});var Zu=s((Xoe,Tc)=>{"use strict";function lur(r){return typeof r=="boolean"}Tc.exports=lur});var Ic=s((Joe,_c)=>{"use strict";function pur(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}_c.exports=pur});var Rc=s((Yoe,Lc)=>{"use strict";var gur=Ic();Lc.exports=gur});var Fc=s((Zoe,Pc)=>{"use strict";var mur=Rc(),dur=mur();function hur(){return dur&&typeof Symbol.toStringTag=="symbol"}Pc.exports=hur});var ri=s(($oe,Mc)=>{"use strict";var qur=Fc();Mc.exports=qur});var $u=s((Qoe,Bc)=>{"use strict";var yur=Object.prototype.toString;Bc.exports=yur});var jc=s((Koe,kc)=>{"use strict";var bur=$u();function wur(r){return bur.call(r)}kc.exports=wur});var Vc=s((r2e,Cc)=>{"use strict";var Eur=Object.prototype.hasOwnProperty;function Nur(r,e){return r==null?!1:Eur.call(r,e)}Cc.exports=Nur});var A=s((e2e,Uc)=>{"use strict";var Our=Vc();Uc.exports=Our});var Hc=s((t2e,Gc)=>{"use strict";var Aur=typeof Symbol=="function"?Symbol:void 0;Gc.exports=Aur});var Qu=s((i2e,Wc)=>{"use strict";var Sur=Hc();Wc.exports=Sur});var zc=s((n2e,Dc)=>{"use strict";var xc=Qu(),Tur=typeof xc=="function"?xc.toStringTag:"";Dc.exports=Tur});var Jc=s((a2e,Xc)=>{"use strict";var _ur=A(),an=zc(),Ku=$u();function Iur(r){var e,t,i;if(r==null)return Ku.call(r);t=r[an],e=_ur(r,an);try{r[an]=void 0}catch{return Ku.call(r)}return i=Ku.call(r),e?r[an]=t:delete r[an],i}Xc.exports=Iur});var er=s((s2e,Yc)=>{"use strict";var Lur=ri(),Rur=jc(),Pur=Jc(),ro;Lur()?ro=Pur:ro=Rur;Yc.exports=ro});var $c=s((u2e,Zc)=>{"use strict";var Fur=Boolean;Zc.exports=Fur});var eo=s((o2e,Qc)=>{"use strict";var Mur=$c();Qc.exports=Mur});var r4=s((v2e,Kc)=>{"use strict";var Bur=Boolean.prototype.toString;Kc.exports=Bur});var t4=s((f2e,e4)=>{"use strict";var kur=r4();function jur(r){try{return kur.call(r),!0}catch{return!1}}e4.exports=jur});var to=s((c2e,i4)=>{"use strict";var Cur=ri(),Vur=er(),Uur=eo(),Gur=t4(),Hur=Cur();function Wur(r){return typeof r=="object"?r instanceof Uur?!0:Hur?Gur(r):Vur(r)==="[object Boolean]":!1}i4.exports=Wur});var a4=s((l2e,n4)=>{"use strict";var xur=Zu(),Dur=to();function zur(r){return xur(r)||Dur(r)}n4.exports=zur});var gr=s((p2e,u4)=>{"use strict";var s4=b(),io=a4(),Xur=Zu(),Jur=to();s4(io,"isPrimitive",Xur);s4(io,"isObject",Jur);u4.exports=io});var v4=s((g2e,o4)=>{"use strict";function Yur(){return new Function("return this;")()}o4.exports=Yur});var c4=s((m2e,f4)=>{"use strict";var Zur=typeof self=="object"?self:null;f4.exports=Zur});var p4=s((d2e,l4)=>{"use strict";var $ur=typeof window=="object"?window:null;l4.exports=$ur});var m4=s((h2e,g4)=>{"use strict";var Qur=typeof globalThis=="object"?globalThis:null;g4.exports=Qur});var no=s((q2e,y4)=>{"use strict";var Kur=gr().isPrimitive,ror=y(),eor=v4(),d4=c4(),h4=p4(),q4=m4();function tor(r){if(arguments.length){if(!Kur(r))throw new TypeError(ror("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return eor()}if(q4)return q4;if(d4)return d4;if(h4)return h4;throw new Error("unexpected error. Unable to resolve global object.")}y4.exports=tor});var E4=s((y2e,w4)=>{"use strict";var ior=no(),b4=ior(),nor=b4.document&&b4.document.childNodes;w4.exports=nor});var O4=s((b2e,N4)=>{"use strict";var aor=Int8Array;N4.exports=aor});var S4=s((w2e,A4)=>{"use strict";var sor=Sc(),uor=E4(),oor=O4();function vor(){return typeof sor=="function"||typeof oor=="object"||typeof uor=="function"}A4.exports=vor});var ao=s((E2e,T4)=>{"use strict";function cor(){return/^\s*function\s*([^(]*)/i}T4.exports=cor});var I4=s((N2e,_4)=>{"use strict";var lor=ao(),por=lor();_4.exports=por});var so=s((O2e,R4)=>{"use strict";var gor=b(),L4=ao(),mor=I4();gor(L4,"REGEXP",mor);R4.exports=L4});var F4=s((A2e,P4)=>{"use strict";var dor=er(),uo;function hor(r){return dor(r)==="[object Array]"}Array.isArray?uo=Array.isArray:uo=hor;P4.exports=uo});var mr=s((S2e,M4)=>{"use strict";var qor=F4();M4.exports=qor});var k4=s((T2e,B4)=>{"use strict";var yor=mr(),bor=y();function wor(r){if(typeof r!="function")throw new TypeError(bor("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!yor(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}B4.exports=wor});var C4=s((_2e,j4)=>{"use strict";var Eor=k4();j4.exports=Eor});var U4=s((I2e,V4)=>{"use strict";function Nor(r){return r!==null&&typeof r=="object"}V4.exports=Nor});var vo=s((L2e,G4)=>{"use strict";var Oor=b(),Aor=C4(),oo=U4(),Sor=Aor(oo);Oor(oo,"isObjectLikeArray",Sor);G4.exports=oo});var W4=s((R2e,H4)=>{"use strict";var Tor=vo();function _or(r){return Tor(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}H4.exports=_or});var Ft=s((P2e,x4)=>{"use strict";var Ior=W4();x4.exports=Ior});var z4=s((F2e,D4)=>{"use strict";var Lor=er(),Ror=so().REGEXP,Por=Ft();function For(r){var e,t,i;if(t=Lor(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Ror.exec(i.toString()),e)return e[1]}return Por(r)?"Buffer":t}D4.exports=For});var ze=s((M2e,X4)=>{"use strict";var Mor=z4();X4.exports=Mor});var Y4=s((B2e,J4)=>{"use strict";var Bor=ze();function kor(r){var e;return r===null?"null":(e=typeof r,e==="object"?Bor(r).toLowerCase():e)}J4.exports=kor});var $4=s((k2e,Z4)=>{"use strict";var jor=ze();function Cor(r){return jor(r).toLowerCase()}Z4.exports=Cor});var ca=s((j2e,Q4)=>{"use strict";var Vor=S4(),Uor=Y4(),Gor=$4(),Hor=Vor()?Gor:Uor;Q4.exports=Hor});var rl=s((C2e,K4)=>{"use strict";var Wor=ca();function xor(r){return Wor(r)==="function"}K4.exports=xor});var _=s((V2e,el)=>{"use strict";var Dor=rl();el.exports=Dor});var il=s((U2e,tl)=>{"use strict";var zor=Math.floor;tl.exports=zor});var X=s((G2e,nl)=>{"use strict";var Xor=il();nl.exports=Xor});var sl=s((H2e,al)=>{"use strict";var Jor=X();function Yor(r){return Jor(r)===r}al.exports=Yor});var Lr=s((W2e,ul)=>{"use strict";var Zor=sl();ul.exports=Zor});var vl=s((x2e,ol)=>{"use strict";var $or=9007199254740991;ol.exports=$or});var cl=s((D2e,fl)=>{"use strict";var Qor=Lr(),Kor=vl();function r2r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Qor(r.length)&&r.length>=0&&r.length<=Kor}fl.exports=r2r});var Wr=s((z2e,ll)=>{"use strict";var e2r=cl();ll.exports=e2r});var gl=s((X2e,pl)=>{"use strict";var t2r=_();function i2r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&t2r(r.next)}pl.exports=i2r});var dl=s((J2e,ml)=>{"use strict";var n2r=gl();ml.exports=n2r});var yl=s((Y2e,ql)=>{"use strict";var hl="function";function a2r(r){return typeof r.get===hl&&typeof r.set===hl}ql.exports=a2r});var fo=s((Z2e,bl)=>{"use strict";var s2r=yl();bl.exports=s2r});var Nl=s(($2e,El)=>{"use strict";var wl={complex128:u2r,complex64:o2r,default:v2r};function u2r(r,e,t){r.set(t,e)}function o2r(r,e,t){r.set(t,e)}function v2r(r,e,t){r.set(t,e)}function f2r(r){var e=wl[r];return typeof e=="function"?e:wl.default}El.exports=f2r});var co=s((Q2e,Ol)=>{"use strict";var c2r=Nl();Ol.exports=c2r});var Tl=s((K2e,Sl)=>{"use strict";var Al={float64:l2r,float32:p2r,int32:g2r,int16:m2r,int8:d2r,uint32:h2r,uint16:q2r,uint8:y2r,uint8c:b2r,generic:w2r,default:E2r};function l2r(r,e,t){r[e]=t}function p2r(r,e,t){r[e]=t}function g2r(r,e,t){r[e]=t}function m2r(r,e,t){r[e]=t}function d2r(r,e,t){r[e]=t}function h2r(r,e,t){r[e]=t}function q2r(r,e,t){r[e]=t}function y2r(r,e,t){r[e]=t}function b2r(r,e,t){r[e]=t}function w2r(r,e,t){r[e]=t}function E2r(r,e,t){r[e]=t}function N2r(r){var e=Al[r];return typeof e=="function"?e:Al.default}Sl.exports=N2r});var lo=s((r1e,_l)=>{"use strict";var O2r=Tl();_l.exports=O2r});var Ll=s((e1e,Il)=>{"use strict";var A2r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};Il.exports=A2r});var Pl=s((t1e,Rl)=>{"use strict";var S2r=er(),T2r=typeof Float64Array=="function";function _2r(r){return T2r&&r instanceof Float64Array||S2r(r)==="[object Float64Array]"}Rl.exports=_2r});var Ml=s((i1e,Fl)=>{"use strict";var I2r=Pl();Fl.exports=I2r});var kl=s((n1e,Bl)=>{"use strict";var L2r=typeof Float64Array=="function"?Float64Array:null;Bl.exports=L2r});var Vl=s((a1e,Cl)=>{"use strict";var R2r=Ml(),jl=kl();function P2r(){var r,e;if(typeof jl!="function")return!1;try{e=new jl([1,3.14,-3.14,NaN]),r=R2r(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}Cl.exports=P2r});var po=s((s1e,Ul)=>{"use strict";var F2r=Vl();Ul.exports=F2r});var Hl=s((u1e,Gl)=>{"use strict";var M2r=typeof Float64Array=="function"?Float64Array:void 0;Gl.exports=M2r});var xl=s((o1e,Wl)=>{"use strict";function B2r(){throw new Error("not implemented")}Wl.exports=B2r});var cr=s((v1e,Dl)=>{"use strict";var k2r=po(),j2r=Hl(),C2r=xl(),go;k2r()?go=j2r:go=C2r;Dl.exports=go});var Xl=s((f1e,zl)=>{"use strict";var V2r=er(),U2r=typeof Float32Array=="function";function G2r(r){return U2r&&r instanceof Float32Array||V2r(r)==="[object Float32Array]"}zl.exports=G2r});var Yl=s((c1e,Jl)=>{"use strict";var H2r=Xl();Jl.exports=H2r});var I=s((l1e,Zl)=>{"use strict";var W2r=Number.POSITIVE_INFINITY;Zl.exports=W2r});var Ql=s((p1e,$l)=>{"use strict";var x2r=typeof Float32Array=="function"?Float32Array:null;$l.exports=x2r});var e8=s((g1e,r8)=>{"use strict";var D2r=Yl(),z2r=I(),Kl=Ql();function X2r(){var r,e;if(typeof Kl!="function")return!1;try{e=new Kl([1,3.14,-3.14,5e40]),r=D2r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===z2r}catch{r=!1}return r}r8.exports=X2r});var i8=s((m1e,t8)=>{"use strict";var J2r=e8();t8.exports=J2r});var a8=s((d1e,n8)=>{"use strict";var Y2r=typeof Float32Array=="function"?Float32Array:void 0;n8.exports=Y2r});var u8=s((h1e,s8)=>{"use strict";function Z2r(){throw new Error("not implemented")}s8.exports=Z2r});var Zr=s((q1e,o8)=>{"use strict";var $2r=i8(),Q2r=a8(),K2r=u8(),mo;$2r()?mo=Q2r:mo=K2r;o8.exports=mo});var f8=s((y1e,v8)=>{"use strict";var r1r=er(),e1r=typeof Uint32Array=="function";function t1r(r){return e1r&&r instanceof Uint32Array||r1r(r)==="[object Uint32Array]"}v8.exports=t1r});var ve=s((b1e,c8)=>{"use strict";var i1r=f8();c8.exports=i1r});var ei=s((w1e,l8)=>{"use strict";var n1r=4294967295;l8.exports=n1r});var g8=s((E1e,p8)=>{"use strict";var a1r=typeof Uint32Array=="function"?Uint32Array:null;p8.exports=a1r});var h8=s((N1e,d8)=>{"use strict";var s1r=ve(),ho=ei(),m8=g8();function u1r(){var r,e;if(typeof m8!="function")return!1;try{e=[1,3.14,-3.14,ho+1,ho+2],e=new m8(e),r=s1r(e)&&e[0]===1&&e[1]===3&&e[2]===ho-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}d8.exports=u1r});var y8=s((O1e,q8)=>{"use strict";var o1r=h8();q8.exports=o1r});var w8=s((A1e,b8)=>{"use strict";var v1r=typeof Uint32Array=="function"?Uint32Array:void 0;b8.exports=v1r});var N8=s((S1e,E8)=>{"use strict";function f1r(){throw new Error("not implemented")}E8.exports=f1r});var lr=s((T1e,O8)=>{"use strict";var c1r=y8(),l1r=w8(),p1r=N8(),qo;c1r()?qo=l1r:qo=p1r;O8.exports=qo});var S8=s((_1e,A8)=>{"use strict";var g1r=er(),m1r=typeof Int32Array=="function";function d1r(r){return m1r&&r instanceof Int32Array||g1r(r)==="[object Int32Array]"}A8.exports=d1r});var la=s((I1e,T8)=>{"use strict";var h1r=S8();T8.exports=h1r});var ti=s((L1e,_8)=>{"use strict";var q1r=2147483647;_8.exports=q1r});var L8=s((R1e,I8)=>{"use strict";var y1r=-2147483648;I8.exports=y1r});var P8=s((P1e,R8)=>{"use strict";var b1r=typeof Int32Array=="function"?Int32Array:null;R8.exports=b1r});var B8=s((F1e,M8)=>{"use strict";var w1r=la(),E1r=ti(),N1r=L8(),F8=P8();function O1r(){var r,e;if(typeof F8!="function")return!1;try{e=new F8([1,3.14,-3.14,E1r+1]),r=w1r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===N1r}catch{r=!1}return r}M8.exports=O1r});var j8=s((M1e,k8)=>{"use strict";var A1r=B8();k8.exports=A1r});var V8=s((B1e,C8)=>{"use strict";var S1r=typeof Int32Array=="function"?Int32Array:void 0;C8.exports=S1r});var G8=s((k1e,U8)=>{"use strict";function T1r(){throw new Error("not implemented")}U8.exports=T1r});var Xe=s((j1e,H8)=>{"use strict";var _1r=j8(),I1r=V8(),L1r=G8(),yo;_1r()?yo=I1r:yo=L1r;H8.exports=yo});var x8=s((C1e,W8)=>{"use strict";var R1r=er(),P1r=typeof Uint16Array=="function";function F1r(r){return P1r&&r instanceof Uint16Array||R1r(r)==="[object Uint16Array]"}W8.exports=F1r});var z8=s((V1e,D8)=>{"use strict";var M1r=x8();D8.exports=M1r});var J8=s((U1e,X8)=>{"use strict";var B1r=65535;X8.exports=B1r});var Z8=s((G1e,Y8)=>{"use strict";var k1r=typeof Uint16Array=="function"?Uint16Array:null;Y8.exports=k1r});var K8=s((H1e,Q8)=>{"use strict";var j1r=z8(),bo=J8(),$8=Z8();function C1r(){var r,e;if(typeof $8!="function")return!1;try{e=[1,3.14,-3.14,bo+1,bo+2],e=new $8(e),r=j1r(e)&&e[0]===1&&e[1]===3&&e[2]===bo-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Q8.exports=C1r});var e5=s((W1e,r5)=>{"use strict";var V1r=K8();r5.exports=V1r});var i5=s((x1e,t5)=>{"use strict";var U1r=typeof Uint16Array=="function"?Uint16Array:void 0;t5.exports=U1r});var a5=s((D1e,n5)=>{"use strict";function G1r(){throw new Error("not implemented")}n5.exports=G1r});var Mt=s((z1e,s5)=>{"use strict";var H1r=e5(),W1r=i5(),x1r=a5(),wo;H1r()?wo=W1r:wo=x1r;s5.exports=wo});var o5=s((X1e,u5)=>{"use strict";var D1r=er(),z1r=typeof Int16Array=="function";function X1r(r){return z1r&&r instanceof Int16Array||D1r(r)==="[object Int16Array]"}u5.exports=X1r});var f5=s((J1e,v5)=>{"use strict";var J1r=o5();v5.exports=J1r});var l5=s((Y1e,c5)=>{"use strict";var Y1r=32767;c5.exports=Y1r});var g5=s((Z1e,p5)=>{"use strict";var Z1r=-32768;p5.exports=Z1r});var d5=s(($1e,m5)=>{"use strict";var $1r=typeof Int16Array=="function"?Int16Array:null;m5.exports=$1r});var y5=s((Q1e,q5)=>{"use strict";var Q1r=f5(),K1r=l5(),r3r=g5(),h5=d5();function e3r(){var r,e;if(typeof h5!="function")return!1;try{e=new h5([1,3.14,-3.14,K1r+1]),r=Q1r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===r3r}catch{r=!1}return r}q5.exports=e3r});var w5=s((K1e,b5)=>{"use strict";var t3r=y5();b5.exports=t3r});var N5=s((r3e,E5)=>{"use strict";var i3r=typeof Int16Array=="function"?Int16Array:void 0;E5.exports=i3r});var A5=s((e3e,O5)=>{"use strict";function n3r(){throw new Error("not implemented")}O5.exports=n3r});var ii=s((t3e,S5)=>{"use strict";var a3r=w5(),s3r=N5(),u3r=A5(),Eo;a3r()?Eo=s3r:Eo=u3r;S5.exports=Eo});var _5=s((i3e,T5)=>{"use strict";var o3r=er(),v3r=typeof Uint8Array=="function";function f3r(r){return v3r&&r instanceof Uint8Array||o3r(r)==="[object Uint8Array]"}T5.exports=f3r});var L5=s((n3e,I5)=>{"use strict";var c3r=_5();I5.exports=c3r});var P5=s((a3e,R5)=>{"use strict";var l3r=255;R5.exports=l3r});var M5=s((s3e,F5)=>{"use strict";var p3r=typeof Uint8Array=="function"?Uint8Array:null;F5.exports=p3r});var j5=s((u3e,k5)=>{"use strict";var g3r=L5(),No=P5(),B5=M5();function m3r(){var r,e;if(typeof B5!="function")return!1;try{e=[1,3.14,-3.14,No+1,No+2],e=new B5(e),r=g3r(e)&&e[0]===1&&e[1]===3&&e[2]===No-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}k5.exports=m3r});var V5=s((o3e,C5)=>{"use strict";var d3r=j5();C5.exports=d3r});var G5=s((v3e,U5)=>{"use strict";var h3r=typeof Uint8Array=="function"?Uint8Array:void 0;U5.exports=h3r});var W5=s((f3e,H5)=>{"use strict";function q3r(){throw new Error("not implemented")}H5.exports=q3r});var $r=s((c3e,x5)=>{"use strict";var y3r=V5(),b3r=G5(),w3r=W5(),Oo;y3r()?Oo=b3r:Oo=w3r;x5.exports=Oo});var z5=s((l3e,D5)=>{"use strict";var E3r=er(),N3r=typeof Uint8ClampedArray=="function";function O3r(r){return N3r&&r instanceof Uint8ClampedArray||E3r(r)==="[object Uint8ClampedArray]"}D5.exports=O3r});var J5=s((p3e,X5)=>{"use strict";var A3r=z5();X5.exports=A3r});var Z5=s((g3e,Y5)=>{"use strict";var S3r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;Y5.exports=S3r});var K5=s((m3e,Q5)=>{"use strict";var T3r=J5(),$5=Z5();function _3r(){var r,e;if(typeof $5!="function")return!1;try{e=new $5([-1,0,1,3.14,4.99,255,256]),r=T3r(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}Q5.exports=_3r});var e7=s((d3e,r7)=>{"use strict";var I3r=K5();r7.exports=I3r});var i7=s((h3e,t7)=>{"use strict";var L3r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;t7.exports=L3r});var a7=s((q3e,n7)=>{"use strict";function R3r(){throw new Error("not implemented")}n7.exports=R3r});var ni=s((y3e,s7)=>{"use strict";var P3r=e7(),F3r=i7(),M3r=a7(),Ao;P3r()?Ao=F3r:Ao=M3r;s7.exports=Ao});var o7=s((b3e,u7)=>{"use strict";var B3r=er(),k3r=typeof Int8Array=="function";function j3r(r){return k3r&&r instanceof Int8Array||B3r(r)==="[object Int8Array]"}u7.exports=j3r});var f7=s((w3e,v7)=>{"use strict";var C3r=o7();v7.exports=C3r});var l7=s((E3e,c7)=>{"use strict";var V3r=127;c7.exports=V3r});var g7=s((N3e,p7)=>{"use strict";var U3r=-128;p7.exports=U3r});var d7=s((O3e,m7)=>{"use strict";var G3r=typeof Int8Array=="function"?Int8Array:null;m7.exports=G3r});var y7=s((A3e,q7)=>{"use strict";var H3r=f7(),W3r=l7(),x3r=g7(),h7=d7();function D3r(){var r,e;if(typeof h7!="function")return!1;try{e=new h7([1,3.14,-3.14,W3r+1]),r=H3r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===x3r}catch{r=!1}return r}q7.exports=D3r});var w7=s((S3e,b7)=>{"use strict";var z3r=y7();b7.exports=z3r});var N7=s((T3e,E7)=>{"use strict";var X3r=typeof Int8Array=="function"?Int8Array:void 0;E7.exports=X3r});var A7=s((_3e,O7)=>{"use strict";function J3r(){throw new Error("not implemented")}O7.exports=J3r});var ai=s((I3e,S7)=>{"use strict";var Y3r=w7(),Z3r=N7(),$3r=A7(),So;Y3r()?So=Z3r:So=$3r;S7.exports=So});var To=s((L3e,T7)=>{"use strict";function Q3r(r){return typeof r=="number"}T7.exports=Q3r});var I7=s((R3e,_7)=>{"use strict";_7.exports=Number});var pa=s((P3e,L7)=>{"use strict";var K3r=I7();L7.exports=K3r});var P7=s((F3e,R7)=>{"use strict";var rvr=pa(),evr=rvr.prototype.toString;R7.exports=evr});var M7=s((M3e,F7)=>{"use strict";var tvr=P7();function ivr(r){try{return tvr.call(r),!0}catch{return!1}}F7.exports=ivr});var _o=s((B3e,B7)=>{"use strict";var nvr=ri(),avr=er(),svr=pa(),uvr=M7(),ovr=nvr();function vvr(r){return typeof r=="object"?r instanceof svr?!0:ovr?uvr(r):avr(r)==="[object Number]":!1}B7.exports=vvr});var j7=s((k3e,k7)=>{"use strict";var fvr=To(),cvr=_o();function lvr(r){return fvr(r)||cvr(r)}k7.exports=lvr});var j=s((j3e,V7)=>{"use strict";var C7=b(),Io=j7(),pvr=To(),gvr=_o();C7(Io,"isPrimitive",pvr);C7(Io,"isObject",gvr);V7.exports=Io});var V=s((C3e,U7)=>{"use strict";var mvr=pa(),dvr=mvr.NEGATIVE_INFINITY;U7.exports=dvr});var Lo=s((V3e,G7)=>{"use strict";var hvr=I(),qvr=V(),yvr=Lr();function bvr(r){return r<hvr&&r>qvr&&yvr(r)}G7.exports=bvr});var Ro=s((U3e,H7)=>{"use strict";var wvr=j().isPrimitive,Evr=Lo();function Nvr(r){return wvr(r)&&Evr(r)}H7.exports=Nvr});var Po=s((G3e,W7)=>{"use strict";var Ovr=j().isObject,Avr=Lo();function Svr(r){return Ovr(r)&&Avr(r.valueOf())}W7.exports=Svr});var D7=s((H3e,x7)=>{"use strict";var Tvr=Ro(),_vr=Po();function Ivr(r){return Tvr(r)||_vr(r)}x7.exports=Ivr});var kr=s((W3e,X7)=>{"use strict";var z7=b(),Fo=D7(),Lvr=Ro(),Rvr=Po();z7(Fo,"isPrimitive",Lvr);z7(Fo,"isObject",Rvr);X7.exports=Fo});var Mo=s((x3e,J7)=>{"use strict";var Pvr=kr().isPrimitive;function Fvr(r){return Pvr(r)&&r>=0}J7.exports=Fvr});var Bo=s((D3e,Y7)=>{"use strict";var Mvr=kr().isObject;function Bvr(r){return Mvr(r)&&r.valueOf()>=0}Y7.exports=Bvr});var $7=s((z3e,Z7)=>{"use strict";var kvr=Mo(),jvr=Bo();function Cvr(r){return kvr(r)||jvr(r)}Z7.exports=Cvr});var jr=s((X3e,K7)=>{"use strict";var Q7=b(),ko=$7(),Vvr=Mo(),Uvr=Bo();Q7(ko,"isPrimitive",Vvr);Q7(ko,"isObject",Uvr);K7.exports=ko});var e9=s((J3e,r9)=>{"use strict";var Gvr=4294967295;r9.exports=Gvr});var i9=s((Y3e,t9)=>{"use strict";var Hvr=Lr(),Wvr=e9();function xvr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Hvr(r.length)&&r.length>=0&&r.length<=Wvr}t9.exports=xvr});var Bt=s((Z3e,n9)=>{"use strict";var Dvr=i9();n9.exports=Dvr});var s9=s(($3e,a9)=>{"use strict";var zvr=er(),Xvr=typeof ArrayBuffer=="function";function Jvr(r){return Xvr&&r instanceof ArrayBuffer||zvr(r)==="[object ArrayBuffer]"}a9.exports=Jvr});var ga=s((Q3e,u9)=>{"use strict";var Yvr=s9();u9.exports=Yvr});var v9=s((K3e,o9)=>{"use strict";var Zvr=mr();function $vr(r){return typeof r=="object"&&r!==null&&!Zvr(r)}o9.exports=$vr});var ma=s((rve,f9)=>{"use strict";var Qvr=v9();f9.exports=Qvr});var l9=s((eve,c9)=>{"use strict";function Kvr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}c9.exports=Kvr});var g9=s((tve,p9)=>{"use strict";function rfr(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}p9.exports=rfr});var y9=s((ive,q9)=>{"use strict";var m9=j().isPrimitive,d9=De(),sn=b(),h9=y(),efr=l9(),tfr=g9();function kt(r,e){if(!(this instanceof kt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!m9(r))throw new TypeError(h9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!m9(e))throw new TypeError(h9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return d9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),d9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}sn(kt,"BYTES_PER_ELEMENT",8);sn(kt.prototype,"BYTES_PER_ELEMENT",8);sn(kt.prototype,"byteLength",16);sn(kt.prototype,"toString",efr);sn(kt.prototype,"toJSON",tfr);q9.exports=kt});var si=s((nve,b9)=>{"use strict";var ifr=y9();b9.exports=ifr});var E9=s((ave,w9)=>{"use strict";var nfr=typeof Math.fround=="function"?Math.fround:null;w9.exports=nfr});var A9=s((sve,O9)=>{"use strict";var afr=Zr(),N9=new afr(1);function sfr(r){return N9[0]=r,N9[0]}O9.exports=sfr});var _9=s((uve,T9)=>{"use strict";var S9=E9(),ufr=A9(),jo;typeof S9=="function"?jo=S9:jo=ufr;T9.exports=jo});var L9=s((ove,I9)=>{"use strict";function ofr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}I9.exports=ofr});var P9=s((vve,R9)=>{"use strict";function vfr(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}R9.exports=vfr});var C9=s((fve,j9)=>{"use strict";var F9=j().isPrimitive,M9=De(),un=b(),B9=_9(),k9=y(),ffr=L9(),cfr=P9();function jt(r,e){if(!(this instanceof jt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!F9(r))throw new TypeError(k9("invalid argument. Real component must be a number. Value: `%s`.",r));if(!F9(e))throw new TypeError(k9("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return M9(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:B9(r)}),M9(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:B9(e)}),this}un(jt,"BYTES_PER_ELEMENT",4);un(jt.prototype,"BYTES_PER_ELEMENT",4);un(jt.prototype,"byteLength",8);un(jt.prototype,"toString",ffr);un(jt.prototype,"toJSON",cfr);j9.exports=jt});var ui=s((cve,V9)=>{"use strict";var lfr=C9();V9.exports=lfr});var G9=s((lve,U9)=>{"use strict";var pfr=si(),gfr=ui();function mfr(r){return r instanceof pfr||r instanceof gfr?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}U9.exports=mfr});var xr=s((pve,H9)=>{"use strict";var dfr=G9();H9.exports=dfr});var x9=s((gve,W9)=>{"use strict";var hfr=Lr();function qfr(r){return hfr(r/2)}W9.exports=qfr});var da=s((mve,D9)=>{"use strict";var yfr=x9();D9.exports=yfr});var X9=s((dve,z9)=>{"use strict";var bfr=A(),ha=Qu();function wfr(){return typeof ha=="function"&&typeof ha("foo")=="symbol"&&bfr(ha,"iterator")&&typeof ha.iterator=="symbol"}z9.exports=wfr});var qa=s((hve,J9)=>{"use strict";var Efr=X9();J9.exports=Efr});var Z9=s((qve,Y9)=>{"use strict";var Nfr=qa(),Ofr=Nfr()?Symbol.iterator:null;Y9.exports=Ofr});var ya=s((yve,$9)=>{"use strict";var Afr=Z9();$9.exports=Afr});var K9=s((bve,Q9)=>{"use strict";var Sfr=De();function Tfr(r,e,t){Sfr(r,e,{configurable:!1,enumerable:!1,get:t})}Q9.exports=Tfr});var R=s((wve,rp)=>{"use strict";var _fr=K9();rp.exports=_fr});var tp=s((Eve,ep)=>{"use strict";function Ifr(r){return r.re}ep.exports=Ifr});var Je=s((Nve,ip)=>{"use strict";var Lfr=tp();ip.exports=Lfr});var ap=s((Ove,np)=>{"use strict";function Rfr(r){return r.im}np.exports=Rfr});var Ye=s((Ave,sp)=>{"use strict";var Pfr=ap();sp.exports=Pfr});var op=s((Sve,up)=>{"use strict";var Ffr=Zr();function Mfr(r,e){return new Ffr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}up.exports=Mfr});var oi=s((Tve,vp)=>{"use strict";var Bfr=op();vp.exports=Bfr});var cp=s((_ve,fp)=>{"use strict";var kfr=cr();function jfr(r,e){return new kfr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}fp.exports=jfr});var vi=s((Ive,lp)=>{"use strict";var Cfr=cp();lp.exports=Cfr});var mp=s((Lve,gp)=>{"use strict";var pp={float64:Vfr,float32:Ufr,int32:Gfr,int16:Hfr,int8:Wfr,uint32:xfr,uint16:Dfr,uint8:zfr,uint8c:Xfr,generic:Jfr,default:Yfr};function Vfr(r,e){return r[e]}function Ufr(r,e){return r[e]}function Gfr(r,e){return r[e]}function Hfr(r,e){return r[e]}function Wfr(r,e){return r[e]}function xfr(r,e){return r[e]}function Dfr(r,e){return r[e]}function zfr(r,e){return r[e]}function Xfr(r,e){return r[e]}function Jfr(r,e){return r[e]}function Yfr(r,e){return r[e]}function Zfr(r){var e=pp[r];return typeof e=="function"?e:pp.default}gp.exports=Zfr});var ba=s((Rve,dp)=>{"use strict";var $fr=mp();dp.exports=$fr});var yp=s((Pve,qp)=>{"use strict";var hp={complex128:Qfr,complex64:Kfr,default:r6r};function Qfr(r,e){return r.get(e)}function Kfr(r,e){return r.get(e)}function r6r(r,e){return r.get(e)}function e6r(r){var e=hp[r];return typeof e=="function"?e:hp.default}qp.exports=e6r});var wa=s((Fve,bp)=>{"use strict";var t6r=yp();bp.exports=t6r});var Ep=s((Mve,wp)=>{"use strict";var i6r=Bt(),n6r=xr(),a6r=Je(),s6r=Ye(),u6r=y();function o6r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,i6r(i)&&i.length>=2)e.push(i[0],i[1]);else if(n6r(i))e.push(a6r(i),s6r(i));else return new TypeError(u6r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}wp.exports=o6r});var Op=s((Bve,Np)=>{"use strict";var v6r=Bt(),f6r=xr(),c6r=Je(),l6r=Ye(),p6r=y();function g6r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),v6r(a)&&a.length>=2)i.push(a[0],a[1]);else if(f6r(a))i.push(c6r(a),l6r(a));else return new TypeError(p6r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}Np.exports=g6r});var Sp=s((kve,Ap)=>{"use strict";var m6r=xr(),d6r=Je(),h6r=Ye();function q6r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!m6r(i))return null;r[a]=d6r(i),r[a+1]=h6r(i),a+=2}return r}Ap.exports=q6r});var Bp=s((jve,Mp)=>{"use strict";var on=jr().isPrimitive,Tp=Bt(),Vo=Wr(),_p=ga(),Ip=ma(),y6r=mr(),Ct=_(),fi=xr(),Ea=da(),Co=Lr(),b6r=qa(),ci=ya(),dr=b(),Aa=R(),Cr=Zr(),Lp=ui(),Z=y(),Na=Je(),Oa=Ye(),w6r=oi(),E6r=vi(),N6r=ba(),O6r=wa(),Rp=Ep(),A6r=Op(),S6r=Sp(),Rr=Cr.BYTES_PER_ELEMENT*2,Pp=b6r();function li(r){return r instanceof tr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function Fp(r){return r===tr||r.name==="Complex128Array"}function T6r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Rr}function _6r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Rr*2}function tr(){var r,e,t,i;if(e=arguments.length,!(this instanceof tr))return e===0?new tr:e===1?new tr(arguments[0]):e===2?new tr(arguments[0],arguments[1]):new tr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Cr(0);else if(e===1)if(on(arguments[0]))t=new Cr(arguments[0]*2);else if(Vo(arguments[0]))if(t=arguments[0],i=t.length,i&&y6r(t)&&fi(t[0])){if(t=S6r(new Cr(i*2),t),t===null){if(!Ea(i))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Cr(arguments[0])}}else{if(T6r(t))t=w6r(t,0);else if(_6r(t))t=E6r(t,0);else if(!Ea(i))throw new RangeError(Z("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Cr(t)}else if(_p(arguments[0])){if(t=arguments[0],!Co(t.byteLength/Rr))throw new RangeError(Z("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Rr,t.byteLength));t=new Cr(t)}else if(Ip(arguments[0])){if(t=arguments[0],Pp===!1)throw new TypeError(Z("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ct(t[ci]))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ci](),!Ct(t.next))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Rp(t),t instanceof Error)throw t;t=new Cr(t)}else throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!_p(t))throw new TypeError(Z("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!on(r))throw new TypeError(Z("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Co(r/Rr))throw new RangeError(Z("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Rr,r));if(e===2){if(i=t.byteLength-r,!Co(i/Rr))throw new RangeError(Z("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Rr,i));t=new Cr(t,r)}else{if(i=arguments[2],!on(i))throw new TypeError(Z("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Rr>t.byteLength-r)throw new RangeError(Z("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Rr));t=new Cr(t,r,i*2)}}return dr(this,"_buffer",t),dr(this,"_length",t.length/2),this}dr(tr,"BYTES_PER_ELEMENT",Rr);dr(tr,"name","Complex64Array");dr(tr,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,g;if(!Ct(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Fp(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Ct(n))throw new TypeError(Z("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(li(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),fi(l))u[g]=Na(l),u[g+1]=Oa(l);else if(Tp(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(Vo(e)){if(n){for(v=e.length,e.get&&e.set?f=O6r("default"):f=N6r("default"),p=0;p<v;p++)if(!fi(f(e,p))){c=!0;break}if(c){if(!Ea(v))throw new RangeError(Z("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),fi(l))u[g]=Na(l),u[g+1]=Oa(l);else if(Tp(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(Ip(e)&&Pp&&Ct(e[ci])){if(u=e[ci](),!Ct(u.next))throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=A6r(u,n,t):o=Rp(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});dr(tr,"of",function(){var e,t;if(!Ct(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Fp(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Aa(tr.prototype,"buffer",function(){return this._buffer.buffer});Aa(tr.prototype,"byteLength",function(){return this._buffer.byteLength});Aa(tr.prototype,"byteOffset",function(){return this._buffer.byteOffset});dr(tr.prototype,"BYTES_PER_ELEMENT",tr.BYTES_PER_ELEMENT);dr(tr.prototype,"copyWithin",function(e,t){if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});dr(tr.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},dr(i,"next",f),dr(i,"return",v),ci&&dr(i,ci,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new Lp(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});dr(tr.prototype,"get",function(e){var t;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!on(e))throw new TypeError(Z("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Lp(t[e],t[e+1])});Aa(tr.prototype,"length",function(){return this._length});dr(tr.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!on(i))throw new TypeError(Z("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(fi(e)){if(i>=this._length)throw new RangeError(Z("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Na(e),n[i+1]=Oa(e);return}if(li(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Rr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Cr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(Vo(e)){for(o=e.length,v=0;v<o;v++)if(!fi(e[v])){u=!0;break}if(u){if(!Ea(o))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Rr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Cr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=Na(f),n[i+1]=Oa(f),i+=2;return}throw new TypeError(Z("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});Mp.exports=tr});var pi=s((Cve,kp)=>{"use strict";var I6r=Bp();kp.exports=I6r});var Cp=s((Vve,jp)=>{"use strict";function L6r(r){return r.re}jp.exports=L6r});var Qr=s((Uve,Vp)=>{"use strict";var R6r=Cp();Vp.exports=R6r});var Gp=s((Gve,Up)=>{"use strict";function P6r(r){return r.im}Up.exports=P6r});var Kr=s((Hve,Hp)=>{"use strict";var F6r=Gp();Hp.exports=F6r});var xp=s((Wve,Wp)=>{"use strict";var M6r=Bt(),B6r=xr(),k6r=y(),j6r=Qr(),C6r=Kr();function V6r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,M6r(i)&&i.length>=2)e.push(i[0],i[1]);else if(B6r(i))e.push(j6r(i),C6r(i));else return new TypeError(k6r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}Wp.exports=V6r});var zp=s((xve,Dp)=>{"use strict";var U6r=Bt(),G6r=xr(),H6r=y(),W6r=Qr(),x6r=Kr();function D6r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),U6r(a)&&a.length>=2)i.push(a[0],a[1]);else if(G6r(a))i.push(W6r(a),x6r(a));else return new TypeError(H6r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}Dp.exports=D6r});var Jp=s((Dve,Xp)=>{"use strict";var z6r=xr(),X6r=Qr(),J6r=Kr();function Y6r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!z6r(i))return null;r[a]=X6r(i),r[a+1]=J6r(i),a+=2}return r}Xp.exports=Y6r});var ig=s((zve,tg)=>{"use strict";var vn=jr().isPrimitive,Yp=Bt(),Go=Wr(),Zp=ga(),$p=ma(),Z6r=mr(),Vt=_(),gi=xr(),Sa=da(),Uo=Lr(),$6r=qa(),mi=ya(),hr=b(),Ia=R(),Vr=cr(),Qp=si(),Ta=Qr(),_a=Kr(),Q6r=oi(),K6r=vi(),rcr=ba(),ecr=wa(),$=y(),Kp=xp(),tcr=zp(),icr=Jp(),Pr=Vr.BYTES_PER_ELEMENT*2,rg=$6r();function di(r){return r instanceof ir||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function eg(r){return r===ir||r.name==="Complex64Array"}function ncr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Pr/2}function acr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Pr}function ir(){var r,e,t,i;if(e=arguments.length,!(this instanceof ir))return e===0?new ir:e===1?new ir(arguments[0]):e===2?new ir(arguments[0],arguments[1]):new ir(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Vr(0);else if(e===1)if(vn(arguments[0]))t=new Vr(arguments[0]*2);else if(Go(arguments[0]))if(t=arguments[0],i=t.length,i&&Z6r(t)&&gi(t[0])){if(t=icr(new Vr(i*2),t),t===null){if(!Sa(i))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Vr(arguments[0])}}else{if(ncr(t))t=Q6r(t,0);else if(acr(t))t=K6r(t,0);else if(!Sa(i))throw new RangeError($("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Vr(t)}else if(Zp(arguments[0])){if(t=arguments[0],!Uo(t.byteLength/Pr))throw new RangeError($("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Pr,t.byteLength));t=new Vr(t)}else if($p(arguments[0])){if(t=arguments[0],rg===!1)throw new TypeError($("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Vt(t[mi]))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[mi](),!Vt(t.next))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=Kp(t),t instanceof Error)throw t;t=new Vr(t)}else throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!Zp(t))throw new TypeError($("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!vn(r))throw new TypeError($("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Uo(r/Pr))throw new RangeError($("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Pr,r));if(e===2){if(i=t.byteLength-r,!Uo(i/Pr))throw new RangeError($("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Pr,i));t=new Vr(t,r)}else{if(i=arguments[2],!vn(i))throw new TypeError($("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Pr>t.byteLength-r)throw new RangeError($("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Pr));t=new Vr(t,r,i*2)}}return hr(this,"_buffer",t),hr(this,"_length",t.length/2),this}hr(ir,"BYTES_PER_ELEMENT",Pr);hr(ir,"name","Complex128Array");hr(ir,"from",function(e){var t,i,n,a,u,o,f,v,c,l,p,g;if(!Vt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!eg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Vt(n))throw new TypeError($("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(di(e)){if(v=e.length,n){for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),gi(l))u[g]=Ta(l),u[g+1]=_a(l);else if(Yp(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if(Go(e)){if(n){for(v=e.length,e.get&&e.set?f=ecr("default"):f=rcr("default"),p=0;p<v;p++)if(!gi(f(e,p))){c=!0;break}if(c){if(!Sa(v))throw new RangeError($("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",v));for(a=new this(v/2),u=a._buffer,p=0;p<v;p++)u[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),u=a._buffer,g=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),gi(l))u[g]=Ta(l),u[g+1]=_a(l);else if(Yp(l)&&l.length>=2)u[g]=l[0],u[g+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));g+=2}return a}return new this(e)}if($p(e)&&rg&&Vt(e[mi])){if(u=e[mi](),!Vt(u.next))throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=tcr(u,n,t):o=Kp(u),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),u=a._buffer,p=0;p<v;p++)u[p]=o[p];return a}throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});hr(ir,"of",function(){var e,t;if(!Vt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!eg(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Ia(ir.prototype,"buffer",function(){return this._buffer.buffer});Ia(ir.prototype,"byteLength",function(){return this._buffer.byteLength});Ia(ir.prototype,"byteOffset",function(){return this._buffer.byteOffset});hr(ir.prototype,"BYTES_PER_ELEMENT",ir.BYTES_PER_ELEMENT);hr(ir.prototype,"copyWithin",function(e,t){if(!di(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});hr(ir.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!di(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},hr(i,"next",f),hr(i,"return",v),mi&&hr(i,mi,c),i;function f(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new Qp(e[o],e[o+1]),{value:[u,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});hr(ir.prototype,"get",function(e){var t;if(!di(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!vn(e))throw new TypeError($("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new Qp(t[e],t[e+1])});Ia(ir.prototype,"length",function(){return this._length});hr(ir.prototype,"set",function(e){var t,i,n,a,u,o,f,v,c;if(!di(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!vn(i))throw new TypeError($("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(gi(e)){if(i>=this._length)throw new RangeError($("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ta(e),n[i+1]=_a(e);return}if(di(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Vr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(Go(e)){for(o=e.length,v=0;v<o;v++)if(!gi(e[v])){u=!0;break}if(u){if(!Sa(o))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Vr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=Ta(f),n[i+1]=_a(f),i+=2;return}throw new TypeError($("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});tg.exports=ir});var hi=s((Xve,ng)=>{"use strict";var scr=ig();ng.exports=scr});var sg=s((Jve,ag)=>{"use strict";var ucr=cr(),ocr=Zr(),vcr=lr(),fcr=Xe(),ccr=Mt(),lcr=ii(),pcr=$r(),gcr=ni(),mcr=ai(),dcr=pi(),hcr=hi(),qcr=[ucr,ocr,fcr,vcr,lcr,ccr,mcr,pcr,gcr,dcr,hcr];ag.exports=qcr});var og=s((Yve,ug)=>{"use strict";var ycr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];ug.exports=ycr});var cg=s((Zve,fg)=>{"use strict";var bcr=Ft(),wcr=mr(),Ecr=ze(),Ncr=Ll(),Ocr=sg(),vg=og(),Acr=vg.length;function Scr(r){var e;if(wcr(r))return"generic";if(bcr(r))return null;for(e=0;e<Acr;e++)if(r instanceof Ocr[e])return vg[e];return Ncr[Ecr(r)]||null}fg.exports=Scr});var La=s(($ve,lg)=>{"use strict";var Tcr=cg();lg.exports=Tcr});var mg=s((Qve,gg)=>{"use strict";var pg=_(),_cr=Wr(),Icr=dl(),Lcr=fo(),Rcr=co(),Pcr=lo(),Fcr=La(),Ho=y();function Mcr(){var r,e,t,i,n,a,u,o,f;if(r=arguments[0],arguments.length>1)if(_cr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!pg(t))throw new TypeError(Ho("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!pg(t))throw new TypeError(Ho("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!Icr(r))throw new TypeError(Ho("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,f=r.next(),!f.done;)i.push(t.call(e,f.value,o));return i}for(;f=r.next(),!f.done;)i.push(f.value);return i}if(n=i.length,u=Fcr(i),Lcr(i)?a=Rcr(u):a=Pcr(u),t){for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,t.call(e,f.value,o));return i}for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,f.value);return i}gg.exports=Mcr});var hg=s((Kve,dg)=>{"use strict";var Bcr=mg();dg.exports=Bcr});var yg=s((rfe,qg)=>{"use strict";function kcr(r){return r!==r}qg.exports=kcr});var E=s((efe,bg)=>{"use strict";var jcr=yg();bg.exports=jcr});var Eg=s((tfe,wg)=>{"use strict";var Ccr={Complex64:"complex64",Complex128:"complex128"};wg.exports=Ccr});var Og=s((ife,Ng)=>{"use strict";var Vcr=ui(),Ucr=si(),Gcr=[Vcr,Ucr];Ng.exports=Gcr});var Sg=s((nfe,Ag)=>{"use strict";var Hcr=["complex64","complex128"];Ag.exports=Hcr});var Ig=s((afe,_g)=>{"use strict";var Wcr=ze(),xcr=Eg(),Dcr=Og(),Tg=Sg(),zcr=Tg.length;function Xcr(r){var e;for(e=0;e<zcr;e++)if(r instanceof Dcr[e])return Tg[e];return xcr[Wcr(r)]||null}_g.exports=Xcr});var Wo=s((sfe,Lg)=>{"use strict";var Jcr=Ig();Lg.exports=Jcr});var Pg=s((ufe,Rg)=>{"use strict";var Ycr=cr(),Zcr=Zr(),$cr=hi(),Qcr=pi(),Kcr={float64:Ycr,float32:Zcr,complex128:$cr,complex64:Qcr};Rg.exports=Kcr});var Mg=s((ofe,Fg)=>{"use strict";var r4r=Pg();function e4r(r){return r4r[r]||null}Fg.exports=e4r});var kg=s((vfe,Bg)=>{"use strict";var t4r=Mg();Bg.exports=t4r});var Cg=s((ffe,jg)=>{"use strict";function i4r(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}jg.exports=i4r});var xg=s((cfe,Wg)=>{"use strict";var n4r=ui(),a4r=si(),Vg=Qr(),Ug=Kr(),Gg=Je(),Hg=Ye();function s4r(r,e,t,i,n,a){var u,o,f,v,c,l,p,g,h,d,m,q,N;if(n===0)return[];if(o=0,r==="float64"?(v=e,l=0):r==="complex64"?(o+=1,v=Gg(e),l=Hg(e)):(v=Vg(e),l=Ug(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=Gg(i),p=Hg(i)):(c=Vg(i),p=Ug(i)),o===2?u=n4r:u=a4r,n===1)return a?[new u(c,p)]:[new u(v,l)];for(f=[new u(v,l)],a?q=n-1:q=n,d=(c-v)/q,m=(p-l)/q,N=1;N<q;N++)g=v+d*N,h=l+m*N,f.push(new u(g,h));return a&&f.push(new u(c,p)),f}Wg.exports=s4r});var xo=s((lfe,Dg)=>{"use strict";function u4r(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}Dg.exports=u4r});var Do=s((pfe,Zg)=>{"use strict";var zg=Qr(),Xg=Kr(),Jg=Je(),Yg=Ye();function o4r(r,e,t,i,n,a,u){var o,f,v,c,l,p,g,h,d;if(a===0)return r;if(e==="float64"?(o=t,v=0):e==="complex64"?(o=Jg(t),v=Yg(t)):(o=zg(t),v=Xg(t)),i==="float64"?(f=n,c=0):i==="complex64"?(f=Jg(n),c=Yg(n)):(f=zg(n),c=Xg(n)),a===1)return u?(r[0]=f,r[1]=c):(r[0]=o,r[1]=v),r;for(r[0]=o,r[1]=v,u?g=a-1:g=a,l=(f-o)/g,p=(c-v)/g,d=2,h=1;h<g;h++)r[d]=o+l*h,r[d+1]=v+p*h,d+=2;return u&&(r[d]=f,r[d+1]=c),r}Zg.exports=o4r});var Qg=s((gfe,$g)=>{"use strict";var v4r=Object;$g.exports=v4r});var qi=s((mfe,Kg)=>{"use strict";var f4r=Qg();Kg.exports=f4r});var em=s((dfe,rm)=>{"use strict";var c4r=Object.getPrototypeOf;rm.exports=c4r});var im=s((hfe,tm)=>{"use strict";function l4r(r){return r.__proto__}tm.exports=l4r});var am=s((qfe,nm)=>{"use strict";var p4r=er(),g4r=im();function m4r(r){var e=g4r(r);return e||e===null?e:p4r(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}nm.exports=m4r});var um=s((yfe,sm)=>{"use strict";var d4r=_(),h4r=em(),q4r=am(),zo;d4r(Object.getPrototypeOf)?zo=h4r:zo=q4r;sm.exports=zo});var vm=s((bfe,om)=>{"use strict";var y4r=qi(),b4r=um();function w4r(r){return r==null?null:(r=y4r(r),b4r(r))}om.exports=w4r});var Ut=s((wfe,fm)=>{"use strict";var E4r=vm();fm.exports=E4r});var pm=s((Efe,lm)=>{"use strict";var N4r=ma(),cm=_(),O4r=Ut(),Ra=A(),A4r=er(),S4r=Object.prototype;function T4r(r){var e;for(e in r)if(!Ra(r,e))return!1;return!0}function _4r(r){var e;return N4r(r)?(e=O4r(r),e?!Ra(r,"constructor")&&Ra(e,"constructor")&&cm(e.constructor)&&A4r(e.constructor)==="[object Function]"&&Ra(e,"isPrototypeOf")&&cm(e.isPrototypeOf)&&(e===S4r||T4r(r)):!0):!1}lm.exports=_4r});var L=s((Nfe,gm)=>{"use strict";var I4r=pm();gm.exports=I4r});var Xo=s((Ofe,mm)=>{"use strict";function L4r(r){return typeof r=="string"}mm.exports=L4r});var hm=s((Afe,dm)=>{"use strict";var R4r=String.prototype.valueOf;dm.exports=R4r});var ym=s((Sfe,qm)=>{"use strict";var P4r=hm();function F4r(r){try{return P4r.call(r),!0}catch{return!1}}qm.exports=F4r});var Jo=s((Tfe,bm)=>{"use strict";var M4r=ri(),B4r=er(),k4r=ym(),j4r=M4r();function C4r(r){return typeof r=="object"?r instanceof String?!0:j4r?k4r(r):B4r(r)==="[object String]":!1}bm.exports=C4r});var Em=s((_fe,wm)=>{"use strict";var V4r=Xo(),U4r=Jo();function G4r(r){return V4r(r)||U4r(r)}wm.exports=G4r});var K=s((Ife,Om)=>{"use strict";var Nm=b(),Yo=Em(),H4r=Xo(),W4r=Jo();Nm(Yo,"isPrimitive",H4r);Nm(Yo,"isObject",W4r);Om.exports=Yo});var $o=s((Lfe,Sm)=>{"use strict";var x4r=L(),Am=A(),D4r=K().isPrimitive,z4r=gr().isPrimitive,Zo=y();function X4r(r,e){return x4r(e)?Am(e,"dtype")&&(r.dtype=e.dtype,!D4r(r.dtype))?new TypeError(Zo("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):Am(e,"endpoint")&&(r.endpoint=e.endpoint,!z4r(r.endpoint))?new TypeError(Zo("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(Zo("invalid argument. Options argument must be an object. Value: `%s`.",e))}Sm.exports=X4r});var Qo=s((Rfe,J4r)=>{J4r.exports={endpoint:!0}});var Fm=s((Pfe,Pm)=>{"use strict";var Tm=xr(),_m=j().isPrimitive,Y4r=jr().isPrimitive,Im=E(),Lm=Wo(),Z4r=kg(),$4r=oi(),Q4r=vi(),yi=y(),K4r=Cg(),rlr=xg(),elr=xo(),Rm=Do(),tlr=$o(),ilr=Qo();function nlr(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(o=Lm(r),o===null){if(!Tm(r))throw new TypeError(yi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}v=!0}else{if(!_m(r)||Im(r))throw new TypeError(yi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(f=Lm(e),f===null){if(!Tm(e))throw new TypeError(yi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="complex128"}v=!0}else{if(!_m(e)||Im(e))throw new TypeError(yi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="float64"}if(!Y4r(t))throw new TypeError(yi("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:ilr.endpoint},o===f?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=tlr(i,arguments[3]),a))throw a;if(i.dtype==="generic")return v?rlr(o,r,f,e,t,i.endpoint):K4r(r,e,t,i.endpoint);if(n=Z4r(i.dtype),n===null)throw new TypeError(yi('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return Rm($4r(u,0),o,r,f,e,t,i.endpoint),u;if(i.dtype==="complex128")return Rm(Q4r(u,0),o,r,f,e,t,i.endpoint),u;if(v)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return elr(u,r,e,t,i.endpoint)}Pm.exports=nlr});var Bm=s((Ffe,Mm)=>{"use strict";var alr=fo(),slr=ba(),ulr=lo(),olr=wa(),vlr=co(),flr=La();function clr(r){var e=flr(r);return alr(r)?{accessorProtocol:!0,accessors:[olr(e),vlr(e)]}:{accessorProtocol:!1,accessors:[slr(e),ulr(e)]}}Mm.exports=clr});var jm=s((Mfe,km)=>{"use strict";var llr=Bm();km.exports=llr});var Vm=s((Bfe,Cm)=>{"use strict";var plr=jm();function glr(r){var e=plr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}Cm.exports=glr});var fn=s((kfe,Um)=>{"use strict";var mlr=Vm();Um.exports=mlr});var zm=s((jfe,Dm)=>{"use strict";var dlr=ui(),hlr=si(),Gm=Qr(),Hm=Kr(),Wm=Je(),xm=Ye();function qlr(r,e,t,i,n,a,u){var o,f,v,c,l,p,g,h,d,m,q,N,O,F;if(a===0)return r;if(f=0,e==="float64"?(v=t,l=0):e==="complex64"?(f+=1,v=Wm(t),l=xm(t)):(v=Gm(t),l=Hm(t)),i==="float64"?(c=n,p=0):i==="complex64"?(f+=1,c=Wm(n),p=xm(n)):(c=Gm(n),p=Hm(n)),f===2?o=dlr:o=hlr,h=r.data,g=r.accessors[1],a===1)return u?g(h,0,new o(c,p)):g(h,0,new o(v,l)),r;for(g(h,0,new o(v,l)),u?O=a-1:O=a,q=(c-v)/O,N=(p-l)/O,F=1;F<O;F++)d=v+q*F,m=l+N*F,g(h,F,new o(d,m));return u&&g(h,O,new o(c,p)),r}Dm.exports=qlr});var Jm=s((Cfe,Xm)=>{"use strict";function ylr(r,e,t,i,n){var a,u,o,f,v;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,f=(t-e)/o,v=1;v<o;v++)u(a,v,e+f*v);return n&&u(a,o,t),r}Xm.exports=ylr});var td=s((Vfe,ed)=>{"use strict";var Ym=xr(),Zm=j().isPrimitive,blr=Wr(),cn=y(),$m=E(),Qm=Wo(),wlr=La(),Elr=oi(),Nlr=vi(),Km=fn(),Olr=zm(),Alr=Jm(),rd=Do(),Slr=xo(),Tlr=$o(),_lr=Qo();function Ilr(r,e,t){var i,n,a,u,o,f,v;if(typeof r=="object"){if(a=Qm(r),a===null){if(!Ym(r))throw new TypeError(cn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!Zm(r)||$m(r))throw new TypeError(cn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=Qm(e),u===null){if(!Ym(e))throw new TypeError(cn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!Zm(e)||$m(e))throw new TypeError(cn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!blr(t))throw new TypeError(cn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:_lr.endpoint},arguments.length>3&&(n=Tlr(i,arguments[3]),n))throw n;if(f=wlr(t),f===null&&(f="generic"),f==="complex64")return rd(Elr(t,0),a,r,u,e,t.length,i.endpoint),t;if(f==="complex128")return rd(Nlr(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(f==="generic")return v=Km(t),Olr(v,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return v=Km(t),v.accessorProtocol?(Alr(v,r,e,t.length,i.endpoint),t):(Slr(t,r,e,t.length,i.endpoint),t)}ed.exports=Ilr});var ad=s((Ufe,nd)=>{"use strict";var Llr=b(),id=Fm(),Rlr=td();Llr(id,"assign",Rlr);nd.exports=id});var ud=s((Gfe,sd)=>{"use strict";var Plr=j().isPrimitive,Flr=K().isPrimitive,Mlr=gr().isPrimitive,Blr=mr(),klr=y(),jlr={number:Plr,string:Flr,boolean:Mlr};function Clr(r,e,t){var i,n,a,u,o,f;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],f=0;f<r.length;f++)if(o=r[f],a=e[f],u=jlr[a],u(o))i.push([[o]]),n.push([1,1]);else if(Blr(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(klr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[f],a,a,String(o)));return[i,n]}sd.exports=Clr});var Pa=s((Hfe,od)=>{"use strict";var Vlr=ud();od.exports=Vlr});var fd=s((Wfe,vd)=>{"use strict";var Ulr=fa();function Glr(r){return Ulr(1,r)}vd.exports=Glr});var ld=s((xfe,cd)=>{"use strict";var Hlr=fd();cd.exports=Hlr});var gd=s((Dfe,pd)=>{"use strict";function Wlr(r,e,t){var i,n,a,u,o,f,v,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(v=r[0],c=r[1],u=0;u<n;u++)for(o=v[u],f=c[u],a=0;a<i;a++)f[a]=t(o[a])}pd.exports=Wlr});var Ko=s((zfe,md)=>{"use strict";var xlr=gd();md.exports=xlr});var hd=s((Xfe,dd)=>{"use strict";var Dlr=fa();function zlr(r){return Dlr(0,r)}dd.exports=zlr});var Fa=s((Jfe,qd)=>{"use strict";var Xlr=hd();qd.exports=Xlr});var bd=s((Yfe,yd)=>{"use strict";var Fr=rr(),Jlr=zu(),Ylr=Ju(),Zlr=va(),$lr=fa(),Qlr=wc(),Klr=Yu(),r8r=hg(),e8r=ad(),t8r=Pa(),i8r=ld(),n8r=Ko(),a8r=oa(),s8r=Fa();function u8r(r){return Fr(r,"bbinary2d",Jlr),Fr(r,"bternary2d",Ylr),Fr(r,"broadcastShapes",Zlr),Fr(r,"filled2d",$lr),Fr(r,"filled2dBy",Qlr),Fr(r,"flattenArray",Klr),Fr(r,"iterator2array",r8r),Fr(r,"linspace",e8r),Fr(r,"normalizeBroadcastArgs",t8r),Fr(r,"ones2d",i8r),Fr(r,"unary2d",n8r),Fr(r,"zeros",a8r),Fr(r,"zeros2d",s8r),r}yd.exports=u8r});var Nd=s((Zfe,Ed)=>{"use strict";var wd=y();function o8r(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(wd('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(wd('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}Ed.exports=o8r});var Ad=s(($fe,Od)=>{"use strict";var v8r=Nd();Od.exports=v8r});var Td=s((Qfe,Sd)=>{"use strict";var f8r=j().isPrimitive,c8r=Ad(),l8r=y();function p8r(r,e,t,i,n,a){var u,o;if(!(f8r(r)&&c8r(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(l8r("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}Sd.exports=p8r});var Id=s((Kfe,_d)=>{"use strict";var g8r=Td();_d.exports=g8r});var Rd=s((r6e,Ld)=>{"use strict";var m8r=gr().isPrimitive,d8r=y();function h8r(r,e){if(!m8r(r))throw new TypeError(d8r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}Ld.exports=h8r});var Fd=s((e6e,Pd)=>{"use strict";var q8r=Rd();Pd.exports=q8r});var Bd=s((t6e,Md)=>{"use strict";function y8r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}Md.exports=y8r});var jd=s((i6e,kd)=>{"use strict";var b8r=Bd();kd.exports=b8r});var Vd=s((n6e,Cd)=>{"use strict";var w8r=y(),E8r=jd();function N8r(r,e,t){if(!E8r(r,e))throw new TypeError(w8r("invalid argument. %s must be broadcast compatible.",t))}Cd.exports=N8r});var Gd=s((a6e,Ud)=>{"use strict";var O8r=Vd();Ud.exports=O8r});var Wd=s((s6e,Hd)=>{"use strict";function A8r(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}Hd.exports=A8r});var Dd=s((u6e,xd)=>{"use strict";var S8r=Wd();xd.exports=S8r});var Xd=s((o6e,zd)=>{"use strict";var T8r=y(),_8r=Dd();function I8r(r,e,t,i){if(!_8r(r,e))throw new TypeError(T8r("invalid argument. %s must be broadcast compatible with %s.",t,i))}zd.exports=I8r});var Yd=s((v6e,Jd)=>{"use strict";var L8r=Xd();Jd.exports=L8r});var $d=s((f6e,Zd)=>{"use strict";var R8r=y();function P8r(r,e){if(r===void 0)throw new Error(R8r("invalid invocation. Must provide %s.",e))}Zd.exports=P8r});var r2=s((c6e,Qd)=>{"use strict";var F8r=$d();Qd.exports=F8r});var rh=s((l6e,Kd)=>{"use strict";var M8r=y();function B8r(r,e,t,i){if(!(r>e))throw new TypeError(M8r("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}Kd.exports=B8r});var th=s((p6e,eh)=>{"use strict";var k8r=rh();eh.exports=k8r});var nh=s((g6e,ih)=>{"use strict";var j8r=y();function C8r(r,e,t,i){if(!(r>=e))throw new TypeError(j8r("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}ih.exports=C8r});var sh=s((m6e,ah)=>{"use strict";var V8r=nh();ah.exports=V8r});var oh=s((d6e,uh)=>{"use strict";var U8r=kr().isPrimitive,G8r=y();function H8r(r,e){if(!U8r(r))throw new TypeError(G8r("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}uh.exports=H8r});var fh=s((h6e,vh)=>{"use strict";var W8r=oh();vh.exports=W8r});var lh=s((q6e,ch)=>{"use strict";var x8r=y();function D8r(r,e,t,i){if(!(r<e))throw new TypeError(x8r("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}ch.exports=D8r});var gh=s((y6e,ph)=>{"use strict";var z8r=lh();ph.exports=z8r});var dh=s((b6e,mh)=>{"use strict";var X8r=y();function J8r(r,e,t,i){if(!(r<=e))throw new TypeError(X8r("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}mh.exports=J8r});var qh=s((w6e,hh)=>{"use strict";var Y8r=dh();hh.exports=Y8r});var bh=s((E6e,yh)=>{"use strict";var Z8r=jr().isPrimitive,$8r=y();function Q8r(r,e){if(!Z8r(r))throw new TypeError($8r("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}yh.exports=Q8r});var Eh=s((N6e,wh)=>{"use strict";var K8r=bh();wh.exports=K8r});var e2=s((O6e,Nh)=>{"use strict";var r5r=j().isPrimitive;function e5r(r){return r5r(r)&&r>=0}Nh.exports=e5r});var t2=s((A6e,Oh)=>{"use strict";var t5r=j().isObject;function i5r(r){return t5r(r)&&r.valueOf()>=0}Oh.exports=i5r});var Sh=s((S6e,Ah)=>{"use strict";var n5r=e2(),a5r=t2();function s5r(r){return n5r(r)||a5r(r)}Ah.exports=s5r});var Ma=s((T6e,_h)=>{"use strict";var Th=b(),i2=Sh(),u5r=e2(),o5r=t2();Th(i2,"isPrimitive",u5r);Th(i2,"isObject",o5r);_h.exports=i2});var Lh=s((_6e,Ih)=>{"use strict";var v5r=Ma().isPrimitive,f5r=y();function c5r(r,e){if(!v5r(r))throw new TypeError(f5r("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}Ih.exports=c5r});var Ph=s((I6e,Rh)=>{"use strict";var l5r=Lh();Rh.exports=l5r});var Mh=s((L6e,Fh)=>{"use strict";var p5r=j().isPrimitive,g5r=y();function m5r(r,e){if(!p5r(r))throw new TypeError(g5r("invalid argument. %s must be a number. Value: %s.",e,String(r)))}Fh.exports=m5r});var kh=s((R6e,Bh)=>{"use strict";var d5r=Mh();Bh.exports=d5r});var Ch=s((P6e,jh)=>{"use strict";var h5r=y();function q5r(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(h5r('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}jh.exports=q5r});var Uh=s((F6e,Vh)=>{"use strict";var y5r=Ch();Vh.exports=y5r});var n2=s((M6e,Gh)=>{"use strict";var b5r=kr().isPrimitive;function w5r(r){return b5r(r)&&r>0}Gh.exports=w5r});var a2=s((B6e,Hh)=>{"use strict";var E5r=kr().isObject;function N5r(r){return E5r(r)&&r.valueOf()>0}Hh.exports=N5r});var xh=s((k6e,Wh)=>{"use strict";var O5r=n2(),A5r=a2();function S5r(r){return O5r(r)||A5r(r)}Wh.exports=S5r});var re=s((j6e,zh)=>{"use strict";var Dh=b(),s2=xh(),T5r=n2(),_5r=a2();Dh(s2,"isPrimitive",T5r);Dh(s2,"isObject",_5r);zh.exports=s2});var Jh=s((C6e,Xh)=>{"use strict";var I5r=re().isPrimitive,L5r=y();function R5r(r,e){if(!I5r(r))throw new TypeError(L5r("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}Xh.exports=R5r});var u2=s((V6e,Yh)=>{"use strict";var P5r=Jh();Yh.exports=P5r});var o2=s((U6e,Zh)=>{"use strict";var F5r=j().isPrimitive;function M5r(r){return F5r(r)&&r>0}Zh.exports=M5r});var v2=s((G6e,$h)=>{"use strict";var B5r=j().isObject;function k5r(r){return B5r(r)&&r.valueOf()>0}$h.exports=k5r});var Kh=s((H6e,Qh)=>{"use strict";var j5r=o2(),C5r=v2();function V5r(r){return j5r(r)||C5r(r)}Qh.exports=V5r});var D=s((W6e,eq)=>{"use strict";var rq=b(),f2=Kh(),U5r=o2(),G5r=v2();rq(f2,"isPrimitive",U5r);rq(f2,"isObject",G5r);eq.exports=f2});var iq=s((x6e,tq)=>{"use strict";var H5r=D().isPrimitive,W5r=y();function x5r(r,e){if(!H5r(r))throw new TypeError(W5r("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}tq.exports=x5r});var aq=s((D6e,nq)=>{"use strict";var D5r=iq();nq.exports=D5r});var c2=s((z6e,sq)=>{"use strict";var z5r=j().isPrimitive;function X5r(r){return z5r(r)&&r>=0&&r<=1}sq.exports=X5r});var l2=s((X6e,uq)=>{"use strict";var J5r=j().isObject;function Y5r(r){return J5r(r)&&r.valueOf()>=0&&r.valueOf()<=1}uq.exports=Y5r});var vq=s((J6e,oq)=>{"use strict";var Z5r=c2(),$5r=l2();function Q5r(r){return Z5r(r)||$5r(r)}oq.exports=Q5r});var ln=s((Y6e,cq)=>{"use strict";var fq=b(),p2=vq(),K5r=c2(),r7r=l2();fq(p2,"isPrimitive",K5r);fq(p2,"isObject",r7r);cq.exports=p2});var pq=s((Z6e,lq)=>{"use strict";var e7r=ln().isPrimitive,t7r=y();function i7r(r,e){if(!e7r(r))throw new TypeError(t7r("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}lq.exports=i7r});var mq=s(($6e,gq)=>{"use strict";var n7r=pq();gq.exports=n7r});var hq=s((Q6e,dq)=>{"use strict";var a7r=mr(),s7r=y();function u7r(r,e){if(!a7r(r))throw new TypeError(s7r("invalid argument. %s must be a range. Value: %s.",e,String(r)))}dq.exports=u7r});var yq=s((K6e,qq)=>{"use strict";var o7r=hq();qq.exports=o7r});var wq=s((rce,bq)=>{"use strict";function v7r(r){return r.length===1||r[0].length===1}bq.exports=v7r});var Nq=s((ece,Eq)=>{"use strict";var f7r=wq();Eq.exports=f7r});var Aq=s((tce,Oq)=>{"use strict";var c7r=mr(),l7r=Nq();function p7r(r){return c7r(r)&&l7r(r)}Oq.exports=p7r});var Tq=s((ice,Sq)=>{"use strict";var g7r=Aq();Sq.exports=g7r});var Iq=s((nce,_q)=>{"use strict";var m7r=y(),d7r=Tq();function h7r(r,e){if(!d7r(r))throw new TypeError(m7r("invalid argument. %s must consist of only a single row or a single column.",e))}_q.exports=h7r});var Rq=s((ace,Lq)=>{"use strict";var q7r=Iq();Lq.exports=q7r});var Fq=s((sce,Pq)=>{"use strict";function y7r(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}Pq.exports=y7r});var Bq=s((uce,Mq)=>{"use strict";var b7r=Fq();Mq.exports=b7r});var jq=s((oce,kq)=>{"use strict";var w7r=y(),E7r=Bq();function N7r(r,e,t){if(!E7r(r,e))throw new TypeError(w7r("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}kq.exports=N7r});var Vq=s((vce,Cq)=>{"use strict";var O7r=jq();Cq.exports=O7r});var Gq=s((fce,Uq)=>{"use strict";var A7r=K().isPrimitive,S7r=y();function T7r(r,e){if(!A7r(r))throw new TypeError(S7r("invalid argument. %s must be a string. Value: %s.",e,String(r)))}Uq.exports=T7r});var Wq=s((cce,Hq)=>{"use strict";var _7r=Gq();Hq.exports=_7r});var Dq=s((lce,xq)=>{"use strict";var I7r=y(),L7r=jr().isPrimitive;function R7r(r,e){var t;for(t=0;t<r.length;t++)if(!L7r(r[t]))throw new TypeError(I7r("invalid argument. %s must contain only nonnegative integers.",e))}xq.exports=R7r});var Xq=s((pce,zq)=>{"use strict";var P7r=Dq();zq.exports=P7r});var Yq=s((gce,Jq)=>{"use strict";var F7r=y();function M7r(r){throw new Error(F7r("invalid argument. Unrecognized option name. Value: %s.",String(r)))}Jq.exports=M7r});var $q=s((mce,Zq)=>{"use strict";var B7r=Yq();Zq.exports=B7r});var ry=s((dce,Kq)=>{"use strict";var Qq=u2(),k7r=r2();function j7r(r,e,t){Qq(r,"Number of rows"),Qq(e,"Number of columns"),k7r(t,"a pseudorandom number generator seed")}Kq.exports=j7r});var ty=s((hce,ey)=>{"use strict";var C7r=ry();ey.exports=C7r});var ny=s((qce,iy)=>{"use strict";var bi=rr(),V7r=mr(),U7r=kr().isPrimitive,G7r=jr().isPrimitive,H7r=Ma().isPrimitive,W7r=re().isPrimitive,x7r=D().isPrimitive;function D7r(r){return bi(r,"isArray",V7r),bi(r,"isInteger",U7r),bi(r,"isNonNegativeInteger",G7r),bi(r,"isNonNegativeNumber",H7r),bi(r,"isPositiveInteger",W7r),bi(r,"isPositiveNumber",x7r),r}iy.exports=D7r});var sy=s((yce,ay)=>{"use strict";var Y=rr(),z7r=Id(),X7r=Fd(),J7r=Gd(),Y7r=Yd(),Z7r=r2(),$7r=th(),Q7r=sh(),K7r=fh(),r9r=gh(),e9r=qh(),t9r=Eh(),i9r=Ph(),n9r=kh(),a9r=Uh(),s9r=u2(),u9r=aq(),o9r=mq(),v9r=yq(),f9r=Rq(),c9r=Vq(),l9r=Wq(),p9r=Xq(),g9r=$q(),m9r=ty(),d9r=ny();function h9r(r){return Y(r,"isBetween",z7r),Y(r,"isBoolean",X7r),Y(r,"isBroadcastCompatible",J7r),Y(r,"isBroadcastCompatibleWith",Y7r),Y(r,"isDefined",Z7r),Y(r,"isGreaterThan",$7r),Y(r,"isGreaterThanEqual",Q7r),Y(r,"isInteger",K7r),Y(r,"isLessThan",r9r),Y(r,"isLessThanEqual",e9r),Y(r,"isNonNegativeInteger",t9r),Y(r,"isNonNegativeNumber",i9r),Y(r,"isNumber",n9r),Y(r,"isOneOf",a9r),Y(r,"isPositiveInteger",s9r),Y(r,"isPositiveNumber",u9r),Y(r,"isProbability",o9r),Y(r,"isRange",v9r),Y(r,"isRange1d",f9r),Y(r,"isSameShape",c9r),Y(r,"isString",l9r),Y(r,"isValidShape",p9r),Y(r,"unrecognizedOptionName",g9r),Y(r,"verifyCommonPRNGArgs",m9r),Y(r,"base",d9r({})),r}ay.exports=h9r});var oy=s((bce,uy)=>{"use strict";var g2=4;function q9r(r,e,t,i,n,a){var u,o,f,v;if(r<=0||e===0)return n;if(i===1&&a===1){if(f=r%g2,f>0)for(v=0;v<f;v++)n[v]+=e*t[v];if(r<g2)return n;for(v=f;v<r;v+=g2)n[v]+=e*t[v],n[v+1]+=e*t[v+1],n[v+2]+=e*t[v+2],n[v+3]+=e*t[v+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,v=0;v<r;v++)n[o]+=e*t[u],u+=i,o+=a;return n}uy.exports=q9r});var fy=s((wce,vy)=>{"use strict";var pn=4;function y9r(r,e,t,i,n,a,u,o){var f,v,c,l;if(r<=0||e===0)return a;if(f=n,v=o,i===1&&u===1){if(c=r%pn,c>0)for(l=0;l<c;l++)a[v]+=e*t[f],f+=i,v+=u;if(r<pn)return a;for(l=c;l<r;l+=pn)a[v]+=e*t[f],a[v+1]+=e*t[f+1],a[v+2]+=e*t[f+2],a[v+3]+=e*t[f+3],f+=pn,v+=pn;return a}for(l=0;l<r;l++)a[v]+=e*t[f],f+=i,v+=u;return a}vy.exports=y9r});var m2=s((Ece,ly)=>{"use strict";var b9r=b(),cy=oy(),w9r=fy();b9r(cy,"ndarray",w9r);ly.exports=cy});var my=s((Nce,gy)=>{"use strict";var py=rr(),E9r=m2().ndarray,N9r=m2().ndarray;function O9r(r){return py(r,"daxpy",E9r),py(r,"saxpy",N9r),r}gy.exports=O9r});var hy=s((Oce,dy)=>{"use strict";var A9r=Ut(),S9r=er();function T9r(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(S9r(r)==="[object Error]")return!0;r=A9r(r)}return!1}dy.exports=T9r});var yy=s((Ace,qy)=>{"use strict";var _9r=hy();qy.exports=_9r});var d2=s((Sce,by)=>{"use strict";function I9r(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}by.exports=I9r});var Ey=s((Tce,wy)=>{"use strict";var L9r=d2(),R9r=L9r();wy.exports=R9r});var Ay=s((_ce,Oy)=>{"use strict";var P9r=b(),Ny=d2(),F9r=Ey();P9r(Ny,"REGEXP",F9r);Oy.exports=Ny});var Ty=s((Ice,Sy)=>{"use strict";var M9r=K().isPrimitive,B9r=Ay(),k9r=y();function j9r(r){if(!M9r(r))throw new TypeError(k9r("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=B9r().exec(r),r?new RegExp(r[1],r[2]):null}Sy.exports=j9r});var Iy=s((Lce,_y)=>{"use strict";var C9r=Ty();_y.exports=C9r});var h2=s((Rce,Ly)=>{"use strict";var V9r=j().isPrimitive,U9r=E();function G9r(r){return V9r(r)&&U9r(r)}Ly.exports=G9r});var q2=s((Pce,Ry)=>{"use strict";var H9r=j().isObject,W9r=E();function x9r(r){return H9r(r)&&W9r(r.valueOf())}Ry.exports=x9r});var Fy=s((Fce,Py)=>{"use strict";var D9r=h2(),z9r=q2();function X9r(r){return D9r(r)||z9r(r)}Py.exports=X9r});var vr=s((Mce,By)=>{"use strict";var My=b(),y2=Fy(),J9r=h2(),Y9r=q2();My(y2,"isPrimitive",J9r);My(y2,"isObject",Y9r);By.exports=y2});var Vy=s((Bce,Cy)=>{"use strict";var ky=vr(),Z9r=Wr(),$9r=K().isPrimitive,Q9r=kr().isPrimitive,jy=y();function K9r(r,e,t){var i,n;if(!Z9r(r)&&!$9r(r))throw new TypeError(jy("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!Q9r(t))throw new TypeError(jy("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(ky(e)){for(;n<i;n++)if(ky(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}Cy.exports=K9r});var Ba=s((kce,Uy)=>{"use strict";var rpr=Vy();Uy.exports=rpr});var ka=s((jce,Gy)=>{"use strict";function epr(r){return Object.keys(Object(r))}Gy.exports=epr});var Wy=s((Cce,Hy)=>{"use strict";var tpr=ka();function ipr(){return(tpr(arguments)||"").length!==2}function npr(){return ipr(1,2)}Hy.exports=npr});var Dy=s((Vce,xy)=>{"use strict";var apr=typeof Object.keys<"u";xy.exports=apr});var b2=s((Uce,zy)=>{"use strict";var spr=er();function upr(r){return spr(r)==="[object Arguments]"}zy.exports=upr});var Yy=s((Gce,Jy)=>{"use strict";var opr=b2(),Xy;function vpr(){return opr(arguments)}Xy=vpr();Jy.exports=Xy});var w2=s((Hce,Zy)=>{"use strict";var fpr=Object.prototype.propertyIsEnumerable;Zy.exports=fpr});var Ky=s((Wce,Qy)=>{"use strict";var cpr=w2(),$y;function lpr(){return!cpr.call("beep","0")}$y=lpr();Qy.exports=$y});var eb=s((xce,rb)=>{"use strict";var ppr=K(),gpr=vr().isPrimitive,mpr=kr().isPrimitive,dpr=w2(),hpr=Ky();function qpr(r,e){var t;return r==null?!1:(t=dpr.call(r,e),!t&&hpr&&ppr(r)?(e=+e,!gpr(e)&&mpr(e)&&e>=0&&e<r.length):t)}rb.exports=qpr});var gn=s((Dce,tb)=>{"use strict";var ypr=eb();tb.exports=ypr});var nb=s((zce,ib)=>{"use strict";var bpr=A(),wpr=gn(),Epr=mr(),Npr=Lr(),Opr=ei();function Apr(r){return r!==null&&typeof r=="object"&&!Epr(r)&&typeof r.length=="number"&&Npr(r.length)&&r.length>=0&&r.length<=Opr&&bpr(r,"callee")&&!wpr(r,"callee")}ib.exports=Apr});var N2=s((Xce,ab)=>{"use strict";var Spr=Yy(),Tpr=b2(),_pr=nb(),E2;Spr?E2=Tpr:E2=_pr;ab.exports=E2});var ob=s((Jce,ub)=>{"use strict";var Ipr=N2(),sb=ka(),Lpr=Array.prototype.slice;function Rpr(r){return Ipr(r)?sb(Lpr.call(r)):sb(r)}ub.exports=Rpr});var fb=s((Yce,vb)=>{"use strict";function Ppr(){}vb.exports=Ppr});var C=s((Zce,cb)=>{"use strict";var Fpr=fb();cb.exports=Fpr});var pb=s(($ce,lb)=>{"use strict";var Mpr=gn(),Bpr=C(),kpr=Mpr(Bpr,"prototype");lb.exports=kpr});var mb=s((Qce,gb)=>{"use strict";var jpr=gn(),Cpr={toString:null},Vpr=!jpr(Cpr,"toString");gb.exports=Vpr});var O2=s((Kce,db)=>{"use strict";function Upr(r){return r.constructor&&r.constructor.prototype===r}db.exports=Upr});var hb=s((r4e,Gpr)=>{Gpr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var yb=s((e4e,qb)=>{"use strict";var Hpr=typeof window>"u"?void 0:window;qb.exports=Hpr});var Nb=s((t4e,Eb)=>{"use strict";var Wpr=A(),xpr=Ba(),bb=ca(),Dpr=O2(),zpr=hb(),wi=yb(),wb;function Xpr(){var r;if(bb(wi)==="undefined")return!1;for(r in wi)try{xpr(zpr,r)===-1&&Wpr(wi,r)&&wi[r]!==null&&bb(wi[r])==="object"&&Dpr(wi[r])}catch{return!0}return!1}wb=Xpr();Eb.exports=wb});var Ab=s((i4e,Ob)=>{"use strict";var Jpr=typeof window<"u";Ob.exports=Jpr});var _b=s((n4e,Tb)=>{"use strict";var Ypr=Nb(),Sb=O2(),Zpr=Ab();function $pr(r){if(Zpr===!1&&!Ypr)return Sb(r);try{return Sb(r)}catch{return!1}}Tb.exports=$pr});var Ib=s((a4e,Qpr)=>{Qpr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Pb=s((s4e,Rb)=>{"use strict";var Kpr=vo(),A2=A(),rgr=N2(),egr=pb(),tgr=mb(),igr=_b(),Lb=Ib();function ngr(r){var e,t,i,n,a,u,o;if(n=[],rgr(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!A2(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!Kpr(r))return n;t=egr&&i}for(a in r)!(t&&a==="prototype")&&A2(r,a)&&n.push(String(a));if(tgr)for(e=igr(r),o=0;o<Lb.length;o++)u=Lb[o],!(e&&u==="constructor")&&A2(r,u)&&n.push(String(u));return n}Rb.exports=ngr});var Mb=s((u4e,Fb)=>{"use strict";var agr=Wy(),sgr=Dy(),ugr=ka(),ogr=ob(),vgr=Pb(),ja;sgr?agr()?ja=ogr:ja=ugr:ja=vgr;Fb.exports=ja});var Ei=s((o4e,Bb)=>{"use strict";var fgr=Mb();Bb.exports=fgr});var jb=s((v4e,kb)=>{"use strict";var cgr=typeof Object.getOwnPropertyNames<"u";kb.exports=cgr});var Ub=s((f4e,Vb)=>{"use strict";var Cb=qi(),lgr=Cb.getOwnPropertyNames;function pgr(r){return lgr(Cb(r))}Vb.exports=pgr});var Hb=s((c4e,Gb)=>{"use strict";var ggr=qi(),mgr=Ei();function dgr(r){return mgr(ggr(r))}Gb.exports=dgr});var xb=s((l4e,Wb)=>{"use strict";var hgr=jb(),qgr=Ub(),ygr=Hb(),S2;hgr?S2=qgr:S2=ygr;Wb.exports=S2});var zb=s((p4e,Db)=>{"use strict";var bgr=typeof Object.getOwnPropertyDescriptor<"u";Db.exports=bgr});var Jb=s((g4e,Xb)=>{"use strict";var wgr=Object.getOwnPropertyDescriptor;function Egr(r,e){var t;return r==null?null:(t=wgr(r,e),t===void 0?null:t)}Xb.exports=Egr});var Zb=s((m4e,Yb)=>{"use strict";var Ngr=A();function Ogr(r,e){return Ngr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}Yb.exports=Ogr});var Qb=s((d4e,$b)=>{"use strict";var Agr=zb(),Sgr=Jb(),Tgr=Zb(),T2;Agr?T2=Sgr:T2=Tgr;$b.exports=T2});var rw=s((h4e,Kb)=>{"use strict";var _gr=typeof Buffer=="function"?Buffer:null;Kb.exports=_gr});var tw=s((q4e,ew)=>{"use strict";var Igr=Ft(),Ca=rw();function Lgr(){var r,e;if(typeof Ca!="function")return!1;try{typeof Ca.from=="function"?e=Ca.from([1,2,3,4]):e=new Ca([1,2,3,4]),r=Igr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}ew.exports=Lgr});var nw=s((y4e,iw)=>{"use strict";var Rgr=tw();iw.exports=Rgr});var uw=s(Va=>{"use strict";Va.byteLength=Fgr;Va.toByteArray=Bgr;Va.fromByteArray=Cgr;var ee=[],Ur=[],Pgr=typeof Uint8Array<"u"?Uint8Array:Array,_2="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Gt=0,aw=_2.length;Gt<aw;++Gt)ee[Gt]=_2[Gt],Ur[_2.charCodeAt(Gt)]=Gt;var Gt,aw;Ur["-".charCodeAt(0)]=62;Ur["_".charCodeAt(0)]=63;function sw(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function Fgr(r){var e=sw(r),t=e[0],i=e[1];return(t+i)*3/4-i}function Mgr(r,e,t){return(e+t)*3/4-t}function Bgr(r){var e,t=sw(r),i=t[0],n=t[1],a=new Pgr(Mgr(r,i,n)),u=0,o=n>0?i-4:i,f;for(f=0;f<o;f+=4)e=Ur[r.charCodeAt(f)]<<18|Ur[r.charCodeAt(f+1)]<<12|Ur[r.charCodeAt(f+2)]<<6|Ur[r.charCodeAt(f+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=Ur[r.charCodeAt(f)]<<2|Ur[r.charCodeAt(f+1)]>>4,a[u++]=e&255),n===1&&(e=Ur[r.charCodeAt(f)]<<10|Ur[r.charCodeAt(f+1)]<<4|Ur[r.charCodeAt(f+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function kgr(r){return ee[r>>18&63]+ee[r>>12&63]+ee[r>>6&63]+ee[r&63]}function jgr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(kgr(i));return n.join("")}function Cgr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(jgr(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(ee[e>>2]+ee[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(ee[e>>10]+ee[e>>4&63]+ee[e<<2&63]+"=")),n.join("")}});var ow=s(I2=>{I2.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,f=(1<<o)-1,v=f>>1,c=-7,l=t?n-1:0,p=t?-1:1,g=r[e+l];for(l+=p,a=g&(1<<-c)-1,g>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-v;else{if(a===f)return u?NaN:(g?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-v}return(g?-1:1)*u*Math.pow(2,a-i)};I2.write=function(r,e,t,i,n,a){var u,o,f,v=a*8-n-1,c=(1<<v)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,g=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-u))<1&&(u--,f*=2),u+l>=1?e+=p/f:e+=p*Math.pow(2,1-l),e*f>=2&&(u++,f/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*f-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+g]=o&255,g+=h,o/=256,n-=8);for(u=u<<n|o,v+=n;v>0;r[t+g]=u&255,g+=h,u/=256,v-=8);r[t+g-h]|=d*128}});var Aw=s(Si=>{"use strict";var L2=uw(),Oi=ow(),vw=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Si.Buffer=w;Si.SlowBuffer=xgr;Si.INSPECT_MAX_BYTES=50;var Ua=2147483647;Si.kMaxLength=Ua;w.TYPED_ARRAY_SUPPORT=Vgr();!w.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Vgr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(w.prototype,"parent",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.buffer}});Object.defineProperty(w.prototype,"offset",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.byteOffset}});function fe(r){if(r>Ua)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,w.prototype),e}function w(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return M2(r)}return pw(r,e,t)}w.poolSize=8192;function pw(r,e,t){if(typeof r=="string")return Ggr(r,e);if(ArrayBuffer.isView(r))return Hgr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(te(r,ArrayBuffer)||r&&te(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(te(r,SharedArrayBuffer)||r&&te(r.buffer,SharedArrayBuffer)))return P2(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return w.from(i,e,t);let n=Wgr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return w.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}w.from=function(r,e,t){return pw(r,e,t)};Object.setPrototypeOf(w.prototype,Uint8Array.prototype);Object.setPrototypeOf(w,Uint8Array);function gw(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function Ugr(r,e,t){return gw(r),r<=0?fe(r):e!==void 0?typeof t=="string"?fe(r).fill(e,t):fe(r).fill(e):fe(r)}w.alloc=function(r,e,t){return Ugr(r,e,t)};function M2(r){return gw(r),fe(r<0?0:B2(r)|0)}w.allocUnsafe=function(r){return M2(r)};w.allocUnsafeSlow=function(r){return M2(r)};function Ggr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!w.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=mw(r,e)|0,i=fe(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function R2(r){let e=r.length<0?0:B2(r.length)|0,t=fe(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function Hgr(r){if(te(r,Uint8Array)){let e=new Uint8Array(r);return P2(e.buffer,e.byteOffset,e.byteLength)}return R2(r)}function P2(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,w.prototype),i}function Wgr(r){if(w.isBuffer(r)){let e=B2(r.length)|0,t=fe(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||j2(r.length)?fe(0):R2(r);if(r.type==="Buffer"&&Array.isArray(r.data))return R2(r.data)}function B2(r){if(r>=Ua)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ua.toString(16)+" bytes");return r|0}function xgr(r){return+r!=r&&(r=0),w.alloc(+r)}w.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==w.prototype};w.compare=function(e,t){if(te(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),te(t,Uint8Array)&&(t=w.from(t,t.offset,t.byteLength)),!w.isBuffer(e)||!w.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};w.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};w.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return w.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=w.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(te(u,Uint8Array))a+u.length>n.length?(w.isBuffer(u)||(u=w.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(w.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function mw(r,e){if(w.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||te(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return F2(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Ow(r).length;default:if(n)return i?-1:F2(r).length;e=(""+e).toLowerCase(),n=!0}}w.byteLength=mw;function Dgr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return emr(this,e,t);case"utf8":case"utf-8":return hw(this,e,t);case"ascii":return Kgr(this,e,t);case"latin1":case"binary":return rmr(this,e,t);case"base64":return $gr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return tmr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}w.prototype._isBuffer=!0;function Ht(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}w.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Ht(this,t,t+1);return this};w.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Ht(this,t,t+3),Ht(this,t+1,t+2);return this};w.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Ht(this,t,t+7),Ht(this,t+1,t+6),Ht(this,t+2,t+5),Ht(this,t+3,t+4);return this};w.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?hw(this,0,e):Dgr.apply(this,arguments)};w.prototype.toLocaleString=w.prototype.toString;w.prototype.equals=function(e){if(!w.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:w.compare(this,e)===0};w.prototype.inspect=function(){let e="",t=Si.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};vw&&(w.prototype[vw]=w.prototype.inspect);w.prototype.compare=function(e,t,i,n,a){if(te(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),!w.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,f=Math.min(u,o),v=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<f;++l)if(v[l]!==c[l]){u=v[l],o=c[l];break}return u<o?-1:o<u?1:0};function dw(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,j2(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=w.from(e,i)),w.isBuffer(e))return e.length===0?-1:fw(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):fw(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function fw(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function f(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let v;if(n){let c=-1;for(v=t;v<u;v++)if(f(r,v)===f(e,c===-1?0:v-c)){if(c===-1&&(c=v),v-c+1===o)return c*a}else c!==-1&&(v-=v-c),c=-1}else for(t+o>u&&(t=u-o),v=t;v>=0;v--){let c=!0;for(let l=0;l<o;l++)if(f(r,v+l)!==f(e,l)){c=!1;break}if(c)return v}return-1}w.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};w.prototype.indexOf=function(e,t,i){return dw(this,e,t,i,!0)};w.prototype.lastIndexOf=function(e,t,i){return dw(this,e,t,i,!1)};function zgr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(j2(o))return u;r[t+u]=o}return u}function Xgr(r,e,t,i){return Ga(F2(e,r.length-t),r,t,i)}function Jgr(r,e,t,i){return Ga(smr(e),r,t,i)}function Ygr(r,e,t,i){return Ga(Ow(e),r,t,i)}function Zgr(r,e,t,i){return Ga(umr(e,r.length-t),r,t,i)}w.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return zgr(this,e,t,i);case"utf8":case"utf-8":return Xgr(this,e,t,i);case"ascii":case"latin1":case"binary":return Jgr(this,e,t,i);case"base64":return Ygr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Zgr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};w.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function $gr(r,e,t){return e===0&&t===r.length?L2.fromByteArray(r):L2.fromByteArray(r.slice(e,t))}function hw(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let f,v,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:f=r[n+1],(f&192)===128&&(l=(a&31)<<6|f&63,l>127&&(u=l));break;case 3:f=r[n+1],v=r[n+2],(f&192)===128&&(v&192)===128&&(l=(a&15)<<12|(f&63)<<6|v&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:f=r[n+1],v=r[n+2],c=r[n+3],(f&192)===128&&(v&192)===128&&(c&192)===128&&(l=(a&15)<<18|(f&63)<<12|(v&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return Qgr(i)}var cw=4096;function Qgr(r){let e=r.length;if(e<=cw)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=cw));return t}function Kgr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function rmr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function emr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=omr[r[a]];return n}function tmr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}w.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,w.prototype),n};function fr(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}w.prototype.readUintLE=w.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};w.prototype.readUintBE=w.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};w.prototype.readUint8=w.prototype.readUInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]};w.prototype.readUint16LE=w.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]|this[e+1]<<8};w.prototype.readUint16BE=w.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||fr(e,2,this.length),this[e]<<8|this[e+1]};w.prototype.readUint32LE=w.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};w.prototype.readUint32BE=w.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};w.prototype.readBigUInt64LE=Ze(function(e){e=e>>>0,Ai(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&mn(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});w.prototype.readBigUInt64BE=Ze(function(e){e=e>>>0,Ai(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&mn(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});w.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};w.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||fr(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};w.prototype.readInt8=function(e,t){return e=e>>>0,t||fr(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};w.prototype.readInt16LE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};w.prototype.readInt16BE=function(e,t){e=e>>>0,t||fr(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};w.prototype.readInt32LE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};w.prototype.readInt32BE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};w.prototype.readBigInt64LE=Ze(function(e){e=e>>>0,Ai(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&mn(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});w.prototype.readBigInt64BE=Ze(function(e){e=e>>>0,Ai(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&mn(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});w.prototype.readFloatLE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Oi.read(this,e,!0,23,4)};w.prototype.readFloatBE=function(e,t){return e=e>>>0,t||fr(e,4,this.length),Oi.read(this,e,!1,23,4)};w.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Oi.read(this,e,!0,52,8)};w.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||fr(e,8,this.length),Oi.read(this,e,!1,52,8)};function qr(r,e,t,i,n,a){if(!w.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}w.prototype.writeUintLE=w.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};w.prototype.writeUintBE=w.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};w.prototype.writeUint8=w.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,255,0),this[t]=e&255,t+1};w.prototype.writeUint16LE=w.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeUint16BE=w.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeUint32LE=w.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};w.prototype.writeUint32BE=w.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function qw(r,e,t,i,n){Nw(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function yw(r,e,t,i,n){Nw(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}w.prototype.writeBigUInt64LE=Ze(function(e,t=0){return qw(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeBigUInt64BE=Ze(function(e,t=0){return yw(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);qr(this,e,t,i,f-1,-f)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);qr(this,e,t,i,f-1,-f)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};w.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};w.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};w.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};w.prototype.writeBigInt64LE=Ze(function(e,t=0){return qw(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});w.prototype.writeBigInt64BE=Ze(function(e,t=0){return yw(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function bw(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ww(r,e,t,i,n){return e=+e,t=t>>>0,n||bw(r,e,t,4,34028234663852886e22,-34028234663852886e22),Oi.write(r,e,t,i,23,4),t+4}w.prototype.writeFloatLE=function(e,t,i){return ww(this,e,t,!0,i)};w.prototype.writeFloatBE=function(e,t,i){return ww(this,e,t,!1,i)};function Ew(r,e,t,i,n){return e=+e,t=t>>>0,n||bw(r,e,t,8,17976931348623157e292,-17976931348623157e292),Oi.write(r,e,t,i,52,8),t+8}w.prototype.writeDoubleLE=function(e,t,i){return Ew(this,e,t,!0,i)};w.prototype.writeDoubleBE=function(e,t,i){return Ew(this,e,t,!1,i)};w.prototype.copy=function(e,t,i,n){if(!w.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};w.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!w.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=w.isBuffer(e)?e:w.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var Ni={};function k2(r,e,t){Ni[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}k2("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);k2("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);k2("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=lw(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=lw(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function lw(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function imr(r,e,t){Ai(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&mn(e,r.length-(t+1))}function Nw(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new Ni.ERR_OUT_OF_RANGE("value",o,r)}imr(i,n,a)}function Ai(r,e){if(typeof r!="number")throw new Ni.ERR_INVALID_ARG_TYPE(e,"number",r)}function mn(r,e,t){throw Math.floor(r)!==r?(Ai(r,t),new Ni.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Ni.ERR_BUFFER_OUT_OF_BOUNDS:new Ni.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var nmr=/[^+/0-9A-Za-z-_]/g;function amr(r){if(r=r.split("=")[0],r=r.trim().replace(nmr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function F2(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function smr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function umr(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function Ow(r){return L2.toByteArray(amr(r))}function Ga(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function te(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function j2(r){return r!==r}var omr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function Ze(r){return typeof BigInt>"u"?vmr:r}function vmr(){throw new Error("BigInt not supported")}});var Tw=s((O4e,Sw)=>{"use strict";var fmr=Aw().Buffer;Sw.exports=fmr});var Iw=s((A4e,_w)=>{"use strict";function cmr(){throw new Error("not implemented")}_w.exports=cmr});var $e=s((S4e,Lw)=>{"use strict";var lmr=nw(),pmr=Tw(),gmr=Iw(),C2;lmr()?C2=pmr:C2=gmr;Lw.exports=C2});var Pw=s((T4e,Rw)=>{"use strict";var mmr=_(),dmr=$e(),hmr=mmr(dmr.from);Rw.exports=hmr});var Mw=s((_4e,Fw)=>{"use strict";var qmr=Ft(),ymr=y(),bmr=$e();function wmr(r){if(!qmr(r))throw new TypeError(ymr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return bmr.from(r)}Fw.exports=wmr});var kw=s((I4e,Bw)=>{"use strict";var Emr=Ft(),Nmr=y(),Omr=$e();function Amr(r){if(!Emr(r))throw new TypeError(Nmr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new Omr(r)}Bw.exports=Amr});var Cw=s((L4e,jw)=>{"use strict";var Smr=Pw(),Tmr=Mw(),_mr=kw(),V2;Smr?V2=Tmr:V2=_mr;jw.exports=V2});var Gw=s((R4e,Uw)=>{"use strict";var Imr=ai(),Lmr=$r(),Rmr=ni(),Pmr=ii(),Fmr=Mt(),Mmr=Xe(),Bmr=lr(),kmr=Zr(),jmr=cr(),Vw;function Cmr(r){return new Imr(r)}function Vmr(r){return new Lmr(r)}function Umr(r){return new Rmr(r)}function Gmr(r){return new Pmr(r)}function Hmr(r){return new Fmr(r)}function Wmr(r){return new Mmr(r)}function xmr(r){return new Bmr(r)}function Dmr(r){return new kmr(r)}function zmr(r){return new jmr(r)}function Xmr(){var r={int8array:Cmr,uint8array:Vmr,uint8clampedarray:Umr,int16array:Gmr,uint16array:Hmr,int32array:Wmr,uint32array:xmr,float32array:Dmr,float64array:zmr};return r}Vw=Xmr();Uw.exports=Vw});var zw=s((P4e,Dw)=>{"use strict";var Ha=A(),U2=mr(),Hw=Ft(),Jmr=yy(),Ww=ca(),Ymr=Iy(),Zmr=Ba(),xw=Ei(),$mr=xb(),dn=Qb(),Qmr=Ut(),hn=De(),Kmr=Cw(),rdr=Gw();function edr(r){var e,t,i,n,a,u,o,f;for(e=[],n=[],o=Object.create(Qmr(r)),e.push(r),n.push(o),t=$mr(r),f=0;f<t.length;f++)i=t[f],a=dn(r,i),Ha(a,"value")&&(u=U2(r[i])?[]:{},a.value=Wt(r[i],u,e,n,-1)),hn(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function tdr(r){var e=[],t=[],i,n,a,u,o,f;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=xw(r),f=0;f<i.length;f++)u=i[f],n=dn(r,u),Ha(n,"value")&&(a=U2(r[u])?[]:{},n.value=Wt(r[u],a,e,t,-1)),hn(o,u,n);return o}function Wt(r,e,t,i,n){var a,u,o,f,v,c,l,p,g,h;if(n-=1,typeof r!="object"||r===null)return r;if(Hw(r))return Kmr(r);if(Jmr(r))return tdr(r);if(o=Ww(r),o==="date")return new Date(+r);if(o==="regexp")return Ymr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(v=rdr[o],v)return v(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?edr(r):{};if(u=xw(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=Ww(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||Hw(p)){a==="object"?(f=dn(r,c),Ha(f,"value")&&(f.value=Wt(p)),hn(e,c,f)):e[c]=Wt(p);continue}if(g=Zmr(t,p),g!==-1){e[c]=i[g];continue}l=U2(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=Wt(p,l,t,i,n):(f=dn(r,c),Ha(f,"value")&&(f.value=Wt(p,l,t,i,n)),hn(e,c,f))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],f=dn(r,c),hn(e,c,f);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}Dw.exports=Wt});var Jw=s((F4e,Xw)=>{"use strict";var idr=mr(),ndr=jr().isPrimitive,adr=y(),sdr=I(),udr=zw();function odr(r,e){var t;if(arguments.length>1){if(!ndr(e))throw new TypeError(adr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=sdr;return t=idr(r)?new Array(r.length):{},udr(r,t,[r],[t],e)}Xw.exports=odr});var qn=s((M4e,Yw)=>{"use strict";var vdr=Jw();Yw.exports=vdr});var Zw=s((B4e,fdr)=>{fdr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var Qw=s((k4e,$w)=>{"use strict";var cdr=qn(),ldr=Zw();function pdr(){return cdr(ldr)}$w.exports=pdr});var Kw=s((j4e,gdr)=>{gdr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var eE=s((C4e,rE)=>{"use strict";var mdr=qn(),ddr=Kw();function hdr(){return mdr(ddr)}rE.exports=hdr});var tE=s((V4e,qdr)=>{qdr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var nE=s((U4e,iE)=>{"use strict";var ydr=qn(),bdr=tE();function wdr(){return ydr(bdr)}iE.exports=wdr});var aE=s((G4e,Edr)=>{Edr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var uE=s((H4e,sE)=>{"use strict";var Ndr=aE();function Odr(){return Ndr.slice()}sE.exports=Odr});var oE=s((W4e,Adr)=>{Adr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var fE=s((x4e,vE)=>{"use strict";var Sdr=qn(),Tdr=oE();function _dr(){return Sdr(Tdr)}vE.exports=_dr});var lE=s((D4e,cE)=>{"use strict";var yn=rr(),Idr=Qw(),Ldr=eE(),Rdr=nE(),Pdr=uE(),Fdr=fE();function Mdr(r){return yn(r,"AFINN_111",Idr),yn(r,"AFINN_96",Ldr),yn(r,"ANSCOMBES_QUARTET",Rdr),yn(r,"HERNDON_VENUS_SEMIDIAMETERS",Pdr),yn(r,"NIGHTINGALES_ROSE",Fdr),r}cE.exports=Mdr});var gE=s((z4e,pE)=>{"use strict";function Bdr(r,e){return r+e}pE.exports=Bdr});var dE=s((X4e,mE)=>{"use strict";var kdr=gE();mE.exports=kdr});var qE=s((J4e,hE)=>{"use strict";var jdr=I(),Cdr=V();function Vdr(r){return r===jdr||r===Cdr}hE.exports=Vdr});var Mr=s((Y4e,yE)=>{"use strict";var Udr=qE();yE.exports=Udr});var EE=s((Z4e,wE)=>{"use strict";var bE=da();function Gdr(r){return r>0?bE(r-1):bE(r+1)}wE.exports=Gdr});var Wa=s(($4e,NE)=>{"use strict";var Hdr=EE();NE.exports=Hdr});var AE=s((Q4e,OE)=>{"use strict";var Wdr=Math.sqrt;OE.exports=Wdr});var U=s((K4e,SE)=>{"use strict";var xdr=AE();SE.exports=xdr});var _E=s((rle,TE)=>{"use strict";function Ddr(r){return Math.abs(r)}TE.exports=Ddr});var J=s((ele,IE)=>{"use strict";var zdr=_E();IE.exports=zdr});var RE=s((tle,LE)=>{"use strict";var Xdr=$r(),Jdr=Mt(),Ydr={uint16:Jdr,uint8:Xdr};LE.exports=Ydr});var BE=s((ile,ME)=>{"use strict";var PE=RE(),FE;function Zdr(){var r,e;return r=new PE.uint16(1),r[0]=4660,e=new PE.uint8(r.buffer),e[0]===52}FE=Zdr();ME.exports=FE});var Dr=s((nle,kE)=>{"use strict";var $dr=BE();kE.exports=$dr});var VE=s((ale,CE)=>{"use strict";var Qdr=Dr(),jE,G2,H2;Qdr===!0?(G2=1,H2=0):(G2=0,H2=1);jE={HIGH:G2,LOW:H2};CE.exports=jE});var W2=s((sle,WE)=>{"use strict";var Kdr=lr(),rhr=cr(),GE=VE(),HE=new rhr(1),UE=new Kdr(HE.buffer),ehr=GE.HIGH,thr=GE.LOW;function ihr(r,e,t,i){return HE[0]=r,e[i]=UE[ehr],e[i+t]=UE[thr],e}WE.exports=ihr});var DE=s((ule,xE)=>{"use strict";var nhr=W2();function ahr(r){return nhr(r,[0>>>0,0>>>0],1,0)}xE.exports=ahr});var Ti=s((ole,XE)=>{"use strict";var shr=b(),zE=DE(),uhr=W2();shr(zE,"assign",uhr);XE.exports=zE});var YE=s((vle,JE)=>{"use strict";var ohr=Dr(),x2;ohr===!0?x2=0:x2=1;JE.exports=x2});var $E=s((fle,ZE)=>{"use strict";var vhr=lr(),fhr=cr(),chr=YE(),D2=new fhr(1),lhr=new vhr(D2.buffer);function phr(r,e){return D2[0]=r,lhr[chr]=e>>>0,D2[0]}ZE.exports=phr});var ce=s((cle,QE)=>{"use strict";var ghr=$E();QE.exports=ghr});var rN=s((lle,KE)=>{"use strict";function mhr(r){return r|0}KE.exports=mhr});var z2=s((ple,eN)=>{"use strict";var dhr=rN();eN.exports=dhr});var ie=s((gle,tN)=>{"use strict";var hhr=2147483647;tN.exports=hhr});var X2=s((mle,iN)=>{"use strict";var qhr=2147483648;iN.exports=qhr});var aN=s((dle,nN)=>{"use strict";var yhr=Dr(),J2;yhr===!0?J2=1:J2=0;nN.exports=J2});var oN=s((hle,uN)=>{"use strict";var bhr=lr(),whr=cr(),Ehr=aN(),sN=new whr(1),Nhr=new bhr(sN.buffer);function Ohr(r){return sN[0]=r,Nhr[Ehr]}uN.exports=Ohr});var ar=s((qle,vN)=>{"use strict";var Ahr=oN();vN.exports=Ahr});var lN=s((yle,cN)=>{"use strict";var Shr=Dr(),fN,Y2,Z2;Shr===!0?(Y2=1,Z2=0):(Y2=0,Z2=1);fN={HIGH:Y2,LOW:Z2};cN.exports=fN});var hN=s((ble,dN)=>{"use strict";var Thr=lr(),_hr=cr(),gN=lN(),mN=new _hr(1),pN=new Thr(mN.buffer),Ihr=gN.HIGH,Lhr=gN.LOW;function Rhr(r,e){return pN[Ihr]=r,pN[Lhr]=e,mN[0]}dN.exports=Rhr});var _i=s((wle,qN)=>{"use strict";var Phr=hN();qN.exports=Phr});var bN=s((Ele,yN)=>{"use strict";var Fhr=X2(),Mhr=ie(),Bhr=Ti(),khr=ar(),jhr=_i(),$2=[0,0];function Chr(r,e){var t,i;return Bhr.assign(r,$2,1,0),t=$2[0],t&=Mhr,i=khr(e),i&=Fhr,t|=i,jhr(t,$2[1])}yN.exports=Chr});var xa=s((Nle,wN)=>{"use strict";var Vhr=bN();wN.exports=Vhr});var ON=s((Ole,NN)=>{"use strict";var EN=Wa(),Uhr=xa(),Ghr=V(),Da=I();function Hhr(r,e){return e===Ghr?Da:e===Da?0:e>0?EN(e)?r:0:EN(e)?Uhr(Da,r):Da}NN.exports=Hhr});var SN=s((Ale,AN)=>{"use strict";var Whr=ie(),xhr=ar(),Dhr=1072693247,za=1e300,Xa=1e-300;function zhr(r,e){var t,i;return i=xhr(r),t=i&Whr,t<=Dhr?e<0?za*za:Xa*Xa:e>0?za*za:Xa*Xa}AN.exports=zhr});var IN=s((Sle,_N)=>{"use strict";var Xhr=J(),TN=I();function Jhr(r,e){return r===-1?(r-r)/(r-r):r===1?1:Xhr(r)<1==(e===TN)?0:TN}_N.exports=Jhr});var RN=s((Tle,LN)=>{"use strict";var Yhr=Dr(),Q2;Yhr===!0?Q2=1:Q2=0;LN.exports=Q2});var FN=s((_le,PN)=>{"use strict";var Zhr=lr(),$hr=cr(),Qhr=RN(),K2=new $hr(1),Khr=new Zhr(K2.buffer);function rqr(r,e){return K2[0]=r,Khr[Qhr]=e>>>0,K2[0]}PN.exports=rqr});var le=s((Ile,MN)=>{"use strict";var eqr=FN();MN.exports=eqr});var ne=s((Lle,BN)=>{"use strict";var tqr=1023;BN.exports=tqr});var jN=s((Rle,kN)=>{"use strict";function iqr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}kN.exports=iqr});var GN=s((Ple,UN)=>{"use strict";var nqr=ar(),Ja=ce(),CN=le(),aqr=ne(),sqr=jN(),uqr=1048575,VN=1048576,oqr=1072693248,vqr=536870912,fqr=524288,cqr=20,lqr=9007199254740992,pqr=.9617966939259756,gqr=.9617967009544373,mqr=-7028461650952758e-24,dqr=[1,1.5],hqr=[0,.5849624872207642],qqr=[0,1350039202129749e-23];function yqr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,S,x,Q,G;return x=0,t<VN&&(e*=lqr,x-=53,t=nqr(e)),x+=(t>>cqr)-aqr|0,Q=t&uqr|0,t=Q|oqr|0,Q<=235662?G=0:Q<767610?G=1:(G=0,x+=1,t-=VN),e=CN(e,t),c=dqr[G],F=e-c,S=1/(e+c),n=F*S,u=Ja(n,0),i=(t>>1|vqr)+fqr,i+=G<<18,f=CN(0,i),v=e-(f-c),o=S*(F-u*f-u*v),a=n*n,O=a*a*sqr(a),O+=o*(u+n),a=u*u,f=3+a+O,f=Ja(f,0),v=O-(f-3-a),F=u*f,S=o*f+v*n,p=F+S,p=Ja(p,0),g=S-(p-F),h=gqr*p,d=mqr*p+g*pqr+qqr[G],l=hqr[G],N=x,m=h+d+l+N,m=Ja(m,0),q=d-(m-N-l-h),r[0]=m,r[1]=q,r}UN.exports=yqr});var WN=s((Fle,HN)=>{"use strict";function bqr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}HN.exports=bqr});var DN=s((Mle,xN)=>{"use strict";var wqr=ce(),Eqr=WN(),Nqr=1.4426950408889634,Oqr=1.4426950216293335,Aqr=19259629911266175e-24;function Sqr(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*Eqr(n),u=Oqr*n,o=n*Aqr-a*Nqr,i=u+o,i=wqr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}xN.exports=Sqr});var r1=s((Ble,zN)=>{"use strict";var Tqr=1023;zN.exports=Tqr});var JN=s((kle,XN)=>{"use strict";var _qr=-1023;XN.exports=_qr});var e1=s((jle,YN)=>{"use strict";var Iqr=-1074;YN.exports=Iqr});var t1=s((Cle,ZN)=>{"use strict";var Lqr=22250738585072014e-324;ZN.exports=Lqr});var i1=s((Vle,$N)=>{"use strict";var Rqr=t1(),Pqr=Mr(),Fqr=E(),Mqr=J(),Bqr=4503599627370496;function kqr(r,e,t,i){return Fqr(r)||Pqr(r)?(e[i]=r,e[i+t]=0,e):r!==0&&Mqr(r)<Rqr?(e[i]=r*Bqr,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}$N.exports=kqr});var KN=s((Ule,QN)=>{"use strict";var jqr=i1();function Cqr(r){return jqr(r,[0,0],1,0)}QN.exports=Cqr});var tO=s((Gle,eO)=>{"use strict";var Vqr=b(),rO=KN(),Uqr=i1();Vqr(rO,"assign",Uqr);eO.exports=rO});var bn=s((Hle,iO)=>{"use strict";var Gqr=2146435072;iO.exports=Gqr});var aO=s((Wle,nO)=>{"use strict";var Hqr=ar(),Wqr=bn(),xqr=ne();function Dqr(r){var e=Hqr(r);return e=(e&Wqr)>>>20,e-xqr|0}nO.exports=Dqr});var uO=s((xle,sO)=>{"use strict";var zqr=aO();sO.exports=zqr});var vO=s((Dle,oO)=>{"use strict";var Xqr=I(),Jqr=V(),Yqr=ne(),Zqr=r1(),$qr=JN(),Qqr=e1(),Kqr=E(),ryr=Mr(),eyr=xa(),tyr=tO().assign,iyr=uO(),nyr=Ti(),ayr=_i(),syr=2220446049250313e-31,uyr=2148532223>>>0,n1=[0,0],a1=[0,0];function oyr(r,e){var t,i;return e===0||r===0||Kqr(r)||ryr(r)?r:(tyr(r,n1,1,0),r=n1[0],e+=n1[1],e+=iyr(r),e<Qqr?eyr(0,r):e>Zqr?r<0?Jqr:Xqr:(e<=$qr?(e+=52,i=syr):i=1,nyr.assign(r,a1,1,0),t=a1[0],t&=uyr,t|=e+Yqr<<20,i*ayr(t,a1[1])))}oO.exports=oyr});var Ya=s((zle,fO)=>{"use strict";var vyr=vO();fO.exports=vyr});var Za=s((Xle,cO)=>{"use strict";var fyr=.6931471805599453;cO.exports=fyr});var $a=s((Jle,lO)=>{"use strict";var cyr=1048575;lO.exports=cyr});var gO=s((Yle,pO)=>{"use strict";function lyr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}pO.exports=lyr});var wO=s((Zle,bO)=>{"use strict";var pyr=ar(),mO=le(),gyr=ce(),myr=z2(),dyr=Ya(),hyr=Za(),dO=ne(),hO=ie(),qO=$a(),qyr=gO(),yO=1048576,yyr=1071644672,wn=20,byr=.6931471824645996,wyr=-1904654299957768e-24;function Eyr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g;return p=r&hO|0,g=(p>>wn)-dO|0,l=0,p>yyr&&(l=r+(yO>>g+1)>>>0,g=((l&hO)>>wn)-dO|0,i=(l&~(qO>>g))>>>0,a=mO(0,i),l=(l&qO|yO)>>wn-g>>>0,r<0&&(l=-l),e-=a),a=t+e,a=gyr(a,0),o=a*byr,f=(t-(a-e))*hyr+a*wyr,c=o+f,v=f-(c-o),a=c*c,n=c-a*qyr(a),u=c*n/(n-2)-(v+c*v),c=1-(u-c),r=pyr(c),r=myr(r),r+=l<<wn>>>0,r>>wn<=0?c=dyr(c,l):c=mO(c,r),c}bO.exports=Eyr});var PO=s(($le,RO)=>{"use strict";var EO=E(),NO=Wa(),OO=Mr(),Nyr=Lr(),AO=U(),Oyr=J(),s1=Ti(),Ayr=ce(),SO=z2(),Syr=V(),Tyr=I(),u1=ie(),_yr=ON(),Iyr=SN(),Lyr=IN(),Ryr=GN(),Pyr=DN(),Fyr=wO(),Myr=1072693247,Byr=1105199104,kyr=1139802112,TO=1083179008,jyr=1072693248,Cyr=1083231232,Vyr=3230714880>>>0,_O=31,Qe=1e300,Ke=1e-300,Uyr=8008566259537294e-32,pe=[0,0],IO=[0,0];function LO(r,e){var t,i,n,a,u,o,f,v,c,l,p,g,h,d,m,q;if(EO(r)||EO(e))return NaN;if(s1.assign(e,pe,1,0),o=pe[0],f=pe[1],f===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return AO(r);if(e===-.5)return 1/AO(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(OO(e))return Lyr(r,e)}if(s1.assign(r,pe,1,0),a=pe[0],u=pe[1],u===0){if(a===0)return _yr(r,e);if(r===1)return 1;if(r===-1&&NO(e))return-1;if(OO(r))return r===Syr?LO(-0,-e):e<0?0:Tyr}if(r<0&&Nyr(e)===!1)return(r-r)/(r-r);if(n=Oyr(r),t=a&u1|0,i=o&u1|0,v=a>>>_O|0,c=o>>>_O|0,v&&NO(e)?v=-1:v=1,i>Byr){if(i>kyr)return Iyr(r,e);if(t<Myr)return c===1?v*Qe*Qe:v*Ke*Ke;if(t>jyr)return c===0?v*Qe*Qe:v*Ke*Ke;h=Pyr(IO,n)}else h=Ryr(IO,n,t);if(l=Ayr(e,0),g=(e-l)*h[0]+e*h[1],p=l*h[0],d=g+p,s1.assign(d,pe,1,0),m=SO(pe[0]),q=SO(pe[1]),m>=TO){if((m-TO|q)!==0||g+Uyr>d-p)return v*Qe*Qe}else if((m&u1)>=Cyr&&((m-Vyr|q)!==0||g<=d-p))return v*Ke*Ke;return d=Fyr(m,p,g),v*d}RO.exports=LO});var W=s((Qle,FO)=>{"use strict";var Gyr=PO();FO.exports=Gyr});var Ii=s((Kle,MO)=>{"use strict";var Hyr=9007199254740991;MO.exports=Hyr});var Qa=s((r8e,BO)=>{"use strict";var Wyr=308;BO.exports=Wyr});var o1=s((e8e,kO)=>{"use strict";var xyr=-308;kO.exports=xyr});var Ka=s((t8e,jO)=>{"use strict";var Dyr=-324;jO.exports=Dyr});var xO=s((i8e,WO)=>{"use strict";var CO=E(),r0=Mr(),VO=W(),zyr=J(),UO=X(),Xyr=Ii(),GO=Qa(),Jyr=o1(),Yyr=Ka(),Zyr=V(),$yr=Xyr+1,HO=1e308;function Qyr(r,e){var t,i;return CO(r)||CO(e)||r0(e)?NaN:r0(r)||r===0||e<Yyr||zyr(r)>$yr&&e<=0?r:e>GO?r>=0?0:Zyr:e<Jyr?(t=VO(10,-(e+GO)),i=r*HO*t,r0(i)?r:UO(i)/HO/t):(t=VO(10,-e),i=r*t,r0(i)?r:UO(i)/t)}WO.exports=Qyr});var zO=s((n8e,DO)=>{"use strict";var Kyr=xO();DO.exports=Kyr});var JO=s((a8e,XO)=>{"use strict";function rbr(r,e){return r*e}XO.exports=rbr});var ZO=s((s8e,YO)=>{"use strict";var ebr=JO();YO.exports=ebr});var QO=s((u8e,$O)=>{"use strict";function tbr(r,e){return r-e}$O.exports=tbr});var rA=s((o8e,KO)=>{"use strict";var ibr=QO();KO.exports=ibr});var tA=s((v8e,eA)=>{"use strict";var En=rr(),nbr=dE(),abr=zO(),sbr=ZO(),ubr=W(),obr=rA();function vbr(r){return En(r,"add",nbr),En(r,"floorn",abr),En(r,"mul",sbr),En(r,"pow",ubr),En(r,"sub",obr),r}eA.exports=vbr});var sA=s((f8e,aA)=>{"use strict";var iA=j().isPrimitive,fbr=I(),cbr=V(),nA=y();function lbr(r,e){return t;function t(i,n){var a;if(!iA(i)){if(e.nonnumeric===void 0)throw new TypeError(nA("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!iA(n)){if(e.nonnumeric===void 0)throw new TypeError(nA("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===fbr?e.pinf:a===cbr?e.ninf:a}}aA.exports=lbr});var v1=s((c8e,uA)=>{"use strict";var pbr=sA();uA.exports=pbr});var vA=s((l8e,oA)=>{"use strict";var gbr=va(),mbr=zu(),dbr=Fa(),hbr=y(),qbr=Pa(),ybr=v1(),bbr=["number","number"],wbr=["First argument","Second argument"];function Ebr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(hbr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=qbr([r[0],r[1]],bbr,wbr),t=gbr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=dbr(t),a=ybr(e,i),r[0].push(n),r[1].push(t),mbr(r[0],r[1],a),n}oA.exports=Ebr});var cA=s((p8e,fA)=>{"use strict";var Nbr=vA();fA.exports=Nbr});var pA=s((g8e,lA)=>{"use strict";var Obr=j().isPrimitive,Abr=I(),Sbr=V(),Tbr=y();function _br(r,e){return t;function t(i){var n;if(!Obr(i)){if(e.nonnumeric===void 0)throw new TypeError(Tbr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===Abr?e.pinf:n===Sbr?e.ninf:n}}lA.exports=_br});var f1=s((m8e,gA)=>{"use strict";var Ibr=pA();gA.exports=Ibr});var dA=s((d8e,mA)=>{"use strict";var c1=j().isPrimitive,Lbr=I(),Rbr=V(),l1=y();function Pbr(r,e){return t;function t(i,n,a){var u;if(!c1(i)){if(e.nonnumeric===void 0)throw new TypeError(l1("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!c1(n)){if(e.nonnumeric===void 0)throw new TypeError(l1("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!c1(a)){if(e.nonnumeric===void 0)throw new TypeError(l1("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===Lbr?e.pinf:u===Rbr?e.ninf:u}}mA.exports=Pbr});var p1=s((h8e,hA)=>{"use strict";var Fbr=dA();hA.exports=Fbr});var yA=s((q8e,qA)=>{"use strict";var e0=j().isPrimitive,Mbr=I(),Bbr=V(),t0=y();function kbr(r,e){return t;function t(i,n,a,u){var o;if(!e0(i)){if(e.nonnumeric===void 0)throw new TypeError(t0("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!e0(n)){if(e.nonnumeric===void 0)throw new TypeError(t0("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!e0(a)){if(e.nonnumeric===void 0)throw new TypeError(t0("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!e0(u)){if(e.nonnumeric===void 0)throw new TypeError(t0("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,a,u),o!==o?e.nan:o===Mbr?e.pinf:o===Bbr?e.ninf:o}}qA.exports=kbr});var wA=s((y8e,bA)=>{"use strict";var jbr=yA();bA.exports=jbr});var NA=s((b8e,EA)=>{"use strict";var Nn=j().isPrimitive,Cbr=I(),Vbr=V(),On=y();function Ubr(r,e){return t;function t(i,n,a,u,o){var f;if(!Nn(i)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Nn(n)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Nn(a)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Nn(u)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Nn(o)){if(e.nonnumeric===void 0)throw new TypeError(On("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return f=r(i,n,a,u,o),f!==f?e.nan:f===Cbr?e.pinf:f===Vbr?e.ninf:f}}EA.exports=Ubr});var AA=s((w8e,OA)=>{"use strict";var Gbr=NA();OA.exports=Gbr});var TA=s((E8e,SA)=>{"use strict";var Hbr=va(),Wbr=Ju(),xbr=Fa(),Dbr=y(),zbr=Pa(),Xbr=p1(),Jbr=["number","number","number"],Ybr=["First argument","Second argument","Third argument"];function Zbr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=3;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(Dbr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=zbr([r[0],r[1],r[2]],Jbr,Ybr),t=Hbr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=xbr(t),a=Xbr(e,i),r[0].push(n),r[1].push(t),Wbr(r[0],r[1],a),n}SA.exports=Zbr});var IA=s((N8e,_A)=>{"use strict";var $br=TA();_A.exports=$br});var RA=s((O8e,LA)=>{"use strict";var Qbr=mr(),Kbr=Ko(),rwr=y(),ewr=f1();function twr(r,e){var t,i,n,a,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(a=r[u],a==="nonnumeric"||a==="nan"||a==="pinf"||a==="ninf")i[a]=r[u+1];else throw new Error(rwr("invalid argument. Unrecognized option name. Value: %s.",String(a)));return n=ewr(e,i),Qbr(t)?(Kbr([t,t],[t.length,t[0].length],n),t):n(t)}LA.exports=twr});var FA=s((A8e,PA)=>{"use strict";var iwr=RA();PA.exports=iwr});var BA=s((S8e,MA)=>{"use strict";var rt=rr(),nwr=cA(),awr=f1(),swr=v1(),uwr=p1(),owr=wA(),vwr=AA(),fwr=IA(),cwr=FA();function lwr(r){return rt(r,"binary",nwr),rt(r,"d_d",awr),rt(r,"dd_d",swr),rt(r,"ddd_d",uwr),rt(r,"dddd_d",owr),rt(r,"ddddd_d",vwr),rt(r,"ternary",fwr),rt(r,"unary",cwr),r}MA.exports=lwr});var jA=s((T8e,kA)=>{"use strict";function pwr(r){return r*r}kA.exports=pwr});var i0=s((_8e,CA)=>{"use strict";var gwr=jA();CA.exports=gwr});var n0=s((I8e,VA)=>{"use strict";var mwr=.7853981633974483;VA.exports=mwr});var GA=s((L8e,UA)=>{"use strict";function dwr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}UA.exports=dwr});var WA=s((R8e,HA)=>{"use strict";function hwr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}HA.exports=hwr});var zA=s((P8e,DA)=>{"use strict";var qwr=E(),ywr=U(),xA=n0(),bwr=GA(),wwr=WA(),Ewr=6123233995736766e-32;function Nwr(r){var e,t,i,n,a;if(qwr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*wwr(t),t=ywr(t+t),a=xA-t,t=t*n-Ewr,a-=t,a+=xA;else{if(i<1e-8)return r;t=i*i,a=t*bwr(t),a=i*a+i}return e?-a:a}DA.exports=Nwr});var xt=s((F8e,XA)=>{"use strict";var Owr=zA();XA.exports=Owr});var $A=s((M8e,ZA)=>{"use strict";var Awr=E(),JA=xt(),Swr=U(),YA=n0(),Twr=6123233995736766e-32;function _wr(r){var e;return Awr(r)?NaN:r<-1||r>1?NaN:r>.5?2*JA(Swr(.5-.5*r)):(e=YA-JA(r),e+=Twr,e+=YA,e)}ZA.exports=_wr});var An=s((B8e,QA)=>{"use strict";var Iwr=$A();QA.exports=Iwr});var rS=s((k8e,KA)=>{"use strict";function Lwr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}KA.exports=Lwr});var aS=s((j8e,nS)=>{"use strict";var Rwr=E(),eS=ar(),tS=le(),Pwr=I(),Fwr=V(),iS=ne(),Mwr=rS(),g1=.6931471803691238,m1=19082149292705877e-26,Bwr=.41421356237309503,kwr=-.2928932188134525,jwr=1862645149230957e-24,Cwr=5551115123125783e-32,Vwr=9007199254740992,Uwr=.6666666666666666;function Gwr(r){var e,t,i,n,a,u,o,f,v,c;if(r<-1||Rwr(r))return NaN;if(r===-1)return Fwr;if(r===Pwr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<Bwr){if(i<jwr)return i<Cwr?r:r-r*r*.5;r>kwr&&(c=0,n=r,t=1)}return c!==0&&(i<Vwr?(v=1+r,t=eS(v),c=(t>>20)-iS,c>0?a=1-(v-r):a=r-(v-1),a/=v):(v=r,t=eS(v),c=(t>>20)-iS,a=0),t&=1048575,t<434334?v=tS(v,t|1072693248):(c+=1,v=tS(v,t|1071644672),t=1048576-t>>2),n=v-1),e=.5*n*n,t===0?n===0?(a+=c*m1,c*g1+a):(f=e*(1-Uwr*n),c*g1-(f-(c*m1+a)-n)):(u=n/(2+n),o=u*u,f=o*Mwr(o),c===0?n-(e-u*(e+f)):c*g1-(e-(u*(e+f)+(c*m1+a))-n))}nS.exports=Gwr});var et=s((C8e,sS)=>{"use strict";var Hwr=aS();sS.exports=Hwr});var oS=s((V8e,uS)=>{"use strict";function Wwr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}uS.exports=Wwr});var fS=s((U8e,vS)=>{"use strict";function xwr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}vS.exports=xwr});var gS=s((G8e,pS)=>{"use strict";var cS=ar(),Dwr=le(),zwr=E(),Xwr=ne(),Jwr=V(),Ywr=oS(),Zwr=fS(),a0=.6931471803691238,s0=19082149292705877e-26,$wr=0x40000000000000,Qwr=.3333333333333333,lS=1048575,Kwr=2146435072,rEr=1048576,eEr=1072693248;function tEr(r){var e,t,i,n,a,u,o,f,v,c,l,p;return r===0?Jwr:zwr(r)||r<0?NaN:(t=cS(r),a=0,t<rEr&&(a-=54,r*=$wr,t=cS(r)),t>=Kwr?r+r:(a+=(t>>20)-Xwr|0,t&=lS,f=t+614244&1048576|0,r=Dwr(r,t|f^eEr),a+=f>>20|0,o=r-1,(lS&2+t)<3?o===0?a===0?0:a*a0+a*s0:(u=o*o*(.5-Qwr*o),a===0?o-u:a*a0-(u-a*s0-o)):(c=o/(2+o),p=c*c,f=t-398458|0,l=p*p,v=440401-t|0,n=l*Ywr(l),i=p*Zwr(l),f|=v,u=i+n,f>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*a0-(e-(c*(e+u)+a*s0)-o)):a===0?o-c*(o-u):a*a0-(c*(o-u)-a*s0-o))))}pS.exports=tEr});var P=s((H8e,mS)=>{"use strict";var iEr=gS();mS.exports=iEr});var yS=s((W8e,qS)=>{"use strict";var nEr=E(),aEr=et(),dS=U(),sEr=Za(),hS=P(),uEr=1<<28;function oEr(r){var e;return nEr(r)||r<1?NaN:r===1?0:r>=uEr?hS(r)+sEr:r>2?hS(2*r-1/(r+dS(r*r-1))):(e=r-1,aEr(e+dS(2*e+e*e)))}qS.exports=oEr});var wS=s((x8e,bS)=>{"use strict";var vEr=yS();bS.exports=vEr});var u0=s((D8e,ES)=>{"use strict";var fEr=1.5707963267948966;ES.exports=fEr});var OS=s((z8e,NS)=>{"use strict";function cEr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}NS.exports=cEr});var SS=s((X8e,AS)=>{"use strict";function lEr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}AS.exports=lEr});var IS=s((J8e,_S)=>{"use strict";var pEr=E(),gEr=I(),d1=u0(),mEr=n0(),dEr=V(),hEr=OS(),qEr=SS(),TS=6123233995736766e-32,yEr=2.414213562373095;function bEr(r){var e,t,i,n;return pEr(r)||r===0?r:r===gEr?d1:r===dEr?-d1:(r<0&&(t=!0,r=-r),e=0,r>yEr?(i=d1,e=1,r=-(1/r)):r<=.66?i=0:(i=mEr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*hEr(n)/qEr(n),n=r*n+r,e===2?n+=.5*TS:e===1&&(n+=TS),i+=n,t?-i:i)}_S.exports=bEr});var o0=s((Y8e,LS)=>{"use strict";var wEr=IS();LS.exports=wEr});var PS=s((Z8e,RS)=>{"use strict";var EEr=o0();function NEr(r){return EEr(1/r)}RS.exports=NEr});var MS=s(($8e,FS)=>{"use strict";var OEr=PS();FS.exports=OEr});var kS=s((Q8e,BS)=>{"use strict";var AEr=xt();function SEr(r){return AEr(1+r)}BS.exports=SEr});var CS=s((K8e,jS)=>{"use strict";var TEr=kS();jS.exports=TEr});var US=s((r5e,VS)=>{"use strict";var _Er=xt();function IEr(r){return _Er(1-r)}VS.exports=IEr});var HS=s((e5e,GS)=>{"use strict";var LEr=US();GS.exports=LEr});var xS=s((t5e,WS)=>{"use strict";var REr=xt();function PEr(r){return REr(1/r)}WS.exports=PEr});var zS=s((i5e,DS)=>{"use strict";var FEr=xS();DS.exports=FEr});var ZS=s((n5e,YS)=>{"use strict";var MEr=Mr(),BEr=E(),kEr=et(),XS=U(),jEr=Za(),JS=P(),CEr=1/(1<<28),VEr=1<<28;function UEr(r){var e,t,i;return BEr(r)||MEr(r)?r:(r<0&&(r=-r,e=!0),r<CEr?i=r:r>VEr?i=JS(r)+jEr:r>2?i=JS(2*r+1/(XS(r*r+1)+r)):(t=r*r,i=kEr(r+t/(1+XS(1+t)))),e?-i:i)}YS.exports=UEr});var h1=s((a5e,$S)=>{"use strict";var GEr=ZS();$S.exports=GEr});var KS=s((s5e,QS)=>{"use strict";var HEr=h1();function WEr(r){return HEr(1/r)}QS.exports=WEr});var eT=s((u5e,rT)=>{"use strict";var xEr=KS();rT.exports=xEr});var iT=s((o5e,tT)=>{"use strict";var DEr=An(),zEr=U();function XEr(r){return 2*DEr(zEr(r))}tT.exports=XEr});var aT=s((v5e,nT)=>{"use strict";var JEr=iT();nT.exports=JEr});var uT=s((f5e,sT)=>{"use strict";var YEr=xt(),ZEr=U();function $Er(r){return 2*YEr(ZEr(r))}sT.exports=$Er});var vT=s((c5e,oT)=>{"use strict";var QEr=uT();oT.exports=QEr});var lT=s((l5e,cT)=>{"use strict";var KEr=E(),fT=et(),rNr=I(),eNr=V(),tNr=1/(1<<28);function iNr(r){var e,t;return KEr(r)||r<-1||r>1?NaN:r===1?rNr:r===-1?eNr:(r<0&&(e=!0,r=-r),r<tNr?e?-r:r:(r<.5?(t=r+r,t=.5*fT(t+t*r/(1-r))):t=.5*fT((r+r)/(1-r)),e?-t:t))}cT.exports=iNr});var gT=s((p5e,pT)=>{"use strict";var nNr=lT();pT.exports=nNr});var dT=s((g5e,mT)=>{"use strict";var aNr=An();function sNr(r){return aNr(1+r)}mT.exports=sNr});var qT=s((m5e,hT)=>{"use strict";var uNr=dT();hT.exports=uNr});var bT=s((d5e,yT)=>{"use strict";var oNr=An();function vNr(r){return oNr(1-r)}yT.exports=vNr});var ET=s((h5e,wT)=>{"use strict";var fNr=bT();wT.exports=fNr});var OT=s((q5e,NT)=>{"use strict";var cNr=X();function lNr(r){return cNr(r)===r&&r>=0}NT.exports=lNr});var q1=s((y5e,AT)=>{"use strict";var pNr=OT();AT.exports=pNr});var ST=s((b5e,gNr)=>{gNr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var _T=s((w5e,TT)=>{"use strict";var mNr=q1(),dNr=E(),hNr=Wa(),qNr=V(),yNr=I(),bNr=ST(),wNr=258;function ENr(r){return dNr(r)||!mNr(r)?NaN:hNr(r)?0:r>wNr?r/2&1?yNr:qNr:bNr[r/2]}TT.exports=ENr});var LT=s((E5e,IT)=>{"use strict";var NNr=_T();IT.exports=NNr});var PT=s((N5e,RT)=>{"use strict";var ONr=Dr(),y1;ONr===!0?y1=0:y1=1;RT.exports=y1});var BT=s((O5e,MT)=>{"use strict";var ANr=lr(),SNr=cr(),TNr=PT(),FT=new SNr(1),_Nr=new ANr(FT.buffer);function INr(r){return FT[0]=r,_Nr[TNr]}MT.exports=INr});var jT=s((A5e,kT)=>{"use strict";var LNr=BT();kT.exports=LNr});var HT=s((S5e,GT)=>{"use strict";var RNr=X(),v0=Ya(),l0=oa(),VT=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],PNr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],b1=16777216,w1=5960464477539063e-23,f0=l0(20),CT=l0(20),c0=l0(20),pr=l0(20);function UT(r,e,t,i,n,a,u,o,f){var v,c,l,p,g,h,d,m,q;for(p=a,q=i[t],m=t,g=0;m>0;g++)c=w1*q|0,pr[g]=q-b1*c|0,q=i[m-1]+c,m-=1;if(q=v0(q,n),q-=8*RNr(q*.125),d=q|0,q-=d,l=0,n>0?(g=pr[t-1]>>24-n,d+=g,pr[t-1]-=g<<24-n,l=pr[t-1]>>23-n):n===0?l=pr[t-1]>>23:q>=.5&&(l=2),l>0){for(d+=1,v=0,g=0;g<t;g++)m=pr[g],v===0?m!==0&&(v=1,pr[g]=16777216-m):pr[g]=16777215-m;if(n>0)switch(n){case 1:pr[t-1]&=8388607;break;case 2:pr[t-1]&=4194303;break}l===2&&(q=1-q,v!==0&&(q-=v0(1,n)))}if(q===0){for(m=0,g=t-1;g>=a;g--)m|=pr[g];if(m===0){for(h=1;pr[a-h]===0;h++);for(g=t+1;g<=t+h;g++){for(f[o+g]=VT[u+g],c=0,m=0;m<=o;m++)c+=r[m]*f[o+(g-m)];i[g]=c}return t+=h,UT(r,e,t,i,n,a,u,o,f)}}if(q===0)for(t-=1,n-=24;pr[t]===0;)t-=1,n-=24;else q=v0(q,-n),q>=b1?(c=w1*q|0,pr[t]=q-b1*c|0,t+=1,n+=24,pr[t]=c):pr[t]=q|0;for(c=v0(1,n),g=t;g>=0;g--)i[g]=c*pr[g],c*=w1;for(g=t;g>=0;g--){for(c=0,h=0;h<=p&&h<=t-g;h++)c+=PNr[h]*i[g+h];c0[t-g]=c}for(c=0,g=t;g>=0;g--)c+=c0[g];for(l===0?e[0]=c:e[0]=-c,c=c0[0]-c,g=1;g<=t;g++)c+=c0[g];return l===0?e[1]=c:e[1]=-c,d&7}function FNr(r,e,t,i){var n,a,u,o,f,v,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),v=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?f0[c]=0:f0[c]=VT[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*f0[o+(c-l)];CT[c]=n}return f=a,UT(r,e,f,CT,v,a,u,o,f0)}GT.exports=FNr});var xT=s((T5e,WT)=>{"use strict";var MNr=Math.round;WT.exports=MNr});var E1=s((_5e,DT)=>{"use strict";var BNr=xT();DT.exports=BNr});var YT=s((I5e,JT)=>{"use strict";var kNr=E1(),zT=ar(),jNr=.6366197723675814,CNr=1.5707963267341256,VNr=6077100506506192e-26,UNr=6077100506303966e-26,GNr=20222662487959506e-37,HNr=20222662487111665e-37,WNr=84784276603689e-45,XT=2047;function xNr(r,e,t){var i,n,a,u,o,f,v;return n=kNr(r*jNr),u=r-n*CNr,o=n*VNr,v=e>>20|0,t[0]=u-o,i=zT(t[0]),f=v-(i>>20&XT),f>16&&(a=u,o=n*UNr,u=a-o,o=n*GNr-(a-u-o),t[0]=u-o,i=zT(t[0]),f=v-(i>>20&XT),f>49&&(a=u,o=n*HNr,u=a-o,o=n*WNr-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}JT.exports=xNr});var $T=s((L5e,ZT)=>{"use strict";var DNr=ie(),zNr=bn(),XNr=$a(),JNr=ar(),YNr=jT(),ZNr=_i(),$Nr=HT(),p0=YT(),QNr=0,KNr=16777216,tt=1.5707963267341256,Dt=6077100506506192e-26,g0=2*Dt,m0=3*Dt,d0=4*Dt,rOr=598523,eOr=1072243195,tOr=1073928572,iOr=1074752122,nOr=1074977148,aOr=1075183036,sOr=1075388923,uOr=1075594811,oOr=1094263291,Sn=[0,0,0],Tn=[0,0];function vOr(r,e){var t,i,n,a,u,o,f,v;if(n=JNr(r),a=n&DNr|0,a<=eOr)return e[0]=r,e[1]=0,0;if(a<=iOr)return(a&XNr)===rOr?p0(r,a,e):a<=tOr?r>0?(v=r-tt,e[0]=v-Dt,e[1]=v-e[0]-Dt,1):(v=r+tt,e[0]=v+Dt,e[1]=v-e[0]+Dt,-1):r>0?(v=r-2*tt,e[0]=v-g0,e[1]=v-e[0]-g0,2):(v=r+2*tt,e[0]=v+g0,e[1]=v-e[0]+g0,-2);if(a<=uOr)return a<=aOr?a===nOr?p0(r,a,e):r>0?(v=r-3*tt,e[0]=v-m0,e[1]=v-e[0]-m0,3):(v=r+3*tt,e[0]=v+m0,e[1]=v-e[0]+m0,-3):a===sOr?p0(r,a,e):r>0?(v=r-4*tt,e[0]=v-d0,e[1]=v-e[0]-d0,4):(v=r+4*tt,e[0]=v+d0,e[1]=v-e[0]+d0,-4);if(a<oOr)return p0(r,a,e);if(a>=zNr)return e[0]=NaN,e[1]=NaN,0;for(t=YNr(r),i=(a>>20)-1046,v=ZNr(a-(i<<20|0),t),o=0;o<2;o++)Sn[o]=v|0,v=(v-Sn[o])*KNr;for(Sn[2]=v,u=3;Sn[u-1]===QNr;)u-=1;return f=$Nr(Sn,Tn,i,u,1),r<0?(e[0]=-Tn[0],e[1]=-Tn[1],-f):(e[0]=Tn[0],e[1]=Tn[1],f)}ZT.exports=vOr});var _n=s((R5e,QT)=>{"use strict";var fOr=$T();QT.exports=fOr});var e_=s((P5e,r_)=>{"use strict";var KT=-.16666666666666632,cOr=.00833333333332249,lOr=-.0001984126982985795,pOr=27557313707070068e-22,gOr=-25050760253406863e-24,mOr=158969099521155e-24,dOr=.0416666666666666,hOr=-.001388888888887411,qOr=2480158728947673e-20,yOr=-27557314351390663e-23,bOr=2087572321298175e-24,wOr=-11359647557788195e-27;function EOr(r,e,t,i,n){var a,u,o,f,v;return v=r*r,f=v*v,u=cOr+v*(lOr+v*pOr)+v*f*(gOr+v*mOr),o=v*r,e===0?t[n]=r+o*(KT+v*u):t[n]=r-(v*(.5*e-o*u)-e-o*KT),u=v*(dOr+v*(hOr+v*qOr)),u+=f*f*(yOr+v*(bOr+v*wOr)),a=.5*v,f=1-a,t[n+i]=f+(1-f-a+(v*u-r*e)),t}r_.exports=EOr});var O1=s((F5e,i_)=>{"use strict";var NOr=ie(),OOr=bn(),AOr=ar(),SOr=_n(),t_=e_(),TOr=1072243195,_Or=1044381696,N1=[0,0];function IOr(r,e,t,i){var n,a;if(n=AOr(r),n&=NOr,n<=TOr)return n<_Or&&(r|0)===0&&(e[i]=r,e[i+t]=0),t_(r,0,e,t,i);if(n>=OOr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=SOr(r,N1),t_(N1[0],N1[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}i_.exports=IOr});var a_=s((M5e,n_)=>{"use strict";var LOr=O1();function ROr(r){return LOr(r,[0,0],1,0)}n_.exports=ROr});var In=s((B5e,u_)=>{"use strict";var POr=b(),s_=a_(),FOr=O1();POr(s_,"assign",FOr);u_.exports=s_});var v_=s((k5e,o_)=>{"use strict";function MOr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}o_.exports=MOr});var c_=s((j5e,f_)=>{"use strict";function BOr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}f_.exports=BOr});var p_=s((C5e,l_)=>{"use strict";function kOr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}l_.exports=kOr});var m_=s((V5e,g_)=>{"use strict";function jOr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}g_.exports=jOr});var h_=s((U5e,d_)=>{"use strict";var COr=U(),VOr=In().assign,UOr=I(),GOr=v_(),HOr=c_(),WOr=p_(),xOr=m_(),DOr=.5641895835477563,zOr=2.404825557695773,XOr=5.520078110286311,JOr=616,YOr=-.0014244423042272315,ZOr=1413,$Or=.0005468602863106496,Ln=[0,0];function QOr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===UOr?0:r===0?1:r<=4?(a=r*r,n=GOr(a),u=(r+zOr)*(r-JOr/256-YOr),u*n):r<=8?(a=1-r*r/64,n=HOr(a),u=(r+XOr)*(r-ZOr/256-$Or),u*n):(a=8/r,i=a*a,e=WOr(i),t=xOr(i),u=DOr/COr(r),VOr(r,Ln,1,0),u*(e*(Ln[1]+Ln[0])-a*t*(Ln[0]-Ln[1])))}d_.exports=QOr});var A1=s((G5e,q_)=>{"use strict";var KOr=h_();q_.exports=KOr});var h0=s((H5e,y_)=>{"use strict";var rAr=1.772453850905516;y_.exports=rAr});var w_=s((W5e,b_)=>{"use strict";function eAr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}b_.exports=eAr});var N_=s((x5e,E_)=>{"use strict";function tAr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}E_.exports=tAr});var A_=s((D5e,O_)=>{"use strict";function iAr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}O_.exports=iAr});var T_=s((z5e,S_)=>{"use strict";function nAr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}S_.exports=nAr});var I_=s((X5e,__)=>{"use strict";var aAr=U(),sAr=J(),uAr=In().assign,oAr=I(),vAr=h0(),fAr=w_(),cAr=N_(),lAr=A_(),pAr=T_(),gAr=3.8317059702075125,mAr=7.015586669815619,dAr=981,hAr=-.0003252797924876844,qAr=1796,yAr=-38330184381246464e-21,Rn=[0,0];function bAr(r){var e,t,i,n,a,u,o,f;return f=sAr(r),r===0||f===oAr?0:(f<=4?(u=r*r,a=fAr(u),o=f*(f+gAr)*(f-dAr/256-hAr),e=o*a):f<=8?(u=r*r,a=cAr(u),o=f*(f+mAr)*(f-qAr/256-yAr),e=o*a):(u=8/f,n=u*u,t=lAr(n),i=pAr(n),o=1/(aAr(f)*vAr),uAr(f,Rn,1,0),e=o*(t*(Rn[0]-Rn[1])+u*i*(Rn[0]+Rn[1]))),r<0&&(e*=-1),e)}__.exports=bAr});var S1=s((J5e,L_)=>{"use strict";var wAr=I_();L_.exports=wAr});var Br=s((Y5e,R_)=>{"use strict";var EAr=3.141592653589793;R_.exports=EAr});var F_=s((Z5e,P_)=>{"use strict";function NAr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}P_.exports=NAr});var B_=s(($5e,M_)=>{"use strict";function OAr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}M_.exports=OAr});var j_=s((Q5e,k_)=>{"use strict";function AAr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}k_.exports=AAr});var V_=s((K5e,C_)=>{"use strict";function SAr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}C_.exports=SAr});var G_=s((r7e,U_)=>{"use strict";function TAr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}U_.exports=TAr});var z_=s((e7e,D_)=>{"use strict";var T1=P(),_Ar=U(),IAr=Br(),LAr=h0(),RAr=V(),PAr=I(),FAr=In().assign,_1=A1(),MAr=F_(),BAr=B_(),kAr=j_(),jAr=V_(),CAr=G_(),VAr=1/LAr,I1=2/IAr,H_=.8935769662791675,W_=3.957678419314858,x_=7.086051060301773,UAr=228,GAr=.0029519662791675214,HAr=1013,WAr=.0006471693148578684,xAr=1814,DAr=.00011356030177269763,Pn=[0,0];function zAr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?RAr:r===PAr?0:r<=3?(a=r*r,u=T1(r/H_)*_1(r)*I1,n=MAr(a),o=(r+H_)*(r-UAr/256-GAr),u+o*n):r<=5.5?(a=r*r,u=T1(r/W_)*_1(r)*I1,n=BAr(a),o=(r+W_)*(r-HAr/256-WAr),u+o*n):r<=8?(a=r*r,u=T1(r/x_)*_1(r)*I1,n=kAr(a),o=(r+x_)*(r-xAr/256-DAr),u+o*n):(a=8/r,i=a*a,e=jAr(i),t=CAr(i),o=VAr/_Ar(r),FAr(r,Pn,1,0),o*(e*(Pn[0]-Pn[1])+a*t*(Pn[1]+Pn[0])))}D_.exports=zAr});var J_=s((t7e,X_)=>{"use strict";var XAr=z_();X_.exports=XAr});var Z_=s((i7e,Y_)=>{"use strict";function JAr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}Y_.exports=JAr});var Q_=s((n7e,$_)=>{"use strict";function YAr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}$_.exports=YAr});var rI=s((a7e,K_)=>{"use strict";function ZAr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}K_.exports=ZAr});var tI=s((s7e,eI)=>{"use strict";function $Ar(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}eI.exports=$Ar});var vI=s((u7e,oI)=>{"use strict";var iI=P(),QAr=U(),KAr=Br(),rSr=h0(),eSr=V(),tSr=I(),iSr=In().assign,nI=S1(),nSr=Z_(),aSr=Q_(),sSr=rI(),uSr=tI(),oSr=1/rSr,aI=2/KAr,sI=2.197141326031017,uI=5.429681040794135,vSr=562,fSr=.001828826031017035,cSr=1390,lSr=-6459205864867228e-21,Fn=[0,0];function pSr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?eSr:r===tSr?0:r<=4?(a=r*r,u=iI(r/sI)*nI(r)*aI,n=nSr(a),o=(r+sI)*(r-vSr/256-fSr)/r,u+o*n):r<=8?(a=r*r,u=iI(r/uI)*nI(r)*aI,n=aSr(a),o=(r+uI)*(r-cSr/256-lSr)/r,u+o*n):(a=8/r,i=a*a,e=sSr(i),t=uSr(i),o=oSr/QAr(r),iSr(r,Fn,1,0),o*(a*t*(Fn[0]-Fn[1])-e*(Fn[0]+Fn[1])))}oI.exports=pSr});var cI=s((o7e,fI)=>{"use strict";var gSr=vI();fI.exports=gSr});var pI=s((v7e,lI)=>{"use strict";function mSr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}lI.exports=mSr});var mI=s((f7e,gI)=>{"use strict";function dSr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}gI.exports=dSr});var hI=s((c7e,dI)=>{"use strict";var hSr=pI(),qSr=mI();function ySr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*hSr(a),i+=n*n*qSr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}dI.exports=ySr});var L1=s((l7e,qI)=>{"use strict";var bSr=hI();qI.exports=bSr});var wI=s((p7e,bI)=>{"use strict";var yI=-.16666666666666632,wSr=.00833333333332249,ESr=-.0001984126982985795,NSr=27557313707070068e-22,OSr=-25050760253406863e-24,ASr=158969099521155e-24;function SSr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=wSr+a*(ESr+a*NSr)+a*n*(OSr+a*ASr),i=a*r,e===0?r+i*(yI+a*t):r-(a*(.5*e-i*t)-e-i*yI)}bI.exports=SSr});var R1=s((g7e,EI)=>{"use strict";var TSr=wI();EI.exports=TSr});var AI=s((m7e,OI)=>{"use strict";var _Sr=ar(),P1=L1(),NI=R1(),ISr=_n(),ge=[0,0],LSr=2147483647,RSr=1072243195,PSr=1044381696,FSr=2146435072;function MSr(r){var e,t;if(e=_Sr(r),e&=LSr,e<=RSr)return e<PSr?1:P1(r,0);if(e>=FSr)return NaN;switch(t=ISr(r,ge),t&3){case 0:return P1(ge[0],ge[1]);case 1:return-NI(ge[0],ge[1]);case 2:return-P1(ge[0],ge[1]);default:return NI(ge[0],ge[1])}}OI.exports=MSr});var zt=s((d7e,SI)=>{"use strict";var BSr=AI();SI.exports=BSr});var II=s((h7e,_I)=>{"use strict";var kSr=ie(),jSr=bn(),CSr=ar(),TI=L1(),F1=R1(),VSr=_n(),USr=1072243195,GSr=1045430272,me=[0,0];function HSr(r){var e,t;if(e=CSr(r),e&=kSr,e<=USr)return e<GSr?r:F1(r,0);if(e>=jSr)return NaN;switch(t=VSr(r,me),t&3){case 0:return F1(me[0],me[1]);case 1:return TI(me[0],me[1]);case 2:return-F1(me[0],me[1]);default:return-TI(me[0],me[1])}}_I.exports=HSr});var Xt=s((q7e,LI)=>{"use strict";var WSr=II();LI.exports=WSr});var FI=s((y7e,PI)=>{"use strict";var xSr=E(),DSr=Mr(),zSr=J(),RI=zt(),XSr=Xt(),JSr=X(),M1=Br(),YSr=Ii(),ZSr=YSr+1;function $Sr(r){var e,t,i,n;return xSr(r)?NaN:DSr(r)?NaN:(e=zSr(r),e>ZSr?1:(t=JSr(e),i=e-t,i===.5?0:(i<.25?n=RI(M1*i):i<.75?(i=.5-i,n=XSr(M1*i)):(i=1-i,n=-RI(M1*i)),t%2===1?-n:n)))}PI.exports=$Sr});var BI=s((b7e,MI)=>{"use strict";var QSr=FI();MI.exports=QSr});var jI=s((w7e,kI)=>{"use strict";var KSr=1.618033988749895;kI.exports=KSr});var VI=s((E7e,CI)=>{"use strict";var rTr=E(),eTr=BI(),tTr=W(),iTr=jI(),nTr=I(),aTr=V(),sTr=2.23606797749979;function uTr(r){var e,t;return rTr(r)||r===nTr||r===aTr?NaN:(e=tTr(iTr,r),t=eTr(r)/e,(e-t)/sTr)}CI.exports=uTr});var GI=s((N7e,UI)=>{"use strict";var oTr=VI();UI.exports=oTr});var WI=s((O7e,HI)=>{"use strict";function vTr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}HI.exports=vTr});var XI=s((A7e,zI)=>{"use strict";var fTr=t1(),cTr=X2(),xI=ie(),k1=ar(),lTr=le(),pTr=Mr(),DI=_i(),gTr=Ti(),mTr=E(),dTr=WI(),hTr=4294967295>>>0,qTr=3221225472>>>0,yTr=0x40000000000000,B1=2147483648>>>0,bTr=1>>>0,wTr=715094163>>>0,ETr=696219795>>>0,NTr=k1(fTr),Jt=[0>>>0,0>>>0];function OTr(r){var e,t,i,n,a,u,o;return r===0||mTr(r)||pTr(r)?r:(t=k1(r)>>>0,e=(t&cTr)>>>0,t&=xI,t<NTr?(u=yTr*r,i=(k1(u)&xI)>>>0,i=(i/3>>>0)+ETr>>>0,u=DI(e|i,0)):(u=0,i=(t/3>>>0)+wTr>>>0,u=lTr(u,e|i)),n=u*u*(u/r),u*=dTr(n),gTr.assign(u,Jt,1,0),Jt[1]&B1?(Jt[0]+=bTr,Jt[1]&=~B1):Jt[1]|=B1,u=DI(Jt[0]&hTr,Jt[1]&qTr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}zI.exports=OTr});var YI=s((S7e,JI)=>{"use strict";var ATr=XI();JI.exports=ATr});var $I=s((T7e,ZI)=>{"use strict";var STr=Math.ceil;ZI.exports=STr});var Mn=s((_7e,QI)=>{"use strict";var TTr=$I();QI.exports=TTr});var rL=s((I7e,KI)=>{"use strict";function _Tr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}KI.exports=_Tr});var tL=s((L7e,eL)=>{"use strict";function ITr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}eL.exports=ITr});var aL=s((R7e,nL)=>{"use strict";var LTr=ar(),RTr=rL(),PTr=tL(),iL=1048575,FTr=.3333333333333333;function MTr(r){var e,t,i,n,a,u,o,f,v,c,l;return n=LTr(r),a=r-1,(iL&2+n)<3?a===0?0:a*a*(FTr*a-.5):(u=a/(2+a),o=u*u,n&=iL,c=n-398458|0,v=o*o,l=440401-n|0,t=v*RTr(v),i=o*PTr(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}nL.exports=MTr});var vL=s((P7e,oL)=>{"use strict";var sL=ar(),BTr=le(),kTr=ce(),jTr=E(),CTr=ne(),VTr=V(),UTr=aL(),GTr=0x40000000000000,uL=.4342944818781689,HTr=25082946711645275e-27,WTr=.30102999566361177,xTr=3694239077158931e-28,DTr=1048575,zTr=2146435072,XTr=1048576,JTr=1072693248;function YTr(r){var e,t,i,n,a,u,o,f;return jTr(r)||r<0?NaN:r===0?VTr:(t=sL(r),u=0,t<XTr&&(u-=54,r*=GTr,t=sL(r)),t>=zTr?r+r:(u+=(t>>20)-CTr|0,t&=DTr,a=t+614244&1048576|0,r=BTr(r,t|a^JTr),u+=a>>20|0,o=u,n=UTr(r),r-=1,e=kTr(r,0),i=r-e,f=o*xTr+(r+n)*HTr,f+=(i+n)*uL+e*uL,f+o*WTr))}oL.exports=YTr});var cL=s((F7e,fL)=>{"use strict";var ZTr=vL();fL.exports=ZTr});var pL=s((M7e,lL)=>{"use strict";var $Tr=E(),QTr=Mr(),KTr=W(),r_r=X(),e_r=Mn(),t_r=cL(),i_r=Qa(),n_r=Ka(),a_r=I();function s_r(r){var e,t;return $Tr(r)||QTr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=t_r(r),e===-1?t=r_r(t):t=e_r(t),t<=n_r?e*0:t>i_r?a_r:e*KTr(10,t))}lL.exports=s_r});var mL=s((B7e,gL)=>{"use strict";var u_r=pL();gL.exports=u_r});var hL=s((k7e,dL)=>{"use strict";function o_r(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}dL.exports=o_r});var yL=s((j7e,qL)=>{"use strict";function v_r(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}qL.exports=v_r});var EL=s((C7e,wL)=>{"use strict";var f_r=ar(),c_r=hL(),l_r=yL(),bL=1048575,p_r=.3333333333333333;function g_r(r){var e,t,i,n,a,u,o,f,v,c,l;return n=f_r(r),a=r-1,(bL&2+n)<3?a===0?0:a*a*(p_r*a-.5):(u=a/(2+a),o=u*u,n&=bL,c=n-398458|0,v=o*o,l=440401-n|0,t=v*c_r(v),i=o*l_r(v),c|=l,f=i+t,c>0?(e=.5*a*a,u*(e+f)-e):u*(f-a))}wL.exports=g_r});var AL=s((V7e,OL)=>{"use strict";var m_r=ar(),d_r=le(),h_r=ce(),q_r=Ti(),y_r=E(),b_r=ie(),w_r=$a(),E_r=ne(),N_r=V(),O_r=EL(),A_r=0x40000000000000,NL=1.4426950407214463,S_r=16751713164886512e-26,T_r=2146435072,__r=1048576,I_r=1072693248,j1=[0,0];function L_r(r){var e,t,i,n,a,u,o;if(y_r(r)||r<0)return NaN;if(q_r.assign(r,j1,1,0),i=j1[0],n=j1[1],o=0,i<__r){if((i&b_r|n)===0)return N_r;o-=54,r*=A_r,i=m_r(r)}return i>=T_r?r+r:(o+=(i>>20)-E_r|0,i&=w_r,u=i+614244&1048576|0,r=d_r(r,i|u^I_r),o+=u>>20|0,a=O_r(r),r-=1,e=h_r(r,0),t=r-e,(r+a)*S_r+(t+a)*NL+e*NL+o)}OL.exports=L_r});var TL=s((U7e,SL)=>{"use strict";var R_r=AL();SL.exports=R_r});var IL=s((G7e,_L)=>{"use strict";var P_r=E(),F_r=Mr(),M_r=W(),B_r=X(),k_r=Mn(),j_r=TL(),C_r=r1(),V_r=e1(),U_r=I();function G_r(r){var e,t;return P_r(r)||F_r(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=j_r(r),t===V_r)?r:(e===-1?t=B_r(t):t=k_r(t),t>C_r?U_r:e*M_r(2,t))}_L.exports=G_r});var RL=s((H7e,LL)=>{"use strict";var H_r=IL();LL.exports=H_r});var FL=s((W7e,PL)=>{"use strict";var W_r=X(),x_r=Mn();function D_r(r){return r<0?x_r(r):W_r(r)}PL.exports=D_r});var q0=s((x7e,ML)=>{"use strict";var z_r=FL();ML.exports=z_r});var kL=s((D7e,BL)=>{"use strict";function X_r(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}BL.exports=X_r});var CL=s((z7e,jL)=>{"use strict";var J_r=Ya(),Y_r=kL();function Z_r(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*Y_r(n),u=1-(e-i*a/(2-a)-r),J_r(u,t)}jL.exports=Z_r});var xL=s((X7e,WL)=>{"use strict";var $_r=E(),VL=q0(),Q_r=V(),UL=I(),K_r=CL(),rIr=.6931471803691238,eIr=19082149292705877e-26,GL=1.4426950408889634,tIr=709.782712893384,iIr=-745.1332191019411,HL=1/(1<<28),nIr=-HL;function aIr(r){var e,t,i;return $_r(r)||r===UL?r:r===Q_r?0:r>tIr?UL:r<iIr?0:r>nIr&&r<HL?1+r:(r<0?i=VL(GL*r-.5):i=VL(GL*r+.5),e=r-i*rIr,t=i*eIr,K_r(e,t,i))}WL.exports=aIr});var sr=s((J7e,DL)=>{"use strict";var sIr=xL();DL.exports=sIr});var XL=s((Y7e,zL)=>{"use strict";var uIr=V();function oIr(r){return r===0&&1/r===uIr}zL.exports=oIr});var C1=s((Z7e,JL)=>{"use strict";var vIr=XL();JL.exports=vIr});var V1=s(($7e,YL)=>{"use strict";var fIr=2.5066282746310007;YL.exports=fIr});var $L=s((Q7e,ZL)=>{"use strict";function cIr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}ZL.exports=cIr});var rR=s((K7e,KL)=>{"use strict";var lIr=V1(),QL=W(),pIr=sr(),gIr=$L(),mIr=143.01608;function dIr(r){var e,t,i;return e=1/r,e=1+e*gIr(e),t=pIr(r),r>mIr?(i=QL(r,.5*r-.25),t=i*(i/t)):t=QL(r,r-.5)/t,lIr*t*e}KL.exports=dIr});var tR=s((r9e,eR)=>{"use strict";var hIr=.5772156649015329;eR.exports=hIr});var nR=s((e9e,iR)=>{"use strict";var qIr=tR();function yIr(r,e){return e/((1+qIr*r)*r)}iR.exports=yIr});var sR=s((t9e,aR)=>{"use strict";function bIr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}aR.exports=bIr});var gR=s((i9e,pR)=>{"use strict";var wIr=E(),EIr=Lr(),NIr=C1(),uR=J(),OIr=X(),AIr=Xt(),oR=I(),vR=V(),fR=Br(),cR=rR(),lR=nR(),SIr=sR();function TIr(r){var e,t,i,n;if(EIr(r)&&r<0||r===vR||wIr(r))return NaN;if(r===0)return NIr(r)?vR:oR;if(r>171.61447887182297)return oR;if(r<-170.5674972726612)return 0;if(t=uR(r),t>33)return r>=0?cR(r):(i=OIr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*AIr(fR*n),e*fR/(uR(n)*cR(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return lR(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return lR(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*SIr(r))}pR.exports=TIr});var Li=s((n9e,mR)=>{"use strict";var _Ir=gR();mR.exports=_Ir});var qR=s((a9e,hR)=>{"use strict";var IIr=E(),LIr=Mr(),dR=zt(),U1=Xt(),RIr=J(),Bn=xa(),kn=Br();function PIr(r){var e,t;return IIr(r)?NaN:LIr(r)?NaN:(t=r%2,e=RIr(t),e===0||e===1?Bn(0,t):e<.25?U1(kn*t):e<.75?(e=.5-e,Bn(dR(kn*e),t)):e<1.25?(t=Bn(1,t)-t,U1(kn*t)):e<1.75?(e-=1.5,-Bn(dR(kn*e),t)):(t-=Bn(2,t),U1(kn*t)))}hR.exports=PIr});var jn=s((s9e,yR)=>{"use strict";var FIr=qR();yR.exports=FIr});var wR=s((u9e,bR)=>{"use strict";function MIr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}bR.exports=MIr});var NR=s((o9e,ER)=>{"use strict";function BIr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}ER.exports=BIr});var AR=s((v9e,OR)=>{"use strict";function kIr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}OR.exports=kIr});var TR=s((f9e,SR)=>{"use strict";function jIr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}SR.exports=jIr});var IR=s((c9e,_R)=>{"use strict";function CIr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}_R.exports=CIr});var RR=s((l9e,LR)=>{"use strict";function VIr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}LR.exports=VIr});var FR=s((p9e,PR)=>{"use strict";function UIr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}PR.exports=UIr});var BR=s((g9e,MR)=>{"use strict";function GIr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}MR.exports=GIr});var jR=s((m9e,kR)=>{"use strict";function HIr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}kR.exports=HIr});var VR=s((d9e,CR)=>{"use strict";function WIr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}CR.exports=WIr});var HR=s((h9e,GR)=>{"use strict";var xIr=E(),DIr=Mr(),zIr=J(),Ri=P(),XIr=q0(),JIr=jn(),YIr=Br(),G1=I(),ZIr=wR(),$Ir=NR(),QIr=AR(),KIr=TR(),rLr=IR(),eLr=RR(),tLr=FR(),iLr=BR(),nLr=jR(),aLr=VR(),sLr=.07721566490153287,uLr=.3224670334241136,oLr=1,vLr=-.07721566490153287,fLr=.48383612272381005,cLr=-.1475877229945939,lLr=.06462494023913339,pLr=-.07721566490153287,gLr=1,mLr=.4189385332046727,y0=1.4616321449683622,dLr=4503599627370496,hLr=0x400000000000000,qLr=8470329472543003e-37,UR=1.4616321449683622,yLr=-.12148629053584961,bLr=-3638676997039505e-33;function wLr(r){var e,t,i,n,a,u,o,f,v,c,l,p,g;if(xIr(r)||DIr(r))return r;if(r===0)return G1;if(r<0?(e=!0,r=-r):e=!1,r<qLr)return-Ri(r);if(e){if(r>=dLr||(v=JIr(r),v===0))return G1;t=Ri(YIr/zIr(v*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(g=-Ri(r),r>=y0-1+.27?(l=1-r,i=0):r>=y0-1-.27?(l=r-(UR-1),i=1):(l=r,i=2)):(g=0,r>=y0+.27?(l=2-r,i=0):r>=y0-.27?(l=r-UR,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=sLr+p*ZIr(p),a=p*(uLr+p*$Ir(p)),o=l*u+a,g+=o-.5*l;break;case 1:p=l*l,c=p*l,u=fLr+c*rLr(c),a=cLr+c*eLr(c),n=lLr+c*tLr(c),o=p*u-(bLr-c*(a+l*n)),g+=yLr+o;break;case 2:u=l*(pLr+l*iLr(l)),a=gLr+l*nLr(l),g+=-.5*l+u/a;break}else if(r<8)switch(i=XIr(r),l=r-i,o=l*(vLr+l*KIr(l)),f=oLr+l*QIr(l),g=.5*l+o/f,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,g+=Ri(p)}else r<hLr?(v=Ri(r),p=1/r,l=p*p,c=mLr+p*aLr(l),g=(r-.5)*(v-1)+c):g=r*(Ri(r)-1);return e&&(g=t-g),g}GR.exports=wLr});var Cn=s((q9e,WR)=>{"use strict";var ELr=HR();WR.exports=ELr});var it=s((y9e,xR)=>{"use strict";var NLr=6.283185307179586;xR.exports=NLr});var H1=s((b9e,DR)=>{"use strict";var OLr=14901161193847656e-24;DR.exports=OLr});var W1=s((w9e,zR)=>{"use strict";var ALr=.9189385332046728;zR.exports=ALr});var XR=s((E9e,SLr)=>{SLr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var JR=s((N9e,TLr)=>{TLr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var YR=s((O9e,_Lr)=>{_Lr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var $R=s((A9e,ZR)=>{"use strict";function ILr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}ZR.exports=ILr});var KR=s((S9e,QR)=>{"use strict";function LLr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}QR.exports=LLr});var eP=s((T9e,rP)=>{"use strict";function RLr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}rP.exports=RLr});var iP=s((_9e,tP)=>{"use strict";function PLr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}tP.exports=PLr});var aP=s((I9e,nP)=>{"use strict";function FLr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}nP.exports=FLr});var uP=s((L9e,sP)=>{"use strict";function MLr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}sP.exports=MLr});var lP=s((R9e,cP)=>{"use strict";var BLr=E(),kLr=Lr(),jLr=J(),b0=sr(),CLr=X(),VLr=Li(),ULr=Cn(),oP=jn(),vP=W(),GLr=P(),HLr=I(),WLr=V(),fP=it(),xLr=H1(),DLr=W1(),zLr=XR(),XLr=JR(),JLr=YR(),YLr=$R(),ZLr=KR(),$Lr=eP(),QLr=iP(),KLr=aP(),rRr=uP(),eRr=129,tRr=170,iRr=709,nRr=1.2433929443359375,aRr=.6986598968505859;function x1(r){var e,t,i,n,a,u;if(BLr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(kLr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=eRr)return-JLr[u]/(i+1)}else return(n&1)===0?XLr[n/2]:zLr[(n-3)/2];return jLr(r)<xLr?-.5-DLr*r:(t=1-r,r<0?CLr(r/2)===r/2?0:(e=r,r=t,t=e,r>tRr?(e=oP(.5*t)*2*x1(r),a=ULr(r),a-=r*GLr(fP),a>iRr?e<0?WLr:HLr:e*b0(a)):oP(.5*t)*2*vP(fP,-r)*VLr(r)*x1(r)):r<1?(e=YLr(t),e-=nRr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+ZLr(t)):r<=4?(e=aRr+1/-t,e+$Lr(r-2)):r<=7?(e=QLr(r-4),1+b0(e)):r<15?(e=KLr(r-7),1+b0(e)):r<36?(e=rRr(r-15),1+b0(e)):1+vP(2,-r))}cP.exports=x1});var gP=s((P9e,pP)=>{"use strict";var sRr=lP();pP.exports=sRr});var dP=s((F9e,mP)=>{"use strict";var H=rr(),uRr=J(),oRr=i0(),vRr=An(),fRr=wS(),cRr=MS(),lRr=CS(),pRr=HS(),gRr=zS(),mRr=eT(),dRr=aT(),hRr=vT(),qRr=xt(),yRr=h1(),bRr=o0(),wRr=gT(),ERr=qT(),NRr=ET(),ORr=LT(),ARr=A1(),SRr=S1(),TRr=J_(),_Rr=cI(),IRr=GI(),LRr=YI(),RRr=Mn(),PRr=mL(),FRr=RL(),MRr=zt(),BRr=Xt(),kRr=U(),jRr=gP();function CRr(r){return H(r,"abs",uRr),H(r,"abs2",oRr),H(r,"acos",vRr),H(r,"acosh",fRr),H(r,"acot",cRr),H(r,"acovercos",lRr),H(r,"acoversin",pRr),H(r,"acsc",gRr),H(r,"acsch",mRr),H(r,"ahavercos",dRr),H(r,"ahaversin",hRr),H(r,"asin",qRr),H(r,"asinh",yRr),H(r,"atan",bRr),H(r,"atanh",wRr),H(r,"avercos",ERr),H(r,"aversin",NRr),H(r,"bernoulli",ORr),H(r,"besselj0",ARr),H(r,"besselj1",SRr),H(r,"bessely0",TRr),H(r,"bessely1",_Rr),H(r,"binet",IRr),H(r,"cbrt",LRr),H(r,"ceil",RRr),H(r,"ceil10",PRr),H(r,"ceil2",FRr),H(r,"cos",MRr),H(r,"sin",BRr),H(r,"sqrt",kRr),H(r,"zeta",jRr),r}mP.exports=CRr});var qP=s((M9e,hP)=>{"use strict";var VRr=rr(),URr=tA(),GRr=BA(),HRr=dP();function WRr(r){return VRr(r,"tools",GRr({})),r=URr(r),r=HRr(r),r}hP.exports=WRr});var bP=s((B9e,yP)=>{"use strict";function xRr(r){var e,t,i;if(e=r.length,e===0)return 0;for(t=1,i=0;i<e;i++)t*=r[i];return t}yP.exports=xRr});var D1=s((k9e,wP)=>{"use strict";var DRr=bP();wP.exports=DRr});var NP=s((j9e,EP)=>{"use strict";function zRr(r){var e,t,i,n;for(e=r.length,t=[],n=0;n<e;n++)t.push(0);for(i=1,n=e-1;n>=0;n--)t[n]=i,i*=r[n];return t}function XRr(r){var e,t,i;for(e=[],t=1,i=0;i<r.length;i++)e.push(t),t*=r[i];return e}function JRr(r,e){return e==="column-major"?XRr(r):zRr(r)}EP.exports=JRr});var AP=s((C9e,OP)=>{"use strict";function YRr(r,e){var t,i,n;for(t=r.length,i=1,n=t-1;n>=0;n--)e[n]=i,i*=r[n];return e}function ZRr(r,e){var t,i;for(t=1,i=0;i<r.length;i++)e[i]=t,t*=r[i];return e}function $Rr(r,e,t){return e==="column-major"?ZRr(r,t):YRr(r,t)}OP.exports=$Rr});var z1=s((V9e,TP)=>{"use strict";var QRr=b(),SP=NP(),KRr=AP();QRr(SP,"assign",KRr);TP.exports=SP});var LP=s((U9e,IP)=>{"use strict";function _P(r,e,t,i,n,a){var u,o,f,v,c;if(a>=e.length)return r.accessors[0](r.data,i);for(f=[],v=e[a],u=t[a],c=0;c<v;c++)o=_P(r,e,t,i,n,a+1),f.push(o),i+=u;return f}IP.exports=_P});var PP=s((G9e,RP)=>{"use strict";var rPr=fn(),ePr=LP();function tPr(r,e,t,i,n){var a;if(e.length===0)return[];for(a=0;a<e.length;a++)if(e[a]===0)return[];return ePr(rPr(r),e,t,i,n,0)}RP.exports=tPr});var MP=s((H9e,FP)=>{"use strict";var iPr=PP();FP.exports=iPr});var kP=s((W9e,BP)=>{"use strict";function nPr(r,e){var t,i,n;for(i=r.length,t=0,n=0;n<i;n++)e[n]<0&&(t-=e[n]*(r[n]-1));return t}BP.exports=nPr});var CP=s((x9e,jP)=>{"use strict";var aPr=kP();jP.exports=aPr});var UP=s((D9e,VP)=>{"use strict";var sPr=$e(),uPr=cr(),oPr=Zr(),vPr=ii(),fPr=Xe(),cPr=ai(),lPr=Mt(),pPr=lr(),gPr=$r(),mPr=ni(),dPr=pi(),hPr=hi(),qPr={binary:sPr,float64:uPr,float32:oPr,generic:Array,int16:vPr,int32:fPr,int8:cPr,uint16:lPr,uint32:pPr,uint8:gPr,uint8c:mPr,complex64:dPr,complex128:hPr};VP.exports=qPr});var HP=s((z9e,GP)=>{"use strict";var yPr=UP();function bPr(r){return yPr[r]||null}GP.exports=bPr});var xP=s((X9e,WP)=>{"use strict";var wPr=HP();WP.exports=wPr});var zP=s((J9e,DP)=>{"use strict";var EPr=_(),NPr=$e(),OPr=EPr(NPr.allocUnsafe);DP.exports=OPr});var JP=s((Y9e,XP)=>{"use strict";var APr=jr(),SPr=y(),TPr=$e();function _Pr(r){if(!APr(r))throw new TypeError(SPr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return TPr.allocUnsafe(r)}XP.exports=_Pr});var ZP=s((Z9e,YP)=>{"use strict";var IPr=jr(),LPr=y(),RPr=$e();function PPr(r){if(!IPr(r))throw new TypeError(LPr("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));return new RPr(r)}YP.exports=PPr});var QP=s(($9e,$P)=>{"use strict";var FPr=zP(),MPr=JP(),BPr=ZP(),X1;FPr?X1=MPr:X1=BPr;$P.exports=X1});var rF=s((Q9e,KP)=>{"use strict";function kPr(r){var e;for(e=0;e<r.length;e++)r[e]=0;return r}KP.exports=kPr});var tF=s((K9e,eF)=>{"use strict";var jPr=xP(),CPr=QP(),VPr=rF();function UPr(r){var e,t;for(e=[],t=0;t<r;t++)e.push(0);return e}function GPr(r){return VPr(CPr(r))}function HPr(r,e){var t=jPr(r);return t?new t(e):null}function WPr(r,e){return r==="generic"?UPr(e):r==="binary"?GPr(e):HPr(r,e)}eF.exports=WPr});var nF=s((rpe,iF)=>{"use strict";var xPr=tF();iF.exports=xPr});var uF=s((epe,sF)=>{"use strict";var DPr=no(),aF=DPr();function zPr(){return typeof aF.BigInt=="function"&&typeof BigInt=="function"&&typeof aF.BigInt("1")=="bigint"&&typeof BigInt("1")=="bigint"}sF.exports=zPr});var vF=s((tpe,oF)=>{"use strict";var XPr=uF();oF.exports=XPr});var fF=s((ipe,JPr)=>{JPr.exports={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}});var lF=s((npe,cF)=>{"use strict";var YPr=fF();function ZPr(r){return YPr[r]||null}cF.exports=ZPr});var gF=s((ape,pF)=>{"use strict";var $Pr=lF();pF.exports=$Pr});var dF=s((spe,mF)=>{"use strict";function QPr(r){var e,t;for(e=0,t=0;t<r.length;t++)r[t]<0&&(e+=1);return e===0?1:e===r.length?-1:0}mF.exports=QPr});var qF=s((upe,hF)=>{"use strict";var KPr=dF();hF.exports=KPr});var wF=s((ope,bF)=>{"use strict";var yF=J();function rFr(r){var e,t,i,n,a,u;if(t=r.length,t===0)return 0;for(e=!0,i=!0,n=yF(r[0]),u=1;u<t;u++)if(a=yF(r[u]),e&&a<n?e=!1:i&&a>n&&(i=!1),i||e)n=a;else return 0;return i&&e?3:i?1:2}bF.exports=rFr});var NF=s((vpe,EF)=>{"use strict";var eFr=wF();EF.exports=eFr});var AF=s((fpe,OF)=>{"use strict";function tFr(r,e){return e&&(r===2||r===3)}OF.exports=tFr});var TF=s((cpe,SF)=>{"use strict";function iFr(r,e){return e&&(r===1||r===3)}SF.exports=iFr});var IF=s((lpe,_F)=>{"use strict";function nFr(r,e,t){var i,n,a,u,o;for(i=r.length,n=t,a=t,o=0;o<i;o++){if(r[o]===0)return[t,t];u=e[o],u>0?a+=u*(r[o]-1):u<0&&(n+=u*(r[o]-1))}return[n,a]}_F.exports=nFr});var RF=s((ppe,LF)=>{"use strict";function aFr(r,e,t,i){var n,a,u,o,f;for(n=r.length,a=t,u=t,f=0;f<n;f++){if(r[f]===0)return i[0]=t,i[1]=t,i;o=e[f],o>0?u+=o*(r[f]-1):o<0&&(a+=o*(r[f]-1))}return i[0]=a,i[1]=u,i}LF.exports=aFr});var MF=s((gpe,FF)=>{"use strict";var sFr=b(),PF=IF(),uFr=RF();sFr(PF,"assign",uFr);FF.exports=PF});var kF=s((mpe,BF)=>{"use strict";var oFr=MF();function vFr(r,e,t,i,n){var a;return r===0||n===0?!1:(a=oFr(e,t,i),r===a[1]-a[0]+1)}BF.exports=vFr});var CF=s((dpe,jF)=>{"use strict";function fFr(r){return{ROW_MAJOR_CONTIGUOUS:r.ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:r.COLUMN_MAJOR_CONTIGUOUS,READONLY:r.READONLY}}jF.exports=fFr});var UF=s((hpe,VF)=>{"use strict";function cFr(r){var e,t,i,n,a,u;if(i=this._ndims,i===0)return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.get(this._offset+r):this._buffer[this._offset+r];if(this._iterationOrder===-1)return this._accessors?this._buffer.get(this.offset-r):this._buffer[this._offset-r]}if(t=this._shape,e=this._strides,n=this._offset,this._order==="column-major"){for(u=0;u<i;u++)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}for(u=i-1;u>=0;u--)a=r%t[u],r-=a,r/=t[u],n+=a*e[u];return this._accessors?this._buffer.get(n):this._buffer[n]}VF.exports=cFr});var HF=s((qpe,GF)=>{"use strict";function lFr(r,e){var t,i,n,a,u,o;if(n=this._ndims,n===0)return this._accessors?this._buffer.set(r,this._offset):this._buffer[this._offset]=r,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(this._iterationOrder===1)return this._accessors?this._buffer.set(e,this._offset+r):this._buffer[this._offset+r]=e,this;if(this._iterationOrder===-1)return this._accessors?this._buffer.set(e,this._offset-r):this._buffer[this._offset-r]=e,this}if(i=this._shape,t=this._strides,a=this._offset,this._order==="column-major"){for(o=0;o<n;o++)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}for(o=n-1;o>=0;o--)u=r%i[o],r-=u,r/=i[o],a+=u*t[o];return this._accessors?this._buffer.set(e,a):this._buffer[a]=e,this}GF.exports=lFr});var xF=s((ype,WF)=>{"use strict";function pFr(){var r,e;for(r=this._offset,e=0;e<arguments.length-1;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],r):this._buffer[r]=arguments[e],this}WF.exports=pFr});var zF=s((bpe,DF)=>{"use strict";function gFr(){var r,e;for(r=this._offset,e=0;e<arguments.length;e++)r+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(r):this._buffer[r]}DF.exports=gFr});var JF=s((wpe,XF)=>{"use strict";var mFr=Qr(),dFr=Kr();function hFr(){var r,e,t,i;for(e=this._length,r={},r.type="ndarray",r.dtype=this.dtype,r.flags={READONLY:this._flags.READONLY},r.order=this._order,r.shape=this._shape.slice(),r.strides=this._strides.slice(),i=0;i<e;i++)r.strides[i]<0&&(r.strides[i]*=-1);if(r.data=[],r.dtype==="complex64"||r.dtype==="complex128")for(i=0;i<e;i++)t=this.iget(i),r.data.push(mFr(t),dFr(t));else for(i=0;i<e;i++)r.data.push(this.iget(i));return r}XF.exports=hFr});var $F=s((Epe,ZF)=>{"use strict";var qFr=K().isPrimitive,yFr=y(),YF=/[-\/\\^$*+?.()|[\]{}]/g;function bFr(r){var e,t,i;if(!qFr(r))throw new TypeError(yFr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(YF,"\\$&"):(t=r.substring(1,i),t=t.replace(YF,"\\$&"),r=r[0]+t+r.substring(i),r)}ZF.exports=bFr});var KF=s((Npe,QF)=>{"use strict";var wFr=$F();QF.exports=wFr});var eM=s((Ope,rM)=>{"use strict";var EFr=RegExp.prototype.exec;rM.exports=EFr});var iM=s((Ape,tM)=>{"use strict";var NFr=eM();function OFr(r){try{return NFr.call(r),!0}catch{return!1}}tM.exports=OFr});var aM=s((Spe,nM)=>{"use strict";var AFr=ri(),SFr=er(),TFr=iM(),_Fr=AFr();function IFr(r){return typeof r=="object"?r instanceof RegExp?!0:_Fr?TFr(r):SFr(r)==="[object RegExp]":!1}nM.exports=IFr});var uM=s((Tpe,sM)=>{"use strict";var LFr=aM();sM.exports=LFr});var vM=s((_pe,oM)=>{"use strict";function RFr(r,e,t){return r.replace(e,t)}oM.exports=RFr});var nt=s((Ipe,fM)=>{"use strict";var PFr=vM();fM.exports=PFr});var lM=s((Lpe,cM)=>{"use strict";var FFr=KF(),MFr=_(),J1=K().isPrimitive,BFr=uM(),Y1=y(),kFr=nt();function jFr(r,e,t){if(!J1(r))throw new TypeError(Y1("invalid argument. First argument must be a string. Value: `%s`.",r));if(J1(e))e=new RegExp(FFr(e),"g");else if(!BFr(e))throw new TypeError(Y1("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!J1(t)&&!MFr(t))throw new TypeError(Y1("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return kFr(r,e,t)}cM.exports=jFr});var gM=s((Rpe,pM)=>{"use strict";var CFr=lM();pM.exports=CFr});var dM=s((Ppe,mM)=>{"use strict";var VFr=gM(),Z1=Qr(),$1=Kr(),UFr={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};function GFr(){var r,e,t,i,n,a,u;if(e=this._shape.length,n=this._dtype,i="ndarray( '"+n+"', ",r="",this._length<=100)if(n==="complex64"||n==="complex128")for(u=0;u<this._length;u++)a=this.iget(u),r+=Z1(a)+", "+$1(a),u<this._length-1&&(r+=", ");else for(u=0;u<this._length;u++)r+=this.iget(u),u<this._length-1&&(r+=", ");else{if(n==="complex64"||n==="complex128")for(u=0;u<3;u++)a=this.iget(u),r+=Z1(a)+", "+$1(a),u<2&&(r+=", ");else for(u=0;u<3;u++)r+=this.iget(u),u<2&&(r+=", ");if(r+=", ..., ",n==="complex64"||n==="complex128")for(u=2;u>=0;u--)a=this.iget(this._length-1-u),r+=Z1(a)+", "+$1(a),u>0&&(r+=", ");else for(u=2;u>=0;u--)r+=this.iget(this._length-1-u),u>0&&(r+=", ")}if(t=UFr[this.dtype],i+=VFr(t,"{{data}}",r),i+=", ",e===0?i+="[]":i+="[ "+this._shape.join(", ")+" ]",i+=", ",i+="[ ",e===0)i+="0";else for(u=0;u<e;u++)this._strides[u]<0?i+=-this._strides[u]:i+=this._strides[u],u<e-1&&(i+=", ");return i+=" ]",i+=", ",i+="0",i+=", ",i+="'"+this._order+"'",i+=" )",i}mM.exports=GFr});var qM=s((Fpe,hM)=>{"use strict";var HFr=typeof ArrayBuffer=="function"?ArrayBuffer:null;hM.exports=HFr});var bM=s((Mpe,yM)=>{"use strict";var WFr=ga(),xFr=cr(),w0=qM();function DFr(){var r,e,t;if(typeof w0!="function")return!1;try{t=new w0(16),r=WFr(t)&&typeof w0.isView=="function",r&&(e=new xFr(t),e[0]=-3.14,e[1]=NaN,r=r&&w0.isView(e)&&t.byteLength===16&&e[0]===-3.14&&e[1]!==e[1])}catch{r=!1}return r}yM.exports=DFr});var EM=s((Bpe,wM)=>{"use strict";var zFr=bM();wM.exports=zFr});var OM=s((kpe,NM)=>{"use strict";var XFr=typeof ArrayBuffer=="function"?ArrayBuffer:void 0;NM.exports=XFr});var SM=s((jpe,AM)=>{"use strict";function JFr(){throw new Error("not implemented")}AM.exports=JFr});var E0=s((Cpe,TM)=>{"use strict";var YFr=EM(),ZFr=OM(),$Fr=SM(),Q1;YFr()?Q1=ZFr:Q1=$Fr;TM.exports=Q1});var IM=s((Vpe,_M)=>{"use strict";var QFr=er(),KFr=typeof DataView=="function";function rMr(r){return KFr&&r instanceof DataView||QFr(r)==="[object DataView]"}_M.exports=rMr});var RM=s((Upe,LM)=>{"use strict";var eMr=IM();LM.exports=eMr});var FM=s((Gpe,PM)=>{"use strict";var tMr=typeof DataView=="function"?DataView:null;PM.exports=tMr});var kM=s((Hpe,BM)=>{"use strict";var iMr=RM(),nMr=E0(),MM=FM();function aMr(){var r,e,t;if(typeof MM!="function")return!1;try{t=new nMr(24),e=new MM(t,8),r=iMr(e)&&typeof e.getFloat64=="function"&&typeof e.setFloat64=="function",r&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),r=r&&e.buffer===t&&e.byteLength===16&&e.byteOffset===8&&e.getFloat64(0)===-3.14&&e.getFloat64(8)!==e.getFloat64(8))}catch{r=!1}return r}BM.exports=aMr});var CM=s((Wpe,jM)=>{"use strict";var sMr=kM();jM.exports=sMr});var UM=s((xpe,VM)=>{"use strict";var uMr=typeof DataView=="function"?DataView:void 0;VM.exports=uMr});var HM=s((Dpe,GM)=>{"use strict";function oMr(){throw new Error("not implemented")}GM.exports=oMr});var Vn=s((zpe,WM)=>{"use strict";var vMr=CM(),fMr=UM(),cMr=HM(),K1;vMr()?K1=fMr:K1=cMr;WM.exports=K1});var DM=s((Xpe,xM)=>{"use strict";var lMr=typeof BigInt=="function"?BigInt:void 0;xM.exports=lMr});var XM=s((Jpe,zM)=>{"use strict";var pMr=DM();zM.exports=pMr});var JM=s((Ype,gMr)=>{gMr.exports={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]}});var $M=s((Zpe,ZM)=>{"use strict";var YM=JM();function mMr(){var r;return arguments.length===0?YM.all.slice():(r=YM[arguments[0]],r?r.slice():[])}ZM.exports=mMr});var KM=s(($pe,QM)=>{"use strict";function dMr(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}QM.exports=dMr});var eB=s((Qpe,rB)=>{"use strict";var hMr=rr(),qMr=Ei();function yMr(r,e){var t,i,n;for(t=qMr(e),n=0;n<t.length;n++)i=t[n],hMr(r,i,e[i]);return r}rB.exports=yMr});var e3=s((Kpe,iB)=>{"use strict";var bMr=b(),r3=$M(),tB=KM(),wMr=eB();bMr(r3,"enum",tB);wMr(r3,tB());iB.exports=r3});var nB=s((rge,EMr)=>{EMr.exports=["row-major","column-major"]});var sB=s((ege,aB)=>{"use strict";var NMr=nB();function OMr(){return NMr.slice()}aB.exports=OMr});var oB=s((tge,uB)=>{"use strict";function AMr(){return{"row-major":1,"column-major":2}}uB.exports=AMr});var t3=s((ige,fB)=>{"use strict";var SMr=b(),vB=sB(),TMr=oB();SMr(vB,"enum",TMr);fB.exports=vB});var cB=s((nge,_Mr)=>{_Mr.exports=["throw","clamp","wrap"]});var pB=s((age,lB)=>{"use strict";var IMr=cB();function LMr(){return IMr.slice()}lB.exports=LMr});var mB=s((sge,gB)=>{"use strict";function RMr(){return{throw:1,clamp:2,wrap:3}}gB.exports=RMr});var i3=s((uge,hB)=>{"use strict";var PMr=b(),dB=pB(),FMr=mB();PMr(dB,"enum",FMr);hB.exports=dB});var bB=s((oge,yB)=>{"use strict";var at=Dr(),MMr=E0(),BMr=Vn(),Un=XM(),kMr=e3().enum,jMr=t3().enum,CMr=i3().enum,VMr=kMr(),UMr=jMr(),qB=CMr();function GMr(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g;if(f=this._mode||"throw",u=this._submode||[f],l=this._ndims,p=u.length,t=33+l*16+p,o=this.__meta_dataview__,o&&o.byteLength===t)return o;for(o=new BMr(new MMr(t)),n=this._shape,a=this._strides,i=this._dtype,r=this._bytesPerElement,v=0,o.setInt8(v,at?1:0),v+=1,o.setInt16(v,VMr[i],at),v+=2,o.setBigInt64(v,Un(l),at),c=l*8,v+=8,g=0;g<l;g++)o.setBigInt64(v,Un(n[g]),at),o.setBigInt64(v+c,Un(a[g]*r),at),v+=8;for(v+=c,o.setBigInt64(v,Un(this._offset*r),at),v+=8,o.setInt8(v,UMr[this._order]),v+=1,o.setInt8(v,qB[f]),v+=1,o.setBigInt64(v,Un(p),at),v+=8,g=0;g<p;g++)o.setInt8(v,qB[u[g]]),v+=1;return e=0,e|=this._flags.READONLY?4:0,o.setInt32(v,e,at),this.__meta_dataview__=o,o}yB.exports=GMr});var EB=s((vge,wB)=>{"use strict";var Gn=Dr(),HMr=$r(),WMr=Vn(),xMr=X(),DMr=4294967295>>>0,zMr=4294967296;function XMr(r){var e,t,i,n;return e=new HMr(8),r===0||(n=(r&DMr)>>>0,i=xMr(r/zMr),t=new WMr(e.buffer),Gn?(t.setUint32(0,n,Gn),t.setUint32(4,i,Gn)):(t.setUint32(0,i,Gn),t.setUint32(4,n,Gn))),e}wB.exports=XMr});var OB=s((fge,NB)=>{"use strict";var Hn=Dr(),JMr=$r(),YMr=Vn(),ZMr=X(),$Mr=4294967295>>>0,QMr=4294967296,O0=new JMr(8),N0=new YMr(O0.buffer);function KMr(r,e,t,i){var n,a,u;if(r===0){for(u=0;u<O0.length;u++)e[i]=0,i+=t;return e}for(a=(r&$Mr)>>>0,n=ZMr(r/QMr),Hn?(N0.setUint32(0,a,Hn),N0.setUint32(4,n,Hn)):(N0.setUint32(0,n,Hn),N0.setUint32(4,a,Hn)),u=0;u<O0.length;u++)e[i]=O0[u],i+=t;return e}NB.exports=KMr});var TB=s((cge,SB)=>{"use strict";var rBr=b(),AB=EB(),eBr=OB();rBr(AB,"assign",eBr);SB.exports=AB});var LB=s((lge,IB)=>{"use strict";var n3=Dr(),tBr=E0(),iBr=Vn(),nBr=$r(),aBr=e3().enum,sBr=t3().enum,uBr=i3().enum,Wn=TB().assign,oBr=aBr(),vBr=sBr(),_B=uBr();function fBr(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g,h;if(v=this._mode||"throw",o=this._submode||[v],p=this._ndims,g=o.length,i=33+p*16+g,f=this.__meta_dataview__,f&&f.byteLength===i)return f;for(f=new iBr(new tBr(i)),e=new nBr(f.buffer),a=this._shape,u=this._strides,n=this._dtype,r=this._bytesPerElement,c=0,f.setInt8(c,n3?1:0),c+=1,f.setInt16(c,oBr[n],n3),c+=2,Wn(p,e,1,c),l=p*8,c+=8,h=0;h<p;h++)Wn(a[h],e,1,c),Wn(u[h]*r,e,1,c+l),c+=8;for(c+=l,Wn(this._offset*r,e,1,c),c+=8,f.setInt8(c,vBr[this._order]),c+=1,f.setInt8(c,_B[v]),c+=1,Wn(g,e,1,c),c+=8,h=0;h<g;h++)f.setInt8(c,_B[o[h]]),c+=1;return t=0,t|=this._flags.READONLY?4:0,f.setInt32(c,t,n3),this.__meta_dataview__=f,f}IB.exports=fBr});var PB=s((pge,RB)=>{"use strict";var cBr=vF(),st=b(),zr=R(),lBr=gF(),pBr=qF(),gBr=NF(),mBr=eo(),dBr=AF(),hBr=TF(),qBr=kF(),yBr=CF(),bBr=UF(),wBr=HF(),EBr=xF(),NBr=zF(),OBr=JF(),ABr=dM(),SBr=bB(),TBr=LB();function nr(r,e,t,i,n,a){var u,o,f,v,c;if(!(this instanceof nr))return new nr(r,e,t,i,n,a);for(v=1,c=0;c<t.length;c++)v*=t[c];return e.BYTES_PER_ELEMENT?o=e.BYTES_PER_ELEMENT*v:o=null,this._byteLength=o,this._bytesPerElement=lBr(r),this._buffer=e,this._dtype=r,this._length=v,this._ndims=t.length,this._offset=n,this._order=a,this._shape=t,this._strides=i,this._accessors=mBr(e.get&&e.set),this._iterationOrder=pBr(i),u=qBr(v,t,i,n,this._iterationOrder),f=gBr(i),this._flags={ROW_MAJOR_CONTIGUOUS:hBr(f,u),COLUMN_MAJOR_CONTIGUOUS:dBr(f,u),READONLY:!1},this.__meta_dataview__=null,this}st(nr,"name","ndarray");zr(nr.prototype,"byteLength",function(){return this._byteLength});zr(nr.prototype,"BYTES_PER_ELEMENT",function(){return this._bytesPerElement});zr(nr.prototype,"data",function(){return this._buffer});zr(nr.prototype,"dtype",function(){return this._dtype});zr(nr.prototype,"flags",function(){return yBr(this._flags)});zr(nr.prototype,"length",function(){return this._length});zr(nr.prototype,"ndims",function(){return this._ndims});zr(nr.prototype,"offset",function(){return this._offset});zr(nr.prototype,"order",function(){return this._order});zr(nr.prototype,"shape",function(){return this._shape.slice()});zr(nr.prototype,"strides",function(){return this._strides.slice()});st(nr.prototype,"get",NBr);st(nr.prototype,"iget",bBr);st(nr.prototype,"set",EBr);st(nr.prototype,"iset",wBr);st(nr.prototype,"toString",ABr);st(nr.prototype,"toJSON",OBr);st(nr.prototype,"__array_meta_dataview__",cBr()?SBr:TBr);RB.exports=nr});var MB=s((gge,FB)=>{"use strict";var _Br=PB();FB.exports=_Br});var kB=s((mge,BB)=>{"use strict";var IBr=z1(),LBr=CP(),RBr=nF(),PBr=y(),FBr=MB(),MBr=D1();function BBr(r,e,t){var i,n,a,u;if(i=e.length,i>0?(a=MBr(e),u=IBr(e,t)):(a=1,u=[0]),n=RBr(r,a),n===null)throw new TypeError(PBr("invalid argument. First argument must be a recognized data type. Value: `%s`.",r));return new FBr(r,n,e,u,LBr(e,u),t)}BB.exports=BBr});var CB=s((dge,jB)=>{"use strict";var kBr=kB();jB.exports=kBr});var UB=s((hge,VB)=>{"use strict";var A0=rr(),jBr=D1(),CBr=z1(),VBr=MP(),UBr=CB();function GBr(r){return A0(r,"numel",jBr),A0(r,"shape2strides",CBr),A0(r,"toArray",VBr),A0(r,"zeros",UBr),r}VB.exports=GBr});var HB=s((qge,GB)=>{"use strict";var HBr=De();function WBr(r,e,t,i){HBr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}GB.exports=WBr});var M=s((yge,WB)=>{"use strict";var xBr=HB();WB.exports=xBr});var DB=s((bge,xB)=>{"use strict";function DBr(r){return e;function e(){return r}}xB.exports=DBr});var T=s((wge,zB)=>{"use strict";var zBr=DB();zB.exports=zBr});var JB=s((Ege,XB)=>{"use strict";var XBr=I();function JBr(r){return r===0&&1/r===XBr}XB.exports=JBr});var ut=s((Nge,YB)=>{"use strict";var YBr=JB();YB.exports=YBr});var QB=s((Oge,$B)=>{"use strict";var ZBr=ut(),ZB=E(),a3=I();function $Br(r,e){return ZB(r)||ZB(e)?NaN:r===a3||e===a3?a3:r===e&&r===0?ZBr(r)?r:e:r>e?r:e}$B.exports=$Br});var s3=s((Age,KB)=>{"use strict";var QBr=QB();KB.exports=QBr});var tk=s((Sge,ek)=>{"use strict";var rk=65535;function KBr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&rk)>>>0,o=(e&rk)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}ek.exports=KBr});var nk=s((Tge,ik)=>{"use strict";var rkr=tk();ik.exports=rkr});var u3=s((_ge,ak)=>{"use strict";function ekr(r,e,t,i,n,a,u){var o,f,v,c,l,p,g;for(o=e.data,f=n.data,c=e.accessors[0],v=n.accessors[1],l=i,p=u,g=0;g<r;g++)v(f,p,c(o,l)),l+=t,p+=a;return e}ak.exports=ekr});var ok=s((Ige,uk)=>{"use strict";var sk=fn(),tkr=u3(),o3=8;function ikr(r,e,t,i,n){var a,u,o,f,v,c;if(r<=0)return i;if(o=sk(e),f=sk(i),o.accessorProtocol||f.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,tkr(r,o,t,a,f,n,u),f.data;if(t===1&&n===1){if(v=r%o3,v>0)for(c=0;c<v;c++)i[c]=e[c];if(r<o3)return i;for(c=v;c<r;c+=o3)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}uk.exports=ikr});var ck=s((Lge,fk)=>{"use strict";var vk=fn(),nkr=u3(),xn=8;function akr(r,e,t,i,n,a,u){var o,f,v,c,l,p;if(r<=0)return n;if(v=vk(e),c=vk(n),v.accessorProtocol||c.accessorProtocol)return nkr(r,v,t,i,c,a,u),c.data;if(o=i,f=u,t===1&&a===1){if(l=r%xn,l>0)for(p=0;p<l;p++)n[f]=e[o],o+=t,f+=a;if(r<xn)return n;for(p=l;p<r;p+=xn)n[f]=e[o],n[f+1]=e[o+1],n[f+2]=e[o+2],n[f+3]=e[o+3],n[f+4]=e[o+4],n[f+5]=e[o+5],n[f+6]=e[o+6],n[f+7]=e[o+7],o+=xn,f+=xn;return n}for(p=0;p<r;p++)n[f]=e[o],o+=t,f+=a;return n}fk.exports=akr});var ot=s((Rge,pk)=>{"use strict";var skr=b(),lk=ok(),ukr=ck();skr(lk,"ndarray",ukr);pk.exports=lk});var mk=s((Pge,gk)=>{"use strict";function okr(){}gk.exports=okr});var hk=s((Fge,dk)=>{"use strict";var vkr=mk();function fkr(){return vkr.name==="foo"}dk.exports=fkr});var yk=s((Mge,qk)=>{"use strict";var ckr=hk();qk.exports=ckr});var wk=s((Bge,bk)=>{"use strict";var lkr=_(),pkr=yk(),gkr=y(),mkr=so().REGEXP,dkr=pkr();function hkr(r){if(lkr(r)===!1)throw new TypeError(gkr("invalid argument. Must provide a function. Value: `%s`.",r));return dkr?r.name:mkr.exec(r.toString())[1]}bk.exports=hkr});var Nk=s((kge,Ek)=>{"use strict";var qkr=wk();Ek.exports=qkr});var Ak=s((jge,Ok)=>{"use strict";var ykr=ai(),bkr=$r(),wkr=ni(),Ekr=ii(),Nkr=Mt(),Okr=Xe(),Akr=lr(),Skr=Zr(),Tkr=cr(),_kr=[Tkr,Skr,Okr,Akr,Ekr,Nkr,ykr,bkr,wkr];Ok.exports=_kr});var Sk=s((Cge,Ikr)=>{Ikr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var Pk=s((Vge,Rk)=>{"use strict";var Lkr=ze(),Rkr=Nk(),Ik=Ut(),Pkr=po(),Fkr=cr(),Tk=Ak(),_k=Sk(),S0=Pkr()?Ik(Fkr):Lk;S0=Rkr(S0)==="TypedArray"?S0:Lk;function Lk(){}function Mkr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof S0)return!0;for(t=0;t<Tk.length;t++)if(r instanceof Tk[t])return!0;for(;r;){for(e=Lkr(r),t=0;t<_k.length;t++)if(_k[t]===e)return!0;r=Ik(r)}return!1}Rk.exports=Mkr});var Mk=s((Uge,Fk)=>{"use strict";var Bkr=Pk();Fk.exports=Bkr});var kk=s((Gge,Bk)=>{"use strict";var kkr=pi(),jkr=hi(),Ckr=[jkr,kkr];Bk.exports=Ckr});var jk=s((Hge,Vkr)=>{Vkr.exports=["Complex64Array","Complex128Array"]});var Gk=s((Wge,Uk)=>{"use strict";var Ukr=ze(),Gkr=Ut(),Ck=kk(),Vk=jk();function Hkr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<Ck.length;t++)if(r instanceof Ck[t])return!0;for(;r;){for(e=Ukr(r),t=0;t<Vk.length;t++)if(Vk[t]===e)return!0;r=Gkr(r)}return!1}Uk.exports=Hkr});var Wk=s((xge,Hk)=>{"use strict";var Wkr=Gk();Hk.exports=Wkr});var Dk=s((Dge,xk)=>{"use strict";var xkr=y();function Dkr(r,e){if(typeof e!="function")throw new TypeError(xkr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}xk.exports=Dkr});var Xk=s((zge,zk)=>{"use strict";var zkr=Dk();zk.exports=zkr});var Yk=s((Xge,Jk)=>{"use strict";var Xkr=ai(),Jkr=$r(),Ykr=ni(),Zkr=ii(),$kr=Mt(),Qkr=Xe(),Kkr=lr(),rjr=Zr(),ejr=cr(),tjr=pi(),ijr=hi(),njr=[[ejr,"Float64Array"],[rjr,"Float32Array"],[Qkr,"Int32Array"],[Kkr,"Uint32Array"],[Zkr,"Int16Array"],[$kr,"Uint16Array"],[Xkr,"Int8Array"],[Jkr,"Uint8Array"],[Ykr,"Uint8ClampedArray"],[tjr,"Complex64Array"],[ijr,"Complex128Array"]];Jk.exports=njr});var $k=s((Jge,Zk)=>{"use strict";var ajr=Xk(),sjr=ze(),ujr=Ut(),Pi=Yk();function ojr(r){var e,t;for(t=0;t<Pi.length;t++)if(ajr(r,Pi[t][0]))return Pi[t][1];for(;r;){for(e=sjr(r),t=0;t<Pi.length;t++)if(e===Pi[t][1])return Pi[t][1];r=ujr(r)}}Zk.exports=ojr});var Kk=s((Yge,Qk)=>{"use strict";var vjr=Mk(),fjr=Wk(),cjr=oi(),ljr=vi(),pjr=y(),gjr=$k();function mjr(r){var e,t,i;if(vjr(r))e=r;else if(fjr(r))r.BYTES_PER_ELEMENT===8?e=cjr(r,0):e=ljr(r,0);else throw new TypeError(pjr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:gjr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}Qk.exports=mjr});var B=s((Zge,rj)=>{"use strict";var djr=Kk();rj.exports=djr});var v3=s(($ge,ej)=>{"use strict";var hjr=ei(),qjr=X(),yjr=hjr-1;function bjr(){var r=qjr(1+yjr*Math.random());return r>>>0}ej.exports=bjr});var h3=s((Qge,lj)=>{"use strict";var de=b(),vt=R(),tj=M(),f3=A(),wjr=L(),Ejr=Wr(),ij=ve(),Njr=gr().isPrimitive,nj=re().isPrimitive,vj=Ii(),fj=ei(),yr=lr(),Ojr=s3(),d3=nk(),Fi=ot(),Ajr=B(),wr=y(),aj=v3(),ur=624,c3=397,sj=fj>>>0,Sjr=19650218>>>0,l3=2147483648>>>0,p3=2147483647>>>0,Tjr=1812433253>>>0,_jr=1664525>>>0,Ijr=1566083941>>>0,Ljr=2636928640>>>0,Rjr=4022730752>>>0,Pjr=2567483615>>>0,g3=[0>>>0,Pjr>>>0],cj=1/(vj+1),Fjr=67108864>>>0,Mjr=2147483648>>>0,m3=1>>>0,Bjr=vj*cj,T0=1,_0=3,ft=2,ct=ur+3,br=ur+5,Dn=ur+6;function uj(r,e){var t;return e?t="option":t="argument",r.length<Dn+1?new RangeError(wr("invalid %s. `state` array has insufficient length.",t)):r[0]!==T0?new RangeError(wr("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,T0,r[0])):r[1]!==_0?new RangeError(wr("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,_0,r[1])):r[ft]!==ur?new RangeError(wr("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ur,r[ft])):r[ct]!==1?new RangeError(wr("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[ct])):r[br]!==r.length-Dn?new RangeError(wr("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Dn,r[br])):null}function oj(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=d3(t,Tjr)+i>>>0;return r}function kjr(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=Ojr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=d3(n,_jr)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=d3(n,Ijr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=Mjr,r}function jjr(r){var e,t,i,n;for(n=ur-c3,t=0;t<n;t++)e=r[t]&l3|r[t+1]&p3,r[t]=r[t+c3]^e>>>1^g3[e&m3];for(i=ur-1;t<i;t++)e=r[t]&l3|r[t+1]&p3,r[t]=r[t-n]^e>>>1^g3[e&m3];return e=r[i]&l3|r[0]&p3,r[i]=r[c3-1]^e>>>1^g3[e&m3],r}function Cjr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!wjr(r))throw new TypeError(wr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(f3(r,"copy")&&(i.copy=r.copy,!Njr(r.copy)))throw new TypeError(wr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(f3(r,"state")){if(t=r.state,i.state=!0,!ij(t))throw new TypeError(wr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=uj(t,!0),u)throw u;i.copy===!1?e=t:(e=new yr(t.length),Fi(t.length,t,1,e,1)),t=new yr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,ur),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,t[br])}if(n===void 0)if(f3(r,"seed"))if(n=r.seed,i.seed=!0,nj(n)){if(n>sj)throw new RangeError(wr("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(Ejr(n)===!1||n.length<1)throw new TypeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!nj(n))throw new TypeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>sj)throw new RangeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new yr(Dn+a),e[0]=T0,e[1]=_0,e[ft]=ur,e[ct]=1,e[ct+1]=ur,e[br]=a,Fi.ndarray(a,n,1,0,e,1,br+1),t=new yr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,ur),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,a),t=oj(t,ur,Sjr),t=kjr(t,ur,n,a)}else n=aj()>>>0}else n=aj()>>>0;return t===void 0&&(e=new yr(Dn+1),e[0]=T0,e[1]=_0,e[ft]=ur,e[ct]=1,e[ct+1]=ur,e[br]=1,e[br+1]=n,t=new yr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,ur),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,1),t=oj(t,ur,n)),de(h,"NAME","mt19937"),vt(h,"seed",o),vt(h,"seedLength",f),tj(h,"state",l,p),vt(h,"stateLength",v),vt(h,"byteLength",c),de(h,"toJSON",g),de(h,"MIN",0),de(h,"MAX",fj),de(h,"normalized",d),de(d,"NAME",h.NAME),vt(d,"seed",o),vt(d,"seedLength",f),tj(d,"state",l,p),vt(d,"stateLength",v),vt(d,"byteLength",c),de(d,"toJSON",g),de(d,"MIN",0),de(d,"MAX",Bjr),h;function o(){var m=e[br];return Fi(m,n,1,new yr(m),1)}function f(){return e[br]}function v(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return Fi(m,e,1,new yr(m),1)}function p(m){var q;if(!ij(m))throw new TypeError(wr("invalid argument. Must provide a Uint32Array. Value: `%s`.",m));if(q=uj(m,!1),q)throw q;i.copy===!1?i.state&&m.length===e.length?Fi(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new yr(m.length)),Fi(m.length,m,1,e,1)),t=new yr(e.buffer,e.byteOffset+(ft+1)*e.BYTES_PER_ELEMENT,ur),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,e[br])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=Ajr(e),m.params=[],m}function h(){var m,q;return q=e[ct+1],q>=ur&&(t=jjr(t),q=0),m=t[q],e[ct+1]=q+1,m^=m>>>11,m^=m<<7&Ljr,m^=m<<15&Rjr,m^=m>>>18,m>>>0}function d(){var m=h()>>>5,q=h()>>>6;return(m*Fjr+q)*cj}}lj.exports=Cjr});var gj=s((Kge,pj)=>{"use strict";var Vjr=h3(),Ujr=v3(),Gjr=Vjr({seed:Ujr()});pj.exports=Gjr});var z=s((rme,dj)=>{"use strict";var Hjr=b(),mj=gj(),Wjr=h3();Hjr(mj,"factory",Wjr);dj.exports=mj});var bj=s((eme,yj)=>{"use strict";var hj=j().isPrimitive,q3=y(),qj=vr();function xjr(r,e){return!hj(r)||qj(r)?new TypeError(q3("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!hj(e)||qj(e)?new TypeError(q3("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(q3("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}yj.exports=xjr});var Ej=s((tme,wj)=>{"use strict";var Djr=W(),zjr=Xt(),Xjr=u0();function Jjr(r,e,t){return e+Djr(zjr(Xjr*r()),2)*(t-e)}wj.exports=Jjr});var y3=s((ime,Lj)=>{"use strict";var he=b(),I0=R(),Nj=M(),Oj=L(),Aj=_(),Sj=A(),Tj=T(),Yjr=C(),L0=z().factory,_j=E(),Zjr=B(),R0=y(),$jr=bj(),Ij=Ej();function Qjr(){var r,e,t,i,n,a;if(arguments.length===0)e=L0();else if(arguments.length===1){if(r=arguments[0],!Oj(r))throw new TypeError(R0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Sj(r,"prng")){if(!Aj(r.prng))throw new TypeError(R0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=L0(r)}else{if(n=arguments[0],a=arguments[1],i=$jr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Oj(r))throw new TypeError(R0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Sj(r,"prng")){if(!Aj(r.prng))throw new TypeError(R0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=L0(r)}else e=L0()}return n===void 0?t=h:t=g,he(t,"NAME","arcsine"),r&&r.prng?(he(t,"seed",null),he(t,"seedLength",null),Nj(t,"state",Tj(null),Yjr),he(t,"stateLength",null),he(t,"byteLength",null),he(t,"toJSON",Tj(null)),he(t,"PRNG",e)):(I0(t,"seed",u),I0(t,"seedLength",o),Nj(t,"state",c,l),I0(t,"stateLength",f),I0(t,"byteLength",v),he(t,"toJSON",p),he(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Zjr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return Ij(e,n,a)}function h(d,m){return _j(d)||_j(m)||d>=m?NaN:Ij(e,d,m)}}Lj.exports=Qjr});var Pj=s((nme,Rj)=>{"use strict";var Kjr=y3(),rCr=Kjr();Rj.exports=rCr});var Bj=s((ame,Mj)=>{"use strict";var eCr=b(),Fj=Pj(),tCr=y3();eCr(Fj,"factory",tCr);Mj.exports=Fj});var b3=s((sme,Gj)=>{"use strict";var qe=b(),P0=R(),kj=M(),jj=L(),iCr=ln().isPrimitive,Cj=_(),Vj=A(),Uj=T(),nCr=C(),F0=z().factory,aCr=E(),sCr=B(),M0=y();function uCr(){var r,e,t,i;if(arguments.length===0)e=F0();else if(arguments.length===1&&jj(arguments[0]))if(r=arguments[0],Vj(r,"prng")){if(!Cj(r.prng))throw new TypeError(M0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=F0(r);else{if(i=arguments[0],!iCr(i))throw new TypeError(M0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!jj(r))throw new TypeError(M0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Vj(r,"prng")){if(!Cj(r.prng))throw new TypeError(M0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=F0(r)}else e=F0()}return i===void 0?t=p:t=l,qe(t,"NAME","bernoulli"),r&&r.prng?(qe(t,"seed",null),qe(t,"seedLength",null),kj(t,"state",Uj(null),nCr),qe(t,"stateLength",null),qe(t,"byteLength",null),qe(t,"toJSON",Uj(null)),qe(t,"PRNG",e)):(P0(t,"seed",n),P0(t,"seedLength",a),kj(t,"state",f,v),P0(t,"stateLength",u),P0(t,"byteLength",o),qe(t,"toJSON",c),qe(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=sCr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return e()<=i?1:0}function p(g){return aCr(g)||g<0||g>1?NaN:e()<=g?1:0}}Gj.exports=uCr});var Wj=s((ume,Hj)=>{"use strict";var oCr=b3(),vCr=oCr();Hj.exports=vCr});var zj=s((ome,Dj)=>{"use strict";var fCr=b(),xj=Wj(),cCr=b3();fCr(xj,"factory",cCr);Dj.exports=xj});var Zj=s((vme,Yj)=>{"use strict";var lCr=U(),Xj=sr(),pCr=P(),Jj=.00991256303526217;function gCr(r,e){var t,i,n;for(i=Xj(-.5*e*e),t=[],t.push(Jj/i),t.push(e),n=2;n<r;n++)t[n]=lCr(-2*pCr(Jj/t[n-1]+i)),i=Xj(-.5*t[n]*t[n]);return t.push(0),t}Yj.exports=gCr});var Qj=s((fme,$j)=>{"use strict";function mCr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}$j.exports=mCr});var eC=s((cme,rC)=>{"use strict";var Kj=P();function dCr(r,e,t){var i,n;do i=Kj(r())/e,n=Kj(r());while(-2*n<i*i);return t?i-e:e-i}rC.exports=dCr});var aC=s((lme,nC)=>{"use strict";var hCr=J(),tC=sr(),qCr=Zj(),yCr=Qj(),bCr=eC(),wCr=128,iC=3.442619855899,Yt=qCr(wCr,iC),ECr=yCr(Yt),NCr=127;function OCr(r,e){return t;function t(){for(var i,n,a,u,o,f,v;;){if(o=2*r()-1,f=e()&NCr,hCr(o)<ECr[f])return o*Yt[f];if(f===0)return bCr(r,iC,o<0);if(u=o*Yt[f],a=u*u,v=f+1,i=tC(-.5*(Yt[f]*Yt[f]-a)),n=tC(-.5*(Yt[v]*Yt[v]-a)),n+r()*(i-n)<1)return u}}}nC.exports=OCr});var E3=s((pme,oC)=>{"use strict";var lt=b(),B0=R(),sC=M(),ACr=_(),SCr=L(),TCr=gr().isPrimitive,k0=A(),_Cr=ve(),w3=z().factory,uC=T(),ICr=C(),LCr=X(),RCr=ei(),PCr=B(),zn=y(),FCr=aC();function MCr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!SCr(r))throw new TypeError(zn("invalid argument. Must provide an object. Value: `%s`.",r));if(k0(r,"copy")&&(n.copy=r.copy,!TCr(r.copy)))throw new TypeError(zn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(k0(r,"prng")){if(!ACr(r.prng))throw new TypeError(zn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(k0(r,"state")){if(n.state=r.state,!_Cr(r.state))throw new TypeError(zn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(k0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(zn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=w3(n),e=t.normalized):(t=w3({seed:LCr(1+RCr*e()),copy:n.copy}),n.seed=null):(t=w3(n),e=t.normalized),i=FCr(e,t),lt(i,"NAME","improved-ziggurat"),n.seed===null?(lt(i,"seed",null),lt(i,"seedLength",null)):(B0(i,"seed",a),B0(i,"seedLength",u)),r&&r.prng?(sC(i,"state",uC(null),ICr),lt(i,"stateLength",null),lt(i,"byteLength",null),lt(i,"toJSON",uC(null))):(sC(i,"state",v,c),B0(i,"stateLength",o),B0(i,"byteLength",f),lt(i,"toJSON",l)),lt(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function f(){return t.byteLength}function v(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=PCr(t.state),p.params=[],p}}oC.exports=MCr});var fC=s((gme,vC)=>{"use strict";var BCr=E3(),kCr=BCr();vC.exports=kCr});var pt=s((mme,lC)=>{"use strict";var jCr=b(),cC=fC(),CCr=E3();jCr(cC,"factory",CCr);lC.exports=cC});var gC=s((dme,pC)=>{"use strict";var VCr=_(),UCr=VCr(Object.assign);pC.exports=UCr});var dC=s((hme,mC)=>{"use strict";var GCr=Object.assign;mC.exports=GCr});var qC=s((qme,hC)=>{"use strict";var HCr=typeof Object.getOwnPropertySymbols<"u";hC.exports=HCr});var wC=s((yme,bC)=>{"use strict";var yC=qi(),WCr=yC.getOwnPropertySymbols;function xCr(r){return WCr(yC(r))}bC.exports=xCr});var NC=s((bme,EC)=>{"use strict";function DCr(){return[]}EC.exports=DCr});var AC=s((wme,OC)=>{"use strict";var zCr=qC(),XCr=wC(),JCr=NC(),N3;zCr?N3=XCr:N3=JCr;OC.exports=N3});var TC=s((Eme,SC)=>{"use strict";var YCr=Ei(),ZCr=AC(),$Cr=gn();function QCr(r){var e,t,i;for(e=YCr(r),t=ZCr(r),i=0;i<t.length;i++)$Cr(r,t[i])&&e.push(t[i]);return e}SC.exports=QCr});var IC=s((Nme,_C)=>{"use strict";var KCr=TC();_C.exports=KCr});var PC=s((Ome,RC)=>{"use strict";var rVr=IC(),LC=qi(),eVr=y();function tVr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(eVr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=LC(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=rVr(LC(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}RC.exports=tVr});var Xn=s((Ame,FC)=>{"use strict";var iVr=gC(),nVr=dC(),aVr=PC(),O3;iVr?O3=nVr:O3=aVr;FC.exports=O3});var jC=s((Sme,kC)=>{"use strict";var MC=D().isPrimitive,BC=y();function sVr(r,e){return MC(r)?MC(e)?null:new TypeError(BC("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(BC("invalid argument. First argument must be a positive number. Value: `%s`.",r))}kC.exports=sVr});var HC=s((Tme,GC)=>{"use strict";var CC=P(),VC=U(),uVr=W(),UC=1/3;function oVr(r,e,t){var i,n,a,u,o,f,v,c,l,p;for(t<1?(f=t+1-UC,o=1/VC(9*f),c=uVr(r(),1/t)):(f=t-UC,o=1/VC(9*f),c=1),i=!0;i;){do v=e(),p=1+o*v;while(p<=0);p*=p*p,n=v*v,a=1-.331*n*n,u=.5*n+f*(1-p+CC(p)),l=r(),(l<a||CC(l)<u)&&(i=!1)}return f*p*c}GC.exports=oVr});var DC=s((_me,xC)=>{"use strict";var A3=W(),WC=P();function vVr(r,e,t){var i,n,a,u,o,f,v,c;for(a=t-1,o=A3(a+a,.5),i=!0;i===!0;)u=e(),v=.5*(1+u/o),v>=0&&v<=1&&(f=r(),n=A3(u,4),c=8*t-12,c=1-n/c,f<=c?i=!1:(c+=.5*A3(n/(8*t-8),2),f<c&&(c=a*WC(4*v*(1-v)),c+=u*u/2,c>=WC(f)&&(i=!1))));return v}xC.exports=vVr});var XC=s((Ime,zC)=>{"use strict";var fVr=W(),j0=P();function cVr(r,e,t,i){var n,a,u,o,f,v,c,l,p,g,h;for(o=t-1,f=i-1,v=o+f,c=v*j0(v),u=o/v,n=.5/fVr(v,.5),a=!0;a===!0;)l=e(),g=u+l*n,g>=0&&g<=1&&(p=r(),h=o*j0(g/o),h+=f*j0((1-g)/f),h+=c+.5*l*l,h>=j0(p)&&(a=!1));return g}zC.exports=cVr});var ZC=s((Lme,YC)=>{"use strict";var S3=sr(),JC=W(),T3=P();function lVr(r,e,t){for(var i,n,a,u,o,f,v;;)if(u=r(),o=r(),f=JC(u,1/e),v=JC(o,1/t),a=f+v,a<=1)return a>0?f/a:(i=T3(u)/e,n=T3(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),S3(i-T3(S3(i)+S3(n))))}YC.exports=lVr});var KC=s((Rme,QC)=>{"use strict";var $C=HC(),pVr=DC(),gVr=XC(),mVr=ZC();function dVr(r,e,t,i){var n,a;return t===i&&t>1.5?pVr(r,e,t):t>1&&i>1?gVr(r,e,t,i):t<1&&i<1?mVr(r,t,i):(n=$C(r,e,t),a=$C(r,e,i),n/(n+a))}QC.exports=dVr});var R3=s((Pme,vV)=>{"use strict";var ye=b(),C0=R(),rV=M(),eV=L(),tV=gr().isPrimitive,iV=_(),Mi=A(),nV=T(),hVr=C(),aV=pt().factory,V0=z().factory,sV=E(),_3=ot(),I3=lr(),L3=ve(),uV=Xn(),qVr=B(),be=y(),yVr=jC(),oV=KC();function bVr(){var r,e,t,i,n,a,u,o,f;if(o=!0,arguments.length===0)n={copy:!1},a=V0(n);else if(arguments.length===1){if(n=arguments[0],!eV(n))throw new TypeError(be("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Mi(n,"copy")&&!tV(n.copy))throw new TypeError(be("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Mi(n,"prng")){if(!iV(n.prng))throw new TypeError(be("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Mi(n,"state")&&!L3(n.state))throw new TypeError(be("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=uV({},n),n.copy===!1?o=!1:n.state&&(n.state=_3(n.state.length,n.state,1,new I3(n.state.length),1)),n.copy=!1,a=V0(n)}}else{if(t=arguments[0],i=arguments[1],f=yVr(t,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!eV(n))throw new TypeError(be("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Mi(n,"copy")&&!tV(n.copy))throw new TypeError(be("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Mi(n,"prng")){if(!iV(n.prng))throw new TypeError(be("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Mi(n,"state")&&!L3(n.state))throw new TypeError(be("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=uV({},n),n.copy===!1?o=!1:n.state&&(n.state=_3(n.state.length,n.state,1,new I3(n.state.length),1)),n.copy=!1,a=V0(n)}}else n={copy:!1},a=V0(n)}return n&&n.prng?e=aV({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=aV({state:r,copy:!1})),t===void 0?u=q:u=m,ye(u,"NAME","beta"),n&&n.prng?(ye(u,"seed",null),ye(u,"seedLength",null),rV(u,"state",nV(null),hVr),ye(u,"stateLength",null),ye(u,"byteLength",null),ye(u,"toJSON",nV(null)),ye(u,"PRNG",a)):(C0(u,"seed",v),C0(u,"seedLength",c),rV(u,"state",g,h),C0(u,"stateLength",l),C0(u,"byteLength",p),ye(u,"toJSON",d),ye(u,"PRNG",a),a=a.normalized),u;function v(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function g(){return a.state}function h(N){if(!L3(N))throw new TypeError(be("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=_3(N.length,N,1,new I3(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=qVr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function m(){return oV(a,e,t,i)}function q(N,O){return sV(N)||sV(O)||N<=0||O<=0?NaN:oV(a,e,N,O)}}vV.exports=bVr});var cV=s((Fme,fV)=>{"use strict";var wVr=R3(),EVr=wVr();fV.exports=EVr});var gV=s((Mme,pV)=>{"use strict";var NVr=b(),lV=cV(),OVr=R3();NVr(lV,"factory",OVr);pV.exports=lV});var qV=s((Bme,hV)=>{"use strict";var mV=D().isPrimitive,dV=y();function AVr(r,e){return mV(r)?mV(e)?null:new TypeError(dV("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(dV("invalid argument. First argument must be a positive number. Value: `%s`.",r))}hV.exports=AVr});var wV=s((kme,bV)=>{"use strict";var yV=P();function SVr(r,e,t,i,n){var a,u,o,f,v,c,l;for(a=!0;a;){do v=e(),l=1+n*v;while(l<=0);l*=l*l,u=v*v,o=1-.331*u*u,f=.5*u+i*(1-l+yV(l)),c=r(),(c<o||yV(c)<f)&&(a=!1)}return 1/t*i*l}bV.exports=SVr});var k3=s((jme,RV)=>{"use strict";var we=b(),U0=R(),EV=M(),NV=L(),P3=ve(),OV=gr().isPrimitive,AV=_(),Bi=A(),SV=T(),TVr=C(),TV=pt().factory,G0=z().factory,_V=E(),F3=U(),IV=W(),M3=ot(),B3=lr(),_Vr=B(),LV=Xn(),Ee=y(),IVr=qV(),H0=wV(),W0=1/3;function LVr(){var r,e,t,i,n,a,u,o,f,v,c;if(o=!0,arguments.length===0)n={copy:!1},a=G0(n);else if(arguments.length===1){if(n=arguments[0],!NV(n))throw new TypeError(Ee("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Bi(n,"copy")&&!OV(n.copy))throw new TypeError(Ee("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Bi(n,"prng")){if(!AV(n.prng))throw new TypeError(Ee("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Bi(n,"state")&&!P3(n.state))throw new TypeError(Ee("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=LV({},n),n.copy===!1?o=!1:n.state&&(n.state=M3(n.state.length,n.state,1,new B3(n.state.length),1)),n.copy=!1,a=G0(n)}}else{if(e=arguments[0],i=arguments[1],f=IVr(e,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!NV(n))throw new TypeError(Ee("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Bi(n,"copy")&&!OV(n.copy))throw new TypeError(Ee("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Bi(n,"prng")){if(!AV(n.prng))throw new TypeError(Ee("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Bi(n,"state")&&!P3(n.state))throw new TypeError(Ee("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=LV({},n),n.copy===!1?o=!1:n.state&&(n.state=M3(n.state.length,n.state,1,new B3(n.state.length),1)),n.copy=!1,a=G0(n)}}else n={copy:!1},a=G0(n)}return n&&n.prng?t=TV({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=TV({state:r,copy:!1})),e===void 0?u=F:(e>=1?(u=N,c=e-W0):(u=O,c=e+1-W0),v=1/F3(9*c)),we(u,"NAME","gamma"),n&&n.prng?(we(u,"seed",null),we(u,"seedLength",null),EV(u,"state",SV(null),TVr),we(u,"stateLength",null),we(u,"byteLength",null),we(u,"toJSON",SV(null)),we(u,"PRNG",a)):(U0(u,"seed",l),U0(u,"seedLength",p),EV(u,"state",d,m),U0(u,"stateLength",g),U0(u,"byteLength",h),we(u,"toJSON",q),we(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function g(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function m(S){if(!P3(S))throw new TypeError(Ee("invalid argument. Must provide a Uint32Array. Value: `%s`.",S));o&&(S=M3(S.length,S,1,new B3(S.length),1)),a.state=S}function q(){var S={};return S.type="PRNG",S.name=u.NAME,S.state=_Vr(a.state),e===void 0?S.params=[]:S.params=[e,i],S}function N(){return H0(a,t,i,c,v)}function O(){return H0(a,t,i,c,v)*IV(a(),1/e)}function F(S,x){var Q,G;return _V(S)||_V(x)||S<=0||x<=0?NaN:S<1?(G=S+1-W0,Q=1/F3(9*G),H0(a,t,x,G,Q)*IV(a(),1/S)):(G=S-W0,Q=1/F3(9*G),H0(a,t,x,G,Q))}}RV.exports=LVr});var FV=s((Cme,PV)=>{"use strict";var RVr=k3(),PVr=RVr();PV.exports=PVr});var ki=s((Vme,BV)=>{"use strict";var FVr=b(),MV=FV(),MVr=k3();FVr(MV,"factory",MVr);BV.exports=MV});var VV=s((Ume,CV)=>{"use strict";var kV=D().isPrimitive,jV=y();function BVr(r,e){return kV(r)?kV(e)?null:new TypeError(jV("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(jV("invalid argument. First argument must be a positive number. Value: `%s`.",r))}CV.exports=BVr});var GV=s((Gme,UV)=>{"use strict";function kVr(r,e,t){return r(e,1)/r(t,1)}UV.exports=kVr});var j3=s((Hme,JV)=>{"use strict";var gt=b(),x0=R(),HV=M(),WV=L(),xV=T(),jVr=C(),D0=ki().factory,DV=E(),CVr=B(),zV=y(),VVr=VV(),XV=GV();function UVr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=D0();else if(arguments.length===1){if(i=arguments[0],!WV(i))throw new TypeError(zV("invalid argument. Options argument must be an object. Value: `%s`.",i));r=D0(i)}else{if(e=arguments[0],t=arguments[1],u=VVr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!WV(i))throw new TypeError(zV("invalid argument. Options argument must be an object. Value: `%s`.",i));r=D0(i)}else r=D0()}return e===void 0?a=d:a=h,n=r.PRNG,gt(a,"NAME","betaprime"),i&&i.prng?(gt(a,"seed",null),gt(a,"seedLength",null),HV(a,"state",xV(null),jVr),gt(a,"stateLength",null),gt(a,"byteLength",null),gt(a,"toJSON",xV(null))):(x0(a,"seed",o),x0(a,"seedLength",f),HV(a,"state",l,p),x0(a,"stateLength",v),x0(a,"byteLength",c),gt(a,"toJSON",g)),gt(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=CVr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return XV(r,e,t)}function d(m,q){return DV(m)||DV(q)||m<=0||q<=0?NaN:XV(r,m,q)}}JV.exports=UVr});var ZV=s((Wme,YV)=>{"use strict";var GVr=j3(),HVr=GVr();YV.exports=HVr});var KV=s((xme,QV)=>{"use strict";var WVr=b(),$V=ZV(),xVr=j3();WVr($V,"factory",xVr);QV.exports=$V});var eU=s((Dme,rU)=>{"use strict";var DVr=X();function zVr(r){return DVr(r)===r&&r>0}rU.exports=zVr});var C3=s((zme,tU)=>{"use strict";var XVr=eU();tU.exports=XVr});var nU=s((Xme,iU)=>{"use strict";function JVr(r){return r>=0&&r<=1}iU.exports=JVr});var sU=s((Jme,aU)=>{"use strict";var YVr=nU();aU.exports=YVr});var vU=s((Yme,oU)=>{"use strict";var ZVr=re().isPrimitive,$Vr=ln().isPrimitive,uU=y();function QVr(r,e){return ZVr(r)?$Vr(e)?null:new TypeError(uU("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(uU("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}oU.exports=QVr});var cU=s((Zme,fU)=>{"use strict";function KVr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}fU.exports=KVr});var pU=s(($me,lU)=>{"use strict";var rUr=E();function eUr(r){return r===0||rUr(r)?r:r<0?-1:1}lU.exports=eUr});var z0=s((Qme,gU)=>{"use strict";var tUr=pU();gU.exports=tUr});var dU=s((Kme,mU)=>{"use strict";var iUr=W(),nUr=1/12,aUr=1/360,sUr=1/1260;function uUr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=iUr(r,2),(nUr-(aUr-sUr/e)/e)/r}}mU.exports=uUr});var qU=s((rde,hU)=>{"use strict";var V3=X(),oUr=z0(),vUr=U(),U3=J(),X0=P(),J0=dU(),fUr=1/6;function cUr(r,e,t){var i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O,F,S,x,Q,G,_r,Ir,or,Rt;for(x=V3((e+1)*t),v=e-x+1,Q=1-t,G=t/Q,c=(e+1)*G,u=e*t*Q,a=vUr(u),m=1.15+2.53*a,d=-.0873+.0248*m+.01*t,q=e*t+.5,i=(2.83+5.1/m)*a,h=.92-4.2/m,n=.86*h,O=(x+.5)*X0((x+1)/(G*v)),O+=J0(x)+J0(e-x);;){if(or=r(),or<=n)return Ir=or/h-.43,G=Ir*(2*d/(.5-U3(Ir))+m)+q,V3(G);if(or>=h?Ir=r()-.5:(Ir=or/h-.93,Ir=oUr(Ir)*.5-Ir,or=h*r()),l=.5-U3(Ir),S=V3(Ir*(2*d/l+m)+q),!(S<0||S>e))if(or=or*i/(d/(l*l)+m),p=U3(S-x),p>15){if(or=X0(or),o=p/u,f=(p/3+.625)*p,f+=fUr,f/=u,o*=f+.5,_r=-(p*p)/(2*u),or<_r-o||or<=_r+o&&(g=e-S+1,Rt=O+(e+1)*X0(v/g),Rt+=(S+.5)*X0(g*G/(S+1)),Rt+=-(J0(S)+J0(e-S)),or<=Rt))return S}else{if(N=1,x<S)for(F=x;F<=S;F++)N*=c/F-G;else if(x>S)for(F=S;F<=x;F++)or*=c/F-G;if(or<=N)return S}}}hU.exports=cUr});var wU=s((ede,bU)=>{"use strict";var lUr=cU(),pUr=qU();function yU(r,e,t){return t>.5?e-yU(r,e,1-t):e*t<10?lUr(r,e,t):pUr(r,e,t)}bU.exports=yU});var G3=s((tde,IU)=>{"use strict";var Ne=b(),Y0=R(),EU=M(),NU=L(),OU=_(),AU=A(),SU=T(),gUr=C(),TU=E(),mUr=C3(),dUr=sU(),Z0=z().factory,hUr=B(),$0=y(),qUr=vU(),_U=wU();function yUr(){var r,e,t,i,n,a;if(arguments.length===0)e=Z0();else if(arguments.length===1){if(r=arguments[0],!NU(r))throw new TypeError($0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(AU(r,"prng")){if(!OU(r.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Z0(r)}else{if(n=arguments[0],a=arguments[1],i=qUr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!NU(r))throw new TypeError($0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(AU(r,"prng")){if(!OU(r.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Z0(r)}else e=Z0()}return n===void 0?t=h:t=g,Ne(t,"NAME","binomial"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),EU(t,"state",SU(null),gUr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",SU(null)),Ne(t,"PRNG",e)):(Y0(t,"seed",u),Y0(t,"seedLength",o),EU(t,"state",c,l),Y0(t,"stateLength",f),Y0(t,"byteLength",v),Ne(t,"toJSON",p),Ne(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=hUr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return _U(e,n,a)}function h(d,m){return TU(d)||TU(m)||!mUr(d)||!dUr(m)?NaN:_U(e,d,m)}}IU.exports=yUr});var RU=s((ide,LU)=>{"use strict";var bUr=G3(),wUr=bUr();LU.exports=wUr});var MU=s((nde,FU)=>{"use strict";var EUr=b(),PU=RU(),NUr=G3();EUr(PU,"factory",NUr);FU.exports=PU});var kU=s((ade,BU)=>{"use strict";var OUr=U(),AUr=P(),SUr=Xt(),TUr=zt(),_Ur=it();function IUr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=OUr(-2*AUr(n)),o=_Ur*a,t=u*TUr(o),e=!1,u*SUr(o)}return e=!0,t}}BU.exports=IUr});var CU=s((sde,jU)=>{"use strict";var LUr=U(),RUr=P(),PUr=zt(),FUr=Br(),MUr=PUr(FUr);function BUr(r){var e=LUr(-2*RUr(r));return e*MUr}jU.exports=BUr});var UU=s((ude,VU)=>{"use strict";var kUr=U(),jUr=P(),CUr=zt(),VUr=it();function UUr(r){var e=kUr(-2*jUr(r)),t=VUr*r;return e*CUr(t)}VU.exports=UUr});var H3=s((ode,xU)=>{"use strict";var Gr=b(),Q0=R(),GU=M(),GUr=L(),HUr=_(),WUr=gr().isPrimitive,Jn=A(),xUr=ve(),HU=z().factory,WU=T(),DUr=C(),zUr=B(),Yn=y(),XUr=kU(),JUr=CU(),YUr=UU();function ZUr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!GUr(r))throw new TypeError(Yn("invalid argument. Must provide an object. Value: `%s`.",r));if(Jn(r,"copy")&&(n.copy=r.copy,!WUr(r.copy)))throw new TypeError(Yn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Jn(r,"prng")){if(!HUr(r.prng))throw new TypeError(Yn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Jn(r,"state")){if(n.state=r.state,!xUr(r.state))throw new TypeError(Yn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Jn(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Yn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=HU(n),e=i.normalized):n.seed=null:(i=HU(n),e=i.normalized),t=XUr(e),Gr(t,"NAME","box-muller"),n.seed===null?(Gr(t,"seed",null),Gr(t,"seedLength",null)):(Q0(t,"seed",a),Q0(t,"seedLength",u)),r&&r.prng?(GU(t,"state",WU(null),DUr),Gr(t,"stateLength",null),Gr(t,"byteLength",null),Gr(t,"toJSON",WU(null))):(GU(t,"state",v,c),Q0(t,"stateLength",o),Q0(t,"byteLength",f),Gr(t,"toJSON",l)),Gr(t,"PRNG",e),Jn(e,"MIN")?(Gr(t,"MIN",JUr(e.MIN)),Gr(t,"MAX",YUr(e.MIN))):(Gr(t,"MIN",null),Gr(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function f(){return i.byteLength}function v(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=zUr(i.state),p.params=[],p}}xU.exports=ZUr});var zU=s((vde,DU)=>{"use strict";var $Ur=H3(),QUr=$Ur();DU.exports=QUr});var YU=s((fde,JU)=>{"use strict";var KUr=b(),XU=zU(),rGr=H3();KUr(XU,"factory",rGr);JU.exports=XU});var QU=s((cde,$U)=>{"use strict";var eGr=j().isPrimitive,tGr=D().isPrimitive,ZU=y(),iGr=vr();function nGr(r,e){return!eGr(r)||iGr(r)?new TypeError(ZU("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):tGr(e)?null:new TypeError(ZU("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}$U.exports=nGr});var rG=s((lde,KU)=>{"use strict";function aGr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}KU.exports=aGr});var tG=s((pde,eG)=>{"use strict";function sGr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}eG.exports=sGr});var aG=s((gde,nG)=>{"use strict";var uGr=ar(),iG=ce(),oGr=rG(),vGr=tG(),fGr=.7853981633974483,cGr=3061616997868383e-32,lGr=.3333333333333341,pGr=2147483647;function gGr(r,e,t){var i,n,a,u,o,f,v,c,l;return i=uGr(r),n=i&pGr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=fGr-r,c=cGr-e,r=l+c,e=0),l=r*r,c=l*l,u=oGr(c),v=l*vGr(c),o=l*r,u=e+l*(o*(u+v)+e),u+=lGr*o,c=r+u,n>=1072010280?(v=t,(1-(i>>30&2))*(v-2*(r-(c*c/(c+v)-u)))):t===1?c:(l=iG(c,0),v=u-(l-r),a=-1/c,f=iG(a,0),o=1+f*l,f+a*(o+f*v))}nG.exports=gGr});var uG=s((mde,sG)=>{"use strict";var mGr=aG();sG.exports=mGr});var fG=s((dde,vG)=>{"use strict";var dGr=ar(),oG=uG(),hGr=_n(),W3=[0,0],qGr=2147483647,yGr=1072243195,bGr=2146435072,wGr=1044381696;function EGr(r){var e,t;return e=dGr(r),e&=qGr,e<=yGr?e<wGr?r:oG(r,0,1):e>=bGr?NaN:(t=hGr(r,W3),oG(W3[0],W3[1],1-((t&1)<<1)))}vG.exports=EGr});var x3=s((hde,cG)=>{"use strict";var NGr=fG();cG.exports=NGr});var pG=s((qde,lG)=>{"use strict";var OGr=x3(),AGr=Br();function SGr(r,e,t){return e+t*OGr(AGr*(r()-.5))}lG.exports=SGr});var D3=s((yde,wG)=>{"use strict";var mt=b(),K0=R(),gG=M(),mG=L(),dG=_(),hG=A(),qG=T(),TGr=C(),yG=E(),ji=pt().factory,_Gr=B(),rs=y(),IGr=QU(),bG=pG();function LGr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=ji();else if(arguments.length===1){if(t=arguments[0],!mG(t))throw new TypeError(rs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(hG(t,"prng")){if(!dG(t.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ji({prng:t.prng})}else e=ji(t)}else{if(u=arguments[0],r=arguments[1],a=IGr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!mG(t))throw new TypeError(rs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(hG(t,"prng")){if(!dG(t.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ji({prng:t.prng})}else e=ji(t)}else e=ji()}return u===void 0?n=d:n=h,i=e.PRNG,mt(n,"NAME","cauchy"),t&&t.prng?(mt(n,"seed",null),mt(n,"seedLength",null),gG(n,"state",qG(null),TGr),mt(n,"stateLength",null),mt(n,"byteLength",null),mt(n,"toJSON",qG(null))):(K0(n,"seed",o),K0(n,"seedLength",f),gG(n,"state",l,p),K0(n,"stateLength",v),K0(n,"byteLength",c),mt(n,"toJSON",g)),mt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=_Gr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return bG(e,u,r)}function d(m,q){return yG(m)||yG(q)||q<=0?NaN:bG(e,m,q)}}wG.exports=LGr});var NG=s((bde,EG)=>{"use strict";var RGr=D3(),PGr=RGr();EG.exports=PGr});var SG=s((wde,AG)=>{"use strict";var FGr=b(),OG=NG(),MGr=D3();FGr(OG,"factory",MGr);AG.exports=OG});var z3=s((Ede,PG)=>{"use strict";var dt=b(),es=R(),TG=M(),BGr=D().isPrimitive,_G=L(),IG=_(),LG=A(),RG=T(),kGr=C(),jGr=E(),Ci=ki().factory,CGr=B(),ts=y();function VGr(){var r,e,t,i,n;if(arguments.length===0)r=Ci();else if(arguments.length===1&&_G(arguments[0]))if(t=arguments[0],LG(t,"prng")){if(!IG(t.prng))throw new TypeError(ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ci({prng:t.prng})}else r=Ci(t);else{if(n=arguments[0],!BGr(n))throw new TypeError(ts("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!_G(t))throw new TypeError(ts("invalid argument. Options argument must be an object. Value: `%s`.",t));if(LG(t,"prng")){if(!IG(t.prng))throw new TypeError(ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ci(n/2,.5,{prng:t.prng})}else r=Ci(n/2,.5,t)}else r=Ci(n/2,.5)}return n===void 0?i=g:i=p,e=r.PRNG,dt(i,"NAME","chisquare"),t&&t.prng?(dt(i,"seed",null),dt(i,"seedLength",null),TG(i,"state",RG(null),kGr),dt(i,"stateLength",null),dt(i,"byteLength",null),dt(i,"toJSON",RG(null))):(es(i,"seed",a),es(i,"seedLength",u),TG(i,"state",v,c),es(i,"stateLength",o),es(i,"byteLength",f),dt(i,"toJSON",l)),dt(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=CGr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function g(h){return jGr(h)||h<=0?NaN:r(h/2,.5)}}PG.exports=VGr});var MG=s((Nde,FG)=>{"use strict";var UGr=z3(),GGr=UGr();FG.exports=GGr});var Zn=s((Ode,kG)=>{"use strict";var HGr=b(),BG=MG(),WGr=z3();HGr(BG,"factory",WGr);kG.exports=BG});var X3=s((Ade,WG)=>{"use strict";var ht=b(),is=R(),jG=M(),xGr=D().isPrimitive,CG=L(),VG=_(),UG=A(),GG=T(),DGr=C(),zGr=E(),Vi=Zn().factory,XGr=B(),HG=U(),ns=y();function JGr(){var r,e,t,i,n;if(arguments.length===0)r=Vi();else if(arguments.length===1&&CG(arguments[0]))if(t=arguments[0],UG(t,"prng")){if(!VG(t.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Vi({prng:t.prng})}else r=Vi(t);else{if(n=arguments[0],!xGr(n))throw new TypeError(ns("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!CG(t))throw new TypeError(ns("invalid argument. Options argument must be an object. Value: `%s`.",t));if(UG(t,"prng")){if(!VG(t.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Vi(n,{prng:t.prng})}else r=Vi(n,t)}else r=Vi(n)}return n===void 0?i=g:i=p,e=r.PRNG,ht(i,"NAME","chi"),t&&t.prng?(ht(i,"seed",null),ht(i,"seedLength",null),jG(i,"state",GG(null),DGr),ht(i,"stateLength",null),ht(i,"byteLength",null),ht(i,"toJSON",GG(null))):(is(i,"seed",a),is(i,"seedLength",u),jG(i,"state",v,c),is(i,"stateLength",o),is(i,"byteLength",f),ht(i,"toJSON",l)),ht(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=XGr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return HG(r())}function g(h){return zGr(h)||h<=0?NaN:HG(r(h))}}WG.exports=JGr});var DG=s((Sde,xG)=>{"use strict";var YGr=X3(),ZGr=YGr();xG.exports=ZGr});var JG=s((Tde,XG)=>{"use strict";var $Gr=b(),zG=DG(),QGr=X3();$Gr(zG,"factory",QGr);XG.exports=zG});var $G=s((_de,ZG)=>{"use strict";var KGr=j().isPrimitive,rHr=D().isPrimitive,YG=y(),eHr=vr();function tHr(r,e){return!KGr(r)||eHr(r)?new TypeError(YG("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):rHr(e)?null:new TypeError(YG("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}ZG.exports=tHr});var KG=s((Ide,QG)=>{"use strict";var J3=E(),iHr=jn(),nHr=Br();function aHr(r,e,t){var i;return J3(r)||J3(e)||J3(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+iHr(i)/nHr)/2)}QG.exports=aHr});var tH=s((Lde,eH)=>{"use strict";var rH=E();function sHr(r,e){return rH(r)||rH(e)?NaN:r<e?0:1}eH.exports=sHr});var aH=s((Rde,nH)=>{"use strict";var uHr=T(),iH=E();function oHr(r){if(iH(r))return uHr(NaN);return e;function e(t){return iH(t)?NaN:t<r?0:1}}nH.exports=oHr});var as=s((Pde,uH)=>{"use strict";var vHr=b(),sH=tH(),fHr=aH();vHr(sH,"factory",fHr);uH.exports=sH});var vH=s((Fde,oH)=>{"use strict";var cHr=T(),lHr=as().factory,Y3=E(),pHr=jn(),gHr=Br();function mHr(r,e){if(Y3(r)||Y3(e)||e<0)return cHr(NaN);if(e===0)return lHr(r);return t;function t(i){var n;return Y3(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+pHr(n)/gHr)/2)}}oH.exports=mHr});var lH=s((Mde,cH)=>{"use strict";var dHr=b(),fH=KG(),hHr=vH();dHr(fH,"factory",hHr);cH.exports=fH});var Z3=s((Bde,pH)=>{"use strict";var qHr=lH(),yHr=1e4,bHr=1e-12;function wHr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<yHr;){if(u=(i+n)/2,n-i<bHr)return u;a=qHr(u,e,t),r>a?i=u:n=u,o+=1}return u}pH.exports=wHr});var mH=s((kde,gH)=>{"use strict";var $3=E(),EHr=Z3();function NHr(r,e,t){return $3(e)||$3(t)||$3(r)||t<0||r<0||r>1?NaN:t===0?e:EHr(r,e,t)}gH.exports=NHr});var hH=s((jde,dH)=>{"use strict";var OHr=E();function AHr(r,e){return OHr(r)||r<0||r>1?NaN:e}dH.exports=AHr});var bH=s((Cde,yH)=>{"use strict";var SHr=T(),qH=E();function THr(r){if(qH(r))return SHr(NaN);return e;function e(t){return qH(t)||t<0||t>1?NaN:r}}yH.exports=THr});var Q3=s((Vde,EH)=>{"use strict";var _Hr=b(),wH=hH(),IHr=bH();_Hr(wH,"factory",IHr);EH.exports=wH});var OH=s((Ude,NH)=>{"use strict";var LHr=T(),RHr=Q3().factory,K3=E(),PHr=Z3();function FHr(r,e){if(K3(r)||K3(e)||e<0)return LHr(NaN);if(e===0)return RHr(r);return t;function t(i){return K3(i)||i<0||i>1?NaN:PHr(i,r,e)}}NH.exports=FHr});var TH=s((Gde,SH)=>{"use strict";var MHr=b(),AH=mH(),BHr=OH();MHr(AH,"factory",BHr);SH.exports=AH});var IH=s((Hde,_H)=>{"use strict";var kHr=TH();function jHr(r,e,t){return kHr(r(),e,t)}_H.exports=jHr});var rv=s((Wde,jH)=>{"use strict";var Oe=b(),ss=R(),LH=M(),RH=L(),PH=_(),FH=A(),MH=T(),CHr=C(),us=z().factory,BH=E(),VHr=B(),os=y(),UHr=$G(),kH=IH();function GHr(){var r,e,t,i,n,a;if(arguments.length===0)e=us();else if(arguments.length===1){if(r=arguments[0],!RH(r))throw new TypeError(os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(FH(r,"prng")){if(!PH(r.prng))throw new TypeError(os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=us(r)}else{if(n=arguments[0],a=arguments[1],i=UHr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!RH(r))throw new TypeError(os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(FH(r,"prng")){if(!PH(r.prng))throw new TypeError(os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=us(r)}else e=us()}return n===void 0?t=h:t=g,Oe(t,"NAME","cosine"),r&&r.prng?(Oe(t,"seed",null),Oe(t,"seedLength",null),LH(t,"state",MH(null),CHr),Oe(t,"stateLength",null),Oe(t,"byteLength",null),Oe(t,"toJSON",MH(null)),Oe(t,"PRNG",e)):(ss(t,"seed",u),ss(t,"seedLength",o),LH(t,"state",c,l),ss(t,"stateLength",f),ss(t,"byteLength",v),Oe(t,"toJSON",p),Oe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=VHr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return kH(e,n,a)}function h(d,m){return BH(d)||BH(m)||m<=0?NaN:kH(e,d,m)}}jH.exports=GHr});var VH=s((xde,CH)=>{"use strict";var HHr=rv(),WHr=HHr();CH.exports=WHr});var HH=s((Dde,GH)=>{"use strict";var xHr=b(),UH=VH(),DHr=rv();xHr(UH,"factory",DHr);GH.exports=UH});var zH=s((zde,DH)=>{"use strict";var WH=kr().isPrimitive,ev=y(),xH=vr();function zHr(r,e){return!WH(r)||xH(r)?new TypeError(ev("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!WH(e)||xH(e)?new TypeError(ev("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(ev("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}DH.exports=zHr});var YH=s((Xde,JH)=>{"use strict";var tv=Ii(),Ui=X();function XH(r,e,t){var i,n,a,u,o,f,v,c,l;if(a=t-e,a===0)return e;if(v=r.MIN,c=r.MAX,n=c-v,n===a)return r()-v+e;if(n<a)for(u=0;;){for(a===tv?(u=Ui(a/(n+1)),a%(n+1)===n&&(u+=1)):u=Ui((a+1)/(n+1)),i=0,f=1;f<=u;){if(i+=(r()-v)*f,f*n===a-f+1)return i;f*=n+1}if(l=XH(r,0,Ui(a/f)),!(l>tv/f)&&(l*=f,i+=l,!(i>a)))return i+e}for(n===tv?(o=Ui(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Ui((n+1)/(a+1));;)if(i=r()-v,i=Ui(i/o),i<=a)return i+e}JH.exports=XH});var iv=s((Jde,iW)=>{"use strict";var Ae=b(),vs=R(),ZH=M(),$H=L(),QH=_(),KH=A(),rW=T(),XHr=C(),fs=z().factory,eW=E(),Gi=Lr(),JHr=B(),qt=y(),YHr=zH(),tW=YH();function ZHr(){var r,e,t,i,n,a;if(arguments.length===0)e=fs();else if(arguments.length===1){if(r=arguments[0],!$H(r))throw new TypeError(qt("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KH(r,"prng")){if(!QH(r.prng))throw new TypeError(qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Gi(e.MIN))throw new TypeError(qt("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Gi(e.MAX))throw new TypeError(qt("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=fs(r)}else{if(n=arguments[0],a=arguments[1],i=YHr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!$H(r))throw new TypeError(qt("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KH(r,"prng")){if(!QH(r.prng))throw new TypeError(qt("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Gi(e.MIN))throw new TypeError(qt("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Gi(e.MAX))throw new TypeError(qt("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=fs(r)}else e=fs()}return n===void 0?t=h:t=g,Ae(t,"NAME","discrete-uniform"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),ZH(t,"state",rW(null),XHr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",rW(null)),Ae(t,"PRNG",e)):(vs(t,"seed",u),vs(t,"seedLength",o),ZH(t,"state",c,l),vs(t,"stateLength",f),vs(t,"byteLength",v),Ae(t,"toJSON",p),Ae(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=JHr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return tW(e,n,a)}function h(d,m){return eW(d)||eW(m)||!Gi(d)||!Gi(m)||d>m?NaN:tW(e,d,m)}}iW.exports=ZHr});var aW=s((Yde,nW)=>{"use strict";var $Hr=iv(),QHr=$Hr();nW.exports=QHr});var oW=s((Zde,uW)=>{"use strict";var KHr=b(),sW=aW(),rWr=iv();KHr(sW,"factory",rWr);uW.exports=sW});var cW=s(($de,fW)=>{"use strict";var eWr=D().isPrimitive,tWr=re().isPrimitive,vW=y();function iWr(r,e){return tWr(r)?eWr(e)?null:new TypeError(vW("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(vW("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}fW.exports=iWr});var pW=s((Qde,lW)=>{"use strict";var nWr=P();function aWr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*nWr(i)}lW.exports=aWr});var nv=s((Kde,wW)=>{"use strict";var Se=b(),cs=R(),gW=M(),mW=L(),dW=_(),hW=A(),qW=T(),sWr=C(),ls=z().factory,yW=E(),uWr=C3(),oWr=B(),ps=y(),vWr=cW(),bW=pW();function fWr(){var r,e,t,i,n,a;if(arguments.length===0)e=ls();else if(arguments.length===1){if(t=arguments[0],!mW(t))throw new TypeError(ps("invalid argument. Options argument must be an object. Value: `%s`.",t));if(hW(t,"prng")){if(!dW(t.prng))throw new TypeError(ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=ls(t)}else{if(a=arguments[0],r=arguments[1],n=vWr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!mW(t))throw new TypeError(ps("invalid argument. Options argument must be an object. Value: `%s`.",t));if(hW(t,"prng")){if(!dW(t.prng))throw new TypeError(ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=ls(t)}else e=ls()}return a===void 0?i=h:i=g,Se(i,"NAME","erlang"),t&&t.prng?(Se(i,"seed",null),Se(i,"seedLength",null),gW(i,"state",qW(null),sWr),Se(i,"stateLength",null),Se(i,"byteLength",null),Se(i,"toJSON",qW(null)),Se(i,"PRNG",e)):(cs(i,"seed",u),cs(i,"seedLength",o),gW(i,"state",c,l),cs(i,"stateLength",f),cs(i,"byteLength",v),Se(i,"toJSON",p),Se(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=oWr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return bW(e,a,r)}function h(d,m){return yW(d)||yW(m)||!uWr(d)||m<=0?NaN:bW(e,d,m)}}wW.exports=fWr});var NW=s((rhe,EW)=>{"use strict";var cWr=nv(),lWr=cWr();EW.exports=lWr});var SW=s((ehe,AW)=>{"use strict";var pWr=b(),OW=NW(),gWr=nv();pWr(OW,"factory",gWr);AW.exports=OW});var _W=s((the,TW)=>{"use strict";var mWr=P();function dWr(r,e){return-mWr(1-r())/e}TW.exports=dWr});var av=s((ihe,BW)=>{"use strict";var Te=b(),gs=R(),IW=M(),hWr=D().isPrimitive,LW=L(),RW=_(),PW=A(),FW=T(),qWr=C(),ms=z().factory,yWr=E(),bWr=B(),ds=y(),MW=_W();function wWr(){var r,e,t,i;if(arguments.length===0)t=ms();else if(arguments.length===1&&LW(arguments[0]))if(e=arguments[0],PW(e,"prng")){if(!RW(e.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ms(e);else{if(r=arguments[0],!hWr(r))throw new TypeError(ds("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!LW(e))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",e));if(PW(e,"prng")){if(!RW(e.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ms(e)}else t=ms()}return r===void 0?i=p:i=l,Te(i,"NAME","exponential"),e&&e.prng?(Te(i,"seed",null),Te(i,"seedLength",null),IW(i,"state",FW(null),qWr),Te(i,"stateLength",null),Te(i,"byteLength",null),Te(i,"toJSON",FW(null)),Te(i,"PRNG",t)):(gs(i,"seed",n),gs(i,"seedLength",a),IW(i,"state",f,v),gs(i,"stateLength",u),gs(i,"byteLength",o),Te(i,"toJSON",c),Te(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=bWr(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return MW(t,r)}function p(g){return yWr(g)||g<=0?NaN:MW(t,g)}}BW.exports=wWr});var jW=s((nhe,kW)=>{"use strict";var EWr=av(),NWr=EWr();kW.exports=NWr});var UW=s((ahe,VW)=>{"use strict";var OWr=b(),CW=jW(),AWr=av();OWr(CW,"factory",AWr);VW.exports=CW});var xW=s((she,WW)=>{"use strict";var GW=D().isPrimitive,HW=y();function SWr(r,e){return GW(r)?GW(e)?null:new TypeError(HW("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(HW("invalid argument. First argument must be a positive number. Value: `%s`.",r))}WW.exports=SWr});var zW=s((uhe,DW)=>{"use strict";function TWr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}DW.exports=TWr});var sv=s((ohe,rx)=>{"use strict";var yt=b(),hs=R(),XW=M(),JW=L(),YW=_(),ZW=A(),$W=T(),_Wr=C(),Hi=Zn().factory,QW=E(),IWr=B(),qs=y(),LWr=xW(),KW=zW();function RWr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Hi();else if(arguments.length===1){if(e=arguments[0],!JW(e))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ZW(e,"prng")){if(!YW(e.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Hi({prng:e.prng})}else r=Hi(e)}else{if(a=arguments[0],u=arguments[1],n=LWr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!JW(e))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ZW(e,"prng")){if(!YW(e.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Hi({prng:e.prng})}else r=Hi(e)}else r=Hi()}return a===void 0?i=d:i=h,t=r.PRNG,yt(i,"NAME","f"),e&&e.prng?(yt(i,"seed",null),yt(i,"seedLength",null),XW(i,"state",$W(null),_Wr),yt(i,"stateLength",null),yt(i,"byteLength",null),yt(i,"toJSON",$W(null))):(hs(i,"seed",o),hs(i,"seedLength",f),XW(i,"state",l,p),hs(i,"stateLength",v),hs(i,"byteLength",c),yt(i,"toJSON",g)),yt(i,"PRNG",t),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=IWr(t.state),a===void 0?m.params=[]:m.params=[a,u],m}function h(){return KW(r,a,u)}function d(m,q){return QW(m)||QW(q)||m<=0||q<=0?NaN:KW(r,m,q)}}rx.exports=RWr});var tx=s((vhe,ex)=>{"use strict";var PWr=sv(),FWr=PWr();ex.exports=FWr});var ax=s((fhe,nx)=>{"use strict";var MWr=b(),ix=tx(),BWr=sv();MWr(ix,"factory",BWr);nx.exports=ix});var ox=s((che,ux)=>{"use strict";var sx=D().isPrimitive,kWr=j().isPrimitive,uv=vr(),ov=y();function jWr(r,e,t){return!sx(r)||uv(r)?new TypeError(ov("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!sx(e)||uv(e)?new TypeError(ov("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!kWr(t)||uv(t)?new TypeError(ov("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}ux.exports=jWr});var fx=s((lhe,vx)=>{"use strict";var CWr=W(),VWr=P();function UWr(r,e,t,i){return i+t*CWr(-VWr(r()),-1/e)}vx.exports=UWr});var fv=s((phe,hx)=>{"use strict";var _e=b(),ys=R(),cx=M(),lx=L(),px=_(),gx=A(),mx=T(),GWr=C(),bs=z().factory,vv=E(),HWr=B(),ws=y(),WWr=ox(),dx=fx();function xWr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=bs();else if(arguments.length===1){if(e=arguments[0],!lx(e))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",e));if(gx(e,"prng")){if(!px(e.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=bs(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=WWr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!lx(e))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",e));if(gx(e,"prng")){if(!px(e.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=bs(e)}else t=bs()}return r===void 0?i=d:i=h,_e(i,"NAME","frechet"),e&&e.prng?(_e(i,"seed",null),_e(i,"seedLength",null),cx(i,"state",mx(null),GWr),_e(i,"stateLength",null),_e(i,"byteLength",null),_e(i,"toJSON",mx(null)),_e(i,"PRNG",t)):(ys(i,"seed",o),ys(i,"seedLength",f),cx(i,"state",l,p),ys(i,"stateLength",v),ys(i,"byteLength",c),_e(i,"toJSON",g),_e(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(m){t.state=m}function g(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=HWr(t.state),r===void 0?m.params=[]:m.params=[r,a,u],m}function h(){return dx(t,r,a,u)}function d(m,q,N){return vv(m)||vv(q)||vv(N)||m<=0||q<=0?NaN:dx(t,m,q,N)}}hx.exports=xWr});var yx=s((ghe,qx)=>{"use strict";var DWr=fv(),zWr=DWr();qx.exports=zWr});var Ex=s((mhe,wx)=>{"use strict";var XWr=b(),bx=yx(),JWr=fv();XWr(bx,"factory",JWr);wx.exports=bx});var Ax=s((dhe,Ox)=>{"use strict";var YWr=X(),Nx=P();function ZWr(r,e){var t=r();return t===0&&(t=r()),YWr(Nx(t)/Nx(1-e))}Ox.exports=ZWr});var cv=s((hhe,Px)=>{"use strict";var Ie=b(),Es=R(),Sx=M(),Tx=L(),$Wr=ln().isPrimitive,_x=_(),Ix=A(),Lx=T(),QWr=C(),Ns=z().factory,KWr=E(),rxr=B(),Os=y(),Rx=Ax();function exr(){var r,e,t,i;if(arguments.length===0)e=Ns();else if(arguments.length===1&&Tx(arguments[0]))if(r=arguments[0],Ix(r,"prng")){if(!_x(r.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r);else{if(i=arguments[0],!$Wr(i))throw new TypeError(Os("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!Tx(r))throw new TypeError(Os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Ix(r,"prng")){if(!_x(r.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r)}else e=Ns()}return i===void 0?t=p:t=l,Ie(t,"NAME","geometric"),r&&r.prng?(Ie(t,"seed",null),Ie(t,"seedLength",null),Sx(t,"state",Lx(null),QWr),Ie(t,"stateLength",null),Ie(t,"byteLength",null),Ie(t,"toJSON",Lx(null)),Ie(t,"PRNG",e)):(Es(t,"seed",n),Es(t,"seedLength",a),Sx(t,"state",f,v),Es(t,"stateLength",u),Es(t,"byteLength",o),Ie(t,"toJSON",c),Ie(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(g){e.state=g}function c(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=rxr(e.state),i===void 0?g.params=[]:g.params=[i],g}function l(){return Rx(e,i)}function p(g){return KWr(g)||g<0||g>1?NaN:Rx(e,g)}}Px.exports=exr});var Mx=s((qhe,Fx)=>{"use strict";var txr=cv(),ixr=txr();Fx.exports=ixr});var jx=s((yhe,kx)=>{"use strict";var nxr=b(),Bx=Mx(),axr=cv();nxr(Bx,"factory",axr);kx.exports=Bx});var Ux=s((bhe,Vx)=>{"use strict";var sxr=j().isPrimitive,uxr=D().isPrimitive,Cx=y(),oxr=vr();function vxr(r,e){return!sxr(r)||oxr(r)?new TypeError(Cx("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):uxr(e)?null:new TypeError(Cx("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Vx.exports=vxr});var Wx=s((whe,Hx)=>{"use strict";var Gx=P();function fxr(r,e,t){return e-t*Gx(-Gx(r()))}Hx.exports=fxr});var lv=s((Ehe,$x)=>{"use strict";var Le=b(),As=R(),xx=M(),Dx=L(),zx=_(),Xx=A(),Jx=T(),cxr=C(),Ss=z().factory,Yx=E(),lxr=B(),Ts=y(),pxr=Ux(),Zx=Wx();function gxr(){var r,e,t,i,n,a;if(arguments.length===0)t=Ss();else if(arguments.length===1){if(e=arguments[0],!Dx(e))throw new TypeError(Ts("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Xx(e,"prng")){if(!zx(e.prng))throw new TypeError(Ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ss(e)}else{if(a=arguments[0],r=arguments[1],n=pxr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!Dx(e))throw new TypeError(Ts("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Xx(e,"prng")){if(!zx(e.prng))throw new TypeError(Ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Ss(e)}else t=Ss()}return a===void 0?i=h:i=g,Le(i,"NAME","gumbel"),e&&e.prng?(Le(i,"seed",null),Le(i,"seedLength",null),xx(i,"state",Jx(null),cxr),Le(i,"stateLength",null),Le(i,"byteLength",null),Le(i,"toJSON",Jx(null)),Le(i,"PRNG",t)):(As(i,"seed",u),As(i,"seedLength",o),xx(i,"state",c,l),As(i,"stateLength",f),As(i,"byteLength",v),Le(i,"toJSON",p),Le(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=lxr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return Zx(t,a,r)}function h(d,m){return Yx(d)||Yx(m)||m<=0?NaN:Zx(t,d,m)}}$x.exports=gxr});var Kx=s((Nhe,Qx)=>{"use strict";var mxr=lv(),dxr=mxr();Qx.exports=dxr});var tD=s((Ohe,eD)=>{"use strict";var hxr=b(),rD=Kx(),qxr=lv();hxr(rD,"factory",qxr);eD.exports=rD});var nD=s((Ahe,iD)=>{"use strict";var pv=jr().isPrimitive,$n=y();function yxr(r,e,t){return pv(r)?pv(e)?pv(t)?t>r?new RangeError($n("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError($n("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError($n("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError($n("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError($n("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}iD.exports=yxr});var aD=s((She,bxr)=>{bxr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var uD=s((The,sD)=>{"use strict";var wxr=E(),Exr=Lr(),Nxr=Li(),Oxr=I(),Axr=aD(),Sxr=170;function Txr(r){return wxr(r)?NaN:Exr(r)?r<0?NaN:r<=Sxr?Axr[r]:Oxr:Nxr(r+1)}sD.exports=Txr});var vD=s((_he,oD)=>{"use strict";var _xr=uD();oD.exports=_xr});var cD=s((Ihe,fD)=>{"use strict";var bt=vD();function Ixr(r,e,t,i){var n,a,u;for(i<t?(n=bt(t)*bt(e+t-i)/(bt(e+t)*bt(t-i)),u=0):(n=bt(e)*bt(i)/(bt(i-t)*bt(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}fD.exports=Ixr});var pD=s((Lhe,lD)=>{"use strict";var _s=cD();function Lxr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=_s(r,n,a,u),t-o):(a=t,n=e-t,o=_s(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=_s(r,n,a,u),o):(n=e-t,a=t,o=_s(r,n,a,u),i-o))}lD.exports=Lxr});var mv=s((Rhe,wD)=>{"use strict";var Re=b(),Is=R(),gD=M(),mD=L(),dD=_(),hD=A(),qD=T(),Rxr=C(),Ls=z().factory,gv=q1(),yD=I(),Pxr=B(),Rs=y(),Fxr=nD(),bD=pD();function Mxr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Ls();else if(arguments.length===1){if(r=arguments[0],!mD(r))throw new TypeError(Rs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hD(r,"prng")){if(!dD(r.prng))throw new TypeError(Rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ls(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=Fxr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!mD(r))throw new TypeError(Rs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hD(r,"prng")){if(!dD(r.prng))throw new TypeError(Rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ls(r)}else e=Ls()}return n===void 0?t=d:t=h,Re(t,"NAME","hypergeometric"),r&&r.prng?(Re(t,"seed",null),Re(t,"seedLength",null),gD(t,"state",qD(null),Rxr),Re(t,"stateLength",null),Re(t,"byteLength",null),Re(t,"toJSON",qD(null)),Re(t,"PRNG",e)):(Is(t,"seed",o),Is(t,"seedLength",f),gD(t,"state",l,p),Is(t,"stateLength",v),Is(t,"byteLength",c),Re(t,"toJSON",g),Re(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Pxr(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return bD(e,n,a,u)}function d(m,q,N){return m===yD||q===yD||!gv(m)||!gv(q)||!gv(N)||N>m?NaN:bD(e,m,q,N)}}wD.exports=Mxr});var ND=s((Phe,ED)=>{"use strict";var Bxr=mv(),kxr=Bxr();ED.exports=kxr});var SD=s((Fhe,AD)=>{"use strict";var jxr=b(),OD=ND(),Cxr=mv();jxr(OD,"factory",Cxr);AD.exports=OD});var LD=s((Mhe,ID)=>{"use strict";var TD=D().isPrimitive,_D=y();function Vxr(r,e){return TD(r)?TD(e)?null:new TypeError(_D("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(_D("invalid argument. First argument must be a positive number. Value: `%s`.",r))}ID.exports=Vxr});var dv=s((Bhe,jD)=>{"use strict";var wt=b(),Ps=R(),RD=M(),PD=L(),FD=_(),MD=A(),BD=T(),Uxr=C(),Wi=ki().factory,kD=E(),Gxr=B(),Fs=y(),Hxr=LD();function Wxr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Wi();else if(arguments.length===1){if(i=arguments[0],!PD(i))throw new TypeError(Fs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(MD(i,"prng")){if(!FD(i.prng))throw new TypeError(Fs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Wi({prng:i.prng})}else r=Wi(i)}else{if(e=arguments[0],t=arguments[1],u=Hxr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!PD(i))throw new TypeError(Fs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(MD(i,"prng")){if(!FD(i.prng))throw new TypeError(Fs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Wi(e,t,{prng:i.prng})}else r=Wi(e,t,i)}else r=Wi(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,wt(a,"NAME","invgamma"),i&&i.prng?(wt(a,"seed",null),wt(a,"seedLength",null),RD(a,"state",BD(null),Uxr),wt(a,"stateLength",null),wt(a,"byteLength",null),wt(a,"toJSON",BD(null))):(Ps(a,"seed",o),Ps(a,"seedLength",f),RD(a,"state",l,p),Ps(a,"stateLength",v),Ps(a,"byteLength",c),wt(a,"toJSON",g)),wt(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(m){n.state=m}function g(){var m={};return m.type="PRNG",m.name=a.NAME,m.state=Gxr(n.state),e===void 0?m.params=[]:m.params=[e,t],m}function h(){return 1/r()}function d(m,q){return kD(m)||kD(q)||m<=0||q<=0?NaN:1/r(m,q)}}jD.exports=Wxr});var VD=s((khe,CD)=>{"use strict";var xxr=dv(),Dxr=xxr();CD.exports=Dxr});var HD=s((jhe,GD)=>{"use strict";var zxr=b(),UD=VD(),Xxr=dv();zxr(UD,"factory",Xxr);GD.exports=UD});var zD=s((Che,DD)=>{"use strict";var WD=D().isPrimitive,xD=y();function Jxr(r,e){return WD(r)?WD(e)?null:new TypeError(xD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(xD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}DD.exports=Jxr});var YD=s((Vhe,JD)=>{"use strict";var XD=W();function Yxr(r,e,t){var i=r();return XD(1-XD(1-i,1/t),1/e)}JD.exports=Yxr});var hv=s((Uhe,iz)=>{"use strict";var Pe=b(),Ms=R(),ZD=M(),$D=L(),QD=_(),KD=A(),rz=T(),Zxr=C(),Bs=z().factory,ez=E(),$xr=B(),ks=y(),Qxr=zD(),tz=YD();function Kxr(){var r,e,t,i,n,a;if(arguments.length===0)e=Bs();else if(arguments.length===1){if(r=arguments[0],!$D(r))throw new TypeError(ks("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KD(r,"prng")){if(!QD(r.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bs(r)}else{if(n=arguments[0],a=arguments[1],i=Qxr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!$D(r))throw new TypeError(ks("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KD(r,"prng")){if(!QD(r.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Bs(r)}else e=Bs()}return n===void 0?t=h:t=g,Pe(t,"NAME","kumaraswamy"),r&&r.prng?(Pe(t,"seed",null),Pe(t,"seedLength",null),ZD(t,"state",rz(null),Zxr),Pe(t,"stateLength",null),Pe(t,"byteLength",null),Pe(t,"toJSON",rz(null)),Pe(t,"PRNG",e)):(Ms(t,"seed",u),Ms(t,"seedLength",o),ZD(t,"state",c,l),Ms(t,"stateLength",f),Ms(t,"byteLength",v),Pe(t,"toJSON",p),Pe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=$xr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return tz(e,n,a)}function h(d,m){return ez(d)||ez(m)||d<=0||m<=0?NaN:tz(e,d,m)}}iz.exports=Kxr});var az=s((Ghe,nz)=>{"use strict";var rDr=hv(),eDr=rDr();nz.exports=eDr});var oz=s((Hhe,uz)=>{"use strict";var tDr=b(),sz=az(),iDr=hv();tDr(sz,"factory",iDr);uz.exports=sz});var cz=s((Whe,fz)=>{"use strict";var nDr=j().isPrimitive,aDr=D().isPrimitive,vz=y(),sDr=vr();function uDr(r,e){return!nDr(r)||sDr(r)?new TypeError(vz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):aDr(e)?null:new TypeError(vz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}fz.exports=uDr});var pz=s((xhe,lz)=>{"use strict";var oDr=z0(),vDr=J(),fDr=P();function cDr(r,e,t){var i=r()-.5;return e-t*oDr(i)*fDr(1-2*vDr(i))}lz.exports=cDr});var qv=s((Dhe,wz)=>{"use strict";var Fe=b(),js=R(),gz=M(),mz=L(),dz=_(),hz=A(),qz=T(),lDr=C(),Cs=z().factory,yz=E(),pDr=B(),Vs=y(),gDr=cz(),bz=pz();function mDr(){var r,e,t,i,n,a;if(arguments.length===0)e=Cs();else if(arguments.length===1){if(r=arguments[0],!mz(r))throw new TypeError(Vs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hz(r,"prng")){if(!dz(r.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Cs(r)}else{if(n=arguments[0],a=arguments[1],i=gDr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!mz(r))throw new TypeError(Vs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hz(r,"prng")){if(!dz(r.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Cs(r)}else e=Cs()}return n===void 0?t=h:t=g,Fe(t,"NAME","laplace"),r&&r.prng?(Fe(t,"seed",null),Fe(t,"seedLength",null),gz(t,"state",qz(null),lDr),Fe(t,"stateLength",null),Fe(t,"byteLength",null),Fe(t,"toJSON",qz(null)),Fe(t,"PRNG",e)):(js(t,"seed",u),js(t,"seedLength",o),gz(t,"state",c,l),js(t,"stateLength",f),js(t,"byteLength",v),Fe(t,"toJSON",p),Fe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=pDr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return bz(e,n,a)}function h(d,m){return yz(d)||yz(m)||m<=0?NaN:bz(e,d,m)}}wz.exports=mDr});var Nz=s((zhe,Ez)=>{"use strict";var dDr=qv(),hDr=dDr();Ez.exports=hDr});var Sz=s((Xhe,Az)=>{"use strict";var qDr=b(),Oz=Nz(),yDr=qv();qDr(Oz,"factory",yDr);Az.exports=Oz});var Iz=s((Jhe,_z)=>{"use strict";var bDr=j().isPrimitive,wDr=D().isPrimitive,Tz=y(),EDr=vr();function NDr(r,e){return!bDr(r)||EDr(r)?new TypeError(Tz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):wDr(e)?null:new TypeError(Tz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}_z.exports=NDr});var Rz=s((Yhe,Lz)=>{"use strict";function ODr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}Lz.exports=ODr});var Fz=s((Zhe,Pz)=>{"use strict";function ADr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}Pz.exports=ADr});var Bz=s(($he,Mz)=>{"use strict";function SDr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}Mz.exports=SDr});var jz=s((Qhe,kz)=>{"use strict";function TDr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}kz.exports=TDr});var Vz=s((Khe,Cz)=>{"use strict";function _Dr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}Cz.exports=_Dr});var Wz=s((rqe,Hz)=>{"use strict";var IDr=E(),Uz=U(),Gz=P(),LDr=I(),RDr=V(),PDr=Rz(),FDr=Fz(),MDr=Bz(),BDr=jz(),kDr=Vz(),jDr=.08913147449493408,CDr=2.249481201171875,VDr=.807220458984375,UDr=.9399557113647461,GDr=.9836282730102539;function HDr(r){var e,t,i,n,a,u;return IDr(r)?NaN:r===1?LDr:r===-1?RDr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=PDr(t),e*(a*jDr+a*u)):n>=.25?(a=Uz(-2*Gz(n)),n-=.25,u=FDr(n),e*(a/(CDr+u))):(n=Uz(-Gz(n)),n<3?(i=n-1.125,u=MDr(i),e*(VDr*n+u*n)):n<6?(i=n-3,u=BDr(i),e*(UDr*n+u*n)):(i=n-6,u=kDr(i),e*(GDr*n+u*n))))}Hz.exports=HDr});var yv=s((eqe,xz)=>{"use strict";var WDr=Wz();xz.exports=WDr});var zz=s((tqe,Dz)=>{"use strict";var xDr=yv(),bv=E(),DDr=U();function zDr(r,e,t){var i,n;return bv(e)||bv(t)||bv(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*DDr(2),i+n*xDr(2*r-1))}Dz.exports=zDr});var Jz=s((iqe,Xz)=>{"use strict";var XDr=T(),JDr=Q3().factory,YDr=yv(),wv=E(),ZDr=U();function $Dr(r,e){var t,i;if(wv(r)||wv(e)||e<0)return XDr(NaN);return e===0&&JDr(r),t=r,i=e*ZDr(2),n;function n(a){return wv(a)||a<0||a>1?NaN:t+i*YDr(2*a-1)}}Xz.exports=$Dr});var Ev=s((nqe,Zz)=>{"use strict";var QDr=b(),Yz=zz(),KDr=Jz();QDr(Yz,"factory",KDr);Zz.exports=Yz});var Qz=s((aqe,$z)=>{"use strict";var rzr=Ev();function ezr(r,e,t){var i=rzr(1-r()/2,0,1);return e+t/(i*i)}$z.exports=ezr});var Nv=s((sqe,sX)=>{"use strict";var Me=b(),Us=R(),Kz=M(),rX=L(),eX=_(),tX=A(),iX=T(),tzr=C(),Gs=z().factory,nX=E(),izr=B(),Hs=y(),nzr=Iz(),aX=Qz();function azr(){var r,e,t,i,n,a;if(arguments.length===0)e=Gs();else if(arguments.length===1){if(r=arguments[0],!rX(r))throw new TypeError(Hs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(tX(r,"prng")){if(!eX(r.prng))throw new TypeError(Hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Gs(r)}else{if(n=arguments[0],a=arguments[1],i=nzr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!rX(r))throw new TypeError(Hs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(tX(r,"prng")){if(!eX(r.prng))throw new TypeError(Hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Gs(r)}else e=Gs()}return n===void 0?t=h:t=g,Me(t,"NAME","levy"),r&&r.prng?(Me(t,"seed",null),Me(t,"seedLength",null),Kz(t,"state",iX(null),tzr),Me(t,"stateLength",null),Me(t,"byteLength",null),Me(t,"toJSON",iX(null)),Me(t,"PRNG",e)):(Us(t,"seed",u),Us(t,"seedLength",o),Kz(t,"state",c,l),Us(t,"stateLength",f),Us(t,"byteLength",v),Me(t,"toJSON",p),Me(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=izr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return aX(e,n,a)}function h(d,m){return nX(d)||nX(m)||m<=0?NaN:aX(e,d,m)}}sX.exports=azr});var oX=s((uqe,uX)=>{"use strict";var szr=Nv(),uzr=szr();uX.exports=uzr});var cX=s((oqe,fX)=>{"use strict";var ozr=b(),vX=oX(),vzr=Nv();ozr(vX,"factory",vzr);fX.exports=vX});var gX=s((vqe,pX)=>{"use strict";var fzr=j().isPrimitive,czr=D().isPrimitive,lzr=vr(),lX=y();function pzr(r,e){return!fzr(r)||lzr(r)?new TypeError(lX("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):czr(e)?null:new TypeError(lX("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}pX.exports=pzr});var dX=s((fqe,mX)=>{"use strict";var gzr=P();function mzr(r,e,t){var i=r();return e+t*gzr(i/(1-i))}mX.exports=mzr});var Ov=s((cqe,OX)=>{"use strict";var Be=b(),Ws=R(),hX=M(),qX=L(),yX=_(),bX=A(),wX=T(),dzr=C(),xs=z().factory,EX=E(),hzr=B(),Ds=y(),qzr=gX(),NX=dX();function yzr(){var r,e,t,i,n,a;if(arguments.length===0)e=xs();else if(arguments.length===1){if(r=arguments[0],!qX(r))throw new TypeError(Ds("invalid argument. Options argument must be an object. Value: `%s`.",r));if(bX(r,"prng")){if(!yX(r.prng))throw new TypeError(Ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=xs(r)}else{if(n=arguments[0],a=arguments[1],i=qzr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!qX(r))throw new TypeError(Ds("invalid argument. Options argument must be an object. Value: `%s`.",r));if(bX(r,"prng")){if(!yX(r.prng))throw new TypeError(Ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=xs(r)}else e=xs()}return n===void 0?t=h:t=g,Be(t,"NAME","logistic"),r&&r.prng?(Be(t,"seed",null),Be(t,"seedLength",null),hX(t,"state",wX(null),dzr),Be(t,"stateLength",null),Be(t,"byteLength",null),Be(t,"toJSON",wX(null)),Be(t,"PRNG",e)):(Ws(t,"seed",u),Ws(t,"seedLength",o),hX(t,"state",c,l),Ws(t,"stateLength",f),Ws(t,"byteLength",v),Be(t,"toJSON",p),Be(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=hzr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return NX(e,n,a)}function h(d,m){return EX(d)||EX(m)||m<=0?NaN:NX(e,d,m)}}OX.exports=yzr});var SX=s((lqe,AX)=>{"use strict";var bzr=Ov(),wzr=bzr();AX.exports=wzr});var IX=s((pqe,_X)=>{"use strict";var Ezr=b(),TX=SX(),Nzr=Ov();Ezr(TX,"factory",Nzr);_X.exports=TX});var PX=s((gqe,RX)=>{"use strict";var Ozr=j().isPrimitive,Azr=D().isPrimitive,LX=y(),Szr=vr();function Tzr(r,e){return!Ozr(r)||Szr(r)?new TypeError(LX("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Azr(e)?null:new TypeError(LX("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}RX.exports=Tzr});var MX=s((mqe,FX)=>{"use strict";var _zr=sr();function Izr(r,e,t){return _zr(e+t*r())}FX.exports=Izr});var Av=s((dqe,HX)=>{"use strict";var Et=b(),zs=R(),BX=M(),kX=L(),jX=_(),CX=A(),VX=T(),Lzr=C(),xi=pt().factory,UX=E(),Rzr=B(),Xs=y(),Pzr=PX(),GX=MX();function Fzr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=xi();else if(arguments.length===1){if(t=arguments[0],!kX(t))throw new TypeError(Xs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(CX(t,"prng")){if(!jX(t.prng))throw new TypeError(Xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=xi({prng:t.prng})}else e=xi(t)}else{if(u=arguments[0],r=arguments[1],a=Pzr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!kX(t))throw new TypeError(Xs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(CX(t,"prng")){if(!jX(t.prng))throw new TypeError(Xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=xi({prng:t.prng})}else e=xi(t)}else e=xi()}return u===void 0?n=d:n=h,i=e.PRNG,Et(n,"NAME","lognormal"),t&&t.prng?(Et(n,"seed",null),Et(n,"seedLength",null),BX(n,"state",VX(null),Lzr),Et(n,"stateLength",null),Et(n,"byteLength",null),Et(n,"toJSON",VX(null))):(zs(n,"seed",o),zs(n,"seedLength",f),BX(n,"state",l,p),zs(n,"stateLength",v),zs(n,"byteLength",c),Et(n,"toJSON",g)),Et(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=Rzr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return GX(e,u,r)}function d(m,q){return UX(m)||UX(q)||q<=0?NaN:GX(e,m,q)}}HX.exports=Fzr});var xX=s((hqe,WX)=>{"use strict";var Mzr=Av(),Bzr=Mzr();WX.exports=Bzr});var XX=s((qqe,zX)=>{"use strict";var kzr=b(),DX=xX(),jzr=Av();kzr(DX,"factory",jzr);zX.exports=DX});var Sv=s((yqe,JX)=>{"use strict";var Czr=ti(),Vzr=X(),Uzr=Czr-1;function Gzr(){var r=Vzr(1+Uzr*Math.random());return r|0}JX.exports=Gzr});var Iv=s((bqe,KX)=>{"use strict";var ke=b(),Nt=R(),YX=M(),Tv=A(),Hzr=L(),Wzr=gr().isPrimitive,xzr=Wr(),Dzr=re().isPrimitive,ZX=la(),Xr=y(),Js=ti(),Er=Xe(),Di=ot(),zzr=B(),$X=Sv(),_v=Js-1|0,Xzr=Js-1|0,Jzr=16807,Ys=1,Zs=2,Ot=2,Nr=4,Qn=5;function QX(r,e){var t;return e?t="option":t="argument",r.length<Qn+1?new RangeError(Xr("invalid %s. State array has insufficient length.",t)):r[0]!==Ys?new RangeError(Xr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ys,r[0])):r[1]!==Zs?new RangeError(Xr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Zs,r[1])):r[Ot]!==1?new RangeError(Xr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[Ot])):r[Nr]!==r.length-Qn?new RangeError(Xr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Qn,r[Nr])):null}function Yzr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!Hzr(r))throw new TypeError(Xr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Tv(r,"copy")&&(i.copy=r.copy,!Wzr(r.copy)))throw new TypeError(Xr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Tv(r,"state")){if(t=r.state,i.state=!0,!ZX(t))throw new TypeError(Xr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=QX(t,!0),u)throw u;i.copy===!1?e=t:(e=new Er(t.length),Di(t.length,t,1,e,1)),t=new Er(e.buffer,e.byteOffset+(Ot+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,t[Nr])}if(n===void 0)if(Tv(r,"seed"))if(n=r.seed,i.seed=!0,Dzr(n)){if(n>Xzr)throw new RangeError(Xr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(xzr(n)&&n.length>0)a=n.length,e=new Er(Qn+a),e[0]=Ys,e[1]=Zs,e[Ot]=1,e[Nr]=a,Di.ndarray(a,n,1,0,e,1,Nr+1),t=new Er(e.buffer,e.byteOffset+(Ot+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Xr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=$X()|0}else n=$X()|0;return t===void 0&&(e=new Er(Qn+1),e[0]=Ys,e[1]=Zs,e[Ot]=1,e[Nr]=1,e[Nr+1]=n,t=new Er(e.buffer,e.byteOffset+(Ot+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),ke(h,"NAME","minstd"),Nt(h,"seed",o),Nt(h,"seedLength",f),YX(h,"state",l,p),Nt(h,"stateLength",v),Nt(h,"byteLength",c),ke(h,"toJSON",g),ke(h,"MIN",1),ke(h,"MAX",Js-1),ke(h,"normalized",d),ke(d,"NAME",h.NAME),Nt(d,"seed",o),Nt(d,"seedLength",f),YX(d,"state",l,p),Nt(d,"stateLength",v),Nt(d,"byteLength",c),ke(d,"toJSON",g),ke(d,"MIN",(h.MIN-1)/_v),ke(d,"MAX",(h.MAX-1)/_v),h;function o(){var m=e[Nr];return Di(m,n,1,new Er(m),1)}function f(){return e[Nr]}function v(){return e.length}function c(){return e.byteLength}function l(){var m=e.length;return Di(m,e,1,new Er(m),1)}function p(m){var q;if(!ZX(m))throw new TypeError(Xr("invalid argument. Must provide an Int32Array. Value: `%s`.",m));if(q=QX(m,!1),q)throw q;i.copy===!1?i.state&&m.length===e.length?Di(m.length,m,1,e,1):(e=m,i.state=!0):(m.length!==e.length&&(e=new Er(m.length)),Di(m.length,m,1,e,1)),t=new Er(e.buffer,e.byteOffset+(Ot+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,e[Nr])}function g(){var m={};return m.type="PRNG",m.name=h.NAME,m.state=zzr(e),m.params=[],m}function h(){var m=t[0]|0;return m=Jzr*m%Js|0,t[0]=m,m|0}function d(){return(h()-1)/_v}}KX.exports=Yzr});var eJ=s((wqe,rJ)=>{"use strict";var Zzr=Iv(),$zr=Sv(),Qzr=Zzr({seed:$zr()});rJ.exports=Qzr});var nJ=s((Eqe,iJ)=>{"use strict";var Kzr=b(),tJ=eJ(),rXr=Iv();Kzr(tJ,"factory",rXr);iJ.exports=tJ});var sJ=s((Nqe,aJ)=>{"use strict";var eXr=E(),tXr=8;function iXr(r,e,t){var i,n;for(n=0;n<tXr;n++)if(i=r(),eXr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}aJ.exports=iXr});var Lv=s((Oqe,uJ)=>{"use strict";var nXr=ti(),aXr=X(),sXr=nXr-1;function uXr(){var r=aXr(1+sXr*Math.random());return r|0}uJ.exports=uXr});var Fv=s((Aqe,pJ)=>{"use strict";var je=b(),At=R(),oJ=M(),Rv=A(),oXr=L(),vXr=gr().isPrimitive,fXr=Wr(),cXr=re().isPrimitive,vJ=la(),zi=ot(),lXr=X(),Or=Xe(),Kn=ti(),pXr=B(),Hr=y(),fJ=sJ(),cJ=Lv(),Pv=Kn-1|0,gXr=Kn-1|0,mXr=16807,Sr=32,Ks=1,ru=3,St=2,Xi=Sr+3,Ar=Sr+6,ra=Sr+7,$s=Xi+1,Qs=Xi+2;function lJ(r,e){var t;return e?t="option":t="argument",r.length<ra+1?new RangeError(Hr("invalid %s. State array has insufficient length.",t)):r[0]!==Ks?new RangeError(Hr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ks,r[0])):r[1]!==ru?new RangeError(Hr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,ru,r[1])):r[St]!==Sr?new RangeError(Hr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Sr,r[St])):r[Xi]!==2?new RangeError(Hr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[Xi])):r[Ar]!==r.length-ra?new RangeError(Hr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-ra,r[Ar])):null}function dXr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!oXr(r))throw new TypeError(Hr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Rv(r,"copy")&&(i.copy=r.copy,!vXr(r.copy)))throw new TypeError(Hr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Rv(r,"state")){if(t=r.state,i.state=!0,!vJ(t))throw new TypeError(Hr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=lJ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Or(t.length),zi(t.length,t,1,e,1)),t=new Or(e.buffer,e.byteOffset+(St+1)*e.BYTES_PER_ELEMENT,Sr),n=new Or(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,t[Ar])}if(n===void 0)if(Rv(r,"seed"))if(n=r.seed,i.seed=!0,cXr(n)){if(n>gXr)throw new RangeError(Hr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(fXr(n)&&n.length>0)a=n.length,e=new Or(ra+a),e[0]=Ks,e[1]=ru,e[St]=Sr,e[Xi]=2,e[Qs]=n[0],e[Ar]=a,zi.ndarray(a,n,1,0,e,1,Ar+1),t=new Or(e.buffer,e.byteOffset+(St+1)*e.BYTES_PER_ELEMENT,Sr),n=new Or(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,a),t=fJ(h,t,Sr),e[$s]=t[0];else throw new TypeError(Hr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=cJ()|0}else n=cJ()|0;return t===void 0&&(e=new Or(ra+1),e[0]=Ks,e[1]=ru,e[St]=Sr,e[Xi]=2,e[Qs]=n,e[Ar]=1,e[Ar+1]=n,t=new Or(e.buffer,e.byteOffset+(St+1)*e.BYTES_PER_ELEMENT,Sr),n=new Or(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,1),t=fJ(h,t,Sr),e[$s]=t[0]),je(d,"NAME","minstd-shuffle"),At(d,"seed",o),At(d,"seedLength",f),oJ(d,"state",l,p),At(d,"stateLength",v),At(d,"byteLength",c),je(d,"toJSON",g),je(d,"MIN",1),je(d,"MAX",Kn-1),je(d,"normalized",m),je(m,"NAME",d.NAME),At(m,"seed",o),At(m,"seedLength",f),oJ(m,"state",l,p),At(m,"stateLength",v),At(m,"byteLength",c),je(m,"toJSON",g),je(m,"MIN",(d.MIN-1)/Pv),je(m,"MAX",(d.MAX-1)/Pv),d;function o(){var q=e[Ar];return zi(q,n,1,new Or(q),1)}function f(){return e[Ar]}function v(){return e.length}function c(){return e.byteLength}function l(){var q=e.length;return zi(q,e,1,new Or(q),1)}function p(q){var N;if(!vJ(q))throw new TypeError(Hr("invalid argument. Must provide an Int32Array. Value: `%s`.",q));if(N=lJ(q,!1),N)throw N;i.copy===!1?i.state&&q.length===e.length?zi(q.length,q,1,e,1):(e=q,i.state=!0):(q.length!==e.length&&(e=new Or(q.length)),zi(q.length,q,1,e,1)),t=new Or(e.buffer,e.byteOffset+(St+1)*e.BYTES_PER_ELEMENT,Sr),n=new Or(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,e[Ar])}function g(){var q={};return q.type="PRNG",q.name=d.NAME,q.state=pXr(e),q.params=[],q}function h(){var q=e[Qs]|0;return q=mXr*q%Kn|0,e[Qs]=q,q|0}function d(){var q,N;return q=e[$s],N=lXr(Sr*(q/Kn)),q=t[N],e[$s]=q,t[N]=h(),q}function m(){return(d()-1)/Pv}}pJ.exports=dXr});var mJ=s((Sqe,gJ)=>{"use strict";var hXr=Fv(),qXr=Lv(),yXr=hXr({seed:qXr()});gJ.exports=yXr});var qJ=s((Tqe,hJ)=>{"use strict";var bXr=b(),dJ=mJ(),wXr=Fv();bXr(dJ,"factory",wXr);hJ.exports=dJ});var bJ=s((_qe,yJ)=>{"use strict";var EXr=sr();function NXr(r,e){for(var t=r(),i=1;t>EXr(-e);)i+=1,t*=r();return i-1}yJ.exports=NXr});var EJ=s((Iqe,wJ)=>{"use strict";var OXr=X();function AXr(r){return OXr(r)===r&&r<0}wJ.exports=AXr});var OJ=s((Lqe,NJ)=>{"use strict";var SXr=EJ();NJ.exports=SXr});var SJ=s((Rqe,AJ)=>{"use strict";var TXr=OJ(),_Xr=Cn();function IXr(r){return TXr(r)?NaN:_Xr(r+1)}AJ.exports=IXr});var _J=s((Pqe,TJ)=>{"use strict";var LXr=SJ();TJ.exports=LXr});var PJ=s((Fqe,RJ)=>{"use strict";var RXr=_J(),IJ=X(),PXr=z0(),FXr=U(),LJ=J(),eu=P(),MXr=W1(),BXr=1/12,kXr=1/360;function jXr(r,e){var t,i,n,a,u,o,f,v,c,l;for(t=FXr(e),f=2.53*t+.931,o=.02483*f-.059,i=1.1328/(f-3.4)+1.1239,u=-3.6224/(f-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-LJ(c))+f,c+=e+.445,IJ(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=PXr(c)*.5-c,l=u*r()),a=.5-LJ(c),(a>=.013||a>=l)&&(v=IJ((2*o/a+f)*c+e+.445),l*=i/(o/(a*a)+f),c=(v+.5)*eu(e/v),c+=-e-MXr+v,c-=(BXr-kXr/(v*v))/v,v>=10&&c>=eu(l*t)||(c=v*eu(e)-e-RXr(v),v>=0&&v<=9&&c>=eu(l))))return v}}RJ.exports=jXr});var MJ=s((Mqe,FJ)=>{"use strict";var CXr=bJ(),VXr=PJ();function UXr(r,e){return e<30?CXr(r,e):VXr(r,e)}FJ.exports=UXr});var Mv=s((Bqe,GJ)=>{"use strict";var Ce=b(),tu=R(),BJ=M(),GXr=D().isPrimitive,kJ=L(),jJ=_(),CJ=A(),VJ=T(),HXr=C(),iu=z().factory,WXr=E(),xXr=B(),nu=y(),UJ=MJ();function DXr(){var r,e,t,i;if(arguments.length===0)t=iu();else if(arguments.length===1&&kJ(arguments[0]))if(e=arguments[0],CJ(e,"prng")){if(!jJ(e.prng))throw new TypeError(nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=iu(e);else{if(r=arguments[0],!GXr(r))throw new TypeError(nu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!kJ(e))throw new TypeError(nu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(CJ(e,"prng")){if(!jJ(e.prng))throw new TypeError(nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=iu(e)}else t=iu()}return r===void 0?i=p:i=l,Ce(i,"NAME","poisson"),e&&e.prng?(Ce(i,"seed",null),Ce(i,"seedLength",null),BJ(i,"state",VJ(null),HXr),Ce(i,"stateLength",null),Ce(i,"byteLength",null),Ce(i,"toJSON",VJ(null)),Ce(i,"PRNG",t)):(tu(i,"seed",n),tu(i,"seedLength",a),BJ(i,"state",f,v),tu(i,"stateLength",u),tu(i,"byteLength",o),Ce(i,"toJSON",c),Ce(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=xXr(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return UJ(t,r)}function p(g){return WXr(g)||g<=0?NaN:UJ(t,g)}}GJ.exports=DXr});var WJ=s((kqe,HJ)=>{"use strict";var zXr=Mv(),XXr=zXr();HJ.exports=XXr});var Bv=s((jqe,DJ)=>{"use strict";var JXr=b(),xJ=WJ(),YXr=Mv();JXr(xJ,"factory",YXr);DJ.exports=xJ});var XJ=s((Cqe,zJ)=>{"use strict";var ZXr=D().isPrimitive,$Xr=j().isPrimitive,kv=y(),QXr=vr();function KXr(r,e){return ZXr(r)?!$Xr(e)||QXr(e)?new TypeError(kv("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(kv("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(kv("invalid argument. First argument must be a positive number. Value: `%s`.",r))}zJ.exports=KXr});var Uv=s((Vqe,eY)=>{"use strict";var Tt=b(),au=R(),JJ=M(),Ji=A(),YJ=L(),jv=ve(),ZJ=gr().isPrimitive,$J=_(),QJ=T(),rJr=C(),KJ=E(),Yi=Bv().factory,su=ki().factory,Cv=ot(),Vv=lr(),rY=Xn(),eJr=B(),Ve=y(),tJr=XJ();function iJr(){var r,e,t,i,n,a,u,o,f,v;if(u=!0,arguments.length===0)i={copy:!1},t=Yi(i);else if(arguments.length===1){if(i=arguments[0],!YJ(i))throw new TypeError(Ve("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ji(i,"copy")&&!ZJ(i.copy))throw new TypeError(Ve("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ji(i,"prng")){if(!$J(i.prng))throw new TypeError(Ve("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Yi({prng:i.prng})}else{if(Ji(i,"state")&&!jv(i.state))throw new TypeError(Ve("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=rY({},i),i.copy===!1?u=!1:i.state&&(i.state=Cv(i.state.length,i.state,1,new Vv(i.state.length),1)),i.copy=!1,t=Yi(i)}}else{if(v=arguments[0],f=arguments[1],o=tJr(v,f),o)throw o;if(arguments.length>2){if(i=arguments[2],!YJ(i))throw new TypeError(Ve("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ji(i,"copy")&&!ZJ(i.copy))throw new TypeError(Ve("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ji(i,"prng")){if(!$J(i.prng))throw new TypeError(Ve("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Yi({prng:i.prng})}else{if(Ji(i,"state")&&!jv(i.state))throw new TypeError(Ve("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=rY({},i),i.copy===!1?u=!1:i.state&&(i.state=Cv(i.state.length,i.state,1,new Vv(i.state.length),1)),i.copy=!1,t=Yi(i)}}else i={copy:!1},t=Yi(i)}return i&&i.prng?v===void 0?r=su({prng:i.prng}):r=su(v,f/(1-f),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),v===void 0?r=su({state:e,copy:!1}):r=su(v,f/(1-f),{state:e,copy:!1})),v===void 0?n=N:n=q,a=t.PRNG,Tt(n,"NAME","negative-binomial"),i&&i.prng?(Tt(n,"seed",null),Tt(n,"seedLength",null),JJ(n,"state",QJ(null),rJr),Tt(n,"stateLength",null),Tt(n,"byteLength",null),Tt(n,"toJSON",QJ(null))):(au(n,"seed",c),au(n,"seedLength",l),JJ(n,"state",h,d),au(n,"stateLength",p),au(n,"byteLength",g),Tt(n,"toJSON",m)),Tt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function g(){return a.byteLength}function h(){return a.state}function d(O){if(!jv(O))throw new TypeError(Ve("invalid argument. Must provide a Uint32Array. Value: `%s`.",O));u&&(O=Cv(O.length,O,1,new Vv(O.length),1)),a.state=O}function m(){var O={};return O.type="PRNG",O.name=n.NAME,O.state=eJr(a.state),v===void 0?O.params=[]:O.params=[v,f],O}function q(){return t(r())}function N(O,F){return KJ(O)||KJ(F)||F<=0||F>=1?NaN:t(r(O,F/(1-F)))}}eY.exports=iJr});var iY=s((Uqe,tY)=>{"use strict";var nJr=Uv(),aJr=nJr();tY.exports=aJr});var sY=s((Gqe,aY)=>{"use strict";var sJr=b(),nY=iY(),uJr=Uv();sJr(nY,"factory",uJr);aY.exports=nY});var vY=s((Hqe,oY)=>{"use strict";var oJr=j().isPrimitive,vJr=D().isPrimitive,uY=y(),fJr=vr();function cJr(r,e){return!oJr(r)||fJr(r)?new TypeError(uY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):vJr(e)?null:new TypeError(uY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}oY.exports=cJr});var cY=s((Wqe,fY)=>{"use strict";function lJr(r,e,t){return e+t*r()}fY.exports=lJr});var Gv=s((xqe,yY)=>{"use strict";var _t=b(),uu=R(),lY=M(),pY=L(),gY=_(),mY=A(),dY=T(),pJr=C(),Zi=pt().factory,hY=E(),gJr=B(),ou=y(),mJr=vY(),qY=cY();function dJr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Zi();else if(arguments.length===1){if(t=arguments[0],!pY(t))throw new TypeError(ou("invalid argument. Options argument must be an object. Value: `%s`.",t));if(mY(t,"prng")){if(!gY(t.prng))throw new TypeError(ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Zi({prng:t.prng})}else e=Zi(t)}else{if(u=arguments[0],r=arguments[1],a=mJr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!pY(t))throw new TypeError(ou("invalid argument. Options argument must be an object. Value: `%s`.",t));if(mY(t,"prng")){if(!gY(t.prng))throw new TypeError(ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Zi({prng:t.prng})}else e=Zi(t)}else e=Zi()}return u===void 0?n=d:n=h,i=e.PRNG,_t(n,"NAME","normal"),t&&t.prng?(_t(n,"seed",null),_t(n,"seedLength",null),lY(n,"state",dY(null),pJr),_t(n,"stateLength",null),_t(n,"byteLength",null),_t(n,"toJSON",dY(null))):(uu(n,"seed",o),uu(n,"seedLength",f),lY(n,"state",l,p),uu(n,"stateLength",v),uu(n,"byteLength",c),_t(n,"toJSON",g)),_t(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(m){i.state=m}function g(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=gJr(i.state),u===void 0?m.params=[]:m.params=[u,r],m}function h(){return qY(e,u,r)}function d(m,q){return hY(m)||hY(q)||q<=0?NaN:qY(e,m,q)}}yY.exports=dJr});var wY=s((Dqe,bY)=>{"use strict";var hJr=Gv(),qJr=hJr();bY.exports=qJr});var OY=s((zqe,NY)=>{"use strict";var yJr=b(),EY=wY(),bJr=Gv();yJr(EY,"factory",bJr);NY.exports=EY});var _Y=s((Xqe,TY)=>{"use strict";var AY=D().isPrimitive,SY=y();function wJr(r,e){return AY(r)?AY(e)?null:new TypeError(SY("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(SY("invalid argument. First argument must be a positive number. Value: `%s`.",r))}TY.exports=wJr});var LY=s((Jqe,IY)=>{"use strict";var EJr=W();function NJr(r,e,t){return t/EJr(r(),1/e)}IY.exports=NJr});var Hv=s((Yqe,CY)=>{"use strict";var Ue=b(),vu=R(),RY=M(),PY=L(),FY=_(),MY=A(),BY=T(),OJr=C(),fu=z().factory,kY=E(),AJr=B(),cu=y(),SJr=_Y(),jY=LY();function TJr(){var r,e,t,i,n,a;if(arguments.length===0)i=fu();else if(arguments.length===1){if(t=arguments[0],!PY(t))throw new TypeError(cu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(MY(t,"prng")){if(!FY(t.prng))throw new TypeError(cu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=fu(t)}else{if(r=arguments[0],e=arguments[1],a=SJr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!PY(t))throw new TypeError(cu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(MY(t,"prng")){if(!FY(t.prng))throw new TypeError(cu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=fu(t)}else i=fu()}return r===void 0?n=h:n=g,Ue(n,"NAME","pareto-type1"),t&&t.prng?(Ue(n,"seed",null),Ue(n,"seedLength",null),RY(n,"state",BY(null),OJr),Ue(n,"stateLength",null),Ue(n,"byteLength",null),Ue(n,"toJSON",BY(null)),Ue(n,"PRNG",i)):(vu(n,"seed",u),vu(n,"seedLength",o),RY(n,"state",c,l),vu(n,"stateLength",f),vu(n,"byteLength",v),Ue(n,"toJSON",p),Ue(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function f(){return i.stateLength}function v(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=AJr(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function g(){return jY(i,r,e)}function h(d,m){return kY(d)||kY(m)||d<=0||m<=0?NaN:jY(i,d,m)}}CY.exports=TJr});var UY=s((Zqe,VY)=>{"use strict";var _Jr=Hv(),IJr=_Jr();VY.exports=IJr});var WY=s(($qe,HY)=>{"use strict";var LJr=b(),GY=UY(),RJr=Hv();LJr(GY,"factory",RJr);HY.exports=GY});var DY=s((Qqe,xY)=>{"use strict";var PJr=U(),FJr=P();function MJr(r,e){return e*PJr(-2*FJr(r()))}xY.exports=MJr});var Wv=s((Kqe,QY)=>{"use strict";var Ge=b(),lu=R(),zY=M(),BJr=D().isPrimitive,XY=L(),JY=_(),YY=A(),ZY=T(),kJr=C(),pu=z().factory,jJr=E(),CJr=B(),gu=y(),$Y=DY();function VJr(){var r,e,t,i;if(arguments.length===0)t=pu();else if(arguments.length===1&&XY(arguments[0]))if(e=arguments[0],YY(e,"prng")){if(!JY(e.prng))throw new TypeError(gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=pu(e);else{if(r=arguments[0],!BJr(r))throw new TypeError(gu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!XY(e))throw new TypeError(gu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(YY(e,"prng")){if(!JY(e.prng))throw new TypeError(gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=pu(e)}else t=pu()}return r===void 0?i=p:i=l,Ge(i,"NAME","rayleigh"),e&&e.prng?(Ge(i,"seed",null),Ge(i,"seedLength",null),zY(i,"state",ZY(null),kJr),Ge(i,"stateLength",null),Ge(i,"byteLength",null),Ge(i,"toJSON",ZY(null)),Ge(i,"PRNG",t)):(lu(i,"seed",n),lu(i,"seedLength",a),zY(i,"state",f,v),lu(i,"stateLength",u),lu(i,"byteLength",o),Ge(i,"toJSON",c),Ge(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(g){t.state=g}function c(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=CJr(t.state),r===void 0?g.params=[]:g.params=[r],g}function l(){return $Y(t,r)}function p(g){return jJr(g)||g<=0?NaN:$Y(t,g)}}QY.exports=VJr});var rZ=s((rye,KY)=>{"use strict";var UJr=Wv(),GJr=UJr();KY.exports=GJr});var iZ=s((eye,tZ)=>{"use strict";var HJr=b(),eZ=rZ(),WJr=Wv();HJr(eZ,"factory",WJr);tZ.exports=eZ});var Xv=s((tye,lZ)=>{"use strict";var It=b(),mu=R(),nZ=M(),$i=A(),aZ=D().isPrimitive,sZ=L(),xv=ve(),uZ=gr().isPrimitive,xJr=E(),oZ=_(),vZ=T(),DJr=C(),du=Zn().factory,Qi=pt().factory,Dv=ot(),zv=lr(),fZ=Xn(),zJr=B(),ae=y(),cZ=U();function XJr(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=Qi(n);else if(arguments.length===1)if(sZ(arguments[0])){if(n=arguments[0],$i(n,"copy")&&!uZ(n.copy))throw new TypeError(ae("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if($i(n,"prng")){if(!oZ(n.prng))throw new TypeError(ae("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Qi({prng:n.prng})}else{if($i(n,"state")&&!xv(n.state))throw new TypeError(ae("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=fZ({},n),n.copy===!1?u=!1:n.state&&(n.state=Dv(n.state.length,n.state,1,new zv(n.state.length),1)),n.copy=!1,t=Qi(n)}}else{if(o=arguments[0],!aZ(o))throw new TypeError(ae("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=Qi(n)}else{if(o=arguments[0],!aZ(o))throw new TypeError(ae("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!sZ(n))throw new TypeError(ae("invalid argument. Options argument must be an object. Value: `%s`.",n));if($i(n,"copy")&&!uZ(n.copy))throw new TypeError(ae("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if($i(n,"prng")){if(!oZ(n.prng))throw new TypeError(ae("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Qi({prng:n.prng})}else{if($i(n,"state")&&!xv(n.state))throw new TypeError(ae("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=fZ({},n),n.copy===!1?u=!1:n.state&&(n.state=Dv(n.state.length,n.state,1,new zv(n.state.length),1)),n.copy=!1,t=Qi(n)}}return n&&n.prng?o===void 0?r=du({prng:n.prng}):r=du(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=du({state:e,copy:!1}):r=du(o,{state:e,copy:!1})),o===void 0?a=m:a=d,i=t.PRNG,It(a,"NAME","t"),n&&n.prng?(It(a,"seed",null),It(a,"seedLength",null),nZ(a,"state",vZ(null),DJr),It(a,"stateLength",null),It(a,"byteLength",null),It(a,"toJSON",vZ(null))):(mu(a,"seed",f),mu(a,"seedLength",v),nZ(a,"state",p,g),mu(a,"stateLength",c),mu(a,"byteLength",l),It(a,"toJSON",h)),It(a,"PRNG",i),a;function f(){return i.seed}function v(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function g(q){if(!xv(q))throw new TypeError(ae("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));u&&(q=Dv(q.length,q,1,new zv(q.length),1)),i.state=q}function h(){var q={};return q.type="PRNG",q.name=a.NAME,q.state=zJr(i.state),o===void 0?q.params=[]:q.params=[o],q}function d(){return t()/cZ(r()/o)}function m(q){return xJr(q)||q<=0?NaN:t()/cZ(r(q)/q)}}lZ.exports=XJr});var gZ=s((iye,pZ)=>{"use strict";var JJr=Xv(),YJr=JJr();pZ.exports=YJr});var hZ=s((nye,dZ)=>{"use strict";var ZJr=b(),mZ=gZ(),$Jr=Xv();ZJr(mZ,"factory",$Jr);dZ.exports=mZ});var yZ=s((aye,qZ)=>{"use strict";var Jv=j().isPrimitive,hu=y(),Yv=vr();function QJr(r,e,t){return!Jv(r)||Yv(r)?new TypeError(hu("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Jv(e)||Yv(e)?new TypeError(hu("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Jv(t)||Yv(t)?new TypeError(hu("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(hu("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}qZ.exports=QJr});var EZ=s((sye,wZ)=>{"use strict";var bZ=U();function KJr(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+bZ(a*u)):(a=(t-e)*(t-i),t-bZ(a*(1-u)))}wZ.exports=KJr});var $v=s((uye,IZ)=>{"use strict";var He=b(),qu=R(),NZ=M(),OZ=L(),AZ=_(),SZ=A(),TZ=T(),rYr=C(),yu=z().factory,Zv=E(),eYr=B(),bu=y(),tYr=yZ(),_Z=EZ();function iYr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=yu();else if(arguments.length===1){if(r=arguments[0],!OZ(r))throw new TypeError(bu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SZ(r,"prng")){if(!AZ(r.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=yu(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=tYr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!OZ(r))throw new TypeError(bu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SZ(r,"prng")){if(!AZ(r.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=yu(r)}else e=yu()}return n===void 0?t=d:t=h,He(t,"NAME","triangular"),r&&r.prng?(He(t,"seed",null),He(t,"seedLength",null),NZ(t,"state",TZ(null),rYr),He(t,"stateLength",null),He(t,"byteLength",null),He(t,"toJSON",TZ(null)),He(t,"PRNG",e)):(qu(t,"seed",o),qu(t,"seedLength",f),NZ(t,"state",l,p),qu(t,"stateLength",v),qu(t,"byteLength",c),He(t,"toJSON",g),He(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(m){e.state=m}function g(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=eYr(e.state),n===void 0?m.params=[]:m.params=[n,a,u],m}function h(){return _Z(e,n,a,u)}function d(m,q,N){return Zv(m)||Zv(q)||Zv(N)||!(m<=N&&N<=q)?NaN:_Z(e,m,q,N)}}IZ.exports=iYr});var RZ=s((oye,LZ)=>{"use strict";var nYr=$v(),aYr=nYr();LZ.exports=aYr});var MZ=s((vye,FZ)=>{"use strict";var sYr=b(),PZ=RZ(),uYr=$v();sYr(PZ,"factory",uYr);FZ.exports=PZ});var CZ=s((fye,jZ)=>{"use strict";var BZ=j().isPrimitive,Qv=y(),kZ=vr();function oYr(r,e){return!BZ(r)||kZ(r)?new TypeError(Qv("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!BZ(e)||kZ(e)?new TypeError(Qv("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Qv("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}jZ.exports=oYr});var UZ=s((cye,VZ)=>{"use strict";function vYr(r,e,t){var i=r();return t*i+(1-i)*e}VZ.exports=vYr});var Kv=s((lye,JZ)=>{"use strict";var We=b(),wu=R(),GZ=M(),HZ=L(),WZ=_(),xZ=A(),DZ=T(),fYr=C(),Eu=z().factory,zZ=E(),cYr=B(),Nu=y(),lYr=CZ(),XZ=UZ();function pYr(){var r,e,t,i,n,a;if(arguments.length===0)e=Eu();else if(arguments.length===1){if(r=arguments[0],!HZ(r))throw new TypeError(Nu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(xZ(r,"prng")){if(!WZ(r.prng))throw new TypeError(Nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Eu(r)}else{if(n=arguments[0],a=arguments[1],i=lYr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!HZ(r))throw new TypeError(Nu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(xZ(r,"prng")){if(!WZ(r.prng))throw new TypeError(Nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Eu(r)}else e=Eu()}return n===void 0?t=h:t=g,We(t,"NAME","uniform"),r&&r.prng?(We(t,"seed",null),We(t,"seedLength",null),GZ(t,"state",DZ(null),fYr),We(t,"stateLength",null),We(t,"byteLength",null),We(t,"toJSON",DZ(null)),We(t,"PRNG",e)):(wu(t,"seed",u),wu(t,"seedLength",o),GZ(t,"state",c,l),wu(t,"stateLength",f),wu(t,"byteLength",v),We(t,"toJSON",p),We(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=cYr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function g(){return XZ(e,n,a)}function h(d,m){return zZ(d)||zZ(m)||d>=m?NaN:XZ(e,d,m)}}JZ.exports=pYr});var ZZ=s((pye,YZ)=>{"use strict";var gYr=Kv(),mYr=gYr();YZ.exports=mYr});var KZ=s((gye,QZ)=>{"use strict";var dYr=b(),$Z=ZZ(),hYr=Kv();dYr($Z,"factory",hYr);QZ.exports=$Z});var i$=s((mye,t$)=>{"use strict";var r$=D().isPrimitive,e$=y();function qYr(r,e){return r$(r)?r$(e)?null:new TypeError(e$("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(e$("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}t$.exports=qYr});var a$=s((dye,n$)=>{"use strict";var yYr=W(),bYr=P();function wYr(r,e,t){return t*yYr(-bYr(1-r()),1/e)}n$.exports=wYr});var rf=s((hye,p$)=>{"use strict";var xe=b(),Ou=R(),s$=M(),u$=L(),o$=_(),v$=A(),f$=T(),EYr=C(),Au=z().factory,c$=E(),NYr=B(),Su=y(),OYr=i$(),l$=a$();function AYr(){var r,e,t,i,n,a;if(arguments.length===0)t=Au();else if(arguments.length===1){if(e=arguments[0],!u$(e))throw new TypeError(Su("invalid argument. Options argument must be an object. Value: `%s`.",e));if(v$(e,"prng")){if(!o$(e.prng))throw new TypeError(Su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Au(e)}else{if(a=arguments[0],r=arguments[1],n=OYr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!u$(e))throw new TypeError(Su("invalid argument. Options argument must be an object. Value: `%s`.",e));if(v$(e,"prng")){if(!o$(e.prng))throw new TypeError(Su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Au(e)}else t=Au()}return r===void 0?i=h:i=g,xe(i,"NAME","weibull"),e&&e.prng?(xe(i,"seed",null),xe(i,"seedLength",null),s$(i,"state",f$(null),EYr),xe(i,"stateLength",null),xe(i,"byteLength",null),xe(i,"toJSON",f$(null)),xe(i,"PRNG",t)):(Ou(i,"seed",u),Ou(i,"seedLength",o),s$(i,"state",c,l),Ou(i,"stateLength",f),Ou(i,"byteLength",v),xe(i,"toJSON",p),xe(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=NYr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function g(){return l$(t,a,r)}function h(d,m){return c$(d)||c$(m)||d<=0||m<=0?NaN:l$(t,d,m)}}p$.exports=AYr});var m$=s((qye,g$)=>{"use strict";var SYr=rf(),TYr=SYr();g$.exports=TYr});var q$=s((yye,h$)=>{"use strict";var _Yr=b(),d$=m$(),IYr=rf();_Yr(d$,"factory",IYr);h$.exports=d$});var b$=s((bye,y$)=>{"use strict";var LYr=mr(),RYr=kr().isPrimitive,PYr=y(),FYr=Yu();function MYr(r){if(RYr(r))return r;if(LYr(r))return FYr(r);throw new TypeError(PYr("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}y$.exports=MYr});var E$=s((wye,w$)=>{"use strict";var BYr=b$();w$.exports=BYr});var O$=s((Eye,N$)=>{"use strict";var k=rr(),kYr=Bj().factory,jYr=zj().factory,CYr=gV().factory,VYr=KV().factory,UYr=MU().factory,GYr=YU().factory,HYr=SG().factory,WYr=JG().factory,xYr=Zn().factory,DYr=HH().factory,zYr=oW().factory,XYr=SW().factory,JYr=UW().factory,YYr=ax().factory,ZYr=Ex().factory,$Yr=ki().factory,QYr=jx().factory,KYr=tD().factory,rZr=SD().factory,eZr=pt().factory,tZr=HD().factory,iZr=oz().factory,nZr=Sz().factory,aZr=cX().factory,sZr=IX().factory,uZr=XX().factory,oZr=nJ().factory,vZr=qJ().factory,fZr=z().factory,cZr=sY().factory,lZr=OY().factory,pZr=WY().factory,gZr=Bv().factory,mZr=iZ().factory,dZr=hZ().factory,hZr=MZ().factory,qZr=KZ().factory,yZr=q$().factory,bZr=E$();function wZr(r){return k(r,"arcsine",kYr),k(r,"bernoulli",jYr),k(r,"beta",CYr),k(r,"betaprime",VYr),k(r,"binomial",UYr),k(r,"boxMuller",GYr),k(r,"cauchy",HYr),k(r,"chi",WYr),k(r,"chisquare",xYr),k(r,"cosine",DYr),k(r,"discreteUniform",zYr),k(r,"erlang",XYr),k(r,"exponential",JYr),k(r,"f",YYr),k(r,"frechet",ZYr),k(r,"gamma",$Yr),k(r,"geometric",QYr),k(r,"gumbel",KYr),k(r,"hypergeometric",rZr),k(r,"improvedZiggurat",eZr),k(r,"invgamma",tZr),k(r,"kumaraswamy",iZr),k(r,"laplace",nZr),k(r,"levy",aZr),k(r,"logistic",sZr),k(r,"lognormal",uZr),k(r,"minstd",oZr),k(r,"minstdShuffle",vZr),k(r,"mt19937",fZr),k(r,"negativeBinomial",cZr),k(r,"normal",lZr),k(r,"pareto1",pZr),k(r,"poisson",gZr),k(r,"rayleigh",mZr),k(r,"t",dZr),k(r,"triangular",hZr),k(r,"uniform",qZr),k(r,"weibull",yZr),r.base={},k(r.base,"normalizeSeed",bZr),r}N$.exports=wZr});var S$=s((Nye,A$)=>{"use strict";var EZr=L(),Tu=A(),NZr=kr().isPrimitive,OZr=re().isPrimitive,AZr=jr().isPrimitive,SZr=Ma().isPrimitive,ea=y();function TZr(r,e){return EZr(e)?Tu(e,"period")&&(r.period=e.period,!OZr(e.period))?new TypeError(ea("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):Tu(e,"amplitude")&&(r.amplitude=e.amplitude,!SZr(e.amplitude))?new TypeError(ea("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):Tu(e,"offset")&&(r.offset=e.offset,!NZr(e.offset))?new TypeError(ea("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):Tu(e,"iter")&&(r.iter=e.iter,!AZr(e.iter))?new TypeError(ea("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(ea("invalid argument. Options argument must be an object. Value: `%s`.",e))}A$.exports=TZr});var L$=s((Oye,I$)=>{"use strict";var ef=b(),T$=ya(),_Zr=x3(),IZr=o0(),LZr=u0(),RZr=Br(),PZr=S$();function _$(r){var e,t,i,n,a,u,o,f;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=PZr(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=RZr/e.period,o=e.amplitude/LZr,f=0,t={},ef(t,"next",v),ef(t,"return",c),T$&&ef(t,T$,l),t;function v(){return f+=1,i||f>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*IZr(_Zr(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return _$(e)}}I$.exports=_$});var P$=s((Aye,R$)=>{"use strict";var FZr=L$();R$.exports=FZr});var M$=s((Sye,F$)=>{"use strict";var MZr=rr(),BZr=P$();function kZr(r){return MZr(r,"iterSawtoothWave",BZr),r}F$.exports=kZr});var k$=s((Tye,B$)=>{"use strict";var jZr=17976931348623157e292;B$.exports=jZr});var _u=s((_ye,j$)=>{"use strict";var CZr=709.782712893384;j$.exports=CZr});var V$=s((Iye,C$)=>{"use strict";var VZr=sr();function UZr(r,e){var t,i,n,a;if(n=VZr(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}C$.exports=UZr});var G$=s((Lye,U$)=>{"use strict";function GZr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}U$.exports=GZr});var W$=s((Rye,H$)=>{"use strict";function HZr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}H$.exports=HZr});var D$=s((Pye,x$)=>{"use strict";function WZr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}x$.exports=WZr});var X$=s((Fye,z$)=>{"use strict";function xZr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}z$.exports=xZr});var Y$=s((Mye,J$)=>{"use strict";function DZr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}J$.exports=DZr});var $$=s((Bye,Z$)=>{"use strict";function zZr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}Z$.exports=zZr});var K$=s((kye,Q$)=>{"use strict";function XZr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}Q$.exports=XZr});var eQ=s((jye,rQ)=>{"use strict";function JZr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}rQ.exports=JZr});var aQ=s((Cye,nQ)=>{"use strict";var YZr=E(),tQ=sr(),ZZr=ce(),$Zr=I(),QZr=V(),KZr=G$(),r$r=W$(),e$r=D$(),t$r=X$(),i$r=Y$(),n$r=$$(),a$r=K$(),s$r=eQ(),Iu=1e-300,u$r=13877787807814457e-33,iQ=.8450629115104675,o$r=.12837916709551256,v$r=1,f$r=-.0023621185607526594,c$r=1,l$r=-.009864944034847148,p$r=1,g$r=-.0098649429247001,m$r=1;function d$r(r){var e,t,i,n,a,u,o,f;if(YZr(r))return NaN;if(r===$Zr)return 0;if(r===QZr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<u$r?1-r:(i=r*r,n=o$r+i*KZr(i),a=v$r+i*r$r(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=f$r+a*e$r(a),f=c$r+a*t$r(a),e?1+iQ+o/f:1-iQ-o/f;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=l$r+a*i$r(a),a=p$r+a*n$r(a);else{if(r<-6)return 2-Iu;n=g$r+a*a$r(a),a=m$r+a*s$r(a)}return i=ZZr(t,0),n=tQ(-(i*i)-.5625)*tQ((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-Iu:Iu*Iu}nQ.exports=d$r});var Zt=s((Vye,sQ)=>{"use strict";var h$r=aQ();sQ.exports=h$r});var vQ=s((Uye,oQ)=>{"use strict";var q$r=Zt(),uQ=U(),y$r=sr(),b$r=Br();function w$r(r,e){var t,i,n,a,u;if(a=q$r(uQ(e)),a!==0&&r>1){for(i=y$r(-e)/uQ(b$r*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}oQ.exports=w$r});var tf=s((Gye,fQ)=>{"use strict";var E$r=-708.3964185322641;fQ.exports=E$r});var gQ=s((Hye,pQ)=>{"use strict";var Ki=sr(),Lu=W(),N$r=P(),cQ=_u(),lQ=tf();function O$r(r,e){var t,i;return i=r*N$r(e),e>=1?i<cQ&&-e>lQ?t=Lu(e,r)*Ki(-e):r>=1?t=Lu(e/Ki(e/r),r):t=Ki(i-e):i>lQ?t=Lu(e,r)*Ki(-e):e/r<cQ?t=Lu(e/Ki(e/r),r):t=Ki(i-e),t}pQ.exports=O$r});var nf=s((Wye,mQ)=>{"use strict";function A$r(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}mQ.exports=A$r});var hQ=s((xye,dQ)=>{"use strict";var S$r=Function;dQ.exports=S$r});var yQ=s((Dye,qQ)=>{"use strict";var T$r=hQ();qQ.exports=T$r});var wQ=s((zye,bQ)=>{"use strict";var _$r=yQ(),I$r=nf();function L$r(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new _$r(e)();function a(u){return I$r(r,u)}}bQ.exports=L$r});var OQ=s((Xye,NQ)=>{"use strict";var R$r=b(),EQ=nf(),P$r=wQ();R$r(EQ,"factory",P$r);NQ.exports=EQ});var $t=s((Jye,AQ)=>{"use strict";var F$r=2220446049250313e-31;AQ.exports=F$r});var TQ=s((Yye,SQ)=>{"use strict";var M$r=eval;SQ.exports=M$r});var IQ=s((Zye,_Q)=>{"use strict";var B$r=TQ();function k$r(){var r;try{B$r('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}_Q.exports=k$r});var af=s(($ye,LQ)=>{"use strict";var j$r=IQ();LQ.exports=j$r});var PQ=s((Qye,RQ)=>{"use strict";var Ru=J(),C$r=$t(),V$r=1e6;function U$r(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||C$r,a=o.maxTerms||V$r,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,Ru(i*u)>=Ru(n)||--a===0)break}else do n=r(),u+=n;while(Ru(i*u)<Ru(n)&&--a);return u}RQ.exports=U$r});var BQ=s((Kye,MQ)=>{"use strict";var FQ=J(),G$r=$t(),H$r=1e6;function W$r(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||G$r,n=u.maxTerms||H$r,a=u.initialValue||0;do i=r(),a+=i;while(FQ(t*a)<FQ(i)&&--n);return a}MQ.exports=W$r});var Pu=s((rbe,kQ)=>{"use strict";var x$r=af(),D$r=PQ(),z$r=BQ(),sf;x$r()?sf=D$r:sf=z$r;kQ.exports=sf});var CQ=s((ebe,jQ)=>{"use strict";function X$r(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}jQ.exports=X$r});var UQ=s((tbe,VQ)=>{"use strict";var J$r=J(),Y$r=P(),Z$r=$t(),$$r=Pu(),Q$r=CQ();function K$r(r){var e,t;return r<=-1?NaN:(t=J$r(r),t>.95?Y$r(1+r)-r:t<Z$r?-r*r/2:(e={initialValue:-r},$$r(Q$r(r),e)))}VQ.exports=K$r});var HQ=s((ibe,GQ)=>{"use strict";var rQr=UQ();GQ.exports=rQr});var xQ=s((nbe,WQ)=>{"use strict";function eQr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}WQ.exports=eQr});var zQ=s((abe,DQ)=>{"use strict";function tQr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}DQ.exports=tQr});var JQ=s((sbe,XQ)=>{"use strict";function iQr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}XQ.exports=iQr});var ZQ=s((ube,YQ)=>{"use strict";function nQr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}YQ.exports=nQr});var QQ=s((obe,$Q)=>{"use strict";function aQr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}$Q.exports=aQr});var rK=s((vbe,KQ)=>{"use strict";function sQr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}KQ.exports=sQr});var tK=s((fbe,eK)=>{"use strict";function uQr(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}eK.exports=uQr});var nK=s((cbe,iK)=>{"use strict";function oQr(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}iK.exports=oQr});var sK=s((lbe,aK)=>{"use strict";function vQr(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}aK.exports=vQr});var oK=s((pbe,uK)=>{"use strict";var fQr=OQ(),cQr=HQ(),lQr=Zt(),uf=U(),pQr=sr(),gQr=it(),mQr=xQ(),dQr=zQ(),hQr=JQ(),qQr=ZQ(),yQr=QQ(),bQr=rK(),wQr=tK(),EQr=nK(),NQr=sK(),Jr=[0,0,0,0,0,0,0,0,0,0];function OQr(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-cQr(i),a=r*n,u=uf(2*n),e<r&&(u=-u),Jr[0]=mQr(u),Jr[1]=dQr(u),Jr[2]=hQr(u),Jr[3]=qQr(u),Jr[4]=yQr(u),Jr[5]=bQr(u),Jr[6]=wQr(u),Jr[7]=EQr(u),Jr[8]=NQr(u),Jr[9]=-.0005967612901927463,t=fQr(Jr,1/r),t*=pQr(-a)/uf(gQr*r),e<r&&(t=-t),t+=lQr(uf(a))/2,t}uK.exports=OQr});var fK=s((gbe,vK)=>{"use strict";function AQr(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}vK.exports=AQr});var lK=s((mbe,cK)=>{"use strict";var SQr=Pu(),TQr=fK();function _Qr(r,e,t){var i,n;return t=t||0,n=TQr(r,e),i=SQr(n,{initialValue:t}),i}cK.exports=_Qr});var gK=s((dbe,pK)=>{"use strict";function IQr(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}pK.exports=IQr});var dK=s((hbe,mK)=>{"use strict";var LQr=gK();mK.exports=LQr});var qK=s((qbe,hK)=>{"use strict";var RQr=dK();hK.exports=RQr});var wK=s((ybe,bK)=>{"use strict";var PQr=C1(),yK=E(),of=V();function FQr(r,e){return yK(r)||yK(e)?NaN:r===of||e===of?of:r===e&&r===0?PQr(r)?r:e:r<e?r:e}bK.exports=FQr});var NK=s((bbe,EK)=>{"use strict";var MQr=wK();EK.exports=MQr});var AK=s((wbe,OK)=>{"use strict";var BQr=10.900511;OK.exports=BQr});var vf=s((Ebe,SK)=>{"use strict";var kQr=2.718281828459045;SK.exports=kQr});var IK=s((Nbe,_K)=>{"use strict";var jQr=qK(),CQr=Cn(),VQr=Li(),UQr=et(),GQr=U(),HQr=J(),Lt=sr(),ta=W(),ff=s3(),cf=NK(),TK=P(),Fu=_u(),ia=tf(),lf=AK(),WQr=vf();function xQr(r,e){var t,i,n,a,u,o,f;return n=r+lf-.5,f=(e-r-lf+.5)/n,r<1?e<=ia?Lt(r*TK(e)-e-CQr(r)):ta(e,r)*Lt(-e)/VQr(r):(HQr(f*f*r)<=100&&r>150?(t=r*(UQr(f)-f)+e*(.5-lf)/n,t=Lt(t)):(a=r*TK(e/n),u=r-e,cf(a,u)<=ia||ff(a,u)>=Fu?(i=u/r,cf(a,u)/2>ia&&ff(a,u)/2<Fu?(o=ta(e/n,r/2)*Lt(u/2),t=o*o):cf(a,u)/4>ia&&ff(a,u)/4<Fu&&e>r?(o=ta(e/n,r/4)*Lt(u/4),t=o*o,t*=t):i>ia&&i<Fu?t=ta(e*Lt(i)/n,r):t=Lt(a+u)):t=ta(e/n,r)*Lt(u)),t*=GQr(n/WQr)/jQr(r),t)}_K.exports=xQr});var RK=s((Obe,LK)=>{"use strict";var DQr=.34657359027997264;LK.exports=DQr});var FK=s((Abe,PK)=>{"use strict";function zQr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}PK.exports=zQr});var VK=s((Sbe,CK)=>{"use strict";var XQr=E(),MK=ar(),pf=le(),JQr=_i(),BK=I(),YQr=V(),kK=ne(),ZQr=RK(),$Qr=FK(),QQr=709.782712893384,gf=.6931471803691238,mf=19082149292705877e-26,jK=1.4426950408889634,KQr=38.816242111356935,rKr=1.0397207708399179;function eKr(r){var e,t,i,n,a,u,o,f,v,c,l,p,g;if(r===BK||XQr(r))return r;if(r===YQr)return-1;if(r===0)return r;if(r<0?(i=!0,f=-r):(i=!1,f=r),f>=KQr){if(i)return-1;if(f>=QQr)return BK}if(u=MK(f)|0,f>ZQr)f<rKr?i?(n=r+gf,a=-mf,g=-1):(n=r-gf,a=mf,g=1):(i?g=jK*r-.5:g=jK*r+.5,g|=0,l=g,n=r-l*gf,a=l*mf),r=n-a,c=n-r-a;else{if(u<1016070144)return r;g=0}return e=.5*r,v=r*e,o=1+v*$Qr(v),l=3-o*e,p=v*((o-l)/(6-r*l)),g===0?r-(r*p-v):(t=JQr(kK+g<<20,0),p=r*(p-c)-c,p-=v,g===-1?.5*(r-p)-.5:g===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):g<=-2||g>56?(f=1-(p-r),g===1024?(n=MK(f)+(g<<20)|0,f=pf(f,n)):f*=t,f-1):(l=1,g<20?(n=1072693248-(2097152>>g)|0,l=pf(l,n),f=l-(p-r)):(n=kK-g<<20|0,l=pf(l,n),f=r-(p+l),f+=1),f*=t,f))}CK.exports=eKr});var df=s((Tbe,UK)=>{"use strict";var tKr=VK();UK.exports=tKr});var xK=s((_be,WK)=>{"use strict";var GK=E(),HK=J(),iKr=df(),nKr=P(),aKr=W(),sKr=q0();function uKr(r,e){var t;if(GK(r)||GK(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((HK(e*(r-1))<.5||HK(e)<.2)&&(t=nKr(r)*e,t<.5))return iKr(t)}else if(sKr(e)!==e)return NaN;return aKr(r,e)-1}WK.exports=uKr});var zK=s((Ibe,DK)=>{"use strict";var oKr=xK();DK.exports=oKr});var JK=s((Lbe,XK)=>{"use strict";function vKr(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}XK.exports=vKr});var ZK=s((Rbe,YK)=>{"use strict";function fKr(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}YK.exports=fKr});var QK=s((Pbe,$K)=>{"use strict";function cKr(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}$K.exports=cKr});var rrr=s((Fbe,KK)=>{"use strict";var hf=P(),lKr=$t(),pKr=JK(),gKr=ZK(),mKr=QK(),dKr=.15896368026733398,hKr=.5281534194946289,qKr=.45201730728149414;function yKr(r,e,t){var i,n,a,u;if(r<lKr)return-hf(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=hf(r);while(r>=3);t=r-2}return a=t*(r+1),u=pKr(t),n+=a*dKr+a*u,n}return r<1&&(n+=-hf(r),t=e,e=r,r+=1),r<=1.5?(a=gKr(e),i=e*t,n+=i*hKr+i*a,n):(a=t*e,u=mKr(-t),n+=a*qKr+a*u,n)}KK.exports=yKr});var arr=s((Mbe,nrr)=>{"use strict";var err=Li(),trr=df(),bKr=et(),wKr=E(),irr=rrr();function EKr(r){return wKr(r)?NaN:r<0?r<-.5?err(1+r)-1:trr(-bKr(r)+irr(r+2,r+1,r)):r<2?trr(irr(r+1,r,r-1)):err(1+r)-1}nrr.exports=EKr});var urr=s((Bbe,srr)=>{"use strict";var NKr=arr();srr.exports=NKr});var vrr=s((kbe,orr)=>{"use strict";function OKr(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}orr.exports=OKr});var crr=s((jbe,frr)=>{"use strict";var AKr=zK(),SKr=Pu(),TKr=urr(),_Kr=vrr();function IKr(r,e,t){var i,n,a,u,o;return n=TKr(r),a=(n+1)/r,u=AKr(e,r),n-=u,n/=r,o=_Kr(r,e),u+=1,i=t?a:0,n=-u*SKr(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}frr.exports=IKr});var qf=s((Cbe,lrr)=>{"use strict";var LKr=11754943508222875e-54;lrr.exports=LKr});var grr=s((Vbe,prr)=>{"use strict";var Mu=J(),se=qf(),RKr=$t(),PKr=1e6;function FKr(r,e,t){var i,n,a,u,o,f,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),u=v[1],a=v[0],u===0&&(u=se),o=u,f=0,i===!0)do v=r.next().value,v&&(f=v[1]+v[0]*f,f===0&&(f=se),o=v[1]+v[0]/o,o===0&&(o=se),f=1/f,n=o*f,u*=n);while(Mu(n-1)>e&&--t);else do v=r(),v&&(f=v[1]+v[0]*f,f===0&&(f=se),o=v[1]+v[0]/o,o===0&&(o=se),f=1/f,n=o*f,u*=n);while(v&&Mu(n-1)>e&&--t);return a/u}function MKr(r,e,t){var i,n,a,u,o,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),a=f[1],a===0&&(a=se),u=a,o=0,i===!0)do f=r.next().value,f&&(o=f[1]+f[0]*o,o===0&&(o=se),u=f[1]+f[0]/u,u===0&&(u=se),o=1/o,n=u*o,a*=n);while(f&&Mu(n-1)>e&&--t);else do f=r(),f&&(o=f[1]+f[0]*o,o===0&&(o=se),u=f[1]+f[0]/u,u===0&&(u=se),o=1/o,n=u*o,a*=n);while(f&&Mu(n-1)>e&&--t);return a}function BKr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||PKr,n=i.tolerance||RKr,i.keep?MKr(r,n,t):FKr(r,n,t)}prr.exports=BKr});var hrr=s((Ube,drr)=>{"use strict";var mrr=J(),kKr=$t(),rn=qf(),jKr=1e6;function CKr(r,e,t){var i,n,a,u,o,f;f=r(),o=f[1],n=f[0],o===0&&(o=rn),a=o,u=0;do f=r(),f&&(u=f[1]+f[0]*u,u===0&&(u=rn),a=f[1]+f[0]/a,a===0&&(a=rn),u=1/u,i=a*u,o*=i);while(f&&mrr(i-1)>e&&--t);return n/o}function VKr(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=rn),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=rn),n=o[1]+o[0]/n,n===0&&(n=rn),a=1/a,i=n*a,u*=i);while(o&&mrr(i-1)>e&&--t);return u}function UKr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||kKr,t=i.maxIter||jKr,i.keep?VKr(r,n,t):CKr(r,n,t)}drr.exports=UKr});var yrr=s((Gbe,qrr)=>{"use strict";var GKr=af(),HKr=grr(),WKr=hrr(),yf;GKr()?yf=HKr:yf=WKr;qrr.exports=yf});var wrr=s((Hbe,brr)=>{"use strict";function xKr(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}brr.exports=xKr});var Nrr=s((Wbe,Err)=>{"use strict";var DKr=yrr(),zKr=wrr();function XKr(r,e){var t=zKr(r,e);return 1/(e-r+1+DKr(t))}Err.exports=XKr});var Frr=s((xbe,Prr)=>{"use strict";var JKr=Cn(),YKr=X(),na=Li(),Orr=J(),ZKr=sr(),Arr=W(),Yr=P(),$Kr=H1(),Srr=k$(),QKr=V1(),Trr=_u(),KKr=I(),rre=V$(),ere=vQ(),_rr=gQ(),tre=oK(),bf=lK(),Irr=IK(),ire=crr(),Lrr=Nrr(),nre=170;function Rrr(r,e,t,i){var n,a,u,o,f,v,c,l,p,g,h,d,m,q,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=nre&&!a)return l&&e*4<r?(p=e*Yr(r)-r,p+=Yr(Lrr(e,r))):!l&&e>4*r?(p=e*Yr(r)-r,o=0,p+=Yr(bf(e,r,o)/e)):(p=Rrr(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Yr(p)-e+(e-.5)*Yr(e),p+=Yr(QKr)):(p=e*Yr(r)-r,o=0,p+=Yr(bf(e,r,o)/e)):p=Yr(p)+JKr(e)),p>Trr?KKr:ZKr(p);switch(c=e<30&&e<=r+1&&r<Trr,c?(q=YKr(e),g=q===e,f=g?!1:Orr(q-e)===.5):g=f=!1,g&&r>.6?(l=!l,u=0):f&&r>.2?(l=!l,u=1):r<$Kr&&e>1?u=6:r<.5?-.4/Yr(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(v=!1,a&&e>20&&(h=Orr((r-e)/e),e>200?20/e>h*h&&(v=!0):h<.4&&(v=!0)),v?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=rre(e,r),a===!1&&(p*=na(e));break;case 1:p=ere(e,r),a===!1&&(p*=na(e));break;case 2:p=a?Irr(e,r):_rr(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:na(e),a||p>=1||Srr*p>o?(o/=p,a||e<1||Srr/e>o?(o*=-e,n=!0):o=0):o=0)),p*=bf(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,m=ire(e,r,l),p=m[0],N=m[1],l=!1,a&&(p/=N);break;case 4:p=a?Irr(e,r):_rr(e,r),p!==0&&(p*=Lrr(e,r));break;case 5:p=tre(e,r),r>=e&&(l=!l);break;case 6:p=a?Arr(r,e)/na(e+1):Arr(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:na(e),p=d-p),p}Prr.exports=Rrr});var wf=s((Dbe,Mrr)=>{"use strict";var are=Frr();Mrr.exports=are});var krr=s((zbe,Brr)=>{"use strict";var sre=wf(),Ef=E(),ure=I();function ore(r,e,t){return Ef(r)||Ef(e)||Ef(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===ure?1:sre(r*t,e)}Brr.exports=ore});var Vrr=s((Xbe,Crr)=>{"use strict";var vre=T(),fre=as().factory,cre=wf(),jrr=E(),lre=I();function pre(r,e){if(jrr(r)||jrr(e)||r<0||e<=0)return vre(NaN);if(r===0)return fre(0);return t;function t(i){return i<=0?0:i===lre?1:cre(i*e,r)}}Crr.exports=pre});var Nf=s((Jbe,Grr)=>{"use strict";var gre=b(),Urr=krr(),mre=Vrr();gre(Urr,"factory",mre);Grr.exports=Urr});var Wrr=s((Ybe,Hrr)=>{"use strict";var dre=Nf();function hre(r,e){return dre(r,e/2,.5)}Hrr.exports=hre});var Drr=s((Zbe,xrr)=>{"use strict";var qre=Nf().factory;function yre(r){return qre(r/2,.5)}xrr.exports=yre});var Jrr=s(($be,Xrr)=>{"use strict";var bre=b(),zrr=Wrr(),wre=Drr();bre(zrr,"factory",wre);Xrr.exports=zrr});var Qrr=s((Qbe,$rr)=>{"use strict";var Ere=L(),Nre=A(),Ore=Ba(),Yrr=y(),Zrr=["values","indices","*"];function Are(r,e){return Ere(e)?Nre(e,"returns")&&(r.returns=e.returns,Ore(Zrr,r.returns)===-1)?new TypeError(Yrr('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Zrr.join('", "'),r.returns)):null:new TypeError(Yrr("invalid argument. Options argument must be an object. Value: `%s`.",e))}$rr.exports=Are});var rer=s((Kbe,Krr)=>{"use strict";var Sre=A();function Tre(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),Sre(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}Krr.exports=Tre});var ter=s((rwe,eer)=>{"use strict";var _re=A();function Ire(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),_re(t,n)?t[n].push(a):t[n]=[a];return t}eer.exports=Ire});var ner=s((ewe,ier)=>{"use strict";var Lre=A();function Rre(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),Lre(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}ier.exports=Rre});var oer=s((twe,uer)=>{"use strict";var aer=Wr(),ser=y(),Pre=Qrr(),Fre=rer(),Mre=ter(),Bre=ner();function kre(r,e,t){var i,n,a;if(!aer(r))throw new TypeError(ser("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=Pre(i,e),n)throw n;a=t}if(!aer(a))throw new TypeError(ser("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?Fre(r,a):i.returns==="indices"?Mre(r,a):Bre(r,a)}uer.exports=kre});var fer=s((iwe,ver)=>{"use strict";var jre=oer();ver.exports=jre});var ler=s((nwe,cer)=>{"use strict";function Cre(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}cer.exports=Cre});var mer=s((awe,ger)=>{"use strict";var Vre=mr(),Ure=j().isPrimitive,Gre=L(),Hre=vr(),per=A(),Of=y();function Wre(r,e){return Gre(e)?per(e,"alpha")&&(r.alpha=e.alpha,!Ure(r.alpha)||Hre(r.alpha))?new TypeError(Of("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):per(e,"groups")&&(r.groups=e.groups,!Vre(r.groups))?new TypeError(Of("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(Of("invalid argument. Options argument must be an object. Value: `%s`.",e))}ger.exports=Wre});var Eer=s((swe,wer)=>{"use strict";var der=E(),Bu=Mr(),her=W(),xre=J(),qer=E1(),Dre=Ii(),yer=Qa(),zre=o1(),Xre=Ka(),Jre=Dre+1,ber=1e308;function Yre(r,e){var t,i;return der(r)||der(e)||Bu(e)?NaN:Bu(r)||r===0||e<Xre||xre(r)>Jre&&e<=0?r:e>yer?0*r:e<zre?(t=her(10,-(e+yer)),i=r*ber*t,Bu(i)?r:qer(i)/ber/t):(t=her(10,-e),i=r*t,Bu(i)?r:qer(i)/t)}wer.exports=Yre});var Oer=s((uwe,Ner)=>{"use strict";var Zre=Eer();Ner.exports=Zre});var Ter=s((owe,Ser)=>{"use strict";var $re=re(),Qre=L(),Kre=gr().isPrimitive,Aer=A(),Af=y(),Sf=Oer();function ree(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!Qre(r))throw new TypeError(Af("invalid argument. First argument must be an object. Value: `%s`.",r));if(Aer(r,"digits")){if(!$re(r.digits))throw new TypeError(Af("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(Aer(r,"decision")){if(!Kre(r.decision))throw new TypeError(Af("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+Sf(this.pValue,-t)+`
`,i+="    statistic: "+Sf(this.statistic,-t)+`
`,i+="    df: "+Sf(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}Ser.exports=ree});var Ler=s((vwe,Ier)=>{"use strict";var eee=Wr(),tee=L(),Qt=rr(),iee=Ei(),ku=y(),nee=Jrr(),aee=fer(),_er=P(),see=ler(),uee=mer(),oee=Ter();function vee(){var r,e,t,i,n,a,u,o,f,v,c,l,p,g,h,d,m,q,N,O;if(f=[],e=arguments.length,v={},tee(arguments[e-1])&&(r=arguments[e-1],e-=1,g=uee(v,r),g))throw g;if(v.groups){if(n=aee(arguments[0],v.groups),i=iee(n),e=i.length,e<2)throw new Error(ku("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(O=0;O<e;O++)f.push(n[i[O]])}else for(O=0;O<e;O++)f.push(arguments[O]);for(u=0,t=0,o=0,h=0,q=new Array(e),N=q.slice(),O=0;O<e;O++){if(p=f[O],!eee(p))throw new TypeError(ku("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(ku("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));q[O]=p.length-1,u+=q[O],t+=1/q[O],N[O]=see(p),o+=q[O]*N[O],h+=q[O]*_er(N[O])}if(o/=u,v.alpha===void 0?a=.05:a=v.alpha,a<0||a>1)throw new RangeError(ku("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*_er(o)-h,l/=1+(t-1/u)/(3*(e-1)),m=e-1,c=1-nee(l,m),d={},Qt(d,"rejected",c<=a),Qt(d,"alpha",a),Qt(d,"pValue",c),Qt(d,"statistic",l),Qt(d,"df",m),Qt(d,"method","Bartlett's test of equal variances"),Qt(d,"print",oee),d}Ier.exports=vee});var Per=s((fwe,Rer)=>{"use strict";var fee=Ler();Rer.exports=fee});var Mer=s((cwe,Fer)=>{"use strict";var Tf=E(),cee=ut();function lee(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,v=1,Tf(a)===!1)for(v;v<r;v++){if(u+=t,f=e[u],Tf(f)){a=f;break}(f>a||f===a&&cee(f))&&(a=f),i[o]=a,o+=n}if(Tf(a))for(v;v<r;v++)i[o]=a,o+=n;return i}Fer.exports=lee});var ker=s((lwe,Ber)=>{"use strict";var _f=E(),pee=ut();function gee(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return n;if(f=i,v=u,o=e[f],n[v]=o,v+=a,l=1,_f(o)===!1)for(l;l<r;l++){if(f+=t,c=e[f],_f(c)){o=c;break}(c>o||c===o&&pee(c))&&(o=c),n[v]=o,v+=a}if(_f(o))for(l;l<r;l++)n[v]=o,v+=a;return n}Ber.exports=gee});var Ver=s((pwe,Cer)=>{"use strict";var mee=b(),jer=Mer(),dee=ker();mee(jer,"ndarray",dee);Cer.exports=jer});var Ger=s((gwe,Uer)=>{"use strict";var hee=Ver();Uer.exports=hee});var Wer=s((mwe,Her)=>{"use strict";var qee=E(),yee=ut();function bee(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],qee(a))return a;(a>i||a===i&&yee(a))&&(i=a)}return i}Her.exports=bee});var Der=s((dwe,xer)=>{"use strict";var wee=E(),Eee=ut();function Nee(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],wee(u))return u;(u>n||u===n&&Eee(u))&&(n=u)}return n}xer.exports=Nee});var Jer=s((hwe,Xer)=>{"use strict";var Oee=b(),zer=Wer(),Aee=Der();Oee(zer,"ndarray",Aee);Xer.exports=zer});var Zer=s((qwe,Yer)=>{"use strict";var See=Jer();Yer.exports=See});var Ker=s((ywe,Qer)=>{"use strict";var $er=E(),Tee=ut();function _ee(r,e,t,i,n){var a,u,o,f,v;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,v=0;v<r&&i[o]!==0;v++)u+=t,o+=n;if(v===r)return NaN;if(a=e[u],$er(a))return a;for(v+=1,v;v<r;v++)if(u+=t,o+=n,!i[o]){if(f=e[u],$er(f))return f;(f>a||f===a&&Tee(f))&&(a=f)}return a}Qer.exports=_ee});var ttr=s((bwe,etr)=>{"use strict";var rtr=E(),Iee=ut();function Lee(r,e,t,i,n,a,u){var o,f,v,c,l;if(r<=0)return NaN;for(f=i,v=u,l=0;l<r&&n[v]!==0;l++)f+=t,v+=a;if(l===r)return NaN;if(o=e[f],rtr(o))return o;for(l+=1,l;l<r;l++)if(f+=t,v+=a,!n[v]){if(c=e[f],rtr(c))return c;(c>o||c===o&&Iee(c))&&(o=c)}return o}etr.exports=Lee});var atr=s((wwe,ntr)=>{"use strict";var Ree=b(),itr=Ker(),Pee=ttr();Ree(itr,"ndarray",Pee);ntr.exports=itr});var utr=s((Ewe,str)=>{"use strict";var Fee=Zt(),Mee=U(),If=E();function Bee(r,e,t){var i,n;return If(r)||If(e)||If(t)||t<0?NaN:t===0?r<e?0:1:(i=t*Mee(2),n=r-e,.5*Fee(-n/i))}str.exports=Bee});var vtr=s((Nwe,otr)=>{"use strict";var kee=T(),jee=as().factory,Lf=E(),Cee=U(),Vee=Zt();function Uee(r,e){var t;if(Lf(r)||Lf(e)||e<0)return kee(NaN);if(e===0)return jee(r);return t=e*Cee(2),i;function i(n){var a;return Lf(n)?NaN:(a=n-r,.5*Vee(-a/t))}}otr.exports=Uee});var ltr=s((Owe,ctr)=>{"use strict";var Gee=b(),ftr=utr(),Hee=vtr();Gee(ftr,"factory",Hee);ctr.exports=ftr});var mtr=s((Awe,gtr)=>{"use strict";var ptr=E(),Wee=P(),xee=it(),Dee=vf();function zee(r,e){return ptr(r)||ptr(e)||e<=0?NaN:.5*Wee(xee*Dee*e*e)}gtr.exports=zee});var htr=s((Swe,dtr)=>{"use strict";var Xee=mtr();dtr.exports=Xee});var btr=s((Twe,ytr)=>{"use strict";var qtr=E();function Jee(r,e){return qtr(r)||qtr(e)||e<=0?NaN:0}ytr.exports=Jee});var Etr=s((_we,wtr)=>{"use strict";var Yee=btr();wtr.exports=Yee});var Otr=s((Iwe,Ntr)=>{"use strict";var Zee=X(),$ee=[Qee,Kee,rte,ete,tte,ite,nte,ate,ste,ute,ote,vte,fte,cte,lte,pte,gte,mte,dte,hte,qte,yte,bte,wte,Ete,Nte,Ote,Ate,Ste,Tte,_te,Ite,Lte,Rte,Pte,Fte,Mte,Bte,kte,jte,Cte,Vte,Ute,Gte,Hte,Wte,xte,Dte,zte,Xte,Jte,Yte,Zte,$te,Qte,Kte,rie,eie,tie,iie,nie,aie,sie,uie,oie,vie,fie,cie,lie,pie,gie,mie,die,hie,qie,yie,bie,wie,Eie,Nie,Oie,Aie,Sie,Tie,_ie,Iie,Lie,Rie,Pie,Fie,Mie,Bie,kie,jie,Cie,Vie,Uie,Gie,Hie,Wie,xie];function Qee(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function Kee(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function rte(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function ete(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function tte(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function ite(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function nte(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function ate(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function ste(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function ute(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function ote(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function vte(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function fte(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function cte(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function lte(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function pte(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function gte(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function mte(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function dte(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function hte(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function qte(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function yte(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function bte(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function wte(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function Ete(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function Nte(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function Ote(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function Ate(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function Ste(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function Tte(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function _te(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function Ite(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function Lte(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function Rte(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function Pte(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function Fte(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function Mte(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function Bte(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function kte(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function jte(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function Cte(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function Vte(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function Ute(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function Gte(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function Hte(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function Wte(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function xte(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function Dte(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function zte(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function Xte(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function Jte(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function Yte(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function Zte(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function $te(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function Qte(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function Kte(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function rie(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function eie(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function tie(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function iie(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function nie(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function aie(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function sie(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function uie(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function oie(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function vie(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function fie(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function cie(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function lie(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function pie(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function gie(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function mie(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function die(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function hie(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function qie(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function yie(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function bie(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function wie(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function Eie(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function Nie(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function Oie(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function Aie(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function Sie(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function Tie(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function _ie(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function Iie(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function Lie(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function Rie(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function Pie(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function Fie(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function Mie(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function Bie(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function kie(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function jie(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function Cie(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function Vie(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function Uie(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function Gie(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function Hie(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function Wie(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function xie(){return 1}function Die(r){var e=Zee(r),t=$ee[e];return t(2*r-(2*e+1))}Ntr.exports=Die});var Itr=s((Lwe,_tr)=>{"use strict";var Atr=sr(),zie=I(),Str=Otr(),Ttr=.5641895835477563;function Xie(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?Ttr/r:(e=r*r,Ttr*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):Str(400/(4+r)):r<-26.7?zie:(e=r*r,r<-6.1?2*Atr(e):2*Atr(e)-Str(400/(4-r)))}_tr.exports=Xie});var Rf=s((Rwe,Ltr)=>{"use strict";var Jie=Itr();Ltr.exports=Jie});var Ftr=s((Pwe,Ptr)=>{"use strict";var Yie=P(),Zie=et(),$ie=i0(),Qie=Zt(),Kie=Rf(),rne=V(),Pf=E(),Rtr=.7071067811865475;function ene(r,e,t){var i;return Pf(r)||Pf(e)||Pf(t)||t<0?NaN:t===0?r<e?rne:0:(i=(r-e)/t,i<-1?Yie(Kie(-i*Rtr)/2)-$ie(i)/2:Zie(-Qie(i*Rtr)/2))}Ptr.exports=ene});var ktr=s((Fwe,Btr)=>{"use strict";var Mtr=E(),tne=V();function ine(r,e){return Mtr(r)||Mtr(e)?NaN:r<e?tne:0}Btr.exports=ine});var Vtr=s((Mwe,Ctr)=>{"use strict";var nne=T(),jtr=E(),ane=V();function sne(r){if(jtr(r))return nne(NaN);return e;function e(t){return jtr(t)?NaN:t<r?ane:0}}Ctr.exports=sne});var Htr=s((Bwe,Gtr)=>{"use strict";var une=b(),Utr=ktr(),one=Vtr();une(Utr,"factory",one);Gtr.exports=Utr});var ztr=s((kwe,Dtr)=>{"use strict";var vne=T(),fne=Htr().factory,Wtr=E(),cne=et(),lne=i0(),pne=Zt(),gne=Rf(),mne=P(),xtr=.7071067811865475;function dne(r,e){if(Wtr(r)||Wtr(e)||e<0)return vne(NaN);if(e===0)return fne(r);return t;function t(i){var n=(i-r)/e;return n<-1?mne(gne(-n*xtr)/2)-lne(n)/2:cne(-pne(n*xtr)/2)}}Dtr.exports=dne});var Ytr=s((jwe,Jtr)=>{"use strict";var hne=b(),Xtr=Ftr(),qne=ztr();hne(Xtr,"factory",qne);Jtr.exports=Xtr});var Ff=s((Cwe,Ztr)=>{"use strict";var yne=1.8378770664093456;Ztr.exports=yne});var Ktr=s((Vwe,Qtr)=>{"use strict";var bne=P(),$tr=W(),wne=Ff(),Ene=V(),Nne=I(),Mf=E();function One(r,e,t){var i,n,a;return Mf(r)||Mf(e)||Mf(t)||t<0?NaN:t===0?r===e?Nne:Ene:(i=$tr(t,2),n=-.5*(2*bne(t)+wne),a=-1/(2*i),n+a*$tr(r-e,2))}Qtr.exports=One});var tir=s((Uwe,eir)=>{"use strict";var Ane=I(),Sne=V(),rir=E();function Tne(r,e){return rir(r)||rir(e)?NaN:r===e?Ane:Sne}eir.exports=Tne});var air=s((Gwe,nir)=>{"use strict";var _ne=T(),Ine=I(),Lne=V(),iir=E();function Rne(r){if(iir(r))return _ne(NaN);return e;function e(t){return iir(t)?NaN:t===r?Ine:Lne}}nir.exports=Rne});var oir=s((Hwe,uir)=>{"use strict";var Pne=b(),sir=tir(),Fne=air();Pne(sir,"factory",Fne);uir.exports=sir});var lir=s((Wwe,cir)=>{"use strict";var Mne=T(),Bne=oir().factory,kne=Ff(),vir=E(),fir=W(),jne=P();function Cne(r,e){var t,i,n;if(vir(r)||vir(e)||e<0)return Mne(NaN);if(e===0)return Bne(r);return t=fir(e,2),i=-.5*(2*jne(e)+kne),n=-1/(2*t),a;function a(u){return i+n*fir(u-r,2)}}cir.exports=Cne});var mir=s((xwe,gir)=>{"use strict";var Vne=b(),pir=Ktr(),Une=lir();Vne(pir,"factory",Une);gir.exports=pir});var qir=s((Dwe,hir)=>{"use strict";var dir=E();function Gne(r,e){return dir(r)||dir(e)||e<=0?NaN:r}hir.exports=Gne});var bir=s((zwe,yir)=>{"use strict";var Hne=qir();yir.exports=Hne});var Nir=s((Xwe,Eir)=>{"use strict";var wir=E();function Wne(r,e){return wir(r)||wir(e)||e<=0?NaN:r}Eir.exports=Wne});var Air=s((Jwe,Oir)=>{"use strict";var xne=Nir();Oir.exports=xne});var Tir=s((Ywe,Sir)=>{"use strict";var Bf=E(),Dne=sr(),zne=W();function Xne(r,e,t){return Bf(r)||Bf(e)||Bf(t)||t<=0?NaN:Dne(e*r+.5*zne(t*r,2))}Sir.exports=Xne});var Iir=s((Zwe,_ir)=>{"use strict";var Jne=T(),kf=E(),Yne=sr(),Zne=W();function $ne(r,e){if(kf(r)||kf(e)||e<=0)return Jne(NaN);return t;function t(i){return kf(i)?NaN:Yne(r*i+.5*Zne(e*i,2))}}_ir.exports=$ne});var Pir=s(($we,Rir)=>{"use strict";var Qne=b(),Lir=Tir(),Kne=Iir();Qne(Lir,"factory",Kne);Rir.exports=Lir});var Bir=s((Qwe,Mir)=>{"use strict";var Fir=E();function rae(r,e){return Fir(r)||Fir(e)||e<=0?NaN:r}Mir.exports=rae});var jir=s((Kwe,kir)=>{"use strict";var eae=Bir();kir.exports=eae});var Uir=s((rEe,Vir)=>{"use strict";var tae=sr(),Cir=W(),iae=U(),nae=it(),aae=I(),jf=E();function sae(r,e,t){var i,n,a;return jf(r)||jf(e)||jf(t)||t<0?NaN:t===0?r===e?aae:0:(i=Cir(t,2),n=1/iae(i*nae),a=-1/(2*i),n*tae(a*Cir(r-e,2)))}Vir.exports=sae});var Wir=s((eEe,Hir)=>{"use strict";var uae=I(),Gir=E();function oae(r,e){return Gir(r)||Gir(e)?NaN:r===e?uae:0}Hir.exports=oae});var zir=s((tEe,Dir)=>{"use strict";var vae=T(),fae=I(),xir=E();function cae(r){if(xir(r))return vae(NaN);return e;function e(t){return xir(t)?NaN:t===r?fae:0}}Dir.exports=cae});var Yir=s((iEe,Jir)=>{"use strict";var lae=b(),Xir=Wir(),pae=zir();lae(Xir,"factory",pae);Jir.exports=Xir});var Qir=s((nEe,$ir)=>{"use strict";var gae=T(),mae=Yir().factory,Cf=E(),dae=U(),hae=sr(),Zir=W(),qae=it();function yae(r,e){var t,i,n;if(Cf(r)||Cf(e)||e<0)return gae(NaN);if(e===0)return mae(r);return t=Zir(e,2),i=1/dae(t*qae),n=-1/(2*t),a;function a(u){return Cf(u)?NaN:i*hae(n*Zir(u-r,2))}}$ir.exports=yae});var enr=s((aEe,rnr)=>{"use strict";var bae=b(),Kir=Uir(),wae=Qir();bae(Kir,"factory",wae);rnr.exports=Kir});var nnr=s((sEe,inr)=>{"use strict";var tnr=E();function Eae(r,e){return tnr(r)||tnr(e)||e<=0?NaN:0}inr.exports=Eae});var snr=s((uEe,anr)=>{"use strict";var Nae=nnr();anr.exports=Nae});var vnr=s((oEe,onr)=>{"use strict";var unr=E();function Oae(r,e){return unr(r)||unr(e)||e<=0?NaN:e}onr.exports=Oae});var cnr=s((vEe,fnr)=>{"use strict";var Aae=vnr();fnr.exports=Aae});var gnr=s((fEe,pnr)=>{"use strict";var lnr=E();function Sae(r,e){return lnr(r)||lnr(e)||e<=0?NaN:e*e}pnr.exports=Sae});var dnr=s((cEe,mnr)=>{"use strict";var Tae=gnr();mnr.exports=Tae});var qnr=s((lEe,hnr)=>{"use strict";var Tr=rr(),_ae=ltr(),Iae=htr(),Lae=Etr(),Rae=Ytr(),Pae=mir(),Fae=bir(),Mae=Air(),Bae=Pir(),kae=jir(),jae=enr(),Cae=Ev(),Vae=snr(),Uae=cnr(),Gae=dnr();function Hae(r){return Tr(r,"cdf",_ae),Tr(r,"entropy",Iae),Tr(r,"kurtosis",Lae),Tr(r,"logcdf",Rae),Tr(r,"logpdf",Pae),Tr(r,"mean",Fae),Tr(r,"median",Mae),Tr(r,"mgf",Bae),Tr(r,"mode",kae),Tr(r,"pdf",jae),Tr(r,"quantile",Cae),Tr(r,"skewness",Vae),Tr(r,"stdev",Uae),Tr(r,"variance",Gae),r}hnr.exports=Hae});var bnr=s((pEe,ynr)=>{"use strict";var Wae=rr(),xae=qnr();function Dae(r){return Wae(r,"normal",xae({})),r}ynr.exports=Dae});var Enr=s((gEe,wnr)=>{"use strict";var aa=rr(),zae=Per(),Xae=Ger().ndarray,Jae=Zer().ndarray,Yae=atr().ndarray,Zae=bnr();function $ae(r){return aa(r,"bartlettTest",zae),aa(r,"cumax",Xae),aa(r,"max",Jae),aa(r,"mskmax",Yae),aa(r,"dists",Zae({})),r}wnr.exports=$ae});var Onr=s((mEe,Nnr)=>{"use strict";var Qae=K().isPrimitive,Kae=y();function r0e(r){return e;function e(t){if(!Qae(t))throw new TypeError(Kae("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}Nnr.exports=r0e});var Snr=s((dEe,Anr)=>{"use strict";var e0e=Onr();Anr.exports=e0e});var Lnr=s((hEe,Inr)=>{"use strict";var Tnr=K().isPrimitive,_nr=y();function t0e(r){return e;function e(t,i){if(!Tnr(t))throw new TypeError(_nr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Tnr(i))throw new TypeError(_nr("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}Inr.exports=t0e});var Pnr=s((qEe,Rnr)=>{"use strict";var i0e=Lnr();Rnr.exports=i0e});var Mnr=s((yEe,Fnr)=>{"use strict";var Vf=K().isPrimitive,Uf=y();function n0e(r){return e;function e(t,i,n){if(!Vf(t))throw new TypeError(Uf("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Vf(i))throw new TypeError(Uf("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Vf(n))throw new TypeError(Uf("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}Fnr.exports=n0e});var knr=s((bEe,Bnr)=>{"use strict";var a0e=Mnr();Bnr.exports=a0e});var Cnr=s((wEe,jnr)=>{"use strict";var Gf=rr(),s0e=Snr(),u0e=Pnr(),o0e=knr();function v0e(r){return Gf(r,"s_o",s0e),Gf(r,"ss_o",u0e),Gf(r,"sss_o",o0e),r}jnr.exports=v0e});var Unr=s((EEe,Vnr)=>{"use strict";function f0e(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}Vnr.exports=f0e});var ju=s((NEe,Gnr)=>{"use strict";var c0e=Unr();Gnr.exports=c0e});var Wnr=s((OEe,Hnr)=>{"use strict";function l0e(r){return r.toLowerCase()}Hnr.exports=l0e});var en=s((AEe,xnr)=>{"use strict";var p0e=Wnr();xnr.exports=p0e});var znr=s((SEe,Dnr)=>{"use strict";var g0e=typeof String.prototype.trim<"u";Dnr.exports=g0e});var Hf=s((TEe,Xnr)=>{"use strict";var m0e=String.prototype.trim;Xnr.exports=m0e});var $nr=s((_Ee,Znr)=>{"use strict";var Jnr=Hf(),d0e=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,Ynr="\u180E";function h0e(){return Jnr.call(d0e)===""&&Jnr.call(Ynr)===Ynr}Znr.exports=h0e});var Knr=s((IEe,Qnr)=>{"use strict";var q0e=nt(),y0e=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function b0e(r){return q0e(r,y0e,"$1")}Qnr.exports=b0e});var ear=s((LEe,rar)=>{"use strict";var w0e=Hf();function E0e(r){return w0e.call(r)}rar.exports=E0e});var tn=s((REe,tar)=>{"use strict";var N0e=znr(),O0e=$nr(),A0e=Knr(),S0e=ear(),Wf;N0e&&O0e()?Wf=S0e:Wf=A0e;tar.exports=Wf});var nar=s((PEe,iar)=>{"use strict";var T0e=ju(),_0e=en(),Cu=nt(),I0e=tn(),L0e=/\s+/g,R0e=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,P0e=/(?:\s|^)([^\s]+)(?=\s|$)/g,F0e=/([a-z0-9])([A-Z])/g;function M0e(r,e,t){return e=_0e(e),t===0?e:T0e(e)}function B0e(r){return r=Cu(r,R0e," "),r=Cu(r,L0e," "),r=Cu(r,F0e,"$1 $2"),r=I0e(r),Cu(r,P0e,M0e)}iar.exports=B0e});var sar=s((FEe,aar)=>{"use strict";var k0e=nar();aar.exports=k0e});var oar=s((MEe,uar)=>{"use strict";var j0e=K().isPrimitive,C0e=y(),V0e=sar();function U0e(r){if(!j0e(r))throw new TypeError(C0e("invalid argument. First argument must be a string. Value: `%s`.",r));return V0e(r)}uar.exports=U0e});var car=s((BEe,far)=>{"use strict";var G0e=oar();far.exports=G0e});var par=s((kEe,lar)=>{"use strict";var H0e=K().isPrimitive,W0e=y(),x0e=ju();function D0e(r){if(!H0e(r))throw new TypeError(W0e("invalid argument. First argument must be a string. Value: `%s`.",r));return x0e(r)}lar.exports=D0e});var mar=s((jEe,gar)=>{"use strict";var z0e=par();gar.exports=z0e});var har=s((CEe,dar)=>{"use strict";function X0e(r){return r.toUpperCase()}dar.exports=X0e});var yar=s((VEe,qar)=>{"use strict";var J0e=har();qar.exports=J0e});var war=s((UEe,bar)=>{"use strict";var Y0e=yar(),xf=nt(),Z0e=tn(),$0e=/\s+/g,Q0e=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,K0e=/([a-z0-9])([A-Z])/g;function rse(r){return r=xf(r,Q0e," "),r=xf(r,K0e,"$1 $2"),r=Z0e(r),r=xf(r,$0e,"_"),Y0e(r)}bar.exports=rse});var Nar=s((GEe,Ear)=>{"use strict";var ese=war();Ear.exports=ese});var Aar=s((HEe,Oar)=>{"use strict";var tse=K().isPrimitive,ise=y(),nse=Nar();function ase(r){if(!tse(r))throw new TypeError(ise("invalid argument. Must provide a string. Value: `%s`.",r));return nse(r)}Oar.exports=ase});var Tar=s((WEe,Sar)=>{"use strict";var sse=Aar();Sar.exports=sse});var Iar=s((xEe,_ar)=>{"use strict";var use=en(),Df=nt(),ose=tn(),vse=/\s+/g,fse=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,cse=/([a-z0-9])([A-Z])/g;function lse(r){return r=Df(r,fse," "),r=Df(r,cse,"$1 $2"),r=ose(r),r=Df(r,vse,"-"),use(r)}_ar.exports=lse});var Rar=s((DEe,Lar)=>{"use strict";var pse=Iar();Lar.exports=pse});var Far=s((zEe,Par)=>{"use strict";var gse=K().isPrimitive,mse=y(),dse=Rar();function hse(r){if(!gse(r))throw new TypeError(mse("invalid argument. Must provide a string. Value: `%s`.",r));return dse(r)}Par.exports=hse});var Bar=s((XEe,Mar)=>{"use strict";var qse=Far();Mar.exports=qse});var jar=s((JEe,kar)=>{"use strict";var yse=K().isPrimitive,bse=y(),wse=en();function Ese(r){if(!yse(r))throw new TypeError(bse("invalid argument. Must provide a string. Value: `%s`.",r));return wse(r)}kar.exports=Ese});var Var=s((YEe,Car)=>{"use strict";var Nse=jar();Car.exports=Nse});var Gar=s((ZEe,Uar)=>{"use strict";var Ose=ju(),Ase=en(),Vu=nt(),Sse=tn(),Tse=/\s+/g,_se=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Ise=/(?:\s|^)([^\s]+)(?=\s|$)/g,Lse=/([a-z0-9])([A-Z])/g;function Rse(r,e){return Ose(Ase(e))}function Pse(r){return r=Vu(r,_se," "),r=Vu(r,Tse," "),r=Vu(r,Lse,"$1 $2"),r=Sse(r),Vu(r,Ise,Rse)}Uar.exports=Pse});var War=s(($Ee,Har)=>{"use strict";var Fse=Gar();Har.exports=Fse});var Dar=s((QEe,xar)=>{"use strict";var Mse=K().isPrimitive,Bse=y(),kse=War();function jse(r){if(!Mse(r))throw new TypeError(Bse("invalid argument. First argument must be a string. Value: `%s`.",r));return kse(r)}xar.exports=jse});var Xar=s((KEe,zar)=>{"use strict";var Cse=Dar();zar.exports=Cse});var Yar=s((rNe,Jar)=>{"use strict";var Vse=en(),zf=nt(),Use=tn(),Gse=/\s+/g,Hse=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Wse=/([a-z0-9])([A-Z])/g;function xse(r){return r=zf(r,Hse," "),r=zf(r,Wse,"$1 $2"),r=Use(r),r=zf(r,Gse,"_"),Vse(r)}Jar.exports=xse});var $ar=s((eNe,Zar)=>{"use strict";var Dse=Yar();Zar.exports=Dse});var Kar=s((tNe,Qar)=>{"use strict";var zse=K().isPrimitive,Xse=y(),Jse=$ar();function Yse(r){if(!zse(r))throw new TypeError(Xse("invalid argument. Must provide a string. Value: `%s`.",r));return Jse(r)}Qar.exports=Yse});var e0r=s((iNe,r0r)=>{"use strict";var Zse=Kar();r0r.exports=Zse});var n0r=s((nNe,i0r)=>{"use strict";var $se=L(),t0r=A(),Qse=gr().isPrimitive,Kse=K().isPrimitive,Xf=y();function rue(r,e){return $se(e)?t0r(e,"flags")&&(r.flags=e.flags,!Kse(r.flags))?new TypeError(Xf("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):t0r(e,"capture")&&(r.capture=e.capture,!Qse(r.capture))?new TypeError(Xf("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(Xf("invalid argument. Options argument must be an object. Value: `%s`.",e))}i0r.exports=rue});var Uu=s((aNe,s0r)=>{"use strict";var eue=n0r(),a0r=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function tue(r){var e,t;if(arguments.length>0){if(e={},t=eue(e,r),t)throw t;return e.capture?new RegExp("("+a0r+")",e.flags):new RegExp(a0r,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}s0r.exports=tue});var o0r=s((sNe,u0r)=>{"use strict";var iue=Uu(),nue=iue({capture:!0});u0r.exports=nue});var f0r=s((uNe,v0r)=>{"use strict";var aue=Uu(),sue=aue();v0r.exports=sue});var p0r=s((oNe,l0r)=>{"use strict";var c0r=b(),Jf=Uu(),uue=o0r(),oue=f0r();c0r(Jf,"REGEXP",oue);c0r(Jf,"REGEXP_CAPTURE",uue);l0r.exports=Jf});var m0r=s((vNe,g0r)=>{"use strict";var vue=p0r().REGEXP;function fue(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),vue.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}g0r.exports=fue});var h0r=s((fNe,d0r)=>{"use strict";var cue=m0r();d0r.exports=cue});var y0r=s((cNe,q0r)=>{"use strict";var lue=K().isPrimitive,pue=y(),gue=h0r();function mue(r){if(!lue(r))throw new TypeError(pue("invalid argument. Must provide a string. Value: `%s`.",r));return gue(r)}q0r.exports=mue});var w0r=s((lNe,b0r)=>{"use strict";var due=y0r();b0r.exports=due});var N0r=s((pNe,E0r)=>{"use strict";function hue(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}E0r.exports=hue});var A0r=s((gNe,O0r)=>{"use strict";var que=N0r();O0r.exports=que});var T0r=s((mNe,S0r)=>{"use strict";var yue=K().isPrimitive,bue=y(),wue=A0r();function Eue(r){if(!yue(r))throw new TypeError(bue("invalid argument. First argument must be a string. Value: `%s`.",r));return wue(r)}S0r.exports=Eue});var I0r=s((dNe,_0r)=>{"use strict";var Nue=T0r();_0r.exports=Nue});var R0r=s((hNe,L0r)=>{"use strict";var Oue=K().isPrimitive,Aue=y();function Sue(r){if(!Oue(r))throw new TypeError(Aue("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}L0r.exports=Sue});var F0r=s((qNe,P0r)=>{"use strict";var Tue=R0r();P0r.exports=Tue});var B0r=s((yNe,M0r)=>{"use strict";var ue=rr(),_ue=car(),Iue=mar(),Lue=Tar(),Rue=Bar(),Pue=Var(),Fue=Xar(),Mue=e0r(),Bue=w0r(),kue=I0r(),jue=F0r();function Cue(r){return ue(r,"camelcase",_ue),ue(r,"capitalize",Iue),ue(r,"constantcase",Lue),ue(r,"kebabcase",Rue),ue(r,"lowercase",Pue),ue(r,"pascalcase",Fue),ue(r,"snakecase",Mue),ue(r,"startcase",Bue),ue(r,"uncapitalize",kue),ue(r,"uppercase",jue),r}M0r.exports=Cue});var j0r=s((bNe,k0r)=>{"use strict";var Vue=rr(),Uue=Cnr(),Gue=B0r();function Hue(r){return Vue(r,"tools",Uue({})),r=Gue(r),r}k0r.exports=Hue});var V0r=s((wNe,C0r)=>{"use strict";var oe=rr(),Wue=bd(),xue=sy(),Due=my(),zue=lE(),Xue=qP(),Jue=UB(),Yue=O$(),Zue=M$(),$ue=Enr(),Que=j0r();function Kue(){var r={};return oe(r,"array",Wue({})),oe(r,"assert",xue({})),oe(r,"blas",Due({})),oe(r,"datasets",zue({})),oe(r,"math",Xue({})),oe(r,"ndarray",Jue({})),oe(r,"random",Yue({})),oe(r,"simulate",Zue({})),oe(r,"stats",$ue({})),oe(r,"string",Que({})),r}C0r.exports=Kue});var G0r=s((ENe,U0r)=>{"use strict";var roe=b(),Yf=V0r();roe(Yf,"CACHED",Yf());U0r.exports=Yf});var toe=s((NNe,H0r)=>{var eoe=G0r().CACHED;H0r.exports=eoe});return toe();})();
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
* @returns {ndarray} zero-filled ndarray
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
