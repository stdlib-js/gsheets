/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Gn=u((wUr,jf)=>{"use strict";function TZ(r){return Object.keys(Object(r))}jf.exports=TZ});var Vf=u((bUr,Gf)=>{"use strict";var IZ=Gn();function LZ(){return(IZ(arguments)||"").length!==2}function _Z(){return LZ(1,2)}Gf.exports=_Z});var Hf=u((EUr,Uf)=>{"use strict";var PZ=typeof Object.keys<"u";Uf.exports=PZ});var kf=u((NUr,Wf)=>{"use strict";function RZ(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}Wf.exports=RZ});var Xf=u((AUr,Df)=>{"use strict";var FZ=kf();Df.exports=FZ});var zf=u((OUr,Jf)=>{"use strict";var MZ=Xf(),BZ=MZ();function CZ(){return BZ&&typeof Symbol.toStringTag=="symbol"}Jf.exports=CZ});var Ui=u((SUr,Yf)=>{"use strict";var jZ=zf();Yf.exports=jZ});var ns=u((TUr,$f)=>{"use strict";var GZ=Object.prototype.toString;$f.exports=GZ});var Zf=u((IUr,Qf)=>{"use strict";var VZ=ns();function UZ(r){return VZ.call(r)}Qf.exports=UZ});var xf=u((LUr,Kf)=>{"use strict";var HZ=Object.prototype.hasOwnProperty;function WZ(r,e){return r==null?!1:HZ.call(r,e)}Kf.exports=WZ});var O=u((_Ur,rc)=>{"use strict";var kZ=xf();rc.exports=kZ});var tc=u((PUr,ec)=>{"use strict";var DZ=typeof Symbol=="function"?Symbol:void 0;ec.exports=DZ});var as=u((RUr,ic)=>{"use strict";var XZ=tc();ic.exports=XZ});var uc=u((FUr,ac)=>{"use strict";var nc=as(),JZ=typeof nc=="function"?nc.toStringTag:"";ac.exports=JZ});var oc=u((MUr,sc)=>{"use strict";var zZ=O(),Hi=uc(),us=ns();function YZ(r){var e,t,i;if(r==null)return us.call(r);t=r[Hi],e=zZ(r,Hi);try{r[Hi]=void 0}catch{return us.call(r)}return i=us.call(r),e?r[Hi]=t:delete r[Hi],i}sc.exports=YZ});var ir=u((BUr,vc)=>{"use strict";var $Z=Ui(),QZ=Zf(),ZZ=oc(),ss;$Z()?ss=ZZ:ss=QZ;vc.exports=ss});var os=u((CUr,fc)=>{"use strict";var KZ=ir();function xZ(r){return KZ(r)==="[object Arguments]"}fc.exports=xZ});var pc=u((jUr,lc)=>{"use strict";var rK=os(),cc;function eK(){return rK(arguments)}cc=eK();lc.exports=cc});var mc=u((GUr,gc)=>{"use strict";var tK=typeof Object.defineProperty=="function"?Object.defineProperty:null;gc.exports=tK});var yc=u((VUr,qc)=>{"use strict";var iK=mc();function nK(){try{return iK({},"x",{}),!0}catch{return!1}}qc.exports=nK});var dc=u((UUr,hc)=>{"use strict";var aK=Object.defineProperty;hc.exports=aK});var vs=u((HUr,wc)=>{"use strict";function uK(r){return typeof r=="number"}wc.exports=uK});var fs=u((WUr,Ec)=>{"use strict";function sK(r){return r[0]==="-"}function bc(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function oK(r,e,t){var i=!1,n=e-r.length;return n<0||(sK(r)&&(i=!0,r=r.substr(1)),r=t?r+bc(n):bc(n)+r,i&&(r="-"+r)),r}Ec.exports=oK});var Sc=u((kUr,Oc)=>{"use strict";var vK=vs(),Nc=fs(),fK=String.prototype.toLowerCase,Ac=String.prototype.toUpperCase;function cK(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!vK(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Nc(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=Nc(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===Ac.call(r.specifier)?Ac.call(t):fK.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Oc.exports=cK});var Ic=u((DUr,Tc)=>{"use strict";function lK(r){return typeof r=="string"}Tc.exports=lK});var Pc=u((XUr,_c)=>{"use strict";var pK=vs(),gK=Math.abs,mK=String.prototype.toLowerCase,Lc=String.prototype.toUpperCase,ht=String.prototype.replace,qK=/e\+(\d)$/,yK=/e-(\d)$/,hK=/^(\d+)$/,dK=/^(\d+)e/,wK=/\.0$/,bK=/\.0*e/,EK=/(\..*[^0])0*e/;function NK(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!pK(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":gK(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=ht.call(t,EK,"$1e"),t=ht.call(t,bK,"e"),t=ht.call(t,wK,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=ht.call(t,qK,"e+0$1"),t=ht.call(t,yK,"e-0$1"),r.alternate&&(t=ht.call(t,hK,"$1."),t=ht.call(t,dK,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Lc.call(r.specifier)?Lc.call(t):mK.call(t),t}_c.exports=NK});var Mc=u((JUr,Fc)=>{"use strict";function Rc(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function AK(r,e,t){var i=e-r.length;return i<0||(r=t?r+Rc(i):Rc(i)+r),r}Fc.exports=AK});var Cc=u((zUr,Bc)=>{"use strict";var OK=Sc(),SK=Ic(),TK=Pc(),IK=Mc(),LK=fs(),_K=String.fromCharCode,Vn=isNaN,PK=Array.isArray;function RK(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function FK(r){var e,t,i,n,a,s,o,f,v;if(!PK(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",o=1,f=0;f<r.length;f++)if(i=r[f],SK(i))s+=i;else{if(e=i.precision!==void 0,i=RK(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,v=0;v<t.length;v++)switch(n=t.charAt(v),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,Vn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,Vn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=OK(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!Vn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Vn(a)?String(i.arg):_K(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=TK(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=LK(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=IK(i.arg,i.width,i.padRight)),s+=i.arg||"",o+=1}return s}Bc.exports=FK});var Gc=u((YUr,jc)=>{"use strict";var MK=Cc();jc.exports=MK});var Uc=u(($Ur,Vc)=>{"use strict";var Un=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function BK(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function CK(r){var e,t,i,n;for(t=[],n=0,i=Un.exec(r);i;)e=r.slice(n,Un.lastIndex-i[0].length),e.length&&t.push(e),t.push(BK(i)),n=Un.lastIndex,i=Un.exec(r);return e=r.slice(n),e.length&&t.push(e),t}Vc.exports=CK});var Wc=u((QUr,Hc)=>{"use strict";var jK=Uc();Hc.exports=jK});var Dc=u((ZUr,kc)=>{"use strict";function GK(r){return typeof r=="string"}kc.exports=GK});var zc=u((KUr,Jc)=>{"use strict";var VK=Gc(),UK=Wc(),HK=Dc();function Xc(r){var e,t,i;if(!HK(r))throw new TypeError(Xc("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=UK(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return VK.apply(null,t)}Jc.exports=Xc});var d=u((xUr,Yc)=>{"use strict";var WK=zc();Yc.exports=WK});var rl=u((rHr,xc)=>{"use strict";var $c=d(),Ht=Object.prototype,Qc=Ht.toString,Zc=Ht.__defineGetter__,Kc=Ht.__defineSetter__,kK=Ht.__lookupGetter__,DK=Ht.__lookupSetter__;function XK(r,e,t){var i,n,a,s;if(typeof r!="object"||r===null||Qc.call(r)==="[object Array]")throw new TypeError($c("invalid argument. First argument must be an object. Value: `%s`.",r));if(typeof t!="object"||t===null||Qc.call(t)==="[object Array]")throw new TypeError($c("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(n="value"in t,n&&(kK.call(r,e)||DK.call(r,e)?(i=r.__proto__,r.__proto__=Ht,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,s="set"in t,n&&(a||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Zc&&Zc.call(r,e,t.get),s&&Kc&&Kc.call(r,e,t.set),r}xc.exports=XK});var Ce=u((eHr,el)=>{"use strict";var JK=yc(),zK=dc(),YK=rl(),cs;JK()?cs=zK:cs=YK;el.exports=cs});var il=u((tHr,tl)=>{"use strict";var $K=Ce();function QK(r,e,t){$K(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}tl.exports=QK});var b=u((iHr,nl)=>{"use strict";var ZK=il();nl.exports=ZK});var ls=u((nHr,al)=>{"use strict";function KK(r){return typeof r=="string"}al.exports=KK});var sl=u((aHr,ul)=>{"use strict";var xK=String.prototype.valueOf;ul.exports=xK});var vl=u((uHr,ol)=>{"use strict";var rx=sl();function ex(r){try{return rx.call(r),!0}catch{return!1}}ol.exports=ex});var ps=u((sHr,fl)=>{"use strict";var tx=Ui(),ix=ir(),nx=vl(),ax=tx();function ux(r){return typeof r=="object"?r instanceof String?!0:ax?nx(r):ix(r)==="[object String]":!1}fl.exports=ux});var ll=u((oHr,cl)=>{"use strict";var sx=ls(),ox=ps();function vx(r){return sx(r)||ox(r)}cl.exports=vx});var K=u((vHr,gl)=>{"use strict";var pl=b(),gs=ll(),fx=ls(),cx=ps();pl(gs,"isPrimitive",fx);pl(gs,"isObject",cx);gl.exports=gs});var ms=u((fHr,ml)=>{"use strict";function lx(r){return typeof r=="number"}ml.exports=lx});var yl=u((cHr,ql)=>{"use strict";ql.exports=Number});var Hn=u((lHr,hl)=>{"use strict";var px=yl();hl.exports=px});var wl=u((pHr,dl)=>{"use strict";var gx=Hn(),mx=gx.prototype.toString;dl.exports=mx});var El=u((gHr,bl)=>{"use strict";var qx=wl();function yx(r){try{return qx.call(r),!0}catch{return!1}}bl.exports=yx});var qs=u((mHr,Nl)=>{"use strict";var hx=Ui(),dx=ir(),wx=Hn(),bx=El(),Ex=hx();function Nx(r){return typeof r=="object"?r instanceof wx?!0:Ex?bx(r):dx(r)==="[object Number]":!1}Nl.exports=Nx});var Ol=u((qHr,Al)=>{"use strict";var Ax=ms(),Ox=qs();function Sx(r){return Ax(r)||Ox(r)}Al.exports=Sx});var j=u((yHr,Tl)=>{"use strict";var Sl=b(),ys=Ol(),Tx=ms(),Ix=qs();Sl(ys,"isPrimitive",Tx);Sl(ys,"isObject",Ix);Tl.exports=ys});var Ll=u((hHr,Il)=>{"use strict";function Lx(r){return r!==r}Il.exports=Lx});var E=u((dHr,_l)=>{"use strict";var _x=Ll();_l.exports=_x});var hs=u((wHr,Pl)=>{"use strict";var Px=j().isPrimitive,Rx=E();function Fx(r){return Px(r)&&Rx(r)}Pl.exports=Fx});var ds=u((bHr,Rl)=>{"use strict";var Mx=j().isObject,Bx=E();function Cx(r){return Mx(r)&&Bx(r.valueOf())}Rl.exports=Cx});var Ml=u((EHr,Fl)=>{"use strict";var jx=hs(),Gx=ds();function Vx(r){return jx(r)||Gx(r)}Fl.exports=Vx});var ar=u((NHr,Cl)=>{"use strict";var Bl=b(),ws=Ml(),Ux=hs(),Hx=ds();Bl(ws,"isPrimitive",Ux);Bl(ws,"isObject",Hx);Cl.exports=ws});var P=u((AHr,jl)=>{"use strict";var Wx=Number.POSITIVE_INFINITY;jl.exports=Wx});var X=u((OHr,Gl)=>{"use strict";var kx=Hn(),Dx=kx.NEGATIVE_INFINITY;Gl.exports=Dx});var Ul=u((SHr,Vl)=>{"use strict";var Xx=Math.floor;Vl.exports=Xx});var x=u((THr,Hl)=>{"use strict";var Jx=Ul();Hl.exports=Jx});var kl=u((IHr,Wl)=>{"use strict";var zx=x();function Yx(r){return zx(r)===r}Wl.exports=Yx});var Tr=u((LHr,Dl)=>{"use strict";var $x=kl();Dl.exports=$x});var bs=u((_Hr,Xl)=>{"use strict";var Qx=P(),Zx=X(),Kx=Tr();function xx(r){return r<Qx&&r>Zx&&Kx(r)}Xl.exports=xx});var Es=u((PHr,Jl)=>{"use strict";var rrr=j().isPrimitive,err=bs();function trr(r){return rrr(r)&&err(r)}Jl.exports=trr});var Ns=u((RHr,zl)=>{"use strict";var irr=j().isObject,nrr=bs();function arr(r){return irr(r)&&nrr(r.valueOf())}zl.exports=arr});var $l=u((FHr,Yl)=>{"use strict";var urr=Es(),srr=Ns();function orr(r){return urr(r)||srr(r)}Yl.exports=orr});var jr=u((MHr,Zl)=>{"use strict";var Ql=b(),As=$l(),vrr=Es(),frr=Ns();Ql(As,"isPrimitive",vrr);Ql(As,"isObject",frr);Zl.exports=As});var Os=u((BHr,Kl)=>{"use strict";var crr=Object.prototype.propertyIsEnumerable;Kl.exports=crr});var e3=u((CHr,r3)=>{"use strict";var lrr=Os(),xl;function prr(){return!lrr.call("beep","0")}xl=prr();r3.exports=xl});var i3=u((jHr,t3)=>{"use strict";var grr=K(),mrr=ar().isPrimitive,qrr=jr().isPrimitive,yrr=Os(),hrr=e3();function drr(r,e){var t;return r==null?!1:(t=yrr.call(r,e),!t&&hrr&&grr(r)?(e=+e,!mrr(e)&&qrr(e)&&e>=0&&e<r.length):t)}t3.exports=drr});var Wi=u((GHr,n3)=>{"use strict";var wrr=i3();n3.exports=wrr});var u3=u((VHr,a3)=>{"use strict";var brr=ir(),Ss;function Err(r){return brr(r)==="[object Array]"}Array.isArray?Ss=Array.isArray:Ss=Err;a3.exports=Ss});var pr=u((UHr,s3)=>{"use strict";var Nrr=u3();s3.exports=Nrr});var Wt=u((HHr,o3)=>{"use strict";var Arr=4294967295;o3.exports=Arr});var c3=u((WHr,f3)=>{"use strict";var Orr=O(),Srr=Wi(),Trr=pr(),Irr=Tr(),Lrr=Wt();function _rr(r){return r!==null&&typeof r=="object"&&!Trr(r)&&typeof r.length=="number"&&Irr(r.length)&&r.length>=0&&r.length<=Lrr&&Orr(r,"callee")&&!Srr(r,"callee")}f3.exports=_rr});var Is=u((kHr,l3)=>{"use strict";var Prr=pc(),Rrr=os(),Frr=c3(),Ts;Prr?Ts=Rrr:Ts=Frr;l3.exports=Ts});var m3=u((DHr,g3)=>{"use strict";var Mrr=Is(),p3=Gn(),Brr=Array.prototype.slice;function Crr(r){return Mrr(r)?p3(Brr.call(r)):p3(r)}g3.exports=Crr});var y3=u((XHr,q3)=>{"use strict";var jrr=pr(),Grr=d();function Vrr(r){if(typeof r!="function")throw new TypeError(Grr("invalid argument. Must provide a function. Value: `%s`.",r));return e;function e(t){var i,n;if(!jrr(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}q3.exports=Vrr});var d3=u((JHr,h3)=>{"use strict";var Urr=y3();h3.exports=Urr});var b3=u((zHr,w3)=>{"use strict";function Hrr(r){return r!==null&&typeof r=="object"}w3.exports=Hrr});var _s=u((YHr,E3)=>{"use strict";var Wrr=b(),krr=d3(),Ls=b3(),Drr=krr(Ls);Wrr(Ls,"isObjectLikeArray",Drr);E3.exports=Ls});var A3=u(($Hr,N3)=>{"use strict";function Xrr(){}N3.exports=Xrr});var B=u((QHr,O3)=>{"use strict";var Jrr=A3();O3.exports=Jrr});var T3=u((ZHr,S3)=>{"use strict";var zrr=Wi(),Yrr=B(),$rr=zrr(Yrr,"prototype");S3.exports=$rr});var L3=u((KHr,I3)=>{"use strict";var Qrr=Wi(),Zrr={toString:null},Krr=!Qrr(Zrr,"toString");I3.exports=Krr});var P3=u((xHr,_3)=>{"use strict";var xrr=9007199254740991;_3.exports=xrr});var F3=u((rWr,R3)=>{"use strict";var rer=Tr(),eer=P3();function ter(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&rer(r.length)&&r.length>=0&&r.length<=eer}R3.exports=ter});var Gr=u((eWr,M3)=>{"use strict";var ier=F3();M3.exports=ier});var G3=u((tWr,j3)=>{"use strict";var B3=ar(),ner=Gr(),aer=K().isPrimitive,uer=jr().isPrimitive,C3=d();function ser(r,e,t){var i,n;if(!ner(r)&&!aer(r))throw new TypeError(C3("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(i=r.length,i===0)return-1;if(arguments.length===3){if(!uer(t))throw new TypeError(C3("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(B3(e)){for(;n<i;n++)if(B3(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}j3.exports=ser});var Wn=u((iWr,V3)=>{"use strict";var oer=G3();V3.exports=oer});var H3=u((nWr,U3)=>{"use strict";var ver=/./;U3.exports=ver});var Ps=u((aWr,W3)=>{"use strict";function fer(r){return typeof r=="boolean"}W3.exports=fer});var D3=u((uWr,k3)=>{"use strict";var cer=Boolean;k3.exports=cer});var J3=u((sWr,X3)=>{"use strict";var ler=D3();X3.exports=ler});var Y3=u((oWr,z3)=>{"use strict";var per=Boolean.prototype.toString;z3.exports=per});var Q3=u((vWr,$3)=>{"use strict";var ger=Y3();function mer(r){try{return ger.call(r),!0}catch{return!1}}$3.exports=mer});var Rs=u((fWr,Z3)=>{"use strict";var qer=Ui(),yer=ir(),her=J3(),der=Q3(),wer=qer();function ber(r){return typeof r=="object"?r instanceof her?!0:wer?der(r):yer(r)==="[object Boolean]":!1}Z3.exports=ber});var x3=u((cWr,K3)=>{"use strict";var Eer=Ps(),Ner=Rs();function Aer(r){return Eer(r)||Ner(r)}K3.exports=Aer});var or=u((lWr,e6)=>{"use strict";var r6=b(),Fs=x3(),Oer=Ps(),Ser=Rs();r6(Fs,"isPrimitive",Oer);r6(Fs,"isObject",Ser);e6.exports=Fs});var i6=u((pWr,t6)=>{"use strict";function Ter(){return new Function("return this;")()}t6.exports=Ter});var a6=u((gWr,n6)=>{"use strict";var Ier=typeof self=="object"?self:null;n6.exports=Ier});var s6=u((mWr,u6)=>{"use strict";var Ler=typeof window=="object"?window:null;u6.exports=Ler});var v6=u((qWr,o6)=>{"use strict";var _er=typeof globalThis=="object"?globalThis:null;o6.exports=_er});var g6=u((yWr,p6)=>{"use strict";var Per=or().isPrimitive,Rer=d(),Fer=i6(),f6=a6(),c6=s6(),l6=v6();function Mer(r){if(arguments.length){if(!Per(r))throw new TypeError(Rer("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Fer()}if(l6)return l6;if(f6)return f6;if(c6)return c6;throw new Error("unexpected error. Unable to resolve global object.")}p6.exports=Mer});var y6=u((hWr,q6)=>{"use strict";var Ber=g6(),m6=Ber(),Cer=m6.document&&m6.document.childNodes;q6.exports=Cer});var d6=u((dWr,h6)=>{"use strict";var jer=Int8Array;h6.exports=jer});var b6=u((wWr,w6)=>{"use strict";var Ger=H3(),Ver=y6(),Uer=d6();function Her(){return typeof Ger=="function"||typeof Uer=="object"||typeof Ver=="function"}w6.exports=Her});var Ms=u((bWr,E6)=>{"use strict";function Wer(){return/^\s*function\s*([^(]*)/i}E6.exports=Wer});var A6=u((EWr,N6)=>{"use strict";var ker=Ms(),Der=ker();N6.exports=Der});var Bs=u((NWr,S6)=>{"use strict";var Xer=b(),O6=Ms(),Jer=A6();Xer(O6,"REGEXP",Jer);S6.exports=O6});var I6=u((AWr,T6)=>{"use strict";var zer=_s();function Yer(r){return zer(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}T6.exports=Yer});var dt=u((OWr,L6)=>{"use strict";var $er=I6();L6.exports=$er});var P6=u((SWr,_6)=>{"use strict";var Qer=ir(),Zer=Bs().REGEXP,Ker=dt();function xer(r){var e,t,i;if(t=Qer(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Zer.exec(i.toString()),e)return e[1]}return Ker(r)?"Buffer":t}_6.exports=xer});var je=u((TWr,R6)=>{"use strict";var rtr=P6();R6.exports=rtr});var M6=u((IWr,F6)=>{"use strict";var etr=je();function ttr(r){var e;return r===null?"null":(e=typeof r,e==="object"?etr(r).toLowerCase():e)}F6.exports=ttr});var C6=u((LWr,B6)=>{"use strict";var itr=je();function ntr(r){return itr(r).toLowerCase()}B6.exports=ntr});var kn=u((_Wr,j6)=>{"use strict";var atr=b6(),utr=M6(),str=C6(),otr=atr()?str:utr;j6.exports=otr});var Cs=u((PWr,G6)=>{"use strict";function vtr(r){return r.constructor&&r.constructor.prototype===r}G6.exports=vtr});var V6=u((RWr,ftr)=>{ftr.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var H6=u((FWr,U6)=>{"use strict";var ctr=typeof window>"u"?void 0:window;U6.exports=ctr});var X6=u((MWr,D6)=>{"use strict";var ltr=O(),ptr=Wn(),W6=kn(),gtr=Cs(),mtr=V6(),kt=H6(),k6;function qtr(){var r;if(W6(kt)==="undefined")return!1;for(r in kt)try{ptr(mtr,r)===-1&&ltr(kt,r)&&kt[r]!==null&&W6(kt[r])==="object"&&gtr(kt[r])}catch{return!0}return!1}k6=qtr();D6.exports=k6});var z6=u((BWr,J6)=>{"use strict";var ytr=typeof window<"u";J6.exports=ytr});var Q6=u((CWr,$6)=>{"use strict";var htr=X6(),Y6=Cs(),dtr=z6();function wtr(r){if(dtr===!1&&!htr)return Y6(r);try{return Y6(r)}catch{return!1}}$6.exports=wtr});var Z6=u((jWr,btr)=>{btr.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var rp=u((GWr,x6)=>{"use strict";var Etr=_s(),js=O(),Ntr=Is(),Atr=T3(),Otr=L3(),Str=Q6(),K6=Z6();function Ttr(r){var e,t,i,n,a,s,o;if(n=[],Ntr(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!js(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!Etr(r))return n;t=Atr&&i}for(a in r)!(t&&a==="prototype")&&js(r,a)&&n.push(String(a));if(Otr)for(e=Str(r),o=0;o<K6.length;o++)s=K6[o],!(e&&s==="constructor")&&js(r,s)&&n.push(String(s));return n}x6.exports=Ttr});var tp=u((VWr,ep)=>{"use strict";var Itr=Vf(),Ltr=Hf(),_tr=Gn(),Ptr=m3(),Rtr=rp(),Dn;Ltr?Itr()?Dn=Ptr:Dn=_tr:Dn=Rtr;ep.exports=Dn});var Dt=u((UWr,ip)=>{"use strict";var Ftr=tp();ip.exports=Ftr});var ap=u((HWr,np)=>{"use strict";var Mtr=Dt(),Btr=O(),Ctr=d();function jtr(r,e){var t,i,n;for(t=Mtr(r),n=0;n<t.length;n++){if(i=t[n],Btr(e,i))throw new Error(Ctr("unexpected error. Property already exists on destination object. Property: %s.",i));e[i]=r[i]}return e}np.exports=jtr});var Gs=u((WWr,up)=>{"use strict";var Gtr=jr().isPrimitive;function Vtr(r){return Gtr(r)&&r>=0}up.exports=Vtr});var Vs=u((kWr,sp)=>{"use strict";var Utr=jr().isObject;function Htr(r){return Utr(r)&&r.valueOf()>=0}sp.exports=Htr});var vp=u((DWr,op)=>{"use strict";var Wtr=Gs(),ktr=Vs();function Dtr(r){return Wtr(r)||ktr(r)}op.exports=Dtr});var Ge=u((XWr,cp)=>{"use strict";var fp=b(),Us=vp(),Xtr=Gs(),Jtr=Vs();fp(Us,"isPrimitive",Xtr);fp(Us,"isObject",Jtr);cp.exports=Us});var pp=u((JWr,lp)=>{"use strict";var ztr=Object;lp.exports=ztr});var Xt=u((zWr,gp)=>{"use strict";var Ytr=pp();gp.exports=Ytr});var qp=u((YWr,mp)=>{"use strict";var $tr=kn();function Qtr(r){return $tr(r)==="function"}mp.exports=Qtr});var I=u(($Wr,yp)=>{"use strict";var Ztr=qp();yp.exports=Ztr});var dp=u((QWr,hp)=>{"use strict";var Ktr=Object.getPrototypeOf;hp.exports=Ktr});var bp=u((ZWr,wp)=>{"use strict";function xtr(r){return r.__proto__}wp.exports=xtr});var Np=u((KWr,Ep)=>{"use strict";var rir=ir(),eir=bp();function tir(r){var e=eir(r);return e||e===null?e:rir(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}Ep.exports=tir});var Op=u((xWr,Ap)=>{"use strict";var iir=I(),nir=dp(),air=Np(),Hs;iir(Object.getPrototypeOf)?Hs=nir:Hs=air;Ap.exports=Hs});var Tp=u((rkr,Sp)=>{"use strict";var uir=Xt(),sir=Op();function oir(r){return r==null?null:(r=uir(r),sir(r))}Sp.exports=oir});var wt=u((ekr,Ip)=>{"use strict";var vir=Tp();Ip.exports=vir});var _p=u((tkr,Lp)=>{"use strict";var fir=wt(),cir=ir();function lir(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(cir(r)==="[object Error]")return!0;r=fir(r)}return!1}Lp.exports=lir});var Rp=u((ikr,Pp)=>{"use strict";var pir=_p();Pp.exports=pir});var Ws=u((nkr,Fp)=>{"use strict";function gir(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}Fp.exports=gir});var Bp=u((akr,Mp)=>{"use strict";var mir=Ws(),qir=mir();Mp.exports=qir});var Gp=u((ukr,jp)=>{"use strict";var yir=b(),Cp=Ws(),hir=Bp();yir(Cp,"REGEXP",hir);jp.exports=Cp});var Up=u((skr,Vp)=>{"use strict";var dir=K().isPrimitive,wir=Gp(),bir=d();function Eir(r){if(!dir(r))throw new TypeError(bir("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=wir().exec(r),r?new RegExp(r[1],r[2]):null}Vp.exports=Eir});var Wp=u((okr,Hp)=>{"use strict";var Nir=Up();Hp.exports=Nir});var Dp=u((vkr,kp)=>{"use strict";var Air=typeof Object.getOwnPropertyNames<"u";kp.exports=Air});var zp=u((fkr,Jp)=>{"use strict";var Xp=Xt(),Oir=Xp.getOwnPropertyNames;function Sir(r){return Oir(Xp(r))}Jp.exports=Sir});var $p=u((ckr,Yp)=>{"use strict";var Tir=Xt(),Iir=Dt();function Lir(r){return Iir(Tir(r))}Yp.exports=Lir});var Zp=u((lkr,Qp)=>{"use strict";var _ir=Dp(),Pir=zp(),Rir=$p(),ks;_ir?ks=Pir:ks=Rir;Qp.exports=ks});var xp=u((pkr,Kp)=>{"use strict";var Fir=typeof Object.getOwnPropertyDescriptor<"u";Kp.exports=Fir});var e4=u((gkr,r4)=>{"use strict";var Mir=Object.getOwnPropertyDescriptor;function Bir(r,e){var t;return r==null?null:(t=Mir(r,e),t===void 0?null:t)}r4.exports=Bir});var i4=u((mkr,t4)=>{"use strict";var Cir=O();function jir(r,e){return Cir(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}t4.exports=jir});var a4=u((qkr,n4)=>{"use strict";var Gir=xp(),Vir=e4(),Uir=i4(),Ds;Gir?Ds=Vir:Ds=Uir;n4.exports=Ds});var s4=u((ykr,u4)=>{"use strict";var Hir=typeof Buffer=="function"?Buffer:null;u4.exports=Hir});var v4=u((hkr,o4)=>{"use strict";var Wir=dt(),Xn=s4();function kir(){var r,e;if(typeof Xn!="function")return!1;try{typeof Xn.from=="function"?e=Xn.from([1,2,3,4]):e=new Xn([1,2,3,4]),r=Wir(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}o4.exports=kir});var c4=u((dkr,f4)=>{"use strict";var Dir=v4();f4.exports=Dir});var g4=u(Jn=>{"use strict";Jn.byteLength=Jir;Jn.toByteArray=Yir;Jn.fromByteArray=Zir;var Xr=[],Pr=[],Xir=typeof Uint8Array<"u"?Uint8Array:Array,Xs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(bt=0,l4=Xs.length;bt<l4;++bt)Xr[bt]=Xs[bt],Pr[Xs.charCodeAt(bt)]=bt;var bt,l4;Pr["-".charCodeAt(0)]=62;Pr["_".charCodeAt(0)]=63;function p4(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function Jir(r){var e=p4(r),t=e[0],i=e[1];return(t+i)*3/4-i}function zir(r,e,t){return(e+t)*3/4-t}function Yir(r){var e,t=p4(r),i=t[0],n=t[1],a=new Xir(zir(r,i,n)),s=0,o=n>0?i-4:i,f;for(f=0;f<o;f+=4)e=Pr[r.charCodeAt(f)]<<18|Pr[r.charCodeAt(f+1)]<<12|Pr[r.charCodeAt(f+2)]<<6|Pr[r.charCodeAt(f+3)],a[s++]=e>>16&255,a[s++]=e>>8&255,a[s++]=e&255;return n===2&&(e=Pr[r.charCodeAt(f)]<<2|Pr[r.charCodeAt(f+1)]>>4,a[s++]=e&255),n===1&&(e=Pr[r.charCodeAt(f)]<<10|Pr[r.charCodeAt(f+1)]<<4|Pr[r.charCodeAt(f+2)]>>2,a[s++]=e>>8&255,a[s++]=e&255),a}function $ir(r){return Xr[r>>18&63]+Xr[r>>12&63]+Xr[r>>6&63]+Xr[r&63]}function Qir(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push($ir(i));return n.join("")}function Zir(r){for(var e,t=r.length,i=t%3,n=[],a=16383,s=0,o=t-i;s<o;s+=a)n.push(Qir(r,s,s+a>o?o:s+a));return i===1?(e=r[t-1],n.push(Xr[e>>2]+Xr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(Xr[e>>10]+Xr[e>>4&63]+Xr[e<<2&63]+"=")),n.join("")}});var m4=u(Js=>{Js.read=function(r,e,t,i,n){var a,s,o=n*8-i-1,f=(1<<o)-1,v=f>>1,c=-7,l=t?n-1:0,p=t?-1:1,m=r[e+l];for(l+=p,a=m&(1<<-c)-1,m>>=-c,c+=o;c>0;a=a*256+r[e+l],l+=p,c-=8);for(s=a&(1<<-c)-1,a>>=-c,c+=i;c>0;s=s*256+r[e+l],l+=p,c-=8);if(a===0)a=1-v;else{if(a===f)return s?NaN:(m?-1:1)*(1/0);s=s+Math.pow(2,i),a=a-v}return(m?-1:1)*s*Math.pow(2,a-i)};Js.write=function(r,e,t,i,n,a){var s,o,f,v=a*8-n-1,c=(1<<v)-1,l=c>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,m=i?0:a-1,y=i?1:-1,q=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,s=c):(s=Math.floor(Math.log(e)/Math.LN2),e*(f=Math.pow(2,-s))<1&&(s--,f*=2),s+l>=1?e+=p/f:e+=p*Math.pow(2,1-l),e*f>=2&&(s++,f/=2),s+l>=c?(o=0,s=c):s+l>=1?(o=(e*f-1)*Math.pow(2,n),s=s+l):(o=e*Math.pow(2,l-1)*Math.pow(2,n),s=0));n>=8;r[t+m]=o&255,m+=y,o/=256,n-=8);for(s=s<<n|o,v+=n;v>0;r[t+m]=s&255,m+=y,s/=256,v-=8);r[t+m-y]|=q*128}});var R4=u($t=>{"use strict";var zs=g4(),zt=m4(),q4=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;$t.Buffer=w;$t.SlowBuffer=inr;$t.INSPECT_MAX_BYTES=50;var zn=2147483647;$t.kMaxLength=zn;w.TYPED_ARRAY_SUPPORT=Kir();!w.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function Kir(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(w.prototype,"parent",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.buffer}});Object.defineProperty(w.prototype,"offset",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.byteOffset}});function Kr(r){if(r>zn)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,w.prototype),e}function w(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Zs(r)}return w4(r,e,t)}w.poolSize=8192;function w4(r,e,t){if(typeof r=="string")return rnr(r,e);if(ArrayBuffer.isView(r))return enr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Jr(r,ArrayBuffer)||r&&Jr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Jr(r,SharedArrayBuffer)||r&&Jr(r.buffer,SharedArrayBuffer)))return $s(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return w.from(i,e,t);let n=tnr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return w.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}w.from=function(r,e,t){return w4(r,e,t)};Object.setPrototypeOf(w.prototype,Uint8Array.prototype);Object.setPrototypeOf(w,Uint8Array);function b4(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function xir(r,e,t){return b4(r),r<=0?Kr(r):e!==void 0?typeof t=="string"?Kr(r).fill(e,t):Kr(r).fill(e):Kr(r)}w.alloc=function(r,e,t){return xir(r,e,t)};function Zs(r){return b4(r),Kr(r<0?0:Ks(r)|0)}w.allocUnsafe=function(r){return Zs(r)};w.allocUnsafeSlow=function(r){return Zs(r)};function rnr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!w.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=E4(r,e)|0,i=Kr(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function Ys(r){let e=r.length<0?0:Ks(r.length)|0,t=Kr(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function enr(r){if(Jr(r,Uint8Array)){let e=new Uint8Array(r);return $s(e.buffer,e.byteOffset,e.byteLength)}return Ys(r)}function $s(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,w.prototype),i}function tnr(r){if(w.isBuffer(r)){let e=Ks(r.length)|0,t=Kr(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||ro(r.length)?Kr(0):Ys(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Ys(r.data)}function Ks(r){if(r>=zn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+zn.toString(16)+" bytes");return r|0}function inr(r){return+r!=r&&(r=0),w.alloc(+r)}w.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==w.prototype};w.compare=function(e,t){if(Jr(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),Jr(t,Uint8Array)&&(t=w.from(t,t.offset,t.byteLength)),!w.isBuffer(e)||!w.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,s=Math.min(i,n);a<s;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};w.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};w.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return w.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=w.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let s=e[i];if(Jr(s,Uint8Array))a+s.length>n.length?(w.isBuffer(s)||(s=w.from(s)),s.copy(n,a)):Uint8Array.prototype.set.call(n,s,a);else if(w.isBuffer(s))s.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return n};function E4(r,e){if(w.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Jr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Qs(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return P4(r).length;default:if(n)return i?-1:Qs(r).length;e=(""+e).toLowerCase(),n=!0}}w.byteLength=E4;function nnr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return gnr(this,e,t);case"utf8":case"utf-8":return A4(this,e,t);case"ascii":return lnr(this,e,t);case"latin1":case"binary":return pnr(this,e,t);case"base64":return fnr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return mnr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}w.prototype._isBuffer=!0;function Et(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}w.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)Et(this,t,t+1);return this};w.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)Et(this,t,t+3),Et(this,t+1,t+2);return this};w.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Et(this,t,t+7),Et(this,t+1,t+6),Et(this,t+2,t+5),Et(this,t+3,t+4);return this};w.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?A4(this,0,e):nnr.apply(this,arguments)};w.prototype.toLocaleString=w.prototype.toString;w.prototype.equals=function(e){if(!w.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:w.compare(this,e)===0};w.prototype.inspect=function(){let e="",t=$t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};q4&&(w.prototype[q4]=w.prototype.inspect);w.prototype.compare=function(e,t,i,n,a){if(Jr(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),!w.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let s=a-n,o=i-t,f=Math.min(s,o),v=this.slice(n,a),c=e.slice(t,i);for(let l=0;l<f;++l)if(v[l]!==c[l]){s=v[l],o=c[l];break}return s<o?-1:o<s?1:0};function N4(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,ro(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=w.from(e,i)),w.isBuffer(e))return e.length===0?-1:y4(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):y4(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function y4(r,e,t,i,n){let a=1,s=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,s/=2,o/=2,t/=2}function f(c,l){return a===1?c[l]:c.readUInt16BE(l*a)}let v;if(n){let c=-1;for(v=t;v<s;v++)if(f(r,v)===f(e,c===-1?0:v-c)){if(c===-1&&(c=v),v-c+1===o)return c*a}else c!==-1&&(v-=v-c),c=-1}else for(t+o>s&&(t=s-o),v=t;v>=0;v--){let c=!0;for(let l=0;l<o;l++)if(f(r,v+l)!==f(e,l)){c=!1;break}if(c)return v}return-1}w.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};w.prototype.indexOf=function(e,t,i){return N4(this,e,t,i,!0)};w.prototype.lastIndexOf=function(e,t,i){return N4(this,e,t,i,!1)};function anr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let s;for(s=0;s<i;++s){let o=parseInt(e.substr(s*2,2),16);if(ro(o))return s;r[t+s]=o}return s}function unr(r,e,t,i){return Yn(Qs(e,r.length-t),r,t,i)}function snr(r,e,t,i){return Yn(dnr(e),r,t,i)}function onr(r,e,t,i){return Yn(P4(e),r,t,i)}function vnr(r,e,t,i){return Yn(wnr(e,r.length-t),r,t,i)}w.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let s=!1;for(;;)switch(n){case"hex":return anr(this,e,t,i);case"utf8":case"utf-8":return unr(this,e,t,i);case"ascii":case"latin1":case"binary":return snr(this,e,t,i);case"base64":return onr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return vnr(this,e,t,i);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}};w.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function fnr(r,e,t){return e===0&&t===r.length?zs.fromByteArray(r):zs.fromByteArray(r.slice(e,t))}function A4(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],s=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let f,v,c,l;switch(o){case 1:a<128&&(s=a);break;case 2:f=r[n+1],(f&192)===128&&(l=(a&31)<<6|f&63,l>127&&(s=l));break;case 3:f=r[n+1],v=r[n+2],(f&192)===128&&(v&192)===128&&(l=(a&15)<<12|(f&63)<<6|v&63,l>2047&&(l<55296||l>57343)&&(s=l));break;case 4:f=r[n+1],v=r[n+2],c=r[n+3],(f&192)===128&&(v&192)===128&&(c&192)===128&&(l=(a&15)<<18|(f&63)<<12|(v&63)<<6|c&63,l>65535&&l<1114112&&(s=l))}}s===null?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|s&1023),i.push(s),n+=o}return cnr(i)}var h4=4096;function cnr(r){let e=r.length;if(e<=h4)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=h4));return t}function lnr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function pnr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function gnr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=bnr[r[a]];return n}function mnr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}w.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,w.prototype),n};function ur(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}w.prototype.readUintLE=w.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,s=0;for(;++s<t&&(a*=256);)n+=this[e+s]*a;return n};w.prototype.readUintBE=w.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};w.prototype.readUint8=w.prototype.readUInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]};w.prototype.readUint16LE=w.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]|this[e+1]<<8};w.prototype.readUint16BE=w.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ur(e,2,this.length),this[e]<<8|this[e+1]};w.prototype.readUint32LE=w.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};w.prototype.readUint32BE=w.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};w.prototype.readBigUInt64LE=Ve(function(e){e=e>>>0,Yt(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&ki(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});w.prototype.readBigUInt64BE=Ve(function(e){e=e>>>0,Yt(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&ki(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});w.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=this[e],a=1,s=0;for(;++s<t&&(a*=256);)n+=this[e+s]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};w.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ur(e,t,this.length);let n=t,a=1,s=this[e+--n];for(;n>0&&(a*=256);)s+=this[e+--n]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*t)),s};w.prototype.readInt8=function(e,t){return e=e>>>0,t||ur(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};w.prototype.readInt16LE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};w.prototype.readInt16BE=function(e,t){e=e>>>0,t||ur(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};w.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};w.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};w.prototype.readBigInt64LE=Ve(function(e){e=e>>>0,Yt(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&ki(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});w.prototype.readBigInt64BE=Ve(function(e){e=e>>>0,Yt(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&ki(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});w.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),zt.read(this,e,!0,23,4)};w.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ur(e,4,this.length),zt.read(this,e,!1,23,4)};w.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),zt.read(this,e,!0,52,8)};w.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ur(e,8,this.length),zt.read(this,e,!1,52,8)};function mr(r,e,t,i,n,a){if(!w.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}w.prototype.writeUintLE=w.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;mr(this,e,t,i,o,0)}let a=1,s=0;for(this[t]=e&255;++s<i&&(a*=256);)this[t+s]=e/a&255;return t+i};w.prototype.writeUintBE=w.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;mr(this,e,t,i,o,0)}let a=i-1,s=1;for(this[t+a]=e&255;--a>=0&&(s*=256);)this[t+a]=e/s&255;return t+i};w.prototype.writeUint8=w.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,1,255,0),this[t]=e&255,t+1};w.prototype.writeUint16LE=w.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeUint16BE=w.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeUint32LE=w.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};w.prototype.writeUint32BE=w.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function O4(r,e,t,i,n){_4(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let s=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,t}function S4(r,e,t,i,n){_4(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let s=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=s,s=s>>8,r[t+2]=s,s=s>>8,r[t+1]=s,s=s>>8,r[t]=s,t+8}w.prototype.writeBigUInt64LE=Ve(function(e,t=0){return O4(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeBigUInt64BE=Ve(function(e,t=0){return S4(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});w.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);mr(this,e,t,i,f-1,-f)}let a=0,s=1,o=0;for(this[t]=e&255;++a<i&&(s*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/s>>0)-o&255;return t+i};w.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let f=Math.pow(2,8*i-1);mr(this,e,t,i,f-1,-f)}let a=i-1,s=1,o=0;for(this[t+a]=e&255;--a>=0&&(s*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/s>>0)-o&255;return t+i};w.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};w.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};w.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||mr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};w.prototype.writeBigInt64LE=Ve(function(e,t=0){return O4(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});w.prototype.writeBigInt64BE=Ve(function(e,t=0){return S4(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function T4(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function I4(r,e,t,i,n){return e=+e,t=t>>>0,n||T4(r,e,t,4,34028234663852886e22,-34028234663852886e22),zt.write(r,e,t,i,23,4),t+4}w.prototype.writeFloatLE=function(e,t,i){return I4(this,e,t,!0,i)};w.prototype.writeFloatBE=function(e,t,i){return I4(this,e,t,!1,i)};function L4(r,e,t,i,n){return e=+e,t=t>>>0,n||T4(r,e,t,8,17976931348623157e292,-17976931348623157e292),zt.write(r,e,t,i,52,8),t+8}w.prototype.writeDoubleLE=function(e,t,i){return L4(this,e,t,!0,i)};w.prototype.writeDoubleBE=function(e,t,i){return L4(this,e,t,!1,i)};w.prototype.copy=function(e,t,i,n){if(!w.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};w.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!w.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let s=e.charCodeAt(0);(n==="utf8"&&s<128||n==="latin1")&&(e=s)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let s=w.isBuffer(e)?e:w.from(e,n),o=s.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=s[a%o]}return this};var Jt={};function xs(r,e,t){Jt[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}xs("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);xs("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);xs("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=d4(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=d4(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function d4(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function qnr(r,e,t){Yt(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&ki(e,r.length-(t+1))}function _4(r,e,t,i,n,a){if(r>t||r<e){let s=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${s} and < 2${s} ** ${(a+1)*8}${s}`:o=`>= -(2${s} ** ${(a+1)*8-1}${s}) and < 2 ** ${(a+1)*8-1}${s}`:o=`>= ${e}${s} and <= ${t}${s}`,new Jt.ERR_OUT_OF_RANGE("value",o,r)}qnr(i,n,a)}function Yt(r,e){if(typeof r!="number")throw new Jt.ERR_INVALID_ARG_TYPE(e,"number",r)}function ki(r,e,t){throw Math.floor(r)!==r?(Yt(r,t),new Jt.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Jt.ERR_BUFFER_OUT_OF_BOUNDS:new Jt.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var ynr=/[^+/0-9A-Za-z-_]/g;function hnr(r){if(r=r.split("=")[0],r=r.trim().replace(ynr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function Qs(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let s=0;s<i;++s){if(t=r.charCodeAt(s),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(s+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function dnr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function wnr(r,e){let t,i,n,a=[];for(let s=0;s<r.length&&!((e-=2)<0);++s)t=r.charCodeAt(s),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function P4(r){return zs.toByteArray(hnr(r))}function Yn(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function Jr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function ro(r){return r!==r}var bnr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function Ve(r){return typeof BigInt>"u"?Enr:r}function Enr(){throw new Error("BigInt not supported")}});var M4=u((Akr,F4)=>{"use strict";var Nnr=R4().Buffer;F4.exports=Nnr});var C4=u((Okr,B4)=>{"use strict";function Anr(){throw new Error("not implemented")}B4.exports=Anr});var $n=u((Skr,j4)=>{"use strict";var Onr=c4(),Snr=M4(),Tnr=C4(),eo;Onr()?eo=Snr:eo=Tnr;j4.exports=eo});var V4=u((Tkr,G4)=>{"use strict";var Inr=I(),Lnr=$n(),_nr=Inr(Lnr.from);G4.exports=_nr});var H4=u((Ikr,U4)=>{"use strict";var Pnr=dt(),Rnr=d(),Fnr=$n();function Mnr(r){if(!Pnr(r))throw new TypeError(Rnr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return Fnr.from(r)}U4.exports=Mnr});var k4=u((Lkr,W4)=>{"use strict";var Bnr=dt(),Cnr=d(),jnr=$n();function Gnr(r){if(!Bnr(r))throw new TypeError(Cnr("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new jnr(r)}W4.exports=Gnr});var X4=u((_kr,D4)=>{"use strict";var Vnr=V4(),Unr=H4(),Hnr=k4(),to;Vnr?to=Unr:to=Hnr;D4.exports=to});var z4=u((Pkr,J4)=>{"use strict";var Wnr=ir(),knr=typeof Int8Array=="function";function Dnr(r){return knr&&r instanceof Int8Array||Wnr(r)==="[object Int8Array]"}J4.exports=Dnr});var $4=u((Rkr,Y4)=>{"use strict";var Xnr=z4();Y4.exports=Xnr});var Z4=u((Fkr,Q4)=>{"use strict";var Jnr=127;Q4.exports=Jnr});var x4=u((Mkr,K4)=>{"use strict";var znr=-128;K4.exports=znr});var e8=u((Bkr,r8)=>{"use strict";var Ynr=typeof Int8Array=="function"?Int8Array:null;r8.exports=Ynr});var n8=u((Ckr,i8)=>{"use strict";var $nr=$4(),Qnr=Z4(),Znr=x4(),t8=e8();function Knr(){var r,e;if(typeof t8!="function")return!1;try{e=new t8([1,3.14,-3.14,Qnr+1]),r=$nr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Znr}catch{r=!1}return r}i8.exports=Knr});var u8=u((jkr,a8)=>{"use strict";var xnr=n8();a8.exports=xnr});var o8=u((Gkr,s8)=>{"use strict";var rar=typeof Int8Array=="function"?Int8Array:void 0;s8.exports=rar});var f8=u((Vkr,v8)=>{"use strict";function ear(){throw new Error("not implemented")}v8.exports=ear});var Di=u((Ukr,c8)=>{"use strict";var tar=u8(),iar=o8(),nar=f8(),io;tar()?io=iar:io=nar;c8.exports=io});var p8=u((Hkr,l8)=>{"use strict";var aar=ir(),uar=typeof Uint8Array=="function";function sar(r){return uar&&r instanceof Uint8Array||aar(r)==="[object Uint8Array]"}l8.exports=sar});var m8=u((Wkr,g8)=>{"use strict";var oar=p8();g8.exports=oar});var y8=u((kkr,q8)=>{"use strict";var far=255;q8.exports=far});var d8=u((Dkr,h8)=>{"use strict";var car=typeof Uint8Array=="function"?Uint8Array:null;h8.exports=car});var E8=u((Xkr,b8)=>{"use strict";var lar=m8(),no=y8(),w8=d8();function par(){var r,e;if(typeof w8!="function")return!1;try{e=[1,3.14,-3.14,no+1,no+2],e=new w8(e),r=lar(e)&&e[0]===1&&e[1]===3&&e[2]===no-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}b8.exports=par});var A8=u((Jkr,N8)=>{"use strict";var gar=E8();N8.exports=gar});var S8=u((zkr,O8)=>{"use strict";var mar=typeof Uint8Array=="function"?Uint8Array:void 0;O8.exports=mar});var I8=u((Ykr,T8)=>{"use strict";function qar(){throw new Error("not implemented")}T8.exports=qar});var Qt=u(($kr,L8)=>{"use strict";var yar=A8(),har=S8(),dar=I8(),ao;yar()?ao=har:ao=dar;L8.exports=ao});var P8=u((Qkr,_8)=>{"use strict";var war=ir(),bar=typeof Uint8ClampedArray=="function";function Ear(r){return bar&&r instanceof Uint8ClampedArray||war(r)==="[object Uint8ClampedArray]"}_8.exports=Ear});var F8=u((Zkr,R8)=>{"use strict";var Nar=P8();R8.exports=Nar});var B8=u((Kkr,M8)=>{"use strict";var Aar=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;M8.exports=Aar});var G8=u((xkr,j8)=>{"use strict";var Oar=F8(),C8=B8();function Sar(){var r,e;if(typeof C8!="function")return!1;try{e=new C8([-1,0,1,3.14,4.99,255,256]),r=Oar(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}j8.exports=Sar});var U8=u((rDr,V8)=>{"use strict";var Tar=G8();V8.exports=Tar});var W8=u((eDr,H8)=>{"use strict";var Iar=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;H8.exports=Iar});var D8=u((tDr,k8)=>{"use strict";function Lar(){throw new Error("not implemented")}k8.exports=Lar});var Xi=u((iDr,X8)=>{"use strict";var _ar=U8(),Par=W8(),Rar=D8(),uo;_ar()?uo=Par:uo=Rar;X8.exports=uo});var z8=u((nDr,J8)=>{"use strict";var Far=ir(),Mar=typeof Int16Array=="function";function Bar(r){return Mar&&r instanceof Int16Array||Far(r)==="[object Int16Array]"}J8.exports=Bar});var $8=u((aDr,Y8)=>{"use strict";var Car=z8();Y8.exports=Car});var Z8=u((uDr,Q8)=>{"use strict";var jar=32767;Q8.exports=jar});var x8=u((sDr,K8)=>{"use strict";var Gar=-32768;K8.exports=Gar});var e5=u((oDr,r5)=>{"use strict";var Var=typeof Int16Array=="function"?Int16Array:null;r5.exports=Var});var n5=u((vDr,i5)=>{"use strict";var Uar=$8(),Har=Z8(),War=x8(),t5=e5();function kar(){var r,e;if(typeof t5!="function")return!1;try{e=new t5([1,3.14,-3.14,Har+1]),r=Uar(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===War}catch{r=!1}return r}i5.exports=kar});var u5=u((fDr,a5)=>{"use strict";var Dar=n5();a5.exports=Dar});var o5=u((cDr,s5)=>{"use strict";var Xar=typeof Int16Array=="function"?Int16Array:void 0;s5.exports=Xar});var f5=u((lDr,v5)=>{"use strict";function Jar(){throw new Error("not implemented")}v5.exports=Jar});var Ji=u((pDr,c5)=>{"use strict";var zar=u5(),Yar=o5(),$ar=f5(),so;zar()?so=Yar:so=$ar;c5.exports=so});var p5=u((gDr,l5)=>{"use strict";var Qar=ir(),Zar=typeof Uint16Array=="function";function Kar(r){return Zar&&r instanceof Uint16Array||Qar(r)==="[object Uint16Array]"}l5.exports=Kar});var m5=u((mDr,g5)=>{"use strict";var xar=p5();g5.exports=xar});var y5=u((qDr,q5)=>{"use strict";var r0r=65535;q5.exports=r0r});var d5=u((yDr,h5)=>{"use strict";var e0r=typeof Uint16Array=="function"?Uint16Array:null;h5.exports=e0r});var E5=u((hDr,b5)=>{"use strict";var t0r=m5(),oo=y5(),w5=d5();function i0r(){var r,e;if(typeof w5!="function")return!1;try{e=[1,3.14,-3.14,oo+1,oo+2],e=new w5(e),r=t0r(e)&&e[0]===1&&e[1]===3&&e[2]===oo-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}b5.exports=i0r});var A5=u((dDr,N5)=>{"use strict";var n0r=E5();N5.exports=n0r});var S5=u((wDr,O5)=>{"use strict";var a0r=typeof Uint16Array=="function"?Uint16Array:void 0;O5.exports=a0r});var I5=u((bDr,T5)=>{"use strict";function u0r(){throw new Error("not implemented")}T5.exports=u0r});var Zt=u((EDr,L5)=>{"use strict";var s0r=A5(),o0r=S5(),v0r=I5(),vo;s0r()?vo=o0r:vo=v0r;L5.exports=vo});var P5=u((NDr,_5)=>{"use strict";var f0r=ir(),c0r=typeof Int32Array=="function";function l0r(r){return c0r&&r instanceof Int32Array||f0r(r)==="[object Int32Array]"}_5.exports=l0r});var Qn=u((ADr,R5)=>{"use strict";var p0r=P5();R5.exports=p0r});var Kt=u((ODr,F5)=>{"use strict";var g0r=2147483647;F5.exports=g0r});var B5=u((SDr,M5)=>{"use strict";var m0r=-2147483648;M5.exports=m0r});var j5=u((TDr,C5)=>{"use strict";var q0r=typeof Int32Array=="function"?Int32Array:null;C5.exports=q0r});var U5=u((IDr,V5)=>{"use strict";var y0r=Qn(),h0r=Kt(),d0r=B5(),G5=j5();function w0r(){var r,e;if(typeof G5!="function")return!1;try{e=new G5([1,3.14,-3.14,h0r+1]),r=y0r(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===d0r}catch{r=!1}return r}V5.exports=w0r});var W5=u((LDr,H5)=>{"use strict";var b0r=U5();H5.exports=b0r});var D5=u((_Dr,k5)=>{"use strict";var E0r=typeof Int32Array=="function"?Int32Array:void 0;k5.exports=E0r});var J5=u((PDr,X5)=>{"use strict";function N0r(){throw new Error("not implemented")}X5.exports=N0r});var Nt=u((RDr,z5)=>{"use strict";var A0r=W5(),O0r=D5(),S0r=J5(),fo;A0r()?fo=O0r:fo=S0r;z5.exports=fo});var $5=u((FDr,Y5)=>{"use strict";var T0r=ir(),I0r=typeof Uint32Array=="function";function L0r(r){return I0r&&r instanceof Uint32Array||T0r(r)==="[object Uint32Array]"}Y5.exports=L0r});var xr=u((MDr,Q5)=>{"use strict";var _0r=$5();Q5.exports=_0r});var K5=u((BDr,Z5)=>{"use strict";var P0r=typeof Uint32Array=="function"?Uint32Array:null;Z5.exports=P0r});var e9=u((CDr,r9)=>{"use strict";var R0r=xr(),co=Wt(),x5=K5();function F0r(){var r,e;if(typeof x5!="function")return!1;try{e=[1,3.14,-3.14,co+1,co+2],e=new x5(e),r=R0r(e)&&e[0]===1&&e[1]===3&&e[2]===co-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}r9.exports=F0r});var i9=u((jDr,t9)=>{"use strict";var M0r=e9();t9.exports=M0r});var a9=u((GDr,n9)=>{"use strict";var B0r=typeof Uint32Array=="function"?Uint32Array:void 0;n9.exports=B0r});var s9=u((VDr,u9)=>{"use strict";function C0r(){throw new Error("not implemented")}u9.exports=C0r});var cr=u((UDr,o9)=>{"use strict";var j0r=i9(),G0r=a9(),V0r=s9(),lo;j0r()?lo=G0r:lo=V0r;o9.exports=lo});var f9=u((HDr,v9)=>{"use strict";var U0r=ir(),H0r=typeof Float32Array=="function";function W0r(r){return H0r&&r instanceof Float32Array||U0r(r)==="[object Float32Array]"}v9.exports=W0r});var l9=u((WDr,c9)=>{"use strict";var k0r=f9();c9.exports=k0r});var g9=u((kDr,p9)=>{"use strict";var D0r=typeof Float32Array=="function"?Float32Array:null;p9.exports=D0r});var y9=u((DDr,q9)=>{"use strict";var X0r=l9(),J0r=P(),m9=g9();function z0r(){var r,e;if(typeof m9!="function")return!1;try{e=new m9([1,3.14,-3.14,5e40]),r=X0r(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===J0r}catch{r=!1}return r}q9.exports=z0r});var d9=u((XDr,h9)=>{"use strict";var Y0r=y9();h9.exports=Y0r});var b9=u((JDr,w9)=>{"use strict";var $0r=typeof Float32Array=="function"?Float32Array:void 0;w9.exports=$0r});var N9=u((zDr,E9)=>{"use strict";function Q0r(){throw new Error("not implemented")}E9.exports=Q0r});var re=u((YDr,A9)=>{"use strict";var Z0r=d9(),K0r=b9(),x0r=N9(),po;Z0r()?po=K0r:po=x0r;A9.exports=po});var S9=u(($Dr,O9)=>{"use strict";var rur=ir(),eur=typeof Float64Array=="function";function tur(r){return eur&&r instanceof Float64Array||rur(r)==="[object Float64Array]"}O9.exports=tur});var I9=u((QDr,T9)=>{"use strict";var iur=S9();T9.exports=iur});var _9=u((ZDr,L9)=>{"use strict";var nur=typeof Float64Array=="function"?Float64Array:null;L9.exports=nur});var F9=u((KDr,R9)=>{"use strict";var aur=I9(),P9=_9();function uur(){var r,e;if(typeof P9!="function")return!1;try{e=new P9([1,3.14,-3.14,NaN]),r=aur(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}R9.exports=uur});var go=u((xDr,M9)=>{"use strict";var sur=F9();M9.exports=sur});var C9=u((rXr,B9)=>{"use strict";var our=typeof Float64Array=="function"?Float64Array:void 0;B9.exports=our});var G9=u((eXr,j9)=>{"use strict";function vur(){throw new Error("not implemented")}j9.exports=vur});var gr=u((tXr,V9)=>{"use strict";var fur=go(),cur=C9(),lur=G9(),mo;fur()?mo=cur:mo=lur;V9.exports=mo});var W9=u((iXr,H9)=>{"use strict";var pur=Di(),gur=Qt(),mur=Xi(),qur=Ji(),yur=Zt(),hur=Nt(),dur=cr(),wur=re(),bur=gr(),U9;function Eur(r){return new pur(r)}function Nur(r){return new gur(r)}function Aur(r){return new mur(r)}function Our(r){return new qur(r)}function Sur(r){return new yur(r)}function Tur(r){return new hur(r)}function Iur(r){return new dur(r)}function Lur(r){return new wur(r)}function _ur(r){return new bur(r)}function Pur(){var r={int8array:Eur,uint8array:Nur,uint8clampedarray:Aur,int16array:Our,uint16array:Sur,int32array:Tur,uint32array:Iur,float32array:Lur,float64array:_ur};return r}U9=Pur();H9.exports=U9});var z9=u((nXr,J9)=>{"use strict";var Zn=O(),qo=pr(),k9=dt(),Rur=Rp(),D9=kn(),Fur=Wp(),Mur=Wn(),X9=Dt(),Bur=Zp(),zi=a4(),Cur=wt(),Yi=Ce(),jur=X4(),Gur=W9();function Vur(r){var e,t,i,n,a,s,o,f;for(e=[],n=[],o=Object.create(Cur(r)),e.push(r),n.push(o),t=Bur(r),f=0;f<t.length;f++)i=t[f],a=zi(r,i),Zn(a,"value")&&(s=qo(r[i])?[]:{},a.value=At(r[i],s,e,n,-1)),Yi(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function Uur(r){var e=[],t=[],i,n,a,s,o,f;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=X9(r),f=0;f<i.length;f++)s=i[f],n=zi(r,s),Zn(n,"value")&&(a=qo(r[s])?[]:{},n.value=At(r[s],a,e,t,-1)),Yi(o,s,n);return o}function At(r,e,t,i,n){var a,s,o,f,v,c,l,p,m,y;if(n-=1,typeof r!="object"||r===null)return r;if(k9(r))return jur(r);if(Rur(r))return Uur(r);if(o=D9(r),o==="date")return new Date(+r);if(o==="regexp")return Fur(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(v=Gur[o],v)return v(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?Vur(r):{};if(s=X9(r),n>0)for(a=o,y=0;y<s.length;y++){if(c=s[y],p=r[c],o=D9(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||k9(p)){a==="object"?(f=zi(r,c),Zn(f,"value")&&(f.value=At(p)),Yi(e,c,f)):e[c]=At(p);continue}if(m=Mur(t,p),m!==-1){e[c]=i[m];continue}l=qo(p)?new Array(p.length):{},t.push(p),i.push(l),a==="array"?e[c]=At(p,l,t,i,n):(f=zi(r,c),Zn(f,"value")&&(f.value=At(p,l,t,i,n)),Yi(e,c,f))}else if(o==="array")for(y=0;y<s.length;y++)c=s[y],e[c]=r[c];else for(y=0;y<s.length;y++)c=s[y],f=zi(r,c),Yi(e,c,f);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}J9.exports=At});var $9=u((aXr,Y9)=>{"use strict";var Hur=pr(),Wur=Ge().isPrimitive,kur=d(),Dur=P(),Xur=z9();function Jur(r,e){var t;if(arguments.length>1){if(!Wur(e))throw new TypeError(kur("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(e===0)return r}else e=Dur;return t=Hur(r)?new Array(r.length):{},Xur(r,t,[r],[t],e)}Y9.exports=Jur});var Z9=u((uXr,Q9)=>{"use strict";var zur=$9();Q9.exports=zur});var K9=u((sXr,Yur)=>{Yur.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var r7=u((oXr,x9)=>{"use strict";var $ur=Z9(),Qur=K9();function Zur(){return $ur(Qur)}x9.exports=Zur});var t7=u((vXr,e7)=>{"use strict";var Kur=pr();function xur(r){return typeof r=="object"&&r!==null&&!Kur(r)}e7.exports=xur});var Kn=u((fXr,i7)=>{"use strict";var rsr=t7();i7.exports=rsr});var u7=u((cXr,a7)=>{"use strict";var esr=Kn(),n7=I(),tsr=wt(),xn=O(),isr=ir(),nsr=Object.prototype;function asr(r){var e;for(e in r)if(!xn(r,e))return!1;return!0}function usr(r){var e;return esr(r)?(e=tsr(r),e?!xn(r,"constructor")&&xn(e,"constructor")&&n7(e.constructor)&&isr(e.constructor)==="[object Function]"&&xn(e,"isPrototypeOf")&&n7(e.isPrototypeOf)&&(e===nsr||asr(r)):!0):!1}a7.exports=usr});var T=u((lXr,s7)=>{"use strict";var ssr=u7();s7.exports=ssr});var v7=u((pXr,o7)=>{"use strict";var osr=Ce();function vsr(r,e,t){osr(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}o7.exports=vsr});var c7=u((gXr,f7)=>{"use strict";var fsr=v7();f7.exports=fsr});var p7=u((mXr,l7)=>{"use strict";var csr=P(),lsr=X();function psr(r){return r===csr||r===lsr}l7.exports=psr});var Rr=u((qXr,g7)=>{"use strict";var gsr=p7();g7.exports=gsr});var q7=u((yXr,m7)=>{"use strict";function msr(r){return Math.abs(r)}m7.exports=msr});var Y=u((hXr,y7)=>{"use strict";var qsr=q7();y7.exports=qsr});var d7=u((dXr,h7)=>{"use strict";var ysr=Qt(),hsr=Zt(),dsr={uint16:hsr,uint8:ysr};h7.exports=dsr});var N7=u((wXr,E7)=>{"use strict";var w7=d7(),b7;function wsr(){var r,e;return r=new w7.uint16(1),r[0]=4660,e=new w7.uint8(r.buffer),e[0]===52}b7=wsr();E7.exports=b7});var Ot=u((bXr,A7)=>{"use strict";var bsr=N7();A7.exports=bsr});var S7=u((EXr,O7)=>{"use strict";var Esr=Ot(),yo;Esr===!0?yo=1:yo=0;O7.exports=yo});var L7=u((NXr,I7)=>{"use strict";var Nsr=cr(),Asr=gr(),Osr=S7(),T7=new Asr(1),Ssr=new Nsr(T7.buffer);function Tsr(r){return T7[0]=r,Ssr[Osr]}I7.exports=Tsr});var tr=u((AXr,_7)=>{"use strict";var Isr=L7();_7.exports=Isr});var R7=u((OXr,P7)=>{"use strict";var Lsr=Ot(),ho;Lsr===!0?ho=1:ho=0;P7.exports=ho});var M7=u((SXr,F7)=>{"use strict";var _sr=cr(),Psr=gr(),Rsr=R7(),wo=new Psr(1),Fsr=new _sr(wo.buffer);function Msr(r,e){return wo[0]=r,Fsr[Rsr]=e>>>0,wo[0]}F7.exports=Msr});var ee=u((TXr,B7)=>{"use strict";var Bsr=M7();B7.exports=Bsr});var zr=u((IXr,C7)=>{"use strict";var Csr=1023;C7.exports=Csr});var G7=u((LXr,j7)=>{"use strict";function jsr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}j7.exports=jsr});var U7=u((_Xr,V7)=>{"use strict";function Gsr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}V7.exports=Gsr});var D7=u((PXr,k7)=>{"use strict";var H7=tr(),Vsr=ee(),Usr=E(),Hsr=zr(),Wsr=X(),ksr=G7(),Dsr=U7(),ra=.6931471803691238,ea=19082149292705877e-26,Xsr=0x40000000000000,Jsr=.3333333333333333,W7=1048575,zsr=2146435072,Ysr=1048576,$sr=1072693248;function Qsr(r){var e,t,i,n,a,s,o,f,v,c,l,p;return r===0?Wsr:Usr(r)||r<0?NaN:(t=H7(r),a=0,t<Ysr&&(a-=54,r*=Xsr,t=H7(r)),t>=zsr?r+r:(a+=(t>>20)-Hsr|0,t&=W7,f=t+614244&1048576|0,r=Vsr(r,t|f^$sr),a+=f>>20|0,o=r-1,(W7&2+t)<3?o===0?a===0?0:a*ra+a*ea:(s=o*o*(.5-Jsr*o),a===0?o-s:a*ra-(s-a*ea-o)):(c=o/(2+o),p=c*c,f=t-398458|0,l=p*p,v=440401-t|0,n=l*ksr(l),i=p*Dsr(l),f|=v,s=i+n,f>0?(e=.5*o*o,a===0?o-(e-c*(e+s)):a*ra-(e-(c*(e+s)+a*ea)-o)):a===0?o-c*(o-s):a*ra-(c*(o-s)-a*ea-o))))}k7.exports=Qsr});var C=u((RXr,X7)=>{"use strict";var Zsr=D7();X7.exports=Zsr});var z7=u((FXr,J7)=>{"use strict";var Ksr=Math.ceil;J7.exports=Ksr});var $i=u((MXr,Y7)=>{"use strict";var xsr=z7();Y7.exports=xsr});var Q7=u((BXr,$7)=>{"use strict";var ror=x(),eor=$i();function tor(r){return r<0?eor(r):ror(r)}$7.exports=tor});var ta=u((CXr,Z7)=>{"use strict";var ior=Q7();Z7.exports=ior});var x7=u((jXr,K7)=>{"use strict";function nor(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}K7.exports=nor});var eg=u((GXr,rg)=>{"use strict";function aor(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}rg.exports=aor});var ig=u((VXr,tg)=>{"use strict";var uor=x7(),sor=eg();function oor(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*uor(a),i+=n*n*sor(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}tg.exports=oor});var bo=u((UXr,ng)=>{"use strict";var vor=ig();ng.exports=vor});var sg=u((HXr,ug)=>{"use strict";var ag=-.16666666666666632,cor=.00833333333332249,lor=-.0001984126982985795,por=27557313707070068e-22,gor=-25050760253406863e-24,mor=158969099521155e-24;function qor(r,e){var t,i,n,a;return a=r*r,n=a*a,t=cor+a*(lor+a*por)+a*n*(gor+a*mor),i=a*r,e===0?r+i*(ag+a*t):r-(a*(.5*e-i*t)-e-i*ag)}ug.exports=qor});var Eo=u((WXr,og)=>{"use strict";var yor=sg();og.exports=yor});var Yr=u((kXr,vg)=>{"use strict";var hor=2147483647;vg.exports=hor});var Qi=u((DXr,fg)=>{"use strict";var dor=2146435072;fg.exports=dor});var ia=u((XXr,cg)=>{"use strict";var wor=1048575;cg.exports=wor});var pg=u((JXr,lg)=>{"use strict";var bor=Ot(),No;bor===!0?No=0:No=1;lg.exports=No});var qg=u((zXr,mg)=>{"use strict";var Eor=cr(),Nor=gr(),Aor=pg(),gg=new Nor(1),Oor=new Eor(gg.buffer);function Sor(r){return gg[0]=r,Oor[Aor]}mg.exports=Sor});var hg=u((YXr,yg)=>{"use strict";var Tor=qg();yg.exports=Tor});var bg=u(($Xr,wg)=>{"use strict";var Ior=Ot(),dg,Ao,Oo;Ior===!0?(Ao=1,Oo=0):(Ao=0,Oo=1);dg={HIGH:Ao,LOW:Oo};wg.exports=dg});var Sg=u((QXr,Og)=>{"use strict";var Lor=cr(),_or=gr(),Ng=bg(),Ag=new _or(1),Eg=new Lor(Ag.buffer),Por=Ng.HIGH,Ror=Ng.LOW;function For(r,e){return Eg[Por]=r,Eg[Ror]=e,Ag[0]}Og.exports=For});var xt=u((ZXr,Tg)=>{"use strict";var Mor=Sg();Tg.exports=Mor});var So=u((KXr,Ig)=>{"use strict";var Bor=1023;Ig.exports=Bor});var _g=u((xXr,Lg)=>{"use strict";var Cor=-1023;Lg.exports=Cor});var To=u((rJr,Pg)=>{"use strict";var jor=-1074;Pg.exports=jor});var Io=u((eJr,Rg)=>{"use strict";var Gor=2147483648;Rg.exports=Gor});var Bg=u((tJr,Mg)=>{"use strict";var Vor=Ot(),Fg,Lo,_o;Vor===!0?(Lo=1,_o=0):(Lo=0,_o=1);Fg={HIGH:Lo,LOW:_o};Mg.exports=Fg});var Po=u((iJr,Vg)=>{"use strict";var Uor=cr(),Hor=gr(),jg=Bg(),Gg=new Hor(1),Cg=new Uor(Gg.buffer),Wor=jg.HIGH,kor=jg.LOW;function Dor(r,e,t,i){return Gg[0]=r,e[i]=Cg[Wor],e[i+t]=Cg[kor],e}Vg.exports=Dor});var Hg=u((nJr,Ug)=>{"use strict";var Xor=Po();function Jor(r){return Xor(r,[0>>>0,0>>>0],1,0)}Ug.exports=Jor});var ri=u((aJr,kg)=>{"use strict";var zor=b(),Wg=Hg(),Yor=Po();zor(Wg,"assign",Yor);kg.exports=Wg});var Xg=u((uJr,Dg)=>{"use strict";var $or=Io(),Qor=Yr(),Zor=ri(),Kor=tr(),xor=xt(),Ro=[0,0];function r1r(r,e){var t,i;return Zor.assign(r,Ro,1,0),t=Ro[0],t&=Qor,i=Kor(e),i&=$or,t|=i,xor(t,Ro[1])}Dg.exports=r1r});var na=u((sJr,Jg)=>{"use strict";var e1r=Xg();Jg.exports=e1r});var Fo=u((oJr,zg)=>{"use strict";var t1r=22250738585072014e-324;zg.exports=t1r});var Mo=u((vJr,Yg)=>{"use strict";var i1r=Fo(),n1r=Rr(),a1r=E(),u1r=Y(),s1r=4503599627370496;function o1r(r,e,t,i){return a1r(r)||n1r(r)?(e[i]=r,e[i+t]=0,e):r!==0&&u1r(r)<i1r?(e[i]=r*s1r,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}Yg.exports=o1r});var Qg=u((fJr,$g)=>{"use strict";var v1r=Mo();function f1r(r){return v1r(r,[0,0],1,0)}$g.exports=f1r});var xg=u((cJr,Kg)=>{"use strict";var c1r=b(),Zg=Qg(),l1r=Mo();c1r(Zg,"assign",l1r);Kg.exports=Zg});var em=u((lJr,rm)=>{"use strict";var p1r=tr(),g1r=Qi(),m1r=zr();function q1r(r){var e=p1r(r);return e=(e&g1r)>>>20,e-m1r|0}rm.exports=q1r});var im=u((pJr,tm)=>{"use strict";var y1r=em();tm.exports=y1r});var am=u((gJr,nm)=>{"use strict";var h1r=P(),d1r=X(),w1r=zr(),b1r=So(),E1r=_g(),N1r=To(),A1r=E(),O1r=Rr(),S1r=na(),T1r=xg().assign,I1r=im(),L1r=ri(),_1r=xt(),P1r=2220446049250313e-31,R1r=2148532223>>>0,Bo=[0,0],Co=[0,0];function F1r(r,e){var t,i;return e===0||r===0||A1r(r)||O1r(r)?r:(T1r(r,Bo,1,0),r=Bo[0],e+=Bo[1],e+=I1r(r),e<N1r?S1r(0,r):e>b1r?r<0?d1r:h1r:(e<=E1r?(e+=52,i=P1r):i=1,L1r.assign(r,Co,1,0),t=Co[0],t&=R1r,t|=e+w1r<<20,i*_1r(t,Co[1])))}nm.exports=F1r});var aa=u((mJr,um)=>{"use strict";var M1r=am();um.exports=M1r});var om=u((qJr,sm)=>{"use strict";function B1r(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}sm.exports=B1r});var jo=u((yJr,vm)=>{"use strict";var C1r=om();vm.exports=C1r});var cm=u((hJr,fm)=>{"use strict";var j1r=jo();function G1r(r){return j1r(0,r)}fm.exports=G1r});var pm=u((dJr,lm)=>{"use strict";var V1r=cm();lm.exports=V1r});var hm=u((wJr,ym)=>{"use strict";var U1r=x(),ua=aa(),va=pm(),mm=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],H1r=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Go=16777216,Vo=5960464477539063e-23,sa=va(20),gm=va(20),oa=va(20),vr=va(20);function qm(r,e,t,i,n,a,s,o,f){var v,c,l,p,m,y,q,g,h;for(p=a,h=i[t],g=t,m=0;g>0;m++)c=Vo*h|0,vr[m]=h-Go*c|0,h=i[g-1]+c,g-=1;if(h=ua(h,n),h-=8*U1r(h*.125),q=h|0,h-=q,l=0,n>0?(m=vr[t-1]>>24-n,q+=m,vr[t-1]-=m<<24-n,l=vr[t-1]>>23-n):n===0?l=vr[t-1]>>23:h>=.5&&(l=2),l>0){for(q+=1,v=0,m=0;m<t;m++)g=vr[m],v===0?g!==0&&(v=1,vr[m]=16777216-g):vr[m]=16777215-g;if(n>0)switch(n){case 1:vr[t-1]&=8388607;break;case 2:vr[t-1]&=4194303;break}l===2&&(h=1-h,v!==0&&(h-=ua(1,n)))}if(h===0){for(g=0,m=t-1;m>=a;m--)g|=vr[m];if(g===0){for(y=1;vr[a-y]===0;y++);for(m=t+1;m<=t+y;m++){for(f[o+m]=mm[s+m],c=0,g=0;g<=o;g++)c+=r[g]*f[o+(m-g)];i[m]=c}return t+=y,qm(r,e,t,i,n,a,s,o,f)}}if(h===0)for(t-=1,n-=24;vr[t]===0;)t-=1,n-=24;else h=ua(h,-n),h>=Go?(c=Vo*h|0,vr[t]=h-Go*c|0,t+=1,n+=24,vr[t]=c):vr[t]=h|0;for(c=ua(1,n),m=t;m>=0;m--)i[m]=c*vr[m],c*=Vo;for(m=t;m>=0;m--){for(c=0,y=0;y<=p&&y<=t-m;y++)c+=H1r[y]*i[m+y];oa[t-m]=c}for(c=0,m=t;m>=0;m--)c+=oa[m];for(l===0?e[0]=c:e[0]=-c,c=oa[0]-c,m=1;m<=t;m++)c+=oa[m];return l===0?e[1]=c:e[1]=-c,q&7}function W1r(r,e,t,i){var n,a,s,o,f,v,c,l,p;for(a=4,o=i-1,s=(t-3)/24|0,s<0&&(s=0),v=t-24*(s+1),l=s-o,p=o+a,c=0;c<=p;c++)l<0?sa[c]=0:sa[c]=mm[l],l+=1;for(c=0;c<=a;c++){for(n=0,l=0;l<=o;l++)n+=r[l]*sa[o+(c-l)];gm[c]=n}return f=a,qm(r,e,f,gm,v,a,s,o,sa)}ym.exports=W1r});var wm=u((bJr,dm)=>{"use strict";var k1r=Math.round;dm.exports=k1r});var Uo=u((EJr,bm)=>{"use strict";var D1r=wm();bm.exports=D1r});var Om=u((NJr,Am)=>{"use strict";var X1r=Uo(),Em=tr(),J1r=.6366197723675814,z1r=1.5707963267341256,Y1r=6077100506506192e-26,$1r=6077100506303966e-26,Q1r=20222662487959506e-37,Z1r=20222662487111665e-37,K1r=84784276603689e-45,Nm=2047;function x1r(r,e,t){var i,n,a,s,o,f,v;return n=X1r(r*J1r),s=r-n*z1r,o=n*Y1r,v=e>>20|0,t[0]=s-o,i=Em(t[0]),f=v-(i>>20&Nm),f>16&&(a=s,o=n*$1r,s=a-o,o=n*Q1r-(a-s-o),t[0]=s-o,i=Em(t[0]),f=v-(i>>20&Nm),f>49&&(a=s,o=n*Z1r,s=a-o,o=n*K1r-(a-s-o),t[0]=s-o)),t[1]=s-t[0]-o,n}Am.exports=x1r});var Tm=u((AJr,Sm)=>{"use strict";var rvr=Yr(),evr=Qi(),tvr=ia(),ivr=tr(),nvr=hg(),avr=xt(),uvr=hm(),fa=Om(),svr=0,ovr=16777216,Ue=1.5707963267341256,St=6077100506506192e-26,ca=2*St,la=3*St,pa=4*St,vvr=598523,fvr=1072243195,cvr=1073928572,lvr=1074752122,pvr=1074977148,gvr=1075183036,mvr=1075388923,qvr=1075594811,yvr=1094263291,Zi=[0,0,0],Ki=[0,0];function hvr(r,e){var t,i,n,a,s,o,f,v;if(n=ivr(r),a=n&rvr|0,a<=fvr)return e[0]=r,e[1]=0,0;if(a<=lvr)return(a&tvr)===vvr?fa(r,a,e):a<=cvr?r>0?(v=r-Ue,e[0]=v-St,e[1]=v-e[0]-St,1):(v=r+Ue,e[0]=v+St,e[1]=v-e[0]+St,-1):r>0?(v=r-2*Ue,e[0]=v-ca,e[1]=v-e[0]-ca,2):(v=r+2*Ue,e[0]=v+ca,e[1]=v-e[0]+ca,-2);if(a<=qvr)return a<=gvr?a===pvr?fa(r,a,e):r>0?(v=r-3*Ue,e[0]=v-la,e[1]=v-e[0]-la,3):(v=r+3*Ue,e[0]=v+la,e[1]=v-e[0]+la,-3):a===mvr?fa(r,a,e):r>0?(v=r-4*Ue,e[0]=v-pa,e[1]=v-e[0]-pa,4):(v=r+4*Ue,e[0]=v+pa,e[1]=v-e[0]+pa,-4);if(a<yvr)return fa(r,a,e);if(a>=evr)return e[0]=NaN,e[1]=NaN,0;for(t=nvr(r),i=(a>>20)-1046,v=avr(a-(i<<20|0),t),o=0;o<2;o++)Zi[o]=v|0,v=(v-Zi[o])*ovr;for(Zi[2]=v,s=3;Zi[s-1]===svr;)s-=1;return f=uvr(Zi,Ki,i,s,1),r<0?(e[0]=-Ki[0],e[1]=-Ki[1],-f):(e[0]=Ki[0],e[1]=Ki[1],f)}Sm.exports=hvr});var xi=u((OJr,Im)=>{"use strict";var dvr=Tm();Im.exports=dvr});var Pm=u((SJr,_m)=>{"use strict";var wvr=tr(),Ho=bo(),Lm=Eo(),bvr=xi(),te=[0,0],Evr=2147483647,Nvr=1072243195,Avr=1044381696,Ovr=2146435072;function Svr(r){var e,t;if(e=wvr(r),e&=Evr,e<=Nvr)return e<Avr?1:Ho(r,0);if(e>=Ovr)return NaN;switch(t=bvr(r,te),t&3){case 0:return Ho(te[0],te[1]);case 1:return-Lm(te[0],te[1]);case 2:return-Ho(te[0],te[1]);default:return Lm(te[0],te[1])}}_m.exports=Svr});var Tt=u((TJr,Rm)=>{"use strict";var Tvr=Pm();Rm.exports=Tvr});var Bm=u((IJr,Mm)=>{"use strict";var Ivr=Yr(),Lvr=Qi(),_vr=tr(),Fm=bo(),Wo=Eo(),Pvr=xi(),Rvr=1072243195,Fvr=1045430272,ie=[0,0];function Mvr(r){var e,t;if(e=_vr(r),e&=Ivr,e<=Rvr)return e<Fvr?r:Wo(r,0);if(e>=Lvr)return NaN;switch(t=Pvr(r,ie),t&3){case 0:return Wo(ie[0],ie[1]);case 1:return Fm(ie[0],ie[1]);case 2:return-Wo(ie[0],ie[1]);default:return-Fm(ie[0],ie[1])}}Mm.exports=Mvr});var It=u((LJr,Cm)=>{"use strict";var Bvr=Bm();Cm.exports=Bvr});var Ir=u((_Jr,jm)=>{"use strict";var Cvr=3.141592653589793;jm.exports=Cvr});var Um=u((PJr,Vm)=>{"use strict";var jvr=E(),Gvr=Rr(),Gm=Tt(),ko=It(),Vvr=Y(),rn=na(),en=Ir();function Uvr(r){var e,t;return jvr(r)?NaN:Gvr(r)?NaN:(t=r%2,e=Vvr(t),e===0||e===1?rn(0,t):e<.25?ko(en*t):e<.75?(e=.5-e,rn(Gm(en*e),t)):e<1.25?(t=rn(1,t)-t,ko(en*t)):e<1.75?(e-=1.5,-rn(Gm(en*e),t)):(t-=rn(2,t),ko(en*t)))}Vm.exports=Uvr});var tn=u((RJr,Hm)=>{"use strict";var Hvr=Um();Hm.exports=Hvr});var km=u((FJr,Wm)=>{"use strict";function Wvr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}Wm.exports=Wvr});var Xm=u((MJr,Dm)=>{"use strict";function kvr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}Dm.exports=kvr});var zm=u((BJr,Jm)=>{"use strict";function Dvr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}Jm.exports=Dvr});var $m=u((CJr,Ym)=>{"use strict";function Xvr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}Ym.exports=Xvr});var Zm=u((jJr,Qm)=>{"use strict";function Jvr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}Qm.exports=Jvr});var xm=u((GJr,Km)=>{"use strict";function zvr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}Km.exports=zvr});var eq=u((VJr,rq)=>{"use strict";function Yvr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}rq.exports=Yvr});var iq=u((UJr,tq)=>{"use strict";function $vr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}tq.exports=$vr});var aq=u((HJr,nq)=>{"use strict";function Qvr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}nq.exports=Qvr});var sq=u((WJr,uq)=>{"use strict";function Zvr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}uq.exports=Zvr});var fq=u((kJr,vq)=>{"use strict";var Kvr=E(),xvr=Rr(),r2r=Y(),ei=C(),e2r=ta(),t2r=tn(),i2r=Ir(),Do=P(),n2r=km(),a2r=Xm(),u2r=zm(),s2r=$m(),o2r=Zm(),v2r=xm(),f2r=eq(),c2r=iq(),l2r=aq(),p2r=sq(),g2r=.07721566490153287,m2r=.3224670334241136,q2r=1,y2r=-.07721566490153287,h2r=.48383612272381005,d2r=-.1475877229945939,w2r=.06462494023913339,b2r=-.07721566490153287,E2r=1,N2r=.4189385332046727,ga=1.4616321449683622,A2r=4503599627370496,O2r=0x400000000000000,S2r=8470329472543003e-37,oq=1.4616321449683622,T2r=-.12148629053584961,I2r=-3638676997039505e-33;function L2r(r){var e,t,i,n,a,s,o,f,v,c,l,p,m;if(Kvr(r)||xvr(r))return r;if(r===0)return Do;if(r<0?(e=!0,r=-r):e=!1,r<S2r)return-ei(r);if(e){if(r>=A2r||(v=t2r(r),v===0))return Do;t=ei(i2r/r2r(v*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(m=-ei(r),r>=ga-1+.27?(l=1-r,i=0):r>=ga-1-.27?(l=r-(oq-1),i=1):(l=r,i=2)):(m=0,r>=ga+.27?(l=2-r,i=0):r>=ga-.27?(l=r-oq,i=1):(l=r-1,i=2)),i){case 0:p=l*l,s=g2r+p*n2r(p),a=p*(m2r+p*a2r(p)),o=l*s+a,m+=o-.5*l;break;case 1:p=l*l,c=p*l,s=h2r+c*o2r(c),a=d2r+c*v2r(c),n=w2r+c*f2r(c),o=p*s-(I2r-c*(a+l*n)),m+=T2r+o;break;case 2:s=l*(b2r+l*c2r(l)),a=E2r+l*l2r(l),m+=-.5*l+s/a;break}else if(r<8)switch(i=e2r(r),l=r-i,o=l*(y2r+l*s2r(l)),f=q2r+l*u2r(l),m=.5*l+o/f,p=1,i){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:p*=l+2,m+=ei(p)}else r<O2r?(v=ei(r),p=1/r,l=p*p,c=N2r+p*p2r(l),m=(r-.5)*(v-1)+c):m=r*(ei(r)-1);return e&&(m=t-m),m}vq.exports=L2r});var nn=u((DJr,cq)=>{"use strict";var _2r=fq();cq.exports=_2r});var pq=u((XJr,lq)=>{"use strict";var P2r=X();function R2r(r){return r===0&&1/r===P2r}lq.exports=R2r});var Xo=u((JJr,gq)=>{"use strict";var F2r=pq();gq.exports=F2r});var Jo=u((zJr,mq)=>{"use strict";var M2r=2.5066282746310007;mq.exports=M2r});var yq=u((YJr,qq)=>{"use strict";var B2r=Tr();function C2r(r){return B2r(r/2)}qq.exports=C2r});var ma=u(($Jr,hq)=>{"use strict";var j2r=yq();hq.exports=j2r});var bq=u((QJr,wq)=>{"use strict";var dq=ma();function G2r(r){return r>0?dq(r-1):dq(r+1)}wq.exports=G2r});var zo=u((ZJr,Eq)=>{"use strict";var V2r=bq();Eq.exports=V2r});var Aq=u((KJr,Nq)=>{"use strict";var U2r=Math.sqrt;Nq.exports=U2r});var V=u((xJr,Oq)=>{"use strict";var H2r=Aq();Oq.exports=H2r});var Tq=u((rzr,Sq)=>{"use strict";var W2r=Ot(),Yo;W2r===!0?Yo=0:Yo=1;Sq.exports=Yo});var Lq=u((ezr,Iq)=>{"use strict";var k2r=cr(),D2r=gr(),X2r=Tq(),$o=new D2r(1),J2r=new k2r($o.buffer);function z2r(r,e){return $o[0]=r,J2r[X2r]=e>>>0,$o[0]}Iq.exports=z2r});var ne=u((tzr,_q)=>{"use strict";var Y2r=Lq();_q.exports=Y2r});var Rq=u((izr,Pq)=>{"use strict";function $2r(r){return r|0}Pq.exports=$2r});var Qo=u((nzr,Fq)=>{"use strict";var Q2r=Rq();Fq.exports=Q2r});var Cq=u((azr,Bq)=>{"use strict";var Mq=zo(),Z2r=na(),K2r=X(),qa=P();function x2r(r,e){return e===K2r?qa:e===qa?0:e>0?Mq(e)?r:0:Mq(e)?Z2r(qa,r):qa}Bq.exports=x2r});var Gq=u((uzr,jq)=>{"use strict";var rfr=Yr(),efr=tr(),tfr=1072693247,ya=1e300,ha=1e-300;function ifr(r,e){var t,i;return i=efr(r),t=i&rfr,t<=tfr?e<0?ya*ya:ha*ha:e>0?ya*ya:ha*ha}jq.exports=ifr});var Hq=u((szr,Uq)=>{"use strict";var nfr=Y(),Vq=P();function afr(r,e){return r===-1?(r-r)/(r-r):r===1?1:nfr(r)<1==(e===Vq)?0:Vq}Uq.exports=afr});var kq=u((ozr,Wq)=>{"use strict";function ufr(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}Wq.exports=ufr});var zq=u((vzr,Jq)=>{"use strict";var sfr=tr(),da=ne(),Dq=ee(),ofr=zr(),vfr=kq(),ffr=1048575,Xq=1048576,cfr=1072693248,lfr=536870912,pfr=524288,gfr=20,mfr=9007199254740992,qfr=.9617966939259756,yfr=.9617967009544373,hfr=-7028461650952758e-24,dfr=[1,1.5],wfr=[0,.5849624872207642],bfr=[0,1350039202129749e-23];function Efr(r,e,t){var i,n,a,s,o,f,v,c,l,p,m,y,q,g,h,N,A,G,S,J,sr,k;return J=0,t<Xq&&(e*=mfr,J-=53,t=sfr(e)),J+=(t>>gfr)-ofr|0,sr=t&ffr|0,t=sr|cfr|0,sr<=235662?k=0:sr<767610?k=1:(k=0,J+=1,t-=Xq),e=Dq(e,t),c=dfr[k],G=e-c,S=1/(e+c),n=G*S,s=da(n,0),i=(t>>1|lfr)+pfr,i+=k<<18,f=Dq(0,i),v=e-(f-c),o=S*(G-s*f-s*v),a=n*n,A=a*a*vfr(a),A+=o*(s+n),a=s*s,f=3+a+A,f=da(f,0),v=A-(f-3-a),G=s*f,S=o*f+v*n,p=G+S,p=da(p,0),m=S-(p-G),y=yfr*p,q=hfr*p+m*qfr+bfr[k],l=wfr[k],N=J,g=y+q+l+N,g=da(g,0),h=q-(g-N-l-y),r[0]=g,r[1]=h,r}Jq.exports=Efr});var $q=u((fzr,Yq)=>{"use strict";function Nfr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}Yq.exports=Nfr});var Zq=u((czr,Qq)=>{"use strict";var Afr=ne(),Ofr=$q(),Sfr=1.4426950408889634,Tfr=1.4426950216293335,Ifr=19259629911266175e-24;function Lfr(r,e){var t,i,n,a,s,o;return n=e-1,a=n*n*Ofr(n),s=Tfr*n,o=n*Ifr-a*Sfr,i=s+o,i=Afr(i,0),t=o-(i-s),r[0]=i,r[1]=t,r}Qq.exports=Lfr});var wa=u((lzr,Kq)=>{"use strict";var _fr=.6931471805599453;Kq.exports=_fr});var ry=u((pzr,xq)=>{"use strict";function Pfr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}xq.exports=Pfr});var sy=u((gzr,uy)=>{"use strict";var Rfr=tr(),ey=ee(),Ffr=ne(),Mfr=Qo(),Bfr=aa(),Cfr=wa(),ty=zr(),iy=Yr(),ny=ia(),jfr=ry(),ay=1048576,Gfr=1071644672,an=20,Vfr=.6931471824645996,Ufr=-1904654299957768e-24;function Hfr(r,e,t){var i,n,a,s,o,f,v,c,l,p,m;return p=r&iy|0,m=(p>>an)-ty|0,l=0,p>Gfr&&(l=r+(ay>>m+1)>>>0,m=((l&iy)>>an)-ty|0,i=(l&~(ny>>m))>>>0,a=ey(0,i),l=(l&ny|ay)>>an-m>>>0,r<0&&(l=-l),e-=a),a=t+e,a=Ffr(a,0),o=a*Vfr,f=(t-(a-e))*Cfr+a*Ufr,c=o+f,v=f-(c-o),a=c*c,n=c-a*jfr(a),s=c*n/(n-2)-(v+c*v),c=1-(s-c),r=Rfr(c),r=Mfr(r),r+=l<<an>>>0,r>>an<=0?c=Bfr(c,l):c=ey(c,r),c}uy.exports=Hfr});var hy=u((mzr,yy)=>{"use strict";var oy=E(),vy=zo(),fy=Rr(),Wfr=Tr(),cy=V(),kfr=Y(),Zo=ri(),Dfr=ne(),ly=Qo(),Xfr=X(),Jfr=P(),Ko=Yr(),zfr=Cq(),Yfr=Gq(),$fr=Hq(),Qfr=zq(),Zfr=Zq(),Kfr=sy(),xfr=1072693247,rcr=1105199104,ecr=1139802112,py=1083179008,tcr=1072693248,icr=1083231232,ncr=3230714880>>>0,gy=31,He=1e300,We=1e-300,acr=8008566259537294e-32,ae=[0,0],my=[0,0];function qy(r,e){var t,i,n,a,s,o,f,v,c,l,p,m,y,q,g,h;if(oy(r)||oy(e))return NaN;if(Zo.assign(e,ae,1,0),o=ae[0],f=ae[1],f===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return cy(r);if(e===-.5)return 1/cy(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(fy(e))return $fr(r,e)}if(Zo.assign(r,ae,1,0),a=ae[0],s=ae[1],s===0){if(a===0)return zfr(r,e);if(r===1)return 1;if(r===-1&&vy(e))return-1;if(fy(r))return r===Xfr?qy(-0,-e):e<0?0:Jfr}if(r<0&&Wfr(e)===!1)return(r-r)/(r-r);if(n=kfr(r),t=a&Ko|0,i=o&Ko|0,v=a>>>gy|0,c=o>>>gy|0,v&&vy(e)?v=-1:v=1,i>rcr){if(i>ecr)return Yfr(r,e);if(t<xfr)return c===1?v*He*He:v*We*We;if(t>tcr)return c===0?v*He*He:v*We*We;y=Zfr(my,n)}else y=Qfr(my,n,t);if(l=Dfr(e,0),m=(e-l)*y[0]+e*y[1],p=l*y[0],q=m+p,Zo.assign(q,ae,1,0),g=ly(ae[0]),h=ly(ae[1]),g>=py){if((g-py|h)!==0||m+acr>q-p)return v*He*He}else if((g&Ko)>=icr&&((g-ncr|h)!==0||m<=q-p))return v*We*We;return q=Kfr(g,p,m),v*q}yy.exports=qy});var $=u((qzr,dy)=>{"use strict";var ucr=hy();dy.exports=ucr});var by=u((yzr,wy)=>{"use strict";function scr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}wy.exports=scr});var Ny=u((hzr,Ey)=>{"use strict";var ocr=aa(),vcr=by();function fcr(r,e,t){var i,n,a,s;return i=r-e,n=i*i,a=i-n*vcr(n),s=1-(e-i*a/(2-a)-r),ocr(s,t)}Ey.exports=fcr});var Ly=u((dzr,Iy)=>{"use strict";var ccr=E(),Ay=ta(),lcr=X(),Oy=P(),pcr=Ny(),gcr=.6931471803691238,mcr=19082149292705877e-26,Sy=1.4426950408889634,qcr=709.782712893384,ycr=-745.1332191019411,Ty=1/(1<<28),hcr=-Ty;function dcr(r){var e,t,i;return ccr(r)||r===Oy?r:r===lcr?0:r>qcr?Oy:r<ycr?0:r>hcr&&r<Ty?1+r:(r<0?i=Ay(Sy*r-.5):i=Ay(Sy*r+.5),e=r-i*gcr,t=i*mcr,pcr(e,t,i))}Iy.exports=dcr});var fr=u((wzr,_y)=>{"use strict";var wcr=Ly();_y.exports=wcr});var Ry=u((bzr,Py)=>{"use strict";function bcr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}Py.exports=bcr});var By=u((Ezr,My)=>{"use strict";var Ecr=Jo(),Fy=$(),Ncr=fr(),Acr=Ry(),Ocr=143.01608;function Scr(r){var e,t,i;return e=1/r,e=1+e*Acr(e),t=Ncr(r),r>Ocr?(i=Fy(r,.5*r-.25),t=i*(i/t)):t=Fy(r,r-.5)/t,Ecr*t*e}My.exports=Scr});var jy=u((Nzr,Cy)=>{"use strict";var Tcr=.5772156649015329;Cy.exports=Tcr});var Vy=u((Azr,Gy)=>{"use strict";var Icr=jy();function Lcr(r,e){return e/((1+Icr*r)*r)}Gy.exports=Lcr});var Hy=u((Ozr,Uy)=>{"use strict";function _cr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}Uy.exports=_cr});var $y=u((Szr,Yy)=>{"use strict";var Pcr=E(),Rcr=Tr(),Fcr=Xo(),Wy=Y(),Mcr=x(),Bcr=It(),ky=P(),Dy=X(),Xy=Ir(),Jy=By(),zy=Vy(),Ccr=Hy();function jcr(r){var e,t,i,n;if(Rcr(r)&&r<0||r===Dy||Pcr(r))return NaN;if(r===0)return Fcr(r)?Dy:ky;if(r>171.61447887182297)return ky;if(r<-170.5674972726612)return 0;if(t=Wy(r),t>33)return r>=0?Jy(r):(i=Mcr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*Bcr(Xy*n),e*Xy/(Wy(n)*Jy(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return zy(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return zy(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*Ccr(r))}Yy.exports=jcr});var ti=u((Tzr,Qy)=>{"use strict";var Gcr=$y();Qy.exports=Gcr});var xo=u((Izr,Zy)=>{"use strict";var Vcr=14901161193847656e-24;Zy.exports=Vcr});var xy=u((Lzr,Ky)=>{"use strict";var Ucr=17976931348623157e292;Ky.exports=Ucr});var ba=u((_zr,rh)=>{"use strict";var Hcr=709.782712893384;rh.exports=Hcr});var th=u((Pzr,eh)=>{"use strict";var Wcr=fr();function kcr(r,e){var t,i,n,a;if(n=Wcr(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}eh.exports=kcr});var nh=u((Rzr,ih)=>{"use strict";function Dcr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}ih.exports=Dcr});var uh=u((Fzr,ah)=>{"use strict";function Xcr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}ah.exports=Xcr});var oh=u((Mzr,sh)=>{"use strict";function Jcr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}sh.exports=Jcr});var fh=u((Bzr,vh)=>{"use strict";function zcr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}vh.exports=zcr});var lh=u((Czr,ch)=>{"use strict";function Ycr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}ch.exports=Ycr});var gh=u((jzr,ph)=>{"use strict";function $cr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}ph.exports=$cr});var qh=u((Gzr,mh)=>{"use strict";function Qcr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}mh.exports=Qcr});var hh=u((Vzr,yh)=>{"use strict";function Zcr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}yh.exports=Zcr});var Eh=u((Uzr,bh)=>{"use strict";var Kcr=E(),dh=fr(),xcr=ne(),rlr=P(),elr=X(),tlr=nh(),ilr=uh(),nlr=oh(),alr=fh(),ulr=lh(),slr=gh(),olr=qh(),vlr=hh(),Ea=1e-300,flr=13877787807814457e-33,wh=.8450629115104675,clr=.12837916709551256,llr=1,plr=-.0023621185607526594,glr=1,mlr=-.009864944034847148,qlr=1,ylr=-.0098649429247001,hlr=1;function dlr(r){var e,t,i,n,a,s,o,f;if(Kcr(r))return NaN;if(r===rlr)return 0;if(r===elr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<flr?1-r:(i=r*r,n=clr+i*tlr(i),a=llr+i*ilr(i),s=n/a,r<.25?1-(r+r*s):(n=r*s,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=plr+a*nlr(a),f=glr+a*alr(a),e?1+wh+o/f:1-wh-o/f;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=mlr+a*ulr(a),a=qlr+a*slr(a);else{if(r<-6)return 2-Ea;n=ylr+a*olr(a),a=hlr+a*vlr(a)}return i=xcr(t,0),n=dh(-(i*i)-.5625)*dh((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-Ea:Ea*Ea}bh.exports=dlr});var r1=u((Hzr,Nh)=>{"use strict";var wlr=Eh();Nh.exports=wlr});var Sh=u((Wzr,Oh)=>{"use strict";var blr=r1(),Ah=V(),Elr=fr(),Nlr=Ir();function Alr(r,e){var t,i,n,a,s;if(a=blr(Ah(e)),a!==0&&r>1){for(i=Elr(-e)/Ah(Nlr*e),i*=e,t=.5,i/=t,n=i,s=2;s<r;++s)i/=s-t,i*=e,n+=i;a+=n}return a}Oh.exports=Alr});var e1=u((kzr,Th)=>{"use strict";var Olr=-708.3964185322641;Th.exports=Olr});var Ph=u((Dzr,_h)=>{"use strict";var ii=fr(),Na=$(),Slr=C(),Ih=ba(),Lh=e1();function Tlr(r,e){var t,i;return i=r*Slr(e),e>=1?i<Ih&&-e>Lh?t=Na(e,r)*ii(-e):r>=1?t=Na(e/ii(e/r),r):t=ii(i-e):i>Lh?t=Na(e,r)*ii(-e):e/r<Ih?t=Na(e/ii(e/r),r):t=ii(i-e),t}_h.exports=Tlr});var t1=u((Xzr,Rh)=>{"use strict";function Ilr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Rh.exports=Ilr});var Mh=u((Jzr,Fh)=>{"use strict";var Llr=Function;Fh.exports=Llr});var Ch=u((zzr,Bh)=>{"use strict";var _lr=Mh();Bh.exports=_lr});var Gh=u((Yzr,jh)=>{"use strict";var Plr=Ch(),Rlr=t1();function Flr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new Plr(e)();function a(s){return Rlr(r,s)}}jh.exports=Flr});var Hh=u(($zr,Uh)=>{"use strict";var Mlr=b(),Vh=t1(),Blr=Gh();Mlr(Vh,"factory",Blr);Uh.exports=Vh});var Lt=u((Qzr,Wh)=>{"use strict";var Clr=2220446049250313e-31;Wh.exports=Clr});var Dh=u((Zzr,kh)=>{"use strict";var jlr=eval;kh.exports=jlr});var Jh=u((Kzr,Xh)=>{"use strict";var Glr=Dh();function Vlr(){var r;try{Glr('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}Xh.exports=Vlr});var i1=u((xzr,zh)=>{"use strict";var Ulr=Jh();zh.exports=Ulr});var $h=u((rYr,Yh)=>{"use strict";var Aa=Y(),Hlr=Lt(),Wlr=1e6;function klr(r,e){var t,i,n,a,s,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||Hlr,a=o.maxTerms||Wlr,s=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(s+=n,Aa(i*s)>=Aa(n)||--a===0)break}else do n=r(),s+=n;while(Aa(i*s)<Aa(n)&&--a);return s}Yh.exports=klr});var Kh=u((eYr,Zh)=>{"use strict";var Qh=Y(),Dlr=Lt(),Xlr=1e6;function Jlr(r,e){var t,i,n,a,s;s={},arguments.length>1&&(s=e),t=s.tolerance||Dlr,n=s.maxTerms||Xlr,a=s.initialValue||0;do i=r(),a+=i;while(Qh(t*a)<Qh(i)&&--n);return a}Zh.exports=Jlr});var Oa=u((tYr,xh)=>{"use strict";var zlr=i1(),Ylr=$h(),$lr=Kh(),n1;zlr()?n1=Ylr:n1=$lr;xh.exports=n1});var ed=u((iYr,rd)=>{"use strict";function Qlr(r){var e=-r,t=-1,i=0;return n;function n(){return t*=e,i+=1,t/i}}rd.exports=Qlr});var id=u((nYr,td)=>{"use strict";var Zlr=Y(),Klr=C(),xlr=Lt(),r3r=Oa(),e3r=ed();function t3r(r){var e,t;return r<=-1?NaN:(t=Zlr(r),t>.95?Klr(1+r)-r:t<xlr?-r*r/2:(e={initialValue:-r},r3r(e3r(r),e)))}td.exports=t3r});var ad=u((aYr,nd)=>{"use strict";var i3r=id();nd.exports=i3r});var ke=u((uYr,ud)=>{"use strict";var n3r=6.283185307179586;ud.exports=n3r});var od=u((sYr,sd)=>{"use strict";function a3r(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}sd.exports=a3r});var fd=u((oYr,vd)=>{"use strict";function u3r(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}vd.exports=u3r});var ld=u((vYr,cd)=>{"use strict";function s3r(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}cd.exports=s3r});var gd=u((fYr,pd)=>{"use strict";function o3r(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}pd.exports=o3r});var qd=u((cYr,md)=>{"use strict";function v3r(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}md.exports=v3r});var hd=u((lYr,yd)=>{"use strict";function f3r(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}yd.exports=f3r});var wd=u((pYr,dd)=>{"use strict";function c3r(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}dd.exports=c3r});var Ed=u((gYr,bd)=>{"use strict";function l3r(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}bd.exports=l3r});var Ad=u((mYr,Nd)=>{"use strict";function p3r(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Nd.exports=p3r});var Sd=u((qYr,Od)=>{"use strict";var g3r=Hh(),m3r=ad(),q3r=r1(),a1=V(),y3r=fr(),h3r=ke(),d3r=od(),w3r=fd(),b3r=ld(),E3r=gd(),N3r=qd(),A3r=hd(),O3r=wd(),S3r=Ed(),T3r=Ad(),Vr=[0,0,0,0,0,0,0,0,0,0];function I3r(r,e){var t,i,n,a,s;return i=(e-r)/r,n=-m3r(i),a=r*n,s=a1(2*n),e<r&&(s=-s),Vr[0]=d3r(s),Vr[1]=w3r(s),Vr[2]=b3r(s),Vr[3]=E3r(s),Vr[4]=N3r(s),Vr[5]=A3r(s),Vr[6]=O3r(s),Vr[7]=S3r(s),Vr[8]=T3r(s),Vr[9]=-.0005967612901927463,t=g3r(Vr,1/r),t*=y3r(-a)/a1(h3r*r),e<r&&(t=-t),t+=q3r(a1(a))/2,t}Od.exports=I3r});var Id=u((yYr,Td)=>{"use strict";function L3r(r,e){var t=1,i=r,n=e;return a;function a(){var s=t;return i+=1,t*=n/i,s}}Td.exports=L3r});var _d=u((hYr,Ld)=>{"use strict";var _3r=Oa(),P3r=Id();function R3r(r,e,t){var i,n;return t=t||0,n=P3r(r,e),i=_3r(n,{initialValue:t}),i}Ld.exports=R3r});var Rd=u((dYr,Pd)=>{"use strict";function F3r(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}Pd.exports=F3r});var Md=u((wYr,Fd)=>{"use strict";var M3r=Rd();Fd.exports=M3r});var Cd=u((bYr,Bd)=>{"use strict";var B3r=Md();Bd.exports=B3r});var Gd=u((EYr,jd)=>{"use strict";function C3r(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}jd.exports=C3r});var kd=u((NYr,Wd)=>{"use strict";var j3r=E(),Vd=tr(),Ud=ee(),G3r=P(),V3r=X(),Hd=zr(),U3r=Gd(),u1=.6931471803691238,s1=19082149292705877e-26,H3r=.41421356237309503,W3r=-.2928932188134525,k3r=1862645149230957e-24,D3r=5551115123125783e-32,X3r=9007199254740992,J3r=.6666666666666666;function z3r(r){var e,t,i,n,a,s,o,f,v,c;if(r<-1||j3r(r))return NaN;if(r===-1)return V3r;if(r===G3r||r===0)return r;if(r<0?i=-r:i=r,c=1,i<H3r){if(i<k3r)return i<D3r?r:r-r*r*.5;r>W3r&&(c=0,n=r,t=1)}return c!==0&&(i<X3r?(v=1+r,t=Vd(v),c=(t>>20)-Hd,c>0?a=1-(v-r):a=r-(v-1),a/=v):(v=r,t=Vd(v),c=(t>>20)-Hd,a=0),t&=1048575,t<434334?v=Ud(v,t|1072693248):(c+=1,v=Ud(v,t|1071644672),t=1048576-t>>2),n=v-1),e=.5*n*n,t===0?n===0?(a+=c*s1,c*u1+a):(f=e*(1-J3r*n),c*u1-(f-(c*s1+a)-n)):(s=n/(2+n),o=s*s,f=o*U3r(o),c===0?n-(e-s*(e+f)):c*u1-(e-(s*(e+f)+(c*s1+a))-n))}Wd.exports=z3r});var ni=u((AYr,Dd)=>{"use strict";var Y3r=kd();Dd.exports=Y3r});var Jd=u((OYr,Xd)=>{"use strict";var $3r=P();function Q3r(r){return r===0&&1/r===$3r}Xd.exports=Q3r});var De=u((SYr,zd)=>{"use strict";var Z3r=Jd();zd.exports=Z3r});var Qd=u((TYr,$d)=>{"use strict";var K3r=De(),Yd=E(),o1=P();function x3r(r,e){return Yd(r)||Yd(e)?NaN:r===o1||e===o1?o1:r===e&&r===0?K3r(r)?r:e:r>e?r:e}$d.exports=x3r});var v1=u((IYr,Zd)=>{"use strict";var r6r=Qd();Zd.exports=r6r});var rw=u((LYr,xd)=>{"use strict";var e6r=Xo(),Kd=E(),f1=X();function t6r(r,e){return Kd(r)||Kd(e)?NaN:r===f1||e===f1?f1:r===e&&r===0?e6r(r)?r:e:r<e?r:e}xd.exports=t6r});var tw=u((_Yr,ew)=>{"use strict";var i6r=rw();ew.exports=i6r});var nw=u((PYr,iw)=>{"use strict";var n6r=10.900511;iw.exports=n6r});var c1=u((RYr,aw)=>{"use strict";var a6r=2.718281828459045;aw.exports=a6r});var ow=u((FYr,sw)=>{"use strict";var u6r=Cd(),s6r=nn(),o6r=ti(),v6r=ni(),f6r=V(),c6r=Y(),Xe=fr(),un=$(),l1=v1(),p1=tw(),uw=C(),Sa=ba(),sn=e1(),g1=nw(),l6r=c1();function p6r(r,e){var t,i,n,a,s,o,f;return n=r+g1-.5,f=(e-r-g1+.5)/n,r<1?e<=sn?Xe(r*uw(e)-e-s6r(r)):un(e,r)*Xe(-e)/o6r(r):(c6r(f*f*r)<=100&&r>150?(t=r*(v6r(f)-f)+e*(.5-g1)/n,t=Xe(t)):(a=r*uw(e/n),s=r-e,p1(a,s)<=sn||l1(a,s)>=Sa?(i=s/r,p1(a,s)/2>sn&&l1(a,s)/2<Sa?(o=un(e/n,r/2)*Xe(s/2),t=o*o):p1(a,s)/4>sn&&l1(a,s)/4<Sa&&e>r?(o=un(e/n,r/4)*Xe(s/4),t=o*o,t*=t):i>sn&&i<Sa?t=un(e*Xe(i)/n,r):t=Xe(a+s)):t=un(e/n,r)*Xe(s)),t*=f6r(n/l6r)/u6r(r),t)}sw.exports=p6r});var fw=u((MYr,vw)=>{"use strict";var g6r=.34657359027997264;vw.exports=g6r});var lw=u((BYr,cw)=>{"use strict";function m6r(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}cw.exports=m6r});var hw=u((CYr,yw)=>{"use strict";var q6r=E(),pw=tr(),m1=ee(),y6r=xt(),gw=P(),h6r=X(),mw=zr(),d6r=fw(),w6r=lw(),b6r=709.782712893384,q1=.6931471803691238,y1=19082149292705877e-26,qw=1.4426950408889634,E6r=38.816242111356935,N6r=1.0397207708399179;function A6r(r){var e,t,i,n,a,s,o,f,v,c,l,p,m;if(r===gw||q6r(r))return r;if(r===h6r)return-1;if(r===0)return r;if(r<0?(i=!0,f=-r):(i=!1,f=r),f>=E6r){if(i)return-1;if(f>=b6r)return gw}if(s=pw(f)|0,f>d6r)f<N6r?i?(n=r+q1,a=-y1,m=-1):(n=r-q1,a=y1,m=1):(i?m=qw*r-.5:m=qw*r+.5,m|=0,l=m,n=r-l*q1,a=l*y1),r=n-a,c=n-r-a;else{if(s<1016070144)return r;m=0}return e=.5*r,v=r*e,o=1+v*w6r(v),l=3-o*e,p=v*((o-l)/(6-r*l)),m===0?r-(r*p-v):(t=y6r(mw+m<<20,0),p=r*(p-c)-c,p-=v,m===-1?.5*(r-p)-.5:m===1?r<-.25?-2*(p-(r+.5)):1+2*(r-p):m<=-2||m>56?(f=1-(p-r),m===1024?(n=pw(f)+(m<<20)|0,f=m1(f,n)):f*=t,f-1):(l=1,m<20?(n=1072693248-(2097152>>m)|0,l=m1(l,n),f=l-(p-r)):(n=mw-m<<20|0,l=m1(l,n),f=r-(p+l),f+=1),f*=t,f))}yw.exports=A6r});var h1=u((jYr,dw)=>{"use strict";var O6r=hw();dw.exports=O6r});var Nw=u((GYr,Ew)=>{"use strict";var ww=E(),bw=Y(),S6r=h1(),T6r=C(),I6r=$(),L6r=ta();function _6r(r,e){var t;if(ww(r)||ww(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((bw(e*(r-1))<.5||bw(e)<.2)&&(t=T6r(r)*e,t<.5))return S6r(t)}else if(L6r(e)!==e)return NaN;return I6r(r,e)-1}Ew.exports=_6r});var Ow=u((VYr,Aw)=>{"use strict";var P6r=Nw();Aw.exports=P6r});var Tw=u((UYr,Sw)=>{"use strict";function R6r(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}Sw.exports=R6r});var Lw=u((HYr,Iw)=>{"use strict";function F6r(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}Iw.exports=F6r});var Pw=u((WYr,_w)=>{"use strict";function M6r(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}_w.exports=M6r});var Fw=u((kYr,Rw)=>{"use strict";var d1=C(),B6r=Lt(),C6r=Tw(),j6r=Lw(),G6r=Pw(),V6r=.15896368026733398,U6r=.5281534194946289,H6r=.45201730728149414;function W6r(r,e,t){var i,n,a,s;if(r<B6r)return-d1(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=d1(r);while(r>=3);t=r-2}return a=t*(r+1),s=C6r(t),n+=a*V6r+a*s,n}return r<1&&(n+=-d1(r),t=e,e=r,r+=1),r<=1.5?(a=j6r(e),i=e*t,n+=i*U6r+i*a,n):(a=t*e,s=G6r(-t),n+=a*H6r+a*s,n)}Rw.exports=W6r});var Gw=u((DYr,jw)=>{"use strict";var Mw=ti(),Bw=h1(),k6r=ni(),D6r=E(),Cw=Fw();function X6r(r){return D6r(r)?NaN:r<0?r<-.5?Mw(1+r)-1:Bw(-k6r(r)+Cw(r+2,r+1,r)):r<2?Bw(Cw(r+1,r,r-1)):Mw(1+r)-1}jw.exports=X6r});var Uw=u((XYr,Vw)=>{"use strict";var J6r=Gw();Vw.exports=J6r});var Ww=u((JYr,Hw)=>{"use strict";function z6r(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,s;function s(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}Hw.exports=z6r});var Dw=u((zYr,kw)=>{"use strict";var Y6r=Ow(),$6r=Oa(),Q6r=Uw(),Z6r=Ww();function K6r(r,e,t){var i,n,a,s,o;return n=Q6r(r),a=(n+1)/r,s=Y6r(e,r),n-=s,n/=r,o=Z6r(r,e),s+=1,i=t?a:0,n=-s*$6r(o,{initialValue:(i-n)/s}),t&&(n=-n),[n,a]}kw.exports=K6r});var w1=u((YYr,Xw)=>{"use strict";var x6r=11754943508222875e-54;Xw.exports=x6r});var zw=u(($Yr,Jw)=>{"use strict";var Ta=Y(),$r=w1(),rpr=Lt(),epr=1e6;function tpr(r,e,t){var i,n,a,s,o,f,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),s=v[1],a=v[0],s===0&&(s=$r),o=s,f=0,i===!0)do v=r.next().value,v&&(f=v[1]+v[0]*f,f===0&&(f=$r),o=v[1]+v[0]/o,o===0&&(o=$r),f=1/f,n=o*f,s*=n);while(Ta(n-1)>e&&--t);else do v=r(),v&&(f=v[1]+v[0]*f,f===0&&(f=$r),o=v[1]+v[0]/o,o===0&&(o=$r),f=1/f,n=o*f,s*=n);while(v&&Ta(n-1)>e&&--t);return a/s}function ipr(r,e,t){var i,n,a,s,o,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),a=f[1],a===0&&(a=$r),s=a,o=0,i===!0)do f=r.next().value,f&&(o=f[1]+f[0]*o,o===0&&(o=$r),s=f[1]+f[0]/s,s===0&&(s=$r),o=1/o,n=s*o,a*=n);while(f&&Ta(n-1)>e&&--t);else do f=r(),f&&(o=f[1]+f[0]*o,o===0&&(o=$r),s=f[1]+f[0]/s,s===0&&(s=$r),o=1/o,n=s*o,a*=n);while(f&&Ta(n-1)>e&&--t);return a}function npr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||epr,n=i.tolerance||rpr,i.keep?ipr(r,n,t):tpr(r,n,t)}Jw.exports=npr});var Qw=u((QYr,$w)=>{"use strict";var Yw=Y(),apr=Lt(),ai=w1(),upr=1e6;function spr(r,e,t){var i,n,a,s,o,f;f=r(),o=f[1],n=f[0],o===0&&(o=ai),a=o,s=0;do f=r(),f&&(s=f[1]+f[0]*s,s===0&&(s=ai),a=f[1]+f[0]/a,a===0&&(a=ai),s=1/s,i=a*s,o*=i);while(f&&Yw(i-1)>e&&--t);return n/o}function opr(r,e,t){var i,n,a,s,o;o=r(),s=o[1],s===0&&(s=ai),n=s,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=ai),n=o[1]+o[0]/n,n===0&&(n=ai),a=1/a,i=n*a,s*=i);while(o&&Yw(i-1)>e&&--t);return s}function vpr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||apr,t=i.maxIter||upr,i.keep?opr(r,n,t):spr(r,n,t)}$w.exports=vpr});var Kw=u((ZYr,Zw)=>{"use strict";var fpr=i1(),cpr=zw(),lpr=Qw(),b1;fpr()?b1=cpr:b1=lpr;Zw.exports=b1});var rb=u((KYr,xw)=>{"use strict";function ppr(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}xw.exports=ppr});var tb=u((xYr,eb)=>{"use strict";var gpr=Kw(),mpr=rb();function qpr(r,e){var t=mpr(r,e);return 1/(e-r+1+gpr(t))}eb.exports=qpr});var lb=u((r$r,cb)=>{"use strict";var ypr=nn(),hpr=x(),on=ti(),ib=Y(),dpr=fr(),nb=$(),Ur=C(),wpr=xo(),ab=xy(),bpr=Jo(),ub=ba(),Epr=P(),Npr=th(),Apr=Sh(),sb=Ph(),Opr=Sd(),E1=_d(),ob=ow(),Spr=Dw(),vb=tb(),Tpr=170;function fb(r,e,t,i){var n,a,s,o,f,v,c,l,p,m,y,q,g,h,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,l=i,p=0,e>=Tpr&&!a)return l&&e*4<r?(p=e*Ur(r)-r,p+=Ur(vb(e,r))):!l&&e>4*r?(p=e*Ur(r)-r,o=0,p+=Ur(E1(e,r,o)/e)):(p=fb(e,r,!0,l),p===0?l?(p=1+1/(12*e)+1/(288*e*e),p=Ur(p)-e+(e-.5)*Ur(e),p+=Ur(bpr)):(p=e*Ur(r)-r,o=0,p+=Ur(E1(e,r,o)/e)):p=Ur(p)+ypr(e)),p>ub?Epr:dpr(p);switch(c=e<30&&e<=r+1&&r<ub,c?(h=hpr(e),m=h===e,f=m?!1:ib(h-e)===.5):m=f=!1,m&&r>.6?(l=!l,s=0):f&&r>.2?(l=!l,s=1):r<wpr&&e>1?s=6:r<.5?-.4/Ur(r)<e?s=2:s=3:r<1.1?r*.75<e?s=2:s=3:(v=!1,a&&e>20&&(y=ib((r-e)/e),e>200?20/e>y*y&&(v=!0):y<.4&&(v=!0)),v?s=5:r-1/(3*r)<e?s=2:(s=4,l=!l)),s){case 0:p=Npr(e,r),a===!1&&(p*=on(e));break;case 1:p=Apr(e,r),a===!1&&(p*=on(e));break;case 2:p=a?ob(e,r):sb(e,r),p!==0&&(o=0,n=!1,l&&(o=a?1:on(e),a||p>=1||ab*p>o?(o/=p,a||e<1||ab/e>o?(o*=-e,n=!0):o=0):o=0)),p*=E1(e,r,o)/e,n&&(l=!1,p=-p);break;case 3:l=!l,g=Spr(e,r,l),p=g[0],N=g[1],l=!1,a&&(p/=N);break;case 4:p=a?ob(e,r):sb(e,r),p!==0&&(p*=vb(e,r));break;case 5:p=Opr(e,r),r>=e&&(l=!l);break;case 6:p=a?nb(r,e)/on(e+1):nb(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),l&&(q=a?1:on(e),p=q-p),p}cb.exports=fb});var N1=u((e$r,pb)=>{"use strict";var Ipr=lb();pb.exports=Ipr});var mb=u((t$r,gb)=>{"use strict";var Lpr=N1(),A1=E(),_pr=P();function Ppr(r,e,t){return A1(r)||A1(e)||A1(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===_pr?1:Lpr(r*t,e)}gb.exports=Ppr});var yb=u((i$r,qb)=>{"use strict";function Rpr(r){return e;function e(){return r}}qb.exports=Rpr});var L=u((n$r,hb)=>{"use strict";var Fpr=yb();hb.exports=Fpr});var bb=u((a$r,wb)=>{"use strict";var db=E();function Mpr(r,e){return db(r)||db(e)?NaN:r<e?0:1}wb.exports=Mpr});var Ab=u((u$r,Nb)=>{"use strict";var Bpr=L(),Eb=E();function Cpr(r){if(Eb(r))return Bpr(NaN);return e;function e(t){return Eb(t)?NaN:t<r?0:1}}Nb.exports=Cpr});var O1=u((s$r,Sb)=>{"use strict";var jpr=b(),Ob=bb(),Gpr=Ab();jpr(Ob,"factory",Gpr);Sb.exports=Ob});var Lb=u((o$r,Ib)=>{"use strict";var Vpr=L(),Upr=O1().factory,Hpr=N1(),Tb=E(),Wpr=P();function kpr(r,e){if(Tb(r)||Tb(e)||r<0||e<=0)return Vpr(NaN);if(r===0)return Upr(0);return t;function t(i){return i<=0?0:i===Wpr?1:Hpr(i*e,r)}}Ib.exports=kpr});var S1=u((v$r,Pb)=>{"use strict";var Dpr=b(),_b=mb(),Xpr=Lb();Dpr(_b,"factory",Xpr);Pb.exports=_b});var Fb=u((f$r,Rb)=>{"use strict";var Jpr=S1();function zpr(r,e){return Jpr(r,e/2,.5)}Rb.exports=zpr});var Bb=u((c$r,Mb)=>{"use strict";var Ypr=S1().factory;function $pr(r){return Ypr(r/2,.5)}Mb.exports=$pr});var Gb=u((l$r,jb)=>{"use strict";var Qpr=b(),Cb=Fb(),Zpr=Bb();Qpr(Cb,"factory",Zpr);jb.exports=Cb});var Wb=u((p$r,Hb)=>{"use strict";var Kpr=T(),xpr=O(),r4r=Wn(),Vb=d(),Ub=["values","indices","*"];function e4r(r,e){return Kpr(e)?xpr(e,"returns")&&(r.returns=e.returns,r4r(Ub,r.returns)===-1)?new TypeError(Vb('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Ub.join('", "'),r.returns)):null:new TypeError(Vb("invalid argument. Options argument must be an object. Value: `%s`.",e))}Hb.exports=e4r});var Db=u((g$r,kb)=>{"use strict";var t4r=O();function i4r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),t4r(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}kb.exports=i4r});var Jb=u((m$r,Xb)=>{"use strict";var n4r=O();function a4r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),n4r(t,n)?t[n].push(a):t[n]=[a];return t}Xb.exports=a4r});var Yb=u((q$r,zb)=>{"use strict";var u4r=O();function s4r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),u4r(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}zb.exports=s4r});var Kb=u((y$r,Zb)=>{"use strict";var $b=Gr(),Qb=d(),o4r=Wb(),v4r=Db(),f4r=Jb(),c4r=Yb();function l4r(r,e,t){var i,n,a;if(!$b(r))throw new TypeError(Qb("invalid argument. First argument must be a collection. Value: `%s`.",r));if(i={returns:"values"},arguments.length===2)a=e;else{if(n=o4r(i,e),n)throw n;a=t}if(!$b(a))throw new TypeError(Qb("invalid argument. Last argument must be a collection. Value: `%s`.",a));if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?v4r(r,a):i.returns==="indices"?f4r(r,a):c4r(r,a)}Zb.exports=l4r});var rE=u((h$r,xb)=>{"use strict";var p4r=Kb();xb.exports=p4r});var tE=u((d$r,eE)=>{"use strict";function g4r(r){var e,t,i,n,a,s;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)s=r[a],e=s-t,t+=e/(a+1),n+=e*(s-t);return n/(a-1)}eE.exports=g4r});var aE=u((w$r,nE)=>{"use strict";var m4r=pr(),q4r=j().isPrimitive,y4r=T(),h4r=ar(),iE=O(),T1=d();function d4r(r,e){return y4r(e)?iE(e,"alpha")&&(r.alpha=e.alpha,!q4r(r.alpha)||h4r(r.alpha))?new TypeError(T1("invalid option. `%s` option must be a number. Option: `%s`.","alpha",r.alpha)):iE(e,"groups")&&(r.groups=e.groups,!m4r(r.groups))?new TypeError(T1("invalid option. `%s` option must be an array. Option: `%s`.","groups",r.groups)):null:new TypeError(T1("invalid argument. Options argument must be an object. Value: `%s`.",e))}nE.exports=d4r});var I1=u((b$r,uE)=>{"use strict";var w4r=jr().isPrimitive;function b4r(r){return w4r(r)&&r>0}uE.exports=b4r});var L1=u((E$r,sE)=>{"use strict";var E4r=jr().isObject;function N4r(r){return E4r(r)&&r.valueOf()>0}sE.exports=N4r});var vE=u((N$r,oE)=>{"use strict";var A4r=I1(),O4r=L1();function S4r(r){return A4r(r)||O4r(r)}oE.exports=S4r});var ue=u((A$r,cE)=>{"use strict";var fE=b(),_1=vE(),T4r=I1(),I4r=L1();fE(_1,"isPrimitive",T4r);fE(_1,"isObject",I4r);cE.exports=_1});var vn=u((O$r,lE)=>{"use strict";var L4r=9007199254740991;lE.exports=L4r});var P1=u((S$r,pE)=>{"use strict";var _4r=308;pE.exports=_4r});var mE=u((T$r,gE)=>{"use strict";var P4r=-308;gE.exports=P4r});var R1=u((I$r,qE)=>{"use strict";var R4r=-324;qE.exports=R4r});var NE=u((L$r,EE)=>{"use strict";var yE=E(),Ia=Rr(),hE=$(),F4r=Y(),dE=Uo(),M4r=vn(),wE=P1(),B4r=mE(),C4r=R1(),j4r=M4r+1,bE=1e308;function G4r(r,e){var t,i;return yE(r)||yE(e)||Ia(e)?NaN:Ia(r)||r===0||e<C4r||F4r(r)>j4r&&e<=0?r:e>wE?0*r:e<B4r?(t=hE(10,-(e+wE)),i=r*bE*t,Ia(i)?r:dE(i)/bE/t):(t=hE(10,-e),i=r*t,Ia(i)?r:dE(i)/t)}EE.exports=G4r});var OE=u((_$r,AE)=>{"use strict";var V4r=NE();AE.exports=V4r});var IE=u((P$r,TE)=>{"use strict";var U4r=ue(),H4r=T(),W4r=or().isPrimitive,SE=O(),F1=d(),M1=OE();function k4r(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!H4r(r))throw new TypeError(F1("invalid argument. First argument must be an object. Value: `%s`.",r));if(SE(r,"digits")){if(!U4r(r.digits))throw new TypeError(F1("invalid option. `%s` option must be a positive integer. Option: `%s`.","digits",r.digits));t=r.digits}if(SE(r,"decision")){if(!W4r(r.decision))throw new TypeError(F1("invalid option. `%s` option must be a boolean. Option: `%s`.","decision",r.decision));e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+M1(this.pValue,-t)+`
`,i+="    statistic: "+M1(this.statistic,-t)+`
`,i+="    df: "+M1(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}TE.exports=k4r});var PE=u((R$r,_E)=>{"use strict";var D4r=Gr(),X4r=T(),_t=c7(),J4r=Dt(),La=d(),z4r=Gb(),Y4r=rE(),LE=C(),$4r=tE(),Q4r=aE(),Z4r=IE();function K4r(){var r,e,t,i,n,a,s,o,f,v,c,l,p,m,y,q,g,h,N,A;if(f=[],e=arguments.length,v={},X4r(arguments[e-1])&&(r=arguments[e-1],e-=1,m=Q4r(v,r),m))throw m;if(v.groups){if(n=Y4r(arguments[0],v.groups),i=J4r(n),e=i.length,e<2)throw new Error(La("invalid option. `%s` option must be an array containing at least two unique elements. Option: `%s`.","groups",i));for(A=0;A<e;A++)f.push(n[i[A]])}else for(A=0;A<e;A++)f.push(arguments[A]);for(s=0,t=0,o=0,y=0,h=new Array(e),N=h.slice(),A=0;A<e;A++){if(p=f[A],!D4r(p))throw new TypeError(La("invalid argument. Must provide array-like arguments. Value: `%s`.",p));if(p.length===0)throw new Error(La("invalid argument. Supplied arrays cannot be empty. Value: `%s`.",p));h[A]=p.length-1,s+=h[A],t+=1/h[A],N[A]=$4r(p),o+=h[A]*N[A],y+=h[A]*LE(N[A])}if(o/=s,v.alpha===void 0?a=.05:a=v.alpha,a<0||a>1)throw new RangeError(La("invalid option. `%s` option must be a number on the interval: [0, 1]. Option: `%f`.","alpha",a));return l=s*LE(o)-y,l/=1+(t-1/s)/(3*(e-1)),g=e-1,c=1-z4r(l,g),q={},_t(q,"rejected",c<=a),_t(q,"alpha",a),_t(q,"pValue",c),_t(q,"statistic",l),_t(q,"df",g),_t(q,"method","Bartlett's test of equal variances"),_t(q,"print",Z4r),q}_E.exports=K4r});var FE=u((F$r,RE)=>{"use strict";var x4r=PE();RE.exports=x4r});var BE=u((M$r,ME)=>{"use strict";function r8r(r){var e,t,i,n,a,s,o,f,v,c,l;if(f=r.length,t=[],f===0)return t;if(n=r[0],v=n.length,f===1){for(c=0;c<v;c++)t.push(n[c]);return t}for(e=[v],c=1;c<f;c++)e.push(r[c].length),e[c]>v&&(v=e[c]);for(c=0;c<v;c++)t.push(0);for(c=v-1;c>=0;){for(a=e[0]-v+c,a>=0?i=n[a]:i=1,l=1;l<f;l++){if(s=e[l]-v+c,s>=0?o=r[l][s]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[c]=i,c-=1}return t}ME.exports=r8r});var jE=u((B$r,CE)=>{"use strict";var e8r=BE();CE.exports=e8r});var _a=u((C$r,GE)=>{"use strict";function t8r(r){var e,t,i,n,a,s;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)e.push(n[s]);return e}GE.exports=t8r});var UE=u((j$r,VE)=>{"use strict";var i8r=j().isPrimitive,n8r=K().isPrimitive,a8r=or().isPrimitive,u8r=pr(),s8r=jE(),o8r=d(),v8r=_a(),f8r={number:i8r,string:n8r,boolean:a8r};function c8r(r,e,t){var i,n,a,s,o,f,v,c,l,p;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],n=[],p=0;p<r.length;p++)if(l=r[p],o=e[p],c=f8r[o],c(l))n.push([l]),a.push([1,1]);else if(u8r(l))n.push(v8r(l)),a.push([l.length,l[0].length]);else throw new TypeError(o8r("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[p],o,o,String(l)));if(s=s8r(a),s===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");for(i=[],p=0;p<a.length;p++)v=a[p],f=[],v[0]===1?f.push(0):f.push(v[1]),v[1]===1?f.push(0):f.push(1),i.push(f);return[n,s,i]}VE.exports=c8r});var WE=u((G$r,HE)=>{"use strict";var B1=E(),l8r=De();function p8r(r,e,t,i,n){var a,s,o,f,v;if(r<=0)return i;if(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,a=e[s],i[o]=a,o+=n,v=1,B1(a)===!1)for(v;v<r;v++){if(s+=t,f=e[s],B1(f)){a=f;break}(f>a||f===a&&l8r(f))&&(a=f),i[o]=a,o+=n}if(B1(a))for(v;v<r;v++)i[o]=a,o+=n;return i}HE.exports=p8r});var DE=u((V$r,kE)=>{"use strict";var C1=E(),g8r=De();function m8r(r,e,t,i,n,a,s){var o,f,v,c,l;if(r<=0)return n;if(f=i,v=s,o=e[f],n[v]=o,v+=a,l=1,C1(o)===!1)for(l;l<r;l++){if(f+=t,c=e[f],C1(c)){o=c;break}(c>o||c===o&&g8r(c))&&(o=c),n[v]=o,v+=a}if(C1(o))for(l;l<r;l++)n[v]=o,v+=a;return n}kE.exports=m8r});var zE=u((U$r,JE)=>{"use strict";var q8r=b(),XE=WE(),y8r=DE();q8r(XE,"ndarray",y8r);JE.exports=XE});var $E=u((H$r,YE)=>{"use strict";var h8r=zE();YE.exports=h8r});var KE=u((W$r,ZE)=>{"use strict";var QE=jo();function d8r(r,e,t){var i,n;if(e===1)return QE(t,r);for(i=[],n=0;n<r;n++)i.push(QE(t,e));return i}ZE.exports=d8r});var rN=u((k$r,xE)=>{"use strict";function w8r(r,e,t){var i,n;for(i=[],n=0;n<r;n++)i.push(e.call(t,n));return i}xE.exports=w8r});var tN=u((D$r,eN)=>{"use strict";var b8r=rN();eN.exports=b8r});var aN=u((X$r,nN)=>{"use strict";var iN=tN();function E8r(r,e,t){var i,n;if(e===1)return iN(r,t);for(i=[],n=0;n<r;n++)i.push(iN(e,t));return i}nN.exports=E8r});var j1=u((J$r,uN)=>{"use strict";var N8r=j().isPrimitive;function A8r(r){return N8r(r)&&r>0}uN.exports=A8r});var G1=u((z$r,sN)=>{"use strict";var O8r=j().isObject;function S8r(r){return O8r(r)&&r.valueOf()>0}sN.exports=S8r});var vN=u((Y$r,oN)=>{"use strict";var T8r=j1(),I8r=G1();function L8r(r){return T8r(r)||I8r(r)}oN.exports=L8r});var W=u(($$r,cN)=>{"use strict";var fN=b(),V1=vN(),_8r=j1(),P8r=G1();fN(V1,"isPrimitive",_8r);fN(V1,"isObject",P8r);cN.exports=V1});var pN=u((Q$r,lN)=>{"use strict";var R8r=I();function F8r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&R8r(r.next)}lN.exports=F8r});var mN=u((Z$r,gN)=>{"use strict";var M8r=pN();gN.exports=M8r});var hN=u((K$r,yN)=>{"use strict";var qN="function";function B8r(r){return typeof r.get===qN&&typeof r.set===qN}yN.exports=B8r});var U1=u((x$r,dN)=>{"use strict";var C8r=hN();dN.exports=C8r});var EN=u((rQr,bN)=>{"use strict";var wN={complex128:j8r,complex64:G8r,default:V8r};function j8r(r,e,t){r.set(t,e)}function G8r(r,e,t){r.set(t,e)}function V8r(r,e,t){r.set(t,e)}function U8r(r){var e=wN[r];return typeof e=="function"?e:wN.default}bN.exports=U8r});var H1=u((eQr,NN)=>{"use strict";var H8r=EN();NN.exports=H8r});var SN=u((tQr,ON)=>{"use strict";var AN={float64:W8r,float32:k8r,int32:D8r,int16:X8r,int8:J8r,uint32:z8r,uint16:Y8r,uint8:$8r,uint8c:Q8r,generic:Z8r,default:K8r};function W8r(r,e,t){r[e]=t}function k8r(r,e,t){r[e]=t}function D8r(r,e,t){r[e]=t}function X8r(r,e,t){r[e]=t}function J8r(r,e,t){r[e]=t}function z8r(r,e,t){r[e]=t}function Y8r(r,e,t){r[e]=t}function $8r(r,e,t){r[e]=t}function Q8r(r,e,t){r[e]=t}function Z8r(r,e,t){r[e]=t}function K8r(r,e,t){r[e]=t}function x8r(r){var e=AN[r];return typeof e=="function"?e:AN.default}ON.exports=x8r});var W1=u((iQr,TN)=>{"use strict";var r5r=SN();TN.exports=r5r});var LN=u((nQr,IN)=>{"use strict";var e5r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};IN.exports=e5r});var PN=u((aQr,_N)=>{"use strict";var t5r=4294967295;_N.exports=t5r});var FN=u((uQr,RN)=>{"use strict";var i5r=Tr(),n5r=PN();function a5r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&i5r(r.length)&&r.length>=0&&r.length<=n5r}RN.exports=a5r});var Pt=u((sQr,MN)=>{"use strict";var u5r=FN();MN.exports=u5r});var CN=u((oQr,BN)=>{"use strict";var s5r=ir(),o5r=typeof ArrayBuffer=="function";function v5r(r){return o5r&&r instanceof ArrayBuffer||s5r(r)==="[object ArrayBuffer]"}BN.exports=v5r});var k1=u((vQr,jN)=>{"use strict";var f5r=CN();jN.exports=f5r});var VN=u((fQr,GN)=>{"use strict";function c5r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}GN.exports=c5r});var HN=u((cQr,UN)=>{"use strict";function l5r(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}UN.exports=l5r});var JN=u((lQr,XN)=>{"use strict";var WN=j().isPrimitive,kN=Ce(),fn=b(),DN=d(),p5r=VN(),g5r=HN();function Rt(r,e){if(!(this instanceof Rt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!WN(r))throw new TypeError(DN("invalid argument. Real component must be a number. Value: `%s`.",r));if(!WN(e))throw new TypeError(DN("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return kN(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),kN(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}fn(Rt,"BYTES_PER_ELEMENT",8);fn(Rt.prototype,"BYTES_PER_ELEMENT",8);fn(Rt.prototype,"byteLength",16);fn(Rt.prototype,"toString",p5r);fn(Rt.prototype,"toJSON",g5r);XN.exports=Rt});var ui=u((pQr,zN)=>{"use strict";var m5r=JN();zN.exports=m5r});var $N=u((gQr,YN)=>{"use strict";var q5r=typeof Math.fround=="function"?Math.fround:null;YN.exports=q5r});var KN=u((mQr,ZN)=>{"use strict";var y5r=re(),QN=new y5r(1);function h5r(r){return QN[0]=r,QN[0]}ZN.exports=h5r});var eA=u((qQr,rA)=>{"use strict";var xN=$N(),d5r=KN(),D1;typeof xN=="function"?D1=xN:D1=d5r;rA.exports=D1});var iA=u((yQr,tA)=>{"use strict";function w5r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}tA.exports=w5r});var aA=u((hQr,nA)=>{"use strict";function b5r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}nA.exports=b5r});var cA=u((dQr,fA)=>{"use strict";var uA=j().isPrimitive,sA=Ce(),cn=b(),oA=eA(),vA=d(),E5r=iA(),N5r=aA();function Ft(r,e){if(!(this instanceof Ft))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!uA(r))throw new TypeError(vA("invalid argument. Real component must be a number. Value: `%s`.",r));if(!uA(e))throw new TypeError(vA("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return sA(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:oA(r)}),sA(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:oA(e)}),this}cn(Ft,"BYTES_PER_ELEMENT",4);cn(Ft.prototype,"BYTES_PER_ELEMENT",4);cn(Ft.prototype,"byteLength",8);cn(Ft.prototype,"toString",E5r);cn(Ft.prototype,"toJSON",N5r);fA.exports=Ft});var si=u((wQr,lA)=>{"use strict";var A5r=cA();lA.exports=A5r});var gA=u((bQr,pA)=>{"use strict";var O5r=ui(),S5r=si();function T5r(r){return r instanceof O5r||r instanceof S5r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}pA.exports=T5r});var Hr=u((EQr,mA)=>{"use strict";var I5r=gA();mA.exports=I5r});var yA=u((NQr,qA)=>{"use strict";var L5r=O(),Pa=as();function _5r(){return typeof Pa=="function"&&typeof Pa("foo")=="symbol"&&L5r(Pa,"iterator")&&typeof Pa.iterator=="symbol"}qA.exports=_5r});var Ra=u((AQr,hA)=>{"use strict";var P5r=yA();hA.exports=P5r});var wA=u((OQr,dA)=>{"use strict";var R5r=Ra(),F5r=R5r()?Symbol.iterator:null;dA.exports=F5r});var Fa=u((SQr,bA)=>{"use strict";var M5r=wA();bA.exports=M5r});var NA=u((TQr,EA)=>{"use strict";var B5r=Ce();function C5r(r,e,t){B5r(r,e,{configurable:!1,enumerable:!1,get:t})}EA.exports=C5r});var _=u((IQr,AA)=>{"use strict";var j5r=NA();AA.exports=j5r});var SA=u((LQr,OA)=>{"use strict";function G5r(r){return r.re}OA.exports=G5r});var Je=u((_Qr,TA)=>{"use strict";var V5r=SA();TA.exports=V5r});var LA=u((PQr,IA)=>{"use strict";function U5r(r){return r.im}IA.exports=U5r});var ze=u((RQr,_A)=>{"use strict";var H5r=LA();_A.exports=H5r});var RA=u((FQr,PA)=>{"use strict";var W5r=re();function k5r(r,e){return new W5r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}PA.exports=k5r});var oi=u((MQr,FA)=>{"use strict";var D5r=RA();FA.exports=D5r});var BA=u((BQr,MA)=>{"use strict";var X5r=gr();function J5r(r,e){return new X5r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}MA.exports=J5r});var vi=u((CQr,CA)=>{"use strict";var z5r=BA();CA.exports=z5r});var VA=u((jQr,GA)=>{"use strict";var jA={float64:Y5r,float32:$5r,int32:Q5r,int16:Z5r,int8:K5r,uint32:x5r,uint16:r9r,uint8:e9r,uint8c:t9r,generic:i9r,default:n9r};function Y5r(r,e){return r[e]}function $5r(r,e){return r[e]}function Q5r(r,e){return r[e]}function Z5r(r,e){return r[e]}function K5r(r,e){return r[e]}function x5r(r,e){return r[e]}function r9r(r,e){return r[e]}function e9r(r,e){return r[e]}function t9r(r,e){return r[e]}function i9r(r,e){return r[e]}function n9r(r,e){return r[e]}function a9r(r){var e=jA[r];return typeof e=="function"?e:jA.default}GA.exports=a9r});var Ma=u((GQr,UA)=>{"use strict";var u9r=VA();UA.exports=u9r});var kA=u((VQr,WA)=>{"use strict";var HA={complex128:s9r,complex64:o9r,default:v9r};function s9r(r,e){return r.get(e)}function o9r(r,e){return r.get(e)}function v9r(r,e){return r.get(e)}function f9r(r){var e=HA[r];return typeof e=="function"?e:HA.default}WA.exports=f9r});var Ba=u((UQr,DA)=>{"use strict";var c9r=kA();DA.exports=c9r});var JA=u((HQr,XA)=>{"use strict";var l9r=Pt(),p9r=Hr(),g9r=Je(),m9r=ze(),q9r=d();function y9r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,l9r(i)&&i.length>=2)e.push(i[0],i[1]);else if(p9r(i))e.push(g9r(i),m9r(i));else return new TypeError(q9r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}XA.exports=y9r});var YA=u((WQr,zA)=>{"use strict";var h9r=Pt(),d9r=Hr(),w9r=Je(),b9r=ze(),E9r=d();function N9r(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),h9r(a)&&a.length>=2)i.push(a[0],a[1]);else if(d9r(a))i.push(w9r(a),b9r(a));else return new TypeError(E9r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}zA.exports=N9r});var QA=u((kQr,$A)=>{"use strict";var A9r=Hr(),O9r=Je(),S9r=ze();function T9r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!A9r(i))return null;r[a]=O9r(i),r[a+1]=S9r(i),a+=2}return r}$A.exports=T9r});var aO=u((DQr,nO)=>{"use strict";var ln=Ge().isPrimitive,ZA=Pt(),J1=Gr(),KA=k1(),xA=Kn(),I9r=pr(),Mt=I(),fi=Hr(),Ca=ma(),X1=Tr(),L9r=Ra(),ci=Fa(),qr=b(),Va=_(),Fr=re(),rO=si(),Q=d(),ja=Je(),Ga=ze(),_9r=oi(),P9r=vi(),R9r=Ma(),F9r=Ba(),eO=JA(),M9r=YA(),B9r=QA(),Lr=Fr.BYTES_PER_ELEMENT*2,tO=L9r();function li(r){return r instanceof rr||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function iO(r){return r===rr||r.name==="Complex128Array"}function C9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Lr}function j9r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Lr*2}function rr(){var r,e,t,i;if(e=arguments.length,!(this instanceof rr))return e===0?new rr:e===1?new rr(arguments[0]):e===2?new rr(arguments[0],arguments[1]):new rr(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Fr(0);else if(e===1)if(ln(arguments[0]))t=new Fr(arguments[0]*2);else if(J1(arguments[0]))if(t=arguments[0],i=t.length,i&&I9r(t)&&fi(t[0])){if(t=B9r(new Fr(i*2),t),t===null){if(!Ca(i))throw new RangeError(Q("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(arguments[0])}}else{if(C9r(t))t=_9r(t,0);else if(j9r(t))t=P9r(t,0);else if(!Ca(i))throw new RangeError(Q("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Fr(t)}else if(KA(arguments[0])){if(t=arguments[0],!X1(t.byteLength/Lr))throw new RangeError(Q("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Lr,t.byteLength));t=new Fr(t)}else if(xA(arguments[0])){if(t=arguments[0],tO===!1)throw new TypeError(Q("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Mt(t[ci]))throw new TypeError(Q("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[ci](),!Mt(t.next))throw new TypeError(Q("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=eO(t),t instanceof Error)throw t;t=new Fr(t)}else throw new TypeError(Q("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!KA(t))throw new TypeError(Q("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!ln(r))throw new TypeError(Q("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!X1(r/Lr))throw new RangeError(Q("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Lr,r));if(e===2){if(i=t.byteLength-r,!X1(i/Lr))throw new RangeError(Q("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Lr,i));t=new Fr(t,r)}else{if(i=arguments[2],!ln(i))throw new TypeError(Q("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*Lr>t.byteLength-r)throw new RangeError(Q("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*Lr));t=new Fr(t,r,i*2)}}return qr(this,"_buffer",t),qr(this,"_length",t.length/2),this}qr(rr,"BYTES_PER_ELEMENT",Lr);qr(rr,"name","Complex64Array");qr(rr,"from",function(e){var t,i,n,a,s,o,f,v,c,l,p,m;if(!Mt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!iO(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Mt(n))throw new TypeError(Q("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(li(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),fi(l))s[m]=ja(l),s[m+1]=Ga(l);else if(ZA(l)&&l.length>=2)s[m]=l[0],s[m+1]=l[1];else throw new TypeError(Q("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(J1(e)){if(n){for(v=e.length,e.get&&e.set?f=F9r("default"):f=R9r("default"),p=0;p<v;p++)if(!fi(f(e,p))){c=!0;break}if(c){if(!Ca(v))throw new RangeError(Q("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,v));for(a=new this(v/2),s=a._buffer,p=0;p<v;p++)s[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),s=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),fi(l))s[m]=ja(l),s[m+1]=Ga(l);else if(ZA(l)&&l.length>=2)s[m]=l[0],s[m+1]=l[1];else throw new TypeError(Q("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(xA(e)&&tO&&Mt(e[ci])){if(s=e[ci](),!Mt(s.next))throw new TypeError(Q("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=M9r(s,n,t):o=eO(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,p=0;p<v;p++)s[p]=o[p];return a}throw new TypeError(Q("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});qr(rr,"of",function(){var e,t;if(!Mt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!iO(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Va(rr.prototype,"buffer",function(){return this._buffer.buffer});Va(rr.prototype,"byteLength",function(){return this._buffer.byteLength});Va(rr.prototype,"byteOffset",function(){return this._buffer.byteOffset});qr(rr.prototype,"BYTES_PER_ELEMENT",rr.BYTES_PER_ELEMENT);qr(rr.prototype,"copyWithin",function(e,t){if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});qr(rr.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},qr(i,"next",f),qr(i,"return",v),ci&&qr(i,ci,c),i;function f(){var l;return s+=1,a||s>=n?{done:!0}:(o+=2,l=new rO(e[o],e[o+1]),{value:[s,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});qr(rr.prototype,"get",function(e){var t;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ln(e))throw new TypeError(Q("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new rO(t[e],t[e+1])});Va(rr.prototype,"length",function(){return this._length});qr(rr.prototype,"set",function(e){var t,i,n,a,s,o,f,v,c;if(!li(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!ln(i))throw new TypeError(Q("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(fi(e)){if(i>=this._length)throw new RangeError(Q("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=ja(e),n[i+1]=Ga(e);return}if(li(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(J1(e)){for(o=e.length,v=0;v<o;v++)if(!fi(e[v])){s=!0;break}if(s){if(!Ca(o))throw new RangeError(Q("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*Lr,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Fr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=ja(f),n[i+1]=Ga(f),i+=2;return}throw new TypeError(Q("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});nO.exports=rr});var pn=u((XQr,uO)=>{"use strict";var G9r=aO();uO.exports=G9r});var oO=u((JQr,sO)=>{"use strict";function V9r(r){return r.re}sO.exports=V9r});var Ye=u((zQr,vO)=>{"use strict";var U9r=oO();vO.exports=U9r});var cO=u((YQr,fO)=>{"use strict";function H9r(r){return r.im}fO.exports=H9r});var $e=u(($Qr,lO)=>{"use strict";var W9r=cO();lO.exports=W9r});var gO=u((QQr,pO)=>{"use strict";var k9r=Pt(),D9r=Hr(),X9r=d(),J9r=Ye(),z9r=$e();function Y9r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,k9r(i)&&i.length>=2)e.push(i[0],i[1]);else if(D9r(i))e.push(J9r(i),z9r(i));else return new TypeError(X9r("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",i));return e}pO.exports=Y9r});var qO=u((ZQr,mO)=>{"use strict";var $9r=Pt(),Q9r=Hr(),Z9r=d(),K9r=Ye(),x9r=$e();function r7r(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),$9r(a)&&a.length>=2)i.push(a[0],a[1]);else if(Q9r(a))i.push(K9r(a),x9r(a));else return new TypeError(Z9r("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",a));return i}mO.exports=r7r});var hO=u((KQr,yO)=>{"use strict";var e7r=Hr(),t7r=Ye(),i7r=$e();function n7r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!e7r(i))return null;r[a]=t7r(i),r[a+1]=i7r(i),a+=2}return r}yO.exports=n7r});var TO=u((xQr,SO)=>{"use strict";var gn=Ge().isPrimitive,dO=Pt(),Y1=Gr(),wO=k1(),bO=Kn(),a7r=pr(),Bt=I(),pi=Hr(),Ua=ma(),z1=Tr(),u7r=Ra(),gi=Fa(),yr=b(),ka=_(),Mr=gr(),EO=ui(),Ha=Ye(),Wa=$e(),s7r=oi(),o7r=vi(),v7r=Ma(),f7r=Ba(),Z=d(),NO=gO(),c7r=qO(),l7r=hO(),_r=Mr.BYTES_PER_ELEMENT*2,AO=u7r();function mi(r){return r instanceof er||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function OO(r){return r===er||r.name==="Complex64Array"}function p7r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===_r/2}function g7r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===_r}function er(){var r,e,t,i;if(e=arguments.length,!(this instanceof er))return e===0?new er:e===1?new er(arguments[0]):e===2?new er(arguments[0],arguments[1]):new er(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Mr(0);else if(e===1)if(gn(arguments[0]))t=new Mr(arguments[0]*2);else if(Y1(arguments[0]))if(t=arguments[0],i=t.length,i&&a7r(t)&&pi(t[0])){if(t=l7r(new Mr(i*2),t),t===null){if(!Ua(i))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Mr(arguments[0])}}else{if(p7r(t))t=s7r(t,0);else if(g7r(t))t=o7r(t,0);else if(!Ua(i))throw new RangeError(Z("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",i));t=new Mr(t)}else if(wO(arguments[0])){if(t=arguments[0],!z1(t.byteLength/_r))throw new RangeError(Z("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",_r,t.byteLength));t=new Mr(t)}else if(bO(arguments[0])){if(t=arguments[0],AO===!1)throw new TypeError(Z("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Bt(t[gi]))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=t[gi](),!Bt(t.next))throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(t=NO(t),t instanceof Error)throw t;t=new Mr(t)}else throw new TypeError(Z("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));else{if(t=arguments[0],!wO(t))throw new TypeError(Z("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(r=arguments[1],!gn(r))throw new TypeError(Z("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!z1(r/_r))throw new RangeError(Z("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",_r,r));if(e===2){if(i=t.byteLength-r,!z1(i/_r))throw new RangeError(Z("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",_r,i));t=new Mr(t,r)}else{if(i=arguments[2],!gn(i))throw new TypeError(Z("invalid argument. Length must be a nonnegative integer. Value: `%s`.",i));if(i*_r>t.byteLength-r)throw new RangeError(Z("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",i*_r));t=new Mr(t,r,i*2)}}return yr(this,"_buffer",t),yr(this,"_length",t.length/2),this}yr(er,"BYTES_PER_ELEMENT",_r);yr(er,"name","Complex128Array");yr(er,"from",function(e){var t,i,n,a,s,o,f,v,c,l,p,m;if(!Bt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!OO(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Bt(n))throw new TypeError(Z("invalid argument. Second argument must be a function. Value: `%s`.",n));i>2&&(t=arguments[2])}if(mi(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,e.get(p),p),pi(l))s[m]=Ha(l),s[m+1]=Wa(l);else if(dO(l)&&l.length>=2)s[m]=l[0],s[m+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(Y1(e)){if(n){for(v=e.length,e.get&&e.set?f=f7r("default"):f=v7r("default"),p=0;p<v;p++)if(!pi(f(e,p))){c=!0;break}if(c){if(!Ua(v))throw new RangeError(Z("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",v));for(a=new this(v/2),s=a._buffer,p=0;p<v;p++)s[p]=n.call(t,f(e,p),p);return a}for(a=new this(v),s=a._buffer,m=0,p=0;p<v;p++){if(l=n.call(t,f(e,p),p),pi(l))s[m]=Ha(l),s[m+1]=Wa(l);else if(dO(l)&&l.length>=2)s[m]=l[0],s[m+1]=l[1];else throw new TypeError(Z("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",l));m+=2}return a}return new this(e)}if(bO(e)&&AO&&Bt(e[gi])){if(s=e[gi](),!Bt(s.next))throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if(n?o=c7r(s,n,t):o=NO(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,p=0;p<v;p++)s[p]=o[p];return a}throw new TypeError(Z("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))});yr(er,"of",function(){var e,t;if(!Bt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!OO(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});ka(er.prototype,"buffer",function(){return this._buffer.buffer});ka(er.prototype,"byteLength",function(){return this._buffer.byteLength});ka(er.prototype,"byteOffset",function(){return this._buffer.byteOffset});yr(er.prototype,"BYTES_PER_ELEMENT",er.BYTES_PER_ELEMENT);yr(er.prototype,"copyWithin",function(e,t){if(!mi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});yr(er.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!mi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},yr(i,"next",f),yr(i,"return",v),gi&&yr(i,gi,c),i;function f(){var l;return s+=1,a||s>=n?{done:!0}:(o+=2,l=new EO(e[o],e[o+1]),{value:[s,l],done:!1})}function v(l){return a=!0,arguments.length?{value:l,done:!0}:{done:!0}}function c(){return t.entries()}});yr(er.prototype,"get",function(e){var t;if(!mi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!gn(e))throw new TypeError(Z("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return t=this._buffer,e*=2,new EO(t[e],t[e+1])});ka(er.prototype,"length",function(){return this._length});yr(er.prototype,"set",function(e){var t,i,n,a,s,o,f,v,c;if(!mi(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!gn(i))throw new TypeError(Z("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",i))}else i=0;if(pi(e)){if(i>=this._length)throw new RangeError(Z("invalid argument. Index argument is out-of-bounds. Value: `%u`.",i));i*=2,n[i]=Ha(e),n[i+1]=Wa(e);return}if(mi(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,c=n.byteOffset+i*_r,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Mr(t.length),v=0;v<t.length;v++)a[v]=t[v];t=a}for(i*=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(Y1(e)){for(o=e.length,v=0;v<o;v++)if(!pi(e[v])){s=!0;break}if(s){if(!Ua(o))throw new RangeError(Z("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",o));if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,c=n.byteOffset+i*_r,t.buffer===n.buffer&&t.byteOffset<c&&t.byteOffset+t.byteLength>c){for(a=new Mr(o),v=0;v<o;v++)a[v]=t[v];t=a}for(i*=2,o/=2,c=0,v=0;v<o;v++)n[i]=t[c],n[i+1]=t[c+1],i+=2,c+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,v=0;v<o;v++)f=e[v],n[i]=Ha(f),n[i+1]=Wa(f),i+=2;return}throw new TypeError(Z("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e))});SO.exports=er});var mn=u((rZr,IO)=>{"use strict";var m7r=TO();IO.exports=m7r});var _O=u((eZr,LO)=>{"use strict";var q7r=gr(),y7r=re(),h7r=cr(),d7r=Nt(),w7r=Zt(),b7r=Ji(),E7r=Qt(),N7r=Xi(),A7r=Di(),O7r=pn(),S7r=mn(),T7r=[q7r,y7r,d7r,h7r,b7r,w7r,A7r,E7r,N7r,O7r,S7r];LO.exports=T7r});var RO=u((tZr,PO)=>{"use strict";var I7r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];PO.exports=I7r});var BO=u((iZr,MO)=>{"use strict";var L7r=dt(),_7r=pr(),P7r=je(),R7r=LN(),F7r=_O(),FO=RO(),M7r=FO.length;function B7r(r){var e;if(_7r(r))return"generic";if(L7r(r))return null;for(e=0;e<M7r;e++)if(r instanceof F7r[e])return FO[e];return R7r[P7r(r)]||null}MO.exports=B7r});var Da=u((nZr,CO)=>{"use strict";var C7r=BO();CO.exports=C7r});var VO=u((aZr,GO)=>{"use strict";var jO=I(),j7r=Gr(),G7r=mN(),V7r=U1(),U7r=H1(),H7r=W1(),W7r=Da(),$1=d();function k7r(){var r,e,t,i,n,a,s,o,f;if(r=arguments[0],arguments.length>1)if(j7r(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!jO(t))throw new TypeError($1("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[3]}}else{if(t=arguments[1],!jO(t))throw new TypeError($1("invalid argument. Callback argument must be a function. Value: `%s`.",t));e=arguments[2]}if(!G7r(r))throw new TypeError($1("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(o=-1,i===void 0){if(i=[],t){for(;o+=1,f=r.next(),!f.done;)i.push(t.call(e,f.value,o));return i}for(;f=r.next(),!f.done;)i.push(f.value);return i}if(n=i.length,s=W7r(i),V7r(i)?a=U7r(s):a=H7r(s),t){for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,t.call(e,f.value,o));return i}for(;o<n-1&&(o+=1,f=r.next(),!f.done);)a(i,o,f.value);return i}GO.exports=k7r});var HO=u((uZr,UO)=>{"use strict";var D7r=VO();UO.exports=D7r});var kO=u((sZr,WO)=>{"use strict";function X7r(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}WO.exports=X7r});var XO=u((oZr,DO)=>{"use strict";function J7r(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}DO.exports=J7r});var YO=u((vZr,zO)=>{"use strict";var z7r=tr(),JO=ne(),Y7r=kO(),$7r=XO(),Q7r=.7853981633974483,Z7r=3061616997868383e-32,K7r=.3333333333333341,x7r=2147483647;function rgr(r,e,t){var i,n,a,s,o,f,v,c,l;return i=z7r(r),n=i&x7r|0,n>=1072010280&&(r<0&&(r=-r,e=-e),l=Q7r-r,c=Z7r-e,r=l+c,e=0),l=r*r,c=l*l,s=Y7r(c),v=l*$7r(c),o=l*r,s=e+l*(o*(s+v)+e),s+=K7r*o,c=r+s,n>=1072010280?(v=t,(1-(i>>30&2))*(v-2*(r-(c*c/(c+v)-s)))):t===1?c:(l=JO(c,0),v=s-(l-r),a=-1/c,f=JO(a,0),o=1+f*l,f+a*(o+f*v))}zO.exports=rgr});var QO=u((fZr,$O)=>{"use strict";var egr=YO();$O.exports=egr});var xO=u((cZr,KO)=>{"use strict";var tgr=tr(),ZO=QO(),igr=xi(),Q1=[0,0],ngr=2147483647,agr=1072243195,ugr=2146435072,sgr=1044381696;function ogr(r){var e,t;return e=tgr(r),e&=ngr,e<=agr?e<sgr?r:ZO(r,0,1):e>=ugr?NaN:(t=igr(r,Q1),ZO(Q1[0],Q1[1],1-((t&1)<<1)))}KO.exports=ogr});var Z1=u((lZr,rS)=>{"use strict";var vgr=xO();rS.exports=vgr});var Xa=u((pZr,eS)=>{"use strict";var fgr=1.5707963267948966;eS.exports=fgr});var Ja=u((gZr,tS)=>{"use strict";var cgr=.7853981633974483;tS.exports=cgr});var nS=u((mZr,iS)=>{"use strict";function lgr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}iS.exports=lgr});var uS=u((qZr,aS)=>{"use strict";function pgr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}aS.exports=pgr});var vS=u((yZr,oS)=>{"use strict";var ggr=E(),mgr=P(),K1=Xa(),qgr=Ja(),ygr=X(),hgr=nS(),dgr=uS(),sS=6123233995736766e-32,wgr=2.414213562373095;function bgr(r){var e,t,i,n;return ggr(r)||r===0?r:r===mgr?K1:r===ygr?-K1:(r<0&&(t=!0,r=-r),e=0,r>wgr?(i=K1,e=1,r=-(1/r)):r<=.66?i=0:(i=qgr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*hgr(n)/dgr(n),n=r*n+r,e===2?n+=.5*sS:e===1&&(n+=sS),i+=n,t?-i:i)}oS.exports=bgr});var za=u((hZr,fS)=>{"use strict";var Egr=vS();fS.exports=Egr});var x1=u((dZr,cS)=>{"use strict";var Ngr=j().isPrimitive;function Agr(r){return Ngr(r)&&r>=0}cS.exports=Agr});var rv=u((wZr,lS)=>{"use strict";var Ogr=j().isObject;function Sgr(r){return Ogr(r)&&r.valueOf()>=0}lS.exports=Sgr});var gS=u((bZr,pS)=>{"use strict";var Tgr=x1(),Igr=rv();function Lgr(r){return Tgr(r)||Igr(r)}pS.exports=Lgr});var tv=u((EZr,qS)=>{"use strict";var mS=b(),ev=gS(),_gr=x1(),Pgr=rv();mS(ev,"isPrimitive",_gr);mS(ev,"isObject",Pgr);qS.exports=ev});var hS=u((NZr,yS)=>{"use strict";var Rgr=T(),Ya=O(),Fgr=jr().isPrimitive,Mgr=ue().isPrimitive,Bgr=Ge().isPrimitive,Cgr=tv().isPrimitive,qn=d();function jgr(r,e){return Rgr(e)?Ya(e,"period")&&(r.period=e.period,!Mgr(e.period))?new TypeError(qn("invalid option. `%s` option must be an positive integer. Option: `%s`.","period",e.period)):Ya(e,"amplitude")&&(r.amplitude=e.amplitude,!Cgr(e.amplitude))?new TypeError(qn("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","amplitude",e.amplitude)):Ya(e,"offset")&&(r.offset=e.offset,!Fgr(e.offset))?new TypeError(qn("invalid option. `%s` option must be an integer. Option: `%s`.","offset",e.offset)):Ya(e,"iter")&&(r.iter=e.iter,!Bgr(e.iter))?new TypeError(qn("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",e.iter)):null:new TypeError(qn("invalid argument. Options argument must be an object. Value: `%s`.",e))}yS.exports=jgr});var ES=u((AZr,bS)=>{"use strict";var iv=b(),dS=Fa(),Ggr=Z1(),Vgr=za(),Ugr=Xa(),Hgr=Ir(),Wgr=hS();function wS(r){var e,t,i,n,a,s,o,f;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=Wgr(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,s=Hgr/e.period,o=e.amplitude/Ugr,f=0,t={},iv(t,"next",v),iv(t,"return",c),dS&&iv(t,dS,l),t;function v(){return f+=1,i||f>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*Vgr(Ggr(s*a)),done:!1})}function c(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function l(){return wS(e)}}bS.exports=wS});var AS=u((OZr,NS)=>{"use strict";var kgr=ES();NS.exports=kgr});var SS=u((SZr,OS)=>{"use strict";var Dgr={Complex64:"complex64",Complex128:"complex128"};OS.exports=Dgr});var IS=u((TZr,TS)=>{"use strict";var Xgr=si(),Jgr=ui(),zgr=[Xgr,Jgr];TS.exports=zgr});var _S=u((IZr,LS)=>{"use strict";var Ygr=["complex64","complex128"];LS.exports=Ygr});var FS=u((LZr,RS)=>{"use strict";var $gr=je(),Qgr=SS(),Zgr=IS(),PS=_S(),Kgr=PS.length;function xgr(r){var e;for(e=0;e<Kgr;e++)if(r instanceof Zgr[e])return PS[e];return Qgr[$gr(r)]||null}RS.exports=xgr});var nv=u((_Zr,MS)=>{"use strict";var rmr=FS();MS.exports=rmr});var CS=u((PZr,BS)=>{"use strict";var emr=gr(),tmr=re(),imr=mn(),nmr=pn(),amr={float64:emr,float32:tmr,complex128:imr,complex64:nmr};BS.exports=amr});var GS=u((RZr,jS)=>{"use strict";var umr=CS();function smr(r){return umr[r]||null}jS.exports=smr});var US=u((FZr,VS)=>{"use strict";var omr=GS();VS.exports=omr});var WS=u((MZr,HS)=>{"use strict";function vmr(r,e,t,i){var n,a,s,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,s=(e-r)/a,o=1;o<a;o++)n.push(r+s*o);return i&&n.push(e),n}HS.exports=vmr});var YS=u((BZr,zS)=>{"use strict";var fmr=si(),cmr=ui(),kS=Ye(),DS=$e(),XS=Je(),JS=ze();function lmr(r,e,t,i,n,a){var s,o,f,v,c,l,p,m,y,q,g,h,N;if(n===0)return[];if(o=0,r==="float64"?(v=e,l=0):r==="complex64"?(o+=1,v=XS(e),l=JS(e)):(v=kS(e),l=DS(e)),t==="float64"?(c=i,p=0):t==="complex64"?(o+=1,c=XS(i),p=JS(i)):(c=kS(i),p=DS(i)),o===2?s=fmr:s=cmr,n===1)return a?[new s(c,p)]:[new s(v,l)];for(f=[new s(v,l)],a?h=n-1:h=n,q=(c-v)/h,g=(p-l)/h,N=1;N<h;N++)m=v+q*N,y=l+g*N,f.push(new s(m,y));return a&&f.push(new s(c,p)),f}zS.exports=lmr});var av=u((CZr,$S)=>{"use strict";function pmr(r,e,t,i,n){var a,s,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,s=(t-e)/a,o=1;o<a;o++)r[o]=e+s*o;return n&&(r[a]=t),r}$S.exports=pmr});var uv=u((jZr,rT)=>{"use strict";var QS=Ye(),ZS=$e(),KS=Je(),xS=ze();function gmr(r,e,t,i,n,a,s){var o,f,v,c,l,p,m,y,q;if(a===0)return r;if(e==="float64"?(o=t,v=0):e==="complex64"?(o=KS(t),v=xS(t)):(o=QS(t),v=ZS(t)),i==="float64"?(f=n,c=0):i==="complex64"?(f=KS(n),c=xS(n)):(f=QS(n),c=ZS(n)),a===1)return s?(r[0]=f,r[1]=c):(r[0]=o,r[1]=v),r;for(r[0]=o,r[1]=v,s?m=a-1:m=a,l=(f-o)/m,p=(c-v)/m,q=2,y=1;y<m;y++)r[q]=o+l*y,r[q+1]=v+p*y,q+=2;return s&&(r[q]=f,r[q+1]=c),r}rT.exports=gmr});var ov=u((GZr,tT)=>{"use strict";var mmr=T(),eT=O(),qmr=K().isPrimitive,ymr=or().isPrimitive,sv=d();function hmr(r,e){return mmr(e)?eT(e,"dtype")&&(r.dtype=e.dtype,!qmr(r.dtype))?new TypeError(sv("invalid option. `%s` option must be a string. Option: `%s`.","dtype",r.dtype)):eT(e,"endpoint")&&(r.endpoint=e.endpoint,!ymr(r.endpoint))?new TypeError(sv("invalid option. `%s` option must be a boolean. Option: `%s`.","endpoint",r.endpoint)):null:new TypeError(sv("invalid argument. Options argument must be an object. Value: `%s`.",e))}tT.exports=hmr});var vv=u((VZr,dmr)=>{dmr.exports={endpoint:!0}});var vT=u((UZr,oT)=>{"use strict";var iT=Hr(),nT=j().isPrimitive,wmr=Ge().isPrimitive,aT=E(),uT=nv(),bmr=US(),Emr=oi(),Nmr=vi(),qi=d(),Amr=WS(),Omr=YS(),Smr=av(),sT=uv(),Tmr=ov(),Imr=vv();function Lmr(r,e,t){var i,n,a,s,o,f,v;if(typeof r=="object"){if(o=uT(r),o===null){if(!iT(r))throw new TypeError(qi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="complex128"}v=!0}else{if(!nT(r)||aT(r))throw new TypeError(qi("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));o="float64"}if(typeof e=="object"){if(f=uT(e),f===null){if(!iT(e))throw new TypeError(qi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="complex128"}v=!0}else{if(!nT(e)||aT(e))throw new TypeError(qi("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));f="float64"}if(!wmr(t))throw new TypeError(qi("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t));if(i={endpoint:Imr.endpoint},o===f?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=Tmr(i,arguments[3]),a))throw a;if(i.dtype==="generic")return v?Omr(o,r,f,e,t,i.endpoint):Amr(r,e,t,i.endpoint);if(n=bmr(i.dtype),n===null)throw new TypeError(qi('invalid option. `%s` option must be a real or complex floating-point data type or "generic". Option: `%s`.',"dtype",i.dtype));if(s=new n(t),i.dtype==="complex64")return sT(Emr(s,0),o,r,f,e,t,i.endpoint),s;if(i.dtype==="complex128")return sT(Nmr(s,0),o,r,f,e,t,i.endpoint),s;if(v)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return Smr(s,r,e,t,i.endpoint)}oT.exports=Lmr});var cT=u((HZr,fT)=>{"use strict";var _mr=U1(),Pmr=Ma(),Rmr=W1(),Fmr=Ba(),Mmr=H1(),Bmr=Da();function Cmr(r){var e=Bmr(r);return _mr(r)?{accessorProtocol:!0,accessors:[Fmr(e),Mmr(e)]}:{accessorProtocol:!1,accessors:[Pmr(e),Rmr(e)]}}fT.exports=Cmr});var pT=u((WZr,lT)=>{"use strict";var jmr=cT();lT.exports=jmr});var mT=u((kZr,gT)=>{"use strict";var Gmr=pT();function Vmr(r){var e=Gmr(r);return{data:r,accessorProtocol:e.accessorProtocol,accessors:e.accessors}}gT.exports=Vmr});var $a=u((DZr,qT)=>{"use strict";var Umr=mT();qT.exports=Umr});var ET=u((XZr,bT)=>{"use strict";var Hmr=si(),Wmr=ui(),yT=Ye(),hT=$e(),dT=Je(),wT=ze();function kmr(r,e,t,i,n,a,s){var o,f,v,c,l,p,m,y,q,g,h,N,A,G;if(a===0)return r;if(f=0,e==="float64"?(v=t,l=0):e==="complex64"?(f+=1,v=dT(t),l=wT(t)):(v=yT(t),l=hT(t)),i==="float64"?(c=n,p=0):i==="complex64"?(f+=1,c=dT(n),p=wT(n)):(c=yT(n),p=hT(n)),f===2?o=Hmr:o=Wmr,y=r.data,m=r.accessors[1],a===1)return s?m(y,0,new o(c,p)):m(y,0,new o(v,l)),r;for(m(y,0,new o(v,l)),s?A=a-1:A=a,h=(c-v)/A,N=(p-l)/A,G=1;G<A;G++)q=v+h*G,g=l+N*G,m(y,G,new o(q,g));return s&&m(y,A,new o(c,p)),r}bT.exports=kmr});var AT=u((JZr,NT)=>{"use strict";function Dmr(r,e,t,i,n){var a,s,o,f,v;if(i===0)return r;if(a=r.data,s=r.accessors[1],i===1)return n?s(a,0,t):s(a,0,e),r;for(s(a,0,e),n?o=i-1:o=i,f=(t-e)/o,v=1;v<o;v++)s(a,v,e+f*v);return n&&s(a,o,t),r}NT.exports=Dmr});var RT=u((zZr,PT)=>{"use strict";var OT=Hr(),ST=j().isPrimitive,Xmr=Gr(),yn=d(),TT=E(),IT=nv(),Jmr=Da(),zmr=oi(),Ymr=vi(),LT=$a(),$mr=ET(),Qmr=AT(),_T=uv(),Zmr=av(),Kmr=ov(),xmr=vv();function rqr(r,e,t){var i,n,a,s,o,f,v;if(typeof r=="object"){if(a=IT(r),a===null){if(!OT(r))throw new TypeError(yn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="complex128"}o=!0}else{if(!ST(r)||TT(r))throw new TypeError(yn("invalid argument. First argument must be either a real or complex number. Value: `%s`.",r));a="float64"}if(typeof e=="object"){if(s=IT(e),s===null){if(!OT(e))throw new TypeError(yn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));s="complex128"}o=!0}else{if(!ST(e)||TT(e))throw new TypeError(yn("invalid argument. Second argument must be either a real or complex number. Value: `%s`.",e));s="float64"}if(!Xmr(t))throw new TypeError(yn("invalid argument. Third argument must be an array-like object. Value: `%s`.",t));if(i={endpoint:xmr.endpoint},arguments.length>3&&(n=Kmr(i,arguments[3]),n))throw n;if(f=Jmr(t),f===null&&(f="generic"),f==="complex64")return _T(zmr(t,0),a,r,s,e,t.length,i.endpoint),t;if(f==="complex128")return _T(Ymr(t,0),a,r,s,e,t.length,i.endpoint),t;if(o){if(f==="generic")return v=LT(t),$mr(v,a,r,s,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return v=LT(t),v.accessorProtocol?(Qmr(v,r,e,t.length,i.endpoint),t):(Zmr(t,r,e,t.length,i.endpoint),t)}PT.exports=rqr});var BT=u((YZr,MT)=>{"use strict";var eqr=b(),FT=vT(),tqr=RT();eqr(FT,"assign",tqr);MT.exports=FT});var jT=u(($Zr,CT)=>{"use strict";var iqr=E(),nqr=De();function aqr(r,e,t){var i,n,a,s;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],s=1;s<r;s++){if(n+=t,a=e[n],iqr(a))return a;(a>i||a===i&&nqr(a))&&(i=a)}return i}CT.exports=aqr});var VT=u((QZr,GT)=>{"use strict";var uqr=E(),sqr=De();function oqr(r,e,t,i){var n,a,s,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,s=e[a],uqr(s))return s;(s>n||s===n&&sqr(s))&&(n=s)}return n}GT.exports=oqr});var WT=u((ZZr,HT)=>{"use strict";var vqr=b(),UT=jT(),fqr=VT();vqr(UT,"ndarray",fqr);HT.exports=UT});var DT=u((KZr,kT)=>{"use strict";var cqr=WT();kT.exports=cqr});var zT=u((xZr,JT)=>{"use strict";var XT=E(),lqr=De();function pqr(r,e,t,i,n){var a,s,o,f,v;if(r<=0)return NaN;for(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,v=0;v<r&&i[o]!==0;v++)s+=t,o+=n;if(v===r)return NaN;if(a=e[s],XT(a))return a;for(v+=1,v;v<r;v++)if(s+=t,o+=n,!i[o]){if(f=e[s],XT(f))return f;(f>a||f===a&&lqr(f))&&(a=f)}return a}JT.exports=pqr});var QT=u((rKr,$T)=>{"use strict";var YT=E(),gqr=De();function mqr(r,e,t,i,n,a,s){var o,f,v,c,l;if(r<=0)return NaN;for(f=i,v=s,l=0;l<r&&n[v]!==0;l++)f+=t,v+=a;if(l===r)return NaN;if(o=e[f],YT(o))return o;for(l+=1,l;l<r;l++)if(f+=t,v+=a,!n[v]){if(c=e[f],YT(c))return c;(c>o||c===o&&gqr(c))&&(o=c)}return o}$T.exports=mqr});var xT=u((eKr,KT)=>{"use strict";var qqr=b(),ZT=zT(),yqr=QT();qqr(ZT,"ndarray",yqr);KT.exports=ZT});var tI=u((tKr,eI)=>{"use strict";var rI=d();function hqr(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError(rI('invalid argument. Fourth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),i));if(n!=="closed"&&n!=="open")throw new TypeError(rI('invalid argument. Fifth argument must be one of the following: "%s". Value: `%s`.',["closed","open"].join('", "'),n))}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}eI.exports=hqr});var nI=u((iKr,iI)=>{"use strict";var dqr=tI();iI.exports=dqr});var uI=u((nKr,aI)=>{"use strict";var wqr=j().isPrimitive,bqr=nI(),Eqr=d();function Nqr(r,e,t,i,n,a){var s,o;if(!(wqr(r)&&bqr(r,e,t,i,n)))throw i==="closed"?s="[":s="(",n==="closed"?o="]":o=")",new TypeError(Eqr("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,s,e,t,o,String(r)))}aI.exports=Nqr});var oI=u((aKr,sI)=>{"use strict";var Aqr=or().isPrimitive,Oqr=d();function Sqr(r,e){if(!Aqr(r))throw new TypeError(Oqr("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}sI.exports=Sqr});var fI=u((uKr,vI)=>{"use strict";function Tqr(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}vI.exports=Tqr});var lI=u((sKr,cI)=>{"use strict";var Iqr=d(),Lqr=fI();function _qr(r,e,t){if(!Lqr(r,e))throw new TypeError(Iqr("invalid argument. %s must be broadcast compatible.",t))}cI.exports=_qr});var gI=u((oKr,pI)=>{"use strict";function Pqr(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}pI.exports=Pqr});var qI=u((vKr,mI)=>{"use strict";var Rqr=d(),Fqr=gI();function Mqr(r,e,t,i){if(!Fqr(r,e))throw new TypeError(Rqr("invalid argument. %s must be broadcast compatible with %s.",t,i))}mI.exports=Mqr});var fv=u((fKr,yI)=>{"use strict";var Bqr=d();function Cqr(r,e){if(r===void 0)throw new Error(Bqr("invalid invocation. Must provide %s.",e))}yI.exports=Cqr});var dI=u((cKr,hI)=>{"use strict";var jqr=d();function Gqr(r,e,t,i){if(!(r>e))throw new TypeError(jqr("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}hI.exports=Gqr});var bI=u((lKr,wI)=>{"use strict";var Vqr=d();function Uqr(r,e,t,i){if(!(r>=e))throw new TypeError(Vqr("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}wI.exports=Uqr});var NI=u((pKr,EI)=>{"use strict";var Hqr=jr().isPrimitive,Wqr=d();function kqr(r,e){if(!Hqr(r))throw new TypeError(Wqr("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}EI.exports=kqr});var OI=u((gKr,AI)=>{"use strict";var Dqr=d();function Xqr(r,e,t,i){if(!(r<e))throw new TypeError(Dqr("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}AI.exports=Xqr});var TI=u((mKr,SI)=>{"use strict";var Jqr=d();function zqr(r,e,t,i){if(!(r<=e))throw new TypeError(Jqr("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}SI.exports=zqr});var LI=u((qKr,II)=>{"use strict";var Yqr=Ge().isPrimitive,$qr=d();function Qqr(r,e){if(!Yqr(r))throw new TypeError($qr("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}II.exports=Qqr});var PI=u((yKr,_I)=>{"use strict";var Zqr=tv().isPrimitive,Kqr=d();function xqr(r,e){if(!Zqr(r))throw new TypeError(Kqr("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}_I.exports=xqr});var FI=u((hKr,RI)=>{"use strict";var ryr=j().isPrimitive,eyr=d();function tyr(r,e){if(!ryr(r))throw new TypeError(eyr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}RI.exports=tyr});var BI=u((dKr,MI)=>{"use strict";var iyr=d();function nyr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(iyr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}MI.exports=nyr});var cv=u((wKr,CI)=>{"use strict";var ayr=ue().isPrimitive,uyr=d();function syr(r,e){if(!ayr(r))throw new TypeError(uyr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}CI.exports=syr});var GI=u((bKr,jI)=>{"use strict";var oyr=W().isPrimitive,vyr=d();function fyr(r,e){if(!oyr(r))throw new TypeError(vyr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}jI.exports=fyr});var lv=u((EKr,VI)=>{"use strict";var cyr=j().isPrimitive;function lyr(r){return cyr(r)&&r>=0&&r<=1}VI.exports=lyr});var pv=u((NKr,UI)=>{"use strict";var pyr=j().isObject;function gyr(r){return pyr(r)&&r.valueOf()>=0&&r.valueOf()<=1}UI.exports=gyr});var WI=u((AKr,HI)=>{"use strict";var myr=lv(),qyr=pv();function yyr(r){return myr(r)||qyr(r)}HI.exports=yyr});var hn=u((OKr,DI)=>{"use strict";var kI=b(),gv=WI(),hyr=lv(),dyr=pv();kI(gv,"isPrimitive",hyr);kI(gv,"isObject",dyr);DI.exports=gv});var JI=u((SKr,XI)=>{"use strict";var wyr=hn().isPrimitive,byr=d();function Eyr(r,e){if(!wyr(r))throw new TypeError(byr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}XI.exports=Eyr});var YI=u((TKr,zI)=>{"use strict";var Nyr=pr(),Ayr=d();function Oyr(r,e){if(!Nyr(r))throw new TypeError(Ayr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}zI.exports=Oyr});var QI=u((IKr,$I)=>{"use strict";function Syr(r){return r.length===1||r[0].length===1}$I.exports=Syr});var KI=u((LKr,ZI)=>{"use strict";var Tyr=pr(),Iyr=QI();function Lyr(r){return Tyr(r)&&Iyr(r)}ZI.exports=Lyr});var rL=u((_Kr,xI)=>{"use strict";var _yr=d(),Pyr=KI();function Ryr(r,e){if(!Pyr(r))throw new TypeError(_yr("invalid argument. %s must consist of only a single row or a single column.",e))}xI.exports=Ryr});var tL=u((PKr,eL)=>{"use strict";function Fyr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}eL.exports=Fyr});var nL=u((RKr,iL)=>{"use strict";var Myr=d(),Byr=tL();function Cyr(r,e,t){if(!Byr(r,e))throw new TypeError(Myr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}iL.exports=Cyr});var uL=u((FKr,aL)=>{"use strict";var jyr=K().isPrimitive,Gyr=d();function Vyr(r,e){if(!jyr(r))throw new TypeError(Gyr("invalid argument. %s must be a string. Value: %s.",e,String(r)))}aL.exports=Vyr});var oL=u((MKr,sL)=>{"use strict";var Uyr=d();function Hyr(r){throw new Error(Uyr("invalid argument. Unrecognized option name. Value: %s.",String(r)))}sL.exports=Hyr});var cL=u((BKr,fL)=>{"use strict";var vL=cv(),Wyr=fv();function kyr(r,e,t){vL(r,"Number of rows"),vL(e,"Number of columns"),Wyr(t,"a pseudorandom number generator seed")}fL.exports=kyr});var pL=u((CKr,lL)=>{"use strict";var Dyr=pr(),Xyr=jr().isPrimitive,Jyr=d(),zyr=_a();function Yyr(r){if(Xyr(r))return r;if(Dyr(r))return zyr(r);throw new TypeError(Jyr("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}lL.exports=Yyr});var mL=u((jKr,gL)=>{"use strict";var z={};z.isBetween=uI();z.isBoolean=oI();z.isBroadcastCompatible=lI();z.isBroadcastCompatibleWith=qI();z.isDefined=fv();z.isGreaterThan=dI();z.isGreaterThanEqual=bI();z.isInteger=NI();z.isLessThan=OI();z.isLessThanEqual=TI();z.isNonNegativeInteger=LI();z.isNonNegativeNumber=PI();z.isNumber=FI();z.isOneOf=BI();z.isPositiveInteger=cv();z.isPositiveNumber=GI();z.isProbability=JI();z.isRange=YI();z.isRange1d=rL();z.isSameShape=nL();z.isString=uL();z.unrecognizedOptionName=oL();z.verifyCommonPRNGArgs=cL();z.verifyPRNGSeed=pL();gL.exports=z});var yL=u((GKr,qL)=>{"use strict";var mv=4;function $yr(r,e,t,i,n,a){var s,o,f,v;if(r<=0||e===0)return n;if(i===1&&a===1){if(f=r%mv,f>0)for(v=0;v<f;v++)n[v]+=e*t[v];if(r<mv)return n;for(v=f;v<r;v+=mv)n[v]+=e*t[v],n[v+1]+=e*t[v+1],n[v+2]+=e*t[v+2],n[v+3]+=e*t[v+3];return n}for(i<0?s=(1-r)*i:s=0,a<0?o=(1-r)*a:o=0,v=0;v<r;v++)n[o]+=e*t[s],s+=i,o+=a;return n}qL.exports=$yr});var dL=u((VKr,hL)=>{"use strict";var dn=4;function Qyr(r,e,t,i,n,a,s,o){var f,v,c,l;if(r<=0||e===0)return a;if(f=n,v=o,i===1&&s===1){if(c=r%dn,c>0)for(l=0;l<c;l++)a[v]+=e*t[f],f+=i,v+=s;if(r<dn)return a;for(l=c;l<r;l+=dn)a[v]+=e*t[f],a[v+1]+=e*t[f+1],a[v+2]+=e*t[f+2],a[v+3]+=e*t[f+3],f+=dn,v+=dn;return a}for(l=0;l<r;l++)a[v]+=e*t[f],f+=i,v+=s;return a}hL.exports=Qyr});var qv=u((UKr,bL)=>{"use strict";var Zyr=b(),wL=yL(),Kyr=dL();Zyr(wL,"ndarray",Kyr);bL.exports=wL});var NL=u((HKr,EL)=>{"use strict";var yv={};yv.daxpy=qv().ndarray;yv.saxpy=qv().ndarray;EL.exports=yv});var OL=u((WKr,AL)=>{"use strict";function xyr(r){return r*r}AL.exports=xyr});var TL=u((kKr,SL)=>{"use strict";var rhr=OL();SL.exports=rhr});var LL=u((DKr,IL)=>{"use strict";function ehr(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}IL.exports=ehr});var PL=u((XKr,_L)=>{"use strict";function thr(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}_L.exports=thr});var ML=u((JKr,FL)=>{"use strict";var ihr=E(),nhr=V(),RL=Ja(),ahr=LL(),uhr=PL(),shr=6123233995736766e-32;function ohr(r){var e,t,i,n,a;if(ihr(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*uhr(t),t=nhr(t+t),a=RL-t,t=t*n-shr,a-=t,a+=RL;else{if(i<1e-8)return r;t=i*i,a=t*ahr(t),a=i*a+i}return e?-a:a}FL.exports=ohr});var Ct=u((zKr,BL)=>{"use strict";var vhr=ML();BL.exports=vhr});var VL=u((YKr,GL)=>{"use strict";var fhr=E(),CL=Ct(),chr=V(),jL=Ja(),lhr=6123233995736766e-32;function phr(r){var e;return fhr(r)?NaN:r<-1||r>1?NaN:r>.5?2*CL(chr(.5-.5*r)):(e=jL-CL(r),e+=lhr,e+=jL,e)}GL.exports=phr});var wn=u(($Kr,UL)=>{"use strict";var ghr=VL();UL.exports=ghr});var DL=u((QKr,kL)=>{"use strict";var mhr=E(),qhr=ni(),HL=V(),yhr=wa(),WL=C(),hhr=1<<28;function dhr(r){var e;return mhr(r)||r<1?NaN:r===1?0:r>=hhr?WL(r)+yhr:r>2?WL(2*r-1/(r+HL(r*r-1))):(e=r-1,qhr(e+HL(2*e+e*e)))}kL.exports=dhr});var JL=u((ZKr,XL)=>{"use strict";var whr=DL();XL.exports=whr});var YL=u((KKr,zL)=>{"use strict";var bhr=za();function Ehr(r){return bhr(1/r)}zL.exports=Ehr});var QL=u((xKr,$L)=>{"use strict";var Nhr=YL();$L.exports=Nhr});var KL=u((rxr,ZL)=>{"use strict";var Ahr=Ct();function Ohr(r){return Ahr(1+r)}ZL.exports=Ohr});var r_=u((exr,xL)=>{"use strict";var Shr=KL();xL.exports=Shr});var t_=u((txr,e_)=>{"use strict";var Thr=Ct();function Ihr(r){return Thr(1-r)}e_.exports=Ihr});var n_=u((ixr,i_)=>{"use strict";var Lhr=t_();i_.exports=Lhr});var u_=u((nxr,a_)=>{"use strict";var _hr=Ct();function Phr(r){return _hr(1/r)}a_.exports=Phr});var o_=u((axr,s_)=>{"use strict";var Rhr=u_();s_.exports=Rhr});var l_=u((uxr,c_)=>{"use strict";var Fhr=Rr(),Mhr=E(),Bhr=ni(),v_=V(),Chr=wa(),f_=C(),jhr=1/(1<<28),Ghr=1<<28;function Vhr(r){var e,t,i;return Mhr(r)||Fhr(r)?r:(r<0&&(r=-r,e=!0),r<jhr?i=r:r>Ghr?i=f_(r)+Chr:r>2?i=f_(2*r+1/(v_(r*r+1)+r)):(t=r*r,i=Bhr(r+t/(1+v_(1+t)))),e?-i:i)}c_.exports=Vhr});var hv=u((sxr,p_)=>{"use strict";var Uhr=l_();p_.exports=Uhr});var m_=u((oxr,g_)=>{"use strict";var Hhr=hv();function Whr(r){return Hhr(1/r)}g_.exports=Whr});var y_=u((vxr,q_)=>{"use strict";var khr=m_();q_.exports=khr});var d_=u((fxr,h_)=>{"use strict";var Dhr=wn(),Xhr=V();function Jhr(r){return 2*Dhr(Xhr(r))}h_.exports=Jhr});var b_=u((cxr,w_)=>{"use strict";var zhr=d_();w_.exports=zhr});var N_=u((lxr,E_)=>{"use strict";var Yhr=Ct(),$hr=V();function Qhr(r){return 2*Yhr($hr(r))}E_.exports=Qhr});var O_=u((pxr,A_)=>{"use strict";var Zhr=N_();A_.exports=Zhr});var I_=u((gxr,T_)=>{"use strict";var Khr=E(),S_=ni(),xhr=P(),rdr=X(),edr=1/(1<<28);function tdr(r){var e,t;return Khr(r)||r<-1||r>1?NaN:r===1?xhr:r===-1?rdr:(r<0&&(e=!0,r=-r),r<edr?e?-r:r:(r<.5?(t=r+r,t=.5*S_(t+t*r/(1-r))):t=.5*S_((r+r)/(1-r)),e?-t:t))}T_.exports=tdr});var __=u((mxr,L_)=>{"use strict";var idr=I_();L_.exports=idr});var R_=u((qxr,P_)=>{"use strict";var ndr=wn();function adr(r){return ndr(1+r)}P_.exports=adr});var M_=u((yxr,F_)=>{"use strict";var udr=R_();F_.exports=udr});var C_=u((hxr,B_)=>{"use strict";var sdr=wn();function odr(r){return sdr(1-r)}B_.exports=odr});var G_=u((dxr,j_)=>{"use strict";var vdr=C_();j_.exports=vdr});var H_=u((wxr,U_)=>{"use strict";var V_=-.16666666666666632,fdr=.00833333333332249,cdr=-.0001984126982985795,ldr=27557313707070068e-22,pdr=-25050760253406863e-24,gdr=158969099521155e-24,mdr=.0416666666666666,qdr=-.001388888888887411,ydr=2480158728947673e-20,hdr=-27557314351390663e-23,ddr=2087572321298175e-24,wdr=-11359647557788195e-27;function bdr(r,e,t,i,n){var a,s,o,f,v;return v=r*r,f=v*v,s=fdr+v*(cdr+v*ldr)+v*f*(pdr+v*gdr),o=v*r,e===0?t[n]=r+o*(V_+v*s):t[n]=r-(v*(.5*e-o*s)-e-o*V_),s=v*(mdr+v*(qdr+v*ydr)),s+=f*f*(hdr+v*(ddr+v*wdr)),a=.5*v,f=1-a,t[n+i]=f+(1-f-a+(v*s-r*e)),t}U_.exports=bdr});var wv=u((bxr,k_)=>{"use strict";var Edr=Yr(),Ndr=Qi(),Adr=tr(),Odr=xi(),W_=H_(),Sdr=1072243195,Tdr=1044381696,dv=[0,0];function Idr(r,e,t,i){var n,a;if(n=Adr(r),n&=Edr,n<=Sdr)return n<Tdr&&(r|0)===0&&(e[i]=r,e[i+t]=0),W_(r,0,e,t,i);if(n>=Ndr)return e[i]=NaN,e[i+t]=NaN,e;switch(a=Odr(r,dv),W_(dv[0],dv[1],e,t,i),a&3){case 1:return n=e[i+t],e[i+t]=-e[i],e[i]=n,e;case 2:return e[i]*=-1,e[i+t]*=-1,e;case 3:return n=-e[i+t],e[i+t]=e[i],e[i]=n,e;default:return e}}k_.exports=Idr});var X_=u((Exr,D_)=>{"use strict";var Ldr=wv();function _dr(r){return Ldr(r,[0,0],1,0)}D_.exports=_dr});var bn=u((Nxr,z_)=>{"use strict";var Pdr=b(),J_=X_(),Rdr=wv();Pdr(J_,"assign",Rdr);z_.exports=J_});var $_=u((Axr,Y_)=>{"use strict";function Fdr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}Y_.exports=Fdr});var Z_=u((Oxr,Q_)=>{"use strict";function Mdr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}Q_.exports=Mdr});var x_=u((Sxr,K_)=>{"use strict";function Bdr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}K_.exports=Bdr});var eP=u((Txr,rP)=>{"use strict";function Cdr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}rP.exports=Cdr});var iP=u((Ixr,tP)=>{"use strict";var jdr=V(),Gdr=bn().assign,Vdr=P(),Udr=$_(),Hdr=Z_(),Wdr=x_(),kdr=eP(),Ddr=.5641895835477563,Xdr=2.404825557695773,Jdr=5.520078110286311,zdr=616,Ydr=-.0014244423042272315,$dr=1413,Qdr=.0005468602863106496,En=[0,0];function Zdr(r){var e,t,i,n,a,s;return r<0&&(r=-r),r===Vdr?0:r===0?1:r<=4?(a=r*r,n=Udr(a),s=(r+Xdr)*(r-zdr/256-Ydr),s*n):r<=8?(a=1-r*r/64,n=Hdr(a),s=(r+Jdr)*(r-$dr/256-Qdr),s*n):(a=8/r,i=a*a,e=Wdr(i),t=kdr(i),s=Ddr/jdr(r),Gdr(r,En,1,0),s*(e*(En[1]+En[0])-a*t*(En[0]-En[1])))}tP.exports=Zdr});var bv=u((Lxr,nP)=>{"use strict";var Kdr=iP();nP.exports=Kdr});var Qa=u((_xr,aP)=>{"use strict";var xdr=1.772453850905516;aP.exports=xdr});var sP=u((Pxr,uP)=>{"use strict";function rwr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}uP.exports=rwr});var vP=u((Rxr,oP)=>{"use strict";function ewr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}oP.exports=ewr});var cP=u((Fxr,fP)=>{"use strict";function twr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}fP.exports=twr});var pP=u((Mxr,lP)=>{"use strict";function iwr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}lP.exports=iwr});var mP=u((Bxr,gP)=>{"use strict";var nwr=V(),awr=Y(),uwr=bn().assign,swr=P(),owr=Qa(),vwr=sP(),fwr=vP(),cwr=cP(),lwr=pP(),pwr=3.8317059702075125,gwr=7.015586669815619,mwr=981,qwr=-.0003252797924876844,ywr=1796,hwr=-38330184381246464e-21,Nn=[0,0];function dwr(r){var e,t,i,n,a,s,o,f;return f=awr(r),r===0||f===swr?0:(f<=4?(s=r*r,a=vwr(s),o=f*(f+pwr)*(f-mwr/256-qwr),e=o*a):f<=8?(s=r*r,a=fwr(s),o=f*(f+gwr)*(f-ywr/256-hwr),e=o*a):(s=8/f,n=s*s,t=cwr(n),i=lwr(n),o=1/(nwr(f)*owr),uwr(f,Nn,1,0),e=o*(t*(Nn[0]-Nn[1])+s*i*(Nn[0]+Nn[1]))),r<0&&(e*=-1),e)}gP.exports=dwr});var Ev=u((Cxr,qP)=>{"use strict";var wwr=mP();qP.exports=wwr});var hP=u((jxr,yP)=>{"use strict";function bwr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}yP.exports=bwr});var wP=u((Gxr,dP)=>{"use strict";function Ewr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}dP.exports=Ewr});var EP=u((Vxr,bP)=>{"use strict";function Nwr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}bP.exports=Nwr});var AP=u((Uxr,NP)=>{"use strict";function Awr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}NP.exports=Awr});var SP=u((Hxr,OP)=>{"use strict";function Owr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}OP.exports=Owr});var PP=u((Wxr,_P)=>{"use strict";var Nv=C(),Swr=V(),Twr=Ir(),Iwr=Qa(),Lwr=X(),_wr=P(),Pwr=bn().assign,Av=bv(),Rwr=hP(),Fwr=wP(),Mwr=EP(),Bwr=AP(),Cwr=SP(),jwr=1/Iwr,Ov=2/Twr,TP=.8935769662791675,IP=3.957678419314858,LP=7.086051060301773,Gwr=228,Vwr=.0029519662791675214,Uwr=1013,Hwr=.0006471693148578684,Wwr=1814,kwr=.00011356030177269763,An=[0,0];function Dwr(r){var e,t,i,n,a,s,o;return r<0?NaN:r===0?Lwr:r===_wr?0:r<=3?(a=r*r,s=Nv(r/TP)*Av(r)*Ov,n=Rwr(a),o=(r+TP)*(r-Gwr/256-Vwr),s+o*n):r<=5.5?(a=r*r,s=Nv(r/IP)*Av(r)*Ov,n=Fwr(a),o=(r+IP)*(r-Uwr/256-Hwr),s+o*n):r<=8?(a=r*r,s=Nv(r/LP)*Av(r)*Ov,n=Mwr(a),o=(r+LP)*(r-Wwr/256-kwr),s+o*n):(a=8/r,i=a*a,e=Bwr(i),t=Cwr(i),o=jwr/Swr(r),Pwr(r,An,1,0),o*(e*(An[0]-An[1])+a*t*(An[1]+An[0])))}_P.exports=Dwr});var FP=u((kxr,RP)=>{"use strict";var Xwr=PP();RP.exports=Xwr});var BP=u((Dxr,MP)=>{"use strict";function Jwr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}MP.exports=Jwr});var jP=u((Xxr,CP)=>{"use strict";function zwr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}CP.exports=zwr});var VP=u((Jxr,GP)=>{"use strict";function Ywr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}GP.exports=Ywr});var HP=u((zxr,UP)=>{"use strict";function $wr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}UP.exports=$wr});var YP=u((Yxr,zP)=>{"use strict";var WP=C(),Qwr=V(),Zwr=Ir(),Kwr=Qa(),xwr=X(),rbr=P(),ebr=bn().assign,kP=Ev(),tbr=BP(),ibr=jP(),nbr=VP(),abr=HP(),ubr=1/Kwr,DP=2/Zwr,XP=2.197141326031017,JP=5.429681040794135,sbr=562,obr=.001828826031017035,vbr=1390,fbr=-6459205864867228e-21,On=[0,0];function cbr(r){var e,t,i,n,a,s,o;return r<0?NaN:r===0?xwr:r===rbr?0:r<=4?(a=r*r,s=WP(r/XP)*kP(r)*DP,n=tbr(a),o=(r+XP)*(r-sbr/256-obr)/r,s+o*n):r<=8?(a=r*r,s=WP(r/JP)*kP(r)*DP,n=ibr(a),o=(r+JP)*(r-vbr/256-fbr)/r,s+o*n):(a=8/r,i=a*a,e=nbr(i),t=abr(i),o=ubr/Qwr(r),ebr(r,On,1,0),o*(a*t*(On[0]-On[1])-e*(On[0]+On[1])))}zP.exports=cbr});var QP=u(($xr,$P)=>{"use strict";var lbr=YP();$P.exports=lbr});var xP=u((Qxr,KP)=>{"use strict";var pbr=E(),gbr=Rr(),mbr=Y(),ZP=Tt(),qbr=It(),ybr=x(),Sv=Ir(),hbr=vn(),dbr=hbr+1;function wbr(r){var e,t,i,n;return pbr(r)?NaN:gbr(r)?NaN:(e=mbr(r),e>dbr?1:(t=ybr(e),i=e-t,i===.5?0:(i<.25?n=ZP(Sv*i):i<.75?(i=.5-i,n=qbr(Sv*i)):(i=1-i,n=-ZP(Sv*i)),t%2===1?-n:n)))}KP.exports=wbr});var eR=u((Zxr,rR)=>{"use strict";var bbr=xP();rR.exports=bbr});var iR=u((Kxr,tR)=>{"use strict";var Ebr=1.618033988749895;tR.exports=Ebr});var aR=u((xxr,nR)=>{"use strict";var Nbr=E(),Abr=eR(),Obr=$(),Sbr=iR(),Tbr=P(),Ibr=X(),Lbr=2.23606797749979;function _br(r){var e,t;return Nbr(r)||r===Tbr||r===Ibr?NaN:(e=Obr(Sbr,r),t=Abr(r)/e,(e-t)/Lbr)}nR.exports=_br});var sR=u((rre,uR)=>{"use strict";var Pbr=aR();uR.exports=Pbr});var vR=u((ere,oR)=>{"use strict";function Rbr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}oR.exports=Rbr});var pR=u((tre,lR)=>{"use strict";var Fbr=Fo(),Mbr=Io(),fR=Yr(),Iv=tr(),Bbr=ee(),Cbr=Rr(),cR=xt(),jbr=ri(),Gbr=E(),Vbr=vR(),Ubr=4294967295>>>0,Hbr=3221225472>>>0,Wbr=0x40000000000000,Tv=2147483648>>>0,kbr=1>>>0,Dbr=715094163>>>0,Xbr=696219795>>>0,Jbr=Iv(Fbr),jt=[0>>>0,0>>>0];function zbr(r){var e,t,i,n,a,s,o;return r===0||Gbr(r)||Cbr(r)?r:(t=Iv(r)>>>0,e=(t&Mbr)>>>0,t&=fR,t<Jbr?(s=Wbr*r,i=(Iv(s)&fR)>>>0,i=(i/3>>>0)+Xbr>>>0,s=cR(e|i,0)):(s=0,i=(t/3>>>0)+Dbr>>>0,s=Bbr(s,e|i)),n=s*s*(s/r),s*=Vbr(n),jbr.assign(s,jt,1,0),jt[1]&Tv?(jt[0]+=kbr,jt[1]&=~Tv):jt[1]|=Tv,s=cR(jt[0]&Ubr,jt[1]&Hbr),a=s*s,n=r/a,o=s+s,n=(n-s)/(o+n),s+=s*n,s)}lR.exports=zbr});var mR=u((ire,gR)=>{"use strict";var Ybr=pR();gR.exports=Ybr});var yR=u((nre,qR)=>{"use strict";function $br(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}qR.exports=$br});var dR=u((are,hR)=>{"use strict";function Qbr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}hR.exports=Qbr});var ER=u((ure,bR)=>{"use strict";var Zbr=tr(),Kbr=yR(),xbr=dR(),wR=1048575,rEr=.3333333333333333;function eEr(r){var e,t,i,n,a,s,o,f,v,c,l;return n=Zbr(r),a=r-1,(wR&2+n)<3?a===0?0:a*a*(rEr*a-.5):(s=a/(2+a),o=s*s,n&=wR,c=n-398458|0,v=o*o,l=440401-n|0,t=v*Kbr(v),i=o*xbr(v),c|=l,f=i+t,c>0?(e=.5*a*a,s*(e+f)-e):s*(f-a))}bR.exports=eEr});var SR=u((sre,OR)=>{"use strict";var NR=tr(),tEr=ee(),iEr=ne(),nEr=E(),aEr=zr(),uEr=X(),sEr=ER(),oEr=0x40000000000000,AR=.4342944818781689,vEr=25082946711645275e-27,fEr=.30102999566361177,cEr=3694239077158931e-28,lEr=1048575,pEr=2146435072,gEr=1048576,mEr=1072693248;function qEr(r){var e,t,i,n,a,s,o,f;return nEr(r)||r<0?NaN:r===0?uEr:(t=NR(r),s=0,t<gEr&&(s-=54,r*=oEr,t=NR(r)),t>=pEr?r+r:(s+=(t>>20)-aEr|0,t&=lEr,a=t+614244&1048576|0,r=tEr(r,t|a^mEr),s+=a>>20|0,o=s,n=sEr(r),r-=1,e=iEr(r,0),i=r-e,f=o*cEr+(r+n)*vEr,f+=(i+n)*AR+e*AR,f+o*fEr))}OR.exports=qEr});var IR=u((ore,TR)=>{"use strict";var yEr=SR();TR.exports=yEr});var _R=u((vre,LR)=>{"use strict";var hEr=E(),dEr=Rr(),wEr=$(),bEr=x(),EEr=$i(),NEr=IR(),AEr=P1(),OEr=R1(),SEr=P();function TEr(r){var e,t;return hEr(r)||dEr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=NEr(r),e===-1?t=bEr(t):t=EEr(t),t<=OEr?e*0:t>AEr?SEr:e*wEr(10,t))}LR.exports=TEr});var RR=u((fre,PR)=>{"use strict";var IEr=_R();PR.exports=IEr});var MR=u((cre,FR)=>{"use strict";function LEr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}FR.exports=LEr});var CR=u((lre,BR)=>{"use strict";function _Er(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}BR.exports=_Er});var VR=u((pre,GR)=>{"use strict";var PEr=tr(),REr=MR(),FEr=CR(),jR=1048575,MEr=.3333333333333333;function BEr(r){var e,t,i,n,a,s,o,f,v,c,l;return n=PEr(r),a=r-1,(jR&2+n)<3?a===0?0:a*a*(MEr*a-.5):(s=a/(2+a),o=s*s,n&=jR,c=n-398458|0,v=o*o,l=440401-n|0,t=v*REr(v),i=o*FEr(v),c|=l,f=i+t,c>0?(e=.5*a*a,s*(e+f)-e):s*(f-a))}GR.exports=BEr});var WR=u((gre,HR)=>{"use strict";var CEr=tr(),jEr=ee(),GEr=ne(),VEr=ri(),UEr=E(),HEr=Yr(),WEr=ia(),kEr=zr(),DEr=X(),XEr=VR(),JEr=0x40000000000000,UR=1.4426950407214463,zEr=16751713164886512e-26,YEr=2146435072,$Er=1048576,QEr=1072693248,Lv=[0,0];function ZEr(r){var e,t,i,n,a,s,o;if(UEr(r)||r<0)return NaN;if(VEr.assign(r,Lv,1,0),i=Lv[0],n=Lv[1],o=0,i<$Er){if((i&HEr|n)===0)return DEr;o-=54,r*=JEr,i=CEr(r)}return i>=YEr?r+r:(o+=(i>>20)-kEr|0,i&=WEr,s=i+614244&1048576|0,r=jEr(r,i|s^QEr),o+=s>>20|0,a=XEr(r),r-=1,e=GEr(r,0),t=r-e,(r+a)*zEr+(t+a)*UR+e*UR+o)}HR.exports=ZEr});var DR=u((mre,kR)=>{"use strict";var KEr=WR();kR.exports=KEr});var JR=u((qre,XR)=>{"use strict";var xEr=E(),rNr=Rr(),eNr=$(),tNr=x(),iNr=$i(),nNr=DR(),aNr=So(),uNr=To(),sNr=P();function oNr(r){var e,t;return xEr(r)||rNr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=nNr(r),t===uNr)?r:(e===-1?t=tNr(t):t=iNr(t),t>aNr?sNr:e*eNr(2,t))}XR.exports=oNr});var YR=u((yre,zR)=>{"use strict";var vNr=JR();zR.exports=vNr});var _v=u((hre,$R)=>{"use strict";var fNr=.9189385332046728;$R.exports=fNr});var QR=u((dre,cNr)=>{cNr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var ZR=u((wre,lNr)=>{lNr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var KR=u((bre,pNr)=>{pNr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var rF=u((Ere,xR)=>{"use strict";function gNr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}xR.exports=gNr});var tF=u((Nre,eF)=>{"use strict";function mNr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}eF.exports=mNr});var nF=u((Are,iF)=>{"use strict";function qNr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}iF.exports=qNr});var uF=u((Ore,aF)=>{"use strict";function yNr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}aF.exports=yNr});var oF=u((Sre,sF)=>{"use strict";function hNr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}sF.exports=hNr});var fF=u((Tre,vF)=>{"use strict";function dNr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}vF.exports=dNr});var mF=u((Ire,gF)=>{"use strict";var wNr=E(),bNr=Tr(),ENr=Y(),Za=fr(),NNr=x(),ANr=ti(),ONr=nn(),cF=tn(),lF=$(),SNr=C(),TNr=P(),INr=X(),pF=ke(),LNr=xo(),_Nr=_v(),PNr=QR(),RNr=ZR(),FNr=KR(),MNr=rF(),BNr=tF(),CNr=nF(),jNr=uF(),GNr=oF(),VNr=fF(),UNr=129,HNr=170,WNr=709,kNr=1.2433929443359375,DNr=.6986598968505859;function Pv(r){var e,t,i,n,a,s;if(wNr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(bNr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(s=(i+1)/2|0,s<=UNr)return-FNr[s]/(i+1)}else return(n&1)===0?RNr[n/2]:PNr[(n-3)/2];return ENr(r)<LNr?-.5-_Nr*r:(t=1-r,r<0?NNr(r/2)===r/2?0:(e=r,r=t,t=e,r>HNr?(e=cF(.5*t)*2*Pv(r),a=ONr(r),a-=r*SNr(pF),a>WNr?e<0?INr:TNr:e*Za(a)):cF(.5*t)*2*lF(pF,-r)*ANr(r)*Pv(r)):r<1?(e=MNr(t),e-=kNr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+BNr(t)):r<=4?(e=DNr+1/-t,e+CNr(r-2)):r<=7?(e=jNr(r-4),1+Za(e)):r<15?(e=GNr(r-7),1+Za(e)):r<36?(e=VNr(r-15),1+Za(e)):1+lF(2,-r))}gF.exports=Pv});var yF=u((Lre,qF)=>{"use strict";var XNr=mF();qF.exports=XNr});var dF=u((_re,hF)=>{"use strict";var U={};U.abs=Y();U.abs2=TL();U.acos=wn();U.acosh=JL();U.acot=QL();U.acovercos=r_();U.acoversin=n_();U.acsc=o_();U.acsch=y_();U.ahavercos=b_();U.ahaversin=O_();U.asin=Ct();U.asinh=hv();U.atan=za();U.atanh=__();U.avercos=M_();U.aversin=G_();U.besselj0=bv();U.besselj1=Ev();U.bessely0=FP();U.bessely1=QP();U.binet=sR();U.cbrt=mR();U.ceil=$i();U.ceil10=RR();U.ceil2=YR();U.cos=Tt();U.sin=It();U.sqrt=V();U.zeta=yF();hF.exports=U});var EF=u((Pre,bF)=>{"use strict";var wF=E(),JNr=C(),zNr=ke(),YNr=c1();function $Nr(r,e){return wF(r)||wF(e)||e<=0?NaN:.5*JNr(zNr*YNr*e*e)}bF.exports=$Nr});var AF=u((Rre,NF)=>{"use strict";var QNr=EF();NF.exports=QNr});var TF=u((Fre,SF)=>{"use strict";var ZNr=fr(),OF=$(),KNr=V(),xNr=ke(),rAr=P(),Rv=E();function eAr(r,e,t){var i,n,a;return Rv(r)||Rv(e)||Rv(t)||t<0?NaN:t===0?r===e?rAr:0:(i=OF(t,2),n=1/KNr(i*xNr),a=-1/(2*i),n*ZNr(a*OF(r-e,2)))}SF.exports=eAr});var _F=u((Mre,LF)=>{"use strict";var tAr=P(),IF=E();function iAr(r,e){return IF(r)||IF(e)?NaN:r===e?tAr:0}LF.exports=iAr});var FF=u((Bre,RF)=>{"use strict";var nAr=L(),aAr=P(),PF=E();function uAr(r){if(PF(r))return nAr(NaN);return e;function e(t){return PF(t)?NaN:t===r?aAr:0}}RF.exports=uAr});var CF=u((Cre,BF)=>{"use strict";var sAr=b(),MF=_F(),oAr=FF();sAr(MF,"factory",oAr);BF.exports=MF});var VF=u((jre,GF)=>{"use strict";var vAr=L(),fAr=CF().factory,Fv=E(),cAr=V(),lAr=fr(),jF=$(),pAr=ke();function gAr(r,e){var t,i,n;if(Fv(r)||Fv(e)||e<0)return vAr(NaN);if(e===0)return fAr(r);return t=jF(e,2),i=1/cAr(t*pAr),n=-1/(2*t),a;function a(s){return Fv(s)?NaN:i*lAr(n*jF(s-r,2))}}GF.exports=gAr});var WF=u((Gre,HF)=>{"use strict";var mAr=b(),UF=TF(),qAr=VF();mAr(UF,"factory",qAr);HF.exports=UF});var DF=u((Vre,kF)=>{"use strict";var Ka={};Ka.normal={};Ka.normal.entropy=AF();Ka.normal.pdf=WF();kF.exports=Ka});var JF=u((Ure,XF)=>{"use strict";function yAr(r){return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}XF.exports=yAr});var xa=u((Hre,zF)=>{"use strict";var hAr=JF();zF.exports=hAr});var $F=u((Wre,YF)=>{"use strict";function dAr(r){return r.toLowerCase()}YF.exports=dAr});var yi=u((kre,QF)=>{"use strict";var wAr=$F();QF.exports=wAr});var KF=u((Dre,ZF)=>{"use strict";function bAr(r,e,t){return r.replace(e,t)}ZF.exports=bAr});var Gt=u((Xre,xF)=>{"use strict";var EAr=KF();xF.exports=EAr});var eM=u((Jre,rM)=>{"use strict";var NAr=typeof String.prototype.trim<"u";rM.exports=NAr});var Mv=u((zre,tM)=>{"use strict";var AAr=String.prototype.trim;tM.exports=AAr});var uM=u((Yre,aM)=>{"use strict";var iM=Mv(),OAr=` 
	\r
\f\v\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`,nM="\u180E";function SAr(){return iM.call(OAr)===""&&iM.call(nM)===nM}aM.exports=SAr});var oM=u(($re,sM)=>{"use strict";var TAr=Gt(),IAr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function LAr(r){return TAr(r,IAr,"$1")}sM.exports=LAr});var fM=u((Qre,vM)=>{"use strict";var _Ar=Mv();function PAr(r){return _Ar.call(r)}vM.exports=PAr});var hi=u((Zre,cM)=>{"use strict";var RAr=eM(),FAr=uM(),MAr=oM(),BAr=fM(),Bv;RAr&&FAr()?Bv=BAr:Bv=MAr;cM.exports=Bv});var pM=u((Kre,lM)=>{"use strict";var CAr=xa(),jAr=yi(),r0=Gt(),GAr=hi(),VAr=/\s+/g,UAr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,HAr=/(?:\s|^)([^\s]+)(?=\s|$)/g,WAr=/([a-z0-9])([A-Z])/g;function kAr(r,e,t){return e=jAr(e),t===0?e:CAr(e)}function DAr(r){return r=r0(r,UAr," "),r=r0(r,VAr," "),r=r0(r,WAr,"$1 $2"),r=GAr(r),r0(r,HAr,kAr)}lM.exports=DAr});var mM=u((xre,gM)=>{"use strict";var XAr=pM();gM.exports=XAr});var yM=u((ree,qM)=>{"use strict";var JAr=K().isPrimitive,zAr=d(),YAr=mM();function $Ar(r){if(!JAr(r))throw new TypeError(zAr("invalid argument. First argument must be a string. Value: `%s`.",r));return YAr(r)}qM.exports=$Ar});var dM=u((eee,hM)=>{"use strict";var QAr=yM();hM.exports=QAr});var bM=u((tee,wM)=>{"use strict";var ZAr=K().isPrimitive,KAr=d(),xAr=xa();function rOr(r){if(!ZAr(r))throw new TypeError(KAr("invalid argument. First argument must be a string. Value: `%s`.",r));return xAr(r)}wM.exports=rOr});var NM=u((iee,EM)=>{"use strict";var eOr=bM();EM.exports=eOr});var OM=u((nee,AM)=>{"use strict";function tOr(r){return r.toUpperCase()}AM.exports=tOr});var TM=u((aee,SM)=>{"use strict";var iOr=OM();SM.exports=iOr});var LM=u((uee,IM)=>{"use strict";var nOr=TM(),Cv=Gt(),aOr=hi(),uOr=/\s+/g,sOr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,oOr=/([a-z0-9])([A-Z])/g;function vOr(r){return r=Cv(r,sOr," "),r=Cv(r,oOr,"$1 $2"),r=aOr(r),r=Cv(r,uOr,"_"),nOr(r)}IM.exports=vOr});var PM=u((see,_M)=>{"use strict";var fOr=LM();_M.exports=fOr});var FM=u((oee,RM)=>{"use strict";var cOr=K().isPrimitive,lOr=d(),pOr=PM();function gOr(r){if(!cOr(r))throw new TypeError(lOr("invalid argument. Must provide a string. Value: `%s`.",r));return pOr(r)}RM.exports=gOr});var BM=u((vee,MM)=>{"use strict";var mOr=FM();MM.exports=mOr});var jM=u((fee,CM)=>{"use strict";var qOr=yi(),jv=Gt(),yOr=hi(),hOr=/\s+/g,dOr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,wOr=/([a-z0-9])([A-Z])/g;function bOr(r){return r=jv(r,dOr," "),r=jv(r,wOr,"$1 $2"),r=yOr(r),r=jv(r,hOr,"-"),qOr(r)}CM.exports=bOr});var VM=u((cee,GM)=>{"use strict";var EOr=jM();GM.exports=EOr});var HM=u((lee,UM)=>{"use strict";var NOr=K().isPrimitive,AOr=d(),OOr=VM();function SOr(r){if(!NOr(r))throw new TypeError(AOr("invalid argument. Must provide a string. Value: `%s`.",r));return OOr(r)}UM.exports=SOr});var kM=u((pee,WM)=>{"use strict";var TOr=HM();WM.exports=TOr});var XM=u((gee,DM)=>{"use strict";var IOr=K().isPrimitive,LOr=d(),_Or=yi();function POr(r){if(!IOr(r))throw new TypeError(LOr("invalid argument. Must provide a string. Value: `%s`.",r));return _Or(r)}DM.exports=POr});var zM=u((mee,JM)=>{"use strict";var ROr=XM();JM.exports=ROr});var $M=u((qee,YM)=>{"use strict";var FOr=xa(),MOr=yi(),e0=Gt(),BOr=hi(),COr=/\s+/g,jOr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,GOr=/(?:\s|^)([^\s]+)(?=\s|$)/g,VOr=/([a-z0-9])([A-Z])/g;function UOr(r,e){return FOr(MOr(e))}function HOr(r){return r=e0(r,jOr," "),r=e0(r,COr," "),r=e0(r,VOr,"$1 $2"),r=BOr(r),e0(r,GOr,UOr)}YM.exports=HOr});var ZM=u((yee,QM)=>{"use strict";var WOr=$M();QM.exports=WOr});var xM=u((hee,KM)=>{"use strict";var kOr=K().isPrimitive,DOr=d(),XOr=ZM();function JOr(r){if(!kOr(r))throw new TypeError(DOr("invalid argument. First argument must be a string. Value: `%s`.",r));return XOr(r)}KM.exports=JOr});var eB=u((dee,rB)=>{"use strict";var zOr=xM();rB.exports=zOr});var iB=u((wee,tB)=>{"use strict";var YOr=yi(),Gv=Gt(),$Or=hi(),QOr=/\s+/g,ZOr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,KOr=/([a-z0-9])([A-Z])/g;function xOr(r){return r=Gv(r,ZOr," "),r=Gv(r,KOr,"$1 $2"),r=$Or(r),r=Gv(r,QOr,"_"),YOr(r)}tB.exports=xOr});var aB=u((bee,nB)=>{"use strict";var rSr=iB();nB.exports=rSr});var sB=u((Eee,uB)=>{"use strict";var eSr=K().isPrimitive,tSr=d(),iSr=aB();function nSr(r){if(!eSr(r))throw new TypeError(tSr("invalid argument. Must provide a string. Value: `%s`.",r));return iSr(r)}uB.exports=nSr});var vB=u((Nee,oB)=>{"use strict";var aSr=sB();oB.exports=aSr});var lB=u((Aee,cB)=>{"use strict";var uSr=T(),fB=O(),sSr=or().isPrimitive,oSr=K().isPrimitive,Vv=d();function vSr(r,e){return uSr(e)?fB(e,"flags")&&(r.flags=e.flags,!oSr(r.flags))?new TypeError(Vv("invalid option. `%s` option must be a string. Option: `%s`.","flags",r.flags)):fB(e,"capture")&&(r.capture=e.capture,!sSr(r.capture))?new TypeError(Vv("invalid option. `%s` option must be a boolean. Option: `%s`.","capture",r.capture)):null:new TypeError(Vv("invalid argument. Options argument must be an object. Value: `%s`.",e))}cB.exports=vSr});var t0=u((Oee,gB)=>{"use strict";var fSr=lB(),pB=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function cSr(r){var e,t;if(arguments.length>0){if(e={},t=fSr(e,r),t)throw t;return e.capture?new RegExp("("+pB+")",e.flags):new RegExp(pB,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}gB.exports=cSr});var qB=u((See,mB)=>{"use strict";var lSr=t0(),pSr=lSr({capture:!0});mB.exports=pSr});var hB=u((Tee,yB)=>{"use strict";var gSr=t0(),mSr=gSr();yB.exports=mSr});var bB=u((Iee,wB)=>{"use strict";var dB=b(),Uv=t0(),qSr=qB(),ySr=hB();dB(Uv,"REGEXP",ySr);dB(Uv,"REGEXP_CAPTURE",qSr);wB.exports=Uv});var NB=u((Lee,EB)=>{"use strict";var hSr=bB().REGEXP;function dSr(r){var e,t,i,n;for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),hSr.test(i)?e=!0:e&&(i=i.toUpperCase(),e=!1),t+=i;return t}EB.exports=dSr});var OB=u((_ee,AB)=>{"use strict";var wSr=NB();AB.exports=wSr});var TB=u((Pee,SB)=>{"use strict";var bSr=K().isPrimitive,ESr=d(),NSr=OB();function ASr(r){if(!bSr(r))throw new TypeError(ESr("invalid argument. Must provide a string. Value: `%s`.",r));return NSr(r)}SB.exports=ASr});var LB=u((Ree,IB)=>{"use strict";var OSr=TB();IB.exports=OSr});var PB=u((Fee,_B)=>{"use strict";function SSr(r){return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}_B.exports=SSr});var FB=u((Mee,RB)=>{"use strict";var TSr=PB();RB.exports=TSr});var BB=u((Bee,MB)=>{"use strict";var ISr=K().isPrimitive,LSr=d(),_Sr=FB();function PSr(r){if(!ISr(r))throw new TypeError(LSr("invalid argument. First argument must be a string. Value: `%s`.",r));return _Sr(r)}MB.exports=PSr});var jB=u((Cee,CB)=>{"use strict";var RSr=BB();CB.exports=RSr});var VB=u((jee,GB)=>{"use strict";var FSr=K().isPrimitive,MSr=d();function BSr(r){if(!FSr(r))throw new TypeError(MSr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}GB.exports=BSr});var HB=u((Gee,UB)=>{"use strict";var CSr=VB();UB.exports=CSr});var kB=u((Vee,WB)=>{"use strict";var Wr={};Wr.camelcase=dM();Wr.capitalize=NM();Wr.constantcase=BM();Wr.kebabcase=kM();Wr.lowercase=zM();Wr.pascalcase=eB();Wr.snakecase=vB();Wr.startcase=LB();Wr.uncapitalize=jB();Wr.uppercase=HB();WB.exports=Wr});var XB=u((Uee,DB)=>{"use strict";var jSr=Ce();function GSr(r,e,t,i){jSr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}DB.exports=GSr});var R=u((Hee,JB)=>{"use strict";var VSr=XB();JB.exports=VSr});var $B=u((Wee,YB)=>{"use strict";var zB=65535;function USr(r,e){var t,i,n,a,s,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,s=(r&zB)>>>0,o=(e&zB)>>>0,t=s*o>>>0,i=n*o+s*a<<16>>>0,t+i>>>0}YB.exports=USr});var ZB=u((kee,QB)=>{"use strict";var HSr=$B();QB.exports=HSr});var Hv=u((Dee,KB)=>{"use strict";function WSr(r,e,t,i,n,a,s){var o,f,v,c,l,p,m;for(o=e.data,f=n.data,c=e.accessors[0],v=n.accessors[1],l=i,p=s,m=0;m<r;m++)v(f,p,c(o,l)),l+=t,p+=a;return e}KB.exports=WSr});var eC=u((Xee,rC)=>{"use strict";var xB=$a(),kSr=Hv(),Wv=8;function DSr(r,e,t,i,n){var a,s,o,f,v,c;if(r<=0)return i;if(o=xB(e),f=xB(i),o.accessorProtocol||f.accessorProtocol)return t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,kSr(r,o,t,a,f,n,s),f.data;if(t===1&&n===1){if(v=r%Wv,v>0)for(c=0;c<v;c++)i[c]=e[c];if(r<Wv)return i;for(c=v;c<r;c+=Wv)i[c]=e[c],i[c+1]=e[c+1],i[c+2]=e[c+2],i[c+3]=e[c+3],i[c+4]=e[c+4],i[c+5]=e[c+5],i[c+6]=e[c+6],i[c+7]=e[c+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,c=0;c<r;c++)i[s]=e[a],a+=t,s+=n;return i}rC.exports=DSr});var nC=u((Jee,iC)=>{"use strict";var tC=$a(),XSr=Hv(),Sn=8;function JSr(r,e,t,i,n,a,s){var o,f,v,c,l,p;if(r<=0)return n;if(v=tC(e),c=tC(n),v.accessorProtocol||c.accessorProtocol)return XSr(r,v,t,i,c,a,s),c.data;if(o=i,f=s,t===1&&a===1){if(l=r%Sn,l>0)for(p=0;p<l;p++)n[f]=e[o],o+=t,f+=a;if(r<Sn)return n;for(p=l;p<r;p+=Sn)n[f]=e[o],n[f+1]=e[o+1],n[f+2]=e[o+2],n[f+3]=e[o+3],n[f+4]=e[o+4],n[f+5]=e[o+5],n[f+6]=e[o+6],n[f+7]=e[o+7],o+=Sn,f+=Sn;return n}for(p=0;p<r;p++)n[f]=e[o],o+=t,f+=a;return n}iC.exports=JSr});var Qe=u((zee,uC)=>{"use strict";var zSr=b(),aC=eC(),YSr=nC();zSr(aC,"ndarray",YSr);uC.exports=aC});var oC=u((Yee,sC)=>{"use strict";function $Sr(){}sC.exports=$Sr});var fC=u(($ee,vC)=>{"use strict";var QSr=oC();function ZSr(){return QSr.name==="foo"}vC.exports=ZSr});var lC=u((Qee,cC)=>{"use strict";var KSr=fC();cC.exports=KSr});var gC=u((Zee,pC)=>{"use strict";var xSr=I(),rTr=lC(),eTr=d(),tTr=Bs().REGEXP,iTr=rTr();function nTr(r){if(xSr(r)===!1)throw new TypeError(eTr("invalid argument. Must provide a function. Value: `%s`.",r));return iTr?r.name:tTr.exec(r.toString())[1]}pC.exports=nTr});var qC=u((Kee,mC)=>{"use strict";var aTr=gC();mC.exports=aTr});var hC=u((xee,yC)=>{"use strict";var uTr=Di(),sTr=Qt(),oTr=Xi(),vTr=Ji(),fTr=Zt(),cTr=Nt(),lTr=cr(),pTr=re(),gTr=gr(),mTr=[gTr,pTr,cTr,lTr,vTr,fTr,uTr,sTr,oTr];yC.exports=mTr});var dC=u((rte,qTr)=>{qTr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var OC=u((ete,AC)=>{"use strict";var yTr=je(),hTr=qC(),EC=wt(),dTr=go(),wTr=gr(),wC=hC(),bC=dC(),i0=dTr()?EC(wTr):NC;i0=hTr(i0)==="TypedArray"?i0:NC;function NC(){}function bTr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof i0)return!0;for(t=0;t<wC.length;t++)if(r instanceof wC[t])return!0;for(;r;){for(e=yTr(r),t=0;t<bC.length;t++)if(bC[t]===e)return!0;r=EC(r)}return!1}AC.exports=bTr});var TC=u((tte,SC)=>{"use strict";var ETr=OC();SC.exports=ETr});var LC=u((ite,IC)=>{"use strict";var NTr=pn(),ATr=mn(),OTr=[ATr,NTr];IC.exports=OTr});var _C=u((nte,STr)=>{STr.exports=["Complex64Array","Complex128Array"]});var MC=u((ate,FC)=>{"use strict";var TTr=je(),ITr=wt(),PC=LC(),RC=_C();function LTr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<PC.length;t++)if(r instanceof PC[t])return!0;for(;r;){for(e=TTr(r),t=0;t<RC.length;t++)if(RC[t]===e)return!0;r=ITr(r)}return!1}FC.exports=LTr});var CC=u((ute,BC)=>{"use strict";var _Tr=MC();BC.exports=_Tr});var GC=u((ste,jC)=>{"use strict";var PTr=d();function RTr(r,e){if(typeof e!="function")throw new TypeError(PTr("invalid argument. Second argument must be callable. Value: `%s`.",e));return r instanceof e}jC.exports=RTr});var UC=u((ote,VC)=>{"use strict";var FTr=GC();VC.exports=FTr});var WC=u((vte,HC)=>{"use strict";var MTr=Di(),BTr=Qt(),CTr=Xi(),jTr=Ji(),GTr=Zt(),VTr=Nt(),UTr=cr(),HTr=re(),WTr=gr(),kTr=pn(),DTr=mn(),XTr=[[WTr,"Float64Array"],[HTr,"Float32Array"],[VTr,"Int32Array"],[UTr,"Uint32Array"],[jTr,"Int16Array"],[GTr,"Uint16Array"],[MTr,"Int8Array"],[BTr,"Uint8Array"],[CTr,"Uint8ClampedArray"],[kTr,"Complex64Array"],[DTr,"Complex128Array"]];HC.exports=XTr});var DC=u((fte,kC)=>{"use strict";var JTr=UC(),zTr=je(),YTr=wt(),di=WC();function $Tr(r){var e,t;for(t=0;t<di.length;t++)if(JTr(r,di[t][0]))return di[t][1];for(;r;){for(e=zTr(r),t=0;t<di.length;t++)if(e===di[t][1])return di[t][1];r=YTr(r)}}kC.exports=$Tr});var JC=u((cte,XC)=>{"use strict";var QTr=TC(),ZTr=CC(),KTr=oi(),xTr=vi(),rIr=d(),eIr=DC();function tIr(r){var e,t,i;if(QTr(r))e=r;else if(ZTr(r))r.BYTES_PER_ELEMENT===8?e=KTr(r,0):e=xTr(r,0);else throw new TypeError(rIr("invalid argument. Must provide a typed array. Value: `%s`.",r));for(t={type:eIr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}XC.exports=tIr});var F=u((lte,zC)=>{"use strict";var iIr=JC();zC.exports=iIr});var kv=u((pte,YC)=>{"use strict";var nIr=Wt(),aIr=x(),uIr=nIr-1;function sIr(){var r=aIr(1+uIr*Math.random());return r>>>0}YC.exports=sIr});var Zv=u((gte,aj)=>{"use strict";var se=b(),Ze=_(),$C=R(),Dv=O(),oIr=T(),vIr=Gr(),QC=xr(),fIr=or().isPrimitive,ZC=ue().isPrimitive,tj=vn(),ij=Wt(),hr=cr(),cIr=v1(),Qv=ZB(),wi=Qe(),lIr=F(),wr=d(),KC=kv(),nr=624,Xv=397,xC=ij>>>0,pIr=19650218>>>0,Jv=2147483648>>>0,zv=2147483647>>>0,gIr=1812433253>>>0,mIr=1664525>>>0,qIr=1566083941>>>0,yIr=2636928640>>>0,hIr=4022730752>>>0,dIr=2567483615>>>0,Yv=[0>>>0,dIr>>>0],nj=1/(tj+1),wIr=67108864>>>0,bIr=2147483648>>>0,$v=1>>>0,EIr=tj*nj,n0=1,a0=3,Ke=2,xe=nr+3,dr=nr+5,Tn=nr+6;function rj(r,e){var t;return e?t="option":t="argument",r.length<Tn+1?new RangeError(wr("invalid %s. `state` array has insufficient length.",t)):r[0]!==n0?new RangeError(wr("invalid %s. `state` array has an incompatible schema version. Expected: `%s`. Actual: `%s.`",t,n0,r[0])):r[1]!==a0?new RangeError(wr("invalid %s. `state` array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,a0,r[1])):r[Ke]!==nr?new RangeError(wr("invalid %s. `state` array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,nr,r[Ke])):r[xe]!==1?new RangeError(wr("invalid %s. `state` array has an incompatible section length. Expected: `%u`. Actual: `%u`.",t,1,r[xe])):r[dr]!==r.length-Tn?new RangeError(wr("invalid %s. `state` array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Tn,r[dr])):null}function ej(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=Qv(t,gIr)+i>>>0;return r}function NIr(r,e,t,i){var n,a,s,o;for(a=1,s=0,o=cIr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=Qv(n,mIr)>>>0,r[a]=(r[a]>>>0^n)+t[s]+s>>>0,a+=1,s+=1,a>=e&&(r[0]=r[e-1],a=1),s>=i&&(s=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=Qv(n,qIr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=bIr,r}function AIr(r){var e,t,i,n;for(n=nr-Xv,t=0;t<n;t++)e=r[t]&Jv|r[t+1]&zv,r[t]=r[t+Xv]^e>>>1^Yv[e&$v];for(i=nr-1;t<i;t++)e=r[t]&Jv|r[t+1]&zv,r[t]=r[t-n]^e>>>1^Yv[e&$v];return e=r[i]&Jv|r[0]&zv,r[i]=r[Xv-1]^e>>>1^Yv[e&$v],r}function OIr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!oIr(r))throw new TypeError(wr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Dv(r,"copy")&&(i.copy=r.copy,!fIr(r.copy)))throw new TypeError(wr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(Dv(r,"state")){if(t=r.state,i.state=!0,!QC(t))throw new TypeError(wr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",t));if(s=rj(t,!0),s)throw s;i.copy===!1?e=t:(e=new hr(t.length),wi(t.length,t,1,e,1)),t=new hr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,nr),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,t[dr])}if(n===void 0)if(Dv(r,"seed"))if(n=r.seed,i.seed=!0,ZC(n)){if(n>xC)throw new RangeError(wr("invalid option. `%s` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else{if(vIr(n)===!1||n.length<1)throw new TypeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n.length===1){if(n=n[0],!ZC(n))throw new TypeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",n));if(n>xC)throw new RangeError(wr("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%u`.","seed",n));n>>>=0}else a=n.length,e=new hr(Tn+a),e[0]=n0,e[1]=a0,e[Ke]=nr,e[xe]=1,e[xe+1]=nr,e[dr]=a,wi.ndarray(a,n,1,0,e,1,dr+1),t=new hr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,nr),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,a),t=ej(t,nr,pIr),t=NIr(t,nr,n,a)}else n=KC()>>>0}else n=KC()>>>0;return t===void 0&&(e=new hr(Tn+1),e[0]=n0,e[1]=a0,e[Ke]=nr,e[xe]=1,e[xe+1]=nr,e[dr]=1,e[dr+1]=n,t=new hr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,nr),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,1),t=ej(t,nr,n)),se(y,"NAME","mt19937"),Ze(y,"seed",o),Ze(y,"seedLength",f),$C(y,"state",l,p),Ze(y,"stateLength",v),Ze(y,"byteLength",c),se(y,"toJSON",m),se(y,"MIN",0),se(y,"MAX",ij),se(y,"normalized",q),se(q,"NAME",y.NAME),Ze(q,"seed",o),Ze(q,"seedLength",f),$C(q,"state",l,p),Ze(q,"stateLength",v),Ze(q,"byteLength",c),se(q,"toJSON",m),se(q,"MIN",0),se(q,"MAX",EIr),y;function o(){var g=e[dr];return wi(g,n,1,new hr(g),1)}function f(){return e[dr]}function v(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return wi(g,e,1,new hr(g),1)}function p(g){var h;if(!QC(g))throw new TypeError(wr("invalid argument. Must provide a Uint32Array. Value: `%s`.",g));if(h=rj(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?wi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new hr(g.length)),wi(g.length,g,1,e,1)),t=new hr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,nr),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,e[dr])}function m(){var g={};return g.type="PRNG",g.name=y.NAME,g.state=lIr(e),g.params=[],g}function y(){var g,h;return h=e[xe+1],h>=nr&&(t=AIr(t),h=0),g=t[h],e[xe+1]=h+1,g^=g>>>11,g^=g<<7&yIr,g^=g<<15&hIr,g^=g>>>18,g>>>0}function q(){var g=y()>>>5,h=y()>>>6;return(g*wIr+h)*nj}}aj.exports=OIr});var sj=u((mte,uj)=>{"use strict";var SIr=Zv(),TIr=kv(),IIr=SIr({seed:TIr()});uj.exports=IIr});var D=u((qte,vj)=>{"use strict";var LIr=b(),oj=sj(),_Ir=Zv();LIr(oj,"factory",_Ir);vj.exports=oj});var pj=u((yte,lj)=>{"use strict";var fj=j().isPrimitive,Kv=d(),cj=ar();function PIr(r,e){return!fj(r)||cj(r)?new TypeError(Kv("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!fj(e)||cj(e)?new TypeError(Kv("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(Kv("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}lj.exports=PIr});var mj=u((hte,gj)=>{"use strict";var RIr=$(),FIr=It(),MIr=Xa();function BIr(r,e,t){return e+RIr(FIr(MIr*r()),2)*(t-e)}gj.exports=BIr});var xv=u((dte,Nj)=>{"use strict";var oe=b(),u0=_(),qj=R(),yj=T(),hj=I(),dj=O(),wj=L(),CIr=B(),s0=D().factory,bj=E(),jIr=F(),o0=d(),GIr=pj(),Ej=mj();function VIr(){var r,e,t,i,n,a;if(arguments.length===0)e=s0();else if(arguments.length===1){if(r=arguments[0],!yj(r))throw new TypeError(o0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(dj(r,"prng")){if(!hj(r.prng))throw new TypeError(o0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=s0(r)}else{if(n=arguments[0],a=arguments[1],i=GIr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!yj(r))throw new TypeError(o0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(dj(r,"prng")){if(!hj(r.prng))throw new TypeError(o0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=s0(r)}else e=s0()}return n===void 0?t=y:t=m,oe(t,"NAME","arcsine"),r&&r.prng?(oe(t,"seed",null),oe(t,"seedLength",null),qj(t,"state",wj(null),CIr),oe(t,"stateLength",null),oe(t,"byteLength",null),oe(t,"toJSON",wj(null)),oe(t,"PRNG",e)):(u0(t,"seed",s),u0(t,"seedLength",o),qj(t,"state",c,l),u0(t,"stateLength",f),u0(t,"byteLength",v),oe(t,"toJSON",p),oe(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=jIr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return Ej(e,n,a)}function y(q,g){return bj(q)||bj(g)||q>=g?NaN:Ej(e,q,g)}}Nj.exports=VIr});var Oj=u((wte,Aj)=>{"use strict";var UIr=xv(),HIr=UIr();Aj.exports=HIr});var Ij=u((bte,Tj)=>{"use strict";var WIr=b(),Sj=Oj(),kIr=xv();WIr(Sj,"factory",kIr);Tj.exports=Sj});var r2=u((Ete,Mj)=>{"use strict";var ve=b(),v0=_(),Lj=R(),_j=T(),DIr=hn().isPrimitive,Pj=I(),Rj=O(),Fj=L(),XIr=B(),f0=D().factory,JIr=E(),zIr=F(),c0=d();function YIr(){var r,e,t,i;if(arguments.length===0)e=f0();else if(arguments.length===1&&_j(arguments[0]))if(r=arguments[0],Rj(r,"prng")){if(!Pj(r.prng))throw new TypeError(c0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=f0(r);else{if(i=arguments[0],!DIr(i))throw new TypeError(c0("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!_j(r))throw new TypeError(c0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(Rj(r,"prng")){if(!Pj(r.prng))throw new TypeError(c0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=f0(r)}else e=f0()}return i===void 0?t=p:t=l,ve(t,"NAME","bernoulli"),r&&r.prng?(ve(t,"seed",null),ve(t,"seedLength",null),Lj(t,"state",Fj(null),XIr),ve(t,"stateLength",null),ve(t,"byteLength",null),ve(t,"toJSON",Fj(null)),ve(t,"PRNG",e)):(v0(t,"seed",n),v0(t,"seedLength",a),Lj(t,"state",f,v),v0(t,"stateLength",s),v0(t,"byteLength",o),ve(t,"toJSON",c),ve(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=zIr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return e()<=i?1:0}function p(m){return JIr(m)||m<0||m>1?NaN:e()<=m?1:0}}Mj.exports=YIr});var Cj=u((Nte,Bj)=>{"use strict";var $Ir=r2(),QIr=$Ir();Bj.exports=QIr});var Vj=u((Ate,Gj)=>{"use strict";var ZIr=b(),jj=Cj(),KIr=r2();ZIr(jj,"factory",KIr);Gj.exports=jj});var kj=u((Ote,Wj)=>{"use strict";var xIr=V(),Uj=fr(),rLr=C(),Hj=.00991256303526217;function eLr(r,e){var t,i,n;for(i=Uj(-.5*e*e),t=[],t.push(Hj/i),t.push(e),n=2;n<r;n++)t[n]=xIr(-2*rLr(Hj/t[n-1]+i)),i=Uj(-.5*t[n]*t[n]);return t.push(0),t}Wj.exports=eLr});var Xj=u((Ste,Dj)=>{"use strict";function tLr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}Dj.exports=tLr});var Yj=u((Tte,zj)=>{"use strict";var Jj=C();function iLr(r,e,t){var i,n;do i=Jj(r())/e,n=Jj(r());while(-2*n<i*i);return t?i-e:e-i}zj.exports=iLr});var Kj=u((Ite,Zj)=>{"use strict";var nLr=Y(),$j=fr(),aLr=kj(),uLr=Xj(),sLr=Yj(),oLr=128,Qj=3.442619855899,Vt=aLr(oLr,Qj),vLr=uLr(Vt),fLr=127;function cLr(r,e){return t;function t(){for(var i,n,a,s,o,f,v;;){if(o=2*r()-1,f=e()&fLr,nLr(o)<vLr[f])return o*Vt[f];if(f===0)return sLr(r,Qj,o<0);if(s=o*Vt[f],a=s*s,v=f+1,i=$j(-.5*(Vt[f]*Vt[f]-a)),n=$j(-.5*(Vt[v]*Vt[v]-a)),n+r()*(i-n)<1)return s}}}Zj.exports=cLr});var t2=u((Lte,eG)=>{"use strict";var rt=b(),l0=_(),xj=R(),lLr=I(),pLr=T(),gLr=or().isPrimitive,p0=O(),mLr=xr(),e2=D().factory,rG=L(),qLr=B(),yLr=x(),hLr=Wt(),dLr=F(),In=d(),wLr=Kj();function bLr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!pLr(r))throw new TypeError(In("invalid argument. Must provide an object. Value: `%s`.",r));if(p0(r,"copy")&&(n.copy=r.copy,!gLr(r.copy)))throw new TypeError(In("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(p0(r,"prng")){if(!lLr(r.prng))throw new TypeError(In("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(p0(r,"state")){if(n.state=r.state,!mLr(r.state))throw new TypeError(In("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(p0(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(In("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(t=e2(n),e=t.normalized):(t=e2({seed:yLr(1+hLr*e()),copy:n.copy}),n.seed=null):(t=e2(n),e=t.normalized),i=wLr(e,t),rt(i,"NAME","improved-ziggurat"),n.seed===null?(rt(i,"seed",null),rt(i,"seedLength",null)):(l0(i,"seed",a),l0(i,"seedLength",s)),r&&r.prng?(xj(i,"state",rG(null),qLr),rt(i,"stateLength",null),rt(i,"byteLength",null),rt(i,"toJSON",rG(null))):(xj(i,"state",v,c),l0(i,"stateLength",o),l0(i,"byteLength",f),rt(i,"toJSON",l)),rt(i,"PRNG",e),i;function a(){return t.seed}function s(){return t.seedLength}function o(){return t.stateLength}function f(){return t.byteLength}function v(){return t.state}function c(p){t.state=p}function l(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=dLr(t.state),p.params=[],p}}eG.exports=bLr});var iG=u((_te,tG)=>{"use strict";var ELr=t2(),NLr=ELr();tG.exports=NLr});var et=u((Pte,aG)=>{"use strict";var ALr=b(),nG=iG(),OLr=t2();ALr(nG,"factory",OLr);aG.exports=nG});var sG=u((Rte,uG)=>{"use strict";var SLr=I(),TLr=SLr(Object.assign);uG.exports=TLr});var vG=u((Fte,oG)=>{"use strict";var ILr=Object.assign;oG.exports=ILr});var cG=u((Mte,fG)=>{"use strict";var LLr=typeof Object.getOwnPropertySymbols<"u";fG.exports=LLr});var gG=u((Bte,pG)=>{"use strict";var lG=Xt(),_Lr=lG.getOwnPropertySymbols;function PLr(r){return _Lr(lG(r))}pG.exports=PLr});var qG=u((Cte,mG)=>{"use strict";function RLr(){return[]}mG.exports=RLr});var hG=u((jte,yG)=>{"use strict";var FLr=cG(),MLr=gG(),BLr=qG(),i2;FLr?i2=MLr:i2=BLr;yG.exports=i2});var wG=u((Gte,dG)=>{"use strict";var CLr=Dt(),jLr=hG(),GLr=Wi();function VLr(r){var e,t,i;for(e=CLr(r),t=jLr(r),i=0;i<t.length;i++)GLr(r,t[i])&&e.push(t[i]);return e}dG.exports=VLr});var EG=u((Vte,bG)=>{"use strict";var ULr=wG();bG.exports=ULr});var OG=u((Ute,AG)=>{"use strict";var HLr=EG(),NG=Xt(),WLr=d();function kLr(r){var e,t,i,n,a,s,o;if(r==null)throw new TypeError(WLr("invalid argument. First argument must be a non-null object. Value: `%s`.",r));for(a=NG(r),s=1;s<arguments.length;s++)if(e=arguments[s],e!=null)for(t=HLr(NG(e)),n=t.length,o=0;o<n;o++)i=t[o],a[i]=e[i];return a}AG.exports=kLr});var Ln=u((Hte,SG)=>{"use strict";var DLr=sG(),XLr=vG(),JLr=OG(),n2;DLr?n2=XLr:n2=JLr;SG.exports=n2});var _G=u((Wte,LG)=>{"use strict";var TG=W().isPrimitive,IG=d();function zLr(r,e){return TG(r)?TG(e)?null:new TypeError(IG("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(IG("invalid argument. First argument must be a positive number. Value: `%s`.",r))}LG.exports=zLr});var BG=u((kte,MG)=>{"use strict";var PG=C(),RG=V(),YLr=$(),FG=1/3;function $Lr(r,e,t){var i,n,a,s,o,f,v,c,l,p;for(t<1?(f=t+1-FG,o=1/RG(9*f),c=YLr(r(),1/t)):(f=t-FG,o=1/RG(9*f),c=1),i=!0;i;){do v=e(),p=1+o*v;while(p<=0);p*=p*p,n=v*v,a=1-.331*n*n,s=.5*n+f*(1-p+PG(p)),l=r(),(l<a||PG(l)<s)&&(i=!1)}return f*p*c}MG.exports=$Lr});var GG=u((Dte,jG)=>{"use strict";var a2=$(),CG=C();function QLr(r,e,t){var i,n,a,s,o,f,v,c;for(a=t-1,o=a2(a+a,.5),i=!0;i===!0;)s=e(),v=.5*(1+s/o),v>=0&&v<=1&&(f=r(),n=a2(s,4),c=8*t-12,c=1-n/c,f<=c?i=!1:(c+=.5*a2(n/(8*t-8),2),f<c&&(c=a*CG(4*v*(1-v)),c+=s*s/2,c>=CG(f)&&(i=!1))));return v}jG.exports=QLr});var UG=u((Xte,VG)=>{"use strict";var ZLr=$(),g0=C();function KLr(r,e,t,i){var n,a,s,o,f,v,c,l,p,m,y;for(o=t-1,f=i-1,v=o+f,c=v*g0(v),s=o/v,n=.5/ZLr(v,.5),a=!0;a===!0;)l=e(),m=s+l*n,m>=0&&m<=1&&(p=r(),y=o*g0(m/o),y+=f*g0((1-m)/f),y+=c+.5*l*l,y>=g0(p)&&(a=!1));return m}VG.exports=KLr});var kG=u((Jte,WG)=>{"use strict";var u2=fr(),HG=$(),s2=C();function xLr(r,e,t){for(var i,n,a,s,o,f,v;;)if(s=r(),o=r(),f=HG(s,1/e),v=HG(o,1/t),a=f+v,a<=1)return a>0?f/a:(i=s2(s)/e,n=s2(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),u2(i-s2(u2(i)+u2(n))))}WG.exports=xLr});var JG=u((zte,XG)=>{"use strict";var DG=BG(),r_r=GG(),e_r=UG(),t_r=kG();function i_r(r,e,t,i){var n,a;return t===i&&t>1.5?r_r(r,e,t):t>1&&i>1?e_r(r,e,t,i):t<1&&i<1?t_r(r,t,i):(n=DG(r,e,t),a=DG(r,e,i),n/(n+a))}XG.exports=i_r});var c2=u((Yte,tV)=>{"use strict";var fe=b(),m0=_(),zG=R(),YG=T(),$G=or().isPrimitive,QG=I(),bi=O(),ZG=L(),n_r=B(),KG=et().factory,q0=D().factory,xG=E(),o2=Qe(),v2=cr(),f2=xr(),rV=Ln(),a_r=F(),ce=d(),u_r=_G(),eV=JG();function s_r(){var r,e,t,i,n,a,s,o,f;if(o=!0,arguments.length===0)n={copy:!1},a=q0(n);else if(arguments.length===1){if(n=arguments[0],!YG(n))throw new TypeError(ce("invalid argument. Options argument must be an object. Value: `%s`.",n));if(bi(n,"copy")&&!$G(n.copy))throw new TypeError(ce("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(bi(n,"prng")){if(!QG(n.prng))throw new TypeError(ce("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(bi(n,"state")&&!f2(n.state))throw new TypeError(ce("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=rV({},n),n.copy===!1?o=!1:n.state&&(n.state=o2(n.state.length,n.state,1,new v2(n.state.length),1)),n.copy=!1,a=q0(n)}}else{if(t=arguments[0],i=arguments[1],f=u_r(t,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!YG(n))throw new TypeError(ce("invalid argument. Options argument must be an object. Value: `%s`.",n));if(bi(n,"copy")&&!$G(n.copy))throw new TypeError(ce("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(bi(n,"prng")){if(!QG(n.prng))throw new TypeError(ce("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(bi(n,"state")&&!f2(n.state))throw new TypeError(ce("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=rV({},n),n.copy===!1?o=!1:n.state&&(n.state=o2(n.state.length,n.state,1,new v2(n.state.length),1)),n.copy=!1,a=q0(n)}}else n={copy:!1},a=q0(n)}return n&&n.prng?e=KG({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=KG({state:r,copy:!1})),t===void 0?s=h:s=g,fe(s,"NAME","beta"),n&&n.prng?(fe(s,"seed",null),fe(s,"seedLength",null),zG(s,"state",ZG(null),n_r),fe(s,"stateLength",null),fe(s,"byteLength",null),fe(s,"toJSON",ZG(null)),fe(s,"PRNG",a)):(m0(s,"seed",v),m0(s,"seedLength",c),zG(s,"state",m,y),m0(s,"stateLength",l),m0(s,"byteLength",p),fe(s,"toJSON",q),fe(s,"PRNG",a),a=a.normalized),s;function v(){return a.seed}function c(){return a.seedLength}function l(){return a.stateLength}function p(){return a.byteLength}function m(){return a.state}function y(N){if(!f2(N))throw new TypeError(ce("invalid argument. Must provide a Uint32Array. Value: `%s`.",N));o&&(N=o2(N.length,N,1,new v2(N.length),1)),a.state=N}function q(){var N={};return N.type="PRNG",N.name=s.NAME,N.state=a_r(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function g(){return eV(a,e,t,i)}function h(N,A){return xG(N)||xG(A)||N<=0||A<=0?NaN:eV(a,e,N,A)}}tV.exports=s_r});var nV=u(($te,iV)=>{"use strict";var o_r=c2(),v_r=o_r();iV.exports=v_r});var sV=u((Qte,uV)=>{"use strict";var f_r=b(),aV=nV(),c_r=c2();f_r(aV,"factory",c_r);uV.exports=aV});var cV=u((Zte,fV)=>{"use strict";var oV=W().isPrimitive,vV=d();function l_r(r,e){return oV(r)?oV(e)?null:new TypeError(vV("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(vV("invalid argument. First argument must be a positive number. Value: `%s`.",r))}fV.exports=l_r});var gV=u((Kte,pV)=>{"use strict";var lV=C();function p_r(r,e,t,i,n){var a,s,o,f,v,c,l;for(a=!0;a;){do v=e(),l=1+n*v;while(l<=0);l*=l*l,s=v*v,o=1-.331*s*s,f=.5*s+i*(1-l+lV(l)),c=r(),(c<o||lV(c)<f)&&(a=!1)}return 1/t*i*l}pV.exports=p_r});var q2=u((xte,AV)=>{"use strict";var le=b(),y0=_(),mV=R(),qV=T(),l2=xr(),yV=or().isPrimitive,hV=I(),Ei=O(),dV=L(),g_r=B(),wV=et().factory,h0=D().factory,bV=E(),p2=V(),EV=$(),g2=Qe(),m2=cr(),m_r=F(),NV=Ln(),pe=d(),q_r=cV(),d0=gV(),w0=1/3;function y_r(){var r,e,t,i,n,a,s,o,f,v,c;if(o=!0,arguments.length===0)n={copy:!1},a=h0(n);else if(arguments.length===1){if(n=arguments[0],!qV(n))throw new TypeError(pe("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ei(n,"copy")&&!yV(n.copy))throw new TypeError(pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ei(n,"prng")){if(!hV(n.prng))throw new TypeError(pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ei(n,"state")&&!l2(n.state))throw new TypeError(pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=NV({},n),n.copy===!1?o=!1:n.state&&(n.state=g2(n.state.length,n.state,1,new m2(n.state.length),1)),n.copy=!1,a=h0(n)}}else{if(e=arguments[0],i=arguments[1],f=q_r(e,i),f)throw f;if(arguments.length>2){if(n=arguments[2],!qV(n))throw new TypeError(pe("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Ei(n,"copy")&&!yV(n.copy))throw new TypeError(pe("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Ei(n,"prng")){if(!hV(n.prng))throw new TypeError(pe("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));a=n.prng}else{if(Ei(n,"state")&&!l2(n.state))throw new TypeError(pe("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=NV({},n),n.copy===!1?o=!1:n.state&&(n.state=g2(n.state.length,n.state,1,new m2(n.state.length),1)),n.copy=!1,a=h0(n)}}else n={copy:!1},a=h0(n)}return n&&n.prng?t=wV({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=wV({state:r,copy:!1})),e===void 0?s=G:(e>=1?(s=N,c=e-w0):(s=A,c=e+1-w0),v=1/p2(9*c)),le(s,"NAME","gamma"),n&&n.prng?(le(s,"seed",null),le(s,"seedLength",null),mV(s,"state",dV(null),g_r),le(s,"stateLength",null),le(s,"byteLength",null),le(s,"toJSON",dV(null)),le(s,"PRNG",a)):(y0(s,"seed",l),y0(s,"seedLength",p),mV(s,"state",q,g),y0(s,"stateLength",m),y0(s,"byteLength",y),le(s,"toJSON",h),le(s,"PRNG",a),a=a.normalized),s;function l(){return a.seed}function p(){return a.seedLength}function m(){return a.stateLength}function y(){return a.byteLength}function q(){return a.state}function g(S){if(!l2(S))throw new TypeError(pe("invalid argument. Must provide a Uint32Array. Value: `%s`.",S));o&&(S=g2(S.length,S,1,new m2(S.length),1)),a.state=S}function h(){var S={};return S.type="PRNG",S.name=s.NAME,S.state=m_r(a.state),e===void 0?S.params=[]:S.params=[e,i],S}function N(){return d0(a,t,i,c,v)}function A(){return d0(a,t,i,c,v)*EV(a(),1/e)}function G(S,J){var sr,k;return bV(S)||bV(J)||S<=0||J<=0?NaN:S<1?(k=S+1-w0,sr=1/p2(9*k),d0(a,t,J,k,sr)*EV(a(),1/S)):(k=S-w0,sr=1/p2(9*k),d0(a,t,J,k,sr))}}AV.exports=y_r});var SV=u((rie,OV)=>{"use strict";var h_r=q2(),d_r=h_r();OV.exports=d_r});var Ni=u((eie,IV)=>{"use strict";var w_r=b(),TV=SV(),b_r=q2();w_r(TV,"factory",b_r);IV.exports=TV});var RV=u((tie,PV)=>{"use strict";var LV=W().isPrimitive,_V=d();function E_r(r,e){return LV(r)?LV(e)?null:new TypeError(_V("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(_V("invalid argument. First argument must be a positive number. Value: `%s`.",r))}PV.exports=E_r});var MV=u((iie,FV)=>{"use strict";function N_r(r,e,t){return r(e,1)/r(t,1)}FV.exports=N_r});var y2=u((nie,HV)=>{"use strict";var tt=b(),b0=_(),BV=R(),CV=T(),jV=L(),A_r=B(),E0=Ni().factory,GV=E(),O_r=F(),VV=d(),S_r=RV(),UV=MV();function T_r(){var r,e,t,i,n,a,s;if(arguments.length===0)r=E0();else if(arguments.length===1){if(i=arguments[0],!CV(i))throw new TypeError(VV("invalid argument. Options argument must be an object. Value: `%s`.",i));r=E0(i)}else{if(e=arguments[0],t=arguments[1],s=S_r(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!CV(i))throw new TypeError(VV("invalid argument. Options argument must be an object. Value: `%s`.",i));r=E0(i)}else r=E0()}return e===void 0?a=q:a=y,n=r.PRNG,tt(a,"NAME","betaprime"),i&&i.prng?(tt(a,"seed",null),tt(a,"seedLength",null),BV(a,"state",jV(null),A_r),tt(a,"stateLength",null),tt(a,"byteLength",null),tt(a,"toJSON",jV(null))):(b0(a,"seed",o),b0(a,"seedLength",f),BV(a,"state",l,p),b0(a,"stateLength",v),b0(a,"byteLength",c),tt(a,"toJSON",m)),tt(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=O_r(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function y(){return UV(r,e,t)}function q(g,h){return GV(g)||GV(h)||g<=0||h<=0?NaN:UV(r,g,h)}}HV.exports=T_r});var kV=u((aie,WV)=>{"use strict";var I_r=y2(),L_r=I_r();WV.exports=L_r});var JV=u((uie,XV)=>{"use strict";var __r=b(),DV=kV(),P_r=y2();__r(DV,"factory",P_r);XV.exports=DV});var YV=u((sie,zV)=>{"use strict";var R_r=x();function F_r(r){return R_r(r)===r&&r>0}zV.exports=F_r});var h2=u((oie,$V)=>{"use strict";var M_r=YV();$V.exports=M_r});var ZV=u((vie,QV)=>{"use strict";function B_r(r){return r>=0&&r<=1}QV.exports=B_r});var xV=u((fie,KV)=>{"use strict";var C_r=ZV();KV.exports=C_r});var tU=u((cie,eU)=>{"use strict";var j_r=ue().isPrimitive,G_r=hn().isPrimitive,rU=d();function V_r(r,e){return j_r(r)?G_r(e)?null:new TypeError(rU("invalid argument. Second argument must be a probability. Value: `%s`.",e)):new TypeError(rU("invalid argument. First argument must be a positive integer. Value: `%s`.",e))}eU.exports=V_r});var nU=u((lie,iU)=>{"use strict";function U_r(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}iU.exports=U_r});var uU=u((pie,aU)=>{"use strict";var H_r=E();function W_r(r){return r===0||H_r(r)?r:r<0?-1:1}aU.exports=W_r});var N0=u((gie,sU)=>{"use strict";var k_r=uU();sU.exports=k_r});var vU=u((mie,oU)=>{"use strict";var D_r=$(),X_r=1/12,J_r=1/360,z_r=1/1260;function Y_r(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=D_r(r,2),(X_r-(J_r-z_r/e)/e)/r}}oU.exports=Y_r});var cU=u((qie,fU)=>{"use strict";var d2=x(),$_r=N0(),Q_r=V(),w2=Y(),A0=C(),O0=vU(),Z_r=1/6;function K_r(r,e,t){var i,n,a,s,o,f,v,c,l,p,m,y,q,g,h,N,A,G,S,J,sr,k,is,Dr,lr,jn;for(J=d2((e+1)*t),v=e-J+1,sr=1-t,k=t/sr,c=(e+1)*k,s=e*t*sr,a=Q_r(s),g=1.15+2.53*a,q=-.0873+.0248*g+.01*t,h=e*t+.5,i=(2.83+5.1/g)*a,y=.92-4.2/g,n=.86*y,A=(J+.5)*A0((J+1)/(k*v)),A+=O0(J)+O0(e-J);;){if(lr=r(),lr<=n)return Dr=lr/y-.43,k=Dr*(2*q/(.5-w2(Dr))+g)+h,d2(k);if(lr>=y?Dr=r()-.5:(Dr=lr/y-.93,Dr=$_r(Dr)*.5-Dr,lr=y*r()),l=.5-w2(Dr),S=d2(Dr*(2*q/l+g)+h),!(S<0||S>e))if(lr=lr*i/(q/(l*l)+g),p=w2(S-J),p>15){if(lr=A0(lr),o=p/s,f=(p/3+.625)*p,f+=Z_r,f/=s,o*=f+.5,is=-(p*p)/(2*s),lr<is-o||lr<=is+o&&(m=e-S+1,jn=A+(e+1)*A0(v/m),jn+=(S+.5)*A0(m*k/(S+1)),jn+=-(O0(S)+O0(e-S)),lr<=jn))return S}else{if(N=1,J<S)for(G=J;G<=S;G++)N*=c/G-k;else if(J>S)for(G=S;G<=J;G++)lr*=c/G-k;if(lr<=N)return S}}}fU.exports=K_r});var gU=u((yie,pU)=>{"use strict";var x_r=nU(),rPr=cU();function lU(r,e,t){return t>.5?e-lU(r,e,1-t):e*t<10?x_r(r,e,t):rPr(r,e,t)}pU.exports=lU});var b2=u((hie,EU)=>{"use strict";var ge=b(),S0=_(),mU=R(),qU=T(),yU=I(),hU=O(),dU=L(),ePr=B(),wU=E(),tPr=h2(),iPr=xV(),T0=D().factory,nPr=F(),I0=d(),aPr=tU(),bU=gU();function uPr(){var r,e,t,i,n,a;if(arguments.length===0)e=T0();else if(arguments.length===1){if(r=arguments[0],!qU(r))throw new TypeError(I0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hU(r,"prng")){if(!yU(r.prng))throw new TypeError(I0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=T0(r)}else{if(n=arguments[0],a=arguments[1],i=aPr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!qU(r))throw new TypeError(I0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(hU(r,"prng")){if(!yU(r.prng))throw new TypeError(I0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=T0(r)}else e=T0()}return n===void 0?t=y:t=m,ge(t,"NAME","binomial"),r&&r.prng?(ge(t,"seed",null),ge(t,"seedLength",null),mU(t,"state",dU(null),ePr),ge(t,"stateLength",null),ge(t,"byteLength",null),ge(t,"toJSON",dU(null)),ge(t,"PRNG",e)):(S0(t,"seed",s),S0(t,"seedLength",o),mU(t,"state",c,l),S0(t,"stateLength",f),S0(t,"byteLength",v),ge(t,"toJSON",p),ge(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=nPr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return bU(e,n,a)}function y(q,g){return wU(q)||wU(g)||!tPr(q)||!iPr(g)?NaN:bU(e,q,g)}}EU.exports=uPr});var AU=u((die,NU)=>{"use strict";var sPr=b2(),oPr=sPr();NU.exports=oPr});var TU=u((wie,SU)=>{"use strict";var vPr=b(),OU=AU(),fPr=b2();vPr(OU,"factory",fPr);SU.exports=OU});var LU=u((bie,IU)=>{"use strict";var cPr=V(),lPr=C(),pPr=It(),gPr=Tt(),mPr=ke();function qPr(r){var e,t;return e=!0,i;function i(){var n,a,s,o;if(e){do n=r(),a=r();while(n===0);return s=cPr(-2*lPr(n)),o=mPr*a,t=s*gPr(o),e=!1,s*pPr(o)}return e=!0,t}}IU.exports=qPr});var PU=u((Eie,_U)=>{"use strict";var yPr=V(),hPr=C(),dPr=Tt(),wPr=Ir(),bPr=dPr(wPr);function EPr(r){var e=yPr(-2*hPr(r));return e*bPr}_U.exports=EPr});var FU=u((Nie,RU)=>{"use strict";var NPr=V(),APr=C(),OPr=Tt(),SPr=ke();function TPr(r){var e=NPr(-2*APr(r)),t=SPr*r;return e*OPr(t)}RU.exports=TPr});var E2=u((Aie,jU)=>{"use strict";var Br=b(),L0=_(),MU=R(),IPr=T(),LPr=I(),_Pr=or().isPrimitive,_n=O(),PPr=xr(),BU=D().factory,CU=L(),RPr=B(),FPr=F(),Pn=d(),MPr=LU(),BPr=PU(),CPr=FU();function jPr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!IPr(r))throw new TypeError(Pn("invalid argument. Must provide an object. Value: `%s`.",r));if(_n(r,"copy")&&(n.copy=r.copy,!_Pr(r.copy)))throw new TypeError(Pn("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(_n(r,"prng")){if(!LPr(r.prng))throw new TypeError(Pn("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else if(_n(r,"state")){if(n.state=r.state,!PPr(r.state))throw new TypeError(Pn("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",r.state))}else if(_n(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError(Pn("invalid option. `%s` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `%s`.","seed",r.seed))}return n.state===void 0?e===void 0?(i=BU(n),e=i.normalized):n.seed=null:(i=BU(n),e=i.normalized),t=MPr(e),Br(t,"NAME","box-muller"),n.seed===null?(Br(t,"seed",null),Br(t,"seedLength",null)):(L0(t,"seed",a),L0(t,"seedLength",s)),r&&r.prng?(MU(t,"state",CU(null),RPr),Br(t,"stateLength",null),Br(t,"byteLength",null),Br(t,"toJSON",CU(null))):(MU(t,"state",v,c),L0(t,"stateLength",o),L0(t,"byteLength",f),Br(t,"toJSON",l)),Br(t,"PRNG",e),_n(e,"MIN")?(Br(t,"MIN",BPr(e.MIN)),Br(t,"MAX",CPr(e.MIN))):(Br(t,"MIN",null),Br(t,"MAX",null)),t;function a(){return i.seed}function s(){return i.seedLength}function o(){return i.stateLength}function f(){return i.byteLength}function v(){return i.state}function c(p){i.state=p}function l(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=FPr(i.state),p.params=[],p}}jU.exports=jPr});var VU=u((Oie,GU)=>{"use strict";var GPr=E2(),VPr=GPr();GU.exports=VPr});var WU=u((Sie,HU)=>{"use strict";var UPr=b(),UU=VU(),HPr=E2();UPr(UU,"factory",HPr);HU.exports=UU});var XU=u((Tie,DU)=>{"use strict";var WPr=j().isPrimitive,kPr=W().isPrimitive,kU=d(),DPr=ar();function XPr(r,e){return!WPr(r)||DPr(r)?new TypeError(kU("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):kPr(e)?null:new TypeError(kU("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}DU.exports=XPr});var zU=u((Iie,JU)=>{"use strict";var JPr=Z1(),zPr=Ir();function YPr(r,e,t){return e+t*JPr(zPr*(r()-.5))}JU.exports=YPr});var N2=u((Lie,eH)=>{"use strict";var it=b(),_0=_(),YU=R(),$U=T(),QU=I(),ZU=O(),KU=L(),$Pr=B(),xU=E(),Ai=et().factory,QPr=F(),P0=d(),ZPr=XU(),rH=zU();function KPr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=Ai();else if(arguments.length===1){if(t=arguments[0],!$U(t))throw new TypeError(P0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(ZU(t,"prng")){if(!QU(t.prng))throw new TypeError(P0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ai({prng:t.prng})}else e=Ai(t)}else{if(s=arguments[0],r=arguments[1],a=ZPr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!$U(t))throw new TypeError(P0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(ZU(t,"prng")){if(!QU(t.prng))throw new TypeError(P0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Ai({prng:t.prng})}else e=Ai(t)}else e=Ai()}return s===void 0?n=q:n=y,i=e.PRNG,it(n,"NAME","cauchy"),t&&t.prng?(it(n,"seed",null),it(n,"seedLength",null),YU(n,"state",KU(null),$Pr),it(n,"stateLength",null),it(n,"byteLength",null),it(n,"toJSON",KU(null))):(_0(n,"seed",o),_0(n,"seedLength",f),YU(n,"state",l,p),_0(n,"stateLength",v),_0(n,"byteLength",c),it(n,"toJSON",m)),it(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=QPr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return rH(e,s,r)}function q(g,h){return xU(g)||xU(h)||h<=0?NaN:rH(e,g,h)}}eH.exports=KPr});var iH=u((_ie,tH)=>{"use strict";var xPr=N2(),rRr=xPr();tH.exports=rRr});var uH=u((Pie,aH)=>{"use strict";var eRr=b(),nH=iH(),tRr=N2();eRr(nH,"factory",tRr);aH.exports=nH});var A2=u((Rie,lH)=>{"use strict";var nt=b(),R0=_(),sH=R(),iRr=W().isPrimitive,oH=T(),vH=I(),fH=O(),cH=L(),nRr=B(),aRr=E(),Oi=Ni().factory,uRr=F(),F0=d();function sRr(){var r,e,t,i,n;if(arguments.length===0)r=Oi();else if(arguments.length===1&&oH(arguments[0]))if(t=arguments[0],fH(t,"prng")){if(!vH(t.prng))throw new TypeError(F0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Oi({prng:t.prng})}else r=Oi(t);else{if(n=arguments[0],!iRr(n))throw new TypeError(F0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!oH(t))throw new TypeError(F0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(fH(t,"prng")){if(!vH(t.prng))throw new TypeError(F0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Oi(n/2,.5,{prng:t.prng})}else r=Oi(n/2,.5,t)}else r=Oi(n/2,.5)}return n===void 0?i=m:i=p,e=r.PRNG,nt(i,"NAME","chisquare"),t&&t.prng?(nt(i,"seed",null),nt(i,"seedLength",null),sH(i,"state",cH(null),nRr),nt(i,"stateLength",null),nt(i,"byteLength",null),nt(i,"toJSON",cH(null))):(R0(i,"seed",a),R0(i,"seedLength",s),sH(i,"state",v,c),R0(i,"stateLength",o),R0(i,"byteLength",f),nt(i,"toJSON",l)),nt(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=uRr(e.state),n===void 0?y.params=[]:y.params=[n],y}function p(){return r()}function m(y){return aRr(y)||y<=0?NaN:r(y/2,.5)}}lH.exports=sRr});var gH=u((Fie,pH)=>{"use strict";var oRr=A2(),vRr=oRr();pH.exports=vRr});var Rn=u((Mie,qH)=>{"use strict";var fRr=b(),mH=gH(),cRr=A2();fRr(mH,"factory",cRr);qH.exports=mH});var O2=u((Bie,NH)=>{"use strict";var at=b(),M0=_(),yH=R(),lRr=W().isPrimitive,hH=T(),dH=I(),wH=O(),bH=L(),pRr=B(),gRr=E(),Si=Rn().factory,mRr=F(),EH=V(),B0=d();function qRr(){var r,e,t,i,n;if(arguments.length===0)r=Si();else if(arguments.length===1&&hH(arguments[0]))if(t=arguments[0],wH(t,"prng")){if(!dH(t.prng))throw new TypeError(B0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Si({prng:t.prng})}else r=Si(t);else{if(n=arguments[0],!lRr(n))throw new TypeError(B0("invalid argument. First argument must be a positive number. Value: `%s`.",n));if(arguments.length>1){if(t=arguments[1],!hH(t))throw new TypeError(B0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(wH(t,"prng")){if(!dH(t.prng))throw new TypeError(B0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));r=Si(n,{prng:t.prng})}else r=Si(n,t)}else r=Si(n)}return n===void 0?i=m:i=p,e=r.PRNG,at(i,"NAME","chi"),t&&t.prng?(at(i,"seed",null),at(i,"seedLength",null),yH(i,"state",bH(null),pRr),at(i,"stateLength",null),at(i,"byteLength",null),at(i,"toJSON",bH(null))):(M0(i,"seed",a),M0(i,"seedLength",s),yH(i,"state",v,c),M0(i,"stateLength",o),M0(i,"byteLength",f),at(i,"toJSON",l)),at(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function f(){return e.byteLength}function v(){return e.state}function c(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=mRr(e.state),n===void 0?y.params=[]:y.params=[n],y}function p(){return EH(r())}function m(y){return gRr(y)||y<=0?NaN:EH(r(y))}}NH.exports=qRr});var OH=u((Cie,AH)=>{"use strict";var yRr=O2(),hRr=yRr();AH.exports=hRr});var IH=u((jie,TH)=>{"use strict";var dRr=b(),SH=OH(),wRr=O2();dRr(SH,"factory",wRr);TH.exports=SH});var PH=u((Gie,_H)=>{"use strict";var bRr=j().isPrimitive,ERr=W().isPrimitive,LH=d(),NRr=ar();function ARr(r,e){return!bRr(r)||NRr(r)?new TypeError(LH("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):ERr(e)?null:new TypeError(LH("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}_H.exports=ARr});var FH=u((Vie,RH)=>{"use strict";var S2=E(),ORr=tn(),SRr=Ir();function TRr(r,e,t){var i;return S2(r)||S2(e)||S2(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+ORr(i)/SRr)/2)}RH.exports=TRr});var BH=u((Uie,MH)=>{"use strict";var IRr=L(),LRr=O1().factory,T2=E(),_Rr=tn(),PRr=Ir();function RRr(r,e){if(T2(r)||T2(e)||e<0)return IRr(NaN);if(e===0)return LRr(r);return t;function t(i){var n;return T2(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+_Rr(n)/PRr)/2)}}MH.exports=RRr});var GH=u((Hie,jH)=>{"use strict";var FRr=b(),CH=FH(),MRr=BH();FRr(CH,"factory",MRr);jH.exports=CH});var I2=u((Wie,VH)=>{"use strict";var BRr=GH(),CRr=1e4,jRr=1e-12;function GRr(r,e,t){var i,n,a,s,o;for(o=1,i=e-t,n=e+t;o<CRr;){if(s=(i+n)/2,n-i<jRr)return s;a=BRr(s,e,t),r>a?i=s:n=s,o+=1}return s}VH.exports=GRr});var HH=u((kie,UH)=>{"use strict";var L2=E(),VRr=I2();function URr(r,e,t){return L2(e)||L2(t)||L2(r)||t<0||r<0||r>1?NaN:t===0?e:VRr(r,e,t)}UH.exports=URr});var kH=u((Die,WH)=>{"use strict";var HRr=E();function WRr(r,e){return HRr(r)||r<0||r>1?NaN:e}WH.exports=WRr});var JH=u((Xie,XH)=>{"use strict";var kRr=L(),DH=E();function DRr(r){if(DH(r))return kRr(NaN);return e;function e(t){return DH(t)||t<0||t>1?NaN:r}}XH.exports=DRr});var _2=u((Jie,YH)=>{"use strict";var XRr=b(),zH=kH(),JRr=JH();XRr(zH,"factory",JRr);YH.exports=zH});var QH=u((zie,$H)=>{"use strict";var zRr=L(),YRr=_2().factory,P2=E(),$Rr=I2();function QRr(r,e){if(P2(r)||P2(e)||e<0)return zRr(NaN);if(e===0)return YRr(r);return t;function t(i){return P2(i)||i<0||i>1?NaN:$Rr(i,r,e)}}$H.exports=QRr});var xH=u((Yie,KH)=>{"use strict";var ZRr=b(),ZH=HH(),KRr=QH();ZRr(ZH,"factory",KRr);KH.exports=ZH});var eW=u(($ie,rW)=>{"use strict";var xRr=xH();function rFr(r,e,t){return xRr(r(),e,t)}rW.exports=rFr});var R2=u((Qie,vW)=>{"use strict";var me=b(),C0=_(),tW=R(),iW=T(),nW=I(),aW=O(),uW=L(),eFr=B(),j0=D().factory,sW=E(),tFr=F(),G0=d(),iFr=PH(),oW=eW();function nFr(){var r,e,t,i,n,a;if(arguments.length===0)e=j0();else if(arguments.length===1){if(r=arguments[0],!iW(r))throw new TypeError(G0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(aW(r,"prng")){if(!nW(r.prng))throw new TypeError(G0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=j0(r)}else{if(n=arguments[0],a=arguments[1],i=iFr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!iW(r))throw new TypeError(G0("invalid argument. Options argument must be an object. Value: `%s`.",r));if(aW(r,"prng")){if(!nW(r.prng))throw new TypeError(G0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=j0(r)}else e=j0()}return n===void 0?t=y:t=m,me(t,"NAME","cosine"),r&&r.prng?(me(t,"seed",null),me(t,"seedLength",null),tW(t,"state",uW(null),eFr),me(t,"stateLength",null),me(t,"byteLength",null),me(t,"toJSON",uW(null)),me(t,"PRNG",e)):(C0(t,"seed",s),C0(t,"seedLength",o),tW(t,"state",c,l),C0(t,"stateLength",f),C0(t,"byteLength",v),me(t,"toJSON",p),me(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=tFr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return oW(e,n,a)}function y(q,g){return sW(q)||sW(g)||g<=0?NaN:oW(e,q,g)}}vW.exports=nFr});var cW=u((Zie,fW)=>{"use strict";var aFr=R2(),uFr=aFr();fW.exports=uFr});var gW=u((Kie,pW)=>{"use strict";var sFr=b(),lW=cW(),oFr=R2();sFr(lW,"factory",oFr);pW.exports=lW});var hW=u((xie,yW)=>{"use strict";var mW=jr().isPrimitive,F2=d(),qW=ar();function vFr(r,e){return!mW(r)||qW(r)?new TypeError(F2("invalid argument. First argument must be an integer and not NaN. Value: `%s`.",r)):!mW(e)||qW(e)?new TypeError(F2("invalid argument. Second argument must be an integer and not NaN. Value: `%s`.",e)):r>e?new RangeError(F2("invalid argument. Minimum support must be less than or equal to maximum support. Value: `[%d, %d]`.",r,e)):null}yW.exports=vFr});var bW=u((rne,wW)=>{"use strict";var M2=vn(),Ti=x();function dW(r,e,t){var i,n,a,s,o,f,v,c,l;if(a=t-e,a===0)return e;if(v=r.MIN,c=r.MAX,n=c-v,n===a)return r()-v+e;if(n<a)for(s=0;;){for(a===M2?(s=Ti(a/(n+1)),a%(n+1)===n&&(s+=1)):s=Ti((a+1)/(n+1)),i=0,f=1;f<=s;){if(i+=(r()-v)*f,f*n===a-f+1)return i;f*=n+1}if(l=dW(r,0,Ti(a/f)),!(l>M2/f)&&(l*=f,i+=l,!(i>a)))return i+e}for(n===M2?(o=Ti(n/(a+1)),n%(a+1)===a&&(o+=1)):o=Ti((n+1)/(a+1));;)if(i=r()-v,i=Ti(i/o),i<=a)return i+e}wW.exports=dW});var B2=u((ene,LW)=>{"use strict";var qe=b(),V0=_(),EW=R(),NW=T(),AW=I(),OW=O(),SW=L(),fFr=B(),U0=D().factory,TW=E(),Ii=Tr(),cFr=F(),ut=d(),lFr=hW(),IW=bW();function pFr(){var r,e,t,i,n,a;if(arguments.length===0)e=U0();else if(arguments.length===1){if(r=arguments[0],!NW(r))throw new TypeError(ut("invalid argument. Options argument must be an object. Value: `%s`.",r));if(OW(r,"prng")){if(!AW(r.prng))throw new TypeError(ut("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Ii(e.MIN))throw new TypeError(ut("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Ii(e.MAX))throw new TypeError(ut("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=U0(r)}else{if(n=arguments[0],a=arguments[1],i=lFr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!NW(r))throw new TypeError(ut("invalid argument. Options argument must be an object. Value: `%s`.",r));if(OW(r,"prng")){if(!AW(r.prng))throw new TypeError(ut("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));if(e=r.prng,!Ii(e.MIN))throw new TypeError(ut("invalid option. `%s` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.","prng"));if(!Ii(e.MAX))throw new TypeError(ut("invalid option. `%s` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.","prng"))}else e=U0(r)}else e=U0()}return n===void 0?t=y:t=m,qe(t,"NAME","discrete-uniform"),r&&r.prng?(qe(t,"seed",null),qe(t,"seedLength",null),EW(t,"state",SW(null),fFr),qe(t,"stateLength",null),qe(t,"byteLength",null),qe(t,"toJSON",SW(null)),qe(t,"PRNG",e)):(V0(t,"seed",s),V0(t,"seedLength",o),EW(t,"state",c,l),V0(t,"stateLength",f),V0(t,"byteLength",v),qe(t,"toJSON",p),qe(t,"PRNG",e)),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=cFr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return IW(e,n,a)}function y(q,g){return TW(q)||TW(g)||!Ii(q)||!Ii(g)||q>g?NaN:IW(e,q,g)}}LW.exports=pFr});var PW=u((tne,_W)=>{"use strict";var gFr=B2(),mFr=gFr();_W.exports=mFr});var MW=u((ine,FW)=>{"use strict";var qFr=b(),RW=PW(),yFr=B2();qFr(RW,"factory",yFr);FW.exports=RW});var jW=u((nne,CW)=>{"use strict";var hFr=W().isPrimitive,dFr=ue().isPrimitive,BW=d();function wFr(r,e){return dFr(r)?hFr(e)?null:new TypeError(BW("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(BW("invalid argument. First argument must be a positive integer. Value: `%s`.",r))}CW.exports=wFr});var VW=u((ane,GW)=>{"use strict";var bFr=C();function EFr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*bFr(i)}GW.exports=EFr});var C2=u((une,zW)=>{"use strict";var ye=b(),H0=_(),UW=R(),HW=T(),WW=I(),kW=O(),DW=L(),NFr=B(),W0=D().factory,XW=E(),AFr=h2(),OFr=F(),k0=d(),SFr=jW(),JW=VW();function TFr(){var r,e,t,i,n,a;if(arguments.length===0)e=W0();else if(arguments.length===1){if(t=arguments[0],!HW(t))throw new TypeError(k0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(kW(t,"prng")){if(!WW(t.prng))throw new TypeError(k0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=W0(t)}else{if(a=arguments[0],r=arguments[1],n=SFr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!HW(t))throw new TypeError(k0("invalid argument. Options argument must be an object. Value: `%s`.",t));if(kW(t,"prng")){if(!WW(t.prng))throw new TypeError(k0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=t.prng}else e=W0(t)}else e=W0()}return a===void 0?i=y:i=m,ye(i,"NAME","erlang"),t&&t.prng?(ye(i,"seed",null),ye(i,"seedLength",null),UW(i,"state",DW(null),NFr),ye(i,"stateLength",null),ye(i,"byteLength",null),ye(i,"toJSON",DW(null)),ye(i,"PRNG",e)):(H0(i,"seed",s),H0(i,"seedLength",o),UW(i,"state",c,l),H0(i,"stateLength",f),H0(i,"byteLength",v),ye(i,"toJSON",p),ye(i,"PRNG",e),e=e.normalized),i;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=OFr(e.state),a===void 0?q.params=[]:q.params=[a,r],q}function m(){return JW(e,a,r)}function y(q,g){return XW(q)||XW(g)||!AFr(q)||g<=0?NaN:JW(e,q,g)}}zW.exports=TFr});var $W=u((sne,YW)=>{"use strict";var IFr=C2(),LFr=IFr();YW.exports=LFr});var KW=u((one,ZW)=>{"use strict";var _Fr=b(),QW=$W(),PFr=C2();_Fr(QW,"factory",PFr);ZW.exports=QW});var rk=u((vne,xW)=>{"use strict";var RFr=C();function FFr(r,e){return-RFr(1-r())/e}xW.exports=FFr});var j2=u((fne,sk)=>{"use strict";var he=b(),D0=_(),ek=R(),MFr=W().isPrimitive,tk=T(),ik=I(),nk=O(),ak=L(),BFr=B(),X0=D().factory,CFr=E(),jFr=F(),J0=d(),uk=rk();function GFr(){var r,e,t,i;if(arguments.length===0)t=X0();else if(arguments.length===1&&tk(arguments[0]))if(e=arguments[0],nk(e,"prng")){if(!ik(e.prng))throw new TypeError(J0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=X0(e);else{if(r=arguments[0],!MFr(r))throw new TypeError(J0("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!tk(e))throw new TypeError(J0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(nk(e,"prng")){if(!ik(e.prng))throw new TypeError(J0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=X0(e)}else t=X0()}return r===void 0?i=p:i=l,he(i,"NAME","exponential"),e&&e.prng?(he(i,"seed",null),he(i,"seedLength",null),ek(i,"state",ak(null),BFr),he(i,"stateLength",null),he(i,"byteLength",null),he(i,"toJSON",ak(null)),he(i,"PRNG",t)):(D0(i,"seed",n),D0(i,"seedLength",a),ek(i,"state",f,v),D0(i,"stateLength",s),D0(i,"byteLength",o),he(i,"toJSON",c),he(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=jFr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return uk(t,r)}function p(m){return CFr(m)||m<=0?NaN:uk(t,m)}}sk.exports=GFr});var vk=u((cne,ok)=>{"use strict";var VFr=j2(),UFr=VFr();ok.exports=UFr});var lk=u((lne,ck)=>{"use strict";var HFr=b(),fk=vk(),WFr=j2();HFr(fk,"factory",WFr);ck.exports=fk});var qk=u((pne,mk)=>{"use strict";var pk=W().isPrimitive,gk=d();function kFr(r,e){return pk(r)?pk(e)?null:new TypeError(gk("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(gk("invalid argument. First argument must be a positive number. Value: `%s`.",r))}mk.exports=kFr});var hk=u((gne,yk)=>{"use strict";function DFr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}yk.exports=DFr});var G2=u((mne,Sk)=>{"use strict";var st=b(),z0=_(),dk=R(),wk=T(),bk=I(),Ek=O(),Nk=L(),XFr=B(),Li=Rn().factory,Ak=E(),JFr=F(),Y0=d(),zFr=qk(),Ok=hk();function YFr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=Li();else if(arguments.length===1){if(e=arguments[0],!wk(e))throw new TypeError(Y0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Ek(e,"prng")){if(!bk(e.prng))throw new TypeError(Y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Li({prng:e.prng})}else r=Li(e)}else{if(a=arguments[0],s=arguments[1],n=zFr(a,s),n)throw n;if(arguments.length>2){if(e=arguments[2],!wk(e))throw new TypeError(Y0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Ek(e,"prng")){if(!bk(e.prng))throw new TypeError(Y0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));r=Li({prng:e.prng})}else r=Li(e)}else r=Li()}return a===void 0?i=q:i=y,t=r.PRNG,st(i,"NAME","f"),e&&e.prng?(st(i,"seed",null),st(i,"seedLength",null),dk(i,"state",Nk(null),XFr),st(i,"stateLength",null),st(i,"byteLength",null),st(i,"toJSON",Nk(null))):(z0(i,"seed",o),z0(i,"seedLength",f),dk(i,"state",l,p),z0(i,"stateLength",v),z0(i,"byteLength",c),st(i,"toJSON",m)),st(i,"PRNG",t),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=JFr(t.state),a===void 0?g.params=[]:g.params=[a,s],g}function y(){return Ok(r,a,s)}function q(g,h){return Ak(g)||Ak(h)||g<=0||h<=0?NaN:Ok(r,g,h)}}Sk.exports=YFr});var Ik=u((qne,Tk)=>{"use strict";var $Fr=G2(),QFr=$Fr();Tk.exports=QFr});var Pk=u((yne,_k)=>{"use strict";var ZFr=b(),Lk=Ik(),KFr=G2();ZFr(Lk,"factory",KFr);_k.exports=Lk});var Mk=u((hne,Fk)=>{"use strict";var Rk=W().isPrimitive,xFr=j().isPrimitive,V2=ar(),U2=d();function rMr(r,e,t){return!Rk(r)||V2(r)?new TypeError(U2("invalid argument. First argument must be a positive number and not NaN. Value: `%s`.",r)):!Rk(e)||V2(e)?new TypeError(U2("invalid argument. Second argument must be a positive number and not NaN. Value: `%s`.",e)):!xFr(t)||V2(t)?new TypeError(U2("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):null}Fk.exports=rMr});var Ck=u((dne,Bk)=>{"use strict";var eMr=$(),tMr=C();function iMr(r,e,t,i){return i+t*eMr(-tMr(r()),-1/e)}Bk.exports=iMr});var W2=u((wne,kk)=>{"use strict";var de=b(),$0=_(),jk=R(),Gk=T(),Vk=I(),Uk=O(),Hk=L(),nMr=B(),Q0=D().factory,H2=E(),aMr=F(),Z0=d(),uMr=Mk(),Wk=Ck();function sMr(){var r,e,t,i,n,a,s;if(arguments.length===0)t=Q0();else if(arguments.length===1){if(e=arguments[0],!Gk(e))throw new TypeError(Z0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Uk(e,"prng")){if(!Vk(e.prng))throw new TypeError(Z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Q0(e)}else{if(r=arguments[0],a=arguments[1],s=arguments[2],n=uMr(r,a,s),n)throw n;if(arguments.length>3){if(e=arguments[3],!Gk(e))throw new TypeError(Z0("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Uk(e,"prng")){if(!Vk(e.prng))throw new TypeError(Z0("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Q0(e)}else t=Q0()}return r===void 0?i=q:i=y,de(i,"NAME","frechet"),e&&e.prng?(de(i,"seed",null),de(i,"seedLength",null),jk(i,"state",Hk(null),nMr),de(i,"stateLength",null),de(i,"byteLength",null),de(i,"toJSON",Hk(null)),de(i,"PRNG",t)):($0(i,"seed",o),$0(i,"seedLength",f),jk(i,"state",l,p),$0(i,"stateLength",v),$0(i,"byteLength",c),de(i,"toJSON",m),de(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function f(){return t.seedLength}function v(){return t.stateLength}function c(){return t.byteLength}function l(){return t.state}function p(g){t.state=g}function m(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=aMr(t.state),r===void 0?g.params=[]:g.params=[r,a,s],g}function y(){return Wk(t,r,a,s)}function q(g,h,N){return H2(g)||H2(h)||H2(N)||g<=0||h<=0?NaN:Wk(t,g,h,N)}}kk.exports=sMr});var Xk=u((bne,Dk)=>{"use strict";var oMr=W2(),vMr=oMr();Dk.exports=vMr});var Yk=u((Ene,zk)=>{"use strict";var fMr=b(),Jk=Xk(),cMr=W2();fMr(Jk,"factory",cMr);zk.exports=Jk});var Zk=u((Nne,Qk)=>{"use strict";var lMr=x(),$k=C();function pMr(r,e){var t=r();return t===0&&(t=r()),lMr($k(t)/$k(1-e))}Qk.exports=pMr});var k2=u((Ane,nD)=>{"use strict";var we=b(),K0=_(),Kk=R(),xk=T(),gMr=hn().isPrimitive,rD=I(),eD=O(),tD=L(),mMr=B(),x0=D().factory,qMr=E(),yMr=F(),ru=d(),iD=Zk();function hMr(){var r,e,t,i;if(arguments.length===0)e=x0();else if(arguments.length===1&&xk(arguments[0]))if(r=arguments[0],eD(r,"prng")){if(!rD(r.prng))throw new TypeError(ru("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=x0(r);else{if(i=arguments[0],!gMr(i))throw new TypeError(ru("invalid argument. First argument must be a probability. Value: `%s`.",i));if(arguments.length>1){if(r=arguments[1],!xk(r))throw new TypeError(ru("invalid argument. Options argument must be an object. Value: `%s`.",r));if(eD(r,"prng")){if(!rD(r.prng))throw new TypeError(ru("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=x0(r)}else e=x0()}return i===void 0?t=p:t=l,we(t,"NAME","geometric"),r&&r.prng?(we(t,"seed",null),we(t,"seedLength",null),Kk(t,"state",tD(null),mMr),we(t,"stateLength",null),we(t,"byteLength",null),we(t,"toJSON",tD(null)),we(t,"PRNG",e)):(K0(t,"seed",n),K0(t,"seedLength",a),Kk(t,"state",f,v),K0(t,"stateLength",s),K0(t,"byteLength",o),we(t,"toJSON",c),we(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function f(){return e.state}function v(m){e.state=m}function c(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=yMr(e.state),i===void 0?m.params=[]:m.params=[i],m}function l(){return iD(e,i)}function p(m){return qMr(m)||m<0||m>1?NaN:iD(e,m)}}nD.exports=hMr});var uD=u((One,aD)=>{"use strict";var dMr=k2(),wMr=dMr();aD.exports=wMr});var vD=u((Sne,oD)=>{"use strict";var bMr=b(),sD=uD(),EMr=k2();bMr(sD,"factory",EMr);oD.exports=sD});var lD=u((Tne,cD)=>{"use strict";var NMr=j().isPrimitive,AMr=W().isPrimitive,fD=d(),OMr=ar();function SMr(r,e){return!NMr(r)||OMr(r)?new TypeError(fD("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):AMr(e)?null:new TypeError(fD("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}cD.exports=SMr});var mD=u((Ine,gD)=>{"use strict";var pD=C();function TMr(r,e,t){return e-t*pD(-pD(r()))}gD.exports=TMr});var D2=u((Lne,ND)=>{"use strict";var be=b(),eu=_(),qD=R(),yD=T(),hD=I(),dD=O(),wD=L(),IMr=B(),tu=D().factory,bD=E(),LMr=F(),iu=d(),_Mr=lD(),ED=mD();function PMr(){var r,e,t,i,n,a;if(arguments.length===0)t=tu();else if(arguments.length===1){if(e=arguments[0],!yD(e))throw new TypeError(iu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(dD(e,"prng")){if(!hD(e.prng))throw new TypeError(iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=tu(e)}else{if(a=arguments[0],r=arguments[1],n=_Mr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!yD(e))throw new TypeError(iu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(dD(e,"prng")){if(!hD(e.prng))throw new TypeError(iu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=tu(e)}else t=tu()}return a===void 0?i=y:i=m,be(i,"NAME","gumbel"),e&&e.prng?(be(i,"seed",null),be(i,"seedLength",null),qD(i,"state",wD(null),IMr),be(i,"stateLength",null),be(i,"byteLength",null),be(i,"toJSON",wD(null)),be(i,"PRNG",t)):(eu(i,"seed",s),eu(i,"seedLength",o),qD(i,"state",c,l),eu(i,"stateLength",f),eu(i,"byteLength",v),be(i,"toJSON",p),be(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(q){t.state=q}function p(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=LMr(t.state),a===void 0?q.params=[]:q.params=[a,r],q}function m(){return ED(t,a,r)}function y(q,g){return bD(q)||bD(g)||g<=0?NaN:ED(t,q,g)}}ND.exports=PMr});var OD=u((_ne,AD)=>{"use strict";var RMr=D2(),FMr=RMr();AD.exports=FMr});var ID=u((Pne,TD)=>{"use strict";var MMr=b(),SD=OD(),BMr=D2();MMr(SD,"factory",BMr);TD.exports=SD});var _D=u((Rne,LD)=>{"use strict";var CMr=x();function jMr(r){return CMr(r)===r&&r>=0}LD.exports=jMr});var RD=u((Fne,PD)=>{"use strict";var GMr=_D();PD.exports=GMr});var MD=u((Mne,FD)=>{"use strict";var X2=Ge().isPrimitive,Fn=d();function VMr(r,e,t){return X2(r)?X2(e)?X2(t)?t>r?new RangeError(Fn("invalid argument. Third argument must be less than or equal to the first argument. Value: `%u`.",t)):e>r?new RangeError(Fn("invalid argument. Second argument must be less than or equal to the first argument. Value: `%u`.",e)):null:new TypeError(Fn("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",t)):new TypeError(Fn("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e)):new TypeError(Fn("invalid argument. First argument must be a nonnegative integer. Value: `%s`.",r))}FD.exports=VMr});var BD=u((Bne,UMr)=>{UMr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var jD=u((Cne,CD)=>{"use strict";var HMr=E(),WMr=Tr(),kMr=ti(),DMr=P(),XMr=BD(),JMr=170;function zMr(r){return HMr(r)?NaN:WMr(r)?r<0?NaN:r<=JMr?XMr[r]:DMr:kMr(r+1)}CD.exports=zMr});var VD=u((jne,GD)=>{"use strict";var YMr=jD();GD.exports=YMr});var HD=u((Gne,UD)=>{"use strict";var ot=VD();function $Mr(r,e,t,i){var n,a,s;for(i<t?(n=ot(t)*ot(e+t-i)/(ot(e+t)*ot(t-i)),s=0):(n=ot(e)*ot(i)/(ot(i-t)*ot(e+t)),s=i-t),a=r();a>n;)a-=n,n*=(e-s)*(i-s)/((s+1)*(t-i+1+s)),s+=1;return s}UD.exports=$Mr});var kD=u((Vne,WD)=>{"use strict";var nu=HD();function QMr(r,e,t,i){var n,a,s,o;return i>e/2?(s=e-i,2*t<=e?(n=t,a=e-t,o=nu(r,n,a,s),t-o):(a=t,n=e-t,o=nu(r,n,a,s),i-e+t+o)):(s=i,2*t<=e?(n=t,a=e-t,o=nu(r,n,a,s),o):(n=e-t,a=t,o=nu(r,n,a,s),i-o))}WD.exports=QMr});var z2=u((Une,ZD)=>{"use strict";var Ee=b(),au=_(),DD=R(),XD=T(),JD=I(),zD=O(),YD=L(),ZMr=B(),uu=D().factory,J2=RD(),$D=P(),KMr=F(),su=d(),xMr=MD(),QD=kD();function rBr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=uu();else if(arguments.length===1){if(r=arguments[0],!XD(r))throw new TypeError(su("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zD(r,"prng")){if(!JD(r.prng))throw new TypeError(su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=uu(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=xMr(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!XD(r))throw new TypeError(su("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zD(r,"prng")){if(!JD(r.prng))throw new TypeError(su("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=uu(r)}else e=uu()}return n===void 0?t=q:t=y,Ee(t,"NAME","hypergeometric"),r&&r.prng?(Ee(t,"seed",null),Ee(t,"seedLength",null),DD(t,"state",YD(null),ZMr),Ee(t,"stateLength",null),Ee(t,"byteLength",null),Ee(t,"toJSON",YD(null)),Ee(t,"PRNG",e)):(au(t,"seed",o),au(t,"seedLength",f),DD(t,"state",l,p),au(t,"stateLength",v),au(t,"byteLength",c),Ee(t,"toJSON",m),Ee(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=KMr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function y(){return QD(e,n,a,s)}function q(g,h,N){return g===$D||h===$D||!J2(g)||!J2(h)||!J2(N)||N>g?NaN:QD(e,g,h,N)}}ZD.exports=rBr});var xD=u((Hne,KD)=>{"use strict";var eBr=z2(),tBr=eBr();KD.exports=tBr});var tX=u((Wne,eX)=>{"use strict";var iBr=b(),rX=xD(),nBr=z2();iBr(rX,"factory",nBr);eX.exports=rX});var uX=u((kne,aX)=>{"use strict";var iX=W().isPrimitive,nX=d();function aBr(r,e){return iX(r)?iX(e)?null:new TypeError(nX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(nX("invalid argument. First argument must be a positive number. Value: `%s`.",r))}aX.exports=aBr});var Y2=u((Dne,pX)=>{"use strict";var vt=b(),ou=_(),sX=R(),oX=T(),vX=I(),fX=O(),cX=L(),uBr=B(),_i=Ni().factory,lX=E(),sBr=F(),vu=d(),oBr=uX();function vBr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=_i();else if(arguments.length===1){if(i=arguments[0],!oX(i))throw new TypeError(vu("invalid argument. Options argument must be an object. Value: `%s`.",i));if(fX(i,"prng")){if(!vX(i.prng))throw new TypeError(vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=_i({prng:i.prng})}else r=_i(i)}else{if(e=arguments[0],t=arguments[1],s=oBr(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!oX(i))throw new TypeError(vu("invalid argument. Options argument must be an object. Value: `%s`.",i));if(fX(i,"prng")){if(!vX(i.prng))throw new TypeError(vu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));r=_i(e,t,{prng:i.prng})}else r=_i(e,t,i)}else r=_i(e,t)}return e===void 0?a=q:a=y,n=r.PRNG,vt(a,"NAME","invgamma"),i&&i.prng?(vt(a,"seed",null),vt(a,"seedLength",null),sX(a,"state",cX(null),uBr),vt(a,"stateLength",null),vt(a,"byteLength",null),vt(a,"toJSON",cX(null))):(ou(a,"seed",o),ou(a,"seedLength",f),sX(a,"state",l,p),ou(a,"stateLength",v),ou(a,"byteLength",c),vt(a,"toJSON",m)),vt(a,"PRNG",n),a;function o(){return n.seed}function f(){return n.seedLength}function v(){return n.stateLength}function c(){return n.byteLength}function l(){return n.state}function p(g){n.state=g}function m(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=sBr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function y(){return 1/r()}function q(g,h){return lX(g)||lX(h)||g<=0||h<=0?NaN:1/r(g,h)}}pX.exports=vBr});var mX=u((Xne,gX)=>{"use strict";var fBr=Y2(),cBr=fBr();gX.exports=cBr});var hX=u((Jne,yX)=>{"use strict";var lBr=b(),qX=mX(),pBr=Y2();lBr(qX,"factory",pBr);yX.exports=qX});var EX=u((zne,bX)=>{"use strict";var dX=W().isPrimitive,wX=d();function gBr(r,e){return dX(r)?dX(e)?null:new TypeError(wX("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(wX("invalid argument. First argument must be a positive number. Value: `%s`.",r))}bX.exports=gBr});var OX=u((Yne,AX)=>{"use strict";var NX=$();function mBr(r,e,t){var i=r();return NX(1-NX(1-i,1/t),1/e)}AX.exports=mBr});var $2=u(($ne,FX)=>{"use strict";var Ne=b(),fu=_(),SX=R(),TX=T(),IX=I(),LX=O(),_X=L(),qBr=B(),cu=D().factory,PX=E(),yBr=F(),lu=d(),hBr=EX(),RX=OX();function dBr(){var r,e,t,i,n,a;if(arguments.length===0)e=cu();else if(arguments.length===1){if(r=arguments[0],!TX(r))throw new TypeError(lu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(LX(r,"prng")){if(!IX(r.prng))throw new TypeError(lu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=cu(r)}else{if(n=arguments[0],a=arguments[1],i=hBr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!TX(r))throw new TypeError(lu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(LX(r,"prng")){if(!IX(r.prng))throw new TypeError(lu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=cu(r)}else e=cu()}return n===void 0?t=y:t=m,Ne(t,"NAME","kumaraswamy"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),SX(t,"state",_X(null),qBr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",_X(null)),Ne(t,"PRNG",e)):(fu(t,"seed",s),fu(t,"seedLength",o),SX(t,"state",c,l),fu(t,"stateLength",f),fu(t,"byteLength",v),Ne(t,"toJSON",p),Ne(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=yBr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return RX(e,n,a)}function y(q,g){return PX(q)||PX(g)||q<=0||g<=0?NaN:RX(e,q,g)}}FX.exports=dBr});var BX=u((Qne,MX)=>{"use strict";var wBr=$2(),bBr=wBr();MX.exports=bBr});var GX=u((Zne,jX)=>{"use strict";var EBr=b(),CX=BX(),NBr=$2();EBr(CX,"factory",NBr);jX.exports=CX});var HX=u((Kne,UX)=>{"use strict";var ABr=j().isPrimitive,OBr=W().isPrimitive,VX=d(),SBr=ar();function TBr(r,e){return!ABr(r)||SBr(r)?new TypeError(VX("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):OBr(e)?null:new TypeError(VX("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}UX.exports=TBr});var kX=u((xne,WX)=>{"use strict";var IBr=N0(),LBr=Y(),_Br=C();function PBr(r,e,t){var i=r()-.5;return e-t*IBr(i)*_Br(1-2*LBr(i))}WX.exports=PBr});var Q2=u((rae,ZX)=>{"use strict";var Ae=b(),pu=_(),DX=R(),XX=T(),JX=I(),zX=O(),YX=L(),RBr=B(),gu=D().factory,$X=E(),FBr=F(),mu=d(),MBr=HX(),QX=kX();function BBr(){var r,e,t,i,n,a;if(arguments.length===0)e=gu();else if(arguments.length===1){if(r=arguments[0],!XX(r))throw new TypeError(mu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zX(r,"prng")){if(!JX(r.prng))throw new TypeError(mu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=gu(r)}else{if(n=arguments[0],a=arguments[1],i=MBr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!XX(r))throw new TypeError(mu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(zX(r,"prng")){if(!JX(r.prng))throw new TypeError(mu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=gu(r)}else e=gu()}return n===void 0?t=y:t=m,Ae(t,"NAME","laplace"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),DX(t,"state",YX(null),RBr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",YX(null)),Ae(t,"PRNG",e)):(pu(t,"seed",s),pu(t,"seedLength",o),DX(t,"state",c,l),pu(t,"stateLength",f),pu(t,"byteLength",v),Ae(t,"toJSON",p),Ae(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=FBr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return QX(e,n,a)}function y(q,g){return $X(q)||$X(g)||g<=0?NaN:QX(e,q,g)}}ZX.exports=BBr});var xX=u((eae,KX)=>{"use strict";var CBr=Q2(),jBr=CBr();KX.exports=jBr});var tJ=u((tae,eJ)=>{"use strict";var GBr=b(),rJ=xX(),VBr=Q2();GBr(rJ,"factory",VBr);eJ.exports=rJ});var aJ=u((iae,nJ)=>{"use strict";var UBr=j().isPrimitive,HBr=W().isPrimitive,iJ=d(),WBr=ar();function kBr(r,e){return!UBr(r)||WBr(r)?new TypeError(iJ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):HBr(e)?null:new TypeError(iJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}nJ.exports=kBr});var sJ=u((nae,uJ)=>{"use strict";function DBr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}uJ.exports=DBr});var vJ=u((aae,oJ)=>{"use strict";function XBr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}oJ.exports=XBr});var cJ=u((uae,fJ)=>{"use strict";function JBr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}fJ.exports=JBr});var pJ=u((sae,lJ)=>{"use strict";function zBr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}lJ.exports=zBr});var mJ=u((oae,gJ)=>{"use strict";function YBr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}gJ.exports=YBr});var dJ=u((vae,hJ)=>{"use strict";var $Br=E(),qJ=V(),yJ=C(),QBr=P(),ZBr=X(),KBr=sJ(),xBr=vJ(),rCr=cJ(),eCr=pJ(),tCr=mJ(),iCr=.08913147449493408,nCr=2.249481201171875,aCr=.807220458984375,uCr=.9399557113647461,sCr=.9836282730102539;function oCr(r){var e,t,i,n,a,s;return $Br(r)?NaN:r===1?QBr:r===-1?ZBr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),s=KBr(t),e*(a*iCr+a*s)):n>=.25?(a=qJ(-2*yJ(n)),n-=.25,s=xBr(n),e*(a/(nCr+s))):(n=qJ(-yJ(n)),n<3?(i=n-1.125,s=rCr(i),e*(aCr*n+s*n)):n<6?(i=n-3,s=eCr(i),e*(uCr*n+s*n)):(i=n-6,s=tCr(i),e*(sCr*n+s*n))))}hJ.exports=oCr});var Z2=u((fae,wJ)=>{"use strict";var vCr=dJ();wJ.exports=vCr});var EJ=u((cae,bJ)=>{"use strict";var fCr=Z2(),K2=E(),cCr=V();function lCr(r,e,t){var i,n;return K2(e)||K2(t)||K2(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*cCr(2),i+n*fCr(2*r-1))}bJ.exports=lCr});var AJ=u((lae,NJ)=>{"use strict";var pCr=L(),gCr=_2().factory,mCr=Z2(),x2=E(),qCr=V();function yCr(r,e){var t,i;if(x2(r)||x2(e)||e<0)return pCr(NaN);return e===0&&gCr(r),t=r,i=e*qCr(2),n;function n(a){return x2(a)||a<0||a>1?NaN:t+i*mCr(2*a-1)}}NJ.exports=yCr});var TJ=u((pae,SJ)=>{"use strict";var hCr=b(),OJ=EJ(),dCr=AJ();hCr(OJ,"factory",dCr);SJ.exports=OJ});var LJ=u((gae,IJ)=>{"use strict";var wCr=TJ();function bCr(r,e,t){var i=wCr(1-r()/2,0,1);return e+t/(i*i)}IJ.exports=bCr});var rf=u((mae,jJ)=>{"use strict";var Oe=b(),qu=_(),_J=R(),PJ=T(),RJ=I(),FJ=O(),MJ=L(),ECr=B(),yu=D().factory,BJ=E(),NCr=F(),hu=d(),ACr=aJ(),CJ=LJ();function OCr(){var r,e,t,i,n,a;if(arguments.length===0)e=yu();else if(arguments.length===1){if(r=arguments[0],!PJ(r))throw new TypeError(hu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(FJ(r,"prng")){if(!RJ(r.prng))throw new TypeError(hu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=yu(r)}else{if(n=arguments[0],a=arguments[1],i=ACr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!PJ(r))throw new TypeError(hu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(FJ(r,"prng")){if(!RJ(r.prng))throw new TypeError(hu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=yu(r)}else e=yu()}return n===void 0?t=y:t=m,Oe(t,"NAME","levy"),r&&r.prng?(Oe(t,"seed",null),Oe(t,"seedLength",null),_J(t,"state",MJ(null),ECr),Oe(t,"stateLength",null),Oe(t,"byteLength",null),Oe(t,"toJSON",MJ(null)),Oe(t,"PRNG",e)):(qu(t,"seed",s),qu(t,"seedLength",o),_J(t,"state",c,l),qu(t,"stateLength",f),qu(t,"byteLength",v),Oe(t,"toJSON",p),Oe(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=NCr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return CJ(e,n,a)}function y(q,g){return BJ(q)||BJ(g)||g<=0?NaN:CJ(e,q,g)}}jJ.exports=OCr});var VJ=u((qae,GJ)=>{"use strict";var SCr=rf(),TCr=SCr();GJ.exports=TCr});var WJ=u((yae,HJ)=>{"use strict";var ICr=b(),UJ=VJ(),LCr=rf();ICr(UJ,"factory",LCr);HJ.exports=UJ});var XJ=u((hae,DJ)=>{"use strict";var _Cr=j().isPrimitive,PCr=W().isPrimitive,RCr=ar(),kJ=d();function FCr(r,e){return!_Cr(r)||RCr(r)?new TypeError(kJ("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):PCr(e)?null:new TypeError(kJ("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}DJ.exports=FCr});var zJ=u((dae,JJ)=>{"use strict";var MCr=C();function BCr(r,e,t){var i=r();return e+t*MCr(i/(1-i))}JJ.exports=BCr});var ef=u((wae,ez)=>{"use strict";var Se=b(),du=_(),YJ=R(),$J=T(),QJ=I(),ZJ=O(),KJ=L(),CCr=B(),wu=D().factory,xJ=E(),jCr=F(),bu=d(),GCr=XJ(),rz=zJ();function VCr(){var r,e,t,i,n,a;if(arguments.length===0)e=wu();else if(arguments.length===1){if(r=arguments[0],!$J(r))throw new TypeError(bu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ZJ(r,"prng")){if(!QJ(r.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=wu(r)}else{if(n=arguments[0],a=arguments[1],i=GCr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!$J(r))throw new TypeError(bu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(ZJ(r,"prng")){if(!QJ(r.prng))throw new TypeError(bu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=wu(r)}else e=wu()}return n===void 0?t=y:t=m,Se(t,"NAME","logistic"),r&&r.prng?(Se(t,"seed",null),Se(t,"seedLength",null),YJ(t,"state",KJ(null),CCr),Se(t,"stateLength",null),Se(t,"byteLength",null),Se(t,"toJSON",KJ(null)),Se(t,"PRNG",e)):(du(t,"seed",s),du(t,"seedLength",o),YJ(t,"state",c,l),du(t,"stateLength",f),du(t,"byteLength",v),Se(t,"toJSON",p),Se(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=jCr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return rz(e,n,a)}function y(q,g){return xJ(q)||xJ(g)||g<=0?NaN:rz(e,q,g)}}ez.exports=VCr});var iz=u((bae,tz)=>{"use strict";var UCr=ef(),HCr=UCr();tz.exports=HCr});var uz=u((Eae,az)=>{"use strict";var WCr=b(),nz=iz(),kCr=ef();WCr(nz,"factory",kCr);az.exports=nz});var vz=u((Nae,oz)=>{"use strict";var DCr=j().isPrimitive,XCr=W().isPrimitive,sz=d(),JCr=ar();function zCr(r,e){return!DCr(r)||JCr(r)?new TypeError(sz("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):XCr(e)?null:new TypeError(sz("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}oz.exports=zCr});var cz=u((Aae,fz)=>{"use strict";var YCr=fr();function $Cr(r,e,t){return YCr(e+t*r())}fz.exports=$Cr});var tf=u((Oae,dz)=>{"use strict";var ft=b(),Eu=_(),lz=R(),pz=T(),gz=I(),mz=O(),qz=L(),QCr=B(),Pi=et().factory,yz=E(),ZCr=F(),Nu=d(),KCr=vz(),hz=cz();function xCr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=Pi();else if(arguments.length===1){if(t=arguments[0],!pz(t))throw new TypeError(Nu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(mz(t,"prng")){if(!gz(t.prng))throw new TypeError(Nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Pi({prng:t.prng})}else e=Pi(t)}else{if(s=arguments[0],r=arguments[1],a=KCr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!pz(t))throw new TypeError(Nu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(mz(t,"prng")){if(!gz(t.prng))throw new TypeError(Nu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=Pi({prng:t.prng})}else e=Pi(t)}else e=Pi()}return s===void 0?n=q:n=y,i=e.PRNG,ft(n,"NAME","lognormal"),t&&t.prng?(ft(n,"seed",null),ft(n,"seedLength",null),lz(n,"state",qz(null),QCr),ft(n,"stateLength",null),ft(n,"byteLength",null),ft(n,"toJSON",qz(null))):(Eu(n,"seed",o),Eu(n,"seedLength",f),lz(n,"state",l,p),Eu(n,"stateLength",v),Eu(n,"byteLength",c),ft(n,"toJSON",m)),ft(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=ZCr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return hz(e,s,r)}function q(g,h){return yz(g)||yz(h)||h<=0?NaN:hz(e,g,h)}}dz.exports=xCr});var bz=u((Sae,wz)=>{"use strict";var rjr=tf(),ejr=rjr();wz.exports=ejr});var Az=u((Tae,Nz)=>{"use strict";var tjr=b(),Ez=bz(),ijr=tf();tjr(Ez,"factory",ijr);Nz.exports=Ez});var nf=u((Iae,Oz)=>{"use strict";var njr=Kt(),ajr=x(),ujr=njr-1;function sjr(){var r=ajr(1+ujr*Math.random());return r|0}Oz.exports=sjr});var sf=u((Lae,_z)=>{"use strict";var Te=b(),ct=_(),Sz=R(),af=O(),ojr=T(),vjr=or().isPrimitive,fjr=Gr(),cjr=ue().isPrimitive,Tz=Qn(),kr=d(),Au=Kt(),br=Nt(),Ri=Qe(),ljr=F(),Iz=nf(),uf=Au-1|0,pjr=Au-1|0,gjr=16807,Ou=1,Su=2,lt=2,Er=4,Mn=5;function Lz(r,e){var t;return e?t="option":t="argument",r.length<Mn+1?new RangeError(kr("invalid %s. State array has insufficient length.",t)):r[0]!==Ou?new RangeError(kr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Ou,r[0])):r[1]!==Su?new RangeError(kr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,Su,r[1])):r[lt]!==1?new RangeError(kr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,1,r[lt])):r[Er]!==r.length-Mn?new RangeError(kr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Mn,r[Er])):null}function mjr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!ojr(r))throw new TypeError(kr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(af(r,"copy")&&(i.copy=r.copy,!vjr(r.copy)))throw new TypeError(kr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(af(r,"state")){if(t=r.state,i.state=!0,!Tz(t))throw new TypeError(kr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(s=Lz(t,!0),s)throw s;i.copy===!1?e=t:(e=new br(t.length),Ri(t.length,t,1,e,1)),t=new br(e.buffer,e.byteOffset+(lt+1)*e.BYTES_PER_ELEMENT,1),n=new br(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,t[Er])}if(n===void 0)if(af(r,"seed"))if(n=r.seed,i.seed=!0,cjr(n)){if(n>pjr)throw new RangeError(kr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(fjr(n)&&n.length>0)a=n.length,e=new br(Mn+a),e[0]=Ou,e[1]=Su,e[lt]=1,e[Er]=a,Ri.ndarray(a,n,1,0,e,1,Er+1),t=new br(e.buffer,e.byteOffset+(lt+1)*e.BYTES_PER_ELEMENT,1),n=new br(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError(kr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=Iz()|0}else n=Iz()|0;return t===void 0&&(e=new br(Mn+1),e[0]=Ou,e[1]=Su,e[lt]=1,e[Er]=1,e[Er+1]=n,t=new br(e.buffer,e.byteOffset+(lt+1)*e.BYTES_PER_ELEMENT,1),n=new br(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),Te(y,"NAME","minstd"),ct(y,"seed",o),ct(y,"seedLength",f),Sz(y,"state",l,p),ct(y,"stateLength",v),ct(y,"byteLength",c),Te(y,"toJSON",m),Te(y,"MIN",1),Te(y,"MAX",Au-1),Te(y,"normalized",q),Te(q,"NAME",y.NAME),ct(q,"seed",o),ct(q,"seedLength",f),Sz(q,"state",l,p),ct(q,"stateLength",v),ct(q,"byteLength",c),Te(q,"toJSON",m),Te(q,"MIN",(y.MIN-1)/uf),Te(q,"MAX",(y.MAX-1)/uf),y;function o(){var g=e[Er];return Ri(g,n,1,new br(g),1)}function f(){return e[Er]}function v(){return e.length}function c(){return e.byteLength}function l(){var g=e.length;return Ri(g,e,1,new br(g),1)}function p(g){var h;if(!Tz(g))throw new TypeError(kr("invalid argument. Must provide an Int32Array. Value: `%s`.",g));if(h=Lz(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?Ri(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new br(g.length)),Ri(g.length,g,1,e,1)),t=new br(e.buffer,e.byteOffset+(lt+1)*e.BYTES_PER_ELEMENT,1),n=new br(e.buffer,e.byteOffset+(Er+1)*e.BYTES_PER_ELEMENT,e[Er])}function m(){var g={};return g.type="PRNG",g.name=y.NAME,g.state=ljr(e),g.params=[],g}function y(){var g=t[0]|0;return g=gjr*g%Au|0,t[0]=g,g|0}function q(){return(y()-1)/uf}}_z.exports=mjr});var Rz=u((_ae,Pz)=>{"use strict";var qjr=sf(),yjr=nf(),hjr=qjr({seed:yjr()});Pz.exports=hjr});var Bz=u((Pae,Mz)=>{"use strict";var djr=b(),Fz=Rz(),wjr=sf();djr(Fz,"factory",wjr);Mz.exports=Fz});var jz=u((Rae,Cz)=>{"use strict";var bjr=E(),Ejr=8;function Njr(r,e,t){var i,n;for(n=0;n<Ejr;n++)if(i=r(),bjr(i))throw new Error("unexpected error. PRNG returned NaN.");for(n=t-1;n>=0;n--)e[n]=r();return e}Cz.exports=Njr});var of=u((Fae,Gz)=>{"use strict";var Ajr=Kt(),Ojr=x(),Sjr=Ajr-1;function Tjr(){var r=Ojr(1+Sjr*Math.random());return r|0}Gz.exports=Tjr});var cf=u((Mae,Dz)=>{"use strict";var Ie=b(),pt=_(),Vz=R(),vf=O(),Ijr=T(),Ljr=or().isPrimitive,_jr=Gr(),Pjr=ue().isPrimitive,Uz=Qn(),Fi=Qe(),Rjr=x(),Nr=Nt(),Bn=Kt(),Fjr=F(),Cr=d(),Hz=jz(),Wz=of(),ff=Bn-1|0,Mjr=Bn-1|0,Bjr=16807,Or=32,Lu=1,_u=3,gt=2,Mi=Or+3,Ar=Or+6,Cn=Or+7,Tu=Mi+1,Iu=Mi+2;function kz(r,e){var t;return e?t="option":t="argument",r.length<Cn+1?new RangeError(Cr("invalid %s. State array has insufficient length.",t)):r[0]!==Lu?new RangeError(Cr("invalid %s. State array has an incompatible schema version. Expected: `%s`. Actual: `%s`.",t,Lu,r[0])):r[1]!==_u?new RangeError(Cr("invalid %s. State array has an incompatible number of sections. Expected: `%s`. Actual: `%s`.",t,_u,r[1])):r[gt]!==Or?new RangeError(Cr("invalid %s. State array has an incompatible table length. Expected: `%s`. Actual: `%s`.",t,Or,r[gt])):r[Mi]!==2?new RangeError(Cr("invalid %s. State array has an incompatible state length. Expected: `%u`. Actual: `%u`.",t,2,r[Mi])):r[Ar]!==r.length-Cn?new RangeError(Cr("invalid %s. State array length is incompatible with seed section length. Expected: `%u`. Actual: `%u`.",t,r.length-Cn,r[Ar])):null}function Cjr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!Ijr(r))throw new TypeError(Cr("invalid argument. Options argument must be an object. Value: `%s`.",r));if(vf(r,"copy")&&(i.copy=r.copy,!Ljr(r.copy)))throw new TypeError(Cr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",r.copy));if(vf(r,"state")){if(t=r.state,i.state=!0,!Uz(t))throw new TypeError(Cr("invalid option. `%s` option must be an Int32Array. Option: `%s`.","state",t));if(s=kz(t,!0),s)throw s;i.copy===!1?e=t:(e=new Nr(t.length),Fi(t.length,t,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(gt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,t[Ar])}if(n===void 0)if(vf(r,"seed"))if(n=r.seed,i.seed=!0,Pjr(n)){if(n>Mjr)throw new RangeError(Cr("invalid option. `%s` option must be a positive integer less than the maximum signed 32-bit integer. Option: `%u`.","seed",n));n|=0}else if(_jr(n)&&n.length>0)a=n.length,e=new Nr(Cn+a),e[0]=Lu,e[1]=_u,e[gt]=Or,e[Mi]=2,e[Iu]=n[0],e[Ar]=a,Fi.ndarray(a,n,1,0,e,1,Ar+1),t=new Nr(e.buffer,e.byteOffset+(gt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,a),t=Hz(y,t,Or),e[Tu]=t[0];else throw new TypeError(Cr("invalid option. `%s` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `%s`.","seed",n));else n=Wz()|0}else n=Wz()|0;return t===void 0&&(e=new Nr(Cn+1),e[0]=Lu,e[1]=_u,e[gt]=Or,e[Mi]=2,e[Iu]=n,e[Ar]=1,e[Ar+1]=n,t=new Nr(e.buffer,e.byteOffset+(gt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,1),t=Hz(y,t,Or),e[Tu]=t[0]),Ie(q,"NAME","minstd-shuffle"),pt(q,"seed",o),pt(q,"seedLength",f),Vz(q,"state",l,p),pt(q,"stateLength",v),pt(q,"byteLength",c),Ie(q,"toJSON",m),Ie(q,"MIN",1),Ie(q,"MAX",Bn-1),Ie(q,"normalized",g),Ie(g,"NAME",q.NAME),pt(g,"seed",o),pt(g,"seedLength",f),Vz(g,"state",l,p),pt(g,"stateLength",v),pt(g,"byteLength",c),Ie(g,"toJSON",m),Ie(g,"MIN",(q.MIN-1)/ff),Ie(g,"MAX",(q.MAX-1)/ff),q;function o(){var h=e[Ar];return Fi(h,n,1,new Nr(h),1)}function f(){return e[Ar]}function v(){return e.length}function c(){return e.byteLength}function l(){var h=e.length;return Fi(h,e,1,new Nr(h),1)}function p(h){var N;if(!Uz(h))throw new TypeError(Cr("invalid argument. Must provide an Int32Array. Value: `%s`.",h));if(N=kz(h,!1),N)throw N;i.copy===!1?i.state&&h.length===e.length?Fi(h.length,h,1,e,1):(e=h,i.state=!0):(h.length!==e.length&&(e=new Nr(h.length)),Fi(h.length,h,1,e,1)),t=new Nr(e.buffer,e.byteOffset+(gt+1)*e.BYTES_PER_ELEMENT,Or),n=new Nr(e.buffer,e.byteOffset+(Ar+1)*e.BYTES_PER_ELEMENT,e[Ar])}function m(){var h={};return h.type="PRNG",h.name=q.NAME,h.state=Fjr(e),h.params=[],h}function y(){var h=e[Iu]|0;return h=Bjr*h%Bn|0,e[Iu]=h,h|0}function q(){var h,N;return h=e[Tu],N=Rjr(Or*(h/Bn)),h=t[N],e[Tu]=h,t[N]=y(),h}function g(){return(q()-1)/ff}}Dz.exports=Cjr});var Jz=u((Bae,Xz)=>{"use strict";var jjr=cf(),Gjr=of(),Vjr=jjr({seed:Gjr()});Xz.exports=Vjr});var $z=u((Cae,Yz)=>{"use strict";var Ujr=b(),zz=Jz(),Hjr=cf();Ujr(zz,"factory",Hjr);Yz.exports=zz});var Zz=u((jae,Qz)=>{"use strict";var Wjr=fr();function kjr(r,e){for(var t=r(),i=1;t>Wjr(-e);)i+=1,t*=r();return i-1}Qz.exports=kjr});var xz=u((Gae,Kz)=>{"use strict";var Djr=x();function Xjr(r){return Djr(r)===r&&r<0}Kz.exports=Xjr});var eY=u((Vae,rY)=>{"use strict";var Jjr=xz();rY.exports=Jjr});var iY=u((Uae,tY)=>{"use strict";var zjr=eY(),Yjr=nn();function $jr(r){return zjr(r)?NaN:Yjr(r+1)}tY.exports=$jr});var aY=u((Hae,nY)=>{"use strict";var Qjr=iY();nY.exports=Qjr});var vY=u((Wae,oY)=>{"use strict";var Zjr=aY(),uY=x(),Kjr=N0(),xjr=V(),sY=Y(),Pu=C(),rGr=_v(),eGr=1/12,tGr=1/360;function iGr(r,e){var t,i,n,a,s,o,f,v,c,l;for(t=xjr(e),f=2.53*t+.931,o=.02483*f-.059,i=1.1328/(f-3.4)+1.1239,s=-3.6224/(f-2)+.9277,n=.86*s;;){if(l=r(),l<=n)return c=l/s-.43,c*=2*o/(.5-sY(c))+f,c+=e+.445,uY(c);if(l>=s?c=r()-.5:(c=l/s-.93,c=Kjr(c)*.5-c,l=s*r()),a=.5-sY(c),(a>=.013||a>=l)&&(v=uY((2*o/a+f)*c+e+.445),l*=i/(o/(a*a)+f),c=(v+.5)*Pu(e/v),c+=-e-rGr+v,c-=(eGr-tGr/(v*v))/v,v>=10&&c>=Pu(l*t)||(c=v*Pu(e)-e-Zjr(v),v>=0&&v<=9&&c>=Pu(l))))return v}}oY.exports=iGr});var cY=u((kae,fY)=>{"use strict";var nGr=Zz(),aGr=vY();function uGr(r,e){return e<30?nGr(r,e):aGr(r,e)}fY.exports=uGr});var lf=u((Dae,hY)=>{"use strict";var Le=b(),Ru=_(),lY=R(),sGr=W().isPrimitive,pY=T(),gY=I(),mY=O(),qY=L(),oGr=B(),Fu=D().factory,vGr=E(),fGr=F(),Mu=d(),yY=cY();function cGr(){var r,e,t,i;if(arguments.length===0)t=Fu();else if(arguments.length===1&&pY(arguments[0]))if(e=arguments[0],mY(e,"prng")){if(!gY(e.prng))throw new TypeError(Mu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Fu(e);else{if(r=arguments[0],!sGr(r))throw new TypeError(Mu("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!pY(e))throw new TypeError(Mu("invalid argument. Options argument must be an object. Value: `%s`.",e));if(mY(e,"prng")){if(!gY(e.prng))throw new TypeError(Mu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=Fu(e)}else t=Fu()}return r===void 0?i=p:i=l,Le(i,"NAME","poisson"),e&&e.prng?(Le(i,"seed",null),Le(i,"seedLength",null),lY(i,"state",qY(null),oGr),Le(i,"stateLength",null),Le(i,"byteLength",null),Le(i,"toJSON",qY(null)),Le(i,"PRNG",t)):(Ru(i,"seed",n),Ru(i,"seedLength",a),lY(i,"state",f,v),Ru(i,"stateLength",s),Ru(i,"byteLength",o),Le(i,"toJSON",c),Le(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=fGr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return yY(t,r)}function p(m){return vGr(m)||m<=0?NaN:yY(t,m)}}hY.exports=cGr});var wY=u((Xae,dY)=>{"use strict";var lGr=lf(),pGr=lGr();dY.exports=pGr});var pf=u((Jae,EY)=>{"use strict";var gGr=b(),bY=wY(),mGr=lf();gGr(bY,"factory",mGr);EY.exports=bY});var AY=u((zae,NY)=>{"use strict";var qGr=W().isPrimitive,yGr=j().isPrimitive,gf=d(),hGr=ar();function dGr(r,e){return qGr(r)?!yGr(e)||hGr(e)?new TypeError(gf("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):e<=0||e>=1?new RangeError(gf("invalid argument. Second argument must be on the interval: (0, 1). Value: `%f`.",e)):null:new TypeError(gf("invalid argument. First argument must be a positive number. Value: `%s`.",r))}NY.exports=dGr});var hf=u((Yae,RY)=>{"use strict";var mt=b(),Bu=_(),OY=R(),Bi=O(),SY=T(),mf=xr(),TY=or().isPrimitive,IY=I(),LY=L(),wGr=B(),_Y=E(),Ci=pf().factory,Cu=Ni().factory,qf=Qe(),yf=cr(),PY=Ln(),bGr=F(),_e=d(),EGr=AY();function NGr(){var r,e,t,i,n,a,s,o,f,v;if(s=!0,arguments.length===0)i={copy:!1},t=Ci(i);else if(arguments.length===1){if(i=arguments[0],!SY(i))throw new TypeError(_e("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Bi(i,"copy")&&!TY(i.copy))throw new TypeError(_e("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Bi(i,"prng")){if(!IY(i.prng))throw new TypeError(_e("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Ci({prng:i.prng})}else{if(Bi(i,"state")&&!mf(i.state))throw new TypeError(_e("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=PY({},i),i.copy===!1?s=!1:i.state&&(i.state=qf(i.state.length,i.state,1,new yf(i.state.length),1)),i.copy=!1,t=Ci(i)}}else{if(v=arguments[0],f=arguments[1],o=EGr(v,f),o)throw o;if(arguments.length>2){if(i=arguments[2],!SY(i))throw new TypeError(_e("invalid argument. Options argument must be an object. Value: `%s`.",i));if(Bi(i,"copy")&&!TY(i.copy))throw new TypeError(_e("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",i.copy));if(Bi(i,"prng")){if(!IY(i.prng))throw new TypeError(_e("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",i.prng));t=Ci({prng:i.prng})}else{if(Bi(i,"state")&&!mf(i.state))throw new TypeError(_e("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",i.state));i=PY({},i),i.copy===!1?s=!1:i.state&&(i.state=qf(i.state.length,i.state,1,new yf(i.state.length),1)),i.copy=!1,t=Ci(i)}}else i={copy:!1},t=Ci(i)}return i&&i.prng?v===void 0?r=Cu({prng:i.prng}):r=Cu(v,f/(1-f),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),v===void 0?r=Cu({state:e,copy:!1}):r=Cu(v,f/(1-f),{state:e,copy:!1})),v===void 0?n=N:n=h,a=t.PRNG,mt(n,"NAME","negative-binomial"),i&&i.prng?(mt(n,"seed",null),mt(n,"seedLength",null),OY(n,"state",LY(null),wGr),mt(n,"stateLength",null),mt(n,"byteLength",null),mt(n,"toJSON",LY(null))):(Bu(n,"seed",c),Bu(n,"seedLength",l),OY(n,"state",y,q),Bu(n,"stateLength",p),Bu(n,"byteLength",m),mt(n,"toJSON",g)),mt(n,"PRNG",a),n;function c(){return a.seed}function l(){return a.seedLength}function p(){return a.stateLength}function m(){return a.byteLength}function y(){return a.state}function q(A){if(!mf(A))throw new TypeError(_e("invalid argument. Must provide a Uint32Array. Value: `%s`.",A));s&&(A=qf(A.length,A,1,new yf(A.length),1)),a.state=A}function g(){var A={};return A.type="PRNG",A.name=n.NAME,A.state=bGr(a.state),v===void 0?A.params=[]:A.params=[v,f],A}function h(){return t(r())}function N(A,G){return _Y(A)||_Y(G)||G<=0||G>=1?NaN:t(r(A,G/(1-G)))}}RY.exports=NGr});var MY=u(($ae,FY)=>{"use strict";var AGr=hf(),OGr=AGr();FY.exports=OGr});var jY=u((Qae,CY)=>{"use strict";var SGr=b(),BY=MY(),TGr=hf();SGr(BY,"factory",TGr);CY.exports=BY});var UY=u((Zae,VY)=>{"use strict";var IGr=j().isPrimitive,LGr=W().isPrimitive,GY=d(),_Gr=ar();function PGr(r,e){return!IGr(r)||_Gr(r)?new TypeError(GY("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):LGr(e)?null:new TypeError(GY("invalid argument. Second argument must be a positive number. Value: `%s`.",e))}VY.exports=PGr});var WY=u((Kae,HY)=>{"use strict";function RGr(r,e,t){return e+t*r()}HY.exports=RGr});var df=u((xae,QY)=>{"use strict";var qt=b(),ju=_(),kY=R(),DY=T(),XY=I(),JY=O(),zY=L(),FGr=B(),ji=et().factory,YY=E(),MGr=F(),Gu=d(),BGr=UY(),$Y=WY();function CGr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=ji();else if(arguments.length===1){if(t=arguments[0],!DY(t))throw new TypeError(Gu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(JY(t,"prng")){if(!XY(t.prng))throw new TypeError(Gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ji({prng:t.prng})}else e=ji(t)}else{if(s=arguments[0],r=arguments[1],a=BGr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!DY(t))throw new TypeError(Gu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(JY(t,"prng")){if(!XY(t.prng))throw new TypeError(Gu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));e=ji({prng:t.prng})}else e=ji(t)}else e=ji()}return s===void 0?n=q:n=y,i=e.PRNG,qt(n,"NAME","normal"),t&&t.prng?(qt(n,"seed",null),qt(n,"seedLength",null),kY(n,"state",zY(null),FGr),qt(n,"stateLength",null),qt(n,"byteLength",null),qt(n,"toJSON",zY(null))):(ju(n,"seed",o),ju(n,"seedLength",f),kY(n,"state",l,p),ju(n,"stateLength",v),ju(n,"byteLength",c),qt(n,"toJSON",m)),qt(n,"PRNG",i),n;function o(){return i.seed}function f(){return i.seedLength}function v(){return i.stateLength}function c(){return i.byteLength}function l(){return i.state}function p(g){i.state=g}function m(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=MGr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return $Y(e,s,r)}function q(g,h){return YY(g)||YY(h)||h<=0?NaN:$Y(e,g,h)}}QY.exports=CGr});var KY=u((r0e,ZY)=>{"use strict";var jGr=df(),GGr=jGr();ZY.exports=GGr});var e$=u((e0e,r$)=>{"use strict";var VGr=b(),xY=KY(),UGr=df();VGr(xY,"factory",UGr);r$.exports=xY});var a$=u((t0e,n$)=>{"use strict";var t$=W().isPrimitive,i$=d();function HGr(r,e){return t$(r)?t$(e)?null:new TypeError(i$("invalid argument. Second argument must be a positive number. Value: `%s`.",e)):new TypeError(i$("invalid argument. First argument must be a positive number. Value: `%s`.",r))}n$.exports=HGr});var s$=u((i0e,u$)=>{"use strict";var WGr=$();function kGr(r,e,t){return t/WGr(r(),1/e)}u$.exports=kGr});var wf=u((n0e,m$)=>{"use strict";var Pe=b(),Vu=_(),o$=R(),v$=T(),f$=I(),c$=O(),l$=L(),DGr=B(),Uu=D().factory,p$=E(),XGr=F(),Hu=d(),JGr=a$(),g$=s$();function zGr(){var r,e,t,i,n,a;if(arguments.length===0)i=Uu();else if(arguments.length===1){if(t=arguments[0],!v$(t))throw new TypeError(Hu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(c$(t,"prng")){if(!f$(t.prng))throw new TypeError(Hu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Uu(t)}else{if(r=arguments[0],e=arguments[1],a=JGr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!v$(t))throw new TypeError(Hu("invalid argument. Options argument must be an object. Value: `%s`.",t));if(c$(t,"prng")){if(!f$(t.prng))throw new TypeError(Hu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",t.prng));i=t.prng}else i=Uu(t)}else i=Uu()}return r===void 0?n=y:n=m,Pe(n,"NAME","pareto-type1"),t&&t.prng?(Pe(n,"seed",null),Pe(n,"seedLength",null),o$(n,"state",l$(null),DGr),Pe(n,"stateLength",null),Pe(n,"byteLength",null),Pe(n,"toJSON",l$(null)),Pe(n,"PRNG",i)):(Vu(n,"seed",s),Vu(n,"seedLength",o),o$(n,"state",c,l),Vu(n,"stateLength",f),Vu(n,"byteLength",v),Pe(n,"toJSON",p),Pe(n,"PRNG",i),i=i.normalized),n;function s(){return i.seed}function o(){return i.seedLength}function f(){return i.stateLength}function v(){return i.byteLength}function c(){return i.state}function l(q){i.state=q}function p(){var q={};return q.type="PRNG",q.name=n.NAME,q.state=XGr(i.state),r===void 0?q.params=[]:q.params=[r,e],q}function m(){return g$(i,r,e)}function y(q,g){return p$(q)||p$(g)||q<=0||g<=0?NaN:g$(i,q,g)}}m$.exports=zGr});var y$=u((a0e,q$)=>{"use strict";var YGr=wf(),$Gr=YGr();q$.exports=$Gr});var w$=u((u0e,d$)=>{"use strict";var QGr=b(),h$=y$(),ZGr=wf();QGr(h$,"factory",ZGr);d$.exports=h$});var E$=u((s0e,b$)=>{"use strict";var KGr=V(),xGr=C();function rVr(r,e){return e*KGr(-2*xGr(r()))}b$.exports=rVr});var bf=u((o0e,L$)=>{"use strict";var Re=b(),Wu=_(),N$=R(),eVr=W().isPrimitive,A$=T(),O$=I(),S$=O(),T$=L(),tVr=B(),ku=D().factory,iVr=E(),nVr=F(),Du=d(),I$=E$();function aVr(){var r,e,t,i;if(arguments.length===0)t=ku();else if(arguments.length===1&&A$(arguments[0]))if(e=arguments[0],S$(e,"prng")){if(!O$(e.prng))throw new TypeError(Du("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ku(e);else{if(r=arguments[0],!eVr(r))throw new TypeError(Du("invalid argument. First argument must be a positive number. Value: `%s`.",r));if(arguments.length>1){if(e=arguments[1],!A$(e))throw new TypeError(Du("invalid argument. Options argument must be an object. Value: `%s`.",e));if(S$(e,"prng")){if(!O$(e.prng))throw new TypeError(Du("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=ku(e)}else t=ku()}return r===void 0?i=p:i=l,Re(i,"NAME","rayleigh"),e&&e.prng?(Re(i,"seed",null),Re(i,"seedLength",null),N$(i,"state",T$(null),tVr),Re(i,"stateLength",null),Re(i,"byteLength",null),Re(i,"toJSON",T$(null)),Re(i,"PRNG",t)):(Wu(i,"seed",n),Wu(i,"seedLength",a),N$(i,"state",f,v),Wu(i,"stateLength",s),Wu(i,"byteLength",o),Re(i,"toJSON",c),Re(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function f(){return t.state}function v(m){t.state=m}function c(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=nVr(t.state),r===void 0?m.params=[]:m.params=[r],m}function l(){return I$(t,r)}function p(m){return iVr(m)||m<=0?NaN:I$(t,m)}}L$.exports=aVr});var P$=u((v0e,_$)=>{"use strict";var uVr=bf(),sVr=uVr();_$.exports=sVr});var M$=u((f0e,F$)=>{"use strict";var oVr=b(),R$=P$(),vVr=bf();oVr(R$,"factory",vVr);F$.exports=R$});var Of=u((c0e,k$)=>{"use strict";var yt=b(),Xu=_(),B$=R(),Gi=O(),C$=W().isPrimitive,j$=T(),Ef=xr(),G$=or().isPrimitive,fVr=E(),V$=I(),U$=L(),cVr=B(),Ju=Rn().factory,Vi=et().factory,Nf=Qe(),Af=cr(),H$=Ln(),lVr=F(),Qr=d(),W$=V();function pVr(){var r,e,t,i,n,a,s,o;if(s=!0,arguments.length===0)n={copy:!1},t=Vi(n);else if(arguments.length===1)if(j$(arguments[0])){if(n=arguments[0],Gi(n,"copy")&&!G$(n.copy))throw new TypeError(Qr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Gi(n,"prng")){if(!V$(n.prng))throw new TypeError(Qr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Vi({prng:n.prng})}else{if(Gi(n,"state")&&!Ef(n.state))throw new TypeError(Qr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=H$({},n),n.copy===!1?s=!1:n.state&&(n.state=Nf(n.state.length,n.state,1,new Af(n.state.length),1)),n.copy=!1,t=Vi(n)}}else{if(o=arguments[0],!C$(o))throw new TypeError(Qr("invalid argument. First argument must be a positive number or an options object. Value: `%s`.",o));n={copy:!1},t=Vi(n)}else{if(o=arguments[0],!C$(o))throw new TypeError(Qr("invalid argument. First argument must be a positive number. Value: `%s`.",o));if(n=arguments[1],!j$(n))throw new TypeError(Qr("invalid argument. Options argument must be an object. Value: `%s`.",n));if(Gi(n,"copy")&&!G$(n.copy))throw new TypeError(Qr("invalid option. `%s` option must be a boolean. Option: `%s`.","copy",n.copy));if(Gi(n,"prng")){if(!V$(n.prng))throw new TypeError(Qr("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",n.prng));t=Vi({prng:n.prng})}else{if(Gi(n,"state")&&!Ef(n.state))throw new TypeError(Qr("invalid option. `%s` option must be a Uint32Array. Option: `%s`.","state",n.state));n=H$({},n),n.copy===!1?s=!1:n.state&&(n.state=Nf(n.state.length,n.state,1,new Af(n.state.length),1)),n.copy=!1,t=Vi(n)}}return n&&n.prng?o===void 0?r=Ju({prng:n.prng}):r=Ju(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=Ju({state:e,copy:!1}):r=Ju(o,{state:e,copy:!1})),o===void 0?a=g:a=q,i=t.PRNG,yt(a,"NAME","t"),n&&n.prng?(yt(a,"seed",null),yt(a,"seedLength",null),B$(a,"state",U$(null),cVr),yt(a,"stateLength",null),yt(a,"byteLength",null),yt(a,"toJSON",U$(null))):(Xu(a,"seed",f),Xu(a,"seedLength",v),B$(a,"state",p,m),Xu(a,"stateLength",c),Xu(a,"byteLength",l),yt(a,"toJSON",y)),yt(a,"PRNG",i),a;function f(){return i.seed}function v(){return i.seedLength}function c(){return i.stateLength}function l(){return i.byteLength}function p(){return i.state}function m(h){if(!Ef(h))throw new TypeError(Qr("invalid argument. Must provide a Uint32Array. Value: `%s`.",h));s&&(h=Nf(h.length,h,1,new Af(h.length),1)),i.state=h}function y(){var h={};return h.type="PRNG",h.name=a.NAME,h.state=lVr(i.state),o===void 0?h.params=[]:h.params=[o],h}function q(){return t()/W$(r()/o)}function g(h){return fVr(h)||h<=0?NaN:t()/W$(r(h)/h)}}k$.exports=pVr});var X$=u((l0e,D$)=>{"use strict";var gVr=Of(),mVr=gVr();D$.exports=mVr});var Y$=u((p0e,z$)=>{"use strict";var qVr=b(),J$=X$(),yVr=Of();qVr(J$,"factory",yVr);z$.exports=J$});var Q$=u((g0e,$$)=>{"use strict";var Sf=j().isPrimitive,zu=d(),Tf=ar();function hVr(r,e,t){return!Sf(r)||Tf(r)?new TypeError(zu("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!Sf(e)||Tf(e)?new TypeError(zu("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):!Sf(t)||Tf(t)?new TypeError(zu("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",t)):r<=t&&t<=e?null:new RangeError(zu("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,e,t))}$$.exports=hVr});var x$=u((m0e,K$)=>{"use strict";var Z$=V();function dVr(r,e,t,i){var n,a,s;return n=(i-e)/(t-e),s=r(),s<n?(a=(t-e)*(i-e),e+Z$(a*s)):(a=(t-e)*(t-i),t-Z$(a*(1-s)))}K$.exports=dVr});var Lf=u((q0e,uQ)=>{"use strict";var Fe=b(),Yu=_(),rQ=R(),eQ=T(),tQ=I(),iQ=O(),nQ=L(),wVr=B(),$u=D().factory,If=E(),bVr=F(),Qu=d(),EVr=Q$(),aQ=x$();function NVr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=$u();else if(arguments.length===1){if(r=arguments[0],!eQ(r))throw new TypeError(Qu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(iQ(r,"prng")){if(!tQ(r.prng))throw new TypeError(Qu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=$u(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=EVr(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!eQ(r))throw new TypeError(Qu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(iQ(r,"prng")){if(!tQ(r.prng))throw new TypeError(Qu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=$u(r)}else e=$u()}return n===void 0?t=q:t=y,Fe(t,"NAME","triangular"),r&&r.prng?(Fe(t,"seed",null),Fe(t,"seedLength",null),rQ(t,"state",nQ(null),wVr),Fe(t,"stateLength",null),Fe(t,"byteLength",null),Fe(t,"toJSON",nQ(null)),Fe(t,"PRNG",e)):(Yu(t,"seed",o),Yu(t,"seedLength",f),rQ(t,"state",l,p),Yu(t,"stateLength",v),Yu(t,"byteLength",c),Fe(t,"toJSON",m),Fe(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function f(){return e.seedLength}function v(){return e.stateLength}function c(){return e.byteLength}function l(){return e.state}function p(g){e.state=g}function m(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=bVr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function y(){return aQ(e,n,a,s)}function q(g,h,N){return If(g)||If(h)||If(N)||!(g<=N&&N<=h)?NaN:aQ(e,g,h,N)}}uQ.exports=NVr});var oQ=u((y0e,sQ)=>{"use strict";var AVr=Lf(),OVr=AVr();sQ.exports=OVr});var cQ=u((h0e,fQ)=>{"use strict";var SVr=b(),vQ=oQ(),TVr=Lf();SVr(vQ,"factory",TVr);fQ.exports=vQ});var mQ=u((d0e,gQ)=>{"use strict";var lQ=j().isPrimitive,_f=d(),pQ=ar();function IVr(r,e){return!lQ(r)||pQ(r)?new TypeError(_f("invalid argument. First argument must be a number and not NaN. Value: `%s`.",r)):!lQ(e)||pQ(e)?new TypeError(_f("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",e)):r>=e?new RangeError(_f("invalid argument. Minimum support must be less than maximum support. Value: `[%f, %f]`.",r,e)):null}gQ.exports=IVr});var yQ=u((w0e,qQ)=>{"use strict";function LVr(r,e,t){var i=r();return t*i+(1-i)*e}qQ.exports=LVr});var Pf=u((b0e,OQ)=>{"use strict";var Me=b(),Zu=_(),hQ=R(),dQ=T(),wQ=I(),bQ=O(),EQ=L(),_Vr=B(),Ku=D().factory,NQ=E(),PVr=F(),xu=d(),RVr=mQ(),AQ=yQ();function FVr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ku();else if(arguments.length===1){if(r=arguments[0],!dQ(r))throw new TypeError(xu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(bQ(r,"prng")){if(!wQ(r.prng))throw new TypeError(xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ku(r)}else{if(n=arguments[0],a=arguments[1],i=RVr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!dQ(r))throw new TypeError(xu("invalid argument. Options argument must be an object. Value: `%s`.",r));if(bQ(r,"prng")){if(!wQ(r.prng))throw new TypeError(xu("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",r.prng));e=r.prng}else e=Ku(r)}else e=Ku()}return n===void 0?t=y:t=m,Me(t,"NAME","uniform"),r&&r.prng?(Me(t,"seed",null),Me(t,"seedLength",null),hQ(t,"state",EQ(null),_Vr),Me(t,"stateLength",null),Me(t,"byteLength",null),Me(t,"toJSON",EQ(null)),Me(t,"PRNG",e)):(Zu(t,"seed",s),Zu(t,"seedLength",o),hQ(t,"state",c,l),Zu(t,"stateLength",f),Zu(t,"byteLength",v),Me(t,"toJSON",p),Me(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function f(){return e.stateLength}function v(){return e.byteLength}function c(){return e.state}function l(q){e.state=q}function p(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=PVr(e.state),n===void 0?q.params=[]:q.params=[n,a],q}function m(){return AQ(e,n,a)}function y(q,g){return NQ(q)||NQ(g)||q>=g?NaN:AQ(e,q,g)}}OQ.exports=FVr});var TQ=u((E0e,SQ)=>{"use strict";var MVr=Pf(),BVr=MVr();SQ.exports=BVr});var _Q=u((N0e,LQ)=>{"use strict";var CVr=b(),IQ=TQ(),jVr=Pf();CVr(IQ,"factory",jVr);LQ.exports=IQ});var MQ=u((A0e,FQ)=>{"use strict";var PQ=W().isPrimitive,RQ=d();function GVr(r,e){return PQ(r)?PQ(e)?null:new TypeError(RQ("invalid argument. Shape parameter must be a positive number. Value: `%s`.",e)):new TypeError(RQ("invalid argument. Scale parameter must be a positive number. Value: `%s`.",r))}FQ.exports=GVr});var CQ=u((O0e,BQ)=>{"use strict";var VVr=$(),UVr=C();function HVr(r,e,t){return t*VVr(-UVr(1-r()),1/e)}BQ.exports=HVr});var Rf=u((S0e,DQ)=>{"use strict";var Be=b(),rs=_(),jQ=R(),GQ=T(),VQ=I(),UQ=O(),HQ=L(),WVr=B(),es=D().factory,WQ=E(),kVr=F(),ts=d(),DVr=MQ(),kQ=CQ();function XVr(){var r,e,t,i,n,a;if(arguments.length===0)t=es();else if(arguments.length===1){if(e=arguments[0],!GQ(e))throw new TypeError(ts("invalid argument. Options argument must be an object. Value: `%s`.",e));if(UQ(e,"prng")){if(!VQ(e.prng))throw new TypeError(ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=es(e)}else{if(a=arguments[0],r=arguments[1],n=DVr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!GQ(e))throw new TypeError(ts("invalid argument. Options argument must be an object. Value: `%s`.",e));if(UQ(e,"prng")){if(!VQ(e.prng))throw new TypeError(ts("invalid option. `%s` option must be a pseudorandom number generator function. Option: `%s`.","prng",e.prng));t=e.prng}else t=es(e)}else t=es()}return r===void 0?i=y:i=m,Be(i,"NAME","weibull"),e&&e.prng?(Be(i,"seed",null),Be(i,"seedLength",null),jQ(i,"state",HQ(null),WVr),Be(i,"stateLength",null),Be(i,"byteLength",null),Be(i,"toJSON",HQ(null)),Be(i,"PRNG",t)):(rs(i,"seed",s),rs(i,"seedLength",o),jQ(i,"state",c,l),rs(i,"stateLength",f),rs(i,"byteLength",v),Be(i,"toJSON",p),Be(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function f(){return t.stateLength}function v(){return t.byteLength}function c(){return t.state}function l(q){t.state=q}function p(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=kVr(t.state),a===void 0?q.params=[]:q.params=[a,r],q}function m(){return kQ(t,a,r)}function y(q,g){return WQ(q)||WQ(g)||q<=0||g<=0?NaN:kQ(t,q,g)}}DQ.exports=XVr});var JQ=u((T0e,XQ)=>{"use strict";var JVr=Rf(),zVr=JVr();XQ.exports=zVr});var $Q=u((I0e,YQ)=>{"use strict";var YVr=b(),zQ=JQ(),$Vr=Rf();YVr(zQ,"factory",$Vr);YQ.exports=zQ});var ZQ=u((L0e,QQ)=>{"use strict";var M={};M.arcsine=Ij().factory;M.bernoulli=Vj().factory;M.beta=sV().factory;M.betaprime=JV().factory;M.binomial=TU().factory;M.boxMueller=WU().factory;M.cauchy=uH().factory;M.chi=IH().factory;M.chisquare=Rn().factory;M.cosine=gW().factory;M.discreteUniform=MW().factory;M.erlang=KW().factory;M.exponential=lk().factory;M.f=Pk().factory;M.frechet=Yk().factory;M.gamma=Ni().factory;M.geometric=vD().factory;M.gumbel=ID().factory;M.hypergeometric=tX().factory;M.improvedZiggurat=et().factory;M.invgamma=hX().factory;M.kumaraswamy=GX().factory;M.laplace=tJ().factory;M.levy=WJ().factory;M.logistic=uz().factory;M.lognormal=Az().factory;M.minstd=Bz().factory;M.minstdShuffle=$z().factory;M.mt19937=D().factory;M.negativeBinomial=jY().factory;M.normal=e$().factory;M.pareto1=w$().factory;M.poisson=pf().factory;M.rayleigh=M$().factory;M.t=Y$().factory;M.triangular=cQ().factory;M.uniform=_Q().factory;M.weibull=$Q().factory;QQ.exports=M});var xQ=u((_0e,KQ)=>{"use strict";function QVr(r,e,t,i){var n,a,s,o,f,v,c,l,p,m,y,q,g,h,N,A;for(y=e[1],q=e[0],g=r[0],h=r[1],c=t[0],l=t[1],s=c[1],o=c[0]-y*s,f=l[1],v=l[0]-y*f,p=0,m=0,n=[],N=0;N<q;N++){for(a=[],A=0;A<y;A++)a.push(i(g[p],h[m])),p+=s,m+=f;n.push(a),p+=o,m+=v}return n}KQ.exports=QVr});var eZ=u((P0e,rZ)=>{"use strict";var ZVr=j().isPrimitive,KVr=P(),xVr=X(),rUr=d();function eUr(r,e){return t;function t(i){var n;if(!ZVr(i)){if(e.nonnumeric===void 0)throw new TypeError(rUr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===KVr?e.pinf:n===xVr?e.ninf:n}}rZ.exports=eUr});var aZ=u((R0e,nZ)=>{"use strict";var tZ=j().isPrimitive,tUr=P(),iUr=X(),iZ=d();function nUr(r,e){return t;function t(i,n){var a;if(!tZ(i)){if(e.nonnumeric===void 0)throw new TypeError(iZ("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!tZ(n)){if(e.nonnumeric===void 0)throw new TypeError(iZ("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===tUr?e.pinf:a===iUr?e.ninf:a}}nZ.exports=nUr});var sZ=u((F0e,uZ)=>{"use strict";var Ff=j().isPrimitive,aUr=P(),uUr=X(),Mf=d();function sUr(r,e){return t;function t(i,n,a){var s;if(!Ff(i)){if(e.nonnumeric===void 0)throw new TypeError(Mf("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Ff(n)){if(e.nonnumeric===void 0)throw new TypeError(Mf("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!Ff(a)){if(e.nonnumeric===void 0)throw new TypeError(Mf("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return s=r(i,n,a),s!==s?e.nan:s===aUr?e.pinf:s===uUr?e.ninf:s}}uZ.exports=sUr});var vZ=u((M0e,oZ)=>{"use strict";var oUr=K().isPrimitive,vUr=d();function fUr(r){return e;function e(t){if(!oUr(t))throw new TypeError(vUr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}oZ.exports=fUr});var pZ=u((B0e,lZ)=>{"use strict";var fZ=K().isPrimitive,cZ=d();function cUr(r){return e;function e(t,i){if(!fZ(t))throw new TypeError(cZ("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!fZ(i))throw new TypeError(cZ("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}lZ.exports=cUr});var mZ=u((C0e,gZ)=>{"use strict";var Bf=K().isPrimitive,Cf=d();function lUr(r){return e;function e(t,i){if(!Bf(t))throw new TypeError(Cf("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Bf(i))throw new TypeError(Cf("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!Bf(v3))throw new TypeError(Cf("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(v3)));return r(t,i,v3)}}gZ.exports=lUr});var yZ=u((j0e,qZ)=>{"use strict";function pUr(r,e,t,i){var n,a,s,o,f,v,c,l,p,m,y,q,g,h,N,A,G,S,J,sr,k;for(N=e[1],A=e[0],G=r[0],S=r[1],J=r[2],p=t[0],m=t[1],y=t[2],s=p[1],o=p[0]-N*s,f=m[1],v=m[0]-N*f,c=y[1],l=y[0]-N*c,q=0,g=0,h=0,n=[],sr=0;sr<A;sr++){for(a=[],k=0;k<N;k++)a.push(i(G[q],S[g],J[h])),q+=s,g+=f,h+=c;n.push(a),q+=o,g+=v,h+=l}return n}qZ.exports=pUr});var dZ=u((G0e,hZ)=>{"use strict";function gUr(r,e){var t,i,n,a,s;for(t=r.length,i=r[0].length,a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)n[s]=e(n[s]);return r}hZ.exports=gUr});var bZ=u((V0e,wZ)=>{"use strict";var mUr=dZ();function qUr(r,e){return mUr(r,e)}wZ.exports=qUr});var NZ=u((U0e,EZ)=>{"use strict";var Zr={};Zr.binary2d=xQ();Zr.d_d=eZ();Zr.dd_d=aZ();Zr.ddd_d=sZ();Zr.s_o=vZ();Zr.ss_o=pZ();Zr.sss_o=mZ();Zr.ternary2d=yZ();Zr.unary2d=bZ();EZ.exports=Zr});var OZ=u((H0e,AZ)=>{"use strict";var Ut=ap(),Sr,H={};H.ANSCOMBES_QUARTET=r7();H.bartlettTest=FE();H.broadcast=UE();H.cumax=$E().ndarray;H.filled=KE();H.filledBy=aN();H.flattenArray=_a();H.isArray=pr();H.isBoolean=or().isPrimitive;H.isNumber=j().isPrimitive;H.isPositiveNumber=W().isPrimitive;H.isString=K().isPrimitive;H.iterator2array=HO();H.iterSawtoothWave=AS();H.linspace=BT();H.max=DT().ndarray;H.mskmax=xT().ndarray;H.assert={};Sr=mL();Ut(Sr,H.assert);H.blas={};Sr=NL();Ut(Sr,H.blas);Sr=dF();Ut(Sr,H);H.dists={};Sr=DF();Ut(Sr,H.dists);Sr=kB();Ut(Sr,H);H.random={};Sr=ZQ();Ut(Sr,H.random);H.tools={};Sr=NZ();Ut(Sr,H.tools);AZ.exports=H});var hUr=u((W0e,SZ)=>{var yUr=OZ();SZ.exports=yUr});return hUr();})();
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
	return ns.filled( nrows, ncols, 0 );
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
	return ns.filled( nrows, ncols, 1 );
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
	return ns.filled( nrows, ncols, value );
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
