/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var zn=s((MYr,iv)=>{"use strict";function Yer(r){return Object.keys(Object(r))}iv.exports=Yer});var av=s((BYr,nv)=>{"use strict";var Zer=zn();function $er(){return(Zer(arguments)||"").length!==2}function Qer(){return $er(1,2)}nv.exports=Qer});var uv=s((kYr,sv)=>{"use strict";var Ker=typeof Object.keys<"u";sv.exports=Ker});var fv=s((jYr,ov)=>{"use strict";function rtr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}ov.exports=rtr});var cv=s((CYr,vv)=>{"use strict";var etr=fv();vv.exports=etr});var pv=s((GYr,lv)=>{"use strict";var ttr=cv(),itr=ttr();function ntr(){return itr&&typeof Symbol.toStringTag=="symbol"}lv.exports=ntr});var Wi=s((VYr,gv)=>{"use strict";var atr=pv();gv.exports=atr});var mu=s((UYr,mv)=>{"use strict";var str=Object.prototype.toString;mv.exports=str});var hv=s((HYr,dv)=>{"use strict";var utr=mu();function otr(r){return utr.call(r)}dv.exports=otr});var yv=s((WYr,qv)=>{"use strict";var ftr=Object.prototype.hasOwnProperty;function vtr(r,e){return r==null?!1:ftr.call(r,e)}qv.exports=vtr});var O=s((DYr,bv)=>{"use strict";var ctr=yv();bv.exports=ctr});var Ev=s((zYr,wv)=>{"use strict";var ltr=typeof Symbol=="function"?Symbol:void 0;wv.exports=ltr});var du=s((XYr,Nv)=>{"use strict";var ptr=Ev();Nv.exports=ptr});var Sv=s((JYr,Ov)=>{"use strict";var Av=du(),gtr=typeof Av=="function"?Av.toStringTag:"";Ov.exports=gtr});var Iv=s((xYr,Tv)=>{"use strict";var mtr=O(),Di=Sv(),hu=mu();function dtr(r){var e,t,i;if(r==null)return hu.call(r);t=r[Di],e=mtr(r,Di);try{r[Di]=void 0}catch{return hu.call(r)}return i=hu.call(r),e?r[Di]=t:delete r[Di],i}Tv.exports=dtr});var ir=s((YYr,_v)=>{"use strict";var htr=Wi(),qtr=hv(),ytr=Iv(),qu;htr()?qu=ytr:qu=qtr;_v.exports=qu});var yu=s((ZYr,Lv)=>{"use strict";var btr=ir();function wtr(r){return btr(r)==="[object Arguments]"}Lv.exports=wtr});var Fv=s(($Yr,Rv)=>{"use strict";var Etr=yu(),Pv;function Ntr(){return Etr(arguments)}Pv=Ntr();Rv.exports=Pv});var Bv=s((QYr,Mv)=>{"use strict";var Atr=typeof Object.defineProperty=="function"?Object.defineProperty:null;Mv.exports=Atr});var jv=s((KYr,kv)=>{"use strict";var Otr=Bv();function Str(){try{return Otr({},"x",{}),!0}catch{return!1}}kv.exports=Str});var Gv=s((rZr,Cv)=>{"use strict";var Ttr=Object.defineProperty;Cv.exports=Ttr});var bu=s((eZr,Vv)=>{"use strict";function Itr(r){return typeof r=="number"}Vv.exports=Itr});var wu=s((tZr,Hv)=>{"use strict";function _tr(r){return r[0]==="-"}function Uv(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Ltr(r,e,t){var i=!1,n=e-r.length;return n<0||(_tr(r)&&(i=!0,r=r.substr(1)),r=t?r+Uv(n):Uv(n)+r,i&&(r="-"+r)),r}Hv.exports=Ltr});var Xv=s((iZr,zv)=>{"use strict";var Ptr=bu(),Wv=wu(),Rtr=String.prototype.toLowerCase,Dv=String.prototype.toUpperCase;function Ftr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Ptr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Wv(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=Wv(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===Dv.call(r.specifier)?Dv.call(t):Rtr.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}zv.exports=Ftr});var xv=s((nZr,Jv)=>{"use strict";function Mtr(r){return typeof r=="string"}Jv.exports=Mtr});var $v=s((aZr,Zv)=>{"use strict";var Btr=bu(),ktr=Math.abs,jtr=String.prototype.toLowerCase,Yv=String.prototype.toUpperCase,wt=String.prototype.replace,Ctr=/e\+(\d)$/,Gtr=/e-(\d)$/,Vtr=/^(\d+)$/,Utr=/^(\d+)e/,Htr=/\.0$/,Wtr=/\.0*e/,Dtr=/(\..*[^0])0*e/;function ztr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Btr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":ktr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=wt.call(t,Dtr,"$1e"),t=wt.call(t,Wtr,"e"),t=wt.call(t,Htr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=wt.call(t,Ctr,"e+0$1"),t=wt.call(t,Gtr,"e-0$1"),r.alternate&&(t=wt.call(t,Vtr,"$1."),t=wt.call(t,Utr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Yv.call(r.specifier)?Yv.call(t):jtr.call(t),t}Zv.exports=ztr});var rc=s((sZr,Kv)=>{"use strict";function Qv(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function Xtr(r,e,t){var i=e-r.length;return i<0||(r=t?r+Qv(i):Qv(i)+r),r}Kv.exports=Xtr});var tc=s((uZr,ec)=>{"use strict";var Jtr=Xv(),xtr=xv(),Ytr=$v(),Ztr=rc(),$tr=wu(),Qtr=String.fromCharCode,Xn=isNaN,Ktr=Array.isArray;function rir(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function eir(r){var e,t,i,n,a,u,o,v,f;if(!Ktr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,v=0;v<r.length;v++)if(i=r[v],xtr(i))u+=i;else{if(e=i.precision!==void 0,i=rir(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,Xn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,Xn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=Jtr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Xn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Xn(a)?String(i.arg):Qtr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=Ytr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=$tr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ztr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}ec.exports=eir});var nc=s((oZr,ic)=>{"use strict";var tir=tc();ic.exports=tir});var sc=s((fZr,ac)=>{"use strict";var Jn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function iir(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function nir(r){var e,t,i,n;for(t=[],n=0,i=Jn.exec(r);i;)e=r.slice(n,Jn.lastIndex-i[0].length),e.length&&t.push(e),t.push(iir(i)),n=Jn.lastIndex,i=Jn.exec(r);return e=r.slice(n),e.length&&t.push(e),t}ac.exports=nir});var oc=s((vZr,uc)=>{"use strict";var air=sc();uc.exports=air});var vc=s((cZr,fc)=>{"use strict";function sir(r){return typeof r=="string"}fc.exports=sir});var pc=s((lZr,lc)=>{"use strict";var uir=nc(),oir=oc(),fir=vc();function cc(r){var e,t,i;if(!fir(r))throw new TypeError(cc("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=oir(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return uir.apply(null,t)}lc.exports=cc});var y=s((pZr,gc)=>{"use strict";var vir=pc();gc.exports=vir});var bc=s((gZr,yc)=>{"use strict";var mc=y(),Dt=Object.prototype,dc=Dt.toString,hc=Dt.__defineGetter__,qc=Dt.__defineSetter__,cir=Dt.__lookupGetter__,lir=Dt.__lookupSetter__;function pir(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||dc.call(r)==="[object Array]")throw new TypeError(mc("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||dc.call(t)==="[object Array]")throw new TypeError(mc("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(cir.call(r,e)||lir.call(r,e)?(i=r.__proto__,r.__proto__=Dt,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&hc&&hc.call(r,e,t.get),u&&qc&&qc.call(r,e,t.set),r}yc.exports=pir});var Ce=s((mZr,wc)=>{"use strict";var gir=jv(),mir=Gv(),dir=bc(),Eu;gir()?Eu=mir:Eu=dir;wc.exports=Eu});var Nc=s((dZr,Ec)=>{"use strict";var hir=Ce();function qir(r,e,t){hir(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}Ec.exports=qir});var w=s((hZr,Ac)=>{"use strict";var yir=Nc();Ac.exports=yir});var Nu=s((qZr,Oc)=>{"use strict";function bir(r){return typeof r=="string"}Oc.exports=bir});var Tc=s((yZr,Sc)=>{"use strict";var wir=String.prototype.valueOf;Sc.exports=wir});var _c=s((bZr,Ic)=>{"use strict";var Eir=Tc();function Nir(r){try{return Eir.call(r),!0}catch{return!1}}Ic.exports=Nir});var Au=s((wZr,Lc)=>{"use strict";var Air=Wi(),Oir=ir(),Sir=_c(),Tir=Air();function Iir(r){return typeof r=="object"?r instanceof String?!0:Tir?Sir(r):Oir(r)==="[object String]":!1}Lc.exports=Iir});var Rc=s((EZr,Pc)=>{"use strict";var _ir=Nu(),Lir=Au();function Pir(r){return _ir(r)||Lir(r)}Pc.exports=Pir});var K=s((NZr,Mc)=>{"use strict";var Fc=w(),Ou=Rc(),Rir=Nu(),Fir=Au();Fc(Ou,"isPrimitive",Rir);Fc(Ou,"isObject",Fir);Mc.exports=Ou});var Su=s((AZr,Bc)=>{"use strict";function Mir(r){return typeof r=="number"}Bc.exports=Mir});var jc=s((OZr,kc)=>{"use strict";kc.exports=Number});var xn=s((SZr,Cc)=>{"use strict";var Bir=jc();Cc.exports=Bir});var Vc=s((TZr,Gc)=>{"use strict";var kir=xn(),jir=kir.prototype.toString;Gc.exports=jir});var Hc=s((IZr,Uc)=>{"use strict";var Cir=Vc();function Gir(r){try{return Cir.call(r),!0}catch{return!1}}Uc.exports=Gir});var Tu=s((_Zr,Wc)=>{"use strict";var Vir=Wi(),Uir=ir(),Hir=xn(),Wir=Hc(),Dir=Vir();function zir(r){return typeof r=="object"?r instanceof Hir?!0:Dir?Wir(r):Uir(r)==="[object Number]":!1}Wc.exports=zir});var zc=s((LZr,Dc)=>{"use strict";var Xir=Su(),Jir=Tu();function xir(r){return Xir(r)||Jir(r)}Dc.exports=xir});var k=s((PZr,Jc)=>{"use strict";var Xc=w(),Iu=zc(),Yir=Su(),Zir=Tu();Xc(Iu,"isPrimitive",Yir);Xc(Iu,"isObject",Zir);Jc.exports=Iu});var Yc=s((RZr,xc)=>{"use strict";function $ir(r){return r!==r}xc.exports=$ir});var E=s((FZr,Zc)=>{"use strict";var Qir=Yc();Zc.exports=Qir});var _u=s((MZr,$c)=>{"use strict";var Kir=k().isPrimitive,rnr=E();function enr(r){return Kir(r)&&rnr(r)}$c.exports=enr});var Lu=s((BZr,Qc)=>{"use strict";var tnr=k().isObject,inr=E();function nnr(r){return tnr(r)&&inr(r.valueOf())}Qc.exports=nnr});var rl=s((kZr,Kc)=>{"use strict";var anr=_u(),snr=Lu();function unr(r){return anr(r)||snr(r)}Kc.exports=unr});var sr=s((jZr,tl)=>{"use strict";var el=w(),Pu=rl(),onr=_u(),fnr=Lu();el(Pu,"isPrimitive",onr);el(Pu,"isObject",fnr);tl.exports=Pu});var _=s((CZr,il)=>{"use strict";var vnr=Number.POSITIVE_INFINITY;il.exports=vnr});var V=s((GZr,nl)=>{"use strict";var cnr=xn(),lnr=cnr.NEGATIVE_INFINITY;nl.exports=lnr});var sl=s((VZr,al)=>{"use strict";var pnr=Math.floor;al.exports=pnr});var Q=s((UZr,ul)=>{"use strict";var gnr=sl();ul.exports=gnr});var fl=s((HZr,ol)=>{"use strict";var mnr=Q();function dnr(r){return mnr(r)===r}ol.exports=dnr});var Ir=s((WZr,vl)=>{"use strict";var hnr=fl();vl.exports=hnr});var Ru=s((DZr,cl)=>{"use strict";var qnr=_(),ynr=V(),bnr=Ir();function wnr(r){return r<qnr&&r>ynr&&bnr(r)}cl.exports=wnr});var Fu=s((zZr,ll)=>{"use strict";var Enr=k().isPrimitive,Nnr=Ru();function Anr(r){return Enr(r)&&Nnr(r)}ll.exports=Anr});var Mu=s((XZr,pl)=>{"use strict";var Onr=k().isObject,Snr=Ru();function Tnr(r){return Onr(r)&&Snr(r.valueOf())}pl.exports=Tnr});var ml=s((JZr,gl)=>{"use strict";var Inr=Fu(),_nr=Mu();function Lnr(r){return Inr(r)||_nr(r)}gl.exports=Lnr});var Cr=s((xZr,hl)=>{"use strict";var dl=w(),Bu=ml(),Pnr=Fu(),Rnr=Mu();dl(Bu,"isPrimitive",Pnr);dl(Bu,"isObject",Rnr);hl.exports=Bu});var ku=s((YZr,ql)=>{"use strict";var Fnr=Object.prototype.propertyIsEnumerable;ql.exports=Fnr});var wl=s((ZZr,bl)=>{"use strict";var Mnr=ku(),yl;function Bnr(){return!Mnr.call("beep","0")}yl=Bnr();bl.exports=yl});var Nl=s(($Zr,El)=>{"use strict";var knr=K(),jnr=sr().isPrimitive,Cnr=Cr().isPrimitive,Gnr=ku(),Vnr=wl();function Unr(r,e){var t;return r==null?!1:(t=Gnr.call(r,e),!t&&Vnr&&knr(r)?(e=+e,!jnr(e)&&Cnr(e)&&e>=0&&e<r.length):t)}El.exports=Unr});var zi=s((QZr,Al)=>{"use strict";var Hnr=Nl();Al.exports=Hnr});var Sl=s((KZr,Ol)=>{"use strict";var Wnr=ir(),ju;function Dnr(r){return Wnr(r)==="[object Array]"}Array.isArray?ju=Array.isArray:ju=Dnr;Ol.exports=ju});var mr=s((r$r,Tl)=>{"use strict";var znr=Sl();Tl.exports=znr});var zt=s((e$r,Il)=>{"use strict";var Xnr=4294967295;Il.exports=Xnr});var Ll=s((t$r,_l)=>{"use strict";var Jnr=O(),xnr=zi(),Ynr=mr(),Znr=Ir(),$nr=zt();function Qnr(r){return r!==null&&typeof r=="object"&&!Ynr(r)&&typeof r.length=="number"&&Znr(r.length)&&r.length>=0&&r.length<=$nr&&Jnr(r,"callee")&&!xnr(r,"callee")}_l.exports=Qnr});var Gu=s((i$r,Pl)=>{"use strict";var Knr=Fv(),rar=yu(),ear=Ll(),Cu;Knr?Cu=rar:Cu=ear;Pl.exports=Cu});var Ml=s((n$r,Fl)=>{"use strict";var tar=Gu(),Rl=zn(),iar=Array.prototype.slice;function nar(r){return tar(r)?Rl(iar.call(r)):Rl(r)}Fl.exports=nar});var kl=s((a$r,Bl)=>{"use strict";var aar=mr(),sar=y();function uar(r){if(typeof r!="function")throw new TypeError(sar("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!aar(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}Bl.exports=uar});var Cl=s((s$r,jl)=>{"use strict";var oar=kl();jl.exports=oar});var Vl=s((u$r,Gl)=>{"use strict";function far(r){return r!==null&&typeof r=="object"}Gl.exports=far});var Uu=s((o$r,Ul)=>{"use strict";var car=w(),lar=Cl(),Vu=Vl(),par=lar(Vu);car(Vu,"isObjectLikeArray",par);Ul.exports=Vu});var Wl=s((f$r,Hl)=>{"use strict";function gar(){}Hl.exports=gar});var C=s((v$r,Dl)=>{"use strict";var mar=Wl();Dl.exports=mar});var Xl=s((c$r,zl)=>{"use strict";var dar=zi(),har=C(),qar=dar(har,"prototype");zl.exports=qar});var xl=s((l$r,Jl)=>{"use strict";var yar=zi(),bar={toString:null},war=!yar(bar,"toString");Jl.exports=war});var Zl=s((p$r,Yl)=>{"use strict";var Ear=9007199254740991;Yl.exports=Ear});var Ql=s((g$r,$l)=>{"use strict";var Nar=Ir(),Aar=Zl();function Oar(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Nar(r.length)&&r.length>=0&&r.length<=Aar}$l.exports=Oar});var Gr=s((m$r,Kl)=>{"use strict";var Sar=Ql();Kl.exports=Sar});var i4=s((d$r,t4)=>{"use strict";var r4=sr(),Tar=Gr(),Iar=K().isPrimitive,_ar=Cr().isPrimitive,e4=y();function Lar(r,e,t){var i,n;if(!Tar(r)&&!Iar(r))throw new TypeError(e4("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!_ar(t))throw new TypeError(e4("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(r4(e)){for(;n<i;n++)if(r4(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}t4.exports=Lar});var Yn=s((h$r,n4)=>{"use strict";var Par=i4();n4.exports=Par});var s4=s((q$r,a4)=>{"use strict";var Rar=/./;a4.exports=Rar});var Hu=s((y$r,u4)=>{"use strict";function Far(r){return typeof r=="boolean"}u4.exports=Far});var f4=s((b$r,o4)=>{"use strict";var Mar=Boolean;o4.exports=Mar});var c4=s((w$r,v4)=>{"use strict";var Bar=f4();v4.exports=Bar});var p4=s((E$r,l4)=>{"use strict";var kar=Boolean.prototype.toString;l4.exports=kar});var m4=s((N$r,g4)=>{"use strict";var jar=p4();function Car(r){try{return jar.call(r),!0}catch{return!1}}g4.exports=Car});var Wu=s((A$r,d4)=>{"use strict";var Gar=Wi(),Var=ir(),Uar=c4(),Har=m4(),War=Gar();function Dar(r){return typeof r=="object"?r instanceof Uar?!0:War?Har(r):Var(r)==="[object Boolean]":!1}d4.exports=Dar});var q4=s((O$r,h4)=>{"use strict";var zar=Hu(),Xar=Wu();function Jar(r){return zar(r)||Xar(r)}h4.exports=Jar});var fr=s((S$r,b4)=>{"use strict";var y4=w(),Du=q4(),xar=Hu(),Yar=Wu();y4(Du,"isPrimitive",xar);y4(Du,"isObject",Yar);b4.exports=Du});var E4=s((T$r,w4)=>{"use strict";function Zar(){return new Function("return this;")()}w4.exports=Zar});var A4=s((I$r,N4)=>{"use strict";var $ar=typeof self=="object"?self:null;N4.exports=$ar});var S4=s((_$r,O4)=>{"use strict";var Qar=typeof window=="object"?window:null;O4.exports=Qar});var I4=s((L$r,T4)=>{"use strict";var Kar=typeof globalThis=="object"?globalThis:null;T4.exports=Kar});var F4=s((P$r,R4)=>{"use strict";var r0r=fr().isPrimitive,e0r=y(),t0r=E4(),_4=A4(),L4=S4(),P4=I4();function i0r(r){if(arguments.length){if(!r0r(r))throw new TypeError(e0r("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return t0r()}if(P4)return P4;if(_4)return _4;if(L4)return L4;throw new Error("unexpected error. Unable to resolve global object.")}R4.exports=i0r});var k4=s((R$r,B4)=>{"use strict";var n0r=F4(),M4=n0r(),a0r=M4.document&&M4.document.childNodes;B4.exports=a0r});var C4=s((F$r,j4)=>{"use strict";var s0r=Int8Array;j4.exports=s0r});var V4=s((M$r,G4)=>{"use strict";var u0r=s4(),o0r=k4(),f0r=C4();function v0r(){return typeof u0r=="function"||typeof f0r=="object"||typeof o0r=="function"}G4.exports=v0r});var zu=s((B$r,U4)=>{"use strict";function c0r(){return/^\s*function\s*([^(]*)/i}U4.exports=c0r});var W4=s((k$r,H4)=>{"use strict";var l0r=zu(),p0r=l0r();H4.exports=p0r});var Xu=s((j$r,z4)=>{"use strict";var g0r=w(),D4=zu(),m0r=W4();g0r(D4,"REGEXP",m0r);z4.exports=D4});var J4=s((C$r,X4)=>{"use strict";var d0r=Uu();function h0r(r){return d0r(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}X4.exports=h0r});var Et=s((G$r,x4)=>{"use strict";var q0r=J4();x4.exports=q0r});var Z4=s((V$r,Y4)=>{"use strict";var y0r=ir(),b0r=Xu().REGEXP,w0r=Et();function E0r(r){var e,t,i;if(t=y0r(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=b0r.exec(i.toString()),e)return e[1]}return w0r(r)?"Buffer":t}Y4.exports=E0r});var Ge=s((U$r,$4)=>{"use strict";var N0r=Z4();$4.exports=N0r});var K4=s((H$r,Q4)=>{"use strict";var A0r=Ge();function O0r(r){var e;return r===null?"null":(e=typeof r,e==="object"?A0r(r).toLowerCase():e)}Q4.exports=O0r});var e6=s((W$r,r6)=>{"use strict";var S0r=Ge();function T0r(r){return S0r(r).toLowerCase()}r6.exports=T0r});var Zn=s((D$r,t6)=>{"use strict";var I0r=V4(),_0r=K4(),L0r=e6(),P0r=I0r()?L0r:_0r;t6.exports=P0r});var Ju=s((z$r,i6)=>{"use strict";function R0r(r){return r.constructor&&r.constructor.prototype===r}i6.exports=R0r});var n6=s((X$r,F0r)=>{F0r.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var s6=s((J$r,a6)=>{"use strict";var M0r=typeof window>"u"?void 0:window;a6.exports=M0r});var v6=s((x$r,f6)=>{"use strict";var B0r=O(),k0r=Yn(),u6=Zn(),j0r=Ju(),C0r=n6(),Xt=s6(),o6;function G0r(){var r;if(u6(Xt)==="undefined")return!1;for(r in Xt)try{k0r(C0r,r)===-1&&B0r(Xt,r)&&Xt[r]!==null&&u6(Xt[r])==="object"&&j0r(Xt[r])}catch{return!0}return!1}o6=G0r();f6.exports=o6});var l6=s((Y$r,c6)=>{"use strict";var V0r=typeof window<"u";c6.exports=V0r});var m6=s((Z$r,g6)=>{"use strict";var U0r=v6(),p6=Ju(),H0r=l6();function W0r(r){if(H0r===!1&&!U0r)return p6(r);try{return p6(r)}catch{return!1}}g6.exports=W0r});var d6=s(($$r,D0r)=>{D0r.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var y6=s((Q$r,q6)=>{"use strict";var z0r=Uu(),xu=O(),X0r=Gu(),J0r=Xl(),x0r=xl(),Y0r=m6(),h6=d6();function Z0r(r){var e,t,i,n,a,u,o;if(n=[],X0r(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!xu(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!z0r(r))return n;t=J0r&&i}for(a in r)!(t&&a==="prototype")&&xu(r,a)&&n.push(String(a));if(x0r)for(e=Y0r(r),o=0;o<h6.length;o++)u=h6[o],!(e&&u==="constructor")&&xu(r,u)&&n.push(String(u));return n}q6.exports=Z0r});var w6=s((K$r,b6)=>{"use strict";var $0r=av(),Q0r=uv(),K0r=zn(),rsr=Ml(),esr=y6(),$n;Q0r?$0r()?$n=rsr:$n=K0r:$n=esr;b6.exports=$n});var Jt=s((rQr,E6)=>{"use strict";var tsr=w6();E6.exports=tsr});var A6=s((eQr,N6)=>{"use strict";var isr=Jt(),nsr=O(),asr=y();function ssr(r,e){var t,i,n;for(t=isr(r),n=0;n<t.length;n++){if(i=t[n],nsr(e,i))throw new Error(asr("unexpected error. Property already exists on destination object. Property: %s.",i));e[i]=r[i]}return e}N6.exports=ssr});var S6=s((tQr,O6)=>{"use strict";var usr=A6();O6.exports=usr});var I6=s((iQr,T6)=>{"use strict";var osr=mr();function fsr(r){return typeof r=="object"&&r!==null&&!osr(r)}T6.exports=fsr});var Qn=s((nQr,_6)=>{"use strict";var vsr=I6();_6.exports=vsr});var P6=s((aQr,L6)=>{"use strict";var csr=Zn();function lsr(r){return csr(r)==="function"}L6.exports=lsr});var L=s((sQr,R6)=>{"use strict";var psr=P6();R6.exports=psr});var M6=s((uQr,F6)=>{"use strict";var gsr=Object;F6.exports=gsr});var xt=s((oQr,B6)=>{"use strict";var msr=M6();B6.exports=msr});var j6=s((fQr,k6)=>{"use strict";var dsr=Object.getPrototypeOf;k6.exports=dsr});var G6=s((vQr,C6)=>{"use strict";function hsr(r){return r.__proto__}C6.exports=hsr});var U6=s((cQr,V6)=>{"use strict";var qsr=ir(),ysr=G6();function bsr(r){var e=ysr(r);return e||e===null?e:qsr(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}V6.exports=bsr});var W6=s((lQr,H6)=>{"use strict";var wsr=L(),Esr=j6(),Nsr=U6(),Yu;wsr(Object.getPrototypeOf)?Yu=Esr:Yu=Nsr;H6.exports=Yu});var z6=s((pQr,D6)=>{"use strict";var Asr=xt(),Osr=W6();function Ssr(r){return r==null?null:(r=Asr(r),Osr(r))}D6.exports=Ssr});var Nt=s((gQr,X6)=>{"use strict";var Tsr=z6();X6.exports=Tsr});var Y6=s((mQr,x6)=>{"use strict";var Isr=Qn(),J6=L(),_sr=Nt(),Kn=O(),Lsr=ir(),Psr=Object.prototype;function Rsr(r){var e;for(e in r)if(!Kn(r,e))return!1;return!0}function Fsr(r){var e;return Isr(r)?(e=_sr(r),e?!Kn(r,"constructor")&&Kn(e,"constructor")&&J6(e.constructor)&&Lsr(e.constructor)==="[object Function]"&&Kn(e,"isPrototypeOf")&&J6(e.isPrototypeOf)&&(e===Psr||Rsr(r)):!0):!1}x6.exports=Fsr});var I=s((dQr,Z6)=>{"use strict";var Msr=Y6();Z6.exports=Msr});var Q6=s((hQr,$6)=>{"use strict";var Bsr=Ce();function ksr(r,e,t){Bsr(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}$6.exports=ksr});var r8=s((qQr,K6)=>{"use strict";var jsr=Q6();K6.exports=jsr});var t8=s((yQr,e8)=>{"use strict";var Csr=_(),Gsr=V();function Vsr(r){return r===Csr||r===Gsr}e8.exports=Vsr});var Rr=s((bQr,i8)=>{"use strict";var Usr=t8();i8.exports=Usr});var a8=s((wQr,n8)=>{"use strict";function Hsr(r){return Math.abs(r)}n8.exports=Hsr});var J=s((EQr,s8)=>{"use strict";var Wsr=a8();s8.exports=Wsr});var o8=s((NQr,u8)=>{"use strict";var Dsr=ir(),zsr=typeof Uint32Array=="function";function Xsr(r){return zsr&&r instanceof Uint32Array||Dsr(r)==="[object Uint32Array]"}u8.exports=Xsr});var Kr=s((AQr,f8)=>{"use strict";var Jsr=o8();f8.exports=Jsr});var c8=s((OQr,v8)=>{"use strict";var xsr=typeof Uint32Array=="function"?Uint32Array:null;v8.exports=xsr});var g8=s((SQr,p8)=>{"use strict";var Ysr=Kr(),Zu=zt(),l8=c8();function Zsr(){var r,e;if(typeof l8!="function")return!1;try{e=[1,3.14,-3.14,Zu+1,Zu+2],e=new l8(e),r=Ysr(e)&&e[0]===1&&e[1]===3&&e[2]===Zu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}p8.exports=Zsr});var d8=s((TQr,m8)=>{"use strict";var $sr=g8();m8.exports=$sr});var q8=s((IQr,h8)=>{"use strict";var Qsr=typeof Uint32Array=="function"?Uint32Array:void 0;h8.exports=Qsr});var b8=s((_Qr,y8)=>{"use strict";function Ksr(){throw new Error("not implemented")}y8.exports=Ksr});var lr=s((LQr,w8)=>{"use strict";var rur=d8(),eur=q8(),tur=b8(),$u;rur()?$u=eur:$u=tur;w8.exports=$u});var N8=s((PQr,E8)=>{"use strict";var iur=ir(),nur=typeof Float64Array=="function";function aur(r){return nur&&r instanceof Float64Array||iur(r)==="[object Float64Array]"}E8.exports=aur});var O8=s((RQr,A8)=>{"use strict";var sur=N8();A8.exports=sur});var T8=s((FQr,S8)=>{"use strict";var uur=typeof Float64Array=="function"?Float64Array:null;S8.exports=uur});var L8=s((MQr,_8)=>{"use strict";var our=O8(),I8=T8();function fur(){var r,e;if(typeof I8!="function")return!1;try{e=new I8([1,3.14,-3.14,NaN]),r=our(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}_8.exports=fur});var Qu=s((BQr,P8)=>{"use strict";var vur=L8();P8.exports=vur});var F8=s((kQr,R8)=>{"use strict";var cur=typeof Float64Array=="function"?Float64Array:void 0;R8.exports=cur});var B8=s((jQr,M8)=>{"use strict";function lur(){throw new Error("not implemented")}M8.exports=lur});var dr=s((CQr,k8)=>{"use strict";var pur=Qu(),gur=F8(),mur=B8(),Ku;pur()?Ku=gur:Ku=mur;k8.exports=Ku});var C8=s((GQr,j8)=>{"use strict";var dur=ir(),hur=typeof Uint8Array=="function";function qur(r){return hur&&r instanceof Uint8Array||dur(r)==="[object Uint8Array]"}j8.exports=qur});var V8=s((VQr,G8)=>{"use strict";var yur=C8();G8.exports=yur});var H8=s((UQr,U8)=>{"use strict";var bur=255;U8.exports=bur});var D8=s((HQr,W8)=>{"use strict";var wur=typeof Uint8Array=="function"?Uint8Array:null;W8.exports=wur});var J8=s((WQr,X8)=>{"use strict";var Eur=V8(),ro=H8(),z8=D8();function Nur(){var r,e;if(typeof z8!="function")return!1;try{e=[1,3.14,-3.14,ro+1,ro+2],e=new z8(e),r=Eur(e)&&e[0]===1&&e[1]===3&&e[2]===ro-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}X8.exports=Nur});var Y8=s((DQr,x8)=>{"use strict";var Aur=J8();x8.exports=Aur});var $8=s((zQr,Z8)=>{"use strict";var Our=typeof Uint8Array=="function"?Uint8Array:void 0;Z8.exports=Our});var K8=s((XQr,Q8)=>{"use strict";function Sur(){throw new Error("not implemented")}Q8.exports=Sur});var Yt=s((JQr,r5)=>{"use strict";var Tur=Y8(),Iur=$8(),_ur=K8(),eo;Tur()?eo=Iur:eo=_ur;r5.exports=eo});var t5=s((xQr,e5)=>{"use strict";var Lur=ir(),Pur=typeof Uint16Array=="function";function Rur(r){return Pur&&r instanceof Uint16Array||Lur(r)==="[object Uint16Array]"}e5.exports=Rur});var n5=s((YQr,i5)=>{"use strict";var Fur=t5();i5.exports=Fur});var s5=s((ZQr,a5)=>{"use strict";var Mur=65535;a5.exports=Mur});var o5=s(($Qr,u5)=>{"use strict";var Bur=typeof Uint16Array=="function"?Uint16Array:null;u5.exports=Bur});var c5=s((QQr,v5)=>{"use strict";var kur=n5(),to=s5(),f5=o5();function jur(){var r,e;if(typeof f5!="function")return!1;try{e=[1,3.14,-3.14,to+1,to+2],e=new f5(e),r=kur(e)&&e[0]===1&&e[1]===3&&e[2]===to-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}v5.exports=jur});var p5=s((KQr,l5)=>{"use strict";var Cur=c5();l5.exports=Cur});var m5=s((rKr,g5)=>{"use strict";var Gur=typeof Uint16Array=="function"?Uint16Array:void 0;g5.exports=Gur});var h5=s((eKr,d5)=>{"use strict";function Vur(){throw new Error("not implemented")}d5.exports=Vur});var Zt=s((tKr,q5)=>{"use strict";var Uur=p5(),Hur=m5(),Wur=h5(),io;Uur()?io=Hur:io=Wur;q5.exports=io});var b5=s((iKr,y5)=>{"use strict";var Dur=Yt(),zur=Zt(),Xur={uint16:zur,uint8:Dur};y5.exports=Xur});var A5=s((nKr,N5)=>{"use strict";var w5=b5(),E5;function Jur(){var r,e;return r=new w5.uint16(1),r[0]=4660,e=new w5.uint8(r.buffer),e[0]===52}E5=Jur();N5.exports=E5});var At=s((aKr,O5)=>{"use strict";var xur=A5();O5.exports=xur});var T5=s((sKr,S5)=>{"use strict";var Yur=At(),no;Yur===!0?no=1:no=0;S5.exports=no});var L5=s((uKr,_5)=>{"use strict";var Zur=lr(),$ur=dr(),Qur=T5(),I5=new $ur(1),Kur=new Zur(I5.buffer);function ror(r){return I5[0]=r,Kur[Qur]}_5.exports=ror});var tr=s((oKr,P5)=>{"use strict";var eor=L5();P5.exports=eor});var F5=s((fKr,R5)=>{"use strict";var tor=At(),ao;tor===!0?ao=1:ao=0;R5.exports=ao});var B5=s((vKr,M5)=>{"use strict";var ior=lr(),nor=dr(),aor=F5(),so=new nor(1),sor=new ior(so.buffer);function uor(r,e){return so[0]=r,sor[aor]=e>>>0,so[0]}M5.exports=uor});var re=s((cKr,k5)=>{"use strict";var oor=B5();k5.exports=oor});var Jr=s((lKr,j5)=>{"use strict";var vor=1023;j5.exports=vor});var G5=s((pKr,C5)=>{"use strict";function cor(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}C5.exports=cor});var U5=s((gKr,V5)=>{"use strict";function lor(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}V5.exports=lor});var z5=s((mKr,D5)=>{"use strict";var H5=tr(),por=re(),gor=E(),mor=Jr(),dor=V(),hor=G5(),qor=U5(),ra=.6931471803691238,ea=19082149292705877e-26,yor=0x40000000000000,bor=.3333333333333333,W5=1048575,wor=2146435072,Eor=1048576,Nor=1072693248;function Aor(r){var e,t,i,n,a,u,o,v,f,c,l,p;return r===0?dor:gor(r)||r<0?NaN:(t=H5(r),a=0,t<Eor&&(a-=54,r*=yor,t=H5(r)),t>=wor?r+r:(a+=(t>>20)-mor|0,t&=W5,v=t+614244&1048576|0,r=por(r,t|v^Nor),a+=v>>20|0,o=r-1,(W5&2+t)<3?o===0?a===0?0:a*ra+a*ea:(u=o*o*(.5-bor*o),a===0?o-u:a*ra-(u-a*ea-o)):(c=o/(2+o),p=c*c,v=t-398458|0,l=p*p,f=440401-t|0,n=l*hor(l),i=p*qor(l),v|=f,u=i+n,v>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*ra-(e-(c*(e+u)+a*ea)-o)):a===0?o-c*(o-u):a*ra-(c*(o-u)-a*ea-o))))}D5.exports=Aor});var P=s((dKr,X5)=>{"use strict";var Oor=z5();X5.exports=Oor});var x5=s((hKr,J5)=>{"use strict";var Sor=Math.ceil;J5.exports=Sor});var Xi=s((qKr,Y5)=>{"use strict";var Tor=x5();Y5.exports=Tor});var $5=s((yKr,Z5)=>{"use strict";var Ior=Q(),_or=Xi();function Lor(r){return r<0?_or(r):Ior(r)}Z5.exports=Lor});var ta=s((bKr,Q5)=>{"use strict";var Por=$5();Q5.exports=Por});var rp=s((wKr,K5)=>{"use strict";function Ror(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}K5.exports=Ror});var tp=s((EKr,ep)=>{"use strict";function For(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}ep.exports=For});var np=s((NKr,ip)=>{"use strict";var Mor=rp(),Bor=tp();function kor(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*Mor(a),i+=n*n*Bor(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}ip.exports=kor});var uo=s((AKr,ap)=>{"use strict";var jor=np();ap.exports=jor});var op=s((OKr,up)=>{"use strict";var sp=-.16666666666666632,Cor=.00833333333332249,Gor=-.0001984126982985795,Vor=27557313707070068e-22,Uor=-25050760253406863e-24,Hor=158969099521155e-24;function Wor(r,e){var t,i,n,a;return a=r*r,n=a*a,t=Cor+a*(Gor+a*Vor)+a*n*(Uor+a*Hor),i=a*r,e===0?r+i*(sp+a*t):r-(a*(.5*e-i*t)-e-i*sp)}up.exports=Wor});var oo=s((SKr,fp)=>{"use strict";var Dor=op();fp.exports=Dor});var xr=s((TKr,vp)=>{"use strict";var zor=2147483647;vp.exports=zor});var Ji=s((IKr,cp)=>{"use strict";var Xor=2146435072;cp.exports=Xor});var ia=s((_Kr,lp)=>{"use strict";var Jor=1048575;lp.exports=Jor});var gp=s((LKr,pp)=>{"use strict";var xor=At(),fo;xor===!0?fo=0:fo=1;pp.exports=fo});var hp=s((PKr,dp)=>{"use strict";var Yor=lr(),Zor=dr(),$or=gp(),mp=new Zor(1),Qor=new Yor(mp.buffer);function Kor(r){return mp[0]=r,Qor[$or]}dp.exports=Kor});var yp=s((RKr,qp)=>{"use strict";var r2r=hp();qp.exports=r2r});var Ep=s((FKr,wp)=>{"use strict";var e2r=At(),bp,vo,co;e2r===!0?(vo=1,co=0):(vo=0,co=1);bp={HIGH:vo,LOW:co};wp.exports=bp});var Tp=s((MKr,Sp)=>{"use strict";var t2r=lr(),i2r=dr(),Ap=Ep(),Op=new i2r(1),Np=new t2r(Op.buffer),n2r=Ap.HIGH,a2r=Ap.LOW;function s2r(r,e){return Np[n2r]=r,Np[a2r]=e,Op[0]}Sp.exports=s2r});var $t=s((BKr,Ip)=>{"use strict";var u2r=Tp();Ip.exports=u2r});var lo=s((kKr,_p)=>{"use strict";var o2r=1023;_p.exports=o2r});var Pp=s((jKr,Lp)=>{"use strict";var f2r=-1023;Lp.exports=f2r});var po=s((CKr,Rp)=>{"use strict";var v2r=-1074;Rp.exports=v2r});var go=s((GKr,Fp)=>{"use strict";var c2r=2147483648;Fp.exports=c2r});var kp=s((VKr,Bp)=>{"use strict";var l2r=At(),Mp,mo,ho;l2r===!0?(mo=1,ho=0):(mo=0,ho=1);Mp={HIGH:mo,LOW:ho};Bp.exports=Mp});var qo=s((UKr,Vp)=>{"use strict";var p2r=lr(),g2r=dr(),Cp=kp(),Gp=new g2r(1),jp=new p2r(Gp.buffer),m2r=Cp.HIGH,d2r=Cp.LOW;function h2r(r,e,t,i){return Gp[0]=r,e[i]=jp[m2r],e[i+t]=jp[d2r],e}Vp.exports=h2r});var Hp=s((HKr,Up)=>{"use strict";var q2r=qo();function y2r(r){return q2r(r,[0>>>0,0>>>0],1,0)}Up.exports=y2r});var Qt=s((WKr,Dp)=>{"use strict";var b2r=w(),Wp=Hp(),w2r=qo();b2r(Wp,"assign",w2r);Dp.exports=Wp});var Xp=s((DKr,zp)=>{"use strict";var E2r=go(),N2r=xr(),A2r=Qt(),O2r=tr(),S2r=$t(),yo=[0,0];function T2r(r,e){var t,i;return A2r.assign(r,yo,1,0),t=yo[0],t&=N2r,i=O2r(e),i&=E2r,t|=i,S2r(t,yo[1])}zp.exports=T2r});var na=s((zKr,Jp)=>{"use strict";var I2r=Xp();Jp.exports=I2r});var bo=s((XKr,xp)=>{"use strict";var _2r=22250738585072014e-324;xp.exports=_2r});var wo=s((JKr,Yp)=>{"use strict";var L2r=bo(),P2r=Rr(),R2r=E(),F2r=J(),M2r=4503599627370496;function B2r(r,e,t,i){return R2r(r)||P2r(r)?(e[i]=r,e[i+t]=0,e):r!==0&&F2r(r)<L2r?(e[i]=r*M2r,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}Yp.exports=B2r});var $p=s((xKr,Zp)=>{"use strict";var k2r=wo();function j2r(r){return k2r(r,[0,0],1,0)}Zp.exports=j2r});var r7=s((YKr,Kp)=>{"use strict";var C2r=w(),Qp=$p(),G2r=wo();C2r(Qp,"assign",G2r);Kp.exports=Qp});var t7=s((ZKr,e7)=>{"use strict";var V2r=tr(),U2r=Ji(),H2r=Jr();function W2r(r){var e=V2r(r);return e=(e&U2r)>>>20,e-H2r|0}e7.exports=W2r});var n7=s(($Kr,i7)=>{"use strict";var D2r=t7();i7.exports=D2r});var s7=s((QKr,a7)=>{"use strict";var z2r=_(),X2r=V(),J2r=Jr(),x2r=lo(),Y2r=Pp(),Z2r=po(),$2r=E(),Q2r=Rr(),K2r=na(),r1r=r7().assign,e1r=n7(),t1r=Qt(),i1r=$t(),n1r=2220446049250313e-31,a1r=2148532223>>>0,Eo=[0,0],No=[0,0];function s1r(r,e){var t,i;return e===0||r===0||$2r(r)||Q2r(r)?r:(r1r(r,Eo,1,0),r=Eo[0],e+=Eo[1],e+=e1r(r),e<Z2r?K2r(0,r):e>x2r?r<0?X2r:z2r:(e<=Y2r?(e+=52,i=n1r):i=1,t1r.assign(r,No,1,0),t=No[0],t&=a1r,t|=e+J2r<<20,i*i1r(t,No[1])))}a7.exports=s1r});var aa=s((KKr,u7)=>{"use strict";var u1r=s7();u7.exports=u1r});var f7=s((rre,o7)=>{"use strict";function o1r(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}o7.exports=o1r});var Ao=s((ere,v7)=>{"use strict";var f1r=f7();v7.exports=f1r});var l7=s((tre,c7)=>{"use strict";var v1r=Ao();function c1r(r){return v1r(0,r)}c7.exports=c1r});var Oo=s((ire,p7)=>{"use strict";var l1r=l7();p7.exports=l1r});var q7=s((nre,h7)=>{"use strict";var p1r=Q(),sa=aa(),fa=Oo(),m7=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],g1r=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],So=16777216,To=5960464477539063e-23,ua=fa(20),g7=fa(20),oa=fa(20),vr=fa(20);function d7(r,e,t,i,n,a,u,o,v){var f,c,l,p,m,h,d,g,q;for(p=a,q=i[t],g=t,m=0;g>0;m++)c=To*q|0,vr[m]=q-So*c|0,q=i[g-1]+c,g-=1;if(q=sa(q,n),q-=8*p1r(q*.125),d=q|0,q-=d,l=0,n>0?(m=vr[t-1]>>24-n,d+=m,vr[t-1]-=m<<24-n,l=vr[t-1]>>23-n):n===0?l=vr[t-1]>>23:q>=.5&&(l=2),l>0){for(d+=1,f=0,m=0;m<t;m++)g=vr[m],f===0?g!==0&&(f=1,vr[m]=16777216-g):vr[m]=16777215-g;if(n>0)switch(n){case 1:vr[t-1]&=8388607;break;case 2:vr[t-1]&=4194303;break}l===2&&(q=1-q,f!==0&&(q-=sa(1,n)))}if(q===0){for(g=0,m=t-1;m>=a;m--)g|=vr[m];if(g===0){for(h=1;vr[a-h]===0;h++);for(m=t+1;m<=t+h;m++){for(v[o+m]=m7[u+m],c=0,g=0;g<=o;g++)c+=r[g]*v[o+(m-g)];i[m]=c}return t+=h,d7(r,e,t,i,n,a,u,o,v)}}if(q===0)for(t-=1,n-=24;vr[t]===0;)t-=1,n-=24;else q=sa(q,-n),q>=So?(c=To*q|0,vr[t]=q-So*c|0,t+=1,n+=24,vr[t]=c):vr[t]=q|0;for(c=sa(1,n),m=t;m>=0;m--)i[m]=c*vr[m],c*=To;for(m=t;m>=0;m--){for(c=0,h=0;h<=p&&h<=t-m;h++)c+=g1r[h]*i[m+h];oa[t-m]=c}for(c=0,m=t;m>=0;m--)c+=oa[m];for(l===0?e[0]=c:e[0]=-c,c=oa[0]-c,m=1;m<=t;m++)c+=oa[m];return l===0?e[1]=c:e[1]=-c,d&7}function m1r(r,e,t,i){var n,a,u,o,v,f,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),f=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?ua[c]=0:ua[c]=m7[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*ua[o+(c-l)];g7[c]=n}return v=a,d7(r,e,v,g7,f,a,u,o,ua)}h7.exports=m1r});var b7=s((are,y7)=>{"use strict";var d1r=Math.round;y7.exports=d1r});var Io=s((sre,w7)=>{"use strict";var h1r=b7();w7.exports=h1r});var O7=s((ure,A7)=>{"use strict";var q1r=Io(),E7=tr(),y1r=.6366197723675814,b1r=1.5707963267341256,w1r=6077100506506192e-26,E1r=6077100506303966e-26,N1r=20222662487959506e-37,A1r=20222662487111665e-37,O1r=84784276603689e-45,N7=2047;function S1r(r,e,t){var i,n,a,u,o,v,f;return n=q1r(r*y1r),u=r-n*b1r,o=n*w1r,f=e>>20|0,t[0]=u-o,i=E7(t[0]),v=f-(i>>20&N7),v>16&&(a=u,o=n*E1r,u=a-o,o=n*N1r-(a-u-o),t[0]=u-o,i=E7(t[0]),v=f-(i>>20&N7),v>49&&(a=u,o=n*A1r,u=a-o,o=n*O1r-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}A7.exports=S1r});var T7=s((ore,S7)=>{"use strict";var T1r=xr(),I1r=Ji(),_1r=ia(),L1r=tr(),P1r=yp(),R1r=$t(),F1r=q7(),va=O7(),M1r=0,B1r=16777216,Ve=1.5707963267341256,Ot=6077100506506192e-26,ca=2*Ot,la=3*Ot,pa=4*Ot,k1r=598523,j1r=1072243195,C1r=1073928572,G1r=1074752122,V1r=1074977148,U1r=1075183036,H1r=1075388923,W1r=1075594811,D1r=1094263291,xi=[0,0,0],Yi=[0,0];function z1r(r,e){var t,i,n,a,u,o,v,f;if(n=L1r(r),a=n&T1r|0,a<=j1r)return e[0]=r,e[1]=0,0;if(a<=G1r)return(a&_1r)===k1r?va(r,a,e):a<=C1r?r>0?(f=r-Ve,e[0]=f-Ot,e[1]=f-e[0]-Ot,1):(f=r+Ve,e[0]=f+Ot,e[1]=f-e[0]+Ot,-1):r>0?(f=r-2*Ve,e[0]=f-ca,e[1]=f-e[0]-ca,2):(f=r+2*Ve,e[0]=f+ca,e[1]=f-e[0]+ca,-2);if(a<=W1r)return a<=U1r?a===V1r?va(r,a,e):r>0?(f=r-3*Ve,e[0]=f-la,e[1]=f-e[0]-la,3):(f=r+3*Ve,e[0]=f+la,e[1]=f-e[0]+la,-3):a===H1r?va(r,a,e):r>0?(f=r-4*Ve,e[0]=f-pa,e[1]=f-e[0]-pa,4):(f=r+4*Ve,e[0]=f+pa,e[1]=f-e[0]+pa,-4);if(a<D1r)return va(r,a,e);if(a>=I1r)return e[0]=NaN,e[1]=NaN,0;for(t=P1r(r),i=(a>>20)-1046,f=R1r(a-(i<<20|0),t),o=0;o<2;o++)xi[o]=f|0,f=(f-xi[o])*B1r;for(xi[2]=f,u=3;xi[u-1]===M1r;)u-=1;return v=F1r(xi,Yi,i,u,1),r<0?(e[0]=-Yi[0],e[1]=-Yi[1],-v):(e[0]=Yi[0],e[1]=Yi[1],v)}S7.exports=z1r});var Zi=s((fre,I7)=>{"use strict";var X1r=T7();I7.exports=X1r});var P7=s((vre,L7)=>{"use strict";var J1r=tr(),_o=uo(),_7=oo(),x1r=Zi(),ee=[0,0],Y1r=2147483647,Z1r=1072243195,$1r=1044381696,Q1r=2146435072;function K1r(r){var e,t;if(e=J1r(r),e&=Y1r,e<=Z1r)return e<$1r?1:_o(r,0);if(e>=Q1r)return NaN;switch(t=x1r(r,ee),t&3){case 0:return _o(ee[0],ee[1]);case 1:return-_7(ee[0],ee[1]);case 2:return-_o(ee[0],ee[1]);default:return _7(ee[0],ee[1])}}L7.exports=K1r});var St=s((cre,R7)=>{"use strict";var r3r=P7();R7.exports=r3r});var B7=s((lre,M7)=>{"use strict";var e3r=xr(),t3r=Ji(),i3r=tr(),F7=uo(),Lo=oo(),n3r=Zi(),a3r=1072243195,s3r=1045430272,te=[0,0];function u3r(r){var e,t;if(e=i3r(r),e&=e3r,e<=a3r)return e<s3r?r:Lo(r,0);if(e>=t3r)return NaN;switch(t=n3r(r,te),t&3){case 0:return Lo(te[0],te[1]);case 1:return F7(te[0],te[1]);case 2:return-Lo(te[0],te[1]);default:return-F7(te[0],te[1])}}M7.exports=u3r});var Tt=s((pre,k7)=>{"use strict";var o3r=B7();k7.exports=o3r});var _r=s((gre,j7)=>{"use strict";var f3r=3.141592653589793;j7.exports=f3r});var V7=s((mre,G7)=>{"use strict";var v3r=E(),c3r=Rr(),C7=St(),Po=Tt(),l3r=J(),$i=na(),Qi=_r();function p3r(r){var e,t;return v3r(r)?NaN:c3r(r)?NaN:(t=r%2,e=l3r(t),e===0||e===1?$i(0,t):e<.25?Po(Qi*t):e<.75?(e=.5-e,$i(C7(Qi*e),t)):e<1.25?(t=$i(1,t)-t,Po(Qi*t)):e<1.75?(e-=1.5,-$i(C7(Qi*e),t)):(t-=$i(2,t),Po(Qi*t)))}G7.exports=p3r});var Ki=s((dre,U7)=>{"use strict";var g3r=V7();U7.exports=g3r});var W7=s((hre,H7)=>{"use strict";function m3r(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}H7.exports=m3r});var z7=s((qre,D7)=>{"use strict";function d3r(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}D7.exports=d3r});var J7=s((yre,X7)=>{"use strict";function h3r(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}X7.exports=h3r});var Y7=s((bre,x7)=>{"use strict";function q3r(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}x7.exports=q3r});var $7=s((wre,Z7)=>{"use strict";function y3r(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}Z7.exports=y3r});var K7=s((Ere,Q7)=>{"use strict";function b3r(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}Q7.exports=b3r});var e9=s((Nre,r9)=>{"use strict";function w3r(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}r9.exports=w3r});var i9=s((Are,t9)=>{"use strict";function E3r(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}t9.exports=E3r});var a9=s((Ore,n9)=>{"use strict";function N3r(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}n9.exports=N3r});var u9=s((Sre,s9)=>{"use strict";function A3r(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}s9.exports=A3r});var v9=s((Tre,f9)=>{"use strict";var O3r=E(),S3r=Rr(),T3r=J(),Kt=P(),I3r=ta(),_3r=Ki(),L3r=_r(),Ro=_(),P3r=W7(),R3r=z7(),F3r=J7(),M3r=Y7(),B3r=$7(),k3r=K7(),j3r=e9(),C3r=i9(),G3r=a9(),V3r=u9(),U3r=.07721566490153287,H3r=.3224670334241136,W3r=1,D3r=-.07721566490153287,z3r=.48383612272381005,X3r=-.1475877229945939,J3r=.06462494023913339,x3r=-.07721566490153287,Y3r=1,Z3r=.4189385332046727,ga=1.4616321449683622,$3r=4503599627370496,Q3r=0x400000000000000,K3r=8470329472543003e-37,o9=1.4616321449683622,rfr=-.12148629053584961,efr=-3638676997039505e-33;function tfr(r){var e,t,i,n,a,u,o,v,f,c,l,p,m;if(O3r(r)||S3r(r))return r;if(r===0)return Ro;if(r<0?(e=!0,r=-r):e=!1,r<K3r)return-Kt(r);if(e){if(r>=$3r||(f=_3r(r),f===0))return Ro;t=Kt(L3r/T3r(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-Kt(r),r>=ga-1+.27?(l=1-r,i=0):r>=ga-1-.27?(l=r-(o9-1),i=1):(l=r,i=2)):(m=0,r>=ga+.27?(l=2-r,i=0):r>=ga-.27?(l=r-o9,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=U3r+p*P3r(p),a=p*(H3r+p*R3r(p)),o=l*u+a,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=z3r+c*B3r(c),a=X3r+c*k3r(c),n=J3r+c*j3r(c),o=p*u-(efr-c*(a+l*n)),m+=rfr+o;break;case 2:u=l*(x3r+l*C3r(l)),a=Y3r+l*G3r(l),m+=-.5*l+u/a;break}else if(r<8)switch(i=I3r(r),l=r-i,o=l*(D3r+l*M3r(l)),v=W3r+l*F3r(l),m=.5*l+o/v,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=Kt(p)}else r<Q3r?(f=Kt(r),p=1/r,l=p*p,c=Z3r+p*V3r(l),m=(r-.5)*(f-1)+c):m=r*(Kt(r)-1);return e&&(m=t-m),m}f9.exports=tfr});var rn=s((Ire,c9)=>{"use strict";var ifr=v9();c9.exports=ifr});var p9=s((_re,l9)=>{"use strict";var nfr=V();function afr(r){return r===0&&1/r===nfr}l9.exports=afr});var Fo=s((Lre,g9)=>{"use strict";var sfr=p9();g9.exports=sfr});var Mo=s((Pre,m9)=>{"use strict";var ufr=2.5066282746310007;m9.exports=ufr});var h9=s((Rre,d9)=>{"use strict";var ofr=Ir();function ffr(r){return ofr(r/2)}d9.exports=ffr});var ma=s((Fre,q9)=>{"use strict";var vfr=h9();q9.exports=vfr});var w9=s((Mre,b9)=>{"use strict";var y9=ma();function cfr(r){return r>0?y9(r-1):y9(r+1)}b9.exports=cfr});var Bo=s((Bre,E9)=>{"use strict";var lfr=w9();E9.exports=lfr});var A9=s((kre,N9)=>{"use strict";var pfr=Math.sqrt;N9.exports=pfr});var G=s((jre,O9)=>{"use strict";var gfr=A9();O9.exports=gfr});var T9=s((Cre,S9)=>{"use strict";var mfr=At(),ko;mfr===!0?ko=0:ko=1;S9.exports=ko});var _9=s((Gre,I9)=>{"use strict";var dfr=lr(),hfr=dr(),qfr=T9(),jo=new hfr(1),yfr=new dfr(jo.buffer);function bfr(r,e){return jo[0]=r,yfr[qfr]=e>>>0,jo[0]}I9.exports=bfr});var ie=s((Vre,L9)=>{"use strict";var wfr=_9();L9.exports=wfr});var R9=s((Ure,P9)=>{"use strict";function Efr(r){return r|0}P9.exports=Efr});var Co=s((Hre,F9)=>{"use strict";var Nfr=R9();F9.exports=Nfr});var k9=s((Wre,B9)=>{"use strict";var M9=Bo(),Afr=na(),Ofr=V(),da=_();function Sfr(r,e){return e===Ofr?da:e===da?0:e>0?M9(e)?r:0:M9(e)?Afr(da,r):da}B9.exports=Sfr});var C9=s((Dre,j9)=>{"use strict";var Tfr=xr(),Ifr=tr(),_fr=1072693247,ha=1e300,qa=1e-300;function Lfr(r,e){var t,i;return i=Ifr(r),t=i&Tfr,t<=_fr?e<0?ha*ha:qa*qa:e>0?ha*ha:qa*qa}j9.exports=Lfr});var U9=s((zre,V9)=>{"use strict";var Pfr=J(),G9=_();function Rfr(r,e){return r===-1?(r-r)/(r-r):r===1?1:Pfr(r)<1==(e===G9)?0:G9}V9.exports=Rfr});var W9=s((Xre,H9)=>{"use strict";function Ffr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}H9.exports=Ffr});var J9=s((Jre,X9)=>{"use strict";var Mfr=tr(),ya=ie(),D9=re(),Bfr=Jr(),kfr=W9(),jfr=1048575,z9=1048576,Cfr=1072693248,Gfr=536870912,Vfr=524288,Ufr=20,Hfr=9007199254740992,Wfr=.9617966939259756,Dfr=.9617967009544373,zfr=-7028461650952758e-24,Xfr=[1,1.5],Jfr=[0,.5849624872207642],xfr=[0,1350039202129749e-23];function Yfr(r,e,t){var i,n,a,u,o,v,f,c,l,p,m,h,d,g,q,N,A,j,T,X,cr,$;return X=0,t<z9&&(e*=Hfr,X-=53,t=Mfr(e)),X+=(t>>Ufr)-Bfr|0,cr=t&jfr|0,t=cr|Cfr|0,cr<=235662?$=0:cr<767610?$=1:($=0,X+=1,t-=z9),e=D9(e,t),c=Xfr[$],j=e-c,T=1/(e+c),n=j*T,u=ya(n,0),i=(t>>1|Gfr)+Vfr,i+=$<<18,v=D9(0,i),f=e-(v-c),o=T*(j-u*v-u*f),a=n*n,A=a*a*kfr(a),A+=o*(u+n),a=u*u,v=3+a+A,v=ya(v,0),f=A-(v-3-a),j=u*v,T=o*v+f*n,p=j+T,p=ya(p,0),m=T-(p-j),h=Dfr*p,d=zfr*p+m*Wfr+xfr[$],l=Jfr[$],N=X,g=h+d+l+N,g=ya(g,0),q=d-(g-N-l-h),r[0]=g,r[1]=q,r}X9.exports=Yfr});var Y9=s((xre,x9)=>{"use strict";function Zfr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}x9.exports=Zfr});var $9=s((Yre,Z9)=>{"use strict";var $fr=ie(),Qfr=Y9(),Kfr=1.4426950408889634,rvr=1.4426950216293335,evr=19259629911266175e-24;function tvr(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*Qfr(n),u=rvr*n,o=n*evr-a*Kfr,i=u+o,i=$fr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}Z9.exports=tvr});var ba=s((Zre,Q9)=>{"use strict";var ivr=.6931471805599453;Q9.exports=ivr});var rg=s(($re,K9)=>{"use strict";function nvr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}K9.exports=nvr});var ug=s((Qre,sg)=>{"use strict";var avr=tr(),eg=re(),svr=ie(),uvr=Co(),ovr=aa(),fvr=ba(),tg=Jr(),ig=xr(),ng=ia(),vvr=rg(),ag=1048576,cvr=1071644672,en=20,lvr=.6931471824645996,pvr=-1904654299957768e-24;function gvr(r,e,t){var i,n,a,u,o,v,f,c,l,p,m;return p=r&ig|0,m=(p>>en)-tg|0,l=0,p>cvr&&(l=r+(ag>>m+1)>>>0,m=((l&ig)>>en)-tg|0,i=(l&~(ng>>m))>>>0,a=eg(0,i),l=(l&ng|ag)>>en-m>>>0,r<0&&(l=-l),e-=a),a=t+e,a=svr(a,0),o=a*lvr,v=(t-(a-e))*fvr+a*pvr,c=o+v,f=v-(c-o),a=c*c,n=c-a*vvr(a),u=c*n/(n-2)-(f+c*f),c=1-(u-c),r=avr(c),r=uvr(r),r+=l<<en>>>0,r>>en<=0?c=ovr(c,l):c=eg(c,r),c}sg.exports=gvr});var qg=s((Kre,hg)=>{"use strict";var og=E(),fg=Bo(),vg=Rr(),mvr=Ir(),cg=G(),dvr=J(),Go=Qt(),hvr=ie(),lg=Co(),qvr=V(),yvr=_(),Vo=xr(),bvr=k9(),wvr=C9(),Evr=U9(),Nvr=J9(),Avr=$9(),Ovr=ug(),Svr=1072693247,Tvr=1105199104,Ivr=1139802112,pg=1083179008,_vr=1072693248,Lvr=1083231232,Pvr=3230714880>>>0,gg=31,Ue=1e300,He=1e-300,Rvr=8008566259537294e-32,ne=[0,0],mg=[0,0];function dg(r,e){var t,i,n,a,u,o,v,f,c,l,p,m,h,d,g,q;if(og(r)||og(e))return NaN;if(Go.assign(e,ne,1,0),o=ne[0],v=ne[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return cg(r);if(e===-.5)return 1/cg(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(vg(e))return Evr(r,e)}if(Go.assign(r,ne,1,0),a=ne[0],u=ne[1],u===0){if(a===0)return bvr(r,e);if(r===1)return 1;if(r===-1&&fg(e))return-1;if(vg(r))return r===qvr?dg(-0,-e):e<0?0:yvr}if(r<0&&mvr(e)===!1)return(r-r)/(r-r);if(n=dvr(r),t=a&Vo|0,i=o&Vo|0,f=a>>>gg|0,c=o>>>gg|0,f&&fg(e)?f=-1:f=1,i>Tvr){if(i>Ivr)return wvr(r,e);if(t<Svr)return c===1?f*Ue*Ue:f*He*He;if(t>_vr)return c===0?f*Ue*Ue:f*He*He;h=Avr(mg,n)}else h=Nvr(mg,n,t);if(l=hvr(e,0),m=(e-l)*h[0]+e*h[1],p=l*h[0],d=m+p,Go.assign(d,ne,1,0),g=lg(ne[0]),q=lg(ne[1]),g>=pg){if((g-pg|q)!==0||m+Rvr>d-p)return f*Ue*Ue}else if((g&Vo)>=Lvr&&((g-Pvr|q)!==0||m<=d-p))return f*He*He;return d=Ovr(g,p,m),f*d}hg.exports=dg});var W=s((ree,yg)=>{"use strict";var Fvr=qg();yg.exports=Fvr});var wg=s((eee,bg)=>{"use strict";function Mvr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}bg.exports=Mvr});var Ng=s((tee,Eg)=>{"use strict";var Bvr=aa(),kvr=wg();function jvr(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*kvr(n),u=1-(e-i*a/(2-a)-r),Bvr(u,t)}Eg.exports=jvr});var _g=s((iee,Ig)=>{"use strict";var Cvr=E(),Ag=ta(),Gvr=V(),Og=_(),Vvr=Ng(),Uvr=.6931471803691238,Hvr=19082149292705877e-26,Sg=1.4426950408889634,Wvr=709.782712893384,Dvr=-745.1332191019411,Tg=1/(1<<28),zvr=-Tg;function Xvr(r){var e,t,i;return Cvr(r)||r===Og?r:r===Gvr?0:r>Wvr?Og:r<Dvr?0:r>zvr&&r<Tg?1+r:(r<0?i=Ag(Sg*r-.5):i=Ag(Sg*r+.5),e=r-i*Uvr,t=i*Hvr,Vvr(e,t,i))}Ig.exports=Xvr});var nr=s((nee,Lg)=>{"use strict";var Jvr=_g();Lg.exports=Jvr});var Rg=s((aee,Pg)=>{"use strict";function xvr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}Pg.exports=xvr});var Bg=s((see,Mg)=>{"use strict";var Yvr=Mo(),Fg=W(),Zvr=nr(),$vr=Rg(),Qvr=143.01608;function Kvr(r){var e,t,i;return e=1/r,e=1+e*$vr(e),t=Zvr(r),r>Qvr?(i=Fg(r,.5*r-.25),t=i*(i/t)):t=Fg(r,r-.5)/t,Yvr*t*e}Mg.exports=Kvr});var jg=s((uee,kg)=>{"use strict";var rcr=.5772156649015329;kg.exports=rcr});var Gg=s((oee,Cg)=>{"use strict";var ecr=jg();function tcr(r,e){return e/((1+ecr*r)*r)}Cg.exports=tcr});var Ug=s((fee,Vg)=>{"use strict";function icr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}Vg.exports=icr});var Yg=s((vee,xg)=>{"use strict";var ncr=E(),acr=Ir(),scr=Fo(),Hg=J(),ucr=Q(),ocr=Tt(),Wg=_(),Dg=V(),zg=_r(),Xg=Bg(),Jg=Gg(),fcr=Ug();function vcr(r){var e,t,i,n;if(acr(r)&&r<0||r===Dg||ncr(r))return NaN;if(r===0)return scr(r)?Dg:Wg;if(r>171.61447887182297)return Wg;if(r<-170.5674972726612)return 0;if(t=Hg(r),t>33)return r>=0?Xg(r):(i=ucr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*ocr(zg*n),e*zg/(Hg(n)*Xg(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return Jg(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return Jg(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*fcr(r))}xg.exports=vcr});var ri=s((cee,Zg)=>{"use strict";var ccr=Yg();Zg.exports=ccr});var Uo=s((lee,$g)=>{"use strict";var lcr=14901161193847656e-24;$g.exports=lcr});var Kg=s((pee,Qg)=>{"use strict";var pcr=17976931348623157e292;Qg.exports=pcr});var wa=s((gee,rm)=>{"use strict";var gcr=709.782712893384;rm.exports=gcr});var tm=s((mee,em)=>{"use strict";var mcr=nr();function dcr(r,e){var t,i,n,a;if(n=mcr(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}em.exports=dcr});var nm=s((dee,im)=>{"use strict";function hcr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}im.exports=hcr});var sm=s((hee,am)=>{"use strict";function qcr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}am.exports=qcr});var om=s((qee,um)=>{"use strict";function ycr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}um.exports=ycr});var vm=s((yee,fm)=>{"use strict";function bcr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}fm.exports=bcr});var lm=s((bee,cm)=>{"use strict";function wcr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}cm.exports=wcr});var gm=s((wee,pm)=>{"use strict";function Ecr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}pm.exports=Ecr});var dm=s((Eee,mm)=>{"use strict";function Ncr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}mm.exports=Ncr});var qm=s((Nee,hm)=>{"use strict";function Acr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}hm.exports=Acr});var Em=s((Aee,wm)=>{"use strict";var Ocr=E(),ym=nr(),Scr=ie(),Tcr=_(),Icr=V(),_cr=nm(),Lcr=sm(),Pcr=om(),Rcr=vm(),Fcr=lm(),Mcr=gm(),Bcr=dm(),kcr=qm(),Ea=1e-300,jcr=13877787807814457e-33,bm=.8450629115104675,Ccr=.12837916709551256,Gcr=1,Vcr=-.0023621185607526594,Ucr=1,Hcr=-.009864944034847148,Wcr=1,Dcr=-.0098649429247001,zcr=1;function Xcr(r){var e,t,i,n,a,u,o,v;if(Ocr(r))return NaN;if(r===Tcr)return 0;if(r===Icr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<jcr?1-r:(i=r*r,n=Ccr+i*_cr(i),a=Gcr+i*Lcr(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=Vcr+a*Pcr(a),v=Ucr+a*Rcr(a),e?1+bm+o/v:1-bm-o/v;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=Hcr+a*Fcr(a),a=Wcr+a*Mcr(a);else{if(r<-6)return 2-Ea;n=Dcr+a*Bcr(a),a=zcr+a*kcr(a)}return i=Scr(t,0),n=ym(-(i*i)-.5625)*ym((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-Ea:Ea*Ea}wm.exports=Xcr});var It=s((Oee,Nm)=>{"use strict";var Jcr=Em();Nm.exports=Jcr});var Sm=s((See,Om)=>{"use strict";var xcr=It(),Am=G(),Ycr=nr(),Zcr=_r();function $cr(r,e){var t,i,n,a,u;if(a=xcr(Am(e)),a!==0&&r>1){for(i=Ycr(-e)/Am(Zcr*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}Om.exports=$cr});var Ho=s((Tee,Tm)=>{"use strict";var Qcr=-708.3964185322641;Tm.exports=Qcr});var Pm=s((Iee,Lm)=>{"use strict";var ei=nr(),Na=W(),Kcr=P(),Im=wa(),_m=Ho();function rlr(r,e){var t,i;return i=r*Kcr(e),e>=1?i<Im&&-e>_m?t=Na(e,r)*ei(-e):r>=1?t=Na(e/ei(e/r),r):t=ei(i-e):i>_m?t=Na(e,r)*ei(-e):e/r<Im?t=Na(e/ei(e/r),r):t=ei(i-e),t}Lm.exports=rlr});var Wo=s((_ee,Rm)=>{"use strict";function elr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Rm.exports=elr});var Mm=s((Lee,Fm)=>{"use strict";var tlr=Function;Fm.exports=tlr});var km=s((Pee,Bm)=>{"use strict";var ilr=Mm();Bm.exports=ilr});var Cm=s((Ree,jm)=>{"use strict";var nlr=km(),alr=Wo();function slr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new nlr(e)();function a(u){return alr(r,u)}}jm.exports=slr});var Um=s((Fee,Vm)=>{"use strict";var ulr=w(),Gm=Wo(),olr=Cm();ulr(Gm,"factory",olr);Vm.exports=Gm});var _t=s((Mee,Hm)=>{"use strict";var flr=2220446049250313e-31;Hm.exports=flr});var Dm=s((Bee,Wm)=>{"use strict";var vlr=eval;Wm.exports=vlr});var Xm=s((kee,zm)=>{"use strict";var clr=Dm();function llr(){var r;try{clr('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}zm.exports=llr});var Do=s((jee,Jm)=>{"use strict";var plr=Xm();Jm.exports=plr});var Ym=s((Cee,xm)=>{"use strict";var Aa=J(),glr=_t(),mlr=1e6;function dlr(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||glr,a=o.maxTerms||mlr,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,Aa(i*u)>=Aa(n)||--a===0)break}else do n=r(),u+=n;while(Aa(i*u)<Aa(n)&&--a);return u}xm.exports=dlr});var Qm=s((Gee,$m)=>{"use strict";var Zm=J(),hlr=_t(),qlr=1e6;function ylr(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||hlr,n=u.maxTerms||qlr,a=u.initialValue||0;do i=r(),a+=i;while(Zm(t*a)<Zm(i)&&--n);return a}$m.exports=ylr});var Oa=s((Vee,Km)=>{"use strict";var blr=Do(),wlr=Ym(),Elr=Qm(),zo;blr()?zo=wlr:zo=Elr;Km.exports=zo});var ed=s((Uee,rd)=>{"use strict";function Nlr(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}rd.exports=Nlr});var id=s((Hee,td)=>{"use strict";var Alr=J(),Olr=P(),Slr=_t(),Tlr=Oa(),Ilr=ed();function _lr(r){var e,t;return r<=-1?NaN:(t=Alr(r),t>.95?Olr(1+r)-r:t<Slr?-r*r/2:(e={initialValue:-r},Tlr(Ilr(r),e)))}td.exports=_lr});var ad=s((Wee,nd)=>{"use strict";var Llr=id();nd.exports=Llr});var We=s((Dee,sd)=>{"use strict";var Plr=6.283185307179586;sd.exports=Plr});var od=s((zee,ud)=>{"use strict";function Rlr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}ud.exports=Rlr});var vd=s((Xee,fd)=>{"use strict";function Flr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}fd.exports=Flr});var ld=s((Jee,cd)=>{"use strict";function Mlr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}cd.exports=Mlr});var gd=s((xee,pd)=>{"use strict";function Blr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}pd.exports=Blr});var dd=s((Yee,md)=>{"use strict";function klr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}md.exports=klr});var qd=s((Zee,hd)=>{"use strict";function jlr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}hd.exports=jlr});var bd=s(($ee,yd)=>{"use strict";function Clr(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}yd.exports=Clr});var Ed=s((Qee,wd)=>{"use strict";function Glr(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}wd.exports=Glr});var Ad=s((Kee,Nd)=>{"use strict";function Vlr(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Nd.exports=Vlr});var Sd=s((rte,Od)=>{"use strict";var Ulr=Um(),Hlr=ad(),Wlr=It(),Xo=G(),Dlr=nr(),zlr=We(),Xlr=od(),Jlr=vd(),xlr=ld(),Ylr=gd(),Zlr=dd(),$lr=qd(),Qlr=bd(),Klr=Ed(),r4r=Ad(),Vr=[0,0,0,0,0,0,0,0,0,0];function e4r(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-Hlr(i),a=r*n,u=Xo(2*n),e<r&&(u=-u),Vr[0]=Xlr(u),Vr[1]=Jlr(u),Vr[2]=xlr(u),Vr[3]=Ylr(u),Vr[4]=Zlr(u),Vr[5]=$lr(u),Vr[6]=Qlr(u),Vr[7]=Klr(u),Vr[8]=r4r(u),Vr[9]=-.0005967612901927463,t=Ulr(Vr,1/r),t*=Dlr(-a)/Xo(zlr*r),e<r&&(t=-t),t+=Wlr(Xo(a))/2,t}Od.exports=e4r});var Id=s((ete,Td)=>{"use strict";function t4r(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}Td.exports=t4r});var Ld=s((tte,_d)=>{"use strict";var i4r=Oa(),n4r=Id();function a4r(r,e,t){var i,n;return t=t||0,n=n4r(r,e),i=i4r(n,{initialValue:t}),i}_d.exports=a4r});var Rd=s((ite,Pd)=>{"use strict";function s4r(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}Pd.exports=s4r});var Md=s((nte,Fd)=>{"use strict";var u4r=Rd();Fd.exports=u4r});var kd=s((ate,Bd)=>{"use strict";var o4r=Md();Bd.exports=o4r});var Cd=s((ste,jd)=>{"use strict";function f4r(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}jd.exports=f4r});var Wd=s((ute,Hd)=>{"use strict";var v4r=E(),Gd=tr(),Vd=re(),c4r=_(),l4r=V(),Ud=Jr(),p4r=Cd(),Jo=.6931471803691238,xo=19082149292705877e-26,g4r=.41421356237309503,m4r=-.2928932188134525,d4r=1862645149230957e-24,h4r=5551115123125783e-32,q4r=9007199254740992,y4r=.6666666666666666;function b4r(r){var e,t,i,n,a,u,o,v,f,c;if(r<-1||v4r(r))return NaN;if(r===-1)return l4r;if(r===c4r||r===0)return r;if(r<0?i=-r:i=r,c=1,i<g4r){if(i<d4r)return i<h4r?r:r-r*r*.5;r>m4r&&(c=0,n=r,t=1)}return c!==0&&(i<q4r?(f=1+r,t=Gd(f),c=(t>>20)-Ud,c>0?a=1-(f-r):a=r-(f-1),a/=f):(f=r,t=Gd(f),c=(t>>20)-Ud,a=0),t&=1048575,t<434334?f=Vd(f,t|1072693248):(c+=1,f=Vd(f,t|1071644672),t=1048576-t>>2),n=f-1),e=.5*n*n,t===0?n===0?(a+=c*xo,c*Jo+a):(v=e*(1-y4r*n),c*Jo-(v-(c*xo+a)-n)):(u=n/(2+n),o=u*u,v=o*p4r(o),c===0?n-(e-u*(e+v)):c*Jo-(e-(u*(e+v)+(c*xo+a))-n))}Hd.exports=b4r});var De=s((ote,Dd)=>{"use strict";var w4r=Wd();Dd.exports=w4r});var Xd=s((fte,zd)=>{"use strict";var E4r=_();function N4r(r){return r===0&&1/r===E4r}zd.exports=N4r});var ze=s((vte,Jd)=>{"use strict";var A4r=Xd();Jd.exports=A4r});var Zd=s((cte,Yd)=>{"use strict";var O4r=ze(),xd=E(),Yo=_();function S4r(r,e){return xd(r)||xd(e)?NaN:r===Yo||e===Yo?Yo:r===e&&r===0?O4r(r)?r:e:r>e?r:e}Yd.exports=S4r});var Zo=s((lte,$d)=>{"use strict";var T4r=Zd();$d.exports=T4r});var rh=s((pte,Kd)=>{"use strict";var I4r=Fo(),Qd=E(),$o=V();function _4r(r,e){return Qd(r)||Qd(e)?NaN:r===$o||e===$o?$o:r===e&&r===0?I4r(r)?r:e:r<e?r:e}Kd.exports=_4r});var th=s((gte,eh)=>{"use strict";var L4r=rh();eh.exports=L4r});var nh=s((mte,ih)=>{"use strict";var P4r=10.900511;ih.exports=P4r});var Qo=s((dte,ah)=>{"use strict";var R4r=2.718281828459045;ah.exports=R4r});var oh=s((hte,uh)=>{"use strict";var F4r=kd(),M4r=rn(),B4r=ri(),k4r=De(),j4r=G(),C4r=J(),Xe=nr(),tn=W(),Ko=Zo(),r2=th(),sh=P(),Sa=wa(),nn=Ho(),e2=nh(),G4r=Qo();function V4r(r,e){var t,i,n,a,u,o,v;return n=r+e2-.5,v=(e-r-e2+.5)/n,r<1?e<=nn?Xe(r*sh(e)-e-M4r(r)):tn(e,r)*Xe(-e)/B4r(r):(C4r(v*v*r)<=100&&r>150?(t=r*(k4r(v)-v)+e*(.5-e2)/n,t=Xe(t)):(a=r*sh(e/n),u=r-e,r2(a,u)<=nn||Ko(a,u)>=Sa?(i=u/r,r2(a,u)/2>nn&&Ko(a,u)/2<Sa?(o=tn(e/n,r/2)*Xe(u/2),t=o*o):r2(a,u)/4>nn&&Ko(a,u)/4<Sa&&e>r?(o=tn(e/n,r/4)*Xe(u/4),t=o*o,t*=t):i>nn&&i<Sa?t=tn(e*Xe(i)/n,r):t=Xe(a+u)):t=tn(e/n,r)*Xe(u)),t*=j4r(n/G4r)/F4r(r),t)}uh.exports=V4r});var vh=s((qte,fh)=>{"use strict";var U4r=.34657359027997264;fh.exports=U4r});var lh=s((yte,ch)=>{"use strict";function H4r(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}ch.exports=H4r});var qh=s((bte,hh)=>{"use strict";var W4r=E(),ph=tr(),t2=re(),D4r=$t(),gh=_(),z4r=V(),mh=Jr(),X4r=vh(),J4r=lh(),x4r=709.782712893384,i2=.6931471803691238,n2=19082149292705877e-26,dh=1.4426950408889634,Y4r=38.816242111356935,Z4r=1.0397207708399179;function $4r(r){var e,t,i,n,a,u,o,v,f,c,l,p,m;if(r===gh||W4r(r))return r;if(r===z4r)return-1;if(r===0)return r;if(r<0?(i=!0,v=-r):(i=!1,v=r),v>=Y4r){if(i)return-1;if(v>=x4r)return gh}if(u=ph(v)|0,v>X4r)v<Z4r?i?(n=r+i2,a=-n2,m=-1):(n=r-i2,a=n2,m=1):(i?m=dh*r-.5:m=dh*r+.5,m|=0,l=m,n=r-l*i2,a=l*n2),r=n-a,c=n-r-a;else{if(u<1016070144)return r;m=0}return e=.5*r,f=r*e,o=1+f*J4r(f),l=3-o*e,p=f*((o-l)/(6-r*l)),m===0?r-(r*p-f):(t=D4r(mh+m<<20,0),p=r*(p-c)-c,p-=f,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(v=1-(p-r),m===1024?(n=ph(v)+(m<<20)|0,v=t2(v,n)):v*=t,v-1):(l=1,m<20?(n=1072693248-(2097152>>m)|0,l=t2(l,n),v=l-(p-r)):(n=mh-m<<20|0,l=t2(l,n),v=r-(p+l),v+=1),v*=t,v))}hh.exports=$4r});var a2=s((wte,yh)=>{"use strict";var Q4r=qh();yh.exports=Q4r});var Nh=s((Ete,Eh)=>{"use strict";var bh=E(),wh=J(),K4r=a2(),r6r=P(),e6r=W(),t6r=ta();function i6r(r,e){var t;if(bh(r)||bh(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((wh(e*(r-1))<.5||wh(e)<.2)&&(t=r6r(r)*e,t<.5))return K4r(t)}else if(t6r(e)!==e)return NaN;return e6r(r,e)-1}Eh.exports=i6r});var Oh=s((Nte,Ah)=>{"use strict";var n6r=Nh();Ah.exports=n6r});var Th=s((Ate,Sh)=>{"use strict";function a6r(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}Sh.exports=a6r});var _h=s((Ote,Ih)=>{"use strict";function s6r(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}Ih.exports=s6r});var Ph=s((Ste,Lh)=>{"use strict";function u6r(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}Lh.exports=u6r});var Fh=s((Tte,Rh)=>{"use strict";var s2=P(),o6r=_t(),f6r=Th(),v6r=_h(),c6r=Ph(),l6r=.15896368026733398,p6r=.5281534194946289,g6r=.45201730728149414;function m6r(r,e,t){var i,n,a,u;if(r<o6r)return-s2(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=s2(r);while(r>=3);t=r-2}return a=t*(r+1),u=f6r(t),n+=a*l6r+a*u,n}return r<1&&(n+=-s2(r),t=e,e=r,r+=1),r<=1.5?(a=v6r(e),i=e*t,n+=i*p6r+i*a,n):(a=t*e,u=c6r(-t),n+=a*g6r+a*u,n)}Rh.exports=m6r});var Ch=s((Ite,jh)=>{"use strict";var Mh=ri(),Bh=a2(),d6r=De(),h6r=E(),kh=Fh();function q6r(r){return h6r(r)?NaN:r<0?r<-.5?Mh(1+r)-1:Bh(-d6r(r)+kh(r+2,r+1,r)):r<2?Bh(kh(r+1,r,r-1)):Mh(1+r)-1}jh.exports=q6r});var Vh=s((_te,Gh)=>{"use strict";var y6r=Ch();Gh.exports=y6r});var Hh=s((Lte,Uh)=>{"use strict";function b6r(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}Uh.exports=b6r});var Dh=s((Pte,Wh)=>{"use strict";var w6r=Oh(),E6r=Oa(),N6r=Vh(),A6r=Hh();function O6r(r,e,t){var i,n,a,u,o;return n=N6r(r),a=(n+1)/r,u=w6r(e,r),n-=u,n/=r,o=A6r(r,e),u+=1,i=t?a:0,n=-u*E6r(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}Wh.exports=O6r});var u2=s((Rte,zh)=>{"use strict";var S6r=11754943508222875e-54;zh.exports=S6r});var Jh=s((Fte,Xh)=>{"use strict";var Ta=J(),Yr=u2(),T6r=_t(),I6r=1e6;function _6r(r,e,t){var i,n,a,u,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),u=f[1],a=f[0],u===0&&(u=Yr),o=u,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=Yr),o=f[1]+f[0]/o,o===0&&(o=Yr),v=1/v,n=o*v,u*=n);while(Ta(n-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=Yr),o=f[1]+f[0]/o,o===0&&(o=Yr),v=1/v,n=o*v,u*=n);while(f&&Ta(n-1)>e&&--t);return a/u}function L6r(r,e,t){var i,n,a,u,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),a=v[1],a===0&&(a=Yr),u=a,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=Yr),u=v[1]+v[0]/u,u===0&&(u=Yr),o=1/o,n=u*o,a*=n);while(v&&Ta(n-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=Yr),u=v[1]+v[0]/u,u===0&&(u=Yr),o=1/o,n=u*o,a*=n);while(v&&Ta(n-1)>e&&--t);return a}function P6r(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||I6r,n=i.tolerance||T6r,i.keep?L6r(r,n,t):_6r(r,n,t)}Xh.exports=P6r});var Zh=s((Mte,Yh)=>{"use strict";var xh=J(),R6r=_t(),ti=u2(),F6r=1e6;function M6r(r,e,t){var i,n,a,u,o,v;v=r(),o=v[1],n=v[0],o===0&&(o=ti),a=o,u=0;do v=r(),v&&(u=v[1]+v[0]*u,u===0&&(u=ti),a=v[1]+v[0]/a,a===0&&(a=ti),u=1/u,i=a*u,o*=i);while(v&&xh(i-1)>e&&--t);return n/o}function B6r(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=ti),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=ti),n=o[1]+o[0]/n,n===0&&(n=ti),a=1/a,i=n*a,u*=i);while(o&&xh(i-1)>e&&--t);return u}function k6r(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||R6r,t=i.maxIter||F6r,i.keep?B6r(r,n,t):M6r(r,n,t)}Yh.exports=k6r});var Qh=s((Bte,$h)=>{"use strict";var j6r=Do(),C6r=Jh(),G6r=Zh(),o2;j6r()?o2=C6r:o2=G6r;$h.exports=o2});var rq=s((kte,Kh)=>{"use strict";function V6r(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}Kh.exports=V6r});var tq=s((jte,eq)=>{"use strict";var U6r=Qh(),H6r=rq();function W6r(r,e){var t=H6r(r,e);return 1/(e-r+1+U6r(t))}eq.exports=W6r});var lq=s((Cte,cq)=>{"use strict";var D6r=rn(),z6r=Q(),an=ri(),iq=J(),X6r=nr(),nq=W(),Ur=P(),J6r=Uo(),aq=Kg(),x6r=Mo(),sq=wa(),Y6r=_(),Z6r=tm(),$6r=Sm(),uq=Pm(),Q6r=Sd(),f2=Ld(),oq=oh(),K6r=Dh(),fq=tq(),r8r=170;function vq(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h,d,g,q,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=r8r&&!a)return l&&e*4<r?(p=e*Ur(r)-r,p+=Ur(fq(e,r))):!l&&e>4*r?(p=e*Ur(r)-r,o=0,p+=Ur(f2(e,r,o)/e)):(p=vq(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Ur(p)-e+(e-.5)*Ur(e),p+=Ur(x6r)):(p=e*Ur(r)-r,o=0,p+=Ur(f2(e,r,o)/e)):p=Ur(p)+D6r(e)),p>sq?Y6r:X6r(p);switch(c=e<30&&e<=r+1&&r<sq,c?(q=z6r(e),m=q===e,v=m?!1:iq(q-e)===.5):m=v=!1,m&&r>.6?(l=!l,u=0):v&&r>.2?(l=!l,u=1):r<J6r&&e>1?u=6:r<.5?-.4/Ur(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(f=!1,a&&e>20&&(h=iq((r-e)/e),e>200?20/e>h*h&&(f=!0):h<.4&&(f=!0)),f?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=Z6r(e,r),a===!1&&(p*=an(e));break;case 1:p=$6r(e,r),a===!1&&(p*=an(e));break;case 2:p=a?oq(e,r):uq(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:an(e),a||p>=1||aq*p>o?(o/=p,a||e<1||aq/e>o?(o*=-e,n=!0):o=0):o=0)),p*=f2(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,g=K6r(e,r,l),p=g[0],N=g[1],l=!1,a&&(p/=N);break;case 4:p=a?oq(e,r):uq(e,r),p!==0&&(p*=fq(e,r));break;case 5:p=Q6r(e,r),r>=e&&(l=!l);break;case 6:p=a?nq(r,e)/an(e+1):nq(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:an(e),p=d-p),p}cq.exports=vq});var v2=s((Gte,pq)=>{"use strict";var e8r=lq();pq.exports=e8r});var mq=s((Vte,gq)=>{"use strict";var t8r=v2(),c2=E(),i8r=_();function n8r(r,e,t){return c2(r)||c2(e)||c2(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===i8r?1:t8r(r*t,e)}gq.exports=n8r});var hq=s((Ute,dq)=>{"use strict";function a8r(r){return e;function e(){return r}}dq.exports=a8r});var S=s((Hte,qq)=>{"use strict";var s8r=hq();qq.exports=s8r});var wq=s((Wte,bq)=>{"use strict";var yq=E();function u8r(r,e){return yq(r)||yq(e)?NaN:r<e?0:1}bq.exports=u8r});var Aq=s((Dte,Nq)=>{"use strict";var o8r=S(),Eq=E();function f8r(r){if(Eq(r))return o8r(NaN);return e;function e(t){return Eq(t)?NaN:t<r?0:1}}Nq.exports=f8r});var Ia=s((zte,Sq)=>{"use strict";var v8r=w(),Oq=wq(),c8r=Aq();v8r(Oq,"factory",c8r);Sq.exports=Oq});var _q=s((Xte,Iq)=>{"use strict";var l8r=S(),p8r=Ia().factory,g8r=v2(),Tq=E(),m8r=_();function d8r(r,e){if(Tq(r)||Tq(e)||r<0||e<=0)return l8r(NaN);if(r===0)return p8r(0);return t;function t(i){return i<=0?0:i===m8r?1:g8r(i*e,r)}}Iq.exports=d8r});var l2=s((Jte,Pq)=>{"use strict";var h8r=w(),Lq=mq(),q8r=_q();h8r(Lq,"factory",q8r);Pq.exports=Lq});var Fq=s((xte,Rq)=>{"use strict";var y8r=l2();function b8r(r,e){return y8r(r,e/2,.5)}Rq.exports=b8r});var Bq=s((Yte,Mq)=>{"use strict";var w8r=l2().factory;function E8r(r){return w8r(r/2,.5)}Mq.exports=E8r});var Cq=s((Zte,jq)=>{"use strict";var N8r=w(),kq=Fq(),A8r=Bq();N8r(kq,"factory",A8r);jq.exports=kq});var Hq=s(($te,Uq)=>{"use strict";var O8r=I(),S8r=O(),T8r=Yn(),Gq=y(),Vq=["values","indices","*"];function I8r(r,e){return O8r(e)?S8r(e,"returns")&&(r.returns=e.returns,T8r(Vq,r.returns)===-1)?new TypeError(Gq('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Vq.join('", "'),r.returns)):null:new TypeError(Gq("invalid argument. Options argument must be an object. Value: `%s`.",e))}Uq.exports=I8r});var Dq=s((Qte,Wq)=>{"use strict";var _8r=O();function L8r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),_8r(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}Wq.exports=L8r});var Xq=s((Kte,zq)=>{"use strict";var P8r=O();function R8r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),P8r(t,n)?t[n].push(a):t[n]=[a];return t}zq.exports=R8r});var xq=s((rie,Jq)=>{"use strict";var F8r=O();function M8r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),F8r(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}Jq.exports=M8r});var Qq=s((eie,$q)=>{"use strict";var Yq=Gr(),Zq=y(),B8r=Hq(),k8r=Dq(),j8r=Xq(),C8r=xq();function G8r(r,e,t){var i,n,a;if(!Yq(r))throw new TypeError(Zq("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=B8r(i,e),n)throw n;a=t}if(!Yq(a))throw new TypeError(Zq("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?k8r(r,a):i.returns==="indices"?j8r(r,a):C8r(r,a)}$q.exports=G8r});var ry=s((tie,Kq)=>{"use strict";var V8r=Qq();Kq.exports=V8r});var ty=s((iie,ey)=>{"use strict";function U8r(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}ey.exports=U8r});var ay=s((nie,ny)=>{"use strict";var H8r=mr(),W8r=k().isPrimitive,D8r=I(),z8r=sr(),iy=O(),p2=y();function X8r(r,e){return D8r(e)?iy(e,"alpha")&&(r.alpha=e.alpha,!W8r(r.alpha)||z8r(r.alpha))?new TypeError(p2("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):iy(e,"groups")&&(r.groups=e.groups,!H8r(r.groups))?new TypeError(p2("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(p2("invalid argument. Options argument must be an object. Value: `%s`.",e))}ny.exports=X8r});var g2=s((aie,sy)=>{"use strict";var J8r=Cr().isPrimitive;function x8r(r){return J8r(r)&&r>0}sy.exports=x8r});var m2=s((sie,uy)=>{"use strict";var Y8r=Cr().isObject;function Z8r(r){return Y8r(r)&&r.valueOf()>0}uy.exports=Z8r});var fy=s((uie,oy)=>{"use strict";var $8r=g2(),Q8r=m2();function K8r(r){return $8r(r)||Q8r(r)}oy.exports=K8r});var ae=s((oie,cy)=>{"use strict";var vy=w(),d2=fy(),r5r=g2(),e5r=m2();vy(d2,"isPrimitive",r5r);vy(d2,"isObject",e5r);cy.exports=d2});var sn=s((fie,ly)=>{"use strict";var t5r=9007199254740991;ly.exports=t5r});var h2=s((vie,py)=>{"use strict";var i5r=308;py.exports=i5r});var my=s((cie,gy)=>{"use strict";var n5r=-308;gy.exports=n5r});var q2=s((lie,dy)=>{"use strict";var a5r=-324;dy.exports=a5r});var Ny=s((pie,Ey)=>{"use strict";var hy=E(),_a=Rr(),qy=W(),s5r=J(),yy=Io(),u5r=sn(),by=h2(),o5r=my(),f5r=q2(),v5r=u5r+1,wy=1e308;function c5r(r,e){var t,i;return hy(r)||hy(e)||_a(e)?NaN:_a(r)||r===0||e<f5r||s5r(r)>v5r&&e<=0?r:e>by?0*r:e<o5r?(t=qy(10,-(e+by)),i=r*wy*t,_a(i)?r:yy(i)/wy/t):(t=qy(10,-e),i=r*t,_a(i)?r:yy(i)/t)}Ey.exports=c5r});var Oy=s((gie,Ay)=>{"use strict";var l5r=Ny();Ay.exports=l5r});var Iy=s((mie,Ty)=>{"use strict";var p5r=ae(),g5r=I(),m5r=fr().isPrimitive,Sy=O(),y2=y(),b2=Oy();function d5r(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!g5r(r))throw new TypeError(y2("invalid argument. First argument must be an object. Value: `%s`.",r));if(Sy(r,"digits")){if(!p5r(r.digits))throw new TypeError(y2("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(Sy(r,"decision")){if(!m5r(r.decision))throw new TypeError(y2("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+b2(this.pValue,-t)+`
`,i+="    statistic: "+b2(this.statistic,-t)+`
`,i+="    df: "+b2(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}Ty.exports=d5r});var Py=s((die,Ly)=>{"use strict";var h5r=Gr(),q5r=I(),Lt=r8(),y5r=Jt(),La=y(),b5r=Cq(),w5r=ry(),_y=P(),E5r=ty(),N5r=ay(),A5r=Iy();function O5r(){var r,e,t,i,n,a,u,o,v,f,c,l,p,m,h,d,g,q,N,A;if(v=[],e=arguments.length,f={},q5r(arguments[e-1])&&(r=arguments[e-1],e-=1,m=N5r(f,r),m))throw m;if(f.groups){if(n=w5r(arguments[0],f.groups),i=y5r(n),e=i.length,e<2)throw new Error(La("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(A=0;A<e;A++)v.push(n[i[A]])}else for(A=0;A<e;A++)v.push(arguments[A]);for(u=0,t=0,o=0,h=0,q=new Array(e),N=q.slice(),A=0;A<e;A++){if(p=v[A],!h5r(p))throw new TypeError(La("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(La("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));q[A]=p.length-1,u+=q[A],t+=1/q[A],N[A]=E5r(p),o+=q[A]*N[A],h+=q[A]*_y(N[A])}if(o/=u,f.alpha===void 0?a=.05:a=f.alpha,a<0||a>1)throw new RangeError(La("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*_y(o)-h,l/=1+(t-1/u)/(3*(e-1)),g=e-1,c=1-b5r(l,g),d={},Lt(d,"rejected",c<=a),Lt(d,"alpha",a),Lt(d,"pValue",c),Lt(d,"statistic",l),Lt(d,"df",g),Lt(d,"method","Bartlett's test of equal variances"),Lt(d,"print",A5r),d}Ly.exports=O5r});var Fy=s((hie,Ry)=>{"use strict";var S5r=Py();Ry.exports=S5r});var By=s((qie,My)=>{"use strict";function T5r(r){var e,t,i,n,a,u,o,v,f,c,l;if(v=r.length,t=[],v===0)return t;if(n=r[0],f=n.length,v===1){for(c=0;c<f;c++)t.push(n[c]);return t}for(e=[f],c=1;c<v;c++)e.push(r[c].length),e[c]>f&&(f=e[c]);for(c=0;c<f;c++)t.push(0);for(c=f-1;c>=0;){for(a=e[0]-f+c,a>=0?i=n[a]:i=1,l=1;l<v;l++){if(u=e[l]-f+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}My.exports=T5r});var jy=s((yie,ky)=>{"use strict";var I5r=By();ky.exports=I5r});var Gy=s((bie,Cy)=>{"use strict";var w2=E(),_5r=ze();function L5r(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,f=1,w2(a)===!1)for(f;f<r;f++){if(u+=t,v=e[u],w2(v)){a=v;break}(v>a||v===a&&_5r(v))&&(a=v),i[o]=a,o+=n}if(w2(a))for(f;f<r;f++)i[o]=a,o+=n;return i}Cy.exports=L5r});var Uy=s((wie,Vy)=>{"use strict";var E2=E(),P5r=ze();function R5r(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return n;if(v=i,f=u,o=e[v],n[f]=o,f+=a,l=1,E2(o)===!1)for(l;l<r;l++){if(v+=t,c=e[v],E2(c)){o=c;break}(c>o||c===o&&P5r(c))&&(o=c),n[f]=o,f+=a}if(E2(o))for(l;l<r;l++)n[f]=o,f+=a;return n}Vy.exports=R5r});var Dy=s((Eie,Wy)=>{"use strict";var F5r=w(),Hy=Gy(),M5r=Uy();F5r(Hy,"ndarray",M5r);Wy.exports=Hy});var Xy=s((Nie,zy)=>{"use strict";var B5r=Dy();zy.exports=B5r});var xy=s((Aie,Jy)=>{"use strict";var k5r=Ao();function j5r(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(k5r(r,i));return t}Jy.exports=j5r});var Pa=s((Oie,Yy)=>{"use strict";var C5r=xy();Yy.exports=C5r});var $y=s((Sie,Zy)=>{"use strict";function G5r(r,e,t){var i,n,a,u,o,v;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],v=0;v<a;v++)n.push(e.call(t,[o,v]));i.push(n)}return i}Zy.exports=G5r});var Ky=s((Tie,Qy)=>{"use strict";var V5r=$y();Qy.exports=V5r});var eb=s((Iie,rb)=>{"use strict";function U5r(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}rb.exports=U5r});var N2=s((_ie,tb)=>{"use strict";var H5r=eb();tb.exports=H5r});var A2=s((Lie,ib)=>{"use strict";var W5r=k().isPrimitive;function D5r(r){return W5r(r)&&r>0}ib.exports=D5r});var O2=s((Pie,nb)=>{"use strict";var z5r=k().isObject;function X5r(r){return z5r(r)&&r.valueOf()>0}nb.exports=X5r});var sb=s((Rie,ab)=>{"use strict";var J5r=A2(),x5r=O2();function Y5r(r){return J5r(r)||x5r(r)}ab.exports=Y5r});var D=s((Fie,ob)=>{"use strict";var ub=w(),S2=sb(),Z5r=A2(),$5r=O2();ub(S2,"isPrimitive",Z5r);ub(S2,"isObject",$5r);ob.exports=S2});var vb=s((Mie,fb)=>{"use strict";var Q5r=L();function K5r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&Q5r(r.next)}fb.exports=K5r});var lb=s((Bie,cb)=>{"use strict";var rpr=vb();cb.exports=rpr});var mb=s((kie,gb)=>{"use strict";var pb="function";function epr(r){return typeof r.get===pb&&typeof r.set===pb}gb.exports=epr});var T2=s((jie,db)=>{"use strict";var tpr=mb();db.exports=tpr});var yb=s((Cie,qb)=>{"use strict";var hb={complex128:ipr,complex64:npr,default:apr};function ipr(r,e,t){r.set(t,e)}function npr(r,e,t){r.set(t,e)}function apr(r,e,t){r.set(t,e)}function spr(r){var e=hb[r];return typeof e=="function"?e:hb.default}qb.exports=spr});var I2=s((Gie,bb)=>{"use strict";var upr=yb();bb.exports=upr});var Nb=s((Vie,Eb)=>{"use strict";var wb={float64:opr,float32:fpr,int32:vpr,int16:cpr,int8:lpr,uint32:ppr,uint16:gpr,uint8:mpr,uint8c:dpr,generic:hpr,default:qpr};function opr(r,e,t){r[e]=t}function fpr(r,e,t){r[e]=t}function vpr(r,e,t){r[e]=t}function cpr(r,e,t){r[e]=t}function lpr(r,e,t){r[e]=t}function ppr(r,e,t){r[e]=t}function gpr(r,e,t){r[e]=t}function mpr(r,e,t){r[e]=t}function dpr(r,e,t){r[e]=t}function hpr(r,e,t){r[e]=t}function qpr(r,e,t){r[e]=t}function ypr(r){var e=wb[r];return typeof e=="function"?e:wb.default}Eb.exports=ypr});var _2=s((Uie,Ab)=>{"use strict";var bpr=Nb();Ab.exports=bpr});var Sb=s((Hie,Ob)=>{"use strict";var wpr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};Ob.exports=wpr});var Ib=s((Wie,Tb)=>{"use strict";var Epr=ir(),Npr=typeof Float32Array=="function";function Apr(r){return Npr&&r instanceof Float32Array||Epr(r)==="[object Float32Array]"}Tb.exports=Apr});var Lb=s((Die,_b)=>{"use strict";var Opr=Ib();_b.exports=Opr});var Rb=s((zie,Pb)=>{"use strict";var Spr=typeof Float32Array=="function"?Float32Array:null;Pb.exports=Spr});var Bb=s((Xie,Mb)=>{"use strict";var Tpr=Lb(),Ipr=_(),Fb=Rb();function _pr(){var r,e;if(typeof Fb!="function")return!1;try{e=new Fb([1,3.14,-3.14,5e40]),r=Tpr(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===Ipr}catch{r=!1}return r}Mb.exports=_pr});var jb=s((Jie,kb)=>{"use strict";var Lpr=Bb();kb.exports=Lpr});var Gb=s((xie,Cb)=>{"use strict";var Ppr=typeof Float32Array=="function"?Float32Array:void 0;Cb.exports=Ppr});var Ub=s((Yie,Vb)=>{"use strict";function Rpr(){throw new Error("not implemented")}Vb.exports=Rpr});var se=s((Zie,Hb)=>{"use strict";var Fpr=jb(),Mpr=Gb(),Bpr=Ub(),L2;Fpr()?L2=Mpr:L2=Bpr;Hb.exports=L2});var Db=s(($ie,Wb)=>{"use strict";var kpr=ir(),jpr=typeof Int32Array=="function";function Cpr(r){return jpr&&r instanceof Int32Array||kpr(r)==="[object Int32Array]"}Wb.exports=Cpr});var Ra=s((Qie,zb)=>{"use strict";var Gpr=Db();zb.exports=Gpr});var ii=s((Kie,Xb)=>{"use strict";var Vpr=2147483647;Xb.exports=Vpr});var xb=s((rne,Jb)=>{"use strict";var Upr=-2147483648;Jb.exports=Upr});var Zb=s((ene,Yb)=>{"use strict";var Hpr=typeof Int32Array=="function"?Int32Array:null;Yb.exports=Hpr});var Kb=s((tne,Qb)=>{"use strict";var Wpr=Ra(),Dpr=ii(),zpr=xb(),$b=Zb();function Xpr(){var r,e;if(typeof $b!="function")return!1;try{e=new $b([1,3.14,-3.14,Dpr+1]),r=Wpr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===zpr}catch{r=!1}return r}Qb.exports=Xpr});var ew=s((ine,rw)=>{"use strict";var Jpr=Kb();rw.exports=Jpr});var iw=s((nne,tw)=>{"use strict";var xpr=typeof Int32Array=="function"?Int32Array:void 0;tw.exports=xpr});var aw=s((ane,nw)=>{"use strict";function Ypr(){throw new Error("not implemented")}nw.exports=Ypr});var Pt=s((sne,sw)=>{"use strict";var Zpr=ew(),$pr=iw(),Qpr=aw(),P2;Zpr()?P2=$pr:P2=Qpr;sw.exports=P2});var ow=s((une,uw)=>{"use strict";var Kpr=ir(),r7r=typeof Int16Array=="function";function e7r(r){return r7r&&r instanceof Int16Array||Kpr(r)==="[object Int16Array]"}uw.exports=e7r});var vw=s((one,fw)=>{"use strict";var t7r=ow();fw.exports=t7r});var lw=s((fne,cw)=>{"use strict";var i7r=32767;cw.exports=i7r});var gw=s((vne,pw)=>{"use strict";var n7r=-32768;pw.exports=n7r});var dw=s((cne,mw)=>{"use strict";var a7r=typeof Int16Array=="function"?Int16Array:null;mw.exports=a7r});var yw=s((lne,qw)=>{"use strict";var s7r=vw(),u7r=lw(),o7r=gw(),hw=dw();function f7r(){var r,e;if(typeof hw!="function")return!1;try{e=new hw([1,3.14,-3.14,u7r+1]),r=s7r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===o7r}catch{r=!1}return r}qw.exports=f7r});var ww=s((pne,bw)=>{"use strict";var v7r=yw();bw.exports=v7r});var Nw=s((gne,Ew)=>{"use strict";var c7r=typeof Int16Array=="function"?Int16Array:void 0;Ew.exports=c7r});var Ow=s((mne,Aw)=>{"use strict";function l7r(){throw new Error("not implemented")}Aw.exports=l7r});var un=s((dne,Sw)=>{"use strict";var p7r=ww(),g7r=Nw(),m7r=Ow(),R2;p7r()?R2=g7r:R2=m7r;Sw.exports=R2});var Iw=s((hne,Tw)=>{"use strict";var d7r=ir(),h7r=typeof Uint8ClampedArray=="function";function q7r(r){return h7r&&r instanceof Uint8ClampedArray||d7r(r)==="[object Uint8ClampedArray]"}Tw.exports=q7r});var Lw=s((qne,_w)=>{"use strict";var y7r=Iw();_w.exports=y7r});var Rw=s((yne,Pw)=>{"use strict";var b7r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;Pw.exports=b7r});var Bw=s((bne,Mw)=>{"use strict";var w7r=Lw(),Fw=Rw();function E7r(){var r,e;if(typeof Fw!="function")return!1;try{e=new Fw([-1,0,1,3.14,4.99,255,256]),r=w7r(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}Mw.exports=E7r});var jw=s((wne,kw)=>{"use strict";var N7r=Bw();kw.exports=N7r});var Gw=s((Ene,Cw)=>{"use strict";var A7r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;Cw.exports=A7r});var Uw=s((Nne,Vw)=>{"use strict";function O7r(){throw new Error("not implemented")}Vw.exports=O7r});var on=s((Ane,Hw)=>{"use strict";var S7r=jw(),T7r=Gw(),I7r=Uw(),F2;S7r()?F2=T7r:F2=I7r;Hw.exports=F2});var Dw=s((One,Ww)=>{"use strict";var _7r=ir(),L7r=typeof Int8Array=="function";function P7r(r){return L7r&&r instanceof Int8Array||_7r(r)==="[object Int8Array]"}Ww.exports=P7r});var Xw=s((Sne,zw)=>{"use strict";var R7r=Dw();zw.exports=R7r});var xw=s((Tne,Jw)=>{"use strict";var F7r=127;Jw.exports=F7r});var Zw=s((Ine,Yw)=>{"use strict";var M7r=-128;Yw.exports=M7r});var Qw=s((_ne,$w)=>{"use strict";var B7r=typeof Int8Array=="function"?Int8Array:null;$w.exports=B7r});var eE=s((Lne,rE)=>{"use strict";var k7r=Xw(),j7r=xw(),C7r=Zw(),Kw=Qw();function G7r(){var r,e;if(typeof Kw!="function")return!1;try{e=new Kw([1,3.14,-3.14,j7r+1]),r=k7r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===C7r}catch{r=!1}return r}rE.exports=G7r});var iE=s((Pne,tE)=>{"use strict";var V7r=eE();tE.exports=V7r});var aE=s((Rne,nE)=>{"use strict";var U7r=typeof Int8Array=="function"?Int8Array:void 0;nE.exports=U7r});var uE=s((Fne,sE)=>{"use strict";function H7r(){throw new Error("not implemented")}sE.exports=H7r});var fn=s((Mne,oE)=>{"use strict";var W7r=iE(),D7r=aE(),z7r=uE(),M2;W7r()?M2=D7r:M2=z7r;oE.exports=M2});var B2=s((Bne,fE)=>{"use strict";var X7r=Cr().isPrimitive;function J7r(r){return X7r(r)&&r>=0}fE.exports=J7r});var k2=s((kne,vE)=>{"use strict";var x7r=Cr().isObject;function Y7r(r){return x7r(r)&&r.valueOf()>=0}vE.exports=Y7r});var lE=s((jne,cE)=>{"use strict";var Z7r=B2(),$7r=k2();function Q7r(r){return Z7r(r)||$7r(r)}cE.exports=Q7r});var Je=s((Cne,gE)=>{"use strict";var pE=w(),j2=lE(),K7r=B2(),r9r=k2();pE(j2,"isPrimitive",K7r);pE(j2,"isObject",r9r);gE.exports=j2});var dE=s((Gne,mE)=>{"use strict";var e9r=4294967295;mE.exports=e9r});var qE=s((Vne,hE)=>{"use strict";var t9r=Ir(),i9r=dE();function n9r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&t9r(r.length)&&r.length>=0&&r.length<=i9r}hE.exports=n9r});var Rt=s((Une,yE)=>{"use strict";var a9r=qE();yE.exports=a9r});var wE=s((Hne,bE)=>{"use strict";var s9r=ir(),u9r=typeof ArrayBuffer=="function";function o9r(r){return u9r&&r instanceof ArrayBuffer||s9r(r)==="[object ArrayBuffer]"}bE.exports=o9r});var C2=s((Wne,EE)=>{"use strict";var f9r=wE();EE.exports=f9r});var AE=s((Dne,NE)=>{"use strict";function v9r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}NE.exports=v9r});var SE=s((zne,OE)=>{"use strict";function c9r(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}OE.exports=c9r});var PE=s((Xne,LE)=>{"use strict";var TE=k().isPrimitive,IE=Ce(),vn=w(),_E=y(),l9r=AE(),p9r=SE();function Ft(r,e){if(!(this instanceof Ft))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!TE(r))throw new TypeError(_E("invalid argument. Real component must be a number. Value: `%s`.",r));if(!TE(e))throw new TypeError(_E("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return IE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),IE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}vn(Ft,"BYTES_PER_ELEMENT",8);vn(Ft.prototype,"BYTES_PER_ELEMENT",8);vn(Ft.prototype,"byteLength",16);vn(Ft.prototype,"toString",l9r);vn(Ft.prototype,"toJSON",p9r);LE.exports=Ft});var ni=s((Jne,RE)=>{"use strict";var g9r=PE();RE.exports=g9r});var ME=s((xne,FE)=>{"use strict";var m9r=typeof Math.fround=="function"?Math.fround:null;FE.exports=m9r});var jE=s((Yne,kE)=>{"use strict";var d9r=se(),BE=new d9r(1);function h9r(r){return BE[0]=r,BE[0]}kE.exports=h9r});var VE=s((Zne,GE)=>{"use strict";var CE=ME(),q9r=jE(),G2;typeof CE=="function"?G2=CE:G2=q9r;GE.exports=G2});var HE=s(($ne,UE)=>{"use strict";function y9r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}UE.exports=y9r});var DE=s((Qne,WE)=>{"use strict";function b9r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}WE.exports=b9r});var ZE=s((Kne,YE)=>{"use strict";var zE=k().isPrimitive,XE=Ce(),cn=w(),JE=VE(),xE=y(),w9r=HE(),E9r=DE();function Mt(r,e){if(!(this instanceof Mt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!zE(r))throw new TypeError(xE("invalid argument. Real component must be a number. Value: `%s`.",r));if(!zE(e))throw new TypeError(xE("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return XE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:JE(r)}),XE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:JE(e)}),this}cn(Mt,"BYTES_PER_ELEMENT",4);cn(Mt.prototype,"BYTES_PER_ELEMENT",4);cn(Mt.prototype,"byteLength",8);cn(Mt.prototype,"toString",w9r);cn(Mt.prototype,"toJSON",E9r);YE.exports=Mt});var ai=s((rae,$E)=>{"use strict";var N9r=ZE();$E.exports=N9r});var KE=s((eae,QE)=>{"use strict";var A9r=ni(),O9r=ai();function S9r(r){return r instanceof A9r||r instanceof O9r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}QE.exports=S9r});var Hr=s((tae,rN)=>{"use strict";var T9r=KE();rN.exports=T9r});var tN=s((iae,eN)=>{"use strict";var I9r=O(),Fa=du();function _9r(){return typeof Fa=="function"&&typeof Fa("foo")=="symbol"&&I9r(Fa,"iterator")&&typeof Fa.iterator=="symbol"}eN.exports=_9r});var Ma=s((nae,iN)=>{"use strict";var L9r=tN();iN.exports=L9r});var aN=s((aae,nN)=>{"use strict";var P9r=Ma(),R9r=P9r()?Symbol.iterator:null;nN.exports=R9r});var Ba=s((sae,sN)=>{"use strict";var F9r=aN();sN.exports=F9r});var oN=s((uae,uN)=>{"use strict";var M9r=Ce();function B9r(r,e,t){M9r(r,e,{configurable:!1,enumerable:!1,get:t})}uN.exports=B9r});var R=s((oae,fN)=>{"use strict";var k9r=oN();fN.exports=k9r});var cN=s((fae,vN)=>{"use strict";function j9r(r){return r.re}vN.exports=j9r});var xe=s((vae,lN)=>{"use strict";var C9r=cN();lN.exports=C9r});var gN=s((cae,pN)=>{"use strict";function G9r(r){return r.im}pN.exports=G9r});var Ye=s((lae,mN)=>{"use strict";var V9r=gN();mN.exports=V9r});var hN=s((pae,dN)=>{"use strict";var U9r=se();function H9r(r,e){return new U9r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}dN.exports=H9r});var si=s((gae,qN)=>{"use strict";var W9r=hN();qN.exports=W9r});var bN=s((mae,yN)=>{"use strict";var D9r=dr();function z9r(r,e){return new D9r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}yN.exports=z9r});var ui=s((dae,wN)=>{"use strict";var X9r=bN();wN.exports=X9r});var AN=s((hae,NN)=>{"use strict";var EN={float64:J9r,float32:x9r,int32:Y9r,int16:Z9r,int8:$9r,uint32:Q9r,uint16:K9r,uint8:rgr,uint8c:egr,generic:tgr,default:igr};function J9r(r,e){return r[e]}function x9r(r,e){return r[e]}function Y9r(r,e){return r[e]}function Z9r(r,e){return r[e]}function $9r(r,e){return r[e]}function Q9r(r,e){return r[e]}function K9r(r,e){return r[e]}function rgr(r,e){return r[e]}function egr(r,e){return r[e]}function tgr(r,e){return r[e]}function igr(r,e){return r[e]}function ngr(r){var e=EN[r];return typeof e=="function"?e:EN.default}NN.exports=ngr});var ka=s((qae,ON)=>{"use strict";var agr=AN();ON.exports=agr});var IN=s((yae,TN)=>{"use strict";var SN={complex128:sgr,complex64:ugr,default:ogr};function sgr(r,e){return r.get(e)}function ugr(r,e){return r.get(e)}function ogr(r,e){return r.get(e)}function fgr(r){var e=SN[r];return typeof e=="function"?e:SN.default}TN.exports=fgr});var ja=s((bae,_N)=>{"use strict";var vgr=IN();_N.exports=vgr});var PN=s((wae,LN)=>{"use strict";var cgr=Rt(),lgr=Hr(),pgr=xe(),ggr=Ye(),mgr=y();function dgr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,cgr(i)&&i.length>=2)e.push(i[0],i[1]);else if(lgr(i))e.push(pgr(i),ggr(i));else return new TypeError(mgr("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}LN.exports=dgr});var FN=s((Eae,RN)=>{"use strict";var hgr=Rt(),qgr=Hr(),ygr=xe(),bgr=Ye(),wgr=y();function Egr(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),hgr(a)&&a.length>=2)i.push(a[0],a[1]);else if(qgr(a))i.push(ygr(a),bgr(a));else return new TypeError(wgr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}RN.exports=Egr});var BN=s((Nae,MN)=>{"use strict";var Ngr=Hr(),Agr=xe(),Ogr=Ye();function Sgr(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!Ngr(i))return null;r[a]=Agr(i),r[a+1]=Ogr(i),a+=2}return r}MN.exports=Sgr});var DN=s((Aae,WN)=>{"use strict";var ln=Je().isPrimitive,kN=Rt(),U2=Gr(),jN=C2(),CN=Qn(),Tgr=mr(),Bt=L(),oi=Hr(),Ca=ma(),V2=Ir(),Igr=Ma(),fi=Ba(),hr=w(),Ua=R(),Fr=se(),GN=ai(),x=y(),Ga=xe(),Va=Ye(),_gr=si(),Lgr=ui(),Pgr=ka(),Rgr=ja(),VN=PN(),Fgr=FN(),Mgr=BN(),Lr=Fr.BYTES_PER_ELEMENT*2,UN=Igr();function vi(r){return r instanceof rr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function HN(r){return r===rr||r.name==="Complex128Array"}function Bgr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Lr}function kgr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Lr*2}function rr(){var r,e,t,i;if(e=arguments.length,!(this instanceof rr))return e===0?new rr:e===1?new rr(arguments[0]):e===2?new rr(arguments[0],arguments[1]):new rr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Fr(0);else if(e===1)if(ln(arguments[0]))t=new Fr(arguments[0]*2);else if(U2(arguments[0]))if(t=arguments[0],i=t.length,i&&Tgr(t)&&oi(t[0])){if(t=Mgr(new Fr(i*2),t),t===null){if(!Ca(i))throw new RangeError(x("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(arguments[0])}}else{if(Bgr(t))t=_gr(t,0);else if(kgr(t))t=Lgr(t,0);else if(!Ca(i))throw new RangeError(x("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(t)}else if(jN(arguments[0])){if(t=arguments[0],!V2(t.byteLength/Lr))throw new RangeError(x("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Lr,t.byteLength));t=new Fr(t)}else if(CN(arguments[0])){if(t=arguments[0],UN===!1)throw new TypeError(x("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Bt(t[fi]))throw new TypeError(x("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[fi](),!Bt(t.next))throw new TypeError(x("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=VN(t),t instanceof Error)throw t;t=new Fr(t)}else throw new TypeError(x("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!jN(t))throw new TypeError(x("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!ln(r))throw new TypeError(x("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!V2(r/Lr))throw new RangeError(x("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Lr,r));if(e===2){if(i=t.byteLength-r,!V2(i/Lr))throw new RangeError(x("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Lr,i));t=new Fr(t,r)}else{if(i=arguments[2],!ln(i))throw new TypeError(x("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Lr>t.byteLength-r)throw new RangeError(x("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Lr));t=new Fr(t,r,i*2)}}return hr(this,"_buffer",t),hr(this,"_length",t.length/2),this}hr(rr,"BYTES_PER_ELEMENT",Lr);hr(rr,"name","Complex64Array");hr(rr,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,m;if(!Bt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!HN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Bt(n))throw new TypeError(x("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(vi(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),oi(l))u[m]=Ga(l),u[m+1]=Va(l);else if(kN(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(x("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(U2(e)){if(n){for(f=e.length,e.get&&e.set?v=Rgr("default"):v=Pgr("default"),p=0;p<f;p++)if(!oi(v(e,p))){c=!0;break}if(c){if(!Ca(f))throw new RangeError(x("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),oi(l))u[m]=Ga(l),u[m+1]=Va(l);else if(kN(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(x("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(CN(e)&&UN&&Bt(e[fi])){if(u=e[fi](),!Bt(u.next))throw new TypeError(x("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=Fgr(u,n,t):o=VN(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError(x("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});hr(rr,"of",function(){var e,t;if(!Bt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!HN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Ua(rr.prototype,"buffer",function(){return this._buffer.buffer});Ua(rr.prototype,"byteLength",function(){return this._buffer.byteLength});Ua(rr.prototype,"byteOffset",function(){return this._buffer.byteOffset});hr(rr.prototype,"BYTES_PER_ELEMENT",rr.BYTES_PER_ELEMENT);hr(rr.prototype,"copyWithin",function(e,t){if(!vi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});hr(rr.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!vi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},hr(i,"next",v),hr(i,"return",f),fi&&hr(i,fi,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new GN(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});hr(rr.prototype,"get",function(e){var t;if(!vi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ln(e))throw new TypeError(x("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new GN(t[e],t[e+1])});Ua(rr.prototype,"length",function(){return this._length});hr(rr.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!vi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!ln(i))throw new TypeError(x("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(oi(e)){if(i>=this._length)throw new RangeError(x("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ga(e),n[i+1]=Va(e);return}if(vi(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(U2(e)){for(o=e.length,f=0;f<o;f++)if(!oi(e[f])){u=!0;break}if(u){if(!Ca(o))throw new RangeError(x("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=Ga(v),n[i+1]=Va(v),i+=2;return}throw new TypeError(x("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});WN.exports=rr});var pn=s((Oae,zN)=>{"use strict";var jgr=DN();zN.exports=jgr});var JN=s((Sae,XN)=>{"use strict";function Cgr(r){return r.re}XN.exports=Cgr});var Ze=s((Tae,xN)=>{"use strict";var Ggr=JN();xN.exports=Ggr});var ZN=s((Iae,YN)=>{"use strict";function Vgr(r){return r.im}YN.exports=Vgr});var $e=s((_ae,$N)=>{"use strict";var Ugr=ZN();$N.exports=Ugr});var KN=s((Lae,QN)=>{"use strict";var Hgr=Rt(),Wgr=Hr(),Dgr=y(),zgr=Ze(),Xgr=$e();function Jgr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,Hgr(i)&&i.length>=2)e.push(i[0],i[1]);else if(Wgr(i))e.push(zgr(i),Xgr(i));else return new TypeError(Dgr("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}QN.exports=Jgr});var eA=s((Pae,rA)=>{"use strict";var xgr=Rt(),Ygr=Hr(),Zgr=y(),$gr=Ze(),Qgr=$e();function Kgr(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),xgr(a)&&a.length>=2)i.push(a[0],a[1]);else if(Ygr(a))i.push($gr(a),Qgr(a));else return new TypeError(Zgr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}rA.exports=Kgr});var iA=s((Rae,tA)=>{"use strict";var rmr=Hr(),emr=Ze(),tmr=$e();function imr(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!rmr(i))return null;r[a]=emr(i),r[a+1]=tmr(i),a+=2}return r}tA.exports=imr});var lA=s((Fae,cA)=>{"use strict";var gn=Je().isPrimitive,nA=Rt(),W2=Gr(),aA=C2(),sA=Qn(),nmr=mr(),kt=L(),ci=Hr(),Ha=ma(),H2=Ir(),amr=Ma(),li=Ba(),qr=w(),za=R(),Mr=dr(),uA=ni(),Wa=Ze(),Da=$e(),smr=si(),umr=ui(),omr=ka(),fmr=ja(),Y=y(),oA=KN(),vmr=eA(),cmr=iA(),Pr=Mr.BYTES_PER_ELEMENT*2,fA=amr();function pi(r){return r instanceof er||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function vA(r){return r===er||r.name==="Complex64Array"}function lmr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Pr/2}function pmr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Pr}function er(){var r,e,t,i;if(e=arguments.length,!(this instanceof er))return e===0?new er:e===1?new er(arguments[0]):e===2?new er(arguments[0],arguments[1]):new er(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Mr(0);else if(e===1)if(gn(arguments[0]))t=new Mr(arguments[0]*2);else if(W2(arguments[0]))if(t=arguments[0],i=t.length,i&&nmr(t)&&ci(t[0])){if(t=cmr(new Mr(i*2),t),t===null){if(!Ha(i))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Mr(arguments[0])}}else{if(lmr(t))t=smr(t,0);else if(pmr(t))t=umr(t,0);else if(!Ha(i))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Mr(t)}else if(aA(arguments[0])){if(t=arguments[0],!H2(t.byteLength/Pr))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Pr,t.byteLength));t=new Mr(t)}else if(sA(arguments[0])){if(t=arguments[0],fA===!1)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!kt(t[li]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[li](),!kt(t.next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=oA(t),t instanceof Error)throw t;t=new Mr(t)}else throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!aA(t))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!gn(r))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!H2(r/Pr))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Pr,r));if(e===2){if(i=t.byteLength-r,!H2(i/Pr))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Pr,i));t=new Mr(t,r)}else{if(i=arguments[2],!gn(i))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Pr>t.byteLength-r)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Pr));t=new Mr(t,r,i*2)}}return qr(this,"_buffer",t),qr(this,"_length",t.length/2),this}qr(er,"BYTES_PER_ELEMENT",Pr);qr(er,"name","Complex128Array");qr(er,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,m;if(!kt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!vA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!kt(n))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(pi(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),ci(l))u[m]=Wa(l),u[m+1]=Da(l);else if(nA(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(W2(e)){if(n){for(f=e.length,e.get&&e.set?v=fmr("default"):v=omr("default"),p=0;p<f;p++)if(!ci(v(e,p))){c=!0;break}if(c){if(!Ha(f))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),ci(l))u[m]=Wa(l),u[m+1]=Da(l);else if(nA(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(sA(e)&&fA&&kt(e[li])){if(u=e[li](),!kt(u.next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=vmr(u,n,t):o=oA(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});qr(er,"of",function(){var e,t;if(!kt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!vA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});za(er.prototype,"buffer",function(){return this._buffer.buffer});za(er.prototype,"byteLength",function(){return this._buffer.byteLength});za(er.prototype,"byteOffset",function(){return this._buffer.byteOffset});qr(er.prototype,"BYTES_PER_ELEMENT",er.BYTES_PER_ELEMENT);qr(er.prototype,"copyWithin",function(e,t){if(!pi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});qr(er.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!pi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},qr(i,"next",v),qr(i,"return",f),li&&qr(i,li,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new uA(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});qr(er.prototype,"get",function(e){var t;if(!pi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!gn(e))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new uA(t[e],t[e+1])});za(er.prototype,"length",function(){return this._length});qr(er.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!pi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!gn(i))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(ci(e)){if(i>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Wa(e),n[i+1]=Da(e);return}if(pi(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Mr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(W2(e)){for(o=e.length,f=0;f<o;f++)if(!ci(e[f])){u=!0;break}if(u){if(!Ha(o))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Mr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=Wa(v),n[i+1]=Da(v),i+=2;return}throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});cA.exports=er});var mn=s((Mae,pA)=>{"use strict";var gmr=lA();pA.exports=gmr});var mA=s((Bae,gA)=>{"use strict";var mmr=dr(),dmr=se(),hmr=lr(),qmr=Pt(),ymr=Zt(),bmr=un(),wmr=Yt(),Emr=on(),Nmr=fn(),Amr=pn(),Omr=mn(),Smr=[mmr,dmr,qmr,hmr,bmr,ymr,Nmr,wmr,Emr,Amr,Omr];gA.exports=Smr});var hA=s((kae,dA)=>{"use strict";var Tmr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];dA.exports=Tmr});var bA=s((jae,yA)=>{"use strict";var Imr=Et(),_mr=mr(),Lmr=Ge(),Pmr=Sb(),Rmr=mA(),qA=hA(),Fmr=qA.length;function Mmr(r){var e;if(_mr(r))return"generic";if(Imr(r))return null;for(e=0;e<Fmr;e++)if(r instanceof Rmr[e])return qA[e];return Pmr[Lmr(r)]||null}yA.exports=Mmr});var Xa=s((Cae,wA)=>{"use strict";var Bmr=bA();wA.exports=Bmr});var AA=s((Gae,NA)=>{"use strict";var EA=L(),kmr=Gr(),jmr=lb(),Cmr=T2(),Gmr=I2(),Vmr=_2(),Umr=Xa(),D2=y();function Hmr(){var r,e,t,i,n,a,u,o,v;if(r=arguments[0],arguments.length>1)if(kmr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!EA(t))throw new TypeError(D2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!EA(t))throw new TypeError(D2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!jmr(r))throw new TypeError(D2("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,v=r.next(),!v.done;)i.push(t.call(e,v.value,o));return i}for(;v=r.next(),!v.done;)i.push(v.value);return i}if(n=i.length,u=Umr(i),Cmr(i)?a=Gmr(u):a=Vmr(u),t){for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,t.call(e,v.value,o));return i}for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,v.value);return i}NA.exports=Hmr});var SA=s((Vae,OA)=>{"use strict";var Wmr=AA();OA.exports=Wmr});var IA=s((Uae,TA)=>{"use strict";function Dmr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}TA.exports=Dmr});var LA=s((Hae,_A)=>{"use strict";function zmr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}_A.exports=zmr});var FA=s((Wae,RA)=>{"use strict";var Xmr=tr(),PA=ie(),Jmr=IA(),xmr=LA(),Ymr=.7853981633974483,Zmr=3061616997868383e-32,$mr=.3333333333333341,Qmr=2147483647;function Kmr(r,e,t){var i,n,a,u,o,v,f,c,l;return i=Xmr(r),n=i&Qmr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=Ymr-r,c=Zmr-e,r=l+c,e=0),l=r*r,c=l*l,u=Jmr(c),f=l*xmr(c),o=l*r,u=e+l*(o*(u+f)+e),u+=$mr*o,c=r+u,n>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(c*c/(c+f)-u)))):t===1?c:(l=PA(c,0),f=u-(l-r),a=-1/c,v=PA(a,0),o=1+v*l,v+a*(o+v*f))}RA.exports=Kmr});var BA=s((Dae,MA)=>{"use strict";var rdr=FA();MA.exports=rdr});var CA=s((zae,jA)=>{"use strict";var edr=tr(),kA=BA(),tdr=Zi(),z2=[0,0],idr=2147483647,ndr=1072243195,adr=2146435072,sdr=1044381696;function udr(r){var e,t;return e=edr(r),e&=idr,e<=ndr?e<sdr?r:kA(r,0,1):e>=adr?NaN:(t=tdr(r,z2),kA(z2[0],z2[1],1-((t&1)<<1)))}jA.exports=udr});var X2=s((Xae,GA)=>{"use strict";var odr=CA();GA.exports=odr});var Ja=s((Jae,VA)=>{"use strict";var fdr=1.5707963267948966;VA.exports=fdr});var xa=s((xae,UA)=>{"use strict";var vdr=.7853981633974483;UA.exports=vdr});var WA=s((Yae,HA)=>{"use strict";function cdr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}HA.exports=cdr});var zA=s((Zae,DA)=>{"use strict";function ldr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}DA.exports=ldr});var xA=s(($ae,JA)=>{"use strict";var pdr=E(),gdr=_(),J2=Ja(),mdr=xa(),ddr=V(),hdr=WA(),qdr=zA(),XA=6123233995736766e-32,ydr=2.414213562373095;function bdr(r){var e,t,i,n;return pdr(r)||r===0?r:r===gdr?J2:r===ddr?-J2:(r<0&&(t=!0,r=-r),e=0,r>ydr?(i=J2,e=1,r=-(1/r)):r<=.66?i=0:(i=mdr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*hdr(n)/qdr(n),n=r*n+r,e===2?n+=.5*XA:e===1&&(n+=XA),i+=n,t?-i:i)}JA.exports=bdr});var Ya=s((Qae,YA)=>{"use strict";var wdr=xA();YA.exports=wdr});var x2=s((Kae,ZA)=>{"use strict";var Edr=k().isPrimitive;function Ndr(r){return Edr(r)&&r>=0}ZA.exports=Ndr});var Y2=s((r0e,$A)=>{"use strict";var Adr=k().isObject;function Odr(r){return Adr(r)&&r.valueOf()>=0}$A.exports=Odr});var KA=s((e0e,QA)=>{"use strict";var Sdr=x2(),Tdr=Y2();function Idr(r){return Sdr(r)||Tdr(r)}QA.exports=Idr});var $2=s((t0e,eO)=>{"use strict";var rO=w(),Z2=KA(),_dr=x2(),Ldr=Y2();rO(Z2,"isPrimitive",_dr);rO(Z2,"isObject",Ldr);eO.exports=Z2});var iO=s((i0e,tO)=>{"use strict";var Pdr=I(),Za=O(),Rdr=Cr().isPrimitive,Fdr=ae().isPrimitive,Mdr=Je().isPrimitive,Bdr=$2().isPrimitive,dn=y();function kdr(r,e){return Pdr(e)?Za(e,"period")&&(r.period=e.period,!Fdr(e.period))?new TypeError(dn("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):Za(e,"amplitude")&&(r.amplitude=e.amplitude,!Bdr(e.amplitude))?new TypeError(dn("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):Za(e,"offset")&&(r.offset=e.offset,!Rdr(e.offset))?new TypeError(dn("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):Za(e,"iter")&&(r.iter=e.iter,!Mdr(e.iter))?new TypeError(dn("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(dn("invalid argument. Options argument must be an object. Value: `%s`.",e))}tO.exports=kdr});var uO=s((n0e,sO)=>{"use strict";var Q2=w(),nO=Ba(),jdr=X2(),Cdr=Ya(),Gdr=Ja(),Vdr=_r(),Udr=iO();function aO(r){var e,t,i,n,a,u,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=Udr(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=Vdr/e.period,o=e.amplitude/Gdr,v=0,t={},Q2(t,"next",f),Q2(t,"return",c),nO&&Q2(t,nO,l),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*Cdr(jdr(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return aO(e)}}sO.exports=aO});var fO=s((a0e,oO)=>{"use strict";var Hdr=uO();oO.exports=Hdr});var cO=s((s0e,vO)=>{"use strict";var Wdr={Complex64:"complex64",Complex128:"complex128"};vO.exports=Wdr});var pO=s((u0e,lO)=>{"use strict";var Ddr=ai(),zdr=ni(),Xdr=[Ddr,zdr];lO.exports=Xdr});var mO=s((o0e,gO)=>{"use strict";var Jdr=["complex64","complex128"];gO.exports=Jdr});var qO=s((f0e,hO)=>{"use strict";var xdr=Ge(),Ydr=cO(),Zdr=pO(),dO=mO(),$dr=dO.length;function Qdr(r){var e;for(e=0;e<$dr;e++)if(r instanceof Zdr[e])return dO[e];return Ydr[xdr(r)]||null}hO.exports=Qdr});var K2=s((v0e,yO)=>{"use strict";var Kdr=qO();yO.exports=Kdr});var wO=s((c0e,bO)=>{"use strict";var rhr=dr(),ehr=se(),thr=mn(),ihr=pn(),nhr={float64:rhr,float32:ehr,complex128:thr,complex64:ihr};bO.exports=nhr});var NO=s((l0e,EO)=>{"use strict";var ahr=wO();function shr(r){return ahr[r]||null}EO.exports=shr});var OO=s((p0e,AO)=>{"use strict";var uhr=NO();AO.exports=uhr});var TO=s((g0e,SO)=>{"use strict";function ohr(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}SO.exports=ohr});var FO=s((m0e,RO)=>{"use strict";var fhr=ai(),vhr=ni(),IO=Ze(),_O=$e(),LO=xe(),PO=Ye();function chr(r,e,t,i,n,a){var u,o,v,f,c,l,p,m,h,d,g,q,N;if(n===0)return[];if(o=0,r==="float64"?(f=e,l=0):r==="complex64"?(o+=1,f=LO(e),l=PO(e)):(f=IO(e),l=_O(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=LO(i),p=PO(i)):(c=IO(i),p=_O(i)),o===2?u=fhr:u=vhr,n===1)return a?[new u(c,p)]:[new u(f,l)];for(v=[new u(f,l)],a?q=n-1:q=n,d=(c-f)/q,g=(p-l)/q,N=1;N<q;N++)m=f+d*N,h=l+g*N,v.push(new u(m,h));return a&&v.push(new u(c,p)),v}RO.exports=chr});var r1=s((d0e,MO)=>{"use strict";function lhr(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}MO.exports=lhr});var e1=s((h0e,GO)=>{"use strict";var BO=Ze(),kO=$e(),jO=xe(),CO=Ye();function phr(r,e,t,i,n,a,u){var o,v,f,c,l,p,m,h,d;if(a===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=jO(t),f=CO(t)):(o=BO(t),f=kO(t)),i==="float64"?(v=n,c=0):i==="complex64"?(v=jO(n),c=CO(n)):(v=BO(n),c=kO(n)),a===1)return u?(r[0]=v,r[1]=c):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,u?m=a-1:m=a,l=(v-o)/m,p=(c-f)/m,d=2,h=1;h<m;h++)r[d]=o+l*h,r[d+1]=f+p*h,d+=2;return u&&(r[d]=v,r[d+1]=c),r}GO.exports=phr});var i1=s((q0e,UO)=>{"use strict";var ghr=I(),VO=O(),mhr=K().isPrimitive,dhr=fr().isPrimitive,t1=y();function hhr(r,e){return ghr(e)?VO(e,"dtype")&&(r.dtype=e.dtype,!mhr(r.dtype))?new TypeError(t1("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):VO(e,"endpoint")&&(r.endpoint=e.endpoint,!dhr(r.endpoint))?new TypeError(t1("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(t1("invalid argument. Options argument must be an object. Value: `%s`.",e))}UO.exports=hhr});var n1=s((y0e,qhr)=>{qhr.exports={endpoint:!0}});var xO=s((b0e,JO)=>{"use strict";var HO=Hr(),WO=k().isPrimitive,yhr=Je().isPrimitive,DO=E(),zO=K2(),bhr=OO(),whr=si(),Ehr=ui(),gi=y(),Nhr=TO(),Ahr=FO(),Ohr=r1(),XO=e1(),Shr=i1(),Thr=n1();function Ihr(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(o=zO(r),o===null){if(!HO(r))throw new TypeError(gi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}f=!0}else{if(!WO(r)||DO(r))throw new TypeError(gi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(v=zO(e),v===null){if(!HO(e))throw new TypeError(gi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="complex128"}f=!0}else{if(!WO(e)||DO(e))throw new TypeError(gi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="float64"}if(!yhr(t))throw new TypeError(gi("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:Thr.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=Shr(i,arguments[3]),a))throw a;if(i.dtype==="generic")return f?Ahr(o,r,v,e,t,i.endpoint):Nhr(r,e,t,i.endpoint);if(n=bhr(i.dtype),n===null)throw new TypeError(gi('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return XO(whr(u,0),o,r,v,e,t,i.endpoint),u;if(i.dtype==="complex128")return XO(Ehr(u,0),o,r,v,e,t,i.endpoint),u;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return Ohr(u,r,e,t,i.endpoint)}JO.exports=Ihr});var ZO=s((w0e,YO)=>{"use strict";var _hr=T2(),Lhr=ka(),Phr=_2(),Rhr=ja(),Fhr=I2(),Mhr=Xa();function Bhr(r){var e=Mhr(r);return _hr(r)?{accessorProtocol:!0,accessors:[Rhr(e),Fhr(e)]}:{accessorProtocol:!1,accessors:[Lhr(e),Phr(e)]}}YO.exports=Bhr});var QO=s((E0e,$O)=>{"use strict";var khr=ZO();$O.exports=khr});var rS=s((N0e,KO)=>{"use strict";var jhr=QO();function Chr(r){var e=jhr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}KO.exports=Chr});var $a=s((A0e,eS)=>{"use strict";var Ghr=rS();eS.exports=Ghr});var uS=s((O0e,sS)=>{"use strict";var Vhr=ai(),Uhr=ni(),tS=Ze(),iS=$e(),nS=xe(),aS=Ye();function Hhr(r,e,t,i,n,a,u){var o,v,f,c,l,p,m,h,d,g,q,N,A,j;if(a===0)return r;if(v=0,e==="float64"?(f=t,l=0):e==="complex64"?(v+=1,f=nS(t),l=aS(t)):(f=tS(t),l=iS(t)),i==="float64"?(c=n,p=0):i==="complex64"?(v+=1,c=nS(n),p=aS(n)):(c=tS(n),p=iS(n)),v===2?o=Vhr:o=Uhr,h=r.data,m=r.accessors[1],a===1)return u?m(h,0,new o(c,p)):m(h,0,new o(f,l)),r;for(m(h,0,new o(f,l)),u?A=a-1:A=a,q=(c-f)/A,N=(p-l)/A,j=1;j<A;j++)d=f+q*j,g=l+N*j,m(h,j,new o(d,g));return u&&m(h,A,new o(c,p)),r}sS.exports=Hhr});var fS=s((S0e,oS)=>{"use strict";function Whr(r,e,t,i,n){var a,u,o,v,f;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)u(a,f,e+v*f);return n&&u(a,o,t),r}oS.exports=Whr});var hS=s((T0e,dS)=>{"use strict";var vS=Hr(),cS=k().isPrimitive,Dhr=Gr(),hn=y(),lS=E(),pS=K2(),zhr=Xa(),Xhr=si(),Jhr=ui(),gS=$a(),xhr=uS(),Yhr=fS(),mS=e1(),Zhr=r1(),$hr=i1(),Qhr=n1();function Khr(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(a=pS(r),a===null){if(!vS(r))throw new TypeError(hn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!cS(r)||lS(r))throw new TypeError(hn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=pS(e),u===null){if(!vS(e))throw new TypeError(hn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!cS(e)||lS(e))throw new TypeError(hn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!Dhr(t))throw new TypeError(hn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:Qhr.endpoint},arguments.length>3&&(n=$hr(i,arguments[3]),n))throw n;if(v=zhr(t),v===null&&(v="generic"),v==="complex64")return mS(Xhr(t,0),a,r,u,e,t.length,i.endpoint),t;if(v==="complex128")return mS(Jhr(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=gS(t),xhr(f,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=gS(t),f.accessorProtocol?(Yhr(f,r,e,t.length,i.endpoint),t):(Zhr(t,r,e,t.length,i.endpoint),t)}dS.exports=Khr});var bS=s((I0e,yS)=>{"use strict";var rqr=w(),qS=xO(),eqr=hS();rqr(qS,"assign",eqr);yS.exports=qS});var ES=s((_0e,wS)=>{"use strict";var tqr=E(),iqr=ze();function nqr(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],tqr(a))return a;(a>i||a===i&&iqr(a))&&(i=a)}return i}wS.exports=nqr});var AS=s((L0e,NS)=>{"use strict";var aqr=E(),sqr=ze();function uqr(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],aqr(u))return u;(u>n||u===n&&sqr(u))&&(n=u)}return n}NS.exports=uqr});var TS=s((P0e,SS)=>{"use strict";var oqr=w(),OS=ES(),fqr=AS();oqr(OS,"ndarray",fqr);SS.exports=OS});var _S=s((R0e,IS)=>{"use strict";var vqr=TS();IS.exports=vqr});var RS=s((F0e,PS)=>{"use strict";var LS=E(),cqr=ze();function lqr(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,f=0;f<r&&i[o]!==0;f++)u+=t,o+=n;if(f===r)return NaN;if(a=e[u],LS(a))return a;for(f+=1,f;f<r;f++)if(u+=t,o+=n,!i[o]){if(v=e[u],LS(v))return v;(v>a||v===a&&cqr(v))&&(a=v)}return a}PS.exports=lqr});var BS=s((M0e,MS)=>{"use strict";var FS=E(),pqr=ze();function gqr(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return NaN;for(v=i,f=u,l=0;l<r&&n[f]!==0;l++)v+=t,f+=a;if(l===r)return NaN;if(o=e[v],FS(o))return o;for(l+=1,l;l<r;l++)if(v+=t,f+=a,!n[f]){if(c=e[v],FS(c))return c;(c>o||c===o&&pqr(c))&&(o=c)}return o}MS.exports=gqr});var CS=s((B0e,jS)=>{"use strict";var mqr=w(),kS=RS(),dqr=BS();mqr(kS,"ndarray",dqr);jS.exports=kS});var VS=s((k0e,GS)=>{"use strict";var hqr=k().isPrimitive,qqr=K().isPrimitive,yqr=fr().isPrimitive,bqr=mr(),wqr=y(),Eqr={number:hqr,string:qqr,boolean:yqr};function Nqr(r,e,t){var i,n,a,u,o,v;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],v=0;v<r.length;v++)if(o=r[v],a=e[v],u=Eqr[a],u(o))i.push([[o]]),n.push([1,1]);else if(bqr(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(wqr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[v],a,a,String(o)));return[i,n]}GS.exports=Nqr});var HS=s((j0e,US)=>{"use strict";var Aqr=VS();US.exports=Aqr});var DS=s((C0e,WS)=>{"use strict";var Oqr=Pa();function Sqr(r){return Oqr(1,r)}WS.exports=Sqr});var XS=s((G0e,zS)=>{"use strict";var Tqr=DS();zS.exports=Tqr});var xS=s((V0e,JS)=>{"use strict";var Iqr=Pa();function _qr(r){return Iqr(0,r)}JS.exports=_qr});var ZS=s((U0e,YS)=>{"use strict";var Lqr=xS();YS.exports=Lqr});var KS=s((H0e,QS)=>{"use strict";var $S=y();function Pqr(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError($S('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError($S('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}QS.exports=Pqr});var eT=s((W0e,rT)=>{"use strict";var Rqr=KS();rT.exports=Rqr});var iT=s((D0e,tT)=>{"use strict";var Fqr=k().isPrimitive,Mqr=eT(),Bqr=y();function kqr(r,e,t,i,n,a){var u,o;if(!(Fqr(r)&&Mqr(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(Bqr("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}tT.exports=kqr});var aT=s((z0e,nT)=>{"use strict";var jqr=iT();nT.exports=jqr});var uT=s((X0e,sT)=>{"use strict";var Cqr=fr().isPrimitive,Gqr=y();function Vqr(r,e){if(!Cqr(r))throw new TypeError(Gqr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}sT.exports=Vqr});var fT=s((J0e,oT)=>{"use strict";var Uqr=uT();oT.exports=Uqr});var cT=s((x0e,vT)=>{"use strict";function Hqr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}vT.exports=Hqr});var pT=s((Y0e,lT)=>{"use strict";var Wqr=cT();lT.exports=Wqr});var mT=s((Z0e,gT)=>{"use strict";var Dqr=y(),zqr=pT();function Xqr(r,e,t){if(!zqr(r,e))throw new TypeError(Dqr("invalid argument. %s must be broadcast compatible.",t))}gT.exports=Xqr});var hT=s(($0e,dT)=>{"use strict";var Jqr=mT();dT.exports=Jqr});var yT=s((Q0e,qT)=>{"use strict";function xqr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}qT.exports=xqr});var wT=s((K0e,bT)=>{"use strict";var Yqr=yT();bT.exports=Yqr});var NT=s((rse,ET)=>{"use strict";var Zqr=y(),$qr=wT();function Qqr(r,e,t,i){if(!$qr(r,e))throw new TypeError(Zqr("invalid argument. %s must be broadcast compatible with %s.",t,i))}ET.exports=Qqr});var OT=s((ese,AT)=>{"use strict";var Kqr=NT();AT.exports=Kqr});var TT=s((tse,ST)=>{"use strict";var ryr=y();function eyr(r,e){if(r===void 0)throw new Error(ryr("invalid invocation. Must provide %s.",e))}ST.exports=eyr});var a1=s((ise,IT)=>{"use strict";var tyr=TT();IT.exports=tyr});var LT=s((nse,_T)=>{"use strict";var iyr=y();function nyr(r,e,t,i){if(!(r>e))throw new TypeError(iyr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}_T.exports=nyr});var RT=s((ase,PT)=>{"use strict";var ayr=LT();PT.exports=ayr});var MT=s((sse,FT)=>{"use strict";var syr=y();function uyr(r,e,t,i){if(!(r>=e))throw new TypeError(syr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}FT.exports=uyr});var kT=s((use,BT)=>{"use strict";var oyr=MT();BT.exports=oyr});var CT=s((ose,jT)=>{"use strict";var fyr=Cr().isPrimitive,vyr=y();function cyr(r,e){if(!fyr(r))throw new TypeError(vyr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}jT.exports=cyr});var VT=s((fse,GT)=>{"use strict";var lyr=CT();GT.exports=lyr});var HT=s((vse,UT)=>{"use strict";var pyr=y();function gyr(r,e,t,i){if(!(r<e))throw new TypeError(pyr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}UT.exports=gyr});var DT=s((cse,WT)=>{"use strict";var myr=HT();WT.exports=myr});var XT=s((lse,zT)=>{"use strict";var dyr=y();function hyr(r,e,t,i){if(!(r<=e))throw new TypeError(dyr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}zT.exports=hyr});var xT=s((pse,JT)=>{"use strict";var qyr=XT();JT.exports=qyr});var ZT=s((gse,YT)=>{"use strict";var yyr=Je().isPrimitive,byr=y();function wyr(r,e){if(!yyr(r))throw new TypeError(byr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}YT.exports=wyr});var QT=s((mse,$T)=>{"use strict";var Eyr=ZT();$T.exports=Eyr});var rI=s((dse,KT)=>{"use strict";var Nyr=$2().isPrimitive,Ayr=y();function Oyr(r,e){if(!Nyr(r))throw new TypeError(Ayr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}KT.exports=Oyr});var tI=s((hse,eI)=>{"use strict";var Syr=rI();eI.exports=Syr});var nI=s((qse,iI)=>{"use strict";var Tyr=k().isPrimitive,Iyr=y();function _yr(r,e){if(!Tyr(r))throw new TypeError(Iyr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}iI.exports=_yr});var sI=s((yse,aI)=>{"use strict";var Lyr=nI();aI.exports=Lyr});var oI=s((bse,uI)=>{"use strict";var Pyr=y();function Ryr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(Pyr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}uI.exports=Ryr});var vI=s((wse,fI)=>{"use strict";var Fyr=oI();fI.exports=Fyr});var lI=s((Ese,cI)=>{"use strict";var Myr=ae().isPrimitive,Byr=y();function kyr(r,e){if(!Myr(r))throw new TypeError(Byr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}cI.exports=kyr});var s1=s((Nse,pI)=>{"use strict";var jyr=lI();pI.exports=jyr});var mI=s((Ase,gI)=>{"use strict";var Cyr=D().isPrimitive,Gyr=y();function Vyr(r,e){if(!Cyr(r))throw new TypeError(Gyr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}gI.exports=Vyr});var hI=s((Ose,dI)=>{"use strict";var Uyr=mI();dI.exports=Uyr});var u1=s((Sse,qI)=>{"use strict";var Hyr=k().isPrimitive;function Wyr(r){return Hyr(r)&&r>=0&&r<=1}qI.exports=Wyr});var o1=s((Tse,yI)=>{"use strict";var Dyr=k().isObject;function zyr(r){return Dyr(r)&&r.valueOf()>=0&&r.valueOf()<=1}yI.exports=zyr});var wI=s((Ise,bI)=>{"use strict";var Xyr=u1(),Jyr=o1();function xyr(r){return Xyr(r)||Jyr(r)}bI.exports=xyr});var qn=s((_se,NI)=>{"use strict";var EI=w(),f1=wI(),Yyr=u1(),Zyr=o1();EI(f1,"isPrimitive",Yyr);EI(f1,"isObject",Zyr);NI.exports=f1});var OI=s((Lse,AI)=>{"use strict";var $yr=qn().isPrimitive,Qyr=y();function Kyr(r,e){if(!$yr(r))throw new TypeError(Qyr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}AI.exports=Kyr});var TI=s((Pse,SI)=>{"use strict";var rbr=OI();SI.exports=rbr});var _I=s((Rse,II)=>{"use strict";var ebr=mr(),tbr=y();function ibr(r,e){if(!ebr(r))throw new TypeError(tbr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}II.exports=ibr});var PI=s((Fse,LI)=>{"use strict";var nbr=_I();LI.exports=nbr});var FI=s((Mse,RI)=>{"use strict";function abr(r){return r.length===1||r[0].length===1}RI.exports=abr});var BI=s((Bse,MI)=>{"use strict";var sbr=FI();MI.exports=sbr});var jI=s((kse,kI)=>{"use strict";var ubr=mr(),obr=BI();function fbr(r){return ubr(r)&&obr(r)}kI.exports=fbr});var GI=s((jse,CI)=>{"use strict";var vbr=jI();CI.exports=vbr});var UI=s((Cse,VI)=>{"use strict";var cbr=y(),lbr=GI();function pbr(r,e){if(!lbr(r))throw new TypeError(cbr("invalid argument. %s must consist of only a single row or a single column.",e))}VI.exports=pbr});var WI=s((Gse,HI)=>{"use strict";var gbr=UI();HI.exports=gbr});var zI=s((Vse,DI)=>{"use strict";function mbr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}DI.exports=mbr});var JI=s((Use,XI)=>{"use strict";var dbr=zI();XI.exports=dbr});var YI=s((Hse,xI)=>{"use strict";var hbr=y(),qbr=JI();function ybr(r,e,t){if(!qbr(r,e))throw new TypeError(hbr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}xI.exports=ybr});var $I=s((Wse,ZI)=>{"use strict";var bbr=YI();ZI.exports=bbr});var KI=s((Dse,QI)=>{"use strict";var wbr=K().isPrimitive,Ebr=y();function Nbr(r,e){if(!wbr(r))throw new TypeError(Ebr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}QI.exports=Nbr});var e_=s((zse,r_)=>{"use strict";var Abr=KI();r_.exports=Abr});var i_=s((Xse,t_)=>{"use strict";var Obr=y();function Sbr(r){throw new Error(Obr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}t_.exports=Sbr});var a_=s((Jse,n_)=>{"use strict";var Tbr=i_();n_.exports=Tbr});var o_=s((xse,u_)=>{"use strict";var s_=s1(),Ibr=a1();function _br(r,e,t){s_(r,"Number of rows"),s_(e,"Number of columns"),Ibr(t,"a pseudorandom number generator seed")}u_.exports=_br});var v_=s((Yse,f_)=>{"use strict";var Lbr=o_();f_.exports=Lbr});var l_=s((Zse,c_)=>{"use strict";var Z={};Z.isBetween=aT();Z.isBoolean=fT();Z.isBroadcastCompatible=hT();Z.isBroadcastCompatibleWith=OT();Z.isDefined=a1();Z.isGreaterThan=RT();Z.isGreaterThanEqual=kT();Z.isInteger=VT();Z.isLessThan=DT();Z.isLessThanEqual=xT();Z.isNonNegativeInteger=QT();Z.isNonNegativeNumber=tI();Z.isNumber=sI();Z.isOneOf=vI();Z.isPositiveInteger=s1();Z.isPositiveNumber=hI();Z.isProbability=TI();Z.isRange=PI();Z.isRange1d=WI();Z.isSameShape=$I();Z.isString=e_();Z.unrecognizedOptionName=a_();Z.verifyCommonPRNGArgs=v_();c_.exports=Z});var g_=s(($se,p_)=>{"use strict";var v1=4;function Pbr(r,e,t,i,n,a){var u,o,v,f;if(r<=0||e===0)return n;if(i===1&&a===1){if(v=r%v1,v>0)for(f=0;f<v;f++)n[f]+=e*t[f];if(r<v1)return n;for(f=v;f<r;f+=v1)n[f]+=e*t[f],n[f+1]+=e*t[f+1],n[f+2]+=e*t[f+2],n[f+3]+=e*t[f+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,f=0;f<r;f++)n[o]+=e*t[u],u+=i,o+=a;return n}p_.exports=Pbr});var d_=s((Qse,m_)=>{"use strict";var yn=4;function Rbr(r,e,t,i,n,a,u,o){var v,f,c,l;if(r<=0||e===0)return a;if(v=n,f=o,i===1&&u===1){if(c=r%yn,c>0)for(l=0;l<c;l++)a[f]+=e*t[v],v+=i,f+=u;if(r<yn)return a;for(l=c;l<r;l+=yn)a[f]+=e*t[v],a[f+1]+=e*t[v+1],a[f+2]+=e*t[v+2],a[f+3]+=e*t[v+3],v+=yn,f+=yn;return a}for(l=0;l<r;l++)a[f]+=e*t[v],v+=i,f+=u;return a}m_.exports=Rbr});var c1=s((Kse,q_)=>{"use strict";var Fbr=w(),h_=g_(),Mbr=d_();Fbr(h_,"ndarray",Mbr);q_.exports=h_});var b_=s((rue,y_)=>{"use strict";var l1={};l1.daxpy=c1().ndarray;l1.saxpy=c1().ndarray;y_.exports=l1});var E_=s((eue,w_)=>{"use strict";function Bbr(r){return r*r}w_.exports=Bbr});var Qa=s((tue,N_)=>{"use strict";var kbr=E_();N_.exports=kbr});var O_=s((iue,A_)=>{"use strict";function jbr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}A_.exports=jbr});var T_=s((nue,S_)=>{"use strict";function Cbr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}S_.exports=Cbr});var L_=s((aue,__)=>{"use strict";var Gbr=E(),Vbr=G(),I_=xa(),Ubr=O_(),Hbr=T_(),Wbr=6123233995736766e-32;function Dbr(r){var e,t,i,n,a;if(Gbr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*Hbr(t),t=Vbr(t+t),a=I_-t,t=t*n-Wbr,a-=t,a+=I_;else{if(i<1e-8)return r;t=i*i,a=t*Ubr(t),a=i*a+i}return e?-a:a}__.exports=Dbr});var jt=s((sue,P_)=>{"use strict";var zbr=L_();P_.exports=zbr});var B_=s((uue,M_)=>{"use strict";var Xbr=E(),R_=jt(),Jbr=G(),F_=xa(),xbr=6123233995736766e-32;function Ybr(r){var e;return Xbr(r)?NaN:r<-1||r>1?NaN:r>.5?2*R_(Jbr(.5-.5*r)):(e=F_-R_(r),e+=xbr,e+=F_,e)}M_.exports=Ybr});var bn=s((oue,k_)=>{"use strict";var Zbr=B_();k_.exports=Zbr});var V_=s((fue,G_)=>{"use strict";var $br=E(),Qbr=De(),j_=G(),Kbr=ba(),C_=P(),rwr=1<<28;function ewr(r){var e;return $br(r)||r<1?NaN:r===1?0:r>=rwr?C_(r)+Kbr:r>2?C_(2*r-1/(r+j_(r*r-1))):(e=r-1,Qbr(e+j_(2*e+e*e)))}G_.exports=ewr});var H_=s((vue,U_)=>{"use strict";var twr=V_();U_.exports=twr});var D_=s((cue,W_)=>{"use strict";var iwr=Ya();function nwr(r){return iwr(1/r)}W_.exports=nwr});var X_=s((lue,z_)=>{"use strict";var awr=D_();z_.exports=awr});var x_=s((pue,J_)=>{"use strict";var swr=jt();function uwr(r){return swr(1+r)}J_.exports=uwr});var Z_=s((gue,Y_)=>{"use strict";var owr=x_();Y_.exports=owr});var Q_=s((mue,$_)=>{"use strict";var fwr=jt();function vwr(r){return fwr(1-r)}$_.exports=vwr});var rL=s((due,K_)=>{"use strict";var cwr=Q_();K_.exports=cwr});var tL=s((hue,eL)=>{"use strict";var lwr=jt();function pwr(r){return lwr(1/r)}eL.exports=pwr});var nL=s((que,iL)=>{"use strict";var gwr=tL();iL.exports=gwr});var oL=s((yue,uL)=>{"use strict";var mwr=Rr(),dwr=E(),hwr=De(),aL=G(),qwr=ba(),sL=P(),ywr=1/(1<<28),bwr=1<<28;function wwr(r){var e,t,i;return dwr(r)||mwr(r)?r:(r<0&&(r=-r,e=!0),r<ywr?i=r:r>bwr?i=sL(r)+qwr:r>2?i=sL(2*r+1/(aL(r*r+1)+r)):(t=r*r,i=hwr(r+t/(1+aL(1+t)))),e?-i:i)}uL.exports=wwr});var p1=s((bue,fL)=>{"use strict";var Ewr=oL();fL.exports=Ewr});var cL=s((wue,vL)=>{"use strict";var Nwr=p1();function Awr(r){return Nwr(1/r)}vL.exports=Awr});var pL=s((Eue,lL)=>{"use strict";var Owr=cL();lL.exports=Owr});var mL=s((Nue,gL)=>{"use strict";var Swr=bn(),Twr=G();function Iwr(r){return 2*Swr(Twr(r))}gL.exports=Iwr});var hL=s((Aue,dL)=>{"use strict";var _wr=mL();dL.exports=_wr});var yL=s((Oue,qL)=>{"use strict";var Lwr=jt(),Pwr=G();function Rwr(r){return 2*Lwr(Pwr(r))}qL.exports=Rwr});var wL=s((Sue,bL)=>{"use strict";var Fwr=yL();bL.exports=Fwr});var AL=s((Tue,NL)=>{"use strict";var Mwr=E(),EL=De(),Bwr=_(),kwr=V(),jwr=1/(1<<28);function Cwr(r){var e,t;return Mwr(r)||r<-1||r>1?NaN:r===1?Bwr:r===-1?kwr:(r<0&&(e=!0,r=-r),r<jwr?e?-r:r:(r<.5?(t=r+r,t=.5*EL(t+t*r/(1-r))):t=.5*EL((r+r)/(1-r)),e?-t:t))}NL.exports=Cwr});var SL=s((Iue,OL)=>{"use strict";var Gwr=AL();OL.exports=Gwr});var IL=s((_ue,TL)=>{"use strict";var Vwr=bn();function Uwr(r){return Vwr(1+r)}TL.exports=Uwr});var LL=s((Lue,_L)=>{"use strict";var Hwr=IL();_L.exports=Hwr});var RL=s((Pue,PL)=>{"use strict";var Wwr=bn();function Dwr(r){return Wwr(1-r)}PL.exports=Dwr});var ML=s((Rue,FL)=>{"use strict";var zwr=RL();FL.exports=zwr});var jL=s((Fue,kL)=>{"use strict";var BL=-.16666666666666632,Xwr=.00833333333332249,Jwr=-.0001984126982985795,xwr=27557313707070068e-22,Ywr=-25050760253406863e-24,Zwr=158969099521155e-24,$wr=.0416666666666666,Qwr=-.001388888888887411,Kwr=2480158728947673e-20,rEr=-27557314351390663e-23,eEr=2087572321298175e-24,tEr=-11359647557788195e-27;function iEr(r,e,t,i,n){var a,u,o,v,f;return f=r*r,v=f*f,u=Xwr+f*(Jwr+f*xwr)+f*v*(Ywr+f*Zwr),o=f*r,e===0?t[n]=r+o*(BL+f*u):t[n]=r-(f*(.5*e-o*u)-e-o*BL),u=f*($wr+f*(Qwr+f*Kwr)),u+=v*v*(rEr+f*(eEr+f*tEr)),a=.5*f,v=1-a,t[n+i]=v+(1-v-a+(f*u-r*e)),t}kL.exports=iEr});var m1=s((Mue,GL)=>{"use strict";var nEr=xr(),aEr=Ji(),sEr=tr(),uEr=Zi(),CL=jL(),oEr=1072243195,fEr=1044381696,g1=[0,0];function vEr(r,e,t,i){var n,a;if(n=sEr(r),n&=nEr,n<=oEr)return n<fEr&&(r|0)===0&&(e[i]=r,e[i+t]=0),CL(r,0,e,t,i);if(n>=aEr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=uEr(r,g1),CL(g1[0],g1[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}GL.exports=vEr});var UL=s((Bue,VL)=>{"use strict";var cEr=m1();function lEr(r){return cEr(r,[0,0],1,0)}VL.exports=lEr});var wn=s((kue,WL)=>{"use strict";var pEr=w(),HL=UL(),gEr=m1();pEr(HL,"assign",gEr);WL.exports=HL});var zL=s((jue,DL)=>{"use strict";function mEr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}DL.exports=mEr});var JL=s((Cue,XL)=>{"use strict";function dEr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}XL.exports=dEr});var YL=s((Gue,xL)=>{"use strict";function hEr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}xL.exports=hEr});var $L=s((Vue,ZL)=>{"use strict";function qEr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}ZL.exports=qEr});var KL=s((Uue,QL)=>{"use strict";var yEr=G(),bEr=wn().assign,wEr=_(),EEr=zL(),NEr=JL(),AEr=YL(),OEr=$L(),SEr=.5641895835477563,TEr=2.404825557695773,IEr=5.520078110286311,_Er=616,LEr=-.0014244423042272315,PEr=1413,REr=.0005468602863106496,En=[0,0];function FEr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===wEr?0:r===0?1:r<=4?(a=r*r,n=EEr(a),u=(r+TEr)*(r-_Er/256-LEr),u*n):r<=8?(a=1-r*r/64,n=NEr(a),u=(r+IEr)*(r-PEr/256-REr),u*n):(a=8/r,i=a*a,e=AEr(i),t=OEr(i),u=SEr/yEr(r),bEr(r,En,1,0),u*(e*(En[1]+En[0])-a*t*(En[0]-En[1])))}QL.exports=FEr});var d1=s((Hue,rP)=>{"use strict";var MEr=KL();rP.exports=MEr});var Ka=s((Wue,eP)=>{"use strict";var BEr=1.772453850905516;eP.exports=BEr});var iP=s((Due,tP)=>{"use strict";function kEr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}tP.exports=kEr});var aP=s((zue,nP)=>{"use strict";function jEr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}nP.exports=jEr});var uP=s((Xue,sP)=>{"use strict";function CEr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}sP.exports=CEr});var fP=s((Jue,oP)=>{"use strict";function GEr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}oP.exports=GEr});var cP=s((xue,vP)=>{"use strict";var VEr=G(),UEr=J(),HEr=wn().assign,WEr=_(),DEr=Ka(),zEr=iP(),XEr=aP(),JEr=uP(),xEr=fP(),YEr=3.8317059702075125,ZEr=7.015586669815619,$Er=981,QEr=-.0003252797924876844,KEr=1796,rNr=-38330184381246464e-21,Nn=[0,0];function eNr(r){var e,t,i,n,a,u,o,v;return v=UEr(r),r===0||v===WEr?0:(v<=4?(u=r*r,a=zEr(u),o=v*(v+YEr)*(v-$Er/256-QEr),e=o*a):v<=8?(u=r*r,a=XEr(u),o=v*(v+ZEr)*(v-KEr/256-rNr),e=o*a):(u=8/v,n=u*u,t=JEr(n),i=xEr(n),o=1/(VEr(v)*DEr),HEr(v,Nn,1,0),e=o*(t*(Nn[0]-Nn[1])+u*i*(Nn[0]+Nn[1]))),r<0&&(e*=-1),e)}vP.exports=eNr});var h1=s((Yue,lP)=>{"use strict";var tNr=cP();lP.exports=tNr});var gP=s((Zue,pP)=>{"use strict";function iNr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}pP.exports=iNr});var dP=s(($ue,mP)=>{"use strict";function nNr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}mP.exports=nNr});var qP=s((Que,hP)=>{"use strict";function aNr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}hP.exports=aNr});var bP=s((Kue,yP)=>{"use strict";function sNr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}yP.exports=sNr});var EP=s((roe,wP)=>{"use strict";function uNr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}wP.exports=uNr});var TP=s((eoe,SP)=>{"use strict";var q1=P(),oNr=G(),fNr=_r(),vNr=Ka(),cNr=V(),lNr=_(),pNr=wn().assign,y1=d1(),gNr=gP(),mNr=dP(),dNr=qP(),hNr=bP(),qNr=EP(),yNr=1/vNr,b1=2/fNr,NP=.8935769662791675,AP=3.957678419314858,OP=7.086051060301773,bNr=228,wNr=.0029519662791675214,ENr=1013,NNr=.0006471693148578684,ANr=1814,ONr=.00011356030177269763,An=[0,0];function SNr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?cNr:r===lNr?0:r<=3?(a=r*r,u=q1(r/NP)*y1(r)*b1,n=gNr(a),o=(r+NP)*(r-bNr/256-wNr),u+o*n):r<=5.5?(a=r*r,u=q1(r/AP)*y1(r)*b1,n=mNr(a),o=(r+AP)*(r-ENr/256-NNr),u+o*n):r<=8?(a=r*r,u=q1(r/OP)*y1(r)*b1,n=dNr(a),o=(r+OP)*(r-ANr/256-ONr),u+o*n):(a=8/r,i=a*a,e=hNr(i),t=qNr(i),o=yNr/oNr(r),pNr(r,An,1,0),o*(e*(An[0]-An[1])+a*t*(An[1]+An[0])))}SP.exports=SNr});var _P=s((toe,IP)=>{"use strict";var TNr=TP();IP.exports=TNr});var PP=s((ioe,LP)=>{"use strict";function INr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}LP.exports=INr});var FP=s((noe,RP)=>{"use strict";function _Nr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}RP.exports=_Nr});var BP=s((aoe,MP)=>{"use strict";function LNr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}MP.exports=LNr});var jP=s((soe,kP)=>{"use strict";function PNr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}kP.exports=PNr});var DP=s((uoe,WP)=>{"use strict";var CP=P(),RNr=G(),FNr=_r(),MNr=Ka(),BNr=V(),kNr=_(),jNr=wn().assign,GP=h1(),CNr=PP(),GNr=FP(),VNr=BP(),UNr=jP(),HNr=1/MNr,VP=2/FNr,UP=2.197141326031017,HP=5.429681040794135,WNr=562,DNr=.001828826031017035,zNr=1390,XNr=-6459205864867228e-21,On=[0,0];function JNr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?BNr:r===kNr?0:r<=4?(a=r*r,u=CP(r/UP)*GP(r)*VP,n=CNr(a),o=(r+UP)*(r-WNr/256-DNr)/r,u+o*n):r<=8?(a=r*r,u=CP(r/HP)*GP(r)*VP,n=GNr(a),o=(r+HP)*(r-zNr/256-XNr)/r,u+o*n):(a=8/r,i=a*a,e=VNr(i),t=UNr(i),o=HNr/RNr(r),jNr(r,On,1,0),o*(a*t*(On[0]-On[1])-e*(On[0]+On[1])))}WP.exports=JNr});var XP=s((ooe,zP)=>{"use strict";var xNr=DP();zP.exports=xNr});var YP=s((foe,xP)=>{"use strict";var YNr=E(),ZNr=Rr(),$Nr=J(),JP=St(),QNr=Tt(),KNr=Q(),w1=_r(),rAr=sn(),eAr=rAr+1;function tAr(r){var e,t,i,n;return YNr(r)?NaN:ZNr(r)?NaN:(e=$Nr(r),e>eAr?1:(t=KNr(e),i=e-t,i===.5?0:(i<.25?n=JP(w1*i):i<.75?(i=.5-i,n=QNr(w1*i)):(i=1-i,n=-JP(w1*i)),t%2===1?-n:n)))}xP.exports=tAr});var $P=s((voe,ZP)=>{"use strict";var iAr=YP();ZP.exports=iAr});var KP=s((coe,QP)=>{"use strict";var nAr=1.618033988749895;QP.exports=nAr});var eR=s((loe,rR)=>{"use strict";var aAr=E(),sAr=$P(),uAr=W(),oAr=KP(),fAr=_(),vAr=V(),cAr=2.23606797749979;function lAr(r){var e,t;return aAr(r)||r===fAr||r===vAr?NaN:(e=uAr(oAr,r),t=sAr(r)/e,(e-t)/cAr)}rR.exports=lAr});var iR=s((poe,tR)=>{"use strict";var pAr=eR();tR.exports=pAr});var aR=s((goe,nR)=>{"use strict";function gAr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}nR.exports=gAr});var fR=s((moe,oR)=>{"use strict";var mAr=bo(),dAr=go(),sR=xr(),N1=tr(),hAr=re(),qAr=Rr(),uR=$t(),yAr=Qt(),bAr=E(),wAr=aR(),EAr=4294967295>>>0,NAr=3221225472>>>0,AAr=0x40000000000000,E1=2147483648>>>0,OAr=1>>>0,SAr=715094163>>>0,TAr=696219795>>>0,IAr=N1(mAr),Ct=[0>>>0,0>>>0];function _Ar(r){var e,t,i,n,a,u,o;return r===0||bAr(r)||qAr(r)?r:(t=N1(r)>>>0,e=(t&dAr)>>>0,t&=sR,t<IAr?(u=AAr*r,i=(N1(u)&sR)>>>0,i=(i/3>>>0)+TAr>>>0,u=uR(e|i,0)):(u=0,i=(t/3>>>0)+SAr>>>0,u=hAr(u,e|i)),n=u*u*(u/r),u*=wAr(n),yAr.assign(u,Ct,1,0),Ct[1]&E1?(Ct[0]+=OAr,Ct[1]&=~E1):Ct[1]|=E1,u=uR(Ct[0]&EAr,Ct[1]&NAr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}oR.exports=_Ar});var cR=s((doe,vR)=>{"use strict";var LAr=fR();vR.exports=LAr});var pR=s((hoe,lR)=>{"use strict";function PAr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}lR.exports=PAr});var mR=s((qoe,gR)=>{"use strict";function RAr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}gR.exports=RAr});var qR=s((yoe,hR)=>{"use strict";var FAr=tr(),MAr=pR(),BAr=mR(),dR=1048575,kAr=.3333333333333333;function jAr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=FAr(r),a=r-1,(dR&2+n)<3?a===0?0:a*a*(kAr*a-.5):(u=a/(2+a),o=u*u,n&=dR,c=n-398458|0,f=o*o,l=440401-n|0,t=f*MAr(f),i=o*BAr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}hR.exports=jAr});var ER=s((boe,wR)=>{"use strict";var yR=tr(),CAr=re(),GAr=ie(),VAr=E(),UAr=Jr(),HAr=V(),WAr=qR(),DAr=0x40000000000000,bR=.4342944818781689,zAr=25082946711645275e-27,XAr=.30102999566361177,JAr=3694239077158931e-28,xAr=1048575,YAr=2146435072,ZAr=1048576,$Ar=1072693248;function QAr(r){var e,t,i,n,a,u,o,v;return VAr(r)||r<0?NaN:r===0?HAr:(t=yR(r),u=0,t<ZAr&&(u-=54,r*=DAr,t=yR(r)),t>=YAr?r+r:(u+=(t>>20)-UAr|0,t&=xAr,a=t+614244&1048576|0,r=CAr(r,t|a^$Ar),u+=a>>20|0,o=u,n=WAr(r),r-=1,e=GAr(r,0),i=r-e,v=o*JAr+(r+n)*zAr,v+=(i+n)*bR+e*bR,v+o*XAr))}wR.exports=QAr});var AR=s((woe,NR)=>{"use strict";var KAr=ER();NR.exports=KAr});var SR=s((Eoe,OR)=>{"use strict";var rOr=E(),eOr=Rr(),tOr=W(),iOr=Q(),nOr=Xi(),aOr=AR(),sOr=h2(),uOr=q2(),oOr=_();function fOr(r){var e,t;return rOr(r)||eOr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=aOr(r),e===-1?t=iOr(t):t=nOr(t),t<=uOr?e*0:t>sOr?oOr:e*tOr(10,t))}OR.exports=fOr});var IR=s((Noe,TR)=>{"use strict";var vOr=SR();TR.exports=vOr});var LR=s((Aoe,_R)=>{"use strict";function cOr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}_R.exports=cOr});var RR=s((Ooe,PR)=>{"use strict";function lOr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}PR.exports=lOr});var BR=s((Soe,MR)=>{"use strict";var pOr=tr(),gOr=LR(),mOr=RR(),FR=1048575,dOr=.3333333333333333;function hOr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=pOr(r),a=r-1,(FR&2+n)<3?a===0?0:a*a*(dOr*a-.5):(u=a/(2+a),o=u*u,n&=FR,c=n-398458|0,f=o*o,l=440401-n|0,t=f*gOr(f),i=o*mOr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}MR.exports=hOr});var CR=s((Toe,jR)=>{"use strict";var qOr=tr(),yOr=re(),bOr=ie(),wOr=Qt(),EOr=E(),NOr=xr(),AOr=ia(),OOr=Jr(),SOr=V(),TOr=BR(),IOr=0x40000000000000,kR=1.4426950407214463,_Or=16751713164886512e-26,LOr=2146435072,POr=1048576,ROr=1072693248,A1=[0,0];function FOr(r){var e,t,i,n,a,u,o;if(EOr(r)||r<0)return NaN;if(wOr.assign(r,A1,1,0),i=A1[0],n=A1[1],o=0,i<POr){if((i&NOr|n)===0)return SOr;o-=54,r*=IOr,i=qOr(r)}return i>=LOr?r+r:(o+=(i>>20)-OOr|0,i&=AOr,u=i+614244&1048576|0,r=yOr(r,i|u^ROr),o+=u>>20|0,a=TOr(r),r-=1,e=bOr(r,0),t=r-e,(r+a)*_Or+(t+a)*kR+e*kR+o)}jR.exports=FOr});var VR=s((Ioe,GR)=>{"use strict";var MOr=CR();GR.exports=MOr});var HR=s((_oe,UR)=>{"use strict";var BOr=E(),kOr=Rr(),jOr=W(),COr=Q(),GOr=Xi(),VOr=VR(),UOr=lo(),HOr=po(),WOr=_();function DOr(r){var e,t;return BOr(r)||kOr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=VOr(r),t===HOr)?r:(e===-1?t=COr(t):t=GOr(t),t>UOr?WOr:e*jOr(2,t))}UR.exports=DOr});var DR=s((Loe,WR)=>{"use strict";var zOr=HR();WR.exports=zOr});var O1=s((Poe,zR)=>{"use strict";var XOr=.9189385332046728;zR.exports=XOr});var XR=s((Roe,JOr)=>{JOr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var JR=s((Foe,xOr)=>{xOr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var xR=s((Moe,YOr)=>{YOr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var ZR=s((Boe,YR)=>{"use strict";function ZOr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}YR.exports=ZOr});var QR=s((koe,$R)=>{"use strict";function $Or(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}$R.exports=$Or});var rF=s((joe,KR)=>{"use strict";function QOr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}KR.exports=QOr});var tF=s((Coe,eF)=>{"use strict";function KOr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}eF.exports=KOr});var nF=s((Goe,iF)=>{"use strict";function rSr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}iF.exports=rSr});var sF=s((Voe,aF)=>{"use strict";function eSr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}aF.exports=eSr});var cF=s((Uoe,vF)=>{"use strict";var tSr=E(),iSr=Ir(),nSr=J(),r0=nr(),aSr=Q(),sSr=ri(),uSr=rn(),uF=Ki(),oF=W(),oSr=P(),fSr=_(),vSr=V(),fF=We(),cSr=Uo(),lSr=O1(),pSr=XR(),gSr=JR(),mSr=xR(),dSr=ZR(),hSr=QR(),qSr=rF(),ySr=tF(),bSr=nF(),wSr=sF(),ESr=129,NSr=170,ASr=709,OSr=1.2433929443359375,SSr=.6986598968505859;function S1(r){var e,t,i,n,a,u;if(tSr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(iSr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=ESr)return-mSr[u]/(i+1)}else return(n&1)===0?gSr[n/2]:pSr[(n-3)/2];return nSr(r)<cSr?-.5-lSr*r:(t=1-r,r<0?aSr(r/2)===r/2?0:(e=r,r=t,t=e,r>NSr?(e=uF(.5*t)*2*S1(r),a=uSr(r),a-=r*oSr(fF),a>ASr?e<0?vSr:fSr:e*r0(a)):uF(.5*t)*2*oF(fF,-r)*sSr(r)*S1(r)):r<1?(e=dSr(t),e-=OSr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+hSr(t)):r<=4?(e=SSr+1/-t,e+qSr(r-2)):r<=7?(e=ySr(r-4),1+r0(e)):r<15?(e=bSr(r-7),1+r0(e)):r<36?(e=wSr(r-15),1+r0(e)):1+oF(2,-r))}vF.exports=S1});var pF=s((Hoe,lF)=>{"use strict";var TSr=cF();lF.exports=TSr});var mF=s((Woe,gF)=>{"use strict";var U={};U.abs=J();U.abs2=Qa();U.acos=bn();U.acosh=H_();U.acot=X_();U.acovercos=Z_();U.acoversin=rL();U.acsc=nL();U.acsch=pL();U.ahavercos=hL();U.ahaversin=wL();U.asin=jt();U.asinh=p1();U.atan=Ya();U.atanh=SL();U.avercos=LL();U.aversin=ML();U.besselj0=d1();U.besselj1=h1();U.bessely0=_P();U.bessely1=XP();U.binet=iR();U.cbrt=cR();U.ceil=Xi();U.ceil10=IR();U.ceil2=DR();U.cos=St();U.sin=Tt();U.sqrt=G();U.zeta=pF();gF.exports=U});var hF=s((Doe,dF)=>{"use strict";function ISr(r,e){return r+e}dF.exports=ISr});var yF=s((zoe,qF)=>{"use strict";var _Sr=hF();qF.exports=_Sr});var wF=s((Xoe,bF)=>{"use strict";function LSr(r,e){return r*e}bF.exports=LSr});var NF=s((Joe,EF)=>{"use strict";var PSr=wF();EF.exports=PSr});var OF=s((xoe,AF)=>{"use strict";function RSr(r,e){return r-e}AF.exports=RSr});var TF=s((Yoe,SF)=>{"use strict";var FSr=OF();SF.exports=FSr});var _F=s((Zoe,IF)=>{"use strict";var e0={};e0.add=yF();e0.mul=NF();e0.sub=TF();IF.exports=e0});var PF=s(($oe,LF)=>{"use strict";var MSr=Nt(),BSr=ir();function kSr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(BSr(r)==="[object Error]")return!0;r=MSr(r)}return!1}LF.exports=kSr});var FF=s((Qoe,RF)=>{"use strict";var jSr=PF();RF.exports=jSr});var T1=s((Koe,MF)=>{"use strict";function CSr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}MF.exports=CSr});var kF=s((r2e,BF)=>{"use strict";var GSr=T1(),VSr=GSr();BF.exports=VSr});var GF=s((e2e,CF)=>{"use strict";var USr=w(),jF=T1(),HSr=kF();USr(jF,"REGEXP",HSr);CF.exports=jF});var UF=s((t2e,VF)=>{"use strict";var WSr=K().isPrimitive,DSr=GF(),zSr=y();function XSr(r){if(!WSr(r))throw new TypeError(zSr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=DSr().exec(r),r?new RegExp(r[1],r[2]):null}VF.exports=XSr});var WF=s((i2e,HF)=>{"use strict";var JSr=UF();HF.exports=JSr});var zF=s((n2e,DF)=>{"use strict";var xSr=typeof Object.getOwnPropertyNames<"u";DF.exports=xSr});var xF=s((a2e,JF)=>{"use strict";var XF=xt(),YSr=XF.getOwnPropertyNames;function ZSr(r){return YSr(XF(r))}JF.exports=ZSr});var ZF=s((s2e,YF)=>{"use strict";var $Sr=xt(),QSr=Jt();function KSr(r){return QSr($Sr(r))}YF.exports=KSr});var QF=s((u2e,$F)=>{"use strict";var rTr=zF(),eTr=xF(),tTr=ZF(),I1;rTr?I1=eTr:I1=tTr;$F.exports=I1});var rM=s((o2e,KF)=>{"use strict";var iTr=typeof Object.getOwnPropertyDescriptor<"u";KF.exports=iTr});var tM=s((f2e,eM)=>{"use strict";var nTr=Object.getOwnPropertyDescriptor;function aTr(r,e){var t;return r==null?null:(t=nTr(r,e),t===void 0?null:t)}eM.exports=aTr});var nM=s((v2e,iM)=>{"use strict";var sTr=O();function uTr(r,e){return sTr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}iM.exports=uTr});var sM=s((c2e,aM)=>{"use strict";var oTr=rM(),fTr=tM(),vTr=nM(),_1;oTr?_1=fTr:_1=vTr;aM.exports=_1});var oM=s((l2e,uM)=>{"use strict";var cTr=typeof Buffer=="function"?Buffer:null;uM.exports=cTr});var vM=s((p2e,fM)=>{"use strict";var lTr=Et(),t0=oM();function pTr(){var r,e;if(typeof t0!="function")return!1;try{typeof t0.from=="function"?e=t0.from([1,2,3,4]):e=new t0([1,2,3,4]),r=lTr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}fM.exports=pTr});var lM=s((g2e,cM)=>{"use strict";var gTr=vM();cM.exports=gTr});var mM=s(i0=>{"use strict";i0.byteLength=dTr;i0.toByteArray=qTr;i0.fromByteArray=wTr;var Zr=[],Br=[],mTr=typeof Uint8Array<"u"?Uint8Array:Array,L1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Gt=0,pM=L1.length;Gt<pM;++Gt)Zr[Gt]=L1[Gt],Br[L1.charCodeAt(Gt)]=Gt;var Gt,pM;Br["-".charCodeAt(0)]=62;Br["_".charCodeAt(0)]=63;function gM(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function dTr(r){var e=gM(r),t=e[0],i=e[1];return(t+i)*3/4-i}function hTr(r,e,t){return(e+t)*3/4-t}function qTr(r){var e,t=gM(r),i=t[0],n=t[1],a=new mTr(hTr(r,i,n)),u=0,o=n>0?i-4:i,v;for(v=0;v<o;v+=4)e=Br[r.charCodeAt(v)]<<18|Br[r.charCodeAt(v+1)]<<12|Br[r.charCodeAt(v+2)]<<6|Br[r.charCodeAt(v+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=Br[r.charCodeAt(v)]<<2|Br[r.charCodeAt(v+1)]>>4,a[u++]=e&255),n===1&&(e=Br[r.charCodeAt(v)]<<10|Br[r.charCodeAt(v+1)]<<4|Br[r.charCodeAt(v+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function yTr(r){return Zr[r>>18&63]+Zr[r>>12&63]+Zr[r>>6&63]+Zr[r&63]}function bTr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(yTr(i));return n.join("")}function wTr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(bTr(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(Zr[e>>2]+Zr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(Zr[e>>10]+Zr[e>>4&63]+Zr[e<<2&63]+"=")),n.join("")}});var dM=s(P1=>{P1.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,v=(1<<o)-1,f=v>>1,c=-7,l=t?n-1:0,p=t?-1:1,m=r[e+l];for(l+=p,a=m&(1<<-c)-1,m>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-f;else{if(a===v)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-f}return(m?-1:1)*u*Math.pow(2,a-i)};P1.write=function(r,e,t,i,n,a){var u,o,v,f=a*8-n-1,c=(1<<f)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-u))<1&&(u--,v*=2),u+l>=1?e+=p/v:e+=p*Math.pow(2,1-l),e*v>=2&&(u++,v/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*v-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+m]=o&255,m+=h,o/=256,n-=8);for(u=u<<n|o,f+=n;f>0;r[t+m]=u&255,m+=h,u/=256,f-=8);r[t+m-h]|=d*128}});var FM=s(qi=>{"use strict";var R1=mM(),di=dM(),hM=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;qi.Buffer=b;qi.SlowBuffer=TTr;qi.INSPECT_MAX_BYTES=50;var n0=2147483647;qi.kMaxLength=n0;b.TYPED_ARRAY_SUPPORT=ETr();!b.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function ETr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(b.prototype,"parent",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.buffer}});Object.defineProperty(b.prototype,"offset",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.byteOffset}});function ue(r){if(r>n0)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,b.prototype),e}function b(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return k1(r)}return wM(r,e,t)}b.poolSize=8192;function wM(r,e,t){if(typeof r=="string")return ATr(r,e);if(ArrayBuffer.isView(r))return OTr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if($r(r,ArrayBuffer)||r&&$r(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&($r(r,SharedArrayBuffer)||r&&$r(r.buffer,SharedArrayBuffer)))return M1(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return b.from(i,e,t);let n=STr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return b.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}b.from=function(r,e,t){return wM(r,e,t)};Object.setPrototypeOf(b.prototype,Uint8Array.prototype);Object.setPrototypeOf(b,Uint8Array);function EM(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function NTr(r,e,t){return EM(r),r<=0?ue(r):e!==void 0?typeof t=="string"?ue(r).fill(e,t):ue(r).fill(e):ue(r)}b.alloc=function(r,e,t){return NTr(r,e,t)};function k1(r){return EM(r),ue(r<0?0:j1(r)|0)}b.allocUnsafe=function(r){return k1(r)};b.allocUnsafeSlow=function(r){return k1(r)};function ATr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!b.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=NM(r,e)|0,i=ue(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function F1(r){let e=r.length<0?0:j1(r.length)|0,t=ue(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function OTr(r){if($r(r,Uint8Array)){let e=new Uint8Array(r);return M1(e.buffer,e.byteOffset,e.byteLength)}return F1(r)}function M1(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,b.prototype),i}function STr(r){if(b.isBuffer(r)){let e=j1(r.length)|0,t=ue(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||G1(r.length)?ue(0):F1(r);if(r.type==="Buffer"&&Array.isArray(r.data))return F1(r.data)}function j1(r){if(r>=n0)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+n0.toString(16)+" bytes");return r|0}function TTr(r){return+r!=r&&(r=0),b.alloc(+r)}b.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==b.prototype};b.compare=function(e,t){if($r(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),$r(t,Uint8Array)&&(t=b.from(t,t.offset,t.byteLength)),!b.isBuffer(e)||!b.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};b.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};b.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return b.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=b.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if($r(u,Uint8Array))a+u.length>n.length?(b.isBuffer(u)||(u=b.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(b.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function NM(r,e){if(b.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||$r(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return B1(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return RM(r).length;default:if(n)return i?-1:B1(r).length;e=(""+e).toLowerCase(),n=!0}}b.byteLength=NM;function ITr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return CTr(this,e,t);case"utf8":case"utf-8":return OM(this,e,t);case"ascii":return kTr(this,e,t);case"latin1":case"binary":return jTr(this,e,t);case"base64":return MTr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return GTr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}b.prototype._isBuffer=!0;function Vt(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}b.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Vt(this,t,t+1);return this};b.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Vt(this,t,t+3),Vt(this,t+1,t+2);return this};b.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Vt(this,t,t+7),Vt(this,t+1,t+6),Vt(this,t+2,t+5),Vt(this,t+3,t+4);return this};b.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?OM(this,0,e):ITr.apply(this,arguments)};b.prototype.toLocaleString=b.prototype.toString;b.prototype.equals=function(e){if(!b.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:b.compare(this,e)===0};b.prototype.inspect=function(){let e="",t=qi.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};hM&&(b.prototype[hM]=b.prototype.inspect);b.prototype.compare=function(e,t,i,n,a){if($r(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),!b.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,v=Math.min(u,o),f=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<v;++l)if(f[l]!==c[l]){u=f[l],o=c[l];break}return u<o?-1:o<u?1:0};function AM(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,G1(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=b.from(e,i)),b.isBuffer(e))return e.length===0?-1:qM(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):qM(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function qM(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function v(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let f;if(n){let c=-1;for(f=t;f<u;f++)if(v(r,f)===v(e,c===-1?0:f-c)){if(c===-1&&(c=f),f-c+1===o)return c*a}else c!==-1&&(f-=f-c),c=-1}else for(t+o>u&&(t=u-o),f=t;f>=0;f--){let c=!0;for(let l=0;l<o;l++)if(v(r,f+l)!==v(e,l)){c=!1;break}if(c)return f}return-1}b.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};b.prototype.indexOf=function(e,t,i){return AM(this,e,t,i,!0)};b.prototype.lastIndexOf=function(e,t,i){return AM(this,e,t,i,!1)};function _Tr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(G1(o))return u;r[t+u]=o}return u}function LTr(r,e,t,i){return a0(B1(e,r.length-t),r,t,i)}function PTr(r,e,t,i){return a0(WTr(e),r,t,i)}function RTr(r,e,t,i){return a0(RM(e),r,t,i)}function FTr(r,e,t,i){return a0(DTr(e,r.length-t),r,t,i)}b.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return _Tr(this,e,t,i);case"utf8":case"utf-8":return LTr(this,e,t,i);case"ascii":case"latin1":case"binary":return PTr(this,e,t,i);case"base64":return RTr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return FTr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};b.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function MTr(r,e,t){return e===0&&t===r.length?R1.fromByteArray(r):R1.fromByteArray(r.slice(e,t))}function OM(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let v,f,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:v=r[n+1],(v&192)===128&&(l=(a&31)<<6|v&63,l>127&&(u=l));break;case 3:v=r[n+1],f=r[n+2],(v&192)===128&&(f&192)===128&&(l=(a&15)<<12|(v&63)<<6|f&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:v=r[n+1],f=r[n+2],c=r[n+3],(v&192)===128&&(f&192)===128&&(c&192)===128&&(l=(a&15)<<18|(v&63)<<12|(f&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return BTr(i)}var yM=4096;function BTr(r){let e=r.length;if(e<=yM)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=yM));return t}function kTr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function jTr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function CTr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=zTr[r[a]];return n}function GTr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}b.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,b.prototype),n};function ur(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}b.prototype.readUintLE=b.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};b.prototype.readUintBE=b.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};b.prototype.readUint8=b.prototype.readUInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]};b.prototype.readUint16LE=b.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]|this[e+1]<<8};b.prototype.readUint16BE=b.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]<<8|this[e+1]};b.prototype.readUint32LE=b.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};b.prototype.readUint32BE=b.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};b.prototype.readBigUInt64LE=Qe(function(e){e=e>>>0,hi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Sn(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});b.prototype.readBigUInt64BE=Qe(function(e){e=e>>>0,hi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Sn(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});b.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};b.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};b.prototype.readInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};b.prototype.readInt16LE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};b.prototype.readInt16BE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};b.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};b.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};b.prototype.readBigInt64LE=Qe(function(e){e=e>>>0,hi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Sn(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});b.prototype.readBigInt64BE=Qe(function(e){e=e>>>0,hi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Sn(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});b.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),di.read(this,e,!0,23,4)};b.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),di.read(this,e,!1,23,4)};b.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),di.read(this,e,!0,52,8)};b.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),di.read(this,e,!1,52,8)};function yr(r,e,t,i,n,a){if(!b.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}b.prototype.writeUintLE=b.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;yr(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};b.prototype.writeUintBE=b.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;yr(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};b.prototype.writeUint8=b.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||yr(this,e,t,1,255,0),this[t]=e&255,t+1};b.prototype.writeUint16LE=b.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||yr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeUint16BE=b.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||yr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeUint32LE=b.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||yr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};b.prototype.writeUint32BE=b.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||yr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function SM(r,e,t,i,n){PM(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function TM(r,e,t,i,n){PM(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}b.prototype.writeBigUInt64LE=Qe(function(e,t=0){return SM(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeBigUInt64BE=Qe(function(e,t=0){return TM(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);yr(this,e,t,i,v-1,-v)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);yr(this,e,t,i,v-1,-v)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||yr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};b.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||yr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||yr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||yr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};b.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||yr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};b.prototype.writeBigInt64LE=Qe(function(e,t=0){return SM(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});b.prototype.writeBigInt64BE=Qe(function(e,t=0){return TM(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function IM(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function _M(r,e,t,i,n){return e=+e,t=t>>>0,n||IM(r,e,t,4,34028234663852886e22,-34028234663852886e22),di.write(r,e,t,i,23,4),t+4}b.prototype.writeFloatLE=function(e,t,i){return _M(this,e,t,!0,i)};b.prototype.writeFloatBE=function(e,t,i){return _M(this,e,t,!1,i)};function LM(r,e,t,i,n){return e=+e,t=t>>>0,n||IM(r,e,t,8,17976931348623157e292,-17976931348623157e292),di.write(r,e,t,i,52,8),t+8}b.prototype.writeDoubleLE=function(e,t,i){return LM(this,e,t,!0,i)};b.prototype.writeDoubleBE=function(e,t,i){return LM(this,e,t,!1,i)};b.prototype.copy=function(e,t,i,n){if(!b.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};b.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!b.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=b.isBuffer(e)?e:b.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var mi={};function C1(r,e,t){mi[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}C1("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);C1("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);C1("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=bM(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=bM(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function bM(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function VTr(r,e,t){hi(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&Sn(e,r.length-(t+1))}function PM(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new mi.ERR_OUT_OF_RANGE("value",o,r)}VTr(i,n,a)}function hi(r,e){if(typeof r!="number")throw new mi.ERR_INVALID_ARG_TYPE(e,"number",r)}function Sn(r,e,t){throw Math.floor(r)!==r?(hi(r,t),new mi.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new mi.ERR_BUFFER_OUT_OF_BOUNDS:new mi.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var UTr=/[^+/0-9A-Za-z-_]/g;function HTr(r){if(r=r.split("=")[0],r=r.trim().replace(UTr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function B1(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function WTr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function DTr(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function RM(r){return R1.toByteArray(HTr(r))}function a0(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function $r(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function G1(r){return r!==r}var zTr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function Qe(r){return typeof BigInt>"u"?XTr:r}function XTr(){throw new Error("BigInt not supported")}});var BM=s((y2e,MM)=>{"use strict";var JTr=FM().Buffer;MM.exports=JTr});var jM=s((b2e,kM)=>{"use strict";function xTr(){throw new Error("not implemented")}kM.exports=xTr});var s0=s((w2e,CM)=>{"use strict";var YTr=lM(),ZTr=BM(),$Tr=jM(),V1;YTr()?V1=ZTr:V1=$Tr;CM.exports=V1});var VM=s((E2e,GM)=>{"use strict";var QTr=L(),KTr=s0(),rIr=QTr(KTr.from);GM.exports=rIr});var HM=s((N2e,UM)=>{"use strict";var eIr=Et(),tIr=y(),iIr=s0();function nIr(r){if(!eIr(r))throw new TypeError(tIr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return iIr.from(r)}UM.exports=nIr});var DM=s((A2e,WM)=>{"use strict";var aIr=Et(),sIr=y(),uIr=s0();function oIr(r){if(!aIr(r))throw new TypeError(sIr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new uIr(r)}WM.exports=oIr});var XM=s((O2e,zM)=>{"use strict";var fIr=VM(),vIr=HM(),cIr=DM(),U1;fIr?U1=vIr:U1=cIr;zM.exports=U1});var YM=s((S2e,xM)=>{"use strict";var lIr=fn(),pIr=Yt(),gIr=on(),mIr=un(),dIr=Zt(),hIr=Pt(),qIr=lr(),yIr=se(),bIr=dr(),JM;function wIr(r){return new lIr(r)}function EIr(r){return new pIr(r)}function NIr(r){return new gIr(r)}function AIr(r){return new mIr(r)}function OIr(r){return new dIr(r)}function SIr(r){return new hIr(r)}function TIr(r){return new qIr(r)}function IIr(r){return new yIr(r)}function _Ir(r){return new bIr(r)}function LIr(){var r={int8array:wIr,uint8array:EIr,uint8clampedarray:NIr,int16array:AIr,uint16array:OIr,int32array:SIr,uint32array:TIr,float32array:IIr,float64array:_Ir};return r}JM=LIr();xM.exports=JM});var rB=s((T2e,KM)=>{"use strict";var u0=O(),H1=mr(),ZM=Et(),PIr=FF(),$M=Zn(),RIr=WF(),FIr=Yn(),QM=Jt(),MIr=QF(),Tn=sM(),BIr=Nt(),In=Ce(),kIr=XM(),jIr=YM();function CIr(r){var e,t,i,n,a,u,o,v;for(e=[],n=[],o=Object.create(BIr(r)),e.push(r),n.push(o),t=MIr(r),v=0;v<t.length;v++)i=t[v],a=Tn(r,i),u0(a,"value")&&(u=H1(r[i])?[]:{},a.value=Ut(r[i],u,e,n,-1)),In(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function GIr(r){var e=[],t=[],i,n,a,u,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=QM(r),v=0;v<i.length;v++)u=i[v],n=Tn(r,u),u0(n,"value")&&(a=H1(r[u])?[]:{},n.value=Ut(r[u],a,e,t,-1)),In(o,u,n);return o}function Ut(r,e,t,i,n){var a,u,o,v,f,c,l,p,m,h;if(n-=1,typeof r!="object"||r===null)return r;if(ZM(r))return kIr(r);if(PIr(r))return GIr(r);if(o=$M(r),o==="date")return new Date(+r);if(o==="regexp")return RIr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=jIr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?CIr(r):{};if(u=QM(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=$M(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||ZM(p)){a==="object"?(v=Tn(r,c),u0(v,"value")&&(v.value=Ut(p)),In(e,c,v)):e[c]=Ut(p);continue}if(m=FIr(t,p),m!==-1){e[c]=i[m];continue}l=H1(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=Ut(p,l,t,i,n):(v=Tn(r,c),u0(v,"value")&&(v.value=Ut(p,l,t,i,n)),In(e,c,v))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],v=Tn(r,c),In(e,c,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}KM.exports=Ut});var tB=s((I2e,eB)=>{"use strict";var VIr=mr(),UIr=Je().isPrimitive,HIr=y(),WIr=_(),DIr=rB();function zIr(r,e){var t;if(arguments.length>1){if(!UIr(e))throw new TypeError(HIr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=WIr;return t=VIr(r)?new Array(r.length):{},DIr(r,t,[r],[t],e)}eB.exports=zIr});var _n=s((_2e,iB)=>{"use strict";var XIr=tB();iB.exports=XIr});var nB=s((L2e,JIr)=>{JIr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var sB=s((P2e,aB)=>{"use strict";var xIr=_n(),YIr=nB();function ZIr(){return xIr(YIr)}aB.exports=ZIr});var uB=s((R2e,$Ir)=>{$Ir.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var fB=s((F2e,oB)=>{"use strict";var QIr=_n(),KIr=uB();function r_r(){return QIr(KIr)}oB.exports=r_r});var vB=s((M2e,e_r)=>{e_r.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var lB=s((B2e,cB)=>{"use strict";var t_r=_n(),i_r=vB();function n_r(){return t_r(i_r)}cB.exports=n_r});var pB=s((k2e,a_r)=>{a_r.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var mB=s((j2e,gB)=>{"use strict";var s_r=pB();function u_r(){return s_r.slice()}gB.exports=u_r});var dB=s((C2e,o_r)=>{o_r.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var qB=s((G2e,hB)=>{"use strict";var f_r=_n(),v_r=dB();function c_r(){return f_r(v_r)}hB.exports=c_r});var bB=s((V2e,yB)=>{"use strict";var yi={};yi.AFINN_111=sB();yi.AFINN_96=fB();yi.ANSCOMBES_QUARTET=lB();yi.HERNDON_VENUS_SEMIDIAMETERS=mB();yi.NIGHTINGALES_ROSE=qB();yB.exports=yi});var EB=s((U2e,wB)=>{"use strict";var l_r=It(),p_r=G(),W1=E();function g_r(r,e,t){var i,n;return W1(r)||W1(e)||W1(t)||t<0?NaN:t===0?r<e?0:1:(i=t*p_r(2),n=r-e,.5*l_r(-n/i))}wB.exports=g_r});var AB=s((H2e,NB)=>{"use strict";var m_r=S(),d_r=Ia().factory,D1=E(),h_r=G(),q_r=It();function y_r(r,e){var t;if(D1(r)||D1(e)||e<0)return m_r(NaN);if(e===0)return d_r(r);return t=e*h_r(2),i;function i(n){var a;return D1(n)?NaN:(a=n-r,.5*q_r(-a/t))}}NB.exports=y_r});var TB=s((W2e,SB)=>{"use strict";var b_r=w(),OB=EB(),w_r=AB();b_r(OB,"factory",w_r);SB.exports=OB});var LB=s((D2e,_B)=>{"use strict";var IB=E(),E_r=P(),N_r=We(),A_r=Qo();function O_r(r,e){return IB(r)||IB(e)||e<=0?NaN:.5*E_r(N_r*A_r*e*e)}_B.exports=O_r});var RB=s((z2e,PB)=>{"use strict";var S_r=LB();PB.exports=S_r});var BB=s((X2e,MB)=>{"use strict";var FB=E();function T_r(r,e){return FB(r)||FB(e)||e<=0?NaN:0}MB.exports=T_r});var jB=s((J2e,kB)=>{"use strict";var I_r=BB();kB.exports=I_r});var GB=s((x2e,CB)=>{"use strict";var __r=Q(),L_r=[P_r,R_r,F_r,M_r,B_r,k_r,j_r,C_r,G_r,V_r,U_r,H_r,W_r,D_r,z_r,X_r,J_r,x_r,Y_r,Z_r,$_r,Q_r,K_r,rLr,eLr,tLr,iLr,nLr,aLr,sLr,uLr,oLr,fLr,vLr,cLr,lLr,pLr,gLr,mLr,dLr,hLr,qLr,yLr,bLr,wLr,ELr,NLr,ALr,OLr,SLr,TLr,ILr,_Lr,LLr,PLr,RLr,FLr,MLr,BLr,kLr,jLr,CLr,GLr,VLr,ULr,HLr,WLr,DLr,zLr,XLr,JLr,xLr,YLr,ZLr,$Lr,QLr,KLr,rPr,ePr,tPr,iPr,nPr,aPr,sPr,uPr,oPr,fPr,vPr,cPr,lPr,pPr,gPr,mPr,dPr,hPr,qPr,yPr,bPr,wPr,EPr,NPr];function P_r(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function R_r(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function F_r(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function M_r(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function B_r(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function k_r(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function j_r(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function C_r(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function G_r(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function V_r(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function U_r(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function H_r(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function W_r(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function D_r(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function z_r(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function X_r(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function J_r(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function x_r(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function Y_r(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function Z_r(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function $_r(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function Q_r(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function K_r(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function rLr(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function eLr(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function tLr(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function iLr(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function nLr(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function aLr(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function sLr(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function uLr(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function oLr(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function fLr(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function vLr(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function cLr(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function lLr(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function pLr(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function gLr(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function mLr(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function dLr(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function hLr(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function qLr(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function yLr(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function bLr(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function wLr(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function ELr(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function NLr(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function ALr(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function OLr(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function SLr(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function TLr(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function ILr(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function _Lr(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function LLr(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function PLr(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function RLr(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function FLr(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function MLr(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function BLr(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function kLr(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function jLr(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function CLr(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function GLr(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function VLr(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function ULr(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function HLr(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function WLr(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function DLr(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function zLr(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function XLr(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function JLr(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function xLr(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function YLr(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function ZLr(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function $Lr(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function QLr(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function KLr(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function rPr(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function ePr(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function tPr(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function iPr(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function nPr(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function aPr(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function sPr(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function uPr(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function oPr(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function fPr(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function vPr(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function cPr(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function lPr(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function pPr(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function gPr(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function mPr(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function dPr(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function hPr(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function qPr(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function yPr(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function bPr(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function wPr(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function EPr(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function NPr(){return 1}function APr(r){var e=__r(r),t=L_r[e];return t(2*r-(2*e+1))}CB.exports=APr});var DB=s((Y2e,WB)=>{"use strict";var VB=nr(),OPr=_(),UB=GB(),HB=.5641895835477563;function SPr(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?HB/r:(e=r*r,HB*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):UB(400/(4+r)):r<-26.7?OPr:(e=r*r,r<-6.1?2*VB(e):2*VB(e)-UB(400/(4-r)))}WB.exports=SPr});var z1=s((Z2e,zB)=>{"use strict";var TPr=DB();zB.exports=TPr});var xB=s(($2e,JB)=>{"use strict";var IPr=P(),_Pr=De(),LPr=Qa(),PPr=It(),RPr=z1(),FPr=V(),X1=E(),XB=.7071067811865475;function MPr(r,e,t){var i;return X1(r)||X1(e)||X1(t)||t<0?NaN:t===0?r<e?FPr:0:(i=(r-e)/t,i<-1?IPr(RPr(-i*XB)/2)-LPr(i)/2:_Pr(-PPr(i*XB)/2))}JB.exports=MPr});var $B=s((Q2e,ZB)=>{"use strict";var YB=E(),BPr=V();function kPr(r,e){return YB(r)||YB(e)?NaN:r<e?BPr:0}ZB.exports=kPr});var rk=s((K2e,KB)=>{"use strict";var jPr=S(),QB=E(),CPr=V();function GPr(r){if(QB(r))return jPr(NaN);return e;function e(t){return QB(t)?NaN:t<r?CPr:0}}KB.exports=GPr});var ik=s((r1e,tk)=>{"use strict";var VPr=w(),ek=$B(),UPr=rk();VPr(ek,"factory",UPr);tk.exports=ek});var uk=s((e1e,sk)=>{"use strict";var HPr=S(),WPr=ik().factory,nk=E(),DPr=De(),zPr=Qa(),XPr=It(),JPr=z1(),xPr=P(),ak=.7071067811865475;function YPr(r,e){if(nk(r)||nk(e)||e<0)return HPr(NaN);if(e===0)return WPr(r);return t;function t(i){var n=(i-r)/e;return n<-1?xPr(JPr(-n*ak)/2)-zPr(n)/2:DPr(-XPr(n*ak)/2)}}sk.exports=YPr});var vk=s((t1e,fk)=>{"use strict";var ZPr=w(),ok=xB(),$Pr=uk();ZPr(ok,"factory",$Pr);fk.exports=ok});var J1=s((i1e,ck)=>{"use strict";var QPr=1.8378770664093456;ck.exports=QPr});var gk=s((n1e,pk)=>{"use strict";var KPr=P(),lk=W(),rRr=J1(),eRr=V(),tRr=_(),x1=E();function iRr(r,e,t){var i,n,a;return x1(r)||x1(e)||x1(t)||t<0?NaN:t===0?r===e?tRr:eRr:(i=lk(t,2),n=-.5*(2*KPr(t)+rRr),a=-1/(2*i),n+a*lk(r-e,2))}pk.exports=iRr});var hk=s((a1e,dk)=>{"use strict";var nRr=_(),aRr=V(),mk=E();function sRr(r,e){return mk(r)||mk(e)?NaN:r===e?nRr:aRr}dk.exports=sRr});var bk=s((s1e,yk)=>{"use strict";var uRr=S(),oRr=_(),fRr=V(),qk=E();function vRr(r){if(qk(r))return uRr(NaN);return e;function e(t){return qk(t)?NaN:t===r?oRr:fRr}}yk.exports=vRr});var Nk=s((u1e,Ek)=>{"use strict";var cRr=w(),wk=hk(),lRr=bk();cRr(wk,"factory",lRr);Ek.exports=wk});var Tk=s((o1e,Sk)=>{"use strict";var pRr=S(),gRr=Nk().factory,mRr=J1(),Ak=E(),Ok=W(),dRr=P();function hRr(r,e){var t,i,n;if(Ak(r)||Ak(e)||e<0)return pRr(NaN);if(e===0)return gRr(r);return t=Ok(e,2),i=-.5*(2*dRr(e)+mRr),n=-1/(2*t),a;function a(u){return i+n*Ok(u-r,2)}}Sk.exports=hRr});var Lk=s((f1e,_k)=>{"use strict";var qRr=w(),Ik=gk(),yRr=Tk();qRr(Ik,"factory",yRr);_k.exports=Ik});var Fk=s((v1e,Rk)=>{"use strict";var Pk=E();function bRr(r,e){return Pk(r)||Pk(e)||e<=0?NaN:r}Rk.exports=bRr});var Bk=s((c1e,Mk)=>{"use strict";var wRr=Fk();Mk.exports=wRr});var Ck=s((l1e,jk)=>{"use strict";var kk=E();function ERr(r,e){return kk(r)||kk(e)||e<=0?NaN:r}jk.exports=ERr});var Vk=s((p1e,Gk)=>{"use strict";var NRr=Ck();Gk.exports=NRr});var Hk=s((g1e,Uk)=>{"use strict";var Y1=E(),ARr=nr(),ORr=W();function SRr(r,e,t){return Y1(r)||Y1(e)||Y1(t)||t<=0?NaN:ARr(e*r+.5*ORr(t*r,2))}Uk.exports=SRr});var Dk=s((m1e,Wk)=>{"use strict";var TRr=S(),Z1=E(),IRr=nr(),_Rr=W();function LRr(r,e){if(Z1(r)||Z1(e)||e<=0)return TRr(NaN);return t;function t(i){return Z1(i)?NaN:IRr(r*i+.5*_Rr(e*i,2))}}Wk.exports=LRr});var Jk=s((d1e,Xk)=>{"use strict";var PRr=w(),zk=Hk(),RRr=Dk();PRr(zk,"factory",RRr);Xk.exports=zk});var Zk=s((h1e,Yk)=>{"use strict";var xk=E();function FRr(r,e){return xk(r)||xk(e)||e<=0?NaN:r}Yk.exports=FRr});var Qk=s((q1e,$k)=>{"use strict";var MRr=Zk();$k.exports=MRr});var ej=s((y1e,rj)=>{"use strict";var BRr=nr(),Kk=W(),kRr=G(),jRr=We(),CRr=_(),$1=E();function GRr(r,e,t){var i,n,a;return $1(r)||$1(e)||$1(t)||t<0?NaN:t===0?r===e?CRr:0:(i=Kk(t,2),n=1/kRr(i*jRr),a=-1/(2*i),n*BRr(a*Kk(r-e,2)))}rj.exports=GRr});var nj=s((b1e,ij)=>{"use strict";var VRr=_(),tj=E();function URr(r,e){return tj(r)||tj(e)?NaN:r===e?VRr:0}ij.exports=URr});var uj=s((w1e,sj)=>{"use strict";var HRr=S(),WRr=_(),aj=E();function DRr(r){if(aj(r))return HRr(NaN);return e;function e(t){return aj(t)?NaN:t===r?WRr:0}}sj.exports=DRr});var vj=s((E1e,fj)=>{"use strict";var zRr=w(),oj=nj(),XRr=uj();zRr(oj,"factory",XRr);fj.exports=oj});var pj=s((N1e,lj)=>{"use strict";var JRr=S(),xRr=vj().factory,Q1=E(),YRr=G(),ZRr=nr(),cj=W(),$Rr=We();function QRr(r,e){var t,i,n;if(Q1(r)||Q1(e)||e<0)return JRr(NaN);if(e===0)return xRr(r);return t=cj(e,2),i=1/YRr(t*$Rr),n=-1/(2*t),a;function a(u){return Q1(u)?NaN:i*ZRr(n*cj(u-r,2))}}lj.exports=QRr});var dj=s((A1e,mj)=>{"use strict";var KRr=w(),gj=ej(),rFr=pj();KRr(gj,"factory",rFr);mj.exports=gj});var qj=s((O1e,hj)=>{"use strict";function eFr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}hj.exports=eFr});var bj=s((S1e,yj)=>{"use strict";function tFr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}yj.exports=tFr});var Ej=s((T1e,wj)=>{"use strict";function iFr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}wj.exports=iFr});var Aj=s((I1e,Nj)=>{"use strict";function nFr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}Nj.exports=nFr});var Sj=s((_1e,Oj)=>{"use strict";function aFr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}Oj.exports=aFr});var Lj=s((L1e,_j)=>{"use strict";var sFr=E(),Tj=G(),Ij=P(),uFr=_(),oFr=V(),fFr=qj(),vFr=bj(),cFr=Ej(),lFr=Aj(),pFr=Sj(),gFr=.08913147449493408,mFr=2.249481201171875,dFr=.807220458984375,hFr=.9399557113647461,qFr=.9836282730102539;function yFr(r){var e,t,i,n,a,u;return sFr(r)?NaN:r===1?uFr:r===-1?oFr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=fFr(t),e*(a*gFr+a*u)):n>=.25?(a=Tj(-2*Ij(n)),n-=.25,u=vFr(n),e*(a/(mFr+u))):(n=Tj(-Ij(n)),n<3?(i=n-1.125,u=cFr(i),e*(dFr*n+u*n)):n<6?(i=n-3,u=lFr(i),e*(hFr*n+u*n)):(i=n-6,u=pFr(i),e*(qFr*n+u*n))))}_j.exports=yFr});var K1=s((P1e,Pj)=>{"use strict";var bFr=Lj();Pj.exports=bFr});var Fj=s((R1e,Rj)=>{"use strict";var wFr=K1(),r3=E(),EFr=G();function NFr(r,e,t){var i,n;return r3(e)||r3(t)||r3(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*EFr(2),i+n*wFr(2*r-1))}Rj.exports=NFr});var Bj=s((F1e,Mj)=>{"use strict";var AFr=E();function OFr(r,e){return AFr(r)||r<0||r>1?NaN:e}Mj.exports=OFr});var Cj=s((M1e,jj)=>{"use strict";var SFr=S(),kj=E();function TFr(r){if(kj(r))return SFr(NaN);return e;function e(t){return kj(t)||t<0||t>1?NaN:r}}jj.exports=TFr});var e3=s((B1e,Vj)=>{"use strict";var IFr=w(),Gj=Bj(),_Fr=Cj();IFr(Gj,"factory",_Fr);Vj.exports=Gj});var Hj=s((k1e,Uj)=>{"use strict";var LFr=S(),PFr=e3().factory,RFr=K1(),t3=E(),FFr=G();function MFr(r,e){var t,i;if(t3(r)||t3(e)||e<0)return LFr(NaN);return e===0&&PFr(r),t=r,i=e*FFr(2),n;function n(a){return t3(a)||a<0||a>1?NaN:t+i*RFr(2*a-1)}}Uj.exports=MFr});var i3=s((j1e,Dj)=>{"use strict";var BFr=w(),Wj=Fj(),kFr=Hj();BFr(Wj,"factory",kFr);Dj.exports=Wj});var Jj=s((C1e,Xj)=>{"use strict";var zj=E();function jFr(r,e){return zj(r)||zj(e)||e<=0?NaN:0}Xj.exports=jFr});var Yj=s((G1e,xj)=>{"use strict";var CFr=Jj();xj.exports=CFr});var Qj=s((V1e,$j)=>{"use strict";var Zj=E();function GFr(r,e){return Zj(r)||Zj(e)||e<=0?NaN:e}$j.exports=GFr});var rC=s((U1e,Kj)=>{"use strict";var VFr=Qj();Kj.exports=VFr});var iC=s((H1e,tC)=>{"use strict";var eC=E();function UFr(r,e){return eC(r)||eC(e)||e<=0?NaN:e*e}tC.exports=UFr});var aC=s((W1e,nC)=>{"use strict";var HFr=iC();nC.exports=HFr});var uC=s((D1e,sC)=>{"use strict";var pr={};pr.normal={};pr.normal.cdf=TB();pr.normal.entropy=RB();pr.normal.kurtosis=jB();pr.normal.logcdf=vk();pr.normal.logpdf=Lk();pr.normal.mean=Bk();pr.normal.median=Vk();pr.normal.mgf=Jk();pr.normal.mode=Qk();pr.normal.pdf=dj();pr.normal.quantile=i3();pr.normal.skewness=Yj();pr.normal.stdev=rC();pr.normal.variance=aC();sC.exports=pr});var fC=s((z1e,oC)=>{"use strict";function WFr(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}oC.exports=WFr});var o0=s((X1e,vC)=>{"use strict";var DFr=fC();vC.exports=DFr});var lC=s((J1e,cC)=>{"use strict";function zFr(r){return r.toLowerCase()}cC.exports=zFr});var bi=s((x1e,pC)=>{"use strict";var XFr=lC();pC.exports=XFr});var mC=s((Y1e,gC)=>{"use strict";function JFr(r,e,t){return r.replace(e,t)}gC.exports=JFr});var Ht=s((Z1e,dC)=>{"use strict";var xFr=mC();dC.exports=xFr});var qC=s(($1e,hC)=>{"use strict";var YFr=typeof String.prototype.trim<"u";hC.exports=YFr});var n3=s((Q1e,yC)=>{"use strict";var ZFr=String.prototype.trim;yC.exports=ZFr});var NC=s((K1e,EC)=>{"use strict";var bC=n3(),$Fr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,wC="\u180E";function QFr(){return bC.call($Fr)===""&&bC.call(wC)===wC}EC.exports=QFr});var OC=s((r3e,AC)=>{"use strict";var KFr=Ht(),rMr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function eMr(r){return KFr(r,rMr,"$1")}AC.exports=eMr});var TC=s((e3e,SC)=>{"use strict";var tMr=n3();function iMr(r){return tMr.call(r)}SC.exports=iMr});var wi=s((t3e,IC)=>{"use strict";var nMr=qC(),aMr=NC(),sMr=OC(),uMr=TC(),a3;nMr&&aMr()?a3=uMr:a3=sMr;IC.exports=a3});var LC=s((i3e,_C)=>{"use strict";var oMr=o0(),fMr=bi(),f0=Ht(),vMr=wi(),cMr=/\s+/g,lMr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,pMr=/(?:\s|^)([^\s]+)(?=\s|$)/g,gMr=/([a-z0-9])([A-Z])/g;function mMr(r,e,t){return e=fMr(e),t===0?e:oMr(e)}function dMr(r){return r=f0(r,lMr," "),r=f0(r,cMr," "),r=f0(r,gMr,"$1 $2"),r=vMr(r),f0(r,pMr,mMr)}_C.exports=dMr});var RC=s((n3e,PC)=>{"use strict";var hMr=LC();PC.exports=hMr});var MC=s((a3e,FC)=>{"use strict";var qMr=K().isPrimitive,yMr=y(),bMr=RC();function wMr(r){if(!qMr(r))throw new TypeError(yMr("invalid argument. First argument must be a string. Value: `%s`.",r));return bMr(r)}FC.exports=wMr});var kC=s((s3e,BC)=>{"use strict";var EMr=MC();BC.exports=EMr});var CC=s((u3e,jC)=>{"use strict";var NMr=K().isPrimitive,AMr=y(),OMr=o0();function SMr(r){if(!NMr(r))throw new TypeError(AMr("invalid argument. First argument must be a string. Value: `%s`.",r));return OMr(r)}jC.exports=SMr});var VC=s((o3e,GC)=>{"use strict";var TMr=CC();GC.exports=TMr});var HC=s((f3e,UC)=>{"use strict";function IMr(r){return r.toUpperCase()}UC.exports=IMr});var DC=s((v3e,WC)=>{"use strict";var _Mr=HC();WC.exports=_Mr});var XC=s((c3e,zC)=>{"use strict";var LMr=DC(),s3=Ht(),PMr=wi(),RMr=/\s+/g,FMr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,MMr=/([a-z0-9])([A-Z])/g;function BMr(r){return r=s3(r,FMr," "),r=s3(r,MMr,"$1 $2"),r=PMr(r),r=s3(r,RMr,"_"),LMr(r)}zC.exports=BMr});var xC=s((l3e,JC)=>{"use strict";var kMr=XC();JC.exports=kMr});var ZC=s((p3e,YC)=>{"use strict";var jMr=K().isPrimitive,CMr=y(),GMr=xC();function VMr(r){if(!jMr(r))throw new TypeError(CMr("invalid argument. Must provide a string. Value: `%s`.",r));return GMr(r)}YC.exports=VMr});var QC=s((g3e,$C)=>{"use strict";var UMr=ZC();$C.exports=UMr});var rG=s((m3e,KC)=>{"use strict";var HMr=bi(),u3=Ht(),WMr=wi(),DMr=/\s+/g,zMr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,XMr=/([a-z0-9])([A-Z])/g;function JMr(r){return r=u3(r,zMr," "),r=u3(r,XMr,"$1 $2"),r=WMr(r),r=u3(r,DMr,"-"),HMr(r)}KC.exports=JMr});var tG=s((d3e,eG)=>{"use strict";var xMr=rG();eG.exports=xMr});var nG=s((h3e,iG)=>{"use strict";var YMr=K().isPrimitive,ZMr=y(),$Mr=tG();function QMr(r){if(!YMr(r))throw new TypeError(ZMr("invalid argument. Must provide a string. Value: `%s`.",r));return $Mr(r)}iG.exports=QMr});var sG=s((q3e,aG)=>{"use strict";var KMr=nG();aG.exports=KMr});var oG=s((y3e,uG)=>{"use strict";var rBr=K().isPrimitive,eBr=y(),tBr=bi();function iBr(r){if(!rBr(r))throw new TypeError(eBr("invalid argument. Must provide a string. Value: `%s`.",r));return tBr(r)}uG.exports=iBr});var vG=s((b3e,fG)=>{"use strict";var nBr=oG();fG.exports=nBr});var lG=s((w3e,cG)=>{"use strict";var aBr=o0(),sBr=bi(),v0=Ht(),uBr=wi(),oBr=/\s+/g,fBr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,vBr=/(?:\s|^)([^\s]+)(?=\s|$)/g,cBr=/([a-z0-9])([A-Z])/g;function lBr(r,e){return aBr(sBr(e))}function pBr(r){return r=v0(r,fBr," "),r=v0(r,oBr," "),r=v0(r,cBr,"$1 $2"),r=uBr(r),v0(r,vBr,lBr)}cG.exports=pBr});var gG=s((E3e,pG)=>{"use strict";var gBr=lG();pG.exports=gBr});var dG=s((N3e,mG)=>{"use strict";var mBr=K().isPrimitive,dBr=y(),hBr=gG();function qBr(r){if(!mBr(r))throw new TypeError(dBr("invalid argument. First argument must be a string. Value: `%s`.",r));return hBr(r)}mG.exports=qBr});var qG=s((A3e,hG)=>{"use strict";var yBr=dG();hG.exports=yBr});var bG=s((O3e,yG)=>{"use strict";var bBr=bi(),o3=Ht(),wBr=wi(),EBr=/\s+/g,NBr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,ABr=/([a-z0-9])([A-Z])/g;function OBr(r){return r=o3(r,NBr," "),r=o3(r,ABr,"$1 $2"),r=wBr(r),r=o3(r,EBr,"_"),bBr(r)}yG.exports=OBr});var EG=s((S3e,wG)=>{"use strict";var SBr=bG();wG.exports=SBr});var AG=s((T3e,NG)=>{"use strict";var TBr=K().isPrimitive,IBr=y(),_Br=EG();function LBr(r){if(!TBr(r))throw new TypeError(IBr("invalid argument. Must provide a string. Value: `%s`.",r));return _Br(r)}NG.exports=LBr});var SG=s((I3e,OG)=>{"use strict";var PBr=AG();OG.exports=PBr});var _G=s((_3e,IG)=>{"use strict";var RBr=I(),TG=O(),FBr=fr().isPrimitive,MBr=K().isPrimitive,f3=y();function BBr(r,e){return RBr(e)?TG(e,"flags")&&(r.flags=e.flags,!MBr(r.flags))?new TypeError(f3("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):TG(e,"capture")&&(r.capture=e.capture,!FBr(r.capture))?new TypeError(f3("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(f3("invalid argument. Options argument must be an object. Value: `%s`.",e))}IG.exports=BBr});var c0=s((L3e,PG)=>{"use strict";var kBr=_G(),LG=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function jBr(r){var e,t;if(arguments.length>0){if(e={},t=kBr(e,r),t)throw t;return e.capture?new RegExp("("+LG+")",e.flags):new RegExp(LG,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}PG.exports=jBr});var FG=s((P3e,RG)=>{"use strict";var CBr=c0(),GBr=CBr({capture:!0});RG.exports=GBr});var BG=s((R3e,MG)=>{"use strict";var VBr=c0(),UBr=VBr();MG.exports=UBr});var CG=s((F3e,jG)=>{"use strict";var kG=w(),v3=c0(),HBr=FG(),WBr=BG();kG(v3,"REGEXP",WBr);kG(v3,"REGEXP_CAPTURE",HBr);jG.exports=v3});var VG=s((M3e,GG)=>{"use strict";var DBr=CG().REGEXP;function zBr(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),DBr.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}GG.exports=zBr});var HG=s((B3e,UG)=>{"use strict";var XBr=VG();UG.exports=XBr});var DG=s((k3e,WG)=>{"use strict";var JBr=K().isPrimitive,xBr=y(),YBr=HG();function ZBr(r){if(!JBr(r))throw new TypeError(xBr("invalid argument. Must provide a string. Value: `%s`.",r));return YBr(r)}WG.exports=ZBr});var XG=s((j3e,zG)=>{"use strict";var $Br=DG();zG.exports=$Br});var xG=s((C3e,JG)=>{"use strict";function QBr(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}JG.exports=QBr});var ZG=s((G3e,YG)=>{"use strict";var KBr=xG();YG.exports=KBr});var QG=s((V3e,$G)=>{"use strict";var rkr=K().isPrimitive,ekr=y(),tkr=ZG();function ikr(r){if(!rkr(r))throw new TypeError(ekr("invalid argument. First argument must be a string. Value: `%s`.",r));return tkr(r)}$G.exports=ikr});var rV=s((U3e,KG)=>{"use strict";var nkr=QG();KG.exports=nkr});var tV=s((H3e,eV)=>{"use strict";var akr=K().isPrimitive,skr=y();function ukr(r){if(!akr(r))throw new TypeError(skr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}eV.exports=ukr});var nV=s((W3e,iV)=>{"use strict";var okr=tV();iV.exports=okr});var sV=s((D3e,aV)=>{"use strict";var Wr={};Wr.camelcase=kC();Wr.capitalize=VC();Wr.constantcase=QC();Wr.kebabcase=sG();Wr.lowercase=vG();Wr.pascalcase=qG();Wr.snakecase=SG();Wr.startcase=XG();Wr.uncapitalize=rV();Wr.uppercase=nV();aV.exports=Wr});var oV=s((z3e,uV)=>{"use strict";var fkr=Ce();function vkr(r,e,t,i){fkr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}uV.exports=vkr});var M=s((X3e,fV)=>{"use strict";var ckr=oV();fV.exports=ckr});var lV=s((J3e,cV)=>{"use strict";var vV=65535;function lkr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&vV)>>>0,o=(e&vV)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}cV.exports=lkr});var gV=s((x3e,pV)=>{"use strict";var pkr=lV();pV.exports=pkr});var c3=s((Y3e,mV)=>{"use strict";function gkr(r,e,t,i,n,a,u){var o,v,f,c,l,p,m;for(o=e.data,v=n.data,c=e.accessors[0],f=n.accessors[1],l=i,p=u,m=0;m<r;m++)f(v,p,c(o,l)),l+=t,p+=a;return e}mV.exports=gkr});var qV=s((Z3e,hV)=>{"use strict";var dV=$a(),mkr=c3(),l3=8;function dkr(r,e,t,i,n){var a,u,o,v,f,c;if(r<=0)return i;if(o=dV(e),v=dV(i),o.accessorProtocol||v.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,mkr(r,o,t,a,v,n,u),v.data;if(t===1&&n===1){if(f=r%l3,f>0)for(c=0;c<f;c++)i[c]=e[c];if(r<l3)return i;for(c=f;c<r;c+=l3)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}hV.exports=dkr});var wV=s(($3e,bV)=>{"use strict";var yV=$a(),hkr=c3(),Ln=8;function qkr(r,e,t,i,n,a,u){var o,v,f,c,l,p;if(r<=0)return n;if(f=yV(e),c=yV(n),f.accessorProtocol||c.accessorProtocol)return hkr(r,f,t,i,c,a,u),c.data;if(o=i,v=u,t===1&&a===1){if(l=r%Ln,l>0)for(p=0;p<l;p++)n[v]=e[o],o+=t,v+=a;if(r<Ln)return n;for(p=l;p<r;p+=Ln)n[v]=e[o],n[v+1]=e[o+1],n[v+2]=e[o+2],n[v+3]=e[o+3],n[v+4]=e[o+4],n[v+5]=e[o+5],n[v+6]=e[o+6],n[v+7]=e[o+7],o+=Ln,v+=Ln;return n}for(p=0;p<r;p++)n[v]=e[o],o+=t,v+=a;return n}bV.exports=qkr});var Ke=s((Q3e,NV)=>{"use strict";var ykr=w(),EV=qV(),bkr=wV();ykr(EV,"ndarray",bkr);NV.exports=EV});var OV=s((K3e,AV)=>{"use strict";function wkr(){}AV.exports=wkr});var TV=s((rfe,SV)=>{"use strict";var Ekr=OV();function Nkr(){return Ekr.name==="foo"}SV.exports=Nkr});var _V=s((efe,IV)=>{"use strict";var Akr=TV();IV.exports=Akr});var PV=s((tfe,LV)=>{"use strict";var Okr=L(),Skr=_V(),Tkr=y(),Ikr=Xu().REGEXP,_kr=Skr();function Lkr(r){if(Okr(r)===!1)throw new TypeError(Tkr("invalid argument. Must provide a function. Value: `%s`.",r));return _kr?r.name:Ikr.exec(r.toString())[1]}LV.exports=Lkr});var FV=s((ife,RV)=>{"use strict";var Pkr=PV();RV.exports=Pkr});var BV=s((nfe,MV)=>{"use strict";var Rkr=fn(),Fkr=Yt(),Mkr=on(),Bkr=un(),kkr=Zt(),jkr=Pt(),Ckr=lr(),Gkr=se(),Vkr=dr(),Ukr=[Vkr,Gkr,jkr,Ckr,Bkr,kkr,Rkr,Fkr,Mkr];MV.exports=Ukr});var kV=s((afe,Hkr)=>{Hkr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var HV=s((sfe,UV)=>{"use strict";var Wkr=Ge(),Dkr=FV(),GV=Nt(),zkr=Qu(),Xkr=dr(),jV=BV(),CV=kV(),l0=zkr()?GV(Xkr):VV;l0=Dkr(l0)==="TypedArray"?l0:VV;function VV(){}function Jkr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof l0)return!0;for(t=0;t<jV.length;t++)if(r instanceof jV[t])return!0;for(;r;){for(e=Wkr(r),t=0;t<CV.length;t++)if(CV[t]===e)return!0;r=GV(r)}return!1}UV.exports=Jkr});var DV=s((ufe,WV)=>{"use strict";var xkr=HV();WV.exports=xkr});var XV=s((ofe,zV)=>{"use strict";var Ykr=pn(),Zkr=mn(),$kr=[Zkr,Ykr];zV.exports=$kr});var JV=s((ffe,Qkr)=>{Qkr.exports=["Complex64Array","Complex128Array"]});var $V=s((vfe,ZV)=>{"use strict";var Kkr=Ge(),rjr=Nt(),xV=XV(),YV=JV();function ejr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<xV.length;t++)if(r instanceof xV[t])return!0;for(;r;){for(e=Kkr(r),t=0;t<YV.length;t++)if(YV[t]===e)return!0;r=rjr(r)}return!1}ZV.exports=ejr});var KV=s((cfe,QV)=>{"use strict";var tjr=$V();QV.exports=tjr});var eU=s((lfe,rU)=>{"use strict";var ijr=y();function njr(r,e){if(typeof e!="function")throw new TypeError(ijr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}rU.exports=njr});var iU=s((pfe,tU)=>{"use strict";var ajr=eU();tU.exports=ajr});var aU=s((gfe,nU)=>{"use strict";var sjr=fn(),ujr=Yt(),ojr=on(),fjr=un(),vjr=Zt(),cjr=Pt(),ljr=lr(),pjr=se(),gjr=dr(),mjr=pn(),djr=mn(),hjr=[[gjr,"Float64Array"],[pjr,"Float32Array"],[cjr,"Int32Array"],[ljr,"Uint32Array"],[fjr,"Int16Array"],[vjr,"Uint16Array"],[sjr,"Int8Array"],[ujr,"Uint8Array"],[ojr,"Uint8ClampedArray"],[mjr,"Complex64Array"],[djr,"Complex128Array"]];nU.exports=hjr});var uU=s((mfe,sU)=>{"use strict";var qjr=iU(),yjr=Ge(),bjr=Nt(),Ei=aU();function wjr(r){var e,t;for(t=0;t<Ei.length;t++)if(qjr(r,Ei[t][0]))return Ei[t][1];for(;r;){for(e=yjr(r),t=0;t<Ei.length;t++)if(e===Ei[t][1])return Ei[t][1];r=bjr(r)}}sU.exports=wjr});var fU=s((dfe,oU)=>{"use strict";var Ejr=DV(),Njr=KV(),Ajr=si(),Ojr=ui(),Sjr=y(),Tjr=uU();function Ijr(r){var e,t,i;if(Ejr(r))e=r;else if(Njr(r))r.BYTES_PER_ELEMENT===8?e=Ajr(r,0):e=Ojr(r,0);else throw new TypeError(Sjr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:Tjr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}oU.exports=Ijr});var B=s((hfe,vU)=>{"use strict";var _jr=fU();vU.exports=_jr});var p3=s((qfe,cU)=>{"use strict";var Ljr=zt(),Pjr=Q(),Rjr=Ljr-1;function Fjr(){var r=Pjr(1+Rjr*Math.random());return r>>>0}cU.exports=Fjr});var w3=s((yfe,EU)=>{"use strict";var oe=w(),rt=R(),lU=M(),g3=O(),Mjr=I(),Bjr=Gr(),pU=Kr(),kjr=fr().isPrimitive,gU=ae().isPrimitive,yU=sn(),bU=zt(),br=lr(),jjr=Zo(),b3=gV(),Ni=Ke(),Cjr=B(),Er=y(),mU=p3(),ar=624,m3=397,dU=bU>>>0,Gjr=19650218>>>0,d3=2147483648>>>0,h3=2147483647>>>0,Vjr=1812433253>>>0,Ujr=1664525>>>0,Hjr=1566083941>>>0,Wjr=2636928640>>>0,Djr=4022730752>>>0,zjr=2567483615>>>0,q3=[0>>>0,zjr>>>0],wU=1/(yU+1),Xjr=67108864>>>0,Jjr=2147483648>>>0,y3=1>>>0,xjr=yU*wU,p0=1,g0=3,et=2,tt=ar+3,wr=ar+5,Pn=ar+6;function hU(r,e){var t;return e?t="option":t="argument",r.length<Pn+1?new RangeError(Er("invalid %s. `state` array has insufficient length.",t)):r[0]!==p0?new RangeError(Er("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,p0,r[0])):r[1]!==g0?new RangeError(Er("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,g0,r[1])):r[et]!==ar?new RangeError(Er("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ar,r[et])):r[tt]!==1?new RangeError(Er("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[tt])):r[wr]!==r.length-Pn?new RangeError(Er("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Pn,r[wr])):null}function qU(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=b3(t,Vjr)+i>>>0;return r}function Yjr(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=jjr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=b3(n,Ujr)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=b3(n,Hjr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=Jjr,r}function Zjr(r){var e,t,i,n;for(n=ar-m3,t=0;t<n;t++)e=r[t]&d3|r[t+1]&h3,r[t]=r[t+m3]^e>>>1^q3[e&y3];for(i=ar-1;t<i;t++)e=r[t]&d3|r[t+1]&h3,r[t]=r[t-n]^e>>>1^q3[e&y3];return e=r[i]&d3|r[0]&h3,r[i]=r[m3-1]^e>>>1^q3[e&y3],r}function $jr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!Mjr(r))throw new TypeError(Er("invalid argument. Options argument must be an object. Value: `%s`.",r));if(g3(r,"copy")&&(i.copy=r.copy,!kjr(r.copy)))throw new TypeError(Er("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(g3(r,"state")){if(t=r.state,i.state=!0,!pU(t))throw new TypeError(Er("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=hU(t,!0),u)throw u;i.copy===!1?e=t:(e=new br(t.length),Ni(t.length,t,1,e,1)),t=new br(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,ar),n=new br(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,t[wr])}if(n===void 0)if(g3(r,"seed"))if(n=r.seed,i.seed=!0,gU(n)){if(n>dU)throw new RangeError(Er("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(Bjr(n)===!1||n.length<1)throw new TypeError(Er("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!gU(n))throw new TypeError(Er("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>dU)throw new RangeError(Er("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new br(Pn+a),e[0]=p0,e[1]=g0,e[et]=ar,e[tt]=1,e[tt+1]=ar,e[wr]=a,Ni.ndarray(a,n,1,0,e,1,wr+1),t=new br(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,ar),n=new br(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,a),t=qU(t,ar,Gjr),t=Yjr(t,ar,n,a)}else n=mU()>>>0}else n=mU()>>>0;return t===void 0&&(e=new br(Pn+1),e[0]=p0,e[1]=g0,e[et]=ar,e[tt]=1,e[tt+1]=ar,e[wr]=1,e[wr+1]=n,t=new br(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,ar),n=new br(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,1),t=qU(t,ar,n)),oe(h,"NAME","mt19937"),rt(h,"seed",o),rt(h,"seedLength",v),lU(h,"state",l,p),rt(h,"stateLength",f),rt(h,"byteLength",c),oe(h,"toJSON",m),oe(h,"MIN",0),oe(h,"MAX",bU),oe(h,"normalized",d),oe(d,"NAME",h.NAME),rt(d,"seed",o),rt(d,"seedLength",v),lU(d,"state",l,p),rt(d,"stateLength",f),rt(d,"byteLength",c),oe(d,"toJSON",m),oe(d,"MIN",0),oe(d,"MAX",xjr),h;function o(){var g=e[wr];return Ni(g,n,1,new br(g),1)}function v(){return e[wr]}function f(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return Ni(g,e,1,new br(g),1)}function p(g){var q;if(!pU(g))throw new TypeError(Er("invalid argument. Must provide a Uint32Array. Value: `%s`.",g));if(q=hU(g,!1),q)throw q;i.copy===!1?i.state&&g.length===e.length?Ni(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new br(g.length)),Ni(g.length,g,1,e,1)),t=new br(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,ar),n=new br(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,e[wr])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=Cjr(e),g.params=[],g}function h(){var g,q;return q=e[tt+1],q>=ar&&(t=Zjr(t),q=0),g=t[q],e[tt+1]=q+1,g^=g>>>11,g^=g<<7&Wjr,g^=g<<15&Djr,g^=g>>>18,g>>>0}function d(){var g=h()>>>5,q=h()>>>6;return(g*Xjr+q)*wU}}EU.exports=$jr});var AU=s((bfe,NU)=>{"use strict";var Qjr=w3(),Kjr=p3(),rCr=Qjr({seed:Kjr()});NU.exports=rCr});var z=s((wfe,SU)=>{"use strict";var eCr=w(),OU=AU(),tCr=w3();eCr(OU,"factory",tCr);SU.exports=OU});var LU=s((Efe,_U)=>{"use strict";var TU=k().isPrimitive,E3=y(),IU=sr();function iCr(r,e){return!TU(r)||IU(r)?new TypeError(E3("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!TU(e)||IU(e)?new TypeError(E3("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(E3("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}_U.exports=iCr});var RU=s((Nfe,PU)=>{"use strict";var nCr=W(),aCr=Tt(),sCr=Ja();function uCr(r,e,t){return e+nCr(aCr(sCr*r()),2)*(t-e)}PU.exports=uCr});var N3=s((Afe,VU)=>{"use strict";var fe=w(),m0=R(),FU=M(),MU=I(),BU=L(),kU=O(),jU=S(),oCr=C(),d0=z().factory,CU=E(),fCr=B(),h0=y(),vCr=LU(),GU=RU();function cCr(){var r,e,t,i,n,a;if(arguments.length===0)e=d0();else if(arguments.length===1){if(r=arguments[0],!MU(r))throw new TypeError(h0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(kU(r,"prng")){if(!BU(r.prng))throw new TypeError(h0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=d0(r)}else{if(n=arguments[0],a=arguments[1],i=vCr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!MU(r))throw new TypeError(h0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(kU(r,"prng")){if(!BU(r.prng))throw new TypeError(h0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=d0(r)}else e=d0()}return n===void 0?t=h:t=m,fe(t,"NAME","arcsine"),r&&r.prng?(fe(t,"seed",null),fe(t,"seedLength",null),FU(t,"state",jU(null),oCr),fe(t,"stateLength",null),fe(t,"byteLength",null),fe(t,"toJSON",jU(null)),fe(t,"PRNG",e)):(m0(t,"seed",u),m0(t,"seedLength",o),FU(t,"state",c,l),m0(t,"stateLength",v),m0(t,"byteLength",f),fe(t,"toJSON",p),fe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=fCr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return GU(e,n,a)}function h(d,g){return CU(d)||CU(g)||d>=g?NaN:GU(e,d,g)}}VU.exports=cCr});var HU=s((Ofe,UU)=>{"use strict";var lCr=N3(),pCr=lCr();UU.exports=pCr});var zU=s((Sfe,DU)=>{"use strict";var gCr=w(),WU=HU(),mCr=N3();gCr(WU,"factory",mCr);DU.exports=WU});var A3=s((Tfe,$U)=>{"use strict";var ve=w(),q0=R(),XU=M(),JU=I(),dCr=qn().isPrimitive,xU=L(),YU=O(),ZU=S(),hCr=C(),y0=z().factory,qCr=E(),yCr=B(),b0=y();function bCr(){var r,e,t,i;if(arguments.length===0)e=y0();else if(arguments.length===1&&JU(arguments[0]))if(r=arguments[0],YU(r,"prng")){if(!xU(r.prng))throw new TypeError(b0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=y0(r);else{if(i=arguments[0],!dCr(i))throw new TypeError(b0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!JU(r))throw new TypeError(b0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(YU(r,"prng")){if(!xU(r.prng))throw new TypeError(b0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=y0(r)}else e=y0()}return i===void 0?t=p:t=l,ve(t,"NAME","bernoulli"),r&&r.prng?(ve(t,"seed",null),ve(t,"seedLength",null),XU(t,"state",ZU(null),hCr),ve(t,"stateLength",null),ve(t,"byteLength",null),ve(t,"toJSON",ZU(null)),ve(t,"PRNG",e)):(q0(t,"seed",n),q0(t,"seedLength",a),XU(t,"state",v,f),q0(t,"stateLength",u),q0(t,"byteLength",o),ve(t,"toJSON",c),ve(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=yCr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return qCr(m)||m<0||m>1?NaN:e()<=m?1:0}}$U.exports=bCr});var KU=s((Ife,QU)=>{"use strict";var wCr=A3(),ECr=wCr();QU.exports=ECr});var tH=s((_fe,eH)=>{"use strict";var NCr=w(),rH=KU(),ACr=A3();NCr(rH,"factory",ACr);eH.exports=rH});var sH=s((Lfe,aH)=>{"use strict";var OCr=G(),iH=nr(),SCr=P(),nH=.00991256303526217;function TCr(r,e){var t,i,n;for(i=iH(-.5*e*e),t=[],t.push(nH/i),t.push(e),n=2;n<r;n++)t[n]=OCr(-2*SCr(nH/t[n-1]+i)),i=iH(-.5*t[n]*t[n]);return t.push(0),t}aH.exports=TCr});var oH=s((Pfe,uH)=>{"use strict";function ICr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}uH.exports=ICr});var cH=s((Rfe,vH)=>{"use strict";var fH=P();function _Cr(r,e,t){var i,n;do i=fH(r())/e,n=fH(r());while(-2*n<i*i);return t?i-e:e-i}vH.exports=_Cr});var mH=s((Ffe,gH)=>{"use strict";var LCr=J(),lH=nr(),PCr=sH(),RCr=oH(),FCr=cH(),MCr=128,pH=3.442619855899,Wt=PCr(MCr,pH),BCr=RCr(Wt),kCr=127;function jCr(r,e){return t;function t(){for(var i,n,a,u,o,v,f;;){if(o=2*r()-1,v=e()&kCr,LCr(o)<BCr[v])return o*Wt[v];if(v===0)return FCr(r,pH,o<0);if(u=o*Wt[v],a=u*u,f=v+1,i=lH(-.5*(Wt[v]*Wt[v]-a)),n=lH(-.5*(Wt[f]*Wt[f]-a)),n+r()*(i-n)<1)return u}}}gH.exports=jCr});var S3=s((Mfe,qH)=>{"use strict";var it=w(),w0=R(),dH=M(),CCr=L(),GCr=I(),VCr=fr().isPrimitive,E0=O(),UCr=Kr(),O3=z().factory,hH=S(),HCr=C(),WCr=Q(),DCr=zt(),zCr=B(),Rn=y(),XCr=mH();function JCr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!GCr(r))throw new TypeError(Rn("invalid argument. Must provide an object. Value: `%s`.",r));if(E0(r,"copy")&&(n.copy=r.copy,!VCr(r.copy)))throw new TypeError(Rn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(E0(r,"prng")){if(!CCr(r.prng))throw new TypeError(Rn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(E0(r,"state")){if(n.state=r.state,!UCr(r.state))throw new TypeError(Rn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(E0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Rn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=O3(n),e=t.normalized):(t=O3({seed:WCr(1+DCr*e()),copy:n.copy}),n.seed=null):(t=O3(n),e=t.normalized),i=XCr(e,t),it(i,"NAME","improved-ziggurat"),n.seed===null?(it(i,"seed",null),it(i,"seedLength",null)):(w0(i,"seed",a),w0(i,"seedLength",u)),r&&r.prng?(dH(i,"state",hH(null),HCr),it(i,"stateLength",null),it(i,"byteLength",null),it(i,"toJSON",hH(null))):(dH(i,"state",f,c),w0(i,"stateLength",o),w0(i,"byteLength",v),it(i,"toJSON",l)),it(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=zCr(t.state),p.params=[],p}}qH.exports=JCr});var bH=s((Bfe,yH)=>{"use strict";var xCr=S3(),YCr=xCr();yH.exports=YCr});var nt=s((kfe,EH)=>{"use strict";var ZCr=w(),wH=bH(),$Cr=S3();ZCr(wH,"factory",$Cr);EH.exports=wH});var AH=s((jfe,NH)=>{"use strict";var QCr=L(),KCr=QCr(Object.assign);NH.exports=KCr});var SH=s((Cfe,OH)=>{"use strict";var rGr=Object.assign;OH.exports=rGr});var IH=s((Gfe,TH)=>{"use strict";var eGr=typeof Object.getOwnPropertySymbols<"u";TH.exports=eGr});var PH=s((Vfe,LH)=>{"use strict";var _H=xt(),tGr=_H.getOwnPropertySymbols;function iGr(r){return tGr(_H(r))}LH.exports=iGr});var FH=s((Ufe,RH)=>{"use strict";function nGr(){return[]}RH.exports=nGr});var BH=s((Hfe,MH)=>{"use strict";var aGr=IH(),sGr=PH(),uGr=FH(),T3;aGr?T3=sGr:T3=uGr;MH.exports=T3});var jH=s((Wfe,kH)=>{"use strict";var oGr=Jt(),fGr=BH(),vGr=zi();function cGr(r){var e,t,i;for(e=oGr(r),t=fGr(r),i=0;i<t.length;i++)vGr(r,t[i])&&e.push(t[i]);return e}kH.exports=cGr});var GH=s((Dfe,CH)=>{"use strict";var lGr=jH();CH.exports=lGr});var HH=s((zfe,UH)=>{"use strict";var pGr=GH(),VH=xt(),gGr=y();function mGr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(gGr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=VH(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=pGr(VH(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}UH.exports=mGr});var Fn=s((Xfe,WH)=>{"use strict";var dGr=AH(),hGr=SH(),qGr=HH(),I3;dGr?I3=hGr:I3=qGr;WH.exports=I3});var JH=s((Jfe,XH)=>{"use strict";var DH=D().isPrimitive,zH=y();function yGr(r,e){return DH(r)?DH(e)?null:new TypeError(zH("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(zH("invalid argument. First argument must be a positive number. Value: `%s`.",r))}XH.exports=yGr});var QH=s((xfe,$H)=>{"use strict";var xH=P(),YH=G(),bGr=W(),ZH=1/3;function wGr(r,e,t){var i,n,a,u,o,v,f,c,l,p;for(t<1?(v=t+1-ZH,o=1/YH(9*v),c=bGr(r(),1/t)):(v=t-ZH,o=1/YH(9*v),c=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,n=f*f,a=1-.331*n*n,u=.5*n+v*(1-p+xH(p)),l=r(),(l<a||xH(l)<u)&&(i=!1)}return v*p*c}$H.exports=wGr});var eW=s((Yfe,rW)=>{"use strict";var _3=W(),KH=P();function EGr(r,e,t){var i,n,a,u,o,v,f,c;for(a=t-1,o=_3(a+a,.5),i=!0;i===!0;)u=e(),f=.5*(1+u/o),f>=0&&f<=1&&(v=r(),n=_3(u,4),c=8*t-12,c=1-n/c,v<=c?i=!1:(c+=.5*_3(n/(8*t-8),2),v<c&&(c=a*KH(4*f*(1-f)),c+=u*u/2,c>=KH(v)&&(i=!1))));return f}rW.exports=EGr});var iW=s((Zfe,tW)=>{"use strict";var NGr=W(),N0=P();function AGr(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h;for(o=t-1,v=i-1,f=o+v,c=f*N0(f),u=o/f,n=.5/NGr(f,.5),a=!0;a===!0;)l=e(),m=u+l*n,m>=0&&m<=1&&(p=r(),h=o*N0(m/o),h+=v*N0((1-m)/v),h+=c+.5*l*l,h>=N0(p)&&(a=!1));return m}tW.exports=AGr});var sW=s(($fe,aW)=>{"use strict";var L3=nr(),nW=W(),P3=P();function OGr(r,e,t){for(var i,n,a,u,o,v,f;;)if(u=r(),o=r(),v=nW(u,1/e),f=nW(o,1/t),a=v+f,a<=1)return a>0?v/a:(i=P3(u)/e,n=P3(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),L3(i-P3(L3(i)+L3(n))))}aW.exports=OGr});var fW=s((Qfe,oW)=>{"use strict";var uW=QH(),SGr=eW(),TGr=iW(),IGr=sW();function _Gr(r,e,t,i){var n,a;return t===i&&t>1.5?SGr(r,e,t):t>1&&i>1?TGr(r,e,t,i):t<1&&i<1?IGr(r,t,i):(n=uW(r,e,t),a=uW(r,e,i),n/(n+a))}oW.exports=_Gr});var B3=s((Kfe,yW)=>{"use strict";var ce=w(),A0=R(),vW=M(),cW=I(),lW=fr().isPrimitive,pW=L(),Ai=O(),gW=S(),LGr=C(),mW=nt().factory,O0=z().factory,dW=E(),R3=Ke(),F3=lr(),M3=Kr(),hW=Fn(),PGr=B(),le=y(),RGr=JH(),qW=fW();function FGr(){var r,e,t,i,n,a,u,o,v;if(o=!0,arguments.length===0)n={copy:!1},a=O0(n);else if(arguments.length===1){if(n=arguments[0],!cW(n))throw new TypeError(le("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ai(n,"copy")&&!lW(n.copy))throw new TypeError(le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ai(n,"prng")){if(!pW(n.prng))throw new TypeError(le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ai(n,"state")&&!M3(n.state))throw new TypeError(le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=hW({},n),n.copy===!1?o=!1:n.state&&(n.state=R3(n.state.length,n.state,1,new F3(n.state.length),1)),n.copy=!1,a=O0(n)}}else{if(t=arguments[0],i=arguments[1],v=RGr(t,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!cW(n))throw new TypeError(le("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ai(n,"copy")&&!lW(n.copy))throw new TypeError(le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ai(n,"prng")){if(!pW(n.prng))throw new TypeError(le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ai(n,"state")&&!M3(n.state))throw new TypeError(le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=hW({},n),n.copy===!1?o=!1:n.state&&(n.state=R3(n.state.length,n.state,1,new F3(n.state.length),1)),n.copy=!1,a=O0(n)}}else n={copy:!1},a=O0(n)}return n&&n.prng?e=mW({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=mW({state:r,copy:!1})),t===void 0?u=q:u=g,ce(u,"NAME","beta"),n&&n.prng?(ce(u,"seed",null),ce(u,"seedLength",null),vW(u,"state",gW(null),LGr),ce(u,"stateLength",null),ce(u,"byteLength",null),ce(u,"toJSON",gW(null)),ce(u,"PRNG",a)):(A0(u,"seed",f),A0(u,"seedLength",c),vW(u,"state",m,h),A0(u,"stateLength",l),A0(u,"byteLength",p),ce(u,"toJSON",d),ce(u,"PRNG",a),a=a.normalized),u;function f(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function m(){return a.state}function h(N){if(!M3(N))throw new TypeError(le("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=R3(N.length,N,1,new F3(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=PGr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function g(){return qW(a,e,t,i)}function q(N,A){return dW(N)||dW(A)||N<=0||A<=0?NaN:qW(a,e,N,A)}}yW.exports=FGr});var wW=s((rve,bW)=>{"use strict";var MGr=B3(),BGr=MGr();bW.exports=BGr});var AW=s((eve,NW)=>{"use strict";var kGr=w(),EW=wW(),jGr=B3();kGr(EW,"factory",jGr);NW.exports=EW});var IW=s((tve,TW)=>{"use strict";var OW=D().isPrimitive,SW=y();function CGr(r,e){return OW(r)?OW(e)?null:new TypeError(SW("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(SW("invalid argument. First argument must be a positive number. Value: `%s`.",r))}TW.exports=CGr});var PW=s((ive,LW)=>{"use strict";var _W=P();function GGr(r,e,t,i,n){var a,u,o,v,f,c,l;for(a=!0;a;){do f=e(),l=1+n*f;while(l<=0);l*=l*l,u=f*f,o=1-.331*u*u,v=.5*u+i*(1-l+_W(l)),c=r(),(c<o||_W(c)<v)&&(a=!1)}return 1/t*i*l}LW.exports=GGr});var V3=s((nve,UW)=>{"use strict";var pe=w(),S0=R(),RW=M(),FW=I(),k3=Kr(),MW=fr().isPrimitive,BW=L(),Oi=O(),kW=S(),VGr=C(),jW=nt().factory,T0=z().factory,CW=E(),j3=G(),GW=W(),C3=Ke(),G3=lr(),UGr=B(),VW=Fn(),ge=y(),HGr=IW(),I0=PW(),_0=1/3;function WGr(){var r,e,t,i,n,a,u,o,v,f,c;if(o=!0,arguments.length===0)n={copy:!1},a=T0(n);else if(arguments.length===1){if(n=arguments[0],!FW(n))throw new TypeError(ge("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Oi(n,"copy")&&!MW(n.copy))throw new TypeError(ge("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Oi(n,"prng")){if(!BW(n.prng))throw new TypeError(ge("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Oi(n,"state")&&!k3(n.state))throw new TypeError(ge("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=VW({},n),n.copy===!1?o=!1:n.state&&(n.state=C3(n.state.length,n.state,1,new G3(n.state.length),1)),n.copy=!1,a=T0(n)}}else{if(e=arguments[0],i=arguments[1],v=HGr(e,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!FW(n))throw new TypeError(ge("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Oi(n,"copy")&&!MW(n.copy))throw new TypeError(ge("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Oi(n,"prng")){if(!BW(n.prng))throw new TypeError(ge("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Oi(n,"state")&&!k3(n.state))throw new TypeError(ge("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=VW({},n),n.copy===!1?o=!1:n.state&&(n.state=C3(n.state.length,n.state,1,new G3(n.state.length),1)),n.copy=!1,a=T0(n)}}else n={copy:!1},a=T0(n)}return n&&n.prng?t=jW({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=jW({state:r,copy:!1})),e===void 0?u=j:(e>=1?(u=N,c=e-_0):(u=A,c=e+1-_0),f=1/j3(9*c)),pe(u,"NAME","gamma"),n&&n.prng?(pe(u,"seed",null),pe(u,"seedLength",null),RW(u,"state",kW(null),VGr),pe(u,"stateLength",null),pe(u,"byteLength",null),pe(u,"toJSON",kW(null)),pe(u,"PRNG",a)):(S0(u,"seed",l),S0(u,"seedLength",p),RW(u,"state",d,g),S0(u,"stateLength",m),S0(u,"byteLength",h),pe(u,"toJSON",q),pe(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function m(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function g(T){if(!k3(T))throw new TypeError(ge("invalid argument. Must provide a Uint32Array. Value: `%s`.",T));o&&(T=C3(T.length,T,1,new G3(T.length),1)),a.state=T}function q(){var T={};return T.type="PRNG",T.name=u.NAME,T.state=UGr(a.state),e===void 0?T.params=[]:T.params=[e,i],T}function N(){return I0(a,t,i,c,f)}function A(){return I0(a,t,i,c,f)*GW(a(),1/e)}function j(T,X){var cr,$;return CW(T)||CW(X)||T<=0||X<=0?NaN:T<1?($=T+1-_0,cr=1/j3(9*$),I0(a,t,X,$,cr)*GW(a(),1/T)):($=T-_0,cr=1/j3(9*$),I0(a,t,X,$,cr))}}UW.exports=WGr});var WW=s((ave,HW)=>{"use strict";var DGr=V3(),zGr=DGr();HW.exports=zGr});var Si=s((sve,zW)=>{"use strict";var XGr=w(),DW=WW(),JGr=V3();XGr(DW,"factory",JGr);zW.exports=DW});var YW=s((uve,xW)=>{"use strict";var XW=D().isPrimitive,JW=y();function xGr(r,e){return XW(r)?XW(e)?null:new TypeError(JW("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(JW("invalid argument. First argument must be a positive number. Value: `%s`.",r))}xW.exports=xGr});var $W=s((ove,ZW)=>{"use strict";function YGr(r,e,t){return r(e,1)/r(t,1)}ZW.exports=YGr});var U3=s((fve,nD)=>{"use strict";var at=w(),L0=R(),QW=M(),KW=I(),rD=S(),ZGr=C(),P0=Si().factory,eD=E(),$Gr=B(),tD=y(),QGr=YW(),iD=$W();function KGr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=P0();else if(arguments.length===1){if(i=arguments[0],!KW(i))throw new TypeError(tD("invalid argument. Options argument must be an object. Value: `%s`.",i));r=P0(i)}else{if(e=arguments[0],t=arguments[1],u=QGr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!KW(i))throw new TypeError(tD("invalid argument. Options argument must be an object. Value: `%s`.",i));r=P0(i)}else r=P0()}return e===void 0?a=d:a=h,n=r.PRNG,at(a,"NAME","betaprime"),i&&i.prng?(at(a,"seed",null),at(a,"seedLength",null),QW(a,"state",rD(null),ZGr),at(a,"stateLength",null),at(a,"byteLength",null),at(a,"toJSON",rD(null))):(L0(a,"seed",o),L0(a,"seedLength",v),QW(a,"state",l,p),L0(a,"stateLength",f),L0(a,"byteLength",c),at(a,"toJSON",m)),at(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=$Gr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return iD(r,e,t)}function d(g,q){return eD(g)||eD(q)||g<=0||q<=0?NaN:iD(r,g,q)}}nD.exports=KGr});var sD=s((vve,aD)=>{"use strict";var rVr=U3(),eVr=rVr();aD.exports=eVr});var fD=s((cve,oD)=>{"use strict";var tVr=w(),uD=sD(),iVr=U3();tVr(uD,"factory",iVr);oD.exports=uD});var cD=s((lve,vD)=>{"use strict";var nVr=Q();function aVr(r){return nVr(r)===r&&r>0}vD.exports=aVr});var H3=s((pve,lD)=>{"use strict";var sVr=cD();lD.exports=sVr});var gD=s((gve,pD)=>{"use strict";function uVr(r){return r>=0&&r<=1}pD.exports=uVr});var dD=s((mve,mD)=>{"use strict";var oVr=gD();mD.exports=oVr});var yD=s((dve,qD)=>{"use strict";var fVr=ae().isPrimitive,vVr=qn().isPrimitive,hD=y();function cVr(r,e){return fVr(r)?vVr(e)?null:new TypeError(hD("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(hD("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}qD.exports=cVr});var wD=s((hve,bD)=>{"use strict";function lVr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}bD.exports=lVr});var ND=s((qve,ED)=>{"use strict";var pVr=E();function gVr(r){return r===0||pVr(r)?r:r<0?-1:1}ED.exports=gVr});var R0=s((yve,AD)=>{"use strict";var mVr=ND();AD.exports=mVr});var SD=s((bve,OD)=>{"use strict";var dVr=W(),hVr=1/12,qVr=1/360,yVr=1/1260;function bVr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=dVr(r,2),(hVr-(qVr-yVr/e)/e)/r}}OD.exports=bVr});var ID=s((wve,TD)=>{"use strict";var W3=Q(),wVr=R0(),EVr=G(),D3=J(),F0=P(),M0=SD(),NVr=1/6;function AVr(r,e,t){var i,n,a,u,o,v,f,c,l,p,m,h,d,g,q,N,A,j,T,X,cr,$,gu,Xr,gr,Dn;for(X=W3((e+1)*t),f=e-X+1,cr=1-t,$=t/cr,c=(e+1)*$,u=e*t*cr,a=EVr(u),g=1.15+2.53*a,d=-.0873+.0248*g+.01*t,q=e*t+.5,i=(2.83+5.1/g)*a,h=.92-4.2/g,n=.86*h,A=(X+.5)*F0((X+1)/($*f)),A+=M0(X)+M0(e-X);;){if(gr=r(),gr<=n)return Xr=gr/h-.43,$=Xr*(2*d/(.5-D3(Xr))+g)+q,W3($);if(gr>=h?Xr=r()-.5:(Xr=gr/h-.93,Xr=wVr(Xr)*.5-Xr,gr=h*r()),l=.5-D3(Xr),T=W3(Xr*(2*d/l+g)+q),!(T<0||T>e))if(gr=gr*i/(d/(l*l)+g),p=D3(T-X),p>15){if(gr=F0(gr),o=p/u,v=(p/3+.625)*p,v+=NVr,v/=u,o*=v+.5,gu=-(p*p)/(2*u),gr<gu-o||gr<=gu+o&&(m=e-T+1,Dn=A+(e+1)*F0(f/m),Dn+=(T+.5)*F0(m*$/(T+1)),Dn+=-(M0(T)+M0(e-T)),gr<=Dn))return T}else{if(N=1,X<T)for(j=X;j<=T;j++)N*=c/j-$;else if(X>T)for(j=T;j<=X;j++)gr*=c/j-$;if(gr<=N)return T}}}TD.exports=AVr});var PD=s((Eve,LD)=>{"use strict";var OVr=wD(),SVr=ID();function _D(r,e,t){return t>.5?e-_D(r,e,1-t):e*t<10?OVr(r,e,t):SVr(r,e,t)}LD.exports=_D});var z3=s((Nve,GD)=>{"use strict";var me=w(),B0=R(),RD=M(),FD=I(),MD=L(),BD=O(),kD=S(),TVr=C(),jD=E(),IVr=H3(),_Vr=dD(),k0=z().factory,LVr=B(),j0=y(),PVr=yD(),CD=PD();function RVr(){var r,e,t,i,n,a;if(arguments.length===0)e=k0();else if(arguments.length===1){if(r=arguments[0],!FD(r))throw new TypeError(j0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(BD(r,"prng")){if(!MD(r.prng))throw new TypeError(j0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=k0(r)}else{if(n=arguments[0],a=arguments[1],i=PVr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!FD(r))throw new TypeError(j0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(BD(r,"prng")){if(!MD(r.prng))throw new TypeError(j0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=k0(r)}else e=k0()}return n===void 0?t=h:t=m,me(t,"NAME","binomial"),r&&r.prng?(me(t,"seed",null),me(t,"seedLength",null),RD(t,"state",kD(null),TVr),me(t,"stateLength",null),me(t,"byteLength",null),me(t,"toJSON",kD(null)),me(t,"PRNG",e)):(B0(t,"seed",u),B0(t,"seedLength",o),RD(t,"state",c,l),B0(t,"stateLength",v),B0(t,"byteLength",f),me(t,"toJSON",p),me(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=LVr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return CD(e,n,a)}function h(d,g){return jD(d)||jD(g)||!IVr(d)||!_Vr(g)?NaN:CD(e,d,g)}}GD.exports=RVr});var UD=s((Ave,VD)=>{"use strict";var FVr=z3(),MVr=FVr();VD.exports=MVr});var DD=s((Ove,WD)=>{"use strict";var BVr=w(),HD=UD(),kVr=z3();BVr(HD,"factory",kVr);WD.exports=HD});var XD=s((Sve,zD)=>{"use strict";var jVr=G(),CVr=P(),GVr=Tt(),VVr=St(),UVr=We();function HVr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=jVr(-2*CVr(n)),o=UVr*a,t=u*VVr(o),e=!1,u*GVr(o)}return e=!0,t}}zD.exports=HVr});var xD=s((Tve,JD)=>{"use strict";var WVr=G(),DVr=P(),zVr=St(),XVr=_r(),JVr=zVr(XVr);function xVr(r){var e=WVr(-2*DVr(r));return e*JVr}JD.exports=xVr});var ZD=s((Ive,YD)=>{"use strict";var YVr=G(),ZVr=P(),$Vr=St(),QVr=We();function KVr(r){var e=YVr(-2*ZVr(r)),t=QVr*r;return e*$Vr(t)}YD.exports=KVr});var X3=s((_ve,rz)=>{"use strict";var kr=w(),C0=R(),$D=M(),rUr=I(),eUr=L(),tUr=fr().isPrimitive,Mn=O(),iUr=Kr(),QD=z().factory,KD=S(),nUr=C(),aUr=B(),Bn=y(),sUr=XD(),uUr=xD(),oUr=ZD();function fUr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!rUr(r))throw new TypeError(Bn("invalid argument. Must provide an object. Value: `%s`.",r));if(Mn(r,"copy")&&(n.copy=r.copy,!tUr(r.copy)))throw new TypeError(Bn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Mn(r,"prng")){if(!eUr(r.prng))throw new TypeError(Bn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Mn(r,"state")){if(n.state=r.state,!iUr(r.state))throw new TypeError(Bn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Mn(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Bn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=QD(n),e=i.normalized):n.seed=null:(i=QD(n),e=i.normalized),t=sUr(e),kr(t,"NAME","box-muller"),n.seed===null?(kr(t,"seed",null),kr(t,"seedLength",null)):(C0(t,"seed",a),C0(t,"seedLength",u)),r&&r.prng?($D(t,"state",KD(null),nUr),kr(t,"stateLength",null),kr(t,"byteLength",null),kr(t,"toJSON",KD(null))):($D(t,"state",f,c),C0(t,"stateLength",o),C0(t,"byteLength",v),kr(t,"toJSON",l)),kr(t,"PRNG",e),Mn(e,"MIN")?(kr(t,"MIN",uUr(e.MIN)),kr(t,"MAX",oUr(e.MIN))):(kr(t,"MIN",null),kr(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=aUr(i.state),p.params=[],p}}rz.exports=fUr});var tz=s((Lve,ez)=>{"use strict";var vUr=X3(),cUr=vUr();ez.exports=cUr});var az=s((Pve,nz)=>{"use strict";var lUr=w(),iz=tz(),pUr=X3();lUr(iz,"factory",pUr);nz.exports=iz});var oz=s((Rve,uz)=>{"use strict";var gUr=k().isPrimitive,mUr=D().isPrimitive,sz=y(),dUr=sr();function hUr(r,e){return!gUr(r)||dUr(r)?new TypeError(sz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):mUr(e)?null:new TypeError(sz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}uz.exports=hUr});var vz=s((Fve,fz)=>{"use strict";var qUr=X2(),yUr=_r();function bUr(r,e,t){return e+t*qUr(yUr*(r()-.5))}fz.exports=bUr});var J3=s((Mve,qz)=>{"use strict";var st=w(),G0=R(),cz=M(),lz=I(),pz=L(),gz=O(),mz=S(),wUr=C(),dz=E(),Ti=nt().factory,EUr=B(),V0=y(),NUr=oz(),hz=vz();function AUr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Ti();else if(arguments.length===1){if(t=arguments[0],!lz(t))throw new TypeError(V0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(gz(t,"prng")){if(!pz(t.prng))throw new TypeError(V0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ti({prng:t.prng})}else e=Ti(t)}else{if(u=arguments[0],r=arguments[1],a=NUr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!lz(t))throw new TypeError(V0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(gz(t,"prng")){if(!pz(t.prng))throw new TypeError(V0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ti({prng:t.prng})}else e=Ti(t)}else e=Ti()}return u===void 0?n=d:n=h,i=e.PRNG,st(n,"NAME","cauchy"),t&&t.prng?(st(n,"seed",null),st(n,"seedLength",null),cz(n,"state",mz(null),wUr),st(n,"stateLength",null),st(n,"byteLength",null),st(n,"toJSON",mz(null))):(G0(n,"seed",o),G0(n,"seedLength",v),cz(n,"state",l,p),G0(n,"stateLength",f),G0(n,"byteLength",c),st(n,"toJSON",m)),st(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=EUr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return hz(e,u,r)}function d(g,q){return dz(g)||dz(q)||q<=0?NaN:hz(e,g,q)}}qz.exports=AUr});var bz=s((Bve,yz)=>{"use strict";var OUr=J3(),SUr=OUr();yz.exports=SUr});var Nz=s((kve,Ez)=>{"use strict";var TUr=w(),wz=bz(),IUr=J3();TUr(wz,"factory",IUr);Ez.exports=wz});var x3=s((jve,_z)=>{"use strict";var ut=w(),U0=R(),Az=M(),_Ur=D().isPrimitive,Oz=I(),Sz=L(),Tz=O(),Iz=S(),LUr=C(),PUr=E(),Ii=Si().factory,RUr=B(),H0=y();function FUr(){var r,e,t,i,n;if(arguments.length===0)r=Ii();else if(arguments.length===1&&Oz(arguments[0]))if(t=arguments[0],Tz(t,"prng")){if(!Sz(t.prng))throw new TypeError(H0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ii({prng:t.prng})}else r=Ii(t);else{if(n=arguments[0],!_Ur(n))throw new TypeError(H0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!Oz(t))throw new TypeError(H0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Tz(t,"prng")){if(!Sz(t.prng))throw new TypeError(H0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ii(n/2,.5,{prng:t.prng})}else r=Ii(n/2,.5,t)}else r=Ii(n/2,.5)}return n===void 0?i=m:i=p,e=r.PRNG,ut(i,"NAME","chisquare"),t&&t.prng?(ut(i,"seed",null),ut(i,"seedLength",null),Az(i,"state",Iz(null),LUr),ut(i,"stateLength",null),ut(i,"byteLength",null),ut(i,"toJSON",Iz(null))):(U0(i,"seed",a),U0(i,"seedLength",u),Az(i,"state",f,c),U0(i,"stateLength",o),U0(i,"byteLength",v),ut(i,"toJSON",l)),ut(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=RUr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function m(h){return PUr(h)||h<=0?NaN:r(h/2,.5)}}_z.exports=FUr});var Pz=s((Cve,Lz)=>{"use strict";var MUr=x3(),BUr=MUr();Lz.exports=BUr});var kn=s((Gve,Fz)=>{"use strict";var kUr=w(),Rz=Pz(),jUr=x3();kUr(Rz,"factory",jUr);Fz.exports=Rz});var Y3=s((Vve,Vz)=>{"use strict";var ot=w(),W0=R(),Mz=M(),CUr=D().isPrimitive,Bz=I(),kz=L(),jz=O(),Cz=S(),GUr=C(),VUr=E(),_i=kn().factory,UUr=B(),Gz=G(),D0=y();function HUr(){var r,e,t,i,n;if(arguments.length===0)r=_i();else if(arguments.length===1&&Bz(arguments[0]))if(t=arguments[0],jz(t,"prng")){if(!kz(t.prng))throw new TypeError(D0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=_i({prng:t.prng})}else r=_i(t);else{if(n=arguments[0],!CUr(n))throw new TypeError(D0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!Bz(t))throw new TypeError(D0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(jz(t,"prng")){if(!kz(t.prng))throw new TypeError(D0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=_i(n,{prng:t.prng})}else r=_i(n,t)}else r=_i(n)}return n===void 0?i=m:i=p,e=r.PRNG,ot(i,"NAME","chi"),t&&t.prng?(ot(i,"seed",null),ot(i,"seedLength",null),Mz(i,"state",Cz(null),GUr),ot(i,"stateLength",null),ot(i,"byteLength",null),ot(i,"toJSON",Cz(null))):(W0(i,"seed",a),W0(i,"seedLength",u),Mz(i,"state",f,c),W0(i,"stateLength",o),W0(i,"byteLength",v),ot(i,"toJSON",l)),ot(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=UUr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return Gz(r())}function m(h){return VUr(h)||h<=0?NaN:Gz(r(h))}}Vz.exports=HUr});var Hz=s((Uve,Uz)=>{"use strict";var WUr=Y3(),DUr=WUr();Uz.exports=DUr});var zz=s((Hve,Dz)=>{"use strict";var zUr=w(),Wz=Hz(),XUr=Y3();zUr(Wz,"factory",XUr);Dz.exports=Wz});var xz=s((Wve,Jz)=>{"use strict";var JUr=k().isPrimitive,xUr=D().isPrimitive,Xz=y(),YUr=sr();function ZUr(r,e){return!JUr(r)||YUr(r)?new TypeError(Xz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):xUr(e)?null:new TypeError(Xz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Jz.exports=ZUr});var Zz=s((Dve,Yz)=>{"use strict";var Z3=E(),$Ur=Ki(),QUr=_r();function KUr(r,e,t){var i;return Z3(r)||Z3(e)||Z3(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+$Ur(i)/QUr)/2)}Yz.exports=KUr});var Qz=s((zve,$z)=>{"use strict";var rHr=S(),eHr=Ia().factory,$3=E(),tHr=Ki(),iHr=_r();function nHr(r,e){if($3(r)||$3(e)||e<0)return rHr(NaN);if(e===0)return eHr(r);return t;function t(i){var n;return $3(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+tHr(n)/iHr)/2)}}$z.exports=nHr});var eX=s((Xve,rX)=>{"use strict";var aHr=w(),Kz=Zz(),sHr=Qz();aHr(Kz,"factory",sHr);rX.exports=Kz});var Q3=s((Jve,tX)=>{"use strict";var uHr=eX(),oHr=1e4,fHr=1e-12;function vHr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<oHr;){if(u=(i+n)/2,n-i<fHr)return u;a=uHr(u,e,t),r>a?i=u:n=u,o+=1}return u}tX.exports=vHr});var nX=s((xve,iX)=>{"use strict";var K3=E(),cHr=Q3();function lHr(r,e,t){return K3(e)||K3(t)||K3(r)||t<0||r<0||r>1?NaN:t===0?e:cHr(r,e,t)}iX.exports=lHr});var sX=s((Yve,aX)=>{"use strict";var pHr=S(),gHr=e3().factory,rf=E(),mHr=Q3();function dHr(r,e){if(rf(r)||rf(e)||e<0)return pHr(NaN);if(e===0)return gHr(r);return t;function t(i){return rf(i)||i<0||i>1?NaN:mHr(i,r,e)}}aX.exports=dHr});var fX=s((Zve,oX)=>{"use strict";var hHr=w(),uX=nX(),qHr=sX();hHr(uX,"factory",qHr);oX.exports=uX});var cX=s(($ve,vX)=>{"use strict";var yHr=fX();function bHr(r,e,t){return yHr(r(),e,t)}vX.exports=bHr});var ef=s((Qve,yX)=>{"use strict";var de=w(),z0=R(),lX=M(),pX=I(),gX=L(),mX=O(),dX=S(),wHr=C(),X0=z().factory,hX=E(),EHr=B(),J0=y(),NHr=xz(),qX=cX();function AHr(){var r,e,t,i,n,a;if(arguments.length===0)e=X0();else if(arguments.length===1){if(r=arguments[0],!pX(r))throw new TypeError(J0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(mX(r,"prng")){if(!gX(r.prng))throw new TypeError(J0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=X0(r)}else{if(n=arguments[0],a=arguments[1],i=NHr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!pX(r))throw new TypeError(J0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(mX(r,"prng")){if(!gX(r.prng))throw new TypeError(J0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=X0(r)}else e=X0()}return n===void 0?t=h:t=m,de(t,"NAME","cosine"),r&&r.prng?(de(t,"seed",null),de(t,"seedLength",null),lX(t,"state",dX(null),wHr),de(t,"stateLength",null),de(t,"byteLength",null),de(t,"toJSON",dX(null)),de(t,"PRNG",e)):(z0(t,"seed",u),z0(t,"seedLength",o),lX(t,"state",c,l),z0(t,"stateLength",v),z0(t,"byteLength",f),de(t,"toJSON",p),de(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=EHr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return qX(e,n,a)}function h(d,g){return hX(d)||hX(g)||g<=0?NaN:qX(e,d,g)}}yX.exports=AHr});var wX=s((Kve,bX)=>{"use strict";var OHr=ef(),SHr=OHr();bX.exports=SHr});var AX=s((rce,NX)=>{"use strict";var THr=w(),EX=wX(),IHr=ef();THr(EX,"factory",IHr);NX.exports=EX});var IX=s((ece,TX)=>{"use strict";var OX=Cr().isPrimitive,tf=y(),SX=sr();function _Hr(r,e){return!OX(r)||SX(r)?new TypeError(tf("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!OX(e)||SX(e)?new TypeError(tf("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(tf("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}TX.exports=_Hr});var PX=s((tce,LX)=>{"use strict";var nf=sn(),Li=Q();function _X(r,e,t){var i,n,a,u,o,v,f,c,l;if(a=t-e,a===0)return e;if(f=r.MIN,c=r.MAX,n=c-f,n===a)return r()-f+e;if(n<a)for(u=0;;){for(a===nf?(u=Li(a/(n+1)),a%(n+1)===n&&(u+=1)):u=Li((a+1)/(n+1)),i=0,v=1;v<=u;){if(i+=(r()-f)*v,v*n===a-v+1)return i;v*=n+1}if(l=_X(r,0,Li(a/v)),!(l>nf/v)&&(l*=v,i+=l,!(i>a)))return i+e}for(n===nf?(o=Li(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Li((n+1)/(a+1));;)if(i=r()-f,i=Li(i/o),i<=a)return i+e}LX.exports=_X});var af=s((ice,GX)=>{"use strict";var he=w(),x0=R(),RX=M(),FX=I(),MX=L(),BX=O(),kX=S(),LHr=C(),Y0=z().factory,jX=E(),Pi=Ir(),PHr=B(),ft=y(),RHr=IX(),CX=PX();function FHr(){var r,e,t,i,n,a;if(arguments.length===0)e=Y0();else if(arguments.length===1){if(r=arguments[0],!FX(r))throw new TypeError(ft("invalid argument. Options argument must be an object. Value: `%s`.",r));if(BX(r,"prng")){if(!MX(r.prng))throw new TypeError(ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Pi(e.MIN))throw new TypeError(ft("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Pi(e.MAX))throw new TypeError(ft("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Y0(r)}else{if(n=arguments[0],a=arguments[1],i=RHr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!FX(r))throw new TypeError(ft("invalid argument. Options argument must be an object. Value: `%s`.",r));if(BX(r,"prng")){if(!MX(r.prng))throw new TypeError(ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Pi(e.MIN))throw new TypeError(ft("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Pi(e.MAX))throw new TypeError(ft("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=Y0(r)}else e=Y0()}return n===void 0?t=h:t=m,he(t,"NAME","discrete-uniform"),r&&r.prng?(he(t,"seed",null),he(t,"seedLength",null),RX(t,"state",kX(null),LHr),he(t,"stateLength",null),he(t,"byteLength",null),he(t,"toJSON",kX(null)),he(t,"PRNG",e)):(x0(t,"seed",u),x0(t,"seedLength",o),RX(t,"state",c,l),x0(t,"stateLength",v),x0(t,"byteLength",f),he(t,"toJSON",p),he(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=PHr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return CX(e,n,a)}function h(d,g){return jX(d)||jX(g)||!Pi(d)||!Pi(g)||d>g?NaN:CX(e,d,g)}}GX.exports=FHr});var UX=s((nce,VX)=>{"use strict";var MHr=af(),BHr=MHr();VX.exports=BHr});var DX=s((ace,WX)=>{"use strict";var kHr=w(),HX=UX(),jHr=af();kHr(HX,"factory",jHr);WX.exports=HX});var JX=s((sce,XX)=>{"use strict";var CHr=D().isPrimitive,GHr=ae().isPrimitive,zX=y();function VHr(r,e){return GHr(r)?CHr(e)?null:new TypeError(zX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(zX("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}XX.exports=VHr});var YX=s((uce,xX)=>{"use strict";var UHr=P();function HHr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*UHr(i)}xX.exports=HHr});var sf=s((oce,iJ)=>{"use strict";var qe=w(),Z0=R(),ZX=M(),$X=I(),QX=L(),KX=O(),rJ=S(),WHr=C(),$0=z().factory,eJ=E(),DHr=H3(),zHr=B(),Q0=y(),XHr=JX(),tJ=YX();function JHr(){var r,e,t,i,n,a;if(arguments.length===0)e=$0();else if(arguments.length===1){if(t=arguments[0],!$X(t))throw new TypeError(Q0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(KX(t,"prng")){if(!QX(t.prng))throw new TypeError(Q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=$0(t)}else{if(a=arguments[0],r=arguments[1],n=XHr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!$X(t))throw new TypeError(Q0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(KX(t,"prng")){if(!QX(t.prng))throw new TypeError(Q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=$0(t)}else e=$0()}return a===void 0?i=h:i=m,qe(i,"NAME","erlang"),t&&t.prng?(qe(i,"seed",null),qe(i,"seedLength",null),ZX(i,"state",rJ(null),WHr),qe(i,"stateLength",null),qe(i,"byteLength",null),qe(i,"toJSON",rJ(null)),qe(i,"PRNG",e)):(Z0(i,"seed",u),Z0(i,"seedLength",o),ZX(i,"state",c,l),Z0(i,"stateLength",v),Z0(i,"byteLength",f),qe(i,"toJSON",p),qe(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=zHr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return tJ(e,a,r)}function h(d,g){return eJ(d)||eJ(g)||!DHr(d)||g<=0?NaN:tJ(e,d,g)}}iJ.exports=JHr});var aJ=s((fce,nJ)=>{"use strict";var xHr=sf(),YHr=xHr();nJ.exports=YHr});var oJ=s((vce,uJ)=>{"use strict";var ZHr=w(),sJ=aJ(),$Hr=sf();ZHr(sJ,"factory",$Hr);uJ.exports=sJ});var vJ=s((cce,fJ)=>{"use strict";var QHr=P();function KHr(r,e){return-QHr(1-r())/e}fJ.exports=KHr});var uf=s((lce,hJ)=>{"use strict";var ye=w(),K0=R(),cJ=M(),rWr=D().isPrimitive,lJ=I(),pJ=L(),gJ=O(),mJ=S(),eWr=C(),rs=z().factory,tWr=E(),iWr=B(),es=y(),dJ=vJ();function nWr(){var r,e,t,i;if(arguments.length===0)t=rs();else if(arguments.length===1&&lJ(arguments[0]))if(e=arguments[0],gJ(e,"prng")){if(!pJ(e.prng))throw new TypeError(es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=rs(e);else{if(r=arguments[0],!rWr(r))throw new TypeError(es("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!lJ(e))throw new TypeError(es("invalid argument. Options argument must be an object. Value: `%s`.",e));if(gJ(e,"prng")){if(!pJ(e.prng))throw new TypeError(es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=rs(e)}else t=rs()}return r===void 0?i=p:i=l,ye(i,"NAME","exponential"),e&&e.prng?(ye(i,"seed",null),ye(i,"seedLength",null),cJ(i,"state",mJ(null),eWr),ye(i,"stateLength",null),ye(i,"byteLength",null),ye(i,"toJSON",mJ(null)),ye(i,"PRNG",t)):(K0(i,"seed",n),K0(i,"seedLength",a),cJ(i,"state",v,f),K0(i,"stateLength",u),K0(i,"byteLength",o),ye(i,"toJSON",c),ye(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=iWr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return dJ(t,r)}function p(m){return tWr(m)||m<=0?NaN:dJ(t,m)}}hJ.exports=nWr});var yJ=s((pce,qJ)=>{"use strict";var aWr=uf(),sWr=aWr();qJ.exports=sWr});var EJ=s((gce,wJ)=>{"use strict";var uWr=w(),bJ=yJ(),oWr=uf();uWr(bJ,"factory",oWr);wJ.exports=bJ});var SJ=s((mce,OJ)=>{"use strict";var NJ=D().isPrimitive,AJ=y();function fWr(r,e){return NJ(r)?NJ(e)?null:new TypeError(AJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(AJ("invalid argument. First argument must be a positive number. Value: `%s`.",r))}OJ.exports=fWr});var IJ=s((dce,TJ)=>{"use strict";function vWr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}TJ.exports=vWr});var of=s((hce,kJ)=>{"use strict";var vt=w(),ts=R(),_J=M(),LJ=I(),PJ=L(),RJ=O(),FJ=S(),cWr=C(),Ri=kn().factory,MJ=E(),lWr=B(),is=y(),pWr=SJ(),BJ=IJ();function gWr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Ri();else if(arguments.length===1){if(e=arguments[0],!LJ(e))throw new TypeError(is("invalid argument. Options argument must be an object. Value: `%s`.",e));if(RJ(e,"prng")){if(!PJ(e.prng))throw new TypeError(is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Ri({prng:e.prng})}else r=Ri(e)}else{if(a=arguments[0],u=arguments[1],n=pWr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!LJ(e))throw new TypeError(is("invalid argument. Options argument must be an object. Value: `%s`.",e));if(RJ(e,"prng")){if(!PJ(e.prng))throw new TypeError(is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Ri({prng:e.prng})}else r=Ri(e)}else r=Ri()}return a===void 0?i=d:i=h,t=r.PRNG,vt(i,"NAME","f"),e&&e.prng?(vt(i,"seed",null),vt(i,"seedLength",null),_J(i,"state",FJ(null),cWr),vt(i,"stateLength",null),vt(i,"byteLength",null),vt(i,"toJSON",FJ(null))):(ts(i,"seed",o),ts(i,"seedLength",v),_J(i,"state",l,p),ts(i,"stateLength",f),ts(i,"byteLength",c),vt(i,"toJSON",m)),vt(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=lWr(t.state),a===void 0?g.params=[]:g.params=[a,u],g}function h(){return BJ(r,a,u)}function d(g,q){return MJ(g)||MJ(q)||g<=0||q<=0?NaN:BJ(r,g,q)}}kJ.exports=gWr});var CJ=s((qce,jJ)=>{"use strict";var mWr=of(),dWr=mWr();jJ.exports=dWr});var UJ=s((yce,VJ)=>{"use strict";var hWr=w(),GJ=CJ(),qWr=of();hWr(GJ,"factory",qWr);VJ.exports=GJ});var DJ=s((bce,WJ)=>{"use strict";var HJ=D().isPrimitive,yWr=k().isPrimitive,ff=sr(),vf=y();function bWr(r,e,t){return!HJ(r)||ff(r)?new TypeError(vf("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!HJ(e)||ff(e)?new TypeError(vf("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!yWr(t)||ff(t)?new TypeError(vf("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}WJ.exports=bWr});var XJ=s((wce,zJ)=>{"use strict";var wWr=W(),EWr=P();function NWr(r,e,t,i){return i+t*wWr(-EWr(r()),-1/e)}zJ.exports=NWr});var lf=s((Ece,KJ)=>{"use strict";var be=w(),ns=R(),JJ=M(),xJ=I(),YJ=L(),ZJ=O(),$J=S(),AWr=C(),as=z().factory,cf=E(),OWr=B(),ss=y(),SWr=DJ(),QJ=XJ();function TWr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=as();else if(arguments.length===1){if(e=arguments[0],!xJ(e))throw new TypeError(ss("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ZJ(e,"prng")){if(!YJ(e.prng))throw new TypeError(ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=as(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=SWr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!xJ(e))throw new TypeError(ss("invalid argument. Options argument must be an object. Value: `%s`.",e));if(ZJ(e,"prng")){if(!YJ(e.prng))throw new TypeError(ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=as(e)}else t=as()}return r===void 0?i=d:i=h,be(i,"NAME","frechet"),e&&e.prng?(be(i,"seed",null),be(i,"seedLength",null),JJ(i,"state",$J(null),AWr),be(i,"stateLength",null),be(i,"byteLength",null),be(i,"toJSON",$J(null)),be(i,"PRNG",t)):(ns(i,"seed",o),ns(i,"seedLength",v),JJ(i,"state",l,p),ns(i,"stateLength",f),ns(i,"byteLength",c),be(i,"toJSON",m),be(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=OWr(t.state),r===void 0?g.params=[]:g.params=[r,a,u],g}function h(){return QJ(t,r,a,u)}function d(g,q,N){return cf(g)||cf(q)||cf(N)||g<=0||q<=0?NaN:QJ(t,g,q,N)}}KJ.exports=TWr});var ex=s((Nce,rx)=>{"use strict";var IWr=lf(),_Wr=IWr();rx.exports=_Wr});var nx=s((Ace,ix)=>{"use strict";var LWr=w(),tx=ex(),PWr=lf();LWr(tx,"factory",PWr);ix.exports=tx});var ux=s((Oce,sx)=>{"use strict";var RWr=Q(),ax=P();function FWr(r,e){var t=r();return t===0&&(t=r()),RWr(ax(t)/ax(1-e))}sx.exports=FWr});var pf=s((Sce,gx)=>{"use strict";var we=w(),us=R(),ox=M(),fx=I(),MWr=qn().isPrimitive,vx=L(),cx=O(),lx=S(),BWr=C(),os=z().factory,kWr=E(),jWr=B(),fs=y(),px=ux();function CWr(){var r,e,t,i;if(arguments.length===0)e=os();else if(arguments.length===1&&fx(arguments[0]))if(r=arguments[0],cx(r,"prng")){if(!vx(r.prng))throw new TypeError(fs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=os(r);else{if(i=arguments[0],!MWr(i))throw new TypeError(fs("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!fx(r))throw new TypeError(fs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(cx(r,"prng")){if(!vx(r.prng))throw new TypeError(fs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=os(r)}else e=os()}return i===void 0?t=p:t=l,we(t,"NAME","geometric"),r&&r.prng?(we(t,"seed",null),we(t,"seedLength",null),ox(t,"state",lx(null),BWr),we(t,"stateLength",null),we(t,"byteLength",null),we(t,"toJSON",lx(null)),we(t,"PRNG",e)):(us(t,"seed",n),us(t,"seedLength",a),ox(t,"state",v,f),us(t,"stateLength",u),us(t,"byteLength",o),we(t,"toJSON",c),we(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=jWr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return px(e,i)}function p(m){return kWr(m)||m<0||m>1?NaN:px(e,m)}}gx.exports=CWr});var dx=s((Tce,mx)=>{"use strict";var GWr=pf(),VWr=GWr();mx.exports=VWr});var yx=s((Ice,qx)=>{"use strict";var UWr=w(),hx=dx(),HWr=pf();UWr(hx,"factory",HWr);qx.exports=hx});var Ex=s((_ce,wx)=>{"use strict";var WWr=k().isPrimitive,DWr=D().isPrimitive,bx=y(),zWr=sr();function XWr(r,e){return!WWr(r)||zWr(r)?new TypeError(bx("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):DWr(e)?null:new TypeError(bx("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}wx.exports=XWr});var Ox=s((Lce,Ax)=>{"use strict";var Nx=P();function JWr(r,e,t){return e-t*Nx(-Nx(r()))}Ax.exports=JWr});var gf=s((Pce,Fx)=>{"use strict";var Ee=w(),vs=R(),Sx=M(),Tx=I(),Ix=L(),_x=O(),Lx=S(),xWr=C(),cs=z().factory,Px=E(),YWr=B(),ls=y(),ZWr=Ex(),Rx=Ox();function $Wr(){var r,e,t,i,n,a;if(arguments.length===0)t=cs();else if(arguments.length===1){if(e=arguments[0],!Tx(e))throw new TypeError(ls("invalid argument. Options argument must be an object. Value: `%s`.",e));if(_x(e,"prng")){if(!Ix(e.prng))throw new TypeError(ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=cs(e)}else{if(a=arguments[0],r=arguments[1],n=ZWr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!Tx(e))throw new TypeError(ls("invalid argument. Options argument must be an object. Value: `%s`.",e));if(_x(e,"prng")){if(!Ix(e.prng))throw new TypeError(ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=cs(e)}else t=cs()}return a===void 0?i=h:i=m,Ee(i,"NAME","gumbel"),e&&e.prng?(Ee(i,"seed",null),Ee(i,"seedLength",null),Sx(i,"state",Lx(null),xWr),Ee(i,"stateLength",null),Ee(i,"byteLength",null),Ee(i,"toJSON",Lx(null)),Ee(i,"PRNG",t)):(vs(i,"seed",u),vs(i,"seedLength",o),Sx(i,"state",c,l),vs(i,"stateLength",v),vs(i,"byteLength",f),Ee(i,"toJSON",p),Ee(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=YWr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return Rx(t,a,r)}function h(d,g){return Px(d)||Px(g)||g<=0?NaN:Rx(t,d,g)}}Fx.exports=$Wr});var Bx=s((Rce,Mx)=>{"use strict";var QWr=gf(),KWr=QWr();Mx.exports=KWr});var Cx=s((Fce,jx)=>{"use strict";var rDr=w(),kx=Bx(),eDr=gf();rDr(kx,"factory",eDr);jx.exports=kx});var Vx=s((Mce,Gx)=>{"use strict";var tDr=Q();function iDr(r){return tDr(r)===r&&r>=0}Gx.exports=iDr});var Hx=s((Bce,Ux)=>{"use strict";var nDr=Vx();Ux.exports=nDr});var Dx=s((kce,Wx)=>{"use strict";var mf=Je().isPrimitive,jn=y();function aDr(r,e,t){return mf(r)?mf(e)?mf(t)?t>r?new RangeError(jn("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(jn("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(jn("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(jn("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(jn("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}Wx.exports=aDr});var zx=s((jce,sDr)=>{sDr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var Jx=s((Cce,Xx)=>{"use strict";var uDr=E(),oDr=Ir(),fDr=ri(),vDr=_(),cDr=zx(),lDr=170;function pDr(r){return uDr(r)?NaN:oDr(r)?r<0?NaN:r<=lDr?cDr[r]:vDr:fDr(r+1)}Xx.exports=pDr});var Yx=s((Gce,xx)=>{"use strict";var gDr=Jx();xx.exports=gDr});var $x=s((Vce,Zx)=>{"use strict";var ct=Yx();function mDr(r,e,t,i){var n,a,u;for(i<t?(n=ct(t)*ct(e+t-i)/(ct(e+t)*ct(t-i)),u=0):(n=ct(e)*ct(i)/(ct(i-t)*ct(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}Zx.exports=mDr});var Kx=s((Uce,Qx)=>{"use strict";var ps=$x();function dDr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=ps(r,n,a,u),t-o):(a=t,n=e-t,o=ps(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=ps(r,n,a,u),o):(n=e-t,a=t,o=ps(r,n,a,u),i-o))}Qx.exports=dDr});var hf=s((Hce,uY)=>{"use strict";var Ne=w(),gs=R(),rY=M(),eY=I(),tY=L(),iY=O(),nY=S(),hDr=C(),ms=z().factory,df=Hx(),aY=_(),qDr=B(),ds=y(),yDr=Dx(),sY=Kx();function bDr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=ms();else if(arguments.length===1){if(r=arguments[0],!eY(r))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",r));if(iY(r,"prng")){if(!tY(r.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ms(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=yDr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!eY(r))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",r));if(iY(r,"prng")){if(!tY(r.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ms(r)}else e=ms()}return n===void 0?t=d:t=h,Ne(t,"NAME","hypergeometric"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),rY(t,"state",nY(null),hDr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",nY(null)),Ne(t,"PRNG",e)):(gs(t,"seed",o),gs(t,"seedLength",v),rY(t,"state",l,p),gs(t,"stateLength",f),gs(t,"byteLength",c),Ne(t,"toJSON",m),Ne(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=qDr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return sY(e,n,a,u)}function d(g,q,N){return g===aY||q===aY||!df(g)||!df(q)||!df(N)||N>g?NaN:sY(e,g,q,N)}}uY.exports=bDr});var fY=s((Wce,oY)=>{"use strict";var wDr=hf(),EDr=wDr();oY.exports=EDr});var lY=s((Dce,cY)=>{"use strict";var NDr=w(),vY=fY(),ADr=hf();NDr(vY,"factory",ADr);cY.exports=vY});var dY=s((zce,mY)=>{"use strict";var pY=D().isPrimitive,gY=y();function ODr(r,e){return pY(r)?pY(e)?null:new TypeError(gY("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(gY("invalid argument. First argument must be a positive number. Value: `%s`.",r))}mY.exports=ODr});var qf=s((Xce,NY)=>{"use strict";var lt=w(),hs=R(),hY=M(),qY=I(),yY=L(),bY=O(),wY=S(),SDr=C(),Fi=Si().factory,EY=E(),TDr=B(),qs=y(),IDr=dY();function _Dr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Fi();else if(arguments.length===1){if(i=arguments[0],!qY(i))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(bY(i,"prng")){if(!yY(i.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Fi({prng:i.prng})}else r=Fi(i)}else{if(e=arguments[0],t=arguments[1],u=IDr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!qY(i))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(bY(i,"prng")){if(!yY(i.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Fi(e,t,{prng:i.prng})}else r=Fi(e,t,i)}else r=Fi(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,lt(a,"NAME","invgamma"),i&&i.prng?(lt(a,"seed",null),lt(a,"seedLength",null),hY(a,"state",wY(null),SDr),lt(a,"stateLength",null),lt(a,"byteLength",null),lt(a,"toJSON",wY(null))):(hs(a,"seed",o),hs(a,"seedLength",v),hY(a,"state",l,p),hs(a,"stateLength",f),hs(a,"byteLength",c),lt(a,"toJSON",m)),lt(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=TDr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return 1/r()}function d(g,q){return EY(g)||EY(q)||g<=0||q<=0?NaN:1/r(g,q)}}NY.exports=_Dr});var OY=s((Jce,AY)=>{"use strict";var LDr=qf(),PDr=LDr();AY.exports=PDr});var IY=s((xce,TY)=>{"use strict";var RDr=w(),SY=OY(),FDr=qf();RDr(SY,"factory",FDr);TY.exports=SY});var RY=s((Yce,PY)=>{"use strict";var _Y=D().isPrimitive,LY=y();function MDr(r,e){return _Y(r)?_Y(e)?null:new TypeError(LY("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(LY("invalid argument. First argument must be a positive number. Value: `%s`.",r))}PY.exports=MDr});var BY=s((Zce,MY)=>{"use strict";var FY=W();function BDr(r,e,t){var i=r();return FY(1-FY(1-i,1/t),1/e)}MY.exports=BDr});var yf=s(($ce,WY)=>{"use strict";var Ae=w(),ys=R(),kY=M(),jY=I(),CY=L(),GY=O(),VY=S(),kDr=C(),bs=z().factory,UY=E(),jDr=B(),ws=y(),CDr=RY(),HY=BY();function GDr(){var r,e,t,i,n,a;if(arguments.length===0)e=bs();else if(arguments.length===1){if(r=arguments[0],!jY(r))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",r));if(GY(r,"prng")){if(!CY(r.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=bs(r)}else{if(n=arguments[0],a=arguments[1],i=CDr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!jY(r))throw new TypeError(ws("invalid argument. Options argument must be an object. Value: `%s`.",r));if(GY(r,"prng")){if(!CY(r.prng))throw new TypeError(ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=bs(r)}else e=bs()}return n===void 0?t=h:t=m,Ae(t,"NAME","kumaraswamy"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),kY(t,"state",VY(null),kDr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",VY(null)),Ae(t,"PRNG",e)):(ys(t,"seed",u),ys(t,"seedLength",o),kY(t,"state",c,l),ys(t,"stateLength",v),ys(t,"byteLength",f),Ae(t,"toJSON",p),Ae(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=jDr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return HY(e,n,a)}function h(d,g){return UY(d)||UY(g)||d<=0||g<=0?NaN:HY(e,d,g)}}WY.exports=GDr});var zY=s((Qce,DY)=>{"use strict";var VDr=yf(),UDr=VDr();DY.exports=UDr});var xY=s((Kce,JY)=>{"use strict";var HDr=w(),XY=zY(),WDr=yf();HDr(XY,"factory",WDr);JY.exports=XY});var $Y=s((rle,ZY)=>{"use strict";var DDr=k().isPrimitive,zDr=D().isPrimitive,YY=y(),XDr=sr();function JDr(r,e){return!DDr(r)||XDr(r)?new TypeError(YY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):zDr(e)?null:new TypeError(YY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}ZY.exports=JDr});var KY=s((ele,QY)=>{"use strict";var xDr=R0(),YDr=J(),ZDr=P();function $Dr(r,e,t){var i=r()-.5;return e-t*xDr(i)*ZDr(1-2*YDr(i))}QY.exports=$Dr});var bf=s((tle,uZ)=>{"use strict";var Oe=w(),Es=R(),rZ=M(),eZ=I(),tZ=L(),iZ=O(),nZ=S(),QDr=C(),Ns=z().factory,aZ=E(),KDr=B(),As=y(),rzr=$Y(),sZ=KY();function ezr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ns();else if(arguments.length===1){if(r=arguments[0],!eZ(r))throw new TypeError(As("invalid argument. Options argument must be an object. Value: `%s`.",r));if(iZ(r,"prng")){if(!tZ(r.prng))throw new TypeError(As("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r)}else{if(n=arguments[0],a=arguments[1],i=rzr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!eZ(r))throw new TypeError(As("invalid argument. Options argument must be an object. Value: `%s`.",r));if(iZ(r,"prng")){if(!tZ(r.prng))throw new TypeError(As("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ns(r)}else e=Ns()}return n===void 0?t=h:t=m,Oe(t,"NAME","laplace"),r&&r.prng?(Oe(t,"seed",null),Oe(t,"seedLength",null),rZ(t,"state",nZ(null),QDr),Oe(t,"stateLength",null),Oe(t,"byteLength",null),Oe(t,"toJSON",nZ(null)),Oe(t,"PRNG",e)):(Es(t,"seed",u),Es(t,"seedLength",o),rZ(t,"state",c,l),Es(t,"stateLength",v),Es(t,"byteLength",f),Oe(t,"toJSON",p),Oe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=KDr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return sZ(e,n,a)}function h(d,g){return aZ(d)||aZ(g)||g<=0?NaN:sZ(e,d,g)}}uZ.exports=ezr});var fZ=s((ile,oZ)=>{"use strict";var tzr=bf(),izr=tzr();oZ.exports=izr});var lZ=s((nle,cZ)=>{"use strict";var nzr=w(),vZ=fZ(),azr=bf();nzr(vZ,"factory",azr);cZ.exports=vZ});var mZ=s((ale,gZ)=>{"use strict";var szr=k().isPrimitive,uzr=D().isPrimitive,pZ=y(),ozr=sr();function fzr(r,e){return!szr(r)||ozr(r)?new TypeError(pZ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):uzr(e)?null:new TypeError(pZ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}gZ.exports=fzr});var hZ=s((sle,dZ)=>{"use strict";var vzr=i3();function czr(r,e,t){var i=vzr(1-r()/2,0,1);return e+t/(i*i)}dZ.exports=czr});var wf=s((ule,OZ)=>{"use strict";var Se=w(),Os=R(),qZ=M(),yZ=I(),bZ=L(),wZ=O(),EZ=S(),lzr=C(),Ss=z().factory,NZ=E(),pzr=B(),Ts=y(),gzr=mZ(),AZ=hZ();function mzr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ss();else if(arguments.length===1){if(r=arguments[0],!yZ(r))throw new TypeError(Ts("invalid argument. Options argument must be an object. Value: `%s`.",r));if(wZ(r,"prng")){if(!bZ(r.prng))throw new TypeError(Ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ss(r)}else{if(n=arguments[0],a=arguments[1],i=gzr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!yZ(r))throw new TypeError(Ts("invalid argument. Options argument must be an object. Value: `%s`.",r));if(wZ(r,"prng")){if(!bZ(r.prng))throw new TypeError(Ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ss(r)}else e=Ss()}return n===void 0?t=h:t=m,Se(t,"NAME","levy"),r&&r.prng?(Se(t,"seed",null),Se(t,"seedLength",null),qZ(t,"state",EZ(null),lzr),Se(t,"stateLength",null),Se(t,"byteLength",null),Se(t,"toJSON",EZ(null)),Se(t,"PRNG",e)):(Os(t,"seed",u),Os(t,"seedLength",o),qZ(t,"state",c,l),Os(t,"stateLength",v),Os(t,"byteLength",f),Se(t,"toJSON",p),Se(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=pzr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return AZ(e,n,a)}function h(d,g){return NZ(d)||NZ(g)||g<=0?NaN:AZ(e,d,g)}}OZ.exports=mzr});var TZ=s((ole,SZ)=>{"use strict";var dzr=wf(),hzr=dzr();SZ.exports=hzr});var LZ=s((fle,_Z)=>{"use strict";var qzr=w(),IZ=TZ(),yzr=wf();qzr(IZ,"factory",yzr);_Z.exports=IZ});var FZ=s((vle,RZ)=>{"use strict";var bzr=k().isPrimitive,wzr=D().isPrimitive,Ezr=sr(),PZ=y();function Nzr(r,e){return!bzr(r)||Ezr(r)?new TypeError(PZ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):wzr(e)?null:new TypeError(PZ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}RZ.exports=Nzr});var BZ=s((cle,MZ)=>{"use strict";var Azr=P();function Ozr(r,e,t){var i=r();return e+t*Azr(i/(1-i))}MZ.exports=Ozr});var Ef=s((lle,WZ)=>{"use strict";var Te=w(),Is=R(),kZ=M(),jZ=I(),CZ=L(),GZ=O(),VZ=S(),Szr=C(),_s=z().factory,UZ=E(),Tzr=B(),Ls=y(),Izr=FZ(),HZ=BZ();function _zr(){var r,e,t,i,n,a;if(arguments.length===0)e=_s();else if(arguments.length===1){if(r=arguments[0],!jZ(r))throw new TypeError(Ls("invalid argument. Options argument must be an object. Value: `%s`.",r));if(GZ(r,"prng")){if(!CZ(r.prng))throw new TypeError(Ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=_s(r)}else{if(n=arguments[0],a=arguments[1],i=Izr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!jZ(r))throw new TypeError(Ls("invalid argument. Options argument must be an object. Value: `%s`.",r));if(GZ(r,"prng")){if(!CZ(r.prng))throw new TypeError(Ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=_s(r)}else e=_s()}return n===void 0?t=h:t=m,Te(t,"NAME","logistic"),r&&r.prng?(Te(t,"seed",null),Te(t,"seedLength",null),kZ(t,"state",VZ(null),Szr),Te(t,"stateLength",null),Te(t,"byteLength",null),Te(t,"toJSON",VZ(null)),Te(t,"PRNG",e)):(Is(t,"seed",u),Is(t,"seedLength",o),kZ(t,"state",c,l),Is(t,"stateLength",v),Is(t,"byteLength",f),Te(t,"toJSON",p),Te(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Tzr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return HZ(e,n,a)}function h(d,g){return UZ(d)||UZ(g)||g<=0?NaN:HZ(e,d,g)}}WZ.exports=_zr});var zZ=s((ple,DZ)=>{"use strict";var Lzr=Ef(),Pzr=Lzr();DZ.exports=Pzr});var xZ=s((gle,JZ)=>{"use strict";var Rzr=w(),XZ=zZ(),Fzr=Ef();Rzr(XZ,"factory",Fzr);JZ.exports=XZ});var $Z=s((mle,ZZ)=>{"use strict";var Mzr=k().isPrimitive,Bzr=D().isPrimitive,YZ=y(),kzr=sr();function jzr(r,e){return!Mzr(r)||kzr(r)?new TypeError(YZ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Bzr(e)?null:new TypeError(YZ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}ZZ.exports=jzr});var KZ=s((dle,QZ)=>{"use strict";var Czr=nr();function Gzr(r,e,t){return Czr(e+t*r())}QZ.exports=Gzr});var Nf=s((hle,u$)=>{"use strict";var pt=w(),Ps=R(),r$=M(),e$=I(),t$=L(),i$=O(),n$=S(),Vzr=C(),Mi=nt().factory,a$=E(),Uzr=B(),Rs=y(),Hzr=$Z(),s$=KZ();function Wzr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Mi();else if(arguments.length===1){if(t=arguments[0],!e$(t))throw new TypeError(Rs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(i$(t,"prng")){if(!t$(t.prng))throw new TypeError(Rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Mi({prng:t.prng})}else e=Mi(t)}else{if(u=arguments[0],r=arguments[1],a=Hzr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!e$(t))throw new TypeError(Rs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(i$(t,"prng")){if(!t$(t.prng))throw new TypeError(Rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Mi({prng:t.prng})}else e=Mi(t)}else e=Mi()}return u===void 0?n=d:n=h,i=e.PRNG,pt(n,"NAME","lognormal"),t&&t.prng?(pt(n,"seed",null),pt(n,"seedLength",null),r$(n,"state",n$(null),Vzr),pt(n,"stateLength",null),pt(n,"byteLength",null),pt(n,"toJSON",n$(null))):(Ps(n,"seed",o),Ps(n,"seedLength",v),r$(n,"state",l,p),Ps(n,"stateLength",f),Ps(n,"byteLength",c),pt(n,"toJSON",m)),pt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=Uzr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return s$(e,u,r)}function d(g,q){return a$(g)||a$(q)||q<=0?NaN:s$(e,g,q)}}u$.exports=Wzr});var f$=s((qle,o$)=>{"use strict";var Dzr=Nf(),zzr=Dzr();o$.exports=zzr});var l$=s((yle,c$)=>{"use strict";var Xzr=w(),v$=f$(),Jzr=Nf();Xzr(v$,"factory",Jzr);c$.exports=v$});var Af=s((ble,p$)=>{"use strict";var xzr=ii(),Yzr=Q(),Zzr=xzr-1;function $zr(){var r=Yzr(1+Zzr*Math.random());return r|0}p$.exports=$zr});var Tf=s((wle,q$)=>{"use strict";var Ie=w(),gt=R(),g$=M(),Of=O(),Qzr=I(),Kzr=fr().isPrimitive,rXr=Gr(),eXr=ae().isPrimitive,m$=Ra(),Dr=y(),Fs=ii(),Nr=Pt(),Bi=Ke(),tXr=B(),d$=Af(),Sf=Fs-1|0,iXr=Fs-1|0,nXr=16807,Ms=1,Bs=2,mt=2,Ar=4,Cn=5;function h$(r,e){var t;return e?t="option":t="argument",r.length<Cn+1?new RangeError(Dr("invalid %s. State array has insufficient length.",t)):r[0]!==Ms?new RangeError(Dr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ms,r[0])):r[1]!==Bs?new RangeError(Dr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Bs,r[1])):r[mt]!==1?new RangeError(Dr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[mt])):r[Ar]!==r.length-Cn?new RangeError(Dr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Cn,r[Ar])):null}function aXr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!Qzr(r))throw new TypeError(Dr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Of(r,"copy")&&(i.copy=r.copy,!Kzr(r.copy)))throw new TypeError(Dr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Of(r,"state")){if(t=r.state,i.state=!0,!m$(t))throw new TypeError(Dr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=h$(t,!0),u)throw u;i.copy===!1?e=t:(e=new Nr(t.length),Bi(t.length,t,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,1),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,t[Ar])}if(n===void 0)if(Of(r,"seed"))if(n=r.seed,i.seed=!0,eXr(n)){if(n>iXr)throw new RangeError(Dr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(rXr(n)&&n.length>0)a=n.length,e=new Nr(Cn+a),e[0]=Ms,e[1]=Bs,e[mt]=1,e[Ar]=a,Bi.ndarray(a,n,1,0,e,1,Ar+1),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,1),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Dr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=d$()|0}else n=d$()|0;return t===void 0&&(e=new Nr(Cn+1),e[0]=Ms,e[1]=Bs,e[mt]=1,e[Ar]=1,e[Ar+1]=n,t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,1),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),Ie(h,"NAME","minstd"),gt(h,"seed",o),gt(h,"seedLength",v),g$(h,"state",l,p),gt(h,"stateLength",f),gt(h,"byteLength",c),Ie(h,"toJSON",m),Ie(h,"MIN",1),Ie(h,"MAX",Fs-1),Ie(h,"normalized",d),Ie(d,"NAME",h.NAME),gt(d,"seed",o),gt(d,"seedLength",v),g$(d,"state",l,p),gt(d,"stateLength",f),gt(d,"byteLength",c),Ie(d,"toJSON",m),Ie(d,"MIN",(h.MIN-1)/Sf),Ie(d,"MAX",(h.MAX-1)/Sf),h;function o(){var g=e[Ar];return Bi(g,n,1,new Nr(g),1)}function v(){return e[Ar]}function f(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return Bi(g,e,1,new Nr(g),1)}function p(g){var q;if(!m$(g))throw new TypeError(Dr("invalid argument. Must provide an Int32Array. Value: `%s`.",g));if(q=h$(g,!1),q)throw q;i.copy===!1?i.state&&g.length===e.length?Bi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new Nr(g.length)),Bi(g.length,g,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,1),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,e[Ar])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=tXr(e),g.params=[],g}function h(){var g=t[0]|0;return g=nXr*g%Fs|0,t[0]=g,g|0}function d(){return(h()-1)/Sf}}q$.exports=aXr});var b$=s((Ele,y$)=>{"use strict";var sXr=Tf(),uXr=Af(),oXr=sXr({seed:uXr()});y$.exports=oXr});var N$=s((Nle,E$)=>{"use strict";var fXr=w(),w$=b$(),vXr=Tf();fXr(w$,"factory",vXr);E$.exports=w$});var O$=s((Ale,A$)=>{"use strict";var cXr=E(),lXr=8;function pXr(r,e,t){var i,n;for(n=0;n<lXr;n++)if(i=r(),cXr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}A$.exports=pXr});var If=s((Ole,S$)=>{"use strict";var gXr=ii(),mXr=Q(),dXr=gXr-1;function hXr(){var r=mXr(1+dXr*Math.random());return r|0}S$.exports=hXr});var Pf=s((Sle,R$)=>{"use strict";var _e=w(),dt=R(),T$=M(),_f=O(),qXr=I(),yXr=fr().isPrimitive,bXr=Gr(),wXr=ae().isPrimitive,I$=Ra(),ki=Ke(),EXr=Q(),Or=Pt(),Gn=ii(),NXr=B(),jr=y(),_$=O$(),L$=If(),Lf=Gn-1|0,AXr=Gn-1|0,OXr=16807,Tr=32,Cs=1,Gs=3,ht=2,ji=Tr+3,Sr=Tr+6,Vn=Tr+7,ks=ji+1,js=ji+2;function P$(r,e){var t;return e?t="option":t="argument",r.length<Vn+1?new RangeError(jr("invalid %s. State array has insufficient length.",t)):r[0]!==Cs?new RangeError(jr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Cs,r[0])):r[1]!==Gs?new RangeError(jr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Gs,r[1])):r[ht]!==Tr?new RangeError(jr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Tr,r[ht])):r[ji]!==2?new RangeError(jr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[ji])):r[Sr]!==r.length-Vn?new RangeError(jr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Vn,r[Sr])):null}function SXr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!qXr(r))throw new TypeError(jr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(_f(r,"copy")&&(i.copy=r.copy,!yXr(r.copy)))throw new TypeError(jr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(_f(r,"state")){if(t=r.state,i.state=!0,!I$(t))throw new TypeError(jr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=P$(t,!0),u)throw u;i.copy===!1?e=t:(e=new Or(t.length),ki(t.length,t,1,e,1)),t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,Tr),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,t[Sr])}if(n===void 0)if(_f(r,"seed"))if(n=r.seed,i.seed=!0,wXr(n)){if(n>AXr)throw new RangeError(jr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(bXr(n)&&n.length>0)a=n.length,e=new Or(Vn+a),e[0]=Cs,e[1]=Gs,e[ht]=Tr,e[ji]=2,e[js]=n[0],e[Sr]=a,ki.ndarray(a,n,1,0,e,1,Sr+1),t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,Tr),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,a),t=_$(h,t,Tr),e[ks]=t[0];else throw new TypeError(jr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=L$()|0}else n=L$()|0;return t===void 0&&(e=new Or(Vn+1),e[0]=Cs,e[1]=Gs,e[ht]=Tr,e[ji]=2,e[js]=n,e[Sr]=1,e[Sr+1]=n,t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,Tr),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,1),t=_$(h,t,Tr),e[ks]=t[0]),_e(d,"NAME","minstd-shuffle"),dt(d,"seed",o),dt(d,"seedLength",v),T$(d,"state",l,p),dt(d,"stateLength",f),dt(d,"byteLength",c),_e(d,"toJSON",m),_e(d,"MIN",1),_e(d,"MAX",Gn-1),_e(d,"normalized",g),_e(g,"NAME",d.NAME),dt(g,"seed",o),dt(g,"seedLength",v),T$(g,"state",l,p),dt(g,"stateLength",f),dt(g,"byteLength",c),_e(g,"toJSON",m),_e(g,"MIN",(d.MIN-1)/Lf),_e(g,"MAX",(d.MAX-1)/Lf),d;function o(){var q=e[Sr];return ki(q,n,1,new Or(q),1)}function v(){return e[Sr]}function f(){return e.length}function c(){return e.byteLength}function l(){var q=e.length;return ki(q,e,1,new Or(q),1)}function p(q){var N;if(!I$(q))throw new TypeError(jr("invalid argument. Must provide an Int32Array. Value: `%s`.",q));if(N=P$(q,!1),N)throw N;i.copy===!1?i.state&&q.length===e.length?ki(q.length,q,1,e,1):(e=q,i.state=!0):(q.length!==e.length&&(e=new Or(q.length)),ki(q.length,q,1,e,1)),t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,Tr),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,e[Sr])}function m(){var q={};return q.type="PRNG",q.name=d.NAME,q.state=NXr(e),q.params=[],q}function h(){var q=e[js]|0;return q=OXr*q%Gn|0,e[js]=q,q|0}function d(){var q,N;return q=e[ks],N=EXr(Tr*(q/Gn)),q=t[N],e[ks]=q,t[N]=h(),q}function g(){return(d()-1)/Lf}}R$.exports=SXr});var M$=s((Tle,F$)=>{"use strict";var TXr=Pf(),IXr=If(),_Xr=TXr({seed:IXr()});F$.exports=_Xr});var j$=s((Ile,k$)=>{"use strict";var LXr=w(),B$=M$(),PXr=Pf();LXr(B$,"factory",PXr);k$.exports=B$});var G$=s((_le,C$)=>{"use strict";var RXr=nr();function FXr(r,e){for(var t=r(),i=1;t>RXr(-e);)i+=1,t*=r();return i-1}C$.exports=FXr});var U$=s((Lle,V$)=>{"use strict";var MXr=Q();function BXr(r){return MXr(r)===r&&r<0}V$.exports=BXr});var W$=s((Ple,H$)=>{"use strict";var kXr=U$();H$.exports=kXr});var z$=s((Rle,D$)=>{"use strict";var jXr=W$(),CXr=rn();function GXr(r){return jXr(r)?NaN:CXr(r+1)}D$.exports=GXr});var J$=s((Fle,X$)=>{"use strict";var VXr=z$();X$.exports=VXr});var $$=s((Mle,Z$)=>{"use strict";var UXr=J$(),x$=Q(),HXr=R0(),WXr=G(),Y$=J(),Vs=P(),DXr=O1(),zXr=1/12,XXr=1/360;function JXr(r,e){var t,i,n,a,u,o,v,f,c,l;for(t=WXr(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,u=-3.6224/(v-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-Y$(c))+v,c+=e+.445,x$(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=HXr(c)*.5-c,l=u*r()),a=.5-Y$(c),(a>=.013||a>=l)&&(f=x$((2*o/a+v)*c+e+.445),l*=i/(o/(a*a)+v),c=(f+.5)*Vs(e/f),c+=-e-DXr+f,c-=(zXr-XXr/(f*f))/f,f>=10&&c>=Vs(l*t)||(c=f*Vs(e)-e-UXr(f),f>=0&&f<=9&&c>=Vs(l))))return f}}Z$.exports=JXr});var K$=s((Ble,Q$)=>{"use strict";var xXr=G$(),YXr=$$();function ZXr(r,e){return e<30?xXr(r,e):YXr(r,e)}Q$.exports=ZXr});var Rf=s((kle,sQ)=>{"use strict";var Le=w(),Us=R(),rQ=M(),$Xr=D().isPrimitive,eQ=I(),tQ=L(),iQ=O(),nQ=S(),QXr=C(),Hs=z().factory,KXr=E(),rJr=B(),Ws=y(),aQ=K$();function eJr(){var r,e,t,i;if(arguments.length===0)t=Hs();else if(arguments.length===1&&eQ(arguments[0]))if(e=arguments[0],iQ(e,"prng")){if(!tQ(e.prng))throw new TypeError(Ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Hs(e);else{if(r=arguments[0],!$Xr(r))throw new TypeError(Ws("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!eQ(e))throw new TypeError(Ws("invalid argument. Options argument must be an object. Value: `%s`.",e));if(iQ(e,"prng")){if(!tQ(e.prng))throw new TypeError(Ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Hs(e)}else t=Hs()}return r===void 0?i=p:i=l,Le(i,"NAME","poisson"),e&&e.prng?(Le(i,"seed",null),Le(i,"seedLength",null),rQ(i,"state",nQ(null),QXr),Le(i,"stateLength",null),Le(i,"byteLength",null),Le(i,"toJSON",nQ(null)),Le(i,"PRNG",t)):(Us(i,"seed",n),Us(i,"seedLength",a),rQ(i,"state",v,f),Us(i,"stateLength",u),Us(i,"byteLength",o),Le(i,"toJSON",c),Le(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=rJr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return aQ(t,r)}function p(m){return KXr(m)||m<=0?NaN:aQ(t,m)}}sQ.exports=eJr});var oQ=s((jle,uQ)=>{"use strict";var tJr=Rf(),iJr=tJr();uQ.exports=iJr});var Ff=s((Cle,vQ)=>{"use strict";var nJr=w(),fQ=oQ(),aJr=Rf();nJr(fQ,"factory",aJr);vQ.exports=fQ});var lQ=s((Gle,cQ)=>{"use strict";var sJr=D().isPrimitive,uJr=k().isPrimitive,Mf=y(),oJr=sr();function fJr(r,e){return sJr(r)?!uJr(e)||oJr(e)?new TypeError(Mf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Mf("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Mf("invalid argument. First argument must be a positive number. Value: `%s`.",r))}cQ.exports=fJr});var Cf=s((Vle,bQ)=>{"use strict";var qt=w(),Ds=R(),pQ=M(),Ci=O(),gQ=I(),Bf=Kr(),mQ=fr().isPrimitive,dQ=L(),hQ=S(),vJr=C(),qQ=E(),Gi=Ff().factory,zs=Si().factory,kf=Ke(),jf=lr(),yQ=Fn(),cJr=B(),Pe=y(),lJr=lQ();function pJr(){var r,e,t,i,n,a,u,o,v,f;if(u=!0,arguments.length===0)i={copy:!1},t=Gi(i);else if(arguments.length===1){if(i=arguments[0],!gQ(i))throw new TypeError(Pe("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ci(i,"copy")&&!mQ(i.copy))throw new TypeError(Pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ci(i,"prng")){if(!dQ(i.prng))throw new TypeError(Pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Gi({prng:i.prng})}else{if(Ci(i,"state")&&!Bf(i.state))throw new TypeError(Pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=yQ({},i),i.copy===!1?u=!1:i.state&&(i.state=kf(i.state.length,i.state,1,new jf(i.state.length),1)),i.copy=!1,t=Gi(i)}}else{if(f=arguments[0],v=arguments[1],o=lJr(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!gQ(i))throw new TypeError(Pe("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ci(i,"copy")&&!mQ(i.copy))throw new TypeError(Pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ci(i,"prng")){if(!dQ(i.prng))throw new TypeError(Pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Gi({prng:i.prng})}else{if(Ci(i,"state")&&!Bf(i.state))throw new TypeError(Pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=yQ({},i),i.copy===!1?u=!1:i.state&&(i.state=kf(i.state.length,i.state,1,new jf(i.state.length),1)),i.copy=!1,t=Gi(i)}}else i={copy:!1},t=Gi(i)}return i&&i.prng?f===void 0?r=zs({prng:i.prng}):r=zs(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=zs({state:e,copy:!1}):r=zs(f,v/(1-v),{state:e,copy:!1})),f===void 0?n=N:n=q,a=t.PRNG,qt(n,"NAME","negative-binomial"),i&&i.prng?(qt(n,"seed",null),qt(n,"seedLength",null),pQ(n,"state",hQ(null),vJr),qt(n,"stateLength",null),qt(n,"byteLength",null),qt(n,"toJSON",hQ(null))):(Ds(n,"seed",c),Ds(n,"seedLength",l),pQ(n,"state",h,d),Ds(n,"stateLength",p),Ds(n,"byteLength",m),qt(n,"toJSON",g)),qt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function m(){return a.byteLength}function h(){return a.state}function d(A){if(!Bf(A))throw new TypeError(Pe("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));u&&(A=kf(A.length,A,1,new jf(A.length),1)),a.state=A}function g(){var A={};return A.type="PRNG",A.name=n.NAME,A.state=cJr(a.state),f===void 0?A.params=[]:A.params=[f,v],A}function q(){return t(r())}function N(A,j){return qQ(A)||qQ(j)||j<=0||j>=1?NaN:t(r(A,j/(1-j)))}}bQ.exports=pJr});var EQ=s((Ule,wQ)=>{"use strict";var gJr=Cf(),mJr=gJr();wQ.exports=mJr});var OQ=s((Hle,AQ)=>{"use strict";var dJr=w(),NQ=EQ(),hJr=Cf();dJr(NQ,"factory",hJr);AQ.exports=NQ});var IQ=s((Wle,TQ)=>{"use strict";var qJr=k().isPrimitive,yJr=D().isPrimitive,SQ=y(),bJr=sr();function wJr(r,e){return!qJr(r)||bJr(r)?new TypeError(SQ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):yJr(e)?null:new TypeError(SQ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}TQ.exports=wJr});var LQ=s((Dle,_Q)=>{"use strict";function EJr(r,e,t){return e+t*r()}_Q.exports=EJr});var Gf=s((zle,CQ)=>{"use strict";var yt=w(),Xs=R(),PQ=M(),RQ=I(),FQ=L(),MQ=O(),BQ=S(),NJr=C(),Vi=nt().factory,kQ=E(),AJr=B(),Js=y(),OJr=IQ(),jQ=LQ();function SJr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Vi();else if(arguments.length===1){if(t=arguments[0],!RQ(t))throw new TypeError(Js("invalid argument. Options argument must be an object. Value: `%s`.",t));if(MQ(t,"prng")){if(!FQ(t.prng))throw new TypeError(Js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Vi({prng:t.prng})}else e=Vi(t)}else{if(u=arguments[0],r=arguments[1],a=OJr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!RQ(t))throw new TypeError(Js("invalid argument. Options argument must be an object. Value: `%s`.",t));if(MQ(t,"prng")){if(!FQ(t.prng))throw new TypeError(Js("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Vi({prng:t.prng})}else e=Vi(t)}else e=Vi()}return u===void 0?n=d:n=h,i=e.PRNG,yt(n,"NAME","normal"),t&&t.prng?(yt(n,"seed",null),yt(n,"seedLength",null),PQ(n,"state",BQ(null),NJr),yt(n,"stateLength",null),yt(n,"byteLength",null),yt(n,"toJSON",BQ(null))):(Xs(n,"seed",o),Xs(n,"seedLength",v),PQ(n,"state",l,p),Xs(n,"stateLength",f),Xs(n,"byteLength",c),yt(n,"toJSON",m)),yt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=AJr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return jQ(e,u,r)}function d(g,q){return kQ(g)||kQ(q)||q<=0?NaN:jQ(e,g,q)}}CQ.exports=SJr});var VQ=s((Xle,GQ)=>{"use strict";var TJr=Gf(),IJr=TJr();GQ.exports=IJr});var WQ=s((Jle,HQ)=>{"use strict";var _Jr=w(),UQ=VQ(),LJr=Gf();_Jr(UQ,"factory",LJr);HQ.exports=UQ});var JQ=s((xle,XQ)=>{"use strict";var DQ=D().isPrimitive,zQ=y();function PJr(r,e){return DQ(r)?DQ(e)?null:new TypeError(zQ("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(zQ("invalid argument. First argument must be a positive number. Value: `%s`.",r))}XQ.exports=PJr});var YQ=s((Yle,xQ)=>{"use strict";var RJr=W();function FJr(r,e,t){return t/RJr(r(),1/e)}xQ.exports=FJr});var Vf=s((Zle,iK)=>{"use strict";var Re=w(),xs=R(),ZQ=M(),$Q=I(),QQ=L(),KQ=O(),rK=S(),MJr=C(),Ys=z().factory,eK=E(),BJr=B(),Zs=y(),kJr=JQ(),tK=YQ();function jJr(){var r,e,t,i,n,a;if(arguments.length===0)i=Ys();else if(arguments.length===1){if(t=arguments[0],!$Q(t))throw new TypeError(Zs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(KQ(t,"prng")){if(!QQ(t.prng))throw new TypeError(Zs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Ys(t)}else{if(r=arguments[0],e=arguments[1],a=kJr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!$Q(t))throw new TypeError(Zs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(KQ(t,"prng")){if(!QQ(t.prng))throw new TypeError(Zs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Ys(t)}else i=Ys()}return r===void 0?n=h:n=m,Re(n,"NAME","pareto-type1"),t&&t.prng?(Re(n,"seed",null),Re(n,"seedLength",null),ZQ(n,"state",rK(null),MJr),Re(n,"stateLength",null),Re(n,"byteLength",null),Re(n,"toJSON",rK(null)),Re(n,"PRNG",i)):(xs(n,"seed",u),xs(n,"seedLength",o),ZQ(n,"state",c,l),xs(n,"stateLength",v),xs(n,"byteLength",f),Re(n,"toJSON",p),Re(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=BJr(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function m(){return tK(i,r,e)}function h(d,g){return eK(d)||eK(g)||d<=0||g<=0?NaN:tK(i,d,g)}}iK.exports=jJr});var aK=s(($le,nK)=>{"use strict";var CJr=Vf(),GJr=CJr();nK.exports=GJr});var oK=s((Qle,uK)=>{"use strict";var VJr=w(),sK=aK(),UJr=Vf();VJr(sK,"factory",UJr);uK.exports=sK});var vK=s((Kle,fK)=>{"use strict";var HJr=G(),WJr=P();function DJr(r,e){return e*HJr(-2*WJr(r()))}fK.exports=DJr});var Uf=s((r4e,hK)=>{"use strict";var Fe=w(),$s=R(),cK=M(),zJr=D().isPrimitive,lK=I(),pK=L(),gK=O(),mK=S(),XJr=C(),Qs=z().factory,JJr=E(),xJr=B(),Ks=y(),dK=vK();function YJr(){var r,e,t,i;if(arguments.length===0)t=Qs();else if(arguments.length===1&&lK(arguments[0]))if(e=arguments[0],gK(e,"prng")){if(!pK(e.prng))throw new TypeError(Ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Qs(e);else{if(r=arguments[0],!zJr(r))throw new TypeError(Ks("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!lK(e))throw new TypeError(Ks("invalid argument. Options argument must be an object. Value: `%s`.",e));if(gK(e,"prng")){if(!pK(e.prng))throw new TypeError(Ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Qs(e)}else t=Qs()}return r===void 0?i=p:i=l,Fe(i,"NAME","rayleigh"),e&&e.prng?(Fe(i,"seed",null),Fe(i,"seedLength",null),cK(i,"state",mK(null),XJr),Fe(i,"stateLength",null),Fe(i,"byteLength",null),Fe(i,"toJSON",mK(null)),Fe(i,"PRNG",t)):($s(i,"seed",n),$s(i,"seedLength",a),cK(i,"state",v,f),$s(i,"stateLength",u),$s(i,"byteLength",o),Fe(i,"toJSON",c),Fe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=xJr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return dK(t,r)}function p(m){return JJr(m)||m<=0?NaN:dK(t,m)}}hK.exports=YJr});var yK=s((e4e,qK)=>{"use strict";var ZJr=Uf(),$Jr=ZJr();qK.exports=$Jr});var EK=s((t4e,wK)=>{"use strict";var QJr=w(),bK=yK(),KJr=Uf();QJr(bK,"factory",KJr);wK.exports=bK});var zf=s((i4e,PK)=>{"use strict";var bt=w(),ru=R(),NK=M(),Ui=O(),AK=D().isPrimitive,OK=I(),Hf=Kr(),SK=fr().isPrimitive,rxr=E(),TK=L(),IK=S(),exr=C(),eu=kn().factory,Hi=nt().factory,Wf=Ke(),Df=lr(),_K=Fn(),txr=B(),Qr=y(),LK=G();function ixr(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=Hi(n);else if(arguments.length===1)if(OK(arguments[0])){if(n=arguments[0],Ui(n,"copy")&&!SK(n.copy))throw new TypeError(Qr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ui(n,"prng")){if(!TK(n.prng))throw new TypeError(Qr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Hi({prng:n.prng})}else{if(Ui(n,"state")&&!Hf(n.state))throw new TypeError(Qr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=_K({},n),n.copy===!1?u=!1:n.state&&(n.state=Wf(n.state.length,n.state,1,new Df(n.state.length),1)),n.copy=!1,t=Hi(n)}}else{if(o=arguments[0],!AK(o))throw new TypeError(Qr("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=Hi(n)}else{if(o=arguments[0],!AK(o))throw new TypeError(Qr("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!OK(n))throw new TypeError(Qr("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ui(n,"copy")&&!SK(n.copy))throw new TypeError(Qr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ui(n,"prng")){if(!TK(n.prng))throw new TypeError(Qr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Hi({prng:n.prng})}else{if(Ui(n,"state")&&!Hf(n.state))throw new TypeError(Qr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=_K({},n),n.copy===!1?u=!1:n.state&&(n.state=Wf(n.state.length,n.state,1,new Df(n.state.length),1)),n.copy=!1,t=Hi(n)}}return n&&n.prng?o===void 0?r=eu({prng:n.prng}):r=eu(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=eu({state:e,copy:!1}):r=eu(o,{state:e,copy:!1})),o===void 0?a=g:a=d,i=t.PRNG,bt(a,"NAME","t"),n&&n.prng?(bt(a,"seed",null),bt(a,"seedLength",null),NK(a,"state",IK(null),exr),bt(a,"stateLength",null),bt(a,"byteLength",null),bt(a,"toJSON",IK(null))):(ru(a,"seed",v),ru(a,"seedLength",f),NK(a,"state",p,m),ru(a,"stateLength",c),ru(a,"byteLength",l),bt(a,"toJSON",h)),bt(a,"PRNG",i),a;function v(){return i.seed}function f(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(q){if(!Hf(q))throw new TypeError(Qr("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));u&&(q=Wf(q.length,q,1,new Df(q.length),1)),i.state=q}function h(){var q={};return q.type="PRNG",q.name=a.NAME,q.state=txr(i.state),o===void 0?q.params=[]:q.params=[o],q}function d(){return t()/LK(r()/o)}function g(q){return rxr(q)||q<=0?NaN:t()/LK(r(q)/q)}}PK.exports=ixr});var FK=s((n4e,RK)=>{"use strict";var nxr=zf(),axr=nxr();RK.exports=axr});var kK=s((a4e,BK)=>{"use strict";var sxr=w(),MK=FK(),uxr=zf();sxr(MK,"factory",uxr);BK.exports=MK});var CK=s((s4e,jK)=>{"use strict";var Xf=k().isPrimitive,tu=y(),Jf=sr();function oxr(r,e,t){return!Xf(r)||Jf(r)?new TypeError(tu("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Xf(e)||Jf(e)?new TypeError(tu("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Xf(t)||Jf(t)?new TypeError(tu("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(tu("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}jK.exports=oxr});var UK=s((u4e,VK)=>{"use strict";var GK=G();function fxr(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+GK(a*u)):(a=(t-e)*(t-i),t-GK(a*(1-u)))}VK.exports=fxr});var Yf=s((o4e,xK)=>{"use strict";var Me=w(),iu=R(),HK=M(),WK=I(),DK=L(),zK=O(),XK=S(),vxr=C(),nu=z().factory,xf=E(),cxr=B(),au=y(),lxr=CK(),JK=UK();function pxr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=nu();else if(arguments.length===1){if(r=arguments[0],!WK(r))throw new TypeError(au("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zK(r,"prng")){if(!DK(r.prng))throw new TypeError(au("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=nu(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=lxr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!WK(r))throw new TypeError(au("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zK(r,"prng")){if(!DK(r.prng))throw new TypeError(au("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=nu(r)}else e=nu()}return n===void 0?t=d:t=h,Me(t,"NAME","triangular"),r&&r.prng?(Me(t,"seed",null),Me(t,"seedLength",null),HK(t,"state",XK(null),vxr),Me(t,"stateLength",null),Me(t,"byteLength",null),Me(t,"toJSON",XK(null)),Me(t,"PRNG",e)):(iu(t,"seed",o),iu(t,"seedLength",v),HK(t,"state",l,p),iu(t,"stateLength",f),iu(t,"byteLength",c),Me(t,"toJSON",m),Me(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=cxr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return JK(e,n,a,u)}function d(g,q,N){return xf(g)||xf(q)||xf(N)||!(g<=N&&N<=q)?NaN:JK(e,g,q,N)}}xK.exports=pxr});var ZK=s((f4e,YK)=>{"use strict";var gxr=Yf(),mxr=gxr();YK.exports=mxr});var KK=s((v4e,QK)=>{"use strict";var dxr=w(),$K=ZK(),hxr=Yf();dxr($K,"factory",hxr);QK.exports=$K});var irr=s((c4e,trr)=>{"use strict";var rrr=k().isPrimitive,Zf=y(),err=sr();function qxr(r,e){return!rrr(r)||err(r)?new TypeError(Zf("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!rrr(e)||err(e)?new TypeError(Zf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Zf("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}trr.exports=qxr});var arr=s((l4e,nrr)=>{"use strict";function yxr(r,e,t){var i=r();return t*i+(1-i)*e}nrr.exports=yxr});var $f=s((p4e,prr)=>{"use strict";var Be=w(),su=R(),srr=M(),urr=I(),orr=L(),frr=O(),vrr=S(),bxr=C(),uu=z().factory,crr=E(),wxr=B(),ou=y(),Exr=irr(),lrr=arr();function Nxr(){var r,e,t,i,n,a;if(arguments.length===0)e=uu();else if(arguments.length===1){if(r=arguments[0],!urr(r))throw new TypeError(ou("invalid argument. Options argument must be an object. Value: `%s`.",r));if(frr(r,"prng")){if(!orr(r.prng))throw new TypeError(ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=uu(r)}else{if(n=arguments[0],a=arguments[1],i=Exr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!urr(r))throw new TypeError(ou("invalid argument. Options argument must be an object. Value: `%s`.",r));if(frr(r,"prng")){if(!orr(r.prng))throw new TypeError(ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=uu(r)}else e=uu()}return n===void 0?t=h:t=m,Be(t,"NAME","uniform"),r&&r.prng?(Be(t,"seed",null),Be(t,"seedLength",null),srr(t,"state",vrr(null),bxr),Be(t,"stateLength",null),Be(t,"byteLength",null),Be(t,"toJSON",vrr(null)),Be(t,"PRNG",e)):(su(t,"seed",u),su(t,"seedLength",o),srr(t,"state",c,l),su(t,"stateLength",v),su(t,"byteLength",f),Be(t,"toJSON",p),Be(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=wxr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return lrr(e,n,a)}function h(d,g){return crr(d)||crr(g)||d>=g?NaN:lrr(e,d,g)}}prr.exports=Nxr});var mrr=s((g4e,grr)=>{"use strict";var Axr=$f(),Oxr=Axr();grr.exports=Oxr});var qrr=s((m4e,hrr)=>{"use strict";var Sxr=w(),drr=mrr(),Txr=$f();Sxr(drr,"factory",Txr);hrr.exports=drr});var Err=s((d4e,wrr)=>{"use strict";var yrr=D().isPrimitive,brr=y();function Ixr(r,e){return yrr(r)?yrr(e)?null:new TypeError(brr("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(brr("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}wrr.exports=Ixr});var Arr=s((h4e,Nrr)=>{"use strict";var _xr=W(),Lxr=P();function Pxr(r,e,t){return t*_xr(-Lxr(1-r()),1/e)}Nrr.exports=Pxr});var Qf=s((q4e,Rrr)=>{"use strict";var ke=w(),fu=R(),Orr=M(),Srr=I(),Trr=L(),Irr=O(),_rr=S(),Rxr=C(),vu=z().factory,Lrr=E(),Fxr=B(),cu=y(),Mxr=Err(),Prr=Arr();function Bxr(){var r,e,t,i,n,a;if(arguments.length===0)t=vu();else if(arguments.length===1){if(e=arguments[0],!Srr(e))throw new TypeError(cu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Irr(e,"prng")){if(!Trr(e.prng))throw new TypeError(cu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=vu(e)}else{if(a=arguments[0],r=arguments[1],n=Mxr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!Srr(e))throw new TypeError(cu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Irr(e,"prng")){if(!Trr(e.prng))throw new TypeError(cu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=vu(e)}else t=vu()}return r===void 0?i=h:i=m,ke(i,"NAME","weibull"),e&&e.prng?(ke(i,"seed",null),ke(i,"seedLength",null),Orr(i,"state",_rr(null),Rxr),ke(i,"stateLength",null),ke(i,"byteLength",null),ke(i,"toJSON",_rr(null)),ke(i,"PRNG",t)):(fu(i,"seed",u),fu(i,"seedLength",o),Orr(i,"state",c,l),fu(i,"stateLength",v),fu(i,"byteLength",f),ke(i,"toJSON",p),ke(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=Fxr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return Prr(t,a,r)}function h(d,g){return Lrr(d)||Lrr(g)||d<=0||g<=0?NaN:Prr(t,d,g)}}Rrr.exports=Bxr});var Mrr=s((y4e,Frr)=>{"use strict";var kxr=Qf(),jxr=kxr();Frr.exports=jxr});var jrr=s((b4e,krr)=>{"use strict";var Cxr=w(),Brr=Mrr(),Gxr=Qf();Cxr(Brr,"factory",Gxr);krr.exports=Brr});var Grr=s((w4e,Crr)=>{"use strict";var Vxr=mr(),Uxr=Cr().isPrimitive,Hxr=y(),Wxr=N2();function Dxr(r){if(Uxr(r))return r;if(Vxr(r))return Wxr(r);throw new TypeError(Hxr("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}Crr.exports=Dxr});var Urr=s((E4e,Vrr)=>{"use strict";var zxr=Grr();Vrr.exports=zxr});var Wrr=s((N4e,Hrr)=>{"use strict";var F={};F.arcsine=zU().factory;F.bernoulli=tH().factory;F.beta=AW().factory;F.betaprime=fD().factory;F.binomial=DD().factory;F.boxMueller=az().factory;F.cauchy=Nz().factory;F.chi=zz().factory;F.chisquare=kn().factory;F.cosine=AX().factory;F.discreteUniform=DX().factory;F.erlang=oJ().factory;F.exponential=EJ().factory;F.f=UJ().factory;F.frechet=nx().factory;F.gamma=Si().factory;F.geometric=yx().factory;F.gumbel=Cx().factory;F.hypergeometric=lY().factory;F.improvedZiggurat=nt().factory;F.invgamma=IY().factory;F.kumaraswamy=xY().factory;F.laplace=lZ().factory;F.levy=LZ().factory;F.logistic=xZ().factory;F.lognormal=l$().factory;F.minstd=N$().factory;F.minstdShuffle=j$().factory;F.mt19937=z().factory;F.negativeBinomial=OQ().factory;F.normal=WQ().factory;F.pareto1=oK().factory;F.poisson=Ff().factory;F.rayleigh=EK().factory;F.t=kK().factory;F.triangular=KK().factory;F.uniform=qrr().factory;F.weibull=jrr().factory;F.normalizeSeed=Urr();Hrr.exports=F});var zrr=s((A4e,Drr)=>{"use strict";function Xxr(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}Drr.exports=Xxr});var Jrr=s((O4e,Xrr)=>{"use strict";var Jxr=zrr();Xrr.exports=Jxr});var Zrr=s((S4e,Yrr)=>{"use strict";var Un=Jrr(),xxr=Oo(),xrr=y();function Yxr(r,e,t){var i,n,a,u,o,v,f,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,f=o;f<u;f++)i=[i];for(a=xxr(u),f=u-1;f>=0;f--)if(c=o-u+f,!(c<0)){if(v=e[c],n=t[f],n!==0&&n<v)throw new Error(xrr("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Un(e).join(", "),Un(t).join(", "),f));if(v===n)a[f]=1;else if(v===1)a[f]=0;else throw new Error(xrr("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",Un(e).join(", "),Un(t).join(", "),f))}return{ref:r,data:i,shape:Un(t),strides:a}}Yrr.exports=Yxr});var Qrr=s((T4e,$rr)=>{"use strict";var Zxr=Zrr();$rr.exports=Zxr});var eer=s((I4e,rer)=>{"use strict";var Krr=Qrr();function $xr(r,e,t){var i,n,a,u,o,v,f,c,l,p,m,h,d,g,q,N,A,j,T,X,cr;if(N=e[2],o=N[1],v=N[0],!(o<=0||v<=0))for(j=Krr(r[0],e[0],N),T=j.data,A=j.strides,i=A[1],n=A[0],j=Krr(r[1],e[1],N),X=j.data,A=j.strides,a=A[1],u=A[0],cr=r[2],p=0,h=0,c=0;c<v;c++){for(l=0,m=0,d=T[p],g=X[h],q=cr[c],f=0;f<o;f++)q[f]=t(d[l],g[m]),l+=i,m+=a;p+=n,h+=u}}rer.exports=$xr});var ier=s((_4e,ter)=>{"use strict";var Qxr=eer();ter.exports=Qxr});var aer=s((L4e,ner)=>{"use strict";var Kxr=k().isPrimitive,rYr=_(),eYr=V(),tYr=y();function iYr(r,e){return t;function t(i){var n;if(!Kxr(i)){if(e.nonnumeric===void 0)throw new TypeError(tYr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===rYr?e.pinf:n===eYr?e.ninf:n}}ner.exports=iYr});var uer=s((P4e,ser)=>{"use strict";var nYr=aer();ser.exports=nYr});var cer=s((R4e,ver)=>{"use strict";var oer=k().isPrimitive,aYr=_(),sYr=V(),fer=y();function uYr(r,e){return t;function t(i,n){var a;if(!oer(i)){if(e.nonnumeric===void 0)throw new TypeError(fer("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!oer(n)){if(e.nonnumeric===void 0)throw new TypeError(fer("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===aYr?e.pinf:a===sYr?e.ninf:a}}ver.exports=uYr});var per=s((F4e,ler)=>{"use strict";var oYr=cer();ler.exports=oYr});var mer=s((M4e,ger)=>{"use strict";var Kf=k().isPrimitive,fYr=_(),vYr=V(),rv=y();function cYr(r,e){return t;function t(i,n,a){var u;if(!Kf(i)){if(e.nonnumeric===void 0)throw new TypeError(rv("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Kf(n)){if(e.nonnumeric===void 0)throw new TypeError(rv("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Kf(a)){if(e.nonnumeric===void 0)throw new TypeError(rv("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===fYr?e.pinf:u===vYr?e.ninf:u}}ger.exports=cYr});var her=s((B4e,der)=>{"use strict";var lYr=mer();der.exports=lYr});var yer=s((k4e,qer)=>{"use strict";var lu=k().isPrimitive,pYr=_(),gYr=V(),pu=y();function mYr(r,e){return t;function t(i,n,a,u){var o;if(!lu(i)){if(e.nonnumeric===void 0)throw new TypeError(pu("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!lu(n)){if(e.nonnumeric===void 0)throw new TypeError(pu("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!lu(a)){if(e.nonnumeric===void 0)throw new TypeError(pu("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!lu(u)){if(e.nonnumeric===void 0)throw new TypeError(pu("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,a,u),o!==o?e.nan:o===pYr?e.pinf:o===gYr?e.ninf:o}}qer.exports=mYr});var wer=s((j4e,ber)=>{"use strict";var dYr=yer();ber.exports=dYr});var Ner=s((C4e,Eer)=>{"use strict";var Hn=k().isPrimitive,hYr=_(),qYr=V(),Wn=y();function yYr(r,e){return t;function t(i,n,a,u,o){var v;if(!Hn(i)){if(e.nonnumeric===void 0)throw new TypeError(Wn("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Hn(n)){if(e.nonnumeric===void 0)throw new TypeError(Wn("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Hn(a)){if(e.nonnumeric===void 0)throw new TypeError(Wn("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Hn(u)){if(e.nonnumeric===void 0)throw new TypeError(Wn("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Hn(o)){if(e.nonnumeric===void 0)throw new TypeError(Wn("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return v=r(i,n,a,u,o),v!==v?e.nan:v===hYr?e.pinf:v===qYr?e.ninf:v}}Eer.exports=yYr});var Oer=s((G4e,Aer)=>{"use strict";var bYr=Ner();Aer.exports=bYr});var Ter=s((V4e,Ser)=>{"use strict";var wYr=K().isPrimitive,EYr=y();function NYr(r){return e;function e(t){if(!wYr(t))throw new TypeError(EYr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}Ser.exports=NYr});var _er=s((U4e,Ier)=>{"use strict";var AYr=Ter();Ier.exports=AYr});var Fer=s((H4e,Rer)=>{"use strict";var Ler=K().isPrimitive,Per=y();function OYr(r){return e;function e(t,i){if(!Ler(t))throw new TypeError(Per("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Ler(i))throw new TypeError(Per("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}Rer.exports=OYr});var Ber=s((W4e,Mer)=>{"use strict";var SYr=Fer();Mer.exports=SYr});var jer=s((D4e,ker)=>{"use strict";var ev=K().isPrimitive,tv=y();function TYr(r){return e;function e(t,i,n){if(!ev(t))throw new TypeError(tv("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!ev(i))throw new TypeError(tv("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!ev(n))throw new TypeError(tv("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}ker.exports=TYr});var Ger=s((z4e,Cer)=>{"use strict";var IYr=jer();Cer.exports=IYr});var Uer=s((X4e,Ver)=>{"use strict";function _Yr(r,e,t){var i,n,a,u,o,v,f,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(f=r[0],c=r[1],u=0;u<n;u++)for(o=f[u],v=c[u],a=0;a<i;a++)v[a]=t(o[a])}Ver.exports=_Yr});var Wer=s((J4e,Her)=>{"use strict";var LYr=Uer();Her.exports=LYr});var zer=s((x4e,Der)=>{"use strict";var zr={};zr.bbinary2d=ier();zr.d_d=uer();zr.dd_d=per();zr.ddd_d=her();zr.dddd_d=wer();zr.ddddd_d=Oer();zr.s_o=_er();zr.ss_o=Ber();zr.sss_o=Ger();zr.unary2d=Wer();Der.exports=zr});var Jer=s((Y4e,Xer)=>{"use strict";var je=S6(),or,H={};H.bartlettTest=Fy();H.broadcastShapes=jy();H.cumax=Xy().ndarray;H.filled2d=Pa();H.filled2dBy=Ky();H.flattenArray=N2();H.isArray=mr();H.isBoolean=fr().isPrimitive;H.isNumber=k().isPrimitive;H.isPositiveNumber=D().isPrimitive;H.isString=K().isPrimitive;H.iterator2array=SA();H.iterSawtoothWave=fO();H.linspace=bS();H.max=_S().ndarray;H.mskmax=CS().ndarray;H.normalizeBroadcastArgs=HS();H.ones2d=XS();H.zeros2d=ZS();or=l_();H.assert=je(or,{});or=b_();H.blas=je(or,{});or=mF();je(or,H);or=_F();je(or,H);or=bB();je(or,H);or=uC();H.dists=je(or,{});or=sV();je(or,H);or=Wrr();H.random=je(or,{});or=zer();H.tools=je(or,{});Xer.exports=H});var RYr=s((Z4e,xer)=>{var PYr=Jer();xer.exports=PYr});return RYr();})();
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.abs2, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.acovercos, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
}
var __STDLIB_KEBABCASE = ns.tools.s_o( ns.kebabcase ); 
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.cos, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.asin, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.binet, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.ceil, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
}
var __STDLIB_PASCALCASE = ns.tools.s_o( ns.pascalcase ); 
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.abs, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.acosh, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.acot, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.asinh, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
}
var __STDLIB_UNCAPITALIZE = ns.tools.s_o( ns.uncapitalize ); 
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.besselj0, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.bessely1, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.zeta, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.ahaversin, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
}
var __STDLIB_STARTCASE = ns.tools.s_o( ns.startcase ); 
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.sqrt, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.besselj1, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.bessely0, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.ceil2, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
}
var __STDLIB_ADD_DTYPES = [ 'number', 'number' ]; 
var __STDLIB_ADD_MSGS = [ 'First argument', 'Second argument' ]; 
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
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	// Normalize the provided arguments so we are always working with nested arrays:
	args = ns.normalizeBroadcastArgs( [ x, y ], __STDLIB_ADD_DTYPES, __STDLIB_ADD_MSGS ); 
	// Resolve the shape of the broadcasted result:
	shape = ns.broadcastShapes( args[ 1 ] );
	if ( shape === null ) {
		throw new Error( 'invalid argument. Input arguments are not broadcast compatible.' );
	}
	// Create an output array:
	out = ns.zeros2d( shape );
	// Wrap the lower-level function to ensure proper handling of input arguments and return values:
	f = ns.tools.dd_d( ns.add, opts );
	// Apply the function to broadcasted arrays:
	args[ 0 ].push( out );
	args[ 1 ].push( shape );
	ns.tools.bbinary2d( args[ 0 ], args[ 1 ], f );
	return out;
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.aversin, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
}
var __STDLIB_LOWERCASE = ns.tools.s_o( ns.lowercase ); 
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.acoversin, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
}
var __STDLIB_CAPITALIZE = ns.tools.s_o( ns.capitalize ); 
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
var __STDLIB_CONSTANTCASE = ns.tools.s_o( ns.constantcase ); 
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.sin, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.cbrt, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.atanh, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.acos, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.atan, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
}
var __STDLIB_CAMELCASE = ns.tools.s_o( ns.camelcase ); 
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
var __STDLIB_MUL_DTYPES = [ 'number', 'number' ]; 
var __STDLIB_MUL_MSGS = [ 'First argument', 'Second argument' ]; 
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
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	// Normalize the provided arguments so we are always working with nested arrays:
	args = ns.normalizeBroadcastArgs( [ x, y ], __STDLIB_MUL_DTYPES, __STDLIB_MUL_MSGS ); 
	// Resolve the shape of the broadcasted result:
	shape = ns.broadcastShapes( args[ 1 ] );
	if ( shape === null ) {
		throw new Error( 'invalid argument. Input arguments are not broadcast compatible.' );
	}
	// Create an output array:
	out = ns.zeros2d( shape );
	// Wrap the lower-level function to ensure proper handling of input arguments and return values:
	f = ns.tools.dd_d( ns.mul, opts );
	// Apply the function to broadcasted arrays:
	args[ 0 ].push( out );
	args[ 1 ].push( shape );
	ns.tools.bbinary2d( args[ 0 ], args[ 1 ], f );
	return out;
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.acsch, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.avercos, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
}
var __STDLIB_SNAKECASE = ns.tools.s_o( ns.snakecase ); 
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
var __STDLIB_UPPERCASE = ns.tools.s_o( ns.uppercase ); 
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
var __STDLIB_SUB_DTYPES = [ 'number', 'number' ]; 
var __STDLIB_SUB_MSGS = [ 'First argument', 'Second argument' ]; 
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
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	// Normalize the provided arguments so we are always working with nested arrays:
	args = ns.normalizeBroadcastArgs( [ x, y ], __STDLIB_SUB_DTYPES, __STDLIB_SUB_MSGS ); 
	// Resolve the shape of the broadcasted result:
	shape = ns.broadcastShapes( args[ 1 ] );
	if ( shape === null ) {
		throw new Error( 'invalid argument. Input arguments are not broadcast compatible.' );
	}
	// Create an output array:
	out = ns.zeros2d( shape );
	// Wrap the lower-level function to ensure proper handling of input arguments and return values:
	f = ns.tools.dd_d( ns.sub, opts );
	// Apply the function to broadcasted arrays:
	args[ 0 ].push( out );
	args[ 1 ].push( shape );
	ns.tools.bbinary2d( args[ 0 ], args[ 1 ], f );
	return out;
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.acsc, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.ceil10, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 1; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	f = ns.tools.d_d( ns.ahavercos, opts );
	if ( ns.isArray( value ) ) {
		ns.tools.unary2d( [ value, value ], [ value.length, value[ 0 ].length ], f );
		return value;
	}
	return f( value );
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
var __STDLIB_DISTS_NORMAL_MEDIAN_DTYPES = [ 'number', 'number' ]; 
var __STDLIB_DISTS_NORMAL_MEDIAN_MSGS = [ 'First argument', 'Second argument' ]; 
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
	var arrays;
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	arrays = ns.broadcast( [ mu, sigma ], __STDLIB_DISTS_NORMAL_MEDIAN_DTYPES, __STDLIB_DISTS_NORMAL_MEDIAN_MSGS ); 
	f = ns.tools.dd_d( ns.dists.normal.median, opts );
	return ns.tools.binary2d( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], f );
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
var __STDLIB_DISTS_NORMAL_MODE_DTYPES = [ 'number', 'number' ]; 
var __STDLIB_DISTS_NORMAL_MODE_MSGS = [ 'First argument', 'Second argument' ]; 
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
	var arrays;
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	arrays = ns.broadcast( [ mu, sigma ], __STDLIB_DISTS_NORMAL_MODE_DTYPES, __STDLIB_DISTS_NORMAL_MODE_MSGS ); 
	f = ns.tools.dd_d( ns.dists.normal.mode, opts );
	return ns.tools.binary2d( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], f );
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
var __STDLIB_DISTS_NORMAL_MEAN_DTYPES = [ 'number', 'number' ]; 
var __STDLIB_DISTS_NORMAL_MEAN_MSGS = [ 'First argument', 'Second argument' ]; 
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
	var arrays;
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	arrays = ns.broadcast( [ mu, sigma ], __STDLIB_DISTS_NORMAL_MEAN_DTYPES, __STDLIB_DISTS_NORMAL_MEAN_MSGS ); 
	f = ns.tools.dd_d( ns.dists.normal.mean, opts );
	return ns.tools.binary2d( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], f );
}
var __STDLIB_DISTS_NORMAL_ENTROPY_DTYPES = [ 'number', 'number' ]; 
var __STDLIB_DISTS_NORMAL_ENTROPY_MSGS = [ 'First argument', 'Second argument' ]; 
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
	var arrays;
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	arrays = ns.broadcast( [ mu, sigma ], __STDLIB_DISTS_NORMAL_ENTROPY_DTYPES, __STDLIB_DISTS_NORMAL_ENTROPY_MSGS ); 
	f = ns.tools.dd_d( ns.dists.normal.entropy, opts );
	return ns.tools.binary2d( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], f );
}
var __STDLIB_DISTS_NORMAL_KURTOSIS_DTYPES = [ 'number', 'number' ]; 
var __STDLIB_DISTS_NORMAL_KURTOSIS_MSGS = [ 'First argument', 'Second argument' ]; 
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
	var arrays;
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	arrays = ns.broadcast( [ mu, sigma ], __STDLIB_DISTS_NORMAL_KURTOSIS_DTYPES, __STDLIB_DISTS_NORMAL_KURTOSIS_MSGS ); 
	f = ns.tools.dd_d( ns.dists.normal.kurtosis, opts );
	return ns.tools.binary2d( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], f );
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
	var arrays;
	var opts;
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
	arrays = ns.broadcast( [ t, mu, sigma ], __STDLIB_DISTS_NORMAL_MGF_DTYPES, __STDLIB_DISTS_NORMAL_MGF_MSGS ); 
	f = ns.tools.ddd_d( ns.dists.normal.mgf, opts );
	return ns.tools.ternary2d( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], f );
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
	data = ns.ANSCOMBES_QUARTET(); 
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
	var arrays;
	var opts;
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
	arrays = ns.broadcast( [ x, mu, sigma ], __STDLIB_DISTS_NORMAL_LOGPDF_DTYPES, __STDLIB_DISTS_NORMAL_LOGPDF_MSGS ); 
	f = ns.tools.ddd_d( ns.dists.normal.logpdf, opts );
	return ns.tools.ternary2d( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], f );
}
var __STDLIB_DISTS_NORMAL_SKEWNESS_DTYPES = [ 'number', 'number' ]; 
var __STDLIB_DISTS_NORMAL_SKEWNESS_MSGS = [ 'First argument', 'Second argument' ]; 
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
	var arrays;
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	arrays = ns.broadcast( [ mu, sigma ], __STDLIB_DISTS_NORMAL_SKEWNESS_DTYPES, __STDLIB_DISTS_NORMAL_SKEWNESS_MSGS ); 
	f = ns.tools.dd_d( ns.dists.normal.skewness, opts );
	return ns.tools.binary2d( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], f );
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
	var arrays;
	var opts;
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
	arrays = ns.broadcast( [ x, mu, sigma ], __STDLIB_DISTS_NORMAL_CDF_DTYPES, __STDLIB_DISTS_NORMAL_CDF_MSGS ); 
	f = ns.tools.ddd_d( ns.dists.normal.cdf, opts );
	return ns.tools.ternary2d( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], f );
}
var __STDLIB_DISTS_NORMAL_STDEV_DTYPES = [ 'number', 'number' ]; 
var __STDLIB_DISTS_NORMAL_STDEV_MSGS = [ 'First argument', 'Second argument' ]; 
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
	var arrays;
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	arrays = ns.broadcast( [ mu, sigma ], __STDLIB_DISTS_NORMAL_STDEV_DTYPES, __STDLIB_DISTS_NORMAL_STDEV_MSGS ); 
	f = ns.tools.dd_d( ns.dists.normal.stdev, opts );
	return ns.tools.binary2d( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], f );
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
	var arrays;
	var opts;
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
	arrays = ns.broadcast( [ p, mu, sigma ], __STDLIB_DISTS_NORMAL_QUANTILE_DTYPES, __STDLIB_DISTS_NORMAL_QUANTILE_MSGS ); 
	f = ns.tools.ddd_d( ns.dists.normal.quantile, opts );
	return ns.tools.ternary2d( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], f );
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
	var arrays;
	var opts;
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
	arrays = ns.broadcast( [ x, mu, sigma ], __STDLIB_DISTS_NORMAL_PDF_DTYPES, __STDLIB_DISTS_NORMAL_PDF_MSGS ); 
	f = ns.tools.ddd_d( ns.dists.normal.pdf, opts );
	return ns.tools.ternary2d( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], f );
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
	var arrays;
	var opts;
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
	arrays = ns.broadcast( [ x, mu, sigma ], __STDLIB_DISTS_NORMAL_LOGCDF_DTYPES, __STDLIB_DISTS_NORMAL_LOGCDF_MSGS ); 
	f = ns.tools.ddd_d( ns.dists.normal.logcdf, opts );
	return ns.tools.ternary2d( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], f );
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
var __STDLIB_DISTS_NORMAL_VARIANCE_DTYPES = [ 'number', 'number' ]; 
var __STDLIB_DISTS_NORMAL_VARIANCE_MSGS = [ 'First argument', 'Second argument' ]; 
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
	var arrays;
	var opts;
	var f;
	var o;
	var i;
	opts = {
		'nonnumeric': void 0,
		'nan': NaN,
		'pinf': Infinity,
		'ninf': -Infinity
	};
	for ( i = 2; i < arguments.length; i += 2 ) {
		o = arguments[ i ];
		if ( o === 'nonnumeric' || o === 'nan' || o === 'pinf' || o === 'ninf' ) {
			opts[ o ] = arguments[ i+1 ];
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	arrays = ns.broadcast( [ mu, sigma ], __STDLIB_DISTS_NORMAL_VARIANCE_DTYPES, __STDLIB_DISTS_NORMAL_VARIANCE_MSGS ); 
	f = ns.tools.dd_d( ns.dists.normal.variance, opts );
	return ns.tools.binary2d( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], f );
}
