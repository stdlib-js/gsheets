/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Wn=s((DXr,Zf)=>{"use strict";function $K(r){return Object.keys(Object(r))}Zf.exports=$K});var Qf=s((zXr,$f)=>{"use strict";var QK=Wn();function KK(){return(QK(arguments)||"").length!==2}function rrr(){return KK(1,2)}$f.exports=rrr});var rv=s((XXr,Kf)=>{"use strict";var err=typeof Object.keys<"u";Kf.exports=err});var tv=s((JXr,ev)=>{"use strict";function trr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}ev.exports=trr});var nv=s((xXr,iv)=>{"use strict";var irr=tv();iv.exports=irr});var sv=s((YXr,av)=>{"use strict";var nrr=nv(),arr=nrr();function srr(){return arr&&typeof Symbol.toStringTag=="symbol"}av.exports=srr});var Wi=s((ZXr,uv)=>{"use strict";var urr=sv();uv.exports=urr});var cu=s(($Xr,ov)=>{"use strict";var orr=Object.prototype.toString;ov.exports=orr});var vv=s((QXr,fv)=>{"use strict";var frr=cu();function vrr(r){return frr.call(r)}fv.exports=vrr});var lv=s((KXr,cv)=>{"use strict";var crr=Object.prototype.hasOwnProperty;function lrr(r,e){return r==null?!1:crr.call(r,e)}cv.exports=lrr});var O=s((rJr,pv)=>{"use strict";var prr=lv();pv.exports=prr});var mv=s((eJr,gv)=>{"use strict";var grr=typeof Symbol=="function"?Symbol:void 0;gv.exports=grr});var lu=s((tJr,dv)=>{"use strict";var mrr=mv();dv.exports=mrr});var qv=s((iJr,yv)=>{"use strict";var hv=lu(),drr=typeof hv=="function"?hv.toStringTag:"";yv.exports=drr});var wv=s((nJr,bv)=>{"use strict";var hrr=O(),Di=qv(),pu=cu();function yrr(r){var e,t,i;if(r==null)return pu.call(r);t=r[Di],e=hrr(r,Di);try{r[Di]=void 0}catch{return pu.call(r)}return i=pu.call(r),e?r[Di]=t:delete r[Di],i}bv.exports=yrr});var ir=s((aJr,Ev)=>{"use strict";var qrr=Wi(),brr=vv(),wrr=wv(),gu;qrr()?gu=wrr:gu=brr;Ev.exports=gu});var mu=s((sJr,Nv)=>{"use strict";var Err=ir();function Nrr(r){return Err(r)==="[object Arguments]"}Nv.exports=Nrr});var Sv=s((uJr,Ov)=>{"use strict";var Arr=mu(),Av;function Orr(){return Arr(arguments)}Av=Orr();Ov.exports=Av});var Iv=s((oJr,Tv)=>{"use strict";var Srr=typeof Object.defineProperty=="function"?Object.defineProperty:null;Tv.exports=Srr});var Lv=s((fJr,_v)=>{"use strict";var Trr=Iv();function Irr(){try{return Trr({},"x",{}),!0}catch{return!1}}_v.exports=Irr});var Rv=s((vJr,Pv)=>{"use strict";var _rr=Object.defineProperty;Pv.exports=_rr});var du=s((cJr,Fv)=>{"use strict";function Lrr(r){return typeof r=="number"}Fv.exports=Lrr});var hu=s((lJr,Bv)=>{"use strict";function Prr(r){return r[0]==="-"}function Mv(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Rrr(r,e,t){var i=!1,n=e-r.length;return n<0||(Prr(r)&&(i=!0,r=r.substr(1)),r=t?r+Mv(n):Mv(n)+r,i&&(r="-"+r)),r}Bv.exports=Rrr});var Gv=s((pJr,Cv)=>{"use strict";var Frr=du(),kv=hu(),Mrr=String.prototype.toLowerCase,jv=String.prototype.toUpperCase;function Brr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Frr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=kv(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=kv(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===jv.call(r.specifier)?jv.call(t):Mrr.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Cv.exports=Brr});var Uv=s((gJr,Vv)=>{"use strict";function krr(r){return typeof r=="string"}Vv.exports=krr});var Dv=s((mJr,Wv)=>{"use strict";var jrr=du(),Crr=Math.abs,Grr=String.prototype.toLowerCase,Hv=String.prototype.toUpperCase,wt=String.prototype.replace,Vrr=/e\+(\d)$/,Urr=/e-(\d)$/,Hrr=/^(\d+)$/,Wrr=/^(\d+)e/,Drr=/\.0$/,zrr=/\.0*e/,Xrr=/(\..*[^0])0*e/;function Jrr(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!jrr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Crr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=wt.call(t,Xrr,"$1e"),t=wt.call(t,zrr,"e"),t=wt.call(t,Drr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=wt.call(t,Vrr,"e+0$1"),t=wt.call(t,Urr,"e-0$1"),r.alternate&&(t=wt.call(t,Hrr,"$1."),t=wt.call(t,Wrr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Hv.call(r.specifier)?Hv.call(t):Grr.call(t),t}Wv.exports=Jrr});var Jv=s((dJr,Xv)=>{"use strict";function zv(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function xrr(r,e,t){var i=e-r.length;return i<0||(r=t?r+zv(i):zv(i)+r),r}Xv.exports=xrr});var Yv=s((hJr,xv)=>{"use strict";var Yrr=Gv(),Zrr=Uv(),$rr=Dv(),Qrr=Jv(),Krr=hu(),rer=String.fromCharCode,Dn=isNaN,eer=Array.isArray;function ter(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function ier(r){var e,t,i,n,a,u,o,v,f;if(!eer(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,v=0;v<r.length;v++)if(i=r[v],Zrr(i))u+=i;else{if(e=i.precision!==void 0,i=ter(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,Dn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,Dn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=Yrr(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Dn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Dn(a)?String(i.arg):rer(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=$rr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Krr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Qrr(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}xv.exports=ier});var $v=s((yJr,Zv)=>{"use strict";var ner=Yv();Zv.exports=ner});var Kv=s((qJr,Qv)=>{"use strict";var zn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function aer(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function ser(r){var e,t,i,n;for(t=[],n=0,i=zn.exec(r);i;)e=r.slice(n,zn.lastIndex-i[0].length),e.length&&t.push(e),t.push(aer(i)),n=zn.lastIndex,i=zn.exec(r);return e=r.slice(n),e.length&&t.push(e),t}Qv.exports=ser});var ec=s((bJr,rc)=>{"use strict";var uer=Kv();rc.exports=uer});var ic=s((wJr,tc)=>{"use strict";function oer(r){return typeof r=="string"}tc.exports=oer});var sc=s((EJr,ac)=>{"use strict";var fer=$v(),ver=ec(),cer=ic();function nc(r){var e,t,i;if(!cer(r))throw new TypeError(nc("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=ver(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return fer.apply(null,t)}ac.exports=nc});var q=s((NJr,uc)=>{"use strict";var ler=sc();uc.exports=ler});var pc=s((AJr,lc)=>{"use strict";var oc=q(),Dt=Object.prototype,fc=Dt.toString,vc=Dt.__defineGetter__,cc=Dt.__defineSetter__,per=Dt.__lookupGetter__,ger=Dt.__lookupSetter__;function mer(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||fc.call(r)==="[object Array]")throw new TypeError(oc("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||fc.call(t)==="[object Array]")throw new TypeError(oc("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(per.call(r,e)||ger.call(r,e)?(i=r.__proto__,r.__proto__=Dt,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&vc&&vc.call(r,e,t.get),u&&cc&&cc.call(r,e,t.set),r}lc.exports=mer});var je=s((OJr,gc)=>{"use strict";var der=Lv(),her=Rv(),yer=pc(),yu;der()?yu=her:yu=yer;gc.exports=yu});var dc=s((SJr,mc)=>{"use strict";var qer=je();function ber(r,e,t){qer(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}mc.exports=ber});var w=s((TJr,hc)=>{"use strict";var wer=dc();hc.exports=wer});var qu=s((IJr,yc)=>{"use strict";function Eer(r){return typeof r=="string"}yc.exports=Eer});var bc=s((_Jr,qc)=>{"use strict";var Ner=String.prototype.valueOf;qc.exports=Ner});var Ec=s((LJr,wc)=>{"use strict";var Aer=bc();function Oer(r){try{return Aer.call(r),!0}catch{return!1}}wc.exports=Oer});var bu=s((PJr,Nc)=>{"use strict";var Ser=Wi(),Ter=ir(),Ier=Ec(),_er=Ser();function Ler(r){return typeof r=="object"?r instanceof String?!0:_er?Ier(r):Ter(r)==="[object String]":!1}Nc.exports=Ler});var Oc=s((RJr,Ac)=>{"use strict";var Per=qu(),Rer=bu();function Fer(r){return Per(r)||Rer(r)}Ac.exports=Fer});var K=s((FJr,Tc)=>{"use strict";var Sc=w(),wu=Oc(),Mer=qu(),Ber=bu();Sc(wu,"isPrimitive",Mer);Sc(wu,"isObject",Ber);Tc.exports=wu});var Eu=s((MJr,Ic)=>{"use strict";function ker(r){return typeof r=="number"}Ic.exports=ker});var Lc=s((BJr,_c)=>{"use strict";_c.exports=Number});var Xn=s((kJr,Pc)=>{"use strict";var jer=Lc();Pc.exports=jer});var Fc=s((jJr,Rc)=>{"use strict";var Cer=Xn(),Ger=Cer.prototype.toString;Rc.exports=Ger});var Bc=s((CJr,Mc)=>{"use strict";var Ver=Fc();function Uer(r){try{return Ver.call(r),!0}catch{return!1}}Mc.exports=Uer});var Nu=s((GJr,kc)=>{"use strict";var Her=Wi(),Wer=ir(),Der=Xn(),zer=Bc(),Xer=Her();function Jer(r){return typeof r=="object"?r instanceof Der?!0:Xer?zer(r):Wer(r)==="[object Number]":!1}kc.exports=Jer});var Cc=s((VJr,jc)=>{"use strict";var xer=Eu(),Yer=Nu();function Zer(r){return xer(r)||Yer(r)}jc.exports=Zer});var j=s((UJr,Vc)=>{"use strict";var Gc=w(),Au=Cc(),$er=Eu(),Qer=Nu();Gc(Au,"isPrimitive",$er);Gc(Au,"isObject",Qer);Vc.exports=Au});var Hc=s((HJr,Uc)=>{"use strict";function Ker(r){return r!==r}Uc.exports=Ker});var E=s((WJr,Wc)=>{"use strict";var rtr=Hc();Wc.exports=rtr});var Ou=s((DJr,Dc)=>{"use strict";var etr=j().isPrimitive,ttr=E();function itr(r){return etr(r)&&ttr(r)}Dc.exports=itr});var Su=s((zJr,zc)=>{"use strict";var ntr=j().isObject,atr=E();function str(r){return ntr(r)&&atr(r.valueOf())}zc.exports=str});var Jc=s((XJr,Xc)=>{"use strict";var utr=Ou(),otr=Su();function ftr(r){return utr(r)||otr(r)}Xc.exports=ftr});var sr=s((JJr,Yc)=>{"use strict";var xc=w(),Tu=Jc(),vtr=Ou(),ctr=Su();xc(Tu,"isPrimitive",vtr);xc(Tu,"isObject",ctr);Yc.exports=Tu});var L=s((xJr,Zc)=>{"use strict";var ltr=Number.POSITIVE_INFINITY;Zc.exports=ltr});var U=s((YJr,$c)=>{"use strict";var ptr=Xn(),gtr=ptr.NEGATIVE_INFINITY;$c.exports=gtr});var Kc=s((ZJr,Qc)=>{"use strict";var mtr=Math.floor;Qc.exports=mtr});var Q=s(($Jr,rl)=>{"use strict";var dtr=Kc();rl.exports=dtr});var tl=s((QJr,el)=>{"use strict";var htr=Q();function ytr(r){return htr(r)===r}el.exports=ytr});var Ir=s((KJr,il)=>{"use strict";var qtr=tl();il.exports=qtr});var Iu=s((rxr,nl)=>{"use strict";var btr=L(),wtr=U(),Etr=Ir();function Ntr(r){return r<btr&&r>wtr&&Etr(r)}nl.exports=Ntr});var _u=s((exr,al)=>{"use strict";var Atr=j().isPrimitive,Otr=Iu();function Str(r){return Atr(r)&&Otr(r)}al.exports=Str});var Lu=s((txr,sl)=>{"use strict";var Ttr=j().isObject,Itr=Iu();function _tr(r){return Ttr(r)&&Itr(r.valueOf())}sl.exports=_tr});var ol=s((ixr,ul)=>{"use strict";var Ltr=_u(),Ptr=Lu();function Rtr(r){return Ltr(r)||Ptr(r)}ul.exports=Rtr});var Cr=s((nxr,vl)=>{"use strict";var fl=w(),Pu=ol(),Ftr=_u(),Mtr=Lu();fl(Pu,"isPrimitive",Ftr);fl(Pu,"isObject",Mtr);vl.exports=Pu});var Ru=s((axr,cl)=>{"use strict";var Btr=Object.prototype.propertyIsEnumerable;cl.exports=Btr});var gl=s((sxr,pl)=>{"use strict";var ktr=Ru(),ll;function jtr(){return!ktr.call("beep","0")}ll=jtr();pl.exports=ll});var dl=s((uxr,ml)=>{"use strict";var Ctr=K(),Gtr=sr().isPrimitive,Vtr=Cr().isPrimitive,Utr=Ru(),Htr=gl();function Wtr(r,e){var t;return r==null?!1:(t=Utr.call(r,e),!t&&Htr&&Ctr(r)?(e=+e,!Gtr(e)&&Vtr(e)&&e>=0&&e<r.length):t)}ml.exports=Wtr});var zi=s((oxr,hl)=>{"use strict";var Dtr=dl();hl.exports=Dtr});var ql=s((fxr,yl)=>{"use strict";var ztr=ir(),Fu;function Xtr(r){return ztr(r)==="[object Array]"}Array.isArray?Fu=Array.isArray:Fu=Xtr;yl.exports=Fu});var mr=s((vxr,bl)=>{"use strict";var Jtr=ql();bl.exports=Jtr});var zt=s((cxr,wl)=>{"use strict";var xtr=4294967295;wl.exports=xtr});var Nl=s((lxr,El)=>{"use strict";var Ytr=O(),Ztr=zi(),$tr=mr(),Qtr=Ir(),Ktr=zt();function rir(r){return r!==null&&typeof r=="object"&&!$tr(r)&&typeof r.length=="number"&&Qtr(r.length)&&r.length>=0&&r.length<=Ktr&&Ytr(r,"callee")&&!Ztr(r,"callee")}El.exports=rir});var Bu=s((pxr,Al)=>{"use strict";var eir=Sv(),tir=mu(),iir=Nl(),Mu;eir?Mu=tir:Mu=iir;Al.exports=Mu});var Tl=s((gxr,Sl)=>{"use strict";var nir=Bu(),Ol=Wn(),air=Array.prototype.slice;function sir(r){return nir(r)?Ol(air.call(r)):Ol(r)}Sl.exports=sir});var _l=s((mxr,Il)=>{"use strict";var uir=mr(),oir=q();function fir(r){if(typeof r!="function")throw new TypeError(oir("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!uir(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}Il.exports=fir});var Pl=s((dxr,Ll)=>{"use strict";var vir=_l();Ll.exports=vir});var Fl=s((hxr,Rl)=>{"use strict";function cir(r){return r!==null&&typeof r=="object"}Rl.exports=cir});var ju=s((yxr,Ml)=>{"use strict";var lir=w(),pir=Pl(),ku=Fl(),gir=pir(ku);lir(ku,"isObjectLikeArray",gir);Ml.exports=ku});var kl=s((qxr,Bl)=>{"use strict";function mir(){}Bl.exports=mir});var k=s((bxr,jl)=>{"use strict";var dir=kl();jl.exports=dir});var Gl=s((wxr,Cl)=>{"use strict";var hir=zi(),yir=k(),qir=hir(yir,"prototype");Cl.exports=qir});var Ul=s((Exr,Vl)=>{"use strict";var bir=zi(),wir={toString:null},Eir=!bir(wir,"toString");Vl.exports=Eir});var Wl=s((Nxr,Hl)=>{"use strict";var Nir=9007199254740991;Hl.exports=Nir});var zl=s((Axr,Dl)=>{"use strict";var Air=Ir(),Oir=Wl();function Sir(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Air(r.length)&&r.length>=0&&r.length<=Oir}Dl.exports=Sir});var Gr=s((Oxr,Xl)=>{"use strict";var Tir=zl();Xl.exports=Tir});var Zl=s((Sxr,Yl)=>{"use strict";var Jl=sr(),Iir=Gr(),_ir=K().isPrimitive,Lir=Cr().isPrimitive,xl=q();function Pir(r,e,t){var i,n;if(!Iir(r)&&!_ir(r))throw new TypeError(xl("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!Lir(t))throw new TypeError(xl("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(Jl(e)){for(;n<i;n++)if(Jl(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}Yl.exports=Pir});var Jn=s((Txr,$l)=>{"use strict";var Rir=Zl();$l.exports=Rir});var Kl=s((Ixr,Ql)=>{"use strict";var Fir=/./;Ql.exports=Fir});var Cu=s((_xr,r4)=>{"use strict";function Mir(r){return typeof r=="boolean"}r4.exports=Mir});var t4=s((Lxr,e4)=>{"use strict";var Bir=Boolean;e4.exports=Bir});var n4=s((Pxr,i4)=>{"use strict";var kir=t4();i4.exports=kir});var s4=s((Rxr,a4)=>{"use strict";var jir=Boolean.prototype.toString;a4.exports=jir});var o4=s((Fxr,u4)=>{"use strict";var Cir=s4();function Gir(r){try{return Cir.call(r),!0}catch{return!1}}u4.exports=Gir});var Gu=s((Mxr,f4)=>{"use strict";var Vir=Wi(),Uir=ir(),Hir=n4(),Wir=o4(),Dir=Vir();function zir(r){return typeof r=="object"?r instanceof Hir?!0:Dir?Wir(r):Uir(r)==="[object Boolean]":!1}f4.exports=zir});var c4=s((Bxr,v4)=>{"use strict";var Xir=Cu(),Jir=Gu();function xir(r){return Xir(r)||Jir(r)}v4.exports=xir});var fr=s((kxr,p4)=>{"use strict";var l4=w(),Vu=c4(),Yir=Cu(),Zir=Gu();l4(Vu,"isPrimitive",Yir);l4(Vu,"isObject",Zir);p4.exports=Vu});var m4=s((jxr,g4)=>{"use strict";function $ir(){return new Function("return this;")()}g4.exports=$ir});var h4=s((Cxr,d4)=>{"use strict";var Qir=typeof self=="object"?self:null;d4.exports=Qir});var q4=s((Gxr,y4)=>{"use strict";var Kir=typeof window=="object"?window:null;y4.exports=Kir});var w4=s((Vxr,b4)=>{"use strict";var rnr=typeof globalThis=="object"?globalThis:null;b4.exports=rnr});var S4=s((Uxr,O4)=>{"use strict";var enr=fr().isPrimitive,tnr=q(),inr=m4(),E4=h4(),N4=q4(),A4=w4();function nnr(r){if(arguments.length){if(!enr(r))throw new TypeError(tnr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return inr()}if(A4)return A4;if(E4)return E4;if(N4)return N4;throw new Error("unexpected error. Unable to resolve global object.")}O4.exports=nnr});var _4=s((Hxr,I4)=>{"use strict";var anr=S4(),T4=anr(),snr=T4.document&&T4.document.childNodes;I4.exports=snr});var P4=s((Wxr,L4)=>{"use strict";var unr=Int8Array;L4.exports=unr});var F4=s((Dxr,R4)=>{"use strict";var onr=Kl(),fnr=_4(),vnr=P4();function cnr(){return typeof onr=="function"||typeof vnr=="object"||typeof fnr=="function"}R4.exports=cnr});var Uu=s((zxr,M4)=>{"use strict";function lnr(){return/^\s*function\s*([^(]*)/i}M4.exports=lnr});var k4=s((Xxr,B4)=>{"use strict";var pnr=Uu(),gnr=pnr();B4.exports=gnr});var Hu=s((Jxr,C4)=>{"use strict";var mnr=w(),j4=Uu(),dnr=k4();mnr(j4,"REGEXP",dnr);C4.exports=j4});var V4=s((xxr,G4)=>{"use strict";var hnr=ju();function ynr(r){return hnr(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}G4.exports=ynr});var Et=s((Yxr,U4)=>{"use strict";var qnr=V4();U4.exports=qnr});var W4=s((Zxr,H4)=>{"use strict";var bnr=ir(),wnr=Hu().REGEXP,Enr=Et();function Nnr(r){var e,t,i;if(t=bnr(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=wnr.exec(i.toString()),e)return e[1]}return Enr(r)?"Buffer":t}H4.exports=Nnr});var Ce=s(($xr,D4)=>{"use strict";var Anr=W4();D4.exports=Anr});var X4=s((Qxr,z4)=>{"use strict";var Onr=Ce();function Snr(r){var e;return r===null?"null":(e=typeof r,e==="object"?Onr(r).toLowerCase():e)}z4.exports=Snr});var x4=s((Kxr,J4)=>{"use strict";var Tnr=Ce();function Inr(r){return Tnr(r).toLowerCase()}J4.exports=Inr});var xn=s((rYr,Y4)=>{"use strict";var _nr=F4(),Lnr=X4(),Pnr=x4(),Rnr=_nr()?Pnr:Lnr;Y4.exports=Rnr});var Wu=s((eYr,Z4)=>{"use strict";function Fnr(r){return r.constructor&&r.constructor.prototype===r}Z4.exports=Fnr});var $4=s((tYr,Mnr)=>{Mnr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var K4=s((iYr,Q4)=>{"use strict";var Bnr=typeof window>"u"?void 0:window;Q4.exports=Bnr});var i6=s((nYr,t6)=>{"use strict";var knr=O(),jnr=Jn(),r6=xn(),Cnr=Wu(),Gnr=$4(),Xt=K4(),e6;function Vnr(){var r;if(r6(Xt)==="undefined")return!1;for(r in Xt)try{jnr(Gnr,r)===-1&&knr(Xt,r)&&Xt[r]!==null&&r6(Xt[r])==="object"&&Cnr(Xt[r])}catch{return!0}return!1}e6=Vnr();t6.exports=e6});var a6=s((aYr,n6)=>{"use strict";var Unr=typeof window<"u";n6.exports=Unr});var o6=s((sYr,u6)=>{"use strict";var Hnr=i6(),s6=Wu(),Wnr=a6();function Dnr(r){if(Wnr===!1&&!Hnr)return s6(r);try{return s6(r)}catch{return!1}}u6.exports=Dnr});var f6=s((uYr,znr)=>{znr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var l6=s((oYr,c6)=>{"use strict";var Xnr=ju(),Du=O(),Jnr=Bu(),xnr=Gl(),Ynr=Ul(),Znr=o6(),v6=f6();function $nr(r){var e,t,i,n,a,u,o;if(n=[],Jnr(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!Du(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!Xnr(r))return n;t=xnr&&i}for(a in r)!(t&&a==="prototype")&&Du(r,a)&&n.push(String(a));if(Ynr)for(e=Znr(r),o=0;o<v6.length;o++)u=v6[o],!(e&&u==="constructor")&&Du(r,u)&&n.push(String(u));return n}c6.exports=$nr});var g6=s((fYr,p6)=>{"use strict";var Qnr=Qf(),Knr=rv(),rar=Wn(),ear=Tl(),tar=l6(),Yn;Knr?Qnr()?Yn=ear:Yn=rar:Yn=tar;p6.exports=Yn});var Jt=s((vYr,m6)=>{"use strict";var iar=g6();m6.exports=iar});var h6=s((cYr,d6)=>{"use strict";var nar=Jt(),aar=O(),sar=q();function uar(r,e){var t,i,n;for(t=nar(r),n=0;n<t.length;n++){if(i=t[n],aar(e,i))throw new Error(sar("unexpected error. Property already exists on destination object. Property: %s.",i));e[i]=r[i]}return e}d6.exports=uar});var q6=s((lYr,y6)=>{"use strict";var oar=mr();function far(r){return typeof r=="object"&&r!==null&&!oar(r)}y6.exports=far});var Zn=s((pYr,b6)=>{"use strict";var car=q6();b6.exports=car});var E6=s((gYr,w6)=>{"use strict";var lar=xn();function par(r){return lar(r)==="function"}w6.exports=par});var _=s((mYr,N6)=>{"use strict";var gar=E6();N6.exports=gar});var O6=s((dYr,A6)=>{"use strict";var mar=Object;A6.exports=mar});var xt=s((hYr,S6)=>{"use strict";var dar=O6();S6.exports=dar});var I6=s((yYr,T6)=>{"use strict";var har=Object.getPrototypeOf;T6.exports=har});var L6=s((qYr,_6)=>{"use strict";function yar(r){return r.__proto__}_6.exports=yar});var R6=s((bYr,P6)=>{"use strict";var qar=ir(),bar=L6();function war(r){var e=bar(r);return e||e===null?e:qar(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}P6.exports=war});var M6=s((wYr,F6)=>{"use strict";var Ear=_(),Nar=I6(),Aar=R6(),zu;Ear(Object.getPrototypeOf)?zu=Nar:zu=Aar;F6.exports=zu});var k6=s((EYr,B6)=>{"use strict";var Oar=xt(),Sar=M6();function Tar(r){return r==null?null:(r=Oar(r),Sar(r))}B6.exports=Tar});var Nt=s((NYr,j6)=>{"use strict";var Iar=k6();j6.exports=Iar});var V6=s((AYr,G6)=>{"use strict";var _ar=Zn(),C6=_(),Lar=Nt(),$n=O(),Par=ir(),Rar=Object.prototype;function Far(r){var e;for(e in r)if(!$n(r,e))return!1;return!0}function Mar(r){var e;return _ar(r)?(e=Lar(r),e?!$n(r,"constructor")&&$n(e,"constructor")&&C6(e.constructor)&&Par(e.constructor)==="[object Function]"&&$n(e,"isPrototypeOf")&&C6(e.isPrototypeOf)&&(e===Rar||Far(r)):!0):!1}G6.exports=Mar});var I=s((OYr,U6)=>{"use strict";var Bar=V6();U6.exports=Bar});var W6=s((SYr,H6)=>{"use strict";var kar=je();function jar(r,e,t){kar(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}H6.exports=jar});var z6=s((TYr,D6)=>{"use strict";var Car=W6();D6.exports=Car});var J6=s((IYr,X6)=>{"use strict";var Gar=L(),Var=U();function Uar(r){return r===Gar||r===Var}X6.exports=Uar});var Rr=s((_Yr,x6)=>{"use strict";var Har=J6();x6.exports=Har});var Z6=s((LYr,Y6)=>{"use strict";function War(r){return Math.abs(r)}Y6.exports=War});var Y=s((PYr,$6)=>{"use strict";var Dar=Z6();$6.exports=Dar});var K6=s((RYr,Q6)=>{"use strict";var zar=ir(),Xar=typeof Uint32Array=="function";function Jar(r){return Xar&&r instanceof Uint32Array||zar(r)==="[object Uint32Array]"}Q6.exports=Jar});var Kr=s((FYr,r8)=>{"use strict";var xar=K6();r8.exports=xar});var t8=s((MYr,e8)=>{"use strict";var Yar=typeof Uint32Array=="function"?Uint32Array:null;e8.exports=Yar});var a8=s((BYr,n8)=>{"use strict";var Zar=Kr(),Xu=zt(),i8=t8();function $ar(){var r,e;if(typeof i8!="function")return!1;try{e=[1,3.14,-3.14,Xu+1,Xu+2],e=new i8(e),r=Zar(e)&&e[0]===1&&e[1]===3&&e[2]===Xu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}n8.exports=$ar});var u8=s((kYr,s8)=>{"use strict";var Qar=a8();s8.exports=Qar});var f8=s((jYr,o8)=>{"use strict";var Kar=typeof Uint32Array=="function"?Uint32Array:void 0;o8.exports=Kar});var c8=s((CYr,v8)=>{"use strict";function r0r(){throw new Error("not implemented")}v8.exports=r0r});var cr=s((GYr,l8)=>{"use strict";var e0r=u8(),t0r=f8(),i0r=c8(),Ju;e0r()?Ju=t0r:Ju=i0r;l8.exports=Ju});var g8=s((VYr,p8)=>{"use strict";var n0r=ir(),a0r=typeof Float64Array=="function";function s0r(r){return a0r&&r instanceof Float64Array||n0r(r)==="[object Float64Array]"}p8.exports=s0r});var d8=s((UYr,m8)=>{"use strict";var u0r=g8();m8.exports=u0r});var y8=s((HYr,h8)=>{"use strict";var o0r=typeof Float64Array=="function"?Float64Array:null;h8.exports=o0r});var w8=s((WYr,b8)=>{"use strict";var f0r=d8(),q8=y8();function v0r(){var r,e;if(typeof q8!="function")return!1;try{e=new q8([1,3.14,-3.14,NaN]),r=f0r(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}b8.exports=v0r});var xu=s((DYr,E8)=>{"use strict";var c0r=w8();E8.exports=c0r});var A8=s((zYr,N8)=>{"use strict";var l0r=typeof Float64Array=="function"?Float64Array:void 0;N8.exports=l0r});var S8=s((XYr,O8)=>{"use strict";function p0r(){throw new Error("not implemented")}O8.exports=p0r});var dr=s((JYr,T8)=>{"use strict";var g0r=xu(),m0r=A8(),d0r=S8(),Yu;g0r()?Yu=m0r:Yu=d0r;T8.exports=Yu});var _8=s((xYr,I8)=>{"use strict";var h0r=ir(),y0r=typeof Uint8Array=="function";function q0r(r){return y0r&&r instanceof Uint8Array||h0r(r)==="[object Uint8Array]"}I8.exports=q0r});var P8=s((YYr,L8)=>{"use strict";var b0r=_8();L8.exports=b0r});var F8=s((ZYr,R8)=>{"use strict";var w0r=255;R8.exports=w0r});var B8=s(($Yr,M8)=>{"use strict";var E0r=typeof Uint8Array=="function"?Uint8Array:null;M8.exports=E0r});var C8=s((QYr,j8)=>{"use strict";var N0r=P8(),Zu=F8(),k8=B8();function A0r(){var r,e;if(typeof k8!="function")return!1;try{e=[1,3.14,-3.14,Zu+1,Zu+2],e=new k8(e),r=N0r(e)&&e[0]===1&&e[1]===3&&e[2]===Zu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}j8.exports=A0r});var V8=s((KYr,G8)=>{"use strict";var O0r=C8();G8.exports=O0r});var H8=s((rZr,U8)=>{"use strict";var S0r=typeof Uint8Array=="function"?Uint8Array:void 0;U8.exports=S0r});var D8=s((eZr,W8)=>{"use strict";function T0r(){throw new Error("not implemented")}W8.exports=T0r});var Yt=s((tZr,z8)=>{"use strict";var I0r=V8(),_0r=H8(),L0r=D8(),$u;I0r()?$u=_0r:$u=L0r;z8.exports=$u});var J8=s((iZr,X8)=>{"use strict";var P0r=ir(),R0r=typeof Uint16Array=="function";function F0r(r){return R0r&&r instanceof Uint16Array||P0r(r)==="[object Uint16Array]"}X8.exports=F0r});var Y8=s((nZr,x8)=>{"use strict";var M0r=J8();x8.exports=M0r});var $8=s((aZr,Z8)=>{"use strict";var B0r=65535;Z8.exports=B0r});var K8=s((sZr,Q8)=>{"use strict";var k0r=typeof Uint16Array=="function"?Uint16Array:null;Q8.exports=k0r});var t5=s((uZr,e5)=>{"use strict";var j0r=Y8(),Qu=$8(),r5=K8();function C0r(){var r,e;if(typeof r5!="function")return!1;try{e=[1,3.14,-3.14,Qu+1,Qu+2],e=new r5(e),r=j0r(e)&&e[0]===1&&e[1]===3&&e[2]===Qu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}e5.exports=C0r});var n5=s((oZr,i5)=>{"use strict";var G0r=t5();i5.exports=G0r});var s5=s((fZr,a5)=>{"use strict";var V0r=typeof Uint16Array=="function"?Uint16Array:void 0;a5.exports=V0r});var o5=s((vZr,u5)=>{"use strict";function U0r(){throw new Error("not implemented")}u5.exports=U0r});var Zt=s((cZr,f5)=>{"use strict";var H0r=n5(),W0r=s5(),D0r=o5(),Ku;H0r()?Ku=W0r:Ku=D0r;f5.exports=Ku});var c5=s((lZr,v5)=>{"use strict";var z0r=Yt(),X0r=Zt(),J0r={uint16:X0r,uint8:z0r};v5.exports=J0r});var m5=s((pZr,g5)=>{"use strict";var l5=c5(),p5;function x0r(){var r,e;return r=new l5.uint16(1),r[0]=4660,e=new l5.uint8(r.buffer),e[0]===52}p5=x0r();g5.exports=p5});var At=s((gZr,d5)=>{"use strict";var Y0r=m5();d5.exports=Y0r});var y5=s((mZr,h5)=>{"use strict";var Z0r=At(),ro;Z0r===!0?ro=1:ro=0;h5.exports=ro});var w5=s((dZr,b5)=>{"use strict";var $0r=cr(),Q0r=dr(),K0r=y5(),q5=new Q0r(1),rsr=new $0r(q5.buffer);function esr(r){return q5[0]=r,rsr[K0r]}b5.exports=esr});var tr=s((hZr,E5)=>{"use strict";var tsr=w5();E5.exports=tsr});var A5=s((yZr,N5)=>{"use strict";var isr=At(),eo;isr===!0?eo=1:eo=0;N5.exports=eo});var S5=s((qZr,O5)=>{"use strict";var nsr=cr(),asr=dr(),ssr=A5(),to=new asr(1),usr=new nsr(to.buffer);function osr(r,e){return to[0]=r,usr[ssr]=e>>>0,to[0]}O5.exports=osr});var re=s((bZr,T5)=>{"use strict";var fsr=S5();T5.exports=fsr});var Xr=s((wZr,I5)=>{"use strict";var vsr=1023;I5.exports=vsr});var L5=s((EZr,_5)=>{"use strict";function csr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}_5.exports=csr});var R5=s((NZr,P5)=>{"use strict";function lsr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}P5.exports=lsr});var k5=s((AZr,B5)=>{"use strict";var F5=tr(),psr=re(),gsr=E(),msr=Xr(),dsr=U(),hsr=L5(),ysr=R5(),Qn=.6931471803691238,Kn=19082149292705877e-26,qsr=0x40000000000000,bsr=.3333333333333333,M5=1048575,wsr=2146435072,Esr=1048576,Nsr=1072693248;function Asr(r){var e,t,i,n,a,u,o,v,f,c,l,p;return r===0?dsr:gsr(r)||r<0?NaN:(t=F5(r),a=0,t<Esr&&(a-=54,r*=qsr,t=F5(r)),t>=wsr?r+r:(a+=(t>>20)-msr|0,t&=M5,v=t+614244&1048576|0,r=psr(r,t|v^Nsr),a+=v>>20|0,o=r-1,(M5&2+t)<3?o===0?a===0?0:a*Qn+a*Kn:(u=o*o*(.5-bsr*o),a===0?o-u:a*Qn-(u-a*Kn-o)):(c=o/(2+o),p=c*c,v=t-398458|0,l=p*p,f=440401-t|0,n=l*hsr(l),i=p*ysr(l),v|=f,u=i+n,v>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*Qn-(e-(c*(e+u)+a*Kn)-o)):a===0?o-c*(o-u):a*Qn-(c*(o-u)-a*Kn-o))))}B5.exports=Asr});var P=s((OZr,j5)=>{"use strict";var Osr=k5();j5.exports=Osr});var G5=s((SZr,C5)=>{"use strict";var Ssr=Math.ceil;C5.exports=Ssr});var Xi=s((TZr,V5)=>{"use strict";var Tsr=G5();V5.exports=Tsr});var H5=s((IZr,U5)=>{"use strict";var Isr=Q(),_sr=Xi();function Lsr(r){return r<0?_sr(r):Isr(r)}U5.exports=Lsr});var ra=s((_Zr,W5)=>{"use strict";var Psr=H5();W5.exports=Psr});var z5=s((LZr,D5)=>{"use strict";function Rsr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}D5.exports=Rsr});var J5=s((PZr,X5)=>{"use strict";function Fsr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}X5.exports=Fsr});var Y5=s((RZr,x5)=>{"use strict";var Msr=z5(),Bsr=J5();function ksr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*Msr(a),i+=n*n*Bsr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}x5.exports=ksr});var io=s((FZr,Z5)=>{"use strict";var jsr=Y5();Z5.exports=jsr});var K5=s((MZr,Q5)=>{"use strict";var $5=-.16666666666666632,Csr=.00833333333332249,Gsr=-.0001984126982985795,Vsr=27557313707070068e-22,Usr=-25050760253406863e-24,Hsr=158969099521155e-24;function Wsr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=Csr+a*(Gsr+a*Vsr)+a*n*(Usr+a*Hsr),i=a*r,e===0?r+i*($5+a*t):r-(a*(.5*e-i*t)-e-i*$5)}Q5.exports=Wsr});var no=s((BZr,rp)=>{"use strict";var Dsr=K5();rp.exports=Dsr});var Jr=s((kZr,ep)=>{"use strict";var zsr=2147483647;ep.exports=zsr});var Ji=s((jZr,tp)=>{"use strict";var Xsr=2146435072;tp.exports=Xsr});var ea=s((CZr,ip)=>{"use strict";var Jsr=1048575;ip.exports=Jsr});var ap=s((GZr,np)=>{"use strict";var xsr=At(),ao;xsr===!0?ao=0:ao=1;np.exports=ao});var op=s((VZr,up)=>{"use strict";var Ysr=cr(),Zsr=dr(),$sr=ap(),sp=new Zsr(1),Qsr=new Ysr(sp.buffer);function Ksr(r){return sp[0]=r,Qsr[$sr]}up.exports=Ksr});var vp=s((UZr,fp)=>{"use strict";var rur=op();fp.exports=rur});var pp=s((HZr,lp)=>{"use strict";var eur=At(),cp,so,uo;eur===!0?(so=1,uo=0):(so=0,uo=1);cp={HIGH:so,LOW:uo};lp.exports=cp});var yp=s((WZr,hp)=>{"use strict";var tur=cr(),iur=dr(),mp=pp(),dp=new iur(1),gp=new tur(dp.buffer),nur=mp.HIGH,aur=mp.LOW;function sur(r,e){return gp[nur]=r,gp[aur]=e,dp[0]}hp.exports=sur});var $t=s((DZr,qp)=>{"use strict";var uur=yp();qp.exports=uur});var oo=s((zZr,bp)=>{"use strict";var our=1023;bp.exports=our});var Ep=s((XZr,wp)=>{"use strict";var fur=-1023;wp.exports=fur});var fo=s((JZr,Np)=>{"use strict";var vur=-1074;Np.exports=vur});var vo=s((xZr,Ap)=>{"use strict";var cur=2147483648;Ap.exports=cur});var Tp=s((YZr,Sp)=>{"use strict";var lur=At(),Op,co,lo;lur===!0?(co=1,lo=0):(co=0,lo=1);Op={HIGH:co,LOW:lo};Sp.exports=Op});var po=s((ZZr,Pp)=>{"use strict";var pur=cr(),gur=dr(),_p=Tp(),Lp=new gur(1),Ip=new pur(Lp.buffer),mur=_p.HIGH,dur=_p.LOW;function hur(r,e,t,i){return Lp[0]=r,e[i]=Ip[mur],e[i+t]=Ip[dur],e}Pp.exports=hur});var Fp=s(($Zr,Rp)=>{"use strict";var yur=po();function qur(r){return yur(r,[0>>>0,0>>>0],1,0)}Rp.exports=qur});var Qt=s((QZr,Bp)=>{"use strict";var bur=w(),Mp=Fp(),wur=po();bur(Mp,"assign",wur);Bp.exports=Mp});var jp=s((KZr,kp)=>{"use strict";var Eur=vo(),Nur=Jr(),Aur=Qt(),Our=tr(),Sur=$t(),go=[0,0];function Tur(r,e){var t,i;return Aur.assign(r,go,1,0),t=go[0],t&=Nur,i=Our(e),i&=Eur,t|=i,Sur(t,go[1])}kp.exports=Tur});var ta=s((r$r,Cp)=>{"use strict";var Iur=jp();Cp.exports=Iur});var mo=s((e$r,Gp)=>{"use strict";var _ur=22250738585072014e-324;Gp.exports=_ur});var ho=s((t$r,Vp)=>{"use strict";var Lur=mo(),Pur=Rr(),Rur=E(),Fur=Y(),Mur=4503599627370496;function Bur(r,e,t,i){return Rur(r)||Pur(r)?(e[i]=r,e[i+t]=0,e):r!==0&&Fur(r)<Lur?(e[i]=r*Mur,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}Vp.exports=Bur});var Hp=s((i$r,Up)=>{"use strict";var kur=ho();function jur(r){return kur(r,[0,0],1,0)}Up.exports=jur});var zp=s((n$r,Dp)=>{"use strict";var Cur=w(),Wp=Hp(),Gur=ho();Cur(Wp,"assign",Gur);Dp.exports=Wp});var Jp=s((a$r,Xp)=>{"use strict";var Vur=tr(),Uur=Ji(),Hur=Xr();function Wur(r){var e=Vur(r);return e=(e&Uur)>>>20,e-Hur|0}Xp.exports=Wur});var Yp=s((s$r,xp)=>{"use strict";var Dur=Jp();xp.exports=Dur});var $p=s((u$r,Zp)=>{"use strict";var zur=L(),Xur=U(),Jur=Xr(),xur=oo(),Yur=Ep(),Zur=fo(),$ur=E(),Qur=Rr(),Kur=ta(),ror=zp().assign,eor=Yp(),tor=Qt(),ior=$t(),nor=2220446049250313e-31,aor=2148532223>>>0,yo=[0,0],qo=[0,0];function sor(r,e){var t,i;return e===0||r===0||$ur(r)||Qur(r)?r:(ror(r,yo,1,0),r=yo[0],e+=yo[1],e+=eor(r),e<Zur?Kur(0,r):e>xur?r<0?Xur:zur:(e<=Yur?(e+=52,i=nor):i=1,tor.assign(r,qo,1,0),t=qo[0],t&=aor,t|=e+Jur<<20,i*ior(t,qo[1])))}Zp.exports=sor});var ia=s((o$r,Qp)=>{"use strict";var uor=$p();Qp.exports=uor});var r7=s((f$r,Kp)=>{"use strict";function oor(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}Kp.exports=oor});var na=s((v$r,e7)=>{"use strict";var vor=r7();e7.exports=vor});var i7=s((c$r,t7)=>{"use strict";var cor=na();function lor(r){return cor(0,r)}t7.exports=lor});var a7=s((l$r,n7)=>{"use strict";var por=i7();n7.exports=por});var v7=s((p$r,f7)=>{"use strict";var gor=Q(),aa=ia(),oa=a7(),u7=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],mor=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],bo=16777216,wo=5960464477539063e-23,sa=oa(20),s7=oa(20),ua=oa(20),vr=oa(20);function o7(r,e,t,i,n,a,u,o,v){var f,c,l,p,m,h,d,g,y;for(p=a,y=i[t],g=t,m=0;g>0;m++)c=wo*y|0,vr[m]=y-bo*c|0,y=i[g-1]+c,g-=1;if(y=aa(y,n),y-=8*gor(y*.125),d=y|0,y-=d,l=0,n>0?(m=vr[t-1]>>24-n,d+=m,vr[t-1]-=m<<24-n,l=vr[t-1]>>23-n):n===0?l=vr[t-1]>>23:y>=.5&&(l=2),l>0){for(d+=1,f=0,m=0;m<t;m++)g=vr[m],f===0?g!==0&&(f=1,vr[m]=16777216-g):vr[m]=16777215-g;if(n>0)switch(n){case 1:vr[t-1]&=8388607;break;case 2:vr[t-1]&=4194303;break}l===2&&(y=1-y,f!==0&&(y-=aa(1,n)))}if(y===0){for(g=0,m=t-1;m>=a;m--)g|=vr[m];if(g===0){for(h=1;vr[a-h]===0;h++);for(m=t+1;m<=t+h;m++){for(v[o+m]=u7[u+m],c=0,g=0;g<=o;g++)c+=r[g]*v[o+(m-g)];i[m]=c}return t+=h,o7(r,e,t,i,n,a,u,o,v)}}if(y===0)for(t-=1,n-=24;vr[t]===0;)t-=1,n-=24;else y=aa(y,-n),y>=bo?(c=wo*y|0,vr[t]=y-bo*c|0,t+=1,n+=24,vr[t]=c):vr[t]=y|0;for(c=aa(1,n),m=t;m>=0;m--)i[m]=c*vr[m],c*=wo;for(m=t;m>=0;m--){for(c=0,h=0;h<=p&&h<=t-m;h++)c+=mor[h]*i[m+h];ua[t-m]=c}for(c=0,m=t;m>=0;m--)c+=ua[m];for(l===0?e[0]=c:e[0]=-c,c=ua[0]-c,m=1;m<=t;m++)c+=ua[m];return l===0?e[1]=c:e[1]=-c,d&7}function dor(r,e,t,i){var n,a,u,o,v,f,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),f=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?sa[c]=0:sa[c]=u7[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*sa[o+(c-l)];s7[c]=n}return v=a,o7(r,e,v,s7,f,a,u,o,sa)}f7.exports=dor});var l7=s((g$r,c7)=>{"use strict";var hor=Math.round;c7.exports=hor});var Eo=s((m$r,p7)=>{"use strict";var yor=l7();p7.exports=yor});var h7=s((d$r,d7)=>{"use strict";var qor=Eo(),g7=tr(),bor=.6366197723675814,wor=1.5707963267341256,Eor=6077100506506192e-26,Nor=6077100506303966e-26,Aor=20222662487959506e-37,Oor=20222662487111665e-37,Sor=84784276603689e-45,m7=2047;function Tor(r,e,t){var i,n,a,u,o,v,f;return n=qor(r*bor),u=r-n*wor,o=n*Eor,f=e>>20|0,t[0]=u-o,i=g7(t[0]),v=f-(i>>20&m7),v>16&&(a=u,o=n*Nor,u=a-o,o=n*Aor-(a-u-o),t[0]=u-o,i=g7(t[0]),v=f-(i>>20&m7),v>49&&(a=u,o=n*Oor,u=a-o,o=n*Sor-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}d7.exports=Tor});var q7=s((h$r,y7)=>{"use strict";var Ior=Jr(),_or=Ji(),Lor=ea(),Por=tr(),Ror=vp(),For=$t(),Mor=v7(),fa=h7(),Bor=0,kor=16777216,Ge=1.5707963267341256,Ot=6077100506506192e-26,va=2*Ot,ca=3*Ot,la=4*Ot,jor=598523,Cor=1072243195,Gor=1073928572,Vor=1074752122,Uor=1074977148,Hor=1075183036,Wor=1075388923,Dor=1075594811,zor=1094263291,xi=[0,0,0],Yi=[0,0];function Xor(r,e){var t,i,n,a,u,o,v,f;if(n=Por(r),a=n&Ior|0,a<=Cor)return e[0]=r,e[1]=0,0;if(a<=Vor)return(a&Lor)===jor?fa(r,a,e):a<=Gor?r>0?(f=r-Ge,e[0]=f-Ot,e[1]=f-e[0]-Ot,1):(f=r+Ge,e[0]=f+Ot,e[1]=f-e[0]+Ot,-1):r>0?(f=r-2*Ge,e[0]=f-va,e[1]=f-e[0]-va,2):(f=r+2*Ge,e[0]=f+va,e[1]=f-e[0]+va,-2);if(a<=Dor)return a<=Hor?a===Uor?fa(r,a,e):r>0?(f=r-3*Ge,e[0]=f-ca,e[1]=f-e[0]-ca,3):(f=r+3*Ge,e[0]=f+ca,e[1]=f-e[0]+ca,-3):a===Wor?fa(r,a,e):r>0?(f=r-4*Ge,e[0]=f-la,e[1]=f-e[0]-la,4):(f=r+4*Ge,e[0]=f+la,e[1]=f-e[0]+la,-4);if(a<zor)return fa(r,a,e);if(a>=_or)return e[0]=NaN,e[1]=NaN,0;for(t=Ror(r),i=(a>>20)-1046,f=For(a-(i<<20|0),t),o=0;o<2;o++)xi[o]=f|0,f=(f-xi[o])*kor;for(xi[2]=f,u=3;xi[u-1]===Bor;)u-=1;return v=Mor(xi,Yi,i,u,1),r<0?(e[0]=-Yi[0],e[1]=-Yi[1],-v):(e[0]=Yi[0],e[1]=Yi[1],v)}y7.exports=Xor});var Zi=s((y$r,b7)=>{"use strict";var Jor=q7();b7.exports=Jor});var N7=s((q$r,E7)=>{"use strict";var xor=tr(),No=io(),w7=no(),Yor=Zi(),ee=[0,0],Zor=2147483647,$or=1072243195,Qor=1044381696,Kor=2146435072;function r2r(r){var e,t;if(e=xor(r),e&=Zor,e<=$or)return e<Qor?1:No(r,0);if(e>=Kor)return NaN;switch(t=Yor(r,ee),t&3){case 0:return No(ee[0],ee[1]);case 1:return-w7(ee[0],ee[1]);case 2:return-No(ee[0],ee[1]);default:return w7(ee[0],ee[1])}}E7.exports=r2r});var St=s((b$r,A7)=>{"use strict";var e2r=N7();A7.exports=e2r});var T7=s((w$r,S7)=>{"use strict";var t2r=Jr(),i2r=Ji(),n2r=tr(),O7=io(),Ao=no(),a2r=Zi(),s2r=1072243195,u2r=1045430272,te=[0,0];function o2r(r){var e,t;if(e=n2r(r),e&=t2r,e<=s2r)return e<u2r?r:Ao(r,0);if(e>=i2r)return NaN;switch(t=a2r(r,te),t&3){case 0:return Ao(te[0],te[1]);case 1:return O7(te[0],te[1]);case 2:return-Ao(te[0],te[1]);default:return-O7(te[0],te[1])}}S7.exports=o2r});var Tt=s((E$r,I7)=>{"use strict";var f2r=T7();I7.exports=f2r});var _r=s((N$r,_7)=>{"use strict";var v2r=3.141592653589793;_7.exports=v2r});var R7=s((A$r,P7)=>{"use strict";var c2r=E(),l2r=Rr(),L7=St(),Oo=Tt(),p2r=Y(),$i=ta(),Qi=_r();function g2r(r){var e,t;return c2r(r)?NaN:l2r(r)?NaN:(t=r%2,e=p2r(t),e===0||e===1?$i(0,t):e<.25?Oo(Qi*t):e<.75?(e=.5-e,$i(L7(Qi*e),t)):e<1.25?(t=$i(1,t)-t,Oo(Qi*t)):e<1.75?(e-=1.5,-$i(L7(Qi*e),t)):(t-=$i(2,t),Oo(Qi*t)))}P7.exports=g2r});var Ki=s((O$r,F7)=>{"use strict";var m2r=R7();F7.exports=m2r});var B7=s((S$r,M7)=>{"use strict";function d2r(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}M7.exports=d2r});var j7=s((T$r,k7)=>{"use strict";function h2r(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}k7.exports=h2r});var G7=s((I$r,C7)=>{"use strict";function y2r(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}C7.exports=y2r});var U7=s((_$r,V7)=>{"use strict";function q2r(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}V7.exports=q2r});var W7=s((L$r,H7)=>{"use strict";function b2r(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}H7.exports=b2r});var z7=s((P$r,D7)=>{"use strict";function w2r(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}D7.exports=w2r});var J7=s((R$r,X7)=>{"use strict";function E2r(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}X7.exports=E2r});var Y7=s((F$r,x7)=>{"use strict";function N2r(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}x7.exports=N2r});var $7=s((M$r,Z7)=>{"use strict";function A2r(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}Z7.exports=A2r});var K7=s((B$r,Q7)=>{"use strict";function O2r(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}Q7.exports=O2r});var t9=s((k$r,e9)=>{"use strict";var S2r=E(),T2r=Rr(),I2r=Y(),Kt=P(),_2r=ra(),L2r=Ki(),P2r=_r(),So=L(),R2r=B7(),F2r=j7(),M2r=G7(),B2r=U7(),k2r=W7(),j2r=z7(),C2r=J7(),G2r=Y7(),V2r=$7(),U2r=K7(),H2r=.07721566490153287,W2r=.3224670334241136,D2r=1,z2r=-.07721566490153287,X2r=.48383612272381005,J2r=-.1475877229945939,x2r=.06462494023913339,Y2r=-.07721566490153287,Z2r=1,$2r=.4189385332046727,pa=1.4616321449683622,Q2r=4503599627370496,K2r=0x400000000000000,r1r=8470329472543003e-37,r9=1.4616321449683622,e1r=-.12148629053584961,t1r=-3638676997039505e-33;function i1r(r){var e,t,i,n,a,u,o,v,f,c,l,p,m;if(S2r(r)||T2r(r))return r;if(r===0)return So;if(r<0?(e=!0,r=-r):e=!1,r<r1r)return-Kt(r);if(e){if(r>=Q2r||(f=L2r(r),f===0))return So;t=Kt(P2r/I2r(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-Kt(r),r>=pa-1+.27?(l=1-r,i=0):r>=pa-1-.27?(l=r-(r9-1),i=1):(l=r,i=2)):(m=0,r>=pa+.27?(l=2-r,i=0):r>=pa-.27?(l=r-r9,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=H2r+p*R2r(p),a=p*(W2r+p*F2r(p)),o=l*u+a,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=X2r+c*k2r(c),a=J2r+c*j2r(c),n=x2r+c*C2r(c),o=p*u-(t1r-c*(a+l*n)),m+=e1r+o;break;case 2:u=l*(Y2r+l*G2r(l)),a=Z2r+l*V2r(l),m+=-.5*l+u/a;break}else if(r<8)switch(i=_2r(r),l=r-i,o=l*(z2r+l*B2r(l)),v=D2r+l*M2r(l),m=.5*l+o/v,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=Kt(p)}else r<K2r?(f=Kt(r),p=1/r,l=p*p,c=$2r+p*U2r(l),m=(r-.5)*(f-1)+c):m=r*(Kt(r)-1);return e&&(m=t-m),m}e9.exports=i1r});var rn=s((j$r,i9)=>{"use strict";var n1r=t9();i9.exports=n1r});var a9=s((C$r,n9)=>{"use strict";var a1r=U();function s1r(r){return r===0&&1/r===a1r}n9.exports=s1r});var To=s((G$r,s9)=>{"use strict";var u1r=a9();s9.exports=u1r});var Io=s((V$r,u9)=>{"use strict";var o1r=2.5066282746310007;u9.exports=o1r});var f9=s((U$r,o9)=>{"use strict";var f1r=Ir();function v1r(r){return f1r(r/2)}o9.exports=v1r});var ga=s((H$r,v9)=>{"use strict";var c1r=f9();v9.exports=c1r});var p9=s((W$r,l9)=>{"use strict";var c9=ga();function l1r(r){return r>0?c9(r-1):c9(r+1)}l9.exports=l1r});var _o=s((D$r,g9)=>{"use strict";var p1r=p9();g9.exports=p1r});var d9=s((z$r,m9)=>{"use strict";var g1r=Math.sqrt;m9.exports=g1r});var C=s((X$r,h9)=>{"use strict";var m1r=d9();h9.exports=m1r});var q9=s((J$r,y9)=>{"use strict";var d1r=At(),Lo;d1r===!0?Lo=0:Lo=1;y9.exports=Lo});var w9=s((x$r,b9)=>{"use strict";var h1r=cr(),y1r=dr(),q1r=q9(),Po=new y1r(1),b1r=new h1r(Po.buffer);function w1r(r,e){return Po[0]=r,b1r[q1r]=e>>>0,Po[0]}b9.exports=w1r});var ie=s((Y$r,E9)=>{"use strict";var E1r=w9();E9.exports=E1r});var A9=s((Z$r,N9)=>{"use strict";function N1r(r){return r|0}N9.exports=N1r});var Ro=s(($$r,O9)=>{"use strict";var A1r=A9();O9.exports=A1r});var I9=s((Q$r,T9)=>{"use strict";var S9=_o(),O1r=ta(),S1r=U(),ma=L();function T1r(r,e){return e===S1r?ma:e===ma?0:e>0?S9(e)?r:0:S9(e)?O1r(ma,r):ma}T9.exports=T1r});var L9=s((K$r,_9)=>{"use strict";var I1r=Jr(),_1r=tr(),L1r=1072693247,da=1e300,ha=1e-300;function P1r(r,e){var t,i;return i=_1r(r),t=i&I1r,t<=L1r?e<0?da*da:ha*ha:e>0?da*da:ha*ha}_9.exports=P1r});var F9=s((rQr,R9)=>{"use strict";var R1r=Y(),P9=L();function F1r(r,e){return r===-1?(r-r)/(r-r):r===1?1:R1r(r)<1==(e===P9)?0:P9}R9.exports=F1r});var B9=s((eQr,M9)=>{"use strict";function M1r(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}M9.exports=M1r});var G9=s((tQr,C9)=>{"use strict";var B1r=tr(),ya=ie(),k9=re(),k1r=Xr(),j1r=B9(),C1r=1048575,j9=1048576,G1r=1072693248,V1r=536870912,U1r=524288,H1r=20,W1r=9007199254740992,D1r=.9617966939259756,z1r=.9617967009544373,X1r=-7028461650952758e-24,J1r=[1,1.5],x1r=[0,.5849624872207642],Y1r=[0,1350039202129749e-23];function Z1r(r,e,t){var i,n,a,u,o,v,f,c,l,p,m,h,d,g,y,N,A,G,T,J,or,z;return J=0,t<j9&&(e*=W1r,J-=53,t=B1r(e)),J+=(t>>H1r)-k1r|0,or=t&C1r|0,t=or|G1r|0,or<=235662?z=0:or<767610?z=1:(z=0,J+=1,t-=j9),e=k9(e,t),c=J1r[z],G=e-c,T=1/(e+c),n=G*T,u=ya(n,0),i=(t>>1|V1r)+U1r,i+=z<<18,v=k9(0,i),f=e-(v-c),o=T*(G-u*v-u*f),a=n*n,A=a*a*j1r(a),A+=o*(u+n),a=u*u,v=3+a+A,v=ya(v,0),f=A-(v-3-a),G=u*v,T=o*v+f*n,p=G+T,p=ya(p,0),m=T-(p-G),h=z1r*p,d=X1r*p+m*D1r+Y1r[z],l=x1r[z],N=J,g=h+d+l+N,g=ya(g,0),y=d-(g-N-l-h),r[0]=g,r[1]=y,r}C9.exports=Z1r});var U9=s((iQr,V9)=>{"use strict";function $1r(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}V9.exports=$1r});var W9=s((nQr,H9)=>{"use strict";var Q1r=ie(),K1r=U9(),r3r=1.4426950408889634,e3r=1.4426950216293335,t3r=19259629911266175e-24;function i3r(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*K1r(n),u=e3r*n,o=n*t3r-a*r3r,i=u+o,i=Q1r(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}H9.exports=i3r});var qa=s((aQr,D9)=>{"use strict";var n3r=.6931471805599453;D9.exports=n3r});var X9=s((sQr,z9)=>{"use strict";function a3r(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}z9.exports=a3r});var K9=s((uQr,Q9)=>{"use strict";var s3r=tr(),J9=re(),u3r=ie(),o3r=Ro(),f3r=ia(),v3r=qa(),x9=Xr(),Y9=Jr(),Z9=ea(),c3r=X9(),$9=1048576,l3r=1071644672,en=20,p3r=.6931471824645996,g3r=-1904654299957768e-24;function m3r(r,e,t){var i,n,a,u,o,v,f,c,l,p,m;return p=r&Y9|0,m=(p>>en)-x9|0,l=0,p>l3r&&(l=r+($9>>m+1)>>>0,m=((l&Y9)>>en)-x9|0,i=(l&~(Z9>>m))>>>0,a=J9(0,i),l=(l&Z9|$9)>>en-m>>>0,r<0&&(l=-l),e-=a),a=t+e,a=u3r(a,0),o=a*p3r,v=(t-(a-e))*v3r+a*g3r,c=o+v,f=v-(c-o),a=c*c,n=c-a*c3r(a),u=c*n/(n-2)-(f+c*f),c=1-(u-c),r=s3r(c),r=o3r(r),r+=l<<en>>>0,r>>en<=0?c=f3r(c,l):c=J9(c,r),c}Q9.exports=m3r});var vg=s((oQr,fg)=>{"use strict";var rg=E(),eg=_o(),tg=Rr(),d3r=Ir(),ig=C(),h3r=Y(),Fo=Qt(),y3r=ie(),ng=Ro(),q3r=U(),b3r=L(),Mo=Jr(),w3r=I9(),E3r=L9(),N3r=F9(),A3r=G9(),O3r=W9(),S3r=K9(),T3r=1072693247,I3r=1105199104,_3r=1139802112,ag=1083179008,L3r=1072693248,P3r=1083231232,R3r=3230714880>>>0,sg=31,Ve=1e300,Ue=1e-300,F3r=8008566259537294e-32,ne=[0,0],ug=[0,0];function og(r,e){var t,i,n,a,u,o,v,f,c,l,p,m,h,d,g,y;if(rg(r)||rg(e))return NaN;if(Fo.assign(e,ne,1,0),o=ne[0],v=ne[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return ig(r);if(e===-.5)return 1/ig(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(tg(e))return N3r(r,e)}if(Fo.assign(r,ne,1,0),a=ne[0],u=ne[1],u===0){if(a===0)return w3r(r,e);if(r===1)return 1;if(r===-1&&eg(e))return-1;if(tg(r))return r===q3r?og(-0,-e):e<0?0:b3r}if(r<0&&d3r(e)===!1)return(r-r)/(r-r);if(n=h3r(r),t=a&Mo|0,i=o&Mo|0,f=a>>>sg|0,c=o>>>sg|0,f&&eg(e)?f=-1:f=1,i>I3r){if(i>_3r)return E3r(r,e);if(t<T3r)return c===1?f*Ve*Ve:f*Ue*Ue;if(t>L3r)return c===0?f*Ve*Ve:f*Ue*Ue;h=O3r(ug,n)}else h=A3r(ug,n,t);if(l=y3r(e,0),m=(e-l)*h[0]+e*h[1],p=l*h[0],d=m+p,Fo.assign(d,ne,1,0),g=ng(ne[0]),y=ng(ne[1]),g>=ag){if((g-ag|y)!==0||m+F3r>d-p)return f*Ve*Ve}else if((g&Mo)>=P3r&&((g-R3r|y)!==0||m<=d-p))return f*Ue*Ue;return d=S3r(g,p,m),f*d}fg.exports=og});var W=s((fQr,cg)=>{"use strict";var M3r=vg();cg.exports=M3r});var pg=s((vQr,lg)=>{"use strict";function B3r(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}lg.exports=B3r});var mg=s((cQr,gg)=>{"use strict";var k3r=ia(),j3r=pg();function C3r(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*j3r(n),u=1-(e-i*a/(2-a)-r),k3r(u,t)}gg.exports=C3r});var wg=s((lQr,bg)=>{"use strict";var G3r=E(),dg=ra(),V3r=U(),hg=L(),U3r=mg(),H3r=.6931471803691238,W3r=19082149292705877e-26,yg=1.4426950408889634,D3r=709.782712893384,z3r=-745.1332191019411,qg=1/(1<<28),X3r=-qg;function J3r(r){var e,t,i;return G3r(r)||r===hg?r:r===V3r?0:r>D3r?hg:r<z3r?0:r>X3r&&r<qg?1+r:(r<0?i=dg(yg*r-.5):i=dg(yg*r+.5),e=r-i*H3r,t=i*W3r,U3r(e,t,i))}bg.exports=J3r});var nr=s((pQr,Eg)=>{"use strict";var x3r=wg();Eg.exports=x3r});var Ag=s((gQr,Ng)=>{"use strict";function Y3r(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}Ng.exports=Y3r});var Tg=s((mQr,Sg)=>{"use strict";var Z3r=Io(),Og=W(),$3r=nr(),Q3r=Ag(),K3r=143.01608;function rfr(r){var e,t,i;return e=1/r,e=1+e*Q3r(e),t=$3r(r),r>K3r?(i=Og(r,.5*r-.25),t=i*(i/t)):t=Og(r,r-.5)/t,Z3r*t*e}Sg.exports=rfr});var _g=s((dQr,Ig)=>{"use strict";var efr=.5772156649015329;Ig.exports=efr});var Pg=s((hQr,Lg)=>{"use strict";var tfr=_g();function ifr(r,e){return e/((1+tfr*r)*r)}Lg.exports=ifr});var Fg=s((yQr,Rg)=>{"use strict";function nfr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}Rg.exports=nfr});var Ug=s((qQr,Vg)=>{"use strict";var afr=E(),sfr=Ir(),ufr=To(),Mg=Y(),ofr=Q(),ffr=Tt(),Bg=L(),kg=U(),jg=_r(),Cg=Tg(),Gg=Pg(),vfr=Fg();function cfr(r){var e,t,i,n;if(sfr(r)&&r<0||r===kg||afr(r))return NaN;if(r===0)return ufr(r)?kg:Bg;if(r>171.61447887182297)return Bg;if(r<-170.5674972726612)return 0;if(t=Mg(r),t>33)return r>=0?Cg(r):(i=ofr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*ffr(jg*n),e*jg/(Mg(n)*Cg(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return Gg(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return Gg(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*vfr(r))}Vg.exports=cfr});var ri=s((bQr,Hg)=>{"use strict";var lfr=Ug();Hg.exports=lfr});var Bo=s((wQr,Wg)=>{"use strict";var pfr=14901161193847656e-24;Wg.exports=pfr});var zg=s((EQr,Dg)=>{"use strict";var gfr=17976931348623157e292;Dg.exports=gfr});var ba=s((NQr,Xg)=>{"use strict";var mfr=709.782712893384;Xg.exports=mfr});var xg=s((AQr,Jg)=>{"use strict";var dfr=nr();function hfr(r,e){var t,i,n,a;if(n=dfr(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}Jg.exports=hfr});var Zg=s((OQr,Yg)=>{"use strict";function yfr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}Yg.exports=yfr});var Qg=s((SQr,$g)=>{"use strict";function qfr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}$g.exports=qfr});var rm=s((TQr,Kg)=>{"use strict";function bfr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}Kg.exports=bfr});var tm=s((IQr,em)=>{"use strict";function wfr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}em.exports=wfr});var nm=s((_Qr,im)=>{"use strict";function Efr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}im.exports=Efr});var sm=s((LQr,am)=>{"use strict";function Nfr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}am.exports=Nfr});var om=s((PQr,um)=>{"use strict";function Afr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}um.exports=Afr});var vm=s((RQr,fm)=>{"use strict";function Ofr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}fm.exports=Ofr});var gm=s((FQr,pm)=>{"use strict";var Sfr=E(),cm=nr(),Tfr=ie(),Ifr=L(),_fr=U(),Lfr=Zg(),Pfr=Qg(),Rfr=rm(),Ffr=tm(),Mfr=nm(),Bfr=sm(),kfr=om(),jfr=vm(),wa=1e-300,Cfr=13877787807814457e-33,lm=.8450629115104675,Gfr=.12837916709551256,Vfr=1,Ufr=-.0023621185607526594,Hfr=1,Wfr=-.009864944034847148,Dfr=1,zfr=-.0098649429247001,Xfr=1;function Jfr(r){var e,t,i,n,a,u,o,v;if(Sfr(r))return NaN;if(r===Ifr)return 0;if(r===_fr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<Cfr?1-r:(i=r*r,n=Gfr+i*Lfr(i),a=Vfr+i*Pfr(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=Ufr+a*Rfr(a),v=Hfr+a*Ffr(a),e?1+lm+o/v:1-lm-o/v;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=Wfr+a*Mfr(a),a=Dfr+a*Bfr(a);else{if(r<-6)return 2-wa;n=zfr+a*kfr(a),a=Xfr+a*jfr(a)}return i=Tfr(t,0),n=cm(-(i*i)-.5625)*cm((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-wa:wa*wa}pm.exports=Jfr});var It=s((MQr,mm)=>{"use strict";var xfr=gm();mm.exports=xfr});var ym=s((BQr,hm)=>{"use strict";var Yfr=It(),dm=C(),Zfr=nr(),$fr=_r();function Qfr(r,e){var t,i,n,a,u;if(a=Yfr(dm(e)),a!==0&&r>1){for(i=Zfr(-e)/dm($fr*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}hm.exports=Qfr});var ko=s((kQr,qm)=>{"use strict";var Kfr=-708.3964185322641;qm.exports=Kfr});var Nm=s((jQr,Em)=>{"use strict";var ei=nr(),Ea=W(),rvr=P(),bm=ba(),wm=ko();function evr(r,e){var t,i;return i=r*rvr(e),e>=1?i<bm&&-e>wm?t=Ea(e,r)*ei(-e):r>=1?t=Ea(e/ei(e/r),r):t=ei(i-e):i>wm?t=Ea(e,r)*ei(-e):e/r<bm?t=Ea(e/ei(e/r),r):t=ei(i-e),t}Em.exports=evr});var jo=s((CQr,Am)=>{"use strict";function tvr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Am.exports=tvr});var Sm=s((GQr,Om)=>{"use strict";var ivr=Function;Om.exports=ivr});var Im=s((VQr,Tm)=>{"use strict";var nvr=Sm();Tm.exports=nvr});var Lm=s((UQr,_m)=>{"use strict";var avr=Im(),svr=jo();function uvr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new avr(e)();function a(u){return svr(r,u)}}_m.exports=uvr});var Fm=s((HQr,Rm)=>{"use strict";var ovr=w(),Pm=jo(),fvr=Lm();ovr(Pm,"factory",fvr);Rm.exports=Pm});var _t=s((WQr,Mm)=>{"use strict";var vvr=2220446049250313e-31;Mm.exports=vvr});var km=s((DQr,Bm)=>{"use strict";var cvr=eval;Bm.exports=cvr});var Cm=s((zQr,jm)=>{"use strict";var lvr=km();function pvr(){var r;try{lvr('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}jm.exports=pvr});var Co=s((XQr,Gm)=>{"use strict";var gvr=Cm();Gm.exports=gvr});var Um=s((JQr,Vm)=>{"use strict";var Na=Y(),mvr=_t(),dvr=1e6;function hvr(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||mvr,a=o.maxTerms||dvr,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,Na(i*u)>=Na(n)||--a===0)break}else do n=r(),u+=n;while(Na(i*u)<Na(n)&&--a);return u}Vm.exports=hvr});var Dm=s((xQr,Wm)=>{"use strict";var Hm=Y(),yvr=_t(),qvr=1e6;function bvr(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||yvr,n=u.maxTerms||qvr,a=u.initialValue||0;do i=r(),a+=i;while(Hm(t*a)<Hm(i)&&--n);return a}Wm.exports=bvr});var Aa=s((YQr,zm)=>{"use strict";var wvr=Co(),Evr=Um(),Nvr=Dm(),Go;wvr()?Go=Evr:Go=Nvr;zm.exports=Go});var Jm=s((ZQr,Xm)=>{"use strict";function Avr(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}Xm.exports=Avr});var Ym=s(($Qr,xm)=>{"use strict";var Ovr=Y(),Svr=P(),Tvr=_t(),Ivr=Aa(),_vr=Jm();function Lvr(r){var e,t;return r<=-1?NaN:(t=Ovr(r),t>.95?Svr(1+r)-r:t<Tvr?-r*r/2:(e={initialValue:-r},Ivr(_vr(r),e)))}xm.exports=Lvr});var $m=s((QQr,Zm)=>{"use strict";var Pvr=Ym();Zm.exports=Pvr});var He=s((KQr,Qm)=>{"use strict";var Rvr=6.283185307179586;Qm.exports=Rvr});var rd=s((rKr,Km)=>{"use strict";function Fvr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}Km.exports=Fvr});var td=s((eKr,ed)=>{"use strict";function Mvr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}ed.exports=Mvr});var nd=s((tKr,id)=>{"use strict";function Bvr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}id.exports=Bvr});var sd=s((iKr,ad)=>{"use strict";function kvr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}ad.exports=kvr});var od=s((nKr,ud)=>{"use strict";function jvr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}ud.exports=jvr});var vd=s((aKr,fd)=>{"use strict";function Cvr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}fd.exports=Cvr});var ld=s((sKr,cd)=>{"use strict";function Gvr(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}cd.exports=Gvr});var gd=s((uKr,pd)=>{"use strict";function Vvr(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}pd.exports=Vvr});var dd=s((oKr,md)=>{"use strict";function Uvr(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}md.exports=Uvr});var yd=s((fKr,hd)=>{"use strict";var Hvr=Fm(),Wvr=$m(),Dvr=It(),Vo=C(),zvr=nr(),Xvr=He(),Jvr=rd(),xvr=td(),Yvr=nd(),Zvr=sd(),$vr=od(),Qvr=vd(),Kvr=ld(),rcr=gd(),ecr=dd(),Vr=[0,0,0,0,0,0,0,0,0,0];function tcr(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-Wvr(i),a=r*n,u=Vo(2*n),e<r&&(u=-u),Vr[0]=Jvr(u),Vr[1]=xvr(u),Vr[2]=Yvr(u),Vr[3]=Zvr(u),Vr[4]=$vr(u),Vr[5]=Qvr(u),Vr[6]=Kvr(u),Vr[7]=rcr(u),Vr[8]=ecr(u),Vr[9]=-.0005967612901927463,t=Hvr(Vr,1/r),t*=zvr(-a)/Vo(Xvr*r),e<r&&(t=-t),t+=Dvr(Vo(a))/2,t}hd.exports=tcr});var bd=s((vKr,qd)=>{"use strict";function icr(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}qd.exports=icr});var Ed=s((cKr,wd)=>{"use strict";var ncr=Aa(),acr=bd();function scr(r,e,t){var i,n;return t=t||0,n=acr(r,e),i=ncr(n,{initialValue:t}),i}wd.exports=scr});var Ad=s((lKr,Nd)=>{"use strict";function ucr(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}Nd.exports=ucr});var Sd=s((pKr,Od)=>{"use strict";var ocr=Ad();Od.exports=ocr});var Id=s((gKr,Td)=>{"use strict";var fcr=Sd();Td.exports=fcr});var Ld=s((mKr,_d)=>{"use strict";function vcr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}_d.exports=vcr});var Bd=s((dKr,Md)=>{"use strict";var ccr=E(),Pd=tr(),Rd=re(),lcr=L(),pcr=U(),Fd=Xr(),gcr=Ld(),Uo=.6931471803691238,Ho=19082149292705877e-26,mcr=.41421356237309503,dcr=-.2928932188134525,hcr=1862645149230957e-24,ycr=5551115123125783e-32,qcr=9007199254740992,bcr=.6666666666666666;function wcr(r){var e,t,i,n,a,u,o,v,f,c;if(r<-1||ccr(r))return NaN;if(r===-1)return pcr;if(r===lcr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<mcr){if(i<hcr)return i<ycr?r:r-r*r*.5;r>dcr&&(c=0,n=r,t=1)}return c!==0&&(i<qcr?(f=1+r,t=Pd(f),c=(t>>20)-Fd,c>0?a=1-(f-r):a=r-(f-1),a/=f):(f=r,t=Pd(f),c=(t>>20)-Fd,a=0),t&=1048575,t<434334?f=Rd(f,t|1072693248):(c+=1,f=Rd(f,t|1071644672),t=1048576-t>>2),n=f-1),e=.5*n*n,t===0?n===0?(a+=c*Ho,c*Uo+a):(v=e*(1-bcr*n),c*Uo-(v-(c*Ho+a)-n)):(u=n/(2+n),o=u*u,v=o*gcr(o),c===0?n-(e-u*(e+v)):c*Uo-(e-(u*(e+v)+(c*Ho+a))-n))}Md.exports=wcr});var We=s((hKr,kd)=>{"use strict";var Ecr=Bd();kd.exports=Ecr});var Cd=s((yKr,jd)=>{"use strict";var Ncr=L();function Acr(r){return r===0&&1/r===Ncr}jd.exports=Acr});var De=s((qKr,Gd)=>{"use strict";var Ocr=Cd();Gd.exports=Ocr});var Hd=s((bKr,Ud)=>{"use strict";var Scr=De(),Vd=E(),Wo=L();function Tcr(r,e){return Vd(r)||Vd(e)?NaN:r===Wo||e===Wo?Wo:r===e&&r===0?Scr(r)?r:e:r>e?r:e}Ud.exports=Tcr});var Do=s((wKr,Wd)=>{"use strict";var Icr=Hd();Wd.exports=Icr});var Xd=s((EKr,zd)=>{"use strict";var _cr=To(),Dd=E(),zo=U();function Lcr(r,e){return Dd(r)||Dd(e)?NaN:r===zo||e===zo?zo:r===e&&r===0?_cr(r)?r:e:r<e?r:e}zd.exports=Lcr});var xd=s((NKr,Jd)=>{"use strict";var Pcr=Xd();Jd.exports=Pcr});var Zd=s((AKr,Yd)=>{"use strict";var Rcr=10.900511;Yd.exports=Rcr});var Xo=s((OKr,$d)=>{"use strict";var Fcr=2.718281828459045;$d.exports=Fcr});var rh=s((SKr,Kd)=>{"use strict";var Mcr=Id(),Bcr=rn(),kcr=ri(),jcr=We(),Ccr=C(),Gcr=Y(),ze=nr(),tn=W(),Jo=Do(),xo=xd(),Qd=P(),Oa=ba(),nn=ko(),Yo=Zd(),Vcr=Xo();function Ucr(r,e){var t,i,n,a,u,o,v;return n=r+Yo-.5,v=(e-r-Yo+.5)/n,r<1?e<=nn?ze(r*Qd(e)-e-Bcr(r)):tn(e,r)*ze(-e)/kcr(r):(Gcr(v*v*r)<=100&&r>150?(t=r*(jcr(v)-v)+e*(.5-Yo)/n,t=ze(t)):(a=r*Qd(e/n),u=r-e,xo(a,u)<=nn||Jo(a,u)>=Oa?(i=u/r,xo(a,u)/2>nn&&Jo(a,u)/2<Oa?(o=tn(e/n,r/2)*ze(u/2),t=o*o):xo(a,u)/4>nn&&Jo(a,u)/4<Oa&&e>r?(o=tn(e/n,r/4)*ze(u/4),t=o*o,t*=t):i>nn&&i<Oa?t=tn(e*ze(i)/n,r):t=ze(a+u)):t=tn(e/n,r)*ze(u)),t*=Ccr(n/Vcr)/Mcr(r),t)}Kd.exports=Ucr});var th=s((TKr,eh)=>{"use strict";var Hcr=.34657359027997264;eh.exports=Hcr});var nh=s((IKr,ih)=>{"use strict";function Wcr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}ih.exports=Wcr});var vh=s((_Kr,fh)=>{"use strict";var Dcr=E(),ah=tr(),Zo=re(),zcr=$t(),sh=L(),Xcr=U(),uh=Xr(),Jcr=th(),xcr=nh(),Ycr=709.782712893384,$o=.6931471803691238,Qo=19082149292705877e-26,oh=1.4426950408889634,Zcr=38.816242111356935,$cr=1.0397207708399179;function Qcr(r){var e,t,i,n,a,u,o,v,f,c,l,p,m;if(r===sh||Dcr(r))return r;if(r===Xcr)return-1;if(r===0)return r;if(r<0?(i=!0,v=-r):(i=!1,v=r),v>=Zcr){if(i)return-1;if(v>=Ycr)return sh}if(u=ah(v)|0,v>Jcr)v<$cr?i?(n=r+$o,a=-Qo,m=-1):(n=r-$o,a=Qo,m=1):(i?m=oh*r-.5:m=oh*r+.5,m|=0,l=m,n=r-l*$o,a=l*Qo),r=n-a,c=n-r-a;else{if(u<1016070144)return r;m=0}return e=.5*r,f=r*e,o=1+f*xcr(f),l=3-o*e,p=f*((o-l)/(6-r*l)),m===0?r-(r*p-f):(t=zcr(uh+m<<20,0),p=r*(p-c)-c,p-=f,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(v=1-(p-r),m===1024?(n=ah(v)+(m<<20)|0,v=Zo(v,n)):v*=t,v-1):(l=1,m<20?(n=1072693248-(2097152>>m)|0,l=Zo(l,n),v=l-(p-r)):(n=uh-m<<20|0,l=Zo(l,n),v=r-(p+l),v+=1),v*=t,v))}fh.exports=Qcr});var Ko=s((LKr,ch)=>{"use strict";var Kcr=vh();ch.exports=Kcr});var mh=s((PKr,gh)=>{"use strict";var lh=E(),ph=Y(),rlr=Ko(),elr=P(),tlr=W(),ilr=ra();function nlr(r,e){var t;if(lh(r)||lh(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((ph(e*(r-1))<.5||ph(e)<.2)&&(t=elr(r)*e,t<.5))return rlr(t)}else if(ilr(e)!==e)return NaN;return tlr(r,e)-1}gh.exports=nlr});var hh=s((RKr,dh)=>{"use strict";var alr=mh();dh.exports=alr});var qh=s((FKr,yh)=>{"use strict";function slr(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}yh.exports=slr});var wh=s((MKr,bh)=>{"use strict";function ulr(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}bh.exports=ulr});var Nh=s((BKr,Eh)=>{"use strict";function olr(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}Eh.exports=olr});var Oh=s((kKr,Ah)=>{"use strict";var r2=P(),flr=_t(),vlr=qh(),clr=wh(),llr=Nh(),plr=.15896368026733398,glr=.5281534194946289,mlr=.45201730728149414;function dlr(r,e,t){var i,n,a,u;if(r<flr)return-r2(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=r2(r);while(r>=3);t=r-2}return a=t*(r+1),u=vlr(t),n+=a*plr+a*u,n}return r<1&&(n+=-r2(r),t=e,e=r,r+=1),r<=1.5?(a=clr(e),i=e*t,n+=i*glr+i*a,n):(a=t*e,u=llr(-t),n+=a*mlr+a*u,n)}Ah.exports=dlr});var Lh=s((jKr,_h)=>{"use strict";var Sh=ri(),Th=Ko(),hlr=We(),ylr=E(),Ih=Oh();function qlr(r){return ylr(r)?NaN:r<0?r<-.5?Sh(1+r)-1:Th(-hlr(r)+Ih(r+2,r+1,r)):r<2?Th(Ih(r+1,r,r-1)):Sh(1+r)-1}_h.exports=qlr});var Rh=s((CKr,Ph)=>{"use strict";var blr=Lh();Ph.exports=blr});var Mh=s((GKr,Fh)=>{"use strict";function wlr(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}Fh.exports=wlr});var kh=s((VKr,Bh)=>{"use strict";var Elr=hh(),Nlr=Aa(),Alr=Rh(),Olr=Mh();function Slr(r,e,t){var i,n,a,u,o;return n=Alr(r),a=(n+1)/r,u=Elr(e,r),n-=u,n/=r,o=Olr(r,e),u+=1,i=t?a:0,n=-u*Nlr(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}Bh.exports=Slr});var e2=s((UKr,jh)=>{"use strict";var Tlr=11754943508222875e-54;jh.exports=Tlr});var Gh=s((HKr,Ch)=>{"use strict";var Sa=Y(),xr=e2(),Ilr=_t(),_lr=1e6;function Llr(r,e,t){var i,n,a,u,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),u=f[1],a=f[0],u===0&&(u=xr),o=u,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=xr),o=f[1]+f[0]/o,o===0&&(o=xr),v=1/v,n=o*v,u*=n);while(Sa(n-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=xr),o=f[1]+f[0]/o,o===0&&(o=xr),v=1/v,n=o*v,u*=n);while(f&&Sa(n-1)>e&&--t);return a/u}function Plr(r,e,t){var i,n,a,u,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),a=v[1],a===0&&(a=xr),u=a,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=xr),u=v[1]+v[0]/u,u===0&&(u=xr),o=1/o,n=u*o,a*=n);while(v&&Sa(n-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=xr),u=v[1]+v[0]/u,u===0&&(u=xr),o=1/o,n=u*o,a*=n);while(v&&Sa(n-1)>e&&--t);return a}function Rlr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||_lr,n=i.tolerance||Ilr,i.keep?Plr(r,n,t):Llr(r,n,t)}Ch.exports=Rlr});var Hh=s((WKr,Uh)=>{"use strict";var Vh=Y(),Flr=_t(),ti=e2(),Mlr=1e6;function Blr(r,e,t){var i,n,a,u,o,v;v=r(),o=v[1],n=v[0],o===0&&(o=ti),a=o,u=0;do v=r(),v&&(u=v[1]+v[0]*u,u===0&&(u=ti),a=v[1]+v[0]/a,a===0&&(a=ti),u=1/u,i=a*u,o*=i);while(v&&Vh(i-1)>e&&--t);return n/o}function klr(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=ti),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=ti),n=o[1]+o[0]/n,n===0&&(n=ti),a=1/a,i=n*a,u*=i);while(o&&Vh(i-1)>e&&--t);return u}function jlr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||Flr,t=i.maxIter||Mlr,i.keep?klr(r,n,t):Blr(r,n,t)}Uh.exports=jlr});var Dh=s((DKr,Wh)=>{"use strict";var Clr=Co(),Glr=Gh(),Vlr=Hh(),t2;Clr()?t2=Glr:t2=Vlr;Wh.exports=t2});var Xh=s((zKr,zh)=>{"use strict";function Ulr(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}zh.exports=Ulr});var xh=s((XKr,Jh)=>{"use strict";var Hlr=Dh(),Wlr=Xh();function Dlr(r,e){var t=Wlr(r,e);return 1/(e-r+1+Hlr(t))}Jh.exports=Dlr});var ny=s((JKr,iy)=>{"use strict";var zlr=rn(),Xlr=Q(),an=ri(),Yh=Y(),Jlr=nr(),Zh=W(),Ur=P(),xlr=Bo(),$h=zg(),Ylr=Io(),Qh=ba(),Zlr=L(),$lr=xg(),Qlr=ym(),Kh=Nm(),Klr=yd(),i2=Ed(),ry=rh(),r4r=kh(),ey=xh(),e4r=170;function ty(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h,d,g,y,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=e4r&&!a)return l&&e*4<r?(p=e*Ur(r)-r,p+=Ur(ey(e,r))):!l&&e>4*r?(p=e*Ur(r)-r,o=0,p+=Ur(i2(e,r,o)/e)):(p=ty(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Ur(p)-e+(e-.5)*Ur(e),p+=Ur(Ylr)):(p=e*Ur(r)-r,o=0,p+=Ur(i2(e,r,o)/e)):p=Ur(p)+zlr(e)),p>Qh?Zlr:Jlr(p);switch(c=e<30&&e<=r+1&&r<Qh,c?(y=Xlr(e),m=y===e,v=m?!1:Yh(y-e)===.5):m=v=!1,m&&r>.6?(l=!l,u=0):v&&r>.2?(l=!l,u=1):r<xlr&&e>1?u=6:r<.5?-.4/Ur(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(f=!1,a&&e>20&&(h=Yh((r-e)/e),e>200?20/e>h*h&&(f=!0):h<.4&&(f=!0)),f?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=$lr(e,r),a===!1&&(p*=an(e));break;case 1:p=Qlr(e,r),a===!1&&(p*=an(e));break;case 2:p=a?ry(e,r):Kh(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:an(e),a||p>=1||$h*p>o?(o/=p,a||e<1||$h/e>o?(o*=-e,n=!0):o=0):o=0)),p*=i2(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,g=r4r(e,r,l),p=g[0],N=g[1],l=!1,a&&(p/=N);break;case 4:p=a?ry(e,r):Kh(e,r),p!==0&&(p*=ey(e,r));break;case 5:p=Klr(e,r),r>=e&&(l=!l);break;case 6:p=a?Zh(r,e)/an(e+1):Zh(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:an(e),p=d-p),p}iy.exports=ty});var n2=s((xKr,ay)=>{"use strict";var t4r=ny();ay.exports=t4r});var uy=s((YKr,sy)=>{"use strict";var i4r=n2(),a2=E(),n4r=L();function a4r(r,e,t){return a2(r)||a2(e)||a2(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===n4r?1:i4r(r*t,e)}sy.exports=a4r});var fy=s((ZKr,oy)=>{"use strict";function s4r(r){return e;function e(){return r}}oy.exports=s4r});var S=s(($Kr,vy)=>{"use strict";var u4r=fy();vy.exports=u4r});var py=s((QKr,ly)=>{"use strict";var cy=E();function o4r(r,e){return cy(r)||cy(e)?NaN:r<e?0:1}ly.exports=o4r});var dy=s((KKr,my)=>{"use strict";var f4r=S(),gy=E();function v4r(r){if(gy(r))return f4r(NaN);return e;function e(t){return gy(t)?NaN:t<r?0:1}}my.exports=v4r});var Ta=s((rre,yy)=>{"use strict";var c4r=w(),hy=py(),l4r=dy();c4r(hy,"factory",l4r);yy.exports=hy});var wy=s((ere,by)=>{"use strict";var p4r=S(),g4r=Ta().factory,m4r=n2(),qy=E(),d4r=L();function h4r(r,e){if(qy(r)||qy(e)||r<0||e<=0)return p4r(NaN);if(r===0)return g4r(0);return t;function t(i){return i<=0?0:i===d4r?1:m4r(i*e,r)}}by.exports=h4r});var s2=s((tre,Ny)=>{"use strict";var y4r=w(),Ey=uy(),q4r=wy();y4r(Ey,"factory",q4r);Ny.exports=Ey});var Oy=s((ire,Ay)=>{"use strict";var b4r=s2();function w4r(r,e){return b4r(r,e/2,.5)}Ay.exports=w4r});var Ty=s((nre,Sy)=>{"use strict";var E4r=s2().factory;function N4r(r){return E4r(r/2,.5)}Sy.exports=N4r});var Ly=s((are,_y)=>{"use strict";var A4r=w(),Iy=Oy(),O4r=Ty();A4r(Iy,"factory",O4r);_y.exports=Iy});var My=s((sre,Fy)=>{"use strict";var S4r=I(),T4r=O(),I4r=Jn(),Py=q(),Ry=["values","indices","*"];function _4r(r,e){return S4r(e)?T4r(e,"returns")&&(r.returns=e.returns,I4r(Ry,r.returns)===-1)?new TypeError(Py('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Ry.join('", "'),r.returns)):null:new TypeError(Py("invalid argument. Options argument must be an object. Value: `%s`.",e))}Fy.exports=_4r});var ky=s((ure,By)=>{"use strict";var L4r=O();function P4r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),L4r(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}By.exports=P4r});var Cy=s((ore,jy)=>{"use strict";var R4r=O();function F4r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),R4r(t,n)?t[n].push(a):t[n]=[a];return t}jy.exports=F4r});var Vy=s((fre,Gy)=>{"use strict";var M4r=O();function B4r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),M4r(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}Gy.exports=B4r});var Dy=s((vre,Wy)=>{"use strict";var Uy=Gr(),Hy=q(),k4r=My(),j4r=ky(),C4r=Cy(),G4r=Vy();function V4r(r,e,t){var i,n,a;if(!Uy(r))throw new TypeError(Hy("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=k4r(i,e),n)throw n;a=t}if(!Uy(a))throw new TypeError(Hy("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?j4r(r,a):i.returns==="indices"?C4r(r,a):G4r(r,a)}Wy.exports=V4r});var Xy=s((cre,zy)=>{"use strict";var U4r=Dy();zy.exports=U4r});var xy=s((lre,Jy)=>{"use strict";function H4r(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}Jy.exports=H4r});var $y=s((pre,Zy)=>{"use strict";var W4r=mr(),D4r=j().isPrimitive,z4r=I(),X4r=sr(),Yy=O(),u2=q();function J4r(r,e){return z4r(e)?Yy(e,"alpha")&&(r.alpha=e.alpha,!D4r(r.alpha)||X4r(r.alpha))?new TypeError(u2("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):Yy(e,"groups")&&(r.groups=e.groups,!W4r(r.groups))?new TypeError(u2("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(u2("invalid argument. Options argument must be an object. Value: `%s`.",e))}Zy.exports=J4r});var o2=s((gre,Qy)=>{"use strict";var x4r=Cr().isPrimitive;function Y4r(r){return x4r(r)&&r>0}Qy.exports=Y4r});var f2=s((mre,Ky)=>{"use strict";var Z4r=Cr().isObject;function $4r(r){return Z4r(r)&&r.valueOf()>0}Ky.exports=$4r});var eq=s((dre,rq)=>{"use strict";var Q4r=o2(),K4r=f2();function r6r(r){return Q4r(r)||K4r(r)}rq.exports=r6r});var ae=s((hre,iq)=>{"use strict";var tq=w(),v2=eq(),e6r=o2(),t6r=f2();tq(v2,"isPrimitive",e6r);tq(v2,"isObject",t6r);iq.exports=v2});var sn=s((yre,nq)=>{"use strict";var i6r=9007199254740991;nq.exports=i6r});var c2=s((qre,aq)=>{"use strict";var n6r=308;aq.exports=n6r});var uq=s((bre,sq)=>{"use strict";var a6r=-308;sq.exports=a6r});var l2=s((wre,oq)=>{"use strict";var s6r=-324;oq.exports=s6r});var mq=s((Ere,gq)=>{"use strict";var fq=E(),Ia=Rr(),vq=W(),u6r=Y(),cq=Eo(),o6r=sn(),lq=c2(),f6r=uq(),v6r=l2(),c6r=o6r+1,pq=1e308;function l6r(r,e){var t,i;return fq(r)||fq(e)||Ia(e)?NaN:Ia(r)||r===0||e<v6r||u6r(r)>c6r&&e<=0?r:e>lq?0*r:e<f6r?(t=vq(10,-(e+lq)),i=r*pq*t,Ia(i)?r:cq(i)/pq/t):(t=vq(10,-e),i=r*t,Ia(i)?r:cq(i)/t)}gq.exports=l6r});var hq=s((Nre,dq)=>{"use strict";var p6r=mq();dq.exports=p6r});var bq=s((Are,qq)=>{"use strict";var g6r=ae(),m6r=I(),d6r=fr().isPrimitive,yq=O(),p2=q(),g2=hq();function h6r(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!m6r(r))throw new TypeError(p2("invalid argument. First argument must be an object. Value: `%s`.",r));if(yq(r,"digits")){if(!g6r(r.digits))throw new TypeError(p2("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(yq(r,"decision")){if(!d6r(r.decision))throw new TypeError(p2("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+g2(this.pValue,-t)+`
`,i+="    statistic: "+g2(this.statistic,-t)+`
`,i+="    df: "+g2(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}qq.exports=h6r});var Nq=s((Ore,Eq)=>{"use strict";var y6r=Gr(),q6r=I(),Lt=z6(),b6r=Jt(),_a=q(),w6r=Ly(),E6r=Xy(),wq=P(),N6r=xy(),A6r=$y(),O6r=bq();function S6r(){var r,e,t,i,n,a,u,o,v,f,c,l,p,m,h,d,g,y,N,A;if(v=[],e=arguments.length,f={},q6r(arguments[e-1])&&(r=arguments[e-1],e-=1,m=A6r(f,r),m))throw m;if(f.groups){if(n=E6r(arguments[0],f.groups),i=b6r(n),e=i.length,e<2)throw new Error(_a("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(A=0;A<e;A++)v.push(n[i[A]])}else for(A=0;A<e;A++)v.push(arguments[A]);for(u=0,t=0,o=0,h=0,y=new Array(e),N=y.slice(),A=0;A<e;A++){if(p=v[A],!y6r(p))throw new TypeError(_a("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(_a("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));y[A]=p.length-1,u+=y[A],t+=1/y[A],N[A]=N6r(p),o+=y[A]*N[A],h+=y[A]*wq(N[A])}if(o/=u,f.alpha===void 0?a=.05:a=f.alpha,a<0||a>1)throw new RangeError(_a("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*wq(o)-h,l/=1+(t-1/u)/(3*(e-1)),g=e-1,c=1-w6r(l,g),d={},Lt(d,"rejected",c<=a),Lt(d,"alpha",a),Lt(d,"pValue",c),Lt(d,"statistic",l),Lt(d,"df",g),Lt(d,"method","Bartlett's test of equal variances"),Lt(d,"print",O6r),d}Eq.exports=S6r});var Oq=s((Sre,Aq)=>{"use strict";var T6r=Nq();Aq.exports=T6r});var Tq=s((Tre,Sq)=>{"use strict";function I6r(r){var e,t,i,n,a,u,o,v,f,c,l;if(v=r.length,t=[],v===0)return t;if(n=r[0],f=n.length,v===1){for(c=0;c<f;c++)t.push(n[c]);return t}for(e=[f],c=1;c<v;c++)e.push(r[c].length),e[c]>f&&(f=e[c]);for(c=0;c<f;c++)t.push(0);for(c=f-1;c>=0;){for(a=e[0]-f+c,a>=0?i=n[a]:i=1,l=1;l<v;l++){if(u=e[l]-f+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}Sq.exports=I6r});var _q=s((Ire,Iq)=>{"use strict";var _6r=Tq();Iq.exports=_6r});var La=s((_re,Lq)=>{"use strict";function L6r(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}Lq.exports=L6r});var Rq=s((Lre,Pq)=>{"use strict";var P6r=j().isPrimitive,R6r=K().isPrimitive,F6r=fr().isPrimitive,M6r=mr(),B6r=_q(),k6r=q(),j6r=La(),C6r={number:P6r,string:R6r,boolean:F6r};function G6r(r,e,t){var i,n,a,u,o,v,f,c,l,p;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],n=[],p=0;p<r.length;p++)if(l=r[p],o=e[p],c=C6r[o],c(l))n.push([l]),a.push([1,1]);else if(M6r(l))n.push(j6r(l)),a.push([l.length,l[0].length]);else throw new TypeError(k6r("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[p],o,o,String(l)));if(u=B6r(a),u===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");for(i=[],p=0;p<a.length;p++)f=a[p],v=[],f[0]===1?v.push(0):v.push(f[1]),f[1]===1?v.push(0):v.push(1),i.push(v);return[n,u,i]}Pq.exports=G6r});var Mq=s((Pre,Fq)=>{"use strict";var m2=E(),V6r=De();function U6r(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,f=1,m2(a)===!1)for(f;f<r;f++){if(u+=t,v=e[u],m2(v)){a=v;break}(v>a||v===a&&V6r(v))&&(a=v),i[o]=a,o+=n}if(m2(a))for(f;f<r;f++)i[o]=a,o+=n;return i}Fq.exports=U6r});var kq=s((Rre,Bq)=>{"use strict";var d2=E(),H6r=De();function W6r(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return n;if(v=i,f=u,o=e[v],n[f]=o,f+=a,l=1,d2(o)===!1)for(l;l<r;l++){if(v+=t,c=e[v],d2(c)){o=c;break}(c>o||c===o&&H6r(c))&&(o=c),n[f]=o,f+=a}if(d2(o))for(l;l<r;l++)n[f]=o,f+=a;return n}Bq.exports=W6r});var Gq=s((Fre,Cq)=>{"use strict";var D6r=w(),jq=Mq(),z6r=kq();D6r(jq,"ndarray",z6r);Cq.exports=jq});var Uq=s((Mre,Vq)=>{"use strict";var X6r=Gq();Vq.exports=X6r});var Wq=s((Bre,Hq)=>{"use strict";var J6r=na();function x6r(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(J6r(r,i));return t}Hq.exports=x6r});var un=s((kre,Dq)=>{"use strict";var Y6r=Wq();Dq.exports=Y6r});var Xq=s((jre,zq)=>{"use strict";var Z6r=na(),$6r=un();function Q6r(r,e,t){return e===1?Z6r(t,r):$6r(t,[r,e])}zq.exports=Q6r});var xq=s((Cre,Jq)=>{"use strict";function K6r(r,e,t){var i,n;for(i=[],n=0;n<r;n++)i.push(e.call(t,n));return i}Jq.exports=K6r});var Zq=s((Gre,Yq)=>{"use strict";var r8r=xq();Yq.exports=r8r});var Qq=s((Vre,$q)=>{"use strict";function e8r(r,e,t){var i,n,a,u,o,v;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],v=0;v<a;v++)n.push(e.call(t,[o,v]));i.push(n)}return i}$q.exports=e8r});var rb=s((Ure,Kq)=>{"use strict";var t8r=Qq();Kq.exports=t8r});var tb=s((Hre,eb)=>{"use strict";var i8r=Zq(),n8r=rb();function a8r(r,e,t){return e===1?i8r(r,t):n8r([r,e],t)}eb.exports=a8r});var nb=s((Wre,ib)=>{"use strict";var s8r=un();function u8r(r){return s8r(1,r)}ib.exports=u8r});var sb=s((Dre,ab)=>{"use strict";var o8r=nb();ab.exports=o8r});var ob=s((zre,ub)=>{"use strict";var f8r=un();function v8r(r){return f8r(0,r)}ub.exports=v8r});var vb=s((Xre,fb)=>{"use strict";var c8r=ob();fb.exports=c8r});var h2=s((Jre,cb)=>{"use strict";var l8r=j().isPrimitive;function p8r(r){return l8r(r)&&r>0}cb.exports=p8r});var y2=s((xre,lb)=>{"use strict";var g8r=j().isObject;function m8r(r){return g8r(r)&&r.valueOf()>0}lb.exports=m8r});var gb=s((Yre,pb)=>{"use strict";var d8r=h2(),h8r=y2();function y8r(r){return d8r(r)||h8r(r)}pb.exports=y8r});var D=s((Zre,db)=>{"use strict";var mb=w(),q2=gb(),q8r=h2(),b8r=y2();mb(q2,"isPrimitive",q8r);mb(q2,"isObject",b8r);db.exports=q2});var yb=s(($re,hb)=>{"use strict";var w8r=_();function E8r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&w8r(r.next)}hb.exports=E8r});var bb=s((Qre,qb)=>{"use strict";var N8r=yb();qb.exports=N8r});var Nb=s((Kre,Eb)=>{"use strict";var wb="function";function A8r(r){return typeof r.get===wb&&typeof r.set===wb}Eb.exports=A8r});var b2=s((ree,Ab)=>{"use strict";var O8r=Nb();Ab.exports=O8r});var Tb=s((eee,Sb)=>{"use strict";var Ob={complex128:S8r,complex64:T8r,default:I8r};function S8r(r,e,t){r.set(t,e)}function T8r(r,e,t){r.set(t,e)}function I8r(r,e,t){r.set(t,e)}function _8r(r){var e=Ob[r];return typeof e=="function"?e:Ob.default}Sb.exports=_8r});var w2=s((tee,Ib)=>{"use strict";var L8r=Tb();Ib.exports=L8r});var Pb=s((iee,Lb)=>{"use strict";var _b={float64:P8r,float32:R8r,int32:F8r,int16:M8r,int8:B8r,uint32:k8r,uint16:j8r,uint8:C8r,uint8c:G8r,generic:V8r,default:U8r};function P8r(r,e,t){r[e]=t}function R8r(r,e,t){r[e]=t}function F8r(r,e,t){r[e]=t}function M8r(r,e,t){r[e]=t}function B8r(r,e,t){r[e]=t}function k8r(r,e,t){r[e]=t}function j8r(r,e,t){r[e]=t}function C8r(r,e,t){r[e]=t}function G8r(r,e,t){r[e]=t}function V8r(r,e,t){r[e]=t}function U8r(r,e,t){r[e]=t}function H8r(r){var e=_b[r];return typeof e=="function"?e:_b.default}Lb.exports=H8r});var E2=s((nee,Rb)=>{"use strict";var W8r=Pb();Rb.exports=W8r});var Mb=s((aee,Fb)=>{"use strict";var D8r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};Fb.exports=D8r});var kb=s((see,Bb)=>{"use strict";var z8r=ir(),X8r=typeof Float32Array=="function";function J8r(r){return X8r&&r instanceof Float32Array||z8r(r)==="[object Float32Array]"}Bb.exports=J8r});var Cb=s((uee,jb)=>{"use strict";var x8r=kb();jb.exports=x8r});var Vb=s((oee,Gb)=>{"use strict";var Y8r=typeof Float32Array=="function"?Float32Array:null;Gb.exports=Y8r});var Wb=s((fee,Hb)=>{"use strict";var Z8r=Cb(),$8r=L(),Ub=Vb();function Q8r(){var r,e;if(typeof Ub!="function")return!1;try{e=new Ub([1,3.14,-3.14,5e40]),r=Z8r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===$8r}catch{r=!1}return r}Hb.exports=Q8r});var zb=s((vee,Db)=>{"use strict";var K8r=Wb();Db.exports=K8r});var Jb=s((cee,Xb)=>{"use strict";var r5r=typeof Float32Array=="function"?Float32Array:void 0;Xb.exports=r5r});var Yb=s((lee,xb)=>{"use strict";function e5r(){throw new Error("not implemented")}xb.exports=e5r});var se=s((pee,Zb)=>{"use strict";var t5r=zb(),i5r=Jb(),n5r=Yb(),N2;t5r()?N2=i5r:N2=n5r;Zb.exports=N2});var Qb=s((gee,$b)=>{"use strict";var a5r=ir(),s5r=typeof Int32Array=="function";function u5r(r){return s5r&&r instanceof Int32Array||a5r(r)==="[object Int32Array]"}$b.exports=u5r});var Pa=s((mee,Kb)=>{"use strict";var o5r=Qb();Kb.exports=o5r});var ii=s((dee,rw)=>{"use strict";var f5r=2147483647;rw.exports=f5r});var tw=s((hee,ew)=>{"use strict";var v5r=-2147483648;ew.exports=v5r});var nw=s((yee,iw)=>{"use strict";var c5r=typeof Int32Array=="function"?Int32Array:null;iw.exports=c5r});var uw=s((qee,sw)=>{"use strict";var l5r=Pa(),p5r=ii(),g5r=tw(),aw=nw();function m5r(){var r,e;if(typeof aw!="function")return!1;try{e=new aw([1,3.14,-3.14,p5r+1]),r=l5r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===g5r}catch{r=!1}return r}sw.exports=m5r});var fw=s((bee,ow)=>{"use strict";var d5r=uw();ow.exports=d5r});var cw=s((wee,vw)=>{"use strict";var h5r=typeof Int32Array=="function"?Int32Array:void 0;vw.exports=h5r});var pw=s((Eee,lw)=>{"use strict";function y5r(){throw new Error("not implemented")}lw.exports=y5r});var Pt=s((Nee,gw)=>{"use strict";var q5r=fw(),b5r=cw(),w5r=pw(),A2;q5r()?A2=b5r:A2=w5r;gw.exports=A2});var dw=s((Aee,mw)=>{"use strict";var E5r=ir(),N5r=typeof Int16Array=="function";function A5r(r){return N5r&&r instanceof Int16Array||E5r(r)==="[object Int16Array]"}mw.exports=A5r});var yw=s((Oee,hw)=>{"use strict";var O5r=dw();hw.exports=O5r});var bw=s((See,qw)=>{"use strict";var S5r=32767;qw.exports=S5r});var Ew=s((Tee,ww)=>{"use strict";var T5r=-32768;ww.exports=T5r});var Aw=s((Iee,Nw)=>{"use strict";var I5r=typeof Int16Array=="function"?Int16Array:null;Nw.exports=I5r});var Tw=s((_ee,Sw)=>{"use strict";var _5r=yw(),L5r=bw(),P5r=Ew(),Ow=Aw();function R5r(){var r,e;if(typeof Ow!="function")return!1;try{e=new Ow([1,3.14,-3.14,L5r+1]),r=_5r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===P5r}catch{r=!1}return r}Sw.exports=R5r});var _w=s((Lee,Iw)=>{"use strict";var F5r=Tw();Iw.exports=F5r});var Pw=s((Pee,Lw)=>{"use strict";var M5r=typeof Int16Array=="function"?Int16Array:void 0;Lw.exports=M5r});var Fw=s((Ree,Rw)=>{"use strict";function B5r(){throw new Error("not implemented")}Rw.exports=B5r});var on=s((Fee,Mw)=>{"use strict";var k5r=_w(),j5r=Pw(),C5r=Fw(),O2;k5r()?O2=j5r:O2=C5r;Mw.exports=O2});var kw=s((Mee,Bw)=>{"use strict";var G5r=ir(),V5r=typeof Uint8ClampedArray=="function";function U5r(r){return V5r&&r instanceof Uint8ClampedArray||G5r(r)==="[object Uint8ClampedArray]"}Bw.exports=U5r});var Cw=s((Bee,jw)=>{"use strict";var H5r=kw();jw.exports=H5r});var Vw=s((kee,Gw)=>{"use strict";var W5r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;Gw.exports=W5r});var Ww=s((jee,Hw)=>{"use strict";var D5r=Cw(),Uw=Vw();function z5r(){var r,e;if(typeof Uw!="function")return!1;try{e=new Uw([-1,0,1,3.14,4.99,255,256]),r=D5r(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}Hw.exports=z5r});var zw=s((Cee,Dw)=>{"use strict";var X5r=Ww();Dw.exports=X5r});var Jw=s((Gee,Xw)=>{"use strict";var J5r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;Xw.exports=J5r});var Yw=s((Vee,xw)=>{"use strict";function x5r(){throw new Error("not implemented")}xw.exports=x5r});var fn=s((Uee,Zw)=>{"use strict";var Y5r=zw(),Z5r=Jw(),$5r=Yw(),S2;Y5r()?S2=Z5r:S2=$5r;Zw.exports=S2});var Qw=s((Hee,$w)=>{"use strict";var Q5r=ir(),K5r=typeof Int8Array=="function";function rpr(r){return K5r&&r instanceof Int8Array||Q5r(r)==="[object Int8Array]"}$w.exports=rpr});var rE=s((Wee,Kw)=>{"use strict";var epr=Qw();Kw.exports=epr});var tE=s((Dee,eE)=>{"use strict";var tpr=127;eE.exports=tpr});var nE=s((zee,iE)=>{"use strict";var ipr=-128;iE.exports=ipr});var sE=s((Xee,aE)=>{"use strict";var npr=typeof Int8Array=="function"?Int8Array:null;aE.exports=npr});var fE=s((Jee,oE)=>{"use strict";var apr=rE(),spr=tE(),upr=nE(),uE=sE();function opr(){var r,e;if(typeof uE!="function")return!1;try{e=new uE([1,3.14,-3.14,spr+1]),r=apr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===upr}catch{r=!1}return r}oE.exports=opr});var cE=s((xee,vE)=>{"use strict";var fpr=fE();vE.exports=fpr});var pE=s((Yee,lE)=>{"use strict";var vpr=typeof Int8Array=="function"?Int8Array:void 0;lE.exports=vpr});var mE=s((Zee,gE)=>{"use strict";function cpr(){throw new Error("not implemented")}gE.exports=cpr});var vn=s(($ee,dE)=>{"use strict";var lpr=cE(),ppr=pE(),gpr=mE(),T2;lpr()?T2=ppr:T2=gpr;dE.exports=T2});var I2=s((Qee,hE)=>{"use strict";var mpr=Cr().isPrimitive;function dpr(r){return mpr(r)&&r>=0}hE.exports=dpr});var _2=s((Kee,yE)=>{"use strict";var hpr=Cr().isObject;function ypr(r){return hpr(r)&&r.valueOf()>=0}yE.exports=ypr});var bE=s((rte,qE)=>{"use strict";var qpr=I2(),bpr=_2();function wpr(r){return qpr(r)||bpr(r)}qE.exports=wpr});var Xe=s((ete,EE)=>{"use strict";var wE=w(),L2=bE(),Epr=I2(),Npr=_2();wE(L2,"isPrimitive",Epr);wE(L2,"isObject",Npr);EE.exports=L2});var AE=s((tte,NE)=>{"use strict";var Apr=4294967295;NE.exports=Apr});var SE=s((ite,OE)=>{"use strict";var Opr=Ir(),Spr=AE();function Tpr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Opr(r.length)&&r.length>=0&&r.length<=Spr}OE.exports=Tpr});var Rt=s((nte,TE)=>{"use strict";var Ipr=SE();TE.exports=Ipr});var _E=s((ate,IE)=>{"use strict";var _pr=ir(),Lpr=typeof ArrayBuffer=="function";function Ppr(r){return Lpr&&r instanceof ArrayBuffer||_pr(r)==="[object ArrayBuffer]"}IE.exports=Ppr});var P2=s((ste,LE)=>{"use strict";var Rpr=_E();LE.exports=Rpr});var RE=s((ute,PE)=>{"use strict";function Fpr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}PE.exports=Fpr});var ME=s((ote,FE)=>{"use strict";function Mpr(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}FE.exports=Mpr});var GE=s((fte,CE)=>{"use strict";var BE=j().isPrimitive,kE=je(),cn=w(),jE=q(),Bpr=RE(),kpr=ME();function Ft(r,e){if(!(this instanceof Ft))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!BE(r))throw new TypeError(jE("invalid argument. Real component must be a number. Value: `%s`.",r));if(!BE(e))throw new TypeError(jE("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return kE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),kE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}cn(Ft,"BYTES_PER_ELEMENT",8);cn(Ft.prototype,"BYTES_PER_ELEMENT",8);cn(Ft.prototype,"byteLength",16);cn(Ft.prototype,"toString",Bpr);cn(Ft.prototype,"toJSON",kpr);CE.exports=Ft});var ni=s((vte,VE)=>{"use strict";var jpr=GE();VE.exports=jpr});var HE=s((cte,UE)=>{"use strict";var Cpr=typeof Math.fround=="function"?Math.fround:null;UE.exports=Cpr});var zE=s((lte,DE)=>{"use strict";var Gpr=se(),WE=new Gpr(1);function Vpr(r){return WE[0]=r,WE[0]}DE.exports=Vpr});var xE=s((pte,JE)=>{"use strict";var XE=HE(),Upr=zE(),R2;typeof XE=="function"?R2=XE:R2=Upr;JE.exports=R2});var ZE=s((gte,YE)=>{"use strict";function Hpr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}YE.exports=Hpr});var QE=s((mte,$E)=>{"use strict";function Wpr(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}$E.exports=Wpr});var nN=s((dte,iN)=>{"use strict";var KE=j().isPrimitive,rN=je(),ln=w(),eN=xE(),tN=q(),Dpr=ZE(),zpr=QE();function Mt(r,e){if(!(this instanceof Mt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!KE(r))throw new TypeError(tN("invalid argument. Real component must be a number. Value: `%s`.",r));if(!KE(e))throw new TypeError(tN("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return rN(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:eN(r)}),rN(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:eN(e)}),this}ln(Mt,"BYTES_PER_ELEMENT",4);ln(Mt.prototype,"BYTES_PER_ELEMENT",4);ln(Mt.prototype,"byteLength",8);ln(Mt.prototype,"toString",Dpr);ln(Mt.prototype,"toJSON",zpr);iN.exports=Mt});var ai=s((hte,aN)=>{"use strict";var Xpr=nN();aN.exports=Xpr});var uN=s((yte,sN)=>{"use strict";var Jpr=ni(),xpr=ai();function Ypr(r){return r instanceof Jpr||r instanceof xpr?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}sN.exports=Ypr});var Hr=s((qte,oN)=>{"use strict";var Zpr=uN();oN.exports=Zpr});var vN=s((bte,fN)=>{"use strict";var $pr=O(),Ra=lu();function Qpr(){return typeof Ra=="function"&&typeof Ra("foo")=="symbol"&&$pr(Ra,"iterator")&&typeof Ra.iterator=="symbol"}fN.exports=Qpr});var Fa=s((wte,cN)=>{"use strict";var Kpr=vN();cN.exports=Kpr});var pN=s((Ete,lN)=>{"use strict";var r7r=Fa(),e7r=r7r()?Symbol.iterator:null;lN.exports=e7r});var Ma=s((Nte,gN)=>{"use strict";var t7r=pN();gN.exports=t7r});var dN=s((Ate,mN)=>{"use strict";var i7r=je();function n7r(r,e,t){i7r(r,e,{configurable:!1,enumerable:!1,get:t})}mN.exports=n7r});var R=s((Ote,hN)=>{"use strict";var a7r=dN();hN.exports=a7r});var qN=s((Ste,yN)=>{"use strict";function s7r(r){return r.re}yN.exports=s7r});var Je=s((Tte,bN)=>{"use strict";var u7r=qN();bN.exports=u7r});var EN=s((Ite,wN)=>{"use strict";function o7r(r){return r.im}wN.exports=o7r});var xe=s((_te,NN)=>{"use strict";var f7r=EN();NN.exports=f7r});var ON=s((Lte,AN)=>{"use strict";var v7r=se();function c7r(r,e){return new v7r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}AN.exports=c7r});var si=s((Pte,SN)=>{"use strict";var l7r=ON();SN.exports=l7r});var IN=s((Rte,TN)=>{"use strict";var p7r=dr();function g7r(r,e){return new p7r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}TN.exports=g7r});var ui=s((Fte,_N)=>{"use strict";var m7r=IN();_N.exports=m7r});var RN=s((Mte,PN)=>{"use strict";var LN={float64:d7r,float32:h7r,int32:y7r,int16:q7r,int8:b7r,uint32:w7r,uint16:E7r,uint8:N7r,uint8c:A7r,generic:O7r,default:S7r};function d7r(r,e){return r[e]}function h7r(r,e){return r[e]}function y7r(r,e){return r[e]}function q7r(r,e){return r[e]}function b7r(r,e){return r[e]}function w7r(r,e){return r[e]}function E7r(r,e){return r[e]}function N7r(r,e){return r[e]}function A7r(r,e){return r[e]}function O7r(r,e){return r[e]}function S7r(r,e){return r[e]}function T7r(r){var e=LN[r];return typeof e=="function"?e:LN.default}PN.exports=T7r});var Ba=s((Bte,FN)=>{"use strict";var I7r=RN();FN.exports=I7r});var kN=s((kte,BN)=>{"use strict";var MN={complex128:_7r,complex64:L7r,default:P7r};function _7r(r,e){return r.get(e)}function L7r(r,e){return r.get(e)}function P7r(r,e){return r.get(e)}function R7r(r){var e=MN[r];return typeof e=="function"?e:MN.default}BN.exports=R7r});var ka=s((jte,jN)=>{"use strict";var F7r=kN();jN.exports=F7r});var GN=s((Cte,CN)=>{"use strict";var M7r=Rt(),B7r=Hr(),k7r=Je(),j7r=xe(),C7r=q();function G7r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,M7r(i)&&i.length>=2)e.push(i[0],i[1]);else if(B7r(i))e.push(k7r(i),j7r(i));else return new TypeError(C7r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}CN.exports=G7r});var UN=s((Gte,VN)=>{"use strict";var V7r=Rt(),U7r=Hr(),H7r=Je(),W7r=xe(),D7r=q();function z7r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),V7r(a)&&a.length>=2)i.push(a[0],a[1]);else if(U7r(a))i.push(H7r(a),W7r(a));else return new TypeError(D7r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}VN.exports=z7r});var WN=s((Vte,HN)=>{"use strict";var X7r=Hr(),J7r=Je(),x7r=xe();function Y7r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!X7r(i))return null;r[a]=J7r(i),r[a+1]=x7r(i),a+=2}return r}HN.exports=Y7r});var QN=s((Ute,$N)=>{"use strict";var pn=Xe().isPrimitive,DN=Rt(),M2=Gr(),zN=P2(),XN=Zn(),Z7r=mr(),Bt=_(),oi=Hr(),ja=ga(),F2=Ir(),$7r=Fa(),fi=Ma(),hr=w(),Va=R(),Fr=se(),JN=ai(),Z=q(),Ca=Je(),Ga=xe(),Q7r=si(),K7r=ui(),r9r=Ba(),e9r=ka(),xN=GN(),t9r=UN(),i9r=WN(),Lr=Fr.BYTES_PER_ELEMENT*2,YN=$7r();function vi(r){return r instanceof rr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function ZN(r){return r===rr||r.name==="Complex128Array"}function n9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Lr}function a9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Lr*2}function rr(){var r,e,t,i;if(e=arguments.length,!(this instanceof rr))return e===0?new rr:e===1?new rr(arguments[0]):e===2?new rr(arguments[0],arguments[1]):new rr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Fr(0);else if(e===1)if(pn(arguments[0]))t=new Fr(arguments[0]*2);else if(M2(arguments[0]))if(t=arguments[0],i=t.length,i&&Z7r(t)&&oi(t[0])){if(t=i9r(new Fr(i*2),t),t===null){if(!ja(i))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(arguments[0])}}else{if(n9r(t))t=Q7r(t,0);else if(a9r(t))t=K7r(t,0);else if(!ja(i))throw new RangeError(Z("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(t)}else if(zN(arguments[0])){if(t=arguments[0],!F2(t.byteLength/Lr))throw new RangeError(Z("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Lr,t.byteLength));t=new Fr(t)}else if(XN(arguments[0])){if(t=arguments[0],YN===!1)throw new TypeError(Z("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Bt(t[fi]))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[fi](),!Bt(t.next))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=xN(t),t instanceof Error)throw t;t=new Fr(t)}else throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!zN(t))throw new TypeError(Z("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!pn(r))throw new TypeError(Z("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!F2(r/Lr))throw new RangeError(Z("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Lr,r));if(e===2){if(i=t.byteLength-r,!F2(i/Lr))throw new RangeError(Z("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Lr,i));t=new Fr(t,r)}else{if(i=arguments[2],!pn(i))throw new TypeError(Z("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Lr>t.byteLength-r)throw new RangeError(Z("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Lr));t=new Fr(t,r,i*2)}}return hr(this,"_buffer",t),hr(this,"_length",t.length/2),this}hr(rr,"BYTES_PER_ELEMENT",Lr);hr(rr,"name","Complex64Array");hr(rr,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,m;if(!Bt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ZN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Bt(n))throw new TypeError(Z("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(vi(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),oi(l))u[m]=Ca(l),u[m+1]=Ga(l);else if(DN(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(M2(e)){if(n){for(f=e.length,e.get&&e.set?v=e9r("default"):v=r9r("default"),p=0;p<f;p++)if(!oi(v(e,p))){c=!0;break}if(c){if(!ja(f))throw new RangeError(Z("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),oi(l))u[m]=Ca(l),u[m+1]=Ga(l);else if(DN(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(XN(e)&&YN&&Bt(e[fi])){if(u=e[fi](),!Bt(u.next))throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=t9r(u,n,t):o=xN(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});hr(rr,"of",function(){var e,t;if(!Bt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ZN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Va(rr.prototype,"buffer",function(){return this._buffer.buffer});Va(rr.prototype,"byteLength",function(){return this._buffer.byteLength});Va(rr.prototype,"byteOffset",function(){return this._buffer.byteOffset});hr(rr.prototype,"BYTES_PER_ELEMENT",rr.BYTES_PER_ELEMENT);hr(rr.prototype,"copyWithin",function(e,t){if(!vi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});hr(rr.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!vi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},hr(i,"next",v),hr(i,"return",f),fi&&hr(i,fi,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new JN(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});hr(rr.prototype,"get",function(e){var t;if(!vi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!pn(e))throw new TypeError(Z("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new JN(t[e],t[e+1])});Va(rr.prototype,"length",function(){return this._length});hr(rr.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!vi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!pn(i))throw new TypeError(Z("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(oi(e)){if(i>=this._length)throw new RangeError(Z("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ca(e),n[i+1]=Ga(e);return}if(vi(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(M2(e)){for(o=e.length,f=0;f<o;f++)if(!oi(e[f])){u=!0;break}if(u){if(!ja(o))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=Ca(v),n[i+1]=Ga(v),i+=2;return}throw new TypeError(Z("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});$N.exports=rr});var gn=s((Hte,KN)=>{"use strict";var s9r=QN();KN.exports=s9r});var eA=s((Wte,rA)=>{"use strict";function u9r(r){return r.re}rA.exports=u9r});var Ye=s((Dte,tA)=>{"use strict";var o9r=eA();tA.exports=o9r});var nA=s((zte,iA)=>{"use strict";function f9r(r){return r.im}iA.exports=f9r});var Ze=s((Xte,aA)=>{"use strict";var v9r=nA();aA.exports=v9r});var uA=s((Jte,sA)=>{"use strict";var c9r=Rt(),l9r=Hr(),p9r=q(),g9r=Ye(),m9r=Ze();function d9r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,c9r(i)&&i.length>=2)e.push(i[0],i[1]);else if(l9r(i))e.push(g9r(i),m9r(i));else return new TypeError(p9r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}sA.exports=d9r});var fA=s((xte,oA)=>{"use strict";var h9r=Rt(),y9r=Hr(),q9r=q(),b9r=Ye(),w9r=Ze();function E9r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),h9r(a)&&a.length>=2)i.push(a[0],a[1]);else if(y9r(a))i.push(b9r(a),w9r(a));else return new TypeError(q9r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}oA.exports=E9r});var cA=s((Yte,vA)=>{"use strict";var N9r=Hr(),A9r=Ye(),O9r=Ze();function S9r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!N9r(i))return null;r[a]=A9r(i),r[a+1]=O9r(i),a+=2}return r}vA.exports=S9r});var bA=s((Zte,qA)=>{"use strict";var mn=Xe().isPrimitive,lA=Rt(),k2=Gr(),pA=P2(),gA=Zn(),T9r=mr(),kt=_(),ci=Hr(),Ua=ga(),B2=Ir(),I9r=Fa(),li=Ma(),yr=w(),Da=R(),Mr=dr(),mA=ni(),Ha=Ye(),Wa=Ze(),_9r=si(),L9r=ui(),P9r=Ba(),R9r=ka(),$=q(),dA=uA(),F9r=fA(),M9r=cA(),Pr=Mr.BYTES_PER_ELEMENT*2,hA=I9r();function pi(r){return r instanceof er||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function yA(r){return r===er||r.name==="Complex64Array"}function B9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Pr/2}function k9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Pr}function er(){var r,e,t,i;if(e=arguments.length,!(this instanceof er))return e===0?new er:e===1?new er(arguments[0]):e===2?new er(arguments[0],arguments[1]):new er(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Mr(0);else if(e===1)if(mn(arguments[0]))t=new Mr(arguments[0]*2);else if(k2(arguments[0]))if(t=arguments[0],i=t.length,i&&T9r(t)&&ci(t[0])){if(t=M9r(new Mr(i*2),t),t===null){if(!Ua(i))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Mr(arguments[0])}}else{if(B9r(t))t=_9r(t,0);else if(k9r(t))t=L9r(t,0);else if(!Ua(i))throw new RangeError($("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Mr(t)}else if(pA(arguments[0])){if(t=arguments[0],!B2(t.byteLength/Pr))throw new RangeError($("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Pr,t.byteLength));t=new Mr(t)}else if(gA(arguments[0])){if(t=arguments[0],hA===!1)throw new TypeError($("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!kt(t[li]))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[li](),!kt(t.next))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=dA(t),t instanceof Error)throw t;t=new Mr(t)}else throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!pA(t))throw new TypeError($("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!mn(r))throw new TypeError($("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!B2(r/Pr))throw new RangeError($("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Pr,r));if(e===2){if(i=t.byteLength-r,!B2(i/Pr))throw new RangeError($("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Pr,i));t=new Mr(t,r)}else{if(i=arguments[2],!mn(i))throw new TypeError($("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Pr>t.byteLength-r)throw new RangeError($("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Pr));t=new Mr(t,r,i*2)}}return yr(this,"_buffer",t),yr(this,"_length",t.length/2),this}yr(er,"BYTES_PER_ELEMENT",Pr);yr(er,"name","Complex128Array");yr(er,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,m;if(!kt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!yA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!kt(n))throw new TypeError($("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(pi(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),ci(l))u[m]=Ha(l),u[m+1]=Wa(l);else if(lA(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(k2(e)){if(n){for(f=e.length,e.get&&e.set?v=R9r("default"):v=P9r("default"),p=0;p<f;p++)if(!ci(v(e,p))){c=!0;break}if(c){if(!Ua(f))throw new RangeError($("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),ci(l))u[m]=Ha(l),u[m+1]=Wa(l);else if(lA(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(gA(e)&&hA&&kt(e[li])){if(u=e[li](),!kt(u.next))throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=F9r(u,n,t):o=dA(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});yr(er,"of",function(){var e,t;if(!kt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!yA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Da(er.prototype,"buffer",function(){return this._buffer.buffer});Da(er.prototype,"byteLength",function(){return this._buffer.byteLength});Da(er.prototype,"byteOffset",function(){return this._buffer.byteOffset});yr(er.prototype,"BYTES_PER_ELEMENT",er.BYTES_PER_ELEMENT);yr(er.prototype,"copyWithin",function(e,t){if(!pi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});yr(er.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!pi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},yr(i,"next",v),yr(i,"return",f),li&&yr(i,li,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new mA(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});yr(er.prototype,"get",function(e){var t;if(!pi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!mn(e))throw new TypeError($("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new mA(t[e],t[e+1])});Da(er.prototype,"length",function(){return this._length});yr(er.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!pi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!mn(i))throw new TypeError($("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(ci(e)){if(i>=this._length)throw new RangeError($("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ha(e),n[i+1]=Wa(e);return}if(pi(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Mr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(k2(e)){for(o=e.length,f=0;f<o;f++)if(!ci(e[f])){u=!0;break}if(u){if(!Ua(o))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Mr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=Ha(v),n[i+1]=Wa(v),i+=2;return}throw new TypeError($("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});qA.exports=er});var dn=s(($te,wA)=>{"use strict";var j9r=bA();wA.exports=j9r});var NA=s((Qte,EA)=>{"use strict";var C9r=dr(),G9r=se(),V9r=cr(),U9r=Pt(),H9r=Zt(),W9r=on(),D9r=Yt(),z9r=fn(),X9r=vn(),J9r=gn(),x9r=dn(),Y9r=[C9r,G9r,U9r,V9r,W9r,H9r,X9r,D9r,z9r,J9r,x9r];EA.exports=Y9r});var OA=s((Kte,AA)=>{"use strict";var Z9r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];AA.exports=Z9r});var IA=s((rie,TA)=>{"use strict";var $9r=Et(),Q9r=mr(),K9r=Ce(),rgr=Mb(),egr=NA(),SA=OA(),tgr=SA.length;function igr(r){var e;if(Q9r(r))return"generic";if($9r(r))return null;for(e=0;e<tgr;e++)if(r instanceof egr[e])return SA[e];return rgr[K9r(r)]||null}TA.exports=igr});var za=s((eie,_A)=>{"use strict";var ngr=IA();_A.exports=ngr});var RA=s((tie,PA)=>{"use strict";var LA=_(),agr=Gr(),sgr=bb(),ugr=b2(),ogr=w2(),fgr=E2(),vgr=za(),j2=q();function cgr(){var r,e,t,i,n,a,u,o,v;if(r=arguments[0],arguments.length>1)if(agr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!LA(t))throw new TypeError(j2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!LA(t))throw new TypeError(j2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!sgr(r))throw new TypeError(j2("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,v=r.next(),!v.done;)i.push(t.call(e,v.value,o));return i}for(;v=r.next(),!v.done;)i.push(v.value);return i}if(n=i.length,u=vgr(i),ugr(i)?a=ogr(u):a=fgr(u),t){for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,t.call(e,v.value,o));return i}for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,v.value);return i}PA.exports=cgr});var MA=s((iie,FA)=>{"use strict";var lgr=RA();FA.exports=lgr});var kA=s((nie,BA)=>{"use strict";function pgr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}BA.exports=pgr});var CA=s((aie,jA)=>{"use strict";function ggr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}jA.exports=ggr});var UA=s((sie,VA)=>{"use strict";var mgr=tr(),GA=ie(),dgr=kA(),hgr=CA(),ygr=.7853981633974483,qgr=3061616997868383e-32,bgr=.3333333333333341,wgr=2147483647;function Egr(r,e,t){var i,n,a,u,o,v,f,c,l;return i=mgr(r),n=i&wgr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=ygr-r,c=qgr-e,r=l+c,e=0),l=r*r,c=l*l,u=dgr(c),f=l*hgr(c),o=l*r,u=e+l*(o*(u+f)+e),u+=bgr*o,c=r+u,n>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(c*c/(c+f)-u)))):t===1?c:(l=GA(c,0),f=u-(l-r),a=-1/c,v=GA(a,0),o=1+v*l,v+a*(o+v*f))}VA.exports=Egr});var WA=s((uie,HA)=>{"use strict";var Ngr=UA();HA.exports=Ngr});var XA=s((oie,zA)=>{"use strict";var Agr=tr(),DA=WA(),Ogr=Zi(),C2=[0,0],Sgr=2147483647,Tgr=1072243195,Igr=2146435072,_gr=1044381696;function Lgr(r){var e,t;return e=Agr(r),e&=Sgr,e<=Tgr?e<_gr?r:DA(r,0,1):e>=Igr?NaN:(t=Ogr(r,C2),DA(C2[0],C2[1],1-((t&1)<<1)))}zA.exports=Lgr});var G2=s((fie,JA)=>{"use strict";var Pgr=XA();JA.exports=Pgr});var Xa=s((vie,xA)=>{"use strict";var Rgr=1.5707963267948966;xA.exports=Rgr});var Ja=s((cie,YA)=>{"use strict";var Fgr=.7853981633974483;YA.exports=Fgr});var $A=s((lie,ZA)=>{"use strict";function Mgr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}ZA.exports=Mgr});var KA=s((pie,QA)=>{"use strict";function Bgr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}QA.exports=Bgr});var tO=s((gie,eO)=>{"use strict";var kgr=E(),jgr=L(),V2=Xa(),Cgr=Ja(),Ggr=U(),Vgr=$A(),Ugr=KA(),rO=6123233995736766e-32,Hgr=2.414213562373095;function Wgr(r){var e,t,i,n;return kgr(r)||r===0?r:r===jgr?V2:r===Ggr?-V2:(r<0&&(t=!0,r=-r),e=0,r>Hgr?(i=V2,e=1,r=-(1/r)):r<=.66?i=0:(i=Cgr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*Vgr(n)/Ugr(n),n=r*n+r,e===2?n+=.5*rO:e===1&&(n+=rO),i+=n,t?-i:i)}eO.exports=Wgr});var xa=s((mie,iO)=>{"use strict";var Dgr=tO();iO.exports=Dgr});var U2=s((die,nO)=>{"use strict";var zgr=j().isPrimitive;function Xgr(r){return zgr(r)&&r>=0}nO.exports=Xgr});var H2=s((hie,aO)=>{"use strict";var Jgr=j().isObject;function xgr(r){return Jgr(r)&&r.valueOf()>=0}aO.exports=xgr});var uO=s((yie,sO)=>{"use strict";var Ygr=U2(),Zgr=H2();function $gr(r){return Ygr(r)||Zgr(r)}sO.exports=$gr});var D2=s((qie,fO)=>{"use strict";var oO=w(),W2=uO(),Qgr=U2(),Kgr=H2();oO(W2,"isPrimitive",Qgr);oO(W2,"isObject",Kgr);fO.exports=W2});var cO=s((bie,vO)=>{"use strict";var rmr=I(),Ya=O(),emr=Cr().isPrimitive,tmr=ae().isPrimitive,imr=Xe().isPrimitive,nmr=D2().isPrimitive,hn=q();function amr(r,e){return rmr(e)?Ya(e,"period")&&(r.period=e.period,!tmr(e.period))?new TypeError(hn("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):Ya(e,"amplitude")&&(r.amplitude=e.amplitude,!nmr(e.amplitude))?new TypeError(hn("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):Ya(e,"offset")&&(r.offset=e.offset,!emr(e.offset))?new TypeError(hn("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):Ya(e,"iter")&&(r.iter=e.iter,!imr(e.iter))?new TypeError(hn("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(hn("invalid argument. Options argument must be an object. Value: `%s`.",e))}vO.exports=amr});var mO=s((wie,gO)=>{"use strict";var z2=w(),lO=Ma(),smr=G2(),umr=xa(),omr=Xa(),fmr=_r(),vmr=cO();function pO(r){var e,t,i,n,a,u,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=vmr(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=fmr/e.period,o=e.amplitude/omr,v=0,t={},z2(t,"next",f),z2(t,"return",c),lO&&z2(t,lO,l),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*umr(smr(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return pO(e)}}gO.exports=pO});var hO=s((Eie,dO)=>{"use strict";var cmr=mO();dO.exports=cmr});var qO=s((Nie,yO)=>{"use strict";var lmr={Complex64:"complex64",Complex128:"complex128"};yO.exports=lmr});var wO=s((Aie,bO)=>{"use strict";var pmr=ai(),gmr=ni(),mmr=[pmr,gmr];bO.exports=mmr});var NO=s((Oie,EO)=>{"use strict";var dmr=["complex64","complex128"];EO.exports=dmr});var SO=s((Sie,OO)=>{"use strict";var hmr=Ce(),ymr=qO(),qmr=wO(),AO=NO(),bmr=AO.length;function wmr(r){var e;for(e=0;e<bmr;e++)if(r instanceof qmr[e])return AO[e];return ymr[hmr(r)]||null}OO.exports=wmr});var X2=s((Tie,TO)=>{"use strict";var Emr=SO();TO.exports=Emr});var _O=s((Iie,IO)=>{"use strict";var Nmr=dr(),Amr=se(),Omr=dn(),Smr=gn(),Tmr={float64:Nmr,float32:Amr,complex128:Omr,complex64:Smr};IO.exports=Tmr});var PO=s((_ie,LO)=>{"use strict";var Imr=_O();function _mr(r){return Imr[r]||null}LO.exports=_mr});var FO=s((Lie,RO)=>{"use strict";var Lmr=PO();RO.exports=Lmr});var BO=s((Pie,MO)=>{"use strict";function Pmr(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}MO.exports=Pmr});var UO=s((Rie,VO)=>{"use strict";var Rmr=ai(),Fmr=ni(),kO=Ye(),jO=Ze(),CO=Je(),GO=xe();function Mmr(r,e,t,i,n,a){var u,o,v,f,c,l,p,m,h,d,g,y,N;if(n===0)return[];if(o=0,r==="float64"?(f=e,l=0):r==="complex64"?(o+=1,f=CO(e),l=GO(e)):(f=kO(e),l=jO(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=CO(i),p=GO(i)):(c=kO(i),p=jO(i)),o===2?u=Rmr:u=Fmr,n===1)return a?[new u(c,p)]:[new u(f,l)];for(v=[new u(f,l)],a?y=n-1:y=n,d=(c-f)/y,g=(p-l)/y,N=1;N<y;N++)m=f+d*N,h=l+g*N,v.push(new u(m,h));return a&&v.push(new u(c,p)),v}VO.exports=Mmr});var J2=s((Fie,HO)=>{"use strict";function Bmr(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}HO.exports=Bmr});var x2=s((Mie,JO)=>{"use strict";var WO=Ye(),DO=Ze(),zO=Je(),XO=xe();function kmr(r,e,t,i,n,a,u){var o,v,f,c,l,p,m,h,d;if(a===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=zO(t),f=XO(t)):(o=WO(t),f=DO(t)),i==="float64"?(v=n,c=0):i==="complex64"?(v=zO(n),c=XO(n)):(v=WO(n),c=DO(n)),a===1)return u?(r[0]=v,r[1]=c):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,u?m=a-1:m=a,l=(v-o)/m,p=(c-f)/m,d=2,h=1;h<m;h++)r[d]=o+l*h,r[d+1]=f+p*h,d+=2;return u&&(r[d]=v,r[d+1]=c),r}JO.exports=kmr});var Z2=s((Bie,YO)=>{"use strict";var jmr=I(),xO=O(),Cmr=K().isPrimitive,Gmr=fr().isPrimitive,Y2=q();function Vmr(r,e){return jmr(e)?xO(e,"dtype")&&(r.dtype=e.dtype,!Cmr(r.dtype))?new TypeError(Y2("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):xO(e,"endpoint")&&(r.endpoint=e.endpoint,!Gmr(r.endpoint))?new TypeError(Y2("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(Y2("invalid argument. Options argument must be an object. Value: `%s`.",e))}YO.exports=Vmr});var $2=s((kie,Umr)=>{Umr.exports={endpoint:!0}});var tS=s((jie,eS)=>{"use strict";var ZO=Hr(),$O=j().isPrimitive,Hmr=Xe().isPrimitive,QO=E(),KO=X2(),Wmr=FO(),Dmr=si(),zmr=ui(),gi=q(),Xmr=BO(),Jmr=UO(),xmr=J2(),rS=x2(),Ymr=Z2(),Zmr=$2();function $mr(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(o=KO(r),o===null){if(!ZO(r))throw new TypeError(gi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}f=!0}else{if(!$O(r)||QO(r))throw new TypeError(gi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(v=KO(e),v===null){if(!ZO(e))throw new TypeError(gi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="complex128"}f=!0}else{if(!$O(e)||QO(e))throw new TypeError(gi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="float64"}if(!Hmr(t))throw new TypeError(gi("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:Zmr.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=Ymr(i,arguments[3]),a))throw a;if(i.dtype==="generic")return f?Jmr(o,r,v,e,t,i.endpoint):Xmr(r,e,t,i.endpoint);if(n=Wmr(i.dtype),n===null)throw new TypeError(gi('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return rS(Dmr(u,0),o,r,v,e,t,i.endpoint),u;if(i.dtype==="complex128")return rS(zmr(u,0),o,r,v,e,t,i.endpoint),u;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return xmr(u,r,e,t,i.endpoint)}eS.exports=$mr});var nS=s((Cie,iS)=>{"use strict";var Qmr=b2(),Kmr=Ba(),rdr=E2(),edr=ka(),tdr=w2(),idr=za();function ndr(r){var e=idr(r);return Qmr(r)?{accessorProtocol:!0,accessors:[edr(e),tdr(e)]}:{accessorProtocol:!1,accessors:[Kmr(e),rdr(e)]}}iS.exports=ndr});var sS=s((Gie,aS)=>{"use strict";var adr=nS();aS.exports=adr});var oS=s((Vie,uS)=>{"use strict";var sdr=sS();function udr(r){var e=sdr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}uS.exports=udr});var Za=s((Uie,fS)=>{"use strict";var odr=oS();fS.exports=odr});var mS=s((Hie,gS)=>{"use strict";var fdr=ai(),vdr=ni(),vS=Ye(),cS=Ze(),lS=Je(),pS=xe();function cdr(r,e,t,i,n,a,u){var o,v,f,c,l,p,m,h,d,g,y,N,A,G;if(a===0)return r;if(v=0,e==="float64"?(f=t,l=0):e==="complex64"?(v+=1,f=lS(t),l=pS(t)):(f=vS(t),l=cS(t)),i==="float64"?(c=n,p=0):i==="complex64"?(v+=1,c=lS(n),p=pS(n)):(c=vS(n),p=cS(n)),v===2?o=fdr:o=vdr,h=r.data,m=r.accessors[1],a===1)return u?m(h,0,new o(c,p)):m(h,0,new o(f,l)),r;for(m(h,0,new o(f,l)),u?A=a-1:A=a,y=(c-f)/A,N=(p-l)/A,G=1;G<A;G++)d=f+y*G,g=l+N*G,m(h,G,new o(d,g));return u&&m(h,A,new o(c,p)),r}gS.exports=cdr});var hS=s((Wie,dS)=>{"use strict";function ldr(r,e,t,i,n){var a,u,o,v,f;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)u(a,f,e+v*f);return n&&u(a,o,t),r}dS.exports=ldr});var OS=s((Die,AS)=>{"use strict";var yS=Hr(),qS=j().isPrimitive,pdr=Gr(),yn=q(),bS=E(),wS=X2(),gdr=za(),mdr=si(),ddr=ui(),ES=Za(),hdr=mS(),ydr=hS(),NS=x2(),qdr=J2(),bdr=Z2(),wdr=$2();function Edr(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(a=wS(r),a===null){if(!yS(r))throw new TypeError(yn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!qS(r)||bS(r))throw new TypeError(yn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=wS(e),u===null){if(!yS(e))throw new TypeError(yn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!qS(e)||bS(e))throw new TypeError(yn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!pdr(t))throw new TypeError(yn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:wdr.endpoint},arguments.length>3&&(n=bdr(i,arguments[3]),n))throw n;if(v=gdr(t),v===null&&(v="generic"),v==="complex64")return NS(mdr(t,0),a,r,u,e,t.length,i.endpoint),t;if(v==="complex128")return NS(ddr(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=ES(t),hdr(f,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=ES(t),f.accessorProtocol?(ydr(f,r,e,t.length,i.endpoint),t):(qdr(t,r,e,t.length,i.endpoint),t)}AS.exports=Edr});var IS=s((zie,TS)=>{"use strict";var Ndr=w(),SS=tS(),Adr=OS();Ndr(SS,"assign",Adr);TS.exports=SS});var LS=s((Xie,_S)=>{"use strict";var Odr=E(),Sdr=De();function Tdr(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],Odr(a))return a;(a>i||a===i&&Sdr(a))&&(i=a)}return i}_S.exports=Tdr});var RS=s((Jie,PS)=>{"use strict";var Idr=E(),_dr=De();function Ldr(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],Idr(u))return u;(u>n||u===n&&_dr(u))&&(n=u)}return n}PS.exports=Ldr});var BS=s((xie,MS)=>{"use strict";var Pdr=w(),FS=LS(),Rdr=RS();Pdr(FS,"ndarray",Rdr);MS.exports=FS});var jS=s((Yie,kS)=>{"use strict";var Fdr=BS();kS.exports=Fdr});var VS=s((Zie,GS)=>{"use strict";var CS=E(),Mdr=De();function Bdr(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,f=0;f<r&&i[o]!==0;f++)u+=t,o+=n;if(f===r)return NaN;if(a=e[u],CS(a))return a;for(f+=1,f;f<r;f++)if(u+=t,o+=n,!i[o]){if(v=e[u],CS(v))return v;(v>a||v===a&&Mdr(v))&&(a=v)}return a}GS.exports=Bdr});var WS=s(($ie,HS)=>{"use strict";var US=E(),kdr=De();function jdr(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return NaN;for(v=i,f=u,l=0;l<r&&n[f]!==0;l++)v+=t,f+=a;if(l===r)return NaN;if(o=e[v],US(o))return o;for(l+=1,l;l<r;l++)if(v+=t,f+=a,!n[f]){if(c=e[v],US(c))return c;(c>o||c===o&&kdr(c))&&(o=c)}return o}HS.exports=jdr});var XS=s((Qie,zS)=>{"use strict";var Cdr=w(),DS=VS(),Gdr=WS();Cdr(DS,"ndarray",Gdr);zS.exports=DS});var YS=s((Kie,xS)=>{"use strict";var JS=q();function Vdr(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(JS('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(JS('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}xS.exports=Vdr});var $S=s((rne,ZS)=>{"use strict";var Udr=YS();ZS.exports=Udr});var KS=s((ene,QS)=>{"use strict";var Hdr=j().isPrimitive,Wdr=$S(),Ddr=q();function zdr(r,e,t,i,n,a){var u,o;if(!(Hdr(r)&&Wdr(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(Ddr("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}QS.exports=zdr});var eT=s((tne,rT)=>{"use strict";var Xdr=fr().isPrimitive,Jdr=q();function xdr(r,e){if(!Xdr(r))throw new TypeError(Jdr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}rT.exports=xdr});var iT=s((ine,tT)=>{"use strict";function Ydr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}tT.exports=Ydr});var aT=s((nne,nT)=>{"use strict";var Zdr=q(),$dr=iT();function Qdr(r,e,t){if(!$dr(r,e))throw new TypeError(Zdr("invalid argument. %s must be broadcast compatible.",t))}nT.exports=Qdr});var uT=s((ane,sT)=>{"use strict";function Kdr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}sT.exports=Kdr});var fT=s((sne,oT)=>{"use strict";var rhr=q(),ehr=uT();function thr(r,e,t,i){if(!ehr(r,e))throw new TypeError(rhr("invalid argument. %s must be broadcast compatible with %s.",t,i))}oT.exports=thr});var Q2=s((une,vT)=>{"use strict";var ihr=q();function nhr(r,e){if(r===void 0)throw new Error(ihr("invalid invocation. Must provide %s.",e))}vT.exports=nhr});var lT=s((one,cT)=>{"use strict";var ahr=q();function shr(r,e,t,i){if(!(r>e))throw new TypeError(ahr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}cT.exports=shr});var gT=s((fne,pT)=>{"use strict";var uhr=q();function ohr(r,e,t,i){if(!(r>=e))throw new TypeError(uhr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}pT.exports=ohr});var dT=s((vne,mT)=>{"use strict";var fhr=Cr().isPrimitive,vhr=q();function chr(r,e){if(!fhr(r))throw new TypeError(vhr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}mT.exports=chr});var yT=s((cne,hT)=>{"use strict";var lhr=q();function phr(r,e,t,i){if(!(r<e))throw new TypeError(lhr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}hT.exports=phr});var bT=s((lne,qT)=>{"use strict";var ghr=q();function mhr(r,e,t,i){if(!(r<=e))throw new TypeError(ghr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}qT.exports=mhr});var ET=s((pne,wT)=>{"use strict";var dhr=Xe().isPrimitive,hhr=q();function yhr(r,e){if(!dhr(r))throw new TypeError(hhr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}wT.exports=yhr});var AT=s((gne,NT)=>{"use strict";var qhr=D2().isPrimitive,bhr=q();function whr(r,e){if(!qhr(r))throw new TypeError(bhr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}NT.exports=whr});var ST=s((mne,OT)=>{"use strict";var Ehr=j().isPrimitive,Nhr=q();function Ahr(r,e){if(!Ehr(r))throw new TypeError(Nhr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}OT.exports=Ahr});var IT=s((dne,TT)=>{"use strict";var Ohr=q();function Shr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(Ohr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}TT.exports=Shr});var K2=s((hne,_T)=>{"use strict";var Thr=ae().isPrimitive,Ihr=q();function _hr(r,e){if(!Thr(r))throw new TypeError(Ihr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}_T.exports=_hr});var PT=s((yne,LT)=>{"use strict";var Lhr=D().isPrimitive,Phr=q();function Rhr(r,e){if(!Lhr(r))throw new TypeError(Phr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}LT.exports=Rhr});var r1=s((qne,RT)=>{"use strict";var Fhr=j().isPrimitive;function Mhr(r){return Fhr(r)&&r>=0&&r<=1}RT.exports=Mhr});var e1=s((bne,FT)=>{"use strict";var Bhr=j().isObject;function khr(r){return Bhr(r)&&r.valueOf()>=0&&r.valueOf()<=1}FT.exports=khr});var BT=s((wne,MT)=>{"use strict";var jhr=r1(),Chr=e1();function Ghr(r){return jhr(r)||Chr(r)}MT.exports=Ghr});var qn=s((Ene,jT)=>{"use strict";var kT=w(),t1=BT(),Vhr=r1(),Uhr=e1();kT(t1,"isPrimitive",Vhr);kT(t1,"isObject",Uhr);jT.exports=t1});var GT=s((Nne,CT)=>{"use strict";var Hhr=qn().isPrimitive,Whr=q();function Dhr(r,e){if(!Hhr(r))throw new TypeError(Whr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}CT.exports=Dhr});var UT=s((Ane,VT)=>{"use strict";var zhr=mr(),Xhr=q();function Jhr(r,e){if(!zhr(r))throw new TypeError(Xhr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}VT.exports=Jhr});var WT=s((One,HT)=>{"use strict";function xhr(r){return r.length===1||r[0].length===1}HT.exports=xhr});var zT=s((Sne,DT)=>{"use strict";var Yhr=mr(),Zhr=WT();function $hr(r){return Yhr(r)&&Zhr(r)}DT.exports=$hr});var JT=s((Tne,XT)=>{"use strict";var Qhr=q(),Khr=zT();function ryr(r,e){if(!Khr(r))throw new TypeError(Qhr("invalid argument. %s must consist of only a single row or a single column.",e))}XT.exports=ryr});var YT=s((Ine,xT)=>{"use strict";function eyr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}xT.exports=eyr});var $T=s((_ne,ZT)=>{"use strict";var tyr=q(),iyr=YT();function nyr(r,e,t){if(!iyr(r,e))throw new TypeError(tyr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}ZT.exports=nyr});var KT=s((Lne,QT)=>{"use strict";var ayr=K().isPrimitive,syr=q();function uyr(r,e){if(!ayr(r))throw new TypeError(syr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}QT.exports=uyr});var eI=s((Pne,rI)=>{"use strict";var oyr=q();function fyr(r){throw new Error(oyr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}rI.exports=fyr});var nI=s((Rne,iI)=>{"use strict";var tI=K2(),vyr=Q2();function cyr(r,e,t){tI(r,"Number of rows"),tI(e,"Number of columns"),vyr(t,"a pseudorandom number generator seed")}iI.exports=cyr});var sI=s((Fne,aI)=>{"use strict";var lyr=mr(),pyr=Cr().isPrimitive,gyr=q(),myr=La();function dyr(r){if(pyr(r))return r;if(lyr(r))return myr(r);throw new TypeError(gyr("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}aI.exports=dyr});var oI=s((Mne,uI)=>{"use strict";var x={};x.isBetween=KS();x.isBoolean=eT();x.isBroadcastCompatible=aT();x.isBroadcastCompatibleWith=fT();x.isDefined=Q2();x.isGreaterThan=lT();x.isGreaterThanEqual=gT();x.isInteger=dT();x.isLessThan=yT();x.isLessThanEqual=bT();x.isNonNegativeInteger=ET();x.isNonNegativeNumber=AT();x.isNumber=ST();x.isOneOf=IT();x.isPositiveInteger=K2();x.isPositiveNumber=PT();x.isProbability=GT();x.isRange=UT();x.isRange1d=JT();x.isSameShape=$T();x.isString=KT();x.unrecognizedOptionName=eI();x.verifyCommonPRNGArgs=nI();x.verifyPRNGSeed=sI();uI.exports=x});var vI=s((Bne,fI)=>{"use strict";var i1=4;function hyr(r,e,t,i,n,a){var u,o,v,f;if(r<=0||e===0)return n;if(i===1&&a===1){if(v=r%i1,v>0)for(f=0;f<v;f++)n[f]+=e*t[f];if(r<i1)return n;for(f=v;f<r;f+=i1)n[f]+=e*t[f],n[f+1]+=e*t[f+1],n[f+2]+=e*t[f+2],n[f+3]+=e*t[f+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,f=0;f<r;f++)n[o]+=e*t[u],u+=i,o+=a;return n}fI.exports=hyr});var lI=s((kne,cI)=>{"use strict";var bn=4;function yyr(r,e,t,i,n,a,u,o){var v,f,c,l;if(r<=0||e===0)return a;if(v=n,f=o,i===1&&u===1){if(c=r%bn,c>0)for(l=0;l<c;l++)a[f]+=e*t[v],v+=i,f+=u;if(r<bn)return a;for(l=c;l<r;l+=bn)a[f]+=e*t[v],a[f+1]+=e*t[v+1],a[f+2]+=e*t[v+2],a[f+3]+=e*t[v+3],v+=bn,f+=bn;return a}for(l=0;l<r;l++)a[f]+=e*t[v],v+=i,f+=u;return a}cI.exports=yyr});var n1=s((jne,gI)=>{"use strict";var qyr=w(),pI=vI(),byr=lI();qyr(pI,"ndarray",byr);gI.exports=pI});var dI=s((Cne,mI)=>{"use strict";var a1={};a1.daxpy=n1().ndarray;a1.saxpy=n1().ndarray;mI.exports=a1});var yI=s((Gne,hI)=>{"use strict";function wyr(r){return r*r}hI.exports=wyr});var $a=s((Vne,qI)=>{"use strict";var Eyr=yI();qI.exports=Eyr});var wI=s((Une,bI)=>{"use strict";function Nyr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}bI.exports=Nyr});var NI=s((Hne,EI)=>{"use strict";function Ayr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}EI.exports=Ayr});var SI=s((Wne,OI)=>{"use strict";var Oyr=E(),Syr=C(),AI=Ja(),Tyr=wI(),Iyr=NI(),_yr=6123233995736766e-32;function Lyr(r){var e,t,i,n,a;if(Oyr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*Iyr(t),t=Syr(t+t),a=AI-t,t=t*n-_yr,a-=t,a+=AI;else{if(i<1e-8)return r;t=i*i,a=t*Tyr(t),a=i*a+i}return e?-a:a}OI.exports=Lyr});var jt=s((Dne,TI)=>{"use strict";var Pyr=SI();TI.exports=Pyr});var PI=s((zne,LI)=>{"use strict";var Ryr=E(),II=jt(),Fyr=C(),_I=Ja(),Myr=6123233995736766e-32;function Byr(r){var e;return Ryr(r)?NaN:r<-1||r>1?NaN:r>.5?2*II(Fyr(.5-.5*r)):(e=_I-II(r),e+=Myr,e+=_I,e)}LI.exports=Byr});var wn=s((Xne,RI)=>{"use strict";var kyr=PI();RI.exports=kyr});var kI=s((Jne,BI)=>{"use strict";var jyr=E(),Cyr=We(),FI=C(),Gyr=qa(),MI=P(),Vyr=1<<28;function Uyr(r){var e;return jyr(r)||r<1?NaN:r===1?0:r>=Vyr?MI(r)+Gyr:r>2?MI(2*r-1/(r+FI(r*r-1))):(e=r-1,Cyr(e+FI(2*e+e*e)))}BI.exports=Uyr});var CI=s((xne,jI)=>{"use strict";var Hyr=kI();jI.exports=Hyr});var VI=s((Yne,GI)=>{"use strict";var Wyr=xa();function Dyr(r){return Wyr(1/r)}GI.exports=Dyr});var HI=s((Zne,UI)=>{"use strict";var zyr=VI();UI.exports=zyr});var DI=s(($ne,WI)=>{"use strict";var Xyr=jt();function Jyr(r){return Xyr(1+r)}WI.exports=Jyr});var XI=s((Qne,zI)=>{"use strict";var xyr=DI();zI.exports=xyr});var xI=s((Kne,JI)=>{"use strict";var Yyr=jt();function Zyr(r){return Yyr(1-r)}JI.exports=Zyr});var ZI=s((rae,YI)=>{"use strict";var $yr=xI();YI.exports=$yr});var QI=s((eae,$I)=>{"use strict";var Qyr=jt();function Kyr(r){return Qyr(1/r)}$I.exports=Kyr});var r_=s((tae,KI)=>{"use strict";var rqr=QI();KI.exports=rqr});var n_=s((iae,i_)=>{"use strict";var eqr=Rr(),tqr=E(),iqr=We(),e_=C(),nqr=qa(),t_=P(),aqr=1/(1<<28),sqr=1<<28;function uqr(r){var e,t,i;return tqr(r)||eqr(r)?r:(r<0&&(r=-r,e=!0),r<aqr?i=r:r>sqr?i=t_(r)+nqr:r>2?i=t_(2*r+1/(e_(r*r+1)+r)):(t=r*r,i=iqr(r+t/(1+e_(1+t)))),e?-i:i)}i_.exports=uqr});var s1=s((nae,a_)=>{"use strict";var oqr=n_();a_.exports=oqr});var u_=s((aae,s_)=>{"use strict";var fqr=s1();function vqr(r){return fqr(1/r)}s_.exports=vqr});var f_=s((sae,o_)=>{"use strict";var cqr=u_();o_.exports=cqr});var c_=s((uae,v_)=>{"use strict";var lqr=wn(),pqr=C();function gqr(r){return 2*lqr(pqr(r))}v_.exports=gqr});var p_=s((oae,l_)=>{"use strict";var mqr=c_();l_.exports=mqr});var m_=s((fae,g_)=>{"use strict";var dqr=jt(),hqr=C();function yqr(r){return 2*dqr(hqr(r))}g_.exports=yqr});var h_=s((vae,d_)=>{"use strict";var qqr=m_();d_.exports=qqr});var b_=s((cae,q_)=>{"use strict";var bqr=E(),y_=We(),wqr=L(),Eqr=U(),Nqr=1/(1<<28);function Aqr(r){var e,t;return bqr(r)||r<-1||r>1?NaN:r===1?wqr:r===-1?Eqr:(r<0&&(e=!0,r=-r),r<Nqr?e?-r:r:(r<.5?(t=r+r,t=.5*y_(t+t*r/(1-r))):t=.5*y_((r+r)/(1-r)),e?-t:t))}q_.exports=Aqr});var E_=s((lae,w_)=>{"use strict";var Oqr=b_();w_.exports=Oqr});var A_=s((pae,N_)=>{"use strict";var Sqr=wn();function Tqr(r){return Sqr(1+r)}N_.exports=Tqr});var S_=s((gae,O_)=>{"use strict";var Iqr=A_();O_.exports=Iqr});var I_=s((mae,T_)=>{"use strict";var _qr=wn();function Lqr(r){return _qr(1-r)}T_.exports=Lqr});var L_=s((dae,__)=>{"use strict";var Pqr=I_();__.exports=Pqr});var F_=s((hae,R_)=>{"use strict";var P_=-.16666666666666632,Rqr=.00833333333332249,Fqr=-.0001984126982985795,Mqr=27557313707070068e-22,Bqr=-25050760253406863e-24,kqr=158969099521155e-24,jqr=.0416666666666666,Cqr=-.001388888888887411,Gqr=2480158728947673e-20,Vqr=-27557314351390663e-23,Uqr=2087572321298175e-24,Hqr=-11359647557788195e-27;function Wqr(r,e,t,i,n){var a,u,o,v,f;return f=r*r,v=f*f,u=Rqr+f*(Fqr+f*Mqr)+f*v*(Bqr+f*kqr),o=f*r,e===0?t[n]=r+o*(P_+f*u):t[n]=r-(f*(.5*e-o*u)-e-o*P_),u=f*(jqr+f*(Cqr+f*Gqr)),u+=v*v*(Vqr+f*(Uqr+f*Hqr)),a=.5*f,v=1-a,t[n+i]=v+(1-v-a+(f*u-r*e)),t}R_.exports=Wqr});var o1=s((yae,B_)=>{"use strict";var Dqr=Jr(),zqr=Ji(),Xqr=tr(),Jqr=Zi(),M_=F_(),xqr=1072243195,Yqr=1044381696,u1=[0,0];function Zqr(r,e,t,i){var n,a;if(n=Xqr(r),n&=Dqr,n<=xqr)return n<Yqr&&(r|0)===0&&(e[i]=r,e[i+t]=0),M_(r,0,e,t,i);if(n>=zqr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=Jqr(r,u1),M_(u1[0],u1[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}B_.exports=Zqr});var j_=s((qae,k_)=>{"use strict";var $qr=o1();function Qqr(r){return $qr(r,[0,0],1,0)}k_.exports=Qqr});var En=s((bae,G_)=>{"use strict";var Kqr=w(),C_=j_(),rbr=o1();Kqr(C_,"assign",rbr);G_.exports=C_});var U_=s((wae,V_)=>{"use strict";function ebr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}V_.exports=ebr});var W_=s((Eae,H_)=>{"use strict";function tbr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}H_.exports=tbr});var z_=s((Nae,D_)=>{"use strict";function ibr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}D_.exports=ibr});var J_=s((Aae,X_)=>{"use strict";function nbr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}X_.exports=nbr});var Y_=s((Oae,x_)=>{"use strict";var abr=C(),sbr=En().assign,ubr=L(),obr=U_(),fbr=W_(),vbr=z_(),cbr=J_(),lbr=.5641895835477563,pbr=2.404825557695773,gbr=5.520078110286311,mbr=616,dbr=-.0014244423042272315,hbr=1413,ybr=.0005468602863106496,Nn=[0,0];function qbr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===ubr?0:r===0?1:r<=4?(a=r*r,n=obr(a),u=(r+pbr)*(r-mbr/256-dbr),u*n):r<=8?(a=1-r*r/64,n=fbr(a),u=(r+gbr)*(r-hbr/256-ybr),u*n):(a=8/r,i=a*a,e=vbr(i),t=cbr(i),u=lbr/abr(r),sbr(r,Nn,1,0),u*(e*(Nn[1]+Nn[0])-a*t*(Nn[0]-Nn[1])))}x_.exports=qbr});var f1=s((Sae,Z_)=>{"use strict";var bbr=Y_();Z_.exports=bbr});var Qa=s((Tae,$_)=>{"use strict";var wbr=1.772453850905516;$_.exports=wbr});var K_=s((Iae,Q_)=>{"use strict";function Ebr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}Q_.exports=Ebr});var eL=s((_ae,rL)=>{"use strict";function Nbr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}rL.exports=Nbr});var iL=s((Lae,tL)=>{"use strict";function Abr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}tL.exports=Abr});var aL=s((Pae,nL)=>{"use strict";function Obr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}nL.exports=Obr});var uL=s((Rae,sL)=>{"use strict";var Sbr=C(),Tbr=Y(),Ibr=En().assign,_br=L(),Lbr=Qa(),Pbr=K_(),Rbr=eL(),Fbr=iL(),Mbr=aL(),Bbr=3.8317059702075125,kbr=7.015586669815619,jbr=981,Cbr=-.0003252797924876844,Gbr=1796,Vbr=-38330184381246464e-21,An=[0,0];function Ubr(r){var e,t,i,n,a,u,o,v;return v=Tbr(r),r===0||v===_br?0:(v<=4?(u=r*r,a=Pbr(u),o=v*(v+Bbr)*(v-jbr/256-Cbr),e=o*a):v<=8?(u=r*r,a=Rbr(u),o=v*(v+kbr)*(v-Gbr/256-Vbr),e=o*a):(u=8/v,n=u*u,t=Fbr(n),i=Mbr(n),o=1/(Sbr(v)*Lbr),Ibr(v,An,1,0),e=o*(t*(An[0]-An[1])+u*i*(An[0]+An[1]))),r<0&&(e*=-1),e)}sL.exports=Ubr});var v1=s((Fae,oL)=>{"use strict";var Hbr=uL();oL.exports=Hbr});var vL=s((Mae,fL)=>{"use strict";function Wbr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}fL.exports=Wbr});var lL=s((Bae,cL)=>{"use strict";function Dbr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}cL.exports=Dbr});var gL=s((kae,pL)=>{"use strict";function zbr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}pL.exports=zbr});var dL=s((jae,mL)=>{"use strict";function Xbr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}mL.exports=Xbr});var yL=s((Cae,hL)=>{"use strict";function Jbr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}hL.exports=Jbr});var NL=s((Gae,EL)=>{"use strict";var c1=P(),xbr=C(),Ybr=_r(),Zbr=Qa(),$br=U(),Qbr=L(),Kbr=En().assign,l1=f1(),rwr=vL(),ewr=lL(),twr=gL(),iwr=dL(),nwr=yL(),awr=1/Zbr,p1=2/Ybr,qL=.8935769662791675,bL=3.957678419314858,wL=7.086051060301773,swr=228,uwr=.0029519662791675214,owr=1013,fwr=.0006471693148578684,vwr=1814,cwr=.00011356030177269763,On=[0,0];function lwr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?$br:r===Qbr?0:r<=3?(a=r*r,u=c1(r/qL)*l1(r)*p1,n=rwr(a),o=(r+qL)*(r-swr/256-uwr),u+o*n):r<=5.5?(a=r*r,u=c1(r/bL)*l1(r)*p1,n=ewr(a),o=(r+bL)*(r-owr/256-fwr),u+o*n):r<=8?(a=r*r,u=c1(r/wL)*l1(r)*p1,n=twr(a),o=(r+wL)*(r-vwr/256-cwr),u+o*n):(a=8/r,i=a*a,e=iwr(i),t=nwr(i),o=awr/xbr(r),Kbr(r,On,1,0),o*(e*(On[0]-On[1])+a*t*(On[1]+On[0])))}EL.exports=lwr});var OL=s((Vae,AL)=>{"use strict";var pwr=NL();AL.exports=pwr});var TL=s((Uae,SL)=>{"use strict";function gwr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}SL.exports=gwr});var _L=s((Hae,IL)=>{"use strict";function mwr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}IL.exports=mwr});var PL=s((Wae,LL)=>{"use strict";function dwr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}LL.exports=dwr});var FL=s((Dae,RL)=>{"use strict";function hwr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}RL.exports=hwr});var VL=s((zae,GL)=>{"use strict";var ML=P(),ywr=C(),qwr=_r(),bwr=Qa(),wwr=U(),Ewr=L(),Nwr=En().assign,BL=v1(),Awr=TL(),Owr=_L(),Swr=PL(),Twr=FL(),Iwr=1/bwr,kL=2/qwr,jL=2.197141326031017,CL=5.429681040794135,_wr=562,Lwr=.001828826031017035,Pwr=1390,Rwr=-6459205864867228e-21,Sn=[0,0];function Fwr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?wwr:r===Ewr?0:r<=4?(a=r*r,u=ML(r/jL)*BL(r)*kL,n=Awr(a),o=(r+jL)*(r-_wr/256-Lwr)/r,u+o*n):r<=8?(a=r*r,u=ML(r/CL)*BL(r)*kL,n=Owr(a),o=(r+CL)*(r-Pwr/256-Rwr)/r,u+o*n):(a=8/r,i=a*a,e=Swr(i),t=Twr(i),o=Iwr/ywr(r),Nwr(r,Sn,1,0),o*(a*t*(Sn[0]-Sn[1])-e*(Sn[0]+Sn[1])))}GL.exports=Fwr});var HL=s((Xae,UL)=>{"use strict";var Mwr=VL();UL.exports=Mwr});var zL=s((Jae,DL)=>{"use strict";var Bwr=E(),kwr=Rr(),jwr=Y(),WL=St(),Cwr=Tt(),Gwr=Q(),g1=_r(),Vwr=sn(),Uwr=Vwr+1;function Hwr(r){var e,t,i,n;return Bwr(r)?NaN:kwr(r)?NaN:(e=jwr(r),e>Uwr?1:(t=Gwr(e),i=e-t,i===.5?0:(i<.25?n=WL(g1*i):i<.75?(i=.5-i,n=Cwr(g1*i)):(i=1-i,n=-WL(g1*i)),t%2===1?-n:n)))}DL.exports=Hwr});var JL=s((xae,XL)=>{"use strict";var Wwr=zL();XL.exports=Wwr});var YL=s((Yae,xL)=>{"use strict";var Dwr=1.618033988749895;xL.exports=Dwr});var $L=s((Zae,ZL)=>{"use strict";var zwr=E(),Xwr=JL(),Jwr=W(),xwr=YL(),Ywr=L(),Zwr=U(),$wr=2.23606797749979;function Qwr(r){var e,t;return zwr(r)||r===Ywr||r===Zwr?NaN:(e=Jwr(xwr,r),t=Xwr(r)/e,(e-t)/$wr)}ZL.exports=Qwr});var KL=s(($ae,QL)=>{"use strict";var Kwr=$L();QL.exports=Kwr});var eP=s((Qae,rP)=>{"use strict";function rEr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}rP.exports=rEr});var aP=s((Kae,nP)=>{"use strict";var eEr=mo(),tEr=vo(),tP=Jr(),d1=tr(),iEr=re(),nEr=Rr(),iP=$t(),aEr=Qt(),sEr=E(),uEr=eP(),oEr=4294967295>>>0,fEr=3221225472>>>0,vEr=0x40000000000000,m1=2147483648>>>0,cEr=1>>>0,lEr=715094163>>>0,pEr=696219795>>>0,gEr=d1(eEr),Ct=[0>>>0,0>>>0];function mEr(r){var e,t,i,n,a,u,o;return r===0||sEr(r)||nEr(r)?r:(t=d1(r)>>>0,e=(t&tEr)>>>0,t&=tP,t<gEr?(u=vEr*r,i=(d1(u)&tP)>>>0,i=(i/3>>>0)+pEr>>>0,u=iP(e|i,0)):(u=0,i=(t/3>>>0)+lEr>>>0,u=iEr(u,e|i)),n=u*u*(u/r),u*=uEr(n),aEr.assign(u,Ct,1,0),Ct[1]&m1?(Ct[0]+=cEr,Ct[1]&=~m1):Ct[1]|=m1,u=iP(Ct[0]&oEr,Ct[1]&fEr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}nP.exports=mEr});var uP=s((r0e,sP)=>{"use strict";var dEr=aP();sP.exports=dEr});var fP=s((e0e,oP)=>{"use strict";function hEr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}oP.exports=hEr});var cP=s((t0e,vP)=>{"use strict";function yEr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}vP.exports=yEr});var gP=s((i0e,pP)=>{"use strict";var qEr=tr(),bEr=fP(),wEr=cP(),lP=1048575,EEr=.3333333333333333;function NEr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=qEr(r),a=r-1,(lP&2+n)<3?a===0?0:a*a*(EEr*a-.5):(u=a/(2+a),o=u*u,n&=lP,c=n-398458|0,f=o*o,l=440401-n|0,t=f*bEr(f),i=o*wEr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}pP.exports=NEr});var yP=s((n0e,hP)=>{"use strict";var mP=tr(),AEr=re(),OEr=ie(),SEr=E(),TEr=Xr(),IEr=U(),_Er=gP(),LEr=0x40000000000000,dP=.4342944818781689,PEr=25082946711645275e-27,REr=.30102999566361177,FEr=3694239077158931e-28,MEr=1048575,BEr=2146435072,kEr=1048576,jEr=1072693248;function CEr(r){var e,t,i,n,a,u,o,v;return SEr(r)||r<0?NaN:r===0?IEr:(t=mP(r),u=0,t<kEr&&(u-=54,r*=LEr,t=mP(r)),t>=BEr?r+r:(u+=(t>>20)-TEr|0,t&=MEr,a=t+614244&1048576|0,r=AEr(r,t|a^jEr),u+=a>>20|0,o=u,n=_Er(r),r-=1,e=OEr(r,0),i=r-e,v=o*FEr+(r+n)*PEr,v+=(i+n)*dP+e*dP,v+o*REr))}hP.exports=CEr});var bP=s((a0e,qP)=>{"use strict";var GEr=yP();qP.exports=GEr});var EP=s((s0e,wP)=>{"use strict";var VEr=E(),UEr=Rr(),HEr=W(),WEr=Q(),DEr=Xi(),zEr=bP(),XEr=c2(),JEr=l2(),xEr=L();function YEr(r){var e,t;return VEr(r)||UEr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=zEr(r),e===-1?t=WEr(t):t=DEr(t),t<=JEr?e*0:t>XEr?xEr:e*HEr(10,t))}wP.exports=YEr});var AP=s((u0e,NP)=>{"use strict";var ZEr=EP();NP.exports=ZEr});var SP=s((o0e,OP)=>{"use strict";function $Er(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}OP.exports=$Er});var IP=s((f0e,TP)=>{"use strict";function QEr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}TP.exports=QEr});var PP=s((v0e,LP)=>{"use strict";var KEr=tr(),rNr=SP(),eNr=IP(),_P=1048575,tNr=.3333333333333333;function iNr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=KEr(r),a=r-1,(_P&2+n)<3?a===0?0:a*a*(tNr*a-.5):(u=a/(2+a),o=u*u,n&=_P,c=n-398458|0,f=o*o,l=440401-n|0,t=f*rNr(f),i=o*eNr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}LP.exports=iNr});var MP=s((c0e,FP)=>{"use strict";var nNr=tr(),aNr=re(),sNr=ie(),uNr=Qt(),oNr=E(),fNr=Jr(),vNr=ea(),cNr=Xr(),lNr=U(),pNr=PP(),gNr=0x40000000000000,RP=1.4426950407214463,mNr=16751713164886512e-26,dNr=2146435072,hNr=1048576,yNr=1072693248,h1=[0,0];function qNr(r){var e,t,i,n,a,u,o;if(oNr(r)||r<0)return NaN;if(uNr.assign(r,h1,1,0),i=h1[0],n=h1[1],o=0,i<hNr){if((i&fNr|n)===0)return lNr;o-=54,r*=gNr,i=nNr(r)}return i>=dNr?r+r:(o+=(i>>20)-cNr|0,i&=vNr,u=i+614244&1048576|0,r=aNr(r,i|u^yNr),o+=u>>20|0,a=pNr(r),r-=1,e=sNr(r,0),t=r-e,(r+a)*mNr+(t+a)*RP+e*RP+o)}FP.exports=qNr});var kP=s((l0e,BP)=>{"use strict";var bNr=MP();BP.exports=bNr});var CP=s((p0e,jP)=>{"use strict";var wNr=E(),ENr=Rr(),NNr=W(),ANr=Q(),ONr=Xi(),SNr=kP(),TNr=oo(),INr=fo(),_Nr=L();function LNr(r){var e,t;return wNr(r)||ENr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=SNr(r),t===INr)?r:(e===-1?t=ANr(t):t=ONr(t),t>TNr?_Nr:e*NNr(2,t))}jP.exports=LNr});var VP=s((g0e,GP)=>{"use strict";var PNr=CP();GP.exports=PNr});var y1=s((m0e,UP)=>{"use strict";var RNr=.9189385332046728;UP.exports=RNr});var HP=s((d0e,FNr)=>{FNr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var WP=s((h0e,MNr)=>{MNr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var DP=s((y0e,BNr)=>{BNr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var XP=s((q0e,zP)=>{"use strict";function kNr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}zP.exports=kNr});var xP=s((b0e,JP)=>{"use strict";function jNr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}JP.exports=jNr});var ZP=s((w0e,YP)=>{"use strict";function CNr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}YP.exports=CNr});var QP=s((E0e,$P)=>{"use strict";function GNr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}$P.exports=GNr});var rR=s((N0e,KP)=>{"use strict";function VNr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}KP.exports=VNr});var tR=s((A0e,eR)=>{"use strict";function UNr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}eR.exports=UNr});var uR=s((O0e,sR)=>{"use strict";var HNr=E(),WNr=Ir(),DNr=Y(),Ka=nr(),zNr=Q(),XNr=ri(),JNr=rn(),iR=Ki(),nR=W(),xNr=P(),YNr=L(),ZNr=U(),aR=He(),$Nr=Bo(),QNr=y1(),KNr=HP(),rAr=WP(),eAr=DP(),tAr=XP(),iAr=xP(),nAr=ZP(),aAr=QP(),sAr=rR(),uAr=tR(),oAr=129,fAr=170,vAr=709,cAr=1.2433929443359375,lAr=.6986598968505859;function q1(r){var e,t,i,n,a,u;if(HNr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(WNr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=oAr)return-eAr[u]/(i+1)}else return(n&1)===0?rAr[n/2]:KNr[(n-3)/2];return DNr(r)<$Nr?-.5-QNr*r:(t=1-r,r<0?zNr(r/2)===r/2?0:(e=r,r=t,t=e,r>fAr?(e=iR(.5*t)*2*q1(r),a=JNr(r),a-=r*xNr(aR),a>vAr?e<0?ZNr:YNr:e*Ka(a)):iR(.5*t)*2*nR(aR,-r)*XNr(r)*q1(r)):r<1?(e=tAr(t),e-=cAr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+iAr(t)):r<=4?(e=lAr+1/-t,e+nAr(r-2)):r<=7?(e=aAr(r-4),1+Ka(e)):r<15?(e=sAr(r-7),1+Ka(e)):r<36?(e=uAr(r-15),1+Ka(e)):1+nR(2,-r))}sR.exports=q1});var fR=s((S0e,oR)=>{"use strict";var pAr=uR();oR.exports=pAr});var cR=s((T0e,vR)=>{"use strict";var H={};H.abs=Y();H.abs2=$a();H.acos=wn();H.acosh=CI();H.acot=HI();H.acovercos=XI();H.acoversin=ZI();H.acsc=r_();H.acsch=f_();H.ahavercos=p_();H.ahaversin=h_();H.asin=jt();H.asinh=s1();H.atan=xa();H.atanh=E_();H.avercos=S_();H.aversin=L_();H.besselj0=f1();H.besselj1=v1();H.bessely0=OL();H.bessely1=HL();H.binet=KL();H.cbrt=uP();H.ceil=Xi();H.ceil10=AP();H.ceil2=VP();H.cos=St();H.sin=Tt();H.sqrt=C();H.zeta=fR();vR.exports=H});var pR=s((I0e,lR)=>{"use strict";var gAr=Nt(),mAr=ir();function dAr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(mAr(r)==="[object Error]")return!0;r=gAr(r)}return!1}lR.exports=dAr});var mR=s((_0e,gR)=>{"use strict";var hAr=pR();gR.exports=hAr});var b1=s((L0e,dR)=>{"use strict";function yAr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}dR.exports=yAr});var yR=s((P0e,hR)=>{"use strict";var qAr=b1(),bAr=qAr();hR.exports=bAr});var wR=s((R0e,bR)=>{"use strict";var wAr=w(),qR=b1(),EAr=yR();wAr(qR,"REGEXP",EAr);bR.exports=qR});var NR=s((F0e,ER)=>{"use strict";var NAr=K().isPrimitive,AAr=wR(),OAr=q();function SAr(r){if(!NAr(r))throw new TypeError(OAr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=AAr().exec(r),r?new RegExp(r[1],r[2]):null}ER.exports=SAr});var OR=s((M0e,AR)=>{"use strict";var TAr=NR();AR.exports=TAr});var TR=s((B0e,SR)=>{"use strict";var IAr=typeof Object.getOwnPropertyNames<"u";SR.exports=IAr});var LR=s((k0e,_R)=>{"use strict";var IR=xt(),_Ar=IR.getOwnPropertyNames;function LAr(r){return _Ar(IR(r))}_R.exports=LAr});var RR=s((j0e,PR)=>{"use strict";var PAr=xt(),RAr=Jt();function FAr(r){return RAr(PAr(r))}PR.exports=FAr});var MR=s((C0e,FR)=>{"use strict";var MAr=TR(),BAr=LR(),kAr=RR(),w1;MAr?w1=BAr:w1=kAr;FR.exports=w1});var kR=s((G0e,BR)=>{"use strict";var jAr=typeof Object.getOwnPropertyDescriptor<"u";BR.exports=jAr});var CR=s((V0e,jR)=>{"use strict";var CAr=Object.getOwnPropertyDescriptor;function GAr(r,e){var t;return r==null?null:(t=CAr(r,e),t===void 0?null:t)}jR.exports=GAr});var VR=s((U0e,GR)=>{"use strict";var VAr=O();function UAr(r,e){return VAr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}GR.exports=UAr});var HR=s((H0e,UR)=>{"use strict";var HAr=kR(),WAr=CR(),DAr=VR(),E1;HAr?E1=WAr:E1=DAr;UR.exports=E1});var DR=s((W0e,WR)=>{"use strict";var zAr=typeof Buffer=="function"?Buffer:null;WR.exports=zAr});var XR=s((D0e,zR)=>{"use strict";var XAr=Et(),r0=DR();function JAr(){var r,e;if(typeof r0!="function")return!1;try{typeof r0.from=="function"?e=r0.from([1,2,3,4]):e=new r0([1,2,3,4]),r=XAr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}zR.exports=JAr});var xR=s((z0e,JR)=>{"use strict";var xAr=XR();JR.exports=xAr});var $R=s(e0=>{"use strict";e0.byteLength=ZAr;e0.toByteArray=QAr;e0.fromByteArray=eOr;var Yr=[],Br=[],YAr=typeof Uint8Array<"u"?Uint8Array:Array,N1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Gt=0,YR=N1.length;Gt<YR;++Gt)Yr[Gt]=N1[Gt],Br[N1.charCodeAt(Gt)]=Gt;var Gt,YR;Br["-".charCodeAt(0)]=62;Br["_".charCodeAt(0)]=63;function ZR(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function ZAr(r){var e=ZR(r),t=e[0],i=e[1];return(t+i)*3/4-i}function $Ar(r,e,t){return(e+t)*3/4-t}function QAr(r){var e,t=ZR(r),i=t[0],n=t[1],a=new YAr($Ar(r,i,n)),u=0,o=n>0?i-4:i,v;for(v=0;v<o;v+=4)e=Br[r.charCodeAt(v)]<<18|Br[r.charCodeAt(v+1)]<<12|Br[r.charCodeAt(v+2)]<<6|Br[r.charCodeAt(v+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=Br[r.charCodeAt(v)]<<2|Br[r.charCodeAt(v+1)]>>4,a[u++]=e&255),n===1&&(e=Br[r.charCodeAt(v)]<<10|Br[r.charCodeAt(v+1)]<<4|Br[r.charCodeAt(v+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function KAr(r){return Yr[r>>18&63]+Yr[r>>12&63]+Yr[r>>6&63]+Yr[r&63]}function rOr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(KAr(i));return n.join("")}function eOr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(rOr(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(Yr[e>>2]+Yr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(Yr[e>>10]+Yr[e>>4&63]+Yr[e<<2&63]+"=")),n.join("")}});var QR=s(A1=>{A1.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,v=(1<<o)-1,f=v>>1,c=-7,l=t?n-1:0,p=t?-1:1,m=r[e+l];for(l+=p,a=m&(1<<-c)-1,m>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-f;else{if(a===v)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-f}return(m?-1:1)*u*Math.pow(2,a-i)};A1.write=function(r,e,t,i,n,a){var u,o,v,f=a*8-n-1,c=(1<<f)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-u))<1&&(u--,v*=2),u+l>=1?e+=p/v:e+=p*Math.pow(2,1-l),e*v>=2&&(u++,v/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*v-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+m]=o&255,m+=h,o/=256,n-=8);for(u=u<<n|o,f+=n;f>0;r[t+m]=u&255,m+=h,u/=256,f-=8);r[t+m-h]|=d*128}});var mF=s(yi=>{"use strict";var O1=$R(),di=QR(),KR=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;yi.Buffer=b;yi.SlowBuffer=uOr;yi.INSPECT_MAX_BYTES=50;var t0=2147483647;yi.kMaxLength=t0;b.TYPED_ARRAY_SUPPORT=tOr();!b.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function tOr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(b.prototype,"parent",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.buffer}});Object.defineProperty(b.prototype,"offset",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.byteOffset}});function ue(r){if(r>t0)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,b.prototype),e}function b(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return _1(r)}return iF(r,e,t)}b.poolSize=8192;function iF(r,e,t){if(typeof r=="string")return nOr(r,e);if(ArrayBuffer.isView(r))return aOr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Zr(r,ArrayBuffer)||r&&Zr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Zr(r,SharedArrayBuffer)||r&&Zr(r.buffer,SharedArrayBuffer)))return T1(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return b.from(i,e,t);let n=sOr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return b.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}b.from=function(r,e,t){return iF(r,e,t)};Object.setPrototypeOf(b.prototype,Uint8Array.prototype);Object.setPrototypeOf(b,Uint8Array);function nF(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function iOr(r,e,t){return nF(r),r<=0?ue(r):e!==void 0?typeof t=="string"?ue(r).fill(e,t):ue(r).fill(e):ue(r)}b.alloc=function(r,e,t){return iOr(r,e,t)};function _1(r){return nF(r),ue(r<0?0:L1(r)|0)}b.allocUnsafe=function(r){return _1(r)};b.allocUnsafeSlow=function(r){return _1(r)};function nOr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!b.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=aF(r,e)|0,i=ue(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function S1(r){let e=r.length<0?0:L1(r.length)|0,t=ue(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function aOr(r){if(Zr(r,Uint8Array)){let e=new Uint8Array(r);return T1(e.buffer,e.byteOffset,e.byteLength)}return S1(r)}function T1(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,b.prototype),i}function sOr(r){if(b.isBuffer(r)){let e=L1(r.length)|0,t=ue(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||R1(r.length)?ue(0):S1(r);if(r.type==="Buffer"&&Array.isArray(r.data))return S1(r.data)}function L1(r){if(r>=t0)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+t0.toString(16)+" bytes");return r|0}function uOr(r){return+r!=r&&(r=0),b.alloc(+r)}b.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==b.prototype};b.compare=function(e,t){if(Zr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),Zr(t,Uint8Array)&&(t=b.from(t,t.offset,t.byteLength)),!b.isBuffer(e)||!b.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};b.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};b.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return b.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=b.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(Zr(u,Uint8Array))a+u.length>n.length?(b.isBuffer(u)||(u=b.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(b.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function aF(r,e){if(b.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Zr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return I1(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return gF(r).length;default:if(n)return i?-1:I1(r).length;e=(""+e).toLowerCase(),n=!0}}b.byteLength=aF;function oOr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return yOr(this,e,t);case"utf8":case"utf-8":return uF(this,e,t);case"ascii":return dOr(this,e,t);case"latin1":case"binary":return hOr(this,e,t);case"base64":return gOr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return qOr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}b.prototype._isBuffer=!0;function Vt(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}b.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Vt(this,t,t+1);return this};b.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Vt(this,t,t+3),Vt(this,t+1,t+2);return this};b.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Vt(this,t,t+7),Vt(this,t+1,t+6),Vt(this,t+2,t+5),Vt(this,t+3,t+4);return this};b.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?uF(this,0,e):oOr.apply(this,arguments)};b.prototype.toLocaleString=b.prototype.toString;b.prototype.equals=function(e){if(!b.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:b.compare(this,e)===0};b.prototype.inspect=function(){let e="",t=yi.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};KR&&(b.prototype[KR]=b.prototype.inspect);b.prototype.compare=function(e,t,i,n,a){if(Zr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),!b.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,v=Math.min(u,o),f=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<v;++l)if(f[l]!==c[l]){u=f[l],o=c[l];break}return u<o?-1:o<u?1:0};function sF(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,R1(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=b.from(e,i)),b.isBuffer(e))return e.length===0?-1:rF(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):rF(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function rF(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function v(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let f;if(n){let c=-1;for(f=t;f<u;f++)if(v(r,f)===v(e,c===-1?0:f-c)){if(c===-1&&(c=f),f-c+1===o)return c*a}else c!==-1&&(f-=f-c),c=-1}else for(t+o>u&&(t=u-o),f=t;f>=0;f--){let c=!0;for(let l=0;l<o;l++)if(v(r,f+l)!==v(e,l)){c=!1;break}if(c)return f}return-1}b.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};b.prototype.indexOf=function(e,t,i){return sF(this,e,t,i,!0)};b.prototype.lastIndexOf=function(e,t,i){return sF(this,e,t,i,!1)};function fOr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(R1(o))return u;r[t+u]=o}return u}function vOr(r,e,t,i){return i0(I1(e,r.length-t),r,t,i)}function cOr(r,e,t,i){return i0(NOr(e),r,t,i)}function lOr(r,e,t,i){return i0(gF(e),r,t,i)}function pOr(r,e,t,i){return i0(AOr(e,r.length-t),r,t,i)}b.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return fOr(this,e,t,i);case"utf8":case"utf-8":return vOr(this,e,t,i);case"ascii":case"latin1":case"binary":return cOr(this,e,t,i);case"base64":return lOr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return pOr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};b.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function gOr(r,e,t){return e===0&&t===r.length?O1.fromByteArray(r):O1.fromByteArray(r.slice(e,t))}function uF(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let v,f,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:v=r[n+1],(v&192)===128&&(l=(a&31)<<6|v&63,l>127&&(u=l));break;case 3:v=r[n+1],f=r[n+2],(v&192)===128&&(f&192)===128&&(l=(a&15)<<12|(v&63)<<6|f&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:v=r[n+1],f=r[n+2],c=r[n+3],(v&192)===128&&(f&192)===128&&(c&192)===128&&(l=(a&15)<<18|(v&63)<<12|(f&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return mOr(i)}var eF=4096;function mOr(r){let e=r.length;if(e<=eF)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=eF));return t}function dOr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function hOr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function yOr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=OOr[r[a]];return n}function qOr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}b.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,b.prototype),n};function ur(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}b.prototype.readUintLE=b.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};b.prototype.readUintBE=b.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};b.prototype.readUint8=b.prototype.readUInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]};b.prototype.readUint16LE=b.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]|this[e+1]<<8};b.prototype.readUint16BE=b.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]<<8|this[e+1]};b.prototype.readUint32LE=b.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};b.prototype.readUint32BE=b.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};b.prototype.readBigUInt64LE=$e(function(e){e=e>>>0,hi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Tn(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});b.prototype.readBigUInt64BE=$e(function(e){e=e>>>0,hi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Tn(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});b.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};b.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};b.prototype.readInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};b.prototype.readInt16LE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};b.prototype.readInt16BE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};b.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};b.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};b.prototype.readBigInt64LE=$e(function(e){e=e>>>0,hi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Tn(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});b.prototype.readBigInt64BE=$e(function(e){e=e>>>0,hi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Tn(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});b.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),di.read(this,e,!0,23,4)};b.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),di.read(this,e,!1,23,4)};b.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),di.read(this,e,!0,52,8)};b.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),di.read(this,e,!1,52,8)};function qr(r,e,t,i,n,a){if(!b.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}b.prototype.writeUintLE=b.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};b.prototype.writeUintBE=b.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};b.prototype.writeUint8=b.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,255,0),this[t]=e&255,t+1};b.prototype.writeUint16LE=b.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeUint16BE=b.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeUint32LE=b.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};b.prototype.writeUint32BE=b.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function oF(r,e,t,i,n){pF(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function fF(r,e,t,i,n){pF(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}b.prototype.writeBigUInt64LE=$e(function(e,t=0){return oF(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeBigUInt64BE=$e(function(e,t=0){return fF(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);qr(this,e,t,i,v-1,-v)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);qr(this,e,t,i,v-1,-v)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};b.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};b.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};b.prototype.writeBigInt64LE=$e(function(e,t=0){return oF(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});b.prototype.writeBigInt64BE=$e(function(e,t=0){return fF(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function vF(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function cF(r,e,t,i,n){return e=+e,t=t>>>0,n||vF(r,e,t,4,34028234663852886e22,-34028234663852886e22),di.write(r,e,t,i,23,4),t+4}b.prototype.writeFloatLE=function(e,t,i){return cF(this,e,t,!0,i)};b.prototype.writeFloatBE=function(e,t,i){return cF(this,e,t,!1,i)};function lF(r,e,t,i,n){return e=+e,t=t>>>0,n||vF(r,e,t,8,17976931348623157e292,-17976931348623157e292),di.write(r,e,t,i,52,8),t+8}b.prototype.writeDoubleLE=function(e,t,i){return lF(this,e,t,!0,i)};b.prototype.writeDoubleBE=function(e,t,i){return lF(this,e,t,!1,i)};b.prototype.copy=function(e,t,i,n){if(!b.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};b.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!b.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=b.isBuffer(e)?e:b.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var mi={};function P1(r,e,t){mi[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}P1("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);P1("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);P1("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=tF(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=tF(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function tF(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function bOr(r,e,t){hi(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&Tn(e,r.length-(t+1))}function pF(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new mi.ERR_OUT_OF_RANGE("value",o,r)}bOr(i,n,a)}function hi(r,e){if(typeof r!="number")throw new mi.ERR_INVALID_ARG_TYPE(e,"number",r)}function Tn(r,e,t){throw Math.floor(r)!==r?(hi(r,t),new mi.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new mi.ERR_BUFFER_OUT_OF_BOUNDS:new mi.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var wOr=/[^+/0-9A-Za-z-_]/g;function EOr(r){if(r=r.split("=")[0],r=r.trim().replace(wOr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function I1(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function NOr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function AOr(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function gF(r){return O1.toByteArray(EOr(r))}function i0(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function Zr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function R1(r){return r!==r}var OOr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function $e(r){return typeof BigInt>"u"?SOr:r}function SOr(){throw new Error("BigInt not supported")}});var hF=s((Z0e,dF)=>{"use strict";var TOr=mF().Buffer;dF.exports=TOr});var qF=s(($0e,yF)=>{"use strict";function IOr(){throw new Error("not implemented")}yF.exports=IOr});var n0=s((Q0e,bF)=>{"use strict";var _Or=xR(),LOr=hF(),POr=qF(),F1;_Or()?F1=LOr:F1=POr;bF.exports=F1});var EF=s((K0e,wF)=>{"use strict";var ROr=_(),FOr=n0(),MOr=ROr(FOr.from);wF.exports=MOr});var AF=s((rse,NF)=>{"use strict";var BOr=Et(),kOr=q(),jOr=n0();function COr(r){if(!BOr(r))throw new TypeError(kOr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return jOr.from(r)}NF.exports=COr});var SF=s((ese,OF)=>{"use strict";var GOr=Et(),VOr=q(),UOr=n0();function HOr(r){if(!GOr(r))throw new TypeError(VOr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new UOr(r)}OF.exports=HOr});var IF=s((tse,TF)=>{"use strict";var WOr=EF(),DOr=AF(),zOr=SF(),M1;WOr?M1=DOr:M1=zOr;TF.exports=M1});var PF=s((ise,LF)=>{"use strict";var XOr=vn(),JOr=Yt(),xOr=fn(),YOr=on(),ZOr=Zt(),$Or=Pt(),QOr=cr(),KOr=se(),rSr=dr(),_F;function eSr(r){return new XOr(r)}function tSr(r){return new JOr(r)}function iSr(r){return new xOr(r)}function nSr(r){return new YOr(r)}function aSr(r){return new ZOr(r)}function sSr(r){return new $Or(r)}function uSr(r){return new QOr(r)}function oSr(r){return new KOr(r)}function fSr(r){return new rSr(r)}function vSr(){var r={int8array:eSr,uint8array:tSr,uint8clampedarray:iSr,int16array:nSr,uint16array:aSr,int32array:sSr,uint32array:uSr,float32array:oSr,float64array:fSr};return r}_F=vSr();LF.exports=_F});var kF=s((nse,BF)=>{"use strict";var a0=O(),B1=mr(),RF=Et(),cSr=mR(),FF=xn(),lSr=OR(),pSr=Jn(),MF=Jt(),gSr=MR(),In=HR(),mSr=Nt(),_n=je(),dSr=IF(),hSr=PF();function ySr(r){var e,t,i,n,a,u,o,v;for(e=[],n=[],o=Object.create(mSr(r)),e.push(r),n.push(o),t=gSr(r),v=0;v<t.length;v++)i=t[v],a=In(r,i),a0(a,"value")&&(u=B1(r[i])?[]:{},a.value=Ut(r[i],u,e,n,-1)),_n(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function qSr(r){var e=[],t=[],i,n,a,u,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=MF(r),v=0;v<i.length;v++)u=i[v],n=In(r,u),a0(n,"value")&&(a=B1(r[u])?[]:{},n.value=Ut(r[u],a,e,t,-1)),_n(o,u,n);return o}function Ut(r,e,t,i,n){var a,u,o,v,f,c,l,p,m,h;if(n-=1,typeof r!="object"||r===null)return r;if(RF(r))return dSr(r);if(cSr(r))return qSr(r);if(o=FF(r),o==="date")return new Date(+r);if(o==="regexp")return lSr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=hSr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?ySr(r):{};if(u=MF(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=FF(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||RF(p)){a==="object"?(v=In(r,c),a0(v,"value")&&(v.value=Ut(p)),_n(e,c,v)):e[c]=Ut(p);continue}if(m=pSr(t,p),m!==-1){e[c]=i[m];continue}l=B1(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=Ut(p,l,t,i,n):(v=In(r,c),a0(v,"value")&&(v.value=Ut(p,l,t,i,n)),_n(e,c,v))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],v=In(r,c),_n(e,c,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}BF.exports=Ut});var CF=s((ase,jF)=>{"use strict";var bSr=mr(),wSr=Xe().isPrimitive,ESr=q(),NSr=L(),ASr=kF();function OSr(r,e){var t;if(arguments.length>1){if(!wSr(e))throw new TypeError(ESr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=NSr;return t=bSr(r)?new Array(r.length):{},ASr(r,t,[r],[t],e)}jF.exports=OSr});var Ln=s((sse,GF)=>{"use strict";var SSr=CF();GF.exports=SSr});var VF=s((use,TSr)=>{TSr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var HF=s((ose,UF)=>{"use strict";var ISr=Ln(),_Sr=VF();function LSr(){return ISr(_Sr)}UF.exports=LSr});var WF=s((fse,PSr)=>{PSr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var zF=s((vse,DF)=>{"use strict";var RSr=Ln(),FSr=WF();function MSr(){return RSr(FSr)}DF.exports=MSr});var XF=s((cse,BSr)=>{BSr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var xF=s((lse,JF)=>{"use strict";var kSr=Ln(),jSr=XF();function CSr(){return kSr(jSr)}JF.exports=CSr});var YF=s((pse,GSr)=>{GSr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var $F=s((gse,ZF)=>{"use strict";var VSr=YF();function USr(){return VSr.slice()}ZF.exports=USr});var QF=s((mse,HSr)=>{HSr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var rM=s((dse,KF)=>{"use strict";var WSr=Ln(),DSr=QF();function zSr(){return WSr(DSr)}KF.exports=zSr});var tM=s((hse,eM)=>{"use strict";var qi={};qi.AFINN_111=HF();qi.AFINN_96=zF();qi.ANSCOMBES_QUARTET=xF();qi.HERNDON_VENUS_SEMIDIAMETERS=$F();qi.NIGHTINGALES_ROSE=rM();eM.exports=qi});var nM=s((yse,iM)=>{"use strict";var XSr=It(),JSr=C(),k1=E();function xSr(r,e,t){var i,n;return k1(r)||k1(e)||k1(t)||t<0?NaN:t===0?r<e?0:1:(i=t*JSr(2),n=r-e,.5*XSr(-n/i))}iM.exports=xSr});var sM=s((qse,aM)=>{"use strict";var YSr=S(),ZSr=Ta().factory,j1=E(),$Sr=C(),QSr=It();function KSr(r,e){var t;if(j1(r)||j1(e)||e<0)return YSr(NaN);if(e===0)return ZSr(r);return t=e*$Sr(2),i;function i(n){var a;return j1(n)?NaN:(a=n-r,.5*QSr(-a/t))}}aM.exports=KSr});var fM=s((bse,oM)=>{"use strict";var rTr=w(),uM=nM(),eTr=sM();rTr(uM,"factory",eTr);oM.exports=uM});var lM=s((wse,cM)=>{"use strict";var vM=E(),tTr=P(),iTr=He(),nTr=Xo();function aTr(r,e){return vM(r)||vM(e)||e<=0?NaN:.5*tTr(iTr*nTr*e*e)}cM.exports=aTr});var gM=s((Ese,pM)=>{"use strict";var sTr=lM();pM.exports=sTr});var hM=s((Nse,dM)=>{"use strict";var mM=E();function uTr(r,e){return mM(r)||mM(e)||e<=0?NaN:0}dM.exports=uTr});var qM=s((Ase,yM)=>{"use strict";var oTr=hM();yM.exports=oTr});var wM=s((Ose,bM)=>{"use strict";var fTr=Q(),vTr=[cTr,lTr,pTr,gTr,mTr,dTr,hTr,yTr,qTr,bTr,wTr,ETr,NTr,ATr,OTr,STr,TTr,ITr,_Tr,LTr,PTr,RTr,FTr,MTr,BTr,kTr,jTr,CTr,GTr,VTr,UTr,HTr,WTr,DTr,zTr,XTr,JTr,xTr,YTr,ZTr,$Tr,QTr,KTr,rIr,eIr,tIr,iIr,nIr,aIr,sIr,uIr,oIr,fIr,vIr,cIr,lIr,pIr,gIr,mIr,dIr,hIr,yIr,qIr,bIr,wIr,EIr,NIr,AIr,OIr,SIr,TIr,IIr,_Ir,LIr,PIr,RIr,FIr,MIr,BIr,kIr,jIr,CIr,GIr,VIr,UIr,HIr,WIr,DIr,zIr,XIr,JIr,xIr,YIr,ZIr,$Ir,QIr,KIr,r_r,e_r,t_r,i_r];function cTr(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function lTr(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function pTr(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function gTr(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function mTr(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function dTr(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function hTr(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function yTr(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function qTr(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function bTr(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function wTr(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function ETr(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function NTr(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function ATr(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function OTr(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function STr(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function TTr(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function ITr(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function _Tr(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function LTr(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function PTr(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function RTr(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function FTr(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function MTr(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function BTr(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function kTr(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function jTr(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function CTr(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function GTr(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function VTr(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function UTr(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function HTr(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function WTr(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function DTr(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function zTr(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function XTr(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function JTr(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function xTr(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function YTr(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function ZTr(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function $Tr(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function QTr(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function KTr(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function rIr(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function eIr(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function tIr(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function iIr(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function nIr(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function aIr(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function sIr(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function uIr(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function oIr(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function fIr(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function vIr(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function cIr(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function lIr(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function pIr(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function gIr(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function mIr(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function dIr(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function hIr(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function yIr(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function qIr(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function bIr(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function wIr(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function EIr(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function NIr(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function AIr(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function OIr(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function SIr(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function TIr(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function IIr(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function _Ir(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function LIr(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function PIr(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function RIr(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function FIr(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function MIr(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function BIr(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function kIr(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function jIr(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function CIr(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function GIr(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function VIr(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function UIr(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function HIr(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function WIr(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function DIr(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function zIr(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function XIr(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function JIr(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function xIr(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function YIr(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function ZIr(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function $Ir(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function QIr(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function KIr(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function r_r(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function e_r(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function t_r(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function i_r(){return 1}function n_r(r){var e=fTr(r),t=vTr[e];return t(2*r-(2*e+1))}bM.exports=n_r});var SM=s((Sse,OM)=>{"use strict";var EM=nr(),a_r=L(),NM=wM(),AM=.5641895835477563;function s_r(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?AM/r:(e=r*r,AM*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):NM(400/(4+r)):r<-26.7?a_r:(e=r*r,r<-6.1?2*EM(e):2*EM(e)-NM(400/(4-r)))}OM.exports=s_r});var C1=s((Tse,TM)=>{"use strict";var u_r=SM();TM.exports=u_r});var LM=s((Ise,_M)=>{"use strict";var o_r=P(),f_r=We(),v_r=$a(),c_r=It(),l_r=C1(),p_r=U(),G1=E(),IM=.7071067811865475;function g_r(r,e,t){var i;return G1(r)||G1(e)||G1(t)||t<0?NaN:t===0?r<e?p_r:0:(i=(r-e)/t,i<-1?o_r(l_r(-i*IM)/2)-v_r(i)/2:f_r(-c_r(i*IM)/2))}_M.exports=g_r});var FM=s((_se,RM)=>{"use strict";var PM=E(),m_r=U();function d_r(r,e){return PM(r)||PM(e)?NaN:r<e?m_r:0}RM.exports=d_r});var kM=s((Lse,BM)=>{"use strict";var h_r=S(),MM=E(),y_r=U();function q_r(r){if(MM(r))return h_r(NaN);return e;function e(t){return MM(t)?NaN:t<r?y_r:0}}BM.exports=q_r});var GM=s((Pse,CM)=>{"use strict";var b_r=w(),jM=FM(),w_r=kM();b_r(jM,"factory",w_r);CM.exports=jM});var WM=s((Rse,HM)=>{"use strict";var E_r=S(),N_r=GM().factory,VM=E(),A_r=We(),O_r=$a(),S_r=It(),T_r=C1(),I_r=P(),UM=.7071067811865475;function __r(r,e){if(VM(r)||VM(e)||e<0)return E_r(NaN);if(e===0)return N_r(r);return t;function t(i){var n=(i-r)/e;return n<-1?I_r(T_r(-n*UM)/2)-O_r(n)/2:A_r(-S_r(n*UM)/2)}}HM.exports=__r});var XM=s((Fse,zM)=>{"use strict";var L_r=w(),DM=LM(),P_r=WM();L_r(DM,"factory",P_r);zM.exports=DM});var V1=s((Mse,JM)=>{"use strict";var R_r=1.8378770664093456;JM.exports=R_r});var ZM=s((Bse,YM)=>{"use strict";var F_r=P(),xM=W(),M_r=V1(),B_r=U(),k_r=L(),U1=E();function j_r(r,e,t){var i,n,a;return U1(r)||U1(e)||U1(t)||t<0?NaN:t===0?r===e?k_r:B_r:(i=xM(t,2),n=-.5*(2*F_r(t)+M_r),a=-1/(2*i),n+a*xM(r-e,2))}YM.exports=j_r});var KM=s((kse,QM)=>{"use strict";var C_r=L(),G_r=U(),$M=E();function V_r(r,e){return $M(r)||$M(e)?NaN:r===e?C_r:G_r}QM.exports=V_r});var tB=s((jse,eB)=>{"use strict";var U_r=S(),H_r=L(),W_r=U(),rB=E();function D_r(r){if(rB(r))return U_r(NaN);return e;function e(t){return rB(t)?NaN:t===r?H_r:W_r}}eB.exports=D_r});var aB=s((Cse,nB)=>{"use strict";var z_r=w(),iB=KM(),X_r=tB();z_r(iB,"factory",X_r);nB.exports=iB});var fB=s((Gse,oB)=>{"use strict";var J_r=S(),x_r=aB().factory,Y_r=V1(),sB=E(),uB=W(),Z_r=P();function $_r(r,e){var t,i,n;if(sB(r)||sB(e)||e<0)return J_r(NaN);if(e===0)return x_r(r);return t=uB(e,2),i=-.5*(2*Z_r(e)+Y_r),n=-1/(2*t),a;function a(u){return i+n*uB(u-r,2)}}oB.exports=$_r});var lB=s((Vse,cB)=>{"use strict";var Q_r=w(),vB=ZM(),K_r=fB();Q_r(vB,"factory",K_r);cB.exports=vB});var mB=s((Use,gB)=>{"use strict";var pB=E();function rLr(r,e){return pB(r)||pB(e)||e<=0?NaN:r}gB.exports=rLr});var hB=s((Hse,dB)=>{"use strict";var eLr=mB();dB.exports=eLr});var bB=s((Wse,qB)=>{"use strict";var yB=E();function tLr(r,e){return yB(r)||yB(e)||e<=0?NaN:r}qB.exports=tLr});var EB=s((Dse,wB)=>{"use strict";var iLr=bB();wB.exports=iLr});var AB=s((zse,NB)=>{"use strict";var H1=E(),nLr=nr(),aLr=W();function sLr(r,e,t){return H1(r)||H1(e)||H1(t)||t<=0?NaN:nLr(e*r+.5*aLr(t*r,2))}NB.exports=sLr});var SB=s((Xse,OB)=>{"use strict";var uLr=S(),W1=E(),oLr=nr(),fLr=W();function vLr(r,e){if(W1(r)||W1(e)||e<=0)return uLr(NaN);return t;function t(i){return W1(i)?NaN:oLr(r*i+.5*fLr(e*i,2))}}OB.exports=vLr});var _B=s((Jse,IB)=>{"use strict";var cLr=w(),TB=AB(),lLr=SB();cLr(TB,"factory",lLr);IB.exports=TB});var RB=s((xse,PB)=>{"use strict";var LB=E();function pLr(r,e){return LB(r)||LB(e)||e<=0?NaN:r}PB.exports=pLr});var MB=s((Yse,FB)=>{"use strict";var gLr=RB();FB.exports=gLr});var jB=s((Zse,kB)=>{"use strict";var mLr=nr(),BB=W(),dLr=C(),hLr=He(),yLr=L(),D1=E();function qLr(r,e,t){var i,n,a;return D1(r)||D1(e)||D1(t)||t<0?NaN:t===0?r===e?yLr:0:(i=BB(t,2),n=1/dLr(i*hLr),a=-1/(2*i),n*mLr(a*BB(r-e,2)))}kB.exports=qLr});var VB=s(($se,GB)=>{"use strict";var bLr=L(),CB=E();function wLr(r,e){return CB(r)||CB(e)?NaN:r===e?bLr:0}GB.exports=wLr});var WB=s((Qse,HB)=>{"use strict";var ELr=S(),NLr=L(),UB=E();function ALr(r){if(UB(r))return ELr(NaN);return e;function e(t){return UB(t)?NaN:t===r?NLr:0}}HB.exports=ALr});var XB=s((Kse,zB)=>{"use strict";var OLr=w(),DB=VB(),SLr=WB();OLr(DB,"factory",SLr);zB.exports=DB});var YB=s((rue,xB)=>{"use strict";var TLr=S(),ILr=XB().factory,z1=E(),_Lr=C(),LLr=nr(),JB=W(),PLr=He();function RLr(r,e){var t,i,n;if(z1(r)||z1(e)||e<0)return TLr(NaN);if(e===0)return ILr(r);return t=JB(e,2),i=1/_Lr(t*PLr),n=-1/(2*t),a;function a(u){return z1(u)?NaN:i*LLr(n*JB(u-r,2))}}xB.exports=RLr});var QB=s((eue,$B)=>{"use strict";var FLr=w(),ZB=jB(),MLr=YB();FLr(ZB,"factory",MLr);$B.exports=ZB});var rk=s((tue,KB)=>{"use strict";function BLr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}KB.exports=BLr});var tk=s((iue,ek)=>{"use strict";function kLr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}ek.exports=kLr});var nk=s((nue,ik)=>{"use strict";function jLr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}ik.exports=jLr});var sk=s((aue,ak)=>{"use strict";function CLr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}ak.exports=CLr});var ok=s((sue,uk)=>{"use strict";function GLr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}uk.exports=GLr});var lk=s((uue,ck)=>{"use strict";var VLr=E(),fk=C(),vk=P(),ULr=L(),HLr=U(),WLr=rk(),DLr=tk(),zLr=nk(),XLr=sk(),JLr=ok(),xLr=.08913147449493408,YLr=2.249481201171875,ZLr=.807220458984375,$Lr=.9399557113647461,QLr=.9836282730102539;function KLr(r){var e,t,i,n,a,u;return VLr(r)?NaN:r===1?ULr:r===-1?HLr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=WLr(t),e*(a*xLr+a*u)):n>=.25?(a=fk(-2*vk(n)),n-=.25,u=DLr(n),e*(a/(YLr+u))):(n=fk(-vk(n)),n<3?(i=n-1.125,u=zLr(i),e*(ZLr*n+u*n)):n<6?(i=n-3,u=XLr(i),e*($Lr*n+u*n)):(i=n-6,u=JLr(i),e*(QLr*n+u*n))))}ck.exports=KLr});var X1=s((oue,pk)=>{"use strict";var rPr=lk();pk.exports=rPr});var mk=s((fue,gk)=>{"use strict";var ePr=X1(),J1=E(),tPr=C();function iPr(r,e,t){var i,n;return J1(e)||J1(t)||J1(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*tPr(2),i+n*ePr(2*r-1))}gk.exports=iPr});var hk=s((vue,dk)=>{"use strict";var nPr=E();function aPr(r,e){return nPr(r)||r<0||r>1?NaN:e}dk.exports=aPr});var bk=s((cue,qk)=>{"use strict";var sPr=S(),yk=E();function uPr(r){if(yk(r))return sPr(NaN);return e;function e(t){return yk(t)||t<0||t>1?NaN:r}}qk.exports=uPr});var x1=s((lue,Ek)=>{"use strict";var oPr=w(),wk=hk(),fPr=bk();oPr(wk,"factory",fPr);Ek.exports=wk});var Ak=s((pue,Nk)=>{"use strict";var vPr=S(),cPr=x1().factory,lPr=X1(),Y1=E(),pPr=C();function gPr(r,e){var t,i;if(Y1(r)||Y1(e)||e<0)return vPr(NaN);return e===0&&cPr(r),t=r,i=e*pPr(2),n;function n(a){return Y1(a)||a<0||a>1?NaN:t+i*lPr(2*a-1)}}Nk.exports=gPr});var Z1=s((gue,Sk)=>{"use strict";var mPr=w(),Ok=mk(),dPr=Ak();mPr(Ok,"factory",dPr);Sk.exports=Ok});var _k=s((mue,Ik)=>{"use strict";var Tk=E();function hPr(r,e){return Tk(r)||Tk(e)||e<=0?NaN:0}Ik.exports=hPr});var Pk=s((due,Lk)=>{"use strict";var yPr=_k();Lk.exports=yPr});var Mk=s((hue,Fk)=>{"use strict";var Rk=E();function qPr(r,e){return Rk(r)||Rk(e)||e<=0?NaN:e}Fk.exports=qPr});var kk=s((yue,Bk)=>{"use strict";var bPr=Mk();Bk.exports=bPr});var Gk=s((que,Ck)=>{"use strict";var jk=E();function wPr(r,e){return jk(r)||jk(e)||e<=0?NaN:e*e}Ck.exports=wPr});var Uk=s((bue,Vk)=>{"use strict";var EPr=Gk();Vk.exports=EPr});var Wk=s((wue,Hk)=>{"use strict";var lr={};lr.normal={};lr.normal.cdf=fM();lr.normal.entropy=gM();lr.normal.kurtosis=qM();lr.normal.logcdf=XM();lr.normal.logpdf=lB();lr.normal.mean=hB();lr.normal.median=EB();lr.normal.mgf=_B();lr.normal.mode=MB();lr.normal.pdf=QB();lr.normal.quantile=Z1();lr.normal.skewness=Pk();lr.normal.stdev=kk();lr.normal.variance=Uk();Hk.exports=lr});var zk=s((Eue,Dk)=>{"use strict";function NPr(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}Dk.exports=NPr});var s0=s((Nue,Xk)=>{"use strict";var APr=zk();Xk.exports=APr});var xk=s((Aue,Jk)=>{"use strict";function OPr(r){return r.toLowerCase()}Jk.exports=OPr});var bi=s((Oue,Yk)=>{"use strict";var SPr=xk();Yk.exports=SPr});var $k=s((Sue,Zk)=>{"use strict";function TPr(r,e,t){return r.replace(e,t)}Zk.exports=TPr});var Ht=s((Tue,Qk)=>{"use strict";var IPr=$k();Qk.exports=IPr});var rj=s((Iue,Kk)=>{"use strict";var _Pr=typeof String.prototype.trim<"u";Kk.exports=_Pr});var $1=s((_ue,ej)=>{"use strict";var LPr=String.prototype.trim;ej.exports=LPr});var aj=s((Lue,nj)=>{"use strict";var tj=$1(),PPr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,ij="\u180E";function RPr(){return tj.call(PPr)===""&&tj.call(ij)===ij}nj.exports=RPr});var uj=s((Pue,sj)=>{"use strict";var FPr=Ht(),MPr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function BPr(r){return FPr(r,MPr,"$1")}sj.exports=BPr});var fj=s((Rue,oj)=>{"use strict";var kPr=$1();function jPr(r){return kPr.call(r)}oj.exports=jPr});var wi=s((Fue,vj)=>{"use strict";var CPr=rj(),GPr=aj(),VPr=uj(),UPr=fj(),Q1;CPr&&GPr()?Q1=UPr:Q1=VPr;vj.exports=Q1});var lj=s((Mue,cj)=>{"use strict";var HPr=s0(),WPr=bi(),u0=Ht(),DPr=wi(),zPr=/\s+/g,XPr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,JPr=/(?:\s|^)([^\s]+)(?=\s|$)/g,xPr=/([a-z0-9])([A-Z])/g;function YPr(r,e,t){return e=WPr(e),t===0?e:HPr(e)}function ZPr(r){return r=u0(r,XPr," "),r=u0(r,zPr," "),r=u0(r,xPr,"$1 $2"),r=DPr(r),u0(r,JPr,YPr)}cj.exports=ZPr});var gj=s((Bue,pj)=>{"use strict";var $Pr=lj();pj.exports=$Pr});var dj=s((kue,mj)=>{"use strict";var QPr=K().isPrimitive,KPr=q(),rRr=gj();function eRr(r){if(!QPr(r))throw new TypeError(KPr("invalid argument. First argument must be a string. Value: `%s`.",r));return rRr(r)}mj.exports=eRr});var yj=s((jue,hj)=>{"use strict";var tRr=dj();hj.exports=tRr});var bj=s((Cue,qj)=>{"use strict";var iRr=K().isPrimitive,nRr=q(),aRr=s0();function sRr(r){if(!iRr(r))throw new TypeError(nRr("invalid argument. First argument must be a string. Value: `%s`.",r));return aRr(r)}qj.exports=sRr});var Ej=s((Gue,wj)=>{"use strict";var uRr=bj();wj.exports=uRr});var Aj=s((Vue,Nj)=>{"use strict";function oRr(r){return r.toUpperCase()}Nj.exports=oRr});var Sj=s((Uue,Oj)=>{"use strict";var fRr=Aj();Oj.exports=fRr});var Ij=s((Hue,Tj)=>{"use strict";var vRr=Sj(),K1=Ht(),cRr=wi(),lRr=/\s+/g,pRr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,gRr=/([a-z0-9])([A-Z])/g;function mRr(r){return r=K1(r,pRr," "),r=K1(r,gRr,"$1 $2"),r=cRr(r),r=K1(r,lRr,"_"),vRr(r)}Tj.exports=mRr});var Lj=s((Wue,_j)=>{"use strict";var dRr=Ij();_j.exports=dRr});var Rj=s((Due,Pj)=>{"use strict";var hRr=K().isPrimitive,yRr=q(),qRr=Lj();function bRr(r){if(!hRr(r))throw new TypeError(yRr("invalid argument. Must provide a string. Value: `%s`.",r));return qRr(r)}Pj.exports=bRr});var Mj=s((zue,Fj)=>{"use strict";var wRr=Rj();Fj.exports=wRr});var kj=s((Xue,Bj)=>{"use strict";var ERr=bi(),r3=Ht(),NRr=wi(),ARr=/\s+/g,ORr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,SRr=/([a-z0-9])([A-Z])/g;function TRr(r){return r=r3(r,ORr," "),r=r3(r,SRr,"$1 $2"),r=NRr(r),r=r3(r,ARr,"-"),ERr(r)}Bj.exports=TRr});var Cj=s((Jue,jj)=>{"use strict";var IRr=kj();jj.exports=IRr});var Vj=s((xue,Gj)=>{"use strict";var _Rr=K().isPrimitive,LRr=q(),PRr=Cj();function RRr(r){if(!_Rr(r))throw new TypeError(LRr("invalid argument. Must provide a string. Value: `%s`.",r));return PRr(r)}Gj.exports=RRr});var Hj=s((Yue,Uj)=>{"use strict";var FRr=Vj();Uj.exports=FRr});var Dj=s((Zue,Wj)=>{"use strict";var MRr=K().isPrimitive,BRr=q(),kRr=bi();function jRr(r){if(!MRr(r))throw new TypeError(BRr("invalid argument. Must provide a string. Value: `%s`.",r));return kRr(r)}Wj.exports=jRr});var Xj=s(($ue,zj)=>{"use strict";var CRr=Dj();zj.exports=CRr});var xj=s((Que,Jj)=>{"use strict";var GRr=s0(),VRr=bi(),o0=Ht(),URr=wi(),HRr=/\s+/g,WRr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,DRr=/(?:\s|^)([^\s]+)(?=\s|$)/g,zRr=/([a-z0-9])([A-Z])/g;function XRr(r,e){return GRr(VRr(e))}function JRr(r){return r=o0(r,WRr," "),r=o0(r,HRr," "),r=o0(r,zRr,"$1 $2"),r=URr(r),o0(r,DRr,XRr)}Jj.exports=JRr});var Zj=s((Kue,Yj)=>{"use strict";var xRr=xj();Yj.exports=xRr});var Qj=s((roe,$j)=>{"use strict";var YRr=K().isPrimitive,ZRr=q(),$Rr=Zj();function QRr(r){if(!YRr(r))throw new TypeError(ZRr("invalid argument. First argument must be a string. Value: `%s`.",r));return $Rr(r)}$j.exports=QRr});var rC=s((eoe,Kj)=>{"use strict";var KRr=Qj();Kj.exports=KRr});var tC=s((toe,eC)=>{"use strict";var rFr=bi(),e3=Ht(),eFr=wi(),tFr=/\s+/g,iFr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,nFr=/([a-z0-9])([A-Z])/g;function aFr(r){return r=e3(r,iFr," "),r=e3(r,nFr,"$1 $2"),r=eFr(r),r=e3(r,tFr,"_"),rFr(r)}eC.exports=aFr});var nC=s((ioe,iC)=>{"use strict";var sFr=tC();iC.exports=sFr});var sC=s((noe,aC)=>{"use strict";var uFr=K().isPrimitive,oFr=q(),fFr=nC();function vFr(r){if(!uFr(r))throw new TypeError(oFr("invalid argument. Must provide a string. Value: `%s`.",r));return fFr(r)}aC.exports=vFr});var oC=s((aoe,uC)=>{"use strict";var cFr=sC();uC.exports=cFr});var cC=s((soe,vC)=>{"use strict";var lFr=I(),fC=O(),pFr=fr().isPrimitive,gFr=K().isPrimitive,t3=q();function mFr(r,e){return lFr(e)?fC(e,"flags")&&(r.flags=e.flags,!gFr(r.flags))?new TypeError(t3("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):fC(e,"capture")&&(r.capture=e.capture,!pFr(r.capture))?new TypeError(t3("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(t3("invalid argument. Options argument must be an object. Value: `%s`.",e))}vC.exports=mFr});var f0=s((uoe,pC)=>{"use strict";var dFr=cC(),lC=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function hFr(r){var e,t;if(arguments.length>0){if(e={},t=dFr(e,r),t)throw t;return e.capture?new RegExp("("+lC+")",e.flags):new RegExp(lC,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}pC.exports=hFr});var mC=s((ooe,gC)=>{"use strict";var yFr=f0(),qFr=yFr({capture:!0});gC.exports=qFr});var hC=s((foe,dC)=>{"use strict";var bFr=f0(),wFr=bFr();dC.exports=wFr});var bC=s((voe,qC)=>{"use strict";var yC=w(),i3=f0(),EFr=mC(),NFr=hC();yC(i3,"REGEXP",NFr);yC(i3,"REGEXP_CAPTURE",EFr);qC.exports=i3});var EC=s((coe,wC)=>{"use strict";var AFr=bC().REGEXP;function OFr(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),AFr.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}wC.exports=OFr});var AC=s((loe,NC)=>{"use strict";var SFr=EC();NC.exports=SFr});var SC=s((poe,OC)=>{"use strict";var TFr=K().isPrimitive,IFr=q(),_Fr=AC();function LFr(r){if(!TFr(r))throw new TypeError(IFr("invalid argument. Must provide a string. Value: `%s`.",r));return _Fr(r)}OC.exports=LFr});var IC=s((goe,TC)=>{"use strict";var PFr=SC();TC.exports=PFr});var LC=s((moe,_C)=>{"use strict";function RFr(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}_C.exports=RFr});var RC=s((doe,PC)=>{"use strict";var FFr=LC();PC.exports=FFr});var MC=s((hoe,FC)=>{"use strict";var MFr=K().isPrimitive,BFr=q(),kFr=RC();function jFr(r){if(!MFr(r))throw new TypeError(BFr("invalid argument. First argument must be a string. Value: `%s`.",r));return kFr(r)}FC.exports=jFr});var kC=s((yoe,BC)=>{"use strict";var CFr=MC();BC.exports=CFr});var CC=s((qoe,jC)=>{"use strict";var GFr=K().isPrimitive,VFr=q();function UFr(r){if(!GFr(r))throw new TypeError(VFr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}jC.exports=UFr});var VC=s((boe,GC)=>{"use strict";var HFr=CC();GC.exports=HFr});var HC=s((woe,UC)=>{"use strict";var Wr={};Wr.camelcase=yj();Wr.capitalize=Ej();Wr.constantcase=Mj();Wr.kebabcase=Hj();Wr.lowercase=Xj();Wr.pascalcase=rC();Wr.snakecase=oC();Wr.startcase=IC();Wr.uncapitalize=kC();Wr.uppercase=VC();UC.exports=Wr});var DC=s((Eoe,WC)=>{"use strict";var WFr=je();function DFr(r,e,t,i){WFr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}WC.exports=DFr});var F=s((Noe,zC)=>{"use strict";var zFr=DC();zC.exports=zFr});var xC=s((Aoe,JC)=>{"use strict";var XC=65535;function XFr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&XC)>>>0,o=(e&XC)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}JC.exports=XFr});var ZC=s((Ooe,YC)=>{"use strict";var JFr=xC();YC.exports=JFr});var n3=s((Soe,$C)=>{"use strict";function xFr(r,e,t,i,n,a,u){var o,v,f,c,l,p,m;for(o=e.data,v=n.data,c=e.accessors[0],f=n.accessors[1],l=i,p=u,m=0;m<r;m++)f(v,p,c(o,l)),l+=t,p+=a;return e}$C.exports=xFr});var rG=s((Toe,KC)=>{"use strict";var QC=Za(),YFr=n3(),a3=8;function ZFr(r,e,t,i,n){var a,u,o,v,f,c;if(r<=0)return i;if(o=QC(e),v=QC(i),o.accessorProtocol||v.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,YFr(r,o,t,a,v,n,u),v.data;if(t===1&&n===1){if(f=r%a3,f>0)for(c=0;c<f;c++)i[c]=e[c];if(r<a3)return i;for(c=f;c<r;c+=a3)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}KC.exports=ZFr});var iG=s((Ioe,tG)=>{"use strict";var eG=Za(),$Fr=n3(),Pn=8;function QFr(r,e,t,i,n,a,u){var o,v,f,c,l,p;if(r<=0)return n;if(f=eG(e),c=eG(n),f.accessorProtocol||c.accessorProtocol)return $Fr(r,f,t,i,c,a,u),c.data;if(o=i,v=u,t===1&&a===1){if(l=r%Pn,l>0)for(p=0;p<l;p++)n[v]=e[o],o+=t,v+=a;if(r<Pn)return n;for(p=l;p<r;p+=Pn)n[v]=e[o],n[v+1]=e[o+1],n[v+2]=e[o+2],n[v+3]=e[o+3],n[v+4]=e[o+4],n[v+5]=e[o+5],n[v+6]=e[o+6],n[v+7]=e[o+7],o+=Pn,v+=Pn;return n}for(p=0;p<r;p++)n[v]=e[o],o+=t,v+=a;return n}tG.exports=QFr});var Qe=s((_oe,aG)=>{"use strict";var KFr=w(),nG=rG(),rMr=iG();KFr(nG,"ndarray",rMr);aG.exports=nG});var uG=s((Loe,sG)=>{"use strict";function eMr(){}sG.exports=eMr});var fG=s((Poe,oG)=>{"use strict";var tMr=uG();function iMr(){return tMr.name==="foo"}oG.exports=iMr});var cG=s((Roe,vG)=>{"use strict";var nMr=fG();vG.exports=nMr});var pG=s((Foe,lG)=>{"use strict";var aMr=_(),sMr=cG(),uMr=q(),oMr=Hu().REGEXP,fMr=sMr();function vMr(r){if(aMr(r)===!1)throw new TypeError(uMr("invalid argument. Must provide a function. Value: `%s`.",r));return fMr?r.name:oMr.exec(r.toString())[1]}lG.exports=vMr});var mG=s((Moe,gG)=>{"use strict";var cMr=pG();gG.exports=cMr});var hG=s((Boe,dG)=>{"use strict";var lMr=vn(),pMr=Yt(),gMr=fn(),mMr=on(),dMr=Zt(),hMr=Pt(),yMr=cr(),qMr=se(),bMr=dr(),wMr=[bMr,qMr,hMr,yMr,mMr,dMr,lMr,pMr,gMr];dG.exports=wMr});var yG=s((koe,EMr)=>{EMr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var AG=s((joe,NG)=>{"use strict";var NMr=Ce(),AMr=mG(),wG=Nt(),OMr=xu(),SMr=dr(),qG=hG(),bG=yG(),v0=OMr()?wG(SMr):EG;v0=AMr(v0)==="TypedArray"?v0:EG;function EG(){}function TMr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof v0)return!0;for(t=0;t<qG.length;t++)if(r instanceof qG[t])return!0;for(;r;){for(e=NMr(r),t=0;t<bG.length;t++)if(bG[t]===e)return!0;r=wG(r)}return!1}NG.exports=TMr});var SG=s((Coe,OG)=>{"use strict";var IMr=AG();OG.exports=IMr});var IG=s((Goe,TG)=>{"use strict";var _Mr=gn(),LMr=dn(),PMr=[LMr,_Mr];TG.exports=PMr});var _G=s((Voe,RMr)=>{RMr.exports=["Complex64Array","Complex128Array"]});var FG=s((Uoe,RG)=>{"use strict";var FMr=Ce(),MMr=Nt(),LG=IG(),PG=_G();function BMr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<LG.length;t++)if(r instanceof LG[t])return!0;for(;r;){for(e=FMr(r),t=0;t<PG.length;t++)if(PG[t]===e)return!0;r=MMr(r)}return!1}RG.exports=BMr});var BG=s((Hoe,MG)=>{"use strict";var kMr=FG();MG.exports=kMr});var jG=s((Woe,kG)=>{"use strict";var jMr=q();function CMr(r,e){if(typeof e!="function")throw new TypeError(jMr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}kG.exports=CMr});var GG=s((Doe,CG)=>{"use strict";var GMr=jG();CG.exports=GMr});var UG=s((zoe,VG)=>{"use strict";var VMr=vn(),UMr=Yt(),HMr=fn(),WMr=on(),DMr=Zt(),zMr=Pt(),XMr=cr(),JMr=se(),xMr=dr(),YMr=gn(),ZMr=dn(),$Mr=[[xMr,"Float64Array"],[JMr,"Float32Array"],[zMr,"Int32Array"],[XMr,"Uint32Array"],[WMr,"Int16Array"],[DMr,"Uint16Array"],[VMr,"Int8Array"],[UMr,"Uint8Array"],[HMr,"Uint8ClampedArray"],[YMr,"Complex64Array"],[ZMr,"Complex128Array"]];VG.exports=$Mr});var WG=s((Xoe,HG)=>{"use strict";var QMr=GG(),KMr=Ce(),rBr=Nt(),Ei=UG();function eBr(r){var e,t;for(t=0;t<Ei.length;t++)if(QMr(r,Ei[t][0]))return Ei[t][1];for(;r;){for(e=KMr(r),t=0;t<Ei.length;t++)if(e===Ei[t][1])return Ei[t][1];r=rBr(r)}}HG.exports=eBr});var zG=s((Joe,DG)=>{"use strict";var tBr=SG(),iBr=BG(),nBr=si(),aBr=ui(),sBr=q(),uBr=WG();function oBr(r){var e,t,i;if(tBr(r))e=r;else if(iBr(r))r.BYTES_PER_ELEMENT===8?e=nBr(r,0):e=aBr(r,0);else throw new TypeError(sBr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:uBr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}DG.exports=oBr});var M=s((xoe,XG)=>{"use strict";var fBr=zG();XG.exports=fBr});var s3=s((Yoe,JG)=>{"use strict";var vBr=zt(),cBr=Q(),lBr=vBr-1;function pBr(){var r=cBr(1+lBr*Math.random());return r>>>0}JG.exports=pBr});var g3=s((Zoe,nV)=>{"use strict";var oe=w(),Ke=R(),xG=F(),u3=O(),gBr=I(),mBr=Gr(),YG=Kr(),dBr=fr().isPrimitive,ZG=ae().isPrimitive,eV=sn(),tV=zt(),br=cr(),hBr=Do(),p3=ZC(),Ni=Qe(),yBr=M(),Er=q(),$G=s3(),ar=624,o3=397,QG=tV>>>0,qBr=19650218>>>0,f3=2147483648>>>0,v3=2147483647>>>0,bBr=1812433253>>>0,wBr=1664525>>>0,EBr=1566083941>>>0,NBr=2636928640>>>0,ABr=4022730752>>>0,OBr=2567483615>>>0,c3=[0>>>0,OBr>>>0],iV=1/(eV+1),SBr=67108864>>>0,TBr=2147483648>>>0,l3=1>>>0,IBr=eV*iV,c0=1,l0=3,rt=2,et=ar+3,wr=ar+5,Rn=ar+6;function KG(r,e){var t;return e?t="option":t="argument",r.length<Rn+1?new RangeError(Er("invalid %s. `state` array has insufficient length.",t)):r[0]!==c0?new RangeError(Er("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,c0,r[0])):r[1]!==l0?new RangeError(Er("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,l0,r[1])):r[rt]!==ar?new RangeError(Er("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ar,r[rt])):r[et]!==1?new RangeError(Er("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[et])):r[wr]!==r.length-Rn?new RangeError(Er("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Rn,r[wr])):null}function rV(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=p3(t,bBr)+i>>>0;return r}function _Br(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=hBr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=p3(n,wBr)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=p3(n,EBr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=TBr,r}function LBr(r){var e,t,i,n;for(n=ar-o3,t=0;t<n;t++)e=r[t]&f3|r[t+1]&v3,r[t]=r[t+o3]^e>>>1^c3[e&l3];for(i=ar-1;t<i;t++)e=r[t]&f3|r[t+1]&v3,r[t]=r[t-n]^e>>>1^c3[e&l3];return e=r[i]&f3|r[0]&v3,r[i]=r[o3-1]^e>>>1^c3[e&l3],r}function PBr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!gBr(r))throw new TypeError(Er("invalid argument. Options argument must be an object. Value: `%s`.",r));if(u3(r,"copy")&&(i.copy=r.copy,!dBr(r.copy)))throw new TypeError(Er("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(u3(r,"state")){if(t=r.state,i.state=!0,!YG(t))throw new TypeError(Er("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=KG(t,!0),u)throw u;i.copy===!1?e=t:(e=new br(t.length),Ni(t.length,t,1,e,1)),t=new br(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,ar),n=new br(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,t[wr])}if(n===void 0)if(u3(r,"seed"))if(n=r.seed,i.seed=!0,ZG(n)){if(n>QG)throw new RangeError(Er("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(mBr(n)===!1||n.length<1)throw new TypeError(Er("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!ZG(n))throw new TypeError(Er("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>QG)throw new RangeError(Er("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new br(Rn+a),e[0]=c0,e[1]=l0,e[rt]=ar,e[et]=1,e[et+1]=ar,e[wr]=a,Ni.ndarray(a,n,1,0,e,1,wr+1),t=new br(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,ar),n=new br(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,a),t=rV(t,ar,qBr),t=_Br(t,ar,n,a)}else n=$G()>>>0}else n=$G()>>>0;return t===void 0&&(e=new br(Rn+1),e[0]=c0,e[1]=l0,e[rt]=ar,e[et]=1,e[et+1]=ar,e[wr]=1,e[wr+1]=n,t=new br(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,ar),n=new br(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,1),t=rV(t,ar,n)),oe(h,"NAME","mt19937"),Ke(h,"seed",o),Ke(h,"seedLength",v),xG(h,"state",l,p),Ke(h,"stateLength",f),Ke(h,"byteLength",c),oe(h,"toJSON",m),oe(h,"MIN",0),oe(h,"MAX",tV),oe(h,"normalized",d),oe(d,"NAME",h.NAME),Ke(d,"seed",o),Ke(d,"seedLength",v),xG(d,"state",l,p),Ke(d,"stateLength",f),Ke(d,"byteLength",c),oe(d,"toJSON",m),oe(d,"MIN",0),oe(d,"MAX",IBr),h;function o(){var g=e[wr];return Ni(g,n,1,new br(g),1)}function v(){return e[wr]}function f(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return Ni(g,e,1,new br(g),1)}function p(g){var y;if(!YG(g))throw new TypeError(Er("invalid argument. Must provide a Uint32Array. Value: `%s`.",g));if(y=KG(g,!1),y)throw y;i.copy===!1?i.state&&g.length===e.length?Ni(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new br(g.length)),Ni(g.length,g,1,e,1)),t=new br(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,ar),n=new br(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,e[wr])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=yBr(e),g.params=[],g}function h(){var g,y;return y=e[et+1],y>=ar&&(t=LBr(t),y=0),g=t[y],e[et+1]=y+1,g^=g>>>11,g^=g<<7&NBr,g^=g<<15&ABr,g^=g>>>18,g>>>0}function d(){var g=h()>>>5,y=h()>>>6;return(g*SBr+y)*iV}}nV.exports=PBr});var sV=s(($oe,aV)=>{"use strict";var RBr=g3(),FBr=s3(),MBr=RBr({seed:FBr()});aV.exports=MBr});var X=s((Qoe,oV)=>{"use strict";var BBr=w(),uV=sV(),kBr=g3();BBr(uV,"factory",kBr);oV.exports=uV});var lV=s((Koe,cV)=>{"use strict";var fV=j().isPrimitive,m3=q(),vV=sr();function jBr(r,e){return!fV(r)||vV(r)?new TypeError(m3("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!fV(e)||vV(e)?new TypeError(m3("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(m3("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}cV.exports=jBr});var gV=s((r2e,pV)=>{"use strict";var CBr=W(),GBr=Tt(),VBr=Xa();function UBr(r,e,t){return e+CBr(GBr(VBr*r()),2)*(t-e)}pV.exports=UBr});var d3=s((e2e,EV)=>{"use strict";var fe=w(),p0=R(),mV=F(),dV=I(),hV=_(),yV=O(),qV=S(),HBr=k(),g0=X().factory,bV=E(),WBr=M(),m0=q(),DBr=lV(),wV=gV();function zBr(){var r,e,t,i,n,a;if(arguments.length===0)e=g0();else if(arguments.length===1){if(r=arguments[0],!dV(r))throw new TypeError(m0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(yV(r,"prng")){if(!hV(r.prng))throw new TypeError(m0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=g0(r)}else{if(n=arguments[0],a=arguments[1],i=DBr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!dV(r))throw new TypeError(m0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(yV(r,"prng")){if(!hV(r.prng))throw new TypeError(m0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=g0(r)}else e=g0()}return n===void 0?t=h:t=m,fe(t,"NAME","arcsine"),r&&r.prng?(fe(t,"seed",null),fe(t,"seedLength",null),mV(t,"state",qV(null),HBr),fe(t,"stateLength",null),fe(t,"byteLength",null),fe(t,"toJSON",qV(null)),fe(t,"PRNG",e)):(p0(t,"seed",u),p0(t,"seedLength",o),mV(t,"state",c,l),p0(t,"stateLength",v),p0(t,"byteLength",f),fe(t,"toJSON",p),fe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=WBr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return wV(e,n,a)}function h(d,g){return bV(d)||bV(g)||d>=g?NaN:wV(e,d,g)}}EV.exports=zBr});var AV=s((t2e,NV)=>{"use strict";var XBr=d3(),JBr=XBr();NV.exports=JBr});var TV=s((i2e,SV)=>{"use strict";var xBr=w(),OV=AV(),YBr=d3();xBr(OV,"factory",YBr);SV.exports=OV});var h3=s((n2e,FV)=>{"use strict";var ve=w(),d0=R(),IV=F(),_V=I(),ZBr=qn().isPrimitive,LV=_(),PV=O(),RV=S(),$Br=k(),h0=X().factory,QBr=E(),KBr=M(),y0=q();function rkr(){var r,e,t,i;if(arguments.length===0)e=h0();else if(arguments.length===1&&_V(arguments[0]))if(r=arguments[0],PV(r,"prng")){if(!LV(r.prng))throw new TypeError(y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=h0(r);else{if(i=arguments[0],!ZBr(i))throw new TypeError(y0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!_V(r))throw new TypeError(y0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PV(r,"prng")){if(!LV(r.prng))throw new TypeError(y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=h0(r)}else e=h0()}return i===void 0?t=p:t=l,ve(t,"NAME","bernoulli"),r&&r.prng?(ve(t,"seed",null),ve(t,"seedLength",null),IV(t,"state",RV(null),$Br),ve(t,"stateLength",null),ve(t,"byteLength",null),ve(t,"toJSON",RV(null)),ve(t,"PRNG",e)):(d0(t,"seed",n),d0(t,"seedLength",a),IV(t,"state",v,f),d0(t,"stateLength",u),d0(t,"byteLength",o),ve(t,"toJSON",c),ve(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=KBr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return QBr(m)||m<0||m>1?NaN:e()<=m?1:0}}FV.exports=rkr});var BV=s((a2e,MV)=>{"use strict";var ekr=h3(),tkr=ekr();MV.exports=tkr});var CV=s((s2e,jV)=>{"use strict";var ikr=w(),kV=BV(),nkr=h3();ikr(kV,"factory",nkr);jV.exports=kV});var HV=s((u2e,UV)=>{"use strict";var akr=C(),GV=nr(),skr=P(),VV=.00991256303526217;function ukr(r,e){var t,i,n;for(i=GV(-.5*e*e),t=[],t.push(VV/i),t.push(e),n=2;n<r;n++)t[n]=akr(-2*skr(VV/t[n-1]+i)),i=GV(-.5*t[n]*t[n]);return t.push(0),t}UV.exports=ukr});var DV=s((o2e,WV)=>{"use strict";function okr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}WV.exports=okr});var JV=s((f2e,XV)=>{"use strict";var zV=P();function fkr(r,e,t){var i,n;do i=zV(r())/e,n=zV(r());while(-2*n<i*i);return t?i-e:e-i}XV.exports=fkr});var $V=s((v2e,ZV)=>{"use strict";var vkr=Y(),xV=nr(),ckr=HV(),lkr=DV(),pkr=JV(),gkr=128,YV=3.442619855899,Wt=ckr(gkr,YV),mkr=lkr(Wt),dkr=127;function hkr(r,e){return t;function t(){for(var i,n,a,u,o,v,f;;){if(o=2*r()-1,v=e()&dkr,vkr(o)<mkr[v])return o*Wt[v];if(v===0)return pkr(r,YV,o<0);if(u=o*Wt[v],a=u*u,f=v+1,i=xV(-.5*(Wt[v]*Wt[v]-a)),n=xV(-.5*(Wt[f]*Wt[f]-a)),n+r()*(i-n)<1)return u}}}ZV.exports=hkr});var q3=s((c2e,rU)=>{"use strict";var tt=w(),q0=R(),QV=F(),ykr=_(),qkr=I(),bkr=fr().isPrimitive,b0=O(),wkr=Kr(),y3=X().factory,KV=S(),Ekr=k(),Nkr=Q(),Akr=zt(),Okr=M(),Fn=q(),Skr=$V();function Tkr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!qkr(r))throw new TypeError(Fn("invalid argument. Must provide an object. Value: `%s`.",r));if(b0(r,"copy")&&(n.copy=r.copy,!bkr(r.copy)))throw new TypeError(Fn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(b0(r,"prng")){if(!ykr(r.prng))throw new TypeError(Fn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(b0(r,"state")){if(n.state=r.state,!wkr(r.state))throw new TypeError(Fn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(b0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Fn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=y3(n),e=t.normalized):(t=y3({seed:Nkr(1+Akr*e()),copy:n.copy}),n.seed=null):(t=y3(n),e=t.normalized),i=Skr(e,t),tt(i,"NAME","improved-ziggurat"),n.seed===null?(tt(i,"seed",null),tt(i,"seedLength",null)):(q0(i,"seed",a),q0(i,"seedLength",u)),r&&r.prng?(QV(i,"state",KV(null),Ekr),tt(i,"stateLength",null),tt(i,"byteLength",null),tt(i,"toJSON",KV(null))):(QV(i,"state",f,c),q0(i,"stateLength",o),q0(i,"byteLength",v),tt(i,"toJSON",l)),tt(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=Okr(t.state),p.params=[],p}}rU.exports=Tkr});var tU=s((l2e,eU)=>{"use strict";var Ikr=q3(),_kr=Ikr();eU.exports=_kr});var it=s((p2e,nU)=>{"use strict";var Lkr=w(),iU=tU(),Pkr=q3();Lkr(iU,"factory",Pkr);nU.exports=iU});var sU=s((g2e,aU)=>{"use strict";var Rkr=_(),Fkr=Rkr(Object.assign);aU.exports=Fkr});var oU=s((m2e,uU)=>{"use strict";var Mkr=Object.assign;uU.exports=Mkr});var vU=s((d2e,fU)=>{"use strict";var Bkr=typeof Object.getOwnPropertySymbols<"u";fU.exports=Bkr});var pU=s((h2e,lU)=>{"use strict";var cU=xt(),kkr=cU.getOwnPropertySymbols;function jkr(r){return kkr(cU(r))}lU.exports=jkr});var mU=s((y2e,gU)=>{"use strict";function Ckr(){return[]}gU.exports=Ckr});var hU=s((q2e,dU)=>{"use strict";var Gkr=vU(),Vkr=pU(),Ukr=mU(),b3;Gkr?b3=Vkr:b3=Ukr;dU.exports=b3});var qU=s((b2e,yU)=>{"use strict";var Hkr=Jt(),Wkr=hU(),Dkr=zi();function zkr(r){var e,t,i;for(e=Hkr(r),t=Wkr(r),i=0;i<t.length;i++)Dkr(r,t[i])&&e.push(t[i]);return e}yU.exports=zkr});var wU=s((w2e,bU)=>{"use strict";var Xkr=qU();bU.exports=Xkr});var AU=s((E2e,NU)=>{"use strict";var Jkr=wU(),EU=xt(),xkr=q();function Ykr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(xkr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=EU(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=Jkr(EU(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}NU.exports=Ykr});var Mn=s((N2e,OU)=>{"use strict";var Zkr=sU(),$kr=oU(),Qkr=AU(),w3;Zkr?w3=$kr:w3=Qkr;OU.exports=w3});var _U=s((A2e,IU)=>{"use strict";var SU=D().isPrimitive,TU=q();function Kkr(r,e){return SU(r)?SU(e)?null:new TypeError(TU("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(TU("invalid argument. First argument must be a positive number. Value: `%s`.",r))}IU.exports=Kkr});var MU=s((O2e,FU)=>{"use strict";var LU=P(),PU=C(),rjr=W(),RU=1/3;function ejr(r,e,t){var i,n,a,u,o,v,f,c,l,p;for(t<1?(v=t+1-RU,o=1/PU(9*v),c=rjr(r(),1/t)):(v=t-RU,o=1/PU(9*v),c=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,n=f*f,a=1-.331*n*n,u=.5*n+v*(1-p+LU(p)),l=r(),(l<a||LU(l)<u)&&(i=!1)}return v*p*c}FU.exports=ejr});var jU=s((S2e,kU)=>{"use strict";var E3=W(),BU=P();function tjr(r,e,t){var i,n,a,u,o,v,f,c;for(a=t-1,o=E3(a+a,.5),i=!0;i===!0;)u=e(),f=.5*(1+u/o),f>=0&&f<=1&&(v=r(),n=E3(u,4),c=8*t-12,c=1-n/c,v<=c?i=!1:(c+=.5*E3(n/(8*t-8),2),v<c&&(c=a*BU(4*f*(1-f)),c+=u*u/2,c>=BU(v)&&(i=!1))));return f}kU.exports=tjr});var GU=s((T2e,CU)=>{"use strict";var ijr=W(),w0=P();function njr(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h;for(o=t-1,v=i-1,f=o+v,c=f*w0(f),u=o/f,n=.5/ijr(f,.5),a=!0;a===!0;)l=e(),m=u+l*n,m>=0&&m<=1&&(p=r(),h=o*w0(m/o),h+=v*w0((1-m)/v),h+=c+.5*l*l,h>=w0(p)&&(a=!1));return m}CU.exports=njr});var HU=s((I2e,UU)=>{"use strict";var N3=nr(),VU=W(),A3=P();function ajr(r,e,t){for(var i,n,a,u,o,v,f;;)if(u=r(),o=r(),v=VU(u,1/e),f=VU(o,1/t),a=v+f,a<=1)return a>0?v/a:(i=A3(u)/e,n=A3(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),N3(i-A3(N3(i)+N3(n))))}UU.exports=ajr});var zU=s((_2e,DU)=>{"use strict";var WU=MU(),sjr=jU(),ujr=GU(),ojr=HU();function fjr(r,e,t,i){var n,a;return t===i&&t>1.5?sjr(r,e,t):t>1&&i>1?ujr(r,e,t,i):t<1&&i<1?ojr(r,t,i):(n=WU(r,e,t),a=WU(r,e,i),n/(n+a))}DU.exports=fjr});var I3=s((L2e,eH)=>{"use strict";var ce=w(),E0=R(),XU=F(),JU=I(),xU=fr().isPrimitive,YU=_(),Ai=O(),ZU=S(),vjr=k(),$U=it().factory,N0=X().factory,QU=E(),O3=Qe(),S3=cr(),T3=Kr(),KU=Mn(),cjr=M(),le=q(),ljr=_U(),rH=zU();function pjr(){var r,e,t,i,n,a,u,o,v;if(o=!0,arguments.length===0)n={copy:!1},a=N0(n);else if(arguments.length===1){if(n=arguments[0],!JU(n))throw new TypeError(le("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ai(n,"copy")&&!xU(n.copy))throw new TypeError(le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ai(n,"prng")){if(!YU(n.prng))throw new TypeError(le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ai(n,"state")&&!T3(n.state))throw new TypeError(le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=KU({},n),n.copy===!1?o=!1:n.state&&(n.state=O3(n.state.length,n.state,1,new S3(n.state.length),1)),n.copy=!1,a=N0(n)}}else{if(t=arguments[0],i=arguments[1],v=ljr(t,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!JU(n))throw new TypeError(le("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ai(n,"copy")&&!xU(n.copy))throw new TypeError(le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ai(n,"prng")){if(!YU(n.prng))throw new TypeError(le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ai(n,"state")&&!T3(n.state))throw new TypeError(le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=KU({},n),n.copy===!1?o=!1:n.state&&(n.state=O3(n.state.length,n.state,1,new S3(n.state.length),1)),n.copy=!1,a=N0(n)}}else n={copy:!1},a=N0(n)}return n&&n.prng?e=$U({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=$U({state:r,copy:!1})),t===void 0?u=y:u=g,ce(u,"NAME","beta"),n&&n.prng?(ce(u,"seed",null),ce(u,"seedLength",null),XU(u,"state",ZU(null),vjr),ce(u,"stateLength",null),ce(u,"byteLength",null),ce(u,"toJSON",ZU(null)),ce(u,"PRNG",a)):(E0(u,"seed",f),E0(u,"seedLength",c),XU(u,"state",m,h),E0(u,"stateLength",l),E0(u,"byteLength",p),ce(u,"toJSON",d),ce(u,"PRNG",a),a=a.normalized),u;function f(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function m(){return a.state}function h(N){if(!T3(N))throw new TypeError(le("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=O3(N.length,N,1,new S3(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=cjr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function g(){return rH(a,e,t,i)}function y(N,A){return QU(N)||QU(A)||N<=0||A<=0?NaN:rH(a,e,N,A)}}eH.exports=pjr});var iH=s((P2e,tH)=>{"use strict";var gjr=I3(),mjr=gjr();tH.exports=mjr});var sH=s((R2e,aH)=>{"use strict";var djr=w(),nH=iH(),hjr=I3();djr(nH,"factory",hjr);aH.exports=nH});var vH=s((F2e,fH)=>{"use strict";var uH=D().isPrimitive,oH=q();function yjr(r,e){return uH(r)?uH(e)?null:new TypeError(oH("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(oH("invalid argument. First argument must be a positive number. Value: `%s`.",r))}fH.exports=yjr});var pH=s((M2e,lH)=>{"use strict";var cH=P();function qjr(r,e,t,i,n){var a,u,o,v,f,c,l;for(a=!0;a;){do f=e(),l=1+n*f;while(l<=0);l*=l*l,u=f*f,o=1-.331*u*u,v=.5*u+i*(1-l+cH(l)),c=r(),(c<o||cH(c)<v)&&(a=!1)}return 1/t*i*l}lH.exports=qjr});var F3=s((B2e,NH)=>{"use strict";var pe=w(),A0=R(),gH=F(),mH=I(),_3=Kr(),dH=fr().isPrimitive,hH=_(),Oi=O(),yH=S(),bjr=k(),qH=it().factory,O0=X().factory,bH=E(),L3=C(),wH=W(),P3=Qe(),R3=cr(),wjr=M(),EH=Mn(),ge=q(),Ejr=vH(),S0=pH(),T0=1/3;function Njr(){var r,e,t,i,n,a,u,o,v,f,c;if(o=!0,arguments.length===0)n={copy:!1},a=O0(n);else if(arguments.length===1){if(n=arguments[0],!mH(n))throw new TypeError(ge("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Oi(n,"copy")&&!dH(n.copy))throw new TypeError(ge("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Oi(n,"prng")){if(!hH(n.prng))throw new TypeError(ge("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Oi(n,"state")&&!_3(n.state))throw new TypeError(ge("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=EH({},n),n.copy===!1?o=!1:n.state&&(n.state=P3(n.state.length,n.state,1,new R3(n.state.length),1)),n.copy=!1,a=O0(n)}}else{if(e=arguments[0],i=arguments[1],v=Ejr(e,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!mH(n))throw new TypeError(ge("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Oi(n,"copy")&&!dH(n.copy))throw new TypeError(ge("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Oi(n,"prng")){if(!hH(n.prng))throw new TypeError(ge("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Oi(n,"state")&&!_3(n.state))throw new TypeError(ge("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=EH({},n),n.copy===!1?o=!1:n.state&&(n.state=P3(n.state.length,n.state,1,new R3(n.state.length),1)),n.copy=!1,a=O0(n)}}else n={copy:!1},a=O0(n)}return n&&n.prng?t=qH({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=qH({state:r,copy:!1})),e===void 0?u=G:(e>=1?(u=N,c=e-T0):(u=A,c=e+1-T0),f=1/L3(9*c)),pe(u,"NAME","gamma"),n&&n.prng?(pe(u,"seed",null),pe(u,"seedLength",null),gH(u,"state",yH(null),bjr),pe(u,"stateLength",null),pe(u,"byteLength",null),pe(u,"toJSON",yH(null)),pe(u,"PRNG",a)):(A0(u,"seed",l),A0(u,"seedLength",p),gH(u,"state",d,g),A0(u,"stateLength",m),A0(u,"byteLength",h),pe(u,"toJSON",y),pe(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function m(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function g(T){if(!_3(T))throw new TypeError(ge("invalid argument. Must provide a Uint32Array. Value: `%s`.",T));o&&(T=P3(T.length,T,1,new R3(T.length),1)),a.state=T}function y(){var T={};return T.type="PRNG",T.name=u.NAME,T.state=wjr(a.state),e===void 0?T.params=[]:T.params=[e,i],T}function N(){return S0(a,t,i,c,f)}function A(){return S0(a,t,i,c,f)*wH(a(),1/e)}function G(T,J){var or,z;return bH(T)||bH(J)||T<=0||J<=0?NaN:T<1?(z=T+1-T0,or=1/L3(9*z),S0(a,t,J,z,or)*wH(a(),1/T)):(z=T-T0,or=1/L3(9*z),S0(a,t,J,z,or))}}NH.exports=Njr});var OH=s((k2e,AH)=>{"use strict";var Ajr=F3(),Ojr=Ajr();AH.exports=Ojr});var Si=s((j2e,TH)=>{"use strict";var Sjr=w(),SH=OH(),Tjr=F3();Sjr(SH,"factory",Tjr);TH.exports=SH});var PH=s((C2e,LH)=>{"use strict";var IH=D().isPrimitive,_H=q();function Ijr(r,e){return IH(r)?IH(e)?null:new TypeError(_H("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(_H("invalid argument. First argument must be a positive number. Value: `%s`.",r))}LH.exports=Ijr});var FH=s((G2e,RH)=>{"use strict";function _jr(r,e,t){return r(e,1)/r(t,1)}RH.exports=_jr});var M3=s((V2e,VH)=>{"use strict";var nt=w(),I0=R(),MH=F(),BH=I(),kH=S(),Ljr=k(),_0=Si().factory,jH=E(),Pjr=M(),CH=q(),Rjr=PH(),GH=FH();function Fjr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=_0();else if(arguments.length===1){if(i=arguments[0],!BH(i))throw new TypeError(CH("invalid argument. Options argument must be an object. Value: `%s`.",i));r=_0(i)}else{if(e=arguments[0],t=arguments[1],u=Rjr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!BH(i))throw new TypeError(CH("invalid argument. Options argument must be an object. Value: `%s`.",i));r=_0(i)}else r=_0()}return e===void 0?a=d:a=h,n=r.PRNG,nt(a,"NAME","betaprime"),i&&i.prng?(nt(a,"seed",null),nt(a,"seedLength",null),MH(a,"state",kH(null),Ljr),nt(a,"stateLength",null),nt(a,"byteLength",null),nt(a,"toJSON",kH(null))):(I0(a,"seed",o),I0(a,"seedLength",v),MH(a,"state",l,p),I0(a,"stateLength",f),I0(a,"byteLength",c),nt(a,"toJSON",m)),nt(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=Pjr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return GH(r,e,t)}function d(g,y){return jH(g)||jH(y)||g<=0||y<=0?NaN:GH(r,g,y)}}VH.exports=Fjr});var HH=s((U2e,UH)=>{"use strict";var Mjr=M3(),Bjr=Mjr();UH.exports=Bjr});var zH=s((H2e,DH)=>{"use strict";var kjr=w(),WH=HH(),jjr=M3();kjr(WH,"factory",jjr);DH.exports=WH});var JH=s((W2e,XH)=>{"use strict";var Cjr=Q();function Gjr(r){return Cjr(r)===r&&r>0}XH.exports=Gjr});var B3=s((D2e,xH)=>{"use strict";var Vjr=JH();xH.exports=Vjr});var ZH=s((z2e,YH)=>{"use strict";function Ujr(r){return r>=0&&r<=1}YH.exports=Ujr});var QH=s((X2e,$H)=>{"use strict";var Hjr=ZH();$H.exports=Hjr});var eW=s((J2e,rW)=>{"use strict";var Wjr=ae().isPrimitive,Djr=qn().isPrimitive,KH=q();function zjr(r,e){return Wjr(r)?Djr(e)?null:new TypeError(KH("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(KH("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}rW.exports=zjr});var iW=s((x2e,tW)=>{"use strict";function Xjr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}tW.exports=Xjr});var aW=s((Y2e,nW)=>{"use strict";var Jjr=E();function xjr(r){return r===0||Jjr(r)?r:r<0?-1:1}nW.exports=xjr});var L0=s((Z2e,sW)=>{"use strict";var Yjr=aW();sW.exports=Yjr});var oW=s(($2e,uW)=>{"use strict";var Zjr=W(),$jr=1/12,Qjr=1/360,Kjr=1/1260;function rCr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=Zjr(r,2),($jr-(Qjr-Kjr/e)/e)/r}}uW.exports=rCr});var vW=s((Q2e,fW)=>{"use strict";var k3=Q(),eCr=L0(),tCr=C(),j3=Y(),P0=P(),R0=oW(),iCr=1/6;function nCr(r,e,t){var i,n,a,u,o,v,f,c,l,p,m,h,d,g,y,N,A,G,T,J,or,z,vu,zr,gr,Hn;for(J=k3((e+1)*t),f=e-J+1,or=1-t,z=t/or,c=(e+1)*z,u=e*t*or,a=tCr(u),g=1.15+2.53*a,d=-.0873+.0248*g+.01*t,y=e*t+.5,i=(2.83+5.1/g)*a,h=.92-4.2/g,n=.86*h,A=(J+.5)*P0((J+1)/(z*f)),A+=R0(J)+R0(e-J);;){if(gr=r(),gr<=n)return zr=gr/h-.43,z=zr*(2*d/(.5-j3(zr))+g)+y,k3(z);if(gr>=h?zr=r()-.5:(zr=gr/h-.93,zr=eCr(zr)*.5-zr,gr=h*r()),l=.5-j3(zr),T=k3(zr*(2*d/l+g)+y),!(T<0||T>e))if(gr=gr*i/(d/(l*l)+g),p=j3(T-J),p>15){if(gr=P0(gr),o=p/u,v=(p/3+.625)*p,v+=iCr,v/=u,o*=v+.5,vu=-(p*p)/(2*u),gr<vu-o||gr<=vu+o&&(m=e-T+1,Hn=A+(e+1)*P0(f/m),Hn+=(T+.5)*P0(m*z/(T+1)),Hn+=-(R0(T)+R0(e-T)),gr<=Hn))return T}else{if(N=1,J<T)for(G=J;G<=T;G++)N*=c/G-z;else if(J>T)for(G=T;G<=J;G++)gr*=c/G-z;if(gr<=N)return T}}}fW.exports=nCr});var pW=s((K2e,lW)=>{"use strict";var aCr=iW(),sCr=vW();function cW(r,e,t){return t>.5?e-cW(r,e,1-t):e*t<10?aCr(r,e,t):sCr(r,e,t)}lW.exports=cW});var C3=s((r1e,wW)=>{"use strict";var me=w(),F0=R(),gW=F(),mW=I(),dW=_(),hW=O(),yW=S(),uCr=k(),qW=E(),oCr=B3(),fCr=QH(),M0=X().factory,vCr=M(),B0=q(),cCr=eW(),bW=pW();function lCr(){var r,e,t,i,n,a;if(arguments.length===0)e=M0();else if(arguments.length===1){if(r=arguments[0],!mW(r))throw new TypeError(B0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hW(r,"prng")){if(!dW(r.prng))throw new TypeError(B0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=M0(r)}else{if(n=arguments[0],a=arguments[1],i=cCr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!mW(r))throw new TypeError(B0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hW(r,"prng")){if(!dW(r.prng))throw new TypeError(B0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=M0(r)}else e=M0()}return n===void 0?t=h:t=m,me(t,"NAME","binomial"),r&&r.prng?(me(t,"seed",null),me(t,"seedLength",null),gW(t,"state",yW(null),uCr),me(t,"stateLength",null),me(t,"byteLength",null),me(t,"toJSON",yW(null)),me(t,"PRNG",e)):(F0(t,"seed",u),F0(t,"seedLength",o),gW(t,"state",c,l),F0(t,"stateLength",v),F0(t,"byteLength",f),me(t,"toJSON",p),me(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=vCr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return bW(e,n,a)}function h(d,g){return qW(d)||qW(g)||!oCr(d)||!fCr(g)?NaN:bW(e,d,g)}}wW.exports=lCr});var NW=s((e1e,EW)=>{"use strict";var pCr=C3(),gCr=pCr();EW.exports=gCr});var SW=s((t1e,OW)=>{"use strict";var mCr=w(),AW=NW(),dCr=C3();mCr(AW,"factory",dCr);OW.exports=AW});var IW=s((i1e,TW)=>{"use strict";var hCr=C(),yCr=P(),qCr=Tt(),bCr=St(),wCr=He();function ECr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=hCr(-2*yCr(n)),o=wCr*a,t=u*bCr(o),e=!1,u*qCr(o)}return e=!0,t}}TW.exports=ECr});var LW=s((n1e,_W)=>{"use strict";var NCr=C(),ACr=P(),OCr=St(),SCr=_r(),TCr=OCr(SCr);function ICr(r){var e=NCr(-2*ACr(r));return e*TCr}_W.exports=ICr});var RW=s((a1e,PW)=>{"use strict";var _Cr=C(),LCr=P(),PCr=St(),RCr=He();function FCr(r){var e=_Cr(-2*LCr(r)),t=RCr*r;return e*PCr(t)}PW.exports=FCr});var G3=s((s1e,kW)=>{"use strict";var kr=w(),k0=R(),FW=F(),MCr=I(),BCr=_(),kCr=fr().isPrimitive,Bn=O(),jCr=Kr(),MW=X().factory,BW=S(),CCr=k(),GCr=M(),kn=q(),VCr=IW(),UCr=LW(),HCr=RW();function WCr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!MCr(r))throw new TypeError(kn("invalid argument. Must provide an object. Value: `%s`.",r));if(Bn(r,"copy")&&(n.copy=r.copy,!kCr(r.copy)))throw new TypeError(kn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Bn(r,"prng")){if(!BCr(r.prng))throw new TypeError(kn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Bn(r,"state")){if(n.state=r.state,!jCr(r.state))throw new TypeError(kn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Bn(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(kn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=MW(n),e=i.normalized):n.seed=null:(i=MW(n),e=i.normalized),t=VCr(e),kr(t,"NAME","box-muller"),n.seed===null?(kr(t,"seed",null),kr(t,"seedLength",null)):(k0(t,"seed",a),k0(t,"seedLength",u)),r&&r.prng?(FW(t,"state",BW(null),CCr),kr(t,"stateLength",null),kr(t,"byteLength",null),kr(t,"toJSON",BW(null))):(FW(t,"state",f,c),k0(t,"stateLength",o),k0(t,"byteLength",v),kr(t,"toJSON",l)),kr(t,"PRNG",e),Bn(e,"MIN")?(kr(t,"MIN",UCr(e.MIN)),kr(t,"MAX",HCr(e.MIN))):(kr(t,"MIN",null),kr(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=GCr(i.state),p.params=[],p}}kW.exports=WCr});var CW=s((u1e,jW)=>{"use strict";var DCr=G3(),zCr=DCr();jW.exports=zCr});var UW=s((o1e,VW)=>{"use strict";var XCr=w(),GW=CW(),JCr=G3();XCr(GW,"factory",JCr);VW.exports=GW});var DW=s((f1e,WW)=>{"use strict";var xCr=j().isPrimitive,YCr=D().isPrimitive,HW=q(),ZCr=sr();function $Cr(r,e){return!xCr(r)||ZCr(r)?new TypeError(HW("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):YCr(e)?null:new TypeError(HW("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}WW.exports=$Cr});var XW=s((v1e,zW)=>{"use strict";var QCr=G2(),KCr=_r();function rGr(r,e,t){return e+t*QCr(KCr*(r()-.5))}zW.exports=rGr});var V3=s((c1e,rD)=>{"use strict";var at=w(),j0=R(),JW=F(),xW=I(),YW=_(),ZW=O(),$W=S(),eGr=k(),QW=E(),Ti=it().factory,tGr=M(),C0=q(),iGr=DW(),KW=XW();function nGr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Ti();else if(arguments.length===1){if(t=arguments[0],!xW(t))throw new TypeError(C0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(ZW(t,"prng")){if(!YW(t.prng))throw new TypeError(C0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ti({prng:t.prng})}else e=Ti(t)}else{if(u=arguments[0],r=arguments[1],a=iGr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!xW(t))throw new TypeError(C0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(ZW(t,"prng")){if(!YW(t.prng))throw new TypeError(C0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ti({prng:t.prng})}else e=Ti(t)}else e=Ti()}return u===void 0?n=d:n=h,i=e.PRNG,at(n,"NAME","cauchy"),t&&t.prng?(at(n,"seed",null),at(n,"seedLength",null),JW(n,"state",$W(null),eGr),at(n,"stateLength",null),at(n,"byteLength",null),at(n,"toJSON",$W(null))):(j0(n,"seed",o),j0(n,"seedLength",v),JW(n,"state",l,p),j0(n,"stateLength",f),j0(n,"byteLength",c),at(n,"toJSON",m)),at(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=tGr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return KW(e,u,r)}function d(g,y){return QW(g)||QW(y)||y<=0?NaN:KW(e,g,y)}}rD.exports=nGr});var tD=s((l1e,eD)=>{"use strict";var aGr=V3(),sGr=aGr();eD.exports=sGr});var aD=s((p1e,nD)=>{"use strict";var uGr=w(),iD=tD(),oGr=V3();uGr(iD,"factory",oGr);nD.exports=iD});var U3=s((g1e,cD)=>{"use strict";var st=w(),G0=R(),sD=F(),fGr=D().isPrimitive,uD=I(),oD=_(),fD=O(),vD=S(),vGr=k(),cGr=E(),Ii=Si().factory,lGr=M(),V0=q();function pGr(){var r,e,t,i,n;if(arguments.length===0)r=Ii();else if(arguments.length===1&&uD(arguments[0]))if(t=arguments[0],fD(t,"prng")){if(!oD(t.prng))throw new TypeError(V0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ii({prng:t.prng})}else r=Ii(t);else{if(n=arguments[0],!fGr(n))throw new TypeError(V0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!uD(t))throw new TypeError(V0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(fD(t,"prng")){if(!oD(t.prng))throw new TypeError(V0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ii(n/2,.5,{prng:t.prng})}else r=Ii(n/2,.5,t)}else r=Ii(n/2,.5)}return n===void 0?i=m:i=p,e=r.PRNG,st(i,"NAME","chisquare"),t&&t.prng?(st(i,"seed",null),st(i,"seedLength",null),sD(i,"state",vD(null),vGr),st(i,"stateLength",null),st(i,"byteLength",null),st(i,"toJSON",vD(null))):(G0(i,"seed",a),G0(i,"seedLength",u),sD(i,"state",f,c),G0(i,"stateLength",o),G0(i,"byteLength",v),st(i,"toJSON",l)),st(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=lGr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function m(h){return cGr(h)||h<=0?NaN:r(h/2,.5)}}cD.exports=pGr});var pD=s((m1e,lD)=>{"use strict";var gGr=U3(),mGr=gGr();lD.exports=mGr});var jn=s((d1e,mD)=>{"use strict";var dGr=w(),gD=pD(),hGr=U3();dGr(gD,"factory",hGr);mD.exports=gD});var H3=s((h1e,ED)=>{"use strict";var ut=w(),U0=R(),dD=F(),yGr=D().isPrimitive,hD=I(),yD=_(),qD=O(),bD=S(),qGr=k(),bGr=E(),_i=jn().factory,wGr=M(),wD=C(),H0=q();function EGr(){var r,e,t,i,n;if(arguments.length===0)r=_i();else if(arguments.length===1&&hD(arguments[0]))if(t=arguments[0],qD(t,"prng")){if(!yD(t.prng))throw new TypeError(H0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=_i({prng:t.prng})}else r=_i(t);else{if(n=arguments[0],!yGr(n))throw new TypeError(H0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!hD(t))throw new TypeError(H0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(qD(t,"prng")){if(!yD(t.prng))throw new TypeError(H0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=_i(n,{prng:t.prng})}else r=_i(n,t)}else r=_i(n)}return n===void 0?i=m:i=p,e=r.PRNG,ut(i,"NAME","chi"),t&&t.prng?(ut(i,"seed",null),ut(i,"seedLength",null),dD(i,"state",bD(null),qGr),ut(i,"stateLength",null),ut(i,"byteLength",null),ut(i,"toJSON",bD(null))):(U0(i,"seed",a),U0(i,"seedLength",u),dD(i,"state",f,c),U0(i,"stateLength",o),U0(i,"byteLength",v),ut(i,"toJSON",l)),ut(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=wGr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return wD(r())}function m(h){return bGr(h)||h<=0?NaN:wD(r(h))}}ED.exports=EGr});var AD=s((y1e,ND)=>{"use strict";var NGr=H3(),AGr=NGr();ND.exports=AGr});var TD=s((q1e,SD)=>{"use strict";var OGr=w(),OD=AD(),SGr=H3();OGr(OD,"factory",SGr);SD.exports=OD});var LD=s((b1e,_D)=>{"use strict";var TGr=j().isPrimitive,IGr=D().isPrimitive,ID=q(),_Gr=sr();function LGr(r,e){return!TGr(r)||_Gr(r)?new TypeError(ID("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):IGr(e)?null:new TypeError(ID("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}_D.exports=LGr});var RD=s((w1e,PD)=>{"use strict";var W3=E(),PGr=Ki(),RGr=_r();function FGr(r,e,t){var i;return W3(r)||W3(e)||W3(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+PGr(i)/RGr)/2)}PD.exports=FGr});var MD=s((E1e,FD)=>{"use strict";var MGr=S(),BGr=Ta().factory,D3=E(),kGr=Ki(),jGr=_r();function CGr(r,e){if(D3(r)||D3(e)||e<0)return MGr(NaN);if(e===0)return BGr(r);return t;function t(i){var n;return D3(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+kGr(n)/jGr)/2)}}FD.exports=CGr});var jD=s((N1e,kD)=>{"use strict";var GGr=w(),BD=RD(),VGr=MD();GGr(BD,"factory",VGr);kD.exports=BD});var z3=s((A1e,CD)=>{"use strict";var UGr=jD(),HGr=1e4,WGr=1e-12;function DGr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<HGr;){if(u=(i+n)/2,n-i<WGr)return u;a=UGr(u,e,t),r>a?i=u:n=u,o+=1}return u}CD.exports=DGr});var VD=s((O1e,GD)=>{"use strict";var X3=E(),zGr=z3();function XGr(r,e,t){return X3(e)||X3(t)||X3(r)||t<0||r<0||r>1?NaN:t===0?e:zGr(r,e,t)}GD.exports=XGr});var HD=s((S1e,UD)=>{"use strict";var JGr=S(),xGr=x1().factory,J3=E(),YGr=z3();function ZGr(r,e){if(J3(r)||J3(e)||e<0)return JGr(NaN);if(e===0)return xGr(r);return t;function t(i){return J3(i)||i<0||i>1?NaN:YGr(i,r,e)}}UD.exports=ZGr});var zD=s((T1e,DD)=>{"use strict";var $Gr=w(),WD=VD(),QGr=HD();$Gr(WD,"factory",QGr);DD.exports=WD});var JD=s((I1e,XD)=>{"use strict";var KGr=zD();function rVr(r,e,t){return KGr(r(),e,t)}XD.exports=rVr});var x3=s((_1e,ez)=>{"use strict";var de=w(),W0=R(),xD=F(),YD=I(),ZD=_(),$D=O(),QD=S(),eVr=k(),D0=X().factory,KD=E(),tVr=M(),z0=q(),iVr=LD(),rz=JD();function nVr(){var r,e,t,i,n,a;if(arguments.length===0)e=D0();else if(arguments.length===1){if(r=arguments[0],!YD(r))throw new TypeError(z0("invalid argument. Options argument must be an object. Value: `%s`.",r));if($D(r,"prng")){if(!ZD(r.prng))throw new TypeError(z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=D0(r)}else{if(n=arguments[0],a=arguments[1],i=iVr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!YD(r))throw new TypeError(z0("invalid argument. Options argument must be an object. Value: `%s`.",r));if($D(r,"prng")){if(!ZD(r.prng))throw new TypeError(z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=D0(r)}else e=D0()}return n===void 0?t=h:t=m,de(t,"NAME","cosine"),r&&r.prng?(de(t,"seed",null),de(t,"seedLength",null),xD(t,"state",QD(null),eVr),de(t,"stateLength",null),de(t,"byteLength",null),de(t,"toJSON",QD(null)),de(t,"PRNG",e)):(W0(t,"seed",u),W0(t,"seedLength",o),xD(t,"state",c,l),W0(t,"stateLength",v),W0(t,"byteLength",f),de(t,"toJSON",p),de(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=tVr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return rz(e,n,a)}function h(d,g){return KD(d)||KD(g)||g<=0?NaN:rz(e,d,g)}}ez.exports=nVr});var iz=s((L1e,tz)=>{"use strict";var aVr=x3(),sVr=aVr();tz.exports=sVr});var sz=s((P1e,az)=>{"use strict";var uVr=w(),nz=iz(),oVr=x3();uVr(nz,"factory",oVr);az.exports=nz});var vz=s((R1e,fz)=>{"use strict";var uz=Cr().isPrimitive,Y3=q(),oz=sr();function fVr(r,e){return!uz(r)||oz(r)?new TypeError(Y3("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!uz(e)||oz(e)?new TypeError(Y3("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(Y3("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}fz.exports=fVr});var pz=s((F1e,lz)=>{"use strict";var Z3=sn(),Li=Q();function cz(r,e,t){var i,n,a,u,o,v,f,c,l;if(a=t-e,a===0)return e;if(f=r.MIN,c=r.MAX,n=c-f,n===a)return r()-f+e;if(n<a)for(u=0;;){for(a===Z3?(u=Li(a/(n+1)),a%(n+1)===n&&(u+=1)):u=Li((a+1)/(n+1)),i=0,v=1;v<=u;){if(i+=(r()-f)*v,v*n===a-v+1)return i;v*=n+1}if(l=cz(r,0,Li(a/v)),!(l>Z3/v)&&(l*=v,i+=l,!(i>a)))return i+e}for(n===Z3?(o=Li(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Li((n+1)/(a+1));;)if(i=r()-f,i=Li(i/o),i<=a)return i+e}lz.exports=cz});var $3=s((M1e,wz)=>{"use strict";var he=w(),X0=R(),gz=F(),mz=I(),dz=_(),hz=O(),yz=S(),vVr=k(),J0=X().factory,qz=E(),Pi=Ir(),cVr=M(),ot=q(),lVr=vz(),bz=pz();function pVr(){var r,e,t,i,n,a;if(arguments.length===0)e=J0();else if(arguments.length===1){if(r=arguments[0],!mz(r))throw new TypeError(ot("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hz(r,"prng")){if(!dz(r.prng))throw new TypeError(ot("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Pi(e.MIN))throw new TypeError(ot("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Pi(e.MAX))throw new TypeError(ot("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=J0(r)}else{if(n=arguments[0],a=arguments[1],i=lVr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!mz(r))throw new TypeError(ot("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hz(r,"prng")){if(!dz(r.prng))throw new TypeError(ot("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Pi(e.MIN))throw new TypeError(ot("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Pi(e.MAX))throw new TypeError(ot("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=J0(r)}else e=J0()}return n===void 0?t=h:t=m,he(t,"NAME","discrete-uniform"),r&&r.prng?(he(t,"seed",null),he(t,"seedLength",null),gz(t,"state",yz(null),vVr),he(t,"stateLength",null),he(t,"byteLength",null),he(t,"toJSON",yz(null)),he(t,"PRNG",e)):(X0(t,"seed",u),X0(t,"seedLength",o),gz(t,"state",c,l),X0(t,"stateLength",v),X0(t,"byteLength",f),he(t,"toJSON",p),he(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=cVr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return bz(e,n,a)}function h(d,g){return qz(d)||qz(g)||!Pi(d)||!Pi(g)||d>g?NaN:bz(e,d,g)}}wz.exports=pVr});var Nz=s((B1e,Ez)=>{"use strict";var gVr=$3(),mVr=gVr();Ez.exports=mVr});var Sz=s((k1e,Oz)=>{"use strict";var dVr=w(),Az=Nz(),hVr=$3();dVr(Az,"factory",hVr);Oz.exports=Az});var _z=s((j1e,Iz)=>{"use strict";var yVr=D().isPrimitive,qVr=ae().isPrimitive,Tz=q();function bVr(r,e){return qVr(r)?yVr(e)?null:new TypeError(Tz("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Tz("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}Iz.exports=bVr});var Pz=s((C1e,Lz)=>{"use strict";var wVr=P();function EVr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*wVr(i)}Lz.exports=EVr});var Q3=s((G1e,Gz)=>{"use strict";var ye=w(),x0=R(),Rz=F(),Fz=I(),Mz=_(),Bz=O(),kz=S(),NVr=k(),Y0=X().factory,jz=E(),AVr=B3(),OVr=M(),Z0=q(),SVr=_z(),Cz=Pz();function TVr(){var r,e,t,i,n,a;if(arguments.length===0)e=Y0();else if(arguments.length===1){if(t=arguments[0],!Fz(t))throw new TypeError(Z0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Bz(t,"prng")){if(!Mz(t.prng))throw new TypeError(Z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Y0(t)}else{if(a=arguments[0],r=arguments[1],n=SVr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!Fz(t))throw new TypeError(Z0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Bz(t,"prng")){if(!Mz(t.prng))throw new TypeError(Z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Y0(t)}else e=Y0()}return a===void 0?i=h:i=m,ye(i,"NAME","erlang"),t&&t.prng?(ye(i,"seed",null),ye(i,"seedLength",null),Rz(i,"state",kz(null),NVr),ye(i,"stateLength",null),ye(i,"byteLength",null),ye(i,"toJSON",kz(null)),ye(i,"PRNG",e)):(x0(i,"seed",u),x0(i,"seedLength",o),Rz(i,"state",c,l),x0(i,"stateLength",v),x0(i,"byteLength",f),ye(i,"toJSON",p),ye(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=OVr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return Cz(e,a,r)}function h(d,g){return jz(d)||jz(g)||!AVr(d)||g<=0?NaN:Cz(e,d,g)}}Gz.exports=TVr});var Uz=s((V1e,Vz)=>{"use strict";var IVr=Q3(),_Vr=IVr();Vz.exports=_Vr});var Dz=s((U1e,Wz)=>{"use strict";var LVr=w(),Hz=Uz(),PVr=Q3();LVr(Hz,"factory",PVr);Wz.exports=Hz});var Xz=s((H1e,zz)=>{"use strict";var RVr=P();function FVr(r,e){return-RVr(1-r())/e}zz.exports=FVr});var K3=s((W1e,Kz)=>{"use strict";var qe=w(),$0=R(),Jz=F(),MVr=D().isPrimitive,xz=I(),Yz=_(),Zz=O(),$z=S(),BVr=k(),Q0=X().factory,kVr=E(),jVr=M(),K0=q(),Qz=Xz();function CVr(){var r,e,t,i;if(arguments.length===0)t=Q0();else if(arguments.length===1&&xz(arguments[0]))if(e=arguments[0],Zz(e,"prng")){if(!Yz(e.prng))throw new TypeError(K0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Q0(e);else{if(r=arguments[0],!MVr(r))throw new TypeError(K0("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!xz(e))throw new TypeError(K0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Zz(e,"prng")){if(!Yz(e.prng))throw new TypeError(K0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Q0(e)}else t=Q0()}return r===void 0?i=p:i=l,qe(i,"NAME","exponential"),e&&e.prng?(qe(i,"seed",null),qe(i,"seedLength",null),Jz(i,"state",$z(null),BVr),qe(i,"stateLength",null),qe(i,"byteLength",null),qe(i,"toJSON",$z(null)),qe(i,"PRNG",t)):($0(i,"seed",n),$0(i,"seedLength",a),Jz(i,"state",v,f),$0(i,"stateLength",u),$0(i,"byteLength",o),qe(i,"toJSON",c),qe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=jVr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return Qz(t,r)}function p(m){return kVr(m)||m<=0?NaN:Qz(t,m)}}Kz.exports=CVr});var eX=s((D1e,rX)=>{"use strict";var GVr=K3(),VVr=GVr();rX.exports=VVr});var nX=s((z1e,iX)=>{"use strict";var UVr=w(),tX=eX(),HVr=K3();UVr(tX,"factory",HVr);iX.exports=tX});var oX=s((X1e,uX)=>{"use strict";var aX=D().isPrimitive,sX=q();function WVr(r,e){return aX(r)?aX(e)?null:new TypeError(sX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(sX("invalid argument. First argument must be a positive number. Value: `%s`.",r))}uX.exports=WVr});var vX=s((J1e,fX)=>{"use strict";function DVr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}fX.exports=DVr});var rf=s((x1e,yX)=>{"use strict";var ft=w(),rs=R(),cX=F(),lX=I(),pX=_(),gX=O(),mX=S(),zVr=k(),Ri=jn().factory,dX=E(),XVr=M(),es=q(),JVr=oX(),hX=vX();function xVr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Ri();else if(arguments.length===1){if(e=arguments[0],!lX(e))throw new TypeError(es("invalid argument. Options argument must be an object. Value: `%s`.",e));if(gX(e,"prng")){if(!pX(e.prng))throw new TypeError(es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Ri({prng:e.prng})}else r=Ri(e)}else{if(a=arguments[0],u=arguments[1],n=JVr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!lX(e))throw new TypeError(es("invalid argument. Options argument must be an object. Value: `%s`.",e));if(gX(e,"prng")){if(!pX(e.prng))throw new TypeError(es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Ri({prng:e.prng})}else r=Ri(e)}else r=Ri()}return a===void 0?i=d:i=h,t=r.PRNG,ft(i,"NAME","f"),e&&e.prng?(ft(i,"seed",null),ft(i,"seedLength",null),cX(i,"state",mX(null),zVr),ft(i,"stateLength",null),ft(i,"byteLength",null),ft(i,"toJSON",mX(null))):(rs(i,"seed",o),rs(i,"seedLength",v),cX(i,"state",l,p),rs(i,"stateLength",f),rs(i,"byteLength",c),ft(i,"toJSON",m)),ft(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=XVr(t.state),a===void 0?g.params=[]:g.params=[a,u],g}function h(){return hX(r,a,u)}function d(g,y){return dX(g)||dX(y)||g<=0||y<=0?NaN:hX(r,g,y)}}yX.exports=xVr});var bX=s((Y1e,qX)=>{"use strict";var YVr=rf(),ZVr=YVr();qX.exports=ZVr});var NX=s((Z1e,EX)=>{"use strict";var $Vr=w(),wX=bX(),QVr=rf();$Vr(wX,"factory",QVr);EX.exports=wX});var SX=s(($1e,OX)=>{"use strict";var AX=D().isPrimitive,KVr=j().isPrimitive,ef=sr(),tf=q();function rUr(r,e,t){return!AX(r)||ef(r)?new TypeError(tf("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!AX(e)||ef(e)?new TypeError(tf("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!KVr(t)||ef(t)?new TypeError(tf("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}OX.exports=rUr});var IX=s((Q1e,TX)=>{"use strict";var eUr=W(),tUr=P();function iUr(r,e,t,i){return i+t*eUr(-tUr(r()),-1/e)}TX.exports=iUr});var af=s((K1e,BX)=>{"use strict";var be=w(),ts=R(),_X=F(),LX=I(),PX=_(),RX=O(),FX=S(),nUr=k(),is=X().factory,nf=E(),aUr=M(),ns=q(),sUr=SX(),MX=IX();function uUr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=is();else if(arguments.length===1){if(e=arguments[0],!LX(e))throw new TypeError(ns("invalid argument. Options argument must be an object. Value: `%s`.",e));if(RX(e,"prng")){if(!PX(e.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=is(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=sUr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!LX(e))throw new TypeError(ns("invalid argument. Options argument must be an object. Value: `%s`.",e));if(RX(e,"prng")){if(!PX(e.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=is(e)}else t=is()}return r===void 0?i=d:i=h,be(i,"NAME","frechet"),e&&e.prng?(be(i,"seed",null),be(i,"seedLength",null),_X(i,"state",FX(null),nUr),be(i,"stateLength",null),be(i,"byteLength",null),be(i,"toJSON",FX(null)),be(i,"PRNG",t)):(ts(i,"seed",o),ts(i,"seedLength",v),_X(i,"state",l,p),ts(i,"stateLength",f),ts(i,"byteLength",c),be(i,"toJSON",m),be(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=aUr(t.state),r===void 0?g.params=[]:g.params=[r,a,u],g}function h(){return MX(t,r,a,u)}function d(g,y,N){return nf(g)||nf(y)||nf(N)||g<=0||y<=0?NaN:MX(t,g,y,N)}}BX.exports=uUr});var jX=s((r3e,kX)=>{"use strict";var oUr=af(),fUr=oUr();kX.exports=fUr});var VX=s((e3e,GX)=>{"use strict";var vUr=w(),CX=jX(),cUr=af();vUr(CX,"factory",cUr);GX.exports=CX});var WX=s((t3e,HX)=>{"use strict";var lUr=Q(),UX=P();function pUr(r,e){var t=r();return t===0&&(t=r()),lUr(UX(t)/UX(1-e))}HX.exports=pUr});var sf=s((i3e,ZX)=>{"use strict";var we=w(),as=R(),DX=F(),zX=I(),gUr=qn().isPrimitive,XX=_(),JX=O(),xX=S(),mUr=k(),ss=X().factory,dUr=E(),hUr=M(),us=q(),YX=WX();function yUr(){var r,e,t,i;if(arguments.length===0)e=ss();else if(arguments.length===1&&zX(arguments[0]))if(r=arguments[0],JX(r,"prng")){if(!XX(r.prng))throw new TypeError(us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ss(r);else{if(i=arguments[0],!gUr(i))throw new TypeError(us("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!zX(r))throw new TypeError(us("invalid argument. Options argument must be an object. Value: `%s`.",r));if(JX(r,"prng")){if(!XX(r.prng))throw new TypeError(us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ss(r)}else e=ss()}return i===void 0?t=p:t=l,we(t,"NAME","geometric"),r&&r.prng?(we(t,"seed",null),we(t,"seedLength",null),DX(t,"state",xX(null),mUr),we(t,"stateLength",null),we(t,"byteLength",null),we(t,"toJSON",xX(null)),we(t,"PRNG",e)):(as(t,"seed",n),as(t,"seedLength",a),DX(t,"state",v,f),as(t,"stateLength",u),as(t,"byteLength",o),we(t,"toJSON",c),we(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=hUr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return YX(e,i)}function p(m){return dUr(m)||m<0||m>1?NaN:YX(e,m)}}ZX.exports=yUr});var QX=s((n3e,$X)=>{"use strict";var qUr=sf(),bUr=qUr();$X.exports=bUr});var eJ=s((a3e,rJ)=>{"use strict";var wUr=w(),KX=QX(),EUr=sf();wUr(KX,"factory",EUr);rJ.exports=KX});var nJ=s((s3e,iJ)=>{"use strict";var NUr=j().isPrimitive,AUr=D().isPrimitive,tJ=q(),OUr=sr();function SUr(r,e){return!NUr(r)||OUr(r)?new TypeError(tJ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):AUr(e)?null:new TypeError(tJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}iJ.exports=SUr});var uJ=s((u3e,sJ)=>{"use strict";var aJ=P();function TUr(r,e,t){return e-t*aJ(-aJ(r()))}sJ.exports=TUr});var uf=s((o3e,mJ)=>{"use strict";var Ee=w(),os=R(),oJ=F(),fJ=I(),vJ=_(),cJ=O(),lJ=S(),IUr=k(),fs=X().factory,pJ=E(),_Ur=M(),vs=q(),LUr=nJ(),gJ=uJ();function PUr(){var r,e,t,i,n,a;if(arguments.length===0)t=fs();else if(arguments.length===1){if(e=arguments[0],!fJ(e))throw new TypeError(vs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(cJ(e,"prng")){if(!vJ(e.prng))throw new TypeError(vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=fs(e)}else{if(a=arguments[0],r=arguments[1],n=LUr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!fJ(e))throw new TypeError(vs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(cJ(e,"prng")){if(!vJ(e.prng))throw new TypeError(vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=fs(e)}else t=fs()}return a===void 0?i=h:i=m,Ee(i,"NAME","gumbel"),e&&e.prng?(Ee(i,"seed",null),Ee(i,"seedLength",null),oJ(i,"state",lJ(null),IUr),Ee(i,"stateLength",null),Ee(i,"byteLength",null),Ee(i,"toJSON",lJ(null)),Ee(i,"PRNG",t)):(os(i,"seed",u),os(i,"seedLength",o),oJ(i,"state",c,l),os(i,"stateLength",v),os(i,"byteLength",f),Ee(i,"toJSON",p),Ee(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=_Ur(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return gJ(t,a,r)}function h(d,g){return pJ(d)||pJ(g)||g<=0?NaN:gJ(t,d,g)}}mJ.exports=PUr});var hJ=s((f3e,dJ)=>{"use strict";var RUr=uf(),FUr=RUr();dJ.exports=FUr});var bJ=s((v3e,qJ)=>{"use strict";var MUr=w(),yJ=hJ(),BUr=uf();MUr(yJ,"factory",BUr);qJ.exports=yJ});var EJ=s((c3e,wJ)=>{"use strict";var kUr=Q();function jUr(r){return kUr(r)===r&&r>=0}wJ.exports=jUr});var AJ=s((l3e,NJ)=>{"use strict";var CUr=EJ();NJ.exports=CUr});var SJ=s((p3e,OJ)=>{"use strict";var of=Xe().isPrimitive,Cn=q();function GUr(r,e,t){return of(r)?of(e)?of(t)?t>r?new RangeError(Cn("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(Cn("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(Cn("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(Cn("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(Cn("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}OJ.exports=GUr});var TJ=s((g3e,VUr)=>{VUr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var _J=s((m3e,IJ)=>{"use strict";var UUr=E(),HUr=Ir(),WUr=ri(),DUr=L(),zUr=TJ(),XUr=170;function JUr(r){return UUr(r)?NaN:HUr(r)?r<0?NaN:r<=XUr?zUr[r]:DUr:WUr(r+1)}IJ.exports=JUr});var PJ=s((d3e,LJ)=>{"use strict";var xUr=_J();LJ.exports=xUr});var FJ=s((h3e,RJ)=>{"use strict";var vt=PJ();function YUr(r,e,t,i){var n,a,u;for(i<t?(n=vt(t)*vt(e+t-i)/(vt(e+t)*vt(t-i)),u=0):(n=vt(e)*vt(i)/(vt(i-t)*vt(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}RJ.exports=YUr});var BJ=s((y3e,MJ)=>{"use strict";var cs=FJ();function ZUr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=cs(r,n,a,u),t-o):(a=t,n=e-t,o=cs(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=cs(r,n,a,u),o):(n=e-t,a=t,o=cs(r,n,a,u),i-o))}MJ.exports=ZUr});var vf=s((q3e,WJ)=>{"use strict";var Ne=w(),ls=R(),kJ=F(),jJ=I(),CJ=_(),GJ=O(),VJ=S(),$Ur=k(),ps=X().factory,ff=AJ(),UJ=L(),QUr=M(),gs=q(),KUr=SJ(),HJ=BJ();function rHr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=ps();else if(arguments.length===1){if(r=arguments[0],!jJ(r))throw new TypeError(gs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(GJ(r,"prng")){if(!CJ(r.prng))throw new TypeError(gs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ps(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=KUr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!jJ(r))throw new TypeError(gs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(GJ(r,"prng")){if(!CJ(r.prng))throw new TypeError(gs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ps(r)}else e=ps()}return n===void 0?t=d:t=h,Ne(t,"NAME","hypergeometric"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),kJ(t,"state",VJ(null),$Ur),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",VJ(null)),Ne(t,"PRNG",e)):(ls(t,"seed",o),ls(t,"seedLength",v),kJ(t,"state",l,p),ls(t,"stateLength",f),ls(t,"byteLength",c),Ne(t,"toJSON",m),Ne(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=QUr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return HJ(e,n,a,u)}function d(g,y,N){return g===UJ||y===UJ||!ff(g)||!ff(y)||!ff(N)||N>g?NaN:HJ(e,g,y,N)}}WJ.exports=rHr});var zJ=s((b3e,DJ)=>{"use strict";var eHr=vf(),tHr=eHr();DJ.exports=tHr});var xJ=s((w3e,JJ)=>{"use strict";var iHr=w(),XJ=zJ(),nHr=vf();iHr(XJ,"factory",nHr);JJ.exports=XJ});var QJ=s((E3e,$J)=>{"use strict";var YJ=D().isPrimitive,ZJ=q();function aHr(r,e){return YJ(r)?YJ(e)?null:new TypeError(ZJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(ZJ("invalid argument. First argument must be a positive number. Value: `%s`.",r))}$J.exports=aHr});var cf=s((N3e,ax)=>{"use strict";var ct=w(),ms=R(),KJ=F(),rx=I(),ex=_(),tx=O(),ix=S(),sHr=k(),Fi=Si().factory,nx=E(),uHr=M(),ds=q(),oHr=QJ();function fHr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Fi();else if(arguments.length===1){if(i=arguments[0],!rx(i))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",i));if(tx(i,"prng")){if(!ex(i.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Fi({prng:i.prng})}else r=Fi(i)}else{if(e=arguments[0],t=arguments[1],u=oHr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!rx(i))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",i));if(tx(i,"prng")){if(!ex(i.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Fi(e,t,{prng:i.prng})}else r=Fi(e,t,i)}else r=Fi(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,ct(a,"NAME","invgamma"),i&&i.prng?(ct(a,"seed",null),ct(a,"seedLength",null),KJ(a,"state",ix(null),sHr),ct(a,"stateLength",null),ct(a,"byteLength",null),ct(a,"toJSON",ix(null))):(ms(a,"seed",o),ms(a,"seedLength",v),KJ(a,"state",l,p),ms(a,"stateLength",f),ms(a,"byteLength",c),ct(a,"toJSON",m)),ct(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=uHr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return 1/r()}function d(g,y){return nx(g)||nx(y)||g<=0||y<=0?NaN:1/r(g,y)}}ax.exports=fHr});var ux=s((A3e,sx)=>{"use strict";var vHr=cf(),cHr=vHr();sx.exports=cHr});var vx=s((O3e,fx)=>{"use strict";var lHr=w(),ox=ux(),pHr=cf();lHr(ox,"factory",pHr);fx.exports=ox});var gx=s((S3e,px)=>{"use strict";var cx=D().isPrimitive,lx=q();function gHr(r,e){return cx(r)?cx(e)?null:new TypeError(lx("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(lx("invalid argument. First argument must be a positive number. Value: `%s`.",r))}px.exports=gHr});var hx=s((T3e,dx)=>{"use strict";var mx=W();function mHr(r,e,t){var i=r();return mx(1-mx(1-i,1/t),1/e)}dx.exports=mHr});var lf=s((I3e,Ox)=>{"use strict";var Ae=w(),hs=R(),yx=F(),qx=I(),bx=_(),wx=O(),Ex=S(),dHr=k(),ys=X().factory,Nx=E(),hHr=M(),qs=q(),yHr=gx(),Ax=hx();function qHr(){var r,e,t,i,n,a;if(arguments.length===0)e=ys();else if(arguments.length===1){if(r=arguments[0],!qx(r))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(wx(r,"prng")){if(!bx(r.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ys(r)}else{if(n=arguments[0],a=arguments[1],i=yHr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!qx(r))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(wx(r,"prng")){if(!bx(r.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ys(r)}else e=ys()}return n===void 0?t=h:t=m,Ae(t,"NAME","kumaraswamy"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),yx(t,"state",Ex(null),dHr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",Ex(null)),Ae(t,"PRNG",e)):(hs(t,"seed",u),hs(t,"seedLength",o),yx(t,"state",c,l),hs(t,"stateLength",v),hs(t,"byteLength",f),Ae(t,"toJSON",p),Ae(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=hHr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return Ax(e,n,a)}function h(d,g){return Nx(d)||Nx(g)||d<=0||g<=0?NaN:Ax(e,d,g)}}Ox.exports=qHr});var Tx=s((_3e,Sx)=>{"use strict";var bHr=lf(),wHr=bHr();Sx.exports=wHr});var Lx=s((L3e,_x)=>{"use strict";var EHr=w(),Ix=Tx(),NHr=lf();EHr(Ix,"factory",NHr);_x.exports=Ix});var Fx=s((P3e,Rx)=>{"use strict";var AHr=j().isPrimitive,OHr=D().isPrimitive,Px=q(),SHr=sr();function THr(r,e){return!AHr(r)||SHr(r)?new TypeError(Px("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):OHr(e)?null:new TypeError(Px("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Rx.exports=THr});var Bx=s((R3e,Mx)=>{"use strict";var IHr=L0(),_Hr=Y(),LHr=P();function PHr(r,e,t){var i=r()-.5;return e-t*IHr(i)*LHr(1-2*_Hr(i))}Mx.exports=PHr});var pf=s((F3e,Wx)=>{"use strict";var Oe=w(),bs=R(),kx=F(),jx=I(),Cx=_(),Gx=O(),Vx=S(),RHr=k(),ws=X().factory,Ux=E(),FHr=M(),Es=q(),MHr=Fx(),Hx=Bx();function BHr(){var r,e,t,i,n,a;if(arguments.length===0)e=ws();else if(arguments.length===1){if(r=arguments[0],!jx(r))throw new TypeError(Es("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Gx(r,"prng")){if(!Cx(r.prng))throw new TypeError(Es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ws(r)}else{if(n=arguments[0],a=arguments[1],i=MHr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!jx(r))throw new TypeError(Es("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Gx(r,"prng")){if(!Cx(r.prng))throw new TypeError(Es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ws(r)}else e=ws()}return n===void 0?t=h:t=m,Oe(t,"NAME","laplace"),r&&r.prng?(Oe(t,"seed",null),Oe(t,"seedLength",null),kx(t,"state",Vx(null),RHr),Oe(t,"stateLength",null),Oe(t,"byteLength",null),Oe(t,"toJSON",Vx(null)),Oe(t,"PRNG",e)):(bs(t,"seed",u),bs(t,"seedLength",o),kx(t,"state",c,l),bs(t,"stateLength",v),bs(t,"byteLength",f),Oe(t,"toJSON",p),Oe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=FHr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return Hx(e,n,a)}function h(d,g){return Ux(d)||Ux(g)||g<=0?NaN:Hx(e,d,g)}}Wx.exports=BHr});var zx=s((M3e,Dx)=>{"use strict";var kHr=pf(),jHr=kHr();Dx.exports=jHr});var xx=s((B3e,Jx)=>{"use strict";var CHr=w(),Xx=zx(),GHr=pf();CHr(Xx,"factory",GHr);Jx.exports=Xx});var $x=s((k3e,Zx)=>{"use strict";var VHr=j().isPrimitive,UHr=D().isPrimitive,Yx=q(),HHr=sr();function WHr(r,e){return!VHr(r)||HHr(r)?new TypeError(Yx("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):UHr(e)?null:new TypeError(Yx("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Zx.exports=WHr});var Kx=s((j3e,Qx)=>{"use strict";var DHr=Z1();function zHr(r,e,t){var i=DHr(1-r()/2,0,1);return e+t/(i*i)}Qx.exports=zHr});var gf=s((C3e,uY)=>{"use strict";var Se=w(),Ns=R(),rY=F(),eY=I(),tY=_(),iY=O(),nY=S(),XHr=k(),As=X().factory,aY=E(),JHr=M(),Os=q(),xHr=$x(),sY=Kx();function YHr(){var r,e,t,i,n,a;if(arguments.length===0)e=As();else if(arguments.length===1){if(r=arguments[0],!eY(r))throw new TypeError(Os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(iY(r,"prng")){if(!tY(r.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=As(r)}else{if(n=arguments[0],a=arguments[1],i=xHr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!eY(r))throw new TypeError(Os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(iY(r,"prng")){if(!tY(r.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=As(r)}else e=As()}return n===void 0?t=h:t=m,Se(t,"NAME","levy"),r&&r.prng?(Se(t,"seed",null),Se(t,"seedLength",null),rY(t,"state",nY(null),XHr),Se(t,"stateLength",null),Se(t,"byteLength",null),Se(t,"toJSON",nY(null)),Se(t,"PRNG",e)):(Ns(t,"seed",u),Ns(t,"seedLength",o),rY(t,"state",c,l),Ns(t,"stateLength",v),Ns(t,"byteLength",f),Se(t,"toJSON",p),Se(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=JHr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return sY(e,n,a)}function h(d,g){return aY(d)||aY(g)||g<=0?NaN:sY(e,d,g)}}uY.exports=YHr});var fY=s((G3e,oY)=>{"use strict";var ZHr=gf(),$Hr=ZHr();oY.exports=$Hr});var lY=s((V3e,cY)=>{"use strict";var QHr=w(),vY=fY(),KHr=gf();QHr(vY,"factory",KHr);cY.exports=vY});var mY=s((U3e,gY)=>{"use strict";var rWr=j().isPrimitive,eWr=D().isPrimitive,tWr=sr(),pY=q();function iWr(r,e){return!rWr(r)||tWr(r)?new TypeError(pY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):eWr(e)?null:new TypeError(pY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}gY.exports=iWr});var hY=s((H3e,dY)=>{"use strict";var nWr=P();function aWr(r,e,t){var i=r();return e+t*nWr(i/(1-i))}dY.exports=aWr});var mf=s((W3e,OY)=>{"use strict";var Te=w(),Ss=R(),yY=F(),qY=I(),bY=_(),wY=O(),EY=S(),sWr=k(),Ts=X().factory,NY=E(),uWr=M(),Is=q(),oWr=mY(),AY=hY();function fWr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ts();else if(arguments.length===1){if(r=arguments[0],!qY(r))throw new TypeError(Is("invalid argument. Options argument must be an object. Value: `%s`.",r));if(wY(r,"prng")){if(!bY(r.prng))throw new TypeError(Is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ts(r)}else{if(n=arguments[0],a=arguments[1],i=oWr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!qY(r))throw new TypeError(Is("invalid argument. Options argument must be an object. Value: `%s`.",r));if(wY(r,"prng")){if(!bY(r.prng))throw new TypeError(Is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ts(r)}else e=Ts()}return n===void 0?t=h:t=m,Te(t,"NAME","logistic"),r&&r.prng?(Te(t,"seed",null),Te(t,"seedLength",null),yY(t,"state",EY(null),sWr),Te(t,"stateLength",null),Te(t,"byteLength",null),Te(t,"toJSON",EY(null)),Te(t,"PRNG",e)):(Ss(t,"seed",u),Ss(t,"seedLength",o),yY(t,"state",c,l),Ss(t,"stateLength",v),Ss(t,"byteLength",f),Te(t,"toJSON",p),Te(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=uWr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return AY(e,n,a)}function h(d,g){return NY(d)||NY(g)||g<=0?NaN:AY(e,d,g)}}OY.exports=fWr});var TY=s((D3e,SY)=>{"use strict";var vWr=mf(),cWr=vWr();SY.exports=cWr});var LY=s((z3e,_Y)=>{"use strict";var lWr=w(),IY=TY(),pWr=mf();lWr(IY,"factory",pWr);_Y.exports=IY});var FY=s((X3e,RY)=>{"use strict";var gWr=j().isPrimitive,mWr=D().isPrimitive,PY=q(),dWr=sr();function hWr(r,e){return!gWr(r)||dWr(r)?new TypeError(PY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):mWr(e)?null:new TypeError(PY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}RY.exports=hWr});var BY=s((J3e,MY)=>{"use strict";var yWr=nr();function qWr(r,e,t){return yWr(e+t*r())}MY.exports=qWr});var df=s((x3e,WY)=>{"use strict";var lt=w(),_s=R(),kY=F(),jY=I(),CY=_(),GY=O(),VY=S(),bWr=k(),Mi=it().factory,UY=E(),wWr=M(),Ls=q(),EWr=FY(),HY=BY();function NWr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Mi();else if(arguments.length===1){if(t=arguments[0],!jY(t))throw new TypeError(Ls("invalid argument. Options argument must be an object. Value: `%s`.",t));if(GY(t,"prng")){if(!CY(t.prng))throw new TypeError(Ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Mi({prng:t.prng})}else e=Mi(t)}else{if(u=arguments[0],r=arguments[1],a=EWr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!jY(t))throw new TypeError(Ls("invalid argument. Options argument must be an object. Value: `%s`.",t));if(GY(t,"prng")){if(!CY(t.prng))throw new TypeError(Ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Mi({prng:t.prng})}else e=Mi(t)}else e=Mi()}return u===void 0?n=d:n=h,i=e.PRNG,lt(n,"NAME","lognormal"),t&&t.prng?(lt(n,"seed",null),lt(n,"seedLength",null),kY(n,"state",VY(null),bWr),lt(n,"stateLength",null),lt(n,"byteLength",null),lt(n,"toJSON",VY(null))):(_s(n,"seed",o),_s(n,"seedLength",v),kY(n,"state",l,p),_s(n,"stateLength",f),_s(n,"byteLength",c),lt(n,"toJSON",m)),lt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=wWr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return HY(e,u,r)}function d(g,y){return UY(g)||UY(y)||y<=0?NaN:HY(e,g,y)}}WY.exports=NWr});var zY=s((Y3e,DY)=>{"use strict";var AWr=df(),OWr=AWr();DY.exports=OWr});var xY=s((Z3e,JY)=>{"use strict";var SWr=w(),XY=zY(),TWr=df();SWr(XY,"factory",TWr);JY.exports=XY});var hf=s(($3e,YY)=>{"use strict";var IWr=ii(),_Wr=Q(),LWr=IWr-1;function PWr(){var r=_Wr(1+LWr*Math.random());return r|0}YY.exports=PWr});var bf=s((Q3e,rZ)=>{"use strict";var Ie=w(),pt=R(),ZY=F(),yf=O(),RWr=I(),FWr=fr().isPrimitive,MWr=Gr(),BWr=ae().isPrimitive,$Y=Pa(),Dr=q(),Ps=ii(),Nr=Pt(),Bi=Qe(),kWr=M(),QY=hf(),qf=Ps-1|0,jWr=Ps-1|0,CWr=16807,Rs=1,Fs=2,gt=2,Ar=4,Gn=5;function KY(r,e){var t;return e?t="option":t="argument",r.length<Gn+1?new RangeError(Dr("invalid %s. State array has insufficient length.",t)):r[0]!==Rs?new RangeError(Dr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Rs,r[0])):r[1]!==Fs?new RangeError(Dr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Fs,r[1])):r[gt]!==1?new RangeError(Dr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[gt])):r[Ar]!==r.length-Gn?new RangeError(Dr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Gn,r[Ar])):null}function GWr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!RWr(r))throw new TypeError(Dr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(yf(r,"copy")&&(i.copy=r.copy,!FWr(r.copy)))throw new TypeError(Dr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(yf(r,"state")){if(t=r.state,i.state=!0,!$Y(t))throw new TypeError(Dr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=KY(t,!0),u)throw u;i.copy===!1?e=t:(e=new Nr(t.length),Bi(t.length,t,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(gt+1)*e.BYTES_PER_ELEMENT,1),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,t[Ar])}if(n===void 0)if(yf(r,"seed"))if(n=r.seed,i.seed=!0,BWr(n)){if(n>jWr)throw new RangeError(Dr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(MWr(n)&&n.length>0)a=n.length,e=new Nr(Gn+a),e[0]=Rs,e[1]=Fs,e[gt]=1,e[Ar]=a,Bi.ndarray(a,n,1,0,e,1,Ar+1),t=new Nr(e.buffer,e.byteOffset+(gt+1)*e.BYTES_PER_ELEMENT,1),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Dr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=QY()|0}else n=QY()|0;return t===void 0&&(e=new Nr(Gn+1),e[0]=Rs,e[1]=Fs,e[gt]=1,e[Ar]=1,e[Ar+1]=n,t=new Nr(e.buffer,e.byteOffset+(gt+1)*e.BYTES_PER_ELEMENT,1),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),Ie(h,"NAME","minstd"),pt(h,"seed",o),pt(h,"seedLength",v),ZY(h,"state",l,p),pt(h,"stateLength",f),pt(h,"byteLength",c),Ie(h,"toJSON",m),Ie(h,"MIN",1),Ie(h,"MAX",Ps-1),Ie(h,"normalized",d),Ie(d,"NAME",h.NAME),pt(d,"seed",o),pt(d,"seedLength",v),ZY(d,"state",l,p),pt(d,"stateLength",f),pt(d,"byteLength",c),Ie(d,"toJSON",m),Ie(d,"MIN",(h.MIN-1)/qf),Ie(d,"MAX",(h.MAX-1)/qf),h;function o(){var g=e[Ar];return Bi(g,n,1,new Nr(g),1)}function v(){return e[Ar]}function f(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return Bi(g,e,1,new Nr(g),1)}function p(g){var y;if(!$Y(g))throw new TypeError(Dr("invalid argument. Must provide an Int32Array. Value: `%s`.",g));if(y=KY(g,!1),y)throw y;i.copy===!1?i.state&&g.length===e.length?Bi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new Nr(g.length)),Bi(g.length,g,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(gt+1)*e.BYTES_PER_ELEMENT,1),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,e[Ar])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=kWr(e),g.params=[],g}function h(){var g=t[0]|0;return g=CWr*g%Ps|0,t[0]=g,g|0}function d(){return(h()-1)/qf}}rZ.exports=GWr});var tZ=s((K3e,eZ)=>{"use strict";var VWr=bf(),UWr=hf(),HWr=VWr({seed:UWr()});eZ.exports=HWr});var aZ=s((rfe,nZ)=>{"use strict";var WWr=w(),iZ=tZ(),DWr=bf();WWr(iZ,"factory",DWr);nZ.exports=iZ});var uZ=s((efe,sZ)=>{"use strict";var zWr=E(),XWr=8;function JWr(r,e,t){var i,n;for(n=0;n<XWr;n++)if(i=r(),zWr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}sZ.exports=JWr});var wf=s((tfe,oZ)=>{"use strict";var xWr=ii(),YWr=Q(),ZWr=xWr-1;function $Wr(){var r=YWr(1+ZWr*Math.random());return r|0}oZ.exports=$Wr});var Af=s((ife,gZ)=>{"use strict";var _e=w(),mt=R(),fZ=F(),Ef=O(),QWr=I(),KWr=fr().isPrimitive,rDr=Gr(),eDr=ae().isPrimitive,vZ=Pa(),ki=Qe(),tDr=Q(),Or=Pt(),Vn=ii(),iDr=M(),jr=q(),cZ=uZ(),lZ=wf(),Nf=Vn-1|0,nDr=Vn-1|0,aDr=16807,Tr=32,ks=1,js=3,dt=2,ji=Tr+3,Sr=Tr+6,Un=Tr+7,Ms=ji+1,Bs=ji+2;function pZ(r,e){var t;return e?t="option":t="argument",r.length<Un+1?new RangeError(jr("invalid %s. State array has insufficient length.",t)):r[0]!==ks?new RangeError(jr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,ks,r[0])):r[1]!==js?new RangeError(jr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,js,r[1])):r[dt]!==Tr?new RangeError(jr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Tr,r[dt])):r[ji]!==2?new RangeError(jr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[ji])):r[Sr]!==r.length-Un?new RangeError(jr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Un,r[Sr])):null}function sDr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!QWr(r))throw new TypeError(jr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Ef(r,"copy")&&(i.copy=r.copy,!KWr(r.copy)))throw new TypeError(jr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Ef(r,"state")){if(t=r.state,i.state=!0,!vZ(t))throw new TypeError(jr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=pZ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Or(t.length),ki(t.length,t,1,e,1)),t=new Or(e.buffer,e.byteOffset+(dt+1)*e.BYTES_PER_ELEMENT,Tr),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,t[Sr])}if(n===void 0)if(Ef(r,"seed"))if(n=r.seed,i.seed=!0,eDr(n)){if(n>nDr)throw new RangeError(jr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(rDr(n)&&n.length>0)a=n.length,e=new Or(Un+a),e[0]=ks,e[1]=js,e[dt]=Tr,e[ji]=2,e[Bs]=n[0],e[Sr]=a,ki.ndarray(a,n,1,0,e,1,Sr+1),t=new Or(e.buffer,e.byteOffset+(dt+1)*e.BYTES_PER_ELEMENT,Tr),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,a),t=cZ(h,t,Tr),e[Ms]=t[0];else throw new TypeError(jr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=lZ()|0}else n=lZ()|0;return t===void 0&&(e=new Or(Un+1),e[0]=ks,e[1]=js,e[dt]=Tr,e[ji]=2,e[Bs]=n,e[Sr]=1,e[Sr+1]=n,t=new Or(e.buffer,e.byteOffset+(dt+1)*e.BYTES_PER_ELEMENT,Tr),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,1),t=cZ(h,t,Tr),e[Ms]=t[0]),_e(d,"NAME","minstd-shuffle"),mt(d,"seed",o),mt(d,"seedLength",v),fZ(d,"state",l,p),mt(d,"stateLength",f),mt(d,"byteLength",c),_e(d,"toJSON",m),_e(d,"MIN",1),_e(d,"MAX",Vn-1),_e(d,"normalized",g),_e(g,"NAME",d.NAME),mt(g,"seed",o),mt(g,"seedLength",v),fZ(g,"state",l,p),mt(g,"stateLength",f),mt(g,"byteLength",c),_e(g,"toJSON",m),_e(g,"MIN",(d.MIN-1)/Nf),_e(g,"MAX",(d.MAX-1)/Nf),d;function o(){var y=e[Sr];return ki(y,n,1,new Or(y),1)}function v(){return e[Sr]}function f(){return e.length}function c(){return e.byteLength}function l(){var y=e.length;return ki(y,e,1,new Or(y),1)}function p(y){var N;if(!vZ(y))throw new TypeError(jr("invalid argument. Must provide an Int32Array. Value: `%s`.",y));if(N=pZ(y,!1),N)throw N;i.copy===!1?i.state&&y.length===e.length?ki(y.length,y,1,e,1):(e=y,i.state=!0):(y.length!==e.length&&(e=new Or(y.length)),ki(y.length,y,1,e,1)),t=new Or(e.buffer,e.byteOffset+(dt+1)*e.BYTES_PER_ELEMENT,Tr),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,e[Sr])}function m(){var y={};return y.type="PRNG",y.name=d.NAME,y.state=iDr(e),y.params=[],y}function h(){var y=e[Bs]|0;return y=aDr*y%Vn|0,e[Bs]=y,y|0}function d(){var y,N;return y=e[Ms],N=tDr(Tr*(y/Vn)),y=t[N],e[Ms]=y,t[N]=h(),y}function g(){return(d()-1)/Nf}}gZ.exports=sDr});var dZ=s((nfe,mZ)=>{"use strict";var uDr=Af(),oDr=wf(),fDr=uDr({seed:oDr()});mZ.exports=fDr});var qZ=s((afe,yZ)=>{"use strict";var vDr=w(),hZ=dZ(),cDr=Af();vDr(hZ,"factory",cDr);yZ.exports=hZ});var wZ=s((sfe,bZ)=>{"use strict";var lDr=nr();function pDr(r,e){for(var t=r(),i=1;t>lDr(-e);)i+=1,t*=r();return i-1}bZ.exports=pDr});var NZ=s((ufe,EZ)=>{"use strict";var gDr=Q();function mDr(r){return gDr(r)===r&&r<0}EZ.exports=mDr});var OZ=s((ofe,AZ)=>{"use strict";var dDr=NZ();AZ.exports=dDr});var TZ=s((ffe,SZ)=>{"use strict";var hDr=OZ(),yDr=rn();function qDr(r){return hDr(r)?NaN:yDr(r+1)}SZ.exports=qDr});var _Z=s((vfe,IZ)=>{"use strict";var bDr=TZ();IZ.exports=bDr});var FZ=s((cfe,RZ)=>{"use strict";var wDr=_Z(),LZ=Q(),EDr=L0(),NDr=C(),PZ=Y(),Cs=P(),ADr=y1(),ODr=1/12,SDr=1/360;function TDr(r,e){var t,i,n,a,u,o,v,f,c,l;for(t=NDr(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,u=-3.6224/(v-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-PZ(c))+v,c+=e+.445,LZ(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=EDr(c)*.5-c,l=u*r()),a=.5-PZ(c),(a>=.013||a>=l)&&(f=LZ((2*o/a+v)*c+e+.445),l*=i/(o/(a*a)+v),c=(f+.5)*Cs(e/f),c+=-e-ADr+f,c-=(ODr-SDr/(f*f))/f,f>=10&&c>=Cs(l*t)||(c=f*Cs(e)-e-wDr(f),f>=0&&f<=9&&c>=Cs(l))))return f}}RZ.exports=TDr});var BZ=s((lfe,MZ)=>{"use strict";var IDr=wZ(),_Dr=FZ();function LDr(r,e){return e<30?IDr(r,e):_Dr(r,e)}MZ.exports=LDr});var Of=s((pfe,HZ)=>{"use strict";var Le=w(),Gs=R(),kZ=F(),PDr=D().isPrimitive,jZ=I(),CZ=_(),GZ=O(),VZ=S(),RDr=k(),Vs=X().factory,FDr=E(),MDr=M(),Us=q(),UZ=BZ();function BDr(){var r,e,t,i;if(arguments.length===0)t=Vs();else if(arguments.length===1&&jZ(arguments[0]))if(e=arguments[0],GZ(e,"prng")){if(!CZ(e.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Vs(e);else{if(r=arguments[0],!PDr(r))throw new TypeError(Us("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!jZ(e))throw new TypeError(Us("invalid argument. Options argument must be an object. Value: `%s`.",e));if(GZ(e,"prng")){if(!CZ(e.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Vs(e)}else t=Vs()}return r===void 0?i=p:i=l,Le(i,"NAME","poisson"),e&&e.prng?(Le(i,"seed",null),Le(i,"seedLength",null),kZ(i,"state",VZ(null),RDr),Le(i,"stateLength",null),Le(i,"byteLength",null),Le(i,"toJSON",VZ(null)),Le(i,"PRNG",t)):(Gs(i,"seed",n),Gs(i,"seedLength",a),kZ(i,"state",v,f),Gs(i,"stateLength",u),Gs(i,"byteLength",o),Le(i,"toJSON",c),Le(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=MDr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return UZ(t,r)}function p(m){return FDr(m)||m<=0?NaN:UZ(t,m)}}HZ.exports=BDr});var DZ=s((gfe,WZ)=>{"use strict";var kDr=Of(),jDr=kDr();WZ.exports=jDr});var Sf=s((mfe,XZ)=>{"use strict";var CDr=w(),zZ=DZ(),GDr=Of();CDr(zZ,"factory",GDr);XZ.exports=zZ});var xZ=s((dfe,JZ)=>{"use strict";var VDr=D().isPrimitive,UDr=j().isPrimitive,Tf=q(),HDr=sr();function WDr(r,e){return VDr(r)?!UDr(e)||HDr(e)?new TypeError(Tf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(Tf("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(Tf("invalid argument. First argument must be a positive number. Value: `%s`.",r))}JZ.exports=WDr});var Pf=s((hfe,t$)=>{"use strict";var ht=w(),Hs=R(),YZ=F(),Ci=O(),ZZ=I(),If=Kr(),$Z=fr().isPrimitive,QZ=_(),KZ=S(),DDr=k(),r$=E(),Gi=Sf().factory,Ws=Si().factory,_f=Qe(),Lf=cr(),e$=Mn(),zDr=M(),Pe=q(),XDr=xZ();function JDr(){var r,e,t,i,n,a,u,o,v,f;if(u=!0,arguments.length===0)i={copy:!1},t=Gi(i);else if(arguments.length===1){if(i=arguments[0],!ZZ(i))throw new TypeError(Pe("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ci(i,"copy")&&!$Z(i.copy))throw new TypeError(Pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ci(i,"prng")){if(!QZ(i.prng))throw new TypeError(Pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Gi({prng:i.prng})}else{if(Ci(i,"state")&&!If(i.state))throw new TypeError(Pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=e$({},i),i.copy===!1?u=!1:i.state&&(i.state=_f(i.state.length,i.state,1,new Lf(i.state.length),1)),i.copy=!1,t=Gi(i)}}else{if(f=arguments[0],v=arguments[1],o=XDr(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!ZZ(i))throw new TypeError(Pe("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ci(i,"copy")&&!$Z(i.copy))throw new TypeError(Pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ci(i,"prng")){if(!QZ(i.prng))throw new TypeError(Pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Gi({prng:i.prng})}else{if(Ci(i,"state")&&!If(i.state))throw new TypeError(Pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=e$({},i),i.copy===!1?u=!1:i.state&&(i.state=_f(i.state.length,i.state,1,new Lf(i.state.length),1)),i.copy=!1,t=Gi(i)}}else i={copy:!1},t=Gi(i)}return i&&i.prng?f===void 0?r=Ws({prng:i.prng}):r=Ws(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=Ws({state:e,copy:!1}):r=Ws(f,v/(1-v),{state:e,copy:!1})),f===void 0?n=N:n=y,a=t.PRNG,ht(n,"NAME","negative-binomial"),i&&i.prng?(ht(n,"seed",null),ht(n,"seedLength",null),YZ(n,"state",KZ(null),DDr),ht(n,"stateLength",null),ht(n,"byteLength",null),ht(n,"toJSON",KZ(null))):(Hs(n,"seed",c),Hs(n,"seedLength",l),YZ(n,"state",h,d),Hs(n,"stateLength",p),Hs(n,"byteLength",m),ht(n,"toJSON",g)),ht(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function m(){return a.byteLength}function h(){return a.state}function d(A){if(!If(A))throw new TypeError(Pe("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));u&&(A=_f(A.length,A,1,new Lf(A.length),1)),a.state=A}function g(){var A={};return A.type="PRNG",A.name=n.NAME,A.state=zDr(a.state),f===void 0?A.params=[]:A.params=[f,v],A}function y(){return t(r())}function N(A,G){return r$(A)||r$(G)||G<=0||G>=1?NaN:t(r(A,G/(1-G)))}}t$.exports=JDr});var n$=s((yfe,i$)=>{"use strict";var xDr=Pf(),YDr=xDr();i$.exports=YDr});var u$=s((qfe,s$)=>{"use strict";var ZDr=w(),a$=n$(),$Dr=Pf();ZDr(a$,"factory",$Dr);s$.exports=a$});var v$=s((bfe,f$)=>{"use strict";var QDr=j().isPrimitive,KDr=D().isPrimitive,o$=q(),rzr=sr();function ezr(r,e){return!QDr(r)||rzr(r)?new TypeError(o$("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):KDr(e)?null:new TypeError(o$("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}f$.exports=ezr});var l$=s((wfe,c$)=>{"use strict";function tzr(r,e,t){return e+t*r()}c$.exports=tzr});var Rf=s((Efe,b$)=>{"use strict";var yt=w(),Ds=R(),p$=F(),g$=I(),m$=_(),d$=O(),h$=S(),izr=k(),Vi=it().factory,y$=E(),nzr=M(),zs=q(),azr=v$(),q$=l$();function szr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Vi();else if(arguments.length===1){if(t=arguments[0],!g$(t))throw new TypeError(zs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(d$(t,"prng")){if(!m$(t.prng))throw new TypeError(zs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Vi({prng:t.prng})}else e=Vi(t)}else{if(u=arguments[0],r=arguments[1],a=azr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!g$(t))throw new TypeError(zs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(d$(t,"prng")){if(!m$(t.prng))throw new TypeError(zs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Vi({prng:t.prng})}else e=Vi(t)}else e=Vi()}return u===void 0?n=d:n=h,i=e.PRNG,yt(n,"NAME","normal"),t&&t.prng?(yt(n,"seed",null),yt(n,"seedLength",null),p$(n,"state",h$(null),izr),yt(n,"stateLength",null),yt(n,"byteLength",null),yt(n,"toJSON",h$(null))):(Ds(n,"seed",o),Ds(n,"seedLength",v),p$(n,"state",l,p),Ds(n,"stateLength",f),Ds(n,"byteLength",c),yt(n,"toJSON",m)),yt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=nzr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return q$(e,u,r)}function d(g,y){return y$(g)||y$(y)||y<=0?NaN:q$(e,g,y)}}b$.exports=szr});var E$=s((Nfe,w$)=>{"use strict";var uzr=Rf(),ozr=uzr();w$.exports=ozr});var O$=s((Afe,A$)=>{"use strict";var fzr=w(),N$=E$(),vzr=Rf();fzr(N$,"factory",vzr);A$.exports=N$});var _$=s((Ofe,I$)=>{"use strict";var S$=D().isPrimitive,T$=q();function czr(r,e){return S$(r)?S$(e)?null:new TypeError(T$("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(T$("invalid argument. First argument must be a positive number. Value: `%s`.",r))}I$.exports=czr});var P$=s((Sfe,L$)=>{"use strict";var lzr=W();function pzr(r,e,t){return t/lzr(r(),1/e)}L$.exports=pzr});var Ff=s((Tfe,G$)=>{"use strict";var Re=w(),Xs=R(),R$=F(),F$=I(),M$=_(),B$=O(),k$=S(),gzr=k(),Js=X().factory,j$=E(),mzr=M(),xs=q(),dzr=_$(),C$=P$();function hzr(){var r,e,t,i,n,a;if(arguments.length===0)i=Js();else if(arguments.length===1){if(t=arguments[0],!F$(t))throw new TypeError(xs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(B$(t,"prng")){if(!M$(t.prng))throw new TypeError(xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Js(t)}else{if(r=arguments[0],e=arguments[1],a=dzr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!F$(t))throw new TypeError(xs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(B$(t,"prng")){if(!M$(t.prng))throw new TypeError(xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Js(t)}else i=Js()}return r===void 0?n=h:n=m,Re(n,"NAME","pareto-type1"),t&&t.prng?(Re(n,"seed",null),Re(n,"seedLength",null),R$(n,"state",k$(null),gzr),Re(n,"stateLength",null),Re(n,"byteLength",null),Re(n,"toJSON",k$(null)),Re(n,"PRNG",i)):(Xs(n,"seed",u),Xs(n,"seedLength",o),R$(n,"state",c,l),Xs(n,"stateLength",v),Xs(n,"byteLength",f),Re(n,"toJSON",p),Re(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=mzr(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function m(){return C$(i,r,e)}function h(d,g){return j$(d)||j$(g)||d<=0||g<=0?NaN:C$(i,d,g)}}G$.exports=hzr});var U$=s((Ife,V$)=>{"use strict";var yzr=Ff(),qzr=yzr();V$.exports=qzr});var D$=s((_fe,W$)=>{"use strict";var bzr=w(),H$=U$(),wzr=Ff();bzr(H$,"factory",wzr);W$.exports=H$});var X$=s((Lfe,z$)=>{"use strict";var Ezr=C(),Nzr=P();function Azr(r,e){return e*Ezr(-2*Nzr(r()))}z$.exports=Azr});var Mf=s((Pfe,K$)=>{"use strict";var Fe=w(),Ys=R(),J$=F(),Ozr=D().isPrimitive,x$=I(),Y$=_(),Z$=O(),$$=S(),Szr=k(),Zs=X().factory,Tzr=E(),Izr=M(),$s=q(),Q$=X$();function _zr(){var r,e,t,i;if(arguments.length===0)t=Zs();else if(arguments.length===1&&x$(arguments[0]))if(e=arguments[0],Z$(e,"prng")){if(!Y$(e.prng))throw new TypeError($s("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Zs(e);else{if(r=arguments[0],!Ozr(r))throw new TypeError($s("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!x$(e))throw new TypeError($s("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Z$(e,"prng")){if(!Y$(e.prng))throw new TypeError($s("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Zs(e)}else t=Zs()}return r===void 0?i=p:i=l,Fe(i,"NAME","rayleigh"),e&&e.prng?(Fe(i,"seed",null),Fe(i,"seedLength",null),J$(i,"state",$$(null),Szr),Fe(i,"stateLength",null),Fe(i,"byteLength",null),Fe(i,"toJSON",$$(null)),Fe(i,"PRNG",t)):(Ys(i,"seed",n),Ys(i,"seedLength",a),J$(i,"state",v,f),Ys(i,"stateLength",u),Ys(i,"byteLength",o),Fe(i,"toJSON",c),Fe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=Izr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return Q$(t,r)}function p(m){return Tzr(m)||m<=0?NaN:Q$(t,m)}}K$.exports=_zr});var eQ=s((Rfe,rQ)=>{"use strict";var Lzr=Mf(),Pzr=Lzr();rQ.exports=Pzr});var nQ=s((Ffe,iQ)=>{"use strict";var Rzr=w(),tQ=eQ(),Fzr=Mf();Rzr(tQ,"factory",Fzr);iQ.exports=tQ});var Cf=s((Mfe,pQ)=>{"use strict";var qt=w(),Qs=R(),aQ=F(),Ui=O(),sQ=D().isPrimitive,uQ=I(),Bf=Kr(),oQ=fr().isPrimitive,Mzr=E(),fQ=_(),vQ=S(),Bzr=k(),Ks=jn().factory,Hi=it().factory,kf=Qe(),jf=cr(),cQ=Mn(),kzr=M(),$r=q(),lQ=C();function jzr(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=Hi(n);else if(arguments.length===1)if(uQ(arguments[0])){if(n=arguments[0],Ui(n,"copy")&&!oQ(n.copy))throw new TypeError($r("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ui(n,"prng")){if(!fQ(n.prng))throw new TypeError($r("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Hi({prng:n.prng})}else{if(Ui(n,"state")&&!Bf(n.state))throw new TypeError($r("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=cQ({},n),n.copy===!1?u=!1:n.state&&(n.state=kf(n.state.length,n.state,1,new jf(n.state.length),1)),n.copy=!1,t=Hi(n)}}else{if(o=arguments[0],!sQ(o))throw new TypeError($r("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=Hi(n)}else{if(o=arguments[0],!sQ(o))throw new TypeError($r("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!uQ(n))throw new TypeError($r("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ui(n,"copy")&&!oQ(n.copy))throw new TypeError($r("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ui(n,"prng")){if(!fQ(n.prng))throw new TypeError($r("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Hi({prng:n.prng})}else{if(Ui(n,"state")&&!Bf(n.state))throw new TypeError($r("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=cQ({},n),n.copy===!1?u=!1:n.state&&(n.state=kf(n.state.length,n.state,1,new jf(n.state.length),1)),n.copy=!1,t=Hi(n)}}return n&&n.prng?o===void 0?r=Ks({prng:n.prng}):r=Ks(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=Ks({state:e,copy:!1}):r=Ks(o,{state:e,copy:!1})),o===void 0?a=g:a=d,i=t.PRNG,qt(a,"NAME","t"),n&&n.prng?(qt(a,"seed",null),qt(a,"seedLength",null),aQ(a,"state",vQ(null),Bzr),qt(a,"stateLength",null),qt(a,"byteLength",null),qt(a,"toJSON",vQ(null))):(Qs(a,"seed",v),Qs(a,"seedLength",f),aQ(a,"state",p,m),Qs(a,"stateLength",c),Qs(a,"byteLength",l),qt(a,"toJSON",h)),qt(a,"PRNG",i),a;function v(){return i.seed}function f(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(y){if(!Bf(y))throw new TypeError($r("invalid argument. Must provide a Uint32Array. Value: `%s`.",y));u&&(y=kf(y.length,y,1,new jf(y.length),1)),i.state=y}function h(){var y={};return y.type="PRNG",y.name=a.NAME,y.state=kzr(i.state),o===void 0?y.params=[]:y.params=[o],y}function d(){return t()/lQ(r()/o)}function g(y){return Mzr(y)||y<=0?NaN:t()/lQ(r(y)/y)}}pQ.exports=jzr});var mQ=s((Bfe,gQ)=>{"use strict";var Czr=Cf(),Gzr=Czr();gQ.exports=Gzr});var yQ=s((kfe,hQ)=>{"use strict";var Vzr=w(),dQ=mQ(),Uzr=Cf();Vzr(dQ,"factory",Uzr);hQ.exports=dQ});var bQ=s((jfe,qQ)=>{"use strict";var Gf=j().isPrimitive,ru=q(),Vf=sr();function Hzr(r,e,t){return!Gf(r)||Vf(r)?new TypeError(ru("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Gf(e)||Vf(e)?new TypeError(ru("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Gf(t)||Vf(t)?new TypeError(ru("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(ru("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}qQ.exports=Hzr});var NQ=s((Cfe,EQ)=>{"use strict";var wQ=C();function Wzr(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+wQ(a*u)):(a=(t-e)*(t-i),t-wQ(a*(1-u)))}EQ.exports=Wzr});var Hf=s((Gfe,LQ)=>{"use strict";var Me=w(),eu=R(),AQ=F(),OQ=I(),SQ=_(),TQ=O(),IQ=S(),Dzr=k(),tu=X().factory,Uf=E(),zzr=M(),iu=q(),Xzr=bQ(),_Q=NQ();function Jzr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=tu();else if(arguments.length===1){if(r=arguments[0],!OQ(r))throw new TypeError(iu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(TQ(r,"prng")){if(!SQ(r.prng))throw new TypeError(iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=tu(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=Xzr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!OQ(r))throw new TypeError(iu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(TQ(r,"prng")){if(!SQ(r.prng))throw new TypeError(iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=tu(r)}else e=tu()}return n===void 0?t=d:t=h,Me(t,"NAME","triangular"),r&&r.prng?(Me(t,"seed",null),Me(t,"seedLength",null),AQ(t,"state",IQ(null),Dzr),Me(t,"stateLength",null),Me(t,"byteLength",null),Me(t,"toJSON",IQ(null)),Me(t,"PRNG",e)):(eu(t,"seed",o),eu(t,"seedLength",v),AQ(t,"state",l,p),eu(t,"stateLength",f),eu(t,"byteLength",c),Me(t,"toJSON",m),Me(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=zzr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return _Q(e,n,a,u)}function d(g,y,N){return Uf(g)||Uf(y)||Uf(N)||!(g<=N&&N<=y)?NaN:_Q(e,g,y,N)}}LQ.exports=Jzr});var RQ=s((Vfe,PQ)=>{"use strict";var xzr=Hf(),Yzr=xzr();PQ.exports=Yzr});var BQ=s((Ufe,MQ)=>{"use strict";var Zzr=w(),FQ=RQ(),$zr=Hf();Zzr(FQ,"factory",$zr);MQ.exports=FQ});var GQ=s((Hfe,CQ)=>{"use strict";var kQ=j().isPrimitive,Wf=q(),jQ=sr();function Qzr(r,e){return!kQ(r)||jQ(r)?new TypeError(Wf("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!kQ(e)||jQ(e)?new TypeError(Wf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Wf("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}CQ.exports=Qzr});var UQ=s((Wfe,VQ)=>{"use strict";function Kzr(r,e,t){var i=r();return t*i+(1-i)*e}VQ.exports=Kzr});var Df=s((Dfe,YQ)=>{"use strict";var Be=w(),nu=R(),HQ=F(),WQ=I(),DQ=_(),zQ=O(),XQ=S(),rXr=k(),au=X().factory,JQ=E(),eXr=M(),su=q(),tXr=GQ(),xQ=UQ();function iXr(){var r,e,t,i,n,a;if(arguments.length===0)e=au();else if(arguments.length===1){if(r=arguments[0],!WQ(r))throw new TypeError(su("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zQ(r,"prng")){if(!DQ(r.prng))throw new TypeError(su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=au(r)}else{if(n=arguments[0],a=arguments[1],i=tXr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!WQ(r))throw new TypeError(su("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zQ(r,"prng")){if(!DQ(r.prng))throw new TypeError(su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=au(r)}else e=au()}return n===void 0?t=h:t=m,Be(t,"NAME","uniform"),r&&r.prng?(Be(t,"seed",null),Be(t,"seedLength",null),HQ(t,"state",XQ(null),rXr),Be(t,"stateLength",null),Be(t,"byteLength",null),Be(t,"toJSON",XQ(null)),Be(t,"PRNG",e)):(nu(t,"seed",u),nu(t,"seedLength",o),HQ(t,"state",c,l),nu(t,"stateLength",v),nu(t,"byteLength",f),Be(t,"toJSON",p),Be(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=eXr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return xQ(e,n,a)}function h(d,g){return JQ(d)||JQ(g)||d>=g?NaN:xQ(e,d,g)}}YQ.exports=iXr});var $Q=s((zfe,ZQ)=>{"use strict";var nXr=Df(),aXr=nXr();ZQ.exports=aXr});var rK=s((Xfe,KQ)=>{"use strict";var sXr=w(),QQ=$Q(),uXr=Df();sXr(QQ,"factory",uXr);KQ.exports=QQ});var nK=s((Jfe,iK)=>{"use strict";var eK=D().isPrimitive,tK=q();function oXr(r,e){return eK(r)?eK(e)?null:new TypeError(tK("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(tK("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}iK.exports=oXr});var sK=s((xfe,aK)=>{"use strict";var fXr=W(),vXr=P();function cXr(r,e,t){return t*fXr(-vXr(1-r()),1/e)}aK.exports=cXr});var zf=s((Yfe,gK)=>{"use strict";var ke=w(),uu=R(),uK=F(),oK=I(),fK=_(),vK=O(),cK=S(),lXr=k(),ou=X().factory,lK=E(),pXr=M(),fu=q(),gXr=nK(),pK=sK();function mXr(){var r,e,t,i,n,a;if(arguments.length===0)t=ou();else if(arguments.length===1){if(e=arguments[0],!oK(e))throw new TypeError(fu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(vK(e,"prng")){if(!fK(e.prng))throw new TypeError(fu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ou(e)}else{if(a=arguments[0],r=arguments[1],n=gXr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!oK(e))throw new TypeError(fu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(vK(e,"prng")){if(!fK(e.prng))throw new TypeError(fu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ou(e)}else t=ou()}return r===void 0?i=h:i=m,ke(i,"NAME","weibull"),e&&e.prng?(ke(i,"seed",null),ke(i,"seedLength",null),uK(i,"state",cK(null),lXr),ke(i,"stateLength",null),ke(i,"byteLength",null),ke(i,"toJSON",cK(null)),ke(i,"PRNG",t)):(uu(i,"seed",u),uu(i,"seedLength",o),uK(i,"state",c,l),uu(i,"stateLength",v),uu(i,"byteLength",f),ke(i,"toJSON",p),ke(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=pXr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return pK(t,a,r)}function h(d,g){return lK(d)||lK(g)||d<=0||g<=0?NaN:pK(t,d,g)}}gK.exports=mXr});var dK=s((Zfe,mK)=>{"use strict";var dXr=zf(),hXr=dXr();mK.exports=hXr});var qK=s(($fe,yK)=>{"use strict";var yXr=w(),hK=dK(),qXr=zf();yXr(hK,"factory",qXr);yK.exports=hK});var wK=s((Qfe,bK)=>{"use strict";var B={};B.arcsine=TV().factory;B.bernoulli=CV().factory;B.beta=sH().factory;B.betaprime=zH().factory;B.binomial=SW().factory;B.boxMueller=UW().factory;B.cauchy=aD().factory;B.chi=TD().factory;B.chisquare=jn().factory;B.cosine=sz().factory;B.discreteUniform=Sz().factory;B.erlang=Dz().factory;B.exponential=nX().factory;B.f=NX().factory;B.frechet=VX().factory;B.gamma=Si().factory;B.geometric=eJ().factory;B.gumbel=bJ().factory;B.hypergeometric=xJ().factory;B.improvedZiggurat=it().factory;B.invgamma=vx().factory;B.kumaraswamy=Lx().factory;B.laplace=xx().factory;B.levy=lY().factory;B.logistic=LY().factory;B.lognormal=xY().factory;B.minstd=aZ().factory;B.minstdShuffle=qZ().factory;B.mt19937=X().factory;B.negativeBinomial=u$().factory;B.normal=O$().factory;B.pareto1=D$().factory;B.poisson=Sf().factory;B.rayleigh=nQ().factory;B.t=yQ().factory;B.triangular=BQ().factory;B.uniform=rK().factory;B.weibull=qK().factory;bK.exports=B});var NK=s((Kfe,EK)=>{"use strict";function bXr(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h,d,g,y,N,A;for(h=e[1],d=e[0],g=r[0],y=r[1],c=t[0],l=t[1],u=c[1],o=c[0]-h*u,v=l[1],f=l[0]-h*v,p=0,m=0,n=[],N=0;N<d;N++){for(a=[],A=0;A<h;A++)a.push(i(g[p],y[m])),p+=u,m+=v;n.push(a),p+=o,m+=f}return n}EK.exports=bXr});var OK=s((rve,AK)=>{"use strict";var wXr=j().isPrimitive,EXr=L(),NXr=U(),AXr=q();function OXr(r,e){return t;function t(i){var n;if(!wXr(i)){if(e.nonnumeric===void 0)throw new TypeError(AXr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===EXr?e.pinf:n===NXr?e.ninf:n}}AK.exports=OXr});var _K=s((eve,IK)=>{"use strict";var SK=j().isPrimitive,SXr=L(),TXr=U(),TK=q();function IXr(r,e){return t;function t(i,n){var a;if(!SK(i)){if(e.nonnumeric===void 0)throw new TypeError(TK("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!SK(n)){if(e.nonnumeric===void 0)throw new TypeError(TK("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===SXr?e.pinf:a===TXr?e.ninf:a}}IK.exports=IXr});var PK=s((tve,LK)=>{"use strict";var Xf=j().isPrimitive,_Xr=L(),LXr=U(),Jf=q();function PXr(r,e){return t;function t(i,n,a){var u;if(!Xf(i)){if(e.nonnumeric===void 0)throw new TypeError(Jf("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Xf(n)){if(e.nonnumeric===void 0)throw new TypeError(Jf("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Xf(a)){if(e.nonnumeric===void 0)throw new TypeError(Jf("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===_Xr?e.pinf:u===LXr?e.ninf:u}}LK.exports=PXr});var FK=s((ive,RK)=>{"use strict";var RXr=K().isPrimitive,FXr=q();function MXr(r){return e;function e(t){if(!RXr(t))throw new TypeError(FXr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}RK.exports=MXr});var jK=s((nve,kK)=>{"use strict";var MK=K().isPrimitive,BK=q();function BXr(r){return e;function e(t,i){if(!MK(t))throw new TypeError(BK("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!MK(i))throw new TypeError(BK("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}kK.exports=BXr});var GK=s((ave,CK)=>{"use strict";var xf=K().isPrimitive,Yf=q();function kXr(r){return e;function e(t,i,n){if(!xf(t))throw new TypeError(Yf("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!xf(i))throw new TypeError(Yf("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!xf(n))throw new TypeError(Yf("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}CK.exports=kXr});var UK=s((sve,VK)=>{"use strict";function jXr(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h,d,g,y,N,A,G,T,J,or,z;for(N=e[1],A=e[0],G=r[0],T=r[1],J=r[2],p=t[0],m=t[1],h=t[2],u=p[1],o=p[0]-N*u,v=m[1],f=m[0]-N*v,c=h[1],l=h[0]-N*c,d=0,g=0,y=0,n=[],or=0;or<A;or++){for(a=[],z=0;z<N;z++)a.push(i(G[d],T[g],J[y])),d+=u,g+=v,y+=c;n.push(a),d+=o,g+=f,y+=l}return n}VK.exports=jXr});var WK=s((uve,HK)=>{"use strict";function CXr(r,e){var t,i,n,a,u;for(t=r.length,i=r[0].length,a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)n[u]=e(n[u]);return r}HK.exports=CXr});var zK=s((ove,DK)=>{"use strict";var GXr=WK();function VXr(r,e){return GXr(r,e)}DK.exports=VXr});var JK=s((fve,XK)=>{"use strict";var Qr={};Qr.binary2d=NK();Qr.d_d=OK();Qr.dd_d=_K();Qr.ddd_d=PK();Qr.s_o=FK();Qr.ss_o=jK();Qr.sss_o=GK();Qr.ternary2d=UK();Qr.unary2d=zK();XK.exports=Qr});var YK=s((vve,xK)=>{"use strict";var bt=h6(),pr,V={};V.bartlettTest=Oq();V.broadcast=Rq();V.cumax=Uq().ndarray;V.filled=Xq();V.filledBy=tb();V.flattenArray=La();V.filled2d=un();V.ones2d=sb();V.zeros2d=vb();V.isArray=mr();V.isBoolean=fr().isPrimitive;V.isNumber=j().isPrimitive;V.isPositiveNumber=D().isPrimitive;V.isString=K().isPrimitive;V.iterator2array=MA();V.iterSawtoothWave=hO();V.linspace=IS();V.max=jS().ndarray;V.mskmax=XS().ndarray;V.assert={};pr=oI();bt(pr,V.assert);V.blas={};pr=dI();bt(pr,V.blas);pr=cR();bt(pr,V);pr=tM();bt(pr,V);V.dists={};pr=Wk();bt(pr,V.dists);pr=HC();bt(pr,V);V.random={};pr=wK();bt(pr,V.random);V.tools={};pr=JK();bt(pr,V.tools);xK.exports=V});var HXr=s((cve,ZK)=>{var UXr=YK();ZK.exports=UXr});return HXr();})();
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
