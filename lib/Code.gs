/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Wn=s((cJr,$f)=>{"use strict";function lrr(r){return Object.keys(Object(r))}$f.exports=lrr});var Kf=s((lJr,Qf)=>{"use strict";var prr=Wn();function grr(){return(prr(arguments)||"").length!==2}function mrr(){return grr(1,2)}Qf.exports=mrr});var ev=s((pJr,rv)=>{"use strict";var drr=typeof Object.keys<"u";rv.exports=drr});var iv=s((gJr,tv)=>{"use strict";function hrr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}tv.exports=hrr});var av=s((mJr,nv)=>{"use strict";var yrr=iv();nv.exports=yrr});var uv=s((dJr,sv)=>{"use strict";var qrr=av(),brr=qrr();function wrr(){return brr&&typeof Symbol.toStringTag=="symbol"}sv.exports=wrr});var Wi=s((hJr,ov)=>{"use strict";var Err=uv();ov.exports=Err});var lu=s((yJr,fv)=>{"use strict";var Nrr=Object.prototype.toString;fv.exports=Nrr});var cv=s((qJr,vv)=>{"use strict";var Arr=lu();function Orr(r){return Arr.call(r)}vv.exports=Orr});var pv=s((bJr,lv)=>{"use strict";var Srr=Object.prototype.hasOwnProperty;function Trr(r,e){return r==null?!1:Srr.call(r,e)}lv.exports=Trr});var O=s((wJr,gv)=>{"use strict";var Irr=pv();gv.exports=Irr});var dv=s((EJr,mv)=>{"use strict";var _rr=typeof Symbol=="function"?Symbol:void 0;mv.exports=_rr});var pu=s((NJr,hv)=>{"use strict";var Lrr=dv();hv.exports=Lrr});var bv=s((AJr,qv)=>{"use strict";var yv=pu(),Prr=typeof yv=="function"?yv.toStringTag:"";qv.exports=Prr});var Ev=s((OJr,wv)=>{"use strict";var Rrr=O(),Di=bv(),gu=lu();function Frr(r){var e,t,i;if(r==null)return gu.call(r);t=r[Di],e=Rrr(r,Di);try{r[Di]=void 0}catch{return gu.call(r)}return i=gu.call(r),e?r[Di]=t:delete r[Di],i}wv.exports=Frr});var ir=s((SJr,Nv)=>{"use strict";var Mrr=Wi(),Brr=cv(),krr=Ev(),mu;Mrr()?mu=krr:mu=Brr;Nv.exports=mu});var du=s((TJr,Av)=>{"use strict";var jrr=ir();function Crr(r){return jrr(r)==="[object Arguments]"}Av.exports=Crr});var Tv=s((IJr,Sv)=>{"use strict";var Grr=du(),Ov;function Vrr(){return Grr(arguments)}Ov=Vrr();Sv.exports=Ov});var _v=s((_Jr,Iv)=>{"use strict";var Urr=typeof Object.defineProperty=="function"?Object.defineProperty:null;Iv.exports=Urr});var Pv=s((LJr,Lv)=>{"use strict";var Hrr=_v();function Wrr(){try{return Hrr({},"x",{}),!0}catch{return!1}}Lv.exports=Wrr});var Fv=s((PJr,Rv)=>{"use strict";var Drr=Object.defineProperty;Rv.exports=Drr});var hu=s((RJr,Mv)=>{"use strict";function zrr(r){return typeof r=="number"}Mv.exports=zrr});var yu=s((FJr,kv)=>{"use strict";function Xrr(r){return r[0]==="-"}function Bv(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Jrr(r,e,t){var i=!1,n=e-r.length;return n<0||(Xrr(r)&&(i=!0,r=r.substr(1)),r=t?r+Bv(n):Bv(n)+r,i&&(r="-"+r)),r}kv.exports=Jrr});var Vv=s((MJr,Gv)=>{"use strict";var xrr=hu(),jv=yu(),Yrr=String.prototype.toLowerCase,Cv=String.prototype.toUpperCase;function Zrr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!xrr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=jv(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=jv(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===Cv.call(r.specifier)?Cv.call(t):Yrr.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Gv.exports=Zrr});var Hv=s((BJr,Uv)=>{"use strict";function $rr(r){return typeof r=="string"}Uv.exports=$rr});var zv=s((kJr,Dv)=>{"use strict";var Qrr=hu(),Krr=Math.abs,rer=String.prototype.toLowerCase,Wv=String.prototype.toUpperCase,wt=String.prototype.replace,eer=/e\+(\d)$/,ter=/e-(\d)$/,ier=/^(\d+)$/,ner=/^(\d+)e/,aer=/\.0$/,ser=/\.0*e/,uer=/(\..*[^0])0*e/;function oer(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Qrr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Krr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=wt.call(t,uer,"$1e"),t=wt.call(t,ser,"e"),t=wt.call(t,aer,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=wt.call(t,eer,"e+0$1"),t=wt.call(t,ter,"e-0$1"),r.alternate&&(t=wt.call(t,ier,"$1."),t=wt.call(t,ner,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Wv.call(r.specifier)?Wv.call(t):rer.call(t),t}Dv.exports=oer});var xv=s((jJr,Jv)=>{"use strict";function Xv(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function fer(r,e,t){var i=e-r.length;return i<0||(r=t?r+Xv(i):Xv(i)+r),r}Jv.exports=fer});var Zv=s((CJr,Yv)=>{"use strict";var ver=Vv(),cer=Hv(),ler=zv(),per=xv(),ger=yu(),mer=String.fromCharCode,Dn=isNaN,der=Array.isArray;function her(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function yer(r){var e,t,i,n,a,u,o,v,f;if(!der(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,v=0;v<r.length;v++)if(i=r[v],cer(i))u+=i;else{if(e=i.precision!==void 0,i=her(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,Dn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,Dn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=ver(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Dn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Dn(a)?String(i.arg):mer(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=ler(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=ger(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=per(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}Yv.exports=yer});var Qv=s((GJr,$v)=>{"use strict";var qer=Zv();$v.exports=qer});var rc=s((VJr,Kv)=>{"use strict";var zn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ber(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function wer(r){var e,t,i,n;for(t=[],n=0,i=zn.exec(r);i;)e=r.slice(n,zn.lastIndex-i[0].length),e.length&&t.push(e),t.push(ber(i)),n=zn.lastIndex,i=zn.exec(r);return e=r.slice(n),e.length&&t.push(e),t}Kv.exports=wer});var tc=s((UJr,ec)=>{"use strict";var Eer=rc();ec.exports=Eer});var nc=s((HJr,ic)=>{"use strict";function Ner(r){return typeof r=="string"}ic.exports=Ner});var uc=s((WJr,sc)=>{"use strict";var Aer=Qv(),Oer=tc(),Ser=nc();function ac(r){var e,t,i;if(!Ser(r))throw new TypeError(ac("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=Oer(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Aer.apply(null,t)}sc.exports=ac});var q=s((DJr,oc)=>{"use strict";var Ter=uc();oc.exports=Ter});var gc=s((zJr,pc)=>{"use strict";var fc=q(),Dt=Object.prototype,vc=Dt.toString,cc=Dt.__defineGetter__,lc=Dt.__defineSetter__,Ier=Dt.__lookupGetter__,_er=Dt.__lookupSetter__;function Ler(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||vc.call(r)==="[object Array]")throw new TypeError(fc("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||vc.call(t)==="[object Array]")throw new TypeError(fc("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(Ier.call(r,e)||_er.call(r,e)?(i=r.__proto__,r.__proto__=Dt,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&cc&&cc.call(r,e,t.get),u&&lc&&lc.call(r,e,t.set),r}pc.exports=Ler});var Ce=s((XJr,mc)=>{"use strict";var Per=Pv(),Rer=Fv(),Fer=gc(),qu;Per()?qu=Rer:qu=Fer;mc.exports=qu});var hc=s((JJr,dc)=>{"use strict";var Mer=Ce();function Ber(r,e,t){Mer(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}dc.exports=Ber});var w=s((xJr,yc)=>{"use strict";var ker=hc();yc.exports=ker});var bu=s((YJr,qc)=>{"use strict";function jer(r){return typeof r=="string"}qc.exports=jer});var wc=s((ZJr,bc)=>{"use strict";var Cer=String.prototype.valueOf;bc.exports=Cer});var Nc=s(($Jr,Ec)=>{"use strict";var Ger=wc();function Ver(r){try{return Ger.call(r),!0}catch{return!1}}Ec.exports=Ver});var wu=s((QJr,Ac)=>{"use strict";var Uer=Wi(),Her=ir(),Wer=Nc(),Der=Uer();function zer(r){return typeof r=="object"?r instanceof String?!0:Der?Wer(r):Her(r)==="[object String]":!1}Ac.exports=zer});var Sc=s((KJr,Oc)=>{"use strict";var Xer=bu(),Jer=wu();function xer(r){return Xer(r)||Jer(r)}Oc.exports=xer});var K=s((rxr,Ic)=>{"use strict";var Tc=w(),Eu=Sc(),Yer=bu(),Zer=wu();Tc(Eu,"isPrimitive",Yer);Tc(Eu,"isObject",Zer);Ic.exports=Eu});var Nu=s((exr,_c)=>{"use strict";function $er(r){return typeof r=="number"}_c.exports=$er});var Pc=s((txr,Lc)=>{"use strict";Lc.exports=Number});var Xn=s((ixr,Rc)=>{"use strict";var Qer=Pc();Rc.exports=Qer});var Mc=s((nxr,Fc)=>{"use strict";var Ker=Xn(),rtr=Ker.prototype.toString;Fc.exports=rtr});var kc=s((axr,Bc)=>{"use strict";var etr=Mc();function ttr(r){try{return etr.call(r),!0}catch{return!1}}Bc.exports=ttr});var Au=s((sxr,jc)=>{"use strict";var itr=Wi(),ntr=ir(),atr=Xn(),str=kc(),utr=itr();function otr(r){return typeof r=="object"?r instanceof atr?!0:utr?str(r):ntr(r)==="[object Number]":!1}jc.exports=otr});var Gc=s((uxr,Cc)=>{"use strict";var ftr=Nu(),vtr=Au();function ctr(r){return ftr(r)||vtr(r)}Cc.exports=ctr});var j=s((oxr,Uc)=>{"use strict";var Vc=w(),Ou=Gc(),ltr=Nu(),ptr=Au();Vc(Ou,"isPrimitive",ltr);Vc(Ou,"isObject",ptr);Uc.exports=Ou});var Wc=s((fxr,Hc)=>{"use strict";function gtr(r){return r!==r}Hc.exports=gtr});var E=s((vxr,Dc)=>{"use strict";var mtr=Wc();Dc.exports=mtr});var Su=s((cxr,zc)=>{"use strict";var dtr=j().isPrimitive,htr=E();function ytr(r){return dtr(r)&&htr(r)}zc.exports=ytr});var Tu=s((lxr,Xc)=>{"use strict";var qtr=j().isObject,btr=E();function wtr(r){return qtr(r)&&btr(r.valueOf())}Xc.exports=wtr});var xc=s((pxr,Jc)=>{"use strict";var Etr=Su(),Ntr=Tu();function Atr(r){return Etr(r)||Ntr(r)}Jc.exports=Atr});var sr=s((gxr,Zc)=>{"use strict";var Yc=w(),Iu=xc(),Otr=Su(),Str=Tu();Yc(Iu,"isPrimitive",Otr);Yc(Iu,"isObject",Str);Zc.exports=Iu});var L=s((mxr,$c)=>{"use strict";var Ttr=Number.POSITIVE_INFINITY;$c.exports=Ttr});var U=s((dxr,Qc)=>{"use strict";var Itr=Xn(),_tr=Itr.NEGATIVE_INFINITY;Qc.exports=_tr});var rl=s((hxr,Kc)=>{"use strict";var Ltr=Math.floor;Kc.exports=Ltr});var Q=s((yxr,el)=>{"use strict";var Ptr=rl();el.exports=Ptr});var il=s((qxr,tl)=>{"use strict";var Rtr=Q();function Ftr(r){return Rtr(r)===r}tl.exports=Ftr});var Ir=s((bxr,nl)=>{"use strict";var Mtr=il();nl.exports=Mtr});var _u=s((wxr,al)=>{"use strict";var Btr=L(),ktr=U(),jtr=Ir();function Ctr(r){return r<Btr&&r>ktr&&jtr(r)}al.exports=Ctr});var Lu=s((Exr,sl)=>{"use strict";var Gtr=j().isPrimitive,Vtr=_u();function Utr(r){return Gtr(r)&&Vtr(r)}sl.exports=Utr});var Pu=s((Nxr,ul)=>{"use strict";var Htr=j().isObject,Wtr=_u();function Dtr(r){return Htr(r)&&Wtr(r.valueOf())}ul.exports=Dtr});var fl=s((Axr,ol)=>{"use strict";var ztr=Lu(),Xtr=Pu();function Jtr(r){return ztr(r)||Xtr(r)}ol.exports=Jtr});var Cr=s((Oxr,cl)=>{"use strict";var vl=w(),Ru=fl(),xtr=Lu(),Ytr=Pu();vl(Ru,"isPrimitive",xtr);vl(Ru,"isObject",Ytr);cl.exports=Ru});var Fu=s((Sxr,ll)=>{"use strict";var Ztr=Object.prototype.propertyIsEnumerable;ll.exports=Ztr});var ml=s((Txr,gl)=>{"use strict";var $tr=Fu(),pl;function Qtr(){return!$tr.call("beep","0")}pl=Qtr();gl.exports=pl});var hl=s((Ixr,dl)=>{"use strict";var Ktr=K(),rir=sr().isPrimitive,eir=Cr().isPrimitive,tir=Fu(),iir=ml();function nir(r,e){var t;return r==null?!1:(t=tir.call(r,e),!t&&iir&&Ktr(r)?(e=+e,!rir(e)&&eir(e)&&e>=0&&e<r.length):t)}dl.exports=nir});var zi=s((_xr,yl)=>{"use strict";var air=hl();yl.exports=air});var bl=s((Lxr,ql)=>{"use strict";var sir=ir(),Mu;function uir(r){return sir(r)==="[object Array]"}Array.isArray?Mu=Array.isArray:Mu=uir;ql.exports=Mu});var mr=s((Pxr,wl)=>{"use strict";var oir=bl();wl.exports=oir});var zt=s((Rxr,El)=>{"use strict";var fir=4294967295;El.exports=fir});var Al=s((Fxr,Nl)=>{"use strict";var vir=O(),cir=zi(),lir=mr(),pir=Ir(),gir=zt();function mir(r){return r!==null&&typeof r=="object"&&!lir(r)&&typeof r.length=="number"&&pir(r.length)&&r.length>=0&&r.length<=gir&&vir(r,"callee")&&!cir(r,"callee")}Nl.exports=mir});var ku=s((Mxr,Ol)=>{"use strict";var dir=Tv(),hir=du(),yir=Al(),Bu;dir?Bu=hir:Bu=yir;Ol.exports=Bu});var Il=s((Bxr,Tl)=>{"use strict";var qir=ku(),Sl=Wn(),bir=Array.prototype.slice;function wir(r){return qir(r)?Sl(bir.call(r)):Sl(r)}Tl.exports=wir});var Ll=s((kxr,_l)=>{"use strict";var Eir=mr(),Nir=q();function Air(r){if(typeof r!="function")throw new TypeError(Nir("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!Eir(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}_l.exports=Air});var Rl=s((jxr,Pl)=>{"use strict";var Oir=Ll();Pl.exports=Oir});var Ml=s((Cxr,Fl)=>{"use strict";function Sir(r){return r!==null&&typeof r=="object"}Fl.exports=Sir});var Cu=s((Gxr,Bl)=>{"use strict";var Tir=w(),Iir=Rl(),ju=Ml(),_ir=Iir(ju);Tir(ju,"isObjectLikeArray",_ir);Bl.exports=ju});var jl=s((Vxr,kl)=>{"use strict";function Lir(){}kl.exports=Lir});var k=s((Uxr,Cl)=>{"use strict";var Pir=jl();Cl.exports=Pir});var Vl=s((Hxr,Gl)=>{"use strict";var Rir=zi(),Fir=k(),Mir=Rir(Fir,"prototype");Gl.exports=Mir});var Hl=s((Wxr,Ul)=>{"use strict";var Bir=zi(),kir={toString:null},jir=!Bir(kir,"toString");Ul.exports=jir});var Dl=s((Dxr,Wl)=>{"use strict";var Cir=9007199254740991;Wl.exports=Cir});var Xl=s((zxr,zl)=>{"use strict";var Gir=Ir(),Vir=Dl();function Uir(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Gir(r.length)&&r.length>=0&&r.length<=Vir}zl.exports=Uir});var Gr=s((Xxr,Jl)=>{"use strict";var Hir=Xl();Jl.exports=Hir});var $l=s((Jxr,Zl)=>{"use strict";var xl=sr(),Wir=Gr(),Dir=K().isPrimitive,zir=Cr().isPrimitive,Yl=q();function Xir(r,e,t){var i,n;if(!Wir(r)&&!Dir(r))throw new TypeError(Yl("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!zir(t))throw new TypeError(Yl("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(xl(e)){for(;n<i;n++)if(xl(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}Zl.exports=Xir});var Jn=s((xxr,Ql)=>{"use strict";var Jir=$l();Ql.exports=Jir});var r4=s((Yxr,Kl)=>{"use strict";var xir=/./;Kl.exports=xir});var Gu=s((Zxr,e4)=>{"use strict";function Yir(r){return typeof r=="boolean"}e4.exports=Yir});var i4=s(($xr,t4)=>{"use strict";var Zir=Boolean;t4.exports=Zir});var a4=s((Qxr,n4)=>{"use strict";var $ir=i4();n4.exports=$ir});var u4=s((Kxr,s4)=>{"use strict";var Qir=Boolean.prototype.toString;s4.exports=Qir});var f4=s((rYr,o4)=>{"use strict";var Kir=u4();function rnr(r){try{return Kir.call(r),!0}catch{return!1}}o4.exports=rnr});var Vu=s((eYr,v4)=>{"use strict";var enr=Wi(),tnr=ir(),inr=a4(),nnr=f4(),anr=enr();function snr(r){return typeof r=="object"?r instanceof inr?!0:anr?nnr(r):tnr(r)==="[object Boolean]":!1}v4.exports=snr});var l4=s((tYr,c4)=>{"use strict";var unr=Gu(),onr=Vu();function fnr(r){return unr(r)||onr(r)}c4.exports=fnr});var vr=s((iYr,g4)=>{"use strict";var p4=w(),Uu=l4(),vnr=Gu(),cnr=Vu();p4(Uu,"isPrimitive",vnr);p4(Uu,"isObject",cnr);g4.exports=Uu});var d4=s((nYr,m4)=>{"use strict";function lnr(){return new Function("return this;")()}m4.exports=lnr});var y4=s((aYr,h4)=>{"use strict";var pnr=typeof self=="object"?self:null;h4.exports=pnr});var b4=s((sYr,q4)=>{"use strict";var gnr=typeof window=="object"?window:null;q4.exports=gnr});var E4=s((uYr,w4)=>{"use strict";var mnr=typeof globalThis=="object"?globalThis:null;w4.exports=mnr});var T4=s((oYr,S4)=>{"use strict";var dnr=vr().isPrimitive,hnr=q(),ynr=d4(),N4=y4(),A4=b4(),O4=E4();function qnr(r){if(arguments.length){if(!dnr(r))throw new TypeError(hnr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ynr()}if(O4)return O4;if(N4)return N4;if(A4)return A4;throw new Error("unexpected error. Unable to resolve global object.")}S4.exports=qnr});var L4=s((fYr,_4)=>{"use strict";var bnr=T4(),I4=bnr(),wnr=I4.document&&I4.document.childNodes;_4.exports=wnr});var R4=s((vYr,P4)=>{"use strict";var Enr=Int8Array;P4.exports=Enr});var M4=s((cYr,F4)=>{"use strict";var Nnr=r4(),Anr=L4(),Onr=R4();function Snr(){return typeof Nnr=="function"||typeof Onr=="object"||typeof Anr=="function"}F4.exports=Snr});var Hu=s((lYr,B4)=>{"use strict";function Tnr(){return/^\s*function\s*([^(]*)/i}B4.exports=Tnr});var j4=s((pYr,k4)=>{"use strict";var Inr=Hu(),_nr=Inr();k4.exports=_nr});var Wu=s((gYr,G4)=>{"use strict";var Lnr=w(),C4=Hu(),Pnr=j4();Lnr(C4,"REGEXP",Pnr);G4.exports=C4});var U4=s((mYr,V4)=>{"use strict";var Rnr=Cu();function Fnr(r){return Rnr(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}V4.exports=Fnr});var Et=s((dYr,H4)=>{"use strict";var Mnr=U4();H4.exports=Mnr});var D4=s((hYr,W4)=>{"use strict";var Bnr=ir(),knr=Wu().REGEXP,jnr=Et();function Cnr(r){var e,t,i;if(t=Bnr(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=knr.exec(i.toString()),e)return e[1]}return jnr(r)?"Buffer":t}W4.exports=Cnr});var Ge=s((yYr,z4)=>{"use strict";var Gnr=D4();z4.exports=Gnr});var J4=s((qYr,X4)=>{"use strict";var Vnr=Ge();function Unr(r){var e;return r===null?"null":(e=typeof r,e==="object"?Vnr(r).toLowerCase():e)}X4.exports=Unr});var Y4=s((bYr,x4)=>{"use strict";var Hnr=Ge();function Wnr(r){return Hnr(r).toLowerCase()}x4.exports=Wnr});var xn=s((wYr,Z4)=>{"use strict";var Dnr=M4(),znr=J4(),Xnr=Y4(),Jnr=Dnr()?Xnr:znr;Z4.exports=Jnr});var Du=s((EYr,$4)=>{"use strict";function xnr(r){return r.constructor&&r.constructor.prototype===r}$4.exports=xnr});var Q4=s((NYr,Ynr)=>{Ynr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var r6=s((AYr,K4)=>{"use strict";var Znr=typeof window>"u"?void 0:window;K4.exports=Znr});var n6=s((OYr,i6)=>{"use strict";var $nr=O(),Qnr=Jn(),e6=xn(),Knr=Du(),rar=Q4(),Xt=r6(),t6;function ear(){var r;if(e6(Xt)==="undefined")return!1;for(r in Xt)try{Qnr(rar,r)===-1&&$nr(Xt,r)&&Xt[r]!==null&&e6(Xt[r])==="object"&&Knr(Xt[r])}catch{return!0}return!1}t6=ear();i6.exports=t6});var s6=s((SYr,a6)=>{"use strict";var tar=typeof window<"u";a6.exports=tar});var f6=s((TYr,o6)=>{"use strict";var iar=n6(),u6=Du(),nar=s6();function aar(r){if(nar===!1&&!iar)return u6(r);try{return u6(r)}catch{return!1}}o6.exports=aar});var v6=s((IYr,sar)=>{sar.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var p6=s((_Yr,l6)=>{"use strict";var uar=Cu(),zu=O(),oar=ku(),far=Vl(),car=Hl(),lar=f6(),c6=v6();function par(r){var e,t,i,n,a,u,o;if(n=[],oar(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!zu(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!uar(r))return n;t=far&&i}for(a in r)!(t&&a==="prototype")&&zu(r,a)&&n.push(String(a));if(car)for(e=lar(r),o=0;o<c6.length;o++)u=c6[o],!(e&&u==="constructor")&&zu(r,u)&&n.push(String(u));return n}l6.exports=par});var m6=s((LYr,g6)=>{"use strict";var gar=Kf(),mar=ev(),dar=Wn(),har=Il(),yar=p6(),Yn;mar?gar()?Yn=har:Yn=dar:Yn=yar;g6.exports=Yn});var Jt=s((PYr,d6)=>{"use strict";var qar=m6();d6.exports=qar});var y6=s((RYr,h6)=>{"use strict";var bar=Jt(),war=O(),Ear=q();function Nar(r,e){var t,i,n;for(t=bar(r),n=0;n<t.length;n++){if(i=t[n],war(e,i))throw new Error(Ear("unexpected error. Property already exists on destination object. Property: %s.",i));e[i]=r[i]}return e}h6.exports=Nar});var b6=s((FYr,q6)=>{"use strict";var Aar=mr();function Oar(r){return typeof r=="object"&&r!==null&&!Aar(r)}q6.exports=Oar});var Zn=s((MYr,w6)=>{"use strict";var Sar=b6();w6.exports=Sar});var N6=s((BYr,E6)=>{"use strict";var Tar=xn();function Iar(r){return Tar(r)==="function"}E6.exports=Iar});var _=s((kYr,A6)=>{"use strict";var _ar=N6();A6.exports=_ar});var S6=s((jYr,O6)=>{"use strict";var Lar=Object;O6.exports=Lar});var xt=s((CYr,T6)=>{"use strict";var Par=S6();T6.exports=Par});var _6=s((GYr,I6)=>{"use strict";var Rar=Object.getPrototypeOf;I6.exports=Rar});var P6=s((VYr,L6)=>{"use strict";function Far(r){return r.__proto__}L6.exports=Far});var F6=s((UYr,R6)=>{"use strict";var Mar=ir(),Bar=P6();function kar(r){var e=Bar(r);return e||e===null?e:Mar(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}R6.exports=kar});var B6=s((HYr,M6)=>{"use strict";var jar=_(),Car=_6(),Gar=F6(),Xu;jar(Object.getPrototypeOf)?Xu=Car:Xu=Gar;M6.exports=Xu});var j6=s((WYr,k6)=>{"use strict";var Var=xt(),Uar=B6();function Har(r){return r==null?null:(r=Var(r),Uar(r))}k6.exports=Har});var Nt=s((DYr,C6)=>{"use strict";var War=j6();C6.exports=War});var U6=s((zYr,V6)=>{"use strict";var Dar=Zn(),G6=_(),zar=Nt(),$n=O(),Xar=ir(),Jar=Object.prototype;function xar(r){var e;for(e in r)if(!$n(r,e))return!1;return!0}function Yar(r){var e;return Dar(r)?(e=zar(r),e?!$n(r,"constructor")&&$n(e,"constructor")&&G6(e.constructor)&&Xar(e.constructor)==="[object Function]"&&$n(e,"isPrototypeOf")&&G6(e.isPrototypeOf)&&(e===Jar||xar(r)):!0):!1}V6.exports=Yar});var I=s((XYr,H6)=>{"use strict";var Zar=U6();H6.exports=Zar});var D6=s((JYr,W6)=>{"use strict";var $ar=Ce();function Qar(r,e,t){$ar(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}W6.exports=Qar});var X6=s((xYr,z6)=>{"use strict";var Kar=D6();z6.exports=Kar});var x6=s((YYr,J6)=>{"use strict";var r0r=L(),e0r=U();function t0r(r){return r===r0r||r===e0r}J6.exports=t0r});var Rr=s((ZYr,Y6)=>{"use strict";var i0r=x6();Y6.exports=i0r});var $6=s(($Yr,Z6)=>{"use strict";function n0r(r){return Math.abs(r)}Z6.exports=n0r});var Y=s((QYr,Q6)=>{"use strict";var a0r=$6();Q6.exports=a0r});var r8=s((KYr,K6)=>{"use strict";var s0r=ir(),u0r=typeof Uint32Array=="function";function o0r(r){return u0r&&r instanceof Uint32Array||s0r(r)==="[object Uint32Array]"}K6.exports=o0r});var Kr=s((rZr,e8)=>{"use strict";var f0r=r8();e8.exports=f0r});var i8=s((eZr,t8)=>{"use strict";var v0r=typeof Uint32Array=="function"?Uint32Array:null;t8.exports=v0r});var s8=s((tZr,a8)=>{"use strict";var c0r=Kr(),Ju=zt(),n8=i8();function l0r(){var r,e;if(typeof n8!="function")return!1;try{e=[1,3.14,-3.14,Ju+1,Ju+2],e=new n8(e),r=c0r(e)&&e[0]===1&&e[1]===3&&e[2]===Ju-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}a8.exports=l0r});var o8=s((iZr,u8)=>{"use strict";var p0r=s8();u8.exports=p0r});var v8=s((nZr,f8)=>{"use strict";var g0r=typeof Uint32Array=="function"?Uint32Array:void 0;f8.exports=g0r});var l8=s((aZr,c8)=>{"use strict";function m0r(){throw new Error("not implemented")}c8.exports=m0r});var lr=s((sZr,p8)=>{"use strict";var d0r=o8(),h0r=v8(),y0r=l8(),xu;d0r()?xu=h0r:xu=y0r;p8.exports=xu});var m8=s((uZr,g8)=>{"use strict";var q0r=ir(),b0r=typeof Float64Array=="function";function w0r(r){return b0r&&r instanceof Float64Array||q0r(r)==="[object Float64Array]"}g8.exports=w0r});var h8=s((oZr,d8)=>{"use strict";var E0r=m8();d8.exports=E0r});var q8=s((fZr,y8)=>{"use strict";var N0r=typeof Float64Array=="function"?Float64Array:null;y8.exports=N0r});var E8=s((vZr,w8)=>{"use strict";var A0r=h8(),b8=q8();function O0r(){var r,e;if(typeof b8!="function")return!1;try{e=new b8([1,3.14,-3.14,NaN]),r=A0r(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}w8.exports=O0r});var Yu=s((cZr,N8)=>{"use strict";var S0r=E8();N8.exports=S0r});var O8=s((lZr,A8)=>{"use strict";var T0r=typeof Float64Array=="function"?Float64Array:void 0;A8.exports=T0r});var T8=s((pZr,S8)=>{"use strict";function I0r(){throw new Error("not implemented")}S8.exports=I0r});var dr=s((gZr,I8)=>{"use strict";var _0r=Yu(),L0r=O8(),P0r=T8(),Zu;_0r()?Zu=L0r:Zu=P0r;I8.exports=Zu});var L8=s((mZr,_8)=>{"use strict";var R0r=ir(),F0r=typeof Uint8Array=="function";function M0r(r){return F0r&&r instanceof Uint8Array||R0r(r)==="[object Uint8Array]"}_8.exports=M0r});var R8=s((dZr,P8)=>{"use strict";var B0r=L8();P8.exports=B0r});var M8=s((hZr,F8)=>{"use strict";var k0r=255;F8.exports=k0r});var k8=s((yZr,B8)=>{"use strict";var j0r=typeof Uint8Array=="function"?Uint8Array:null;B8.exports=j0r});var G8=s((qZr,C8)=>{"use strict";var C0r=R8(),$u=M8(),j8=k8();function G0r(){var r,e;if(typeof j8!="function")return!1;try{e=[1,3.14,-3.14,$u+1,$u+2],e=new j8(e),r=C0r(e)&&e[0]===1&&e[1]===3&&e[2]===$u-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}C8.exports=G0r});var U8=s((bZr,V8)=>{"use strict";var V0r=G8();V8.exports=V0r});var W8=s((wZr,H8)=>{"use strict";var U0r=typeof Uint8Array=="function"?Uint8Array:void 0;H8.exports=U0r});var z8=s((EZr,D8)=>{"use strict";function H0r(){throw new Error("not implemented")}D8.exports=H0r});var Yt=s((NZr,X8)=>{"use strict";var W0r=U8(),D0r=W8(),z0r=z8(),Qu;W0r()?Qu=D0r:Qu=z0r;X8.exports=Qu});var x8=s((AZr,J8)=>{"use strict";var X0r=ir(),J0r=typeof Uint16Array=="function";function x0r(r){return J0r&&r instanceof Uint16Array||X0r(r)==="[object Uint16Array]"}J8.exports=x0r});var Z8=s((OZr,Y8)=>{"use strict";var Y0r=x8();Y8.exports=Y0r});var Q8=s((SZr,$8)=>{"use strict";var Z0r=65535;$8.exports=Z0r});var r5=s((TZr,K8)=>{"use strict";var $0r=typeof Uint16Array=="function"?Uint16Array:null;K8.exports=$0r});var i5=s((IZr,t5)=>{"use strict";var Q0r=Z8(),Ku=Q8(),e5=r5();function K0r(){var r,e;if(typeof e5!="function")return!1;try{e=[1,3.14,-3.14,Ku+1,Ku+2],e=new e5(e),r=Q0r(e)&&e[0]===1&&e[1]===3&&e[2]===Ku-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}t5.exports=K0r});var a5=s((_Zr,n5)=>{"use strict";var rsr=i5();n5.exports=rsr});var u5=s((LZr,s5)=>{"use strict";var esr=typeof Uint16Array=="function"?Uint16Array:void 0;s5.exports=esr});var f5=s((PZr,o5)=>{"use strict";function tsr(){throw new Error("not implemented")}o5.exports=tsr});var Zt=s((RZr,v5)=>{"use strict";var isr=a5(),nsr=u5(),asr=f5(),ro;isr()?ro=nsr:ro=asr;v5.exports=ro});var l5=s((FZr,c5)=>{"use strict";var ssr=Yt(),usr=Zt(),osr={uint16:usr,uint8:ssr};c5.exports=osr});var d5=s((MZr,m5)=>{"use strict";var p5=l5(),g5;function fsr(){var r,e;return r=new p5.uint16(1),r[0]=4660,e=new p5.uint8(r.buffer),e[0]===52}g5=fsr();m5.exports=g5});var At=s((BZr,h5)=>{"use strict";var vsr=d5();h5.exports=vsr});var q5=s((kZr,y5)=>{"use strict";var csr=At(),eo;csr===!0?eo=1:eo=0;y5.exports=eo});var E5=s((jZr,w5)=>{"use strict";var lsr=lr(),psr=dr(),gsr=q5(),b5=new psr(1),msr=new lsr(b5.buffer);function dsr(r){return b5[0]=r,msr[gsr]}w5.exports=dsr});var tr=s((CZr,N5)=>{"use strict";var hsr=E5();N5.exports=hsr});var O5=s((GZr,A5)=>{"use strict";var ysr=At(),to;ysr===!0?to=1:to=0;A5.exports=to});var T5=s((VZr,S5)=>{"use strict";var qsr=lr(),bsr=dr(),wsr=O5(),io=new bsr(1),Esr=new qsr(io.buffer);function Nsr(r,e){return io[0]=r,Esr[wsr]=e>>>0,io[0]}S5.exports=Nsr});var re=s((UZr,I5)=>{"use strict";var Asr=T5();I5.exports=Asr});var Xr=s((HZr,_5)=>{"use strict";var Osr=1023;_5.exports=Osr});var P5=s((WZr,L5)=>{"use strict";function Ssr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}L5.exports=Ssr});var F5=s((DZr,R5)=>{"use strict";function Tsr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}R5.exports=Tsr});var j5=s((zZr,k5)=>{"use strict";var M5=tr(),Isr=re(),_sr=E(),Lsr=Xr(),Psr=U(),Rsr=P5(),Fsr=F5(),Qn=.6931471803691238,Kn=19082149292705877e-26,Msr=0x40000000000000,Bsr=.3333333333333333,B5=1048575,ksr=2146435072,jsr=1048576,Csr=1072693248;function Gsr(r){var e,t,i,n,a,u,o,v,f,c,l,p;return r===0?Psr:_sr(r)||r<0?NaN:(t=M5(r),a=0,t<jsr&&(a-=54,r*=Msr,t=M5(r)),t>=ksr?r+r:(a+=(t>>20)-Lsr|0,t&=B5,v=t+614244&1048576|0,r=Isr(r,t|v^Csr),a+=v>>20|0,o=r-1,(B5&2+t)<3?o===0?a===0?0:a*Qn+a*Kn:(u=o*o*(.5-Bsr*o),a===0?o-u:a*Qn-(u-a*Kn-o)):(c=o/(2+o),p=c*c,v=t-398458|0,l=p*p,f=440401-t|0,n=l*Rsr(l),i=p*Fsr(l),v|=f,u=i+n,v>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*Qn-(e-(c*(e+u)+a*Kn)-o)):a===0?o-c*(o-u):a*Qn-(c*(o-u)-a*Kn-o))))}k5.exports=Gsr});var P=s((XZr,C5)=>{"use strict";var Vsr=j5();C5.exports=Vsr});var V5=s((JZr,G5)=>{"use strict";var Usr=Math.ceil;G5.exports=Usr});var Xi=s((xZr,U5)=>{"use strict";var Hsr=V5();U5.exports=Hsr});var W5=s((YZr,H5)=>{"use strict";var Wsr=Q(),Dsr=Xi();function zsr(r){return r<0?Dsr(r):Wsr(r)}H5.exports=zsr});var ra=s((ZZr,D5)=>{"use strict";var Xsr=W5();D5.exports=Xsr});var X5=s(($Zr,z5)=>{"use strict";function Jsr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}z5.exports=Jsr});var x5=s((QZr,J5)=>{"use strict";function xsr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}J5.exports=xsr});var Z5=s((KZr,Y5)=>{"use strict";var Ysr=X5(),Zsr=x5();function $sr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*Ysr(a),i+=n*n*Zsr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}Y5.exports=$sr});var no=s((r$r,$5)=>{"use strict";var Qsr=Z5();$5.exports=Qsr});var rp=s((e$r,K5)=>{"use strict";var Q5=-.16666666666666632,Ksr=.00833333333332249,rur=-.0001984126982985795,eur=27557313707070068e-22,tur=-25050760253406863e-24,iur=158969099521155e-24;function nur(r,e){var t,i,n,a;return a=r*r,n=a*a,t=Ksr+a*(rur+a*eur)+a*n*(tur+a*iur),i=a*r,e===0?r+i*(Q5+a*t):r-(a*(.5*e-i*t)-e-i*Q5)}K5.exports=nur});var ao=s((t$r,ep)=>{"use strict";var aur=rp();ep.exports=aur});var Jr=s((i$r,tp)=>{"use strict";var sur=2147483647;tp.exports=sur});var Ji=s((n$r,ip)=>{"use strict";var uur=2146435072;ip.exports=uur});var ea=s((a$r,np)=>{"use strict";var our=1048575;np.exports=our});var sp=s((s$r,ap)=>{"use strict";var fur=At(),so;fur===!0?so=0:so=1;ap.exports=so});var fp=s((u$r,op)=>{"use strict";var vur=lr(),cur=dr(),lur=sp(),up=new cur(1),pur=new vur(up.buffer);function gur(r){return up[0]=r,pur[lur]}op.exports=gur});var cp=s((o$r,vp)=>{"use strict";var mur=fp();vp.exports=mur});var gp=s((f$r,pp)=>{"use strict";var dur=At(),lp,uo,oo;dur===!0?(uo=1,oo=0):(uo=0,oo=1);lp={HIGH:uo,LOW:oo};pp.exports=lp});var qp=s((v$r,yp)=>{"use strict";var hur=lr(),yur=dr(),dp=gp(),hp=new yur(1),mp=new hur(hp.buffer),qur=dp.HIGH,bur=dp.LOW;function wur(r,e){return mp[qur]=r,mp[bur]=e,hp[0]}yp.exports=wur});var $t=s((c$r,bp)=>{"use strict";var Eur=qp();bp.exports=Eur});var fo=s((l$r,wp)=>{"use strict";var Nur=1023;wp.exports=Nur});var Np=s((p$r,Ep)=>{"use strict";var Aur=-1023;Ep.exports=Aur});var vo=s((g$r,Ap)=>{"use strict";var Our=-1074;Ap.exports=Our});var co=s((m$r,Op)=>{"use strict";var Sur=2147483648;Op.exports=Sur});var Ip=s((d$r,Tp)=>{"use strict";var Tur=At(),Sp,lo,po;Tur===!0?(lo=1,po=0):(lo=0,po=1);Sp={HIGH:lo,LOW:po};Tp.exports=Sp});var go=s((h$r,Rp)=>{"use strict";var Iur=lr(),_ur=dr(),Lp=Ip(),Pp=new _ur(1),_p=new Iur(Pp.buffer),Lur=Lp.HIGH,Pur=Lp.LOW;function Rur(r,e,t,i){return Pp[0]=r,e[i]=_p[Lur],e[i+t]=_p[Pur],e}Rp.exports=Rur});var Mp=s((y$r,Fp)=>{"use strict";var Fur=go();function Mur(r){return Fur(r,[0>>>0,0>>>0],1,0)}Fp.exports=Mur});var Qt=s((q$r,kp)=>{"use strict";var Bur=w(),Bp=Mp(),kur=go();Bur(Bp,"assign",kur);kp.exports=Bp});var Cp=s((b$r,jp)=>{"use strict";var jur=co(),Cur=Jr(),Gur=Qt(),Vur=tr(),Uur=$t(),mo=[0,0];function Hur(r,e){var t,i;return Gur.assign(r,mo,1,0),t=mo[0],t&=Cur,i=Vur(e),i&=jur,t|=i,Uur(t,mo[1])}jp.exports=Hur});var ta=s((w$r,Gp)=>{"use strict";var Wur=Cp();Gp.exports=Wur});var ho=s((E$r,Vp)=>{"use strict";var Dur=22250738585072014e-324;Vp.exports=Dur});var yo=s((N$r,Up)=>{"use strict";var zur=ho(),Xur=Rr(),Jur=E(),xur=Y(),Yur=4503599627370496;function Zur(r,e,t,i){return Jur(r)||Xur(r)?(e[i]=r,e[i+t]=0,e):r!==0&&xur(r)<zur?(e[i]=r*Yur,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}Up.exports=Zur});var Wp=s((A$r,Hp)=>{"use strict";var $ur=yo();function Qur(r){return $ur(r,[0,0],1,0)}Hp.exports=Qur});var Xp=s((O$r,zp)=>{"use strict";var Kur=w(),Dp=Wp(),ror=yo();Kur(Dp,"assign",ror);zp.exports=Dp});var xp=s((S$r,Jp)=>{"use strict";var eor=tr(),tor=Ji(),ior=Xr();function nor(r){var e=eor(r);return e=(e&tor)>>>20,e-ior|0}Jp.exports=nor});var Zp=s((T$r,Yp)=>{"use strict";var aor=xp();Yp.exports=aor});var Qp=s((I$r,$p)=>{"use strict";var sor=L(),uor=U(),oor=Xr(),vor=fo(),cor=Np(),lor=vo(),por=E(),gor=Rr(),mor=ta(),dor=Xp().assign,hor=Zp(),yor=Qt(),qor=$t(),bor=2220446049250313e-31,wor=2148532223>>>0,qo=[0,0],bo=[0,0];function Eor(r,e){var t,i;return e===0||r===0||por(r)||gor(r)?r:(dor(r,qo,1,0),r=qo[0],e+=qo[1],e+=hor(r),e<lor?mor(0,r):e>vor?r<0?uor:sor:(e<=cor?(e+=52,i=bor):i=1,yor.assign(r,bo,1,0),t=bo[0],t&=wor,t|=e+oor<<20,i*qor(t,bo[1])))}$p.exports=Eor});var ia=s((_$r,Kp)=>{"use strict";var Nor=Qp();Kp.exports=Nor});var e7=s((L$r,r7)=>{"use strict";function Aor(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}r7.exports=Aor});var na=s((P$r,t7)=>{"use strict";var Oor=e7();t7.exports=Oor});var n7=s((R$r,i7)=>{"use strict";var Sor=na();function Tor(r){return Sor(0,r)}i7.exports=Tor});var s7=s((F$r,a7)=>{"use strict";var Ior=n7();a7.exports=Ior});var c7=s((M$r,v7)=>{"use strict";var _or=Q(),aa=ia(),oa=s7(),o7=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Lor=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],wo=16777216,Eo=5960464477539063e-23,sa=oa(20),u7=oa(20),ua=oa(20),cr=oa(20);function f7(r,e,t,i,n,a,u,o,v){var f,c,l,p,m,h,d,g,y;for(p=a,y=i[t],g=t,m=0;g>0;m++)c=Eo*y|0,cr[m]=y-wo*c|0,y=i[g-1]+c,g-=1;if(y=aa(y,n),y-=8*_or(y*.125),d=y|0,y-=d,l=0,n>0?(m=cr[t-1]>>24-n,d+=m,cr[t-1]-=m<<24-n,l=cr[t-1]>>23-n):n===0?l=cr[t-1]>>23:y>=.5&&(l=2),l>0){for(d+=1,f=0,m=0;m<t;m++)g=cr[m],f===0?g!==0&&(f=1,cr[m]=16777216-g):cr[m]=16777215-g;if(n>0)switch(n){case 1:cr[t-1]&=8388607;break;case 2:cr[t-1]&=4194303;break}l===2&&(y=1-y,f!==0&&(y-=aa(1,n)))}if(y===0){for(g=0,m=t-1;m>=a;m--)g|=cr[m];if(g===0){for(h=1;cr[a-h]===0;h++);for(m=t+1;m<=t+h;m++){for(v[o+m]=o7[u+m],c=0,g=0;g<=o;g++)c+=r[g]*v[o+(m-g)];i[m]=c}return t+=h,f7(r,e,t,i,n,a,u,o,v)}}if(y===0)for(t-=1,n-=24;cr[t]===0;)t-=1,n-=24;else y=aa(y,-n),y>=wo?(c=Eo*y|0,cr[t]=y-wo*c|0,t+=1,n+=24,cr[t]=c):cr[t]=y|0;for(c=aa(1,n),m=t;m>=0;m--)i[m]=c*cr[m],c*=Eo;for(m=t;m>=0;m--){for(c=0,h=0;h<=p&&h<=t-m;h++)c+=Lor[h]*i[m+h];ua[t-m]=c}for(c=0,m=t;m>=0;m--)c+=ua[m];for(l===0?e[0]=c:e[0]=-c,c=ua[0]-c,m=1;m<=t;m++)c+=ua[m];return l===0?e[1]=c:e[1]=-c,d&7}function Por(r,e,t,i){var n,a,u,o,v,f,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),f=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?sa[c]=0:sa[c]=o7[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*sa[o+(c-l)];u7[c]=n}return v=a,f7(r,e,v,u7,f,a,u,o,sa)}v7.exports=Por});var p7=s((B$r,l7)=>{"use strict";var Ror=Math.round;l7.exports=Ror});var No=s((k$r,g7)=>{"use strict";var For=p7();g7.exports=For});var y7=s((j$r,h7)=>{"use strict";var Mor=No(),m7=tr(),Bor=.6366197723675814,kor=1.5707963267341256,jor=6077100506506192e-26,Cor=6077100506303966e-26,Gor=20222662487959506e-37,Vor=20222662487111665e-37,Uor=84784276603689e-45,d7=2047;function Hor(r,e,t){var i,n,a,u,o,v,f;return n=Mor(r*Bor),u=r-n*kor,o=n*jor,f=e>>20|0,t[0]=u-o,i=m7(t[0]),v=f-(i>>20&d7),v>16&&(a=u,o=n*Cor,u=a-o,o=n*Gor-(a-u-o),t[0]=u-o,i=m7(t[0]),v=f-(i>>20&d7),v>49&&(a=u,o=n*Vor,u=a-o,o=n*Uor-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}h7.exports=Hor});var b7=s((C$r,q7)=>{"use strict";var Wor=Jr(),Dor=Ji(),zor=ea(),Xor=tr(),Jor=cp(),xor=$t(),Yor=c7(),fa=y7(),Zor=0,$or=16777216,Ve=1.5707963267341256,Ot=6077100506506192e-26,va=2*Ot,ca=3*Ot,la=4*Ot,Qor=598523,Kor=1072243195,r2r=1073928572,e2r=1074752122,t2r=1074977148,i2r=1075183036,n2r=1075388923,a2r=1075594811,s2r=1094263291,xi=[0,0,0],Yi=[0,0];function u2r(r,e){var t,i,n,a,u,o,v,f;if(n=Xor(r),a=n&Wor|0,a<=Kor)return e[0]=r,e[1]=0,0;if(a<=e2r)return(a&zor)===Qor?fa(r,a,e):a<=r2r?r>0?(f=r-Ve,e[0]=f-Ot,e[1]=f-e[0]-Ot,1):(f=r+Ve,e[0]=f+Ot,e[1]=f-e[0]+Ot,-1):r>0?(f=r-2*Ve,e[0]=f-va,e[1]=f-e[0]-va,2):(f=r+2*Ve,e[0]=f+va,e[1]=f-e[0]+va,-2);if(a<=a2r)return a<=i2r?a===t2r?fa(r,a,e):r>0?(f=r-3*Ve,e[0]=f-ca,e[1]=f-e[0]-ca,3):(f=r+3*Ve,e[0]=f+ca,e[1]=f-e[0]+ca,-3):a===n2r?fa(r,a,e):r>0?(f=r-4*Ve,e[0]=f-la,e[1]=f-e[0]-la,4):(f=r+4*Ve,e[0]=f+la,e[1]=f-e[0]+la,-4);if(a<s2r)return fa(r,a,e);if(a>=Dor)return e[0]=NaN,e[1]=NaN,0;for(t=Jor(r),i=(a>>20)-1046,f=xor(a-(i<<20|0),t),o=0;o<2;o++)xi[o]=f|0,f=(f-xi[o])*$or;for(xi[2]=f,u=3;xi[u-1]===Zor;)u-=1;return v=Yor(xi,Yi,i,u,1),r<0?(e[0]=-Yi[0],e[1]=-Yi[1],-v):(e[0]=Yi[0],e[1]=Yi[1],v)}q7.exports=u2r});var Zi=s((G$r,w7)=>{"use strict";var o2r=b7();w7.exports=o2r});var A7=s((V$r,N7)=>{"use strict";var f2r=tr(),Ao=no(),E7=ao(),v2r=Zi(),ee=[0,0],c2r=2147483647,l2r=1072243195,p2r=1044381696,g2r=2146435072;function m2r(r){var e,t;if(e=f2r(r),e&=c2r,e<=l2r)return e<p2r?1:Ao(r,0);if(e>=g2r)return NaN;switch(t=v2r(r,ee),t&3){case 0:return Ao(ee[0],ee[1]);case 1:return-E7(ee[0],ee[1]);case 2:return-Ao(ee[0],ee[1]);default:return E7(ee[0],ee[1])}}N7.exports=m2r});var St=s((U$r,O7)=>{"use strict";var d2r=A7();O7.exports=d2r});var I7=s((H$r,T7)=>{"use strict";var h2r=Jr(),y2r=Ji(),q2r=tr(),S7=no(),Oo=ao(),b2r=Zi(),w2r=1072243195,E2r=1045430272,te=[0,0];function N2r(r){var e,t;if(e=q2r(r),e&=h2r,e<=w2r)return e<E2r?r:Oo(r,0);if(e>=y2r)return NaN;switch(t=b2r(r,te),t&3){case 0:return Oo(te[0],te[1]);case 1:return S7(te[0],te[1]);case 2:return-Oo(te[0],te[1]);default:return-S7(te[0],te[1])}}T7.exports=N2r});var Tt=s((W$r,_7)=>{"use strict";var A2r=I7();_7.exports=A2r});var _r=s((D$r,L7)=>{"use strict";var O2r=3.141592653589793;L7.exports=O2r});var F7=s((z$r,R7)=>{"use strict";var S2r=E(),T2r=Rr(),P7=St(),So=Tt(),I2r=Y(),$i=ta(),Qi=_r();function _2r(r){var e,t;return S2r(r)?NaN:T2r(r)?NaN:(t=r%2,e=I2r(t),e===0||e===1?$i(0,t):e<.25?So(Qi*t):e<.75?(e=.5-e,$i(P7(Qi*e),t)):e<1.25?(t=$i(1,t)-t,So(Qi*t)):e<1.75?(e-=1.5,-$i(P7(Qi*e),t)):(t-=$i(2,t),So(Qi*t)))}R7.exports=_2r});var Ki=s((X$r,M7)=>{"use strict";var L2r=F7();M7.exports=L2r});var k7=s((J$r,B7)=>{"use strict";function P2r(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}B7.exports=P2r});var C7=s((x$r,j7)=>{"use strict";function R2r(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}j7.exports=R2r});var V7=s((Y$r,G7)=>{"use strict";function F2r(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}G7.exports=F2r});var H7=s((Z$r,U7)=>{"use strict";function M2r(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}U7.exports=M2r});var D7=s(($$r,W7)=>{"use strict";function B2r(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}W7.exports=B2r});var X7=s((Q$r,z7)=>{"use strict";function k2r(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}z7.exports=k2r});var x7=s((K$r,J7)=>{"use strict";function j2r(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}J7.exports=j2r});var Z7=s((rQr,Y7)=>{"use strict";function C2r(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}Y7.exports=C2r});var Q7=s((eQr,$7)=>{"use strict";function G2r(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}$7.exports=G2r});var r9=s((tQr,K7)=>{"use strict";function V2r(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}K7.exports=V2r});var i9=s((iQr,t9)=>{"use strict";var U2r=E(),H2r=Rr(),W2r=Y(),Kt=P(),D2r=ra(),z2r=Ki(),X2r=_r(),To=L(),J2r=k7(),x2r=C7(),Y2r=V7(),Z2r=H7(),$2r=D7(),Q2r=X7(),K2r=x7(),r1r=Z7(),e1r=Q7(),t1r=r9(),i1r=.07721566490153287,n1r=.3224670334241136,a1r=1,s1r=-.07721566490153287,u1r=.48383612272381005,o1r=-.1475877229945939,f1r=.06462494023913339,v1r=-.07721566490153287,c1r=1,l1r=.4189385332046727,pa=1.4616321449683622,p1r=4503599627370496,g1r=0x400000000000000,m1r=8470329472543003e-37,e9=1.4616321449683622,d1r=-.12148629053584961,h1r=-3638676997039505e-33;function y1r(r){var e,t,i,n,a,u,o,v,f,c,l,p,m;if(U2r(r)||H2r(r))return r;if(r===0)return To;if(r<0?(e=!0,r=-r):e=!1,r<m1r)return-Kt(r);if(e){if(r>=p1r||(f=z2r(r),f===0))return To;t=Kt(X2r/W2r(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-Kt(r),r>=pa-1+.27?(l=1-r,i=0):r>=pa-1-.27?(l=r-(e9-1),i=1):(l=r,i=2)):(m=0,r>=pa+.27?(l=2-r,i=0):r>=pa-.27?(l=r-e9,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=i1r+p*J2r(p),a=p*(n1r+p*x2r(p)),o=l*u+a,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=u1r+c*$2r(c),a=o1r+c*Q2r(c),n=f1r+c*K2r(c),o=p*u-(h1r-c*(a+l*n)),m+=d1r+o;break;case 2:u=l*(v1r+l*r1r(l)),a=c1r+l*e1r(l),m+=-.5*l+u/a;break}else if(r<8)switch(i=D2r(r),l=r-i,o=l*(s1r+l*Z2r(l)),v=a1r+l*Y2r(l),m=.5*l+o/v,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=Kt(p)}else r<g1r?(f=Kt(r),p=1/r,l=p*p,c=l1r+p*t1r(l),m=(r-.5)*(f-1)+c):m=r*(Kt(r)-1);return e&&(m=t-m),m}t9.exports=y1r});var rn=s((nQr,n9)=>{"use strict";var q1r=i9();n9.exports=q1r});var s9=s((aQr,a9)=>{"use strict";var b1r=U();function w1r(r){return r===0&&1/r===b1r}a9.exports=w1r});var Io=s((sQr,u9)=>{"use strict";var E1r=s9();u9.exports=E1r});var _o=s((uQr,o9)=>{"use strict";var N1r=2.5066282746310007;o9.exports=N1r});var v9=s((oQr,f9)=>{"use strict";var A1r=Ir();function O1r(r){return A1r(r/2)}f9.exports=O1r});var ga=s((fQr,c9)=>{"use strict";var S1r=v9();c9.exports=S1r});var g9=s((vQr,p9)=>{"use strict";var l9=ga();function T1r(r){return r>0?l9(r-1):l9(r+1)}p9.exports=T1r});var Lo=s((cQr,m9)=>{"use strict";var I1r=g9();m9.exports=I1r});var h9=s((lQr,d9)=>{"use strict";var _1r=Math.sqrt;d9.exports=_1r});var C=s((pQr,y9)=>{"use strict";var L1r=h9();y9.exports=L1r});var b9=s((gQr,q9)=>{"use strict";var P1r=At(),Po;P1r===!0?Po=0:Po=1;q9.exports=Po});var E9=s((mQr,w9)=>{"use strict";var R1r=lr(),F1r=dr(),M1r=b9(),Ro=new F1r(1),B1r=new R1r(Ro.buffer);function k1r(r,e){return Ro[0]=r,B1r[M1r]=e>>>0,Ro[0]}w9.exports=k1r});var ie=s((dQr,N9)=>{"use strict";var j1r=E9();N9.exports=j1r});var O9=s((hQr,A9)=>{"use strict";function C1r(r){return r|0}A9.exports=C1r});var Fo=s((yQr,S9)=>{"use strict";var G1r=O9();S9.exports=G1r});var _9=s((qQr,I9)=>{"use strict";var T9=Lo(),V1r=ta(),U1r=U(),ma=L();function H1r(r,e){return e===U1r?ma:e===ma?0:e>0?T9(e)?r:0:T9(e)?V1r(ma,r):ma}I9.exports=H1r});var P9=s((bQr,L9)=>{"use strict";var W1r=Jr(),D1r=tr(),z1r=1072693247,da=1e300,ha=1e-300;function X1r(r,e){var t,i;return i=D1r(r),t=i&W1r,t<=z1r?e<0?da*da:ha*ha:e>0?da*da:ha*ha}L9.exports=X1r});var M9=s((wQr,F9)=>{"use strict";var J1r=Y(),R9=L();function x1r(r,e){return r===-1?(r-r)/(r-r):r===1?1:J1r(r)<1==(e===R9)?0:R9}F9.exports=x1r});var k9=s((EQr,B9)=>{"use strict";function Y1r(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}B9.exports=Y1r});var V9=s((NQr,G9)=>{"use strict";var Z1r=tr(),ya=ie(),j9=re(),$1r=Xr(),Q1r=k9(),K1r=1048575,C9=1048576,r3r=1072693248,e3r=536870912,t3r=524288,i3r=20,n3r=9007199254740992,a3r=.9617966939259756,s3r=.9617967009544373,u3r=-7028461650952758e-24,o3r=[1,1.5],f3r=[0,.5849624872207642],v3r=[0,1350039202129749e-23];function c3r(r,e,t){var i,n,a,u,o,v,f,c,l,p,m,h,d,g,y,N,A,V,T,J,fr,z;return J=0,t<C9&&(e*=n3r,J-=53,t=Z1r(e)),J+=(t>>i3r)-$1r|0,fr=t&K1r|0,t=fr|r3r|0,fr<=235662?z=0:fr<767610?z=1:(z=0,J+=1,t-=C9),e=j9(e,t),c=o3r[z],V=e-c,T=1/(e+c),n=V*T,u=ya(n,0),i=(t>>1|e3r)+t3r,i+=z<<18,v=j9(0,i),f=e-(v-c),o=T*(V-u*v-u*f),a=n*n,A=a*a*Q1r(a),A+=o*(u+n),a=u*u,v=3+a+A,v=ya(v,0),f=A-(v-3-a),V=u*v,T=o*v+f*n,p=V+T,p=ya(p,0),m=T-(p-V),h=s3r*p,d=u3r*p+m*a3r+v3r[z],l=f3r[z],N=J,g=h+d+l+N,g=ya(g,0),y=d-(g-N-l-h),r[0]=g,r[1]=y,r}G9.exports=c3r});var H9=s((AQr,U9)=>{"use strict";function l3r(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}U9.exports=l3r});var D9=s((OQr,W9)=>{"use strict";var p3r=ie(),g3r=H9(),m3r=1.4426950408889634,d3r=1.4426950216293335,h3r=19259629911266175e-24;function y3r(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*g3r(n),u=d3r*n,o=n*h3r-a*m3r,i=u+o,i=p3r(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}W9.exports=y3r});var qa=s((SQr,z9)=>{"use strict";var q3r=.6931471805599453;z9.exports=q3r});var J9=s((TQr,X9)=>{"use strict";function b3r(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}X9.exports=b3r});var rg=s((IQr,K9)=>{"use strict";var w3r=tr(),x9=re(),E3r=ie(),N3r=Fo(),A3r=ia(),O3r=qa(),Y9=Xr(),Z9=Jr(),$9=ea(),S3r=J9(),Q9=1048576,T3r=1071644672,en=20,I3r=.6931471824645996,_3r=-1904654299957768e-24;function L3r(r,e,t){var i,n,a,u,o,v,f,c,l,p,m;return p=r&Z9|0,m=(p>>en)-Y9|0,l=0,p>T3r&&(l=r+(Q9>>m+1)>>>0,m=((l&Z9)>>en)-Y9|0,i=(l&~($9>>m))>>>0,a=x9(0,i),l=(l&$9|Q9)>>en-m>>>0,r<0&&(l=-l),e-=a),a=t+e,a=E3r(a,0),o=a*I3r,v=(t-(a-e))*O3r+a*_3r,c=o+v,f=v-(c-o),a=c*c,n=c-a*S3r(a),u=c*n/(n-2)-(f+c*f),c=1-(u-c),r=w3r(c),r=N3r(r),r+=l<<en>>>0,r>>en<=0?c=A3r(c,l):c=x9(c,r),c}K9.exports=L3r});var cg=s((_Qr,vg)=>{"use strict";var eg=E(),tg=Lo(),ig=Rr(),P3r=Ir(),ng=C(),R3r=Y(),Mo=Qt(),F3r=ie(),ag=Fo(),M3r=U(),B3r=L(),Bo=Jr(),k3r=_9(),j3r=P9(),C3r=M9(),G3r=V9(),V3r=D9(),U3r=rg(),H3r=1072693247,W3r=1105199104,D3r=1139802112,sg=1083179008,z3r=1072693248,X3r=1083231232,J3r=3230714880>>>0,ug=31,Ue=1e300,He=1e-300,x3r=8008566259537294e-32,ne=[0,0],og=[0,0];function fg(r,e){var t,i,n,a,u,o,v,f,c,l,p,m,h,d,g,y;if(eg(r)||eg(e))return NaN;if(Mo.assign(e,ne,1,0),o=ne[0],v=ne[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return ng(r);if(e===-.5)return 1/ng(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(ig(e))return C3r(r,e)}if(Mo.assign(r,ne,1,0),a=ne[0],u=ne[1],u===0){if(a===0)return k3r(r,e);if(r===1)return 1;if(r===-1&&tg(e))return-1;if(ig(r))return r===M3r?fg(-0,-e):e<0?0:B3r}if(r<0&&P3r(e)===!1)return(r-r)/(r-r);if(n=R3r(r),t=a&Bo|0,i=o&Bo|0,f=a>>>ug|0,c=o>>>ug|0,f&&tg(e)?f=-1:f=1,i>W3r){if(i>D3r)return j3r(r,e);if(t<H3r)return c===1?f*Ue*Ue:f*He*He;if(t>z3r)return c===0?f*Ue*Ue:f*He*He;h=V3r(og,n)}else h=G3r(og,n,t);if(l=F3r(e,0),m=(e-l)*h[0]+e*h[1],p=l*h[0],d=m+p,Mo.assign(d,ne,1,0),g=ag(ne[0]),y=ag(ne[1]),g>=sg){if((g-sg|y)!==0||m+x3r>d-p)return f*Ue*Ue}else if((g&Bo)>=X3r&&((g-J3r|y)!==0||m<=d-p))return f*He*He;return d=U3r(g,p,m),f*d}vg.exports=fg});var W=s((LQr,lg)=>{"use strict";var Y3r=cg();lg.exports=Y3r});var gg=s((PQr,pg)=>{"use strict";function Z3r(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}pg.exports=Z3r});var dg=s((RQr,mg)=>{"use strict";var $3r=ia(),Q3r=gg();function K3r(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*Q3r(n),u=1-(e-i*a/(2-a)-r),$3r(u,t)}mg.exports=K3r});var Eg=s((FQr,wg)=>{"use strict";var rfr=E(),hg=ra(),efr=U(),yg=L(),tfr=dg(),ifr=.6931471803691238,nfr=19082149292705877e-26,qg=1.4426950408889634,afr=709.782712893384,sfr=-745.1332191019411,bg=1/(1<<28),ufr=-bg;function ofr(r){var e,t,i;return rfr(r)||r===yg?r:r===efr?0:r>afr?yg:r<sfr?0:r>ufr&&r<bg?1+r:(r<0?i=hg(qg*r-.5):i=hg(qg*r+.5),e=r-i*ifr,t=i*nfr,tfr(e,t,i))}wg.exports=ofr});var nr=s((MQr,Ng)=>{"use strict";var ffr=Eg();Ng.exports=ffr});var Og=s((BQr,Ag)=>{"use strict";function vfr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}Ag.exports=vfr});var Ig=s((kQr,Tg)=>{"use strict";var cfr=_o(),Sg=W(),lfr=nr(),pfr=Og(),gfr=143.01608;function mfr(r){var e,t,i;return e=1/r,e=1+e*pfr(e),t=lfr(r),r>gfr?(i=Sg(r,.5*r-.25),t=i*(i/t)):t=Sg(r,r-.5)/t,cfr*t*e}Tg.exports=mfr});var Lg=s((jQr,_g)=>{"use strict";var dfr=.5772156649015329;_g.exports=dfr});var Rg=s((CQr,Pg)=>{"use strict";var hfr=Lg();function yfr(r,e){return e/((1+hfr*r)*r)}Pg.exports=yfr});var Mg=s((GQr,Fg)=>{"use strict";function qfr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}Fg.exports=qfr});var Hg=s((VQr,Ug)=>{"use strict";var bfr=E(),wfr=Ir(),Efr=Io(),Bg=Y(),Nfr=Q(),Afr=Tt(),kg=L(),jg=U(),Cg=_r(),Gg=Ig(),Vg=Rg(),Ofr=Mg();function Sfr(r){var e,t,i,n;if(wfr(r)&&r<0||r===jg||bfr(r))return NaN;if(r===0)return Efr(r)?jg:kg;if(r>171.61447887182297)return kg;if(r<-170.5674972726612)return 0;if(t=Bg(r),t>33)return r>=0?Gg(r):(i=Nfr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*Afr(Cg*n),e*Cg/(Bg(n)*Gg(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return Vg(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return Vg(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*Ofr(r))}Ug.exports=Sfr});var ri=s((UQr,Wg)=>{"use strict";var Tfr=Hg();Wg.exports=Tfr});var ko=s((HQr,Dg)=>{"use strict";var Ifr=14901161193847656e-24;Dg.exports=Ifr});var Xg=s((WQr,zg)=>{"use strict";var _fr=17976931348623157e292;zg.exports=_fr});var ba=s((DQr,Jg)=>{"use strict";var Lfr=709.782712893384;Jg.exports=Lfr});var Yg=s((zQr,xg)=>{"use strict";var Pfr=nr();function Rfr(r,e){var t,i,n,a;if(n=Pfr(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}xg.exports=Rfr});var $g=s((XQr,Zg)=>{"use strict";function Ffr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}Zg.exports=Ffr});var Kg=s((JQr,Qg)=>{"use strict";function Mfr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}Qg.exports=Mfr});var em=s((xQr,rm)=>{"use strict";function Bfr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}rm.exports=Bfr});var im=s((YQr,tm)=>{"use strict";function kfr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}tm.exports=kfr});var am=s((ZQr,nm)=>{"use strict";function jfr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}nm.exports=jfr});var um=s(($Qr,sm)=>{"use strict";function Cfr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}sm.exports=Cfr});var fm=s((QQr,om)=>{"use strict";function Gfr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}om.exports=Gfr});var cm=s((KQr,vm)=>{"use strict";function Vfr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}vm.exports=Vfr});var mm=s((rKr,gm)=>{"use strict";var Ufr=E(),lm=nr(),Hfr=ie(),Wfr=L(),Dfr=U(),zfr=$g(),Xfr=Kg(),Jfr=em(),xfr=im(),Yfr=am(),Zfr=um(),$fr=fm(),Qfr=cm(),wa=1e-300,Kfr=13877787807814457e-33,pm=.8450629115104675,rvr=.12837916709551256,evr=1,tvr=-.0023621185607526594,ivr=1,nvr=-.009864944034847148,avr=1,svr=-.0098649429247001,uvr=1;function ovr(r){var e,t,i,n,a,u,o,v;if(Ufr(r))return NaN;if(r===Wfr)return 0;if(r===Dfr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<Kfr?1-r:(i=r*r,n=rvr+i*zfr(i),a=evr+i*Xfr(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=tvr+a*Jfr(a),v=ivr+a*xfr(a),e?1+pm+o/v:1-pm-o/v;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=nvr+a*Yfr(a),a=avr+a*Zfr(a);else{if(r<-6)return 2-wa;n=svr+a*$fr(a),a=uvr+a*Qfr(a)}return i=Hfr(t,0),n=lm(-(i*i)-.5625)*lm((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-wa:wa*wa}gm.exports=ovr});var It=s((eKr,dm)=>{"use strict";var fvr=mm();dm.exports=fvr});var qm=s((tKr,ym)=>{"use strict";var vvr=It(),hm=C(),cvr=nr(),lvr=_r();function pvr(r,e){var t,i,n,a,u;if(a=vvr(hm(e)),a!==0&&r>1){for(i=cvr(-e)/hm(lvr*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}ym.exports=pvr});var jo=s((iKr,bm)=>{"use strict";var gvr=-708.3964185322641;bm.exports=gvr});var Am=s((nKr,Nm)=>{"use strict";var ei=nr(),Ea=W(),mvr=P(),wm=ba(),Em=jo();function dvr(r,e){var t,i;return i=r*mvr(e),e>=1?i<wm&&-e>Em?t=Ea(e,r)*ei(-e):r>=1?t=Ea(e/ei(e/r),r):t=ei(i-e):i>Em?t=Ea(e,r)*ei(-e):e/r<wm?t=Ea(e/ei(e/r),r):t=ei(i-e),t}Nm.exports=dvr});var Co=s((aKr,Om)=>{"use strict";function hvr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Om.exports=hvr});var Tm=s((sKr,Sm)=>{"use strict";var yvr=Function;Sm.exports=yvr});var _m=s((uKr,Im)=>{"use strict";var qvr=Tm();Im.exports=qvr});var Pm=s((oKr,Lm)=>{"use strict";var bvr=_m(),wvr=Co();function Evr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new bvr(e)();function a(u){return wvr(r,u)}}Lm.exports=Evr});var Mm=s((fKr,Fm)=>{"use strict";var Nvr=w(),Rm=Co(),Avr=Pm();Nvr(Rm,"factory",Avr);Fm.exports=Rm});var _t=s((vKr,Bm)=>{"use strict";var Ovr=2220446049250313e-31;Bm.exports=Ovr});var jm=s((cKr,km)=>{"use strict";var Svr=eval;km.exports=Svr});var Gm=s((lKr,Cm)=>{"use strict";var Tvr=jm();function Ivr(){var r;try{Tvr('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}Cm.exports=Ivr});var Go=s((pKr,Vm)=>{"use strict";var _vr=Gm();Vm.exports=_vr});var Hm=s((gKr,Um)=>{"use strict";var Na=Y(),Lvr=_t(),Pvr=1e6;function Rvr(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||Lvr,a=o.maxTerms||Pvr,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,Na(i*u)>=Na(n)||--a===0)break}else do n=r(),u+=n;while(Na(i*u)<Na(n)&&--a);return u}Um.exports=Rvr});var zm=s((mKr,Dm)=>{"use strict";var Wm=Y(),Fvr=_t(),Mvr=1e6;function Bvr(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||Fvr,n=u.maxTerms||Mvr,a=u.initialValue||0;do i=r(),a+=i;while(Wm(t*a)<Wm(i)&&--n);return a}Dm.exports=Bvr});var Aa=s((dKr,Xm)=>{"use strict";var kvr=Go(),jvr=Hm(),Cvr=zm(),Vo;kvr()?Vo=jvr:Vo=Cvr;Xm.exports=Vo});var xm=s((hKr,Jm)=>{"use strict";function Gvr(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}Jm.exports=Gvr});var Zm=s((yKr,Ym)=>{"use strict";var Vvr=Y(),Uvr=P(),Hvr=_t(),Wvr=Aa(),Dvr=xm();function zvr(r){var e,t;return r<=-1?NaN:(t=Vvr(r),t>.95?Uvr(1+r)-r:t<Hvr?-r*r/2:(e={initialValue:-r},Wvr(Dvr(r),e)))}Ym.exports=zvr});var Qm=s((qKr,$m)=>{"use strict";var Xvr=Zm();$m.exports=Xvr});var We=s((bKr,Km)=>{"use strict";var Jvr=6.283185307179586;Km.exports=Jvr});var ed=s((wKr,rd)=>{"use strict";function xvr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}rd.exports=xvr});var id=s((EKr,td)=>{"use strict";function Yvr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}td.exports=Yvr});var ad=s((NKr,nd)=>{"use strict";function Zvr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}nd.exports=Zvr});var ud=s((AKr,sd)=>{"use strict";function $vr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}sd.exports=$vr});var fd=s((OKr,od)=>{"use strict";function Qvr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}od.exports=Qvr});var cd=s((SKr,vd)=>{"use strict";function Kvr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}vd.exports=Kvr});var pd=s((TKr,ld)=>{"use strict";function rcr(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}ld.exports=rcr});var md=s((IKr,gd)=>{"use strict";function ecr(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}gd.exports=ecr});var hd=s((_Kr,dd)=>{"use strict";function tcr(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}dd.exports=tcr});var qd=s((LKr,yd)=>{"use strict";var icr=Mm(),ncr=Qm(),acr=It(),Uo=C(),scr=nr(),ucr=We(),ocr=ed(),fcr=id(),vcr=ad(),ccr=ud(),lcr=fd(),pcr=cd(),gcr=pd(),mcr=md(),dcr=hd(),Vr=[0,0,0,0,0,0,0,0,0,0];function hcr(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-ncr(i),a=r*n,u=Uo(2*n),e<r&&(u=-u),Vr[0]=ocr(u),Vr[1]=fcr(u),Vr[2]=vcr(u),Vr[3]=ccr(u),Vr[4]=lcr(u),Vr[5]=pcr(u),Vr[6]=gcr(u),Vr[7]=mcr(u),Vr[8]=dcr(u),Vr[9]=-.0005967612901927463,t=icr(Vr,1/r),t*=scr(-a)/Uo(ucr*r),e<r&&(t=-t),t+=acr(Uo(a))/2,t}yd.exports=hcr});var wd=s((PKr,bd)=>{"use strict";function ycr(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}bd.exports=ycr});var Nd=s((RKr,Ed)=>{"use strict";var qcr=Aa(),bcr=wd();function wcr(r,e,t){var i,n;return t=t||0,n=bcr(r,e),i=qcr(n,{initialValue:t}),i}Ed.exports=wcr});var Od=s((FKr,Ad)=>{"use strict";function Ecr(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}Ad.exports=Ecr});var Td=s((MKr,Sd)=>{"use strict";var Ncr=Od();Sd.exports=Ncr});var _d=s((BKr,Id)=>{"use strict";var Acr=Td();Id.exports=Acr});var Pd=s((kKr,Ld)=>{"use strict";function Ocr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}Ld.exports=Ocr});var kd=s((jKr,Bd)=>{"use strict";var Scr=E(),Rd=tr(),Fd=re(),Tcr=L(),Icr=U(),Md=Xr(),_cr=Pd(),Ho=.6931471803691238,Wo=19082149292705877e-26,Lcr=.41421356237309503,Pcr=-.2928932188134525,Rcr=1862645149230957e-24,Fcr=5551115123125783e-32,Mcr=9007199254740992,Bcr=.6666666666666666;function kcr(r){var e,t,i,n,a,u,o,v,f,c;if(r<-1||Scr(r))return NaN;if(r===-1)return Icr;if(r===Tcr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<Lcr){if(i<Rcr)return i<Fcr?r:r-r*r*.5;r>Pcr&&(c=0,n=r,t=1)}return c!==0&&(i<Mcr?(f=1+r,t=Rd(f),c=(t>>20)-Md,c>0?a=1-(f-r):a=r-(f-1),a/=f):(f=r,t=Rd(f),c=(t>>20)-Md,a=0),t&=1048575,t<434334?f=Fd(f,t|1072693248):(c+=1,f=Fd(f,t|1071644672),t=1048576-t>>2),n=f-1),e=.5*n*n,t===0?n===0?(a+=c*Wo,c*Ho+a):(v=e*(1-Bcr*n),c*Ho-(v-(c*Wo+a)-n)):(u=n/(2+n),o=u*u,v=o*_cr(o),c===0?n-(e-u*(e+v)):c*Ho-(e-(u*(e+v)+(c*Wo+a))-n))}Bd.exports=kcr});var De=s((CKr,jd)=>{"use strict";var jcr=kd();jd.exports=jcr});var Gd=s((GKr,Cd)=>{"use strict";var Ccr=L();function Gcr(r){return r===0&&1/r===Ccr}Cd.exports=Gcr});var ze=s((VKr,Vd)=>{"use strict";var Vcr=Gd();Vd.exports=Vcr});var Wd=s((UKr,Hd)=>{"use strict";var Ucr=ze(),Ud=E(),Do=L();function Hcr(r,e){return Ud(r)||Ud(e)?NaN:r===Do||e===Do?Do:r===e&&r===0?Ucr(r)?r:e:r>e?r:e}Hd.exports=Hcr});var zo=s((HKr,Dd)=>{"use strict";var Wcr=Wd();Dd.exports=Wcr});var Jd=s((WKr,Xd)=>{"use strict";var Dcr=Io(),zd=E(),Xo=U();function zcr(r,e){return zd(r)||zd(e)?NaN:r===Xo||e===Xo?Xo:r===e&&r===0?Dcr(r)?r:e:r<e?r:e}Xd.exports=zcr});var Yd=s((DKr,xd)=>{"use strict";var Xcr=Jd();xd.exports=Xcr});var $d=s((zKr,Zd)=>{"use strict";var Jcr=10.900511;Zd.exports=Jcr});var Jo=s((XKr,Qd)=>{"use strict";var xcr=2.718281828459045;Qd.exports=xcr});var eh=s((JKr,rh)=>{"use strict";var Ycr=_d(),Zcr=rn(),$cr=ri(),Qcr=De(),Kcr=C(),rlr=Y(),Xe=nr(),tn=W(),xo=zo(),Yo=Yd(),Kd=P(),Oa=ba(),nn=jo(),Zo=$d(),elr=Jo();function tlr(r,e){var t,i,n,a,u,o,v;return n=r+Zo-.5,v=(e-r-Zo+.5)/n,r<1?e<=nn?Xe(r*Kd(e)-e-Zcr(r)):tn(e,r)*Xe(-e)/$cr(r):(rlr(v*v*r)<=100&&r>150?(t=r*(Qcr(v)-v)+e*(.5-Zo)/n,t=Xe(t)):(a=r*Kd(e/n),u=r-e,Yo(a,u)<=nn||xo(a,u)>=Oa?(i=u/r,Yo(a,u)/2>nn&&xo(a,u)/2<Oa?(o=tn(e/n,r/2)*Xe(u/2),t=o*o):Yo(a,u)/4>nn&&xo(a,u)/4<Oa&&e>r?(o=tn(e/n,r/4)*Xe(u/4),t=o*o,t*=t):i>nn&&i<Oa?t=tn(e*Xe(i)/n,r):t=Xe(a+u)):t=tn(e/n,r)*Xe(u)),t*=Kcr(n/elr)/Ycr(r),t)}rh.exports=tlr});var ih=s((xKr,th)=>{"use strict";var ilr=.34657359027997264;th.exports=ilr});var ah=s((YKr,nh)=>{"use strict";function nlr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}nh.exports=nlr});var ch=s((ZKr,vh)=>{"use strict";var alr=E(),sh=tr(),$o=re(),slr=$t(),uh=L(),ulr=U(),oh=Xr(),olr=ih(),flr=ah(),vlr=709.782712893384,Qo=.6931471803691238,Ko=19082149292705877e-26,fh=1.4426950408889634,clr=38.816242111356935,llr=1.0397207708399179;function plr(r){var e,t,i,n,a,u,o,v,f,c,l,p,m;if(r===uh||alr(r))return r;if(r===ulr)return-1;if(r===0)return r;if(r<0?(i=!0,v=-r):(i=!1,v=r),v>=clr){if(i)return-1;if(v>=vlr)return uh}if(u=sh(v)|0,v>olr)v<llr?i?(n=r+Qo,a=-Ko,m=-1):(n=r-Qo,a=Ko,m=1):(i?m=fh*r-.5:m=fh*r+.5,m|=0,l=m,n=r-l*Qo,a=l*Ko),r=n-a,c=n-r-a;else{if(u<1016070144)return r;m=0}return e=.5*r,f=r*e,o=1+f*flr(f),l=3-o*e,p=f*((o-l)/(6-r*l)),m===0?r-(r*p-f):(t=slr(oh+m<<20,0),p=r*(p-c)-c,p-=f,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(v=1-(p-r),m===1024?(n=sh(v)+(m<<20)|0,v=$o(v,n)):v*=t,v-1):(l=1,m<20?(n=1072693248-(2097152>>m)|0,l=$o(l,n),v=l-(p-r)):(n=oh-m<<20|0,l=$o(l,n),v=r-(p+l),v+=1),v*=t,v))}vh.exports=plr});var r2=s(($Kr,lh)=>{"use strict";var glr=ch();lh.exports=glr});var dh=s((QKr,mh)=>{"use strict";var ph=E(),gh=Y(),mlr=r2(),dlr=P(),hlr=W(),ylr=ra();function qlr(r,e){var t;if(ph(r)||ph(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((gh(e*(r-1))<.5||gh(e)<.2)&&(t=dlr(r)*e,t<.5))return mlr(t)}else if(ylr(e)!==e)return NaN;return hlr(r,e)-1}mh.exports=qlr});var yh=s((KKr,hh)=>{"use strict";var blr=dh();hh.exports=blr});var bh=s((rre,qh)=>{"use strict";function wlr(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}qh.exports=wlr});var Eh=s((ere,wh)=>{"use strict";function Elr(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}wh.exports=Elr});var Ah=s((tre,Nh)=>{"use strict";function Nlr(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}Nh.exports=Nlr});var Sh=s((ire,Oh)=>{"use strict";var e2=P(),Alr=_t(),Olr=bh(),Slr=Eh(),Tlr=Ah(),Ilr=.15896368026733398,_lr=.5281534194946289,Llr=.45201730728149414;function Plr(r,e,t){var i,n,a,u;if(r<Alr)return-e2(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=e2(r);while(r>=3);t=r-2}return a=t*(r+1),u=Olr(t),n+=a*Ilr+a*u,n}return r<1&&(n+=-e2(r),t=e,e=r,r+=1),r<=1.5?(a=Slr(e),i=e*t,n+=i*_lr+i*a,n):(a=t*e,u=Tlr(-t),n+=a*Llr+a*u,n)}Oh.exports=Plr});var Ph=s((nre,Lh)=>{"use strict";var Th=ri(),Ih=r2(),Rlr=De(),Flr=E(),_h=Sh();function Mlr(r){return Flr(r)?NaN:r<0?r<-.5?Th(1+r)-1:Ih(-Rlr(r)+_h(r+2,r+1,r)):r<2?Ih(_h(r+1,r,r-1)):Th(1+r)-1}Lh.exports=Mlr});var Fh=s((are,Rh)=>{"use strict";var Blr=Ph();Rh.exports=Blr});var Bh=s((sre,Mh)=>{"use strict";function klr(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}Mh.exports=klr});var jh=s((ure,kh)=>{"use strict";var jlr=yh(),Clr=Aa(),Glr=Fh(),Vlr=Bh();function Ulr(r,e,t){var i,n,a,u,o;return n=Glr(r),a=(n+1)/r,u=jlr(e,r),n-=u,n/=r,o=Vlr(r,e),u+=1,i=t?a:0,n=-u*Clr(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}kh.exports=Ulr});var t2=s((ore,Ch)=>{"use strict";var Hlr=11754943508222875e-54;Ch.exports=Hlr});var Vh=s((fre,Gh)=>{"use strict";var Sa=Y(),xr=t2(),Wlr=_t(),Dlr=1e6;function zlr(r,e,t){var i,n,a,u,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),u=f[1],a=f[0],u===0&&(u=xr),o=u,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=xr),o=f[1]+f[0]/o,o===0&&(o=xr),v=1/v,n=o*v,u*=n);while(Sa(n-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=xr),o=f[1]+f[0]/o,o===0&&(o=xr),v=1/v,n=o*v,u*=n);while(f&&Sa(n-1)>e&&--t);return a/u}function Xlr(r,e,t){var i,n,a,u,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),a=v[1],a===0&&(a=xr),u=a,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=xr),u=v[1]+v[0]/u,u===0&&(u=xr),o=1/o,n=u*o,a*=n);while(v&&Sa(n-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=xr),u=v[1]+v[0]/u,u===0&&(u=xr),o=1/o,n=u*o,a*=n);while(v&&Sa(n-1)>e&&--t);return a}function Jlr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||Dlr,n=i.tolerance||Wlr,i.keep?Xlr(r,n,t):zlr(r,n,t)}Gh.exports=Jlr});var Wh=s((vre,Hh)=>{"use strict";var Uh=Y(),xlr=_t(),ti=t2(),Ylr=1e6;function Zlr(r,e,t){var i,n,a,u,o,v;v=r(),o=v[1],n=v[0],o===0&&(o=ti),a=o,u=0;do v=r(),v&&(u=v[1]+v[0]*u,u===0&&(u=ti),a=v[1]+v[0]/a,a===0&&(a=ti),u=1/u,i=a*u,o*=i);while(v&&Uh(i-1)>e&&--t);return n/o}function $lr(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=ti),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=ti),n=o[1]+o[0]/n,n===0&&(n=ti),a=1/a,i=n*a,u*=i);while(o&&Uh(i-1)>e&&--t);return u}function Qlr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||xlr,t=i.maxIter||Ylr,i.keep?$lr(r,n,t):Zlr(r,n,t)}Hh.exports=Qlr});var zh=s((cre,Dh)=>{"use strict";var Klr=Go(),r4r=Vh(),e4r=Wh(),i2;Klr()?i2=r4r:i2=e4r;Dh.exports=i2});var Jh=s((lre,Xh)=>{"use strict";function t4r(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}Xh.exports=t4r});var Yh=s((pre,xh)=>{"use strict";var i4r=zh(),n4r=Jh();function a4r(r,e){var t=n4r(r,e);return 1/(e-r+1+i4r(t))}xh.exports=a4r});var ay=s((gre,ny)=>{"use strict";var s4r=rn(),u4r=Q(),an=ri(),Zh=Y(),o4r=nr(),$h=W(),Ur=P(),f4r=ko(),Qh=Xg(),v4r=_o(),Kh=ba(),c4r=L(),l4r=Yg(),p4r=qm(),ry=Am(),g4r=qd(),n2=Nd(),ey=eh(),m4r=jh(),ty=Yh(),d4r=170;function iy(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h,d,g,y,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=d4r&&!a)return l&&e*4<r?(p=e*Ur(r)-r,p+=Ur(ty(e,r))):!l&&e>4*r?(p=e*Ur(r)-r,o=0,p+=Ur(n2(e,r,o)/e)):(p=iy(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Ur(p)-e+(e-.5)*Ur(e),p+=Ur(v4r)):(p=e*Ur(r)-r,o=0,p+=Ur(n2(e,r,o)/e)):p=Ur(p)+s4r(e)),p>Kh?c4r:o4r(p);switch(c=e<30&&e<=r+1&&r<Kh,c?(y=u4r(e),m=y===e,v=m?!1:Zh(y-e)===.5):m=v=!1,m&&r>.6?(l=!l,u=0):v&&r>.2?(l=!l,u=1):r<f4r&&e>1?u=6:r<.5?-.4/Ur(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(f=!1,a&&e>20&&(h=Zh((r-e)/e),e>200?20/e>h*h&&(f=!0):h<.4&&(f=!0)),f?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=l4r(e,r),a===!1&&(p*=an(e));break;case 1:p=p4r(e,r),a===!1&&(p*=an(e));break;case 2:p=a?ey(e,r):ry(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:an(e),a||p>=1||Qh*p>o?(o/=p,a||e<1||Qh/e>o?(o*=-e,n=!0):o=0):o=0)),p*=n2(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,g=m4r(e,r,l),p=g[0],N=g[1],l=!1,a&&(p/=N);break;case 4:p=a?ey(e,r):ry(e,r),p!==0&&(p*=ty(e,r));break;case 5:p=g4r(e,r),r>=e&&(l=!l);break;case 6:p=a?$h(r,e)/an(e+1):$h(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:an(e),p=d-p),p}ny.exports=iy});var a2=s((mre,sy)=>{"use strict";var h4r=ay();sy.exports=h4r});var oy=s((dre,uy)=>{"use strict";var y4r=a2(),s2=E(),q4r=L();function b4r(r,e,t){return s2(r)||s2(e)||s2(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===q4r?1:y4r(r*t,e)}uy.exports=b4r});var vy=s((hre,fy)=>{"use strict";function w4r(r){return e;function e(){return r}}fy.exports=w4r});var S=s((yre,cy)=>{"use strict";var E4r=vy();cy.exports=E4r});var gy=s((qre,py)=>{"use strict";var ly=E();function N4r(r,e){return ly(r)||ly(e)?NaN:r<e?0:1}py.exports=N4r});var hy=s((bre,dy)=>{"use strict";var A4r=S(),my=E();function O4r(r){if(my(r))return A4r(NaN);return e;function e(t){return my(t)?NaN:t<r?0:1}}dy.exports=O4r});var Ta=s((wre,qy)=>{"use strict";var S4r=w(),yy=gy(),T4r=hy();S4r(yy,"factory",T4r);qy.exports=yy});var Ey=s((Ere,wy)=>{"use strict";var I4r=S(),_4r=Ta().factory,L4r=a2(),by=E(),P4r=L();function R4r(r,e){if(by(r)||by(e)||r<0||e<=0)return I4r(NaN);if(r===0)return _4r(0);return t;function t(i){return i<=0?0:i===P4r?1:L4r(i*e,r)}}wy.exports=R4r});var u2=s((Nre,Ay)=>{"use strict";var F4r=w(),Ny=oy(),M4r=Ey();F4r(Ny,"factory",M4r);Ay.exports=Ny});var Sy=s((Are,Oy)=>{"use strict";var B4r=u2();function k4r(r,e){return B4r(r,e/2,.5)}Oy.exports=k4r});var Iy=s((Ore,Ty)=>{"use strict";var j4r=u2().factory;function C4r(r){return j4r(r/2,.5)}Ty.exports=C4r});var Py=s((Sre,Ly)=>{"use strict";var G4r=w(),_y=Sy(),V4r=Iy();G4r(_y,"factory",V4r);Ly.exports=_y});var By=s((Tre,My)=>{"use strict";var U4r=I(),H4r=O(),W4r=Jn(),Ry=q(),Fy=["values","indices","*"];function D4r(r,e){return U4r(e)?H4r(e,"returns")&&(r.returns=e.returns,W4r(Fy,r.returns)===-1)?new TypeError(Ry('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Fy.join('", "'),r.returns)):null:new TypeError(Ry("invalid argument. Options argument must be an object. Value: `%s`.",e))}My.exports=D4r});var jy=s((Ire,ky)=>{"use strict";var z4r=O();function X4r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),z4r(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}ky.exports=X4r});var Gy=s((_re,Cy)=>{"use strict";var J4r=O();function x4r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),J4r(t,n)?t[n].push(a):t[n]=[a];return t}Cy.exports=x4r});var Uy=s((Lre,Vy)=>{"use strict";var Y4r=O();function Z4r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),Y4r(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}Vy.exports=Z4r});var zy=s((Pre,Dy)=>{"use strict";var Hy=Gr(),Wy=q(),$4r=By(),Q4r=jy(),K4r=Gy(),r6r=Uy();function e6r(r,e,t){var i,n,a;if(!Hy(r))throw new TypeError(Wy("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=$4r(i,e),n)throw n;a=t}if(!Hy(a))throw new TypeError(Wy("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?Q4r(r,a):i.returns==="indices"?K4r(r,a):r6r(r,a)}Dy.exports=e6r});var Jy=s((Rre,Xy)=>{"use strict";var t6r=zy();Xy.exports=t6r});var Yy=s((Fre,xy)=>{"use strict";function i6r(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}xy.exports=i6r});var Qy=s((Mre,$y)=>{"use strict";var n6r=mr(),a6r=j().isPrimitive,s6r=I(),u6r=sr(),Zy=O(),o2=q();function o6r(r,e){return s6r(e)?Zy(e,"alpha")&&(r.alpha=e.alpha,!a6r(r.alpha)||u6r(r.alpha))?new TypeError(o2("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):Zy(e,"groups")&&(r.groups=e.groups,!n6r(r.groups))?new TypeError(o2("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(o2("invalid argument. Options argument must be an object. Value: `%s`.",e))}$y.exports=o6r});var f2=s((Bre,Ky)=>{"use strict";var f6r=Cr().isPrimitive;function v6r(r){return f6r(r)&&r>0}Ky.exports=v6r});var v2=s((kre,rq)=>{"use strict";var c6r=Cr().isObject;function l6r(r){return c6r(r)&&r.valueOf()>0}rq.exports=l6r});var tq=s((jre,eq)=>{"use strict";var p6r=f2(),g6r=v2();function m6r(r){return p6r(r)||g6r(r)}eq.exports=m6r});var ae=s((Cre,nq)=>{"use strict";var iq=w(),c2=tq(),d6r=f2(),h6r=v2();iq(c2,"isPrimitive",d6r);iq(c2,"isObject",h6r);nq.exports=c2});var sn=s((Gre,aq)=>{"use strict";var y6r=9007199254740991;aq.exports=y6r});var l2=s((Vre,sq)=>{"use strict";var q6r=308;sq.exports=q6r});var oq=s((Ure,uq)=>{"use strict";var b6r=-308;uq.exports=b6r});var p2=s((Hre,fq)=>{"use strict";var w6r=-324;fq.exports=w6r});var dq=s((Wre,mq)=>{"use strict";var vq=E(),Ia=Rr(),cq=W(),E6r=Y(),lq=No(),N6r=sn(),pq=l2(),A6r=oq(),O6r=p2(),S6r=N6r+1,gq=1e308;function T6r(r,e){var t,i;return vq(r)||vq(e)||Ia(e)?NaN:Ia(r)||r===0||e<O6r||E6r(r)>S6r&&e<=0?r:e>pq?0*r:e<A6r?(t=cq(10,-(e+pq)),i=r*gq*t,Ia(i)?r:lq(i)/gq/t):(t=cq(10,-e),i=r*t,Ia(i)?r:lq(i)/t)}mq.exports=T6r});var yq=s((Dre,hq)=>{"use strict";var I6r=dq();hq.exports=I6r});var wq=s((zre,bq)=>{"use strict";var _6r=ae(),L6r=I(),P6r=vr().isPrimitive,qq=O(),g2=q(),m2=yq();function R6r(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!L6r(r))throw new TypeError(g2("invalid argument. First argument must be an object. Value: `%s`.",r));if(qq(r,"digits")){if(!_6r(r.digits))throw new TypeError(g2("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(qq(r,"decision")){if(!P6r(r.decision))throw new TypeError(g2("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+m2(this.pValue,-t)+`
`,i+="    statistic: "+m2(this.statistic,-t)+`
`,i+="    df: "+m2(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}bq.exports=R6r});var Aq=s((Xre,Nq)=>{"use strict";var F6r=Gr(),M6r=I(),Lt=X6(),B6r=Jt(),_a=q(),k6r=Py(),j6r=Jy(),Eq=P(),C6r=Yy(),G6r=Qy(),V6r=wq();function U6r(){var r,e,t,i,n,a,u,o,v,f,c,l,p,m,h,d,g,y,N,A;if(v=[],e=arguments.length,f={},M6r(arguments[e-1])&&(r=arguments[e-1],e-=1,m=G6r(f,r),m))throw m;if(f.groups){if(n=j6r(arguments[0],f.groups),i=B6r(n),e=i.length,e<2)throw new Error(_a("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(A=0;A<e;A++)v.push(n[i[A]])}else for(A=0;A<e;A++)v.push(arguments[A]);for(u=0,t=0,o=0,h=0,y=new Array(e),N=y.slice(),A=0;A<e;A++){if(p=v[A],!F6r(p))throw new TypeError(_a("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(_a("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));y[A]=p.length-1,u+=y[A],t+=1/y[A],N[A]=C6r(p),o+=y[A]*N[A],h+=y[A]*Eq(N[A])}if(o/=u,f.alpha===void 0?a=.05:a=f.alpha,a<0||a>1)throw new RangeError(_a("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*Eq(o)-h,l/=1+(t-1/u)/(3*(e-1)),g=e-1,c=1-k6r(l,g),d={},Lt(d,"rejected",c<=a),Lt(d,"alpha",a),Lt(d,"pValue",c),Lt(d,"statistic",l),Lt(d,"df",g),Lt(d,"method","Bartlett's test of equal variances"),Lt(d,"print",V6r),d}Nq.exports=U6r});var Sq=s((Jre,Oq)=>{"use strict";var H6r=Aq();Oq.exports=H6r});var Iq=s((xre,Tq)=>{"use strict";function W6r(r){var e,t,i,n,a,u,o,v,f,c,l;if(v=r.length,t=[],v===0)return t;if(n=r[0],f=n.length,v===1){for(c=0;c<f;c++)t.push(n[c]);return t}for(e=[f],c=1;c<v;c++)e.push(r[c].length),e[c]>f&&(f=e[c]);for(c=0;c<f;c++)t.push(0);for(c=f-1;c>=0;){for(a=e[0]-f+c,a>=0?i=n[a]:i=1,l=1;l<v;l++){if(u=e[l]-f+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}Tq.exports=W6r});var Lq=s((Yre,_q)=>{"use strict";var D6r=Iq();_q.exports=D6r});var La=s((Zre,Pq)=>{"use strict";function z6r(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}Pq.exports=z6r});var Fq=s(($re,Rq)=>{"use strict";var X6r=j().isPrimitive,J6r=K().isPrimitive,x6r=vr().isPrimitive,Y6r=mr(),Z6r=Lq(),$6r=q(),Q6r=La(),K6r={number:X6r,string:J6r,boolean:x6r};function r8r(r,e,t){var i,n,a,u,o,v,f,c,l,p;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],n=[],p=0;p<r.length;p++)if(l=r[p],o=e[p],c=K6r[o],c(l))n.push([l]),a.push([1,1]);else if(Y6r(l))n.push(Q6r(l)),a.push([l.length,l[0].length]);else throw new TypeError($6r("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[p],o,o,String(l)));if(u=Z6r(a),u===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");for(i=[],p=0;p<a.length;p++)f=a[p],v=[],f[0]===1?v.push(0):v.push(f[1]),f[1]===1?v.push(0):v.push(1),i.push(v);return[n,u,i]}Rq.exports=r8r});var Bq=s((Qre,Mq)=>{"use strict";var d2=E(),e8r=ze();function t8r(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,f=1,d2(a)===!1)for(f;f<r;f++){if(u+=t,v=e[u],d2(v)){a=v;break}(v>a||v===a&&e8r(v))&&(a=v),i[o]=a,o+=n}if(d2(a))for(f;f<r;f++)i[o]=a,o+=n;return i}Mq.exports=t8r});var jq=s((Kre,kq)=>{"use strict";var h2=E(),i8r=ze();function n8r(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return n;if(v=i,f=u,o=e[v],n[f]=o,f+=a,l=1,h2(o)===!1)for(l;l<r;l++){if(v+=t,c=e[v],h2(c)){o=c;break}(c>o||c===o&&i8r(c))&&(o=c),n[f]=o,f+=a}if(h2(o))for(l;l<r;l++)n[f]=o,f+=a;return n}kq.exports=n8r});var Vq=s((ree,Gq)=>{"use strict";var a8r=w(),Cq=Bq(),s8r=jq();a8r(Cq,"ndarray",s8r);Gq.exports=Cq});var Hq=s((eee,Uq)=>{"use strict";var u8r=Vq();Uq.exports=u8r});var Dq=s((tee,Wq)=>{"use strict";var o8r=na();function f8r(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(o8r(r,i));return t}Wq.exports=f8r});var un=s((iee,zq)=>{"use strict";var v8r=Dq();zq.exports=v8r});var Jq=s((nee,Xq)=>{"use strict";var c8r=na(),l8r=un();function p8r(r,e,t){return e===1?c8r(t,r):l8r(t,[r,e])}Xq.exports=p8r});var Yq=s((aee,xq)=>{"use strict";function g8r(r,e,t){var i,n;for(i=[],n=0;n<r;n++)i.push(e.call(t,n));return i}xq.exports=g8r});var $q=s((see,Zq)=>{"use strict";var m8r=Yq();Zq.exports=m8r});var Kq=s((uee,Qq)=>{"use strict";function d8r(r,e,t){var i,n,a,u,o,v;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],v=0;v<a;v++)n.push(e.call(t,[o,v]));i.push(n)}return i}Qq.exports=d8r});var eb=s((oee,rb)=>{"use strict";var h8r=Kq();rb.exports=h8r});var ib=s((fee,tb)=>{"use strict";var y8r=$q(),q8r=eb();function b8r(r,e,t){return e===1?y8r(r,t):q8r([r,e],t)}tb.exports=b8r});var ab=s((vee,nb)=>{"use strict";var w8r=un();function E8r(r){return w8r(1,r)}nb.exports=E8r});var ub=s((cee,sb)=>{"use strict";var N8r=ab();sb.exports=N8r});var fb=s((lee,ob)=>{"use strict";var A8r=un();function O8r(r){return A8r(0,r)}ob.exports=O8r});var cb=s((pee,vb)=>{"use strict";var S8r=fb();vb.exports=S8r});var y2=s((gee,lb)=>{"use strict";var T8r=j().isPrimitive;function I8r(r){return T8r(r)&&r>0}lb.exports=I8r});var q2=s((mee,pb)=>{"use strict";var _8r=j().isObject;function L8r(r){return _8r(r)&&r.valueOf()>0}pb.exports=L8r});var mb=s((dee,gb)=>{"use strict";var P8r=y2(),R8r=q2();function F8r(r){return P8r(r)||R8r(r)}gb.exports=F8r});var D=s((hee,hb)=>{"use strict";var db=w(),b2=mb(),M8r=y2(),B8r=q2();db(b2,"isPrimitive",M8r);db(b2,"isObject",B8r);hb.exports=b2});var qb=s((yee,yb)=>{"use strict";var k8r=_();function j8r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&k8r(r.next)}yb.exports=j8r});var wb=s((qee,bb)=>{"use strict";var C8r=qb();bb.exports=C8r});var Ab=s((bee,Nb)=>{"use strict";var Eb="function";function G8r(r){return typeof r.get===Eb&&typeof r.set===Eb}Nb.exports=G8r});var w2=s((wee,Ob)=>{"use strict";var V8r=Ab();Ob.exports=V8r});var Ib=s((Eee,Tb)=>{"use strict";var Sb={complex128:U8r,complex64:H8r,default:W8r};function U8r(r,e,t){r.set(t,e)}function H8r(r,e,t){r.set(t,e)}function W8r(r,e,t){r.set(t,e)}function D8r(r){var e=Sb[r];return typeof e=="function"?e:Sb.default}Tb.exports=D8r});var E2=s((Nee,_b)=>{"use strict";var z8r=Ib();_b.exports=z8r});var Rb=s((Aee,Pb)=>{"use strict";var Lb={float64:X8r,float32:J8r,int32:x8r,int16:Y8r,int8:Z8r,uint32:$8r,uint16:Q8r,uint8:K8r,uint8c:r5r,generic:e5r,default:t5r};function X8r(r,e,t){r[e]=t}function J8r(r,e,t){r[e]=t}function x8r(r,e,t){r[e]=t}function Y8r(r,e,t){r[e]=t}function Z8r(r,e,t){r[e]=t}function $8r(r,e,t){r[e]=t}function Q8r(r,e,t){r[e]=t}function K8r(r,e,t){r[e]=t}function r5r(r,e,t){r[e]=t}function e5r(r,e,t){r[e]=t}function t5r(r,e,t){r[e]=t}function i5r(r){var e=Lb[r];return typeof e=="function"?e:Lb.default}Pb.exports=i5r});var N2=s((Oee,Fb)=>{"use strict";var n5r=Rb();Fb.exports=n5r});var Bb=s((See,Mb)=>{"use strict";var a5r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};Mb.exports=a5r});var jb=s((Tee,kb)=>{"use strict";var s5r=ir(),u5r=typeof Float32Array=="function";function o5r(r){return u5r&&r instanceof Float32Array||s5r(r)==="[object Float32Array]"}kb.exports=o5r});var Gb=s((Iee,Cb)=>{"use strict";var f5r=jb();Cb.exports=f5r});var Ub=s((_ee,Vb)=>{"use strict";var v5r=typeof Float32Array=="function"?Float32Array:null;Vb.exports=v5r});var Db=s((Lee,Wb)=>{"use strict";var c5r=Gb(),l5r=L(),Hb=Ub();function p5r(){var r,e;if(typeof Hb!="function")return!1;try{e=new Hb([1,3.14,-3.14,5e40]),r=c5r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===l5r}catch{r=!1}return r}Wb.exports=p5r});var Xb=s((Pee,zb)=>{"use strict";var g5r=Db();zb.exports=g5r});var xb=s((Ree,Jb)=>{"use strict";var m5r=typeof Float32Array=="function"?Float32Array:void 0;Jb.exports=m5r});var Zb=s((Fee,Yb)=>{"use strict";function d5r(){throw new Error("not implemented")}Yb.exports=d5r});var se=s((Mee,$b)=>{"use strict";var h5r=Xb(),y5r=xb(),q5r=Zb(),A2;h5r()?A2=y5r:A2=q5r;$b.exports=A2});var Kb=s((Bee,Qb)=>{"use strict";var b5r=ir(),w5r=typeof Int32Array=="function";function E5r(r){return w5r&&r instanceof Int32Array||b5r(r)==="[object Int32Array]"}Qb.exports=E5r});var Pa=s((kee,rw)=>{"use strict";var N5r=Kb();rw.exports=N5r});var ii=s((jee,ew)=>{"use strict";var A5r=2147483647;ew.exports=A5r});var iw=s((Cee,tw)=>{"use strict";var O5r=-2147483648;tw.exports=O5r});var aw=s((Gee,nw)=>{"use strict";var S5r=typeof Int32Array=="function"?Int32Array:null;nw.exports=S5r});var ow=s((Vee,uw)=>{"use strict";var T5r=Pa(),I5r=ii(),_5r=iw(),sw=aw();function L5r(){var r,e;if(typeof sw!="function")return!1;try{e=new sw([1,3.14,-3.14,I5r+1]),r=T5r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===_5r}catch{r=!1}return r}uw.exports=L5r});var vw=s((Uee,fw)=>{"use strict";var P5r=ow();fw.exports=P5r});var lw=s((Hee,cw)=>{"use strict";var R5r=typeof Int32Array=="function"?Int32Array:void 0;cw.exports=R5r});var gw=s((Wee,pw)=>{"use strict";function F5r(){throw new Error("not implemented")}pw.exports=F5r});var Pt=s((Dee,mw)=>{"use strict";var M5r=vw(),B5r=lw(),k5r=gw(),O2;M5r()?O2=B5r:O2=k5r;mw.exports=O2});var hw=s((zee,dw)=>{"use strict";var j5r=ir(),C5r=typeof Int16Array=="function";function G5r(r){return C5r&&r instanceof Int16Array||j5r(r)==="[object Int16Array]"}dw.exports=G5r});var qw=s((Xee,yw)=>{"use strict";var V5r=hw();yw.exports=V5r});var ww=s((Jee,bw)=>{"use strict";var U5r=32767;bw.exports=U5r});var Nw=s((xee,Ew)=>{"use strict";var H5r=-32768;Ew.exports=H5r});var Ow=s((Yee,Aw)=>{"use strict";var W5r=typeof Int16Array=="function"?Int16Array:null;Aw.exports=W5r});var Iw=s((Zee,Tw)=>{"use strict";var D5r=qw(),z5r=ww(),X5r=Nw(),Sw=Ow();function J5r(){var r,e;if(typeof Sw!="function")return!1;try{e=new Sw([1,3.14,-3.14,z5r+1]),r=D5r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===X5r}catch{r=!1}return r}Tw.exports=J5r});var Lw=s(($ee,_w)=>{"use strict";var x5r=Iw();_w.exports=x5r});var Rw=s((Qee,Pw)=>{"use strict";var Y5r=typeof Int16Array=="function"?Int16Array:void 0;Pw.exports=Y5r});var Mw=s((Kee,Fw)=>{"use strict";function Z5r(){throw new Error("not implemented")}Fw.exports=Z5r});var on=s((rte,Bw)=>{"use strict";var $5r=Lw(),Q5r=Rw(),K5r=Mw(),S2;$5r()?S2=Q5r:S2=K5r;Bw.exports=S2});var jw=s((ete,kw)=>{"use strict";var rpr=ir(),epr=typeof Uint8ClampedArray=="function";function tpr(r){return epr&&r instanceof Uint8ClampedArray||rpr(r)==="[object Uint8ClampedArray]"}kw.exports=tpr});var Gw=s((tte,Cw)=>{"use strict";var ipr=jw();Cw.exports=ipr});var Uw=s((ite,Vw)=>{"use strict";var npr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;Vw.exports=npr});var Dw=s((nte,Ww)=>{"use strict";var apr=Gw(),Hw=Uw();function spr(){var r,e;if(typeof Hw!="function")return!1;try{e=new Hw([-1,0,1,3.14,4.99,255,256]),r=apr(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}Ww.exports=spr});var Xw=s((ate,zw)=>{"use strict";var upr=Dw();zw.exports=upr});var xw=s((ste,Jw)=>{"use strict";var opr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;Jw.exports=opr});var Zw=s((ute,Yw)=>{"use strict";function fpr(){throw new Error("not implemented")}Yw.exports=fpr});var fn=s((ote,$w)=>{"use strict";var vpr=Xw(),cpr=xw(),lpr=Zw(),T2;vpr()?T2=cpr:T2=lpr;$w.exports=T2});var Kw=s((fte,Qw)=>{"use strict";var ppr=ir(),gpr=typeof Int8Array=="function";function mpr(r){return gpr&&r instanceof Int8Array||ppr(r)==="[object Int8Array]"}Qw.exports=mpr});var eE=s((vte,rE)=>{"use strict";var dpr=Kw();rE.exports=dpr});var iE=s((cte,tE)=>{"use strict";var hpr=127;tE.exports=hpr});var aE=s((lte,nE)=>{"use strict";var ypr=-128;nE.exports=ypr});var uE=s((pte,sE)=>{"use strict";var qpr=typeof Int8Array=="function"?Int8Array:null;sE.exports=qpr});var vE=s((gte,fE)=>{"use strict";var bpr=eE(),wpr=iE(),Epr=aE(),oE=uE();function Npr(){var r,e;if(typeof oE!="function")return!1;try{e=new oE([1,3.14,-3.14,wpr+1]),r=bpr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Epr}catch{r=!1}return r}fE.exports=Npr});var lE=s((mte,cE)=>{"use strict";var Apr=vE();cE.exports=Apr});var gE=s((dte,pE)=>{"use strict";var Opr=typeof Int8Array=="function"?Int8Array:void 0;pE.exports=Opr});var dE=s((hte,mE)=>{"use strict";function Spr(){throw new Error("not implemented")}mE.exports=Spr});var vn=s((yte,hE)=>{"use strict";var Tpr=lE(),Ipr=gE(),_pr=dE(),I2;Tpr()?I2=Ipr:I2=_pr;hE.exports=I2});var _2=s((qte,yE)=>{"use strict";var Lpr=Cr().isPrimitive;function Ppr(r){return Lpr(r)&&r>=0}yE.exports=Ppr});var L2=s((bte,qE)=>{"use strict";var Rpr=Cr().isObject;function Fpr(r){return Rpr(r)&&r.valueOf()>=0}qE.exports=Fpr});var wE=s((wte,bE)=>{"use strict";var Mpr=_2(),Bpr=L2();function kpr(r){return Mpr(r)||Bpr(r)}bE.exports=kpr});var Je=s((Ete,NE)=>{"use strict";var EE=w(),P2=wE(),jpr=_2(),Cpr=L2();EE(P2,"isPrimitive",jpr);EE(P2,"isObject",Cpr);NE.exports=P2});var OE=s((Nte,AE)=>{"use strict";var Gpr=4294967295;AE.exports=Gpr});var TE=s((Ate,SE)=>{"use strict";var Vpr=Ir(),Upr=OE();function Hpr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Vpr(r.length)&&r.length>=0&&r.length<=Upr}SE.exports=Hpr});var Rt=s((Ote,IE)=>{"use strict";var Wpr=TE();IE.exports=Wpr});var LE=s((Ste,_E)=>{"use strict";var Dpr=ir(),zpr=typeof ArrayBuffer=="function";function Xpr(r){return zpr&&r instanceof ArrayBuffer||Dpr(r)==="[object ArrayBuffer]"}_E.exports=Xpr});var R2=s((Tte,PE)=>{"use strict";var Jpr=LE();PE.exports=Jpr});var FE=s((Ite,RE)=>{"use strict";function xpr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}RE.exports=xpr});var BE=s((_te,ME)=>{"use strict";function Ypr(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}ME.exports=Ypr});var VE=s((Lte,GE)=>{"use strict";var kE=j().isPrimitive,jE=Ce(),cn=w(),CE=q(),Zpr=FE(),$pr=BE();function Ft(r,e){if(!(this instanceof Ft))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!kE(r))throw new TypeError(CE("invalid argument. Real component must be a number. Value: `%s`.",r));if(!kE(e))throw new TypeError(CE("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return jE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),jE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}cn(Ft,"BYTES_PER_ELEMENT",8);cn(Ft.prototype,"BYTES_PER_ELEMENT",8);cn(Ft.prototype,"byteLength",16);cn(Ft.prototype,"toString",Zpr);cn(Ft.prototype,"toJSON",$pr);GE.exports=Ft});var ni=s((Pte,UE)=>{"use strict";var Qpr=VE();UE.exports=Qpr});var WE=s((Rte,HE)=>{"use strict";var Kpr=typeof Math.fround=="function"?Math.fround:null;HE.exports=Kpr});var XE=s((Fte,zE)=>{"use strict";var r7r=se(),DE=new r7r(1);function e7r(r){return DE[0]=r,DE[0]}zE.exports=e7r});var YE=s((Mte,xE)=>{"use strict";var JE=WE(),t7r=XE(),F2;typeof JE=="function"?F2=JE:F2=t7r;xE.exports=F2});var $E=s((Bte,ZE)=>{"use strict";function i7r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}ZE.exports=i7r});var KE=s((kte,QE)=>{"use strict";function n7r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}QE.exports=n7r});var aN=s((jte,nN)=>{"use strict";var rN=j().isPrimitive,eN=Ce(),ln=w(),tN=YE(),iN=q(),a7r=$E(),s7r=KE();function Mt(r,e){if(!(this instanceof Mt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!rN(r))throw new TypeError(iN("invalid argument. Real component must be a number. Value: `%s`.",r));if(!rN(e))throw new TypeError(iN("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return eN(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:tN(r)}),eN(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:tN(e)}),this}ln(Mt,"BYTES_PER_ELEMENT",4);ln(Mt.prototype,"BYTES_PER_ELEMENT",4);ln(Mt.prototype,"byteLength",8);ln(Mt.prototype,"toString",a7r);ln(Mt.prototype,"toJSON",s7r);nN.exports=Mt});var ai=s((Cte,sN)=>{"use strict";var u7r=aN();sN.exports=u7r});var oN=s((Gte,uN)=>{"use strict";var o7r=ni(),f7r=ai();function v7r(r){return r instanceof o7r||r instanceof f7r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}uN.exports=v7r});var Hr=s((Vte,fN)=>{"use strict";var c7r=oN();fN.exports=c7r});var cN=s((Ute,vN)=>{"use strict";var l7r=O(),Ra=pu();function p7r(){return typeof Ra=="function"&&typeof Ra("foo")=="symbol"&&l7r(Ra,"iterator")&&typeof Ra.iterator=="symbol"}vN.exports=p7r});var Fa=s((Hte,lN)=>{"use strict";var g7r=cN();lN.exports=g7r});var gN=s((Wte,pN)=>{"use strict";var m7r=Fa(),d7r=m7r()?Symbol.iterator:null;pN.exports=d7r});var Ma=s((Dte,mN)=>{"use strict";var h7r=gN();mN.exports=h7r});var hN=s((zte,dN)=>{"use strict";var y7r=Ce();function q7r(r,e,t){y7r(r,e,{configurable:!1,enumerable:!1,get:t})}dN.exports=q7r});var R=s((Xte,yN)=>{"use strict";var b7r=hN();yN.exports=b7r});var bN=s((Jte,qN)=>{"use strict";function w7r(r){return r.re}qN.exports=w7r});var xe=s((xte,wN)=>{"use strict";var E7r=bN();wN.exports=E7r});var NN=s((Yte,EN)=>{"use strict";function N7r(r){return r.im}EN.exports=N7r});var Ye=s((Zte,AN)=>{"use strict";var A7r=NN();AN.exports=A7r});var SN=s(($te,ON)=>{"use strict";var O7r=se();function S7r(r,e){return new O7r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}ON.exports=S7r});var si=s((Qte,TN)=>{"use strict";var T7r=SN();TN.exports=T7r});var _N=s((Kte,IN)=>{"use strict";var I7r=dr();function _7r(r,e){return new I7r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}IN.exports=_7r});var ui=s((rie,LN)=>{"use strict";var L7r=_N();LN.exports=L7r});var FN=s((eie,RN)=>{"use strict";var PN={float64:P7r,float32:R7r,int32:F7r,int16:M7r,int8:B7r,uint32:k7r,uint16:j7r,uint8:C7r,uint8c:G7r,generic:V7r,default:U7r};function P7r(r,e){return r[e]}function R7r(r,e){return r[e]}function F7r(r,e){return r[e]}function M7r(r,e){return r[e]}function B7r(r,e){return r[e]}function k7r(r,e){return r[e]}function j7r(r,e){return r[e]}function C7r(r,e){return r[e]}function G7r(r,e){return r[e]}function V7r(r,e){return r[e]}function U7r(r,e){return r[e]}function H7r(r){var e=PN[r];return typeof e=="function"?e:PN.default}RN.exports=H7r});var Ba=s((tie,MN)=>{"use strict";var W7r=FN();MN.exports=W7r});var jN=s((iie,kN)=>{"use strict";var BN={complex128:D7r,complex64:z7r,default:X7r};function D7r(r,e){return r.get(e)}function z7r(r,e){return r.get(e)}function X7r(r,e){return r.get(e)}function J7r(r){var e=BN[r];return typeof e=="function"?e:BN.default}kN.exports=J7r});var ka=s((nie,CN)=>{"use strict";var x7r=jN();CN.exports=x7r});var VN=s((aie,GN)=>{"use strict";var Y7r=Rt(),Z7r=Hr(),$7r=xe(),Q7r=Ye(),K7r=q();function r9r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,Y7r(i)&&i.length>=2)e.push(i[0],i[1]);else if(Z7r(i))e.push($7r(i),Q7r(i));else return new TypeError(K7r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}GN.exports=r9r});var HN=s((sie,UN)=>{"use strict";var e9r=Rt(),t9r=Hr(),i9r=xe(),n9r=Ye(),a9r=q();function s9r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),e9r(a)&&a.length>=2)i.push(a[0],a[1]);else if(t9r(a))i.push(i9r(a),n9r(a));else return new TypeError(a9r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}UN.exports=s9r});var DN=s((uie,WN)=>{"use strict";var u9r=Hr(),o9r=xe(),f9r=Ye();function v9r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!u9r(i))return null;r[a]=o9r(i),r[a+1]=f9r(i),a+=2}return r}WN.exports=v9r});var KN=s((oie,QN)=>{"use strict";var pn=Je().isPrimitive,zN=Rt(),B2=Gr(),XN=R2(),JN=Zn(),c9r=mr(),Bt=_(),oi=Hr(),ja=ga(),M2=Ir(),l9r=Fa(),fi=Ma(),hr=w(),Va=R(),Fr=se(),xN=ai(),Z=q(),Ca=xe(),Ga=Ye(),p9r=si(),g9r=ui(),m9r=Ba(),d9r=ka(),YN=VN(),h9r=HN(),y9r=DN(),Lr=Fr.BYTES_PER_ELEMENT*2,ZN=l9r();function vi(r){return r instanceof rr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function $N(r){return r===rr||r.name==="Complex128Array"}function q9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Lr}function b9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Lr*2}function rr(){var r,e,t,i;if(e=arguments.length,!(this instanceof rr))return e===0?new rr:e===1?new rr(arguments[0]):e===2?new rr(arguments[0],arguments[1]):new rr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Fr(0);else if(e===1)if(pn(arguments[0]))t=new Fr(arguments[0]*2);else if(B2(arguments[0]))if(t=arguments[0],i=t.length,i&&c9r(t)&&oi(t[0])){if(t=y9r(new Fr(i*2),t),t===null){if(!ja(i))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(arguments[0])}}else{if(q9r(t))t=p9r(t,0);else if(b9r(t))t=g9r(t,0);else if(!ja(i))throw new RangeError(Z("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(t)}else if(XN(arguments[0])){if(t=arguments[0],!M2(t.byteLength/Lr))throw new RangeError(Z("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Lr,t.byteLength));t=new Fr(t)}else if(JN(arguments[0])){if(t=arguments[0],ZN===!1)throw new TypeError(Z("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Bt(t[fi]))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[fi](),!Bt(t.next))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=YN(t),t instanceof Error)throw t;t=new Fr(t)}else throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!XN(t))throw new TypeError(Z("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!pn(r))throw new TypeError(Z("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!M2(r/Lr))throw new RangeError(Z("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Lr,r));if(e===2){if(i=t.byteLength-r,!M2(i/Lr))throw new RangeError(Z("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Lr,i));t=new Fr(t,r)}else{if(i=arguments[2],!pn(i))throw new TypeError(Z("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Lr>t.byteLength-r)throw new RangeError(Z("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Lr));t=new Fr(t,r,i*2)}}return hr(this,"_buffer",t),hr(this,"_length",t.length/2),this}hr(rr,"BYTES_PER_ELEMENT",Lr);hr(rr,"name","Complex64Array");hr(rr,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,m;if(!Bt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!$N(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Bt(n))throw new TypeError(Z("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(vi(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),oi(l))u[m]=Ca(l),u[m+1]=Ga(l);else if(zN(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(B2(e)){if(n){for(f=e.length,e.get&&e.set?v=d9r("default"):v=m9r("default"),p=0;p<f;p++)if(!oi(v(e,p))){c=!0;break}if(c){if(!ja(f))throw new RangeError(Z("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),oi(l))u[m]=Ca(l),u[m+1]=Ga(l);else if(zN(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(JN(e)&&ZN&&Bt(e[fi])){if(u=e[fi](),!Bt(u.next))throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=h9r(u,n,t):o=YN(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});hr(rr,"of",function(){var e,t;if(!Bt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!$N(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Va(rr.prototype,"buffer",function(){return this._buffer.buffer});Va(rr.prototype,"byteLength",function(){return this._buffer.byteLength});Va(rr.prototype,"byteOffset",function(){return this._buffer.byteOffset});hr(rr.prototype,"BYTES_PER_ELEMENT",rr.BYTES_PER_ELEMENT);hr(rr.prototype,"copyWithin",function(e,t){if(!vi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});hr(rr.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!vi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},hr(i,"next",v),hr(i,"return",f),fi&&hr(i,fi,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new xN(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});hr(rr.prototype,"get",function(e){var t;if(!vi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!pn(e))throw new TypeError(Z("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new xN(t[e],t[e+1])});Va(rr.prototype,"length",function(){return this._length});hr(rr.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!vi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!pn(i))throw new TypeError(Z("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(oi(e)){if(i>=this._length)throw new RangeError(Z("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ca(e),n[i+1]=Ga(e);return}if(vi(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(B2(e)){for(o=e.length,f=0;f<o;f++)if(!oi(e[f])){u=!0;break}if(u){if(!ja(o))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=Ca(v),n[i+1]=Ga(v),i+=2;return}throw new TypeError(Z("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});QN.exports=rr});var gn=s((fie,rA)=>{"use strict";var w9r=KN();rA.exports=w9r});var tA=s((vie,eA)=>{"use strict";function E9r(r){return r.re}eA.exports=E9r});var Ze=s((cie,iA)=>{"use strict";var N9r=tA();iA.exports=N9r});var aA=s((lie,nA)=>{"use strict";function A9r(r){return r.im}nA.exports=A9r});var $e=s((pie,sA)=>{"use strict";var O9r=aA();sA.exports=O9r});var oA=s((gie,uA)=>{"use strict";var S9r=Rt(),T9r=Hr(),I9r=q(),_9r=Ze(),L9r=$e();function P9r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,S9r(i)&&i.length>=2)e.push(i[0],i[1]);else if(T9r(i))e.push(_9r(i),L9r(i));else return new TypeError(I9r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}uA.exports=P9r});var vA=s((mie,fA)=>{"use strict";var R9r=Rt(),F9r=Hr(),M9r=q(),B9r=Ze(),k9r=$e();function j9r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),R9r(a)&&a.length>=2)i.push(a[0],a[1]);else if(F9r(a))i.push(B9r(a),k9r(a));else return new TypeError(M9r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}fA.exports=j9r});var lA=s((die,cA)=>{"use strict";var C9r=Hr(),G9r=Ze(),V9r=$e();function U9r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!C9r(i))return null;r[a]=G9r(i),r[a+1]=V9r(i),a+=2}return r}cA.exports=U9r});var wA=s((hie,bA)=>{"use strict";var mn=Je().isPrimitive,pA=Rt(),j2=Gr(),gA=R2(),mA=Zn(),H9r=mr(),kt=_(),ci=Hr(),Ua=ga(),k2=Ir(),W9r=Fa(),li=Ma(),yr=w(),Da=R(),Mr=dr(),dA=ni(),Ha=Ze(),Wa=$e(),D9r=si(),z9r=ui(),X9r=Ba(),J9r=ka(),$=q(),hA=oA(),x9r=vA(),Y9r=lA(),Pr=Mr.BYTES_PER_ELEMENT*2,yA=W9r();function pi(r){return r instanceof er||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function qA(r){return r===er||r.name==="Complex64Array"}function Z9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Pr/2}function $9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Pr}function er(){var r,e,t,i;if(e=arguments.length,!(this instanceof er))return e===0?new er:e===1?new er(arguments[0]):e===2?new er(arguments[0],arguments[1]):new er(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Mr(0);else if(e===1)if(mn(arguments[0]))t=new Mr(arguments[0]*2);else if(j2(arguments[0]))if(t=arguments[0],i=t.length,i&&H9r(t)&&ci(t[0])){if(t=Y9r(new Mr(i*2),t),t===null){if(!Ua(i))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Mr(arguments[0])}}else{if(Z9r(t))t=D9r(t,0);else if($9r(t))t=z9r(t,0);else if(!Ua(i))throw new RangeError($("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Mr(t)}else if(gA(arguments[0])){if(t=arguments[0],!k2(t.byteLength/Pr))throw new RangeError($("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Pr,t.byteLength));t=new Mr(t)}else if(mA(arguments[0])){if(t=arguments[0],yA===!1)throw new TypeError($("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!kt(t[li]))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[li](),!kt(t.next))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=hA(t),t instanceof Error)throw t;t=new Mr(t)}else throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!gA(t))throw new TypeError($("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!mn(r))throw new TypeError($("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!k2(r/Pr))throw new RangeError($("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Pr,r));if(e===2){if(i=t.byteLength-r,!k2(i/Pr))throw new RangeError($("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Pr,i));t=new Mr(t,r)}else{if(i=arguments[2],!mn(i))throw new TypeError($("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Pr>t.byteLength-r)throw new RangeError($("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Pr));t=new Mr(t,r,i*2)}}return yr(this,"_buffer",t),yr(this,"_length",t.length/2),this}yr(er,"BYTES_PER_ELEMENT",Pr);yr(er,"name","Complex128Array");yr(er,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,m;if(!kt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!kt(n))throw new TypeError($("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(pi(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),ci(l))u[m]=Ha(l),u[m+1]=Wa(l);else if(pA(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(j2(e)){if(n){for(f=e.length,e.get&&e.set?v=J9r("default"):v=X9r("default"),p=0;p<f;p++)if(!ci(v(e,p))){c=!0;break}if(c){if(!Ua(f))throw new RangeError($("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),ci(l))u[m]=Ha(l),u[m+1]=Wa(l);else if(pA(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(mA(e)&&yA&&kt(e[li])){if(u=e[li](),!kt(u.next))throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=x9r(u,n,t):o=hA(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});yr(er,"of",function(){var e,t;if(!kt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Da(er.prototype,"buffer",function(){return this._buffer.buffer});Da(er.prototype,"byteLength",function(){return this._buffer.byteLength});Da(er.prototype,"byteOffset",function(){return this._buffer.byteOffset});yr(er.prototype,"BYTES_PER_ELEMENT",er.BYTES_PER_ELEMENT);yr(er.prototype,"copyWithin",function(e,t){if(!pi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});yr(er.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!pi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},yr(i,"next",v),yr(i,"return",f),li&&yr(i,li,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new dA(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});yr(er.prototype,"get",function(e){var t;if(!pi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!mn(e))throw new TypeError($("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new dA(t[e],t[e+1])});Da(er.prototype,"length",function(){return this._length});yr(er.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!pi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!mn(i))throw new TypeError($("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(ci(e)){if(i>=this._length)throw new RangeError($("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ha(e),n[i+1]=Wa(e);return}if(pi(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Mr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(j2(e)){for(o=e.length,f=0;f<o;f++)if(!ci(e[f])){u=!0;break}if(u){if(!Ua(o))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Mr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=Ha(v),n[i+1]=Wa(v),i+=2;return}throw new TypeError($("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});bA.exports=er});var dn=s((yie,EA)=>{"use strict";var Q9r=wA();EA.exports=Q9r});var AA=s((qie,NA)=>{"use strict";var K9r=dr(),rgr=se(),egr=lr(),tgr=Pt(),igr=Zt(),ngr=on(),agr=Yt(),sgr=fn(),ugr=vn(),ogr=gn(),fgr=dn(),vgr=[K9r,rgr,tgr,egr,ngr,igr,ugr,agr,sgr,ogr,fgr];NA.exports=vgr});var SA=s((bie,OA)=>{"use strict";var cgr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];OA.exports=cgr});var _A=s((wie,IA)=>{"use strict";var lgr=Et(),pgr=mr(),ggr=Ge(),mgr=Bb(),dgr=AA(),TA=SA(),hgr=TA.length;function ygr(r){var e;if(pgr(r))return"generic";if(lgr(r))return null;for(e=0;e<hgr;e++)if(r instanceof dgr[e])return TA[e];return mgr[ggr(r)]||null}IA.exports=ygr});var za=s((Eie,LA)=>{"use strict";var qgr=_A();LA.exports=qgr});var FA=s((Nie,RA)=>{"use strict";var PA=_(),bgr=Gr(),wgr=wb(),Egr=w2(),Ngr=E2(),Agr=N2(),Ogr=za(),C2=q();function Sgr(){var r,e,t,i,n,a,u,o,v;if(r=arguments[0],arguments.length>1)if(bgr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!PA(t))throw new TypeError(C2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!PA(t))throw new TypeError(C2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!wgr(r))throw new TypeError(C2("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,v=r.next(),!v.done;)i.push(t.call(e,v.value,o));return i}for(;v=r.next(),!v.done;)i.push(v.value);return i}if(n=i.length,u=Ogr(i),Egr(i)?a=Ngr(u):a=Agr(u),t){for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,t.call(e,v.value,o));return i}for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,v.value);return i}RA.exports=Sgr});var BA=s((Aie,MA)=>{"use strict";var Tgr=FA();MA.exports=Tgr});var jA=s((Oie,kA)=>{"use strict";function Igr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}kA.exports=Igr});var GA=s((Sie,CA)=>{"use strict";function _gr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}CA.exports=_gr});var HA=s((Tie,UA)=>{"use strict";var Lgr=tr(),VA=ie(),Pgr=jA(),Rgr=GA(),Fgr=.7853981633974483,Mgr=3061616997868383e-32,Bgr=.3333333333333341,kgr=2147483647;function jgr(r,e,t){var i,n,a,u,o,v,f,c,l;return i=Lgr(r),n=i&kgr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=Fgr-r,c=Mgr-e,r=l+c,e=0),l=r*r,c=l*l,u=Pgr(c),f=l*Rgr(c),o=l*r,u=e+l*(o*(u+f)+e),u+=Bgr*o,c=r+u,n>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(c*c/(c+f)-u)))):t===1?c:(l=VA(c,0),f=u-(l-r),a=-1/c,v=VA(a,0),o=1+v*l,v+a*(o+v*f))}UA.exports=jgr});var DA=s((Iie,WA)=>{"use strict";var Cgr=HA();WA.exports=Cgr});var JA=s((_ie,XA)=>{"use strict";var Ggr=tr(),zA=DA(),Vgr=Zi(),G2=[0,0],Ugr=2147483647,Hgr=1072243195,Wgr=2146435072,Dgr=1044381696;function zgr(r){var e,t;return e=Ggr(r),e&=Ugr,e<=Hgr?e<Dgr?r:zA(r,0,1):e>=Wgr?NaN:(t=Vgr(r,G2),zA(G2[0],G2[1],1-((t&1)<<1)))}XA.exports=zgr});var V2=s((Lie,xA)=>{"use strict";var Xgr=JA();xA.exports=Xgr});var Xa=s((Pie,YA)=>{"use strict";var Jgr=1.5707963267948966;YA.exports=Jgr});var Ja=s((Rie,ZA)=>{"use strict";var xgr=.7853981633974483;ZA.exports=xgr});var QA=s((Fie,$A)=>{"use strict";function Ygr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}$A.exports=Ygr});var rO=s((Mie,KA)=>{"use strict";function Zgr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}KA.exports=Zgr});var iO=s((Bie,tO)=>{"use strict";var $gr=E(),Qgr=L(),U2=Xa(),Kgr=Ja(),rmr=U(),emr=QA(),tmr=rO(),eO=6123233995736766e-32,imr=2.414213562373095;function nmr(r){var e,t,i,n;return $gr(r)||r===0?r:r===Qgr?U2:r===rmr?-U2:(r<0&&(t=!0,r=-r),e=0,r>imr?(i=U2,e=1,r=-(1/r)):r<=.66?i=0:(i=Kgr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*emr(n)/tmr(n),n=r*n+r,e===2?n+=.5*eO:e===1&&(n+=eO),i+=n,t?-i:i)}tO.exports=nmr});var xa=s((kie,nO)=>{"use strict";var amr=iO();nO.exports=amr});var H2=s((jie,aO)=>{"use strict";var smr=j().isPrimitive;function umr(r){return smr(r)&&r>=0}aO.exports=umr});var W2=s((Cie,sO)=>{"use strict";var omr=j().isObject;function fmr(r){return omr(r)&&r.valueOf()>=0}sO.exports=fmr});var oO=s((Gie,uO)=>{"use strict";var vmr=H2(),cmr=W2();function lmr(r){return vmr(r)||cmr(r)}uO.exports=lmr});var z2=s((Vie,vO)=>{"use strict";var fO=w(),D2=oO(),pmr=H2(),gmr=W2();fO(D2,"isPrimitive",pmr);fO(D2,"isObject",gmr);vO.exports=D2});var lO=s((Uie,cO)=>{"use strict";var mmr=I(),Ya=O(),dmr=Cr().isPrimitive,hmr=ae().isPrimitive,ymr=Je().isPrimitive,qmr=z2().isPrimitive,hn=q();function bmr(r,e){return mmr(e)?Ya(e,"period")&&(r.period=e.period,!hmr(e.period))?new TypeError(hn("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):Ya(e,"amplitude")&&(r.amplitude=e.amplitude,!qmr(e.amplitude))?new TypeError(hn("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):Ya(e,"offset")&&(r.offset=e.offset,!dmr(e.offset))?new TypeError(hn("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):Ya(e,"iter")&&(r.iter=e.iter,!ymr(e.iter))?new TypeError(hn("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(hn("invalid argument. Options argument must be an object. Value: `%s`.",e))}cO.exports=bmr});var dO=s((Hie,mO)=>{"use strict";var X2=w(),pO=Ma(),wmr=V2(),Emr=xa(),Nmr=Xa(),Amr=_r(),Omr=lO();function gO(r){var e,t,i,n,a,u,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=Omr(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=Amr/e.period,o=e.amplitude/Nmr,v=0,t={},X2(t,"next",f),X2(t,"return",c),pO&&X2(t,pO,l),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*Emr(wmr(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return gO(e)}}mO.exports=gO});var yO=s((Wie,hO)=>{"use strict";var Smr=dO();hO.exports=Smr});var bO=s((Die,qO)=>{"use strict";var Tmr={Complex64:"complex64",Complex128:"complex128"};qO.exports=Tmr});var EO=s((zie,wO)=>{"use strict";var Imr=ai(),_mr=ni(),Lmr=[Imr,_mr];wO.exports=Lmr});var AO=s((Xie,NO)=>{"use strict";var Pmr=["complex64","complex128"];NO.exports=Pmr});var TO=s((Jie,SO)=>{"use strict";var Rmr=Ge(),Fmr=bO(),Mmr=EO(),OO=AO(),Bmr=OO.length;function kmr(r){var e;for(e=0;e<Bmr;e++)if(r instanceof Mmr[e])return OO[e];return Fmr[Rmr(r)]||null}SO.exports=kmr});var J2=s((xie,IO)=>{"use strict";var jmr=TO();IO.exports=jmr});var LO=s((Yie,_O)=>{"use strict";var Cmr=dr(),Gmr=se(),Vmr=dn(),Umr=gn(),Hmr={float64:Cmr,float32:Gmr,complex128:Vmr,complex64:Umr};_O.exports=Hmr});var RO=s((Zie,PO)=>{"use strict";var Wmr=LO();function Dmr(r){return Wmr[r]||null}PO.exports=Dmr});var MO=s(($ie,FO)=>{"use strict";var zmr=RO();FO.exports=zmr});var kO=s((Qie,BO)=>{"use strict";function Xmr(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}BO.exports=Xmr});var HO=s((Kie,UO)=>{"use strict";var Jmr=ai(),xmr=ni(),jO=Ze(),CO=$e(),GO=xe(),VO=Ye();function Ymr(r,e,t,i,n,a){var u,o,v,f,c,l,p,m,h,d,g,y,N;if(n===0)return[];if(o=0,r==="float64"?(f=e,l=0):r==="complex64"?(o+=1,f=GO(e),l=VO(e)):(f=jO(e),l=CO(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=GO(i),p=VO(i)):(c=jO(i),p=CO(i)),o===2?u=Jmr:u=xmr,n===1)return a?[new u(c,p)]:[new u(f,l)];for(v=[new u(f,l)],a?y=n-1:y=n,d=(c-f)/y,g=(p-l)/y,N=1;N<y;N++)m=f+d*N,h=l+g*N,v.push(new u(m,h));return a&&v.push(new u(c,p)),v}UO.exports=Ymr});var x2=s((rne,WO)=>{"use strict";function Zmr(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}WO.exports=Zmr});var Y2=s((ene,xO)=>{"use strict";var DO=Ze(),zO=$e(),XO=xe(),JO=Ye();function $mr(r,e,t,i,n,a,u){var o,v,f,c,l,p,m,h,d;if(a===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=XO(t),f=JO(t)):(o=DO(t),f=zO(t)),i==="float64"?(v=n,c=0):i==="complex64"?(v=XO(n),c=JO(n)):(v=DO(n),c=zO(n)),a===1)return u?(r[0]=v,r[1]=c):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,u?m=a-1:m=a,l=(v-o)/m,p=(c-f)/m,d=2,h=1;h<m;h++)r[d]=o+l*h,r[d+1]=f+p*h,d+=2;return u&&(r[d]=v,r[d+1]=c),r}xO.exports=$mr});var $2=s((tne,ZO)=>{"use strict";var Qmr=I(),YO=O(),Kmr=K().isPrimitive,rdr=vr().isPrimitive,Z2=q();function edr(r,e){return Qmr(e)?YO(e,"dtype")&&(r.dtype=e.dtype,!Kmr(r.dtype))?new TypeError(Z2("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):YO(e,"endpoint")&&(r.endpoint=e.endpoint,!rdr(r.endpoint))?new TypeError(Z2("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(Z2("invalid argument. Options argument must be an object. Value: `%s`.",e))}ZO.exports=edr});var Q2=s((ine,tdr)=>{tdr.exports={endpoint:!0}});var iS=s((nne,tS)=>{"use strict";var $O=Hr(),QO=j().isPrimitive,idr=Je().isPrimitive,KO=E(),rS=J2(),ndr=MO(),adr=si(),sdr=ui(),gi=q(),udr=kO(),odr=HO(),fdr=x2(),eS=Y2(),vdr=$2(),cdr=Q2();function ldr(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(o=rS(r),o===null){if(!$O(r))throw new TypeError(gi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}f=!0}else{if(!QO(r)||KO(r))throw new TypeError(gi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(v=rS(e),v===null){if(!$O(e))throw new TypeError(gi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="complex128"}f=!0}else{if(!QO(e)||KO(e))throw new TypeError(gi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="float64"}if(!idr(t))throw new TypeError(gi("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:cdr.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=vdr(i,arguments[3]),a))throw a;if(i.dtype==="generic")return f?odr(o,r,v,e,t,i.endpoint):udr(r,e,t,i.endpoint);if(n=ndr(i.dtype),n===null)throw new TypeError(gi('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return eS(adr(u,0),o,r,v,e,t,i.endpoint),u;if(i.dtype==="complex128")return eS(sdr(u,0),o,r,v,e,t,i.endpoint),u;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return fdr(u,r,e,t,i.endpoint)}tS.exports=ldr});var aS=s((ane,nS)=>{"use strict";var pdr=w2(),gdr=Ba(),mdr=N2(),ddr=ka(),hdr=E2(),ydr=za();function qdr(r){var e=ydr(r);return pdr(r)?{accessorProtocol:!0,accessors:[ddr(e),hdr(e)]}:{accessorProtocol:!1,accessors:[gdr(e),mdr(e)]}}nS.exports=qdr});var uS=s((sne,sS)=>{"use strict";var bdr=aS();sS.exports=bdr});var fS=s((une,oS)=>{"use strict";var wdr=uS();function Edr(r){var e=wdr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}oS.exports=Edr});var Za=s((one,vS)=>{"use strict";var Ndr=fS();vS.exports=Ndr});var dS=s((fne,mS)=>{"use strict";var Adr=ai(),Odr=ni(),cS=Ze(),lS=$e(),pS=xe(),gS=Ye();function Sdr(r,e,t,i,n,a,u){var o,v,f,c,l,p,m,h,d,g,y,N,A,V;if(a===0)return r;if(v=0,e==="float64"?(f=t,l=0):e==="complex64"?(v+=1,f=pS(t),l=gS(t)):(f=cS(t),l=lS(t)),i==="float64"?(c=n,p=0):i==="complex64"?(v+=1,c=pS(n),p=gS(n)):(c=cS(n),p=lS(n)),v===2?o=Adr:o=Odr,h=r.data,m=r.accessors[1],a===1)return u?m(h,0,new o(c,p)):m(h,0,new o(f,l)),r;for(m(h,0,new o(f,l)),u?A=a-1:A=a,y=(c-f)/A,N=(p-l)/A,V=1;V<A;V++)d=f+y*V,g=l+N*V,m(h,V,new o(d,g));return u&&m(h,A,new o(c,p)),r}mS.exports=Sdr});var yS=s((vne,hS)=>{"use strict";function Tdr(r,e,t,i,n){var a,u,o,v,f;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)u(a,f,e+v*f);return n&&u(a,o,t),r}hS.exports=Tdr});var SS=s((cne,OS)=>{"use strict";var qS=Hr(),bS=j().isPrimitive,Idr=Gr(),yn=q(),wS=E(),ES=J2(),_dr=za(),Ldr=si(),Pdr=ui(),NS=Za(),Rdr=dS(),Fdr=yS(),AS=Y2(),Mdr=x2(),Bdr=$2(),kdr=Q2();function jdr(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(a=ES(r),a===null){if(!qS(r))throw new TypeError(yn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!bS(r)||wS(r))throw new TypeError(yn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=ES(e),u===null){if(!qS(e))throw new TypeError(yn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!bS(e)||wS(e))throw new TypeError(yn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!Idr(t))throw new TypeError(yn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:kdr.endpoint},arguments.length>3&&(n=Bdr(i,arguments[3]),n))throw n;if(v=_dr(t),v===null&&(v="generic"),v==="complex64")return AS(Ldr(t,0),a,r,u,e,t.length,i.endpoint),t;if(v==="complex128")return AS(Pdr(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=NS(t),Rdr(f,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=NS(t),f.accessorProtocol?(Fdr(f,r,e,t.length,i.endpoint),t):(Mdr(t,r,e,t.length,i.endpoint),t)}OS.exports=jdr});var _S=s((lne,IS)=>{"use strict";var Cdr=w(),TS=iS(),Gdr=SS();Cdr(TS,"assign",Gdr);IS.exports=TS});var PS=s((pne,LS)=>{"use strict";var Vdr=E(),Udr=ze();function Hdr(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],Vdr(a))return a;(a>i||a===i&&Udr(a))&&(i=a)}return i}LS.exports=Hdr});var FS=s((gne,RS)=>{"use strict";var Wdr=E(),Ddr=ze();function zdr(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],Wdr(u))return u;(u>n||u===n&&Ddr(u))&&(n=u)}return n}RS.exports=zdr});var kS=s((mne,BS)=>{"use strict";var Xdr=w(),MS=PS(),Jdr=FS();Xdr(MS,"ndarray",Jdr);BS.exports=MS});var CS=s((dne,jS)=>{"use strict";var xdr=kS();jS.exports=xdr});var US=s((hne,VS)=>{"use strict";var GS=E(),Ydr=ze();function Zdr(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,f=0;f<r&&i[o]!==0;f++)u+=t,o+=n;if(f===r)return NaN;if(a=e[u],GS(a))return a;for(f+=1,f;f<r;f++)if(u+=t,o+=n,!i[o]){if(v=e[u],GS(v))return v;(v>a||v===a&&Ydr(v))&&(a=v)}return a}VS.exports=Zdr});var DS=s((yne,WS)=>{"use strict";var HS=E(),$dr=ze();function Qdr(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return NaN;for(v=i,f=u,l=0;l<r&&n[f]!==0;l++)v+=t,f+=a;if(l===r)return NaN;if(o=e[v],HS(o))return o;for(l+=1,l;l<r;l++)if(v+=t,f+=a,!n[f]){if(c=e[v],HS(c))return c;(c>o||c===o&&$dr(c))&&(o=c)}return o}WS.exports=Qdr});var JS=s((qne,XS)=>{"use strict";var Kdr=w(),zS=US(),rhr=DS();Kdr(zS,"ndarray",rhr);XS.exports=zS});var ZS=s((bne,YS)=>{"use strict";var xS=q();function ehr(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(xS('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(xS('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}YS.exports=ehr});var QS=s((wne,$S)=>{"use strict";var thr=ZS();$S.exports=thr});var rT=s((Ene,KS)=>{"use strict";var ihr=j().isPrimitive,nhr=QS(),ahr=q();function shr(r,e,t,i,n,a){var u,o;if(!(ihr(r)&&nhr(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(ahr("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}KS.exports=shr});var tT=s((Nne,eT)=>{"use strict";var uhr=vr().isPrimitive,ohr=q();function fhr(r,e){if(!uhr(r))throw new TypeError(ohr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}eT.exports=fhr});var nT=s((Ane,iT)=>{"use strict";function vhr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}iT.exports=vhr});var sT=s((One,aT)=>{"use strict";var chr=q(),lhr=nT();function phr(r,e,t){if(!lhr(r,e))throw new TypeError(chr("invalid argument. %s must be broadcast compatible.",t))}aT.exports=phr});var oT=s((Sne,uT)=>{"use strict";function ghr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}uT.exports=ghr});var vT=s((Tne,fT)=>{"use strict";var mhr=q(),dhr=oT();function hhr(r,e,t,i){if(!dhr(r,e))throw new TypeError(mhr("invalid argument. %s must be broadcast compatible with %s.",t,i))}fT.exports=hhr});var K2=s((Ine,cT)=>{"use strict";var yhr=q();function qhr(r,e){if(r===void 0)throw new Error(yhr("invalid invocation. Must provide %s.",e))}cT.exports=qhr});var pT=s((_ne,lT)=>{"use strict";var bhr=q();function whr(r,e,t,i){if(!(r>e))throw new TypeError(bhr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}lT.exports=whr});var mT=s((Lne,gT)=>{"use strict";var Ehr=q();function Nhr(r,e,t,i){if(!(r>=e))throw new TypeError(Ehr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}gT.exports=Nhr});var hT=s((Pne,dT)=>{"use strict";var Ahr=Cr().isPrimitive,Ohr=q();function Shr(r,e){if(!Ahr(r))throw new TypeError(Ohr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}dT.exports=Shr});var qT=s((Rne,yT)=>{"use strict";var Thr=q();function Ihr(r,e,t,i){if(!(r<e))throw new TypeError(Thr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}yT.exports=Ihr});var wT=s((Fne,bT)=>{"use strict";var _hr=q();function Lhr(r,e,t,i){if(!(r<=e))throw new TypeError(_hr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}bT.exports=Lhr});var NT=s((Mne,ET)=>{"use strict";var Phr=Je().isPrimitive,Rhr=q();function Fhr(r,e){if(!Phr(r))throw new TypeError(Rhr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}ET.exports=Fhr});var OT=s((Bne,AT)=>{"use strict";var Mhr=z2().isPrimitive,Bhr=q();function khr(r,e){if(!Mhr(r))throw new TypeError(Bhr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}AT.exports=khr});var TT=s((kne,ST)=>{"use strict";var jhr=j().isPrimitive,Chr=q();function Ghr(r,e){if(!jhr(r))throw new TypeError(Chr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}ST.exports=Ghr});var _T=s((jne,IT)=>{"use strict";var Vhr=q();function Uhr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(Vhr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}IT.exports=Uhr});var r1=s((Cne,LT)=>{"use strict";var Hhr=ae().isPrimitive,Whr=q();function Dhr(r,e){if(!Hhr(r))throw new TypeError(Whr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}LT.exports=Dhr});var RT=s((Gne,PT)=>{"use strict";var zhr=D().isPrimitive,Xhr=q();function Jhr(r,e){if(!zhr(r))throw new TypeError(Xhr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}PT.exports=Jhr});var e1=s((Vne,FT)=>{"use strict";var xhr=j().isPrimitive;function Yhr(r){return xhr(r)&&r>=0&&r<=1}FT.exports=Yhr});var t1=s((Une,MT)=>{"use strict";var Zhr=j().isObject;function $hr(r){return Zhr(r)&&r.valueOf()>=0&&r.valueOf()<=1}MT.exports=$hr});var kT=s((Hne,BT)=>{"use strict";var Qhr=e1(),Khr=t1();function ryr(r){return Qhr(r)||Khr(r)}BT.exports=ryr});var qn=s((Wne,CT)=>{"use strict";var jT=w(),i1=kT(),eyr=e1(),tyr=t1();jT(i1,"isPrimitive",eyr);jT(i1,"isObject",tyr);CT.exports=i1});var VT=s((Dne,GT)=>{"use strict";var iyr=qn().isPrimitive,nyr=q();function ayr(r,e){if(!iyr(r))throw new TypeError(nyr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}GT.exports=ayr});var HT=s((zne,UT)=>{"use strict";var syr=mr(),uyr=q();function oyr(r,e){if(!syr(r))throw new TypeError(uyr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}UT.exports=oyr});var DT=s((Xne,WT)=>{"use strict";function fyr(r){return r.length===1||r[0].length===1}WT.exports=fyr});var XT=s((Jne,zT)=>{"use strict";var vyr=mr(),cyr=DT();function lyr(r){return vyr(r)&&cyr(r)}zT.exports=lyr});var xT=s((xne,JT)=>{"use strict";var pyr=q(),gyr=XT();function myr(r,e){if(!gyr(r))throw new TypeError(pyr("invalid argument. %s must consist of only a single row or a single column.",e))}JT.exports=myr});var ZT=s((Yne,YT)=>{"use strict";function dyr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}YT.exports=dyr});var QT=s((Zne,$T)=>{"use strict";var hyr=q(),yyr=ZT();function qyr(r,e,t){if(!yyr(r,e))throw new TypeError(hyr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}$T.exports=qyr});var rI=s(($ne,KT)=>{"use strict";var byr=K().isPrimitive,wyr=q();function Eyr(r,e){if(!byr(r))throw new TypeError(wyr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}KT.exports=Eyr});var tI=s((Qne,eI)=>{"use strict";var Nyr=q();function Ayr(r){throw new Error(Nyr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}eI.exports=Ayr});var aI=s((Kne,nI)=>{"use strict";var iI=r1(),Oyr=K2();function Syr(r,e,t){iI(r,"Number of rows"),iI(e,"Number of columns"),Oyr(t,"a pseudorandom number generator seed")}nI.exports=Syr});var uI=s((rae,sI)=>{"use strict";var Tyr=mr(),Iyr=Cr().isPrimitive,_yr=q(),Lyr=La();function Pyr(r){if(Iyr(r))return r;if(Tyr(r))return Lyr(r);throw new TypeError(_yr("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}sI.exports=Pyr});var fI=s((eae,oI)=>{"use strict";var x={};x.isBetween=rT();x.isBoolean=tT();x.isBroadcastCompatible=sT();x.isBroadcastCompatibleWith=vT();x.isDefined=K2();x.isGreaterThan=pT();x.isGreaterThanEqual=mT();x.isInteger=hT();x.isLessThan=qT();x.isLessThanEqual=wT();x.isNonNegativeInteger=NT();x.isNonNegativeNumber=OT();x.isNumber=TT();x.isOneOf=_T();x.isPositiveInteger=r1();x.isPositiveNumber=RT();x.isProbability=VT();x.isRange=HT();x.isRange1d=xT();x.isSameShape=QT();x.isString=rI();x.unrecognizedOptionName=tI();x.verifyCommonPRNGArgs=aI();x.verifyPRNGSeed=uI();oI.exports=x});var cI=s((tae,vI)=>{"use strict";var n1=4;function Ryr(r,e,t,i,n,a){var u,o,v,f;if(r<=0||e===0)return n;if(i===1&&a===1){if(v=r%n1,v>0)for(f=0;f<v;f++)n[f]+=e*t[f];if(r<n1)return n;for(f=v;f<r;f+=n1)n[f]+=e*t[f],n[f+1]+=e*t[f+1],n[f+2]+=e*t[f+2],n[f+3]+=e*t[f+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,f=0;f<r;f++)n[o]+=e*t[u],u+=i,o+=a;return n}vI.exports=Ryr});var pI=s((iae,lI)=>{"use strict";var bn=4;function Fyr(r,e,t,i,n,a,u,o){var v,f,c,l;if(r<=0||e===0)return a;if(v=n,f=o,i===1&&u===1){if(c=r%bn,c>0)for(l=0;l<c;l++)a[f]+=e*t[v],v+=i,f+=u;if(r<bn)return a;for(l=c;l<r;l+=bn)a[f]+=e*t[v],a[f+1]+=e*t[v+1],a[f+2]+=e*t[v+2],a[f+3]+=e*t[v+3],v+=bn,f+=bn;return a}for(l=0;l<r;l++)a[f]+=e*t[v],v+=i,f+=u;return a}lI.exports=Fyr});var a1=s((nae,mI)=>{"use strict";var Myr=w(),gI=cI(),Byr=pI();Myr(gI,"ndarray",Byr);mI.exports=gI});var hI=s((aae,dI)=>{"use strict";var s1={};s1.daxpy=a1().ndarray;s1.saxpy=a1().ndarray;dI.exports=s1});var qI=s((sae,yI)=>{"use strict";function kyr(r){return r*r}yI.exports=kyr});var $a=s((uae,bI)=>{"use strict";var jyr=qI();bI.exports=jyr});var EI=s((oae,wI)=>{"use strict";function Cyr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}wI.exports=Cyr});var AI=s((fae,NI)=>{"use strict";function Gyr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}NI.exports=Gyr});var TI=s((vae,SI)=>{"use strict";var Vyr=E(),Uyr=C(),OI=Ja(),Hyr=EI(),Wyr=AI(),Dyr=6123233995736766e-32;function zyr(r){var e,t,i,n,a;if(Vyr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*Wyr(t),t=Uyr(t+t),a=OI-t,t=t*n-Dyr,a-=t,a+=OI;else{if(i<1e-8)return r;t=i*i,a=t*Hyr(t),a=i*a+i}return e?-a:a}SI.exports=zyr});var jt=s((cae,II)=>{"use strict";var Xyr=TI();II.exports=Xyr});var RI=s((lae,PI)=>{"use strict";var Jyr=E(),_I=jt(),xyr=C(),LI=Ja(),Yyr=6123233995736766e-32;function Zyr(r){var e;return Jyr(r)?NaN:r<-1||r>1?NaN:r>.5?2*_I(xyr(.5-.5*r)):(e=LI-_I(r),e+=Yyr,e+=LI,e)}PI.exports=Zyr});var wn=s((pae,FI)=>{"use strict";var $yr=RI();FI.exports=$yr});var jI=s((gae,kI)=>{"use strict";var Qyr=E(),Kyr=De(),MI=C(),rqr=qa(),BI=P(),eqr=1<<28;function tqr(r){var e;return Qyr(r)||r<1?NaN:r===1?0:r>=eqr?BI(r)+rqr:r>2?BI(2*r-1/(r+MI(r*r-1))):(e=r-1,Kyr(e+MI(2*e+e*e)))}kI.exports=tqr});var GI=s((mae,CI)=>{"use strict";var iqr=jI();CI.exports=iqr});var UI=s((dae,VI)=>{"use strict";var nqr=xa();function aqr(r){return nqr(1/r)}VI.exports=aqr});var WI=s((hae,HI)=>{"use strict";var sqr=UI();HI.exports=sqr});var zI=s((yae,DI)=>{"use strict";var uqr=jt();function oqr(r){return uqr(1+r)}DI.exports=oqr});var JI=s((qae,XI)=>{"use strict";var fqr=zI();XI.exports=fqr});var YI=s((bae,xI)=>{"use strict";var vqr=jt();function cqr(r){return vqr(1-r)}xI.exports=cqr});var $I=s((wae,ZI)=>{"use strict";var lqr=YI();ZI.exports=lqr});var KI=s((Eae,QI)=>{"use strict";var pqr=jt();function gqr(r){return pqr(1/r)}QI.exports=gqr});var e_=s((Nae,r_)=>{"use strict";var mqr=KI();r_.exports=mqr});var a_=s((Aae,n_)=>{"use strict";var dqr=Rr(),hqr=E(),yqr=De(),t_=C(),qqr=qa(),i_=P(),bqr=1/(1<<28),wqr=1<<28;function Eqr(r){var e,t,i;return hqr(r)||dqr(r)?r:(r<0&&(r=-r,e=!0),r<bqr?i=r:r>wqr?i=i_(r)+qqr:r>2?i=i_(2*r+1/(t_(r*r+1)+r)):(t=r*r,i=yqr(r+t/(1+t_(1+t)))),e?-i:i)}n_.exports=Eqr});var u1=s((Oae,s_)=>{"use strict";var Nqr=a_();s_.exports=Nqr});var o_=s((Sae,u_)=>{"use strict";var Aqr=u1();function Oqr(r){return Aqr(1/r)}u_.exports=Oqr});var v_=s((Tae,f_)=>{"use strict";var Sqr=o_();f_.exports=Sqr});var l_=s((Iae,c_)=>{"use strict";var Tqr=wn(),Iqr=C();function _qr(r){return 2*Tqr(Iqr(r))}c_.exports=_qr});var g_=s((_ae,p_)=>{"use strict";var Lqr=l_();p_.exports=Lqr});var d_=s((Lae,m_)=>{"use strict";var Pqr=jt(),Rqr=C();function Fqr(r){return 2*Pqr(Rqr(r))}m_.exports=Fqr});var y_=s((Pae,h_)=>{"use strict";var Mqr=d_();h_.exports=Mqr});var w_=s((Rae,b_)=>{"use strict";var Bqr=E(),q_=De(),kqr=L(),jqr=U(),Cqr=1/(1<<28);function Gqr(r){var e,t;return Bqr(r)||r<-1||r>1?NaN:r===1?kqr:r===-1?jqr:(r<0&&(e=!0,r=-r),r<Cqr?e?-r:r:(r<.5?(t=r+r,t=.5*q_(t+t*r/(1-r))):t=.5*q_((r+r)/(1-r)),e?-t:t))}b_.exports=Gqr});var N_=s((Fae,E_)=>{"use strict";var Vqr=w_();E_.exports=Vqr});var O_=s((Mae,A_)=>{"use strict";var Uqr=wn();function Hqr(r){return Uqr(1+r)}A_.exports=Hqr});var T_=s((Bae,S_)=>{"use strict";var Wqr=O_();S_.exports=Wqr});var __=s((kae,I_)=>{"use strict";var Dqr=wn();function zqr(r){return Dqr(1-r)}I_.exports=zqr});var P_=s((jae,L_)=>{"use strict";var Xqr=__();L_.exports=Xqr});var M_=s((Cae,F_)=>{"use strict";var R_=-.16666666666666632,Jqr=.00833333333332249,xqr=-.0001984126982985795,Yqr=27557313707070068e-22,Zqr=-25050760253406863e-24,$qr=158969099521155e-24,Qqr=.0416666666666666,Kqr=-.001388888888887411,rbr=2480158728947673e-20,ebr=-27557314351390663e-23,tbr=2087572321298175e-24,ibr=-11359647557788195e-27;function nbr(r,e,t,i,n){var a,u,o,v,f;return f=r*r,v=f*f,u=Jqr+f*(xqr+f*Yqr)+f*v*(Zqr+f*$qr),o=f*r,e===0?t[n]=r+o*(R_+f*u):t[n]=r-(f*(.5*e-o*u)-e-o*R_),u=f*(Qqr+f*(Kqr+f*rbr)),u+=v*v*(ebr+f*(tbr+f*ibr)),a=.5*f,v=1-a,t[n+i]=v+(1-v-a+(f*u-r*e)),t}F_.exports=nbr});var f1=s((Gae,k_)=>{"use strict";var abr=Jr(),sbr=Ji(),ubr=tr(),obr=Zi(),B_=M_(),fbr=1072243195,vbr=1044381696,o1=[0,0];function cbr(r,e,t,i){var n,a;if(n=ubr(r),n&=abr,n<=fbr)return n<vbr&&(r|0)===0&&(e[i]=r,e[i+t]=0),B_(r,0,e,t,i);if(n>=sbr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=obr(r,o1),B_(o1[0],o1[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}k_.exports=cbr});var C_=s((Vae,j_)=>{"use strict";var lbr=f1();function pbr(r){return lbr(r,[0,0],1,0)}j_.exports=pbr});var En=s((Uae,V_)=>{"use strict";var gbr=w(),G_=C_(),mbr=f1();gbr(G_,"assign",mbr);V_.exports=G_});var H_=s((Hae,U_)=>{"use strict";function dbr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}U_.exports=dbr});var D_=s((Wae,W_)=>{"use strict";function hbr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}W_.exports=hbr});var X_=s((Dae,z_)=>{"use strict";function ybr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}z_.exports=ybr});var x_=s((zae,J_)=>{"use strict";function qbr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}J_.exports=qbr});var Z_=s((Xae,Y_)=>{"use strict";var bbr=C(),wbr=En().assign,Ebr=L(),Nbr=H_(),Abr=D_(),Obr=X_(),Sbr=x_(),Tbr=.5641895835477563,Ibr=2.404825557695773,_br=5.520078110286311,Lbr=616,Pbr=-.0014244423042272315,Rbr=1413,Fbr=.0005468602863106496,Nn=[0,0];function Mbr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===Ebr?0:r===0?1:r<=4?(a=r*r,n=Nbr(a),u=(r+Ibr)*(r-Lbr/256-Pbr),u*n):r<=8?(a=1-r*r/64,n=Abr(a),u=(r+_br)*(r-Rbr/256-Fbr),u*n):(a=8/r,i=a*a,e=Obr(i),t=Sbr(i),u=Tbr/bbr(r),wbr(r,Nn,1,0),u*(e*(Nn[1]+Nn[0])-a*t*(Nn[0]-Nn[1])))}Y_.exports=Mbr});var v1=s((Jae,$_)=>{"use strict";var Bbr=Z_();$_.exports=Bbr});var Qa=s((xae,Q_)=>{"use strict";var kbr=1.772453850905516;Q_.exports=kbr});var rL=s((Yae,K_)=>{"use strict";function jbr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}K_.exports=jbr});var tL=s((Zae,eL)=>{"use strict";function Cbr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}eL.exports=Cbr});var nL=s(($ae,iL)=>{"use strict";function Gbr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}iL.exports=Gbr});var sL=s((Qae,aL)=>{"use strict";function Vbr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}aL.exports=Vbr});var oL=s((Kae,uL)=>{"use strict";var Ubr=C(),Hbr=Y(),Wbr=En().assign,Dbr=L(),zbr=Qa(),Xbr=rL(),Jbr=tL(),xbr=nL(),Ybr=sL(),Zbr=3.8317059702075125,$br=7.015586669815619,Qbr=981,Kbr=-.0003252797924876844,rwr=1796,ewr=-38330184381246464e-21,An=[0,0];function twr(r){var e,t,i,n,a,u,o,v;return v=Hbr(r),r===0||v===Dbr?0:(v<=4?(u=r*r,a=Xbr(u),o=v*(v+Zbr)*(v-Qbr/256-Kbr),e=o*a):v<=8?(u=r*r,a=Jbr(u),o=v*(v+$br)*(v-rwr/256-ewr),e=o*a):(u=8/v,n=u*u,t=xbr(n),i=Ybr(n),o=1/(Ubr(v)*zbr),Wbr(v,An,1,0),e=o*(t*(An[0]-An[1])+u*i*(An[0]+An[1]))),r<0&&(e*=-1),e)}uL.exports=twr});var c1=s((r0e,fL)=>{"use strict";var iwr=oL();fL.exports=iwr});var cL=s((e0e,vL)=>{"use strict";function nwr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}vL.exports=nwr});var pL=s((t0e,lL)=>{"use strict";function awr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}lL.exports=awr});var mL=s((i0e,gL)=>{"use strict";function swr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}gL.exports=swr});var hL=s((n0e,dL)=>{"use strict";function uwr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}dL.exports=uwr});var qL=s((a0e,yL)=>{"use strict";function owr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}yL.exports=owr});var AL=s((s0e,NL)=>{"use strict";var l1=P(),fwr=C(),vwr=_r(),cwr=Qa(),lwr=U(),pwr=L(),gwr=En().assign,p1=v1(),mwr=cL(),dwr=pL(),hwr=mL(),ywr=hL(),qwr=qL(),bwr=1/cwr,g1=2/vwr,bL=.8935769662791675,wL=3.957678419314858,EL=7.086051060301773,wwr=228,Ewr=.0029519662791675214,Nwr=1013,Awr=.0006471693148578684,Owr=1814,Swr=.00011356030177269763,On=[0,0];function Twr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?lwr:r===pwr?0:r<=3?(a=r*r,u=l1(r/bL)*p1(r)*g1,n=mwr(a),o=(r+bL)*(r-wwr/256-Ewr),u+o*n):r<=5.5?(a=r*r,u=l1(r/wL)*p1(r)*g1,n=dwr(a),o=(r+wL)*(r-Nwr/256-Awr),u+o*n):r<=8?(a=r*r,u=l1(r/EL)*p1(r)*g1,n=hwr(a),o=(r+EL)*(r-Owr/256-Swr),u+o*n):(a=8/r,i=a*a,e=ywr(i),t=qwr(i),o=bwr/fwr(r),gwr(r,On,1,0),o*(e*(On[0]-On[1])+a*t*(On[1]+On[0])))}NL.exports=Twr});var SL=s((u0e,OL)=>{"use strict";var Iwr=AL();OL.exports=Iwr});var IL=s((o0e,TL)=>{"use strict";function _wr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}TL.exports=_wr});var LL=s((f0e,_L)=>{"use strict";function Lwr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}_L.exports=Lwr});var RL=s((v0e,PL)=>{"use strict";function Pwr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}PL.exports=Pwr});var ML=s((c0e,FL)=>{"use strict";function Rwr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}FL.exports=Rwr});var UL=s((l0e,VL)=>{"use strict";var BL=P(),Fwr=C(),Mwr=_r(),Bwr=Qa(),kwr=U(),jwr=L(),Cwr=En().assign,kL=c1(),Gwr=IL(),Vwr=LL(),Uwr=RL(),Hwr=ML(),Wwr=1/Bwr,jL=2/Mwr,CL=2.197141326031017,GL=5.429681040794135,Dwr=562,zwr=.001828826031017035,Xwr=1390,Jwr=-6459205864867228e-21,Sn=[0,0];function xwr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?kwr:r===jwr?0:r<=4?(a=r*r,u=BL(r/CL)*kL(r)*jL,n=Gwr(a),o=(r+CL)*(r-Dwr/256-zwr)/r,u+o*n):r<=8?(a=r*r,u=BL(r/GL)*kL(r)*jL,n=Vwr(a),o=(r+GL)*(r-Xwr/256-Jwr)/r,u+o*n):(a=8/r,i=a*a,e=Uwr(i),t=Hwr(i),o=Wwr/Fwr(r),Cwr(r,Sn,1,0),o*(a*t*(Sn[0]-Sn[1])-e*(Sn[0]+Sn[1])))}VL.exports=xwr});var WL=s((p0e,HL)=>{"use strict";var Ywr=UL();HL.exports=Ywr});var XL=s((g0e,zL)=>{"use strict";var Zwr=E(),$wr=Rr(),Qwr=Y(),DL=St(),Kwr=Tt(),rEr=Q(),m1=_r(),eEr=sn(),tEr=eEr+1;function iEr(r){var e,t,i,n;return Zwr(r)?NaN:$wr(r)?NaN:(e=Qwr(r),e>tEr?1:(t=rEr(e),i=e-t,i===.5?0:(i<.25?n=DL(m1*i):i<.75?(i=.5-i,n=Kwr(m1*i)):(i=1-i,n=-DL(m1*i)),t%2===1?-n:n)))}zL.exports=iEr});var xL=s((m0e,JL)=>{"use strict";var nEr=XL();JL.exports=nEr});var ZL=s((d0e,YL)=>{"use strict";var aEr=1.618033988749895;YL.exports=aEr});var QL=s((h0e,$L)=>{"use strict";var sEr=E(),uEr=xL(),oEr=W(),fEr=ZL(),vEr=L(),cEr=U(),lEr=2.23606797749979;function pEr(r){var e,t;return sEr(r)||r===vEr||r===cEr?NaN:(e=oEr(fEr,r),t=uEr(r)/e,(e-t)/lEr)}$L.exports=pEr});var rP=s((y0e,KL)=>{"use strict";var gEr=QL();KL.exports=gEr});var tP=s((q0e,eP)=>{"use strict";function mEr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}eP.exports=mEr});var sP=s((b0e,aP)=>{"use strict";var dEr=ho(),hEr=co(),iP=Jr(),h1=tr(),yEr=re(),qEr=Rr(),nP=$t(),bEr=Qt(),wEr=E(),EEr=tP(),NEr=4294967295>>>0,AEr=3221225472>>>0,OEr=0x40000000000000,d1=2147483648>>>0,SEr=1>>>0,TEr=715094163>>>0,IEr=696219795>>>0,_Er=h1(dEr),Ct=[0>>>0,0>>>0];function LEr(r){var e,t,i,n,a,u,o;return r===0||wEr(r)||qEr(r)?r:(t=h1(r)>>>0,e=(t&hEr)>>>0,t&=iP,t<_Er?(u=OEr*r,i=(h1(u)&iP)>>>0,i=(i/3>>>0)+IEr>>>0,u=nP(e|i,0)):(u=0,i=(t/3>>>0)+TEr>>>0,u=yEr(u,e|i)),n=u*u*(u/r),u*=EEr(n),bEr.assign(u,Ct,1,0),Ct[1]&d1?(Ct[0]+=SEr,Ct[1]&=~d1):Ct[1]|=d1,u=nP(Ct[0]&NEr,Ct[1]&AEr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}aP.exports=LEr});var oP=s((w0e,uP)=>{"use strict";var PEr=sP();uP.exports=PEr});var vP=s((E0e,fP)=>{"use strict";function REr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}fP.exports=REr});var lP=s((N0e,cP)=>{"use strict";function FEr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}cP.exports=FEr});var mP=s((A0e,gP)=>{"use strict";var MEr=tr(),BEr=vP(),kEr=lP(),pP=1048575,jEr=.3333333333333333;function CEr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=MEr(r),a=r-1,(pP&2+n)<3?a===0?0:a*a*(jEr*a-.5):(u=a/(2+a),o=u*u,n&=pP,c=n-398458|0,f=o*o,l=440401-n|0,t=f*BEr(f),i=o*kEr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}gP.exports=CEr});var qP=s((O0e,yP)=>{"use strict";var dP=tr(),GEr=re(),VEr=ie(),UEr=E(),HEr=Xr(),WEr=U(),DEr=mP(),zEr=0x40000000000000,hP=.4342944818781689,XEr=25082946711645275e-27,JEr=.30102999566361177,xEr=3694239077158931e-28,YEr=1048575,ZEr=2146435072,$Er=1048576,QEr=1072693248;function KEr(r){var e,t,i,n,a,u,o,v;return UEr(r)||r<0?NaN:r===0?WEr:(t=dP(r),u=0,t<$Er&&(u-=54,r*=zEr,t=dP(r)),t>=ZEr?r+r:(u+=(t>>20)-HEr|0,t&=YEr,a=t+614244&1048576|0,r=GEr(r,t|a^QEr),u+=a>>20|0,o=u,n=DEr(r),r-=1,e=VEr(r,0),i=r-e,v=o*xEr+(r+n)*XEr,v+=(i+n)*hP+e*hP,v+o*JEr))}yP.exports=KEr});var wP=s((S0e,bP)=>{"use strict";var rNr=qP();bP.exports=rNr});var NP=s((T0e,EP)=>{"use strict";var eNr=E(),tNr=Rr(),iNr=W(),nNr=Q(),aNr=Xi(),sNr=wP(),uNr=l2(),oNr=p2(),fNr=L();function vNr(r){var e,t;return eNr(r)||tNr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=sNr(r),e===-1?t=nNr(t):t=aNr(t),t<=oNr?e*0:t>uNr?fNr:e*iNr(10,t))}EP.exports=vNr});var OP=s((I0e,AP)=>{"use strict";var cNr=NP();AP.exports=cNr});var TP=s((_0e,SP)=>{"use strict";function lNr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}SP.exports=lNr});var _P=s((L0e,IP)=>{"use strict";function pNr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}IP.exports=pNr});var RP=s((P0e,PP)=>{"use strict";var gNr=tr(),mNr=TP(),dNr=_P(),LP=1048575,hNr=.3333333333333333;function yNr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=gNr(r),a=r-1,(LP&2+n)<3?a===0?0:a*a*(hNr*a-.5):(u=a/(2+a),o=u*u,n&=LP,c=n-398458|0,f=o*o,l=440401-n|0,t=f*mNr(f),i=o*dNr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}PP.exports=yNr});var BP=s((R0e,MP)=>{"use strict";var qNr=tr(),bNr=re(),wNr=ie(),ENr=Qt(),NNr=E(),ANr=Jr(),ONr=ea(),SNr=Xr(),TNr=U(),INr=RP(),_Nr=0x40000000000000,FP=1.4426950407214463,LNr=16751713164886512e-26,PNr=2146435072,RNr=1048576,FNr=1072693248,y1=[0,0];function MNr(r){var e,t,i,n,a,u,o;if(NNr(r)||r<0)return NaN;if(ENr.assign(r,y1,1,0),i=y1[0],n=y1[1],o=0,i<RNr){if((i&ANr|n)===0)return TNr;o-=54,r*=_Nr,i=qNr(r)}return i>=PNr?r+r:(o+=(i>>20)-SNr|0,i&=ONr,u=i+614244&1048576|0,r=bNr(r,i|u^FNr),o+=u>>20|0,a=INr(r),r-=1,e=wNr(r,0),t=r-e,(r+a)*LNr+(t+a)*FP+e*FP+o)}MP.exports=MNr});var jP=s((F0e,kP)=>{"use strict";var BNr=BP();kP.exports=BNr});var GP=s((M0e,CP)=>{"use strict";var kNr=E(),jNr=Rr(),CNr=W(),GNr=Q(),VNr=Xi(),UNr=jP(),HNr=fo(),WNr=vo(),DNr=L();function zNr(r){var e,t;return kNr(r)||jNr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=UNr(r),t===WNr)?r:(e===-1?t=GNr(t):t=VNr(t),t>HNr?DNr:e*CNr(2,t))}CP.exports=zNr});var UP=s((B0e,VP)=>{"use strict";var XNr=GP();VP.exports=XNr});var q1=s((k0e,HP)=>{"use strict";var JNr=.9189385332046728;HP.exports=JNr});var WP=s((j0e,xNr)=>{xNr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var DP=s((C0e,YNr)=>{YNr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var zP=s((G0e,ZNr)=>{ZNr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var JP=s((V0e,XP)=>{"use strict";function $Nr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}XP.exports=$Nr});var YP=s((U0e,xP)=>{"use strict";function QNr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}xP.exports=QNr});var $P=s((H0e,ZP)=>{"use strict";function KNr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}ZP.exports=KNr});var KP=s((W0e,QP)=>{"use strict";function rAr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}QP.exports=rAr});var eR=s((D0e,rR)=>{"use strict";function eAr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}rR.exports=eAr});var iR=s((z0e,tR)=>{"use strict";function tAr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}tR.exports=tAr});var oR=s((X0e,uR)=>{"use strict";var iAr=E(),nAr=Ir(),aAr=Y(),Ka=nr(),sAr=Q(),uAr=ri(),oAr=rn(),nR=Ki(),aR=W(),fAr=P(),vAr=L(),cAr=U(),sR=We(),lAr=ko(),pAr=q1(),gAr=WP(),mAr=DP(),dAr=zP(),hAr=JP(),yAr=YP(),qAr=$P(),bAr=KP(),wAr=eR(),EAr=iR(),NAr=129,AAr=170,OAr=709,SAr=1.2433929443359375,TAr=.6986598968505859;function b1(r){var e,t,i,n,a,u;if(iAr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(nAr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=NAr)return-dAr[u]/(i+1)}else return(n&1)===0?mAr[n/2]:gAr[(n-3)/2];return aAr(r)<lAr?-.5-pAr*r:(t=1-r,r<0?sAr(r/2)===r/2?0:(e=r,r=t,t=e,r>AAr?(e=nR(.5*t)*2*b1(r),a=oAr(r),a-=r*fAr(sR),a>OAr?e<0?cAr:vAr:e*Ka(a)):nR(.5*t)*2*aR(sR,-r)*uAr(r)*b1(r)):r<1?(e=hAr(t),e-=SAr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+yAr(t)):r<=4?(e=TAr+1/-t,e+qAr(r-2)):r<=7?(e=bAr(r-4),1+Ka(e)):r<15?(e=wAr(r-7),1+Ka(e)):r<36?(e=EAr(r-15),1+Ka(e)):1+aR(2,-r))}uR.exports=b1});var vR=s((J0e,fR)=>{"use strict";var IAr=oR();fR.exports=IAr});var lR=s((x0e,cR)=>{"use strict";var H={};H.abs=Y();H.abs2=$a();H.acos=wn();H.acosh=GI();H.acot=WI();H.acovercos=JI();H.acoversin=$I();H.acsc=e_();H.acsch=v_();H.ahavercos=g_();H.ahaversin=y_();H.asin=jt();H.asinh=u1();H.atan=xa();H.atanh=N_();H.avercos=T_();H.aversin=P_();H.besselj0=v1();H.besselj1=c1();H.bessely0=SL();H.bessely1=WL();H.binet=rP();H.cbrt=oP();H.ceil=Xi();H.ceil10=OP();H.ceil2=UP();H.cos=St();H.sin=Tt();H.sqrt=C();H.zeta=vR();cR.exports=H});var gR=s((Y0e,pR)=>{"use strict";function _Ar(r,e){return r+e}pR.exports=_Ar});var dR=s((Z0e,mR)=>{"use strict";var LAr=gR();mR.exports=LAr});var yR=s(($0e,hR)=>{"use strict";function PAr(r,e){return r*e}hR.exports=PAr});var bR=s((Q0e,qR)=>{"use strict";var RAr=yR();qR.exports=RAr});var ER=s((K0e,wR)=>{"use strict";function FAr(r,e){return r-e}wR.exports=FAr});var AR=s((rse,NR)=>{"use strict";var MAr=ER();NR.exports=MAr});var SR=s((ese,OR)=>{"use strict";var r0={};r0.add=dR();r0.mul=bR();r0.sub=AR();OR.exports=r0});var IR=s((tse,TR)=>{"use strict";var BAr=Nt(),kAr=ir();function jAr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(kAr(r)==="[object Error]")return!0;r=BAr(r)}return!1}TR.exports=jAr});var LR=s((ise,_R)=>{"use strict";var CAr=IR();_R.exports=CAr});var w1=s((nse,PR)=>{"use strict";function GAr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}PR.exports=GAr});var FR=s((ase,RR)=>{"use strict";var VAr=w1(),UAr=VAr();RR.exports=UAr});var kR=s((sse,BR)=>{"use strict";var HAr=w(),MR=w1(),WAr=FR();HAr(MR,"REGEXP",WAr);BR.exports=MR});var CR=s((use,jR)=>{"use strict";var DAr=K().isPrimitive,zAr=kR(),XAr=q();function JAr(r){if(!DAr(r))throw new TypeError(XAr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=zAr().exec(r),r?new RegExp(r[1],r[2]):null}jR.exports=JAr});var VR=s((ose,GR)=>{"use strict";var xAr=CR();GR.exports=xAr});var HR=s((fse,UR)=>{"use strict";var YAr=typeof Object.getOwnPropertyNames<"u";UR.exports=YAr});var zR=s((vse,DR)=>{"use strict";var WR=xt(),ZAr=WR.getOwnPropertyNames;function $Ar(r){return ZAr(WR(r))}DR.exports=$Ar});var JR=s((cse,XR)=>{"use strict";var QAr=xt(),KAr=Jt();function rOr(r){return KAr(QAr(r))}XR.exports=rOr});var YR=s((lse,xR)=>{"use strict";var eOr=HR(),tOr=zR(),iOr=JR(),E1;eOr?E1=tOr:E1=iOr;xR.exports=E1});var $R=s((pse,ZR)=>{"use strict";var nOr=typeof Object.getOwnPropertyDescriptor<"u";ZR.exports=nOr});var KR=s((gse,QR)=>{"use strict";var aOr=Object.getOwnPropertyDescriptor;function sOr(r,e){var t;return r==null?null:(t=aOr(r,e),t===void 0?null:t)}QR.exports=sOr});var eF=s((mse,rF)=>{"use strict";var uOr=O();function oOr(r,e){return uOr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}rF.exports=oOr});var iF=s((dse,tF)=>{"use strict";var fOr=$R(),vOr=KR(),cOr=eF(),N1;fOr?N1=vOr:N1=cOr;tF.exports=N1});var aF=s((hse,nF)=>{"use strict";var lOr=typeof Buffer=="function"?Buffer:null;nF.exports=lOr});var uF=s((yse,sF)=>{"use strict";var pOr=Et(),e0=aF();function gOr(){var r,e;if(typeof e0!="function")return!1;try{typeof e0.from=="function"?e=e0.from([1,2,3,4]):e=new e0([1,2,3,4]),r=pOr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}sF.exports=gOr});var fF=s((qse,oF)=>{"use strict";var mOr=uF();oF.exports=mOr});var lF=s(t0=>{"use strict";t0.byteLength=hOr;t0.toByteArray=qOr;t0.fromByteArray=EOr;var Yr=[],Br=[],dOr=typeof Uint8Array<"u"?Uint8Array:Array,A1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Gt=0,vF=A1.length;Gt<vF;++Gt)Yr[Gt]=A1[Gt],Br[A1.charCodeAt(Gt)]=Gt;var Gt,vF;Br["-".charCodeAt(0)]=62;Br["_".charCodeAt(0)]=63;function cF(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function hOr(r){var e=cF(r),t=e[0],i=e[1];return(t+i)*3/4-i}function yOr(r,e,t){return(e+t)*3/4-t}function qOr(r){var e,t=cF(r),i=t[0],n=t[1],a=new dOr(yOr(r,i,n)),u=0,o=n>0?i-4:i,v;for(v=0;v<o;v+=4)e=Br[r.charCodeAt(v)]<<18|Br[r.charCodeAt(v+1)]<<12|Br[r.charCodeAt(v+2)]<<6|Br[r.charCodeAt(v+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=Br[r.charCodeAt(v)]<<2|Br[r.charCodeAt(v+1)]>>4,a[u++]=e&255),n===1&&(e=Br[r.charCodeAt(v)]<<10|Br[r.charCodeAt(v+1)]<<4|Br[r.charCodeAt(v+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function bOr(r){return Yr[r>>18&63]+Yr[r>>12&63]+Yr[r>>6&63]+Yr[r&63]}function wOr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(bOr(i));return n.join("")}function EOr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(wOr(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(Yr[e>>2]+Yr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(Yr[e>>10]+Yr[e>>4&63]+Yr[e<<2&63]+"=")),n.join("")}});var pF=s(O1=>{O1.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,v=(1<<o)-1,f=v>>1,c=-7,l=t?n-1:0,p=t?-1:1,m=r[e+l];for(l+=p,a=m&(1<<-c)-1,m>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-f;else{if(a===v)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-f}return(m?-1:1)*u*Math.pow(2,a-i)};O1.write=function(r,e,t,i,n,a){var u,o,v,f=a*8-n-1,c=(1<<f)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-u))<1&&(u--,v*=2),u+l>=1?e+=p/v:e+=p*Math.pow(2,1-l),e*v>=2&&(u++,v/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*v-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+m]=o&255,m+=h,o/=256,n-=8);for(u=u<<n|o,f+=n;f>0;r[t+m]=u&255,m+=h,u/=256,f-=8);r[t+m-h]|=d*128}});var LF=s(yi=>{"use strict";var S1=lF(),di=pF(),gF=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;yi.Buffer=b;yi.SlowBuffer=IOr;yi.INSPECT_MAX_BYTES=50;var i0=2147483647;yi.kMaxLength=i0;b.TYPED_ARRAY_SUPPORT=NOr();!b.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function NOr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(b.prototype,"parent",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.buffer}});Object.defineProperty(b.prototype,"offset",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.byteOffset}});function ue(r){if(r>i0)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,b.prototype),e}function b(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return L1(r)}return yF(r,e,t)}b.poolSize=8192;function yF(r,e,t){if(typeof r=="string")return OOr(r,e);if(ArrayBuffer.isView(r))return SOr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Zr(r,ArrayBuffer)||r&&Zr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Zr(r,SharedArrayBuffer)||r&&Zr(r.buffer,SharedArrayBuffer)))return I1(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return b.from(i,e,t);let n=TOr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return b.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}b.from=function(r,e,t){return yF(r,e,t)};Object.setPrototypeOf(b.prototype,Uint8Array.prototype);Object.setPrototypeOf(b,Uint8Array);function qF(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function AOr(r,e,t){return qF(r),r<=0?ue(r):e!==void 0?typeof t=="string"?ue(r).fill(e,t):ue(r).fill(e):ue(r)}b.alloc=function(r,e,t){return AOr(r,e,t)};function L1(r){return qF(r),ue(r<0?0:P1(r)|0)}b.allocUnsafe=function(r){return L1(r)};b.allocUnsafeSlow=function(r){return L1(r)};function OOr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!b.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=bF(r,e)|0,i=ue(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function T1(r){let e=r.length<0?0:P1(r.length)|0,t=ue(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function SOr(r){if(Zr(r,Uint8Array)){let e=new Uint8Array(r);return I1(e.buffer,e.byteOffset,e.byteLength)}return T1(r)}function I1(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,b.prototype),i}function TOr(r){if(b.isBuffer(r)){let e=P1(r.length)|0,t=ue(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||F1(r.length)?ue(0):T1(r);if(r.type==="Buffer"&&Array.isArray(r.data))return T1(r.data)}function P1(r){if(r>=i0)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i0.toString(16)+" bytes");return r|0}function IOr(r){return+r!=r&&(r=0),b.alloc(+r)}b.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==b.prototype};b.compare=function(e,t){if(Zr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),Zr(t,Uint8Array)&&(t=b.from(t,t.offset,t.byteLength)),!b.isBuffer(e)||!b.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};b.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};b.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return b.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=b.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(Zr(u,Uint8Array))a+u.length>n.length?(b.isBuffer(u)||(u=b.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(b.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function bF(r,e){if(b.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Zr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return _1(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return _F(r).length;default:if(n)return i?-1:_1(r).length;e=(""+e).toLowerCase(),n=!0}}b.byteLength=bF;function _Or(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return GOr(this,e,t);case"utf8":case"utf-8":return EF(this,e,t);case"ascii":return jOr(this,e,t);case"latin1":case"binary":return COr(this,e,t);case"base64":return BOr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return VOr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}b.prototype._isBuffer=!0;function Vt(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}b.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Vt(this,t,t+1);return this};b.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Vt(this,t,t+3),Vt(this,t+1,t+2);return this};b.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Vt(this,t,t+7),Vt(this,t+1,t+6),Vt(this,t+2,t+5),Vt(this,t+3,t+4);return this};b.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?EF(this,0,e):_Or.apply(this,arguments)};b.prototype.toLocaleString=b.prototype.toString;b.prototype.equals=function(e){if(!b.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:b.compare(this,e)===0};b.prototype.inspect=function(){let e="",t=yi.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};gF&&(b.prototype[gF]=b.prototype.inspect);b.prototype.compare=function(e,t,i,n,a){if(Zr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),!b.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,v=Math.min(u,o),f=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<v;++l)if(f[l]!==c[l]){u=f[l],o=c[l];break}return u<o?-1:o<u?1:0};function wF(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,F1(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=b.from(e,i)),b.isBuffer(e))return e.length===0?-1:mF(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):mF(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function mF(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function v(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let f;if(n){let c=-1;for(f=t;f<u;f++)if(v(r,f)===v(e,c===-1?0:f-c)){if(c===-1&&(c=f),f-c+1===o)return c*a}else c!==-1&&(f-=f-c),c=-1}else for(t+o>u&&(t=u-o),f=t;f>=0;f--){let c=!0;for(let l=0;l<o;l++)if(v(r,f+l)!==v(e,l)){c=!1;break}if(c)return f}return-1}b.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};b.prototype.indexOf=function(e,t,i){return wF(this,e,t,i,!0)};b.prototype.lastIndexOf=function(e,t,i){return wF(this,e,t,i,!1)};function LOr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(F1(o))return u;r[t+u]=o}return u}function POr(r,e,t,i){return n0(_1(e,r.length-t),r,t,i)}function ROr(r,e,t,i){return n0(DOr(e),r,t,i)}function FOr(r,e,t,i){return n0(_F(e),r,t,i)}function MOr(r,e,t,i){return n0(zOr(e,r.length-t),r,t,i)}b.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return LOr(this,e,t,i);case"utf8":case"utf-8":return POr(this,e,t,i);case"ascii":case"latin1":case"binary":return ROr(this,e,t,i);case"base64":return FOr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return MOr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};b.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function BOr(r,e,t){return e===0&&t===r.length?S1.fromByteArray(r):S1.fromByteArray(r.slice(e,t))}function EF(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let v,f,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:v=r[n+1],(v&192)===128&&(l=(a&31)<<6|v&63,l>127&&(u=l));break;case 3:v=r[n+1],f=r[n+2],(v&192)===128&&(f&192)===128&&(l=(a&15)<<12|(v&63)<<6|f&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:v=r[n+1],f=r[n+2],c=r[n+3],(v&192)===128&&(f&192)===128&&(c&192)===128&&(l=(a&15)<<18|(v&63)<<12|(f&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return kOr(i)}var dF=4096;function kOr(r){let e=r.length;if(e<=dF)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=dF));return t}function jOr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function COr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function GOr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=XOr[r[a]];return n}function VOr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}b.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,b.prototype),n};function ur(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}b.prototype.readUintLE=b.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};b.prototype.readUintBE=b.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};b.prototype.readUint8=b.prototype.readUInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]};b.prototype.readUint16LE=b.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]|this[e+1]<<8};b.prototype.readUint16BE=b.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]<<8|this[e+1]};b.prototype.readUint32LE=b.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};b.prototype.readUint32BE=b.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};b.prototype.readBigUInt64LE=Qe(function(e){e=e>>>0,hi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Tn(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});b.prototype.readBigUInt64BE=Qe(function(e){e=e>>>0,hi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Tn(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});b.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};b.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};b.prototype.readInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};b.prototype.readInt16LE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};b.prototype.readInt16BE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};b.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};b.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};b.prototype.readBigInt64LE=Qe(function(e){e=e>>>0,hi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Tn(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});b.prototype.readBigInt64BE=Qe(function(e){e=e>>>0,hi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Tn(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});b.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),di.read(this,e,!0,23,4)};b.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),di.read(this,e,!1,23,4)};b.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),di.read(this,e,!0,52,8)};b.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),di.read(this,e,!1,52,8)};function qr(r,e,t,i,n,a){if(!b.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}b.prototype.writeUintLE=b.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};b.prototype.writeUintBE=b.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};b.prototype.writeUint8=b.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,255,0),this[t]=e&255,t+1};b.prototype.writeUint16LE=b.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeUint16BE=b.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeUint32LE=b.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};b.prototype.writeUint32BE=b.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function NF(r,e,t,i,n){IF(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function AF(r,e,t,i,n){IF(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}b.prototype.writeBigUInt64LE=Qe(function(e,t=0){return NF(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeBigUInt64BE=Qe(function(e,t=0){return AF(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);qr(this,e,t,i,v-1,-v)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);qr(this,e,t,i,v-1,-v)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};b.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};b.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};b.prototype.writeBigInt64LE=Qe(function(e,t=0){return NF(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});b.prototype.writeBigInt64BE=Qe(function(e,t=0){return AF(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function OF(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function SF(r,e,t,i,n){return e=+e,t=t>>>0,n||OF(r,e,t,4,34028234663852886e22,-34028234663852886e22),di.write(r,e,t,i,23,4),t+4}b.prototype.writeFloatLE=function(e,t,i){return SF(this,e,t,!0,i)};b.prototype.writeFloatBE=function(e,t,i){return SF(this,e,t,!1,i)};function TF(r,e,t,i,n){return e=+e,t=t>>>0,n||OF(r,e,t,8,17976931348623157e292,-17976931348623157e292),di.write(r,e,t,i,52,8),t+8}b.prototype.writeDoubleLE=function(e,t,i){return TF(this,e,t,!0,i)};b.prototype.writeDoubleBE=function(e,t,i){return TF(this,e,t,!1,i)};b.prototype.copy=function(e,t,i,n){if(!b.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};b.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!b.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=b.isBuffer(e)?e:b.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var mi={};function R1(r,e,t){mi[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}R1("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);R1("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);R1("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=hF(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=hF(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function hF(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function UOr(r,e,t){hi(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&Tn(e,r.length-(t+1))}function IF(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new mi.ERR_OUT_OF_RANGE("value",o,r)}UOr(i,n,a)}function hi(r,e){if(typeof r!="number")throw new mi.ERR_INVALID_ARG_TYPE(e,"number",r)}function Tn(r,e,t){throw Math.floor(r)!==r?(hi(r,t),new mi.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new mi.ERR_BUFFER_OUT_OF_BOUNDS:new mi.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var HOr=/[^+/0-9A-Za-z-_]/g;function WOr(r){if(r=r.split("=")[0],r=r.trim().replace(HOr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function _1(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function DOr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function zOr(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function _F(r){return S1.toByteArray(WOr(r))}function n0(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function Zr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function F1(r){return r!==r}var XOr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function Qe(r){return typeof BigInt>"u"?JOr:r}function JOr(){throw new Error("BigInt not supported")}});var RF=s((Ase,PF)=>{"use strict";var xOr=LF().Buffer;PF.exports=xOr});var MF=s((Ose,FF)=>{"use strict";function YOr(){throw new Error("not implemented")}FF.exports=YOr});var a0=s((Sse,BF)=>{"use strict";var ZOr=fF(),$Or=RF(),QOr=MF(),M1;ZOr()?M1=$Or:M1=QOr;BF.exports=M1});var jF=s((Tse,kF)=>{"use strict";var KOr=_(),rSr=a0(),eSr=KOr(rSr.from);kF.exports=eSr});var GF=s((Ise,CF)=>{"use strict";var tSr=Et(),iSr=q(),nSr=a0();function aSr(r){if(!tSr(r))throw new TypeError(iSr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return nSr.from(r)}CF.exports=aSr});var UF=s((_se,VF)=>{"use strict";var sSr=Et(),uSr=q(),oSr=a0();function fSr(r){if(!sSr(r))throw new TypeError(uSr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new oSr(r)}VF.exports=fSr});var WF=s((Lse,HF)=>{"use strict";var vSr=jF(),cSr=GF(),lSr=UF(),B1;vSr?B1=cSr:B1=lSr;HF.exports=B1});var XF=s((Pse,zF)=>{"use strict";var pSr=vn(),gSr=Yt(),mSr=fn(),dSr=on(),hSr=Zt(),ySr=Pt(),qSr=lr(),bSr=se(),wSr=dr(),DF;function ESr(r){return new pSr(r)}function NSr(r){return new gSr(r)}function ASr(r){return new mSr(r)}function OSr(r){return new dSr(r)}function SSr(r){return new hSr(r)}function TSr(r){return new ySr(r)}function ISr(r){return new qSr(r)}function _Sr(r){return new bSr(r)}function LSr(r){return new wSr(r)}function PSr(){var r={int8array:ESr,uint8array:NSr,uint8clampedarray:ASr,int16array:OSr,uint16array:SSr,int32array:TSr,uint32array:ISr,float32array:_Sr,float64array:LSr};return r}DF=PSr();zF.exports=DF});var $F=s((Rse,ZF)=>{"use strict";var s0=O(),k1=mr(),JF=Et(),RSr=LR(),xF=xn(),FSr=VR(),MSr=Jn(),YF=Jt(),BSr=YR(),In=iF(),kSr=Nt(),_n=Ce(),jSr=WF(),CSr=XF();function GSr(r){var e,t,i,n,a,u,o,v;for(e=[],n=[],o=Object.create(kSr(r)),e.push(r),n.push(o),t=BSr(r),v=0;v<t.length;v++)i=t[v],a=In(r,i),s0(a,"value")&&(u=k1(r[i])?[]:{},a.value=Ut(r[i],u,e,n,-1)),_n(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function VSr(r){var e=[],t=[],i,n,a,u,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=YF(r),v=0;v<i.length;v++)u=i[v],n=In(r,u),s0(n,"value")&&(a=k1(r[u])?[]:{},n.value=Ut(r[u],a,e,t,-1)),_n(o,u,n);return o}function Ut(r,e,t,i,n){var a,u,o,v,f,c,l,p,m,h;if(n-=1,typeof r!="object"||r===null)return r;if(JF(r))return jSr(r);if(RSr(r))return VSr(r);if(o=xF(r),o==="date")return new Date(+r);if(o==="regexp")return FSr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=CSr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?GSr(r):{};if(u=YF(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=xF(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||JF(p)){a==="object"?(v=In(r,c),s0(v,"value")&&(v.value=Ut(p)),_n(e,c,v)):e[c]=Ut(p);continue}if(m=MSr(t,p),m!==-1){e[c]=i[m];continue}l=k1(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=Ut(p,l,t,i,n):(v=In(r,c),s0(v,"value")&&(v.value=Ut(p,l,t,i,n)),_n(e,c,v))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],v=In(r,c),_n(e,c,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}ZF.exports=Ut});var KF=s((Fse,QF)=>{"use strict";var USr=mr(),HSr=Je().isPrimitive,WSr=q(),DSr=L(),zSr=$F();function XSr(r,e){var t;if(arguments.length>1){if(!HSr(e))throw new TypeError(WSr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=DSr;return t=USr(r)?new Array(r.length):{},zSr(r,t,[r],[t],e)}QF.exports=XSr});var Ln=s((Mse,rM)=>{"use strict";var JSr=KF();rM.exports=JSr});var eM=s((Bse,xSr)=>{xSr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var iM=s((kse,tM)=>{"use strict";var YSr=Ln(),ZSr=eM();function $Sr(){return YSr(ZSr)}tM.exports=$Sr});var nM=s((jse,QSr)=>{QSr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var sM=s((Cse,aM)=>{"use strict";var KSr=Ln(),rTr=nM();function eTr(){return KSr(rTr)}aM.exports=eTr});var uM=s((Gse,tTr)=>{tTr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var fM=s((Vse,oM)=>{"use strict";var iTr=Ln(),nTr=uM();function aTr(){return iTr(nTr)}oM.exports=aTr});var vM=s((Use,sTr)=>{sTr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var lM=s((Hse,cM)=>{"use strict";var uTr=vM();function oTr(){return uTr.slice()}cM.exports=oTr});var pM=s((Wse,fTr)=>{fTr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var mM=s((Dse,gM)=>{"use strict";var vTr=Ln(),cTr=pM();function lTr(){return vTr(cTr)}gM.exports=lTr});var hM=s((zse,dM)=>{"use strict";var qi={};qi.AFINN_111=iM();qi.AFINN_96=sM();qi.ANSCOMBES_QUARTET=fM();qi.HERNDON_VENUS_SEMIDIAMETERS=lM();qi.NIGHTINGALES_ROSE=mM();dM.exports=qi});var qM=s((Xse,yM)=>{"use strict";var pTr=It(),gTr=C(),j1=E();function mTr(r,e,t){var i,n;return j1(r)||j1(e)||j1(t)||t<0?NaN:t===0?r<e?0:1:(i=t*gTr(2),n=r-e,.5*pTr(-n/i))}yM.exports=mTr});var wM=s((Jse,bM)=>{"use strict";var dTr=S(),hTr=Ta().factory,C1=E(),yTr=C(),qTr=It();function bTr(r,e){var t;if(C1(r)||C1(e)||e<0)return dTr(NaN);if(e===0)return hTr(r);return t=e*yTr(2),i;function i(n){var a;return C1(n)?NaN:(a=n-r,.5*qTr(-a/t))}}bM.exports=bTr});var AM=s((xse,NM)=>{"use strict";var wTr=w(),EM=qM(),ETr=wM();wTr(EM,"factory",ETr);NM.exports=EM});var TM=s((Yse,SM)=>{"use strict";var OM=E(),NTr=P(),ATr=We(),OTr=Jo();function STr(r,e){return OM(r)||OM(e)||e<=0?NaN:.5*NTr(ATr*OTr*e*e)}SM.exports=STr});var _M=s((Zse,IM)=>{"use strict";var TTr=TM();IM.exports=TTr});var RM=s(($se,PM)=>{"use strict";var LM=E();function ITr(r,e){return LM(r)||LM(e)||e<=0?NaN:0}PM.exports=ITr});var MM=s((Qse,FM)=>{"use strict";var _Tr=RM();FM.exports=_Tr});var kM=s((Kse,BM)=>{"use strict";var LTr=Q(),PTr=[RTr,FTr,MTr,BTr,kTr,jTr,CTr,GTr,VTr,UTr,HTr,WTr,DTr,zTr,XTr,JTr,xTr,YTr,ZTr,$Tr,QTr,KTr,rIr,eIr,tIr,iIr,nIr,aIr,sIr,uIr,oIr,fIr,vIr,cIr,lIr,pIr,gIr,mIr,dIr,hIr,yIr,qIr,bIr,wIr,EIr,NIr,AIr,OIr,SIr,TIr,IIr,_Ir,LIr,PIr,RIr,FIr,MIr,BIr,kIr,jIr,CIr,GIr,VIr,UIr,HIr,WIr,DIr,zIr,XIr,JIr,xIr,YIr,ZIr,$Ir,QIr,KIr,r_r,e_r,t_r,i_r,n_r,a_r,s_r,u_r,o_r,f_r,v_r,c_r,l_r,p_r,g_r,m_r,d_r,h_r,y_r,q_r,b_r,w_r,E_r,N_r,A_r];function RTr(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function FTr(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function MTr(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function BTr(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function kTr(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function jTr(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function CTr(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function GTr(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function VTr(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function UTr(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function HTr(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function WTr(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function DTr(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function zTr(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function XTr(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function JTr(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function xTr(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function YTr(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function ZTr(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function $Tr(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function QTr(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function KTr(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function rIr(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function eIr(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function tIr(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function iIr(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function nIr(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function aIr(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function sIr(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function uIr(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function oIr(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function fIr(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function vIr(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function cIr(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function lIr(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function pIr(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function gIr(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function mIr(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function dIr(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function hIr(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function yIr(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function qIr(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function bIr(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function wIr(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function EIr(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function NIr(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function AIr(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function OIr(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function SIr(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function TIr(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function IIr(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function _Ir(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function LIr(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function PIr(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function RIr(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function FIr(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function MIr(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function BIr(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function kIr(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function jIr(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function CIr(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function GIr(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function VIr(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function UIr(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function HIr(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function WIr(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function DIr(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function zIr(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function XIr(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function JIr(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function xIr(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function YIr(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function ZIr(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function $Ir(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function QIr(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function KIr(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function r_r(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function e_r(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function t_r(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function i_r(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function n_r(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function a_r(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function s_r(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function u_r(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function o_r(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function f_r(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function v_r(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function c_r(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function l_r(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function p_r(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function g_r(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function m_r(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function d_r(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function h_r(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function y_r(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function q_r(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function b_r(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function w_r(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function E_r(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function N_r(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function A_r(){return 1}function O_r(r){var e=LTr(r),t=PTr[e];return t(2*r-(2*e+1))}BM.exports=O_r});var UM=s((rue,VM)=>{"use strict";var jM=nr(),S_r=L(),CM=kM(),GM=.5641895835477563;function T_r(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?GM/r:(e=r*r,GM*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):CM(400/(4+r)):r<-26.7?S_r:(e=r*r,r<-6.1?2*jM(e):2*jM(e)-CM(400/(4-r)))}VM.exports=T_r});var G1=s((eue,HM)=>{"use strict";var I_r=UM();HM.exports=I_r});var zM=s((tue,DM)=>{"use strict";var __r=P(),L_r=De(),P_r=$a(),R_r=It(),F_r=G1(),M_r=U(),V1=E(),WM=.7071067811865475;function B_r(r,e,t){var i;return V1(r)||V1(e)||V1(t)||t<0?NaN:t===0?r<e?M_r:0:(i=(r-e)/t,i<-1?__r(F_r(-i*WM)/2)-P_r(i)/2:L_r(-R_r(i*WM)/2))}DM.exports=B_r});var xM=s((iue,JM)=>{"use strict";var XM=E(),k_r=U();function j_r(r,e){return XM(r)||XM(e)?NaN:r<e?k_r:0}JM.exports=j_r});var $M=s((nue,ZM)=>{"use strict";var C_r=S(),YM=E(),G_r=U();function V_r(r){if(YM(r))return C_r(NaN);return e;function e(t){return YM(t)?NaN:t<r?G_r:0}}ZM.exports=V_r});var rB=s((aue,KM)=>{"use strict";var U_r=w(),QM=xM(),H_r=$M();U_r(QM,"factory",H_r);KM.exports=QM});var nB=s((sue,iB)=>{"use strict";var W_r=S(),D_r=rB().factory,eB=E(),z_r=De(),X_r=$a(),J_r=It(),x_r=G1(),Y_r=P(),tB=.7071067811865475;function Z_r(r,e){if(eB(r)||eB(e)||e<0)return W_r(NaN);if(e===0)return D_r(r);return t;function t(i){var n=(i-r)/e;return n<-1?Y_r(x_r(-n*tB)/2)-X_r(n)/2:z_r(-J_r(n*tB)/2)}}iB.exports=Z_r});var uB=s((uue,sB)=>{"use strict";var $_r=w(),aB=zM(),Q_r=nB();$_r(aB,"factory",Q_r);sB.exports=aB});var U1=s((oue,oB)=>{"use strict";var K_r=1.8378770664093456;oB.exports=K_r});var cB=s((fue,vB)=>{"use strict";var rLr=P(),fB=W(),eLr=U1(),tLr=U(),iLr=L(),H1=E();function nLr(r,e,t){var i,n,a;return H1(r)||H1(e)||H1(t)||t<0?NaN:t===0?r===e?iLr:tLr:(i=fB(t,2),n=-.5*(2*rLr(t)+eLr),a=-1/(2*i),n+a*fB(r-e,2))}vB.exports=nLr});var gB=s((vue,pB)=>{"use strict";var aLr=L(),sLr=U(),lB=E();function uLr(r,e){return lB(r)||lB(e)?NaN:r===e?aLr:sLr}pB.exports=uLr});var hB=s((cue,dB)=>{"use strict";var oLr=S(),fLr=L(),vLr=U(),mB=E();function cLr(r){if(mB(r))return oLr(NaN);return e;function e(t){return mB(t)?NaN:t===r?fLr:vLr}}dB.exports=cLr});var bB=s((lue,qB)=>{"use strict";var lLr=w(),yB=gB(),pLr=hB();lLr(yB,"factory",pLr);qB.exports=yB});var AB=s((pue,NB)=>{"use strict";var gLr=S(),mLr=bB().factory,dLr=U1(),wB=E(),EB=W(),hLr=P();function yLr(r,e){var t,i,n;if(wB(r)||wB(e)||e<0)return gLr(NaN);if(e===0)return mLr(r);return t=EB(e,2),i=-.5*(2*hLr(e)+dLr),n=-1/(2*t),a;function a(u){return i+n*EB(u-r,2)}}NB.exports=yLr});var TB=s((gue,SB)=>{"use strict";var qLr=w(),OB=cB(),bLr=AB();qLr(OB,"factory",bLr);SB.exports=OB});var LB=s((mue,_B)=>{"use strict";var IB=E();function wLr(r,e){return IB(r)||IB(e)||e<=0?NaN:r}_B.exports=wLr});var RB=s((due,PB)=>{"use strict";var ELr=LB();PB.exports=ELr});var BB=s((hue,MB)=>{"use strict";var FB=E();function NLr(r,e){return FB(r)||FB(e)||e<=0?NaN:r}MB.exports=NLr});var jB=s((yue,kB)=>{"use strict";var ALr=BB();kB.exports=ALr});var GB=s((que,CB)=>{"use strict";var W1=E(),OLr=nr(),SLr=W();function TLr(r,e,t){return W1(r)||W1(e)||W1(t)||t<=0?NaN:OLr(e*r+.5*SLr(t*r,2))}CB.exports=TLr});var UB=s((bue,VB)=>{"use strict";var ILr=S(),D1=E(),_Lr=nr(),LLr=W();function PLr(r,e){if(D1(r)||D1(e)||e<=0)return ILr(NaN);return t;function t(i){return D1(i)?NaN:_Lr(r*i+.5*LLr(e*i,2))}}VB.exports=PLr});var DB=s((wue,WB)=>{"use strict";var RLr=w(),HB=GB(),FLr=UB();RLr(HB,"factory",FLr);WB.exports=HB});var JB=s((Eue,XB)=>{"use strict";var zB=E();function MLr(r,e){return zB(r)||zB(e)||e<=0?NaN:r}XB.exports=MLr});var YB=s((Nue,xB)=>{"use strict";var BLr=JB();xB.exports=BLr});var QB=s((Aue,$B)=>{"use strict";var kLr=nr(),ZB=W(),jLr=C(),CLr=We(),GLr=L(),z1=E();function VLr(r,e,t){var i,n,a;return z1(r)||z1(e)||z1(t)||t<0?NaN:t===0?r===e?GLr:0:(i=ZB(t,2),n=1/jLr(i*CLr),a=-1/(2*i),n*kLr(a*ZB(r-e,2)))}$B.exports=VLr});var ek=s((Oue,rk)=>{"use strict";var ULr=L(),KB=E();function HLr(r,e){return KB(r)||KB(e)?NaN:r===e?ULr:0}rk.exports=HLr});var nk=s((Sue,ik)=>{"use strict";var WLr=S(),DLr=L(),tk=E();function zLr(r){if(tk(r))return WLr(NaN);return e;function e(t){return tk(t)?NaN:t===r?DLr:0}}ik.exports=zLr});var uk=s((Tue,sk)=>{"use strict";var XLr=w(),ak=ek(),JLr=nk();XLr(ak,"factory",JLr);sk.exports=ak});var vk=s((Iue,fk)=>{"use strict";var xLr=S(),YLr=uk().factory,X1=E(),ZLr=C(),$Lr=nr(),ok=W(),QLr=We();function KLr(r,e){var t,i,n;if(X1(r)||X1(e)||e<0)return xLr(NaN);if(e===0)return YLr(r);return t=ok(e,2),i=1/ZLr(t*QLr),n=-1/(2*t),a;function a(u){return X1(u)?NaN:i*$Lr(n*ok(u-r,2))}}fk.exports=KLr});var pk=s((_ue,lk)=>{"use strict";var rPr=w(),ck=QB(),ePr=vk();rPr(ck,"factory",ePr);lk.exports=ck});var mk=s((Lue,gk)=>{"use strict";function tPr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}gk.exports=tPr});var hk=s((Pue,dk)=>{"use strict";function iPr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}dk.exports=iPr});var qk=s((Rue,yk)=>{"use strict";function nPr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}yk.exports=nPr});var wk=s((Fue,bk)=>{"use strict";function aPr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}bk.exports=aPr});var Nk=s((Mue,Ek)=>{"use strict";function sPr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}Ek.exports=sPr});var Tk=s((Bue,Sk)=>{"use strict";var uPr=E(),Ak=C(),Ok=P(),oPr=L(),fPr=U(),vPr=mk(),cPr=hk(),lPr=qk(),pPr=wk(),gPr=Nk(),mPr=.08913147449493408,dPr=2.249481201171875,hPr=.807220458984375,yPr=.9399557113647461,qPr=.9836282730102539;function bPr(r){var e,t,i,n,a,u;return uPr(r)?NaN:r===1?oPr:r===-1?fPr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=vPr(t),e*(a*mPr+a*u)):n>=.25?(a=Ak(-2*Ok(n)),n-=.25,u=cPr(n),e*(a/(dPr+u))):(n=Ak(-Ok(n)),n<3?(i=n-1.125,u=lPr(i),e*(hPr*n+u*n)):n<6?(i=n-3,u=pPr(i),e*(yPr*n+u*n)):(i=n-6,u=gPr(i),e*(qPr*n+u*n))))}Sk.exports=bPr});var J1=s((kue,Ik)=>{"use strict";var wPr=Tk();Ik.exports=wPr});var Lk=s((jue,_k)=>{"use strict";var EPr=J1(),x1=E(),NPr=C();function APr(r,e,t){var i,n;return x1(e)||x1(t)||x1(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*NPr(2),i+n*EPr(2*r-1))}_k.exports=APr});var Rk=s((Cue,Pk)=>{"use strict";var OPr=E();function SPr(r,e){return OPr(r)||r<0||r>1?NaN:e}Pk.exports=SPr});var Bk=s((Gue,Mk)=>{"use strict";var TPr=S(),Fk=E();function IPr(r){if(Fk(r))return TPr(NaN);return e;function e(t){return Fk(t)||t<0||t>1?NaN:r}}Mk.exports=IPr});var Y1=s((Vue,jk)=>{"use strict";var _Pr=w(),kk=Rk(),LPr=Bk();_Pr(kk,"factory",LPr);jk.exports=kk});var Gk=s((Uue,Ck)=>{"use strict";var PPr=S(),RPr=Y1().factory,FPr=J1(),Z1=E(),MPr=C();function BPr(r,e){var t,i;if(Z1(r)||Z1(e)||e<0)return PPr(NaN);return e===0&&RPr(r),t=r,i=e*MPr(2),n;function n(a){return Z1(a)||a<0||a>1?NaN:t+i*FPr(2*a-1)}}Ck.exports=BPr});var $1=s((Hue,Uk)=>{"use strict";var kPr=w(),Vk=Lk(),jPr=Gk();kPr(Vk,"factory",jPr);Uk.exports=Vk});var Dk=s((Wue,Wk)=>{"use strict";var Hk=E();function CPr(r,e){return Hk(r)||Hk(e)||e<=0?NaN:0}Wk.exports=CPr});var Xk=s((Due,zk)=>{"use strict";var GPr=Dk();zk.exports=GPr});var Yk=s((zue,xk)=>{"use strict";var Jk=E();function VPr(r,e){return Jk(r)||Jk(e)||e<=0?NaN:e}xk.exports=VPr});var $k=s((Xue,Zk)=>{"use strict";var UPr=Yk();Zk.exports=UPr});var rj=s((Jue,Kk)=>{"use strict";var Qk=E();function HPr(r,e){return Qk(r)||Qk(e)||e<=0?NaN:e*e}Kk.exports=HPr});var tj=s((xue,ej)=>{"use strict";var WPr=rj();ej.exports=WPr});var nj=s((Yue,ij)=>{"use strict";var pr={};pr.normal={};pr.normal.cdf=AM();pr.normal.entropy=_M();pr.normal.kurtosis=MM();pr.normal.logcdf=uB();pr.normal.logpdf=TB();pr.normal.mean=RB();pr.normal.median=jB();pr.normal.mgf=DB();pr.normal.mode=YB();pr.normal.pdf=pk();pr.normal.quantile=$1();pr.normal.skewness=Xk();pr.normal.stdev=$k();pr.normal.variance=tj();ij.exports=pr});var sj=s((Zue,aj)=>{"use strict";function DPr(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}aj.exports=DPr});var u0=s(($ue,uj)=>{"use strict";var zPr=sj();uj.exports=zPr});var fj=s((Que,oj)=>{"use strict";function XPr(r){return r.toLowerCase()}oj.exports=XPr});var bi=s((Kue,vj)=>{"use strict";var JPr=fj();vj.exports=JPr});var lj=s((roe,cj)=>{"use strict";function xPr(r,e,t){return r.replace(e,t)}cj.exports=xPr});var Ht=s((eoe,pj)=>{"use strict";var YPr=lj();pj.exports=YPr});var mj=s((toe,gj)=>{"use strict";var ZPr=typeof String.prototype.trim<"u";gj.exports=ZPr});var Q1=s((ioe,dj)=>{"use strict";var $Pr=String.prototype.trim;dj.exports=$Pr});var bj=s((noe,qj)=>{"use strict";var hj=Q1(),QPr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,yj="\u180E";function KPr(){return hj.call(QPr)===""&&hj.call(yj)===yj}qj.exports=KPr});var Ej=s((aoe,wj)=>{"use strict";var rRr=Ht(),eRr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function tRr(r){return rRr(r,eRr,"$1")}wj.exports=tRr});var Aj=s((soe,Nj)=>{"use strict";var iRr=Q1();function nRr(r){return iRr.call(r)}Nj.exports=nRr});var wi=s((uoe,Oj)=>{"use strict";var aRr=mj(),sRr=bj(),uRr=Ej(),oRr=Aj(),K1;aRr&&sRr()?K1=oRr:K1=uRr;Oj.exports=K1});var Tj=s((ooe,Sj)=>{"use strict";var fRr=u0(),vRr=bi(),o0=Ht(),cRr=wi(),lRr=/\s+/g,pRr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,gRr=/(?:\s|^)([^\s]+)(?=\s|$)/g,mRr=/([a-z0-9])([A-Z])/g;function dRr(r,e,t){return e=vRr(e),t===0?e:fRr(e)}function hRr(r){return r=o0(r,pRr," "),r=o0(r,lRr," "),r=o0(r,mRr,"$1 $2"),r=cRr(r),o0(r,gRr,dRr)}Sj.exports=hRr});var _j=s((foe,Ij)=>{"use strict";var yRr=Tj();Ij.exports=yRr});var Pj=s((voe,Lj)=>{"use strict";var qRr=K().isPrimitive,bRr=q(),wRr=_j();function ERr(r){if(!qRr(r))throw new TypeError(bRr("invalid argument. First argument must be a string. Value: `%s`.",r));return wRr(r)}Lj.exports=ERr});var Fj=s((coe,Rj)=>{"use strict";var NRr=Pj();Rj.exports=NRr});var Bj=s((loe,Mj)=>{"use strict";var ARr=K().isPrimitive,ORr=q(),SRr=u0();function TRr(r){if(!ARr(r))throw new TypeError(ORr("invalid argument. First argument must be a string. Value: `%s`.",r));return SRr(r)}Mj.exports=TRr});var jj=s((poe,kj)=>{"use strict";var IRr=Bj();kj.exports=IRr});var Gj=s((goe,Cj)=>{"use strict";function _Rr(r){return r.toUpperCase()}Cj.exports=_Rr});var Uj=s((moe,Vj)=>{"use strict";var LRr=Gj();Vj.exports=LRr});var Wj=s((doe,Hj)=>{"use strict";var PRr=Uj(),r3=Ht(),RRr=wi(),FRr=/\s+/g,MRr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,BRr=/([a-z0-9])([A-Z])/g;function kRr(r){return r=r3(r,MRr," "),r=r3(r,BRr,"$1 $2"),r=RRr(r),r=r3(r,FRr,"_"),PRr(r)}Hj.exports=kRr});var zj=s((hoe,Dj)=>{"use strict";var jRr=Wj();Dj.exports=jRr});var Jj=s((yoe,Xj)=>{"use strict";var CRr=K().isPrimitive,GRr=q(),VRr=zj();function URr(r){if(!CRr(r))throw new TypeError(GRr("invalid argument. Must provide a string. Value: `%s`.",r));return VRr(r)}Xj.exports=URr});var Yj=s((qoe,xj)=>{"use strict";var HRr=Jj();xj.exports=HRr});var $j=s((boe,Zj)=>{"use strict";var WRr=bi(),e3=Ht(),DRr=wi(),zRr=/\s+/g,XRr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,JRr=/([a-z0-9])([A-Z])/g;function xRr(r){return r=e3(r,XRr," "),r=e3(r,JRr,"$1 $2"),r=DRr(r),r=e3(r,zRr,"-"),WRr(r)}Zj.exports=xRr});var Kj=s((woe,Qj)=>{"use strict";var YRr=$j();Qj.exports=YRr});var eC=s((Eoe,rC)=>{"use strict";var ZRr=K().isPrimitive,$Rr=q(),QRr=Kj();function KRr(r){if(!ZRr(r))throw new TypeError($Rr("invalid argument. Must provide a string. Value: `%s`.",r));return QRr(r)}rC.exports=KRr});var iC=s((Noe,tC)=>{"use strict";var rFr=eC();tC.exports=rFr});var aC=s((Aoe,nC)=>{"use strict";var eFr=K().isPrimitive,tFr=q(),iFr=bi();function nFr(r){if(!eFr(r))throw new TypeError(tFr("invalid argument. Must provide a string. Value: `%s`.",r));return iFr(r)}nC.exports=nFr});var uC=s((Ooe,sC)=>{"use strict";var aFr=aC();sC.exports=aFr});var fC=s((Soe,oC)=>{"use strict";var sFr=u0(),uFr=bi(),f0=Ht(),oFr=wi(),fFr=/\s+/g,vFr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,cFr=/(?:\s|^)([^\s]+)(?=\s|$)/g,lFr=/([a-z0-9])([A-Z])/g;function pFr(r,e){return sFr(uFr(e))}function gFr(r){return r=f0(r,vFr," "),r=f0(r,fFr," "),r=f0(r,lFr,"$1 $2"),r=oFr(r),f0(r,cFr,pFr)}oC.exports=gFr});var cC=s((Toe,vC)=>{"use strict";var mFr=fC();vC.exports=mFr});var pC=s((Ioe,lC)=>{"use strict";var dFr=K().isPrimitive,hFr=q(),yFr=cC();function qFr(r){if(!dFr(r))throw new TypeError(hFr("invalid argument. First argument must be a string. Value: `%s`.",r));return yFr(r)}lC.exports=qFr});var mC=s((_oe,gC)=>{"use strict";var bFr=pC();gC.exports=bFr});var hC=s((Loe,dC)=>{"use strict";var wFr=bi(),t3=Ht(),EFr=wi(),NFr=/\s+/g,AFr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,OFr=/([a-z0-9])([A-Z])/g;function SFr(r){return r=t3(r,AFr," "),r=t3(r,OFr,"$1 $2"),r=EFr(r),r=t3(r,NFr,"_"),wFr(r)}dC.exports=SFr});var qC=s((Poe,yC)=>{"use strict";var TFr=hC();yC.exports=TFr});var wC=s((Roe,bC)=>{"use strict";var IFr=K().isPrimitive,_Fr=q(),LFr=qC();function PFr(r){if(!IFr(r))throw new TypeError(_Fr("invalid argument. Must provide a string. Value: `%s`.",r));return LFr(r)}bC.exports=PFr});var NC=s((Foe,EC)=>{"use strict";var RFr=wC();EC.exports=RFr});var SC=s((Moe,OC)=>{"use strict";var FFr=I(),AC=O(),MFr=vr().isPrimitive,BFr=K().isPrimitive,i3=q();function kFr(r,e){return FFr(e)?AC(e,"flags")&&(r.flags=e.flags,!BFr(r.flags))?new TypeError(i3("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):AC(e,"capture")&&(r.capture=e.capture,!MFr(r.capture))?new TypeError(i3("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(i3("invalid argument. Options argument must be an object. Value: `%s`.",e))}OC.exports=kFr});var v0=s((Boe,IC)=>{"use strict";var jFr=SC(),TC=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function CFr(r){var e,t;if(arguments.length>0){if(e={},t=jFr(e,r),t)throw t;return e.capture?new RegExp("("+TC+")",e.flags):new RegExp(TC,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}IC.exports=CFr});var LC=s((koe,_C)=>{"use strict";var GFr=v0(),VFr=GFr({capture:!0});_C.exports=VFr});var RC=s((joe,PC)=>{"use strict";var UFr=v0(),HFr=UFr();PC.exports=HFr});var BC=s((Coe,MC)=>{"use strict";var FC=w(),n3=v0(),WFr=LC(),DFr=RC();FC(n3,"REGEXP",DFr);FC(n3,"REGEXP_CAPTURE",WFr);MC.exports=n3});var jC=s((Goe,kC)=>{"use strict";var zFr=BC().REGEXP;function XFr(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),zFr.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}kC.exports=XFr});var GC=s((Voe,CC)=>{"use strict";var JFr=jC();CC.exports=JFr});var UC=s((Uoe,VC)=>{"use strict";var xFr=K().isPrimitive,YFr=q(),ZFr=GC();function $Fr(r){if(!xFr(r))throw new TypeError(YFr("invalid argument. Must provide a string. Value: `%s`.",r));return ZFr(r)}VC.exports=$Fr});var WC=s((Hoe,HC)=>{"use strict";var QFr=UC();HC.exports=QFr});var zC=s((Woe,DC)=>{"use strict";function KFr(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}DC.exports=KFr});var JC=s((Doe,XC)=>{"use strict";var rMr=zC();XC.exports=rMr});var YC=s((zoe,xC)=>{"use strict";var eMr=K().isPrimitive,tMr=q(),iMr=JC();function nMr(r){if(!eMr(r))throw new TypeError(tMr("invalid argument. First argument must be a string. Value: `%s`.",r));return iMr(r)}xC.exports=nMr});var $C=s((Xoe,ZC)=>{"use strict";var aMr=YC();ZC.exports=aMr});var KC=s((Joe,QC)=>{"use strict";var sMr=K().isPrimitive,uMr=q();function oMr(r){if(!sMr(r))throw new TypeError(uMr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}QC.exports=oMr});var eG=s((xoe,rG)=>{"use strict";var fMr=KC();rG.exports=fMr});var iG=s((Yoe,tG)=>{"use strict";var Wr={};Wr.camelcase=Fj();Wr.capitalize=jj();Wr.constantcase=Yj();Wr.kebabcase=iC();Wr.lowercase=uC();Wr.pascalcase=mC();Wr.snakecase=NC();Wr.startcase=WC();Wr.uncapitalize=$C();Wr.uppercase=eG();tG.exports=Wr});var aG=s((Zoe,nG)=>{"use strict";var vMr=Ce();function cMr(r,e,t,i){vMr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}nG.exports=cMr});var F=s(($oe,sG)=>{"use strict";var lMr=aG();sG.exports=lMr});var fG=s((Qoe,oG)=>{"use strict";var uG=65535;function pMr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&uG)>>>0,o=(e&uG)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}oG.exports=pMr});var cG=s((Koe,vG)=>{"use strict";var gMr=fG();vG.exports=gMr});var a3=s((r2e,lG)=>{"use strict";function mMr(r,e,t,i,n,a,u){var o,v,f,c,l,p,m;for(o=e.data,v=n.data,c=e.accessors[0],f=n.accessors[1],l=i,p=u,m=0;m<r;m++)f(v,p,c(o,l)),l+=t,p+=a;return e}lG.exports=mMr});var mG=s((e2e,gG)=>{"use strict";var pG=Za(),dMr=a3(),s3=8;function hMr(r,e,t,i,n){var a,u,o,v,f,c;if(r<=0)return i;if(o=pG(e),v=pG(i),o.accessorProtocol||v.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,dMr(r,o,t,a,v,n,u),v.data;if(t===1&&n===1){if(f=r%s3,f>0)for(c=0;c<f;c++)i[c]=e[c];if(r<s3)return i;for(c=f;c<r;c+=s3)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}gG.exports=hMr});var yG=s((t2e,hG)=>{"use strict";var dG=Za(),yMr=a3(),Pn=8;function qMr(r,e,t,i,n,a,u){var o,v,f,c,l,p;if(r<=0)return n;if(f=dG(e),c=dG(n),f.accessorProtocol||c.accessorProtocol)return yMr(r,f,t,i,c,a,u),c.data;if(o=i,v=u,t===1&&a===1){if(l=r%Pn,l>0)for(p=0;p<l;p++)n[v]=e[o],o+=t,v+=a;if(r<Pn)return n;for(p=l;p<r;p+=Pn)n[v]=e[o],n[v+1]=e[o+1],n[v+2]=e[o+2],n[v+3]=e[o+3],n[v+4]=e[o+4],n[v+5]=e[o+5],n[v+6]=e[o+6],n[v+7]=e[o+7],o+=Pn,v+=Pn;return n}for(p=0;p<r;p++)n[v]=e[o],o+=t,v+=a;return n}hG.exports=qMr});var Ke=s((i2e,bG)=>{"use strict";var bMr=w(),qG=mG(),wMr=yG();bMr(qG,"ndarray",wMr);bG.exports=qG});var EG=s((n2e,wG)=>{"use strict";function EMr(){}wG.exports=EMr});var AG=s((a2e,NG)=>{"use strict";var NMr=EG();function AMr(){return NMr.name==="foo"}NG.exports=AMr});var SG=s((s2e,OG)=>{"use strict";var OMr=AG();OG.exports=OMr});var IG=s((u2e,TG)=>{"use strict";var SMr=_(),TMr=SG(),IMr=q(),_Mr=Wu().REGEXP,LMr=TMr();function PMr(r){if(SMr(r)===!1)throw new TypeError(IMr("invalid argument. Must provide a function. Value: `%s`.",r));return LMr?r.name:_Mr.exec(r.toString())[1]}TG.exports=PMr});var LG=s((o2e,_G)=>{"use strict";var RMr=IG();_G.exports=RMr});var RG=s((f2e,PG)=>{"use strict";var FMr=vn(),MMr=Yt(),BMr=fn(),kMr=on(),jMr=Zt(),CMr=Pt(),GMr=lr(),VMr=se(),UMr=dr(),HMr=[UMr,VMr,CMr,GMr,kMr,jMr,FMr,MMr,BMr];PG.exports=HMr});var FG=s((v2e,WMr)=>{WMr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var GG=s((c2e,CG)=>{"use strict";var DMr=Ge(),zMr=LG(),kG=Nt(),XMr=Yu(),JMr=dr(),MG=RG(),BG=FG(),c0=XMr()?kG(JMr):jG;c0=zMr(c0)==="TypedArray"?c0:jG;function jG(){}function xMr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof c0)return!0;for(t=0;t<MG.length;t++)if(r instanceof MG[t])return!0;for(;r;){for(e=DMr(r),t=0;t<BG.length;t++)if(BG[t]===e)return!0;r=kG(r)}return!1}CG.exports=xMr});var UG=s((l2e,VG)=>{"use strict";var YMr=GG();VG.exports=YMr});var WG=s((p2e,HG)=>{"use strict";var ZMr=gn(),$Mr=dn(),QMr=[$Mr,ZMr];HG.exports=QMr});var DG=s((g2e,KMr)=>{KMr.exports=["Complex64Array","Complex128Array"]});var xG=s((m2e,JG)=>{"use strict";var rBr=Ge(),eBr=Nt(),zG=WG(),XG=DG();function tBr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<zG.length;t++)if(r instanceof zG[t])return!0;for(;r;){for(e=rBr(r),t=0;t<XG.length;t++)if(XG[t]===e)return!0;r=eBr(r)}return!1}JG.exports=tBr});var ZG=s((d2e,YG)=>{"use strict";var iBr=xG();YG.exports=iBr});var QG=s((h2e,$G)=>{"use strict";var nBr=q();function aBr(r,e){if(typeof e!="function")throw new TypeError(nBr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}$G.exports=aBr});var rV=s((y2e,KG)=>{"use strict";var sBr=QG();KG.exports=sBr});var tV=s((q2e,eV)=>{"use strict";var uBr=vn(),oBr=Yt(),fBr=fn(),vBr=on(),cBr=Zt(),lBr=Pt(),pBr=lr(),gBr=se(),mBr=dr(),dBr=gn(),hBr=dn(),yBr=[[mBr,"Float64Array"],[gBr,"Float32Array"],[lBr,"Int32Array"],[pBr,"Uint32Array"],[vBr,"Int16Array"],[cBr,"Uint16Array"],[uBr,"Int8Array"],[oBr,"Uint8Array"],[fBr,"Uint8ClampedArray"],[dBr,"Complex64Array"],[hBr,"Complex128Array"]];eV.exports=yBr});var nV=s((b2e,iV)=>{"use strict";var qBr=rV(),bBr=Ge(),wBr=Nt(),Ei=tV();function EBr(r){var e,t;for(t=0;t<Ei.length;t++)if(qBr(r,Ei[t][0]))return Ei[t][1];for(;r;){for(e=bBr(r),t=0;t<Ei.length;t++)if(e===Ei[t][1])return Ei[t][1];r=wBr(r)}}iV.exports=EBr});var sV=s((w2e,aV)=>{"use strict";var NBr=UG(),ABr=ZG(),OBr=si(),SBr=ui(),TBr=q(),IBr=nV();function _Br(r){var e,t,i;if(NBr(r))e=r;else if(ABr(r))r.BYTES_PER_ELEMENT===8?e=OBr(r,0):e=SBr(r,0);else throw new TypeError(TBr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:IBr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}aV.exports=_Br});var M=s((E2e,uV)=>{"use strict";var LBr=sV();uV.exports=LBr});var u3=s((N2e,oV)=>{"use strict";var PBr=zt(),RBr=Q(),FBr=PBr-1;function MBr(){var r=RBr(1+FBr*Math.random());return r>>>0}oV.exports=MBr});var m3=s((A2e,qV)=>{"use strict";var oe=w(),rt=R(),fV=F(),o3=O(),BBr=I(),kBr=Gr(),vV=Kr(),jBr=vr().isPrimitive,cV=ae().isPrimitive,dV=sn(),hV=zt(),br=lr(),CBr=zo(),g3=cG(),Ni=Ke(),GBr=M(),Er=q(),lV=u3(),ar=624,f3=397,pV=hV>>>0,VBr=19650218>>>0,v3=2147483648>>>0,c3=2147483647>>>0,UBr=1812433253>>>0,HBr=1664525>>>0,WBr=1566083941>>>0,DBr=2636928640>>>0,zBr=4022730752>>>0,XBr=2567483615>>>0,l3=[0>>>0,XBr>>>0],yV=1/(dV+1),JBr=67108864>>>0,xBr=2147483648>>>0,p3=1>>>0,YBr=dV*yV,l0=1,p0=3,et=2,tt=ar+3,wr=ar+5,Rn=ar+6;function gV(r,e){var t;return e?t="option":t="argument",r.length<Rn+1?new RangeError(Er("invalid %s. `state` array has insufficient length.",t)):r[0]!==l0?new RangeError(Er("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,l0,r[0])):r[1]!==p0?new RangeError(Er("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,p0,r[1])):r[et]!==ar?new RangeError(Er("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ar,r[et])):r[tt]!==1?new RangeError(Er("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[tt])):r[wr]!==r.length-Rn?new RangeError(Er("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Rn,r[wr])):null}function mV(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=g3(t,UBr)+i>>>0;return r}function ZBr(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=CBr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=g3(n,HBr)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=g3(n,WBr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=xBr,r}function $Br(r){var e,t,i,n;for(n=ar-f3,t=0;t<n;t++)e=r[t]&v3|r[t+1]&c3,r[t]=r[t+f3]^e>>>1^l3[e&p3];for(i=ar-1;t<i;t++)e=r[t]&v3|r[t+1]&c3,r[t]=r[t-n]^e>>>1^l3[e&p3];return e=r[i]&v3|r[0]&c3,r[i]=r[f3-1]^e>>>1^l3[e&p3],r}function QBr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!BBr(r))throw new TypeError(Er("invalid argument. Options argument must be an object. Value: `%s`.",r));if(o3(r,"copy")&&(i.copy=r.copy,!jBr(r.copy)))throw new TypeError(Er("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(o3(r,"state")){if(t=r.state,i.state=!0,!vV(t))throw new TypeError(Er("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=gV(t,!0),u)throw u;i.copy===!1?e=t:(e=new br(t.length),Ni(t.length,t,1,e,1)),t=new br(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,ar),n=new br(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,t[wr])}if(n===void 0)if(o3(r,"seed"))if(n=r.seed,i.seed=!0,cV(n)){if(n>pV)throw new RangeError(Er("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(kBr(n)===!1||n.length<1)throw new TypeError(Er("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!cV(n))throw new TypeError(Er("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>pV)throw new RangeError(Er("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new br(Rn+a),e[0]=l0,e[1]=p0,e[et]=ar,e[tt]=1,e[tt+1]=ar,e[wr]=a,Ni.ndarray(a,n,1,0,e,1,wr+1),t=new br(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,ar),n=new br(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,a),t=mV(t,ar,VBr),t=ZBr(t,ar,n,a)}else n=lV()>>>0}else n=lV()>>>0;return t===void 0&&(e=new br(Rn+1),e[0]=l0,e[1]=p0,e[et]=ar,e[tt]=1,e[tt+1]=ar,e[wr]=1,e[wr+1]=n,t=new br(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,ar),n=new br(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,1),t=mV(t,ar,n)),oe(h,"NAME","mt19937"),rt(h,"seed",o),rt(h,"seedLength",v),fV(h,"state",l,p),rt(h,"stateLength",f),rt(h,"byteLength",c),oe(h,"toJSON",m),oe(h,"MIN",0),oe(h,"MAX",hV),oe(h,"normalized",d),oe(d,"NAME",h.NAME),rt(d,"seed",o),rt(d,"seedLength",v),fV(d,"state",l,p),rt(d,"stateLength",f),rt(d,"byteLength",c),oe(d,"toJSON",m),oe(d,"MIN",0),oe(d,"MAX",YBr),h;function o(){var g=e[wr];return Ni(g,n,1,new br(g),1)}function v(){return e[wr]}function f(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return Ni(g,e,1,new br(g),1)}function p(g){var y;if(!vV(g))throw new TypeError(Er("invalid argument. Must provide a Uint32Array. Value: `%s`.",g));if(y=gV(g,!1),y)throw y;i.copy===!1?i.state&&g.length===e.length?Ni(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new br(g.length)),Ni(g.length,g,1,e,1)),t=new br(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,ar),n=new br(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,e[wr])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=GBr(e),g.params=[],g}function h(){var g,y;return y=e[tt+1],y>=ar&&(t=$Br(t),y=0),g=t[y],e[tt+1]=y+1,g^=g>>>11,g^=g<<7&DBr,g^=g<<15&zBr,g^=g>>>18,g>>>0}function d(){var g=h()>>>5,y=h()>>>6;return(g*JBr+y)*yV}}qV.exports=QBr});var wV=s((O2e,bV)=>{"use strict";var KBr=m3(),rkr=u3(),ekr=KBr({seed:rkr()});bV.exports=ekr});var X=s((S2e,NV)=>{"use strict";var tkr=w(),EV=wV(),ikr=m3();tkr(EV,"factory",ikr);NV.exports=EV});var TV=s((T2e,SV)=>{"use strict";var AV=j().isPrimitive,d3=q(),OV=sr();function nkr(r,e){return!AV(r)||OV(r)?new TypeError(d3("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!AV(e)||OV(e)?new TypeError(d3("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(d3("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}SV.exports=nkr});var _V=s((I2e,IV)=>{"use strict";var akr=W(),skr=Tt(),ukr=Xa();function okr(r,e,t){return e+akr(skr(ukr*r()),2)*(t-e)}IV.exports=okr});var h3=s((_2e,jV)=>{"use strict";var fe=w(),g0=R(),LV=F(),PV=I(),RV=_(),FV=O(),MV=S(),fkr=k(),m0=X().factory,BV=E(),vkr=M(),d0=q(),ckr=TV(),kV=_V();function lkr(){var r,e,t,i,n,a;if(arguments.length===0)e=m0();else if(arguments.length===1){if(r=arguments[0],!PV(r))throw new TypeError(d0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(FV(r,"prng")){if(!RV(r.prng))throw new TypeError(d0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=m0(r)}else{if(n=arguments[0],a=arguments[1],i=ckr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!PV(r))throw new TypeError(d0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(FV(r,"prng")){if(!RV(r.prng))throw new TypeError(d0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=m0(r)}else e=m0()}return n===void 0?t=h:t=m,fe(t,"NAME","arcsine"),r&&r.prng?(fe(t,"seed",null),fe(t,"seedLength",null),LV(t,"state",MV(null),fkr),fe(t,"stateLength",null),fe(t,"byteLength",null),fe(t,"toJSON",MV(null)),fe(t,"PRNG",e)):(g0(t,"seed",u),g0(t,"seedLength",o),LV(t,"state",c,l),g0(t,"stateLength",v),g0(t,"byteLength",f),fe(t,"toJSON",p),fe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=vkr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return kV(e,n,a)}function h(d,g){return BV(d)||BV(g)||d>=g?NaN:kV(e,d,g)}}jV.exports=lkr});var GV=s((L2e,CV)=>{"use strict";var pkr=h3(),gkr=pkr();CV.exports=gkr});var HV=s((P2e,UV)=>{"use strict";var mkr=w(),VV=GV(),dkr=h3();mkr(VV,"factory",dkr);UV.exports=VV});var y3=s((R2e,xV)=>{"use strict";var ve=w(),h0=R(),WV=F(),DV=I(),hkr=qn().isPrimitive,zV=_(),XV=O(),JV=S(),ykr=k(),y0=X().factory,qkr=E(),bkr=M(),q0=q();function wkr(){var r,e,t,i;if(arguments.length===0)e=y0();else if(arguments.length===1&&DV(arguments[0]))if(r=arguments[0],XV(r,"prng")){if(!zV(r.prng))throw new TypeError(q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=y0(r);else{if(i=arguments[0],!hkr(i))throw new TypeError(q0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!DV(r))throw new TypeError(q0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(XV(r,"prng")){if(!zV(r.prng))throw new TypeError(q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=y0(r)}else e=y0()}return i===void 0?t=p:t=l,ve(t,"NAME","bernoulli"),r&&r.prng?(ve(t,"seed",null),ve(t,"seedLength",null),WV(t,"state",JV(null),ykr),ve(t,"stateLength",null),ve(t,"byteLength",null),ve(t,"toJSON",JV(null)),ve(t,"PRNG",e)):(h0(t,"seed",n),h0(t,"seedLength",a),WV(t,"state",v,f),h0(t,"stateLength",u),h0(t,"byteLength",o),ve(t,"toJSON",c),ve(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=bkr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return qkr(m)||m<0||m>1?NaN:e()<=m?1:0}}xV.exports=wkr});var ZV=s((F2e,YV)=>{"use strict";var Ekr=y3(),Nkr=Ekr();YV.exports=Nkr});var KV=s((M2e,QV)=>{"use strict";var Akr=w(),$V=ZV(),Okr=y3();Akr($V,"factory",Okr);QV.exports=$V});var iU=s((B2e,tU)=>{"use strict";var Skr=C(),rU=nr(),Tkr=P(),eU=.00991256303526217;function Ikr(r,e){var t,i,n;for(i=rU(-.5*e*e),t=[],t.push(eU/i),t.push(e),n=2;n<r;n++)t[n]=Skr(-2*Tkr(eU/t[n-1]+i)),i=rU(-.5*t[n]*t[n]);return t.push(0),t}tU.exports=Ikr});var aU=s((k2e,nU)=>{"use strict";function _kr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}nU.exports=_kr});var oU=s((j2e,uU)=>{"use strict";var sU=P();function Lkr(r,e,t){var i,n;do i=sU(r())/e,n=sU(r());while(-2*n<i*i);return t?i-e:e-i}uU.exports=Lkr});var lU=s((C2e,cU)=>{"use strict";var Pkr=Y(),fU=nr(),Rkr=iU(),Fkr=aU(),Mkr=oU(),Bkr=128,vU=3.442619855899,Wt=Rkr(Bkr,vU),kkr=Fkr(Wt),jkr=127;function Ckr(r,e){return t;function t(){for(var i,n,a,u,o,v,f;;){if(o=2*r()-1,v=e()&jkr,Pkr(o)<kkr[v])return o*Wt[v];if(v===0)return Mkr(r,vU,o<0);if(u=o*Wt[v],a=u*u,f=v+1,i=fU(-.5*(Wt[v]*Wt[v]-a)),n=fU(-.5*(Wt[f]*Wt[f]-a)),n+r()*(i-n)<1)return u}}}cU.exports=Ckr});var b3=s((G2e,mU)=>{"use strict";var it=w(),b0=R(),pU=F(),Gkr=_(),Vkr=I(),Ukr=vr().isPrimitive,w0=O(),Hkr=Kr(),q3=X().factory,gU=S(),Wkr=k(),Dkr=Q(),zkr=zt(),Xkr=M(),Fn=q(),Jkr=lU();function xkr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!Vkr(r))throw new TypeError(Fn("invalid argument. Must provide an object. Value: `%s`.",r));if(w0(r,"copy")&&(n.copy=r.copy,!Ukr(r.copy)))throw new TypeError(Fn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(w0(r,"prng")){if(!Gkr(r.prng))throw new TypeError(Fn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(w0(r,"state")){if(n.state=r.state,!Hkr(r.state))throw new TypeError(Fn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(w0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Fn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=q3(n),e=t.normalized):(t=q3({seed:Dkr(1+zkr*e()),copy:n.copy}),n.seed=null):(t=q3(n),e=t.normalized),i=Jkr(e,t),it(i,"NAME","improved-ziggurat"),n.seed===null?(it(i,"seed",null),it(i,"seedLength",null)):(b0(i,"seed",a),b0(i,"seedLength",u)),r&&r.prng?(pU(i,"state",gU(null),Wkr),it(i,"stateLength",null),it(i,"byteLength",null),it(i,"toJSON",gU(null))):(pU(i,"state",f,c),b0(i,"stateLength",o),b0(i,"byteLength",v),it(i,"toJSON",l)),it(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=Xkr(t.state),p.params=[],p}}mU.exports=xkr});var hU=s((V2e,dU)=>{"use strict";var Ykr=b3(),Zkr=Ykr();dU.exports=Zkr});var nt=s((U2e,qU)=>{"use strict";var $kr=w(),yU=hU(),Qkr=b3();$kr(yU,"factory",Qkr);qU.exports=yU});var wU=s((H2e,bU)=>{"use strict";var Kkr=_(),rjr=Kkr(Object.assign);bU.exports=rjr});var NU=s((W2e,EU)=>{"use strict";var ejr=Object.assign;EU.exports=ejr});var OU=s((D2e,AU)=>{"use strict";var tjr=typeof Object.getOwnPropertySymbols<"u";AU.exports=tjr});var IU=s((z2e,TU)=>{"use strict";var SU=xt(),ijr=SU.getOwnPropertySymbols;function njr(r){return ijr(SU(r))}TU.exports=njr});var LU=s((X2e,_U)=>{"use strict";function ajr(){return[]}_U.exports=ajr});var RU=s((J2e,PU)=>{"use strict";var sjr=OU(),ujr=IU(),ojr=LU(),w3;sjr?w3=ujr:w3=ojr;PU.exports=w3});var MU=s((x2e,FU)=>{"use strict";var fjr=Jt(),vjr=RU(),cjr=zi();function ljr(r){var e,t,i;for(e=fjr(r),t=vjr(r),i=0;i<t.length;i++)cjr(r,t[i])&&e.push(t[i]);return e}FU.exports=ljr});var kU=s((Y2e,BU)=>{"use strict";var pjr=MU();BU.exports=pjr});var GU=s((Z2e,CU)=>{"use strict";var gjr=kU(),jU=xt(),mjr=q();function djr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(mjr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=jU(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=gjr(jU(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}CU.exports=djr});var Mn=s(($2e,VU)=>{"use strict";var hjr=wU(),yjr=NU(),qjr=GU(),E3;hjr?E3=yjr:E3=qjr;VU.exports=E3});var DU=s((Q2e,WU)=>{"use strict";var UU=D().isPrimitive,HU=q();function bjr(r,e){return UU(r)?UU(e)?null:new TypeError(HU("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(HU("invalid argument. First argument must be a positive number. Value: `%s`.",r))}WU.exports=bjr});var YU=s((K2e,xU)=>{"use strict";var zU=P(),XU=C(),wjr=W(),JU=1/3;function Ejr(r,e,t){var i,n,a,u,o,v,f,c,l,p;for(t<1?(v=t+1-JU,o=1/XU(9*v),c=wjr(r(),1/t)):(v=t-JU,o=1/XU(9*v),c=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,n=f*f,a=1-.331*n*n,u=.5*n+v*(1-p+zU(p)),l=r(),(l<a||zU(l)<u)&&(i=!1)}return v*p*c}xU.exports=Ejr});var QU=s((r1e,$U)=>{"use strict";var N3=W(),ZU=P();function Njr(r,e,t){var i,n,a,u,o,v,f,c;for(a=t-1,o=N3(a+a,.5),i=!0;i===!0;)u=e(),f=.5*(1+u/o),f>=0&&f<=1&&(v=r(),n=N3(u,4),c=8*t-12,c=1-n/c,v<=c?i=!1:(c+=.5*N3(n/(8*t-8),2),v<c&&(c=a*ZU(4*f*(1-f)),c+=u*u/2,c>=ZU(v)&&(i=!1))));return f}$U.exports=Njr});var rH=s((e1e,KU)=>{"use strict";var Ajr=W(),E0=P();function Ojr(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h;for(o=t-1,v=i-1,f=o+v,c=f*E0(f),u=o/f,n=.5/Ajr(f,.5),a=!0;a===!0;)l=e(),m=u+l*n,m>=0&&m<=1&&(p=r(),h=o*E0(m/o),h+=v*E0((1-m)/v),h+=c+.5*l*l,h>=E0(p)&&(a=!1));return m}KU.exports=Ojr});var iH=s((t1e,tH)=>{"use strict";var A3=nr(),eH=W(),O3=P();function Sjr(r,e,t){for(var i,n,a,u,o,v,f;;)if(u=r(),o=r(),v=eH(u,1/e),f=eH(o,1/t),a=v+f,a<=1)return a>0?v/a:(i=O3(u)/e,n=O3(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),A3(i-O3(A3(i)+A3(n))))}tH.exports=Sjr});var sH=s((i1e,aH)=>{"use strict";var nH=YU(),Tjr=QU(),Ijr=rH(),_jr=iH();function Ljr(r,e,t,i){var n,a;return t===i&&t>1.5?Tjr(r,e,t):t>1&&i>1?Ijr(r,e,t,i):t<1&&i<1?_jr(r,t,i):(n=nH(r,e,t),a=nH(r,e,i),n/(n+a))}aH.exports=Ljr});var _3=s((n1e,dH)=>{"use strict";var ce=w(),N0=R(),uH=F(),oH=I(),fH=vr().isPrimitive,vH=_(),Ai=O(),cH=S(),Pjr=k(),lH=nt().factory,A0=X().factory,pH=E(),S3=Ke(),T3=lr(),I3=Kr(),gH=Mn(),Rjr=M(),le=q(),Fjr=DU(),mH=sH();function Mjr(){var r,e,t,i,n,a,u,o,v;if(o=!0,arguments.length===0)n={copy:!1},a=A0(n);else if(arguments.length===1){if(n=arguments[0],!oH(n))throw new TypeError(le("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ai(n,"copy")&&!fH(n.copy))throw new TypeError(le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ai(n,"prng")){if(!vH(n.prng))throw new TypeError(le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ai(n,"state")&&!I3(n.state))throw new TypeError(le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=gH({},n),n.copy===!1?o=!1:n.state&&(n.state=S3(n.state.length,n.state,1,new T3(n.state.length),1)),n.copy=!1,a=A0(n)}}else{if(t=arguments[0],i=arguments[1],v=Fjr(t,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!oH(n))throw new TypeError(le("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ai(n,"copy")&&!fH(n.copy))throw new TypeError(le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ai(n,"prng")){if(!vH(n.prng))throw new TypeError(le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ai(n,"state")&&!I3(n.state))throw new TypeError(le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=gH({},n),n.copy===!1?o=!1:n.state&&(n.state=S3(n.state.length,n.state,1,new T3(n.state.length),1)),n.copy=!1,a=A0(n)}}else n={copy:!1},a=A0(n)}return n&&n.prng?e=lH({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=lH({state:r,copy:!1})),t===void 0?u=y:u=g,ce(u,"NAME","beta"),n&&n.prng?(ce(u,"seed",null),ce(u,"seedLength",null),uH(u,"state",cH(null),Pjr),ce(u,"stateLength",null),ce(u,"byteLength",null),ce(u,"toJSON",cH(null)),ce(u,"PRNG",a)):(N0(u,"seed",f),N0(u,"seedLength",c),uH(u,"state",m,h),N0(u,"stateLength",l),N0(u,"byteLength",p),ce(u,"toJSON",d),ce(u,"PRNG",a),a=a.normalized),u;function f(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function m(){return a.state}function h(N){if(!I3(N))throw new TypeError(le("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=S3(N.length,N,1,new T3(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=Rjr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function g(){return mH(a,e,t,i)}function y(N,A){return pH(N)||pH(A)||N<=0||A<=0?NaN:mH(a,e,N,A)}}dH.exports=Mjr});var yH=s((a1e,hH)=>{"use strict";var Bjr=_3(),kjr=Bjr();hH.exports=kjr});var wH=s((s1e,bH)=>{"use strict";var jjr=w(),qH=yH(),Cjr=_3();jjr(qH,"factory",Cjr);bH.exports=qH});var OH=s((u1e,AH)=>{"use strict";var EH=D().isPrimitive,NH=q();function Gjr(r,e){return EH(r)?EH(e)?null:new TypeError(NH("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(NH("invalid argument. First argument must be a positive number. Value: `%s`.",r))}AH.exports=Gjr});var IH=s((o1e,TH)=>{"use strict";var SH=P();function Vjr(r,e,t,i,n){var a,u,o,v,f,c,l;for(a=!0;a;){do f=e(),l=1+n*f;while(l<=0);l*=l*l,u=f*f,o=1-.331*u*u,v=.5*u+i*(1-l+SH(l)),c=r(),(c<o||SH(c)<v)&&(a=!1)}return 1/t*i*l}TH.exports=Vjr});var M3=s((f1e,CH)=>{"use strict";var pe=w(),O0=R(),_H=F(),LH=I(),L3=Kr(),PH=vr().isPrimitive,RH=_(),Oi=O(),FH=S(),Ujr=k(),MH=nt().factory,S0=X().factory,BH=E(),P3=C(),kH=W(),R3=Ke(),F3=lr(),Hjr=M(),jH=Mn(),ge=q(),Wjr=OH(),T0=IH(),I0=1/3;function Djr(){var r,e,t,i,n,a,u,o,v,f,c;if(o=!0,arguments.length===0)n={copy:!1},a=S0(n);else if(arguments.length===1){if(n=arguments[0],!LH(n))throw new TypeError(ge("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Oi(n,"copy")&&!PH(n.copy))throw new TypeError(ge("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Oi(n,"prng")){if(!RH(n.prng))throw new TypeError(ge("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Oi(n,"state")&&!L3(n.state))throw new TypeError(ge("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=jH({},n),n.copy===!1?o=!1:n.state&&(n.state=R3(n.state.length,n.state,1,new F3(n.state.length),1)),n.copy=!1,a=S0(n)}}else{if(e=arguments[0],i=arguments[1],v=Wjr(e,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!LH(n))throw new TypeError(ge("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Oi(n,"copy")&&!PH(n.copy))throw new TypeError(ge("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Oi(n,"prng")){if(!RH(n.prng))throw new TypeError(ge("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Oi(n,"state")&&!L3(n.state))throw new TypeError(ge("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=jH({},n),n.copy===!1?o=!1:n.state&&(n.state=R3(n.state.length,n.state,1,new F3(n.state.length),1)),n.copy=!1,a=S0(n)}}else n={copy:!1},a=S0(n)}return n&&n.prng?t=MH({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=MH({state:r,copy:!1})),e===void 0?u=V:(e>=1?(u=N,c=e-I0):(u=A,c=e+1-I0),f=1/P3(9*c)),pe(u,"NAME","gamma"),n&&n.prng?(pe(u,"seed",null),pe(u,"seedLength",null),_H(u,"state",FH(null),Ujr),pe(u,"stateLength",null),pe(u,"byteLength",null),pe(u,"toJSON",FH(null)),pe(u,"PRNG",a)):(O0(u,"seed",l),O0(u,"seedLength",p),_H(u,"state",d,g),O0(u,"stateLength",m),O0(u,"byteLength",h),pe(u,"toJSON",y),pe(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function m(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function g(T){if(!L3(T))throw new TypeError(ge("invalid argument. Must provide a Uint32Array. Value: `%s`.",T));o&&(T=R3(T.length,T,1,new F3(T.length),1)),a.state=T}function y(){var T={};return T.type="PRNG",T.name=u.NAME,T.state=Hjr(a.state),e===void 0?T.params=[]:T.params=[e,i],T}function N(){return T0(a,t,i,c,f)}function A(){return T0(a,t,i,c,f)*kH(a(),1/e)}function V(T,J){var fr,z;return BH(T)||BH(J)||T<=0||J<=0?NaN:T<1?(z=T+1-I0,fr=1/P3(9*z),T0(a,t,J,z,fr)*kH(a(),1/T)):(z=T-I0,fr=1/P3(9*z),T0(a,t,J,z,fr))}}CH.exports=Djr});var VH=s((v1e,GH)=>{"use strict";var zjr=M3(),Xjr=zjr();GH.exports=Xjr});var Si=s((c1e,HH)=>{"use strict";var Jjr=w(),UH=VH(),xjr=M3();Jjr(UH,"factory",xjr);HH.exports=UH});var XH=s((l1e,zH)=>{"use strict";var WH=D().isPrimitive,DH=q();function Yjr(r,e){return WH(r)?WH(e)?null:new TypeError(DH("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(DH("invalid argument. First argument must be a positive number. Value: `%s`.",r))}zH.exports=Yjr});var xH=s((p1e,JH)=>{"use strict";function Zjr(r,e,t){return r(e,1)/r(t,1)}JH.exports=Zjr});var B3=s((g1e,eW)=>{"use strict";var at=w(),_0=R(),YH=F(),ZH=I(),$H=S(),$jr=k(),L0=Si().factory,QH=E(),Qjr=M(),KH=q(),Kjr=XH(),rW=xH();function rCr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=L0();else if(arguments.length===1){if(i=arguments[0],!ZH(i))throw new TypeError(KH("invalid argument. Options argument must be an object. Value: `%s`.",i));r=L0(i)}else{if(e=arguments[0],t=arguments[1],u=Kjr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!ZH(i))throw new TypeError(KH("invalid argument. Options argument must be an object. Value: `%s`.",i));r=L0(i)}else r=L0()}return e===void 0?a=d:a=h,n=r.PRNG,at(a,"NAME","betaprime"),i&&i.prng?(at(a,"seed",null),at(a,"seedLength",null),YH(a,"state",$H(null),$jr),at(a,"stateLength",null),at(a,"byteLength",null),at(a,"toJSON",$H(null))):(_0(a,"seed",o),_0(a,"seedLength",v),YH(a,"state",l,p),_0(a,"stateLength",f),_0(a,"byteLength",c),at(a,"toJSON",m)),at(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=Qjr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return rW(r,e,t)}function d(g,y){return QH(g)||QH(y)||g<=0||y<=0?NaN:rW(r,g,y)}}eW.exports=rCr});var iW=s((m1e,tW)=>{"use strict";var eCr=B3(),tCr=eCr();tW.exports=tCr});var sW=s((d1e,aW)=>{"use strict";var iCr=w(),nW=iW(),nCr=B3();iCr(nW,"factory",nCr);aW.exports=nW});var oW=s((h1e,uW)=>{"use strict";var aCr=Q();function sCr(r){return aCr(r)===r&&r>0}uW.exports=sCr});var k3=s((y1e,fW)=>{"use strict";var uCr=oW();fW.exports=uCr});var cW=s((q1e,vW)=>{"use strict";function oCr(r){return r>=0&&r<=1}vW.exports=oCr});var pW=s((b1e,lW)=>{"use strict";var fCr=cW();lW.exports=fCr});var dW=s((w1e,mW)=>{"use strict";var vCr=ae().isPrimitive,cCr=qn().isPrimitive,gW=q();function lCr(r,e){return vCr(r)?cCr(e)?null:new TypeError(gW("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(gW("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}mW.exports=lCr});var yW=s((E1e,hW)=>{"use strict";function pCr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}hW.exports=pCr});var bW=s((N1e,qW)=>{"use strict";var gCr=E();function mCr(r){return r===0||gCr(r)?r:r<0?-1:1}qW.exports=mCr});var P0=s((A1e,wW)=>{"use strict";var dCr=bW();wW.exports=dCr});var NW=s((O1e,EW)=>{"use strict";var hCr=W(),yCr=1/12,qCr=1/360,bCr=1/1260;function wCr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=hCr(r,2),(yCr-(qCr-bCr/e)/e)/r}}EW.exports=wCr});var OW=s((S1e,AW)=>{"use strict";var j3=Q(),ECr=P0(),NCr=C(),C3=Y(),R0=P(),F0=NW(),ACr=1/6;function OCr(r,e,t){var i,n,a,u,o,v,f,c,l,p,m,h,d,g,y,N,A,V,T,J,fr,z,cu,zr,gr,Hn;for(J=j3((e+1)*t),f=e-J+1,fr=1-t,z=t/fr,c=(e+1)*z,u=e*t*fr,a=NCr(u),g=1.15+2.53*a,d=-.0873+.0248*g+.01*t,y=e*t+.5,i=(2.83+5.1/g)*a,h=.92-4.2/g,n=.86*h,A=(J+.5)*R0((J+1)/(z*f)),A+=F0(J)+F0(e-J);;){if(gr=r(),gr<=n)return zr=gr/h-.43,z=zr*(2*d/(.5-C3(zr))+g)+y,j3(z);if(gr>=h?zr=r()-.5:(zr=gr/h-.93,zr=ECr(zr)*.5-zr,gr=h*r()),l=.5-C3(zr),T=j3(zr*(2*d/l+g)+y),!(T<0||T>e))if(gr=gr*i/(d/(l*l)+g),p=C3(T-J),p>15){if(gr=R0(gr),o=p/u,v=(p/3+.625)*p,v+=ACr,v/=u,o*=v+.5,cu=-(p*p)/(2*u),gr<cu-o||gr<=cu+o&&(m=e-T+1,Hn=A+(e+1)*R0(f/m),Hn+=(T+.5)*R0(m*z/(T+1)),Hn+=-(F0(T)+F0(e-T)),gr<=Hn))return T}else{if(N=1,J<T)for(V=J;V<=T;V++)N*=c/V-z;else if(J>T)for(V=T;V<=J;V++)gr*=c/V-z;if(gr<=N)return T}}}AW.exports=OCr});var IW=s((T1e,TW)=>{"use strict";var SCr=yW(),TCr=OW();function SW(r,e,t){return t>.5?e-SW(r,e,1-t):e*t<10?SCr(r,e,t):TCr(r,e,t)}TW.exports=SW});var G3=s((I1e,kW)=>{"use strict";var me=w(),M0=R(),_W=F(),LW=I(),PW=_(),RW=O(),FW=S(),ICr=k(),MW=E(),_Cr=k3(),LCr=pW(),B0=X().factory,PCr=M(),k0=q(),RCr=dW(),BW=IW();function FCr(){var r,e,t,i,n,a;if(arguments.length===0)e=B0();else if(arguments.length===1){if(r=arguments[0],!LW(r))throw new TypeError(k0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(RW(r,"prng")){if(!PW(r.prng))throw new TypeError(k0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=B0(r)}else{if(n=arguments[0],a=arguments[1],i=RCr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!LW(r))throw new TypeError(k0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(RW(r,"prng")){if(!PW(r.prng))throw new TypeError(k0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=B0(r)}else e=B0()}return n===void 0?t=h:t=m,me(t,"NAME","binomial"),r&&r.prng?(me(t,"seed",null),me(t,"seedLength",null),_W(t,"state",FW(null),ICr),me(t,"stateLength",null),me(t,"byteLength",null),me(t,"toJSON",FW(null)),me(t,"PRNG",e)):(M0(t,"seed",u),M0(t,"seedLength",o),_W(t,"state",c,l),M0(t,"stateLength",v),M0(t,"byteLength",f),me(t,"toJSON",p),me(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=PCr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return BW(e,n,a)}function h(d,g){return MW(d)||MW(g)||!_Cr(d)||!LCr(g)?NaN:BW(e,d,g)}}kW.exports=FCr});var CW=s((_1e,jW)=>{"use strict";var MCr=G3(),BCr=MCr();jW.exports=BCr});var UW=s((L1e,VW)=>{"use strict";var kCr=w(),GW=CW(),jCr=G3();kCr(GW,"factory",jCr);VW.exports=GW});var WW=s((P1e,HW)=>{"use strict";var CCr=C(),GCr=P(),VCr=Tt(),UCr=St(),HCr=We();function WCr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=CCr(-2*GCr(n)),o=HCr*a,t=u*UCr(o),e=!1,u*VCr(o)}return e=!0,t}}HW.exports=WCr});var zW=s((R1e,DW)=>{"use strict";var DCr=C(),zCr=P(),XCr=St(),JCr=_r(),xCr=XCr(JCr);function YCr(r){var e=DCr(-2*zCr(r));return e*xCr}DW.exports=YCr});var JW=s((F1e,XW)=>{"use strict";var ZCr=C(),$Cr=P(),QCr=St(),KCr=We();function rGr(r){var e=ZCr(-2*$Cr(r)),t=KCr*r;return e*QCr(t)}XW.exports=rGr});var V3=s((M1e,$W)=>{"use strict";var kr=w(),j0=R(),xW=F(),eGr=I(),tGr=_(),iGr=vr().isPrimitive,Bn=O(),nGr=Kr(),YW=X().factory,ZW=S(),aGr=k(),sGr=M(),kn=q(),uGr=WW(),oGr=zW(),fGr=JW();function vGr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!eGr(r))throw new TypeError(kn("invalid argument. Must provide an object. Value: `%s`.",r));if(Bn(r,"copy")&&(n.copy=r.copy,!iGr(r.copy)))throw new TypeError(kn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Bn(r,"prng")){if(!tGr(r.prng))throw new TypeError(kn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Bn(r,"state")){if(n.state=r.state,!nGr(r.state))throw new TypeError(kn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Bn(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(kn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=YW(n),e=i.normalized):n.seed=null:(i=YW(n),e=i.normalized),t=uGr(e),kr(t,"NAME","box-muller"),n.seed===null?(kr(t,"seed",null),kr(t,"seedLength",null)):(j0(t,"seed",a),j0(t,"seedLength",u)),r&&r.prng?(xW(t,"state",ZW(null),aGr),kr(t,"stateLength",null),kr(t,"byteLength",null),kr(t,"toJSON",ZW(null))):(xW(t,"state",f,c),j0(t,"stateLength",o),j0(t,"byteLength",v),kr(t,"toJSON",l)),kr(t,"PRNG",e),Bn(e,"MIN")?(kr(t,"MIN",oGr(e.MIN)),kr(t,"MAX",fGr(e.MIN))):(kr(t,"MIN",null),kr(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=sGr(i.state),p.params=[],p}}$W.exports=vGr});var KW=s((B1e,QW)=>{"use strict";var cGr=V3(),lGr=cGr();QW.exports=lGr});var tD=s((k1e,eD)=>{"use strict";var pGr=w(),rD=KW(),gGr=V3();pGr(rD,"factory",gGr);eD.exports=rD});var aD=s((j1e,nD)=>{"use strict";var mGr=j().isPrimitive,dGr=D().isPrimitive,iD=q(),hGr=sr();function yGr(r,e){return!mGr(r)||hGr(r)?new TypeError(iD("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):dGr(e)?null:new TypeError(iD("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}nD.exports=yGr});var uD=s((C1e,sD)=>{"use strict";var qGr=V2(),bGr=_r();function wGr(r,e,t){return e+t*qGr(bGr*(r()-.5))}sD.exports=wGr});var U3=s((G1e,mD)=>{"use strict";var st=w(),C0=R(),oD=F(),fD=I(),vD=_(),cD=O(),lD=S(),EGr=k(),pD=E(),Ti=nt().factory,NGr=M(),G0=q(),AGr=aD(),gD=uD();function OGr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Ti();else if(arguments.length===1){if(t=arguments[0],!fD(t))throw new TypeError(G0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(cD(t,"prng")){if(!vD(t.prng))throw new TypeError(G0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ti({prng:t.prng})}else e=Ti(t)}else{if(u=arguments[0],r=arguments[1],a=AGr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!fD(t))throw new TypeError(G0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(cD(t,"prng")){if(!vD(t.prng))throw new TypeError(G0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ti({prng:t.prng})}else e=Ti(t)}else e=Ti()}return u===void 0?n=d:n=h,i=e.PRNG,st(n,"NAME","cauchy"),t&&t.prng?(st(n,"seed",null),st(n,"seedLength",null),oD(n,"state",lD(null),EGr),st(n,"stateLength",null),st(n,"byteLength",null),st(n,"toJSON",lD(null))):(C0(n,"seed",o),C0(n,"seedLength",v),oD(n,"state",l,p),C0(n,"stateLength",f),C0(n,"byteLength",c),st(n,"toJSON",m)),st(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=NGr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return gD(e,u,r)}function d(g,y){return pD(g)||pD(y)||y<=0?NaN:gD(e,g,y)}}mD.exports=OGr});var hD=s((V1e,dD)=>{"use strict";var SGr=U3(),TGr=SGr();dD.exports=TGr});var bD=s((U1e,qD)=>{"use strict";var IGr=w(),yD=hD(),_Gr=U3();IGr(yD,"factory",_Gr);qD.exports=yD});var H3=s((H1e,SD)=>{"use strict";var ut=w(),V0=R(),wD=F(),LGr=D().isPrimitive,ED=I(),ND=_(),AD=O(),OD=S(),PGr=k(),RGr=E(),Ii=Si().factory,FGr=M(),U0=q();function MGr(){var r,e,t,i,n;if(arguments.length===0)r=Ii();else if(arguments.length===1&&ED(arguments[0]))if(t=arguments[0],AD(t,"prng")){if(!ND(t.prng))throw new TypeError(U0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ii({prng:t.prng})}else r=Ii(t);else{if(n=arguments[0],!LGr(n))throw new TypeError(U0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!ED(t))throw new TypeError(U0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(AD(t,"prng")){if(!ND(t.prng))throw new TypeError(U0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ii(n/2,.5,{prng:t.prng})}else r=Ii(n/2,.5,t)}else r=Ii(n/2,.5)}return n===void 0?i=m:i=p,e=r.PRNG,ut(i,"NAME","chisquare"),t&&t.prng?(ut(i,"seed",null),ut(i,"seedLength",null),wD(i,"state",OD(null),PGr),ut(i,"stateLength",null),ut(i,"byteLength",null),ut(i,"toJSON",OD(null))):(V0(i,"seed",a),V0(i,"seedLength",u),wD(i,"state",f,c),V0(i,"stateLength",o),V0(i,"byteLength",v),ut(i,"toJSON",l)),ut(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=FGr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function m(h){return RGr(h)||h<=0?NaN:r(h/2,.5)}}SD.exports=MGr});var ID=s((W1e,TD)=>{"use strict";var BGr=H3(),kGr=BGr();TD.exports=kGr});var jn=s((D1e,LD)=>{"use strict";var jGr=w(),_D=ID(),CGr=H3();jGr(_D,"factory",CGr);LD.exports=_D});var W3=s((z1e,jD)=>{"use strict";var ot=w(),H0=R(),PD=F(),GGr=D().isPrimitive,RD=I(),FD=_(),MD=O(),BD=S(),VGr=k(),UGr=E(),_i=jn().factory,HGr=M(),kD=C(),W0=q();function WGr(){var r,e,t,i,n;if(arguments.length===0)r=_i();else if(arguments.length===1&&RD(arguments[0]))if(t=arguments[0],MD(t,"prng")){if(!FD(t.prng))throw new TypeError(W0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=_i({prng:t.prng})}else r=_i(t);else{if(n=arguments[0],!GGr(n))throw new TypeError(W0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!RD(t))throw new TypeError(W0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(MD(t,"prng")){if(!FD(t.prng))throw new TypeError(W0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=_i(n,{prng:t.prng})}else r=_i(n,t)}else r=_i(n)}return n===void 0?i=m:i=p,e=r.PRNG,ot(i,"NAME","chi"),t&&t.prng?(ot(i,"seed",null),ot(i,"seedLength",null),PD(i,"state",BD(null),VGr),ot(i,"stateLength",null),ot(i,"byteLength",null),ot(i,"toJSON",BD(null))):(H0(i,"seed",a),H0(i,"seedLength",u),PD(i,"state",f,c),H0(i,"stateLength",o),H0(i,"byteLength",v),ot(i,"toJSON",l)),ot(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=HGr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return kD(r())}function m(h){return UGr(h)||h<=0?NaN:kD(r(h))}}jD.exports=WGr});var GD=s((X1e,CD)=>{"use strict";var DGr=W3(),zGr=DGr();CD.exports=zGr});var HD=s((J1e,UD)=>{"use strict";var XGr=w(),VD=GD(),JGr=W3();XGr(VD,"factory",JGr);UD.exports=VD});var zD=s((x1e,DD)=>{"use strict";var xGr=j().isPrimitive,YGr=D().isPrimitive,WD=q(),ZGr=sr();function $Gr(r,e){return!xGr(r)||ZGr(r)?new TypeError(WD("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):YGr(e)?null:new TypeError(WD("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}DD.exports=$Gr});var JD=s((Y1e,XD)=>{"use strict";var D3=E(),QGr=Ki(),KGr=_r();function rVr(r,e,t){var i;return D3(r)||D3(e)||D3(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+QGr(i)/KGr)/2)}XD.exports=rVr});var YD=s((Z1e,xD)=>{"use strict";var eVr=S(),tVr=Ta().factory,z3=E(),iVr=Ki(),nVr=_r();function aVr(r,e){if(z3(r)||z3(e)||e<0)return eVr(NaN);if(e===0)return tVr(r);return t;function t(i){var n;return z3(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+iVr(n)/nVr)/2)}}xD.exports=aVr});var QD=s(($1e,$D)=>{"use strict";var sVr=w(),ZD=JD(),uVr=YD();sVr(ZD,"factory",uVr);$D.exports=ZD});var X3=s((Q1e,KD)=>{"use strict";var oVr=QD(),fVr=1e4,vVr=1e-12;function cVr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<fVr;){if(u=(i+n)/2,n-i<vVr)return u;a=oVr(u,e,t),r>a?i=u:n=u,o+=1}return u}KD.exports=cVr});var ez=s((K1e,rz)=>{"use strict";var J3=E(),lVr=X3();function pVr(r,e,t){return J3(e)||J3(t)||J3(r)||t<0||r<0||r>1?NaN:t===0?e:lVr(r,e,t)}rz.exports=pVr});var iz=s((r3e,tz)=>{"use strict";var gVr=S(),mVr=Y1().factory,x3=E(),dVr=X3();function hVr(r,e){if(x3(r)||x3(e)||e<0)return gVr(NaN);if(e===0)return mVr(r);return t;function t(i){return x3(i)||i<0||i>1?NaN:dVr(i,r,e)}}tz.exports=hVr});var sz=s((e3e,az)=>{"use strict";var yVr=w(),nz=ez(),qVr=iz();yVr(nz,"factory",qVr);az.exports=nz});var oz=s((t3e,uz)=>{"use strict";var bVr=sz();function wVr(r,e,t){return bVr(r(),e,t)}uz.exports=wVr});var Y3=s((i3e,dz)=>{"use strict";var de=w(),D0=R(),fz=F(),vz=I(),cz=_(),lz=O(),pz=S(),EVr=k(),z0=X().factory,gz=E(),NVr=M(),X0=q(),AVr=zD(),mz=oz();function OVr(){var r,e,t,i,n,a;if(arguments.length===0)e=z0();else if(arguments.length===1){if(r=arguments[0],!vz(r))throw new TypeError(X0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(lz(r,"prng")){if(!cz(r.prng))throw new TypeError(X0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=z0(r)}else{if(n=arguments[0],a=arguments[1],i=AVr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!vz(r))throw new TypeError(X0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(lz(r,"prng")){if(!cz(r.prng))throw new TypeError(X0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=z0(r)}else e=z0()}return n===void 0?t=h:t=m,de(t,"NAME","cosine"),r&&r.prng?(de(t,"seed",null),de(t,"seedLength",null),fz(t,"state",pz(null),EVr),de(t,"stateLength",null),de(t,"byteLength",null),de(t,"toJSON",pz(null)),de(t,"PRNG",e)):(D0(t,"seed",u),D0(t,"seedLength",o),fz(t,"state",c,l),D0(t,"stateLength",v),D0(t,"byteLength",f),de(t,"toJSON",p),de(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=NVr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return mz(e,n,a)}function h(d,g){return gz(d)||gz(g)||g<=0?NaN:mz(e,d,g)}}dz.exports=OVr});var yz=s((n3e,hz)=>{"use strict";var SVr=Y3(),TVr=SVr();hz.exports=TVr});var wz=s((a3e,bz)=>{"use strict";var IVr=w(),qz=yz(),_Vr=Y3();IVr(qz,"factory",_Vr);bz.exports=qz});var Oz=s((s3e,Az)=>{"use strict";var Ez=Cr().isPrimitive,Z3=q(),Nz=sr();function LVr(r,e){return!Ez(r)||Nz(r)?new TypeError(Z3("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!Ez(e)||Nz(e)?new TypeError(Z3("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(Z3("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}Az.exports=LVr});var Iz=s((u3e,Tz)=>{"use strict";var $3=sn(),Li=Q();function Sz(r,e,t){var i,n,a,u,o,v,f,c,l;if(a=t-e,a===0)return e;if(f=r.MIN,c=r.MAX,n=c-f,n===a)return r()-f+e;if(n<a)for(u=0;;){for(a===$3?(u=Li(a/(n+1)),a%(n+1)===n&&(u+=1)):u=Li((a+1)/(n+1)),i=0,v=1;v<=u;){if(i+=(r()-f)*v,v*n===a-v+1)return i;v*=n+1}if(l=Sz(r,0,Li(a/v)),!(l>$3/v)&&(l*=v,i+=l,!(i>a)))return i+e}for(n===$3?(o=Li(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Li((n+1)/(a+1));;)if(i=r()-f,i=Li(i/o),i<=a)return i+e}Tz.exports=Sz});var Q3=s((o3e,kz)=>{"use strict";var he=w(),J0=R(),_z=F(),Lz=I(),Pz=_(),Rz=O(),Fz=S(),PVr=k(),x0=X().factory,Mz=E(),Pi=Ir(),RVr=M(),ft=q(),FVr=Oz(),Bz=Iz();function MVr(){var r,e,t,i,n,a;if(arguments.length===0)e=x0();else if(arguments.length===1){if(r=arguments[0],!Lz(r))throw new TypeError(ft("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Rz(r,"prng")){if(!Pz(r.prng))throw new TypeError(ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Pi(e.MIN))throw new TypeError(ft("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Pi(e.MAX))throw new TypeError(ft("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=x0(r)}else{if(n=arguments[0],a=arguments[1],i=FVr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Lz(r))throw new TypeError(ft("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Rz(r,"prng")){if(!Pz(r.prng))throw new TypeError(ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Pi(e.MIN))throw new TypeError(ft("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Pi(e.MAX))throw new TypeError(ft("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=x0(r)}else e=x0()}return n===void 0?t=h:t=m,he(t,"NAME","discrete-uniform"),r&&r.prng?(he(t,"seed",null),he(t,"seedLength",null),_z(t,"state",Fz(null),PVr),he(t,"stateLength",null),he(t,"byteLength",null),he(t,"toJSON",Fz(null)),he(t,"PRNG",e)):(J0(t,"seed",u),J0(t,"seedLength",o),_z(t,"state",c,l),J0(t,"stateLength",v),J0(t,"byteLength",f),he(t,"toJSON",p),he(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=RVr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return Bz(e,n,a)}function h(d,g){return Mz(d)||Mz(g)||!Pi(d)||!Pi(g)||d>g?NaN:Bz(e,d,g)}}kz.exports=MVr});var Cz=s((f3e,jz)=>{"use strict";var BVr=Q3(),kVr=BVr();jz.exports=kVr});var Uz=s((v3e,Vz)=>{"use strict";var jVr=w(),Gz=Cz(),CVr=Q3();jVr(Gz,"factory",CVr);Vz.exports=Gz});var Dz=s((c3e,Wz)=>{"use strict";var GVr=D().isPrimitive,VVr=ae().isPrimitive,Hz=q();function UVr(r,e){return VVr(r)?GVr(e)?null:new TypeError(Hz("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Hz("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}Wz.exports=UVr});var Xz=s((l3e,zz)=>{"use strict";var HVr=P();function WVr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*HVr(i)}zz.exports=WVr});var K3=s((p3e,rX)=>{"use strict";var ye=w(),Y0=R(),Jz=F(),xz=I(),Yz=_(),Zz=O(),$z=S(),DVr=k(),Z0=X().factory,Qz=E(),zVr=k3(),XVr=M(),$0=q(),JVr=Dz(),Kz=Xz();function xVr(){var r,e,t,i,n,a;if(arguments.length===0)e=Z0();else if(arguments.length===1){if(t=arguments[0],!xz(t))throw new TypeError($0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Zz(t,"prng")){if(!Yz(t.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Z0(t)}else{if(a=arguments[0],r=arguments[1],n=JVr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!xz(t))throw new TypeError($0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Zz(t,"prng")){if(!Yz(t.prng))throw new TypeError($0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Z0(t)}else e=Z0()}return a===void 0?i=h:i=m,ye(i,"NAME","erlang"),t&&t.prng?(ye(i,"seed",null),ye(i,"seedLength",null),Jz(i,"state",$z(null),DVr),ye(i,"stateLength",null),ye(i,"byteLength",null),ye(i,"toJSON",$z(null)),ye(i,"PRNG",e)):(Y0(i,"seed",u),Y0(i,"seedLength",o),Jz(i,"state",c,l),Y0(i,"stateLength",v),Y0(i,"byteLength",f),ye(i,"toJSON",p),ye(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=XVr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return Kz(e,a,r)}function h(d,g){return Qz(d)||Qz(g)||!zVr(d)||g<=0?NaN:Kz(e,d,g)}}rX.exports=xVr});var tX=s((g3e,eX)=>{"use strict";var YVr=K3(),ZVr=YVr();eX.exports=ZVr});var aX=s((m3e,nX)=>{"use strict";var $Vr=w(),iX=tX(),QVr=K3();$Vr(iX,"factory",QVr);nX.exports=iX});var uX=s((d3e,sX)=>{"use strict";var KVr=P();function rUr(r,e){return-KVr(1-r())/e}sX.exports=rUr});var rf=s((h3e,gX)=>{"use strict";var qe=w(),Q0=R(),oX=F(),eUr=D().isPrimitive,fX=I(),vX=_(),cX=O(),lX=S(),tUr=k(),K0=X().factory,iUr=E(),nUr=M(),rs=q(),pX=uX();function aUr(){var r,e,t,i;if(arguments.length===0)t=K0();else if(arguments.length===1&&fX(arguments[0]))if(e=arguments[0],cX(e,"prng")){if(!vX(e.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=K0(e);else{if(r=arguments[0],!eUr(r))throw new TypeError(rs("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!fX(e))throw new TypeError(rs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(cX(e,"prng")){if(!vX(e.prng))throw new TypeError(rs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=K0(e)}else t=K0()}return r===void 0?i=p:i=l,qe(i,"NAME","exponential"),e&&e.prng?(qe(i,"seed",null),qe(i,"seedLength",null),oX(i,"state",lX(null),tUr),qe(i,"stateLength",null),qe(i,"byteLength",null),qe(i,"toJSON",lX(null)),qe(i,"PRNG",t)):(Q0(i,"seed",n),Q0(i,"seedLength",a),oX(i,"state",v,f),Q0(i,"stateLength",u),Q0(i,"byteLength",o),qe(i,"toJSON",c),qe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=nUr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return pX(t,r)}function p(m){return iUr(m)||m<=0?NaN:pX(t,m)}}gX.exports=aUr});var dX=s((y3e,mX)=>{"use strict";var sUr=rf(),uUr=sUr();mX.exports=uUr});var qX=s((q3e,yX)=>{"use strict";var oUr=w(),hX=dX(),fUr=rf();oUr(hX,"factory",fUr);yX.exports=hX});var NX=s((b3e,EX)=>{"use strict";var bX=D().isPrimitive,wX=q();function vUr(r,e){return bX(r)?bX(e)?null:new TypeError(wX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(wX("invalid argument. First argument must be a positive number. Value: `%s`.",r))}EX.exports=vUr});var OX=s((w3e,AX)=>{"use strict";function cUr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}AX.exports=cUr});var ef=s((E3e,FX)=>{"use strict";var vt=w(),es=R(),SX=F(),TX=I(),IX=_(),_X=O(),LX=S(),lUr=k(),Ri=jn().factory,PX=E(),pUr=M(),ts=q(),gUr=NX(),RX=OX();function mUr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Ri();else if(arguments.length===1){if(e=arguments[0],!TX(e))throw new TypeError(ts("invalid argument. Options argument must be an object. Value: `%s`.",e));if(_X(e,"prng")){if(!IX(e.prng))throw new TypeError(ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Ri({prng:e.prng})}else r=Ri(e)}else{if(a=arguments[0],u=arguments[1],n=gUr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!TX(e))throw new TypeError(ts("invalid argument. Options argument must be an object. Value: `%s`.",e));if(_X(e,"prng")){if(!IX(e.prng))throw new TypeError(ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Ri({prng:e.prng})}else r=Ri(e)}else r=Ri()}return a===void 0?i=d:i=h,t=r.PRNG,vt(i,"NAME","f"),e&&e.prng?(vt(i,"seed",null),vt(i,"seedLength",null),SX(i,"state",LX(null),lUr),vt(i,"stateLength",null),vt(i,"byteLength",null),vt(i,"toJSON",LX(null))):(es(i,"seed",o),es(i,"seedLength",v),SX(i,"state",l,p),es(i,"stateLength",f),es(i,"byteLength",c),vt(i,"toJSON",m)),vt(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=pUr(t.state),a===void 0?g.params=[]:g.params=[a,u],g}function h(){return RX(r,a,u)}function d(g,y){return PX(g)||PX(y)||g<=0||y<=0?NaN:RX(r,g,y)}}FX.exports=mUr});var BX=s((N3e,MX)=>{"use strict";var dUr=ef(),hUr=dUr();MX.exports=hUr});var CX=s((A3e,jX)=>{"use strict";var yUr=w(),kX=BX(),qUr=ef();yUr(kX,"factory",qUr);jX.exports=kX});var UX=s((O3e,VX)=>{"use strict";var GX=D().isPrimitive,bUr=j().isPrimitive,tf=sr(),nf=q();function wUr(r,e,t){return!GX(r)||tf(r)?new TypeError(nf("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!GX(e)||tf(e)?new TypeError(nf("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!bUr(t)||tf(t)?new TypeError(nf("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}VX.exports=wUr});var WX=s((S3e,HX)=>{"use strict";var EUr=W(),NUr=P();function AUr(r,e,t,i){return i+t*EUr(-NUr(r()),-1/e)}HX.exports=AUr});var sf=s((T3e,ZX)=>{"use strict";var be=w(),is=R(),DX=F(),zX=I(),XX=_(),JX=O(),xX=S(),OUr=k(),ns=X().factory,af=E(),SUr=M(),as=q(),TUr=UX(),YX=WX();function IUr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=ns();else if(arguments.length===1){if(e=arguments[0],!zX(e))throw new TypeError(as("invalid argument. Options argument must be an object. Value: `%s`.",e));if(JX(e,"prng")){if(!XX(e.prng))throw new TypeError(as("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ns(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=TUr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!zX(e))throw new TypeError(as("invalid argument. Options argument must be an object. Value: `%s`.",e));if(JX(e,"prng")){if(!XX(e.prng))throw new TypeError(as("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ns(e)}else t=ns()}return r===void 0?i=d:i=h,be(i,"NAME","frechet"),e&&e.prng?(be(i,"seed",null),be(i,"seedLength",null),DX(i,"state",xX(null),OUr),be(i,"stateLength",null),be(i,"byteLength",null),be(i,"toJSON",xX(null)),be(i,"PRNG",t)):(is(i,"seed",o),is(i,"seedLength",v),DX(i,"state",l,p),is(i,"stateLength",f),is(i,"byteLength",c),be(i,"toJSON",m),be(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=SUr(t.state),r===void 0?g.params=[]:g.params=[r,a,u],g}function h(){return YX(t,r,a,u)}function d(g,y,N){return af(g)||af(y)||af(N)||g<=0||y<=0?NaN:YX(t,g,y,N)}}ZX.exports=IUr});var QX=s((I3e,$X)=>{"use strict";var _Ur=sf(),LUr=_Ur();$X.exports=LUr});var eJ=s((_3e,rJ)=>{"use strict";var PUr=w(),KX=QX(),RUr=sf();PUr(KX,"factory",RUr);rJ.exports=KX});var nJ=s((L3e,iJ)=>{"use strict";var FUr=Q(),tJ=P();function MUr(r,e){var t=r();return t===0&&(t=r()),FUr(tJ(t)/tJ(1-e))}iJ.exports=MUr});var uf=s((P3e,cJ)=>{"use strict";var we=w(),ss=R(),aJ=F(),sJ=I(),BUr=qn().isPrimitive,uJ=_(),oJ=O(),fJ=S(),kUr=k(),us=X().factory,jUr=E(),CUr=M(),os=q(),vJ=nJ();function GUr(){var r,e,t,i;if(arguments.length===0)e=us();else if(arguments.length===1&&sJ(arguments[0]))if(r=arguments[0],oJ(r,"prng")){if(!uJ(r.prng))throw new TypeError(os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=us(r);else{if(i=arguments[0],!BUr(i))throw new TypeError(os("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!sJ(r))throw new TypeError(os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(oJ(r,"prng")){if(!uJ(r.prng))throw new TypeError(os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=us(r)}else e=us()}return i===void 0?t=p:t=l,we(t,"NAME","geometric"),r&&r.prng?(we(t,"seed",null),we(t,"seedLength",null),aJ(t,"state",fJ(null),kUr),we(t,"stateLength",null),we(t,"byteLength",null),we(t,"toJSON",fJ(null)),we(t,"PRNG",e)):(ss(t,"seed",n),ss(t,"seedLength",a),aJ(t,"state",v,f),ss(t,"stateLength",u),ss(t,"byteLength",o),we(t,"toJSON",c),we(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=CUr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return vJ(e,i)}function p(m){return jUr(m)||m<0||m>1?NaN:vJ(e,m)}}cJ.exports=GUr});var pJ=s((R3e,lJ)=>{"use strict";var VUr=uf(),UUr=VUr();lJ.exports=UUr});var dJ=s((F3e,mJ)=>{"use strict";var HUr=w(),gJ=pJ(),WUr=uf();HUr(gJ,"factory",WUr);mJ.exports=gJ});var qJ=s((M3e,yJ)=>{"use strict";var DUr=j().isPrimitive,zUr=D().isPrimitive,hJ=q(),XUr=sr();function JUr(r,e){return!DUr(r)||XUr(r)?new TypeError(hJ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):zUr(e)?null:new TypeError(hJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}yJ.exports=JUr});var EJ=s((B3e,wJ)=>{"use strict";var bJ=P();function xUr(r,e,t){return e-t*bJ(-bJ(r()))}wJ.exports=xUr});var of=s((k3e,LJ)=>{"use strict";var Ee=w(),fs=R(),NJ=F(),AJ=I(),OJ=_(),SJ=O(),TJ=S(),YUr=k(),vs=X().factory,IJ=E(),ZUr=M(),cs=q(),$Ur=qJ(),_J=EJ();function QUr(){var r,e,t,i,n,a;if(arguments.length===0)t=vs();else if(arguments.length===1){if(e=arguments[0],!AJ(e))throw new TypeError(cs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(SJ(e,"prng")){if(!OJ(e.prng))throw new TypeError(cs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=vs(e)}else{if(a=arguments[0],r=arguments[1],n=$Ur(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!AJ(e))throw new TypeError(cs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(SJ(e,"prng")){if(!OJ(e.prng))throw new TypeError(cs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=vs(e)}else t=vs()}return a===void 0?i=h:i=m,Ee(i,"NAME","gumbel"),e&&e.prng?(Ee(i,"seed",null),Ee(i,"seedLength",null),NJ(i,"state",TJ(null),YUr),Ee(i,"stateLength",null),Ee(i,"byteLength",null),Ee(i,"toJSON",TJ(null)),Ee(i,"PRNG",t)):(fs(i,"seed",u),fs(i,"seedLength",o),NJ(i,"state",c,l),fs(i,"stateLength",v),fs(i,"byteLength",f),Ee(i,"toJSON",p),Ee(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=ZUr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return _J(t,a,r)}function h(d,g){return IJ(d)||IJ(g)||g<=0?NaN:_J(t,d,g)}}LJ.exports=QUr});var RJ=s((j3e,PJ)=>{"use strict";var KUr=of(),rHr=KUr();PJ.exports=rHr});var BJ=s((C3e,MJ)=>{"use strict";var eHr=w(),FJ=RJ(),tHr=of();eHr(FJ,"factory",tHr);MJ.exports=FJ});var jJ=s((G3e,kJ)=>{"use strict";var iHr=Q();function nHr(r){return iHr(r)===r&&r>=0}kJ.exports=nHr});var GJ=s((V3e,CJ)=>{"use strict";var aHr=jJ();CJ.exports=aHr});var UJ=s((U3e,VJ)=>{"use strict";var ff=Je().isPrimitive,Cn=q();function sHr(r,e,t){return ff(r)?ff(e)?ff(t)?t>r?new RangeError(Cn("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(Cn("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(Cn("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(Cn("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(Cn("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}VJ.exports=sHr});var HJ=s((H3e,uHr)=>{uHr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var DJ=s((W3e,WJ)=>{"use strict";var oHr=E(),fHr=Ir(),vHr=ri(),cHr=L(),lHr=HJ(),pHr=170;function gHr(r){return oHr(r)?NaN:fHr(r)?r<0?NaN:r<=pHr?lHr[r]:cHr:vHr(r+1)}WJ.exports=gHr});var XJ=s((D3e,zJ)=>{"use strict";var mHr=DJ();zJ.exports=mHr});var xJ=s((z3e,JJ)=>{"use strict";var ct=XJ();function dHr(r,e,t,i){var n,a,u;for(i<t?(n=ct(t)*ct(e+t-i)/(ct(e+t)*ct(t-i)),u=0):(n=ct(e)*ct(i)/(ct(i-t)*ct(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}JJ.exports=dHr});var ZJ=s((X3e,YJ)=>{"use strict";var ls=xJ();function hHr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=ls(r,n,a,u),t-o):(a=t,n=e-t,o=ls(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=ls(r,n,a,u),o):(n=e-t,a=t,o=ls(r,n,a,u),i-o))}YJ.exports=hHr});var cf=s((J3e,nx)=>{"use strict";var Ne=w(),ps=R(),$J=F(),QJ=I(),KJ=_(),rx=O(),ex=S(),yHr=k(),gs=X().factory,vf=GJ(),tx=L(),qHr=M(),ms=q(),bHr=UJ(),ix=ZJ();function wHr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=gs();else if(arguments.length===1){if(r=arguments[0],!QJ(r))throw new TypeError(ms("invalid argument. Options argument must be an object. Value: `%s`.",r));if(rx(r,"prng")){if(!KJ(r.prng))throw new TypeError(ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=gs(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=bHr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!QJ(r))throw new TypeError(ms("invalid argument. Options argument must be an object. Value: `%s`.",r));if(rx(r,"prng")){if(!KJ(r.prng))throw new TypeError(ms("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=gs(r)}else e=gs()}return n===void 0?t=d:t=h,Ne(t,"NAME","hypergeometric"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),$J(t,"state",ex(null),yHr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",ex(null)),Ne(t,"PRNG",e)):(ps(t,"seed",o),ps(t,"seedLength",v),$J(t,"state",l,p),ps(t,"stateLength",f),ps(t,"byteLength",c),Ne(t,"toJSON",m),Ne(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=qHr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return ix(e,n,a,u)}function d(g,y,N){return g===tx||y===tx||!vf(g)||!vf(y)||!vf(N)||N>g?NaN:ix(e,g,y,N)}}nx.exports=wHr});var sx=s((x3e,ax)=>{"use strict";var EHr=cf(),NHr=EHr();ax.exports=NHr});var fx=s((Y3e,ox)=>{"use strict";var AHr=w(),ux=sx(),OHr=cf();AHr(ux,"factory",OHr);ox.exports=ux});var px=s((Z3e,lx)=>{"use strict";var vx=D().isPrimitive,cx=q();function SHr(r,e){return vx(r)?vx(e)?null:new TypeError(cx("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(cx("invalid argument. First argument must be a positive number. Value: `%s`.",r))}lx.exports=SHr});var lf=s(($3e,bx)=>{"use strict";var lt=w(),ds=R(),gx=F(),mx=I(),dx=_(),hx=O(),yx=S(),THr=k(),Fi=Si().factory,qx=E(),IHr=M(),hs=q(),_Hr=px();function LHr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Fi();else if(arguments.length===1){if(i=arguments[0],!mx(i))throw new TypeError(hs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(hx(i,"prng")){if(!dx(i.prng))throw new TypeError(hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Fi({prng:i.prng})}else r=Fi(i)}else{if(e=arguments[0],t=arguments[1],u=_Hr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!mx(i))throw new TypeError(hs("invalid argument. Options argument must be an object. Value: `%s`.",i));if(hx(i,"prng")){if(!dx(i.prng))throw new TypeError(hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Fi(e,t,{prng:i.prng})}else r=Fi(e,t,i)}else r=Fi(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,lt(a,"NAME","invgamma"),i&&i.prng?(lt(a,"seed",null),lt(a,"seedLength",null),gx(a,"state",yx(null),THr),lt(a,"stateLength",null),lt(a,"byteLength",null),lt(a,"toJSON",yx(null))):(ds(a,"seed",o),ds(a,"seedLength",v),gx(a,"state",l,p),ds(a,"stateLength",f),ds(a,"byteLength",c),lt(a,"toJSON",m)),lt(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=IHr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return 1/r()}function d(g,y){return qx(g)||qx(y)||g<=0||y<=0?NaN:1/r(g,y)}}bx.exports=LHr});var Ex=s((Q3e,wx)=>{"use strict";var PHr=lf(),RHr=PHr();wx.exports=RHr});var Ox=s((K3e,Ax)=>{"use strict";var FHr=w(),Nx=Ex(),MHr=lf();FHr(Nx,"factory",MHr);Ax.exports=Nx});var _x=s((rfe,Ix)=>{"use strict";var Sx=D().isPrimitive,Tx=q();function BHr(r,e){return Sx(r)?Sx(e)?null:new TypeError(Tx("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Tx("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Ix.exports=BHr});var Rx=s((efe,Px)=>{"use strict";var Lx=W();function kHr(r,e,t){var i=r();return Lx(1-Lx(1-i,1/t),1/e)}Px.exports=kHr});var pf=s((tfe,Vx)=>{"use strict";var Ae=w(),ys=R(),Fx=F(),Mx=I(),Bx=_(),kx=O(),jx=S(),jHr=k(),qs=X().factory,Cx=E(),CHr=M(),bs=q(),GHr=_x(),Gx=Rx();function VHr(){var r,e,t,i,n,a;if(arguments.length===0)e=qs();else if(arguments.length===1){if(r=arguments[0],!Mx(r))throw new TypeError(bs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(kx(r,"prng")){if(!Bx(r.prng))throw new TypeError(bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=qs(r)}else{if(n=arguments[0],a=arguments[1],i=GHr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Mx(r))throw new TypeError(bs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(kx(r,"prng")){if(!Bx(r.prng))throw new TypeError(bs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=qs(r)}else e=qs()}return n===void 0?t=h:t=m,Ae(t,"NAME","kumaraswamy"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),Fx(t,"state",jx(null),jHr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",jx(null)),Ae(t,"PRNG",e)):(ys(t,"seed",u),ys(t,"seedLength",o),Fx(t,"state",c,l),ys(t,"stateLength",v),ys(t,"byteLength",f),Ae(t,"toJSON",p),Ae(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=CHr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return Gx(e,n,a)}function h(d,g){return Cx(d)||Cx(g)||d<=0||g<=0?NaN:Gx(e,d,g)}}Vx.exports=VHr});var Hx=s((ife,Ux)=>{"use strict";var UHr=pf(),HHr=UHr();Ux.exports=HHr});var zx=s((nfe,Dx)=>{"use strict";var WHr=w(),Wx=Hx(),DHr=pf();WHr(Wx,"factory",DHr);Dx.exports=Wx});var xx=s((afe,Jx)=>{"use strict";var zHr=j().isPrimitive,XHr=D().isPrimitive,Xx=q(),JHr=sr();function xHr(r,e){return!zHr(r)||JHr(r)?new TypeError(Xx("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):XHr(e)?null:new TypeError(Xx("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Jx.exports=xHr});var Zx=s((sfe,Yx)=>{"use strict";var YHr=P0(),ZHr=Y(),$Hr=P();function QHr(r,e,t){var i=r()-.5;return e-t*YHr(i)*$Hr(1-2*ZHr(i))}Yx.exports=QHr});var gf=s((ufe,nY)=>{"use strict";var Oe=w(),ws=R(),$x=F(),Qx=I(),Kx=_(),rY=O(),eY=S(),KHr=k(),Es=X().factory,tY=E(),rWr=M(),Ns=q(),eWr=xx(),iY=Zx();function tWr(){var r,e,t,i,n,a;if(arguments.length===0)e=Es();else if(arguments.length===1){if(r=arguments[0],!Qx(r))throw new TypeError(Ns("invalid argument. Options argument must be an object. Value: `%s`.",r));if(rY(r,"prng")){if(!Kx(r.prng))throw new TypeError(Ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Es(r)}else{if(n=arguments[0],a=arguments[1],i=eWr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Qx(r))throw new TypeError(Ns("invalid argument. Options argument must be an object. Value: `%s`.",r));if(rY(r,"prng")){if(!Kx(r.prng))throw new TypeError(Ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Es(r)}else e=Es()}return n===void 0?t=h:t=m,Oe(t,"NAME","laplace"),r&&r.prng?(Oe(t,"seed",null),Oe(t,"seedLength",null),$x(t,"state",eY(null),KHr),Oe(t,"stateLength",null),Oe(t,"byteLength",null),Oe(t,"toJSON",eY(null)),Oe(t,"PRNG",e)):(ws(t,"seed",u),ws(t,"seedLength",o),$x(t,"state",c,l),ws(t,"stateLength",v),ws(t,"byteLength",f),Oe(t,"toJSON",p),Oe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=rWr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return iY(e,n,a)}function h(d,g){return tY(d)||tY(g)||g<=0?NaN:iY(e,d,g)}}nY.exports=tWr});var sY=s((ofe,aY)=>{"use strict";var iWr=gf(),nWr=iWr();aY.exports=nWr});var fY=s((ffe,oY)=>{"use strict";var aWr=w(),uY=sY(),sWr=gf();aWr(uY,"factory",sWr);oY.exports=uY});var lY=s((vfe,cY)=>{"use strict";var uWr=j().isPrimitive,oWr=D().isPrimitive,vY=q(),fWr=sr();function vWr(r,e){return!uWr(r)||fWr(r)?new TypeError(vY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):oWr(e)?null:new TypeError(vY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}cY.exports=vWr});var gY=s((cfe,pY)=>{"use strict";var cWr=$1();function lWr(r,e,t){var i=cWr(1-r()/2,0,1);return e+t/(i*i)}pY.exports=lWr});var mf=s((lfe,EY)=>{"use strict";var Se=w(),As=R(),mY=F(),dY=I(),hY=_(),yY=O(),qY=S(),pWr=k(),Os=X().factory,bY=E(),gWr=M(),Ss=q(),mWr=lY(),wY=gY();function dWr(){var r,e,t,i,n,a;if(arguments.length===0)e=Os();else if(arguments.length===1){if(r=arguments[0],!dY(r))throw new TypeError(Ss("invalid argument. Options argument must be an object. Value: `%s`.",r));if(yY(r,"prng")){if(!hY(r.prng))throw new TypeError(Ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Os(r)}else{if(n=arguments[0],a=arguments[1],i=mWr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!dY(r))throw new TypeError(Ss("invalid argument. Options argument must be an object. Value: `%s`.",r));if(yY(r,"prng")){if(!hY(r.prng))throw new TypeError(Ss("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Os(r)}else e=Os()}return n===void 0?t=h:t=m,Se(t,"NAME","levy"),r&&r.prng?(Se(t,"seed",null),Se(t,"seedLength",null),mY(t,"state",qY(null),pWr),Se(t,"stateLength",null),Se(t,"byteLength",null),Se(t,"toJSON",qY(null)),Se(t,"PRNG",e)):(As(t,"seed",u),As(t,"seedLength",o),mY(t,"state",c,l),As(t,"stateLength",v),As(t,"byteLength",f),Se(t,"toJSON",p),Se(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=gWr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return wY(e,n,a)}function h(d,g){return bY(d)||bY(g)||g<=0?NaN:wY(e,d,g)}}EY.exports=dWr});var AY=s((pfe,NY)=>{"use strict";var hWr=mf(),yWr=hWr();NY.exports=yWr});var TY=s((gfe,SY)=>{"use strict";var qWr=w(),OY=AY(),bWr=mf();qWr(OY,"factory",bWr);SY.exports=OY});var LY=s((mfe,_Y)=>{"use strict";var wWr=j().isPrimitive,EWr=D().isPrimitive,NWr=sr(),IY=q();function AWr(r,e){return!wWr(r)||NWr(r)?new TypeError(IY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):EWr(e)?null:new TypeError(IY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}_Y.exports=AWr});var RY=s((dfe,PY)=>{"use strict";var OWr=P();function SWr(r,e,t){var i=r();return e+t*OWr(i/(1-i))}PY.exports=SWr});var df=s((hfe,VY)=>{"use strict";var Te=w(),Ts=R(),FY=F(),MY=I(),BY=_(),kY=O(),jY=S(),TWr=k(),Is=X().factory,CY=E(),IWr=M(),_s=q(),_Wr=LY(),GY=RY();function LWr(){var r,e,t,i,n,a;if(arguments.length===0)e=Is();else if(arguments.length===1){if(r=arguments[0],!MY(r))throw new TypeError(_s("invalid argument. Options argument must be an object. Value: `%s`.",r));if(kY(r,"prng")){if(!BY(r.prng))throw new TypeError(_s("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Is(r)}else{if(n=arguments[0],a=arguments[1],i=_Wr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!MY(r))throw new TypeError(_s("invalid argument. Options argument must be an object. Value: `%s`.",r));if(kY(r,"prng")){if(!BY(r.prng))throw new TypeError(_s("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Is(r)}else e=Is()}return n===void 0?t=h:t=m,Te(t,"NAME","logistic"),r&&r.prng?(Te(t,"seed",null),Te(t,"seedLength",null),FY(t,"state",jY(null),TWr),Te(t,"stateLength",null),Te(t,"byteLength",null),Te(t,"toJSON",jY(null)),Te(t,"PRNG",e)):(Ts(t,"seed",u),Ts(t,"seedLength",o),FY(t,"state",c,l),Ts(t,"stateLength",v),Ts(t,"byteLength",f),Te(t,"toJSON",p),Te(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=IWr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return GY(e,n,a)}function h(d,g){return CY(d)||CY(g)||g<=0?NaN:GY(e,d,g)}}VY.exports=LWr});var HY=s((yfe,UY)=>{"use strict";var PWr=df(),RWr=PWr();UY.exports=RWr});var zY=s((qfe,DY)=>{"use strict";var FWr=w(),WY=HY(),MWr=df();FWr(WY,"factory",MWr);DY.exports=WY});var xY=s((bfe,JY)=>{"use strict";var BWr=j().isPrimitive,kWr=D().isPrimitive,XY=q(),jWr=sr();function CWr(r,e){return!BWr(r)||jWr(r)?new TypeError(XY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):kWr(e)?null:new TypeError(XY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}JY.exports=CWr});var ZY=s((wfe,YY)=>{"use strict";var GWr=nr();function VWr(r,e,t){return GWr(e+t*r())}YY.exports=VWr});var hf=s((Efe,nZ)=>{"use strict";var pt=w(),Ls=R(),$Y=F(),QY=I(),KY=_(),rZ=O(),eZ=S(),UWr=k(),Mi=nt().factory,tZ=E(),HWr=M(),Ps=q(),WWr=xY(),iZ=ZY();function DWr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Mi();else if(arguments.length===1){if(t=arguments[0],!QY(t))throw new TypeError(Ps("invalid argument. Options argument must be an object. Value: `%s`.",t));if(rZ(t,"prng")){if(!KY(t.prng))throw new TypeError(Ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Mi({prng:t.prng})}else e=Mi(t)}else{if(u=arguments[0],r=arguments[1],a=WWr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!QY(t))throw new TypeError(Ps("invalid argument. Options argument must be an object. Value: `%s`.",t));if(rZ(t,"prng")){if(!KY(t.prng))throw new TypeError(Ps("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Mi({prng:t.prng})}else e=Mi(t)}else e=Mi()}return u===void 0?n=d:n=h,i=e.PRNG,pt(n,"NAME","lognormal"),t&&t.prng?(pt(n,"seed",null),pt(n,"seedLength",null),$Y(n,"state",eZ(null),UWr),pt(n,"stateLength",null),pt(n,"byteLength",null),pt(n,"toJSON",eZ(null))):(Ls(n,"seed",o),Ls(n,"seedLength",v),$Y(n,"state",l,p),Ls(n,"stateLength",f),Ls(n,"byteLength",c),pt(n,"toJSON",m)),pt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=HWr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return iZ(e,u,r)}function d(g,y){return tZ(g)||tZ(y)||y<=0?NaN:iZ(e,g,y)}}nZ.exports=DWr});var sZ=s((Nfe,aZ)=>{"use strict";var zWr=hf(),XWr=zWr();aZ.exports=XWr});var fZ=s((Afe,oZ)=>{"use strict";var JWr=w(),uZ=sZ(),xWr=hf();JWr(uZ,"factory",xWr);oZ.exports=uZ});var yf=s((Ofe,vZ)=>{"use strict";var YWr=ii(),ZWr=Q(),$Wr=YWr-1;function QWr(){var r=ZWr(1+$Wr*Math.random());return r|0}vZ.exports=QWr});var wf=s((Sfe,mZ)=>{"use strict";var Ie=w(),gt=R(),cZ=F(),qf=O(),KWr=I(),rDr=vr().isPrimitive,eDr=Gr(),tDr=ae().isPrimitive,lZ=Pa(),Dr=q(),Rs=ii(),Nr=Pt(),Bi=Ke(),iDr=M(),pZ=yf(),bf=Rs-1|0,nDr=Rs-1|0,aDr=16807,Fs=1,Ms=2,mt=2,Ar=4,Gn=5;function gZ(r,e){var t;return e?t="option":t="argument",r.length<Gn+1?new RangeError(Dr("invalid %s. State array has insufficient length.",t)):r[0]!==Fs?new RangeError(Dr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Fs,r[0])):r[1]!==Ms?new RangeError(Dr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Ms,r[1])):r[mt]!==1?new RangeError(Dr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[mt])):r[Ar]!==r.length-Gn?new RangeError(Dr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Gn,r[Ar])):null}function sDr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!KWr(r))throw new TypeError(Dr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(qf(r,"copy")&&(i.copy=r.copy,!rDr(r.copy)))throw new TypeError(Dr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(qf(r,"state")){if(t=r.state,i.state=!0,!lZ(t))throw new TypeError(Dr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=gZ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Nr(t.length),Bi(t.length,t,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,1),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,t[Ar])}if(n===void 0)if(qf(r,"seed"))if(n=r.seed,i.seed=!0,tDr(n)){if(n>nDr)throw new RangeError(Dr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(eDr(n)&&n.length>0)a=n.length,e=new Nr(Gn+a),e[0]=Fs,e[1]=Ms,e[mt]=1,e[Ar]=a,Bi.ndarray(a,n,1,0,e,1,Ar+1),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,1),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Dr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=pZ()|0}else n=pZ()|0;return t===void 0&&(e=new Nr(Gn+1),e[0]=Fs,e[1]=Ms,e[mt]=1,e[Ar]=1,e[Ar+1]=n,t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,1),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),Ie(h,"NAME","minstd"),gt(h,"seed",o),gt(h,"seedLength",v),cZ(h,"state",l,p),gt(h,"stateLength",f),gt(h,"byteLength",c),Ie(h,"toJSON",m),Ie(h,"MIN",1),Ie(h,"MAX",Rs-1),Ie(h,"normalized",d),Ie(d,"NAME",h.NAME),gt(d,"seed",o),gt(d,"seedLength",v),cZ(d,"state",l,p),gt(d,"stateLength",f),gt(d,"byteLength",c),Ie(d,"toJSON",m),Ie(d,"MIN",(h.MIN-1)/bf),Ie(d,"MAX",(h.MAX-1)/bf),h;function o(){var g=e[Ar];return Bi(g,n,1,new Nr(g),1)}function v(){return e[Ar]}function f(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return Bi(g,e,1,new Nr(g),1)}function p(g){var y;if(!lZ(g))throw new TypeError(Dr("invalid argument. Must provide an Int32Array. Value: `%s`.",g));if(y=gZ(g,!1),y)throw y;i.copy===!1?i.state&&g.length===e.length?Bi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new Nr(g.length)),Bi(g.length,g,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,1),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,e[Ar])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=iDr(e),g.params=[],g}function h(){var g=t[0]|0;return g=aDr*g%Rs|0,t[0]=g,g|0}function d(){return(h()-1)/bf}}mZ.exports=sDr});var hZ=s((Tfe,dZ)=>{"use strict";var uDr=wf(),oDr=yf(),fDr=uDr({seed:oDr()});dZ.exports=fDr});var bZ=s((Ife,qZ)=>{"use strict";var vDr=w(),yZ=hZ(),cDr=wf();vDr(yZ,"factory",cDr);qZ.exports=yZ});var EZ=s((_fe,wZ)=>{"use strict";var lDr=E(),pDr=8;function gDr(r,e,t){var i,n;for(n=0;n<pDr;n++)if(i=r(),lDr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}wZ.exports=gDr});var Ef=s((Lfe,NZ)=>{"use strict";var mDr=ii(),dDr=Q(),hDr=mDr-1;function yDr(){var r=dDr(1+hDr*Math.random());return r|0}NZ.exports=yDr});var Of=s((Pfe,_Z)=>{"use strict";var _e=w(),dt=R(),AZ=F(),Nf=O(),qDr=I(),bDr=vr().isPrimitive,wDr=Gr(),EDr=ae().isPrimitive,OZ=Pa(),ki=Ke(),NDr=Q(),Or=Pt(),Vn=ii(),ADr=M(),jr=q(),SZ=EZ(),TZ=Ef(),Af=Vn-1|0,ODr=Vn-1|0,SDr=16807,Tr=32,js=1,Cs=3,ht=2,ji=Tr+3,Sr=Tr+6,Un=Tr+7,Bs=ji+1,ks=ji+2;function IZ(r,e){var t;return e?t="option":t="argument",r.length<Un+1?new RangeError(jr("invalid %s. State array has insufficient length.",t)):r[0]!==js?new RangeError(jr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,js,r[0])):r[1]!==Cs?new RangeError(jr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Cs,r[1])):r[ht]!==Tr?new RangeError(jr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Tr,r[ht])):r[ji]!==2?new RangeError(jr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[ji])):r[Sr]!==r.length-Un?new RangeError(jr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Un,r[Sr])):null}function TDr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!qDr(r))throw new TypeError(jr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Nf(r,"copy")&&(i.copy=r.copy,!bDr(r.copy)))throw new TypeError(jr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Nf(r,"state")){if(t=r.state,i.state=!0,!OZ(t))throw new TypeError(jr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=IZ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Or(t.length),ki(t.length,t,1,e,1)),t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,Tr),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,t[Sr])}if(n===void 0)if(Nf(r,"seed"))if(n=r.seed,i.seed=!0,EDr(n)){if(n>ODr)throw new RangeError(jr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(wDr(n)&&n.length>0)a=n.length,e=new Or(Un+a),e[0]=js,e[1]=Cs,e[ht]=Tr,e[ji]=2,e[ks]=n[0],e[Sr]=a,ki.ndarray(a,n,1,0,e,1,Sr+1),t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,Tr),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,a),t=SZ(h,t,Tr),e[Bs]=t[0];else throw new TypeError(jr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=TZ()|0}else n=TZ()|0;return t===void 0&&(e=new Or(Un+1),e[0]=js,e[1]=Cs,e[ht]=Tr,e[ji]=2,e[ks]=n,e[Sr]=1,e[Sr+1]=n,t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,Tr),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,1),t=SZ(h,t,Tr),e[Bs]=t[0]),_e(d,"NAME","minstd-shuffle"),dt(d,"seed",o),dt(d,"seedLength",v),AZ(d,"state",l,p),dt(d,"stateLength",f),dt(d,"byteLength",c),_e(d,"toJSON",m),_e(d,"MIN",1),_e(d,"MAX",Vn-1),_e(d,"normalized",g),_e(g,"NAME",d.NAME),dt(g,"seed",o),dt(g,"seedLength",v),AZ(g,"state",l,p),dt(g,"stateLength",f),dt(g,"byteLength",c),_e(g,"toJSON",m),_e(g,"MIN",(d.MIN-1)/Af),_e(g,"MAX",(d.MAX-1)/Af),d;function o(){var y=e[Sr];return ki(y,n,1,new Or(y),1)}function v(){return e[Sr]}function f(){return e.length}function c(){return e.byteLength}function l(){var y=e.length;return ki(y,e,1,new Or(y),1)}function p(y){var N;if(!OZ(y))throw new TypeError(jr("invalid argument. Must provide an Int32Array. Value: `%s`.",y));if(N=IZ(y,!1),N)throw N;i.copy===!1?i.state&&y.length===e.length?ki(y.length,y,1,e,1):(e=y,i.state=!0):(y.length!==e.length&&(e=new Or(y.length)),ki(y.length,y,1,e,1)),t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,Tr),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,e[Sr])}function m(){var y={};return y.type="PRNG",y.name=d.NAME,y.state=ADr(e),y.params=[],y}function h(){var y=e[ks]|0;return y=SDr*y%Vn|0,e[ks]=y,y|0}function d(){var y,N;return y=e[Bs],N=NDr(Tr*(y/Vn)),y=t[N],e[Bs]=y,t[N]=h(),y}function g(){return(d()-1)/Af}}_Z.exports=TDr});var PZ=s((Rfe,LZ)=>{"use strict";var IDr=Of(),_Dr=Ef(),LDr=IDr({seed:_Dr()});LZ.exports=LDr});var MZ=s((Ffe,FZ)=>{"use strict";var PDr=w(),RZ=PZ(),RDr=Of();PDr(RZ,"factory",RDr);FZ.exports=RZ});var kZ=s((Mfe,BZ)=>{"use strict";var FDr=nr();function MDr(r,e){for(var t=r(),i=1;t>FDr(-e);)i+=1,t*=r();return i-1}BZ.exports=MDr});var CZ=s((Bfe,jZ)=>{"use strict";var BDr=Q();function kDr(r){return BDr(r)===r&&r<0}jZ.exports=kDr});var VZ=s((kfe,GZ)=>{"use strict";var jDr=CZ();GZ.exports=jDr});var HZ=s((jfe,UZ)=>{"use strict";var CDr=VZ(),GDr=rn();function VDr(r){return CDr(r)?NaN:GDr(r+1)}UZ.exports=VDr});var DZ=s((Cfe,WZ)=>{"use strict";var UDr=HZ();WZ.exports=UDr});var xZ=s((Gfe,JZ)=>{"use strict";var HDr=DZ(),zZ=Q(),WDr=P0(),DDr=C(),XZ=Y(),Gs=P(),zDr=q1(),XDr=1/12,JDr=1/360;function xDr(r,e){var t,i,n,a,u,o,v,f,c,l;for(t=DDr(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,u=-3.6224/(v-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-XZ(c))+v,c+=e+.445,zZ(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=WDr(c)*.5-c,l=u*r()),a=.5-XZ(c),(a>=.013||a>=l)&&(f=zZ((2*o/a+v)*c+e+.445),l*=i/(o/(a*a)+v),c=(f+.5)*Gs(e/f),c+=-e-zDr+f,c-=(XDr-JDr/(f*f))/f,f>=10&&c>=Gs(l*t)||(c=f*Gs(e)-e-HDr(f),f>=0&&f<=9&&c>=Gs(l))))return f}}JZ.exports=xDr});var ZZ=s((Vfe,YZ)=>{"use strict";var YDr=kZ(),ZDr=xZ();function $Dr(r,e){return e<30?YDr(r,e):ZDr(r,e)}YZ.exports=$Dr});var Sf=s((Ufe,i$)=>{"use strict";var Le=w(),Vs=R(),$Z=F(),QDr=D().isPrimitive,QZ=I(),KZ=_(),r$=O(),e$=S(),KDr=k(),Us=X().factory,rzr=E(),ezr=M(),Hs=q(),t$=ZZ();function tzr(){var r,e,t,i;if(arguments.length===0)t=Us();else if(arguments.length===1&&QZ(arguments[0]))if(e=arguments[0],r$(e,"prng")){if(!KZ(e.prng))throw new TypeError(Hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Us(e);else{if(r=arguments[0],!QDr(r))throw new TypeError(Hs("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!QZ(e))throw new TypeError(Hs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(r$(e,"prng")){if(!KZ(e.prng))throw new TypeError(Hs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Us(e)}else t=Us()}return r===void 0?i=p:i=l,Le(i,"NAME","poisson"),e&&e.prng?(Le(i,"seed",null),Le(i,"seedLength",null),$Z(i,"state",e$(null),KDr),Le(i,"stateLength",null),Le(i,"byteLength",null),Le(i,"toJSON",e$(null)),Le(i,"PRNG",t)):(Vs(i,"seed",n),Vs(i,"seedLength",a),$Z(i,"state",v,f),Vs(i,"stateLength",u),Vs(i,"byteLength",o),Le(i,"toJSON",c),Le(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=ezr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return t$(t,r)}function p(m){return rzr(m)||m<=0?NaN:t$(t,m)}}i$.exports=tzr});var a$=s((Hfe,n$)=>{"use strict";var izr=Sf(),nzr=izr();n$.exports=nzr});var Tf=s((Wfe,u$)=>{"use strict";var azr=w(),s$=a$(),szr=Sf();azr(s$,"factory",szr);u$.exports=s$});var f$=s((Dfe,o$)=>{"use strict";var uzr=D().isPrimitive,ozr=j().isPrimitive,If=q(),fzr=sr();function vzr(r,e){return uzr(r)?!ozr(e)||fzr(e)?new TypeError(If("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(If("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(If("invalid argument. First argument must be a positive number. Value: `%s`.",r))}o$.exports=vzr});var Rf=s((zfe,h$)=>{"use strict";var yt=w(),Ws=R(),v$=F(),Ci=O(),c$=I(),_f=Kr(),l$=vr().isPrimitive,p$=_(),g$=S(),czr=k(),m$=E(),Gi=Tf().factory,Ds=Si().factory,Lf=Ke(),Pf=lr(),d$=Mn(),lzr=M(),Pe=q(),pzr=f$();function gzr(){var r,e,t,i,n,a,u,o,v,f;if(u=!0,arguments.length===0)i={copy:!1},t=Gi(i);else if(arguments.length===1){if(i=arguments[0],!c$(i))throw new TypeError(Pe("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ci(i,"copy")&&!l$(i.copy))throw new TypeError(Pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ci(i,"prng")){if(!p$(i.prng))throw new TypeError(Pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Gi({prng:i.prng})}else{if(Ci(i,"state")&&!_f(i.state))throw new TypeError(Pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=d$({},i),i.copy===!1?u=!1:i.state&&(i.state=Lf(i.state.length,i.state,1,new Pf(i.state.length),1)),i.copy=!1,t=Gi(i)}}else{if(f=arguments[0],v=arguments[1],o=pzr(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!c$(i))throw new TypeError(Pe("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ci(i,"copy")&&!l$(i.copy))throw new TypeError(Pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ci(i,"prng")){if(!p$(i.prng))throw new TypeError(Pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Gi({prng:i.prng})}else{if(Ci(i,"state")&&!_f(i.state))throw new TypeError(Pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=d$({},i),i.copy===!1?u=!1:i.state&&(i.state=Lf(i.state.length,i.state,1,new Pf(i.state.length),1)),i.copy=!1,t=Gi(i)}}else i={copy:!1},t=Gi(i)}return i&&i.prng?f===void 0?r=Ds({prng:i.prng}):r=Ds(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=Ds({state:e,copy:!1}):r=Ds(f,v/(1-v),{state:e,copy:!1})),f===void 0?n=N:n=y,a=t.PRNG,yt(n,"NAME","negative-binomial"),i&&i.prng?(yt(n,"seed",null),yt(n,"seedLength",null),v$(n,"state",g$(null),czr),yt(n,"stateLength",null),yt(n,"byteLength",null),yt(n,"toJSON",g$(null))):(Ws(n,"seed",c),Ws(n,"seedLength",l),v$(n,"state",h,d),Ws(n,"stateLength",p),Ws(n,"byteLength",m),yt(n,"toJSON",g)),yt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function m(){return a.byteLength}function h(){return a.state}function d(A){if(!_f(A))throw new TypeError(Pe("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));u&&(A=Lf(A.length,A,1,new Pf(A.length),1)),a.state=A}function g(){var A={};return A.type="PRNG",A.name=n.NAME,A.state=lzr(a.state),f===void 0?A.params=[]:A.params=[f,v],A}function y(){return t(r())}function N(A,V){return m$(A)||m$(V)||V<=0||V>=1?NaN:t(r(A,V/(1-V)))}}h$.exports=gzr});var q$=s((Xfe,y$)=>{"use strict";var mzr=Rf(),dzr=mzr();y$.exports=dzr});var E$=s((Jfe,w$)=>{"use strict";var hzr=w(),b$=q$(),yzr=Rf();hzr(b$,"factory",yzr);w$.exports=b$});var O$=s((xfe,A$)=>{"use strict";var qzr=j().isPrimitive,bzr=D().isPrimitive,N$=q(),wzr=sr();function Ezr(r,e){return!qzr(r)||wzr(r)?new TypeError(N$("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):bzr(e)?null:new TypeError(N$("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}A$.exports=Ezr});var T$=s((Yfe,S$)=>{"use strict";function Nzr(r,e,t){return e+t*r()}S$.exports=Nzr});var Ff=s((Zfe,B$)=>{"use strict";var qt=w(),zs=R(),I$=F(),_$=I(),L$=_(),P$=O(),R$=S(),Azr=k(),Vi=nt().factory,F$=E(),Ozr=M(),Xs=q(),Szr=O$(),M$=T$();function Tzr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Vi();else if(arguments.length===1){if(t=arguments[0],!_$(t))throw new TypeError(Xs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(P$(t,"prng")){if(!L$(t.prng))throw new TypeError(Xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Vi({prng:t.prng})}else e=Vi(t)}else{if(u=arguments[0],r=arguments[1],a=Szr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!_$(t))throw new TypeError(Xs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(P$(t,"prng")){if(!L$(t.prng))throw new TypeError(Xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Vi({prng:t.prng})}else e=Vi(t)}else e=Vi()}return u===void 0?n=d:n=h,i=e.PRNG,qt(n,"NAME","normal"),t&&t.prng?(qt(n,"seed",null),qt(n,"seedLength",null),I$(n,"state",R$(null),Azr),qt(n,"stateLength",null),qt(n,"byteLength",null),qt(n,"toJSON",R$(null))):(zs(n,"seed",o),zs(n,"seedLength",v),I$(n,"state",l,p),zs(n,"stateLength",f),zs(n,"byteLength",c),qt(n,"toJSON",m)),qt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=Ozr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return M$(e,u,r)}function d(g,y){return F$(g)||F$(y)||y<=0?NaN:M$(e,g,y)}}B$.exports=Tzr});var j$=s(($fe,k$)=>{"use strict";var Izr=Ff(),_zr=Izr();k$.exports=_zr});var V$=s((Qfe,G$)=>{"use strict";var Lzr=w(),C$=j$(),Pzr=Ff();Lzr(C$,"factory",Pzr);G$.exports=C$});var D$=s((Kfe,W$)=>{"use strict";var U$=D().isPrimitive,H$=q();function Rzr(r,e){return U$(r)?U$(e)?null:new TypeError(H$("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(H$("invalid argument. First argument must be a positive number. Value: `%s`.",r))}W$.exports=Rzr});var X$=s((rve,z$)=>{"use strict";var Fzr=W();function Mzr(r,e,t){return t/Fzr(r(),1/e)}z$.exports=Mzr});var Mf=s((eve,rQ)=>{"use strict";var Re=w(),Js=R(),J$=F(),x$=I(),Y$=_(),Z$=O(),$$=S(),Bzr=k(),xs=X().factory,Q$=E(),kzr=M(),Ys=q(),jzr=D$(),K$=X$();function Czr(){var r,e,t,i,n,a;if(arguments.length===0)i=xs();else if(arguments.length===1){if(t=arguments[0],!x$(t))throw new TypeError(Ys("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Z$(t,"prng")){if(!Y$(t.prng))throw new TypeError(Ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=xs(t)}else{if(r=arguments[0],e=arguments[1],a=jzr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!x$(t))throw new TypeError(Ys("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Z$(t,"prng")){if(!Y$(t.prng))throw new TypeError(Ys("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=xs(t)}else i=xs()}return r===void 0?n=h:n=m,Re(n,"NAME","pareto-type1"),t&&t.prng?(Re(n,"seed",null),Re(n,"seedLength",null),J$(n,"state",$$(null),Bzr),Re(n,"stateLength",null),Re(n,"byteLength",null),Re(n,"toJSON",$$(null)),Re(n,"PRNG",i)):(Js(n,"seed",u),Js(n,"seedLength",o),J$(n,"state",c,l),Js(n,"stateLength",v),Js(n,"byteLength",f),Re(n,"toJSON",p),Re(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=kzr(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function m(){return K$(i,r,e)}function h(d,g){return Q$(d)||Q$(g)||d<=0||g<=0?NaN:K$(i,d,g)}}rQ.exports=Czr});var tQ=s((tve,eQ)=>{"use strict";var Gzr=Mf(),Vzr=Gzr();eQ.exports=Vzr});var aQ=s((ive,nQ)=>{"use strict";var Uzr=w(),iQ=tQ(),Hzr=Mf();Uzr(iQ,"factory",Hzr);nQ.exports=iQ});var uQ=s((nve,sQ)=>{"use strict";var Wzr=C(),Dzr=P();function zzr(r,e){return e*Wzr(-2*Dzr(r()))}sQ.exports=zzr});var Bf=s((ave,gQ)=>{"use strict";var Fe=w(),Zs=R(),oQ=F(),Xzr=D().isPrimitive,fQ=I(),vQ=_(),cQ=O(),lQ=S(),Jzr=k(),$s=X().factory,xzr=E(),Yzr=M(),Qs=q(),pQ=uQ();function Zzr(){var r,e,t,i;if(arguments.length===0)t=$s();else if(arguments.length===1&&fQ(arguments[0]))if(e=arguments[0],cQ(e,"prng")){if(!vQ(e.prng))throw new TypeError(Qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=$s(e);else{if(r=arguments[0],!Xzr(r))throw new TypeError(Qs("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!fQ(e))throw new TypeError(Qs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(cQ(e,"prng")){if(!vQ(e.prng))throw new TypeError(Qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=$s(e)}else t=$s()}return r===void 0?i=p:i=l,Fe(i,"NAME","rayleigh"),e&&e.prng?(Fe(i,"seed",null),Fe(i,"seedLength",null),oQ(i,"state",lQ(null),Jzr),Fe(i,"stateLength",null),Fe(i,"byteLength",null),Fe(i,"toJSON",lQ(null)),Fe(i,"PRNG",t)):(Zs(i,"seed",n),Zs(i,"seedLength",a),oQ(i,"state",v,f),Zs(i,"stateLength",u),Zs(i,"byteLength",o),Fe(i,"toJSON",c),Fe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=Yzr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return pQ(t,r)}function p(m){return xzr(m)||m<=0?NaN:pQ(t,m)}}gQ.exports=Zzr});var dQ=s((sve,mQ)=>{"use strict";var $zr=Bf(),Qzr=$zr();mQ.exports=Qzr});var qQ=s((uve,yQ)=>{"use strict";var Kzr=w(),hQ=dQ(),rXr=Bf();Kzr(hQ,"factory",rXr);yQ.exports=hQ});var Gf=s((ove,IQ)=>{"use strict";var bt=w(),Ks=R(),bQ=F(),Ui=O(),wQ=D().isPrimitive,EQ=I(),kf=Kr(),NQ=vr().isPrimitive,eXr=E(),AQ=_(),OQ=S(),tXr=k(),ru=jn().factory,Hi=nt().factory,jf=Ke(),Cf=lr(),SQ=Mn(),iXr=M(),$r=q(),TQ=C();function nXr(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=Hi(n);else if(arguments.length===1)if(EQ(arguments[0])){if(n=arguments[0],Ui(n,"copy")&&!NQ(n.copy))throw new TypeError($r("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ui(n,"prng")){if(!AQ(n.prng))throw new TypeError($r("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Hi({prng:n.prng})}else{if(Ui(n,"state")&&!kf(n.state))throw new TypeError($r("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=SQ({},n),n.copy===!1?u=!1:n.state&&(n.state=jf(n.state.length,n.state,1,new Cf(n.state.length),1)),n.copy=!1,t=Hi(n)}}else{if(o=arguments[0],!wQ(o))throw new TypeError($r("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=Hi(n)}else{if(o=arguments[0],!wQ(o))throw new TypeError($r("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!EQ(n))throw new TypeError($r("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ui(n,"copy")&&!NQ(n.copy))throw new TypeError($r("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ui(n,"prng")){if(!AQ(n.prng))throw new TypeError($r("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Hi({prng:n.prng})}else{if(Ui(n,"state")&&!kf(n.state))throw new TypeError($r("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=SQ({},n),n.copy===!1?u=!1:n.state&&(n.state=jf(n.state.length,n.state,1,new Cf(n.state.length),1)),n.copy=!1,t=Hi(n)}}return n&&n.prng?o===void 0?r=ru({prng:n.prng}):r=ru(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=ru({state:e,copy:!1}):r=ru(o,{state:e,copy:!1})),o===void 0?a=g:a=d,i=t.PRNG,bt(a,"NAME","t"),n&&n.prng?(bt(a,"seed",null),bt(a,"seedLength",null),bQ(a,"state",OQ(null),tXr),bt(a,"stateLength",null),bt(a,"byteLength",null),bt(a,"toJSON",OQ(null))):(Ks(a,"seed",v),Ks(a,"seedLength",f),bQ(a,"state",p,m),Ks(a,"stateLength",c),Ks(a,"byteLength",l),bt(a,"toJSON",h)),bt(a,"PRNG",i),a;function v(){return i.seed}function f(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(y){if(!kf(y))throw new TypeError($r("invalid argument. Must provide a Uint32Array. Value: `%s`.",y));u&&(y=jf(y.length,y,1,new Cf(y.length),1)),i.state=y}function h(){var y={};return y.type="PRNG",y.name=a.NAME,y.state=iXr(i.state),o===void 0?y.params=[]:y.params=[o],y}function d(){return t()/TQ(r()/o)}function g(y){return eXr(y)||y<=0?NaN:t()/TQ(r(y)/y)}}IQ.exports=nXr});var LQ=s((fve,_Q)=>{"use strict";var aXr=Gf(),sXr=aXr();_Q.exports=sXr});var FQ=s((vve,RQ)=>{"use strict";var uXr=w(),PQ=LQ(),oXr=Gf();uXr(PQ,"factory",oXr);RQ.exports=PQ});var BQ=s((cve,MQ)=>{"use strict";var Vf=j().isPrimitive,eu=q(),Uf=sr();function fXr(r,e,t){return!Vf(r)||Uf(r)?new TypeError(eu("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Vf(e)||Uf(e)?new TypeError(eu("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Vf(t)||Uf(t)?new TypeError(eu("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(eu("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}MQ.exports=fXr});var CQ=s((lve,jQ)=>{"use strict";var kQ=C();function vXr(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+kQ(a*u)):(a=(t-e)*(t-i),t-kQ(a*(1-u)))}jQ.exports=vXr});var Wf=s((pve,zQ)=>{"use strict";var Me=w(),tu=R(),GQ=F(),VQ=I(),UQ=_(),HQ=O(),WQ=S(),cXr=k(),iu=X().factory,Hf=E(),lXr=M(),nu=q(),pXr=BQ(),DQ=CQ();function gXr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=iu();else if(arguments.length===1){if(r=arguments[0],!VQ(r))throw new TypeError(nu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(HQ(r,"prng")){if(!UQ(r.prng))throw new TypeError(nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=iu(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=pXr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!VQ(r))throw new TypeError(nu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(HQ(r,"prng")){if(!UQ(r.prng))throw new TypeError(nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=iu(r)}else e=iu()}return n===void 0?t=d:t=h,Me(t,"NAME","triangular"),r&&r.prng?(Me(t,"seed",null),Me(t,"seedLength",null),GQ(t,"state",WQ(null),cXr),Me(t,"stateLength",null),Me(t,"byteLength",null),Me(t,"toJSON",WQ(null)),Me(t,"PRNG",e)):(tu(t,"seed",o),tu(t,"seedLength",v),GQ(t,"state",l,p),tu(t,"stateLength",f),tu(t,"byteLength",c),Me(t,"toJSON",m),Me(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=lXr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return DQ(e,n,a,u)}function d(g,y,N){return Hf(g)||Hf(y)||Hf(N)||!(g<=N&&N<=y)?NaN:DQ(e,g,y,N)}}zQ.exports=gXr});var JQ=s((gve,XQ)=>{"use strict";var mXr=Wf(),dXr=mXr();XQ.exports=dXr});var ZQ=s((mve,YQ)=>{"use strict";var hXr=w(),xQ=JQ(),yXr=Wf();hXr(xQ,"factory",yXr);YQ.exports=xQ});var rK=s((dve,KQ)=>{"use strict";var $Q=j().isPrimitive,Df=q(),QQ=sr();function qXr(r,e){return!$Q(r)||QQ(r)?new TypeError(Df("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!$Q(e)||QQ(e)?new TypeError(Df("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Df("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}KQ.exports=qXr});var tK=s((hve,eK)=>{"use strict";function bXr(r,e,t){var i=r();return t*i+(1-i)*e}eK.exports=bXr});var zf=s((yve,vK)=>{"use strict";var Be=w(),au=R(),iK=F(),nK=I(),aK=_(),sK=O(),uK=S(),wXr=k(),su=X().factory,oK=E(),EXr=M(),uu=q(),NXr=rK(),fK=tK();function AXr(){var r,e,t,i,n,a;if(arguments.length===0)e=su();else if(arguments.length===1){if(r=arguments[0],!nK(r))throw new TypeError(uu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(sK(r,"prng")){if(!aK(r.prng))throw new TypeError(uu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=su(r)}else{if(n=arguments[0],a=arguments[1],i=NXr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!nK(r))throw new TypeError(uu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(sK(r,"prng")){if(!aK(r.prng))throw new TypeError(uu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=su(r)}else e=su()}return n===void 0?t=h:t=m,Be(t,"NAME","uniform"),r&&r.prng?(Be(t,"seed",null),Be(t,"seedLength",null),iK(t,"state",uK(null),wXr),Be(t,"stateLength",null),Be(t,"byteLength",null),Be(t,"toJSON",uK(null)),Be(t,"PRNG",e)):(au(t,"seed",u),au(t,"seedLength",o),iK(t,"state",c,l),au(t,"stateLength",v),au(t,"byteLength",f),Be(t,"toJSON",p),Be(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=EXr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return fK(e,n,a)}function h(d,g){return oK(d)||oK(g)||d>=g?NaN:fK(e,d,g)}}vK.exports=AXr});var lK=s((qve,cK)=>{"use strict";var OXr=zf(),SXr=OXr();cK.exports=SXr});var mK=s((bve,gK)=>{"use strict";var TXr=w(),pK=lK(),IXr=zf();TXr(pK,"factory",IXr);gK.exports=pK});var qK=s((wve,yK)=>{"use strict";var dK=D().isPrimitive,hK=q();function _Xr(r,e){return dK(r)?dK(e)?null:new TypeError(hK("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(hK("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}yK.exports=_Xr});var wK=s((Eve,bK)=>{"use strict";var LXr=W(),PXr=P();function RXr(r,e,t){return t*LXr(-PXr(1-r()),1/e)}bK.exports=RXr});var Xf=s((Nve,_K)=>{"use strict";var ke=w(),ou=R(),EK=F(),NK=I(),AK=_(),OK=O(),SK=S(),FXr=k(),fu=X().factory,TK=E(),MXr=M(),vu=q(),BXr=qK(),IK=wK();function kXr(){var r,e,t,i,n,a;if(arguments.length===0)t=fu();else if(arguments.length===1){if(e=arguments[0],!NK(e))throw new TypeError(vu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(OK(e,"prng")){if(!AK(e.prng))throw new TypeError(vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=fu(e)}else{if(a=arguments[0],r=arguments[1],n=BXr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!NK(e))throw new TypeError(vu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(OK(e,"prng")){if(!AK(e.prng))throw new TypeError(vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=fu(e)}else t=fu()}return r===void 0?i=h:i=m,ke(i,"NAME","weibull"),e&&e.prng?(ke(i,"seed",null),ke(i,"seedLength",null),EK(i,"state",SK(null),FXr),ke(i,"stateLength",null),ke(i,"byteLength",null),ke(i,"toJSON",SK(null)),ke(i,"PRNG",t)):(ou(i,"seed",u),ou(i,"seedLength",o),EK(i,"state",c,l),ou(i,"stateLength",v),ou(i,"byteLength",f),ke(i,"toJSON",p),ke(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=MXr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return IK(t,a,r)}function h(d,g){return TK(d)||TK(g)||d<=0||g<=0?NaN:IK(t,d,g)}}_K.exports=kXr});var PK=s((Ave,LK)=>{"use strict";var jXr=Xf(),CXr=jXr();LK.exports=CXr});var MK=s((Ove,FK)=>{"use strict";var GXr=w(),RK=PK(),VXr=Xf();GXr(RK,"factory",VXr);FK.exports=RK});var kK=s((Sve,BK)=>{"use strict";var B={};B.arcsine=HV().factory;B.bernoulli=KV().factory;B.beta=wH().factory;B.betaprime=sW().factory;B.binomial=UW().factory;B.boxMueller=tD().factory;B.cauchy=bD().factory;B.chi=HD().factory;B.chisquare=jn().factory;B.cosine=wz().factory;B.discreteUniform=Uz().factory;B.erlang=aX().factory;B.exponential=qX().factory;B.f=CX().factory;B.frechet=eJ().factory;B.gamma=Si().factory;B.geometric=dJ().factory;B.gumbel=BJ().factory;B.hypergeometric=fx().factory;B.improvedZiggurat=nt().factory;B.invgamma=Ox().factory;B.kumaraswamy=zx().factory;B.laplace=fY().factory;B.levy=TY().factory;B.logistic=zY().factory;B.lognormal=fZ().factory;B.minstd=bZ().factory;B.minstdShuffle=MZ().factory;B.mt19937=X().factory;B.negativeBinomial=E$().factory;B.normal=V$().factory;B.pareto1=aQ().factory;B.poisson=Tf().factory;B.rayleigh=qQ().factory;B.t=FQ().factory;B.triangular=ZQ().factory;B.uniform=mK().factory;B.weibull=MK().factory;BK.exports=B});var CK=s((Tve,jK)=>{"use strict";function UXr(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h,d,g,y,N,A;for(h=e[1],d=e[0],g=r[0],y=r[1],c=t[0],l=t[1],u=c[1],o=c[0]-h*u,v=l[1],f=l[0]-h*v,p=0,m=0,n=[],N=0;N<d;N++){for(a=[],A=0;A<h;A++)a.push(i(g[p],y[m])),p+=u,m+=v;n.push(a),p+=o,m+=f}return n}jK.exports=UXr});var VK=s((Ive,GK)=>{"use strict";var HXr=j().isPrimitive,WXr=L(),DXr=U(),zXr=q();function XXr(r,e){return t;function t(i){var n;if(!HXr(i)){if(e.nonnumeric===void 0)throw new TypeError(zXr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===WXr?e.pinf:n===DXr?e.ninf:n}}GK.exports=XXr});var DK=s((_ve,WK)=>{"use strict";var UK=j().isPrimitive,JXr=L(),xXr=U(),HK=q();function YXr(r,e){return t;function t(i,n){var a;if(!UK(i)){if(e.nonnumeric===void 0)throw new TypeError(HK("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!UK(n)){if(e.nonnumeric===void 0)throw new TypeError(HK("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===JXr?e.pinf:a===xXr?e.ninf:a}}WK.exports=YXr});var XK=s((Lve,zK)=>{"use strict";var Jf=j().isPrimitive,ZXr=L(),$Xr=U(),xf=q();function QXr(r,e){return t;function t(i,n,a){var u;if(!Jf(i)){if(e.nonnumeric===void 0)throw new TypeError(xf("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Jf(n)){if(e.nonnumeric===void 0)throw new TypeError(xf("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Jf(a)){if(e.nonnumeric===void 0)throw new TypeError(xf("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===ZXr?e.pinf:u===$Xr?e.ninf:u}}zK.exports=QXr});var xK=s((Pve,JK)=>{"use strict";var KXr=K().isPrimitive,rJr=q();function eJr(r){return e;function e(t){if(!KXr(t))throw new TypeError(rJr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}JK.exports=eJr});var QK=s((Rve,$K)=>{"use strict";var YK=K().isPrimitive,ZK=q();function tJr(r){return e;function e(t,i){if(!YK(t))throw new TypeError(ZK("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!YK(i))throw new TypeError(ZK("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}$K.exports=tJr});var rrr=s((Fve,KK)=>{"use strict";var Yf=K().isPrimitive,Zf=q();function iJr(r){return e;function e(t,i,n){if(!Yf(t))throw new TypeError(Zf("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Yf(i))throw new TypeError(Zf("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Yf(n))throw new TypeError(Zf("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}KK.exports=iJr});var trr=s((Mve,err)=>{"use strict";function nJr(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h,d,g,y,N,A,V,T,J,fr,z;for(N=e[1],A=e[0],V=r[0],T=r[1],J=r[2],p=t[0],m=t[1],h=t[2],u=p[1],o=p[0]-N*u,v=m[1],f=m[0]-N*v,c=h[1],l=h[0]-N*c,d=0,g=0,y=0,n=[],fr=0;fr<A;fr++){for(a=[],z=0;z<N;z++)a.push(i(V[d],T[g],J[y])),d+=u,g+=v,y+=c;n.push(a),d+=o,g+=f,y+=l}return n}err.exports=nJr});var nrr=s((Bve,irr)=>{"use strict";function aJr(r,e){var t,i,n,a,u;for(t=r.length,i=r[0].length,a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)n[u]=e(n[u]);return r}irr.exports=aJr});var srr=s((kve,arr)=>{"use strict";var sJr=nrr();function uJr(r,e){return sJr(r,e)}arr.exports=uJr});var orr=s((jve,urr)=>{"use strict";var Qr={};Qr.binary2d=CK();Qr.d_d=VK();Qr.dd_d=DK();Qr.ddd_d=XK();Qr.s_o=xK();Qr.ss_o=QK();Qr.sss_o=rrr();Qr.ternary2d=trr();Qr.unary2d=srr();urr.exports=Qr});var vrr=s((Cve,frr)=>{"use strict";var je=y6(),or,G={};G.bartlettTest=Sq();G.broadcast=Fq();G.cumax=Hq().ndarray;G.filled=Jq();G.filledBy=ib();G.flattenArray=La();G.filled2d=un();G.ones2d=ub();G.zeros2d=cb();G.isArray=mr();G.isBoolean=vr().isPrimitive;G.isNumber=j().isPrimitive;G.isPositiveNumber=D().isPrimitive;G.isString=K().isPrimitive;G.iterator2array=BA();G.iterSawtoothWave=yO();G.linspace=_S();G.max=CS().ndarray;G.mskmax=JS().ndarray;G.assert={};or=fI();je(or,G.assert);G.blas={};or=hI();je(or,G.blas);or=lR();je(or,G);or=SR();je(or,G);or=hM();je(or,G);G.dists={};or=nj();je(or,G.dists);or=iG();je(or,G);G.random={};or=kK();je(or,G.random);G.tools={};or=orr();je(or,G.tools);frr.exports=G});var fJr=s((Gve,crr)=>{var oJr=vrr();crr.exports=oJr});return fJr();})();
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
			s = ns.assert.verifyPRNGSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isProbability( p, 'Success probability' );
	rand = ns.random.geometric( p, {
		'seed': s
	});
	return ns.filledBy( nrows, ncols, rand );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, f );
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
		return ns.tools.unary2d( value, f );
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
		return ns.tools.unary2d( value, __STDLIB_KEBABCASE );
	}
	return __STDLIB_KEBABCASE( value );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, f );
	}
	return f( value );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, f );
	}
	return f( value );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, f );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, f );
	}
	return f( value );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, f );
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
		return ns.tools.unary2d( value, f );
	}
	return f( value );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, __STDLIB_PASCALCASE );
	}
	return __STDLIB_PASCALCASE( value );
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
			s = ns.assert.verifyPRNGSeed( a );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( v, 'Degrees of freedom' );
	rand = ns.random.t( v, {
		'seed': s
	});
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, f );
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
		return ns.tools.unary2d( value, f );
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
		return ns.tools.unary2d( value, f );
	}
	return f( value );
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
			s = ns.assert.verifyPRNGSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( lambda, 'Rate parameter' );
	rand = ns.random.exponential( lambda, {
		'seed': s
	});
	return ns.filledBy( nrows, ncols, rand );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
			sd = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, f );
	}
	return f( value );
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
		return ns.tools.unary2d( value, __STDLIB_UNCAPITALIZE );
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
		return ns.tools.unary2d( value, f );
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
		return ns.tools.unary2d( value, f );
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
		return ns.tools.unary2d( value, f );
	}
	return f( value );
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
			s = ns.assert.verifyPRNGSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	rand = ns.random.improvedZiggurat({
		'seed': s
	});
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, f );
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
		return ns.tools.unary2d( value, __STDLIB_STARTCASE );
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
		return ns.tools.unary2d( value, f );
	}
	return f( value );
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
		return ns.tools.unary2d( value, f );
	}
	return f( value );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, f );
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
		return ns.tools.unary2d( value, f );
	}
	return f( value );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
			s = ns.assert.verifyPRNGSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( sigma, 'Scale parameter' );
	rand = ns.random.rayleigh( sigma, {
		'seed': s
	});
	return ns.filledBy( nrows, ncols, rand );
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
	arrays = ns.broadcast( [ x, y ], __STDLIB_ADD_DTYPES, __STDLIB_ADD_MSGS ); 
	f = ns.tools.dd_d( ns.add, opts );
	return ns.tools.binary2d( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], f );
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
			sd = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, f );
	}
	return f( value );
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
		return ns.tools.unary2d( value, __STDLIB_LOWERCASE );
	}
	return __STDLIB_LOWERCASE( value );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
			sd = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
			s = ns.assert.verifyPRNGSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	rand = ns.random.boxMuller({
		'seed': s
	});
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, f );
	}
	return f( value );
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
			s = ns.assert.verifyPRNGSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( lambda, 'Mean parameter' );
	rand = ns.random.poisson( lambda, {
		'seed': s
	});
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, __STDLIB_CAPITALIZE );
	}
	return __STDLIB_CAPITALIZE( value );
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
			s = ns.assert.verifyPRNGSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( k, 'Degrees of freedom' );
	rand = ns.random.chisquare( k, {
		'seed': s
	});
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, __STDLIB_CONSTANTCASE );
	}
	return __STDLIB_CONSTANTCASE( value );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, f );
	}
	return f( value );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, f );
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
			s = ns.assert.verifyPRNGSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isPositiveNumber( k, 'Degrees of freedom' );
	rand = ns.random.chi( k, {
		'seed': s
	});
	return ns.filledBy( nrows, ncols, rand );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, f );
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
		return ns.tools.unary2d( value, f );
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
		return ns.tools.unary2d( value, f );
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
		return ns.tools.unary2d( value, f );
	}
	return f( value );
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
			sd = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, __STDLIB_CAMELCASE );
	}
	return __STDLIB_CAMELCASE( value );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
	arrays = ns.broadcast( [ x, y ], __STDLIB_MUL_DTYPES, __STDLIB_MUL_MSGS ); 
	f = ns.tools.dd_d( ns.mul, opts );
	return ns.tools.binary2d( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], f );
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
		return ns.tools.unary2d( value, f );
	}
	return f( value );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, f );
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
		return ns.tools.unary2d( value, __STDLIB_SNAKECASE );
	}
	return __STDLIB_SNAKECASE( value );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
		return ns.tools.unary2d( value, __STDLIB_UPPERCASE );
	}
	return __STDLIB_UPPERCASE( value );
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
			s = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
			s = ns.assert.verifyPRNGSeed( v );
		} else {
			ns.assert.unrecognizedOptionName( o );
		}
	}
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
	ns.assert.isProbability( p, 'Success probability' );
	rand = ns.random.bernoulli( p, {
		'seed': s
	});
	return ns.filledBy( nrows, ncols, rand );
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
			sd = ns.assert.verifyPRNGSeed( v );
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
	return ns.filledBy( nrows, ncols, rand );
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
	arrays = ns.broadcast( [ x, y ], __STDLIB_SUB_DTYPES, __STDLIB_SUB_MSGS ); 
	f = ns.tools.dd_d( ns.sub, opts );
	return ns.tools.binary2d( arrays[ 0 ], arrays[ 1 ], arrays[ 2 ], f );
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
		return ns.tools.unary2d( value, f );
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
		return ns.tools.unary2d( value, f );
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
		return ns.tools.unary2d( value, f );
	}
	return f( value );
}
