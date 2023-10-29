/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Dn=s((dZr,lv)=>{"use strict";function mtr(r){return Object.keys(Object(r))}lv.exports=mtr});var gv=s((hZr,pv)=>{"use strict";var dtr=Dn();function htr(){return(dtr(arguments)||"").length!==2}function qtr(){return htr(1,2)}pv.exports=qtr});var dv=s((qZr,mv)=>{"use strict";var ytr=typeof Object.keys<"u";mv.exports=ytr});var qv=s((yZr,hv)=>{"use strict";function btr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}hv.exports=btr});var bv=s((bZr,yv)=>{"use strict";var wtr=qv();yv.exports=wtr});var Ev=s((wZr,wv)=>{"use strict";var Etr=bv(),Ntr=Etr();function Atr(){return Ntr&&typeof Symbol.toStringTag=="symbol"}wv.exports=Atr});var Hi=s((EZr,Nv)=>{"use strict";var Str=Ev();Nv.exports=Str});var mu=s((NZr,Av)=>{"use strict";var Otr=Object.prototype.toString;Av.exports=Otr});var Ov=s((AZr,Sv)=>{"use strict";var Ttr=mu();function Itr(r){return Ttr.call(r)}Sv.exports=Itr});var Iv=s((SZr,Tv)=>{"use strict";var _tr=Object.prototype.hasOwnProperty;function Ltr(r,e){return r==null?!1:_tr.call(r,e)}Tv.exports=Ltr});var S=s((OZr,_v)=>{"use strict";var Ptr=Iv();_v.exports=Ptr});var Pv=s((TZr,Lv)=>{"use strict";var Rtr=typeof Symbol=="function"?Symbol:void 0;Lv.exports=Rtr});var du=s((IZr,Rv)=>{"use strict";var Ftr=Pv();Rv.exports=Ftr});var Bv=s((_Zr,Mv)=>{"use strict";var Fv=du(),Mtr=typeof Fv=="function"?Fv.toStringTag:"";Mv.exports=Mtr});var jv=s((LZr,kv)=>{"use strict";var Btr=S(),Wi=Bv(),hu=mu();function ktr(r){var e,t,i;if(r==null)return hu.call(r);t=r[Wi],e=Btr(r,Wi);try{r[Wi]=void 0}catch{return hu.call(r)}return i=hu.call(r),e?r[Wi]=t:delete r[Wi],i}kv.exports=ktr});var ir=s((PZr,Cv)=>{"use strict";var jtr=Hi(),Ctr=Ov(),Gtr=jv(),qu;jtr()?qu=Gtr:qu=Ctr;Cv.exports=qu});var yu=s((RZr,Gv)=>{"use strict";var Vtr=ir();function Utr(r){return Vtr(r)==="[object Arguments]"}Gv.exports=Utr});var Hv=s((FZr,Uv)=>{"use strict";var Htr=yu(),Vv;function Wtr(){return Htr(arguments)}Vv=Wtr();Uv.exports=Vv});var Dv=s((MZr,Wv)=>{"use strict";var Dtr=typeof Object.defineProperty=="function"?Object.defineProperty:null;Wv.exports=Dtr});var Xv=s((BZr,zv)=>{"use strict";var ztr=Dv();function Xtr(){try{return ztr({},"x",{}),!0}catch{return!1}}zv.exports=Xtr});var xv=s((kZr,Jv)=>{"use strict";var Jtr=Object.defineProperty;Jv.exports=Jtr});var bu=s((jZr,Yv)=>{"use strict";function xtr(r){return typeof r=="number"}Yv.exports=xtr});var wu=s((CZr,$v)=>{"use strict";function Ytr(r){return r[0]==="-"}function Zv(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Ztr(r,e,t){var i=!1,n=e-r.length;return n<0||(Ytr(r)&&(i=!0,r=r.substr(1)),r=t?r+Zv(n):Zv(n)+r,i&&(r="-"+r)),r}$v.exports=Ztr});var ec=s((GZr,rc)=>{"use strict";var $tr=bu(),Qv=wu(),Qtr=String.prototype.toLowerCase,Kv=String.prototype.toUpperCase;function Ktr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!$tr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Qv(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=Qv(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===Kv.call(r.specifier)?Kv.call(t):Qtr.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}rc.exports=Ktr});var ic=s((VZr,tc)=>{"use strict";function rir(r){return typeof r=="string"}tc.exports=rir});var sc=s((UZr,ac)=>{"use strict";var eir=bu(),tir=Math.abs,iir=String.prototype.toLowerCase,nc=String.prototype.toUpperCase,yt=String.prototype.replace,nir=/e\+(\d)$/,air=/e-(\d)$/,sir=/^(\d+)$/,uir=/^(\d+)e/,oir=/\.0$/,fir=/\.0*e/,vir=/(\..*[^0])0*e/;function cir(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!eir(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":tir(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=yt.call(t,vir,"$1e"),t=yt.call(t,fir,"e"),t=yt.call(t,oir,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=yt.call(t,nir,"e+0$1"),t=yt.call(t,air,"e-0$1"),r.alternate&&(t=yt.call(t,sir,"$1."),t=yt.call(t,uir,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===nc.call(r.specifier)?nc.call(t):iir.call(t),t}ac.exports=cir});var fc=s((HZr,oc)=>{"use strict";function uc(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function lir(r,e,t){var i=e-r.length;return i<0||(r=t?r+uc(i):uc(i)+r),r}oc.exports=lir});var cc=s((WZr,vc)=>{"use strict";var pir=ec(),gir=ic(),mir=sc(),dir=fc(),hir=wu(),qir=String.fromCharCode,zn=isNaN,yir=Array.isArray;function bir(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function wir(r){var e,t,i,n,a,u,o,v,f;if(!yir(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,v=0;v<r.length;v++)if(i=r[v],gir(i))u+=i;else{if(e=i.precision!==void 0,i=bir(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,zn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,zn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=pir(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!zn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=zn(a)?String(i.arg):qir(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=mir(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=hir(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=dir(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}vc.exports=wir});var pc=s((DZr,lc)=>{"use strict";var Eir=cc();lc.exports=Eir});var mc=s((zZr,gc)=>{"use strict";var Xn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Nir(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function Air(r){var e,t,i,n;for(t=[],n=0,i=Xn.exec(r);i;)e=r.slice(n,Xn.lastIndex-i[0].length),e.length&&t.push(e),t.push(Nir(i)),n=Xn.lastIndex,i=Xn.exec(r);return e=r.slice(n),e.length&&t.push(e),t}gc.exports=Air});var hc=s((XZr,dc)=>{"use strict";var Sir=mc();dc.exports=Sir});var yc=s((JZr,qc)=>{"use strict";function Oir(r){return typeof r=="string"}qc.exports=Oir});var Ec=s((xZr,wc)=>{"use strict";var Tir=pc(),Iir=hc(),_ir=yc();function bc(r){var e,t,i;if(!_ir(r))throw new TypeError(bc("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Iir(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Tir.apply(null,t)}wc.exports=bc});var y=s((YZr,Nc)=>{"use strict";var Lir=Ec();Nc.exports=Lir});var _c=s((ZZr,Ic)=>{"use strict";var Ac=y(),Ht=Object.prototype,Sc=Ht.toString,Oc=Ht.__defineGetter__,Tc=Ht.__defineSetter__,Pir=Ht.__lookupGetter__,Rir=Ht.__lookupSetter__;function Fir(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||Sc.call(r)==="[object Array]")throw new TypeError(Ac("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||Sc.call(t)==="[object Array]")throw new TypeError(Ac("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(Pir.call(r,e)||Rir.call(r,e)?(i=r.__proto__,r.__proto__=Ht,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Oc&&Oc.call(r,e,t.get),u&&Tc&&Tc.call(r,e,t.set),r}Ic.exports=Fir});var Be=s(($Zr,Lc)=>{"use strict";var Mir=Xv(),Bir=xv(),kir=_c(),Eu;Mir()?Eu=Bir:Eu=kir;Lc.exports=Eu});var Rc=s((QZr,Pc)=>{"use strict";var jir=Be();function Cir(r,e,t){jir(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}Pc.exports=Cir});var w=s((KZr,Fc)=>{"use strict";var Gir=Rc();Fc.exports=Gir});var Nu=s((r$r,Mc)=>{"use strict";function Vir(r){return typeof r=="string"}Mc.exports=Vir});var kc=s((e$r,Bc)=>{"use strict";var Uir=String.prototype.valueOf;Bc.exports=Uir});var Cc=s((t$r,jc)=>{"use strict";var Hir=kc();function Wir(r){try{return Hir.call(r),!0}catch{return!1}}jc.exports=Wir});var Au=s((i$r,Gc)=>{"use strict";var Dir=Hi(),zir=ir(),Xir=Cc(),Jir=Dir();function xir(r){return typeof r=="object"?r instanceof String?!0:Jir?Xir(r):zir(r)==="[object String]":!1}Gc.exports=xir});var Uc=s((n$r,Vc)=>{"use strict";var Yir=Nu(),Zir=Au();function $ir(r){return Yir(r)||Zir(r)}Vc.exports=$ir});var K=s((a$r,Wc)=>{"use strict";var Hc=w(),Su=Uc(),Qir=Nu(),Kir=Au();Hc(Su,"isPrimitive",Qir);Hc(Su,"isObject",Kir);Wc.exports=Su});var Ou=s((s$r,Dc)=>{"use strict";function rnr(r){return typeof r=="number"}Dc.exports=rnr});var Xc=s((u$r,zc)=>{"use strict";zc.exports=Number});var Jn=s((o$r,Jc)=>{"use strict";var enr=Xc();Jc.exports=enr});var Yc=s((f$r,xc)=>{"use strict";var tnr=Jn(),inr=tnr.prototype.toString;xc.exports=inr});var $c=s((v$r,Zc)=>{"use strict";var nnr=Yc();function anr(r){try{return nnr.call(r),!0}catch{return!1}}Zc.exports=anr});var Tu=s((c$r,Qc)=>{"use strict";var snr=Hi(),unr=ir(),onr=Jn(),fnr=$c(),vnr=snr();function cnr(r){return typeof r=="object"?r instanceof onr?!0:vnr?fnr(r):unr(r)==="[object Number]":!1}Qc.exports=cnr});var rl=s((l$r,Kc)=>{"use strict";var lnr=Ou(),pnr=Tu();function gnr(r){return lnr(r)||pnr(r)}Kc.exports=gnr});var k=s((p$r,tl)=>{"use strict";var el=w(),Iu=rl(),mnr=Ou(),dnr=Tu();el(Iu,"isPrimitive",mnr);el(Iu,"isObject",dnr);tl.exports=Iu});var nl=s((g$r,il)=>{"use strict";function hnr(r){return r!==r}il.exports=hnr});var E=s((m$r,al)=>{"use strict";var qnr=nl();al.exports=qnr});var _u=s((d$r,sl)=>{"use strict";var ynr=k().isPrimitive,bnr=E();function wnr(r){return ynr(r)&&bnr(r)}sl.exports=wnr});var Lu=s((h$r,ul)=>{"use strict";var Enr=k().isObject,Nnr=E();function Anr(r){return Enr(r)&&Nnr(r.valueOf())}ul.exports=Anr});var fl=s((q$r,ol)=>{"use strict";var Snr=_u(),Onr=Lu();function Tnr(r){return Snr(r)||Onr(r)}ol.exports=Tnr});var sr=s((y$r,cl)=>{"use strict";var vl=w(),Pu=fl(),Inr=_u(),_nr=Lu();vl(Pu,"isPrimitive",Inr);vl(Pu,"isObject",_nr);cl.exports=Pu});var _=s((b$r,ll)=>{"use strict";var Lnr=Number.POSITIVE_INFINITY;ll.exports=Lnr});var V=s((w$r,pl)=>{"use strict";var Pnr=Jn(),Rnr=Pnr.NEGATIVE_INFINITY;pl.exports=Rnr});var ml=s((E$r,gl)=>{"use strict";var Fnr=Math.floor;gl.exports=Fnr});var Q=s((N$r,dl)=>{"use strict";var Mnr=ml();dl.exports=Mnr});var ql=s((A$r,hl)=>{"use strict";var Bnr=Q();function knr(r){return Bnr(r)===r}hl.exports=knr});var Tr=s((S$r,yl)=>{"use strict";var jnr=ql();yl.exports=jnr});var Ru=s((O$r,bl)=>{"use strict";var Cnr=_(),Gnr=V(),Vnr=Tr();function Unr(r){return r<Cnr&&r>Gnr&&Vnr(r)}bl.exports=Unr});var Fu=s((T$r,wl)=>{"use strict";var Hnr=k().isPrimitive,Wnr=Ru();function Dnr(r){return Hnr(r)&&Wnr(r)}wl.exports=Dnr});var Mu=s((I$r,El)=>{"use strict";var znr=k().isObject,Xnr=Ru();function Jnr(r){return znr(r)&&Xnr(r.valueOf())}El.exports=Jnr});var Al=s((_$r,Nl)=>{"use strict";var xnr=Fu(),Ynr=Mu();function Znr(r){return xnr(r)||Ynr(r)}Nl.exports=Znr});var jr=s((L$r,Ol)=>{"use strict";var Sl=w(),Bu=Al(),$nr=Fu(),Qnr=Mu();Sl(Bu,"isPrimitive",$nr);Sl(Bu,"isObject",Qnr);Ol.exports=Bu});var ku=s((P$r,Tl)=>{"use strict";var Knr=Object.prototype.propertyIsEnumerable;Tl.exports=Knr});var Ll=s((R$r,_l)=>{"use strict";var rar=ku(),Il;function ear(){return!rar.call("beep","0")}Il=ear();_l.exports=Il});var Rl=s((F$r,Pl)=>{"use strict";var tar=K(),iar=sr().isPrimitive,nar=jr().isPrimitive,aar=ku(),sar=Ll();function uar(r,e){var t;return r==null?!1:(t=aar.call(r,e),!t&&sar&&tar(r)?(e=+e,!iar(e)&&nar(e)&&e>=0&&e<r.length):t)}Pl.exports=uar});var Di=s((M$r,Fl)=>{"use strict";var oar=Rl();Fl.exports=oar});var Bl=s((B$r,Ml)=>{"use strict";var far=ir(),ju;function car(r){return far(r)==="[object Array]"}Array.isArray?ju=Array.isArray:ju=car;Ml.exports=ju});var cr=s((k$r,kl)=>{"use strict";var lar=Bl();kl.exports=lar});var Wt=s((j$r,jl)=>{"use strict";var par=4294967295;jl.exports=par});var Gl=s((C$r,Cl)=>{"use strict";var gar=S(),mar=Di(),dar=cr(),har=Tr(),qar=Wt();function yar(r){return r!==null&&typeof r=="object"&&!dar(r)&&typeof r.length=="number"&&har(r.length)&&r.length>=0&&r.length<=qar&&gar(r,"callee")&&!mar(r,"callee")}Cl.exports=yar});var Gu=s((G$r,Vl)=>{"use strict";var bar=Hv(),war=yu(),Ear=Gl(),Cu;bar?Cu=war:Cu=Ear;Vl.exports=Cu});var Wl=s((V$r,Hl)=>{"use strict";var Nar=Gu(),Ul=Dn(),Aar=Array.prototype.slice;function Sar(r){return Nar(r)?Ul(Aar.call(r)):Ul(r)}Hl.exports=Sar});var zl=s((U$r,Dl)=>{"use strict";var Oar=cr(),Tar=y();function Iar(r){if(typeof r!="function")throw new TypeError(Tar("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!Oar(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}Dl.exports=Iar});var Jl=s((H$r,Xl)=>{"use strict";var _ar=zl();Xl.exports=_ar});var Yl=s((W$r,xl)=>{"use strict";function Lar(r){return r!==null&&typeof r=="object"}xl.exports=Lar});var Uu=s((D$r,Zl)=>{"use strict";var Par=w(),Rar=Jl(),Vu=Yl(),Far=Rar(Vu);Par(Vu,"isObjectLikeArray",Far);Zl.exports=Vu});var Ql=s((z$r,$l)=>{"use strict";function Mar(){}$l.exports=Mar});var C=s((X$r,Kl)=>{"use strict";var Bar=Ql();Kl.exports=Bar});var e4=s((J$r,r4)=>{"use strict";var kar=Di(),jar=C(),Car=kar(jar,"prototype");r4.exports=Car});var i4=s((x$r,t4)=>{"use strict";var Gar=Di(),Var={toString:null},Uar=!Gar(Var,"toString");t4.exports=Uar});var a4=s((Y$r,n4)=>{"use strict";var Har=9007199254740991;n4.exports=Har});var u4=s((Z$r,s4)=>{"use strict";var War=Tr(),Dar=a4();function zar(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&War(r.length)&&r.length>=0&&r.length<=Dar}s4.exports=zar});var Cr=s(($$r,o4)=>{"use strict";var Xar=u4();o4.exports=Xar});var l4=s((Q$r,c4)=>{"use strict";var f4=sr(),Jar=Cr(),xar=K().isPrimitive,Yar=jr().isPrimitive,v4=y();function Zar(r,e,t){var i,n;if(!Jar(r)&&!xar(r))throw new TypeError(v4("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!Yar(t))throw new TypeError(v4("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(f4(e)){for(;n<i;n++)if(f4(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}c4.exports=Zar});var xn=s((K$r,p4)=>{"use strict";var $ar=l4();p4.exports=$ar});var m4=s((rQr,g4)=>{"use strict";var Qar=/./;g4.exports=Qar});var Hu=s((eQr,d4)=>{"use strict";function Kar(r){return typeof r=="boolean"}d4.exports=Kar});var q4=s((tQr,h4)=>{"use strict";var r0r=Boolean;h4.exports=r0r});var b4=s((iQr,y4)=>{"use strict";var e0r=q4();y4.exports=e0r});var E4=s((nQr,w4)=>{"use strict";var t0r=Boolean.prototype.toString;w4.exports=t0r});var A4=s((aQr,N4)=>{"use strict";var i0r=E4();function n0r(r){try{return i0r.call(r),!0}catch{return!1}}N4.exports=n0r});var Wu=s((sQr,S4)=>{"use strict";var a0r=Hi(),s0r=ir(),u0r=b4(),o0r=A4(),f0r=a0r();function v0r(r){return typeof r=="object"?r instanceof u0r?!0:f0r?o0r(r):s0r(r)==="[object Boolean]":!1}S4.exports=v0r});var T4=s((uQr,O4)=>{"use strict";var c0r=Hu(),l0r=Wu();function p0r(r){return c0r(r)||l0r(r)}O4.exports=p0r});var or=s((oQr,_4)=>{"use strict";var I4=w(),Du=T4(),g0r=Hu(),m0r=Wu();I4(Du,"isPrimitive",g0r);I4(Du,"isObject",m0r);_4.exports=Du});var P4=s((fQr,L4)=>{"use strict";function d0r(){return new Function("return this;")()}L4.exports=d0r});var F4=s((vQr,R4)=>{"use strict";var h0r=typeof self=="object"?self:null;R4.exports=h0r});var B4=s((cQr,M4)=>{"use strict";var q0r=typeof window=="object"?window:null;M4.exports=q0r});var j4=s((lQr,k4)=>{"use strict";var y0r=typeof globalThis=="object"?globalThis:null;k4.exports=y0r});var H4=s((pQr,U4)=>{"use strict";var b0r=or().isPrimitive,w0r=y(),E0r=P4(),C4=F4(),G4=B4(),V4=j4();function N0r(r){if(arguments.length){if(!b0r(r))throw new TypeError(w0r("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return E0r()}if(V4)return V4;if(C4)return C4;if(G4)return G4;throw new Error("unexpected error. Unable to resolve global object.")}U4.exports=N0r});var z4=s((gQr,D4)=>{"use strict";var A0r=H4(),W4=A0r(),S0r=W4.document&&W4.document.childNodes;D4.exports=S0r});var J4=s((mQr,X4)=>{"use strict";var O0r=Int8Array;X4.exports=O0r});var Y4=s((dQr,x4)=>{"use strict";var T0r=m4(),I0r=z4(),_0r=J4();function L0r(){return typeof T0r=="function"||typeof _0r=="object"||typeof I0r=="function"}x4.exports=L0r});var zu=s((hQr,Z4)=>{"use strict";function P0r(){return/^\s*function\s*([^(]*)/i}Z4.exports=P0r});var Q4=s((qQr,$4)=>{"use strict";var R0r=zu(),F0r=R0r();$4.exports=F0r});var Xu=s((yQr,r6)=>{"use strict";var M0r=w(),K4=zu(),B0r=Q4();M0r(K4,"REGEXP",B0r);r6.exports=K4});var t6=s((bQr,e6)=>{"use strict";var k0r=Uu();function j0r(r){return k0r(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}e6.exports=j0r});var bt=s((wQr,i6)=>{"use strict";var C0r=t6();i6.exports=C0r});var a6=s((EQr,n6)=>{"use strict";var G0r=ir(),V0r=Xu().REGEXP,U0r=bt();function H0r(r){var e,t,i;if(t=G0r(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=V0r.exec(i.toString()),e)return e[1]}return U0r(r)?"Buffer":t}n6.exports=H0r});var ke=s((NQr,s6)=>{"use strict";var W0r=a6();s6.exports=W0r});var o6=s((AQr,u6)=>{"use strict";var D0r=ke();function z0r(r){var e;return r===null?"null":(e=typeof r,e==="object"?D0r(r).toLowerCase():e)}u6.exports=z0r});var v6=s((SQr,f6)=>{"use strict";var X0r=ke();function J0r(r){return X0r(r).toLowerCase()}f6.exports=J0r});var Yn=s((OQr,c6)=>{"use strict";var x0r=Y4(),Y0r=o6(),Z0r=v6(),$0r=x0r()?Z0r:Y0r;c6.exports=$0r});var Ju=s((TQr,l6)=>{"use strict";function Q0r(r){return r.constructor&&r.constructor.prototype===r}l6.exports=Q0r});var p6=s((IQr,K0r)=>{K0r.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var m6=s((_Qr,g6)=>{"use strict";var rsr=typeof window>"u"?void 0:window;g6.exports=rsr});var y6=s((LQr,q6)=>{"use strict";var esr=S(),tsr=xn(),d6=Yn(),isr=Ju(),nsr=p6(),Dt=m6(),h6;function asr(){var r;if(d6(Dt)==="undefined")return!1;for(r in Dt)try{tsr(nsr,r)===-1&&esr(Dt,r)&&Dt[r]!==null&&d6(Dt[r])==="object"&&isr(Dt[r])}catch{return!0}return!1}h6=asr();q6.exports=h6});var w6=s((PQr,b6)=>{"use strict";var ssr=typeof window<"u";b6.exports=ssr});var A6=s((RQr,N6)=>{"use strict";var usr=y6(),E6=Ju(),osr=w6();function fsr(r){if(osr===!1&&!usr)return E6(r);try{return E6(r)}catch{return!1}}N6.exports=fsr});var S6=s((FQr,vsr)=>{vsr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var I6=s((MQr,T6)=>{"use strict";var csr=Uu(),xu=S(),lsr=Gu(),psr=e4(),gsr=i4(),msr=A6(),O6=S6();function dsr(r){var e,t,i,n,a,u,o;if(n=[],lsr(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!xu(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!csr(r))return n;t=psr&&i}for(a in r)!(t&&a==="prototype")&&xu(r,a)&&n.push(String(a));if(gsr)for(e=msr(r),o=0;o<O6.length;o++)u=O6[o],!(e&&u==="constructor")&&xu(r,u)&&n.push(String(u));return n}T6.exports=dsr});var L6=s((BQr,_6)=>{"use strict";var hsr=gv(),qsr=dv(),ysr=Dn(),bsr=Wl(),wsr=I6(),Zn;qsr?hsr()?Zn=bsr:Zn=ysr:Zn=wsr;_6.exports=Zn});var zt=s((kQr,P6)=>{"use strict";var Esr=L6();P6.exports=Esr});var F6=s((jQr,R6)=>{"use strict";var Nsr=zt(),Asr=S(),Ssr=y();function Osr(r,e){var t,i,n;for(t=Nsr(r),n=0;n<t.length;n++){if(i=t[n],Asr(e,i))throw new Error(Ssr("unexpected error. Property already exists on destination object. Property: %s.",i));e[i]=r[i]}return e}R6.exports=Osr});var B6=s((CQr,M6)=>{"use strict";var Tsr=F6();M6.exports=Tsr});var j6=s((GQr,k6)=>{"use strict";var Isr=cr();function _sr(r){return typeof r=="object"&&r!==null&&!Isr(r)}k6.exports=_sr});var $n=s((VQr,C6)=>{"use strict";var Lsr=j6();C6.exports=Lsr});var V6=s((UQr,G6)=>{"use strict";var Psr=Yn();function Rsr(r){return Psr(r)==="function"}G6.exports=Rsr});var L=s((HQr,U6)=>{"use strict";var Fsr=V6();U6.exports=Fsr});var W6=s((WQr,H6)=>{"use strict";var Msr=Object;H6.exports=Msr});var Xt=s((DQr,D6)=>{"use strict";var Bsr=W6();D6.exports=Bsr});var X6=s((zQr,z6)=>{"use strict";var ksr=Object.getPrototypeOf;z6.exports=ksr});var x6=s((XQr,J6)=>{"use strict";function jsr(r){return r.__proto__}J6.exports=jsr});var Z6=s((JQr,Y6)=>{"use strict";var Csr=ir(),Gsr=x6();function Vsr(r){var e=Gsr(r);return e||e===null?e:Csr(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}Y6.exports=Vsr});var Q6=s((xQr,$6)=>{"use strict";var Usr=L(),Hsr=X6(),Wsr=Z6(),Yu;Usr(Object.getPrototypeOf)?Yu=Hsr:Yu=Wsr;$6.exports=Yu});var r8=s((YQr,K6)=>{"use strict";var Dsr=Xt(),zsr=Q6();function Xsr(r){return r==null?null:(r=Dsr(r),zsr(r))}K6.exports=Xsr});var wt=s((ZQr,e8)=>{"use strict";var Jsr=r8();e8.exports=Jsr});var n8=s(($Qr,i8)=>{"use strict";var xsr=$n(),t8=L(),Ysr=wt(),Qn=S(),Zsr=ir(),$sr=Object.prototype;function Qsr(r){var e;for(e in r)if(!Qn(r,e))return!1;return!0}function Ksr(r){var e;return xsr(r)?(e=Ysr(r),e?!Qn(r,"constructor")&&Qn(e,"constructor")&&t8(e.constructor)&&Zsr(e.constructor)==="[object Function]"&&Qn(e,"isPrototypeOf")&&t8(e.isPrototypeOf)&&(e===$sr||Qsr(r)):!0):!1}i8.exports=Ksr});var I=s((QQr,a8)=>{"use strict";var rur=n8();a8.exports=rur});var u8=s((KQr,s8)=>{"use strict";var eur=Be();function tur(r,e,t){eur(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}s8.exports=tur});var f8=s((rKr,o8)=>{"use strict";var iur=u8();o8.exports=iur});var c8=s((eKr,v8)=>{"use strict";var nur=_(),aur=V();function sur(r){return r===nur||r===aur}v8.exports=sur});var Pr=s((tKr,l8)=>{"use strict";var uur=c8();l8.exports=uur});var g8=s((iKr,p8)=>{"use strict";function our(r){return Math.abs(r)}p8.exports=our});var J=s((nKr,m8)=>{"use strict";var fur=g8();m8.exports=fur});var h8=s((aKr,d8)=>{"use strict";var vur=ir(),cur=typeof Uint32Array=="function";function lur(r){return cur&&r instanceof Uint32Array||vur(r)==="[object Uint32Array]"}d8.exports=lur});var $r=s((sKr,q8)=>{"use strict";var pur=h8();q8.exports=pur});var b8=s((uKr,y8)=>{"use strict";var gur=typeof Uint32Array=="function"?Uint32Array:null;y8.exports=gur});var N8=s((oKr,E8)=>{"use strict";var mur=$r(),Zu=Wt(),w8=b8();function dur(){var r,e;if(typeof w8!="function")return!1;try{e=[1,3.14,-3.14,Zu+1,Zu+2],e=new w8(e),r=mur(e)&&e[0]===1&&e[1]===3&&e[2]===Zu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}E8.exports=dur});var S8=s((fKr,A8)=>{"use strict";var hur=N8();A8.exports=hur});var T8=s((vKr,O8)=>{"use strict";var qur=typeof Uint32Array=="function"?Uint32Array:void 0;O8.exports=qur});var _8=s((cKr,I8)=>{"use strict";function yur(){throw new Error("not implemented")}I8.exports=yur});var lr=s((lKr,L8)=>{"use strict";var bur=S8(),wur=T8(),Eur=_8(),$u;bur()?$u=wur:$u=Eur;L8.exports=$u});var R8=s((pKr,P8)=>{"use strict";var Nur=ir(),Aur=typeof Float64Array=="function";function Sur(r){return Aur&&r instanceof Float64Array||Nur(r)==="[object Float64Array]"}P8.exports=Sur});var M8=s((gKr,F8)=>{"use strict";var Our=R8();F8.exports=Our});var k8=s((mKr,B8)=>{"use strict";var Tur=typeof Float64Array=="function"?Float64Array:null;B8.exports=Tur});var G8=s((dKr,C8)=>{"use strict";var Iur=M8(),j8=k8();function _ur(){var r,e;if(typeof j8!="function")return!1;try{e=new j8([1,3.14,-3.14,NaN]),r=Iur(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}C8.exports=_ur});var Qu=s((hKr,V8)=>{"use strict";var Lur=G8();V8.exports=Lur});var H8=s((qKr,U8)=>{"use strict";var Pur=typeof Float64Array=="function"?Float64Array:void 0;U8.exports=Pur});var D8=s((yKr,W8)=>{"use strict";function Rur(){throw new Error("not implemented")}W8.exports=Rur});var mr=s((bKr,z8)=>{"use strict";var Fur=Qu(),Mur=H8(),Bur=D8(),Ku;Fur()?Ku=Mur:Ku=Bur;z8.exports=Ku});var J8=s((wKr,X8)=>{"use strict";var kur=ir(),jur=typeof Uint8Array=="function";function Cur(r){return jur&&r instanceof Uint8Array||kur(r)==="[object Uint8Array]"}X8.exports=Cur});var Y8=s((EKr,x8)=>{"use strict";var Gur=J8();x8.exports=Gur});var $8=s((NKr,Z8)=>{"use strict";var Vur=255;Z8.exports=Vur});var K8=s((AKr,Q8)=>{"use strict";var Uur=typeof Uint8Array=="function"?Uint8Array:null;Q8.exports=Uur});var t5=s((SKr,e5)=>{"use strict";var Hur=Y8(),ro=$8(),r5=K8();function Wur(){var r,e;if(typeof r5!="function")return!1;try{e=[1,3.14,-3.14,ro+1,ro+2],e=new r5(e),r=Hur(e)&&e[0]===1&&e[1]===3&&e[2]===ro-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}e5.exports=Wur});var n5=s((OKr,i5)=>{"use strict";var Dur=t5();i5.exports=Dur});var s5=s((TKr,a5)=>{"use strict";var zur=typeof Uint8Array=="function"?Uint8Array:void 0;a5.exports=zur});var o5=s((IKr,u5)=>{"use strict";function Xur(){throw new Error("not implemented")}u5.exports=Xur});var Jt=s((_Kr,f5)=>{"use strict";var Jur=n5(),xur=s5(),Yur=o5(),eo;Jur()?eo=xur:eo=Yur;f5.exports=eo});var c5=s((LKr,v5)=>{"use strict";var Zur=ir(),$ur=typeof Uint16Array=="function";function Qur(r){return $ur&&r instanceof Uint16Array||Zur(r)==="[object Uint16Array]"}v5.exports=Qur});var p5=s((PKr,l5)=>{"use strict";var Kur=c5();l5.exports=Kur});var m5=s((RKr,g5)=>{"use strict";var ror=65535;g5.exports=ror});var h5=s((FKr,d5)=>{"use strict";var eor=typeof Uint16Array=="function"?Uint16Array:null;d5.exports=eor});var b5=s((MKr,y5)=>{"use strict";var tor=p5(),to=m5(),q5=h5();function ior(){var r,e;if(typeof q5!="function")return!1;try{e=[1,3.14,-3.14,to+1,to+2],e=new q5(e),r=tor(e)&&e[0]===1&&e[1]===3&&e[2]===to-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}y5.exports=ior});var E5=s((BKr,w5)=>{"use strict";var nor=b5();w5.exports=nor});var A5=s((kKr,N5)=>{"use strict";var aor=typeof Uint16Array=="function"?Uint16Array:void 0;N5.exports=aor});var O5=s((jKr,S5)=>{"use strict";function sor(){throw new Error("not implemented")}S5.exports=sor});var xt=s((CKr,T5)=>{"use strict";var uor=E5(),oor=A5(),vor=O5(),io;uor()?io=oor:io=vor;T5.exports=io});var _5=s((GKr,I5)=>{"use strict";var cor=Jt(),lor=xt(),por={uint16:lor,uint8:cor};I5.exports=por});var F5=s((VKr,R5)=>{"use strict";var L5=_5(),P5;function gor(){var r,e;return r=new L5.uint16(1),r[0]=4660,e=new L5.uint8(r.buffer),e[0]===52}P5=gor();R5.exports=P5});var Et=s((UKr,M5)=>{"use strict";var mor=F5();M5.exports=mor});var k5=s((HKr,B5)=>{"use strict";var dor=Et(),no;dor===!0?no=1:no=0;B5.exports=no});var G5=s((WKr,C5)=>{"use strict";var hor=lr(),qor=mr(),yor=k5(),j5=new qor(1),bor=new hor(j5.buffer);function wor(r){return j5[0]=r,bor[yor]}C5.exports=wor});var tr=s((DKr,V5)=>{"use strict";var Eor=G5();V5.exports=Eor});var H5=s((zKr,U5)=>{"use strict";var Nor=Et(),ao;Nor===!0?ao=1:ao=0;U5.exports=ao});var D5=s((XKr,W5)=>{"use strict";var Aor=lr(),Sor=mr(),Oor=H5(),so=new Sor(1),Tor=new Aor(so.buffer);function Ior(r,e){return so[0]=r,Tor[Oor]=e>>>0,so[0]}W5.exports=Ior});var Qr=s((JKr,z5)=>{"use strict";var _or=D5();z5.exports=_or});var zr=s((xKr,X5)=>{"use strict";var Lor=1023;X5.exports=Lor});var x5=s((YKr,J5)=>{"use strict";function Por(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}J5.exports=Por});var Z5=s((ZKr,Y5)=>{"use strict";function Ror(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}Y5.exports=Ror});var rp=s(($Kr,K5)=>{"use strict";var $5=tr(),For=Qr(),Mor=E(),Bor=zr(),kor=V(),jor=x5(),Cor=Z5(),Kn=.6931471803691238,ra=19082149292705877e-26,Gor=0x40000000000000,Vor=.3333333333333333,Q5=1048575,Uor=2146435072,Hor=1048576,Wor=1072693248;function Dor(r){var e,t,i,n,a,u,o,v,f,c,l,p;return r===0?kor:Mor(r)||r<0?NaN:(t=$5(r),a=0,t<Hor&&(a-=54,r*=Gor,t=$5(r)),t>=Uor?r+r:(a+=(t>>20)-Bor|0,t&=Q5,v=t+614244&1048576|0,r=For(r,t|v^Wor),a+=v>>20|0,o=r-1,(Q5&2+t)<3?o===0?a===0?0:a*Kn+a*ra:(u=o*o*(.5-Vor*o),a===0?o-u:a*Kn-(u-a*ra-o)):(c=o/(2+o),p=c*c,v=t-398458|0,l=p*p,f=440401-t|0,n=l*jor(l),i=p*Cor(l),v|=f,u=i+n,v>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*Kn-(e-(c*(e+u)+a*ra)-o)):a===0?o-c*(o-u):a*Kn-(c*(o-u)-a*ra-o))))}K5.exports=Dor});var P=s((QKr,ep)=>{"use strict";var zor=rp();ep.exports=zor});var ip=s((KKr,tp)=>{"use strict";var Xor=Math.ceil;tp.exports=Xor});var zi=s((rre,np)=>{"use strict";var Jor=ip();np.exports=Jor});var sp=s((ere,ap)=>{"use strict";var xor=Q(),Yor=zi();function Zor(r){return r<0?Yor(r):xor(r)}ap.exports=Zor});var ea=s((tre,up)=>{"use strict";var $or=sp();up.exports=$or});var fp=s((ire,op)=>{"use strict";function Qor(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}op.exports=Qor});var cp=s((nre,vp)=>{"use strict";function Kor(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}vp.exports=Kor});var pp=s((are,lp)=>{"use strict";var r2r=fp(),e2r=cp();function t2r(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*r2r(a),i+=n*n*e2r(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}lp.exports=t2r});var uo=s((sre,gp)=>{"use strict";var i2r=pp();gp.exports=i2r});var hp=s((ure,dp)=>{"use strict";var mp=-.16666666666666632,n2r=.00833333333332249,a2r=-.0001984126982985795,s2r=27557313707070068e-22,u2r=-25050760253406863e-24,o2r=158969099521155e-24;function f2r(r,e){var t,i,n,a;return a=r*r,n=a*a,t=n2r+a*(a2r+a*s2r)+a*n*(u2r+a*o2r),i=a*r,e===0?r+i*(mp+a*t):r-(a*(.5*e-i*t)-e-i*mp)}dp.exports=f2r});var oo=s((ore,qp)=>{"use strict";var v2r=hp();qp.exports=v2r});var Xr=s((fre,yp)=>{"use strict";var c2r=2147483647;yp.exports=c2r});var Xi=s((vre,bp)=>{"use strict";var l2r=2146435072;bp.exports=l2r});var ta=s((cre,wp)=>{"use strict";var p2r=1048575;wp.exports=p2r});var Np=s((lre,Ep)=>{"use strict";var g2r=Et(),fo;g2r===!0?fo=0:fo=1;Ep.exports=fo});var Op=s((pre,Sp)=>{"use strict";var m2r=lr(),d2r=mr(),h2r=Np(),Ap=new d2r(1),q2r=new m2r(Ap.buffer);function y2r(r){return Ap[0]=r,q2r[h2r]}Sp.exports=y2r});var Ip=s((gre,Tp)=>{"use strict";var b2r=Op();Tp.exports=b2r});var Pp=s((mre,Lp)=>{"use strict";var w2r=Et(),_p,vo,co;w2r===!0?(vo=1,co=0):(vo=0,co=1);_p={HIGH:vo,LOW:co};Lp.exports=_p});var kp=s((dre,Bp)=>{"use strict";var E2r=lr(),N2r=mr(),Fp=Pp(),Mp=new N2r(1),Rp=new E2r(Mp.buffer),A2r=Fp.HIGH,S2r=Fp.LOW;function O2r(r,e){return Rp[A2r]=r,Rp[S2r]=e,Mp[0]}Bp.exports=O2r});var Yt=s((hre,jp)=>{"use strict";var T2r=kp();jp.exports=T2r});var lo=s((qre,Cp)=>{"use strict";var I2r=1023;Cp.exports=I2r});var Vp=s((yre,Gp)=>{"use strict";var _2r=-1023;Gp.exports=_2r});var po=s((bre,Up)=>{"use strict";var L2r=-1074;Up.exports=L2r});var go=s((wre,Hp)=>{"use strict";var P2r=2147483648;Hp.exports=P2r});var zp=s((Ere,Dp)=>{"use strict";var R2r=Et(),Wp,mo,ho;R2r===!0?(mo=1,ho=0):(mo=0,ho=1);Wp={HIGH:mo,LOW:ho};Dp.exports=Wp});var qo=s((Nre,Yp)=>{"use strict";var F2r=lr(),M2r=mr(),Jp=zp(),xp=new M2r(1),Xp=new F2r(xp.buffer),B2r=Jp.HIGH,k2r=Jp.LOW;function j2r(r,e,t,i){return xp[0]=r,e[i]=Xp[B2r],e[i+t]=Xp[k2r],e}Yp.exports=j2r});var $p=s((Are,Zp)=>{"use strict";var C2r=qo();function G2r(r){return C2r(r,[0>>>0,0>>>0],1,0)}Zp.exports=G2r});var Zt=s((Sre,Kp)=>{"use strict";var V2r=w(),Qp=$p(),U2r=qo();V2r(Qp,"assign",U2r);Kp.exports=Qp});var e7=s((Ore,r7)=>{"use strict";var H2r=go(),W2r=Xr(),D2r=Zt(),z2r=tr(),X2r=Yt(),yo=[0,0];function J2r(r,e){var t,i;return D2r.assign(r,yo,1,0),t=yo[0],t&=W2r,i=z2r(e),i&=H2r,t|=i,X2r(t,yo[1])}r7.exports=J2r});var ia=s((Tre,t7)=>{"use strict";var x2r=e7();t7.exports=x2r});var bo=s((Ire,i7)=>{"use strict";var Y2r=22250738585072014e-324;i7.exports=Y2r});var wo=s((_re,n7)=>{"use strict";var Z2r=bo(),$2r=Pr(),Q2r=E(),K2r=J(),r1r=4503599627370496;function e1r(r,e,t,i){return Q2r(r)||$2r(r)?(e[i]=r,e[i+t]=0,e):r!==0&&K2r(r)<Z2r?(e[i]=r*r1r,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}n7.exports=e1r});var s7=s((Lre,a7)=>{"use strict";var t1r=wo();function i1r(r){return t1r(r,[0,0],1,0)}a7.exports=i1r});var f7=s((Pre,o7)=>{"use strict";var n1r=w(),u7=s7(),a1r=wo();n1r(u7,"assign",a1r);o7.exports=u7});var c7=s((Rre,v7)=>{"use strict";var s1r=tr(),u1r=Xi(),o1r=zr();function f1r(r){var e=s1r(r);return e=(e&u1r)>>>20,e-o1r|0}v7.exports=f1r});var p7=s((Fre,l7)=>{"use strict";var v1r=c7();l7.exports=v1r});var m7=s((Mre,g7)=>{"use strict";var c1r=_(),l1r=V(),p1r=zr(),g1r=lo(),m1r=Vp(),d1r=po(),h1r=E(),q1r=Pr(),y1r=ia(),b1r=f7().assign,w1r=p7(),E1r=Zt(),N1r=Yt(),A1r=2220446049250313e-31,S1r=2148532223>>>0,Eo=[0,0],No=[0,0];function O1r(r,e){var t,i;return e===0||r===0||h1r(r)||q1r(r)?r:(b1r(r,Eo,1,0),r=Eo[0],e+=Eo[1],e+=w1r(r),e<d1r?y1r(0,r):e>g1r?r<0?l1r:c1r:(e<=m1r?(e+=52,i=A1r):i=1,E1r.assign(r,No,1,0),t=No[0],t&=S1r,t|=e+p1r<<20,i*N1r(t,No[1])))}g7.exports=O1r});var na=s((Bre,d7)=>{"use strict";var T1r=m7();d7.exports=T1r});var q7=s((kre,h7)=>{"use strict";function I1r(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}h7.exports=I1r});var Ao=s((jre,y7)=>{"use strict";var _1r=q7();y7.exports=_1r});var w7=s((Cre,b7)=>{"use strict";var L1r=Ao();function P1r(r){return L1r(0,r)}b7.exports=P1r});var So=s((Gre,E7)=>{"use strict";var R1r=w7();E7.exports=R1r});var T7=s((Vre,O7)=>{"use strict";var F1r=Q(),aa=na(),oa=So(),A7=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],M1r=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Oo=16777216,To=5960464477539063e-23,sa=oa(20),N7=oa(20),ua=oa(20),fr=oa(20);function S7(r,e,t,i,n,a,u,o,v){var f,c,l,p,m,h,d,g,q;for(p=a,q=i[t],g=t,m=0;g>0;m++)c=To*q|0,fr[m]=q-Oo*c|0,q=i[g-1]+c,g-=1;if(q=aa(q,n),q-=8*F1r(q*.125),d=q|0,q-=d,l=0,n>0?(m=fr[t-1]>>24-n,d+=m,fr[t-1]-=m<<24-n,l=fr[t-1]>>23-n):n===0?l=fr[t-1]>>23:q>=.5&&(l=2),l>0){for(d+=1,f=0,m=0;m<t;m++)g=fr[m],f===0?g!==0&&(f=1,fr[m]=16777216-g):fr[m]=16777215-g;if(n>0)switch(n){case 1:fr[t-1]&=8388607;break;case 2:fr[t-1]&=4194303;break}l===2&&(q=1-q,f!==0&&(q-=aa(1,n)))}if(q===0){for(g=0,m=t-1;m>=a;m--)g|=fr[m];if(g===0){for(h=1;fr[a-h]===0;h++);for(m=t+1;m<=t+h;m++){for(v[o+m]=A7[u+m],c=0,g=0;g<=o;g++)c+=r[g]*v[o+(m-g)];i[m]=c}return t+=h,S7(r,e,t,i,n,a,u,o,v)}}if(q===0)for(t-=1,n-=24;fr[t]===0;)t-=1,n-=24;else q=aa(q,-n),q>=Oo?(c=To*q|0,fr[t]=q-Oo*c|0,t+=1,n+=24,fr[t]=c):fr[t]=q|0;for(c=aa(1,n),m=t;m>=0;m--)i[m]=c*fr[m],c*=To;for(m=t;m>=0;m--){for(c=0,h=0;h<=p&&h<=t-m;h++)c+=M1r[h]*i[m+h];ua[t-m]=c}for(c=0,m=t;m>=0;m--)c+=ua[m];for(l===0?e[0]=c:e[0]=-c,c=ua[0]-c,m=1;m<=t;m++)c+=ua[m];return l===0?e[1]=c:e[1]=-c,d&7}function B1r(r,e,t,i){var n,a,u,o,v,f,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),f=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?sa[c]=0:sa[c]=A7[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*sa[o+(c-l)];N7[c]=n}return v=a,S7(r,e,v,N7,f,a,u,o,sa)}O7.exports=B1r});var _7=s((Ure,I7)=>{"use strict";var k1r=Math.round;I7.exports=k1r});var Io=s((Hre,L7)=>{"use strict";var j1r=_7();L7.exports=j1r});var M7=s((Wre,F7)=>{"use strict";var C1r=Io(),P7=tr(),G1r=.6366197723675814,V1r=1.5707963267341256,U1r=6077100506506192e-26,H1r=6077100506303966e-26,W1r=20222662487959506e-37,D1r=20222662487111665e-37,z1r=84784276603689e-45,R7=2047;function X1r(r,e,t){var i,n,a,u,o,v,f;return n=C1r(r*G1r),u=r-n*V1r,o=n*U1r,f=e>>20|0,t[0]=u-o,i=P7(t[0]),v=f-(i>>20&R7),v>16&&(a=u,o=n*H1r,u=a-o,o=n*W1r-(a-u-o),t[0]=u-o,i=P7(t[0]),v=f-(i>>20&R7),v>49&&(a=u,o=n*D1r,u=a-o,o=n*z1r-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}F7.exports=X1r});var k7=s((Dre,B7)=>{"use strict";var J1r=Xr(),x1r=Xi(),Y1r=ta(),Z1r=tr(),$1r=Ip(),Q1r=Yt(),K1r=T7(),fa=M7(),r3r=0,e3r=16777216,je=1.5707963267341256,Nt=6077100506506192e-26,va=2*Nt,ca=3*Nt,la=4*Nt,t3r=598523,i3r=1072243195,n3r=1073928572,a3r=1074752122,s3r=1074977148,u3r=1075183036,o3r=1075388923,f3r=1075594811,v3r=1094263291,Ji=[0,0,0],xi=[0,0];function c3r(r,e){var t,i,n,a,u,o,v,f;if(n=Z1r(r),a=n&J1r|0,a<=i3r)return e[0]=r,e[1]=0,0;if(a<=a3r)return(a&Y1r)===t3r?fa(r,a,e):a<=n3r?r>0?(f=r-je,e[0]=f-Nt,e[1]=f-e[0]-Nt,1):(f=r+je,e[0]=f+Nt,e[1]=f-e[0]+Nt,-1):r>0?(f=r-2*je,e[0]=f-va,e[1]=f-e[0]-va,2):(f=r+2*je,e[0]=f+va,e[1]=f-e[0]+va,-2);if(a<=f3r)return a<=u3r?a===s3r?fa(r,a,e):r>0?(f=r-3*je,e[0]=f-ca,e[1]=f-e[0]-ca,3):(f=r+3*je,e[0]=f+ca,e[1]=f-e[0]+ca,-3):a===o3r?fa(r,a,e):r>0?(f=r-4*je,e[0]=f-la,e[1]=f-e[0]-la,4):(f=r+4*je,e[0]=f+la,e[1]=f-e[0]+la,-4);if(a<v3r)return fa(r,a,e);if(a>=x1r)return e[0]=NaN,e[1]=NaN,0;for(t=$1r(r),i=(a>>20)-1046,f=Q1r(a-(i<<20|0),t),o=0;o<2;o++)Ji[o]=f|0,f=(f-Ji[o])*e3r;for(Ji[2]=f,u=3;Ji[u-1]===r3r;)u-=1;return v=K1r(Ji,xi,i,u,1),r<0?(e[0]=-xi[0],e[1]=-xi[1],-v):(e[0]=xi[0],e[1]=xi[1],v)}B7.exports=c3r});var Yi=s((zre,j7)=>{"use strict";var l3r=k7();j7.exports=l3r});var V7=s((Xre,G7)=>{"use strict";var p3r=tr(),_o=uo(),C7=oo(),g3r=Yi(),Kr=[0,0],m3r=2147483647,d3r=1072243195,h3r=1044381696,q3r=2146435072;function y3r(r){var e,t;if(e=p3r(r),e&=m3r,e<=d3r)return e<h3r?1:_o(r,0);if(e>=q3r)return NaN;switch(t=g3r(r,Kr),t&3){case 0:return _o(Kr[0],Kr[1]);case 1:return-C7(Kr[0],Kr[1]);case 2:return-_o(Kr[0],Kr[1]);default:return C7(Kr[0],Kr[1])}}G7.exports=y3r});var At=s((Jre,U7)=>{"use strict";var b3r=V7();U7.exports=b3r});var D7=s((xre,W7)=>{"use strict";var w3r=Xr(),E3r=Xi(),N3r=tr(),H7=uo(),Lo=oo(),A3r=Yi(),S3r=1072243195,O3r=1045430272,re=[0,0];function T3r(r){var e,t;if(e=N3r(r),e&=w3r,e<=S3r)return e<O3r?r:Lo(r,0);if(e>=E3r)return NaN;switch(t=A3r(r,re),t&3){case 0:return Lo(re[0],re[1]);case 1:return H7(re[0],re[1]);case 2:return-Lo(re[0],re[1]);default:return-H7(re[0],re[1])}}W7.exports=T3r});var St=s((Yre,z7)=>{"use strict";var I3r=D7();z7.exports=I3r});var Ir=s((Zre,X7)=>{"use strict";var _3r=3.141592653589793;X7.exports=_3r});var Y7=s(($re,x7)=>{"use strict";var L3r=E(),P3r=Pr(),J7=At(),Po=St(),R3r=J(),Zi=ia(),$i=Ir();function F3r(r){var e,t;return L3r(r)?NaN:P3r(r)?NaN:(t=r%2,e=R3r(t),e===0||e===1?Zi(0,t):e<.25?Po($i*t):e<.75?(e=.5-e,Zi(J7($i*e),t)):e<1.25?(t=Zi(1,t)-t,Po($i*t)):e<1.75?(e-=1.5,-Zi(J7($i*e),t)):(t-=Zi(2,t),Po($i*t)))}x7.exports=F3r});var Qi=s((Qre,Z7)=>{"use strict";var M3r=Y7();Z7.exports=M3r});var Q7=s((Kre,$7)=>{"use strict";function B3r(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}$7.exports=B3r});var r9=s((ree,K7)=>{"use strict";function k3r(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}K7.exports=k3r});var t9=s((eee,e9)=>{"use strict";function j3r(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}e9.exports=j3r});var n9=s((tee,i9)=>{"use strict";function C3r(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}i9.exports=C3r});var s9=s((iee,a9)=>{"use strict";function G3r(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}a9.exports=G3r});var o9=s((nee,u9)=>{"use strict";function V3r(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}u9.exports=V3r});var v9=s((aee,f9)=>{"use strict";function U3r(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}f9.exports=U3r});var l9=s((see,c9)=>{"use strict";function H3r(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}c9.exports=H3r});var g9=s((uee,p9)=>{"use strict";function W3r(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}p9.exports=W3r});var d9=s((oee,m9)=>{"use strict";function D3r(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}m9.exports=D3r});var y9=s((fee,q9)=>{"use strict";var z3r=E(),X3r=Pr(),J3r=J(),$t=P(),x3r=ea(),Y3r=Qi(),Z3r=Ir(),Ro=_(),$3r=Q7(),Q3r=r9(),K3r=t9(),rfr=n9(),efr=s9(),tfr=o9(),ifr=v9(),nfr=l9(),afr=g9(),sfr=d9(),ufr=.07721566490153287,ofr=.3224670334241136,ffr=1,vfr=-.07721566490153287,cfr=.48383612272381005,lfr=-.1475877229945939,pfr=.06462494023913339,gfr=-.07721566490153287,mfr=1,dfr=.4189385332046727,pa=1.4616321449683622,hfr=4503599627370496,qfr=0x400000000000000,yfr=8470329472543003e-37,h9=1.4616321449683622,bfr=-.12148629053584961,wfr=-3638676997039505e-33;function Efr(r){var e,t,i,n,a,u,o,v,f,c,l,p,m;if(z3r(r)||X3r(r))return r;if(r===0)return Ro;if(r<0?(e=!0,r=-r):e=!1,r<yfr)return-$t(r);if(e){if(r>=hfr||(f=Y3r(r),f===0))return Ro;t=$t(Z3r/J3r(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-$t(r),r>=pa-1+.27?(l=1-r,i=0):r>=pa-1-.27?(l=r-(h9-1),i=1):(l=r,i=2)):(m=0,r>=pa+.27?(l=2-r,i=0):r>=pa-.27?(l=r-h9,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=ufr+p*$3r(p),a=p*(ofr+p*Q3r(p)),o=l*u+a,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=cfr+c*efr(c),a=lfr+c*tfr(c),n=pfr+c*ifr(c),o=p*u-(wfr-c*(a+l*n)),m+=bfr+o;break;case 2:u=l*(gfr+l*nfr(l)),a=mfr+l*afr(l),m+=-.5*l+u/a;break}else if(r<8)switch(i=x3r(r),l=r-i,o=l*(vfr+l*rfr(l)),v=ffr+l*K3r(l),m=.5*l+o/v,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=$t(p)}else r<qfr?(f=$t(r),p=1/r,l=p*p,c=dfr+p*sfr(l),m=(r-.5)*(f-1)+c):m=r*($t(r)-1);return e&&(m=t-m),m}q9.exports=Efr});var Ki=s((vee,b9)=>{"use strict";var Nfr=y9();b9.exports=Nfr});var E9=s((cee,w9)=>{"use strict";var Afr=V();function Sfr(r){return r===0&&1/r===Afr}w9.exports=Sfr});var Fo=s((lee,N9)=>{"use strict";var Ofr=E9();N9.exports=Ofr});var Mo=s((pee,A9)=>{"use strict";var Tfr=2.5066282746310007;A9.exports=Tfr});var O9=s((gee,S9)=>{"use strict";var Ifr=Tr();function _fr(r){return Ifr(r/2)}S9.exports=_fr});var ga=s((mee,T9)=>{"use strict";var Lfr=O9();T9.exports=Lfr});var L9=s((dee,_9)=>{"use strict";var I9=ga();function Pfr(r){return r>0?I9(r-1):I9(r+1)}_9.exports=Pfr});var Bo=s((hee,P9)=>{"use strict";var Rfr=L9();P9.exports=Rfr});var F9=s((qee,R9)=>{"use strict";var Ffr=Math.sqrt;R9.exports=Ffr});var G=s((yee,M9)=>{"use strict";var Mfr=F9();M9.exports=Mfr});var k9=s((bee,B9)=>{"use strict";var Bfr=Et(),ko;Bfr===!0?ko=0:ko=1;B9.exports=ko});var C9=s((wee,j9)=>{"use strict";var kfr=lr(),jfr=mr(),Cfr=k9(),jo=new jfr(1),Gfr=new kfr(jo.buffer);function Vfr(r,e){return jo[0]=r,Gfr[Cfr]=e>>>0,jo[0]}j9.exports=Vfr});var ee=s((Eee,G9)=>{"use strict";var Ufr=C9();G9.exports=Ufr});var U9=s((Nee,V9)=>{"use strict";function Hfr(r){return r|0}V9.exports=Hfr});var Co=s((Aee,H9)=>{"use strict";var Wfr=U9();H9.exports=Wfr});var z9=s((See,D9)=>{"use strict";var W9=Bo(),Dfr=ia(),zfr=V(),ma=_();function Xfr(r,e){return e===zfr?ma:e===ma?0:e>0?W9(e)?r:0:W9(e)?Dfr(ma,r):ma}D9.exports=Xfr});var J9=s((Oee,X9)=>{"use strict";var Jfr=Xr(),xfr=tr(),Yfr=1072693247,da=1e300,ha=1e-300;function Zfr(r,e){var t,i;return i=xfr(r),t=i&Jfr,t<=Yfr?e<0?da*da:ha*ha:e>0?da*da:ha*ha}X9.exports=Zfr});var Z9=s((Tee,Y9)=>{"use strict";var $fr=J(),x9=_();function Qfr(r,e){return r===-1?(r-r)/(r-r):r===1?1:$fr(r)<1==(e===x9)?0:x9}Y9.exports=Qfr});var Q9=s((Iee,$9)=>{"use strict";function Kfr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}$9.exports=Kfr});var tg=s((_ee,eg)=>{"use strict";var rvr=tr(),qa=ee(),K9=Qr(),evr=zr(),tvr=Q9(),ivr=1048575,rg=1048576,nvr=1072693248,avr=536870912,svr=524288,uvr=20,ovr=9007199254740992,fvr=.9617966939259756,vvr=.9617967009544373,cvr=-7028461650952758e-24,lvr=[1,1.5],pvr=[0,.5849624872207642],gvr=[0,1350039202129749e-23];function mvr(r,e,t){var i,n,a,u,o,v,f,c,l,p,m,h,d,g,q,N,A,j,T,X,vr,$;return X=0,t<rg&&(e*=ovr,X-=53,t=rvr(e)),X+=(t>>uvr)-evr|0,vr=t&ivr|0,t=vr|nvr|0,vr<=235662?$=0:vr<767610?$=1:($=0,X+=1,t-=rg),e=K9(e,t),c=lvr[$],j=e-c,T=1/(e+c),n=j*T,u=qa(n,0),i=(t>>1|avr)+svr,i+=$<<18,v=K9(0,i),f=e-(v-c),o=T*(j-u*v-u*f),a=n*n,A=a*a*tvr(a),A+=o*(u+n),a=u*u,v=3+a+A,v=qa(v,0),f=A-(v-3-a),j=u*v,T=o*v+f*n,p=j+T,p=qa(p,0),m=T-(p-j),h=vvr*p,d=cvr*p+m*fvr+gvr[$],l=pvr[$],N=X,g=h+d+l+N,g=qa(g,0),q=d-(g-N-l-h),r[0]=g,r[1]=q,r}eg.exports=mvr});var ng=s((Lee,ig)=>{"use strict";function dvr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}ig.exports=dvr});var sg=s((Pee,ag)=>{"use strict";var hvr=ee(),qvr=ng(),yvr=1.4426950408889634,bvr=1.4426950216293335,wvr=19259629911266175e-24;function Evr(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*qvr(n),u=bvr*n,o=n*wvr-a*yvr,i=u+o,i=hvr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}ag.exports=Evr});var ya=s((Ree,ug)=>{"use strict";var Nvr=.6931471805599453;ug.exports=Nvr});var fg=s((Fee,og)=>{"use strict";function Avr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}og.exports=Avr});var dg=s((Mee,mg)=>{"use strict";var Svr=tr(),vg=Qr(),Ovr=ee(),Tvr=Co(),Ivr=na(),_vr=ya(),cg=zr(),lg=Xr(),pg=ta(),Lvr=fg(),gg=1048576,Pvr=1071644672,rn=20,Rvr=.6931471824645996,Fvr=-1904654299957768e-24;function Mvr(r,e,t){var i,n,a,u,o,v,f,c,l,p,m;return p=r&lg|0,m=(p>>rn)-cg|0,l=0,p>Pvr&&(l=r+(gg>>m+1)>>>0,m=((l&lg)>>rn)-cg|0,i=(l&~(pg>>m))>>>0,a=vg(0,i),l=(l&pg|gg)>>rn-m>>>0,r<0&&(l=-l),e-=a),a=t+e,a=Ovr(a,0),o=a*Rvr,v=(t-(a-e))*_vr+a*Fvr,c=o+v,f=v-(c-o),a=c*c,n=c-a*Lvr(a),u=c*n/(n-2)-(f+c*f),c=1-(u-c),r=Svr(c),r=Tvr(r),r+=l<<rn>>>0,r>>rn<=0?c=Ivr(c,l):c=vg(c,r),c}mg.exports=Mvr});var Tg=s((Bee,Og)=>{"use strict";var hg=E(),qg=Bo(),yg=Pr(),Bvr=Tr(),bg=G(),kvr=J(),Go=Zt(),jvr=ee(),wg=Co(),Cvr=V(),Gvr=_(),Vo=Xr(),Vvr=z9(),Uvr=J9(),Hvr=Z9(),Wvr=tg(),Dvr=sg(),zvr=dg(),Xvr=1072693247,Jvr=1105199104,xvr=1139802112,Eg=1083179008,Yvr=1072693248,Zvr=1083231232,$vr=3230714880>>>0,Ng=31,Ce=1e300,Ge=1e-300,Qvr=8008566259537294e-32,te=[0,0],Ag=[0,0];function Sg(r,e){var t,i,n,a,u,o,v,f,c,l,p,m,h,d,g,q;if(hg(r)||hg(e))return NaN;if(Go.assign(e,te,1,0),o=te[0],v=te[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return bg(r);if(e===-.5)return 1/bg(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(yg(e))return Hvr(r,e)}if(Go.assign(r,te,1,0),a=te[0],u=te[1],u===0){if(a===0)return Vvr(r,e);if(r===1)return 1;if(r===-1&&qg(e))return-1;if(yg(r))return r===Cvr?Sg(-0,-e):e<0?0:Gvr}if(r<0&&Bvr(e)===!1)return(r-r)/(r-r);if(n=kvr(r),t=a&Vo|0,i=o&Vo|0,f=a>>>Ng|0,c=o>>>Ng|0,f&&qg(e)?f=-1:f=1,i>Jvr){if(i>xvr)return Uvr(r,e);if(t<Xvr)return c===1?f*Ce*Ce:f*Ge*Ge;if(t>Yvr)return c===0?f*Ce*Ce:f*Ge*Ge;h=Dvr(Ag,n)}else h=Wvr(Ag,n,t);if(l=jvr(e,0),m=(e-l)*h[0]+e*h[1],p=l*h[0],d=m+p,Go.assign(d,te,1,0),g=wg(te[0]),q=wg(te[1]),g>=Eg){if((g-Eg|q)!==0||m+Qvr>d-p)return f*Ce*Ce}else if((g&Vo)>=Zvr&&((g-$vr|q)!==0||m<=d-p))return f*Ge*Ge;return d=zvr(g,p,m),f*d}Og.exports=Sg});var W=s((kee,Ig)=>{"use strict";var Kvr=Tg();Ig.exports=Kvr});var Lg=s((jee,_g)=>{"use strict";function rcr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}_g.exports=rcr});var Rg=s((Cee,Pg)=>{"use strict";var ecr=na(),tcr=Lg();function icr(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*tcr(n),u=1-(e-i*a/(2-a)-r),ecr(u,t)}Pg.exports=icr});var Cg=s((Gee,jg)=>{"use strict";var ncr=E(),Fg=ea(),acr=V(),Mg=_(),scr=Rg(),ucr=.6931471803691238,ocr=19082149292705877e-26,Bg=1.4426950408889634,fcr=709.782712893384,vcr=-745.1332191019411,kg=1/(1<<28),ccr=-kg;function lcr(r){var e,t,i;return ncr(r)||r===Mg?r:r===acr?0:r>fcr?Mg:r<vcr?0:r>ccr&&r<kg?1+r:(r<0?i=Fg(Bg*r-.5):i=Fg(Bg*r+.5),e=r-i*ucr,t=i*ocr,scr(e,t,i))}jg.exports=lcr});var nr=s((Vee,Gg)=>{"use strict";var pcr=Cg();Gg.exports=pcr});var Ug=s((Uee,Vg)=>{"use strict";function gcr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}Vg.exports=gcr});var Dg=s((Hee,Wg)=>{"use strict";var mcr=Mo(),Hg=W(),dcr=nr(),hcr=Ug(),qcr=143.01608;function ycr(r){var e,t,i;return e=1/r,e=1+e*hcr(e),t=dcr(r),r>qcr?(i=Hg(r,.5*r-.25),t=i*(i/t)):t=Hg(r,r-.5)/t,mcr*t*e}Wg.exports=ycr});var Xg=s((Wee,zg)=>{"use strict";var bcr=.5772156649015329;zg.exports=bcr});var xg=s((Dee,Jg)=>{"use strict";var wcr=Xg();function Ecr(r,e){return e/((1+wcr*r)*r)}Jg.exports=Ecr});var Zg=s((zee,Yg)=>{"use strict";function Ncr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}Yg.exports=Ncr});var nm=s((Xee,im)=>{"use strict";var Acr=E(),Scr=Tr(),Ocr=Fo(),$g=J(),Tcr=Q(),Icr=St(),Qg=_(),Kg=V(),rm=Ir(),em=Dg(),tm=xg(),_cr=Zg();function Lcr(r){var e,t,i,n;if(Scr(r)&&r<0||r===Kg||Acr(r))return NaN;if(r===0)return Ocr(r)?Kg:Qg;if(r>171.61447887182297)return Qg;if(r<-170.5674972726612)return 0;if(t=$g(r),t>33)return r>=0?em(r):(i=Tcr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*Icr(rm*n),e*rm/($g(n)*em(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return tm(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return tm(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*_cr(r))}im.exports=Lcr});var Qt=s((Jee,am)=>{"use strict";var Pcr=nm();am.exports=Pcr});var Uo=s((xee,sm)=>{"use strict";var Rcr=14901161193847656e-24;sm.exports=Rcr});var om=s((Yee,um)=>{"use strict";var Fcr=17976931348623157e292;um.exports=Fcr});var ba=s((Zee,fm)=>{"use strict";var Mcr=709.782712893384;fm.exports=Mcr});var cm=s(($ee,vm)=>{"use strict";var Bcr=nr();function kcr(r,e){var t,i,n,a;if(n=Bcr(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}vm.exports=kcr});var pm=s((Qee,lm)=>{"use strict";function jcr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}lm.exports=jcr});var mm=s((Kee,gm)=>{"use strict";function Ccr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}gm.exports=Ccr});var hm=s((rte,dm)=>{"use strict";function Gcr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}dm.exports=Gcr});var ym=s((ete,qm)=>{"use strict";function Vcr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}qm.exports=Vcr});var wm=s((tte,bm)=>{"use strict";function Ucr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}bm.exports=Ucr});var Nm=s((ite,Em)=>{"use strict";function Hcr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}Em.exports=Hcr});var Sm=s((nte,Am)=>{"use strict";function Wcr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}Am.exports=Wcr});var Tm=s((ate,Om)=>{"use strict";function Dcr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}Om.exports=Dcr});var Pm=s((ste,Lm)=>{"use strict";var zcr=E(),Im=nr(),Xcr=ee(),Jcr=_(),xcr=V(),Ycr=pm(),Zcr=mm(),$cr=hm(),Qcr=ym(),Kcr=wm(),rlr=Nm(),elr=Sm(),tlr=Tm(),wa=1e-300,ilr=13877787807814457e-33,_m=.8450629115104675,nlr=.12837916709551256,alr=1,slr=-.0023621185607526594,ulr=1,olr=-.009864944034847148,flr=1,vlr=-.0098649429247001,clr=1;function llr(r){var e,t,i,n,a,u,o,v;if(zcr(r))return NaN;if(r===Jcr)return 0;if(r===xcr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<ilr?1-r:(i=r*r,n=nlr+i*Ycr(i),a=alr+i*Zcr(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=slr+a*$cr(a),v=ulr+a*Qcr(a),e?1+_m+o/v:1-_m-o/v;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=olr+a*Kcr(a),a=flr+a*rlr(a);else{if(r<-6)return 2-wa;n=vlr+a*elr(a),a=clr+a*tlr(a)}return i=Xcr(t,0),n=Im(-(i*i)-.5625)*Im((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-wa:wa*wa}Lm.exports=llr});var Ot=s((ute,Rm)=>{"use strict";var plr=Pm();Rm.exports=plr});var Bm=s((ote,Mm)=>{"use strict";var glr=Ot(),Fm=G(),mlr=nr(),dlr=Ir();function hlr(r,e){var t,i,n,a,u;if(a=glr(Fm(e)),a!==0&&r>1){for(i=mlr(-e)/Fm(dlr*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}Mm.exports=hlr});var Ho=s((fte,km)=>{"use strict";var qlr=-708.3964185322641;km.exports=qlr});var Vm=s((vte,Gm)=>{"use strict";var Kt=nr(),Ea=W(),ylr=P(),jm=ba(),Cm=Ho();function blr(r,e){var t,i;return i=r*ylr(e),e>=1?i<jm&&-e>Cm?t=Ea(e,r)*Kt(-e):r>=1?t=Ea(e/Kt(e/r),r):t=Kt(i-e):i>Cm?t=Ea(e,r)*Kt(-e):e/r<jm?t=Ea(e/Kt(e/r),r):t=Kt(i-e),t}Gm.exports=blr});var Wo=s((cte,Um)=>{"use strict";function wlr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Um.exports=wlr});var Wm=s((lte,Hm)=>{"use strict";var Elr=Function;Hm.exports=Elr});var zm=s((pte,Dm)=>{"use strict";var Nlr=Wm();Dm.exports=Nlr});var Jm=s((gte,Xm)=>{"use strict";var Alr=zm(),Slr=Wo();function Olr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new Alr(e)();function a(u){return Slr(r,u)}}Xm.exports=Olr});var Zm=s((mte,Ym)=>{"use strict";var Tlr=w(),xm=Wo(),Ilr=Jm();Tlr(xm,"factory",Ilr);Ym.exports=xm});var Tt=s((dte,$m)=>{"use strict";var _lr=2220446049250313e-31;$m.exports=_lr});var Km=s((hte,Qm)=>{"use strict";var Llr=eval;Qm.exports=Llr});var ed=s((qte,rd)=>{"use strict";var Plr=Km();function Rlr(){var r;try{Plr('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}rd.exports=Rlr});var Do=s((yte,td)=>{"use strict";var Flr=ed();td.exports=Flr});var nd=s((bte,id)=>{"use strict";var Na=J(),Mlr=Tt(),Blr=1e6;function klr(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||Mlr,a=o.maxTerms||Blr,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,Na(i*u)>=Na(n)||--a===0)break}else do n=r(),u+=n;while(Na(i*u)<Na(n)&&--a);return u}id.exports=klr});var ud=s((wte,sd)=>{"use strict";var ad=J(),jlr=Tt(),Clr=1e6;function Glr(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||jlr,n=u.maxTerms||Clr,a=u.initialValue||0;do i=r(),a+=i;while(ad(t*a)<ad(i)&&--n);return a}sd.exports=Glr});var Aa=s((Ete,od)=>{"use strict";var Vlr=Do(),Ulr=nd(),Hlr=ud(),zo;Vlr()?zo=Ulr:zo=Hlr;od.exports=zo});var vd=s((Nte,fd)=>{"use strict";function Wlr(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}fd.exports=Wlr});var ld=s((Ate,cd)=>{"use strict";var Dlr=J(),zlr=P(),Xlr=Tt(),Jlr=Aa(),xlr=vd();function Ylr(r){var e,t;return r<=-1?NaN:(t=Dlr(r),t>.95?zlr(1+r)-r:t<Xlr?-r*r/2:(e={initialValue:-r},Jlr(xlr(r),e)))}cd.exports=Ylr});var gd=s((Ste,pd)=>{"use strict";var Zlr=ld();pd.exports=Zlr});var Ve=s((Ote,md)=>{"use strict";var $lr=6.283185307179586;md.exports=$lr});var hd=s((Tte,dd)=>{"use strict";function Qlr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}dd.exports=Qlr});var yd=s((Ite,qd)=>{"use strict";function Klr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}qd.exports=Klr});var wd=s((_te,bd)=>{"use strict";function r4r(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}bd.exports=r4r});var Nd=s((Lte,Ed)=>{"use strict";function e4r(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}Ed.exports=e4r});var Sd=s((Pte,Ad)=>{"use strict";function t4r(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}Ad.exports=t4r});var Td=s((Rte,Od)=>{"use strict";function i4r(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}Od.exports=i4r});var _d=s((Fte,Id)=>{"use strict";function n4r(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}Id.exports=n4r});var Pd=s((Mte,Ld)=>{"use strict";function a4r(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}Ld.exports=a4r});var Fd=s((Bte,Rd)=>{"use strict";function s4r(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Rd.exports=s4r});var Bd=s((kte,Md)=>{"use strict";var u4r=Zm(),o4r=gd(),f4r=Ot(),Xo=G(),v4r=nr(),c4r=Ve(),l4r=hd(),p4r=yd(),g4r=wd(),m4r=Nd(),d4r=Sd(),h4r=Td(),q4r=_d(),y4r=Pd(),b4r=Fd(),Gr=[0,0,0,0,0,0,0,0,0,0];function w4r(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-o4r(i),a=r*n,u=Xo(2*n),e<r&&(u=-u),Gr[0]=l4r(u),Gr[1]=p4r(u),Gr[2]=g4r(u),Gr[3]=m4r(u),Gr[4]=d4r(u),Gr[5]=h4r(u),Gr[6]=q4r(u),Gr[7]=y4r(u),Gr[8]=b4r(u),Gr[9]=-.0005967612901927463,t=u4r(Gr,1/r),t*=v4r(-a)/Xo(c4r*r),e<r&&(t=-t),t+=f4r(Xo(a))/2,t}Md.exports=w4r});var jd=s((jte,kd)=>{"use strict";function E4r(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}kd.exports=E4r});var Gd=s((Cte,Cd)=>{"use strict";var N4r=Aa(),A4r=jd();function S4r(r,e,t){var i,n;return t=t||0,n=A4r(r,e),i=N4r(n,{initialValue:t}),i}Cd.exports=S4r});var Ud=s((Gte,Vd)=>{"use strict";function O4r(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}Vd.exports=O4r});var Wd=s((Vte,Hd)=>{"use strict";var T4r=Ud();Hd.exports=T4r});var zd=s((Ute,Dd)=>{"use strict";var I4r=Wd();Dd.exports=I4r});var Jd=s((Hte,Xd)=>{"use strict";function _4r(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}Xd.exports=_4r});var Qd=s((Wte,$d)=>{"use strict";var L4r=E(),xd=tr(),Yd=Qr(),P4r=_(),R4r=V(),Zd=zr(),F4r=Jd(),Jo=.6931471803691238,xo=19082149292705877e-26,M4r=.41421356237309503,B4r=-.2928932188134525,k4r=1862645149230957e-24,j4r=5551115123125783e-32,C4r=9007199254740992,G4r=.6666666666666666;function V4r(r){var e,t,i,n,a,u,o,v,f,c;if(r<-1||L4r(r))return NaN;if(r===-1)return R4r;if(r===P4r||r===0)return r;if(r<0?i=-r:i=r,c=1,i<M4r){if(i<k4r)return i<j4r?r:r-r*r*.5;r>B4r&&(c=0,n=r,t=1)}return c!==0&&(i<C4r?(f=1+r,t=xd(f),c=(t>>20)-Zd,c>0?a=1-(f-r):a=r-(f-1),a/=f):(f=r,t=xd(f),c=(t>>20)-Zd,a=0),t&=1048575,t<434334?f=Yd(f,t|1072693248):(c+=1,f=Yd(f,t|1071644672),t=1048576-t>>2),n=f-1),e=.5*n*n,t===0?n===0?(a+=c*xo,c*Jo+a):(v=e*(1-G4r*n),c*Jo-(v-(c*xo+a)-n)):(u=n/(2+n),o=u*u,v=o*F4r(o),c===0?n-(e-u*(e+v)):c*Jo-(e-(u*(e+v)+(c*xo+a))-n))}$d.exports=V4r});var Ue=s((Dte,Kd)=>{"use strict";var U4r=Qd();Kd.exports=U4r});var eh=s((zte,rh)=>{"use strict";var H4r=_();function W4r(r){return r===0&&1/r===H4r}rh.exports=W4r});var He=s((Xte,th)=>{"use strict";var D4r=eh();th.exports=D4r});var ah=s((Jte,nh)=>{"use strict";var z4r=He(),ih=E(),Yo=_();function X4r(r,e){return ih(r)||ih(e)?NaN:r===Yo||e===Yo?Yo:r===e&&r===0?z4r(r)?r:e:r>e?r:e}nh.exports=X4r});var Zo=s((xte,sh)=>{"use strict";var J4r=ah();sh.exports=J4r});var fh=s((Yte,oh)=>{"use strict";var x4r=Fo(),uh=E(),$o=V();function Y4r(r,e){return uh(r)||uh(e)?NaN:r===$o||e===$o?$o:r===e&&r===0?x4r(r)?r:e:r<e?r:e}oh.exports=Y4r});var ch=s((Zte,vh)=>{"use strict";var Z4r=fh();vh.exports=Z4r});var ph=s(($te,lh)=>{"use strict";var $4r=10.900511;lh.exports=$4r});var Qo=s((Qte,gh)=>{"use strict";var Q4r=2.718281828459045;gh.exports=Q4r});var hh=s((Kte,dh)=>{"use strict";var K4r=zd(),r6r=Ki(),e6r=Qt(),t6r=Ue(),i6r=G(),n6r=J(),We=nr(),en=W(),Ko=Zo(),r2=ch(),mh=P(),Sa=ba(),tn=Ho(),e2=ph(),a6r=Qo();function s6r(r,e){var t,i,n,a,u,o,v;return n=r+e2-.5,v=(e-r-e2+.5)/n,r<1?e<=tn?We(r*mh(e)-e-r6r(r)):en(e,r)*We(-e)/e6r(r):(n6r(v*v*r)<=100&&r>150?(t=r*(t6r(v)-v)+e*(.5-e2)/n,t=We(t)):(a=r*mh(e/n),u=r-e,r2(a,u)<=tn||Ko(a,u)>=Sa?(i=u/r,r2(a,u)/2>tn&&Ko(a,u)/2<Sa?(o=en(e/n,r/2)*We(u/2),t=o*o):r2(a,u)/4>tn&&Ko(a,u)/4<Sa&&e>r?(o=en(e/n,r/4)*We(u/4),t=o*o,t*=t):i>tn&&i<Sa?t=en(e*We(i)/n,r):t=We(a+u)):t=en(e/n,r)*We(u)),t*=i6r(n/a6r)/K4r(r),t)}dh.exports=s6r});var yh=s((rie,qh)=>{"use strict";var u6r=.34657359027997264;qh.exports=u6r});var wh=s((eie,bh)=>{"use strict";function o6r(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}bh.exports=o6r});var Th=s((tie,Oh)=>{"use strict";var f6r=E(),Eh=tr(),t2=Qr(),v6r=Yt(),Nh=_(),c6r=V(),Ah=zr(),l6r=yh(),p6r=wh(),g6r=709.782712893384,i2=.6931471803691238,n2=19082149292705877e-26,Sh=1.4426950408889634,m6r=38.816242111356935,d6r=1.0397207708399179;function h6r(r){var e,t,i,n,a,u,o,v,f,c,l,p,m;if(r===Nh||f6r(r))return r;if(r===c6r)return-1;if(r===0)return r;if(r<0?(i=!0,v=-r):(i=!1,v=r),v>=m6r){if(i)return-1;if(v>=g6r)return Nh}if(u=Eh(v)|0,v>l6r)v<d6r?i?(n=r+i2,a=-n2,m=-1):(n=r-i2,a=n2,m=1):(i?m=Sh*r-.5:m=Sh*r+.5,m|=0,l=m,n=r-l*i2,a=l*n2),r=n-a,c=n-r-a;else{if(u<1016070144)return r;m=0}return e=.5*r,f=r*e,o=1+f*p6r(f),l=3-o*e,p=f*((o-l)/(6-r*l)),m===0?r-(r*p-f):(t=v6r(Ah+m<<20,0),p=r*(p-c)-c,p-=f,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(v=1-(p-r),m===1024?(n=Eh(v)+(m<<20)|0,v=t2(v,n)):v*=t,v-1):(l=1,m<20?(n=1072693248-(2097152>>m)|0,l=t2(l,n),v=l-(p-r)):(n=Ah-m<<20|0,l=t2(l,n),v=r-(p+l),v+=1),v*=t,v))}Oh.exports=h6r});var a2=s((iie,Ih)=>{"use strict";var q6r=Th();Ih.exports=q6r});var Rh=s((nie,Ph)=>{"use strict";var _h=E(),Lh=J(),y6r=a2(),b6r=P(),w6r=W(),E6r=ea();function N6r(r,e){var t;if(_h(r)||_h(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((Lh(e*(r-1))<.5||Lh(e)<.2)&&(t=b6r(r)*e,t<.5))return y6r(t)}else if(E6r(e)!==e)return NaN;return w6r(r,e)-1}Ph.exports=N6r});var Mh=s((aie,Fh)=>{"use strict";var A6r=Rh();Fh.exports=A6r});var kh=s((sie,Bh)=>{"use strict";function S6r(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}Bh.exports=S6r});var Ch=s((uie,jh)=>{"use strict";function O6r(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}jh.exports=O6r});var Vh=s((oie,Gh)=>{"use strict";function T6r(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}Gh.exports=T6r});var Hh=s((fie,Uh)=>{"use strict";var s2=P(),I6r=Tt(),_6r=kh(),L6r=Ch(),P6r=Vh(),R6r=.15896368026733398,F6r=.5281534194946289,M6r=.45201730728149414;function B6r(r,e,t){var i,n,a,u;if(r<I6r)return-s2(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=s2(r);while(r>=3);t=r-2}return a=t*(r+1),u=_6r(t),n+=a*R6r+a*u,n}return r<1&&(n+=-s2(r),t=e,e=r,r+=1),r<=1.5?(a=L6r(e),i=e*t,n+=i*F6r+i*a,n):(a=t*e,u=P6r(-t),n+=a*M6r+a*u,n)}Uh.exports=B6r});var Jh=s((vie,Xh)=>{"use strict";var Wh=Qt(),Dh=a2(),k6r=Ue(),j6r=E(),zh=Hh();function C6r(r){return j6r(r)?NaN:r<0?r<-.5?Wh(1+r)-1:Dh(-k6r(r)+zh(r+2,r+1,r)):r<2?Dh(zh(r+1,r,r-1)):Wh(1+r)-1}Xh.exports=C6r});var Yh=s((cie,xh)=>{"use strict";var G6r=Jh();xh.exports=G6r});var $h=s((lie,Zh)=>{"use strict";function V6r(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}Zh.exports=V6r});var Kh=s((pie,Qh)=>{"use strict";var U6r=Mh(),H6r=Aa(),W6r=Yh(),D6r=$h();function z6r(r,e,t){var i,n,a,u,o;return n=W6r(r),a=(n+1)/r,u=U6r(e,r),n-=u,n/=r,o=D6r(r,e),u+=1,i=t?a:0,n=-u*H6r(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}Qh.exports=z6r});var u2=s((gie,rq)=>{"use strict";var X6r=11754943508222875e-54;rq.exports=X6r});var tq=s((mie,eq)=>{"use strict";var Oa=J(),Jr=u2(),J6r=Tt(),x6r=1e6;function Y6r(r,e,t){var i,n,a,u,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),u=f[1],a=f[0],u===0&&(u=Jr),o=u,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=Jr),o=f[1]+f[0]/o,o===0&&(o=Jr),v=1/v,n=o*v,u*=n);while(Oa(n-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=Jr),o=f[1]+f[0]/o,o===0&&(o=Jr),v=1/v,n=o*v,u*=n);while(f&&Oa(n-1)>e&&--t);return a/u}function Z6r(r,e,t){var i,n,a,u,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),a=v[1],a===0&&(a=Jr),u=a,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=Jr),u=v[1]+v[0]/u,u===0&&(u=Jr),o=1/o,n=u*o,a*=n);while(v&&Oa(n-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=Jr),u=v[1]+v[0]/u,u===0&&(u=Jr),o=1/o,n=u*o,a*=n);while(v&&Oa(n-1)>e&&--t);return a}function $6r(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||x6r,n=i.tolerance||J6r,i.keep?Z6r(r,n,t):Y6r(r,n,t)}eq.exports=$6r});var aq=s((die,nq)=>{"use strict";var iq=J(),Q6r=Tt(),ri=u2(),K6r=1e6;function r8r(r,e,t){var i,n,a,u,o,v;v=r(),o=v[1],n=v[0],o===0&&(o=ri),a=o,u=0;do v=r(),v&&(u=v[1]+v[0]*u,u===0&&(u=ri),a=v[1]+v[0]/a,a===0&&(a=ri),u=1/u,i=a*u,o*=i);while(v&&iq(i-1)>e&&--t);return n/o}function e8r(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=ri),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=ri),n=o[1]+o[0]/n,n===0&&(n=ri),a=1/a,i=n*a,u*=i);while(o&&iq(i-1)>e&&--t);return u}function t8r(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||Q6r,t=i.maxIter||K6r,i.keep?e8r(r,n,t):r8r(r,n,t)}nq.exports=t8r});var uq=s((hie,sq)=>{"use strict";var i8r=Do(),n8r=tq(),a8r=aq(),o2;i8r()?o2=n8r:o2=a8r;sq.exports=o2});var fq=s((qie,oq)=>{"use strict";function s8r(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}oq.exports=s8r});var cq=s((yie,vq)=>{"use strict";var u8r=uq(),o8r=fq();function f8r(r,e){var t=o8r(r,e);return 1/(e-r+1+u8r(t))}vq.exports=f8r});var wq=s((bie,bq)=>{"use strict";var v8r=Ki(),c8r=Q(),nn=Qt(),lq=J(),l8r=nr(),pq=W(),Vr=P(),p8r=Uo(),gq=om(),g8r=Mo(),mq=ba(),m8r=_(),d8r=cm(),h8r=Bm(),dq=Vm(),q8r=Bd(),f2=Gd(),hq=hh(),y8r=Kh(),qq=cq(),b8r=170;function yq(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h,d,g,q,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=b8r&&!a)return l&&e*4<r?(p=e*Vr(r)-r,p+=Vr(qq(e,r))):!l&&e>4*r?(p=e*Vr(r)-r,o=0,p+=Vr(f2(e,r,o)/e)):(p=yq(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Vr(p)-e+(e-.5)*Vr(e),p+=Vr(g8r)):(p=e*Vr(r)-r,o=0,p+=Vr(f2(e,r,o)/e)):p=Vr(p)+v8r(e)),p>mq?m8r:l8r(p);switch(c=e<30&&e<=r+1&&r<mq,c?(q=c8r(e),m=q===e,v=m?!1:lq(q-e)===.5):m=v=!1,m&&r>.6?(l=!l,u=0):v&&r>.2?(l=!l,u=1):r<p8r&&e>1?u=6:r<.5?-.4/Vr(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(f=!1,a&&e>20&&(h=lq((r-e)/e),e>200?20/e>h*h&&(f=!0):h<.4&&(f=!0)),f?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=d8r(e,r),a===!1&&(p*=nn(e));break;case 1:p=h8r(e,r),a===!1&&(p*=nn(e));break;case 2:p=a?hq(e,r):dq(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:nn(e),a||p>=1||gq*p>o?(o/=p,a||e<1||gq/e>o?(o*=-e,n=!0):o=0):o=0)),p*=f2(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,g=y8r(e,r,l),p=g[0],N=g[1],l=!1,a&&(p/=N);break;case 4:p=a?hq(e,r):dq(e,r),p!==0&&(p*=qq(e,r));break;case 5:p=q8r(e,r),r>=e&&(l=!l);break;case 6:p=a?pq(r,e)/nn(e+1):pq(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:nn(e),p=d-p),p}bq.exports=yq});var v2=s((wie,Eq)=>{"use strict";var w8r=wq();Eq.exports=w8r});var Aq=s((Eie,Nq)=>{"use strict";var E8r=v2(),c2=E(),N8r=_();function A8r(r,e,t){return c2(r)||c2(e)||c2(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===N8r?1:E8r(r*t,e)}Nq.exports=A8r});var Oq=s((Nie,Sq)=>{"use strict";function S8r(r){return e;function e(){return r}}Sq.exports=S8r});var O=s((Aie,Tq)=>{"use strict";var O8r=Oq();Tq.exports=O8r});var Lq=s((Sie,_q)=>{"use strict";var Iq=E();function T8r(r,e){return Iq(r)||Iq(e)?NaN:r<e?0:1}_q.exports=T8r});var Fq=s((Oie,Rq)=>{"use strict";var I8r=O(),Pq=E();function _8r(r){if(Pq(r))return I8r(NaN);return e;function e(t){return Pq(t)?NaN:t<r?0:1}}Rq.exports=_8r});var Ta=s((Tie,Bq)=>{"use strict";var L8r=w(),Mq=Lq(),P8r=Fq();L8r(Mq,"factory",P8r);Bq.exports=Mq});var Cq=s((Iie,jq)=>{"use strict";var R8r=O(),F8r=Ta().factory,M8r=v2(),kq=E(),B8r=_();function k8r(r,e){if(kq(r)||kq(e)||r<0||e<=0)return R8r(NaN);if(r===0)return F8r(0);return t;function t(i){return i<=0?0:i===B8r?1:M8r(i*e,r)}}jq.exports=k8r});var l2=s((_ie,Vq)=>{"use strict";var j8r=w(),Gq=Aq(),C8r=Cq();j8r(Gq,"factory",C8r);Vq.exports=Gq});var Hq=s((Lie,Uq)=>{"use strict";var G8r=l2();function V8r(r,e){return G8r(r,e/2,.5)}Uq.exports=V8r});var Dq=s((Pie,Wq)=>{"use strict";var U8r=l2().factory;function H8r(r){return U8r(r/2,.5)}Wq.exports=H8r});var Jq=s((Rie,Xq)=>{"use strict";var W8r=w(),zq=Hq(),D8r=Dq();W8r(zq,"factory",D8r);Xq.exports=zq});var $q=s((Fie,Zq)=>{"use strict";var z8r=I(),X8r=S(),J8r=xn(),xq=y(),Yq=["values","indices","*"];function x8r(r,e){return z8r(e)?X8r(e,"returns")&&(r.returns=e.returns,J8r(Yq,r.returns)===-1)?new TypeError(xq('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Yq.join('", "'),r.returns)):null:new TypeError(xq("invalid argument. Options argument must be an object. Value: `%s`.",e))}Zq.exports=x8r});var Kq=s((Mie,Qq)=>{"use strict";var Y8r=S();function Z8r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),Y8r(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}Qq.exports=Z8r});var ey=s((Bie,ry)=>{"use strict";var $8r=S();function Q8r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),$8r(t,n)?t[n].push(a):t[n]=[a];return t}ry.exports=Q8r});var iy=s((kie,ty)=>{"use strict";var K8r=S();function r5r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),K8r(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}ty.exports=r5r});var uy=s((jie,sy)=>{"use strict";var ny=Cr(),ay=y(),e5r=$q(),t5r=Kq(),i5r=ey(),n5r=iy();function a5r(r,e,t){var i,n,a;if(!ny(r))throw new TypeError(ay("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=e5r(i,e),n)throw n;a=t}if(!ny(a))throw new TypeError(ay("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?t5r(r,a):i.returns==="indices"?i5r(r,a):n5r(r,a)}sy.exports=a5r});var fy=s((Cie,oy)=>{"use strict";var s5r=uy();oy.exports=s5r});var cy=s((Gie,vy)=>{"use strict";function u5r(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}vy.exports=u5r});var gy=s((Vie,py)=>{"use strict";var o5r=cr(),f5r=k().isPrimitive,v5r=I(),c5r=sr(),ly=S(),p2=y();function l5r(r,e){return v5r(e)?ly(e,"alpha")&&(r.alpha=e.alpha,!f5r(r.alpha)||c5r(r.alpha))?new TypeError(p2("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):ly(e,"groups")&&(r.groups=e.groups,!o5r(r.groups))?new TypeError(p2("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(p2("invalid argument. Options argument must be an object. Value: `%s`.",e))}py.exports=l5r});var g2=s((Uie,my)=>{"use strict";var p5r=jr().isPrimitive;function g5r(r){return p5r(r)&&r>0}my.exports=g5r});var m2=s((Hie,dy)=>{"use strict";var m5r=jr().isObject;function d5r(r){return m5r(r)&&r.valueOf()>0}dy.exports=d5r});var qy=s((Wie,hy)=>{"use strict";var h5r=g2(),q5r=m2();function y5r(r){return h5r(r)||q5r(r)}hy.exports=y5r});var ie=s((Die,by)=>{"use strict";var yy=w(),d2=qy(),b5r=g2(),w5r=m2();yy(d2,"isPrimitive",b5r);yy(d2,"isObject",w5r);by.exports=d2});var an=s((zie,wy)=>{"use strict";var E5r=9007199254740991;wy.exports=E5r});var h2=s((Xie,Ey)=>{"use strict";var N5r=308;Ey.exports=N5r});var Ay=s((Jie,Ny)=>{"use strict";var A5r=-308;Ny.exports=A5r});var q2=s((xie,Sy)=>{"use strict";var S5r=-324;Sy.exports=S5r});var Ry=s((Yie,Py)=>{"use strict";var Oy=E(),Ia=Pr(),Ty=W(),O5r=J(),Iy=Io(),T5r=an(),_y=h2(),I5r=Ay(),_5r=q2(),L5r=T5r+1,Ly=1e308;function P5r(r,e){var t,i;return Oy(r)||Oy(e)||Ia(e)?NaN:Ia(r)||r===0||e<_5r||O5r(r)>L5r&&e<=0?r:e>_y?0*r:e<I5r?(t=Ty(10,-(e+_y)),i=r*Ly*t,Ia(i)?r:Iy(i)/Ly/t):(t=Ty(10,-e),i=r*t,Ia(i)?r:Iy(i)/t)}Py.exports=P5r});var My=s((Zie,Fy)=>{"use strict";var R5r=Ry();Fy.exports=R5r});var jy=s(($ie,ky)=>{"use strict";var F5r=ie(),M5r=I(),B5r=or().isPrimitive,By=S(),y2=y(),b2=My();function k5r(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!M5r(r))throw new TypeError(y2("invalid argument. First argument must be an object. Value: `%s`.",r));if(By(r,"digits")){if(!F5r(r.digits))throw new TypeError(y2("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(By(r,"decision")){if(!B5r(r.decision))throw new TypeError(y2("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+b2(this.pValue,-t)+`
`,i+="    statistic: "+b2(this.statistic,-t)+`
`,i+="    df: "+b2(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}ky.exports=k5r});var Vy=s((Qie,Gy)=>{"use strict";var j5r=Cr(),C5r=I(),It=f8(),G5r=zt(),_a=y(),V5r=Jq(),U5r=fy(),Cy=P(),H5r=cy(),W5r=gy(),D5r=jy();function z5r(){var r,e,t,i,n,a,u,o,v,f,c,l,p,m,h,d,g,q,N,A;if(v=[],e=arguments.length,f={},C5r(arguments[e-1])&&(r=arguments[e-1],e-=1,m=W5r(f,r),m))throw m;if(f.groups){if(n=U5r(arguments[0],f.groups),i=G5r(n),e=i.length,e<2)throw new Error(_a("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(A=0;A<e;A++)v.push(n[i[A]])}else for(A=0;A<e;A++)v.push(arguments[A]);for(u=0,t=0,o=0,h=0,q=new Array(e),N=q.slice(),A=0;A<e;A++){if(p=v[A],!j5r(p))throw new TypeError(_a("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(_a("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));q[A]=p.length-1,u+=q[A],t+=1/q[A],N[A]=H5r(p),o+=q[A]*N[A],h+=q[A]*Cy(N[A])}if(o/=u,f.alpha===void 0?a=.05:a=f.alpha,a<0||a>1)throw new RangeError(_a("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*Cy(o)-h,l/=1+(t-1/u)/(3*(e-1)),g=e-1,c=1-V5r(l,g),d={},It(d,"rejected",c<=a),It(d,"alpha",a),It(d,"pValue",c),It(d,"statistic",l),It(d,"df",g),It(d,"method","Bartlett's test of equal variances"),It(d,"print",D5r),d}Gy.exports=z5r});var Hy=s((Kie,Uy)=>{"use strict";var X5r=Vy();Uy.exports=X5r});var Dy=s((rne,Wy)=>{"use strict";function J5r(r){var e,t,i,n,a,u,o,v,f,c,l;if(v=r.length,t=[],v===0)return t;if(n=r[0],f=n.length,v===1){for(c=0;c<f;c++)t.push(n[c]);return t}for(e=[f],c=1;c<v;c++)e.push(r[c].length),e[c]>f&&(f=e[c]);for(c=0;c<f;c++)t.push(0);for(c=f-1;c>=0;){for(a=e[0]-f+c,a>=0?i=n[a]:i=1,l=1;l<v;l++){if(u=e[l]-f+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}Wy.exports=J5r});var w2=s((ene,zy)=>{"use strict";var x5r=Dy();zy.exports=x5r});var Jy=s((tne,Xy)=>{"use strict";var E2=E(),Y5r=He();function Z5r(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,f=1,E2(a)===!1)for(f;f<r;f++){if(u+=t,v=e[u],E2(v)){a=v;break}(v>a||v===a&&Y5r(v))&&(a=v),i[o]=a,o+=n}if(E2(a))for(f;f<r;f++)i[o]=a,o+=n;return i}Xy.exports=Z5r});var Yy=s((ine,xy)=>{"use strict";var N2=E(),$5r=He();function Q5r(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return n;if(v=i,f=u,o=e[v],n[f]=o,f+=a,l=1,N2(o)===!1)for(l;l<r;l++){if(v+=t,c=e[v],N2(c)){o=c;break}(c>o||c===o&&$5r(c))&&(o=c),n[f]=o,f+=a}if(N2(o))for(l;l<r;l++)n[f]=o,f+=a;return n}xy.exports=Q5r});var Qy=s((nne,$y)=>{"use strict";var K5r=w(),Zy=Jy(),rpr=Yy();K5r(Zy,"ndarray",rpr);$y.exports=Zy});var rb=s((ane,Ky)=>{"use strict";var epr=Qy();Ky.exports=epr});var tb=s((sne,eb)=>{"use strict";var tpr=Ao();function ipr(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(tpr(r,i));return t}eb.exports=ipr});var La=s((une,ib)=>{"use strict";var npr=tb();ib.exports=npr});var ab=s((one,nb)=>{"use strict";function apr(r,e,t){var i,n,a,u,o,v;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],v=0;v<a;v++)n.push(e.call(t,[o,v]));i.push(n)}return i}nb.exports=apr});var ub=s((fne,sb)=>{"use strict";var spr=ab();sb.exports=spr});var fb=s((vne,ob)=>{"use strict";function upr(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}ob.exports=upr});var A2=s((cne,vb)=>{"use strict";var opr=fb();vb.exports=opr});var S2=s((lne,cb)=>{"use strict";var fpr=k().isPrimitive;function vpr(r){return fpr(r)&&r>0}cb.exports=vpr});var O2=s((pne,lb)=>{"use strict";var cpr=k().isObject;function lpr(r){return cpr(r)&&r.valueOf()>0}lb.exports=lpr});var gb=s((gne,pb)=>{"use strict";var ppr=S2(),gpr=O2();function mpr(r){return ppr(r)||gpr(r)}pb.exports=mpr});var D=s((mne,db)=>{"use strict";var mb=w(),T2=gb(),dpr=S2(),hpr=O2();mb(T2,"isPrimitive",dpr);mb(T2,"isObject",hpr);db.exports=T2});var qb=s((dne,hb)=>{"use strict";var qpr=L();function ypr(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&qpr(r.next)}hb.exports=ypr});var bb=s((hne,yb)=>{"use strict";var bpr=qb();yb.exports=bpr});var Nb=s((qne,Eb)=>{"use strict";var wb="function";function wpr(r){return typeof r.get===wb&&typeof r.set===wb}Eb.exports=wpr});var I2=s((yne,Ab)=>{"use strict";var Epr=Nb();Ab.exports=Epr});var Tb=s((bne,Ob)=>{"use strict";var Sb={complex128:Npr,complex64:Apr,default:Spr};function Npr(r,e,t){r.set(t,e)}function Apr(r,e,t){r.set(t,e)}function Spr(r,e,t){r.set(t,e)}function Opr(r){var e=Sb[r];return typeof e=="function"?e:Sb.default}Ob.exports=Opr});var _2=s((wne,Ib)=>{"use strict";var Tpr=Tb();Ib.exports=Tpr});var Pb=s((Ene,Lb)=>{"use strict";var _b={float64:Ipr,float32:_pr,int32:Lpr,int16:Ppr,int8:Rpr,uint32:Fpr,uint16:Mpr,uint8:Bpr,uint8c:kpr,generic:jpr,default:Cpr};function Ipr(r,e,t){r[e]=t}function _pr(r,e,t){r[e]=t}function Lpr(r,e,t){r[e]=t}function Ppr(r,e,t){r[e]=t}function Rpr(r,e,t){r[e]=t}function Fpr(r,e,t){r[e]=t}function Mpr(r,e,t){r[e]=t}function Bpr(r,e,t){r[e]=t}function kpr(r,e,t){r[e]=t}function jpr(r,e,t){r[e]=t}function Cpr(r,e,t){r[e]=t}function Gpr(r){var e=_b[r];return typeof e=="function"?e:_b.default}Lb.exports=Gpr});var L2=s((Nne,Rb)=>{"use strict";var Vpr=Pb();Rb.exports=Vpr});var Mb=s((Ane,Fb)=>{"use strict";var Upr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};Fb.exports=Upr});var kb=s((Sne,Bb)=>{"use strict";var Hpr=ir(),Wpr=typeof Float32Array=="function";function Dpr(r){return Wpr&&r instanceof Float32Array||Hpr(r)==="[object Float32Array]"}Bb.exports=Dpr});var Cb=s((One,jb)=>{"use strict";var zpr=kb();jb.exports=zpr});var Vb=s((Tne,Gb)=>{"use strict";var Xpr=typeof Float32Array=="function"?Float32Array:null;Gb.exports=Xpr});var Wb=s((Ine,Hb)=>{"use strict";var Jpr=Cb(),xpr=_(),Ub=Vb();function Ypr(){var r,e;if(typeof Ub!="function")return!1;try{e=new Ub([1,3.14,-3.14,5e40]),r=Jpr(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===xpr}catch{r=!1}return r}Hb.exports=Ypr});var zb=s((_ne,Db)=>{"use strict";var Zpr=Wb();Db.exports=Zpr});var Jb=s((Lne,Xb)=>{"use strict";var $pr=typeof Float32Array=="function"?Float32Array:void 0;Xb.exports=$pr});var Yb=s((Pne,xb)=>{"use strict";function Qpr(){throw new Error("not implemented")}xb.exports=Qpr});var ne=s((Rne,Zb)=>{"use strict";var Kpr=zb(),r7r=Jb(),e7r=Yb(),P2;Kpr()?P2=r7r:P2=e7r;Zb.exports=P2});var Qb=s((Fne,$b)=>{"use strict";var t7r=ir(),i7r=typeof Int32Array=="function";function n7r(r){return i7r&&r instanceof Int32Array||t7r(r)==="[object Int32Array]"}$b.exports=n7r});var Pa=s((Mne,Kb)=>{"use strict";var a7r=Qb();Kb.exports=a7r});var ei=s((Bne,rw)=>{"use strict";var s7r=2147483647;rw.exports=s7r});var tw=s((kne,ew)=>{"use strict";var u7r=-2147483648;ew.exports=u7r});var nw=s((jne,iw)=>{"use strict";var o7r=typeof Int32Array=="function"?Int32Array:null;iw.exports=o7r});var uw=s((Cne,sw)=>{"use strict";var f7r=Pa(),v7r=ei(),c7r=tw(),aw=nw();function l7r(){var r,e;if(typeof aw!="function")return!1;try{e=new aw([1,3.14,-3.14,v7r+1]),r=f7r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===c7r}catch{r=!1}return r}sw.exports=l7r});var fw=s((Gne,ow)=>{"use strict";var p7r=uw();ow.exports=p7r});var cw=s((Vne,vw)=>{"use strict";var g7r=typeof Int32Array=="function"?Int32Array:void 0;vw.exports=g7r});var pw=s((Une,lw)=>{"use strict";function m7r(){throw new Error("not implemented")}lw.exports=m7r});var _t=s((Hne,gw)=>{"use strict";var d7r=fw(),h7r=cw(),q7r=pw(),R2;d7r()?R2=h7r:R2=q7r;gw.exports=R2});var dw=s((Wne,mw)=>{"use strict";var y7r=ir(),b7r=typeof Int16Array=="function";function w7r(r){return b7r&&r instanceof Int16Array||y7r(r)==="[object Int16Array]"}mw.exports=w7r});var qw=s((Dne,hw)=>{"use strict";var E7r=dw();hw.exports=E7r});var bw=s((zne,yw)=>{"use strict";var N7r=32767;yw.exports=N7r});var Ew=s((Xne,ww)=>{"use strict";var A7r=-32768;ww.exports=A7r});var Aw=s((Jne,Nw)=>{"use strict";var S7r=typeof Int16Array=="function"?Int16Array:null;Nw.exports=S7r});var Tw=s((xne,Ow)=>{"use strict";var O7r=qw(),T7r=bw(),I7r=Ew(),Sw=Aw();function _7r(){var r,e;if(typeof Sw!="function")return!1;try{e=new Sw([1,3.14,-3.14,T7r+1]),r=O7r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===I7r}catch{r=!1}return r}Ow.exports=_7r});var _w=s((Yne,Iw)=>{"use strict";var L7r=Tw();Iw.exports=L7r});var Pw=s((Zne,Lw)=>{"use strict";var P7r=typeof Int16Array=="function"?Int16Array:void 0;Lw.exports=P7r});var Fw=s(($ne,Rw)=>{"use strict";function R7r(){throw new Error("not implemented")}Rw.exports=R7r});var sn=s((Qne,Mw)=>{"use strict";var F7r=_w(),M7r=Pw(),B7r=Fw(),F2;F7r()?F2=M7r:F2=B7r;Mw.exports=F2});var kw=s((Kne,Bw)=>{"use strict";var k7r=ir(),j7r=typeof Uint8ClampedArray=="function";function C7r(r){return j7r&&r instanceof Uint8ClampedArray||k7r(r)==="[object Uint8ClampedArray]"}Bw.exports=C7r});var Cw=s((rae,jw)=>{"use strict";var G7r=kw();jw.exports=G7r});var Vw=s((eae,Gw)=>{"use strict";var V7r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;Gw.exports=V7r});var Ww=s((tae,Hw)=>{"use strict";var U7r=Cw(),Uw=Vw();function H7r(){var r,e;if(typeof Uw!="function")return!1;try{e=new Uw([-1,0,1,3.14,4.99,255,256]),r=U7r(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}Hw.exports=H7r});var zw=s((iae,Dw)=>{"use strict";var W7r=Ww();Dw.exports=W7r});var Jw=s((nae,Xw)=>{"use strict";var D7r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;Xw.exports=D7r});var Yw=s((aae,xw)=>{"use strict";function z7r(){throw new Error("not implemented")}xw.exports=z7r});var un=s((sae,Zw)=>{"use strict";var X7r=zw(),J7r=Jw(),x7r=Yw(),M2;X7r()?M2=J7r:M2=x7r;Zw.exports=M2});var Qw=s((uae,$w)=>{"use strict";var Y7r=ir(),Z7r=typeof Int8Array=="function";function $7r(r){return Z7r&&r instanceof Int8Array||Y7r(r)==="[object Int8Array]"}$w.exports=$7r});var rE=s((oae,Kw)=>{"use strict";var Q7r=Qw();Kw.exports=Q7r});var tE=s((fae,eE)=>{"use strict";var K7r=127;eE.exports=K7r});var nE=s((vae,iE)=>{"use strict";var r9r=-128;iE.exports=r9r});var sE=s((cae,aE)=>{"use strict";var e9r=typeof Int8Array=="function"?Int8Array:null;aE.exports=e9r});var fE=s((lae,oE)=>{"use strict";var t9r=rE(),i9r=tE(),n9r=nE(),uE=sE();function a9r(){var r,e;if(typeof uE!="function")return!1;try{e=new uE([1,3.14,-3.14,i9r+1]),r=t9r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===n9r}catch{r=!1}return r}oE.exports=a9r});var cE=s((pae,vE)=>{"use strict";var s9r=fE();vE.exports=s9r});var pE=s((gae,lE)=>{"use strict";var u9r=typeof Int8Array=="function"?Int8Array:void 0;lE.exports=u9r});var mE=s((mae,gE)=>{"use strict";function o9r(){throw new Error("not implemented")}gE.exports=o9r});var on=s((dae,dE)=>{"use strict";var f9r=cE(),v9r=pE(),c9r=mE(),B2;f9r()?B2=v9r:B2=c9r;dE.exports=B2});var k2=s((hae,hE)=>{"use strict";var l9r=jr().isPrimitive;function p9r(r){return l9r(r)&&r>=0}hE.exports=p9r});var j2=s((qae,qE)=>{"use strict";var g9r=jr().isObject;function m9r(r){return g9r(r)&&r.valueOf()>=0}qE.exports=m9r});var bE=s((yae,yE)=>{"use strict";var d9r=k2(),h9r=j2();function q9r(r){return d9r(r)||h9r(r)}yE.exports=q9r});var De=s((bae,EE)=>{"use strict";var wE=w(),C2=bE(),y9r=k2(),b9r=j2();wE(C2,"isPrimitive",y9r);wE(C2,"isObject",b9r);EE.exports=C2});var AE=s((wae,NE)=>{"use strict";var w9r=4294967295;NE.exports=w9r});var OE=s((Eae,SE)=>{"use strict";var E9r=Tr(),N9r=AE();function A9r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&E9r(r.length)&&r.length>=0&&r.length<=N9r}SE.exports=A9r});var Lt=s((Nae,TE)=>{"use strict";var S9r=OE();TE.exports=S9r});var _E=s((Aae,IE)=>{"use strict";var O9r=ir(),T9r=typeof ArrayBuffer=="function";function I9r(r){return T9r&&r instanceof ArrayBuffer||O9r(r)==="[object ArrayBuffer]"}IE.exports=I9r});var G2=s((Sae,LE)=>{"use strict";var _9r=_E();LE.exports=_9r});var RE=s((Oae,PE)=>{"use strict";function L9r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}PE.exports=L9r});var ME=s((Tae,FE)=>{"use strict";function P9r(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}FE.exports=P9r});var GE=s((Iae,CE)=>{"use strict";var BE=k().isPrimitive,kE=Be(),fn=w(),jE=y(),R9r=RE(),F9r=ME();function Pt(r,e){if(!(this instanceof Pt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!BE(r))throw new TypeError(jE("invalid argument. Real component must be a number. Value: `%s`.",r));if(!BE(e))throw new TypeError(jE("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return kE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),kE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}fn(Pt,"BYTES_PER_ELEMENT",8);fn(Pt.prototype,"BYTES_PER_ELEMENT",8);fn(Pt.prototype,"byteLength",16);fn(Pt.prototype,"toString",R9r);fn(Pt.prototype,"toJSON",F9r);CE.exports=Pt});var ti=s((_ae,VE)=>{"use strict";var M9r=GE();VE.exports=M9r});var HE=s((Lae,UE)=>{"use strict";var B9r=typeof Math.fround=="function"?Math.fround:null;UE.exports=B9r});var zE=s((Pae,DE)=>{"use strict";var k9r=ne(),WE=new k9r(1);function j9r(r){return WE[0]=r,WE[0]}DE.exports=j9r});var xE=s((Rae,JE)=>{"use strict";var XE=HE(),C9r=zE(),V2;typeof XE=="function"?V2=XE:V2=C9r;JE.exports=V2});var ZE=s((Fae,YE)=>{"use strict";function G9r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}YE.exports=G9r});var QE=s((Mae,$E)=>{"use strict";function V9r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}$E.exports=V9r});var nN=s((Bae,iN)=>{"use strict";var KE=k().isPrimitive,rN=Be(),vn=w(),eN=xE(),tN=y(),U9r=ZE(),H9r=QE();function Rt(r,e){if(!(this instanceof Rt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!KE(r))throw new TypeError(tN("invalid argument. Real component must be a number. Value: `%s`.",r));if(!KE(e))throw new TypeError(tN("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return rN(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:eN(r)}),rN(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:eN(e)}),this}vn(Rt,"BYTES_PER_ELEMENT",4);vn(Rt.prototype,"BYTES_PER_ELEMENT",4);vn(Rt.prototype,"byteLength",8);vn(Rt.prototype,"toString",U9r);vn(Rt.prototype,"toJSON",H9r);iN.exports=Rt});var ii=s((kae,aN)=>{"use strict";var W9r=nN();aN.exports=W9r});var uN=s((jae,sN)=>{"use strict";var D9r=ti(),z9r=ii();function X9r(r){return r instanceof D9r||r instanceof z9r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}sN.exports=X9r});var Ur=s((Cae,oN)=>{"use strict";var J9r=uN();oN.exports=J9r});var vN=s((Gae,fN)=>{"use strict";var x9r=S(),Ra=du();function Y9r(){return typeof Ra=="function"&&typeof Ra("foo")=="symbol"&&x9r(Ra,"iterator")&&typeof Ra.iterator=="symbol"}fN.exports=Y9r});var Fa=s((Vae,cN)=>{"use strict";var Z9r=vN();cN.exports=Z9r});var pN=s((Uae,lN)=>{"use strict";var $9r=Fa(),Q9r=$9r()?Symbol.iterator:null;lN.exports=Q9r});var Ma=s((Hae,gN)=>{"use strict";var K9r=pN();gN.exports=K9r});var dN=s((Wae,mN)=>{"use strict";var rgr=Be();function egr(r,e,t){rgr(r,e,{configurable:!1,enumerable:!1,get:t})}mN.exports=egr});var R=s((Dae,hN)=>{"use strict";var tgr=dN();hN.exports=tgr});var yN=s((zae,qN)=>{"use strict";function igr(r){return r.re}qN.exports=igr});var ze=s((Xae,bN)=>{"use strict";var ngr=yN();bN.exports=ngr});var EN=s((Jae,wN)=>{"use strict";function agr(r){return r.im}wN.exports=agr});var Xe=s((xae,NN)=>{"use strict";var sgr=EN();NN.exports=sgr});var SN=s((Yae,AN)=>{"use strict";var ugr=ne();function ogr(r,e){return new ugr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}AN.exports=ogr});var ni=s((Zae,ON)=>{"use strict";var fgr=SN();ON.exports=fgr});var IN=s(($ae,TN)=>{"use strict";var vgr=mr();function cgr(r,e){return new vgr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}TN.exports=cgr});var ai=s((Qae,_N)=>{"use strict";var lgr=IN();_N.exports=lgr});var RN=s((Kae,PN)=>{"use strict";var LN={float64:pgr,float32:ggr,int32:mgr,int16:dgr,int8:hgr,uint32:qgr,uint16:ygr,uint8:bgr,uint8c:wgr,generic:Egr,default:Ngr};function pgr(r,e){return r[e]}function ggr(r,e){return r[e]}function mgr(r,e){return r[e]}function dgr(r,e){return r[e]}function hgr(r,e){return r[e]}function qgr(r,e){return r[e]}function ygr(r,e){return r[e]}function bgr(r,e){return r[e]}function wgr(r,e){return r[e]}function Egr(r,e){return r[e]}function Ngr(r,e){return r[e]}function Agr(r){var e=LN[r];return typeof e=="function"?e:LN.default}PN.exports=Agr});var Ba=s((r0e,FN)=>{"use strict";var Sgr=RN();FN.exports=Sgr});var kN=s((e0e,BN)=>{"use strict";var MN={complex128:Ogr,complex64:Tgr,default:Igr};function Ogr(r,e){return r.get(e)}function Tgr(r,e){return r.get(e)}function Igr(r,e){return r.get(e)}function _gr(r){var e=MN[r];return typeof e=="function"?e:MN.default}BN.exports=_gr});var ka=s((t0e,jN)=>{"use strict";var Lgr=kN();jN.exports=Lgr});var GN=s((i0e,CN)=>{"use strict";var Pgr=Lt(),Rgr=Ur(),Fgr=ze(),Mgr=Xe(),Bgr=y();function kgr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,Pgr(i)&&i.length>=2)e.push(i[0],i[1]);else if(Rgr(i))e.push(Fgr(i),Mgr(i));else return new TypeError(Bgr("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}CN.exports=kgr});var UN=s((n0e,VN)=>{"use strict";var jgr=Lt(),Cgr=Ur(),Ggr=ze(),Vgr=Xe(),Ugr=y();function Hgr(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),jgr(a)&&a.length>=2)i.push(a[0],a[1]);else if(Cgr(a))i.push(Ggr(a),Vgr(a));else return new TypeError(Ugr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}VN.exports=Hgr});var WN=s((a0e,HN)=>{"use strict";var Wgr=Ur(),Dgr=ze(),zgr=Xe();function Xgr(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!Wgr(i))return null;r[a]=Dgr(i),r[a+1]=zgr(i),a+=2}return r}HN.exports=Xgr});var QN=s((s0e,$N)=>{"use strict";var cn=De().isPrimitive,DN=Lt(),H2=Cr(),zN=G2(),XN=$n(),Jgr=cr(),Ft=L(),si=Ur(),ja=ga(),U2=Tr(),xgr=Fa(),ui=Ma(),dr=w(),Va=R(),Rr=ne(),JN=ii(),x=y(),Ca=ze(),Ga=Xe(),Ygr=ni(),Zgr=ai(),$gr=Ba(),Qgr=ka(),xN=GN(),Kgr=UN(),rmr=WN(),_r=Rr.BYTES_PER_ELEMENT*2,YN=xgr();function oi(r){return r instanceof rr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function ZN(r){return r===rr||r.name==="Complex128Array"}function emr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===_r}function tmr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===_r*2}function rr(){var r,e,t,i;if(e=arguments.length,!(this instanceof rr))return e===0?new rr:e===1?new rr(arguments[0]):e===2?new rr(arguments[0],arguments[1]):new rr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Rr(0);else if(e===1)if(cn(arguments[0]))t=new Rr(arguments[0]*2);else if(H2(arguments[0]))if(t=arguments[0],i=t.length,i&&Jgr(t)&&si(t[0])){if(t=rmr(new Rr(i*2),t),t===null){if(!ja(i))throw new RangeError(x("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Rr(arguments[0])}}else{if(emr(t))t=Ygr(t,0);else if(tmr(t))t=Zgr(t,0);else if(!ja(i))throw new RangeError(x("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Rr(t)}else if(zN(arguments[0])){if(t=arguments[0],!U2(t.byteLength/_r))throw new RangeError(x("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",_r,t.byteLength));t=new Rr(t)}else if(XN(arguments[0])){if(t=arguments[0],YN===!1)throw new TypeError(x("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ft(t[ui]))throw new TypeError(x("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ui](),!Ft(t.next))throw new TypeError(x("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=xN(t),t instanceof Error)throw t;t=new Rr(t)}else throw new TypeError(x("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!zN(t))throw new TypeError(x("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!cn(r))throw new TypeError(x("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!U2(r/_r))throw new RangeError(x("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",_r,r));if(e===2){if(i=t.byteLength-r,!U2(i/_r))throw new RangeError(x("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",_r,i));t=new Rr(t,r)}else{if(i=arguments[2],!cn(i))throw new TypeError(x("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*_r>t.byteLength-r)throw new RangeError(x("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*_r));t=new Rr(t,r,i*2)}}return dr(this,"_buffer",t),dr(this,"_length",t.length/2),this}dr(rr,"BYTES_PER_ELEMENT",_r);dr(rr,"name","Complex64Array");dr(rr,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,m;if(!Ft(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ZN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Ft(n))throw new TypeError(x("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(oi(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),si(l))u[m]=Ca(l),u[m+1]=Ga(l);else if(DN(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(x("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(H2(e)){if(n){for(f=e.length,e.get&&e.set?v=Qgr("default"):v=$gr("default"),p=0;p<f;p++)if(!si(v(e,p))){c=!0;break}if(c){if(!ja(f))throw new RangeError(x("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),si(l))u[m]=Ca(l),u[m+1]=Ga(l);else if(DN(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(x("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(XN(e)&&YN&&Ft(e[ui])){if(u=e[ui](),!Ft(u.next))throw new TypeError(x("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=Kgr(u,n,t):o=xN(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError(x("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});dr(rr,"of",function(){var e,t;if(!Ft(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ZN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Va(rr.prototype,"buffer",function(){return this._buffer.buffer});Va(rr.prototype,"byteLength",function(){return this._buffer.byteLength});Va(rr.prototype,"byteOffset",function(){return this._buffer.byteOffset});dr(rr.prototype,"BYTES_PER_ELEMENT",rr.BYTES_PER_ELEMENT);dr(rr.prototype,"copyWithin",function(e,t){if(!oi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});dr(rr.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!oi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},dr(i,"next",v),dr(i,"return",f),ui&&dr(i,ui,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new JN(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});dr(rr.prototype,"get",function(e){var t;if(!oi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!cn(e))throw new TypeError(x("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new JN(t[e],t[e+1])});Va(rr.prototype,"length",function(){return this._length});dr(rr.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!oi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!cn(i))throw new TypeError(x("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(si(e)){if(i>=this._length)throw new RangeError(x("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ca(e),n[i+1]=Ga(e);return}if(oi(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*_r,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Rr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(H2(e)){for(o=e.length,f=0;f<o;f++)if(!si(e[f])){u=!0;break}if(u){if(!ja(o))throw new RangeError(x("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*_r,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Rr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=Ca(v),n[i+1]=Ga(v),i+=2;return}throw new TypeError(x("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});$N.exports=rr});var ln=s((u0e,KN)=>{"use strict";var imr=QN();KN.exports=imr});var eA=s((o0e,rA)=>{"use strict";function nmr(r){return r.re}rA.exports=nmr});var Je=s((f0e,tA)=>{"use strict";var amr=eA();tA.exports=amr});var nA=s((v0e,iA)=>{"use strict";function smr(r){return r.im}iA.exports=smr});var xe=s((c0e,aA)=>{"use strict";var umr=nA();aA.exports=umr});var uA=s((l0e,sA)=>{"use strict";var omr=Lt(),fmr=Ur(),vmr=y(),cmr=Je(),lmr=xe();function pmr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,omr(i)&&i.length>=2)e.push(i[0],i[1]);else if(fmr(i))e.push(cmr(i),lmr(i));else return new TypeError(vmr("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}sA.exports=pmr});var fA=s((p0e,oA)=>{"use strict";var gmr=Lt(),mmr=Ur(),dmr=y(),hmr=Je(),qmr=xe();function ymr(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),gmr(a)&&a.length>=2)i.push(a[0],a[1]);else if(mmr(a))i.push(hmr(a),qmr(a));else return new TypeError(dmr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}oA.exports=ymr});var cA=s((g0e,vA)=>{"use strict";var bmr=Ur(),wmr=Je(),Emr=xe();function Nmr(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!bmr(i))return null;r[a]=wmr(i),r[a+1]=Emr(i),a+=2}return r}vA.exports=Nmr});var bA=s((m0e,yA)=>{"use strict";var pn=De().isPrimitive,lA=Lt(),D2=Cr(),pA=G2(),gA=$n(),Amr=cr(),Mt=L(),fi=Ur(),Ua=ga(),W2=Tr(),Smr=Fa(),vi=Ma(),hr=w(),Da=R(),Fr=mr(),mA=ti(),Ha=Je(),Wa=xe(),Omr=ni(),Tmr=ai(),Imr=Ba(),_mr=ka(),Y=y(),dA=uA(),Lmr=fA(),Pmr=cA(),Lr=Fr.BYTES_PER_ELEMENT*2,hA=Smr();function ci(r){return r instanceof er||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function qA(r){return r===er||r.name==="Complex64Array"}function Rmr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Lr/2}function Fmr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Lr}function er(){var r,e,t,i;if(e=arguments.length,!(this instanceof er))return e===0?new er:e===1?new er(arguments[0]):e===2?new er(arguments[0],arguments[1]):new er(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Fr(0);else if(e===1)if(pn(arguments[0]))t=new Fr(arguments[0]*2);else if(D2(arguments[0]))if(t=arguments[0],i=t.length,i&&Amr(t)&&fi(t[0])){if(t=Pmr(new Fr(i*2),t),t===null){if(!Ua(i))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(arguments[0])}}else{if(Rmr(t))t=Omr(t,0);else if(Fmr(t))t=Tmr(t,0);else if(!Ua(i))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(t)}else if(pA(arguments[0])){if(t=arguments[0],!W2(t.byteLength/Lr))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Lr,t.byteLength));t=new Fr(t)}else if(gA(arguments[0])){if(t=arguments[0],hA===!1)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Mt(t[vi]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[vi](),!Mt(t.next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=dA(t),t instanceof Error)throw t;t=new Fr(t)}else throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!pA(t))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!pn(r))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!W2(r/Lr))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Lr,r));if(e===2){if(i=t.byteLength-r,!W2(i/Lr))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Lr,i));t=new Fr(t,r)}else{if(i=arguments[2],!pn(i))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Lr>t.byteLength-r)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Lr));t=new Fr(t,r,i*2)}}return hr(this,"_buffer",t),hr(this,"_length",t.length/2),this}hr(er,"BYTES_PER_ELEMENT",Lr);hr(er,"name","Complex128Array");hr(er,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,m;if(!Mt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Mt(n))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(ci(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),fi(l))u[m]=Ha(l),u[m+1]=Wa(l);else if(lA(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(D2(e)){if(n){for(f=e.length,e.get&&e.set?v=_mr("default"):v=Imr("default"),p=0;p<f;p++)if(!fi(v(e,p))){c=!0;break}if(c){if(!Ua(f))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),fi(l))u[m]=Ha(l),u[m+1]=Wa(l);else if(lA(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(gA(e)&&hA&&Mt(e[vi])){if(u=e[vi](),!Mt(u.next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=Lmr(u,n,t):o=dA(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});hr(er,"of",function(){var e,t;if(!Mt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Da(er.prototype,"buffer",function(){return this._buffer.buffer});Da(er.prototype,"byteLength",function(){return this._buffer.byteLength});Da(er.prototype,"byteOffset",function(){return this._buffer.byteOffset});hr(er.prototype,"BYTES_PER_ELEMENT",er.BYTES_PER_ELEMENT);hr(er.prototype,"copyWithin",function(e,t){if(!ci(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});hr(er.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!ci(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},hr(i,"next",v),hr(i,"return",f),vi&&hr(i,vi,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new mA(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});hr(er.prototype,"get",function(e){var t;if(!ci(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!pn(e))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new mA(t[e],t[e+1])});Da(er.prototype,"length",function(){return this._length});hr(er.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!ci(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!pn(i))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(fi(e)){if(i>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ha(e),n[i+1]=Wa(e);return}if(ci(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(D2(e)){for(o=e.length,f=0;f<o;f++)if(!fi(e[f])){u=!0;break}if(u){if(!Ua(o))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=Ha(v),n[i+1]=Wa(v),i+=2;return}throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});yA.exports=er});var gn=s((d0e,wA)=>{"use strict";var Mmr=bA();wA.exports=Mmr});var NA=s((h0e,EA)=>{"use strict";var Bmr=mr(),kmr=ne(),jmr=lr(),Cmr=_t(),Gmr=xt(),Vmr=sn(),Umr=Jt(),Hmr=un(),Wmr=on(),Dmr=ln(),zmr=gn(),Xmr=[Bmr,kmr,Cmr,jmr,Vmr,Gmr,Wmr,Umr,Hmr,Dmr,zmr];EA.exports=Xmr});var SA=s((q0e,AA)=>{"use strict";var Jmr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];AA.exports=Jmr});var IA=s((y0e,TA)=>{"use strict";var xmr=bt(),Ymr=cr(),Zmr=ke(),$mr=Mb(),Qmr=NA(),OA=SA(),Kmr=OA.length;function rdr(r){var e;if(Ymr(r))return"generic";if(xmr(r))return null;for(e=0;e<Kmr;e++)if(r instanceof Qmr[e])return OA[e];return $mr[Zmr(r)]||null}TA.exports=rdr});var za=s((b0e,_A)=>{"use strict";var edr=IA();_A.exports=edr});var RA=s((w0e,PA)=>{"use strict";var LA=L(),tdr=Cr(),idr=bb(),ndr=I2(),adr=_2(),sdr=L2(),udr=za(),z2=y();function odr(){var r,e,t,i,n,a,u,o,v;if(r=arguments[0],arguments.length>1)if(tdr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!LA(t))throw new TypeError(z2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!LA(t))throw new TypeError(z2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!idr(r))throw new TypeError(z2("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,v=r.next(),!v.done;)i.push(t.call(e,v.value,o));return i}for(;v=r.next(),!v.done;)i.push(v.value);return i}if(n=i.length,u=udr(i),ndr(i)?a=adr(u):a=sdr(u),t){for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,t.call(e,v.value,o));return i}for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,v.value);return i}PA.exports=odr});var MA=s((E0e,FA)=>{"use strict";var fdr=RA();FA.exports=fdr});var kA=s((N0e,BA)=>{"use strict";function vdr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}BA.exports=vdr});var CA=s((A0e,jA)=>{"use strict";function cdr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}jA.exports=cdr});var UA=s((S0e,VA)=>{"use strict";var ldr=tr(),GA=ee(),pdr=kA(),gdr=CA(),mdr=.7853981633974483,ddr=3061616997868383e-32,hdr=.3333333333333341,qdr=2147483647;function ydr(r,e,t){var i,n,a,u,o,v,f,c,l;return i=ldr(r),n=i&qdr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=mdr-r,c=ddr-e,r=l+c,e=0),l=r*r,c=l*l,u=pdr(c),f=l*gdr(c),o=l*r,u=e+l*(o*(u+f)+e),u+=hdr*o,c=r+u,n>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(c*c/(c+f)-u)))):t===1?c:(l=GA(c,0),f=u-(l-r),a=-1/c,v=GA(a,0),o=1+v*l,v+a*(o+v*f))}VA.exports=ydr});var WA=s((O0e,HA)=>{"use strict";var bdr=UA();HA.exports=bdr});var XA=s((T0e,zA)=>{"use strict";var wdr=tr(),DA=WA(),Edr=Yi(),X2=[0,0],Ndr=2147483647,Adr=1072243195,Sdr=2146435072,Odr=1044381696;function Tdr(r){var e,t;return e=wdr(r),e&=Ndr,e<=Adr?e<Odr?r:DA(r,0,1):e>=Sdr?NaN:(t=Edr(r,X2),DA(X2[0],X2[1],1-((t&1)<<1)))}zA.exports=Tdr});var J2=s((I0e,JA)=>{"use strict";var Idr=XA();JA.exports=Idr});var Xa=s((_0e,xA)=>{"use strict";var _dr=1.5707963267948966;xA.exports=_dr});var Ja=s((L0e,YA)=>{"use strict";var Ldr=.7853981633974483;YA.exports=Ldr});var $A=s((P0e,ZA)=>{"use strict";function Pdr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}ZA.exports=Pdr});var KA=s((R0e,QA)=>{"use strict";function Rdr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}QA.exports=Rdr});var tS=s((F0e,eS)=>{"use strict";var Fdr=E(),Mdr=_(),x2=Xa(),Bdr=Ja(),kdr=V(),jdr=$A(),Cdr=KA(),rS=6123233995736766e-32,Gdr=2.414213562373095;function Vdr(r){var e,t,i,n;return Fdr(r)||r===0?r:r===Mdr?x2:r===kdr?-x2:(r<0&&(t=!0,r=-r),e=0,r>Gdr?(i=x2,e=1,r=-(1/r)):r<=.66?i=0:(i=Bdr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*jdr(n)/Cdr(n),n=r*n+r,e===2?n+=.5*rS:e===1&&(n+=rS),i+=n,t?-i:i)}eS.exports=Vdr});var xa=s((M0e,iS)=>{"use strict";var Udr=tS();iS.exports=Udr});var Y2=s((B0e,nS)=>{"use strict";var Hdr=k().isPrimitive;function Wdr(r){return Hdr(r)&&r>=0}nS.exports=Wdr});var Z2=s((k0e,aS)=>{"use strict";var Ddr=k().isObject;function zdr(r){return Ddr(r)&&r.valueOf()>=0}aS.exports=zdr});var uS=s((j0e,sS)=>{"use strict";var Xdr=Y2(),Jdr=Z2();function xdr(r){return Xdr(r)||Jdr(r)}sS.exports=xdr});var Q2=s((C0e,fS)=>{"use strict";var oS=w(),$2=uS(),Ydr=Y2(),Zdr=Z2();oS($2,"isPrimitive",Ydr);oS($2,"isObject",Zdr);fS.exports=$2});var cS=s((G0e,vS)=>{"use strict";var $dr=I(),Ya=S(),Qdr=jr().isPrimitive,Kdr=ie().isPrimitive,rhr=De().isPrimitive,ehr=Q2().isPrimitive,mn=y();function thr(r,e){return $dr(e)?Ya(e,"period")&&(r.period=e.period,!Kdr(e.period))?new TypeError(mn("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):Ya(e,"amplitude")&&(r.amplitude=e.amplitude,!ehr(e.amplitude))?new TypeError(mn("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):Ya(e,"offset")&&(r.offset=e.offset,!Qdr(e.offset))?new TypeError(mn("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):Ya(e,"iter")&&(r.iter=e.iter,!rhr(e.iter))?new TypeError(mn("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(mn("invalid argument. Options argument must be an object. Value: `%s`.",e))}vS.exports=thr});var mS=s((V0e,gS)=>{"use strict";var K2=w(),lS=Ma(),ihr=J2(),nhr=xa(),ahr=Xa(),shr=Ir(),uhr=cS();function pS(r){var e,t,i,n,a,u,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=uhr(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=shr/e.period,o=e.amplitude/ahr,v=0,t={},K2(t,"next",f),K2(t,"return",c),lS&&K2(t,lS,l),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*nhr(ihr(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return pS(e)}}gS.exports=pS});var hS=s((U0e,dS)=>{"use strict";var ohr=mS();dS.exports=ohr});var yS=s((H0e,qS)=>{"use strict";var fhr={Complex64:"complex64",Complex128:"complex128"};qS.exports=fhr});var wS=s((W0e,bS)=>{"use strict";var vhr=ii(),chr=ti(),lhr=[vhr,chr];bS.exports=lhr});var NS=s((D0e,ES)=>{"use strict";var phr=["complex64","complex128"];ES.exports=phr});var OS=s((z0e,SS)=>{"use strict";var ghr=ke(),mhr=yS(),dhr=wS(),AS=NS(),hhr=AS.length;function qhr(r){var e;for(e=0;e<hhr;e++)if(r instanceof dhr[e])return AS[e];return mhr[ghr(r)]||null}SS.exports=qhr});var r1=s((X0e,TS)=>{"use strict";var yhr=OS();TS.exports=yhr});var _S=s((J0e,IS)=>{"use strict";var bhr=mr(),whr=ne(),Ehr=gn(),Nhr=ln(),Ahr={float64:bhr,float32:whr,complex128:Ehr,complex64:Nhr};IS.exports=Ahr});var PS=s((x0e,LS)=>{"use strict";var Shr=_S();function Ohr(r){return Shr[r]||null}LS.exports=Ohr});var FS=s((Y0e,RS)=>{"use strict";var Thr=PS();RS.exports=Thr});var BS=s((Z0e,MS)=>{"use strict";function Ihr(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}MS.exports=Ihr});var US=s(($0e,VS)=>{"use strict";var _hr=ii(),Lhr=ti(),kS=Je(),jS=xe(),CS=ze(),GS=Xe();function Phr(r,e,t,i,n,a){var u,o,v,f,c,l,p,m,h,d,g,q,N;if(n===0)return[];if(o=0,r==="float64"?(f=e,l=0):r==="complex64"?(o+=1,f=CS(e),l=GS(e)):(f=kS(e),l=jS(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=CS(i),p=GS(i)):(c=kS(i),p=jS(i)),o===2?u=_hr:u=Lhr,n===1)return a?[new u(c,p)]:[new u(f,l)];for(v=[new u(f,l)],a?q=n-1:q=n,d=(c-f)/q,g=(p-l)/q,N=1;N<q;N++)m=f+d*N,h=l+g*N,v.push(new u(m,h));return a&&v.push(new u(c,p)),v}VS.exports=Phr});var e1=s((Q0e,HS)=>{"use strict";function Rhr(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}HS.exports=Rhr});var t1=s((K0e,JS)=>{"use strict";var WS=Je(),DS=xe(),zS=ze(),XS=Xe();function Fhr(r,e,t,i,n,a,u){var o,v,f,c,l,p,m,h,d;if(a===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=zS(t),f=XS(t)):(o=WS(t),f=DS(t)),i==="float64"?(v=n,c=0):i==="complex64"?(v=zS(n),c=XS(n)):(v=WS(n),c=DS(n)),a===1)return u?(r[0]=v,r[1]=c):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,u?m=a-1:m=a,l=(v-o)/m,p=(c-f)/m,d=2,h=1;h<m;h++)r[d]=o+l*h,r[d+1]=f+p*h,d+=2;return u&&(r[d]=v,r[d+1]=c),r}JS.exports=Fhr});var n1=s((rse,YS)=>{"use strict";var Mhr=I(),xS=S(),Bhr=K().isPrimitive,khr=or().isPrimitive,i1=y();function jhr(r,e){return Mhr(e)?xS(e,"dtype")&&(r.dtype=e.dtype,!Bhr(r.dtype))?new TypeError(i1("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):xS(e,"endpoint")&&(r.endpoint=e.endpoint,!khr(r.endpoint))?new TypeError(i1("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(i1("invalid argument. Options argument must be an object. Value: `%s`.",e))}YS.exports=jhr});var a1=s((ese,Chr)=>{Chr.exports={endpoint:!0}});var tO=s((tse,eO)=>{"use strict";var ZS=Ur(),$S=k().isPrimitive,Ghr=De().isPrimitive,QS=E(),KS=r1(),Vhr=FS(),Uhr=ni(),Hhr=ai(),li=y(),Whr=BS(),Dhr=US(),zhr=e1(),rO=t1(),Xhr=n1(),Jhr=a1();function xhr(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(o=KS(r),o===null){if(!ZS(r))throw new TypeError(li("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}f=!0}else{if(!$S(r)||QS(r))throw new TypeError(li("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(v=KS(e),v===null){if(!ZS(e))throw new TypeError(li("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="complex128"}f=!0}else{if(!$S(e)||QS(e))throw new TypeError(li("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="float64"}if(!Ghr(t))throw new TypeError(li("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:Jhr.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=Xhr(i,arguments[3]),a))throw a;if(i.dtype==="generic")return f?Dhr(o,r,v,e,t,i.endpoint):Whr(r,e,t,i.endpoint);if(n=Vhr(i.dtype),n===null)throw new TypeError(li('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return rO(Uhr(u,0),o,r,v,e,t,i.endpoint),u;if(i.dtype==="complex128")return rO(Hhr(u,0),o,r,v,e,t,i.endpoint),u;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return zhr(u,r,e,t,i.endpoint)}eO.exports=xhr});var nO=s((ise,iO)=>{"use strict";var Yhr=I2(),Zhr=Ba(),$hr=L2(),Qhr=ka(),Khr=_2(),rqr=za();function eqr(r){var e=rqr(r);return Yhr(r)?{accessorProtocol:!0,accessors:[Qhr(e),Khr(e)]}:{accessorProtocol:!1,accessors:[Zhr(e),$hr(e)]}}iO.exports=eqr});var sO=s((nse,aO)=>{"use strict";var tqr=nO();aO.exports=tqr});var oO=s((ase,uO)=>{"use strict";var iqr=sO();function nqr(r){var e=iqr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}uO.exports=nqr});var Za=s((sse,fO)=>{"use strict";var aqr=oO();fO.exports=aqr});var mO=s((use,gO)=>{"use strict";var sqr=ii(),uqr=ti(),vO=Je(),cO=xe(),lO=ze(),pO=Xe();function oqr(r,e,t,i,n,a,u){var o,v,f,c,l,p,m,h,d,g,q,N,A,j;if(a===0)return r;if(v=0,e==="float64"?(f=t,l=0):e==="complex64"?(v+=1,f=lO(t),l=pO(t)):(f=vO(t),l=cO(t)),i==="float64"?(c=n,p=0):i==="complex64"?(v+=1,c=lO(n),p=pO(n)):(c=vO(n),p=cO(n)),v===2?o=sqr:o=uqr,h=r.data,m=r.accessors[1],a===1)return u?m(h,0,new o(c,p)):m(h,0,new o(f,l)),r;for(m(h,0,new o(f,l)),u?A=a-1:A=a,q=(c-f)/A,N=(p-l)/A,j=1;j<A;j++)d=f+q*j,g=l+N*j,m(h,j,new o(d,g));return u&&m(h,A,new o(c,p)),r}gO.exports=oqr});var hO=s((ose,dO)=>{"use strict";function fqr(r,e,t,i,n){var a,u,o,v,f;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)u(a,f,e+v*f);return n&&u(a,o,t),r}dO.exports=fqr});var SO=s((fse,AO)=>{"use strict";var qO=Ur(),yO=k().isPrimitive,vqr=Cr(),dn=y(),bO=E(),wO=r1(),cqr=za(),lqr=ni(),pqr=ai(),EO=Za(),gqr=mO(),mqr=hO(),NO=t1(),dqr=e1(),hqr=n1(),qqr=a1();function yqr(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(a=wO(r),a===null){if(!qO(r))throw new TypeError(dn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!yO(r)||bO(r))throw new TypeError(dn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=wO(e),u===null){if(!qO(e))throw new TypeError(dn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!yO(e)||bO(e))throw new TypeError(dn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!vqr(t))throw new TypeError(dn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:qqr.endpoint},arguments.length>3&&(n=hqr(i,arguments[3]),n))throw n;if(v=cqr(t),v===null&&(v="generic"),v==="complex64")return NO(lqr(t,0),a,r,u,e,t.length,i.endpoint),t;if(v==="complex128")return NO(pqr(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=EO(t),gqr(f,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=EO(t),f.accessorProtocol?(mqr(f,r,e,t.length,i.endpoint),t):(dqr(t,r,e,t.length,i.endpoint),t)}AO.exports=yqr});var IO=s((vse,TO)=>{"use strict";var bqr=w(),OO=tO(),wqr=SO();bqr(OO,"assign",wqr);TO.exports=OO});var LO=s((cse,_O)=>{"use strict";var Eqr=E(),Nqr=He();function Aqr(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],Eqr(a))return a;(a>i||a===i&&Nqr(a))&&(i=a)}return i}_O.exports=Aqr});var RO=s((lse,PO)=>{"use strict";var Sqr=E(),Oqr=He();function Tqr(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],Sqr(u))return u;(u>n||u===n&&Oqr(u))&&(n=u)}return n}PO.exports=Tqr});var BO=s((pse,MO)=>{"use strict";var Iqr=w(),FO=LO(),_qr=RO();Iqr(FO,"ndarray",_qr);MO.exports=FO});var jO=s((gse,kO)=>{"use strict";var Lqr=BO();kO.exports=Lqr});var VO=s((mse,GO)=>{"use strict";var CO=E(),Pqr=He();function Rqr(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,f=0;f<r&&i[o]!==0;f++)u+=t,o+=n;if(f===r)return NaN;if(a=e[u],CO(a))return a;for(f+=1,f;f<r;f++)if(u+=t,o+=n,!i[o]){if(v=e[u],CO(v))return v;(v>a||v===a&&Pqr(v))&&(a=v)}return a}GO.exports=Rqr});var WO=s((dse,HO)=>{"use strict";var UO=E(),Fqr=He();function Mqr(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return NaN;for(v=i,f=u,l=0;l<r&&n[f]!==0;l++)v+=t,f+=a;if(l===r)return NaN;if(o=e[v],UO(o))return o;for(l+=1,l;l<r;l++)if(v+=t,f+=a,!n[f]){if(c=e[v],UO(c))return c;(c>o||c===o&&Fqr(c))&&(o=c)}return o}HO.exports=Mqr});var XO=s((hse,zO)=>{"use strict";var Bqr=w(),DO=VO(),kqr=WO();Bqr(DO,"ndarray",kqr);zO.exports=DO});var xO=s((qse,JO)=>{"use strict";var jqr=k().isPrimitive,Cqr=K().isPrimitive,Gqr=or().isPrimitive,Vqr=cr(),Uqr=y(),Hqr={number:jqr,string:Cqr,boolean:Gqr};function Wqr(r,e,t){var i,n,a,u,o,v;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],v=0;v<r.length;v++)if(o=r[v],a=e[v],u=Hqr[a],u(o))i.push([[o]]),n.push([1,1]);else if(Vqr(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(Uqr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[v],a,a,String(o)));return[i,n]}JO.exports=Wqr});var s1=s((yse,YO)=>{"use strict";var Dqr=xO();YO.exports=Dqr});var $O=s((bse,ZO)=>{"use strict";var zqr=La();function Xqr(r){return zqr(1,r)}ZO.exports=Xqr});var KO=s((wse,QO)=>{"use strict";var Jqr=$O();QO.exports=Jqr});var eT=s((Ese,rT)=>{"use strict";var xqr=La();function Yqr(r){return xqr(0,r)}rT.exports=Yqr});var u1=s((Nse,tT)=>{"use strict";var Zqr=eT();tT.exports=Zqr});var aT=s((Ase,nT)=>{"use strict";var iT=y();function $qr(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(iT('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(iT('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}nT.exports=$qr});var uT=s((Sse,sT)=>{"use strict";var Qqr=aT();sT.exports=Qqr});var fT=s((Ose,oT)=>{"use strict";var Kqr=k().isPrimitive,ryr=uT(),eyr=y();function tyr(r,e,t,i,n,a){var u,o;if(!(Kqr(r)&&ryr(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(eyr("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}oT.exports=tyr});var cT=s((Tse,vT)=>{"use strict";var iyr=fT();vT.exports=iyr});var pT=s((Ise,lT)=>{"use strict";var nyr=or().isPrimitive,ayr=y();function syr(r,e){if(!nyr(r))throw new TypeError(ayr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}lT.exports=syr});var mT=s((_se,gT)=>{"use strict";var uyr=pT();gT.exports=uyr});var hT=s((Lse,dT)=>{"use strict";function oyr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}dT.exports=oyr});var yT=s((Pse,qT)=>{"use strict";var fyr=hT();qT.exports=fyr});var wT=s((Rse,bT)=>{"use strict";var vyr=y(),cyr=yT();function lyr(r,e,t){if(!cyr(r,e))throw new TypeError(vyr("invalid argument. %s must be broadcast compatible.",t))}bT.exports=lyr});var NT=s((Fse,ET)=>{"use strict";var pyr=wT();ET.exports=pyr});var ST=s((Mse,AT)=>{"use strict";function gyr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}AT.exports=gyr});var TT=s((Bse,OT)=>{"use strict";var myr=ST();OT.exports=myr});var _T=s((kse,IT)=>{"use strict";var dyr=y(),hyr=TT();function qyr(r,e,t,i){if(!hyr(r,e))throw new TypeError(dyr("invalid argument. %s must be broadcast compatible with %s.",t,i))}IT.exports=qyr});var PT=s((jse,LT)=>{"use strict";var yyr=_T();LT.exports=yyr});var FT=s((Cse,RT)=>{"use strict";var byr=y();function wyr(r,e){if(r===void 0)throw new Error(byr("invalid invocation. Must provide %s.",e))}RT.exports=wyr});var o1=s((Gse,MT)=>{"use strict";var Eyr=FT();MT.exports=Eyr});var kT=s((Vse,BT)=>{"use strict";var Nyr=y();function Ayr(r,e,t,i){if(!(r>e))throw new TypeError(Nyr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}BT.exports=Ayr});var CT=s((Use,jT)=>{"use strict";var Syr=kT();jT.exports=Syr});var VT=s((Hse,GT)=>{"use strict";var Oyr=y();function Tyr(r,e,t,i){if(!(r>=e))throw new TypeError(Oyr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}GT.exports=Tyr});var HT=s((Wse,UT)=>{"use strict";var Iyr=VT();UT.exports=Iyr});var DT=s((Dse,WT)=>{"use strict";var _yr=jr().isPrimitive,Lyr=y();function Pyr(r,e){if(!_yr(r))throw new TypeError(Lyr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}WT.exports=Pyr});var XT=s((zse,zT)=>{"use strict";var Ryr=DT();zT.exports=Ryr});var xT=s((Xse,JT)=>{"use strict";var Fyr=y();function Myr(r,e,t,i){if(!(r<e))throw new TypeError(Fyr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}JT.exports=Myr});var ZT=s((Jse,YT)=>{"use strict";var Byr=xT();YT.exports=Byr});var QT=s((xse,$T)=>{"use strict";var kyr=y();function jyr(r,e,t,i){if(!(r<=e))throw new TypeError(kyr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}$T.exports=jyr});var rI=s((Yse,KT)=>{"use strict";var Cyr=QT();KT.exports=Cyr});var tI=s((Zse,eI)=>{"use strict";var Gyr=De().isPrimitive,Vyr=y();function Uyr(r,e){if(!Gyr(r))throw new TypeError(Vyr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}eI.exports=Uyr});var nI=s(($se,iI)=>{"use strict";var Hyr=tI();iI.exports=Hyr});var sI=s((Qse,aI)=>{"use strict";var Wyr=Q2().isPrimitive,Dyr=y();function zyr(r,e){if(!Wyr(r))throw new TypeError(Dyr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}aI.exports=zyr});var oI=s((Kse,uI)=>{"use strict";var Xyr=sI();uI.exports=Xyr});var vI=s((rue,fI)=>{"use strict";var Jyr=k().isPrimitive,xyr=y();function Yyr(r,e){if(!Jyr(r))throw new TypeError(xyr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}fI.exports=Yyr});var lI=s((eue,cI)=>{"use strict";var Zyr=vI();cI.exports=Zyr});var gI=s((tue,pI)=>{"use strict";var $yr=y();function Qyr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError($yr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}pI.exports=Qyr});var dI=s((iue,mI)=>{"use strict";var Kyr=gI();mI.exports=Kyr});var qI=s((nue,hI)=>{"use strict";var rbr=ie().isPrimitive,ebr=y();function tbr(r,e){if(!rbr(r))throw new TypeError(ebr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}hI.exports=tbr});var f1=s((aue,yI)=>{"use strict";var ibr=qI();yI.exports=ibr});var wI=s((sue,bI)=>{"use strict";var nbr=D().isPrimitive,abr=y();function sbr(r,e){if(!nbr(r))throw new TypeError(abr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}bI.exports=sbr});var NI=s((uue,EI)=>{"use strict";var ubr=wI();EI.exports=ubr});var v1=s((oue,AI)=>{"use strict";var obr=k().isPrimitive;function fbr(r){return obr(r)&&r>=0&&r<=1}AI.exports=fbr});var c1=s((fue,SI)=>{"use strict";var vbr=k().isObject;function cbr(r){return vbr(r)&&r.valueOf()>=0&&r.valueOf()<=1}SI.exports=cbr});var TI=s((vue,OI)=>{"use strict";var lbr=v1(),pbr=c1();function gbr(r){return lbr(r)||pbr(r)}OI.exports=gbr});var hn=s((cue,_I)=>{"use strict";var II=w(),l1=TI(),mbr=v1(),dbr=c1();II(l1,"isPrimitive",mbr);II(l1,"isObject",dbr);_I.exports=l1});var PI=s((lue,LI)=>{"use strict";var hbr=hn().isPrimitive,qbr=y();function ybr(r,e){if(!hbr(r))throw new TypeError(qbr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}LI.exports=ybr});var FI=s((pue,RI)=>{"use strict";var bbr=PI();RI.exports=bbr});var BI=s((gue,MI)=>{"use strict";var wbr=cr(),Ebr=y();function Nbr(r,e){if(!wbr(r))throw new TypeError(Ebr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}MI.exports=Nbr});var jI=s((mue,kI)=>{"use strict";var Abr=BI();kI.exports=Abr});var GI=s((due,CI)=>{"use strict";function Sbr(r){return r.length===1||r[0].length===1}CI.exports=Sbr});var UI=s((hue,VI)=>{"use strict";var Obr=GI();VI.exports=Obr});var WI=s((que,HI)=>{"use strict";var Tbr=cr(),Ibr=UI();function _br(r){return Tbr(r)&&Ibr(r)}HI.exports=_br});var zI=s((yue,DI)=>{"use strict";var Lbr=WI();DI.exports=Lbr});var JI=s((bue,XI)=>{"use strict";var Pbr=y(),Rbr=zI();function Fbr(r,e){if(!Rbr(r))throw new TypeError(Pbr("invalid argument. %s must consist of only a single row or a single column.",e))}XI.exports=Fbr});var YI=s((wue,xI)=>{"use strict";var Mbr=JI();xI.exports=Mbr});var $I=s((Eue,ZI)=>{"use strict";function Bbr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}ZI.exports=Bbr});var KI=s((Nue,QI)=>{"use strict";var kbr=$I();QI.exports=kbr});var e_=s((Aue,r_)=>{"use strict";var jbr=y(),Cbr=KI();function Gbr(r,e,t){if(!Cbr(r,e))throw new TypeError(jbr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}r_.exports=Gbr});var i_=s((Sue,t_)=>{"use strict";var Vbr=e_();t_.exports=Vbr});var a_=s((Oue,n_)=>{"use strict";var Ubr=K().isPrimitive,Hbr=y();function Wbr(r,e){if(!Ubr(r))throw new TypeError(Hbr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}n_.exports=Wbr});var u_=s((Tue,s_)=>{"use strict";var Dbr=a_();s_.exports=Dbr});var f_=s((Iue,o_)=>{"use strict";var zbr=y();function Xbr(r){throw new Error(zbr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}o_.exports=Xbr});var c_=s((_ue,v_)=>{"use strict";var Jbr=f_();v_.exports=Jbr});var g_=s((Lue,p_)=>{"use strict";var l_=f1(),xbr=o1();function Ybr(r,e,t){l_(r,"Number of rows"),l_(e,"Number of columns"),xbr(t,"a pseudorandom number generator seed")}p_.exports=Ybr});var d_=s((Pue,m_)=>{"use strict";var Zbr=g_();m_.exports=Zbr});var q_=s((Rue,h_)=>{"use strict";var Z={};Z.isBetween=cT();Z.isBoolean=mT();Z.isBroadcastCompatible=NT();Z.isBroadcastCompatibleWith=PT();Z.isDefined=o1();Z.isGreaterThan=CT();Z.isGreaterThanEqual=HT();Z.isInteger=XT();Z.isLessThan=ZT();Z.isLessThanEqual=rI();Z.isNonNegativeInteger=nI();Z.isNonNegativeNumber=oI();Z.isNumber=lI();Z.isOneOf=dI();Z.isPositiveInteger=f1();Z.isPositiveNumber=NI();Z.isProbability=FI();Z.isRange=jI();Z.isRange1d=YI();Z.isSameShape=i_();Z.isString=u_();Z.unrecognizedOptionName=c_();Z.verifyCommonPRNGArgs=d_();h_.exports=Z});var b_=s((Fue,y_)=>{"use strict";var p1=4;function $br(r,e,t,i,n,a){var u,o,v,f;if(r<=0||e===0)return n;if(i===1&&a===1){if(v=r%p1,v>0)for(f=0;f<v;f++)n[f]+=e*t[f];if(r<p1)return n;for(f=v;f<r;f+=p1)n[f]+=e*t[f],n[f+1]+=e*t[f+1],n[f+2]+=e*t[f+2],n[f+3]+=e*t[f+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,f=0;f<r;f++)n[o]+=e*t[u],u+=i,o+=a;return n}y_.exports=$br});var E_=s((Mue,w_)=>{"use strict";var qn=4;function Qbr(r,e,t,i,n,a,u,o){var v,f,c,l;if(r<=0||e===0)return a;if(v=n,f=o,i===1&&u===1){if(c=r%qn,c>0)for(l=0;l<c;l++)a[f]+=e*t[v],v+=i,f+=u;if(r<qn)return a;for(l=c;l<r;l+=qn)a[f]+=e*t[v],a[f+1]+=e*t[v+1],a[f+2]+=e*t[v+2],a[f+3]+=e*t[v+3],v+=qn,f+=qn;return a}for(l=0;l<r;l++)a[f]+=e*t[v],v+=i,f+=u;return a}w_.exports=Qbr});var g1=s((Bue,A_)=>{"use strict";var Kbr=w(),N_=b_(),rwr=E_();Kbr(N_,"ndarray",rwr);A_.exports=N_});var O_=s((kue,S_)=>{"use strict";var m1={};m1.daxpy=g1().ndarray;m1.saxpy=g1().ndarray;S_.exports=m1});var I_=s((jue,T_)=>{"use strict";var ewr=wt(),twr=ir();function iwr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(twr(r)==="[object Error]")return!0;r=ewr(r)}return!1}T_.exports=iwr});var L_=s((Cue,__)=>{"use strict";var nwr=I_();__.exports=nwr});var d1=s((Gue,P_)=>{"use strict";function awr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}P_.exports=awr});var F_=s((Vue,R_)=>{"use strict";var swr=d1(),uwr=swr();R_.exports=uwr});var k_=s((Uue,B_)=>{"use strict";var owr=w(),M_=d1(),fwr=F_();owr(M_,"REGEXP",fwr);B_.exports=M_});var C_=s((Hue,j_)=>{"use strict";var vwr=K().isPrimitive,cwr=k_(),lwr=y();function pwr(r){if(!vwr(r))throw new TypeError(lwr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=cwr().exec(r),r?new RegExp(r[1],r[2]):null}j_.exports=pwr});var V_=s((Wue,G_)=>{"use strict";var gwr=C_();G_.exports=gwr});var H_=s((Due,U_)=>{"use strict";var mwr=typeof Object.getOwnPropertyNames<"u";U_.exports=mwr});var z_=s((zue,D_)=>{"use strict";var W_=Xt(),dwr=W_.getOwnPropertyNames;function hwr(r){return dwr(W_(r))}D_.exports=hwr});var J_=s((Xue,X_)=>{"use strict";var qwr=Xt(),ywr=zt();function bwr(r){return ywr(qwr(r))}X_.exports=bwr});var Y_=s((Jue,x_)=>{"use strict";var wwr=H_(),Ewr=z_(),Nwr=J_(),h1;wwr?h1=Ewr:h1=Nwr;x_.exports=h1});var $_=s((xue,Z_)=>{"use strict";var Awr=typeof Object.getOwnPropertyDescriptor<"u";Z_.exports=Awr});var K_=s((Yue,Q_)=>{"use strict";var Swr=Object.getOwnPropertyDescriptor;function Owr(r,e){var t;return r==null?null:(t=Swr(r,e),t===void 0?null:t)}Q_.exports=Owr});var eL=s((Zue,rL)=>{"use strict";var Twr=S();function Iwr(r,e){return Twr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}rL.exports=Iwr});var iL=s(($ue,tL)=>{"use strict";var _wr=$_(),Lwr=K_(),Pwr=eL(),q1;_wr?q1=Lwr:q1=Pwr;tL.exports=q1});var aL=s((Que,nL)=>{"use strict";var Rwr=typeof Buffer=="function"?Buffer:null;nL.exports=Rwr});var uL=s((Kue,sL)=>{"use strict";var Fwr=bt(),$a=aL();function Mwr(){var r,e;if(typeof $a!="function")return!1;try{typeof $a.from=="function"?e=$a.from([1,2,3,4]):e=new $a([1,2,3,4]),r=Fwr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}sL.exports=Mwr});var fL=s((roe,oL)=>{"use strict";var Bwr=uL();oL.exports=Bwr});var lL=s(Qa=>{"use strict";Qa.byteLength=jwr;Qa.toByteArray=Gwr;Qa.fromByteArray=Hwr;var xr=[],Mr=[],kwr=typeof Uint8Array<"u"?Uint8Array:Array,y1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Bt=0,vL=y1.length;Bt<vL;++Bt)xr[Bt]=y1[Bt],Mr[y1.charCodeAt(Bt)]=Bt;var Bt,vL;Mr["-".charCodeAt(0)]=62;Mr["_".charCodeAt(0)]=63;function cL(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function jwr(r){var e=cL(r),t=e[0],i=e[1];return(t+i)*3/4-i}function Cwr(r,e,t){return(e+t)*3/4-t}function Gwr(r){var e,t=cL(r),i=t[0],n=t[1],a=new kwr(Cwr(r,i,n)),u=0,o=n>0?i-4:i,v;for(v=0;v<o;v+=4)e=Mr[r.charCodeAt(v)]<<18|Mr[r.charCodeAt(v+1)]<<12|Mr[r.charCodeAt(v+2)]<<6|Mr[r.charCodeAt(v+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=Mr[r.charCodeAt(v)]<<2|Mr[r.charCodeAt(v+1)]>>4,a[u++]=e&255),n===1&&(e=Mr[r.charCodeAt(v)]<<10|Mr[r.charCodeAt(v+1)]<<4|Mr[r.charCodeAt(v+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function Vwr(r){return xr[r>>18&63]+xr[r>>12&63]+xr[r>>6&63]+xr[r&63]}function Uwr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(Vwr(i));return n.join("")}function Hwr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(Uwr(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(xr[e>>2]+xr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(xr[e>>10]+xr[e>>4&63]+xr[e<<2&63]+"=")),n.join("")}});var pL=s(b1=>{b1.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,v=(1<<o)-1,f=v>>1,c=-7,l=t?n-1:0,p=t?-1:1,m=r[e+l];for(l+=p,a=m&(1<<-c)-1,m>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-f;else{if(a===v)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-f}return(m?-1:1)*u*Math.pow(2,a-i)};b1.write=function(r,e,t,i,n,a){var u,o,v,f=a*8-n-1,c=(1<<f)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-u))<1&&(u--,v*=2),u+l>=1?e+=p/v:e+=p*Math.pow(2,1-l),e*v>=2&&(u++,v/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*v-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+m]=o&255,m+=h,o/=256,n-=8);for(u=u<<n|o,f+=n;f>0;r[t+m]=u&255,m+=h,u/=256,f-=8);r[t+m-h]|=d*128}});var LL=s(di=>{"use strict";var w1=lL(),gi=pL(),gL=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;di.Buffer=b;di.SlowBuffer=xwr;di.INSPECT_MAX_BYTES=50;var Ka=2147483647;di.kMaxLength=Ka;b.TYPED_ARRAY_SUPPORT=Wwr();!b.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Wwr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(b.prototype,"parent",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.buffer}});Object.defineProperty(b.prototype,"offset",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.byteOffset}});function ae(r){if(r>Ka)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,b.prototype),e}function b(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return S1(r)}return qL(r,e,t)}b.poolSize=8192;function qL(r,e,t){if(typeof r=="string")return zwr(r,e);if(ArrayBuffer.isView(r))return Xwr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Yr(r,ArrayBuffer)||r&&Yr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Yr(r,SharedArrayBuffer)||r&&Yr(r.buffer,SharedArrayBuffer)))return N1(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return b.from(i,e,t);let n=Jwr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return b.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}b.from=function(r,e,t){return qL(r,e,t)};Object.setPrototypeOf(b.prototype,Uint8Array.prototype);Object.setPrototypeOf(b,Uint8Array);function yL(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function Dwr(r,e,t){return yL(r),r<=0?ae(r):e!==void 0?typeof t=="string"?ae(r).fill(e,t):ae(r).fill(e):ae(r)}b.alloc=function(r,e,t){return Dwr(r,e,t)};function S1(r){return yL(r),ae(r<0?0:O1(r)|0)}b.allocUnsafe=function(r){return S1(r)};b.allocUnsafeSlow=function(r){return S1(r)};function zwr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!b.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=bL(r,e)|0,i=ae(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function E1(r){let e=r.length<0?0:O1(r.length)|0,t=ae(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function Xwr(r){if(Yr(r,Uint8Array)){let e=new Uint8Array(r);return N1(e.buffer,e.byteOffset,e.byteLength)}return E1(r)}function N1(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,b.prototype),i}function Jwr(r){if(b.isBuffer(r)){let e=O1(r.length)|0,t=ae(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||I1(r.length)?ae(0):E1(r);if(r.type==="Buffer"&&Array.isArray(r.data))return E1(r.data)}function O1(r){if(r>=Ka)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ka.toString(16)+" bytes");return r|0}function xwr(r){return+r!=r&&(r=0),b.alloc(+r)}b.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==b.prototype};b.compare=function(e,t){if(Yr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),Yr(t,Uint8Array)&&(t=b.from(t,t.offset,t.byteLength)),!b.isBuffer(e)||!b.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};b.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};b.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return b.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=b.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(Yr(u,Uint8Array))a+u.length>n.length?(b.isBuffer(u)||(u=b.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(b.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function bL(r,e){if(b.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Yr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return A1(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return _L(r).length;default:if(n)return i?-1:A1(r).length;e=(""+e).toLowerCase(),n=!0}}b.byteLength=bL;function Ywr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return aEr(this,e,t);case"utf8":case"utf-8":return EL(this,e,t);case"ascii":return iEr(this,e,t);case"latin1":case"binary":return nEr(this,e,t);case"base64":return eEr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return sEr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}b.prototype._isBuffer=!0;function kt(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}b.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)kt(this,t,t+1);return this};b.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)kt(this,t,t+3),kt(this,t+1,t+2);return this};b.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)kt(this,t,t+7),kt(this,t+1,t+6),kt(this,t+2,t+5),kt(this,t+3,t+4);return this};b.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?EL(this,0,e):Ywr.apply(this,arguments)};b.prototype.toLocaleString=b.prototype.toString;b.prototype.equals=function(e){if(!b.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:b.compare(this,e)===0};b.prototype.inspect=function(){let e="",t=di.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};gL&&(b.prototype[gL]=b.prototype.inspect);b.prototype.compare=function(e,t,i,n,a){if(Yr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),!b.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,v=Math.min(u,o),f=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<v;++l)if(f[l]!==c[l]){u=f[l],o=c[l];break}return u<o?-1:o<u?1:0};function wL(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,I1(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=b.from(e,i)),b.isBuffer(e))return e.length===0?-1:mL(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):mL(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function mL(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function v(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let f;if(n){let c=-1;for(f=t;f<u;f++)if(v(r,f)===v(e,c===-1?0:f-c)){if(c===-1&&(c=f),f-c+1===o)return c*a}else c!==-1&&(f-=f-c),c=-1}else for(t+o>u&&(t=u-o),f=t;f>=0;f--){let c=!0;for(let l=0;l<o;l++)if(v(r,f+l)!==v(e,l)){c=!1;break}if(c)return f}return-1}b.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};b.prototype.indexOf=function(e,t,i){return wL(this,e,t,i,!0)};b.prototype.lastIndexOf=function(e,t,i){return wL(this,e,t,i,!1)};function Zwr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(I1(o))return u;r[t+u]=o}return u}function $wr(r,e,t,i){return r0(A1(e,r.length-t),r,t,i)}function Qwr(r,e,t,i){return r0(vEr(e),r,t,i)}function Kwr(r,e,t,i){return r0(_L(e),r,t,i)}function rEr(r,e,t,i){return r0(cEr(e,r.length-t),r,t,i)}b.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return Zwr(this,e,t,i);case"utf8":case"utf-8":return $wr(this,e,t,i);case"ascii":case"latin1":case"binary":return Qwr(this,e,t,i);case"base64":return Kwr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return rEr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};b.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function eEr(r,e,t){return e===0&&t===r.length?w1.fromByteArray(r):w1.fromByteArray(r.slice(e,t))}function EL(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let v,f,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:v=r[n+1],(v&192)===128&&(l=(a&31)<<6|v&63,l>127&&(u=l));break;case 3:v=r[n+1],f=r[n+2],(v&192)===128&&(f&192)===128&&(l=(a&15)<<12|(v&63)<<6|f&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:v=r[n+1],f=r[n+2],c=r[n+3],(v&192)===128&&(f&192)===128&&(c&192)===128&&(l=(a&15)<<18|(v&63)<<12|(f&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return tEr(i)}var dL=4096;function tEr(r){let e=r.length;if(e<=dL)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=dL));return t}function iEr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function nEr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function aEr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=lEr[r[a]];return n}function sEr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}b.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,b.prototype),n};function ur(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}b.prototype.readUintLE=b.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};b.prototype.readUintBE=b.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};b.prototype.readUint8=b.prototype.readUInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]};b.prototype.readUint16LE=b.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]|this[e+1]<<8};b.prototype.readUint16BE=b.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]<<8|this[e+1]};b.prototype.readUint32LE=b.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};b.prototype.readUint32BE=b.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};b.prototype.readBigUInt64LE=Ye(function(e){e=e>>>0,mi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&yn(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});b.prototype.readBigUInt64BE=Ye(function(e){e=e>>>0,mi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&yn(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});b.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};b.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};b.prototype.readInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};b.prototype.readInt16LE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};b.prototype.readInt16BE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};b.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};b.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};b.prototype.readBigInt64LE=Ye(function(e){e=e>>>0,mi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&yn(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});b.prototype.readBigInt64BE=Ye(function(e){e=e>>>0,mi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&yn(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});b.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),gi.read(this,e,!0,23,4)};b.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),gi.read(this,e,!1,23,4)};b.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),gi.read(this,e,!0,52,8)};b.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),gi.read(this,e,!1,52,8)};function qr(r,e,t,i,n,a){if(!b.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}b.prototype.writeUintLE=b.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};b.prototype.writeUintBE=b.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};b.prototype.writeUint8=b.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,255,0),this[t]=e&255,t+1};b.prototype.writeUint16LE=b.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeUint16BE=b.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeUint32LE=b.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};b.prototype.writeUint32BE=b.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function NL(r,e,t,i,n){IL(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function AL(r,e,t,i,n){IL(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}b.prototype.writeBigUInt64LE=Ye(function(e,t=0){return NL(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeBigUInt64BE=Ye(function(e,t=0){return AL(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);qr(this,e,t,i,v-1,-v)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);qr(this,e,t,i,v-1,-v)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};b.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};b.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};b.prototype.writeBigInt64LE=Ye(function(e,t=0){return NL(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});b.prototype.writeBigInt64BE=Ye(function(e,t=0){return AL(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function SL(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function OL(r,e,t,i,n){return e=+e,t=t>>>0,n||SL(r,e,t,4,34028234663852886e22,-34028234663852886e22),gi.write(r,e,t,i,23,4),t+4}b.prototype.writeFloatLE=function(e,t,i){return OL(this,e,t,!0,i)};b.prototype.writeFloatBE=function(e,t,i){return OL(this,e,t,!1,i)};function TL(r,e,t,i,n){return e=+e,t=t>>>0,n||SL(r,e,t,8,17976931348623157e292,-17976931348623157e292),gi.write(r,e,t,i,52,8),t+8}b.prototype.writeDoubleLE=function(e,t,i){return TL(this,e,t,!0,i)};b.prototype.writeDoubleBE=function(e,t,i){return TL(this,e,t,!1,i)};b.prototype.copy=function(e,t,i,n){if(!b.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};b.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!b.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=b.isBuffer(e)?e:b.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var pi={};function T1(r,e,t){pi[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}T1("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);T1("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);T1("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=hL(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=hL(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function hL(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function uEr(r,e,t){mi(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&yn(e,r.length-(t+1))}function IL(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new pi.ERR_OUT_OF_RANGE("value",o,r)}uEr(i,n,a)}function mi(r,e){if(typeof r!="number")throw new pi.ERR_INVALID_ARG_TYPE(e,"number",r)}function yn(r,e,t){throw Math.floor(r)!==r?(mi(r,t),new pi.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new pi.ERR_BUFFER_OUT_OF_BOUNDS:new pi.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var oEr=/[^+/0-9A-Za-z-_]/g;function fEr(r){if(r=r.split("=")[0],r=r.trim().replace(oEr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function A1(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function vEr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function cEr(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function _L(r){return w1.toByteArray(fEr(r))}function r0(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function Yr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function I1(r){return r!==r}var lEr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function Ye(r){return typeof BigInt>"u"?pEr:r}function pEr(){throw new Error("BigInt not supported")}});var RL=s((aoe,PL)=>{"use strict";var gEr=LL().Buffer;PL.exports=gEr});var ML=s((soe,FL)=>{"use strict";function mEr(){throw new Error("not implemented")}FL.exports=mEr});var e0=s((uoe,BL)=>{"use strict";var dEr=fL(),hEr=RL(),qEr=ML(),_1;dEr()?_1=hEr:_1=qEr;BL.exports=_1});var jL=s((ooe,kL)=>{"use strict";var yEr=L(),bEr=e0(),wEr=yEr(bEr.from);kL.exports=wEr});var GL=s((foe,CL)=>{"use strict";var EEr=bt(),NEr=y(),AEr=e0();function SEr(r){if(!EEr(r))throw new TypeError(NEr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return AEr.from(r)}CL.exports=SEr});var UL=s((voe,VL)=>{"use strict";var OEr=bt(),TEr=y(),IEr=e0();function _Er(r){if(!OEr(r))throw new TypeError(TEr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new IEr(r)}VL.exports=_Er});var WL=s((coe,HL)=>{"use strict";var LEr=jL(),PEr=GL(),REr=UL(),L1;LEr?L1=PEr:L1=REr;HL.exports=L1});var XL=s((loe,zL)=>{"use strict";var FEr=on(),MEr=Jt(),BEr=un(),kEr=sn(),jEr=xt(),CEr=_t(),GEr=lr(),VEr=ne(),UEr=mr(),DL;function HEr(r){return new FEr(r)}function WEr(r){return new MEr(r)}function DEr(r){return new BEr(r)}function zEr(r){return new kEr(r)}function XEr(r){return new jEr(r)}function JEr(r){return new CEr(r)}function xEr(r){return new GEr(r)}function YEr(r){return new VEr(r)}function ZEr(r){return new UEr(r)}function $Er(){var r={int8array:HEr,uint8array:WEr,uint8clampedarray:DEr,int16array:zEr,uint16array:XEr,int32array:JEr,uint32array:xEr,float32array:YEr,float64array:ZEr};return r}DL=$Er();zL.exports=DL});var $L=s((poe,ZL)=>{"use strict";var t0=S(),P1=cr(),JL=bt(),QEr=L_(),xL=Yn(),KEr=V_(),rNr=xn(),YL=zt(),eNr=Y_(),bn=iL(),tNr=wt(),wn=Be(),iNr=WL(),nNr=XL();function aNr(r){var e,t,i,n,a,u,o,v;for(e=[],n=[],o=Object.create(tNr(r)),e.push(r),n.push(o),t=eNr(r),v=0;v<t.length;v++)i=t[v],a=bn(r,i),t0(a,"value")&&(u=P1(r[i])?[]:{},a.value=jt(r[i],u,e,n,-1)),wn(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function sNr(r){var e=[],t=[],i,n,a,u,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=YL(r),v=0;v<i.length;v++)u=i[v],n=bn(r,u),t0(n,"value")&&(a=P1(r[u])?[]:{},n.value=jt(r[u],a,e,t,-1)),wn(o,u,n);return o}function jt(r,e,t,i,n){var a,u,o,v,f,c,l,p,m,h;if(n-=1,typeof r!="object"||r===null)return r;if(JL(r))return iNr(r);if(QEr(r))return sNr(r);if(o=xL(r),o==="date")return new Date(+r);if(o==="regexp")return KEr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=nNr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?aNr(r):{};if(u=YL(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=xL(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||JL(p)){a==="object"?(v=bn(r,c),t0(v,"value")&&(v.value=jt(p)),wn(e,c,v)):e[c]=jt(p);continue}if(m=rNr(t,p),m!==-1){e[c]=i[m];continue}l=P1(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=jt(p,l,t,i,n):(v=bn(r,c),t0(v,"value")&&(v.value=jt(p,l,t,i,n)),wn(e,c,v))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],v=bn(r,c),wn(e,c,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}ZL.exports=jt});var KL=s((goe,QL)=>{"use strict";var uNr=cr(),oNr=De().isPrimitive,fNr=y(),vNr=_(),cNr=$L();function lNr(r,e){var t;if(arguments.length>1){if(!oNr(e))throw new TypeError(fNr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=vNr;return t=uNr(r)?new Array(r.length):{},cNr(r,t,[r],[t],e)}QL.exports=lNr});var En=s((moe,rP)=>{"use strict";var pNr=KL();rP.exports=pNr});var eP=s((doe,gNr)=>{gNr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var iP=s((hoe,tP)=>{"use strict";var mNr=En(),dNr=eP();function hNr(){return mNr(dNr)}tP.exports=hNr});var nP=s((qoe,qNr)=>{qNr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var sP=s((yoe,aP)=>{"use strict";var yNr=En(),bNr=nP();function wNr(){return yNr(bNr)}aP.exports=wNr});var uP=s((boe,ENr)=>{ENr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var fP=s((woe,oP)=>{"use strict";var NNr=En(),ANr=uP();function SNr(){return NNr(ANr)}oP.exports=SNr});var vP=s((Eoe,ONr)=>{ONr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var lP=s((Noe,cP)=>{"use strict";var TNr=vP();function INr(){return TNr.slice()}cP.exports=INr});var pP=s((Aoe,_Nr)=>{_Nr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var mP=s((Soe,gP)=>{"use strict";var LNr=En(),PNr=pP();function RNr(){return LNr(PNr)}gP.exports=RNr});var hP=s((Ooe,dP)=>{"use strict";var hi={};hi.AFINN_111=iP();hi.AFINN_96=sP();hi.ANSCOMBES_QUARTET=fP();hi.HERNDON_VENUS_SEMIDIAMETERS=lP();hi.NIGHTINGALES_ROSE=mP();dP.exports=hi});var yP=s((Toe,qP)=>{"use strict";var FNr=Ot(),MNr=G(),R1=E();function BNr(r,e,t){var i,n;return R1(r)||R1(e)||R1(t)||t<0?NaN:t===0?r<e?0:1:(i=t*MNr(2),n=r-e,.5*FNr(-n/i))}qP.exports=BNr});var wP=s((Ioe,bP)=>{"use strict";var kNr=O(),jNr=Ta().factory,F1=E(),CNr=G(),GNr=Ot();function VNr(r,e){var t;if(F1(r)||F1(e)||e<0)return kNr(NaN);if(e===0)return jNr(r);return t=e*CNr(2),i;function i(n){var a;return F1(n)?NaN:(a=n-r,.5*GNr(-a/t))}}bP.exports=VNr});var AP=s((_oe,NP)=>{"use strict";var UNr=w(),EP=yP(),HNr=wP();UNr(EP,"factory",HNr);NP.exports=EP});var TP=s((Loe,OP)=>{"use strict";var SP=E(),WNr=P(),DNr=Ve(),zNr=Qo();function XNr(r,e){return SP(r)||SP(e)||e<=0?NaN:.5*WNr(DNr*zNr*e*e)}OP.exports=XNr});var _P=s((Poe,IP)=>{"use strict";var JNr=TP();IP.exports=JNr});var RP=s((Roe,PP)=>{"use strict";var LP=E();function xNr(r,e){return LP(r)||LP(e)||e<=0?NaN:0}PP.exports=xNr});var MP=s((Foe,FP)=>{"use strict";var YNr=RP();FP.exports=YNr});var kP=s((Moe,BP)=>{"use strict";function ZNr(r){return r*r}BP.exports=ZNr});var i0=s((Boe,jP)=>{"use strict";var $Nr=kP();jP.exports=$Nr});var GP=s((koe,CP)=>{"use strict";var QNr=Q(),KNr=[rAr,eAr,tAr,iAr,nAr,aAr,sAr,uAr,oAr,fAr,vAr,cAr,lAr,pAr,gAr,mAr,dAr,hAr,qAr,yAr,bAr,wAr,EAr,NAr,AAr,SAr,OAr,TAr,IAr,_Ar,LAr,PAr,RAr,FAr,MAr,BAr,kAr,jAr,CAr,GAr,VAr,UAr,HAr,WAr,DAr,zAr,XAr,JAr,xAr,YAr,ZAr,$Ar,QAr,KAr,rSr,eSr,tSr,iSr,nSr,aSr,sSr,uSr,oSr,fSr,vSr,cSr,lSr,pSr,gSr,mSr,dSr,hSr,qSr,ySr,bSr,wSr,ESr,NSr,ASr,SSr,OSr,TSr,ISr,_Sr,LSr,PSr,RSr,FSr,MSr,BSr,kSr,jSr,CSr,GSr,VSr,USr,HSr,WSr,DSr,zSr,XSr];function rAr(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function eAr(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function tAr(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function iAr(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function nAr(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function aAr(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function sAr(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function uAr(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function oAr(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function fAr(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function vAr(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function cAr(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function lAr(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function pAr(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function gAr(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function mAr(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function dAr(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function hAr(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function qAr(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function yAr(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function bAr(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function wAr(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function EAr(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function NAr(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function AAr(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function SAr(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function OAr(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function TAr(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function IAr(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function _Ar(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function LAr(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function PAr(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function RAr(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function FAr(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function MAr(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function BAr(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function kAr(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function jAr(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function CAr(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function GAr(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function VAr(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function UAr(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function HAr(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function WAr(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function DAr(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function zAr(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function XAr(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function JAr(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function xAr(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function YAr(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function ZAr(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function $Ar(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function QAr(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function KAr(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function rSr(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function eSr(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function tSr(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function iSr(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function nSr(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function aSr(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function sSr(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function uSr(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function oSr(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function fSr(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function vSr(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function cSr(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function lSr(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function pSr(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function gSr(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function mSr(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function dSr(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function hSr(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function qSr(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function ySr(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function bSr(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function wSr(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function ESr(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function NSr(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function ASr(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function SSr(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function OSr(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function TSr(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function ISr(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function _Sr(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function LSr(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function PSr(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function RSr(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function FSr(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function MSr(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function BSr(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function kSr(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function jSr(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function CSr(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function GSr(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function VSr(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function USr(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function HSr(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function WSr(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function DSr(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function zSr(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function XSr(){return 1}function JSr(r){var e=QNr(r),t=KNr[e];return t(2*r-(2*e+1))}CP.exports=JSr});var DP=s((joe,WP)=>{"use strict";var VP=nr(),xSr=_(),UP=GP(),HP=.5641895835477563;function YSr(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?HP/r:(e=r*r,HP*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):UP(400/(4+r)):r<-26.7?xSr:(e=r*r,r<-6.1?2*VP(e):2*VP(e)-UP(400/(4-r)))}WP.exports=YSr});var M1=s((Coe,zP)=>{"use strict";var ZSr=DP();zP.exports=ZSr});var xP=s((Goe,JP)=>{"use strict";var $Sr=P(),QSr=Ue(),KSr=i0(),rOr=Ot(),eOr=M1(),tOr=V(),B1=E(),XP=.7071067811865475;function iOr(r,e,t){var i;return B1(r)||B1(e)||B1(t)||t<0?NaN:t===0?r<e?tOr:0:(i=(r-e)/t,i<-1?$Sr(eOr(-i*XP)/2)-KSr(i)/2:QSr(-rOr(i*XP)/2))}JP.exports=iOr});var $P=s((Voe,ZP)=>{"use strict";var YP=E(),nOr=V();function aOr(r,e){return YP(r)||YP(e)?NaN:r<e?nOr:0}ZP.exports=aOr});var rR=s((Uoe,KP)=>{"use strict";var sOr=O(),QP=E(),uOr=V();function oOr(r){if(QP(r))return sOr(NaN);return e;function e(t){return QP(t)?NaN:t<r?uOr:0}}KP.exports=oOr});var iR=s((Hoe,tR)=>{"use strict";var fOr=w(),eR=$P(),vOr=rR();fOr(eR,"factory",vOr);tR.exports=eR});var uR=s((Woe,sR)=>{"use strict";var cOr=O(),lOr=iR().factory,nR=E(),pOr=Ue(),gOr=i0(),mOr=Ot(),dOr=M1(),hOr=P(),aR=.7071067811865475;function qOr(r,e){if(nR(r)||nR(e)||e<0)return cOr(NaN);if(e===0)return lOr(r);return t;function t(i){var n=(i-r)/e;return n<-1?hOr(dOr(-n*aR)/2)-gOr(n)/2:pOr(-mOr(n*aR)/2)}}sR.exports=qOr});var vR=s((Doe,fR)=>{"use strict";var yOr=w(),oR=xP(),bOr=uR();yOr(oR,"factory",bOr);fR.exports=oR});var k1=s((zoe,cR)=>{"use strict";var wOr=1.8378770664093456;cR.exports=wOr});var gR=s((Xoe,pR)=>{"use strict";var EOr=P(),lR=W(),NOr=k1(),AOr=V(),SOr=_(),j1=E();function OOr(r,e,t){var i,n,a;return j1(r)||j1(e)||j1(t)||t<0?NaN:t===0?r===e?SOr:AOr:(i=lR(t,2),n=-.5*(2*EOr(t)+NOr),a=-1/(2*i),n+a*lR(r-e,2))}pR.exports=OOr});var hR=s((Joe,dR)=>{"use strict";var TOr=_(),IOr=V(),mR=E();function _Or(r,e){return mR(r)||mR(e)?NaN:r===e?TOr:IOr}dR.exports=_Or});var bR=s((xoe,yR)=>{"use strict";var LOr=O(),POr=_(),ROr=V(),qR=E();function FOr(r){if(qR(r))return LOr(NaN);return e;function e(t){return qR(t)?NaN:t===r?POr:ROr}}yR.exports=FOr});var NR=s((Yoe,ER)=>{"use strict";var MOr=w(),wR=hR(),BOr=bR();MOr(wR,"factory",BOr);ER.exports=wR});var TR=s((Zoe,OR)=>{"use strict";var kOr=O(),jOr=NR().factory,COr=k1(),AR=E(),SR=W(),GOr=P();function VOr(r,e){var t,i,n;if(AR(r)||AR(e)||e<0)return kOr(NaN);if(e===0)return jOr(r);return t=SR(e,2),i=-.5*(2*GOr(e)+COr),n=-1/(2*t),a;function a(u){return i+n*SR(u-r,2)}}OR.exports=VOr});var LR=s(($oe,_R)=>{"use strict";var UOr=w(),IR=gR(),HOr=TR();UOr(IR,"factory",HOr);_R.exports=IR});var FR=s((Qoe,RR)=>{"use strict";var PR=E();function WOr(r,e){return PR(r)||PR(e)||e<=0?NaN:r}RR.exports=WOr});var BR=s((Koe,MR)=>{"use strict";var DOr=FR();MR.exports=DOr});var CR=s((r2e,jR)=>{"use strict";var kR=E();function zOr(r,e){return kR(r)||kR(e)||e<=0?NaN:r}jR.exports=zOr});var VR=s((e2e,GR)=>{"use strict";var XOr=CR();GR.exports=XOr});var HR=s((t2e,UR)=>{"use strict";var C1=E(),JOr=nr(),xOr=W();function YOr(r,e,t){return C1(r)||C1(e)||C1(t)||t<=0?NaN:JOr(e*r+.5*xOr(t*r,2))}UR.exports=YOr});var DR=s((i2e,WR)=>{"use strict";var ZOr=O(),G1=E(),$Or=nr(),QOr=W();function KOr(r,e){if(G1(r)||G1(e)||e<=0)return ZOr(NaN);return t;function t(i){return G1(i)?NaN:$Or(r*i+.5*QOr(e*i,2))}}WR.exports=KOr});var JR=s((n2e,XR)=>{"use strict";var rTr=w(),zR=HR(),eTr=DR();rTr(zR,"factory",eTr);XR.exports=zR});var ZR=s((a2e,YR)=>{"use strict";var xR=E();function tTr(r,e){return xR(r)||xR(e)||e<=0?NaN:r}YR.exports=tTr});var QR=s((s2e,$R)=>{"use strict";var iTr=ZR();$R.exports=iTr});var eF=s((u2e,rF)=>{"use strict";var nTr=nr(),KR=W(),aTr=G(),sTr=Ve(),uTr=_(),V1=E();function oTr(r,e,t){var i,n,a;return V1(r)||V1(e)||V1(t)||t<0?NaN:t===0?r===e?uTr:0:(i=KR(t,2),n=1/aTr(i*sTr),a=-1/(2*i),n*nTr(a*KR(r-e,2)))}rF.exports=oTr});var nF=s((o2e,iF)=>{"use strict";var fTr=_(),tF=E();function vTr(r,e){return tF(r)||tF(e)?NaN:r===e?fTr:0}iF.exports=vTr});var uF=s((f2e,sF)=>{"use strict";var cTr=O(),lTr=_(),aF=E();function pTr(r){if(aF(r))return cTr(NaN);return e;function e(t){return aF(t)?NaN:t===r?lTr:0}}sF.exports=pTr});var vF=s((v2e,fF)=>{"use strict";var gTr=w(),oF=nF(),mTr=uF();gTr(oF,"factory",mTr);fF.exports=oF});var pF=s((c2e,lF)=>{"use strict";var dTr=O(),hTr=vF().factory,U1=E(),qTr=G(),yTr=nr(),cF=W(),bTr=Ve();function wTr(r,e){var t,i,n;if(U1(r)||U1(e)||e<0)return dTr(NaN);if(e===0)return hTr(r);return t=cF(e,2),i=1/qTr(t*bTr),n=-1/(2*t),a;function a(u){return U1(u)?NaN:i*yTr(n*cF(u-r,2))}}lF.exports=wTr});var dF=s((l2e,mF)=>{"use strict";var ETr=w(),gF=eF(),NTr=pF();ETr(gF,"factory",NTr);mF.exports=gF});var qF=s((p2e,hF)=>{"use strict";function ATr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}hF.exports=ATr});var bF=s((g2e,yF)=>{"use strict";function STr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}yF.exports=STr});var EF=s((m2e,wF)=>{"use strict";function OTr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}wF.exports=OTr});var AF=s((d2e,NF)=>{"use strict";function TTr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}NF.exports=TTr});var OF=s((h2e,SF)=>{"use strict";function ITr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}SF.exports=ITr});var LF=s((q2e,_F)=>{"use strict";var _Tr=E(),TF=G(),IF=P(),LTr=_(),PTr=V(),RTr=qF(),FTr=bF(),MTr=EF(),BTr=AF(),kTr=OF(),jTr=.08913147449493408,CTr=2.249481201171875,GTr=.807220458984375,VTr=.9399557113647461,UTr=.9836282730102539;function HTr(r){var e,t,i,n,a,u;return _Tr(r)?NaN:r===1?LTr:r===-1?PTr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=RTr(t),e*(a*jTr+a*u)):n>=.25?(a=TF(-2*IF(n)),n-=.25,u=FTr(n),e*(a/(CTr+u))):(n=TF(-IF(n)),n<3?(i=n-1.125,u=MTr(i),e*(GTr*n+u*n)):n<6?(i=n-3,u=BTr(i),e*(VTr*n+u*n)):(i=n-6,u=kTr(i),e*(UTr*n+u*n))))}_F.exports=HTr});var H1=s((y2e,PF)=>{"use strict";var WTr=LF();PF.exports=WTr});var FF=s((b2e,RF)=>{"use strict";var DTr=H1(),W1=E(),zTr=G();function XTr(r,e,t){var i,n;return W1(e)||W1(t)||W1(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*zTr(2),i+n*DTr(2*r-1))}RF.exports=XTr});var BF=s((w2e,MF)=>{"use strict";var JTr=E();function xTr(r,e){return JTr(r)||r<0||r>1?NaN:e}MF.exports=xTr});var CF=s((E2e,jF)=>{"use strict";var YTr=O(),kF=E();function ZTr(r){if(kF(r))return YTr(NaN);return e;function e(t){return kF(t)||t<0||t>1?NaN:r}}jF.exports=ZTr});var D1=s((N2e,VF)=>{"use strict";var $Tr=w(),GF=BF(),QTr=CF();$Tr(GF,"factory",QTr);VF.exports=GF});var HF=s((A2e,UF)=>{"use strict";var KTr=O(),rIr=D1().factory,eIr=H1(),z1=E(),tIr=G();function iIr(r,e){var t,i;if(z1(r)||z1(e)||e<0)return KTr(NaN);return e===0&&rIr(r),t=r,i=e*tIr(2),n;function n(a){return z1(a)||a<0||a>1?NaN:t+i*eIr(2*a-1)}}UF.exports=iIr});var X1=s((S2e,DF)=>{"use strict";var nIr=w(),WF=FF(),aIr=HF();nIr(WF,"factory",aIr);DF.exports=WF});var JF=s((O2e,XF)=>{"use strict";var zF=E();function sIr(r,e){return zF(r)||zF(e)||e<=0?NaN:0}XF.exports=sIr});var YF=s((T2e,xF)=>{"use strict";var uIr=JF();xF.exports=uIr});var QF=s((I2e,$F)=>{"use strict";var ZF=E();function oIr(r,e){return ZF(r)||ZF(e)||e<=0?NaN:e}$F.exports=oIr});var rM=s((_2e,KF)=>{"use strict";var fIr=QF();KF.exports=fIr});var iM=s((L2e,tM)=>{"use strict";var eM=E();function vIr(r,e){return eM(r)||eM(e)||e<=0?NaN:e*e}tM.exports=vIr});var aM=s((P2e,nM)=>{"use strict";var cIr=iM();nM.exports=cIr});var uM=s((R2e,sM)=>{"use strict";var pr={};pr.normal={};pr.normal.cdf=AP();pr.normal.entropy=_P();pr.normal.kurtosis=MP();pr.normal.logcdf=vR();pr.normal.logpdf=LR();pr.normal.mean=BR();pr.normal.median=VR();pr.normal.mgf=JR();pr.normal.mode=QR();pr.normal.pdf=dF();pr.normal.quantile=X1();pr.normal.skewness=YF();pr.normal.stdev=rM();pr.normal.variance=aM();sM.exports=pr});var fM=s((F2e,oM)=>{"use strict";function lIr(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}oM.exports=lIr});var cM=s((M2e,vM)=>{"use strict";var pIr=fM();vM.exports=pIr});var gM=s((B2e,pM)=>{"use strict";var Nn=cM(),gIr=So(),lM=y();function mIr(r,e,t){var i,n,a,u,o,v,f,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,f=o;f<u;f++)i=[i];for(a=gIr(u),f=u-1;f>=0;f--)if(c=o-u+f,!(c<0)){if(v=e[c],n=t[f],n!==0&&n<v)throw new Error(lM("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Nn(e).join(", "),Nn(t).join(", "),f));if(v===n)a[f]=1;else if(v===1)a[f]=0;else throw new Error(lM("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Nn(e).join(", "),Nn(t).join(", "),f))}return{ref:r,data:i,shape:Nn(t),strides:a}}pM.exports=mIr});var dM=s((k2e,mM)=>{"use strict";var dIr=gM();mM.exports=dIr});var yM=s((j2e,qM)=>{"use strict";var hM=dM();function hIr(r,e,t){var i,n,a,u,o,v,f,c,l,p,m,h,d,g,q,N,A,j,T,X,vr;if(N=e[2],o=N[1],v=N[0],!(o<=0||v<=0))for(j=hM(r[0],e[0],N),T=j.data,A=j.strides,i=A[1],n=A[0],j=hM(r[1],e[1],N),X=j.data,A=j.strides,a=A[1],u=A[0],vr=r[2],p=0,h=0,c=0;c<v;c++){for(l=0,m=0,d=T[p],g=X[h],q=vr[c],f=0;f<o;f++)q[f]=t(d[l],g[m]),l+=i,m+=a;p+=n,h+=u}}qM.exports=hIr});var J1=s((C2e,bM)=>{"use strict";var qIr=yM();bM.exports=qIr});var AM=s((G2e,NM)=>{"use strict";var wM=k().isPrimitive,yIr=_(),bIr=V(),EM=y();function wIr(r,e){return t;function t(i,n){var a;if(!wM(i)){if(e.nonnumeric===void 0)throw new TypeError(EM("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!wM(n)){if(e.nonnumeric===void 0)throw new TypeError(EM("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===yIr?e.pinf:a===bIr?e.ninf:a}}NM.exports=wIr});var x1=s((V2e,SM)=>{"use strict";var EIr=AM();SM.exports=EIr});var TM=s((U2e,OM)=>{"use strict";var NIr=w2(),AIr=J1(),SIr=u1(),OIr=y(),TIr=s1(),IIr=x1(),_Ir=["number","number"],LIr=["First argument","Second argument"];function PIr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(OIr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=TIr([r[0],r[1]],_Ir,LIr),t=NIr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=SIr(t),a=IIr(e,i),r[0].push(n),r[1].push(t),AIr(r[0],r[1],a),n}OM.exports=PIr});var _M=s((H2e,IM)=>{"use strict";var RIr=TM();IM.exports=RIr});var PM=s((W2e,LM)=>{"use strict";var FIr=k().isPrimitive,MIr=_(),BIr=V(),kIr=y();function jIr(r,e){return t;function t(i){var n;if(!FIr(i)){if(e.nonnumeric===void 0)throw new TypeError(kIr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===MIr?e.pinf:n===BIr?e.ninf:n}}LM.exports=jIr});var Y1=s((D2e,RM)=>{"use strict";var CIr=PM();RM.exports=CIr});var MM=s((z2e,FM)=>{"use strict";var Z1=k().isPrimitive,GIr=_(),VIr=V(),$1=y();function UIr(r,e){return t;function t(i,n,a){var u;if(!Z1(i)){if(e.nonnumeric===void 0)throw new TypeError($1("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Z1(n)){if(e.nonnumeric===void 0)throw new TypeError($1("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Z1(a)){if(e.nonnumeric===void 0)throw new TypeError($1("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===GIr?e.pinf:u===VIr?e.ninf:u}}FM.exports=UIr});var kM=s((X2e,BM)=>{"use strict";var HIr=MM();BM.exports=HIr});var CM=s((J2e,jM)=>{"use strict";var n0=k().isPrimitive,WIr=_(),DIr=V(),a0=y();function zIr(r,e){return t;function t(i,n,a,u){var o;if(!n0(i)){if(e.nonnumeric===void 0)throw new TypeError(a0("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!n0(n)){if(e.nonnumeric===void 0)throw new TypeError(a0("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!n0(a)){if(e.nonnumeric===void 0)throw new TypeError(a0("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!n0(u)){if(e.nonnumeric===void 0)throw new TypeError(a0("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,a,u),o!==o?e.nan:o===WIr?e.pinf:o===DIr?e.ninf:o}}jM.exports=zIr});var VM=s((x2e,GM)=>{"use strict";var XIr=CM();GM.exports=XIr});var HM=s((Y2e,UM)=>{"use strict";var An=k().isPrimitive,JIr=_(),xIr=V(),Sn=y();function YIr(r,e){return t;function t(i,n,a,u,o){var v;if(!An(i)){if(e.nonnumeric===void 0)throw new TypeError(Sn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!An(n)){if(e.nonnumeric===void 0)throw new TypeError(Sn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!An(a)){if(e.nonnumeric===void 0)throw new TypeError(Sn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!An(u)){if(e.nonnumeric===void 0)throw new TypeError(Sn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!An(o)){if(e.nonnumeric===void 0)throw new TypeError(Sn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return v=r(i,n,a,u,o),v!==v?e.nan:v===JIr?e.pinf:v===xIr?e.ninf:v}}UM.exports=YIr});var DM=s((Z2e,WM)=>{"use strict";var ZIr=HM();WM.exports=ZIr});var XM=s(($2e,zM)=>{"use strict";function $Ir(r,e,t){var i,n,a,u,o,v,f,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(f=r[0],c=r[1],u=0;u<n;u++)for(o=f[u],v=c[u],a=0;a<i;a++)v[a]=t(o[a])}zM.exports=$Ir});var Q1=s((Q2e,JM)=>{"use strict";var QIr=XM();JM.exports=QIr});var YM=s((K2e,xM)=>{"use strict";var KIr=cr(),r_r=Q1(),e_r=y(),t_r=Y1();function i_r(r,e){var t,i,n,a,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(a=r[u],a==="nonnumeric"||a==="nan"||a==="pinf"||a==="ninf")i[a]=r[u+1];else throw new Error(e_r("invalid argument. Unrecognized option name. Value: %s.",String(a)));return n=t_r(e,i),KIr(t)?(r_r([t,t],[t.length,t[0].length],n),t):n(t)}xM.exports=i_r});var $M=s((r1e,ZM)=>{"use strict";var n_r=YM();ZM.exports=n_r});var KM=s((e1e,QM)=>{"use strict";var Ze={};Ze.binary=_M();Ze.d_d=Y1();Ze.dd_d=x1();Ze.ddd_d=kM();Ze.dddd_d=VM();Ze.ddddd_d=DM();Ze.unary=$M();QM.exports=Ze});var tB=s((t1e,eB)=>{"use strict";var rB={};rB.tools=KM();eB.exports=rB});var nB=s((i1e,iB)=>{"use strict";var a_r=Be();function s_r(r,e,t,i){a_r(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}iB.exports=s_r});var M=s((n1e,aB)=>{"use strict";var u_r=nB();aB.exports=u_r});var oB=s((a1e,uB)=>{"use strict";var sB=65535;function o_r(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&sB)>>>0,o=(e&sB)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}uB.exports=o_r});var vB=s((s1e,fB)=>{"use strict";var f_r=oB();fB.exports=f_r});var K1=s((u1e,cB)=>{"use strict";function v_r(r,e,t,i,n,a,u){var o,v,f,c,l,p,m;for(o=e.data,v=n.data,c=e.accessors[0],f=n.accessors[1],l=i,p=u,m=0;m<r;m++)f(v,p,c(o,l)),l+=t,p+=a;return e}cB.exports=v_r});var gB=s((o1e,pB)=>{"use strict";var lB=Za(),c_r=K1(),r3=8;function l_r(r,e,t,i,n){var a,u,o,v,f,c;if(r<=0)return i;if(o=lB(e),v=lB(i),o.accessorProtocol||v.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c_r(r,o,t,a,v,n,u),v.data;if(t===1&&n===1){if(f=r%r3,f>0)for(c=0;c<f;c++)i[c]=e[c];if(r<r3)return i;for(c=f;c<r;c+=r3)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}pB.exports=l_r});var hB=s((f1e,dB)=>{"use strict";var mB=Za(),p_r=K1(),On=8;function g_r(r,e,t,i,n,a,u){var o,v,f,c,l,p;if(r<=0)return n;if(f=mB(e),c=mB(n),f.accessorProtocol||c.accessorProtocol)return p_r(r,f,t,i,c,a,u),c.data;if(o=i,v=u,t===1&&a===1){if(l=r%On,l>0)for(p=0;p<l;p++)n[v]=e[o],o+=t,v+=a;if(r<On)return n;for(p=l;p<r;p+=On)n[v]=e[o],n[v+1]=e[o+1],n[v+2]=e[o+2],n[v+3]=e[o+3],n[v+4]=e[o+4],n[v+5]=e[o+5],n[v+6]=e[o+6],n[v+7]=e[o+7],o+=On,v+=On;return n}for(p=0;p<r;p++)n[v]=e[o],o+=t,v+=a;return n}dB.exports=g_r});var $e=s((v1e,yB)=>{"use strict";var m_r=w(),qB=gB(),d_r=hB();m_r(qB,"ndarray",d_r);yB.exports=qB});var wB=s((c1e,bB)=>{"use strict";function h_r(){}bB.exports=h_r});var NB=s((l1e,EB)=>{"use strict";var q_r=wB();function y_r(){return q_r.name==="foo"}EB.exports=y_r});var SB=s((p1e,AB)=>{"use strict";var b_r=NB();AB.exports=b_r});var TB=s((g1e,OB)=>{"use strict";var w_r=L(),E_r=SB(),N_r=y(),A_r=Xu().REGEXP,S_r=E_r();function O_r(r){if(w_r(r)===!1)throw new TypeError(N_r("invalid argument. Must provide a function. Value: `%s`.",r));return S_r?r.name:A_r.exec(r.toString())[1]}OB.exports=O_r});var _B=s((m1e,IB)=>{"use strict";var T_r=TB();IB.exports=T_r});var PB=s((d1e,LB)=>{"use strict";var I_r=on(),__r=Jt(),L_r=un(),P_r=sn(),R_r=xt(),F_r=_t(),M_r=lr(),B_r=ne(),k_r=mr(),j_r=[k_r,B_r,F_r,M_r,P_r,R_r,I_r,__r,L_r];LB.exports=j_r});var RB=s((h1e,C_r)=>{C_r.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var CB=s((q1e,jB)=>{"use strict";var G_r=ke(),V_r=_B(),BB=wt(),U_r=Qu(),H_r=mr(),FB=PB(),MB=RB(),s0=U_r()?BB(H_r):kB;s0=V_r(s0)==="TypedArray"?s0:kB;function kB(){}function W_r(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof s0)return!0;for(t=0;t<FB.length;t++)if(r instanceof FB[t])return!0;for(;r;){for(e=G_r(r),t=0;t<MB.length;t++)if(MB[t]===e)return!0;r=BB(r)}return!1}jB.exports=W_r});var VB=s((y1e,GB)=>{"use strict";var D_r=CB();GB.exports=D_r});var HB=s((b1e,UB)=>{"use strict";var z_r=ln(),X_r=gn(),J_r=[X_r,z_r];UB.exports=J_r});var WB=s((w1e,x_r)=>{x_r.exports=["Complex64Array","Complex128Array"]});var JB=s((E1e,XB)=>{"use strict";var Y_r=ke(),Z_r=wt(),DB=HB(),zB=WB();function $_r(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<DB.length;t++)if(r instanceof DB[t])return!0;for(;r;){for(e=Y_r(r),t=0;t<zB.length;t++)if(zB[t]===e)return!0;r=Z_r(r)}return!1}XB.exports=$_r});var YB=s((N1e,xB)=>{"use strict";var Q_r=JB();xB.exports=Q_r});var $B=s((A1e,ZB)=>{"use strict";var K_r=y();function rLr(r,e){if(typeof e!="function")throw new TypeError(K_r("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}ZB.exports=rLr});var KB=s((S1e,QB)=>{"use strict";var eLr=$B();QB.exports=eLr});var ek=s((O1e,rk)=>{"use strict";var tLr=on(),iLr=Jt(),nLr=un(),aLr=sn(),sLr=xt(),uLr=_t(),oLr=lr(),fLr=ne(),vLr=mr(),cLr=ln(),lLr=gn(),pLr=[[vLr,"Float64Array"],[fLr,"Float32Array"],[uLr,"Int32Array"],[oLr,"Uint32Array"],[aLr,"Int16Array"],[sLr,"Uint16Array"],[tLr,"Int8Array"],[iLr,"Uint8Array"],[nLr,"Uint8ClampedArray"],[cLr,"Complex64Array"],[lLr,"Complex128Array"]];rk.exports=pLr});var ik=s((T1e,tk)=>{"use strict";var gLr=KB(),mLr=ke(),dLr=wt(),qi=ek();function hLr(r){var e,t;for(t=0;t<qi.length;t++)if(gLr(r,qi[t][0]))return qi[t][1];for(;r;){for(e=mLr(r),t=0;t<qi.length;t++)if(e===qi[t][1])return qi[t][1];r=dLr(r)}}tk.exports=hLr});var ak=s((I1e,nk)=>{"use strict";var qLr=VB(),yLr=YB(),bLr=ni(),wLr=ai(),ELr=y(),NLr=ik();function ALr(r){var e,t,i;if(qLr(r))e=r;else if(yLr(r))r.BYTES_PER_ELEMENT===8?e=bLr(r,0):e=wLr(r,0);else throw new TypeError(ELr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:NLr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}nk.exports=ALr});var B=s((_1e,sk)=>{"use strict";var SLr=ak();sk.exports=SLr});var e3=s((L1e,uk)=>{"use strict";var OLr=Wt(),TLr=Q(),ILr=OLr-1;function _Lr(){var r=TLr(1+ILr*Math.random());return r>>>0}uk.exports=_Lr});var f3=s((P1e,qk)=>{"use strict";var se=w(),Qe=R(),ok=M(),t3=S(),LLr=I(),PLr=Cr(),fk=$r(),RLr=or().isPrimitive,vk=ie().isPrimitive,mk=an(),dk=Wt(),yr=lr(),FLr=Zo(),o3=vB(),yi=$e(),MLr=B(),wr=y(),ck=e3(),ar=624,i3=397,lk=dk>>>0,BLr=19650218>>>0,n3=2147483648>>>0,a3=2147483647>>>0,kLr=1812433253>>>0,jLr=1664525>>>0,CLr=1566083941>>>0,GLr=2636928640>>>0,VLr=4022730752>>>0,ULr=2567483615>>>0,s3=[0>>>0,ULr>>>0],hk=1/(mk+1),HLr=67108864>>>0,WLr=2147483648>>>0,u3=1>>>0,DLr=mk*hk,u0=1,o0=3,Ke=2,rt=ar+3,br=ar+5,Tn=ar+6;function pk(r,e){var t;return e?t="option":t="argument",r.length<Tn+1?new RangeError(wr("invalid %s. `state` array has insufficient length.",t)):r[0]!==u0?new RangeError(wr("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,u0,r[0])):r[1]!==o0?new RangeError(wr("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,o0,r[1])):r[Ke]!==ar?new RangeError(wr("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ar,r[Ke])):r[rt]!==1?new RangeError(wr("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[rt])):r[br]!==r.length-Tn?new RangeError(wr("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Tn,r[br])):null}function gk(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=o3(t,kLr)+i>>>0;return r}function zLr(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=FLr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=o3(n,jLr)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=o3(n,CLr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=WLr,r}function XLr(r){var e,t,i,n;for(n=ar-i3,t=0;t<n;t++)e=r[t]&n3|r[t+1]&a3,r[t]=r[t+i3]^e>>>1^s3[e&u3];for(i=ar-1;t<i;t++)e=r[t]&n3|r[t+1]&a3,r[t]=r[t-n]^e>>>1^s3[e&u3];return e=r[i]&n3|r[0]&a3,r[i]=r[i3-1]^e>>>1^s3[e&u3],r}function JLr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!LLr(r))throw new TypeError(wr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(t3(r,"copy")&&(i.copy=r.copy,!RLr(r.copy)))throw new TypeError(wr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(t3(r,"state")){if(t=r.state,i.state=!0,!fk(t))throw new TypeError(wr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=pk(t,!0),u)throw u;i.copy===!1?e=t:(e=new yr(t.length),yi(t.length,t,1,e,1)),t=new yr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,t[br])}if(n===void 0)if(t3(r,"seed"))if(n=r.seed,i.seed=!0,vk(n)){if(n>lk)throw new RangeError(wr("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(PLr(n)===!1||n.length<1)throw new TypeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!vk(n))throw new TypeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>lk)throw new RangeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new yr(Tn+a),e[0]=u0,e[1]=o0,e[Ke]=ar,e[rt]=1,e[rt+1]=ar,e[br]=a,yi.ndarray(a,n,1,0,e,1,br+1),t=new yr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,a),t=gk(t,ar,BLr),t=zLr(t,ar,n,a)}else n=ck()>>>0}else n=ck()>>>0;return t===void 0&&(e=new yr(Tn+1),e[0]=u0,e[1]=o0,e[Ke]=ar,e[rt]=1,e[rt+1]=ar,e[br]=1,e[br+1]=n,t=new yr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,1),t=gk(t,ar,n)),se(h,"NAME","mt19937"),Qe(h,"seed",o),Qe(h,"seedLength",v),ok(h,"state",l,p),Qe(h,"stateLength",f),Qe(h,"byteLength",c),se(h,"toJSON",m),se(h,"MIN",0),se(h,"MAX",dk),se(h,"normalized",d),se(d,"NAME",h.NAME),Qe(d,"seed",o),Qe(d,"seedLength",v),ok(d,"state",l,p),Qe(d,"stateLength",f),Qe(d,"byteLength",c),se(d,"toJSON",m),se(d,"MIN",0),se(d,"MAX",DLr),h;function o(){var g=e[br];return yi(g,n,1,new yr(g),1)}function v(){return e[br]}function f(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return yi(g,e,1,new yr(g),1)}function p(g){var q;if(!fk(g))throw new TypeError(wr("invalid argument. Must provide a Uint32Array. Value: `%s`.",g));if(q=pk(g,!1),q)throw q;i.copy===!1?i.state&&g.length===e.length?yi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new yr(g.length)),yi(g.length,g,1,e,1)),t=new yr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,e[br])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=MLr(e),g.params=[],g}function h(){var g,q;return q=e[rt+1],q>=ar&&(t=XLr(t),q=0),g=t[q],e[rt+1]=q+1,g^=g>>>11,g^=g<<7&GLr,g^=g<<15&VLr,g^=g>>>18,g>>>0}function d(){var g=h()>>>5,q=h()>>>6;return(g*HLr+q)*hk}}qk.exports=JLr});var bk=s((R1e,yk)=>{"use strict";var xLr=f3(),YLr=e3(),ZLr=xLr({seed:YLr()});yk.exports=ZLr});var z=s((F1e,Ek)=>{"use strict";var $Lr=w(),wk=bk(),QLr=f3();$Lr(wk,"factory",QLr);Ek.exports=wk});var Ok=s((M1e,Sk)=>{"use strict";var Nk=k().isPrimitive,v3=y(),Ak=sr();function KLr(r,e){return!Nk(r)||Ak(r)?new TypeError(v3("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Nk(e)||Ak(e)?new TypeError(v3("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(v3("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}Sk.exports=KLr});var Ik=s((B1e,Tk)=>{"use strict";var rPr=W(),ePr=St(),tPr=Xa();function iPr(r,e,t){return e+rPr(ePr(tPr*r()),2)*(t-e)}Tk.exports=iPr});var c3=s((k1e,kk)=>{"use strict";var ue=w(),f0=R(),_k=M(),Lk=I(),Pk=L(),Rk=S(),Fk=O(),nPr=C(),v0=z().factory,Mk=E(),aPr=B(),c0=y(),sPr=Ok(),Bk=Ik();function uPr(){var r,e,t,i,n,a;if(arguments.length===0)e=v0();else if(arguments.length===1){if(r=arguments[0],!Lk(r))throw new TypeError(c0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Rk(r,"prng")){if(!Pk(r.prng))throw new TypeError(c0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=v0(r)}else{if(n=arguments[0],a=arguments[1],i=sPr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Lk(r))throw new TypeError(c0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Rk(r,"prng")){if(!Pk(r.prng))throw new TypeError(c0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=v0(r)}else e=v0()}return n===void 0?t=h:t=m,ue(t,"NAME","arcsine"),r&&r.prng?(ue(t,"seed",null),ue(t,"seedLength",null),_k(t,"state",Fk(null),nPr),ue(t,"stateLength",null),ue(t,"byteLength",null),ue(t,"toJSON",Fk(null)),ue(t,"PRNG",e)):(f0(t,"seed",u),f0(t,"seedLength",o),_k(t,"state",c,l),f0(t,"stateLength",v),f0(t,"byteLength",f),ue(t,"toJSON",p),ue(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=aPr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return Bk(e,n,a)}function h(d,g){return Mk(d)||Mk(g)||d>=g?NaN:Bk(e,d,g)}}kk.exports=uPr});var Ck=s((j1e,jk)=>{"use strict";var oPr=c3(),fPr=oPr();jk.exports=fPr});var Uk=s((C1e,Vk)=>{"use strict";var vPr=w(),Gk=Ck(),cPr=c3();vPr(Gk,"factory",cPr);Vk.exports=Gk});var l3=s((G1e,Jk)=>{"use strict";var oe=w(),l0=R(),Hk=M(),Wk=I(),lPr=hn().isPrimitive,Dk=L(),zk=S(),Xk=O(),pPr=C(),p0=z().factory,gPr=E(),mPr=B(),g0=y();function dPr(){var r,e,t,i;if(arguments.length===0)e=p0();else if(arguments.length===1&&Wk(arguments[0]))if(r=arguments[0],zk(r,"prng")){if(!Dk(r.prng))throw new TypeError(g0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=p0(r);else{if(i=arguments[0],!lPr(i))throw new TypeError(g0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!Wk(r))throw new TypeError(g0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zk(r,"prng")){if(!Dk(r.prng))throw new TypeError(g0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=p0(r)}else e=p0()}return i===void 0?t=p:t=l,oe(t,"NAME","bernoulli"),r&&r.prng?(oe(t,"seed",null),oe(t,"seedLength",null),Hk(t,"state",Xk(null),pPr),oe(t,"stateLength",null),oe(t,"byteLength",null),oe(t,"toJSON",Xk(null)),oe(t,"PRNG",e)):(l0(t,"seed",n),l0(t,"seedLength",a),Hk(t,"state",v,f),l0(t,"stateLength",u),l0(t,"byteLength",o),oe(t,"toJSON",c),oe(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=mPr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return gPr(m)||m<0||m>1?NaN:e()<=m?1:0}}Jk.exports=dPr});var Yk=s((V1e,xk)=>{"use strict";var hPr=l3(),qPr=hPr();xk.exports=qPr});var Qk=s((U1e,$k)=>{"use strict";var yPr=w(),Zk=Yk(),bPr=l3();yPr(Zk,"factory",bPr);$k.exports=Zk});var tj=s((H1e,ej)=>{"use strict";var wPr=G(),Kk=nr(),EPr=P(),rj=.00991256303526217;function NPr(r,e){var t,i,n;for(i=Kk(-.5*e*e),t=[],t.push(rj/i),t.push(e),n=2;n<r;n++)t[n]=wPr(-2*EPr(rj/t[n-1]+i)),i=Kk(-.5*t[n]*t[n]);return t.push(0),t}ej.exports=NPr});var nj=s((W1e,ij)=>{"use strict";function APr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}ij.exports=APr});var uj=s((D1e,sj)=>{"use strict";var aj=P();function SPr(r,e,t){var i,n;do i=aj(r())/e,n=aj(r());while(-2*n<i*i);return t?i-e:e-i}sj.exports=SPr});var cj=s((z1e,vj)=>{"use strict";var OPr=J(),oj=nr(),TPr=tj(),IPr=nj(),_Pr=uj(),LPr=128,fj=3.442619855899,Ct=TPr(LPr,fj),PPr=IPr(Ct),RPr=127;function FPr(r,e){return t;function t(){for(var i,n,a,u,o,v,f;;){if(o=2*r()-1,v=e()&RPr,OPr(o)<PPr[v])return o*Ct[v];if(v===0)return _Pr(r,fj,o<0);if(u=o*Ct[v],a=u*u,f=v+1,i=oj(-.5*(Ct[v]*Ct[v]-a)),n=oj(-.5*(Ct[f]*Ct[f]-a)),n+r()*(i-n)<1)return u}}}vj.exports=FPr});var g3=s((X1e,gj)=>{"use strict";var et=w(),m0=R(),lj=M(),MPr=L(),BPr=I(),kPr=or().isPrimitive,d0=S(),jPr=$r(),p3=z().factory,pj=O(),CPr=C(),GPr=Q(),VPr=Wt(),UPr=B(),In=y(),HPr=cj();function WPr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!BPr(r))throw new TypeError(In("invalid argument. Must provide an object. Value: `%s`.",r));if(d0(r,"copy")&&(n.copy=r.copy,!kPr(r.copy)))throw new TypeError(In("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(d0(r,"prng")){if(!MPr(r.prng))throw new TypeError(In("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(d0(r,"state")){if(n.state=r.state,!jPr(r.state))throw new TypeError(In("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(d0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(In("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=p3(n),e=t.normalized):(t=p3({seed:GPr(1+VPr*e()),copy:n.copy}),n.seed=null):(t=p3(n),e=t.normalized),i=HPr(e,t),et(i,"NAME","improved-ziggurat"),n.seed===null?(et(i,"seed",null),et(i,"seedLength",null)):(m0(i,"seed",a),m0(i,"seedLength",u)),r&&r.prng?(lj(i,"state",pj(null),CPr),et(i,"stateLength",null),et(i,"byteLength",null),et(i,"toJSON",pj(null))):(lj(i,"state",f,c),m0(i,"stateLength",o),m0(i,"byteLength",v),et(i,"toJSON",l)),et(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=UPr(t.state),p.params=[],p}}gj.exports=WPr});var dj=s((J1e,mj)=>{"use strict";var DPr=g3(),zPr=DPr();mj.exports=zPr});var tt=s((x1e,qj)=>{"use strict";var XPr=w(),hj=dj(),JPr=g3();XPr(hj,"factory",JPr);qj.exports=hj});var bj=s((Y1e,yj)=>{"use strict";var xPr=L(),YPr=xPr(Object.assign);yj.exports=YPr});var Ej=s((Z1e,wj)=>{"use strict";var ZPr=Object.assign;wj.exports=ZPr});var Aj=s(($1e,Nj)=>{"use strict";var $Pr=typeof Object.getOwnPropertySymbols<"u";Nj.exports=$Pr});var Tj=s((Q1e,Oj)=>{"use strict";var Sj=Xt(),QPr=Sj.getOwnPropertySymbols;function KPr(r){return QPr(Sj(r))}Oj.exports=KPr});var _j=s((K1e,Ij)=>{"use strict";function rRr(){return[]}Ij.exports=rRr});var Pj=s((r3e,Lj)=>{"use strict";var eRr=Aj(),tRr=Tj(),iRr=_j(),m3;eRr?m3=tRr:m3=iRr;Lj.exports=m3});var Fj=s((e3e,Rj)=>{"use strict";var nRr=zt(),aRr=Pj(),sRr=Di();function uRr(r){var e,t,i;for(e=nRr(r),t=aRr(r),i=0;i<t.length;i++)sRr(r,t[i])&&e.push(t[i]);return e}Rj.exports=uRr});var Bj=s((t3e,Mj)=>{"use strict";var oRr=Fj();Mj.exports=oRr});var Cj=s((i3e,jj)=>{"use strict";var fRr=Bj(),kj=Xt(),vRr=y();function cRr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(vRr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=kj(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=fRr(kj(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}jj.exports=cRr});var _n=s((n3e,Gj)=>{"use strict";var lRr=bj(),pRr=Ej(),gRr=Cj(),d3;lRr?d3=pRr:d3=gRr;Gj.exports=d3});var Wj=s((a3e,Hj)=>{"use strict";var Vj=D().isPrimitive,Uj=y();function mRr(r,e){return Vj(r)?Vj(e)?null:new TypeError(Uj("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Uj("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Hj.exports=mRr});var xj=s((s3e,Jj)=>{"use strict";var Dj=P(),zj=G(),dRr=W(),Xj=1/3;function hRr(r,e,t){var i,n,a,u,o,v,f,c,l,p;for(t<1?(v=t+1-Xj,o=1/zj(9*v),c=dRr(r(),1/t)):(v=t-Xj,o=1/zj(9*v),c=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,n=f*f,a=1-.331*n*n,u=.5*n+v*(1-p+Dj(p)),l=r(),(l<a||Dj(l)<u)&&(i=!1)}return v*p*c}Jj.exports=hRr});var $j=s((u3e,Zj)=>{"use strict";var h3=W(),Yj=P();function qRr(r,e,t){var i,n,a,u,o,v,f,c;for(a=t-1,o=h3(a+a,.5),i=!0;i===!0;)u=e(),f=.5*(1+u/o),f>=0&&f<=1&&(v=r(),n=h3(u,4),c=8*t-12,c=1-n/c,v<=c?i=!1:(c+=.5*h3(n/(8*t-8),2),v<c&&(c=a*Yj(4*f*(1-f)),c+=u*u/2,c>=Yj(v)&&(i=!1))));return f}Zj.exports=qRr});var Kj=s((o3e,Qj)=>{"use strict";var yRr=W(),h0=P();function bRr(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h;for(o=t-1,v=i-1,f=o+v,c=f*h0(f),u=o/f,n=.5/yRr(f,.5),a=!0;a===!0;)l=e(),m=u+l*n,m>=0&&m<=1&&(p=r(),h=o*h0(m/o),h+=v*h0((1-m)/v),h+=c+.5*l*l,h>=h0(p)&&(a=!1));return m}Qj.exports=bRr});var tC=s((f3e,eC)=>{"use strict";var q3=nr(),rC=W(),y3=P();function wRr(r,e,t){for(var i,n,a,u,o,v,f;;)if(u=r(),o=r(),v=rC(u,1/e),f=rC(o,1/t),a=v+f,a<=1)return a>0?v/a:(i=y3(u)/e,n=y3(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),q3(i-y3(q3(i)+q3(n))))}eC.exports=wRr});var aC=s((v3e,nC)=>{"use strict";var iC=xj(),ERr=$j(),NRr=Kj(),ARr=tC();function SRr(r,e,t,i){var n,a;return t===i&&t>1.5?ERr(r,e,t):t>1&&i>1?NRr(r,e,t,i):t<1&&i<1?ARr(r,t,i):(n=iC(r,e,t),a=iC(r,e,i),n/(n+a))}nC.exports=SRr});var N3=s((c3e,mC)=>{"use strict";var fe=w(),q0=R(),sC=M(),uC=I(),oC=or().isPrimitive,fC=L(),bi=S(),vC=O(),ORr=C(),cC=tt().factory,y0=z().factory,lC=E(),b3=$e(),w3=lr(),E3=$r(),pC=_n(),TRr=B(),ve=y(),IRr=Wj(),gC=aC();function _Rr(){var r,e,t,i,n,a,u,o,v;if(o=!0,arguments.length===0)n={copy:!1},a=y0(n);else if(arguments.length===1){if(n=arguments[0],!uC(n))throw new TypeError(ve("invalid argument. Options argument must be an object. Value: `%s`.",n));if(bi(n,"copy")&&!oC(n.copy))throw new TypeError(ve("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(bi(n,"prng")){if(!fC(n.prng))throw new TypeError(ve("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(bi(n,"state")&&!E3(n.state))throw new TypeError(ve("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=pC({},n),n.copy===!1?o=!1:n.state&&(n.state=b3(n.state.length,n.state,1,new w3(n.state.length),1)),n.copy=!1,a=y0(n)}}else{if(t=arguments[0],i=arguments[1],v=IRr(t,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!uC(n))throw new TypeError(ve("invalid argument. Options argument must be an object. Value: `%s`.",n));if(bi(n,"copy")&&!oC(n.copy))throw new TypeError(ve("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(bi(n,"prng")){if(!fC(n.prng))throw new TypeError(ve("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(bi(n,"state")&&!E3(n.state))throw new TypeError(ve("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=pC({},n),n.copy===!1?o=!1:n.state&&(n.state=b3(n.state.length,n.state,1,new w3(n.state.length),1)),n.copy=!1,a=y0(n)}}else n={copy:!1},a=y0(n)}return n&&n.prng?e=cC({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=cC({state:r,copy:!1})),t===void 0?u=q:u=g,fe(u,"NAME","beta"),n&&n.prng?(fe(u,"seed",null),fe(u,"seedLength",null),sC(u,"state",vC(null),ORr),fe(u,"stateLength",null),fe(u,"byteLength",null),fe(u,"toJSON",vC(null)),fe(u,"PRNG",a)):(q0(u,"seed",f),q0(u,"seedLength",c),sC(u,"state",m,h),q0(u,"stateLength",l),q0(u,"byteLength",p),fe(u,"toJSON",d),fe(u,"PRNG",a),a=a.normalized),u;function f(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function m(){return a.state}function h(N){if(!E3(N))throw new TypeError(ve("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=b3(N.length,N,1,new w3(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=TRr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function g(){return gC(a,e,t,i)}function q(N,A){return lC(N)||lC(A)||N<=0||A<=0?NaN:gC(a,e,N,A)}}mC.exports=_Rr});var hC=s((l3e,dC)=>{"use strict";var LRr=N3(),PRr=LRr();dC.exports=PRr});var bC=s((p3e,yC)=>{"use strict";var RRr=w(),qC=hC(),FRr=N3();RRr(qC,"factory",FRr);yC.exports=qC});var AC=s((g3e,NC)=>{"use strict";var wC=D().isPrimitive,EC=y();function MRr(r,e){return wC(r)?wC(e)?null:new TypeError(EC("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(EC("invalid argument. First argument must be a positive number. Value: `%s`.",r))}NC.exports=MRr});var TC=s((m3e,OC)=>{"use strict";var SC=P();function BRr(r,e,t,i,n){var a,u,o,v,f,c,l;for(a=!0;a;){do f=e(),l=1+n*f;while(l<=0);l*=l*l,u=f*f,o=1-.331*u*u,v=.5*u+i*(1-l+SC(l)),c=r(),(c<o||SC(c)<v)&&(a=!1)}return 1/t*i*l}OC.exports=BRr});var I3=s((d3e,jC)=>{"use strict";var ce=w(),b0=R(),IC=M(),_C=I(),A3=$r(),LC=or().isPrimitive,PC=L(),wi=S(),RC=O(),kRr=C(),FC=tt().factory,w0=z().factory,MC=E(),S3=G(),BC=W(),O3=$e(),T3=lr(),jRr=B(),kC=_n(),le=y(),CRr=AC(),E0=TC(),N0=1/3;function GRr(){var r,e,t,i,n,a,u,o,v,f,c;if(o=!0,arguments.length===0)n={copy:!1},a=w0(n);else if(arguments.length===1){if(n=arguments[0],!_C(n))throw new TypeError(le("invalid argument. Options argument must be an object. Value: `%s`.",n));if(wi(n,"copy")&&!LC(n.copy))throw new TypeError(le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(wi(n,"prng")){if(!PC(n.prng))throw new TypeError(le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(wi(n,"state")&&!A3(n.state))throw new TypeError(le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=kC({},n),n.copy===!1?o=!1:n.state&&(n.state=O3(n.state.length,n.state,1,new T3(n.state.length),1)),n.copy=!1,a=w0(n)}}else{if(e=arguments[0],i=arguments[1],v=CRr(e,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!_C(n))throw new TypeError(le("invalid argument. Options argument must be an object. Value: `%s`.",n));if(wi(n,"copy")&&!LC(n.copy))throw new TypeError(le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(wi(n,"prng")){if(!PC(n.prng))throw new TypeError(le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(wi(n,"state")&&!A3(n.state))throw new TypeError(le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=kC({},n),n.copy===!1?o=!1:n.state&&(n.state=O3(n.state.length,n.state,1,new T3(n.state.length),1)),n.copy=!1,a=w0(n)}}else n={copy:!1},a=w0(n)}return n&&n.prng?t=FC({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=FC({state:r,copy:!1})),e===void 0?u=j:(e>=1?(u=N,c=e-N0):(u=A,c=e+1-N0),f=1/S3(9*c)),ce(u,"NAME","gamma"),n&&n.prng?(ce(u,"seed",null),ce(u,"seedLength",null),IC(u,"state",RC(null),kRr),ce(u,"stateLength",null),ce(u,"byteLength",null),ce(u,"toJSON",RC(null)),ce(u,"PRNG",a)):(b0(u,"seed",l),b0(u,"seedLength",p),IC(u,"state",d,g),b0(u,"stateLength",m),b0(u,"byteLength",h),ce(u,"toJSON",q),ce(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function m(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function g(T){if(!A3(T))throw new TypeError(le("invalid argument. Must provide a Uint32Array. Value: `%s`.",T));o&&(T=O3(T.length,T,1,new T3(T.length),1)),a.state=T}function q(){var T={};return T.type="PRNG",T.name=u.NAME,T.state=jRr(a.state),e===void 0?T.params=[]:T.params=[e,i],T}function N(){return E0(a,t,i,c,f)}function A(){return E0(a,t,i,c,f)*BC(a(),1/e)}function j(T,X){var vr,$;return MC(T)||MC(X)||T<=0||X<=0?NaN:T<1?($=T+1-N0,vr=1/S3(9*$),E0(a,t,X,$,vr)*BC(a(),1/T)):($=T-N0,vr=1/S3(9*$),E0(a,t,X,$,vr))}}jC.exports=GRr});var GC=s((h3e,CC)=>{"use strict";var VRr=I3(),URr=VRr();CC.exports=URr});var Ei=s((q3e,UC)=>{"use strict";var HRr=w(),VC=GC(),WRr=I3();HRr(VC,"factory",WRr);UC.exports=VC});var zC=s((y3e,DC)=>{"use strict";var HC=D().isPrimitive,WC=y();function DRr(r,e){return HC(r)?HC(e)?null:new TypeError(WC("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(WC("invalid argument. First argument must be a positive number. Value: `%s`.",r))}DC.exports=DRr});var JC=s((b3e,XC)=>{"use strict";function zRr(r,e,t){return r(e,1)/r(t,1)}XC.exports=zRr});var _3=s((w3e,rG)=>{"use strict";var it=w(),A0=R(),xC=M(),YC=I(),ZC=O(),XRr=C(),S0=Ei().factory,$C=E(),JRr=B(),QC=y(),xRr=zC(),KC=JC();function YRr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=S0();else if(arguments.length===1){if(i=arguments[0],!YC(i))throw new TypeError(QC("invalid argument. Options argument must be an object. Value: `%s`.",i));r=S0(i)}else{if(e=arguments[0],t=arguments[1],u=xRr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!YC(i))throw new TypeError(QC("invalid argument. Options argument must be an object. Value: `%s`.",i));r=S0(i)}else r=S0()}return e===void 0?a=d:a=h,n=r.PRNG,it(a,"NAME","betaprime"),i&&i.prng?(it(a,"seed",null),it(a,"seedLength",null),xC(a,"state",ZC(null),XRr),it(a,"stateLength",null),it(a,"byteLength",null),it(a,"toJSON",ZC(null))):(A0(a,"seed",o),A0(a,"seedLength",v),xC(a,"state",l,p),A0(a,"stateLength",f),A0(a,"byteLength",c),it(a,"toJSON",m)),it(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=JRr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return KC(r,e,t)}function d(g,q){return $C(g)||$C(q)||g<=0||q<=0?NaN:KC(r,g,q)}}rG.exports=YRr});var tG=s((E3e,eG)=>{"use strict";var ZRr=_3(),$Rr=ZRr();eG.exports=$Rr});var aG=s((N3e,nG)=>{"use strict";var QRr=w(),iG=tG(),KRr=_3();QRr(iG,"factory",KRr);nG.exports=iG});var uG=s((A3e,sG)=>{"use strict";var rFr=Q();function eFr(r){return rFr(r)===r&&r>0}sG.exports=eFr});var L3=s((S3e,oG)=>{"use strict";var tFr=uG();oG.exports=tFr});var vG=s((O3e,fG)=>{"use strict";function iFr(r){return r>=0&&r<=1}fG.exports=iFr});var lG=s((T3e,cG)=>{"use strict";var nFr=vG();cG.exports=nFr});var mG=s((I3e,gG)=>{"use strict";var aFr=ie().isPrimitive,sFr=hn().isPrimitive,pG=y();function uFr(r,e){return aFr(r)?sFr(e)?null:new TypeError(pG("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(pG("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}gG.exports=uFr});var hG=s((_3e,dG)=>{"use strict";function oFr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}dG.exports=oFr});var yG=s((L3e,qG)=>{"use strict";var fFr=E();function vFr(r){return r===0||fFr(r)?r:r<0?-1:1}qG.exports=vFr});var O0=s((P3e,bG)=>{"use strict";var cFr=yG();bG.exports=cFr});var EG=s((R3e,wG)=>{"use strict";var lFr=W(),pFr=1/12,gFr=1/360,mFr=1/1260;function dFr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=lFr(r,2),(pFr-(gFr-mFr/e)/e)/r}}wG.exports=dFr});var AG=s((F3e,NG)=>{"use strict";var P3=Q(),hFr=O0(),qFr=G(),R3=J(),T0=P(),I0=EG(),yFr=1/6;function bFr(r,e,t){var i,n,a,u,o,v,f,c,l,p,m,h,d,g,q,N,A,j,T,X,vr,$,gu,Dr,gr,Wn;for(X=P3((e+1)*t),f=e-X+1,vr=1-t,$=t/vr,c=(e+1)*$,u=e*t*vr,a=qFr(u),g=1.15+2.53*a,d=-.0873+.0248*g+.01*t,q=e*t+.5,i=(2.83+5.1/g)*a,h=.92-4.2/g,n=.86*h,A=(X+.5)*T0((X+1)/($*f)),A+=I0(X)+I0(e-X);;){if(gr=r(),gr<=n)return Dr=gr/h-.43,$=Dr*(2*d/(.5-R3(Dr))+g)+q,P3($);if(gr>=h?Dr=r()-.5:(Dr=gr/h-.93,Dr=hFr(Dr)*.5-Dr,gr=h*r()),l=.5-R3(Dr),T=P3(Dr*(2*d/l+g)+q),!(T<0||T>e))if(gr=gr*i/(d/(l*l)+g),p=R3(T-X),p>15){if(gr=T0(gr),o=p/u,v=(p/3+.625)*p,v+=yFr,v/=u,o*=v+.5,gu=-(p*p)/(2*u),gr<gu-o||gr<=gu+o&&(m=e-T+1,Wn=A+(e+1)*T0(f/m),Wn+=(T+.5)*T0(m*$/(T+1)),Wn+=-(I0(T)+I0(e-T)),gr<=Wn))return T}else{if(N=1,X<T)for(j=X;j<=T;j++)N*=c/j-$;else if(X>T)for(j=T;j<=X;j++)gr*=c/j-$;if(gr<=N)return T}}}NG.exports=bFr});var TG=s((M3e,OG)=>{"use strict";var wFr=hG(),EFr=AG();function SG(r,e,t){return t>.5?e-SG(r,e,1-t):e*t<10?wFr(r,e,t):EFr(r,e,t)}OG.exports=SG});var F3=s((B3e,BG)=>{"use strict";var pe=w(),_0=R(),IG=M(),_G=I(),LG=L(),PG=S(),RG=O(),NFr=C(),FG=E(),AFr=L3(),SFr=lG(),L0=z().factory,OFr=B(),P0=y(),TFr=mG(),MG=TG();function IFr(){var r,e,t,i,n,a;if(arguments.length===0)e=L0();else if(arguments.length===1){if(r=arguments[0],!_G(r))throw new TypeError(P0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PG(r,"prng")){if(!LG(r.prng))throw new TypeError(P0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=L0(r)}else{if(n=arguments[0],a=arguments[1],i=TFr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!_G(r))throw new TypeError(P0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PG(r,"prng")){if(!LG(r.prng))throw new TypeError(P0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=L0(r)}else e=L0()}return n===void 0?t=h:t=m,pe(t,"NAME","binomial"),r&&r.prng?(pe(t,"seed",null),pe(t,"seedLength",null),IG(t,"state",RG(null),NFr),pe(t,"stateLength",null),pe(t,"byteLength",null),pe(t,"toJSON",RG(null)),pe(t,"PRNG",e)):(_0(t,"seed",u),_0(t,"seedLength",o),IG(t,"state",c,l),_0(t,"stateLength",v),_0(t,"byteLength",f),pe(t,"toJSON",p),pe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=OFr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return MG(e,n,a)}function h(d,g){return FG(d)||FG(g)||!AFr(d)||!SFr(g)?NaN:MG(e,d,g)}}BG.exports=IFr});var jG=s((k3e,kG)=>{"use strict";var _Fr=F3(),LFr=_Fr();kG.exports=LFr});var VG=s((j3e,GG)=>{"use strict";var PFr=w(),CG=jG(),RFr=F3();PFr(CG,"factory",RFr);GG.exports=CG});var HG=s((C3e,UG)=>{"use strict";var FFr=G(),MFr=P(),BFr=St(),kFr=At(),jFr=Ve();function CFr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=FFr(-2*MFr(n)),o=jFr*a,t=u*kFr(o),e=!1,u*BFr(o)}return e=!0,t}}UG.exports=CFr});var DG=s((G3e,WG)=>{"use strict";var GFr=G(),VFr=P(),UFr=At(),HFr=Ir(),WFr=UFr(HFr);function DFr(r){var e=GFr(-2*VFr(r));return e*WFr}WG.exports=DFr});var XG=s((V3e,zG)=>{"use strict";var zFr=G(),XFr=P(),JFr=At(),xFr=Ve();function YFr(r){var e=zFr(-2*XFr(r)),t=xFr*r;return e*JFr(t)}zG.exports=YFr});var M3=s((U3e,ZG)=>{"use strict";var Br=w(),R0=R(),JG=M(),ZFr=I(),$Fr=L(),QFr=or().isPrimitive,Ln=S(),KFr=$r(),xG=z().factory,YG=O(),rMr=C(),eMr=B(),Pn=y(),tMr=HG(),iMr=DG(),nMr=XG();function aMr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!ZFr(r))throw new TypeError(Pn("invalid argument. Must provide an object. Value: `%s`.",r));if(Ln(r,"copy")&&(n.copy=r.copy,!QFr(r.copy)))throw new TypeError(Pn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Ln(r,"prng")){if(!$Fr(r.prng))throw new TypeError(Pn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Ln(r,"state")){if(n.state=r.state,!KFr(r.state))throw new TypeError(Pn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Ln(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Pn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=xG(n),e=i.normalized):n.seed=null:(i=xG(n),e=i.normalized),t=tMr(e),Br(t,"NAME","box-muller"),n.seed===null?(Br(t,"seed",null),Br(t,"seedLength",null)):(R0(t,"seed",a),R0(t,"seedLength",u)),r&&r.prng?(JG(t,"state",YG(null),rMr),Br(t,"stateLength",null),Br(t,"byteLength",null),Br(t,"toJSON",YG(null))):(JG(t,"state",f,c),R0(t,"stateLength",o),R0(t,"byteLength",v),Br(t,"toJSON",l)),Br(t,"PRNG",e),Ln(e,"MIN")?(Br(t,"MIN",iMr(e.MIN)),Br(t,"MAX",nMr(e.MIN))):(Br(t,"MIN",null),Br(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=eMr(i.state),p.params=[],p}}ZG.exports=aMr});var QG=s((H3e,$G)=>{"use strict";var sMr=M3(),uMr=sMr();$G.exports=uMr});var eV=s((W3e,rV)=>{"use strict";var oMr=w(),KG=QG(),fMr=M3();oMr(KG,"factory",fMr);rV.exports=KG});var nV=s((D3e,iV)=>{"use strict";var vMr=k().isPrimitive,cMr=D().isPrimitive,tV=y(),lMr=sr();function pMr(r,e){return!vMr(r)||lMr(r)?new TypeError(tV("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):cMr(e)?null:new TypeError(tV("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}iV.exports=pMr});var sV=s((z3e,aV)=>{"use strict";var gMr=J2(),mMr=Ir();function dMr(r,e,t){return e+t*gMr(mMr*(r()-.5))}aV.exports=dMr});var B3=s((X3e,gV)=>{"use strict";var nt=w(),F0=R(),uV=M(),oV=I(),fV=L(),vV=S(),cV=O(),hMr=C(),lV=E(),Ni=tt().factory,qMr=B(),M0=y(),yMr=nV(),pV=sV();function bMr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Ni();else if(arguments.length===1){if(t=arguments[0],!oV(t))throw new TypeError(M0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(vV(t,"prng")){if(!fV(t.prng))throw new TypeError(M0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ni({prng:t.prng})}else e=Ni(t)}else{if(u=arguments[0],r=arguments[1],a=yMr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!oV(t))throw new TypeError(M0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(vV(t,"prng")){if(!fV(t.prng))throw new TypeError(M0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ni({prng:t.prng})}else e=Ni(t)}else e=Ni()}return u===void 0?n=d:n=h,i=e.PRNG,nt(n,"NAME","cauchy"),t&&t.prng?(nt(n,"seed",null),nt(n,"seedLength",null),uV(n,"state",cV(null),hMr),nt(n,"stateLength",null),nt(n,"byteLength",null),nt(n,"toJSON",cV(null))):(F0(n,"seed",o),F0(n,"seedLength",v),uV(n,"state",l,p),F0(n,"stateLength",f),F0(n,"byteLength",c),nt(n,"toJSON",m)),nt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=qMr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return pV(e,u,r)}function d(g,q){return lV(g)||lV(q)||q<=0?NaN:pV(e,g,q)}}gV.exports=bMr});var dV=s((J3e,mV)=>{"use strict";var wMr=B3(),EMr=wMr();mV.exports=EMr});var yV=s((x3e,qV)=>{"use strict";var NMr=w(),hV=dV(),AMr=B3();NMr(hV,"factory",AMr);qV.exports=hV});var k3=s((Y3e,SV)=>{"use strict";var at=w(),B0=R(),bV=M(),SMr=D().isPrimitive,wV=I(),EV=L(),NV=S(),AV=O(),OMr=C(),TMr=E(),Ai=Ei().factory,IMr=B(),k0=y();function _Mr(){var r,e,t,i,n;if(arguments.length===0)r=Ai();else if(arguments.length===1&&wV(arguments[0]))if(t=arguments[0],NV(t,"prng")){if(!EV(t.prng))throw new TypeError(k0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ai({prng:t.prng})}else r=Ai(t);else{if(n=arguments[0],!SMr(n))throw new TypeError(k0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!wV(t))throw new TypeError(k0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(NV(t,"prng")){if(!EV(t.prng))throw new TypeError(k0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ai(n/2,.5,{prng:t.prng})}else r=Ai(n/2,.5,t)}else r=Ai(n/2,.5)}return n===void 0?i=m:i=p,e=r.PRNG,at(i,"NAME","chisquare"),t&&t.prng?(at(i,"seed",null),at(i,"seedLength",null),bV(i,"state",AV(null),OMr),at(i,"stateLength",null),at(i,"byteLength",null),at(i,"toJSON",AV(null))):(B0(i,"seed",a),B0(i,"seedLength",u),bV(i,"state",f,c),B0(i,"stateLength",o),B0(i,"byteLength",v),at(i,"toJSON",l)),at(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=IMr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function m(h){return TMr(h)||h<=0?NaN:r(h/2,.5)}}SV.exports=_Mr});var TV=s((Z3e,OV)=>{"use strict";var LMr=k3(),PMr=LMr();OV.exports=PMr});var Rn=s(($3e,_V)=>{"use strict";var RMr=w(),IV=TV(),FMr=k3();RMr(IV,"factory",FMr);_V.exports=IV});var j3=s((Q3e,kV)=>{"use strict";var st=w(),j0=R(),LV=M(),MMr=D().isPrimitive,PV=I(),RV=L(),FV=S(),MV=O(),BMr=C(),kMr=E(),Si=Rn().factory,jMr=B(),BV=G(),C0=y();function CMr(){var r,e,t,i,n;if(arguments.length===0)r=Si();else if(arguments.length===1&&PV(arguments[0]))if(t=arguments[0],FV(t,"prng")){if(!RV(t.prng))throw new TypeError(C0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Si({prng:t.prng})}else r=Si(t);else{if(n=arguments[0],!MMr(n))throw new TypeError(C0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!PV(t))throw new TypeError(C0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(FV(t,"prng")){if(!RV(t.prng))throw new TypeError(C0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Si(n,{prng:t.prng})}else r=Si(n,t)}else r=Si(n)}return n===void 0?i=m:i=p,e=r.PRNG,st(i,"NAME","chi"),t&&t.prng?(st(i,"seed",null),st(i,"seedLength",null),LV(i,"state",MV(null),BMr),st(i,"stateLength",null),st(i,"byteLength",null),st(i,"toJSON",MV(null))):(j0(i,"seed",a),j0(i,"seedLength",u),LV(i,"state",f,c),j0(i,"stateLength",o),j0(i,"byteLength",v),st(i,"toJSON",l)),st(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=jMr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return BV(r())}function m(h){return kMr(h)||h<=0?NaN:BV(r(h))}}kV.exports=CMr});var CV=s((K3e,jV)=>{"use strict";var GMr=j3(),VMr=GMr();jV.exports=VMr});var UV=s((rfe,VV)=>{"use strict";var UMr=w(),GV=CV(),HMr=j3();UMr(GV,"factory",HMr);VV.exports=GV});var DV=s((efe,WV)=>{"use strict";var WMr=k().isPrimitive,DMr=D().isPrimitive,HV=y(),zMr=sr();function XMr(r,e){return!WMr(r)||zMr(r)?new TypeError(HV("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):DMr(e)?null:new TypeError(HV("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}WV.exports=XMr});var XV=s((tfe,zV)=>{"use strict";var C3=E(),JMr=Qi(),xMr=Ir();function YMr(r,e,t){var i;return C3(r)||C3(e)||C3(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+JMr(i)/xMr)/2)}zV.exports=YMr});var xV=s((ife,JV)=>{"use strict";var ZMr=O(),$Mr=Ta().factory,G3=E(),QMr=Qi(),KMr=Ir();function rBr(r,e){if(G3(r)||G3(e)||e<0)return ZMr(NaN);if(e===0)return $Mr(r);return t;function t(i){var n;return G3(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+QMr(n)/KMr)/2)}}JV.exports=rBr});var $V=s((nfe,ZV)=>{"use strict";var eBr=w(),YV=XV(),tBr=xV();eBr(YV,"factory",tBr);ZV.exports=YV});var V3=s((afe,QV)=>{"use strict";var iBr=$V(),nBr=1e4,aBr=1e-12;function sBr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<nBr;){if(u=(i+n)/2,n-i<aBr)return u;a=iBr(u,e,t),r>a?i=u:n=u,o+=1}return u}QV.exports=sBr});var rU=s((sfe,KV)=>{"use strict";var U3=E(),uBr=V3();function oBr(r,e,t){return U3(e)||U3(t)||U3(r)||t<0||r<0||r>1?NaN:t===0?e:uBr(r,e,t)}KV.exports=oBr});var tU=s((ufe,eU)=>{"use strict";var fBr=O(),vBr=D1().factory,H3=E(),cBr=V3();function lBr(r,e){if(H3(r)||H3(e)||e<0)return fBr(NaN);if(e===0)return vBr(r);return t;function t(i){return H3(i)||i<0||i>1?NaN:cBr(i,r,e)}}eU.exports=lBr});var aU=s((ofe,nU)=>{"use strict";var pBr=w(),iU=rU(),gBr=tU();pBr(iU,"factory",gBr);nU.exports=iU});var uU=s((ffe,sU)=>{"use strict";var mBr=aU();function dBr(r,e,t){return mBr(r(),e,t)}sU.exports=dBr});var W3=s((vfe,mU)=>{"use strict";var ge=w(),G0=R(),oU=M(),fU=I(),vU=L(),cU=S(),lU=O(),hBr=C(),V0=z().factory,pU=E(),qBr=B(),U0=y(),yBr=DV(),gU=uU();function bBr(){var r,e,t,i,n,a;if(arguments.length===0)e=V0();else if(arguments.length===1){if(r=arguments[0],!fU(r))throw new TypeError(U0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(cU(r,"prng")){if(!vU(r.prng))throw new TypeError(U0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=V0(r)}else{if(n=arguments[0],a=arguments[1],i=yBr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!fU(r))throw new TypeError(U0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(cU(r,"prng")){if(!vU(r.prng))throw new TypeError(U0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=V0(r)}else e=V0()}return n===void 0?t=h:t=m,ge(t,"NAME","cosine"),r&&r.prng?(ge(t,"seed",null),ge(t,"seedLength",null),oU(t,"state",lU(null),hBr),ge(t,"stateLength",null),ge(t,"byteLength",null),ge(t,"toJSON",lU(null)),ge(t,"PRNG",e)):(G0(t,"seed",u),G0(t,"seedLength",o),oU(t,"state",c,l),G0(t,"stateLength",v),G0(t,"byteLength",f),ge(t,"toJSON",p),ge(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=qBr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return gU(e,n,a)}function h(d,g){return pU(d)||pU(g)||g<=0?NaN:gU(e,d,g)}}mU.exports=bBr});var hU=s((cfe,dU)=>{"use strict";var wBr=W3(),EBr=wBr();dU.exports=EBr});var bU=s((lfe,yU)=>{"use strict";var NBr=w(),qU=hU(),ABr=W3();NBr(qU,"factory",ABr);yU.exports=qU});var AU=s((pfe,NU)=>{"use strict";var wU=jr().isPrimitive,D3=y(),EU=sr();function SBr(r,e){return!wU(r)||EU(r)?new TypeError(D3("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!wU(e)||EU(e)?new TypeError(D3("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(D3("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}NU.exports=SBr});var TU=s((gfe,OU)=>{"use strict";var z3=an(),Oi=Q();function SU(r,e,t){var i,n,a,u,o,v,f,c,l;if(a=t-e,a===0)return e;if(f=r.MIN,c=r.MAX,n=c-f,n===a)return r()-f+e;if(n<a)for(u=0;;){for(a===z3?(u=Oi(a/(n+1)),a%(n+1)===n&&(u+=1)):u=Oi((a+1)/(n+1)),i=0,v=1;v<=u;){if(i+=(r()-f)*v,v*n===a-v+1)return i;v*=n+1}if(l=SU(r,0,Oi(a/v)),!(l>z3/v)&&(l*=v,i+=l,!(i>a)))return i+e}for(n===z3?(o=Oi(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Oi((n+1)/(a+1));;)if(i=r()-f,i=Oi(i/o),i<=a)return i+e}OU.exports=SU});var X3=s((mfe,BU)=>{"use strict";var me=w(),H0=R(),IU=M(),_U=I(),LU=L(),PU=S(),RU=O(),OBr=C(),W0=z().factory,FU=E(),Ti=Tr(),TBr=B(),ut=y(),IBr=AU(),MU=TU();function _Br(){var r,e,t,i,n,a;if(arguments.length===0)e=W0();else if(arguments.length===1){if(r=arguments[0],!_U(r))throw new TypeError(ut("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PU(r,"prng")){if(!LU(r.prng))throw new TypeError(ut("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Ti(e.MIN))throw new TypeError(ut("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Ti(e.MAX))throw new TypeError(ut("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=W0(r)}else{if(n=arguments[0],a=arguments[1],i=IBr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!_U(r))throw new TypeError(ut("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PU(r,"prng")){if(!LU(r.prng))throw new TypeError(ut("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Ti(e.MIN))throw new TypeError(ut("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Ti(e.MAX))throw new TypeError(ut("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=W0(r)}else e=W0()}return n===void 0?t=h:t=m,me(t,"NAME","discrete-uniform"),r&&r.prng?(me(t,"seed",null),me(t,"seedLength",null),IU(t,"state",RU(null),OBr),me(t,"stateLength",null),me(t,"byteLength",null),me(t,"toJSON",RU(null)),me(t,"PRNG",e)):(H0(t,"seed",u),H0(t,"seedLength",o),IU(t,"state",c,l),H0(t,"stateLength",v),H0(t,"byteLength",f),me(t,"toJSON",p),me(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=TBr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return MU(e,n,a)}function h(d,g){return FU(d)||FU(g)||!Ti(d)||!Ti(g)||d>g?NaN:MU(e,d,g)}}BU.exports=_Br});var jU=s((dfe,kU)=>{"use strict";var LBr=X3(),PBr=LBr();kU.exports=PBr});var VU=s((hfe,GU)=>{"use strict";var RBr=w(),CU=jU(),FBr=X3();RBr(CU,"factory",FBr);GU.exports=CU});var WU=s((qfe,HU)=>{"use strict";var MBr=D().isPrimitive,BBr=ie().isPrimitive,UU=y();function kBr(r,e){return BBr(r)?MBr(e)?null:new TypeError(UU("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(UU("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}HU.exports=kBr});var zU=s((yfe,DU)=>{"use strict";var jBr=P();function CBr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*jBr(i)}DU.exports=CBr});var J3=s((bfe,KU)=>{"use strict";var de=w(),D0=R(),XU=M(),JU=I(),xU=L(),YU=S(),ZU=O(),GBr=C(),z0=z().factory,$U=E(),VBr=L3(),UBr=B(),X0=y(),HBr=WU(),QU=zU();function WBr(){var r,e,t,i,n,a;if(arguments.length===0)e=z0();else if(arguments.length===1){if(t=arguments[0],!JU(t))throw new TypeError(X0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(YU(t,"prng")){if(!xU(t.prng))throw new TypeError(X0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=z0(t)}else{if(a=arguments[0],r=arguments[1],n=HBr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!JU(t))throw new TypeError(X0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(YU(t,"prng")){if(!xU(t.prng))throw new TypeError(X0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=z0(t)}else e=z0()}return a===void 0?i=h:i=m,de(i,"NAME","erlang"),t&&t.prng?(de(i,"seed",null),de(i,"seedLength",null),XU(i,"state",ZU(null),GBr),de(i,"stateLength",null),de(i,"byteLength",null),de(i,"toJSON",ZU(null)),de(i,"PRNG",e)):(D0(i,"seed",u),D0(i,"seedLength",o),XU(i,"state",c,l),D0(i,"stateLength",v),D0(i,"byteLength",f),de(i,"toJSON",p),de(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=UBr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return QU(e,a,r)}function h(d,g){return $U(d)||$U(g)||!VBr(d)||g<=0?NaN:QU(e,d,g)}}KU.exports=WBr});var eH=s((wfe,rH)=>{"use strict";var DBr=J3(),zBr=DBr();rH.exports=zBr});var nH=s((Efe,iH)=>{"use strict";var XBr=w(),tH=eH(),JBr=J3();XBr(tH,"factory",JBr);iH.exports=tH});var sH=s((Nfe,aH)=>{"use strict";var xBr=P();function YBr(r,e){return-xBr(1-r())/e}aH.exports=YBr});var x3=s((Afe,pH)=>{"use strict";var he=w(),J0=R(),uH=M(),ZBr=D().isPrimitive,oH=I(),fH=L(),vH=S(),cH=O(),$Br=C(),x0=z().factory,QBr=E(),KBr=B(),Y0=y(),lH=sH();function rkr(){var r,e,t,i;if(arguments.length===0)t=x0();else if(arguments.length===1&&oH(arguments[0]))if(e=arguments[0],vH(e,"prng")){if(!fH(e.prng))throw new TypeError(Y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=x0(e);else{if(r=arguments[0],!ZBr(r))throw new TypeError(Y0("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!oH(e))throw new TypeError(Y0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(vH(e,"prng")){if(!fH(e.prng))throw new TypeError(Y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=x0(e)}else t=x0()}return r===void 0?i=p:i=l,he(i,"NAME","exponential"),e&&e.prng?(he(i,"seed",null),he(i,"seedLength",null),uH(i,"state",cH(null),$Br),he(i,"stateLength",null),he(i,"byteLength",null),he(i,"toJSON",cH(null)),he(i,"PRNG",t)):(J0(i,"seed",n),J0(i,"seedLength",a),uH(i,"state",v,f),J0(i,"stateLength",u),J0(i,"byteLength",o),he(i,"toJSON",c),he(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=KBr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return lH(t,r)}function p(m){return QBr(m)||m<=0?NaN:lH(t,m)}}pH.exports=rkr});var mH=s((Sfe,gH)=>{"use strict";var ekr=x3(),tkr=ekr();gH.exports=tkr});var qH=s((Ofe,hH)=>{"use strict";var ikr=w(),dH=mH(),nkr=x3();ikr(dH,"factory",nkr);hH.exports=dH});var EH=s((Tfe,wH)=>{"use strict";var yH=D().isPrimitive,bH=y();function akr(r,e){return yH(r)?yH(e)?null:new TypeError(bH("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(bH("invalid argument. First argument must be a positive number. Value: `%s`.",r))}wH.exports=akr});var AH=s((Ife,NH)=>{"use strict";function skr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}NH.exports=skr});var Y3=s((_fe,RH)=>{"use strict";var ot=w(),Z0=R(),SH=M(),OH=I(),TH=L(),IH=S(),_H=O(),ukr=C(),Ii=Rn().factory,LH=E(),okr=B(),$0=y(),fkr=EH(),PH=AH();function vkr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Ii();else if(arguments.length===1){if(e=arguments[0],!OH(e))throw new TypeError($0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(IH(e,"prng")){if(!TH(e.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Ii({prng:e.prng})}else r=Ii(e)}else{if(a=arguments[0],u=arguments[1],n=fkr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!OH(e))throw new TypeError($0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(IH(e,"prng")){if(!TH(e.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Ii({prng:e.prng})}else r=Ii(e)}else r=Ii()}return a===void 0?i=d:i=h,t=r.PRNG,ot(i,"NAME","f"),e&&e.prng?(ot(i,"seed",null),ot(i,"seedLength",null),SH(i,"state",_H(null),ukr),ot(i,"stateLength",null),ot(i,"byteLength",null),ot(i,"toJSON",_H(null))):(Z0(i,"seed",o),Z0(i,"seedLength",v),SH(i,"state",l,p),Z0(i,"stateLength",f),Z0(i,"byteLength",c),ot(i,"toJSON",m)),ot(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=okr(t.state),a===void 0?g.params=[]:g.params=[a,u],g}function h(){return PH(r,a,u)}function d(g,q){return LH(g)||LH(q)||g<=0||q<=0?NaN:PH(r,g,q)}}RH.exports=vkr});var MH=s((Lfe,FH)=>{"use strict";var ckr=Y3(),lkr=ckr();FH.exports=lkr});var jH=s((Pfe,kH)=>{"use strict";var pkr=w(),BH=MH(),gkr=Y3();pkr(BH,"factory",gkr);kH.exports=BH});var VH=s((Rfe,GH)=>{"use strict";var CH=D().isPrimitive,mkr=k().isPrimitive,Z3=sr(),$3=y();function dkr(r,e,t){return!CH(r)||Z3(r)?new TypeError($3("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!CH(e)||Z3(e)?new TypeError($3("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!mkr(t)||Z3(t)?new TypeError($3("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}GH.exports=dkr});var HH=s((Ffe,UH)=>{"use strict";var hkr=W(),qkr=P();function ykr(r,e,t,i){return i+t*hkr(-qkr(r()),-1/e)}UH.exports=ykr});var K3=s((Mfe,YH)=>{"use strict";var qe=w(),Q0=R(),WH=M(),DH=I(),zH=L(),XH=S(),JH=O(),bkr=C(),K0=z().factory,Q3=E(),wkr=B(),rs=y(),Ekr=VH(),xH=HH();function Nkr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=K0();else if(arguments.length===1){if(e=arguments[0],!DH(e))throw new TypeError(rs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(XH(e,"prng")){if(!zH(e.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=K0(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=Ekr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!DH(e))throw new TypeError(rs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(XH(e,"prng")){if(!zH(e.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=K0(e)}else t=K0()}return r===void 0?i=d:i=h,qe(i,"NAME","frechet"),e&&e.prng?(qe(i,"seed",null),qe(i,"seedLength",null),WH(i,"state",JH(null),bkr),qe(i,"stateLength",null),qe(i,"byteLength",null),qe(i,"toJSON",JH(null)),qe(i,"PRNG",t)):(Q0(i,"seed",o),Q0(i,"seedLength",v),WH(i,"state",l,p),Q0(i,"stateLength",f),Q0(i,"byteLength",c),qe(i,"toJSON",m),qe(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=wkr(t.state),r===void 0?g.params=[]:g.params=[r,a,u],g}function h(){return xH(t,r,a,u)}function d(g,q,N){return Q3(g)||Q3(q)||Q3(N)||g<=0||q<=0?NaN:xH(t,g,q,N)}}YH.exports=Nkr});var $H=s((Bfe,ZH)=>{"use strict";var Akr=K3(),Skr=Akr();ZH.exports=Skr});var rW=s((kfe,KH)=>{"use strict";var Okr=w(),QH=$H(),Tkr=K3();Okr(QH,"factory",Tkr);KH.exports=QH});var iW=s((jfe,tW)=>{"use strict";var Ikr=Q(),eW=P();function _kr(r,e){var t=r();return t===0&&(t=r()),Ikr(eW(t)/eW(1-e))}tW.exports=_kr});var rf=s((Cfe,vW)=>{"use strict";var ye=w(),es=R(),nW=M(),aW=I(),Lkr=hn().isPrimitive,sW=L(),uW=S(),oW=O(),Pkr=C(),ts=z().factory,Rkr=E(),Fkr=B(),is=y(),fW=iW();function Mkr(){var r,e,t,i;if(arguments.length===0)e=ts();else if(arguments.length===1&&aW(arguments[0]))if(r=arguments[0],uW(r,"prng")){if(!sW(r.prng))throw new TypeError(is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ts(r);else{if(i=arguments[0],!Lkr(i))throw new TypeError(is("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!aW(r))throw new TypeError(is("invalid argument. Options argument must be an object. Value: `%s`.",r));if(uW(r,"prng")){if(!sW(r.prng))throw new TypeError(is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ts(r)}else e=ts()}return i===void 0?t=p:t=l,ye(t,"NAME","geometric"),r&&r.prng?(ye(t,"seed",null),ye(t,"seedLength",null),nW(t,"state",oW(null),Pkr),ye(t,"stateLength",null),ye(t,"byteLength",null),ye(t,"toJSON",oW(null)),ye(t,"PRNG",e)):(es(t,"seed",n),es(t,"seedLength",a),nW(t,"state",v,f),es(t,"stateLength",u),es(t,"byteLength",o),ye(t,"toJSON",c),ye(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Fkr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return fW(e,i)}function p(m){return Rkr(m)||m<0||m>1?NaN:fW(e,m)}}vW.exports=Mkr});var lW=s((Gfe,cW)=>{"use strict";var Bkr=rf(),kkr=Bkr();cW.exports=kkr});var mW=s((Vfe,gW)=>{"use strict";var jkr=w(),pW=lW(),Ckr=rf();jkr(pW,"factory",Ckr);gW.exports=pW});var qW=s((Ufe,hW)=>{"use strict";var Gkr=k().isPrimitive,Vkr=D().isPrimitive,dW=y(),Ukr=sr();function Hkr(r,e){return!Gkr(r)||Ukr(r)?new TypeError(dW("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Vkr(e)?null:new TypeError(dW("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}hW.exports=Hkr});var wW=s((Hfe,bW)=>{"use strict";var yW=P();function Wkr(r,e,t){return e-t*yW(-yW(r()))}bW.exports=Wkr});var ef=s((Wfe,_W)=>{"use strict";var be=w(),ns=R(),EW=M(),NW=I(),AW=L(),SW=S(),OW=O(),Dkr=C(),as=z().factory,TW=E(),zkr=B(),ss=y(),Xkr=qW(),IW=wW();function Jkr(){var r,e,t,i,n,a;if(arguments.length===0)t=as();else if(arguments.length===1){if(e=arguments[0],!NW(e))throw new TypeError(ss("invalid argument. Options argument must be an object. Value: `%s`.",e));if(SW(e,"prng")){if(!AW(e.prng))throw new TypeError(ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=as(e)}else{if(a=arguments[0],r=arguments[1],n=Xkr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!NW(e))throw new TypeError(ss("invalid argument. Options argument must be an object. Value: `%s`.",e));if(SW(e,"prng")){if(!AW(e.prng))throw new TypeError(ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=as(e)}else t=as()}return a===void 0?i=h:i=m,be(i,"NAME","gumbel"),e&&e.prng?(be(i,"seed",null),be(i,"seedLength",null),EW(i,"state",OW(null),Dkr),be(i,"stateLength",null),be(i,"byteLength",null),be(i,"toJSON",OW(null)),be(i,"PRNG",t)):(ns(i,"seed",u),ns(i,"seedLength",o),EW(i,"state",c,l),ns(i,"stateLength",v),ns(i,"byteLength",f),be(i,"toJSON",p),be(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=zkr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return IW(t,a,r)}function h(d,g){return TW(d)||TW(g)||g<=0?NaN:IW(t,d,g)}}_W.exports=Jkr});var PW=s((Dfe,LW)=>{"use strict";var xkr=ef(),Ykr=xkr();LW.exports=Ykr});var MW=s((zfe,FW)=>{"use strict";var Zkr=w(),RW=PW(),$kr=ef();Zkr(RW,"factory",$kr);FW.exports=RW});var kW=s((Xfe,BW)=>{"use strict";var Qkr=Q();function Kkr(r){return Qkr(r)===r&&r>=0}BW.exports=Kkr});var CW=s((Jfe,jW)=>{"use strict";var rjr=kW();jW.exports=rjr});var VW=s((xfe,GW)=>{"use strict";var tf=De().isPrimitive,Fn=y();function ejr(r,e,t){return tf(r)?tf(e)?tf(t)?t>r?new RangeError(Fn("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(Fn("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(Fn("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(Fn("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(Fn("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}GW.exports=ejr});var UW=s((Yfe,tjr)=>{tjr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var WW=s((Zfe,HW)=>{"use strict";var ijr=E(),njr=Tr(),ajr=Qt(),sjr=_(),ujr=UW(),ojr=170;function fjr(r){return ijr(r)?NaN:njr(r)?r<0?NaN:r<=ojr?ujr[r]:sjr:ajr(r+1)}HW.exports=fjr});var zW=s(($fe,DW)=>{"use strict";var vjr=WW();DW.exports=vjr});var JW=s((Qfe,XW)=>{"use strict";var ft=zW();function cjr(r,e,t,i){var n,a,u;for(i<t?(n=ft(t)*ft(e+t-i)/(ft(e+t)*ft(t-i)),u=0):(n=ft(e)*ft(i)/(ft(i-t)*ft(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}XW.exports=cjr});var YW=s((Kfe,xW)=>{"use strict";var us=JW();function ljr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=us(r,n,a,u),t-o):(a=t,n=e-t,o=us(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=us(r,n,a,u),o):(n=e-t,a=t,o=us(r,n,a,u),i-o))}xW.exports=ljr});var af=s((rve,iD)=>{"use strict";var we=w(),os=R(),ZW=M(),$W=I(),QW=L(),KW=S(),rD=O(),pjr=C(),fs=z().factory,nf=CW(),eD=_(),gjr=B(),vs=y(),mjr=VW(),tD=YW();function djr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=fs();else if(arguments.length===1){if(r=arguments[0],!$W(r))throw new TypeError(vs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KW(r,"prng")){if(!QW(r.prng))throw new TypeError(vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=fs(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=mjr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!$W(r))throw new TypeError(vs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KW(r,"prng")){if(!QW(r.prng))throw new TypeError(vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=fs(r)}else e=fs()}return n===void 0?t=d:t=h,we(t,"NAME","hypergeometric"),r&&r.prng?(we(t,"seed",null),we(t,"seedLength",null),ZW(t,"state",rD(null),pjr),we(t,"stateLength",null),we(t,"byteLength",null),we(t,"toJSON",rD(null)),we(t,"PRNG",e)):(os(t,"seed",o),os(t,"seedLength",v),ZW(t,"state",l,p),os(t,"stateLength",f),os(t,"byteLength",c),we(t,"toJSON",m),we(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=gjr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return tD(e,n,a,u)}function d(g,q,N){return g===eD||q===eD||!nf(g)||!nf(q)||!nf(N)||N>g?NaN:tD(e,g,q,N)}}iD.exports=djr});var aD=s((eve,nD)=>{"use strict";var hjr=af(),qjr=hjr();nD.exports=qjr});var oD=s((tve,uD)=>{"use strict";var yjr=w(),sD=aD(),bjr=af();yjr(sD,"factory",bjr);uD.exports=sD});var lD=s((ive,cD)=>{"use strict";var fD=D().isPrimitive,vD=y();function wjr(r,e){return fD(r)?fD(e)?null:new TypeError(vD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(vD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}cD.exports=wjr});var sf=s((nve,yD)=>{"use strict";var vt=w(),cs=R(),pD=M(),gD=I(),mD=L(),dD=S(),hD=O(),Ejr=C(),_i=Ei().factory,qD=E(),Njr=B(),ls=y(),Ajr=lD();function Sjr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=_i();else if(arguments.length===1){if(i=arguments[0],!gD(i))throw new TypeError(ls("invalid argument. Options argument must be an object. Value: `%s`.",i));if(dD(i,"prng")){if(!mD(i.prng))throw new TypeError(ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=_i({prng:i.prng})}else r=_i(i)}else{if(e=arguments[0],t=arguments[1],u=Ajr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!gD(i))throw new TypeError(ls("invalid argument. Options argument must be an object. Value: `%s`.",i));if(dD(i,"prng")){if(!mD(i.prng))throw new TypeError(ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=_i(e,t,{prng:i.prng})}else r=_i(e,t,i)}else r=_i(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,vt(a,"NAME","invgamma"),i&&i.prng?(vt(a,"seed",null),vt(a,"seedLength",null),pD(a,"state",hD(null),Ejr),vt(a,"stateLength",null),vt(a,"byteLength",null),vt(a,"toJSON",hD(null))):(cs(a,"seed",o),cs(a,"seedLength",v),pD(a,"state",l,p),cs(a,"stateLength",f),cs(a,"byteLength",c),vt(a,"toJSON",m)),vt(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=Njr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return 1/r()}function d(g,q){return qD(g)||qD(q)||g<=0||q<=0?NaN:1/r(g,q)}}yD.exports=Sjr});var wD=s((ave,bD)=>{"use strict";var Ojr=sf(),Tjr=Ojr();bD.exports=Tjr});var AD=s((sve,ND)=>{"use strict";var Ijr=w(),ED=wD(),_jr=sf();Ijr(ED,"factory",_jr);ND.exports=ED});var ID=s((uve,TD)=>{"use strict";var SD=D().isPrimitive,OD=y();function Ljr(r,e){return SD(r)?SD(e)?null:new TypeError(OD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(OD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}TD.exports=Ljr});var PD=s((ove,LD)=>{"use strict";var _D=W();function Pjr(r,e,t){var i=r();return _D(1-_D(1-i,1/t),1/e)}LD.exports=Pjr});var uf=s((fve,GD)=>{"use strict";var Ee=w(),ps=R(),RD=M(),FD=I(),MD=L(),BD=S(),kD=O(),Rjr=C(),gs=z().factory,jD=E(),Fjr=B(),ms=y(),Mjr=ID(),CD=PD();function Bjr(){var r,e,t,i,n,a;if(arguments.length===0)e=gs();else if(arguments.length===1){if(r=arguments[0],!FD(r))throw new TypeError(ms("invalid argument. Options argument must be an object. Value: `%s`.",r));if(BD(r,"prng")){if(!MD(r.prng))throw new TypeError(ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=gs(r)}else{if(n=arguments[0],a=arguments[1],i=Mjr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!FD(r))throw new TypeError(ms("invalid argument. Options argument must be an object. Value: `%s`.",r));if(BD(r,"prng")){if(!MD(r.prng))throw new TypeError(ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=gs(r)}else e=gs()}return n===void 0?t=h:t=m,Ee(t,"NAME","kumaraswamy"),r&&r.prng?(Ee(t,"seed",null),Ee(t,"seedLength",null),RD(t,"state",kD(null),Rjr),Ee(t,"stateLength",null),Ee(t,"byteLength",null),Ee(t,"toJSON",kD(null)),Ee(t,"PRNG",e)):(ps(t,"seed",u),ps(t,"seedLength",o),RD(t,"state",c,l),ps(t,"stateLength",v),ps(t,"byteLength",f),Ee(t,"toJSON",p),Ee(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Fjr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return CD(e,n,a)}function h(d,g){return jD(d)||jD(g)||d<=0||g<=0?NaN:CD(e,d,g)}}GD.exports=Bjr});var UD=s((vve,VD)=>{"use strict";var kjr=uf(),jjr=kjr();VD.exports=jjr});var DD=s((cve,WD)=>{"use strict";var Cjr=w(),HD=UD(),Gjr=uf();Cjr(HD,"factory",Gjr);WD.exports=HD});var JD=s((lve,XD)=>{"use strict";var Vjr=k().isPrimitive,Ujr=D().isPrimitive,zD=y(),Hjr=sr();function Wjr(r,e){return!Vjr(r)||Hjr(r)?new TypeError(zD("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Ujr(e)?null:new TypeError(zD("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}XD.exports=Wjr});var YD=s((pve,xD)=>{"use strict";var Djr=O0(),zjr=J(),Xjr=P();function Jjr(r,e,t){var i=r()-.5;return e-t*Djr(i)*Xjr(1-2*zjr(i))}xD.exports=Jjr});var of=s((gve,iz)=>{"use strict";var Ne=w(),ds=R(),ZD=M(),$D=I(),QD=L(),KD=S(),rz=O(),xjr=C(),hs=z().factory,ez=E(),Yjr=B(),qs=y(),Zjr=JD(),tz=YD();function $jr(){var r,e,t,i,n,a;if(arguments.length===0)e=hs();else if(arguments.length===1){if(r=arguments[0],!$D(r))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KD(r,"prng")){if(!QD(r.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=hs(r)}else{if(n=arguments[0],a=arguments[1],i=Zjr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!$D(r))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KD(r,"prng")){if(!QD(r.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=hs(r)}else e=hs()}return n===void 0?t=h:t=m,Ne(t,"NAME","laplace"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),ZD(t,"state",rz(null),xjr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",rz(null)),Ne(t,"PRNG",e)):(ds(t,"seed",u),ds(t,"seedLength",o),ZD(t,"state",c,l),ds(t,"stateLength",v),ds(t,"byteLength",f),Ne(t,"toJSON",p),Ne(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Yjr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return tz(e,n,a)}function h(d,g){return ez(d)||ez(g)||g<=0?NaN:tz(e,d,g)}}iz.exports=$jr});var az=s((mve,nz)=>{"use strict";var Qjr=of(),Kjr=Qjr();nz.exports=Kjr});var oz=s((dve,uz)=>{"use strict";var rCr=w(),sz=az(),eCr=of();rCr(sz,"factory",eCr);uz.exports=sz});var cz=s((hve,vz)=>{"use strict";var tCr=k().isPrimitive,iCr=D().isPrimitive,fz=y(),nCr=sr();function aCr(r,e){return!tCr(r)||nCr(r)?new TypeError(fz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):iCr(e)?null:new TypeError(fz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}vz.exports=aCr});var pz=s((qve,lz)=>{"use strict";var sCr=X1();function uCr(r,e,t){var i=sCr(1-r()/2,0,1);return e+t/(i*i)}lz.exports=uCr});var ff=s((yve,wz)=>{"use strict";var Ae=w(),ys=R(),gz=M(),mz=I(),dz=L(),hz=S(),qz=O(),oCr=C(),bs=z().factory,yz=E(),fCr=B(),ws=y(),vCr=cz(),bz=pz();function cCr(){var r,e,t,i,n,a;if(arguments.length===0)e=bs();else if(arguments.length===1){if(r=arguments[0],!mz(r))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hz(r,"prng")){if(!dz(r.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=bs(r)}else{if(n=arguments[0],a=arguments[1],i=vCr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!mz(r))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hz(r,"prng")){if(!dz(r.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=bs(r)}else e=bs()}return n===void 0?t=h:t=m,Ae(t,"NAME","levy"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),gz(t,"state",qz(null),oCr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",qz(null)),Ae(t,"PRNG",e)):(ys(t,"seed",u),ys(t,"seedLength",o),gz(t,"state",c,l),ys(t,"stateLength",v),ys(t,"byteLength",f),Ae(t,"toJSON",p),Ae(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=fCr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return bz(e,n,a)}function h(d,g){return yz(d)||yz(g)||g<=0?NaN:bz(e,d,g)}}wz.exports=cCr});var Nz=s((bve,Ez)=>{"use strict";var lCr=ff(),pCr=lCr();Ez.exports=pCr});var Oz=s((wve,Sz)=>{"use strict";var gCr=w(),Az=Nz(),mCr=ff();gCr(Az,"factory",mCr);Sz.exports=Az});var _z=s((Eve,Iz)=>{"use strict";var dCr=k().isPrimitive,hCr=D().isPrimitive,qCr=sr(),Tz=y();function yCr(r,e){return!dCr(r)||qCr(r)?new TypeError(Tz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):hCr(e)?null:new TypeError(Tz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Iz.exports=yCr});var Pz=s((Nve,Lz)=>{"use strict";var bCr=P();function wCr(r,e,t){var i=r();return e+t*bCr(i/(1-i))}Lz.exports=wCr});var vf=s((Ave,Gz)=>{"use strict";var Se=w(),Es=R(),Rz=M(),Fz=I(),Mz=L(),Bz=S(),kz=O(),ECr=C(),Ns=z().factory,jz=E(),NCr=B(),As=y(),ACr=_z(),Cz=Pz();function SCr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ns();else if(arguments.length===1){if(r=arguments[0],!Fz(r))throw new TypeError(As("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Bz(r,"prng")){if(!Mz(r.prng))throw new TypeError(As("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r)}else{if(n=arguments[0],a=arguments[1],i=ACr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Fz(r))throw new TypeError(As("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Bz(r,"prng")){if(!Mz(r.prng))throw new TypeError(As("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r)}else e=Ns()}return n===void 0?t=h:t=m,Se(t,"NAME","logistic"),r&&r.prng?(Se(t,"seed",null),Se(t,"seedLength",null),Rz(t,"state",kz(null),ECr),Se(t,"stateLength",null),Se(t,"byteLength",null),Se(t,"toJSON",kz(null)),Se(t,"PRNG",e)):(Es(t,"seed",u),Es(t,"seedLength",o),Rz(t,"state",c,l),Es(t,"stateLength",v),Es(t,"byteLength",f),Se(t,"toJSON",p),Se(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=NCr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return Cz(e,n,a)}function h(d,g){return jz(d)||jz(g)||g<=0?NaN:Cz(e,d,g)}}Gz.exports=SCr});var Uz=s((Sve,Vz)=>{"use strict";var OCr=vf(),TCr=OCr();Vz.exports=TCr});var Dz=s((Ove,Wz)=>{"use strict";var ICr=w(),Hz=Uz(),_Cr=vf();ICr(Hz,"factory",_Cr);Wz.exports=Hz});var Jz=s((Tve,Xz)=>{"use strict";var LCr=k().isPrimitive,PCr=D().isPrimitive,zz=y(),RCr=sr();function FCr(r,e){return!LCr(r)||RCr(r)?new TypeError(zz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):PCr(e)?null:new TypeError(zz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Xz.exports=FCr});var Yz=s((Ive,xz)=>{"use strict";var MCr=nr();function BCr(r,e,t){return MCr(e+t*r())}xz.exports=BCr});var cf=s((_ve,iX)=>{"use strict";var ct=w(),Ss=R(),Zz=M(),$z=I(),Qz=L(),Kz=S(),rX=O(),kCr=C(),Li=tt().factory,eX=E(),jCr=B(),Os=y(),CCr=Jz(),tX=Yz();function GCr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Li();else if(arguments.length===1){if(t=arguments[0],!$z(t))throw new TypeError(Os("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Kz(t,"prng")){if(!Qz(t.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Li({prng:t.prng})}else e=Li(t)}else{if(u=arguments[0],r=arguments[1],a=CCr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!$z(t))throw new TypeError(Os("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Kz(t,"prng")){if(!Qz(t.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Li({prng:t.prng})}else e=Li(t)}else e=Li()}return u===void 0?n=d:n=h,i=e.PRNG,ct(n,"NAME","lognormal"),t&&t.prng?(ct(n,"seed",null),ct(n,"seedLength",null),Zz(n,"state",rX(null),kCr),ct(n,"stateLength",null),ct(n,"byteLength",null),ct(n,"toJSON",rX(null))):(Ss(n,"seed",o),Ss(n,"seedLength",v),Zz(n,"state",l,p),Ss(n,"stateLength",f),Ss(n,"byteLength",c),ct(n,"toJSON",m)),ct(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=jCr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return tX(e,u,r)}function d(g,q){return eX(g)||eX(q)||q<=0?NaN:tX(e,g,q)}}iX.exports=GCr});var aX=s((Lve,nX)=>{"use strict";var VCr=cf(),UCr=VCr();nX.exports=UCr});var oX=s((Pve,uX)=>{"use strict";var HCr=w(),sX=aX(),WCr=cf();HCr(sX,"factory",WCr);uX.exports=sX});var lf=s((Rve,fX)=>{"use strict";var DCr=ei(),zCr=Q(),XCr=DCr-1;function JCr(){var r=zCr(1+XCr*Math.random());return r|0}fX.exports=JCr});var mf=s((Fve,gX)=>{"use strict";var Oe=w(),lt=R(),vX=M(),pf=S(),xCr=I(),YCr=or().isPrimitive,ZCr=Cr(),$Cr=ie().isPrimitive,cX=Pa(),Hr=y(),Ts=ei(),Er=_t(),Pi=$e(),QCr=B(),lX=lf(),gf=Ts-1|0,KCr=Ts-1|0,rGr=16807,Is=1,_s=2,pt=2,Nr=4,Mn=5;function pX(r,e){var t;return e?t="option":t="argument",r.length<Mn+1?new RangeError(Hr("invalid %s. State array has insufficient length.",t)):r[0]!==Is?new RangeError(Hr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Is,r[0])):r[1]!==_s?new RangeError(Hr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,_s,r[1])):r[pt]!==1?new RangeError(Hr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[pt])):r[Nr]!==r.length-Mn?new RangeError(Hr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Mn,r[Nr])):null}function eGr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!xCr(r))throw new TypeError(Hr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(pf(r,"copy")&&(i.copy=r.copy,!YCr(r.copy)))throw new TypeError(Hr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(pf(r,"state")){if(t=r.state,i.state=!0,!cX(t))throw new TypeError(Hr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=pX(t,!0),u)throw u;i.copy===!1?e=t:(e=new Er(t.length),Pi(t.length,t,1,e,1)),t=new Er(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,t[Nr])}if(n===void 0)if(pf(r,"seed"))if(n=r.seed,i.seed=!0,$Cr(n)){if(n>KCr)throw new RangeError(Hr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(ZCr(n)&&n.length>0)a=n.length,e=new Er(Mn+a),e[0]=Is,e[1]=_s,e[pt]=1,e[Nr]=a,Pi.ndarray(a,n,1,0,e,1,Nr+1),t=new Er(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Hr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=lX()|0}else n=lX()|0;return t===void 0&&(e=new Er(Mn+1),e[0]=Is,e[1]=_s,e[pt]=1,e[Nr]=1,e[Nr+1]=n,t=new Er(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),Oe(h,"NAME","minstd"),lt(h,"seed",o),lt(h,"seedLength",v),vX(h,"state",l,p),lt(h,"stateLength",f),lt(h,"byteLength",c),Oe(h,"toJSON",m),Oe(h,"MIN",1),Oe(h,"MAX",Ts-1),Oe(h,"normalized",d),Oe(d,"NAME",h.NAME),lt(d,"seed",o),lt(d,"seedLength",v),vX(d,"state",l,p),lt(d,"stateLength",f),lt(d,"byteLength",c),Oe(d,"toJSON",m),Oe(d,"MIN",(h.MIN-1)/gf),Oe(d,"MAX",(h.MAX-1)/gf),h;function o(){var g=e[Nr];return Pi(g,n,1,new Er(g),1)}function v(){return e[Nr]}function f(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return Pi(g,e,1,new Er(g),1)}function p(g){var q;if(!cX(g))throw new TypeError(Hr("invalid argument. Must provide an Int32Array. Value: `%s`.",g));if(q=pX(g,!1),q)throw q;i.copy===!1?i.state&&g.length===e.length?Pi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new Er(g.length)),Pi(g.length,g,1,e,1)),t=new Er(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,e[Nr])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=QCr(e),g.params=[],g}function h(){var g=t[0]|0;return g=rGr*g%Ts|0,t[0]=g,g|0}function d(){return(h()-1)/gf}}gX.exports=eGr});var dX=s((Mve,mX)=>{"use strict";var tGr=mf(),iGr=lf(),nGr=tGr({seed:iGr()});mX.exports=nGr});var yX=s((Bve,qX)=>{"use strict";var aGr=w(),hX=dX(),sGr=mf();aGr(hX,"factory",sGr);qX.exports=hX});var wX=s((kve,bX)=>{"use strict";var uGr=E(),oGr=8;function fGr(r,e,t){var i,n;for(n=0;n<oGr;n++)if(i=r(),uGr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}bX.exports=fGr});var df=s((jve,EX)=>{"use strict";var vGr=ei(),cGr=Q(),lGr=vGr-1;function pGr(){var r=cGr(1+lGr*Math.random());return r|0}EX.exports=pGr});var yf=s((Cve,IX)=>{"use strict";var Te=w(),gt=R(),NX=M(),hf=S(),gGr=I(),mGr=or().isPrimitive,dGr=Cr(),hGr=ie().isPrimitive,AX=Pa(),Ri=$e(),qGr=Q(),Ar=_t(),Bn=ei(),yGr=B(),kr=y(),SX=wX(),OX=df(),qf=Bn-1|0,bGr=Bn-1|0,wGr=16807,Or=32,Rs=1,Fs=3,mt=2,Fi=Or+3,Sr=Or+6,kn=Or+7,Ls=Fi+1,Ps=Fi+2;function TX(r,e){var t;return e?t="option":t="argument",r.length<kn+1?new RangeError(kr("invalid %s. State array has insufficient length.",t)):r[0]!==Rs?new RangeError(kr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Rs,r[0])):r[1]!==Fs?new RangeError(kr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Fs,r[1])):r[mt]!==Or?new RangeError(kr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Or,r[mt])):r[Fi]!==2?new RangeError(kr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[Fi])):r[Sr]!==r.length-kn?new RangeError(kr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-kn,r[Sr])):null}function EGr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!gGr(r))throw new TypeError(kr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hf(r,"copy")&&(i.copy=r.copy,!mGr(r.copy)))throw new TypeError(kr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(hf(r,"state")){if(t=r.state,i.state=!0,!AX(t))throw new TypeError(kr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=TX(t,!0),u)throw u;i.copy===!1?e=t:(e=new Ar(t.length),Ri(t.length,t,1,e,1)),t=new Ar(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Ar(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,t[Sr])}if(n===void 0)if(hf(r,"seed"))if(n=r.seed,i.seed=!0,hGr(n)){if(n>bGr)throw new RangeError(kr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(dGr(n)&&n.length>0)a=n.length,e=new Ar(kn+a),e[0]=Rs,e[1]=Fs,e[mt]=Or,e[Fi]=2,e[Ps]=n[0],e[Sr]=a,Ri.ndarray(a,n,1,0,e,1,Sr+1),t=new Ar(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Ar(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,a),t=SX(h,t,Or),e[Ls]=t[0];else throw new TypeError(kr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=OX()|0}else n=OX()|0;return t===void 0&&(e=new Ar(kn+1),e[0]=Rs,e[1]=Fs,e[mt]=Or,e[Fi]=2,e[Ps]=n,e[Sr]=1,e[Sr+1]=n,t=new Ar(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Ar(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,1),t=SX(h,t,Or),e[Ls]=t[0]),Te(d,"NAME","minstd-shuffle"),gt(d,"seed",o),gt(d,"seedLength",v),NX(d,"state",l,p),gt(d,"stateLength",f),gt(d,"byteLength",c),Te(d,"toJSON",m),Te(d,"MIN",1),Te(d,"MAX",Bn-1),Te(d,"normalized",g),Te(g,"NAME",d.NAME),gt(g,"seed",o),gt(g,"seedLength",v),NX(g,"state",l,p),gt(g,"stateLength",f),gt(g,"byteLength",c),Te(g,"toJSON",m),Te(g,"MIN",(d.MIN-1)/qf),Te(g,"MAX",(d.MAX-1)/qf),d;function o(){var q=e[Sr];return Ri(q,n,1,new Ar(q),1)}function v(){return e[Sr]}function f(){return e.length}function c(){return e.byteLength}function l(){var q=e.length;return Ri(q,e,1,new Ar(q),1)}function p(q){var N;if(!AX(q))throw new TypeError(kr("invalid argument. Must provide an Int32Array. Value: `%s`.",q));if(N=TX(q,!1),N)throw N;i.copy===!1?i.state&&q.length===e.length?Ri(q.length,q,1,e,1):(e=q,i.state=!0):(q.length!==e.length&&(e=new Ar(q.length)),Ri(q.length,q,1,e,1)),t=new Ar(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Ar(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,e[Sr])}function m(){var q={};return q.type="PRNG",q.name=d.NAME,q.state=yGr(e),q.params=[],q}function h(){var q=e[Ps]|0;return q=wGr*q%Bn|0,e[Ps]=q,q|0}function d(){var q,N;return q=e[Ls],N=qGr(Or*(q/Bn)),q=t[N],e[Ls]=q,t[N]=h(),q}function g(){return(d()-1)/qf}}IX.exports=EGr});var LX=s((Gve,_X)=>{"use strict";var NGr=yf(),AGr=df(),SGr=NGr({seed:AGr()});_X.exports=SGr});var FX=s((Vve,RX)=>{"use strict";var OGr=w(),PX=LX(),TGr=yf();OGr(PX,"factory",TGr);RX.exports=PX});var BX=s((Uve,MX)=>{"use strict";var IGr=nr();function _Gr(r,e){for(var t=r(),i=1;t>IGr(-e);)i+=1,t*=r();return i-1}MX.exports=_Gr});var jX=s((Hve,kX)=>{"use strict";var LGr=Q();function PGr(r){return LGr(r)===r&&r<0}kX.exports=PGr});var GX=s((Wve,CX)=>{"use strict";var RGr=jX();CX.exports=RGr});var UX=s((Dve,VX)=>{"use strict";var FGr=GX(),MGr=Ki();function BGr(r){return FGr(r)?NaN:MGr(r+1)}VX.exports=BGr});var WX=s((zve,HX)=>{"use strict";var kGr=UX();HX.exports=kGr});var bf=s((Xve,DX)=>{"use strict";var jGr=.9189385332046728;DX.exports=jGr});var xX=s((Jve,JX)=>{"use strict";var CGr=WX(),zX=Q(),GGr=O0(),VGr=G(),XX=J(),Ms=P(),UGr=bf(),HGr=1/12,WGr=1/360;function DGr(r,e){var t,i,n,a,u,o,v,f,c,l;for(t=VGr(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,u=-3.6224/(v-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-XX(c))+v,c+=e+.445,zX(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=GGr(c)*.5-c,l=u*r()),a=.5-XX(c),(a>=.013||a>=l)&&(f=zX((2*o/a+v)*c+e+.445),l*=i/(o/(a*a)+v),c=(f+.5)*Ms(e/f),c+=-e-UGr+f,c-=(HGr-WGr/(f*f))/f,f>=10&&c>=Ms(l*t)||(c=f*Ms(e)-e-CGr(f),f>=0&&f<=9&&c>=Ms(l))))return f}}JX.exports=DGr});var ZX=s((xve,YX)=>{"use strict";var zGr=BX(),XGr=xX();function JGr(r,e){return e<30?zGr(r,e):XGr(r,e)}YX.exports=JGr});var wf=s((Yve,iJ)=>{"use strict";var Ie=w(),Bs=R(),$X=M(),xGr=D().isPrimitive,QX=I(),KX=L(),rJ=S(),eJ=O(),YGr=C(),ks=z().factory,ZGr=E(),$Gr=B(),js=y(),tJ=ZX();function QGr(){var r,e,t,i;if(arguments.length===0)t=ks();else if(arguments.length===1&&QX(arguments[0]))if(e=arguments[0],rJ(e,"prng")){if(!KX(e.prng))throw new TypeError(js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ks(e);else{if(r=arguments[0],!xGr(r))throw new TypeError(js("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!QX(e))throw new TypeError(js("invalid argument. Options argument must be an object. Value: `%s`.",e));if(rJ(e,"prng")){if(!KX(e.prng))throw new TypeError(js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ks(e)}else t=ks()}return r===void 0?i=p:i=l,Ie(i,"NAME","poisson"),e&&e.prng?(Ie(i,"seed",null),Ie(i,"seedLength",null),$X(i,"state",eJ(null),YGr),Ie(i,"stateLength",null),Ie(i,"byteLength",null),Ie(i,"toJSON",eJ(null)),Ie(i,"PRNG",t)):(Bs(i,"seed",n),Bs(i,"seedLength",a),$X(i,"state",v,f),Bs(i,"stateLength",u),Bs(i,"byteLength",o),Ie(i,"toJSON",c),Ie(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=$Gr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return tJ(t,r)}function p(m){return ZGr(m)||m<=0?NaN:tJ(t,m)}}iJ.exports=QGr});var aJ=s((Zve,nJ)=>{"use strict";var KGr=wf(),rVr=KGr();nJ.exports=rVr});var Ef=s(($ve,uJ)=>{"use strict";var eVr=w(),sJ=aJ(),tVr=wf();eVr(sJ,"factory",tVr);uJ.exports=sJ});var fJ=s((Qve,oJ)=>{"use strict";var iVr=D().isPrimitive,nVr=k().isPrimitive,Nf=y(),aVr=sr();function sVr(r,e){return iVr(r)?!nVr(e)||aVr(e)?new TypeError(Nf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Nf("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Nf("invalid argument. First argument must be a positive number. Value: `%s`.",r))}oJ.exports=sVr});var Tf=s((Kve,hJ)=>{"use strict";var dt=w(),Cs=R(),vJ=M(),Mi=S(),cJ=I(),Af=$r(),lJ=or().isPrimitive,pJ=L(),gJ=O(),uVr=C(),mJ=E(),Bi=Ef().factory,Gs=Ei().factory,Sf=$e(),Of=lr(),dJ=_n(),oVr=B(),_e=y(),fVr=fJ();function vVr(){var r,e,t,i,n,a,u,o,v,f;if(u=!0,arguments.length===0)i={copy:!1},t=Bi(i);else if(arguments.length===1){if(i=arguments[0],!cJ(i))throw new TypeError(_e("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Mi(i,"copy")&&!lJ(i.copy))throw new TypeError(_e("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Mi(i,"prng")){if(!pJ(i.prng))throw new TypeError(_e("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Bi({prng:i.prng})}else{if(Mi(i,"state")&&!Af(i.state))throw new TypeError(_e("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=dJ({},i),i.copy===!1?u=!1:i.state&&(i.state=Sf(i.state.length,i.state,1,new Of(i.state.length),1)),i.copy=!1,t=Bi(i)}}else{if(f=arguments[0],v=arguments[1],o=fVr(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!cJ(i))throw new TypeError(_e("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Mi(i,"copy")&&!lJ(i.copy))throw new TypeError(_e("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Mi(i,"prng")){if(!pJ(i.prng))throw new TypeError(_e("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Bi({prng:i.prng})}else{if(Mi(i,"state")&&!Af(i.state))throw new TypeError(_e("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=dJ({},i),i.copy===!1?u=!1:i.state&&(i.state=Sf(i.state.length,i.state,1,new Of(i.state.length),1)),i.copy=!1,t=Bi(i)}}else i={copy:!1},t=Bi(i)}return i&&i.prng?f===void 0?r=Gs({prng:i.prng}):r=Gs(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=Gs({state:e,copy:!1}):r=Gs(f,v/(1-v),{state:e,copy:!1})),f===void 0?n=N:n=q,a=t.PRNG,dt(n,"NAME","negative-binomial"),i&&i.prng?(dt(n,"seed",null),dt(n,"seedLength",null),vJ(n,"state",gJ(null),uVr),dt(n,"stateLength",null),dt(n,"byteLength",null),dt(n,"toJSON",gJ(null))):(Cs(n,"seed",c),Cs(n,"seedLength",l),vJ(n,"state",h,d),Cs(n,"stateLength",p),Cs(n,"byteLength",m),dt(n,"toJSON",g)),dt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function m(){return a.byteLength}function h(){return a.state}function d(A){if(!Af(A))throw new TypeError(_e("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));u&&(A=Sf(A.length,A,1,new Of(A.length),1)),a.state=A}function g(){var A={};return A.type="PRNG",A.name=n.NAME,A.state=oVr(a.state),f===void 0?A.params=[]:A.params=[f,v],A}function q(){return t(r())}function N(A,j){return mJ(A)||mJ(j)||j<=0||j>=1?NaN:t(r(A,j/(1-j)))}}hJ.exports=vVr});var yJ=s((rce,qJ)=>{"use strict";var cVr=Tf(),lVr=cVr();qJ.exports=lVr});var EJ=s((ece,wJ)=>{"use strict";var pVr=w(),bJ=yJ(),gVr=Tf();pVr(bJ,"factory",gVr);wJ.exports=bJ});var SJ=s((tce,AJ)=>{"use strict";var mVr=k().isPrimitive,dVr=D().isPrimitive,NJ=y(),hVr=sr();function qVr(r,e){return!mVr(r)||hVr(r)?new TypeError(NJ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):dVr(e)?null:new TypeError(NJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}AJ.exports=qVr});var TJ=s((ice,OJ)=>{"use strict";function yVr(r,e,t){return e+t*r()}OJ.exports=yVr});var If=s((nce,BJ)=>{"use strict";var ht=w(),Vs=R(),IJ=M(),_J=I(),LJ=L(),PJ=S(),RJ=O(),bVr=C(),ki=tt().factory,FJ=E(),wVr=B(),Us=y(),EVr=SJ(),MJ=TJ();function NVr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=ki();else if(arguments.length===1){if(t=arguments[0],!_J(t))throw new TypeError(Us("invalid argument. Options argument must be an object. Value: `%s`.",t));if(PJ(t,"prng")){if(!LJ(t.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ki({prng:t.prng})}else e=ki(t)}else{if(u=arguments[0],r=arguments[1],a=EVr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!_J(t))throw new TypeError(Us("invalid argument. Options argument must be an object. Value: `%s`.",t));if(PJ(t,"prng")){if(!LJ(t.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ki({prng:t.prng})}else e=ki(t)}else e=ki()}return u===void 0?n=d:n=h,i=e.PRNG,ht(n,"NAME","normal"),t&&t.prng?(ht(n,"seed",null),ht(n,"seedLength",null),IJ(n,"state",RJ(null),bVr),ht(n,"stateLength",null),ht(n,"byteLength",null),ht(n,"toJSON",RJ(null))):(Vs(n,"seed",o),Vs(n,"seedLength",v),IJ(n,"state",l,p),Vs(n,"stateLength",f),Vs(n,"byteLength",c),ht(n,"toJSON",m)),ht(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=wVr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return MJ(e,u,r)}function d(g,q){return FJ(g)||FJ(q)||q<=0?NaN:MJ(e,g,q)}}BJ.exports=NVr});var jJ=s((ace,kJ)=>{"use strict";var AVr=If(),SVr=AVr();kJ.exports=SVr});var VJ=s((sce,GJ)=>{"use strict";var OVr=w(),CJ=jJ(),TVr=If();OVr(CJ,"factory",TVr);GJ.exports=CJ});var DJ=s((uce,WJ)=>{"use strict";var UJ=D().isPrimitive,HJ=y();function IVr(r,e){return UJ(r)?UJ(e)?null:new TypeError(HJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(HJ("invalid argument. First argument must be a positive number. Value: `%s`.",r))}WJ.exports=IVr});var XJ=s((oce,zJ)=>{"use strict";var _Vr=W();function LVr(r,e,t){return t/_Vr(r(),1/e)}zJ.exports=LVr});var _f=s((fce,rx)=>{"use strict";var Le=w(),Hs=R(),JJ=M(),xJ=I(),YJ=L(),ZJ=S(),$J=O(),PVr=C(),Ws=z().factory,QJ=E(),RVr=B(),Ds=y(),FVr=DJ(),KJ=XJ();function MVr(){var r,e,t,i,n,a;if(arguments.length===0)i=Ws();else if(arguments.length===1){if(t=arguments[0],!xJ(t))throw new TypeError(Ds("invalid argument. Options argument must be an object. Value: `%s`.",t));if(ZJ(t,"prng")){if(!YJ(t.prng))throw new TypeError(Ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Ws(t)}else{if(r=arguments[0],e=arguments[1],a=FVr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!xJ(t))throw new TypeError(Ds("invalid argument. Options argument must be an object. Value: `%s`.",t));if(ZJ(t,"prng")){if(!YJ(t.prng))throw new TypeError(Ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Ws(t)}else i=Ws()}return r===void 0?n=h:n=m,Le(n,"NAME","pareto-type1"),t&&t.prng?(Le(n,"seed",null),Le(n,"seedLength",null),JJ(n,"state",$J(null),PVr),Le(n,"stateLength",null),Le(n,"byteLength",null),Le(n,"toJSON",$J(null)),Le(n,"PRNG",i)):(Hs(n,"seed",u),Hs(n,"seedLength",o),JJ(n,"state",c,l),Hs(n,"stateLength",v),Hs(n,"byteLength",f),Le(n,"toJSON",p),Le(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=RVr(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function m(){return KJ(i,r,e)}function h(d,g){return QJ(d)||QJ(g)||d<=0||g<=0?NaN:KJ(i,d,g)}}rx.exports=MVr});var tx=s((vce,ex)=>{"use strict";var BVr=_f(),kVr=BVr();ex.exports=kVr});var ax=s((cce,nx)=>{"use strict";var jVr=w(),ix=tx(),CVr=_f();jVr(ix,"factory",CVr);nx.exports=ix});var ux=s((lce,sx)=>{"use strict";var GVr=G(),VVr=P();function UVr(r,e){return e*GVr(-2*VVr(r()))}sx.exports=UVr});var Lf=s((pce,gx)=>{"use strict";var Pe=w(),zs=R(),ox=M(),HVr=D().isPrimitive,fx=I(),vx=L(),cx=S(),lx=O(),WVr=C(),Xs=z().factory,DVr=E(),zVr=B(),Js=y(),px=ux();function XVr(){var r,e,t,i;if(arguments.length===0)t=Xs();else if(arguments.length===1&&fx(arguments[0]))if(e=arguments[0],cx(e,"prng")){if(!vx(e.prng))throw new TypeError(Js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Xs(e);else{if(r=arguments[0],!HVr(r))throw new TypeError(Js("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!fx(e))throw new TypeError(Js("invalid argument. Options argument must be an object. Value: `%s`.",e));if(cx(e,"prng")){if(!vx(e.prng))throw new TypeError(Js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Xs(e)}else t=Xs()}return r===void 0?i=p:i=l,Pe(i,"NAME","rayleigh"),e&&e.prng?(Pe(i,"seed",null),Pe(i,"seedLength",null),ox(i,"state",lx(null),WVr),Pe(i,"stateLength",null),Pe(i,"byteLength",null),Pe(i,"toJSON",lx(null)),Pe(i,"PRNG",t)):(zs(i,"seed",n),zs(i,"seedLength",a),ox(i,"state",v,f),zs(i,"stateLength",u),zs(i,"byteLength",o),Pe(i,"toJSON",c),Pe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=zVr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return px(t,r)}function p(m){return DVr(m)||m<=0?NaN:px(t,m)}}gx.exports=XVr});var dx=s((gce,mx)=>{"use strict";var JVr=Lf(),xVr=JVr();mx.exports=xVr});var yx=s((mce,qx)=>{"use strict";var YVr=w(),hx=dx(),ZVr=Lf();YVr(hx,"factory",ZVr);qx.exports=hx});var Mf=s((dce,Ix)=>{"use strict";var qt=w(),xs=R(),bx=M(),ji=S(),wx=D().isPrimitive,Ex=I(),Pf=$r(),Nx=or().isPrimitive,$Vr=E(),Ax=L(),Sx=O(),QVr=C(),Ys=Rn().factory,Ci=tt().factory,Rf=$e(),Ff=lr(),Ox=_n(),KVr=B(),Zr=y(),Tx=G();function rUr(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=Ci(n);else if(arguments.length===1)if(Ex(arguments[0])){if(n=arguments[0],ji(n,"copy")&&!Nx(n.copy))throw new TypeError(Zr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(ji(n,"prng")){if(!Ax(n.prng))throw new TypeError(Zr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Ci({prng:n.prng})}else{if(ji(n,"state")&&!Pf(n.state))throw new TypeError(Zr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=Ox({},n),n.copy===!1?u=!1:n.state&&(n.state=Rf(n.state.length,n.state,1,new Ff(n.state.length),1)),n.copy=!1,t=Ci(n)}}else{if(o=arguments[0],!wx(o))throw new TypeError(Zr("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=Ci(n)}else{if(o=arguments[0],!wx(o))throw new TypeError(Zr("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!Ex(n))throw new TypeError(Zr("invalid argument. Options argument must be an object. Value: `%s`.",n));if(ji(n,"copy")&&!Nx(n.copy))throw new TypeError(Zr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(ji(n,"prng")){if(!Ax(n.prng))throw new TypeError(Zr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Ci({prng:n.prng})}else{if(ji(n,"state")&&!Pf(n.state))throw new TypeError(Zr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=Ox({},n),n.copy===!1?u=!1:n.state&&(n.state=Rf(n.state.length,n.state,1,new Ff(n.state.length),1)),n.copy=!1,t=Ci(n)}}return n&&n.prng?o===void 0?r=Ys({prng:n.prng}):r=Ys(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=Ys({state:e,copy:!1}):r=Ys(o,{state:e,copy:!1})),o===void 0?a=g:a=d,i=t.PRNG,qt(a,"NAME","t"),n&&n.prng?(qt(a,"seed",null),qt(a,"seedLength",null),bx(a,"state",Sx(null),QVr),qt(a,"stateLength",null),qt(a,"byteLength",null),qt(a,"toJSON",Sx(null))):(xs(a,"seed",v),xs(a,"seedLength",f),bx(a,"state",p,m),xs(a,"stateLength",c),xs(a,"byteLength",l),qt(a,"toJSON",h)),qt(a,"PRNG",i),a;function v(){return i.seed}function f(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(q){if(!Pf(q))throw new TypeError(Zr("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));u&&(q=Rf(q.length,q,1,new Ff(q.length),1)),i.state=q}function h(){var q={};return q.type="PRNG",q.name=a.NAME,q.state=KVr(i.state),o===void 0?q.params=[]:q.params=[o],q}function d(){return t()/Tx(r()/o)}function g(q){return $Vr(q)||q<=0?NaN:t()/Tx(r(q)/q)}}Ix.exports=rUr});var Lx=s((hce,_x)=>{"use strict";var eUr=Mf(),tUr=eUr();_x.exports=tUr});var Fx=s((qce,Rx)=>{"use strict";var iUr=w(),Px=Lx(),nUr=Mf();iUr(Px,"factory",nUr);Rx.exports=Px});var Bx=s((yce,Mx)=>{"use strict";var Bf=k().isPrimitive,Zs=y(),kf=sr();function aUr(r,e,t){return!Bf(r)||kf(r)?new TypeError(Zs("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Bf(e)||kf(e)?new TypeError(Zs("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Bf(t)||kf(t)?new TypeError(Zs("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(Zs("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}Mx.exports=aUr});var Cx=s((bce,jx)=>{"use strict";var kx=G();function sUr(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+kx(a*u)):(a=(t-e)*(t-i),t-kx(a*(1-u)))}jx.exports=sUr});var Cf=s((wce,zx)=>{"use strict";var Re=w(),$s=R(),Gx=M(),Vx=I(),Ux=L(),Hx=S(),Wx=O(),uUr=C(),Qs=z().factory,jf=E(),oUr=B(),Ks=y(),fUr=Bx(),Dx=Cx();function vUr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Qs();else if(arguments.length===1){if(r=arguments[0],!Vx(r))throw new TypeError(Ks("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Hx(r,"prng")){if(!Ux(r.prng))throw new TypeError(Ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Qs(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=fUr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!Vx(r))throw new TypeError(Ks("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Hx(r,"prng")){if(!Ux(r.prng))throw new TypeError(Ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Qs(r)}else e=Qs()}return n===void 0?t=d:t=h,Re(t,"NAME","triangular"),r&&r.prng?(Re(t,"seed",null),Re(t,"seedLength",null),Gx(t,"state",Wx(null),uUr),Re(t,"stateLength",null),Re(t,"byteLength",null),Re(t,"toJSON",Wx(null)),Re(t,"PRNG",e)):($s(t,"seed",o),$s(t,"seedLength",v),Gx(t,"state",l,p),$s(t,"stateLength",f),$s(t,"byteLength",c),Re(t,"toJSON",m),Re(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=oUr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return Dx(e,n,a,u)}function d(g,q,N){return jf(g)||jf(q)||jf(N)||!(g<=N&&N<=q)?NaN:Dx(e,g,q,N)}}zx.exports=vUr});var Jx=s((Ece,Xx)=>{"use strict";var cUr=Cf(),lUr=cUr();Xx.exports=lUr});var Zx=s((Nce,Yx)=>{"use strict";var pUr=w(),xx=Jx(),gUr=Cf();pUr(xx,"factory",gUr);Yx.exports=xx});var rY=s((Ace,Kx)=>{"use strict";var $x=k().isPrimitive,Gf=y(),Qx=sr();function mUr(r,e){return!$x(r)||Qx(r)?new TypeError(Gf("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!$x(e)||Qx(e)?new TypeError(Gf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Gf("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}Kx.exports=mUr});var tY=s((Sce,eY)=>{"use strict";function dUr(r,e,t){var i=r();return t*i+(1-i)*e}eY.exports=dUr});var Vf=s((Oce,vY)=>{"use strict";var Fe=w(),ru=R(),iY=M(),nY=I(),aY=L(),sY=S(),uY=O(),hUr=C(),eu=z().factory,oY=E(),qUr=B(),tu=y(),yUr=rY(),fY=tY();function bUr(){var r,e,t,i,n,a;if(arguments.length===0)e=eu();else if(arguments.length===1){if(r=arguments[0],!nY(r))throw new TypeError(tu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(sY(r,"prng")){if(!aY(r.prng))throw new TypeError(tu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=eu(r)}else{if(n=arguments[0],a=arguments[1],i=yUr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!nY(r))throw new TypeError(tu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(sY(r,"prng")){if(!aY(r.prng))throw new TypeError(tu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=eu(r)}else e=eu()}return n===void 0?t=h:t=m,Fe(t,"NAME","uniform"),r&&r.prng?(Fe(t,"seed",null),Fe(t,"seedLength",null),iY(t,"state",uY(null),hUr),Fe(t,"stateLength",null),Fe(t,"byteLength",null),Fe(t,"toJSON",uY(null)),Fe(t,"PRNG",e)):(ru(t,"seed",u),ru(t,"seedLength",o),iY(t,"state",c,l),ru(t,"stateLength",v),ru(t,"byteLength",f),Fe(t,"toJSON",p),Fe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=qUr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return fY(e,n,a)}function h(d,g){return oY(d)||oY(g)||d>=g?NaN:fY(e,d,g)}}vY.exports=bUr});var lY=s((Tce,cY)=>{"use strict";var wUr=Vf(),EUr=wUr();cY.exports=EUr});var mY=s((Ice,gY)=>{"use strict";var NUr=w(),pY=lY(),AUr=Vf();NUr(pY,"factory",AUr);gY.exports=pY});var yY=s((_ce,qY)=>{"use strict";var dY=D().isPrimitive,hY=y();function SUr(r,e){return dY(r)?dY(e)?null:new TypeError(hY("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(hY("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}qY.exports=SUr});var wY=s((Lce,bY)=>{"use strict";var OUr=W(),TUr=P();function IUr(r,e,t){return t*OUr(-TUr(1-r()),1/e)}bY.exports=IUr});var Uf=s((Pce,_Y)=>{"use strict";var Me=w(),iu=R(),EY=M(),NY=I(),AY=L(),SY=S(),OY=O(),_Ur=C(),nu=z().factory,TY=E(),LUr=B(),au=y(),PUr=yY(),IY=wY();function RUr(){var r,e,t,i,n,a;if(arguments.length===0)t=nu();else if(arguments.length===1){if(e=arguments[0],!NY(e))throw new TypeError(au("invalid argument. Options argument must be an object. Value: `%s`.",e));if(SY(e,"prng")){if(!AY(e.prng))throw new TypeError(au("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=nu(e)}else{if(a=arguments[0],r=arguments[1],n=PUr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!NY(e))throw new TypeError(au("invalid argument. Options argument must be an object. Value: `%s`.",e));if(SY(e,"prng")){if(!AY(e.prng))throw new TypeError(au("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=nu(e)}else t=nu()}return r===void 0?i=h:i=m,Me(i,"NAME","weibull"),e&&e.prng?(Me(i,"seed",null),Me(i,"seedLength",null),EY(i,"state",OY(null),_Ur),Me(i,"stateLength",null),Me(i,"byteLength",null),Me(i,"toJSON",OY(null)),Me(i,"PRNG",t)):(iu(i,"seed",u),iu(i,"seedLength",o),EY(i,"state",c,l),iu(i,"stateLength",v),iu(i,"byteLength",f),Me(i,"toJSON",p),Me(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=LUr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return IY(t,a,r)}function h(d,g){return TY(d)||TY(g)||d<=0||g<=0?NaN:IY(t,d,g)}}_Y.exports=RUr});var PY=s((Rce,LY)=>{"use strict";var FUr=Uf(),MUr=FUr();LY.exports=MUr});var MY=s((Fce,FY)=>{"use strict";var BUr=w(),RY=PY(),kUr=Uf();BUr(RY,"factory",kUr);FY.exports=RY});var kY=s((Mce,BY)=>{"use strict";var jUr=cr(),CUr=jr().isPrimitive,GUr=y(),VUr=A2();function UUr(r){if(CUr(r))return r;if(jUr(r))return VUr(r);throw new TypeError(GUr("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}BY.exports=UUr});var CY=s((Bce,jY)=>{"use strict";var HUr=kY();jY.exports=HUr});var VY=s((kce,GY)=>{"use strict";var F={};F.arcsine=Uk().factory;F.bernoulli=Qk().factory;F.beta=bC().factory;F.betaprime=aG().factory;F.binomial=VG().factory;F.boxMueller=eV().factory;F.cauchy=yV().factory;F.chi=UV().factory;F.chisquare=Rn().factory;F.cosine=bU().factory;F.discreteUniform=VU().factory;F.erlang=nH().factory;F.exponential=qH().factory;F.f=jH().factory;F.frechet=rW().factory;F.gamma=Ei().factory;F.geometric=mW().factory;F.gumbel=MW().factory;F.hypergeometric=oD().factory;F.improvedZiggurat=tt().factory;F.invgamma=AD().factory;F.kumaraswamy=DD().factory;F.laplace=oz().factory;F.levy=Oz().factory;F.logistic=Dz().factory;F.lognormal=oX().factory;F.minstd=yX().factory;F.minstdShuffle=FX().factory;F.mt19937=z().factory;F.negativeBinomial=EJ().factory;F.normal=VJ().factory;F.pareto1=ax().factory;F.poisson=Ef().factory;F.rayleigh=yx().factory;F.t=Fx().factory;F.triangular=Zx().factory;F.uniform=mY().factory;F.weibull=MY().factory;F.normalizeSeed=CY();GY.exports=F});var HY=s((jce,UY)=>{"use strict";var WUr=K().isPrimitive,DUr=y();function zUr(r){return e;function e(t){if(!WUr(t))throw new TypeError(DUr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}UY.exports=zUr});var DY=s((Cce,WY)=>{"use strict";var XUr=HY();WY.exports=XUr});var xY=s((Gce,JY)=>{"use strict";var zY=K().isPrimitive,XY=y();function JUr(r){return e;function e(t,i){if(!zY(t))throw new TypeError(XY("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!zY(i))throw new TypeError(XY("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}JY.exports=JUr});var ZY=s((Vce,YY)=>{"use strict";var xUr=xY();YY.exports=xUr});var QY=s((Uce,$Y)=>{"use strict";var Hf=K().isPrimitive,Wf=y();function YUr(r){return e;function e(t,i,n){if(!Hf(t))throw new TypeError(Wf("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Hf(i))throw new TypeError(Wf("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Hf(n))throw new TypeError(Wf("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}$Y.exports=YUr});var rZ=s((Hce,KY)=>{"use strict";var ZUr=QY();KY.exports=ZUr});var tZ=s((Wce,eZ)=>{"use strict";var su={};su.s_o=DY();su.ss_o=ZY();su.sss_o=rZ();eZ.exports=su});var aZ=s((Dce,nZ)=>{"use strict";var iZ={};iZ.tools=tZ();nZ.exports=iZ});var uZ=s((zce,sZ)=>{"use strict";var Df={};Df.bbinary2d=J1();Df.unary2d=Q1();sZ.exports=Df});var fZ=s((Xce,oZ)=>{"use strict";function $Ur(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}oZ.exports=$Ur});var cZ=s((Jce,vZ)=>{"use strict";function QUr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}vZ.exports=QUr});var gZ=s((xce,pZ)=>{"use strict";var KUr=E(),rHr=G(),lZ=Ja(),eHr=fZ(),tHr=cZ(),iHr=6123233995736766e-32;function nHr(r){var e,t,i,n,a;if(KUr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*tHr(t),t=rHr(t+t),a=lZ-t,t=t*n-iHr,a-=t,a+=lZ;else{if(i<1e-8)return r;t=i*i,a=t*eHr(t),a=i*a+i}return e?-a:a}pZ.exports=nHr});var Gt=s((Yce,mZ)=>{"use strict";var aHr=gZ();mZ.exports=aHr});var yZ=s((Zce,qZ)=>{"use strict";var sHr=E(),dZ=Gt(),uHr=G(),hZ=Ja(),oHr=6123233995736766e-32;function fHr(r){var e;return sHr(r)?NaN:r<-1||r>1?NaN:r>.5?2*dZ(uHr(.5-.5*r)):(e=hZ-dZ(r),e+=oHr,e+=hZ,e)}qZ.exports=fHr});var jn=s(($ce,bZ)=>{"use strict";var vHr=yZ();bZ.exports=vHr});var AZ=s((Qce,NZ)=>{"use strict";var cHr=E(),lHr=Ue(),wZ=G(),pHr=ya(),EZ=P(),gHr=1<<28;function mHr(r){var e;return cHr(r)||r<1?NaN:r===1?0:r>=gHr?EZ(r)+pHr:r>2?EZ(2*r-1/(r+wZ(r*r-1))):(e=r-1,lHr(e+wZ(2*e+e*e)))}NZ.exports=mHr});var OZ=s((Kce,SZ)=>{"use strict";var dHr=AZ();SZ.exports=dHr});var IZ=s((rle,TZ)=>{"use strict";var hHr=xa();function qHr(r){return hHr(1/r)}TZ.exports=qHr});var LZ=s((ele,_Z)=>{"use strict";var yHr=IZ();_Z.exports=yHr});var RZ=s((tle,PZ)=>{"use strict";var bHr=Gt();function wHr(r){return bHr(1+r)}PZ.exports=wHr});var MZ=s((ile,FZ)=>{"use strict";var EHr=RZ();FZ.exports=EHr});var kZ=s((nle,BZ)=>{"use strict";var NHr=Gt();function AHr(r){return NHr(1-r)}BZ.exports=AHr});var CZ=s((ale,jZ)=>{"use strict";var SHr=kZ();jZ.exports=SHr});var VZ=s((sle,GZ)=>{"use strict";var OHr=Gt();function THr(r){return OHr(1/r)}GZ.exports=THr});var HZ=s((ule,UZ)=>{"use strict";var IHr=VZ();UZ.exports=IHr});var XZ=s((ole,zZ)=>{"use strict";var _Hr=Pr(),LHr=E(),PHr=Ue(),WZ=G(),RHr=ya(),DZ=P(),FHr=1/(1<<28),MHr=1<<28;function BHr(r){var e,t,i;return LHr(r)||_Hr(r)?r:(r<0&&(r=-r,e=!0),r<FHr?i=r:r>MHr?i=DZ(r)+RHr:r>2?i=DZ(2*r+1/(WZ(r*r+1)+r)):(t=r*r,i=PHr(r+t/(1+WZ(1+t)))),e?-i:i)}zZ.exports=BHr});var zf=s((fle,JZ)=>{"use strict";var kHr=XZ();JZ.exports=kHr});var YZ=s((vle,xZ)=>{"use strict";var jHr=zf();function CHr(r){return jHr(1/r)}xZ.exports=CHr});var $Z=s((cle,ZZ)=>{"use strict";var GHr=YZ();ZZ.exports=GHr});var KZ=s((lle,QZ)=>{"use strict";var VHr=jn(),UHr=G();function HHr(r){return 2*VHr(UHr(r))}QZ.exports=HHr});var e$=s((ple,r$)=>{"use strict";var WHr=KZ();r$.exports=WHr});var i$=s((gle,t$)=>{"use strict";var DHr=Gt(),zHr=G();function XHr(r){return 2*DHr(zHr(r))}t$.exports=XHr});var a$=s((mle,n$)=>{"use strict";var JHr=i$();n$.exports=JHr});var o$=s((dle,u$)=>{"use strict";var xHr=E(),s$=Ue(),YHr=_(),ZHr=V(),$Hr=1/(1<<28);function QHr(r){var e,t;return xHr(r)||r<-1||r>1?NaN:r===1?YHr:r===-1?ZHr:(r<0&&(e=!0,r=-r),r<$Hr?e?-r:r:(r<.5?(t=r+r,t=.5*s$(t+t*r/(1-r))):t=.5*s$((r+r)/(1-r)),e?-t:t))}u$.exports=QHr});var v$=s((hle,f$)=>{"use strict";var KHr=o$();f$.exports=KHr});var l$=s((qle,c$)=>{"use strict";var rWr=jn();function eWr(r){return rWr(1+r)}c$.exports=eWr});var g$=s((yle,p$)=>{"use strict";var tWr=l$();p$.exports=tWr});var d$=s((ble,m$)=>{"use strict";var iWr=jn();function nWr(r){return iWr(1-r)}m$.exports=nWr});var q$=s((wle,h$)=>{"use strict";var aWr=d$();h$.exports=aWr});var w$=s((Ele,b$)=>{"use strict";var y$=-.16666666666666632,sWr=.00833333333332249,uWr=-.0001984126982985795,oWr=27557313707070068e-22,fWr=-25050760253406863e-24,vWr=158969099521155e-24,cWr=.0416666666666666,lWr=-.001388888888887411,pWr=2480158728947673e-20,gWr=-27557314351390663e-23,mWr=2087572321298175e-24,dWr=-11359647557788195e-27;function hWr(r,e,t,i,n){var a,u,o,v,f;return f=r*r,v=f*f,u=sWr+f*(uWr+f*oWr)+f*v*(fWr+f*vWr),o=f*r,e===0?t[n]=r+o*(y$+f*u):t[n]=r-(f*(.5*e-o*u)-e-o*y$),u=f*(cWr+f*(lWr+f*pWr)),u+=v*v*(gWr+f*(mWr+f*dWr)),a=.5*f,v=1-a,t[n+i]=v+(1-v-a+(f*u-r*e)),t}b$.exports=hWr});var Jf=s((Nle,N$)=>{"use strict";var qWr=Xr(),yWr=Xi(),bWr=tr(),wWr=Yi(),E$=w$(),EWr=1072243195,NWr=1044381696,Xf=[0,0];function AWr(r,e,t,i){var n,a;if(n=bWr(r),n&=qWr,n<=EWr)return n<NWr&&(r|0)===0&&(e[i]=r,e[i+t]=0),E$(r,0,e,t,i);if(n>=yWr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=wWr(r,Xf),E$(Xf[0],Xf[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}N$.exports=AWr});var S$=s((Ale,A$)=>{"use strict";var SWr=Jf();function OWr(r){return SWr(r,[0,0],1,0)}A$.exports=OWr});var Cn=s((Sle,T$)=>{"use strict";var TWr=w(),O$=S$(),IWr=Jf();TWr(O$,"assign",IWr);T$.exports=O$});var _$=s((Ole,I$)=>{"use strict";function _Wr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}I$.exports=_Wr});var P$=s((Tle,L$)=>{"use strict";function LWr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}L$.exports=LWr});var F$=s((Ile,R$)=>{"use strict";function PWr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}R$.exports=PWr});var B$=s((_le,M$)=>{"use strict";function RWr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}M$.exports=RWr});var j$=s((Lle,k$)=>{"use strict";var FWr=G(),MWr=Cn().assign,BWr=_(),kWr=_$(),jWr=P$(),CWr=F$(),GWr=B$(),VWr=.5641895835477563,UWr=2.404825557695773,HWr=5.520078110286311,WWr=616,DWr=-.0014244423042272315,zWr=1413,XWr=.0005468602863106496,Gn=[0,0];function JWr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===BWr?0:r===0?1:r<=4?(a=r*r,n=kWr(a),u=(r+UWr)*(r-WWr/256-DWr),u*n):r<=8?(a=1-r*r/64,n=jWr(a),u=(r+HWr)*(r-zWr/256-XWr),u*n):(a=8/r,i=a*a,e=CWr(i),t=GWr(i),u=VWr/FWr(r),MWr(r,Gn,1,0),u*(e*(Gn[1]+Gn[0])-a*t*(Gn[0]-Gn[1])))}k$.exports=JWr});var xf=s((Ple,C$)=>{"use strict";var xWr=j$();C$.exports=xWr});var uu=s((Rle,G$)=>{"use strict";var YWr=1.772453850905516;G$.exports=YWr});var U$=s((Fle,V$)=>{"use strict";function ZWr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}V$.exports=ZWr});var W$=s((Mle,H$)=>{"use strict";function $Wr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}H$.exports=$Wr});var z$=s((Ble,D$)=>{"use strict";function QWr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}D$.exports=QWr});var J$=s((kle,X$)=>{"use strict";function KWr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}X$.exports=KWr});var Y$=s((jle,x$)=>{"use strict";var rDr=G(),eDr=J(),tDr=Cn().assign,iDr=_(),nDr=uu(),aDr=U$(),sDr=W$(),uDr=z$(),oDr=J$(),fDr=3.8317059702075125,vDr=7.015586669815619,cDr=981,lDr=-.0003252797924876844,pDr=1796,gDr=-38330184381246464e-21,Vn=[0,0];function mDr(r){var e,t,i,n,a,u,o,v;return v=eDr(r),r===0||v===iDr?0:(v<=4?(u=r*r,a=aDr(u),o=v*(v+fDr)*(v-cDr/256-lDr),e=o*a):v<=8?(u=r*r,a=sDr(u),o=v*(v+vDr)*(v-pDr/256-gDr),e=o*a):(u=8/v,n=u*u,t=uDr(n),i=oDr(n),o=1/(rDr(v)*nDr),tDr(v,Vn,1,0),e=o*(t*(Vn[0]-Vn[1])+u*i*(Vn[0]+Vn[1]))),r<0&&(e*=-1),e)}x$.exports=mDr});var Yf=s((Cle,Z$)=>{"use strict";var dDr=Y$();Z$.exports=dDr});var Q$=s((Gle,$$)=>{"use strict";function hDr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}$$.exports=hDr});var rQ=s((Vle,K$)=>{"use strict";function qDr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}K$.exports=qDr});var tQ=s((Ule,eQ)=>{"use strict";function yDr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}eQ.exports=yDr});var nQ=s((Hle,iQ)=>{"use strict";function bDr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}iQ.exports=bDr});var sQ=s((Wle,aQ)=>{"use strict";function wDr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}aQ.exports=wDr});var cQ=s((Dle,vQ)=>{"use strict";var Zf=P(),EDr=G(),NDr=Ir(),ADr=uu(),SDr=V(),ODr=_(),TDr=Cn().assign,$f=xf(),IDr=Q$(),_Dr=rQ(),LDr=tQ(),PDr=nQ(),RDr=sQ(),FDr=1/ADr,Qf=2/NDr,uQ=.8935769662791675,oQ=3.957678419314858,fQ=7.086051060301773,MDr=228,BDr=.0029519662791675214,kDr=1013,jDr=.0006471693148578684,CDr=1814,GDr=.00011356030177269763,Un=[0,0];function VDr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?SDr:r===ODr?0:r<=3?(a=r*r,u=Zf(r/uQ)*$f(r)*Qf,n=IDr(a),o=(r+uQ)*(r-MDr/256-BDr),u+o*n):r<=5.5?(a=r*r,u=Zf(r/oQ)*$f(r)*Qf,n=_Dr(a),o=(r+oQ)*(r-kDr/256-jDr),u+o*n):r<=8?(a=r*r,u=Zf(r/fQ)*$f(r)*Qf,n=LDr(a),o=(r+fQ)*(r-CDr/256-GDr),u+o*n):(a=8/r,i=a*a,e=PDr(i),t=RDr(i),o=FDr/EDr(r),TDr(r,Un,1,0),o*(e*(Un[0]-Un[1])+a*t*(Un[1]+Un[0])))}vQ.exports=VDr});var pQ=s((zle,lQ)=>{"use strict";var UDr=cQ();lQ.exports=UDr});var mQ=s((Xle,gQ)=>{"use strict";function HDr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}gQ.exports=HDr});var hQ=s((Jle,dQ)=>{"use strict";function WDr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}dQ.exports=WDr});var yQ=s((xle,qQ)=>{"use strict";function DDr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}qQ.exports=DDr});var wQ=s((Yle,bQ)=>{"use strict";function zDr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}bQ.exports=zDr});var IQ=s((Zle,TQ)=>{"use strict";var EQ=P(),XDr=G(),JDr=Ir(),xDr=uu(),YDr=V(),ZDr=_(),$Dr=Cn().assign,NQ=Yf(),QDr=mQ(),KDr=hQ(),rzr=yQ(),ezr=wQ(),tzr=1/xDr,AQ=2/JDr,SQ=2.197141326031017,OQ=5.429681040794135,izr=562,nzr=.001828826031017035,azr=1390,szr=-6459205864867228e-21,Hn=[0,0];function uzr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?YDr:r===ZDr?0:r<=4?(a=r*r,u=EQ(r/SQ)*NQ(r)*AQ,n=QDr(a),o=(r+SQ)*(r-izr/256-nzr)/r,u+o*n):r<=8?(a=r*r,u=EQ(r/OQ)*NQ(r)*AQ,n=KDr(a),o=(r+OQ)*(r-azr/256-szr)/r,u+o*n):(a=8/r,i=a*a,e=rzr(i),t=ezr(i),o=tzr/XDr(r),$Dr(r,Hn,1,0),o*(a*t*(Hn[0]-Hn[1])-e*(Hn[0]+Hn[1])))}TQ.exports=uzr});var LQ=s(($le,_Q)=>{"use strict";var ozr=IQ();_Q.exports=ozr});var FQ=s((Qle,RQ)=>{"use strict";var fzr=E(),vzr=Pr(),czr=J(),PQ=At(),lzr=St(),pzr=Q(),Kf=Ir(),gzr=an(),mzr=gzr+1;function dzr(r){var e,t,i,n;return fzr(r)?NaN:vzr(r)?NaN:(e=czr(r),e>mzr?1:(t=pzr(e),i=e-t,i===.5?0:(i<.25?n=PQ(Kf*i):i<.75?(i=.5-i,n=lzr(Kf*i)):(i=1-i,n=-PQ(Kf*i)),t%2===1?-n:n)))}RQ.exports=dzr});var BQ=s((Kle,MQ)=>{"use strict";var hzr=FQ();MQ.exports=hzr});var jQ=s((r4e,kQ)=>{"use strict";var qzr=1.618033988749895;kQ.exports=qzr});var GQ=s((e4e,CQ)=>{"use strict";var yzr=E(),bzr=BQ(),wzr=W(),Ezr=jQ(),Nzr=_(),Azr=V(),Szr=2.23606797749979;function Ozr(r){var e,t;return yzr(r)||r===Nzr||r===Azr?NaN:(e=wzr(Ezr,r),t=bzr(r)/e,(e-t)/Szr)}CQ.exports=Ozr});var UQ=s((t4e,VQ)=>{"use strict";var Tzr=GQ();VQ.exports=Tzr});var WQ=s((i4e,HQ)=>{"use strict";function Izr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}HQ.exports=Izr});var JQ=s((n4e,XQ)=>{"use strict";var _zr=bo(),Lzr=go(),DQ=Xr(),ev=tr(),Pzr=Qr(),Rzr=Pr(),zQ=Yt(),Fzr=Zt(),Mzr=E(),Bzr=WQ(),kzr=4294967295>>>0,jzr=3221225472>>>0,Czr=0x40000000000000,rv=2147483648>>>0,Gzr=1>>>0,Vzr=715094163>>>0,Uzr=696219795>>>0,Hzr=ev(_zr),Vt=[0>>>0,0>>>0];function Wzr(r){var e,t,i,n,a,u,o;return r===0||Mzr(r)||Rzr(r)?r:(t=ev(r)>>>0,e=(t&Lzr)>>>0,t&=DQ,t<Hzr?(u=Czr*r,i=(ev(u)&DQ)>>>0,i=(i/3>>>0)+Uzr>>>0,u=zQ(e|i,0)):(u=0,i=(t/3>>>0)+Vzr>>>0,u=Pzr(u,e|i)),n=u*u*(u/r),u*=Bzr(n),Fzr.assign(u,Vt,1,0),Vt[1]&rv?(Vt[0]+=Gzr,Vt[1]&=~rv):Vt[1]|=rv,u=zQ(Vt[0]&kzr,Vt[1]&jzr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}XQ.exports=Wzr});var YQ=s((a4e,xQ)=>{"use strict";var Dzr=JQ();xQ.exports=Dzr});var $Q=s((s4e,ZQ)=>{"use strict";function zzr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}ZQ.exports=zzr});var KQ=s((u4e,QQ)=>{"use strict";function Xzr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}QQ.exports=Xzr});var tK=s((o4e,eK)=>{"use strict";var Jzr=tr(),xzr=$Q(),Yzr=KQ(),rK=1048575,Zzr=.3333333333333333;function $zr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=Jzr(r),a=r-1,(rK&2+n)<3?a===0?0:a*a*(Zzr*a-.5):(u=a/(2+a),o=u*u,n&=rK,c=n-398458|0,f=o*o,l=440401-n|0,t=f*xzr(f),i=o*Yzr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}eK.exports=$zr});var sK=s((f4e,aK)=>{"use strict";var iK=tr(),Qzr=Qr(),Kzr=ee(),rXr=E(),eXr=zr(),tXr=V(),iXr=tK(),nXr=0x40000000000000,nK=.4342944818781689,aXr=25082946711645275e-27,sXr=.30102999566361177,uXr=3694239077158931e-28,oXr=1048575,fXr=2146435072,vXr=1048576,cXr=1072693248;function lXr(r){var e,t,i,n,a,u,o,v;return rXr(r)||r<0?NaN:r===0?tXr:(t=iK(r),u=0,t<vXr&&(u-=54,r*=nXr,t=iK(r)),t>=fXr?r+r:(u+=(t>>20)-eXr|0,t&=oXr,a=t+614244&1048576|0,r=Qzr(r,t|a^cXr),u+=a>>20|0,o=u,n=iXr(r),r-=1,e=Kzr(r,0),i=r-e,v=o*uXr+(r+n)*aXr,v+=(i+n)*nK+e*nK,v+o*sXr))}aK.exports=lXr});var oK=s((v4e,uK)=>{"use strict";var pXr=sK();uK.exports=pXr});var vK=s((c4e,fK)=>{"use strict";var gXr=E(),mXr=Pr(),dXr=W(),hXr=Q(),qXr=zi(),yXr=oK(),bXr=h2(),wXr=q2(),EXr=_();function NXr(r){var e,t;return gXr(r)||mXr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=yXr(r),e===-1?t=hXr(t):t=qXr(t),t<=wXr?e*0:t>bXr?EXr:e*dXr(10,t))}fK.exports=NXr});var lK=s((l4e,cK)=>{"use strict";var AXr=vK();cK.exports=AXr});var gK=s((p4e,pK)=>{"use strict";function SXr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}pK.exports=SXr});var dK=s((g4e,mK)=>{"use strict";function OXr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}mK.exports=OXr});var yK=s((m4e,qK)=>{"use strict";var TXr=tr(),IXr=gK(),_Xr=dK(),hK=1048575,LXr=.3333333333333333;function PXr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=TXr(r),a=r-1,(hK&2+n)<3?a===0?0:a*a*(LXr*a-.5):(u=a/(2+a),o=u*u,n&=hK,c=n-398458|0,f=o*o,l=440401-n|0,t=f*IXr(f),i=o*_Xr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}qK.exports=PXr});var EK=s((d4e,wK)=>{"use strict";var RXr=tr(),FXr=Qr(),MXr=ee(),BXr=Zt(),kXr=E(),jXr=Xr(),CXr=ta(),GXr=zr(),VXr=V(),UXr=yK(),HXr=0x40000000000000,bK=1.4426950407214463,WXr=16751713164886512e-26,DXr=2146435072,zXr=1048576,XXr=1072693248,tv=[0,0];function JXr(r){var e,t,i,n,a,u,o;if(kXr(r)||r<0)return NaN;if(BXr.assign(r,tv,1,0),i=tv[0],n=tv[1],o=0,i<zXr){if((i&jXr|n)===0)return VXr;o-=54,r*=HXr,i=RXr(r)}return i>=DXr?r+r:(o+=(i>>20)-GXr|0,i&=CXr,u=i+614244&1048576|0,r=FXr(r,i|u^XXr),o+=u>>20|0,a=UXr(r),r-=1,e=MXr(r,0),t=r-e,(r+a)*WXr+(t+a)*bK+e*bK+o)}wK.exports=JXr});var AK=s((h4e,NK)=>{"use strict";var xXr=EK();NK.exports=xXr});var OK=s((q4e,SK)=>{"use strict";var YXr=E(),ZXr=Pr(),$Xr=W(),QXr=Q(),KXr=zi(),rJr=AK(),eJr=lo(),tJr=po(),iJr=_();function nJr(r){var e,t;return YXr(r)||ZXr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=rJr(r),t===tJr)?r:(e===-1?t=QXr(t):t=KXr(t),t>eJr?iJr:e*$Xr(2,t))}SK.exports=nJr});var IK=s((y4e,TK)=>{"use strict";var aJr=OK();TK.exports=aJr});var _K=s((b4e,sJr)=>{sJr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var LK=s((w4e,uJr)=>{uJr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var PK=s((E4e,oJr)=>{oJr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var FK=s((N4e,RK)=>{"use strict";function fJr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}RK.exports=fJr});var BK=s((A4e,MK)=>{"use strict";function vJr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}MK.exports=vJr});var jK=s((S4e,kK)=>{"use strict";function cJr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}kK.exports=cJr});var GK=s((O4e,CK)=>{"use strict";function lJr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}CK.exports=lJr});var UK=s((T4e,VK)=>{"use strict";function pJr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}VK.exports=pJr});var WK=s((I4e,HK)=>{"use strict";function gJr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}HK.exports=gJr});var xK=s((_4e,JK)=>{"use strict";var mJr=E(),dJr=Tr(),hJr=J(),ou=nr(),qJr=Q(),yJr=Qt(),bJr=Ki(),DK=Qi(),zK=W(),wJr=P(),EJr=_(),NJr=V(),XK=Ve(),AJr=Uo(),SJr=bf(),OJr=_K(),TJr=LK(),IJr=PK(),_Jr=FK(),LJr=BK(),PJr=jK(),RJr=GK(),FJr=UK(),MJr=WK(),BJr=129,kJr=170,jJr=709,CJr=1.2433929443359375,GJr=.6986598968505859;function iv(r){var e,t,i,n,a,u;if(mJr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(dJr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=BJr)return-IJr[u]/(i+1)}else return(n&1)===0?TJr[n/2]:OJr[(n-3)/2];return hJr(r)<AJr?-.5-SJr*r:(t=1-r,r<0?qJr(r/2)===r/2?0:(e=r,r=t,t=e,r>kJr?(e=DK(.5*t)*2*iv(r),a=bJr(r),a-=r*wJr(XK),a>jJr?e<0?NJr:EJr:e*ou(a)):DK(.5*t)*2*zK(XK,-r)*yJr(r)*iv(r)):r<1?(e=_Jr(t),e-=CJr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+LJr(t)):r<=4?(e=GJr+1/-t,e+PJr(r-2)):r<=7?(e=RJr(r-4),1+ou(e)):r<15?(e=FJr(r-7),1+ou(e)):r<36?(e=MJr(r-15),1+ou(e)):1+zK(2,-r))}JK.exports=iv});var ZK=s((L4e,YK)=>{"use strict";var VJr=xK();YK.exports=VJr});var QK=s((P4e,$K)=>{"use strict";var U={};U.abs=J();U.abs2=i0();U.acos=jn();U.acosh=OZ();U.acot=LZ();U.acovercos=MZ();U.acoversin=CZ();U.acsc=HZ();U.acsch=$Z();U.ahavercos=e$();U.ahaversin=a$();U.asin=Gt();U.asinh=zf();U.atan=xa();U.atanh=v$();U.avercos=g$();U.aversin=q$();U.besselj0=xf();U.besselj1=Yf();U.bessely0=pQ();U.bessely1=LQ();U.binet=UQ();U.cbrt=YQ();U.ceil=zi();U.ceil10=lK();U.ceil2=IK();U.cos=At();U.sin=St();U.sqrt=G();U.zeta=ZK();$K.exports=U});var rrr=s((R4e,KK)=>{"use strict";function UJr(r,e){return r+e}KK.exports=UJr});var trr=s((F4e,err)=>{"use strict";var HJr=rrr();err.exports=HJr});var nrr=s((M4e,irr)=>{"use strict";function WJr(r,e){return r*e}irr.exports=WJr});var srr=s((B4e,arr)=>{"use strict";var DJr=nrr();arr.exports=DJr});var orr=s((k4e,urr)=>{"use strict";function zJr(r,e){return r-e}urr.exports=zJr});var vrr=s((j4e,frr)=>{"use strict";var XJr=orr();frr.exports=XJr});var lrr=s((C4e,crr)=>{"use strict";var fu={};fu.add=trr();fu.mul=srr();fu.sub=vrr();crr.exports=fu});var grr=s((G4e,prr)=>{"use strict";function JJr(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}prr.exports=JJr});var vu=s((V4e,mrr)=>{"use strict";var xJr=grr();mrr.exports=xJr});var hrr=s((U4e,drr)=>{"use strict";function YJr(r){return r.toLowerCase()}drr.exports=YJr});var Gi=s((H4e,qrr)=>{"use strict";var ZJr=hrr();qrr.exports=ZJr});var brr=s((W4e,yrr)=>{"use strict";function $Jr(r,e,t){return r.replace(e,t)}yrr.exports=$Jr});var Ut=s((D4e,wrr)=>{"use strict";var QJr=brr();wrr.exports=QJr});var Nrr=s((z4e,Err)=>{"use strict";var KJr=typeof String.prototype.trim<"u";Err.exports=KJr});var nv=s((X4e,Arr)=>{"use strict";var rxr=String.prototype.trim;Arr.exports=rxr});var Irr=s((J4e,Trr)=>{"use strict";var Srr=nv(),exr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,Orr="\u180E";function txr(){return Srr.call(exr)===""&&Srr.call(Orr)===Orr}Trr.exports=txr});var Lrr=s((x4e,_rr)=>{"use strict";var ixr=Ut(),nxr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function axr(r){return ixr(r,nxr,"$1")}_rr.exports=axr});var Rrr=s((Y4e,Prr)=>{"use strict";var sxr=nv();function uxr(r){return sxr.call(r)}Prr.exports=uxr});var Vi=s((Z4e,Frr)=>{"use strict";var oxr=Nrr(),fxr=Irr(),vxr=Lrr(),cxr=Rrr(),av;oxr&&fxr()?av=cxr:av=vxr;Frr.exports=av});var Brr=s(($4e,Mrr)=>{"use strict";var lxr=vu(),pxr=Gi(),cu=Ut(),gxr=Vi(),mxr=/\s+/g,dxr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,hxr=/(?:\s|^)([^\s]+)(?=\s|$)/g,qxr=/([a-z0-9])([A-Z])/g;function yxr(r,e,t){return e=pxr(e),t===0?e:lxr(e)}function bxr(r){return r=cu(r,dxr," "),r=cu(r,mxr," "),r=cu(r,qxr,"$1 $2"),r=gxr(r),cu(r,hxr,yxr)}Mrr.exports=bxr});var jrr=s((Q4e,krr)=>{"use strict";var wxr=Brr();krr.exports=wxr});var Grr=s((K4e,Crr)=>{"use strict";var Exr=K().isPrimitive,Nxr=y(),Axr=jrr();function Sxr(r){if(!Exr(r))throw new TypeError(Nxr("invalid argument. First argument must be a string. Value: `%s`.",r));return Axr(r)}Crr.exports=Sxr});var Urr=s((r6e,Vrr)=>{"use strict";var Oxr=Grr();Vrr.exports=Oxr});var Wrr=s((e6e,Hrr)=>{"use strict";var Txr=K().isPrimitive,Ixr=y(),_xr=vu();function Lxr(r){if(!Txr(r))throw new TypeError(Ixr("invalid argument. First argument must be a string. Value: `%s`.",r));return _xr(r)}Hrr.exports=Lxr});var zrr=s((t6e,Drr)=>{"use strict";var Pxr=Wrr();Drr.exports=Pxr});var Jrr=s((i6e,Xrr)=>{"use strict";function Rxr(r){return r.toUpperCase()}Xrr.exports=Rxr});var Yrr=s((n6e,xrr)=>{"use strict";var Fxr=Jrr();xrr.exports=Fxr});var $rr=s((a6e,Zrr)=>{"use strict";var Mxr=Yrr(),sv=Ut(),Bxr=Vi(),kxr=/\s+/g,jxr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Cxr=/([a-z0-9])([A-Z])/g;function Gxr(r){return r=sv(r,jxr," "),r=sv(r,Cxr,"$1 $2"),r=Bxr(r),r=sv(r,kxr,"_"),Mxr(r)}Zrr.exports=Gxr});var Krr=s((s6e,Qrr)=>{"use strict";var Vxr=$rr();Qrr.exports=Vxr});var eer=s((u6e,rer)=>{"use strict";var Uxr=K().isPrimitive,Hxr=y(),Wxr=Krr();function Dxr(r){if(!Uxr(r))throw new TypeError(Hxr("invalid argument. Must provide a string. Value: `%s`.",r));return Wxr(r)}rer.exports=Dxr});var ier=s((o6e,ter)=>{"use strict";var zxr=eer();ter.exports=zxr});var aer=s((f6e,ner)=>{"use strict";var Xxr=Gi(),uv=Ut(),Jxr=Vi(),xxr=/\s+/g,Yxr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Zxr=/([a-z0-9])([A-Z])/g;function $xr(r){return r=uv(r,Yxr," "),r=uv(r,Zxr,"$1 $2"),r=Jxr(r),r=uv(r,xxr,"-"),Xxr(r)}ner.exports=$xr});var uer=s((v6e,ser)=>{"use strict";var Qxr=aer();ser.exports=Qxr});var fer=s((c6e,oer)=>{"use strict";var Kxr=K().isPrimitive,rYr=y(),eYr=uer();function tYr(r){if(!Kxr(r))throw new TypeError(rYr("invalid argument. Must provide a string. Value: `%s`.",r));return eYr(r)}oer.exports=tYr});var cer=s((l6e,ver)=>{"use strict";var iYr=fer();ver.exports=iYr});var per=s((p6e,ler)=>{"use strict";var nYr=K().isPrimitive,aYr=y(),sYr=Gi();function uYr(r){if(!nYr(r))throw new TypeError(aYr("invalid argument. Must provide a string. Value: `%s`.",r));return sYr(r)}ler.exports=uYr});var mer=s((g6e,ger)=>{"use strict";var oYr=per();ger.exports=oYr});var her=s((m6e,der)=>{"use strict";var fYr=vu(),vYr=Gi(),lu=Ut(),cYr=Vi(),lYr=/\s+/g,pYr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,gYr=/(?:\s|^)([^\s]+)(?=\s|$)/g,mYr=/([a-z0-9])([A-Z])/g;function dYr(r,e){return fYr(vYr(e))}function hYr(r){return r=lu(r,pYr," "),r=lu(r,lYr," "),r=lu(r,mYr,"$1 $2"),r=cYr(r),lu(r,gYr,dYr)}der.exports=hYr});var yer=s((d6e,qer)=>{"use strict";var qYr=her();qer.exports=qYr});var wer=s((h6e,ber)=>{"use strict";var yYr=K().isPrimitive,bYr=y(),wYr=yer();function EYr(r){if(!yYr(r))throw new TypeError(bYr("invalid argument. First argument must be a string. Value: `%s`.",r));return wYr(r)}ber.exports=EYr});var Ner=s((q6e,Eer)=>{"use strict";var NYr=wer();Eer.exports=NYr});var Ser=s((y6e,Aer)=>{"use strict";var AYr=Gi(),ov=Ut(),SYr=Vi(),OYr=/\s+/g,TYr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,IYr=/([a-z0-9])([A-Z])/g;function _Yr(r){return r=ov(r,TYr," "),r=ov(r,IYr,"$1 $2"),r=SYr(r),r=ov(r,OYr,"_"),AYr(r)}Aer.exports=_Yr});var Ter=s((b6e,Oer)=>{"use strict";var LYr=Ser();Oer.exports=LYr});var _er=s((w6e,Ier)=>{"use strict";var PYr=K().isPrimitive,RYr=y(),FYr=Ter();function MYr(r){if(!PYr(r))throw new TypeError(RYr("invalid argument. Must provide a string. Value: `%s`.",r));return FYr(r)}Ier.exports=MYr});var Per=s((E6e,Ler)=>{"use strict";var BYr=_er();Ler.exports=BYr});var Mer=s((N6e,Fer)=>{"use strict";var kYr=I(),Rer=S(),jYr=or().isPrimitive,CYr=K().isPrimitive,fv=y();function GYr(r,e){return kYr(e)?Rer(e,"flags")&&(r.flags=e.flags,!CYr(r.flags))?new TypeError(fv("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):Rer(e,"capture")&&(r.capture=e.capture,!jYr(r.capture))?new TypeError(fv("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(fv("invalid argument. Options argument must be an object. Value: `%s`.",e))}Fer.exports=GYr});var pu=s((A6e,ker)=>{"use strict";var VYr=Mer(),Ber=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function UYr(r){var e,t;if(arguments.length>0){if(e={},t=VYr(e,r),t)throw t;return e.capture?new RegExp("("+Ber+")",e.flags):new RegExp(Ber,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}ker.exports=UYr});var Cer=s((S6e,jer)=>{"use strict";var HYr=pu(),WYr=HYr({capture:!0});jer.exports=WYr});var Ver=s((O6e,Ger)=>{"use strict";var DYr=pu(),zYr=DYr();Ger.exports=zYr});var Wer=s((T6e,Her)=>{"use strict";var Uer=w(),vv=pu(),XYr=Cer(),JYr=Ver();Uer(vv,"REGEXP",JYr);Uer(vv,"REGEXP_CAPTURE",XYr);Her.exports=vv});var zer=s((I6e,Der)=>{"use strict";var xYr=Wer().REGEXP;function YYr(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),xYr.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}Der.exports=YYr});var Jer=s((_6e,Xer)=>{"use strict";var ZYr=zer();Xer.exports=ZYr});var Yer=s((L6e,xer)=>{"use strict";var $Yr=K().isPrimitive,QYr=y(),KYr=Jer();function rZr(r){if(!$Yr(r))throw new TypeError(QYr("invalid argument. Must provide a string. Value: `%s`.",r));return KYr(r)}xer.exports=rZr});var $er=s((P6e,Zer)=>{"use strict";var eZr=Yer();Zer.exports=eZr});var Ker=s((R6e,Qer)=>{"use strict";function tZr(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}Qer.exports=tZr});var etr=s((F6e,rtr)=>{"use strict";var iZr=Ker();rtr.exports=iZr});var itr=s((M6e,ttr)=>{"use strict";var nZr=K().isPrimitive,aZr=y(),sZr=etr();function uZr(r){if(!nZr(r))throw new TypeError(aZr("invalid argument. First argument must be a string. Value: `%s`.",r));return sZr(r)}ttr.exports=uZr});var atr=s((B6e,ntr)=>{"use strict";var oZr=itr();ntr.exports=oZr});var utr=s((k6e,str)=>{"use strict";var fZr=K().isPrimitive,vZr=y();function cZr(r){if(!fZr(r))throw new TypeError(vZr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}str.exports=cZr});var ftr=s((j6e,otr)=>{"use strict";var lZr=utr();otr.exports=lZr});var ctr=s((C6e,vtr)=>{"use strict";var Wr={};Wr.camelcase=Urr();Wr.capitalize=zrr();Wr.constantcase=ier();Wr.kebabcase=cer();Wr.lowercase=mer();Wr.pascalcase=Ner();Wr.snakecase=Per();Wr.startcase=$er();Wr.uncapitalize=atr();Wr.uppercase=ftr();vtr.exports=Wr});var ptr=s((G6e,ltr)=>{"use strict";var cv=B6(),Ui,H={};H.bartlettTest=Hy();H.broadcastShapes=w2();H.cumax=rb().ndarray;H.filled2d=La();H.filled2dBy=ub();H.flattenArray=A2();H.isArray=cr();H.isBoolean=or().isPrimitive;H.isNumber=k().isPrimitive;H.isPositiveNumber=D().isPrimitive;H.isString=K().isPrimitive;H.iterator2array=MA();H.iterSawtoothWave=hS();H.linspace=IO();H.max=jO().ndarray;H.mskmax=XO().ndarray;H.normalizeBroadcastArgs=s1();H.ones2d=KO();H.zeros2d=u1();H.assert=q_();H.blas=O_();H.datasets=hP();H.dists=uM();H.math=tB();H.random=VY();H.string=aZ();H.tools=uZ();Ui=QK();cv(Ui,H);Ui=lrr();cv(Ui,H);Ui=ctr();cv(Ui,H);ltr.exports=H});var gZr=s((V6e,gtr)=>{var pZr=ptr();gtr.exports=pZr});return gZr();})();
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
	return ns.math.tools.unary( args, ns.abs2 );
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
	return ns.math.tools.unary( args, ns.acovercos );
}
var __STDLIB_KEBABCASE = ns.string.tools.s_o( ns.kebabcase ); 
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
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_KEBABCASE );
		return value;
	}
	return __STDLIB_KEBABCASE( value );
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
	return ns.math.tools.unary( args, ns.cos );
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
	return ns.math.tools.unary( args, ns.asin );
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
	return ns.math.tools.unary( args, ns.binet );
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
	return ns.math.tools.unary( args, ns.ceil );
}
var __STDLIB_PASCALCASE = ns.string.tools.s_o( ns.pascalcase ); 
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
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_PASCALCASE );
		return value;
	}
	return __STDLIB_PASCALCASE( value );
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
	return ns.math.tools.unary( args, ns.abs );
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
	return ns.math.tools.unary( args, ns.acosh );
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
	return ns.math.tools.unary( args, ns.acot );
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
	return ns.math.tools.unary( args, ns.asinh );
}
var __STDLIB_UNCAPITALIZE = ns.string.tools.s_o( ns.uncapitalize ); 
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
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_UNCAPITALIZE );
		return value;
	}
	return __STDLIB_UNCAPITALIZE( value );
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
	return ns.math.tools.unary( args, ns.besselj0 );
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
	return ns.math.tools.unary( args, ns.bessely1 );
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
	return ns.math.tools.unary( args, ns.zeta );
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
	return ns.math.tools.unary( args, ns.ahaversin );
}
var __STDLIB_STARTCASE = ns.string.tools.s_o( ns.startcase ); 
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
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_STARTCASE );
		return value;
	}
	return __STDLIB_STARTCASE( value );
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
	return ns.math.tools.unary( args, ns.sqrt );
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
	return ns.math.tools.unary( args, ns.besselj1 );
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
	return ns.math.tools.unary( args, ns.bessely0 );
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
	return ns.math.tools.unary( args, ns.ceil2 );
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
	return ns.math.tools.binary( args, ns.add );
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
	return ns.math.tools.unary( args, ns.aversin );
}
var __STDLIB_LOWERCASE = ns.string.tools.s_o( ns.lowercase ); 
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
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_LOWERCASE );
		return value;
	}
	return __STDLIB_LOWERCASE( value );
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
	return ns.math.tools.unary( args, ns.acoversin );
}
var __STDLIB_CAPITALIZE = ns.string.tools.s_o( ns.capitalize ); 
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
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_CAPITALIZE );
		return value;
	}
	return __STDLIB_CAPITALIZE( value );
}
var __STDLIB_CONSTANTCASE = ns.string.tools.s_o( ns.constantcase ); 
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
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_CONSTANTCASE );
		return value;
	}
	return __STDLIB_CONSTANTCASE( value );
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
	return ns.math.tools.unary( args, ns.sin );
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
	return ns.math.tools.unary( args, ns.cbrt );
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
	return ns.math.tools.unary( args, ns.atanh );
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
	return ns.math.tools.unary( args, ns.acos );
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
	return ns.math.tools.unary( args, ns.atan );
}
var __STDLIB_CAMELCASE = ns.string.tools.s_o( ns.camelcase ); 
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
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_CAMELCASE );
		return value;
	}
	return __STDLIB_CAMELCASE( value );
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
	return ns.math.tools.binary( args, ns.mul );
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
	return ns.math.tools.unary( args, ns.acsch );
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
	return ns.math.tools.unary( args, ns.avercos );
}
var __STDLIB_SNAKECASE = ns.string.tools.s_o( ns.snakecase ); 
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
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_SNAKECASE );
		return value;
	}
	return __STDLIB_SNAKECASE( value );
}
var __STDLIB_UPPERCASE = ns.string.tools.s_o( ns.uppercase ); 
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
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], __STDLIB_UPPERCASE );
		return value;
	}
	return __STDLIB_UPPERCASE( value );
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
	return ns.math.tools.binary( args, ns.sub );
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
	return ns.math.tools.unary( args, ns.acsc );
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
	return ns.math.tools.unary( args, ns.ceil10 );
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
	return ns.math.tools.unary( args, ns.ahavercos );
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
			s = ns.random.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isProbability( p, 'Success probability' );
	rand = ns.random.geometric( p, {
		'seed': s
	});
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
	return ns.linspace( start, stop, length, opts );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], f );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
	return ns.math.tools.binary( args, ns.dists.normal.median );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], f );
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
	return ns.math.tools.binary( args, ns.dists.normal.mode );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
	return ns.math.tools.binary( args, ns.dists.normal.mean );
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
	return ns.math.tools.binary( args, ns.dists.normal.entropy );
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
	return ns.math.tools.binary( args, ns.dists.normal.kurtosis );
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
			s = ns.random.normalizeSeed( a );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( v, 'Degrees of freedom' );
	rand = ns.random.t( v, {
		'seed': s
	});
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( lambda, 'Rate parameter' );
	rand = ns.random.exponential( lambda, {
		'seed': s
	});
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			out.push( ns.max( N, x[ i ], 1, 0 ) );
		}
		return out;
	}
	// More complex case where we're provided a range in row-major order, but asked to operate across rows...
	M = x[ 0 ].length; // number of columns
	N = x.length;      // number of rows
	// Flatten the input array to a strided array in row-major order:
	sarray = ns.flattenArray( x );
	// Set the offset which defines the pointer to the first indexed element in a column:
	offset = 0;
	// Iterate over rows...
	for ( i = 0; i < M; i++ ) {
		out.push( ns.max( N, sarray, M, offset ) );
		offset += 1;
	}
	return [ out ];
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			sd = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
}
var __STDLIB_DISTS_NORMAL_MGF_DTYPES = [ 'number', 'number', 'number' ]; 
var __STDLIB_DISTS_NORMAL_MGF_MSGS = [ 'First argument', 'Second argument', 'Third argument' ]; 
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
	var shape;
	var args;
	var opts;
	var out;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	// Normalize the provided arguments so we are always working with nested arrays:
	args = ns.normalizeBroadcastArgs( [ t, mu, sigma ], __STDLIB_DISTS_NORMAL_MGF_DTYPES, __STDLIB_DISTS_NORMAL_MGF_MSGS ); 
	// Resolve the shape of the broadcasted result:
	shape = ns.broadcastShapes( args[ 1 ] );
	if ( shape === null ) {
		throw new Error( 'invalid argument. Input arguments are not broadcast compatible.' );
	}
	// Create an output array:
	out = ns.zeros2d( shape );
	// Wrap the lower-level function to ensure proper handling of input arguments and return values:
	f = ns.tools.ddd_d( ns.dists.normal.mgf, opts );
	// Apply the function to broadcasted arrays:
	args[ 0 ].push( out );
	args[ 1 ].push( shape );
	ns.tools.bternary2d( args[ 0 ], args[ 1 ], f );
	return out;
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
			s = ns.random.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	rand = ns.random.improvedZiggurat({
		'seed': s
	});
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
	out = ns.blas.saxpy( N, alpha, ns.flattenArray( x ), strideX, offsetX, ns.flattenArray( y ), strideY, offsetY ); 
	// If provided two rows, return a row...
	if ( x.length === 1 && y.length === 1 ) {
		return [ out ];
	}
	return out;
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( sigma, 'Scale parameter' );
	rand = ns.random.rayleigh( sigma, {
		'seed': s
	});
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
	return ns.zeros2d( [ nrows, ncols ] );
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
			sd = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			opts[ o ] = ns.flattenArray( v );
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
	out = ns.bartlettTest( ns.flattenArray( values ), opts );
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
var __STDLIB_DISTS_NORMAL_LOGPDF_DTYPES = [ 'number', 'number', 'number' ]; 
var __STDLIB_DISTS_NORMAL_LOGPDF_MSGS = [ 'First argument', 'Second argument', 'Third argument' ]; 
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
	var shape;
	var args;
	var opts;
	var out;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	// Normalize the provided arguments so we are always working with nested arrays:
	args = ns.normalizeBroadcastArgs( [ x, mu, sigma ], __STDLIB_DISTS_NORMAL_LOGPDF_DTYPES, __STDLIB_DISTS_NORMAL_LOGPDF_MSGS ); 
	// Resolve the shape of the broadcasted result:
	shape = ns.broadcastShapes( args[ 1 ] );
	if ( shape === null ) {
		throw new Error( 'invalid argument. Input arguments are not broadcast compatible.' );
	}
	// Create an output array:
	out = ns.zeros2d( shape );
	// Wrap the lower-level function to ensure proper handling of input arguments and return values:
	f = ns.tools.ddd_d( ns.dists.normal.logpdf, opts );
	// Apply the function to broadcasted arrays:
	args[ 0 ].push( out );
	args[ 1 ].push( shape );
	ns.tools.bternary2d( args[ 0 ], args[ 1 ], f );
	return out;
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
	return ns.math.tools.binary( args, ns.dists.normal.skewness );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			sd = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	rand = ns.random.boxMuller({
		'seed': s
	});
	return ns.filled2dBy( [ nrows, ncols ], rand );
}
var __STDLIB_DISTS_NORMAL_CDF_DTYPES = [ 'number', 'number', 'number' ]; 
var __STDLIB_DISTS_NORMAL_CDF_MSGS = [ 'First argument', 'Second argument', 'Third argument' ]; 
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
	var shape;
	var args;
	var opts;
	var out;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	// Normalize the provided arguments so we are always working with nested arrays:
	args = ns.normalizeBroadcastArgs( [ x, mu, sigma ], __STDLIB_DISTS_NORMAL_CDF_DTYPES, __STDLIB_DISTS_NORMAL_CDF_MSGS ); 
	// Resolve the shape of the broadcasted result:
	shape = ns.broadcastShapes( args[ 1 ] );
	if ( shape === null ) {
		throw new Error( 'invalid argument. Input arguments are not broadcast compatible.' );
	}
	// Create an output array:
	out = ns.zeros2d( shape );
	// Wrap the lower-level function to ensure proper handling of input arguments and return values:
	f = ns.tools.ddd_d( ns.dists.normal.cdf, opts );
	// Apply the function to broadcasted arrays:
	args[ 0 ].push( out );
	args[ 1 ].push( shape );
	ns.tools.bternary2d( args[ 0 ], args[ 1 ], f );
	return out;
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
	return ns.math.tools.binary( args, ns.dists.normal.stdev );
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
			s = ns.random.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( lambda, 'Mean parameter' );
	rand = ns.random.poisson( lambda, {
		'seed': s
	});
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( k, 'Degrees of freedom' );
	rand = ns.random.chisquare( k, {
		'seed': s
	});
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], f );
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
			s = ns.random.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( k, 'Degrees of freedom' );
	rand = ns.random.chi( k, {
		'seed': s
	});
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
	return ns.ones2d( [ nrows, ncols ] );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
}
var __STDLIB_DISTS_NORMAL_QUANTILE_DTYPES = [ 'number', 'number', 'number' ]; 
var __STDLIB_DISTS_NORMAL_QUANTILE_MSGS = [ 'First argument', 'Second argument', 'Third argument' ]; 
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
	var shape;
	var args;
	var opts;
	var out;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	// Normalize the provided arguments so we are always working with nested arrays:
	args = ns.normalizeBroadcastArgs( [ p, mu, sigma ], __STDLIB_DISTS_NORMAL_QUANTILE_DTYPES, __STDLIB_DISTS_NORMAL_QUANTILE_MSGS ); 
	// Resolve the shape of the broadcasted result:
	shape = ns.broadcastShapes( args[ 1 ] );
	if ( shape === null ) {
		throw new Error( 'invalid argument. Input arguments are not broadcast compatible.' );
	}
	// Create an output array:
	out = ns.zeros2d( shape );
	// Wrap the lower-level function to ensure proper handling of input arguments and return values:
	f = ns.tools.ddd_d( ns.dists.normal.quantile, opts );
	// Apply the function to broadcasted arrays:
	args[ 0 ].push( out );
	args[ 1 ].push( shape );
	ns.tools.bternary2d( args[ 0 ], args[ 1 ], f );
	return out;
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
			sd = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			out.push( ns.mskmax( N, x[ ix ], sx, 0, mask[ im ], sm, 0 ) );
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
	sarray = ns.flattenArray( x );
	smask = ns.flattenArray( mask );
	// Iterate over rows...
	for ( i = 0; i < M; i++ ) {
		out.push( ns.mskmax( N, sarray, sx, ix, smask, sm, im ) );
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
			ns.cumax( N, x[ i ], 1, 0, x[ i ], 1, 0 );
		}
		return x;
	}
	// More complex case where we're provided a range in row-major order, but asked to operate across rows...
	M = x[ 0 ].length; // number of columns
	N = x.length;      // number of rows
	// Flatten the input array to a strided array in row-major order:
	sarray = ns.flattenArray( x );
	// Set the offset which defines the pointer to the first indexed element in a column:
	offset = 0;
	// Iterate over rows...
	for ( i = 0; i < M; i++ ) {
		ns.cumax( N, sarray, M, offset, sarray, M, offset );
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
	out = ns.blas.daxpy( N, alpha, ns.flattenArray( x ), strideX, offsetX, ns.flattenArray( y ), strideY, offsetY ); 
	// If provided two rows, return a row...
	if ( x.length === 1 && y.length === 1 ) {
		return [ out ];
	}
	return out;
}
var __STDLIB_DISTS_NORMAL_PDF_DTYPES = [ 'number', 'number', 'number' ]; 
var __STDLIB_DISTS_NORMAL_PDF_MSGS = [ 'First argument', 'Second argument', 'Third argument' ]; 
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
	var shape;
	var args;
	var opts;
	var out;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	// Normalize the provided arguments so we are always working with nested arrays:
	args = ns.normalizeBroadcastArgs( [ x, mu, sigma ], __STDLIB_DISTS_NORMAL_PDF_DTYPES, __STDLIB_DISTS_NORMAL_PDF_MSGS ); 
	// Resolve the shape of the broadcasted result:
	shape = ns.broadcastShapes( args[ 1 ] );
	if ( shape === null ) {
		throw new Error( 'invalid argument. Input arguments are not broadcast compatible.' );
	}
	// Create an output array:
	out = ns.zeros2d( shape );
	// Wrap the lower-level function to ensure proper handling of input arguments and return values:
	f = ns.tools.ddd_d( ns.dists.normal.pdf, opts );
	// Apply the function to broadcasted arrays:
	args[ 0 ].push( out );
	args[ 1 ].push( shape );
	ns.tools.bternary2d( args[ 0 ], args[ 1 ], f );
	return out;
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
	it = ns.iterSawtoothWave( opts );
	return ns.iterator2array( it );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
	return ns.filled2d( value, [ nrows, ncols ] );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
}
var __STDLIB_DISTS_NORMAL_LOGCDF_DTYPES = [ 'number', 'number', 'number' ]; 
var __STDLIB_DISTS_NORMAL_LOGCDF_MSGS = [ 'First argument', 'Second argument', 'Third argument' ]; 
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
	var shape;
	var args;
	var opts;
	var out;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 3; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	// Normalize the provided arguments so we are always working with nested arrays:
	args = ns.normalizeBroadcastArgs( [ x, mu, sigma ], __STDLIB_DISTS_NORMAL_LOGCDF_DTYPES, __STDLIB_DISTS_NORMAL_LOGCDF_MSGS ); 
	// Resolve the shape of the broadcasted result:
	shape = ns.broadcastShapes( args[ 1 ] );
	if ( shape === null ) {
		throw new Error( 'invalid argument. Input arguments are not broadcast compatible.' );
	}
	// Create an output array:
	out = ns.zeros2d( shape );
	// Wrap the lower-level function to ensure proper handling of input arguments and return values:
	f = ns.tools.ddd_d( ns.dists.normal.logcdf, opts );
	// Apply the function to broadcasted arrays:
	args[ 0 ].push( out );
	args[ 1 ].push( shape );
	ns.tools.bternary2d( args[ 0 ], args[ 1 ], f );
	return out;
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			s = ns.random.normalizeSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isProbability( p, 'Success probability' );
	rand = ns.random.bernoulli( p, {
		'seed': s
	});
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
			sd = ns.random.normalizeSeed( v );
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
	return ns.filled2dBy( [ nrows, ncols ], rand );
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
	return ns.math.tools.binary( args, ns.dists.normal.variance );
}
