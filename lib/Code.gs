/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var s=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Hn=s((QXr,$f)=>{"use strict";function srr(r){return Object.keys(Object(r))}$f.exports=srr});var Kf=s((KXr,Qf)=>{"use strict";var urr=Hn();function orr(){return(urr(arguments)||"").length!==2}function frr(){return orr(1,2)}Qf.exports=frr});var ev=s((rJr,rv)=>{"use strict";var vrr=typeof Object.keys<"u";rv.exports=vrr});var iv=s((eJr,tv)=>{"use strict";function crr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}tv.exports=crr});var av=s((tJr,nv)=>{"use strict";var lrr=iv();nv.exports=lrr});var uv=s((iJr,sv)=>{"use strict";var prr=av(),grr=prr();function mrr(){return grr&&typeof Symbol.toStringTag=="symbol"}sv.exports=mrr});var Wi=s((nJr,ov)=>{"use strict";var drr=uv();ov.exports=drr});var cu=s((aJr,fv)=>{"use strict";var hrr=Object.prototype.toString;fv.exports=hrr});var cv=s((sJr,vv)=>{"use strict";var yrr=cu();function qrr(r){return yrr.call(r)}vv.exports=qrr});var pv=s((uJr,lv)=>{"use strict";var brr=Object.prototype.hasOwnProperty;function wrr(r,e){return r==null?!1:brr.call(r,e)}lv.exports=wrr});var O=s((oJr,gv)=>{"use strict";var Err=pv();gv.exports=Err});var dv=s((fJr,mv)=>{"use strict";var Nrr=typeof Symbol=="function"?Symbol:void 0;mv.exports=Nrr});var lu=s((vJr,hv)=>{"use strict";var Arr=dv();hv.exports=Arr});var bv=s((cJr,qv)=>{"use strict";var yv=lu(),Orr=typeof yv=="function"?yv.toStringTag:"";qv.exports=Orr});var Ev=s((lJr,wv)=>{"use strict";var Srr=O(),Di=bv(),pu=cu();function Trr(r){var e,t,i;if(r==null)return pu.call(r);t=r[Di],e=Srr(r,Di);try{r[Di]=void 0}catch{return pu.call(r)}return i=pu.call(r),e?r[Di]=t:delete r[Di],i}wv.exports=Trr});var ir=s((pJr,Nv)=>{"use strict";var Irr=Wi(),_rr=cv(),Lrr=Ev(),gu;Irr()?gu=Lrr:gu=_rr;Nv.exports=gu});var mu=s((gJr,Av)=>{"use strict";var Prr=ir();function Rrr(r){return Prr(r)==="[object Arguments]"}Av.exports=Rrr});var Tv=s((mJr,Sv)=>{"use strict";var Frr=mu(),Ov;function Mrr(){return Frr(arguments)}Ov=Mrr();Sv.exports=Ov});var _v=s((dJr,Iv)=>{"use strict";var Brr=typeof Object.defineProperty=="function"?Object.defineProperty:null;Iv.exports=Brr});var Pv=s((hJr,Lv)=>{"use strict";var krr=_v();function jrr(){try{return krr({},"x",{}),!0}catch{return!1}}Lv.exports=jrr});var Fv=s((yJr,Rv)=>{"use strict";var Crr=Object.defineProperty;Rv.exports=Crr});var du=s((qJr,Mv)=>{"use strict";function Grr(r){return typeof r=="number"}Mv.exports=Grr});var hu=s((bJr,kv)=>{"use strict";function Vrr(r){return r[0]==="-"}function Bv(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Urr(r,e,t){var i=!1,n=e-r.length;return n<0||(Vrr(r)&&(i=!0,r=r.substr(1)),r=t?r+Bv(n):Bv(n)+r,i&&(r="-"+r)),r}kv.exports=Urr});var Vv=s((wJr,Gv)=>{"use strict";var Hrr=du(),jv=hu(),Wrr=String.prototype.toLowerCase,Cv=String.prototype.toUpperCase;function Drr(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!Hrr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=jv(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=jv(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===Cv.call(r.specifier)?Cv.call(t):Wrr.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Gv.exports=Drr});var Hv=s((EJr,Uv)=>{"use strict";function zrr(r){return typeof r=="string"}Uv.exports=zrr});var zv=s((NJr,Dv)=>{"use strict";var Xrr=du(),Jrr=Math.abs,xrr=String.prototype.toLowerCase,Wv=String.prototype.toUpperCase,wt=String.prototype.replace,Yrr=/e\+(\d)$/,Zrr=/e-(\d)$/,$rr=/^(\d+)$/,Qrr=/^(\d+)e/,Krr=/\.0$/,rer=/\.0*e/,eer=/(\..*[^0])0*e/;function ter(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Xrr(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Jrr(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=wt.call(t,eer,"$1e"),t=wt.call(t,rer,"e"),t=wt.call(t,Krr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=wt.call(t,Yrr,"e+0$1"),t=wt.call(t,Zrr,"e-0$1"),r.alternate&&(t=wt.call(t,$rr,"$1."),t=wt.call(t,Qrr,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Wv.call(r.specifier)?Wv.call(t):xrr.call(t),t}Dv.exports=ter});var xv=s((AJr,Jv)=>{"use strict";function Xv(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function ier(r,e,t){var i=e-r.length;return i<0||(r=t?r+Xv(i):Xv(i)+r),r}Jv.exports=ier});var Zv=s((OJr,Yv)=>{"use strict";var ner=Vv(),aer=Hv(),ser=zv(),uer=xv(),oer=hu(),fer=String.fromCharCode,Wn=isNaN,ver=Array.isArray;function cer(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function ler(r){var e,t,i,n,a,u,o,v,f;if(!ver(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",o=1,v=0;v<r.length;v++)if(i=r[v],aer(i))u+=i;else{if(e=i.precision!==void 0,i=cer(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,Wn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,Wn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=ner(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Wn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Wn(a)?String(i.arg):fer(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=ser(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=oer(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=uer(i.arg,i.width,i.padRight)),u+=i.arg||"",o+=1}return u}Yv.exports=ler});var Qv=s((SJr,$v)=>{"use strict";var per=Zv();$v.exports=per});var rc=s((TJr,Kv)=>{"use strict";var Dn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ger(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function mer(r){var e,t,i,n;for(t=[],n=0,i=Dn.exec(r);i;)e=r.slice(n,Dn.lastIndex-i[0].length),e.length&&t.push(e),t.push(ger(i)),n=Dn.lastIndex,i=Dn.exec(r);return e=r.slice(n),e.length&&t.push(e),t}Kv.exports=mer});var tc=s((IJr,ec)=>{"use strict";var der=rc();ec.exports=der});var nc=s((_Jr,ic)=>{"use strict";function her(r){return typeof r=="string"}ic.exports=her});var uc=s((LJr,sc)=>{"use strict";var yer=Qv(),qer=tc(),ber=nc();function ac(r){var e,t,i;if(!ber(r))throw new TypeError(ac("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=qer(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return yer.apply(null,t)}sc.exports=ac});var q=s((PJr,oc)=>{"use strict";var wer=uc();oc.exports=wer});var gc=s((RJr,pc)=>{"use strict";var fc=q(),Dt=Object.prototype,vc=Dt.toString,cc=Dt.__defineGetter__,lc=Dt.__defineSetter__,Eer=Dt.__lookupGetter__,Ner=Dt.__lookupSetter__;function Aer(r,e,t){var i,n,a,u;if(typeof r!="object"||r===null||vc.call(r)==="[object Array]")throw new TypeError(fc("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||vc.call(t)==="[object Array]")throw new TypeError(fc("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(Eer.call(r,e)||Ner.call(r,e)?(i=r.__proto__,r.__proto__=Dt,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,u="set"in t,n&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&cc&&cc.call(r,e,t.get),u&&lc&&lc.call(r,e,t.set),r}pc.exports=Aer});var Ce=s((FJr,mc)=>{"use strict";var Oer=Pv(),Ser=Fv(),Ter=gc(),yu;Oer()?yu=Ser:yu=Ter;mc.exports=yu});var hc=s((MJr,dc)=>{"use strict";var Ier=Ce();function _er(r,e,t){Ier(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}dc.exports=_er});var w=s((BJr,yc)=>{"use strict";var Ler=hc();yc.exports=Ler});var qu=s((kJr,qc)=>{"use strict";function Per(r){return typeof r=="string"}qc.exports=Per});var wc=s((jJr,bc)=>{"use strict";var Rer=String.prototype.valueOf;bc.exports=Rer});var Nc=s((CJr,Ec)=>{"use strict";var Fer=wc();function Mer(r){try{return Fer.call(r),!0}catch{return!1}}Ec.exports=Mer});var bu=s((GJr,Ac)=>{"use strict";var Ber=Wi(),ker=ir(),jer=Nc(),Cer=Ber();function Ger(r){return typeof r=="object"?r instanceof String?!0:Cer?jer(r):ker(r)==="[object String]":!1}Ac.exports=Ger});var Sc=s((VJr,Oc)=>{"use strict";var Ver=qu(),Uer=bu();function Her(r){return Ver(r)||Uer(r)}Oc.exports=Her});var K=s((UJr,Ic)=>{"use strict";var Tc=w(),wu=Sc(),Wer=qu(),Der=bu();Tc(wu,"isPrimitive",Wer);Tc(wu,"isObject",Der);Ic.exports=wu});var Eu=s((HJr,_c)=>{"use strict";function zer(r){return typeof r=="number"}_c.exports=zer});var Pc=s((WJr,Lc)=>{"use strict";Lc.exports=Number});var zn=s((DJr,Rc)=>{"use strict";var Xer=Pc();Rc.exports=Xer});var Mc=s((zJr,Fc)=>{"use strict";var Jer=zn(),xer=Jer.prototype.toString;Fc.exports=xer});var kc=s((XJr,Bc)=>{"use strict";var Yer=Mc();function Zer(r){try{return Yer.call(r),!0}catch{return!1}}Bc.exports=Zer});var Nu=s((JJr,jc)=>{"use strict";var $er=Wi(),Qer=ir(),Ker=zn(),rtr=kc(),etr=$er();function ttr(r){return typeof r=="object"?r instanceof Ker?!0:etr?rtr(r):Qer(r)==="[object Number]":!1}jc.exports=ttr});var Gc=s((xJr,Cc)=>{"use strict";var itr=Eu(),ntr=Nu();function atr(r){return itr(r)||ntr(r)}Cc.exports=atr});var j=s((YJr,Uc)=>{"use strict";var Vc=w(),Au=Gc(),str=Eu(),utr=Nu();Vc(Au,"isPrimitive",str);Vc(Au,"isObject",utr);Uc.exports=Au});var Wc=s((ZJr,Hc)=>{"use strict";function otr(r){return r!==r}Hc.exports=otr});var E=s(($Jr,Dc)=>{"use strict";var ftr=Wc();Dc.exports=ftr});var Ou=s((QJr,zc)=>{"use strict";var vtr=j().isPrimitive,ctr=E();function ltr(r){return vtr(r)&&ctr(r)}zc.exports=ltr});var Su=s((KJr,Xc)=>{"use strict";var ptr=j().isObject,gtr=E();function mtr(r){return ptr(r)&&gtr(r.valueOf())}Xc.exports=mtr});var xc=s((rxr,Jc)=>{"use strict";var dtr=Ou(),htr=Su();function ytr(r){return dtr(r)||htr(r)}Jc.exports=ytr});var sr=s((exr,Zc)=>{"use strict";var Yc=w(),Tu=xc(),qtr=Ou(),btr=Su();Yc(Tu,"isPrimitive",qtr);Yc(Tu,"isObject",btr);Zc.exports=Tu});var L=s((txr,$c)=>{"use strict";var wtr=Number.POSITIVE_INFINITY;$c.exports=wtr});var U=s((ixr,Qc)=>{"use strict";var Etr=zn(),Ntr=Etr.NEGATIVE_INFINITY;Qc.exports=Ntr});var rl=s((nxr,Kc)=>{"use strict";var Atr=Math.floor;Kc.exports=Atr});var Q=s((axr,el)=>{"use strict";var Otr=rl();el.exports=Otr});var il=s((sxr,tl)=>{"use strict";var Str=Q();function Ttr(r){return Str(r)===r}tl.exports=Ttr});var Ir=s((uxr,nl)=>{"use strict";var Itr=il();nl.exports=Itr});var Iu=s((oxr,al)=>{"use strict";var _tr=L(),Ltr=U(),Ptr=Ir();function Rtr(r){return r<_tr&&r>Ltr&&Ptr(r)}al.exports=Rtr});var _u=s((fxr,sl)=>{"use strict";var Ftr=j().isPrimitive,Mtr=Iu();function Btr(r){return Ftr(r)&&Mtr(r)}sl.exports=Btr});var Lu=s((vxr,ul)=>{"use strict";var ktr=j().isObject,jtr=Iu();function Ctr(r){return ktr(r)&&jtr(r.valueOf())}ul.exports=Ctr});var fl=s((cxr,ol)=>{"use strict";var Gtr=_u(),Vtr=Lu();function Utr(r){return Gtr(r)||Vtr(r)}ol.exports=Utr});var Cr=s((lxr,cl)=>{"use strict";var vl=w(),Pu=fl(),Htr=_u(),Wtr=Lu();vl(Pu,"isPrimitive",Htr);vl(Pu,"isObject",Wtr);cl.exports=Pu});var Ru=s((pxr,ll)=>{"use strict";var Dtr=Object.prototype.propertyIsEnumerable;ll.exports=Dtr});var ml=s((gxr,gl)=>{"use strict";var ztr=Ru(),pl;function Xtr(){return!ztr.call("beep","0")}pl=Xtr();gl.exports=pl});var hl=s((mxr,dl)=>{"use strict";var Jtr=K(),xtr=sr().isPrimitive,Ytr=Cr().isPrimitive,Ztr=Ru(),$tr=ml();function Qtr(r,e){var t;return r==null?!1:(t=Ztr.call(r,e),!t&&$tr&&Jtr(r)?(e=+e,!xtr(e)&&Ytr(e)&&e>=0&&e<r.length):t)}dl.exports=Qtr});var zi=s((dxr,yl)=>{"use strict";var Ktr=hl();yl.exports=Ktr});var bl=s((hxr,ql)=>{"use strict";var rir=ir(),Fu;function eir(r){return rir(r)==="[object Array]"}Array.isArray?Fu=Array.isArray:Fu=eir;ql.exports=Fu});var mr=s((yxr,wl)=>{"use strict";var tir=bl();wl.exports=tir});var zt=s((qxr,El)=>{"use strict";var iir=4294967295;El.exports=iir});var Al=s((bxr,Nl)=>{"use strict";var nir=O(),air=zi(),sir=mr(),uir=Ir(),oir=zt();function fir(r){return r!==null&&typeof r=="object"&&!sir(r)&&typeof r.length=="number"&&uir(r.length)&&r.length>=0&&r.length<=oir&&nir(r,"callee")&&!air(r,"callee")}Nl.exports=fir});var Bu=s((wxr,Ol)=>{"use strict";var vir=Tv(),cir=mu(),lir=Al(),Mu;vir?Mu=cir:Mu=lir;Ol.exports=Mu});var Il=s((Exr,Tl)=>{"use strict";var pir=Bu(),Sl=Hn(),gir=Array.prototype.slice;function mir(r){return pir(r)?Sl(gir.call(r)):Sl(r)}Tl.exports=mir});var Ll=s((Nxr,_l)=>{"use strict";var dir=mr(),hir=q();function yir(r){if(typeof r!="function")throw new TypeError(hir("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!dir(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}_l.exports=yir});var Rl=s((Axr,Pl)=>{"use strict";var qir=Ll();Pl.exports=qir});var Ml=s((Oxr,Fl)=>{"use strict";function bir(r){return r!==null&&typeof r=="object"}Fl.exports=bir});var ju=s((Sxr,Bl)=>{"use strict";var wir=w(),Eir=Rl(),ku=Ml(),Nir=Eir(ku);wir(ku,"isObjectLikeArray",Nir);Bl.exports=ku});var jl=s((Txr,kl)=>{"use strict";function Air(){}kl.exports=Air});var k=s((Ixr,Cl)=>{"use strict";var Oir=jl();Cl.exports=Oir});var Vl=s((_xr,Gl)=>{"use strict";var Sir=zi(),Tir=k(),Iir=Sir(Tir,"prototype");Gl.exports=Iir});var Hl=s((Lxr,Ul)=>{"use strict";var _ir=zi(),Lir={toString:null},Pir=!_ir(Lir,"toString");Ul.exports=Pir});var Dl=s((Pxr,Wl)=>{"use strict";var Rir=9007199254740991;Wl.exports=Rir});var Xl=s((Rxr,zl)=>{"use strict";var Fir=Ir(),Mir=Dl();function Bir(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Fir(r.length)&&r.length>=0&&r.length<=Mir}zl.exports=Bir});var Gr=s((Fxr,Jl)=>{"use strict";var kir=Xl();Jl.exports=kir});var $l=s((Mxr,Zl)=>{"use strict";var xl=sr(),jir=Gr(),Cir=K().isPrimitive,Gir=Cr().isPrimitive,Yl=q();function Vir(r,e,t){var i,n;if(!jir(r)&&!Cir(r))throw new TypeError(Yl("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!Gir(t))throw new TypeError(Yl("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(xl(e)){for(;n<i;n++)if(xl(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}Zl.exports=Vir});var Xn=s((Bxr,Ql)=>{"use strict";var Uir=$l();Ql.exports=Uir});var r4=s((kxr,Kl)=>{"use strict";var Hir=/./;Kl.exports=Hir});var Cu=s((jxr,e4)=>{"use strict";function Wir(r){return typeof r=="boolean"}e4.exports=Wir});var i4=s((Cxr,t4)=>{"use strict";var Dir=Boolean;t4.exports=Dir});var a4=s((Gxr,n4)=>{"use strict";var zir=i4();n4.exports=zir});var u4=s((Vxr,s4)=>{"use strict";var Xir=Boolean.prototype.toString;s4.exports=Xir});var f4=s((Uxr,o4)=>{"use strict";var Jir=u4();function xir(r){try{return Jir.call(r),!0}catch{return!1}}o4.exports=xir});var Gu=s((Hxr,v4)=>{"use strict";var Yir=Wi(),Zir=ir(),$ir=a4(),Qir=f4(),Kir=Yir();function rnr(r){return typeof r=="object"?r instanceof $ir?!0:Kir?Qir(r):Zir(r)==="[object Boolean]":!1}v4.exports=rnr});var l4=s((Wxr,c4)=>{"use strict";var enr=Cu(),tnr=Gu();function inr(r){return enr(r)||tnr(r)}c4.exports=inr});var vr=s((Dxr,g4)=>{"use strict";var p4=w(),Vu=l4(),nnr=Cu(),anr=Gu();p4(Vu,"isPrimitive",nnr);p4(Vu,"isObject",anr);g4.exports=Vu});var d4=s((zxr,m4)=>{"use strict";function snr(){return new Function("return this;")()}m4.exports=snr});var y4=s((Xxr,h4)=>{"use strict";var unr=typeof self=="object"?self:null;h4.exports=unr});var b4=s((Jxr,q4)=>{"use strict";var onr=typeof window=="object"?window:null;q4.exports=onr});var E4=s((xxr,w4)=>{"use strict";var fnr=typeof globalThis=="object"?globalThis:null;w4.exports=fnr});var T4=s((Yxr,S4)=>{"use strict";var vnr=vr().isPrimitive,cnr=q(),lnr=d4(),N4=y4(),A4=b4(),O4=E4();function pnr(r){if(arguments.length){if(!vnr(r))throw new TypeError(cnr("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return lnr()}if(O4)return O4;if(N4)return N4;if(A4)return A4;throw new Error("unexpected error. Unable to resolve global object.")}S4.exports=pnr});var L4=s((Zxr,_4)=>{"use strict";var gnr=T4(),I4=gnr(),mnr=I4.document&&I4.document.childNodes;_4.exports=mnr});var R4=s(($xr,P4)=>{"use strict";var dnr=Int8Array;P4.exports=dnr});var M4=s((Qxr,F4)=>{"use strict";var hnr=r4(),ynr=L4(),qnr=R4();function bnr(){return typeof hnr=="function"||typeof qnr=="object"||typeof ynr=="function"}F4.exports=bnr});var Uu=s((Kxr,B4)=>{"use strict";function wnr(){return/^\s*function\s*([^(]*)/i}B4.exports=wnr});var j4=s((rYr,k4)=>{"use strict";var Enr=Uu(),Nnr=Enr();k4.exports=Nnr});var Hu=s((eYr,G4)=>{"use strict";var Anr=w(),C4=Uu(),Onr=j4();Anr(C4,"REGEXP",Onr);G4.exports=C4});var U4=s((tYr,V4)=>{"use strict";var Snr=ju();function Tnr(r){return Snr(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}V4.exports=Tnr});var Et=s((iYr,H4)=>{"use strict";var Inr=U4();H4.exports=Inr});var D4=s((nYr,W4)=>{"use strict";var _nr=ir(),Lnr=Hu().REGEXP,Pnr=Et();function Rnr(r){var e,t,i;if(t=_nr(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Lnr.exec(i.toString()),e)return e[1]}return Pnr(r)?"Buffer":t}W4.exports=Rnr});var Ge=s((aYr,z4)=>{"use strict";var Fnr=D4();z4.exports=Fnr});var J4=s((sYr,X4)=>{"use strict";var Mnr=Ge();function Bnr(r){var e;return r===null?"null":(e=typeof r,e==="object"?Mnr(r).toLowerCase():e)}X4.exports=Bnr});var Y4=s((uYr,x4)=>{"use strict";var knr=Ge();function jnr(r){return knr(r).toLowerCase()}x4.exports=jnr});var Jn=s((oYr,Z4)=>{"use strict";var Cnr=M4(),Gnr=J4(),Vnr=Y4(),Unr=Cnr()?Vnr:Gnr;Z4.exports=Unr});var Wu=s((fYr,$4)=>{"use strict";function Hnr(r){return r.constructor&&r.constructor.prototype===r}$4.exports=Hnr});var Q4=s((vYr,Wnr)=>{Wnr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var r6=s((cYr,K4)=>{"use strict";var Dnr=typeof window>"u"?void 0:window;K4.exports=Dnr});var n6=s((lYr,i6)=>{"use strict";var znr=O(),Xnr=Xn(),e6=Jn(),Jnr=Wu(),xnr=Q4(),Xt=r6(),t6;function Ynr(){var r;if(e6(Xt)==="undefined")return!1;for(r in Xt)try{Xnr(xnr,r)===-1&&znr(Xt,r)&&Xt[r]!==null&&e6(Xt[r])==="object"&&Jnr(Xt[r])}catch{return!0}return!1}t6=Ynr();i6.exports=t6});var s6=s((pYr,a6)=>{"use strict";var Znr=typeof window<"u";a6.exports=Znr});var f6=s((gYr,o6)=>{"use strict";var $nr=n6(),u6=Wu(),Qnr=s6();function Knr(r){if(Qnr===!1&&!$nr)return u6(r);try{return u6(r)}catch{return!1}}o6.exports=Knr});var v6=s((mYr,rar)=>{rar.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var p6=s((dYr,l6)=>{"use strict";var ear=ju(),Du=O(),tar=Bu(),iar=Vl(),nar=Hl(),aar=f6(),c6=v6();function sar(r){var e,t,i,n,a,u,o;if(n=[],tar(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!Du(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!ear(r))return n;t=iar&&i}for(a in r)!(t&&a==="prototype")&&Du(r,a)&&n.push(String(a));if(nar)for(e=aar(r),o=0;o<c6.length;o++)u=c6[o],!(e&&u==="constructor")&&Du(r,u)&&n.push(String(u));return n}l6.exports=sar});var m6=s((hYr,g6)=>{"use strict";var uar=Kf(),oar=ev(),far=Hn(),car=Il(),lar=p6(),xn;oar?uar()?xn=car:xn=far:xn=lar;g6.exports=xn});var Jt=s((yYr,d6)=>{"use strict";var par=m6();d6.exports=par});var y6=s((qYr,h6)=>{"use strict";var gar=Jt(),mar=O(),dar=q();function har(r,e){var t,i,n;for(t=gar(r),n=0;n<t.length;n++){if(i=t[n],mar(e,i))throw new Error(dar("unexpected error. Property already exists on destination object. Property: %s.",i));e[i]=r[i]}return e}h6.exports=har});var b6=s((bYr,q6)=>{"use strict";var yar=mr();function qar(r){return typeof r=="object"&&r!==null&&!yar(r)}q6.exports=qar});var Yn=s((wYr,w6)=>{"use strict";var bar=b6();w6.exports=bar});var N6=s((EYr,E6)=>{"use strict";var war=Jn();function Ear(r){return war(r)==="function"}E6.exports=Ear});var _=s((NYr,A6)=>{"use strict";var Nar=N6();A6.exports=Nar});var S6=s((AYr,O6)=>{"use strict";var Aar=Object;O6.exports=Aar});var xt=s((OYr,T6)=>{"use strict";var Oar=S6();T6.exports=Oar});var _6=s((SYr,I6)=>{"use strict";var Sar=Object.getPrototypeOf;I6.exports=Sar});var P6=s((TYr,L6)=>{"use strict";function Tar(r){return r.__proto__}L6.exports=Tar});var F6=s((IYr,R6)=>{"use strict";var Iar=ir(),_ar=P6();function Lar(r){var e=_ar(r);return e||e===null?e:Iar(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}R6.exports=Lar});var B6=s((_Yr,M6)=>{"use strict";var Par=_(),Rar=_6(),Far=F6(),zu;Par(Object.getPrototypeOf)?zu=Rar:zu=Far;M6.exports=zu});var j6=s((LYr,k6)=>{"use strict";var Mar=xt(),Bar=B6();function kar(r){return r==null?null:(r=Mar(r),Bar(r))}k6.exports=kar});var Nt=s((PYr,C6)=>{"use strict";var jar=j6();C6.exports=jar});var U6=s((RYr,V6)=>{"use strict";var Car=Yn(),G6=_(),Gar=Nt(),Zn=O(),Var=ir(),Uar=Object.prototype;function Har(r){var e;for(e in r)if(!Zn(r,e))return!1;return!0}function War(r){var e;return Car(r)?(e=Gar(r),e?!Zn(r,"constructor")&&Zn(e,"constructor")&&G6(e.constructor)&&Var(e.constructor)==="[object Function]"&&Zn(e,"isPrototypeOf")&&G6(e.isPrototypeOf)&&(e===Uar||Har(r)):!0):!1}V6.exports=War});var I=s((FYr,H6)=>{"use strict";var Dar=U6();H6.exports=Dar});var D6=s((MYr,W6)=>{"use strict";var zar=Ce();function Xar(r,e,t){zar(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}W6.exports=Xar});var X6=s((BYr,z6)=>{"use strict";var Jar=D6();z6.exports=Jar});var x6=s((kYr,J6)=>{"use strict";var xar=L(),Yar=U();function Zar(r){return r===xar||r===Yar}J6.exports=Zar});var Rr=s((jYr,Y6)=>{"use strict";var $ar=x6();Y6.exports=$ar});var $6=s((CYr,Z6)=>{"use strict";function Qar(r){return Math.abs(r)}Z6.exports=Qar});var Y=s((GYr,Q6)=>{"use strict";var Kar=$6();Q6.exports=Kar});var r8=s((VYr,K6)=>{"use strict";var r0r=ir(),e0r=typeof Uint32Array=="function";function t0r(r){return e0r&&r instanceof Uint32Array||r0r(r)==="[object Uint32Array]"}K6.exports=t0r});var Kr=s((UYr,e8)=>{"use strict";var i0r=r8();e8.exports=i0r});var i8=s((HYr,t8)=>{"use strict";var n0r=typeof Uint32Array=="function"?Uint32Array:null;t8.exports=n0r});var s8=s((WYr,a8)=>{"use strict";var a0r=Kr(),Xu=zt(),n8=i8();function s0r(){var r,e;if(typeof n8!="function")return!1;try{e=[1,3.14,-3.14,Xu+1,Xu+2],e=new n8(e),r=a0r(e)&&e[0]===1&&e[1]===3&&e[2]===Xu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}a8.exports=s0r});var o8=s((DYr,u8)=>{"use strict";var u0r=s8();u8.exports=u0r});var v8=s((zYr,f8)=>{"use strict";var o0r=typeof Uint32Array=="function"?Uint32Array:void 0;f8.exports=o0r});var l8=s((XYr,c8)=>{"use strict";function f0r(){throw new Error("not implemented")}c8.exports=f0r});var lr=s((JYr,p8)=>{"use strict";var v0r=o8(),c0r=v8(),l0r=l8(),Ju;v0r()?Ju=c0r:Ju=l0r;p8.exports=Ju});var m8=s((xYr,g8)=>{"use strict";var p0r=ir(),g0r=typeof Float64Array=="function";function m0r(r){return g0r&&r instanceof Float64Array||p0r(r)==="[object Float64Array]"}g8.exports=m0r});var h8=s((YYr,d8)=>{"use strict";var d0r=m8();d8.exports=d0r});var q8=s((ZYr,y8)=>{"use strict";var h0r=typeof Float64Array=="function"?Float64Array:null;y8.exports=h0r});var E8=s(($Yr,w8)=>{"use strict";var y0r=h8(),b8=q8();function q0r(){var r,e;if(typeof b8!="function")return!1;try{e=new b8([1,3.14,-3.14,NaN]),r=y0r(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}w8.exports=q0r});var xu=s((QYr,N8)=>{"use strict";var b0r=E8();N8.exports=b0r});var O8=s((KYr,A8)=>{"use strict";var w0r=typeof Float64Array=="function"?Float64Array:void 0;A8.exports=w0r});var T8=s((rZr,S8)=>{"use strict";function E0r(){throw new Error("not implemented")}S8.exports=E0r});var dr=s((eZr,I8)=>{"use strict";var N0r=xu(),A0r=O8(),O0r=T8(),Yu;N0r()?Yu=A0r:Yu=O0r;I8.exports=Yu});var L8=s((tZr,_8)=>{"use strict";var S0r=ir(),T0r=typeof Uint8Array=="function";function I0r(r){return T0r&&r instanceof Uint8Array||S0r(r)==="[object Uint8Array]"}_8.exports=I0r});var R8=s((iZr,P8)=>{"use strict";var _0r=L8();P8.exports=_0r});var M8=s((nZr,F8)=>{"use strict";var L0r=255;F8.exports=L0r});var k8=s((aZr,B8)=>{"use strict";var P0r=typeof Uint8Array=="function"?Uint8Array:null;B8.exports=P0r});var G8=s((sZr,C8)=>{"use strict";var R0r=R8(),Zu=M8(),j8=k8();function F0r(){var r,e;if(typeof j8!="function")return!1;try{e=[1,3.14,-3.14,Zu+1,Zu+2],e=new j8(e),r=R0r(e)&&e[0]===1&&e[1]===3&&e[2]===Zu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}C8.exports=F0r});var U8=s((uZr,V8)=>{"use strict";var M0r=G8();V8.exports=M0r});var W8=s((oZr,H8)=>{"use strict";var B0r=typeof Uint8Array=="function"?Uint8Array:void 0;H8.exports=B0r});var z8=s((fZr,D8)=>{"use strict";function k0r(){throw new Error("not implemented")}D8.exports=k0r});var Yt=s((vZr,X8)=>{"use strict";var j0r=U8(),C0r=W8(),G0r=z8(),$u;j0r()?$u=C0r:$u=G0r;X8.exports=$u});var x8=s((cZr,J8)=>{"use strict";var V0r=ir(),U0r=typeof Uint16Array=="function";function H0r(r){return U0r&&r instanceof Uint16Array||V0r(r)==="[object Uint16Array]"}J8.exports=H0r});var Z8=s((lZr,Y8)=>{"use strict";var W0r=x8();Y8.exports=W0r});var Q8=s((pZr,$8)=>{"use strict";var D0r=65535;$8.exports=D0r});var r5=s((gZr,K8)=>{"use strict";var z0r=typeof Uint16Array=="function"?Uint16Array:null;K8.exports=z0r});var i5=s((mZr,t5)=>{"use strict";var X0r=Z8(),Qu=Q8(),e5=r5();function J0r(){var r,e;if(typeof e5!="function")return!1;try{e=[1,3.14,-3.14,Qu+1,Qu+2],e=new e5(e),r=X0r(e)&&e[0]===1&&e[1]===3&&e[2]===Qu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}t5.exports=J0r});var a5=s((dZr,n5)=>{"use strict";var x0r=i5();n5.exports=x0r});var u5=s((hZr,s5)=>{"use strict";var Y0r=typeof Uint16Array=="function"?Uint16Array:void 0;s5.exports=Y0r});var f5=s((yZr,o5)=>{"use strict";function Z0r(){throw new Error("not implemented")}o5.exports=Z0r});var Zt=s((qZr,v5)=>{"use strict";var $0r=a5(),Q0r=u5(),K0r=f5(),Ku;$0r()?Ku=Q0r:Ku=K0r;v5.exports=Ku});var l5=s((bZr,c5)=>{"use strict";var rsr=Yt(),esr=Zt(),tsr={uint16:esr,uint8:rsr};c5.exports=tsr});var d5=s((wZr,m5)=>{"use strict";var p5=l5(),g5;function isr(){var r,e;return r=new p5.uint16(1),r[0]=4660,e=new p5.uint8(r.buffer),e[0]===52}g5=isr();m5.exports=g5});var At=s((EZr,h5)=>{"use strict";var nsr=d5();h5.exports=nsr});var q5=s((NZr,y5)=>{"use strict";var asr=At(),ro;asr===!0?ro=1:ro=0;y5.exports=ro});var E5=s((AZr,w5)=>{"use strict";var ssr=lr(),usr=dr(),osr=q5(),b5=new usr(1),fsr=new ssr(b5.buffer);function vsr(r){return b5[0]=r,fsr[osr]}w5.exports=vsr});var tr=s((OZr,N5)=>{"use strict";var csr=E5();N5.exports=csr});var O5=s((SZr,A5)=>{"use strict";var lsr=At(),eo;lsr===!0?eo=1:eo=0;A5.exports=eo});var T5=s((TZr,S5)=>{"use strict";var psr=lr(),gsr=dr(),msr=O5(),to=new gsr(1),dsr=new psr(to.buffer);function hsr(r,e){return to[0]=r,dsr[msr]=e>>>0,to[0]}S5.exports=hsr});var re=s((IZr,I5)=>{"use strict";var ysr=T5();I5.exports=ysr});var Xr=s((_Zr,_5)=>{"use strict";var qsr=1023;_5.exports=qsr});var P5=s((LZr,L5)=>{"use strict";function bsr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}L5.exports=bsr});var F5=s((PZr,R5)=>{"use strict";function wsr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}R5.exports=wsr});var j5=s((RZr,k5)=>{"use strict";var M5=tr(),Esr=re(),Nsr=E(),Asr=Xr(),Osr=U(),Ssr=P5(),Tsr=F5(),$n=.6931471803691238,Qn=19082149292705877e-26,Isr=0x40000000000000,_sr=.3333333333333333,B5=1048575,Lsr=2146435072,Psr=1048576,Rsr=1072693248;function Fsr(r){var e,t,i,n,a,u,o,v,f,c,l,p;return r===0?Osr:Nsr(r)||r<0?NaN:(t=M5(r),a=0,t<Psr&&(a-=54,r*=Isr,t=M5(r)),t>=Lsr?r+r:(a+=(t>>20)-Asr|0,t&=B5,v=t+614244&1048576|0,r=Esr(r,t|v^Rsr),a+=v>>20|0,o=r-1,(B5&2+t)<3?o===0?a===0?0:a*$n+a*Qn:(u=o*o*(.5-_sr*o),a===0?o-u:a*$n-(u-a*Qn-o)):(c=o/(2+o),p=c*c,v=t-398458|0,l=p*p,f=440401-t|0,n=l*Ssr(l),i=p*Tsr(l),v|=f,u=i+n,v>0?(e=.5*o*o,a===0?o-(e-c*(e+u)):a*$n-(e-(c*(e+u)+a*Qn)-o)):a===0?o-c*(o-u):a*$n-(c*(o-u)-a*Qn-o))))}k5.exports=Fsr});var P=s((FZr,C5)=>{"use strict";var Msr=j5();C5.exports=Msr});var V5=s((MZr,G5)=>{"use strict";var Bsr=Math.ceil;G5.exports=Bsr});var Xi=s((BZr,U5)=>{"use strict";var ksr=V5();U5.exports=ksr});var W5=s((kZr,H5)=>{"use strict";var jsr=Q(),Csr=Xi();function Gsr(r){return r<0?Csr(r):jsr(r)}H5.exports=Gsr});var Kn=s((jZr,D5)=>{"use strict";var Vsr=W5();D5.exports=Vsr});var X5=s((CZr,z5)=>{"use strict";function Usr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}z5.exports=Usr});var x5=s((GZr,J5)=>{"use strict";function Hsr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}J5.exports=Hsr});var Z5=s((VZr,Y5)=>{"use strict";var Wsr=X5(),Dsr=x5();function zsr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*Wsr(a),i+=n*n*Dsr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}Y5.exports=zsr});var io=s((UZr,$5)=>{"use strict";var Xsr=Z5();$5.exports=Xsr});var rp=s((HZr,K5)=>{"use strict";var Q5=-.16666666666666632,Jsr=.00833333333332249,xsr=-.0001984126982985795,Ysr=27557313707070068e-22,Zsr=-25050760253406863e-24,$sr=158969099521155e-24;function Qsr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=Jsr+a*(xsr+a*Ysr)+a*n*(Zsr+a*$sr),i=a*r,e===0?r+i*(Q5+a*t):r-(a*(.5*e-i*t)-e-i*Q5)}K5.exports=Qsr});var no=s((WZr,ep)=>{"use strict";var Ksr=rp();ep.exports=Ksr});var Jr=s((DZr,tp)=>{"use strict";var rur=2147483647;tp.exports=rur});var Ji=s((zZr,ip)=>{"use strict";var eur=2146435072;ip.exports=eur});var ra=s((XZr,np)=>{"use strict";var tur=1048575;np.exports=tur});var sp=s((JZr,ap)=>{"use strict";var iur=At(),ao;iur===!0?ao=0:ao=1;ap.exports=ao});var fp=s((xZr,op)=>{"use strict";var nur=lr(),aur=dr(),sur=sp(),up=new aur(1),uur=new nur(up.buffer);function our(r){return up[0]=r,uur[sur]}op.exports=our});var cp=s((YZr,vp)=>{"use strict";var fur=fp();vp.exports=fur});var gp=s((ZZr,pp)=>{"use strict";var vur=At(),lp,so,uo;vur===!0?(so=1,uo=0):(so=0,uo=1);lp={HIGH:so,LOW:uo};pp.exports=lp});var qp=s(($Zr,yp)=>{"use strict";var cur=lr(),lur=dr(),dp=gp(),hp=new lur(1),mp=new cur(hp.buffer),pur=dp.HIGH,gur=dp.LOW;function mur(r,e){return mp[pur]=r,mp[gur]=e,hp[0]}yp.exports=mur});var $t=s((QZr,bp)=>{"use strict";var dur=qp();bp.exports=dur});var oo=s((KZr,wp)=>{"use strict";var hur=1023;wp.exports=hur});var Np=s((r$r,Ep)=>{"use strict";var yur=-1023;Ep.exports=yur});var fo=s((e$r,Ap)=>{"use strict";var qur=-1074;Ap.exports=qur});var vo=s((t$r,Op)=>{"use strict";var bur=2147483648;Op.exports=bur});var Ip=s((i$r,Tp)=>{"use strict";var wur=At(),Sp,co,lo;wur===!0?(co=1,lo=0):(co=0,lo=1);Sp={HIGH:co,LOW:lo};Tp.exports=Sp});var po=s((n$r,Rp)=>{"use strict";var Eur=lr(),Nur=dr(),Lp=Ip(),Pp=new Nur(1),_p=new Eur(Pp.buffer),Aur=Lp.HIGH,Our=Lp.LOW;function Sur(r,e,t,i){return Pp[0]=r,e[i]=_p[Aur],e[i+t]=_p[Our],e}Rp.exports=Sur});var Mp=s((a$r,Fp)=>{"use strict";var Tur=po();function Iur(r){return Tur(r,[0>>>0,0>>>0],1,0)}Fp.exports=Iur});var Qt=s((s$r,kp)=>{"use strict";var _ur=w(),Bp=Mp(),Lur=po();_ur(Bp,"assign",Lur);kp.exports=Bp});var Cp=s((u$r,jp)=>{"use strict";var Pur=vo(),Rur=Jr(),Fur=Qt(),Mur=tr(),Bur=$t(),go=[0,0];function kur(r,e){var t,i;return Fur.assign(r,go,1,0),t=go[0],t&=Rur,i=Mur(e),i&=Pur,t|=i,Bur(t,go[1])}jp.exports=kur});var ea=s((o$r,Gp)=>{"use strict";var jur=Cp();Gp.exports=jur});var mo=s((f$r,Vp)=>{"use strict";var Cur=22250738585072014e-324;Vp.exports=Cur});var ho=s((v$r,Up)=>{"use strict";var Gur=mo(),Vur=Rr(),Uur=E(),Hur=Y(),Wur=4503599627370496;function Dur(r,e,t,i){return Uur(r)||Vur(r)?(e[i]=r,e[i+t]=0,e):r!==0&&Hur(r)<Gur?(e[i]=r*Wur,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}Up.exports=Dur});var Wp=s((c$r,Hp)=>{"use strict";var zur=ho();function Xur(r){return zur(r,[0,0],1,0)}Hp.exports=Xur});var Xp=s((l$r,zp)=>{"use strict";var Jur=w(),Dp=Wp(),xur=ho();Jur(Dp,"assign",xur);zp.exports=Dp});var xp=s((p$r,Jp)=>{"use strict";var Yur=tr(),Zur=Ji(),$ur=Xr();function Qur(r){var e=Yur(r);return e=(e&Zur)>>>20,e-$ur|0}Jp.exports=Qur});var Zp=s((g$r,Yp)=>{"use strict";var Kur=xp();Yp.exports=Kur});var Qp=s((m$r,$p)=>{"use strict";var ror=L(),eor=U(),tor=Xr(),ior=oo(),nor=Np(),aor=fo(),sor=E(),uor=Rr(),oor=ea(),vor=Xp().assign,cor=Zp(),lor=Qt(),por=$t(),gor=2220446049250313e-31,mor=2148532223>>>0,yo=[0,0],qo=[0,0];function dor(r,e){var t,i;return e===0||r===0||sor(r)||uor(r)?r:(vor(r,yo,1,0),r=yo[0],e+=yo[1],e+=cor(r),e<aor?oor(0,r):e>ior?r<0?eor:ror:(e<=nor?(e+=52,i=gor):i=1,lor.assign(r,qo,1,0),t=qo[0],t&=mor,t|=e+tor<<20,i*por(t,qo[1])))}$p.exports=dor});var ta=s((d$r,Kp)=>{"use strict";var hor=Qp();Kp.exports=hor});var e7=s((h$r,r7)=>{"use strict";function yor(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}r7.exports=yor});var bo=s((y$r,t7)=>{"use strict";var qor=e7();t7.exports=qor});var n7=s((q$r,i7)=>{"use strict";var bor=bo();function wor(r){return bor(0,r)}i7.exports=wor});var s7=s((b$r,a7)=>{"use strict";var Eor=n7();a7.exports=Eor});var c7=s((w$r,v7)=>{"use strict";var Nor=Q(),ia=ta(),sa=s7(),o7=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Aor=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],wo=16777216,Eo=5960464477539063e-23,na=sa(20),u7=sa(20),aa=sa(20),cr=sa(20);function f7(r,e,t,i,n,a,u,o,v){var f,c,l,p,m,h,d,g,y;for(p=a,y=i[t],g=t,m=0;g>0;m++)c=Eo*y|0,cr[m]=y-wo*c|0,y=i[g-1]+c,g-=1;if(y=ia(y,n),y-=8*Nor(y*.125),d=y|0,y-=d,l=0,n>0?(m=cr[t-1]>>24-n,d+=m,cr[t-1]-=m<<24-n,l=cr[t-1]>>23-n):n===0?l=cr[t-1]>>23:y>=.5&&(l=2),l>0){for(d+=1,f=0,m=0;m<t;m++)g=cr[m],f===0?g!==0&&(f=1,cr[m]=16777216-g):cr[m]=16777215-g;if(n>0)switch(n){case 1:cr[t-1]&=8388607;break;case 2:cr[t-1]&=4194303;break}l===2&&(y=1-y,f!==0&&(y-=ia(1,n)))}if(y===0){for(g=0,m=t-1;m>=a;m--)g|=cr[m];if(g===0){for(h=1;cr[a-h]===0;h++);for(m=t+1;m<=t+h;m++){for(v[o+m]=o7[u+m],c=0,g=0;g<=o;g++)c+=r[g]*v[o+(m-g)];i[m]=c}return t+=h,f7(r,e,t,i,n,a,u,o,v)}}if(y===0)for(t-=1,n-=24;cr[t]===0;)t-=1,n-=24;else y=ia(y,-n),y>=wo?(c=Eo*y|0,cr[t]=y-wo*c|0,t+=1,n+=24,cr[t]=c):cr[t]=y|0;for(c=ia(1,n),m=t;m>=0;m--)i[m]=c*cr[m],c*=Eo;for(m=t;m>=0;m--){for(c=0,h=0;h<=p&&h<=t-m;h++)c+=Aor[h]*i[m+h];aa[t-m]=c}for(c=0,m=t;m>=0;m--)c+=aa[m];for(l===0?e[0]=c:e[0]=-c,c=aa[0]-c,m=1;m<=t;m++)c+=aa[m];return l===0?e[1]=c:e[1]=-c,d&7}function Oor(r,e,t,i){var n,a,u,o,v,f,c,l,p;for(a=4,o=i-1,u=(t-3)/24|0,u<0&&(u=0),f=t-24*(u+1),l=u-o,p=o+a,c=0;c<=p;c++)l<0?na[c]=0:na[c]=o7[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*na[o+(c-l)];u7[c]=n}return v=a,f7(r,e,v,u7,f,a,u,o,na)}v7.exports=Oor});var p7=s((E$r,l7)=>{"use strict";var Sor=Math.round;l7.exports=Sor});var No=s((N$r,g7)=>{"use strict";var Tor=p7();g7.exports=Tor});var y7=s((A$r,h7)=>{"use strict";var Ior=No(),m7=tr(),_or=.6366197723675814,Lor=1.5707963267341256,Por=6077100506506192e-26,Ror=6077100506303966e-26,For=20222662487959506e-37,Mor=20222662487111665e-37,Bor=84784276603689e-45,d7=2047;function kor(r,e,t){var i,n,a,u,o,v,f;return n=Ior(r*_or),u=r-n*Lor,o=n*Por,f=e>>20|0,t[0]=u-o,i=m7(t[0]),v=f-(i>>20&d7),v>16&&(a=u,o=n*Ror,u=a-o,o=n*For-(a-u-o),t[0]=u-o,i=m7(t[0]),v=f-(i>>20&d7),v>49&&(a=u,o=n*Mor,u=a-o,o=n*Bor-(a-u-o),t[0]=u-o)),t[1]=u-t[0]-o,n}h7.exports=kor});var b7=s((O$r,q7)=>{"use strict";var jor=Jr(),Cor=Ji(),Gor=ra(),Vor=tr(),Uor=cp(),Hor=$t(),Wor=c7(),ua=y7(),Dor=0,zor=16777216,Ve=1.5707963267341256,Ot=6077100506506192e-26,oa=2*Ot,fa=3*Ot,va=4*Ot,Xor=598523,Jor=1072243195,xor=1073928572,Yor=1074752122,Zor=1074977148,$or=1075183036,Qor=1075388923,Kor=1075594811,r2r=1094263291,xi=[0,0,0],Yi=[0,0];function e2r(r,e){var t,i,n,a,u,o,v,f;if(n=Vor(r),a=n&jor|0,a<=Jor)return e[0]=r,e[1]=0,0;if(a<=Yor)return(a&Gor)===Xor?ua(r,a,e):a<=xor?r>0?(f=r-Ve,e[0]=f-Ot,e[1]=f-e[0]-Ot,1):(f=r+Ve,e[0]=f+Ot,e[1]=f-e[0]+Ot,-1):r>0?(f=r-2*Ve,e[0]=f-oa,e[1]=f-e[0]-oa,2):(f=r+2*Ve,e[0]=f+oa,e[1]=f-e[0]+oa,-2);if(a<=Kor)return a<=$or?a===Zor?ua(r,a,e):r>0?(f=r-3*Ve,e[0]=f-fa,e[1]=f-e[0]-fa,3):(f=r+3*Ve,e[0]=f+fa,e[1]=f-e[0]+fa,-3):a===Qor?ua(r,a,e):r>0?(f=r-4*Ve,e[0]=f-va,e[1]=f-e[0]-va,4):(f=r+4*Ve,e[0]=f+va,e[1]=f-e[0]+va,-4);if(a<r2r)return ua(r,a,e);if(a>=Cor)return e[0]=NaN,e[1]=NaN,0;for(t=Uor(r),i=(a>>20)-1046,f=Hor(a-(i<<20|0),t),o=0;o<2;o++)xi[o]=f|0,f=(f-xi[o])*zor;for(xi[2]=f,u=3;xi[u-1]===Dor;)u-=1;return v=Wor(xi,Yi,i,u,1),r<0?(e[0]=-Yi[0],e[1]=-Yi[1],-v):(e[0]=Yi[0],e[1]=Yi[1],v)}q7.exports=e2r});var Zi=s((S$r,w7)=>{"use strict";var t2r=b7();w7.exports=t2r});var A7=s((T$r,N7)=>{"use strict";var i2r=tr(),Ao=io(),E7=no(),n2r=Zi(),ee=[0,0],a2r=2147483647,s2r=1072243195,u2r=1044381696,o2r=2146435072;function f2r(r){var e,t;if(e=i2r(r),e&=a2r,e<=s2r)return e<u2r?1:Ao(r,0);if(e>=o2r)return NaN;switch(t=n2r(r,ee),t&3){case 0:return Ao(ee[0],ee[1]);case 1:return-E7(ee[0],ee[1]);case 2:return-Ao(ee[0],ee[1]);default:return E7(ee[0],ee[1])}}N7.exports=f2r});var St=s((I$r,O7)=>{"use strict";var v2r=A7();O7.exports=v2r});var I7=s((_$r,T7)=>{"use strict";var c2r=Jr(),l2r=Ji(),p2r=tr(),S7=io(),Oo=no(),g2r=Zi(),m2r=1072243195,d2r=1045430272,te=[0,0];function h2r(r){var e,t;if(e=p2r(r),e&=c2r,e<=m2r)return e<d2r?r:Oo(r,0);if(e>=l2r)return NaN;switch(t=g2r(r,te),t&3){case 0:return Oo(te[0],te[1]);case 1:return S7(te[0],te[1]);case 2:return-Oo(te[0],te[1]);default:return-S7(te[0],te[1])}}T7.exports=h2r});var Tt=s((L$r,_7)=>{"use strict";var y2r=I7();_7.exports=y2r});var _r=s((P$r,L7)=>{"use strict";var q2r=3.141592653589793;L7.exports=q2r});var F7=s((R$r,R7)=>{"use strict";var b2r=E(),w2r=Rr(),P7=St(),So=Tt(),E2r=Y(),$i=ea(),Qi=_r();function N2r(r){var e,t;return b2r(r)?NaN:w2r(r)?NaN:(t=r%2,e=E2r(t),e===0||e===1?$i(0,t):e<.25?So(Qi*t):e<.75?(e=.5-e,$i(P7(Qi*e),t)):e<1.25?(t=$i(1,t)-t,So(Qi*t)):e<1.75?(e-=1.5,-$i(P7(Qi*e),t)):(t-=$i(2,t),So(Qi*t)))}R7.exports=N2r});var Ki=s((F$r,M7)=>{"use strict";var A2r=F7();M7.exports=A2r});var k7=s((M$r,B7)=>{"use strict";function O2r(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}B7.exports=O2r});var C7=s((B$r,j7)=>{"use strict";function S2r(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}j7.exports=S2r});var V7=s((k$r,G7)=>{"use strict";function T2r(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}G7.exports=T2r});var H7=s((j$r,U7)=>{"use strict";function I2r(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}U7.exports=I2r});var D7=s((C$r,W7)=>{"use strict";function _2r(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}W7.exports=_2r});var X7=s((G$r,z7)=>{"use strict";function L2r(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}z7.exports=L2r});var x7=s((V$r,J7)=>{"use strict";function P2r(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}J7.exports=P2r});var Z7=s((U$r,Y7)=>{"use strict";function R2r(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}Y7.exports=R2r});var Q7=s((H$r,$7)=>{"use strict";function F2r(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}$7.exports=F2r});var r9=s((W$r,K7)=>{"use strict";function M2r(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}K7.exports=M2r});var i9=s((D$r,t9)=>{"use strict";var B2r=E(),k2r=Rr(),j2r=Y(),Kt=P(),C2r=Kn(),G2r=Ki(),V2r=_r(),To=L(),U2r=k7(),H2r=C7(),W2r=V7(),D2r=H7(),z2r=D7(),X2r=X7(),J2r=x7(),x2r=Z7(),Y2r=Q7(),Z2r=r9(),$2r=.07721566490153287,Q2r=.3224670334241136,K2r=1,r1r=-.07721566490153287,e1r=.48383612272381005,t1r=-.1475877229945939,i1r=.06462494023913339,n1r=-.07721566490153287,a1r=1,s1r=.4189385332046727,ca=1.4616321449683622,u1r=4503599627370496,o1r=0x400000000000000,f1r=8470329472543003e-37,e9=1.4616321449683622,v1r=-.12148629053584961,c1r=-3638676997039505e-33;function l1r(r){var e,t,i,n,a,u,o,v,f,c,l,p,m;if(B2r(r)||k2r(r))return r;if(r===0)return To;if(r<0?(e=!0,r=-r):e=!1,r<f1r)return-Kt(r);if(e){if(r>=u1r||(f=G2r(r),f===0))return To;t=Kt(V2r/j2r(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-Kt(r),r>=ca-1+.27?(l=1-r,i=0):r>=ca-1-.27?(l=r-(e9-1),i=1):(l=r,i=2)):(m=0,r>=ca+.27?(l=2-r,i=0):r>=ca-.27?(l=r-e9,i=1):(l=r-1,i=2)),i){case 0:p=l*l,u=$2r+p*U2r(p),a=p*(Q2r+p*H2r(p)),o=l*u+a,m+=o-.5*l;break;case 1:p=l*l,c=p*l,u=e1r+c*z2r(c),a=t1r+c*X2r(c),n=i1r+c*J2r(c),o=p*u-(c1r-c*(a+l*n)),m+=v1r+o;break;case 2:u=l*(n1r+l*x2r(l)),a=a1r+l*Y2r(l),m+=-.5*l+u/a;break}else if(r<8)switch(i=C2r(r),l=r-i,o=l*(r1r+l*D2r(l)),v=K2r+l*W2r(l),m=.5*l+o/v,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=Kt(p)}else r<o1r?(f=Kt(r),p=1/r,l=p*p,c=s1r+p*Z2r(l),m=(r-.5)*(f-1)+c):m=r*(Kt(r)-1);return e&&(m=t-m),m}t9.exports=l1r});var rn=s((z$r,n9)=>{"use strict";var p1r=i9();n9.exports=p1r});var s9=s((X$r,a9)=>{"use strict";var g1r=U();function m1r(r){return r===0&&1/r===g1r}a9.exports=m1r});var Io=s((J$r,u9)=>{"use strict";var d1r=s9();u9.exports=d1r});var _o=s((x$r,o9)=>{"use strict";var h1r=2.5066282746310007;o9.exports=h1r});var v9=s((Y$r,f9)=>{"use strict";var y1r=Ir();function q1r(r){return y1r(r/2)}f9.exports=q1r});var la=s((Z$r,c9)=>{"use strict";var b1r=v9();c9.exports=b1r});var g9=s(($$r,p9)=>{"use strict";var l9=la();function w1r(r){return r>0?l9(r-1):l9(r+1)}p9.exports=w1r});var Lo=s((Q$r,m9)=>{"use strict";var E1r=g9();m9.exports=E1r});var h9=s((K$r,d9)=>{"use strict";var N1r=Math.sqrt;d9.exports=N1r});var C=s((rQr,y9)=>{"use strict";var A1r=h9();y9.exports=A1r});var b9=s((eQr,q9)=>{"use strict";var O1r=At(),Po;O1r===!0?Po=0:Po=1;q9.exports=Po});var E9=s((tQr,w9)=>{"use strict";var S1r=lr(),T1r=dr(),I1r=b9(),Ro=new T1r(1),_1r=new S1r(Ro.buffer);function L1r(r,e){return Ro[0]=r,_1r[I1r]=e>>>0,Ro[0]}w9.exports=L1r});var ie=s((iQr,N9)=>{"use strict";var P1r=E9();N9.exports=P1r});var O9=s((nQr,A9)=>{"use strict";function R1r(r){return r|0}A9.exports=R1r});var Fo=s((aQr,S9)=>{"use strict";var F1r=O9();S9.exports=F1r});var _9=s((sQr,I9)=>{"use strict";var T9=Lo(),M1r=ea(),B1r=U(),pa=L();function k1r(r,e){return e===B1r?pa:e===pa?0:e>0?T9(e)?r:0:T9(e)?M1r(pa,r):pa}I9.exports=k1r});var P9=s((uQr,L9)=>{"use strict";var j1r=Jr(),C1r=tr(),G1r=1072693247,ga=1e300,ma=1e-300;function V1r(r,e){var t,i;return i=C1r(r),t=i&j1r,t<=G1r?e<0?ga*ga:ma*ma:e>0?ga*ga:ma*ma}L9.exports=V1r});var M9=s((oQr,F9)=>{"use strict";var U1r=Y(),R9=L();function H1r(r,e){return r===-1?(r-r)/(r-r):r===1?1:U1r(r)<1==(e===R9)?0:R9}F9.exports=H1r});var k9=s((fQr,B9)=>{"use strict";function W1r(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}B9.exports=W1r});var V9=s((vQr,G9)=>{"use strict";var D1r=tr(),da=ie(),j9=re(),z1r=Xr(),X1r=k9(),J1r=1048575,C9=1048576,x1r=1072693248,Y1r=536870912,Z1r=524288,$1r=20,Q1r=9007199254740992,K1r=.9617966939259756,r3r=.9617967009544373,e3r=-7028461650952758e-24,t3r=[1,1.5],i3r=[0,.5849624872207642],n3r=[0,1350039202129749e-23];function a3r(r,e,t){var i,n,a,u,o,v,f,c,l,p,m,h,d,g,y,N,A,G,T,J,fr,z;return J=0,t<C9&&(e*=Q1r,J-=53,t=D1r(e)),J+=(t>>$1r)-z1r|0,fr=t&J1r|0,t=fr|x1r|0,fr<=235662?z=0:fr<767610?z=1:(z=0,J+=1,t-=C9),e=j9(e,t),c=t3r[z],G=e-c,T=1/(e+c),n=G*T,u=da(n,0),i=(t>>1|Y1r)+Z1r,i+=z<<18,v=j9(0,i),f=e-(v-c),o=T*(G-u*v-u*f),a=n*n,A=a*a*X1r(a),A+=o*(u+n),a=u*u,v=3+a+A,v=da(v,0),f=A-(v-3-a),G=u*v,T=o*v+f*n,p=G+T,p=da(p,0),m=T-(p-G),h=r3r*p,d=e3r*p+m*K1r+n3r[z],l=i3r[z],N=J,g=h+d+l+N,g=da(g,0),y=d-(g-N-l-h),r[0]=g,r[1]=y,r}G9.exports=a3r});var H9=s((cQr,U9)=>{"use strict";function s3r(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}U9.exports=s3r});var D9=s((lQr,W9)=>{"use strict";var u3r=ie(),o3r=H9(),f3r=1.4426950408889634,v3r=1.4426950216293335,c3r=19259629911266175e-24;function l3r(r,e){var t,i,n,a,u,o;return n=e-1,a=n*n*o3r(n),u=v3r*n,o=n*c3r-a*f3r,i=u+o,i=u3r(i,0),t=o-(i-u),r[0]=i,r[1]=t,r}W9.exports=l3r});var ha=s((pQr,z9)=>{"use strict";var p3r=.6931471805599453;z9.exports=p3r});var J9=s((gQr,X9)=>{"use strict";function g3r(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}X9.exports=g3r});var rg=s((mQr,K9)=>{"use strict";var m3r=tr(),x9=re(),d3r=ie(),h3r=Fo(),y3r=ta(),q3r=ha(),Y9=Xr(),Z9=Jr(),$9=ra(),b3r=J9(),Q9=1048576,w3r=1071644672,en=20,E3r=.6931471824645996,N3r=-1904654299957768e-24;function A3r(r,e,t){var i,n,a,u,o,v,f,c,l,p,m;return p=r&Z9|0,m=(p>>en)-Y9|0,l=0,p>w3r&&(l=r+(Q9>>m+1)>>>0,m=((l&Z9)>>en)-Y9|0,i=(l&~($9>>m))>>>0,a=x9(0,i),l=(l&$9|Q9)>>en-m>>>0,r<0&&(l=-l),e-=a),a=t+e,a=d3r(a,0),o=a*E3r,v=(t-(a-e))*q3r+a*N3r,c=o+v,f=v-(c-o),a=c*c,n=c-a*b3r(a),u=c*n/(n-2)-(f+c*f),c=1-(u-c),r=m3r(c),r=h3r(r),r+=l<<en>>>0,r>>en<=0?c=y3r(c,l):c=x9(c,r),c}K9.exports=A3r});var cg=s((dQr,vg)=>{"use strict";var eg=E(),tg=Lo(),ig=Rr(),O3r=Ir(),ng=C(),S3r=Y(),Mo=Qt(),T3r=ie(),ag=Fo(),I3r=U(),_3r=L(),Bo=Jr(),L3r=_9(),P3r=P9(),R3r=M9(),F3r=V9(),M3r=D9(),B3r=rg(),k3r=1072693247,j3r=1105199104,C3r=1139802112,sg=1083179008,G3r=1072693248,V3r=1083231232,U3r=3230714880>>>0,ug=31,Ue=1e300,He=1e-300,H3r=8008566259537294e-32,ne=[0,0],og=[0,0];function fg(r,e){var t,i,n,a,u,o,v,f,c,l,p,m,h,d,g,y;if(eg(r)||eg(e))return NaN;if(Mo.assign(e,ne,1,0),o=ne[0],v=ne[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return ng(r);if(e===-.5)return 1/ng(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(ig(e))return R3r(r,e)}if(Mo.assign(r,ne,1,0),a=ne[0],u=ne[1],u===0){if(a===0)return L3r(r,e);if(r===1)return 1;if(r===-1&&tg(e))return-1;if(ig(r))return r===I3r?fg(-0,-e):e<0?0:_3r}if(r<0&&O3r(e)===!1)return(r-r)/(r-r);if(n=S3r(r),t=a&Bo|0,i=o&Bo|0,f=a>>>ug|0,c=o>>>ug|0,f&&tg(e)?f=-1:f=1,i>j3r){if(i>C3r)return P3r(r,e);if(t<k3r)return c===1?f*Ue*Ue:f*He*He;if(t>G3r)return c===0?f*Ue*Ue:f*He*He;h=M3r(og,n)}else h=F3r(og,n,t);if(l=T3r(e,0),m=(e-l)*h[0]+e*h[1],p=l*h[0],d=m+p,Mo.assign(d,ne,1,0),g=ag(ne[0]),y=ag(ne[1]),g>=sg){if((g-sg|y)!==0||m+H3r>d-p)return f*Ue*Ue}else if((g&Bo)>=V3r&&((g-U3r|y)!==0||m<=d-p))return f*He*He;return d=B3r(g,p,m),f*d}vg.exports=fg});var W=s((hQr,lg)=>{"use strict";var W3r=cg();lg.exports=W3r});var gg=s((yQr,pg)=>{"use strict";function D3r(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}pg.exports=D3r});var dg=s((qQr,mg)=>{"use strict";var z3r=ta(),X3r=gg();function J3r(r,e,t){var i,n,a,u;return i=r-e,n=i*i,a=i-n*X3r(n),u=1-(e-i*a/(2-a)-r),z3r(u,t)}mg.exports=J3r});var Eg=s((bQr,wg)=>{"use strict";var x3r=E(),hg=Kn(),Y3r=U(),yg=L(),Z3r=dg(),$3r=.6931471803691238,Q3r=19082149292705877e-26,qg=1.4426950408889634,K3r=709.782712893384,rfr=-745.1332191019411,bg=1/(1<<28),efr=-bg;function tfr(r){var e,t,i;return x3r(r)||r===yg?r:r===Y3r?0:r>K3r?yg:r<rfr?0:r>efr&&r<bg?1+r:(r<0?i=hg(qg*r-.5):i=hg(qg*r+.5),e=r-i*$3r,t=i*Q3r,Z3r(e,t,i))}wg.exports=tfr});var nr=s((wQr,Ng)=>{"use strict";var ifr=Eg();Ng.exports=ifr});var Og=s((EQr,Ag)=>{"use strict";function nfr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}Ag.exports=nfr});var Ig=s((NQr,Tg)=>{"use strict";var afr=_o(),Sg=W(),sfr=nr(),ufr=Og(),ofr=143.01608;function ffr(r){var e,t,i;return e=1/r,e=1+e*ufr(e),t=sfr(r),r>ofr?(i=Sg(r,.5*r-.25),t=i*(i/t)):t=Sg(r,r-.5)/t,afr*t*e}Tg.exports=ffr});var Lg=s((AQr,_g)=>{"use strict";var vfr=.5772156649015329;_g.exports=vfr});var Rg=s((OQr,Pg)=>{"use strict";var cfr=Lg();function lfr(r,e){return e/((1+cfr*r)*r)}Pg.exports=lfr});var Mg=s((SQr,Fg)=>{"use strict";function pfr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}Fg.exports=pfr});var Hg=s((TQr,Ug)=>{"use strict";var gfr=E(),mfr=Ir(),dfr=Io(),Bg=Y(),hfr=Q(),yfr=Tt(),kg=L(),jg=U(),Cg=_r(),Gg=Ig(),Vg=Rg(),qfr=Mg();function bfr(r){var e,t,i,n;if(mfr(r)&&r<0||r===jg||gfr(r))return NaN;if(r===0)return dfr(r)?jg:kg;if(r>171.61447887182297)return kg;if(r<-170.5674972726612)return 0;if(t=Bg(r),t>33)return r>=0?Gg(r):(i=hfr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*yfr(Cg*n),e*Cg/(Bg(n)*Gg(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return Vg(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return Vg(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*qfr(r))}Ug.exports=bfr});var ri=s((IQr,Wg)=>{"use strict";var wfr=Hg();Wg.exports=wfr});var ko=s((_Qr,Dg)=>{"use strict";var Efr=14901161193847656e-24;Dg.exports=Efr});var Xg=s((LQr,zg)=>{"use strict";var Nfr=17976931348623157e292;zg.exports=Nfr});var ya=s((PQr,Jg)=>{"use strict";var Afr=709.782712893384;Jg.exports=Afr});var Yg=s((RQr,xg)=>{"use strict";var Ofr=nr();function Sfr(r,e){var t,i,n,a;if(n=Ofr(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}xg.exports=Sfr});var $g=s((FQr,Zg)=>{"use strict";function Tfr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}Zg.exports=Tfr});var Kg=s((MQr,Qg)=>{"use strict";function Ifr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}Qg.exports=Ifr});var em=s((BQr,rm)=>{"use strict";function _fr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}rm.exports=_fr});var im=s((kQr,tm)=>{"use strict";function Lfr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}tm.exports=Lfr});var am=s((jQr,nm)=>{"use strict";function Pfr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}nm.exports=Pfr});var um=s((CQr,sm)=>{"use strict";function Rfr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}sm.exports=Rfr});var fm=s((GQr,om)=>{"use strict";function Ffr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}om.exports=Ffr});var cm=s((VQr,vm)=>{"use strict";function Mfr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}vm.exports=Mfr});var mm=s((UQr,gm)=>{"use strict";var Bfr=E(),lm=nr(),kfr=ie(),jfr=L(),Cfr=U(),Gfr=$g(),Vfr=Kg(),Ufr=em(),Hfr=im(),Wfr=am(),Dfr=um(),zfr=fm(),Xfr=cm(),qa=1e-300,Jfr=13877787807814457e-33,pm=.8450629115104675,xfr=.12837916709551256,Yfr=1,Zfr=-.0023621185607526594,$fr=1,Qfr=-.009864944034847148,Kfr=1,rvr=-.0098649429247001,evr=1;function tvr(r){var e,t,i,n,a,u,o,v;if(Bfr(r))return NaN;if(r===jfr)return 0;if(r===Cfr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<Jfr?1-r:(i=r*r,n=xfr+i*Gfr(i),a=Yfr+i*Vfr(i),u=n/a,r<.25?1-(r+r*u):(n=r*u,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=Zfr+a*Ufr(a),v=$fr+a*Hfr(a),e?1+pm+o/v:1-pm-o/v;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=Qfr+a*Wfr(a),a=Kfr+a*Dfr(a);else{if(r<-6)return 2-qa;n=rvr+a*zfr(a),a=evr+a*Xfr(a)}return i=kfr(t,0),n=lm(-(i*i)-.5625)*lm((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-qa:qa*qa}gm.exports=tvr});var It=s((HQr,dm)=>{"use strict";var ivr=mm();dm.exports=ivr});var qm=s((WQr,ym)=>{"use strict";var nvr=It(),hm=C(),avr=nr(),svr=_r();function uvr(r,e){var t,i,n,a,u;if(a=nvr(hm(e)),a!==0&&r>1){for(i=avr(-e)/hm(svr*e),i*=e,t=.5,i/=t,n=i,u=2;u<r;++u)i/=u-t,i*=e,n+=i;a+=n}return a}ym.exports=uvr});var jo=s((DQr,bm)=>{"use strict";var ovr=-708.3964185322641;bm.exports=ovr});var Am=s((zQr,Nm)=>{"use strict";var ei=nr(),ba=W(),fvr=P(),wm=ya(),Em=jo();function vvr(r,e){var t,i;return i=r*fvr(e),e>=1?i<wm&&-e>Em?t=ba(e,r)*ei(-e):r>=1?t=ba(e/ei(e/r),r):t=ei(i-e):i>Em?t=ba(e,r)*ei(-e):e/r<wm?t=ba(e/ei(e/r),r):t=ei(i-e),t}Nm.exports=vvr});var Co=s((XQr,Om)=>{"use strict";function cvr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Om.exports=cvr});var Tm=s((JQr,Sm)=>{"use strict";var lvr=Function;Sm.exports=lvr});var _m=s((xQr,Im)=>{"use strict";var pvr=Tm();Im.exports=pvr});var Pm=s((YQr,Lm)=>{"use strict";var gvr=_m(),mvr=Co();function dvr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new gvr(e)();function a(u){return mvr(r,u)}}Lm.exports=dvr});var Mm=s((ZQr,Fm)=>{"use strict";var hvr=w(),Rm=Co(),yvr=Pm();hvr(Rm,"factory",yvr);Fm.exports=Rm});var _t=s(($Qr,Bm)=>{"use strict";var qvr=2220446049250313e-31;Bm.exports=qvr});var jm=s((QQr,km)=>{"use strict";var bvr=eval;km.exports=bvr});var Gm=s((KQr,Cm)=>{"use strict";var wvr=jm();function Evr(){var r;try{wvr('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}Cm.exports=Evr});var Go=s((rKr,Vm)=>{"use strict";var Nvr=Gm();Vm.exports=Nvr});var Hm=s((eKr,Um)=>{"use strict";var wa=Y(),Avr=_t(),Ovr=1e6;function Svr(r,e){var t,i,n,a,u,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||Avr,a=o.maxTerms||Ovr,u=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(u+=n,wa(i*u)>=wa(n)||--a===0)break}else do n=r(),u+=n;while(wa(i*u)<wa(n)&&--a);return u}Um.exports=Svr});var zm=s((tKr,Dm)=>{"use strict";var Wm=Y(),Tvr=_t(),Ivr=1e6;function _vr(r,e){var t,i,n,a,u;u={},arguments.length>1&&(u=e),t=u.tolerance||Tvr,n=u.maxTerms||Ivr,a=u.initialValue||0;do i=r(),a+=i;while(Wm(t*a)<Wm(i)&&--n);return a}Dm.exports=_vr});var Ea=s((iKr,Xm)=>{"use strict";var Lvr=Go(),Pvr=Hm(),Rvr=zm(),Vo;Lvr()?Vo=Pvr:Vo=Rvr;Xm.exports=Vo});var xm=s((nKr,Jm)=>{"use strict";function Fvr(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}Jm.exports=Fvr});var Zm=s((aKr,Ym)=>{"use strict";var Mvr=Y(),Bvr=P(),kvr=_t(),jvr=Ea(),Cvr=xm();function Gvr(r){var e,t;return r<=-1?NaN:(t=Mvr(r),t>.95?Bvr(1+r)-r:t<kvr?-r*r/2:(e={initialValue:-r},jvr(Cvr(r),e)))}Ym.exports=Gvr});var Qm=s((sKr,$m)=>{"use strict";var Vvr=Zm();$m.exports=Vvr});var We=s((uKr,Km)=>{"use strict";var Uvr=6.283185307179586;Km.exports=Uvr});var ed=s((oKr,rd)=>{"use strict";function Hvr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}rd.exports=Hvr});var id=s((fKr,td)=>{"use strict";function Wvr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}td.exports=Wvr});var ad=s((vKr,nd)=>{"use strict";function Dvr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}nd.exports=Dvr});var ud=s((cKr,sd)=>{"use strict";function zvr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}sd.exports=zvr});var fd=s((lKr,od)=>{"use strict";function Xvr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}od.exports=Xvr});var cd=s((pKr,vd)=>{"use strict";function Jvr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}vd.exports=Jvr});var pd=s((gKr,ld)=>{"use strict";function xvr(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}ld.exports=xvr});var md=s((mKr,gd)=>{"use strict";function Yvr(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}gd.exports=Yvr});var hd=s((dKr,dd)=>{"use strict";function Zvr(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}dd.exports=Zvr});var qd=s((hKr,yd)=>{"use strict";var $vr=Mm(),Qvr=Qm(),Kvr=It(),Uo=C(),rcr=nr(),ecr=We(),tcr=ed(),icr=id(),ncr=ad(),acr=ud(),scr=fd(),ucr=cd(),ocr=pd(),fcr=md(),vcr=hd(),Vr=[0,0,0,0,0,0,0,0,0,0];function ccr(r,e){var t,i,n,a,u;return i=(e-r)/r,n=-Qvr(i),a=r*n,u=Uo(2*n),e<r&&(u=-u),Vr[0]=tcr(u),Vr[1]=icr(u),Vr[2]=ncr(u),Vr[3]=acr(u),Vr[4]=scr(u),Vr[5]=ucr(u),Vr[6]=ocr(u),Vr[7]=fcr(u),Vr[8]=vcr(u),Vr[9]=-.0005967612901927463,t=$vr(Vr,1/r),t*=rcr(-a)/Uo(ecr*r),e<r&&(t=-t),t+=Kvr(Uo(a))/2,t}yd.exports=ccr});var wd=s((yKr,bd)=>{"use strict";function lcr(r,e){var t=1,i=r,n=e;return a;function a(){var u=t;return i+=1,t*=n/i,u}}bd.exports=lcr});var Nd=s((qKr,Ed)=>{"use strict";var pcr=Ea(),gcr=wd();function mcr(r,e,t){var i,n;return t=t||0,n=gcr(r,e),i=pcr(n,{initialValue:t}),i}Ed.exports=mcr});var Od=s((bKr,Ad)=>{"use strict";function dcr(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}Ad.exports=dcr});var Td=s((wKr,Sd)=>{"use strict";var hcr=Od();Sd.exports=hcr});var _d=s((EKr,Id)=>{"use strict";var ycr=Td();Id.exports=ycr});var Pd=s((NKr,Ld)=>{"use strict";function qcr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}Ld.exports=qcr});var kd=s((AKr,Bd)=>{"use strict";var bcr=E(),Rd=tr(),Fd=re(),wcr=L(),Ecr=U(),Md=Xr(),Ncr=Pd(),Ho=.6931471803691238,Wo=19082149292705877e-26,Acr=.41421356237309503,Ocr=-.2928932188134525,Scr=1862645149230957e-24,Tcr=5551115123125783e-32,Icr=9007199254740992,_cr=.6666666666666666;function Lcr(r){var e,t,i,n,a,u,o,v,f,c;if(r<-1||bcr(r))return NaN;if(r===-1)return Ecr;if(r===wcr||r===0)return r;if(r<0?i=-r:i=r,c=1,i<Acr){if(i<Scr)return i<Tcr?r:r-r*r*.5;r>Ocr&&(c=0,n=r,t=1)}return c!==0&&(i<Icr?(f=1+r,t=Rd(f),c=(t>>20)-Md,c>0?a=1-(f-r):a=r-(f-1),a/=f):(f=r,t=Rd(f),c=(t>>20)-Md,a=0),t&=1048575,t<434334?f=Fd(f,t|1072693248):(c+=1,f=Fd(f,t|1071644672),t=1048576-t>>2),n=f-1),e=.5*n*n,t===0?n===0?(a+=c*Wo,c*Ho+a):(v=e*(1-_cr*n),c*Ho-(v-(c*Wo+a)-n)):(u=n/(2+n),o=u*u,v=o*Ncr(o),c===0?n-(e-u*(e+v)):c*Ho-(e-(u*(e+v)+(c*Wo+a))-n))}Bd.exports=Lcr});var De=s((OKr,jd)=>{"use strict";var Pcr=kd();jd.exports=Pcr});var Gd=s((SKr,Cd)=>{"use strict";var Rcr=L();function Fcr(r){return r===0&&1/r===Rcr}Cd.exports=Fcr});var ze=s((TKr,Vd)=>{"use strict";var Mcr=Gd();Vd.exports=Mcr});var Wd=s((IKr,Hd)=>{"use strict";var Bcr=ze(),Ud=E(),Do=L();function kcr(r,e){return Ud(r)||Ud(e)?NaN:r===Do||e===Do?Do:r===e&&r===0?Bcr(r)?r:e:r>e?r:e}Hd.exports=kcr});var zo=s((_Kr,Dd)=>{"use strict";var jcr=Wd();Dd.exports=jcr});var Jd=s((LKr,Xd)=>{"use strict";var Ccr=Io(),zd=E(),Xo=U();function Gcr(r,e){return zd(r)||zd(e)?NaN:r===Xo||e===Xo?Xo:r===e&&r===0?Ccr(r)?r:e:r<e?r:e}Xd.exports=Gcr});var Yd=s((PKr,xd)=>{"use strict";var Vcr=Jd();xd.exports=Vcr});var $d=s((RKr,Zd)=>{"use strict";var Ucr=10.900511;Zd.exports=Ucr});var Jo=s((FKr,Qd)=>{"use strict";var Hcr=2.718281828459045;Qd.exports=Hcr});var eh=s((MKr,rh)=>{"use strict";var Wcr=_d(),Dcr=rn(),zcr=ri(),Xcr=De(),Jcr=C(),xcr=Y(),Xe=nr(),tn=W(),xo=zo(),Yo=Yd(),Kd=P(),Na=ya(),nn=jo(),Zo=$d(),Ycr=Jo();function Zcr(r,e){var t,i,n,a,u,o,v;return n=r+Zo-.5,v=(e-r-Zo+.5)/n,r<1?e<=nn?Xe(r*Kd(e)-e-Dcr(r)):tn(e,r)*Xe(-e)/zcr(r):(xcr(v*v*r)<=100&&r>150?(t=r*(Xcr(v)-v)+e*(.5-Zo)/n,t=Xe(t)):(a=r*Kd(e/n),u=r-e,Yo(a,u)<=nn||xo(a,u)>=Na?(i=u/r,Yo(a,u)/2>nn&&xo(a,u)/2<Na?(o=tn(e/n,r/2)*Xe(u/2),t=o*o):Yo(a,u)/4>nn&&xo(a,u)/4<Na&&e>r?(o=tn(e/n,r/4)*Xe(u/4),t=o*o,t*=t):i>nn&&i<Na?t=tn(e*Xe(i)/n,r):t=Xe(a+u)):t=tn(e/n,r)*Xe(u)),t*=Jcr(n/Ycr)/Wcr(r),t)}rh.exports=Zcr});var ih=s((BKr,th)=>{"use strict";var $cr=.34657359027997264;th.exports=$cr});var ah=s((kKr,nh)=>{"use strict";function Qcr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}nh.exports=Qcr});var ch=s((jKr,vh)=>{"use strict";var Kcr=E(),sh=tr(),$o=re(),rlr=$t(),uh=L(),elr=U(),oh=Xr(),tlr=ih(),ilr=ah(),nlr=709.782712893384,Qo=.6931471803691238,Ko=19082149292705877e-26,fh=1.4426950408889634,alr=38.816242111356935,slr=1.0397207708399179;function ulr(r){var e,t,i,n,a,u,o,v,f,c,l,p,m;if(r===uh||Kcr(r))return r;if(r===elr)return-1;if(r===0)return r;if(r<0?(i=!0,v=-r):(i=!1,v=r),v>=alr){if(i)return-1;if(v>=nlr)return uh}if(u=sh(v)|0,v>tlr)v<slr?i?(n=r+Qo,a=-Ko,m=-1):(n=r-Qo,a=Ko,m=1):(i?m=fh*r-.5:m=fh*r+.5,m|=0,l=m,n=r-l*Qo,a=l*Ko),r=n-a,c=n-r-a;else{if(u<1016070144)return r;m=0}return e=.5*r,f=r*e,o=1+f*ilr(f),l=3-o*e,p=f*((o-l)/(6-r*l)),m===0?r-(r*p-f):(t=rlr(oh+m<<20,0),p=r*(p-c)-c,p-=f,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(v=1-(p-r),m===1024?(n=sh(v)+(m<<20)|0,v=$o(v,n)):v*=t,v-1):(l=1,m<20?(n=1072693248-(2097152>>m)|0,l=$o(l,n),v=l-(p-r)):(n=oh-m<<20|0,l=$o(l,n),v=r-(p+l),v+=1),v*=t,v))}vh.exports=ulr});var r2=s((CKr,lh)=>{"use strict";var olr=ch();lh.exports=olr});var dh=s((GKr,mh)=>{"use strict";var ph=E(),gh=Y(),flr=r2(),vlr=P(),clr=W(),llr=Kn();function plr(r,e){var t;if(ph(r)||ph(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((gh(e*(r-1))<.5||gh(e)<.2)&&(t=vlr(r)*e,t<.5))return flr(t)}else if(llr(e)!==e)return NaN;return clr(r,e)-1}mh.exports=plr});var yh=s((VKr,hh)=>{"use strict";var glr=dh();hh.exports=glr});var bh=s((UKr,qh)=>{"use strict";function mlr(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}qh.exports=mlr});var Eh=s((HKr,wh)=>{"use strict";function dlr(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}wh.exports=dlr});var Ah=s((WKr,Nh)=>{"use strict";function hlr(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}Nh.exports=hlr});var Sh=s((DKr,Oh)=>{"use strict";var e2=P(),ylr=_t(),qlr=bh(),blr=Eh(),wlr=Ah(),Elr=.15896368026733398,Nlr=.5281534194946289,Alr=.45201730728149414;function Olr(r,e,t){var i,n,a,u;if(r<ylr)return-e2(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=e2(r);while(r>=3);t=r-2}return a=t*(r+1),u=qlr(t),n+=a*Elr+a*u,n}return r<1&&(n+=-e2(r),t=e,e=r,r+=1),r<=1.5?(a=blr(e),i=e*t,n+=i*Nlr+i*a,n):(a=t*e,u=wlr(-t),n+=a*Alr+a*u,n)}Oh.exports=Olr});var Ph=s((zKr,Lh)=>{"use strict";var Th=ri(),Ih=r2(),Slr=De(),Tlr=E(),_h=Sh();function Ilr(r){return Tlr(r)?NaN:r<0?r<-.5?Th(1+r)-1:Ih(-Slr(r)+_h(r+2,r+1,r)):r<2?Ih(_h(r+1,r,r-1)):Th(1+r)-1}Lh.exports=Ilr});var Fh=s((XKr,Rh)=>{"use strict";var _lr=Ph();Rh.exports=_lr});var Bh=s((JKr,Mh)=>{"use strict";function Llr(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,u;function u(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}Mh.exports=Llr});var jh=s((xKr,kh)=>{"use strict";var Plr=yh(),Rlr=Ea(),Flr=Fh(),Mlr=Bh();function Blr(r,e,t){var i,n,a,u,o;return n=Flr(r),a=(n+1)/r,u=Plr(e,r),n-=u,n/=r,o=Mlr(r,e),u+=1,i=t?a:0,n=-u*Rlr(o,{initialValue:(i-n)/u}),t&&(n=-n),[n,a]}kh.exports=Blr});var t2=s((YKr,Ch)=>{"use strict";var klr=11754943508222875e-54;Ch.exports=klr});var Vh=s((ZKr,Gh)=>{"use strict";var Aa=Y(),xr=t2(),jlr=_t(),Clr=1e6;function Glr(r,e,t){var i,n,a,u,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),u=f[1],a=f[0],u===0&&(u=xr),o=u,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=xr),o=f[1]+f[0]/o,o===0&&(o=xr),v=1/v,n=o*v,u*=n);while(Aa(n-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=xr),o=f[1]+f[0]/o,o===0&&(o=xr),v=1/v,n=o*v,u*=n);while(f&&Aa(n-1)>e&&--t);return a/u}function Vlr(r,e,t){var i,n,a,u,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),a=v[1],a===0&&(a=xr),u=a,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=xr),u=v[1]+v[0]/u,u===0&&(u=xr),o=1/o,n=u*o,a*=n);while(v&&Aa(n-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=xr),u=v[1]+v[0]/u,u===0&&(u=xr),o=1/o,n=u*o,a*=n);while(v&&Aa(n-1)>e&&--t);return a}function Ulr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||Clr,n=i.tolerance||jlr,i.keep?Vlr(r,n,t):Glr(r,n,t)}Gh.exports=Ulr});var Wh=s(($Kr,Hh)=>{"use strict";var Uh=Y(),Hlr=_t(),ti=t2(),Wlr=1e6;function Dlr(r,e,t){var i,n,a,u,o,v;v=r(),o=v[1],n=v[0],o===0&&(o=ti),a=o,u=0;do v=r(),v&&(u=v[1]+v[0]*u,u===0&&(u=ti),a=v[1]+v[0]/a,a===0&&(a=ti),u=1/u,i=a*u,o*=i);while(v&&Uh(i-1)>e&&--t);return n/o}function zlr(r,e,t){var i,n,a,u,o;o=r(),u=o[1],u===0&&(u=ti),n=u,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=ti),n=o[1]+o[0]/n,n===0&&(n=ti),a=1/a,i=n*a,u*=i);while(o&&Uh(i-1)>e&&--t);return u}function Xlr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||Hlr,t=i.maxIter||Wlr,i.keep?zlr(r,n,t):Dlr(r,n,t)}Hh.exports=Xlr});var zh=s((QKr,Dh)=>{"use strict";var Jlr=Go(),xlr=Vh(),Ylr=Wh(),i2;Jlr()?i2=xlr:i2=Ylr;Dh.exports=i2});var Jh=s((KKr,Xh)=>{"use strict";function Zlr(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}Xh.exports=Zlr});var Yh=s((rre,xh)=>{"use strict";var $lr=zh(),Qlr=Jh();function Klr(r,e){var t=Qlr(r,e);return 1/(e-r+1+$lr(t))}xh.exports=Klr});var ay=s((ere,ny)=>{"use strict";var r4r=rn(),e4r=Q(),an=ri(),Zh=Y(),t4r=nr(),$h=W(),Ur=P(),i4r=ko(),Qh=Xg(),n4r=_o(),Kh=ya(),a4r=L(),s4r=Yg(),u4r=qm(),ry=Am(),o4r=qd(),n2=Nd(),ey=eh(),f4r=jh(),ty=Yh(),v4r=170;function iy(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h,d,g,y,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=v4r&&!a)return l&&e*4<r?(p=e*Ur(r)-r,p+=Ur(ty(e,r))):!l&&e>4*r?(p=e*Ur(r)-r,o=0,p+=Ur(n2(e,r,o)/e)):(p=iy(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Ur(p)-e+(e-.5)*Ur(e),p+=Ur(n4r)):(p=e*Ur(r)-r,o=0,p+=Ur(n2(e,r,o)/e)):p=Ur(p)+r4r(e)),p>Kh?a4r:t4r(p);switch(c=e<30&&e<=r+1&&r<Kh,c?(y=e4r(e),m=y===e,v=m?!1:Zh(y-e)===.5):m=v=!1,m&&r>.6?(l=!l,u=0):v&&r>.2?(l=!l,u=1):r<i4r&&e>1?u=6:r<.5?-.4/Ur(r)<e?u=2:u=3:r<1.1?r*.75<e?u=2:u=3:(f=!1,a&&e>20&&(h=Zh((r-e)/e),e>200?20/e>h*h&&(f=!0):h<.4&&(f=!0)),f?u=5:r-1/(3*r)<e?u=2:(u=4,l=!l)),u){case 0:p=s4r(e,r),a===!1&&(p*=an(e));break;case 1:p=u4r(e,r),a===!1&&(p*=an(e));break;case 2:p=a?ey(e,r):ry(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:an(e),a||p>=1||Qh*p>o?(o/=p,a||e<1||Qh/e>o?(o*=-e,n=!0):o=0):o=0)),p*=n2(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,g=f4r(e,r,l),p=g[0],N=g[1],l=!1,a&&(p/=N);break;case 4:p=a?ey(e,r):ry(e,r),p!==0&&(p*=ty(e,r));break;case 5:p=o4r(e,r),r>=e&&(l=!l);break;case 6:p=a?$h(r,e)/an(e+1):$h(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(d=a?1:an(e),p=d-p),p}ny.exports=iy});var a2=s((tre,sy)=>{"use strict";var c4r=ay();sy.exports=c4r});var oy=s((ire,uy)=>{"use strict";var l4r=a2(),s2=E(),p4r=L();function g4r(r,e,t){return s2(r)||s2(e)||s2(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===p4r?1:l4r(r*t,e)}uy.exports=g4r});var vy=s((nre,fy)=>{"use strict";function m4r(r){return e;function e(){return r}}fy.exports=m4r});var S=s((are,cy)=>{"use strict";var d4r=vy();cy.exports=d4r});var gy=s((sre,py)=>{"use strict";var ly=E();function h4r(r,e){return ly(r)||ly(e)?NaN:r<e?0:1}py.exports=h4r});var hy=s((ure,dy)=>{"use strict";var y4r=S(),my=E();function q4r(r){if(my(r))return y4r(NaN);return e;function e(t){return my(t)?NaN:t<r?0:1}}dy.exports=q4r});var Oa=s((ore,qy)=>{"use strict";var b4r=w(),yy=gy(),w4r=hy();b4r(yy,"factory",w4r);qy.exports=yy});var Ey=s((fre,wy)=>{"use strict";var E4r=S(),N4r=Oa().factory,A4r=a2(),by=E(),O4r=L();function S4r(r,e){if(by(r)||by(e)||r<0||e<=0)return E4r(NaN);if(r===0)return N4r(0);return t;function t(i){return i<=0?0:i===O4r?1:A4r(i*e,r)}}wy.exports=S4r});var u2=s((vre,Ay)=>{"use strict";var T4r=w(),Ny=oy(),I4r=Ey();T4r(Ny,"factory",I4r);Ay.exports=Ny});var Sy=s((cre,Oy)=>{"use strict";var _4r=u2();function L4r(r,e){return _4r(r,e/2,.5)}Oy.exports=L4r});var Iy=s((lre,Ty)=>{"use strict";var P4r=u2().factory;function R4r(r){return P4r(r/2,.5)}Ty.exports=R4r});var Py=s((pre,Ly)=>{"use strict";var F4r=w(),_y=Sy(),M4r=Iy();F4r(_y,"factory",M4r);Ly.exports=_y});var By=s((gre,My)=>{"use strict";var B4r=I(),k4r=O(),j4r=Xn(),Ry=q(),Fy=["values","indices","*"];function C4r(r,e){return B4r(e)?k4r(e,"returns")&&(r.returns=e.returns,j4r(Fy,r.returns)===-1)?new TypeError(Ry('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Fy.join('", "'),r.returns)):null:new TypeError(Ry("invalid argument. Options argument must be an object. Value: `%s`.",e))}My.exports=C4r});var jy=s((mre,ky)=>{"use strict";var G4r=O();function V4r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),G4r(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}ky.exports=V4r});var Gy=s((dre,Cy)=>{"use strict";var U4r=O();function H4r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),U4r(t,n)?t[n].push(a):t[n]=[a];return t}Cy.exports=H4r});var Uy=s((hre,Vy)=>{"use strict";var W4r=O();function D4r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),W4r(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}Vy.exports=D4r});var zy=s((yre,Dy)=>{"use strict";var Hy=Gr(),Wy=q(),z4r=By(),X4r=jy(),J4r=Gy(),x4r=Uy();function Y4r(r,e,t){var i,n,a;if(!Hy(r))throw new TypeError(Wy("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=z4r(i,e),n)throw n;a=t}if(!Hy(a))throw new TypeError(Wy("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?X4r(r,a):i.returns==="indices"?J4r(r,a):x4r(r,a)}Dy.exports=Y4r});var Jy=s((qre,Xy)=>{"use strict";var Z4r=zy();Xy.exports=Z4r});var Yy=s((bre,xy)=>{"use strict";function $4r(r){var e,t,i,n,a,u;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)u=r[a],e=u-t,t+=e/(a+1),n+=e*(u-t);return n/(a-1)}xy.exports=$4r});var Qy=s((wre,$y)=>{"use strict";var Q4r=mr(),K4r=j().isPrimitive,r6r=I(),e6r=sr(),Zy=O(),o2=q();function t6r(r,e){return r6r(e)?Zy(e,"alpha")&&(r.alpha=e.alpha,!K4r(r.alpha)||e6r(r.alpha))?new TypeError(o2("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):Zy(e,"groups")&&(r.groups=e.groups,!Q4r(r.groups))?new TypeError(o2("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(o2("invalid argument. Options argument must be an object. Value: `%s`.",e))}$y.exports=t6r});var f2=s((Ere,Ky)=>{"use strict";var i6r=Cr().isPrimitive;function n6r(r){return i6r(r)&&r>0}Ky.exports=n6r});var v2=s((Nre,rq)=>{"use strict";var a6r=Cr().isObject;function s6r(r){return a6r(r)&&r.valueOf()>0}rq.exports=s6r});var tq=s((Are,eq)=>{"use strict";var u6r=f2(),o6r=v2();function f6r(r){return u6r(r)||o6r(r)}eq.exports=f6r});var ae=s((Ore,nq)=>{"use strict";var iq=w(),c2=tq(),v6r=f2(),c6r=v2();iq(c2,"isPrimitive",v6r);iq(c2,"isObject",c6r);nq.exports=c2});var sn=s((Sre,aq)=>{"use strict";var l6r=9007199254740991;aq.exports=l6r});var l2=s((Tre,sq)=>{"use strict";var p6r=308;sq.exports=p6r});var oq=s((Ire,uq)=>{"use strict";var g6r=-308;uq.exports=g6r});var p2=s((_re,fq)=>{"use strict";var m6r=-324;fq.exports=m6r});var dq=s((Lre,mq)=>{"use strict";var vq=E(),Sa=Rr(),cq=W(),d6r=Y(),lq=No(),h6r=sn(),pq=l2(),y6r=oq(),q6r=p2(),b6r=h6r+1,gq=1e308;function w6r(r,e){var t,i;return vq(r)||vq(e)||Sa(e)?NaN:Sa(r)||r===0||e<q6r||d6r(r)>b6r&&e<=0?r:e>pq?0*r:e<y6r?(t=cq(10,-(e+pq)),i=r*gq*t,Sa(i)?r:lq(i)/gq/t):(t=cq(10,-e),i=r*t,Sa(i)?r:lq(i)/t)}mq.exports=w6r});var yq=s((Pre,hq)=>{"use strict";var E6r=dq();hq.exports=E6r});var wq=s((Rre,bq)=>{"use strict";var N6r=ae(),A6r=I(),O6r=vr().isPrimitive,qq=O(),g2=q(),m2=yq();function S6r(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!A6r(r))throw new TypeError(g2("invalid argument. First argument must be an object. Value: `%s`.",r));if(qq(r,"digits")){if(!N6r(r.digits))throw new TypeError(g2("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(qq(r,"decision")){if(!O6r(r.decision))throw new TypeError(g2("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+m2(this.pValue,-t)+`
`,i+="    statistic: "+m2(this.statistic,-t)+`
`,i+="    df: "+m2(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}bq.exports=S6r});var Aq=s((Fre,Nq)=>{"use strict";var T6r=Gr(),I6r=I(),Lt=X6(),_6r=Jt(),Ta=q(),L6r=Py(),P6r=Jy(),Eq=P(),R6r=Yy(),F6r=Qy(),M6r=wq();function B6r(){var r,e,t,i,n,a,u,o,v,f,c,l,p,m,h,d,g,y,N,A;if(v=[],e=arguments.length,f={},I6r(arguments[e-1])&&(r=arguments[e-1],e-=1,m=F6r(f,r),m))throw m;if(f.groups){if(n=P6r(arguments[0],f.groups),i=_6r(n),e=i.length,e<2)throw new Error(Ta("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(A=0;A<e;A++)v.push(n[i[A]])}else for(A=0;A<e;A++)v.push(arguments[A]);for(u=0,t=0,o=0,h=0,y=new Array(e),N=y.slice(),A=0;A<e;A++){if(p=v[A],!T6r(p))throw new TypeError(Ta("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(Ta("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));y[A]=p.length-1,u+=y[A],t+=1/y[A],N[A]=R6r(p),o+=y[A]*N[A],h+=y[A]*Eq(N[A])}if(o/=u,f.alpha===void 0?a=.05:a=f.alpha,a<0||a>1)throw new RangeError(Ta("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=u*Eq(o)-h,l/=1+(t-1/u)/(3*(e-1)),g=e-1,c=1-L6r(l,g),d={},Lt(d,"rejected",c<=a),Lt(d,"alpha",a),Lt(d,"pValue",c),Lt(d,"statistic",l),Lt(d,"df",g),Lt(d,"method","Bartlett's test of equal variances"),Lt(d,"print",M6r),d}Nq.exports=B6r});var Sq=s((Mre,Oq)=>{"use strict";var k6r=Aq();Oq.exports=k6r});var Iq=s((Bre,Tq)=>{"use strict";function j6r(r){var e,t,i,n,a,u,o,v,f,c,l;if(v=r.length,t=[],v===0)return t;if(n=r[0],f=n.length,v===1){for(c=0;c<f;c++)t.push(n[c]);return t}for(e=[f],c=1;c<v;c++)e.push(r[c].length),e[c]>f&&(f=e[c]);for(c=0;c<f;c++)t.push(0);for(c=f-1;c>=0;){for(a=e[0]-f+c,a>=0?i=n[a]:i=1,l=1;l<v;l++){if(u=e[l]-f+c,u>=0?o=r[l][u]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}Tq.exports=j6r});var Lq=s((kre,_q)=>{"use strict";var C6r=Iq();_q.exports=C6r});var Rq=s((jre,Pq)=>{"use strict";function G6r(r){var e,t,i,n,a,u;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)e.push(n[u]);return e}Pq.exports=G6r});var Ia=s((Cre,Fq)=>{"use strict";var V6r=Rq();Fq.exports=V6r});var Bq=s((Gre,Mq)=>{"use strict";var U6r=j().isPrimitive,H6r=K().isPrimitive,W6r=vr().isPrimitive,D6r=mr(),z6r=Lq(),X6r=q(),J6r=Ia(),x6r={number:U6r,string:H6r,boolean:W6r};function Y6r(r,e,t){var i,n,a,u,o,v,f,c,l,p;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],n=[],p=0;p<r.length;p++)if(l=r[p],o=e[p],c=x6r[o],c(l))n.push([l]),a.push([1,1]);else if(D6r(l))n.push(J6r(l)),a.push([l.length,l[0].length]);else throw new TypeError(X6r("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[p],o,o,String(l)));if(u=z6r(a),u===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");for(i=[],p=0;p<a.length;p++)f=a[p],v=[],f[0]===1?v.push(0):v.push(f[1]),f[1]===1?v.push(0):v.push(1),i.push(v);return[n,u,i]}Mq.exports=Y6r});var jq=s((Vre,kq)=>{"use strict";var d2=E(),Z6r=ze();function $6r(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return i;if(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,a=e[u],i[o]=a,o+=n,f=1,d2(a)===!1)for(f;f<r;f++){if(u+=t,v=e[u],d2(v)){a=v;break}(v>a||v===a&&Z6r(v))&&(a=v),i[o]=a,o+=n}if(d2(a))for(f;f<r;f++)i[o]=a,o+=n;return i}kq.exports=$6r});var Gq=s((Ure,Cq)=>{"use strict";var h2=E(),Q6r=ze();function K6r(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return n;if(v=i,f=u,o=e[v],n[f]=o,f+=a,l=1,h2(o)===!1)for(l;l<r;l++){if(v+=t,c=e[v],h2(c)){o=c;break}(c>o||c===o&&Q6r(c))&&(o=c),n[f]=o,f+=a}if(h2(o))for(l;l<r;l++)n[f]=o,f+=a;return n}Cq.exports=K6r});var Hq=s((Hre,Uq)=>{"use strict";var r8r=w(),Vq=jq(),e8r=Gq();r8r(Vq,"ndarray",e8r);Uq.exports=Vq});var Dq=s((Wre,Wq)=>{"use strict";var t8r=Hq();Wq.exports=t8r});var Xq=s((Dre,zq)=>{"use strict";var i8r=bo();function n8r(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(i8r(r,i));return t}zq.exports=n8r});var _a=s((zre,Jq)=>{"use strict";var a8r=Xq();Jq.exports=a8r});var Yq=s((Xre,xq)=>{"use strict";function s8r(r,e,t){var i,n,a,u,o,v;for(a=r[1],u=r[0],i=[],o=0;o<u;o++){for(n=[],v=0;v<a;v++)n.push(e.call(t,[o,v]));i.push(n)}return i}xq.exports=s8r});var $q=s((Jre,Zq)=>{"use strict";var u8r=Yq();Zq.exports=u8r});var Kq=s((xre,Qq)=>{"use strict";var o8r=_a();function f8r(r){return o8r(1,r)}Qq.exports=f8r});var eb=s((Yre,rb)=>{"use strict";var v8r=Kq();rb.exports=v8r});var ib=s((Zre,tb)=>{"use strict";var c8r=_a();function l8r(r){return c8r(0,r)}tb.exports=l8r});var ab=s(($re,nb)=>{"use strict";var p8r=ib();nb.exports=p8r});var y2=s((Qre,sb)=>{"use strict";var g8r=j().isPrimitive;function m8r(r){return g8r(r)&&r>0}sb.exports=m8r});var q2=s((Kre,ub)=>{"use strict";var d8r=j().isObject;function h8r(r){return d8r(r)&&r.valueOf()>0}ub.exports=h8r});var fb=s((ree,ob)=>{"use strict";var y8r=y2(),q8r=q2();function b8r(r){return y8r(r)||q8r(r)}ob.exports=b8r});var D=s((eee,cb)=>{"use strict";var vb=w(),b2=fb(),w8r=y2(),E8r=q2();vb(b2,"isPrimitive",w8r);vb(b2,"isObject",E8r);cb.exports=b2});var pb=s((tee,lb)=>{"use strict";var N8r=_();function A8r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&N8r(r.next)}lb.exports=A8r});var mb=s((iee,gb)=>{"use strict";var O8r=pb();gb.exports=O8r});var yb=s((nee,hb)=>{"use strict";var db="function";function S8r(r){return typeof r.get===db&&typeof r.set===db}hb.exports=S8r});var w2=s((aee,qb)=>{"use strict";var T8r=yb();qb.exports=T8r});var Eb=s((see,wb)=>{"use strict";var bb={complex128:I8r,complex64:_8r,default:L8r};function I8r(r,e,t){r.set(t,e)}function _8r(r,e,t){r.set(t,e)}function L8r(r,e,t){r.set(t,e)}function P8r(r){var e=bb[r];return typeof e=="function"?e:bb.default}wb.exports=P8r});var E2=s((uee,Nb)=>{"use strict";var R8r=Eb();Nb.exports=R8r});var Sb=s((oee,Ob)=>{"use strict";var Ab={float64:F8r,float32:M8r,int32:B8r,int16:k8r,int8:j8r,uint32:C8r,uint16:G8r,uint8:V8r,uint8c:U8r,generic:H8r,default:W8r};function F8r(r,e,t){r[e]=t}function M8r(r,e,t){r[e]=t}function B8r(r,e,t){r[e]=t}function k8r(r,e,t){r[e]=t}function j8r(r,e,t){r[e]=t}function C8r(r,e,t){r[e]=t}function G8r(r,e,t){r[e]=t}function V8r(r,e,t){r[e]=t}function U8r(r,e,t){r[e]=t}function H8r(r,e,t){r[e]=t}function W8r(r,e,t){r[e]=t}function D8r(r){var e=Ab[r];return typeof e=="function"?e:Ab.default}Ob.exports=D8r});var N2=s((fee,Tb)=>{"use strict";var z8r=Sb();Tb.exports=z8r});var _b=s((vee,Ib)=>{"use strict";var X8r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};Ib.exports=X8r});var Pb=s((cee,Lb)=>{"use strict";var J8r=ir(),x8r=typeof Float32Array=="function";function Y8r(r){return x8r&&r instanceof Float32Array||J8r(r)==="[object Float32Array]"}Lb.exports=Y8r});var Fb=s((lee,Rb)=>{"use strict";var Z8r=Pb();Rb.exports=Z8r});var Bb=s((pee,Mb)=>{"use strict";var $8r=typeof Float32Array=="function"?Float32Array:null;Mb.exports=$8r});var Cb=s((gee,jb)=>{"use strict";var Q8r=Fb(),K8r=L(),kb=Bb();function r5r(){var r,e;if(typeof kb!="function")return!1;try{e=new kb([1,3.14,-3.14,5e40]),r=Q8r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===K8r}catch{r=!1}return r}jb.exports=r5r});var Vb=s((mee,Gb)=>{"use strict";var e5r=Cb();Gb.exports=e5r});var Hb=s((dee,Ub)=>{"use strict";var t5r=typeof Float32Array=="function"?Float32Array:void 0;Ub.exports=t5r});var Db=s((hee,Wb)=>{"use strict";function i5r(){throw new Error("not implemented")}Wb.exports=i5r});var se=s((yee,zb)=>{"use strict";var n5r=Vb(),a5r=Hb(),s5r=Db(),A2;n5r()?A2=a5r:A2=s5r;zb.exports=A2});var Jb=s((qee,Xb)=>{"use strict";var u5r=ir(),o5r=typeof Int32Array=="function";function f5r(r){return o5r&&r instanceof Int32Array||u5r(r)==="[object Int32Array]"}Xb.exports=f5r});var La=s((bee,xb)=>{"use strict";var v5r=Jb();xb.exports=v5r});var ii=s((wee,Yb)=>{"use strict";var c5r=2147483647;Yb.exports=c5r});var $b=s((Eee,Zb)=>{"use strict";var l5r=-2147483648;Zb.exports=l5r});var Kb=s((Nee,Qb)=>{"use strict";var p5r=typeof Int32Array=="function"?Int32Array:null;Qb.exports=p5r});var tw=s((Aee,ew)=>{"use strict";var g5r=La(),m5r=ii(),d5r=$b(),rw=Kb();function h5r(){var r,e;if(typeof rw!="function")return!1;try{e=new rw([1,3.14,-3.14,m5r+1]),r=g5r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===d5r}catch{r=!1}return r}ew.exports=h5r});var nw=s((Oee,iw)=>{"use strict";var y5r=tw();iw.exports=y5r});var sw=s((See,aw)=>{"use strict";var q5r=typeof Int32Array=="function"?Int32Array:void 0;aw.exports=q5r});var ow=s((Tee,uw)=>{"use strict";function b5r(){throw new Error("not implemented")}uw.exports=b5r});var Pt=s((Iee,fw)=>{"use strict";var w5r=nw(),E5r=sw(),N5r=ow(),O2;w5r()?O2=E5r:O2=N5r;fw.exports=O2});var cw=s((_ee,vw)=>{"use strict";var A5r=ir(),O5r=typeof Int16Array=="function";function S5r(r){return O5r&&r instanceof Int16Array||A5r(r)==="[object Int16Array]"}vw.exports=S5r});var pw=s((Lee,lw)=>{"use strict";var T5r=cw();lw.exports=T5r});var mw=s((Pee,gw)=>{"use strict";var I5r=32767;gw.exports=I5r});var hw=s((Ree,dw)=>{"use strict";var _5r=-32768;dw.exports=_5r});var qw=s((Fee,yw)=>{"use strict";var L5r=typeof Int16Array=="function"?Int16Array:null;yw.exports=L5r});var Ew=s((Mee,ww)=>{"use strict";var P5r=pw(),R5r=mw(),F5r=hw(),bw=qw();function M5r(){var r,e;if(typeof bw!="function")return!1;try{e=new bw([1,3.14,-3.14,R5r+1]),r=P5r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===F5r}catch{r=!1}return r}ww.exports=M5r});var Aw=s((Bee,Nw)=>{"use strict";var B5r=Ew();Nw.exports=B5r});var Sw=s((kee,Ow)=>{"use strict";var k5r=typeof Int16Array=="function"?Int16Array:void 0;Ow.exports=k5r});var Iw=s((jee,Tw)=>{"use strict";function j5r(){throw new Error("not implemented")}Tw.exports=j5r});var un=s((Cee,_w)=>{"use strict";var C5r=Aw(),G5r=Sw(),V5r=Iw(),S2;C5r()?S2=G5r:S2=V5r;_w.exports=S2});var Pw=s((Gee,Lw)=>{"use strict";var U5r=ir(),H5r=typeof Uint8ClampedArray=="function";function W5r(r){return H5r&&r instanceof Uint8ClampedArray||U5r(r)==="[object Uint8ClampedArray]"}Lw.exports=W5r});var Fw=s((Vee,Rw)=>{"use strict";var D5r=Pw();Rw.exports=D5r});var Bw=s((Uee,Mw)=>{"use strict";var z5r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;Mw.exports=z5r});var Cw=s((Hee,jw)=>{"use strict";var X5r=Fw(),kw=Bw();function J5r(){var r,e;if(typeof kw!="function")return!1;try{e=new kw([-1,0,1,3.14,4.99,255,256]),r=X5r(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}jw.exports=J5r});var Vw=s((Wee,Gw)=>{"use strict";var x5r=Cw();Gw.exports=x5r});var Hw=s((Dee,Uw)=>{"use strict";var Y5r=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;Uw.exports=Y5r});var Dw=s((zee,Ww)=>{"use strict";function Z5r(){throw new Error("not implemented")}Ww.exports=Z5r});var on=s((Xee,zw)=>{"use strict";var $5r=Vw(),Q5r=Hw(),K5r=Dw(),T2;$5r()?T2=Q5r:T2=K5r;zw.exports=T2});var Jw=s((Jee,Xw)=>{"use strict";var rpr=ir(),epr=typeof Int8Array=="function";function tpr(r){return epr&&r instanceof Int8Array||rpr(r)==="[object Int8Array]"}Xw.exports=tpr});var Yw=s((xee,xw)=>{"use strict";var ipr=Jw();xw.exports=ipr});var $w=s((Yee,Zw)=>{"use strict";var npr=127;Zw.exports=npr});var Kw=s((Zee,Qw)=>{"use strict";var apr=-128;Qw.exports=apr});var eE=s(($ee,rE)=>{"use strict";var spr=typeof Int8Array=="function"?Int8Array:null;rE.exports=spr});var nE=s((Qee,iE)=>{"use strict";var upr=Yw(),opr=$w(),fpr=Kw(),tE=eE();function vpr(){var r,e;if(typeof tE!="function")return!1;try{e=new tE([1,3.14,-3.14,opr+1]),r=upr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===fpr}catch{r=!1}return r}iE.exports=vpr});var sE=s((Kee,aE)=>{"use strict";var cpr=nE();aE.exports=cpr});var oE=s((rte,uE)=>{"use strict";var lpr=typeof Int8Array=="function"?Int8Array:void 0;uE.exports=lpr});var vE=s((ete,fE)=>{"use strict";function ppr(){throw new Error("not implemented")}fE.exports=ppr});var fn=s((tte,cE)=>{"use strict";var gpr=sE(),mpr=oE(),dpr=vE(),I2;gpr()?I2=mpr:I2=dpr;cE.exports=I2});var _2=s((ite,lE)=>{"use strict";var hpr=Cr().isPrimitive;function ypr(r){return hpr(r)&&r>=0}lE.exports=ypr});var L2=s((nte,pE)=>{"use strict";var qpr=Cr().isObject;function bpr(r){return qpr(r)&&r.valueOf()>=0}pE.exports=bpr});var mE=s((ate,gE)=>{"use strict";var wpr=_2(),Epr=L2();function Npr(r){return wpr(r)||Epr(r)}gE.exports=Npr});var Je=s((ste,hE)=>{"use strict";var dE=w(),P2=mE(),Apr=_2(),Opr=L2();dE(P2,"isPrimitive",Apr);dE(P2,"isObject",Opr);hE.exports=P2});var qE=s((ute,yE)=>{"use strict";var Spr=4294967295;yE.exports=Spr});var wE=s((ote,bE)=>{"use strict";var Tpr=Ir(),Ipr=qE();function _pr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Tpr(r.length)&&r.length>=0&&r.length<=Ipr}bE.exports=_pr});var Rt=s((fte,EE)=>{"use strict";var Lpr=wE();EE.exports=Lpr});var AE=s((vte,NE)=>{"use strict";var Ppr=ir(),Rpr=typeof ArrayBuffer=="function";function Fpr(r){return Rpr&&r instanceof ArrayBuffer||Ppr(r)==="[object ArrayBuffer]"}NE.exports=Fpr});var R2=s((cte,OE)=>{"use strict";var Mpr=AE();OE.exports=Mpr});var TE=s((lte,SE)=>{"use strict";function Bpr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}SE.exports=Bpr});var _E=s((pte,IE)=>{"use strict";function kpr(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}IE.exports=kpr});var ME=s((gte,FE)=>{"use strict";var LE=j().isPrimitive,PE=Ce(),vn=w(),RE=q(),jpr=TE(),Cpr=_E();function Ft(r,e){if(!(this instanceof Ft))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!LE(r))throw new TypeError(RE("invalid argument. Real component must be a number. Value: `%s`.",r));if(!LE(e))throw new TypeError(RE("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return PE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),PE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}vn(Ft,"BYTES_PER_ELEMENT",8);vn(Ft.prototype,"BYTES_PER_ELEMENT",8);vn(Ft.prototype,"byteLength",16);vn(Ft.prototype,"toString",jpr);vn(Ft.prototype,"toJSON",Cpr);FE.exports=Ft});var ni=s((mte,BE)=>{"use strict";var Gpr=ME();BE.exports=Gpr});var jE=s((dte,kE)=>{"use strict";var Vpr=typeof Math.fround=="function"?Math.fround:null;kE.exports=Vpr});var VE=s((hte,GE)=>{"use strict";var Upr=se(),CE=new Upr(1);function Hpr(r){return CE[0]=r,CE[0]}GE.exports=Hpr});var WE=s((yte,HE)=>{"use strict";var UE=jE(),Wpr=VE(),F2;typeof UE=="function"?F2=UE:F2=Wpr;HE.exports=F2});var zE=s((qte,DE)=>{"use strict";function Dpr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}DE.exports=Dpr});var JE=s((bte,XE)=>{"use strict";function zpr(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}XE.exports=zpr});var KE=s((wte,QE)=>{"use strict";var xE=j().isPrimitive,YE=Ce(),cn=w(),ZE=WE(),$E=q(),Xpr=zE(),Jpr=JE();function Mt(r,e){if(!(this instanceof Mt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!xE(r))throw new TypeError($E("invalid argument. Real component must be a number. Value: `%s`.",r));if(!xE(e))throw new TypeError($E("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return YE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ZE(r)}),YE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ZE(e)}),this}cn(Mt,"BYTES_PER_ELEMENT",4);cn(Mt.prototype,"BYTES_PER_ELEMENT",4);cn(Mt.prototype,"byteLength",8);cn(Mt.prototype,"toString",Xpr);cn(Mt.prototype,"toJSON",Jpr);QE.exports=Mt});var ai=s((Ete,rN)=>{"use strict";var xpr=KE();rN.exports=xpr});var tN=s((Nte,eN)=>{"use strict";var Ypr=ni(),Zpr=ai();function $pr(r){return r instanceof Ypr||r instanceof Zpr?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}eN.exports=$pr});var Hr=s((Ate,iN)=>{"use strict";var Qpr=tN();iN.exports=Qpr});var aN=s((Ote,nN)=>{"use strict";var Kpr=O(),Pa=lu();function r7r(){return typeof Pa=="function"&&typeof Pa("foo")=="symbol"&&Kpr(Pa,"iterator")&&typeof Pa.iterator=="symbol"}nN.exports=r7r});var Ra=s((Ste,sN)=>{"use strict";var e7r=aN();sN.exports=e7r});var oN=s((Tte,uN)=>{"use strict";var t7r=Ra(),i7r=t7r()?Symbol.iterator:null;uN.exports=i7r});var Fa=s((Ite,fN)=>{"use strict";var n7r=oN();fN.exports=n7r});var cN=s((_te,vN)=>{"use strict";var a7r=Ce();function s7r(r,e,t){a7r(r,e,{configurable:!1,enumerable:!1,get:t})}vN.exports=s7r});var R=s((Lte,lN)=>{"use strict";var u7r=cN();lN.exports=u7r});var gN=s((Pte,pN)=>{"use strict";function o7r(r){return r.re}pN.exports=o7r});var xe=s((Rte,mN)=>{"use strict";var f7r=gN();mN.exports=f7r});var hN=s((Fte,dN)=>{"use strict";function v7r(r){return r.im}dN.exports=v7r});var Ye=s((Mte,yN)=>{"use strict";var c7r=hN();yN.exports=c7r});var bN=s((Bte,qN)=>{"use strict";var l7r=se();function p7r(r,e){return new l7r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}qN.exports=p7r});var si=s((kte,wN)=>{"use strict";var g7r=bN();wN.exports=g7r});var NN=s((jte,EN)=>{"use strict";var m7r=dr();function d7r(r,e){return new m7r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}EN.exports=d7r});var ui=s((Cte,AN)=>{"use strict";var h7r=NN();AN.exports=h7r});var TN=s((Gte,SN)=>{"use strict";var ON={float64:y7r,float32:q7r,int32:b7r,int16:w7r,int8:E7r,uint32:N7r,uint16:A7r,uint8:O7r,uint8c:S7r,generic:T7r,default:I7r};function y7r(r,e){return r[e]}function q7r(r,e){return r[e]}function b7r(r,e){return r[e]}function w7r(r,e){return r[e]}function E7r(r,e){return r[e]}function N7r(r,e){return r[e]}function A7r(r,e){return r[e]}function O7r(r,e){return r[e]}function S7r(r,e){return r[e]}function T7r(r,e){return r[e]}function I7r(r,e){return r[e]}function _7r(r){var e=ON[r];return typeof e=="function"?e:ON.default}SN.exports=_7r});var Ma=s((Vte,IN)=>{"use strict";var L7r=TN();IN.exports=L7r});var PN=s((Ute,LN)=>{"use strict";var _N={complex128:P7r,complex64:R7r,default:F7r};function P7r(r,e){return r.get(e)}function R7r(r,e){return r.get(e)}function F7r(r,e){return r.get(e)}function M7r(r){var e=_N[r];return typeof e=="function"?e:_N.default}LN.exports=M7r});var Ba=s((Hte,RN)=>{"use strict";var B7r=PN();RN.exports=B7r});var MN=s((Wte,FN)=>{"use strict";var k7r=Rt(),j7r=Hr(),C7r=xe(),G7r=Ye(),V7r=q();function U7r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,k7r(i)&&i.length>=2)e.push(i[0],i[1]);else if(j7r(i))e.push(C7r(i),G7r(i));else return new TypeError(V7r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}FN.exports=U7r});var kN=s((Dte,BN)=>{"use strict";var H7r=Rt(),W7r=Hr(),D7r=xe(),z7r=Ye(),X7r=q();function J7r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),H7r(a)&&a.length>=2)i.push(a[0],a[1]);else if(W7r(a))i.push(D7r(a),z7r(a));else return new TypeError(X7r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}BN.exports=J7r});var CN=s((zte,jN)=>{"use strict";var x7r=Hr(),Y7r=xe(),Z7r=Ye();function $7r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!x7r(i))return null;r[a]=Y7r(i),r[a+1]=Z7r(i),a+=2}return r}jN.exports=$7r});var JN=s((Xte,XN)=>{"use strict";var ln=Je().isPrimitive,GN=Rt(),B2=Gr(),VN=R2(),UN=Yn(),Q7r=mr(),Bt=_(),oi=Hr(),ka=la(),M2=Ir(),K7r=Ra(),fi=Fa(),hr=w(),Ga=R(),Fr=se(),HN=ai(),Z=q(),ja=xe(),Ca=Ye(),r9r=si(),e9r=ui(),t9r=Ma(),i9r=Ba(),WN=MN(),n9r=kN(),a9r=CN(),Lr=Fr.BYTES_PER_ELEMENT*2,DN=K7r();function vi(r){return r instanceof rr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function zN(r){return r===rr||r.name==="Complex128Array"}function s9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Lr}function u9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Lr*2}function rr(){var r,e,t,i;if(e=arguments.length,!(this instanceof rr))return e===0?new rr:e===1?new rr(arguments[0]):e===2?new rr(arguments[0],arguments[1]):new rr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Fr(0);else if(e===1)if(ln(arguments[0]))t=new Fr(arguments[0]*2);else if(B2(arguments[0]))if(t=arguments[0],i=t.length,i&&Q7r(t)&&oi(t[0])){if(t=a9r(new Fr(i*2),t),t===null){if(!ka(i))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(arguments[0])}}else{if(s9r(t))t=r9r(t,0);else if(u9r(t))t=e9r(t,0);else if(!ka(i))throw new RangeError(Z("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(t)}else if(VN(arguments[0])){if(t=arguments[0],!M2(t.byteLength/Lr))throw new RangeError(Z("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Lr,t.byteLength));t=new Fr(t)}else if(UN(arguments[0])){if(t=arguments[0],DN===!1)throw new TypeError(Z("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Bt(t[fi]))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[fi](),!Bt(t.next))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=WN(t),t instanceof Error)throw t;t=new Fr(t)}else throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!VN(t))throw new TypeError(Z("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!ln(r))throw new TypeError(Z("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!M2(r/Lr))throw new RangeError(Z("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Lr,r));if(e===2){if(i=t.byteLength-r,!M2(i/Lr))throw new RangeError(Z("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Lr,i));t=new Fr(t,r)}else{if(i=arguments[2],!ln(i))throw new TypeError(Z("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Lr>t.byteLength-r)throw new RangeError(Z("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Lr));t=new Fr(t,r,i*2)}}return hr(this,"_buffer",t),hr(this,"_length",t.length/2),this}hr(rr,"BYTES_PER_ELEMENT",Lr);hr(rr,"name","Complex64Array");hr(rr,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,m;if(!Bt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!zN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Bt(n))throw new TypeError(Z("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(vi(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),oi(l))u[m]=ja(l),u[m+1]=Ca(l);else if(GN(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(B2(e)){if(n){for(f=e.length,e.get&&e.set?v=i9r("default"):v=t9r("default"),p=0;p<f;p++)if(!oi(v(e,p))){c=!0;break}if(c){if(!ka(f))throw new RangeError(Z("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),oi(l))u[m]=ja(l),u[m+1]=Ca(l);else if(GN(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(UN(e)&&DN&&Bt(e[fi])){if(u=e[fi](),!Bt(u.next))throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=n9r(u,n,t):o=WN(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});hr(rr,"of",function(){var e,t;if(!Bt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!zN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Ga(rr.prototype,"buffer",function(){return this._buffer.buffer});Ga(rr.prototype,"byteLength",function(){return this._buffer.byteLength});Ga(rr.prototype,"byteOffset",function(){return this._buffer.byteOffset});hr(rr.prototype,"BYTES_PER_ELEMENT",rr.BYTES_PER_ELEMENT);hr(rr.prototype,"copyWithin",function(e,t){if(!vi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});hr(rr.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!vi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},hr(i,"next",v),hr(i,"return",f),fi&&hr(i,fi,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new HN(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});hr(rr.prototype,"get",function(e){var t;if(!vi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ln(e))throw new TypeError(Z("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new HN(t[e],t[e+1])});Ga(rr.prototype,"length",function(){return this._length});hr(rr.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!vi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!ln(i))throw new TypeError(Z("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(oi(e)){if(i>=this._length)throw new RangeError(Z("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=ja(e),n[i+1]=Ca(e);return}if(vi(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(B2(e)){for(o=e.length,f=0;f<o;f++)if(!oi(e[f])){u=!0;break}if(u){if(!ka(o))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=ja(v),n[i+1]=Ca(v),i+=2;return}throw new TypeError(Z("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});XN.exports=rr});var pn=s((Jte,xN)=>{"use strict";var o9r=JN();xN.exports=o9r});var ZN=s((xte,YN)=>{"use strict";function f9r(r){return r.re}YN.exports=f9r});var Ze=s((Yte,$N)=>{"use strict";var v9r=ZN();$N.exports=v9r});var KN=s((Zte,QN)=>{"use strict";function c9r(r){return r.im}QN.exports=c9r});var $e=s(($te,rA)=>{"use strict";var l9r=KN();rA.exports=l9r});var tA=s((Qte,eA)=>{"use strict";var p9r=Rt(),g9r=Hr(),m9r=q(),d9r=Ze(),h9r=$e();function y9r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,p9r(i)&&i.length>=2)e.push(i[0],i[1]);else if(g9r(i))e.push(d9r(i),h9r(i));else return new TypeError(m9r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}eA.exports=y9r});var nA=s((Kte,iA)=>{"use strict";var q9r=Rt(),b9r=Hr(),w9r=q(),E9r=Ze(),N9r=$e();function A9r(r,e,t){var i,n,a,u;for(i=[],u=-1;n=r.next(),!n.done;)if(u+=1,a=e.call(t,n.value,u),q9r(a)&&a.length>=2)i.push(a[0],a[1]);else if(b9r(a))i.push(E9r(a),N9r(a));else return new TypeError(w9r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}iA.exports=A9r});var sA=s((rie,aA)=>{"use strict";var O9r=Hr(),S9r=Ze(),T9r=$e();function I9r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!O9r(i))return null;r[a]=S9r(i),r[a+1]=T9r(i),a+=2}return r}aA.exports=I9r});var mA=s((eie,gA)=>{"use strict";var gn=Je().isPrimitive,uA=Rt(),j2=Gr(),oA=R2(),fA=Yn(),_9r=mr(),kt=_(),ci=Hr(),Va=la(),k2=Ir(),L9r=Ra(),li=Fa(),yr=w(),Wa=R(),Mr=dr(),vA=ni(),Ua=Ze(),Ha=$e(),P9r=si(),R9r=ui(),F9r=Ma(),M9r=Ba(),$=q(),cA=tA(),B9r=nA(),k9r=sA(),Pr=Mr.BYTES_PER_ELEMENT*2,lA=L9r();function pi(r){return r instanceof er||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function pA(r){return r===er||r.name==="Complex64Array"}function j9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Pr/2}function C9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Pr}function er(){var r,e,t,i;if(e=arguments.length,!(this instanceof er))return e===0?new er:e===1?new er(arguments[0]):e===2?new er(arguments[0],arguments[1]):new er(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Mr(0);else if(e===1)if(gn(arguments[0]))t=new Mr(arguments[0]*2);else if(j2(arguments[0]))if(t=arguments[0],i=t.length,i&&_9r(t)&&ci(t[0])){if(t=k9r(new Mr(i*2),t),t===null){if(!Va(i))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Mr(arguments[0])}}else{if(j9r(t))t=P9r(t,0);else if(C9r(t))t=R9r(t,0);else if(!Va(i))throw new RangeError($("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Mr(t)}else if(oA(arguments[0])){if(t=arguments[0],!k2(t.byteLength/Pr))throw new RangeError($("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Pr,t.byteLength));t=new Mr(t)}else if(fA(arguments[0])){if(t=arguments[0],lA===!1)throw new TypeError($("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!kt(t[li]))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[li](),!kt(t.next))throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=cA(t),t instanceof Error)throw t;t=new Mr(t)}else throw new TypeError($("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!oA(t))throw new TypeError($("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!gn(r))throw new TypeError($("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!k2(r/Pr))throw new RangeError($("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Pr,r));if(e===2){if(i=t.byteLength-r,!k2(i/Pr))throw new RangeError($("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Pr,i));t=new Mr(t,r)}else{if(i=arguments[2],!gn(i))throw new TypeError($("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Pr>t.byteLength-r)throw new RangeError($("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Pr));t=new Mr(t,r,i*2)}}return yr(this,"_buffer",t),yr(this,"_length",t.length/2),this}yr(er,"BYTES_PER_ELEMENT",Pr);yr(er,"name","Complex128Array");yr(er,"from",function(e){var t,i,n,a,u,o,v,f,c,l,p,m;if(!kt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!pA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!kt(n))throw new TypeError($("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(pi(e)){if(f=e.length,n){for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,e.get(p),p),ci(l))u[m]=Ua(l),u[m+1]=Ha(l);else if(uA(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(j2(e)){if(n){for(f=e.length,e.get&&e.set?v=M9r("default"):v=F9r("default"),p=0;p<f;p++)if(!ci(v(e,p))){c=!0;break}if(c){if(!Va(f))throw new RangeError($("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(a=new this(f/2),u=a._buffer,p=0;p<f;p++)u[p]=n.call(t,v(e,p),p);return a}for(a=new this(f),u=a._buffer,m=0,p=0;p<f;p++){if(l=n.call(t,v(e,p),p),ci(l))u[m]=Ua(l),u[m+1]=Ha(l);else if(uA(l)&&l.length>=2)u[m]=l[0],u[m+1]=l[1];else throw new TypeError($("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(fA(e)&&lA&&kt(e[li])){if(u=e[li](),!kt(u.next))throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=B9r(u,n,t):o=cA(u),o instanceof Error)throw o;for(f=o.length/2,a=new this(f),u=a._buffer,p=0;p<f;p++)u[p]=o[p];return a}throw new TypeError($("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});yr(er,"of",function(){var e,t;if(!kt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!pA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Wa(er.prototype,"buffer",function(){return this._buffer.buffer});Wa(er.prototype,"byteLength",function(){return this._buffer.byteLength});Wa(er.prototype,"byteOffset",function(){return this._buffer.byteOffset});yr(er.prototype,"BYTES_PER_ELEMENT",er.BYTES_PER_ELEMENT);yr(er.prototype,"copyWithin",function(e,t){if(!pi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});yr(er.prototype,"entries",function(){var e,t,i,n,a,u,o;if(!pi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,u=-1,o=-2,i={},yr(i,"next",v),yr(i,"return",f),li&&yr(i,li,c),i;function v(){var l;return u+=1,a||u>=n?{done:!0}:(o+=2,l=new vA(e[o],e[o+1]),{value:[u,l],done:!1})}function f(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});yr(er.prototype,"get",function(e){var t;if(!pi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!gn(e))throw new TypeError($("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new vA(t[e],t[e+1])});Wa(er.prototype,"length",function(){return this._length});yr(er.prototype,"set",function(e){var t,i,n,a,u,o,v,f,c;if(!pi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!gn(i))throw new TypeError($("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(ci(e)){if(i>=this._length)throw new RangeError($("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ua(e),n[i+1]=Ha(e);return}if(pi(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Mr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(j2(e)){for(o=e.length,f=0;f<o;f++)if(!ci(e[f])){u=!0;break}if(u){if(!Va(o))throw new RangeError($("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Pr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Mr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,c=0,f=0;f<o;f++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=Ua(v),n[i+1]=Ha(v),i+=2;return}throw new TypeError($("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});gA.exports=er});var mn=s((tie,dA)=>{"use strict";var G9r=mA();dA.exports=G9r});var yA=s((iie,hA)=>{"use strict";var V9r=dr(),U9r=se(),H9r=lr(),W9r=Pt(),D9r=Zt(),z9r=un(),X9r=Yt(),J9r=on(),x9r=fn(),Y9r=pn(),Z9r=mn(),$9r=[V9r,U9r,W9r,H9r,z9r,D9r,x9r,X9r,J9r,Y9r,Z9r];hA.exports=$9r});var bA=s((nie,qA)=>{"use strict";var Q9r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];qA.exports=Q9r});var NA=s((aie,EA)=>{"use strict";var K9r=Et(),rgr=mr(),egr=Ge(),tgr=_b(),igr=yA(),wA=bA(),ngr=wA.length;function agr(r){var e;if(rgr(r))return"generic";if(K9r(r))return null;for(e=0;e<ngr;e++)if(r instanceof igr[e])return wA[e];return tgr[egr(r)]||null}EA.exports=agr});var Da=s((sie,AA)=>{"use strict";var sgr=NA();AA.exports=sgr});var TA=s((uie,SA)=>{"use strict";var OA=_(),ugr=Gr(),ogr=mb(),fgr=w2(),vgr=E2(),cgr=N2(),lgr=Da(),C2=q();function pgr(){var r,e,t,i,n,a,u,o,v;if(r=arguments[0],arguments.length>1)if(ugr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!OA(t))throw new TypeError(C2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!OA(t))throw new TypeError(C2("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!ogr(r))throw new TypeError(C2("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,v=r.next(),!v.done;)i.push(t.call(e,v.value,o));return i}for(;v=r.next(),!v.done;)i.push(v.value);return i}if(n=i.length,u=lgr(i),fgr(i)?a=vgr(u):a=cgr(u),t){for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,t.call(e,v.value,o));return i}for(;o<n-1&&(o+=1,v=r.next(),!v.done);)a(i,o,v.value);return i}SA.exports=pgr});var _A=s((oie,IA)=>{"use strict";var ggr=TA();IA.exports=ggr});var PA=s((fie,LA)=>{"use strict";function mgr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}LA.exports=mgr});var FA=s((vie,RA)=>{"use strict";function dgr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}RA.exports=dgr});var kA=s((cie,BA)=>{"use strict";var hgr=tr(),MA=ie(),ygr=PA(),qgr=FA(),bgr=.7853981633974483,wgr=3061616997868383e-32,Egr=.3333333333333341,Ngr=2147483647;function Agr(r,e,t){var i,n,a,u,o,v,f,c,l;return i=hgr(r),n=i&Ngr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=bgr-r,c=wgr-e,r=l+c,e=0),l=r*r,c=l*l,u=ygr(c),f=l*qgr(c),o=l*r,u=e+l*(o*(u+f)+e),u+=Egr*o,c=r+u,n>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(c*c/(c+f)-u)))):t===1?c:(l=MA(c,0),f=u-(l-r),a=-1/c,v=MA(a,0),o=1+v*l,v+a*(o+v*f))}BA.exports=Agr});var CA=s((lie,jA)=>{"use strict";var Ogr=kA();jA.exports=Ogr});var UA=s((pie,VA)=>{"use strict";var Sgr=tr(),GA=CA(),Tgr=Zi(),G2=[0,0],Igr=2147483647,_gr=1072243195,Lgr=2146435072,Pgr=1044381696;function Rgr(r){var e,t;return e=Sgr(r),e&=Igr,e<=_gr?e<Pgr?r:GA(r,0,1):e>=Lgr?NaN:(t=Tgr(r,G2),GA(G2[0],G2[1],1-((t&1)<<1)))}VA.exports=Rgr});var V2=s((gie,HA)=>{"use strict";var Fgr=UA();HA.exports=Fgr});var za=s((mie,WA)=>{"use strict";var Mgr=1.5707963267948966;WA.exports=Mgr});var Xa=s((die,DA)=>{"use strict";var Bgr=.7853981633974483;DA.exports=Bgr});var XA=s((hie,zA)=>{"use strict";function kgr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}zA.exports=kgr});var xA=s((yie,JA)=>{"use strict";function jgr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}JA.exports=jgr});var $A=s((qie,ZA)=>{"use strict";var Cgr=E(),Ggr=L(),U2=za(),Vgr=Xa(),Ugr=U(),Hgr=XA(),Wgr=xA(),YA=6123233995736766e-32,Dgr=2.414213562373095;function zgr(r){var e,t,i,n;return Cgr(r)||r===0?r:r===Ggr?U2:r===Ugr?-U2:(r<0&&(t=!0,r=-r),e=0,r>Dgr?(i=U2,e=1,r=-(1/r)):r<=.66?i=0:(i=Vgr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*Hgr(n)/Wgr(n),n=r*n+r,e===2?n+=.5*YA:e===1&&(n+=YA),i+=n,t?-i:i)}ZA.exports=zgr});var Ja=s((bie,QA)=>{"use strict";var Xgr=$A();QA.exports=Xgr});var H2=s((wie,KA)=>{"use strict";var Jgr=j().isPrimitive;function xgr(r){return Jgr(r)&&r>=0}KA.exports=xgr});var W2=s((Eie,rO)=>{"use strict";var Ygr=j().isObject;function Zgr(r){return Ygr(r)&&r.valueOf()>=0}rO.exports=Zgr});var tO=s((Nie,eO)=>{"use strict";var $gr=H2(),Qgr=W2();function Kgr(r){return $gr(r)||Qgr(r)}eO.exports=Kgr});var z2=s((Aie,nO)=>{"use strict";var iO=w(),D2=tO(),rmr=H2(),emr=W2();iO(D2,"isPrimitive",rmr);iO(D2,"isObject",emr);nO.exports=D2});var sO=s((Oie,aO)=>{"use strict";var tmr=I(),xa=O(),imr=Cr().isPrimitive,nmr=ae().isPrimitive,amr=Je().isPrimitive,smr=z2().isPrimitive,dn=q();function umr(r,e){return tmr(e)?xa(e,"period")&&(r.period=e.period,!nmr(e.period))?new TypeError(dn("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):xa(e,"amplitude")&&(r.amplitude=e.amplitude,!smr(e.amplitude))?new TypeError(dn("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):xa(e,"offset")&&(r.offset=e.offset,!imr(e.offset))?new TypeError(dn("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):xa(e,"iter")&&(r.iter=e.iter,!amr(e.iter))?new TypeError(dn("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(dn("invalid argument. Options argument must be an object. Value: `%s`.",e))}aO.exports=umr});var vO=s((Sie,fO)=>{"use strict";var X2=w(),uO=Fa(),omr=V2(),fmr=Ja(),vmr=za(),cmr=_r(),lmr=sO();function oO(r){var e,t,i,n,a,u,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=lmr(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,u=cmr/e.period,o=e.amplitude/vmr,v=0,t={},X2(t,"next",f),X2(t,"return",c),uO&&X2(t,uO,l),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*fmr(omr(u*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return oO(e)}}fO.exports=oO});var lO=s((Tie,cO)=>{"use strict";var pmr=vO();cO.exports=pmr});var gO=s((Iie,pO)=>{"use strict";var gmr={Complex64:"complex64",Complex128:"complex128"};pO.exports=gmr});var dO=s((_ie,mO)=>{"use strict";var mmr=ai(),dmr=ni(),hmr=[mmr,dmr];mO.exports=hmr});var yO=s((Lie,hO)=>{"use strict";var ymr=["complex64","complex128"];hO.exports=ymr});var wO=s((Pie,bO)=>{"use strict";var qmr=Ge(),bmr=gO(),wmr=dO(),qO=yO(),Emr=qO.length;function Nmr(r){var e;for(e=0;e<Emr;e++)if(r instanceof wmr[e])return qO[e];return bmr[qmr(r)]||null}bO.exports=Nmr});var J2=s((Rie,EO)=>{"use strict";var Amr=wO();EO.exports=Amr});var AO=s((Fie,NO)=>{"use strict";var Omr=dr(),Smr=se(),Tmr=mn(),Imr=pn(),_mr={float64:Omr,float32:Smr,complex128:Tmr,complex64:Imr};NO.exports=_mr});var SO=s((Mie,OO)=>{"use strict";var Lmr=AO();function Pmr(r){return Lmr[r]||null}OO.exports=Pmr});var IO=s((Bie,TO)=>{"use strict";var Rmr=SO();TO.exports=Rmr});var LO=s((kie,_O)=>{"use strict";function Fmr(r,e,t,i){var n,a,u,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,u=(e-r)/a,o=1;o<a;o++)n.push(r+u*o);return i&&n.push(e),n}_O.exports=Fmr});var kO=s((jie,BO)=>{"use strict";var Mmr=ai(),Bmr=ni(),PO=Ze(),RO=$e(),FO=xe(),MO=Ye();function kmr(r,e,t,i,n,a){var u,o,v,f,c,l,p,m,h,d,g,y,N;if(n===0)return[];if(o=0,r==="float64"?(f=e,l=0):r==="complex64"?(o+=1,f=FO(e),l=MO(e)):(f=PO(e),l=RO(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=FO(i),p=MO(i)):(c=PO(i),p=RO(i)),o===2?u=Mmr:u=Bmr,n===1)return a?[new u(c,p)]:[new u(f,l)];for(v=[new u(f,l)],a?y=n-1:y=n,d=(c-f)/y,g=(p-l)/y,N=1;N<y;N++)m=f+d*N,h=l+g*N,v.push(new u(m,h));return a&&v.push(new u(c,p)),v}BO.exports=kmr});var x2=s((Cie,jO)=>{"use strict";function jmr(r,e,t,i,n){var a,u,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,u=(t-e)/a,o=1;o<a;o++)r[o]=e+u*o;return n&&(r[a]=t),r}jO.exports=jmr});var Y2=s((Gie,HO)=>{"use strict";var CO=Ze(),GO=$e(),VO=xe(),UO=Ye();function Cmr(r,e,t,i,n,a,u){var o,v,f,c,l,p,m,h,d;if(a===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=VO(t),f=UO(t)):(o=CO(t),f=GO(t)),i==="float64"?(v=n,c=0):i==="complex64"?(v=VO(n),c=UO(n)):(v=CO(n),c=GO(n)),a===1)return u?(r[0]=v,r[1]=c):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,u?m=a-1:m=a,l=(v-o)/m,p=(c-f)/m,d=2,h=1;h<m;h++)r[d]=o+l*h,r[d+1]=f+p*h,d+=2;return u&&(r[d]=v,r[d+1]=c),r}HO.exports=Cmr});var $2=s((Vie,DO)=>{"use strict";var Gmr=I(),WO=O(),Vmr=K().isPrimitive,Umr=vr().isPrimitive,Z2=q();function Hmr(r,e){return Gmr(e)?WO(e,"dtype")&&(r.dtype=e.dtype,!Vmr(r.dtype))?new TypeError(Z2("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):WO(e,"endpoint")&&(r.endpoint=e.endpoint,!Umr(r.endpoint))?new TypeError(Z2("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(Z2("invalid argument. Options argument must be an object. Value: `%s`.",e))}DO.exports=Hmr});var Q2=s((Uie,Wmr)=>{Wmr.exports={endpoint:!0}});var $O=s((Hie,ZO)=>{"use strict";var zO=Hr(),XO=j().isPrimitive,Dmr=Je().isPrimitive,JO=E(),xO=J2(),zmr=IO(),Xmr=si(),Jmr=ui(),gi=q(),xmr=LO(),Ymr=kO(),Zmr=x2(),YO=Y2(),$mr=$2(),Qmr=Q2();function Kmr(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(o=xO(r),o===null){if(!zO(r))throw new TypeError(gi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}f=!0}else{if(!XO(r)||JO(r))throw new TypeError(gi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(v=xO(e),v===null){if(!zO(e))throw new TypeError(gi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="complex128"}f=!0}else{if(!XO(e)||JO(e))throw new TypeError(gi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));v="float64"}if(!Dmr(t))throw new TypeError(gi("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:Qmr.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=$mr(i,arguments[3]),a))throw a;if(i.dtype==="generic")return f?Ymr(o,r,v,e,t,i.endpoint):xmr(r,e,t,i.endpoint);if(n=zmr(i.dtype),n===null)throw new TypeError(gi('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(u=new n(t),i.dtype==="complex64")return YO(Xmr(u,0),o,r,v,e,t,i.endpoint),u;if(i.dtype==="complex128")return YO(Jmr(u,0),o,r,v,e,t,i.endpoint),u;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return Zmr(u,r,e,t,i.endpoint)}ZO.exports=Kmr});var KO=s((Wie,QO)=>{"use strict";var rdr=w2(),edr=Ma(),tdr=N2(),idr=Ba(),ndr=E2(),adr=Da();function sdr(r){var e=adr(r);return rdr(r)?{accessorProtocol:!0,accessors:[idr(e),ndr(e)]}:{accessorProtocol:!1,accessors:[edr(e),tdr(e)]}}QO.exports=sdr});var eS=s((Die,rS)=>{"use strict";var udr=KO();rS.exports=udr});var iS=s((zie,tS)=>{"use strict";var odr=eS();function fdr(r){var e=odr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}tS.exports=fdr});var Ya=s((Xie,nS)=>{"use strict";var vdr=iS();nS.exports=vdr});var vS=s((Jie,fS)=>{"use strict";var cdr=ai(),ldr=ni(),aS=Ze(),sS=$e(),uS=xe(),oS=Ye();function pdr(r,e,t,i,n,a,u){var o,v,f,c,l,p,m,h,d,g,y,N,A,G;if(a===0)return r;if(v=0,e==="float64"?(f=t,l=0):e==="complex64"?(v+=1,f=uS(t),l=oS(t)):(f=aS(t),l=sS(t)),i==="float64"?(c=n,p=0):i==="complex64"?(v+=1,c=uS(n),p=oS(n)):(c=aS(n),p=sS(n)),v===2?o=cdr:o=ldr,h=r.data,m=r.accessors[1],a===1)return u?m(h,0,new o(c,p)):m(h,0,new o(f,l)),r;for(m(h,0,new o(f,l)),u?A=a-1:A=a,y=(c-f)/A,N=(p-l)/A,G=1;G<A;G++)d=f+y*G,g=l+N*G,m(h,G,new o(d,g));return u&&m(h,A,new o(c,p)),r}fS.exports=pdr});var lS=s((xie,cS)=>{"use strict";function gdr(r,e,t,i,n){var a,u,o,v,f;if(i===0)return r;if(a=r.data,u=r.accessors[1],i===1)return n?u(a,0,t):u(a,0,e),r;for(u(a,0,e),n?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)u(a,f,e+v*f);return n&&u(a,o,t),r}cS.exports=gdr});var bS=s((Yie,qS)=>{"use strict";var pS=Hr(),gS=j().isPrimitive,mdr=Gr(),hn=q(),mS=E(),dS=J2(),ddr=Da(),hdr=si(),ydr=ui(),hS=Ya(),qdr=vS(),bdr=lS(),yS=Y2(),wdr=x2(),Edr=$2(),Ndr=Q2();function Adr(r,e,t){var i,n,a,u,o,v,f;if(typeof r=="object"){if(a=dS(r),a===null){if(!pS(r))throw new TypeError(hn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!gS(r)||mS(r))throw new TypeError(hn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(u=dS(e),u===null){if(!pS(e))throw new TypeError(hn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="complex128"}o=!0}else{if(!gS(e)||mS(e))throw new TypeError(hn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));u="float64"}if(!mdr(t))throw new TypeError(hn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:Ndr.endpoint},arguments.length>3&&(n=Edr(i,arguments[3]),n))throw n;if(v=ddr(t),v===null&&(v="generic"),v==="complex64")return yS(hdr(t,0),a,r,u,e,t.length,i.endpoint),t;if(v==="complex128")return yS(ydr(t,0),a,r,u,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=hS(t),qdr(f,a,r,u,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=hS(t),f.accessorProtocol?(bdr(f,r,e,t.length,i.endpoint),t):(wdr(t,r,e,t.length,i.endpoint),t)}qS.exports=Adr});var NS=s((Zie,ES)=>{"use strict";var Odr=w(),wS=$O(),Sdr=bS();Odr(wS,"assign",Sdr);ES.exports=wS});var OS=s(($ie,AS)=>{"use strict";var Tdr=E(),Idr=ze();function _dr(r,e,t){var i,n,a,u;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],u=1;u<r;u++){if(n+=t,a=e[n],Tdr(a))return a;(a>i||a===i&&Idr(a))&&(i=a)}return i}AS.exports=_dr});var TS=s((Qie,SS)=>{"use strict";var Ldr=E(),Pdr=ze();function Rdr(r,e,t,i){var n,a,u,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,u=e[a],Ldr(u))return u;(u>n||u===n&&Pdr(u))&&(n=u)}return n}SS.exports=Rdr});var LS=s((Kie,_S)=>{"use strict";var Fdr=w(),IS=OS(),Mdr=TS();Fdr(IS,"ndarray",Mdr);_S.exports=IS});var RS=s((rne,PS)=>{"use strict";var Bdr=LS();PS.exports=Bdr});var BS=s((ene,MS)=>{"use strict";var FS=E(),kdr=ze();function jdr(r,e,t,i,n){var a,u,o,v,f;if(r<=0)return NaN;for(t<0?u=(1-r)*t:u=0,n<0?o=(1-r)*n:o=0,f=0;f<r&&i[o]!==0;f++)u+=t,o+=n;if(f===r)return NaN;if(a=e[u],FS(a))return a;for(f+=1,f;f<r;f++)if(u+=t,o+=n,!i[o]){if(v=e[u],FS(v))return v;(v>a||v===a&&kdr(v))&&(a=v)}return a}MS.exports=jdr});var CS=s((tne,jS)=>{"use strict";var kS=E(),Cdr=ze();function Gdr(r,e,t,i,n,a,u){var o,v,f,c,l;if(r<=0)return NaN;for(v=i,f=u,l=0;l<r&&n[f]!==0;l++)v+=t,f+=a;if(l===r)return NaN;if(o=e[v],kS(o))return o;for(l+=1,l;l<r;l++)if(v+=t,f+=a,!n[f]){if(c=e[v],kS(c))return c;(c>o||c===o&&Cdr(c))&&(o=c)}return o}jS.exports=Gdr});var US=s((ine,VS)=>{"use strict";var Vdr=w(),GS=BS(),Udr=CS();Vdr(GS,"ndarray",Udr);VS.exports=GS});var DS=s((nne,WS)=>{"use strict";var HS=q();function Hdr(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(HS('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(HS('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}WS.exports=Hdr});var XS=s((ane,zS)=>{"use strict";var Wdr=DS();zS.exports=Wdr});var xS=s((sne,JS)=>{"use strict";var Ddr=j().isPrimitive,zdr=XS(),Xdr=q();function Jdr(r,e,t,i,n,a){var u,o;if(!(Ddr(r)&&zdr(r,e,t,i,n)))throw i==="closed"?u="[":u="(",n==="closed"?o="]":o=")",new TypeError(Xdr("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,u,e,t,o,String(r)))}JS.exports=Jdr});var ZS=s((une,YS)=>{"use strict";var xdr=vr().isPrimitive,Ydr=q();function Zdr(r,e){if(!xdr(r))throw new TypeError(Ydr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}YS.exports=Zdr});var QS=s((one,$S)=>{"use strict";function $dr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}$S.exports=$dr});var rT=s((fne,KS)=>{"use strict";var Qdr=q(),Kdr=QS();function rhr(r,e,t){if(!Kdr(r,e))throw new TypeError(Qdr("invalid argument. %s must be broadcast compatible.",t))}KS.exports=rhr});var tT=s((vne,eT)=>{"use strict";function ehr(r){var e,t,i,n,a,u;for(e=r.length,t=r[0].length,u=1;u<arguments.length;u++)if(a=arguments[u],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}eT.exports=ehr});var nT=s((cne,iT)=>{"use strict";var thr=q(),ihr=tT();function nhr(r,e,t,i){if(!ihr(r,e))throw new TypeError(thr("invalid argument. %s must be broadcast compatible with %s.",t,i))}iT.exports=nhr});var K2=s((lne,aT)=>{"use strict";var ahr=q();function shr(r,e){if(r===void 0)throw new Error(ahr("invalid invocation. Must provide %s.",e))}aT.exports=shr});var uT=s((pne,sT)=>{"use strict";var uhr=q();function ohr(r,e,t,i){if(!(r>e))throw new TypeError(uhr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}sT.exports=ohr});var fT=s((gne,oT)=>{"use strict";var fhr=q();function vhr(r,e,t,i){if(!(r>=e))throw new TypeError(fhr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}oT.exports=vhr});var cT=s((mne,vT)=>{"use strict";var chr=Cr().isPrimitive,lhr=q();function phr(r,e){if(!chr(r))throw new TypeError(lhr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}vT.exports=phr});var pT=s((dne,lT)=>{"use strict";var ghr=q();function mhr(r,e,t,i){if(!(r<e))throw new TypeError(ghr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}lT.exports=mhr});var mT=s((hne,gT)=>{"use strict";var dhr=q();function hhr(r,e,t,i){if(!(r<=e))throw new TypeError(dhr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}gT.exports=hhr});var hT=s((yne,dT)=>{"use strict";var yhr=Je().isPrimitive,qhr=q();function bhr(r,e){if(!yhr(r))throw new TypeError(qhr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}dT.exports=bhr});var qT=s((qne,yT)=>{"use strict";var whr=z2().isPrimitive,Ehr=q();function Nhr(r,e){if(!whr(r))throw new TypeError(Ehr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}yT.exports=Nhr});var wT=s((bne,bT)=>{"use strict";var Ahr=j().isPrimitive,Ohr=q();function Shr(r,e){if(!Ahr(r))throw new TypeError(Ohr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}bT.exports=Shr});var NT=s((wne,ET)=>{"use strict";var Thr=q();function Ihr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(Thr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}ET.exports=Ihr});var r1=s((Ene,AT)=>{"use strict";var _hr=ae().isPrimitive,Lhr=q();function Phr(r,e){if(!_hr(r))throw new TypeError(Lhr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}AT.exports=Phr});var ST=s((Nne,OT)=>{"use strict";var Rhr=D().isPrimitive,Fhr=q();function Mhr(r,e){if(!Rhr(r))throw new TypeError(Fhr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}OT.exports=Mhr});var e1=s((Ane,TT)=>{"use strict";var Bhr=j().isPrimitive;function khr(r){return Bhr(r)&&r>=0&&r<=1}TT.exports=khr});var t1=s((One,IT)=>{"use strict";var jhr=j().isObject;function Chr(r){return jhr(r)&&r.valueOf()>=0&&r.valueOf()<=1}IT.exports=Chr});var LT=s((Sne,_T)=>{"use strict";var Ghr=e1(),Vhr=t1();function Uhr(r){return Ghr(r)||Vhr(r)}_T.exports=Uhr});var yn=s((Tne,RT)=>{"use strict";var PT=w(),i1=LT(),Hhr=e1(),Whr=t1();PT(i1,"isPrimitive",Hhr);PT(i1,"isObject",Whr);RT.exports=i1});var MT=s((Ine,FT)=>{"use strict";var Dhr=yn().isPrimitive,zhr=q();function Xhr(r,e){if(!Dhr(r))throw new TypeError(zhr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}FT.exports=Xhr});var kT=s((_ne,BT)=>{"use strict";var Jhr=mr(),xhr=q();function Yhr(r,e){if(!Jhr(r))throw new TypeError(xhr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}BT.exports=Yhr});var CT=s((Lne,jT)=>{"use strict";function Zhr(r){return r.length===1||r[0].length===1}jT.exports=Zhr});var VT=s((Pne,GT)=>{"use strict";var $hr=mr(),Qhr=CT();function Khr(r){return $hr(r)&&Qhr(r)}GT.exports=Khr});var HT=s((Rne,UT)=>{"use strict";var ryr=q(),eyr=VT();function tyr(r,e){if(!eyr(r))throw new TypeError(ryr("invalid argument. %s must consist of only a single row or a single column.",e))}UT.exports=tyr});var DT=s((Fne,WT)=>{"use strict";function iyr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}WT.exports=iyr});var XT=s((Mne,zT)=>{"use strict";var nyr=q(),ayr=DT();function syr(r,e,t){if(!ayr(r,e))throw new TypeError(nyr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}zT.exports=syr});var xT=s((Bne,JT)=>{"use strict";var uyr=K().isPrimitive,oyr=q();function fyr(r,e){if(!uyr(r))throw new TypeError(oyr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}JT.exports=fyr});var ZT=s((kne,YT)=>{"use strict";var vyr=q();function cyr(r){throw new Error(vyr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}YT.exports=cyr});var KT=s((jne,QT)=>{"use strict";var $T=r1(),lyr=K2();function pyr(r,e,t){$T(r,"Number of rows"),$T(e,"Number of columns"),lyr(t,"a pseudorandom number generator seed")}QT.exports=pyr});var eI=s((Cne,rI)=>{"use strict";var gyr=mr(),myr=Cr().isPrimitive,dyr=q(),hyr=Ia();function yyr(r){if(myr(r))return r;if(gyr(r))return hyr(r);throw new TypeError(dyr("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}rI.exports=yyr});var iI=s((Gne,tI)=>{"use strict";var x={};x.isBetween=xS();x.isBoolean=ZS();x.isBroadcastCompatible=rT();x.isBroadcastCompatibleWith=nT();x.isDefined=K2();x.isGreaterThan=uT();x.isGreaterThanEqual=fT();x.isInteger=cT();x.isLessThan=pT();x.isLessThanEqual=mT();x.isNonNegativeInteger=hT();x.isNonNegativeNumber=qT();x.isNumber=wT();x.isOneOf=NT();x.isPositiveInteger=r1();x.isPositiveNumber=ST();x.isProbability=MT();x.isRange=kT();x.isRange1d=HT();x.isSameShape=XT();x.isString=xT();x.unrecognizedOptionName=ZT();x.verifyCommonPRNGArgs=KT();x.verifyPRNGSeed=eI();tI.exports=x});var aI=s((Vne,nI)=>{"use strict";var n1=4;function qyr(r,e,t,i,n,a){var u,o,v,f;if(r<=0||e===0)return n;if(i===1&&a===1){if(v=r%n1,v>0)for(f=0;f<v;f++)n[f]+=e*t[f];if(r<n1)return n;for(f=v;f<r;f+=n1)n[f]+=e*t[f],n[f+1]+=e*t[f+1],n[f+2]+=e*t[f+2],n[f+3]+=e*t[f+3];return n}for(i<0?u=(1-r)*i:u=0,a<0?o=(1-r)*a:o=0,f=0;f<r;f++)n[o]+=e*t[u],u+=i,o+=a;return n}nI.exports=qyr});var uI=s((Une,sI)=>{"use strict";var qn=4;function byr(r,e,t,i,n,a,u,o){var v,f,c,l;if(r<=0||e===0)return a;if(v=n,f=o,i===1&&u===1){if(c=r%qn,c>0)for(l=0;l<c;l++)a[f]+=e*t[v],v+=i,f+=u;if(r<qn)return a;for(l=c;l<r;l+=qn)a[f]+=e*t[v],a[f+1]+=e*t[v+1],a[f+2]+=e*t[v+2],a[f+3]+=e*t[v+3],v+=qn,f+=qn;return a}for(l=0;l<r;l++)a[f]+=e*t[v],v+=i,f+=u;return a}sI.exports=byr});var a1=s((Hne,fI)=>{"use strict";var wyr=w(),oI=aI(),Eyr=uI();wyr(oI,"ndarray",Eyr);fI.exports=oI});var cI=s((Wne,vI)=>{"use strict";var s1={};s1.daxpy=a1().ndarray;s1.saxpy=a1().ndarray;vI.exports=s1});var pI=s((Dne,lI)=>{"use strict";function Nyr(r){return r*r}lI.exports=Nyr});var Za=s((zne,gI)=>{"use strict";var Ayr=pI();gI.exports=Ayr});var dI=s((Xne,mI)=>{"use strict";function Oyr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}mI.exports=Oyr});var yI=s((Jne,hI)=>{"use strict";function Syr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}hI.exports=Syr});var wI=s((xne,bI)=>{"use strict";var Tyr=E(),Iyr=C(),qI=Xa(),_yr=dI(),Lyr=yI(),Pyr=6123233995736766e-32;function Ryr(r){var e,t,i,n,a;if(Tyr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*Lyr(t),t=Iyr(t+t),a=qI-t,t=t*n-Pyr,a-=t,a+=qI;else{if(i<1e-8)return r;t=i*i,a=t*_yr(t),a=i*a+i}return e?-a:a}bI.exports=Ryr});var jt=s((Yne,EI)=>{"use strict";var Fyr=wI();EI.exports=Fyr});var SI=s((Zne,OI)=>{"use strict";var Myr=E(),NI=jt(),Byr=C(),AI=Xa(),kyr=6123233995736766e-32;function jyr(r){var e;return Myr(r)?NaN:r<-1||r>1?NaN:r>.5?2*NI(Byr(.5-.5*r)):(e=AI-NI(r),e+=kyr,e+=AI,e)}OI.exports=jyr});var bn=s(($ne,TI)=>{"use strict";var Cyr=SI();TI.exports=Cyr});var PI=s((Qne,LI)=>{"use strict";var Gyr=E(),Vyr=De(),II=C(),Uyr=ha(),_I=P(),Hyr=1<<28;function Wyr(r){var e;return Gyr(r)||r<1?NaN:r===1?0:r>=Hyr?_I(r)+Uyr:r>2?_I(2*r-1/(r+II(r*r-1))):(e=r-1,Vyr(e+II(2*e+e*e)))}LI.exports=Wyr});var FI=s((Kne,RI)=>{"use strict";var Dyr=PI();RI.exports=Dyr});var BI=s((rae,MI)=>{"use strict";var zyr=Ja();function Xyr(r){return zyr(1/r)}MI.exports=Xyr});var jI=s((eae,kI)=>{"use strict";var Jyr=BI();kI.exports=Jyr});var GI=s((tae,CI)=>{"use strict";var xyr=jt();function Yyr(r){return xyr(1+r)}CI.exports=Yyr});var UI=s((iae,VI)=>{"use strict";var Zyr=GI();VI.exports=Zyr});var WI=s((nae,HI)=>{"use strict";var $yr=jt();function Qyr(r){return $yr(1-r)}HI.exports=Qyr});var zI=s((aae,DI)=>{"use strict";var Kyr=WI();DI.exports=Kyr});var JI=s((sae,XI)=>{"use strict";var rqr=jt();function eqr(r){return rqr(1/r)}XI.exports=eqr});var YI=s((uae,xI)=>{"use strict";var tqr=JI();xI.exports=tqr});var KI=s((oae,QI)=>{"use strict";var iqr=Rr(),nqr=E(),aqr=De(),ZI=C(),sqr=ha(),$I=P(),uqr=1/(1<<28),oqr=1<<28;function fqr(r){var e,t,i;return nqr(r)||iqr(r)?r:(r<0&&(r=-r,e=!0),r<uqr?i=r:r>oqr?i=$I(r)+sqr:r>2?i=$I(2*r+1/(ZI(r*r+1)+r)):(t=r*r,i=aqr(r+t/(1+ZI(1+t)))),e?-i:i)}QI.exports=fqr});var u1=s((fae,r_)=>{"use strict";var vqr=KI();r_.exports=vqr});var t_=s((vae,e_)=>{"use strict";var cqr=u1();function lqr(r){return cqr(1/r)}e_.exports=lqr});var n_=s((cae,i_)=>{"use strict";var pqr=t_();i_.exports=pqr});var s_=s((lae,a_)=>{"use strict";var gqr=bn(),mqr=C();function dqr(r){return 2*gqr(mqr(r))}a_.exports=dqr});var o_=s((pae,u_)=>{"use strict";var hqr=s_();u_.exports=hqr});var v_=s((gae,f_)=>{"use strict";var yqr=jt(),qqr=C();function bqr(r){return 2*yqr(qqr(r))}f_.exports=bqr});var l_=s((mae,c_)=>{"use strict";var wqr=v_();c_.exports=wqr});var m_=s((dae,g_)=>{"use strict";var Eqr=E(),p_=De(),Nqr=L(),Aqr=U(),Oqr=1/(1<<28);function Sqr(r){var e,t;return Eqr(r)||r<-1||r>1?NaN:r===1?Nqr:r===-1?Aqr:(r<0&&(e=!0,r=-r),r<Oqr?e?-r:r:(r<.5?(t=r+r,t=.5*p_(t+t*r/(1-r))):t=.5*p_((r+r)/(1-r)),e?-t:t))}g_.exports=Sqr});var h_=s((hae,d_)=>{"use strict";var Tqr=m_();d_.exports=Tqr});var q_=s((yae,y_)=>{"use strict";var Iqr=bn();function _qr(r){return Iqr(1+r)}y_.exports=_qr});var w_=s((qae,b_)=>{"use strict";var Lqr=q_();b_.exports=Lqr});var N_=s((bae,E_)=>{"use strict";var Pqr=bn();function Rqr(r){return Pqr(1-r)}E_.exports=Rqr});var O_=s((wae,A_)=>{"use strict";var Fqr=N_();A_.exports=Fqr});var I_=s((Eae,T_)=>{"use strict";var S_=-.16666666666666632,Mqr=.00833333333332249,Bqr=-.0001984126982985795,kqr=27557313707070068e-22,jqr=-25050760253406863e-24,Cqr=158969099521155e-24,Gqr=.0416666666666666,Vqr=-.001388888888887411,Uqr=2480158728947673e-20,Hqr=-27557314351390663e-23,Wqr=2087572321298175e-24,Dqr=-11359647557788195e-27;function zqr(r,e,t,i,n){var a,u,o,v,f;return f=r*r,v=f*f,u=Mqr+f*(Bqr+f*kqr)+f*v*(jqr+f*Cqr),o=f*r,e===0?t[n]=r+o*(S_+f*u):t[n]=r-(f*(.5*e-o*u)-e-o*S_),u=f*(Gqr+f*(Vqr+f*Uqr)),u+=v*v*(Hqr+f*(Wqr+f*Dqr)),a=.5*f,v=1-a,t[n+i]=v+(1-v-a+(f*u-r*e)),t}T_.exports=zqr});var f1=s((Nae,L_)=>{"use strict";var Xqr=Jr(),Jqr=Ji(),xqr=tr(),Yqr=Zi(),__=I_(),Zqr=1072243195,$qr=1044381696,o1=[0,0];function Qqr(r,e,t,i){var n,a;if(n=xqr(r),n&=Xqr,n<=Zqr)return n<$qr&&(r|0)===0&&(e[i]=r,e[i+t]=0),__(r,0,e,t,i);if(n>=Jqr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=Yqr(r,o1),__(o1[0],o1[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}L_.exports=Qqr});var R_=s((Aae,P_)=>{"use strict";var Kqr=f1();function rbr(r){return Kqr(r,[0,0],1,0)}P_.exports=rbr});var wn=s((Oae,M_)=>{"use strict";var ebr=w(),F_=R_(),tbr=f1();ebr(F_,"assign",tbr);M_.exports=F_});var k_=s((Sae,B_)=>{"use strict";function ibr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}B_.exports=ibr});var C_=s((Tae,j_)=>{"use strict";function nbr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}j_.exports=nbr});var V_=s((Iae,G_)=>{"use strict";function abr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}G_.exports=abr});var H_=s((_ae,U_)=>{"use strict";function sbr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}U_.exports=sbr});var D_=s((Lae,W_)=>{"use strict";var ubr=C(),obr=wn().assign,fbr=L(),vbr=k_(),cbr=C_(),lbr=V_(),pbr=H_(),gbr=.5641895835477563,mbr=2.404825557695773,dbr=5.520078110286311,hbr=616,ybr=-.0014244423042272315,qbr=1413,bbr=.0005468602863106496,En=[0,0];function wbr(r){var e,t,i,n,a,u;return r<0&&(r=-r),r===fbr?0:r===0?1:r<=4?(a=r*r,n=vbr(a),u=(r+mbr)*(r-hbr/256-ybr),u*n):r<=8?(a=1-r*r/64,n=cbr(a),u=(r+dbr)*(r-qbr/256-bbr),u*n):(a=8/r,i=a*a,e=lbr(i),t=pbr(i),u=gbr/ubr(r),obr(r,En,1,0),u*(e*(En[1]+En[0])-a*t*(En[0]-En[1])))}W_.exports=wbr});var v1=s((Pae,z_)=>{"use strict";var Ebr=D_();z_.exports=Ebr});var $a=s((Rae,X_)=>{"use strict";var Nbr=1.772453850905516;X_.exports=Nbr});var x_=s((Fae,J_)=>{"use strict";function Abr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}J_.exports=Abr});var Z_=s((Mae,Y_)=>{"use strict";function Obr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}Y_.exports=Obr});var Q_=s((Bae,$_)=>{"use strict";function Sbr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}$_.exports=Sbr});var rL=s((kae,K_)=>{"use strict";function Tbr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}K_.exports=Tbr});var tL=s((jae,eL)=>{"use strict";var Ibr=C(),_br=Y(),Lbr=wn().assign,Pbr=L(),Rbr=$a(),Fbr=x_(),Mbr=Z_(),Bbr=Q_(),kbr=rL(),jbr=3.8317059702075125,Cbr=7.015586669815619,Gbr=981,Vbr=-.0003252797924876844,Ubr=1796,Hbr=-38330184381246464e-21,Nn=[0,0];function Wbr(r){var e,t,i,n,a,u,o,v;return v=_br(r),r===0||v===Pbr?0:(v<=4?(u=r*r,a=Fbr(u),o=v*(v+jbr)*(v-Gbr/256-Vbr),e=o*a):v<=8?(u=r*r,a=Mbr(u),o=v*(v+Cbr)*(v-Ubr/256-Hbr),e=o*a):(u=8/v,n=u*u,t=Bbr(n),i=kbr(n),o=1/(Ibr(v)*Rbr),Lbr(v,Nn,1,0),e=o*(t*(Nn[0]-Nn[1])+u*i*(Nn[0]+Nn[1]))),r<0&&(e*=-1),e)}eL.exports=Wbr});var c1=s((Cae,iL)=>{"use strict";var Dbr=tL();iL.exports=Dbr});var aL=s((Gae,nL)=>{"use strict";function zbr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}nL.exports=zbr});var uL=s((Vae,sL)=>{"use strict";function Xbr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}sL.exports=Xbr});var fL=s((Uae,oL)=>{"use strict";function Jbr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}oL.exports=Jbr});var cL=s((Hae,vL)=>{"use strict";function xbr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}vL.exports=xbr});var pL=s((Wae,lL)=>{"use strict";function Ybr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}lL.exports=Ybr});var yL=s((Dae,hL)=>{"use strict";var l1=P(),Zbr=C(),$br=_r(),Qbr=$a(),Kbr=U(),rwr=L(),ewr=wn().assign,p1=v1(),twr=aL(),iwr=uL(),nwr=fL(),awr=cL(),swr=pL(),uwr=1/Qbr,g1=2/$br,gL=.8935769662791675,mL=3.957678419314858,dL=7.086051060301773,owr=228,fwr=.0029519662791675214,vwr=1013,cwr=.0006471693148578684,lwr=1814,pwr=.00011356030177269763,An=[0,0];function gwr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?Kbr:r===rwr?0:r<=3?(a=r*r,u=l1(r/gL)*p1(r)*g1,n=twr(a),o=(r+gL)*(r-owr/256-fwr),u+o*n):r<=5.5?(a=r*r,u=l1(r/mL)*p1(r)*g1,n=iwr(a),o=(r+mL)*(r-vwr/256-cwr),u+o*n):r<=8?(a=r*r,u=l1(r/dL)*p1(r)*g1,n=nwr(a),o=(r+dL)*(r-lwr/256-pwr),u+o*n):(a=8/r,i=a*a,e=awr(i),t=swr(i),o=uwr/Zbr(r),ewr(r,An,1,0),o*(e*(An[0]-An[1])+a*t*(An[1]+An[0])))}hL.exports=gwr});var bL=s((zae,qL)=>{"use strict";var mwr=yL();qL.exports=mwr});var EL=s((Xae,wL)=>{"use strict";function dwr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}wL.exports=dwr});var AL=s((Jae,NL)=>{"use strict";function hwr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}NL.exports=hwr});var SL=s((xae,OL)=>{"use strict";function ywr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}OL.exports=ywr});var IL=s((Yae,TL)=>{"use strict";function qwr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}TL.exports=qwr});var BL=s((Zae,ML)=>{"use strict";var _L=P(),bwr=C(),wwr=_r(),Ewr=$a(),Nwr=U(),Awr=L(),Owr=wn().assign,LL=c1(),Swr=EL(),Twr=AL(),Iwr=SL(),_wr=IL(),Lwr=1/Ewr,PL=2/wwr,RL=2.197141326031017,FL=5.429681040794135,Pwr=562,Rwr=.001828826031017035,Fwr=1390,Mwr=-6459205864867228e-21,On=[0,0];function Bwr(r){var e,t,i,n,a,u,o;return r<0?NaN:r===0?Nwr:r===Awr?0:r<=4?(a=r*r,u=_L(r/RL)*LL(r)*PL,n=Swr(a),o=(r+RL)*(r-Pwr/256-Rwr)/r,u+o*n):r<=8?(a=r*r,u=_L(r/FL)*LL(r)*PL,n=Twr(a),o=(r+FL)*(r-Fwr/256-Mwr)/r,u+o*n):(a=8/r,i=a*a,e=Iwr(i),t=_wr(i),o=Lwr/bwr(r),Owr(r,On,1,0),o*(a*t*(On[0]-On[1])-e*(On[0]+On[1])))}ML.exports=Bwr});var jL=s(($ae,kL)=>{"use strict";var kwr=BL();kL.exports=kwr});var VL=s((Qae,GL)=>{"use strict";var jwr=E(),Cwr=Rr(),Gwr=Y(),CL=St(),Vwr=Tt(),Uwr=Q(),m1=_r(),Hwr=sn(),Wwr=Hwr+1;function Dwr(r){var e,t,i,n;return jwr(r)?NaN:Cwr(r)?NaN:(e=Gwr(r),e>Wwr?1:(t=Uwr(e),i=e-t,i===.5?0:(i<.25?n=CL(m1*i):i<.75?(i=.5-i,n=Vwr(m1*i)):(i=1-i,n=-CL(m1*i)),t%2===1?-n:n)))}GL.exports=Dwr});var HL=s((Kae,UL)=>{"use strict";var zwr=VL();UL.exports=zwr});var DL=s((r0e,WL)=>{"use strict";var Xwr=1.618033988749895;WL.exports=Xwr});var XL=s((e0e,zL)=>{"use strict";var Jwr=E(),xwr=HL(),Ywr=W(),Zwr=DL(),$wr=L(),Qwr=U(),Kwr=2.23606797749979;function rEr(r){var e,t;return Jwr(r)||r===$wr||r===Qwr?NaN:(e=Ywr(Zwr,r),t=xwr(r)/e,(e-t)/Kwr)}zL.exports=rEr});var xL=s((t0e,JL)=>{"use strict";var eEr=XL();JL.exports=eEr});var ZL=s((i0e,YL)=>{"use strict";function tEr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}YL.exports=tEr});var rP=s((n0e,KL)=>{"use strict";var iEr=mo(),nEr=vo(),$L=Jr(),h1=tr(),aEr=re(),sEr=Rr(),QL=$t(),uEr=Qt(),oEr=E(),fEr=ZL(),vEr=4294967295>>>0,cEr=3221225472>>>0,lEr=0x40000000000000,d1=2147483648>>>0,pEr=1>>>0,gEr=715094163>>>0,mEr=696219795>>>0,dEr=h1(iEr),Ct=[0>>>0,0>>>0];function hEr(r){var e,t,i,n,a,u,o;return r===0||oEr(r)||sEr(r)?r:(t=h1(r)>>>0,e=(t&nEr)>>>0,t&=$L,t<dEr?(u=lEr*r,i=(h1(u)&$L)>>>0,i=(i/3>>>0)+mEr>>>0,u=QL(e|i,0)):(u=0,i=(t/3>>>0)+gEr>>>0,u=aEr(u,e|i)),n=u*u*(u/r),u*=fEr(n),uEr.assign(u,Ct,1,0),Ct[1]&d1?(Ct[0]+=pEr,Ct[1]&=~d1):Ct[1]|=d1,u=QL(Ct[0]&vEr,Ct[1]&cEr),a=u*u,n=r/a,o=u+u,n=(n-u)/(o+n),u+=u*n,u)}KL.exports=hEr});var tP=s((a0e,eP)=>{"use strict";var yEr=rP();eP.exports=yEr});var nP=s((s0e,iP)=>{"use strict";function qEr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}iP.exports=qEr});var sP=s((u0e,aP)=>{"use strict";function bEr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}aP.exports=bEr});var fP=s((o0e,oP)=>{"use strict";var wEr=tr(),EEr=nP(),NEr=sP(),uP=1048575,AEr=.3333333333333333;function OEr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=wEr(r),a=r-1,(uP&2+n)<3?a===0?0:a*a*(AEr*a-.5):(u=a/(2+a),o=u*u,n&=uP,c=n-398458|0,f=o*o,l=440401-n|0,t=f*EEr(f),i=o*NEr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}oP.exports=OEr});var pP=s((f0e,lP)=>{"use strict";var vP=tr(),SEr=re(),TEr=ie(),IEr=E(),_Er=Xr(),LEr=U(),PEr=fP(),REr=0x40000000000000,cP=.4342944818781689,FEr=25082946711645275e-27,MEr=.30102999566361177,BEr=3694239077158931e-28,kEr=1048575,jEr=2146435072,CEr=1048576,GEr=1072693248;function VEr(r){var e,t,i,n,a,u,o,v;return IEr(r)||r<0?NaN:r===0?LEr:(t=vP(r),u=0,t<CEr&&(u-=54,r*=REr,t=vP(r)),t>=jEr?r+r:(u+=(t>>20)-_Er|0,t&=kEr,a=t+614244&1048576|0,r=SEr(r,t|a^GEr),u+=a>>20|0,o=u,n=PEr(r),r-=1,e=TEr(r,0),i=r-e,v=o*BEr+(r+n)*FEr,v+=(i+n)*cP+e*cP,v+o*MEr))}lP.exports=VEr});var mP=s((v0e,gP)=>{"use strict";var UEr=pP();gP.exports=UEr});var hP=s((c0e,dP)=>{"use strict";var HEr=E(),WEr=Rr(),DEr=W(),zEr=Q(),XEr=Xi(),JEr=mP(),xEr=l2(),YEr=p2(),ZEr=L();function $Er(r){var e,t;return HEr(r)||WEr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=JEr(r),e===-1?t=zEr(t):t=XEr(t),t<=YEr?e*0:t>xEr?ZEr:e*DEr(10,t))}dP.exports=$Er});var qP=s((l0e,yP)=>{"use strict";var QEr=hP();yP.exports=QEr});var wP=s((p0e,bP)=>{"use strict";function KEr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}bP.exports=KEr});var NP=s((g0e,EP)=>{"use strict";function rNr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}EP.exports=rNr});var SP=s((m0e,OP)=>{"use strict";var eNr=tr(),tNr=wP(),iNr=NP(),AP=1048575,nNr=.3333333333333333;function aNr(r){var e,t,i,n,a,u,o,v,f,c,l;return n=eNr(r),a=r-1,(AP&2+n)<3?a===0?0:a*a*(nNr*a-.5):(u=a/(2+a),o=u*u,n&=AP,c=n-398458|0,f=o*o,l=440401-n|0,t=f*tNr(f),i=o*iNr(f),c|=l,v=i+t,c>0?(e=.5*a*a,u*(e+v)-e):u*(v-a))}OP.exports=aNr});var _P=s((d0e,IP)=>{"use strict";var sNr=tr(),uNr=re(),oNr=ie(),fNr=Qt(),vNr=E(),cNr=Jr(),lNr=ra(),pNr=Xr(),gNr=U(),mNr=SP(),dNr=0x40000000000000,TP=1.4426950407214463,hNr=16751713164886512e-26,yNr=2146435072,qNr=1048576,bNr=1072693248,y1=[0,0];function wNr(r){var e,t,i,n,a,u,o;if(vNr(r)||r<0)return NaN;if(fNr.assign(r,y1,1,0),i=y1[0],n=y1[1],o=0,i<qNr){if((i&cNr|n)===0)return gNr;o-=54,r*=dNr,i=sNr(r)}return i>=yNr?r+r:(o+=(i>>20)-pNr|0,i&=lNr,u=i+614244&1048576|0,r=uNr(r,i|u^bNr),o+=u>>20|0,a=mNr(r),r-=1,e=oNr(r,0),t=r-e,(r+a)*hNr+(t+a)*TP+e*TP+o)}IP.exports=wNr});var PP=s((h0e,LP)=>{"use strict";var ENr=_P();LP.exports=ENr});var FP=s((y0e,RP)=>{"use strict";var NNr=E(),ANr=Rr(),ONr=W(),SNr=Q(),TNr=Xi(),INr=PP(),_Nr=oo(),LNr=fo(),PNr=L();function RNr(r){var e,t;return NNr(r)||ANr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=INr(r),t===LNr)?r:(e===-1?t=SNr(t):t=TNr(t),t>_Nr?PNr:e*ONr(2,t))}RP.exports=RNr});var BP=s((q0e,MP)=>{"use strict";var FNr=FP();MP.exports=FNr});var q1=s((b0e,kP)=>{"use strict";var MNr=.9189385332046728;kP.exports=MNr});var jP=s((w0e,BNr)=>{BNr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var CP=s((E0e,kNr)=>{kNr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var GP=s((N0e,jNr)=>{jNr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var UP=s((A0e,VP)=>{"use strict";function CNr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}VP.exports=CNr});var WP=s((O0e,HP)=>{"use strict";function GNr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}HP.exports=GNr});var zP=s((S0e,DP)=>{"use strict";function VNr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}DP.exports=VNr});var JP=s((T0e,XP)=>{"use strict";function UNr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}XP.exports=UNr});var YP=s((I0e,xP)=>{"use strict";function HNr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}xP.exports=HNr});var $P=s((_0e,ZP)=>{"use strict";function WNr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}ZP.exports=WNr});var tR=s((L0e,eR)=>{"use strict";var DNr=E(),zNr=Ir(),XNr=Y(),Qa=nr(),JNr=Q(),xNr=ri(),YNr=rn(),QP=Ki(),KP=W(),ZNr=P(),$Nr=L(),QNr=U(),rR=We(),KNr=ko(),rAr=q1(),eAr=jP(),tAr=CP(),iAr=GP(),nAr=UP(),aAr=WP(),sAr=zP(),uAr=JP(),oAr=YP(),fAr=$P(),vAr=129,cAr=170,lAr=709,pAr=1.2433929443359375,gAr=.6986598968505859;function b1(r){var e,t,i,n,a,u;if(DNr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(zNr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(u=(i+1)/2|0,u<=vAr)return-iAr[u]/(i+1)}else return(n&1)===0?tAr[n/2]:eAr[(n-3)/2];return XNr(r)<KNr?-.5-rAr*r:(t=1-r,r<0?JNr(r/2)===r/2?0:(e=r,r=t,t=e,r>cAr?(e=QP(.5*t)*2*b1(r),a=YNr(r),a-=r*ZNr(rR),a>lAr?e<0?QNr:$Nr:e*Qa(a)):QP(.5*t)*2*KP(rR,-r)*xNr(r)*b1(r)):r<1?(e=nAr(t),e-=pAr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+aAr(t)):r<=4?(e=gAr+1/-t,e+sAr(r-2)):r<=7?(e=uAr(r-4),1+Qa(e)):r<15?(e=oAr(r-7),1+Qa(e)):r<36?(e=fAr(r-15),1+Qa(e)):1+KP(2,-r))}eR.exports=b1});var nR=s((P0e,iR)=>{"use strict";var mAr=tR();iR.exports=mAr});var sR=s((R0e,aR)=>{"use strict";var H={};H.abs=Y();H.abs2=Za();H.acos=bn();H.acosh=FI();H.acot=jI();H.acovercos=UI();H.acoversin=zI();H.acsc=YI();H.acsch=n_();H.ahavercos=o_();H.ahaversin=l_();H.asin=jt();H.asinh=u1();H.atan=Ja();H.atanh=h_();H.avercos=w_();H.aversin=O_();H.besselj0=v1();H.besselj1=c1();H.bessely0=bL();H.bessely1=jL();H.binet=xL();H.cbrt=tP();H.ceil=Xi();H.ceil10=qP();H.ceil2=BP();H.cos=St();H.sin=Tt();H.sqrt=C();H.zeta=nR();aR.exports=H});var oR=s((F0e,uR)=>{"use strict";function dAr(r,e){return r+e}uR.exports=dAr});var vR=s((M0e,fR)=>{"use strict";var hAr=oR();fR.exports=hAr});var lR=s((B0e,cR)=>{"use strict";function yAr(r,e){return r*e}cR.exports=yAr});var gR=s((k0e,pR)=>{"use strict";var qAr=lR();pR.exports=qAr});var dR=s((j0e,mR)=>{"use strict";function bAr(r,e){return r-e}mR.exports=bAr});var yR=s((C0e,hR)=>{"use strict";var wAr=dR();hR.exports=wAr});var bR=s((G0e,qR)=>{"use strict";var Ka={};Ka.add=vR();Ka.mul=gR();Ka.sub=yR();qR.exports=Ka});var ER=s((V0e,wR)=>{"use strict";var EAr=Nt(),NAr=ir();function AAr(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(NAr(r)==="[object Error]")return!0;r=EAr(r)}return!1}wR.exports=AAr});var AR=s((U0e,NR)=>{"use strict";var OAr=ER();NR.exports=OAr});var w1=s((H0e,OR)=>{"use strict";function SAr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}OR.exports=SAr});var TR=s((W0e,SR)=>{"use strict";var TAr=w1(),IAr=TAr();SR.exports=IAr});var LR=s((D0e,_R)=>{"use strict";var _Ar=w(),IR=w1(),LAr=TR();_Ar(IR,"REGEXP",LAr);_R.exports=IR});var RR=s((z0e,PR)=>{"use strict";var PAr=K().isPrimitive,RAr=LR(),FAr=q();function MAr(r){if(!PAr(r))throw new TypeError(FAr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=RAr().exec(r),r?new RegExp(r[1],r[2]):null}PR.exports=MAr});var MR=s((X0e,FR)=>{"use strict";var BAr=RR();FR.exports=BAr});var kR=s((J0e,BR)=>{"use strict";var kAr=typeof Object.getOwnPropertyNames<"u";BR.exports=kAr});var GR=s((x0e,CR)=>{"use strict";var jR=xt(),jAr=jR.getOwnPropertyNames;function CAr(r){return jAr(jR(r))}CR.exports=CAr});var UR=s((Y0e,VR)=>{"use strict";var GAr=xt(),VAr=Jt();function UAr(r){return VAr(GAr(r))}VR.exports=UAr});var WR=s((Z0e,HR)=>{"use strict";var HAr=kR(),WAr=GR(),DAr=UR(),E1;HAr?E1=WAr:E1=DAr;HR.exports=E1});var zR=s(($0e,DR)=>{"use strict";var zAr=typeof Object.getOwnPropertyDescriptor<"u";DR.exports=zAr});var JR=s((Q0e,XR)=>{"use strict";var XAr=Object.getOwnPropertyDescriptor;function JAr(r,e){var t;return r==null?null:(t=XAr(r,e),t===void 0?null:t)}XR.exports=JAr});var YR=s((K0e,xR)=>{"use strict";var xAr=O();function YAr(r,e){return xAr(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}xR.exports=YAr});var $R=s((rse,ZR)=>{"use strict";var ZAr=zR(),$Ar=JR(),QAr=YR(),N1;ZAr?N1=$Ar:N1=QAr;ZR.exports=N1});var KR=s((ese,QR)=>{"use strict";var KAr=typeof Buffer=="function"?Buffer:null;QR.exports=KAr});var eF=s((tse,rF)=>{"use strict";var rOr=Et(),r0=KR();function eOr(){var r,e;if(typeof r0!="function")return!1;try{typeof r0.from=="function"?e=r0.from([1,2,3,4]):e=new r0([1,2,3,4]),r=rOr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}rF.exports=eOr});var iF=s((ise,tF)=>{"use strict";var tOr=eF();tF.exports=tOr});var sF=s(e0=>{"use strict";e0.byteLength=nOr;e0.toByteArray=sOr;e0.fromByteArray=fOr;var Yr=[],Br=[],iOr=typeof Uint8Array<"u"?Uint8Array:Array,A1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Gt=0,nF=A1.length;Gt<nF;++Gt)Yr[Gt]=A1[Gt],Br[A1.charCodeAt(Gt)]=Gt;var Gt,nF;Br["-".charCodeAt(0)]=62;Br["_".charCodeAt(0)]=63;function aF(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function nOr(r){var e=aF(r),t=e[0],i=e[1];return(t+i)*3/4-i}function aOr(r,e,t){return(e+t)*3/4-t}function sOr(r){var e,t=aF(r),i=t[0],n=t[1],a=new iOr(aOr(r,i,n)),u=0,o=n>0?i-4:i,v;for(v=0;v<o;v+=4)e=Br[r.charCodeAt(v)]<<18|Br[r.charCodeAt(v+1)]<<12|Br[r.charCodeAt(v+2)]<<6|Br[r.charCodeAt(v+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=e&255;return n===2&&(e=Br[r.charCodeAt(v)]<<2|Br[r.charCodeAt(v+1)]>>4,a[u++]=e&255),n===1&&(e=Br[r.charCodeAt(v)]<<10|Br[r.charCodeAt(v+1)]<<4|Br[r.charCodeAt(v+2)]>>2,a[u++]=e>>8&255,a[u++]=e&255),a}function uOr(r){return Yr[r>>18&63]+Yr[r>>12&63]+Yr[r>>6&63]+Yr[r&63]}function oOr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(uOr(i));return n.join("")}function fOr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,u=0,o=t-i;u<o;u+=a)n.push(oOr(r,u,u+a>o?o:u+a));return i===1?(e=r[t-1],n.push(Yr[e>>2]+Yr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(Yr[e>>10]+Yr[e>>4&63]+Yr[e<<2&63]+"=")),n.join("")}});var uF=s(O1=>{O1.read=function(r,e,t,i,n){var a,u,o=n*8-i-1,v=(1<<o)-1,f=v>>1,c=-7,l=t?n-1:0,p=t?-1:1,m=r[e+l];for(l+=p,a=m&(1<<-c)-1,m>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(u=a&(1<<-c)-1,a>>=-c,c+=i;c>0;u=u*256+r[e+l],l+=p,c-=8);if(a===0)a=1-f;else{if(a===v)return u?NaN:(m?-1:1)*(1/0);u=u+Math.pow(2,i),a=a-f}return(m?-1:1)*u*Math.pow(2,a-i)};O1.write=function(r,e,t,i,n,a){var u,o,v,f=a*8-n-1,c=(1<<f)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:a-1,h=i?1:-1,d=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,u=c):(u=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-u))<1&&(u--,v*=2),u+l>=1?e+=p/v:e+=p*Math.pow(2,1-l),e*v>=2&&(u++,v/=2),u+l>=c?(o=0,u=c):u+l>=1?(o=(e*v-1)*Math.pow(2,n),u=u+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),u=0));n>=8;r[t+m]=o&255,m+=h,o/=256,n-=8);for(u=u<<n|o,f+=n;f>0;r[t+m]=u&255,m+=h,u/=256,f-=8);r[t+m-h]|=d*128}});var AF=s(yi=>{"use strict";var S1=sF(),di=uF(),oF=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;yi.Buffer=b;yi.SlowBuffer=mOr;yi.INSPECT_MAX_BYTES=50;var t0=2147483647;yi.kMaxLength=t0;b.TYPED_ARRAY_SUPPORT=vOr();!b.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function vOr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(b.prototype,"parent",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.buffer}});Object.defineProperty(b.prototype,"offset",{enumerable:!0,get:function(){if(!!b.isBuffer(this))return this.byteOffset}});function ue(r){if(r>t0)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,b.prototype),e}function b(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return L1(r)}return lF(r,e,t)}b.poolSize=8192;function lF(r,e,t){if(typeof r=="string")return lOr(r,e);if(ArrayBuffer.isView(r))return pOr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Zr(r,ArrayBuffer)||r&&Zr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Zr(r,SharedArrayBuffer)||r&&Zr(r.buffer,SharedArrayBuffer)))return I1(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return b.from(i,e,t);let n=gOr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return b.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}b.from=function(r,e,t){return lF(r,e,t)};Object.setPrototypeOf(b.prototype,Uint8Array.prototype);Object.setPrototypeOf(b,Uint8Array);function pF(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function cOr(r,e,t){return pF(r),r<=0?ue(r):e!==void 0?typeof t=="string"?ue(r).fill(e,t):ue(r).fill(e):ue(r)}b.alloc=function(r,e,t){return cOr(r,e,t)};function L1(r){return pF(r),ue(r<0?0:P1(r)|0)}b.allocUnsafe=function(r){return L1(r)};b.allocUnsafeSlow=function(r){return L1(r)};function lOr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!b.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=gF(r,e)|0,i=ue(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function T1(r){let e=r.length<0?0:P1(r.length)|0,t=ue(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function pOr(r){if(Zr(r,Uint8Array)){let e=new Uint8Array(r);return I1(e.buffer,e.byteOffset,e.byteLength)}return T1(r)}function I1(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,b.prototype),i}function gOr(r){if(b.isBuffer(r)){let e=P1(r.length)|0,t=ue(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||F1(r.length)?ue(0):T1(r);if(r.type==="Buffer"&&Array.isArray(r.data))return T1(r.data)}function P1(r){if(r>=t0)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+t0.toString(16)+" bytes");return r|0}function mOr(r){return+r!=r&&(r=0),b.alloc(+r)}b.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==b.prototype};b.compare=function(e,t){if(Zr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),Zr(t,Uint8Array)&&(t=b.from(t,t.offset,t.byteLength)),!b.isBuffer(e)||!b.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,u=Math.min(i,n);a<u;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};b.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};b.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return b.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=b.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let u=e[i];if(Zr(u,Uint8Array))a+u.length>n.length?(b.isBuffer(u)||(u=b.from(u)),u.copy(n,a)):Uint8Array.prototype.set.call(n,u,a);else if(b.isBuffer(u))u.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=u.length}return n};function gF(r,e){if(b.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Zr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return _1(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return NF(r).length;default:if(n)return i?-1:_1(r).length;e=(""+e).toLowerCase(),n=!0}}b.byteLength=gF;function dOr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return SOr(this,e,t);case"utf8":case"utf-8":return dF(this,e,t);case"ascii":return AOr(this,e,t);case"latin1":case"binary":return OOr(this,e,t);case"base64":return EOr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return TOr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}b.prototype._isBuffer=!0;function Vt(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}b.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Vt(this,t,t+1);return this};b.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Vt(this,t,t+3),Vt(this,t+1,t+2);return this};b.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Vt(this,t,t+7),Vt(this,t+1,t+6),Vt(this,t+2,t+5),Vt(this,t+3,t+4);return this};b.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?dF(this,0,e):dOr.apply(this,arguments)};b.prototype.toLocaleString=b.prototype.toString;b.prototype.equals=function(e){if(!b.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:b.compare(this,e)===0};b.prototype.inspect=function(){let e="",t=yi.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};oF&&(b.prototype[oF]=b.prototype.inspect);b.prototype.compare=function(e,t,i,n,a){if(Zr(e,Uint8Array)&&(e=b.from(e,e.offset,e.byteLength)),!b.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let u=a-n,o=i-t,v=Math.min(u,o),f=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<v;++l)if(f[l]!==c[l]){u=f[l],o=c[l];break}return u<o?-1:o<u?1:0};function mF(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,F1(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=b.from(e,i)),b.isBuffer(e))return e.length===0?-1:fF(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):fF(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function fF(r,e,t,i,n){let a=1,u=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,u/=2,o/=2,t/=2}function v(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let f;if(n){let c=-1;for(f=t;f<u;f++)if(v(r,f)===v(e,c===-1?0:f-c)){if(c===-1&&(c=f),f-c+1===o)return c*a}else c!==-1&&(f-=f-c),c=-1}else for(t+o>u&&(t=u-o),f=t;f>=0;f--){let c=!0;for(let l=0;l<o;l++)if(v(r,f+l)!==v(e,l)){c=!1;break}if(c)return f}return-1}b.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};b.prototype.indexOf=function(e,t,i){return mF(this,e,t,i,!0)};b.prototype.lastIndexOf=function(e,t,i){return mF(this,e,t,i,!1)};function hOr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let u;for(u=0;u<i;++u){let o=parseInt(e.substr(u*2,2),16);if(F1(o))return u;r[t+u]=o}return u}function yOr(r,e,t,i){return i0(_1(e,r.length-t),r,t,i)}function qOr(r,e,t,i){return i0(POr(e),r,t,i)}function bOr(r,e,t,i){return i0(NF(e),r,t,i)}function wOr(r,e,t,i){return i0(ROr(e,r.length-t),r,t,i)}b.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let u=!1;for(;;)switch(n){case"hex":return hOr(this,e,t,i);case"utf8":case"utf-8":return yOr(this,e,t,i);case"ascii":case"latin1":case"binary":return qOr(this,e,t,i);case"base64":return bOr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return wOr(this,e,t,i);default:if(u)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),u=!0}};b.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function EOr(r,e,t){return e===0&&t===r.length?S1.fromByteArray(r):S1.fromByteArray(r.slice(e,t))}function dF(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],u=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let v,f,c,l;switch(o){case 1:a<128&&(u=a);break;case 2:v=r[n+1],(v&192)===128&&(l=(a&31)<<6|v&63,l>127&&(u=l));break;case 3:v=r[n+1],f=r[n+2],(v&192)===128&&(f&192)===128&&(l=(a&15)<<12|(v&63)<<6|f&63,l>2047&&(l<55296||l>57343)&&(u=l));break;case 4:v=r[n+1],f=r[n+2],c=r[n+3],(v&192)===128&&(f&192)===128&&(c&192)===128&&(l=(a&15)<<18|(v&63)<<12|(f&63)<<6|c&63,l>65535&&l<1114112&&(u=l))}}u===null?(u=65533,o=1):u>65535&&(u-=65536,i.push(u>>>10&1023|55296),u=56320|u&1023),i.push(u),n+=o}return NOr(i)}var vF=4096;function NOr(r){let e=r.length;if(e<=vF)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=vF));return t}function AOr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function OOr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function SOr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=FOr[r[a]];return n}function TOr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}b.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,b.prototype),n};function ur(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}b.prototype.readUintLE=b.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return n};b.prototype.readUintBE=b.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};b.prototype.readUint8=b.prototype.readUInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]};b.prototype.readUint16LE=b.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]|this[e+1]<<8};b.prototype.readUint16BE=b.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]<<8|this[e+1]};b.prototype.readUint32LE=b.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};b.prototype.readUint32BE=b.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};b.prototype.readBigUInt64LE=Qe(function(e){e=e>>>0,hi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Sn(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});b.prototype.readBigUInt64BE=Qe(function(e){e=e>>>0,hi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Sn(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});b.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,u=0;for(;++u<t&&(a*=256);)n+=this[e+u]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};b.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=t,a=1,u=this[e+--n];for(;n>0&&(a*=256);)u+=this[e+--n]*a;return a*=128,u>=a&&(u-=Math.pow(2,8*t)),u};b.prototype.readInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};b.prototype.readInt16LE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};b.prototype.readInt16BE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};b.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};b.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};b.prototype.readBigInt64LE=Qe(function(e){e=e>>>0,hi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Sn(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});b.prototype.readBigInt64BE=Qe(function(e){e=e>>>0,hi(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&Sn(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});b.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),di.read(this,e,!0,23,4)};b.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),di.read(this,e,!1,23,4)};b.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),di.read(this,e,!0,52,8)};b.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),di.read(this,e,!1,52,8)};function qr(r,e,t,i,n,a){if(!b.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}b.prototype.writeUintLE=b.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let a=1,u=0;for(this[t]=e&255;++u<i&&(a*=256);)this[t+u]=e/a&255;return t+i};b.prototype.writeUintBE=b.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;qr(this,e,t,i,o,0)}let a=i-1,u=1;for(this[t+a]=e&255;--a>=0&&(u*=256);)this[t+a]=e/u&255;return t+i};b.prototype.writeUint8=b.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,255,0),this[t]=e&255,t+1};b.prototype.writeUint16LE=b.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeUint16BE=b.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeUint32LE=b.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};b.prototype.writeUint32BE=b.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function hF(r,e,t,i,n){EF(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,u=u>>8,r[t++]=u,t}function yF(r,e,t,i,n){EF(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let u=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=u,u=u>>8,r[t+2]=u,u=u>>8,r[t+1]=u,u=u>>8,r[t]=u,t+8}b.prototype.writeBigUInt64LE=Qe(function(e,t=0){return hF(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeBigUInt64BE=Qe(function(e,t=0){return yF(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});b.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);qr(this,e,t,i,v-1,-v)}let a=0,u=1,o=0;for(this[t]=e&255;++a<i&&(u*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);qr(this,e,t,i,v-1,-v)}let a=i-1,u=1,o=0;for(this[t+a]=e&255;--a>=0&&(u*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/u>>0)-o&255;return t+i};b.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};b.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};b.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};b.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};b.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||qr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};b.prototype.writeBigInt64LE=Qe(function(e,t=0){return hF(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});b.prototype.writeBigInt64BE=Qe(function(e,t=0){return yF(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function qF(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function bF(r,e,t,i,n){return e=+e,t=t>>>0,n||qF(r,e,t,4,34028234663852886e22,-34028234663852886e22),di.write(r,e,t,i,23,4),t+4}b.prototype.writeFloatLE=function(e,t,i){return bF(this,e,t,!0,i)};b.prototype.writeFloatBE=function(e,t,i){return bF(this,e,t,!1,i)};function wF(r,e,t,i,n){return e=+e,t=t>>>0,n||qF(r,e,t,8,17976931348623157e292,-17976931348623157e292),di.write(r,e,t,i,52,8),t+8}b.prototype.writeDoubleLE=function(e,t,i){return wF(this,e,t,!0,i)};b.prototype.writeDoubleBE=function(e,t,i){return wF(this,e,t,!1,i)};b.prototype.copy=function(e,t,i,n){if(!b.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};b.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!b.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let u=e.charCodeAt(0);(n==="utf8"&&u<128||n==="latin1")&&(e=u)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let u=b.isBuffer(e)?e:b.from(e,n),o=u.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=u[a%o]}return this};var mi={};function R1(r,e,t){mi[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}R1("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);R1("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);R1("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=cF(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=cF(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function cF(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function IOr(r,e,t){hi(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&Sn(e,r.length-(t+1))}function EF(r,e,t,i,n,a){if(r>t||r<e){let u=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${u} and < 2${u} ** ${(a+1)*8}${u}`:o=`>= -(2${u} ** ${(a+1)*8-1}${u}) and < 2 ** ${(a+1)*8-1}${u}`:o=`>= ${e}${u} and <= ${t}${u}`,new mi.ERR_OUT_OF_RANGE("value",o,r)}IOr(i,n,a)}function hi(r,e){if(typeof r!="number")throw new mi.ERR_INVALID_ARG_TYPE(e,"number",r)}function Sn(r,e,t){throw Math.floor(r)!==r?(hi(r,t),new mi.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new mi.ERR_BUFFER_OUT_OF_BOUNDS:new mi.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var _Or=/[^+/0-9A-Za-z-_]/g;function LOr(r){if(r=r.split("=")[0],r=r.trim().replace(_Or,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function _1(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let u=0;u<i;++u){if(t=r.charCodeAt(u),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(u+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function POr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function ROr(r,e){let t,i,n,a=[];for(let u=0;u<r.length&&!((e-=2)<0);++u)t=r.charCodeAt(u),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function NF(r){return S1.toByteArray(LOr(r))}function i0(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function Zr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function F1(r){return r!==r}var FOr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function Qe(r){return typeof BigInt>"u"?MOr:r}function MOr(){throw new Error("BigInt not supported")}});var SF=s((ose,OF)=>{"use strict";var BOr=AF().Buffer;OF.exports=BOr});var IF=s((fse,TF)=>{"use strict";function kOr(){throw new Error("not implemented")}TF.exports=kOr});var n0=s((vse,_F)=>{"use strict";var jOr=iF(),COr=SF(),GOr=IF(),M1;jOr()?M1=COr:M1=GOr;_F.exports=M1});var PF=s((cse,LF)=>{"use strict";var VOr=_(),UOr=n0(),HOr=VOr(UOr.from);LF.exports=HOr});var FF=s((lse,RF)=>{"use strict";var WOr=Et(),DOr=q(),zOr=n0();function XOr(r){if(!WOr(r))throw new TypeError(DOr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return zOr.from(r)}RF.exports=XOr});var BF=s((pse,MF)=>{"use strict";var JOr=Et(),xOr=q(),YOr=n0();function ZOr(r){if(!JOr(r))throw new TypeError(xOr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new YOr(r)}MF.exports=ZOr});var jF=s((gse,kF)=>{"use strict";var $Or=PF(),QOr=FF(),KOr=BF(),B1;$Or?B1=QOr:B1=KOr;kF.exports=B1});var VF=s((mse,GF)=>{"use strict";var rSr=fn(),eSr=Yt(),tSr=on(),iSr=un(),nSr=Zt(),aSr=Pt(),sSr=lr(),uSr=se(),oSr=dr(),CF;function fSr(r){return new rSr(r)}function vSr(r){return new eSr(r)}function cSr(r){return new tSr(r)}function lSr(r){return new iSr(r)}function pSr(r){return new nSr(r)}function gSr(r){return new aSr(r)}function mSr(r){return new sSr(r)}function dSr(r){return new uSr(r)}function hSr(r){return new oSr(r)}function ySr(){var r={int8array:fSr,uint8array:vSr,uint8clampedarray:cSr,int16array:lSr,uint16array:pSr,int32array:gSr,uint32array:mSr,float32array:dSr,float64array:hSr};return r}CF=ySr();GF.exports=CF});var zF=s((dse,DF)=>{"use strict";var a0=O(),k1=mr(),UF=Et(),qSr=AR(),HF=Jn(),bSr=MR(),wSr=Xn(),WF=Jt(),ESr=WR(),Tn=$R(),NSr=Nt(),In=Ce(),ASr=jF(),OSr=VF();function SSr(r){var e,t,i,n,a,u,o,v;for(e=[],n=[],o=Object.create(NSr(r)),e.push(r),n.push(o),t=ESr(r),v=0;v<t.length;v++)i=t[v],a=Tn(r,i),a0(a,"value")&&(u=k1(r[i])?[]:{},a.value=Ut(r[i],u,e,n,-1)),In(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function TSr(r){var e=[],t=[],i,n,a,u,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=WF(r),v=0;v<i.length;v++)u=i[v],n=Tn(r,u),a0(n,"value")&&(a=k1(r[u])?[]:{},n.value=Ut(r[u],a,e,t,-1)),In(o,u,n);return o}function Ut(r,e,t,i,n){var a,u,o,v,f,c,l,p,m,h;if(n-=1,typeof r!="object"||r===null)return r;if(UF(r))return ASr(r);if(qSr(r))return TSr(r);if(o=HF(r),o==="date")return new Date(+r);if(o==="regexp")return bSr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=OSr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?SSr(r):{};if(u=WF(r),n>0)for(a=o,h=0;h<u.length;h++){if(c=u[h],p=r[c],o=HF(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||UF(p)){a==="object"?(v=Tn(r,c),a0(v,"value")&&(v.value=Ut(p)),In(e,c,v)):e[c]=Ut(p);continue}if(m=wSr(t,p),m!==-1){e[c]=i[m];continue}l=k1(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=Ut(p,l,t,i,n):(v=Tn(r,c),a0(v,"value")&&(v.value=Ut(p,l,t,i,n)),In(e,c,v))}else if(o==="array")for(h=0;h<u.length;h++)c=u[h],e[c]=r[c];else for(h=0;h<u.length;h++)c=u[h],v=Tn(r,c),In(e,c,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}DF.exports=Ut});var JF=s((hse,XF)=>{"use strict";var ISr=mr(),_Sr=Je().isPrimitive,LSr=q(),PSr=L(),RSr=zF();function FSr(r,e){var t;if(arguments.length>1){if(!_Sr(e))throw new TypeError(LSr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=PSr;return t=ISr(r)?new Array(r.length):{},RSr(r,t,[r],[t],e)}XF.exports=FSr});var _n=s((yse,xF)=>{"use strict";var MSr=JF();xF.exports=MSr});var YF=s((qse,BSr)=>{BSr.exports=[["abandon",-2],["abandoned",-2],["abandons",-2],["abducted",-2],["abduction",-2],["abductions",-2],["abhor",-3],["abhorred",-3],["abhorrent",-3],["abhors",-3],["abilities",2],["ability",2],["aboard",1],["absentee",-1],["absentees",-1],["absolve",2],["absolved",2],["absolves",2],["absolving",2],["absorbed",1],["abuse",-3],["abused",-3],["abuses",-3],["abusive",-3],["accept",1],["accepted",1],["accepting",1],["accepts",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["accuses",-2],["accusing",-2],["ache",-2],["achievable",1],["aching",-2],["acquit",2],["acquits",2],["acquitted",2],["acquitting",2],["acrimonious",-3],["active",1],["adequate",1],["admire",3],["admired",3],["admires",3],["admiring",3],["admit",-1],["admits",-1],["admitted",-1],["admonish",-2],["admonished",-2],["adopt",1],["adopts",1],["adorable",3],["adore",3],["adored",3],["adores",3],["advanced",1],["advantage",2],["advantages",2],["adventure",2],["adventures",2],["adventurous",2],["affected",-1],["affection",3],["affectionate",3],["afflicted",-1],["affronted",-1],["afraid",-2],["aggravate",-2],["aggravated",-2],["aggravates",-2],["aggravating",-2],["aggression",-2],["aggressions",-2],["aggressive",-2],["aghast",-2],["agog",2],["agonise",-3],["agonised",-3],["agonises",-3],["agonising",-3],["agonize",-3],["agonized",-3],["agonizes",-3],["agonizing",-3],["agree",1],["agreeable",2],["agreed",1],["agreement",1],["agrees",1],["alarm",-2],["alarmed",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amaze",2],["amazed",2],["amazes",2],["amazing",4],["ambitious",2],["ambivalent",-1],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["angry",-3],["anguish",-3],["anguished",-3],["animosity",-2],["annoy",-2],["annoyance",-2],["annoyed",-2],["annoying",-2],["annoys",-2],["antagonistic",-2],["anti",-1],["anticipation",1],["anxiety",-2],["anxious",-2],["apathetic",-3],["apathy",-3],["apeshit",-3],["apocalyptic",-2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apologize",-1],["apologized",-1],["apologizes",-1],["apologizing",-1],["apology",-1],["appalled",-2],["appalling",-2],["appease",2],["appeased",2],["appeases",2],["appeasing",2],["applaud",2],["applauded",2],["applauding",2],["applauds",2],["applause",2],["appreciate",2],["appreciated",2],["appreciates",2],["appreciating",2],["appreciation",2],["apprehensive",-2],["approval",2],["approved",2],["approves",2],["ardent",1],["arrest",-2],["arrested",-3],["arrests",-2],["arrogant",-2],["ashame",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["assfucking",-4],["asshole",-4],["astonished",2],["astound",3],["astounded",3],["astounding",3],["astoundingly",3],["astounds",3],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracted",1],["attracting",2],["attraction",2],["attractions",2],["attracts",1],["audacious",3],["authority",1],["avert",-1],["averted",-1],["averts",-1],["avid",2],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["awkward",-2],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badass",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beaten",-2],["beatific",3],["beating",-1],["beauties",3],["beautiful",3],["beautifully",3],["beautify",3],["belittle",-2],["belittled",-2],["beloved",3],["benefit",2],["benefits",2],["benefitted",2],["benefitting",2],["bereave",-2],["bereaved",-2],["bereaves",-2],["bereaving",-2],["best",3],["betray",-3],["betrayal",-3],["betrayed",-3],["betraying",-3],["betrays",-3],["better",2],["bias",-1],["biased",-2],["big",1],["bitch",-5],["bitches",-5],["bitter",-2],["bitterly",-2],["bizarre",-2],["blah",-2],["blame",-2],["blamed",-2],["blames",-2],["blaming",-2],["bless",2],["blesses",2],["blessing",3],["blind",-1],["bliss",3],["blissful",3],["blithe",2],["block",-1],["blockbuster",3],["blocked",-1],["blocking",-1],["blocks",-1],["bloody",-3],["blurry",-2],["boastful",-2],["bold",2],["boldly",2],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bore",-2],["bored",-2],["boring",-3],["bother",-2],["bothered",-2],["bothers",-2],["bothersome",-2],["boycott",-2],["boycotted",-2],["boycotting",-2],["boycotts",-2],["brainwashing",-3],["brave",2],["breakthrough",3],["breathtaking",5],["bribe",-3],["bright",1],["brightest",2],["brightness",1],["brilliant",4],["brisk",2],["broke",-1],["broken",-1],["brooding",-2],["bullied",-2],["bullshit",-4],["bully",-2],["bullying",-2],["bummer",-2],["buoyant",2],["burden",-2],["burdened",-2],["burdening",-2],["burdens",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["can't stand",-3],["cancel",-1],["cancelled",-1],["cancelling",-1],["cancels",-1],["cancer",-1],["capable",1],["captivated",3],["care",2],["carefree",1],["careful",2],["carefully",2],["careless",-2],["cares",2],["cashing in",-2],["casualty",-2],["catastrophe",-3],["catastrophic",-4],["cautious",-1],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["chagrin",-2],["chagrined",-2],["challenge",-1],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["charges",-2],["charm",3],["charming",3],["charmless",-3],["chastise",-3],["chastised",-3],["chastises",-3],["chastising",-3],["cheat",-3],["cheated",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheer",2],["cheered",2],["cheerful",2],["cheering",2],["cheerless",-2],["cheers",2],["cheery",3],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["chic",2],["childish",-2],["chilling",-1],["choke",-2],["choked",-2],["chokes",-2],["choking",-2],["clarifies",2],["clarity",2],["clash",-2],["classy",3],["clean",2],["cleaner",2],["clear",1],["cleared",1],["clearly",1],["clears",1],["clever",2],["clouded",-1],["clueless",-2],["cock",-5],["cocksucker",-5],["cocksuckers",-5],["cocky",-2],["coerced",-2],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["comedy",1],["comfort",2],["comfortable",2],["comforting",2],["comforts",2],["commend",2],["commended",2],["commit",1],["commitment",2],["commits",1],["committed",1],["committing",1],["compassionate",2],["compelled",1],["competent",2],["competitive",2],["complacent",-2],["complain",-2],["complained",-2],["complains",-2],["comprehensive",2],["conciliate",2],["conciliated",2],["conciliates",2],["conciliating",2],["condemn",-2],["condemnation",-2],["condemned",-2],["condemns",-2],["confidence",2],["confident",2],["conflict",-2],["conflicting",-2],["conflictive",-2],["conflicts",-2],["confuse",-2],["confused",-2],["confusing",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["consent",2],["consents",2],["consolable",2],["conspiracy",-3],["constrained",-2],["contagion",-2],["contagions",-2],["contagious",-1],["contempt",-2],["contemptuous",-2],["contemptuously",-2],["contend",-1],["contender",-1],["contending",-1],["contentious",-2],["contestable",-2],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["convivial",2],["cool",1],["cool stuff",3],["cornered",-2],["corpse",-1],["costly",-2],["courage",2],["courageous",2],["courteous",2],["courtesy",2],["cover-up",-3],["coward",-2],["cowardly",-2],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazier",-2],["craziest",-2],["crazy",-2],["creative",2],["crestfallen",-2],["cried",-2],["cries",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["criticism",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["critics",-2],["cruel",-3],["cruelty",-3],["crush",-1],["crushed",-2],["crushes",-1],["crushing",-1],["cry",-1],["crying",-2],["cunt",-5],["curious",1],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynic",-2],["cynical",-2],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["damnit",-4],["danger",-2],["daredevil",2],["daring",2],["darkest",-2],["darkness",-1],["dauntless",2],["dead",-3],["deadlock",-2],["deafening",-1],["dear",2],["dearly",3],["death",-2],["debonair",2],["debt",-2],["deceit",-3],["deceitful",-3],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["decisive",1],["dedicated",2],["defeated",-2],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defenseless",-2],["defer",-1],["deferring",-1],["defiant",-1],["deficit",-2],["degrade",-2],["degraded",-2],["degrades",-2],["dehumanize",-2],["dehumanized",-2],["dehumanizes",-2],["dehumanizing",-2],["deject",-2],["dejected",-2],["dejecting",-2],["dejects",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["delighting",3],["delights",3],["demand",-1],["demanded",-1],["demanding",-1],["demands",-1],["demonstration",-1],["demoralized",-2],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derailed",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["derision",-2],["desirable",2],["desire",1],["desired",2],["desirous",2],["despair",-3],["despairing",-3],["despairs",-3],["desperate",-3],["desperately",-3],["despondent",-3],["destroy",-3],["destroyed",-3],["destroying",-3],["destroys",-3],["destruction",-3],["destructive",-3],["detached",-1],["detain",-2],["detained",-2],["detention",-2],["determined",2],["devastate",-2],["devastated",-2],["devastating",-2],["devoted",3],["diamond",1],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["diffident",-2],["dilemma",-1],["dipshit",-3],["dire",-3],["direful",-3],["dirt",-2],["dirtier",-2],["dirtiest",-2],["dirty",-2],["disabling",-1],["disadvantage",-2],["disadvantaged",-2],["disappear",-1],["disappeared",-1],["disappears",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["disbelieve",-2],["discard",-1],["discarded",-1],["discarding",-1],["discards",-1],["disconsolate",-2],["disconsolation",-2],["discontented",-2],["discord",-2],["discounted",-1],["discouraged",-2],["discredited",-2],["disdain",-2],["disgrace",-2],["disgraced",-2],["disguise",-1],["disguised",-1],["disguises",-1],["disguising",-1],["disgust",-3],["disgusted",-3],["disgusting",-3],["disheartened",-2],["dishonest",-2],["disillusioned",-2],["disinclined",-2],["disjointed",-2],["dislike",-2],["dismal",-2],["dismayed",-2],["disorder",-2],["disorganized",-2],["disoriented",-2],["disparage",-2],["disparaged",-2],["disparages",-2],["disparaging",-2],["displeased",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disqualified",-2],["disquiet",-2],["disregard",-2],["disregarded",-2],["disregarding",-2],["disregards",-2],["disrespect",-2],["disrespected",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["dissatisfied",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["distract",-2],["distracted",-2],["distraction",-2],["distracts",-2],["distress",-2],["distressed",-2],["distresses",-2],["distressing",-2],["distrust",-3],["distrustful",-3],["disturb",-2],["disturbed",-2],["disturbing",-2],["disturbs",-2],["dithering",-2],["dizzy",-1],["dodging",-2],["dodgy",-2],["does not work",-3],["dolorous",-2],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubted",-1],["doubtful",-1],["doubting",-1],["doubts",-1],["douche",-3],["douchebag",-3],["downcast",-2],["downhearted",-2],["downside",-2],["drag",-1],["dragged",-1],["drags",-1],["drained",-2],["dread",-2],["dreaded",-2],["dreadful",-3],["dreading",-2],["dream",1],["dreams",1],["dreary",-2],["droopy",-2],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dull",-2],["dumb",-3],["dumbass",-3],["dump",-1],["dumped",-2],["dumps",-1],["dupe",-2],["duped",-2],["dysfunction",-2],["eager",2],["earnest",2],["ease",2],["easy",1],["ecstatic",4],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["elated",3],["elation",3],["elegant",2],["elegantly",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embarrassment",-2],["embittered",-2],["embrace",1],["emergency",-2],["empathetic",2],["emptiness",-1],["empty",-1],["enchanted",2],["encourage",2],["encouraged",2],["encouragement",2],["encourages",2],["endorse",2],["endorsed",2],["endorsement",2],["endorses",2],["enemies",-2],["enemy",-2],["energetic",2],["engage",1],["engages",1],["engrossed",1],["enjoy",2],["enjoying",2],["enjoys",2],["enlighten",2],["enlightened",2],["enlightening",2],["enlightens",2],["ennui",-2],["enrage",-2],["enraged",-2],["enrages",-2],["enraging",-2],["enrapture",3],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["enterprising",1],["entertaining",2],["enthral",3],["enthusiastic",3],["entitled",1],["entrusted",2],["envies",-1],["envious",-2],["envy",-1],["envying",-1],["erroneous",-2],["error",-2],["errors",-2],["escape",-1],["escapes",-1],["escaping",-1],["esteemed",2],["ethical",2],["euphoria",3],["euphoric",4],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["exasperated",2],["excellence",3],["excellent",3],["excite",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exempt",-1],["exhausted",-2],["exhilarated",3],["exhilarates",3],["exhilarating",3],["exonerate",2],["exonerated",2],["exonerates",2],["exonerating",2],["expand",1],["expands",1],["expel",-2],["expelled",-2],["expelling",-2],["expels",-2],["exploit",-2],["exploited",-2],["exploiting",-2],["exploits",-2],["exploration",1],["explorations",1],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["exuberant",4],["exultant",3],["exultantly",3],["fabulous",4],["fad",-2],["fag",-3],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["failing",-2],["fails",-2],["failure",-2],["failures",-2],["fainthearted",-2],["fair",2],["faith",1],["faithful",3],["fake",-3],["fakes",-3],["faking",-3],["fallen",-2],["falling",-1],["falsified",-3],["falsify",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascinate",3],["fascinated",3],["fascinates",3],["fascinating",3],["fascist",-2],["fascists",-2],["fatalities",-3],["fatality",-3],["fatigue",-2],["fatigued",-2],["fatigues",-2],["fatiguing",-2],["favor",2],["favored",2],["favorite",2],["favorited",2],["favorites",2],["favors",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fearsome",-2],["fed up",-3],["feeble",-2],["feeling",1],["felonies",-3],["felony",-3],["fervent",2],["fervid",2],["festive",2],["fiasco",-3],["fidgety",-2],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fit",1],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["flustered",-2],["focused",2],["fond",2],["fondness",2],["fool",-2],["foolish",-2],["fools",-2],["forced",-1],["foreclosure",-2],["foreclosures",-2],["forget",-1],["forgetful",-2],["forgive",1],["forgiving",1],["forgotten",-1],["fortunate",2],["frantic",-1],["fraud",-4],["frauds",-4],["fraudster",-4],["fraudsters",-4],["fraudulence",-4],["fraudulent",-4],["free",1],["freedom",2],["frenzy",-3],["fresh",1],["friendly",2],["fright",-2],["frightened",-2],["frightening",-3],["frikin",-2],["frisky",2],["frowning",-1],["frustrate",-2],["frustrated",-2],["frustrates",-2],["frustrating",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fucker",-4],["fuckers",-4],["fuckface",-4],["fuckhead",-4],["fucking",-4],["fucktard",-4],["fud",-3],["fuked",-4],["fuking",-4],["fulfill",2],["fulfilled",2],["fulfills",2],["fuming",-2],["fun",4],["funeral",-1],["funerals",-1],["funky",2],["funnier",4],["funny",4],["furious",-3],["futile",2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["gallant",3],["gallantly",3],["gallantry",3],["generous",2],["genial",3],["ghost",-1],["giddy",-2],["gift",2],["glad",3],["glamorous",3],["glamourous",3],["glee",3],["gleeful",3],["gloom",-1],["gloomy",-2],["glorious",2],["glory",2],["glum",-2],["god",1],["goddamn",-3],["godsend",4],["good",3],["goodness",3],["grace",1],["gracious",3],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["gratification",2],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["greedy",-2],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greeting",1],["greetings",2],["greets",1],["grey",-1],["grief",-2],["grieved",-2],["gross",-2],["growing",1],["growth",2],["guarantee",1],["guilt",-3],["guilty",-3],["gullibility",-2],["gullible",-2],["gun",-1],["ha",2],["hacked",-1],["haha",3],["hahaha",3],["hahahah",3],["hail",2],["hailed",2],["hapless",-2],["haplessness",-2],["happiness",3],["happy",3],["hard",-1],["hardier",2],["hardship",-2],["hardy",2],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["harried",-2],["harsh",-2],["harsher",-2],["harshest",-2],["hate",-3],["hated",-3],["haters",-3],["hates",-3],["hating",-3],["haunt",-1],["haunted",-2],["haunting",1],["haunts",-1],["havoc",-2],["healthy",2],["heartbreaking",-3],["heartbroken",-3],["heartfelt",3],["heaven",2],["heavenly",4],["heavyhearted",-2],["hell",-4],["help",2],["helpful",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hesitant",-2],["hesitate",-2],["hid",-1],["hide",-1],["hides",-1],["hiding",-1],["highlight",2],["hilarious",2],["hindrance",-2],["hoax",-2],["homesick",-2],["honest",2],["honor",2],["honored",2],["honoring",2],["honour",2],["honoured",2],["honouring",2],["hooligan",-2],["hooliganism",-2],["hooligans",-2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["horrendous",-3],["horrible",-3],["horrific",-3],["horrified",-3],["hostile",-2],["huckster",-2],["hug",2],["huge",1],["hugs",2],["humerous",3],["humiliated",-3],["humiliation",-3],["humor",2],["humorous",2],["humour",2],["humourous",2],["hunger",-2],["hurrah",5],["hurt",-2],["hurting",-2],["hurts",-2],["hypocritical",-2],["hysteria",-3],["hysterical",-3],["hysterics",-3],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignorant",-2],["ignore",-1],["ignored",-2],["ignores",-1],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imbecile",-3],["immobilized",-1],["immortal",2],["immune",1],["impatient",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["imprisoned",-2],["improve",2],["improved",2],["improvement",2],["improves",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incapable",-2],["incapacitated",-2],["incensed",-2],["incompetence",-2],["incompetent",-2],["inconsiderate",-2],["inconvenience",-2],["inconvenient",-2],["increase",1],["increased",1],["indecisive",-2],["indestructible",2],["indifference",-2],["indifferent",-2],["indignant",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infatuated",2],["infatuation",2],["infected",-2],["inferior",-2],["inflamed",-2],["influential",2],["infringement",-2],["infuriate",-2],["infuriated",-2],["infuriates",-2],["infuriating",-2],["inhibit",-1],["injured",-2],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["innovative",2],["inquisition",-2],["inquisitive",2],["insane",-2],["insanity",-2],["insecure",-2],["insensitive",-2],["insensitivity",-2],["insignificant",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspired",2],["inspires",2],["inspiring",3],["insult",-2],["insulted",-2],["insulting",-2],["insults",-2],["intact",2],["integrity",2],["intelligent",2],["intense",1],["interest",1],["interested",2],["interesting",2],["interests",1],["interrogated",-2],["interrupt",-2],["interrupted",-2],["interrupting",-2],["interruption",-2],["interrupts",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["intimidation",-2],["intricate",2],["intrigues",1],["invincible",2],["invite",1],["inviting",1],["invulnerable",2],["irate",-3],["ironic",-1],["irony",-1],["irrational",-1],["irresistible",2],["irresolute",-2],["irresponsible",2],["irreversible",-1],["irritate",-3],["irritated",-3],["irritating",-3],["isolated",-1],["itchy",-2],["jackass",-4],["jackasses",-4],["jailed",-2],["jaunty",2],["jealous",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["jewel",1],["jewels",1],["jocular",2],["join",1],["joke",2],["jokes",2],["jolly",2],["jovial",2],["joy",3],["joyful",3],["joyfully",3],["joyless",-2],["joyous",3],["jubilant",3],["jumpy",-1],["justice",2],["justifiably",2],["justified",2],["keen",1],["kill",-3],["killed",-3],["killing",-3],["kills",-3],["kind",2],["kinder",2],["kiss",2],["kudos",3],["lack",-2],["lackadaisical",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughed",1],["laughing",1],["laughs",1],["laughting",1],["launched",1],["lawl",3],["lawsuit",-2],["lawsuits",-2],["lazy",-1],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["lenient",1],["lethargic",-2],["lethargy",-2],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["lifesaver",4],["lighthearted",1],["like",2],["liked",2],["likes",2],["limitation",-1],["limited",-1],["limits",-1],["litigation",-1],["litigious",-2],["lively",2],["livid",-2],["lmao",4],["lmfao",4],["loathe",-3],["loathed",-3],["loathes",-3],["loathing",-3],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["lonesome",-2],["longing",-1],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["loser",-3],["losing",-3],["loss",-3],["lost",-3],["lovable",3],["love",3],["loved",3],["lovelies",3],["lovely",3],["loving",2],["lowest",-1],["loyal",3],["loyalty",3],["luck",3],["luckily",3],["lucky",3],["lugubrious",-2],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurking",-1],["lurks",-1],["mad",-3],["maddening",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["marvel",3],["marvelous",3],["marvels",3],["masterpiece",4],["masterpieces",4],["matter",1],["matters",1],["mature",2],["meaningful",2],["meaningless",-2],["medal",3],["mediocrity",-3],["meditative",1],["melancholy",-2],["menace",-2],["menaced",-2],["mercy",2],["merry",3],["mess",-2],["messed",-2],["messing up",-2],["methodical",2],["mindless",-2],["miracle",4],["mirth",3],["mirthful",3],["mirthfully",3],["misbehave",-2],["misbehaved",-2],["misbehaves",-2],["misbehaving",-2],["mischief",-1],["mischiefs",-1],["miserable",-3],["misery",-2],["misgiving",-2],["misinformation",-2],["misinformed",-2],["misinterpreted",-2],["misleading",-3],["misread",-1],["misreporting",-2],["misrepresentation",-2],["miss",-2],["missed",-2],["missing",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["misunderstand",-2],["misunderstanding",-2],["misunderstands",-2],["misunderstood",-2],["moan",-2],["moaned",-2],["moaning",-2],["moans",-2],["mock",-2],["mocked",-2],["mocking",-2],["mocks",-2],["mongering",-2],["monopolize",-2],["monopolized",-2],["monopolizes",-2],["monopolizing",-2],["moody",-1],["mope",-1],["moping",-1],["moron",-3],["motherfucker",-5],["motherfucking",-5],["motivate",1],["motivated",2],["motivating",2],["motivation",1],["mourn",-2],["mourned",-2],["mournful",-2],["mourning",-2],["mourns",-2],["mumpish",-2],["murder",-2],["murderer",-2],["murdering",-3],["murderous",-3],["murders",-2],["myth",-1],["n00b",-2],["naive",-2],["nasty",-3],["natural",1],["na\xEFve",-2],["needy",-2],["negative",-2],["negativity",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nervously",-2],["nice",3],["nifty",2],["niggas",-5],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["noisy",-1],["nonsense",-2],["noob",-2],["nosey",-2],["not good",-2],["not working",-3],["notorious",-2],["novel",2],["numb",-1],["nuts",-3],["obliterate",-2],["obliterated",-2],["obnoxious",-3],["obscene",-2],["obsessed",2],["obsolete",-2],["obstacle",-2],["obstacles",-2],["obstinate",-2],["odd",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["offline",-1],["oks",2],["ominous",3],["once-in-a-lifetime",3],["opportunities",2],["opportunity",2],["oppressed",-2],["oppressive",-2],["optimism",2],["optimistic",2],["optionless",-2],["outcry",-2],["outmaneuvered",-2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overjoyed",4],["overload",-1],["overlooked",-1],["overreact",-2],["overreacted",-2],["overreaction",-2],["overreacts",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overstatement",-2],["overstatements",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["pained",-2],["panic",-3],["panicked",-3],["panics",-3],["paradise",3],["paradox",-1],["pardon",2],["pardoned",2],["pardoning",2],["pardons",2],["parley",-1],["passionate",2],["passive",-1],["passively",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["pensive",-1],["perfect",3],["perfected",2],["perfectly",3],["perfects",2],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["perplexed",-2],["persecute",-2],["persecuted",-2],["persecutes",-2],["persecuting",-2],["perturbed",-2],["pesky",-2],["pessimism",-2],["pessimistic",-2],["petrified",-2],["phobic",-2],["picturesque",2],["pileup",-1],["pique",-2],["piqued",-2],["piss",-4],["pissed",-4],["pissing",-3],["piteous",-2],["pitied",-1],["pity",-2],["playful",2],["pleasant",3],["please",1],["pleased",3],["pleasure",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["polluted",-2],["polluter",-2],["polluters",-2],["pollutes",-2],["poor",-2],["poorer",-2],["poorest",-2],["popular",3],["positive",2],["positively",2],["possessive",-2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["powerful",2],["powerless",-2],["praise",3],["praised",3],["praises",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepared",1],["pressure",-1],["pressured",-2],["pretend",-1],["pretending",-1],["pretends",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["prison",-2],["prisoner",-2],["prisoners",-2],["privileged",2],["proactive",2],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["prominent",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protesting",-2],["protests",-2],["proud",2],["proudly",2],["provoke",-1],["provoked",-1],["provokes",-1],["provoking",-1],["pseudoscience",-3],["punish",-2],["punished",-2],["punishes",-2],["punitive",-2],["pushy",-1],["puzzled",-2],["quaking",-2],["questionable",-2],["questioned",-1],["questioning",-1],["racism",-3],["racist",-3],["racists",-3],["rage",-2],["rageful",-2],["rainy",-1],["rant",-3],["ranter",-3],["ranters",-3],["rants",-3],["rape",-4],["rapist",-4],["rapture",2],["raptured",2],["raptures",2],["rapturous",4],["rash",-2],["ratified",2],["reach",1],["reached",1],["reaches",1],["reaching",1],["reassure",1],["reassured",1],["reassures",1],["reassuring",2],["rebellion",-2],["recession",-2],["reckless",-2],["recommend",2],["recommended",2],["recommends",2],["redeemed",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["regretful",-2],["regrets",-2],["regretted",-2],["regretting",-2],["reject",-1],["rejected",-1],["rejecting",-1],["rejects",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["relentless",-1],["reliant",2],["relieve",1],["relieved",2],["relieves",1],["relieving",2],["relishing",2],["remarkable",2],["remorse",-2],["repulse",-1],["repulsed",-2],["rescue",2],["rescued",2],["rescues",2],["resentful",-2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolute",2],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["respected",2],["responsible",2],["responsive",2],["restful",2],["restless",-2],["restore",1],["restored",1],["restores",1],["restoring",1],["restrict",-2],["restricted",-2],["restricting",-2],["restriction",-2],["restricts",-2],["retained",-1],["retard",-2],["retarded",-2],["retreat",-1],["revenge",-2],["revengeful",-2],["revered",2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["rig",-1],["rigged",-1],["right direction",3],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robber",-2],["robed",-2],["robing",-2],["robs",-2],["robust",2],["rofl",4],["roflcopter",4],["roflmao",4],["romance",2],["rotfl",4],["rotflmfao",4],["rotflol",4],["ruin",-2],["ruined",-2],["ruining",-2],["ruins",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddened",-2],["sadly",-2],["safe",1],["safely",1],["safety",1],["salient",1],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["scary",-2],["sceptical",-2],["scold",-2],["scoop",3],["scorn",-2],["scornful",-2],["scream",-2],["screamed",-2],["screaming",-2],["screams",-2],["screwed",-2],["screwed up",-3],["scumbag",-4],["secure",2],["secured",2],["secures",2],["sedition",-2],["seditious",-2],["seduced",-1],["self-confident",2],["self-deluded",-2],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentences",-2],["sentencing",-2],["serene",2],["severe",-2],["sexy",3],["shaky",-2],["shame",-2],["shamed",-2],["shameful",-2],["share",1],["shared",1],["shares",1],["shattered",-2],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocked",-2],["shocking",-2],["shocks",-2],["shoot",-1],["short-sighted",-2],["short-sightedness",-2],["shortage",-2],["shortages",-2],["shrew",-4],["shy",-1],["sick",-2],["sigh",-2],["significance",1],["significant",1],["silencing",-1],["silly",-1],["sincere",2],["sincerely",2],["sincerest",2],["sincerity",2],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptical",-2],["skepticism",-2],["skeptics",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["slavery",-3],["sleeplessness",-2],["slick",2],["slicker",2],["slickest",2],["sluggish",-2],["slut",-5],["smart",1],["smarter",2],["smartest",2],["smear",-2],["smile",2],["smiled",2],["smiles",2],["smiling",2],["smog",-2],["sneaky",-1],["snub",-2],["snubbed",-2],["snubbing",-2],["snubs",-2],["sobering",1],["solemn",-1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["somber",-2],["some kind",0],["son-of-a-bitch",-5],["soothe",3],["soothed",3],["soothing",3],["sophisticated",2],["sore",-1],["sorrow",-2],["sorrowful",-2],["sorry",-1],["spam",-2],["spammer",-3],["spammers",-3],["spamming",-2],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["speculative",-2],["spirit",1],["spirited",2],["spiritless",-2],["spiteful",-2],["splendid",3],["sprightly",2],["squelched",-1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["stamina",2],["stampede",-2],["startled",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steadfast",2],["steal",-2],["steals",-2],["stereotype",-2],["stereotyped",-2],["stifled",-1],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stingy",-2],["stolen",-2],["stop",-1],["stopped",-1],["stopping",-1],["stops",-1],["stout",2],["straight",1],["strange",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthened",2],["strengthening",2],["strengthens",2],["stressed",-2],["stressor",-2],["stressors",-2],["stricken",-2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["struck",-1],["struggle",-2],["struggled",-2],["struggles",-2],["struggling",-2],["stubborn",-2],["stuck",-2],["stunned",-2],["stunning",4],["stupid",-2],["stupidly",-2],["suave",2],["substantial",1],["substantially",1],["subversive",-2],["success",2],["successful",3],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["suffers",-2],["suicidal",-2],["suicide",-2],["suing",-2],["sulking",-2],["sulky",-2],["sullen",-2],["sunshine",2],["super",3],["superb",5],["superior",2],["support",2],["supported",2],["supporter",1],["supporters",1],["supporting",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["suspicious",-2],["swear",-2],["swearing",-2],["swears",-2],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["sympathy",2],["tard",-2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terrified",-3],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thankful",2],["thanks",2],["thorny",-2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatened",-2],["threatening",-2],["threatens",-2],["threats",-2],["thrilled",5],["thwart",-2],["thwarted",-2],["thwarting",-2],["thwarts",-2],["timid",-2],["timorous",-2],["tired",-2],["tits",-2],["tolerant",2],["toothless",-2],["top",2],["tops",2],["torn",-2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["totalitarian",-2],["totalitarianism",-2],["tout",-2],["touted",-2],["touting",-2],["touts",-2],["tragedy",-2],["tragic",-2],["tranquil",2],["trap",-1],["trapped",-2],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["treasonous",-3],["treasure",2],["treasures",2],["trembling",-2],["tremulous",-2],["tricked",-2],["trickery",-2],["triumph",4],["triumphant",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["trusted",2],["tumor",-2],["twat",-5],["ugly",-3],["unacceptable",-2],["unappreciated",-2],["unapproved",-2],["unaware",-2],["unbelievable",-1],["unbelieving",-1],["unbiased",2],["uncertain",-1],["unclear",-1],["uncomfortable",-2],["unconcerned",-2],["unconfirmed",-1],["unconvinced",-1],["uncredited",-1],["undecided",-1],["underestimate",-1],["underestimated",-1],["underestimates",-1],["underestimating",-1],["undermine",-2],["undermined",-2],["undermines",-2],["undermining",-2],["undeserving",-2],["undesirable",-2],["uneasy",-2],["unemployment",-2],["unequal",-1],["unequaled",2],["unethical",-2],["unfair",-2],["unfocused",-2],["unfulfilled",-2],["unhappy",-2],["unhealthy",-2],["unified",1],["unimpressed",-2],["unintelligent",-2],["united",1],["unjust",-2],["unlovable",-2],["unloved",-2],["unmatched",1],["unmotivated",-2],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["unsecured",-2],["unsettled",-1],["unsophisticated",-2],["unstable",-2],["unstoppable",2],["unsupported",-2],["unsure",-1],["untarnished",2],["unwanted",-2],["unworthy",-2],["upset",-2],["upsets",-2],["upsetting",-2],["uptight",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vague",-2],["validate",1],["validated",1],["validates",1],["validating",1],["verdict",-1],["verdicts",-1],["vested",1],["vexation",-2],["vexing",-2],["vibrant",3],["vicious",-2],["victim",-3],["victimize",-3],["victimized",-3],["victimizes",-3],["victimizing",-3],["victims",-3],["vigilant",3],["vile",-3],["vindicate",2],["vindicated",2],["vindicates",2],["vindicating",2],["violate",-2],["violated",-2],["violates",-2],["violating",-2],["violence",-3],["violent",-3],["virtuous",2],["virulent",-2],["vision",1],["visionary",3],["visioning",1],["visions",1],["vitality",3],["vitamin",1],["vitriolic",-3],["vivacious",3],["vociferous",-1],["vulnerability",-2],["vulnerable",-2],["walkout",-2],["walkouts",-2],["wanker",-3],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warn",-2],["warned",-2],["warning",-3],["warnings",-3],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["wavering",-1],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weary",-2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomed",2],["welcomes",2],["whimsical",1],["whitewash",-3],["whore",-4],["wicked",-2],["widowed",-1],["willingness",2],["win",4],["winner",4],["winning",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["woebegone",-2],["woeful",-3],["won",3],["wonderful",4],["woo",3],["woohoo",3],["wooo",4],["woow",4],["worn",-1],["worried",-3],["worry",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worshiped",3],["worst",-3],["worth",2],["worthless",-2],["worthy",2],["wow",4],["wowow",4],["wowww",4],["wrathful",-3],["wreck",-2],["wrong",-2],["wronged",-2],["wtf",-4],["yeah",1],["yearning",1],["yeees",2],["yes",1],["youthful",2],["yucky",-2],["yummy",3],["zealot",-2],["zealots",-2],["zealous",2]]});var $F=s((bse,ZF)=>{"use strict";var kSr=_n(),jSr=YF();function CSr(){return kSr(jSr)}ZF.exports=CSr});var QF=s((wse,GSr)=>{GSr.exports=[["abandon",-2],["abandons",-2],["abandoned",-2],["absentee",-1],["absentees",-1],["aboard",1],["abducted",-2],["abduction",-2],["abductions",-2],["abuse",-3],["abused",-3],["abuses",-3],["accept",1],["accepting",1],["accepts",1],["accepted",1],["accident",-2],["accidental",-2],["accidentally",-2],["accidents",-2],["accomplish",2],["accomplished",2],["accomplishes",2],["accusation",-2],["accusations",-2],["accuse",-2],["accused",-2],["ache",-2],["achievable",1],["acquitted",2],["admit",-1],["admits",-1],["admitted",-1],["adopt",1],["adopts",1],["advanced",1],["affected",-1],["afraid",-2],["aggressive",-2],["aggression",-2],["aggressions",-2],["agree",1],["agrees",1],["agreed",1],["alarm",-2],["alarmist",-2],["alarmists",-2],["alas",-1],["alert",-1],["alienation",-2],["alive",1],["allergic",-2],["allow",1],["alone",-2],["amazed",2],["amazing",4],["ambitious",2],["amuse",3],["amused",3],["amusement",3],["amusements",3],["anger",-3],["angers",-3],["annoy",-2],["annoys",-2],["annoying",-2],["anti",-1],["anxious",-2],["anxiety",-2],["apocalyptic",-2],["appalling",-2],["applauded",2],["applaudes",2],["applauding",2],["applause",2],["appreciation",2],["approval",2],["approved",2],["approves",2],["apologise",-1],["apologised",-1],["apologises",-1],["apologising",-1],["apology",-1],["ardent",1],["arrest",-2],["arrests",-2],["arrested",-3],["arrogant",-2],["ashamed",-2],["ass",-4],["assassination",-3],["assassinations",-3],["asset",2],["assets",2],["asshole",-4],["attack",-1],["attacked",-1],["attacking",-1],["attacks",-1],["attract",1],["attracts",1],["attracting",2],["attraction",2],["attractions",2],["avert",-1],["averted",-1],["averts",-1],["avoid",-1],["avoided",-1],["avoids",-1],["await",-1],["awaited",-1],["awaits",-1],["award",3],["awarded",3],["awards",3],["awesome",4],["awful",-3],["axe",-1],["axed",-1],["backed",1],["backing",2],["backs",1],["bad",-3],["badly",-3],["bailout",-2],["bamboozle",-2],["bamboozled",-2],["bamboozles",-2],["ban",-2],["banish",-1],["bankrupt",-3],["bankster",-3],["banned",-2],["bargain",2],["barrier",-2],["bastard",-5],["bastards",-5],["battle",-1],["battles",-1],["beating",-1],["beautiful",3],["beloved",3],["benefit",2],["benefits",2],["best",3],["betrayal",-3],["better",2],["big",1],["bitch",-5],["bitches",-5],["bizarre",-2],["blah",-2],["blame",-2],["bless",2],["blind",-1],["bliss",3],["block",-1],["blockbuster",3],["blocked",-1],["blocks",-1],["blocking",-1],["bloody",-3],["bomb",-1],["boost",1],["boosted",1],["boosting",1],["boosts",1],["bored",-2],["boring",-3],["bother",-2],["boycott",-2],["boycots",-2],["boycotted",-2],["boycotting",-2],["brainwashing",-3],["brave",2],["breathtaking",5],["breakthrough",3],["bribe",-3],["brilliant",4],["broke",-1],["broked",-1],["broken",-1],["bullshit",-4],["bullied",-2],["bully",-2],["bullying",-2],["bummer",-2],["burden",-2],["calm",2],["calmed",2],["calming",2],["calms",2],["cancel",-1],["cancels",-1],["cancer",-1],["can't stand",-3],["care",2],["carefree",1],["careful",2],["carefully",2],["cares",2],["catastrophic",-4],["cashing in",-2],["casualty",-2],["celebrate",3],["celebrated",3],["celebrates",3],["celebrating",3],["censor",-2],["censored",-2],["censors",-2],["certain",1],["challenge",-1],["charges",-2],["cheer",2],["cheerful",2],["cheering",2],["cheers",3],["cheery",3],["chilling",-1],["clarifies",2],["clarity",2],["clash",-2],["clean",2],["cleaner",2],["clear",1],["clears",1],["cleared",1],["clever",2],["chance",2],["chances",2],["chaos",-2],["chaotic",-2],["charged",-3],["cheat",-3],["cheater",-3],["cheaters",-3],["cheats",-3],["cheated",-3],["cheer",2],["cheers",2],["cheered",2],["cherish",2],["cherished",2],["cherishes",2],["cherishing",2],["clueless",-2],["cock",-5],["cocksucker",-5],["collapse",-2],["collapsed",-2],["collapses",-2],["collapsing",-2],["collide",-1],["collides",-1],["colliding",-1],["collision",-2],["collisions",-2],["colluding",-3],["combat",-1],["combats",-1],["commend",2],["commended",2],["commit",1],["commitment",2],["committed",1],["committing",1],["commits",1],["comprehensive",2],["confidence",2],["conflict",-2],["conflicting",-2],["conflicts",-2],["confusing",-2],["confuse",-2],["confused",-2],["congrats",2],["congratulate",2],["congratulation",2],["congratulations",2],["conspiracy",-3],["controversial",-2],["controversially",-2],["convince",1],["convinced",1],["convinces",1],["cool",1],["cool stuff",3],["corpse",-1],["costly",-2],["courtesy",2],["cover-up",-3],["coziness",2],["cramp",-1],["crap",-3],["crash",-2],["crazy",-2],["creative",2],["cried",-2],["crime",-3],["criminal",-3],["criminals",-3],["crisis",-3],["critic",-2],["critics",-2],["criticize",-2],["criticized",-2],["criticizes",-2],["criticizing",-2],["cruel",-3],["cruelty",-3],["cry",-1],["crying",-2],["cunt",-5],["curse",-1],["cut",-1],["cute",2],["cuts",-1],["cutting",-1],["cynicism",-2],["damage",-3],["damages",-3],["damn",-4],["damned",-4],["darkest",-2],["demonstration",-1],["danger",-2],["dead",-3],["deadlock",-2],["dear",2],["dearly",3],["deafening",-1],["death",-2],["debt",-2],["deceive",-3],["deceived",-3],["deceives",-3],["deceiving",-3],["deception",-3],["defect",-3],["defects",-3],["defender",2],["defenders",2],["defer",-1],["defering",-1],["deficit",-2],["delay",-1],["delayed",-1],["delight",3],["delighted",3],["denied",-2],["denier",-2],["deniers",-2],["denies",-2],["denounce",-2],["denounces",-2],["deny",-2],["denying",-2],["depressed",-2],["depressing",-2],["derail",-2],["derails",-2],["deride",-2],["derided",-2],["derides",-2],["deriding",-2],["desire",1],["desired",2],["derision",-2],["despair",-3],["despairs",-3],["desperate",-3],["desperately",-3],["destroy",-3],["destroys",-3],["destroyed",-3],["destruction",-3],["detain",-2],["detained",-2],["detention",-2],["devastated",-2],["devastating",-2],["devoted",3],["dick",-4],["dickhead",-4],["die",-3],["died",-3],["difficult",-1],["dilemma",-1],["dire",-3],["dirt",-2],["dirty",-2],["dirtier",-2],["dirtiest",-2],["disabling",-1],["disappear",-1],["disappears",-1],["disappeared",-1],["disappoint",-2],["disappointed",-2],["disappointing",-2],["disappointment",-2],["disappointments",-2],["disappoints",-2],["disaster",-2],["disasters",-2],["disastrous",-3],["discord",-2],["disgust",-3],["disgusting",-3],["dishonest",-2],["dismayed",-2],["dispute",-2],["disputed",-2],["disputes",-2],["disputing",-2],["disrespect",-2],["disruption",-2],["disruptions",-2],["disruptive",-2],["distort",-2],["distorted",-2],["distorting",-2],["distorts",-2],["dissy",-1],["distract",-2],["distracted",-2],["distracts",-2],["distraction",-2],["distrust",-3],["dithering",-2],["dodgy",-2],["dodging",-2],["does not work",-3],["dont like",-2],["doom",-2],["doomed",-2],["doubt",-1],["doubts",-1],["downside",-2],["drag",-1],["drags",-1],["dragged",-1],["dread",-2],["dream",1],["dreams",1],["drop",-1],["drown",-2],["drowned",-2],["drowns",-2],["drunk",-2],["dubious",-2],["dud",-2],["dumb",-3],["dump",-1],["dumped",-2],["dysfunction",-2],["eager",2],["ease",2],["eerie",-2],["eery",-2],["effective",2],["effectively",2],["embarrass",-2],["embarrassed",-2],["embarrasses",-2],["embarrassing",-2],["embrace",1],["emergency",-2],["encourage",2],["encourages",2],["encouraged",2],["endorse",2],["endorsed",2],["endorses",2],["endorsement",2],["enemies",-2],["enemy",-2],["engage",1],["engages",1],["enjoy",2],["enjoys",2],["enjoying",2],["enlightening",2],["enslave",-2],["enslaved",-2],["enslaves",-2],["ensure",1],["ensuring",1],["entertaining",2],["envies",-1],["envy",-1],["envying",-1],["escate",-1],["escates",-1],["escating",-1],["ethical",2],["eviction",-1],["evil",-3],["exaggerate",-2],["exaggerated",-2],["exaggerates",-2],["exaggerating",-2],["excellence",3],["excellent",3],["excited",3],["excitement",3],["exciting",3],["exclude",-1],["excluded",-2],["exclusion",-1],["exclusive",2],["excuse",-1],["exhausted",-2],["expand",1],["expands",1],["expel",-2],["expels",-2],["expelled",-2],["expelling",-2],["exploit",-2],["exploited",-2],["exploits",-2],["exploiting",-2],["expose",-1],["exposed",-1],["exposes",-1],["exposing",-1],["extend",1],["extends",1],["fabulous",4],["facinate",3],["facinated",3],["facinating",3],["fad",-2],["faggot",-3],["faggots",-3],["fail",-2],["failed",-2],["fails",-2],["failing",-2],["failure",-2],["faithful",3],["fair",2],["faith",1],["fake",-3],["fakes",-3],["faking",-3],["falling",-1],["falsify",-3],["falsified",-3],["fame",1],["fan",3],["fantastic",4],["farce",-1],["fascist",-2],["fascists",-2],["fatality",-3],["fatalities",-3],["favor",2],["favors",2],["favorite",2],["favorites",2],["favorited",2],["fear",-2],["fearful",-2],["fearing",-2],["fearless",2],["fed up",-3],["feeble",-2],["feeling",1],["feeble",-2],["felony",-3],["felonies",-3],["fiasco",-3],["fight",-1],["fine",2],["fire",-2],["fired",-2],["firing",-2],["fitness",1],["flagship",2],["flees",-1],["flop",-2],["flops",-2],["flu",-2],["fool",-2],["fools",-2],["forget",-1],["forgetful",-2],["forgotten",-1],["frantic",-1],["fraud",-4],["fraudster",-4],["fraudsters",-4],["fraudulent",-4],["free",1],["frenzy",-3],["fresh",1],["friendly",2],["frightened",-2],["frikin",-2],["frustration",-2],["ftw",3],["fuck",-4],["fucked",-4],["fuckers",-4],["fucking",-4],["fud",-3],["fulfill",2],["fulfilled",2],["fulfills",2],["fun",4],["funeral",-1],["funky",2],["funny",4],["furious",-3],["hail",2],["hailed",2],["hell",-4],["help",2],["helping",2],["helpless",-2],["helps",2],["hero",2],["heroes",2],["heroic",3],["hunger",-2],["hurt",-2],["hurting",-2],["hurts",-2],["gag",-2],["gagged",-2],["gain",2],["gained",2],["gaining",2],["gains",2],["ghost",-1],["glad",3],["gloom",-1],["glorious",2],["god",1],["goddamn",-3],["good",3],["grace",1],["grand",3],["grant",1],["granted",1],["granting",1],["grants",1],["grateful",3],["grave",-2],["gray",-1],["great",3],["greater",3],["greatest",3],["greed",-3],["green wash",-3],["green washing",-3],["greenwash",-3],["greenwasher",-3],["greenwashers",-3],["greenwashing",-3],["greet",1],["greeted",1],["greets",1],["greeting",1],["greetings",2],["grey",-1],["grief",-2],["gross",-2],["growing",1],["guilt",-3],["guilty",-3],["gun",-1],["hacked",-1],["happiness",3],["happy",3],["hard",-1],["harm",-2],["harmed",-2],["harmful",-2],["harming",-2],["harms",-2],["hate",-3],["haunt",-1],["haunted",-2],["haunts",-1],["haunting",1],["havoc",-2],["healthy",2],["heartbroken",-3],["help",2],["highlight",2],["hilarious",2],["hoax",-2],["honest",2],["hope",2],["hopeful",2],["hopefully",2],["hopeless",-2],["hopelessness",-2],["hopes",2],["hoping",2],["honor",2],["honour",2],["horrible",-3],["horrific",-3],["hostile",-2],["hug",2],["hugs",2],["huge",1],["huckster",-2],["humerous",3],["humor",3],["humour",3],["hurrah",5],["hunger",-2],["hysteria",-3],["growth",2],["idiot",-3],["idiotic",-3],["ignorance",-2],["ignore",-1],["ignores",-1],["ignored",-2],["ill",-2],["illegal",-3],["illiteracy",-2],["illness",-2],["illnesses",-2],["imperfect",-2],["importance",2],["important",2],["impose",-1],["imposed",-1],["imposes",-1],["imposing",-1],["impotent",-2],["impress",3],["impressed",3],["impresses",3],["impressive",3],["improve",2],["improves",2],["improved",2],["improvement",2],["improving",2],["inability",-2],["inaction",-2],["inadequate",-2],["incompetence",-2],["inconvenient",-2],["increase",1],["increased",1],["indifferent",-2],["indignation",-2],["indoctrinate",-2],["indoctrinated",-2],["indoctrinates",-2],["indoctrinating",-2],["ineffective",-2],["ineffectively",-2],["infringement",-2],["infuriate",-2],["infuriates",-2],["inhibit",-1],["injury",-2],["injustice",-2],["innovate",1],["innovates",1],["innovation",1],["inquisition",-2],["insane",-2],["insanity",-2],["insensitivity",-2],["insipid",-2],["inspiration",2],["inspirational",2],["inspire",2],["inspires",2],["inspiring",3],["intact",2],["integrity",2],["intense",1],["interest",1],["interests",1],["interested",2],["interesting",2],["interrupt",-2],["interrupted",-2],["interrupts",-2],["interrupting",-2],["interruption",-2],["intimidate",-2],["intimidated",-2],["intimidates",-2],["intimidating",-2],["inviting",1],["irrational",-1],["irreversible",-1],["irony",-1],["ironic",-1],["jackass",-4],["jackasses",-4],["jailed",-2],["jeopardy",-2],["jerk",-3],["jesus",1],["join",1],["joke",2],["joy",3],["justice",2],["justifiably",2],["kill",-3],["killing",-3],["kills",-3],["kind",2],["kiss",2],["kudos",3],["lack",-2],["lag",-1],["lagged",-2],["lagging",-2],["lags",-2],["lame",-2],["landmark",2],["laugh",1],["laughs",1],["laughing",1],["launched",1],["lawsuit",-2],["lawsuits",-2],["leak",-1],["leaked",-1],["leave",-1],["legal",1],["legally",1],["liar",-3],["liars",-3],["libelous",-2],["lied",-2],["like",2],["likes",2],["liked",2],["limited",-1],["limits",-1],["limitation",-1],["litigation",-1],["lively",2],["lobby",-2],["lobbying",-2],["lol",3],["lonely",-2],["loom",-1],["loomed",-1],["looming",-1],["looms",-1],["loose",-3],["looses",-3],["losing",-3],["loss",-3],["lost",-3],["love",3],["lovely",3],["lowest",-1],["luck",3],["lunatic",-3],["lunatics",-3],["lurk",-1],["lurks",-1],["lurking",-1],["mad",-3],["made-up",-1],["madly",-3],["madness",-3],["mandatory",-1],["manipulated",-1],["manipulating",-1],["manipulation",-1],["matter",1],["matters",1],["meaningful",2],["meaningless",-2],["medal",3],["mercy",2],["mess",-2],["messed",-2],["messing up",-2],["mindless",-2],["misery",-2],["misleading",-3],["miss",-2],["mischief",-2],["mischiefs",-2],["misinformation",-2],["misinformed",-2],["misread",-1],["misreporting",-2],["missed",-2],["mistake",-2],["mistaken",-2],["mistakes",-2],["mistaking",-2],["mongering",-2],["monopolizing",-2],["motherfucker",-5],["motherfucking",-5],["murder",-2],["murderer",-2],["myth",-1],["nasty",-3],["negative",-2],["neglect",-2],["neglected",-2],["neglecting",-2],["neglects",-2],["nerves",-1],["nervous",-2],["nice",3],["nifty",2],["nigger",-5],["no",-1],["no fun",-3],["noble",2],["nonsense",-2],["not good",-2],["novel",2],["notorious",-2],["not working",-3],["nuts",-3],["obliterate",-2],["obliterated",-2],["obscene",-2],["offline",-1],["obsolete",-2],["obstacle",-2],["obstacles",-2],["offend",-2],["offended",-2],["offender",-2],["offending",-2],["offends",-2],["oks",2],["ominous",3],["opportunity",2],["opportunities",2],["optimism",2],["outrage",-3],["outraged",-3],["outreach",2],["outstanding",5],["overload",-1],["overreact",-2],["overreacts",-2],["overreacted",-2],["oversell",-2],["overselling",-2],["oversells",-2],["oversimplification",-2],["oversimplified",-2],["oversimplifies",-2],["oversimplify",-2],["overweight",-1],["oxymoron",-1],["pain",-2],["panic",-3],["paradox",-1],["parley",-1],["pathetic",-2],["pay",-1],["peace",2],["peaceful",2],["peacefully",2],["penalty",-2],["perfect",3],["perfects",2],["perfected",2],["perfectly",3],["peril",-2],["perjury",-3],["perpetrator",-2],["perpetrators",-2],["pessimism",-2],["picturesque",2],["piss",-4],["pissed",-4],["pity",-2],["pleasant",3],["please",1],["pleased",3],["poised",-2],["poison",-2],["poisoned",-2],["poisons",-2],["pollute",-2],["pollutes",-2],["polluted",-2],["polluter",-2],["polluters",-2],["popular",3],["poor",-2],["poorer",-2],["poorest",-2],["positive",2],["positively",2],["postpone",-1],["postponed",-1],["postpones",-1],["postponing",-1],["poverty",-1],["praise",3],["praised",3],["prases",3],["praising",3],["pray",1],["praying",1],["prays",1],["prblm",-2],["prblms",-2],["prepaired",1],["pressure",-1],["pretend",-1],["pretends",-1],["pretending",-1],["pretty",1],["prevent",-1],["prevented",-1],["preventing",-1],["prevents",-1],["prick",-5],["problem",-2],["problems",-2],["profiteer",-2],["progress",2],["promise",1],["promised",1],["promises",1],["promote",1],["promoted",1],["promotes",1],["promoting",1],["propaganda",-2],["prosecute",-1],["prosecuted",-2],["prosecutes",-1],["prosecution",-1],["prospect",1],["prospects",1],["prosperous",3],["protect",1],["protected",1],["protects",1],["protest",-2],["protesters",-2],["protests",-2],["protesting",-2],["proud",2],["proudly",2],["pseudoscience",-3],["punish",-2],["punishes",-2],["punitive",-2],["questioned",-1],["rainy",-1],["rant",-3],["rants",-3],["ranter",-3],["ranters",-3],["rape",-4],["rash",-2],["reach",1],["reaches",1],["reached",1],["reaching",1],["recommend",2],["recommended",2],["recommends",2],["refuse",-2],["refused",-2],["refusing",-2],["regret",-2],["reject",-1],["rejected",-1],["rejects",-1],["rejecting",-1],["rejoice",4],["rejoiced",4],["rejoices",4],["rejoicing",4],["relaxed",2],["remarkable",2],["rescue",2],["rescued",2],["rescues",2],["resign",-1],["resigned",-1],["resigning",-1],["resigns",-1],["resolve",2],["resolved",2],["resolves",2],["resolving",2],["responsible",2],["restless",-2],["restore",1],["restored",1],["restoring",1],["restores",1],["restrict",-2],["restricted",-2],["restricting",-2],["restricts",-2],["restriction",-2],["retained",-1],["retarded",-2],["revive",2],["revives",2],["reward",2],["rewarded",2],["rewarding",2],["rewards",2],["rich",2],["ridiculous",-3],["right direction",3],["rig",-1],["rigged",-1],["rigorous",3],["rigorously",3],["riot",-2],["riots",-2],["risk",-2],["risks",-2],["rob",-2],["robed",-2],["robs",-2],["robing",-2],["ruin",-2],["ruining",-2],["sabotage",-2],["sad",-2],["sadden",-2],["saddenede",-2],["sadly",-2],["sappy",-1],["sarcastic",-2],["satisfied",2],["save",2],["saved",2],["scam",-2],["scams",-2],["scandal",-3],["scandalous",-3],["scandals",-3],["scapegoat",-2],["scapegoats",-2],["scare",-2],["scared",-2],["sceptical",-2],["sceptics",-2],["scoop",3],["screwed",-2],["screwed up",-3],["secure",2],["secured",2],["secures",2],["seduced",-1],["selfish",-3],["selfishness",-3],["sentence",-2],["sentenced",-2],["sentencing",-2],["sentences",-2],["sexy",3],["shaky",-2],["shame",-2],["shameful",-2],["share",1],["shares",1],["shared",1],["shrew",-4],["shit",-4],["shithead",-4],["shitty",-3],["shock",-2],["shocks",-2],["shocked",-2],["shocking",-2],["shoot",-1],["short-sighted",-2],["short-sightness",-2],["shortage",-2],["shortages",-2],["shy",-1],["sick",-2],["sigh",-2],["silly",-2],["silencing",-1],["sinful",-3],["singleminded",-2],["skeptic",-2],["skeptics",-2],["skepticism",-2],["slam",-2],["slash",-2],["slashed",-2],["slashes",-2],["slashing",-2],["sleeplessness",-2],["slut",-5],["smart",1],["smear",-2],["smile",2],["smiling",2],["smog",-2],["snub",-2],["snubs",-2],["sobering",1],["solid",2],["solidarity",2],["solution",1],["solutions",1],["solve",1],["solved",1],["solves",1],["solving",1],["some kind",0],["son-of-a-bitch",-5],["sore",-1],["sorry",-1],["spark",1],["sparkle",3],["sparkles",3],["sparkling",3],["spirit",1],["stab",-2],["stabbed",-2],["stable",2],["stabs",-2],["stall",-2],["stalled",-2],["stalling",-2],["starve",-2],["starved",-2],["starves",-2],["starving",-2],["steal",-2],["steals",-2],["stimulate",1],["stimulated",1],["stimulates",1],["stimulating",2],["stolen",-2],["stop",-1],["stopping",-1],["stopped",-1],["stops",-1],["strangely",-1],["strangled",-2],["strength",2],["strengthen",2],["strengthening",2],["strengthened",2],["strengthens",2],["strike",-1],["strikers",-2],["strikes",-1],["strong",2],["stronger",2],["strongest",2],["stunning",4],["stupid",-2],["success",2],["successful",3],["suffer",-2],["suffers",-2],["suicide",-2],["suing",-2],["sulking",-2],["sunshine",2],["super",3],["superb",5],["support",2],["supported",2],["supporter",1],["supporters",1],["supportive",2],["supports",2],["survived",2],["surviving",2],["survivor",2],["suspect",-1],["suspected",-1],["suspecting",-1],["suspects",-1],["suspend",-1],["suspended",-1],["stampede",-2],["straight",1],["stressor",-2],["stressors",-2],["strike",-2],["substantial",1],["suck",-3],["sucks",-3],["suffer",-2],["suffering",-2],["support",1],["supported",1],["supporting",1],["supports",1],["sweet",2],["swift",2],["swiftly",2],["swindle",-3],["swindles",-3],["swindling",-3],["sympathetic",2],["tears",-2],["tender",2],["tense",-2],["tension",-1],["terrible",-3],["terribly",-3],["terrific",4],["terror",-3],["terrorize",-3],["terrorized",-3],["terrorizes",-3],["thank",2],["thanks",2],["thoughtful",2],["thoughtless",-2],["threat",-2],["threaten",-2],["threatens",-2],["threating",-2],["threats",-2],["thrilled",5],["tired",-2],["totalitarian",-2],["totalitarianism",-2],["toothless",-2],["top",2],["tops",2],["torture",-4],["tortured",-4],["tortures",-4],["torturing",-4],["tout",-2],["touts",-2],["touted",-2],["touting",-2],["tragedy",-2],["tragic",-2],["trap",-1],["trauma",-3],["traumatic",-3],["travesty",-2],["treason",-3],["trickery",-2],["triumph",4],["trouble",-2],["troubled",-2],["troubles",-2],["true",2],["trust",1],["ugly",-3],["unacceptable",-2],["unapproved",-2],["unbelievable",-1],["unclear",-1],["unconvinced",-1],["unconfirmed",-1],["undermine",-2],["undermines",-2],["undermined",-2],["undermining",-2],["uneasy",-2],["unemployment",-2],["unethical",-2],["unhappy",-2],["unimpressed",-2],["united",1],["unprofessional",-2],["unresearched",-2],["unsatisfied",-2],["untarnished",2],["upset",-2],["upsets",-2],["upsetting",-2],["urgent",-1],["useful",2],["usefulness",2],["useless",-2],["uselessness",-2],["vested",1],["vulnerable",2],["yeah",1],["yes",1],["yeees",2],["yucky",-2],["yummy",3],["vague",-2],["verdict",-1],["verdicts",-1],["victim",-3],["victims",-3],["violence",-3],["violent",-3],["virtuous",2],["vision",1],["visionary",3],["visions",1],["visioning",1],["vitality",3],["vitamin",1],["vulnerable",-2],["walkout",-2],["walkouts",-2],["want",1],["war",-2],["warfare",-2],["warm",1],["warmth",2],["warning",-3],["warnings",-3],["warn",-2],["warned",-2],["warning",-2],["warns",-2],["waste",-1],["wasted",-2],["wasting",-2],["weak",-2],["weakness",-2],["wealth",3],["wealthy",2],["weep",-2],["weeping",-2],["weird",-2],["welcome",2],["welcomes",2],["whitewash",-3],["whore",-4],["widowed",-1],["willingness",2],["win",4],["winner",4],["wins",4],["winwin",3],["wish",1],["wishes",1],["wishing",1],["withdrawal",-3],["won",3],["wonderful",4],["woohoo",3],["woo",3],["wooo",4],["woow",4],["worry",-3],["worried",-3],["worrying",-3],["worse",-3],["worsen",-3],["worsened",-3],["worsening",-3],["worsens",-3],["worst",-3],["worth",2],["wow",4],["wowow",4],["wowww",4],["wrong",-2],["zealot",-2],["zealots",-2]]});var rM=s((Ese,KF)=>{"use strict";var VSr=_n(),USr=QF();function HSr(){return VSr(USr)}KF.exports=HSr});var eM=s((Nse,WSr)=>{WSr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var iM=s((Ase,tM)=>{"use strict";var DSr=_n(),zSr=eM();function XSr(){return DSr(zSr)}tM.exports=XSr});var nM=s((Ose,JSr)=>{JSr.exports=[-.3,-.44,1.01,.48,-.24,.06,.63,-.13,-1.4,-.22,-.05,.2,.18,.39,.1]});var sM=s((Sse,aM)=>{"use strict";var xSr=nM();function YSr(){return xSr.slice()}aM.exports=YSr});var uM=s((Tse,ZSr)=>{ZSr.exports=[{date:"1854-04-01T07:00:00.000Z",army_size:8571,disease:1,wounds:0,other:5},{date:"1854-05-01T07:00:00.000Z",army_size:23333,disease:12,wounds:0,other:9},{date:"1854-06-01T07:00:00.000Z",army_size:28333,disease:11,wounds:0,other:6},{date:"1854-07-01T07:00:00.000Z",army_size:28722,disease:359,wounds:0,other:23},{date:"1854-08-01T07:00:00.000Z",army_size:30246,disease:828,wounds:1,other:30},{date:"1854-09-01T07:00:00.000Z",army_size:30290,disease:788,wounds:81,other:70},{date:"1854-10-01T07:00:00.000Z",army_size:30643,disease:503,wounds:132,other:128},{date:"1854-11-01T07:00:00.000Z",army_size:29736,disease:844,wounds:287,other:106},{date:"1854-12-01T08:00:00.000Z",army_size:32779,disease:1725,wounds:114,other:131},{date:"1855-01-01T08:00:00.000Z",army_size:32393,disease:2761,wounds:83,other:324},{date:"1855-02-01T08:00:00.000Z",army_size:30919,disease:2120,wounds:42,other:361},{date:"1855-03-01T08:00:00.000Z",army_size:30107,disease:1205,wounds:32,other:172},{date:"1855-04-01T07:00:00.000Z",army_size:32252,disease:477,wounds:48,other:57},{date:"1855-05-01T07:00:00.000Z",army_size:35473,disease:508,wounds:49,other:37},{date:"1855-06-01T07:00:00.000Z",army_size:38863,disease:802,wounds:209,other:31},{date:"1855-07-01T07:00:00.000Z",army_size:42647,disease:382,wounds:134,other:33},{date:"1855-08-01T07:00:00.000Z",army_size:44614,disease:483,wounds:164,other:25},{date:"1855-09-01T07:00:00.000Z",army_size:47751,disease:189,wounds:276,other:20},{date:"1855-10-01T07:00:00.000Z",army_size:46852,disease:128,wounds:53,other:18},{date:"1855-11-01T07:00:00.000Z",army_size:37853,disease:178,wounds:33,other:32},{date:"1855-12-01T08:00:00.000Z",army_size:43217,disease:91,wounds:18,other:28},{date:"1856-01-01T08:00:00.000Z",army_size:44212,disease:42,wounds:2,other:48},{date:"1856-02-01T08:00:00.000Z",army_size:43485,disease:24,wounds:0,other:19},{date:"1856-03-01T08:00:00.000Z",army_size:46140,disease:15,wounds:0,other:35}]});var fM=s((Ise,oM)=>{"use strict";var $Sr=_n(),QSr=uM();function KSr(){return $Sr(QSr)}oM.exports=KSr});var cM=s((_se,vM)=>{"use strict";var qi={};qi.AFINN_111=$F();qi.AFINN_96=rM();qi.ANSCOMBES_QUARTET=iM();qi.HERNDON_VENUS_SEMIDIAMETERS=sM();qi.NIGHTINGALES_ROSE=fM();vM.exports=qi});var pM=s((Lse,lM)=>{"use strict";var rTr=It(),eTr=C(),j1=E();function tTr(r,e,t){var i,n;return j1(r)||j1(e)||j1(t)||t<0?NaN:t===0?r<e?0:1:(i=t*eTr(2),n=r-e,.5*rTr(-n/i))}lM.exports=tTr});var mM=s((Pse,gM)=>{"use strict";var iTr=S(),nTr=Oa().factory,C1=E(),aTr=C(),sTr=It();function uTr(r,e){var t;if(C1(r)||C1(e)||e<0)return iTr(NaN);if(e===0)return nTr(r);return t=e*aTr(2),i;function i(n){var a;return C1(n)?NaN:(a=n-r,.5*sTr(-a/t))}}gM.exports=uTr});var yM=s((Rse,hM)=>{"use strict";var oTr=w(),dM=pM(),fTr=mM();oTr(dM,"factory",fTr);hM.exports=dM});var wM=s((Fse,bM)=>{"use strict";var qM=E(),vTr=P(),cTr=We(),lTr=Jo();function pTr(r,e){return qM(r)||qM(e)||e<=0?NaN:.5*vTr(cTr*lTr*e*e)}bM.exports=pTr});var NM=s((Mse,EM)=>{"use strict";var gTr=wM();EM.exports=gTr});var SM=s((Bse,OM)=>{"use strict";var AM=E();function mTr(r,e){return AM(r)||AM(e)||e<=0?NaN:0}OM.exports=mTr});var IM=s((kse,TM)=>{"use strict";var dTr=SM();TM.exports=dTr});var LM=s((jse,_M)=>{"use strict";var hTr=Q(),yTr=[qTr,bTr,wTr,ETr,NTr,ATr,OTr,STr,TTr,ITr,_Tr,LTr,PTr,RTr,FTr,MTr,BTr,kTr,jTr,CTr,GTr,VTr,UTr,HTr,WTr,DTr,zTr,XTr,JTr,xTr,YTr,ZTr,$Tr,QTr,KTr,rIr,eIr,tIr,iIr,nIr,aIr,sIr,uIr,oIr,fIr,vIr,cIr,lIr,pIr,gIr,mIr,dIr,hIr,yIr,qIr,bIr,wIr,EIr,NIr,AIr,OIr,SIr,TIr,IIr,_Ir,LIr,PIr,RIr,FIr,MIr,BIr,kIr,jIr,CIr,GIr,VIr,UIr,HIr,WIr,DIr,zIr,XIr,JIr,xIr,YIr,ZIr,$Ir,QIr,KIr,r_r,e_r,t_r,i_r,n_r,a_r,s_r,u_r,o_r,f_r,v_r,c_r];function qTr(r){return .0007087803245410644+(.000712340910470263+(35779077297597742e-22+(17403143962587938e-24+(8171066004730779e-26+(3688502236043496e-28+15917038551111112e-31*r)*r)*r)*r)*r)*r}function bTr(r){return .0021479143208285143+(.0007268640236737999+(36843175430938994e-22+(180718412721492e-22+(8549644929604033e-26+(3885203751853429e-28+16868473576888889e-31*r)*r)*r)*r)*r)*r}function wTr(r){return .0036165255935630175+(.0007418209232355551+(3794831995752824e-21+(18771627021793087e-24+(8948471512241509e-26+(4093585851777244e-28+1787206146488889e-30*r)*r)*r)*r)*r)*r}function ETr(r){return .005115498386003198+(.0007572284073479166+(390964257267357e-20+(1950416870430047e-23+(93687503063179e-24+(43143925959079665e-29+18939926435555556e-31*r)*r)*r)*r)*r)*r}function NTr(r){return .006645751317267305+(.0007731040605444745+(4028951058939944e-21+(20271233238288382e-24+(981176313217091e-25+(4548420740601775e-28+2007635221333333e-30*r)*r)*r)*r)*r)*r}function ATr(r){return .008208238997024121+(.0007894662961188171+(4152970155262265e-21+(21074693344544657e-24+(10278874108587318e-26+(4796520139061334e-28+21285907413333335e-31*r)*r)*r)*r)*r)*r}function OTr(r){return .009803953727535219+(.0008063344010834284+(4281924132973699e-21+(21916534346907168e-24+(10771535136565471e-26+(5059597262369282e-28+22573462684444446e-31*r)*r)*r)*r)*r)*r}function STr(r){return .011433927298290302+(.0008237285838319657+(4416049531176544e-21+(22798861426211987e-24+(1129129174587924e-25+(5338618936581688e-28+23944209546666666e-31*r)*r)*r)*r)*r)*r}function TTr(r){return .013099232878814654+(.0008416700246790696+(4555595898845751e-21+(23723907357214174e-24+(11839789326602696e-26+(5634616306755024e-28+25403679644444446e-31*r)*r)*r)*r)*r)*r}function ITr(r){return .014800987015587536+(.0008601809294634594+(4700826584881687e-21+(24694040760197315e-24+(12418779768752298e-26+(5948689037032026e-28+2695776456888889e-30*r)*r)*r)*r)*r)*r}function _Tr(r){return .01654035173939407+(.0008792845864124146+(4852019579300175e-21+(2571177490088171e-23+(13030128534230821e-26+(6282009758687478e-28+28612737351111112e-31*r)*r)*r)*r)*r)*r}function LTr(r){return .018318536789842393+(.0008990054264789172+(5009468408955337e-21+(2677977707421807e-23+(13675822186304616e-26+(6635828774535271e-28+30375273884444443e-31*r)*r)*r)*r)*r)*r}function PTr(r){return .020136801964214277+(.0009193690873767368+(51734830914104276e-22+(27900878609710433e-24+(1435797640280904e-25+(7011479031104373e-28+32252476e-22*r)*r)*r)*r)*r)*r}function RTr(r){return .021996459598282742+(.0009404024815536678+(5344391150804117e-21+(29078085538049375e-24+(1507884450032973e-25+(741038136474992e-27+3425189232e-24*r)*r)*r)*r)*r)*r}function FTr(r){return .02389887718722632+(.0009621338683590018+(55225386998049015e-22+(30314589961047687e-24+(15840826497296334e-26+(7834050047241445e-28+36381553564444445e-31*r)*r)*r)*r)*r)*r}function MTr(r){return .025845480155298518+(.0009845929306782012+(5708291592005185e-21+(3161378216916483e-23+(1664647874552963e-25+(828409859287854e-27+3864997576888889e-30*r)*r)*r)*r)*r)*r}function BTr(r){return .027837754783474698+(.0010078108563256892+(59020366493792216e-22+(3297926355324652e-23+(17498524159268457e-26+(8762245912484253e-28+4106620648888889e-30*r)*r)*r)*r)*r)*r}function kTr(r){return .029877251304899308+(.001031820424505735+(6104182969716206e-21+(3441486035954272e-23+(1839986307293409e-25+(9270322736636504e-28+43639844053333335e-31*r)*r)*r)*r)*r)*r}function jTr(r){return .03196558717859645+(.0010566560976716574+(6315163319241458e-21+(3592463833952192e-23+(19353584758781173e-26+(9810278385988926e-28+46381060817777776e-31*r)*r)*r)*r)*r)*r}function CTr(r){return .03410445055258834+(.0010823541191350532+(6535435615955393e-21+(37512918348533524e-24+(20362979635817883e-26+(10384187833037281e-28+4930062526222222e-30*r)*r)*r)*r)*r)*r}function GTr(r){return .036295603928292425+(.0011089526167995269+(6765484509551836e-21+(3918429294991359e-23+(21431552202133775e-26+(10994259106646732e-28+5240994910222222e-30*r)*r)*r)*r)*r)*r}function VTr(r){return .03854088803884051+(.001136491713417542+(7005823064124631e-21+(40943644083718584e-24+(22563034723692883e-26+(11642841011361993e-28+5572109287111111e-30*r)*r)*r)*r)*r)*r}function UTr(r){return .04084222595478596+(.0011650136437945675+(72569945502343e-19+(4279616186185504e-23+(23761401711005023e-26+(12332431172381557e-28+5924680236444444e-30*r)*r)*r)*r)*r)*r}function HTr(r){return .04320162743154022+(.0011945628793917271+(751957435328492e-20+(4474736455396099e-23+(2503088521647295e-25+(13065684400300477e-28+6300053285333334e-30*r)*r)*r)*r)*r)*r}function WTr(r){return .04562119351381047+(.001225186260806753+(7794172005555192e-21+(4680311983095446e-23+(26375990983978426e-26+(1384542137097712e-27+66996477404444446e-31*r)*r)*r)*r)*r)*r}function DTr(r){return .048103121413299865+(.0012569331386432195+(8081433349636768e-21+(4896966733568202e-23+(27801515481905746e-26+(14674637611609885e-28+7124958935111111e-30*r)*r)*r)*r)*r)*r}function zTr(r){return .05064970967698334+(.0012898555233099055+(838204284145688e-20+(5125364265255184e-23+(29312563849675507e-26+(15556512782814827e-28+7577560782222223e-30*r)*r)*r)*r)*r)*r}function XTr(r){return .053263363664388864+(.0013240082443256975+(8696726001500767e-21+(536621027503968e-22+(309145687866348e-24+(16494420240828494e-28+8059107964444444e-30*r)*r)*r)*r)*r)*r}function JTr(r){return .05594660135350001+(.001359449119740819+(9026252023301638e-21+(56202552975056696e-24+(3261331041050314e-25+(17491936862246368e-28+8571338168888888e-30*r)*r)*r)*r)*r)*r}function xTr(r){return .058702059496154084+(.0013962391363223647+(9371436548731279e-21+(58882975670265285e-24+(34414937110591756e-26+(1855285310975186e-27+911607367111111e-29*r)*r)*r)*r)*r)*r}function YTr(r){return .061532500145144775+(.0014344426411912014+(9733144620101681e-21+(6171186050734718e-23+(363259874182953e-24+(19681183310134517e-28+969522384e-23*r)*r)*r)*r)*r)*r}function ZTr(r){return .06444081757665329+(.0014741275456383132+(10112293819576438e-21+(6469823660593325e-23+(38353412915303665e-26+(2088117611438512e-27+1031078448e-23*r)*r)*r)*r)*r)*r}function $Tr(r){return .06743004563313039+(.001515365541891654+(10509857606888329e-21+(6785170652936334e-23+(4050460219481114e-25+(22157325110542536e-28+10964842115555555e-30*r)*r)*r)*r)*r)*r}function QTr(r){return .07050336551333886+(.001558232333649571+(1092686886686523e-20+(7118248223961351e-23+(42787405890153386e-26+(2351437952227442e-27+11659571751111111e-30*r)*r)*r)*r)*r)*r}function KTr(r){return .0736641140379446+(.001602807881243882+(11364423678778208e-21+(7470142309742318e-23+(4521016277747649e-25+(2495735500408857e-27+12397238257777777e-30*r)*r)*r)*r)*r)*r}function rIr(r){return .07691579242081956+(.0016491766623447889+(11823685320041301e-21+(7842007599378154e-23+(4778172695691648e-25+(26491544403815725e-28+13180196462222222e-30*r)*r)*r)*r)*r)*r}function eIr(r){return .08026207557809462+(.0016974279491709504+(12305888517309891e-21+(8235071769897904e-23+(5051149610985711e-25+(281225284976269e-26+14010889635555555e-30*r)*r)*r)*r)*r)*r}function tIr(r){return .08370682200898036+(.0017476561032212657+(12812343958540764e-21+(8650639951503644e-23+(5340944082386946e-25+(29856186620887555e-28+1489185159111111e-29*r)*r)*r)*r)*r)*r}function iIr(r){return .08725408428446171+(.0017999608886001962+(13344443080089493e-21+(90900994316429e-21+(5648613497261646e-25+(3169870708003396e-27+15825697795555556e-30*r)*r)*r)*r)*r)*r}function nIr(r){return .09090812018217274+(.00185444780506577+(1390366314342612e-20+(9554924606254991e-23+(5975278712524205e-25+(336565973660991e-26+16815130613333334e-30*r)*r)*r)*r)*r)*r}function aIr(r){return .09467340450807549+(.0019112284419887304+(14491572616545005e-21+(10046682186333614e-23+(63221272959791e-23+(3573669397558913e-27+1786293159111111e-29*r)*r)*r)*r)*r)*r}function sIr(r){return .09855464164800445+(.0019704208544725622+(15109836875625445e-21+(10567036667675984e-23+(6690416864001935e-25+(3794617185082434e-27+1897195904e-23*r)*r)*r)*r)*r)*r}function uIr(r){return .1025567788947009+(.0020321499629472857+(1576022424296218e-20+(11117756071353507e-23+(7081478511009766e-25+(4029255327663256e-27+20145143075555556e-30*r)*r)*r)*r)*r)*r}function oIr(r){return .10668502059865094+(.002096547977614873+(16444612377624982e-21+(11700717962026153e-23+(7496720325093842e-25+(42783716186085925e-28+2138547936e-23*r)*r)*r)*r)*r)*r}function fIr(r){return .11094484319386444+(.002163754849190817+(17164995035719656e-21+(12317915750735938e-23+(7937630983149963e-25+(4542790176310636e-27+22696025653333333e-30*r)*r)*r)*r)*r)*r}function vIr(r){return .11534201115268805+(.002233918747454642+(17923489217504226e-21+(12971465288245997e-23+(8405783418038907e-25+(48233721206418025e-28+24079890062222222e-30*r)*r)*r)*r)*r)*r}function cIr(r){return .11988259392684095+(.002307196569191869+(18722342718958937e-21+(13663611754337958e-23+(8902838548849328e-25+(5121016156922585e-27+2554022711111111e-29*r)*r)*r)*r)*r)*r}function lIr(r){return .12457298393509812+(.0023837544771809576+(1956394210571161e-20+(1439673684773947e-22+(9430549064645925e-25+(5436659058313422e-27+2708022592e-23*r)*r)*r)*r)*r)*r}function pIr(r){return .12941991566142438+(.002463768471950886+(2045082112747588e-20+(15173366280523906e-23+(9990763250638903e-25+(5771276031135163e-27+28703099555555555e-30*r)*r)*r)*r)*r)*r}function gIr(r){return .13443048593088697+(.0025474249981080823+(21385669591362916e-21+(15996177579900442e-23+(10585428844575133e-25+(6125880953678788e-27+3041208014222222e-29*r)*r)*r)*r)*r)*r}function mIr(r){return .13961217543434562+(.0026349215871051762+(22371342712572568e-21+(16868008199296823e-23+(11216596910444997e-25+(6501526475309089e-27+3221039450666667e-29*r)*r)*r)*r)*r)*r}function dIr(r){return .144972871576738+(.002726467538398244+(2341087096105095e-20+(17791863939526378e-23+(11886425714330958e-25+(68993039665054284e-28+34101266222222225e-30*r)*r)*r)*r)*r)*r}function hIr(r){return .15052089272774619+(.0028222846410136237+(24507470422713398e-21+(18770927679626137e-23+(1259718458758337e-24+(7320343304922983e-27+36087889048888887e-30*r)*r)*r)*r)*r)*r}function yIr(r){return .1562650139577461+(.0029226079376196627+(2566455369376845e-20+(19808568415654462e-23+(13351257759815557e-25+(7765812489104676e-27+3817342003555556e-29*r)*r)*r)*r)*r)*r}function qIr(r){return .16221449434620738+(.0030276865332726477+(26885741326534563e-21+(20908350604346383e-23+(1415114814424073e-24+(8236917066597432e-27+4036095745777778e-29*r)*r)*r)*r)*r)*r}function bIr(r){return .1683791059541213+(.0031377844510793083+(28174873844911173e-21+(22074043807045782e-23+(1499948105599609e-24+(8734899366193081e-27+4265352897777778e-29*r)*r)*r)*r)*r)*r}function wIr(r){return .1747691645565937+(.0032531815370903066+(29536024347344365e-21+(23309632627767074e-23+(15899007843582445e-25+(9261037523542736e-27+45054073102222224e-30*r)*r)*r)*r)*r)*r}function EIr(r){return .18139556223643702+(.0033741744168097+(309735117147095e-19+(2461932693759229e-22+(16852609412267751e-25+(981664429428549e-26+4756541809777778e-29*r)*r)*r)*r)*r)*r}function NIr(r){return .18826980194443665+(.0035010775057740316+(3249191444001427e-20+(2600757237588632e-22+(17863299617388377e-25+(10403065638343878e-27+5019026583111111e-29*r)*r)*r)*r)*r)*r}function AIr(r){return .19540403413693969+(.0036342240767211326+(34096085096200906e-21+(27479061117017636e-23+(18934228504790033e-25+(11021679075323599e-27+5293117173333333e-29*r)*r)*r)*r)*r)*r}function OIr(r){return .20281109560651886+(.00377396738593236+(3579116545759241e-20+(29038742889416174e-23+(20068685374849e-22+(11673891799578381e-27+55790523093333335e-30*r)*r)*r)*r)*r)*r}function SIr(r){return .21050455062669335+(.003920681861392565+(37582602289680105e-21+(30691836231886877e-23+(21270101645763676e-25+(12361138551062899e-27+5877052016e-23*r)*r)*r)*r)*r)*r}function TIr(r){return .21849873453703333+(.004074764355468959+(3947616382098671e-20+(3244383997013992e-22+(2254205349151868e-24+(13084879235290859e-27+6187315326222222e-29*r)*r)*r)*r)*r)*r}function IIr(r){return .2268087999004323+(.004236635464862852+(41477956909656896e-21+(3430054489450281e-22+(23888264229264067e-25+(13846596292818514e-27+6510018375111112e-29*r)*r)*r)*r)*r)*r}function _Ir(r){return .23545076536988704+(.004406740920636517+(435944449162247e-19+(36268045617760415e-23+(253126064308532e-23+(14647791812837902e-27+6845312263111111e-29*r)*r)*r)*r)*r)*r}function LIr(r){return .24444156740777434+(.004585553051160578+(45832466292683086e-21+(3835275259003303e-22+(26819103733055602e-25+(15489984390884758e-27+7193320636444444e-29*r)*r)*r)*r)*r)*r}function PIr(r){return .25379911500634267+(.004773572320865003+(48199253896534185e-21+(40561404245564733e-23+(28411932320871164e-25+(1637470573645832e-26+7554137982222222e-29*r)*r)*r)*r)*r)*r}function RIr(r){return .26354234756393613+(.0049713289477083785+(5070245503693037e-20+(42901079254268185e-23+(3009542205890048e-24+(1730349702534734e-26+7927827336888888e-29*r)*r)*r)*r)*r)*r}function FIr(r){return .27369129607732345+(.005179384602305264+(533501522583266e-19+(4537920884886502e-22+(3187405724581438e-24+(1827790501024511e-26+8314418236444444e-29*r)*r)*r)*r)*r)*r}function MIr(r){return .28426714781640317+(.005398334191669514+(5615088486525581e-20+(4800358919649474e-22+(33752476967570798e-25+(19299477888083468e-27+8713904913777777e-29*r)*r)*r)*r)*r)*r}function BIr(r){return .2952923146534852+(.0056288077305420795+(5911367118991331e-20+(5078239378174484e-22+(35735475025851714e-25+(2036976093701707e-26+9126244261333333e-29*r)*r)*r)*r)*r)*r}function kIr(r){return .3067905052252884+(.00587147230327454+(6224803160219768e-20+(5372418576620094e-22+(3782799941896024e-24+(2149029193044454e-26+9551353918222223e-29*r)*r)*r)*r)*r)*r}function jIr(r){return .3187868011117332+(.00612703411923391+(6556401225970764e-20+(5683793028783774e-22+(4003515135339238e-24+(22662596341239295e-27+9989110976e-23*r)*r)*r)*r)*r)*r}function CIr(r){return .33130773722152623+(.006396240664679808+(690722095929424e-19+(6013300666188594e-22+(4236218376588347e-24+(23888182347073697e-27+10439349811555555e-29*r)*r)*r)*r)*r)*r}function GIr(r){return .34438138658041334+(.0066798829540414+(7278379551860356e-20+(636192204432288e-21+(4481449933651445e-24+(25168535651285476e-27+10901861383111111e-29*r)*r)*r)*r)*r)*r}function VIr(r){return .35803744972380175+(.006978797883488269+(7671054337145482e-20+(6730681530891739e-22+(4739764797584523e-24+(2650511414114305e-26+11376390933333332e-29*r)*r)*r)*r)*r)*r}function UIr(r){return .37230734890119727+(.007293870689646138+(8086485454267072e-20+(7120648471806269e-22+(50117323769745884e-25+(27899342394100073e-27+11862637614222222e-29*r)*r)*r)*r)*r)*r}function HIr(r){return .3872243273055545+(.00762603751625498+(8525978581000461e-20+(7532938330517133e-22+(5297936136838812e-24+(2935260605416409e-26+12360253370666666e-29*r)*r)*r)*r)*r)*r}function WIr(r){return .4028235535461694+(.007976288091502973+(8990907734243825e-20+(7968713796195619e-22+(55989731807360405e-25+(30866246101464866e-27+12868841946666668e-29*r)*r)*r)*r)*r)*r}function DIr(r){return .4191422315891379+(.008345668518695046+(9482718135925016e-20+(8429185856178314e-22+(5915453775108349e-24+(3244155303434747e-26+1338795794311111e-28*r)*r)*r)*r)*r)*r}function zIr(r){return .43621971639463786+(.00873528418282895+(.000100029291420668+(8915614828021988e-22+(624800081507886e-23+(3407976098345888e-26+13917107176888888e-29*r)*r)*r)*r)*r)*r}function XIr(r){return .4540976354853433+(.009146302775554824+(.00010553137232446167+(9429311346463863e-22+(6597249231221996e-24+(35782041795476564e-27+14455745872e-23*r)*r)*r)*r)*r)*r}function JIr(r){return .4728200166851233+(.009579957440886046+(.00011135019058000067+(9971637300550903e-22+(6963845336995697e-24+(37549499088161346e-27+1500328071288889e-28*r)*r)*r)*r)*r)*r}function xIr(r){return .4924334222717984+(.010037550043909497+(.00011750334542845235+(10544006716188967e-22+(7348446116824222e-24+(3938316232643575e-26+15559069118222223e-29*r)*r)*r)*r)*r)*r}function YIr(r){return .5129870897920926+(.010520454564612427+(.00012400930037494997+(11147886579371265e-22+(775171845505687e-23+(41283980931872625e-27+1612241968e-22*r)*r)*r)*r)*r)*r}function ZIr(r){return .5345330797910137+(.011030120618800727+(.0001308874151957227+(11784797595374515e-22+(8174338306304482e-24+(43252818449517084e-27+1669259264e-22*r)*r)*r)*r)*r)*r}function $Ir(r){return .557126430711693+(.011568077107929736+(.00013815797838036652+(12456314879260905e-22+(8616989807896932e-24+(4529044681153965e-26+17268801084444443e-29*r)*r)*r)*r)*r)*r}function QIr(r){return .5808253212251933+(.012135935999503878+(.0001458422399666584+(1316406857309571e-21+(9080364335510602e-24+(4739754071312462e-26+1785021160888889e-28*r)*r)*r)*r)*r)*r}function KIr(r){return .6056912402529337+(.01273539623952555+(.00015396244472258864+(13909744385382817e-22+(9565159503230623e-24+(4957467212766904e-26+18435945564444444e-29*r)*r)*r)*r)*r)*r}function r_r(r){return .6317891649471572+(.013368247798287032+(.00016254186562762076+(14695084048334055e-22+(10072078109604152e-24+(5182230499568071e-26+19025081422222223e-29*r)*r)*r)*r)*r)*r}function e_r(r){return .6591877468972532+(.014036375850601992+(.00017160483760259707+(15521885688723188e-22+(1060182703153528e-23+(5414079010583752e-26+19616655146666667e-29*r)*r)*r)*r)*r)*r}function t_r(r){return .6879595068317443+(.014741765091365868+(.00018117679143520433+(16392004108230584e-22+(11155116068018043e-24+(5653036019492569e-26+20209663662222222e-29*r)*r)*r)*r)*r)*r}function i_r(r){return .7181810380872997+(.015486504187117112+(.00019128428784550924+(17307350969359975e-22+(11732656736113608e-24+(5899112528756384e-26+20803065333333334e-29*r)*r)*r)*r)*r)*r}function n_r(r){return .7499332191172625+(.016272790364044783+(.00020195505163377912+(18269894883203348e-22+(12335161021630225e-24+(6152306831216908e-26+21395783431111112e-29*r)*r)*r)*r)*r)*r}function a_r(r){return .7833014353128349+(.01710293413265243+(.00021321800585063328+(19281661395543912e-22+(12963340087354342e-24+(6412604099806635e-26+21986708942222223e-29*r)*r)*r)*r)*r)*r}function s_r(r){return .8183758104102381+(.017979364149044223+(.0002251033059275313+(20344732868018175e-22+(1361790294183995e-23+(6679976008397248e-26+2257470126222222e-28*r)*r)*r)*r)*r)*r}function u_r(r){return .8552514477568512+(.01890463221254756+(.00023764237370371255+(2146124825130639e-21+(14299555071870523e-24+(6954380386469418e-26+23158593688888887e-29*r)*r)*r)*r)*r)*r}function o_r(r){return .8940286817084994+(.0198814183991272+(.00025086793128395994+(22633402747585233e-22+(1500899704211653e-23+(7235760907504394e-26+23737194737777777e-29*r)*r)*r)*r)*r)*r}function f_r(r){return .9348133394287079+(.02091253632978037+(.0002648140346599848+(23863447359754924e-22+(15746923065472183e-24+(7524046814172015e-26+24309291271111114e-29*r)*r)*r)*r)*r)*r}function v_r(r){return .9777170133588503+(.02200093857283048+(.0002795161070268238+(25153688325245316e-22+(1651401954782282e-23+(7819152682936823e-26+24873652355555557e-29*r)*r)*r)*r)*r)*r}function c_r(){return 1}function l_r(r){var e=hTr(r),t=yTr[e];return t(2*r-(2*e+1))}_M.exports=l_r});var BM=s((Cse,MM)=>{"use strict";var PM=nr(),p_r=L(),RM=LM(),FM=.5641895835477563;function g_r(r){var e;return r!==r?NaN:r>=0?r>50?r>5e7?FM/r:(e=r*r,FM*(e*(e+4.5)+2)/(r*(e*(e+5)+3.75))):RM(400/(4+r)):r<-26.7?p_r:(e=r*r,r<-6.1?2*PM(e):2*PM(e)-RM(400/(4-r)))}MM.exports=g_r});var G1=s((Gse,kM)=>{"use strict";var m_r=BM();kM.exports=m_r});var GM=s((Vse,CM)=>{"use strict";var d_r=P(),h_r=De(),y_r=Za(),q_r=It(),b_r=G1(),w_r=U(),V1=E(),jM=.7071067811865475;function E_r(r,e,t){var i;return V1(r)||V1(e)||V1(t)||t<0?NaN:t===0?r<e?w_r:0:(i=(r-e)/t,i<-1?d_r(b_r(-i*jM)/2)-y_r(i)/2:h_r(-q_r(i*jM)/2))}CM.exports=E_r});var HM=s((Use,UM)=>{"use strict";var VM=E(),N_r=U();function A_r(r,e){return VM(r)||VM(e)?NaN:r<e?N_r:0}UM.exports=A_r});var zM=s((Hse,DM)=>{"use strict";var O_r=S(),WM=E(),S_r=U();function T_r(r){if(WM(r))return O_r(NaN);return e;function e(t){return WM(t)?NaN:t<r?S_r:0}}DM.exports=T_r});var xM=s((Wse,JM)=>{"use strict";var I_r=w(),XM=HM(),__r=zM();I_r(XM,"factory",__r);JM.exports=XM});var QM=s((Dse,$M)=>{"use strict";var L_r=S(),P_r=xM().factory,YM=E(),R_r=De(),F_r=Za(),M_r=It(),B_r=G1(),k_r=P(),ZM=.7071067811865475;function j_r(r,e){if(YM(r)||YM(e)||e<0)return L_r(NaN);if(e===0)return P_r(r);return t;function t(i){var n=(i-r)/e;return n<-1?k_r(B_r(-n*ZM)/2)-F_r(n)/2:R_r(-M_r(n*ZM)/2)}}$M.exports=j_r});var eB=s((zse,rB)=>{"use strict";var C_r=w(),KM=GM(),G_r=QM();C_r(KM,"factory",G_r);rB.exports=KM});var U1=s((Xse,tB)=>{"use strict";var V_r=1.8378770664093456;tB.exports=V_r});var aB=s((Jse,nB)=>{"use strict";var U_r=P(),iB=W(),H_r=U1(),W_r=U(),D_r=L(),H1=E();function z_r(r,e,t){var i,n,a;return H1(r)||H1(e)||H1(t)||t<0?NaN:t===0?r===e?D_r:W_r:(i=iB(t,2),n=-.5*(2*U_r(t)+H_r),a=-1/(2*i),n+a*iB(r-e,2))}nB.exports=z_r});var oB=s((xse,uB)=>{"use strict";var X_r=L(),J_r=U(),sB=E();function x_r(r,e){return sB(r)||sB(e)?NaN:r===e?X_r:J_r}uB.exports=x_r});var cB=s((Yse,vB)=>{"use strict";var Y_r=S(),Z_r=L(),$_r=U(),fB=E();function Q_r(r){if(fB(r))return Y_r(NaN);return e;function e(t){return fB(t)?NaN:t===r?Z_r:$_r}}vB.exports=Q_r});var gB=s((Zse,pB)=>{"use strict";var K_r=w(),lB=oB(),rLr=cB();K_r(lB,"factory",rLr);pB.exports=lB});var yB=s(($se,hB)=>{"use strict";var eLr=S(),tLr=gB().factory,iLr=U1(),mB=E(),dB=W(),nLr=P();function aLr(r,e){var t,i,n;if(mB(r)||mB(e)||e<0)return eLr(NaN);if(e===0)return tLr(r);return t=dB(e,2),i=-.5*(2*nLr(e)+iLr),n=-1/(2*t),a;function a(u){return i+n*dB(u-r,2)}}hB.exports=aLr});var wB=s((Qse,bB)=>{"use strict";var sLr=w(),qB=aB(),uLr=yB();sLr(qB,"factory",uLr);bB.exports=qB});var AB=s((Kse,NB)=>{"use strict";var EB=E();function oLr(r,e){return EB(r)||EB(e)||e<=0?NaN:r}NB.exports=oLr});var SB=s((rue,OB)=>{"use strict";var fLr=AB();OB.exports=fLr});var _B=s((eue,IB)=>{"use strict";var TB=E();function vLr(r,e){return TB(r)||TB(e)||e<=0?NaN:r}IB.exports=vLr});var PB=s((tue,LB)=>{"use strict";var cLr=_B();LB.exports=cLr});var FB=s((iue,RB)=>{"use strict";var W1=E(),lLr=nr(),pLr=W();function gLr(r,e,t){return W1(r)||W1(e)||W1(t)||t<=0?NaN:lLr(e*r+.5*pLr(t*r,2))}RB.exports=gLr});var BB=s((nue,MB)=>{"use strict";var mLr=S(),D1=E(),dLr=nr(),hLr=W();function yLr(r,e){if(D1(r)||D1(e)||e<=0)return mLr(NaN);return t;function t(i){return D1(i)?NaN:dLr(r*i+.5*hLr(e*i,2))}}MB.exports=yLr});var CB=s((aue,jB)=>{"use strict";var qLr=w(),kB=FB(),bLr=BB();qLr(kB,"factory",bLr);jB.exports=kB});var UB=s((sue,VB)=>{"use strict";var GB=E();function wLr(r,e){return GB(r)||GB(e)||e<=0?NaN:r}VB.exports=wLr});var WB=s((uue,HB)=>{"use strict";var ELr=UB();HB.exports=ELr});var XB=s((oue,zB)=>{"use strict";var NLr=nr(),DB=W(),ALr=C(),OLr=We(),SLr=L(),z1=E();function TLr(r,e,t){var i,n,a;return z1(r)||z1(e)||z1(t)||t<0?NaN:t===0?r===e?SLr:0:(i=DB(t,2),n=1/ALr(i*OLr),a=-1/(2*i),n*NLr(a*DB(r-e,2)))}zB.exports=TLr});var YB=s((fue,xB)=>{"use strict";var ILr=L(),JB=E();function _Lr(r,e){return JB(r)||JB(e)?NaN:r===e?ILr:0}xB.exports=_Lr});var QB=s((vue,$B)=>{"use strict";var LLr=S(),PLr=L(),ZB=E();function RLr(r){if(ZB(r))return LLr(NaN);return e;function e(t){return ZB(t)?NaN:t===r?PLr:0}}$B.exports=RLr});var ek=s((cue,rk)=>{"use strict";var FLr=w(),KB=YB(),MLr=QB();FLr(KB,"factory",MLr);rk.exports=KB});var nk=s((lue,ik)=>{"use strict";var BLr=S(),kLr=ek().factory,X1=E(),jLr=C(),CLr=nr(),tk=W(),GLr=We();function VLr(r,e){var t,i,n;if(X1(r)||X1(e)||e<0)return BLr(NaN);if(e===0)return kLr(r);return t=tk(e,2),i=1/jLr(t*GLr),n=-1/(2*t),a;function a(u){return X1(u)?NaN:i*CLr(n*tk(u-r,2))}}ik.exports=VLr});var uk=s((pue,sk)=>{"use strict";var ULr=w(),ak=XB(),HLr=nk();ULr(ak,"factory",HLr);sk.exports=ak});var fk=s((gue,ok)=>{"use strict";function WLr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}ok.exports=WLr});var ck=s((mue,vk)=>{"use strict";function DLr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}vk.exports=DLr});var pk=s((due,lk)=>{"use strict";function zLr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}lk.exports=zLr});var mk=s((hue,gk)=>{"use strict";function XLr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}gk.exports=XLr});var hk=s((yue,dk)=>{"use strict";function JLr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}dk.exports=JLr});var wk=s((que,bk)=>{"use strict";var xLr=E(),yk=C(),qk=P(),YLr=L(),ZLr=U(),$Lr=fk(),QLr=ck(),KLr=pk(),rPr=mk(),ePr=hk(),tPr=.08913147449493408,iPr=2.249481201171875,nPr=.807220458984375,aPr=.9399557113647461,sPr=.9836282730102539;function uPr(r){var e,t,i,n,a,u;return xLr(r)?NaN:r===1?YLr:r===-1?ZLr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),u=$Lr(t),e*(a*tPr+a*u)):n>=.25?(a=yk(-2*qk(n)),n-=.25,u=QLr(n),e*(a/(iPr+u))):(n=yk(-qk(n)),n<3?(i=n-1.125,u=KLr(i),e*(nPr*n+u*n)):n<6?(i=n-3,u=rPr(i),e*(aPr*n+u*n)):(i=n-6,u=ePr(i),e*(sPr*n+u*n))))}bk.exports=uPr});var J1=s((bue,Ek)=>{"use strict";var oPr=wk();Ek.exports=oPr});var Ak=s((wue,Nk)=>{"use strict";var fPr=J1(),x1=E(),vPr=C();function cPr(r,e,t){var i,n;return x1(e)||x1(t)||x1(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*vPr(2),i+n*fPr(2*r-1))}Nk.exports=cPr});var Sk=s((Eue,Ok)=>{"use strict";var lPr=E();function pPr(r,e){return lPr(r)||r<0||r>1?NaN:e}Ok.exports=pPr});var _k=s((Nue,Ik)=>{"use strict";var gPr=S(),Tk=E();function mPr(r){if(Tk(r))return gPr(NaN);return e;function e(t){return Tk(t)||t<0||t>1?NaN:r}}Ik.exports=mPr});var Y1=s((Aue,Pk)=>{"use strict";var dPr=w(),Lk=Sk(),hPr=_k();dPr(Lk,"factory",hPr);Pk.exports=Lk});var Fk=s((Oue,Rk)=>{"use strict";var yPr=S(),qPr=Y1().factory,bPr=J1(),Z1=E(),wPr=C();function EPr(r,e){var t,i;if(Z1(r)||Z1(e)||e<0)return yPr(NaN);return e===0&&qPr(r),t=r,i=e*wPr(2),n;function n(a){return Z1(a)||a<0||a>1?NaN:t+i*bPr(2*a-1)}}Rk.exports=EPr});var $1=s((Sue,Bk)=>{"use strict";var NPr=w(),Mk=Ak(),APr=Fk();NPr(Mk,"factory",APr);Bk.exports=Mk});var Ck=s((Tue,jk)=>{"use strict";var kk=E();function OPr(r,e){return kk(r)||kk(e)||e<=0?NaN:0}jk.exports=OPr});var Vk=s((Iue,Gk)=>{"use strict";var SPr=Ck();Gk.exports=SPr});var Wk=s((_ue,Hk)=>{"use strict";var Uk=E();function TPr(r,e){return Uk(r)||Uk(e)||e<=0?NaN:e}Hk.exports=TPr});var zk=s((Lue,Dk)=>{"use strict";var IPr=Wk();Dk.exports=IPr});var xk=s((Pue,Jk)=>{"use strict";var Xk=E();function _Pr(r,e){return Xk(r)||Xk(e)||e<=0?NaN:e*e}Jk.exports=_Pr});var Zk=s((Rue,Yk)=>{"use strict";var LPr=xk();Yk.exports=LPr});var Qk=s((Fue,$k)=>{"use strict";var pr={};pr.normal={};pr.normal.cdf=yM();pr.normal.entropy=NM();pr.normal.kurtosis=IM();pr.normal.logcdf=eB();pr.normal.logpdf=wB();pr.normal.mean=SB();pr.normal.median=PB();pr.normal.mgf=CB();pr.normal.mode=WB();pr.normal.pdf=uk();pr.normal.quantile=$1();pr.normal.skewness=Vk();pr.normal.stdev=zk();pr.normal.variance=Zk();$k.exports=pr});var rj=s((Mue,Kk)=>{"use strict";function PPr(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}Kk.exports=PPr});var s0=s((Bue,ej)=>{"use strict";var RPr=rj();ej.exports=RPr});var ij=s((kue,tj)=>{"use strict";function FPr(r){return r.toLowerCase()}tj.exports=FPr});var bi=s((jue,nj)=>{"use strict";var MPr=ij();nj.exports=MPr});var sj=s((Cue,aj)=>{"use strict";function BPr(r,e,t){return r.replace(e,t)}aj.exports=BPr});var Ht=s((Gue,uj)=>{"use strict";var kPr=sj();uj.exports=kPr});var fj=s((Vue,oj)=>{"use strict";var jPr=typeof String.prototype.trim<"u";oj.exports=jPr});var Q1=s((Uue,vj)=>{"use strict";var CPr=String.prototype.trim;vj.exports=CPr});var gj=s((Hue,pj)=>{"use strict";var cj=Q1(),GPr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,lj="\u180E";function VPr(){return cj.call(GPr)===""&&cj.call(lj)===lj}pj.exports=VPr});var dj=s((Wue,mj)=>{"use strict";var UPr=Ht(),HPr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function WPr(r){return UPr(r,HPr,"$1")}mj.exports=WPr});var yj=s((Due,hj)=>{"use strict";var DPr=Q1();function zPr(r){return DPr.call(r)}hj.exports=zPr});var wi=s((zue,qj)=>{"use strict";var XPr=fj(),JPr=gj(),xPr=dj(),YPr=yj(),K1;XPr&&JPr()?K1=YPr:K1=xPr;qj.exports=K1});var wj=s((Xue,bj)=>{"use strict";var ZPr=s0(),$Pr=bi(),u0=Ht(),QPr=wi(),KPr=/\s+/g,rRr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,eRr=/(?:\s|^)([^\s]+)(?=\s|$)/g,tRr=/([a-z0-9])([A-Z])/g;function iRr(r,e,t){return e=$Pr(e),t===0?e:ZPr(e)}function nRr(r){return r=u0(r,rRr," "),r=u0(r,KPr," "),r=u0(r,tRr,"$1 $2"),r=QPr(r),u0(r,eRr,iRr)}bj.exports=nRr});var Nj=s((Jue,Ej)=>{"use strict";var aRr=wj();Ej.exports=aRr});var Oj=s((xue,Aj)=>{"use strict";var sRr=K().isPrimitive,uRr=q(),oRr=Nj();function fRr(r){if(!sRr(r))throw new TypeError(uRr("invalid argument. First argument must be a string. Value: `%s`.",r));return oRr(r)}Aj.exports=fRr});var Tj=s((Yue,Sj)=>{"use strict";var vRr=Oj();Sj.exports=vRr});var _j=s((Zue,Ij)=>{"use strict";var cRr=K().isPrimitive,lRr=q(),pRr=s0();function gRr(r){if(!cRr(r))throw new TypeError(lRr("invalid argument. First argument must be a string. Value: `%s`.",r));return pRr(r)}Ij.exports=gRr});var Pj=s(($ue,Lj)=>{"use strict";var mRr=_j();Lj.exports=mRr});var Fj=s((Que,Rj)=>{"use strict";function dRr(r){return r.toUpperCase()}Rj.exports=dRr});var Bj=s((Kue,Mj)=>{"use strict";var hRr=Fj();Mj.exports=hRr});var jj=s((roe,kj)=>{"use strict";var yRr=Bj(),r3=Ht(),qRr=wi(),bRr=/\s+/g,wRr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,ERr=/([a-z0-9])([A-Z])/g;function NRr(r){return r=r3(r,wRr," "),r=r3(r,ERr,"$1 $2"),r=qRr(r),r=r3(r,bRr,"_"),yRr(r)}kj.exports=NRr});var Gj=s((eoe,Cj)=>{"use strict";var ARr=jj();Cj.exports=ARr});var Uj=s((toe,Vj)=>{"use strict";var ORr=K().isPrimitive,SRr=q(),TRr=Gj();function IRr(r){if(!ORr(r))throw new TypeError(SRr("invalid argument. Must provide a string. Value: `%s`.",r));return TRr(r)}Vj.exports=IRr});var Wj=s((ioe,Hj)=>{"use strict";var _Rr=Uj();Hj.exports=_Rr});var zj=s((noe,Dj)=>{"use strict";var LRr=bi(),e3=Ht(),PRr=wi(),RRr=/\s+/g,FRr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,MRr=/([a-z0-9])([A-Z])/g;function BRr(r){return r=e3(r,FRr," "),r=e3(r,MRr,"$1 $2"),r=PRr(r),r=e3(r,RRr,"-"),LRr(r)}Dj.exports=BRr});var Jj=s((aoe,Xj)=>{"use strict";var kRr=zj();Xj.exports=kRr});var Yj=s((soe,xj)=>{"use strict";var jRr=K().isPrimitive,CRr=q(),GRr=Jj();function VRr(r){if(!jRr(r))throw new TypeError(CRr("invalid argument. Must provide a string. Value: `%s`.",r));return GRr(r)}xj.exports=VRr});var $j=s((uoe,Zj)=>{"use strict";var URr=Yj();Zj.exports=URr});var Kj=s((ooe,Qj)=>{"use strict";var HRr=K().isPrimitive,WRr=q(),DRr=bi();function zRr(r){if(!HRr(r))throw new TypeError(WRr("invalid argument. Must provide a string. Value: `%s`.",r));return DRr(r)}Qj.exports=zRr});var eC=s((foe,rC)=>{"use strict";var XRr=Kj();rC.exports=XRr});var iC=s((voe,tC)=>{"use strict";var JRr=s0(),xRr=bi(),o0=Ht(),YRr=wi(),ZRr=/\s+/g,$Rr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,QRr=/(?:\s|^)([^\s]+)(?=\s|$)/g,KRr=/([a-z0-9])([A-Z])/g;function rFr(r,e){return JRr(xRr(e))}function eFr(r){return r=o0(r,$Rr," "),r=o0(r,ZRr," "),r=o0(r,KRr,"$1 $2"),r=YRr(r),o0(r,QRr,rFr)}tC.exports=eFr});var aC=s((coe,nC)=>{"use strict";var tFr=iC();nC.exports=tFr});var uC=s((loe,sC)=>{"use strict";var iFr=K().isPrimitive,nFr=q(),aFr=aC();function sFr(r){if(!iFr(r))throw new TypeError(nFr("invalid argument. First argument must be a string. Value: `%s`.",r));return aFr(r)}sC.exports=sFr});var fC=s((poe,oC)=>{"use strict";var uFr=uC();oC.exports=uFr});var cC=s((goe,vC)=>{"use strict";var oFr=bi(),t3=Ht(),fFr=wi(),vFr=/\s+/g,cFr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,lFr=/([a-z0-9])([A-Z])/g;function pFr(r){return r=t3(r,cFr," "),r=t3(r,lFr,"$1 $2"),r=fFr(r),r=t3(r,vFr,"_"),oFr(r)}vC.exports=pFr});var pC=s((moe,lC)=>{"use strict";var gFr=cC();lC.exports=gFr});var mC=s((doe,gC)=>{"use strict";var mFr=K().isPrimitive,dFr=q(),hFr=pC();function yFr(r){if(!mFr(r))throw new TypeError(dFr("invalid argument. Must provide a string. Value: `%s`.",r));return hFr(r)}gC.exports=yFr});var hC=s((hoe,dC)=>{"use strict";var qFr=mC();dC.exports=qFr});var bC=s((yoe,qC)=>{"use strict";var bFr=I(),yC=O(),wFr=vr().isPrimitive,EFr=K().isPrimitive,i3=q();function NFr(r,e){return bFr(e)?yC(e,"flags")&&(r.flags=e.flags,!EFr(r.flags))?new TypeError(i3("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):yC(e,"capture")&&(r.capture=e.capture,!wFr(r.capture))?new TypeError(i3("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(i3("invalid argument. Options argument must be an object. Value: `%s`.",e))}qC.exports=NFr});var f0=s((qoe,EC)=>{"use strict";var AFr=bC(),wC=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function OFr(r){var e,t;if(arguments.length>0){if(e={},t=AFr(e,r),t)throw t;return e.capture?new RegExp("("+wC+")",e.flags):new RegExp(wC,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}EC.exports=OFr});var AC=s((boe,NC)=>{"use strict";var SFr=f0(),TFr=SFr({capture:!0});NC.exports=TFr});var SC=s((woe,OC)=>{"use strict";var IFr=f0(),_Fr=IFr();OC.exports=_Fr});var _C=s((Eoe,IC)=>{"use strict";var TC=w(),n3=f0(),LFr=AC(),PFr=SC();TC(n3,"REGEXP",PFr);TC(n3,"REGEXP_CAPTURE",LFr);IC.exports=n3});var PC=s((Noe,LC)=>{"use strict";var RFr=_C().REGEXP;function FFr(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),RFr.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}LC.exports=FFr});var FC=s((Aoe,RC)=>{"use strict";var MFr=PC();RC.exports=MFr});var BC=s((Ooe,MC)=>{"use strict";var BFr=K().isPrimitive,kFr=q(),jFr=FC();function CFr(r){if(!BFr(r))throw new TypeError(kFr("invalid argument. Must provide a string. Value: `%s`.",r));return jFr(r)}MC.exports=CFr});var jC=s((Soe,kC)=>{"use strict";var GFr=BC();kC.exports=GFr});var GC=s((Toe,CC)=>{"use strict";function VFr(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}CC.exports=VFr});var UC=s((Ioe,VC)=>{"use strict";var UFr=GC();VC.exports=UFr});var WC=s((_oe,HC)=>{"use strict";var HFr=K().isPrimitive,WFr=q(),DFr=UC();function zFr(r){if(!HFr(r))throw new TypeError(WFr("invalid argument. First argument must be a string. Value: `%s`.",r));return DFr(r)}HC.exports=zFr});var zC=s((Loe,DC)=>{"use strict";var XFr=WC();DC.exports=XFr});var JC=s((Poe,XC)=>{"use strict";var JFr=K().isPrimitive,xFr=q();function YFr(r){if(!JFr(r))throw new TypeError(xFr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}XC.exports=YFr});var YC=s((Roe,xC)=>{"use strict";var ZFr=JC();xC.exports=ZFr});var $C=s((Foe,ZC)=>{"use strict";var Wr={};Wr.camelcase=Tj();Wr.capitalize=Pj();Wr.constantcase=Wj();Wr.kebabcase=$j();Wr.lowercase=eC();Wr.pascalcase=fC();Wr.snakecase=hC();Wr.startcase=jC();Wr.uncapitalize=zC();Wr.uppercase=YC();ZC.exports=Wr});var KC=s((Moe,QC)=>{"use strict";var $Fr=Ce();function QFr(r,e,t,i){$Fr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}QC.exports=QFr});var F=s((Boe,rG)=>{"use strict";var KFr=KC();rG.exports=KFr});var iG=s((koe,tG)=>{"use strict";var eG=65535;function rMr(r,e){var t,i,n,a,u,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,u=(r&eG)>>>0,o=(e&eG)>>>0,t=u*o>>>0,i=n*o+u*a<<16>>>0,t+i>>>0}tG.exports=rMr});var aG=s((joe,nG)=>{"use strict";var eMr=iG();nG.exports=eMr});var a3=s((Coe,sG)=>{"use strict";function tMr(r,e,t,i,n,a,u){var o,v,f,c,l,p,m;for(o=e.data,v=n.data,c=e.accessors[0],f=n.accessors[1],l=i,p=u,m=0;m<r;m++)f(v,p,c(o,l)),l+=t,p+=a;return e}sG.exports=tMr});var fG=s((Goe,oG)=>{"use strict";var uG=Ya(),iMr=a3(),s3=8;function nMr(r,e,t,i,n){var a,u,o,v,f,c;if(r<=0)return i;if(o=uG(e),v=uG(i),o.accessorProtocol||v.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,iMr(r,o,t,a,v,n,u),v.data;if(t===1&&n===1){if(f=r%s3,f>0)for(c=0;c<f;c++)i[c]=e[c];if(r<s3)return i;for(c=f;c<r;c+=s3)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?u=(1-r)*n:u=0,c=0;c<r;c++)i[u]=e[a],a+=t,u+=n;return i}oG.exports=nMr});var lG=s((Voe,cG)=>{"use strict";var vG=Ya(),aMr=a3(),Ln=8;function sMr(r,e,t,i,n,a,u){var o,v,f,c,l,p;if(r<=0)return n;if(f=vG(e),c=vG(n),f.accessorProtocol||c.accessorProtocol)return aMr(r,f,t,i,c,a,u),c.data;if(o=i,v=u,t===1&&a===1){if(l=r%Ln,l>0)for(p=0;p<l;p++)n[v]=e[o],o+=t,v+=a;if(r<Ln)return n;for(p=l;p<r;p+=Ln)n[v]=e[o],n[v+1]=e[o+1],n[v+2]=e[o+2],n[v+3]=e[o+3],n[v+4]=e[o+4],n[v+5]=e[o+5],n[v+6]=e[o+6],n[v+7]=e[o+7],o+=Ln,v+=Ln;return n}for(p=0;p<r;p++)n[v]=e[o],o+=t,v+=a;return n}cG.exports=sMr});var Ke=s((Uoe,gG)=>{"use strict";var uMr=w(),pG=fG(),oMr=lG();uMr(pG,"ndarray",oMr);gG.exports=pG});var dG=s((Hoe,mG)=>{"use strict";function fMr(){}mG.exports=fMr});var yG=s((Woe,hG)=>{"use strict";var vMr=dG();function cMr(){return vMr.name==="foo"}hG.exports=cMr});var bG=s((Doe,qG)=>{"use strict";var lMr=yG();qG.exports=lMr});var EG=s((zoe,wG)=>{"use strict";var pMr=_(),gMr=bG(),mMr=q(),dMr=Hu().REGEXP,hMr=gMr();function yMr(r){if(pMr(r)===!1)throw new TypeError(mMr("invalid argument. Must provide a function. Value: `%s`.",r));return hMr?r.name:dMr.exec(r.toString())[1]}wG.exports=yMr});var AG=s((Xoe,NG)=>{"use strict";var qMr=EG();NG.exports=qMr});var SG=s((Joe,OG)=>{"use strict";var bMr=fn(),wMr=Yt(),EMr=on(),NMr=un(),AMr=Zt(),OMr=Pt(),SMr=lr(),TMr=se(),IMr=dr(),_Mr=[IMr,TMr,OMr,SMr,NMr,AMr,bMr,wMr,EMr];OG.exports=_Mr});var TG=s((xoe,LMr)=>{LMr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var FG=s((Yoe,RG)=>{"use strict";var PMr=Ge(),RMr=AG(),LG=Nt(),FMr=xu(),MMr=dr(),IG=SG(),_G=TG(),v0=FMr()?LG(MMr):PG;v0=RMr(v0)==="TypedArray"?v0:PG;function PG(){}function BMr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof v0)return!0;for(t=0;t<IG.length;t++)if(r instanceof IG[t])return!0;for(;r;){for(e=PMr(r),t=0;t<_G.length;t++)if(_G[t]===e)return!0;r=LG(r)}return!1}RG.exports=BMr});var BG=s((Zoe,MG)=>{"use strict";var kMr=FG();MG.exports=kMr});var jG=s(($oe,kG)=>{"use strict";var jMr=pn(),CMr=mn(),GMr=[CMr,jMr];kG.exports=GMr});var CG=s((Qoe,VMr)=>{VMr.exports=["Complex64Array","Complex128Array"]});var HG=s((Koe,UG)=>{"use strict";var UMr=Ge(),HMr=Nt(),GG=jG(),VG=CG();function WMr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<GG.length;t++)if(r instanceof GG[t])return!0;for(;r;){for(e=UMr(r),t=0;t<VG.length;t++)if(VG[t]===e)return!0;r=HMr(r)}return!1}UG.exports=WMr});var DG=s((r2e,WG)=>{"use strict";var DMr=HG();WG.exports=DMr});var XG=s((e2e,zG)=>{"use strict";var zMr=q();function XMr(r,e){if(typeof e!="function")throw new TypeError(zMr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}zG.exports=XMr});var xG=s((t2e,JG)=>{"use strict";var JMr=XG();JG.exports=JMr});var ZG=s((i2e,YG)=>{"use strict";var xMr=fn(),YMr=Yt(),ZMr=on(),$Mr=un(),QMr=Zt(),KMr=Pt(),rBr=lr(),eBr=se(),tBr=dr(),iBr=pn(),nBr=mn(),aBr=[[tBr,"Float64Array"],[eBr,"Float32Array"],[KMr,"Int32Array"],[rBr,"Uint32Array"],[$Mr,"Int16Array"],[QMr,"Uint16Array"],[xMr,"Int8Array"],[YMr,"Uint8Array"],[ZMr,"Uint8ClampedArray"],[iBr,"Complex64Array"],[nBr,"Complex128Array"]];YG.exports=aBr});var QG=s((n2e,$G)=>{"use strict";var sBr=xG(),uBr=Ge(),oBr=Nt(),Ei=ZG();function fBr(r){var e,t;for(t=0;t<Ei.length;t++)if(sBr(r,Ei[t][0]))return Ei[t][1];for(;r;){for(e=uBr(r),t=0;t<Ei.length;t++)if(e===Ei[t][1])return Ei[t][1];r=oBr(r)}}$G.exports=fBr});var rV=s((a2e,KG)=>{"use strict";var vBr=BG(),cBr=DG(),lBr=si(),pBr=ui(),gBr=q(),mBr=QG();function dBr(r){var e,t,i;if(vBr(r))e=r;else if(cBr(r))r.BYTES_PER_ELEMENT===8?e=lBr(r,0):e=pBr(r,0);else throw new TypeError(gBr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:mBr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}KG.exports=dBr});var M=s((s2e,eV)=>{"use strict";var hBr=rV();eV.exports=hBr});var u3=s((u2e,tV)=>{"use strict";var yBr=zt(),qBr=Q(),bBr=yBr-1;function wBr(){var r=qBr(1+bBr*Math.random());return r>>>0}tV.exports=wBr});var m3=s((o2e,pV)=>{"use strict";var oe=w(),rt=R(),iV=F(),o3=O(),EBr=I(),NBr=Gr(),nV=Kr(),ABr=vr().isPrimitive,aV=ae().isPrimitive,vV=sn(),cV=zt(),br=lr(),OBr=zo(),g3=aG(),Ni=Ke(),SBr=M(),Er=q(),sV=u3(),ar=624,f3=397,uV=cV>>>0,TBr=19650218>>>0,v3=2147483648>>>0,c3=2147483647>>>0,IBr=1812433253>>>0,_Br=1664525>>>0,LBr=1566083941>>>0,PBr=2636928640>>>0,RBr=4022730752>>>0,FBr=2567483615>>>0,l3=[0>>>0,FBr>>>0],lV=1/(vV+1),MBr=67108864>>>0,BBr=2147483648>>>0,p3=1>>>0,kBr=vV*lV,c0=1,l0=3,et=2,tt=ar+3,wr=ar+5,Pn=ar+6;function oV(r,e){var t;return e?t="option":t="argument",r.length<Pn+1?new RangeError(Er("invalid %s. `state` array has insufficient length.",t)):r[0]!==c0?new RangeError(Er("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,c0,r[0])):r[1]!==l0?new RangeError(Er("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,l0,r[1])):r[et]!==ar?new RangeError(Er("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,ar,r[et])):r[tt]!==1?new RangeError(Er("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[tt])):r[wr]!==r.length-Pn?new RangeError(Er("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Pn,r[wr])):null}function fV(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=g3(t,IBr)+i>>>0;return r}function jBr(r,e,t,i){var n,a,u,o;for(a=1,u=0,o=OBr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=g3(n,_Br)>>>0,r[a]=(r[a]>>>0^n)+t[u]+u>>>0,a+=1,u+=1,a>=e&&(r[0]=r[e-1],a=1),u>=i&&(u=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=g3(n,LBr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=BBr,r}function CBr(r){var e,t,i,n;for(n=ar-f3,t=0;t<n;t++)e=r[t]&v3|r[t+1]&c3,r[t]=r[t+f3]^e>>>1^l3[e&p3];for(i=ar-1;t<i;t++)e=r[t]&v3|r[t+1]&c3,r[t]=r[t-n]^e>>>1^l3[e&p3];return e=r[i]&v3|r[0]&c3,r[i]=r[f3-1]^e>>>1^l3[e&p3],r}function GBr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!EBr(r))throw new TypeError(Er("invalid argument. Options argument must be an object. Value: `%s`.",r));if(o3(r,"copy")&&(i.copy=r.copy,!ABr(r.copy)))throw new TypeError(Er("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(o3(r,"state")){if(t=r.state,i.state=!0,!nV(t))throw new TypeError(Er("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(u=oV(t,!0),u)throw u;i.copy===!1?e=t:(e=new br(t.length),Ni(t.length,t,1,e,1)),t=new br(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,ar),n=new br(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,t[wr])}if(n===void 0)if(o3(r,"seed"))if(n=r.seed,i.seed=!0,aV(n)){if(n>uV)throw new RangeError(Er("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(NBr(n)===!1||n.length<1)throw new TypeError(Er("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!aV(n))throw new TypeError(Er("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>uV)throw new RangeError(Er("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new br(Pn+a),e[0]=c0,e[1]=l0,e[et]=ar,e[tt]=1,e[tt+1]=ar,e[wr]=a,Ni.ndarray(a,n,1,0,e,1,wr+1),t=new br(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,ar),n=new br(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,a),t=fV(t,ar,TBr),t=jBr(t,ar,n,a)}else n=sV()>>>0}else n=sV()>>>0;return t===void 0&&(e=new br(Pn+1),e[0]=c0,e[1]=l0,e[et]=ar,e[tt]=1,e[tt+1]=ar,e[wr]=1,e[wr+1]=n,t=new br(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,ar),n=new br(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,1),t=fV(t,ar,n)),oe(h,"NAME","mt19937"),rt(h,"seed",o),rt(h,"seedLength",v),iV(h,"state",l,p),rt(h,"stateLength",f),rt(h,"byteLength",c),oe(h,"toJSON",m),oe(h,"MIN",0),oe(h,"MAX",cV),oe(h,"normalized",d),oe(d,"NAME",h.NAME),rt(d,"seed",o),rt(d,"seedLength",v),iV(d,"state",l,p),rt(d,"stateLength",f),rt(d,"byteLength",c),oe(d,"toJSON",m),oe(d,"MIN",0),oe(d,"MAX",kBr),h;function o(){var g=e[wr];return Ni(g,n,1,new br(g),1)}function v(){return e[wr]}function f(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return Ni(g,e,1,new br(g),1)}function p(g){var y;if(!nV(g))throw new TypeError(Er("invalid argument. Must provide a Uint32Array. Value: `%s`.",g));if(y=oV(g,!1),y)throw y;i.copy===!1?i.state&&g.length===e.length?Ni(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new br(g.length)),Ni(g.length,g,1,e,1)),t=new br(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,ar),n=new br(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,e[wr])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=SBr(e),g.params=[],g}function h(){var g,y;return y=e[tt+1],y>=ar&&(t=CBr(t),y=0),g=t[y],e[tt+1]=y+1,g^=g>>>11,g^=g<<7&PBr,g^=g<<15&RBr,g^=g>>>18,g>>>0}function d(){var g=h()>>>5,y=h()>>>6;return(g*MBr+y)*lV}}pV.exports=GBr});var mV=s((f2e,gV)=>{"use strict";var VBr=m3(),UBr=u3(),HBr=VBr({seed:UBr()});gV.exports=HBr});var X=s((v2e,hV)=>{"use strict";var WBr=w(),dV=mV(),DBr=m3();WBr(dV,"factory",DBr);hV.exports=dV});var wV=s((c2e,bV)=>{"use strict";var yV=j().isPrimitive,d3=q(),qV=sr();function zBr(r,e){return!yV(r)||qV(r)?new TypeError(d3("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!yV(e)||qV(e)?new TypeError(d3("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(d3("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}bV.exports=zBr});var NV=s((l2e,EV)=>{"use strict";var XBr=W(),JBr=Tt(),xBr=za();function YBr(r,e,t){return e+XBr(JBr(xBr*r()),2)*(t-e)}EV.exports=YBr});var h3=s((p2e,PV)=>{"use strict";var fe=w(),p0=R(),AV=F(),OV=I(),SV=_(),TV=O(),IV=S(),ZBr=k(),g0=X().factory,_V=E(),$Br=M(),m0=q(),QBr=wV(),LV=NV();function KBr(){var r,e,t,i,n,a;if(arguments.length===0)e=g0();else if(arguments.length===1){if(r=arguments[0],!OV(r))throw new TypeError(m0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(TV(r,"prng")){if(!SV(r.prng))throw new TypeError(m0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=g0(r)}else{if(n=arguments[0],a=arguments[1],i=QBr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!OV(r))throw new TypeError(m0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(TV(r,"prng")){if(!SV(r.prng))throw new TypeError(m0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=g0(r)}else e=g0()}return n===void 0?t=h:t=m,fe(t,"NAME","arcsine"),r&&r.prng?(fe(t,"seed",null),fe(t,"seedLength",null),AV(t,"state",IV(null),ZBr),fe(t,"stateLength",null),fe(t,"byteLength",null),fe(t,"toJSON",IV(null)),fe(t,"PRNG",e)):(p0(t,"seed",u),p0(t,"seedLength",o),AV(t,"state",c,l),p0(t,"stateLength",v),p0(t,"byteLength",f),fe(t,"toJSON",p),fe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=$Br(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return LV(e,n,a)}function h(d,g){return _V(d)||_V(g)||d>=g?NaN:LV(e,d,g)}}PV.exports=KBr});var FV=s((g2e,RV)=>{"use strict";var rkr=h3(),ekr=rkr();RV.exports=ekr});var kV=s((m2e,BV)=>{"use strict";var tkr=w(),MV=FV(),ikr=h3();tkr(MV,"factory",ikr);BV.exports=MV});var y3=s((d2e,HV)=>{"use strict";var ve=w(),d0=R(),jV=F(),CV=I(),nkr=yn().isPrimitive,GV=_(),VV=O(),UV=S(),akr=k(),h0=X().factory,skr=E(),ukr=M(),y0=q();function okr(){var r,e,t,i;if(arguments.length===0)e=h0();else if(arguments.length===1&&CV(arguments[0]))if(r=arguments[0],VV(r,"prng")){if(!GV(r.prng))throw new TypeError(y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=h0(r);else{if(i=arguments[0],!nkr(i))throw new TypeError(y0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!CV(r))throw new TypeError(y0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(VV(r,"prng")){if(!GV(r.prng))throw new TypeError(y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=h0(r)}else e=h0()}return i===void 0?t=p:t=l,ve(t,"NAME","bernoulli"),r&&r.prng?(ve(t,"seed",null),ve(t,"seedLength",null),jV(t,"state",UV(null),akr),ve(t,"stateLength",null),ve(t,"byteLength",null),ve(t,"toJSON",UV(null)),ve(t,"PRNG",e)):(d0(t,"seed",n),d0(t,"seedLength",a),jV(t,"state",v,f),d0(t,"stateLength",u),d0(t,"byteLength",o),ve(t,"toJSON",c),ve(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=ukr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return skr(m)||m<0||m>1?NaN:e()<=m?1:0}}HV.exports=okr});var DV=s((h2e,WV)=>{"use strict";var fkr=y3(),vkr=fkr();WV.exports=vkr});var JV=s((y2e,XV)=>{"use strict";var ckr=w(),zV=DV(),lkr=y3();ckr(zV,"factory",lkr);XV.exports=zV});var $V=s((q2e,ZV)=>{"use strict";var pkr=C(),xV=nr(),gkr=P(),YV=.00991256303526217;function mkr(r,e){var t,i,n;for(i=xV(-.5*e*e),t=[],t.push(YV/i),t.push(e),n=2;n<r;n++)t[n]=pkr(-2*gkr(YV/t[n-1]+i)),i=xV(-.5*t[n]*t[n]);return t.push(0),t}ZV.exports=mkr});var KV=s((b2e,QV)=>{"use strict";function dkr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}QV.exports=dkr});var tU=s((w2e,eU)=>{"use strict";var rU=P();function hkr(r,e,t){var i,n;do i=rU(r())/e,n=rU(r());while(-2*n<i*i);return t?i-e:e-i}eU.exports=hkr});var sU=s((E2e,aU)=>{"use strict";var ykr=Y(),iU=nr(),qkr=$V(),bkr=KV(),wkr=tU(),Ekr=128,nU=3.442619855899,Wt=qkr(Ekr,nU),Nkr=bkr(Wt),Akr=127;function Okr(r,e){return t;function t(){for(var i,n,a,u,o,v,f;;){if(o=2*r()-1,v=e()&Akr,ykr(o)<Nkr[v])return o*Wt[v];if(v===0)return wkr(r,nU,o<0);if(u=o*Wt[v],a=u*u,f=v+1,i=iU(-.5*(Wt[v]*Wt[v]-a)),n=iU(-.5*(Wt[f]*Wt[f]-a)),n+r()*(i-n)<1)return u}}}aU.exports=Okr});var b3=s((N2e,fU)=>{"use strict";var it=w(),q0=R(),uU=F(),Skr=_(),Tkr=I(),Ikr=vr().isPrimitive,b0=O(),_kr=Kr(),q3=X().factory,oU=S(),Lkr=k(),Pkr=Q(),Rkr=zt(),Fkr=M(),Rn=q(),Mkr=sU();function Bkr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!Tkr(r))throw new TypeError(Rn("invalid argument. Must provide an object. Value: `%s`.",r));if(b0(r,"copy")&&(n.copy=r.copy,!Ikr(r.copy)))throw new TypeError(Rn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(b0(r,"prng")){if(!Skr(r.prng))throw new TypeError(Rn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(b0(r,"state")){if(n.state=r.state,!_kr(r.state))throw new TypeError(Rn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(b0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Rn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=q3(n),e=t.normalized):(t=q3({seed:Pkr(1+Rkr*e()),copy:n.copy}),n.seed=null):(t=q3(n),e=t.normalized),i=Mkr(e,t),it(i,"NAME","improved-ziggurat"),n.seed===null?(it(i,"seed",null),it(i,"seedLength",null)):(q0(i,"seed",a),q0(i,"seedLength",u)),r&&r.prng?(uU(i,"state",oU(null),Lkr),it(i,"stateLength",null),it(i,"byteLength",null),it(i,"toJSON",oU(null))):(uU(i,"state",f,c),q0(i,"stateLength",o),q0(i,"byteLength",v),it(i,"toJSON",l)),it(i,"PRNG",e),i;function a(){return t.seed}function u(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=Fkr(t.state),p.params=[],p}}fU.exports=Bkr});var cU=s((A2e,vU)=>{"use strict";var kkr=b3(),jkr=kkr();vU.exports=jkr});var nt=s((O2e,pU)=>{"use strict";var Ckr=w(),lU=cU(),Gkr=b3();Ckr(lU,"factory",Gkr);pU.exports=lU});var mU=s((S2e,gU)=>{"use strict";var Vkr=_(),Ukr=Vkr(Object.assign);gU.exports=Ukr});var hU=s((T2e,dU)=>{"use strict";var Hkr=Object.assign;dU.exports=Hkr});var qU=s((I2e,yU)=>{"use strict";var Wkr=typeof Object.getOwnPropertySymbols<"u";yU.exports=Wkr});var EU=s((_2e,wU)=>{"use strict";var bU=xt(),Dkr=bU.getOwnPropertySymbols;function zkr(r){return Dkr(bU(r))}wU.exports=zkr});var AU=s((L2e,NU)=>{"use strict";function Xkr(){return[]}NU.exports=Xkr});var SU=s((P2e,OU)=>{"use strict";var Jkr=qU(),xkr=EU(),Ykr=AU(),w3;Jkr?w3=xkr:w3=Ykr;OU.exports=w3});var IU=s((R2e,TU)=>{"use strict";var Zkr=Jt(),$kr=SU(),Qkr=zi();function Kkr(r){var e,t,i;for(e=Zkr(r),t=$kr(r),i=0;i<t.length;i++)Qkr(r,t[i])&&e.push(t[i]);return e}TU.exports=Kkr});var LU=s((F2e,_U)=>{"use strict";var rjr=IU();_U.exports=rjr});var FU=s((M2e,RU)=>{"use strict";var ejr=LU(),PU=xt(),tjr=q();function ijr(r){var e,t,i,n,a,u,o;if(r==null)throw new TypeError(tjr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=PU(r),u=1;u<arguments.length;u++)if(e=arguments[u],e!=null)for(t=ejr(PU(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}RU.exports=ijr});var Fn=s((B2e,MU)=>{"use strict";var njr=mU(),ajr=hU(),sjr=FU(),E3;njr?E3=ajr:E3=sjr;MU.exports=E3});var CU=s((k2e,jU)=>{"use strict";var BU=D().isPrimitive,kU=q();function ujr(r,e){return BU(r)?BU(e)?null:new TypeError(kU("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(kU("invalid argument. First argument must be a positive number. Value: `%s`.",r))}jU.exports=ujr});var WU=s((j2e,HU)=>{"use strict";var GU=P(),VU=C(),ojr=W(),UU=1/3;function fjr(r,e,t){var i,n,a,u,o,v,f,c,l,p;for(t<1?(v=t+1-UU,o=1/VU(9*v),c=ojr(r(),1/t)):(v=t-UU,o=1/VU(9*v),c=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,n=f*f,a=1-.331*n*n,u=.5*n+v*(1-p+GU(p)),l=r(),(l<a||GU(l)<u)&&(i=!1)}return v*p*c}HU.exports=fjr});var XU=s((C2e,zU)=>{"use strict";var N3=W(),DU=P();function vjr(r,e,t){var i,n,a,u,o,v,f,c;for(a=t-1,o=N3(a+a,.5),i=!0;i===!0;)u=e(),f=.5*(1+u/o),f>=0&&f<=1&&(v=r(),n=N3(u,4),c=8*t-12,c=1-n/c,v<=c?i=!1:(c+=.5*N3(n/(8*t-8),2),v<c&&(c=a*DU(4*f*(1-f)),c+=u*u/2,c>=DU(v)&&(i=!1))));return f}zU.exports=vjr});var xU=s((G2e,JU)=>{"use strict";var cjr=W(),w0=P();function ljr(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h;for(o=t-1,v=i-1,f=o+v,c=f*w0(f),u=o/f,n=.5/cjr(f,.5),a=!0;a===!0;)l=e(),m=u+l*n,m>=0&&m<=1&&(p=r(),h=o*w0(m/o),h+=v*w0((1-m)/v),h+=c+.5*l*l,h>=w0(p)&&(a=!1));return m}JU.exports=ljr});var $U=s((V2e,ZU)=>{"use strict";var A3=nr(),YU=W(),O3=P();function pjr(r,e,t){for(var i,n,a,u,o,v,f;;)if(u=r(),o=r(),v=YU(u,1/e),f=YU(o,1/t),a=v+f,a<=1)return a>0?v/a:(i=O3(u)/e,n=O3(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),A3(i-O3(A3(i)+A3(n))))}ZU.exports=pjr});var rH=s((U2e,KU)=>{"use strict";var QU=WU(),gjr=XU(),mjr=xU(),djr=$U();function hjr(r,e,t,i){var n,a;return t===i&&t>1.5?gjr(r,e,t):t>1&&i>1?mjr(r,e,t,i):t<1&&i<1?djr(r,t,i):(n=QU(r,e,t),a=QU(r,e,i),n/(n+a))}KU.exports=hjr});var _3=s((H2e,vH)=>{"use strict";var ce=w(),E0=R(),eH=F(),tH=I(),iH=vr().isPrimitive,nH=_(),Ai=O(),aH=S(),yjr=k(),sH=nt().factory,N0=X().factory,uH=E(),S3=Ke(),T3=lr(),I3=Kr(),oH=Fn(),qjr=M(),le=q(),bjr=CU(),fH=rH();function wjr(){var r,e,t,i,n,a,u,o,v;if(o=!0,arguments.length===0)n={copy:!1},a=N0(n);else if(arguments.length===1){if(n=arguments[0],!tH(n))throw new TypeError(le("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ai(n,"copy")&&!iH(n.copy))throw new TypeError(le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ai(n,"prng")){if(!nH(n.prng))throw new TypeError(le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ai(n,"state")&&!I3(n.state))throw new TypeError(le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=oH({},n),n.copy===!1?o=!1:n.state&&(n.state=S3(n.state.length,n.state,1,new T3(n.state.length),1)),n.copy=!1,a=N0(n)}}else{if(t=arguments[0],i=arguments[1],v=bjr(t,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!tH(n))throw new TypeError(le("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ai(n,"copy")&&!iH(n.copy))throw new TypeError(le("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ai(n,"prng")){if(!nH(n.prng))throw new TypeError(le("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ai(n,"state")&&!I3(n.state))throw new TypeError(le("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=oH({},n),n.copy===!1?o=!1:n.state&&(n.state=S3(n.state.length,n.state,1,new T3(n.state.length),1)),n.copy=!1,a=N0(n)}}else n={copy:!1},a=N0(n)}return n&&n.prng?e=sH({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=sH({state:r,copy:!1})),t===void 0?u=y:u=g,ce(u,"NAME","beta"),n&&n.prng?(ce(u,"seed",null),ce(u,"seedLength",null),eH(u,"state",aH(null),yjr),ce(u,"stateLength",null),ce(u,"byteLength",null),ce(u,"toJSON",aH(null)),ce(u,"PRNG",a)):(E0(u,"seed",f),E0(u,"seedLength",c),eH(u,"state",m,h),E0(u,"stateLength",l),E0(u,"byteLength",p),ce(u,"toJSON",d),ce(u,"PRNG",a),a=a.normalized),u;function f(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function m(){return a.state}function h(N){if(!I3(N))throw new TypeError(le("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=S3(N.length,N,1,new T3(N.length),1)),a.state=N}function d(){var N={};return N.type="PRNG",N.name=u.NAME,N.state=qjr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function g(){return fH(a,e,t,i)}function y(N,A){return uH(N)||uH(A)||N<=0||A<=0?NaN:fH(a,e,N,A)}}vH.exports=wjr});var lH=s((W2e,cH)=>{"use strict";var Ejr=_3(),Njr=Ejr();cH.exports=Njr});var mH=s((D2e,gH)=>{"use strict";var Ajr=w(),pH=lH(),Ojr=_3();Ajr(pH,"factory",Ojr);gH.exports=pH});var qH=s((z2e,yH)=>{"use strict";var dH=D().isPrimitive,hH=q();function Sjr(r,e){return dH(r)?dH(e)?null:new TypeError(hH("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(hH("invalid argument. First argument must be a positive number. Value: `%s`.",r))}yH.exports=Sjr});var EH=s((X2e,wH)=>{"use strict";var bH=P();function Tjr(r,e,t,i,n){var a,u,o,v,f,c,l;for(a=!0;a;){do f=e(),l=1+n*f;while(l<=0);l*=l*l,u=f*f,o=1-.331*u*u,v=.5*u+i*(1-l+bH(l)),c=r(),(c<o||bH(c)<v)&&(a=!1)}return 1/t*i*l}wH.exports=Tjr});var M3=s((J2e,RH)=>{"use strict";var pe=w(),A0=R(),NH=F(),AH=I(),L3=Kr(),OH=vr().isPrimitive,SH=_(),Oi=O(),TH=S(),Ijr=k(),IH=nt().factory,O0=X().factory,_H=E(),P3=C(),LH=W(),R3=Ke(),F3=lr(),_jr=M(),PH=Fn(),ge=q(),Ljr=qH(),S0=EH(),T0=1/3;function Pjr(){var r,e,t,i,n,a,u,o,v,f,c;if(o=!0,arguments.length===0)n={copy:!1},a=O0(n);else if(arguments.length===1){if(n=arguments[0],!AH(n))throw new TypeError(ge("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Oi(n,"copy")&&!OH(n.copy))throw new TypeError(ge("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Oi(n,"prng")){if(!SH(n.prng))throw new TypeError(ge("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Oi(n,"state")&&!L3(n.state))throw new TypeError(ge("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=PH({},n),n.copy===!1?o=!1:n.state&&(n.state=R3(n.state.length,n.state,1,new F3(n.state.length),1)),n.copy=!1,a=O0(n)}}else{if(e=arguments[0],i=arguments[1],v=Ljr(e,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!AH(n))throw new TypeError(ge("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Oi(n,"copy")&&!OH(n.copy))throw new TypeError(ge("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Oi(n,"prng")){if(!SH(n.prng))throw new TypeError(ge("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Oi(n,"state")&&!L3(n.state))throw new TypeError(ge("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=PH({},n),n.copy===!1?o=!1:n.state&&(n.state=R3(n.state.length,n.state,1,new F3(n.state.length),1)),n.copy=!1,a=O0(n)}}else n={copy:!1},a=O0(n)}return n&&n.prng?t=IH({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=IH({state:r,copy:!1})),e===void 0?u=G:(e>=1?(u=N,c=e-T0):(u=A,c=e+1-T0),f=1/P3(9*c)),pe(u,"NAME","gamma"),n&&n.prng?(pe(u,"seed",null),pe(u,"seedLength",null),NH(u,"state",TH(null),Ijr),pe(u,"stateLength",null),pe(u,"byteLength",null),pe(u,"toJSON",TH(null)),pe(u,"PRNG",a)):(A0(u,"seed",l),A0(u,"seedLength",p),NH(u,"state",d,g),A0(u,"stateLength",m),A0(u,"byteLength",h),pe(u,"toJSON",y),pe(u,"PRNG",a),a=a.normalized),u;function l(){return a.seed}function p(){return a.seedLength}function m(){return a.stateLength}function h(){return a.byteLength}function d(){return a.state}function g(T){if(!L3(T))throw new TypeError(ge("invalid argument. Must provide a Uint32Array. Value: `%s`.",T));o&&(T=R3(T.length,T,1,new F3(T.length),1)),a.state=T}function y(){var T={};return T.type="PRNG",T.name=u.NAME,T.state=_jr(a.state),e===void 0?T.params=[]:T.params=[e,i],T}function N(){return S0(a,t,i,c,f)}function A(){return S0(a,t,i,c,f)*LH(a(),1/e)}function G(T,J){var fr,z;return _H(T)||_H(J)||T<=0||J<=0?NaN:T<1?(z=T+1-T0,fr=1/P3(9*z),S0(a,t,J,z,fr)*LH(a(),1/T)):(z=T-T0,fr=1/P3(9*z),S0(a,t,J,z,fr))}}RH.exports=Pjr});var MH=s((x2e,FH)=>{"use strict";var Rjr=M3(),Fjr=Rjr();FH.exports=Fjr});var Si=s((Y2e,kH)=>{"use strict";var Mjr=w(),BH=MH(),Bjr=M3();Mjr(BH,"factory",Bjr);kH.exports=BH});var VH=s((Z2e,GH)=>{"use strict";var jH=D().isPrimitive,CH=q();function kjr(r,e){return jH(r)?jH(e)?null:new TypeError(CH("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(CH("invalid argument. First argument must be a positive number. Value: `%s`.",r))}GH.exports=kjr});var HH=s(($2e,UH)=>{"use strict";function jjr(r,e,t){return r(e,1)/r(t,1)}UH.exports=jjr});var B3=s((Q2e,YH)=>{"use strict";var at=w(),I0=R(),WH=F(),DH=I(),zH=S(),Cjr=k(),_0=Si().factory,XH=E(),Gjr=M(),JH=q(),Vjr=VH(),xH=HH();function Ujr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=_0();else if(arguments.length===1){if(i=arguments[0],!DH(i))throw new TypeError(JH("invalid argument. Options argument must be an object. Value: `%s`.",i));r=_0(i)}else{if(e=arguments[0],t=arguments[1],u=Vjr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!DH(i))throw new TypeError(JH("invalid argument. Options argument must be an object. Value: `%s`.",i));r=_0(i)}else r=_0()}return e===void 0?a=d:a=h,n=r.PRNG,at(a,"NAME","betaprime"),i&&i.prng?(at(a,"seed",null),at(a,"seedLength",null),WH(a,"state",zH(null),Cjr),at(a,"stateLength",null),at(a,"byteLength",null),at(a,"toJSON",zH(null))):(I0(a,"seed",o),I0(a,"seedLength",v),WH(a,"state",l,p),I0(a,"stateLength",f),I0(a,"byteLength",c),at(a,"toJSON",m)),at(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=Gjr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return xH(r,e,t)}function d(g,y){return XH(g)||XH(y)||g<=0||y<=0?NaN:xH(r,g,y)}}YH.exports=Ujr});var $H=s((K2e,ZH)=>{"use strict";var Hjr=B3(),Wjr=Hjr();ZH.exports=Wjr});var rW=s((r1e,KH)=>{"use strict";var Djr=w(),QH=$H(),zjr=B3();Djr(QH,"factory",zjr);KH.exports=QH});var tW=s((e1e,eW)=>{"use strict";var Xjr=Q();function Jjr(r){return Xjr(r)===r&&r>0}eW.exports=Jjr});var k3=s((t1e,iW)=>{"use strict";var xjr=tW();iW.exports=xjr});var aW=s((i1e,nW)=>{"use strict";function Yjr(r){return r>=0&&r<=1}nW.exports=Yjr});var uW=s((n1e,sW)=>{"use strict";var Zjr=aW();sW.exports=Zjr});var vW=s((a1e,fW)=>{"use strict";var $jr=ae().isPrimitive,Qjr=yn().isPrimitive,oW=q();function Kjr(r,e){return $jr(r)?Qjr(e)?null:new TypeError(oW("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(oW("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}fW.exports=Kjr});var lW=s((s1e,cW)=>{"use strict";function rCr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}cW.exports=rCr});var gW=s((u1e,pW)=>{"use strict";var eCr=E();function tCr(r){return r===0||eCr(r)?r:r<0?-1:1}pW.exports=tCr});var L0=s((o1e,mW)=>{"use strict";var iCr=gW();mW.exports=iCr});var hW=s((f1e,dW)=>{"use strict";var nCr=W(),aCr=1/12,sCr=1/360,uCr=1/1260;function oCr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=nCr(r,2),(aCr-(sCr-uCr/e)/e)/r}}dW.exports=oCr});var qW=s((v1e,yW)=>{"use strict";var j3=Q(),fCr=L0(),vCr=C(),C3=Y(),P0=P(),R0=hW(),cCr=1/6;function lCr(r,e,t){var i,n,a,u,o,v,f,c,l,p,m,h,d,g,y,N,A,G,T,J,fr,z,vu,zr,gr,Un;for(J=j3((e+1)*t),f=e-J+1,fr=1-t,z=t/fr,c=(e+1)*z,u=e*t*fr,a=vCr(u),g=1.15+2.53*a,d=-.0873+.0248*g+.01*t,y=e*t+.5,i=(2.83+5.1/g)*a,h=.92-4.2/g,n=.86*h,A=(J+.5)*P0((J+1)/(z*f)),A+=R0(J)+R0(e-J);;){if(gr=r(),gr<=n)return zr=gr/h-.43,z=zr*(2*d/(.5-C3(zr))+g)+y,j3(z);if(gr>=h?zr=r()-.5:(zr=gr/h-.93,zr=fCr(zr)*.5-zr,gr=h*r()),l=.5-C3(zr),T=j3(zr*(2*d/l+g)+y),!(T<0||T>e))if(gr=gr*i/(d/(l*l)+g),p=C3(T-J),p>15){if(gr=P0(gr),o=p/u,v=(p/3+.625)*p,v+=cCr,v/=u,o*=v+.5,vu=-(p*p)/(2*u),gr<vu-o||gr<=vu+o&&(m=e-T+1,Un=A+(e+1)*P0(f/m),Un+=(T+.5)*P0(m*z/(T+1)),Un+=-(R0(T)+R0(e-T)),gr<=Un))return T}else{if(N=1,J<T)for(G=J;G<=T;G++)N*=c/G-z;else if(J>T)for(G=T;G<=J;G++)gr*=c/G-z;if(gr<=N)return T}}}yW.exports=lCr});var EW=s((c1e,wW)=>{"use strict";var pCr=lW(),gCr=qW();function bW(r,e,t){return t>.5?e-bW(r,e,1-t):e*t<10?pCr(r,e,t):gCr(r,e,t)}wW.exports=bW});var G3=s((l1e,LW)=>{"use strict";var me=w(),F0=R(),NW=F(),AW=I(),OW=_(),SW=O(),TW=S(),mCr=k(),IW=E(),dCr=k3(),hCr=uW(),M0=X().factory,yCr=M(),B0=q(),qCr=vW(),_W=EW();function bCr(){var r,e,t,i,n,a;if(arguments.length===0)e=M0();else if(arguments.length===1){if(r=arguments[0],!AW(r))throw new TypeError(B0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SW(r,"prng")){if(!OW(r.prng))throw new TypeError(B0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=M0(r)}else{if(n=arguments[0],a=arguments[1],i=qCr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!AW(r))throw new TypeError(B0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(SW(r,"prng")){if(!OW(r.prng))throw new TypeError(B0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=M0(r)}else e=M0()}return n===void 0?t=h:t=m,me(t,"NAME","binomial"),r&&r.prng?(me(t,"seed",null),me(t,"seedLength",null),NW(t,"state",TW(null),mCr),me(t,"stateLength",null),me(t,"byteLength",null),me(t,"toJSON",TW(null)),me(t,"PRNG",e)):(F0(t,"seed",u),F0(t,"seedLength",o),NW(t,"state",c,l),F0(t,"stateLength",v),F0(t,"byteLength",f),me(t,"toJSON",p),me(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=yCr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return _W(e,n,a)}function h(d,g){return IW(d)||IW(g)||!dCr(d)||!hCr(g)?NaN:_W(e,d,g)}}LW.exports=bCr});var RW=s((p1e,PW)=>{"use strict";var wCr=G3(),ECr=wCr();PW.exports=ECr});var BW=s((g1e,MW)=>{"use strict";var NCr=w(),FW=RW(),ACr=G3();NCr(FW,"factory",ACr);MW.exports=FW});var jW=s((m1e,kW)=>{"use strict";var OCr=C(),SCr=P(),TCr=Tt(),ICr=St(),_Cr=We();function LCr(r){var e,t;return e=!0,i;function i(){var n,a,u,o;if(e){do n=r(),a=r();while(n===0);return u=OCr(-2*SCr(n)),o=_Cr*a,t=u*ICr(o),e=!1,u*TCr(o)}return e=!0,t}}kW.exports=LCr});var GW=s((d1e,CW)=>{"use strict";var PCr=C(),RCr=P(),FCr=St(),MCr=_r(),BCr=FCr(MCr);function kCr(r){var e=PCr(-2*RCr(r));return e*BCr}CW.exports=kCr});var UW=s((h1e,VW)=>{"use strict";var jCr=C(),CCr=P(),GCr=St(),VCr=We();function UCr(r){var e=jCr(-2*CCr(r)),t=VCr*r;return e*GCr(t)}VW.exports=UCr});var V3=s((y1e,zW)=>{"use strict";var kr=w(),k0=R(),HW=F(),HCr=I(),WCr=_(),DCr=vr().isPrimitive,Mn=O(),zCr=Kr(),WW=X().factory,DW=S(),XCr=k(),JCr=M(),Bn=q(),xCr=jW(),YCr=GW(),ZCr=UW();function $Cr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!HCr(r))throw new TypeError(Bn("invalid argument. Must provide an object. Value: `%s`.",r));if(Mn(r,"copy")&&(n.copy=r.copy,!DCr(r.copy)))throw new TypeError(Bn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Mn(r,"prng")){if(!WCr(r.prng))throw new TypeError(Bn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Mn(r,"state")){if(n.state=r.state,!zCr(r.state))throw new TypeError(Bn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Mn(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Bn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=WW(n),e=i.normalized):n.seed=null:(i=WW(n),e=i.normalized),t=xCr(e),kr(t,"NAME","box-muller"),n.seed===null?(kr(t,"seed",null),kr(t,"seedLength",null)):(k0(t,"seed",a),k0(t,"seedLength",u)),r&&r.prng?(HW(t,"state",DW(null),XCr),kr(t,"stateLength",null),kr(t,"byteLength",null),kr(t,"toJSON",DW(null))):(HW(t,"state",f,c),k0(t,"stateLength",o),k0(t,"byteLength",v),kr(t,"toJSON",l)),kr(t,"PRNG",e),Mn(e,"MIN")?(kr(t,"MIN",YCr(e.MIN)),kr(t,"MAX",ZCr(e.MIN))):(kr(t,"MIN",null),kr(t,"MAX",null)),t;function a(){return i.seed}function u(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=JCr(i.state),p.params=[],p}}zW.exports=$Cr});var JW=s((q1e,XW)=>{"use strict";var QCr=V3(),KCr=QCr();XW.exports=KCr});var ZW=s((b1e,YW)=>{"use strict";var rGr=w(),xW=JW(),eGr=V3();rGr(xW,"factory",eGr);YW.exports=xW});var KW=s((w1e,QW)=>{"use strict";var tGr=j().isPrimitive,iGr=D().isPrimitive,$W=q(),nGr=sr();function aGr(r,e){return!tGr(r)||nGr(r)?new TypeError($W("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):iGr(e)?null:new TypeError($W("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}QW.exports=aGr});var eD=s((E1e,rD)=>{"use strict";var sGr=V2(),uGr=_r();function oGr(r,e,t){return e+t*sGr(uGr*(r()-.5))}rD.exports=oGr});var U3=s((N1e,fD)=>{"use strict";var st=w(),j0=R(),tD=F(),iD=I(),nD=_(),aD=O(),sD=S(),fGr=k(),uD=E(),Ti=nt().factory,vGr=M(),C0=q(),cGr=KW(),oD=eD();function lGr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Ti();else if(arguments.length===1){if(t=arguments[0],!iD(t))throw new TypeError(C0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(aD(t,"prng")){if(!nD(t.prng))throw new TypeError(C0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ti({prng:t.prng})}else e=Ti(t)}else{if(u=arguments[0],r=arguments[1],a=cGr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!iD(t))throw new TypeError(C0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(aD(t,"prng")){if(!nD(t.prng))throw new TypeError(C0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ti({prng:t.prng})}else e=Ti(t)}else e=Ti()}return u===void 0?n=d:n=h,i=e.PRNG,st(n,"NAME","cauchy"),t&&t.prng?(st(n,"seed",null),st(n,"seedLength",null),tD(n,"state",sD(null),fGr),st(n,"stateLength",null),st(n,"byteLength",null),st(n,"toJSON",sD(null))):(j0(n,"seed",o),j0(n,"seedLength",v),tD(n,"state",l,p),j0(n,"stateLength",f),j0(n,"byteLength",c),st(n,"toJSON",m)),st(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=vGr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return oD(e,u,r)}function d(g,y){return uD(g)||uD(y)||y<=0?NaN:oD(e,g,y)}}fD.exports=lGr});var cD=s((A1e,vD)=>{"use strict";var pGr=U3(),gGr=pGr();vD.exports=gGr});var gD=s((O1e,pD)=>{"use strict";var mGr=w(),lD=cD(),dGr=U3();mGr(lD,"factory",dGr);pD.exports=lD});var H3=s((S1e,bD)=>{"use strict";var ut=w(),G0=R(),mD=F(),hGr=D().isPrimitive,dD=I(),hD=_(),yD=O(),qD=S(),yGr=k(),qGr=E(),Ii=Si().factory,bGr=M(),V0=q();function wGr(){var r,e,t,i,n;if(arguments.length===0)r=Ii();else if(arguments.length===1&&dD(arguments[0]))if(t=arguments[0],yD(t,"prng")){if(!hD(t.prng))throw new TypeError(V0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ii({prng:t.prng})}else r=Ii(t);else{if(n=arguments[0],!hGr(n))throw new TypeError(V0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!dD(t))throw new TypeError(V0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(yD(t,"prng")){if(!hD(t.prng))throw new TypeError(V0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Ii(n/2,.5,{prng:t.prng})}else r=Ii(n/2,.5,t)}else r=Ii(n/2,.5)}return n===void 0?i=m:i=p,e=r.PRNG,ut(i,"NAME","chisquare"),t&&t.prng?(ut(i,"seed",null),ut(i,"seedLength",null),mD(i,"state",qD(null),yGr),ut(i,"stateLength",null),ut(i,"byteLength",null),ut(i,"toJSON",qD(null))):(G0(i,"seed",a),G0(i,"seedLength",u),mD(i,"state",f,c),G0(i,"stateLength",o),G0(i,"byteLength",v),ut(i,"toJSON",l)),ut(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=bGr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return r()}function m(h){return qGr(h)||h<=0?NaN:r(h/2,.5)}}bD.exports=wGr});var ED=s((T1e,wD)=>{"use strict";var EGr=H3(),NGr=EGr();wD.exports=NGr});var kn=s((I1e,AD)=>{"use strict";var AGr=w(),ND=ED(),OGr=H3();AGr(ND,"factory",OGr);AD.exports=ND});var W3=s((_1e,PD)=>{"use strict";var ot=w(),U0=R(),OD=F(),SGr=D().isPrimitive,SD=I(),TD=_(),ID=O(),_D=S(),TGr=k(),IGr=E(),_i=kn().factory,_Gr=M(),LD=C(),H0=q();function LGr(){var r,e,t,i,n;if(arguments.length===0)r=_i();else if(arguments.length===1&&SD(arguments[0]))if(t=arguments[0],ID(t,"prng")){if(!TD(t.prng))throw new TypeError(H0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=_i({prng:t.prng})}else r=_i(t);else{if(n=arguments[0],!SGr(n))throw new TypeError(H0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!SD(t))throw new TypeError(H0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(ID(t,"prng")){if(!TD(t.prng))throw new TypeError(H0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=_i(n,{prng:t.prng})}else r=_i(n,t)}else r=_i(n)}return n===void 0?i=m:i=p,e=r.PRNG,ot(i,"NAME","chi"),t&&t.prng?(ot(i,"seed",null),ot(i,"seedLength",null),OD(i,"state",_D(null),TGr),ot(i,"stateLength",null),ot(i,"byteLength",null),ot(i,"toJSON",_D(null))):(U0(i,"seed",a),U0(i,"seedLength",u),OD(i,"state",f,c),U0(i,"stateLength",o),U0(i,"byteLength",v),ot(i,"toJSON",l)),ot(i,"PRNG",e),i;function a(){return e.seed}function u(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function c(h){e.state=h}function l(){var h={};return h.type="PRNG",h.name=i.NAME,h.state=_Gr(e.state),n===void 0?h.params=[]:h.params=[n],h}function p(){return LD(r())}function m(h){return IGr(h)||h<=0?NaN:LD(r(h))}}PD.exports=LGr});var FD=s((L1e,RD)=>{"use strict";var PGr=W3(),RGr=PGr();RD.exports=RGr});var kD=s((P1e,BD)=>{"use strict";var FGr=w(),MD=FD(),MGr=W3();FGr(MD,"factory",MGr);BD.exports=MD});var GD=s((R1e,CD)=>{"use strict";var BGr=j().isPrimitive,kGr=D().isPrimitive,jD=q(),jGr=sr();function CGr(r,e){return!BGr(r)||jGr(r)?new TypeError(jD("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):kGr(e)?null:new TypeError(jD("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}CD.exports=CGr});var UD=s((F1e,VD)=>{"use strict";var D3=E(),GGr=Ki(),VGr=_r();function UGr(r,e,t){var i;return D3(r)||D3(e)||D3(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+GGr(i)/VGr)/2)}VD.exports=UGr});var WD=s((M1e,HD)=>{"use strict";var HGr=S(),WGr=Oa().factory,z3=E(),DGr=Ki(),zGr=_r();function XGr(r,e){if(z3(r)||z3(e)||e<0)return HGr(NaN);if(e===0)return WGr(r);return t;function t(i){var n;return z3(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+DGr(n)/zGr)/2)}}HD.exports=XGr});var XD=s((B1e,zD)=>{"use strict";var JGr=w(),DD=UD(),xGr=WD();JGr(DD,"factory",xGr);zD.exports=DD});var X3=s((k1e,JD)=>{"use strict";var YGr=XD(),ZGr=1e4,$Gr=1e-12;function QGr(r,e,t){var i,n,a,u,o;for(o=1,i=e-t,n=e+t;o<ZGr;){if(u=(i+n)/2,n-i<$Gr)return u;a=YGr(u,e,t),r>a?i=u:n=u,o+=1}return u}JD.exports=QGr});var YD=s((j1e,xD)=>{"use strict";var J3=E(),KGr=X3();function rVr(r,e,t){return J3(e)||J3(t)||J3(r)||t<0||r<0||r>1?NaN:t===0?e:KGr(r,e,t)}xD.exports=rVr});var $D=s((C1e,ZD)=>{"use strict";var eVr=S(),tVr=Y1().factory,x3=E(),iVr=X3();function nVr(r,e){if(x3(r)||x3(e)||e<0)return eVr(NaN);if(e===0)return tVr(r);return t;function t(i){return x3(i)||i<0||i>1?NaN:iVr(i,r,e)}}ZD.exports=nVr});var rz=s((G1e,KD)=>{"use strict";var aVr=w(),QD=YD(),sVr=$D();aVr(QD,"factory",sVr);KD.exports=QD});var tz=s((V1e,ez)=>{"use strict";var uVr=rz();function oVr(r,e,t){return uVr(r(),e,t)}ez.exports=oVr});var Y3=s((U1e,vz)=>{"use strict";var de=w(),W0=R(),iz=F(),nz=I(),az=_(),sz=O(),uz=S(),fVr=k(),D0=X().factory,oz=E(),vVr=M(),z0=q(),cVr=GD(),fz=tz();function lVr(){var r,e,t,i,n,a;if(arguments.length===0)e=D0();else if(arguments.length===1){if(r=arguments[0],!nz(r))throw new TypeError(z0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(sz(r,"prng")){if(!az(r.prng))throw new TypeError(z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=D0(r)}else{if(n=arguments[0],a=arguments[1],i=cVr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!nz(r))throw new TypeError(z0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(sz(r,"prng")){if(!az(r.prng))throw new TypeError(z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=D0(r)}else e=D0()}return n===void 0?t=h:t=m,de(t,"NAME","cosine"),r&&r.prng?(de(t,"seed",null),de(t,"seedLength",null),iz(t,"state",uz(null),fVr),de(t,"stateLength",null),de(t,"byteLength",null),de(t,"toJSON",uz(null)),de(t,"PRNG",e)):(W0(t,"seed",u),W0(t,"seedLength",o),iz(t,"state",c,l),W0(t,"stateLength",v),W0(t,"byteLength",f),de(t,"toJSON",p),de(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=vVr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return fz(e,n,a)}function h(d,g){return oz(d)||oz(g)||g<=0?NaN:fz(e,d,g)}}vz.exports=lVr});var lz=s((H1e,cz)=>{"use strict";var pVr=Y3(),gVr=pVr();cz.exports=gVr});var mz=s((W1e,gz)=>{"use strict";var mVr=w(),pz=lz(),dVr=Y3();mVr(pz,"factory",dVr);gz.exports=pz});var qz=s((D1e,yz)=>{"use strict";var dz=Cr().isPrimitive,Z3=q(),hz=sr();function hVr(r,e){return!dz(r)||hz(r)?new TypeError(Z3("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!dz(e)||hz(e)?new TypeError(Z3("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(Z3("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}yz.exports=hVr});var Ez=s((z1e,wz)=>{"use strict";var $3=sn(),Li=Q();function bz(r,e,t){var i,n,a,u,o,v,f,c,l;if(a=t-e,a===0)return e;if(f=r.MIN,c=r.MAX,n=c-f,n===a)return r()-f+e;if(n<a)for(u=0;;){for(a===$3?(u=Li(a/(n+1)),a%(n+1)===n&&(u+=1)):u=Li((a+1)/(n+1)),i=0,v=1;v<=u;){if(i+=(r()-f)*v,v*n===a-v+1)return i;v*=n+1}if(l=bz(r,0,Li(a/v)),!(l>$3/v)&&(l*=v,i+=l,!(i>a)))return i+e}for(n===$3?(o=Li(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Li((n+1)/(a+1));;)if(i=r()-f,i=Li(i/o),i<=a)return i+e}wz.exports=bz});var Q3=s((X1e,Lz)=>{"use strict";var he=w(),X0=R(),Nz=F(),Az=I(),Oz=_(),Sz=O(),Tz=S(),yVr=k(),J0=X().factory,Iz=E(),Pi=Ir(),qVr=M(),ft=q(),bVr=qz(),_z=Ez();function wVr(){var r,e,t,i,n,a;if(arguments.length===0)e=J0();else if(arguments.length===1){if(r=arguments[0],!Az(r))throw new TypeError(ft("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Sz(r,"prng")){if(!Oz(r.prng))throw new TypeError(ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Pi(e.MIN))throw new TypeError(ft("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Pi(e.MAX))throw new TypeError(ft("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=J0(r)}else{if(n=arguments[0],a=arguments[1],i=bVr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Az(r))throw new TypeError(ft("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Sz(r,"prng")){if(!Oz(r.prng))throw new TypeError(ft("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Pi(e.MIN))throw new TypeError(ft("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Pi(e.MAX))throw new TypeError(ft("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=J0(r)}else e=J0()}return n===void 0?t=h:t=m,he(t,"NAME","discrete-uniform"),r&&r.prng?(he(t,"seed",null),he(t,"seedLength",null),Nz(t,"state",Tz(null),yVr),he(t,"stateLength",null),he(t,"byteLength",null),he(t,"toJSON",Tz(null)),he(t,"PRNG",e)):(X0(t,"seed",u),X0(t,"seedLength",o),Nz(t,"state",c,l),X0(t,"stateLength",v),X0(t,"byteLength",f),he(t,"toJSON",p),he(t,"PRNG",e)),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=qVr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return _z(e,n,a)}function h(d,g){return Iz(d)||Iz(g)||!Pi(d)||!Pi(g)||d>g?NaN:_z(e,d,g)}}Lz.exports=wVr});var Rz=s((J1e,Pz)=>{"use strict";var EVr=Q3(),NVr=EVr();Pz.exports=NVr});var Bz=s((x1e,Mz)=>{"use strict";var AVr=w(),Fz=Rz(),OVr=Q3();AVr(Fz,"factory",OVr);Mz.exports=Fz});var Cz=s((Y1e,jz)=>{"use strict";var SVr=D().isPrimitive,TVr=ae().isPrimitive,kz=q();function IVr(r,e){return TVr(r)?SVr(e)?null:new TypeError(kz("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(kz("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}jz.exports=IVr});var Vz=s((Z1e,Gz)=>{"use strict";var _Vr=P();function LVr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*_Vr(i)}Gz.exports=LVr});var K3=s(($1e,xz)=>{"use strict";var ye=w(),x0=R(),Uz=F(),Hz=I(),Wz=_(),Dz=O(),zz=S(),PVr=k(),Y0=X().factory,Xz=E(),RVr=k3(),FVr=M(),Z0=q(),MVr=Cz(),Jz=Vz();function BVr(){var r,e,t,i,n,a;if(arguments.length===0)e=Y0();else if(arguments.length===1){if(t=arguments[0],!Hz(t))throw new TypeError(Z0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Dz(t,"prng")){if(!Wz(t.prng))throw new TypeError(Z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Y0(t)}else{if(a=arguments[0],r=arguments[1],n=MVr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!Hz(t))throw new TypeError(Z0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Dz(t,"prng")){if(!Wz(t.prng))throw new TypeError(Z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=Y0(t)}else e=Y0()}return a===void 0?i=h:i=m,ye(i,"NAME","erlang"),t&&t.prng?(ye(i,"seed",null),ye(i,"seedLength",null),Uz(i,"state",zz(null),PVr),ye(i,"stateLength",null),ye(i,"byteLength",null),ye(i,"toJSON",zz(null)),ye(i,"PRNG",e)):(x0(i,"seed",u),x0(i,"seedLength",o),Uz(i,"state",c,l),x0(i,"stateLength",v),x0(i,"byteLength",f),ye(i,"toJSON",p),ye(i,"PRNG",e),e=e.normalized),i;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=FVr(e.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return Jz(e,a,r)}function h(d,g){return Xz(d)||Xz(g)||!RVr(d)||g<=0?NaN:Jz(e,d,g)}}xz.exports=BVr});var Zz=s((Q1e,Yz)=>{"use strict";var kVr=K3(),jVr=kVr();Yz.exports=jVr});var Kz=s((K1e,Qz)=>{"use strict";var CVr=w(),$z=Zz(),GVr=K3();CVr($z,"factory",GVr);Qz.exports=$z});var eX=s((r3e,rX)=>{"use strict";var VVr=P();function UVr(r,e){return-VVr(1-r())/e}rX.exports=UVr});var rf=s((e3e,oX)=>{"use strict";var qe=w(),$0=R(),tX=F(),HVr=D().isPrimitive,iX=I(),nX=_(),aX=O(),sX=S(),WVr=k(),Q0=X().factory,DVr=E(),zVr=M(),K0=q(),uX=eX();function XVr(){var r,e,t,i;if(arguments.length===0)t=Q0();else if(arguments.length===1&&iX(arguments[0]))if(e=arguments[0],aX(e,"prng")){if(!nX(e.prng))throw new TypeError(K0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Q0(e);else{if(r=arguments[0],!HVr(r))throw new TypeError(K0("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!iX(e))throw new TypeError(K0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(aX(e,"prng")){if(!nX(e.prng))throw new TypeError(K0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Q0(e)}else t=Q0()}return r===void 0?i=p:i=l,qe(i,"NAME","exponential"),e&&e.prng?(qe(i,"seed",null),qe(i,"seedLength",null),tX(i,"state",sX(null),WVr),qe(i,"stateLength",null),qe(i,"byteLength",null),qe(i,"toJSON",sX(null)),qe(i,"PRNG",t)):($0(i,"seed",n),$0(i,"seedLength",a),tX(i,"state",v,f),$0(i,"stateLength",u),$0(i,"byteLength",o),qe(i,"toJSON",c),qe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=zVr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return uX(t,r)}function p(m){return DVr(m)||m<=0?NaN:uX(t,m)}}oX.exports=XVr});var vX=s((t3e,fX)=>{"use strict";var JVr=rf(),xVr=JVr();fX.exports=xVr});var pX=s((i3e,lX)=>{"use strict";var YVr=w(),cX=vX(),ZVr=rf();YVr(cX,"factory",ZVr);lX.exports=cX});var hX=s((n3e,dX)=>{"use strict";var gX=D().isPrimitive,mX=q();function $Vr(r,e){return gX(r)?gX(e)?null:new TypeError(mX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(mX("invalid argument. First argument must be a positive number. Value: `%s`.",r))}dX.exports=$Vr});var qX=s((a3e,yX)=>{"use strict";function QVr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}yX.exports=QVr});var ef=s((s3e,TX)=>{"use strict";var vt=w(),rs=R(),bX=F(),wX=I(),EX=_(),NX=O(),AX=S(),KVr=k(),Ri=kn().factory,OX=E(),rUr=M(),es=q(),eUr=hX(),SX=qX();function tUr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Ri();else if(arguments.length===1){if(e=arguments[0],!wX(e))throw new TypeError(es("invalid argument. Options argument must be an object. Value: `%s`.",e));if(NX(e,"prng")){if(!EX(e.prng))throw new TypeError(es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Ri({prng:e.prng})}else r=Ri(e)}else{if(a=arguments[0],u=arguments[1],n=eUr(a,u),n)throw n;if(arguments.length>2){if(e=arguments[2],!wX(e))throw new TypeError(es("invalid argument. Options argument must be an object. Value: `%s`.",e));if(NX(e,"prng")){if(!EX(e.prng))throw new TypeError(es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Ri({prng:e.prng})}else r=Ri(e)}else r=Ri()}return a===void 0?i=d:i=h,t=r.PRNG,vt(i,"NAME","f"),e&&e.prng?(vt(i,"seed",null),vt(i,"seedLength",null),bX(i,"state",AX(null),KVr),vt(i,"stateLength",null),vt(i,"byteLength",null),vt(i,"toJSON",AX(null))):(rs(i,"seed",o),rs(i,"seedLength",v),bX(i,"state",l,p),rs(i,"stateLength",f),rs(i,"byteLength",c),vt(i,"toJSON",m)),vt(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=rUr(t.state),a===void 0?g.params=[]:g.params=[a,u],g}function h(){return SX(r,a,u)}function d(g,y){return OX(g)||OX(y)||g<=0||y<=0?NaN:SX(r,g,y)}}TX.exports=tUr});var _X=s((u3e,IX)=>{"use strict";var iUr=ef(),nUr=iUr();IX.exports=nUr});var RX=s((o3e,PX)=>{"use strict";var aUr=w(),LX=_X(),sUr=ef();aUr(LX,"factory",sUr);PX.exports=LX});var BX=s((f3e,MX)=>{"use strict";var FX=D().isPrimitive,uUr=j().isPrimitive,tf=sr(),nf=q();function oUr(r,e,t){return!FX(r)||tf(r)?new TypeError(nf("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!FX(e)||tf(e)?new TypeError(nf("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!uUr(t)||tf(t)?new TypeError(nf("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}MX.exports=oUr});var jX=s((v3e,kX)=>{"use strict";var fUr=W(),vUr=P();function cUr(r,e,t,i){return i+t*fUr(-vUr(r()),-1/e)}kX.exports=cUr});var sf=s((c3e,DX)=>{"use strict";var be=w(),ts=R(),CX=F(),GX=I(),VX=_(),UX=O(),HX=S(),lUr=k(),is=X().factory,af=E(),pUr=M(),ns=q(),gUr=BX(),WX=jX();function mUr(){var r,e,t,i,n,a,u;if(arguments.length===0)t=is();else if(arguments.length===1){if(e=arguments[0],!GX(e))throw new TypeError(ns("invalid argument. Options argument must be an object. Value: `%s`.",e));if(UX(e,"prng")){if(!VX(e.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=is(e)}else{if(r=arguments[0],a=arguments[1],u=arguments[2],n=gUr(r,a,u),n)throw n;if(arguments.length>3){if(e=arguments[3],!GX(e))throw new TypeError(ns("invalid argument. Options argument must be an object. Value: `%s`.",e));if(UX(e,"prng")){if(!VX(e.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=is(e)}else t=is()}return r===void 0?i=d:i=h,be(i,"NAME","frechet"),e&&e.prng?(be(i,"seed",null),be(i,"seedLength",null),CX(i,"state",HX(null),lUr),be(i,"stateLength",null),be(i,"byteLength",null),be(i,"toJSON",HX(null)),be(i,"PRNG",t)):(ts(i,"seed",o),ts(i,"seedLength",v),CX(i,"state",l,p),ts(i,"stateLength",f),ts(i,"byteLength",c),be(i,"toJSON",m),be(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=pUr(t.state),r===void 0?g.params=[]:g.params=[r,a,u],g}function h(){return WX(t,r,a,u)}function d(g,y,N){return af(g)||af(y)||af(N)||g<=0||y<=0?NaN:WX(t,g,y,N)}}DX.exports=mUr});var XX=s((l3e,zX)=>{"use strict";var dUr=sf(),hUr=dUr();zX.exports=hUr});var YX=s((p3e,xX)=>{"use strict";var yUr=w(),JX=XX(),qUr=sf();yUr(JX,"factory",qUr);xX.exports=JX});var QX=s((g3e,$X)=>{"use strict";var bUr=Q(),ZX=P();function wUr(r,e){var t=r();return t===0&&(t=r()),bUr(ZX(t)/ZX(1-e))}$X.exports=wUr});var uf=s((m3e,aJ)=>{"use strict";var we=w(),as=R(),KX=F(),rJ=I(),EUr=yn().isPrimitive,eJ=_(),tJ=O(),iJ=S(),NUr=k(),ss=X().factory,AUr=E(),OUr=M(),us=q(),nJ=QX();function SUr(){var r,e,t,i;if(arguments.length===0)e=ss();else if(arguments.length===1&&rJ(arguments[0]))if(r=arguments[0],tJ(r,"prng")){if(!eJ(r.prng))throw new TypeError(us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ss(r);else{if(i=arguments[0],!EUr(i))throw new TypeError(us("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!rJ(r))throw new TypeError(us("invalid argument. Options argument must be an object. Value: `%s`.",r));if(tJ(r,"prng")){if(!eJ(r.prng))throw new TypeError(us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ss(r)}else e=ss()}return i===void 0?t=p:t=l,we(t,"NAME","geometric"),r&&r.prng?(we(t,"seed",null),we(t,"seedLength",null),KX(t,"state",iJ(null),NUr),we(t,"stateLength",null),we(t,"byteLength",null),we(t,"toJSON",iJ(null)),we(t,"PRNG",e)):(as(t,"seed",n),as(t,"seedLength",a),KX(t,"state",v,f),as(t,"stateLength",u),as(t,"byteLength",o),we(t,"toJSON",c),we(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function u(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=OUr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return nJ(e,i)}function p(m){return AUr(m)||m<0||m>1?NaN:nJ(e,m)}}aJ.exports=SUr});var uJ=s((d3e,sJ)=>{"use strict";var TUr=uf(),IUr=TUr();sJ.exports=IUr});var vJ=s((h3e,fJ)=>{"use strict";var _Ur=w(),oJ=uJ(),LUr=uf();_Ur(oJ,"factory",LUr);fJ.exports=oJ});var pJ=s((y3e,lJ)=>{"use strict";var PUr=j().isPrimitive,RUr=D().isPrimitive,cJ=q(),FUr=sr();function MUr(r,e){return!PUr(r)||FUr(r)?new TypeError(cJ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):RUr(e)?null:new TypeError(cJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}lJ.exports=MUr});var dJ=s((q3e,mJ)=>{"use strict";var gJ=P();function BUr(r,e,t){return e-t*gJ(-gJ(r()))}mJ.exports=BUr});var of=s((b3e,AJ)=>{"use strict";var Ee=w(),os=R(),hJ=F(),yJ=I(),qJ=_(),bJ=O(),wJ=S(),kUr=k(),fs=X().factory,EJ=E(),jUr=M(),vs=q(),CUr=pJ(),NJ=dJ();function GUr(){var r,e,t,i,n,a;if(arguments.length===0)t=fs();else if(arguments.length===1){if(e=arguments[0],!yJ(e))throw new TypeError(vs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(bJ(e,"prng")){if(!qJ(e.prng))throw new TypeError(vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=fs(e)}else{if(a=arguments[0],r=arguments[1],n=CUr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!yJ(e))throw new TypeError(vs("invalid argument. Options argument must be an object. Value: `%s`.",e));if(bJ(e,"prng")){if(!qJ(e.prng))throw new TypeError(vs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=fs(e)}else t=fs()}return a===void 0?i=h:i=m,Ee(i,"NAME","gumbel"),e&&e.prng?(Ee(i,"seed",null),Ee(i,"seedLength",null),hJ(i,"state",wJ(null),kUr),Ee(i,"stateLength",null),Ee(i,"byteLength",null),Ee(i,"toJSON",wJ(null)),Ee(i,"PRNG",t)):(os(i,"seed",u),os(i,"seedLength",o),hJ(i,"state",c,l),os(i,"stateLength",v),os(i,"byteLength",f),Ee(i,"toJSON",p),Ee(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=jUr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return NJ(t,a,r)}function h(d,g){return EJ(d)||EJ(g)||g<=0?NaN:NJ(t,d,g)}}AJ.exports=GUr});var SJ=s((w3e,OJ)=>{"use strict";var VUr=of(),UUr=VUr();OJ.exports=UUr});var _J=s((E3e,IJ)=>{"use strict";var HUr=w(),TJ=SJ(),WUr=of();HUr(TJ,"factory",WUr);IJ.exports=TJ});var PJ=s((N3e,LJ)=>{"use strict";var DUr=Q();function zUr(r){return DUr(r)===r&&r>=0}LJ.exports=zUr});var FJ=s((A3e,RJ)=>{"use strict";var XUr=PJ();RJ.exports=XUr});var BJ=s((O3e,MJ)=>{"use strict";var ff=Je().isPrimitive,jn=q();function JUr(r,e,t){return ff(r)?ff(e)?ff(t)?t>r?new RangeError(jn("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(jn("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(jn("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(jn("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(jn("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}MJ.exports=JUr});var kJ=s((S3e,xUr)=>{xUr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var CJ=s((T3e,jJ)=>{"use strict";var YUr=E(),ZUr=Ir(),$Ur=ri(),QUr=L(),KUr=kJ(),rHr=170;function eHr(r){return YUr(r)?NaN:ZUr(r)?r<0?NaN:r<=rHr?KUr[r]:QUr:$Ur(r+1)}jJ.exports=eHr});var VJ=s((I3e,GJ)=>{"use strict";var tHr=CJ();GJ.exports=tHr});var HJ=s((_3e,UJ)=>{"use strict";var ct=VJ();function iHr(r,e,t,i){var n,a,u;for(i<t?(n=ct(t)*ct(e+t-i)/(ct(e+t)*ct(t-i)),u=0):(n=ct(e)*ct(i)/(ct(i-t)*ct(e+t)),u=i-t),a=r();a>n;)a-=n,n*=(e-u)*(i-u)/((u+1)*(t-i+1+u)),u+=1;return u}UJ.exports=iHr});var DJ=s((L3e,WJ)=>{"use strict";var cs=HJ();function nHr(r,e,t,i){var n,a,u,o;return i>e/2?(u=e-i,2*t<=e?(n=t,a=e-t,o=cs(r,n,a,u),t-o):(a=t,n=e-t,o=cs(r,n,a,u),i-e+t+o)):(u=i,2*t<=e?(n=t,a=e-t,o=cs(r,n,a,u),o):(n=e-t,a=t,o=cs(r,n,a,u),i-o))}WJ.exports=nHr});var cf=s((P3e,QJ)=>{"use strict";var Ne=w(),ls=R(),zJ=F(),XJ=I(),JJ=_(),xJ=O(),YJ=S(),aHr=k(),ps=X().factory,vf=FJ(),ZJ=L(),sHr=M(),gs=q(),uHr=BJ(),$J=DJ();function oHr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=ps();else if(arguments.length===1){if(r=arguments[0],!XJ(r))throw new TypeError(gs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(xJ(r,"prng")){if(!JJ(r.prng))throw new TypeError(gs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ps(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=uHr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!XJ(r))throw new TypeError(gs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(xJ(r,"prng")){if(!JJ(r.prng))throw new TypeError(gs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ps(r)}else e=ps()}return n===void 0?t=d:t=h,Ne(t,"NAME","hypergeometric"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),zJ(t,"state",YJ(null),aHr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",YJ(null)),Ne(t,"PRNG",e)):(ls(t,"seed",o),ls(t,"seedLength",v),zJ(t,"state",l,p),ls(t,"stateLength",f),ls(t,"byteLength",c),Ne(t,"toJSON",m),Ne(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=sHr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return $J(e,n,a,u)}function d(g,y,N){return g===ZJ||y===ZJ||!vf(g)||!vf(y)||!vf(N)||N>g?NaN:$J(e,g,y,N)}}QJ.exports=oHr});var rx=s((R3e,KJ)=>{"use strict";var fHr=cf(),vHr=fHr();KJ.exports=vHr});var ix=s((F3e,tx)=>{"use strict";var cHr=w(),ex=rx(),lHr=cf();cHr(ex,"factory",lHr);tx.exports=ex});var ux=s((M3e,sx)=>{"use strict";var nx=D().isPrimitive,ax=q();function pHr(r,e){return nx(r)?nx(e)?null:new TypeError(ax("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(ax("invalid argument. First argument must be a positive number. Value: `%s`.",r))}sx.exports=pHr});var lf=s((B3e,gx)=>{"use strict";var lt=w(),ms=R(),ox=F(),fx=I(),vx=_(),cx=O(),lx=S(),gHr=k(),Fi=Si().factory,px=E(),mHr=M(),ds=q(),dHr=ux();function hHr(){var r,e,t,i,n,a,u;if(arguments.length===0)r=Fi();else if(arguments.length===1){if(i=arguments[0],!fx(i))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",i));if(cx(i,"prng")){if(!vx(i.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Fi({prng:i.prng})}else r=Fi(i)}else{if(e=arguments[0],t=arguments[1],u=dHr(e,t),u)throw u;if(arguments.length>2){if(i=arguments[2],!fx(i))throw new TypeError(ds("invalid argument. Options argument must be an object. Value: `%s`.",i));if(cx(i,"prng")){if(!vx(i.prng))throw new TypeError(ds("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=Fi(e,t,{prng:i.prng})}else r=Fi(e,t,i)}else r=Fi(e,t)}return e===void 0?a=d:a=h,n=r.PRNG,lt(a,"NAME","invgamma"),i&&i.prng?(lt(a,"seed",null),lt(a,"seedLength",null),ox(a,"state",lx(null),gHr),lt(a,"stateLength",null),lt(a,"byteLength",null),lt(a,"toJSON",lx(null))):(ms(a,"seed",o),ms(a,"seedLength",v),ox(a,"state",l,p),ms(a,"stateLength",f),ms(a,"byteLength",c),lt(a,"toJSON",m)),lt(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=mHr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function h(){return 1/r()}function d(g,y){return px(g)||px(y)||g<=0||y<=0?NaN:1/r(g,y)}}gx.exports=hHr});var dx=s((k3e,mx)=>{"use strict";var yHr=lf(),qHr=yHr();mx.exports=qHr});var qx=s((j3e,yx)=>{"use strict";var bHr=w(),hx=dx(),wHr=lf();bHr(hx,"factory",wHr);yx.exports=hx});var Nx=s((C3e,Ex)=>{"use strict";var bx=D().isPrimitive,wx=q();function EHr(r,e){return bx(r)?bx(e)?null:new TypeError(wx("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(wx("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Ex.exports=EHr});var Sx=s((G3e,Ox)=>{"use strict";var Ax=W();function NHr(r,e,t){var i=r();return Ax(1-Ax(1-i,1/t),1/e)}Ox.exports=NHr});var pf=s((V3e,Mx)=>{"use strict";var Ae=w(),hs=R(),Tx=F(),Ix=I(),_x=_(),Lx=O(),Px=S(),AHr=k(),ys=X().factory,Rx=E(),OHr=M(),qs=q(),SHr=Nx(),Fx=Sx();function THr(){var r,e,t,i,n,a;if(arguments.length===0)e=ys();else if(arguments.length===1){if(r=arguments[0],!Ix(r))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Lx(r,"prng")){if(!_x(r.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ys(r)}else{if(n=arguments[0],a=arguments[1],i=SHr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Ix(r))throw new TypeError(qs("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Lx(r,"prng")){if(!_x(r.prng))throw new TypeError(qs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ys(r)}else e=ys()}return n===void 0?t=h:t=m,Ae(t,"NAME","kumaraswamy"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),Tx(t,"state",Px(null),AHr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",Px(null)),Ae(t,"PRNG",e)):(hs(t,"seed",u),hs(t,"seedLength",o),Tx(t,"state",c,l),hs(t,"stateLength",v),hs(t,"byteLength",f),Ae(t,"toJSON",p),Ae(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=OHr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return Fx(e,n,a)}function h(d,g){return Rx(d)||Rx(g)||d<=0||g<=0?NaN:Fx(e,d,g)}}Mx.exports=THr});var kx=s((U3e,Bx)=>{"use strict";var IHr=pf(),_Hr=IHr();Bx.exports=_Hr});var Gx=s((H3e,Cx)=>{"use strict";var LHr=w(),jx=kx(),PHr=pf();LHr(jx,"factory",PHr);Cx.exports=jx});var Hx=s((W3e,Ux)=>{"use strict";var RHr=j().isPrimitive,FHr=D().isPrimitive,Vx=q(),MHr=sr();function BHr(r,e){return!RHr(r)||MHr(r)?new TypeError(Vx("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):FHr(e)?null:new TypeError(Vx("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}Ux.exports=BHr});var Dx=s((D3e,Wx)=>{"use strict";var kHr=L0(),jHr=Y(),CHr=P();function GHr(r,e,t){var i=r()-.5;return e-t*kHr(i)*CHr(1-2*jHr(i))}Wx.exports=GHr});var gf=s((z3e,Qx)=>{"use strict";var Oe=w(),bs=R(),zx=F(),Xx=I(),Jx=_(),xx=O(),Yx=S(),VHr=k(),ws=X().factory,Zx=E(),UHr=M(),Es=q(),HHr=Hx(),$x=Dx();function WHr(){var r,e,t,i,n,a;if(arguments.length===0)e=ws();else if(arguments.length===1){if(r=arguments[0],!Xx(r))throw new TypeError(Es("invalid argument. Options argument must be an object. Value: `%s`.",r));if(xx(r,"prng")){if(!Jx(r.prng))throw new TypeError(Es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ws(r)}else{if(n=arguments[0],a=arguments[1],i=HHr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Xx(r))throw new TypeError(Es("invalid argument. Options argument must be an object. Value: `%s`.",r));if(xx(r,"prng")){if(!Jx(r.prng))throw new TypeError(Es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ws(r)}else e=ws()}return n===void 0?t=h:t=m,Oe(t,"NAME","laplace"),r&&r.prng?(Oe(t,"seed",null),Oe(t,"seedLength",null),zx(t,"state",Yx(null),VHr),Oe(t,"stateLength",null),Oe(t,"byteLength",null),Oe(t,"toJSON",Yx(null)),Oe(t,"PRNG",e)):(bs(t,"seed",u),bs(t,"seedLength",o),zx(t,"state",c,l),bs(t,"stateLength",v),bs(t,"byteLength",f),Oe(t,"toJSON",p),Oe(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=UHr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return $x(e,n,a)}function h(d,g){return Zx(d)||Zx(g)||g<=0?NaN:$x(e,d,g)}}Qx.exports=WHr});var rY=s((X3e,Kx)=>{"use strict";var DHr=gf(),zHr=DHr();Kx.exports=zHr});var iY=s((J3e,tY)=>{"use strict";var XHr=w(),eY=rY(),JHr=gf();XHr(eY,"factory",JHr);tY.exports=eY});var sY=s((x3e,aY)=>{"use strict";var xHr=j().isPrimitive,YHr=D().isPrimitive,nY=q(),ZHr=sr();function $Hr(r,e){return!xHr(r)||ZHr(r)?new TypeError(nY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):YHr(e)?null:new TypeError(nY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}aY.exports=$Hr});var oY=s((Y3e,uY)=>{"use strict";var QHr=$1();function KHr(r,e,t){var i=QHr(1-r()/2,0,1);return e+t/(i*i)}uY.exports=KHr});var mf=s((Z3e,dY)=>{"use strict";var Se=w(),Ns=R(),fY=F(),vY=I(),cY=_(),lY=O(),pY=S(),rWr=k(),As=X().factory,gY=E(),eWr=M(),Os=q(),tWr=sY(),mY=oY();function iWr(){var r,e,t,i,n,a;if(arguments.length===0)e=As();else if(arguments.length===1){if(r=arguments[0],!vY(r))throw new TypeError(Os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(lY(r,"prng")){if(!cY(r.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=As(r)}else{if(n=arguments[0],a=arguments[1],i=tWr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!vY(r))throw new TypeError(Os("invalid argument. Options argument must be an object. Value: `%s`.",r));if(lY(r,"prng")){if(!cY(r.prng))throw new TypeError(Os("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=As(r)}else e=As()}return n===void 0?t=h:t=m,Se(t,"NAME","levy"),r&&r.prng?(Se(t,"seed",null),Se(t,"seedLength",null),fY(t,"state",pY(null),rWr),Se(t,"stateLength",null),Se(t,"byteLength",null),Se(t,"toJSON",pY(null)),Se(t,"PRNG",e)):(Ns(t,"seed",u),Ns(t,"seedLength",o),fY(t,"state",c,l),Ns(t,"stateLength",v),Ns(t,"byteLength",f),Se(t,"toJSON",p),Se(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=eWr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return mY(e,n,a)}function h(d,g){return gY(d)||gY(g)||g<=0?NaN:mY(e,d,g)}}dY.exports=iWr});var yY=s(($3e,hY)=>{"use strict";var nWr=mf(),aWr=nWr();hY.exports=aWr});var wY=s((Q3e,bY)=>{"use strict";var sWr=w(),qY=yY(),uWr=mf();sWr(qY,"factory",uWr);bY.exports=qY});var AY=s((K3e,NY)=>{"use strict";var oWr=j().isPrimitive,fWr=D().isPrimitive,vWr=sr(),EY=q();function cWr(r,e){return!oWr(r)||vWr(r)?new TypeError(EY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):fWr(e)?null:new TypeError(EY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}NY.exports=cWr});var SY=s((rfe,OY)=>{"use strict";var lWr=P();function pWr(r,e,t){var i=r();return e+t*lWr(i/(1-i))}OY.exports=pWr});var df=s((efe,MY)=>{"use strict";var Te=w(),Ss=R(),TY=F(),IY=I(),_Y=_(),LY=O(),PY=S(),gWr=k(),Ts=X().factory,RY=E(),mWr=M(),Is=q(),dWr=AY(),FY=SY();function hWr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ts();else if(arguments.length===1){if(r=arguments[0],!IY(r))throw new TypeError(Is("invalid argument. Options argument must be an object. Value: `%s`.",r));if(LY(r,"prng")){if(!_Y(r.prng))throw new TypeError(Is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ts(r)}else{if(n=arguments[0],a=arguments[1],i=dWr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!IY(r))throw new TypeError(Is("invalid argument. Options argument must be an object. Value: `%s`.",r));if(LY(r,"prng")){if(!_Y(r.prng))throw new TypeError(Is("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ts(r)}else e=Ts()}return n===void 0?t=h:t=m,Te(t,"NAME","logistic"),r&&r.prng?(Te(t,"seed",null),Te(t,"seedLength",null),TY(t,"state",PY(null),gWr),Te(t,"stateLength",null),Te(t,"byteLength",null),Te(t,"toJSON",PY(null)),Te(t,"PRNG",e)):(Ss(t,"seed",u),Ss(t,"seedLength",o),TY(t,"state",c,l),Ss(t,"stateLength",v),Ss(t,"byteLength",f),Te(t,"toJSON",p),Te(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=mWr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return FY(e,n,a)}function h(d,g){return RY(d)||RY(g)||g<=0?NaN:FY(e,d,g)}}MY.exports=hWr});var kY=s((tfe,BY)=>{"use strict";var yWr=df(),qWr=yWr();BY.exports=qWr});var GY=s((ife,CY)=>{"use strict";var bWr=w(),jY=kY(),wWr=df();bWr(jY,"factory",wWr);CY.exports=jY});var HY=s((nfe,UY)=>{"use strict";var EWr=j().isPrimitive,NWr=D().isPrimitive,VY=q(),AWr=sr();function OWr(r,e){return!EWr(r)||AWr(r)?new TypeError(VY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):NWr(e)?null:new TypeError(VY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}UY.exports=OWr});var DY=s((afe,WY)=>{"use strict";var SWr=nr();function TWr(r,e,t){return SWr(e+t*r())}WY.exports=TWr});var hf=s((sfe,QY)=>{"use strict";var pt=w(),_s=R(),zY=F(),XY=I(),JY=_(),xY=O(),YY=S(),IWr=k(),Mi=nt().factory,ZY=E(),_Wr=M(),Ls=q(),LWr=HY(),$Y=DY();function PWr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Mi();else if(arguments.length===1){if(t=arguments[0],!XY(t))throw new TypeError(Ls("invalid argument. Options argument must be an object. Value: `%s`.",t));if(xY(t,"prng")){if(!JY(t.prng))throw new TypeError(Ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Mi({prng:t.prng})}else e=Mi(t)}else{if(u=arguments[0],r=arguments[1],a=LWr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!XY(t))throw new TypeError(Ls("invalid argument. Options argument must be an object. Value: `%s`.",t));if(xY(t,"prng")){if(!JY(t.prng))throw new TypeError(Ls("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Mi({prng:t.prng})}else e=Mi(t)}else e=Mi()}return u===void 0?n=d:n=h,i=e.PRNG,pt(n,"NAME","lognormal"),t&&t.prng?(pt(n,"seed",null),pt(n,"seedLength",null),zY(n,"state",YY(null),IWr),pt(n,"stateLength",null),pt(n,"byteLength",null),pt(n,"toJSON",YY(null))):(_s(n,"seed",o),_s(n,"seedLength",v),zY(n,"state",l,p),_s(n,"stateLength",f),_s(n,"byteLength",c),pt(n,"toJSON",m)),pt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=_Wr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return $Y(e,u,r)}function d(g,y){return ZY(g)||ZY(y)||y<=0?NaN:$Y(e,g,y)}}QY.exports=PWr});var rZ=s((ufe,KY)=>{"use strict";var RWr=hf(),FWr=RWr();KY.exports=FWr});var iZ=s((ofe,tZ)=>{"use strict";var MWr=w(),eZ=rZ(),BWr=hf();MWr(eZ,"factory",BWr);tZ.exports=eZ});var yf=s((ffe,nZ)=>{"use strict";var kWr=ii(),jWr=Q(),CWr=kWr-1;function GWr(){var r=jWr(1+CWr*Math.random());return r|0}nZ.exports=GWr});var wf=s((vfe,fZ)=>{"use strict";var Ie=w(),gt=R(),aZ=F(),qf=O(),VWr=I(),UWr=vr().isPrimitive,HWr=Gr(),WWr=ae().isPrimitive,sZ=La(),Dr=q(),Ps=ii(),Nr=Pt(),Bi=Ke(),DWr=M(),uZ=yf(),bf=Ps-1|0,zWr=Ps-1|0,XWr=16807,Rs=1,Fs=2,mt=2,Ar=4,Cn=5;function oZ(r,e){var t;return e?t="option":t="argument",r.length<Cn+1?new RangeError(Dr("invalid %s. State array has insufficient length.",t)):r[0]!==Rs?new RangeError(Dr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Rs,r[0])):r[1]!==Fs?new RangeError(Dr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Fs,r[1])):r[mt]!==1?new RangeError(Dr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[mt])):r[Ar]!==r.length-Cn?new RangeError(Dr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Cn,r[Ar])):null}function JWr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!VWr(r))throw new TypeError(Dr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(qf(r,"copy")&&(i.copy=r.copy,!UWr(r.copy)))throw new TypeError(Dr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(qf(r,"state")){if(t=r.state,i.state=!0,!sZ(t))throw new TypeError(Dr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=oZ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Nr(t.length),Bi(t.length,t,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,1),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,t[Ar])}if(n===void 0)if(qf(r,"seed"))if(n=r.seed,i.seed=!0,WWr(n)){if(n>zWr)throw new RangeError(Dr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(HWr(n)&&n.length>0)a=n.length,e=new Nr(Cn+a),e[0]=Rs,e[1]=Fs,e[mt]=1,e[Ar]=a,Bi.ndarray(a,n,1,0,e,1,Ar+1),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,1),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(Dr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=uZ()|0}else n=uZ()|0;return t===void 0&&(e=new Nr(Cn+1),e[0]=Rs,e[1]=Fs,e[mt]=1,e[Ar]=1,e[Ar+1]=n,t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,1),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),Ie(h,"NAME","minstd"),gt(h,"seed",o),gt(h,"seedLength",v),aZ(h,"state",l,p),gt(h,"stateLength",f),gt(h,"byteLength",c),Ie(h,"toJSON",m),Ie(h,"MIN",1),Ie(h,"MAX",Ps-1),Ie(h,"normalized",d),Ie(d,"NAME",h.NAME),gt(d,"seed",o),gt(d,"seedLength",v),aZ(d,"state",l,p),gt(d,"stateLength",f),gt(d,"byteLength",c),Ie(d,"toJSON",m),Ie(d,"MIN",(h.MIN-1)/bf),Ie(d,"MAX",(h.MAX-1)/bf),h;function o(){var g=e[Ar];return Bi(g,n,1,new Nr(g),1)}function v(){return e[Ar]}function f(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return Bi(g,e,1,new Nr(g),1)}function p(g){var y;if(!sZ(g))throw new TypeError(Dr("invalid argument. Must provide an Int32Array. Value: `%s`.",g));if(y=oZ(g,!1),y)throw y;i.copy===!1?i.state&&g.length===e.length?Bi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new Nr(g.length)),Bi(g.length,g,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(mt+1)*e.BYTES_PER_ELEMENT,1),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,e[Ar])}function m(){var g={};return g.type="PRNG",g.name=h.NAME,g.state=DWr(e),g.params=[],g}function h(){var g=t[0]|0;return g=XWr*g%Ps|0,t[0]=g,g|0}function d(){return(h()-1)/bf}}fZ.exports=JWr});var cZ=s((cfe,vZ)=>{"use strict";var xWr=wf(),YWr=yf(),ZWr=xWr({seed:YWr()});vZ.exports=ZWr});var gZ=s((lfe,pZ)=>{"use strict";var $Wr=w(),lZ=cZ(),QWr=wf();$Wr(lZ,"factory",QWr);pZ.exports=lZ});var dZ=s((pfe,mZ)=>{"use strict";var KWr=E(),rDr=8;function eDr(r,e,t){var i,n;for(n=0;n<rDr;n++)if(i=r(),KWr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}mZ.exports=eDr});var Ef=s((gfe,hZ)=>{"use strict";var tDr=ii(),iDr=Q(),nDr=tDr-1;function aDr(){var r=iDr(1+nDr*Math.random());return r|0}hZ.exports=aDr});var Of=s((mfe,NZ)=>{"use strict";var _e=w(),dt=R(),yZ=F(),Nf=O(),sDr=I(),uDr=vr().isPrimitive,oDr=Gr(),fDr=ae().isPrimitive,qZ=La(),ki=Ke(),vDr=Q(),Or=Pt(),Gn=ii(),cDr=M(),jr=q(),bZ=dZ(),wZ=Ef(),Af=Gn-1|0,lDr=Gn-1|0,pDr=16807,Tr=32,ks=1,js=3,ht=2,ji=Tr+3,Sr=Tr+6,Vn=Tr+7,Ms=ji+1,Bs=ji+2;function EZ(r,e){var t;return e?t="option":t="argument",r.length<Vn+1?new RangeError(jr("invalid %s. State array has insufficient length.",t)):r[0]!==ks?new RangeError(jr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,ks,r[0])):r[1]!==js?new RangeError(jr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,js,r[1])):r[ht]!==Tr?new RangeError(jr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Tr,r[ht])):r[ji]!==2?new RangeError(jr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[ji])):r[Sr]!==r.length-Vn?new RangeError(jr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Vn,r[Sr])):null}function gDr(r){var e,t,i,n,a,u;if(i={},arguments.length){if(!sDr(r))throw new TypeError(jr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Nf(r,"copy")&&(i.copy=r.copy,!uDr(r.copy)))throw new TypeError(jr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Nf(r,"state")){if(t=r.state,i.state=!0,!qZ(t))throw new TypeError(jr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(u=EZ(t,!0),u)throw u;i.copy===!1?e=t:(e=new Or(t.length),ki(t.length,t,1,e,1)),t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,Tr),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,t[Sr])}if(n===void 0)if(Nf(r,"seed"))if(n=r.seed,i.seed=!0,fDr(n)){if(n>lDr)throw new RangeError(jr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(oDr(n)&&n.length>0)a=n.length,e=new Or(Vn+a),e[0]=ks,e[1]=js,e[ht]=Tr,e[ji]=2,e[Bs]=n[0],e[Sr]=a,ki.ndarray(a,n,1,0,e,1,Sr+1),t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,Tr),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,a),t=bZ(h,t,Tr),e[Ms]=t[0];else throw new TypeError(jr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=wZ()|0}else n=wZ()|0;return t===void 0&&(e=new Or(Vn+1),e[0]=ks,e[1]=js,e[ht]=Tr,e[ji]=2,e[Bs]=n,e[Sr]=1,e[Sr+1]=n,t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,Tr),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,1),t=bZ(h,t,Tr),e[Ms]=t[0]),_e(d,"NAME","minstd-shuffle"),dt(d,"seed",o),dt(d,"seedLength",v),yZ(d,"state",l,p),dt(d,"stateLength",f),dt(d,"byteLength",c),_e(d,"toJSON",m),_e(d,"MIN",1),_e(d,"MAX",Gn-1),_e(d,"normalized",g),_e(g,"NAME",d.NAME),dt(g,"seed",o),dt(g,"seedLength",v),yZ(g,"state",l,p),dt(g,"stateLength",f),dt(g,"byteLength",c),_e(g,"toJSON",m),_e(g,"MIN",(d.MIN-1)/Af),_e(g,"MAX",(d.MAX-1)/Af),d;function o(){var y=e[Sr];return ki(y,n,1,new Or(y),1)}function v(){return e[Sr]}function f(){return e.length}function c(){return e.byteLength}function l(){var y=e.length;return ki(y,e,1,new Or(y),1)}function p(y){var N;if(!qZ(y))throw new TypeError(jr("invalid argument. Must provide an Int32Array. Value: `%s`.",y));if(N=EZ(y,!1),N)throw N;i.copy===!1?i.state&&y.length===e.length?ki(y.length,y,1,e,1):(e=y,i.state=!0):(y.length!==e.length&&(e=new Or(y.length)),ki(y.length,y,1,e,1)),t=new Or(e.buffer,e.byteOffset+(ht+1)*e.BYTES_PER_ELEMENT,Tr),n=new Or(e.buffer,e.byteOffset+(Sr+1)*e.BYTES_PER_ELEMENT,e[Sr])}function m(){var y={};return y.type="PRNG",y.name=d.NAME,y.state=cDr(e),y.params=[],y}function h(){var y=e[Bs]|0;return y=pDr*y%Gn|0,e[Bs]=y,y|0}function d(){var y,N;return y=e[Ms],N=vDr(Tr*(y/Gn)),y=t[N],e[Ms]=y,t[N]=h(),y}function g(){return(d()-1)/Af}}NZ.exports=gDr});var OZ=s((dfe,AZ)=>{"use strict";var mDr=Of(),dDr=Ef(),hDr=mDr({seed:dDr()});AZ.exports=hDr});var IZ=s((hfe,TZ)=>{"use strict";var yDr=w(),SZ=OZ(),qDr=Of();yDr(SZ,"factory",qDr);TZ.exports=SZ});var LZ=s((yfe,_Z)=>{"use strict";var bDr=nr();function wDr(r,e){for(var t=r(),i=1;t>bDr(-e);)i+=1,t*=r();return i-1}_Z.exports=wDr});var RZ=s((qfe,PZ)=>{"use strict";var EDr=Q();function NDr(r){return EDr(r)===r&&r<0}PZ.exports=NDr});var MZ=s((bfe,FZ)=>{"use strict";var ADr=RZ();FZ.exports=ADr});var kZ=s((wfe,BZ)=>{"use strict";var ODr=MZ(),SDr=rn();function TDr(r){return ODr(r)?NaN:SDr(r+1)}BZ.exports=TDr});var CZ=s((Efe,jZ)=>{"use strict";var IDr=kZ();jZ.exports=IDr});var HZ=s((Nfe,UZ)=>{"use strict";var _Dr=CZ(),GZ=Q(),LDr=L0(),PDr=C(),VZ=Y(),Cs=P(),RDr=q1(),FDr=1/12,MDr=1/360;function BDr(r,e){var t,i,n,a,u,o,v,f,c,l;for(t=PDr(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,u=-3.6224/(v-2)+.9277,n=.86*u;;){if(l=r(),l<=n)return c=l/u-.43,c*=2*o/(.5-VZ(c))+v,c+=e+.445,GZ(c);if(l>=u?c=r()-.5:(c=l/u-.93,c=LDr(c)*.5-c,l=u*r()),a=.5-VZ(c),(a>=.013||a>=l)&&(f=GZ((2*o/a+v)*c+e+.445),l*=i/(o/(a*a)+v),c=(f+.5)*Cs(e/f),c+=-e-RDr+f,c-=(FDr-MDr/(f*f))/f,f>=10&&c>=Cs(l*t)||(c=f*Cs(e)-e-_Dr(f),f>=0&&f<=9&&c>=Cs(l))))return f}}UZ.exports=BDr});var DZ=s((Afe,WZ)=>{"use strict";var kDr=LZ(),jDr=HZ();function CDr(r,e){return e<30?kDr(r,e):jDr(r,e)}WZ.exports=CDr});var Sf=s((Ofe,$Z)=>{"use strict";var Le=w(),Gs=R(),zZ=F(),GDr=D().isPrimitive,XZ=I(),JZ=_(),xZ=O(),YZ=S(),VDr=k(),Vs=X().factory,UDr=E(),HDr=M(),Us=q(),ZZ=DZ();function WDr(){var r,e,t,i;if(arguments.length===0)t=Vs();else if(arguments.length===1&&XZ(arguments[0]))if(e=arguments[0],xZ(e,"prng")){if(!JZ(e.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Vs(e);else{if(r=arguments[0],!GDr(r))throw new TypeError(Us("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!XZ(e))throw new TypeError(Us("invalid argument. Options argument must be an object. Value: `%s`.",e));if(xZ(e,"prng")){if(!JZ(e.prng))throw new TypeError(Us("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Vs(e)}else t=Vs()}return r===void 0?i=p:i=l,Le(i,"NAME","poisson"),e&&e.prng?(Le(i,"seed",null),Le(i,"seedLength",null),zZ(i,"state",YZ(null),VDr),Le(i,"stateLength",null),Le(i,"byteLength",null),Le(i,"toJSON",YZ(null)),Le(i,"PRNG",t)):(Gs(i,"seed",n),Gs(i,"seedLength",a),zZ(i,"state",v,f),Gs(i,"stateLength",u),Gs(i,"byteLength",o),Le(i,"toJSON",c),Le(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=HDr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return ZZ(t,r)}function p(m){return UDr(m)||m<=0?NaN:ZZ(t,m)}}$Z.exports=WDr});var KZ=s((Sfe,QZ)=>{"use strict";var DDr=Sf(),zDr=DDr();QZ.exports=zDr});var Tf=s((Tfe,e$)=>{"use strict";var XDr=w(),r$=KZ(),JDr=Sf();XDr(r$,"factory",JDr);e$.exports=r$});var i$=s((Ife,t$)=>{"use strict";var xDr=D().isPrimitive,YDr=j().isPrimitive,If=q(),ZDr=sr();function $Dr(r,e){return xDr(r)?!YDr(e)||ZDr(e)?new TypeError(If("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(If("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(If("invalid argument. First argument must be a positive number. Value: `%s`.",r))}t$.exports=$Dr});var Rf=s((_fe,c$)=>{"use strict";var yt=w(),Hs=R(),n$=F(),Ci=O(),a$=I(),_f=Kr(),s$=vr().isPrimitive,u$=_(),o$=S(),QDr=k(),f$=E(),Gi=Tf().factory,Ws=Si().factory,Lf=Ke(),Pf=lr(),v$=Fn(),KDr=M(),Pe=q(),rzr=i$();function ezr(){var r,e,t,i,n,a,u,o,v,f;if(u=!0,arguments.length===0)i={copy:!1},t=Gi(i);else if(arguments.length===1){if(i=arguments[0],!a$(i))throw new TypeError(Pe("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ci(i,"copy")&&!s$(i.copy))throw new TypeError(Pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ci(i,"prng")){if(!u$(i.prng))throw new TypeError(Pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Gi({prng:i.prng})}else{if(Ci(i,"state")&&!_f(i.state))throw new TypeError(Pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=v$({},i),i.copy===!1?u=!1:i.state&&(i.state=Lf(i.state.length,i.state,1,new Pf(i.state.length),1)),i.copy=!1,t=Gi(i)}}else{if(f=arguments[0],v=arguments[1],o=rzr(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!a$(i))throw new TypeError(Pe("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Ci(i,"copy")&&!s$(i.copy))throw new TypeError(Pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Ci(i,"prng")){if(!u$(i.prng))throw new TypeError(Pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Gi({prng:i.prng})}else{if(Ci(i,"state")&&!_f(i.state))throw new TypeError(Pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=v$({},i),i.copy===!1?u=!1:i.state&&(i.state=Lf(i.state.length,i.state,1,new Pf(i.state.length),1)),i.copy=!1,t=Gi(i)}}else i={copy:!1},t=Gi(i)}return i&&i.prng?f===void 0?r=Ws({prng:i.prng}):r=Ws(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=Ws({state:e,copy:!1}):r=Ws(f,v/(1-v),{state:e,copy:!1})),f===void 0?n=N:n=y,a=t.PRNG,yt(n,"NAME","negative-binomial"),i&&i.prng?(yt(n,"seed",null),yt(n,"seedLength",null),n$(n,"state",o$(null),QDr),yt(n,"stateLength",null),yt(n,"byteLength",null),yt(n,"toJSON",o$(null))):(Hs(n,"seed",c),Hs(n,"seedLength",l),n$(n,"state",h,d),Hs(n,"stateLength",p),Hs(n,"byteLength",m),yt(n,"toJSON",g)),yt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function m(){return a.byteLength}function h(){return a.state}function d(A){if(!_f(A))throw new TypeError(Pe("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));u&&(A=Lf(A.length,A,1,new Pf(A.length),1)),a.state=A}function g(){var A={};return A.type="PRNG",A.name=n.NAME,A.state=KDr(a.state),f===void 0?A.params=[]:A.params=[f,v],A}function y(){return t(r())}function N(A,G){return f$(A)||f$(G)||G<=0||G>=1?NaN:t(r(A,G/(1-G)))}}c$.exports=ezr});var p$=s((Lfe,l$)=>{"use strict";var tzr=Rf(),izr=tzr();l$.exports=izr});var d$=s((Pfe,m$)=>{"use strict";var nzr=w(),g$=p$(),azr=Rf();nzr(g$,"factory",azr);m$.exports=g$});var q$=s((Rfe,y$)=>{"use strict";var szr=j().isPrimitive,uzr=D().isPrimitive,h$=q(),ozr=sr();function fzr(r,e){return!szr(r)||ozr(r)?new TypeError(h$("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):uzr(e)?null:new TypeError(h$("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}y$.exports=fzr});var w$=s((Ffe,b$)=>{"use strict";function vzr(r,e,t){return e+t*r()}b$.exports=vzr});var Ff=s((Mfe,_$)=>{"use strict";var qt=w(),Ds=R(),E$=F(),N$=I(),A$=_(),O$=O(),S$=S(),czr=k(),Vi=nt().factory,T$=E(),lzr=M(),zs=q(),pzr=q$(),I$=w$();function gzr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=Vi();else if(arguments.length===1){if(t=arguments[0],!N$(t))throw new TypeError(zs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(O$(t,"prng")){if(!A$(t.prng))throw new TypeError(zs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Vi({prng:t.prng})}else e=Vi(t)}else{if(u=arguments[0],r=arguments[1],a=pzr(u,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!N$(t))throw new TypeError(zs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(O$(t,"prng")){if(!A$(t.prng))throw new TypeError(zs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Vi({prng:t.prng})}else e=Vi(t)}else e=Vi()}return u===void 0?n=d:n=h,i=e.PRNG,qt(n,"NAME","normal"),t&&t.prng?(qt(n,"seed",null),qt(n,"seedLength",null),E$(n,"state",S$(null),czr),qt(n,"stateLength",null),qt(n,"byteLength",null),qt(n,"toJSON",S$(null))):(Ds(n,"seed",o),Ds(n,"seedLength",v),E$(n,"state",l,p),Ds(n,"stateLength",f),Ds(n,"byteLength",c),qt(n,"toJSON",m)),qt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=lzr(i.state),u===void 0?g.params=[]:g.params=[u,r],g}function h(){return I$(e,u,r)}function d(g,y){return T$(g)||T$(y)||y<=0?NaN:I$(e,g,y)}}_$.exports=gzr});var P$=s((Bfe,L$)=>{"use strict";var mzr=Ff(),dzr=mzr();L$.exports=dzr});var M$=s((kfe,F$)=>{"use strict";var hzr=w(),R$=P$(),yzr=Ff();hzr(R$,"factory",yzr);F$.exports=R$});var C$=s((jfe,j$)=>{"use strict";var B$=D().isPrimitive,k$=q();function qzr(r,e){return B$(r)?B$(e)?null:new TypeError(k$("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(k$("invalid argument. First argument must be a positive number. Value: `%s`.",r))}j$.exports=qzr});var V$=s((Cfe,G$)=>{"use strict";var bzr=W();function wzr(r,e,t){return t/bzr(r(),1/e)}G$.exports=wzr});var Mf=s((Gfe,x$)=>{"use strict";var Re=w(),Xs=R(),U$=F(),H$=I(),W$=_(),D$=O(),z$=S(),Ezr=k(),Js=X().factory,X$=E(),Nzr=M(),xs=q(),Azr=C$(),J$=V$();function Ozr(){var r,e,t,i,n,a;if(arguments.length===0)i=Js();else if(arguments.length===1){if(t=arguments[0],!H$(t))throw new TypeError(xs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(D$(t,"prng")){if(!W$(t.prng))throw new TypeError(xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Js(t)}else{if(r=arguments[0],e=arguments[1],a=Azr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!H$(t))throw new TypeError(xs("invalid argument. Options argument must be an object. Value: `%s`.",t));if(D$(t,"prng")){if(!W$(t.prng))throw new TypeError(xs("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Js(t)}else i=Js()}return r===void 0?n=h:n=m,Re(n,"NAME","pareto-type1"),t&&t.prng?(Re(n,"seed",null),Re(n,"seedLength",null),U$(n,"state",z$(null),Ezr),Re(n,"stateLength",null),Re(n,"byteLength",null),Re(n,"toJSON",z$(null)),Re(n,"PRNG",i)):(Xs(n,"seed",u),Xs(n,"seedLength",o),U$(n,"state",c,l),Xs(n,"stateLength",v),Xs(n,"byteLength",f),Re(n,"toJSON",p),Re(n,"PRNG",i),i=i.normalized),n;function u(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function c(){return i.state}function l(d){i.state=d}function p(){var d={};return d.type="PRNG",d.name=n.NAME,d.state=Nzr(i.state),r===void 0?d.params=[]:d.params=[r,e],d}function m(){return J$(i,r,e)}function h(d,g){return X$(d)||X$(g)||d<=0||g<=0?NaN:J$(i,d,g)}}x$.exports=Ozr});var Z$=s((Vfe,Y$)=>{"use strict";var Szr=Mf(),Tzr=Szr();Y$.exports=Tzr});var K$=s((Ufe,Q$)=>{"use strict";var Izr=w(),$$=Z$(),_zr=Mf();Izr($$,"factory",_zr);Q$.exports=$$});var eQ=s((Hfe,rQ)=>{"use strict";var Lzr=C(),Pzr=P();function Rzr(r,e){return e*Lzr(-2*Pzr(r()))}rQ.exports=Rzr});var Bf=s((Wfe,oQ)=>{"use strict";var Fe=w(),Ys=R(),tQ=F(),Fzr=D().isPrimitive,iQ=I(),nQ=_(),aQ=O(),sQ=S(),Mzr=k(),Zs=X().factory,Bzr=E(),kzr=M(),$s=q(),uQ=eQ();function jzr(){var r,e,t,i;if(arguments.length===0)t=Zs();else if(arguments.length===1&&iQ(arguments[0]))if(e=arguments[0],aQ(e,"prng")){if(!nQ(e.prng))throw new TypeError($s("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Zs(e);else{if(r=arguments[0],!Fzr(r))throw new TypeError($s("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!iQ(e))throw new TypeError($s("invalid argument. Options argument must be an object. Value: `%s`.",e));if(aQ(e,"prng")){if(!nQ(e.prng))throw new TypeError($s("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Zs(e)}else t=Zs()}return r===void 0?i=p:i=l,Fe(i,"NAME","rayleigh"),e&&e.prng?(Fe(i,"seed",null),Fe(i,"seedLength",null),tQ(i,"state",sQ(null),Mzr),Fe(i,"stateLength",null),Fe(i,"byteLength",null),Fe(i,"toJSON",sQ(null)),Fe(i,"PRNG",t)):(Ys(i,"seed",n),Ys(i,"seedLength",a),tQ(i,"state",v,f),Ys(i,"stateLength",u),Ys(i,"byteLength",o),Fe(i,"toJSON",c),Fe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function u(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=kzr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return uQ(t,r)}function p(m){return Bzr(m)||m<=0?NaN:uQ(t,m)}}oQ.exports=jzr});var vQ=s((Dfe,fQ)=>{"use strict";var Czr=Bf(),Gzr=Czr();fQ.exports=Gzr});var pQ=s((zfe,lQ)=>{"use strict";var Vzr=w(),cQ=vQ(),Uzr=Bf();Vzr(cQ,"factory",Uzr);lQ.exports=cQ});var Gf=s((Xfe,EQ)=>{"use strict";var bt=w(),Qs=R(),gQ=F(),Ui=O(),mQ=D().isPrimitive,dQ=I(),kf=Kr(),hQ=vr().isPrimitive,Hzr=E(),yQ=_(),qQ=S(),Wzr=k(),Ks=kn().factory,Hi=nt().factory,jf=Ke(),Cf=lr(),bQ=Fn(),Dzr=M(),$r=q(),wQ=C();function zzr(){var r,e,t,i,n,a,u,o;if(u=!0,arguments.length===0)n={copy:!1},t=Hi(n);else if(arguments.length===1)if(dQ(arguments[0])){if(n=arguments[0],Ui(n,"copy")&&!hQ(n.copy))throw new TypeError($r("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ui(n,"prng")){if(!yQ(n.prng))throw new TypeError($r("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Hi({prng:n.prng})}else{if(Ui(n,"state")&&!kf(n.state))throw new TypeError($r("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=bQ({},n),n.copy===!1?u=!1:n.state&&(n.state=jf(n.state.length,n.state,1,new Cf(n.state.length),1)),n.copy=!1,t=Hi(n)}}else{if(o=arguments[0],!mQ(o))throw new TypeError($r("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=Hi(n)}else{if(o=arguments[0],!mQ(o))throw new TypeError($r("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!dQ(n))throw new TypeError($r("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ui(n,"copy")&&!hQ(n.copy))throw new TypeError($r("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ui(n,"prng")){if(!yQ(n.prng))throw new TypeError($r("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Hi({prng:n.prng})}else{if(Ui(n,"state")&&!kf(n.state))throw new TypeError($r("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=bQ({},n),n.copy===!1?u=!1:n.state&&(n.state=jf(n.state.length,n.state,1,new Cf(n.state.length),1)),n.copy=!1,t=Hi(n)}}return n&&n.prng?o===void 0?r=Ks({prng:n.prng}):r=Ks(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=Ks({state:e,copy:!1}):r=Ks(o,{state:e,copy:!1})),o===void 0?a=g:a=d,i=t.PRNG,bt(a,"NAME","t"),n&&n.prng?(bt(a,"seed",null),bt(a,"seedLength",null),gQ(a,"state",qQ(null),Wzr),bt(a,"stateLength",null),bt(a,"byteLength",null),bt(a,"toJSON",qQ(null))):(Qs(a,"seed",v),Qs(a,"seedLength",f),gQ(a,"state",p,m),Qs(a,"stateLength",c),Qs(a,"byteLength",l),bt(a,"toJSON",h)),bt(a,"PRNG",i),a;function v(){return i.seed}function f(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(y){if(!kf(y))throw new TypeError($r("invalid argument. Must provide a Uint32Array. Value: `%s`.",y));u&&(y=jf(y.length,y,1,new Cf(y.length),1)),i.state=y}function h(){var y={};return y.type="PRNG",y.name=a.NAME,y.state=Dzr(i.state),o===void 0?y.params=[]:y.params=[o],y}function d(){return t()/wQ(r()/o)}function g(y){return Hzr(y)||y<=0?NaN:t()/wQ(r(y)/y)}}EQ.exports=zzr});var AQ=s((Jfe,NQ)=>{"use strict";var Xzr=Gf(),Jzr=Xzr();NQ.exports=Jzr});var TQ=s((xfe,SQ)=>{"use strict";var xzr=w(),OQ=AQ(),Yzr=Gf();xzr(OQ,"factory",Yzr);SQ.exports=OQ});var _Q=s((Yfe,IQ)=>{"use strict";var Vf=j().isPrimitive,ru=q(),Uf=sr();function Zzr(r,e,t){return!Vf(r)||Uf(r)?new TypeError(ru("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Vf(e)||Uf(e)?new TypeError(ru("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Vf(t)||Uf(t)?new TypeError(ru("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(ru("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}IQ.exports=Zzr});var RQ=s((Zfe,PQ)=>{"use strict";var LQ=C();function $zr(r,e,t,i){var n,a,u;return n=(i-e)/(t-e),u=r(),u<n?(a=(t-e)*(i-e),e+LQ(a*u)):(a=(t-e)*(t-i),t-LQ(a*(1-u)))}PQ.exports=$zr});var Wf=s(($fe,GQ)=>{"use strict";var Me=w(),eu=R(),FQ=F(),MQ=I(),BQ=_(),kQ=O(),jQ=S(),Qzr=k(),tu=X().factory,Hf=E(),Kzr=M(),iu=q(),rXr=_Q(),CQ=RQ();function eXr(){var r,e,t,i,n,a,u;if(arguments.length===0)e=tu();else if(arguments.length===1){if(r=arguments[0],!MQ(r))throw new TypeError(iu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(kQ(r,"prng")){if(!BQ(r.prng))throw new TypeError(iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=tu(r)}else{if(n=arguments[0],a=arguments[1],u=arguments[2],i=rXr(n,a,u),i)throw i;if(arguments.length>3){if(r=arguments[3],!MQ(r))throw new TypeError(iu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(kQ(r,"prng")){if(!BQ(r.prng))throw new TypeError(iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=tu(r)}else e=tu()}return n===void 0?t=d:t=h,Me(t,"NAME","triangular"),r&&r.prng?(Me(t,"seed",null),Me(t,"seedLength",null),FQ(t,"state",jQ(null),Qzr),Me(t,"stateLength",null),Me(t,"byteLength",null),Me(t,"toJSON",jQ(null)),Me(t,"PRNG",e)):(eu(t,"seed",o),eu(t,"seedLength",v),FQ(t,"state",l,p),eu(t,"stateLength",f),eu(t,"byteLength",c),Me(t,"toJSON",m),Me(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Kzr(e.state),n===void 0?g.params=[]:g.params=[n,a,u],g}function h(){return CQ(e,n,a,u)}function d(g,y,N){return Hf(g)||Hf(y)||Hf(N)||!(g<=N&&N<=y)?NaN:CQ(e,g,y,N)}}GQ.exports=eXr});var UQ=s((Qfe,VQ)=>{"use strict";var tXr=Wf(),iXr=tXr();VQ.exports=iXr});var DQ=s((Kfe,WQ)=>{"use strict";var nXr=w(),HQ=UQ(),aXr=Wf();nXr(HQ,"factory",aXr);WQ.exports=HQ});var xQ=s((rve,JQ)=>{"use strict";var zQ=j().isPrimitive,Df=q(),XQ=sr();function sXr(r,e){return!zQ(r)||XQ(r)?new TypeError(Df("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!zQ(e)||XQ(e)?new TypeError(Df("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Df("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}JQ.exports=sXr});var ZQ=s((eve,YQ)=>{"use strict";function uXr(r,e,t){var i=r();return t*i+(1-i)*e}YQ.exports=uXr});var zf=s((tve,nK)=>{"use strict";var Be=w(),nu=R(),$Q=F(),QQ=I(),KQ=_(),rK=O(),eK=S(),oXr=k(),au=X().factory,tK=E(),fXr=M(),su=q(),vXr=xQ(),iK=ZQ();function cXr(){var r,e,t,i,n,a;if(arguments.length===0)e=au();else if(arguments.length===1){if(r=arguments[0],!QQ(r))throw new TypeError(su("invalid argument. Options argument must be an object. Value: `%s`.",r));if(rK(r,"prng")){if(!KQ(r.prng))throw new TypeError(su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=au(r)}else{if(n=arguments[0],a=arguments[1],i=vXr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!QQ(r))throw new TypeError(su("invalid argument. Options argument must be an object. Value: `%s`.",r));if(rK(r,"prng")){if(!KQ(r.prng))throw new TypeError(su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=au(r)}else e=au()}return n===void 0?t=h:t=m,Be(t,"NAME","uniform"),r&&r.prng?(Be(t,"seed",null),Be(t,"seedLength",null),$Q(t,"state",eK(null),oXr),Be(t,"stateLength",null),Be(t,"byteLength",null),Be(t,"toJSON",eK(null)),Be(t,"PRNG",e)):(nu(t,"seed",u),nu(t,"seedLength",o),$Q(t,"state",c,l),nu(t,"stateLength",v),nu(t,"byteLength",f),Be(t,"toJSON",p),Be(t,"PRNG",e),e=e.normalized),t;function u(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function c(){return e.state}function l(d){e.state=d}function p(){var d={};return d.type="PRNG",d.name=t.NAME,d.state=fXr(e.state),n===void 0?d.params=[]:d.params=[n,a],d}function m(){return iK(e,n,a)}function h(d,g){return tK(d)||tK(g)||d>=g?NaN:iK(e,d,g)}}nK.exports=cXr});var sK=s((ive,aK)=>{"use strict";var lXr=zf(),pXr=lXr();aK.exports=pXr});var fK=s((nve,oK)=>{"use strict";var gXr=w(),uK=sK(),mXr=zf();gXr(uK,"factory",mXr);oK.exports=uK});var pK=s((ave,lK)=>{"use strict";var vK=D().isPrimitive,cK=q();function dXr(r,e){return vK(r)?vK(e)?null:new TypeError(cK("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(cK("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}lK.exports=dXr});var mK=s((sve,gK)=>{"use strict";var hXr=W(),yXr=P();function qXr(r,e,t){return t*hXr(-yXr(1-r()),1/e)}gK.exports=qXr});var Xf=s((uve,NK)=>{"use strict";var ke=w(),uu=R(),dK=F(),hK=I(),yK=_(),qK=O(),bK=S(),bXr=k(),ou=X().factory,wK=E(),wXr=M(),fu=q(),EXr=pK(),EK=mK();function NXr(){var r,e,t,i,n,a;if(arguments.length===0)t=ou();else if(arguments.length===1){if(e=arguments[0],!hK(e))throw new TypeError(fu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(qK(e,"prng")){if(!yK(e.prng))throw new TypeError(fu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ou(e)}else{if(a=arguments[0],r=arguments[1],n=EXr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!hK(e))throw new TypeError(fu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(qK(e,"prng")){if(!yK(e.prng))throw new TypeError(fu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ou(e)}else t=ou()}return r===void 0?i=h:i=m,ke(i,"NAME","weibull"),e&&e.prng?(ke(i,"seed",null),ke(i,"seedLength",null),dK(i,"state",bK(null),bXr),ke(i,"stateLength",null),ke(i,"byteLength",null),ke(i,"toJSON",bK(null)),ke(i,"PRNG",t)):(uu(i,"seed",u),uu(i,"seedLength",o),dK(i,"state",c,l),uu(i,"stateLength",v),uu(i,"byteLength",f),ke(i,"toJSON",p),ke(i,"PRNG",t),t=t.normalized),i;function u(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function c(){return t.state}function l(d){t.state=d}function p(){var d={};return d.type="PRNG",d.name=i.NAME,d.state=wXr(t.state),a===void 0?d.params=[]:d.params=[a,r],d}function m(){return EK(t,a,r)}function h(d,g){return wK(d)||wK(g)||d<=0||g<=0?NaN:EK(t,d,g)}}NK.exports=NXr});var OK=s((ove,AK)=>{"use strict";var AXr=Xf(),OXr=AXr();AK.exports=OXr});var IK=s((fve,TK)=>{"use strict";var SXr=w(),SK=OK(),TXr=Xf();SXr(SK,"factory",TXr);TK.exports=SK});var LK=s((vve,_K)=>{"use strict";var B={};B.arcsine=kV().factory;B.bernoulli=JV().factory;B.beta=mH().factory;B.betaprime=rW().factory;B.binomial=BW().factory;B.boxMueller=ZW().factory;B.cauchy=gD().factory;B.chi=kD().factory;B.chisquare=kn().factory;B.cosine=mz().factory;B.discreteUniform=Bz().factory;B.erlang=Kz().factory;B.exponential=pX().factory;B.f=RX().factory;B.frechet=YX().factory;B.gamma=Si().factory;B.geometric=vJ().factory;B.gumbel=_J().factory;B.hypergeometric=ix().factory;B.improvedZiggurat=nt().factory;B.invgamma=qx().factory;B.kumaraswamy=Gx().factory;B.laplace=iY().factory;B.levy=wY().factory;B.logistic=GY().factory;B.lognormal=iZ().factory;B.minstd=gZ().factory;B.minstdShuffle=IZ().factory;B.mt19937=X().factory;B.negativeBinomial=d$().factory;B.normal=M$().factory;B.pareto1=K$().factory;B.poisson=Tf().factory;B.rayleigh=pQ().factory;B.t=TQ().factory;B.triangular=DQ().factory;B.uniform=fK().factory;B.weibull=IK().factory;_K.exports=B});var RK=s((cve,PK)=>{"use strict";function IXr(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h,d,g,y,N,A;for(h=e[1],d=e[0],g=r[0],y=r[1],c=t[0],l=t[1],u=c[1],o=c[0]-h*u,v=l[1],f=l[0]-h*v,p=0,m=0,n=[],N=0;N<d;N++){for(a=[],A=0;A<h;A++)a.push(i(g[p],y[m])),p+=u,m+=v;n.push(a),p+=o,m+=f}return n}PK.exports=IXr});var MK=s((lve,FK)=>{"use strict";var _Xr=j().isPrimitive,LXr=L(),PXr=U(),RXr=q();function FXr(r,e){return t;function t(i){var n;if(!_Xr(i)){if(e.nonnumeric===void 0)throw new TypeError(RXr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===LXr?e.pinf:n===PXr?e.ninf:n}}FK.exports=FXr});var CK=s((pve,jK)=>{"use strict";var BK=j().isPrimitive,MXr=L(),BXr=U(),kK=q();function kXr(r,e){return t;function t(i,n){var a;if(!BK(i)){if(e.nonnumeric===void 0)throw new TypeError(kK("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!BK(n)){if(e.nonnumeric===void 0)throw new TypeError(kK("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===MXr?e.pinf:a===BXr?e.ninf:a}}jK.exports=kXr});var VK=s((gve,GK)=>{"use strict";var Jf=j().isPrimitive,jXr=L(),CXr=U(),xf=q();function GXr(r,e){return t;function t(i,n,a){var u;if(!Jf(i)){if(e.nonnumeric===void 0)throw new TypeError(xf("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Jf(n)){if(e.nonnumeric===void 0)throw new TypeError(xf("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Jf(a)){if(e.nonnumeric===void 0)throw new TypeError(xf("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return u=r(i,n,a),u!==u?e.nan:u===jXr?e.pinf:u===CXr?e.ninf:u}}GK.exports=GXr});var HK=s((mve,UK)=>{"use strict";var VXr=K().isPrimitive,UXr=q();function HXr(r){return e;function e(t){if(!VXr(t))throw new TypeError(UXr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}UK.exports=HXr});var XK=s((dve,zK)=>{"use strict";var WK=K().isPrimitive,DK=q();function WXr(r){return e;function e(t,i){if(!WK(t))throw new TypeError(DK("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!WK(i))throw new TypeError(DK("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}zK.exports=WXr});var xK=s((hve,JK)=>{"use strict";var Yf=K().isPrimitive,Zf=q();function DXr(r){return e;function e(t,i,n){if(!Yf(t))throw new TypeError(Zf("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Yf(i))throw new TypeError(Zf("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Yf(n))throw new TypeError(Zf("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}JK.exports=DXr});var ZK=s((yve,YK)=>{"use strict";function zXr(r,e,t,i){var n,a,u,o,v,f,c,l,p,m,h,d,g,y,N,A,G,T,J,fr,z;for(N=e[1],A=e[0],G=r[0],T=r[1],J=r[2],p=t[0],m=t[1],h=t[2],u=p[1],o=p[0]-N*u,v=m[1],f=m[0]-N*v,c=h[1],l=h[0]-N*c,d=0,g=0,y=0,n=[],fr=0;fr<A;fr++){for(a=[],z=0;z<N;z++)a.push(i(G[d],T[g],J[y])),d+=u,g+=v,y+=c;n.push(a),d+=o,g+=f,y+=l}return n}YK.exports=zXr});var QK=s((qve,$K)=>{"use strict";function XXr(r,e){var t,i,n,a,u;for(t=r.length,i=r[0].length,a=0;a<t;a++)for(n=r[a],u=0;u<i;u++)n[u]=e(n[u]);return r}$K.exports=XXr});var rrr=s((bve,KK)=>{"use strict";var JXr=QK();function xXr(r,e){return JXr(r,e)}KK.exports=xXr});var trr=s((wve,err)=>{"use strict";var Qr={};Qr.binary2d=RK();Qr.d_d=MK();Qr.dd_d=CK();Qr.ddd_d=VK();Qr.s_o=HK();Qr.ss_o=XK();Qr.sss_o=xK();Qr.ternary2d=ZK();Qr.unary2d=rrr();err.exports=Qr});var nrr=s((Eve,irr)=>{"use strict";var je=y6(),or,V={};V.bartlettTest=Sq();V.broadcast=Bq();V.cumax=Dq().ndarray;V.flattenArray=Ia();V.filled2d=_a();V.filled2dBy=$q();V.ones2d=eb();V.zeros2d=ab();V.isArray=mr();V.isBoolean=vr().isPrimitive;V.isNumber=j().isPrimitive;V.isPositiveNumber=D().isPrimitive;V.isString=K().isPrimitive;V.iterator2array=_A();V.iterSawtoothWave=lO();V.linspace=NS();V.max=RS().ndarray;V.mskmax=US().ndarray;V.assert={};or=iI();je(or,V.assert);V.blas={};or=cI();je(or,V.blas);or=sR();je(or,V);or=bR();je(or,V);or=cM();je(or,V);V.dists={};or=Qk();je(or,V.dists);or=$C();je(or,V);V.random={};or=LK();je(or,V.random);V.tools={};or=trr();je(or,V.tools);irr.exports=V});var ZXr=s((Nve,arr)=>{var YXr=nrr();arr.exports=YXr});return ZXr();})();
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
			s = ns.assert.verifyPRNGSeed( v );
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
			s = ns.assert.verifyPRNGSeed( v );
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
