/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var gv=s((ZZr,pv)=>{"use strict";var htr=typeof Object.defineProperty=="function"?Object.defineProperty:null;pv.exports=htr});var dv=s(($Zr,mv)=>{"use strict";var qtr=gv();function ytr(){try{return qtr({},"x",{}),!0}catch{return!1}}mv.exports=ytr});var qv=s((QZr,hv)=>{"use strict";var btr=Object.defineProperty;hv.exports=btr});var gu=s((KZr,yv)=>{"use strict";function wtr(r){return typeof r=="number"}yv.exports=wtr});var mu=s((r$r,wv)=>{"use strict";function Etr(r){return r[0]==="-"}function bv(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Ntr(r,e,t){var i=!1,n=e-r.length;return n<0||(Etr(r)&&(i=!0,r=r.substr(1)),r=t?r+bv(n):bv(n)+r,i&&(r="-"+r)),r}wv.exports=Ntr});var Sv=s((e$r,Av)=>{"use strict";var Atr=gu(),Ev=mu(),Str=String.prototype.toLowerCase,Nv=String.prototype.toUpperCase;function Otr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Atr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Ev(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=Ev(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===Nv.call(r.specifier)?Nv.call(t):Str.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Av.exports=Otr});var Tv=s((t$r,Ov)=>{"use strict";function Ttr(r){return typeof r=="string"}Ov.exports=Ttr});var Lv=s((i$r,_v)=>{"use strict";var Itr=gu(),_tr=Math.abs,Ltr=String.prototype.toLowerCase,Iv=String.prototype.toUpperCase,yt=String.prototype.replace,Ptr=/e\+(\d)$/,Rtr=/e-(\d)$/,Ftr=/^(\d+)$/,Mtr=/^(\d+)e/,Btr=/\.0$/,ktr=/\.0*e/,jtr=/(\..*[^0])0*e/;function Ctr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Itr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":_tr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=yt.call(t,jtr,"$1e"),t=yt.call(t,ktr,"e"),t=yt.call(t,Btr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=yt.call(t,Ptr,"e+0$1"),t=yt.call(t,Rtr,"e-0$1"),r.alternate&&(t=yt.call(t,Ftr,"$1."),t=yt.call(t,Mtr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Iv.call(r.specifier)?Iv.call(t):Ltr.call(t),t}_v.exports=Ctr});var Fv=s((n$r,Rv)=>{"use strict";function Pv(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function Gtr(r,e,t){var i=e-r.length;return i<0||(r=t?r+Pv(i):Pv(i)+r),r}Rv.exports=Gtr});var Bv=s((a$r,Mv)=>{"use strict";var Vtr=Sv(),Utr=Tv(),Htr=Lv(),Wtr=Fv(),Dtr=mu(),ztr=String.fromCharCode,Wn=isNaN,Xtr=Array.isArray;function Jtr(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function xtr(r){var e,t,i,n,a,u,o,v,f;if(!Xtr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,v=0;v<r.length;v++)if(i=r[v],Utr(i))u+=i;else{if(e=i.precision!==void 0,i=Jtr(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,Wn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,Wn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=Vtr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Wn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Wn(a)?String(i.arg):ztr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=Htr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Dtr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Wtr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}Mv.exports=xtr});var jv=s((s$r,kv)=>{"use strict";var Ytr=Bv();kv.exports=Ytr});var Gv=s((u$r,Cv)=>{"use strict";var Dn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ztr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function $tr(r){var e,t,i,n;for(t=[],n=0,i=Dn.exec(r);i;)e=r.slice(n,Dn.lastIndex-i[0].length),e.length&&t.push(e),t.push(Ztr(i)),n=Dn.lastIndex,i=Dn.exec(r);return e=r.slice(n),e.length&&t.push(e),t}Cv.exports=$tr});var Uv=s((o$r,Vv)=>{"use strict";var Qtr=Gv();Vv.exports=Qtr});var Wv=s((f$r,Hv)=>{"use strict";function Ktr(r){return typeof r=="string"}Hv.exports=Ktr});var Xv=s((v$r,zv)=>{"use strict";var rir=jv(),eir=Uv(),tir=Wv();function Dv(r){var e,t,i;if(!tir(r))throw new TypeError(Dv("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=eir(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return rir.apply(null,t)}zv.exports=Dv});var y=s((c$r,Jv)=>{"use strict";var iir=Xv();Jv.exports=iir});var Kv=s((l$r,Qv)=>{"use strict";var xv=y(),Ht=Object.prototype,Yv=Ht.toString,Zv=Ht.__defineGetter__,$v=Ht.__defineSetter__,nir=Ht.__lookupGetter__,air=Ht.__lookupSetter__;function sir(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||Yv.call(r)==="[object Array]")throw new TypeError(xv("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||Yv.call(t)==="[object Array]")throw new TypeError(xv("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(nir.call(r,e)||air.call(r,e)?(i=r.__proto__,r.__proto__=Ht,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Zv&&Zv.call(r,e,t.get),u&&$v&&$v.call(r,e,t.set),r}Qv.exports=sir});var Be=s((p$r,rc)=>{"use strict";var uir=dv(),oir=qv(),fir=Kv(),du;uir()?du=oir:du=fir;rc.exports=du});var tc=s((g$r,ec)=>{"use strict";var vir=Be();function cir(r,e,t){vir(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}ec.exports=cir});var w=s((m$r,ic)=>{"use strict";var lir=tc();ic.exports=lir});var ac=s((d$r,nc)=>{"use strict";var pir=Be();function gir(r,e,t){pir(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}nc.exports=gir});var hu=s((h$r,sc)=>{"use strict";var mir=ac();sc.exports=mir});var zn=s((q$r,uc)=>{"use strict";function dir(r){return Object.keys(Object(r))}uc.exports=dir});var fc=s((y$r,oc)=>{"use strict";var hir=zn();function qir(){return(hir(arguments)||"").length!==2}function yir(){return qir(1,2)}oc.exports=yir});var cc=s((b$r,vc)=>{"use strict";var bir=typeof Object.keys<"u";vc.exports=bir});var pc=s((w$r,lc)=>{"use strict";function wir(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}lc.exports=wir});var mc=s((E$r,gc)=>{"use strict";var Eir=pc();gc.exports=Eir});var hc=s((N$r,dc)=>{"use strict";var Nir=mc(),Air=Nir();function Sir(){return Air&&typeof Symbol.toStringTag=="symbol"}dc.exports=Sir});var Ui=s((A$r,qc)=>{"use strict";var Oir=hc();qc.exports=Oir});var qu=s((S$r,yc)=>{"use strict";var Tir=Object.prototype.toString;yc.exports=Tir});var wc=s((O$r,bc)=>{"use strict";var Iir=qu();function _ir(r){return Iir.call(r)}bc.exports=_ir});var Nc=s((T$r,Ec)=>{"use strict";var Lir=Object.prototype.hasOwnProperty;function Pir(r,e){return r==null?!1:Lir.call(r,e)}Ec.exports=Pir});var S=s((I$r,Ac)=>{"use strict";var Rir=Nc();Ac.exports=Rir});var Oc=s((_$r,Sc)=>{"use strict";var Fir=typeof Symbol=="function"?Symbol:void 0;Sc.exports=Fir});var yu=s((L$r,Tc)=>{"use strict";var Mir=Oc();Tc.exports=Mir});var Lc=s((P$r,_c)=>{"use strict";var Ic=yu(),Bir=typeof Ic=="function"?Ic.toStringTag:"";_c.exports=Bir});var Rc=s((R$r,Pc)=>{"use strict";var kir=S(),Hi=Lc(),bu=qu();function jir(r){var e,t,i;if(r==null)return bu.call(r);t=r[Hi],e=kir(r,Hi);try{r[Hi]=void 0}catch{return bu.call(r)}return i=bu.call(r),e?r[Hi]=t:delete r[Hi],i}Pc.exports=jir});var ir=s((F$r,Fc)=>{"use strict";var Cir=Ui(),Gir=wc(),Vir=Rc(),wu;Cir()?wu=Vir:wu=Gir;Fc.exports=wu});var Eu=s((M$r,Mc)=>{"use strict";var Uir=ir();function Hir(r){return Uir(r)==="[object Arguments]"}Mc.exports=Hir});var jc=s((B$r,kc)=>{"use strict";var Wir=Eu(),Bc;function Dir(){return Wir(arguments)}Bc=Dir();kc.exports=Bc});var Nu=s((k$r,Cc)=>{"use strict";function zir(r){return typeof r=="string"}Cc.exports=zir});var Vc=s((j$r,Gc)=>{"use strict";var Xir=String.prototype.valueOf;Gc.exports=Xir});var Hc=s((C$r,Uc)=>{"use strict";var Jir=Vc();function xir(r){try{return Jir.call(r),!0}catch{return!1}}Uc.exports=xir});var Au=s((G$r,Wc)=>{"use strict";var Yir=Ui(),Zir=ir(),$ir=Hc(),Qir=Yir();function Kir(r){return typeof r=="object"?r instanceof String?!0:Qir?$ir(r):Zir(r)==="[object String]":!1}Wc.exports=Kir});var zc=s((V$r,Dc)=>{"use strict";var rnr=Nu(),enr=Au();function tnr(r){return rnr(r)||enr(r)}Dc.exports=tnr});var K=s((U$r,Jc)=>{"use strict";var Xc=w(),Su=zc(),inr=Nu(),nnr=Au();Xc(Su,"isPrimitive",inr);Xc(Su,"isObject",nnr);Jc.exports=Su});var Ou=s((H$r,xc)=>{"use strict";function anr(r){return typeof r=="number"}xc.exports=anr});var Zc=s((W$r,Yc)=>{"use strict";Yc.exports=Number});var Xn=s((D$r,$c)=>{"use strict";var snr=Zc();$c.exports=snr});var Kc=s((z$r,Qc)=>{"use strict";var unr=Xn(),onr=unr.prototype.toString;Qc.exports=onr});var el=s((X$r,rl)=>{"use strict";var fnr=Kc();function vnr(r){try{return fnr.call(r),!0}catch{return!1}}rl.exports=vnr});var Tu=s((J$r,tl)=>{"use strict";var cnr=Ui(),lnr=ir(),pnr=Xn(),gnr=el(),mnr=cnr();function dnr(r){return typeof r=="object"?r instanceof pnr?!0:mnr?gnr(r):lnr(r)==="[object Number]":!1}tl.exports=dnr});var nl=s((x$r,il)=>{"use strict";var hnr=Ou(),qnr=Tu();function ynr(r){return hnr(r)||qnr(r)}il.exports=ynr});var k=s((Y$r,sl)=>{"use strict";var al=w(),Iu=nl(),bnr=Ou(),wnr=Tu();al(Iu,"isPrimitive",bnr);al(Iu,"isObject",wnr);sl.exports=Iu});var ol=s((Z$r,ul)=>{"use strict";function Enr(r){return r!==r}ul.exports=Enr});var E=s(($$r,fl)=>{"use strict";var Nnr=ol();fl.exports=Nnr});var _u=s((Q$r,vl)=>{"use strict";var Anr=k().isPrimitive,Snr=E();function Onr(r){return Anr(r)&&Snr(r)}vl.exports=Onr});var Lu=s((K$r,cl)=>{"use strict";var Tnr=k().isObject,Inr=E();function _nr(r){return Tnr(r)&&Inr(r.valueOf())}cl.exports=_nr});var pl=s((rQr,ll)=>{"use strict";var Lnr=_u(),Pnr=Lu();function Rnr(r){return Lnr(r)||Pnr(r)}ll.exports=Rnr});var sr=s((eQr,ml)=>{"use strict";var gl=w(),Pu=pl(),Fnr=_u(),Mnr=Lu();gl(Pu,"isPrimitive",Fnr);gl(Pu,"isObject",Mnr);ml.exports=Pu});var _=s((tQr,dl)=>{"use strict";var Bnr=Number.POSITIVE_INFINITY;dl.exports=Bnr});var V=s((iQr,hl)=>{"use strict";var knr=Xn(),jnr=knr.NEGATIVE_INFINITY;hl.exports=jnr});var yl=s((nQr,ql)=>{"use strict";var Cnr=Math.floor;ql.exports=Cnr});var Q=s((aQr,bl)=>{"use strict";var Gnr=yl();bl.exports=Gnr});var El=s((sQr,wl)=>{"use strict";var Vnr=Q();function Unr(r){return Vnr(r)===r}wl.exports=Unr});var Tr=s((uQr,Nl)=>{"use strict";var Hnr=El();Nl.exports=Hnr});var Ru=s((oQr,Al)=>{"use strict";var Wnr=_(),Dnr=V(),znr=Tr();function Xnr(r){return r<Wnr&&r>Dnr&&znr(r)}Al.exports=Xnr});var Fu=s((fQr,Sl)=>{"use strict";var Jnr=k().isPrimitive,xnr=Ru();function Ynr(r){return Jnr(r)&&xnr(r)}Sl.exports=Ynr});var Mu=s((vQr,Ol)=>{"use strict";var Znr=k().isObject,$nr=Ru();function Qnr(r){return Znr(r)&&$nr(r.valueOf())}Ol.exports=Qnr});var Il=s((cQr,Tl)=>{"use strict";var Knr=Fu(),rar=Mu();function ear(r){return Knr(r)||rar(r)}Tl.exports=ear});var jr=s((lQr,Ll)=>{"use strict";var _l=w(),Bu=Il(),tar=Fu(),iar=Mu();_l(Bu,"isPrimitive",tar);_l(Bu,"isObject",iar);Ll.exports=Bu});var ku=s((pQr,Pl)=>{"use strict";var nar=Object.prototype.propertyIsEnumerable;Pl.exports=nar});var Ml=s((gQr,Fl)=>{"use strict";var aar=ku(),Rl;function sar(){return!aar.call("beep","0")}Rl=sar();Fl.exports=Rl});var kl=s((mQr,Bl)=>{"use strict";var uar=K(),oar=sr().isPrimitive,far=jr().isPrimitive,car=ku(),lar=Ml();function par(r,e){var t;return r==null?!1:(t=car.call(r,e),!t&&lar&&uar(r)?(e=+e,!oar(e)&&far(e)&&e>=0&&e<r.length):t)}Bl.exports=par});var Wi=s((dQr,jl)=>{"use strict";var gar=kl();jl.exports=gar});var Gl=s((hQr,Cl)=>{"use strict";var mar=ir(),ju;function dar(r){return mar(r)==="[object Array]"}Array.isArray?ju=Array.isArray:ju=dar;Cl.exports=ju});var cr=s((qQr,Vl)=>{"use strict";var har=Gl();Vl.exports=har});var Wt=s((yQr,Ul)=>{"use strict";var qar=4294967295;Ul.exports=qar});var Wl=s((bQr,Hl)=>{"use strict";var yar=S(),bar=Wi(),war=cr(),Ear=Tr(),Nar=Wt();function Aar(r){return r!==null&&typeof r=="object"&&!war(r)&&typeof r.length=="number"&&Ear(r.length)&&r.length>=0&&r.length<=Nar&&yar(r,"callee")&&!bar(r,"callee")}Hl.exports=Aar});var Gu=s((wQr,Dl)=>{"use strict";var Sar=jc(),Oar=Eu(),Tar=Wl(),Cu;Sar?Cu=Oar:Cu=Tar;Dl.exports=Cu});var Jl=s((EQr,Xl)=>{"use strict";var Iar=Gu(),zl=zn(),_ar=Array.prototype.slice;function Lar(r){return Iar(r)?zl(_ar.call(r)):zl(r)}Xl.exports=Lar});var Yl=s((NQr,xl)=>{"use strict";var Par=cr(),Rar=y();function Far(r){if(typeof r!="function")throw new TypeError(Rar("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!Par(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}xl.exports=Far});var $l=s((AQr,Zl)=>{"use strict";var Mar=Yl();Zl.exports=Mar});var Kl=s((SQr,Ql)=>{"use strict";function Bar(r){return r!==null&&typeof r=="object"}Ql.exports=Bar});var Uu=s((OQr,r4)=>{"use strict";var kar=w(),jar=$l(),Vu=Kl(),Car=jar(Vu);kar(Vu,"isObjectLikeArray",Car);r4.exports=Vu});var t4=s((TQr,e4)=>{"use strict";function Gar(){}e4.exports=Gar});var C=s((IQr,i4)=>{"use strict";var Var=t4();i4.exports=Var});var a4=s((_Qr,n4)=>{"use strict";var Uar=Wi(),Har=C(),War=Uar(Har,"prototype");n4.exports=War});var u4=s((LQr,s4)=>{"use strict";var Dar=Wi(),zar={toString:null},Xar=!Dar(zar,"toString");s4.exports=Xar});var f4=s((PQr,o4)=>{"use strict";var Jar=9007199254740991;o4.exports=Jar});var c4=s((RQr,v4)=>{"use strict";var xar=Tr(),Yar=f4();function Zar(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&xar(r.length)&&r.length>=0&&r.length<=Yar}v4.exports=Zar});var Cr=s((FQr,l4)=>{"use strict";var $ar=c4();l4.exports=$ar});var d4=s((MQr,m4)=>{"use strict";var p4=sr(),Qar=Cr(),Kar=K().isPrimitive,r0r=jr().isPrimitive,g4=y();function e0r(r,e,t){var i,n;if(!Qar(r)&&!Kar(r))throw new TypeError(g4("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!r0r(t))throw new TypeError(g4("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(p4(e)){for(;n<i;n++)if(p4(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}m4.exports=e0r});var Jn=s((BQr,h4)=>{"use strict";var t0r=d4();h4.exports=t0r});var y4=s((kQr,q4)=>{"use strict";var i0r=/./;q4.exports=i0r});var Hu=s((jQr,b4)=>{"use strict";function n0r(r){return typeof r=="boolean"}b4.exports=n0r});var E4=s((CQr,w4)=>{"use strict";var a0r=Boolean;w4.exports=a0r});var A4=s((GQr,N4)=>{"use strict";var s0r=E4();N4.exports=s0r});var O4=s((VQr,S4)=>{"use strict";var u0r=Boolean.prototype.toString;S4.exports=u0r});var I4=s((UQr,T4)=>{"use strict";var o0r=O4();function f0r(r){try{return o0r.call(r),!0}catch{return!1}}T4.exports=f0r});var Wu=s((HQr,_4)=>{"use strict";var v0r=Ui(),c0r=ir(),l0r=A4(),p0r=I4(),g0r=v0r();function m0r(r){return typeof r=="object"?r instanceof l0r?!0:g0r?p0r(r):c0r(r)==="[object Boolean]":!1}_4.exports=m0r});var P4=s((WQr,L4)=>{"use strict";var d0r=Hu(),h0r=Wu();function q0r(r){return d0r(r)||h0r(r)}L4.exports=q0r});var or=s((DQr,F4)=>{"use strict";var R4=w(),Du=P4(),y0r=Hu(),b0r=Wu();R4(Du,"isPrimitive",y0r);R4(Du,"isObject",b0r);F4.exports=Du});var B4=s((zQr,M4)=>{"use strict";function w0r(){return new Function("return this;")()}M4.exports=w0r});var j4=s((XQr,k4)=>{"use strict";var E0r=typeof self=="object"?self:null;k4.exports=E0r});var G4=s((JQr,C4)=>{"use strict";var N0r=typeof window=="object"?window:null;C4.exports=N0r});var U4=s((xQr,V4)=>{"use strict";var A0r=typeof globalThis=="object"?globalThis:null;V4.exports=A0r});var X4=s((YQr,z4)=>{"use strict";var S0r=or().isPrimitive,O0r=y(),T0r=B4(),H4=j4(),W4=G4(),D4=U4();function I0r(r){if(arguments.length){if(!S0r(r))throw new TypeError(O0r("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return T0r()}if(D4)return D4;if(H4)return H4;if(W4)return W4;throw new Error("unexpected error. Unable to resolve global object.")}z4.exports=I0r});var Y4=s((ZQr,x4)=>{"use strict";var _0r=X4(),J4=_0r(),L0r=J4.document&&J4.document.childNodes;x4.exports=L0r});var $4=s(($Qr,Z4)=>{"use strict";var P0r=Int8Array;Z4.exports=P0r});var K4=s((QQr,Q4)=>{"use strict";var R0r=y4(),F0r=Y4(),M0r=$4();function B0r(){return typeof R0r=="function"||typeof M0r=="object"||typeof F0r=="function"}Q4.exports=B0r});var zu=s((KQr,r6)=>{"use strict";function k0r(){return/^\s*function\s*([^(]*)/i}r6.exports=k0r});var t6=s((rKr,e6)=>{"use strict";var j0r=zu(),C0r=j0r();e6.exports=C0r});var Xu=s((eKr,n6)=>{"use strict";var G0r=w(),i6=zu(),V0r=t6();G0r(i6,"REGEXP",V0r);n6.exports=i6});var s6=s((tKr,a6)=>{"use strict";var U0r=Uu();function H0r(r){return U0r(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}a6.exports=H0r});var bt=s((iKr,u6)=>{"use strict";var W0r=s6();u6.exports=W0r});var f6=s((nKr,o6)=>{"use strict";var D0r=ir(),z0r=Xu().REGEXP,X0r=bt();function J0r(r){var e,t,i;if(t=D0r(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=z0r.exec(i.toString()),e)return e[1]}return X0r(r)?"Buffer":t}o6.exports=J0r});var ke=s((aKr,v6)=>{"use strict";var x0r=f6();v6.exports=x0r});var l6=s((sKr,c6)=>{"use strict";var Y0r=ke();function Z0r(r){var e;return r===null?"null":(e=typeof r,e==="object"?Y0r(r).toLowerCase():e)}c6.exports=Z0r});var g6=s((uKr,p6)=>{"use strict";var $0r=ke();function Q0r(r){return $0r(r).toLowerCase()}p6.exports=Q0r});var xn=s((oKr,m6)=>{"use strict";var K0r=K4(),rsr=l6(),esr=g6(),tsr=K0r()?esr:rsr;m6.exports=tsr});var Ju=s((fKr,d6)=>{"use strict";function isr(r){return r.constructor&&r.constructor.prototype===r}d6.exports=isr});var h6=s((vKr,nsr)=>{nsr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var y6=s((cKr,q6)=>{"use strict";var asr=typeof window>"u"?void 0:window;q6.exports=asr});var N6=s((lKr,E6)=>{"use strict";var ssr=S(),usr=Jn(),b6=xn(),osr=Ju(),fsr=h6(),Dt=y6(),w6;function vsr(){var r;if(b6(Dt)==="undefined")return!1;for(r in Dt)try{usr(fsr,r)===-1&&ssr(Dt,r)&&Dt[r]!==null&&b6(Dt[r])==="object"&&osr(Dt[r])}catch{return!0}return!1}w6=vsr();E6.exports=w6});var S6=s((pKr,A6)=>{"use strict";var csr=typeof window<"u";A6.exports=csr});var I6=s((gKr,T6)=>{"use strict";var lsr=N6(),O6=Ju(),psr=S6();function gsr(r){if(psr===!1&&!lsr)return O6(r);try{return O6(r)}catch{return!1}}T6.exports=gsr});var _6=s((mKr,msr)=>{msr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var R6=s((dKr,P6)=>{"use strict";var dsr=Uu(),xu=S(),hsr=Gu(),qsr=a4(),ysr=u4(),bsr=I6(),L6=_6();function wsr(r){var e,t,i,n,a,u,o;if(n=[],hsr(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!xu(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!dsr(r))return n;t=qsr&&i}for(a in r)!(t&&a==="prototype")&&xu(r,a)&&n.push(String(a));if(ysr)for(e=bsr(r),o=0;o<L6.length;o++)u=L6[o],!(e&&u==="constructor")&&xu(r,u)&&n.push(String(u));return n}P6.exports=wsr});var M6=s((hKr,F6)=>{"use strict";var Esr=fc(),Nsr=cc(),Asr=zn(),Ssr=Jl(),Osr=R6(),Yn;Nsr?Esr()?Yn=Ssr:Yn=Asr:Yn=Osr;F6.exports=Yn});var zt=s((qKr,B6)=>{"use strict";var Tsr=M6();B6.exports=Tsr});var j6=s((yKr,k6)=>{"use strict";var Isr=zt(),_sr=S(),Lsr=y();function Psr(r,e){var t,i,n;for(t=Isr(r),n=0;n<t.length;n++){if(i=t[n],_sr(e,i))throw new Error(Lsr("unexpected error. Property already exists on destination object. Property: %s.",i));e[i]=r[i]}return e}k6.exports=Psr});var G6=s((bKr,C6)=>{"use strict";var Rsr=j6();C6.exports=Rsr});var U6=s((wKr,V6)=>{"use strict";var Fsr=cr();function Msr(r){return typeof r=="object"&&r!==null&&!Fsr(r)}V6.exports=Msr});var Zn=s((EKr,H6)=>{"use strict";var Bsr=U6();H6.exports=Bsr});var D6=s((NKr,W6)=>{"use strict";var ksr=xn();function jsr(r){return ksr(r)==="function"}W6.exports=jsr});var L=s((AKr,z6)=>{"use strict";var Csr=D6();z6.exports=Csr});var J6=s((SKr,X6)=>{"use strict";var Gsr=Object;X6.exports=Gsr});var Xt=s((OKr,x6)=>{"use strict";var Vsr=J6();x6.exports=Vsr});var Z6=s((TKr,Y6)=>{"use strict";var Usr=Object.getPrototypeOf;Y6.exports=Usr});var Q6=s((IKr,$6)=>{"use strict";function Hsr(r){return r.__proto__}$6.exports=Hsr});var r8=s((_Kr,K6)=>{"use strict";var Wsr=ir(),Dsr=Q6();function zsr(r){var e=Dsr(r);return e||e===null?e:Wsr(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}K6.exports=zsr});var t8=s((LKr,e8)=>{"use strict";var Xsr=L(),Jsr=Z6(),xsr=r8(),Yu;Xsr(Object.getPrototypeOf)?Yu=Jsr:Yu=xsr;e8.exports=Yu});var n8=s((PKr,i8)=>{"use strict";var Ysr=Xt(),Zsr=t8();function $sr(r){return r==null?null:(r=Ysr(r),Zsr(r))}i8.exports=$sr});var wt=s((RKr,a8)=>{"use strict";var Qsr=n8();a8.exports=Qsr});var o8=s((FKr,u8)=>{"use strict";var Ksr=Zn(),s8=L(),rur=wt(),$n=S(),eur=ir(),tur=Object.prototype;function iur(r){var e;for(e in r)if(!$n(r,e))return!1;return!0}function nur(r){var e;return Ksr(r)?(e=rur(r),e?!$n(r,"constructor")&&$n(e,"constructor")&&s8(e.constructor)&&eur(e.constructor)==="[object Function]"&&$n(e,"isPrototypeOf")&&s8(e.isPrototypeOf)&&(e===tur||iur(r)):!0):!1}u8.exports=nur});var I=s((MKr,f8)=>{"use strict";var aur=o8();f8.exports=aur});var c8=s((BKr,v8)=>{"use strict";var sur=_(),uur=V();function our(r){return r===sur||r===uur}v8.exports=our});var Pr=s((kKr,l8)=>{"use strict";var fur=c8();l8.exports=fur});var g8=s((jKr,p8)=>{"use strict";function vur(r){return Math.abs(r)}p8.exports=vur});var J=s((CKr,m8)=>{"use strict";var cur=g8();m8.exports=cur});var h8=s((GKr,d8)=>{"use strict";var lur=ir(),pur=typeof Uint32Array=="function";function gur(r){return pur&&r instanceof Uint32Array||lur(r)==="[object Uint32Array]"}d8.exports=gur});var $r=s((VKr,q8)=>{"use strict";var mur=h8();q8.exports=mur});var b8=s((UKr,y8)=>{"use strict";var dur=typeof Uint32Array=="function"?Uint32Array:null;y8.exports=dur});var N8=s((HKr,E8)=>{"use strict";var hur=$r(),Zu=Wt(),w8=b8();function qur(){var r,e;if(typeof w8!="function")return!1;try{e=[1,3.14,-3.14,Zu+1,Zu+2],e=new w8(e),r=hur(e)&&e[0]===1&&e[1]===3&&e[2]===Zu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}E8.exports=qur});var S8=s((WKr,A8)=>{"use strict";var yur=N8();A8.exports=yur});var T8=s((DKr,O8)=>{"use strict";var bur=typeof Uint32Array=="function"?Uint32Array:void 0;O8.exports=bur});var _8=s((zKr,I8)=>{"use strict";function wur(){throw new Error("not implemented")}I8.exports=wur});var lr=s((XKr,L8)=>{"use strict";var Eur=S8(),Nur=T8(),Aur=_8(),$u;Eur()?$u=Nur:$u=Aur;L8.exports=$u});var R8=s((JKr,P8)=>{"use strict";var Sur=ir(),Our=typeof Float64Array=="function";function Tur(r){return Our&&r instanceof Float64Array||Sur(r)==="[object Float64Array]"}P8.exports=Tur});var M8=s((xKr,F8)=>{"use strict";var Iur=R8();F8.exports=Iur});var k8=s((YKr,B8)=>{"use strict";var _ur=typeof Float64Array=="function"?Float64Array:null;B8.exports=_ur});var G8=s((ZKr,C8)=>{"use strict";var Lur=M8(),j8=k8();function Pur(){var r,e;if(typeof j8!="function")return!1;try{e=new j8([1,3.14,-3.14,NaN]),r=Lur(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}C8.exports=Pur});var Qu=s(($Kr,V8)=>{"use strict";var Rur=G8();V8.exports=Rur});var H8=s((QKr,U8)=>{"use strict";var Fur=typeof Float64Array=="function"?Float64Array:void 0;U8.exports=Fur});var D8=s((KKr,W8)=>{"use strict";function Mur(){throw new Error("not implemented")}W8.exports=Mur});var mr=s((rre,z8)=>{"use strict";var Bur=Qu(),kur=H8(),jur=D8(),Ku;Bur()?Ku=kur:Ku=jur;z8.exports=Ku});var J8=s((ere,X8)=>{"use strict";var Cur=ir(),Gur=typeof Uint8Array=="function";function Vur(r){return Gur&&r instanceof Uint8Array||Cur(r)==="[object Uint8Array]"}X8.exports=Vur});var Y8=s((tre,x8)=>{"use strict";var Uur=J8();x8.exports=Uur});var $8=s((ire,Z8)=>{"use strict";var Hur=255;Z8.exports=Hur});var K8=s((nre,Q8)=>{"use strict";var Wur=typeof Uint8Array=="function"?Uint8Array:null;Q8.exports=Wur});var t5=s((are,e5)=>{"use strict";var Dur=Y8(),ro=$8(),r5=K8();function zur(){var r,e;if(typeof r5!="function")return!1;try{e=[1,3.14,-3.14,ro+1,ro+2],e=new r5(e),r=Dur(e)&&e[0]===1&&e[1]===3&&e[2]===ro-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}e5.exports=zur});var n5=s((sre,i5)=>{"use strict";var Xur=t5();i5.exports=Xur});var s5=s((ure,a5)=>{"use strict";var Jur=typeof Uint8Array=="function"?Uint8Array:void 0;a5.exports=Jur});var o5=s((ore,u5)=>{"use strict";function xur(){throw new Error("not implemented")}u5.exports=xur});var Jt=s((fre,f5)=>{"use strict";var Yur=n5(),Zur=s5(),$ur=o5(),eo;Yur()?eo=Zur:eo=$ur;f5.exports=eo});var c5=s((vre,v5)=>{"use strict";var Qur=ir(),Kur=typeof Uint16Array=="function";function ror(r){return Kur&&r instanceof Uint16Array||Qur(r)==="[object Uint16Array]"}v5.exports=ror});var p5=s((cre,l5)=>{"use strict";var eor=c5();l5.exports=eor});var m5=s((lre,g5)=>{"use strict";var tor=65535;g5.exports=tor});var h5=s((pre,d5)=>{"use strict";var ior=typeof Uint16Array=="function"?Uint16Array:null;d5.exports=ior});var b5=s((gre,y5)=>{"use strict";var nor=p5(),to=m5(),q5=h5();function aor(){var r,e;if(typeof q5!="function")return!1;try{e=[1,3.14,-3.14,to+1,to+2],e=new q5(e),r=nor(e)&&e[0]===1&&e[1]===3&&e[2]===to-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}y5.exports=aor});var E5=s((mre,w5)=>{"use strict";var sor=b5();w5.exports=sor});var A5=s((dre,N5)=>{"use strict";var uor=typeof Uint16Array=="function"?Uint16Array:void 0;N5.exports=uor});var O5=s((hre,S5)=>{"use strict";function oor(){throw new Error("not implemented")}S5.exports=oor});var xt=s((qre,T5)=>{"use strict";var vor=E5(),cor=A5(),lor=O5(),io;vor()?io=cor:io=lor;T5.exports=io});var _5=s((yre,I5)=>{"use strict";var por=Jt(),gor=xt(),mor={uint16:gor,uint8:por};I5.exports=mor});var F5=s((bre,R5)=>{"use strict";var L5=_5(),P5;function dor(){var r,e;return r=new L5.uint16(1),r[0]=4660,e=new L5.uint8(r.buffer),e[0]===52}P5=dor();R5.exports=P5});var Et=s((wre,M5)=>{"use strict";var hor=F5();M5.exports=hor});var k5=s((Ere,B5)=>{"use strict";var qor=Et(),no;qor===!0?no=1:no=0;B5.exports=no});var G5=s((Nre,C5)=>{"use strict";var yor=lr(),bor=mr(),wor=k5(),j5=new bor(1),Eor=new yor(j5.buffer);function Nor(r){return j5[0]=r,Eor[wor]}C5.exports=Nor});var tr=s((Are,V5)=>{"use strict";var Aor=G5();V5.exports=Aor});var H5=s((Sre,U5)=>{"use strict";var Sor=Et(),ao;Sor===!0?ao=1:ao=0;U5.exports=ao});var D5=s((Ore,W5)=>{"use strict";var Oor=lr(),Tor=mr(),Ior=H5(),so=new Tor(1),_or=new Oor(so.buffer);function Lor(r,e){return so[0]=r,_or[Ior]=e>>>0,so[0]}W5.exports=Lor});var Qr=s((Tre,z5)=>{"use strict";var Por=D5();z5.exports=Por});var zr=s((Ire,X5)=>{"use strict";var Ror=1023;X5.exports=Ror});var x5=s((_re,J5)=>{"use strict";function For(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}J5.exports=For});var Z5=s((Lre,Y5)=>{"use strict";function Mor(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}Y5.exports=Mor});var rp=s((Pre,K5)=>{"use strict";var $5=tr(),Bor=Qr(),kor=E(),jor=zr(),Cor=V(),Gor=x5(),Vor=Z5(),Qn=.6931471803691238,Kn=19082149292705877e-26,Uor=0x40000000000000,Hor=.3333333333333333,Q5=1048575,Wor=2146435072,Dor=1048576,zor=1072693248;function Xor(r){var e,t,i,n,a,u,o,v,f,c,l,p;return r===0?Cor:kor(r)||r<0?NaN:(t=$5(r),a=0,t<Dor&&(a-=54,r*=Uor,t=$5(r)),t>=Wor?r+r:(a+=(t>>20)-jor|0,t&=Q5,v=t+614244&1048576|0,r=Bor(r,t|v^zor),a+=v>>20|0,o=r-1,(Q5&2+t)<3?o===0?a===0?0:a*Qn+a*Kn:(u=o*o*(.5-Hor*o),a===0?o-u:a*Qn-(u-a*Kn-o)):(c=o/(2+o),p=c*c,v=t-398458|0,l=p*p,f=440401-t|0,n=l*Gor(l),i=p*Vor(l),v|=f,u=i+n,v>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*Qn-(e-(c*(e+u)+a*Kn)-o)):a===0?o-c*(o-u):a*Qn-(c*(o-u)-a*Kn-o))))}K5.exports=Xor});var P=s((Rre,ep)=>{"use strict";var Jor=rp();ep.exports=Jor});var ip=s((Fre,tp)=>{"use strict";var xor=Math.ceil;tp.exports=xor});var Di=s((Mre,np)=>{"use strict";var Yor=ip();np.exports=Yor});var sp=s((Bre,ap)=>{"use strict";var Zor=Q(),$or=Di();function Qor(r){return r<0?$or(r):Zor(r)}ap.exports=Qor});var ra=s((kre,up)=>{"use strict";var Kor=sp();up.exports=Kor});var fp=s((jre,op)=>{"use strict";function r2r(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}op.exports=r2r});var cp=s((Cre,vp)=>{"use strict";function e2r(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}vp.exports=e2r});var pp=s((Gre,lp)=>{"use strict";var t2r=fp(),i2r=cp();function n2r(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*t2r(a),i+=n*n*i2r(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}lp.exports=n2r});var uo=s((Vre,gp)=>{"use strict";var a2r=pp();gp.exports=a2r});var hp=s((Ure,dp)=>{"use strict";var mp=-.16666666666666632,s2r=.00833333333332249,u2r=-.0001984126982985795,o2r=27557313707070068e-22,f2r=-25050760253406863e-24,v2r=158969099521155e-24;function c2r(r,e){var t,i,n,a;return a=r*r,n=a*a,t=s2r+a*(u2r+a*o2r)+a*n*(f2r+a*v2r),i=a*r,e===0?r+i*(mp+a*t):r-(a*(.5*e-i*t)-e-i*mp)}dp.exports=c2r});var oo=s((Hre,qp)=>{"use strict";var l2r=hp();qp.exports=l2r});var Xr=s((Wre,yp)=>{"use strict";var p2r=2147483647;yp.exports=p2r});var zi=s((Dre,bp)=>{"use strict";var g2r=2146435072;bp.exports=g2r});var ea=s((zre,wp)=>{"use strict";var m2r=1048575;wp.exports=m2r});var Np=s((Xre,Ep)=>{"use strict";var d2r=Et(),fo;d2r===!0?fo=0:fo=1;Ep.exports=fo});var Op=s((Jre,Sp)=>{"use strict";var h2r=lr(),q2r=mr(),y2r=Np(),Ap=new q2r(1),b2r=new h2r(Ap.buffer);function w2r(r){return Ap[0]=r,b2r[y2r]}Sp.exports=w2r});var Ip=s((xre,Tp)=>{"use strict";var E2r=Op();Tp.exports=E2r});var Pp=s((Yre,Lp)=>{"use strict";var N2r=Et(),_p,vo,co;N2r===!0?(vo=1,co=0):(vo=0,co=1);_p={HIGH:vo,LOW:co};Lp.exports=_p});var kp=s((Zre,Bp)=>{"use strict";var A2r=lr(),S2r=mr(),Fp=Pp(),Mp=new S2r(1),Rp=new A2r(Mp.buffer),O2r=Fp.HIGH,T2r=Fp.LOW;function I2r(r,e){return Rp[O2r]=r,Rp[T2r]=e,Mp[0]}Bp.exports=I2r});var Yt=s(($re,jp)=>{"use strict";var _2r=kp();jp.exports=_2r});var lo=s((Qre,Cp)=>{"use strict";var L2r=1023;Cp.exports=L2r});var Vp=s((Kre,Gp)=>{"use strict";var P2r=-1023;Gp.exports=P2r});var po=s((ree,Up)=>{"use strict";var R2r=-1074;Up.exports=R2r});var go=s((eee,Hp)=>{"use strict";var F2r=2147483648;Hp.exports=F2r});var zp=s((tee,Dp)=>{"use strict";var M2r=Et(),Wp,mo,ho;M2r===!0?(mo=1,ho=0):(mo=0,ho=1);Wp={HIGH:mo,LOW:ho};Dp.exports=Wp});var qo=s((iee,Yp)=>{"use strict";var B2r=lr(),k2r=mr(),Jp=zp(),xp=new k2r(1),Xp=new B2r(xp.buffer),j2r=Jp.HIGH,C2r=Jp.LOW;function G2r(r,e,t,i){return xp[0]=r,e[i]=Xp[j2r],e[i+t]=Xp[C2r],e}Yp.exports=G2r});var $p=s((nee,Zp)=>{"use strict";var V2r=qo();function U2r(r){return V2r(r,[0>>>0,0>>>0],1,0)}Zp.exports=U2r});var Zt=s((aee,Kp)=>{"use strict";var H2r=w(),Qp=$p(),W2r=qo();H2r(Qp,"assign",W2r);Kp.exports=Qp});var e7=s((see,r7)=>{"use strict";var D2r=go(),z2r=Xr(),X2r=Zt(),J2r=tr(),x2r=Yt(),yo=[0,0];function Y2r(r,e){var t,i;return X2r.assign(r,yo,1,0),t=yo[0],t&=z2r,i=J2r(e),i&=D2r,t|=i,x2r(t,yo[1])}r7.exports=Y2r});var ta=s((uee,t7)=>{"use strict";var Z2r=e7();t7.exports=Z2r});var bo=s((oee,i7)=>{"use strict";var $2r=22250738585072014e-324;i7.exports=$2r});var wo=s((fee,n7)=>{"use strict";var Q2r=bo(),K2r=Pr(),r1r=E(),e1r=J(),t1r=4503599627370496;function i1r(r,e,t,i){return r1r(r)||K2r(r)?(e[i]=r,e[i+t]=0,e):r!==0&&e1r(r)<Q2r?(e[i]=r*t1r,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}n7.exports=i1r});var s7=s((vee,a7)=>{"use strict";var n1r=wo();function a1r(r){return n1r(r,[0,0],1,0)}a7.exports=a1r});var f7=s((cee,o7)=>{"use strict";var s1r=w(),u7=s7(),u1r=wo();s1r(u7,"assign",u1r);o7.exports=u7});var c7=s((lee,v7)=>{"use strict";var o1r=tr(),f1r=zi(),v1r=zr();function c1r(r){var e=o1r(r);return e=(e&f1r)>>>20,e-v1r|0}v7.exports=c1r});var p7=s((pee,l7)=>{"use strict";var l1r=c7();l7.exports=l1r});var m7=s((gee,g7)=>{"use strict";var p1r=_(),g1r=V(),m1r=zr(),d1r=lo(),h1r=Vp(),q1r=po(),y1r=E(),b1r=Pr(),w1r=ta(),E1r=f7().assign,N1r=p7(),A1r=Zt(),S1r=Yt(),O1r=2220446049250313e-31,T1r=2148532223>>>0,Eo=[0,0],No=[0,0];function I1r(r,e){var t,i;return e===0||r===0||y1r(r)||b1r(r)?r:(E1r(r,Eo,1,0),r=Eo[0],e+=Eo[1],e+=N1r(r),e<q1r?w1r(0,r):e>d1r?r<0?g1r:p1r:(e<=h1r?(e+=52,i=O1r):i=1,A1r.assign(r,No,1,0),t=No[0],t&=T1r,t|=e+m1r<<20,i*S1r(t,No[1])))}g7.exports=I1r});var ia=s((mee,d7)=>{"use strict";var _1r=m7();d7.exports=_1r});var q7=s((dee,h7)=>{"use strict";function L1r(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}h7.exports=L1r});var Ao=s((hee,y7)=>{"use strict";var P1r=q7();y7.exports=P1r});var w7=s((qee,b7)=>{"use strict";var R1r=Ao();function F1r(r){return R1r(0,r)}b7.exports=F1r});var So=s((yee,E7)=>{"use strict";var M1r=w7();E7.exports=M1r});var T7=s((bee,O7)=>{"use strict";var B1r=Q(),na=ia(),ua=So(),A7=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],k1r=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Oo=16777216,To=5960464477539063e-23,aa=ua(20),N7=ua(20),sa=ua(20),fr=ua(20);function S7(r,e,t,i,n,a,u,o,v){var f,c,l,p,m,h,d,g,q;for(p=a,q=i[t],g=t,m=0;g>0;m++)c=To*q|0,fr[m]=q-Oo*c|0,q=i[g-1]+c,g-=1;if(q=na(q,n),q-=8*B1r(q*.125),d=q|0,q-=d,l=0,n>0?(m=fr[t-1]>>24-n,d+=m,fr[t-1]-=m<<24-n,l=fr[t-1]>>23-n):n===0?l=fr[t-1]>>23:q>=.5&&(l=2),l>0){for(d+=1,f=0,m=0;m<t;m++)g=fr[m],f===0?g!==0&&(f=1,fr[m]=16777216-g):fr[m]=16777215-g;if(n>0)switch(n){case 1:fr[t-1]&=8388607;break;case 2:fr[t-1]&=4194303;break}l===2&&(q=1-q,f!==0&&(q-=na(1,n)))}if(q===0){for(g=0,m=t-1;m>=a;m--)g|=fr[m];if(g===0){for(h=1;fr[a-h]===0;h++);for(m=t+1;m<=t+h;m++){for(v[o+m]=A7[u+m],c=0,g=0;g<=o;g++)c+=r[g]*v[o+(m-g)];i[m]=c}return t+=h,S7(r,e,t,i,n,a,u,o,v)}}if(q===0)for(t-=1,n-=24;fr[t]===0;)t-=1,n-=24;else q=na(q,-n),q>=Oo?(c=To*q|0,fr[t]=q-Oo*c|0,t+=1,n+=24,fr[t]=c):fr[t]=q|0;for(c=na(1,n),m=t;m>=0;m--)i[m]=c*fr[m],c*=To;for(m=t;m>=0;m--){for(c=0,h=0;h<=p&&h<=t-m;h++)c+=k1r[h]*i[m+h];sa[t-m]=c}for(c=0,m=t;m>=0;m--)c+=sa[m];for(l===0?e[0]=c:e[0]=-c,c=sa[0]-c,m=1;m<=t;m++)c+=sa[m];return l===0?e[1]=c:e[1]=-c,d&7}function j1r(r,e,t,i){var n,a,u,o,v,f,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),f=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?aa[c]=0:aa[c]=A7[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*aa[o+(c-l)];N7[c]=n}return v=a,S7(r,e,v,N7,f,a,u,o,aa)}O7.exports=j1r});var _7=s((wee,I7)=>{"use strict";var C1r=Math.round;I7.exports=C1r});var Io=s((Eee,L7)=>{"use strict";var G1r=_7();L7.exports=G1r});var M7=s((Nee,F7)=>{"use strict";var V1r=Io(),P7=tr(),U1r=.6366197723675814,H1r=1.5707963267341256,W1r=6077100506506192e-26,D1r=6077100506303966e-26,z1r=20222662487959506e-37,X1r=20222662487111665e-37,J1r=84784276603689e-45,R7=2047;function x1r(r,e,t){var i,n,a,u,o,v,f;return n=V1r(r*U1r),u=r-n*H1r,o=n*W1r,f=e>>20|0,t[0]=u-o,i=P7(t[0]),v=f-(i>>20&R7),v>16&&(a=u,o=n*D1r,u=a-o,o=n*z1r-(a-u-o),t[0]=u-o,i=P7(t[0]),v=f-(i>>20&R7),v>49&&(a=u,o=n*X1r,u=a-o,o=n*J1r-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}F7.exports=x1r});var k7=s((Aee,B7)=>{"use strict";var Y1r=Xr(),Z1r=zi(),$1r=ea(),Q1r=tr(),K1r=Ip(),r3r=Yt(),e3r=T7(),oa=M7(),t3r=0,i3r=16777216,je=1.5707963267341256,Nt=6077100506506192e-26,fa=2*Nt,va=3*Nt,ca=4*Nt,n3r=598523,a3r=1072243195,s3r=1073928572,u3r=1074752122,o3r=1074977148,f3r=1075183036,v3r=1075388923,c3r=1075594811,l3r=1094263291,Xi=[0,0,0],Ji=[0,0];function p3r(r,e){var t,i,n,a,u,o,v,f;if(n=Q1r(r),a=n&Y1r|0,a<=a3r)return e[0]=r,e[1]=0,0;if(a<=u3r)return(a&$1r)===n3r?oa(r,a,e):a<=s3r?r>0?(f=r-je,e[0]=f-Nt,e[1]=f-e[0]-Nt,1):(f=r+je,e[0]=f+Nt,e[1]=f-e[0]+Nt,-1):r>0?(f=r-2*je,e[0]=f-fa,e[1]=f-e[0]-fa,2):(f=r+2*je,e[0]=f+fa,e[1]=f-e[0]+fa,-2);if(a<=c3r)return a<=f3r?a===o3r?oa(r,a,e):r>0?(f=r-3*je,e[0]=f-va,e[1]=f-e[0]-va,3):(f=r+3*je,e[0]=f+va,e[1]=f-e[0]+va,-3):a===v3r?oa(r,a,e):r>0?(f=r-4*je,e[0]=f-ca,e[1]=f-e[0]-ca,4):(f=r+4*je,e[0]=f+ca,e[1]=f-e[0]+ca,-4);if(a<l3r)return oa(r,a,e);if(a>=Z1r)return e[0]=NaN,e[1]=NaN,0;for(t=K1r(r),i=(a>>20)-1046,f=r3r(a-(i<<20|0),t),o=0;o<2;o++)Xi[o]=f|0,f=(f-Xi[o])*i3r;for(Xi[2]=f,u=3;Xi[u-1]===t3r;)u-=1;return v=e3r(Xi,Ji,i,u,1),r<0?(e[0]=-Ji[0],e[1]=-Ji[1],-v):(e[0]=Ji[0],e[1]=Ji[1],v)}B7.exports=p3r});var xi=s((See,j7)=>{"use strict";var g3r=k7();j7.exports=g3r});var V7=s((Oee,G7)=>{"use strict";var m3r=tr(),_o=uo(),C7=oo(),d3r=xi(),Kr=[0,0],h3r=2147483647,q3r=1072243195,y3r=1044381696,b3r=2146435072;function w3r(r){var e,t;if(e=m3r(r),e&=h3r,e<=q3r)return e<y3r?1:_o(r,0);if(e>=b3r)return NaN;switch(t=d3r(r,Kr),t&3){case 0:return _o(Kr[0],Kr[1]);case 1:return-C7(Kr[0],Kr[1]);case 2:return-_o(Kr[0],Kr[1]);default:return C7(Kr[0],Kr[1])}}G7.exports=w3r});var At=s((Tee,U7)=>{"use strict";var E3r=V7();U7.exports=E3r});var D7=s((Iee,W7)=>{"use strict";var N3r=Xr(),A3r=zi(),S3r=tr(),H7=uo(),Lo=oo(),O3r=xi(),T3r=1072243195,I3r=1045430272,re=[0,0];function _3r(r){var e,t;if(e=S3r(r),e&=N3r,e<=T3r)return e<I3r?r:Lo(r,0);if(e>=A3r)return NaN;switch(t=O3r(r,re),t&3){case 0:return Lo(re[0],re[1]);case 1:return H7(re[0],re[1]);case 2:return-Lo(re[0],re[1]);default:return-H7(re[0],re[1])}}W7.exports=_3r});var St=s((_ee,z7)=>{"use strict";var L3r=D7();z7.exports=L3r});var Ir=s((Lee,X7)=>{"use strict";var P3r=3.141592653589793;X7.exports=P3r});var Y7=s((Pee,x7)=>{"use strict";var R3r=E(),F3r=Pr(),J7=At(),Po=St(),M3r=J(),Yi=ta(),Zi=Ir();function B3r(r){var e,t;return R3r(r)?NaN:F3r(r)?NaN:(t=r%2,e=M3r(t),e===0||e===1?Yi(0,t):e<.25?Po(Zi*t):e<.75?(e=.5-e,Yi(J7(Zi*e),t)):e<1.25?(t=Yi(1,t)-t,Po(Zi*t)):e<1.75?(e-=1.5,-Yi(J7(Zi*e),t)):(t-=Yi(2,t),Po(Zi*t)))}x7.exports=B3r});var $i=s((Ree,Z7)=>{"use strict";var k3r=Y7();Z7.exports=k3r});var Q7=s((Fee,$7)=>{"use strict";function j3r(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}$7.exports=j3r});var r9=s((Mee,K7)=>{"use strict";function C3r(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}K7.exports=C3r});var t9=s((Bee,e9)=>{"use strict";function G3r(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}e9.exports=G3r});var n9=s((kee,i9)=>{"use strict";function V3r(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}i9.exports=V3r});var s9=s((jee,a9)=>{"use strict";function U3r(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}a9.exports=U3r});var o9=s((Cee,u9)=>{"use strict";function H3r(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}u9.exports=H3r});var v9=s((Gee,f9)=>{"use strict";function W3r(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}f9.exports=W3r});var l9=s((Vee,c9)=>{"use strict";function D3r(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}c9.exports=D3r});var g9=s((Uee,p9)=>{"use strict";function z3r(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}p9.exports=z3r});var d9=s((Hee,m9)=>{"use strict";function X3r(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}m9.exports=X3r});var y9=s((Wee,q9)=>{"use strict";var J3r=E(),x3r=Pr(),Y3r=J(),$t=P(),Z3r=ra(),$3r=$i(),Q3r=Ir(),Ro=_(),K3r=Q7(),rfr=r9(),efr=t9(),tfr=n9(),ifr=s9(),nfr=o9(),afr=v9(),sfr=l9(),ufr=g9(),ofr=d9(),ffr=.07721566490153287,vfr=.3224670334241136,cfr=1,lfr=-.07721566490153287,pfr=.48383612272381005,gfr=-.1475877229945939,mfr=.06462494023913339,dfr=-.07721566490153287,hfr=1,qfr=.4189385332046727,la=1.4616321449683622,yfr=4503599627370496,bfr=0x400000000000000,wfr=8470329472543003e-37,h9=1.4616321449683622,Efr=-.12148629053584961,Nfr=-3638676997039505e-33;function Afr(r){var e,t,i,n,a,u,o,v,f,c,l,p,m;if(J3r(r)||x3r(r))return r;if(r===0)return Ro;if(r<0?(e=!0,r=-r):e=!1,r<wfr)return-$t(r);if(e){if(r>=yfr||(f=$3r(r),f===0))return Ro;t=$t(Q3r/Y3r(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-$t(r),r>=la-1+.27?(l=1-r,i=0):r>=la-1-.27?(l=r-(h9-1),i=1):(l=r,i=2)):(m=0,r>=la+.27?(l=2-r,i=0):r>=la-.27?(l=r-h9,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=ffr+p*K3r(p),a=p*(vfr+p*rfr(p)),o=l*u+a,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=pfr+c*ifr(c),a=gfr+c*nfr(c),n=mfr+c*afr(c),o=p*u-(Nfr-c*(a+l*n)),m+=Efr+o;break;case 2:u=l*(dfr+l*sfr(l)),a=hfr+l*ufr(l),m+=-.5*l+u/a;break}else if(r<8)switch(i=Z3r(r),l=r-i,o=l*(lfr+l*tfr(l)),v=cfr+l*efr(l),m=.5*l+o/v,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=$t(p)}else r<bfr?(f=$t(r),p=1/r,l=p*p,c=qfr+p*ofr(l),m=(r-.5)*(f-1)+c):m=r*($t(r)-1);return e&&(m=t-m),m}q9.exports=Afr});var Qi=s((Dee,b9)=>{"use strict";var Sfr=y9();b9.exports=Sfr});var E9=s((zee,w9)=>{"use strict";var Ofr=V();function Tfr(r){return r===0&&1/r===Ofr}w9.exports=Tfr});var Fo=s((Xee,N9)=>{"use strict";var Ifr=E9();N9.exports=Ifr});var Mo=s((Jee,A9)=>{"use strict";var _fr=2.5066282746310007;A9.exports=_fr});var O9=s((xee,S9)=>{"use strict";var Lfr=Tr();function Pfr(r){return Lfr(r/2)}S9.exports=Pfr});var pa=s((Yee,T9)=>{"use strict";var Rfr=O9();T9.exports=Rfr});var L9=s((Zee,_9)=>{"use strict";var I9=pa();function Ffr(r){return r>0?I9(r-1):I9(r+1)}_9.exports=Ffr});var Bo=s(($ee,P9)=>{"use strict";var Mfr=L9();P9.exports=Mfr});var F9=s((Qee,R9)=>{"use strict";var Bfr=Math.sqrt;R9.exports=Bfr});var G=s((Kee,M9)=>{"use strict";var kfr=F9();M9.exports=kfr});var k9=s((rte,B9)=>{"use strict";var jfr=Et(),ko;jfr===!0?ko=0:ko=1;B9.exports=ko});var C9=s((ete,j9)=>{"use strict";var Cfr=lr(),Gfr=mr(),Vfr=k9(),jo=new Gfr(1),Ufr=new Cfr(jo.buffer);function Hfr(r,e){return jo[0]=r,Ufr[Vfr]=e>>>0,jo[0]}j9.exports=Hfr});var ee=s((tte,G9)=>{"use strict";var Wfr=C9();G9.exports=Wfr});var U9=s((ite,V9)=>{"use strict";function Dfr(r){return r|0}V9.exports=Dfr});var Co=s((nte,H9)=>{"use strict";var zfr=U9();H9.exports=zfr});var z9=s((ate,D9)=>{"use strict";var W9=Bo(),Xfr=ta(),Jfr=V(),ga=_();function xfr(r,e){return e===Jfr?ga:e===ga?0:e>0?W9(e)?r:0:W9(e)?Xfr(ga,r):ga}D9.exports=xfr});var J9=s((ste,X9)=>{"use strict";var Yfr=Xr(),Zfr=tr(),$fr=1072693247,ma=1e300,da=1e-300;function Qfr(r,e){var t,i;return i=Zfr(r),t=i&Yfr,t<=$fr?e<0?ma*ma:da*da:e>0?ma*ma:da*da}X9.exports=Qfr});var Z9=s((ute,Y9)=>{"use strict";var Kfr=J(),x9=_();function rvr(r,e){return r===-1?(r-r)/(r-r):r===1?1:Kfr(r)<1==(e===x9)?0:x9}Y9.exports=rvr});var Q9=s((ote,$9)=>{"use strict";function evr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}$9.exports=evr});var tg=s((fte,eg)=>{"use strict";var tvr=tr(),ha=ee(),K9=Qr(),ivr=zr(),nvr=Q9(),avr=1048575,rg=1048576,svr=1072693248,uvr=536870912,ovr=524288,fvr=20,vvr=9007199254740992,cvr=.9617966939259756,lvr=.9617967009544373,pvr=-7028461650952758e-24,gvr=[1,1.5],mvr=[0,.5849624872207642],dvr=[0,1350039202129749e-23];function hvr(r,e,t){var i,n,a,u,o,v,f,c,l,p,m,h,d,g,q,N,A,j,T,X,vr,$;return X=0,t<rg&&(e*=vvr,X-=53,t=tvr(e)),X+=(t>>fvr)-ivr|0,vr=t&avr|0,t=vr|svr|0,vr<=235662?$=0:vr<767610?$=1:($=0,X+=1,t-=rg),e=K9(e,t),c=gvr[$],j=e-c,T=1/(e+c),n=j*T,u=ha(n,0),i=(t>>1|uvr)+ovr,i+=$<<18,v=K9(0,i),f=e-(v-c),o=T*(j-u*v-u*f),a=n*n,A=a*a*nvr(a),A+=o*(u+n),a=u*u,v=3+a+A,v=ha(v,0),f=A-(v-3-a),j=u*v,T=o*v+f*n,p=j+T,p=ha(p,0),m=T-(p-j),h=lvr*p,d=pvr*p+m*cvr+dvr[$],l=mvr[$],N=X,g=h+d+l+N,g=ha(g,0),q=d-(g-N-l-h),r[0]=g,r[1]=q,r}eg.exports=hvr});var ng=s((vte,ig)=>{"use strict";function qvr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}ig.exports=qvr});var sg=s((cte,ag)=>{"use strict";var yvr=ee(),bvr=ng(),wvr=1.4426950408889634,Evr=1.4426950216293335,Nvr=19259629911266175e-24;function Avr(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*bvr(n),u=Evr*n,o=n*Nvr-a*wvr,i=u+o,i=yvr(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}ag.exports=Avr});var qa=s((lte,ug)=>{"use strict";var Svr=.6931471805599453;ug.exports=Svr});var fg=s((pte,og)=>{"use strict";function Ovr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}og.exports=Ovr});var dg=s((gte,mg)=>{"use strict";var Tvr=tr(),vg=Qr(),Ivr=ee(),_vr=Co(),Lvr=ia(),Pvr=qa(),cg=zr(),lg=Xr(),pg=ea(),Rvr=fg(),gg=1048576,Fvr=1071644672,Ki=20,Mvr=.6931471824645996,Bvr=-1904654299957768e-24;function kvr(r,e,t){var i,n,a,u,o,v,f,c,l,p,m;return p=r&lg|0,m=(p>>Ki)-cg|0,l=0,p>Fvr&&(l=r+(gg>>m+1)>>>0,m=((l&lg)>>Ki)-cg|0,i=(l&~(pg>>m))>>>0,a=vg(0,i),l=(l&pg|gg)>>Ki-m>>>0,r<0&&(l=-l),e-=a),a=t+e,a=Ivr(a,0),o=a*Mvr,v=(t-(a-e))*Pvr+a*Bvr,c=o+v,f=v-(c-o),a=c*c,n=c-a*Rvr(a),u=c*n/(n-2)-(f+c*f),c=1-(u-c),r=Tvr(c),r=_vr(r),r+=l<<Ki>>>0,r>>Ki<=0?c=Lvr(c,l):c=vg(c,r),c}mg.exports=kvr});var Tg=s((mte,Og)=>{"use strict";var hg=E(),qg=Bo(),yg=Pr(),jvr=Tr(),bg=G(),Cvr=J(),Go=Zt(),Gvr=ee(),wg=Co(),Vvr=V(),Uvr=_(),Vo=Xr(),Hvr=z9(),Wvr=J9(),Dvr=Z9(),zvr=tg(),Xvr=sg(),Jvr=dg(),xvr=1072693247,Yvr=1105199104,Zvr=1139802112,Eg=1083179008,$vr=1072693248,Qvr=1083231232,Kvr=3230714880>>>0,Ng=31,Ce=1e300,Ge=1e-300,rcr=8008566259537294e-32,te=[0,0],Ag=[0,0];function Sg(r,e){var t,i,n,a,u,o,v,f,c,l,p,m,h,d,g,q;if(hg(r)||hg(e))return NaN;if(Go.assign(e,te,1,0),o=te[0],v=te[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return bg(r);if(e===-.5)return 1/bg(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(yg(e))return Dvr(r,e)}if(Go.assign(r,te,1,0),a=te[0],u=te[1],u===0){if(a===0)return Hvr(r,e);if(r===1)return 1;if(r===-1&&qg(e))return-1;if(yg(r))return r===Vvr?Sg(-0,-e):e<0?0:Uvr}if(r<0&&jvr(e)===!1)return(r-r)/(r-r);if(n=Cvr(r),t=a&Vo|0,i=o&Vo|0,f=a>>>Ng|0,c=o>>>Ng|0,f&&qg(e)?f=-1:f=1,i>Yvr){if(i>Zvr)return Wvr(r,e);if(t<xvr)return c===1?f*Ce*Ce:f*Ge*Ge;if(t>$vr)return c===0?f*Ce*Ce:f*Ge*Ge;h=Xvr(Ag,n)}else h=zvr(Ag,n,t);if(l=Gvr(e,0),m=(e-l)*h[0]+e*h[1],p=l*h[0],d=m+p,Go.assign(d,te,1,0),g=wg(te[0]),q=wg(te[1]),g>=Eg){if((g-Eg|q)!==0||m+rcr>d-p)return f*Ce*Ce}else if((g&Vo)>=Qvr&&((g-Kvr|q)!==0||m<=d-p))return f*Ge*Ge;return d=Jvr(g,p,m),f*d}Og.exports=Sg});var H=s((dte,Ig)=>{"use strict";var ecr=Tg();Ig.exports=ecr});var Lg=s((hte,_g)=>{"use strict";function tcr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}_g.exports=tcr});var Rg=s((qte,Pg)=>{"use strict";var icr=ia(),ncr=Lg();function acr(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*ncr(n),u=1-(e-i*a/(2-a)-r),icr(u,t)}Pg.exports=acr});var Cg=s((yte,jg)=>{"use strict";var scr=E(),Fg=ra(),ucr=V(),Mg=_(),ocr=Rg(),fcr=.6931471803691238,vcr=19082149292705877e-26,Bg=1.4426950408889634,ccr=709.782712893384,lcr=-745.1332191019411,kg=1/(1<<28),pcr=-kg;function gcr(r){var e,t,i;return scr(r)||r===Mg?r:r===ucr?0:r>ccr?Mg:r<lcr?0:r>pcr&&r<kg?1+r:(r<0?i=Fg(Bg*r-.5):i=Fg(Bg*r+.5),e=r-i*fcr,t=i*vcr,ocr(e,t,i))}jg.exports=gcr});var nr=s((bte,Gg)=>{"use strict";var mcr=Cg();Gg.exports=mcr});var Ug=s((wte,Vg)=>{"use strict";function dcr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}Vg.exports=dcr});var Dg=s((Ete,Wg)=>{"use strict";var hcr=Mo(),Hg=H(),qcr=nr(),ycr=Ug(),bcr=143.01608;function wcr(r){var e,t,i;return e=1/r,e=1+e*ycr(e),t=qcr(r),r>bcr?(i=Hg(r,.5*r-.25),t=i*(i/t)):t=Hg(r,r-.5)/t,hcr*t*e}Wg.exports=wcr});var Xg=s((Nte,zg)=>{"use strict";var Ecr=.5772156649015329;zg.exports=Ecr});var xg=s((Ate,Jg)=>{"use strict";var Ncr=Xg();function Acr(r,e){return e/((1+Ncr*r)*r)}Jg.exports=Acr});var Zg=s((Ste,Yg)=>{"use strict";function Scr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}Yg.exports=Scr});var nm=s((Ote,im)=>{"use strict";var Ocr=E(),Tcr=Tr(),Icr=Fo(),$g=J(),_cr=Q(),Lcr=St(),Qg=_(),Kg=V(),rm=Ir(),em=Dg(),tm=xg(),Pcr=Zg();function Rcr(r){var e,t,i,n;if(Tcr(r)&&r<0||r===Kg||Ocr(r))return NaN;if(r===0)return Icr(r)?Kg:Qg;if(r>171.61447887182297)return Qg;if(r<-170.5674972726612)return 0;if(t=$g(r),t>33)return r>=0?em(r):(i=_cr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*Lcr(rm*n),e*rm/($g(n)*em(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return tm(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return tm(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*Pcr(r))}im.exports=Rcr});var Qt=s((Tte,am)=>{"use strict";var Fcr=nm();am.exports=Fcr});var Uo=s((Ite,sm)=>{"use strict";var Mcr=14901161193847656e-24;sm.exports=Mcr});var om=s((_te,um)=>{"use strict";var Bcr=17976931348623157e292;um.exports=Bcr});var ya=s((Lte,fm)=>{"use strict";var kcr=709.782712893384;fm.exports=kcr});var cm=s((Pte,vm)=>{"use strict";var jcr=nr();function Ccr(r,e){var t,i,n,a;if(n=jcr(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}vm.exports=Ccr});var pm=s((Rte,lm)=>{"use strict";function Gcr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}lm.exports=Gcr});var mm=s((Fte,gm)=>{"use strict";function Vcr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}gm.exports=Vcr});var hm=s((Mte,dm)=>{"use strict";function Ucr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}dm.exports=Ucr});var ym=s((Bte,qm)=>{"use strict";function Hcr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}qm.exports=Hcr});var wm=s((kte,bm)=>{"use strict";function Wcr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}bm.exports=Wcr});var Nm=s((jte,Em)=>{"use strict";function Dcr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}Em.exports=Dcr});var Sm=s((Cte,Am)=>{"use strict";function zcr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}Am.exports=zcr});var Tm=s((Gte,Om)=>{"use strict";function Xcr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}Om.exports=Xcr});var Pm=s((Vte,Lm)=>{"use strict";var Jcr=E(),Im=nr(),xcr=ee(),Ycr=_(),Zcr=V(),$cr=pm(),Qcr=mm(),Kcr=hm(),rlr=ym(),elr=wm(),tlr=Nm(),ilr=Sm(),nlr=Tm(),ba=1e-300,alr=13877787807814457e-33,_m=.8450629115104675,slr=.12837916709551256,ulr=1,olr=-.0023621185607526594,flr=1,vlr=-.009864944034847148,clr=1,llr=-.0098649429247001,plr=1;function glr(r){var e,t,i,n,a,u,o,v;if(Jcr(r))return NaN;if(r===Ycr)return 0;if(r===Zcr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<alr?1-r:(i=r*r,n=slr+i*$cr(i),a=ulr+i*Qcr(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=olr+a*Kcr(a),v=flr+a*rlr(a),e?1+_m+o/v:1-_m-o/v;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=vlr+a*elr(a),a=clr+a*tlr(a);else{if(r<-6)return 2-ba;n=llr+a*ilr(a),a=plr+a*nlr(a)}return i=xcr(t,0),n=Im(-(i*i)-.5625)*Im((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-ba:ba*ba}Lm.exports=glr});var Ot=s((Ute,Rm)=>{"use strict";var mlr=Pm();Rm.exports=mlr});var Bm=s((Hte,Mm)=>{"use strict";var dlr=Ot(),Fm=G(),hlr=nr(),qlr=Ir();function ylr(r,e){var t,i,n,a,u;if(a=dlr(Fm(e)),a!==0&&r>1){for(i=hlr(-e)/Fm(qlr*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}Mm.exports=ylr});var Ho=s((Wte,km)=>{"use strict";var blr=-708.3964185322641;km.exports=blr});var Vm=s((Dte,Gm)=>{"use strict";var Kt=nr(),wa=H(),wlr=P(),jm=ya(),Cm=Ho();function Elr(r,e){var t,i;return i=r*wlr(e),e>=1?i<jm&&-e>Cm?t=wa(e,r)*Kt(-e):r>=1?t=wa(e/Kt(e/r),r):t=Kt(i-e):i>Cm?t=wa(e,r)*Kt(-e):e/r<jm?t=wa(e/Kt(e/r),r):t=Kt(i-e),t}Gm.exports=Elr});var Wo=s((zte,Um)=>{"use strict";function Nlr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Um.exports=Nlr});var Wm=s((Xte,Hm)=>{"use strict";var Alr=Function;Hm.exports=Alr});var zm=s((Jte,Dm)=>{"use strict";var Slr=Wm();Dm.exports=Slr});var Jm=s((xte,Xm)=>{"use strict";var Olr=zm(),Tlr=Wo();function Ilr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new Olr(e)();function a(u){return Tlr(r,u)}}Xm.exports=Ilr});var Zm=s((Yte,Ym)=>{"use strict";var _lr=w(),xm=Wo(),Llr=Jm();_lr(xm,"factory",Llr);Ym.exports=xm});var Tt=s((Zte,$m)=>{"use strict";var Plr=2220446049250313e-31;$m.exports=Plr});var Km=s(($te,Qm)=>{"use strict";var Rlr=eval;Qm.exports=Rlr});var ed=s((Qte,rd)=>{"use strict";var Flr=Km();function Mlr(){var r;try{Flr('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}rd.exports=Mlr});var Do=s((Kte,td)=>{"use strict";var Blr=ed();td.exports=Blr});var nd=s((rie,id)=>{"use strict";var Ea=J(),klr=Tt(),jlr=1e6;function Clr(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||klr,a=o.maxTerms||jlr,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,Ea(i*u)>=Ea(n)||--a===0)break}else do n=r(),u+=n;while(Ea(i*u)<Ea(n)&&--a);return u}id.exports=Clr});var ud=s((eie,sd)=>{"use strict";var ad=J(),Glr=Tt(),Vlr=1e6;function Ulr(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||Glr,n=u.maxTerms||Vlr,a=u.initialValue||0;do i=r(),a+=i;while(ad(t*a)<ad(i)&&--n);return a}sd.exports=Ulr});var Na=s((tie,od)=>{"use strict";var Hlr=Do(),Wlr=nd(),Dlr=ud(),zo;Hlr()?zo=Wlr:zo=Dlr;od.exports=zo});var vd=s((iie,fd)=>{"use strict";function zlr(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}fd.exports=zlr});var ld=s((nie,cd)=>{"use strict";var Xlr=J(),Jlr=P(),xlr=Tt(),Ylr=Na(),Zlr=vd();function $lr(r){var e,t;return r<=-1?NaN:(t=Xlr(r),t>.95?Jlr(1+r)-r:t<xlr?-r*r/2:(e={initialValue:-r},Ylr(Zlr(r),e)))}cd.exports=$lr});var gd=s((aie,pd)=>{"use strict";var Qlr=ld();pd.exports=Qlr});var Ve=s((sie,md)=>{"use strict";var Klr=6.283185307179586;md.exports=Klr});var hd=s((uie,dd)=>{"use strict";function r4r(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}dd.exports=r4r});var yd=s((oie,qd)=>{"use strict";function e4r(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}qd.exports=e4r});var wd=s((fie,bd)=>{"use strict";function t4r(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}bd.exports=t4r});var Nd=s((vie,Ed)=>{"use strict";function i4r(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}Ed.exports=i4r});var Sd=s((cie,Ad)=>{"use strict";function n4r(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}Ad.exports=n4r});var Td=s((lie,Od)=>{"use strict";function a4r(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}Od.exports=a4r});var _d=s((pie,Id)=>{"use strict";function s4r(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}Id.exports=s4r});var Pd=s((gie,Ld)=>{"use strict";function u4r(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}Ld.exports=u4r});var Fd=s((mie,Rd)=>{"use strict";function o4r(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Rd.exports=o4r});var Bd=s((die,Md)=>{"use strict";var f4r=Zm(),v4r=gd(),c4r=Ot(),Xo=G(),l4r=nr(),p4r=Ve(),g4r=hd(),m4r=yd(),d4r=wd(),h4r=Nd(),q4r=Sd(),y4r=Td(),b4r=_d(),w4r=Pd(),E4r=Fd(),Gr=[0,0,0,0,0,0,0,0,0,0];function N4r(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-v4r(i),a=r*n,u=Xo(2*n),e<r&&(u=-u),Gr[0]=g4r(u),Gr[1]=m4r(u),Gr[2]=d4r(u),Gr[3]=h4r(u),Gr[4]=q4r(u),Gr[5]=y4r(u),Gr[6]=b4r(u),Gr[7]=w4r(u),Gr[8]=E4r(u),Gr[9]=-.0005967612901927463,t=f4r(Gr,1/r),t*=l4r(-a)/Xo(p4r*r),e<r&&(t=-t),t+=c4r(Xo(a))/2,t}Md.exports=N4r});var jd=s((hie,kd)=>{"use strict";function A4r(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}kd.exports=A4r});var Gd=s((qie,Cd)=>{"use strict";var S4r=Na(),O4r=jd();function T4r(r,e,t){var i,n;return t=t||0,n=O4r(r,e),i=S4r(n,{initialValue:t}),i}Cd.exports=T4r});var Ud=s((yie,Vd)=>{"use strict";function I4r(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}Vd.exports=I4r});var Wd=s((bie,Hd)=>{"use strict";var _4r=Ud();Hd.exports=_4r});var zd=s((wie,Dd)=>{"use strict";var L4r=Wd();Dd.exports=L4r});var Jd=s((Eie,Xd)=>{"use strict";function P4r(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}Xd.exports=P4r});var Qd=s((Nie,$d)=>{"use strict";var R4r=E(),xd=tr(),Yd=Qr(),F4r=_(),M4r=V(),Zd=zr(),B4r=Jd(),Jo=.6931471803691238,xo=19082149292705877e-26,k4r=.41421356237309503,j4r=-.2928932188134525,C4r=1862645149230957e-24,G4r=5551115123125783e-32,V4r=9007199254740992,U4r=.6666666666666666;function H4r(r){var e,t,i,n,a,u,o,v,f,c;if(r<-1||R4r(r))return NaN;if(r===-1)return M4r;if(r===F4r||r===0)return r;if(r<0?i=-r:i=r,c=1,i<k4r){if(i<C4r)return i<G4r?r:r-r*r*.5;r>j4r&&(c=0,n=r,t=1)}return c!==0&&(i<V4r?(f=1+r,t=xd(f),c=(t>>20)-Zd,c>0?a=1-(f-r):a=r-(f-1),a/=f):(f=r,t=xd(f),c=(t>>20)-Zd,a=0),t&=1048575,t<434334?f=Yd(f,t|1072693248):(c+=1,f=Yd(f,t|1071644672),t=1048576-t>>2),n=f-1),e=.5*n*n,t===0?n===0?(a+=c*xo,c*Jo+a):(v=e*(1-U4r*n),c*Jo-(v-(c*xo+a)-n)):(u=n/(2+n),o=u*u,v=o*B4r(o),c===0?n-(e-u*(e+v)):c*Jo-(e-(u*(e+v)+(c*xo+a))-n))}$d.exports=H4r});var Ue=s((Aie,Kd)=>{"use strict";var W4r=Qd();Kd.exports=W4r});var eh=s((Sie,rh)=>{"use strict";var D4r=_();function z4r(r){return r===0&&1/r===D4r}rh.exports=z4r});var He=s((Oie,th)=>{"use strict";var X4r=eh();th.exports=X4r});var ah=s((Tie,nh)=>{"use strict";var J4r=He(),ih=E(),Yo=_();function x4r(r,e){return ih(r)||ih(e)?NaN:r===Yo||e===Yo?Yo:r===e&&r===0?J4r(r)?r:e:r>e?r:e}nh.exports=x4r});var Zo=s((Iie,sh)=>{"use strict";var Y4r=ah();sh.exports=Y4r});var fh=s((_ie,oh)=>{"use strict";var Z4r=Fo(),uh=E(),$o=V();function $4r(r,e){return uh(r)||uh(e)?NaN:r===$o||e===$o?$o:r===e&&r===0?Z4r(r)?r:e:r<e?r:e}oh.exports=$4r});var ch=s((Lie,vh)=>{"use strict";var Q4r=fh();vh.exports=Q4r});var ph=s((Pie,lh)=>{"use strict";var K4r=10.900511;lh.exports=K4r});var Qo=s((Rie,gh)=>{"use strict";var r6r=2.718281828459045;gh.exports=r6r});var hh=s((Fie,dh)=>{"use strict";var e6r=zd(),t6r=Qi(),i6r=Qt(),n6r=Ue(),a6r=G(),s6r=J(),We=nr(),rn=H(),Ko=Zo(),r2=ch(),mh=P(),Aa=ya(),en=Ho(),e2=ph(),u6r=Qo();function o6r(r,e){var t,i,n,a,u,o,v;return n=r+e2-.5,v=(e-r-e2+.5)/n,r<1?e<=en?We(r*mh(e)-e-t6r(r)):rn(e,r)*We(-e)/i6r(r):(s6r(v*v*r)<=100&&r>150?(t=r*(n6r(v)-v)+e*(.5-e2)/n,t=We(t)):(a=r*mh(e/n),u=r-e,r2(a,u)<=en||Ko(a,u)>=Aa?(i=u/r,r2(a,u)/2>en&&Ko(a,u)/2<Aa?(o=rn(e/n,r/2)*We(u/2),t=o*o):r2(a,u)/4>en&&Ko(a,u)/4<Aa&&e>r?(o=rn(e/n,r/4)*We(u/4),t=o*o,t*=t):i>en&&i<Aa?t=rn(e*We(i)/n,r):t=We(a+u)):t=rn(e/n,r)*We(u)),t*=a6r(n/u6r)/e6r(r),t)}dh.exports=o6r});var yh=s((Mie,qh)=>{"use strict";var f6r=.34657359027997264;qh.exports=f6r});var wh=s((Bie,bh)=>{"use strict";function v6r(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}bh.exports=v6r});var Th=s((kie,Oh)=>{"use strict";var c6r=E(),Eh=tr(),t2=Qr(),l6r=Yt(),Nh=_(),p6r=V(),Ah=zr(),g6r=yh(),m6r=wh(),d6r=709.782712893384,i2=.6931471803691238,n2=19082149292705877e-26,Sh=1.4426950408889634,h6r=38.816242111356935,q6r=1.0397207708399179;function y6r(r){var e,t,i,n,a,u,o,v,f,c,l,p,m;if(r===Nh||c6r(r))return r;if(r===p6r)return-1;if(r===0)return r;if(r<0?(i=!0,v=-r):(i=!1,v=r),v>=h6r){if(i)return-1;if(v>=d6r)return Nh}if(u=Eh(v)|0,v>g6r)v<q6r?i?(n=r+i2,a=-n2,m=-1):(n=r-i2,a=n2,m=1):(i?m=Sh*r-.5:m=Sh*r+.5,m|=0,l=m,n=r-l*i2,a=l*n2),r=n-a,c=n-r-a;else{if(u<1016070144)return r;m=0}return e=.5*r,f=r*e,o=1+f*m6r(f),l=3-o*e,p=f*((o-l)/(6-r*l)),m===0?r-(r*p-f):(t=l6r(Ah+m<<20,0),p=r*(p-c)-c,p-=f,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(v=1-(p-r),m===1024?(n=Eh(v)+(m<<20)|0,v=t2(v,n)):v*=t,v-1):(l=1,m<20?(n=1072693248-(2097152>>m)|0,l=t2(l,n),v=l-(p-r)):(n=Ah-m<<20|0,l=t2(l,n),v=r-(p+l),v+=1),v*=t,v))}Oh.exports=y6r});var a2=s((jie,Ih)=>{"use strict";var b6r=Th();Ih.exports=b6r});var Rh=s((Cie,Ph)=>{"use strict";var _h=E(),Lh=J(),w6r=a2(),E6r=P(),N6r=H(),A6r=ra();function S6r(r,e){var t;if(_h(r)||_h(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((Lh(e*(r-1))<.5||Lh(e)<.2)&&(t=E6r(r)*e,t<.5))return w6r(t)}else if(A6r(e)!==e)return NaN;return N6r(r,e)-1}Ph.exports=S6r});var Mh=s((Gie,Fh)=>{"use strict";var O6r=Rh();Fh.exports=O6r});var kh=s((Vie,Bh)=>{"use strict";function T6r(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}Bh.exports=T6r});var Ch=s((Uie,jh)=>{"use strict";function I6r(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}jh.exports=I6r});var Vh=s((Hie,Gh)=>{"use strict";function _6r(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}Gh.exports=_6r});var Hh=s((Wie,Uh)=>{"use strict";var s2=P(),L6r=Tt(),P6r=kh(),R6r=Ch(),F6r=Vh(),M6r=.15896368026733398,B6r=.5281534194946289,k6r=.45201730728149414;function j6r(r,e,t){var i,n,a,u;if(r<L6r)return-s2(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=s2(r);while(r>=3);t=r-2}return a=t*(r+1),u=P6r(t),n+=a*M6r+a*u,n}return r<1&&(n+=-s2(r),t=e,e=r,r+=1),r<=1.5?(a=R6r(e),i=e*t,n+=i*B6r+i*a,n):(a=t*e,u=F6r(-t),n+=a*k6r+a*u,n)}Uh.exports=j6r});var Jh=s((Die,Xh)=>{"use strict";var Wh=Qt(),Dh=a2(),C6r=Ue(),G6r=E(),zh=Hh();function V6r(r){return G6r(r)?NaN:r<0?r<-.5?Wh(1+r)-1:Dh(-C6r(r)+zh(r+2,r+1,r)):r<2?Dh(zh(r+1,r,r-1)):Wh(1+r)-1}Xh.exports=V6r});var Yh=s((zie,xh)=>{"use strict";var U6r=Jh();xh.exports=U6r});var $h=s((Xie,Zh)=>{"use strict";function H6r(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}Zh.exports=H6r});var Kh=s((Jie,Qh)=>{"use strict";var W6r=Mh(),D6r=Na(),z6r=Yh(),X6r=$h();function J6r(r,e,t){var i,n,a,u,o;return n=z6r(r),a=(n+1)/r,u=W6r(e,r),n-=u,n/=r,o=X6r(r,e),u+=1,i=t?a:0,n=-u*D6r(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}Qh.exports=J6r});var u2=s((xie,rq)=>{"use strict";var x6r=11754943508222875e-54;rq.exports=x6r});var tq=s((Yie,eq)=>{"use strict";var Sa=J(),Jr=u2(),Y6r=Tt(),Z6r=1e6;function $6r(r,e,t){var i,n,a,u,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),u=f[1],a=f[0],u===0&&(u=Jr),o=u,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=Jr),o=f[1]+f[0]/o,o===0&&(o=Jr),v=1/v,n=o*v,u*=n);while(Sa(n-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=Jr),o=f[1]+f[0]/o,o===0&&(o=Jr),v=1/v,n=o*v,u*=n);while(f&&Sa(n-1)>e&&--t);return a/u}function Q6r(r,e,t){var i,n,a,u,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),a=v[1],a===0&&(a=Jr),u=a,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=Jr),u=v[1]+v[0]/u,u===0&&(u=Jr),o=1/o,n=u*o,a*=n);while(v&&Sa(n-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=Jr),u=v[1]+v[0]/u,u===0&&(u=Jr),o=1/o,n=u*o,a*=n);while(v&&Sa(n-1)>e&&--t);return a}function K6r(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||Z6r,n=i.tolerance||Y6r,i.keep?Q6r(r,n,t):$6r(r,n,t)}eq.exports=K6r});var aq=s((Zie,nq)=>{"use strict";var iq=J(),r8r=Tt(),ri=u2(),e8r=1e6;function t8r(r,e,t){var i,n,a,u,o,v;v=r(),o=v[1],n=v[0],o===0&&(o=ri),a=o,u=0;do v=r(),v&&(u=v[1]+v[0]*u,u===0&&(u=ri),a=v[1]+v[0]/a,a===0&&(a=ri),u=1/u,i=a*u,o*=i);while(v&&iq(i-1)>e&&--t);return n/o}function i8r(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=ri),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=ri),n=o[1]+o[0]/n,n===0&&(n=ri),a=1/a,i=n*a,u*=i);while(o&&iq(i-1)>e&&--t);return u}function n8r(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||r8r,t=i.maxIter||e8r,i.keep?i8r(r,n,t):t8r(r,n,t)}nq.exports=n8r});var uq=s(($ie,sq)=>{"use strict";var a8r=Do(),s8r=tq(),u8r=aq(),o2;a8r()?o2=s8r:o2=u8r;sq.exports=o2});var fq=s((Qie,oq)=>{"use strict";function o8r(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}oq.exports=o8r});var cq=s((Kie,vq)=>{"use strict";var f8r=uq(),v8r=fq();function c8r(r,e){var t=v8r(r,e);return 1/(e-r+1+f8r(t))}vq.exports=c8r});var wq=s((rne,bq)=>{"use strict";var l8r=Qi(),p8r=Q(),tn=Qt(),lq=J(),g8r=nr(),pq=H(),Vr=P(),m8r=Uo(),gq=om(),d8r=Mo(),mq=ya(),h8r=_(),q8r=cm(),y8r=Bm(),dq=Vm(),b8r=Bd(),f2=Gd(),hq=hh(),w8r=Kh(),qq=cq(),E8r=170;function yq(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h,d,g,q,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=E8r&&!a)return l&&e*4<r?(p=e*Vr(r)-r,p+=Vr(qq(e,r))):!l&&e>4*r?(p=e*Vr(r)-r,o=0,p+=Vr(f2(e,r,o)/e)):(p=yq(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Vr(p)-e+(e-.5)*Vr(e),p+=Vr(d8r)):(p=e*Vr(r)-r,o=0,p+=Vr(f2(e,r,o)/e)):p=Vr(p)+l8r(e)),p>mq?h8r:g8r(p);switch(c=e<30&&e<=r+1&&r<mq,c?(q=p8r(e),m=q===e,v=m?!1:lq(q-e)===.5):m=v=!1,m&&r>.6?(l=!l,u=0):v&&r>.2?(l=!l,u=1):r<m8r&&e>1?u=6:r<.5?-.4/Vr(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(f=!1,a&&e>20&&(h=lq((r-e)/e),e>200?20/e>h*h&&(f=!0):h<.4&&(f=!0)),f?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=q8r(e,r),a===!1&&(p*=tn(e));break;case 1:p=y8r(e,r),a===!1&&(p*=tn(e));break;case 2:p=a?hq(e,r):dq(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:tn(e),a||p>=1||gq*p>o?(o/=p,a||e<1||gq/e>o?(o*=-e,n=!0):o=0):o=0)),p*=f2(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,g=w8r(e,r,l),p=g[0],N=g[1],l=!1,a&&(p/=N);break;case 4:p=a?hq(e,r):dq(e,r),p!==0&&(p*=qq(e,r));break;case 5:p=b8r(e,r),r>=e&&(l=!l);break;case 6:p=a?pq(r,e)/tn(e+1):pq(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:tn(e),p=d-p),p}bq.exports=yq});var v2=s((ene,Eq)=>{"use strict";var N8r=wq();Eq.exports=N8r});var Aq=s((tne,Nq)=>{"use strict";var A8r=v2(),c2=E(),S8r=_();function O8r(r,e,t){return c2(r)||c2(e)||c2(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===S8r?1:A8r(r*t,e)}Nq.exports=O8r});var Oq=s((ine,Sq)=>{"use strict";function T8r(r){return e;function e(){return r}}Sq.exports=T8r});var O=s((nne,Tq)=>{"use strict";var I8r=Oq();Tq.exports=I8r});var Lq=s((ane,_q)=>{"use strict";var Iq=E();function _8r(r,e){return Iq(r)||Iq(e)?NaN:r<e?0:1}_q.exports=_8r});var Fq=s((sne,Rq)=>{"use strict";var L8r=O(),Pq=E();function P8r(r){if(Pq(r))return L8r(NaN);return e;function e(t){return Pq(t)?NaN:t<r?0:1}}Rq.exports=P8r});var Oa=s((une,Bq)=>{"use strict";var R8r=w(),Mq=Lq(),F8r=Fq();R8r(Mq,"factory",F8r);Bq.exports=Mq});var Cq=s((one,jq)=>{"use strict";var M8r=O(),B8r=Oa().factory,k8r=v2(),kq=E(),j8r=_();function C8r(r,e){if(kq(r)||kq(e)||r<0||e<=0)return M8r(NaN);if(r===0)return B8r(0);return t;function t(i){return i<=0?0:i===j8r?1:k8r(i*e,r)}}jq.exports=C8r});var l2=s((fne,Vq)=>{"use strict";var G8r=w(),Gq=Aq(),V8r=Cq();G8r(Gq,"factory",V8r);Vq.exports=Gq});var Hq=s((vne,Uq)=>{"use strict";var U8r=l2();function H8r(r,e){return U8r(r,e/2,.5)}Uq.exports=H8r});var Dq=s((cne,Wq)=>{"use strict";var W8r=l2().factory;function D8r(r){return W8r(r/2,.5)}Wq.exports=D8r});var Jq=s((lne,Xq)=>{"use strict";var z8r=w(),zq=Hq(),X8r=Dq();z8r(zq,"factory",X8r);Xq.exports=zq});var $q=s((pne,Zq)=>{"use strict";var J8r=I(),x8r=S(),Y8r=Jn(),xq=y(),Yq=["values","indices","*"];function Z8r(r,e){return J8r(e)?x8r(e,"returns")&&(r.returns=e.returns,Y8r(Yq,r.returns)===-1)?new TypeError(xq('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Yq.join('", "'),r.returns)):null:new TypeError(xq("invalid argument. Options argument must be an object. Value: `%s`.",e))}Zq.exports=Z8r});var Kq=s((gne,Qq)=>{"use strict";var $8r=S();function Q8r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),$8r(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}Qq.exports=Q8r});var ey=s((mne,ry)=>{"use strict";var K8r=S();function r5r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),K8r(t,n)?t[n].push(a):t[n]=[a];return t}ry.exports=r5r});var iy=s((dne,ty)=>{"use strict";var e5r=S();function t5r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),e5r(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}ty.exports=t5r});var uy=s((hne,sy)=>{"use strict";var ny=Cr(),ay=y(),i5r=$q(),n5r=Kq(),a5r=ey(),s5r=iy();function u5r(r,e,t){var i,n,a;if(!ny(r))throw new TypeError(ay("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=i5r(i,e),n)throw n;a=t}if(!ny(a))throw new TypeError(ay("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?n5r(r,a):i.returns==="indices"?a5r(r,a):s5r(r,a)}sy.exports=u5r});var fy=s((qne,oy)=>{"use strict";var o5r=uy();oy.exports=o5r});var cy=s((yne,vy)=>{"use strict";function f5r(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}vy.exports=f5r});var gy=s((bne,py)=>{"use strict";var v5r=cr(),c5r=k().isPrimitive,l5r=I(),p5r=sr(),ly=S(),p2=y();function g5r(r,e){return l5r(e)?ly(e,"alpha")&&(r.alpha=e.alpha,!c5r(r.alpha)||p5r(r.alpha))?new TypeError(p2("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):ly(e,"groups")&&(r.groups=e.groups,!v5r(r.groups))?new TypeError(p2("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(p2("invalid argument. Options argument must be an object. Value: `%s`.",e))}py.exports=g5r});var g2=s((wne,my)=>{"use strict";var m5r=jr().isPrimitive;function d5r(r){return m5r(r)&&r>0}my.exports=d5r});var m2=s((Ene,dy)=>{"use strict";var h5r=jr().isObject;function q5r(r){return h5r(r)&&r.valueOf()>0}dy.exports=q5r});var qy=s((Nne,hy)=>{"use strict";var y5r=g2(),b5r=m2();function w5r(r){return y5r(r)||b5r(r)}hy.exports=w5r});var ie=s((Ane,by)=>{"use strict";var yy=w(),d2=qy(),E5r=g2(),N5r=m2();yy(d2,"isPrimitive",E5r);yy(d2,"isObject",N5r);by.exports=d2});var nn=s((Sne,wy)=>{"use strict";var A5r=9007199254740991;wy.exports=A5r});var h2=s((One,Ey)=>{"use strict";var S5r=308;Ey.exports=S5r});var Ay=s((Tne,Ny)=>{"use strict";var O5r=-308;Ny.exports=O5r});var q2=s((Ine,Sy)=>{"use strict";var T5r=-324;Sy.exports=T5r});var Ry=s((_ne,Py)=>{"use strict";var Oy=E(),Ta=Pr(),Ty=H(),I5r=J(),Iy=Io(),_5r=nn(),_y=h2(),L5r=Ay(),P5r=q2(),R5r=_5r+1,Ly=1e308;function F5r(r,e){var t,i;return Oy(r)||Oy(e)||Ta(e)?NaN:Ta(r)||r===0||e<P5r||I5r(r)>R5r&&e<=0?r:e>_y?0*r:e<L5r?(t=Ty(10,-(e+_y)),i=r*Ly*t,Ta(i)?r:Iy(i)/Ly/t):(t=Ty(10,-e),i=r*t,Ta(i)?r:Iy(i)/t)}Py.exports=F5r});var My=s((Lne,Fy)=>{"use strict";var M5r=Ry();Fy.exports=M5r});var jy=s((Pne,ky)=>{"use strict";var B5r=ie(),k5r=I(),j5r=or().isPrimitive,By=S(),y2=y(),b2=My();function C5r(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!k5r(r))throw new TypeError(y2("invalid argument. First argument must be an object. Value: `%s`.",r));if(By(r,"digits")){if(!B5r(r.digits))throw new TypeError(y2("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(By(r,"decision")){if(!j5r(r.decision))throw new TypeError(y2("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+b2(this.pValue,-t)+`
`,i+="    statistic: "+b2(this.statistic,-t)+`
`,i+="    df: "+b2(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}ky.exports=C5r});var Vy=s((Rne,Gy)=>{"use strict";var G5r=Cr(),V5r=I(),It=hu(),U5r=zt(),Ia=y(),H5r=Jq(),W5r=fy(),Cy=P(),D5r=cy(),z5r=gy(),X5r=jy();function J5r(){var r,e,t,i,n,a,u,o,v,f,c,l,p,m,h,d,g,q,N,A;if(v=[],e=arguments.length,f={},V5r(arguments[e-1])&&(r=arguments[e-1],e-=1,m=z5r(f,r),m))throw m;if(f.groups){if(n=W5r(arguments[0],f.groups),i=U5r(n),e=i.length,e<2)throw new Error(Ia("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(A=0;A<e;A++)v.push(n[i[A]])}else for(A=0;A<e;A++)v.push(arguments[A]);for(u=0,t=0,o=0,h=0,q=new Array(e),N=q.slice(),A=0;A<e;A++){if(p=v[A],!G5r(p))throw new TypeError(Ia("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(Ia("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));q[A]=p.length-1,u+=q[A],t+=1/q[A],N[A]=D5r(p),o+=q[A]*N[A],h+=q[A]*Cy(N[A])}if(o/=u,f.alpha===void 0?a=.05:a=f.alpha,a<0||a>1)throw new RangeError(Ia("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*Cy(o)-h,l/=1+(t-1/u)/(3*(e-1)),g=e-1,c=1-H5r(l,g),d={},It(d,"rejected",c<=a),It(d,"alpha",a),It(d,"pValue",c),It(d,"statistic",l),It(d,"df",g),It(d,"method","Bartlett's test of equal variances"),It(d,"print",X5r),d}Gy.exports=J5r});var Hy=s((Fne,Uy)=>{"use strict";var x5r=Vy();Uy.exports=x5r});var Dy=s((Mne,Wy)=>{"use strict";function Y5r(r){var e,t,i,n,a,u,o,v,f,c,l;if(v=r.length,t=[],v===0)return t;if(n=r[0],f=n.length,v===1){for(c=0;c<f;c++)t.push(n[c]);return t}for(e=[f],c=1;c<v;c++)e.push(r[c].length),e[c]>f&&(f=e[c]);for(c=0;c<f;c++)t.push(0);for(c=f-1;c>=0;){for(a=e[0]-f+c,a>=0?i=n[a]:i=1,l=1;l<v;l++){if(u=e[l]-f+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}Wy.exports=Y5r});var w2=s((Bne,zy)=>{"use strict";var Z5r=Dy();zy.exports=Z5r});var Jy=s((kne,Xy)=>{"use strict";var E2=E(),$5r=He();function Q5r(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,f=1,E2(a)===!1)for(f;f<r;f++){if(u+=t,v=e[u],E2(v)){a=v;break}(v>a||v===a&&$5r(v))&&(a=v),i[o]=a,o+=n}if(E2(a))for(f;f<r;f++)i[o]=a,o+=n;return i}Xy.exports=Q5r});var Yy=s((jne,xy)=>{"use strict";var N2=E(),K5r=He();function rpr(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return n;if(v=i,f=u,o=e[v],n[f]=o,f+=a,l=1,N2(o)===!1)for(l;l<r;l++){if(v+=t,c=e[v],N2(c)){o=c;break}(c>o||c===o&&K5r(c))&&(o=c),n[f]=o,f+=a}if(N2(o))for(l;l<r;l++)n[f]=o,f+=a;return n}xy.exports=rpr});var Qy=s((Cne,$y)=>{"use strict";var epr=w(),Zy=Jy(),tpr=Yy();epr(Zy,"ndarray",tpr);$y.exports=Zy});var rb=s((Gne,Ky)=>{"use strict";var ipr=Qy();Ky.exports=ipr});var tb=s((Vne,eb)=>{"use strict";var npr=Ao();function apr(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(npr(r,i));return t}eb.exports=apr});var _a=s((Une,ib)=>{"use strict";var spr=tb();ib.exports=spr});var ab=s((Hne,nb)=>{"use strict";function upr(r,e,t){var i,n,a,u,o,v;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],v=0;v<a;v++)n.push(e.call(t,[o,v]));i.push(n)}return i}nb.exports=upr});var ub=s((Wne,sb)=>{"use strict";var opr=ab();sb.exports=opr});var fb=s((Dne,ob)=>{"use strict";function fpr(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}ob.exports=fpr});var A2=s((zne,vb)=>{"use strict";var vpr=fb();vb.exports=vpr});var S2=s((Xne,cb)=>{"use strict";var cpr=k().isPrimitive;function lpr(r){return cpr(r)&&r>0}cb.exports=lpr});var O2=s((Jne,lb)=>{"use strict";var ppr=k().isObject;function gpr(r){return ppr(r)&&r.valueOf()>0}lb.exports=gpr});var gb=s((xne,pb)=>{"use strict";var mpr=S2(),dpr=O2();function hpr(r){return mpr(r)||dpr(r)}pb.exports=hpr});var W=s((Yne,db)=>{"use strict";var mb=w(),T2=gb(),qpr=S2(),ypr=O2();mb(T2,"isPrimitive",qpr);mb(T2,"isObject",ypr);db.exports=T2});var qb=s((Zne,hb)=>{"use strict";var bpr=L();function wpr(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&bpr(r.next)}hb.exports=wpr});var bb=s(($ne,yb)=>{"use strict";var Epr=qb();yb.exports=Epr});var Nb=s((Qne,Eb)=>{"use strict";var wb="function";function Npr(r){return typeof r.get===wb&&typeof r.set===wb}Eb.exports=Npr});var I2=s((Kne,Ab)=>{"use strict";var Apr=Nb();Ab.exports=Apr});var Tb=s((rae,Ob)=>{"use strict";var Sb={complex128:Spr,complex64:Opr,default:Tpr};function Spr(r,e,t){r.set(t,e)}function Opr(r,e,t){r.set(t,e)}function Tpr(r,e,t){r.set(t,e)}function Ipr(r){var e=Sb[r];return typeof e=="function"?e:Sb.default}Ob.exports=Ipr});var _2=s((eae,Ib)=>{"use strict";var _pr=Tb();Ib.exports=_pr});var Pb=s((tae,Lb)=>{"use strict";var _b={float64:Lpr,float32:Ppr,int32:Rpr,int16:Fpr,int8:Mpr,uint32:Bpr,uint16:kpr,uint8:jpr,uint8c:Cpr,generic:Gpr,default:Vpr};function Lpr(r,e,t){r[e]=t}function Ppr(r,e,t){r[e]=t}function Rpr(r,e,t){r[e]=t}function Fpr(r,e,t){r[e]=t}function Mpr(r,e,t){r[e]=t}function Bpr(r,e,t){r[e]=t}function kpr(r,e,t){r[e]=t}function jpr(r,e,t){r[e]=t}function Cpr(r,e,t){r[e]=t}function Gpr(r,e,t){r[e]=t}function Vpr(r,e,t){r[e]=t}function Upr(r){var e=_b[r];return typeof e=="function"?e:_b.default}Lb.exports=Upr});var L2=s((iae,Rb)=>{"use strict";var Hpr=Pb();Rb.exports=Hpr});var Mb=s((nae,Fb)=>{"use strict";var Wpr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};Fb.exports=Wpr});var kb=s((aae,Bb)=>{"use strict";var Dpr=ir(),zpr=typeof Float32Array=="function";function Xpr(r){return zpr&&r instanceof Float32Array||Dpr(r)==="[object Float32Array]"}Bb.exports=Xpr});var Cb=s((sae,jb)=>{"use strict";var Jpr=kb();jb.exports=Jpr});var Vb=s((uae,Gb)=>{"use strict";var xpr=typeof Float32Array=="function"?Float32Array:null;Gb.exports=xpr});var Wb=s((oae,Hb)=>{"use strict";var Ypr=Cb(),Zpr=_(),Ub=Vb();function $pr(){var r,e;if(typeof Ub!="function")return!1;try{e=new Ub([1,3.14,-3.14,5e40]),r=Ypr(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===Zpr}catch{r=!1}return r}Hb.exports=$pr});var zb=s((fae,Db)=>{"use strict";var Qpr=Wb();Db.exports=Qpr});var Jb=s((vae,Xb)=>{"use strict";var Kpr=typeof Float32Array=="function"?Float32Array:void 0;Xb.exports=Kpr});var Yb=s((cae,xb)=>{"use strict";function r7r(){throw new Error("not implemented")}xb.exports=r7r});var ne=s((lae,Zb)=>{"use strict";var e7r=zb(),t7r=Jb(),i7r=Yb(),P2;e7r()?P2=t7r:P2=i7r;Zb.exports=P2});var Qb=s((pae,$b)=>{"use strict";var n7r=ir(),a7r=typeof Int32Array=="function";function s7r(r){return a7r&&r instanceof Int32Array||n7r(r)==="[object Int32Array]"}$b.exports=s7r});var La=s((gae,Kb)=>{"use strict";var u7r=Qb();Kb.exports=u7r});var ei=s((mae,rw)=>{"use strict";var o7r=2147483647;rw.exports=o7r});var tw=s((dae,ew)=>{"use strict";var f7r=-2147483648;ew.exports=f7r});var nw=s((hae,iw)=>{"use strict";var v7r=typeof Int32Array=="function"?Int32Array:null;iw.exports=v7r});var uw=s((qae,sw)=>{"use strict";var c7r=La(),l7r=ei(),p7r=tw(),aw=nw();function g7r(){var r,e;if(typeof aw!="function")return!1;try{e=new aw([1,3.14,-3.14,l7r+1]),r=c7r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===p7r}catch{r=!1}return r}sw.exports=g7r});var fw=s((yae,ow)=>{"use strict";var m7r=uw();ow.exports=m7r});var cw=s((bae,vw)=>{"use strict";var d7r=typeof Int32Array=="function"?Int32Array:void 0;vw.exports=d7r});var pw=s((wae,lw)=>{"use strict";function h7r(){throw new Error("not implemented")}lw.exports=h7r});var _t=s((Eae,gw)=>{"use strict";var q7r=fw(),y7r=cw(),b7r=pw(),R2;q7r()?R2=y7r:R2=b7r;gw.exports=R2});var dw=s((Nae,mw)=>{"use strict";var w7r=ir(),E7r=typeof Int16Array=="function";function N7r(r){return E7r&&r instanceof Int16Array||w7r(r)==="[object Int16Array]"}mw.exports=N7r});var qw=s((Aae,hw)=>{"use strict";var A7r=dw();hw.exports=A7r});var bw=s((Sae,yw)=>{"use strict";var S7r=32767;yw.exports=S7r});var Ew=s((Oae,ww)=>{"use strict";var O7r=-32768;ww.exports=O7r});var Aw=s((Tae,Nw)=>{"use strict";var T7r=typeof Int16Array=="function"?Int16Array:null;Nw.exports=T7r});var Tw=s((Iae,Ow)=>{"use strict";var I7r=qw(),_7r=bw(),L7r=Ew(),Sw=Aw();function P7r(){var r,e;if(typeof Sw!="function")return!1;try{e=new Sw([1,3.14,-3.14,_7r+1]),r=I7r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===L7r}catch{r=!1}return r}Ow.exports=P7r});var _w=s((_ae,Iw)=>{"use strict";var R7r=Tw();Iw.exports=R7r});var Pw=s((Lae,Lw)=>{"use strict";var F7r=typeof Int16Array=="function"?Int16Array:void 0;Lw.exports=F7r});var Fw=s((Pae,Rw)=>{"use strict";function M7r(){throw new Error("not implemented")}Rw.exports=M7r});var an=s((Rae,Mw)=>{"use strict";var B7r=_w(),k7r=Pw(),j7r=Fw(),F2;B7r()?F2=k7r:F2=j7r;Mw.exports=F2});var kw=s((Fae,Bw)=>{"use strict";var C7r=ir(),G7r=typeof Uint8ClampedArray=="function";function V7r(r){return G7r&&r instanceof Uint8ClampedArray||C7r(r)==="[object Uint8ClampedArray]"}Bw.exports=V7r});var Cw=s((Mae,jw)=>{"use strict";var U7r=kw();jw.exports=U7r});var Vw=s((Bae,Gw)=>{"use strict";var H7r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;Gw.exports=H7r});var Ww=s((kae,Hw)=>{"use strict";var W7r=Cw(),Uw=Vw();function D7r(){var r,e;if(typeof Uw!="function")return!1;try{e=new Uw([-1,0,1,3.14,4.99,255,256]),r=W7r(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}Hw.exports=D7r});var zw=s((jae,Dw)=>{"use strict";var z7r=Ww();Dw.exports=z7r});var Jw=s((Cae,Xw)=>{"use strict";var X7r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;Xw.exports=X7r});var Yw=s((Gae,xw)=>{"use strict";function J7r(){throw new Error("not implemented")}xw.exports=J7r});var sn=s((Vae,Zw)=>{"use strict";var x7r=zw(),Y7r=Jw(),Z7r=Yw(),M2;x7r()?M2=Y7r:M2=Z7r;Zw.exports=M2});var Qw=s((Uae,$w)=>{"use strict";var $7r=ir(),Q7r=typeof Int8Array=="function";function K7r(r){return Q7r&&r instanceof Int8Array||$7r(r)==="[object Int8Array]"}$w.exports=K7r});var rE=s((Hae,Kw)=>{"use strict";var r9r=Qw();Kw.exports=r9r});var tE=s((Wae,eE)=>{"use strict";var e9r=127;eE.exports=e9r});var nE=s((Dae,iE)=>{"use strict";var t9r=-128;iE.exports=t9r});var sE=s((zae,aE)=>{"use strict";var i9r=typeof Int8Array=="function"?Int8Array:null;aE.exports=i9r});var fE=s((Xae,oE)=>{"use strict";var n9r=rE(),a9r=tE(),s9r=nE(),uE=sE();function u9r(){var r,e;if(typeof uE!="function")return!1;try{e=new uE([1,3.14,-3.14,a9r+1]),r=n9r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===s9r}catch{r=!1}return r}oE.exports=u9r});var cE=s((Jae,vE)=>{"use strict";var o9r=fE();vE.exports=o9r});var pE=s((xae,lE)=>{"use strict";var f9r=typeof Int8Array=="function"?Int8Array:void 0;lE.exports=f9r});var mE=s((Yae,gE)=>{"use strict";function v9r(){throw new Error("not implemented")}gE.exports=v9r});var un=s((Zae,dE)=>{"use strict";var c9r=cE(),l9r=pE(),p9r=mE(),B2;c9r()?B2=l9r:B2=p9r;dE.exports=B2});var k2=s(($ae,hE)=>{"use strict";var g9r=jr().isPrimitive;function m9r(r){return g9r(r)&&r>=0}hE.exports=m9r});var j2=s((Qae,qE)=>{"use strict";var d9r=jr().isObject;function h9r(r){return d9r(r)&&r.valueOf()>=0}qE.exports=h9r});var bE=s((Kae,yE)=>{"use strict";var q9r=k2(),y9r=j2();function b9r(r){return q9r(r)||y9r(r)}yE.exports=b9r});var De=s((r0e,EE)=>{"use strict";var wE=w(),C2=bE(),w9r=k2(),E9r=j2();wE(C2,"isPrimitive",w9r);wE(C2,"isObject",E9r);EE.exports=C2});var AE=s((e0e,NE)=>{"use strict";var N9r=4294967295;NE.exports=N9r});var OE=s((t0e,SE)=>{"use strict";var A9r=Tr(),S9r=AE();function O9r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&A9r(r.length)&&r.length>=0&&r.length<=S9r}SE.exports=O9r});var Lt=s((i0e,TE)=>{"use strict";var T9r=OE();TE.exports=T9r});var _E=s((n0e,IE)=>{"use strict";var I9r=ir(),_9r=typeof ArrayBuffer=="function";function L9r(r){return _9r&&r instanceof ArrayBuffer||I9r(r)==="[object ArrayBuffer]"}IE.exports=L9r});var G2=s((a0e,LE)=>{"use strict";var P9r=_E();LE.exports=P9r});var RE=s((s0e,PE)=>{"use strict";function R9r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}PE.exports=R9r});var ME=s((u0e,FE)=>{"use strict";function F9r(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}FE.exports=F9r});var GE=s((o0e,CE)=>{"use strict";var BE=k().isPrimitive,kE=Be(),on=w(),jE=y(),M9r=RE(),B9r=ME();function Pt(r,e){if(!(this instanceof Pt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!BE(r))throw new TypeError(jE("invalid argument. Real component must be a number. Value: `%s`.",r));if(!BE(e))throw new TypeError(jE("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return kE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),kE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}on(Pt,"BYTES_PER_ELEMENT",8);on(Pt.prototype,"BYTES_PER_ELEMENT",8);on(Pt.prototype,"byteLength",16);on(Pt.prototype,"toString",M9r);on(Pt.prototype,"toJSON",B9r);CE.exports=Pt});var ti=s((f0e,VE)=>{"use strict";var k9r=GE();VE.exports=k9r});var HE=s((v0e,UE)=>{"use strict";var j9r=typeof Math.fround=="function"?Math.fround:null;UE.exports=j9r});var zE=s((c0e,DE)=>{"use strict";var C9r=ne(),WE=new C9r(1);function G9r(r){return WE[0]=r,WE[0]}DE.exports=G9r});var xE=s((l0e,JE)=>{"use strict";var XE=HE(),V9r=zE(),V2;typeof XE=="function"?V2=XE:V2=V9r;JE.exports=V2});var ZE=s((p0e,YE)=>{"use strict";function U9r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}YE.exports=U9r});var QE=s((g0e,$E)=>{"use strict";function H9r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}$E.exports=H9r});var nN=s((m0e,iN)=>{"use strict";var KE=k().isPrimitive,rN=Be(),fn=w(),eN=xE(),tN=y(),W9r=ZE(),D9r=QE();function Rt(r,e){if(!(this instanceof Rt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!KE(r))throw new TypeError(tN("invalid argument. Real component must be a number. Value: `%s`.",r));if(!KE(e))throw new TypeError(tN("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return rN(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:eN(r)}),rN(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:eN(e)}),this}fn(Rt,"BYTES_PER_ELEMENT",4);fn(Rt.prototype,"BYTES_PER_ELEMENT",4);fn(Rt.prototype,"byteLength",8);fn(Rt.prototype,"toString",W9r);fn(Rt.prototype,"toJSON",D9r);iN.exports=Rt});var ii=s((d0e,aN)=>{"use strict";var z9r=nN();aN.exports=z9r});var uN=s((h0e,sN)=>{"use strict";var X9r=ti(),J9r=ii();function x9r(r){return r instanceof X9r||r instanceof J9r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}sN.exports=x9r});var Ur=s((q0e,oN)=>{"use strict";var Y9r=uN();oN.exports=Y9r});var vN=s((y0e,fN)=>{"use strict";var Z9r=S(),Pa=yu();function $9r(){return typeof Pa=="function"&&typeof Pa("foo")=="symbol"&&Z9r(Pa,"iterator")&&typeof Pa.iterator=="symbol"}fN.exports=$9r});var Ra=s((b0e,cN)=>{"use strict";var Q9r=vN();cN.exports=Q9r});var pN=s((w0e,lN)=>{"use strict";var K9r=Ra(),rgr=K9r()?Symbol.iterator:null;lN.exports=rgr});var Fa=s((E0e,gN)=>{"use strict";var egr=pN();gN.exports=egr});var dN=s((N0e,mN)=>{"use strict";var tgr=Be();function igr(r,e,t){tgr(r,e,{configurable:!1,enumerable:!1,get:t})}mN.exports=igr});var R=s((A0e,hN)=>{"use strict";var ngr=dN();hN.exports=ngr});var yN=s((S0e,qN)=>{"use strict";function agr(r){return r.re}qN.exports=agr});var ze=s((O0e,bN)=>{"use strict";var sgr=yN();bN.exports=sgr});var EN=s((T0e,wN)=>{"use strict";function ugr(r){return r.im}wN.exports=ugr});var Xe=s((I0e,NN)=>{"use strict";var ogr=EN();NN.exports=ogr});var SN=s((_0e,AN)=>{"use strict";var fgr=ne();function vgr(r,e){return new fgr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}AN.exports=vgr});var ni=s((L0e,ON)=>{"use strict";var cgr=SN();ON.exports=cgr});var IN=s((P0e,TN)=>{"use strict";var lgr=mr();function pgr(r,e){return new lgr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}TN.exports=pgr});var ai=s((R0e,_N)=>{"use strict";var ggr=IN();_N.exports=ggr});var RN=s((F0e,PN)=>{"use strict";var LN={float64:mgr,float32:dgr,int32:hgr,int16:qgr,int8:ygr,uint32:bgr,uint16:wgr,uint8:Egr,uint8c:Ngr,generic:Agr,default:Sgr};function mgr(r,e){return r[e]}function dgr(r,e){return r[e]}function hgr(r,e){return r[e]}function qgr(r,e){return r[e]}function ygr(r,e){return r[e]}function bgr(r,e){return r[e]}function wgr(r,e){return r[e]}function Egr(r,e){return r[e]}function Ngr(r,e){return r[e]}function Agr(r,e){return r[e]}function Sgr(r,e){return r[e]}function Ogr(r){var e=LN[r];return typeof e=="function"?e:LN.default}PN.exports=Ogr});var Ma=s((M0e,FN)=>{"use strict";var Tgr=RN();FN.exports=Tgr});var kN=s((B0e,BN)=>{"use strict";var MN={complex128:Igr,complex64:_gr,default:Lgr};function Igr(r,e){return r.get(e)}function _gr(r,e){return r.get(e)}function Lgr(r,e){return r.get(e)}function Pgr(r){var e=MN[r];return typeof e=="function"?e:MN.default}BN.exports=Pgr});var Ba=s((k0e,jN)=>{"use strict";var Rgr=kN();jN.exports=Rgr});var GN=s((j0e,CN)=>{"use strict";var Fgr=Lt(),Mgr=Ur(),Bgr=ze(),kgr=Xe(),jgr=y();function Cgr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,Fgr(i)&&i.length>=2)e.push(i[0],i[1]);else if(Mgr(i))e.push(Bgr(i),kgr(i));else return new TypeError(jgr("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}CN.exports=Cgr});var UN=s((C0e,VN)=>{"use strict";var Ggr=Lt(),Vgr=Ur(),Ugr=ze(),Hgr=Xe(),Wgr=y();function Dgr(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),Ggr(a)&&a.length>=2)i.push(a[0],a[1]);else if(Vgr(a))i.push(Ugr(a),Hgr(a));else return new TypeError(Wgr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}VN.exports=Dgr});var WN=s((G0e,HN)=>{"use strict";var zgr=Ur(),Xgr=ze(),Jgr=Xe();function xgr(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!zgr(i))return null;r[a]=Xgr(i),r[a+1]=Jgr(i),a+=2}return r}HN.exports=xgr});var QN=s((V0e,$N)=>{"use strict";var vn=De().isPrimitive,DN=Lt(),H2=Cr(),zN=G2(),XN=Zn(),Ygr=cr(),Ft=L(),si=Ur(),ka=pa(),U2=Tr(),Zgr=Ra(),ui=Fa(),dr=w(),Ga=R(),Rr=ne(),JN=ii(),x=y(),ja=ze(),Ca=Xe(),$gr=ni(),Qgr=ai(),Kgr=Ma(),rmr=Ba(),xN=GN(),emr=UN(),tmr=WN(),_r=Rr.BYTES_PER_ELEMENT*2,YN=Zgr();function oi(r){return r instanceof rr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function ZN(r){return r===rr||r.name==="Complex128Array"}function imr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===_r}function nmr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===_r*2}function rr(){var r,e,t,i;if(e=arguments.length,!(this instanceof rr))return e===0?new rr:e===1?new rr(arguments[0]):e===2?new rr(arguments[0],arguments[1]):new rr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Rr(0);else if(e===1)if(vn(arguments[0]))t=new Rr(arguments[0]*2);else if(H2(arguments[0]))if(t=arguments[0],i=t.length,i&&Ygr(t)&&si(t[0])){if(t=tmr(new Rr(i*2),t),t===null){if(!ka(i))throw new RangeError(x("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Rr(arguments[0])}}else{if(imr(t))t=$gr(t,0);else if(nmr(t))t=Qgr(t,0);else if(!ka(i))throw new RangeError(x("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Rr(t)}else if(zN(arguments[0])){if(t=arguments[0],!U2(t.byteLength/_r))throw new RangeError(x("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",_r,t.byteLength));t=new Rr(t)}else if(XN(arguments[0])){if(t=arguments[0],YN===!1)throw new TypeError(x("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Ft(t[ui]))throw new TypeError(x("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ui](),!Ft(t.next))throw new TypeError(x("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=xN(t),t instanceof Error)throw t;t=new Rr(t)}else throw new TypeError(x("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!zN(t))throw new TypeError(x("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!vn(r))throw new TypeError(x("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!U2(r/_r))throw new RangeError(x("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",_r,r));if(e===2){if(i=t.byteLength-r,!U2(i/_r))throw new RangeError(x("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",_r,i));t=new Rr(t,r)}else{if(i=arguments[2],!vn(i))throw new TypeError(x("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*_r>t.byteLength-r)throw new RangeError(x("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*_r));t=new Rr(t,r,i*2)}}return dr(this,"_buffer",t),dr(this,"_length",t.length/2),this}dr(rr,"BYTES_PER_ELEMENT",_r);dr(rr,"name","Complex64Array");dr(rr,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,m;if(!Ft(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ZN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Ft(n))throw new TypeError(x("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(oi(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),si(l))u[m]=ja(l),u[m+1]=Ca(l);else if(DN(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(x("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(H2(e)){if(n){for(f=e.length,e.get&&e.set?v=rmr("default"):v=Kgr("default"),p=0;p<f;p++)if(!si(v(e,p))){c=!0;break}if(c){if(!ka(f))throw new RangeError(x("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),si(l))u[m]=ja(l),u[m+1]=Ca(l);else if(DN(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(x("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(XN(e)&&YN&&Ft(e[ui])){if(u=e[ui](),!Ft(u.next))throw new TypeError(x("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=emr(u,n,t):o=xN(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError(x("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});dr(rr,"of",function(){var e,t;if(!Ft(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ZN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Ga(rr.prototype,"buffer",function(){return this._buffer.buffer});Ga(rr.prototype,"byteLength",function(){return this._buffer.byteLength});Ga(rr.prototype,"byteOffset",function(){return this._buffer.byteOffset});dr(rr.prototype,"BYTES_PER_ELEMENT",rr.BYTES_PER_ELEMENT);dr(rr.prototype,"copyWithin",function(e,t){if(!oi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});dr(rr.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!oi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},dr(i,"next",v),dr(i,"return",f),ui&&dr(i,ui,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new JN(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});dr(rr.prototype,"get",function(e){var t;if(!oi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!vn(e))throw new TypeError(x("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new JN(t[e],t[e+1])});Ga(rr.prototype,"length",function(){return this._length});dr(rr.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!oi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!vn(i))throw new TypeError(x("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(si(e)){if(i>=this._length)throw new RangeError(x("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=ja(e),n[i+1]=Ca(e);return}if(oi(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*_r,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Rr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(H2(e)){for(o=e.length,f=0;f<o;f++)if(!si(e[f])){u=!0;break}if(u){if(!ka(o))throw new RangeError(x("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*_r,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Rr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=ja(v),n[i+1]=Ca(v),i+=2;return}throw new TypeError(x("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});$N.exports=rr});var cn=s((U0e,KN)=>{"use strict";var amr=QN();KN.exports=amr});var eA=s((H0e,rA)=>{"use strict";function smr(r){return r.re}rA.exports=smr});var Je=s((W0e,tA)=>{"use strict";var umr=eA();tA.exports=umr});var nA=s((D0e,iA)=>{"use strict";function omr(r){return r.im}iA.exports=omr});var xe=s((z0e,aA)=>{"use strict";var fmr=nA();aA.exports=fmr});var uA=s((X0e,sA)=>{"use strict";var vmr=Lt(),cmr=Ur(),lmr=y(),pmr=Je(),gmr=xe();function mmr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,vmr(i)&&i.length>=2)e.push(i[0],i[1]);else if(cmr(i))e.push(pmr(i),gmr(i));else return new TypeError(lmr("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}sA.exports=mmr});var fA=s((J0e,oA)=>{"use strict";var dmr=Lt(),hmr=Ur(),qmr=y(),ymr=Je(),bmr=xe();function wmr(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),dmr(a)&&a.length>=2)i.push(a[0],a[1]);else if(hmr(a))i.push(ymr(a),bmr(a));else return new TypeError(qmr("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}oA.exports=wmr});var cA=s((x0e,vA)=>{"use strict";var Emr=Ur(),Nmr=Je(),Amr=xe();function Smr(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!Emr(i))return null;r[a]=Nmr(i),r[a+1]=Amr(i),a+=2}return r}vA.exports=Smr});var bA=s((Y0e,yA)=>{"use strict";var ln=De().isPrimitive,lA=Lt(),D2=Cr(),pA=G2(),gA=Zn(),Omr=cr(),Mt=L(),fi=Ur(),Va=pa(),W2=Tr(),Tmr=Ra(),vi=Fa(),hr=w(),Wa=R(),Fr=mr(),mA=ti(),Ua=Je(),Ha=xe(),Imr=ni(),_mr=ai(),Lmr=Ma(),Pmr=Ba(),Y=y(),dA=uA(),Rmr=fA(),Fmr=cA(),Lr=Fr.BYTES_PER_ELEMENT*2,hA=Tmr();function ci(r){return r instanceof er||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function qA(r){return r===er||r.name==="Complex64Array"}function Mmr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Lr/2}function Bmr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Lr}function er(){var r,e,t,i;if(e=arguments.length,!(this instanceof er))return e===0?new er:e===1?new er(arguments[0]):e===2?new er(arguments[0],arguments[1]):new er(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Fr(0);else if(e===1)if(ln(arguments[0]))t=new Fr(arguments[0]*2);else if(D2(arguments[0]))if(t=arguments[0],i=t.length,i&&Omr(t)&&fi(t[0])){if(t=Fmr(new Fr(i*2),t),t===null){if(!Va(i))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(arguments[0])}}else{if(Mmr(t))t=Imr(t,0);else if(Bmr(t))t=_mr(t,0);else if(!Va(i))throw new RangeError(Y("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(t)}else if(pA(arguments[0])){if(t=arguments[0],!W2(t.byteLength/Lr))throw new RangeError(Y("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Lr,t.byteLength));t=new Fr(t)}else if(gA(arguments[0])){if(t=arguments[0],hA===!1)throw new TypeError(Y("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Mt(t[vi]))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[vi](),!Mt(t.next))throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=dA(t),t instanceof Error)throw t;t=new Fr(t)}else throw new TypeError(Y("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!pA(t))throw new TypeError(Y("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!ln(r))throw new TypeError(Y("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!W2(r/Lr))throw new RangeError(Y("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Lr,r));if(e===2){if(i=t.byteLength-r,!W2(i/Lr))throw new RangeError(Y("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Lr,i));t=new Fr(t,r)}else{if(i=arguments[2],!ln(i))throw new TypeError(Y("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Lr>t.byteLength-r)throw new RangeError(Y("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Lr));t=new Fr(t,r,i*2)}}return hr(this,"_buffer",t),hr(this,"_length",t.length/2),this}hr(er,"BYTES_PER_ELEMENT",Lr);hr(er,"name","Complex128Array");hr(er,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,m;if(!Mt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Mt(n))throw new TypeError(Y("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(ci(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),fi(l))u[m]=Ua(l),u[m+1]=Ha(l);else if(lA(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(D2(e)){if(n){for(f=e.length,e.get&&e.set?v=Pmr("default"):v=Lmr("default"),p=0;p<f;p++)if(!fi(v(e,p))){c=!0;break}if(c){if(!Va(f))throw new RangeError(Y("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),fi(l))u[m]=Ua(l),u[m+1]=Ha(l);else if(lA(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Y("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(gA(e)&&hA&&Mt(e[vi])){if(u=e[vi](),!Mt(u.next))throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=Rmr(u,n,t):o=dA(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError(Y("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});hr(er,"of",function(){var e,t;if(!Mt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Wa(er.prototype,"buffer",function(){return this._buffer.buffer});Wa(er.prototype,"byteLength",function(){return this._buffer.byteLength});Wa(er.prototype,"byteOffset",function(){return this._buffer.byteOffset});hr(er.prototype,"BYTES_PER_ELEMENT",er.BYTES_PER_ELEMENT);hr(er.prototype,"copyWithin",function(e,t){if(!ci(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});hr(er.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!ci(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},hr(i,"next",v),hr(i,"return",f),vi&&hr(i,vi,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new mA(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});hr(er.prototype,"get",function(e){var t;if(!ci(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ln(e))throw new TypeError(Y("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new mA(t[e],t[e+1])});Wa(er.prototype,"length",function(){return this._length});hr(er.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!ci(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!ln(i))throw new TypeError(Y("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(fi(e)){if(i>=this._length)throw new RangeError(Y("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ua(e),n[i+1]=Ha(e);return}if(ci(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(D2(e)){for(o=e.length,f=0;f<o;f++)if(!fi(e[f])){u=!0;break}if(u){if(!Va(o))throw new RangeError(Y("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=Ua(v),n[i+1]=Ha(v),i+=2;return}throw new TypeError(Y("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});yA.exports=er});var pn=s((Z0e,wA)=>{"use strict";var kmr=bA();wA.exports=kmr});var NA=s(($0e,EA)=>{"use strict";var jmr=mr(),Cmr=ne(),Gmr=lr(),Vmr=_t(),Umr=xt(),Hmr=an(),Wmr=Jt(),Dmr=sn(),zmr=un(),Xmr=cn(),Jmr=pn(),xmr=[jmr,Cmr,Vmr,Gmr,Hmr,Umr,zmr,Wmr,Dmr,Xmr,Jmr];EA.exports=xmr});var SA=s((Q0e,AA)=>{"use strict";var Ymr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];AA.exports=Ymr});var IA=s((K0e,TA)=>{"use strict";var Zmr=bt(),$mr=cr(),Qmr=ke(),Kmr=Mb(),rdr=NA(),OA=SA(),edr=OA.length;function tdr(r){var e;if($mr(r))return"generic";if(Zmr(r))return null;for(e=0;e<edr;e++)if(r instanceof rdr[e])return OA[e];return Kmr[Qmr(r)]||null}TA.exports=tdr});var Da=s((rse,_A)=>{"use strict";var idr=IA();_A.exports=idr});var RA=s((ese,PA)=>{"use strict";var LA=L(),ndr=Cr(),adr=bb(),sdr=I2(),udr=_2(),odr=L2(),fdr=Da(),z2=y();function vdr(){var r,e,t,i,n,a,u,o,v;if(r=arguments[0],arguments.length>1)if(ndr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!LA(t))throw new TypeError(z2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!LA(t))throw new TypeError(z2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!adr(r))throw new TypeError(z2("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,v=r.next(),!v.done;)i.push(t.call(e,v.value,o));return i}for(;v=r.next(),!v.done;)i.push(v.value);return i}if(n=i.length,u=fdr(i),sdr(i)?a=udr(u):a=odr(u),t){for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,t.call(e,v.value,o));return i}for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,v.value);return i}PA.exports=vdr});var MA=s((tse,FA)=>{"use strict";var cdr=RA();FA.exports=cdr});var kA=s((ise,BA)=>{"use strict";function ldr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}BA.exports=ldr});var CA=s((nse,jA)=>{"use strict";function pdr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}jA.exports=pdr});var UA=s((ase,VA)=>{"use strict";var gdr=tr(),GA=ee(),mdr=kA(),ddr=CA(),hdr=.7853981633974483,qdr=3061616997868383e-32,ydr=.3333333333333341,bdr=2147483647;function wdr(r,e,t){var i,n,a,u,o,v,f,c,l;return i=gdr(r),n=i&bdr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=hdr-r,c=qdr-e,r=l+c,e=0),l=r*r,c=l*l,u=mdr(c),f=l*ddr(c),o=l*r,u=e+l*(o*(u+f)+e),u+=ydr*o,c=r+u,n>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(c*c/(c+f)-u)))):t===1?c:(l=GA(c,0),f=u-(l-r),a=-1/c,v=GA(a,0),o=1+v*l,v+a*(o+v*f))}VA.exports=wdr});var WA=s((sse,HA)=>{"use strict";var Edr=UA();HA.exports=Edr});var XA=s((use,zA)=>{"use strict";var Ndr=tr(),DA=WA(),Adr=xi(),X2=[0,0],Sdr=2147483647,Odr=1072243195,Tdr=2146435072,Idr=1044381696;function _dr(r){var e,t;return e=Ndr(r),e&=Sdr,e<=Odr?e<Idr?r:DA(r,0,1):e>=Tdr?NaN:(t=Adr(r,X2),DA(X2[0],X2[1],1-((t&1)<<1)))}zA.exports=_dr});var J2=s((ose,JA)=>{"use strict";var Ldr=XA();JA.exports=Ldr});var za=s((fse,xA)=>{"use strict";var Pdr=1.5707963267948966;xA.exports=Pdr});var Xa=s((vse,YA)=>{"use strict";var Rdr=.7853981633974483;YA.exports=Rdr});var $A=s((cse,ZA)=>{"use strict";function Fdr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}ZA.exports=Fdr});var KA=s((lse,QA)=>{"use strict";function Mdr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}QA.exports=Mdr});var tS=s((pse,eS)=>{"use strict";var Bdr=E(),kdr=_(),x2=za(),jdr=Xa(),Cdr=V(),Gdr=$A(),Vdr=KA(),rS=6123233995736766e-32,Udr=2.414213562373095;function Hdr(r){var e,t,i,n;return Bdr(r)||r===0?r:r===kdr?x2:r===Cdr?-x2:(r<0&&(t=!0,r=-r),e=0,r>Udr?(i=x2,e=1,r=-(1/r)):r<=.66?i=0:(i=jdr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*Gdr(n)/Vdr(n),n=r*n+r,e===2?n+=.5*rS:e===1&&(n+=rS),i+=n,t?-i:i)}eS.exports=Hdr});var Ja=s((gse,iS)=>{"use strict";var Wdr=tS();iS.exports=Wdr});var Y2=s((mse,nS)=>{"use strict";var Ddr=k().isPrimitive;function zdr(r){return Ddr(r)&&r>=0}nS.exports=zdr});var Z2=s((dse,aS)=>{"use strict";var Xdr=k().isObject;function Jdr(r){return Xdr(r)&&r.valueOf()>=0}aS.exports=Jdr});var uS=s((hse,sS)=>{"use strict";var xdr=Y2(),Ydr=Z2();function Zdr(r){return xdr(r)||Ydr(r)}sS.exports=Zdr});var Q2=s((qse,fS)=>{"use strict";var oS=w(),$2=uS(),$dr=Y2(),Qdr=Z2();oS($2,"isPrimitive",$dr);oS($2,"isObject",Qdr);fS.exports=$2});var cS=s((yse,vS)=>{"use strict";var Kdr=I(),xa=S(),rhr=jr().isPrimitive,ehr=ie().isPrimitive,thr=De().isPrimitive,ihr=Q2().isPrimitive,gn=y();function nhr(r,e){return Kdr(e)?xa(e,"period")&&(r.period=e.period,!ehr(e.period))?new TypeError(gn("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):xa(e,"amplitude")&&(r.amplitude=e.amplitude,!ihr(e.amplitude))?new TypeError(gn("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):xa(e,"offset")&&(r.offset=e.offset,!rhr(e.offset))?new TypeError(gn("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):xa(e,"iter")&&(r.iter=e.iter,!thr(e.iter))?new TypeError(gn("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(gn("invalid argument. Options argument must be an object. Value: `%s`.",e))}vS.exports=nhr});var mS=s((bse,gS)=>{"use strict";var K2=w(),lS=Fa(),ahr=J2(),shr=Ja(),uhr=za(),ohr=Ir(),fhr=cS();function pS(r){var e,t,i,n,a,u,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=fhr(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=ohr/e.period,o=e.amplitude/uhr,v=0,t={},K2(t,"next",f),K2(t,"return",c),lS&&K2(t,lS,l),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*shr(ahr(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return pS(e)}}gS.exports=pS});var hS=s((wse,dS)=>{"use strict";var vhr=mS();dS.exports=vhr});var yS=s((Ese,qS)=>{"use strict";var chr={Complex64:"complex64",Complex128:"complex128"};qS.exports=chr});var wS=s((Nse,bS)=>{"use strict";var lhr=ii(),phr=ti(),ghr=[lhr,phr];bS.exports=ghr});var NS=s((Ase,ES)=>{"use strict";var mhr=["complex64","complex128"];ES.exports=mhr});var OS=s((Sse,SS)=>{"use strict";var dhr=ke(),hhr=yS(),qhr=wS(),AS=NS(),yhr=AS.length;function bhr(r){var e;for(e=0;e<yhr;e++)if(r instanceof qhr[e])return AS[e];return hhr[dhr(r)]||null}SS.exports=bhr});var r1=s((Ose,TS)=>{"use strict";var whr=OS();TS.exports=whr});var _S=s((Tse,IS)=>{"use strict";var Ehr=mr(),Nhr=ne(),Ahr=pn(),Shr=cn(),Ohr={float64:Ehr,float32:Nhr,complex128:Ahr,complex64:Shr};IS.exports=Ohr});var PS=s((Ise,LS)=>{"use strict";var Thr=_S();function Ihr(r){return Thr[r]||null}LS.exports=Ihr});var FS=s((_se,RS)=>{"use strict";var _hr=PS();RS.exports=_hr});var BS=s((Lse,MS)=>{"use strict";function Lhr(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}MS.exports=Lhr});var US=s((Pse,VS)=>{"use strict";var Phr=ii(),Rhr=ti(),kS=Je(),jS=xe(),CS=ze(),GS=Xe();function Fhr(r,e,t,i,n,a){var u,o,v,f,c,l,p,m,h,d,g,q,N;if(n===0)return[];if(o=0,r==="float64"?(f=e,l=0):r==="complex64"?(o+=1,f=CS(e),l=GS(e)):(f=kS(e),l=jS(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=CS(i),p=GS(i)):(c=kS(i),p=jS(i)),o===2?u=Phr:u=Rhr,n===1)return a?[new u(c,p)]:[new u(f,l)];for(v=[new u(f,l)],a?q=n-1:q=n,d=(c-f)/q,g=(p-l)/q,N=1;N<q;N++)m=f+d*N,h=l+g*N,v.push(new u(m,h));return a&&v.push(new u(c,p)),v}VS.exports=Fhr});var e1=s((Rse,HS)=>{"use strict";function Mhr(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}HS.exports=Mhr});var t1=s((Fse,JS)=>{"use strict";var WS=Je(),DS=xe(),zS=ze(),XS=Xe();function Bhr(r,e,t,i,n,a,u){var o,v,f,c,l,p,m,h,d;if(a===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=zS(t),f=XS(t)):(o=WS(t),f=DS(t)),i==="float64"?(v=n,c=0):i==="complex64"?(v=zS(n),c=XS(n)):(v=WS(n),c=DS(n)),a===1)return u?(r[0]=v,r[1]=c):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,u?m=a-1:m=a,l=(v-o)/m,p=(c-f)/m,d=2,h=1;h<m;h++)r[d]=o+l*h,r[d+1]=f+p*h,d+=2;return u&&(r[d]=v,r[d+1]=c),r}JS.exports=Bhr});var n1=s((Mse,YS)=>{"use strict";var khr=I(),xS=S(),jhr=K().isPrimitive,Chr=or().isPrimitive,i1=y();function Ghr(r,e){return khr(e)?xS(e,"dtype")&&(r.dtype=e.dtype,!jhr(r.dtype))?new TypeError(i1("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):xS(e,"endpoint")&&(r.endpoint=e.endpoint,!Chr(r.endpoint))?new TypeError(i1("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(i1("invalid argument. Options argument must be an object. Value: `%s`.",e))}YS.exports=Ghr});var a1=s((Bse,Vhr)=>{Vhr.exports={endpoint:!0}});var tO=s((kse,eO)=>{"use strict";var ZS=Ur(),$S=k().isPrimitive,Uhr=De().isPrimitive,QS=E(),KS=r1(),Hhr=FS(),Whr=ni(),Dhr=ai(),li=y(),zhr=BS(),Xhr=US(),Jhr=e1(),rO=t1(),xhr=n1(),Yhr=a1();function Zhr(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(o=KS(r),o===null){if(!ZS(r))throw new TypeError(li("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}f=!0}else{if(!$S(r)||QS(r))throw new TypeError(li("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(v=KS(e),v===null){if(!ZS(e))throw new TypeError(li("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="complex128"}f=!0}else{if(!$S(e)||QS(e))throw new TypeError(li("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="float64"}if(!Uhr(t))throw new TypeError(li("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:Yhr.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=xhr(i,arguments[3]),a))throw a;if(i.dtype==="generic")return f?Xhr(o,r,v,e,t,i.endpoint):zhr(r,e,t,i.endpoint);if(n=Hhr(i.dtype),n===null)throw new TypeError(li('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return rO(Whr(u,0),o,r,v,e,t,i.endpoint),u;if(i.dtype==="complex128")return rO(Dhr(u,0),o,r,v,e,t,i.endpoint),u;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return Jhr(u,r,e,t,i.endpoint)}eO.exports=Zhr});var nO=s((jse,iO)=>{"use strict";var $hr=I2(),Qhr=Ma(),Khr=L2(),rqr=Ba(),eqr=_2(),tqr=Da();function iqr(r){var e=tqr(r);return $hr(r)?{accessorProtocol:!0,accessors:[rqr(e),eqr(e)]}:{accessorProtocol:!1,accessors:[Qhr(e),Khr(e)]}}iO.exports=iqr});var sO=s((Cse,aO)=>{"use strict";var nqr=nO();aO.exports=nqr});var oO=s((Gse,uO)=>{"use strict";var aqr=sO();function sqr(r){var e=aqr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}uO.exports=sqr});var Ya=s((Vse,fO)=>{"use strict";var uqr=oO();fO.exports=uqr});var mO=s((Use,gO)=>{"use strict";var oqr=ii(),fqr=ti(),vO=Je(),cO=xe(),lO=ze(),pO=Xe();function vqr(r,e,t,i,n,a,u){var o,v,f,c,l,p,m,h,d,g,q,N,A,j;if(a===0)return r;if(v=0,e==="float64"?(f=t,l=0):e==="complex64"?(v+=1,f=lO(t),l=pO(t)):(f=vO(t),l=cO(t)),i==="float64"?(c=n,p=0):i==="complex64"?(v+=1,c=lO(n),p=pO(n)):(c=vO(n),p=cO(n)),v===2?o=oqr:o=fqr,h=r.data,m=r.accessors[1],a===1)return u?m(h,0,new o(c,p)):m(h,0,new o(f,l)),r;for(m(h,0,new o(f,l)),u?A=a-1:A=a,q=(c-f)/A,N=(p-l)/A,j=1;j<A;j++)d=f+q*j,g=l+N*j,m(h,j,new o(d,g));return u&&m(h,A,new o(c,p)),r}gO.exports=vqr});var hO=s((Hse,dO)=>{"use strict";function cqr(r,e,t,i,n){var a,u,o,v,f;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)u(a,f,e+v*f);return n&&u(a,o,t),r}dO.exports=cqr});var SO=s((Wse,AO)=>{"use strict";var qO=Ur(),yO=k().isPrimitive,lqr=Cr(),mn=y(),bO=E(),wO=r1(),pqr=Da(),gqr=ni(),mqr=ai(),EO=Ya(),dqr=mO(),hqr=hO(),NO=t1(),qqr=e1(),yqr=n1(),bqr=a1();function wqr(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(a=wO(r),a===null){if(!qO(r))throw new TypeError(mn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!yO(r)||bO(r))throw new TypeError(mn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=wO(e),u===null){if(!qO(e))throw new TypeError(mn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!yO(e)||bO(e))throw new TypeError(mn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!lqr(t))throw new TypeError(mn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:bqr.endpoint},arguments.length>3&&(n=yqr(i,arguments[3]),n))throw n;if(v=pqr(t),v===null&&(v="generic"),v==="complex64")return NO(gqr(t,0),a,r,u,e,t.length,i.endpoint),t;if(v==="complex128")return NO(mqr(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=EO(t),dqr(f,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=EO(t),f.accessorProtocol?(hqr(f,r,e,t.length,i.endpoint),t):(qqr(t,r,e,t.length,i.endpoint),t)}AO.exports=wqr});var IO=s((Dse,TO)=>{"use strict";var Eqr=w(),OO=tO(),Nqr=SO();Eqr(OO,"assign",Nqr);TO.exports=OO});var LO=s((zse,_O)=>{"use strict";var Aqr=E(),Sqr=He();function Oqr(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],Aqr(a))return a;(a>i||a===i&&Sqr(a))&&(i=a)}return i}_O.exports=Oqr});var RO=s((Xse,PO)=>{"use strict";var Tqr=E(),Iqr=He();function _qr(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],Tqr(u))return u;(u>n||u===n&&Iqr(u))&&(n=u)}return n}PO.exports=_qr});var BO=s((Jse,MO)=>{"use strict";var Lqr=w(),FO=LO(),Pqr=RO();Lqr(FO,"ndarray",Pqr);MO.exports=FO});var jO=s((xse,kO)=>{"use strict";var Rqr=BO();kO.exports=Rqr});var VO=s((Yse,GO)=>{"use strict";var CO=E(),Fqr=He();function Mqr(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,f=0;f<r&&i[o]!==0;f++)u+=t,o+=n;if(f===r)return NaN;if(a=e[u],CO(a))return a;for(f+=1,f;f<r;f++)if(u+=t,o+=n,!i[o]){if(v=e[u],CO(v))return v;(v>a||v===a&&Fqr(v))&&(a=v)}return a}GO.exports=Mqr});var WO=s((Zse,HO)=>{"use strict";var UO=E(),Bqr=He();function kqr(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return NaN;for(v=i,f=u,l=0;l<r&&n[f]!==0;l++)v+=t,f+=a;if(l===r)return NaN;if(o=e[v],UO(o))return o;for(l+=1,l;l<r;l++)if(v+=t,f+=a,!n[f]){if(c=e[v],UO(c))return c;(c>o||c===o&&Bqr(c))&&(o=c)}return o}HO.exports=kqr});var XO=s(($se,zO)=>{"use strict";var jqr=w(),DO=VO(),Cqr=WO();jqr(DO,"ndarray",Cqr);zO.exports=DO});var xO=s((Qse,JO)=>{"use strict";var Gqr=k().isPrimitive,Vqr=K().isPrimitive,Uqr=or().isPrimitive,Hqr=cr(),Wqr=y(),Dqr={number:Gqr,string:Vqr,boolean:Uqr};function zqr(r,e,t){var i,n,a,u,o,v;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(n=[],i=[],v=0;v<r.length;v++)if(o=r[v],a=e[v],u=Dqr[a],u(o))i.push([[o]]),n.push([1,1]);else if(Hqr(o))i.push(o),n.push([o.length,o[0].length]);else throw new TypeError(Wqr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[v],a,a,String(o)));return[i,n]}JO.exports=zqr});var s1=s((Kse,YO)=>{"use strict";var Xqr=xO();YO.exports=Xqr});var $O=s((rue,ZO)=>{"use strict";var Jqr=_a();function xqr(r){return Jqr(1,r)}ZO.exports=xqr});var KO=s((eue,QO)=>{"use strict";var Yqr=$O();QO.exports=Yqr});var eT=s((tue,rT)=>{"use strict";var Zqr=_a();function $qr(r){return Zqr(0,r)}rT.exports=$qr});var u1=s((iue,tT)=>{"use strict";var Qqr=eT();tT.exports=Qqr});var aT=s((nue,nT)=>{"use strict";var iT=y();function Kqr(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(iT('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(iT('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}nT.exports=Kqr});var uT=s((aue,sT)=>{"use strict";var ryr=aT();sT.exports=ryr});var fT=s((sue,oT)=>{"use strict";var eyr=k().isPrimitive,tyr=uT(),iyr=y();function nyr(r,e,t,i,n,a){var u,o;if(!(eyr(r)&&tyr(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(iyr("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}oT.exports=nyr});var cT=s((uue,vT)=>{"use strict";var ayr=fT();vT.exports=ayr});var pT=s((oue,lT)=>{"use strict";var syr=or().isPrimitive,uyr=y();function oyr(r,e){if(!syr(r))throw new TypeError(uyr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}lT.exports=oyr});var mT=s((fue,gT)=>{"use strict";var fyr=pT();gT.exports=fyr});var hT=s((vue,dT)=>{"use strict";function vyr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}dT.exports=vyr});var yT=s((cue,qT)=>{"use strict";var cyr=hT();qT.exports=cyr});var wT=s((lue,bT)=>{"use strict";var lyr=y(),pyr=yT();function gyr(r,e,t){if(!pyr(r,e))throw new TypeError(lyr("invalid argument. %s must be broadcast compatible.",t))}bT.exports=gyr});var NT=s((pue,ET)=>{"use strict";var myr=wT();ET.exports=myr});var ST=s((gue,AT)=>{"use strict";function dyr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}AT.exports=dyr});var TT=s((mue,OT)=>{"use strict";var hyr=ST();OT.exports=hyr});var _T=s((due,IT)=>{"use strict";var qyr=y(),yyr=TT();function byr(r,e,t,i){if(!yyr(r,e))throw new TypeError(qyr("invalid argument. %s must be broadcast compatible with %s.",t,i))}IT.exports=byr});var PT=s((hue,LT)=>{"use strict";var wyr=_T();LT.exports=wyr});var FT=s((que,RT)=>{"use strict";var Eyr=y();function Nyr(r,e){if(r===void 0)throw new Error(Eyr("invalid invocation. Must provide %s.",e))}RT.exports=Nyr});var o1=s((yue,MT)=>{"use strict";var Ayr=FT();MT.exports=Ayr});var kT=s((bue,BT)=>{"use strict";var Syr=y();function Oyr(r,e,t,i){if(!(r>e))throw new TypeError(Syr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}BT.exports=Oyr});var CT=s((wue,jT)=>{"use strict";var Tyr=kT();jT.exports=Tyr});var VT=s((Eue,GT)=>{"use strict";var Iyr=y();function _yr(r,e,t,i){if(!(r>=e))throw new TypeError(Iyr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}GT.exports=_yr});var HT=s((Nue,UT)=>{"use strict";var Lyr=VT();UT.exports=Lyr});var DT=s((Aue,WT)=>{"use strict";var Pyr=jr().isPrimitive,Ryr=y();function Fyr(r,e){if(!Pyr(r))throw new TypeError(Ryr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}WT.exports=Fyr});var XT=s((Sue,zT)=>{"use strict";var Myr=DT();zT.exports=Myr});var xT=s((Oue,JT)=>{"use strict";var Byr=y();function kyr(r,e,t,i){if(!(r<e))throw new TypeError(Byr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}JT.exports=kyr});var ZT=s((Tue,YT)=>{"use strict";var jyr=xT();YT.exports=jyr});var QT=s((Iue,$T)=>{"use strict";var Cyr=y();function Gyr(r,e,t,i){if(!(r<=e))throw new TypeError(Cyr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}$T.exports=Gyr});var rI=s((_ue,KT)=>{"use strict";var Vyr=QT();KT.exports=Vyr});var tI=s((Lue,eI)=>{"use strict";var Uyr=De().isPrimitive,Hyr=y();function Wyr(r,e){if(!Uyr(r))throw new TypeError(Hyr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}eI.exports=Wyr});var nI=s((Pue,iI)=>{"use strict";var Dyr=tI();iI.exports=Dyr});var sI=s((Rue,aI)=>{"use strict";var zyr=Q2().isPrimitive,Xyr=y();function Jyr(r,e){if(!zyr(r))throw new TypeError(Xyr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}aI.exports=Jyr});var oI=s((Fue,uI)=>{"use strict";var xyr=sI();uI.exports=xyr});var vI=s((Mue,fI)=>{"use strict";var Yyr=k().isPrimitive,Zyr=y();function $yr(r,e){if(!Yyr(r))throw new TypeError(Zyr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}fI.exports=$yr});var lI=s((Bue,cI)=>{"use strict";var Qyr=vI();cI.exports=Qyr});var gI=s((kue,pI)=>{"use strict";var Kyr=y();function rbr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(Kyr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}pI.exports=rbr});var dI=s((jue,mI)=>{"use strict";var ebr=gI();mI.exports=ebr});var qI=s((Cue,hI)=>{"use strict";var tbr=ie().isPrimitive,ibr=y();function nbr(r,e){if(!tbr(r))throw new TypeError(ibr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}hI.exports=nbr});var f1=s((Gue,yI)=>{"use strict";var abr=qI();yI.exports=abr});var wI=s((Vue,bI)=>{"use strict";var sbr=W().isPrimitive,ubr=y();function obr(r,e){if(!sbr(r))throw new TypeError(ubr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}bI.exports=obr});var NI=s((Uue,EI)=>{"use strict";var fbr=wI();EI.exports=fbr});var v1=s((Hue,AI)=>{"use strict";var vbr=k().isPrimitive;function cbr(r){return vbr(r)&&r>=0&&r<=1}AI.exports=cbr});var c1=s((Wue,SI)=>{"use strict";var lbr=k().isObject;function pbr(r){return lbr(r)&&r.valueOf()>=0&&r.valueOf()<=1}SI.exports=pbr});var TI=s((Due,OI)=>{"use strict";var gbr=v1(),mbr=c1();function dbr(r){return gbr(r)||mbr(r)}OI.exports=dbr});var dn=s((zue,_I)=>{"use strict";var II=w(),l1=TI(),hbr=v1(),qbr=c1();II(l1,"isPrimitive",hbr);II(l1,"isObject",qbr);_I.exports=l1});var PI=s((Xue,LI)=>{"use strict";var ybr=dn().isPrimitive,bbr=y();function wbr(r,e){if(!ybr(r))throw new TypeError(bbr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}LI.exports=wbr});var FI=s((Jue,RI)=>{"use strict";var Ebr=PI();RI.exports=Ebr});var BI=s((xue,MI)=>{"use strict";var Nbr=cr(),Abr=y();function Sbr(r,e){if(!Nbr(r))throw new TypeError(Abr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}MI.exports=Sbr});var jI=s((Yue,kI)=>{"use strict";var Obr=BI();kI.exports=Obr});var GI=s((Zue,CI)=>{"use strict";function Tbr(r){return r.length===1||r[0].length===1}CI.exports=Tbr});var UI=s(($ue,VI)=>{"use strict";var Ibr=GI();VI.exports=Ibr});var WI=s((Que,HI)=>{"use strict";var _br=cr(),Lbr=UI();function Pbr(r){return _br(r)&&Lbr(r)}HI.exports=Pbr});var zI=s((Kue,DI)=>{"use strict";var Rbr=WI();DI.exports=Rbr});var JI=s((roe,XI)=>{"use strict";var Fbr=y(),Mbr=zI();function Bbr(r,e){if(!Mbr(r))throw new TypeError(Fbr("invalid argument. %s must consist of only a single row or a single column.",e))}XI.exports=Bbr});var YI=s((eoe,xI)=>{"use strict";var kbr=JI();xI.exports=kbr});var $I=s((toe,ZI)=>{"use strict";function jbr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}ZI.exports=jbr});var KI=s((ioe,QI)=>{"use strict";var Cbr=$I();QI.exports=Cbr});var e_=s((noe,r_)=>{"use strict";var Gbr=y(),Vbr=KI();function Ubr(r,e,t){if(!Vbr(r,e))throw new TypeError(Gbr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}r_.exports=Ubr});var i_=s((aoe,t_)=>{"use strict";var Hbr=e_();t_.exports=Hbr});var a_=s((soe,n_)=>{"use strict";var Wbr=K().isPrimitive,Dbr=y();function zbr(r,e){if(!Wbr(r))throw new TypeError(Dbr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}n_.exports=zbr});var u_=s((uoe,s_)=>{"use strict";var Xbr=a_();s_.exports=Xbr});var f_=s((ooe,o_)=>{"use strict";var Jbr=y();function xbr(r){throw new Error(Jbr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}o_.exports=xbr});var c_=s((foe,v_)=>{"use strict";var Ybr=f_();v_.exports=Ybr});var g_=s((voe,p_)=>{"use strict";var l_=f1(),Zbr=o1();function $br(r,e,t){l_(r,"Number of rows"),l_(e,"Number of columns"),Zbr(t,"a pseudorandom number generator seed")}p_.exports=$br});var d_=s((coe,m_)=>{"use strict";var Qbr=g_();m_.exports=Qbr});var q_=s((loe,h_)=>{"use strict";var Z={};Z.isBetween=cT();Z.isBoolean=mT();Z.isBroadcastCompatible=NT();Z.isBroadcastCompatibleWith=PT();Z.isDefined=o1();Z.isGreaterThan=CT();Z.isGreaterThanEqual=HT();Z.isInteger=XT();Z.isLessThan=ZT();Z.isLessThanEqual=rI();Z.isNonNegativeInteger=nI();Z.isNonNegativeNumber=oI();Z.isNumber=lI();Z.isOneOf=dI();Z.isPositiveInteger=f1();Z.isPositiveNumber=NI();Z.isProbability=FI();Z.isRange=jI();Z.isRange1d=YI();Z.isSameShape=i_();Z.isString=u_();Z.unrecognizedOptionName=c_();Z.verifyCommonPRNGArgs=d_();h_.exports=Z});var b_=s((poe,y_)=>{"use strict";var p1=4;function Kbr(r,e,t,i,n,a){var u,o,v,f;if(r<=0||e===0)return n;if(i===1&&a===1){if(v=r%p1,v>0)for(f=0;f<v;f++)n[f]+=e*t[f];if(r<p1)return n;for(f=v;f<r;f+=p1)n[f]+=e*t[f],n[f+1]+=e*t[f+1],n[f+2]+=e*t[f+2],n[f+3]+=e*t[f+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,f=0;f<r;f++)n[o]+=e*t[u],u+=i,o+=a;return n}y_.exports=Kbr});var E_=s((goe,w_)=>{"use strict";var hn=4;function rwr(r,e,t,i,n,a,u,o){var v,f,c,l;if(r<=0||e===0)return a;if(v=n,f=o,i===1&&u===1){if(c=r%hn,c>0)for(l=0;l<c;l++)a[f]+=e*t[v],v+=i,f+=u;if(r<hn)return a;for(l=c;l<r;l+=hn)a[f]+=e*t[v],a[f+1]+=e*t[v+1],a[f+2]+=e*t[v+2],a[f+3]+=e*t[v+3],v+=hn,f+=hn;return a}for(l=0;l<r;l++)a[f]+=e*t[v],v+=i,f+=u;return a}w_.exports=rwr});var g1=s((moe,A_)=>{"use strict";var ewr=w(),N_=b_(),twr=E_();ewr(N_,"ndarray",twr);A_.exports=N_});var O_=s((doe,S_)=>{"use strict";var m1={};m1.daxpy=g1().ndarray;m1.saxpy=g1().ndarray;S_.exports=m1});var I_=s((hoe,T_)=>{"use strict";var iwr=wt(),nwr=ir();function awr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(nwr(r)==="[object Error]")return!0;r=iwr(r)}return!1}T_.exports=awr});var L_=s((qoe,__)=>{"use strict";var swr=I_();__.exports=swr});var d1=s((yoe,P_)=>{"use strict";function uwr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}P_.exports=uwr});var F_=s((boe,R_)=>{"use strict";var owr=d1(),fwr=owr();R_.exports=fwr});var k_=s((woe,B_)=>{"use strict";var vwr=w(),M_=d1(),cwr=F_();vwr(M_,"REGEXP",cwr);B_.exports=M_});var C_=s((Eoe,j_)=>{"use strict";var lwr=K().isPrimitive,pwr=k_(),gwr=y();function mwr(r){if(!lwr(r))throw new TypeError(gwr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=pwr().exec(r),r?new RegExp(r[1],r[2]):null}j_.exports=mwr});var V_=s((Noe,G_)=>{"use strict";var dwr=C_();G_.exports=dwr});var H_=s((Aoe,U_)=>{"use strict";var hwr=typeof Object.getOwnPropertyNames<"u";U_.exports=hwr});var z_=s((Soe,D_)=>{"use strict";var W_=Xt(),qwr=W_.getOwnPropertyNames;function ywr(r){return qwr(W_(r))}D_.exports=ywr});var J_=s((Ooe,X_)=>{"use strict";var bwr=Xt(),wwr=zt();function Ewr(r){return wwr(bwr(r))}X_.exports=Ewr});var Y_=s((Toe,x_)=>{"use strict";var Nwr=H_(),Awr=z_(),Swr=J_(),h1;Nwr?h1=Awr:h1=Swr;x_.exports=h1});var $_=s((Ioe,Z_)=>{"use strict";var Owr=typeof Object.getOwnPropertyDescriptor<"u";Z_.exports=Owr});var K_=s((_oe,Q_)=>{"use strict";var Twr=Object.getOwnPropertyDescriptor;function Iwr(r,e){var t;return r==null?null:(t=Twr(r,e),t===void 0?null:t)}Q_.exports=Iwr});var eL=s((Loe,rL)=>{"use strict";var _wr=S();function Lwr(r,e){return _wr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}rL.exports=Lwr});var iL=s((Poe,tL)=>{"use strict";var Pwr=$_(),Rwr=K_(),Fwr=eL(),q1;Pwr?q1=Rwr:q1=Fwr;tL.exports=q1});var aL=s((Roe,nL)=>{"use strict";var Mwr=typeof Buffer=="function"?Buffer:null;nL.exports=Mwr});var uL=s((Foe,sL)=>{"use strict";var Bwr=bt(),Za=aL();function kwr(){var r,e;if(typeof Za!="function")return!1;try{typeof Za.from=="function"?e=Za.from([1,2,3,4]):e=new Za([1,2,3,4]),r=Bwr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}sL.exports=kwr});var fL=s((Moe,oL)=>{"use strict";var jwr=uL();oL.exports=jwr});var lL=s($a=>{"use strict";$a.byteLength=Gwr;$a.toByteArray=Uwr;$a.fromByteArray=Dwr;var xr=[],Mr=[],Cwr=typeof Uint8Array<"u"?Uint8Array:Array,y1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Bt=0,vL=y1.length;Bt<vL;++Bt)xr[Bt]=y1[Bt],Mr[y1.charCodeAt(Bt)]=Bt;var Bt,vL;Mr["-".charCodeAt(0)]=62;Mr["_".charCodeAt(0)]=63;function cL(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function Gwr(r){var e=cL(r),t=e[0],i=e[1];return(t+i)*3/4-i}function Vwr(r,e,t){return(e+t)*3/4-t}function Uwr(r){var e,t=cL(r),i=t[0],n=t[1],a=new Cwr(Vwr(r,i,n)),u=0,o=n>0?i-4:i,v;for(v=0;v<o;v+=4)e=Mr[r.charCodeAt(v)]<<18|Mr[r.charCodeAt(v+1)]<<12|Mr[r.charCodeAt(v+2)]<<6|Mr[r.charCodeAt(v+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=Mr[r.charCodeAt(v)]<<2|Mr[r.charCodeAt(v+1)]>>4,a[u++]=e&255),n===1&&(e=Mr[r.charCodeAt(v)]<<10|Mr[r.charCodeAt(v+1)]<<4|Mr[r.charCodeAt(v+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function Hwr(r){return xr[r>>18&63]+xr[r>>12&63]+xr[r>>6&63]+xr[r&63]}function Wwr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(Hwr(i));return n.join("")}function Dwr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(Wwr(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(xr[e>>2]+xr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(xr[e>>10]+xr[e>>4&63]+xr[e<<2&63]+"=")),n.join("")}});var pL=s(b1=>{b1.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,v=(1<<o)-1,f=v>>1,c=-7,l=t?n-1:0,p=t?-1:1,m=r[e+l];for(l+=p,a=m&(1<<-c)-1,m>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-f;else{if(a===v)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-f}return(m?-1:1)*u*Math.pow(2,a-i)};b1.write=function(r,e,t,i,n,a){var u,o,v,f=a*8-n-1,c=(1<<f)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-u))<1&&(u--,v*=2),u+l>=1?e+=p/v:e+=p*Math.pow(2,1-l),e*v>=2&&(u++,v/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*v-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+m]=o&255,m+=h,o/=256,n-=8);for(u=u<<n|o,f+=n;f>0;r[t+m]=u&255,m+=h,u/=256,f-=8);r[t+m-h]|=d*128}});var LL=s(di=>{"use strict";var w1=lL(),gi=pL(),gL=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;di.Buffer=b;di.SlowBuffer=Zwr;di.INSPECT_MAX_BYTES=50;var Qa=2147483647;di.kMaxLength=Qa;b.TYPED_ARRAY_SUPPORT=zwr();!b.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function zwr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(b.prototype,"parent",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.buffer}});Object.defineProperty(b.prototype,"offset",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.byteOffset}});function ae(r){if(r>Qa)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,b.prototype),e}function b(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return S1(r)}return qL(r,e,t)}b.poolSize=8192;function qL(r,e,t){if(typeof r=="string")return Jwr(r,e);if(ArrayBuffer.isView(r))return xwr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Yr(r,ArrayBuffer)||r&&Yr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Yr(r,SharedArrayBuffer)||r&&Yr(r.buffer,SharedArrayBuffer)))return N1(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return b.from(i,e,t);let n=Ywr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return b.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}b.from=function(r,e,t){return qL(r,e,t)};Object.setPrototypeOf(b.prototype,Uint8Array.prototype);Object.setPrototypeOf(b,Uint8Array);function yL(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function Xwr(r,e,t){return yL(r),r<=0?ae(r):e!==void 0?typeof t=="string"?ae(r).fill(e,t):ae(r).fill(e):ae(r)}b.alloc=function(r,e,t){return Xwr(r,e,t)};function S1(r){return yL(r),ae(r<0?0:O1(r)|0)}b.allocUnsafe=function(r){return S1(r)};b.allocUnsafeSlow=function(r){return S1(r)};function Jwr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!b.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=bL(r,e)|0,i=ae(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function E1(r){let e=r.length<0?0:O1(r.length)|0,t=ae(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function xwr(r){if(Yr(r,Uint8Array)){let e=new Uint8Array(r);return N1(e.buffer,e.byteOffset,e.byteLength)}return E1(r)}function N1(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,b.prototype),i}function Ywr(r){if(b.isBuffer(r)){let e=O1(r.length)|0,t=ae(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||I1(r.length)?ae(0):E1(r);if(r.type==="Buffer"&&Array.isArray(r.data))return E1(r.data)}function O1(r){if(r>=Qa)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Qa.toString(16)+" bytes");return r|0}function Zwr(r){return+r!=r&&(r=0),b.alloc(+r)}b.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==b.prototype};b.compare=function(e,t){if(Yr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),Yr(t,Uint8Array)&&(t=b.from(t,t.offset,t.byteLength)),!b.isBuffer(e)||!b.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};b.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};b.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return b.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=b.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(Yr(u,Uint8Array))a+u.length>n.length?(b.isBuffer(u)||(u=b.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(b.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function bL(r,e){if(b.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Yr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return A1(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return _L(r).length;default:if(n)return i?-1:A1(r).length;e=(""+e).toLowerCase(),n=!0}}b.byteLength=bL;function $wr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return uEr(this,e,t);case"utf8":case"utf-8":return EL(this,e,t);case"ascii":return aEr(this,e,t);case"latin1":case"binary":return sEr(this,e,t);case"base64":return iEr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return oEr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}b.prototype._isBuffer=!0;function kt(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}b.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)kt(this,t,t+1);return this};b.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)kt(this,t,t+3),kt(this,t+1,t+2);return this};b.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)kt(this,t,t+7),kt(this,t+1,t+6),kt(this,t+2,t+5),kt(this,t+3,t+4);return this};b.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?EL(this,0,e):$wr.apply(this,arguments)};b.prototype.toLocaleString=b.prototype.toString;b.prototype.equals=function(e){if(!b.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:b.compare(this,e)===0};b.prototype.inspect=function(){let e="",t=di.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};gL&&(b.prototype[gL]=b.prototype.inspect);b.prototype.compare=function(e,t,i,n,a){if(Yr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),!b.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,v=Math.min(u,o),f=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<v;++l)if(f[l]!==c[l]){u=f[l],o=c[l];break}return u<o?-1:o<u?1:0};function wL(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,I1(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=b.from(e,i)),b.isBuffer(e))return e.length===0?-1:mL(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):mL(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function mL(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function v(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let f;if(n){let c=-1;for(f=t;f<u;f++)if(v(r,f)===v(e,c===-1?0:f-c)){if(c===-1&&(c=f),f-c+1===o)return c*a}else c!==-1&&(f-=f-c),c=-1}else for(t+o>u&&(t=u-o),f=t;f>=0;f--){let c=!0;for(let l=0;l<o;l++)if(v(r,f+l)!==v(e,l)){c=!1;break}if(c)return f}return-1}b.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};b.prototype.indexOf=function(e,t,i){return wL(this,e,t,i,!0)};b.prototype.lastIndexOf=function(e,t,i){return wL(this,e,t,i,!1)};function Qwr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(I1(o))return u;r[t+u]=o}return u}function Kwr(r,e,t,i){return Ka(A1(e,r.length-t),r,t,i)}function rEr(r,e,t,i){return Ka(lEr(e),r,t,i)}function eEr(r,e,t,i){return Ka(_L(e),r,t,i)}function tEr(r,e,t,i){return Ka(pEr(e,r.length-t),r,t,i)}b.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return Qwr(this,e,t,i);case"utf8":case"utf-8":return Kwr(this,e,t,i);case"ascii":case"latin1":case"binary":return rEr(this,e,t,i);case"base64":return eEr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return tEr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};b.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function iEr(r,e,t){return e===0&&t===r.length?w1.fromByteArray(r):w1.fromByteArray(r.slice(e,t))}function EL(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let v,f,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:v=r[n+1],(v&192)===128&&(l=(a&31)<<6|v&63,l>127&&(u=l));break;case 3:v=r[n+1],f=r[n+2],(v&192)===128&&(f&192)===128&&(l=(a&15)<<12|(v&63)<<6|f&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:v=r[n+1],f=r[n+2],c=r[n+3],(v&192)===128&&(f&192)===128&&(c&192)===128&&(l=(a&15)<<18|(v&63)<<12|(f&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return nEr(i)}var dL=4096;function nEr(r){let e=r.length;if(e<=dL)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=dL));return t}function aEr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function sEr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function uEr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=gEr[r[a]];return n}function oEr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}b.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,b.prototype),n};function ur(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}b.prototype.readUintLE=b.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};b.prototype.readUintBE=b.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};b.prototype.readUint8=b.prototype.readUInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]};b.prototype.readUint16LE=b.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]|this[e+1]<<8};b.prototype.readUint16BE=b.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]<<8|this[e+1]};b.prototype.readUint32LE=b.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};b.prototype.readUint32BE=b.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};b.prototype.readBigUInt64LE=Ye(function(e){e=e>>>0,mi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&qn(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});b.prototype.readBigUInt64BE=Ye(function(e){e=e>>>0,mi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&qn(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});b.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};b.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};b.prototype.readInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};b.prototype.readInt16LE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};b.prototype.readInt16BE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};b.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};b.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};b.prototype.readBigInt64LE=Ye(function(e){e=e>>>0,mi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&qn(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});b.prototype.readBigInt64BE=Ye(function(e){e=e>>>0,mi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&qn(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});b.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),gi.read(this,e,!0,23,4)};b.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),gi.read(this,e,!1,23,4)};b.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),gi.read(this,e,!0,52,8)};b.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),gi.read(this,e,!1,52,8)};function qr(r,e,t,i,n,a){if(!b.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}b.prototype.writeUintLE=b.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};b.prototype.writeUintBE=b.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};b.prototype.writeUint8=b.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,255,0),this[t]=e&255,t+1};b.prototype.writeUint16LE=b.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeUint16BE=b.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeUint32LE=b.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};b.prototype.writeUint32BE=b.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function NL(r,e,t,i,n){IL(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function AL(r,e,t,i,n){IL(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}b.prototype.writeBigUInt64LE=Ye(function(e,t=0){return NL(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeBigUInt64BE=Ye(function(e,t=0){return AL(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);qr(this,e,t,i,v-1,-v)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);qr(this,e,t,i,v-1,-v)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};b.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};b.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};b.prototype.writeBigInt64LE=Ye(function(e,t=0){return NL(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});b.prototype.writeBigInt64BE=Ye(function(e,t=0){return AL(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function SL(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function OL(r,e,t,i,n){return e=+e,t=t>>>0,n||SL(r,e,t,4,34028234663852886e22,-34028234663852886e22),gi.write(r,e,t,i,23,4),t+4}b.prototype.writeFloatLE=function(e,t,i){return OL(this,e,t,!0,i)};b.prototype.writeFloatBE=function(e,t,i){return OL(this,e,t,!1,i)};function TL(r,e,t,i,n){return e=+e,t=t>>>0,n||SL(r,e,t,8,17976931348623157e292,-17976931348623157e292),gi.write(r,e,t,i,52,8),t+8}b.prototype.writeDoubleLE=function(e,t,i){return TL(this,e,t,!0,i)};b.prototype.writeDoubleBE=function(e,t,i){return TL(this,e,t,!1,i)};b.prototype.copy=function(e,t,i,n){if(!b.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};b.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!b.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=b.isBuffer(e)?e:b.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var pi={};function T1(r,e,t){pi[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}T1("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);T1("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);T1("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=hL(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=hL(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function hL(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function fEr(r,e,t){mi(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&qn(e,r.length-(t+1))}function IL(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new pi.ERR_OUT_OF_RANGE("value",o,r)}fEr(i,n,a)}function mi(r,e){if(typeof r!="number")throw new pi.ERR_INVALID_ARG_TYPE(e,"number",r)}function qn(r,e,t){throw Math.floor(r)!==r?(mi(r,t),new pi.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new pi.ERR_BUFFER_OUT_OF_BOUNDS:new pi.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var vEr=/[^+/0-9A-Za-z-_]/g;function cEr(r){if(r=r.split("=")[0],r=r.trim().replace(vEr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function A1(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function lEr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function pEr(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function _L(r){return w1.toByteArray(cEr(r))}function Ka(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function Yr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function I1(r){return r!==r}var gEr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function Ye(r){return typeof BigInt>"u"?mEr:r}function mEr(){throw new Error("BigInt not supported")}});var RL=s((Goe,PL)=>{"use strict";var dEr=LL().Buffer;PL.exports=dEr});var ML=s((Voe,FL)=>{"use strict";function hEr(){throw new Error("not implemented")}FL.exports=hEr});var r0=s((Uoe,BL)=>{"use strict";var qEr=fL(),yEr=RL(),bEr=ML(),_1;qEr()?_1=yEr:_1=bEr;BL.exports=_1});var jL=s((Hoe,kL)=>{"use strict";var wEr=L(),EEr=r0(),NEr=wEr(EEr.from);kL.exports=NEr});var GL=s((Woe,CL)=>{"use strict";var AEr=bt(),SEr=y(),OEr=r0();function TEr(r){if(!AEr(r))throw new TypeError(SEr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return OEr.from(r)}CL.exports=TEr});var UL=s((Doe,VL)=>{"use strict";var IEr=bt(),_Er=y(),LEr=r0();function PEr(r){if(!IEr(r))throw new TypeError(_Er("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new LEr(r)}VL.exports=PEr});var WL=s((zoe,HL)=>{"use strict";var REr=jL(),FEr=GL(),MEr=UL(),L1;REr?L1=FEr:L1=MEr;HL.exports=L1});var XL=s((Xoe,zL)=>{"use strict";var BEr=un(),kEr=Jt(),jEr=sn(),CEr=an(),GEr=xt(),VEr=_t(),UEr=lr(),HEr=ne(),WEr=mr(),DL;function DEr(r){return new BEr(r)}function zEr(r){return new kEr(r)}function XEr(r){return new jEr(r)}function JEr(r){return new CEr(r)}function xEr(r){return new GEr(r)}function YEr(r){return new VEr(r)}function ZEr(r){return new UEr(r)}function $Er(r){return new HEr(r)}function QEr(r){return new WEr(r)}function KEr(){var r={int8array:DEr,uint8array:zEr,uint8clampedarray:XEr,int16array:JEr,uint16array:xEr,int32array:YEr,uint32array:ZEr,float32array:$Er,float64array:QEr};return r}DL=KEr();zL.exports=DL});var $L=s((Joe,ZL)=>{"use strict";var e0=S(),P1=cr(),JL=bt(),rNr=L_(),xL=xn(),eNr=V_(),tNr=Jn(),YL=zt(),iNr=Y_(),yn=iL(),nNr=wt(),bn=Be(),aNr=WL(),sNr=XL();function uNr(r){var e,t,i,n,a,u,o,v;for(e=[],n=[],o=Object.create(nNr(r)),e.push(r),n.push(o),t=iNr(r),v=0;v<t.length;v++)i=t[v],a=yn(r,i),e0(a,"value")&&(u=P1(r[i])?[]:{},a.value=jt(r[i],u,e,n,-1)),bn(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function oNr(r){var e=[],t=[],i,n,a,u,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=YL(r),v=0;v<i.length;v++)u=i[v],n=yn(r,u),e0(n,"value")&&(a=P1(r[u])?[]:{},n.value=jt(r[u],a,e,t,-1)),bn(o,u,n);return o}function jt(r,e,t,i,n){var a,u,o,v,f,c,l,p,m,h;if(n-=1,typeof r!="object"||r===null)return r;if(JL(r))return aNr(r);if(rNr(r))return oNr(r);if(o=xL(r),o==="date")return new Date(+r);if(o==="regexp")return eNr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=sNr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?uNr(r):{};if(u=YL(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=xL(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||JL(p)){a==="object"?(v=yn(r,c),e0(v,"value")&&(v.value=jt(p)),bn(e,c,v)):e[c]=jt(p);continue}if(m=tNr(t,p),m!==-1){e[c]=i[m];continue}l=P1(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=jt(p,l,t,i,n):(v=yn(r,c),e0(v,"value")&&(v.value=jt(p,l,t,i,n)),bn(e,c,v))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],v=yn(r,c),bn(e,c,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}ZL.exports=jt});var KL=s((xoe,QL)=>{"use strict";var fNr=cr(),vNr=De().isPrimitive,cNr=y(),lNr=_(),pNr=$L();function gNr(r,e){var t;if(arguments.length>1){if(!vNr(e))throw new TypeError(cNr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=lNr;return t=fNr(r)?new Array(r.length):{},pNr(r,t,[r],[t],e)}QL.exports=gNr});var wn=s((Yoe,rP)=>{"use strict";var mNr=KL();rP.exports=mNr});var eP=s((Zoe,dNr)=>{dNr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var iP=s(($oe,tP)=>{"use strict";var hNr=wn(),qNr=eP();function yNr(){return hNr(qNr)}tP.exports=yNr});var nP=s((Qoe,bNr)=>{bNr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var sP=s((Koe,aP)=>{"use strict";var wNr=wn(),ENr=nP();function NNr(){return wNr(ENr)}aP.exports=NNr});var uP=s((r2e,ANr)=>{ANr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var fP=s((e2e,oP)=>{"use strict";var SNr=wn(),ONr=uP();function TNr(){return SNr(ONr)}oP.exports=TNr});var vP=s((t2e,INr)=>{INr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var lP=s((i2e,cP)=>{"use strict";var _Nr=vP();function LNr(){return _Nr.slice()}cP.exports=LNr});var pP=s((n2e,PNr)=>{PNr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var mP=s((a2e,gP)=>{"use strict";var RNr=wn(),FNr=pP();function MNr(){return RNr(FNr)}gP.exports=MNr});var hP=s((s2e,dP)=>{"use strict";var hi={};hi.AFINN_111=iP();hi.AFINN_96=sP();hi.ANSCOMBES_QUARTET=fP();hi.HERNDON_VENUS_SEMIDIAMETERS=lP();hi.NIGHTINGALES_ROSE=mP();dP.exports=hi});var yP=s((u2e,qP)=>{"use strict";var BNr=Ot(),kNr=G(),R1=E();function jNr(r,e,t){var i,n;return R1(r)||R1(e)||R1(t)||t<0?NaN:t===0?r<e?0:1:(i=t*kNr(2),n=r-e,.5*BNr(-n/i))}qP.exports=jNr});var wP=s((o2e,bP)=>{"use strict";var CNr=O(),GNr=Oa().factory,F1=E(),VNr=G(),UNr=Ot();function HNr(r,e){var t;if(F1(r)||F1(e)||e<0)return CNr(NaN);if(e===0)return GNr(r);return t=e*VNr(2),i;function i(n){var a;return F1(n)?NaN:(a=n-r,.5*UNr(-a/t))}}bP.exports=HNr});var AP=s((f2e,NP)=>{"use strict";var WNr=w(),EP=yP(),DNr=wP();WNr(EP,"factory",DNr);NP.exports=EP});var TP=s((v2e,OP)=>{"use strict";var SP=E(),zNr=P(),XNr=Ve(),JNr=Qo();function xNr(r,e){return SP(r)||SP(e)||e<=0?NaN:.5*zNr(XNr*JNr*e*e)}OP.exports=xNr});var _P=s((c2e,IP)=>{"use strict";var YNr=TP();IP.exports=YNr});var RP=s((l2e,PP)=>{"use strict";var LP=E();function ZNr(r,e){return LP(r)||LP(e)||e<=0?NaN:0}PP.exports=ZNr});var MP=s((p2e,FP)=>{"use strict";var $Nr=RP();FP.exports=$Nr});var kP=s((g2e,BP)=>{"use strict";function QNr(r){return r*r}BP.exports=QNr});var t0=s((m2e,jP)=>{"use strict";var KNr=kP();jP.exports=KNr});var GP=s((d2e,CP)=>{"use strict";var rAr=Q(),eAr=[tAr,iAr,nAr,aAr,sAr,uAr,oAr,fAr,vAr,cAr,lAr,pAr,gAr,mAr,dAr,hAr,qAr,yAr,bAr,wAr,EAr,NAr,AAr,SAr,OAr,TAr,IAr,_Ar,LAr,PAr,RAr,FAr,MAr,BAr,kAr,jAr,CAr,GAr,VAr,UAr,HAr,WAr,DAr,zAr,XAr,JAr,xAr,YAr,ZAr,$Ar,QAr,KAr,rSr,eSr,tSr,iSr,nSr,aSr,sSr,uSr,oSr,fSr,vSr,cSr,lSr,pSr,gSr,mSr,dSr,hSr,qSr,ySr,bSr,wSr,ESr,NSr,ASr,SSr,OSr,TSr,ISr,_Sr,LSr,PSr,RSr,FSr,MSr,BSr,kSr,jSr,CSr,GSr,VSr,USr,HSr,WSr,DSr,zSr,XSr,JSr,xSr];function tAr(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function iAr(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function nAr(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function aAr(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function sAr(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function uAr(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function oAr(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function fAr(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function vAr(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function cAr(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function lAr(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function pAr(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function gAr(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function mAr(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function dAr(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function hAr(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function qAr(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function yAr(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function bAr(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function wAr(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function EAr(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function NAr(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function AAr(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function SAr(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function OAr(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function TAr(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function IAr(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function _Ar(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function LAr(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function PAr(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function RAr(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function FAr(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function MAr(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function BAr(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function kAr(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function jAr(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function CAr(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function GAr(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function VAr(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function UAr(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function HAr(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function WAr(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function DAr(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function zAr(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function XAr(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function JAr(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function xAr(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function YAr(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function ZAr(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function $Ar(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function QAr(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function KAr(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function rSr(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function eSr(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function tSr(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function iSr(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function nSr(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function aSr(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function sSr(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function uSr(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function oSr(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function fSr(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function vSr(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function cSr(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function lSr(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function pSr(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function gSr(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function mSr(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function dSr(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function hSr(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function qSr(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function ySr(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function bSr(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function wSr(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function ESr(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function NSr(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function ASr(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function SSr(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function OSr(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function TSr(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function ISr(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function _Sr(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function LSr(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function PSr(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function RSr(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function FSr(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function MSr(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function BSr(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function kSr(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function jSr(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function CSr(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function GSr(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function VSr(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function USr(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function HSr(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function WSr(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function DSr(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function zSr(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function XSr(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function JSr(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function xSr(){return 1}function YSr(r){var e=rAr(r),t=eAr[e];return t(2*r-(2*e+1))}CP.exports=YSr});var DP=s((h2e,WP)=>{"use strict";var VP=nr(),ZSr=_(),UP=GP(),HP=.5641895835477563;function $Sr(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?HP/r:(e=r*r,HP*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):UP(400/(4+r)):r<-26.7?ZSr:(e=r*r,r<-6.1?2*VP(e):2*VP(e)-UP(400/(4-r)))}WP.exports=$Sr});var M1=s((q2e,zP)=>{"use strict";var QSr=DP();zP.exports=QSr});var xP=s((y2e,JP)=>{"use strict";var KSr=P(),rOr=Ue(),eOr=t0(),tOr=Ot(),iOr=M1(),nOr=V(),B1=E(),XP=.7071067811865475;function aOr(r,e,t){var i;return B1(r)||B1(e)||B1(t)||t<0?NaN:t===0?r<e?nOr:0:(i=(r-e)/t,i<-1?KSr(iOr(-i*XP)/2)-eOr(i)/2:rOr(-tOr(i*XP)/2))}JP.exports=aOr});var $P=s((b2e,ZP)=>{"use strict";var YP=E(),sOr=V();function uOr(r,e){return YP(r)||YP(e)?NaN:r<e?sOr:0}ZP.exports=uOr});var rR=s((w2e,KP)=>{"use strict";var oOr=O(),QP=E(),fOr=V();function vOr(r){if(QP(r))return oOr(NaN);return e;function e(t){return QP(t)?NaN:t<r?fOr:0}}KP.exports=vOr});var iR=s((E2e,tR)=>{"use strict";var cOr=w(),eR=$P(),lOr=rR();cOr(eR,"factory",lOr);tR.exports=eR});var uR=s((N2e,sR)=>{"use strict";var pOr=O(),gOr=iR().factory,nR=E(),mOr=Ue(),dOr=t0(),hOr=Ot(),qOr=M1(),yOr=P(),aR=.7071067811865475;function bOr(r,e){if(nR(r)||nR(e)||e<0)return pOr(NaN);if(e===0)return gOr(r);return t;function t(i){var n=(i-r)/e;return n<-1?yOr(qOr(-n*aR)/2)-dOr(n)/2:mOr(-hOr(n*aR)/2)}}sR.exports=bOr});var vR=s((A2e,fR)=>{"use strict";var wOr=w(),oR=xP(),EOr=uR();wOr(oR,"factory",EOr);fR.exports=oR});var k1=s((S2e,cR)=>{"use strict";var NOr=1.8378770664093456;cR.exports=NOr});var gR=s((O2e,pR)=>{"use strict";var AOr=P(),lR=H(),SOr=k1(),OOr=V(),TOr=_(),j1=E();function IOr(r,e,t){var i,n,a;return j1(r)||j1(e)||j1(t)||t<0?NaN:t===0?r===e?TOr:OOr:(i=lR(t,2),n=-.5*(2*AOr(t)+SOr),a=-1/(2*i),n+a*lR(r-e,2))}pR.exports=IOr});var hR=s((T2e,dR)=>{"use strict";var _Or=_(),LOr=V(),mR=E();function POr(r,e){return mR(r)||mR(e)?NaN:r===e?_Or:LOr}dR.exports=POr});var bR=s((I2e,yR)=>{"use strict";var ROr=O(),FOr=_(),MOr=V(),qR=E();function BOr(r){if(qR(r))return ROr(NaN);return e;function e(t){return qR(t)?NaN:t===r?FOr:MOr}}yR.exports=BOr});var NR=s((_2e,ER)=>{"use strict";var kOr=w(),wR=hR(),jOr=bR();kOr(wR,"factory",jOr);ER.exports=wR});var TR=s((L2e,OR)=>{"use strict";var COr=O(),GOr=NR().factory,VOr=k1(),AR=E(),SR=H(),UOr=P();function HOr(r,e){var t,i,n;if(AR(r)||AR(e)||e<0)return COr(NaN);if(e===0)return GOr(r);return t=SR(e,2),i=-.5*(2*UOr(e)+VOr),n=-1/(2*t),a;function a(u){return i+n*SR(u-r,2)}}OR.exports=HOr});var LR=s((P2e,_R)=>{"use strict";var WOr=w(),IR=gR(),DOr=TR();WOr(IR,"factory",DOr);_R.exports=IR});var FR=s((R2e,RR)=>{"use strict";var PR=E();function zOr(r,e){return PR(r)||PR(e)||e<=0?NaN:r}RR.exports=zOr});var BR=s((F2e,MR)=>{"use strict";var XOr=FR();MR.exports=XOr});var CR=s((M2e,jR)=>{"use strict";var kR=E();function JOr(r,e){return kR(r)||kR(e)||e<=0?NaN:r}jR.exports=JOr});var VR=s((B2e,GR)=>{"use strict";var xOr=CR();GR.exports=xOr});var HR=s((k2e,UR)=>{"use strict";var C1=E(),YOr=nr(),ZOr=H();function $Or(r,e,t){return C1(r)||C1(e)||C1(t)||t<=0?NaN:YOr(e*r+.5*ZOr(t*r,2))}UR.exports=$Or});var DR=s((j2e,WR)=>{"use strict";var QOr=O(),G1=E(),KOr=nr(),rTr=H();function eTr(r,e){if(G1(r)||G1(e)||e<=0)return QOr(NaN);return t;function t(i){return G1(i)?NaN:KOr(r*i+.5*rTr(e*i,2))}}WR.exports=eTr});var JR=s((C2e,XR)=>{"use strict";var tTr=w(),zR=HR(),iTr=DR();tTr(zR,"factory",iTr);XR.exports=zR});var ZR=s((G2e,YR)=>{"use strict";var xR=E();function nTr(r,e){return xR(r)||xR(e)||e<=0?NaN:r}YR.exports=nTr});var QR=s((V2e,$R)=>{"use strict";var aTr=ZR();$R.exports=aTr});var eF=s((U2e,rF)=>{"use strict";var sTr=nr(),KR=H(),uTr=G(),oTr=Ve(),fTr=_(),V1=E();function vTr(r,e,t){var i,n,a;return V1(r)||V1(e)||V1(t)||t<0?NaN:t===0?r===e?fTr:0:(i=KR(t,2),n=1/uTr(i*oTr),a=-1/(2*i),n*sTr(a*KR(r-e,2)))}rF.exports=vTr});var nF=s((H2e,iF)=>{"use strict";var cTr=_(),tF=E();function lTr(r,e){return tF(r)||tF(e)?NaN:r===e?cTr:0}iF.exports=lTr});var uF=s((W2e,sF)=>{"use strict";var pTr=O(),gTr=_(),aF=E();function mTr(r){if(aF(r))return pTr(NaN);return e;function e(t){return aF(t)?NaN:t===r?gTr:0}}sF.exports=mTr});var vF=s((D2e,fF)=>{"use strict";var dTr=w(),oF=nF(),hTr=uF();dTr(oF,"factory",hTr);fF.exports=oF});var pF=s((z2e,lF)=>{"use strict";var qTr=O(),yTr=vF().factory,U1=E(),bTr=G(),wTr=nr(),cF=H(),ETr=Ve();function NTr(r,e){var t,i,n;if(U1(r)||U1(e)||e<0)return qTr(NaN);if(e===0)return yTr(r);return t=cF(e,2),i=1/bTr(t*ETr),n=-1/(2*t),a;function a(u){return U1(u)?NaN:i*wTr(n*cF(u-r,2))}}lF.exports=NTr});var dF=s((X2e,mF)=>{"use strict";var ATr=w(),gF=eF(),STr=pF();ATr(gF,"factory",STr);mF.exports=gF});var qF=s((J2e,hF)=>{"use strict";function OTr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}hF.exports=OTr});var bF=s((x2e,yF)=>{"use strict";function TTr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}yF.exports=TTr});var EF=s((Y2e,wF)=>{"use strict";function ITr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}wF.exports=ITr});var AF=s((Z2e,NF)=>{"use strict";function _Tr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}NF.exports=_Tr});var OF=s(($2e,SF)=>{"use strict";function LTr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}SF.exports=LTr});var LF=s((Q2e,_F)=>{"use strict";var PTr=E(),TF=G(),IF=P(),RTr=_(),FTr=V(),MTr=qF(),BTr=bF(),kTr=EF(),jTr=AF(),CTr=OF(),GTr=.08913147449493408,VTr=2.249481201171875,UTr=.807220458984375,HTr=.9399557113647461,WTr=.9836282730102539;function DTr(r){var e,t,i,n,a,u;return PTr(r)?NaN:r===1?RTr:r===-1?FTr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=MTr(t),e*(a*GTr+a*u)):n>=.25?(a=TF(-2*IF(n)),n-=.25,u=BTr(n),e*(a/(VTr+u))):(n=TF(-IF(n)),n<3?(i=n-1.125,u=kTr(i),e*(UTr*n+u*n)):n<6?(i=n-3,u=jTr(i),e*(HTr*n+u*n)):(i=n-6,u=CTr(i),e*(WTr*n+u*n))))}_F.exports=DTr});var H1=s((K2e,PF)=>{"use strict";var zTr=LF();PF.exports=zTr});var FF=s((r1e,RF)=>{"use strict";var XTr=H1(),W1=E(),JTr=G();function xTr(r,e,t){var i,n;return W1(e)||W1(t)||W1(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*JTr(2),i+n*XTr(2*r-1))}RF.exports=xTr});var BF=s((e1e,MF)=>{"use strict";var YTr=E();function ZTr(r,e){return YTr(r)||r<0||r>1?NaN:e}MF.exports=ZTr});var CF=s((t1e,jF)=>{"use strict";var $Tr=O(),kF=E();function QTr(r){if(kF(r))return $Tr(NaN);return e;function e(t){return kF(t)||t<0||t>1?NaN:r}}jF.exports=QTr});var D1=s((i1e,VF)=>{"use strict";var KTr=w(),GF=BF(),rIr=CF();KTr(GF,"factory",rIr);VF.exports=GF});var HF=s((n1e,UF)=>{"use strict";var eIr=O(),tIr=D1().factory,iIr=H1(),z1=E(),nIr=G();function aIr(r,e){var t,i;if(z1(r)||z1(e)||e<0)return eIr(NaN);return e===0&&tIr(r),t=r,i=e*nIr(2),n;function n(a){return z1(a)||a<0||a>1?NaN:t+i*iIr(2*a-1)}}UF.exports=aIr});var X1=s((a1e,DF)=>{"use strict";var sIr=w(),WF=FF(),uIr=HF();sIr(WF,"factory",uIr);DF.exports=WF});var JF=s((s1e,XF)=>{"use strict";var zF=E();function oIr(r,e){return zF(r)||zF(e)||e<=0?NaN:0}XF.exports=oIr});var YF=s((u1e,xF)=>{"use strict";var fIr=JF();xF.exports=fIr});var QF=s((o1e,$F)=>{"use strict";var ZF=E();function vIr(r,e){return ZF(r)||ZF(e)||e<=0?NaN:e}$F.exports=vIr});var rM=s((f1e,KF)=>{"use strict";var cIr=QF();KF.exports=cIr});var iM=s((v1e,tM)=>{"use strict";var eM=E();function lIr(r,e){return eM(r)||eM(e)||e<=0?NaN:e*e}tM.exports=lIr});var aM=s((c1e,nM)=>{"use strict";var pIr=iM();nM.exports=pIr});var uM=s((l1e,sM)=>{"use strict";var pr={};pr.normal={};pr.normal.cdf=AP();pr.normal.entropy=_P();pr.normal.kurtosis=MP();pr.normal.logcdf=vR();pr.normal.logpdf=LR();pr.normal.mean=BR();pr.normal.median=VR();pr.normal.mgf=JR();pr.normal.mode=QR();pr.normal.pdf=dF();pr.normal.quantile=X1();pr.normal.skewness=YF();pr.normal.stdev=rM();pr.normal.variance=aM();sM.exports=pr});var fM=s((p1e,oM)=>{"use strict";function gIr(r){var e,t,i;for(t=r.length,e=[],i=0;i<t;i++)e.push(r[i]);return e}oM.exports=gIr});var cM=s((g1e,vM)=>{"use strict";var mIr=fM();vM.exports=mIr});var gM=s((m1e,pM)=>{"use strict";var En=cM(),dIr=So(),lM=y();function hIr(r,e,t){var i,n,a,u,o,v,f,c;if(u=t.length,o=e.length,u<o)throw new Error("invalid argument. Cannot broadcast an array to a shape having fewer dimensions. Arrays can only be broadcasted to shapes having the same or more dimensions.");for(i=r,f=o;f<u;f++)i=[i];for(a=dIr(u),f=u-1;f>=0;f--)if(c=o-u+f,!(c<0)){if(v=e[c],n=t[f],n!==0&&n<v)throw new Error(lM("invalid argument. Input array cannot be broadcast to the specified shape, as the specified shape has a dimension whose size is less than the size of the corresponding dimension in the input array. Array shape: (%s). Desired shape: (%s). Dimension: %u.",En(e).join(", "),En(t).join(", "),f));if(v===n)a[f]=1;else if(v===1)a[f]=0;else throw new Error(lM("invalid argument. Input array and the specified shape are broadcast incompatible. Array shape: (%s). Desired shape: (%s). Dimension: %u.",En(e).join(", "),En(t).join(", "),f))}return{ref:r,data:i,shape:En(t),strides:a}}pM.exports=hIr});var dM=s((d1e,mM)=>{"use strict";var qIr=gM();mM.exports=qIr});var yM=s((h1e,qM)=>{"use strict";var hM=dM();function yIr(r,e,t){var i,n,a,u,o,v,f,c,l,p,m,h,d,g,q,N,A,j,T,X,vr;if(N=e[2],o=N[1],v=N[0],!(o<=0||v<=0))for(j=hM(r[0],e[0],N),T=j.data,A=j.strides,i=A[1],n=A[0],j=hM(r[1],e[1],N),X=j.data,A=j.strides,a=A[1],u=A[0],vr=r[2],p=0,h=0,c=0;c<v;c++){for(l=0,m=0,d=T[p],g=X[h],q=vr[c],f=0;f<o;f++)q[f]=t(d[l],g[m]),l+=i,m+=a;p+=n,h+=u}}qM.exports=yIr});var J1=s((q1e,bM)=>{"use strict";var bIr=yM();bM.exports=bIr});var AM=s((y1e,NM)=>{"use strict";var wM=k().isPrimitive,wIr=_(),EIr=V(),EM=y();function NIr(r,e){return t;function t(i,n){var a;if(!wM(i)){if(e.nonnumeric===void 0)throw new TypeError(EM("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!wM(n)){if(e.nonnumeric===void 0)throw new TypeError(EM("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===wIr?e.pinf:a===EIr?e.ninf:a}}NM.exports=NIr});var x1=s((b1e,SM)=>{"use strict";var AIr=AM();SM.exports=AIr});var TM=s((w1e,OM)=>{"use strict";var SIr=w2(),OIr=J1(),TIr=u1(),IIr=y(),_Ir=s1(),LIr=x1(),PIr=["number","number"],RIr=["First argument","Second argument"];function FIr(r,e){var t,i,n,a,u,o;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},o=2;o<r.length;o+=2)if(u=r[o],u==="nonnumeric"||u==="nan"||u==="pinf"||u==="ninf")i[u]=r[o+1];else throw new Error(IIr("invalid argument. Unrecognized option name. Value: %s.",String(u)));if(r=_Ir([r[0],r[1]],PIr,RIr),t=SIr(r[1]),t===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");return n=TIr(t),a=LIr(e,i),r[0].push(n),r[1].push(t),OIr(r[0],r[1],a),n}OM.exports=FIr});var _M=s((E1e,IM)=>{"use strict";var MIr=TM();IM.exports=MIr});var PM=s((N1e,LM)=>{"use strict";var BIr=k().isPrimitive,kIr=_(),jIr=V(),CIr=y();function GIr(r,e){return t;function t(i){var n;if(!BIr(i)){if(e.nonnumeric===void 0)throw new TypeError(CIr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===kIr?e.pinf:n===jIr?e.ninf:n}}LM.exports=GIr});var Y1=s((A1e,RM)=>{"use strict";var VIr=PM();RM.exports=VIr});var MM=s((S1e,FM)=>{"use strict";var Z1=k().isPrimitive,UIr=_(),HIr=V(),$1=y();function WIr(r,e){return t;function t(i,n,a){var u;if(!Z1(i)){if(e.nonnumeric===void 0)throw new TypeError($1("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Z1(n)){if(e.nonnumeric===void 0)throw new TypeError($1("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Z1(a)){if(e.nonnumeric===void 0)throw new TypeError($1("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===UIr?e.pinf:u===HIr?e.ninf:u}}FM.exports=WIr});var kM=s((O1e,BM)=>{"use strict";var DIr=MM();BM.exports=DIr});var CM=s((T1e,jM)=>{"use strict";var i0=k().isPrimitive,zIr=_(),XIr=V(),n0=y();function JIr(r,e){return t;function t(i,n,a,u){var o;if(!i0(i)){if(e.nonnumeric===void 0)throw new TypeError(n0("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!i0(n)){if(e.nonnumeric===void 0)throw new TypeError(n0("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!i0(a)){if(e.nonnumeric===void 0)throw new TypeError(n0("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!i0(u)){if(e.nonnumeric===void 0)throw new TypeError(n0("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}return o=r(i,n,a,u),o!==o?e.nan:o===zIr?e.pinf:o===XIr?e.ninf:o}}jM.exports=JIr});var VM=s((I1e,GM)=>{"use strict";var xIr=CM();GM.exports=xIr});var HM=s((_1e,UM)=>{"use strict";var Nn=k().isPrimitive,YIr=_(),ZIr=V(),An=y();function $Ir(r,e){return t;function t(i,n,a,u,o){var v;if(!Nn(i)){if(e.nonnumeric===void 0)throw new TypeError(An("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Nn(n)){if(e.nonnumeric===void 0)throw new TypeError(An("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Nn(a)){if(e.nonnumeric===void 0)throw new TypeError(An("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}if(!Nn(u)){if(e.nonnumeric===void 0)throw new TypeError(An("invalid argument. Fourth argument must be a number or a range of numbers. Value: %s.",String(u)));return e.nonnumeric}if(!Nn(o)){if(e.nonnumeric===void 0)throw new TypeError(An("invalid argument. Fifth argument must be a number or a range of numbers. Value: %s.",String(o)));return e.nonnumeric}return v=r(i,n,a,u,o),v!==v?e.nan:v===YIr?e.pinf:v===ZIr?e.ninf:v}}UM.exports=$Ir});var DM=s((L1e,WM)=>{"use strict";var QIr=HM();WM.exports=QIr});var XM=s((P1e,zM)=>{"use strict";function KIr(r,e,t){var i,n,a,u,o,v,f,c;if(i=e[1],n=e[0],!(i<=0||n<=0))for(f=r[0],c=r[1],u=0;u<n;u++)for(o=f[u],v=c[u],a=0;a<i;a++)v[a]=t(o[a])}zM.exports=KIr});var Q1=s((R1e,JM)=>{"use strict";var r_r=XM();JM.exports=r_r});var YM=s((F1e,xM)=>{"use strict";var e_r=cr(),t_r=Q1(),i_r=y(),n_r=Y1();function a_r(r,e){var t,i,n,a,u;for(i={nonnumeric:void 0,nan:NaN,pinf:1/0,ninf:-1/0},t=r[0],u=1;u<r.length;u+=2)if(a=r[u],a==="nonnumeric"||a==="nan"||a==="pinf"||a==="ninf")i[a]=r[u+1];else throw new Error(i_r("invalid argument. Unrecognized option name. Value: %s.",String(a)));return n=n_r(e,i),e_r(t)?(t_r([t,t],[t.length,t[0].length],n),t):n(t)}xM.exports=a_r});var $M=s((M1e,ZM)=>{"use strict";var s_r=YM();ZM.exports=s_r});var KM=s((B1e,QM)=>{"use strict";var Ze={};Ze.binary=_M();Ze.d_d=Y1();Ze.dd_d=x1();Ze.ddd_d=kM();Ze.dddd_d=VM();Ze.ddddd_d=DM();Ze.unary=$M();QM.exports=Ze});var tB=s((k1e,eB)=>{"use strict";var rB={};rB.tools=KM();eB.exports=rB});var nB=s((j1e,iB)=>{"use strict";var u_r=Be();function o_r(r,e,t,i){u_r(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}iB.exports=o_r});var M=s((C1e,aB)=>{"use strict";var f_r=nB();aB.exports=f_r});var oB=s((G1e,uB)=>{"use strict";var sB=65535;function v_r(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&sB)>>>0,o=(e&sB)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}uB.exports=v_r});var vB=s((V1e,fB)=>{"use strict";var c_r=oB();fB.exports=c_r});var K1=s((U1e,cB)=>{"use strict";function l_r(r,e,t,i,n,a,u){var o,v,f,c,l,p,m;for(o=e.data,v=n.data,c=e.accessors[0],f=n.accessors[1],l=i,p=u,m=0;m<r;m++)f(v,p,c(o,l)),l+=t,p+=a;return e}cB.exports=l_r});var gB=s((H1e,pB)=>{"use strict";var lB=Ya(),p_r=K1(),r3=8;function g_r(r,e,t,i,n){var a,u,o,v,f,c;if(r<=0)return i;if(o=lB(e),v=lB(i),o.accessorProtocol||v.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,p_r(r,o,t,a,v,n,u),v.data;if(t===1&&n===1){if(f=r%r3,f>0)for(c=0;c<f;c++)i[c]=e[c];if(r<r3)return i;for(c=f;c<r;c+=r3)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}pB.exports=g_r});var hB=s((W1e,dB)=>{"use strict";var mB=Ya(),m_r=K1(),Sn=8;function d_r(r,e,t,i,n,a,u){var o,v,f,c,l,p;if(r<=0)return n;if(f=mB(e),c=mB(n),f.accessorProtocol||c.accessorProtocol)return m_r(r,f,t,i,c,a,u),c.data;if(o=i,v=u,t===1&&a===1){if(l=r%Sn,l>0)for(p=0;p<l;p++)n[v]=e[o],o+=t,v+=a;if(r<Sn)return n;for(p=l;p<r;p+=Sn)n[v]=e[o],n[v+1]=e[o+1],n[v+2]=e[o+2],n[v+3]=e[o+3],n[v+4]=e[o+4],n[v+5]=e[o+5],n[v+6]=e[o+6],n[v+7]=e[o+7],o+=Sn,v+=Sn;return n}for(p=0;p<r;p++)n[v]=e[o],o+=t,v+=a;return n}dB.exports=d_r});var $e=s((D1e,yB)=>{"use strict";var h_r=w(),qB=gB(),q_r=hB();h_r(qB,"ndarray",q_r);yB.exports=qB});var wB=s((z1e,bB)=>{"use strict";function y_r(){}bB.exports=y_r});var NB=s((X1e,EB)=>{"use strict";var b_r=wB();function w_r(){return b_r.name==="foo"}EB.exports=w_r});var SB=s((J1e,AB)=>{"use strict";var E_r=NB();AB.exports=E_r});var TB=s((x1e,OB)=>{"use strict";var N_r=L(),A_r=SB(),S_r=y(),O_r=Xu().REGEXP,T_r=A_r();function I_r(r){if(N_r(r)===!1)throw new TypeError(S_r("invalid argument. Must provide a function. Value: `%s`.",r));return T_r?r.name:O_r.exec(r.toString())[1]}OB.exports=I_r});var _B=s((Y1e,IB)=>{"use strict";var __r=TB();IB.exports=__r});var PB=s((Z1e,LB)=>{"use strict";var L_r=un(),P_r=Jt(),R_r=sn(),F_r=an(),M_r=xt(),B_r=_t(),k_r=lr(),j_r=ne(),C_r=mr(),G_r=[C_r,j_r,B_r,k_r,F_r,M_r,L_r,P_r,R_r];LB.exports=G_r});var RB=s(($1e,V_r)=>{V_r.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var CB=s((Q1e,jB)=>{"use strict";var U_r=ke(),H_r=_B(),BB=wt(),W_r=Qu(),D_r=mr(),FB=PB(),MB=RB(),a0=W_r()?BB(D_r):kB;a0=H_r(a0)==="TypedArray"?a0:kB;function kB(){}function z_r(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof a0)return!0;for(t=0;t<FB.length;t++)if(r instanceof FB[t])return!0;for(;r;){for(e=U_r(r),t=0;t<MB.length;t++)if(MB[t]===e)return!0;r=BB(r)}return!1}jB.exports=z_r});var VB=s((K1e,GB)=>{"use strict";var X_r=CB();GB.exports=X_r});var HB=s((r3e,UB)=>{"use strict";var J_r=cn(),x_r=pn(),Y_r=[x_r,J_r];UB.exports=Y_r});var WB=s((e3e,Z_r)=>{Z_r.exports=["Complex64Array","Complex128Array"]});var JB=s((t3e,XB)=>{"use strict";var $_r=ke(),Q_r=wt(),DB=HB(),zB=WB();function K_r(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<DB.length;t++)if(r instanceof DB[t])return!0;for(;r;){for(e=$_r(r),t=0;t<zB.length;t++)if(zB[t]===e)return!0;r=Q_r(r)}return!1}XB.exports=K_r});var YB=s((i3e,xB)=>{"use strict";var rLr=JB();xB.exports=rLr});var $B=s((n3e,ZB)=>{"use strict";var eLr=y();function tLr(r,e){if(typeof e!="function")throw new TypeError(eLr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}ZB.exports=tLr});var KB=s((a3e,QB)=>{"use strict";var iLr=$B();QB.exports=iLr});var ek=s((s3e,rk)=>{"use strict";var nLr=un(),aLr=Jt(),sLr=sn(),uLr=an(),oLr=xt(),fLr=_t(),vLr=lr(),cLr=ne(),lLr=mr(),pLr=cn(),gLr=pn(),mLr=[[lLr,"Float64Array"],[cLr,"Float32Array"],[fLr,"Int32Array"],[vLr,"Uint32Array"],[uLr,"Int16Array"],[oLr,"Uint16Array"],[nLr,"Int8Array"],[aLr,"Uint8Array"],[sLr,"Uint8ClampedArray"],[pLr,"Complex64Array"],[gLr,"Complex128Array"]];rk.exports=mLr});var ik=s((u3e,tk)=>{"use strict";var dLr=KB(),hLr=ke(),qLr=wt(),qi=ek();function yLr(r){var e,t;for(t=0;t<qi.length;t++)if(dLr(r,qi[t][0]))return qi[t][1];for(;r;){for(e=hLr(r),t=0;t<qi.length;t++)if(e===qi[t][1])return qi[t][1];r=qLr(r)}}tk.exports=yLr});var ak=s((o3e,nk)=>{"use strict";var bLr=VB(),wLr=YB(),ELr=ni(),NLr=ai(),ALr=y(),SLr=ik();function OLr(r){var e,t,i;if(bLr(r))e=r;else if(wLr(r))r.BYTES_PER_ELEMENT===8?e=ELr(r,0):e=NLr(r,0);else throw new TypeError(ALr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:SLr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}nk.exports=OLr});var B=s((f3e,sk)=>{"use strict";var TLr=ak();sk.exports=TLr});var e3=s((v3e,uk)=>{"use strict";var ILr=Wt(),_Lr=Q(),LLr=ILr-1;function PLr(){var r=_Lr(1+LLr*Math.random());return r>>>0}uk.exports=PLr});var f3=s((c3e,qk)=>{"use strict";var se=w(),Qe=R(),ok=M(),t3=S(),RLr=I(),FLr=Cr(),fk=$r(),MLr=or().isPrimitive,vk=ie().isPrimitive,mk=nn(),dk=Wt(),yr=lr(),BLr=Zo(),o3=vB(),yi=$e(),kLr=B(),wr=y(),ck=e3(),ar=624,i3=397,lk=dk>>>0,jLr=19650218>>>0,n3=2147483648>>>0,a3=2147483647>>>0,CLr=1812433253>>>0,GLr=1664525>>>0,VLr=1566083941>>>0,ULr=2636928640>>>0,HLr=4022730752>>>0,WLr=2567483615>>>0,s3=[0>>>0,WLr>>>0],hk=1/(mk+1),DLr=67108864>>>0,zLr=2147483648>>>0,u3=1>>>0,XLr=mk*hk,s0=1,u0=3,Ke=2,rt=ar+3,br=ar+5,On=ar+6;function pk(r,e){var t;return e?t="option":t="argument",r.length<On+1?new RangeError(wr("invalid %s. `state` array has insufficient length.",t)):r[0]!==s0?new RangeError(wr("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,s0,r[0])):r[1]!==u0?new RangeError(wr("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,u0,r[1])):r[Ke]!==ar?new RangeError(wr("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ar,r[Ke])):r[rt]!==1?new RangeError(wr("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[rt])):r[br]!==r.length-On?new RangeError(wr("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-On,r[br])):null}function gk(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=o3(t,CLr)+i>>>0;return r}function JLr(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=BLr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=o3(n,GLr)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=o3(n,VLr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=zLr,r}function xLr(r){var e,t,i,n;for(n=ar-i3,t=0;t<n;t++)e=r[t]&n3|r[t+1]&a3,r[t]=r[t+i3]^e>>>1^s3[e&u3];for(i=ar-1;t<i;t++)e=r[t]&n3|r[t+1]&a3,r[t]=r[t-n]^e>>>1^s3[e&u3];return e=r[i]&n3|r[0]&a3,r[i]=r[i3-1]^e>>>1^s3[e&u3],r}function YLr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!RLr(r))throw new TypeError(wr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(t3(r,"copy")&&(i.copy=r.copy,!MLr(r.copy)))throw new TypeError(wr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(t3(r,"state")){if(t=r.state,i.state=!0,!fk(t))throw new TypeError(wr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=pk(t,!0),u)throw u;i.copy===!1?e=t:(e=new yr(t.length),yi(t.length,t,1,e,1)),t=new yr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,t[br])}if(n===void 0)if(t3(r,"seed"))if(n=r.seed,i.seed=!0,vk(n)){if(n>lk)throw new RangeError(wr("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(FLr(n)===!1||n.length<1)throw new TypeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!vk(n))throw new TypeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>lk)throw new RangeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new yr(On+a),e[0]=s0,e[1]=u0,e[Ke]=ar,e[rt]=1,e[rt+1]=ar,e[br]=a,yi.ndarray(a,n,1,0,e,1,br+1),t=new yr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,a),t=gk(t,ar,jLr),t=JLr(t,ar,n,a)}else n=ck()>>>0}else n=ck()>>>0;return t===void 0&&(e=new yr(On+1),e[0]=s0,e[1]=u0,e[Ke]=ar,e[rt]=1,e[rt+1]=ar,e[br]=1,e[br+1]=n,t=new yr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,1),t=gk(t,ar,n)),se(h,"NAME","mt19937"),Qe(h,"seed",o),Qe(h,"seedLength",v),ok(h,"state",l,p),Qe(h,"stateLength",f),Qe(h,"byteLength",c),se(h,"toJSON",m),se(h,"MIN",0),se(h,"MAX",dk),se(h,"normalized",d),se(d,"NAME",h.NAME),Qe(d,"seed",o),Qe(d,"seedLength",v),ok(d,"state",l,p),Qe(d,"stateLength",f),Qe(d,"byteLength",c),se(d,"toJSON",m),se(d,"MIN",0),se(d,"MAX",XLr),h;function o(){var g=e[br];return yi(g,n,1,new yr(g),1)}function v(){return e[br]}function f(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return yi(g,e,1,new yr(g),1)}function p(g){var q;if(!fk(g))throw new TypeError(wr("invalid argument. Must provide a Uint32Array. Value: `%s`.",g));if(q=pk(g,!1),q)throw q;i.copy===!1?i.state&&g.length===e.length?yi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new yr(g.length)),yi(g.length,g,1,e,1)),t=new yr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,ar),n=new yr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,e[br])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=kLr(e),g.params=[],g}function h(){var g,q;return q=e[rt+1],q>=ar&&(t=xLr(t),q=0),g=t[q],e[rt+1]=q+1,g^=g>>>11,g^=g<<7&ULr,g^=g<<15&HLr,g^=g>>>18,g>>>0}function d(){var g=h()>>>5,q=h()>>>6;return(g*DLr+q)*hk}}qk.exports=YLr});var bk=s((l3e,yk)=>{"use strict";var ZLr=f3(),$Lr=e3(),QLr=ZLr({seed:$Lr()});yk.exports=QLr});var D=s((p3e,Ek)=>{"use strict";var KLr=w(),wk=bk(),rPr=f3();KLr(wk,"factory",rPr);Ek.exports=wk});var Ok=s((g3e,Sk)=>{"use strict";var Nk=k().isPrimitive,v3=y(),Ak=sr();function ePr(r,e){return!Nk(r)||Ak(r)?new TypeError(v3("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Nk(e)||Ak(e)?new TypeError(v3("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(v3("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}Sk.exports=ePr});var Ik=s((m3e,Tk)=>{"use strict";var tPr=H(),iPr=St(),nPr=za();function aPr(r,e,t){return e+tPr(iPr(nPr*r()),2)*(t-e)}Tk.exports=aPr});var c3=s((d3e,kk)=>{"use strict";var ue=w(),o0=R(),_k=M(),Lk=I(),Pk=L(),Rk=S(),Fk=O(),sPr=C(),f0=D().factory,Mk=E(),uPr=B(),v0=y(),oPr=Ok(),Bk=Ik();function fPr(){var r,e,t,i,n,a;if(arguments.length===0)e=f0();else if(arguments.length===1){if(r=arguments[0],!Lk(r))throw new TypeError(v0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Rk(r,"prng")){if(!Pk(r.prng))throw new TypeError(v0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=f0(r)}else{if(n=arguments[0],a=arguments[1],i=oPr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Lk(r))throw new TypeError(v0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Rk(r,"prng")){if(!Pk(r.prng))throw new TypeError(v0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=f0(r)}else e=f0()}return n===void 0?t=h:t=m,ue(t,"NAME","arcsine"),r&&r.prng?(ue(t,"seed",null),ue(t,"seedLength",null),_k(t,"state",Fk(null),sPr),ue(t,"stateLength",null),ue(t,"byteLength",null),ue(t,"toJSON",Fk(null)),ue(t,"PRNG",e)):(o0(t,"seed",u),o0(t,"seedLength",o),_k(t,"state",c,l),o0(t,"stateLength",v),o0(t,"byteLength",f),ue(t,"toJSON",p),ue(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=uPr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return Bk(e,n,a)}function h(d,g){return Mk(d)||Mk(g)||d>=g?NaN:Bk(e,d,g)}}kk.exports=fPr});var Ck=s((h3e,jk)=>{"use strict";var vPr=c3(),cPr=vPr();jk.exports=cPr});var Uk=s((q3e,Vk)=>{"use strict";var lPr=w(),Gk=Ck(),pPr=c3();lPr(Gk,"factory",pPr);Vk.exports=Gk});var l3=s((y3e,Jk)=>{"use strict";var oe=w(),c0=R(),Hk=M(),Wk=I(),gPr=dn().isPrimitive,Dk=L(),zk=S(),Xk=O(),mPr=C(),l0=D().factory,dPr=E(),hPr=B(),p0=y();function qPr(){var r,e,t,i;if(arguments.length===0)e=l0();else if(arguments.length===1&&Wk(arguments[0]))if(r=arguments[0],zk(r,"prng")){if(!Dk(r.prng))throw new TypeError(p0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=l0(r);else{if(i=arguments[0],!gPr(i))throw new TypeError(p0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!Wk(r))throw new TypeError(p0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zk(r,"prng")){if(!Dk(r.prng))throw new TypeError(p0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=l0(r)}else e=l0()}return i===void 0?t=p:t=l,oe(t,"NAME","bernoulli"),r&&r.prng?(oe(t,"seed",null),oe(t,"seedLength",null),Hk(t,"state",Xk(null),mPr),oe(t,"stateLength",null),oe(t,"byteLength",null),oe(t,"toJSON",Xk(null)),oe(t,"PRNG",e)):(c0(t,"seed",n),c0(t,"seedLength",a),Hk(t,"state",v,f),c0(t,"stateLength",u),c0(t,"byteLength",o),oe(t,"toJSON",c),oe(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=hPr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return dPr(m)||m<0||m>1?NaN:e()<=m?1:0}}Jk.exports=qPr});var Yk=s((b3e,xk)=>{"use strict";var yPr=l3(),bPr=yPr();xk.exports=bPr});var Qk=s((w3e,$k)=>{"use strict";var wPr=w(),Zk=Yk(),EPr=l3();wPr(Zk,"factory",EPr);$k.exports=Zk});var tj=s((E3e,ej)=>{"use strict";var NPr=G(),Kk=nr(),APr=P(),rj=.00991256303526217;function SPr(r,e){var t,i,n;for(i=Kk(-.5*e*e),t=[],t.push(rj/i),t.push(e),n=2;n<r;n++)t[n]=NPr(-2*APr(rj/t[n-1]+i)),i=Kk(-.5*t[n]*t[n]);return t.push(0),t}ej.exports=SPr});var nj=s((N3e,ij)=>{"use strict";function OPr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}ij.exports=OPr});var uj=s((A3e,sj)=>{"use strict";var aj=P();function TPr(r,e,t){var i,n;do i=aj(r())/e,n=aj(r());while(-2*n<i*i);return t?i-e:e-i}sj.exports=TPr});var cj=s((S3e,vj)=>{"use strict";var IPr=J(),oj=nr(),_Pr=tj(),LPr=nj(),PPr=uj(),RPr=128,fj=3.442619855899,Ct=_Pr(RPr,fj),FPr=LPr(Ct),MPr=127;function BPr(r,e){return t;function t(){for(var i,n,a,u,o,v,f;;){if(o=2*r()-1,v=e()&MPr,IPr(o)<FPr[v])return o*Ct[v];if(v===0)return PPr(r,fj,o<0);if(u=o*Ct[v],a=u*u,f=v+1,i=oj(-.5*(Ct[v]*Ct[v]-a)),n=oj(-.5*(Ct[f]*Ct[f]-a)),n+r()*(i-n)<1)return u}}}vj.exports=BPr});var g3=s((O3e,gj)=>{"use strict";var et=w(),g0=R(),lj=M(),kPr=L(),jPr=I(),CPr=or().isPrimitive,m0=S(),GPr=$r(),p3=D().factory,pj=O(),VPr=C(),UPr=Q(),HPr=Wt(),WPr=B(),Tn=y(),DPr=cj();function zPr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!jPr(r))throw new TypeError(Tn("invalid argument. Must provide an object. Value: `%s`.",r));if(m0(r,"copy")&&(n.copy=r.copy,!CPr(r.copy)))throw new TypeError(Tn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(m0(r,"prng")){if(!kPr(r.prng))throw new TypeError(Tn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(m0(r,"state")){if(n.state=r.state,!GPr(r.state))throw new TypeError(Tn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(m0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Tn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=p3(n),e=t.normalized):(t=p3({seed:UPr(1+HPr*e()),copy:n.copy}),n.seed=null):(t=p3(n),e=t.normalized),i=DPr(e,t),et(i,"NAME","improved-ziggurat"),n.seed===null?(et(i,"seed",null),et(i,"seedLength",null)):(g0(i,"seed",a),g0(i,"seedLength",u)),r&&r.prng?(lj(i,"state",pj(null),VPr),et(i,"stateLength",null),et(i,"byteLength",null),et(i,"toJSON",pj(null))):(lj(i,"state",f,c),g0(i,"stateLength",o),g0(i,"byteLength",v),et(i,"toJSON",l)),et(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=WPr(t.state),p.params=[],p}}gj.exports=zPr});var dj=s((T3e,mj)=>{"use strict";var XPr=g3(),JPr=XPr();mj.exports=JPr});var tt=s((I3e,qj)=>{"use strict";var xPr=w(),hj=dj(),YPr=g3();xPr(hj,"factory",YPr);qj.exports=hj});var bj=s((_3e,yj)=>{"use strict";var ZPr=L(),$Pr=ZPr(Object.assign);yj.exports=$Pr});var Ej=s((L3e,wj)=>{"use strict";var QPr=Object.assign;wj.exports=QPr});var Aj=s((P3e,Nj)=>{"use strict";var KPr=typeof Object.getOwnPropertySymbols<"u";Nj.exports=KPr});var Tj=s((R3e,Oj)=>{"use strict";var Sj=Xt(),rRr=Sj.getOwnPropertySymbols;function eRr(r){return rRr(Sj(r))}Oj.exports=eRr});var _j=s((F3e,Ij)=>{"use strict";function tRr(){return[]}Ij.exports=tRr});var Pj=s((M3e,Lj)=>{"use strict";var iRr=Aj(),nRr=Tj(),aRr=_j(),m3;iRr?m3=nRr:m3=aRr;Lj.exports=m3});var Fj=s((B3e,Rj)=>{"use strict";var sRr=zt(),uRr=Pj(),oRr=Wi();function fRr(r){var e,t,i;for(e=sRr(r),t=uRr(r),i=0;i<t.length;i++)oRr(r,t[i])&&e.push(t[i]);return e}Rj.exports=fRr});var Bj=s((k3e,Mj)=>{"use strict";var vRr=Fj();Mj.exports=vRr});var Cj=s((j3e,jj)=>{"use strict";var cRr=Bj(),kj=Xt(),lRr=y();function pRr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(lRr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=kj(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=cRr(kj(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}jj.exports=pRr});var In=s((C3e,Gj)=>{"use strict";var gRr=bj(),mRr=Ej(),dRr=Cj(),d3;gRr?d3=mRr:d3=dRr;Gj.exports=d3});var Wj=s((G3e,Hj)=>{"use strict";var Vj=W().isPrimitive,Uj=y();function hRr(r,e){return Vj(r)?Vj(e)?null:new TypeError(Uj("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Uj("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Hj.exports=hRr});var xj=s((V3e,Jj)=>{"use strict";var Dj=P(),zj=G(),qRr=H(),Xj=1/3;function yRr(r,e,t){var i,n,a,u,o,v,f,c,l,p;for(t<1?(v=t+1-Xj,o=1/zj(9*v),c=qRr(r(),1/t)):(v=t-Xj,o=1/zj(9*v),c=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,n=f*f,a=1-.331*n*n,u=.5*n+v*(1-p+Dj(p)),l=r(),(l<a||Dj(l)<u)&&(i=!1)}return v*p*c}Jj.exports=yRr});var $j=s((U3e,Zj)=>{"use strict";var h3=H(),Yj=P();function bRr(r,e,t){var i,n,a,u,o,v,f,c;for(a=t-1,o=h3(a+a,.5),i=!0;i===!0;)u=e(),f=.5*(1+u/o),f>=0&&f<=1&&(v=r(),n=h3(u,4),c=8*t-12,c=1-n/c,v<=c?i=!1:(c+=.5*h3(n/(8*t-8),2),v<c&&(c=a*Yj(4*f*(1-f)),c+=u*u/2,c>=Yj(v)&&(i=!1))));return f}Zj.exports=bRr});var Kj=s((H3e,Qj)=>{"use strict";var wRr=H(),d0=P();function ERr(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h;for(o=t-1,v=i-1,f=o+v,c=f*d0(f),u=o/f,n=.5/wRr(f,.5),a=!0;a===!0;)l=e(),m=u+l*n,m>=0&&m<=1&&(p=r(),h=o*d0(m/o),h+=v*d0((1-m)/v),h+=c+.5*l*l,h>=d0(p)&&(a=!1));return m}Qj.exports=ERr});var tC=s((W3e,eC)=>{"use strict";var q3=nr(),rC=H(),y3=P();function NRr(r,e,t){for(var i,n,a,u,o,v,f;;)if(u=r(),o=r(),v=rC(u,1/e),f=rC(o,1/t),a=v+f,a<=1)return a>0?v/a:(i=y3(u)/e,n=y3(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),q3(i-y3(q3(i)+q3(n))))}eC.exports=NRr});var aC=s((D3e,nC)=>{"use strict";var iC=xj(),ARr=$j(),SRr=Kj(),ORr=tC();function TRr(r,e,t,i){var n,a;return t===i&&t>1.5?ARr(r,e,t):t>1&&i>1?SRr(r,e,t,i):t<1&&i<1?ORr(r,t,i):(n=iC(r,e,t),a=iC(r,e,i),n/(n+a))}nC.exports=TRr});var N3=s((z3e,mC)=>{"use strict";var fe=w(),h0=R(),sC=M(),uC=I(),oC=or().isPrimitive,fC=L(),bi=S(),vC=O(),IRr=C(),cC=tt().factory,q0=D().factory,lC=E(),b3=$e(),w3=lr(),E3=$r(),pC=In(),_Rr=B(),ve=y(),LRr=Wj(),gC=aC();function PRr(){var r,e,t,i,n,a,u,o,v;if(o=!0,arguments.length===0)n={copy:!1},a=q0(n);else if(arguments.length===1){if(n=arguments[0],!uC(n))throw new TypeError(ve("invalid argument. Options argument must be an object. Value: `%s`.",n));if(bi(n,"copy")&&!oC(n.copy))throw new TypeError(ve("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(bi(n,"prng")){if(!fC(n.prng))throw new TypeError(ve("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(bi(n,"state")&&!E3(n.state))throw new TypeError(ve("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=pC({},n),n.copy===!1?o=!1:n.state&&(n.state=b3(n.state.length,n.state,1,new w3(n.state.length),1)),n.copy=!1,a=q0(n)}}else{if(t=arguments[0],i=arguments[1],v=LRr(t,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!uC(n))throw new TypeError(ve("invalid argument. Options argument must be an object. Value: `%s`.",n));if(bi(n,"copy")&&!oC(n.copy))throw new TypeError(ve("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(bi(n,"prng")){if(!fC(n.prng))throw new TypeError(ve("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(bi(n,"state")&&!E3(n.state))throw new TypeError(ve("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=pC({},n),n.copy===!1?o=!1:n.state&&(n.state=b3(n.state.length,n.state,1,new w3(n.state.length),1)),n.copy=!1,a=q0(n)}}else n={copy:!1},a=q0(n)}return n&&n.prng?e=cC({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=cC({state:r,copy:!1})),t===void 0?u=q:u=g,fe(u,"NAME","beta"),n&&n.prng?(fe(u,"seed",null),fe(u,"seedLength",null),sC(u,"state",vC(null),IRr),fe(u,"stateLength",null),fe(u,"byteLength",null),fe(u,"toJSON",vC(null)),fe(u,"PRNG",a)):(h0(u,"seed",f),h0(u,"seedLength",c),sC(u,"state",m,h),h0(u,"stateLength",l),h0(u,"byteLength",p),fe(u,"toJSON",d),fe(u,"PRNG",a),a=a.normalized),u;function f(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function m(){return a.state}function h(N){if(!E3(N))throw new TypeError(ve("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=b3(N.length,N,1,new w3(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=_Rr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function g(){return gC(a,e,t,i)}function q(N,A){return lC(N)||lC(A)||N<=0||A<=0?NaN:gC(a,e,N,A)}}mC.exports=PRr});var hC=s((X3e,dC)=>{"use strict";var RRr=N3(),FRr=RRr();dC.exports=FRr});var bC=s((J3e,yC)=>{"use strict";var MRr=w(),qC=hC(),BRr=N3();MRr(qC,"factory",BRr);yC.exports=qC});var AC=s((x3e,NC)=>{"use strict";var wC=W().isPrimitive,EC=y();function kRr(r,e){return wC(r)?wC(e)?null:new TypeError(EC("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(EC("invalid argument. First argument must be a positive number. Value: `%s`.",r))}NC.exports=kRr});var TC=s((Y3e,OC)=>{"use strict";var SC=P();function jRr(r,e,t,i,n){var a,u,o,v,f,c,l;for(a=!0;a;){do f=e(),l=1+n*f;while(l<=0);l*=l*l,u=f*f,o=1-.331*u*u,v=.5*u+i*(1-l+SC(l)),c=r(),(c<o||SC(c)<v)&&(a=!1)}return 1/t*i*l}OC.exports=jRr});var I3=s((Z3e,jC)=>{"use strict";var ce=w(),y0=R(),IC=M(),_C=I(),A3=$r(),LC=or().isPrimitive,PC=L(),wi=S(),RC=O(),CRr=C(),FC=tt().factory,b0=D().factory,MC=E(),S3=G(),BC=H(),O3=$e(),T3=lr(),GRr=B(),kC=In(),le=y(),VRr=AC(),w0=TC(),E0=1/3;function URr(){var r,e,t,i,n,a,u,o,v,f,c;if(o=!0,arguments.length===0)n={copy:!1},a=b0(n);else if(arguments.length===1){if(n=arguments[0],!_C(n))throw new TypeError(le("invalid argument. Options argument must be an object. Value: `%s`.",n));if(wi(n,"copy")&&!LC(n.copy))throw new TypeError(le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(wi(n,"prng")){if(!PC(n.prng))throw new TypeError(le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(wi(n,"state")&&!A3(n.state))throw new TypeError(le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=kC({},n),n.copy===!1?o=!1:n.state&&(n.state=O3(n.state.length,n.state,1,new T3(n.state.length),1)),n.copy=!1,a=b0(n)}}else{if(e=arguments[0],i=arguments[1],v=VRr(e,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!_C(n))throw new TypeError(le("invalid argument. Options argument must be an object. Value: `%s`.",n));if(wi(n,"copy")&&!LC(n.copy))throw new TypeError(le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(wi(n,"prng")){if(!PC(n.prng))throw new TypeError(le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(wi(n,"state")&&!A3(n.state))throw new TypeError(le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=kC({},n),n.copy===!1?o=!1:n.state&&(n.state=O3(n.state.length,n.state,1,new T3(n.state.length),1)),n.copy=!1,a=b0(n)}}else n={copy:!1},a=b0(n)}return n&&n.prng?t=FC({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=FC({state:r,copy:!1})),e===void 0?u=j:(e>=1?(u=N,c=e-E0):(u=A,c=e+1-E0),f=1/S3(9*c)),ce(u,"NAME","gamma"),n&&n.prng?(ce(u,"seed",null),ce(u,"seedLength",null),IC(u,"state",RC(null),CRr),ce(u,"stateLength",null),ce(u,"byteLength",null),ce(u,"toJSON",RC(null)),ce(u,"PRNG",a)):(y0(u,"seed",l),y0(u,"seedLength",p),IC(u,"state",d,g),y0(u,"stateLength",m),y0(u,"byteLength",h),ce(u,"toJSON",q),ce(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function m(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function g(T){if(!A3(T))throw new TypeError(le("invalid argument. Must provide a Uint32Array. Value: `%s`.",T));o&&(T=O3(T.length,T,1,new T3(T.length),1)),a.state=T}function q(){var T={};return T.type="PRNG",T.name=u.NAME,T.state=GRr(a.state),e===void 0?T.params=[]:T.params=[e,i],T}function N(){return w0(a,t,i,c,f)}function A(){return w0(a,t,i,c,f)*BC(a(),1/e)}function j(T,X){var vr,$;return MC(T)||MC(X)||T<=0||X<=0?NaN:T<1?($=T+1-E0,vr=1/S3(9*$),w0(a,t,X,$,vr)*BC(a(),1/T)):($=T-E0,vr=1/S3(9*$),w0(a,t,X,$,vr))}}jC.exports=URr});var GC=s(($3e,CC)=>{"use strict";var HRr=I3(),WRr=HRr();CC.exports=WRr});var Ei=s((Q3e,UC)=>{"use strict";var DRr=w(),VC=GC(),zRr=I3();DRr(VC,"factory",zRr);UC.exports=VC});var zC=s((K3e,DC)=>{"use strict";var HC=W().isPrimitive,WC=y();function XRr(r,e){return HC(r)?HC(e)?null:new TypeError(WC("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(WC("invalid argument. First argument must be a positive number. Value: `%s`.",r))}DC.exports=XRr});var JC=s((rfe,XC)=>{"use strict";function JRr(r,e,t){return r(e,1)/r(t,1)}XC.exports=JRr});var _3=s((efe,rG)=>{"use strict";var it=w(),N0=R(),xC=M(),YC=I(),ZC=O(),xRr=C(),A0=Ei().factory,$C=E(),YRr=B(),QC=y(),ZRr=zC(),KC=JC();function $Rr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=A0();else if(arguments.length===1){if(i=arguments[0],!YC(i))throw new TypeError(QC("invalid argument. Options argument must be an object. Value: `%s`.",i));r=A0(i)}else{if(e=arguments[0],t=arguments[1],u=ZRr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!YC(i))throw new TypeError(QC("invalid argument. Options argument must be an object. Value: `%s`.",i));r=A0(i)}else r=A0()}return e===void 0?a=d:a=h,n=r.PRNG,it(a,"NAME","betaprime"),i&&i.prng?(it(a,"seed",null),it(a,"seedLength",null),xC(a,"state",ZC(null),xRr),it(a,"stateLength",null),it(a,"byteLength",null),it(a,"toJSON",ZC(null))):(N0(a,"seed",o),N0(a,"seedLength",v),xC(a,"state",l,p),N0(a,"stateLength",f),N0(a,"byteLength",c),it(a,"toJSON",m)),it(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=YRr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return KC(r,e,t)}function d(g,q){return $C(g)||$C(q)||g<=0||q<=0?NaN:KC(r,g,q)}}rG.exports=$Rr});var tG=s((tfe,eG)=>{"use strict";var QRr=_3(),KRr=QRr();eG.exports=KRr});var aG=s((ife,nG)=>{"use strict";var rFr=w(),iG=tG(),eFr=_3();rFr(iG,"factory",eFr);nG.exports=iG});var uG=s((nfe,sG)=>{"use strict";var tFr=Q();function iFr(r){return tFr(r)===r&&r>0}sG.exports=iFr});var L3=s((afe,oG)=>{"use strict";var nFr=uG();oG.exports=nFr});var vG=s((sfe,fG)=>{"use strict";function aFr(r){return r>=0&&r<=1}fG.exports=aFr});var lG=s((ufe,cG)=>{"use strict";var sFr=vG();cG.exports=sFr});var mG=s((ofe,gG)=>{"use strict";var uFr=ie().isPrimitive,oFr=dn().isPrimitive,pG=y();function fFr(r,e){return uFr(r)?oFr(e)?null:new TypeError(pG("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(pG("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}gG.exports=fFr});var hG=s((ffe,dG)=>{"use strict";function vFr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}dG.exports=vFr});var yG=s((vfe,qG)=>{"use strict";var cFr=E();function lFr(r){return r===0||cFr(r)?r:r<0?-1:1}qG.exports=lFr});var S0=s((cfe,bG)=>{"use strict";var pFr=yG();bG.exports=pFr});var EG=s((lfe,wG)=>{"use strict";var gFr=H(),mFr=1/12,dFr=1/360,hFr=1/1260;function qFr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=gFr(r,2),(mFr-(dFr-hFr/e)/e)/r}}wG.exports=qFr});var AG=s((pfe,NG)=>{"use strict";var P3=Q(),yFr=S0(),bFr=G(),R3=J(),O0=P(),T0=EG(),wFr=1/6;function EFr(r,e,t){var i,n,a,u,o,v,f,c,l,p,m,h,d,g,q,N,A,j,T,X,vr,$,pu,Dr,gr,Hn;for(X=P3((e+1)*t),f=e-X+1,vr=1-t,$=t/vr,c=(e+1)*$,u=e*t*vr,a=bFr(u),g=1.15+2.53*a,d=-.0873+.0248*g+.01*t,q=e*t+.5,i=(2.83+5.1/g)*a,h=.92-4.2/g,n=.86*h,A=(X+.5)*O0((X+1)/($*f)),A+=T0(X)+T0(e-X);;){if(gr=r(),gr<=n)return Dr=gr/h-.43,$=Dr*(2*d/(.5-R3(Dr))+g)+q,P3($);if(gr>=h?Dr=r()-.5:(Dr=gr/h-.93,Dr=yFr(Dr)*.5-Dr,gr=h*r()),l=.5-R3(Dr),T=P3(Dr*(2*d/l+g)+q),!(T<0||T>e))if(gr=gr*i/(d/(l*l)+g),p=R3(T-X),p>15){if(gr=O0(gr),o=p/u,v=(p/3+.625)*p,v+=wFr,v/=u,o*=v+.5,pu=-(p*p)/(2*u),gr<pu-o||gr<=pu+o&&(m=e-T+1,Hn=A+(e+1)*O0(f/m),Hn+=(T+.5)*O0(m*$/(T+1)),Hn+=-(T0(T)+T0(e-T)),gr<=Hn))return T}else{if(N=1,X<T)for(j=X;j<=T;j++)N*=c/j-$;else if(X>T)for(j=T;j<=X;j++)gr*=c/j-$;if(gr<=N)return T}}}NG.exports=EFr});var TG=s((gfe,OG)=>{"use strict";var NFr=hG(),AFr=AG();function SG(r,e,t){return t>.5?e-SG(r,e,1-t):e*t<10?NFr(r,e,t):AFr(r,e,t)}OG.exports=SG});var F3=s((mfe,BG)=>{"use strict";var pe=w(),I0=R(),IG=M(),_G=I(),LG=L(),PG=S(),RG=O(),SFr=C(),FG=E(),OFr=L3(),TFr=lG(),_0=D().factory,IFr=B(),L0=y(),_Fr=mG(),MG=TG();function LFr(){var r,e,t,i,n,a;if(arguments.length===0)e=_0();else if(arguments.length===1){if(r=arguments[0],!_G(r))throw new TypeError(L0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PG(r,"prng")){if(!LG(r.prng))throw new TypeError(L0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=_0(r)}else{if(n=arguments[0],a=arguments[1],i=_Fr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!_G(r))throw new TypeError(L0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PG(r,"prng")){if(!LG(r.prng))throw new TypeError(L0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=_0(r)}else e=_0()}return n===void 0?t=h:t=m,pe(t,"NAME","binomial"),r&&r.prng?(pe(t,"seed",null),pe(t,"seedLength",null),IG(t,"state",RG(null),SFr),pe(t,"stateLength",null),pe(t,"byteLength",null),pe(t,"toJSON",RG(null)),pe(t,"PRNG",e)):(I0(t,"seed",u),I0(t,"seedLength",o),IG(t,"state",c,l),I0(t,"stateLength",v),I0(t,"byteLength",f),pe(t,"toJSON",p),pe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=IFr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return MG(e,n,a)}function h(d,g){return FG(d)||FG(g)||!OFr(d)||!TFr(g)?NaN:MG(e,d,g)}}BG.exports=LFr});var jG=s((dfe,kG)=>{"use strict";var PFr=F3(),RFr=PFr();kG.exports=RFr});var VG=s((hfe,GG)=>{"use strict";var FFr=w(),CG=jG(),MFr=F3();FFr(CG,"factory",MFr);GG.exports=CG});var HG=s((qfe,UG)=>{"use strict";var BFr=G(),kFr=P(),jFr=St(),CFr=At(),GFr=Ve();function VFr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=BFr(-2*kFr(n)),o=GFr*a,t=u*CFr(o),e=!1,u*jFr(o)}return e=!0,t}}UG.exports=VFr});var DG=s((yfe,WG)=>{"use strict";var UFr=G(),HFr=P(),WFr=At(),DFr=Ir(),zFr=WFr(DFr);function XFr(r){var e=UFr(-2*HFr(r));return e*zFr}WG.exports=XFr});var XG=s((bfe,zG)=>{"use strict";var JFr=G(),xFr=P(),YFr=At(),ZFr=Ve();function $Fr(r){var e=JFr(-2*xFr(r)),t=ZFr*r;return e*YFr(t)}zG.exports=$Fr});var M3=s((wfe,ZG)=>{"use strict";var Br=w(),P0=R(),JG=M(),QFr=I(),KFr=L(),rMr=or().isPrimitive,_n=S(),eMr=$r(),xG=D().factory,YG=O(),tMr=C(),iMr=B(),Ln=y(),nMr=HG(),aMr=DG(),sMr=XG();function uMr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!QFr(r))throw new TypeError(Ln("invalid argument. Must provide an object. Value: `%s`.",r));if(_n(r,"copy")&&(n.copy=r.copy,!rMr(r.copy)))throw new TypeError(Ln("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(_n(r,"prng")){if(!KFr(r.prng))throw new TypeError(Ln("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(_n(r,"state")){if(n.state=r.state,!eMr(r.state))throw new TypeError(Ln("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(_n(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Ln("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=xG(n),e=i.normalized):n.seed=null:(i=xG(n),e=i.normalized),t=nMr(e),Br(t,"NAME","box-muller"),n.seed===null?(Br(t,"seed",null),Br(t,"seedLength",null)):(P0(t,"seed",a),P0(t,"seedLength",u)),r&&r.prng?(JG(t,"state",YG(null),tMr),Br(t,"stateLength",null),Br(t,"byteLength",null),Br(t,"toJSON",YG(null))):(JG(t,"state",f,c),P0(t,"stateLength",o),P0(t,"byteLength",v),Br(t,"toJSON",l)),Br(t,"PRNG",e),_n(e,"MIN")?(Br(t,"MIN",aMr(e.MIN)),Br(t,"MAX",sMr(e.MIN))):(Br(t,"MIN",null),Br(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=iMr(i.state),p.params=[],p}}ZG.exports=uMr});var QG=s((Efe,$G)=>{"use strict";var oMr=M3(),fMr=oMr();$G.exports=fMr});var eV=s((Nfe,rV)=>{"use strict";var vMr=w(),KG=QG(),cMr=M3();vMr(KG,"factory",cMr);rV.exports=KG});var nV=s((Afe,iV)=>{"use strict";var lMr=k().isPrimitive,pMr=W().isPrimitive,tV=y(),gMr=sr();function mMr(r,e){return!lMr(r)||gMr(r)?new TypeError(tV("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):pMr(e)?null:new TypeError(tV("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}iV.exports=mMr});var sV=s((Sfe,aV)=>{"use strict";var dMr=J2(),hMr=Ir();function qMr(r,e,t){return e+t*dMr(hMr*(r()-.5))}aV.exports=qMr});var B3=s((Ofe,gV)=>{"use strict";var nt=w(),R0=R(),uV=M(),oV=I(),fV=L(),vV=S(),cV=O(),yMr=C(),lV=E(),Ni=tt().factory,bMr=B(),F0=y(),wMr=nV(),pV=sV();function EMr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Ni();else if(arguments.length===1){if(t=arguments[0],!oV(t))throw new TypeError(F0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(vV(t,"prng")){if(!fV(t.prng))throw new TypeError(F0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ni({prng:t.prng})}else e=Ni(t)}else{if(u=arguments[0],r=arguments[1],a=wMr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!oV(t))throw new TypeError(F0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(vV(t,"prng")){if(!fV(t.prng))throw new TypeError(F0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ni({prng:t.prng})}else e=Ni(t)}else e=Ni()}return u===void 0?n=d:n=h,i=e.PRNG,nt(n,"NAME","cauchy"),t&&t.prng?(nt(n,"seed",null),nt(n,"seedLength",null),uV(n,"state",cV(null),yMr),nt(n,"stateLength",null),nt(n,"byteLength",null),nt(n,"toJSON",cV(null))):(R0(n,"seed",o),R0(n,"seedLength",v),uV(n,"state",l,p),R0(n,"stateLength",f),R0(n,"byteLength",c),nt(n,"toJSON",m)),nt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=bMr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return pV(e,u,r)}function d(g,q){return lV(g)||lV(q)||q<=0?NaN:pV(e,g,q)}}gV.exports=EMr});var dV=s((Tfe,mV)=>{"use strict";var NMr=B3(),AMr=NMr();mV.exports=AMr});var yV=s((Ife,qV)=>{"use strict";var SMr=w(),hV=dV(),OMr=B3();SMr(hV,"factory",OMr);qV.exports=hV});var k3=s((_fe,SV)=>{"use strict";var at=w(),M0=R(),bV=M(),TMr=W().isPrimitive,wV=I(),EV=L(),NV=S(),AV=O(),IMr=C(),_Mr=E(),Ai=Ei().factory,LMr=B(),B0=y();function PMr(){var r,e,t,i,n;if(arguments.length===0)r=Ai();else if(arguments.length===1&&wV(arguments[0]))if(t=arguments[0],NV(t,"prng")){if(!EV(t.prng))throw new TypeError(B0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ai({prng:t.prng})}else r=Ai(t);else{if(n=arguments[0],!TMr(n))throw new TypeError(B0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!wV(t))throw new TypeError(B0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(NV(t,"prng")){if(!EV(t.prng))throw new TypeError(B0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ai(n/2,.5,{prng:t.prng})}else r=Ai(n/2,.5,t)}else r=Ai(n/2,.5)}return n===void 0?i=m:i=p,e=r.PRNG,at(i,"NAME","chisquare"),t&&t.prng?(at(i,"seed",null),at(i,"seedLength",null),bV(i,"state",AV(null),IMr),at(i,"stateLength",null),at(i,"byteLength",null),at(i,"toJSON",AV(null))):(M0(i,"seed",a),M0(i,"seedLength",u),bV(i,"state",f,c),M0(i,"stateLength",o),M0(i,"byteLength",v),at(i,"toJSON",l)),at(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=LMr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function m(h){return _Mr(h)||h<=0?NaN:r(h/2,.5)}}SV.exports=PMr});var TV=s((Lfe,OV)=>{"use strict";var RMr=k3(),FMr=RMr();OV.exports=FMr});var Pn=s((Pfe,_V)=>{"use strict";var MMr=w(),IV=TV(),BMr=k3();MMr(IV,"factory",BMr);_V.exports=IV});var j3=s((Rfe,kV)=>{"use strict";var st=w(),k0=R(),LV=M(),kMr=W().isPrimitive,PV=I(),RV=L(),FV=S(),MV=O(),jMr=C(),CMr=E(),Si=Pn().factory,GMr=B(),BV=G(),j0=y();function VMr(){var r,e,t,i,n;if(arguments.length===0)r=Si();else if(arguments.length===1&&PV(arguments[0]))if(t=arguments[0],FV(t,"prng")){if(!RV(t.prng))throw new TypeError(j0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Si({prng:t.prng})}else r=Si(t);else{if(n=arguments[0],!kMr(n))throw new TypeError(j0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!PV(t))throw new TypeError(j0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(FV(t,"prng")){if(!RV(t.prng))throw new TypeError(j0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Si(n,{prng:t.prng})}else r=Si(n,t)}else r=Si(n)}return n===void 0?i=m:i=p,e=r.PRNG,st(i,"NAME","chi"),t&&t.prng?(st(i,"seed",null),st(i,"seedLength",null),LV(i,"state",MV(null),jMr),st(i,"stateLength",null),st(i,"byteLength",null),st(i,"toJSON",MV(null))):(k0(i,"seed",a),k0(i,"seedLength",u),LV(i,"state",f,c),k0(i,"stateLength",o),k0(i,"byteLength",v),st(i,"toJSON",l)),st(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=GMr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return BV(r())}function m(h){return CMr(h)||h<=0?NaN:BV(r(h))}}kV.exports=VMr});var CV=s((Ffe,jV)=>{"use strict";var UMr=j3(),HMr=UMr();jV.exports=HMr});var UV=s((Mfe,VV)=>{"use strict";var WMr=w(),GV=CV(),DMr=j3();WMr(GV,"factory",DMr);VV.exports=GV});var DV=s((Bfe,WV)=>{"use strict";var zMr=k().isPrimitive,XMr=W().isPrimitive,HV=y(),JMr=sr();function xMr(r,e){return!zMr(r)||JMr(r)?new TypeError(HV("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):XMr(e)?null:new TypeError(HV("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}WV.exports=xMr});var XV=s((kfe,zV)=>{"use strict";var C3=E(),YMr=$i(),ZMr=Ir();function $Mr(r,e,t){var i;return C3(r)||C3(e)||C3(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+YMr(i)/ZMr)/2)}zV.exports=$Mr});var xV=s((jfe,JV)=>{"use strict";var QMr=O(),KMr=Oa().factory,G3=E(),rBr=$i(),eBr=Ir();function tBr(r,e){if(G3(r)||G3(e)||e<0)return QMr(NaN);if(e===0)return KMr(r);return t;function t(i){var n;return G3(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+rBr(n)/eBr)/2)}}JV.exports=tBr});var $V=s((Cfe,ZV)=>{"use strict";var iBr=w(),YV=XV(),nBr=xV();iBr(YV,"factory",nBr);ZV.exports=YV});var V3=s((Gfe,QV)=>{"use strict";var aBr=$V(),sBr=1e4,uBr=1e-12;function oBr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<sBr;){if(u=(i+n)/2,n-i<uBr)return u;a=aBr(u,e,t),r>a?i=u:n=u,o+=1}return u}QV.exports=oBr});var rU=s((Vfe,KV)=>{"use strict";var U3=E(),fBr=V3();function vBr(r,e,t){return U3(e)||U3(t)||U3(r)||t<0||r<0||r>1?NaN:t===0?e:fBr(r,e,t)}KV.exports=vBr});var tU=s((Ufe,eU)=>{"use strict";var cBr=O(),lBr=D1().factory,H3=E(),pBr=V3();function gBr(r,e){if(H3(r)||H3(e)||e<0)return cBr(NaN);if(e===0)return lBr(r);return t;function t(i){return H3(i)||i<0||i>1?NaN:pBr(i,r,e)}}eU.exports=gBr});var aU=s((Hfe,nU)=>{"use strict";var mBr=w(),iU=rU(),dBr=tU();mBr(iU,"factory",dBr);nU.exports=iU});var uU=s((Wfe,sU)=>{"use strict";var hBr=aU();function qBr(r,e,t){return hBr(r(),e,t)}sU.exports=qBr});var W3=s((Dfe,mU)=>{"use strict";var ge=w(),C0=R(),oU=M(),fU=I(),vU=L(),cU=S(),lU=O(),yBr=C(),G0=D().factory,pU=E(),bBr=B(),V0=y(),wBr=DV(),gU=uU();function EBr(){var r,e,t,i,n,a;if(arguments.length===0)e=G0();else if(arguments.length===1){if(r=arguments[0],!fU(r))throw new TypeError(V0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(cU(r,"prng")){if(!vU(r.prng))throw new TypeError(V0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=G0(r)}else{if(n=arguments[0],a=arguments[1],i=wBr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!fU(r))throw new TypeError(V0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(cU(r,"prng")){if(!vU(r.prng))throw new TypeError(V0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=G0(r)}else e=G0()}return n===void 0?t=h:t=m,ge(t,"NAME","cosine"),r&&r.prng?(ge(t,"seed",null),ge(t,"seedLength",null),oU(t,"state",lU(null),yBr),ge(t,"stateLength",null),ge(t,"byteLength",null),ge(t,"toJSON",lU(null)),ge(t,"PRNG",e)):(C0(t,"seed",u),C0(t,"seedLength",o),oU(t,"state",c,l),C0(t,"stateLength",v),C0(t,"byteLength",f),ge(t,"toJSON",p),ge(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=bBr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return gU(e,n,a)}function h(d,g){return pU(d)||pU(g)||g<=0?NaN:gU(e,d,g)}}mU.exports=EBr});var hU=s((zfe,dU)=>{"use strict";var NBr=W3(),ABr=NBr();dU.exports=ABr});var bU=s((Xfe,yU)=>{"use strict";var SBr=w(),qU=hU(),OBr=W3();SBr(qU,"factory",OBr);yU.exports=qU});var AU=s((Jfe,NU)=>{"use strict";var wU=jr().isPrimitive,D3=y(),EU=sr();function TBr(r,e){return!wU(r)||EU(r)?new TypeError(D3("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!wU(e)||EU(e)?new TypeError(D3("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(D3("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}NU.exports=TBr});var TU=s((xfe,OU)=>{"use strict";var z3=nn(),Oi=Q();function SU(r,e,t){var i,n,a,u,o,v,f,c,l;if(a=t-e,a===0)return e;if(f=r.MIN,c=r.MAX,n=c-f,n===a)return r()-f+e;if(n<a)for(u=0;;){for(a===z3?(u=Oi(a/(n+1)),a%(n+1)===n&&(u+=1)):u=Oi((a+1)/(n+1)),i=0,v=1;v<=u;){if(i+=(r()-f)*v,v*n===a-v+1)return i;v*=n+1}if(l=SU(r,0,Oi(a/v)),!(l>z3/v)&&(l*=v,i+=l,!(i>a)))return i+e}for(n===z3?(o=Oi(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Oi((n+1)/(a+1));;)if(i=r()-f,i=Oi(i/o),i<=a)return i+e}OU.exports=SU});var X3=s((Yfe,BU)=>{"use strict";var me=w(),U0=R(),IU=M(),_U=I(),LU=L(),PU=S(),RU=O(),IBr=C(),H0=D().factory,FU=E(),Ti=Tr(),_Br=B(),ut=y(),LBr=AU(),MU=TU();function PBr(){var r,e,t,i,n,a;if(arguments.length===0)e=H0();else if(arguments.length===1){if(r=arguments[0],!_U(r))throw new TypeError(ut("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PU(r,"prng")){if(!LU(r.prng))throw new TypeError(ut("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Ti(e.MIN))throw new TypeError(ut("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Ti(e.MAX))throw new TypeError(ut("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=H0(r)}else{if(n=arguments[0],a=arguments[1],i=LBr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!_U(r))throw new TypeError(ut("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PU(r,"prng")){if(!LU(r.prng))throw new TypeError(ut("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Ti(e.MIN))throw new TypeError(ut("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Ti(e.MAX))throw new TypeError(ut("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=H0(r)}else e=H0()}return n===void 0?t=h:t=m,me(t,"NAME","discrete-uniform"),r&&r.prng?(me(t,"seed",null),me(t,"seedLength",null),IU(t,"state",RU(null),IBr),me(t,"stateLength",null),me(t,"byteLength",null),me(t,"toJSON",RU(null)),me(t,"PRNG",e)):(U0(t,"seed",u),U0(t,"seedLength",o),IU(t,"state",c,l),U0(t,"stateLength",v),U0(t,"byteLength",f),me(t,"toJSON",p),me(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=_Br(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return MU(e,n,a)}function h(d,g){return FU(d)||FU(g)||!Ti(d)||!Ti(g)||d>g?NaN:MU(e,d,g)}}BU.exports=PBr});var jU=s((Zfe,kU)=>{"use strict";var RBr=X3(),FBr=RBr();kU.exports=FBr});var VU=s(($fe,GU)=>{"use strict";var MBr=w(),CU=jU(),BBr=X3();MBr(CU,"factory",BBr);GU.exports=CU});var WU=s((Qfe,HU)=>{"use strict";var kBr=W().isPrimitive,jBr=ie().isPrimitive,UU=y();function CBr(r,e){return jBr(r)?kBr(e)?null:new TypeError(UU("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(UU("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}HU.exports=CBr});var zU=s((Kfe,DU)=>{"use strict";var GBr=P();function VBr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*GBr(i)}DU.exports=VBr});var J3=s((rve,KU)=>{"use strict";var de=w(),W0=R(),XU=M(),JU=I(),xU=L(),YU=S(),ZU=O(),UBr=C(),D0=D().factory,$U=E(),HBr=L3(),WBr=B(),z0=y(),DBr=WU(),QU=zU();function zBr(){var r,e,t,i,n,a;if(arguments.length===0)e=D0();else if(arguments.length===1){if(t=arguments[0],!JU(t))throw new TypeError(z0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(YU(t,"prng")){if(!xU(t.prng))throw new TypeError(z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=D0(t)}else{if(a=arguments[0],r=arguments[1],n=DBr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!JU(t))throw new TypeError(z0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(YU(t,"prng")){if(!xU(t.prng))throw new TypeError(z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=D0(t)}else e=D0()}return a===void 0?i=h:i=m,de(i,"NAME","erlang"),t&&t.prng?(de(i,"seed",null),de(i,"seedLength",null),XU(i,"state",ZU(null),UBr),de(i,"stateLength",null),de(i,"byteLength",null),de(i,"toJSON",ZU(null)),de(i,"PRNG",e)):(W0(i,"seed",u),W0(i,"seedLength",o),XU(i,"state",c,l),W0(i,"stateLength",v),W0(i,"byteLength",f),de(i,"toJSON",p),de(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=WBr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return QU(e,a,r)}function h(d,g){return $U(d)||$U(g)||!HBr(d)||g<=0?NaN:QU(e,d,g)}}KU.exports=zBr});var eH=s((eve,rH)=>{"use strict";var XBr=J3(),JBr=XBr();rH.exports=JBr});var nH=s((tve,iH)=>{"use strict";var xBr=w(),tH=eH(),YBr=J3();xBr(tH,"factory",YBr);iH.exports=tH});var sH=s((ive,aH)=>{"use strict";var ZBr=P();function $Br(r,e){return-ZBr(1-r())/e}aH.exports=$Br});var x3=s((nve,pH)=>{"use strict";var he=w(),X0=R(),uH=M(),QBr=W().isPrimitive,oH=I(),fH=L(),vH=S(),cH=O(),KBr=C(),J0=D().factory,rkr=E(),ekr=B(),x0=y(),lH=sH();function tkr(){var r,e,t,i;if(arguments.length===0)t=J0();else if(arguments.length===1&&oH(arguments[0]))if(e=arguments[0],vH(e,"prng")){if(!fH(e.prng))throw new TypeError(x0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=J0(e);else{if(r=arguments[0],!QBr(r))throw new TypeError(x0("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!oH(e))throw new TypeError(x0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(vH(e,"prng")){if(!fH(e.prng))throw new TypeError(x0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=J0(e)}else t=J0()}return r===void 0?i=p:i=l,he(i,"NAME","exponential"),e&&e.prng?(he(i,"seed",null),he(i,"seedLength",null),uH(i,"state",cH(null),KBr),he(i,"stateLength",null),he(i,"byteLength",null),he(i,"toJSON",cH(null)),he(i,"PRNG",t)):(X0(i,"seed",n),X0(i,"seedLength",a),uH(i,"state",v,f),X0(i,"stateLength",u),X0(i,"byteLength",o),he(i,"toJSON",c),he(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=ekr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return lH(t,r)}function p(m){return rkr(m)||m<=0?NaN:lH(t,m)}}pH.exports=tkr});var mH=s((ave,gH)=>{"use strict";var ikr=x3(),nkr=ikr();gH.exports=nkr});var qH=s((sve,hH)=>{"use strict";var akr=w(),dH=mH(),skr=x3();akr(dH,"factory",skr);hH.exports=dH});var EH=s((uve,wH)=>{"use strict";var yH=W().isPrimitive,bH=y();function ukr(r,e){return yH(r)?yH(e)?null:new TypeError(bH("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(bH("invalid argument. First argument must be a positive number. Value: `%s`.",r))}wH.exports=ukr});var AH=s((ove,NH)=>{"use strict";function okr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}NH.exports=okr});var Y3=s((fve,RH)=>{"use strict";var ot=w(),Y0=R(),SH=M(),OH=I(),TH=L(),IH=S(),_H=O(),fkr=C(),Ii=Pn().factory,LH=E(),vkr=B(),Z0=y(),ckr=EH(),PH=AH();function lkr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Ii();else if(arguments.length===1){if(e=arguments[0],!OH(e))throw new TypeError(Z0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(IH(e,"prng")){if(!TH(e.prng))throw new TypeError(Z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Ii({prng:e.prng})}else r=Ii(e)}else{if(a=arguments[0],u=arguments[1],n=ckr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!OH(e))throw new TypeError(Z0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(IH(e,"prng")){if(!TH(e.prng))throw new TypeError(Z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Ii({prng:e.prng})}else r=Ii(e)}else r=Ii()}return a===void 0?i=d:i=h,t=r.PRNG,ot(i,"NAME","f"),e&&e.prng?(ot(i,"seed",null),ot(i,"seedLength",null),SH(i,"state",_H(null),fkr),ot(i,"stateLength",null),ot(i,"byteLength",null),ot(i,"toJSON",_H(null))):(Y0(i,"seed",o),Y0(i,"seedLength",v),SH(i,"state",l,p),Y0(i,"stateLength",f),Y0(i,"byteLength",c),ot(i,"toJSON",m)),ot(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=vkr(t.state),a===void 0?g.params=[]:g.params=[a,u],g}function h(){return PH(r,a,u)}function d(g,q){return LH(g)||LH(q)||g<=0||q<=0?NaN:PH(r,g,q)}}RH.exports=lkr});var MH=s((vve,FH)=>{"use strict";var pkr=Y3(),gkr=pkr();FH.exports=gkr});var jH=s((cve,kH)=>{"use strict";var mkr=w(),BH=MH(),dkr=Y3();mkr(BH,"factory",dkr);kH.exports=BH});var VH=s((lve,GH)=>{"use strict";var CH=W().isPrimitive,hkr=k().isPrimitive,Z3=sr(),$3=y();function qkr(r,e,t){return!CH(r)||Z3(r)?new TypeError($3("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!CH(e)||Z3(e)?new TypeError($3("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!hkr(t)||Z3(t)?new TypeError($3("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}GH.exports=qkr});var HH=s((pve,UH)=>{"use strict";var ykr=H(),bkr=P();function wkr(r,e,t,i){return i+t*ykr(-bkr(r()),-1/e)}UH.exports=wkr});var K3=s((gve,YH)=>{"use strict";var qe=w(),$0=R(),WH=M(),DH=I(),zH=L(),XH=S(),JH=O(),Ekr=C(),Q0=D().factory,Q3=E(),Nkr=B(),K0=y(),Akr=VH(),xH=HH();function Skr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=Q0();else if(arguments.length===1){if(e=arguments[0],!DH(e))throw new TypeError(K0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(XH(e,"prng")){if(!zH(e.prng))throw new TypeError(K0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Q0(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=Akr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!DH(e))throw new TypeError(K0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(XH(e,"prng")){if(!zH(e.prng))throw new TypeError(K0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Q0(e)}else t=Q0()}return r===void 0?i=d:i=h,qe(i,"NAME","frechet"),e&&e.prng?(qe(i,"seed",null),qe(i,"seedLength",null),WH(i,"state",JH(null),Ekr),qe(i,"stateLength",null),qe(i,"byteLength",null),qe(i,"toJSON",JH(null)),qe(i,"PRNG",t)):($0(i,"seed",o),$0(i,"seedLength",v),WH(i,"state",l,p),$0(i,"stateLength",f),$0(i,"byteLength",c),qe(i,"toJSON",m),qe(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=Nkr(t.state),r===void 0?g.params=[]:g.params=[r,a,u],g}function h(){return xH(t,r,a,u)}function d(g,q,N){return Q3(g)||Q3(q)||Q3(N)||g<=0||q<=0?NaN:xH(t,g,q,N)}}YH.exports=Skr});var $H=s((mve,ZH)=>{"use strict";var Okr=K3(),Tkr=Okr();ZH.exports=Tkr});var rW=s((dve,KH)=>{"use strict";var Ikr=w(),QH=$H(),_kr=K3();Ikr(QH,"factory",_kr);KH.exports=QH});var iW=s((hve,tW)=>{"use strict";var Lkr=Q(),eW=P();function Pkr(r,e){var t=r();return t===0&&(t=r()),Lkr(eW(t)/eW(1-e))}tW.exports=Pkr});var rf=s((qve,vW)=>{"use strict";var ye=w(),rs=R(),nW=M(),aW=I(),Rkr=dn().isPrimitive,sW=L(),uW=S(),oW=O(),Fkr=C(),es=D().factory,Mkr=E(),Bkr=B(),ts=y(),fW=iW();function kkr(){var r,e,t,i;if(arguments.length===0)e=es();else if(arguments.length===1&&aW(arguments[0]))if(r=arguments[0],uW(r,"prng")){if(!sW(r.prng))throw new TypeError(ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=es(r);else{if(i=arguments[0],!Rkr(i))throw new TypeError(ts("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!aW(r))throw new TypeError(ts("invalid argument. Options argument must be an object. Value: `%s`.",r));if(uW(r,"prng")){if(!sW(r.prng))throw new TypeError(ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=es(r)}else e=es()}return i===void 0?t=p:t=l,ye(t,"NAME","geometric"),r&&r.prng?(ye(t,"seed",null),ye(t,"seedLength",null),nW(t,"state",oW(null),Fkr),ye(t,"stateLength",null),ye(t,"byteLength",null),ye(t,"toJSON",oW(null)),ye(t,"PRNG",e)):(rs(t,"seed",n),rs(t,"seedLength",a),nW(t,"state",v,f),rs(t,"stateLength",u),rs(t,"byteLength",o),ye(t,"toJSON",c),ye(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Bkr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return fW(e,i)}function p(m){return Mkr(m)||m<0||m>1?NaN:fW(e,m)}}vW.exports=kkr});var lW=s((yve,cW)=>{"use strict";var jkr=rf(),Ckr=jkr();cW.exports=Ckr});var mW=s((bve,gW)=>{"use strict";var Gkr=w(),pW=lW(),Vkr=rf();Gkr(pW,"factory",Vkr);gW.exports=pW});var qW=s((wve,hW)=>{"use strict";var Ukr=k().isPrimitive,Hkr=W().isPrimitive,dW=y(),Wkr=sr();function Dkr(r,e){return!Ukr(r)||Wkr(r)?new TypeError(dW("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Hkr(e)?null:new TypeError(dW("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}hW.exports=Dkr});var wW=s((Eve,bW)=>{"use strict";var yW=P();function zkr(r,e,t){return e-t*yW(-yW(r()))}bW.exports=zkr});var ef=s((Nve,_W)=>{"use strict";var be=w(),is=R(),EW=M(),NW=I(),AW=L(),SW=S(),OW=O(),Xkr=C(),ns=D().factory,TW=E(),Jkr=B(),as=y(),xkr=qW(),IW=wW();function Ykr(){var r,e,t,i,n,a;if(arguments.length===0)t=ns();else if(arguments.length===1){if(e=arguments[0],!NW(e))throw new TypeError(as("invalid argument. Options argument must be an object. Value: `%s`.",e));if(SW(e,"prng")){if(!AW(e.prng))throw new TypeError(as("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ns(e)}else{if(a=arguments[0],r=arguments[1],n=xkr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!NW(e))throw new TypeError(as("invalid argument. Options argument must be an object. Value: `%s`.",e));if(SW(e,"prng")){if(!AW(e.prng))throw new TypeError(as("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ns(e)}else t=ns()}return a===void 0?i=h:i=m,be(i,"NAME","gumbel"),e&&e.prng?(be(i,"seed",null),be(i,"seedLength",null),EW(i,"state",OW(null),Xkr),be(i,"stateLength",null),be(i,"byteLength",null),be(i,"toJSON",OW(null)),be(i,"PRNG",t)):(is(i,"seed",u),is(i,"seedLength",o),EW(i,"state",c,l),is(i,"stateLength",v),is(i,"byteLength",f),be(i,"toJSON",p),be(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=Jkr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return IW(t,a,r)}function h(d,g){return TW(d)||TW(g)||g<=0?NaN:IW(t,d,g)}}_W.exports=Ykr});var PW=s((Ave,LW)=>{"use strict";var Zkr=ef(),$kr=Zkr();LW.exports=$kr});var MW=s((Sve,FW)=>{"use strict";var Qkr=w(),RW=PW(),Kkr=ef();Qkr(RW,"factory",Kkr);FW.exports=RW});var kW=s((Ove,BW)=>{"use strict";var rjr=Q();function ejr(r){return rjr(r)===r&&r>=0}BW.exports=ejr});var CW=s((Tve,jW)=>{"use strict";var tjr=kW();jW.exports=tjr});var VW=s((Ive,GW)=>{"use strict";var tf=De().isPrimitive,Rn=y();function ijr(r,e,t){return tf(r)?tf(e)?tf(t)?t>r?new RangeError(Rn("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(Rn("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(Rn("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(Rn("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(Rn("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}GW.exports=ijr});var UW=s((_ve,njr)=>{njr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var WW=s((Lve,HW)=>{"use strict";var ajr=E(),sjr=Tr(),ujr=Qt(),ojr=_(),fjr=UW(),vjr=170;function cjr(r){return ajr(r)?NaN:sjr(r)?r<0?NaN:r<=vjr?fjr[r]:ojr:ujr(r+1)}HW.exports=cjr});var zW=s((Pve,DW)=>{"use strict";var ljr=WW();DW.exports=ljr});var JW=s((Rve,XW)=>{"use strict";var ft=zW();function pjr(r,e,t,i){var n,a,u;for(i<t?(n=ft(t)*ft(e+t-i)/(ft(e+t)*ft(t-i)),u=0):(n=ft(e)*ft(i)/(ft(i-t)*ft(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}XW.exports=pjr});var YW=s((Fve,xW)=>{"use strict";var ss=JW();function gjr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=ss(r,n,a,u),t-o):(a=t,n=e-t,o=ss(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=ss(r,n,a,u),o):(n=e-t,a=t,o=ss(r,n,a,u),i-o))}xW.exports=gjr});var af=s((Mve,iD)=>{"use strict";var we=w(),us=R(),ZW=M(),$W=I(),QW=L(),KW=S(),rD=O(),mjr=C(),os=D().factory,nf=CW(),eD=_(),djr=B(),fs=y(),hjr=VW(),tD=YW();function qjr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=os();else if(arguments.length===1){if(r=arguments[0],!$W(r))throw new TypeError(fs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KW(r,"prng")){if(!QW(r.prng))throw new TypeError(fs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=os(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=hjr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!$W(r))throw new TypeError(fs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KW(r,"prng")){if(!QW(r.prng))throw new TypeError(fs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=os(r)}else e=os()}return n===void 0?t=d:t=h,we(t,"NAME","hypergeometric"),r&&r.prng?(we(t,"seed",null),we(t,"seedLength",null),ZW(t,"state",rD(null),mjr),we(t,"stateLength",null),we(t,"byteLength",null),we(t,"toJSON",rD(null)),we(t,"PRNG",e)):(us(t,"seed",o),us(t,"seedLength",v),ZW(t,"state",l,p),us(t,"stateLength",f),us(t,"byteLength",c),we(t,"toJSON",m),we(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=djr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return tD(e,n,a,u)}function d(g,q,N){return g===eD||q===eD||!nf(g)||!nf(q)||!nf(N)||N>g?NaN:tD(e,g,q,N)}}iD.exports=qjr});var aD=s((Bve,nD)=>{"use strict";var yjr=af(),bjr=yjr();nD.exports=bjr});var oD=s((kve,uD)=>{"use strict";var wjr=w(),sD=aD(),Ejr=af();wjr(sD,"factory",Ejr);uD.exports=sD});var lD=s((jve,cD)=>{"use strict";var fD=W().isPrimitive,vD=y();function Njr(r,e){return fD(r)?fD(e)?null:new TypeError(vD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(vD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}cD.exports=Njr});var sf=s((Cve,yD)=>{"use strict";var vt=w(),vs=R(),pD=M(),gD=I(),mD=L(),dD=S(),hD=O(),Ajr=C(),_i=Ei().factory,qD=E(),Sjr=B(),cs=y(),Ojr=lD();function Tjr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=_i();else if(arguments.length===1){if(i=arguments[0],!gD(i))throw new TypeError(cs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(dD(i,"prng")){if(!mD(i.prng))throw new TypeError(cs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=_i({prng:i.prng})}else r=_i(i)}else{if(e=arguments[0],t=arguments[1],u=Ojr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!gD(i))throw new TypeError(cs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(dD(i,"prng")){if(!mD(i.prng))throw new TypeError(cs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=_i(e,t,{prng:i.prng})}else r=_i(e,t,i)}else r=_i(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,vt(a,"NAME","invgamma"),i&&i.prng?(vt(a,"seed",null),vt(a,"seedLength",null),pD(a,"state",hD(null),Ajr),vt(a,"stateLength",null),vt(a,"byteLength",null),vt(a,"toJSON",hD(null))):(vs(a,"seed",o),vs(a,"seedLength",v),pD(a,"state",l,p),vs(a,"stateLength",f),vs(a,"byteLength",c),vt(a,"toJSON",m)),vt(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=Sjr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return 1/r()}function d(g,q){return qD(g)||qD(q)||g<=0||q<=0?NaN:1/r(g,q)}}yD.exports=Tjr});var wD=s((Gve,bD)=>{"use strict";var Ijr=sf(),_jr=Ijr();bD.exports=_jr});var AD=s((Vve,ND)=>{"use strict";var Ljr=w(),ED=wD(),Pjr=sf();Ljr(ED,"factory",Pjr);ND.exports=ED});var ID=s((Uve,TD)=>{"use strict";var SD=W().isPrimitive,OD=y();function Rjr(r,e){return SD(r)?SD(e)?null:new TypeError(OD("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(OD("invalid argument. First argument must be a positive number. Value: `%s`.",r))}TD.exports=Rjr});var PD=s((Hve,LD)=>{"use strict";var _D=H();function Fjr(r,e,t){var i=r();return _D(1-_D(1-i,1/t),1/e)}LD.exports=Fjr});var uf=s((Wve,GD)=>{"use strict";var Ee=w(),ls=R(),RD=M(),FD=I(),MD=L(),BD=S(),kD=O(),Mjr=C(),ps=D().factory,jD=E(),Bjr=B(),gs=y(),kjr=ID(),CD=PD();function jjr(){var r,e,t,i,n,a;if(arguments.length===0)e=ps();else if(arguments.length===1){if(r=arguments[0],!FD(r))throw new TypeError(gs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(BD(r,"prng")){if(!MD(r.prng))throw new TypeError(gs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ps(r)}else{if(n=arguments[0],a=arguments[1],i=kjr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!FD(r))throw new TypeError(gs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(BD(r,"prng")){if(!MD(r.prng))throw new TypeError(gs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ps(r)}else e=ps()}return n===void 0?t=h:t=m,Ee(t,"NAME","kumaraswamy"),r&&r.prng?(Ee(t,"seed",null),Ee(t,"seedLength",null),RD(t,"state",kD(null),Mjr),Ee(t,"stateLength",null),Ee(t,"byteLength",null),Ee(t,"toJSON",kD(null)),Ee(t,"PRNG",e)):(ls(t,"seed",u),ls(t,"seedLength",o),RD(t,"state",c,l),ls(t,"stateLength",v),ls(t,"byteLength",f),Ee(t,"toJSON",p),Ee(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=Bjr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return CD(e,n,a)}function h(d,g){return jD(d)||jD(g)||d<=0||g<=0?NaN:CD(e,d,g)}}GD.exports=jjr});var UD=s((Dve,VD)=>{"use strict";var Cjr=uf(),Gjr=Cjr();VD.exports=Gjr});var DD=s((zve,WD)=>{"use strict";var Vjr=w(),HD=UD(),Ujr=uf();Vjr(HD,"factory",Ujr);WD.exports=HD});var JD=s((Xve,XD)=>{"use strict";var Hjr=k().isPrimitive,Wjr=W().isPrimitive,zD=y(),Djr=sr();function zjr(r,e){return!Hjr(r)||Djr(r)?new TypeError(zD("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):Wjr(e)?null:new TypeError(zD("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}XD.exports=zjr});var YD=s((Jve,xD)=>{"use strict";var Xjr=S0(),Jjr=J(),xjr=P();function Yjr(r,e,t){var i=r()-.5;return e-t*Xjr(i)*xjr(1-2*Jjr(i))}xD.exports=Yjr});var of=s((xve,iz)=>{"use strict";var Ne=w(),ms=R(),ZD=M(),$D=I(),QD=L(),KD=S(),rz=O(),Zjr=C(),ds=D().factory,ez=E(),$jr=B(),hs=y(),Qjr=JD(),tz=YD();function Kjr(){var r,e,t,i,n,a;if(arguments.length===0)e=ds();else if(arguments.length===1){if(r=arguments[0],!$D(r))throw new TypeError(hs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KD(r,"prng")){if(!QD(r.prng))throw new TypeError(hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ds(r)}else{if(n=arguments[0],a=arguments[1],i=Qjr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!$D(r))throw new TypeError(hs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(KD(r,"prng")){if(!QD(r.prng))throw new TypeError(hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ds(r)}else e=ds()}return n===void 0?t=h:t=m,Ne(t,"NAME","laplace"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),ZD(t,"state",rz(null),Zjr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",rz(null)),Ne(t,"PRNG",e)):(ms(t,"seed",u),ms(t,"seedLength",o),ZD(t,"state",c,l),ms(t,"stateLength",v),ms(t,"byteLength",f),Ne(t,"toJSON",p),Ne(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=$jr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return tz(e,n,a)}function h(d,g){return ez(d)||ez(g)||g<=0?NaN:tz(e,d,g)}}iz.exports=Kjr});var az=s((Yve,nz)=>{"use strict";var rCr=of(),eCr=rCr();nz.exports=eCr});var oz=s((Zve,uz)=>{"use strict";var tCr=w(),sz=az(),iCr=of();tCr(sz,"factory",iCr);uz.exports=sz});var cz=s(($ve,vz)=>{"use strict";var nCr=k().isPrimitive,aCr=W().isPrimitive,fz=y(),sCr=sr();function uCr(r,e){return!nCr(r)||sCr(r)?new TypeError(fz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):aCr(e)?null:new TypeError(fz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}vz.exports=uCr});var pz=s((Qve,lz)=>{"use strict";var oCr=X1();function fCr(r,e,t){var i=oCr(1-r()/2,0,1);return e+t/(i*i)}lz.exports=fCr});var ff=s((Kve,wz)=>{"use strict";var Ae=w(),qs=R(),gz=M(),mz=I(),dz=L(),hz=S(),qz=O(),vCr=C(),ys=D().factory,yz=E(),cCr=B(),bs=y(),lCr=cz(),bz=pz();function pCr(){var r,e,t,i,n,a;if(arguments.length===0)e=ys();else if(arguments.length===1){if(r=arguments[0],!mz(r))throw new TypeError(bs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hz(r,"prng")){if(!dz(r.prng))throw new TypeError(bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ys(r)}else{if(n=arguments[0],a=arguments[1],i=lCr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!mz(r))throw new TypeError(bs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hz(r,"prng")){if(!dz(r.prng))throw new TypeError(bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ys(r)}else e=ys()}return n===void 0?t=h:t=m,Ae(t,"NAME","levy"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),gz(t,"state",qz(null),vCr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",qz(null)),Ae(t,"PRNG",e)):(qs(t,"seed",u),qs(t,"seedLength",o),gz(t,"state",c,l),qs(t,"stateLength",v),qs(t,"byteLength",f),Ae(t,"toJSON",p),Ae(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=cCr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return bz(e,n,a)}function h(d,g){return yz(d)||yz(g)||g<=0?NaN:bz(e,d,g)}}wz.exports=pCr});var Nz=s((rce,Ez)=>{"use strict";var gCr=ff(),mCr=gCr();Ez.exports=mCr});var Oz=s((ece,Sz)=>{"use strict";var dCr=w(),Az=Nz(),hCr=ff();dCr(Az,"factory",hCr);Sz.exports=Az});var _z=s((tce,Iz)=>{"use strict";var qCr=k().isPrimitive,yCr=W().isPrimitive,bCr=sr(),Tz=y();function wCr(r,e){return!qCr(r)||bCr(r)?new TypeError(Tz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):yCr(e)?null:new TypeError(Tz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Iz.exports=wCr});var Pz=s((ice,Lz)=>{"use strict";var ECr=P();function NCr(r,e,t){var i=r();return e+t*ECr(i/(1-i))}Lz.exports=NCr});var vf=s((nce,Gz)=>{"use strict";var Se=w(),ws=R(),Rz=M(),Fz=I(),Mz=L(),Bz=S(),kz=O(),ACr=C(),Es=D().factory,jz=E(),SCr=B(),Ns=y(),OCr=_z(),Cz=Pz();function TCr(){var r,e,t,i,n,a;if(arguments.length===0)e=Es();else if(arguments.length===1){if(r=arguments[0],!Fz(r))throw new TypeError(Ns("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Bz(r,"prng")){if(!Mz(r.prng))throw new TypeError(Ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Es(r)}else{if(n=arguments[0],a=arguments[1],i=OCr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Fz(r))throw new TypeError(Ns("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Bz(r,"prng")){if(!Mz(r.prng))throw new TypeError(Ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Es(r)}else e=Es()}return n===void 0?t=h:t=m,Se(t,"NAME","logistic"),r&&r.prng?(Se(t,"seed",null),Se(t,"seedLength",null),Rz(t,"state",kz(null),ACr),Se(t,"stateLength",null),Se(t,"byteLength",null),Se(t,"toJSON",kz(null)),Se(t,"PRNG",e)):(ws(t,"seed",u),ws(t,"seedLength",o),Rz(t,"state",c,l),ws(t,"stateLength",v),ws(t,"byteLength",f),Se(t,"toJSON",p),Se(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=SCr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return Cz(e,n,a)}function h(d,g){return jz(d)||jz(g)||g<=0?NaN:Cz(e,d,g)}}Gz.exports=TCr});var Uz=s((ace,Vz)=>{"use strict";var ICr=vf(),_Cr=ICr();Vz.exports=_Cr});var Dz=s((sce,Wz)=>{"use strict";var LCr=w(),Hz=Uz(),PCr=vf();LCr(Hz,"factory",PCr);Wz.exports=Hz});var Jz=s((uce,Xz)=>{"use strict";var RCr=k().isPrimitive,FCr=W().isPrimitive,zz=y(),MCr=sr();function BCr(r,e){return!RCr(r)||MCr(r)?new TypeError(zz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):FCr(e)?null:new TypeError(zz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Xz.exports=BCr});var Yz=s((oce,xz)=>{"use strict";var kCr=nr();function jCr(r,e,t){return kCr(e+t*r())}xz.exports=jCr});var cf=s((fce,iX)=>{"use strict";var ct=w(),As=R(),Zz=M(),$z=I(),Qz=L(),Kz=S(),rX=O(),CCr=C(),Li=tt().factory,eX=E(),GCr=B(),Ss=y(),VCr=Jz(),tX=Yz();function UCr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Li();else if(arguments.length===1){if(t=arguments[0],!$z(t))throw new TypeError(Ss("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Kz(t,"prng")){if(!Qz(t.prng))throw new TypeError(Ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Li({prng:t.prng})}else e=Li(t)}else{if(u=arguments[0],r=arguments[1],a=VCr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!$z(t))throw new TypeError(Ss("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Kz(t,"prng")){if(!Qz(t.prng))throw new TypeError(Ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Li({prng:t.prng})}else e=Li(t)}else e=Li()}return u===void 0?n=d:n=h,i=e.PRNG,ct(n,"NAME","lognormal"),t&&t.prng?(ct(n,"seed",null),ct(n,"seedLength",null),Zz(n,"state",rX(null),CCr),ct(n,"stateLength",null),ct(n,"byteLength",null),ct(n,"toJSON",rX(null))):(As(n,"seed",o),As(n,"seedLength",v),Zz(n,"state",l,p),As(n,"stateLength",f),As(n,"byteLength",c),ct(n,"toJSON",m)),ct(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=GCr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return tX(e,u,r)}function d(g,q){return eX(g)||eX(q)||q<=0?NaN:tX(e,g,q)}}iX.exports=UCr});var aX=s((vce,nX)=>{"use strict";var HCr=cf(),WCr=HCr();nX.exports=WCr});var oX=s((cce,uX)=>{"use strict";var DCr=w(),sX=aX(),zCr=cf();DCr(sX,"factory",zCr);uX.exports=sX});var lf=s((lce,fX)=>{"use strict";var XCr=ei(),JCr=Q(),xCr=XCr-1;function YCr(){var r=JCr(1+xCr*Math.random());return r|0}fX.exports=YCr});var mf=s((pce,gX)=>{"use strict";var Oe=w(),lt=R(),vX=M(),pf=S(),ZCr=I(),$Cr=or().isPrimitive,QCr=Cr(),KCr=ie().isPrimitive,cX=La(),Hr=y(),Os=ei(),Er=_t(),Pi=$e(),rGr=B(),lX=lf(),gf=Os-1|0,eGr=Os-1|0,tGr=16807,Ts=1,Is=2,pt=2,Nr=4,Fn=5;function pX(r,e){var t;return e?t="option":t="argument",r.length<Fn+1?new RangeError(Hr("invalid %s. State array has insufficient length.",t)):r[0]!==Ts?new RangeError(Hr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ts,r[0])):r[1]!==Is?new RangeError(Hr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Is,r[1])):r[pt]!==1?new RangeError(Hr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[pt])):r[Nr]!==r.length-Fn?new RangeError(Hr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Fn,r[Nr])):null}function iGr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!ZCr(r))throw new TypeError(Hr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(pf(r,"copy")&&(i.copy=r.copy,!$Cr(r.copy)))throw new TypeError(Hr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(pf(r,"state")){if(t=r.state,i.state=!0,!cX(t))throw new TypeError(Hr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=pX(t,!0),u)throw u;i.copy===!1?e=t:(e=new Er(t.length),Pi(t.length,t,1,e,1)),t=new Er(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,t[Nr])}if(n===void 0)if(pf(r,"seed"))if(n=r.seed,i.seed=!0,KCr(n)){if(n>eGr)throw new RangeError(Hr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(QCr(n)&&n.length>0)a=n.length,e=new Er(Fn+a),e[0]=Ts,e[1]=Is,e[pt]=1,e[Nr]=a,Pi.ndarray(a,n,1,0,e,1,Nr+1),t=new Er(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Hr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=lX()|0}else n=lX()|0;return t===void 0&&(e=new Er(Fn+1),e[0]=Ts,e[1]=Is,e[pt]=1,e[Nr]=1,e[Nr+1]=n,t=new Er(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),Oe(h,"NAME","minstd"),lt(h,"seed",o),lt(h,"seedLength",v),vX(h,"state",l,p),lt(h,"stateLength",f),lt(h,"byteLength",c),Oe(h,"toJSON",m),Oe(h,"MIN",1),Oe(h,"MAX",Os-1),Oe(h,"normalized",d),Oe(d,"NAME",h.NAME),lt(d,"seed",o),lt(d,"seedLength",v),vX(d,"state",l,p),lt(d,"stateLength",f),lt(d,"byteLength",c),Oe(d,"toJSON",m),Oe(d,"MIN",(h.MIN-1)/gf),Oe(d,"MAX",(h.MAX-1)/gf),h;function o(){var g=e[Nr];return Pi(g,n,1,new Er(g),1)}function v(){return e[Nr]}function f(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return Pi(g,e,1,new Er(g),1)}function p(g){var q;if(!cX(g))throw new TypeError(Hr("invalid argument. Must provide an Int32Array. Value: `%s`.",g));if(q=pX(g,!1),q)throw q;i.copy===!1?i.state&&g.length===e.length?Pi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new Er(g.length)),Pi(g.length,g,1,e,1)),t=new Er(e.buffer,e.byteOffset+(pt+1)*e.BYTES_PER_ELEMENT,1),n=new Er(e.buffer,e.byteOffset+(Nr+1)*e.BYTES_PER_ELEMENT,e[Nr])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=rGr(e),g.params=[],g}function h(){var g=t[0]|0;return g=tGr*g%Os|0,t[0]=g,g|0}function d(){return(h()-1)/gf}}gX.exports=iGr});var dX=s((gce,mX)=>{"use strict";var nGr=mf(),aGr=lf(),sGr=nGr({seed:aGr()});mX.exports=sGr});var yX=s((mce,qX)=>{"use strict";var uGr=w(),hX=dX(),oGr=mf();uGr(hX,"factory",oGr);qX.exports=hX});var wX=s((dce,bX)=>{"use strict";var fGr=E(),vGr=8;function cGr(r,e,t){var i,n;for(n=0;n<vGr;n++)if(i=r(),fGr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}bX.exports=cGr});var df=s((hce,EX)=>{"use strict";var lGr=ei(),pGr=Q(),gGr=lGr-1;function mGr(){var r=pGr(1+gGr*Math.random());return r|0}EX.exports=mGr});var yf=s((qce,IX)=>{"use strict";var Te=w(),gt=R(),NX=M(),hf=S(),dGr=I(),hGr=or().isPrimitive,qGr=Cr(),yGr=ie().isPrimitive,AX=La(),Ri=$e(),bGr=Q(),Ar=_t(),Mn=ei(),wGr=B(),kr=y(),SX=wX(),OX=df(),qf=Mn-1|0,EGr=Mn-1|0,NGr=16807,Or=32,Ps=1,Rs=3,mt=2,Fi=Or+3,Sr=Or+6,Bn=Or+7,_s=Fi+1,Ls=Fi+2;function TX(r,e){var t;return e?t="option":t="argument",r.length<Bn+1?new RangeError(kr("invalid %s. State array has insufficient length.",t)):r[0]!==Ps?new RangeError(kr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ps,r[0])):r[1]!==Rs?new RangeError(kr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Rs,r[1])):r[mt]!==Or?new RangeError(kr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Or,r[mt])):r[Fi]!==2?new RangeError(kr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[Fi])):r[Sr]!==r.length-Bn?new RangeError(kr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Bn,r[Sr])):null}function AGr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!dGr(r))throw new TypeError(kr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hf(r,"copy")&&(i.copy=r.copy,!hGr(r.copy)))throw new TypeError(kr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(hf(r,"state")){if(t=r.state,i.state=!0,!AX(t))throw new TypeError(kr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=TX(t,!0),u)throw u;i.copy===!1?e=t:(e=new Ar(t.length),Ri(t.length,t,1,e,1)),t=new Ar(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Ar(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,t[Sr])}if(n===void 0)if(hf(r,"seed"))if(n=r.seed,i.seed=!0,yGr(n)){if(n>EGr)throw new RangeError(kr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(qGr(n)&&n.length>0)a=n.length,e=new Ar(Bn+a),e[0]=Ps,e[1]=Rs,e[mt]=Or,e[Fi]=2,e[Ls]=n[0],e[Sr]=a,Ri.ndarray(a,n,1,0,e,1,Sr+1),t=new Ar(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Ar(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,a),t=SX(h,t,Or),e[_s]=t[0];else throw new TypeError(kr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=OX()|0}else n=OX()|0;return t===void 0&&(e=new Ar(Bn+1),e[0]=Ps,e[1]=Rs,e[mt]=Or,e[Fi]=2,e[Ls]=n,e[Sr]=1,e[Sr+1]=n,t=new Ar(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Ar(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,1),t=SX(h,t,Or),e[_s]=t[0]),Te(d,"NAME","minstd-shuffle"),gt(d,"seed",o),gt(d,"seedLength",v),NX(d,"state",l,p),gt(d,"stateLength",f),gt(d,"byteLength",c),Te(d,"toJSON",m),Te(d,"MIN",1),Te(d,"MAX",Mn-1),Te(d,"normalized",g),Te(g,"NAME",d.NAME),gt(g,"seed",o),gt(g,"seedLength",v),NX(g,"state",l,p),gt(g,"stateLength",f),gt(g,"byteLength",c),Te(g,"toJSON",m),Te(g,"MIN",(d.MIN-1)/qf),Te(g,"MAX",(d.MAX-1)/qf),d;function o(){var q=e[Sr];return Ri(q,n,1,new Ar(q),1)}function v(){return e[Sr]}function f(){return e.length}function c(){return e.byteLength}function l(){var q=e.length;return Ri(q,e,1,new Ar(q),1)}function p(q){var N;if(!AX(q))throw new TypeError(kr("invalid argument. Must provide an Int32Array. Value: `%s`.",q));if(N=TX(q,!1),N)throw N;i.copy===!1?i.state&&q.length===e.length?Ri(q.length,q,1,e,1):(e=q,i.state=!0):(q.length!==e.length&&(e=new Ar(q.length)),Ri(q.length,q,1,e,1)),t=new Ar(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,Or),n=new Ar(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,e[Sr])}function m(){var q={};return q.type="PRNG",q.name=d.NAME,q.state=wGr(e),q.params=[],q}function h(){var q=e[Ls]|0;return q=NGr*q%Mn|0,e[Ls]=q,q|0}function d(){var q,N;return q=e[_s],N=bGr(Or*(q/Mn)),q=t[N],e[_s]=q,t[N]=h(),q}function g(){return(d()-1)/qf}}IX.exports=AGr});var LX=s((yce,_X)=>{"use strict";var SGr=yf(),OGr=df(),TGr=SGr({seed:OGr()});_X.exports=TGr});var FX=s((bce,RX)=>{"use strict";var IGr=w(),PX=LX(),_Gr=yf();IGr(PX,"factory",_Gr);RX.exports=PX});var BX=s((wce,MX)=>{"use strict";var LGr=nr();function PGr(r,e){for(var t=r(),i=1;t>LGr(-e);)i+=1,t*=r();return i-1}MX.exports=PGr});var jX=s((Ece,kX)=>{"use strict";var RGr=Q();function FGr(r){return RGr(r)===r&&r<0}kX.exports=FGr});var GX=s((Nce,CX)=>{"use strict";var MGr=jX();CX.exports=MGr});var UX=s((Ace,VX)=>{"use strict";var BGr=GX(),kGr=Qi();function jGr(r){return BGr(r)?NaN:kGr(r+1)}VX.exports=jGr});var WX=s((Sce,HX)=>{"use strict";var CGr=UX();HX.exports=CGr});var bf=s((Oce,DX)=>{"use strict";var GGr=.9189385332046728;DX.exports=GGr});var xX=s((Tce,JX)=>{"use strict";var VGr=WX(),zX=Q(),UGr=S0(),HGr=G(),XX=J(),Fs=P(),WGr=bf(),DGr=1/12,zGr=1/360;function XGr(r,e){var t,i,n,a,u,o,v,f,c,l;for(t=HGr(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,u=-3.6224/(v-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-XX(c))+v,c+=e+.445,zX(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=UGr(c)*.5-c,l=u*r()),a=.5-XX(c),(a>=.013||a>=l)&&(f=zX((2*o/a+v)*c+e+.445),l*=i/(o/(a*a)+v),c=(f+.5)*Fs(e/f),c+=-e-WGr+f,c-=(DGr-zGr/(f*f))/f,f>=10&&c>=Fs(l*t)||(c=f*Fs(e)-e-VGr(f),f>=0&&f<=9&&c>=Fs(l))))return f}}JX.exports=XGr});var ZX=s((Ice,YX)=>{"use strict";var JGr=BX(),xGr=xX();function YGr(r,e){return e<30?JGr(r,e):xGr(r,e)}YX.exports=YGr});var wf=s((_ce,iJ)=>{"use strict";var Ie=w(),Ms=R(),$X=M(),ZGr=W().isPrimitive,QX=I(),KX=L(),rJ=S(),eJ=O(),$Gr=C(),Bs=D().factory,QGr=E(),KGr=B(),ks=y(),tJ=ZX();function rVr(){var r,e,t,i;if(arguments.length===0)t=Bs();else if(arguments.length===1&&QX(arguments[0]))if(e=arguments[0],rJ(e,"prng")){if(!KX(e.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Bs(e);else{if(r=arguments[0],!ZGr(r))throw new TypeError(ks("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!QX(e))throw new TypeError(ks("invalid argument. Options argument must be an object. Value: `%s`.",e));if(rJ(e,"prng")){if(!KX(e.prng))throw new TypeError(ks("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Bs(e)}else t=Bs()}return r===void 0?i=p:i=l,Ie(i,"NAME","poisson"),e&&e.prng?(Ie(i,"seed",null),Ie(i,"seedLength",null),$X(i,"state",eJ(null),$Gr),Ie(i,"stateLength",null),Ie(i,"byteLength",null),Ie(i,"toJSON",eJ(null)),Ie(i,"PRNG",t)):(Ms(i,"seed",n),Ms(i,"seedLength",a),$X(i,"state",v,f),Ms(i,"stateLength",u),Ms(i,"byteLength",o),Ie(i,"toJSON",c),Ie(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=KGr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return tJ(t,r)}function p(m){return QGr(m)||m<=0?NaN:tJ(t,m)}}iJ.exports=rVr});var aJ=s((Lce,nJ)=>{"use strict";var eVr=wf(),tVr=eVr();nJ.exports=tVr});var Ef=s((Pce,uJ)=>{"use strict";var iVr=w(),sJ=aJ(),nVr=wf();iVr(sJ,"factory",nVr);uJ.exports=sJ});var fJ=s((Rce,oJ)=>{"use strict";var aVr=W().isPrimitive,sVr=k().isPrimitive,Nf=y(),uVr=sr();function oVr(r,e){return aVr(r)?!sVr(e)||uVr(e)?new TypeError(Nf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Nf("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Nf("invalid argument. First argument must be a positive number. Value: `%s`.",r))}oJ.exports=oVr});var Tf=s((Fce,hJ)=>{"use strict";var dt=w(),js=R(),vJ=M(),Mi=S(),cJ=I(),Af=$r(),lJ=or().isPrimitive,pJ=L(),gJ=O(),fVr=C(),mJ=E(),Bi=Ef().factory,Cs=Ei().factory,Sf=$e(),Of=lr(),dJ=In(),vVr=B(),_e=y(),cVr=fJ();function lVr(){var r,e,t,i,n,a,u,o,v,f;if(u=!0,arguments.length===0)i={copy:!1},t=Bi(i);else if(arguments.length===1){if(i=arguments[0],!cJ(i))throw new TypeError(_e("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Mi(i,"copy")&&!lJ(i.copy))throw new TypeError(_e("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Mi(i,"prng")){if(!pJ(i.prng))throw new TypeError(_e("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Bi({prng:i.prng})}else{if(Mi(i,"state")&&!Af(i.state))throw new TypeError(_e("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=dJ({},i),i.copy===!1?u=!1:i.state&&(i.state=Sf(i.state.length,i.state,1,new Of(i.state.length),1)),i.copy=!1,t=Bi(i)}}else{if(f=arguments[0],v=arguments[1],o=cVr(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!cJ(i))throw new TypeError(_e("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Mi(i,"copy")&&!lJ(i.copy))throw new TypeError(_e("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Mi(i,"prng")){if(!pJ(i.prng))throw new TypeError(_e("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Bi({prng:i.prng})}else{if(Mi(i,"state")&&!Af(i.state))throw new TypeError(_e("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=dJ({},i),i.copy===!1?u=!1:i.state&&(i.state=Sf(i.state.length,i.state,1,new Of(i.state.length),1)),i.copy=!1,t=Bi(i)}}else i={copy:!1},t=Bi(i)}return i&&i.prng?f===void 0?r=Cs({prng:i.prng}):r=Cs(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=Cs({state:e,copy:!1}):r=Cs(f,v/(1-v),{state:e,copy:!1})),f===void 0?n=N:n=q,a=t.PRNG,dt(n,"NAME","negative-binomial"),i&&i.prng?(dt(n,"seed",null),dt(n,"seedLength",null),vJ(n,"state",gJ(null),fVr),dt(n,"stateLength",null),dt(n,"byteLength",null),dt(n,"toJSON",gJ(null))):(js(n,"seed",c),js(n,"seedLength",l),vJ(n,"state",h,d),js(n,"stateLength",p),js(n,"byteLength",m),dt(n,"toJSON",g)),dt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function m(){return a.byteLength}function h(){return a.state}function d(A){if(!Af(A))throw new TypeError(_e("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));u&&(A=Sf(A.length,A,1,new Of(A.length),1)),a.state=A}function g(){var A={};return A.type="PRNG",A.name=n.NAME,A.state=vVr(a.state),f===void 0?A.params=[]:A.params=[f,v],A}function q(){return t(r())}function N(A,j){return mJ(A)||mJ(j)||j<=0||j>=1?NaN:t(r(A,j/(1-j)))}}hJ.exports=lVr});var yJ=s((Mce,qJ)=>{"use strict";var pVr=Tf(),gVr=pVr();qJ.exports=gVr});var EJ=s((Bce,wJ)=>{"use strict";var mVr=w(),bJ=yJ(),dVr=Tf();mVr(bJ,"factory",dVr);wJ.exports=bJ});var SJ=s((kce,AJ)=>{"use strict";var hVr=k().isPrimitive,qVr=W().isPrimitive,NJ=y(),yVr=sr();function bVr(r,e){return!hVr(r)||yVr(r)?new TypeError(NJ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):qVr(e)?null:new TypeError(NJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}AJ.exports=bVr});var TJ=s((jce,OJ)=>{"use strict";function wVr(r,e,t){return e+t*r()}OJ.exports=wVr});var If=s((Cce,BJ)=>{"use strict";var ht=w(),Gs=R(),IJ=M(),_J=I(),LJ=L(),PJ=S(),RJ=O(),EVr=C(),ki=tt().factory,FJ=E(),NVr=B(),Vs=y(),AVr=SJ(),MJ=TJ();function SVr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=ki();else if(arguments.length===1){if(t=arguments[0],!_J(t))throw new TypeError(Vs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(PJ(t,"prng")){if(!LJ(t.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ki({prng:t.prng})}else e=ki(t)}else{if(u=arguments[0],r=arguments[1],a=AVr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!_J(t))throw new TypeError(Vs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(PJ(t,"prng")){if(!LJ(t.prng))throw new TypeError(Vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ki({prng:t.prng})}else e=ki(t)}else e=ki()}return u===void 0?n=d:n=h,i=e.PRNG,ht(n,"NAME","normal"),t&&t.prng?(ht(n,"seed",null),ht(n,"seedLength",null),IJ(n,"state",RJ(null),EVr),ht(n,"stateLength",null),ht(n,"byteLength",null),ht(n,"toJSON",RJ(null))):(Gs(n,"seed",o),Gs(n,"seedLength",v),IJ(n,"state",l,p),Gs(n,"stateLength",f),Gs(n,"byteLength",c),ht(n,"toJSON",m)),ht(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=NVr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return MJ(e,u,r)}function d(g,q){return FJ(g)||FJ(q)||q<=0?NaN:MJ(e,g,q)}}BJ.exports=SVr});var jJ=s((Gce,kJ)=>{"use strict";var OVr=If(),TVr=OVr();kJ.exports=TVr});var VJ=s((Vce,GJ)=>{"use strict";var IVr=w(),CJ=jJ(),_Vr=If();IVr(CJ,"factory",_Vr);GJ.exports=CJ});var DJ=s((Uce,WJ)=>{"use strict";var UJ=W().isPrimitive,HJ=y();function LVr(r,e){return UJ(r)?UJ(e)?null:new TypeError(HJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(HJ("invalid argument. First argument must be a positive number. Value: `%s`.",r))}WJ.exports=LVr});var XJ=s((Hce,zJ)=>{"use strict";var PVr=H();function RVr(r,e,t){return t/PVr(r(),1/e)}zJ.exports=RVr});var _f=s((Wce,rx)=>{"use strict";var Le=w(),Us=R(),JJ=M(),xJ=I(),YJ=L(),ZJ=S(),$J=O(),FVr=C(),Hs=D().factory,QJ=E(),MVr=B(),Ws=y(),BVr=DJ(),KJ=XJ();function kVr(){var r,e,t,i,n,a;if(arguments.length===0)i=Hs();else if(arguments.length===1){if(t=arguments[0],!xJ(t))throw new TypeError(Ws("invalid argument. Options argument must be an object. Value: `%s`.",t));if(ZJ(t,"prng")){if(!YJ(t.prng))throw new TypeError(Ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Hs(t)}else{if(r=arguments[0],e=arguments[1],a=BVr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!xJ(t))throw new TypeError(Ws("invalid argument. Options argument must be an object. Value: `%s`.",t));if(ZJ(t,"prng")){if(!YJ(t.prng))throw new TypeError(Ws("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Hs(t)}else i=Hs()}return r===void 0?n=h:n=m,Le(n,"NAME","pareto-type1"),t&&t.prng?(Le(n,"seed",null),Le(n,"seedLength",null),JJ(n,"state",$J(null),FVr),Le(n,"stateLength",null),Le(n,"byteLength",null),Le(n,"toJSON",$J(null)),Le(n,"PRNG",i)):(Us(n,"seed",u),Us(n,"seedLength",o),JJ(n,"state",c,l),Us(n,"stateLength",v),Us(n,"byteLength",f),Le(n,"toJSON",p),Le(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=MVr(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function m(){return KJ(i,r,e)}function h(d,g){return QJ(d)||QJ(g)||d<=0||g<=0?NaN:KJ(i,d,g)}}rx.exports=kVr});var tx=s((Dce,ex)=>{"use strict";var jVr=_f(),CVr=jVr();ex.exports=CVr});var ax=s((zce,nx)=>{"use strict";var GVr=w(),ix=tx(),VVr=_f();GVr(ix,"factory",VVr);nx.exports=ix});var ux=s((Xce,sx)=>{"use strict";var UVr=G(),HVr=P();function WVr(r,e){return e*UVr(-2*HVr(r()))}sx.exports=WVr});var Lf=s((Jce,gx)=>{"use strict";var Pe=w(),Ds=R(),ox=M(),DVr=W().isPrimitive,fx=I(),vx=L(),cx=S(),lx=O(),zVr=C(),zs=D().factory,XVr=E(),JVr=B(),Xs=y(),px=ux();function xVr(){var r,e,t,i;if(arguments.length===0)t=zs();else if(arguments.length===1&&fx(arguments[0]))if(e=arguments[0],cx(e,"prng")){if(!vx(e.prng))throw new TypeError(Xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=zs(e);else{if(r=arguments[0],!DVr(r))throw new TypeError(Xs("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!fx(e))throw new TypeError(Xs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(cx(e,"prng")){if(!vx(e.prng))throw new TypeError(Xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=zs(e)}else t=zs()}return r===void 0?i=p:i=l,Pe(i,"NAME","rayleigh"),e&&e.prng?(Pe(i,"seed",null),Pe(i,"seedLength",null),ox(i,"state",lx(null),zVr),Pe(i,"stateLength",null),Pe(i,"byteLength",null),Pe(i,"toJSON",lx(null)),Pe(i,"PRNG",t)):(Ds(i,"seed",n),Ds(i,"seedLength",a),ox(i,"state",v,f),Ds(i,"stateLength",u),Ds(i,"byteLength",o),Pe(i,"toJSON",c),Pe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=JVr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return px(t,r)}function p(m){return XVr(m)||m<=0?NaN:px(t,m)}}gx.exports=xVr});var dx=s((xce,mx)=>{"use strict";var YVr=Lf(),ZVr=YVr();mx.exports=ZVr});var yx=s((Yce,qx)=>{"use strict";var $Vr=w(),hx=dx(),QVr=Lf();$Vr(hx,"factory",QVr);qx.exports=hx});var Mf=s((Zce,Ix)=>{"use strict";var qt=w(),Js=R(),bx=M(),ji=S(),wx=W().isPrimitive,Ex=I(),Pf=$r(),Nx=or().isPrimitive,KVr=E(),Ax=L(),Sx=O(),rUr=C(),xs=Pn().factory,Ci=tt().factory,Rf=$e(),Ff=lr(),Ox=In(),eUr=B(),Zr=y(),Tx=G();function tUr(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=Ci(n);else if(arguments.length===1)if(Ex(arguments[0])){if(n=arguments[0],ji(n,"copy")&&!Nx(n.copy))throw new TypeError(Zr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(ji(n,"prng")){if(!Ax(n.prng))throw new TypeError(Zr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Ci({prng:n.prng})}else{if(ji(n,"state")&&!Pf(n.state))throw new TypeError(Zr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=Ox({},n),n.copy===!1?u=!1:n.state&&(n.state=Rf(n.state.length,n.state,1,new Ff(n.state.length),1)),n.copy=!1,t=Ci(n)}}else{if(o=arguments[0],!wx(o))throw new TypeError(Zr("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=Ci(n)}else{if(o=arguments[0],!wx(o))throw new TypeError(Zr("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!Ex(n))throw new TypeError(Zr("invalid argument. Options argument must be an object. Value: `%s`.",n));if(ji(n,"copy")&&!Nx(n.copy))throw new TypeError(Zr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(ji(n,"prng")){if(!Ax(n.prng))throw new TypeError(Zr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Ci({prng:n.prng})}else{if(ji(n,"state")&&!Pf(n.state))throw new TypeError(Zr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=Ox({},n),n.copy===!1?u=!1:n.state&&(n.state=Rf(n.state.length,n.state,1,new Ff(n.state.length),1)),n.copy=!1,t=Ci(n)}}return n&&n.prng?o===void 0?r=xs({prng:n.prng}):r=xs(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=xs({state:e,copy:!1}):r=xs(o,{state:e,copy:!1})),o===void 0?a=g:a=d,i=t.PRNG,qt(a,"NAME","t"),n&&n.prng?(qt(a,"seed",null),qt(a,"seedLength",null),bx(a,"state",Sx(null),rUr),qt(a,"stateLength",null),qt(a,"byteLength",null),qt(a,"toJSON",Sx(null))):(Js(a,"seed",v),Js(a,"seedLength",f),bx(a,"state",p,m),Js(a,"stateLength",c),Js(a,"byteLength",l),qt(a,"toJSON",h)),qt(a,"PRNG",i),a;function v(){return i.seed}function f(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(q){if(!Pf(q))throw new TypeError(Zr("invalid argument. Must provide a Uint32Array. Value: `%s`.",q));u&&(q=Rf(q.length,q,1,new Ff(q.length),1)),i.state=q}function h(){var q={};return q.type="PRNG",q.name=a.NAME,q.state=eUr(i.state),o===void 0?q.params=[]:q.params=[o],q}function d(){return t()/Tx(r()/o)}function g(q){return KVr(q)||q<=0?NaN:t()/Tx(r(q)/q)}}Ix.exports=tUr});var Lx=s(($ce,_x)=>{"use strict";var iUr=Mf(),nUr=iUr();_x.exports=nUr});var Fx=s((Qce,Rx)=>{"use strict";var aUr=w(),Px=Lx(),sUr=Mf();aUr(Px,"factory",sUr);Rx.exports=Px});var Bx=s((Kce,Mx)=>{"use strict";var Bf=k().isPrimitive,Ys=y(),kf=sr();function uUr(r,e,t){return!Bf(r)||kf(r)?new TypeError(Ys("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Bf(e)||kf(e)?new TypeError(Ys("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Bf(t)||kf(t)?new TypeError(Ys("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(Ys("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}Mx.exports=uUr});var Cx=s((rle,jx)=>{"use strict";var kx=G();function oUr(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+kx(a*u)):(a=(t-e)*(t-i),t-kx(a*(1-u)))}jx.exports=oUr});var Cf=s((ele,zx)=>{"use strict";var Re=w(),Zs=R(),Gx=M(),Vx=I(),Ux=L(),Hx=S(),Wx=O(),fUr=C(),$s=D().factory,jf=E(),vUr=B(),Qs=y(),cUr=Bx(),Dx=Cx();function lUr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=$s();else if(arguments.length===1){if(r=arguments[0],!Vx(r))throw new TypeError(Qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Hx(r,"prng")){if(!Ux(r.prng))throw new TypeError(Qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=$s(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=cUr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!Vx(r))throw new TypeError(Qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Hx(r,"prng")){if(!Ux(r.prng))throw new TypeError(Qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=$s(r)}else e=$s()}return n===void 0?t=d:t=h,Re(t,"NAME","triangular"),r&&r.prng?(Re(t,"seed",null),Re(t,"seedLength",null),Gx(t,"state",Wx(null),fUr),Re(t,"stateLength",null),Re(t,"byteLength",null),Re(t,"toJSON",Wx(null)),Re(t,"PRNG",e)):(Zs(t,"seed",o),Zs(t,"seedLength",v),Gx(t,"state",l,p),Zs(t,"stateLength",f),Zs(t,"byteLength",c),Re(t,"toJSON",m),Re(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=vUr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return Dx(e,n,a,u)}function d(g,q,N){return jf(g)||jf(q)||jf(N)||!(g<=N&&N<=q)?NaN:Dx(e,g,q,N)}}zx.exports=lUr});var Jx=s((tle,Xx)=>{"use strict";var pUr=Cf(),gUr=pUr();Xx.exports=gUr});var Zx=s((ile,Yx)=>{"use strict";var mUr=w(),xx=Jx(),dUr=Cf();mUr(xx,"factory",dUr);Yx.exports=xx});var rY=s((nle,Kx)=>{"use strict";var $x=k().isPrimitive,Gf=y(),Qx=sr();function hUr(r,e){return!$x(r)||Qx(r)?new TypeError(Gf("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!$x(e)||Qx(e)?new TypeError(Gf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Gf("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}Kx.exports=hUr});var tY=s((ale,eY)=>{"use strict";function qUr(r,e,t){var i=r();return t*i+(1-i)*e}eY.exports=qUr});var Vf=s((sle,vY)=>{"use strict";var Fe=w(),Ks=R(),iY=M(),nY=I(),aY=L(),sY=S(),uY=O(),yUr=C(),ru=D().factory,oY=E(),bUr=B(),eu=y(),wUr=rY(),fY=tY();function EUr(){var r,e,t,i,n,a;if(arguments.length===0)e=ru();else if(arguments.length===1){if(r=arguments[0],!nY(r))throw new TypeError(eu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(sY(r,"prng")){if(!aY(r.prng))throw new TypeError(eu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ru(r)}else{if(n=arguments[0],a=arguments[1],i=wUr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!nY(r))throw new TypeError(eu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(sY(r,"prng")){if(!aY(r.prng))throw new TypeError(eu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ru(r)}else e=ru()}return n===void 0?t=h:t=m,Fe(t,"NAME","uniform"),r&&r.prng?(Fe(t,"seed",null),Fe(t,"seedLength",null),iY(t,"state",uY(null),yUr),Fe(t,"stateLength",null),Fe(t,"byteLength",null),Fe(t,"toJSON",uY(null)),Fe(t,"PRNG",e)):(Ks(t,"seed",u),Ks(t,"seedLength",o),iY(t,"state",c,l),Ks(t,"stateLength",v),Ks(t,"byteLength",f),Fe(t,"toJSON",p),Fe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=bUr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return fY(e,n,a)}function h(d,g){return oY(d)||oY(g)||d>=g?NaN:fY(e,d,g)}}vY.exports=EUr});var lY=s((ule,cY)=>{"use strict";var NUr=Vf(),AUr=NUr();cY.exports=AUr});var mY=s((ole,gY)=>{"use strict";var SUr=w(),pY=lY(),OUr=Vf();SUr(pY,"factory",OUr);gY.exports=pY});var yY=s((fle,qY)=>{"use strict";var dY=W().isPrimitive,hY=y();function TUr(r,e){return dY(r)?dY(e)?null:new TypeError(hY("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(hY("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}qY.exports=TUr});var wY=s((vle,bY)=>{"use strict";var IUr=H(),_Ur=P();function LUr(r,e,t){return t*IUr(-_Ur(1-r()),1/e)}bY.exports=LUr});var Uf=s((cle,_Y)=>{"use strict";var Me=w(),tu=R(),EY=M(),NY=I(),AY=L(),SY=S(),OY=O(),PUr=C(),iu=D().factory,TY=E(),RUr=B(),nu=y(),FUr=yY(),IY=wY();function MUr(){var r,e,t,i,n,a;if(arguments.length===0)t=iu();else if(arguments.length===1){if(e=arguments[0],!NY(e))throw new TypeError(nu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(SY(e,"prng")){if(!AY(e.prng))throw new TypeError(nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=iu(e)}else{if(a=arguments[0],r=arguments[1],n=FUr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!NY(e))throw new TypeError(nu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(SY(e,"prng")){if(!AY(e.prng))throw new TypeError(nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=iu(e)}else t=iu()}return r===void 0?i=h:i=m,Me(i,"NAME","weibull"),e&&e.prng?(Me(i,"seed",null),Me(i,"seedLength",null),EY(i,"state",OY(null),PUr),Me(i,"stateLength",null),Me(i,"byteLength",null),Me(i,"toJSON",OY(null)),Me(i,"PRNG",t)):(tu(i,"seed",u),tu(i,"seedLength",o),EY(i,"state",c,l),tu(i,"stateLength",v),tu(i,"byteLength",f),Me(i,"toJSON",p),Me(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=RUr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return IY(t,a,r)}function h(d,g){return TY(d)||TY(g)||d<=0||g<=0?NaN:IY(t,d,g)}}_Y.exports=MUr});var PY=s((lle,LY)=>{"use strict";var BUr=Uf(),kUr=BUr();LY.exports=kUr});var MY=s((ple,FY)=>{"use strict";var jUr=w(),RY=PY(),CUr=Uf();jUr(RY,"factory",CUr);FY.exports=RY});var kY=s((gle,BY)=>{"use strict";var GUr=cr(),VUr=jr().isPrimitive,UUr=y(),HUr=A2();function WUr(r){if(VUr(r))return r;if(GUr(r))return HUr(r);throw new TypeError(UUr("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}BY.exports=WUr});var CY=s((mle,jY)=>{"use strict";var DUr=kY();jY.exports=DUr});var VY=s((dle,GY)=>{"use strict";var F={};F.arcsine=Uk().factory;F.bernoulli=Qk().factory;F.beta=bC().factory;F.betaprime=aG().factory;F.binomial=VG().factory;F.boxMueller=eV().factory;F.cauchy=yV().factory;F.chi=UV().factory;F.chisquare=Pn().factory;F.cosine=bU().factory;F.discreteUniform=VU().factory;F.erlang=nH().factory;F.exponential=qH().factory;F.f=jH().factory;F.frechet=rW().factory;F.gamma=Ei().factory;F.geometric=mW().factory;F.gumbel=MW().factory;F.hypergeometric=oD().factory;F.improvedZiggurat=tt().factory;F.invgamma=AD().factory;F.kumaraswamy=DD().factory;F.laplace=oz().factory;F.levy=Oz().factory;F.logistic=Dz().factory;F.lognormal=oX().factory;F.minstd=yX().factory;F.minstdShuffle=FX().factory;F.mt19937=D().factory;F.negativeBinomial=EJ().factory;F.normal=VJ().factory;F.pareto1=ax().factory;F.poisson=Ef().factory;F.rayleigh=yx().factory;F.t=Fx().factory;F.triangular=Zx().factory;F.uniform=mY().factory;F.weibull=MY().factory;F.normalizeSeed=CY();GY.exports=F});var HY=s((hle,UY)=>{"use strict";var zUr=K().isPrimitive,XUr=y();function JUr(r){return e;function e(t){if(!zUr(t))throw new TypeError(XUr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}UY.exports=JUr});var DY=s((qle,WY)=>{"use strict";var xUr=HY();WY.exports=xUr});var xY=s((yle,JY)=>{"use strict";var zY=K().isPrimitive,XY=y();function YUr(r){return e;function e(t,i){if(!zY(t))throw new TypeError(XY("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!zY(i))throw new TypeError(XY("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}JY.exports=YUr});var ZY=s((ble,YY)=>{"use strict";var ZUr=xY();YY.exports=ZUr});var QY=s((wle,$Y)=>{"use strict";var Hf=K().isPrimitive,Wf=y();function $Ur(r){return e;function e(t,i,n){if(!Hf(t))throw new TypeError(Wf("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Hf(i))throw new TypeError(Wf("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Hf(n))throw new TypeError(Wf("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}$Y.exports=$Ur});var rZ=s((Ele,KY)=>{"use strict";var QUr=QY();KY.exports=QUr});var tZ=s((Nle,eZ)=>{"use strict";var au={};au.s_o=DY();au.ss_o=ZY();au.sss_o=rZ();eZ.exports=au});var aZ=s((Ale,nZ)=>{"use strict";var iZ={};iZ.tools=tZ();nZ.exports=iZ});var uZ=s((Sle,sZ)=>{"use strict";var Df={};Df.bbinary2d=J1();Df.unary2d=Q1();sZ.exports=Df});var fZ=s((Ole,oZ)=>{"use strict";function KUr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}oZ.exports=KUr});var cZ=s((Tle,vZ)=>{"use strict";function rHr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}vZ.exports=rHr});var gZ=s((Ile,pZ)=>{"use strict";var eHr=E(),tHr=G(),lZ=Xa(),iHr=fZ(),nHr=cZ(),aHr=6123233995736766e-32;function sHr(r){var e,t,i,n,a;if(eHr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*nHr(t),t=tHr(t+t),a=lZ-t,t=t*n-aHr,a-=t,a+=lZ;else{if(i<1e-8)return r;t=i*i,a=t*iHr(t),a=i*a+i}return e?-a:a}pZ.exports=sHr});var Gt=s((_le,mZ)=>{"use strict";var uHr=gZ();mZ.exports=uHr});var yZ=s((Lle,qZ)=>{"use strict";var oHr=E(),dZ=Gt(),fHr=G(),hZ=Xa(),vHr=6123233995736766e-32;function cHr(r){var e;return oHr(r)?NaN:r<-1||r>1?NaN:r>.5?2*dZ(fHr(.5-.5*r)):(e=hZ-dZ(r),e+=vHr,e+=hZ,e)}qZ.exports=cHr});var kn=s((Ple,bZ)=>{"use strict";var lHr=yZ();bZ.exports=lHr});var AZ=s((Rle,NZ)=>{"use strict";var pHr=E(),gHr=Ue(),wZ=G(),mHr=qa(),EZ=P(),dHr=1<<28;function hHr(r){var e;return pHr(r)||r<1?NaN:r===1?0:r>=dHr?EZ(r)+mHr:r>2?EZ(2*r-1/(r+wZ(r*r-1))):(e=r-1,gHr(e+wZ(2*e+e*e)))}NZ.exports=hHr});var OZ=s((Fle,SZ)=>{"use strict";var qHr=AZ();SZ.exports=qHr});var IZ=s((Mle,TZ)=>{"use strict";var yHr=Ja();function bHr(r){return yHr(1/r)}TZ.exports=bHr});var LZ=s((Ble,_Z)=>{"use strict";var wHr=IZ();_Z.exports=wHr});var RZ=s((kle,PZ)=>{"use strict";var EHr=Gt();function NHr(r){return EHr(1+r)}PZ.exports=NHr});var MZ=s((jle,FZ)=>{"use strict";var AHr=RZ();FZ.exports=AHr});var kZ=s((Cle,BZ)=>{"use strict";var SHr=Gt();function OHr(r){return SHr(1-r)}BZ.exports=OHr});var CZ=s((Gle,jZ)=>{"use strict";var THr=kZ();jZ.exports=THr});var VZ=s((Vle,GZ)=>{"use strict";var IHr=Gt();function _Hr(r){return IHr(1/r)}GZ.exports=_Hr});var HZ=s((Ule,UZ)=>{"use strict";var LHr=VZ();UZ.exports=LHr});var XZ=s((Hle,zZ)=>{"use strict";var PHr=Pr(),RHr=E(),FHr=Ue(),WZ=G(),MHr=qa(),DZ=P(),BHr=1/(1<<28),kHr=1<<28;function jHr(r){var e,t,i;return RHr(r)||PHr(r)?r:(r<0&&(r=-r,e=!0),r<BHr?i=r:r>kHr?i=DZ(r)+MHr:r>2?i=DZ(2*r+1/(WZ(r*r+1)+r)):(t=r*r,i=FHr(r+t/(1+WZ(1+t)))),e?-i:i)}zZ.exports=jHr});var zf=s((Wle,JZ)=>{"use strict";var CHr=XZ();JZ.exports=CHr});var YZ=s((Dle,xZ)=>{"use strict";var GHr=zf();function VHr(r){return GHr(1/r)}xZ.exports=VHr});var $Z=s((zle,ZZ)=>{"use strict";var UHr=YZ();ZZ.exports=UHr});var KZ=s((Xle,QZ)=>{"use strict";var HHr=kn(),WHr=G();function DHr(r){return 2*HHr(WHr(r))}QZ.exports=DHr});var e$=s((Jle,r$)=>{"use strict";var zHr=KZ();r$.exports=zHr});var i$=s((xle,t$)=>{"use strict";var XHr=Gt(),JHr=G();function xHr(r){return 2*XHr(JHr(r))}t$.exports=xHr});var a$=s((Yle,n$)=>{"use strict";var YHr=i$();n$.exports=YHr});var o$=s((Zle,u$)=>{"use strict";var ZHr=E(),s$=Ue(),$Hr=_(),QHr=V(),KHr=1/(1<<28);function rWr(r){var e,t;return ZHr(r)||r<-1||r>1?NaN:r===1?$Hr:r===-1?QHr:(r<0&&(e=!0,r=-r),r<KHr?e?-r:r:(r<.5?(t=r+r,t=.5*s$(t+t*r/(1-r))):t=.5*s$((r+r)/(1-r)),e?-t:t))}u$.exports=rWr});var v$=s(($le,f$)=>{"use strict";var eWr=o$();f$.exports=eWr});var l$=s((Qle,c$)=>{"use strict";var tWr=kn();function iWr(r){return tWr(1+r)}c$.exports=iWr});var g$=s((Kle,p$)=>{"use strict";var nWr=l$();p$.exports=nWr});var d$=s((r4e,m$)=>{"use strict";var aWr=kn();function sWr(r){return aWr(1-r)}m$.exports=sWr});var q$=s((e4e,h$)=>{"use strict";var uWr=d$();h$.exports=uWr});var w$=s((t4e,b$)=>{"use strict";var y$=-.16666666666666632,oWr=.00833333333332249,fWr=-.0001984126982985795,vWr=27557313707070068e-22,cWr=-25050760253406863e-24,lWr=158969099521155e-24,pWr=.0416666666666666,gWr=-.001388888888887411,mWr=2480158728947673e-20,dWr=-27557314351390663e-23,hWr=2087572321298175e-24,qWr=-11359647557788195e-27;function yWr(r,e,t,i,n){var a,u,o,v,f;return f=r*r,v=f*f,u=oWr+f*(fWr+f*vWr)+f*v*(cWr+f*lWr),o=f*r,e===0?t[n]=r+o*(y$+f*u):t[n]=r-(f*(.5*e-o*u)-e-o*y$),u=f*(pWr+f*(gWr+f*mWr)),u+=v*v*(dWr+f*(hWr+f*qWr)),a=.5*f,v=1-a,t[n+i]=v+(1-v-a+(f*u-r*e)),t}b$.exports=yWr});var Jf=s((i4e,N$)=>{"use strict";var bWr=Xr(),wWr=zi(),EWr=tr(),NWr=xi(),E$=w$(),AWr=1072243195,SWr=1044381696,Xf=[0,0];function OWr(r,e,t,i){var n,a;if(n=EWr(r),n&=bWr,n<=AWr)return n<SWr&&(r|0)===0&&(e[i]=r,e[i+t]=0),E$(r,0,e,t,i);if(n>=wWr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=NWr(r,Xf),E$(Xf[0],Xf[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}N$.exports=OWr});var S$=s((n4e,A$)=>{"use strict";var TWr=Jf();function IWr(r){return TWr(r,[0,0],1,0)}A$.exports=IWr});var jn=s((a4e,T$)=>{"use strict";var _Wr=w(),O$=S$(),LWr=Jf();_Wr(O$,"assign",LWr);T$.exports=O$});var _$=s((s4e,I$)=>{"use strict";function PWr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}I$.exports=PWr});var P$=s((u4e,L$)=>{"use strict";function RWr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}L$.exports=RWr});var F$=s((o4e,R$)=>{"use strict";function FWr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}R$.exports=FWr});var B$=s((f4e,M$)=>{"use strict";function MWr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}M$.exports=MWr});var j$=s((v4e,k$)=>{"use strict";var BWr=G(),kWr=jn().assign,jWr=_(),CWr=_$(),GWr=P$(),VWr=F$(),UWr=B$(),HWr=.5641895835477563,WWr=2.404825557695773,DWr=5.520078110286311,zWr=616,XWr=-.0014244423042272315,JWr=1413,xWr=.0005468602863106496,Cn=[0,0];function YWr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===jWr?0:r===0?1:r<=4?(a=r*r,n=CWr(a),u=(r+WWr)*(r-zWr/256-XWr),u*n):r<=8?(a=1-r*r/64,n=GWr(a),u=(r+DWr)*(r-JWr/256-xWr),u*n):(a=8/r,i=a*a,e=VWr(i),t=UWr(i),u=HWr/BWr(r),kWr(r,Cn,1,0),u*(e*(Cn[1]+Cn[0])-a*t*(Cn[0]-Cn[1])))}k$.exports=YWr});var xf=s((c4e,C$)=>{"use strict";var ZWr=j$();C$.exports=ZWr});var su=s((l4e,G$)=>{"use strict";var $Wr=1.772453850905516;G$.exports=$Wr});var U$=s((p4e,V$)=>{"use strict";function QWr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}V$.exports=QWr});var W$=s((g4e,H$)=>{"use strict";function KWr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}H$.exports=KWr});var z$=s((m4e,D$)=>{"use strict";function rDr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}D$.exports=rDr});var J$=s((d4e,X$)=>{"use strict";function eDr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}X$.exports=eDr});var Y$=s((h4e,x$)=>{"use strict";var tDr=G(),iDr=J(),nDr=jn().assign,aDr=_(),sDr=su(),uDr=U$(),oDr=W$(),fDr=z$(),vDr=J$(),cDr=3.8317059702075125,lDr=7.015586669815619,pDr=981,gDr=-.0003252797924876844,mDr=1796,dDr=-38330184381246464e-21,Gn=[0,0];function hDr(r){var e,t,i,n,a,u,o,v;return v=iDr(r),r===0||v===aDr?0:(v<=4?(u=r*r,a=uDr(u),o=v*(v+cDr)*(v-pDr/256-gDr),e=o*a):v<=8?(u=r*r,a=oDr(u),o=v*(v+lDr)*(v-mDr/256-dDr),e=o*a):(u=8/v,n=u*u,t=fDr(n),i=vDr(n),o=1/(tDr(v)*sDr),nDr(v,Gn,1,0),e=o*(t*(Gn[0]-Gn[1])+u*i*(Gn[0]+Gn[1]))),r<0&&(e*=-1),e)}x$.exports=hDr});var Yf=s((q4e,Z$)=>{"use strict";var qDr=Y$();Z$.exports=qDr});var Q$=s((y4e,$$)=>{"use strict";function yDr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}$$.exports=yDr});var rQ=s((b4e,K$)=>{"use strict";function bDr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}K$.exports=bDr});var tQ=s((w4e,eQ)=>{"use strict";function wDr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}eQ.exports=wDr});var nQ=s((E4e,iQ)=>{"use strict";function EDr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}iQ.exports=EDr});var sQ=s((N4e,aQ)=>{"use strict";function NDr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}aQ.exports=NDr});var cQ=s((A4e,vQ)=>{"use strict";var Zf=P(),ADr=G(),SDr=Ir(),ODr=su(),TDr=V(),IDr=_(),_Dr=jn().assign,$f=xf(),LDr=Q$(),PDr=rQ(),RDr=tQ(),FDr=nQ(),MDr=sQ(),BDr=1/ODr,Qf=2/SDr,uQ=.8935769662791675,oQ=3.957678419314858,fQ=7.086051060301773,kDr=228,jDr=.0029519662791675214,CDr=1013,GDr=.0006471693148578684,VDr=1814,UDr=.00011356030177269763,Vn=[0,0];function HDr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?TDr:r===IDr?0:r<=3?(a=r*r,u=Zf(r/uQ)*$f(r)*Qf,n=LDr(a),o=(r+uQ)*(r-kDr/256-jDr),u+o*n):r<=5.5?(a=r*r,u=Zf(r/oQ)*$f(r)*Qf,n=PDr(a),o=(r+oQ)*(r-CDr/256-GDr),u+o*n):r<=8?(a=r*r,u=Zf(r/fQ)*$f(r)*Qf,n=RDr(a),o=(r+fQ)*(r-VDr/256-UDr),u+o*n):(a=8/r,i=a*a,e=FDr(i),t=MDr(i),o=BDr/ADr(r),_Dr(r,Vn,1,0),o*(e*(Vn[0]-Vn[1])+a*t*(Vn[1]+Vn[0])))}vQ.exports=HDr});var pQ=s((S4e,lQ)=>{"use strict";var WDr=cQ();lQ.exports=WDr});var mQ=s((O4e,gQ)=>{"use strict";function DDr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}gQ.exports=DDr});var hQ=s((T4e,dQ)=>{"use strict";function zDr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}dQ.exports=zDr});var yQ=s((I4e,qQ)=>{"use strict";function XDr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}qQ.exports=XDr});var wQ=s((_4e,bQ)=>{"use strict";function JDr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}bQ.exports=JDr});var IQ=s((L4e,TQ)=>{"use strict";var EQ=P(),xDr=G(),YDr=Ir(),ZDr=su(),$Dr=V(),QDr=_(),KDr=jn().assign,NQ=Yf(),rzr=mQ(),ezr=hQ(),tzr=yQ(),izr=wQ(),nzr=1/ZDr,AQ=2/YDr,SQ=2.197141326031017,OQ=5.429681040794135,azr=562,szr=.001828826031017035,uzr=1390,ozr=-6459205864867228e-21,Un=[0,0];function fzr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?$Dr:r===QDr?0:r<=4?(a=r*r,u=EQ(r/SQ)*NQ(r)*AQ,n=rzr(a),o=(r+SQ)*(r-azr/256-szr)/r,u+o*n):r<=8?(a=r*r,u=EQ(r/OQ)*NQ(r)*AQ,n=ezr(a),o=(r+OQ)*(r-uzr/256-ozr)/r,u+o*n):(a=8/r,i=a*a,e=tzr(i),t=izr(i),o=nzr/xDr(r),KDr(r,Un,1,0),o*(a*t*(Un[0]-Un[1])-e*(Un[0]+Un[1])))}TQ.exports=fzr});var LQ=s((P4e,_Q)=>{"use strict";var vzr=IQ();_Q.exports=vzr});var FQ=s((R4e,RQ)=>{"use strict";var czr=E(),lzr=Pr(),pzr=J(),PQ=At(),gzr=St(),mzr=Q(),Kf=Ir(),dzr=nn(),hzr=dzr+1;function qzr(r){var e,t,i,n;return czr(r)?NaN:lzr(r)?NaN:(e=pzr(r),e>hzr?1:(t=mzr(e),i=e-t,i===.5?0:(i<.25?n=PQ(Kf*i):i<.75?(i=.5-i,n=gzr(Kf*i)):(i=1-i,n=-PQ(Kf*i)),t%2===1?-n:n)))}RQ.exports=qzr});var BQ=s((F4e,MQ)=>{"use strict";var yzr=FQ();MQ.exports=yzr});var jQ=s((M4e,kQ)=>{"use strict";var bzr=1.618033988749895;kQ.exports=bzr});var GQ=s((B4e,CQ)=>{"use strict";var wzr=E(),Ezr=BQ(),Nzr=H(),Azr=jQ(),Szr=_(),Ozr=V(),Tzr=2.23606797749979;function Izr(r){var e,t;return wzr(r)||r===Szr||r===Ozr?NaN:(e=Nzr(Azr,r),t=Ezr(r)/e,(e-t)/Tzr)}CQ.exports=Izr});var UQ=s((k4e,VQ)=>{"use strict";var _zr=GQ();VQ.exports=_zr});var WQ=s((j4e,HQ)=>{"use strict";function Lzr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}HQ.exports=Lzr});var JQ=s((C4e,XQ)=>{"use strict";var Pzr=bo(),Rzr=go(),DQ=Xr(),ev=tr(),Fzr=Qr(),Mzr=Pr(),zQ=Yt(),Bzr=Zt(),kzr=E(),jzr=WQ(),Czr=4294967295>>>0,Gzr=3221225472>>>0,Vzr=0x40000000000000,rv=2147483648>>>0,Uzr=1>>>0,Hzr=715094163>>>0,Wzr=696219795>>>0,Dzr=ev(Pzr),Vt=[0>>>0,0>>>0];function zzr(r){var e,t,i,n,a,u,o;return r===0||kzr(r)||Mzr(r)?r:(t=ev(r)>>>0,e=(t&Rzr)>>>0,t&=DQ,t<Dzr?(u=Vzr*r,i=(ev(u)&DQ)>>>0,i=(i/3>>>0)+Wzr>>>0,u=zQ(e|i,0)):(u=0,i=(t/3>>>0)+Hzr>>>0,u=Fzr(u,e|i)),n=u*u*(u/r),u*=jzr(n),Bzr.assign(u,Vt,1,0),Vt[1]&rv?(Vt[0]+=Uzr,Vt[1]&=~rv):Vt[1]|=rv,u=zQ(Vt[0]&Czr,Vt[1]&Gzr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}XQ.exports=zzr});var YQ=s((G4e,xQ)=>{"use strict";var Xzr=JQ();xQ.exports=Xzr});var $Q=s((V4e,ZQ)=>{"use strict";function Jzr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}ZQ.exports=Jzr});var KQ=s((U4e,QQ)=>{"use strict";function xzr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}QQ.exports=xzr});var tK=s((H4e,eK)=>{"use strict";var Yzr=tr(),Zzr=$Q(),$zr=KQ(),rK=1048575,Qzr=.3333333333333333;function Kzr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=Yzr(r),a=r-1,(rK&2+n)<3?a===0?0:a*a*(Qzr*a-.5):(u=a/(2+a),o=u*u,n&=rK,c=n-398458|0,f=o*o,l=440401-n|0,t=f*Zzr(f),i=o*$zr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}eK.exports=Kzr});var sK=s((W4e,aK)=>{"use strict";var iK=tr(),rXr=Qr(),eXr=ee(),tXr=E(),iXr=zr(),nXr=V(),aXr=tK(),sXr=0x40000000000000,nK=.4342944818781689,uXr=25082946711645275e-27,oXr=.30102999566361177,fXr=3694239077158931e-28,vXr=1048575,cXr=2146435072,lXr=1048576,pXr=1072693248;function gXr(r){var e,t,i,n,a,u,o,v;return tXr(r)||r<0?NaN:r===0?nXr:(t=iK(r),u=0,t<lXr&&(u-=54,r*=sXr,t=iK(r)),t>=cXr?r+r:(u+=(t>>20)-iXr|0,t&=vXr,a=t+614244&1048576|0,r=rXr(r,t|a^pXr),u+=a>>20|0,o=u,n=aXr(r),r-=1,e=eXr(r,0),i=r-e,v=o*fXr+(r+n)*uXr,v+=(i+n)*nK+e*nK,v+o*oXr))}aK.exports=gXr});var oK=s((D4e,uK)=>{"use strict";var mXr=sK();uK.exports=mXr});var vK=s((z4e,fK)=>{"use strict";var dXr=E(),hXr=Pr(),qXr=H(),yXr=Q(),bXr=Di(),wXr=oK(),EXr=h2(),NXr=q2(),AXr=_();function SXr(r){var e,t;return dXr(r)||hXr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=wXr(r),e===-1?t=yXr(t):t=bXr(t),t<=NXr?e*0:t>EXr?AXr:e*qXr(10,t))}fK.exports=SXr});var lK=s((X4e,cK)=>{"use strict";var OXr=vK();cK.exports=OXr});var gK=s((J4e,pK)=>{"use strict";function TXr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}pK.exports=TXr});var dK=s((x4e,mK)=>{"use strict";function IXr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}mK.exports=IXr});var yK=s((Y4e,qK)=>{"use strict";var _Xr=tr(),LXr=gK(),PXr=dK(),hK=1048575,RXr=.3333333333333333;function FXr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=_Xr(r),a=r-1,(hK&2+n)<3?a===0?0:a*a*(RXr*a-.5):(u=a/(2+a),o=u*u,n&=hK,c=n-398458|0,f=o*o,l=440401-n|0,t=f*LXr(f),i=o*PXr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}qK.exports=FXr});var EK=s((Z4e,wK)=>{"use strict";var MXr=tr(),BXr=Qr(),kXr=ee(),jXr=Zt(),CXr=E(),GXr=Xr(),VXr=ea(),UXr=zr(),HXr=V(),WXr=yK(),DXr=0x40000000000000,bK=1.4426950407214463,zXr=16751713164886512e-26,XXr=2146435072,JXr=1048576,xXr=1072693248,tv=[0,0];function YXr(r){var e,t,i,n,a,u,o;if(CXr(r)||r<0)return NaN;if(jXr.assign(r,tv,1,0),i=tv[0],n=tv[1],o=0,i<JXr){if((i&GXr|n)===0)return HXr;o-=54,r*=DXr,i=MXr(r)}return i>=XXr?r+r:(o+=(i>>20)-UXr|0,i&=VXr,u=i+614244&1048576|0,r=BXr(r,i|u^xXr),o+=u>>20|0,a=WXr(r),r-=1,e=kXr(r,0),t=r-e,(r+a)*zXr+(t+a)*bK+e*bK+o)}wK.exports=YXr});var AK=s(($4e,NK)=>{"use strict";var ZXr=EK();NK.exports=ZXr});var OK=s((Q4e,SK)=>{"use strict";var $Xr=E(),QXr=Pr(),KXr=H(),rJr=Q(),eJr=Di(),tJr=AK(),iJr=lo(),nJr=po(),aJr=_();function sJr(r){var e,t;return $Xr(r)||QXr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=tJr(r),t===nJr)?r:(e===-1?t=rJr(t):t=eJr(t),t>iJr?aJr:e*KXr(2,t))}SK.exports=sJr});var IK=s((K4e,TK)=>{"use strict";var uJr=OK();TK.exports=uJr});var _K=s((r6e,oJr)=>{oJr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var LK=s((e6e,fJr)=>{fJr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var PK=s((t6e,vJr)=>{vJr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var FK=s((i6e,RK)=>{"use strict";function cJr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}RK.exports=cJr});var BK=s((n6e,MK)=>{"use strict";function lJr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}MK.exports=lJr});var jK=s((a6e,kK)=>{"use strict";function pJr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}kK.exports=pJr});var GK=s((s6e,CK)=>{"use strict";function gJr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}CK.exports=gJr});var UK=s((u6e,VK)=>{"use strict";function mJr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}VK.exports=mJr});var WK=s((o6e,HK)=>{"use strict";function dJr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}HK.exports=dJr});var xK=s((f6e,JK)=>{"use strict";var hJr=E(),qJr=Tr(),yJr=J(),uu=nr(),bJr=Q(),wJr=Qt(),EJr=Qi(),DK=$i(),zK=H(),NJr=P(),AJr=_(),SJr=V(),XK=Ve(),OJr=Uo(),TJr=bf(),IJr=_K(),_Jr=LK(),LJr=PK(),PJr=FK(),RJr=BK(),FJr=jK(),MJr=GK(),BJr=UK(),kJr=WK(),jJr=129,CJr=170,GJr=709,VJr=1.2433929443359375,UJr=.6986598968505859;function iv(r){var e,t,i,n,a,u;if(hJr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(qJr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=jJr)return-LJr[u]/(i+1)}else return(n&1)===0?_Jr[n/2]:IJr[(n-3)/2];return yJr(r)<OJr?-.5-TJr*r:(t=1-r,r<0?bJr(r/2)===r/2?0:(e=r,r=t,t=e,r>CJr?(e=DK(.5*t)*2*iv(r),a=EJr(r),a-=r*NJr(XK),a>GJr?e<0?SJr:AJr:e*uu(a)):DK(.5*t)*2*zK(XK,-r)*wJr(r)*iv(r)):r<1?(e=PJr(t),e-=VJr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+RJr(t)):r<=4?(e=UJr+1/-t,e+FJr(r-2)):r<=7?(e=MJr(r-4),1+uu(e)):r<15?(e=BJr(r-7),1+uu(e)):r<36?(e=kJr(r-15),1+uu(e)):1+zK(2,-r))}JK.exports=iv});var ZK=s((v6e,YK)=>{"use strict";var HJr=xK();YK.exports=HJr});var QK=s((c6e,$K)=>{"use strict";var U={};U.abs=J();U.abs2=t0();U.acos=kn();U.acosh=OZ();U.acot=LZ();U.acovercos=MZ();U.acoversin=CZ();U.acsc=HZ();U.acsch=$Z();U.ahavercos=e$();U.ahaversin=a$();U.asin=Gt();U.asinh=zf();U.atan=Ja();U.atanh=v$();U.avercos=g$();U.aversin=q$();U.besselj0=xf();U.besselj1=Yf();U.bessely0=pQ();U.bessely1=LQ();U.binet=UQ();U.cbrt=YQ();U.ceil=Di();U.ceil10=lK();U.ceil2=IK();U.cos=At();U.sin=St();U.sqrt=G();U.zeta=ZK();$K.exports=U});var rrr=s((l6e,KK)=>{"use strict";function WJr(r,e){return r+e}KK.exports=WJr});var trr=s((p6e,err)=>{"use strict";var DJr=rrr();err.exports=DJr});var nrr=s((g6e,irr)=>{"use strict";function zJr(r,e){return r*e}irr.exports=zJr});var srr=s((m6e,arr)=>{"use strict";var XJr=nrr();arr.exports=XJr});var orr=s((d6e,urr)=>{"use strict";function JJr(r,e){return r-e}urr.exports=JJr});var vrr=s((h6e,frr)=>{"use strict";var xJr=orr();frr.exports=xJr});var lrr=s((q6e,crr)=>{"use strict";var ou={};ou.add=trr();ou.mul=srr();ou.sub=vrr();crr.exports=ou});var grr=s((y6e,prr)=>{"use strict";function YJr(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}prr.exports=YJr});var fu=s((b6e,mrr)=>{"use strict";var ZJr=grr();mrr.exports=ZJr});var hrr=s((w6e,drr)=>{"use strict";function $Jr(r){return r.toLowerCase()}drr.exports=$Jr});var Gi=s((E6e,qrr)=>{"use strict";var QJr=hrr();qrr.exports=QJr});var brr=s((N6e,yrr)=>{"use strict";function KJr(r,e,t){return r.replace(e,t)}yrr.exports=KJr});var Ut=s((A6e,wrr)=>{"use strict";var rxr=brr();wrr.exports=rxr});var Nrr=s((S6e,Err)=>{"use strict";var exr=typeof String.prototype.trim<"u";Err.exports=exr});var nv=s((O6e,Arr)=>{"use strict";var txr=String.prototype.trim;Arr.exports=txr});var Irr=s((T6e,Trr)=>{"use strict";var Srr=nv(),ixr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,Orr="\u180E";function nxr(){return Srr.call(ixr)===""&&Srr.call(Orr)===Orr}Trr.exports=nxr});var Lrr=s((I6e,_rr)=>{"use strict";var axr=Ut(),sxr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function uxr(r){return axr(r,sxr,"$1")}_rr.exports=uxr});var Rrr=s((_6e,Prr)=>{"use strict";var oxr=nv();function fxr(r){return oxr.call(r)}Prr.exports=fxr});var Vi=s((L6e,Frr)=>{"use strict";var vxr=Nrr(),cxr=Irr(),lxr=Lrr(),pxr=Rrr(),av;vxr&&cxr()?av=pxr:av=lxr;Frr.exports=av});var Brr=s((P6e,Mrr)=>{"use strict";var gxr=fu(),mxr=Gi(),vu=Ut(),dxr=Vi(),hxr=/\s+/g,qxr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,yxr=/(?:\s|^)([^\s]+)(?=\s|$)/g,bxr=/([a-z0-9])([A-Z])/g;function wxr(r,e,t){return e=mxr(e),t===0?e:gxr(e)}function Exr(r){return r=vu(r,qxr," "),r=vu(r,hxr," "),r=vu(r,bxr,"$1 $2"),r=dxr(r),vu(r,yxr,wxr)}Mrr.exports=Exr});var jrr=s((R6e,krr)=>{"use strict";var Nxr=Brr();krr.exports=Nxr});var Grr=s((F6e,Crr)=>{"use strict";var Axr=K().isPrimitive,Sxr=y(),Oxr=jrr();function Txr(r){if(!Axr(r))throw new TypeError(Sxr("invalid argument. First argument must be a string. Value: `%s`.",r));return Oxr(r)}Crr.exports=Txr});var Urr=s((M6e,Vrr)=>{"use strict";var Ixr=Grr();Vrr.exports=Ixr});var Wrr=s((B6e,Hrr)=>{"use strict";var _xr=K().isPrimitive,Lxr=y(),Pxr=fu();function Rxr(r){if(!_xr(r))throw new TypeError(Lxr("invalid argument. First argument must be a string. Value: `%s`.",r));return Pxr(r)}Hrr.exports=Rxr});var zrr=s((k6e,Drr)=>{"use strict";var Fxr=Wrr();Drr.exports=Fxr});var Jrr=s((j6e,Xrr)=>{"use strict";function Mxr(r){return r.toUpperCase()}Xrr.exports=Mxr});var Yrr=s((C6e,xrr)=>{"use strict";var Bxr=Jrr();xrr.exports=Bxr});var $rr=s((G6e,Zrr)=>{"use strict";var kxr=Yrr(),sv=Ut(),jxr=Vi(),Cxr=/\s+/g,Gxr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Vxr=/([a-z0-9])([A-Z])/g;function Uxr(r){return r=sv(r,Gxr," "),r=sv(r,Vxr,"$1 $2"),r=jxr(r),r=sv(r,Cxr,"_"),kxr(r)}Zrr.exports=Uxr});var Krr=s((V6e,Qrr)=>{"use strict";var Hxr=$rr();Qrr.exports=Hxr});var eer=s((U6e,rer)=>{"use strict";var Wxr=K().isPrimitive,Dxr=y(),zxr=Krr();function Xxr(r){if(!Wxr(r))throw new TypeError(Dxr("invalid argument. Must provide a string. Value: `%s`.",r));return zxr(r)}rer.exports=Xxr});var ier=s((H6e,ter)=>{"use strict";var Jxr=eer();ter.exports=Jxr});var aer=s((W6e,ner)=>{"use strict";var xxr=Gi(),uv=Ut(),Yxr=Vi(),Zxr=/\s+/g,$xr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Qxr=/([a-z0-9])([A-Z])/g;function Kxr(r){return r=uv(r,$xr," "),r=uv(r,Qxr,"$1 $2"),r=Yxr(r),r=uv(r,Zxr,"-"),xxr(r)}ner.exports=Kxr});var uer=s((D6e,ser)=>{"use strict";var rYr=aer();ser.exports=rYr});var fer=s((z6e,oer)=>{"use strict";var eYr=K().isPrimitive,tYr=y(),iYr=uer();function nYr(r){if(!eYr(r))throw new TypeError(tYr("invalid argument. Must provide a string. Value: `%s`.",r));return iYr(r)}oer.exports=nYr});var cer=s((X6e,ver)=>{"use strict";var aYr=fer();ver.exports=aYr});var per=s((J6e,ler)=>{"use strict";var sYr=K().isPrimitive,uYr=y(),oYr=Gi();function fYr(r){if(!sYr(r))throw new TypeError(uYr("invalid argument. Must provide a string. Value: `%s`.",r));return oYr(r)}ler.exports=fYr});var mer=s((x6e,ger)=>{"use strict";var vYr=per();ger.exports=vYr});var her=s((Y6e,der)=>{"use strict";var cYr=fu(),lYr=Gi(),cu=Ut(),pYr=Vi(),gYr=/\s+/g,mYr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,dYr=/(?:\s|^)([^\s]+)(?=\s|$)/g,hYr=/([a-z0-9])([A-Z])/g;function qYr(r,e){return cYr(lYr(e))}function yYr(r){return r=cu(r,mYr," "),r=cu(r,gYr," "),r=cu(r,hYr,"$1 $2"),r=pYr(r),cu(r,dYr,qYr)}der.exports=yYr});var yer=s((Z6e,qer)=>{"use strict";var bYr=her();qer.exports=bYr});var wer=s(($6e,ber)=>{"use strict";var wYr=K().isPrimitive,EYr=y(),NYr=yer();function AYr(r){if(!wYr(r))throw new TypeError(EYr("invalid argument. First argument must be a string. Value: `%s`.",r));return NYr(r)}ber.exports=AYr});var Ner=s((Q6e,Eer)=>{"use strict";var SYr=wer();Eer.exports=SYr});var Ser=s((K6e,Aer)=>{"use strict";var OYr=Gi(),ov=Ut(),TYr=Vi(),IYr=/\s+/g,_Yr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,LYr=/([a-z0-9])([A-Z])/g;function PYr(r){return r=ov(r,_Yr," "),r=ov(r,LYr,"$1 $2"),r=TYr(r),r=ov(r,IYr,"_"),OYr(r)}Aer.exports=PYr});var Ter=s((r8e,Oer)=>{"use strict";var RYr=Ser();Oer.exports=RYr});var _er=s((e8e,Ier)=>{"use strict";var FYr=K().isPrimitive,MYr=y(),BYr=Ter();function kYr(r){if(!FYr(r))throw new TypeError(MYr("invalid argument. Must provide a string. Value: `%s`.",r));return BYr(r)}Ier.exports=kYr});var Per=s((t8e,Ler)=>{"use strict";var jYr=_er();Ler.exports=jYr});var Mer=s((i8e,Fer)=>{"use strict";var CYr=I(),Rer=S(),GYr=or().isPrimitive,VYr=K().isPrimitive,fv=y();function UYr(r,e){return CYr(e)?Rer(e,"flags")&&(r.flags=e.flags,!VYr(r.flags))?new TypeError(fv("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):Rer(e,"capture")&&(r.capture=e.capture,!GYr(r.capture))?new TypeError(fv("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(fv("invalid argument. Options argument must be an object. Value: `%s`.",e))}Fer.exports=UYr});var lu=s((n8e,ker)=>{"use strict";var HYr=Mer(),Ber=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function WYr(r){var e,t;if(arguments.length>0){if(e={},t=HYr(e,r),t)throw t;return e.capture?new RegExp("("+Ber+")",e.flags):new RegExp(Ber,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}ker.exports=WYr});var Cer=s((a8e,jer)=>{"use strict";var DYr=lu(),zYr=DYr({capture:!0});jer.exports=zYr});var Ver=s((s8e,Ger)=>{"use strict";var XYr=lu(),JYr=XYr();Ger.exports=JYr});var Wer=s((u8e,Her)=>{"use strict";var Uer=w(),vv=lu(),xYr=Cer(),YYr=Ver();Uer(vv,"REGEXP",YYr);Uer(vv,"REGEXP_CAPTURE",xYr);Her.exports=vv});var zer=s((o8e,Der)=>{"use strict";var ZYr=Wer().REGEXP;function $Yr(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),ZYr.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}Der.exports=$Yr});var Jer=s((f8e,Xer)=>{"use strict";var QYr=zer();Xer.exports=QYr});var Yer=s((v8e,xer)=>{"use strict";var KYr=K().isPrimitive,rZr=y(),eZr=Jer();function tZr(r){if(!KYr(r))throw new TypeError(rZr("invalid argument. Must provide a string. Value: `%s`.",r));return eZr(r)}xer.exports=tZr});var $er=s((c8e,Zer)=>{"use strict";var iZr=Yer();Zer.exports=iZr});var Ker=s((l8e,Qer)=>{"use strict";function nZr(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}Qer.exports=nZr});var etr=s((p8e,rtr)=>{"use strict";var aZr=Ker();rtr.exports=aZr});var itr=s((g8e,ttr)=>{"use strict";var sZr=K().isPrimitive,uZr=y(),oZr=etr();function fZr(r){if(!sZr(r))throw new TypeError(uZr("invalid argument. First argument must be a string. Value: `%s`.",r));return oZr(r)}ttr.exports=fZr});var atr=s((m8e,ntr)=>{"use strict";var vZr=itr();ntr.exports=vZr});var utr=s((d8e,str)=>{"use strict";var cZr=K().isPrimitive,lZr=y();function pZr(r){if(!cZr(r))throw new TypeError(lZr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}str.exports=pZr});var ftr=s((h8e,otr)=>{"use strict";var gZr=utr();otr.exports=gZr});var ctr=s((q8e,vtr)=>{"use strict";var Wr={};Wr.camelcase=Urr();Wr.capitalize=zrr();Wr.constantcase=ier();Wr.kebabcase=cer();Wr.lowercase=mer();Wr.pascalcase=Ner();Wr.snakecase=Per();Wr.startcase=$er();Wr.uncapitalize=atr();Wr.uppercase=ftr();vtr.exports=Wr});var ptr=s((y8e,ltr)=>{"use strict";var z=hu(),cv=G6(),mZr=Hy(),dZr=w2(),hZr=rb().ndarray,qZr=_a(),yZr=ub(),bZr=A2(),wZr=cr(),EZr=or().isPrimitive,NZr=k().isPrimitive,AZr=W().isPrimitive,SZr=K().isPrimitive,OZr=MA(),TZr=hS(),IZr=IO(),_Zr=jO().ndarray,LZr=XO().ndarray,PZr=s1(),RZr=KO(),FZr=u1(),MZr=q_(),BZr=O_(),kZr=hP(),jZr=uM(),CZr=tB(),GZr=VY(),VZr=aZ(),UZr=uZ(),HZr=QK(),WZr=lrr(),DZr=ctr();function zZr(){var r={};return z(r,"bartlettTest",mZr),z(r,"broadcastShapes",dZr),z(r,"cumax",hZr),z(r,"filled2d",qZr),z(r,"filled2dBy",yZr),z(r,"flattenArray",bZr),z(r,"isArray",wZr),z(r,"isBoolean",EZr),z(r,"isNumber",NZr),z(r,"isPositiveNumber",AZr),z(r,"isString",SZr),z(r,"iterator2array",OZr),z(r,"iterSawtoothWave",TZr),z(r,"linspace",IZr),z(r,"max",_Zr),z(r,"mskmax",LZr),z(r,"normalizeBroadcastArgs",PZr),z(r,"ones2d",RZr),z(r,"zeros2d",FZr),z(r,"assert",MZr),z(r,"blas",BZr),z(r,"datasets",kZr),z(r,"dists",jZr),z(r,"math",CZr),z(r,"random",GZr),z(r,"string",VZr),z(r,"tools",UZr),cv(HZr,r),cv(WZr,r),cv(DZr,r),r}ltr.exports=zZr});var mtr=s((b8e,gtr)=>{"use strict";var XZr=w(),lv=ptr();XZr(lv,"CACHED",lv());gtr.exports=lv});var xZr=s((w8e,dtr)=>{var JZr=mtr().CACHED;dtr.exports=JZr});return xZr();})();
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
