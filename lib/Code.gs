/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Vn=u((YUr,Gf)=>{"use strict";function UZ(r){return Object.keys(Object(r))}Gf.exports=UZ});var Uf=u(($Ur,Vf)=>{"use strict";var HZ=Vn();function WZ(){return(HZ(arguments)||"").length!==2}function kZ(){return WZ(1,2)}Vf.exports=kZ});var Wf=u((QUr,Hf)=>{"use strict";var DZ=typeof Object.keys<"u";Hf.exports=DZ});var Df=u((ZUr,kf)=>{"use strict";function XZ(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}kf.exports=XZ});var Jf=u((KUr,Xf)=>{"use strict";var JZ=Df();Xf.exports=JZ});var Yf=u((xUr,zf)=>{"use strict";var zZ=Jf(),YZ=zZ();function $Z(){return YZ&&typeof Symbol.toStringTag=="symbol"}zf.exports=$Z});var Ui=u((rHr,$f)=>{"use strict";var QZ=Yf();$f.exports=QZ});var us=u((eHr,Qf)=>{"use strict";var ZZ=Object.prototype.toString;Qf.exports=ZZ});var Kf=u((tHr,Zf)=>{"use strict";var KZ=us();function xZ(r){return KZ.call(r)}Zf.exports=xZ});var rc=u((iHr,xf)=>{"use strict";var rK=Object.prototype.hasOwnProperty;function eK(r,e){return r==null?!1:rK.call(r,e)}xf.exports=eK});var O=u((nHr,ec)=>{"use strict";var tK=rc();ec.exports=tK});var ic=u((aHr,tc)=>{"use strict";var iK=typeof Symbol=="function"?Symbol:void 0;tc.exports=iK});var ss=u((uHr,nc)=>{"use strict";var nK=ic();nc.exports=nK});var sc=u((sHr,uc)=>{"use strict";var ac=ss(),aK=typeof ac=="function"?ac.toStringTag:"";uc.exports=aK});var vc=u((oHr,oc)=>{"use strict";var uK=O(),Hi=sc(),os=us();function sK(r){var e,t,i;if(r==null)return os.call(r);t=r[Hi],e=uK(r,Hi);try{r[Hi]=void 0}catch{return os.call(r)}return i=os.call(r),e?r[Hi]=t:delete r[Hi],i}oc.exports=sK});var ir=u((vHr,fc)=>{"use strict";var oK=Ui(),vK=Kf(),fK=vc(),vs;oK()?vs=fK:vs=vK;fc.exports=vs});var fs=u((fHr,cc)=>{"use strict";var cK=ir();function lK(r){return cK(r)==="[object Arguments]"}cc.exports=lK});var gc=u((cHr,pc)=>{"use strict";var pK=fs(),lc;function gK(){return pK(arguments)}lc=gK();pc.exports=lc});var qc=u((lHr,mc)=>{"use strict";var mK=typeof Object.defineProperty=="function"?Object.defineProperty:null;mc.exports=mK});var hc=u((pHr,yc)=>{"use strict";var qK=qc();function yK(){try{return qK({},"x",{}),!0}catch{return!1}}yc.exports=yK});var wc=u((gHr,dc)=>{"use strict";var hK=Object.defineProperty;dc.exports=hK});var cs=u((mHr,bc)=>{"use strict";function dK(r){return typeof r=="number"}bc.exports=dK});var ls=u((qHr,Nc)=>{"use strict";function wK(r){return r[0]==="-"}function Ec(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function bK(r,e,t){var i=!1,n=e-r.length;return n<0||(wK(r)&&(i=!0,r=r.substr(1)),r=t?r+Ec(n):Ec(n)+r,i&&(r="-"+r)),r}Nc.exports=bK});var Tc=u((yHr,Sc)=>{"use strict";var EK=cs(),Ac=ls(),NK=String.prototype.toLowerCase,Oc=String.prototype.toUpperCase;function AK(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!EK(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Ac(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=Ac(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===Oc.call(r.specifier)?Oc.call(t):NK.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Sc.exports=AK});var Lc=u((hHr,Ic)=>{"use strict";function OK(r){return typeof r=="string"}Ic.exports=OK});var Rc=u((dHr,Pc)=>{"use strict";var SK=cs(),TK=Math.abs,IK=String.prototype.toLowerCase,_c=String.prototype.toUpperCase,ht=String.prototype.replace,LK=/e\+(\d)$/,_K=/e-(\d)$/,PK=/^(\d+)$/,RK=/^(\d+)e/,FK=/\.0$/,MK=/\.0*e/,BK=/(\..*[^0])0*e/;function CK(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!SK(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":TK(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=ht.call(t,BK,"$1e"),t=ht.call(t,MK,"e"),t=ht.call(t,FK,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=ht.call(t,LK,"e+0$1"),t=ht.call(t,_K,"e-0$1"),r.alternate&&(t=ht.call(t,PK,"$1."),t=ht.call(t,RK,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===_c.call(r.specifier)?_c.call(t):IK.call(t),t}Pc.exports=CK});var Bc=u((wHr,Mc)=>{"use strict";function Fc(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function jK(r,e,t){var i=e-r.length;return i<0||(r=t?r+Fc(i):Fc(i)+r),r}Mc.exports=jK});var jc=u((bHr,Cc)=>{"use strict";var GK=Tc(),VK=Lc(),UK=Rc(),HK=Bc(),WK=ls(),kK=String.fromCharCode,Un=isNaN,DK=Array.isArray;function XK(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function JK(r){var e,t,i,n,a,s,o,f,v;if(!DK(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",o=1,f=0;f<r.length;f++)if(i=r[f],VK(i))s+=i;else{if(e=i.precision!==void 0,i=XK(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,v=0;v<t.length;v++)switch(n=t.charAt(v),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,Un(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,Un(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=GK(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Un(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Un(a)?String(i.arg):kK(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=UK(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=WK(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=HK(i.arg,i.width,i.padRight)),s+=i.arg||"",o+=1}return s}Cc.exports=JK});var Vc=u((EHr,Gc)=>{"use strict";var zK=jc();Gc.exports=zK});var Hc=u((NHr,Uc)=>{"use strict";var Hn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function YK(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function $K(r){var e,t,i,n;for(t=[],n=0,i=Hn.exec(r);i;)e=r.slice(n,Hn.lastIndex-i[0].length),e.length&&t.push(e),t.push(YK(i)),n=Hn.lastIndex,i=Hn.exec(r);return e=r.slice(n),e.length&&t.push(e),t}Uc.exports=$K});var kc=u((AHr,Wc)=>{"use strict";var QK=Hc();Wc.exports=QK});var Xc=u((OHr,Dc)=>{"use strict";function ZK(r){return typeof r=="string"}Dc.exports=ZK});var Yc=u((SHr,zc)=>{"use strict";var KK=Vc(),xK=kc(),rx=Xc();function Jc(r){var e,t,i;if(!rx(r))throw new TypeError(Jc("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=xK(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return KK.apply(null,t)}zc.exports=Jc});var d=u((THr,$c)=>{"use strict";var ex=Yc();$c.exports=ex});var el=u((IHr,rl)=>{"use strict";var Qc=d(),Ht=Object.prototype,Zc=Ht.toString,Kc=Ht.__defineGetter__,xc=Ht.__defineSetter__,tx=Ht.__lookupGetter__,ix=Ht.__lookupSetter__;function nx(r,e,t){var i,n,a,s;if(typeof r!="object"||r===null||Zc.call(r)==="[object Array]")throw new TypeError(Qc("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||Zc.call(t)==="[object Array]")throw new TypeError(Qc("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(tx.call(r,e)||ix.call(r,e)?(i=r.__proto__,r.__proto__=Ht,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,s="set"in t,n&&(a||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Kc&&Kc.call(r,e,t.get),s&&xc&&xc.call(r,e,t.set),r}rl.exports=nx});var Ce=u((LHr,tl)=>{"use strict";var ax=hc(),ux=wc(),sx=el(),ps;ax()?ps=ux:ps=sx;tl.exports=ps});var nl=u((_Hr,il)=>{"use strict";var ox=Ce();function vx(r,e,t){ox(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}il.exports=vx});var b=u((PHr,al)=>{"use strict";var fx=nl();al.exports=fx});var gs=u((RHr,ul)=>{"use strict";function cx(r){return typeof r=="string"}ul.exports=cx});var ol=u((FHr,sl)=>{"use strict";var lx=String.prototype.valueOf;sl.exports=lx});var fl=u((MHr,vl)=>{"use strict";var px=ol();function gx(r){try{return px.call(r),!0}catch{return!1}}vl.exports=gx});var ms=u((BHr,cl)=>{"use strict";var mx=Ui(),qx=ir(),yx=fl(),hx=mx();function dx(r){return typeof r=="object"?r instanceof String?!0:hx?yx(r):qx(r)==="[object String]":!1}cl.exports=dx});var pl=u((CHr,ll)=>{"use strict";var wx=gs(),bx=ms();function Ex(r){return wx(r)||bx(r)}ll.exports=Ex});var K=u((jHr,ml)=>{"use strict";var gl=b(),qs=pl(),Nx=gs(),Ax=ms();gl(qs,"isPrimitive",Nx);gl(qs,"isObject",Ax);ml.exports=qs});var ys=u((GHr,ql)=>{"use strict";function Ox(r){return typeof r=="number"}ql.exports=Ox});var hl=u((VHr,yl)=>{"use strict";yl.exports=Number});var Wn=u((UHr,dl)=>{"use strict";var Sx=hl();dl.exports=Sx});var bl=u((HHr,wl)=>{"use strict";var Tx=Wn(),Ix=Tx.prototype.toString;wl.exports=Ix});var Nl=u((WHr,El)=>{"use strict";var Lx=bl();function _x(r){try{return Lx.call(r),!0}catch{return!1}}El.exports=_x});var hs=u((kHr,Al)=>{"use strict";var Px=Ui(),Rx=ir(),Fx=Wn(),Mx=Nl(),Bx=Px();function Cx(r){return typeof r=="object"?r instanceof Fx?!0:Bx?Mx(r):Rx(r)==="[object Number]":!1}Al.exports=Cx});var Sl=u((DHr,Ol)=>{"use strict";var jx=ys(),Gx=hs();function Vx(r){return jx(r)||Gx(r)}Ol.exports=Vx});var j=u((XHr,Il)=>{"use strict";var Tl=b(),ds=Sl(),Ux=ys(),Hx=hs();Tl(ds,"isPrimitive",Ux);Tl(ds,"isObject",Hx);Il.exports=ds});var _l=u((JHr,Ll)=>{"use strict";function Wx(r){return r!==r}Ll.exports=Wx});var E=u((zHr,Pl)=>{"use strict";var kx=_l();Pl.exports=kx});var ws=u((YHr,Rl)=>{"use strict";var Dx=j().isPrimitive,Xx=E();function Jx(r){return Dx(r)&&Xx(r)}Rl.exports=Jx});var bs=u(($Hr,Fl)=>{"use strict";var zx=j().isObject,Yx=E();function $x(r){return zx(r)&&Yx(r.valueOf())}Fl.exports=$x});var Bl=u((QHr,Ml)=>{"use strict";var Qx=ws(),Zx=bs();function Kx(r){return Qx(r)||Zx(r)}Ml.exports=Kx});var ar=u((ZHr,jl)=>{"use strict";var Cl=b(),Es=Bl(),xx=ws(),rrr=bs();Cl(Es,"isPrimitive",xx);Cl(Es,"isObject",rrr);jl.exports=Es});var P=u((KHr,Gl)=>{"use strict";var err=Number.POSITIVE_INFINITY;Gl.exports=err});var X=u((xHr,Vl)=>{"use strict";var trr=Wn(),irr=trr.NEGATIVE_INFINITY;Vl.exports=irr});var Hl=u((rWr,Ul)=>{"use strict";var nrr=Math.floor;Ul.exports=nrr});var x=u((eWr,Wl)=>{"use strict";var arr=Hl();Wl.exports=arr});var Dl=u((tWr,kl)=>{"use strict";var urr=x();function srr(r){return urr(r)===r}kl.exports=srr});var Tr=u((iWr,Xl)=>{"use strict";var orr=Dl();Xl.exports=orr});var Ns=u((nWr,Jl)=>{"use strict";var vrr=P(),frr=X(),crr=Tr();function lrr(r){return r<vrr&&r>frr&&crr(r)}Jl.exports=lrr});var As=u((aWr,zl)=>{"use strict";var prr=j().isPrimitive,grr=Ns();function mrr(r){return prr(r)&&grr(r)}zl.exports=mrr});var Os=u((uWr,Yl)=>{"use strict";var qrr=j().isObject,yrr=Ns();function hrr(r){return qrr(r)&&yrr(r.valueOf())}Yl.exports=hrr});var Ql=u((sWr,$l)=>{"use strict";var drr=As(),wrr=Os();function brr(r){return drr(r)||wrr(r)}$l.exports=brr});var jr=u((oWr,Kl)=>{"use strict";var Zl=b(),Ss=Ql(),Err=As(),Nrr=Os();Zl(Ss,"isPrimitive",Err);Zl(Ss,"isObject",Nrr);Kl.exports=Ss});var Ts=u((vWr,xl)=>{"use strict";var Arr=Object.prototype.propertyIsEnumerable;xl.exports=Arr});var t3=u((fWr,e3)=>{"use strict";var Orr=Ts(),r3;function Srr(){return!Orr.call("beep","0")}r3=Srr();e3.exports=r3});var n3=u((cWr,i3)=>{"use strict";var Trr=K(),Irr=ar().isPrimitive,Lrr=jr().isPrimitive,_rr=Ts(),Prr=t3();function Rrr(r,e){var t;return r==null?!1:(t=_rr.call(r,e),!t&&Prr&&Trr(r)?(e=+e,!Irr(e)&&Lrr(e)&&e>=0&&e<r.length):t)}i3.exports=Rrr});var Wi=u((lWr,a3)=>{"use strict";var Frr=n3();a3.exports=Frr});var s3=u((pWr,u3)=>{"use strict";var Mrr=ir(),Is;function Brr(r){return Mrr(r)==="[object Array]"}Array.isArray?Is=Array.isArray:Is=Brr;u3.exports=Is});var pr=u((gWr,o3)=>{"use strict";var Crr=s3();o3.exports=Crr});var Wt=u((mWr,v3)=>{"use strict";var jrr=4294967295;v3.exports=jrr});var c3=u((qWr,f3)=>{"use strict";var Grr=O(),Vrr=Wi(),Urr=pr(),Hrr=Tr(),Wrr=Wt();function krr(r){return r!==null&&typeof r=="object"&&!Urr(r)&&typeof r.length=="number"&&Hrr(r.length)&&r.length>=0&&r.length<=Wrr&&Grr(r,"callee")&&!Vrr(r,"callee")}f3.exports=krr});var _s=u((yWr,l3)=>{"use strict";var Drr=gc(),Xrr=fs(),Jrr=c3(),Ls;Drr?Ls=Xrr:Ls=Jrr;l3.exports=Ls});var m3=u((hWr,g3)=>{"use strict";var zrr=_s(),p3=Vn(),Yrr=Array.prototype.slice;function $rr(r){return zrr(r)?p3(Yrr.call(r)):p3(r)}g3.exports=$rr});var y3=u((dWr,q3)=>{"use strict";var Qrr=pr(),Zrr=d();function Krr(r){if(typeof r!="function")throw new TypeError(Zrr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!Qrr(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}q3.exports=Krr});var d3=u((wWr,h3)=>{"use strict";var xrr=y3();h3.exports=xrr});var b3=u((bWr,w3)=>{"use strict";function rer(r){return r!==null&&typeof r=="object"}w3.exports=rer});var Rs=u((EWr,E3)=>{"use strict";var eer=b(),ter=d3(),Ps=b3(),ier=ter(Ps);eer(Ps,"isObjectLikeArray",ier);E3.exports=Ps});var A3=u((NWr,N3)=>{"use strict";function ner(){}N3.exports=ner});var B=u((AWr,O3)=>{"use strict";var aer=A3();O3.exports=aer});var T3=u((OWr,S3)=>{"use strict";var uer=Wi(),ser=B(),oer=uer(ser,"prototype");S3.exports=oer});var L3=u((SWr,I3)=>{"use strict";var ver=Wi(),fer={toString:null},cer=!ver(fer,"toString");I3.exports=cer});var P3=u((TWr,_3)=>{"use strict";var ler=9007199254740991;_3.exports=ler});var F3=u((IWr,R3)=>{"use strict";var per=Tr(),ger=P3();function mer(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&per(r.length)&&r.length>=0&&r.length<=ger}R3.exports=mer});var Gr=u((LWr,M3)=>{"use strict";var qer=F3();M3.exports=qer});var G3=u((_Wr,j3)=>{"use strict";var B3=ar(),yer=Gr(),her=K().isPrimitive,der=jr().isPrimitive,C3=d();function wer(r,e,t){var i,n;if(!yer(r)&&!her(r))throw new TypeError(C3("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!der(t))throw new TypeError(C3("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(B3(e)){for(;n<i;n++)if(B3(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}j3.exports=wer});var kn=u((PWr,V3)=>{"use strict";var ber=G3();V3.exports=ber});var H3=u((RWr,U3)=>{"use strict";var Eer=/./;U3.exports=Eer});var Fs=u((FWr,W3)=>{"use strict";function Ner(r){return typeof r=="boolean"}W3.exports=Ner});var D3=u((MWr,k3)=>{"use strict";var Aer=Boolean;k3.exports=Aer});var J3=u((BWr,X3)=>{"use strict";var Oer=D3();X3.exports=Oer});var Y3=u((CWr,z3)=>{"use strict";var Ser=Boolean.prototype.toString;z3.exports=Ser});var Q3=u((jWr,$3)=>{"use strict";var Ter=Y3();function Ier(r){try{return Ter.call(r),!0}catch{return!1}}$3.exports=Ier});var Ms=u((GWr,Z3)=>{"use strict";var Ler=Ui(),_er=ir(),Per=J3(),Rer=Q3(),Fer=Ler();function Mer(r){return typeof r=="object"?r instanceof Per?!0:Fer?Rer(r):_er(r)==="[object Boolean]":!1}Z3.exports=Mer});var x3=u((VWr,K3)=>{"use strict";var Ber=Fs(),Cer=Ms();function jer(r){return Ber(r)||Cer(r)}K3.exports=jer});var or=u((UWr,e6)=>{"use strict";var r6=b(),Bs=x3(),Ger=Fs(),Ver=Ms();r6(Bs,"isPrimitive",Ger);r6(Bs,"isObject",Ver);e6.exports=Bs});var i6=u((HWr,t6)=>{"use strict";function Uer(){return new Function("return this;")()}t6.exports=Uer});var a6=u((WWr,n6)=>{"use strict";var Her=typeof self=="object"?self:null;n6.exports=Her});var s6=u((kWr,u6)=>{"use strict";var Wer=typeof window=="object"?window:null;u6.exports=Wer});var v6=u((DWr,o6)=>{"use strict";var ker=typeof globalThis=="object"?globalThis:null;o6.exports=ker});var g6=u((XWr,p6)=>{"use strict";var Der=or().isPrimitive,Xer=d(),Jer=i6(),f6=a6(),c6=s6(),l6=v6();function zer(r){if(arguments.length){if(!Der(r))throw new TypeError(Xer("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Jer()}if(l6)return l6;if(f6)return f6;if(c6)return c6;throw new Error("unexpected error. Unable to resolve global object.")}p6.exports=zer});var y6=u((JWr,q6)=>{"use strict";var Yer=g6(),m6=Yer(),$er=m6.document&&m6.document.childNodes;q6.exports=$er});var d6=u((zWr,h6)=>{"use strict";var Qer=Int8Array;h6.exports=Qer});var b6=u((YWr,w6)=>{"use strict";var Zer=H3(),Ker=y6(),xer=d6();function rtr(){return typeof Zer=="function"||typeof xer=="object"||typeof Ker=="function"}w6.exports=rtr});var Cs=u(($Wr,E6)=>{"use strict";function etr(){return/^\s*function\s*([^(]*)/i}E6.exports=etr});var A6=u((QWr,N6)=>{"use strict";var ttr=Cs(),itr=ttr();N6.exports=itr});var js=u((ZWr,S6)=>{"use strict";var ntr=b(),O6=Cs(),atr=A6();ntr(O6,"REGEXP",atr);S6.exports=O6});var I6=u((KWr,T6)=>{"use strict";var utr=Rs();function str(r){return utr(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}T6.exports=str});var dt=u((xWr,L6)=>{"use strict";var otr=I6();L6.exports=otr});var P6=u((rkr,_6)=>{"use strict";var vtr=ir(),ftr=js().REGEXP,ctr=dt();function ltr(r){var e,t,i;if(t=vtr(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=ftr.exec(i.toString()),e)return e[1]}return ctr(r)?"Buffer":t}_6.exports=ltr});var je=u((ekr,R6)=>{"use strict";var ptr=P6();R6.exports=ptr});var M6=u((tkr,F6)=>{"use strict";var gtr=je();function mtr(r){var e;return r===null?"null":(e=typeof r,e==="object"?gtr(r).toLowerCase():e)}F6.exports=mtr});var C6=u((ikr,B6)=>{"use strict";var qtr=je();function ytr(r){return qtr(r).toLowerCase()}B6.exports=ytr});var Dn=u((nkr,j6)=>{"use strict";var htr=b6(),dtr=M6(),wtr=C6(),btr=htr()?wtr:dtr;j6.exports=btr});var Gs=u((akr,G6)=>{"use strict";function Etr(r){return r.constructor&&r.constructor.prototype===r}G6.exports=Etr});var V6=u((ukr,Ntr)=>{Ntr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var H6=u((skr,U6)=>{"use strict";var Atr=typeof window>"u"?void 0:window;U6.exports=Atr});var X6=u((okr,D6)=>{"use strict";var Otr=O(),Str=kn(),W6=Dn(),Ttr=Gs(),Itr=V6(),kt=H6(),k6;function Ltr(){var r;if(W6(kt)==="undefined")return!1;for(r in kt)try{Str(Itr,r)===-1&&Otr(kt,r)&&kt[r]!==null&&W6(kt[r])==="object"&&Ttr(kt[r])}catch{return!0}return!1}k6=Ltr();D6.exports=k6});var z6=u((vkr,J6)=>{"use strict";var _tr=typeof window<"u";J6.exports=_tr});var Q6=u((fkr,$6)=>{"use strict";var Ptr=X6(),Y6=Gs(),Rtr=z6();function Ftr(r){if(Rtr===!1&&!Ptr)return Y6(r);try{return Y6(r)}catch{return!1}}$6.exports=Ftr});var Z6=u((ckr,Mtr)=>{Mtr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var rp=u((lkr,x6)=>{"use strict";var Btr=Rs(),Vs=O(),Ctr=_s(),jtr=T3(),Gtr=L3(),Vtr=Q6(),K6=Z6();function Utr(r){var e,t,i,n,a,s,o;if(n=[],Ctr(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!Vs(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!Btr(r))return n;t=jtr&&i}for(a in r)!(t&&a==="prototype")&&Vs(r,a)&&n.push(String(a));if(Gtr)for(e=Vtr(r),o=0;o<K6.length;o++)s=K6[o],!(e&&s==="constructor")&&Vs(r,s)&&n.push(String(s));return n}x6.exports=Utr});var tp=u((pkr,ep)=>{"use strict";var Htr=Uf(),Wtr=Wf(),ktr=Vn(),Dtr=m3(),Xtr=rp(),Xn;Wtr?Htr()?Xn=Dtr:Xn=ktr:Xn=Xtr;ep.exports=Xn});var Dt=u((gkr,ip)=>{"use strict";var Jtr=tp();ip.exports=Jtr});var ap=u((mkr,np)=>{"use strict";var ztr=Dt(),Ytr=O(),$tr=d();function Qtr(r,e){var t,i,n;for(t=ztr(r),n=0;n<t.length;n++){if(i=t[n],Ytr(e,i))throw new Error($tr("unexpected error. Property already exists on destination object. Property: %s.",i));e[i]=r[i]}return e}np.exports=Qtr});var Us=u((qkr,up)=>{"use strict";var Ztr=jr().isPrimitive;function Ktr(r){return Ztr(r)&&r>=0}up.exports=Ktr});var Hs=u((ykr,sp)=>{"use strict";var xtr=jr().isObject;function rir(r){return xtr(r)&&r.valueOf()>=0}sp.exports=rir});var vp=u((hkr,op)=>{"use strict";var eir=Us(),tir=Hs();function iir(r){return eir(r)||tir(r)}op.exports=iir});var Ge=u((dkr,cp)=>{"use strict";var fp=b(),Ws=vp(),nir=Us(),air=Hs();fp(Ws,"isPrimitive",nir);fp(Ws,"isObject",air);cp.exports=Ws});var pp=u((wkr,lp)=>{"use strict";var uir=Object;lp.exports=uir});var Xt=u((bkr,gp)=>{"use strict";var sir=pp();gp.exports=sir});var qp=u((Ekr,mp)=>{"use strict";var oir=Dn();function vir(r){return oir(r)==="function"}mp.exports=vir});var I=u((Nkr,yp)=>{"use strict";var fir=qp();yp.exports=fir});var dp=u((Akr,hp)=>{"use strict";var cir=Object.getPrototypeOf;hp.exports=cir});var bp=u((Okr,wp)=>{"use strict";function lir(r){return r.__proto__}wp.exports=lir});var Np=u((Skr,Ep)=>{"use strict";var pir=ir(),gir=bp();function mir(r){var e=gir(r);return e||e===null?e:pir(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}Ep.exports=mir});var Op=u((Tkr,Ap)=>{"use strict";var qir=I(),yir=dp(),hir=Np(),ks;qir(Object.getPrototypeOf)?ks=yir:ks=hir;Ap.exports=ks});var Tp=u((Ikr,Sp)=>{"use strict";var dir=Xt(),wir=Op();function bir(r){return r==null?null:(r=dir(r),wir(r))}Sp.exports=bir});var wt=u((Lkr,Ip)=>{"use strict";var Eir=Tp();Ip.exports=Eir});var _p=u((_kr,Lp)=>{"use strict";var Nir=wt(),Air=ir();function Oir(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(Air(r)==="[object Error]")return!0;r=Nir(r)}return!1}Lp.exports=Oir});var Rp=u((Pkr,Pp)=>{"use strict";var Sir=_p();Pp.exports=Sir});var Ds=u((Rkr,Fp)=>{"use strict";function Tir(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}Fp.exports=Tir});var Bp=u((Fkr,Mp)=>{"use strict";var Iir=Ds(),Lir=Iir();Mp.exports=Lir});var Gp=u((Mkr,jp)=>{"use strict";var _ir=b(),Cp=Ds(),Pir=Bp();_ir(Cp,"REGEXP",Pir);jp.exports=Cp});var Up=u((Bkr,Vp)=>{"use strict";var Rir=K().isPrimitive,Fir=Gp(),Mir=d();function Bir(r){if(!Rir(r))throw new TypeError(Mir("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=Fir().exec(r),r?new RegExp(r[1],r[2]):null}Vp.exports=Bir});var Wp=u((Ckr,Hp)=>{"use strict";var Cir=Up();Hp.exports=Cir});var Dp=u((jkr,kp)=>{"use strict";var jir=typeof Object.getOwnPropertyNames<"u";kp.exports=jir});var zp=u((Gkr,Jp)=>{"use strict";var Xp=Xt(),Gir=Xp.getOwnPropertyNames;function Vir(r){return Gir(Xp(r))}Jp.exports=Vir});var $p=u((Vkr,Yp)=>{"use strict";var Uir=Xt(),Hir=Dt();function Wir(r){return Hir(Uir(r))}Yp.exports=Wir});var Zp=u((Ukr,Qp)=>{"use strict";var kir=Dp(),Dir=zp(),Xir=$p(),Xs;kir?Xs=Dir:Xs=Xir;Qp.exports=Xs});var xp=u((Hkr,Kp)=>{"use strict";var Jir=typeof Object.getOwnPropertyDescriptor<"u";Kp.exports=Jir});var e4=u((Wkr,r4)=>{"use strict";var zir=Object.getOwnPropertyDescriptor;function Yir(r,e){var t;return r==null?null:(t=zir(r,e),t===void 0?null:t)}r4.exports=Yir});var i4=u((kkr,t4)=>{"use strict";var $ir=O();function Qir(r,e){return $ir(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}t4.exports=Qir});var a4=u((Dkr,n4)=>{"use strict";var Zir=xp(),Kir=e4(),xir=i4(),Js;Zir?Js=Kir:Js=xir;n4.exports=Js});var s4=u((Xkr,u4)=>{"use strict";var rnr=typeof Buffer=="function"?Buffer:null;u4.exports=rnr});var v4=u((Jkr,o4)=>{"use strict";var enr=dt(),Jn=s4();function tnr(){var r,e;if(typeof Jn!="function")return!1;try{typeof Jn.from=="function"?e=Jn.from([1,2,3,4]):e=new Jn([1,2,3,4]),r=enr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}o4.exports=tnr});var c4=u((zkr,f4)=>{"use strict";var inr=v4();f4.exports=inr});var g4=u(zn=>{"use strict";zn.byteLength=anr;zn.toByteArray=snr;zn.fromByteArray=fnr;var Xr=[],Pr=[],nnr=typeof Uint8Array<"u"?Uint8Array:Array,zs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(bt=0,l4=zs.length;bt<l4;++bt)Xr[bt]=zs[bt],Pr[zs.charCodeAt(bt)]=bt;var bt,l4;Pr["-".charCodeAt(0)]=62;Pr["_".charCodeAt(0)]=63;function p4(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function anr(r){var e=p4(r),t=e[0],i=e[1];return(t+i)*3/4-i}function unr(r,e,t){return(e+t)*3/4-t}function snr(r){var e,t=p4(r),i=t[0],n=t[1],a=new nnr(unr(r,i,n)),s=0,o=n>0?i-4:i,f;for(f=0;f<o;f+=4)e=Pr[r.charCodeAt(f)]<<18|Pr[r.charCodeAt(f+1)]<<12|Pr[r.charCodeAt(f+2)]<<6|Pr[r.charCodeAt(f+3)],a[s++]=e>>16&255,a[s++]=e>>8&255,a[s++]=e&255;return n===2&&(e=Pr[r.charCodeAt(f)]<<2|Pr[r.charCodeAt(f+1)]>>4,a[s++]=e&255),n===1&&(e=Pr[r.charCodeAt(f)]<<10|Pr[r.charCodeAt(f+1)]<<4|Pr[r.charCodeAt(f+2)]>>2,a[s++]=e>>8&255,a[s++]=e&255),a}function onr(r){return Xr[r>>18&63]+Xr[r>>12&63]+Xr[r>>6&63]+Xr[r&63]}function vnr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(onr(i));return n.join("")}function fnr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,s=0,o=t-i;s<o;s+=a)n.push(vnr(r,s,s+a>o?o:s+a));return i===1?(e=r[t-1],n.push(Xr[e>>2]+Xr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(Xr[e>>10]+Xr[e>>4&63]+Xr[e<<2&63]+"=")),n.join("")}});var m4=u(Ys=>{Ys.read=function(r,e,t,i,n){var a,s,o=n*8-i-1,f=(1<<o)-1,v=f>>1,c=-7,l=t?n-1:0,p=t?-1:1,m=r[e+l];for(l+=p,a=m&(1<<-c)-1,m>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(s=a&(1<<-c)-1,a>>=-c,c+=i;c>0;s=s*256+r[e+l],l+=p,c-=8);if(a===0)a=1-v;else{if(a===f)return s?NaN:(m?-1:1)*(1/0);s=s+Math.pow(2,i),a=a-v}return(m?-1:1)*s*Math.pow(2,a-i)};Ys.write=function(r,e,t,i,n,a){var s,o,f,v=a*8-n-1,c=(1<<v)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:a-1,y=i?1:-1,q=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-s))<1&&(s--,f*=2),s+l>=1?e+=p/f:e+=p*Math.pow(2,1-l),e*f>=2&&(s++,f/=2),s+l>=c?(o=0,s=c):s+l>=1?(o=(e*f-1)*Math.pow(2,n),s=s+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),s=0));n>=8;r[t+m]=o&255,m+=y,o/=256,n-=8);for(s=s<<n|o,v+=n;v>0;r[t+m]=s&255,m+=y,s/=256,v-=8);r[t+m-y]|=q*128}});var R4=u($t=>{"use strict";var $s=g4(),zt=m4(),q4=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;$t.Buffer=w;$t.SlowBuffer=qnr;$t.INSPECT_MAX_BYTES=50;var Yn=2147483647;$t.kMaxLength=Yn;w.TYPED_ARRAY_SUPPORT=cnr();!w.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function cnr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(w.prototype,"parent",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.buffer}});Object.defineProperty(w.prototype,"offset",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.byteOffset}});function Kr(r){if(r>Yn)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,w.prototype),e}function w(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return xs(r)}return w4(r,e,t)}w.poolSize=8192;function w4(r,e,t){if(typeof r=="string")return pnr(r,e);if(ArrayBuffer.isView(r))return gnr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Jr(r,ArrayBuffer)||r&&Jr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Jr(r,SharedArrayBuffer)||r&&Jr(r.buffer,SharedArrayBuffer)))return Zs(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return w.from(i,e,t);let n=mnr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return w.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}w.from=function(r,e,t){return w4(r,e,t)};Object.setPrototypeOf(w.prototype,Uint8Array.prototype);Object.setPrototypeOf(w,Uint8Array);function b4(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function lnr(r,e,t){return b4(r),r<=0?Kr(r):e!==void 0?typeof t=="string"?Kr(r).fill(e,t):Kr(r).fill(e):Kr(r)}w.alloc=function(r,e,t){return lnr(r,e,t)};function xs(r){return b4(r),Kr(r<0?0:ro(r)|0)}w.allocUnsafe=function(r){return xs(r)};w.allocUnsafeSlow=function(r){return xs(r)};function pnr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!w.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=E4(r,e)|0,i=Kr(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function Qs(r){let e=r.length<0?0:ro(r.length)|0,t=Kr(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function gnr(r){if(Jr(r,Uint8Array)){let e=new Uint8Array(r);return Zs(e.buffer,e.byteOffset,e.byteLength)}return Qs(r)}function Zs(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,w.prototype),i}function mnr(r){if(w.isBuffer(r)){let e=ro(r.length)|0,t=Kr(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||to(r.length)?Kr(0):Qs(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Qs(r.data)}function ro(r){if(r>=Yn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Yn.toString(16)+" bytes");return r|0}function qnr(r){return+r!=r&&(r=0),w.alloc(+r)}w.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==w.prototype};w.compare=function(e,t){if(Jr(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),Jr(t,Uint8Array)&&(t=w.from(t,t.offset,t.byteLength)),!w.isBuffer(e)||!w.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,s=Math.min(i,n);a<s;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};w.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};w.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return w.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=w.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let s=e[i];if(Jr(s,Uint8Array))a+s.length>n.length?(w.isBuffer(s)||(s=w.from(s)),s.copy(n,a)):Uint8Array.prototype.set.call(n,s,a);else if(w.isBuffer(s))s.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return n};function E4(r,e){if(w.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Jr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Ks(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return P4(r).length;default:if(n)return i?-1:Ks(r).length;e=(""+e).toLowerCase(),n=!0}}w.byteLength=E4;function ynr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Tnr(this,e,t);case"utf8":case"utf-8":return A4(this,e,t);case"ascii":return Onr(this,e,t);case"latin1":case"binary":return Snr(this,e,t);case"base64":return Nnr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Inr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}w.prototype._isBuffer=!0;function Et(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}w.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Et(this,t,t+1);return this};w.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Et(this,t,t+3),Et(this,t+1,t+2);return this};w.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Et(this,t,t+7),Et(this,t+1,t+6),Et(this,t+2,t+5),Et(this,t+3,t+4);return this};w.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?A4(this,0,e):ynr.apply(this,arguments)};w.prototype.toLocaleString=w.prototype.toString;w.prototype.equals=function(e){if(!w.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:w.compare(this,e)===0};w.prototype.inspect=function(){let e="",t=$t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};q4&&(w.prototype[q4]=w.prototype.inspect);w.prototype.compare=function(e,t,i,n,a){if(Jr(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),!w.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let s=a-n,o=i-t,f=Math.min(s,o),v=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<f;++l)if(v[l]!==c[l]){s=v[l],o=c[l];break}return s<o?-1:o<s?1:0};function N4(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,to(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=w.from(e,i)),w.isBuffer(e))return e.length===0?-1:y4(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):y4(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function y4(r,e,t,i,n){let a=1,s=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,s/=2,o/=2,t/=2}function f(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let v;if(n){let c=-1;for(v=t;v<s;v++)if(f(r,v)===f(e,c===-1?0:v-c)){if(c===-1&&(c=v),v-c+1===o)return c*a}else c!==-1&&(v-=v-c),c=-1}else for(t+o>s&&(t=s-o),v=t;v>=0;v--){let c=!0;for(let l=0;l<o;l++)if(f(r,v+l)!==f(e,l)){c=!1;break}if(c)return v}return-1}w.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};w.prototype.indexOf=function(e,t,i){return N4(this,e,t,i,!0)};w.prototype.lastIndexOf=function(e,t,i){return N4(this,e,t,i,!1)};function hnr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let s;for(s=0;s<i;++s){let o=parseInt(e.substr(s*2,2),16);if(to(o))return s;r[t+s]=o}return s}function dnr(r,e,t,i){return $n(Ks(e,r.length-t),r,t,i)}function wnr(r,e,t,i){return $n(Rnr(e),r,t,i)}function bnr(r,e,t,i){return $n(P4(e),r,t,i)}function Enr(r,e,t,i){return $n(Fnr(e,r.length-t),r,t,i)}w.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let s=!1;for(;;)switch(n){case"hex":return hnr(this,e,t,i);case"utf8":case"utf-8":return dnr(this,e,t,i);case"ascii":case"latin1":case"binary":return wnr(this,e,t,i);case"base64":return bnr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Enr(this,e,t,i);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}};w.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Nnr(r,e,t){return e===0&&t===r.length?$s.fromByteArray(r):$s.fromByteArray(r.slice(e,t))}function A4(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],s=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let f,v,c,l;switch(o){case 1:a<128&&(s=a);break;case 2:f=r[n+1],(f&192)===128&&(l=(a&31)<<6|f&63,l>127&&(s=l));break;case 3:f=r[n+1],v=r[n+2],(f&192)===128&&(v&192)===128&&(l=(a&15)<<12|(f&63)<<6|v&63,l>2047&&(l<55296||l>57343)&&(s=l));break;case 4:f=r[n+1],v=r[n+2],c=r[n+3],(f&192)===128&&(v&192)===128&&(c&192)===128&&(l=(a&15)<<18|(f&63)<<12|(v&63)<<6|c&63,l>65535&&l<1114112&&(s=l))}}s===null?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|s&1023),i.push(s),n+=o}return Anr(i)}var h4=4096;function Anr(r){let e=r.length;if(e<=h4)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=h4));return t}function Onr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function Snr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function Tnr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=Mnr[r[a]];return n}function Inr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}w.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,w.prototype),n};function ur(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}w.prototype.readUintLE=w.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,s=0;for(;++s<t&&(a*=256);)n+=this[e+s]*a;return n};w.prototype.readUintBE=w.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};w.prototype.readUint8=w.prototype.readUInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]};w.prototype.readUint16LE=w.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]|this[e+1]<<8};w.prototype.readUint16BE=w.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]<<8|this[e+1]};w.prototype.readUint32LE=w.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};w.prototype.readUint32BE=w.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};w.prototype.readBigUInt64LE=Ve(function(e){e=e>>>0,Yt(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&ki(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});w.prototype.readBigUInt64BE=Ve(function(e){e=e>>>0,Yt(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&ki(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});w.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,s=0;for(;++s<t&&(a*=256);)n+=this[e+s]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};w.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=t,a=1,s=this[e+--n];for(;n>0&&(a*=256);)s+=this[e+--n]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*t)),s};w.prototype.readInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};w.prototype.readInt16LE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};w.prototype.readInt16BE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};w.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};w.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};w.prototype.readBigInt64LE=Ve(function(e){e=e>>>0,Yt(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&ki(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});w.prototype.readBigInt64BE=Ve(function(e){e=e>>>0,Yt(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&ki(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});w.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),zt.read(this,e,!0,23,4)};w.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),zt.read(this,e,!1,23,4)};w.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),zt.read(this,e,!0,52,8)};w.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),zt.read(this,e,!1,52,8)};function mr(r,e,t,i,n,a){if(!w.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}w.prototype.writeUintLE=w.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;mr(this,e,t,i,o,0)}let a=1,s=0;for(this[t]=e&255;++s<i&&(a*=256);)this[t+s]=e/a&255;return t+i};w.prototype.writeUintBE=w.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;mr(this,e,t,i,o,0)}let a=i-1,s=1;for(this[t+a]=e&255;--a>=0&&(s*=256);)this[t+a]=e/s&255;return t+i};w.prototype.writeUint8=w.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,1,255,0),this[t]=e&255,t+1};w.prototype.writeUint16LE=w.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeUint16BE=w.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeUint32LE=w.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};w.prototype.writeUint32BE=w.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function O4(r,e,t,i,n){_4(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let s=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,t}function S4(r,e,t,i,n){_4(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let s=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=s,s=s>>8,r[t+2]=s,s=s>>8,r[t+1]=s,s=s>>8,r[t]=s,t+8}w.prototype.writeBigUInt64LE=Ve(function(e,t=0){return O4(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeBigUInt64BE=Ve(function(e,t=0){return S4(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);mr(this,e,t,i,f-1,-f)}let a=0,s=1,o=0;for(this[t]=e&255;++a<i&&(s*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/s>>0)-o&255;return t+i};w.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);mr(this,e,t,i,f-1,-f)}let a=i-1,s=1,o=0;for(this[t+a]=e&255;--a>=0&&(s*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/s>>0)-o&255;return t+i};w.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};w.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};w.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};w.prototype.writeBigInt64LE=Ve(function(e,t=0){return O4(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});w.prototype.writeBigInt64BE=Ve(function(e,t=0){return S4(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function T4(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function I4(r,e,t,i,n){return e=+e,t=t>>>0,n||T4(r,e,t,4,34028234663852886e22,-34028234663852886e22),zt.write(r,e,t,i,23,4),t+4}w.prototype.writeFloatLE=function(e,t,i){return I4(this,e,t,!0,i)};w.prototype.writeFloatBE=function(e,t,i){return I4(this,e,t,!1,i)};function L4(r,e,t,i,n){return e=+e,t=t>>>0,n||T4(r,e,t,8,17976931348623157e292,-17976931348623157e292),zt.write(r,e,t,i,52,8),t+8}w.prototype.writeDoubleLE=function(e,t,i){return L4(this,e,t,!0,i)};w.prototype.writeDoubleBE=function(e,t,i){return L4(this,e,t,!1,i)};w.prototype.copy=function(e,t,i,n){if(!w.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};w.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!w.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let s=e.charCodeAt(0);(n==="utf8"&&s<128||n==="latin1")&&(e=s)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let s=w.isBuffer(e)?e:w.from(e,n),o=s.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=s[a%o]}return this};var Jt={};function eo(r,e,t){Jt[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}eo("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);eo("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);eo("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=d4(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=d4(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function d4(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function Lnr(r,e,t){Yt(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&ki(e,r.length-(t+1))}function _4(r,e,t,i,n,a){if(r>t||r<e){let s=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${s} and < 2${s} ** ${(a+1)*8}${s}`:o=`>= -(2${s} ** ${(a+1)*8-1}${s}) and < 2 ** ${(a+1)*8-1}${s}`:o=`>= ${e}${s} and <= ${t}${s}`,new Jt.ERR_OUT_OF_RANGE("value",o,r)}Lnr(i,n,a)}function Yt(r,e){if(typeof r!="number")throw new Jt.ERR_INVALID_ARG_TYPE(e,"number",r)}function ki(r,e,t){throw Math.floor(r)!==r?(Yt(r,t),new Jt.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Jt.ERR_BUFFER_OUT_OF_BOUNDS:new Jt.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var _nr=/[^+/0-9A-Za-z-_]/g;function Pnr(r){if(r=r.split("=")[0],r=r.trim().replace(_nr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function Ks(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let s=0;s<i;++s){if(t=r.charCodeAt(s),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(s+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function Rnr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function Fnr(r,e){let t,i,n,a=[];for(let s=0;s<r.length&&!((e-=2)<0);++s)t=r.charCodeAt(s),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function P4(r){return $s.toByteArray(Pnr(r))}function $n(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function Jr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function to(r){return r!==r}var Mnr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function Ve(r){return typeof BigInt>"u"?Bnr:r}function Bnr(){throw new Error("BigInt not supported")}});var M4=u((Kkr,F4)=>{"use strict";var Cnr=R4().Buffer;F4.exports=Cnr});var C4=u((xkr,B4)=>{"use strict";function jnr(){throw new Error("not implemented")}B4.exports=jnr});var Qn=u((rDr,j4)=>{"use strict";var Gnr=c4(),Vnr=M4(),Unr=C4(),io;Gnr()?io=Vnr:io=Unr;j4.exports=io});var V4=u((eDr,G4)=>{"use strict";var Hnr=I(),Wnr=Qn(),knr=Hnr(Wnr.from);G4.exports=knr});var H4=u((tDr,U4)=>{"use strict";var Dnr=dt(),Xnr=d(),Jnr=Qn();function znr(r){if(!Dnr(r))throw new TypeError(Xnr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return Jnr.from(r)}U4.exports=znr});var k4=u((iDr,W4)=>{"use strict";var Ynr=dt(),$nr=d(),Qnr=Qn();function Znr(r){if(!Ynr(r))throw new TypeError($nr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new Qnr(r)}W4.exports=Znr});var X4=u((nDr,D4)=>{"use strict";var Knr=V4(),xnr=H4(),rar=k4(),no;Knr?no=xnr:no=rar;D4.exports=no});var z4=u((aDr,J4)=>{"use strict";var ear=ir(),tar=typeof Int8Array=="function";function iar(r){return tar&&r instanceof Int8Array||ear(r)==="[object Int8Array]"}J4.exports=iar});var $4=u((uDr,Y4)=>{"use strict";var nar=z4();Y4.exports=nar});var Z4=u((sDr,Q4)=>{"use strict";var aar=127;Q4.exports=aar});var x4=u((oDr,K4)=>{"use strict";var uar=-128;K4.exports=uar});var e8=u((vDr,r8)=>{"use strict";var sar=typeof Int8Array=="function"?Int8Array:null;r8.exports=sar});var n8=u((fDr,i8)=>{"use strict";var oar=$4(),far=Z4(),car=x4(),t8=e8();function lar(){var r,e;if(typeof t8!="function")return!1;try{e=new t8([1,3.14,-3.14,far+1]),r=oar(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===car}catch{r=!1}return r}i8.exports=lar});var u8=u((cDr,a8)=>{"use strict";var par=n8();a8.exports=par});var o8=u((lDr,s8)=>{"use strict";var gar=typeof Int8Array=="function"?Int8Array:void 0;s8.exports=gar});var f8=u((pDr,v8)=>{"use strict";function mar(){throw new Error("not implemented")}v8.exports=mar});var Di=u((gDr,c8)=>{"use strict";var qar=u8(),yar=o8(),har=f8(),ao;qar()?ao=yar:ao=har;c8.exports=ao});var p8=u((mDr,l8)=>{"use strict";var dar=ir(),war=typeof Uint8Array=="function";function bar(r){return war&&r instanceof Uint8Array||dar(r)==="[object Uint8Array]"}l8.exports=bar});var m8=u((qDr,g8)=>{"use strict";var Ear=p8();g8.exports=Ear});var y8=u((yDr,q8)=>{"use strict";var Nar=255;q8.exports=Nar});var d8=u((hDr,h8)=>{"use strict";var Aar=typeof Uint8Array=="function"?Uint8Array:null;h8.exports=Aar});var E8=u((dDr,b8)=>{"use strict";var Oar=m8(),uo=y8(),w8=d8();function Sar(){var r,e;if(typeof w8!="function")return!1;try{e=[1,3.14,-3.14,uo+1,uo+2],e=new w8(e),r=Oar(e)&&e[0]===1&&e[1]===3&&e[2]===uo-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}b8.exports=Sar});var A8=u((wDr,N8)=>{"use strict";var Tar=E8();N8.exports=Tar});var S8=u((bDr,O8)=>{"use strict";var Iar=typeof Uint8Array=="function"?Uint8Array:void 0;O8.exports=Iar});var I8=u((EDr,T8)=>{"use strict";function Lar(){throw new Error("not implemented")}T8.exports=Lar});var Qt=u((NDr,L8)=>{"use strict";var _ar=A8(),Par=S8(),Rar=I8(),so;_ar()?so=Par:so=Rar;L8.exports=so});var P8=u((ADr,_8)=>{"use strict";var Far=ir(),Mar=typeof Uint8ClampedArray=="function";function Bar(r){return Mar&&r instanceof Uint8ClampedArray||Far(r)==="[object Uint8ClampedArray]"}_8.exports=Bar});var F8=u((ODr,R8)=>{"use strict";var Car=P8();R8.exports=Car});var B8=u((SDr,M8)=>{"use strict";var jar=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;M8.exports=jar});var G8=u((TDr,j8)=>{"use strict";var Gar=F8(),C8=B8();function Var(){var r,e;if(typeof C8!="function")return!1;try{e=new C8([-1,0,1,3.14,4.99,255,256]),r=Gar(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}j8.exports=Var});var U8=u((IDr,V8)=>{"use strict";var Uar=G8();V8.exports=Uar});var W8=u((LDr,H8)=>{"use strict";var Har=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;H8.exports=Har});var D8=u((_Dr,k8)=>{"use strict";function War(){throw new Error("not implemented")}k8.exports=War});var Xi=u((PDr,X8)=>{"use strict";var kar=U8(),Dar=W8(),Xar=D8(),oo;kar()?oo=Dar:oo=Xar;X8.exports=oo});var z8=u((RDr,J8)=>{"use strict";var Jar=ir(),zar=typeof Int16Array=="function";function Yar(r){return zar&&r instanceof Int16Array||Jar(r)==="[object Int16Array]"}J8.exports=Yar});var $8=u((FDr,Y8)=>{"use strict";var $ar=z8();Y8.exports=$ar});var Z8=u((MDr,Q8)=>{"use strict";var Qar=32767;Q8.exports=Qar});var x8=u((BDr,K8)=>{"use strict";var Zar=-32768;K8.exports=Zar});var e5=u((CDr,r5)=>{"use strict";var Kar=typeof Int16Array=="function"?Int16Array:null;r5.exports=Kar});var n5=u((jDr,i5)=>{"use strict";var xar=$8(),r0r=Z8(),e0r=x8(),t5=e5();function t0r(){var r,e;if(typeof t5!="function")return!1;try{e=new t5([1,3.14,-3.14,r0r+1]),r=xar(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===e0r}catch{r=!1}return r}i5.exports=t0r});var u5=u((GDr,a5)=>{"use strict";var i0r=n5();a5.exports=i0r});var o5=u((VDr,s5)=>{"use strict";var n0r=typeof Int16Array=="function"?Int16Array:void 0;s5.exports=n0r});var f5=u((UDr,v5)=>{"use strict";function a0r(){throw new Error("not implemented")}v5.exports=a0r});var Ji=u((HDr,c5)=>{"use strict";var u0r=u5(),s0r=o5(),o0r=f5(),vo;u0r()?vo=s0r:vo=o0r;c5.exports=vo});var p5=u((WDr,l5)=>{"use strict";var v0r=ir(),f0r=typeof Uint16Array=="function";function c0r(r){return f0r&&r instanceof Uint16Array||v0r(r)==="[object Uint16Array]"}l5.exports=c0r});var m5=u((kDr,g5)=>{"use strict";var l0r=p5();g5.exports=l0r});var y5=u((DDr,q5)=>{"use strict";var p0r=65535;q5.exports=p0r});var d5=u((XDr,h5)=>{"use strict";var g0r=typeof Uint16Array=="function"?Uint16Array:null;h5.exports=g0r});var E5=u((JDr,b5)=>{"use strict";var m0r=m5(),fo=y5(),w5=d5();function q0r(){var r,e;if(typeof w5!="function")return!1;try{e=[1,3.14,-3.14,fo+1,fo+2],e=new w5(e),r=m0r(e)&&e[0]===1&&e[1]===3&&e[2]===fo-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}b5.exports=q0r});var A5=u((zDr,N5)=>{"use strict";var y0r=E5();N5.exports=y0r});var S5=u((YDr,O5)=>{"use strict";var h0r=typeof Uint16Array=="function"?Uint16Array:void 0;O5.exports=h0r});var I5=u(($Dr,T5)=>{"use strict";function d0r(){throw new Error("not implemented")}T5.exports=d0r});var Zt=u((QDr,L5)=>{"use strict";var w0r=A5(),b0r=S5(),E0r=I5(),co;w0r()?co=b0r:co=E0r;L5.exports=co});var P5=u((ZDr,_5)=>{"use strict";var N0r=ir(),A0r=typeof Int32Array=="function";function O0r(r){return A0r&&r instanceof Int32Array||N0r(r)==="[object Int32Array]"}_5.exports=O0r});var Zn=u((KDr,R5)=>{"use strict";var S0r=P5();R5.exports=S0r});var Kt=u((xDr,F5)=>{"use strict";var T0r=2147483647;F5.exports=T0r});var B5=u((rXr,M5)=>{"use strict";var I0r=-2147483648;M5.exports=I0r});var j5=u((eXr,C5)=>{"use strict";var L0r=typeof Int32Array=="function"?Int32Array:null;C5.exports=L0r});var U5=u((tXr,V5)=>{"use strict";var _0r=Zn(),P0r=Kt(),R0r=B5(),G5=j5();function F0r(){var r,e;if(typeof G5!="function")return!1;try{e=new G5([1,3.14,-3.14,P0r+1]),r=_0r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===R0r}catch{r=!1}return r}V5.exports=F0r});var W5=u((iXr,H5)=>{"use strict";var M0r=U5();H5.exports=M0r});var D5=u((nXr,k5)=>{"use strict";var B0r=typeof Int32Array=="function"?Int32Array:void 0;k5.exports=B0r});var J5=u((aXr,X5)=>{"use strict";function C0r(){throw new Error("not implemented")}X5.exports=C0r});var Nt=u((uXr,z5)=>{"use strict";var j0r=W5(),G0r=D5(),V0r=J5(),lo;j0r()?lo=G0r:lo=V0r;z5.exports=lo});var $5=u((sXr,Y5)=>{"use strict";var U0r=ir(),H0r=typeof Uint32Array=="function";function W0r(r){return H0r&&r instanceof Uint32Array||U0r(r)==="[object Uint32Array]"}Y5.exports=W0r});var xr=u((oXr,Q5)=>{"use strict";var k0r=$5();Q5.exports=k0r});var K5=u((vXr,Z5)=>{"use strict";var D0r=typeof Uint32Array=="function"?Uint32Array:null;Z5.exports=D0r});var e9=u((fXr,r9)=>{"use strict";var X0r=xr(),po=Wt(),x5=K5();function J0r(){var r,e;if(typeof x5!="function")return!1;try{e=[1,3.14,-3.14,po+1,po+2],e=new x5(e),r=X0r(e)&&e[0]===1&&e[1]===3&&e[2]===po-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}r9.exports=J0r});var i9=u((cXr,t9)=>{"use strict";var z0r=e9();t9.exports=z0r});var a9=u((lXr,n9)=>{"use strict";var Y0r=typeof Uint32Array=="function"?Uint32Array:void 0;n9.exports=Y0r});var s9=u((pXr,u9)=>{"use strict";function $0r(){throw new Error("not implemented")}u9.exports=$0r});var cr=u((gXr,o9)=>{"use strict";var Q0r=i9(),Z0r=a9(),K0r=s9(),go;Q0r()?go=Z0r:go=K0r;o9.exports=go});var f9=u((mXr,v9)=>{"use strict";var x0r=ir(),rur=typeof Float32Array=="function";function eur(r){return rur&&r instanceof Float32Array||x0r(r)==="[object Float32Array]"}v9.exports=eur});var l9=u((qXr,c9)=>{"use strict";var tur=f9();c9.exports=tur});var g9=u((yXr,p9)=>{"use strict";var iur=typeof Float32Array=="function"?Float32Array:null;p9.exports=iur});var y9=u((hXr,q9)=>{"use strict";var nur=l9(),aur=P(),m9=g9();function uur(){var r,e;if(typeof m9!="function")return!1;try{e=new m9([1,3.14,-3.14,5e40]),r=nur(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===aur}catch{r=!1}return r}q9.exports=uur});var d9=u((dXr,h9)=>{"use strict";var sur=y9();h9.exports=sur});var b9=u((wXr,w9)=>{"use strict";var our=typeof Float32Array=="function"?Float32Array:void 0;w9.exports=our});var N9=u((bXr,E9)=>{"use strict";function vur(){throw new Error("not implemented")}E9.exports=vur});var re=u((EXr,A9)=>{"use strict";var fur=d9(),cur=b9(),lur=N9(),mo;fur()?mo=cur:mo=lur;A9.exports=mo});var S9=u((NXr,O9)=>{"use strict";var pur=ir(),gur=typeof Float64Array=="function";function mur(r){return gur&&r instanceof Float64Array||pur(r)==="[object Float64Array]"}O9.exports=mur});var I9=u((AXr,T9)=>{"use strict";var qur=S9();T9.exports=qur});var _9=u((OXr,L9)=>{"use strict";var yur=typeof Float64Array=="function"?Float64Array:null;L9.exports=yur});var F9=u((SXr,R9)=>{"use strict";var hur=I9(),P9=_9();function dur(){var r,e;if(typeof P9!="function")return!1;try{e=new P9([1,3.14,-3.14,NaN]),r=hur(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}R9.exports=dur});var qo=u((TXr,M9)=>{"use strict";var wur=F9();M9.exports=wur});var C9=u((IXr,B9)=>{"use strict";var bur=typeof Float64Array=="function"?Float64Array:void 0;B9.exports=bur});var G9=u((LXr,j9)=>{"use strict";function Eur(){throw new Error("not implemented")}j9.exports=Eur});var gr=u((_Xr,V9)=>{"use strict";var Nur=qo(),Aur=C9(),Our=G9(),yo;Nur()?yo=Aur:yo=Our;V9.exports=yo});var W9=u((PXr,H9)=>{"use strict";var Sur=Di(),Tur=Qt(),Iur=Xi(),Lur=Ji(),_ur=Zt(),Pur=Nt(),Rur=cr(),Fur=re(),Mur=gr(),U9;function Bur(r){return new Sur(r)}function Cur(r){return new Tur(r)}function jur(r){return new Iur(r)}function Gur(r){return new Lur(r)}function Vur(r){return new _ur(r)}function Uur(r){return new Pur(r)}function Hur(r){return new Rur(r)}function Wur(r){return new Fur(r)}function kur(r){return new Mur(r)}function Dur(){var r={int8array:Bur,uint8array:Cur,uint8clampedarray:jur,int16array:Gur,uint16array:Vur,int32array:Uur,uint32array:Hur,float32array:Wur,float64array:kur};return r}U9=Dur();H9.exports=U9});var z9=u((RXr,J9)=>{"use strict";var Kn=O(),ho=pr(),k9=dt(),Xur=Rp(),D9=Dn(),Jur=Wp(),zur=kn(),X9=Dt(),Yur=Zp(),zi=a4(),$ur=wt(),Yi=Ce(),Qur=X4(),Zur=W9();function Kur(r){var e,t,i,n,a,s,o,f;for(e=[],n=[],o=Object.create($ur(r)),e.push(r),n.push(o),t=Yur(r),f=0;f<t.length;f++)i=t[f],a=zi(r,i),Kn(a,"value")&&(s=ho(r[i])?[]:{},a.value=At(r[i],s,e,n,-1)),Yi(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function xur(r){var e=[],t=[],i,n,a,s,o,f;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=X9(r),f=0;f<i.length;f++)s=i[f],n=zi(r,s),Kn(n,"value")&&(a=ho(r[s])?[]:{},n.value=At(r[s],a,e,t,-1)),Yi(o,s,n);return o}function At(r,e,t,i,n){var a,s,o,f,v,c,l,p,m,y;if(n-=1,typeof r!="object"||r===null)return r;if(k9(r))return Qur(r);if(Xur(r))return xur(r);if(o=D9(r),o==="date")return new Date(+r);if(o==="regexp")return Jur(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(v=Zur[o],v)return v(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?Kur(r):{};if(s=X9(r),n>0)for(a=o,y=0;y<s.length;y++){if(c=s[y],p=r[c],o=D9(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||k9(p)){a==="object"?(f=zi(r,c),Kn(f,"value")&&(f.value=At(p)),Yi(e,c,f)):e[c]=At(p);continue}if(m=zur(t,p),m!==-1){e[c]=i[m];continue}l=ho(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=At(p,l,t,i,n):(f=zi(r,c),Kn(f,"value")&&(f.value=At(p,l,t,i,n)),Yi(e,c,f))}else if(o==="array")for(y=0;y<s.length;y++)c=s[y],e[c]=r[c];else for(y=0;y<s.length;y++)c=s[y],f=zi(r,c),Yi(e,c,f);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}J9.exports=At});var $9=u((FXr,Y9)=>{"use strict";var rsr=pr(),esr=Ge().isPrimitive,tsr=d(),isr=P(),nsr=z9();function asr(r,e){var t;if(arguments.length>1){if(!esr(e))throw new TypeError(tsr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=isr;return t=rsr(r)?new Array(r.length):{},nsr(r,t,[r],[t],e)}Y9.exports=asr});var Z9=u((MXr,Q9)=>{"use strict";var usr=$9();Q9.exports=usr});var K9=u((BXr,ssr)=>{ssr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var r7=u((CXr,x9)=>{"use strict";var osr=Z9(),vsr=K9();function fsr(){return osr(vsr)}x9.exports=fsr});var t7=u((jXr,e7)=>{"use strict";var csr=pr();function lsr(r){return typeof r=="object"&&r!==null&&!csr(r)}e7.exports=lsr});var xn=u((GXr,i7)=>{"use strict";var psr=t7();i7.exports=psr});var u7=u((VXr,a7)=>{"use strict";var gsr=xn(),n7=I(),msr=wt(),ra=O(),qsr=ir(),ysr=Object.prototype;function hsr(r){var e;for(e in r)if(!ra(r,e))return!1;return!0}function dsr(r){var e;return gsr(r)?(e=msr(r),e?!ra(r,"constructor")&&ra(e,"constructor")&&n7(e.constructor)&&qsr(e.constructor)==="[object Function]"&&ra(e,"isPrototypeOf")&&n7(e.isPrototypeOf)&&(e===ysr||hsr(r)):!0):!1}a7.exports=dsr});var T=u((UXr,s7)=>{"use strict";var wsr=u7();s7.exports=wsr});var v7=u((HXr,o7)=>{"use strict";var bsr=Ce();function Esr(r,e,t){bsr(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}o7.exports=Esr});var c7=u((WXr,f7)=>{"use strict";var Nsr=v7();f7.exports=Nsr});var p7=u((kXr,l7)=>{"use strict";var Asr=P(),Osr=X();function Ssr(r){return r===Asr||r===Osr}l7.exports=Ssr});var Rr=u((DXr,g7)=>{"use strict";var Tsr=p7();g7.exports=Tsr});var q7=u((XXr,m7)=>{"use strict";function Isr(r){return Math.abs(r)}m7.exports=Isr});var Y=u((JXr,y7)=>{"use strict";var Lsr=q7();y7.exports=Lsr});var d7=u((zXr,h7)=>{"use strict";var _sr=Qt(),Psr=Zt(),Rsr={uint16:Psr,uint8:_sr};h7.exports=Rsr});var N7=u((YXr,E7)=>{"use strict";var w7=d7(),b7;function Fsr(){var r,e;return r=new w7.uint16(1),r[0]=4660,e=new w7.uint8(r.buffer),e[0]===52}b7=Fsr();E7.exports=b7});var Ot=u(($Xr,A7)=>{"use strict";var Msr=N7();A7.exports=Msr});var S7=u((QXr,O7)=>{"use strict";var Bsr=Ot(),wo;Bsr===!0?wo=1:wo=0;O7.exports=wo});var L7=u((ZXr,I7)=>{"use strict";var Csr=cr(),jsr=gr(),Gsr=S7(),T7=new jsr(1),Vsr=new Csr(T7.buffer);function Usr(r){return T7[0]=r,Vsr[Gsr]}I7.exports=Usr});var tr=u((KXr,_7)=>{"use strict";var Hsr=L7();_7.exports=Hsr});var R7=u((xXr,P7)=>{"use strict";var Wsr=Ot(),bo;Wsr===!0?bo=1:bo=0;P7.exports=bo});var M7=u((rJr,F7)=>{"use strict";var ksr=cr(),Dsr=gr(),Xsr=R7(),Eo=new Dsr(1),Jsr=new ksr(Eo.buffer);function zsr(r,e){return Eo[0]=r,Jsr[Xsr]=e>>>0,Eo[0]}F7.exports=zsr});var ee=u((eJr,B7)=>{"use strict";var Ysr=M7();B7.exports=Ysr});var zr=u((tJr,C7)=>{"use strict";var $sr=1023;C7.exports=$sr});var G7=u((iJr,j7)=>{"use strict";function Qsr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}j7.exports=Qsr});var U7=u((nJr,V7)=>{"use strict";function Zsr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}V7.exports=Zsr});var D7=u((aJr,k7)=>{"use strict";var H7=tr(),Ksr=ee(),xsr=E(),ror=zr(),eor=X(),tor=G7(),ior=U7(),ea=.6931471803691238,ta=19082149292705877e-26,nor=0x40000000000000,aor=.3333333333333333,W7=1048575,uor=2146435072,sor=1048576,oor=1072693248;function vor(r){var e,t,i,n,a,s,o,f,v,c,l,p;return r===0?eor:xsr(r)||r<0?NaN:(t=H7(r),a=0,t<sor&&(a-=54,r*=nor,t=H7(r)),t>=uor?r+r:(a+=(t>>20)-ror|0,t&=W7,f=t+614244&1048576|0,r=Ksr(r,t|f^oor),a+=f>>20|0,o=r-1,(W7&2+t)<3?o===0?a===0?0:a*ea+a*ta:(s=o*o*(.5-aor*o),a===0?o-s:a*ea-(s-a*ta-o)):(c=o/(2+o),p=c*c,f=t-398458|0,l=p*p,v=440401-t|0,n=l*tor(l),i=p*ior(l),f|=v,s=i+n,f>0?(e=.5*o*o,a===0?o-(e-c*(e+s)):a*ea-(e-(c*(e+s)+a*ta)-o)):a===0?o-c*(o-s):a*ea-(c*(o-s)-a*ta-o))))}k7.exports=vor});var C=u((uJr,X7)=>{"use strict";var cor=D7();X7.exports=cor});var z7=u((sJr,J7)=>{"use strict";var lor=Math.ceil;J7.exports=lor});var $i=u((oJr,Y7)=>{"use strict";var por=z7();Y7.exports=por});var Q7=u((vJr,$7)=>{"use strict";var gor=x(),mor=$i();function qor(r){return r<0?mor(r):gor(r)}$7.exports=qor});var ia=u((fJr,Z7)=>{"use strict";var yor=Q7();Z7.exports=yor});var x7=u((cJr,K7)=>{"use strict";function hor(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}K7.exports=hor});var eg=u((lJr,rg)=>{"use strict";function dor(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}rg.exports=dor});var ig=u((pJr,tg)=>{"use strict";var wor=x7(),bor=eg();function Eor(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*wor(a),i+=n*n*bor(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}tg.exports=Eor});var No=u((gJr,ng)=>{"use strict";var Nor=ig();ng.exports=Nor});var sg=u((mJr,ug)=>{"use strict";var ag=-.16666666666666632,Aor=.00833333333332249,Oor=-.0001984126982985795,Sor=27557313707070068e-22,Tor=-25050760253406863e-24,Ior=158969099521155e-24;function Lor(r,e){var t,i,n,a;return a=r*r,n=a*a,t=Aor+a*(Oor+a*Sor)+a*n*(Tor+a*Ior),i=a*r,e===0?r+i*(ag+a*t):r-(a*(.5*e-i*t)-e-i*ag)}ug.exports=Lor});var Ao=u((qJr,og)=>{"use strict";var _or=sg();og.exports=_or});var Yr=u((yJr,vg)=>{"use strict";var Por=2147483647;vg.exports=Por});var Qi=u((hJr,fg)=>{"use strict";var Ror=2146435072;fg.exports=Ror});var na=u((dJr,cg)=>{"use strict";var For=1048575;cg.exports=For});var pg=u((wJr,lg)=>{"use strict";var Mor=Ot(),Oo;Mor===!0?Oo=0:Oo=1;lg.exports=Oo});var qg=u((bJr,mg)=>{"use strict";var Bor=cr(),Cor=gr(),jor=pg(),gg=new Cor(1),Gor=new Bor(gg.buffer);function Vor(r){return gg[0]=r,Gor[jor]}mg.exports=Vor});var hg=u((EJr,yg)=>{"use strict";var Uor=qg();yg.exports=Uor});var bg=u((NJr,wg)=>{"use strict";var Hor=Ot(),dg,So,To;Hor===!0?(So=1,To=0):(So=0,To=1);dg={HIGH:So,LOW:To};wg.exports=dg});var Sg=u((AJr,Og)=>{"use strict";var Wor=cr(),kor=gr(),Ng=bg(),Ag=new kor(1),Eg=new Wor(Ag.buffer),Dor=Ng.HIGH,Xor=Ng.LOW;function Jor(r,e){return Eg[Dor]=r,Eg[Xor]=e,Ag[0]}Og.exports=Jor});var xt=u((OJr,Tg)=>{"use strict";var zor=Sg();Tg.exports=zor});var Io=u((SJr,Ig)=>{"use strict";var Yor=1023;Ig.exports=Yor});var _g=u((TJr,Lg)=>{"use strict";var $or=-1023;Lg.exports=$or});var Lo=u((IJr,Pg)=>{"use strict";var Qor=-1074;Pg.exports=Qor});var _o=u((LJr,Rg)=>{"use strict";var Zor=2147483648;Rg.exports=Zor});var Bg=u((_Jr,Mg)=>{"use strict";var Kor=Ot(),Fg,Po,Ro;Kor===!0?(Po=1,Ro=0):(Po=0,Ro=1);Fg={HIGH:Po,LOW:Ro};Mg.exports=Fg});var Fo=u((PJr,Vg)=>{"use strict";var xor=cr(),r1r=gr(),jg=Bg(),Gg=new r1r(1),Cg=new xor(Gg.buffer),e1r=jg.HIGH,t1r=jg.LOW;function i1r(r,e,t,i){return Gg[0]=r,e[i]=Cg[e1r],e[i+t]=Cg[t1r],e}Vg.exports=i1r});var Hg=u((RJr,Ug)=>{"use strict";var n1r=Fo();function a1r(r){return n1r(r,[0>>>0,0>>>0],1,0)}Ug.exports=a1r});var ri=u((FJr,kg)=>{"use strict";var u1r=b(),Wg=Hg(),s1r=Fo();u1r(Wg,"assign",s1r);kg.exports=Wg});var Xg=u((MJr,Dg)=>{"use strict";var o1r=_o(),v1r=Yr(),f1r=ri(),c1r=tr(),l1r=xt(),Mo=[0,0];function p1r(r,e){var t,i;return f1r.assign(r,Mo,1,0),t=Mo[0],t&=v1r,i=c1r(e),i&=o1r,t|=i,l1r(t,Mo[1])}Dg.exports=p1r});var aa=u((BJr,Jg)=>{"use strict";var g1r=Xg();Jg.exports=g1r});var Bo=u((CJr,zg)=>{"use strict";var m1r=22250738585072014e-324;zg.exports=m1r});var Co=u((jJr,Yg)=>{"use strict";var q1r=Bo(),y1r=Rr(),h1r=E(),d1r=Y(),w1r=4503599627370496;function b1r(r,e,t,i){return h1r(r)||y1r(r)?(e[i]=r,e[i+t]=0,e):r!==0&&d1r(r)<q1r?(e[i]=r*w1r,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}Yg.exports=b1r});var Qg=u((GJr,$g)=>{"use strict";var E1r=Co();function N1r(r){return E1r(r,[0,0],1,0)}$g.exports=N1r});var xg=u((VJr,Kg)=>{"use strict";var A1r=b(),Zg=Qg(),O1r=Co();A1r(Zg,"assign",O1r);Kg.exports=Zg});var em=u((UJr,rm)=>{"use strict";var S1r=tr(),T1r=Qi(),I1r=zr();function L1r(r){var e=S1r(r);return e=(e&T1r)>>>20,e-I1r|0}rm.exports=L1r});var im=u((HJr,tm)=>{"use strict";var _1r=em();tm.exports=_1r});var am=u((WJr,nm)=>{"use strict";var P1r=P(),R1r=X(),F1r=zr(),M1r=Io(),B1r=_g(),C1r=Lo(),j1r=E(),G1r=Rr(),V1r=aa(),U1r=xg().assign,H1r=im(),W1r=ri(),k1r=xt(),D1r=2220446049250313e-31,X1r=2148532223>>>0,jo=[0,0],Go=[0,0];function J1r(r,e){var t,i;return e===0||r===0||j1r(r)||G1r(r)?r:(U1r(r,jo,1,0),r=jo[0],e+=jo[1],e+=H1r(r),e<C1r?V1r(0,r):e>M1r?r<0?R1r:P1r:(e<=B1r?(e+=52,i=D1r):i=1,W1r.assign(r,Go,1,0),t=Go[0],t&=X1r,t|=e+F1r<<20,i*k1r(t,Go[1])))}nm.exports=J1r});var ua=u((kJr,um)=>{"use strict";var z1r=am();um.exports=z1r});var om=u((DJr,sm)=>{"use strict";function Y1r(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}sm.exports=Y1r});var sa=u((XJr,vm)=>{"use strict";var $1r=om();vm.exports=$1r});var cm=u((JJr,fm)=>{"use strict";var Q1r=sa();function Z1r(r){return Q1r(0,r)}fm.exports=Z1r});var pm=u((zJr,lm)=>{"use strict";var K1r=cm();lm.exports=K1r});var hm=u((YJr,ym)=>{"use strict";var x1r=x(),oa=ua(),ca=pm(),mm=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],rvr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Vo=16777216,Uo=5960464477539063e-23,va=ca(20),gm=ca(20),fa=ca(20),vr=ca(20);function qm(r,e,t,i,n,a,s,o,f){var v,c,l,p,m,y,q,g,h;for(p=a,h=i[t],g=t,m=0;g>0;m++)c=Uo*h|0,vr[m]=h-Vo*c|0,h=i[g-1]+c,g-=1;if(h=oa(h,n),h-=8*x1r(h*.125),q=h|0,h-=q,l=0,n>0?(m=vr[t-1]>>24-n,q+=m,vr[t-1]-=m<<24-n,l=vr[t-1]>>23-n):n===0?l=vr[t-1]>>23:h>=.5&&(l=2),l>0){for(q+=1,v=0,m=0;m<t;m++)g=vr[m],v===0?g!==0&&(v=1,vr[m]=16777216-g):vr[m]=16777215-g;if(n>0)switch(n){case 1:vr[t-1]&=8388607;break;case 2:vr[t-1]&=4194303;break}l===2&&(h=1-h,v!==0&&(h-=oa(1,n)))}if(h===0){for(g=0,m=t-1;m>=a;m--)g|=vr[m];if(g===0){for(y=1;vr[a-y]===0;y++);for(m=t+1;m<=t+y;m++){for(f[o+m]=mm[s+m],c=0,g=0;g<=o;g++)c+=r[g]*f[o+(m-g)];i[m]=c}return t+=y,qm(r,e,t,i,n,a,s,o,f)}}if(h===0)for(t-=1,n-=24;vr[t]===0;)t-=1,n-=24;else h=oa(h,-n),h>=Vo?(c=Uo*h|0,vr[t]=h-Vo*c|0,t+=1,n+=24,vr[t]=c):vr[t]=h|0;for(c=oa(1,n),m=t;m>=0;m--)i[m]=c*vr[m],c*=Uo;for(m=t;m>=0;m--){for(c=0,y=0;y<=p&&y<=t-m;y++)c+=rvr[y]*i[m+y];fa[t-m]=c}for(c=0,m=t;m>=0;m--)c+=fa[m];for(l===0?e[0]=c:e[0]=-c,c=fa[0]-c,m=1;m<=t;m++)c+=fa[m];return l===0?e[1]=c:e[1]=-c,q&7}function evr(r,e,t,i){var n,a,s,o,f,v,c,l,p;for(a=4,o=i-1,s=(t-3)/24|0,s<0&&(s=0),v=t-24*(s+1),l=s-o,p=o+a,c=0;c<=p;c++)l<0?va[c]=0:va[c]=mm[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*va[o+(c-l)];gm[c]=n}return f=a,qm(r,e,f,gm,v,a,s,o,va)}ym.exports=evr});var wm=u(($Jr,dm)=>{"use strict";var tvr=Math.round;dm.exports=tvr});var Ho=u((QJr,bm)=>{"use strict";var ivr=wm();bm.exports=ivr});var Om=u((ZJr,Am)=>{"use strict";var nvr=Ho(),Em=tr(),avr=.6366197723675814,uvr=1.5707963267341256,svr=6077100506506192e-26,ovr=6077100506303966e-26,vvr=20222662487959506e-37,fvr=20222662487111665e-37,cvr=84784276603689e-45,Nm=2047;function lvr(r,e,t){var i,n,a,s,o,f,v;return n=nvr(r*avr),s=r-n*uvr,o=n*svr,v=e>>20|0,t[0]=s-o,i=Em(t[0]),f=v-(i>>20&Nm),f>16&&(a=s,o=n*ovr,s=a-o,o=n*vvr-(a-s-o),t[0]=s-o,i=Em(t[0]),f=v-(i>>20&Nm),f>49&&(a=s,o=n*fvr,s=a-o,o=n*cvr-(a-s-o),t[0]=s-o)),t[1]=s-t[0]-o,n}Am.exports=lvr});var Tm=u((KJr,Sm)=>{"use strict";var pvr=Yr(),gvr=Qi(),mvr=na(),qvr=tr(),yvr=hg(),hvr=xt(),dvr=hm(),la=Om(),wvr=0,bvr=16777216,Ue=1.5707963267341256,St=6077100506506192e-26,pa=2*St,ga=3*St,ma=4*St,Evr=598523,Nvr=1072243195,Avr=1073928572,Ovr=1074752122,Svr=1074977148,Tvr=1075183036,Ivr=1075388923,Lvr=1075594811,_vr=1094263291,Zi=[0,0,0],Ki=[0,0];function Pvr(r,e){var t,i,n,a,s,o,f,v;if(n=qvr(r),a=n&pvr|0,a<=Nvr)return e[0]=r,e[1]=0,0;if(a<=Ovr)return(a&mvr)===Evr?la(r,a,e):a<=Avr?r>0?(v=r-Ue,e[0]=v-St,e[1]=v-e[0]-St,1):(v=r+Ue,e[0]=v+St,e[1]=v-e[0]+St,-1):r>0?(v=r-2*Ue,e[0]=v-pa,e[1]=v-e[0]-pa,2):(v=r+2*Ue,e[0]=v+pa,e[1]=v-e[0]+pa,-2);if(a<=Lvr)return a<=Tvr?a===Svr?la(r,a,e):r>0?(v=r-3*Ue,e[0]=v-ga,e[1]=v-e[0]-ga,3):(v=r+3*Ue,e[0]=v+ga,e[1]=v-e[0]+ga,-3):a===Ivr?la(r,a,e):r>0?(v=r-4*Ue,e[0]=v-ma,e[1]=v-e[0]-ma,4):(v=r+4*Ue,e[0]=v+ma,e[1]=v-e[0]+ma,-4);if(a<_vr)return la(r,a,e);if(a>=gvr)return e[0]=NaN,e[1]=NaN,0;for(t=yvr(r),i=(a>>20)-1046,v=hvr(a-(i<<20|0),t),o=0;o<2;o++)Zi[o]=v|0,v=(v-Zi[o])*bvr;for(Zi[2]=v,s=3;Zi[s-1]===wvr;)s-=1;return f=dvr(Zi,Ki,i,s,1),r<0?(e[0]=-Ki[0],e[1]=-Ki[1],-f):(e[0]=Ki[0],e[1]=Ki[1],f)}Sm.exports=Pvr});var xi=u((xJr,Im)=>{"use strict";var Rvr=Tm();Im.exports=Rvr});var Pm=u((rzr,_m)=>{"use strict";var Fvr=tr(),Wo=No(),Lm=Ao(),Mvr=xi(),te=[0,0],Bvr=2147483647,Cvr=1072243195,jvr=1044381696,Gvr=2146435072;function Vvr(r){var e,t;if(e=Fvr(r),e&=Bvr,e<=Cvr)return e<jvr?1:Wo(r,0);if(e>=Gvr)return NaN;switch(t=Mvr(r,te),t&3){case 0:return Wo(te[0],te[1]);case 1:return-Lm(te[0],te[1]);case 2:return-Wo(te[0],te[1]);default:return Lm(te[0],te[1])}}_m.exports=Vvr});var Tt=u((ezr,Rm)=>{"use strict";var Uvr=Pm();Rm.exports=Uvr});var Bm=u((tzr,Mm)=>{"use strict";var Hvr=Yr(),Wvr=Qi(),kvr=tr(),Fm=No(),ko=Ao(),Dvr=xi(),Xvr=1072243195,Jvr=1045430272,ie=[0,0];function zvr(r){var e,t;if(e=kvr(r),e&=Hvr,e<=Xvr)return e<Jvr?r:ko(r,0);if(e>=Wvr)return NaN;switch(t=Dvr(r,ie),t&3){case 0:return ko(ie[0],ie[1]);case 1:return Fm(ie[0],ie[1]);case 2:return-ko(ie[0],ie[1]);default:return-Fm(ie[0],ie[1])}}Mm.exports=zvr});var It=u((izr,Cm)=>{"use strict";var Yvr=Bm();Cm.exports=Yvr});var Ir=u((nzr,jm)=>{"use strict";var $vr=3.141592653589793;jm.exports=$vr});var Um=u((azr,Vm)=>{"use strict";var Qvr=E(),Zvr=Rr(),Gm=Tt(),Do=It(),Kvr=Y(),rn=aa(),en=Ir();function xvr(r){var e,t;return Qvr(r)?NaN:Zvr(r)?NaN:(t=r%2,e=Kvr(t),e===0||e===1?rn(0,t):e<.25?Do(en*t):e<.75?(e=.5-e,rn(Gm(en*e),t)):e<1.25?(t=rn(1,t)-t,Do(en*t)):e<1.75?(e-=1.5,-rn(Gm(en*e),t)):(t-=rn(2,t),Do(en*t)))}Vm.exports=xvr});var tn=u((uzr,Hm)=>{"use strict";var r2r=Um();Hm.exports=r2r});var km=u((szr,Wm)=>{"use strict";function e2r(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}Wm.exports=e2r});var Xm=u((ozr,Dm)=>{"use strict";function t2r(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}Dm.exports=t2r});var zm=u((vzr,Jm)=>{"use strict";function i2r(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}Jm.exports=i2r});var $m=u((fzr,Ym)=>{"use strict";function n2r(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}Ym.exports=n2r});var Zm=u((czr,Qm)=>{"use strict";function a2r(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}Qm.exports=a2r});var xm=u((lzr,Km)=>{"use strict";function u2r(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}Km.exports=u2r});var eq=u((pzr,rq)=>{"use strict";function s2r(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}rq.exports=s2r});var iq=u((gzr,tq)=>{"use strict";function o2r(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}tq.exports=o2r});var aq=u((mzr,nq)=>{"use strict";function v2r(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}nq.exports=v2r});var sq=u((qzr,uq)=>{"use strict";function f2r(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}uq.exports=f2r});var fq=u((yzr,vq)=>{"use strict";var c2r=E(),l2r=Rr(),p2r=Y(),ei=C(),g2r=ia(),m2r=tn(),q2r=Ir(),Xo=P(),y2r=km(),h2r=Xm(),d2r=zm(),w2r=$m(),b2r=Zm(),E2r=xm(),N2r=eq(),A2r=iq(),O2r=aq(),S2r=sq(),T2r=.07721566490153287,I2r=.3224670334241136,L2r=1,_2r=-.07721566490153287,P2r=.48383612272381005,R2r=-.1475877229945939,F2r=.06462494023913339,M2r=-.07721566490153287,B2r=1,C2r=.4189385332046727,qa=1.4616321449683622,j2r=4503599627370496,G2r=0x400000000000000,V2r=8470329472543003e-37,oq=1.4616321449683622,U2r=-.12148629053584961,H2r=-3638676997039505e-33;function W2r(r){var e,t,i,n,a,s,o,f,v,c,l,p,m;if(c2r(r)||l2r(r))return r;if(r===0)return Xo;if(r<0?(e=!0,r=-r):e=!1,r<V2r)return-ei(r);if(e){if(r>=j2r||(v=m2r(r),v===0))return Xo;t=ei(q2r/p2r(v*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-ei(r),r>=qa-1+.27?(l=1-r,i=0):r>=qa-1-.27?(l=r-(oq-1),i=1):(l=r,i=2)):(m=0,r>=qa+.27?(l=2-r,i=0):r>=qa-.27?(l=r-oq,i=1):(l=r-1,i=2)),i){case 0:p=l*l,s=T2r+p*y2r(p),a=p*(I2r+p*h2r(p)),o=l*s+a,m+=o-.5*l;break;case 1:p=l*l,c=p*l,s=P2r+c*b2r(c),a=R2r+c*E2r(c),n=F2r+c*N2r(c),o=p*s-(H2r-c*(a+l*n)),m+=U2r+o;break;case 2:s=l*(M2r+l*A2r(l)),a=B2r+l*O2r(l),m+=-.5*l+s/a;break}else if(r<8)switch(i=g2r(r),l=r-i,o=l*(_2r+l*w2r(l)),f=L2r+l*d2r(l),m=.5*l+o/f,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=ei(p)}else r<G2r?(v=ei(r),p=1/r,l=p*p,c=C2r+p*S2r(l),m=(r-.5)*(v-1)+c):m=r*(ei(r)-1);return e&&(m=t-m),m}vq.exports=W2r});var nn=u((hzr,cq)=>{"use strict";var k2r=fq();cq.exports=k2r});var pq=u((dzr,lq)=>{"use strict";var D2r=X();function X2r(r){return r===0&&1/r===D2r}lq.exports=X2r});var Jo=u((wzr,gq)=>{"use strict";var J2r=pq();gq.exports=J2r});var zo=u((bzr,mq)=>{"use strict";var z2r=2.5066282746310007;mq.exports=z2r});var yq=u((Ezr,qq)=>{"use strict";var Y2r=Tr();function $2r(r){return Y2r(r/2)}qq.exports=$2r});var ya=u((Nzr,hq)=>{"use strict";var Q2r=yq();hq.exports=Q2r});var bq=u((Azr,wq)=>{"use strict";var dq=ya();function Z2r(r){return r>0?dq(r-1):dq(r+1)}wq.exports=Z2r});var Yo=u((Ozr,Eq)=>{"use strict";var K2r=bq();Eq.exports=K2r});var Aq=u((Szr,Nq)=>{"use strict";var x2r=Math.sqrt;Nq.exports=x2r});var V=u((Tzr,Oq)=>{"use strict";var rfr=Aq();Oq.exports=rfr});var Tq=u((Izr,Sq)=>{"use strict";var efr=Ot(),$o;efr===!0?$o=0:$o=1;Sq.exports=$o});var Lq=u((Lzr,Iq)=>{"use strict";var tfr=cr(),ifr=gr(),nfr=Tq(),Qo=new ifr(1),afr=new tfr(Qo.buffer);function ufr(r,e){return Qo[0]=r,afr[nfr]=e>>>0,Qo[0]}Iq.exports=ufr});var ne=u((_zr,_q)=>{"use strict";var sfr=Lq();_q.exports=sfr});var Rq=u((Pzr,Pq)=>{"use strict";function ofr(r){return r|0}Pq.exports=ofr});var Zo=u((Rzr,Fq)=>{"use strict";var vfr=Rq();Fq.exports=vfr});var Cq=u((Fzr,Bq)=>{"use strict";var Mq=Yo(),ffr=aa(),cfr=X(),ha=P();function lfr(r,e){return e===cfr?ha:e===ha?0:e>0?Mq(e)?r:0:Mq(e)?ffr(ha,r):ha}Bq.exports=lfr});var Gq=u((Mzr,jq)=>{"use strict";var pfr=Yr(),gfr=tr(),mfr=1072693247,da=1e300,wa=1e-300;function qfr(r,e){var t,i;return i=gfr(r),t=i&pfr,t<=mfr?e<0?da*da:wa*wa:e>0?da*da:wa*wa}jq.exports=qfr});var Hq=u((Bzr,Uq)=>{"use strict";var yfr=Y(),Vq=P();function hfr(r,e){return r===-1?(r-r)/(r-r):r===1?1:yfr(r)<1==(e===Vq)?0:Vq}Uq.exports=hfr});var kq=u((Czr,Wq)=>{"use strict";function dfr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}Wq.exports=dfr});var zq=u((jzr,Jq)=>{"use strict";var wfr=tr(),ba=ne(),Dq=ee(),bfr=zr(),Efr=kq(),Nfr=1048575,Xq=1048576,Afr=1072693248,Ofr=536870912,Sfr=524288,Tfr=20,Ifr=9007199254740992,Lfr=.9617966939259756,_fr=.9617967009544373,Pfr=-7028461650952758e-24,Rfr=[1,1.5],Ffr=[0,.5849624872207642],Mfr=[0,1350039202129749e-23];function Bfr(r,e,t){var i,n,a,s,o,f,v,c,l,p,m,y,q,g,h,N,A,G,S,J,sr,k;return J=0,t<Xq&&(e*=Ifr,J-=53,t=wfr(e)),J+=(t>>Tfr)-bfr|0,sr=t&Nfr|0,t=sr|Afr|0,sr<=235662?k=0:sr<767610?k=1:(k=0,J+=1,t-=Xq),e=Dq(e,t),c=Rfr[k],G=e-c,S=1/(e+c),n=G*S,s=ba(n,0),i=(t>>1|Ofr)+Sfr,i+=k<<18,f=Dq(0,i),v=e-(f-c),o=S*(G-s*f-s*v),a=n*n,A=a*a*Efr(a),A+=o*(s+n),a=s*s,f=3+a+A,f=ba(f,0),v=A-(f-3-a),G=s*f,S=o*f+v*n,p=G+S,p=ba(p,0),m=S-(p-G),y=_fr*p,q=Pfr*p+m*Lfr+Mfr[k],l=Ffr[k],N=J,g=y+q+l+N,g=ba(g,0),h=q-(g-N-l-y),r[0]=g,r[1]=h,r}Jq.exports=Bfr});var $q=u((Gzr,Yq)=>{"use strict";function Cfr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}Yq.exports=Cfr});var Zq=u((Vzr,Qq)=>{"use strict";var jfr=ne(),Gfr=$q(),Vfr=1.4426950408889634,Ufr=1.4426950216293335,Hfr=19259629911266175e-24;function Wfr(r,e){var t,i,n,a,s,o;return n=e-1,a=n*n*Gfr(n),s=Ufr*n,o=n*Hfr-a*Vfr,i=s+o,i=jfr(i,0),t=o-(i-s),r[0]=i,r[1]=t,r}Qq.exports=Wfr});var Ea=u((Uzr,Kq)=>{"use strict";var kfr=.6931471805599453;Kq.exports=kfr});var ry=u((Hzr,xq)=>{"use strict";function Dfr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}xq.exports=Dfr});var sy=u((Wzr,uy)=>{"use strict";var Xfr=tr(),ey=ee(),Jfr=ne(),zfr=Zo(),Yfr=ua(),$fr=Ea(),ty=zr(),iy=Yr(),ny=na(),Qfr=ry(),ay=1048576,Zfr=1071644672,an=20,Kfr=.6931471824645996,xfr=-1904654299957768e-24;function rcr(r,e,t){var i,n,a,s,o,f,v,c,l,p,m;return p=r&iy|0,m=(p>>an)-ty|0,l=0,p>Zfr&&(l=r+(ay>>m+1)>>>0,m=((l&iy)>>an)-ty|0,i=(l&~(ny>>m))>>>0,a=ey(0,i),l=(l&ny|ay)>>an-m>>>0,r<0&&(l=-l),e-=a),a=t+e,a=Jfr(a,0),o=a*Kfr,f=(t-(a-e))*$fr+a*xfr,c=o+f,v=f-(c-o),a=c*c,n=c-a*Qfr(a),s=c*n/(n-2)-(v+c*v),c=1-(s-c),r=Xfr(c),r=zfr(r),r+=l<<an>>>0,r>>an<=0?c=Yfr(c,l):c=ey(c,r),c}uy.exports=rcr});var hy=u((kzr,yy)=>{"use strict";var oy=E(),vy=Yo(),fy=Rr(),ecr=Tr(),cy=V(),tcr=Y(),Ko=ri(),icr=ne(),ly=Zo(),ncr=X(),acr=P(),xo=Yr(),ucr=Cq(),scr=Gq(),ocr=Hq(),vcr=zq(),fcr=Zq(),ccr=sy(),lcr=1072693247,pcr=1105199104,gcr=1139802112,py=1083179008,mcr=1072693248,qcr=1083231232,ycr=3230714880>>>0,gy=31,He=1e300,We=1e-300,hcr=8008566259537294e-32,ae=[0,0],my=[0,0];function qy(r,e){var t,i,n,a,s,o,f,v,c,l,p,m,y,q,g,h;if(oy(r)||oy(e))return NaN;if(Ko.assign(e,ae,1,0),o=ae[0],f=ae[1],f===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return cy(r);if(e===-.5)return 1/cy(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(fy(e))return ocr(r,e)}if(Ko.assign(r,ae,1,0),a=ae[0],s=ae[1],s===0){if(a===0)return ucr(r,e);if(r===1)return 1;if(r===-1&&vy(e))return-1;if(fy(r))return r===ncr?qy(-0,-e):e<0?0:acr}if(r<0&&ecr(e)===!1)return(r-r)/(r-r);if(n=tcr(r),t=a&xo|0,i=o&xo|0,v=a>>>gy|0,c=o>>>gy|0,v&&vy(e)?v=-1:v=1,i>pcr){if(i>gcr)return scr(r,e);if(t<lcr)return c===1?v*He*He:v*We*We;if(t>mcr)return c===0?v*He*He:v*We*We;y=fcr(my,n)}else y=vcr(my,n,t);if(l=icr(e,0),m=(e-l)*y[0]+e*y[1],p=l*y[0],q=m+p,Ko.assign(q,ae,1,0),g=ly(ae[0]),h=ly(ae[1]),g>=py){if((g-py|h)!==0||m+hcr>q-p)return v*He*He}else if((g&xo)>=qcr&&((g-ycr|h)!==0||m<=q-p))return v*We*We;return q=ccr(g,p,m),v*q}yy.exports=qy});var $=u((Dzr,dy)=>{"use strict";var dcr=hy();dy.exports=dcr});var by=u((Xzr,wy)=>{"use strict";function wcr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}wy.exports=wcr});var Ny=u((Jzr,Ey)=>{"use strict";var bcr=ua(),Ecr=by();function Ncr(r,e,t){var i,n,a,s;return i=r-e,n=i*i,a=i-n*Ecr(n),s=1-(e-i*a/(2-a)-r),bcr(s,t)}Ey.exports=Ncr});var Ly=u((zzr,Iy)=>{"use strict";var Acr=E(),Ay=ia(),Ocr=X(),Oy=P(),Scr=Ny(),Tcr=.6931471803691238,Icr=19082149292705877e-26,Sy=1.4426950408889634,Lcr=709.782712893384,_cr=-745.1332191019411,Ty=1/(1<<28),Pcr=-Ty;function Rcr(r){var e,t,i;return Acr(r)||r===Oy?r:r===Ocr?0:r>Lcr?Oy:r<_cr?0:r>Pcr&&r<Ty?1+r:(r<0?i=Ay(Sy*r-.5):i=Ay(Sy*r+.5),e=r-i*Tcr,t=i*Icr,Scr(e,t,i))}Iy.exports=Rcr});var fr=u((Yzr,_y)=>{"use strict";var Fcr=Ly();_y.exports=Fcr});var Ry=u(($zr,Py)=>{"use strict";function Mcr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}Py.exports=Mcr});var By=u((Qzr,My)=>{"use strict";var Bcr=zo(),Fy=$(),Ccr=fr(),jcr=Ry(),Gcr=143.01608;function Vcr(r){var e,t,i;return e=1/r,e=1+e*jcr(e),t=Ccr(r),r>Gcr?(i=Fy(r,.5*r-.25),t=i*(i/t)):t=Fy(r,r-.5)/t,Bcr*t*e}My.exports=Vcr});var jy=u((Zzr,Cy)=>{"use strict";var Ucr=.5772156649015329;Cy.exports=Ucr});var Vy=u((Kzr,Gy)=>{"use strict";var Hcr=jy();function Wcr(r,e){return e/((1+Hcr*r)*r)}Gy.exports=Wcr});var Hy=u((xzr,Uy)=>{"use strict";function kcr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}Uy.exports=kcr});var $y=u((rYr,Yy)=>{"use strict";var Dcr=E(),Xcr=Tr(),Jcr=Jo(),Wy=Y(),zcr=x(),Ycr=It(),ky=P(),Dy=X(),Xy=Ir(),Jy=By(),zy=Vy(),$cr=Hy();function Qcr(r){var e,t,i,n;if(Xcr(r)&&r<0||r===Dy||Dcr(r))return NaN;if(r===0)return Jcr(r)?Dy:ky;if(r>171.61447887182297)return ky;if(r<-170.5674972726612)return 0;if(t=Wy(r),t>33)return r>=0?Jy(r):(i=zcr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*Ycr(Xy*n),e*Xy/(Wy(n)*Jy(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return zy(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return zy(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*$cr(r))}Yy.exports=Qcr});var ti=u((eYr,Qy)=>{"use strict";var Zcr=$y();Qy.exports=Zcr});var r1=u((tYr,Zy)=>{"use strict";var Kcr=14901161193847656e-24;Zy.exports=Kcr});var xy=u((iYr,Ky)=>{"use strict";var xcr=17976931348623157e292;Ky.exports=xcr});var Na=u((nYr,rh)=>{"use strict";var rlr=709.782712893384;rh.exports=rlr});var th=u((aYr,eh)=>{"use strict";var elr=fr();function tlr(r,e){var t,i,n,a;if(n=elr(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}eh.exports=tlr});var nh=u((uYr,ih)=>{"use strict";function ilr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}ih.exports=ilr});var uh=u((sYr,ah)=>{"use strict";function nlr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}ah.exports=nlr});var oh=u((oYr,sh)=>{"use strict";function alr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}sh.exports=alr});var fh=u((vYr,vh)=>{"use strict";function ulr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}vh.exports=ulr});var lh=u((fYr,ch)=>{"use strict";function slr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}ch.exports=slr});var gh=u((cYr,ph)=>{"use strict";function olr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}ph.exports=olr});var qh=u((lYr,mh)=>{"use strict";function vlr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}mh.exports=vlr});var hh=u((pYr,yh)=>{"use strict";function flr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}yh.exports=flr});var Eh=u((gYr,bh)=>{"use strict";var clr=E(),dh=fr(),llr=ne(),plr=P(),glr=X(),mlr=nh(),qlr=uh(),ylr=oh(),hlr=fh(),dlr=lh(),wlr=gh(),blr=qh(),Elr=hh(),Aa=1e-300,Nlr=13877787807814457e-33,wh=.8450629115104675,Alr=.12837916709551256,Olr=1,Slr=-.0023621185607526594,Tlr=1,Ilr=-.009864944034847148,Llr=1,_lr=-.0098649429247001,Plr=1;function Rlr(r){var e,t,i,n,a,s,o,f;if(clr(r))return NaN;if(r===plr)return 0;if(r===glr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<Nlr?1-r:(i=r*r,n=Alr+i*mlr(i),a=Olr+i*qlr(i),s=n/a,r<.25?1-(r+r*s):(n=r*s,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=Slr+a*ylr(a),f=Tlr+a*hlr(a),e?1+wh+o/f:1-wh-o/f;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=Ilr+a*dlr(a),a=Llr+a*wlr(a);else{if(r<-6)return 2-Aa;n=_lr+a*blr(a),a=Plr+a*Elr(a)}return i=llr(t,0),n=dh(-(i*i)-.5625)*dh((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-Aa:Aa*Aa}bh.exports=Rlr});var e1=u((mYr,Nh)=>{"use strict";var Flr=Eh();Nh.exports=Flr});var Sh=u((qYr,Oh)=>{"use strict";var Mlr=e1(),Ah=V(),Blr=fr(),Clr=Ir();function jlr(r,e){var t,i,n,a,s;if(a=Mlr(Ah(e)),a!==0&&r>1){for(i=Blr(-e)/Ah(Clr*e),i*=e,t=.5,i/=t,n=i,s=2;s<r;++s)i/=s-t,i*=e,n+=i;a+=n}return a}Oh.exports=jlr});var t1=u((yYr,Th)=>{"use strict";var Glr=-708.3964185322641;Th.exports=Glr});var Ph=u((hYr,_h)=>{"use strict";var ii=fr(),Oa=$(),Vlr=C(),Ih=Na(),Lh=t1();function Ulr(r,e){var t,i;return i=r*Vlr(e),e>=1?i<Ih&&-e>Lh?t=Oa(e,r)*ii(-e):r>=1?t=Oa(e/ii(e/r),r):t=ii(i-e):i>Lh?t=Oa(e,r)*ii(-e):e/r<Ih?t=Oa(e/ii(e/r),r):t=ii(i-e),t}_h.exports=Ulr});var i1=u((dYr,Rh)=>{"use strict";function Hlr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Rh.exports=Hlr});var Mh=u((wYr,Fh)=>{"use strict";var Wlr=Function;Fh.exports=Wlr});var Ch=u((bYr,Bh)=>{"use strict";var klr=Mh();Bh.exports=klr});var Gh=u((EYr,jh)=>{"use strict";var Dlr=Ch(),Xlr=i1();function Jlr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new Dlr(e)();function a(s){return Xlr(r,s)}}jh.exports=Jlr});var Hh=u((NYr,Uh)=>{"use strict";var zlr=b(),Vh=i1(),Ylr=Gh();zlr(Vh,"factory",Ylr);Uh.exports=Vh});var Lt=u((AYr,Wh)=>{"use strict";var $lr=2220446049250313e-31;Wh.exports=$lr});var Dh=u((OYr,kh)=>{"use strict";var Qlr=eval;kh.exports=Qlr});var Jh=u((SYr,Xh)=>{"use strict";var Zlr=Dh();function Klr(){var r;try{Zlr('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}Xh.exports=Klr});var n1=u((TYr,zh)=>{"use strict";var xlr=Jh();zh.exports=xlr});var $h=u((IYr,Yh)=>{"use strict";var Sa=Y(),r3r=Lt(),e3r=1e6;function t3r(r,e){var t,i,n,a,s,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||r3r,a=o.maxTerms||e3r,s=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(s+=n,Sa(i*s)>=Sa(n)||--a===0)break}else do n=r(),s+=n;while(Sa(i*s)<Sa(n)&&--a);return s}Yh.exports=t3r});var Kh=u((LYr,Zh)=>{"use strict";var Qh=Y(),i3r=Lt(),n3r=1e6;function a3r(r,e){var t,i,n,a,s;s={},arguments.length>1&&(s=e),t=s.tolerance||i3r,n=s.maxTerms||n3r,a=s.initialValue||0;do i=r(),a+=i;while(Qh(t*a)<Qh(i)&&--n);return a}Zh.exports=a3r});var Ta=u((_Yr,xh)=>{"use strict";var u3r=n1(),s3r=$h(),o3r=Kh(),a1;u3r()?a1=s3r:a1=o3r;xh.exports=a1});var ed=u((PYr,rd)=>{"use strict";function v3r(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}rd.exports=v3r});var id=u((RYr,td)=>{"use strict";var f3r=Y(),c3r=C(),l3r=Lt(),p3r=Ta(),g3r=ed();function m3r(r){var e,t;return r<=-1?NaN:(t=f3r(r),t>.95?c3r(1+r)-r:t<l3r?-r*r/2:(e={initialValue:-r},p3r(g3r(r),e)))}td.exports=m3r});var ad=u((FYr,nd)=>{"use strict";var q3r=id();nd.exports=q3r});var ke=u((MYr,ud)=>{"use strict";var y3r=6.283185307179586;ud.exports=y3r});var od=u((BYr,sd)=>{"use strict";function h3r(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}sd.exports=h3r});var fd=u((CYr,vd)=>{"use strict";function d3r(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}vd.exports=d3r});var ld=u((jYr,cd)=>{"use strict";function w3r(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}cd.exports=w3r});var gd=u((GYr,pd)=>{"use strict";function b3r(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}pd.exports=b3r});var qd=u((VYr,md)=>{"use strict";function E3r(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}md.exports=E3r});var hd=u((UYr,yd)=>{"use strict";function N3r(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}yd.exports=N3r});var wd=u((HYr,dd)=>{"use strict";function A3r(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}dd.exports=A3r});var Ed=u((WYr,bd)=>{"use strict";function O3r(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}bd.exports=O3r});var Ad=u((kYr,Nd)=>{"use strict";function S3r(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Nd.exports=S3r});var Sd=u((DYr,Od)=>{"use strict";var T3r=Hh(),I3r=ad(),L3r=e1(),u1=V(),_3r=fr(),P3r=ke(),R3r=od(),F3r=fd(),M3r=ld(),B3r=gd(),C3r=qd(),j3r=hd(),G3r=wd(),V3r=Ed(),U3r=Ad(),Vr=[0,0,0,0,0,0,0,0,0,0];function H3r(r,e){var t,i,n,a,s;return i=(e-r)/r,n=-I3r(i),a=r*n,s=u1(2*n),e<r&&(s=-s),Vr[0]=R3r(s),Vr[1]=F3r(s),Vr[2]=M3r(s),Vr[3]=B3r(s),Vr[4]=C3r(s),Vr[5]=j3r(s),Vr[6]=G3r(s),Vr[7]=V3r(s),Vr[8]=U3r(s),Vr[9]=-.0005967612901927463,t=T3r(Vr,1/r),t*=_3r(-a)/u1(P3r*r),e<r&&(t=-t),t+=L3r(u1(a))/2,t}Od.exports=H3r});var Id=u((XYr,Td)=>{"use strict";function W3r(r,e){var t=1,i=r,n=e;return a;function a(){var s=t;return i+=1,t*=n/i,s}}Td.exports=W3r});var _d=u((JYr,Ld)=>{"use strict";var k3r=Ta(),D3r=Id();function X3r(r,e,t){var i,n;return t=t||0,n=D3r(r,e),i=k3r(n,{initialValue:t}),i}Ld.exports=X3r});var Rd=u((zYr,Pd)=>{"use strict";function J3r(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}Pd.exports=J3r});var Md=u((YYr,Fd)=>{"use strict";var z3r=Rd();Fd.exports=z3r});var Cd=u(($Yr,Bd)=>{"use strict";var Y3r=Md();Bd.exports=Y3r});var Gd=u((QYr,jd)=>{"use strict";function $3r(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}jd.exports=$3r});var kd=u((ZYr,Wd)=>{"use strict";var Q3r=E(),Vd=tr(),Ud=ee(),Z3r=P(),K3r=X(),Hd=zr(),x3r=Gd(),s1=.6931471803691238,o1=19082149292705877e-26,r6r=.41421356237309503,e6r=-.2928932188134525,t6r=1862645149230957e-24,i6r=5551115123125783e-32,n6r=9007199254740992,a6r=.6666666666666666;function u6r(r){var e,t,i,n,a,s,o,f,v,c;if(r<-1||Q3r(r))return NaN;if(r===-1)return K3r;if(r===Z3r||r===0)return r;if(r<0?i=-r:i=r,c=1,i<r6r){if(i<t6r)return i<i6r?r:r-r*r*.5;r>e6r&&(c=0,n=r,t=1)}return c!==0&&(i<n6r?(v=1+r,t=Vd(v),c=(t>>20)-Hd,c>0?a=1-(v-r):a=r-(v-1),a/=v):(v=r,t=Vd(v),c=(t>>20)-Hd,a=0),t&=1048575,t<434334?v=Ud(v,t|1072693248):(c+=1,v=Ud(v,t|1071644672),t=1048576-t>>2),n=v-1),e=.5*n*n,t===0?n===0?(a+=c*o1,c*s1+a):(f=e*(1-a6r*n),c*s1-(f-(c*o1+a)-n)):(s=n/(2+n),o=s*s,f=o*x3r(o),c===0?n-(e-s*(e+f)):c*s1-(e-(s*(e+f)+(c*o1+a))-n))}Wd.exports=u6r});var ni=u((KYr,Dd)=>{"use strict";var s6r=kd();Dd.exports=s6r});var Jd=u((xYr,Xd)=>{"use strict";var o6r=P();function v6r(r){return r===0&&1/r===o6r}Xd.exports=v6r});var De=u((r$r,zd)=>{"use strict";var f6r=Jd();zd.exports=f6r});var Qd=u((e$r,$d)=>{"use strict";var c6r=De(),Yd=E(),v1=P();function l6r(r,e){return Yd(r)||Yd(e)?NaN:r===v1||e===v1?v1:r===e&&r===0?c6r(r)?r:e:r>e?r:e}$d.exports=l6r});var f1=u((t$r,Zd)=>{"use strict";var p6r=Qd();Zd.exports=p6r});var rw=u((i$r,xd)=>{"use strict";var g6r=Jo(),Kd=E(),c1=X();function m6r(r,e){return Kd(r)||Kd(e)?NaN:r===c1||e===c1?c1:r===e&&r===0?g6r(r)?r:e:r<e?r:e}xd.exports=m6r});var tw=u((n$r,ew)=>{"use strict";var q6r=rw();ew.exports=q6r});var nw=u((a$r,iw)=>{"use strict";var y6r=10.900511;iw.exports=y6r});var l1=u((u$r,aw)=>{"use strict";var h6r=2.718281828459045;aw.exports=h6r});var ow=u((s$r,sw)=>{"use strict";var d6r=Cd(),w6r=nn(),b6r=ti(),E6r=ni(),N6r=V(),A6r=Y(),Xe=fr(),un=$(),p1=f1(),g1=tw(),uw=C(),Ia=Na(),sn=t1(),m1=nw(),O6r=l1();function S6r(r,e){var t,i,n,a,s,o,f;return n=r+m1-.5,f=(e-r-m1+.5)/n,r<1?e<=sn?Xe(r*uw(e)-e-w6r(r)):un(e,r)*Xe(-e)/b6r(r):(A6r(f*f*r)<=100&&r>150?(t=r*(E6r(f)-f)+e*(.5-m1)/n,t=Xe(t)):(a=r*uw(e/n),s=r-e,g1(a,s)<=sn||p1(a,s)>=Ia?(i=s/r,g1(a,s)/2>sn&&p1(a,s)/2<Ia?(o=un(e/n,r/2)*Xe(s/2),t=o*o):g1(a,s)/4>sn&&p1(a,s)/4<Ia&&e>r?(o=un(e/n,r/4)*Xe(s/4),t=o*o,t*=t):i>sn&&i<Ia?t=un(e*Xe(i)/n,r):t=Xe(a+s)):t=un(e/n,r)*Xe(s)),t*=N6r(n/O6r)/d6r(r),t)}sw.exports=S6r});var fw=u((o$r,vw)=>{"use strict";var T6r=.34657359027997264;vw.exports=T6r});var lw=u((v$r,cw)=>{"use strict";function I6r(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}cw.exports=I6r});var hw=u((f$r,yw)=>{"use strict";var L6r=E(),pw=tr(),q1=ee(),_6r=xt(),gw=P(),P6r=X(),mw=zr(),R6r=fw(),F6r=lw(),M6r=709.782712893384,y1=.6931471803691238,h1=19082149292705877e-26,qw=1.4426950408889634,B6r=38.816242111356935,C6r=1.0397207708399179;function j6r(r){var e,t,i,n,a,s,o,f,v,c,l,p,m;if(r===gw||L6r(r))return r;if(r===P6r)return-1;if(r===0)return r;if(r<0?(i=!0,f=-r):(i=!1,f=r),f>=B6r){if(i)return-1;if(f>=M6r)return gw}if(s=pw(f)|0,f>R6r)f<C6r?i?(n=r+y1,a=-h1,m=-1):(n=r-y1,a=h1,m=1):(i?m=qw*r-.5:m=qw*r+.5,m|=0,l=m,n=r-l*y1,a=l*h1),r=n-a,c=n-r-a;else{if(s<1016070144)return r;m=0}return e=.5*r,v=r*e,o=1+v*F6r(v),l=3-o*e,p=v*((o-l)/(6-r*l)),m===0?r-(r*p-v):(t=_6r(mw+m<<20,0),p=r*(p-c)-c,p-=v,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(f=1-(p-r),m===1024?(n=pw(f)+(m<<20)|0,f=q1(f,n)):f*=t,f-1):(l=1,m<20?(n=1072693248-(2097152>>m)|0,l=q1(l,n),f=l-(p-r)):(n=mw-m<<20|0,l=q1(l,n),f=r-(p+l),f+=1),f*=t,f))}yw.exports=j6r});var d1=u((c$r,dw)=>{"use strict";var G6r=hw();dw.exports=G6r});var Nw=u((l$r,Ew)=>{"use strict";var ww=E(),bw=Y(),V6r=d1(),U6r=C(),H6r=$(),W6r=ia();function k6r(r,e){var t;if(ww(r)||ww(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((bw(e*(r-1))<.5||bw(e)<.2)&&(t=U6r(r)*e,t<.5))return V6r(t)}else if(W6r(e)!==e)return NaN;return H6r(r,e)-1}Ew.exports=k6r});var Ow=u((p$r,Aw)=>{"use strict";var D6r=Nw();Aw.exports=D6r});var Tw=u((g$r,Sw)=>{"use strict";function X6r(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}Sw.exports=X6r});var Lw=u((m$r,Iw)=>{"use strict";function J6r(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}Iw.exports=J6r});var Pw=u((q$r,_w)=>{"use strict";function z6r(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}_w.exports=z6r});var Fw=u((y$r,Rw)=>{"use strict";var w1=C(),Y6r=Lt(),$6r=Tw(),Q6r=Lw(),Z6r=Pw(),K6r=.15896368026733398,x6r=.5281534194946289,rpr=.45201730728149414;function epr(r,e,t){var i,n,a,s;if(r<Y6r)return-w1(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=w1(r);while(r>=3);t=r-2}return a=t*(r+1),s=$6r(t),n+=a*K6r+a*s,n}return r<1&&(n+=-w1(r),t=e,e=r,r+=1),r<=1.5?(a=Q6r(e),i=e*t,n+=i*x6r+i*a,n):(a=t*e,s=Z6r(-t),n+=a*rpr+a*s,n)}Rw.exports=epr});var Gw=u((h$r,jw)=>{"use strict";var Mw=ti(),Bw=d1(),tpr=ni(),ipr=E(),Cw=Fw();function npr(r){return ipr(r)?NaN:r<0?r<-.5?Mw(1+r)-1:Bw(-tpr(r)+Cw(r+2,r+1,r)):r<2?Bw(Cw(r+1,r,r-1)):Mw(1+r)-1}jw.exports=npr});var Uw=u((d$r,Vw)=>{"use strict";var apr=Gw();Vw.exports=apr});var Ww=u((w$r,Hw)=>{"use strict";function upr(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,s;function s(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}Hw.exports=upr});var Dw=u((b$r,kw)=>{"use strict";var spr=Ow(),opr=Ta(),vpr=Uw(),fpr=Ww();function cpr(r,e,t){var i,n,a,s,o;return n=vpr(r),a=(n+1)/r,s=spr(e,r),n-=s,n/=r,o=fpr(r,e),s+=1,i=t?a:0,n=-s*opr(o,{initialValue:(i-n)/s}),t&&(n=-n),[n,a]}kw.exports=cpr});var b1=u((E$r,Xw)=>{"use strict";var lpr=11754943508222875e-54;Xw.exports=lpr});var zw=u((N$r,Jw)=>{"use strict";var La=Y(),$r=b1(),ppr=Lt(),gpr=1e6;function mpr(r,e,t){var i,n,a,s,o,f,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),s=v[1],a=v[0],s===0&&(s=$r),o=s,f=0,i===!0)do v=r.next().value,v&&(f=v[1]+v[0]*f,f===0&&(f=$r),o=v[1]+v[0]/o,o===0&&(o=$r),f=1/f,n=o*f,s*=n);while(La(n-1)>e&&--t);else do v=r(),v&&(f=v[1]+v[0]*f,f===0&&(f=$r),o=v[1]+v[0]/o,o===0&&(o=$r),f=1/f,n=o*f,s*=n);while(v&&La(n-1)>e&&--t);return a/s}function qpr(r,e,t){var i,n,a,s,o,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),a=f[1],a===0&&(a=$r),s=a,o=0,i===!0)do f=r.next().value,f&&(o=f[1]+f[0]*o,o===0&&(o=$r),s=f[1]+f[0]/s,s===0&&(s=$r),o=1/o,n=s*o,a*=n);while(f&&La(n-1)>e&&--t);else do f=r(),f&&(o=f[1]+f[0]*o,o===0&&(o=$r),s=f[1]+f[0]/s,s===0&&(s=$r),o=1/o,n=s*o,a*=n);while(f&&La(n-1)>e&&--t);return a}function ypr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||gpr,n=i.tolerance||ppr,i.keep?qpr(r,n,t):mpr(r,n,t)}Jw.exports=ypr});var Qw=u((A$r,$w)=>{"use strict";var Yw=Y(),hpr=Lt(),ai=b1(),dpr=1e6;function wpr(r,e,t){var i,n,a,s,o,f;f=r(),o=f[1],n=f[0],o===0&&(o=ai),a=o,s=0;do f=r(),f&&(s=f[1]+f[0]*s,s===0&&(s=ai),a=f[1]+f[0]/a,a===0&&(a=ai),s=1/s,i=a*s,o*=i);while(f&&Yw(i-1)>e&&--t);return n/o}function bpr(r,e,t){var i,n,a,s,o;o=r(),s=o[1],s===0&&(s=ai),n=s,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=ai),n=o[1]+o[0]/n,n===0&&(n=ai),a=1/a,i=n*a,s*=i);while(o&&Yw(i-1)>e&&--t);return s}function Epr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||hpr,t=i.maxIter||dpr,i.keep?bpr(r,n,t):wpr(r,n,t)}$w.exports=Epr});var Kw=u((O$r,Zw)=>{"use strict";var Npr=n1(),Apr=zw(),Opr=Qw(),E1;Npr()?E1=Apr:E1=Opr;Zw.exports=E1});var rb=u((S$r,xw)=>{"use strict";function Spr(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}xw.exports=Spr});var tb=u((T$r,eb)=>{"use strict";var Tpr=Kw(),Ipr=rb();function Lpr(r,e){var t=Ipr(r,e);return 1/(e-r+1+Tpr(t))}eb.exports=Lpr});var lb=u((I$r,cb)=>{"use strict";var _pr=nn(),Ppr=x(),on=ti(),ib=Y(),Rpr=fr(),nb=$(),Ur=C(),Fpr=r1(),ab=xy(),Mpr=zo(),ub=Na(),Bpr=P(),Cpr=th(),jpr=Sh(),sb=Ph(),Gpr=Sd(),N1=_d(),ob=ow(),Vpr=Dw(),vb=tb(),Upr=170;function fb(r,e,t,i){var n,a,s,o,f,v,c,l,p,m,y,q,g,h,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=Upr&&!a)return l&&e*4<r?(p=e*Ur(r)-r,p+=Ur(vb(e,r))):!l&&e>4*r?(p=e*Ur(r)-r,o=0,p+=Ur(N1(e,r,o)/e)):(p=fb(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Ur(p)-e+(e-.5)*Ur(e),p+=Ur(Mpr)):(p=e*Ur(r)-r,o=0,p+=Ur(N1(e,r,o)/e)):p=Ur(p)+_pr(e)),p>ub?Bpr:Rpr(p);switch(c=e<30&&e<=r+1&&r<ub,c?(h=Ppr(e),m=h===e,f=m?!1:ib(h-e)===.5):m=f=!1,m&&r>.6?(l=!l,s=0):f&&r>.2?(l=!l,s=1):r<Fpr&&e>1?s=6:r<.5?-.4/Ur(r)<e?s=2:s=3:r<1.1?r*.75<e?s=2:s=3:(v=!1,a&&e>20&&(y=ib((r-e)/e),e>200?20/e>y*y&&(v=!0):y<.4&&(v=!0)),v?s=5:r-1/(3*r)<e?s=2:(s=4,l=!l)),s){case 0:p=Cpr(e,r),a===!1&&(p*=on(e));break;case 1:p=jpr(e,r),a===!1&&(p*=on(e));break;case 2:p=a?ob(e,r):sb(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:on(e),a||p>=1||ab*p>o?(o/=p,a||e<1||ab/e>o?(o*=-e,n=!0):o=0):o=0)),p*=N1(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,g=Vpr(e,r,l),p=g[0],N=g[1],l=!1,a&&(p/=N);break;case 4:p=a?ob(e,r):sb(e,r),p!==0&&(p*=vb(e,r));break;case 5:p=Gpr(e,r),r>=e&&(l=!l);break;case 6:p=a?nb(r,e)/on(e+1):nb(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(q=a?1:on(e),p=q-p),p}cb.exports=fb});var A1=u((L$r,pb)=>{"use strict";var Hpr=lb();pb.exports=Hpr});var mb=u((_$r,gb)=>{"use strict";var Wpr=A1(),O1=E(),kpr=P();function Dpr(r,e,t){return O1(r)||O1(e)||O1(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===kpr?1:Wpr(r*t,e)}gb.exports=Dpr});var yb=u((P$r,qb)=>{"use strict";function Xpr(r){return e;function e(){return r}}qb.exports=Xpr});var L=u((R$r,hb)=>{"use strict";var Jpr=yb();hb.exports=Jpr});var bb=u((F$r,wb)=>{"use strict";var db=E();function zpr(r,e){return db(r)||db(e)?NaN:r<e?0:1}wb.exports=zpr});var Ab=u((M$r,Nb)=>{"use strict";var Ypr=L(),Eb=E();function $pr(r){if(Eb(r))return Ypr(NaN);return e;function e(t){return Eb(t)?NaN:t<r?0:1}}Nb.exports=$pr});var S1=u((B$r,Sb)=>{"use strict";var Qpr=b(),Ob=bb(),Zpr=Ab();Qpr(Ob,"factory",Zpr);Sb.exports=Ob});var Lb=u((C$r,Ib)=>{"use strict";var Kpr=L(),xpr=S1().factory,r4r=A1(),Tb=E(),e4r=P();function t4r(r,e){if(Tb(r)||Tb(e)||r<0||e<=0)return Kpr(NaN);if(r===0)return xpr(0);return t;function t(i){return i<=0?0:i===e4r?1:r4r(i*e,r)}}Ib.exports=t4r});var T1=u((j$r,Pb)=>{"use strict";var i4r=b(),_b=mb(),n4r=Lb();i4r(_b,"factory",n4r);Pb.exports=_b});var Fb=u((G$r,Rb)=>{"use strict";var a4r=T1();function u4r(r,e){return a4r(r,e/2,.5)}Rb.exports=u4r});var Bb=u((V$r,Mb)=>{"use strict";var s4r=T1().factory;function o4r(r){return s4r(r/2,.5)}Mb.exports=o4r});var Gb=u((U$r,jb)=>{"use strict";var v4r=b(),Cb=Fb(),f4r=Bb();v4r(Cb,"factory",f4r);jb.exports=Cb});var Wb=u((H$r,Hb)=>{"use strict";var c4r=T(),l4r=O(),p4r=kn(),Vb=d(),Ub=["values","indices","*"];function g4r(r,e){return c4r(e)?l4r(e,"returns")&&(r.returns=e.returns,p4r(Ub,r.returns)===-1)?new TypeError(Vb('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Ub.join('", "'),r.returns)):null:new TypeError(Vb("invalid argument. Options argument must be an object. Value: `%s`.",e))}Hb.exports=g4r});var Db=u((W$r,kb)=>{"use strict";var m4r=O();function q4r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),m4r(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}kb.exports=q4r});var Jb=u((k$r,Xb)=>{"use strict";var y4r=O();function h4r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),y4r(t,n)?t[n].push(a):t[n]=[a];return t}Xb.exports=h4r});var Yb=u((D$r,zb)=>{"use strict";var d4r=O();function w4r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),d4r(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}zb.exports=w4r});var Kb=u((X$r,Zb)=>{"use strict";var $b=Gr(),Qb=d(),b4r=Wb(),E4r=Db(),N4r=Jb(),A4r=Yb();function O4r(r,e,t){var i,n,a;if(!$b(r))throw new TypeError(Qb("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=b4r(i,e),n)throw n;a=t}if(!$b(a))throw new TypeError(Qb("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?E4r(r,a):i.returns==="indices"?N4r(r,a):A4r(r,a)}Zb.exports=O4r});var rE=u((J$r,xb)=>{"use strict";var S4r=Kb();xb.exports=S4r});var tE=u((z$r,eE)=>{"use strict";function T4r(r){var e,t,i,n,a,s;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)s=r[a],e=s-t,t+=e/(a+1),n+=e*(s-t);return n/(a-1)}eE.exports=T4r});var aE=u((Y$r,nE)=>{"use strict";var I4r=pr(),L4r=j().isPrimitive,_4r=T(),P4r=ar(),iE=O(),I1=d();function R4r(r,e){return _4r(e)?iE(e,"alpha")&&(r.alpha=e.alpha,!L4r(r.alpha)||P4r(r.alpha))?new TypeError(I1("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):iE(e,"groups")&&(r.groups=e.groups,!I4r(r.groups))?new TypeError(I1("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(I1("invalid argument. Options argument must be an object. Value: `%s`.",e))}nE.exports=R4r});var L1=u(($$r,uE)=>{"use strict";var F4r=jr().isPrimitive;function M4r(r){return F4r(r)&&r>0}uE.exports=M4r});var _1=u((Q$r,sE)=>{"use strict";var B4r=jr().isObject;function C4r(r){return B4r(r)&&r.valueOf()>0}sE.exports=C4r});var vE=u((Z$r,oE)=>{"use strict";var j4r=L1(),G4r=_1();function V4r(r){return j4r(r)||G4r(r)}oE.exports=V4r});var ue=u((K$r,cE)=>{"use strict";var fE=b(),P1=vE(),U4r=L1(),H4r=_1();fE(P1,"isPrimitive",U4r);fE(P1,"isObject",H4r);cE.exports=P1});var vn=u((x$r,lE)=>{"use strict";var W4r=9007199254740991;lE.exports=W4r});var R1=u((rQr,pE)=>{"use strict";var k4r=308;pE.exports=k4r});var mE=u((eQr,gE)=>{"use strict";var D4r=-308;gE.exports=D4r});var F1=u((tQr,qE)=>{"use strict";var X4r=-324;qE.exports=X4r});var NE=u((iQr,EE)=>{"use strict";var yE=E(),_a=Rr(),hE=$(),J4r=Y(),dE=Ho(),z4r=vn(),wE=R1(),Y4r=mE(),$4r=F1(),Q4r=z4r+1,bE=1e308;function Z4r(r,e){var t,i;return yE(r)||yE(e)||_a(e)?NaN:_a(r)||r===0||e<$4r||J4r(r)>Q4r&&e<=0?r:e>wE?0*r:e<Y4r?(t=hE(10,-(e+wE)),i=r*bE*t,_a(i)?r:dE(i)/bE/t):(t=hE(10,-e),i=r*t,_a(i)?r:dE(i)/t)}EE.exports=Z4r});var OE=u((nQr,AE)=>{"use strict";var K4r=NE();AE.exports=K4r});var IE=u((aQr,TE)=>{"use strict";var x4r=ue(),r8r=T(),e8r=or().isPrimitive,SE=O(),M1=d(),B1=OE();function t8r(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!r8r(r))throw new TypeError(M1("invalid argument. First argument must be an object. Value: `%s`.",r));if(SE(r,"digits")){if(!x4r(r.digits))throw new TypeError(M1("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(SE(r,"decision")){if(!e8r(r.decision))throw new TypeError(M1("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+B1(this.pValue,-t)+`
`,i+="    statistic: "+B1(this.statistic,-t)+`
`,i+="    df: "+B1(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}TE.exports=t8r});var PE=u((uQr,_E)=>{"use strict";var i8r=Gr(),n8r=T(),_t=c7(),a8r=Dt(),Pa=d(),u8r=Gb(),s8r=rE(),LE=C(),o8r=tE(),v8r=aE(),f8r=IE();function c8r(){var r,e,t,i,n,a,s,o,f,v,c,l,p,m,y,q,g,h,N,A;if(f=[],e=arguments.length,v={},n8r(arguments[e-1])&&(r=arguments[e-1],e-=1,m=v8r(v,r),m))throw m;if(v.groups){if(n=s8r(arguments[0],v.groups),i=a8r(n),e=i.length,e<2)throw new Error(Pa("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(A=0;A<e;A++)f.push(n[i[A]])}else for(A=0;A<e;A++)f.push(arguments[A]);for(s=0,t=0,o=0,y=0,h=new Array(e),N=h.slice(),A=0;A<e;A++){if(p=f[A],!i8r(p))throw new TypeError(Pa("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(Pa("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));h[A]=p.length-1,s+=h[A],t+=1/h[A],N[A]=o8r(p),o+=h[A]*N[A],y+=h[A]*LE(N[A])}if(o/=s,v.alpha===void 0?a=.05:a=v.alpha,a<0||a>1)throw new RangeError(Pa("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=s*LE(o)-y,l/=1+(t-1/s)/(3*(e-1)),g=e-1,c=1-u8r(l,g),q={},_t(q,"rejected",c<=a),_t(q,"alpha",a),_t(q,"pValue",c),_t(q,"statistic",l),_t(q,"df",g),_t(q,"method","Bartlett's test of equal variances"),_t(q,"print",f8r),q}_E.exports=c8r});var FE=u((sQr,RE)=>{"use strict";var l8r=PE();RE.exports=l8r});var BE=u((oQr,ME)=>{"use strict";function p8r(r){var e,t,i,n,a,s,o,f,v,c,l;if(f=r.length,t=[],f===0)return t;if(n=r[0],v=n.length,f===1){for(c=0;c<v;c++)t.push(n[c]);return t}for(e=[v],c=1;c<f;c++)e.push(r[c].length),e[c]>v&&(v=e[c]);for(c=0;c<v;c++)t.push(0);for(c=v-1;c>=0;){for(a=e[0]-v+c,a>=0?i=n[a]:i=1,l=1;l<f;l++){if(s=e[l]-v+c,s>=0?o=r[l][s]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}ME.exports=p8r});var jE=u((vQr,CE)=>{"use strict";var g8r=BE();CE.exports=g8r});var Ra=u((fQr,GE)=>{"use strict";function m8r(r){var e,t,i,n,a,s;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)e.push(n[s]);return e}GE.exports=m8r});var UE=u((cQr,VE)=>{"use strict";var q8r=j().isPrimitive,y8r=K().isPrimitive,h8r=or().isPrimitive,d8r=pr(),w8r=jE(),b8r=d(),E8r=Ra(),N8r={number:q8r,string:y8r,boolean:h8r};function A8r(r,e,t){var i,n,a,s,o,f,v,c,l,p;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],n=[],p=0;p<r.length;p++)if(l=r[p],o=e[p],c=N8r[o],c(l))n.push([l]),a.push([1,1]);else if(d8r(l))n.push(E8r(l)),a.push([l.length,l[0].length]);else throw new TypeError(b8r("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[p],o,o,String(l)));if(s=w8r(a),s===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");for(i=[],p=0;p<a.length;p++)v=a[p],f=[],v[0]===1?f.push(0):f.push(v[1]),v[1]===1?f.push(0):f.push(1),i.push(f);return[n,s,i]}VE.exports=A8r});var WE=u((lQr,HE)=>{"use strict";var C1=E(),O8r=De();function S8r(r,e,t,i,n){var a,s,o,f,v;if(r<=0)return i;if(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,a=e[s],i[o]=a,o+=n,v=1,C1(a)===!1)for(v;v<r;v++){if(s+=t,f=e[s],C1(f)){a=f;break}(f>a||f===a&&O8r(f))&&(a=f),i[o]=a,o+=n}if(C1(a))for(v;v<r;v++)i[o]=a,o+=n;return i}HE.exports=S8r});var DE=u((pQr,kE)=>{"use strict";var j1=E(),T8r=De();function I8r(r,e,t,i,n,a,s){var o,f,v,c,l;if(r<=0)return n;if(f=i,v=s,o=e[f],n[v]=o,v+=a,l=1,j1(o)===!1)for(l;l<r;l++){if(f+=t,c=e[f],j1(c)){o=c;break}(c>o||c===o&&T8r(c))&&(o=c),n[v]=o,v+=a}if(j1(o))for(l;l<r;l++)n[v]=o,v+=a;return n}kE.exports=I8r});var zE=u((gQr,JE)=>{"use strict";var L8r=b(),XE=WE(),_8r=DE();L8r(XE,"ndarray",_8r);JE.exports=XE});var $E=u((mQr,YE)=>{"use strict";var P8r=zE();YE.exports=P8r});var ZE=u((qQr,QE)=>{"use strict";var R8r=sa();function F8r(r,e){var t,i,n,a;for(i=e[1],n=e[0],t=[],a=0;a<n;a++)t.push(R8r(r,i));return t}QE.exports=F8r});var fn=u((yQr,KE)=>{"use strict";var M8r=ZE();KE.exports=M8r});var rN=u((hQr,xE)=>{"use strict";var B8r=sa(),C8r=fn();function j8r(r,e,t){return e===1?B8r(t,r):C8r(t,[r,e])}xE.exports=j8r});var tN=u((dQr,eN)=>{"use strict";function G8r(r,e,t){var i,n;for(i=[],n=0;n<r;n++)i.push(e.call(t,n));return i}eN.exports=G8r});var nN=u((wQr,iN)=>{"use strict";var V8r=tN();iN.exports=V8r});var uN=u((bQr,aN)=>{"use strict";function U8r(r,e,t){var i,n,a,s,o,f;for(a=r[1],s=r[0],i=[],o=0;o<s;o++){for(n=[],f=0;f<a;f++)n.push(e.call(t,[o,f]));i.push(n)}return i}aN.exports=U8r});var oN=u((EQr,sN)=>{"use strict";var H8r=uN();sN.exports=H8r});var fN=u((NQr,vN)=>{"use strict";var W8r=nN(),k8r=oN();function D8r(r,e,t){return e===1?W8r(r,t):k8r([r,e],t)}vN.exports=D8r});var lN=u((AQr,cN)=>{"use strict";var X8r=fn();function J8r(r){return X8r(1,r)}cN.exports=J8r});var gN=u((OQr,pN)=>{"use strict";var z8r=lN();pN.exports=z8r});var qN=u((SQr,mN)=>{"use strict";var Y8r=fn();function $8r(r){return Y8r(0,r)}mN.exports=$8r});var hN=u((TQr,yN)=>{"use strict";var Q8r=qN();yN.exports=Q8r});var G1=u((IQr,dN)=>{"use strict";var Z8r=j().isPrimitive;function K8r(r){return Z8r(r)&&r>0}dN.exports=K8r});var V1=u((LQr,wN)=>{"use strict";var x8r=j().isObject;function r5r(r){return x8r(r)&&r.valueOf()>0}wN.exports=r5r});var EN=u((_Qr,bN)=>{"use strict";var e5r=G1(),t5r=V1();function i5r(r){return e5r(r)||t5r(r)}bN.exports=i5r});var W=u((PQr,AN)=>{"use strict";var NN=b(),U1=EN(),n5r=G1(),a5r=V1();NN(U1,"isPrimitive",n5r);NN(U1,"isObject",a5r);AN.exports=U1});var SN=u((RQr,ON)=>{"use strict";var u5r=I();function s5r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&u5r(r.next)}ON.exports=s5r});var IN=u((FQr,TN)=>{"use strict";var o5r=SN();TN.exports=o5r});var PN=u((MQr,_N)=>{"use strict";var LN="function";function v5r(r){return typeof r.get===LN&&typeof r.set===LN}_N.exports=v5r});var H1=u((BQr,RN)=>{"use strict";var f5r=PN();RN.exports=f5r});var BN=u((CQr,MN)=>{"use strict";var FN={complex128:c5r,complex64:l5r,default:p5r};function c5r(r,e,t){r.set(t,e)}function l5r(r,e,t){r.set(t,e)}function p5r(r,e,t){r.set(t,e)}function g5r(r){var e=FN[r];return typeof e=="function"?e:FN.default}MN.exports=g5r});var W1=u((jQr,CN)=>{"use strict";var m5r=BN();CN.exports=m5r});var VN=u((GQr,GN)=>{"use strict";var jN={float64:q5r,float32:y5r,int32:h5r,int16:d5r,int8:w5r,uint32:b5r,uint16:E5r,uint8:N5r,uint8c:A5r,generic:O5r,default:S5r};function q5r(r,e,t){r[e]=t}function y5r(r,e,t){r[e]=t}function h5r(r,e,t){r[e]=t}function d5r(r,e,t){r[e]=t}function w5r(r,e,t){r[e]=t}function b5r(r,e,t){r[e]=t}function E5r(r,e,t){r[e]=t}function N5r(r,e,t){r[e]=t}function A5r(r,e,t){r[e]=t}function O5r(r,e,t){r[e]=t}function S5r(r,e,t){r[e]=t}function T5r(r){var e=jN[r];return typeof e=="function"?e:jN.default}GN.exports=T5r});var k1=u((VQr,UN)=>{"use strict";var I5r=VN();UN.exports=I5r});var WN=u((UQr,HN)=>{"use strict";var L5r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};HN.exports=L5r});var DN=u((HQr,kN)=>{"use strict";var _5r=4294967295;kN.exports=_5r});var JN=u((WQr,XN)=>{"use strict";var P5r=Tr(),R5r=DN();function F5r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&P5r(r.length)&&r.length>=0&&r.length<=R5r}XN.exports=F5r});var Pt=u((kQr,zN)=>{"use strict";var M5r=JN();zN.exports=M5r});var $N=u((DQr,YN)=>{"use strict";var B5r=ir(),C5r=typeof ArrayBuffer=="function";function j5r(r){return C5r&&r instanceof ArrayBuffer||B5r(r)==="[object ArrayBuffer]"}YN.exports=j5r});var D1=u((XQr,QN)=>{"use strict";var G5r=$N();QN.exports=G5r});var KN=u((JQr,ZN)=>{"use strict";function V5r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}ZN.exports=V5r});var rA=u((zQr,xN)=>{"use strict";function U5r(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}xN.exports=U5r});var aA=u((YQr,nA)=>{"use strict";var eA=j().isPrimitive,tA=Ce(),cn=b(),iA=d(),H5r=KN(),W5r=rA();function Rt(r,e){if(!(this instanceof Rt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!eA(r))throw new TypeError(iA("invalid argument. Real component must be a number. Value: `%s`.",r));if(!eA(e))throw new TypeError(iA("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return tA(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),tA(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}cn(Rt,"BYTES_PER_ELEMENT",8);cn(Rt.prototype,"BYTES_PER_ELEMENT",8);cn(Rt.prototype,"byteLength",16);cn(Rt.prototype,"toString",H5r);cn(Rt.prototype,"toJSON",W5r);nA.exports=Rt});var ui=u(($Qr,uA)=>{"use strict";var k5r=aA();uA.exports=k5r});var oA=u((QQr,sA)=>{"use strict";var D5r=typeof Math.fround=="function"?Math.fround:null;sA.exports=D5r});var cA=u((ZQr,fA)=>{"use strict";var X5r=re(),vA=new X5r(1);function J5r(r){return vA[0]=r,vA[0]}fA.exports=J5r});var gA=u((KQr,pA)=>{"use strict";var lA=oA(),z5r=cA(),X1;typeof lA=="function"?X1=lA:X1=z5r;pA.exports=X1});var qA=u((xQr,mA)=>{"use strict";function Y5r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}mA.exports=Y5r});var hA=u((rZr,yA)=>{"use strict";function $5r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}yA.exports=$5r});var AA=u((eZr,NA)=>{"use strict";var dA=j().isPrimitive,wA=Ce(),ln=b(),bA=gA(),EA=d(),Q5r=qA(),Z5r=hA();function Ft(r,e){if(!(this instanceof Ft))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!dA(r))throw new TypeError(EA("invalid argument. Real component must be a number. Value: `%s`.",r));if(!dA(e))throw new TypeError(EA("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return wA(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:bA(r)}),wA(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:bA(e)}),this}ln(Ft,"BYTES_PER_ELEMENT",4);ln(Ft.prototype,"BYTES_PER_ELEMENT",4);ln(Ft.prototype,"byteLength",8);ln(Ft.prototype,"toString",Q5r);ln(Ft.prototype,"toJSON",Z5r);NA.exports=Ft});var si=u((tZr,OA)=>{"use strict";var K5r=AA();OA.exports=K5r});var TA=u((iZr,SA)=>{"use strict";var x5r=ui(),r9r=si();function e9r(r){return r instanceof x5r||r instanceof r9r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}SA.exports=e9r});var Hr=u((nZr,IA)=>{"use strict";var t9r=TA();IA.exports=t9r});var _A=u((aZr,LA)=>{"use strict";var i9r=O(),Fa=ss();function n9r(){return typeof Fa=="function"&&typeof Fa("foo")=="symbol"&&i9r(Fa,"iterator")&&typeof Fa.iterator=="symbol"}LA.exports=n9r});var Ma=u((uZr,PA)=>{"use strict";var a9r=_A();PA.exports=a9r});var FA=u((sZr,RA)=>{"use strict";var u9r=Ma(),s9r=u9r()?Symbol.iterator:null;RA.exports=s9r});var Ba=u((oZr,MA)=>{"use strict";var o9r=FA();MA.exports=o9r});var CA=u((vZr,BA)=>{"use strict";var v9r=Ce();function f9r(r,e,t){v9r(r,e,{configurable:!1,enumerable:!1,get:t})}BA.exports=f9r});var _=u((fZr,jA)=>{"use strict";var c9r=CA();jA.exports=c9r});var VA=u((cZr,GA)=>{"use strict";function l9r(r){return r.re}GA.exports=l9r});var Je=u((lZr,UA)=>{"use strict";var p9r=VA();UA.exports=p9r});var WA=u((pZr,HA)=>{"use strict";function g9r(r){return r.im}HA.exports=g9r});var ze=u((gZr,kA)=>{"use strict";var m9r=WA();kA.exports=m9r});var XA=u((mZr,DA)=>{"use strict";var q9r=re();function y9r(r,e){return new q9r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}DA.exports=y9r});var oi=u((qZr,JA)=>{"use strict";var h9r=XA();JA.exports=h9r});var YA=u((yZr,zA)=>{"use strict";var d9r=gr();function w9r(r,e){return new d9r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}zA.exports=w9r});var vi=u((hZr,$A)=>{"use strict";var b9r=YA();$A.exports=b9r});var KA=u((dZr,ZA)=>{"use strict";var QA={float64:E9r,float32:N9r,int32:A9r,int16:O9r,int8:S9r,uint32:T9r,uint16:I9r,uint8:L9r,uint8c:_9r,generic:P9r,default:R9r};function E9r(r,e){return r[e]}function N9r(r,e){return r[e]}function A9r(r,e){return r[e]}function O9r(r,e){return r[e]}function S9r(r,e){return r[e]}function T9r(r,e){return r[e]}function I9r(r,e){return r[e]}function L9r(r,e){return r[e]}function _9r(r,e){return r[e]}function P9r(r,e){return r[e]}function R9r(r,e){return r[e]}function F9r(r){var e=QA[r];return typeof e=="function"?e:QA.default}ZA.exports=F9r});var Ca=u((wZr,xA)=>{"use strict";var M9r=KA();xA.exports=M9r});var tO=u((bZr,eO)=>{"use strict";var rO={complex128:B9r,complex64:C9r,default:j9r};function B9r(r,e){return r.get(e)}function C9r(r,e){return r.get(e)}function j9r(r,e){return r.get(e)}function G9r(r){var e=rO[r];return typeof e=="function"?e:rO.default}eO.exports=G9r});var ja=u((EZr,iO)=>{"use strict";var V9r=tO();iO.exports=V9r});var aO=u((NZr,nO)=>{"use strict";var U9r=Pt(),H9r=Hr(),W9r=Je(),k9r=ze(),D9r=d();function X9r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,U9r(i)&&i.length>=2)e.push(i[0],i[1]);else if(H9r(i))e.push(W9r(i),k9r(i));else return new TypeError(D9r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}nO.exports=X9r});var sO=u((AZr,uO)=>{"use strict";var J9r=Pt(),z9r=Hr(),Y9r=Je(),$9r=ze(),Q9r=d();function Z9r(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),J9r(a)&&a.length>=2)i.push(a[0],a[1]);else if(z9r(a))i.push(Y9r(a),$9r(a));else return new TypeError(Q9r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}uO.exports=Z9r});var vO=u((OZr,oO)=>{"use strict";var K9r=Hr(),x9r=Je(),r7r=ze();function e7r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!K9r(i))return null;r[a]=x9r(i),r[a+1]=r7r(i),a+=2}return r}oO.exports=e7r});var hO=u((SZr,yO)=>{"use strict";var pn=Ge().isPrimitive,fO=Pt(),z1=Gr(),cO=D1(),lO=xn(),t7r=pr(),Mt=I(),fi=Hr(),Ga=ya(),J1=Tr(),i7r=Ma(),ci=Ba(),qr=b(),Ha=_(),Fr=re(),pO=si(),Q=d(),Va=Je(),Ua=ze(),n7r=oi(),a7r=vi(),u7r=Ca(),s7r=ja(),gO=aO(),o7r=sO(),v7r=vO(),Lr=Fr.BYTES_PER_ELEMENT*2,mO=i7r();function li(r){return r instanceof rr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function qO(r){return r===rr||r.name==="Complex128Array"}function f7r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Lr}function c7r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Lr*2}function rr(){var r,e,t,i;if(e=arguments.length,!(this instanceof rr))return e===0?new rr:e===1?new rr(arguments[0]):e===2?new rr(arguments[0],arguments[1]):new rr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Fr(0);else if(e===1)if(pn(arguments[0]))t=new Fr(arguments[0]*2);else if(z1(arguments[0]))if(t=arguments[0],i=t.length,i&&t7r(t)&&fi(t[0])){if(t=v7r(new Fr(i*2),t),t===null){if(!Ga(i))throw new RangeError(Q("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(arguments[0])}}else{if(f7r(t))t=n7r(t,0);else if(c7r(t))t=a7r(t,0);else if(!Ga(i))throw new RangeError(Q("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(t)}else if(cO(arguments[0])){if(t=arguments[0],!J1(t.byteLength/Lr))throw new RangeError(Q("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Lr,t.byteLength));t=new Fr(t)}else if(lO(arguments[0])){if(t=arguments[0],mO===!1)throw new TypeError(Q("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Mt(t[ci]))throw new TypeError(Q("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ci](),!Mt(t.next))throw new TypeError(Q("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=gO(t),t instanceof Error)throw t;t=new Fr(t)}else throw new TypeError(Q("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!cO(t))throw new TypeError(Q("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!pn(r))throw new TypeError(Q("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!J1(r/Lr))throw new RangeError(Q("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Lr,r));if(e===2){if(i=t.byteLength-r,!J1(i/Lr))throw new RangeError(Q("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Lr,i));t=new Fr(t,r)}else{if(i=arguments[2],!pn(i))throw new TypeError(Q("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Lr>t.byteLength-r)throw new RangeError(Q("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Lr));t=new Fr(t,r,i*2)}}return qr(this,"_buffer",t),qr(this,"_length",t.length/2),this}qr(rr,"BYTES_PER_ELEMENT",Lr);qr(rr,"name","Complex64Array");qr(rr,"from",function(e){var t,i,n,a,s,o,f,v,c,l,p,m;if(!Mt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qO(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Mt(n))throw new TypeError(Q("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(li(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),fi(l))s[m]=Va(l),s[m+1]=Ua(l);else if(fO(l)&&l.length>=2)s[m]=l[0],s[m+1]=l[1];else throw new TypeError(Q("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(z1(e)){if(n){for(v=e.length,e.get&&e.set?f=s7r("default"):f=u7r("default"),p=0;p<v;p++)if(!fi(f(e,p))){c=!0;break}if(c){if(!Ga(v))throw new RangeError(Q("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,v));for(a=new this(v/2),s=a._buffer,p=0;p<v;p++)s[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),s=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),fi(l))s[m]=Va(l),s[m+1]=Ua(l);else if(fO(l)&&l.length>=2)s[m]=l[0],s[m+1]=l[1];else throw new TypeError(Q("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(lO(e)&&mO&&Mt(e[ci])){if(s=e[ci](),!Mt(s.next))throw new TypeError(Q("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=o7r(s,n,t):o=gO(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,p=0;p<v;p++)s[p]=o[p];return a}throw new TypeError(Q("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});qr(rr,"of",function(){var e,t;if(!Mt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qO(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Ha(rr.prototype,"buffer",function(){return this._buffer.buffer});Ha(rr.prototype,"byteLength",function(){return this._buffer.byteLength});Ha(rr.prototype,"byteOffset",function(){return this._buffer.byteOffset});qr(rr.prototype,"BYTES_PER_ELEMENT",rr.BYTES_PER_ELEMENT);qr(rr.prototype,"copyWithin",function(e,t){if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});qr(rr.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},qr(i,"next",f),qr(i,"return",v),ci&&qr(i,ci,c),i;function f(){var l;return s+=1,a||s>=n?{done:!0}:(o+=2,l=new pO(e[o],e[o+1]),{value:[s,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});qr(rr.prototype,"get",function(e){var t;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!pn(e))throw new TypeError(Q("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new pO(t[e],t[e+1])});Ha(rr.prototype,"length",function(){return this._length});qr(rr.prototype,"set",function(e){var t,i,n,a,s,o,f,v,c;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!pn(i))throw new TypeError(Q("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(fi(e)){if(i>=this._length)throw new RangeError(Q("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Va(e),n[i+1]=Ua(e);return}if(li(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(z1(e)){for(o=e.length,v=0;v<o;v++)if(!fi(e[v])){s=!0;break}if(s){if(!Ga(o))throw new RangeError(Q("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=Va(f),n[i+1]=Ua(f),i+=2;return}throw new TypeError(Q("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});yO.exports=rr});var gn=u((TZr,dO)=>{"use strict";var l7r=hO();dO.exports=l7r});var bO=u((IZr,wO)=>{"use strict";function p7r(r){return r.re}wO.exports=p7r});var Ye=u((LZr,EO)=>{"use strict";var g7r=bO();EO.exports=g7r});var AO=u((_Zr,NO)=>{"use strict";function m7r(r){return r.im}NO.exports=m7r});var $e=u((PZr,OO)=>{"use strict";var q7r=AO();OO.exports=q7r});var TO=u((RZr,SO)=>{"use strict";var y7r=Pt(),h7r=Hr(),d7r=d(),w7r=Ye(),b7r=$e();function E7r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,y7r(i)&&i.length>=2)e.push(i[0],i[1]);else if(h7r(i))e.push(w7r(i),b7r(i));else return new TypeError(d7r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}SO.exports=E7r});var LO=u((FZr,IO)=>{"use strict";var N7r=Pt(),A7r=Hr(),O7r=d(),S7r=Ye(),T7r=$e();function I7r(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),N7r(a)&&a.length>=2)i.push(a[0],a[1]);else if(A7r(a))i.push(S7r(a),T7r(a));else return new TypeError(O7r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}IO.exports=I7r});var PO=u((MZr,_O)=>{"use strict";var L7r=Hr(),_7r=Ye(),P7r=$e();function R7r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!L7r(i))return null;r[a]=_7r(i),r[a+1]=P7r(i),a+=2}return r}_O.exports=R7r});var UO=u((BZr,VO)=>{"use strict";var mn=Ge().isPrimitive,RO=Pt(),$1=Gr(),FO=D1(),MO=xn(),F7r=pr(),Bt=I(),pi=Hr(),Wa=ya(),Y1=Tr(),M7r=Ma(),gi=Ba(),yr=b(),Xa=_(),Mr=gr(),BO=ui(),ka=Ye(),Da=$e(),B7r=oi(),C7r=vi(),j7r=Ca(),G7r=ja(),Z=d(),CO=TO(),V7r=LO(),U7r=PO(),_r=Mr.BYTES_PER_ELEMENT*2,jO=M7r();function mi(r){return r instanceof er||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function GO(r){return r===er||r.name==="Complex64Array"}function H7r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===_r/2}function W7r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===_r}function er(){var r,e,t,i;if(e=arguments.length,!(this instanceof er))return e===0?new er:e===1?new er(arguments[0]):e===2?new er(arguments[0],arguments[1]):new er(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Mr(0);else if(e===1)if(mn(arguments[0]))t=new Mr(arguments[0]*2);else if($1(arguments[0]))if(t=arguments[0],i=t.length,i&&F7r(t)&&pi(t[0])){if(t=U7r(new Mr(i*2),t),t===null){if(!Wa(i))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Mr(arguments[0])}}else{if(H7r(t))t=B7r(t,0);else if(W7r(t))t=C7r(t,0);else if(!Wa(i))throw new RangeError(Z("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Mr(t)}else if(FO(arguments[0])){if(t=arguments[0],!Y1(t.byteLength/_r))throw new RangeError(Z("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",_r,t.byteLength));t=new Mr(t)}else if(MO(arguments[0])){if(t=arguments[0],jO===!1)throw new TypeError(Z("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Bt(t[gi]))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[gi](),!Bt(t.next))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=CO(t),t instanceof Error)throw t;t=new Mr(t)}else throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!FO(t))throw new TypeError(Z("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!mn(r))throw new TypeError(Z("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!Y1(r/_r))throw new RangeError(Z("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",_r,r));if(e===2){if(i=t.byteLength-r,!Y1(i/_r))throw new RangeError(Z("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",_r,i));t=new Mr(t,r)}else{if(i=arguments[2],!mn(i))throw new TypeError(Z("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*_r>t.byteLength-r)throw new RangeError(Z("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*_r));t=new Mr(t,r,i*2)}}return yr(this,"_buffer",t),yr(this,"_length",t.length/2),this}yr(er,"BYTES_PER_ELEMENT",_r);yr(er,"name","Complex128Array");yr(er,"from",function(e){var t,i,n,a,s,o,f,v,c,l,p,m;if(!Bt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!GO(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Bt(n))throw new TypeError(Z("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(mi(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),pi(l))s[m]=ka(l),s[m+1]=Da(l);else if(RO(l)&&l.length>=2)s[m]=l[0],s[m+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if($1(e)){if(n){for(v=e.length,e.get&&e.set?f=G7r("default"):f=j7r("default"),p=0;p<v;p++)if(!pi(f(e,p))){c=!0;break}if(c){if(!Wa(v))throw new RangeError(Z("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",v));for(a=new this(v/2),s=a._buffer,p=0;p<v;p++)s[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),s=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),pi(l))s[m]=ka(l),s[m+1]=Da(l);else if(RO(l)&&l.length>=2)s[m]=l[0],s[m+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(MO(e)&&jO&&Bt(e[gi])){if(s=e[gi](),!Bt(s.next))throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=V7r(s,n,t):o=CO(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,p=0;p<v;p++)s[p]=o[p];return a}throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});yr(er,"of",function(){var e,t;if(!Bt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!GO(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Xa(er.prototype,"buffer",function(){return this._buffer.buffer});Xa(er.prototype,"byteLength",function(){return this._buffer.byteLength});Xa(er.prototype,"byteOffset",function(){return this._buffer.byteOffset});yr(er.prototype,"BYTES_PER_ELEMENT",er.BYTES_PER_ELEMENT);yr(er.prototype,"copyWithin",function(e,t){if(!mi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});yr(er.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!mi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},yr(i,"next",f),yr(i,"return",v),gi&&yr(i,gi,c),i;function f(){var l;return s+=1,a||s>=n?{done:!0}:(o+=2,l=new BO(e[o],e[o+1]),{value:[s,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});yr(er.prototype,"get",function(e){var t;if(!mi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!mn(e))throw new TypeError(Z("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new BO(t[e],t[e+1])});Xa(er.prototype,"length",function(){return this._length});yr(er.prototype,"set",function(e){var t,i,n,a,s,o,f,v,c;if(!mi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!mn(i))throw new TypeError(Z("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(pi(e)){if(i>=this._length)throw new RangeError(Z("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=ka(e),n[i+1]=Da(e);return}if(mi(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*_r,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Mr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if($1(e)){for(o=e.length,v=0;v<o;v++)if(!pi(e[v])){s=!0;break}if(s){if(!Wa(o))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*_r,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Mr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=ka(f),n[i+1]=Da(f),i+=2;return}throw new TypeError(Z("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});VO.exports=er});var qn=u((CZr,HO)=>{"use strict";var k7r=UO();HO.exports=k7r});var kO=u((jZr,WO)=>{"use strict";var D7r=gr(),X7r=re(),J7r=cr(),z7r=Nt(),Y7r=Zt(),$7r=Ji(),Q7r=Qt(),Z7r=Xi(),K7r=Di(),x7r=gn(),rgr=qn(),egr=[D7r,X7r,z7r,J7r,$7r,Y7r,K7r,Q7r,Z7r,x7r,rgr];WO.exports=egr});var XO=u((GZr,DO)=>{"use strict";var tgr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];DO.exports=tgr});var YO=u((VZr,zO)=>{"use strict";var igr=dt(),ngr=pr(),agr=je(),ugr=WN(),sgr=kO(),JO=XO(),ogr=JO.length;function vgr(r){var e;if(ngr(r))return"generic";if(igr(r))return null;for(e=0;e<ogr;e++)if(r instanceof sgr[e])return JO[e];return ugr[agr(r)]||null}zO.exports=vgr});var Ja=u((UZr,$O)=>{"use strict";var fgr=YO();$O.exports=fgr});var KO=u((HZr,ZO)=>{"use strict";var QO=I(),cgr=Gr(),lgr=IN(),pgr=H1(),ggr=W1(),mgr=k1(),qgr=Ja(),Q1=d();function ygr(){var r,e,t,i,n,a,s,o,f;if(r=arguments[0],arguments.length>1)if(cgr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!QO(t))throw new TypeError(Q1("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!QO(t))throw new TypeError(Q1("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!lgr(r))throw new TypeError(Q1("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,f=r.next(),!f.done;)i.push(t.call(e,f.value,o));return i}for(;f=r.next(),!f.done;)i.push(f.value);return i}if(n=i.length,s=qgr(i),pgr(i)?a=ggr(s):a=mgr(s),t){for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,t.call(e,f.value,o));return i}for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,f.value);return i}ZO.exports=ygr});var rS=u((WZr,xO)=>{"use strict";var hgr=KO();xO.exports=hgr});var tS=u((kZr,eS)=>{"use strict";function dgr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}eS.exports=dgr});var nS=u((DZr,iS)=>{"use strict";function wgr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}iS.exports=wgr});var sS=u((XZr,uS)=>{"use strict";var bgr=tr(),aS=ne(),Egr=tS(),Ngr=nS(),Agr=.7853981633974483,Ogr=3061616997868383e-32,Sgr=.3333333333333341,Tgr=2147483647;function Igr(r,e,t){var i,n,a,s,o,f,v,c,l;return i=bgr(r),n=i&Tgr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=Agr-r,c=Ogr-e,r=l+c,e=0),l=r*r,c=l*l,s=Egr(c),v=l*Ngr(c),o=l*r,s=e+l*(o*(s+v)+e),s+=Sgr*o,c=r+s,n>=1072010280?(v=t,(1-(i>>30&2))*(v-2*(r-(c*c/(c+v)-s)))):t===1?c:(l=aS(c,0),v=s-(l-r),a=-1/c,f=aS(a,0),o=1+f*l,f+a*(o+f*v))}uS.exports=Igr});var vS=u((JZr,oS)=>{"use strict";var Lgr=sS();oS.exports=Lgr});var lS=u((zZr,cS)=>{"use strict";var _gr=tr(),fS=vS(),Pgr=xi(),Z1=[0,0],Rgr=2147483647,Fgr=1072243195,Mgr=2146435072,Bgr=1044381696;function Cgr(r){var e,t;return e=_gr(r),e&=Rgr,e<=Fgr?e<Bgr?r:fS(r,0,1):e>=Mgr?NaN:(t=Pgr(r,Z1),fS(Z1[0],Z1[1],1-((t&1)<<1)))}cS.exports=Cgr});var K1=u((YZr,pS)=>{"use strict";var jgr=lS();pS.exports=jgr});var za=u(($Zr,gS)=>{"use strict";var Ggr=1.5707963267948966;gS.exports=Ggr});var Ya=u((QZr,mS)=>{"use strict";var Vgr=.7853981633974483;mS.exports=Vgr});var yS=u((ZZr,qS)=>{"use strict";function Ugr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}qS.exports=Ugr});var dS=u((KZr,hS)=>{"use strict";function Hgr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}hS.exports=Hgr});var ES=u((xZr,bS)=>{"use strict";var Wgr=E(),kgr=P(),x1=za(),Dgr=Ya(),Xgr=X(),Jgr=yS(),zgr=dS(),wS=6123233995736766e-32,Ygr=2.414213562373095;function $gr(r){var e,t,i,n;return Wgr(r)||r===0?r:r===kgr?x1:r===Xgr?-x1:(r<0&&(t=!0,r=-r),e=0,r>Ygr?(i=x1,e=1,r=-(1/r)):r<=.66?i=0:(i=Dgr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*Jgr(n)/zgr(n),n=r*n+r,e===2?n+=.5*wS:e===1&&(n+=wS),i+=n,t?-i:i)}bS.exports=$gr});var $a=u((rKr,NS)=>{"use strict";var Qgr=ES();NS.exports=Qgr});var rv=u((eKr,AS)=>{"use strict";var Zgr=j().isPrimitive;function Kgr(r){return Zgr(r)&&r>=0}AS.exports=Kgr});var ev=u((tKr,OS)=>{"use strict";var xgr=j().isObject;function rmr(r){return xgr(r)&&r.valueOf()>=0}OS.exports=rmr});var TS=u((iKr,SS)=>{"use strict";var emr=rv(),tmr=ev();function imr(r){return emr(r)||tmr(r)}SS.exports=imr});var iv=u((nKr,LS)=>{"use strict";var IS=b(),tv=TS(),nmr=rv(),amr=ev();IS(tv,"isPrimitive",nmr);IS(tv,"isObject",amr);LS.exports=tv});var PS=u((aKr,_S)=>{"use strict";var umr=T(),Qa=O(),smr=jr().isPrimitive,omr=ue().isPrimitive,vmr=Ge().isPrimitive,fmr=iv().isPrimitive,yn=d();function cmr(r,e){return umr(e)?Qa(e,"period")&&(r.period=e.period,!omr(e.period))?new TypeError(yn("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):Qa(e,"amplitude")&&(r.amplitude=e.amplitude,!fmr(e.amplitude))?new TypeError(yn("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):Qa(e,"offset")&&(r.offset=e.offset,!smr(e.offset))?new TypeError(yn("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):Qa(e,"iter")&&(r.iter=e.iter,!vmr(e.iter))?new TypeError(yn("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(yn("invalid argument. Options argument must be an object. Value: `%s`.",e))}_S.exports=cmr});var BS=u((uKr,MS)=>{"use strict";var nv=b(),RS=Ba(),lmr=K1(),pmr=$a(),gmr=za(),mmr=Ir(),qmr=PS();function FS(r){var e,t,i,n,a,s,o,f;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=qmr(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,s=mmr/e.period,o=e.amplitude/gmr,f=0,t={},nv(t,"next",v),nv(t,"return",c),RS&&nv(t,RS,l),t;function v(){return f+=1,i||f>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*pmr(lmr(s*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return FS(e)}}MS.exports=FS});var jS=u((sKr,CS)=>{"use strict";var ymr=BS();CS.exports=ymr});var VS=u((oKr,GS)=>{"use strict";var hmr={Complex64:"complex64",Complex128:"complex128"};GS.exports=hmr});var HS=u((vKr,US)=>{"use strict";var dmr=si(),wmr=ui(),bmr=[dmr,wmr];US.exports=bmr});var kS=u((fKr,WS)=>{"use strict";var Emr=["complex64","complex128"];WS.exports=Emr});var JS=u((cKr,XS)=>{"use strict";var Nmr=je(),Amr=VS(),Omr=HS(),DS=kS(),Smr=DS.length;function Tmr(r){var e;for(e=0;e<Smr;e++)if(r instanceof Omr[e])return DS[e];return Amr[Nmr(r)]||null}XS.exports=Tmr});var av=u((lKr,zS)=>{"use strict";var Imr=JS();zS.exports=Imr});var $S=u((pKr,YS)=>{"use strict";var Lmr=gr(),_mr=re(),Pmr=qn(),Rmr=gn(),Fmr={float64:Lmr,float32:_mr,complex128:Pmr,complex64:Rmr};YS.exports=Fmr});var ZS=u((gKr,QS)=>{"use strict";var Mmr=$S();function Bmr(r){return Mmr[r]||null}QS.exports=Bmr});var xS=u((mKr,KS)=>{"use strict";var Cmr=ZS();KS.exports=Cmr});var eT=u((qKr,rT)=>{"use strict";function jmr(r,e,t,i){var n,a,s,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,s=(e-r)/a,o=1;o<a;o++)n.push(r+s*o);return i&&n.push(e),n}rT.exports=jmr});var sT=u((yKr,uT)=>{"use strict";var Gmr=si(),Vmr=ui(),tT=Ye(),iT=$e(),nT=Je(),aT=ze();function Umr(r,e,t,i,n,a){var s,o,f,v,c,l,p,m,y,q,g,h,N;if(n===0)return[];if(o=0,r==="float64"?(v=e,l=0):r==="complex64"?(o+=1,v=nT(e),l=aT(e)):(v=tT(e),l=iT(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=nT(i),p=aT(i)):(c=tT(i),p=iT(i)),o===2?s=Gmr:s=Vmr,n===1)return a?[new s(c,p)]:[new s(v,l)];for(f=[new s(v,l)],a?h=n-1:h=n,q=(c-v)/h,g=(p-l)/h,N=1;N<h;N++)m=v+q*N,y=l+g*N,f.push(new s(m,y));return a&&f.push(new s(c,p)),f}uT.exports=Umr});var uv=u((hKr,oT)=>{"use strict";function Hmr(r,e,t,i,n){var a,s,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,s=(t-e)/a,o=1;o<a;o++)r[o]=e+s*o;return n&&(r[a]=t),r}oT.exports=Hmr});var sv=u((dKr,pT)=>{"use strict";var vT=Ye(),fT=$e(),cT=Je(),lT=ze();function Wmr(r,e,t,i,n,a,s){var o,f,v,c,l,p,m,y,q;if(a===0)return r;if(e==="float64"?(o=t,v=0):e==="complex64"?(o=cT(t),v=lT(t)):(o=vT(t),v=fT(t)),i==="float64"?(f=n,c=0):i==="complex64"?(f=cT(n),c=lT(n)):(f=vT(n),c=fT(n)),a===1)return s?(r[0]=f,r[1]=c):(r[0]=o,r[1]=v),r;for(r[0]=o,r[1]=v,s?m=a-1:m=a,l=(f-o)/m,p=(c-v)/m,q=2,y=1;y<m;y++)r[q]=o+l*y,r[q+1]=v+p*y,q+=2;return s&&(r[q]=f,r[q+1]=c),r}pT.exports=Wmr});var vv=u((wKr,mT)=>{"use strict";var kmr=T(),gT=O(),Dmr=K().isPrimitive,Xmr=or().isPrimitive,ov=d();function Jmr(r,e){return kmr(e)?gT(e,"dtype")&&(r.dtype=e.dtype,!Dmr(r.dtype))?new TypeError(ov("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):gT(e,"endpoint")&&(r.endpoint=e.endpoint,!Xmr(r.endpoint))?new TypeError(ov("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(ov("invalid argument. Options argument must be an object. Value: `%s`.",e))}mT.exports=Jmr});var fv=u((bKr,zmr)=>{zmr.exports={endpoint:!0}});var ET=u((EKr,bT)=>{"use strict";var qT=Hr(),yT=j().isPrimitive,Ymr=Ge().isPrimitive,hT=E(),dT=av(),$mr=xS(),Qmr=oi(),Zmr=vi(),qi=d(),Kmr=eT(),xmr=sT(),rqr=uv(),wT=sv(),eqr=vv(),tqr=fv();function iqr(r,e,t){var i,n,a,s,o,f,v;if(typeof r=="object"){if(o=dT(r),o===null){if(!qT(r))throw new TypeError(qi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}v=!0}else{if(!yT(r)||hT(r))throw new TypeError(qi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(f=dT(e),f===null){if(!qT(e))throw new TypeError(qi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="complex128"}v=!0}else{if(!yT(e)||hT(e))throw new TypeError(qi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="float64"}if(!Ymr(t))throw new TypeError(qi("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:tqr.endpoint},o===f?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=eqr(i,arguments[3]),a))throw a;if(i.dtype==="generic")return v?xmr(o,r,f,e,t,i.endpoint):Kmr(r,e,t,i.endpoint);if(n=$mr(i.dtype),n===null)throw new TypeError(qi('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(s=new n(t),i.dtype==="complex64")return wT(Qmr(s,0),o,r,f,e,t,i.endpoint),s;if(i.dtype==="complex128")return wT(Zmr(s,0),o,r,f,e,t,i.endpoint),s;if(v)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return rqr(s,r,e,t,i.endpoint)}bT.exports=iqr});var AT=u((NKr,NT)=>{"use strict";var nqr=H1(),aqr=Ca(),uqr=k1(),sqr=ja(),oqr=W1(),vqr=Ja();function fqr(r){var e=vqr(r);return nqr(r)?{accessorProtocol:!0,accessors:[sqr(e),oqr(e)]}:{accessorProtocol:!1,accessors:[aqr(e),uqr(e)]}}NT.exports=fqr});var ST=u((AKr,OT)=>{"use strict";var cqr=AT();OT.exports=cqr});var IT=u((OKr,TT)=>{"use strict";var lqr=ST();function pqr(r){var e=lqr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}TT.exports=pqr});var Za=u((SKr,LT)=>{"use strict";var gqr=IT();LT.exports=gqr});var BT=u((TKr,MT)=>{"use strict";var mqr=si(),qqr=ui(),_T=Ye(),PT=$e(),RT=Je(),FT=ze();function yqr(r,e,t,i,n,a,s){var o,f,v,c,l,p,m,y,q,g,h,N,A,G;if(a===0)return r;if(f=0,e==="float64"?(v=t,l=0):e==="complex64"?(f+=1,v=RT(t),l=FT(t)):(v=_T(t),l=PT(t)),i==="float64"?(c=n,p=0):i==="complex64"?(f+=1,c=RT(n),p=FT(n)):(c=_T(n),p=PT(n)),f===2?o=mqr:o=qqr,y=r.data,m=r.accessors[1],a===1)return s?m(y,0,new o(c,p)):m(y,0,new o(v,l)),r;for(m(y,0,new o(v,l)),s?A=a-1:A=a,h=(c-v)/A,N=(p-l)/A,G=1;G<A;G++)q=v+h*G,g=l+N*G,m(y,G,new o(q,g));return s&&m(y,A,new o(c,p)),r}MT.exports=yqr});var jT=u((IKr,CT)=>{"use strict";function hqr(r,e,t,i,n){var a,s,o,f,v;if(i===0)return r;if(a=r.data,s=r.accessors[1],i===1)return n?s(a,0,t):s(a,0,e),r;for(s(a,0,e),n?o=i-1:o=i,f=(t-e)/o,v=1;v<o;v++)s(a,v,e+f*v);return n&&s(a,o,t),r}CT.exports=hqr});var XT=u((LKr,DT)=>{"use strict";var GT=Hr(),VT=j().isPrimitive,dqr=Gr(),hn=d(),UT=E(),HT=av(),wqr=Ja(),bqr=oi(),Eqr=vi(),WT=Za(),Nqr=BT(),Aqr=jT(),kT=sv(),Oqr=uv(),Sqr=vv(),Tqr=fv();function Iqr(r,e,t){var i,n,a,s,o,f,v;if(typeof r=="object"){if(a=HT(r),a===null){if(!GT(r))throw new TypeError(hn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!VT(r)||UT(r))throw new TypeError(hn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(s=HT(e),s===null){if(!GT(e))throw new TypeError(hn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));s="complex128"}o=!0}else{if(!VT(e)||UT(e))throw new TypeError(hn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));s="float64"}if(!dqr(t))throw new TypeError(hn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:Tqr.endpoint},arguments.length>3&&(n=Sqr(i,arguments[3]),n))throw n;if(f=wqr(t),f===null&&(f="generic"),f==="complex64")return kT(bqr(t,0),a,r,s,e,t.length,i.endpoint),t;if(f==="complex128")return kT(Eqr(t,0),a,r,s,e,t.length,i.endpoint),t;if(o){if(f==="generic")return v=WT(t),Nqr(v,a,r,s,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return v=WT(t),v.accessorProtocol?(Aqr(v,r,e,t.length,i.endpoint),t):(Oqr(t,r,e,t.length,i.endpoint),t)}DT.exports=Iqr});var YT=u((_Kr,zT)=>{"use strict";var Lqr=b(),JT=ET(),_qr=XT();Lqr(JT,"assign",_qr);zT.exports=JT});var QT=u((PKr,$T)=>{"use strict";var Pqr=E(),Rqr=De();function Fqr(r,e,t){var i,n,a,s;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],s=1;s<r;s++){if(n+=t,a=e[n],Pqr(a))return a;(a>i||a===i&&Rqr(a))&&(i=a)}return i}$T.exports=Fqr});var KT=u((RKr,ZT)=>{"use strict";var Mqr=E(),Bqr=De();function Cqr(r,e,t,i){var n,a,s,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,s=e[a],Mqr(s))return s;(s>n||s===n&&Bqr(s))&&(n=s)}return n}ZT.exports=Cqr});var eI=u((FKr,rI)=>{"use strict";var jqr=b(),xT=QT(),Gqr=KT();jqr(xT,"ndarray",Gqr);rI.exports=xT});var iI=u((MKr,tI)=>{"use strict";var Vqr=eI();tI.exports=Vqr});var uI=u((BKr,aI)=>{"use strict";var nI=E(),Uqr=De();function Hqr(r,e,t,i,n){var a,s,o,f,v;if(r<=0)return NaN;for(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,v=0;v<r&&i[o]!==0;v++)s+=t,o+=n;if(v===r)return NaN;if(a=e[s],nI(a))return a;for(v+=1,v;v<r;v++)if(s+=t,o+=n,!i[o]){if(f=e[s],nI(f))return f;(f>a||f===a&&Uqr(f))&&(a=f)}return a}aI.exports=Hqr});var vI=u((CKr,oI)=>{"use strict";var sI=E(),Wqr=De();function kqr(r,e,t,i,n,a,s){var o,f,v,c,l;if(r<=0)return NaN;for(f=i,v=s,l=0;l<r&&n[v]!==0;l++)f+=t,v+=a;if(l===r)return NaN;if(o=e[f],sI(o))return o;for(l+=1,l;l<r;l++)if(f+=t,v+=a,!n[v]){if(c=e[f],sI(c))return c;(c>o||c===o&&Wqr(c))&&(o=c)}return o}oI.exports=kqr});var lI=u((jKr,cI)=>{"use strict";var Dqr=b(),fI=uI(),Xqr=vI();Dqr(fI,"ndarray",Xqr);cI.exports=fI});var mI=u((GKr,gI)=>{"use strict";var pI=d();function Jqr(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(pI('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(pI('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}gI.exports=Jqr});var yI=u((VKr,qI)=>{"use strict";var zqr=mI();qI.exports=zqr});var dI=u((UKr,hI)=>{"use strict";var Yqr=j().isPrimitive,$qr=yI(),Qqr=d();function Zqr(r,e,t,i,n,a){var s,o;if(!(Yqr(r)&&$qr(r,e,t,i,n)))throw i==="closed"?s="[":s="(",n==="closed"?o="]":o=")",new TypeError(Qqr("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,s,e,t,o,String(r)))}hI.exports=Zqr});var bI=u((HKr,wI)=>{"use strict";var Kqr=or().isPrimitive,xqr=d();function ryr(r,e){if(!Kqr(r))throw new TypeError(xqr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}wI.exports=ryr});var NI=u((WKr,EI)=>{"use strict";function eyr(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}EI.exports=eyr});var OI=u((kKr,AI)=>{"use strict";var tyr=d(),iyr=NI();function nyr(r,e,t){if(!iyr(r,e))throw new TypeError(tyr("invalid argument. %s must be broadcast compatible.",t))}AI.exports=nyr});var TI=u((DKr,SI)=>{"use strict";function ayr(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}SI.exports=ayr});var LI=u((XKr,II)=>{"use strict";var uyr=d(),syr=TI();function oyr(r,e,t,i){if(!syr(r,e))throw new TypeError(uyr("invalid argument. %s must be broadcast compatible with %s.",t,i))}II.exports=oyr});var cv=u((JKr,_I)=>{"use strict";var vyr=d();function fyr(r,e){if(r===void 0)throw new Error(vyr("invalid invocation. Must provide %s.",e))}_I.exports=fyr});var RI=u((zKr,PI)=>{"use strict";var cyr=d();function lyr(r,e,t,i){if(!(r>e))throw new TypeError(cyr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}PI.exports=lyr});var MI=u((YKr,FI)=>{"use strict";var pyr=d();function gyr(r,e,t,i){if(!(r>=e))throw new TypeError(pyr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}FI.exports=gyr});var CI=u(($Kr,BI)=>{"use strict";var myr=jr().isPrimitive,qyr=d();function yyr(r,e){if(!myr(r))throw new TypeError(qyr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}BI.exports=yyr});var GI=u((QKr,jI)=>{"use strict";var hyr=d();function dyr(r,e,t,i){if(!(r<e))throw new TypeError(hyr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}jI.exports=dyr});var UI=u((ZKr,VI)=>{"use strict";var wyr=d();function byr(r,e,t,i){if(!(r<=e))throw new TypeError(wyr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}VI.exports=byr});var WI=u((KKr,HI)=>{"use strict";var Eyr=Ge().isPrimitive,Nyr=d();function Ayr(r,e){if(!Eyr(r))throw new TypeError(Nyr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}HI.exports=Ayr});var DI=u((xKr,kI)=>{"use strict";var Oyr=iv().isPrimitive,Syr=d();function Tyr(r,e){if(!Oyr(r))throw new TypeError(Syr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}kI.exports=Tyr});var JI=u((rxr,XI)=>{"use strict";var Iyr=j().isPrimitive,Lyr=d();function _yr(r,e){if(!Iyr(r))throw new TypeError(Lyr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}XI.exports=_yr});var YI=u((exr,zI)=>{"use strict";var Pyr=d();function Ryr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(Pyr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}zI.exports=Ryr});var lv=u((txr,$I)=>{"use strict";var Fyr=ue().isPrimitive,Myr=d();function Byr(r,e){if(!Fyr(r))throw new TypeError(Myr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}$I.exports=Byr});var ZI=u((ixr,QI)=>{"use strict";var Cyr=W().isPrimitive,jyr=d();function Gyr(r,e){if(!Cyr(r))throw new TypeError(jyr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}QI.exports=Gyr});var pv=u((nxr,KI)=>{"use strict";var Vyr=j().isPrimitive;function Uyr(r){return Vyr(r)&&r>=0&&r<=1}KI.exports=Uyr});var gv=u((axr,xI)=>{"use strict";var Hyr=j().isObject;function Wyr(r){return Hyr(r)&&r.valueOf()>=0&&r.valueOf()<=1}xI.exports=Wyr});var eL=u((uxr,rL)=>{"use strict";var kyr=pv(),Dyr=gv();function Xyr(r){return kyr(r)||Dyr(r)}rL.exports=Xyr});var dn=u((sxr,iL)=>{"use strict";var tL=b(),mv=eL(),Jyr=pv(),zyr=gv();tL(mv,"isPrimitive",Jyr);tL(mv,"isObject",zyr);iL.exports=mv});var aL=u((oxr,nL)=>{"use strict";var Yyr=dn().isPrimitive,$yr=d();function Qyr(r,e){if(!Yyr(r))throw new TypeError($yr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}nL.exports=Qyr});var sL=u((vxr,uL)=>{"use strict";var Zyr=pr(),Kyr=d();function xyr(r,e){if(!Zyr(r))throw new TypeError(Kyr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}uL.exports=xyr});var vL=u((fxr,oL)=>{"use strict";function rhr(r){return r.length===1||r[0].length===1}oL.exports=rhr});var cL=u((cxr,fL)=>{"use strict";var ehr=pr(),thr=vL();function ihr(r){return ehr(r)&&thr(r)}fL.exports=ihr});var pL=u((lxr,lL)=>{"use strict";var nhr=d(),ahr=cL();function uhr(r,e){if(!ahr(r))throw new TypeError(nhr("invalid argument. %s must consist of only a single row or a single column.",e))}lL.exports=uhr});var mL=u((pxr,gL)=>{"use strict";function shr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}gL.exports=shr});var yL=u((gxr,qL)=>{"use strict";var ohr=d(),vhr=mL();function fhr(r,e,t){if(!vhr(r,e))throw new TypeError(ohr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}qL.exports=fhr});var dL=u((mxr,hL)=>{"use strict";var chr=K().isPrimitive,lhr=d();function phr(r,e){if(!chr(r))throw new TypeError(lhr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}hL.exports=phr});var bL=u((qxr,wL)=>{"use strict";var ghr=d();function mhr(r){throw new Error(ghr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}wL.exports=mhr});var AL=u((yxr,NL)=>{"use strict";var EL=lv(),qhr=cv();function yhr(r,e,t){EL(r,"Number of rows"),EL(e,"Number of columns"),qhr(t,"a pseudorandom number generator seed")}NL.exports=yhr});var SL=u((hxr,OL)=>{"use strict";var hhr=pr(),dhr=jr().isPrimitive,whr=d(),bhr=Ra();function Ehr(r){if(dhr(r))return r;if(hhr(r))return bhr(r);throw new TypeError(whr("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}OL.exports=Ehr});var IL=u((dxr,TL)=>{"use strict";var z={};z.isBetween=dI();z.isBoolean=bI();z.isBroadcastCompatible=OI();z.isBroadcastCompatibleWith=LI();z.isDefined=cv();z.isGreaterThan=RI();z.isGreaterThanEqual=MI();z.isInteger=CI();z.isLessThan=GI();z.isLessThanEqual=UI();z.isNonNegativeInteger=WI();z.isNonNegativeNumber=DI();z.isNumber=JI();z.isOneOf=YI();z.isPositiveInteger=lv();z.isPositiveNumber=ZI();z.isProbability=aL();z.isRange=sL();z.isRange1d=pL();z.isSameShape=yL();z.isString=dL();z.unrecognizedOptionName=bL();z.verifyCommonPRNGArgs=AL();z.verifyPRNGSeed=SL();TL.exports=z});var _L=u((wxr,LL)=>{"use strict";var qv=4;function Nhr(r,e,t,i,n,a){var s,o,f,v;if(r<=0||e===0)return n;if(i===1&&a===1){if(f=r%qv,f>0)for(v=0;v<f;v++)n[v]+=e*t[v];if(r<qv)return n;for(v=f;v<r;v+=qv)n[v]+=e*t[v],n[v+1]+=e*t[v+1],n[v+2]+=e*t[v+2],n[v+3]+=e*t[v+3];return n}for(i<0?s=(1-r)*i:s=0,a<0?o=(1-r)*a:o=0,v=0;v<r;v++)n[o]+=e*t[s],s+=i,o+=a;return n}LL.exports=Nhr});var RL=u((bxr,PL)=>{"use strict";var wn=4;function Ahr(r,e,t,i,n,a,s,o){var f,v,c,l;if(r<=0||e===0)return a;if(f=n,v=o,i===1&&s===1){if(c=r%wn,c>0)for(l=0;l<c;l++)a[v]+=e*t[f],f+=i,v+=s;if(r<wn)return a;for(l=c;l<r;l+=wn)a[v]+=e*t[f],a[v+1]+=e*t[f+1],a[v+2]+=e*t[f+2],a[v+3]+=e*t[f+3],f+=wn,v+=wn;return a}for(l=0;l<r;l++)a[v]+=e*t[f],f+=i,v+=s;return a}PL.exports=Ahr});var yv=u((Exr,ML)=>{"use strict";var Ohr=b(),FL=_L(),Shr=RL();Ohr(FL,"ndarray",Shr);ML.exports=FL});var CL=u((Nxr,BL)=>{"use strict";var hv={};hv.daxpy=yv().ndarray;hv.saxpy=yv().ndarray;BL.exports=hv});var GL=u((Axr,jL)=>{"use strict";function Thr(r){return r*r}jL.exports=Thr});var UL=u((Oxr,VL)=>{"use strict";var Ihr=GL();VL.exports=Ihr});var WL=u((Sxr,HL)=>{"use strict";function Lhr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}HL.exports=Lhr});var DL=u((Txr,kL)=>{"use strict";function _hr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}kL.exports=_hr});var zL=u((Ixr,JL)=>{"use strict";var Phr=E(),Rhr=V(),XL=Ya(),Fhr=WL(),Mhr=DL(),Bhr=6123233995736766e-32;function Chr(r){var e,t,i,n,a;if(Phr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*Mhr(t),t=Rhr(t+t),a=XL-t,t=t*n-Bhr,a-=t,a+=XL;else{if(i<1e-8)return r;t=i*i,a=t*Fhr(t),a=i*a+i}return e?-a:a}JL.exports=Chr});var Ct=u((Lxr,YL)=>{"use strict";var jhr=zL();YL.exports=jhr});var KL=u((_xr,ZL)=>{"use strict";var Ghr=E(),$L=Ct(),Vhr=V(),QL=Ya(),Uhr=6123233995736766e-32;function Hhr(r){var e;return Ghr(r)?NaN:r<-1||r>1?NaN:r>.5?2*$L(Vhr(.5-.5*r)):(e=QL-$L(r),e+=Uhr,e+=QL,e)}ZL.exports=Hhr});var bn=u((Pxr,xL)=>{"use strict";var Whr=KL();xL.exports=Whr});var i_=u((Rxr,t_)=>{"use strict";var khr=E(),Dhr=ni(),r_=V(),Xhr=Ea(),e_=C(),Jhr=1<<28;function zhr(r){var e;return khr(r)||r<1?NaN:r===1?0:r>=Jhr?e_(r)+Xhr:r>2?e_(2*r-1/(r+r_(r*r-1))):(e=r-1,Dhr(e+r_(2*e+e*e)))}t_.exports=zhr});var a_=u((Fxr,n_)=>{"use strict";var Yhr=i_();n_.exports=Yhr});var s_=u((Mxr,u_)=>{"use strict";var $hr=$a();function Qhr(r){return $hr(1/r)}u_.exports=Qhr});var v_=u((Bxr,o_)=>{"use strict";var Zhr=s_();o_.exports=Zhr});var c_=u((Cxr,f_)=>{"use strict";var Khr=Ct();function xhr(r){return Khr(1+r)}f_.exports=xhr});var p_=u((jxr,l_)=>{"use strict";var rdr=c_();l_.exports=rdr});var m_=u((Gxr,g_)=>{"use strict";var edr=Ct();function tdr(r){return edr(1-r)}g_.exports=tdr});var y_=u((Vxr,q_)=>{"use strict";var idr=m_();q_.exports=idr});var d_=u((Uxr,h_)=>{"use strict";var ndr=Ct();function adr(r){return ndr(1/r)}h_.exports=adr});var b_=u((Hxr,w_)=>{"use strict";var udr=d_();w_.exports=udr});var O_=u((Wxr,A_)=>{"use strict";var sdr=Rr(),odr=E(),vdr=ni(),E_=V(),fdr=Ea(),N_=C(),cdr=1/(1<<28),ldr=1<<28;function pdr(r){var e,t,i;return odr(r)||sdr(r)?r:(r<0&&(r=-r,e=!0),r<cdr?i=r:r>ldr?i=N_(r)+fdr:r>2?i=N_(2*r+1/(E_(r*r+1)+r)):(t=r*r,i=vdr(r+t/(1+E_(1+t)))),e?-i:i)}A_.exports=pdr});var dv=u((kxr,S_)=>{"use strict";var gdr=O_();S_.exports=gdr});var I_=u((Dxr,T_)=>{"use strict";var mdr=dv();function qdr(r){return mdr(1/r)}T_.exports=qdr});var __=u((Xxr,L_)=>{"use strict";var ydr=I_();L_.exports=ydr});var R_=u((Jxr,P_)=>{"use strict";var hdr=bn(),ddr=V();function wdr(r){return 2*hdr(ddr(r))}P_.exports=wdr});var M_=u((zxr,F_)=>{"use strict";var bdr=R_();F_.exports=bdr});var C_=u((Yxr,B_)=>{"use strict";var Edr=Ct(),Ndr=V();function Adr(r){return 2*Edr(Ndr(r))}B_.exports=Adr});var G_=u(($xr,j_)=>{"use strict";var Odr=C_();j_.exports=Odr});var H_=u((Qxr,U_)=>{"use strict";var Sdr=E(),V_=ni(),Tdr=P(),Idr=X(),Ldr=1/(1<<28);function _dr(r){var e,t;return Sdr(r)||r<-1||r>1?NaN:r===1?Tdr:r===-1?Idr:(r<0&&(e=!0,r=-r),r<Ldr?e?-r:r:(r<.5?(t=r+r,t=.5*V_(t+t*r/(1-r))):t=.5*V_((r+r)/(1-r)),e?-t:t))}U_.exports=_dr});var k_=u((Zxr,W_)=>{"use strict";var Pdr=H_();W_.exports=Pdr});var X_=u((Kxr,D_)=>{"use strict";var Rdr=bn();function Fdr(r){return Rdr(1+r)}D_.exports=Fdr});var z_=u((xxr,J_)=>{"use strict";var Mdr=X_();J_.exports=Mdr});var $_=u((rre,Y_)=>{"use strict";var Bdr=bn();function Cdr(r){return Bdr(1-r)}Y_.exports=Cdr});var Z_=u((ere,Q_)=>{"use strict";var jdr=$_();Q_.exports=jdr});var rP=u((tre,x_)=>{"use strict";var K_=-.16666666666666632,Gdr=.00833333333332249,Vdr=-.0001984126982985795,Udr=27557313707070068e-22,Hdr=-25050760253406863e-24,Wdr=158969099521155e-24,kdr=.0416666666666666,Ddr=-.001388888888887411,Xdr=2480158728947673e-20,Jdr=-27557314351390663e-23,zdr=2087572321298175e-24,Ydr=-11359647557788195e-27;function $dr(r,e,t,i,n){var a,s,o,f,v;return v=r*r,f=v*v,s=Gdr+v*(Vdr+v*Udr)+v*f*(Hdr+v*Wdr),o=v*r,e===0?t[n]=r+o*(K_+v*s):t[n]=r-(v*(.5*e-o*s)-e-o*K_),s=v*(kdr+v*(Ddr+v*Xdr)),s+=f*f*(Jdr+v*(zdr+v*Ydr)),a=.5*v,f=1-a,t[n+i]=f+(1-f-a+(v*s-r*e)),t}x_.exports=$dr});var bv=u((ire,tP)=>{"use strict";var Qdr=Yr(),Zdr=Qi(),Kdr=tr(),xdr=xi(),eP=rP(),rwr=1072243195,ewr=1044381696,wv=[0,0];function twr(r,e,t,i){var n,a;if(n=Kdr(r),n&=Qdr,n<=rwr)return n<ewr&&(r|0)===0&&(e[i]=r,e[i+t]=0),eP(r,0,e,t,i);if(n>=Zdr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=xdr(r,wv),eP(wv[0],wv[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}tP.exports=twr});var nP=u((nre,iP)=>{"use strict";var iwr=bv();function nwr(r){return iwr(r,[0,0],1,0)}iP.exports=nwr});var En=u((are,uP)=>{"use strict";var awr=b(),aP=nP(),uwr=bv();awr(aP,"assign",uwr);uP.exports=aP});var oP=u((ure,sP)=>{"use strict";function swr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}sP.exports=swr});var fP=u((sre,vP)=>{"use strict";function owr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}vP.exports=owr});var lP=u((ore,cP)=>{"use strict";function vwr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}cP.exports=vwr});var gP=u((vre,pP)=>{"use strict";function fwr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}pP.exports=fwr});var qP=u((fre,mP)=>{"use strict";var cwr=V(),lwr=En().assign,pwr=P(),gwr=oP(),mwr=fP(),qwr=lP(),ywr=gP(),hwr=.5641895835477563,dwr=2.404825557695773,wwr=5.520078110286311,bwr=616,Ewr=-.0014244423042272315,Nwr=1413,Awr=.0005468602863106496,Nn=[0,0];function Owr(r){var e,t,i,n,a,s;return r<0&&(r=-r),r===pwr?0:r===0?1:r<=4?(a=r*r,n=gwr(a),s=(r+dwr)*(r-bwr/256-Ewr),s*n):r<=8?(a=1-r*r/64,n=mwr(a),s=(r+wwr)*(r-Nwr/256-Awr),s*n):(a=8/r,i=a*a,e=qwr(i),t=ywr(i),s=hwr/cwr(r),lwr(r,Nn,1,0),s*(e*(Nn[1]+Nn[0])-a*t*(Nn[0]-Nn[1])))}mP.exports=Owr});var Ev=u((cre,yP)=>{"use strict";var Swr=qP();yP.exports=Swr});var Ka=u((lre,hP)=>{"use strict";var Twr=1.772453850905516;hP.exports=Twr});var wP=u((pre,dP)=>{"use strict";function Iwr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}dP.exports=Iwr});var EP=u((gre,bP)=>{"use strict";function Lwr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}bP.exports=Lwr});var AP=u((mre,NP)=>{"use strict";function _wr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}NP.exports=_wr});var SP=u((qre,OP)=>{"use strict";function Pwr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}OP.exports=Pwr});var IP=u((yre,TP)=>{"use strict";var Rwr=V(),Fwr=Y(),Mwr=En().assign,Bwr=P(),Cwr=Ka(),jwr=wP(),Gwr=EP(),Vwr=AP(),Uwr=SP(),Hwr=3.8317059702075125,Wwr=7.015586669815619,kwr=981,Dwr=-.0003252797924876844,Xwr=1796,Jwr=-38330184381246464e-21,An=[0,0];function zwr(r){var e,t,i,n,a,s,o,f;return f=Fwr(r),r===0||f===Bwr?0:(f<=4?(s=r*r,a=jwr(s),o=f*(f+Hwr)*(f-kwr/256-Dwr),e=o*a):f<=8?(s=r*r,a=Gwr(s),o=f*(f+Wwr)*(f-Xwr/256-Jwr),e=o*a):(s=8/f,n=s*s,t=Vwr(n),i=Uwr(n),o=1/(Rwr(f)*Cwr),Mwr(f,An,1,0),e=o*(t*(An[0]-An[1])+s*i*(An[0]+An[1]))),r<0&&(e*=-1),e)}TP.exports=zwr});var Nv=u((hre,LP)=>{"use strict";var Ywr=IP();LP.exports=Ywr});var PP=u((dre,_P)=>{"use strict";function $wr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}_P.exports=$wr});var FP=u((wre,RP)=>{"use strict";function Qwr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}RP.exports=Qwr});var BP=u((bre,MP)=>{"use strict";function Zwr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}MP.exports=Zwr});var jP=u((Ere,CP)=>{"use strict";function Kwr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}CP.exports=Kwr});var VP=u((Nre,GP)=>{"use strict";function xwr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}GP.exports=xwr});var DP=u((Are,kP)=>{"use strict";var Av=C(),rbr=V(),ebr=Ir(),tbr=Ka(),ibr=X(),nbr=P(),abr=En().assign,Ov=Ev(),ubr=PP(),sbr=FP(),obr=BP(),vbr=jP(),fbr=VP(),cbr=1/tbr,Sv=2/ebr,UP=.8935769662791675,HP=3.957678419314858,WP=7.086051060301773,lbr=228,pbr=.0029519662791675214,gbr=1013,mbr=.0006471693148578684,qbr=1814,ybr=.00011356030177269763,On=[0,0];function hbr(r){var e,t,i,n,a,s,o;return r<0?NaN:r===0?ibr:r===nbr?0:r<=3?(a=r*r,s=Av(r/UP)*Ov(r)*Sv,n=ubr(a),o=(r+UP)*(r-lbr/256-pbr),s+o*n):r<=5.5?(a=r*r,s=Av(r/HP)*Ov(r)*Sv,n=sbr(a),o=(r+HP)*(r-gbr/256-mbr),s+o*n):r<=8?(a=r*r,s=Av(r/WP)*Ov(r)*Sv,n=obr(a),o=(r+WP)*(r-qbr/256-ybr),s+o*n):(a=8/r,i=a*a,e=vbr(i),t=fbr(i),o=cbr/rbr(r),abr(r,On,1,0),o*(e*(On[0]-On[1])+a*t*(On[1]+On[0])))}kP.exports=hbr});var JP=u((Ore,XP)=>{"use strict";var dbr=DP();XP.exports=dbr});var YP=u((Sre,zP)=>{"use strict";function wbr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}zP.exports=wbr});var QP=u((Tre,$P)=>{"use strict";function bbr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}$P.exports=bbr});var KP=u((Ire,ZP)=>{"use strict";function Ebr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}ZP.exports=Ebr});var rR=u((Lre,xP)=>{"use strict";function Nbr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}xP.exports=Nbr});var sR=u((_re,uR)=>{"use strict";var eR=C(),Abr=V(),Obr=Ir(),Sbr=Ka(),Tbr=X(),Ibr=P(),Lbr=En().assign,tR=Nv(),_br=YP(),Pbr=QP(),Rbr=KP(),Fbr=rR(),Mbr=1/Sbr,iR=2/Obr,nR=2.197141326031017,aR=5.429681040794135,Bbr=562,Cbr=.001828826031017035,jbr=1390,Gbr=-6459205864867228e-21,Sn=[0,0];function Vbr(r){var e,t,i,n,a,s,o;return r<0?NaN:r===0?Tbr:r===Ibr?0:r<=4?(a=r*r,s=eR(r/nR)*tR(r)*iR,n=_br(a),o=(r+nR)*(r-Bbr/256-Cbr)/r,s+o*n):r<=8?(a=r*r,s=eR(r/aR)*tR(r)*iR,n=Pbr(a),o=(r+aR)*(r-jbr/256-Gbr)/r,s+o*n):(a=8/r,i=a*a,e=Rbr(i),t=Fbr(i),o=Mbr/Abr(r),Lbr(r,Sn,1,0),o*(a*t*(Sn[0]-Sn[1])-e*(Sn[0]+Sn[1])))}uR.exports=Vbr});var vR=u((Pre,oR)=>{"use strict";var Ubr=sR();oR.exports=Ubr});var lR=u((Rre,cR)=>{"use strict";var Hbr=E(),Wbr=Rr(),kbr=Y(),fR=Tt(),Dbr=It(),Xbr=x(),Tv=Ir(),Jbr=vn(),zbr=Jbr+1;function Ybr(r){var e,t,i,n;return Hbr(r)?NaN:Wbr(r)?NaN:(e=kbr(r),e>zbr?1:(t=Xbr(e),i=e-t,i===.5?0:(i<.25?n=fR(Tv*i):i<.75?(i=.5-i,n=Dbr(Tv*i)):(i=1-i,n=-fR(Tv*i)),t%2===1?-n:n)))}cR.exports=Ybr});var gR=u((Fre,pR)=>{"use strict";var $br=lR();pR.exports=$br});var qR=u((Mre,mR)=>{"use strict";var Qbr=1.618033988749895;mR.exports=Qbr});var hR=u((Bre,yR)=>{"use strict";var Zbr=E(),Kbr=gR(),xbr=$(),rEr=qR(),eEr=P(),tEr=X(),iEr=2.23606797749979;function nEr(r){var e,t;return Zbr(r)||r===eEr||r===tEr?NaN:(e=xbr(rEr,r),t=Kbr(r)/e,(e-t)/iEr)}yR.exports=nEr});var wR=u((Cre,dR)=>{"use strict";var aEr=hR();dR.exports=aEr});var ER=u((jre,bR)=>{"use strict";function uEr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}bR.exports=uEr});var SR=u((Gre,OR)=>{"use strict";var sEr=Bo(),oEr=_o(),NR=Yr(),Lv=tr(),vEr=ee(),fEr=Rr(),AR=xt(),cEr=ri(),lEr=E(),pEr=ER(),gEr=4294967295>>>0,mEr=3221225472>>>0,qEr=0x40000000000000,Iv=2147483648>>>0,yEr=1>>>0,hEr=715094163>>>0,dEr=696219795>>>0,wEr=Lv(sEr),jt=[0>>>0,0>>>0];function bEr(r){var e,t,i,n,a,s,o;return r===0||lEr(r)||fEr(r)?r:(t=Lv(r)>>>0,e=(t&oEr)>>>0,t&=NR,t<wEr?(s=qEr*r,i=(Lv(s)&NR)>>>0,i=(i/3>>>0)+dEr>>>0,s=AR(e|i,0)):(s=0,i=(t/3>>>0)+hEr>>>0,s=vEr(s,e|i)),n=s*s*(s/r),s*=pEr(n),cEr.assign(s,jt,1,0),jt[1]&Iv?(jt[0]+=yEr,jt[1]&=~Iv):jt[1]|=Iv,s=AR(jt[0]&gEr,jt[1]&mEr),a=s*s,n=r/a,o=s+s,n=(n-s)/(o+n),s+=s*n,s)}OR.exports=bEr});var IR=u((Vre,TR)=>{"use strict";var EEr=SR();TR.exports=EEr});var _R=u((Ure,LR)=>{"use strict";function NEr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}LR.exports=NEr});var RR=u((Hre,PR)=>{"use strict";function AEr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}PR.exports=AEr});var BR=u((Wre,MR)=>{"use strict";var OEr=tr(),SEr=_R(),TEr=RR(),FR=1048575,IEr=.3333333333333333;function LEr(r){var e,t,i,n,a,s,o,f,v,c,l;return n=OEr(r),a=r-1,(FR&2+n)<3?a===0?0:a*a*(IEr*a-.5):(s=a/(2+a),o=s*s,n&=FR,c=n-398458|0,v=o*o,l=440401-n|0,t=v*SEr(v),i=o*TEr(v),c|=l,f=i+t,c>0?(e=.5*a*a,s*(e+f)-e):s*(f-a))}MR.exports=LEr});var VR=u((kre,GR)=>{"use strict";var CR=tr(),_Er=ee(),PEr=ne(),REr=E(),FEr=zr(),MEr=X(),BEr=BR(),CEr=0x40000000000000,jR=.4342944818781689,jEr=25082946711645275e-27,GEr=.30102999566361177,VEr=3694239077158931e-28,UEr=1048575,HEr=2146435072,WEr=1048576,kEr=1072693248;function DEr(r){var e,t,i,n,a,s,o,f;return REr(r)||r<0?NaN:r===0?MEr:(t=CR(r),s=0,t<WEr&&(s-=54,r*=CEr,t=CR(r)),t>=HEr?r+r:(s+=(t>>20)-FEr|0,t&=UEr,a=t+614244&1048576|0,r=_Er(r,t|a^kEr),s+=a>>20|0,o=s,n=BEr(r),r-=1,e=PEr(r,0),i=r-e,f=o*VEr+(r+n)*jEr,f+=(i+n)*jR+e*jR,f+o*GEr))}GR.exports=DEr});var HR=u((Dre,UR)=>{"use strict";var XEr=VR();UR.exports=XEr});var kR=u((Xre,WR)=>{"use strict";var JEr=E(),zEr=Rr(),YEr=$(),$Er=x(),QEr=$i(),ZEr=HR(),KEr=R1(),xEr=F1(),rNr=P();function eNr(r){var e,t;return JEr(r)||zEr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=ZEr(r),e===-1?t=$Er(t):t=QEr(t),t<=xEr?e*0:t>KEr?rNr:e*YEr(10,t))}WR.exports=eNr});var XR=u((Jre,DR)=>{"use strict";var tNr=kR();DR.exports=tNr});var zR=u((zre,JR)=>{"use strict";function iNr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}JR.exports=iNr});var $R=u((Yre,YR)=>{"use strict";function nNr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}YR.exports=nNr});var KR=u(($re,ZR)=>{"use strict";var aNr=tr(),uNr=zR(),sNr=$R(),QR=1048575,oNr=.3333333333333333;function vNr(r){var e,t,i,n,a,s,o,f,v,c,l;return n=aNr(r),a=r-1,(QR&2+n)<3?a===0?0:a*a*(oNr*a-.5):(s=a/(2+a),o=s*s,n&=QR,c=n-398458|0,v=o*o,l=440401-n|0,t=v*uNr(v),i=o*sNr(v),c|=l,f=i+t,c>0?(e=.5*a*a,s*(e+f)-e):s*(f-a))}ZR.exports=vNr});var eF=u((Qre,rF)=>{"use strict";var fNr=tr(),cNr=ee(),lNr=ne(),pNr=ri(),gNr=E(),mNr=Yr(),qNr=na(),yNr=zr(),hNr=X(),dNr=KR(),wNr=0x40000000000000,xR=1.4426950407214463,bNr=16751713164886512e-26,ENr=2146435072,NNr=1048576,ANr=1072693248,_v=[0,0];function ONr(r){var e,t,i,n,a,s,o;if(gNr(r)||r<0)return NaN;if(pNr.assign(r,_v,1,0),i=_v[0],n=_v[1],o=0,i<NNr){if((i&mNr|n)===0)return hNr;o-=54,r*=wNr,i=fNr(r)}return i>=ENr?r+r:(o+=(i>>20)-yNr|0,i&=qNr,s=i+614244&1048576|0,r=cNr(r,i|s^ANr),o+=s>>20|0,a=dNr(r),r-=1,e=lNr(r,0),t=r-e,(r+a)*bNr+(t+a)*xR+e*xR+o)}rF.exports=ONr});var iF=u((Zre,tF)=>{"use strict";var SNr=eF();tF.exports=SNr});var aF=u((Kre,nF)=>{"use strict";var TNr=E(),INr=Rr(),LNr=$(),_Nr=x(),PNr=$i(),RNr=iF(),FNr=Io(),MNr=Lo(),BNr=P();function CNr(r){var e,t;return TNr(r)||INr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=RNr(r),t===MNr)?r:(e===-1?t=_Nr(t):t=PNr(t),t>FNr?BNr:e*LNr(2,t))}nF.exports=CNr});var sF=u((xre,uF)=>{"use strict";var jNr=aF();uF.exports=jNr});var Pv=u((ree,oF)=>{"use strict";var GNr=.9189385332046728;oF.exports=GNr});var vF=u((eee,VNr)=>{VNr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var fF=u((tee,UNr)=>{UNr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var cF=u((iee,HNr)=>{HNr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var pF=u((nee,lF)=>{"use strict";function WNr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}lF.exports=WNr});var mF=u((aee,gF)=>{"use strict";function kNr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}gF.exports=kNr});var yF=u((uee,qF)=>{"use strict";function DNr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}qF.exports=DNr});var dF=u((see,hF)=>{"use strict";function XNr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}hF.exports=XNr});var bF=u((oee,wF)=>{"use strict";function JNr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}wF.exports=JNr});var NF=u((vee,EF)=>{"use strict";function zNr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}EF.exports=zNr});var IF=u((fee,TF)=>{"use strict";var YNr=E(),$Nr=Tr(),QNr=Y(),xa=fr(),ZNr=x(),KNr=ti(),xNr=nn(),AF=tn(),OF=$(),rAr=C(),eAr=P(),tAr=X(),SF=ke(),iAr=r1(),nAr=Pv(),aAr=vF(),uAr=fF(),sAr=cF(),oAr=pF(),vAr=mF(),fAr=yF(),cAr=dF(),lAr=bF(),pAr=NF(),gAr=129,mAr=170,qAr=709,yAr=1.2433929443359375,hAr=.6986598968505859;function Rv(r){var e,t,i,n,a,s;if(YNr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if($Nr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(s=(i+1)/2|0,s<=gAr)return-sAr[s]/(i+1)}else return(n&1)===0?uAr[n/2]:aAr[(n-3)/2];return QNr(r)<iAr?-.5-nAr*r:(t=1-r,r<0?ZNr(r/2)===r/2?0:(e=r,r=t,t=e,r>mAr?(e=AF(.5*t)*2*Rv(r),a=xNr(r),a-=r*rAr(SF),a>qAr?e<0?tAr:eAr:e*xa(a)):AF(.5*t)*2*OF(SF,-r)*KNr(r)*Rv(r)):r<1?(e=oAr(t),e-=yAr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+vAr(t)):r<=4?(e=hAr+1/-t,e+fAr(r-2)):r<=7?(e=cAr(r-4),1+xa(e)):r<15?(e=lAr(r-7),1+xa(e)):r<36?(e=pAr(r-15),1+xa(e)):1+OF(2,-r))}TF.exports=Rv});var _F=u((cee,LF)=>{"use strict";var dAr=IF();LF.exports=dAr});var RF=u((lee,PF)=>{"use strict";var H={};H.abs=Y();H.abs2=UL();H.acos=bn();H.acosh=a_();H.acot=v_();H.acovercos=p_();H.acoversin=y_();H.acsc=b_();H.acsch=__();H.ahavercos=M_();H.ahaversin=G_();H.asin=Ct();H.asinh=dv();H.atan=$a();H.atanh=k_();H.avercos=z_();H.aversin=Z_();H.besselj0=Ev();H.besselj1=Nv();H.bessely0=JP();H.bessely1=vR();H.binet=wR();H.cbrt=IR();H.ceil=$i();H.ceil10=XR();H.ceil2=sF();H.cos=Tt();H.sin=It();H.sqrt=V();H.zeta=_F();PF.exports=H});var BF=u((pee,MF)=>{"use strict";var FF=E(),wAr=C(),bAr=ke(),EAr=l1();function NAr(r,e){return FF(r)||FF(e)||e<=0?NaN:.5*wAr(bAr*EAr*e*e)}MF.exports=NAr});var jF=u((gee,CF)=>{"use strict";var AAr=BF();CF.exports=AAr});var UF=u((mee,VF)=>{"use strict";var OAr=fr(),GF=$(),SAr=V(),TAr=ke(),IAr=P(),Fv=E();function LAr(r,e,t){var i,n,a;return Fv(r)||Fv(e)||Fv(t)||t<0?NaN:t===0?r===e?IAr:0:(i=GF(t,2),n=1/SAr(i*TAr),a=-1/(2*i),n*OAr(a*GF(r-e,2)))}VF.exports=LAr});var kF=u((qee,WF)=>{"use strict";var _Ar=P(),HF=E();function PAr(r,e){return HF(r)||HF(e)?NaN:r===e?_Ar:0}WF.exports=PAr});var JF=u((yee,XF)=>{"use strict";var RAr=L(),FAr=P(),DF=E();function MAr(r){if(DF(r))return RAr(NaN);return e;function e(t){return DF(t)?NaN:t===r?FAr:0}}XF.exports=MAr});var $F=u((hee,YF)=>{"use strict";var BAr=b(),zF=kF(),CAr=JF();BAr(zF,"factory",CAr);YF.exports=zF});var KF=u((dee,ZF)=>{"use strict";var jAr=L(),GAr=$F().factory,Mv=E(),VAr=V(),UAr=fr(),QF=$(),HAr=ke();function WAr(r,e){var t,i,n;if(Mv(r)||Mv(e)||e<0)return jAr(NaN);if(e===0)return GAr(r);return t=QF(e,2),i=1/VAr(t*HAr),n=-1/(2*t),a;function a(s){return Mv(s)?NaN:i*UAr(n*QF(s-r,2))}}ZF.exports=WAr});var eM=u((wee,rM)=>{"use strict";var kAr=b(),xF=UF(),DAr=KF();kAr(xF,"factory",DAr);rM.exports=xF});var iM=u((bee,tM)=>{"use strict";var r0={};r0.normal={};r0.normal.entropy=jF();r0.normal.pdf=eM();tM.exports=r0});var aM=u((Eee,nM)=>{"use strict";function XAr(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}nM.exports=XAr});var e0=u((Nee,uM)=>{"use strict";var JAr=aM();uM.exports=JAr});var oM=u((Aee,sM)=>{"use strict";function zAr(r){return r.toLowerCase()}sM.exports=zAr});var yi=u((Oee,vM)=>{"use strict";var YAr=oM();vM.exports=YAr});var cM=u((See,fM)=>{"use strict";function $Ar(r,e,t){return r.replace(e,t)}fM.exports=$Ar});var Gt=u((Tee,lM)=>{"use strict";var QAr=cM();lM.exports=QAr});var gM=u((Iee,pM)=>{"use strict";var ZAr=typeof String.prototype.trim<"u";pM.exports=ZAr});var Bv=u((Lee,mM)=>{"use strict";var KAr=String.prototype.trim;mM.exports=KAr});var dM=u((_ee,hM)=>{"use strict";var qM=Bv(),xAr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,yM="\u180E";function rOr(){return qM.call(xAr)===""&&qM.call(yM)===yM}hM.exports=rOr});var bM=u((Pee,wM)=>{"use strict";var eOr=Gt(),tOr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function iOr(r){return eOr(r,tOr,"$1")}wM.exports=iOr});var NM=u((Ree,EM)=>{"use strict";var nOr=Bv();function aOr(r){return nOr.call(r)}EM.exports=aOr});var hi=u((Fee,AM)=>{"use strict";var uOr=gM(),sOr=dM(),oOr=bM(),vOr=NM(),Cv;uOr&&sOr()?Cv=vOr:Cv=oOr;AM.exports=Cv});var SM=u((Mee,OM)=>{"use strict";var fOr=e0(),cOr=yi(),t0=Gt(),lOr=hi(),pOr=/\s+/g,gOr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,mOr=/(?:\s|^)([^\s]+)(?=\s|$)/g,qOr=/([a-z0-9])([A-Z])/g;function yOr(r,e,t){return e=cOr(e),t===0?e:fOr(e)}function hOr(r){return r=t0(r,gOr," "),r=t0(r,pOr," "),r=t0(r,qOr,"$1 $2"),r=lOr(r),t0(r,mOr,yOr)}OM.exports=hOr});var IM=u((Bee,TM)=>{"use strict";var dOr=SM();TM.exports=dOr});var _M=u((Cee,LM)=>{"use strict";var wOr=K().isPrimitive,bOr=d(),EOr=IM();function NOr(r){if(!wOr(r))throw new TypeError(bOr("invalid argument. First argument must be a string. Value: `%s`.",r));return EOr(r)}LM.exports=NOr});var RM=u((jee,PM)=>{"use strict";var AOr=_M();PM.exports=AOr});var MM=u((Gee,FM)=>{"use strict";var OOr=K().isPrimitive,SOr=d(),TOr=e0();function IOr(r){if(!OOr(r))throw new TypeError(SOr("invalid argument. First argument must be a string. Value: `%s`.",r));return TOr(r)}FM.exports=IOr});var CM=u((Vee,BM)=>{"use strict";var LOr=MM();BM.exports=LOr});var GM=u((Uee,jM)=>{"use strict";function _Or(r){return r.toUpperCase()}jM.exports=_Or});var UM=u((Hee,VM)=>{"use strict";var POr=GM();VM.exports=POr});var WM=u((Wee,HM)=>{"use strict";var ROr=UM(),jv=Gt(),FOr=hi(),MOr=/\s+/g,BOr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,COr=/([a-z0-9])([A-Z])/g;function jOr(r){return r=jv(r,BOr," "),r=jv(r,COr,"$1 $2"),r=FOr(r),r=jv(r,MOr,"_"),ROr(r)}HM.exports=jOr});var DM=u((kee,kM)=>{"use strict";var GOr=WM();kM.exports=GOr});var JM=u((Dee,XM)=>{"use strict";var VOr=K().isPrimitive,UOr=d(),HOr=DM();function WOr(r){if(!VOr(r))throw new TypeError(UOr("invalid argument. Must provide a string. Value: `%s`.",r));return HOr(r)}XM.exports=WOr});var YM=u((Xee,zM)=>{"use strict";var kOr=JM();zM.exports=kOr});var QM=u((Jee,$M)=>{"use strict";var DOr=yi(),Gv=Gt(),XOr=hi(),JOr=/\s+/g,zOr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,YOr=/([a-z0-9])([A-Z])/g;function $Or(r){return r=Gv(r,zOr," "),r=Gv(r,YOr,"$1 $2"),r=XOr(r),r=Gv(r,JOr,"-"),DOr(r)}$M.exports=$Or});var KM=u((zee,ZM)=>{"use strict";var QOr=QM();ZM.exports=QOr});var rB=u((Yee,xM)=>{"use strict";var ZOr=K().isPrimitive,KOr=d(),xOr=KM();function rSr(r){if(!ZOr(r))throw new TypeError(KOr("invalid argument. Must provide a string. Value: `%s`.",r));return xOr(r)}xM.exports=rSr});var tB=u(($ee,eB)=>{"use strict";var eSr=rB();eB.exports=eSr});var nB=u((Qee,iB)=>{"use strict";var tSr=K().isPrimitive,iSr=d(),nSr=yi();function aSr(r){if(!tSr(r))throw new TypeError(iSr("invalid argument. Must provide a string. Value: `%s`.",r));return nSr(r)}iB.exports=aSr});var uB=u((Zee,aB)=>{"use strict";var uSr=nB();aB.exports=uSr});var oB=u((Kee,sB)=>{"use strict";var sSr=e0(),oSr=yi(),i0=Gt(),vSr=hi(),fSr=/\s+/g,cSr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,lSr=/(?:\s|^)([^\s]+)(?=\s|$)/g,pSr=/([a-z0-9])([A-Z])/g;function gSr(r,e){return sSr(oSr(e))}function mSr(r){return r=i0(r,cSr," "),r=i0(r,fSr," "),r=i0(r,pSr,"$1 $2"),r=vSr(r),i0(r,lSr,gSr)}sB.exports=mSr});var fB=u((xee,vB)=>{"use strict";var qSr=oB();vB.exports=qSr});var lB=u((rte,cB)=>{"use strict";var ySr=K().isPrimitive,hSr=d(),dSr=fB();function wSr(r){if(!ySr(r))throw new TypeError(hSr("invalid argument. First argument must be a string. Value: `%s`.",r));return dSr(r)}cB.exports=wSr});var gB=u((ete,pB)=>{"use strict";var bSr=lB();pB.exports=bSr});var qB=u((tte,mB)=>{"use strict";var ESr=yi(),Vv=Gt(),NSr=hi(),ASr=/\s+/g,OSr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,SSr=/([a-z0-9])([A-Z])/g;function TSr(r){return r=Vv(r,OSr," "),r=Vv(r,SSr,"$1 $2"),r=NSr(r),r=Vv(r,ASr,"_"),ESr(r)}mB.exports=TSr});var hB=u((ite,yB)=>{"use strict";var ISr=qB();yB.exports=ISr});var wB=u((nte,dB)=>{"use strict";var LSr=K().isPrimitive,_Sr=d(),PSr=hB();function RSr(r){if(!LSr(r))throw new TypeError(_Sr("invalid argument. Must provide a string. Value: `%s`.",r));return PSr(r)}dB.exports=RSr});var EB=u((ate,bB)=>{"use strict";var FSr=wB();bB.exports=FSr});var OB=u((ute,AB)=>{"use strict";var MSr=T(),NB=O(),BSr=or().isPrimitive,CSr=K().isPrimitive,Uv=d();function jSr(r,e){return MSr(e)?NB(e,"flags")&&(r.flags=e.flags,!CSr(r.flags))?new TypeError(Uv("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):NB(e,"capture")&&(r.capture=e.capture,!BSr(r.capture))?new TypeError(Uv("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(Uv("invalid argument. Options argument must be an object. Value: `%s`.",e))}AB.exports=jSr});var n0=u((ste,TB)=>{"use strict";var GSr=OB(),SB=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function VSr(r){var e,t;if(arguments.length>0){if(e={},t=GSr(e,r),t)throw t;return e.capture?new RegExp("("+SB+")",e.flags):new RegExp(SB,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}TB.exports=VSr});var LB=u((ote,IB)=>{"use strict";var USr=n0(),HSr=USr({capture:!0});IB.exports=HSr});var PB=u((vte,_B)=>{"use strict";var WSr=n0(),kSr=WSr();_B.exports=kSr});var MB=u((fte,FB)=>{"use strict";var RB=b(),Hv=n0(),DSr=LB(),XSr=PB();RB(Hv,"REGEXP",XSr);RB(Hv,"REGEXP_CAPTURE",DSr);FB.exports=Hv});var CB=u((cte,BB)=>{"use strict";var JSr=MB().REGEXP;function zSr(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),JSr.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}BB.exports=zSr});var GB=u((lte,jB)=>{"use strict";var YSr=CB();jB.exports=YSr});var UB=u((pte,VB)=>{"use strict";var $Sr=K().isPrimitive,QSr=d(),ZSr=GB();function KSr(r){if(!$Sr(r))throw new TypeError(QSr("invalid argument. Must provide a string. Value: `%s`.",r));return ZSr(r)}VB.exports=KSr});var WB=u((gte,HB)=>{"use strict";var xSr=UB();HB.exports=xSr});var DB=u((mte,kB)=>{"use strict";function rTr(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}kB.exports=rTr});var JB=u((qte,XB)=>{"use strict";var eTr=DB();XB.exports=eTr});var YB=u((yte,zB)=>{"use strict";var tTr=K().isPrimitive,iTr=d(),nTr=JB();function aTr(r){if(!tTr(r))throw new TypeError(iTr("invalid argument. First argument must be a string. Value: `%s`.",r));return nTr(r)}zB.exports=aTr});var QB=u((hte,$B)=>{"use strict";var uTr=YB();$B.exports=uTr});var KB=u((dte,ZB)=>{"use strict";var sTr=K().isPrimitive,oTr=d();function vTr(r){if(!sTr(r))throw new TypeError(oTr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}ZB.exports=vTr});var rC=u((wte,xB)=>{"use strict";var fTr=KB();xB.exports=fTr});var tC=u((bte,eC)=>{"use strict";var Wr={};Wr.camelcase=RM();Wr.capitalize=CM();Wr.constantcase=YM();Wr.kebabcase=tB();Wr.lowercase=uB();Wr.pascalcase=gB();Wr.snakecase=EB();Wr.startcase=WB();Wr.uncapitalize=QB();Wr.uppercase=rC();eC.exports=Wr});var nC=u((Ete,iC)=>{"use strict";var cTr=Ce();function lTr(r,e,t,i){cTr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}iC.exports=lTr});var R=u((Nte,aC)=>{"use strict";var pTr=nC();aC.exports=pTr});var oC=u((Ate,sC)=>{"use strict";var uC=65535;function gTr(r,e){var t,i,n,a,s,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,s=(r&uC)>>>0,o=(e&uC)>>>0,t=s*o>>>0,i=n*o+s*a<<16>>>0,t+i>>>0}sC.exports=gTr});var fC=u((Ote,vC)=>{"use strict";var mTr=oC();vC.exports=mTr});var Wv=u((Ste,cC)=>{"use strict";function qTr(r,e,t,i,n,a,s){var o,f,v,c,l,p,m;for(o=e.data,f=n.data,c=e.accessors[0],v=n.accessors[1],l=i,p=s,m=0;m<r;m++)v(f,p,c(o,l)),l+=t,p+=a;return e}cC.exports=qTr});var gC=u((Tte,pC)=>{"use strict";var lC=Za(),yTr=Wv(),kv=8;function hTr(r,e,t,i,n){var a,s,o,f,v,c;if(r<=0)return i;if(o=lC(e),f=lC(i),o.accessorProtocol||f.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,yTr(r,o,t,a,f,n,s),f.data;if(t===1&&n===1){if(v=r%kv,v>0)for(c=0;c<v;c++)i[c]=e[c];if(r<kv)return i;for(c=v;c<r;c+=kv)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,c=0;c<r;c++)i[s]=e[a],a+=t,s+=n;return i}pC.exports=hTr});var yC=u((Ite,qC)=>{"use strict";var mC=Za(),dTr=Wv(),Tn=8;function wTr(r,e,t,i,n,a,s){var o,f,v,c,l,p;if(r<=0)return n;if(v=mC(e),c=mC(n),v.accessorProtocol||c.accessorProtocol)return dTr(r,v,t,i,c,a,s),c.data;if(o=i,f=s,t===1&&a===1){if(l=r%Tn,l>0)for(p=0;p<l;p++)n[f]=e[o],o+=t,f+=a;if(r<Tn)return n;for(p=l;p<r;p+=Tn)n[f]=e[o],n[f+1]=e[o+1],n[f+2]=e[o+2],n[f+3]=e[o+3],n[f+4]=e[o+4],n[f+5]=e[o+5],n[f+6]=e[o+6],n[f+7]=e[o+7],o+=Tn,f+=Tn;return n}for(p=0;p<r;p++)n[f]=e[o],o+=t,f+=a;return n}qC.exports=wTr});var Qe=u((Lte,dC)=>{"use strict";var bTr=b(),hC=gC(),ETr=yC();bTr(hC,"ndarray",ETr);dC.exports=hC});var bC=u((_te,wC)=>{"use strict";function NTr(){}wC.exports=NTr});var NC=u((Pte,EC)=>{"use strict";var ATr=bC();function OTr(){return ATr.name==="foo"}EC.exports=OTr});var OC=u((Rte,AC)=>{"use strict";var STr=NC();AC.exports=STr});var TC=u((Fte,SC)=>{"use strict";var TTr=I(),ITr=OC(),LTr=d(),_Tr=js().REGEXP,PTr=ITr();function RTr(r){if(TTr(r)===!1)throw new TypeError(LTr("invalid argument. Must provide a function. Value: `%s`.",r));return PTr?r.name:_Tr.exec(r.toString())[1]}SC.exports=RTr});var LC=u((Mte,IC)=>{"use strict";var FTr=TC();IC.exports=FTr});var PC=u((Bte,_C)=>{"use strict";var MTr=Di(),BTr=Qt(),CTr=Xi(),jTr=Ji(),GTr=Zt(),VTr=Nt(),UTr=cr(),HTr=re(),WTr=gr(),kTr=[WTr,HTr,VTr,UTr,jTr,GTr,MTr,BTr,CTr];_C.exports=kTr});var RC=u((Cte,DTr)=>{DTr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var GC=u((jte,jC)=>{"use strict";var XTr=je(),JTr=LC(),BC=wt(),zTr=qo(),YTr=gr(),FC=PC(),MC=RC(),a0=zTr()?BC(YTr):CC;a0=JTr(a0)==="TypedArray"?a0:CC;function CC(){}function $Tr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof a0)return!0;for(t=0;t<FC.length;t++)if(r instanceof FC[t])return!0;for(;r;){for(e=XTr(r),t=0;t<MC.length;t++)if(MC[t]===e)return!0;r=BC(r)}return!1}jC.exports=$Tr});var UC=u((Gte,VC)=>{"use strict";var QTr=GC();VC.exports=QTr});var WC=u((Vte,HC)=>{"use strict";var ZTr=gn(),KTr=qn(),xTr=[KTr,ZTr];HC.exports=xTr});var kC=u((Ute,rIr)=>{rIr.exports=["Complex64Array","Complex128Array"]});var zC=u((Hte,JC)=>{"use strict";var eIr=je(),tIr=wt(),DC=WC(),XC=kC();function iIr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<DC.length;t++)if(r instanceof DC[t])return!0;for(;r;){for(e=eIr(r),t=0;t<XC.length;t++)if(XC[t]===e)return!0;r=tIr(r)}return!1}JC.exports=iIr});var $C=u((Wte,YC)=>{"use strict";var nIr=zC();YC.exports=nIr});var ZC=u((kte,QC)=>{"use strict";var aIr=d();function uIr(r,e){if(typeof e!="function")throw new TypeError(aIr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}QC.exports=uIr});var xC=u((Dte,KC)=>{"use strict";var sIr=ZC();KC.exports=sIr});var ej=u((Xte,rj)=>{"use strict";var oIr=Di(),vIr=Qt(),fIr=Xi(),cIr=Ji(),lIr=Zt(),pIr=Nt(),gIr=cr(),mIr=re(),qIr=gr(),yIr=gn(),hIr=qn(),dIr=[[qIr,"Float64Array"],[mIr,"Float32Array"],[pIr,"Int32Array"],[gIr,"Uint32Array"],[cIr,"Int16Array"],[lIr,"Uint16Array"],[oIr,"Int8Array"],[vIr,"Uint8Array"],[fIr,"Uint8ClampedArray"],[yIr,"Complex64Array"],[hIr,"Complex128Array"]];rj.exports=dIr});var ij=u((Jte,tj)=>{"use strict";var wIr=xC(),bIr=je(),EIr=wt(),di=ej();function NIr(r){var e,t;for(t=0;t<di.length;t++)if(wIr(r,di[t][0]))return di[t][1];for(;r;){for(e=bIr(r),t=0;t<di.length;t++)if(e===di[t][1])return di[t][1];r=EIr(r)}}tj.exports=NIr});var aj=u((zte,nj)=>{"use strict";var AIr=UC(),OIr=$C(),SIr=oi(),TIr=vi(),IIr=d(),LIr=ij();function _Ir(r){var e,t,i;if(AIr(r))e=r;else if(OIr(r))r.BYTES_PER_ELEMENT===8?e=SIr(r,0):e=TIr(r,0);else throw new TypeError(IIr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:LIr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}nj.exports=_Ir});var F=u((Yte,uj)=>{"use strict";var PIr=aj();uj.exports=PIr});var Dv=u(($te,sj)=>{"use strict";var RIr=Wt(),FIr=x(),MIr=RIr-1;function BIr(){var r=FIr(1+MIr*Math.random());return r>>>0}sj.exports=BIr});var Kv=u((Qte,hj)=>{"use strict";var se=b(),Ze=_(),oj=R(),Xv=O(),CIr=T(),jIr=Gr(),vj=xr(),GIr=or().isPrimitive,fj=ue().isPrimitive,mj=vn(),qj=Wt(),hr=cr(),VIr=f1(),Zv=fC(),wi=Qe(),UIr=F(),wr=d(),cj=Dv(),nr=624,Jv=397,lj=qj>>>0,HIr=19650218>>>0,zv=2147483648>>>0,Yv=2147483647>>>0,WIr=1812433253>>>0,kIr=1664525>>>0,DIr=1566083941>>>0,XIr=2636928640>>>0,JIr=4022730752>>>0,zIr=2567483615>>>0,$v=[0>>>0,zIr>>>0],yj=1/(mj+1),YIr=67108864>>>0,$Ir=2147483648>>>0,Qv=1>>>0,QIr=mj*yj,u0=1,s0=3,Ke=2,xe=nr+3,dr=nr+5,In=nr+6;function pj(r,e){var t;return e?t="option":t="argument",r.length<In+1?new RangeError(wr("invalid %s. `state` array has insufficient length.",t)):r[0]!==u0?new RangeError(wr("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,u0,r[0])):r[1]!==s0?new RangeError(wr("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,s0,r[1])):r[Ke]!==nr?new RangeError(wr("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,nr,r[Ke])):r[xe]!==1?new RangeError(wr("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[xe])):r[dr]!==r.length-In?new RangeError(wr("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-In,r[dr])):null}function gj(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=Zv(t,WIr)+i>>>0;return r}function ZIr(r,e,t,i){var n,a,s,o;for(a=1,s=0,o=VIr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=Zv(n,kIr)>>>0,r[a]=(r[a]>>>0^n)+t[s]+s>>>0,a+=1,s+=1,a>=e&&(r[0]=r[e-1],a=1),s>=i&&(s=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=Zv(n,DIr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=$Ir,r}function KIr(r){var e,t,i,n;for(n=nr-Jv,t=0;t<n;t++)e=r[t]&zv|r[t+1]&Yv,r[t]=r[t+Jv]^e>>>1^$v[e&Qv];for(i=nr-1;t<i;t++)e=r[t]&zv|r[t+1]&Yv,r[t]=r[t-n]^e>>>1^$v[e&Qv];return e=r[i]&zv|r[0]&Yv,r[i]=r[Jv-1]^e>>>1^$v[e&Qv],r}function xIr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!CIr(r))throw new TypeError(wr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Xv(r,"copy")&&(i.copy=r.copy,!GIr(r.copy)))throw new TypeError(wr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Xv(r,"state")){if(t=r.state,i.state=!0,!vj(t))throw new TypeError(wr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(s=pj(t,!0),s)throw s;i.copy===!1?e=t:(e=new hr(t.length),wi(t.length,t,1,e,1)),t=new hr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,nr),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,t[dr])}if(n===void 0)if(Xv(r,"seed"))if(n=r.seed,i.seed=!0,fj(n)){if(n>lj)throw new RangeError(wr("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(jIr(n)===!1||n.length<1)throw new TypeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!fj(n))throw new TypeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>lj)throw new RangeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new hr(In+a),e[0]=u0,e[1]=s0,e[Ke]=nr,e[xe]=1,e[xe+1]=nr,e[dr]=a,wi.ndarray(a,n,1,0,e,1,dr+1),t=new hr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,nr),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,a),t=gj(t,nr,HIr),t=ZIr(t,nr,n,a)}else n=cj()>>>0}else n=cj()>>>0;return t===void 0&&(e=new hr(In+1),e[0]=u0,e[1]=s0,e[Ke]=nr,e[xe]=1,e[xe+1]=nr,e[dr]=1,e[dr+1]=n,t=new hr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,nr),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,1),t=gj(t,nr,n)),se(y,"NAME","mt19937"),Ze(y,"seed",o),Ze(y,"seedLength",f),oj(y,"state",l,p),Ze(y,"stateLength",v),Ze(y,"byteLength",c),se(y,"toJSON",m),se(y,"MIN",0),se(y,"MAX",qj),se(y,"normalized",q),se(q,"NAME",y.NAME),Ze(q,"seed",o),Ze(q,"seedLength",f),oj(q,"state",l,p),Ze(q,"stateLength",v),Ze(q,"byteLength",c),se(q,"toJSON",m),se(q,"MIN",0),se(q,"MAX",QIr),y;function o(){var g=e[dr];return wi(g,n,1,new hr(g),1)}function f(){return e[dr]}function v(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return wi(g,e,1,new hr(g),1)}function p(g){var h;if(!vj(g))throw new TypeError(wr("invalid argument. Must provide a Uint32Array. Value: `%s`.",g));if(h=pj(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?wi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new hr(g.length)),wi(g.length,g,1,e,1)),t=new hr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,nr),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,e[dr])}function m(){var g={};return g.type="PRNG",g.name=y.NAME,g.state=UIr(e),g.params=[],g}function y(){var g,h;return h=e[xe+1],h>=nr&&(t=KIr(t),h=0),g=t[h],e[xe+1]=h+1,g^=g>>>11,g^=g<<7&XIr,g^=g<<15&JIr,g^=g>>>18,g>>>0}function q(){var g=y()>>>5,h=y()>>>6;return(g*YIr+h)*yj}}hj.exports=xIr});var wj=u((Zte,dj)=>{"use strict";var rLr=Kv(),eLr=Dv(),tLr=rLr({seed:eLr()});dj.exports=tLr});var D=u((Kte,Ej)=>{"use strict";var iLr=b(),bj=wj(),nLr=Kv();iLr(bj,"factory",nLr);Ej.exports=bj});var Sj=u((xte,Oj)=>{"use strict";var Nj=j().isPrimitive,xv=d(),Aj=ar();function aLr(r,e){return!Nj(r)||Aj(r)?new TypeError(xv("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Nj(e)||Aj(e)?new TypeError(xv("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(xv("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}Oj.exports=aLr});var Ij=u((rie,Tj)=>{"use strict";var uLr=$(),sLr=It(),oLr=za();function vLr(r,e,t){return e+uLr(sLr(oLr*r()),2)*(t-e)}Tj.exports=vLr});var r2=u((eie,Cj)=>{"use strict";var oe=b(),o0=_(),Lj=R(),_j=T(),Pj=I(),Rj=O(),Fj=L(),fLr=B(),v0=D().factory,Mj=E(),cLr=F(),f0=d(),lLr=Sj(),Bj=Ij();function pLr(){var r,e,t,i,n,a;if(arguments.length===0)e=v0();else if(arguments.length===1){if(r=arguments[0],!_j(r))throw new TypeError(f0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Rj(r,"prng")){if(!Pj(r.prng))throw new TypeError(f0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=v0(r)}else{if(n=arguments[0],a=arguments[1],i=lLr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!_j(r))throw new TypeError(f0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Rj(r,"prng")){if(!Pj(r.prng))throw new TypeError(f0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=v0(r)}else e=v0()}return n===void 0?t=y:t=m,oe(t,"NAME","arcsine"),r&&r.prng?(oe(t,"seed",null),oe(t,"seedLength",null),Lj(t,"state",Fj(null),fLr),oe(t,"stateLength",null),oe(t,"byteLength",null),oe(t,"toJSON",Fj(null)),oe(t,"PRNG",e)):(o0(t,"seed",s),o0(t,"seedLength",o),Lj(t,"state",c,l),o0(t,"stateLength",f),o0(t,"byteLength",v),oe(t,"toJSON",p),oe(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=cLr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return Bj(e,n,a)}function y(q,g){return Mj(q)||Mj(g)||q>=g?NaN:Bj(e,q,g)}}Cj.exports=pLr});var Gj=u((tie,jj)=>{"use strict";var gLr=r2(),mLr=gLr();jj.exports=mLr});var Hj=u((iie,Uj)=>{"use strict";var qLr=b(),Vj=Gj(),yLr=r2();qLr(Vj,"factory",yLr);Uj.exports=Vj});var e2=u((nie,zj)=>{"use strict";var ve=b(),c0=_(),Wj=R(),kj=T(),hLr=dn().isPrimitive,Dj=I(),Xj=O(),Jj=L(),dLr=B(),l0=D().factory,wLr=E(),bLr=F(),p0=d();function ELr(){var r,e,t,i;if(arguments.length===0)e=l0();else if(arguments.length===1&&kj(arguments[0]))if(r=arguments[0],Xj(r,"prng")){if(!Dj(r.prng))throw new TypeError(p0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=l0(r);else{if(i=arguments[0],!hLr(i))throw new TypeError(p0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!kj(r))throw new TypeError(p0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Xj(r,"prng")){if(!Dj(r.prng))throw new TypeError(p0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=l0(r)}else e=l0()}return i===void 0?t=p:t=l,ve(t,"NAME","bernoulli"),r&&r.prng?(ve(t,"seed",null),ve(t,"seedLength",null),Wj(t,"state",Jj(null),dLr),ve(t,"stateLength",null),ve(t,"byteLength",null),ve(t,"toJSON",Jj(null)),ve(t,"PRNG",e)):(c0(t,"seed",n),c0(t,"seedLength",a),Wj(t,"state",f,v),c0(t,"stateLength",s),c0(t,"byteLength",o),ve(t,"toJSON",c),ve(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=bLr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return wLr(m)||m<0||m>1?NaN:e()<=m?1:0}}zj.exports=ELr});var $j=u((aie,Yj)=>{"use strict";var NLr=e2(),ALr=NLr();Yj.exports=ALr});var Kj=u((uie,Zj)=>{"use strict";var OLr=b(),Qj=$j(),SLr=e2();OLr(Qj,"factory",SLr);Zj.exports=Qj});var tG=u((sie,eG)=>{"use strict";var TLr=V(),xj=fr(),ILr=C(),rG=.00991256303526217;function LLr(r,e){var t,i,n;for(i=xj(-.5*e*e),t=[],t.push(rG/i),t.push(e),n=2;n<r;n++)t[n]=TLr(-2*ILr(rG/t[n-1]+i)),i=xj(-.5*t[n]*t[n]);return t.push(0),t}eG.exports=LLr});var nG=u((oie,iG)=>{"use strict";function _Lr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}iG.exports=_Lr});var sG=u((vie,uG)=>{"use strict";var aG=C();function PLr(r,e,t){var i,n;do i=aG(r())/e,n=aG(r());while(-2*n<i*i);return t?i-e:e-i}uG.exports=PLr});var cG=u((fie,fG)=>{"use strict";var RLr=Y(),oG=fr(),FLr=tG(),MLr=nG(),BLr=sG(),CLr=128,vG=3.442619855899,Vt=FLr(CLr,vG),jLr=MLr(Vt),GLr=127;function VLr(r,e){return t;function t(){for(var i,n,a,s,o,f,v;;){if(o=2*r()-1,f=e()&GLr,RLr(o)<jLr[f])return o*Vt[f];if(f===0)return BLr(r,vG,o<0);if(s=o*Vt[f],a=s*s,v=f+1,i=oG(-.5*(Vt[f]*Vt[f]-a)),n=oG(-.5*(Vt[v]*Vt[v]-a)),n+r()*(i-n)<1)return s}}}fG.exports=VLr});var i2=u((cie,gG)=>{"use strict";var rt=b(),g0=_(),lG=R(),ULr=I(),HLr=T(),WLr=or().isPrimitive,m0=O(),kLr=xr(),t2=D().factory,pG=L(),DLr=B(),XLr=x(),JLr=Wt(),zLr=F(),Ln=d(),YLr=cG();function $Lr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!HLr(r))throw new TypeError(Ln("invalid argument. Must provide an object. Value: `%s`.",r));if(m0(r,"copy")&&(n.copy=r.copy,!WLr(r.copy)))throw new TypeError(Ln("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(m0(r,"prng")){if(!ULr(r.prng))throw new TypeError(Ln("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(m0(r,"state")){if(n.state=r.state,!kLr(r.state))throw new TypeError(Ln("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(m0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Ln("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=t2(n),e=t.normalized):(t=t2({seed:XLr(1+JLr*e()),copy:n.copy}),n.seed=null):(t=t2(n),e=t.normalized),i=YLr(e,t),rt(i,"NAME","improved-ziggurat"),n.seed===null?(rt(i,"seed",null),rt(i,"seedLength",null)):(g0(i,"seed",a),g0(i,"seedLength",s)),r&&r.prng?(lG(i,"state",pG(null),DLr),rt(i,"stateLength",null),rt(i,"byteLength",null),rt(i,"toJSON",pG(null))):(lG(i,"state",v,c),g0(i,"stateLength",o),g0(i,"byteLength",f),rt(i,"toJSON",l)),rt(i,"PRNG",e),i;function a(){return t.seed}function s(){return t.seedLength}function o(){return t.stateLength}function f(){return t.byteLength}function v(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=zLr(t.state),p.params=[],p}}gG.exports=$Lr});var qG=u((lie,mG)=>{"use strict";var QLr=i2(),ZLr=QLr();mG.exports=ZLr});var et=u((pie,hG)=>{"use strict";var KLr=b(),yG=qG(),xLr=i2();KLr(yG,"factory",xLr);hG.exports=yG});var wG=u((gie,dG)=>{"use strict";var r_r=I(),e_r=r_r(Object.assign);dG.exports=e_r});var EG=u((mie,bG)=>{"use strict";var t_r=Object.assign;bG.exports=t_r});var AG=u((qie,NG)=>{"use strict";var i_r=typeof Object.getOwnPropertySymbols<"u";NG.exports=i_r});var TG=u((yie,SG)=>{"use strict";var OG=Xt(),n_r=OG.getOwnPropertySymbols;function a_r(r){return n_r(OG(r))}SG.exports=a_r});var LG=u((hie,IG)=>{"use strict";function u_r(){return[]}IG.exports=u_r});var PG=u((die,_G)=>{"use strict";var s_r=AG(),o_r=TG(),v_r=LG(),n2;s_r?n2=o_r:n2=v_r;_G.exports=n2});var FG=u((wie,RG)=>{"use strict";var f_r=Dt(),c_r=PG(),l_r=Wi();function p_r(r){var e,t,i;for(e=f_r(r),t=c_r(r),i=0;i<t.length;i++)l_r(r,t[i])&&e.push(t[i]);return e}RG.exports=p_r});var BG=u((bie,MG)=>{"use strict";var g_r=FG();MG.exports=g_r});var GG=u((Eie,jG)=>{"use strict";var m_r=BG(),CG=Xt(),q_r=d();function y_r(r){var e,t,i,n,a,s,o;if(r==null)throw new TypeError(q_r("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=CG(r),s=1;s<arguments.length;s++)if(e=arguments[s],e!=null)for(t=m_r(CG(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}jG.exports=y_r});var _n=u((Nie,VG)=>{"use strict";var h_r=wG(),d_r=EG(),w_r=GG(),a2;h_r?a2=d_r:a2=w_r;VG.exports=a2});var kG=u((Aie,WG)=>{"use strict";var UG=W().isPrimitive,HG=d();function b_r(r,e){return UG(r)?UG(e)?null:new TypeError(HG("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(HG("invalid argument. First argument must be a positive number. Value: `%s`.",r))}WG.exports=b_r});var YG=u((Oie,zG)=>{"use strict";var DG=C(),XG=V(),E_r=$(),JG=1/3;function N_r(r,e,t){var i,n,a,s,o,f,v,c,l,p;for(t<1?(f=t+1-JG,o=1/XG(9*f),c=E_r(r(),1/t)):(f=t-JG,o=1/XG(9*f),c=1),i=!0;i;){do v=e(),p=1+o*v;while(p<=0);p*=p*p,n=v*v,a=1-.331*n*n,s=.5*n+f*(1-p+DG(p)),l=r(),(l<a||DG(l)<s)&&(i=!1)}return f*p*c}zG.exports=N_r});var ZG=u((Sie,QG)=>{"use strict";var u2=$(),$G=C();function A_r(r,e,t){var i,n,a,s,o,f,v,c;for(a=t-1,o=u2(a+a,.5),i=!0;i===!0;)s=e(),v=.5*(1+s/o),v>=0&&v<=1&&(f=r(),n=u2(s,4),c=8*t-12,c=1-n/c,f<=c?i=!1:(c+=.5*u2(n/(8*t-8),2),f<c&&(c=a*$G(4*v*(1-v)),c+=s*s/2,c>=$G(f)&&(i=!1))));return v}QG.exports=A_r});var xG=u((Tie,KG)=>{"use strict";var O_r=$(),q0=C();function S_r(r,e,t,i){var n,a,s,o,f,v,c,l,p,m,y;for(o=t-1,f=i-1,v=o+f,c=v*q0(v),s=o/v,n=.5/O_r(v,.5),a=!0;a===!0;)l=e(),m=s+l*n,m>=0&&m<=1&&(p=r(),y=o*q0(m/o),y+=f*q0((1-m)/f),y+=c+.5*l*l,y>=q0(p)&&(a=!1));return m}KG.exports=S_r});var tV=u((Iie,eV)=>{"use strict";var s2=fr(),rV=$(),o2=C();function T_r(r,e,t){for(var i,n,a,s,o,f,v;;)if(s=r(),o=r(),f=rV(s,1/e),v=rV(o,1/t),a=f+v,a<=1)return a>0?f/a:(i=o2(s)/e,n=o2(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),s2(i-o2(s2(i)+s2(n))))}eV.exports=T_r});var aV=u((Lie,nV)=>{"use strict";var iV=YG(),I_r=ZG(),L_r=xG(),__r=tV();function P_r(r,e,t,i){var n,a;return t===i&&t>1.5?I_r(r,e,t):t>1&&i>1?L_r(r,e,t,i):t<1&&i<1?__r(r,t,i):(n=iV(r,e,t),a=iV(r,e,i),n/(n+a))}nV.exports=P_r});var l2=u((_ie,mV)=>{"use strict";var fe=b(),y0=_(),uV=R(),sV=T(),oV=or().isPrimitive,vV=I(),bi=O(),fV=L(),R_r=B(),cV=et().factory,h0=D().factory,lV=E(),v2=Qe(),f2=cr(),c2=xr(),pV=_n(),F_r=F(),ce=d(),M_r=kG(),gV=aV();function B_r(){var r,e,t,i,n,a,s,o,f;if(o=!0,arguments.length===0)n={copy:!1},a=h0(n);else if(arguments.length===1){if(n=arguments[0],!sV(n))throw new TypeError(ce("invalid argument. Options argument must be an object. Value: `%s`.",n));if(bi(n,"copy")&&!oV(n.copy))throw new TypeError(ce("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(bi(n,"prng")){if(!vV(n.prng))throw new TypeError(ce("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(bi(n,"state")&&!c2(n.state))throw new TypeError(ce("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=pV({},n),n.copy===!1?o=!1:n.state&&(n.state=v2(n.state.length,n.state,1,new f2(n.state.length),1)),n.copy=!1,a=h0(n)}}else{if(t=arguments[0],i=arguments[1],f=M_r(t,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!sV(n))throw new TypeError(ce("invalid argument. Options argument must be an object. Value: `%s`.",n));if(bi(n,"copy")&&!oV(n.copy))throw new TypeError(ce("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(bi(n,"prng")){if(!vV(n.prng))throw new TypeError(ce("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(bi(n,"state")&&!c2(n.state))throw new TypeError(ce("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=pV({},n),n.copy===!1?o=!1:n.state&&(n.state=v2(n.state.length,n.state,1,new f2(n.state.length),1)),n.copy=!1,a=h0(n)}}else n={copy:!1},a=h0(n)}return n&&n.prng?e=cV({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=cV({state:r,copy:!1})),t===void 0?s=h:s=g,fe(s,"NAME","beta"),n&&n.prng?(fe(s,"seed",null),fe(s,"seedLength",null),uV(s,"state",fV(null),R_r),fe(s,"stateLength",null),fe(s,"byteLength",null),fe(s,"toJSON",fV(null)),fe(s,"PRNG",a)):(y0(s,"seed",v),y0(s,"seedLength",c),uV(s,"state",m,y),y0(s,"stateLength",l),y0(s,"byteLength",p),fe(s,"toJSON",q),fe(s,"PRNG",a),a=a.normalized),s;function v(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function m(){return a.state}function y(N){if(!c2(N))throw new TypeError(ce("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=v2(N.length,N,1,new f2(N.length),1)),a.state=N}function q(){var N={};return N.type="PRNG",N.name=s.NAME,N.state=F_r(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function g(){return gV(a,e,t,i)}function h(N,A){return lV(N)||lV(A)||N<=0||A<=0?NaN:gV(a,e,N,A)}}mV.exports=B_r});var yV=u((Pie,qV)=>{"use strict";var C_r=l2(),j_r=C_r();qV.exports=j_r});var wV=u((Rie,dV)=>{"use strict";var G_r=b(),hV=yV(),V_r=l2();G_r(hV,"factory",V_r);dV.exports=hV});var AV=u((Fie,NV)=>{"use strict";var bV=W().isPrimitive,EV=d();function U_r(r,e){return bV(r)?bV(e)?null:new TypeError(EV("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(EV("invalid argument. First argument must be a positive number. Value: `%s`.",r))}NV.exports=U_r});var TV=u((Mie,SV)=>{"use strict";var OV=C();function H_r(r,e,t,i,n){var a,s,o,f,v,c,l;for(a=!0;a;){do v=e(),l=1+n*v;while(l<=0);l*=l*l,s=v*v,o=1-.331*s*s,f=.5*s+i*(1-l+OV(l)),c=r(),(c<o||OV(c)<f)&&(a=!1)}return 1/t*i*l}SV.exports=H_r});var y2=u((Bie,jV)=>{"use strict";var le=b(),d0=_(),IV=R(),LV=T(),p2=xr(),_V=or().isPrimitive,PV=I(),Ei=O(),RV=L(),W_r=B(),FV=et().factory,w0=D().factory,MV=E(),g2=V(),BV=$(),m2=Qe(),q2=cr(),k_r=F(),CV=_n(),pe=d(),D_r=AV(),b0=TV(),E0=1/3;function X_r(){var r,e,t,i,n,a,s,o,f,v,c;if(o=!0,arguments.length===0)n={copy:!1},a=w0(n);else if(arguments.length===1){if(n=arguments[0],!LV(n))throw new TypeError(pe("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ei(n,"copy")&&!_V(n.copy))throw new TypeError(pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ei(n,"prng")){if(!PV(n.prng))throw new TypeError(pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ei(n,"state")&&!p2(n.state))throw new TypeError(pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=CV({},n),n.copy===!1?o=!1:n.state&&(n.state=m2(n.state.length,n.state,1,new q2(n.state.length),1)),n.copy=!1,a=w0(n)}}else{if(e=arguments[0],i=arguments[1],f=D_r(e,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!LV(n))throw new TypeError(pe("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ei(n,"copy")&&!_V(n.copy))throw new TypeError(pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ei(n,"prng")){if(!PV(n.prng))throw new TypeError(pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ei(n,"state")&&!p2(n.state))throw new TypeError(pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=CV({},n),n.copy===!1?o=!1:n.state&&(n.state=m2(n.state.length,n.state,1,new q2(n.state.length),1)),n.copy=!1,a=w0(n)}}else n={copy:!1},a=w0(n)}return n&&n.prng?t=FV({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=FV({state:r,copy:!1})),e===void 0?s=G:(e>=1?(s=N,c=e-E0):(s=A,c=e+1-E0),v=1/g2(9*c)),le(s,"NAME","gamma"),n&&n.prng?(le(s,"seed",null),le(s,"seedLength",null),IV(s,"state",RV(null),W_r),le(s,"stateLength",null),le(s,"byteLength",null),le(s,"toJSON",RV(null)),le(s,"PRNG",a)):(d0(s,"seed",l),d0(s,"seedLength",p),IV(s,"state",q,g),d0(s,"stateLength",m),d0(s,"byteLength",y),le(s,"toJSON",h),le(s,"PRNG",a),a=a.normalized),s;function l(){return a.seed}function p(){return a.seedLength}function m(){return a.stateLength}function y(){return a.byteLength}function q(){return a.state}function g(S){if(!p2(S))throw new TypeError(pe("invalid argument. Must provide a Uint32Array. Value: `%s`.",S));o&&(S=m2(S.length,S,1,new q2(S.length),1)),a.state=S}function h(){var S={};return S.type="PRNG",S.name=s.NAME,S.state=k_r(a.state),e===void 0?S.params=[]:S.params=[e,i],S}function N(){return b0(a,t,i,c,v)}function A(){return b0(a,t,i,c,v)*BV(a(),1/e)}function G(S,J){var sr,k;return MV(S)||MV(J)||S<=0||J<=0?NaN:S<1?(k=S+1-E0,sr=1/g2(9*k),b0(a,t,J,k,sr)*BV(a(),1/S)):(k=S-E0,sr=1/g2(9*k),b0(a,t,J,k,sr))}}jV.exports=X_r});var VV=u((Cie,GV)=>{"use strict";var J_r=y2(),z_r=J_r();GV.exports=z_r});var Ni=u((jie,HV)=>{"use strict";var Y_r=b(),UV=VV(),$_r=y2();Y_r(UV,"factory",$_r);HV.exports=UV});var XV=u((Gie,DV)=>{"use strict";var WV=W().isPrimitive,kV=d();function Q_r(r,e){return WV(r)?WV(e)?null:new TypeError(kV("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(kV("invalid argument. First argument must be a positive number. Value: `%s`.",r))}DV.exports=Q_r});var zV=u((Vie,JV)=>{"use strict";function Z_r(r,e,t){return r(e,1)/r(t,1)}JV.exports=Z_r});var h2=u((Uie,rU)=>{"use strict";var tt=b(),N0=_(),YV=R(),$V=T(),QV=L(),K_r=B(),A0=Ni().factory,ZV=E(),x_r=F(),KV=d(),rPr=XV(),xV=zV();function ePr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=A0();else if(arguments.length===1){if(i=arguments[0],!$V(i))throw new TypeError(KV("invalid argument. Options argument must be an object. Value: `%s`.",i));r=A0(i)}else{if(e=arguments[0],t=arguments[1],s=rPr(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!$V(i))throw new TypeError(KV("invalid argument. Options argument must be an object. Value: `%s`.",i));r=A0(i)}else r=A0()}return e===void 0?a=q:a=y,n=r.PRNG,tt(a,"NAME","betaprime"),i&&i.prng?(tt(a,"seed",null),tt(a,"seedLength",null),YV(a,"state",QV(null),K_r),tt(a,"stateLength",null),tt(a,"byteLength",null),tt(a,"toJSON",QV(null))):(N0(a,"seed",o),N0(a,"seedLength",f),YV(a,"state",l,p),N0(a,"stateLength",v),N0(a,"byteLength",c),tt(a,"toJSON",m)),tt(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=x_r(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function y(){return xV(r,e,t)}function q(g,h){return ZV(g)||ZV(h)||g<=0||h<=0?NaN:xV(r,g,h)}}rU.exports=ePr});var tU=u((Hie,eU)=>{"use strict";var tPr=h2(),iPr=tPr();eU.exports=iPr});var aU=u((Wie,nU)=>{"use strict";var nPr=b(),iU=tU(),aPr=h2();nPr(iU,"factory",aPr);nU.exports=iU});var sU=u((kie,uU)=>{"use strict";var uPr=x();function sPr(r){return uPr(r)===r&&r>0}uU.exports=sPr});var d2=u((Die,oU)=>{"use strict";var oPr=sU();oU.exports=oPr});var fU=u((Xie,vU)=>{"use strict";function vPr(r){return r>=0&&r<=1}vU.exports=vPr});var lU=u((Jie,cU)=>{"use strict";var fPr=fU();cU.exports=fPr});var mU=u((zie,gU)=>{"use strict";var cPr=ue().isPrimitive,lPr=dn().isPrimitive,pU=d();function pPr(r,e){return cPr(r)?lPr(e)?null:new TypeError(pU("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(pU("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}gU.exports=pPr});var yU=u((Yie,qU)=>{"use strict";function gPr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}qU.exports=gPr});var dU=u(($ie,hU)=>{"use strict";var mPr=E();function qPr(r){return r===0||mPr(r)?r:r<0?-1:1}hU.exports=qPr});var O0=u((Qie,wU)=>{"use strict";var yPr=dU();wU.exports=yPr});var EU=u((Zie,bU)=>{"use strict";var hPr=$(),dPr=1/12,wPr=1/360,bPr=1/1260;function EPr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=hPr(r,2),(dPr-(wPr-bPr/e)/e)/r}}bU.exports=EPr});var AU=u((Kie,NU)=>{"use strict";var w2=x(),NPr=O0(),APr=V(),b2=Y(),S0=C(),T0=EU(),OPr=1/6;function SPr(r,e,t){var i,n,a,s,o,f,v,c,l,p,m,y,q,g,h,N,A,G,S,J,sr,k,as,Dr,lr,Gn;for(J=w2((e+1)*t),v=e-J+1,sr=1-t,k=t/sr,c=(e+1)*k,s=e*t*sr,a=APr(s),g=1.15+2.53*a,q=-.0873+.0248*g+.01*t,h=e*t+.5,i=(2.83+5.1/g)*a,y=.92-4.2/g,n=.86*y,A=(J+.5)*S0((J+1)/(k*v)),A+=T0(J)+T0(e-J);;){if(lr=r(),lr<=n)return Dr=lr/y-.43,k=Dr*(2*q/(.5-b2(Dr))+g)+h,w2(k);if(lr>=y?Dr=r()-.5:(Dr=lr/y-.93,Dr=NPr(Dr)*.5-Dr,lr=y*r()),l=.5-b2(Dr),S=w2(Dr*(2*q/l+g)+h),!(S<0||S>e))if(lr=lr*i/(q/(l*l)+g),p=b2(S-J),p>15){if(lr=S0(lr),o=p/s,f=(p/3+.625)*p,f+=OPr,f/=s,o*=f+.5,as=-(p*p)/(2*s),lr<as-o||lr<=as+o&&(m=e-S+1,Gn=A+(e+1)*S0(v/m),Gn+=(S+.5)*S0(m*k/(S+1)),Gn+=-(T0(S)+T0(e-S)),lr<=Gn))return S}else{if(N=1,J<S)for(G=J;G<=S;G++)N*=c/G-k;else if(J>S)for(G=S;G<=J;G++)lr*=c/G-k;if(lr<=N)return S}}}NU.exports=SPr});var TU=u((xie,SU)=>{"use strict";var TPr=yU(),IPr=AU();function OU(r,e,t){return t>.5?e-OU(r,e,1-t):e*t<10?TPr(r,e,t):IPr(r,e,t)}SU.exports=OU});var E2=u((rne,BU)=>{"use strict";var ge=b(),I0=_(),IU=R(),LU=T(),_U=I(),PU=O(),RU=L(),LPr=B(),FU=E(),_Pr=d2(),PPr=lU(),L0=D().factory,RPr=F(),_0=d(),FPr=mU(),MU=TU();function MPr(){var r,e,t,i,n,a;if(arguments.length===0)e=L0();else if(arguments.length===1){if(r=arguments[0],!LU(r))throw new TypeError(_0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PU(r,"prng")){if(!_U(r.prng))throw new TypeError(_0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=L0(r)}else{if(n=arguments[0],a=arguments[1],i=FPr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!LU(r))throw new TypeError(_0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(PU(r,"prng")){if(!_U(r.prng))throw new TypeError(_0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=L0(r)}else e=L0()}return n===void 0?t=y:t=m,ge(t,"NAME","binomial"),r&&r.prng?(ge(t,"seed",null),ge(t,"seedLength",null),IU(t,"state",RU(null),LPr),ge(t,"stateLength",null),ge(t,"byteLength",null),ge(t,"toJSON",RU(null)),ge(t,"PRNG",e)):(I0(t,"seed",s),I0(t,"seedLength",o),IU(t,"state",c,l),I0(t,"stateLength",f),I0(t,"byteLength",v),ge(t,"toJSON",p),ge(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=RPr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return MU(e,n,a)}function y(q,g){return FU(q)||FU(g)||!_Pr(q)||!PPr(g)?NaN:MU(e,q,g)}}BU.exports=MPr});var jU=u((ene,CU)=>{"use strict";var BPr=E2(),CPr=BPr();CU.exports=CPr});var UU=u((tne,VU)=>{"use strict";var jPr=b(),GU=jU(),GPr=E2();jPr(GU,"factory",GPr);VU.exports=GU});var WU=u((ine,HU)=>{"use strict";var VPr=V(),UPr=C(),HPr=It(),WPr=Tt(),kPr=ke();function DPr(r){var e,t;return e=!0,i;function i(){var n,a,s,o;if(e){do n=r(),a=r();while(n===0);return s=VPr(-2*UPr(n)),o=kPr*a,t=s*WPr(o),e=!1,s*HPr(o)}return e=!0,t}}HU.exports=DPr});var DU=u((nne,kU)=>{"use strict";var XPr=V(),JPr=C(),zPr=Tt(),YPr=Ir(),$Pr=zPr(YPr);function QPr(r){var e=XPr(-2*JPr(r));return e*$Pr}kU.exports=QPr});var JU=u((ane,XU)=>{"use strict";var ZPr=V(),KPr=C(),xPr=Tt(),rRr=ke();function eRr(r){var e=ZPr(-2*KPr(r)),t=rRr*r;return e*xPr(t)}XU.exports=eRr});var N2=u((une,QU)=>{"use strict";var Br=b(),P0=_(),zU=R(),tRr=T(),iRr=I(),nRr=or().isPrimitive,Pn=O(),aRr=xr(),YU=D().factory,$U=L(),uRr=B(),sRr=F(),Rn=d(),oRr=WU(),vRr=DU(),fRr=JU();function cRr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!tRr(r))throw new TypeError(Rn("invalid argument. Must provide an object. Value: `%s`.",r));if(Pn(r,"copy")&&(n.copy=r.copy,!nRr(r.copy)))throw new TypeError(Rn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Pn(r,"prng")){if(!iRr(r.prng))throw new TypeError(Rn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(Pn(r,"state")){if(n.state=r.state,!aRr(r.state))throw new TypeError(Rn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(Pn(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Rn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=YU(n),e=i.normalized):n.seed=null:(i=YU(n),e=i.normalized),t=oRr(e),Br(t,"NAME","box-muller"),n.seed===null?(Br(t,"seed",null),Br(t,"seedLength",null)):(P0(t,"seed",a),P0(t,"seedLength",s)),r&&r.prng?(zU(t,"state",$U(null),uRr),Br(t,"stateLength",null),Br(t,"byteLength",null),Br(t,"toJSON",$U(null))):(zU(t,"state",v,c),P0(t,"stateLength",o),P0(t,"byteLength",f),Br(t,"toJSON",l)),Br(t,"PRNG",e),Pn(e,"MIN")?(Br(t,"MIN",vRr(e.MIN)),Br(t,"MAX",fRr(e.MIN))):(Br(t,"MIN",null),Br(t,"MAX",null)),t;function a(){return i.seed}function s(){return i.seedLength}function o(){return i.stateLength}function f(){return i.byteLength}function v(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=sRr(i.state),p.params=[],p}}QU.exports=cRr});var KU=u((sne,ZU)=>{"use strict";var lRr=N2(),pRr=lRr();ZU.exports=pRr});var eH=u((one,rH)=>{"use strict";var gRr=b(),xU=KU(),mRr=N2();gRr(xU,"factory",mRr);rH.exports=xU});var nH=u((vne,iH)=>{"use strict";var qRr=j().isPrimitive,yRr=W().isPrimitive,tH=d(),hRr=ar();function dRr(r,e){return!qRr(r)||hRr(r)?new TypeError(tH("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):yRr(e)?null:new TypeError(tH("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}iH.exports=dRr});var uH=u((fne,aH)=>{"use strict";var wRr=K1(),bRr=Ir();function ERr(r,e,t){return e+t*wRr(bRr*(r()-.5))}aH.exports=ERr});var A2=u((cne,gH)=>{"use strict";var it=b(),R0=_(),sH=R(),oH=T(),vH=I(),fH=O(),cH=L(),NRr=B(),lH=E(),Ai=et().factory,ARr=F(),F0=d(),ORr=nH(),pH=uH();function SRr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=Ai();else if(arguments.length===1){if(t=arguments[0],!oH(t))throw new TypeError(F0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(fH(t,"prng")){if(!vH(t.prng))throw new TypeError(F0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ai({prng:t.prng})}else e=Ai(t)}else{if(s=arguments[0],r=arguments[1],a=ORr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!oH(t))throw new TypeError(F0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(fH(t,"prng")){if(!vH(t.prng))throw new TypeError(F0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ai({prng:t.prng})}else e=Ai(t)}else e=Ai()}return s===void 0?n=q:n=y,i=e.PRNG,it(n,"NAME","cauchy"),t&&t.prng?(it(n,"seed",null),it(n,"seedLength",null),sH(n,"state",cH(null),NRr),it(n,"stateLength",null),it(n,"byteLength",null),it(n,"toJSON",cH(null))):(R0(n,"seed",o),R0(n,"seedLength",f),sH(n,"state",l,p),R0(n,"stateLength",v),R0(n,"byteLength",c),it(n,"toJSON",m)),it(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=ARr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return pH(e,s,r)}function q(g,h){return lH(g)||lH(h)||h<=0?NaN:pH(e,g,h)}}gH.exports=SRr});var qH=u((lne,mH)=>{"use strict";var TRr=A2(),IRr=TRr();mH.exports=IRr});var dH=u((pne,hH)=>{"use strict";var LRr=b(),yH=qH(),_Rr=A2();LRr(yH,"factory",_Rr);hH.exports=yH});var O2=u((gne,OH)=>{"use strict";var nt=b(),M0=_(),wH=R(),PRr=W().isPrimitive,bH=T(),EH=I(),NH=O(),AH=L(),RRr=B(),FRr=E(),Oi=Ni().factory,MRr=F(),B0=d();function BRr(){var r,e,t,i,n;if(arguments.length===0)r=Oi();else if(arguments.length===1&&bH(arguments[0]))if(t=arguments[0],NH(t,"prng")){if(!EH(t.prng))throw new TypeError(B0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Oi({prng:t.prng})}else r=Oi(t);else{if(n=arguments[0],!PRr(n))throw new TypeError(B0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!bH(t))throw new TypeError(B0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(NH(t,"prng")){if(!EH(t.prng))throw new TypeError(B0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Oi(n/2,.5,{prng:t.prng})}else r=Oi(n/2,.5,t)}else r=Oi(n/2,.5)}return n===void 0?i=m:i=p,e=r.PRNG,nt(i,"NAME","chisquare"),t&&t.prng?(nt(i,"seed",null),nt(i,"seedLength",null),wH(i,"state",AH(null),RRr),nt(i,"stateLength",null),nt(i,"byteLength",null),nt(i,"toJSON",AH(null))):(M0(i,"seed",a),M0(i,"seedLength",s),wH(i,"state",v,c),M0(i,"stateLength",o),M0(i,"byteLength",f),nt(i,"toJSON",l)),nt(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=MRr(e.state),n===void 0?y.params=[]:y.params=[n],y}function p(){return r()}function m(y){return FRr(y)||y<=0?NaN:r(y/2,.5)}}OH.exports=BRr});var TH=u((mne,SH)=>{"use strict";var CRr=O2(),jRr=CRr();SH.exports=jRr});var Fn=u((qne,LH)=>{"use strict";var GRr=b(),IH=TH(),VRr=O2();GRr(IH,"factory",VRr);LH.exports=IH});var S2=u((yne,CH)=>{"use strict";var at=b(),C0=_(),_H=R(),URr=W().isPrimitive,PH=T(),RH=I(),FH=O(),MH=L(),HRr=B(),WRr=E(),Si=Fn().factory,kRr=F(),BH=V(),j0=d();function DRr(){var r,e,t,i,n;if(arguments.length===0)r=Si();else if(arguments.length===1&&PH(arguments[0]))if(t=arguments[0],FH(t,"prng")){if(!RH(t.prng))throw new TypeError(j0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Si({prng:t.prng})}else r=Si(t);else{if(n=arguments[0],!URr(n))throw new TypeError(j0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!PH(t))throw new TypeError(j0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(FH(t,"prng")){if(!RH(t.prng))throw new TypeError(j0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Si(n,{prng:t.prng})}else r=Si(n,t)}else r=Si(n)}return n===void 0?i=m:i=p,e=r.PRNG,at(i,"NAME","chi"),t&&t.prng?(at(i,"seed",null),at(i,"seedLength",null),_H(i,"state",MH(null),HRr),at(i,"stateLength",null),at(i,"byteLength",null),at(i,"toJSON",MH(null))):(C0(i,"seed",a),C0(i,"seedLength",s),_H(i,"state",v,c),C0(i,"stateLength",o),C0(i,"byteLength",f),at(i,"toJSON",l)),at(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=kRr(e.state),n===void 0?y.params=[]:y.params=[n],y}function p(){return BH(r())}function m(y){return WRr(y)||y<=0?NaN:BH(r(y))}}CH.exports=DRr});var GH=u((hne,jH)=>{"use strict";var XRr=S2(),JRr=XRr();jH.exports=JRr});var HH=u((dne,UH)=>{"use strict";var zRr=b(),VH=GH(),YRr=S2();zRr(VH,"factory",YRr);UH.exports=VH});var DH=u((wne,kH)=>{"use strict";var $Rr=j().isPrimitive,QRr=W().isPrimitive,WH=d(),ZRr=ar();function KRr(r,e){return!$Rr(r)||ZRr(r)?new TypeError(WH("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):QRr(e)?null:new TypeError(WH("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}kH.exports=KRr});var JH=u((bne,XH)=>{"use strict";var T2=E(),xRr=tn(),rFr=Ir();function eFr(r,e,t){var i;return T2(r)||T2(e)||T2(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+xRr(i)/rFr)/2)}XH.exports=eFr});var YH=u((Ene,zH)=>{"use strict";var tFr=L(),iFr=S1().factory,I2=E(),nFr=tn(),aFr=Ir();function uFr(r,e){if(I2(r)||I2(e)||e<0)return tFr(NaN);if(e===0)return iFr(r);return t;function t(i){var n;return I2(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+nFr(n)/aFr)/2)}}zH.exports=uFr});var ZH=u((Nne,QH)=>{"use strict";var sFr=b(),$H=JH(),oFr=YH();sFr($H,"factory",oFr);QH.exports=$H});var L2=u((Ane,KH)=>{"use strict";var vFr=ZH(),fFr=1e4,cFr=1e-12;function lFr(r,e,t){var i,n,a,s,o;for(o=1,i=e-t,n=e+t;o<fFr;){if(s=(i+n)/2,n-i<cFr)return s;a=vFr(s,e,t),r>a?i=s:n=s,o+=1}return s}KH.exports=lFr});var rW=u((One,xH)=>{"use strict";var _2=E(),pFr=L2();function gFr(r,e,t){return _2(e)||_2(t)||_2(r)||t<0||r<0||r>1?NaN:t===0?e:pFr(r,e,t)}xH.exports=gFr});var tW=u((Sne,eW)=>{"use strict";var mFr=E();function qFr(r,e){return mFr(r)||r<0||r>1?NaN:e}eW.exports=qFr});var aW=u((Tne,nW)=>{"use strict";var yFr=L(),iW=E();function hFr(r){if(iW(r))return yFr(NaN);return e;function e(t){return iW(t)||t<0||t>1?NaN:r}}nW.exports=hFr});var P2=u((Ine,sW)=>{"use strict";var dFr=b(),uW=tW(),wFr=aW();dFr(uW,"factory",wFr);sW.exports=uW});var vW=u((Lne,oW)=>{"use strict";var bFr=L(),EFr=P2().factory,R2=E(),NFr=L2();function AFr(r,e){if(R2(r)||R2(e)||e<0)return bFr(NaN);if(e===0)return EFr(r);return t;function t(i){return R2(i)||i<0||i>1?NaN:NFr(i,r,e)}}oW.exports=AFr});var lW=u((_ne,cW)=>{"use strict";var OFr=b(),fW=rW(),SFr=vW();OFr(fW,"factory",SFr);cW.exports=fW});var gW=u((Pne,pW)=>{"use strict";var TFr=lW();function IFr(r,e,t){return TFr(r(),e,t)}pW.exports=IFr});var F2=u((Rne,EW)=>{"use strict";var me=b(),G0=_(),mW=R(),qW=T(),yW=I(),hW=O(),dW=L(),LFr=B(),V0=D().factory,wW=E(),_Fr=F(),U0=d(),PFr=DH(),bW=gW();function RFr(){var r,e,t,i,n,a;if(arguments.length===0)e=V0();else if(arguments.length===1){if(r=arguments[0],!qW(r))throw new TypeError(U0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hW(r,"prng")){if(!yW(r.prng))throw new TypeError(U0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=V0(r)}else{if(n=arguments[0],a=arguments[1],i=PFr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!qW(r))throw new TypeError(U0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hW(r,"prng")){if(!yW(r.prng))throw new TypeError(U0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=V0(r)}else e=V0()}return n===void 0?t=y:t=m,me(t,"NAME","cosine"),r&&r.prng?(me(t,"seed",null),me(t,"seedLength",null),mW(t,"state",dW(null),LFr),me(t,"stateLength",null),me(t,"byteLength",null),me(t,"toJSON",dW(null)),me(t,"PRNG",e)):(G0(t,"seed",s),G0(t,"seedLength",o),mW(t,"state",c,l),G0(t,"stateLength",f),G0(t,"byteLength",v),me(t,"toJSON",p),me(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=_Fr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return bW(e,n,a)}function y(q,g){return wW(q)||wW(g)||g<=0?NaN:bW(e,q,g)}}EW.exports=RFr});var AW=u((Fne,NW)=>{"use strict";var FFr=F2(),MFr=FFr();NW.exports=MFr});var TW=u((Mne,SW)=>{"use strict";var BFr=b(),OW=AW(),CFr=F2();BFr(OW,"factory",CFr);SW.exports=OW});var PW=u((Bne,_W)=>{"use strict";var IW=jr().isPrimitive,M2=d(),LW=ar();function jFr(r,e){return!IW(r)||LW(r)?new TypeError(M2("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!IW(e)||LW(e)?new TypeError(M2("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(M2("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}_W.exports=jFr});var MW=u((Cne,FW)=>{"use strict";var B2=vn(),Ti=x();function RW(r,e,t){var i,n,a,s,o,f,v,c,l;if(a=t-e,a===0)return e;if(v=r.MIN,c=r.MAX,n=c-v,n===a)return r()-v+e;if(n<a)for(s=0;;){for(a===B2?(s=Ti(a/(n+1)),a%(n+1)===n&&(s+=1)):s=Ti((a+1)/(n+1)),i=0,f=1;f<=s;){if(i+=(r()-v)*f,f*n===a-f+1)return i;f*=n+1}if(l=RW(r,0,Ti(a/f)),!(l>B2/f)&&(l*=f,i+=l,!(i>a)))return i+e}for(n===B2?(o=Ti(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Ti((n+1)/(a+1));;)if(i=r()-v,i=Ti(i/o),i<=a)return i+e}FW.exports=RW});var C2=u((jne,WW)=>{"use strict";var qe=b(),H0=_(),BW=R(),CW=T(),jW=I(),GW=O(),VW=L(),GFr=B(),W0=D().factory,UW=E(),Ii=Tr(),VFr=F(),ut=d(),UFr=PW(),HW=MW();function HFr(){var r,e,t,i,n,a;if(arguments.length===0)e=W0();else if(arguments.length===1){if(r=arguments[0],!CW(r))throw new TypeError(ut("invalid argument. Options argument must be an object. Value: `%s`.",r));if(GW(r,"prng")){if(!jW(r.prng))throw new TypeError(ut("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Ii(e.MIN))throw new TypeError(ut("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Ii(e.MAX))throw new TypeError(ut("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=W0(r)}else{if(n=arguments[0],a=arguments[1],i=UFr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!CW(r))throw new TypeError(ut("invalid argument. Options argument must be an object. Value: `%s`.",r));if(GW(r,"prng")){if(!jW(r.prng))throw new TypeError(ut("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Ii(e.MIN))throw new TypeError(ut("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Ii(e.MAX))throw new TypeError(ut("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=W0(r)}else e=W0()}return n===void 0?t=y:t=m,qe(t,"NAME","discrete-uniform"),r&&r.prng?(qe(t,"seed",null),qe(t,"seedLength",null),BW(t,"state",VW(null),GFr),qe(t,"stateLength",null),qe(t,"byteLength",null),qe(t,"toJSON",VW(null)),qe(t,"PRNG",e)):(H0(t,"seed",s),H0(t,"seedLength",o),BW(t,"state",c,l),H0(t,"stateLength",f),H0(t,"byteLength",v),qe(t,"toJSON",p),qe(t,"PRNG",e)),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=VFr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return HW(e,n,a)}function y(q,g){return UW(q)||UW(g)||!Ii(q)||!Ii(g)||q>g?NaN:HW(e,q,g)}}WW.exports=HFr});var DW=u((Gne,kW)=>{"use strict";var WFr=C2(),kFr=WFr();kW.exports=kFr});var zW=u((Vne,JW)=>{"use strict";var DFr=b(),XW=DW(),XFr=C2();DFr(XW,"factory",XFr);JW.exports=XW});var QW=u((Une,$W)=>{"use strict";var JFr=W().isPrimitive,zFr=ue().isPrimitive,YW=d();function YFr(r,e){return zFr(r)?JFr(e)?null:new TypeError(YW("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(YW("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}$W.exports=YFr});var KW=u((Hne,ZW)=>{"use strict";var $Fr=C();function QFr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*$Fr(i)}ZW.exports=QFr});var j2=u((Wne,uk)=>{"use strict";var ye=b(),k0=_(),xW=R(),rk=T(),ek=I(),tk=O(),ik=L(),ZFr=B(),D0=D().factory,nk=E(),KFr=d2(),xFr=F(),X0=d(),rMr=QW(),ak=KW();function eMr(){var r,e,t,i,n,a;if(arguments.length===0)e=D0();else if(arguments.length===1){if(t=arguments[0],!rk(t))throw new TypeError(X0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(tk(t,"prng")){if(!ek(t.prng))throw new TypeError(X0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=D0(t)}else{if(a=arguments[0],r=arguments[1],n=rMr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!rk(t))throw new TypeError(X0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(tk(t,"prng")){if(!ek(t.prng))throw new TypeError(X0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=D0(t)}else e=D0()}return a===void 0?i=y:i=m,ye(i,"NAME","erlang"),t&&t.prng?(ye(i,"seed",null),ye(i,"seedLength",null),xW(i,"state",ik(null),ZFr),ye(i,"stateLength",null),ye(i,"byteLength",null),ye(i,"toJSON",ik(null)),ye(i,"PRNG",e)):(k0(i,"seed",s),k0(i,"seedLength",o),xW(i,"state",c,l),k0(i,"stateLength",f),k0(i,"byteLength",v),ye(i,"toJSON",p),ye(i,"PRNG",e),e=e.normalized),i;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=xFr(e.state),a===void 0?q.params=[]:q.params=[a,r],q}function m(){return ak(e,a,r)}function y(q,g){return nk(q)||nk(g)||!KFr(q)||g<=0?NaN:ak(e,q,g)}}uk.exports=eMr});var ok=u((kne,sk)=>{"use strict";var tMr=j2(),iMr=tMr();sk.exports=iMr});var ck=u((Dne,fk)=>{"use strict";var nMr=b(),vk=ok(),aMr=j2();nMr(vk,"factory",aMr);fk.exports=vk});var pk=u((Xne,lk)=>{"use strict";var uMr=C();function sMr(r,e){return-uMr(1-r())/e}lk.exports=sMr});var G2=u((Jne,wk)=>{"use strict";var he=b(),J0=_(),gk=R(),oMr=W().isPrimitive,mk=T(),qk=I(),yk=O(),hk=L(),vMr=B(),z0=D().factory,fMr=E(),cMr=F(),Y0=d(),dk=pk();function lMr(){var r,e,t,i;if(arguments.length===0)t=z0();else if(arguments.length===1&&mk(arguments[0]))if(e=arguments[0],yk(e,"prng")){if(!qk(e.prng))throw new TypeError(Y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=z0(e);else{if(r=arguments[0],!oMr(r))throw new TypeError(Y0("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!mk(e))throw new TypeError(Y0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(yk(e,"prng")){if(!qk(e.prng))throw new TypeError(Y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=z0(e)}else t=z0()}return r===void 0?i=p:i=l,he(i,"NAME","exponential"),e&&e.prng?(he(i,"seed",null),he(i,"seedLength",null),gk(i,"state",hk(null),vMr),he(i,"stateLength",null),he(i,"byteLength",null),he(i,"toJSON",hk(null)),he(i,"PRNG",t)):(J0(i,"seed",n),J0(i,"seedLength",a),gk(i,"state",f,v),J0(i,"stateLength",s),J0(i,"byteLength",o),he(i,"toJSON",c),he(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=cMr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return dk(t,r)}function p(m){return fMr(m)||m<=0?NaN:dk(t,m)}}wk.exports=lMr});var Ek=u((zne,bk)=>{"use strict";var pMr=G2(),gMr=pMr();bk.exports=gMr});var Ok=u((Yne,Ak)=>{"use strict";var mMr=b(),Nk=Ek(),qMr=G2();mMr(Nk,"factory",qMr);Ak.exports=Nk});var Lk=u(($ne,Ik)=>{"use strict";var Sk=W().isPrimitive,Tk=d();function yMr(r,e){return Sk(r)?Sk(e)?null:new TypeError(Tk("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(Tk("invalid argument. First argument must be a positive number. Value: `%s`.",r))}Ik.exports=yMr});var Pk=u((Qne,_k)=>{"use strict";function hMr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}_k.exports=hMr});var V2=u((Zne,Vk)=>{"use strict";var st=b(),$0=_(),Rk=R(),Fk=T(),Mk=I(),Bk=O(),Ck=L(),dMr=B(),Li=Fn().factory,jk=E(),wMr=F(),Q0=d(),bMr=Lk(),Gk=Pk();function EMr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=Li();else if(arguments.length===1){if(e=arguments[0],!Fk(e))throw new TypeError(Q0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Bk(e,"prng")){if(!Mk(e.prng))throw new TypeError(Q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Li({prng:e.prng})}else r=Li(e)}else{if(a=arguments[0],s=arguments[1],n=bMr(a,s),n)throw n;if(arguments.length>2){if(e=arguments[2],!Fk(e))throw new TypeError(Q0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Bk(e,"prng")){if(!Mk(e.prng))throw new TypeError(Q0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Li({prng:e.prng})}else r=Li(e)}else r=Li()}return a===void 0?i=q:i=y,t=r.PRNG,st(i,"NAME","f"),e&&e.prng?(st(i,"seed",null),st(i,"seedLength",null),Rk(i,"state",Ck(null),dMr),st(i,"stateLength",null),st(i,"byteLength",null),st(i,"toJSON",Ck(null))):($0(i,"seed",o),$0(i,"seedLength",f),Rk(i,"state",l,p),$0(i,"stateLength",v),$0(i,"byteLength",c),st(i,"toJSON",m)),st(i,"PRNG",t),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=wMr(t.state),a===void 0?g.params=[]:g.params=[a,s],g}function y(){return Gk(r,a,s)}function q(g,h){return jk(g)||jk(h)||g<=0||h<=0?NaN:Gk(r,g,h)}}Vk.exports=EMr});var Hk=u((Kne,Uk)=>{"use strict";var NMr=V2(),AMr=NMr();Uk.exports=AMr});var Dk=u((xne,kk)=>{"use strict";var OMr=b(),Wk=Hk(),SMr=V2();OMr(Wk,"factory",SMr);kk.exports=Wk});var zk=u((rae,Jk)=>{"use strict";var Xk=W().isPrimitive,TMr=j().isPrimitive,U2=ar(),H2=d();function IMr(r,e,t){return!Xk(r)||U2(r)?new TypeError(H2("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!Xk(e)||U2(e)?new TypeError(H2("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!TMr(t)||U2(t)?new TypeError(H2("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}Jk.exports=IMr});var $k=u((eae,Yk)=>{"use strict";var LMr=$(),_Mr=C();function PMr(r,e,t,i){return i+t*LMr(-_Mr(r()),-1/e)}Yk.exports=PMr});var k2=u((tae,tD)=>{"use strict";var de=b(),Z0=_(),Qk=R(),Zk=T(),Kk=I(),xk=O(),rD=L(),RMr=B(),K0=D().factory,W2=E(),FMr=F(),x0=d(),MMr=zk(),eD=$k();function BMr(){var r,e,t,i,n,a,s;if(arguments.length===0)t=K0();else if(arguments.length===1){if(e=arguments[0],!Zk(e))throw new TypeError(x0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(xk(e,"prng")){if(!Kk(e.prng))throw new TypeError(x0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=K0(e)}else{if(r=arguments[0],a=arguments[1],s=arguments[2],n=MMr(r,a,s),n)throw n;if(arguments.length>3){if(e=arguments[3],!Zk(e))throw new TypeError(x0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(xk(e,"prng")){if(!Kk(e.prng))throw new TypeError(x0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=K0(e)}else t=K0()}return r===void 0?i=q:i=y,de(i,"NAME","frechet"),e&&e.prng?(de(i,"seed",null),de(i,"seedLength",null),Qk(i,"state",rD(null),RMr),de(i,"stateLength",null),de(i,"byteLength",null),de(i,"toJSON",rD(null)),de(i,"PRNG",t)):(Z0(i,"seed",o),Z0(i,"seedLength",f),Qk(i,"state",l,p),Z0(i,"stateLength",v),Z0(i,"byteLength",c),de(i,"toJSON",m),de(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=FMr(t.state),r===void 0?g.params=[]:g.params=[r,a,s],g}function y(){return eD(t,r,a,s)}function q(g,h,N){return W2(g)||W2(h)||W2(N)||g<=0||h<=0?NaN:eD(t,g,h,N)}}tD.exports=BMr});var nD=u((iae,iD)=>{"use strict";var CMr=k2(),jMr=CMr();iD.exports=jMr});var sD=u((nae,uD)=>{"use strict";var GMr=b(),aD=nD(),VMr=k2();GMr(aD,"factory",VMr);uD.exports=aD});var fD=u((aae,vD)=>{"use strict";var UMr=x(),oD=C();function HMr(r,e){var t=r();return t===0&&(t=r()),UMr(oD(t)/oD(1-e))}vD.exports=HMr});var D2=u((uae,yD)=>{"use strict";var we=b(),ru=_(),cD=R(),lD=T(),WMr=dn().isPrimitive,pD=I(),gD=O(),mD=L(),kMr=B(),eu=D().factory,DMr=E(),XMr=F(),tu=d(),qD=fD();function JMr(){var r,e,t,i;if(arguments.length===0)e=eu();else if(arguments.length===1&&lD(arguments[0]))if(r=arguments[0],gD(r,"prng")){if(!pD(r.prng))throw new TypeError(tu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=eu(r);else{if(i=arguments[0],!WMr(i))throw new TypeError(tu("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!lD(r))throw new TypeError(tu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(gD(r,"prng")){if(!pD(r.prng))throw new TypeError(tu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=eu(r)}else e=eu()}return i===void 0?t=p:t=l,we(t,"NAME","geometric"),r&&r.prng?(we(t,"seed",null),we(t,"seedLength",null),cD(t,"state",mD(null),kMr),we(t,"stateLength",null),we(t,"byteLength",null),we(t,"toJSON",mD(null)),we(t,"PRNG",e)):(ru(t,"seed",n),ru(t,"seedLength",a),cD(t,"state",f,v),ru(t,"stateLength",s),ru(t,"byteLength",o),we(t,"toJSON",c),we(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=XMr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return qD(e,i)}function p(m){return DMr(m)||m<0||m>1?NaN:qD(e,m)}}yD.exports=JMr});var dD=u((sae,hD)=>{"use strict";var zMr=D2(),YMr=zMr();hD.exports=YMr});var ED=u((oae,bD)=>{"use strict";var $Mr=b(),wD=dD(),QMr=D2();$Mr(wD,"factory",QMr);bD.exports=wD});var OD=u((vae,AD)=>{"use strict";var ZMr=j().isPrimitive,KMr=W().isPrimitive,ND=d(),xMr=ar();function rBr(r,e){return!ZMr(r)||xMr(r)?new TypeError(ND("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):KMr(e)?null:new TypeError(ND("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}AD.exports=rBr});var ID=u((fae,TD)=>{"use strict";var SD=C();function eBr(r,e,t){return e-t*SD(-SD(r()))}TD.exports=eBr});var X2=u((cae,CD)=>{"use strict";var be=b(),iu=_(),LD=R(),_D=T(),PD=I(),RD=O(),FD=L(),tBr=B(),nu=D().factory,MD=E(),iBr=F(),au=d(),nBr=OD(),BD=ID();function aBr(){var r,e,t,i,n,a;if(arguments.length===0)t=nu();else if(arguments.length===1){if(e=arguments[0],!_D(e))throw new TypeError(au("invalid argument. Options argument must be an object. Value: `%s`.",e));if(RD(e,"prng")){if(!PD(e.prng))throw new TypeError(au("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=nu(e)}else{if(a=arguments[0],r=arguments[1],n=nBr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!_D(e))throw new TypeError(au("invalid argument. Options argument must be an object. Value: `%s`.",e));if(RD(e,"prng")){if(!PD(e.prng))throw new TypeError(au("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=nu(e)}else t=nu()}return a===void 0?i=y:i=m,be(i,"NAME","gumbel"),e&&e.prng?(be(i,"seed",null),be(i,"seedLength",null),LD(i,"state",FD(null),tBr),be(i,"stateLength",null),be(i,"byteLength",null),be(i,"toJSON",FD(null)),be(i,"PRNG",t)):(iu(i,"seed",s),iu(i,"seedLength",o),LD(i,"state",c,l),iu(i,"stateLength",f),iu(i,"byteLength",v),be(i,"toJSON",p),be(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(q){t.state=q}function p(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=iBr(t.state),a===void 0?q.params=[]:q.params=[a,r],q}function m(){return BD(t,a,r)}function y(q,g){return MD(q)||MD(g)||g<=0?NaN:BD(t,q,g)}}CD.exports=aBr});var GD=u((lae,jD)=>{"use strict";var uBr=X2(),sBr=uBr();jD.exports=sBr});var HD=u((pae,UD)=>{"use strict";var oBr=b(),VD=GD(),vBr=X2();oBr(VD,"factory",vBr);UD.exports=VD});var kD=u((gae,WD)=>{"use strict";var fBr=x();function cBr(r){return fBr(r)===r&&r>=0}WD.exports=cBr});var XD=u((mae,DD)=>{"use strict";var lBr=kD();DD.exports=lBr});var zD=u((qae,JD)=>{"use strict";var J2=Ge().isPrimitive,Mn=d();function pBr(r,e,t){return J2(r)?J2(e)?J2(t)?t>r?new RangeError(Mn("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(Mn("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(Mn("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(Mn("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(Mn("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}JD.exports=pBr});var YD=u((yae,gBr)=>{gBr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var QD=u((hae,$D)=>{"use strict";var mBr=E(),qBr=Tr(),yBr=ti(),hBr=P(),dBr=YD(),wBr=170;function bBr(r){return mBr(r)?NaN:qBr(r)?r<0?NaN:r<=wBr?dBr[r]:hBr:yBr(r+1)}$D.exports=bBr});var KD=u((dae,ZD)=>{"use strict";var EBr=QD();ZD.exports=EBr});var rX=u((wae,xD)=>{"use strict";var ot=KD();function NBr(r,e,t,i){var n,a,s;for(i<t?(n=ot(t)*ot(e+t-i)/(ot(e+t)*ot(t-i)),s=0):(n=ot(e)*ot(i)/(ot(i-t)*ot(e+t)),s=i-t),a=r();a>n;)a-=n,n*=(e-s)*(i-s)/((s+1)*(t-i+1+s)),s+=1;return s}xD.exports=NBr});var tX=u((bae,eX)=>{"use strict";var uu=rX();function ABr(r,e,t,i){var n,a,s,o;return i>e/2?(s=e-i,2*t<=e?(n=t,a=e-t,o=uu(r,n,a,s),t-o):(a=t,n=e-t,o=uu(r,n,a,s),i-e+t+o)):(s=i,2*t<=e?(n=t,a=e-t,o=uu(r,n,a,s),o):(n=e-t,a=t,o=uu(r,n,a,s),i-o))}eX.exports=ABr});var Y2=u((Eae,fX)=>{"use strict";var Ee=b(),su=_(),iX=R(),nX=T(),aX=I(),uX=O(),sX=L(),OBr=B(),ou=D().factory,z2=XD(),oX=P(),SBr=F(),vu=d(),TBr=zD(),vX=tX();function IBr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=ou();else if(arguments.length===1){if(r=arguments[0],!nX(r))throw new TypeError(vu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(uX(r,"prng")){if(!aX(r.prng))throw new TypeError(vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ou(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=TBr(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!nX(r))throw new TypeError(vu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(uX(r,"prng")){if(!aX(r.prng))throw new TypeError(vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=ou(r)}else e=ou()}return n===void 0?t=q:t=y,Ee(t,"NAME","hypergeometric"),r&&r.prng?(Ee(t,"seed",null),Ee(t,"seedLength",null),iX(t,"state",sX(null),OBr),Ee(t,"stateLength",null),Ee(t,"byteLength",null),Ee(t,"toJSON",sX(null)),Ee(t,"PRNG",e)):(su(t,"seed",o),su(t,"seedLength",f),iX(t,"state",l,p),su(t,"stateLength",v),su(t,"byteLength",c),Ee(t,"toJSON",m),Ee(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=SBr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function y(){return vX(e,n,a,s)}function q(g,h,N){return g===oX||h===oX||!z2(g)||!z2(h)||!z2(N)||N>g?NaN:vX(e,g,h,N)}}fX.exports=IBr});var lX=u((Nae,cX)=>{"use strict";var LBr=Y2(),_Br=LBr();cX.exports=_Br});var mX=u((Aae,gX)=>{"use strict";var PBr=b(),pX=lX(),RBr=Y2();PBr(pX,"factory",RBr);gX.exports=pX});var dX=u((Oae,hX)=>{"use strict";var qX=W().isPrimitive,yX=d();function FBr(r,e){return qX(r)?qX(e)?null:new TypeError(yX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(yX("invalid argument. First argument must be a positive number. Value: `%s`.",r))}hX.exports=FBr});var $2=u((Sae,SX)=>{"use strict";var vt=b(),fu=_(),wX=R(),bX=T(),EX=I(),NX=O(),AX=L(),MBr=B(),_i=Ni().factory,OX=E(),BBr=F(),cu=d(),CBr=dX();function jBr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=_i();else if(arguments.length===1){if(i=arguments[0],!bX(i))throw new TypeError(cu("invalid argument. Options argument must be an object. Value: `%s`.",i));if(NX(i,"prng")){if(!EX(i.prng))throw new TypeError(cu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=_i({prng:i.prng})}else r=_i(i)}else{if(e=arguments[0],t=arguments[1],s=CBr(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!bX(i))throw new TypeError(cu("invalid argument. Options argument must be an object. Value: `%s`.",i));if(NX(i,"prng")){if(!EX(i.prng))throw new TypeError(cu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=_i(e,t,{prng:i.prng})}else r=_i(e,t,i)}else r=_i(e,t)}return e===void 0?a=q:a=y,n=r.PRNG,vt(a,"NAME","invgamma"),i&&i.prng?(vt(a,"seed",null),vt(a,"seedLength",null),wX(a,"state",AX(null),MBr),vt(a,"stateLength",null),vt(a,"byteLength",null),vt(a,"toJSON",AX(null))):(fu(a,"seed",o),fu(a,"seedLength",f),wX(a,"state",l,p),fu(a,"stateLength",v),fu(a,"byteLength",c),vt(a,"toJSON",m)),vt(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=BBr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function y(){return 1/r()}function q(g,h){return OX(g)||OX(h)||g<=0||h<=0?NaN:1/r(g,h)}}SX.exports=jBr});var IX=u((Tae,TX)=>{"use strict";var GBr=$2(),VBr=GBr();TX.exports=VBr});var PX=u((Iae,_X)=>{"use strict";var UBr=b(),LX=IX(),HBr=$2();UBr(LX,"factory",HBr);_X.exports=LX});var BX=u((Lae,MX)=>{"use strict";var RX=W().isPrimitive,FX=d();function WBr(r,e){return RX(r)?RX(e)?null:new TypeError(FX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(FX("invalid argument. First argument must be a positive number. Value: `%s`.",r))}MX.exports=WBr});var GX=u((_ae,jX)=>{"use strict";var CX=$();function kBr(r,e,t){var i=r();return CX(1-CX(1-i,1/t),1/e)}jX.exports=kBr});var Q2=u((Pae,JX)=>{"use strict";var Ne=b(),lu=_(),VX=R(),UX=T(),HX=I(),WX=O(),kX=L(),DBr=B(),pu=D().factory,DX=E(),XBr=F(),gu=d(),JBr=BX(),XX=GX();function zBr(){var r,e,t,i,n,a;if(arguments.length===0)e=pu();else if(arguments.length===1){if(r=arguments[0],!UX(r))throw new TypeError(gu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(WX(r,"prng")){if(!HX(r.prng))throw new TypeError(gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=pu(r)}else{if(n=arguments[0],a=arguments[1],i=JBr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!UX(r))throw new TypeError(gu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(WX(r,"prng")){if(!HX(r.prng))throw new TypeError(gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=pu(r)}else e=pu()}return n===void 0?t=y:t=m,Ne(t,"NAME","kumaraswamy"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),VX(t,"state",kX(null),DBr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",kX(null)),Ne(t,"PRNG",e)):(lu(t,"seed",s),lu(t,"seedLength",o),VX(t,"state",c,l),lu(t,"stateLength",f),lu(t,"byteLength",v),Ne(t,"toJSON",p),Ne(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=XBr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return XX(e,n,a)}function y(q,g){return DX(q)||DX(g)||q<=0||g<=0?NaN:XX(e,q,g)}}JX.exports=zBr});var YX=u((Rae,zX)=>{"use strict";var YBr=Q2(),$Br=YBr();zX.exports=$Br});var ZX=u((Fae,QX)=>{"use strict";var QBr=b(),$X=YX(),ZBr=Q2();QBr($X,"factory",ZBr);QX.exports=$X});var rJ=u((Mae,xX)=>{"use strict";var KBr=j().isPrimitive,xBr=W().isPrimitive,KX=d(),rCr=ar();function eCr(r,e){return!KBr(r)||rCr(r)?new TypeError(KX("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):xBr(e)?null:new TypeError(KX("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}xX.exports=eCr});var tJ=u((Bae,eJ)=>{"use strict";var tCr=O0(),iCr=Y(),nCr=C();function aCr(r,e,t){var i=r()-.5;return e-t*tCr(i)*nCr(1-2*iCr(i))}eJ.exports=aCr});var Z2=u((Cae,fJ)=>{"use strict";var Ae=b(),mu=_(),iJ=R(),nJ=T(),aJ=I(),uJ=O(),sJ=L(),uCr=B(),qu=D().factory,oJ=E(),sCr=F(),yu=d(),oCr=rJ(),vJ=tJ();function vCr(){var r,e,t,i,n,a;if(arguments.length===0)e=qu();else if(arguments.length===1){if(r=arguments[0],!nJ(r))throw new TypeError(yu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(uJ(r,"prng")){if(!aJ(r.prng))throw new TypeError(yu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=qu(r)}else{if(n=arguments[0],a=arguments[1],i=oCr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!nJ(r))throw new TypeError(yu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(uJ(r,"prng")){if(!aJ(r.prng))throw new TypeError(yu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=qu(r)}else e=qu()}return n===void 0?t=y:t=m,Ae(t,"NAME","laplace"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),iJ(t,"state",sJ(null),uCr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",sJ(null)),Ae(t,"PRNG",e)):(mu(t,"seed",s),mu(t,"seedLength",o),iJ(t,"state",c,l),mu(t,"stateLength",f),mu(t,"byteLength",v),Ae(t,"toJSON",p),Ae(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=sCr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return vJ(e,n,a)}function y(q,g){return oJ(q)||oJ(g)||g<=0?NaN:vJ(e,q,g)}}fJ.exports=vCr});var lJ=u((jae,cJ)=>{"use strict";var fCr=Z2(),cCr=fCr();cJ.exports=cCr});var mJ=u((Gae,gJ)=>{"use strict";var lCr=b(),pJ=lJ(),pCr=Z2();lCr(pJ,"factory",pCr);gJ.exports=pJ});var hJ=u((Vae,yJ)=>{"use strict";var gCr=j().isPrimitive,mCr=W().isPrimitive,qJ=d(),qCr=ar();function yCr(r,e){return!gCr(r)||qCr(r)?new TypeError(qJ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):mCr(e)?null:new TypeError(qJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}yJ.exports=yCr});var wJ=u((Uae,dJ)=>{"use strict";function hCr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}dJ.exports=hCr});var EJ=u((Hae,bJ)=>{"use strict";function dCr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}bJ.exports=dCr});var AJ=u((Wae,NJ)=>{"use strict";function wCr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}NJ.exports=wCr});var SJ=u((kae,OJ)=>{"use strict";function bCr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}OJ.exports=bCr});var IJ=u((Dae,TJ)=>{"use strict";function ECr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}TJ.exports=ECr});var RJ=u((Xae,PJ)=>{"use strict";var NCr=E(),LJ=V(),_J=C(),ACr=P(),OCr=X(),SCr=wJ(),TCr=EJ(),ICr=AJ(),LCr=SJ(),_Cr=IJ(),PCr=.08913147449493408,RCr=2.249481201171875,FCr=.807220458984375,MCr=.9399557113647461,BCr=.9836282730102539;function CCr(r){var e,t,i,n,a,s;return NCr(r)?NaN:r===1?ACr:r===-1?OCr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),s=SCr(t),e*(a*PCr+a*s)):n>=.25?(a=LJ(-2*_J(n)),n-=.25,s=TCr(n),e*(a/(RCr+s))):(n=LJ(-_J(n)),n<3?(i=n-1.125,s=ICr(i),e*(FCr*n+s*n)):n<6?(i=n-3,s=LCr(i),e*(MCr*n+s*n)):(i=n-6,s=_Cr(i),e*(BCr*n+s*n))))}PJ.exports=CCr});var K2=u((Jae,FJ)=>{"use strict";var jCr=RJ();FJ.exports=jCr});var BJ=u((zae,MJ)=>{"use strict";var GCr=K2(),x2=E(),VCr=V();function UCr(r,e,t){var i,n;return x2(e)||x2(t)||x2(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*VCr(2),i+n*GCr(2*r-1))}MJ.exports=UCr});var jJ=u((Yae,CJ)=>{"use strict";var HCr=L(),WCr=P2().factory,kCr=K2(),rf=E(),DCr=V();function XCr(r,e){var t,i;if(rf(r)||rf(e)||e<0)return HCr(NaN);return e===0&&WCr(r),t=r,i=e*DCr(2),n;function n(a){return rf(a)||a<0||a>1?NaN:t+i*kCr(2*a-1)}}CJ.exports=XCr});var UJ=u(($ae,VJ)=>{"use strict";var JCr=b(),GJ=BJ(),zCr=jJ();JCr(GJ,"factory",zCr);VJ.exports=GJ});var WJ=u((Qae,HJ)=>{"use strict";var YCr=UJ();function $Cr(r,e,t){var i=YCr(1-r()/2,0,1);return e+t/(i*i)}HJ.exports=$Cr});var ef=u((Zae,QJ)=>{"use strict";var Oe=b(),hu=_(),kJ=R(),DJ=T(),XJ=I(),JJ=O(),zJ=L(),QCr=B(),du=D().factory,YJ=E(),ZCr=F(),wu=d(),KCr=hJ(),$J=WJ();function xCr(){var r,e,t,i,n,a;if(arguments.length===0)e=du();else if(arguments.length===1){if(r=arguments[0],!DJ(r))throw new TypeError(wu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(JJ(r,"prng")){if(!XJ(r.prng))throw new TypeError(wu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=du(r)}else{if(n=arguments[0],a=arguments[1],i=KCr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!DJ(r))throw new TypeError(wu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(JJ(r,"prng")){if(!XJ(r.prng))throw new TypeError(wu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=du(r)}else e=du()}return n===void 0?t=y:t=m,Oe(t,"NAME","levy"),r&&r.prng?(Oe(t,"seed",null),Oe(t,"seedLength",null),kJ(t,"state",zJ(null),QCr),Oe(t,"stateLength",null),Oe(t,"byteLength",null),Oe(t,"toJSON",zJ(null)),Oe(t,"PRNG",e)):(hu(t,"seed",s),hu(t,"seedLength",o),kJ(t,"state",c,l),hu(t,"stateLength",f),hu(t,"byteLength",v),Oe(t,"toJSON",p),Oe(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=ZCr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return $J(e,n,a)}function y(q,g){return YJ(q)||YJ(g)||g<=0?NaN:$J(e,q,g)}}QJ.exports=xCr});var KJ=u((Kae,ZJ)=>{"use strict";var rjr=ef(),ejr=rjr();ZJ.exports=ejr});var ez=u((xae,rz)=>{"use strict";var tjr=b(),xJ=KJ(),ijr=ef();tjr(xJ,"factory",ijr);rz.exports=xJ});var nz=u((r0e,iz)=>{"use strict";var njr=j().isPrimitive,ajr=W().isPrimitive,ujr=ar(),tz=d();function sjr(r,e){return!njr(r)||ujr(r)?new TypeError(tz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):ajr(e)?null:new TypeError(tz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}iz.exports=sjr});var uz=u((e0e,az)=>{"use strict";var ojr=C();function vjr(r,e,t){var i=r();return e+t*ojr(i/(1-i))}az.exports=vjr});var tf=u((t0e,gz)=>{"use strict";var Se=b(),bu=_(),sz=R(),oz=T(),vz=I(),fz=O(),cz=L(),fjr=B(),Eu=D().factory,lz=E(),cjr=F(),Nu=d(),ljr=nz(),pz=uz();function pjr(){var r,e,t,i,n,a;if(arguments.length===0)e=Eu();else if(arguments.length===1){if(r=arguments[0],!oz(r))throw new TypeError(Nu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(fz(r,"prng")){if(!vz(r.prng))throw new TypeError(Nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Eu(r)}else{if(n=arguments[0],a=arguments[1],i=ljr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!oz(r))throw new TypeError(Nu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(fz(r,"prng")){if(!vz(r.prng))throw new TypeError(Nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Eu(r)}else e=Eu()}return n===void 0?t=y:t=m,Se(t,"NAME","logistic"),r&&r.prng?(Se(t,"seed",null),Se(t,"seedLength",null),sz(t,"state",cz(null),fjr),Se(t,"stateLength",null),Se(t,"byteLength",null),Se(t,"toJSON",cz(null)),Se(t,"PRNG",e)):(bu(t,"seed",s),bu(t,"seedLength",o),sz(t,"state",c,l),bu(t,"stateLength",f),bu(t,"byteLength",v),Se(t,"toJSON",p),Se(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=cjr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return pz(e,n,a)}function y(q,g){return lz(q)||lz(g)||g<=0?NaN:pz(e,q,g)}}gz.exports=pjr});var qz=u((i0e,mz)=>{"use strict";var gjr=tf(),mjr=gjr();mz.exports=mjr});var dz=u((n0e,hz)=>{"use strict";var qjr=b(),yz=qz(),yjr=tf();qjr(yz,"factory",yjr);hz.exports=yz});var Ez=u((a0e,bz)=>{"use strict";var hjr=j().isPrimitive,djr=W().isPrimitive,wz=d(),wjr=ar();function bjr(r,e){return!hjr(r)||wjr(r)?new TypeError(wz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):djr(e)?null:new TypeError(wz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}bz.exports=bjr});var Az=u((u0e,Nz)=>{"use strict";var Ejr=fr();function Njr(r,e,t){return Ejr(e+t*r())}Nz.exports=Njr});var nf=u((s0e,Rz)=>{"use strict";var ft=b(),Au=_(),Oz=R(),Sz=T(),Tz=I(),Iz=O(),Lz=L(),Ajr=B(),Pi=et().factory,_z=E(),Ojr=F(),Ou=d(),Sjr=Ez(),Pz=Az();function Tjr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=Pi();else if(arguments.length===1){if(t=arguments[0],!Sz(t))throw new TypeError(Ou("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Iz(t,"prng")){if(!Tz(t.prng))throw new TypeError(Ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Pi({prng:t.prng})}else e=Pi(t)}else{if(s=arguments[0],r=arguments[1],a=Sjr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!Sz(t))throw new TypeError(Ou("invalid argument. Options argument must be an object. Value: `%s`.",t));if(Iz(t,"prng")){if(!Tz(t.prng))throw new TypeError(Ou("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Pi({prng:t.prng})}else e=Pi(t)}else e=Pi()}return s===void 0?n=q:n=y,i=e.PRNG,ft(n,"NAME","lognormal"),t&&t.prng?(ft(n,"seed",null),ft(n,"seedLength",null),Oz(n,"state",Lz(null),Ajr),ft(n,"stateLength",null),ft(n,"byteLength",null),ft(n,"toJSON",Lz(null))):(Au(n,"seed",o),Au(n,"seedLength",f),Oz(n,"state",l,p),Au(n,"stateLength",v),Au(n,"byteLength",c),ft(n,"toJSON",m)),ft(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=Ojr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return Pz(e,s,r)}function q(g,h){return _z(g)||_z(h)||h<=0?NaN:Pz(e,g,h)}}Rz.exports=Tjr});var Mz=u((o0e,Fz)=>{"use strict";var Ijr=nf(),Ljr=Ijr();Fz.exports=Ljr});var jz=u((v0e,Cz)=>{"use strict";var _jr=b(),Bz=Mz(),Pjr=nf();_jr(Bz,"factory",Pjr);Cz.exports=Bz});var af=u((f0e,Gz)=>{"use strict";var Rjr=Kt(),Fjr=x(),Mjr=Rjr-1;function Bjr(){var r=Fjr(1+Mjr*Math.random());return r|0}Gz.exports=Bjr});var of=u((c0e,kz)=>{"use strict";var Te=b(),ct=_(),Vz=R(),uf=O(),Cjr=T(),jjr=or().isPrimitive,Gjr=Gr(),Vjr=ue().isPrimitive,Uz=Zn(),kr=d(),Su=Kt(),br=Nt(),Ri=Qe(),Ujr=F(),Hz=af(),sf=Su-1|0,Hjr=Su-1|0,Wjr=16807,Tu=1,Iu=2,lt=2,Er=4,Bn=5;function Wz(r,e){var t;return e?t="option":t="argument",r.length<Bn+1?new RangeError(kr("invalid %s. State array has insufficient length.",t)):r[0]!==Tu?new RangeError(kr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Tu,r[0])):r[1]!==Iu?new RangeError(kr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Iu,r[1])):r[lt]!==1?new RangeError(kr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[lt])):r[Er]!==r.length-Bn?new RangeError(kr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Bn,r[Er])):null}function kjr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!Cjr(r))throw new TypeError(kr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(uf(r,"copy")&&(i.copy=r.copy,!jjr(r.copy)))throw new TypeError(kr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(uf(r,"state")){if(t=r.state,i.state=!0,!Uz(t))throw new TypeError(kr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(s=Wz(t,!0),s)throw s;i.copy===!1?e=t:(e=new br(t.length),Ri(t.length,t,1,e,1)),t=new br(e.buffer,e.byteOffset+(lt+1)*e.BYTES_PER_ELEMENT,1),n=new br(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,t[Er])}if(n===void 0)if(uf(r,"seed"))if(n=r.seed,i.seed=!0,Vjr(n)){if(n>Hjr)throw new RangeError(kr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(Gjr(n)&&n.length>0)a=n.length,e=new br(Bn+a),e[0]=Tu,e[1]=Iu,e[lt]=1,e[Er]=a,Ri.ndarray(a,n,1,0,e,1,Er+1),t=new br(e.buffer,e.byteOffset+(lt+1)*e.BYTES_PER_ELEMENT,1),n=new br(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(kr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=Hz()|0}else n=Hz()|0;return t===void 0&&(e=new br(Bn+1),e[0]=Tu,e[1]=Iu,e[lt]=1,e[Er]=1,e[Er+1]=n,t=new br(e.buffer,e.byteOffset+(lt+1)*e.BYTES_PER_ELEMENT,1),n=new br(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),Te(y,"NAME","minstd"),ct(y,"seed",o),ct(y,"seedLength",f),Vz(y,"state",l,p),ct(y,"stateLength",v),ct(y,"byteLength",c),Te(y,"toJSON",m),Te(y,"MIN",1),Te(y,"MAX",Su-1),Te(y,"normalized",q),Te(q,"NAME",y.NAME),ct(q,"seed",o),ct(q,"seedLength",f),Vz(q,"state",l,p),ct(q,"stateLength",v),ct(q,"byteLength",c),Te(q,"toJSON",m),Te(q,"MIN",(y.MIN-1)/sf),Te(q,"MAX",(y.MAX-1)/sf),y;function o(){var g=e[Er];return Ri(g,n,1,new br(g),1)}function f(){return e[Er]}function v(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return Ri(g,e,1,new br(g),1)}function p(g){var h;if(!Uz(g))throw new TypeError(kr("invalid argument. Must provide an Int32Array. Value: `%s`.",g));if(h=Wz(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?Ri(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new br(g.length)),Ri(g.length,g,1,e,1)),t=new br(e.buffer,e.byteOffset+(lt+1)*e.BYTES_PER_ELEMENT,1),n=new br(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,e[Er])}function m(){var g={};return g.type="PRNG",g.name=y.NAME,g.state=Ujr(e),g.params=[],g}function y(){var g=t[0]|0;return g=Wjr*g%Su|0,t[0]=g,g|0}function q(){return(y()-1)/sf}}kz.exports=kjr});var Xz=u((l0e,Dz)=>{"use strict";var Djr=of(),Xjr=af(),Jjr=Djr({seed:Xjr()});Dz.exports=Jjr});var Yz=u((p0e,zz)=>{"use strict";var zjr=b(),Jz=Xz(),Yjr=of();zjr(Jz,"factory",Yjr);zz.exports=Jz});var Qz=u((g0e,$z)=>{"use strict";var $jr=E(),Qjr=8;function Zjr(r,e,t){var i,n;for(n=0;n<Qjr;n++)if(i=r(),$jr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}$z.exports=Zjr});var vf=u((m0e,Zz)=>{"use strict";var Kjr=Kt(),xjr=x(),rGr=Kjr-1;function eGr(){var r=xjr(1+rGr*Math.random());return r|0}Zz.exports=eGr});var lf=u((q0e,iY)=>{"use strict";var Ie=b(),pt=_(),Kz=R(),ff=O(),tGr=T(),iGr=or().isPrimitive,nGr=Gr(),aGr=ue().isPrimitive,xz=Zn(),Fi=Qe(),uGr=x(),Nr=Nt(),Cn=Kt(),sGr=F(),Cr=d(),rY=Qz(),eY=vf(),cf=Cn-1|0,oGr=Cn-1|0,vGr=16807,Or=32,Pu=1,Ru=3,gt=2,Mi=Or+3,Ar=Or+6,jn=Or+7,Lu=Mi+1,_u=Mi+2;function tY(r,e){var t;return e?t="option":t="argument",r.length<jn+1?new RangeError(Cr("invalid %s. State array has insufficient length.",t)):r[0]!==Pu?new RangeError(Cr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Pu,r[0])):r[1]!==Ru?new RangeError(Cr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Ru,r[1])):r[gt]!==Or?new RangeError(Cr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Or,r[gt])):r[Mi]!==2?new RangeError(Cr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[Mi])):r[Ar]!==r.length-jn?new RangeError(Cr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-jn,r[Ar])):null}function fGr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!tGr(r))throw new TypeError(Cr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ff(r,"copy")&&(i.copy=r.copy,!iGr(r.copy)))throw new TypeError(Cr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(ff(r,"state")){if(t=r.state,i.state=!0,!xz(t))throw new TypeError(Cr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(s=tY(t,!0),s)throw s;i.copy===!1?e=t:(e=new Nr(t.length),Fi(t.length,t,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(gt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,t[Ar])}if(n===void 0)if(ff(r,"seed"))if(n=r.seed,i.seed=!0,aGr(n)){if(n>oGr)throw new RangeError(Cr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(nGr(n)&&n.length>0)a=n.length,e=new Nr(jn+a),e[0]=Pu,e[1]=Ru,e[gt]=Or,e[Mi]=2,e[_u]=n[0],e[Ar]=a,Fi.ndarray(a,n,1,0,e,1,Ar+1),t=new Nr(e.buffer,e.byteOffset+(gt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,a),t=rY(y,t,Or),e[Lu]=t[0];else throw new TypeError(Cr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=eY()|0}else n=eY()|0;return t===void 0&&(e=new Nr(jn+1),e[0]=Pu,e[1]=Ru,e[gt]=Or,e[Mi]=2,e[_u]=n,e[Ar]=1,e[Ar+1]=n,t=new Nr(e.buffer,e.byteOffset+(gt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,1),t=rY(y,t,Or),e[Lu]=t[0]),Ie(q,"NAME","minstd-shuffle"),pt(q,"seed",o),pt(q,"seedLength",f),Kz(q,"state",l,p),pt(q,"stateLength",v),pt(q,"byteLength",c),Ie(q,"toJSON",m),Ie(q,"MIN",1),Ie(q,"MAX",Cn-1),Ie(q,"normalized",g),Ie(g,"NAME",q.NAME),pt(g,"seed",o),pt(g,"seedLength",f),Kz(g,"state",l,p),pt(g,"stateLength",v),pt(g,"byteLength",c),Ie(g,"toJSON",m),Ie(g,"MIN",(q.MIN-1)/cf),Ie(g,"MAX",(q.MAX-1)/cf),q;function o(){var h=e[Ar];return Fi(h,n,1,new Nr(h),1)}function f(){return e[Ar]}function v(){return e.length}function c(){return e.byteLength}function l(){var h=e.length;return Fi(h,e,1,new Nr(h),1)}function p(h){var N;if(!xz(h))throw new TypeError(Cr("invalid argument. Must provide an Int32Array. Value: `%s`.",h));if(N=tY(h,!1),N)throw N;i.copy===!1?i.state&&h.length===e.length?Fi(h.length,h,1,e,1):(e=h,i.state=!0):(h.length!==e.length&&(e=new Nr(h.length)),Fi(h.length,h,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(gt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,e[Ar])}function m(){var h={};return h.type="PRNG",h.name=q.NAME,h.state=sGr(e),h.params=[],h}function y(){var h=e[_u]|0;return h=vGr*h%Cn|0,e[_u]=h,h|0}function q(){var h,N;return h=e[Lu],N=uGr(Or*(h/Cn)),h=t[N],e[Lu]=h,t[N]=y(),h}function g(){return(q()-1)/cf}}iY.exports=fGr});var aY=u((y0e,nY)=>{"use strict";var cGr=lf(),lGr=vf(),pGr=cGr({seed:lGr()});nY.exports=pGr});var oY=u((h0e,sY)=>{"use strict";var gGr=b(),uY=aY(),mGr=lf();gGr(uY,"factory",mGr);sY.exports=uY});var fY=u((d0e,vY)=>{"use strict";var qGr=fr();function yGr(r,e){for(var t=r(),i=1;t>qGr(-e);)i+=1,t*=r();return i-1}vY.exports=yGr});var lY=u((w0e,cY)=>{"use strict";var hGr=x();function dGr(r){return hGr(r)===r&&r<0}cY.exports=dGr});var gY=u((b0e,pY)=>{"use strict";var wGr=lY();pY.exports=wGr});var qY=u((E0e,mY)=>{"use strict";var bGr=gY(),EGr=nn();function NGr(r){return bGr(r)?NaN:EGr(r+1)}mY.exports=NGr});var hY=u((N0e,yY)=>{"use strict";var AGr=qY();yY.exports=AGr});var EY=u((A0e,bY)=>{"use strict";var OGr=hY(),dY=x(),SGr=O0(),TGr=V(),wY=Y(),Fu=C(),IGr=Pv(),LGr=1/12,_Gr=1/360;function PGr(r,e){var t,i,n,a,s,o,f,v,c,l;for(t=TGr(e),f=2.53*t+.931,o=.02483*f-.059,i=1.1328/(f-3.4)+1.1239,s=-3.6224/(f-2)+.9277,n=.86*s;;){if(l=r(),l<=n)return c=l/s-.43,c*=2*o/(.5-wY(c))+f,c+=e+.445,dY(c);if(l>=s?c=r()-.5:(c=l/s-.93,c=SGr(c)*.5-c,l=s*r()),a=.5-wY(c),(a>=.013||a>=l)&&(v=dY((2*o/a+f)*c+e+.445),l*=i/(o/(a*a)+f),c=(v+.5)*Fu(e/v),c+=-e-IGr+v,c-=(LGr-_Gr/(v*v))/v,v>=10&&c>=Fu(l*t)||(c=v*Fu(e)-e-OGr(v),v>=0&&v<=9&&c>=Fu(l))))return v}}bY.exports=PGr});var AY=u((O0e,NY)=>{"use strict";var RGr=fY(),FGr=EY();function MGr(r,e){return e<30?RGr(r,e):FGr(r,e)}NY.exports=MGr});var pf=u((S0e,PY)=>{"use strict";var Le=b(),Mu=_(),OY=R(),BGr=W().isPrimitive,SY=T(),TY=I(),IY=O(),LY=L(),CGr=B(),Bu=D().factory,jGr=E(),GGr=F(),Cu=d(),_Y=AY();function VGr(){var r,e,t,i;if(arguments.length===0)t=Bu();else if(arguments.length===1&&SY(arguments[0]))if(e=arguments[0],IY(e,"prng")){if(!TY(e.prng))throw new TypeError(Cu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Bu(e);else{if(r=arguments[0],!BGr(r))throw new TypeError(Cu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!SY(e))throw new TypeError(Cu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(IY(e,"prng")){if(!TY(e.prng))throw new TypeError(Cu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Bu(e)}else t=Bu()}return r===void 0?i=p:i=l,Le(i,"NAME","poisson"),e&&e.prng?(Le(i,"seed",null),Le(i,"seedLength",null),OY(i,"state",LY(null),CGr),Le(i,"stateLength",null),Le(i,"byteLength",null),Le(i,"toJSON",LY(null)),Le(i,"PRNG",t)):(Mu(i,"seed",n),Mu(i,"seedLength",a),OY(i,"state",f,v),Mu(i,"stateLength",s),Mu(i,"byteLength",o),Le(i,"toJSON",c),Le(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=GGr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return _Y(t,r)}function p(m){return jGr(m)||m<=0?NaN:_Y(t,m)}}PY.exports=VGr});var FY=u((T0e,RY)=>{"use strict";var UGr=pf(),HGr=UGr();RY.exports=HGr});var gf=u((I0e,BY)=>{"use strict";var WGr=b(),MY=FY(),kGr=pf();WGr(MY,"factory",kGr);BY.exports=MY});var jY=u((L0e,CY)=>{"use strict";var DGr=W().isPrimitive,XGr=j().isPrimitive,mf=d(),JGr=ar();function zGr(r,e){return DGr(r)?!XGr(e)||JGr(e)?new TypeError(mf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(mf("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(mf("invalid argument. First argument must be a positive number. Value: `%s`.",r))}CY.exports=zGr});var df=u((_0e,XY)=>{"use strict";var mt=b(),ju=_(),GY=R(),Bi=O(),VY=T(),qf=xr(),UY=or().isPrimitive,HY=I(),WY=L(),YGr=B(),kY=E(),Ci=gf().factory,Gu=Ni().factory,yf=Qe(),hf=cr(),DY=_n(),$Gr=F(),_e=d(),QGr=jY();function ZGr(){var r,e,t,i,n,a,s,o,f,v;if(s=!0,arguments.length===0)i={copy:!1},t=Ci(i);else if(arguments.length===1){if(i=arguments[0],!VY(i))throw new TypeError(_e("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Bi(i,"copy")&&!UY(i.copy))throw new TypeError(_e("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Bi(i,"prng")){if(!HY(i.prng))throw new TypeError(_e("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Ci({prng:i.prng})}else{if(Bi(i,"state")&&!qf(i.state))throw new TypeError(_e("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=DY({},i),i.copy===!1?s=!1:i.state&&(i.state=yf(i.state.length,i.state,1,new hf(i.state.length),1)),i.copy=!1,t=Ci(i)}}else{if(v=arguments[0],f=arguments[1],o=QGr(v,f),o)throw o;if(arguments.length>2){if(i=arguments[2],!VY(i))throw new TypeError(_e("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Bi(i,"copy")&&!UY(i.copy))throw new TypeError(_e("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Bi(i,"prng")){if(!HY(i.prng))throw new TypeError(_e("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Ci({prng:i.prng})}else{if(Bi(i,"state")&&!qf(i.state))throw new TypeError(_e("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=DY({},i),i.copy===!1?s=!1:i.state&&(i.state=yf(i.state.length,i.state,1,new hf(i.state.length),1)),i.copy=!1,t=Ci(i)}}else i={copy:!1},t=Ci(i)}return i&&i.prng?v===void 0?r=Gu({prng:i.prng}):r=Gu(v,f/(1-f),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),v===void 0?r=Gu({state:e,copy:!1}):r=Gu(v,f/(1-f),{state:e,copy:!1})),v===void 0?n=N:n=h,a=t.PRNG,mt(n,"NAME","negative-binomial"),i&&i.prng?(mt(n,"seed",null),mt(n,"seedLength",null),GY(n,"state",WY(null),YGr),mt(n,"stateLength",null),mt(n,"byteLength",null),mt(n,"toJSON",WY(null))):(ju(n,"seed",c),ju(n,"seedLength",l),GY(n,"state",y,q),ju(n,"stateLength",p),ju(n,"byteLength",m),mt(n,"toJSON",g)),mt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function m(){return a.byteLength}function y(){return a.state}function q(A){if(!qf(A))throw new TypeError(_e("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));s&&(A=yf(A.length,A,1,new hf(A.length),1)),a.state=A}function g(){var A={};return A.type="PRNG",A.name=n.NAME,A.state=$Gr(a.state),v===void 0?A.params=[]:A.params=[v,f],A}function h(){return t(r())}function N(A,G){return kY(A)||kY(G)||G<=0||G>=1?NaN:t(r(A,G/(1-G)))}}XY.exports=ZGr});var zY=u((P0e,JY)=>{"use strict";var KGr=df(),xGr=KGr();JY.exports=xGr});var QY=u((R0e,$Y)=>{"use strict";var rVr=b(),YY=zY(),eVr=df();rVr(YY,"factory",eVr);$Y.exports=YY});var xY=u((F0e,KY)=>{"use strict";var tVr=j().isPrimitive,iVr=W().isPrimitive,ZY=d(),nVr=ar();function aVr(r,e){return!tVr(r)||nVr(r)?new TypeError(ZY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):iVr(e)?null:new TypeError(ZY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}KY.exports=aVr});var e$=u((M0e,r$)=>{"use strict";function uVr(r,e,t){return e+t*r()}r$.exports=uVr});var wf=u((B0e,v$)=>{"use strict";var qt=b(),Vu=_(),t$=R(),i$=T(),n$=I(),a$=O(),u$=L(),sVr=B(),ji=et().factory,s$=E(),oVr=F(),Uu=d(),vVr=xY(),o$=e$();function fVr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=ji();else if(arguments.length===1){if(t=arguments[0],!i$(t))throw new TypeError(Uu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(a$(t,"prng")){if(!n$(t.prng))throw new TypeError(Uu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ji({prng:t.prng})}else e=ji(t)}else{if(s=arguments[0],r=arguments[1],a=vVr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!i$(t))throw new TypeError(Uu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(a$(t,"prng")){if(!n$(t.prng))throw new TypeError(Uu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ji({prng:t.prng})}else e=ji(t)}else e=ji()}return s===void 0?n=q:n=y,i=e.PRNG,qt(n,"NAME","normal"),t&&t.prng?(qt(n,"seed",null),qt(n,"seedLength",null),t$(n,"state",u$(null),sVr),qt(n,"stateLength",null),qt(n,"byteLength",null),qt(n,"toJSON",u$(null))):(Vu(n,"seed",o),Vu(n,"seedLength",f),t$(n,"state",l,p),Vu(n,"stateLength",v),Vu(n,"byteLength",c),qt(n,"toJSON",m)),qt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=oVr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return o$(e,s,r)}function q(g,h){return s$(g)||s$(h)||h<=0?NaN:o$(e,g,h)}}v$.exports=fVr});var c$=u((C0e,f$)=>{"use strict";var cVr=wf(),lVr=cVr();f$.exports=lVr});var g$=u((j0e,p$)=>{"use strict";var pVr=b(),l$=c$(),gVr=wf();pVr(l$,"factory",gVr);p$.exports=l$});var h$=u((G0e,y$)=>{"use strict";var m$=W().isPrimitive,q$=d();function mVr(r,e){return m$(r)?m$(e)?null:new TypeError(q$("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(q$("invalid argument. First argument must be a positive number. Value: `%s`.",r))}y$.exports=mVr});var w$=u((V0e,d$)=>{"use strict";var qVr=$();function yVr(r,e,t){return t/qVr(r(),1/e)}d$.exports=yVr});var bf=u((U0e,I$)=>{"use strict";var Pe=b(),Hu=_(),b$=R(),E$=T(),N$=I(),A$=O(),O$=L(),hVr=B(),Wu=D().factory,S$=E(),dVr=F(),ku=d(),wVr=h$(),T$=w$();function bVr(){var r,e,t,i,n,a;if(arguments.length===0)i=Wu();else if(arguments.length===1){if(t=arguments[0],!E$(t))throw new TypeError(ku("invalid argument. Options argument must be an object. Value: `%s`.",t));if(A$(t,"prng")){if(!N$(t.prng))throw new TypeError(ku("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Wu(t)}else{if(r=arguments[0],e=arguments[1],a=wVr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!E$(t))throw new TypeError(ku("invalid argument. Options argument must be an object. Value: `%s`.",t));if(A$(t,"prng")){if(!N$(t.prng))throw new TypeError(ku("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Wu(t)}else i=Wu()}return r===void 0?n=y:n=m,Pe(n,"NAME","pareto-type1"),t&&t.prng?(Pe(n,"seed",null),Pe(n,"seedLength",null),b$(n,"state",O$(null),hVr),Pe(n,"stateLength",null),Pe(n,"byteLength",null),Pe(n,"toJSON",O$(null)),Pe(n,"PRNG",i)):(Hu(n,"seed",s),Hu(n,"seedLength",o),b$(n,"state",c,l),Hu(n,"stateLength",f),Hu(n,"byteLength",v),Pe(n,"toJSON",p),Pe(n,"PRNG",i),i=i.normalized),n;function s(){return i.seed}function o(){return i.seedLength}function f(){return i.stateLength}function v(){return i.byteLength}function c(){return i.state}function l(q){i.state=q}function p(){var q={};return q.type="PRNG",q.name=n.NAME,q.state=dVr(i.state),r===void 0?q.params=[]:q.params=[r,e],q}function m(){return T$(i,r,e)}function y(q,g){return S$(q)||S$(g)||q<=0||g<=0?NaN:T$(i,q,g)}}I$.exports=bVr});var _$=u((H0e,L$)=>{"use strict";var EVr=bf(),NVr=EVr();L$.exports=NVr});var F$=u((W0e,R$)=>{"use strict";var AVr=b(),P$=_$(),OVr=bf();AVr(P$,"factory",OVr);R$.exports=P$});var B$=u((k0e,M$)=>{"use strict";var SVr=V(),TVr=C();function IVr(r,e){return e*SVr(-2*TVr(r()))}M$.exports=IVr});var Ef=u((D0e,W$)=>{"use strict";var Re=b(),Du=_(),C$=R(),LVr=W().isPrimitive,j$=T(),G$=I(),V$=O(),U$=L(),_Vr=B(),Xu=D().factory,PVr=E(),RVr=F(),Ju=d(),H$=B$();function FVr(){var r,e,t,i;if(arguments.length===0)t=Xu();else if(arguments.length===1&&j$(arguments[0]))if(e=arguments[0],V$(e,"prng")){if(!G$(e.prng))throw new TypeError(Ju("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Xu(e);else{if(r=arguments[0],!LVr(r))throw new TypeError(Ju("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!j$(e))throw new TypeError(Ju("invalid argument. Options argument must be an object. Value: `%s`.",e));if(V$(e,"prng")){if(!G$(e.prng))throw new TypeError(Ju("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Xu(e)}else t=Xu()}return r===void 0?i=p:i=l,Re(i,"NAME","rayleigh"),e&&e.prng?(Re(i,"seed",null),Re(i,"seedLength",null),C$(i,"state",U$(null),_Vr),Re(i,"stateLength",null),Re(i,"byteLength",null),Re(i,"toJSON",U$(null)),Re(i,"PRNG",t)):(Du(i,"seed",n),Du(i,"seedLength",a),C$(i,"state",f,v),Du(i,"stateLength",s),Du(i,"byteLength",o),Re(i,"toJSON",c),Re(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=RVr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return H$(t,r)}function p(m){return PVr(m)||m<=0?NaN:H$(t,m)}}W$.exports=FVr});var D$=u((X0e,k$)=>{"use strict";var MVr=Ef(),BVr=MVr();k$.exports=BVr});var z$=u((J0e,J$)=>{"use strict";var CVr=b(),X$=D$(),jVr=Ef();CVr(X$,"factory",jVr);J$.exports=X$});var Sf=u((z0e,tQ)=>{"use strict";var yt=b(),zu=_(),Y$=R(),Gi=O(),$$=W().isPrimitive,Q$=T(),Nf=xr(),Z$=or().isPrimitive,GVr=E(),K$=I(),x$=L(),VVr=B(),Yu=Fn().factory,Vi=et().factory,Af=Qe(),Of=cr(),rQ=_n(),UVr=F(),Qr=d(),eQ=V();function HVr(){var r,e,t,i,n,a,s,o;if(s=!0,arguments.length===0)n={copy:!1},t=Vi(n);else if(arguments.length===1)if(Q$(arguments[0])){if(n=arguments[0],Gi(n,"copy")&&!Z$(n.copy))throw new TypeError(Qr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Gi(n,"prng")){if(!K$(n.prng))throw new TypeError(Qr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Vi({prng:n.prng})}else{if(Gi(n,"state")&&!Nf(n.state))throw new TypeError(Qr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=rQ({},n),n.copy===!1?s=!1:n.state&&(n.state=Af(n.state.length,n.state,1,new Of(n.state.length),1)),n.copy=!1,t=Vi(n)}}else{if(o=arguments[0],!$$(o))throw new TypeError(Qr("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=Vi(n)}else{if(o=arguments[0],!$$(o))throw new TypeError(Qr("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!Q$(n))throw new TypeError(Qr("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Gi(n,"copy")&&!Z$(n.copy))throw new TypeError(Qr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Gi(n,"prng")){if(!K$(n.prng))throw new TypeError(Qr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Vi({prng:n.prng})}else{if(Gi(n,"state")&&!Nf(n.state))throw new TypeError(Qr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=rQ({},n),n.copy===!1?s=!1:n.state&&(n.state=Af(n.state.length,n.state,1,new Of(n.state.length),1)),n.copy=!1,t=Vi(n)}}return n&&n.prng?o===void 0?r=Yu({prng:n.prng}):r=Yu(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=Yu({state:e,copy:!1}):r=Yu(o,{state:e,copy:!1})),o===void 0?a=g:a=q,i=t.PRNG,yt(a,"NAME","t"),n&&n.prng?(yt(a,"seed",null),yt(a,"seedLength",null),Y$(a,"state",x$(null),VVr),yt(a,"stateLength",null),yt(a,"byteLength",null),yt(a,"toJSON",x$(null))):(zu(a,"seed",f),zu(a,"seedLength",v),Y$(a,"state",p,m),zu(a,"stateLength",c),zu(a,"byteLength",l),yt(a,"toJSON",y)),yt(a,"PRNG",i),a;function f(){return i.seed}function v(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(h){if(!Nf(h))throw new TypeError(Qr("invalid argument. Must provide a Uint32Array. Value: `%s`.",h));s&&(h=Af(h.length,h,1,new Of(h.length),1)),i.state=h}function y(){var h={};return h.type="PRNG",h.name=a.NAME,h.state=UVr(i.state),o===void 0?h.params=[]:h.params=[o],h}function q(){return t()/eQ(r()/o)}function g(h){return GVr(h)||h<=0?NaN:t()/eQ(r(h)/h)}}tQ.exports=HVr});var nQ=u((Y0e,iQ)=>{"use strict";var WVr=Sf(),kVr=WVr();iQ.exports=kVr});var sQ=u(($0e,uQ)=>{"use strict";var DVr=b(),aQ=nQ(),XVr=Sf();DVr(aQ,"factory",XVr);uQ.exports=aQ});var vQ=u((Q0e,oQ)=>{"use strict";var Tf=j().isPrimitive,$u=d(),If=ar();function JVr(r,e,t){return!Tf(r)||If(r)?new TypeError($u("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Tf(e)||If(e)?new TypeError($u("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Tf(t)||If(t)?new TypeError($u("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError($u("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}oQ.exports=JVr});var lQ=u((Z0e,cQ)=>{"use strict";var fQ=V();function zVr(r,e,t,i){var n,a,s;return n=(i-e)/(t-e),s=r(),s<n?(a=(t-e)*(i-e),e+fQ(a*s)):(a=(t-e)*(t-i),t-fQ(a*(1-s)))}cQ.exports=zVr});var _f=u((K0e,dQ)=>{"use strict";var Fe=b(),Qu=_(),pQ=R(),gQ=T(),mQ=I(),qQ=O(),yQ=L(),YVr=B(),Zu=D().factory,Lf=E(),$Vr=F(),Ku=d(),QVr=vQ(),hQ=lQ();function ZVr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=Zu();else if(arguments.length===1){if(r=arguments[0],!gQ(r))throw new TypeError(Ku("invalid argument. Options argument must be an object. Value: `%s`.",r));if(qQ(r,"prng")){if(!mQ(r.prng))throw new TypeError(Ku("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Zu(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=QVr(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!gQ(r))throw new TypeError(Ku("invalid argument. Options argument must be an object. Value: `%s`.",r));if(qQ(r,"prng")){if(!mQ(r.prng))throw new TypeError(Ku("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Zu(r)}else e=Zu()}return n===void 0?t=q:t=y,Fe(t,"NAME","triangular"),r&&r.prng?(Fe(t,"seed",null),Fe(t,"seedLength",null),pQ(t,"state",yQ(null),YVr),Fe(t,"stateLength",null),Fe(t,"byteLength",null),Fe(t,"toJSON",yQ(null)),Fe(t,"PRNG",e)):(Qu(t,"seed",o),Qu(t,"seedLength",f),pQ(t,"state",l,p),Qu(t,"stateLength",v),Qu(t,"byteLength",c),Fe(t,"toJSON",m),Fe(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=$Vr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function y(){return hQ(e,n,a,s)}function q(g,h,N){return Lf(g)||Lf(h)||Lf(N)||!(g<=N&&N<=h)?NaN:hQ(e,g,h,N)}}dQ.exports=ZVr});var bQ=u((x0e,wQ)=>{"use strict";var KVr=_f(),xVr=KVr();wQ.exports=xVr});var AQ=u((rue,NQ)=>{"use strict";var rUr=b(),EQ=bQ(),eUr=_f();rUr(EQ,"factory",eUr);NQ.exports=EQ});var IQ=u((eue,TQ)=>{"use strict";var OQ=j().isPrimitive,Pf=d(),SQ=ar();function tUr(r,e){return!OQ(r)||SQ(r)?new TypeError(Pf("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!OQ(e)||SQ(e)?new TypeError(Pf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Pf("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}TQ.exports=tUr});var _Q=u((tue,LQ)=>{"use strict";function iUr(r,e,t){var i=r();return t*i+(1-i)*e}LQ.exports=iUr});var Rf=u((iue,GQ)=>{"use strict";var Me=b(),xu=_(),PQ=R(),RQ=T(),FQ=I(),MQ=O(),BQ=L(),nUr=B(),rs=D().factory,CQ=E(),aUr=F(),es=d(),uUr=IQ(),jQ=_Q();function sUr(){var r,e,t,i,n,a;if(arguments.length===0)e=rs();else if(arguments.length===1){if(r=arguments[0],!RQ(r))throw new TypeError(es("invalid argument. Options argument must be an object. Value: `%s`.",r));if(MQ(r,"prng")){if(!FQ(r.prng))throw new TypeError(es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=rs(r)}else{if(n=arguments[0],a=arguments[1],i=uUr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!RQ(r))throw new TypeError(es("invalid argument. Options argument must be an object. Value: `%s`.",r));if(MQ(r,"prng")){if(!FQ(r.prng))throw new TypeError(es("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=rs(r)}else e=rs()}return n===void 0?t=y:t=m,Me(t,"NAME","uniform"),r&&r.prng?(Me(t,"seed",null),Me(t,"seedLength",null),PQ(t,"state",BQ(null),nUr),Me(t,"stateLength",null),Me(t,"byteLength",null),Me(t,"toJSON",BQ(null)),Me(t,"PRNG",e)):(xu(t,"seed",s),xu(t,"seedLength",o),PQ(t,"state",c,l),xu(t,"stateLength",f),xu(t,"byteLength",v),Me(t,"toJSON",p),Me(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=aUr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return jQ(e,n,a)}function y(q,g){return CQ(q)||CQ(g)||q>=g?NaN:jQ(e,q,g)}}GQ.exports=sUr});var UQ=u((nue,VQ)=>{"use strict";var oUr=Rf(),vUr=oUr();VQ.exports=vUr});var kQ=u((aue,WQ)=>{"use strict";var fUr=b(),HQ=UQ(),cUr=Rf();fUr(HQ,"factory",cUr);WQ.exports=HQ});var zQ=u((uue,JQ)=>{"use strict";var DQ=W().isPrimitive,XQ=d();function lUr(r,e){return DQ(r)?DQ(e)?null:new TypeError(XQ("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(XQ("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}JQ.exports=lUr});var $Q=u((sue,YQ)=>{"use strict";var pUr=$(),gUr=C();function mUr(r,e,t){return t*pUr(-gUr(1-r()),1/e)}YQ.exports=mUr});var Ff=u((oue,iZ)=>{"use strict";var Be=b(),ts=_(),QQ=R(),ZQ=T(),KQ=I(),xQ=O(),rZ=L(),qUr=B(),is=D().factory,eZ=E(),yUr=F(),ns=d(),hUr=zQ(),tZ=$Q();function dUr(){var r,e,t,i,n,a;if(arguments.length===0)t=is();else if(arguments.length===1){if(e=arguments[0],!ZQ(e))throw new TypeError(ns("invalid argument. Options argument must be an object. Value: `%s`.",e));if(xQ(e,"prng")){if(!KQ(e.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=is(e)}else{if(a=arguments[0],r=arguments[1],n=hUr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!ZQ(e))throw new TypeError(ns("invalid argument. Options argument must be an object. Value: `%s`.",e));if(xQ(e,"prng")){if(!KQ(e.prng))throw new TypeError(ns("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=is(e)}else t=is()}return r===void 0?i=y:i=m,Be(i,"NAME","weibull"),e&&e.prng?(Be(i,"seed",null),Be(i,"seedLength",null),QQ(i,"state",rZ(null),qUr),Be(i,"stateLength",null),Be(i,"byteLength",null),Be(i,"toJSON",rZ(null)),Be(i,"PRNG",t)):(ts(i,"seed",s),ts(i,"seedLength",o),QQ(i,"state",c,l),ts(i,"stateLength",f),ts(i,"byteLength",v),Be(i,"toJSON",p),Be(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(q){t.state=q}function p(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=yUr(t.state),a===void 0?q.params=[]:q.params=[a,r],q}function m(){return tZ(t,a,r)}function y(q,g){return eZ(q)||eZ(g)||q<=0||g<=0?NaN:tZ(t,q,g)}}iZ.exports=dUr});var aZ=u((vue,nZ)=>{"use strict";var wUr=Ff(),bUr=wUr();nZ.exports=bUr});var oZ=u((fue,sZ)=>{"use strict";var EUr=b(),uZ=aZ(),NUr=Ff();EUr(uZ,"factory",NUr);sZ.exports=uZ});var fZ=u((cue,vZ)=>{"use strict";var M={};M.arcsine=Hj().factory;M.bernoulli=Kj().factory;M.beta=wV().factory;M.betaprime=aU().factory;M.binomial=UU().factory;M.boxMueller=eH().factory;M.cauchy=dH().factory;M.chi=HH().factory;M.chisquare=Fn().factory;M.cosine=TW().factory;M.discreteUniform=zW().factory;M.erlang=ck().factory;M.exponential=Ok().factory;M.f=Dk().factory;M.frechet=sD().factory;M.gamma=Ni().factory;M.geometric=ED().factory;M.gumbel=HD().factory;M.hypergeometric=mX().factory;M.improvedZiggurat=et().factory;M.invgamma=PX().factory;M.kumaraswamy=ZX().factory;M.laplace=mJ().factory;M.levy=ez().factory;M.logistic=dz().factory;M.lognormal=jz().factory;M.minstd=Yz().factory;M.minstdShuffle=oY().factory;M.mt19937=D().factory;M.negativeBinomial=QY().factory;M.normal=g$().factory;M.pareto1=F$().factory;M.poisson=gf().factory;M.rayleigh=z$().factory;M.t=sQ().factory;M.triangular=AQ().factory;M.uniform=kQ().factory;M.weibull=oZ().factory;vZ.exports=M});var lZ=u((lue,cZ)=>{"use strict";function AUr(r,e,t,i){var n,a,s,o,f,v,c,l,p,m,y,q,g,h,N,A;for(y=e[1],q=e[0],g=r[0],h=r[1],c=t[0],l=t[1],s=c[1],o=c[0]-y*s,f=l[1],v=l[0]-y*f,p=0,m=0,n=[],N=0;N<q;N++){for(a=[],A=0;A<y;A++)a.push(i(g[p],h[m])),p+=s,m+=f;n.push(a),p+=o,m+=v}return n}cZ.exports=AUr});var gZ=u((pue,pZ)=>{"use strict";var OUr=j().isPrimitive,SUr=P(),TUr=X(),IUr=d();function LUr(r,e){return t;function t(i){var n;if(!OUr(i)){if(e.nonnumeric===void 0)throw new TypeError(IUr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===SUr?e.pinf:n===TUr?e.ninf:n}}pZ.exports=LUr});var hZ=u((gue,yZ)=>{"use strict";var mZ=j().isPrimitive,_Ur=P(),PUr=X(),qZ=d();function RUr(r,e){return t;function t(i,n){var a;if(!mZ(i)){if(e.nonnumeric===void 0)throw new TypeError(qZ("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!mZ(n)){if(e.nonnumeric===void 0)throw new TypeError(qZ("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===_Ur?e.pinf:a===PUr?e.ninf:a}}yZ.exports=RUr});var wZ=u((mue,dZ)=>{"use strict";var Mf=j().isPrimitive,FUr=P(),MUr=X(),Bf=d();function BUr(r,e){return t;function t(i,n,a){var s;if(!Mf(i)){if(e.nonnumeric===void 0)throw new TypeError(Bf("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Mf(n)){if(e.nonnumeric===void 0)throw new TypeError(Bf("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Mf(a)){if(e.nonnumeric===void 0)throw new TypeError(Bf("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return s=r(i,n,a),s!==s?e.nan:s===FUr?e.pinf:s===MUr?e.ninf:s}}dZ.exports=BUr});var EZ=u((que,bZ)=>{"use strict";var CUr=K().isPrimitive,jUr=d();function GUr(r){return e;function e(t){if(!CUr(t))throw new TypeError(jUr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}bZ.exports=GUr});var SZ=u((yue,OZ)=>{"use strict";var NZ=K().isPrimitive,AZ=d();function VUr(r){return e;function e(t,i){if(!NZ(t))throw new TypeError(AZ("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!NZ(i))throw new TypeError(AZ("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}OZ.exports=VUr});var IZ=u((hue,TZ)=>{"use strict";var Cf=K().isPrimitive,jf=d();function UUr(r){return e;function e(t,i,n){if(!Cf(t))throw new TypeError(jf("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Cf(i))throw new TypeError(jf("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Cf(n))throw new TypeError(jf("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(n)));return r(t,i,n)}}TZ.exports=UUr});var _Z=u((due,LZ)=>{"use strict";function HUr(r,e,t,i){var n,a,s,o,f,v,c,l,p,m,y,q,g,h,N,A,G,S,J,sr,k;for(N=e[1],A=e[0],G=r[0],S=r[1],J=r[2],p=t[0],m=t[1],y=t[2],s=p[1],o=p[0]-N*s,f=m[1],v=m[0]-N*f,c=y[1],l=y[0]-N*c,q=0,g=0,h=0,n=[],sr=0;sr<A;sr++){for(a=[],k=0;k<N;k++)a.push(i(G[q],S[g],J[h])),q+=s,g+=f,h+=c;n.push(a),q+=o,g+=v,h+=l}return n}LZ.exports=HUr});var RZ=u((wue,PZ)=>{"use strict";function WUr(r,e){var t,i,n,a,s;for(t=r.length,i=r[0].length,a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)n[s]=e(n[s]);return r}PZ.exports=WUr});var MZ=u((bue,FZ)=>{"use strict";var kUr=RZ();function DUr(r,e){return kUr(r,e)}FZ.exports=DUr});var CZ=u((Eue,BZ)=>{"use strict";var Zr={};Zr.binary2d=lZ();Zr.d_d=gZ();Zr.dd_d=hZ();Zr.ddd_d=wZ();Zr.s_o=EZ();Zr.ss_o=SZ();Zr.sss_o=IZ();Zr.ternary2d=_Z();Zr.unary2d=MZ();BZ.exports=Zr});var GZ=u((Nue,jZ)=>{"use strict";var Ut=ap(),Sr,U={};U.ANSCOMBES_QUARTET=r7();U.bartlettTest=FE();U.broadcast=UE();U.cumax=$E().ndarray;U.filled=rN();U.filledBy=fN();U.flattenArray=Ra();U.filled2d=fn();U.ones2d=gN();U.zeros2d=hN();U.isArray=pr();U.isBoolean=or().isPrimitive;U.isNumber=j().isPrimitive;U.isPositiveNumber=W().isPrimitive;U.isString=K().isPrimitive;U.iterator2array=rS();U.iterSawtoothWave=jS();U.linspace=YT();U.max=iI().ndarray;U.mskmax=lI().ndarray;U.assert={};Sr=IL();Ut(Sr,U.assert);U.blas={};Sr=CL();Ut(Sr,U.blas);Sr=RF();Ut(Sr,U);U.dists={};Sr=iM();Ut(Sr,U.dists);Sr=tC();Ut(Sr,U);U.random={};Sr=fZ();Ut(Sr,U.random);U.tools={};Sr=CZ();Ut(Sr,U.tools);jZ.exports=U});var JUr=u((Aue,VZ)=>{var XUr=GZ();VZ.exports=XUr});return JUr();})();
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
