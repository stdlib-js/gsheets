/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var nn=u((MTr,J1)=>{"use strict";function fD(r){return Object.keys(Object(r))}J1.exports=fD});var Y1=u((xTr,z1)=>{"use strict";var lD=nn();function cD(){return(lD(arguments)||"").length!==2}function pD(){return cD(1,2)}z1.exports=pD});var $1=u((BTr,Z1)=>{"use strict";var gD=typeof Object.keys<"u";Z1.exports=gD});var K1=u((CTr,Q1)=>{"use strict";function mD(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}Q1.exports=mD});var ef=u((jTr,rf)=>{"use strict";var qD=K1();rf.exports=qD});var nf=u((VTr,tf)=>{"use strict";var yD=ef(),hD=yD();function dD(){return hD&&typeof Symbol.toStringTag=="symbol"}tf.exports=dD});var Ot=u((GTr,af)=>{"use strict";var wD=nf();af.exports=wD});var Yu=u((UTr,uf)=>{"use strict";var bD=Object.prototype.toString;uf.exports=bD});var of=u((WTr,sf)=>{"use strict";var ED=Yu();function ND(r){return ED.call(r)}sf.exports=ND});var ff=u((HTr,vf)=>{"use strict";var AD=Object.prototype.hasOwnProperty;function OD(r,e){return r==null?!1:AD.call(r,e)}vf.exports=OD});var A=u((kTr,lf)=>{"use strict";var SD=ff();lf.exports=SD});var pf=u((DTr,cf)=>{"use strict";var TD=typeof Symbol=="function"?Symbol.toStringTag:"";cf.exports=TD});var mf=u((XTr,gf)=>{"use strict";var LD=A(),bi=pf(),Zu=Yu();function ID(r){var e,t,i;if(r==null)return Zu.call(r);t=r[bi],e=LD(r,bi);try{r[bi]=void 0}catch{return Zu.call(r)}return i=Zu.call(r),e?r[bi]=t:delete r[bi],i}gf.exports=ID});var Z=u((JTr,qf)=>{"use strict";var PD=Ot(),RD=of(),_D=mf(),$u;PD()?$u=_D:$u=RD;qf.exports=$u});var Qu=u((zTr,yf)=>{"use strict";var FD=Z();function MD(r){return FD(r)==="[object Arguments]"}yf.exports=MD});var wf=u((YTr,df)=>{"use strict";var xD=Qu(),hf;function BD(){return xD(arguments)}hf=BD();df.exports=hf});var Ef=u((ZTr,bf)=>{"use strict";var CD=typeof Object.defineProperty=="function"?Object.defineProperty:null;bf.exports=CD});var Af=u(($Tr,Nf)=>{"use strict";var jD=Ef();function VD(){try{return jD({},"x",{}),!0}catch{return!1}}Nf.exports=VD});var Sf=u((QTr,Of)=>{"use strict";var GD=Object.defineProperty;Of.exports=GD});var Rf=u((KTr,Pf)=>{"use strict";var St=Object.prototype,Tf=St.toString,Lf=St.__defineGetter__,If=St.__defineSetter__,UD=St.__lookupGetter__,WD=St.__lookupSetter__;function HD(r,e,t){var i,n,a,s;if(typeof r!="object"||r===null||Tf.call(r)==="[object Array]")throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if(typeof t!="object"||t===null||Tf.call(t)==="[object Array]")throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if(n="value"in t,n&&(UD.call(r,e)||WD.call(r,e)?(i=r.__proto__,r.__proto__=St,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,s="set"in t,n&&(a||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Lf&&Lf.call(r,e,t.get),s&&If&&If.call(r,e,t.set),r}Pf.exports=HD});var Ee=u((rLr,_f)=>{"use strict";var kD=Af(),DD=Sf(),XD=Rf(),Ku;kD()?Ku=DD:Ku=XD;_f.exports=Ku});var Mf=u((eLr,Ff)=>{"use strict";var JD=Ee();function zD(r,e,t){JD(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}Ff.exports=zD});var w=u((tLr,xf)=>{"use strict";var YD=Mf();xf.exports=YD});var r0=u((iLr,Bf)=>{"use strict";function ZD(r){return typeof r=="string"}Bf.exports=ZD});var jf=u((nLr,Cf)=>{"use strict";var $D=String.prototype.valueOf;Cf.exports=$D});var Gf=u((aLr,Vf)=>{"use strict";var QD=jf();function KD(r){try{return QD.call(r),!0}catch{return!1}}Vf.exports=KD});var e0=u((uLr,Uf)=>{"use strict";var rX=Ot(),eX=Z(),tX=Gf(),iX=rX();function nX(r){return typeof r=="object"?r instanceof String?!0:iX?tX(r):eX(r)==="[object String]":!1}Uf.exports=nX});var Hf=u((sLr,Wf)=>{"use strict";var aX=r0(),uX=e0();function sX(r){return aX(r)||uX(r)}Wf.exports=sX});var D=u((oLr,Df)=>{"use strict";var kf=w(),t0=Hf(),oX=r0(),vX=e0();kf(t0,"isPrimitive",oX);kf(t0,"isObject",vX);Df.exports=t0});var i0=u((vLr,Xf)=>{"use strict";function fX(r){return typeof r=="number"}Xf.exports=fX});var zf=u((fLr,Jf)=>{"use strict";Jf.exports=Number});var an=u((lLr,Yf)=>{"use strict";var lX=zf();Yf.exports=lX});var $f=u((cLr,Zf)=>{"use strict";var cX=an(),pX=cX.prototype.toString;Zf.exports=pX});var Kf=u((pLr,Qf)=>{"use strict";var gX=$f();function mX(r){try{return gX.call(r),!0}catch{return!1}}Qf.exports=mX});var n0=u((gLr,rl)=>{"use strict";var qX=Ot(),yX=Z(),hX=an(),dX=Kf(),wX=qX();function bX(r){return typeof r=="object"?r instanceof hX?!0:wX?dX(r):yX(r)==="[object Number]":!1}rl.exports=bX});var tl=u((mLr,el)=>{"use strict";var EX=i0(),NX=n0();function AX(r){return EX(r)||NX(r)}el.exports=AX});var x=u((qLr,nl)=>{"use strict";var il=w(),a0=tl(),OX=i0(),SX=n0();il(a0,"isPrimitive",OX);il(a0,"isObject",SX);nl.exports=a0});var ul=u((yLr,al)=>{"use strict";function TX(r){return r!==r}al.exports=TX});var b=u((hLr,sl)=>{"use strict";var LX=ul();sl.exports=LX});var u0=u((dLr,ol)=>{"use strict";var IX=x().isPrimitive,PX=b();function RX(r){return IX(r)&&PX(r)}ol.exports=RX});var s0=u((wLr,vl)=>{"use strict";var _X=x().isObject,FX=b();function MX(r){return _X(r)&&FX(r.valueOf())}vl.exports=MX});var ll=u((bLr,fl)=>{"use strict";var xX=u0(),BX=s0();function CX(r){return xX(r)||BX(r)}fl.exports=CX});var tr=u((ELr,pl)=>{"use strict";var cl=w(),o0=ll(),jX=u0(),VX=s0();cl(o0,"isPrimitive",jX);cl(o0,"isObject",VX);pl.exports=o0});var j=u((NLr,gl)=>{"use strict";var GX=Number.POSITIVE_INFINITY;gl.exports=GX});var J=u((ALr,ml)=>{"use strict";var UX=an(),WX=UX.NEGATIVE_INFINITY;ml.exports=WX});var yl=u((OLr,ql)=>{"use strict";var HX=Math.floor;ql.exports=HX});var K=u((SLr,hl)=>{"use strict";var kX=yl();hl.exports=kX});var wl=u((TLr,dl)=>{"use strict";var DX=K();function XX(r){return DX(r)===r}dl.exports=XX});var Ar=u((LLr,bl)=>{"use strict";var JX=wl();bl.exports=JX});var v0=u((ILr,El)=>{"use strict";var zX=j(),YX=J(),ZX=Ar();function $X(r){return r<zX&&r>YX&&ZX(r)}El.exports=$X});var f0=u((PLr,Nl)=>{"use strict";var QX=x().isPrimitive,KX=v0();function rJ(r){return QX(r)&&KX(r)}Nl.exports=rJ});var l0=u((RLr,Al)=>{"use strict";var eJ=x().isObject,tJ=v0();function iJ(r){return eJ(r)&&tJ(r.valueOf())}Al.exports=iJ});var Sl=u((_Lr,Ol)=>{"use strict";var nJ=f0(),aJ=l0();function uJ(r){return nJ(r)||aJ(r)}Ol.exports=uJ});var Rr=u((FLr,Ll)=>{"use strict";var Tl=w(),c0=Sl(),sJ=f0(),oJ=l0();Tl(c0,"isPrimitive",sJ);Tl(c0,"isObject",oJ);Ll.exports=c0});var p0=u((MLr,Il)=>{"use strict";var vJ=Object.prototype.propertyIsEnumerable;Il.exports=vJ});var _l=u((xLr,Rl)=>{"use strict";var fJ=p0(),Pl;function lJ(){return!fJ.call("beep","0")}Pl=lJ();Rl.exports=Pl});var Ml=u((BLr,Fl)=>{"use strict";var cJ=D(),pJ=tr().isPrimitive,gJ=Rr().isPrimitive,mJ=p0(),qJ=_l();function yJ(r,e){var t;return r==null?!1:(t=mJ.call(r,e),!t&&qJ&&cJ(r)?(e=+e,!pJ(e)&&gJ(e)&&e>=0&&e<r.length):t)}Fl.exports=yJ});var un=u((CLr,xl)=>{"use strict";var hJ=Ml();xl.exports=hJ});var Cl=u((jLr,Bl)=>{"use strict";var dJ=Z(),g0;function wJ(r){return dJ(r)==="[object Array]"}Array.isArray?g0=Array.isArray:g0=wJ;Bl.exports=g0});var fr=u((VLr,jl)=>{"use strict";var bJ=Cl();jl.exports=bJ});var Tt=u((GLr,Vl)=>{"use strict";var EJ=4294967295;Vl.exports=EJ});var Ul=u((ULr,Gl)=>{"use strict";var NJ=A(),AJ=un(),OJ=fr(),SJ=Ar(),TJ=Tt();function LJ(r){return r!==null&&typeof r=="object"&&!OJ(r)&&typeof r.length=="number"&&SJ(r.length)&&r.length>=0&&r.length<=TJ&&NJ(r,"callee")&&!AJ(r,"callee")}Gl.exports=LJ});var q0=u((WLr,Wl)=>{"use strict";var IJ=wf(),PJ=Qu(),RJ=Ul(),m0;IJ?m0=PJ:m0=RJ;Wl.exports=m0});var Dl=u((HLr,kl)=>{"use strict";var _J=q0(),Hl=nn(),FJ=Array.prototype.slice;function MJ(r){return _J(r)?Hl(FJ.call(r)):Hl(r)}kl.exports=MJ});var Jl=u((kLr,Xl)=>{"use strict";var xJ=fr();function BJ(r){if(typeof r!="function")throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return e;function e(t){var i,n;if(!xJ(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}Xl.exports=BJ});var Yl=u((DLr,zl)=>{"use strict";var CJ=Jl();zl.exports=CJ});var $l=u((XLr,Zl)=>{"use strict";function jJ(r){return r!==null&&typeof r=="object"}Zl.exports=jJ});var h0=u((JLr,Ql)=>{"use strict";var VJ=w(),GJ=Yl(),y0=$l(),UJ=GJ(y0);VJ(y0,"isObjectLikeArray",UJ);Ql.exports=y0});var r2=u((zLr,Kl)=>{"use strict";function WJ(){}Kl.exports=WJ});var M=u((YLr,e2)=>{"use strict";var HJ=r2();e2.exports=HJ});var i2=u((ZLr,t2)=>{"use strict";var kJ=un(),DJ=M(),XJ=kJ(DJ,"prototype");t2.exports=XJ});var a2=u(($Lr,n2)=>{"use strict";var JJ=un(),zJ={toString:null},YJ=!JJ(zJ,"toString");n2.exports=YJ});var s2=u((QLr,u2)=>{"use strict";var ZJ=9007199254740991;u2.exports=ZJ});var v2=u((KLr,o2)=>{"use strict";var $J=Ar(),QJ=s2();function KJ(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&$J(r.length)&&r.length>=0&&r.length<=QJ}o2.exports=KJ});var _r=u((rIr,f2)=>{"use strict";var rz=v2();f2.exports=rz});var p2=u((eIr,c2)=>{"use strict";var l2=tr(),ez=_r(),tz=D().isPrimitive,iz=Rr().isPrimitive;function nz(r,e,t){var i,n;if(!ez(r)&&!tz(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(i=r.length,i===0)return-1;if(arguments.length===3){if(!iz(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(l2(e)){for(;n<i;n++)if(l2(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}c2.exports=nz});var sn=u((tIr,g2)=>{"use strict";var az=p2();g2.exports=az});var q2=u((iIr,m2)=>{"use strict";var uz=/./;m2.exports=uz});var d0=u((nIr,y2)=>{"use strict";function sz(r){return typeof r=="boolean"}y2.exports=sz});var d2=u((aIr,h2)=>{"use strict";var oz=Boolean.prototype.toString;h2.exports=oz});var b2=u((uIr,w2)=>{"use strict";var vz=d2();function fz(r){try{return vz.call(r),!0}catch{return!1}}w2.exports=fz});var w0=u((sIr,E2)=>{"use strict";var lz=Ot(),cz=Z(),pz=b2(),gz=lz();function mz(r){return typeof r=="object"?r instanceof Boolean?!0:gz?pz(r):cz(r)==="[object Boolean]":!1}E2.exports=mz});var A2=u((oIr,N2)=>{"use strict";var qz=d0(),yz=w0();function hz(r){return qz(r)||yz(r)}N2.exports=hz});var ar=u((vIr,S2)=>{"use strict";var O2=w(),b0=A2(),dz=d0(),wz=w0();O2(b0,"isPrimitive",dz);O2(b0,"isObject",wz);S2.exports=b0});var L2=u((fIr,T2)=>{"use strict";function bz(){return new Function("return this;")()}T2.exports=bz});var P2=u((lIr,I2)=>{"use strict";var Ez=typeof self=="object"?self:null;I2.exports=Ez});var _2=u((cIr,R2)=>{"use strict";var Nz=typeof window=="object"?window:null;R2.exports=Nz});var M2=u((pIr,F2)=>{"use strict";var Az=typeof global=="object"?global:null;F2.exports=Az});var V2=u((gIr,j2)=>{"use strict";var Oz=ar().isPrimitive,Sz=L2(),x2=P2(),B2=_2(),C2=M2();function Tz(r){if(arguments.length){if(!Oz(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Sz()}if(x2)return x2;if(B2)return B2;if(C2)return C2;throw new Error("unexpected error. Unable to resolve global object.")}j2.exports=Tz});var U2=u((mIr,G2)=>{"use strict";var Lz=V2();G2.exports=Lz});var k2=u((qIr,H2)=>{"use strict";var Iz=U2(),W2=Iz(),Pz=W2.document&&W2.document.childNodes;H2.exports=Pz});var X2=u((yIr,D2)=>{"use strict";var Rz=Int8Array;D2.exports=Rz});var z2=u((hIr,J2)=>{"use strict";var _z=q2(),Fz=k2(),Mz=X2();function xz(){return typeof _z=="function"||typeof Mz=="object"||typeof Fz=="function"}J2.exports=xz});var E0=u((dIr,Y2)=>{"use strict";function Bz(){return/^\s*function\s*([^(]*)/i}Y2.exports=Bz});var $2=u((wIr,Z2)=>{"use strict";var Cz=E0(),jz=Cz();Z2.exports=jz});var N0=u((bIr,K2)=>{"use strict";var Vz=w(),Q2=E0(),Gz=$2();Vz(Q2,"REGEXP",Gz);K2.exports=Q2});var ec=u((EIr,rc)=>{"use strict";var Uz=h0();function Wz(r){return Uz(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}rc.exports=Wz});var nt=u((NIr,tc)=>{"use strict";var Hz=ec();tc.exports=Hz});var nc=u((AIr,ic)=>{"use strict";var kz=Z(),Dz=N0().REGEXP,Xz=nt();function Jz(r){var e,t,i;if(t=kz(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=Dz.exec(i.toString()),e)return e[1]}return Xz(r)?"Buffer":t}ic.exports=Jz});var Ne=u((OIr,ac)=>{"use strict";var zz=nc();ac.exports=zz});var sc=u((SIr,uc)=>{"use strict";var Yz=Ne();function Zz(r){var e;return r===null?"null":(e=typeof r,e==="object"?Yz(r).toLowerCase():e)}uc.exports=Zz});var vc=u((TIr,oc)=>{"use strict";var $z=Ne();function Qz(r){return $z(r).toLowerCase()}oc.exports=Qz});var on=u((LIr,fc)=>{"use strict";var Kz=z2(),rY=sc(),eY=vc(),tY=Kz()?eY:rY;fc.exports=tY});var A0=u((IIr,lc)=>{"use strict";function iY(r){return r.constructor&&r.constructor.prototype===r}lc.exports=iY});var cc=u((PIr,nY)=>{nY.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var gc=u((RIr,pc)=>{"use strict";var aY=typeof window>"u"?void 0:window;pc.exports=aY});var hc=u((_Ir,yc)=>{"use strict";var uY=A(),sY=sn(),mc=on(),oY=A0(),vY=cc(),Lt=gc(),qc;function fY(){var r;if(mc(Lt)==="undefined")return!1;for(r in Lt)try{sY(vY,r)===-1&&uY(Lt,r)&&Lt[r]!==null&&mc(Lt[r])==="object"&&oY(Lt[r])}catch{return!0}return!1}qc=fY();yc.exports=qc});var wc=u((FIr,dc)=>{"use strict";var lY=typeof window<"u";dc.exports=lY});var Nc=u((MIr,Ec)=>{"use strict";var cY=hc(),bc=A0(),pY=wc();function gY(r){if(pY===!1&&!cY)return bc(r);try{return bc(r)}catch{return!1}}Ec.exports=gY});var Ac=u((xIr,mY)=>{mY.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Tc=u((BIr,Sc)=>{"use strict";var qY=h0(),O0=A(),yY=q0(),hY=i2(),dY=a2(),wY=Nc(),Oc=Ac();function bY(r){var e,t,i,n,a,s,o;if(n=[],yY(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!O0(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!qY(r))return n;t=hY&&i}for(a in r)!(t&&a==="prototype")&&O0(r,a)&&n.push(String(a));if(dY)for(e=wY(r),o=0;o<Oc.length;o++)s=Oc[o],!(e&&s==="constructor")&&O0(r,s)&&n.push(String(s));return n}Sc.exports=bY});var Ic=u((CIr,Lc)=>{"use strict";var EY=Y1(),NY=$1(),AY=nn(),OY=Dl(),SY=Tc(),vn;NY?EY()?vn=OY:vn=AY:vn=SY;Lc.exports=vn});var Ei=u((jIr,Pc)=>{"use strict";var TY=Ic();Pc.exports=TY});var S0=u((VIr,Rc)=>{"use strict";function LY(r){return typeof r=="number"}Rc.exports=LY});var T0=u((GIr,Fc)=>{"use strict";function IY(r){return r[0]==="-"}function _c(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function PY(r,e,t){var i=!1,n=e-r.length;return n<0||(IY(r)&&(i=!0,r=r.substr(1)),r=t?r+_c(n):_c(n)+r,i&&(r="-"+r)),r}Fc.exports=PY});var Cc=u((UIr,Bc)=>{"use strict";var RY=S0(),Mc=T0(),_Y=String.prototype.toLowerCase,xc=String.prototype.toUpperCase;function FY(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!RY(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Mc(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=Mc(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===xc.call(r.specifier)?xc.call(t):_Y.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Bc.exports=FY});var Vc=u((WIr,jc)=>{"use strict";function MY(r){return typeof r=="string"}jc.exports=MY});var Wc=u((HIr,Uc)=>{"use strict";var xY=S0(),BY=Math.abs,CY=String.prototype.toLowerCase,Gc=String.prototype.toUpperCase,at=String.prototype.replace,jY=/e\+(\d)$/,VY=/e-(\d)$/,GY=/^(\d+)$/,UY=/^(\d+)e/,WY=/\.0$/,HY=/\.0*e/,kY=/(\..*[^0])0*e/;function DY(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!xY(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":BY(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=at.call(t,kY,"$1e"),t=at.call(t,HY,"e"),t=at.call(t,WY,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=at.call(t,jY,"e+0$1"),t=at.call(t,VY,"e-0$1"),r.alternate&&(t=at.call(t,GY,"$1."),t=at.call(t,UY,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Gc.call(r.specifier)?Gc.call(t):CY.call(t),t}Uc.exports=DY});var Dc=u((kIr,kc)=>{"use strict";function Hc(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function XY(r,e,t){var i=e-r.length;return i<0||(r=t?r+Hc(i):Hc(i)+r),r}kc.exports=XY});var Jc=u((DIr,Xc)=>{"use strict";var JY=Cc(),zY=Vc(),YY=Wc(),ZY=Dc(),$Y=T0(),QY=String.fromCharCode,fn=isNaN,KY=Array.isArray;function rZ(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function eZ(r){var e,t,i,n,a,s,o,v,f;if(!KY(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",o=1,v=0;v<r.length;v++)if(i=r[v],zY(i))s+=i;else{if(e=i.precision!==void 0,i=rZ(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,fn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,fn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=JY(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!fn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=fn(a)?String(i.arg):QY(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=YY(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=$Y(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=ZY(i.arg,i.width,i.padRight)),s+=i.arg||"",o+=1}return s}Xc.exports=eZ});var Yc=u((XIr,zc)=>{"use strict";var tZ=Jc();zc.exports=tZ});var $c=u((JIr,Zc)=>{"use strict";var ln=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function iZ(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function nZ(r){var e,t,i,n;for(t=[],n=0,i=ln.exec(r);i;)e=r.slice(n,ln.lastIndex-i[0].length),e.length&&t.push(e),t.push(iZ(i)),n=ln.lastIndex,i=ln.exec(r);return e=r.slice(n),e.length&&t.push(e),t}Zc.exports=nZ});var Kc=u((zIr,Qc)=>{"use strict";var aZ=$c();Qc.exports=aZ});var ep=u((YIr,rp)=>{"use strict";function uZ(r){return typeof r=="string"}rp.exports=uZ});var np=u((ZIr,ip)=>{"use strict";var sZ=Yc(),oZ=Kc(),vZ=ep();function tp(r){var e,t,i;if(!vZ(r))throw new TypeError(tp("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=oZ(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return sZ.apply(null,t)}ip.exports=tp});var T=u(($Ir,ap)=>{"use strict";var fZ=np();ap.exports=fZ});var sp=u((QIr,up)=>{"use strict";var lZ=Ei(),cZ=A(),pZ=T();function gZ(r,e){var t,i,n;for(t=lZ(r),n=0;n<t.length;n++){if(i=t[n],cZ(e,i))throw new Error(pZ("unexpected error. Property already exists on destination object. Property: %s.",i));e[i]=r[i]}return e}up.exports=gZ});var L0=u((KIr,op)=>{"use strict";var mZ=Rr().isPrimitive;function qZ(r){return mZ(r)&&r>=0}op.exports=qZ});var I0=u((rPr,vp)=>{"use strict";var yZ=Rr().isObject;function hZ(r){return yZ(r)&&r.valueOf()>=0}vp.exports=hZ});var lp=u((ePr,fp)=>{"use strict";var dZ=L0(),wZ=I0();function bZ(r){return dZ(r)||wZ(r)}fp.exports=bZ});var Ae=u((tPr,pp)=>{"use strict";var cp=w(),P0=lp(),EZ=L0(),NZ=I0();cp(P0,"isPrimitive",EZ);cp(P0,"isObject",NZ);pp.exports=P0});var mp=u((iPr,gp)=>{"use strict";var AZ=on();function OZ(r){return AZ(r)==="function"}gp.exports=OZ});var L=u((nPr,qp)=>{"use strict";var SZ=mp();qp.exports=SZ});var hp=u((aPr,yp)=>{"use strict";var TZ=Object.getPrototypeOf;yp.exports=TZ});var wp=u((uPr,dp)=>{"use strict";function LZ(r){return r.__proto__}dp.exports=LZ});var Ep=u((sPr,bp)=>{"use strict";var IZ=Z(),PZ=wp();function RZ(r){var e=PZ(r);return e||e===null?e:IZ(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}bp.exports=RZ});var Ap=u((oPr,Np)=>{"use strict";var _Z=L(),FZ=hp(),MZ=Ep(),R0;_Z(Object.getPrototypeOf)?R0=FZ:R0=MZ;Np.exports=R0});var Sp=u((vPr,Op)=>{"use strict";var xZ=Ap();function BZ(r){return r==null?null:(r=Object(r),xZ(r))}Op.exports=BZ});var ut=u((fPr,Tp)=>{"use strict";var CZ=Sp();Tp.exports=CZ});var Ip=u((lPr,Lp)=>{"use strict";var jZ=ut(),VZ=Z();function GZ(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(VZ(r)==="[object Error]")return!0;r=jZ(r)}return!1}Lp.exports=GZ});var Rp=u((cPr,Pp)=>{"use strict";var UZ=Ip();Pp.exports=UZ});var _0=u((pPr,_p)=>{"use strict";function WZ(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}_p.exports=WZ});var Mp=u((gPr,Fp)=>{"use strict";var HZ=_0(),kZ=HZ();Fp.exports=kZ});var Cp=u((mPr,Bp)=>{"use strict";var DZ=w(),xp=_0(),XZ=Mp();DZ(xp,"REGEXP",XZ);Bp.exports=xp});var Vp=u((qPr,jp)=>{"use strict";var JZ=D().isPrimitive,zZ=Cp(),YZ=T();function ZZ(r){if(!JZ(r))throw new TypeError(YZ("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=zZ().exec(r),r?new RegExp(r[1],r[2]):null}jp.exports=ZZ});var Up=u((yPr,Gp)=>{"use strict";var $Z=Vp();Gp.exports=$Z});var Hp=u((hPr,Wp)=>{"use strict";var QZ=typeof Object.getOwnPropertyNames<"u";Wp.exports=QZ});var Dp=u((dPr,kp)=>{"use strict";var KZ=Object.getOwnPropertyNames;function r$(r){return KZ(Object(r))}kp.exports=r$});var Jp=u((wPr,Xp)=>{"use strict";var e$=Ei();function t$(r){return e$(Object(r))}Xp.exports=t$});var Yp=u((bPr,zp)=>{"use strict";var i$=Hp(),n$=Dp(),a$=Jp(),F0;i$?F0=n$:F0=a$;zp.exports=F0});var $p=u((EPr,Zp)=>{"use strict";var u$=typeof Object.getOwnPropertyDescriptor<"u";Zp.exports=u$});var Kp=u((NPr,Qp)=>{"use strict";var s$=Object.getOwnPropertyDescriptor;function o$(r,e){var t;return r==null?null:(t=s$(r,e),t===void 0?null:t)}Qp.exports=o$});var e3=u((APr,r3)=>{"use strict";var v$=A();function f$(r,e){return v$(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}r3.exports=f$});var i3=u((OPr,t3)=>{"use strict";var l$=$p(),c$=Kp(),p$=e3(),M0;l$?M0=c$:M0=p$;t3.exports=M0});var a3=u((SPr,n3)=>{"use strict";var g$=typeof Buffer=="function"?Buffer:null;n3.exports=g$});var s3=u((TPr,u3)=>{"use strict";var m$=nt(),cn=a3();function q$(){var r,e;if(typeof cn!="function")return!1;try{typeof cn.from=="function"?e=cn.from([1,2,3,4]):e=new cn([1,2,3,4]),r=m$(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}u3.exports=q$});var f3=u((LPr,o3)=>{"use strict";var y$=s3();o3.exports=y$});var p3=u(pn=>{"use strict";pn.byteLength=d$;pn.toByteArray=b$;pn.fromByteArray=A$;var jr=[],Tr=[],h$=typeof Uint8Array<"u"?Uint8Array:Array,x0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(st=0,l3=x0.length;st<l3;++st)jr[st]=x0[st],Tr[x0.charCodeAt(st)]=st;var st,l3;Tr["-".charCodeAt(0)]=62;Tr["_".charCodeAt(0)]=63;function c3(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function d$(r){var e=c3(r),t=e[0],i=e[1];return(t+i)*3/4-i}function w$(r,e,t){return(e+t)*3/4-t}function b$(r){var e,t=c3(r),i=t[0],n=t[1],a=new h$(w$(r,i,n)),s=0,o=n>0?i-4:i,v;for(v=0;v<o;v+=4)e=Tr[r.charCodeAt(v)]<<18|Tr[r.charCodeAt(v+1)]<<12|Tr[r.charCodeAt(v+2)]<<6|Tr[r.charCodeAt(v+3)],a[s++]=e>>16&255,a[s++]=e>>8&255,a[s++]=e&255;return n===2&&(e=Tr[r.charCodeAt(v)]<<2|Tr[r.charCodeAt(v+1)]>>4,a[s++]=e&255),n===1&&(e=Tr[r.charCodeAt(v)]<<10|Tr[r.charCodeAt(v+1)]<<4|Tr[r.charCodeAt(v+2)]>>2,a[s++]=e>>8&255,a[s++]=e&255),a}function E$(r){return jr[r>>18&63]+jr[r>>12&63]+jr[r>>6&63]+jr[r&63]}function N$(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(E$(i));return n.join("")}function A$(r){for(var e,t=r.length,i=t%3,n=[],a=16383,s=0,o=t-i;s<o;s+=a)n.push(N$(r,s,s+a>o?o:s+a));return i===1?(e=r[t-1],n.push(jr[e>>2]+jr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(jr[e>>10]+jr[e>>4&63]+jr[e<<2&63]+"=")),n.join("")}});var g3=u(B0=>{B0.read=function(r,e,t,i,n){var a,s,o=n*8-i-1,v=(1<<o)-1,f=v>>1,l=-7,c=t?n-1:0,p=t?-1:1,q=r[e+c];for(c+=p,a=q&(1<<-l)-1,q>>=-l,l+=o;l>0;a=a*256+r[e+c],c+=p,l-=8);for(s=a&(1<<-l)-1,a>>=-l,l+=i;l>0;s=s*256+r[e+c],c+=p,l-=8);if(a===0)a=1-f;else{if(a===v)return s?NaN:(q?-1:1)*(1/0);s=s+Math.pow(2,i),a=a-f}return(q?-1:1)*s*Math.pow(2,a-i)};B0.write=function(r,e,t,i,n,a){var s,o,v,f=a*8-n-1,l=(1<<f)-1,c=l>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,q=i?0:a-1,y=i?1:-1,m=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-s))<1&&(s--,v*=2),s+c>=1?e+=p/v:e+=p*Math.pow(2,1-c),e*v>=2&&(s++,v/=2),s+c>=l?(o=0,s=l):s+c>=1?(o=(e*v-1)*Math.pow(2,n),s=s+c):(o=e*Math.pow(2,c-1)*Math.pow(2,n),s=0));n>=8;r[t+q]=o&255,q+=y,o/=256,n-=8);for(s=s<<n|o,f+=n;f>0;r[t+q]=s&255,q+=y,s/=256,f-=8);r[t+q-y]|=m*128}});var T3=u(Pt=>{"use strict";var C0=p3(),It=g3(),m3=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Pt.Buffer=d;Pt.SlowBuffer=P$;Pt.INSPECT_MAX_BYTES=50;var gn=2147483647;Pt.kMaxLength=gn;d.TYPED_ARRAY_SUPPORT=O$();!d.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function O$(){try{var r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function Hr(r){if(r>gn)throw new RangeError('The value "'+r+'" is invalid for option "size"');var e=new Uint8Array(r);return Object.setPrototypeOf(e,d.prototype),e}function d(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return U0(r)}return h3(r,e,t)}d.poolSize=8192;function h3(r,e,t){if(typeof r=="string")return T$(r,e);if(ArrayBuffer.isView(r))return L$(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Vr(r,ArrayBuffer)||r&&Vr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Vr(r,SharedArrayBuffer)||r&&Vr(r.buffer,SharedArrayBuffer)))return V0(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return d.from(i,e,t);var n=I$(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return d.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}d.from=function(r,e,t){return h3(r,e,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function d3(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function S$(r,e,t){return d3(r),r<=0?Hr(r):e!==void 0?typeof t=="string"?Hr(r).fill(e,t):Hr(r).fill(e):Hr(r)}d.alloc=function(r,e,t){return S$(r,e,t)};function U0(r){return d3(r),Hr(r<0?0:W0(r)|0)}d.allocUnsafe=function(r){return U0(r)};d.allocUnsafeSlow=function(r){return U0(r)};function T$(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!d.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var t=w3(r,e)|0,i=Hr(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function j0(r){for(var e=r.length<0?0:W0(r.length)|0,t=Hr(e),i=0;i<e;i+=1)t[i]=r[i]&255;return t}function L$(r){if(Vr(r,Uint8Array)){var e=new Uint8Array(r);return V0(e.buffer,e.byteOffset,e.byteLength)}return j0(r)}function V0(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');var i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,d.prototype),i}function I$(r){if(d.isBuffer(r)){var e=W0(r.length)|0,t=Hr(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||H0(r.length)?Hr(0):j0(r);if(r.type==="Buffer"&&Array.isArray(r.data))return j0(r.data)}function W0(r){if(r>=gn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+gn.toString(16)+" bytes");return r|0}function P$(r){return+r!=r&&(r=0),d.alloc(+r)}d.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==d.prototype};d.compare=function(e,t){if(Vr(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),Vr(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var i=e.length,n=t.length,a=0,s=Math.min(i,n);a<s;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};d.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return d.alloc(0);var i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;var n=d.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){var s=e[i];if(Vr(s,Uint8Array))a+s.length>n.length?d.from(s).copy(n,a):Uint8Array.prototype.set.call(n,s,a);else if(d.isBuffer(s))s.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return n};function w3(r,e){if(d.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Vr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);var t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return G0(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return S3(r).length;default:if(n)return i?-1:G0(r).length;e=(""+e).toLowerCase(),n=!0}}d.byteLength=w3;function R$(r,e,t){var i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return U$(this,e,t);case"utf8":case"utf-8":return E3(this,e,t);case"ascii":return V$(this,e,t);case"latin1":case"binary":return G$(this,e,t);case"base64":return C$(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return W$(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}d.prototype._isBuffer=!0;function ot(r,e,t){var i=r[e];r[e]=r[t],r[t]=i}d.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)ot(this,t,t+1);return this};d.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)ot(this,t,t+3),ot(this,t+1,t+2);return this};d.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)ot(this,t,t+7),ot(this,t+1,t+6),ot(this,t+2,t+5),ot(this,t+3,t+4);return this};d.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?E3(this,0,e):R$.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(e){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:d.compare(this,e)===0};d.prototype.inspect=function(){var e="",t=Pt.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};m3&&(d.prototype[m3]=d.prototype.inspect);d.prototype.compare=function(e,t,i,n,a){if(Vr(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;for(var s=a-n,o=i-t,v=Math.min(s,o),f=this.slice(n,a),l=e.slice(t,i),c=0;c<v;++c)if(f[c]!==l[c]){s=f[c],o=l[c];break}return s<o?-1:o<s?1:0};function b3(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,H0(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=d.from(e,i)),d.isBuffer(e))return e.length===0?-1:q3(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):q3(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function q3(r,e,t,i,n){var a=1,s=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,s/=2,o/=2,t/=2}function v(q,y){return a===1?q[y]:q.readUInt16BE(y*a)}var f;if(n){var l=-1;for(f=t;f<s;f++)if(v(r,f)===v(e,l===-1?0:f-l)){if(l===-1&&(l=f),f-l+1===o)return l*a}else l!==-1&&(f-=f-l),l=-1}else for(t+o>s&&(t=s-o),f=t;f>=0;f--){for(var c=!0,p=0;p<o;p++)if(v(r,f+p)!==v(e,p)){c=!1;break}if(c)return f}return-1}d.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};d.prototype.indexOf=function(e,t,i){return b3(this,e,t,i,!0)};d.prototype.lastIndexOf=function(e,t,i){return b3(this,e,t,i,!1)};function _$(r,e,t,i){t=Number(t)||0;var n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;var a=e.length;i>a/2&&(i=a/2);for(var s=0;s<i;++s){var o=parseInt(e.substr(s*2,2),16);if(H0(o))return s;r[t+s]=o}return s}function F$(r,e,t,i){return mn(G0(e,r.length-t),r,t,i)}function M$(r,e,t,i){return mn(D$(e),r,t,i)}function x$(r,e,t,i){return mn(S3(e),r,t,i)}function B$(r,e,t,i){return mn(X$(e,r.length-t),r,t,i)}d.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return _$(this,e,t,i);case"utf8":case"utf-8":return F$(this,e,t,i);case"ascii":case"latin1":case"binary":return M$(this,e,t,i);case"base64":return x$(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return B$(this,e,t,i);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function C$(r,e,t){return e===0&&t===r.length?C0.fromByteArray(r):C0.fromByteArray(r.slice(e,t))}function E3(r,e,t){t=Math.min(r.length,t);for(var i=[],n=e;n<t;){var a=r[n],s=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){var v,f,l,c;switch(o){case 1:a<128&&(s=a);break;case 2:v=r[n+1],(v&192)===128&&(c=(a&31)<<6|v&63,c>127&&(s=c));break;case 3:v=r[n+1],f=r[n+2],(v&192)===128&&(f&192)===128&&(c=(a&15)<<12|(v&63)<<6|f&63,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:v=r[n+1],f=r[n+2],l=r[n+3],(v&192)===128&&(f&192)===128&&(l&192)===128&&(c=(a&15)<<18|(v&63)<<12|(f&63)<<6|l&63,c>65535&&c<1114112&&(s=c))}}s===null?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|s&1023),i.push(s),n+=o}return j$(i)}var y3=4096;function j$(r){var e=r.length;if(e<=y3)return String.fromCharCode.apply(String,r);for(var t="",i=0;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=y3));return t}function V$(r,e,t){var i="";t=Math.min(r.length,t);for(var n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function G$(r,e,t){var i="";t=Math.min(r.length,t);for(var n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function U$(r,e,t){var i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);for(var n="",a=e;a<t;++a)n+=J$[r[a]];return n}function W$(r,e,t){for(var i=r.slice(e,t),n="",a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}d.prototype.slice=function(e,t){var i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,d.prototype),n};function ir(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ir(e,t,this.length);for(var n=this[e],a=1,s=0;++s<t&&(a*=256);)n+=this[e+s]*a;return n};d.prototype.readUintBE=d.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ir(e,t,this.length);for(var n=this[e+--t],a=1;t>0&&(a*=256);)n+=this[e+--t]*a;return n};d.prototype.readUint8=d.prototype.readUInt8=function(e,t){return e=e>>>0,t||ir(e,1,this.length),this[e]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ir(e,2,this.length),this[e]|this[e+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ir(e,2,this.length),this[e]<<8|this[e+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};d.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ir(e,t,this.length);for(var n=this[e],a=1,s=0;++s<t&&(a*=256);)n+=this[e+s]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};d.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ir(e,t,this.length);for(var n=t,a=1,s=this[e+--n];n>0&&(a*=256);)s+=this[e+--n]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*t)),s};d.prototype.readInt8=function(e,t){return e=e>>>0,t||ir(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};d.prototype.readInt16LE=function(e,t){e=e>>>0,t||ir(e,2,this.length);var i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};d.prototype.readInt16BE=function(e,t){e=e>>>0,t||ir(e,2,this.length);var i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};d.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};d.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};d.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),It.read(this,e,!0,23,4)};d.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),It.read(this,e,!1,23,4)};d.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ir(e,8,this.length),It.read(this,e,!0,52,8)};d.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ir(e,8,this.length),It.read(this,e,!1,52,8)};function pr(r,e,t,i,n,a){if(!d.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){var a=Math.pow(2,8*i)-1;pr(this,e,t,i,a,0)}var s=1,o=0;for(this[t]=e&255;++o<i&&(s*=256);)this[t+o]=e/s&255;return t+i};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){var a=Math.pow(2,8*i)-1;pr(this,e,t,i,a,0)}var s=i-1,o=1;for(this[t+s]=e&255;--s>=0&&(o*=256);)this[t+s]=e/o&255;return t+i};d.prototype.writeUint8=d.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,1,255,0),this[t]=e&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};d.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){var a=Math.pow(2,8*i-1);pr(this,e,t,i,a-1,-a)}var s=0,o=1,v=0;for(this[t]=e&255;++s<i&&(o*=256);)e<0&&v===0&&this[t+s-1]!==0&&(v=1),this[t+s]=(e/o>>0)-v&255;return t+i};d.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){var a=Math.pow(2,8*i-1);pr(this,e,t,i,a-1,-a)}var s=i-1,o=1,v=0;for(this[t+s]=e&255;--s>=0&&(o*=256);)e<0&&v===0&&this[t+s+1]!==0&&(v=1),this[t+s]=(e/o>>0)-v&255;return t+i};d.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};d.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};d.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};d.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};d.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function N3(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function A3(r,e,t,i,n){return e=+e,t=t>>>0,n||N3(r,e,t,4,34028234663852886e22,-34028234663852886e22),It.write(r,e,t,i,23,4),t+4}d.prototype.writeFloatLE=function(e,t,i){return A3(this,e,t,!0,i)};d.prototype.writeFloatBE=function(e,t,i){return A3(this,e,t,!1,i)};function O3(r,e,t,i,n){return e=+e,t=t>>>0,n||N3(r,e,t,8,17976931348623157e292,-17976931348623157e292),It.write(r,e,t,i,52,8),t+8}d.prototype.writeDoubleLE=function(e,t,i){return O3(this,e,t,!0,i)};d.prototype.writeDoubleBE=function(e,t,i){return O3(this,e,t,!1,i)};d.prototype.copy=function(e,t,i,n){if(!d.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);var a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};d.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!d.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var a=e.charCodeAt(0);(n==="utf8"&&a<128||n==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<i;++s)this[s]=e;else{var o=d.isBuffer(e)?e:d.from(e,n),v=o.length;if(v===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<i-t;++s)this[s+t]=o[s%v]}return this};var H$=/[^+/0-9A-Za-z-_]/g;function k$(r){if(r=r.split("=")[0],r=r.trim().replace(H$,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function G0(r,e){e=e||1/0;for(var t,i=r.length,n=null,a=[],s=0;s<i;++s){if(t=r.charCodeAt(s),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(s+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function D$(r){for(var e=[],t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function X$(r,e){for(var t,i,n,a=[],s=0;s<r.length&&!((e-=2)<0);++s)t=r.charCodeAt(s),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function S3(r){return C0.toByteArray(k$(r))}function mn(r,e,t,i){for(var n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function Vr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function H0(r){return r!==r}var J$=function(){for(var r="0123456789abcdef",e=new Array(256),t=0;t<16;++t)for(var i=t*16,n=0;n<16;++n)e[i+n]=r[t]+r[n];return e}()});var I3=u((_Pr,L3)=>{"use strict";var z$=T3().Buffer;L3.exports=z$});var R3=u((FPr,P3)=>{"use strict";function Y$(){throw new Error("not implemented")}P3.exports=Y$});var qn=u((MPr,_3)=>{"use strict";var Z$=f3(),$$=I3(),Q$=R3(),k0;Z$()?k0=$$:k0=Q$;_3.exports=k0});var M3=u((xPr,F3)=>{"use strict";var K$=L(),rQ=qn(),eQ=K$(rQ.from);F3.exports=eQ});var B3=u((BPr,x3)=>{"use strict";var tQ=nt(),iQ=qn();function nQ(r){if(!tQ(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return iQ.from(r)}x3.exports=nQ});var j3=u((CPr,C3)=>{"use strict";var aQ=nt(),uQ=qn();function sQ(r){if(!aQ(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new uQ(r)}C3.exports=sQ});var G3=u((jPr,V3)=>{"use strict";var oQ=M3(),vQ=B3(),fQ=j3(),D0;oQ?D0=vQ:D0=fQ;V3.exports=D0});var W3=u((VPr,U3)=>{"use strict";var lQ=Z(),cQ=typeof Int8Array=="function";function pQ(r){return cQ&&r instanceof Int8Array||lQ(r)==="[object Int8Array]"}U3.exports=pQ});var k3=u((GPr,H3)=>{"use strict";var gQ=W3();H3.exports=gQ});var X3=u((UPr,D3)=>{"use strict";var mQ=127;D3.exports=mQ});var z3=u((WPr,J3)=>{"use strict";var qQ=-128;J3.exports=qQ});var Z3=u((HPr,Y3)=>{"use strict";var yQ=typeof Int8Array=="function"?Int8Array:null;Y3.exports=yQ});var K3=u((kPr,Q3)=>{"use strict";var hQ=k3(),dQ=X3(),wQ=z3(),$3=Z3();function bQ(){var r,e;if(typeof $3!="function")return!1;try{e=new $3([1,3.14,-3.14,dQ+1]),r=hQ(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===wQ}catch{r=!1}return r}Q3.exports=bQ});var e6=u((DPr,r6)=>{"use strict";var EQ=K3();r6.exports=EQ});var i6=u((XPr,t6)=>{"use strict";var NQ=typeof Int8Array=="function"?Int8Array:void 0;t6.exports=NQ});var a6=u((JPr,n6)=>{"use strict";function AQ(){throw new Error("not implemented")}n6.exports=AQ});var Ni=u((zPr,u6)=>{"use strict";var OQ=e6(),SQ=i6(),TQ=a6(),X0;OQ()?X0=SQ:X0=TQ;u6.exports=X0});var o6=u((YPr,s6)=>{"use strict";var LQ=Z(),IQ=typeof Uint8Array=="function";function PQ(r){return IQ&&r instanceof Uint8Array||LQ(r)==="[object Uint8Array]"}s6.exports=PQ});var f6=u((ZPr,v6)=>{"use strict";var RQ=o6();v6.exports=RQ});var c6=u(($Pr,l6)=>{"use strict";var _Q=255;l6.exports=_Q});var g6=u((QPr,p6)=>{"use strict";var FQ=typeof Uint8Array=="function"?Uint8Array:null;p6.exports=FQ});var y6=u((KPr,q6)=>{"use strict";var MQ=f6(),J0=c6(),m6=g6();function xQ(){var r,e;if(typeof m6!="function")return!1;try{e=[1,3.14,-3.14,J0+1,J0+2],e=new m6(e),r=MQ(e)&&e[0]===1&&e[1]===3&&e[2]===J0-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}q6.exports=xQ});var d6=u((rRr,h6)=>{"use strict";var BQ=y6();h6.exports=BQ});var b6=u((eRr,w6)=>{"use strict";var CQ=typeof Uint8Array=="function"?Uint8Array:void 0;w6.exports=CQ});var N6=u((tRr,E6)=>{"use strict";function jQ(){throw new Error("not implemented")}E6.exports=jQ});var Rt=u((iRr,A6)=>{"use strict";var VQ=d6(),GQ=b6(),UQ=N6(),z0;VQ()?z0=GQ:z0=UQ;A6.exports=z0});var S6=u((nRr,O6)=>{"use strict";var WQ=Z(),HQ=typeof Uint8ClampedArray=="function";function kQ(r){return HQ&&r instanceof Uint8ClampedArray||WQ(r)==="[object Uint8ClampedArray]"}O6.exports=kQ});var L6=u((aRr,T6)=>{"use strict";var DQ=S6();T6.exports=DQ});var P6=u((uRr,I6)=>{"use strict";var XQ=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;I6.exports=XQ});var F6=u((sRr,_6)=>{"use strict";var JQ=L6(),R6=P6();function zQ(){var r,e;if(typeof R6!="function")return!1;try{e=new R6([-1,0,1,3.14,4.99,255,256]),r=JQ(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}_6.exports=zQ});var x6=u((oRr,M6)=>{"use strict";var YQ=F6();M6.exports=YQ});var C6=u((vRr,B6)=>{"use strict";var ZQ=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;B6.exports=ZQ});var V6=u((fRr,j6)=>{"use strict";function $Q(){throw new Error("not implemented")}j6.exports=$Q});var Ai=u((lRr,G6)=>{"use strict";var QQ=x6(),KQ=C6(),rK=V6(),Y0;QQ()?Y0=KQ:Y0=rK;G6.exports=Y0});var W6=u((cRr,U6)=>{"use strict";var eK=Z(),tK=typeof Int16Array=="function";function iK(r){return tK&&r instanceof Int16Array||eK(r)==="[object Int16Array]"}U6.exports=iK});var k6=u((pRr,H6)=>{"use strict";var nK=W6();H6.exports=nK});var X6=u((gRr,D6)=>{"use strict";var aK=32767;D6.exports=aK});var z6=u((mRr,J6)=>{"use strict";var uK=-32768;J6.exports=uK});var Z6=u((qRr,Y6)=>{"use strict";var sK=typeof Int16Array=="function"?Int16Array:null;Y6.exports=sK});var K6=u((yRr,Q6)=>{"use strict";var oK=k6(),vK=X6(),fK=z6(),$6=Z6();function lK(){var r,e;if(typeof $6!="function")return!1;try{e=new $6([1,3.14,-3.14,vK+1]),r=oK(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===fK}catch{r=!1}return r}Q6.exports=lK});var e4=u((hRr,r4)=>{"use strict";var cK=K6();r4.exports=cK});var i4=u((dRr,t4)=>{"use strict";var pK=typeof Int16Array=="function"?Int16Array:void 0;t4.exports=pK});var a4=u((wRr,n4)=>{"use strict";function gK(){throw new Error("not implemented")}n4.exports=gK});var Oi=u((bRr,u4)=>{"use strict";var mK=e4(),qK=i4(),yK=a4(),Z0;mK()?Z0=qK:Z0=yK;u4.exports=Z0});var o4=u((ERr,s4)=>{"use strict";var hK=Z(),dK=typeof Uint16Array=="function";function wK(r){return dK&&r instanceof Uint16Array||hK(r)==="[object Uint16Array]"}s4.exports=wK});var f4=u((NRr,v4)=>{"use strict";var bK=o4();v4.exports=bK});var c4=u((ARr,l4)=>{"use strict";var EK=65535;l4.exports=EK});var g4=u((ORr,p4)=>{"use strict";var NK=typeof Uint16Array=="function"?Uint16Array:null;p4.exports=NK});var y4=u((SRr,q4)=>{"use strict";var AK=f4(),$0=c4(),m4=g4();function OK(){var r,e;if(typeof m4!="function")return!1;try{e=[1,3.14,-3.14,$0+1,$0+2],e=new m4(e),r=AK(e)&&e[0]===1&&e[1]===3&&e[2]===$0-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}q4.exports=OK});var d4=u((TRr,h4)=>{"use strict";var SK=y4();h4.exports=SK});var b4=u((LRr,w4)=>{"use strict";var TK=typeof Uint16Array=="function"?Uint16Array:void 0;w4.exports=TK});var N4=u((IRr,E4)=>{"use strict";function LK(){throw new Error("not implemented")}E4.exports=LK});var _t=u((PRr,A4)=>{"use strict";var IK=d4(),PK=b4(),RK=N4(),Q0;IK()?Q0=PK:Q0=RK;A4.exports=Q0});var S4=u((RRr,O4)=>{"use strict";var _K=Z(),FK=typeof Int32Array=="function";function MK(r){return FK&&r instanceof Int32Array||_K(r)==="[object Int32Array]"}O4.exports=MK});var yn=u((_Rr,T4)=>{"use strict";var xK=S4();T4.exports=xK});var Ft=u((FRr,L4)=>{"use strict";var BK=2147483647;L4.exports=BK});var P4=u((MRr,I4)=>{"use strict";var CK=-2147483648;I4.exports=CK});var _4=u((xRr,R4)=>{"use strict";var jK=typeof Int32Array=="function"?Int32Array:null;R4.exports=jK});var x4=u((BRr,M4)=>{"use strict";var VK=yn(),GK=Ft(),UK=P4(),F4=_4();function WK(){var r,e;if(typeof F4!="function")return!1;try{e=new F4([1,3.14,-3.14,GK+1]),r=VK(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===UK}catch{r=!1}return r}M4.exports=WK});var C4=u((CRr,B4)=>{"use strict";var HK=x4();B4.exports=HK});var V4=u((jRr,j4)=>{"use strict";var kK=typeof Int32Array=="function"?Int32Array:void 0;j4.exports=kK});var U4=u((VRr,G4)=>{"use strict";function DK(){throw new Error("not implemented")}G4.exports=DK});var vt=u((GRr,W4)=>{"use strict";var XK=C4(),JK=V4(),zK=U4(),K0;XK()?K0=JK:K0=zK;W4.exports=K0});var k4=u((URr,H4)=>{"use strict";var YK=Z(),ZK=typeof Uint32Array=="function";function $K(r){return ZK&&r instanceof Uint32Array||YK(r)==="[object Uint32Array]"}H4.exports=$K});var kr=u((WRr,D4)=>{"use strict";var QK=k4();D4.exports=QK});var J4=u((HRr,X4)=>{"use strict";var KK=typeof Uint32Array=="function"?Uint32Array:null;X4.exports=KK});var Z4=u((kRr,Y4)=>{"use strict";var rrr=kr(),rs=Tt(),z4=J4();function err(){var r,e;if(typeof z4!="function")return!1;try{e=[1,3.14,-3.14,rs+1,rs+2],e=new z4(e),r=rrr(e)&&e[0]===1&&e[1]===3&&e[2]===rs-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Y4.exports=err});var Q4=u((DRr,$4)=>{"use strict";var trr=Z4();$4.exports=trr});var r5=u((XRr,K4)=>{"use strict";var irr=typeof Uint32Array=="function"?Uint32Array:void 0;K4.exports=irr});var t5=u((JRr,e5)=>{"use strict";function nrr(){throw new Error("not implemented")}e5.exports=nrr});var or=u((zRr,i5)=>{"use strict";var arr=Q4(),urr=r5(),srr=t5(),es;arr()?es=urr:es=srr;i5.exports=es});var a5=u((YRr,n5)=>{"use strict";var orr=Z(),vrr=typeof Float32Array=="function";function frr(r){return vrr&&r instanceof Float32Array||orr(r)==="[object Float32Array]"}n5.exports=frr});var s5=u((ZRr,u5)=>{"use strict";var lrr=a5();u5.exports=lrr});var v5=u(($Rr,o5)=>{"use strict";var crr=typeof Float32Array=="function"?Float32Array:null;o5.exports=crr});var c5=u((QRr,l5)=>{"use strict";var prr=s5(),grr=j(),f5=v5();function mrr(){var r,e;if(typeof f5!="function")return!1;try{e=new f5([1,3.14,-3.14,5e40]),r=prr(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===grr}catch{r=!1}return r}l5.exports=mrr});var g5=u((KRr,p5)=>{"use strict";var qrr=c5();p5.exports=qrr});var q5=u((r_r,m5)=>{"use strict";var yrr=typeof Float32Array=="function"?Float32Array:void 0;m5.exports=yrr});var h5=u((e_r,y5)=>{"use strict";function hrr(){throw new Error("not implemented")}y5.exports=hrr});var Dr=u((t_r,d5)=>{"use strict";var drr=g5(),wrr=q5(),brr=h5(),ts;drr()?ts=wrr:ts=brr;d5.exports=ts});var b5=u((i_r,w5)=>{"use strict";var Err=Z(),Nrr=typeof Float64Array=="function";function Arr(r){return Nrr&&r instanceof Float64Array||Err(r)==="[object Float64Array]"}w5.exports=Arr});var N5=u((n_r,E5)=>{"use strict";var Orr=b5();E5.exports=Orr});var O5=u((a_r,A5)=>{"use strict";var Srr=typeof Float64Array=="function"?Float64Array:null;A5.exports=Srr});var L5=u((u_r,T5)=>{"use strict";var Trr=N5(),S5=O5();function Lrr(){var r,e;if(typeof S5!="function")return!1;try{e=new S5([1,3.14,-3.14,NaN]),r=Trr(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}T5.exports=Lrr});var is=u((s_r,I5)=>{"use strict";var Irr=L5();I5.exports=Irr});var R5=u((o_r,P5)=>{"use strict";var Prr=typeof Float64Array=="function"?Float64Array:void 0;P5.exports=Prr});var F5=u((v_r,_5)=>{"use strict";function Rrr(){throw new Error("not implemented")}_5.exports=Rrr});var lr=u((f_r,M5)=>{"use strict";var _rr=is(),Frr=R5(),Mrr=F5(),ns;_rr()?ns=Frr:ns=Mrr;M5.exports=ns});var C5=u((l_r,B5)=>{"use strict";var xrr=Ni(),Brr=Rt(),Crr=Ai(),jrr=Oi(),Vrr=_t(),Grr=vt(),Urr=or(),Wrr=Dr(),Hrr=lr(),x5;function krr(r){return new xrr(r)}function Drr(r){return new Brr(r)}function Xrr(r){return new Crr(r)}function Jrr(r){return new jrr(r)}function zrr(r){return new Vrr(r)}function Yrr(r){return new Grr(r)}function Zrr(r){return new Urr(r)}function $rr(r){return new Wrr(r)}function Qrr(r){return new Hrr(r)}function Krr(){var r={int8array:krr,uint8array:Drr,uint8clampedarray:Xrr,int16array:Jrr,uint16array:zrr,int32array:Yrr,uint32array:Zrr,float32array:$rr,float64array:Qrr};return r}x5=Krr();B5.exports=x5});var W5=u((c_r,U5)=>{"use strict";var hn=A(),as=fr(),j5=nt(),rer=Rp(),V5=on(),eer=Up(),ter=sn(),G5=Ei(),ier=Yp(),Si=i3(),ner=ut(),Ti=Ee(),aer=G3(),uer=C5();function ser(r){var e,t,i,n,a,s,o,v;for(e=[],n=[],o=Object.create(ner(r)),e.push(r),n.push(o),t=ier(r),v=0;v<t.length;v++)i=t[v],a=Si(r,i),hn(a,"value")&&(s=as(r[i])?[]:{},a.value=ft(r[i],s,e,n,-1)),Ti(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function oer(r){var e=[],t=[],i,n,a,s,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=G5(r),v=0;v<i.length;v++)s=i[v],n=Si(r,s),hn(n,"value")&&(a=as(r[s])?[]:{},n.value=ft(r[s],a,e,t,-1)),Ti(o,s,n);return o}function ft(r,e,t,i,n){var a,s,o,v,f,l,c,p,q,y;if(n-=1,typeof r!="object"||r===null)return r;if(j5(r))return aer(r);if(rer(r))return oer(r);if(o=V5(r),o==="date")return new Date(+r);if(o==="regexp")return eer(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=uer[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?ser(r):{};if(s=G5(r),n>0)for(a=o,y=0;y<s.length;y++){if(l=s[y],p=r[l],o=V5(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||j5(p)){a==="object"?(v=Si(r,l),hn(v,"value")&&(v.value=ft(p)),Ti(e,l,v)):e[l]=ft(p);continue}if(q=ter(t,p),q!==-1){e[l]=i[q];continue}c=as(p)?new Array(p.length):{},t.push(p),i.push(c),a==="array"?e[l]=ft(p,c,t,i,n):(v=Si(r,l),hn(v,"value")&&(v.value=ft(p,c,t,i,n)),Ti(e,l,v))}else if(o==="array")for(y=0;y<s.length;y++)l=s[y],e[l]=r[l];else for(y=0;y<s.length;y++)l=s[y],v=Si(r,l),Ti(e,l,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}U5.exports=ft});var k5=u((p_r,H5)=>{"use strict";var ver=fr(),fer=Ae().isPrimitive,ler=j(),cer=W5();function per(r,e){var t;if(arguments.length>1){if(!fer(e))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+e+"`.");if(e===0)return r}else e=ler;return t=ver(r)?new Array(r.length):{},cer(r,t,[r],[t],e)}H5.exports=per});var Mt=u((g_r,D5)=>{"use strict";var ger=k5();D5.exports=ger});var X5=u((m_r,mer)=>{mer.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var z5=u((q_r,J5)=>{"use strict";var qer=Mt(),yer=X5();function her(){return qer(yer)}J5.exports=her});var Z5=u((y_r,Y5)=>{"use strict";var der=fr();function wer(r){return typeof r=="object"&&r!==null&&!der(r)}Y5.exports=wer});var dn=u((h_r,$5)=>{"use strict";var ber=Z5();$5.exports=ber});var r8=u((d_r,K5)=>{"use strict";var Eer=dn(),Q5=L(),Ner=ut(),wn=A(),Aer=Z(),Oer=Object.prototype;function Ser(r){var e;for(e in r)if(!wn(r,e))return!1;return!0}function Ter(r){var e;return Eer(r)?(e=Ner(r),e?!wn(r,"constructor")&&wn(e,"constructor")&&Q5(e.constructor)&&Aer(e.constructor)==="[object Function]"&&wn(e,"isPrototypeOf")&&Q5(e.isPrototypeOf)&&(e===Oer||Ser(r)):!0):!1}K5.exports=Ter});var S=u((w_r,e8)=>{"use strict";var Ler=r8();e8.exports=Ler});var i8=u((b_r,t8)=>{"use strict";var Ier=Ee();function Per(r,e,t){Ier(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}t8.exports=Per});var a8=u((E_r,n8)=>{"use strict";var Rer=i8();n8.exports=Rer});var s8=u((N_r,u8)=>{"use strict";var _er=j(),Fer=J();function Mer(r){return r===_er||r===Fer}u8.exports=Mer});var Oe=u((A_r,o8)=>{"use strict";var xer=s8();o8.exports=xer});var f8=u((O_r,v8)=>{"use strict";function Ber(r){return Math.abs(r)}v8.exports=Ber});var $=u((S_r,l8)=>{"use strict";var Cer=f8();l8.exports=Cer});var p8=u((T_r,c8)=>{"use strict";var jer=Rt(),Ver=_t(),Ger={uint16:Ver,uint8:jer};c8.exports=Ger});var y8=u((L_r,q8)=>{"use strict";var g8=p8(),m8;function Uer(){var r,e;return r=new g8.uint16(1),r[0]=4660,e=new g8.uint8(r.buffer),e[0]===52}m8=Uer();q8.exports=m8});var lt=u((I_r,h8)=>{"use strict";var Wer=y8();h8.exports=Wer});var w8=u((P_r,d8)=>{"use strict";var Her=lt(),us;Her===!0?us=1:us=0;d8.exports=us});var N8=u((R_r,E8)=>{"use strict";var ker=or(),Der=lr(),Xer=w8(),b8=new Der(1),Jer=new ker(b8.buffer);function zer(r){return b8[0]=r,Jer[Xer]}E8.exports=zer});var cr=u((__r,A8)=>{"use strict";var Yer=N8();A8.exports=Yer});var S8=u((F_r,O8)=>{"use strict";var Zer=lt(),ss;Zer===!0?ss=1:ss=0;O8.exports=ss});var L8=u((M_r,T8)=>{"use strict";var $er=or(),Qer=lr(),Ker=S8(),os=new Qer(1),rtr=new $er(os.buffer);function etr(r,e){return os[0]=r,rtr[Ker]=e>>>0,os[0]}T8.exports=etr});var xt=u((x_r,I8)=>{"use strict";var ttr=L8();I8.exports=ttr});var Se=u((B_r,P8)=>{"use strict";var itr=1023;P8.exports=itr});var _8=u((C_r,R8)=>{"use strict";function ntr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}R8.exports=ntr});var M8=u((j_r,F8)=>{"use strict";function atr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}F8.exports=atr});var j8=u((V_r,C8)=>{"use strict";var x8=cr(),utr=xt(),str=b(),otr=Se(),vtr=J(),ftr=_8(),ltr=M8(),bn=.6931471803691238,En=19082149292705877e-26,ctr=0x40000000000000,ptr=.3333333333333333,B8=1048575,gtr=2146435072,mtr=1048576,qtr=1072693248;function ytr(r){var e,t,i,n,a,s,o,v,f,l,c,p;return r===0?vtr:str(r)||r<0?NaN:(t=x8(r),a=0,t<mtr&&(a-=54,r*=ctr,t=x8(r)),t>=gtr?r+r:(a+=(t>>20)-otr|0,t&=B8,v=t+614244&1048576|0,r=utr(r,t|v^qtr),a+=v>>20|0,o=r-1,(B8&2+t)<3?o===0?a===0?0:a*bn+a*En:(s=o*o*(.5-ptr*o),a===0?o-s:a*bn-(s-a*En-o)):(l=o/(2+o),p=l*l,v=t-398458|0,c=p*p,f=440401-t|0,n=c*ftr(c),i=p*ltr(c),v|=f,s=i+n,v>0?(e=.5*o*o,a===0?o-(e-l*(e+s)):a*bn-(e-(l*(e+s)+a*En)-o)):a===0?o-l*(o-s):a*bn-(l*(o-s)-a*En-o))))}C8.exports=ytr});var B=u((G_r,V8)=>{"use strict";var htr=j8();V8.exports=htr});var U8=u((U_r,G8)=>{"use strict";var dtr=Math.ceil;G8.exports=dtr});var H8=u((W_r,W8)=>{"use strict";var wtr=U8();W8.exports=wtr});var D8=u((H_r,k8)=>{"use strict";var btr=K(),Etr=H8();function Ntr(r){return r<0?Etr(r):btr(r)}k8.exports=Ntr});var Nn=u((k_r,X8)=>{"use strict";var Atr=D8();X8.exports=Atr});var z8=u((D_r,J8)=>{"use strict";function Otr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}J8.exports=Otr});var Z8=u((X_r,Y8)=>{"use strict";function Str(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}Y8.exports=Str});var Q8=u((J_r,$8)=>{"use strict";var Ttr=z8(),Ltr=Z8();function Itr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*Ttr(a),i+=n*n*Ltr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}$8.exports=Itr});var vs=u((z_r,K8)=>{"use strict";var Ptr=Q8();K8.exports=Ptr});var tg=u((Y_r,eg)=>{"use strict";var rg=-.16666666666666632,Rtr=.00833333333332249,_tr=-.0001984126982985795,Ftr=27557313707070068e-22,Mtr=-25050760253406863e-24,xtr=158969099521155e-24;function Btr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=Rtr+a*(_tr+a*Ftr)+a*n*(Mtr+a*xtr),i=a*r,e===0?r+i*(rg+a*t):r-(a*(.5*e-i*t)-e-i*rg)}eg.exports=Btr});var fs=u((Z_r,ig)=>{"use strict";var Ctr=tg();ig.exports=Ctr});var ag=u(($_r,ng)=>{"use strict";var jtr=lt(),ls;jtr===!0?ls=0:ls=1;ng.exports=ls});var og=u((Q_r,sg)=>{"use strict";var Vtr=or(),Gtr=lr(),Utr=ag(),ug=new Gtr(1),Wtr=new Vtr(ug.buffer);function Htr(r){return ug[0]=r,Wtr[Utr]}sg.exports=Htr});var fg=u((K_r,vg)=>{"use strict";var ktr=og();vg.exports=ktr});var pg=u((rFr,cg)=>{"use strict";var Dtr=lt(),lg,cs,ps;Dtr===!0?(cs=1,ps=0):(cs=0,ps=1);lg={HIGH:cs,LOW:ps};cg.exports=lg});var hg=u((eFr,yg)=>{"use strict";var Xtr=or(),Jtr=lr(),mg=pg(),qg=new Jtr(1),gg=new Xtr(qg.buffer),ztr=mg.HIGH,Ytr=mg.LOW;function Ztr(r,e){return gg[ztr]=r,gg[Ytr]=e,qg[0]}yg.exports=Ztr});var An=u((tFr,dg)=>{"use strict";var $tr=hg();dg.exports=$tr});var bg=u((iFr,wg)=>{"use strict";var Qtr=1023;wg.exports=Qtr});var Ng=u((nFr,Eg)=>{"use strict";var Ktr=-1023;Eg.exports=Ktr});var Og=u((aFr,Ag)=>{"use strict";var rir=-1074;Ag.exports=rir});var Lg=u((uFr,Tg)=>{"use strict";var eir=lt(),Sg,gs,ms;eir===!0?(gs=1,ms=0):(gs=0,ms=1);Sg={HIGH:gs,LOW:ms};Tg.exports=Sg});var Fg=u((sFr,_g)=>{"use strict";var tir=or(),iir=lr(),Pg=Lg(),Rg=new iir(1),Ig=new tir(Rg.buffer),nir=Pg.HIGH,air=Pg.LOW;function uir(r,e){return Rg[0]=e,r[0]=Ig[nir],r[1]=Ig[air],r}_g.exports=uir});var Bg=u((oFr,xg)=>{"use strict";var Mg=Fg();function sir(r,e){return arguments.length===1?Mg([0,0],r):Mg(r,e)}xg.exports=sir});var On=u((vFr,Cg)=>{"use strict";var oir=Bg();Cg.exports=oir});var Vg=u((fFr,jg)=>{"use strict";var vir=On(),fir=cr(),lir=An(),cir=2147483648>>>0,pir=2147483647,qs=[0,0];function gir(r,e){var t,i;return vir(qs,r),t=qs[0],t&=pir,i=fir(e),i&=cir,t|=i,lir(t,qs[1])}jg.exports=gir});var Sn=u((lFr,Gg)=>{"use strict";var mir=Vg();Gg.exports=mir});var Wg=u((cFr,Ug)=>{"use strict";var qir=22250738585072014e-324;Ug.exports=qir});var kg=u((pFr,Hg)=>{"use strict";var yir=Wg(),hir=Oe(),dir=b(),wir=$(),bir=4503599627370496;function Eir(r,e){return dir(e)||hir(e)?(r[0]=e,r[1]=0,r):e!==0&&wir(e)<yir?(r[0]=e*bir,r[1]=-52,r):(r[0]=e,r[1]=0,r)}Hg.exports=Eir});var Jg=u((gFr,Xg)=>{"use strict";var Dg=kg();function Nir(r,e){return arguments.length===1?Dg([0,0],r):Dg(r,e)}Xg.exports=Nir});var Yg=u((mFr,zg)=>{"use strict";var Air=Jg();zg.exports=Air});var $g=u((qFr,Zg)=>{"use strict";var Oir=2146435072;Zg.exports=Oir});var Kg=u((yFr,Qg)=>{"use strict";var Sir=cr(),Tir=$g(),Lir=Se();function Iir(r){var e=Sir(r);return e=(e&Tir)>>>20,e-Lir|0}Qg.exports=Iir});var e7=u((hFr,r7)=>{"use strict";var Pir=Kg();r7.exports=Pir});var i7=u((dFr,t7)=>{"use strict";var Rir=j(),_ir=J(),Fir=Se(),Mir=bg(),xir=Ng(),Bir=Og(),Cir=b(),jir=Oe(),Vir=Sn(),Gir=Yg(),Uir=e7(),Wir=On(),Hir=An(),kir=2220446049250313e-31,Dir=2148532223>>>0,ys=[0,0],hs=[0,0];function Xir(r,e){var t,i;return e===0||r===0||Cir(r)||jir(r)?r:(Gir(ys,r),r=ys[0],e+=ys[1],e+=Uir(r),e<Bir?Vir(0,r):e>Mir?r<0?_ir:Rir:(e<=xir?(e+=52,i=kir):i=1,Wir(hs,r),t=hs[0],t&=Dir,t|=e+Fir<<20,i*Hir(t,hs[1])))}t7.exports=Xir});var Tn=u((wFr,n7)=>{"use strict";var Jir=i7();n7.exports=Jir});var u7=u((bFr,a7)=>{"use strict";function zir(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}a7.exports=zir});var ds=u((EFr,s7)=>{"use strict";var Yir=u7();s7.exports=Yir});var v7=u((NFr,o7)=>{"use strict";var Zir=ds();function $ir(r){return Zir(0,r)}o7.exports=$ir});var l7=u((AFr,f7)=>{"use strict";var Qir=v7();f7.exports=Qir});var q7=u((OFr,m7)=>{"use strict";var Kir=K(),Ln=Tn(),Rn=l7(),p7=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],rnr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ws=16777216,bs=5960464477539063e-23,In=Rn(20),c7=Rn(20),Pn=Rn(20),ur=Rn(20);function g7(r,e,t,i,n,a,s,o,v){var f,l,c,p,q,y,m,g,h;for(p=a,h=i[t],g=t,q=0;g>0;q++)l=bs*h|0,ur[q]=h-ws*l|0,h=i[g-1]+l,g-=1;if(h=Ln(h,n),h-=8*Kir(h*.125),m=h|0,h-=m,c=0,n>0?(q=ur[t-1]>>24-n,m+=q,ur[t-1]-=q<<24-n,c=ur[t-1]>>23-n):n===0?c=ur[t-1]>>23:h>=.5&&(c=2),c>0){for(m+=1,f=0,q=0;q<t;q++)g=ur[q],f===0?g!==0&&(f=1,ur[q]=16777216-g):ur[q]=16777215-g;if(n>0)switch(n){case 1:ur[t-1]&=8388607;break;case 2:ur[t-1]&=4194303;break}c===2&&(h=1-h,f!==0&&(h-=Ln(1,n)))}if(h===0){for(g=0,q=t-1;q>=a;q--)g|=ur[q];if(g===0){for(y=1;ur[a-y]===0;y++);for(q=t+1;q<=t+y;q++){for(v[o+q]=p7[s+q],l=0,g=0;g<=o;g++)l+=r[g]*v[o+(q-g)];i[q]=l}return t+=y,g7(r,e,t,i,n,a,s,o,v)}}if(h===0)for(t-=1,n-=24;ur[t]===0;)t-=1,n-=24;else h=Ln(h,-n),h>=ws?(l=bs*h|0,ur[t]=h-ws*l|0,t+=1,n+=24,ur[t]=l):ur[t]=h|0;for(l=Ln(1,n),q=t;q>=0;q--)i[q]=l*ur[q],l*=bs;for(q=t;q>=0;q--){for(l=0,y=0;y<=p&&y<=t-q;y++)l+=rnr[y]*i[q+y];Pn[t-q]=l}for(l=0,q=t;q>=0;q--)l+=Pn[q];for(c===0?e[0]=l:e[0]=-l,l=Pn[0]-l,q=1;q<=t;q++)l+=Pn[q];return c===0?e[1]=l:e[1]=-l,m&7}function enr(r,e,t,i){var n,a,s,o,v,f,l,c,p;for(a=4,o=i-1,s=(t-3)/24|0,s<0&&(s=0),f=t-24*(s+1),c=s-o,p=o+a,l=0;l<=p;l++)c<0?In[l]=0:In[l]=p7[c],c+=1;for(l=0;l<=a;l++){for(n=0,c=0;c<=o;c++)n+=r[c]*In[o+(l-c)];c7[l]=n}return v=a,g7(r,e,v,c7,f,a,s,o,In)}m7.exports=enr});var h7=u((SFr,y7)=>{"use strict";var tnr=Math.round;y7.exports=tnr});var Es=u((TFr,d7)=>{"use strict";var inr=h7();d7.exports=inr});var N7=u((LFr,E7)=>{"use strict";var nnr=Es(),w7=cr(),anr=.6366197723675814,unr=1.5707963267341256,snr=6077100506506192e-26,onr=6077100506303966e-26,vnr=20222662487959506e-37,fnr=20222662487111665e-37,lnr=84784276603689e-45,b7=2047;function cnr(r,e,t){var i,n,a,s,o,v,f;return n=nnr(r*anr),s=r-n*unr,o=n*snr,f=e>>20|0,t[0]=s-o,i=w7(t[0]),v=f-(i>>20&b7),v>16&&(a=s,o=n*onr,s=a-o,o=n*vnr-(a-s-o),t[0]=s-o,i=w7(t[0]),v=f-(i>>20&b7),v>49&&(a=s,o=n*fnr,s=a-o,o=n*lnr-(a-s-o),t[0]=s-o)),t[1]=s-t[0]-o,n}E7.exports=cnr});var O7=u((IFr,A7)=>{"use strict";var pnr=cr(),gnr=fg(),mnr=An(),qnr=q7(),_n=N7(),ynr=0,hnr=16777216,Te=1.5707963267341256,ct=6077100506506192e-26,Fn=2*ct,Mn=3*ct,xn=4*ct,dnr=2147483647,wnr=2146435072,bnr=1048575,Enr=598523,Nnr=1072243195,Anr=1073928572,Onr=1074752122,Snr=1074977148,Tnr=1075183036,Lnr=1075388923,Inr=1075594811,Pnr=1094263291,Li=[0,0,0],Ii=[0,0];function Rnr(r,e){var t,i,n,a,s,o,v,f;if(n=pnr(r),a=n&dnr|0,a<=Nnr)return e[0]=r,e[1]=0,0;if(a<=Onr)return(a&bnr)===Enr?_n(r,a,e):a<=Anr?r>0?(f=r-Te,e[0]=f-ct,e[1]=f-e[0]-ct,1):(f=r+Te,e[0]=f+ct,e[1]=f-e[0]+ct,-1):r>0?(f=r-2*Te,e[0]=f-Fn,e[1]=f-e[0]-Fn,2):(f=r+2*Te,e[0]=f+Fn,e[1]=f-e[0]+Fn,-2);if(a<=Inr)return a<=Tnr?a===Snr?_n(r,a,e):r>0?(f=r-3*Te,e[0]=f-Mn,e[1]=f-e[0]-Mn,3):(f=r+3*Te,e[0]=f+Mn,e[1]=f-e[0]+Mn,-3):a===Lnr?_n(r,a,e):r>0?(f=r-4*Te,e[0]=f-xn,e[1]=f-e[0]-xn,4):(f=r+4*Te,e[0]=f+xn,e[1]=f-e[0]+xn,-4);if(a<Pnr)return _n(r,a,e);if(a>=wnr)return e[0]=NaN,e[1]=NaN,0;for(t=gnr(r),i=(a>>20)-1046,f=mnr(a-(i<<20|0),t),o=0;o<2;o++)Li[o]=f|0,f=(f-Li[o])*hnr;for(Li[2]=f,s=3;Li[s-1]===ynr;)s-=1;return v=qnr(Li,Ii,i,s,1),r<0?(e[0]=-Ii[0],e[1]=-Ii[1],-v):(e[0]=Ii[0],e[1]=Ii[1],v)}A7.exports=Rnr});var Bn=u((PFr,S7)=>{"use strict";var _nr=O7();S7.exports=_nr});var I7=u((RFr,L7)=>{"use strict";var Fnr=cr(),Ns=vs(),T7=fs(),Mnr=Bn(),Xr=[0,0],xnr=2147483647,Bnr=1072243195,Cnr=1044381696,jnr=2146435072;function Vnr(r){var e,t;if(e=Fnr(r),e&=xnr,e<=Bnr)return e<Cnr?1:Ns(r,0);if(e>=jnr)return NaN;switch(t=Mnr(r,Xr),t&3){case 0:return Ns(Xr[0],Xr[1]);case 1:return-T7(Xr[0],Xr[1]);case 2:return-Ns(Xr[0],Xr[1]);default:return T7(Xr[0],Xr[1])}}L7.exports=Vnr});var Pi=u((_Fr,P7)=>{"use strict";var Gnr=I7();P7.exports=Gnr});var F7=u((FFr,_7)=>{"use strict";var Unr=cr(),R7=vs(),As=fs(),Wnr=Bn(),Hnr=2147483647,knr=2146435072,Dnr=1072243195,Xnr=1045430272,Jr=[0,0];function Jnr(r){var e,t;if(e=Unr(r),e&=Hnr,e<=Dnr)return e<Xnr?r:As(r,0);if(e>=knr)return NaN;switch(t=Wnr(r,Jr),t&3){case 0:return As(Jr[0],Jr[1]);case 1:return R7(Jr[0],Jr[1]);case 2:return-As(Jr[0],Jr[1]);default:return-R7(Jr[0],Jr[1])}}_7.exports=Jnr});var Ri=u((MFr,M7)=>{"use strict";var znr=F7();M7.exports=znr});var Gr=u((xFr,x7)=>{"use strict";var Ynr=3.141592653589793;x7.exports=Ynr});var j7=u((BFr,C7)=>{"use strict";var Znr=b(),$nr=Oe(),B7=Pi(),Os=Ri(),Qnr=$(),_i=Sn(),Fi=Gr();function Knr(r){var e,t;return Znr(r)?NaN:$nr(r)?NaN:(t=r%2,e=Qnr(t),e===0||e===1?_i(0,t):e<.25?Os(Fi*t):e<.75?(e=.5-e,_i(B7(Fi*e),t)):e<1.25?(t=_i(1,t)-t,Os(Fi*t)):e<1.75?(e-=1.5,-_i(B7(Fi*e),t)):(t-=_i(2,t),Os(Fi*t)))}C7.exports=Knr});var Mi=u((CFr,V7)=>{"use strict";var rar=j7();V7.exports=rar});var U7=u((jFr,G7)=>{"use strict";function ear(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}G7.exports=ear});var H7=u((VFr,W7)=>{"use strict";function tar(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}W7.exports=tar});var D7=u((GFr,k7)=>{"use strict";function iar(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}k7.exports=iar});var J7=u((UFr,X7)=>{"use strict";function nar(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}X7.exports=nar});var Y7=u((WFr,z7)=>{"use strict";function aar(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}z7.exports=aar});var $7=u((HFr,Z7)=>{"use strict";function uar(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}Z7.exports=uar});var K7=u((kFr,Q7)=>{"use strict";function sar(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}Q7.exports=sar});var e9=u((DFr,r9)=>{"use strict";function oar(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}r9.exports=oar});var i9=u((XFr,t9)=>{"use strict";function far(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}t9.exports=far});var a9=u((JFr,n9)=>{"use strict";function lar(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}n9.exports=lar});var o9=u((zFr,s9)=>{"use strict";var car=b(),par=Oe(),gar=$(),Bt=B(),mar=Nn(),qar=Mi(),yar=Gr(),Ss=j(),har=U7(),dar=H7(),war=D7(),bar=J7(),Ear=Y7(),Nar=$7(),Aar=K7(),Oar=e9(),Sar=i9(),Tar=a9(),Lar=.07721566490153287,Iar=.3224670334241136,Par=1,Rar=-.07721566490153287,_ar=.48383612272381005,Far=-.1475877229945939,Mar=.06462494023913339,xar=-.07721566490153287,Bar=1,Car=.4189385332046727,Cn=1.4616321449683622,jar=4503599627370496,Var=0x400000000000000,Gar=8470329472543003e-37,u9=1.4616321449683622,Uar=-.12148629053584961,War=-3638676997039505e-33;function Har(r){var e,t,i,n,a,s,o,v,f,l,c,p,q;if(car(r)||par(r))return r;if(r===0)return Ss;if(r<0?(e=!0,r=-r):e=!1,r<Gar)return-Bt(r);if(e){if(r>=jar||(f=qar(r),f===0))return Ss;t=Bt(yar/gar(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(q=-Bt(r),r>=Cn-1+.27?(c=1-r,i=0):r>=Cn-1-.27?(c=r-(u9-1),i=1):(c=r,i=2)):(q=0,r>=Cn+.27?(c=2-r,i=0):r>=Cn-.27?(c=r-u9,i=1):(c=r-1,i=2)),i){case 0:p=c*c,s=Lar+p*har(p),a=p*(Iar+p*dar(p)),o=c*s+a,q+=o-.5*c;break;case 1:p=c*c,l=p*c,s=_ar+l*Ear(l),a=Far+l*Nar(l),n=Mar+l*Aar(l),o=p*s-(War-l*(a+c*n)),q+=Uar+o;break;case 2:s=c*(xar+c*Oar(c)),a=Bar+c*Sar(c),q+=-.5*c+s/a;break}else if(r<8)switch(i=mar(r),c=r-i,o=c*(Rar+c*bar(c)),v=Par+c*war(c),q=.5*c+o/v,p=1,i){case 7:p*=c+6;case 6:p*=c+5;case 5:p*=c+4;case 4:p*=c+3;case 3:p*=c+2,q+=Bt(p)}else r<Var?(f=Bt(r),p=1/r,c=p*p,l=Car+p*Tar(c),q=(r-.5)*(f-1)+l):q=r*(Bt(r)-1);return e&&(q=t-q),q}s9.exports=Har});var xi=u((YFr,v9)=>{"use strict";var kar=o9();v9.exports=kar});var l9=u((ZFr,f9)=>{"use strict";var Dar=J();function Xar(r){return r===0&&1/r===Dar}f9.exports=Xar});var Ts=u(($Fr,c9)=>{"use strict";var Jar=l9();c9.exports=Jar});var Ls=u((QFr,p9)=>{"use strict";var zar=2.5066282746310007;p9.exports=zar});var m9=u((KFr,g9)=>{"use strict";var Yar=Ar();function Zar(r){return Yar(r/2)}g9.exports=Zar});var jn=u((rMr,q9)=>{"use strict";var $ar=m9();q9.exports=$ar});var d9=u((eMr,h9)=>{"use strict";var y9=jn();function Qar(r){return r>0?y9(r-1):y9(r+1)}h9.exports=Qar});var Is=u((tMr,w9)=>{"use strict";var Kar=d9();w9.exports=Kar});var E9=u((iMr,b9)=>{"use strict";var rur=Math.sqrt;b9.exports=rur});var G=u((nMr,N9)=>{"use strict";var eur=E9();N9.exports=eur});var O9=u((aMr,A9)=>{"use strict";var tur=lt(),Ps;tur===!0?Ps=0:Ps=1;A9.exports=Ps});var T9=u((uMr,S9)=>{"use strict";var iur=or(),nur=lr(),aur=O9(),Rs=new nur(1),uur=new iur(Rs.buffer);function sur(r,e){return Rs[0]=r,uur[aur]=e>>>0,Rs[0]}S9.exports=sur});var pt=u((sMr,L9)=>{"use strict";var our=T9();L9.exports=our});var P9=u((oMr,I9)=>{"use strict";function vur(r){return r|0}I9.exports=vur});var _s=u((vMr,R9)=>{"use strict";var fur=P9();R9.exports=fur});var M9=u((fMr,F9)=>{"use strict";var _9=Is(),lur=Sn(),cur=J(),Vn=j();function pur(r,e){return e===cur?Vn:e===Vn?0:e>0?_9(e)?r:0:_9(e)?lur(Vn,r):Vn}F9.exports=pur});var B9=u((lMr,x9)=>{"use strict";var gur=cr(),mur=2147483647,qur=1072693247,Gn=1e300,Un=1e-300;function yur(r,e){var t,i;return i=gur(r),t=i&mur,t<=qur?e<0?Gn*Gn:Un*Un:e>0?Gn*Gn:Un*Un}x9.exports=yur});var V9=u((cMr,j9)=>{"use strict";var hur=$(),C9=j();function dur(r,e){return r===-1?(r-r)/(r-r):r===1?1:hur(r)<1==(e===C9)?0:C9}j9.exports=dur});var U9=u((pMr,G9)=>{"use strict";function wur(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}G9.exports=wur});var D9=u((gMr,k9)=>{"use strict";var bur=cr(),Wn=pt(),W9=xt(),Eur=Se(),Nur=U9(),Aur=1048575,H9=1048576,Our=1072693248,Sur=536870912,Tur=524288,Lur=20,Iur=9007199254740992,Pur=.9617966939259756,Rur=.9617967009544373,_ur=-7028461650952758e-24,Fur=[1,1.5],Mur=[0,.5849624872207642],xur=[0,1350039202129749e-23];function Bur(r,e,t){var i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N,C,O,k,nr,W;return k=0,t<H9&&(e*=Iur,k-=53,t=bur(e)),k+=(t>>Lur)-Eur|0,nr=t&Aur|0,t=nr|Our|0,nr<=235662?W=0:nr<767610?W=1:(W=0,k+=1,t-=H9),e=W9(e,t),l=Fur[W],C=e-l,O=1/(e+l),n=C*O,s=Wn(n,0),i=(t>>1|Sur)+Tur,i+=W<<18,v=W9(0,i),f=e-(v-l),o=O*(C-s*v-s*f),a=n*n,N=a*a*Nur(a),N+=o*(s+n),a=s*s,v=3+a+N,v=Wn(v,0),f=N-(v-3-a),C=s*v,O=o*v+f*n,p=C+O,p=Wn(p,0),q=O-(p-C),y=Rur*p,m=_ur*p+q*Pur+xur[W],c=Mur[W],E=k,g=y+m+c+E,g=Wn(g,0),h=m-(g-E-c-y),r[0]=g,r[1]=h,r}k9.exports=Bur});var J9=u((mMr,X9)=>{"use strict";function Cur(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}X9.exports=Cur});var Y9=u((qMr,z9)=>{"use strict";var jur=pt(),Vur=J9(),Gur=1.4426950408889634,Uur=1.4426950216293335,Wur=19259629911266175e-24;function Hur(r,e){var t,i,n,a,s,o;return n=e-1,a=n*n*Vur(n),s=Uur*n,o=n*Wur-a*Gur,i=s+o,i=jur(i,0),t=o-(i-s),r[0]=i,r[1]=t,r}z9.exports=Hur});var Hn=u((yMr,Z9)=>{"use strict";var kur=.6931471805599453;Z9.exports=kur});var Q9=u((hMr,$9)=>{"use strict";function Dur(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}$9.exports=Dur});var am=u((dMr,nm)=>{"use strict";var Xur=cr(),K9=xt(),Jur=pt(),zur=_s(),Yur=Tn(),Zur=Hn(),rm=Se(),$ur=Q9(),em=2147483647,tm=1048575,im=1048576,Qur=1071644672,Bi=20,Kur=.6931471824645996,r0r=-1904654299957768e-24;function e0r(r,e,t){var i,n,a,s,o,v,f,l,c,p,q;return p=r&em|0,q=(p>>Bi)-rm|0,c=0,p>Qur&&(c=r+(im>>q+1)>>>0,q=((c&em)>>Bi)-rm|0,i=(c&~(tm>>q))>>>0,a=K9(0,i),c=(c&tm|im)>>Bi-q>>>0,r<0&&(c=-c),e-=a),a=t+e,a=Jur(a,0),o=a*Kur,v=(t-(a-e))*Zur+a*r0r,l=o+v,f=v-(l-o),a=l*l,n=l-a*$ur(a),s=l*n/(n-2)-(f+l*f),l=1-(s-l),r=Xur(l),r=zur(r),r+=c<<Bi>>>0,r>>Bi<=0?l=Yur(l,c):l=K9(l,r),l}nm.exports=e0r});var qm=u((wMr,mm)=>{"use strict";var um=b(),sm=Is(),om=Oe(),t0r=Ar(),vm=G(),i0r=$(),Fs=On(),n0r=pt(),fm=_s(),a0r=J(),u0r=j(),s0r=M9(),o0r=B9(),v0r=V9(),f0r=D9(),l0r=Y9(),c0r=am(),Ms=2147483647,p0r=1072693247,g0r=1105199104,m0r=1139802112,lm=1083179008,q0r=1072693248,y0r=1083231232,h0r=3230714880>>>0,cm=31,Le=1e300,Ie=1e-300,d0r=8008566259537294e-32,zr=[0,0],pm=[0,0];function gm(r,e){var t,i,n,a,s,o,v,f,l,c,p,q,y,m,g,h;if(um(r)||um(e))return NaN;if(Fs(zr,e),o=zr[0],v=zr[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return vm(r);if(e===-.5)return 1/vm(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(om(e))return v0r(r,e)}if(Fs(zr,r),a=zr[0],s=zr[1],s===0){if(a===0)return s0r(r,e);if(r===1)return 1;if(r===-1&&sm(e))return-1;if(om(r))return r===a0r?gm(-0,-e):e<0?0:u0r}if(r<0&&t0r(e)===!1)return(r-r)/(r-r);if(n=i0r(r),t=a&Ms|0,i=o&Ms|0,f=a>>>cm|0,l=o>>>cm|0,f&&sm(e)?f=-1:f=1,i>g0r){if(i>m0r)return o0r(r,e);if(t<p0r)return l===1?f*Le*Le:f*Ie*Ie;if(t>q0r)return l===0?f*Le*Le:f*Ie*Ie;y=l0r(pm,n)}else y=f0r(pm,n,t);if(c=n0r(e,0),q=(e-c)*y[0]+e*y[1],p=c*y[0],m=q+p,Fs(zr,m),g=fm(zr[0]),h=fm(zr[1]),g>=lm){if((g-lm|h)!==0||q+d0r>m-p)return f*Le*Le}else if((g&Ms)>=y0r&&((g-h0r|h)!==0||q<=m-p))return f*Ie*Ie;return m=c0r(g,p,q),f*m}mm.exports=gm});var Q=u((bMr,ym)=>{"use strict";var w0r=qm();ym.exports=w0r});var dm=u((EMr,hm)=>{"use strict";function b0r(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}hm.exports=b0r});var bm=u((NMr,wm)=>{"use strict";var E0r=Tn(),N0r=dm();function A0r(r,e,t){var i,n,a,s;return i=r-e,n=i*i,a=i-n*N0r(n),s=1-(e-i*a/(2-a)-r),E0r(s,t)}wm.exports=A0r});var Tm=u((AMr,Sm)=>{"use strict";var O0r=b(),Em=Nn(),S0r=J(),Nm=j(),T0r=bm(),L0r=.6931471803691238,I0r=19082149292705877e-26,Am=1.4426950408889634,P0r=709.782712893384,R0r=-745.1332191019411,Om=1/(1<<28),_0r=-Om;function F0r(r){var e,t,i;return O0r(r)||r===Nm?r:r===S0r?0:r>P0r?Nm:r<R0r?0:r>_0r&&r<Om?1+r:(r<0?i=Em(Am*r-.5):i=Em(Am*r+.5),e=r-i*L0r,t=i*I0r,T0r(e,t,i))}Sm.exports=F0r});var sr=u((OMr,Lm)=>{"use strict";var M0r=Tm();Lm.exports=M0r});var Pm=u((SMr,Im)=>{"use strict";function x0r(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}Im.exports=x0r});var Fm=u((TMr,_m)=>{"use strict";var B0r=Ls(),Rm=Q(),C0r=sr(),j0r=Pm(),V0r=143.01608;function G0r(r){var e,t,i;return e=1/r,e=1+e*j0r(e),t=C0r(r),r>V0r?(i=Rm(r,.5*r-.25),t=i*(i/t)):t=Rm(r,r-.5)/t,B0r*t*e}_m.exports=G0r});var xm=u((LMr,Mm)=>{"use strict";var U0r=.5772156649015329;Mm.exports=U0r});var Cm=u((IMr,Bm)=>{"use strict";var W0r=xm();function H0r(r,e){return e/((1+W0r*r)*r)}Bm.exports=H0r});var Vm=u((PMr,jm)=>{"use strict";function k0r(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}jm.exports=k0r});var Jm=u((RMr,Xm)=>{"use strict";var D0r=b(),X0r=Ar(),J0r=Ts(),Gm=$(),z0r=K(),Y0r=Ri(),Um=j(),Wm=J(),Hm=Gr(),km=Fm(),Dm=Cm(),Z0r=Vm();function $0r(r){var e,t,i,n;if(X0r(r)&&r<0||r===Wm||D0r(r))return NaN;if(r===0)return J0r(r)?Wm:Um;if(r>171.61447887182297)return Um;if(r<-170.5674972726612)return 0;if(t=Gm(r),t>33)return r>=0?km(r):(i=z0r(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*Y0r(Hm*n),e*Hm/(Gm(n)*km(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return Dm(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return Dm(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*Z0r(r))}Xm.exports=$0r});var Ct=u((_Mr,zm)=>{"use strict";var Q0r=Jm();zm.exports=Q0r});var xs=u((FMr,Ym)=>{"use strict";var K0r=14901161193847656e-24;Ym.exports=K0r});var $m=u((MMr,Zm)=>{"use strict";var rsr=17976931348623157e292;Zm.exports=rsr});var kn=u((xMr,Qm)=>{"use strict";var esr=709.782712893384;Qm.exports=esr});var rq=u((BMr,Km)=>{"use strict";var tsr=sr();function isr(r,e){var t,i,n,a;if(n=tsr(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}Km.exports=isr});var tq=u((CMr,eq)=>{"use strict";function nsr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}eq.exports=nsr});var nq=u((jMr,iq)=>{"use strict";function asr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}iq.exports=asr});var uq=u((VMr,aq)=>{"use strict";function usr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}aq.exports=usr});var oq=u((GMr,sq)=>{"use strict";function ssr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}sq.exports=ssr});var fq=u((UMr,vq)=>{"use strict";function osr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}vq.exports=osr});var cq=u((WMr,lq)=>{"use strict";function vsr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}lq.exports=vsr});var gq=u((HMr,pq)=>{"use strict";function fsr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}pq.exports=fsr});var qq=u((kMr,mq)=>{"use strict";function lsr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}mq.exports=lsr});var wq=u((DMr,dq)=>{"use strict";var csr=b(),yq=sr(),psr=pt(),gsr=j(),msr=J(),qsr=tq(),ysr=nq(),hsr=uq(),dsr=oq(),wsr=fq(),bsr=cq(),Esr=gq(),Nsr=qq(),Dn=1e-300,Asr=13877787807814457e-33,hq=.8450629115104675,Osr=.12837916709551256,Ssr=1,Tsr=-.0023621185607526594,Lsr=1,Isr=-.009864944034847148,Psr=1,Rsr=-.0098649429247001,_sr=1;function Fsr(r){var e,t,i,n,a,s,o,v;if(csr(r))return NaN;if(r===gsr)return 0;if(r===msr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<Asr?1-r:(i=r*r,n=Osr+i*qsr(i),a=Ssr+i*ysr(i),s=n/a,r<.25?1-(r+r*s):(n=r*s,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=Tsr+a*hsr(a),v=Lsr+a*dsr(a),e?1+hq+o/v:1-hq-o/v;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=Isr+a*wsr(a),a=Psr+a*bsr(a);else{if(r<-6)return 2-Dn;n=Rsr+a*Esr(a),a=_sr+a*Nsr(a)}return i=psr(t,0),n=yq(-(i*i)-.5625)*yq((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-Dn:Dn*Dn}dq.exports=Fsr});var Bs=u((XMr,bq)=>{"use strict";var Msr=wq();bq.exports=Msr});var Aq=u((JMr,Nq)=>{"use strict";var xsr=Bs(),Eq=G(),Bsr=sr(),Csr=Gr();function jsr(r,e){var t,i,n,a,s;if(a=xsr(Eq(e)),a!==0&&r>1){for(i=Bsr(-e)/Eq(Csr*e),i*=e,t=.5,i/=t,n=i,s=2;s<r;++s)i/=s-t,i*=e,n+=i;a+=n}return a}Nq.exports=jsr});var Cs=u((zMr,Oq)=>{"use strict";var Vsr=-708.3964185322641;Oq.exports=Vsr});var Iq=u((YMr,Lq)=>{"use strict";var jt=sr(),Xn=Q(),Gsr=B(),Sq=kn(),Tq=Cs();function Usr(r,e){var t,i;return i=r*Gsr(e),e>=1?i<Sq&&-e>Tq?t=Xn(e,r)*jt(-e):r>=1?t=Xn(e/jt(e/r),r):t=jt(i-e):i>Tq?t=Xn(e,r)*jt(-e):e/r<Sq?t=Xn(e/jt(e/r),r):t=jt(i-e),t}Lq.exports=Usr});var js=u((ZMr,Pq)=>{"use strict";function Wsr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Pq.exports=Wsr});var _q=u(($Mr,Rq)=>{"use strict";var Hsr=js();function ksr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new Function(e)();function a(s){return Hsr(r,s)}}Rq.exports=ksr});var xq=u((QMr,Mq)=>{"use strict";var Dsr=w(),Fq=js(),Xsr=_q();Dsr(Fq,"factory",Xsr);Mq.exports=Fq});var Pe=u((KMr,Bq)=>{"use strict";var Jsr=6.283185307179586;Bq.exports=Jsr});var jq=u((rxr,Cq)=>{"use strict";function zsr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}Cq.exports=zsr});var Gq=u((exr,Vq)=>{"use strict";function Ysr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}Vq.exports=Ysr});var Wq=u((txr,Uq)=>{"use strict";function Zsr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}Uq.exports=Zsr});var kq=u((ixr,Hq)=>{"use strict";function $sr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}Hq.exports=$sr});var Xq=u((nxr,Dq)=>{"use strict";function Qsr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}Dq.exports=Qsr});var zq=u((axr,Jq)=>{"use strict";function Ksr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}Jq.exports=Ksr});var Zq=u((uxr,Yq)=>{"use strict";function ror(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}Yq.exports=ror});var Qq=u((sxr,$q)=>{"use strict";function eor(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}$q.exports=eor});var ry=u((oxr,Kq)=>{"use strict";function tor(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Kq.exports=tor});var ty=u((vxr,ey)=>{"use strict";var ior=xq(),nor=Bs(),Vs=G(),aor=sr(),uor=B(),sor=Pe(),oor=jq(),vor=Gq(),lor=Wq(),cor=kq(),por=Xq(),gor=zq(),mor=Zq(),qor=Qq(),yor=ry(),Fr=[0,0,0,0,0,0,0,0,0,0];function hor(r,e){var t,i,n,a,s;return i=(e-r)/r,n=-uor(1+i)+i,a=r*n,s=Vs(2*n),e<r&&(s=-s),Fr[0]=oor(s),Fr[1]=vor(s),Fr[2]=lor(s),Fr[3]=cor(s),Fr[4]=por(s),Fr[5]=gor(s),Fr[6]=mor(s),Fr[7]=qor(s),Fr[8]=yor(s),Fr[9]=-.0005967612901927463,t=ior(Fr,1/r),t*=aor(-a)/Vs(sor*r),e<r&&(t=-t),t+=nor(Vs(a))/2,t}ey.exports=hor});var ny=u((fxr,iy)=>{"use strict";var dor=eval;iy.exports=dor});var uy=u((lxr,ay)=>{"use strict";var wor=ny();function bor(){var r;try{wor('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}ay.exports=bor});var Gs=u((cxr,sy)=>{"use strict";var Eor=uy();sy.exports=Eor});var Vt=u((pxr,oy)=>{"use strict";var Nor=2220446049250313e-31;oy.exports=Nor});var fy=u((gxr,vy)=>{"use strict";var Jn=$(),Aor=Vt(),Oor=1e6;function Sor(r,e){var t,i,n,a,s,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||Aor,a=o.maxTerms||Oor,s=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(s+=n,Jn(i*s)>=Jn(n)||--a===0)break}else do n=r(),s+=n;while(Jn(i*s)<Jn(n)&&--a);return s}vy.exports=Sor});var py=u((mxr,cy)=>{"use strict";var ly=$(),Tor=Vt(),Lor=1e6;function Ior(r,e){var t,i,n,a,s;s={},arguments.length>1&&(s=e),t=s.tolerance||Tor,n=s.maxTerms||Lor,a=s.initialValue||0;do i=r(),a+=i;while(ly(t*a)<ly(i)&&--n);return a}cy.exports=Ior});var Ws=u((qxr,gy)=>{"use strict";var Por=Gs(),Ror=fy(),_or=py(),Us;Por()?Us=Ror:Us=_or;gy.exports=Us});var qy=u((yxr,my)=>{"use strict";function For(r,e){var t=1,i=r,n=e;return a;function a(){var s=t;return i+=1,t*=n/i,s}}my.exports=For});var hy=u((hxr,yy)=>{"use strict";var Mor=Ws(),xor=qy();function Bor(r,e,t){var i,n;return t=t||0,n=xor(r,e),i=Mor(n,{initialValue:t}),i}yy.exports=Bor});var wy=u((dxr,dy)=>{"use strict";function Cor(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}dy.exports=Cor});var Ey=u((wxr,by)=>{"use strict";var jor=wy();by.exports=jor});var Ay=u((bxr,Ny)=>{"use strict";var Vor=Ey();Ny.exports=Vor});var Sy=u((Exr,Oy)=>{"use strict";function Gor(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}Oy.exports=Gor});var Ry=u((Nxr,Py)=>{"use strict";var Uor=b(),Ty=cr(),Ly=xt(),Wor=j(),Hor=J(),Iy=Se(),kor=Sy(),Hs=.6931471803691238,ks=19082149292705877e-26,Dor=.41421356237309503,Xor=-.2928932188134525,Jor=1862645149230957e-24,zor=5551115123125783e-32,Yor=9007199254740992,Zor=.6666666666666666;function $or(r){var e,t,i,n,a,s,o,v,f,l;if(r<-1||Uor(r))return NaN;if(r===-1)return Hor;if(r===Wor||r===0)return r;if(r<0?i=-r:i=r,l=1,i<Dor){if(i<Jor)return i<zor?r:r-r*r*.5;r>Xor&&(l=0,n=r,t=1)}return l!==0&&(i<Yor?(f=1+r,t=Ty(f),l=(t>>20)-Iy,l>0?a=1-(f-r):a=r-(f-1),a/=f):(f=r,t=Ty(f),l=(t>>20)-Iy,a=0),t&=1048575,t<434334?f=Ly(f,t|1072693248):(l+=1,f=Ly(f,t|1071644672),t=1048576-t>>2),n=f-1),e=.5*n*n,t===0?n===0?(a+=l*ks,l*Hs+a):(v=e*(1-Zor*n),l*Hs-(v-(l*ks+a)-n)):(s=n/(2+n),o=s*s,v=o*kor(o),l===0?n-(e-s*(e+v)):l*Hs-(e-(s*(e+v)+(l*ks+a))-n))}Py.exports=$or});var Gt=u((Axr,_y)=>{"use strict";var Qor=Ry();_y.exports=Qor});var My=u((Oxr,Fy)=>{"use strict";var Kor=j();function rvr(r){return r===0&&1/r===Kor}Fy.exports=rvr});var Re=u((Sxr,xy)=>{"use strict";var evr=My();xy.exports=evr});var jy=u((Txr,Cy)=>{"use strict";var By=Re(),Ds=b(),tvr=J(),zn=j();function ivr(r,e){var t,i,n,a;if(t=arguments.length,t===2)return Ds(r)||Ds(e)?NaN:r===zn||e===zn?zn:r===e&&r===0?By(r)?r:e:r>e?r:e;for(i=tvr,a=0;a<t;a++){if(n=arguments[a],Ds(n)||n===zn)return n;(n>i||n===i&&n===0&&By(n))&&(i=n)}return i}Cy.exports=ivr});var Xs=u((Lxr,Vy)=>{"use strict";var nvr=jy();Vy.exports=nvr});var Wy=u((Ixr,Uy)=>{"use strict";var Gy=Ts(),Js=b(),Yn=J(),avr=j();function uvr(r,e){var t,i,n,a;if(t=arguments.length,t===2)return Js(r)||Js(e)?NaN:r===Yn||e===Yn?Yn:r===e&&r===0?Gy(r)?r:e:r<e?r:e;for(i=avr,a=0;a<t;a++){if(n=arguments[a],Js(n)||n===Yn)return n;(n<i||n===i&&n===0&&Gy(n))&&(i=n)}return i}Uy.exports=uvr});var ky=u((Pxr,Hy)=>{"use strict";var svr=Wy();Hy.exports=svr});var Xy=u((Rxr,Dy)=>{"use strict";var ovr=10.900511;Dy.exports=ovr});var zs=u((_xr,Jy)=>{"use strict";var vvr=2.718281828459045;Jy.exports=vvr});var Zy=u((Fxr,Yy)=>{"use strict";var fvr=Ay(),lvr=xi(),cvr=Ct(),pvr=Gt(),gvr=G(),mvr=$(),_e=sr(),Ci=Q(),Ys=Xs(),Zs=ky(),zy=B(),Zn=kn(),ji=Cs(),$s=Xy(),qvr=zs();function yvr(r,e){var t,i,n,a,s,o,v;return n=r+$s-.5,v=(e-r-$s+.5)/n,r<1?e<=ji?_e(r*zy(e)-e-lvr(r)):Ci(e,r)*_e(-e)/cvr(r):(mvr(v*v*r)<=100&&r>150?(t=r*(pvr(v)-v)+e*(.5-$s)/n,t=_e(t)):(a=r*zy(e/n),s=r-e,Zs(a,s)<=ji||Ys(a,s)>=Zn?(i=s/r,Zs(a,s)/2>ji&&Ys(a,s)/2<Zn?(o=Ci(e/n,r/2)*_e(s/2),t=o*o):Zs(a,s)/4>ji&&Ys(a,s)/4<Zn&&e>r?(o=Ci(e/n,r/4)*_e(s/4),t=o*o,t*=t):i>ji&&i<Zn?t=Ci(e*_e(i)/n,r):t=_e(a+s)):t=Ci(e/n,r)*_e(s)),t*=gvr(n/qvr)/fvr(r),t)}Yy.exports=yvr});var Qy=u((Mxr,$y)=>{"use strict";var hvr=.34657359027997264;$y.exports=hvr});var rh=u((xxr,Ky)=>{"use strict";function dvr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}Ky.exports=dvr});var nh=u((Bxr,ih)=>{"use strict";var wvr=b(),Qs=cr(),$n=xt(),eh=j(),bvr=J(),Evr=Se(),Nvr=Qy(),Avr=rh(),Ovr=709.782712893384,Ks=.6931471803691238,ro=19082149292705877e-26,th=1.4426950408889634,Svr=38.816242111356935,Tvr=1.0397207708399179;function Lvr(r){var e,t,i,n,a,s,o,v,f,l,c,p;if(r===eh||wvr(r))return r;if(r===bvr)return-1;if(r===0)return r;if(r<0?(t=!0,o=-r):(t=!1,o=r),o>=Svr){if(t)return-1;if(o>=Ovr)return eh}if(a=Qs(o)|0,o>Nvr)o<Tvr?t?(i=r+Ks,n=-ro,p=-1):(i=r-Ks,n=ro,p=1):(t?p=th*r-.5:p=th*r+.5,p|=0,l=p,i=r-l*Ks,n=l*ro),r=i-n,f=i-r-n;else{if(a<1016070144)return r;p=0}return e=.5*r,v=r*e,s=1+v*Avr(v),l=3-s*e,c=v*((s-l)/(6-r*l)),p===0?r-(r*c-v):(c=r*(c-f)-f,c-=v,p===-1?.5*(r-c)-.5:p===1?r<-.25?-2*(c-(r+.5)):1+2*(r-c):p<=-2||p>56?(o=1-(c-r),i=Qs(o)+(p<<20)|0,o=$n(o,i),o-1):(l=1,p<20?(i=1072693248-(2097152>>p)|0,l=$n(l,i),o=l-(c-r)):(i=Evr-p<<20|0,l=$n(l,i),o=r-(c+l),o+=1),i=Qs(o)+(p<<20)|0,$n(o,i)))}ih.exports=Lvr});var eo=u((Cxr,ah)=>{"use strict";var Ivr=nh();ah.exports=Ivr});var vh=u((jxr,oh)=>{"use strict";var uh=b(),sh=$(),Pvr=eo(),Rvr=B(),_vr=Q(),Fvr=Nn();function Mvr(r,e){var t;if(uh(r)||uh(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((sh(e*(r-1))<.5||sh(e)<.2)&&(t=Rvr(r)*e,t<.5))return Pvr(t)}else if(Fvr(e)!==e)return NaN;return _vr(r,e)-1}oh.exports=Mvr});var lh=u((Vxr,fh)=>{"use strict";var xvr=vh();fh.exports=xvr});var ph=u((Gxr,ch)=>{"use strict";function Bvr(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}ch.exports=Bvr});var mh=u((Uxr,gh)=>{"use strict";function Cvr(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}gh.exports=Cvr});var yh=u((Wxr,qh)=>{"use strict";function jvr(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}qh.exports=jvr});var dh=u((Hxr,hh)=>{"use strict";var to=B(),Vvr=Vt(),Gvr=ph(),Uvr=mh(),Wvr=yh(),Hvr=.15896368026733398,kvr=.5281534194946289,Dvr=.45201730728149414;function Xvr(r,e,t){var i,n,a,s;if(r<Vvr)return-to(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=to(r);while(r>=3);t=r-2}return a=t*(r+1),s=Gvr(t),n+=a*Hvr+a*s,n}return r<1&&(n+=-to(r),t=e,e=r,r+=1),r<=1.5?(a=Uvr(e),i=e*t,n+=i*kvr+i*a,n):(a=t*e,s=Wvr(-t),n+=a*Dvr+a*s,n)}hh.exports=Xvr});var Ah=u((kxr,Nh)=>{"use strict";var wh=Ct(),bh=eo(),Jvr=Gt(),zvr=b(),Eh=dh();function Yvr(r){return zvr(r)?NaN:r<0?r<-.5?wh(1+r)-1:bh(-Jvr(r)+Eh(r+2,r+1,r)):r<2?bh(Eh(r+1,r,r-1)):wh(1+r)-1}Nh.exports=Yvr});var Sh=u((Dxr,Oh)=>{"use strict";var Zvr=Ah();Oh.exports=Zvr});var Lh=u((Xxr,Th)=>{"use strict";function $vr(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,s;function s(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}Th.exports=$vr});var Ph=u((Jxr,Ih)=>{"use strict";var Qvr=lh(),Kvr=Ws(),r1r=Sh(),e1r=Lh();function t1r(r,e,t){var i,n,a,s,o;return n=r1r(r),a=(n+1)/r,s=Qvr(e,r),n-=s,n/=r,o=e1r(r,e),s+=1,i=t?a:0,n=-s*Kvr(o,{initialValue:(i-n)/s}),t&&(n=-n),[n,a]}Ih.exports=t1r});var io=u((zxr,Rh)=>{"use strict";var i1r=11754943508222875e-54;Rh.exports=i1r});var Fh=u((Yxr,_h)=>{"use strict";var Qn=$(),Ur=io(),n1r=Vt(),a1r=1e6;function u1r(r,e,t){var i,n,a,s,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),s=f[1],a=f[0],s===0&&(s=Ur),o=s,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=Ur),o=f[1]+f[0]/o,o===0&&(o=Ur),v=1/v,n=o*v,s*=n);while(Qn(n-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=Ur),o=f[1]+f[0]/o,o===0&&(o=Ur),v=1/v,n=o*v,s*=n);while(f&&Qn(n-1)>e&&--t);return a/s}function s1r(r,e,t){var i,n,a,s,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),a=v[1],a===0&&(a=Ur),s=a,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=Ur),s=v[1]+v[0]/s,s===0&&(s=Ur),o=1/o,n=s*o,a*=n);while(v&&Qn(n-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=Ur),s=v[1]+v[0]/s,s===0&&(s=Ur),o=1/o,n=s*o,a*=n);while(v&&Qn(n-1)>e&&--t);return a}function o1r(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||a1r,n=i.tolerance||n1r,i.keep?s1r(r,n,t):u1r(r,n,t)}_h.exports=o1r});var Bh=u((Zxr,xh)=>{"use strict";var Mh=$(),v1r=Vt(),Ut=io(),f1r=1e6;function l1r(r,e,t){var i,n,a,s,o,v;v=r(),o=v[1],n=v[0],o===0&&(o=Ut),a=o,s=0;do v=r(),v&&(s=v[1]+v[0]*s,s===0&&(s=Ut),a=v[1]+v[0]/a,a===0&&(a=Ut),s=1/s,i=a*s,o*=i);while(v&&Mh(i-1)>e&&--t);return n/o}function c1r(r,e,t){var i,n,a,s,o;o=r(),s=o[1],s===0&&(s=Ut),n=s,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=Ut),n=o[1]+o[0]/n,n===0&&(n=Ut),a=1/a,i=n*a,s*=i);while(o&&Mh(i-1)>e&&--t);return s}function p1r(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||v1r,t=i.maxIter||f1r,i.keep?c1r(r,n,t):l1r(r,n,t)}xh.exports=p1r});var jh=u(($xr,Ch)=>{"use strict";var g1r=Gs(),m1r=Fh(),q1r=Bh(),no;g1r()?no=m1r:no=q1r;Ch.exports=no});var Gh=u((Qxr,Vh)=>{"use strict";function y1r(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}Vh.exports=y1r});var Wh=u((Kxr,Uh)=>{"use strict";var h1r=jh(),d1r=Gh();function w1r(r,e){var t=d1r(r,e);return 1/(e-r+1+h1r(t))}Uh.exports=w1r});var Qh=u((rBr,$h)=>{"use strict";var b1r=xi(),E1r=K(),Vi=Ct(),Hh=$(),N1r=sr(),kh=Q(),Mr=B(),A1r=xs(),Dh=$m(),O1r=Ls(),Xh=kn(),S1r=j(),T1r=rq(),L1r=Aq(),Jh=Iq(),I1r=ty(),ao=hy(),zh=Zy(),P1r=Ph(),Yh=Wh(),R1r=170;function Zh(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,E;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,c=i,p=0,e>=R1r&&!a)return c&&e*4<r?(p=e*Mr(r)-r,p+=Mr(Yh(e,r))):!c&&e>4*r?(p=e*Mr(r)-r,o=0,p+=Mr(ao(e,r,o)/e)):(p=Zh(e,r,!0,c),p===0?c?(p=1+1/(12*e)+1/(288*e*e),p=Mr(p)-e+(e-.5)*Mr(e),p+=Mr(O1r)):(p=e*Mr(r)-r,o=0,p+=Mr(ao(e,r,o)/e)):p=Mr(p)+b1r(e)),p>Xh?S1r:N1r(p);switch(l=e<30&&e<=r+1&&r<Xh,l?(h=E1r(e),q=h===e,v=q?!1:Hh(h-e)===.5):q=v=!1,q&&r>.6?(c=!c,s=0):v&&r>.2?(c=!c,s=1):r<A1r&&e>1?s=6:r<.5?-.4/Mr(r)<e?s=2:s=3:r<1.1?r*.75<e?s=2:s=3:(f=!1,a&&e>20&&(y=Hh((r-e)/e),e>200?20/e>y*y&&(f=!0):y<.4&&(f=!0)),f?s=5:r-1/(3*r)<e?s=2:(s=4,c=!c)),s){case 0:p=T1r(e,r),a===!1&&(p*=Vi(e));break;case 1:p=L1r(e,r),a===!1&&(p*=Vi(e));break;case 2:p=a?zh(e,r):Jh(e,r),p!==0&&(o=0,n=!1,c&&(o=a?1:Vi(e),a||p>=1||Dh*p>o?(o/=p,a||e<1||Dh/e>o?(o*=-e,n=!0):o=0):o=0)),p*=ao(e,r,o)/e,n&&(c=!1,p=-p);break;case 3:c=!c,g=P1r(e,r,c),p=g[0],E=g[1],c=!1,a&&(p/=E);break;case 4:p=a?zh(e,r):Jh(e,r),p!==0&&(p*=Yh(e,r));break;case 5:p=I1r(e,r),r>=e&&(c=!c);break;case 6:p=a?kh(r,e)/Vi(e+1):kh(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),c&&(m=a?1:Vi(e),p=m-p),p}$h.exports=Zh});var uo=u((eBr,Kh)=>{"use strict";var _1r=Qh();Kh.exports=_1r});var ed=u((tBr,rd)=>{"use strict";var F1r=uo(),so=b(),M1r=j();function x1r(r,e,t){return so(r)||so(e)||so(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===M1r?1:F1r(r*t,e)}rd.exports=x1r});var id=u((iBr,td)=>{"use strict";function B1r(r){return e;function e(){return r}}td.exports=B1r});var I=u((nBr,nd)=>{"use strict";var C1r=id();nd.exports=C1r});var sd=u((aBr,ud)=>{"use strict";var ad=b();function j1r(r,e){return ad(r)||ad(e)?NaN:r<e?0:1}ud.exports=j1r});var fd=u((uBr,vd)=>{"use strict";var V1r=I(),od=b();function G1r(r){if(od(r))return V1r(NaN);return e;function e(t){return od(t)?NaN:t<r?0:1}}vd.exports=G1r});var oo=u((sBr,cd)=>{"use strict";var U1r=w(),ld=sd(),W1r=fd();U1r(ld,"factory",W1r);cd.exports=ld});var md=u((oBr,gd)=>{"use strict";var H1r=I(),k1r=oo().factory,D1r=uo(),pd=b(),X1r=j();function J1r(r,e){if(pd(r)||pd(e)||r<0||e<=0)return H1r(NaN);if(r===0)return k1r(0);return t;function t(i){return i<=0?0:i===X1r?1:D1r(i*e,r)}}gd.exports=J1r});var vo=u((vBr,yd)=>{"use strict";var z1r=w(),qd=ed(),Y1r=md();z1r(qd,"factory",Y1r);yd.exports=qd});var dd=u((fBr,hd)=>{"use strict";var Z1r=vo();function $1r(r,e){return Z1r(r,e/2,.5)}hd.exports=$1r});var bd=u((lBr,wd)=>{"use strict";var Q1r=vo().factory;function K1r(r){return Q1r(r/2,.5)}wd.exports=K1r});var Ad=u((cBr,Nd)=>{"use strict";var rfr=w(),Ed=dd(),efr=bd();rfr(Ed,"factory",efr);Nd.exports=Ed});var Td=u((pBr,Sd)=>{"use strict";var tfr=S(),ifr=A(),nfr=sn(),Od=["values","indices","*"];function afr(r,e){return tfr(e)?ifr(e,"returns")&&(r.returns=e.returns,nfr(Od,r.returns)===-1)?new TypeError('invalid option. `returns` option must be one of the following: "'+Od.join('", "')+'". Option: `'+r.returns+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}Sd.exports=afr});var Id=u((gBr,Ld)=>{"use strict";var ufr=A();function sfr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),ufr(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}Ld.exports=sfr});var Rd=u((mBr,Pd)=>{"use strict";var ofr=A();function vfr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),ofr(t,n)?t[n].push(a):t[n]=[a];return t}Pd.exports=vfr});var Fd=u((qBr,_d)=>{"use strict";var ffr=A();function lfr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),ffr(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}_d.exports=lfr});var Bd=u((yBr,xd)=>{"use strict";var Md=_r(),cfr=Td(),pfr=Id(),gfr=Rd(),mfr=Fd();function qfr(r,e,t){var i,n,a;if(!Md(r))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+r+"`.");if(i={returns:"values"},arguments.length===2)a=e;else{if(n=cfr(i,e),n)throw n;a=t}if(!Md(a))throw new TypeError("invalid argument. Last argument must be a collection. Value: `"+a+"`.");if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?pfr(r,a):i.returns==="indices"?gfr(r,a):mfr(r,a)}xd.exports=qfr});var jd=u((hBr,Cd)=>{"use strict";var yfr=Bd();Cd.exports=yfr});var Gd=u((dBr,Vd)=>{"use strict";function hfr(r){var e,t,i,n,a,s;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)s=r[a],e=s-t,t+=e/(a+1),n+=e*(s-t);return n/(a-1)}Vd.exports=hfr});var Hd=u((wBr,Wd)=>{"use strict";var dfr=fr(),wfr=x().isPrimitive,bfr=S(),Efr=tr(),Ud=A();function Nfr(r,e){return bfr(e)?Ud(e,"alpha")&&(r.alpha=e.alpha,!wfr(r.alpha)||Efr(r.alpha))?new TypeError("invalid option. `alpha` option must be a number primitive. Option: `"+r.alpha+"`."):Ud(e,"groups")&&(r.groups=e.groups,!dfr(r.groups))?new TypeError("invalid option. `groups` option must be an array. Option: `"+r.groups+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}Wd.exports=Nfr});var fo=u((bBr,kd)=>{"use strict";var Afr=Rr().isPrimitive;function Ofr(r){return Afr(r)&&r>0}kd.exports=Ofr});var lo=u((EBr,Dd)=>{"use strict";var Sfr=Rr().isObject;function Tfr(r){return Sfr(r)&&r.valueOf()>0}Dd.exports=Tfr});var Jd=u((NBr,Xd)=>{"use strict";var Lfr=fo(),Ifr=lo();function Pfr(r){return Lfr(r)||Ifr(r)}Xd.exports=Pfr});var Yr=u((ABr,Yd)=>{"use strict";var zd=w(),co=Jd(),Rfr=fo(),_fr=lo();zd(co,"isPrimitive",Rfr);zd(co,"isObject",_fr);Yd.exports=co});var Kn=u((OBr,Zd)=>{"use strict";var Ffr=9007199254740991;Zd.exports=Ffr});var Qd=u((SBr,$d)=>{"use strict";var Mfr=308;$d.exports=Mfr});var rw=u((TBr,Kd)=>{"use strict";var xfr=-308;Kd.exports=xfr});var tw=u((LBr,ew)=>{"use strict";var Bfr=-324;ew.exports=Bfr});var vw=u((IBr,ow)=>{"use strict";var iw=b(),ra=Oe(),nw=Q(),Cfr=$(),aw=Es(),jfr=Kn(),uw=Qd(),Vfr=rw(),Gfr=tw(),Ufr=jfr+1,sw=1e308;function Wfr(r,e){var t,i;return iw(r)||iw(e)||ra(e)?NaN:ra(r)||r===0||e<Gfr||Cfr(r)>Ufr&&e<=0?r:e>uw?0*r:e<Vfr?(t=nw(10,-(e+uw)),i=r*sw*t,ra(i)?r:aw(i)/sw/t):(t=nw(10,-e),i=r*t,ra(i)?r:aw(i)/t)}ow.exports=Wfr});var lw=u((PBr,fw)=>{"use strict";var Hfr=vw();fw.exports=Hfr});var gw=u((RBr,pw)=>{"use strict";var kfr=Yr(),Dfr=S(),Xfr=ar().isPrimitive,cw=A(),po=lw();function Jfr(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!Dfr(r))throw new TypeError("invalid argument. First argument must be an options object. Value: `"+r+"`.");if(cw(r,"digits")){if(!kfr(r.digits))throw new TypeError("invalid option. `digits` option must be a positive integer. Option: `"+r.digits+"`.");t=r.digits}if(cw(r,"decision")){if(!Xfr(r.decision))throw new TypeError("invalid option. `decision` option must be a boolean primitive. Option: `"+r.decision+"`.");e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+po(this.pValue,-t)+`
`,i+="    statistic: "+po(this.statistic,-t)+`
`,i+="    df: "+po(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}pw.exports=Jfr});var yw=u((_Br,qw)=>{"use strict";var zfr=_r(),Yfr=S(),gt=a8(),Zfr=Ei(),$fr=Ad(),Qfr=jd(),mw=B(),Kfr=Gd(),rlr=Hd(),elr=gw();function tlr(){var r,e,t,i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N;if(v=[],e=arguments.length,f={},Yfr(arguments[e-1])&&(r=arguments[e-1],e-=1,q=rlr(f,r),q))throw q;if(f.groups){if(n=Qfr(arguments[0],f.groups),i=Zfr(n),e=i.length,e<2)throw new Error("invalid number of groups. `groups` array must contain at least two unique elements. Value: `"+i+"`.");for(N=0;N<e;N++)v.push(n[i[N]])}else for(N=0;N<e;N++)v.push(arguments[N]);for(s=0,t=0,o=0,y=0,h=new Array(e),E=h.slice(),N=0;N<e;N++){if(p=v[N],!zfr(p))throw new TypeError("invalid argument. Must provide array-like arguments. Value: `"+p+"`.");if(p.length===0)throw new Error("invalid argument. Supplied arrays cannot be empty. Value: `"+p+"`.");h[N]=p.length-1,s+=h[N],t+=1/h[N],E[N]=Kfr(p),o+=h[N]*E[N],y+=h[N]*mw(E[N])}if(o/=s,f.alpha===void 0?a=.05:a=f.alpha,a<0||a>1)throw new RangeError("invalid argument. Option `alpha` must be a number in the range 0 to 1. Value: `"+a+"`.");return c=s*mw(o)-y,c/=1+(t-1/s)/(3*(e-1)),g=e-1,l=1-$fr(c,g),m={},gt(m,"rejected",l<=a),gt(m,"alpha",a),gt(m,"pValue",l),gt(m,"statistic",c),gt(m,"df",g),gt(m,"method","Bartlett's test of equal variances"),gt(m,"print",elr),m}qw.exports=tlr});var dw=u((FBr,hw)=>{"use strict";var ilr=yw();hw.exports=ilr});var bw=u((MBr,ww)=>{"use strict";function nlr(r){var e,t,i,n,a,s,o,v,f,l,c;if(v=r.length,t=[],v===0)return t;if(n=r[0],f=n.length,v===1){for(l=0;l<f;l++)t.push(n[l]);return t}for(e=[f],l=1;l<v;l++)e.push(r[l].length),e[l]>f&&(f=e[l]);for(l=0;l<f;l++)t.push(0);for(l=f-1;l>=0;){for(a=e[0]-f+l,a>=0?i=n[a]:i=1,c=1;c<v;c++){if(s=e[c]-f+l,s>=0?o=r[c][s]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[l]=i,l-=1}return t}ww.exports=nlr});var Nw=u((xBr,Ew)=>{"use strict";var alr=bw();Ew.exports=alr});var ea=u((BBr,Aw)=>{"use strict";function ulr(r){var e,t,i,n,a,s;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)e.push(n[s]);return e}Aw.exports=ulr});var Sw=u((CBr,Ow)=>{"use strict";var slr=x().isPrimitive,olr=D().isPrimitive,vlr=ar().isPrimitive,flr=fr(),llr=Nw(),clr=T(),plr=ea(),glr={number:slr,string:olr,boolean:vlr};function mlr(r,e,t){var i,n,a,s,o,v,f,l,c,p;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],n=[],p=0;p<r.length;p++)if(c=r[p],o=e[p],l=glr[o],l(c))n.push([c]),a.push([1,1]);else if(flr(c))n.push(plr(c)),a.push([c.length,c[0].length]);else throw new TypeError(clr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[p],o,o,String(c)));if(s=llr(a),s===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");for(i=[],p=0;p<a.length;p++)f=a[p],v=[],f[0]===1?v.push(0):v.push(f[1]),f[1]===1?v.push(0):v.push(1),i.push(v);return[n,s,i]}Ow.exports=mlr});var Lw=u((jBr,Tw)=>{"use strict";var go=b(),qlr=Re();function ylr(r,e,t,i,n){var a,s,o,v,f;if(r<=0)return i;if(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,a=e[s],i[o]=a,o+=n,f=1,go(a)===!1)for(f;f<r;f++){if(s+=t,v=e[s],go(v)){a=v;break}(v>a||v===a&&qlr(v))&&(a=v),i[o]=a,o+=n}if(go(a))for(f;f<r;f++)i[o]=a,o+=n;return i}Tw.exports=ylr});var Pw=u((VBr,Iw)=>{"use strict";var mo=b(),hlr=Re();function dlr(r,e,t,i,n,a,s){var o,v,f,l,c;if(r<=0)return n;if(v=i,f=s,o=e[v],n[f]=o,f+=a,c=1,mo(o)===!1)for(c;c<r;c++){if(v+=t,l=e[v],mo(l)){o=l;break}(l>o||l===o&&hlr(l))&&(o=l),n[f]=o,f+=a}if(mo(o))for(c;c<r;c++)n[f]=o,f+=a;return n}Iw.exports=dlr});var Fw=u((GBr,_w)=>{"use strict";var wlr=w(),Rw=Lw(),blr=Pw();wlr(Rw,"ndarray",blr);_w.exports=Rw});var xw=u((UBr,Mw)=>{"use strict";var Elr=Fw();Mw.exports=Elr});var jw=u((WBr,Cw)=>{"use strict";var Bw=ds();function Nlr(r,e,t){var i,n;if(e===1)return Bw(t,r);for(i=[],n=0;n<r;n++)i.push(Bw(t,e));return i}Cw.exports=Nlr});var Gw=u((HBr,Vw)=>{"use strict";function Alr(r,e,t){var i,n;for(i=[],n=0;n<r;n++)i.push(e.call(t,n));return i}Vw.exports=Alr});var Ww=u((kBr,Uw)=>{"use strict";var Olr=Gw();Uw.exports=Olr});var Dw=u((DBr,kw)=>{"use strict";var Hw=Ww();function Slr(r,e,t){var i,n;if(e===1)return Hw(r,t);for(i=[],n=0;n<r;n++)i.push(Hw(e,t));return i}kw.exports=Slr});var qo=u((XBr,Xw)=>{"use strict";var Tlr=x().isPrimitive;function Llr(r){return Tlr(r)&&r>0}Xw.exports=Llr});var yo=u((JBr,Jw)=>{"use strict";var Ilr=x().isObject;function Plr(r){return Ilr(r)&&r.valueOf()>0}Jw.exports=Plr});var Yw=u((zBr,zw)=>{"use strict";var Rlr=qo(),_lr=yo();function Flr(r){return Rlr(r)||_lr(r)}zw.exports=Flr});var U=u((YBr,$w)=>{"use strict";var Zw=w(),ho=Yw(),Mlr=qo(),xlr=yo();Zw(ho,"isPrimitive",Mlr);Zw(ho,"isObject",xlr);$w.exports=ho});var Kw=u((ZBr,Qw)=>{"use strict";var Blr=L();function Clr(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&Blr(r.next)}Qw.exports=Clr});var eb=u(($Br,rb)=>{"use strict";var jlr=Kw();rb.exports=jlr});var ib=u((QBr,tb)=>{"use strict";function Vlr(r,e){return r[e]}tb.exports=Vlr});var ab=u((KBr,nb)=>{"use strict";function Glr(r,e){return r.get(e)}nb.exports=Glr});var sb=u((rCr,ub)=>{"use strict";function Ulr(r,e,t){r[e]=t}ub.exports=Ulr});var vb=u((eCr,ob)=>{"use strict";function Wlr(r,e,t){r.set(t,e)}ob.exports=Wlr});var lb=u((tCr,fb)=>{"use strict";var Hlr=ib(),klr=ab(),Dlr=sb(),Xlr=vb();function Jlr(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?klr:Hlr,setter:e?Xlr:Dlr}}fb.exports=Jlr});var mt=u((iCr,cb)=>{"use strict";var zlr=lb();cb.exports=zlr});var mb=u((nCr,gb)=>{"use strict";var pb=L(),Ylr=_r(),Zlr=eb(),$lr=mt();function Qlr(){var r,e,t,i,n,a,s,o;if(r=arguments[0],arguments.length>1)if(Ylr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!pb(t))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+t+"`.");e=arguments[3]}}else{if(t=arguments[1],!pb(t))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+t+"`.");e=arguments[2]}if(!Zlr(r))throw new TypeError("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(s=-1,i===void 0){if(i=[],t){for(;s+=1,o=r.next(),!o.done;)i.push(t.call(e,o.value,s));return i}for(;o=r.next(),!o.done;)i.push(o.value);return i}if(n=i.length,a=$lr(i).setter,t){for(;s<n-1&&(s+=1,o=r.next(),!o.done);)a(i,s,t.call(e,o.value,s));return i}for(;s<n-1&&(s+=1,o=r.next(),!o.done);)a(i,s,o.value);return i}gb.exports=Qlr});var yb=u((aCr,qb)=>{"use strict";var Klr=mb();qb.exports=Klr});var db=u((uCr,hb)=>{"use strict";var r2r=A();function e2r(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"&&r2r(Symbol,"iterator")&&typeof Symbol.iterator=="symbol"}hb.exports=e2r});var ta=u((sCr,wb)=>{"use strict";var t2r=db();wb.exports=t2r});var Eb=u((oCr,bb)=>{"use strict";var i2r=ta(),n2r=i2r()?Symbol.iterator:null;bb.exports=n2r});var ia=u((vCr,Nb)=>{"use strict";var a2r=Eb();Nb.exports=a2r});var Ob=u((fCr,Ab)=>{"use strict";function u2r(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}Ab.exports=u2r});var Tb=u((lCr,Sb)=>{"use strict";function s2r(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}Sb.exports=s2r});var Pb=u((cCr,Ib)=>{"use strict";var o2r=cr(),Lb=pt(),v2r=Ob(),f2r=Tb(),l2r=.7853981633974483,c2r=3061616997868383e-32,p2r=.3333333333333341,g2r=2147483647;function m2r(r,e,t){var i,n,a,s,o,v,f,l,c;return i=o2r(r),n=i&g2r|0,n>=1072010280&&(r<0&&(r=-r,e=-e),c=l2r-r,l=c2r-e,r=c+l,e=0),c=r*r,l=c*c,s=v2r(l),f=c*f2r(l),o=c*r,s=e+c*(o*(s+f)+e),s+=p2r*o,l=r+s,n>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(l*l/(l+f)-s)))):t===1?l:(c=l,Lb(c,0),f=s-(c-r),a=-1/l,v=a,Lb(v,0),o=1+v*c,v+a*(o+v*f))}Ib.exports=m2r});var _b=u((pCr,Rb)=>{"use strict";var q2r=Pb();Rb.exports=q2r});var xb=u((gCr,Mb)=>{"use strict";var y2r=cr(),Fb=_b(),h2r=Bn(),wo=[0,0],d2r=2147483647,w2r=1072243195,b2r=2146435072,E2r=1044381696;function N2r(r){var e,t;return e=y2r(r),e&=d2r,e<=w2r?e<E2r?r:Fb(r,0,1):e>=b2r?NaN:(t=h2r(r,wo),Fb(wo[0],wo[1],1-((t&1)<<1)))}Mb.exports=N2r});var bo=u((mCr,Bb)=>{"use strict";var A2r=xb();Bb.exports=A2r});var na=u((qCr,Cb)=>{"use strict";var O2r=1.5707963267948966;Cb.exports=O2r});var aa=u((yCr,jb)=>{"use strict";var S2r=.7853981633974483;jb.exports=S2r});var Gb=u((hCr,Vb)=>{"use strict";function T2r(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}Vb.exports=T2r});var Wb=u((dCr,Ub)=>{"use strict";function L2r(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}Ub.exports=L2r});var Db=u((wCr,kb)=>{"use strict";var I2r=b(),P2r=j(),Eo=na(),R2r=aa(),_2r=J(),F2r=Gb(),M2r=Wb(),Hb=6123233995736766e-32,x2r=2.414213562373095;function B2r(r){var e,t,i,n;return I2r(r)||r===0?r:r===P2r?Eo:r===_2r?-Eo:(r<0&&(t=!0,r=-r),e=0,r>x2r?(i=Eo,e=1,r=-(1/r)):r<=.66?i=0:(i=R2r,e=2,r=(r-1)/(r+1)),n=r*r,n=n*F2r(n)/M2r(n),n=r*n+r,e===2?n+=.5*Hb:e===1&&(n+=Hb),i+=n,t?-i:i)}kb.exports=B2r});var ua=u((bCr,Xb)=>{"use strict";var C2r=Db();Xb.exports=C2r});var No=u((ECr,Jb)=>{"use strict";var j2r=x().isPrimitive;function V2r(r){return j2r(r)&&r>=0}Jb.exports=V2r});var Ao=u((NCr,zb)=>{"use strict";var G2r=x().isObject;function U2r(r){return G2r(r)&&r.valueOf()>=0}zb.exports=U2r});var Zb=u((ACr,Yb)=>{"use strict";var W2r=No(),H2r=Ao();function k2r(r){return W2r(r)||H2r(r)}Yb.exports=k2r});var So=u((OCr,Qb)=>{"use strict";var $b=w(),Oo=Zb(),D2r=No(),X2r=Ao();$b(Oo,"isPrimitive",D2r);$b(Oo,"isObject",X2r);Qb.exports=Oo});var rE=u((SCr,Kb)=>{"use strict";var J2r=S(),sa=A(),z2r=Rr().isPrimitive,Y2r=Yr().isPrimitive,Z2r=Ae().isPrimitive,$2r=So().isPrimitive;function Q2r(r,e){return J2r(e)?sa(e,"period")&&(r.period=e.period,!Y2r(e.period))?new TypeError("invalid option. `period` option must be an positive integer. Option: `"+e.period+"`."):sa(e,"amplitude")&&(r.amplitude=e.amplitude,!$2r(e.amplitude))?new TypeError("invalid option. `amplitude` option must be a nonnegative number. Option: `"+e.amplitude+"`."):sa(e,"offset")&&(r.offset=e.offset,!z2r(e.offset))?new TypeError("invalid option. `offset` option must be an integer. Option: `"+e.offset+"`."):sa(e,"iter")&&(r.iter=e.iter,!Z2r(e.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}Kb.exports=Q2r});var nE=u((TCr,iE)=>{"use strict";var To=w(),eE=ia(),K2r=bo(),rcr=ua(),ecr=na(),tcr=Gr(),icr=rE();function tE(r){var e,t,i,n,a,s,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=icr(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,s=tcr/e.period,o=e.amplitude/ecr,v=0,t={},To(t,"next",f),To(t,"return",l),eE&&To(t,eE,c),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*rcr(K2r(s*a)),done:!1})}function l(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function c(){return tE(e)}}iE.exports=tE});var uE=u((LCr,aE)=>{"use strict";var ncr=nE();aE.exports=ncr});var oE=u((ICr,sE)=>{"use strict";function acr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}sE.exports=acr});var fE=u((PCr,vE)=>{"use strict";function ucr(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}vE.exports=ucr});var gE=u((RCr,pE)=>{"use strict";var lE=x().isPrimitive,cE=Ee(),Gi=w(),scr=oE(),ocr=fE();function qt(r,e){if(!(this instanceof qt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!lE(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!lE(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return cE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),cE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Gi(qt,"BYTES_PER_ELEMENT",8);Gi(qt.prototype,"BYTES_PER_ELEMENT",8);Gi(qt.prototype,"byteLength",16);Gi(qt.prototype,"toString",scr);Gi(qt.prototype,"toJSON",ocr);pE.exports=qt});var Wt=u((_Cr,mE)=>{"use strict";var vcr=gE();mE.exports=vcr});var yE=u((FCr,qE)=>{"use strict";var fcr=typeof Math.fround=="function"?Math.fround:null;qE.exports=fcr});var wE=u((MCr,dE)=>{"use strict";var lcr=Dr(),hE=new lcr(1);function ccr(r){return hE[0]=r,hE[0]}dE.exports=ccr});var NE=u((xCr,EE)=>{"use strict";var bE=yE(),pcr=wE(),Lo;typeof bE=="function"?Lo=bE:Lo=pcr;EE.exports=Lo});var OE=u((BCr,AE)=>{"use strict";function gcr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}AE.exports=gcr});var TE=u((CCr,SE)=>{"use strict";function mcr(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}SE.exports=mcr});var _E=u((jCr,RE)=>{"use strict";var LE=x().isPrimitive,IE=Ee(),Ui=w(),PE=NE(),qcr=OE(),ycr=TE();function yt(r,e){if(!(this instanceof yt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!LE(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!LE(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return IE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:PE(r)}),IE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:PE(e)}),this}Ui(yt,"BYTES_PER_ELEMENT",4);Ui(yt.prototype,"BYTES_PER_ELEMENT",4);Ui(yt.prototype,"byteLength",8);Ui(yt.prototype,"toString",qcr);Ui(yt.prototype,"toJSON",ycr);RE.exports=yt});var Ht=u((VCr,FE)=>{"use strict";var hcr=_E();FE.exports=hcr});var xE=u((GCr,ME)=>{"use strict";var dcr=Wt(),wcr=Ht();function bcr(r){return r instanceof dcr||r instanceof wcr?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}ME.exports=bcr});var xr=u((UCr,BE)=>{"use strict";var Ecr=xE();BE.exports=Ecr});var jE=u((WCr,CE)=>{"use strict";var Ncr={Complex64:"complex64",Complex128:"complex128"};CE.exports=Ncr});var GE=u((HCr,VE)=>{"use strict";var Acr=Ht(),Ocr=Wt(),Scr=[Acr,Ocr];VE.exports=Scr});var WE=u((kCr,UE)=>{"use strict";var Tcr=["complex64","complex128"];UE.exports=Tcr});var DE=u((DCr,kE)=>{"use strict";var Lcr=Ne(),Icr=jE(),Pcr=GE(),HE=WE(),Rcr=HE.length;function _cr(r){var e;for(e=0;e<Rcr;e++)if(r instanceof Pcr[e])return HE[e];return Icr[Lcr(r)]||null}kE.exports=_cr});var Io=u((XCr,XE)=>{"use strict";var Fcr=DE();XE.exports=Fcr});var zE=u((JCr,JE)=>{"use strict";var Mcr=4294967295;JE.exports=Mcr});var ZE=u((zCr,YE)=>{"use strict";var xcr=Ar(),Bcr=zE();function Ccr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&xcr(r.length)&&r.length>=0&&r.length<=Bcr}YE.exports=Ccr});var ht=u((YCr,$E)=>{"use strict";var jcr=ZE();$E.exports=jcr});var KE=u((ZCr,QE)=>{"use strict";var Vcr=Z(),Gcr=typeof ArrayBuffer=="function";function Ucr(r){return Gcr&&r instanceof ArrayBuffer||Vcr(r)==="[object ArrayBuffer]"}QE.exports=Ucr});var Po=u(($Cr,rN)=>{"use strict";var Wcr=KE();rN.exports=Wcr});var tN=u((QCr,eN)=>{"use strict";var Hcr=Ee();function kcr(r,e,t){Hcr(r,e,{configurable:!1,enumerable:!1,get:t})}eN.exports=kcr});var P=u((KCr,iN)=>{"use strict";var Dcr=tN();iN.exports=Dcr});var aN=u((rjr,nN)=>{"use strict";function Xcr(r){return r.re}nN.exports=Xcr});var Fe=u((ejr,uN)=>{"use strict";var Jcr=aN();uN.exports=Jcr});var oN=u((tjr,sN)=>{"use strict";function zcr(r){return r.im}sN.exports=zcr});var Me=u((ijr,vN)=>{"use strict";var Ycr=oN();vN.exports=Ycr});var lN=u((njr,fN)=>{"use strict";var Zcr=Dr();function $cr(r,e){return new Zcr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}fN.exports=$cr});var kt=u((ajr,cN)=>{"use strict";var Qcr=lN();cN.exports=Qcr});var gN=u((ujr,pN)=>{"use strict";var Kcr=lr();function rpr(r,e){return new Kcr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}pN.exports=rpr});var Dt=u((sjr,mN)=>{"use strict";var epr=gN();mN.exports=epr});var yN=u((ojr,qN)=>{"use strict";var tpr=ht(),ipr=xr(),npr=Fe(),apr=Me();function upr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,tpr(i)&&i.length>=2)e.push(i[0],i[1]);else if(ipr(i))e.push(npr(i),apr(i));else return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");return e}qN.exports=upr});var dN=u((vjr,hN)=>{"use strict";var spr=ht(),opr=xr(),vpr=Fe(),fpr=Me();function lpr(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),spr(a)&&a.length>=2)i.push(a[0],a[1]);else if(opr(a))i.push(vpr(a),fpr(a));else return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+a+"`.");return i}hN.exports=lpr});var bN=u((fjr,wN)=>{"use strict";var cpr=xr(),ppr=Fe(),gpr=Me();function mpr(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!cpr(i))return null;r[a]=ppr(i),r[a+1]=gpr(i),a+=2}return r}wN.exports=mpr});var PN=u((ljr,IN)=>{"use strict";var Wi=Ae().isPrimitive,EN=ht(),_o=_r(),NN=Po(),AN=dn(),qpr=fr(),dt=L(),Xt=xr(),oa=jn(),Ro=Ar(),ypr=ta(),Jt=ia(),gr=w(),la=P(),Lr=lr(),ON=Wt(),va=Fe(),fa=Me(),hpr=kt(),dpr=Dt(),wpr=mt(),SN=yN(),bpr=dN(),Epr=bN(),Or=Lr.BYTES_PER_ELEMENT*2,TN=ypr();function zt(r){return r instanceof z||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function LN(r){return r===z||r.name==="Complex64Array"}function Npr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Or/2}function Apr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Or}function z(){var r,e,t,i;if(e=arguments.length,!(this instanceof z))return e===0?new z:e===1?new z(arguments[0]):e===2?new z(arguments[0],arguments[1]):new z(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Lr(0);else if(e===1)if(Wi(arguments[0]))t=new Lr(arguments[0]*2);else if(_o(arguments[0]))if(t=arguments[0],i=t.length,i&&qpr(t)&&Xt(t[0])){if(t=Epr(new Lr(i*2),t),t===null){if(!oa(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Lr(arguments[0])}}else{if(Npr(t))t=hpr(t,0);else if(Apr(t))t=dpr(t,0);else if(!oa(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Lr(t)}else if(NN(arguments[0])){if(t=arguments[0],!Ro(t.byteLength/Or))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Or+". Byte length: `"+t.byteLength+"`.");t=new Lr(t)}else if(AN(arguments[0])){if(t=arguments[0],TN===!1)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!dt(t[Jt]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(t=t[Jt](),!dt(t.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(t=SN(t),t instanceof Error)throw t;t=new Lr(t)}else throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");else{if(t=arguments[0],!NN(t))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(r=arguments[1],!Wi(r))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Ro(r/Or))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Or+". Value: `"+r+"`.");if(e===2){if(i=t.byteLength-r,!Ro(i/Or))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Or+". View byte length: `"+i+"`.");t=new Lr(t,r)}else{if(i=arguments[2],!Wi(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*Or>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*Or+"`.");t=new Lr(t,r,i*2)}}return gr(this,"_buffer",t),gr(this,"_length",t.length/2),this}gr(z,"BYTES_PER_ELEMENT",Or);gr(z,"name","Complex128Array");gr(z,"from",function(e){var t,i,n,a,s,o,v,f,l,c,p;if(!dt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!LN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!dt(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");i>2&&(t=arguments[2])}if(zt(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,e.get(c),c),Xt(l))s[p]=va(l),s[p+1]=fa(l);else if(EN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(_o(e)){if(n){for(v=e.length,o=wpr(e),c=0;c<v;c++)if(!Xt(o.getter(e,c))){f=!0;break}if(f){if(!oa(v))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+v+"`.");for(a=new this(v/2),s=a._buffer,c=0;c<v;c++)s[c]=n.call(t,o.getter(e,c),c);return a}for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,o.getter(e,c),c),Xt(l))s[p]=va(l),s[p+1]=fa(l);else if(EN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(AN(e)&&TN&&dt(e[Jt])){if(s=e[Jt](),!dt(s.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(n?o=bpr(s,n,t):o=SN(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,c=0;c<v;c++)s[c]=o[c];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")});gr(z,"of",function(){var e,t;if(!dt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!LN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});la(z.prototype,"buffer",function(){return this._buffer.buffer});la(z.prototype,"byteLength",function(){return this._buffer.byteLength});la(z.prototype,"byteOffset",function(){return this._buffer.byteOffset});gr(z.prototype,"BYTES_PER_ELEMENT",z.BYTES_PER_ELEMENT);gr(z.prototype,"copyWithin",function(e,t){if(!zt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});gr(z.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!zt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},gr(i,"next",v),gr(i,"return",f),Jt&&gr(i,Jt,l),i;function v(){var c;return s+=1,a||s>=n?{done:!0}:(o+=2,c=new ON(e[o],e[o+1]),{value:[s,c],done:!1})}function f(c){return a=!0,arguments.length?{value:c,done:!0}:{done:!0}}function l(){return t.entries()}});gr(z.prototype,"get",function(e){var t;if(!zt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Wi(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new ON(t[e],t[e+1])});la(z.prototype,"length",function(){return this._length});gr(z.prototype,"set",function(e){var t,i,n,a,s,o,v,f,l;if(!zt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Wi(i))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+i+"`.")}else i=0;if(Xt(e)){if(i>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+i+"`.");i*=2,n[i]=va(e),n[i+1]=fa(e);return}if(zt(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,l=n.byteOffset+i*Or,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Lr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(_o(e)){for(o=e.length,f=0;f<o;f++)if(!Xt(e[f])){s=!0;break}if(s){if(!oa(o))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+o+"`.");if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,l=n.byteOffset+i*Or,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Lr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=va(v),n[i+1]=fa(v),i+=2;return}throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.")});IN.exports=z});var Hi=u((cjr,RN)=>{"use strict";var Opr=PN();RN.exports=Opr});var FN=u((pjr,_N)=>{"use strict";function Spr(r){return r.re}_N.exports=Spr});var xe=u((gjr,MN)=>{"use strict";var Tpr=FN();MN.exports=Tpr});var BN=u((mjr,xN)=>{"use strict";function Lpr(r){return r.im}xN.exports=Lpr});var Be=u((qjr,CN)=>{"use strict";var Ipr=BN();CN.exports=Ipr});var VN=u((yjr,jN)=>{"use strict";var Ppr=ht(),Rpr=xr(),_pr=xe(),Fpr=Be();function Mpr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,Ppr(i)&&i.length>=2)e.push(i[0],i[1]);else if(Rpr(i))e.push(_pr(i),Fpr(i));else return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");return e}jN.exports=Mpr});var UN=u((hjr,GN)=>{"use strict";var xpr=ht(),Bpr=xr(),Cpr=xe(),jpr=Be();function Vpr(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),xpr(a)&&a.length>=2)i.push(a[0],a[1]);else if(Bpr(a))i.push(Cpr(a),jpr(a));else return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+a+"`.");return i}GN.exports=Vpr});var HN=u((djr,WN)=>{"use strict";var Gpr=xr(),Upr=xe(),Wpr=Be();function Hpr(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!Gpr(i))return null;r[a]=Upr(i),r[a+1]=Wpr(i),a+=2}return r}WN.exports=Hpr});var QN=u((wjr,$N)=>{"use strict";var ki=Ae().isPrimitive,kN=ht(),Mo=_r(),DN=Po(),XN=dn(),kpr=fr(),wt=L(),Yt=xr(),ca=jn(),Fo=Ar(),Dpr=ta(),Zt=ia(),mr=w(),ma=P(),Ir=Dr(),JN=Ht(),pa=xe(),ga=Be(),Xpr=kt(),Jpr=Dt(),zpr=mt(),zN=VN(),Ypr=UN(),Zpr=HN(),Sr=Ir.BYTES_PER_ELEMENT*2,YN=Dpr();function $t(r){return r instanceof Y||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function ZN(r){return r===Y||r.name==="Complex128Array"}function $pr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Sr}function Qpr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Sr*2}function Y(){var r,e,t,i;if(e=arguments.length,!(this instanceof Y))return e===0?new Y:e===1?new Y(arguments[0]):e===2?new Y(arguments[0],arguments[1]):new Y(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Ir(0);else if(e===1)if(ki(arguments[0]))t=new Ir(arguments[0]*2);else if(Mo(arguments[0]))if(t=arguments[0],i=t.length,i&&kpr(t)&&Yt(t[0])){if(t=Zpr(new Ir(i*2),t),t===null){if(!ca(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Ir(arguments[0])}}else{if($pr(t))t=Xpr(t,0);else if(Qpr(t))t=Jpr(t,0);else if(!ca(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Ir(t)}else if(DN(arguments[0])){if(t=arguments[0],!Fo(t.byteLength/Sr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Sr+". Byte length: `"+t.byteLength+"`.");t=new Ir(t)}else if(XN(arguments[0])){if(t=arguments[0],YN===!1)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!wt(t[Zt]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(t=t[Zt](),!wt(t.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(t=zN(t),t instanceof Error)throw t;t=new Ir(t)}else throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");else{if(t=arguments[0],!DN(t))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(r=arguments[1],!ki(r))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Fo(r/Sr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Sr+". Value: `"+r+"`.");if(e===2){if(i=t.byteLength-r,!Fo(i/Sr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Sr+". View byte length: `"+i+"`.");t=new Ir(t,r)}else{if(i=arguments[2],!ki(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*Sr>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*Sr+"`.");t=new Ir(t,r,i*2)}}return mr(this,"_buffer",t),mr(this,"_length",t.length/2),this}mr(Y,"BYTES_PER_ELEMENT",Sr);mr(Y,"name","Complex64Array");mr(Y,"from",function(e){var t,i,n,a,s,o,v,f,l,c,p;if(!wt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ZN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!wt(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");i>2&&(t=arguments[2])}if($t(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,e.get(c),c),Yt(l))s[p]=pa(l),s[p+1]=ga(l);else if(kN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(Mo(e)){if(n){for(v=e.length,o=zpr(e),c=0;c<v;c++)if(!Yt(o.getter(e,c))){f=!0;break}if(f){if(!ca(v))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+v+"`.");for(a=new this(v/2),s=a._buffer,c=0;c<v;c++)s[c]=n.call(t,o.getter(e,c),c);return a}for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,o.getter(e,c),c),Yt(l))s[p]=pa(l),s[p+1]=ga(l);else if(kN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(XN(e)&&YN&&wt(e[Zt])){if(s=e[Zt](),!wt(s.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(n?o=Ypr(s,n,t):o=zN(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,c=0;c<v;c++)s[c]=o[c];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")});mr(Y,"of",function(){var e,t;if(!wt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ZN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});ma(Y.prototype,"buffer",function(){return this._buffer.buffer});ma(Y.prototype,"byteLength",function(){return this._buffer.byteLength});ma(Y.prototype,"byteOffset",function(){return this._buffer.byteOffset});mr(Y.prototype,"BYTES_PER_ELEMENT",Y.BYTES_PER_ELEMENT);mr(Y.prototype,"copyWithin",function(e,t){if(!$t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});mr(Y.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!$t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},mr(i,"next",v),mr(i,"return",f),Zt&&mr(i,Zt,l),i;function v(){var c;return s+=1,a||s>=n?{done:!0}:(o+=2,c=new JN(e[o],e[o+1]),{value:[s,c],done:!1})}function f(c){return a=!0,arguments.length?{value:c,done:!0}:{done:!0}}function l(){return t.entries()}});mr(Y.prototype,"get",function(e){var t;if(!$t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ki(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new JN(t[e],t[e+1])});ma(Y.prototype,"length",function(){return this._length});mr(Y.prototype,"set",function(e){var t,i,n,a,s,o,v,f,l;if(!$t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!ki(i))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+i+"`.")}else i=0;if(Yt(e)){if(i>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+i+"`.");i*=2,n[i]=pa(e),n[i+1]=ga(e);return}if($t(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,l=n.byteOffset+i*Sr,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Ir(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(Mo(e)){for(o=e.length,f=0;f<o;f++)if(!Yt(e[f])){s=!0;break}if(s){if(!ca(o))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+o+"`.");if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,l=n.byteOffset+i*Sr,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Ir(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=pa(v),n[i+1]=ga(v),i+=2;return}throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.")});$N.exports=Y});var Di=u((bjr,KN)=>{"use strict";var Kpr=QN();KN.exports=Kpr});var eA=u((Ejr,rA)=>{"use strict";var r3r=lr(),e3r=Dr(),t3r=Hi(),i3r=Di(),n3r={float64:r3r,float32:e3r,complex128:t3r,complex64:i3r};rA.exports=n3r});var iA=u((Njr,tA)=>{"use strict";var a3r=eA();function u3r(r){return a3r[r]||null}tA.exports=u3r});var aA=u((Ajr,nA)=>{"use strict";var s3r=iA();nA.exports=s3r});var sA=u((Ojr,uA)=>{"use strict";function o3r(r,e,t,i){var n,a,s,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,s=(e-r)/a,o=1;o<a;o++)n.push(r+s*o);return i&&n.push(e),n}uA.exports=o3r});var pA=u((Sjr,cA)=>{"use strict";var v3r=Ht(),f3r=Wt(),oA=Fe(),vA=Me(),fA=xe(),lA=Be();function l3r(r,e,t,i,n,a){var s,o,v,f,l,c,p,q,y,m,g,h,E;if(n===0)return[];if(o=0,r==="float64"?(f=e,c=0):r==="complex64"?(o+=1,f=fA(e),c=lA(e)):(f=oA(e),c=vA(e)),t==="float64"?(l=i,p=0):t==="complex64"?(o+=1,l=fA(i),p=lA(i)):(l=oA(i),p=vA(i)),o===2?s=v3r:s=f3r,n===1)return a?[new s(l,p)]:[new s(f,c)];for(v=[new s(f,c)],a?h=n-1:h=n,m=(l-f)/h,g=(p-c)/h,E=1;E<h;E++)q=f+m*E,y=c+g*E,v.push(new s(q,y));return a&&v.push(new s(l,p)),v}cA.exports=l3r});var xo=u((Tjr,gA)=>{"use strict";function c3r(r,e,t,i,n){var a,s,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,s=(t-e)/a,o=1;o<a;o++)r[o]=e+s*o;return n&&(r[a]=t),r}gA.exports=c3r});var Bo=u((Ljr,dA)=>{"use strict";var mA=Fe(),qA=Me(),yA=xe(),hA=Be();function p3r(r,e,t,i,n,a,s){var o,v,f,l,c,p,q,y,m;if(a===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=yA(t),f=hA(t)):(o=mA(t),f=qA(t)),i==="float64"?(v=n,l=0):i==="complex64"?(v=yA(n),l=hA(n)):(v=mA(n),l=qA(n)),a===1)return s?(r[0]=v,r[1]=l):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,s?q=a-1:q=a,c=(v-o)/q,p=(l-f)/q,m=2,y=1;y<q;y++)r[m]=o+c*y,r[m+1]=f+p*y,m+=2;return s&&(r[m]=v,r[m+1]=l),r}dA.exports=p3r});var Co=u((Ijr,bA)=>{"use strict";var g3r=S(),wA=A(),m3r=D().isPrimitive,q3r=ar().isPrimitive;function y3r(r,e){return g3r(e)?wA(e,"dtype")&&(r.dtype=e.dtype,!m3r(r.dtype))?new TypeError("invalid option. `dtype` option must be a string. Option: `"+r.dtype+"`."):wA(e,"endpoint")&&(r.endpoint=e.endpoint,!q3r(r.endpoint))?new TypeError("invalid option. `endpoint` option must be a boolean. Option: `"+r.endpoint+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}bA.exports=y3r});var jo=u((Pjr,h3r)=>{h3r.exports={endpoint:!0}});var LA=u((Rjr,TA)=>{"use strict";var EA=xr(),NA=x().isPrimitive,d3r=Ae().isPrimitive,AA=b(),OA=Io(),w3r=aA(),b3r=kt(),E3r=Dt(),N3r=sA(),A3r=pA(),O3r=xo(),SA=Bo(),S3r=Co(),T3r=jo();function L3r(r,e,t){var i,n,a,s,o,v,f;if(typeof r=="object"){if(o=OA(r),o===null){if(!EA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");o="complex128"}f=!0}else{if(!NA(r)||AA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");o="float64"}if(typeof e=="object"){if(v=OA(e),v===null){if(!EA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");v="complex128"}f=!0}else{if(!NA(e)||AA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");v="float64"}if(!d3r(t))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+t+"`.");if(i={endpoint:T3r.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=S3r(i,arguments[3]),a))throw a;if(i.dtype==="generic")return f?A3r(o,r,v,e,t,i.endpoint):N3r(r,e,t,i.endpoint);if(n=w3r(i.dtype),n===null)throw new TypeError('invalid argument. `dtype` option must be a real or complex floating-point data type or "generic". Option: `'+i.dtype+"`.");if(s=new n(t),i.dtype==="complex64")return SA(b3r(s,0),o,r,v,e,t,i.endpoint),s;if(i.dtype==="complex128")return SA(E3r(s,0),o,r,v,e,t,i.endpoint),s;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return O3r(s,r,e,t,i.endpoint)}TA.exports=L3r});var PA=u((_jr,IA)=>{"use strict";var I3r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};IA.exports=I3r});var _A=u((Fjr,RA)=>{"use strict";var P3r=lr(),R3r=Dr(),_3r=or(),F3r=vt(),M3r=_t(),x3r=Oi(),B3r=Rt(),C3r=Ai(),j3r=Ni(),V3r=Di(),G3r=Hi(),U3r=[P3r,R3r,F3r,_3r,x3r,M3r,j3r,B3r,C3r,V3r,G3r];RA.exports=U3r});var MA=u((Mjr,FA)=>{"use strict";var W3r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];FA.exports=W3r});var CA=u((xjr,BA)=>{"use strict";var H3r=nt(),k3r=fr(),D3r=Ne(),X3r=PA(),J3r=_A(),xA=MA(),z3r=xA.length;function Y3r(r){var e;if(k3r(r))return"generic";if(H3r(r))return null;for(e=0;e<z3r;e++)if(r instanceof J3r[e])return xA[e];return X3r[D3r(r)]||null}BA.exports=Y3r});var VA=u((Bjr,jA)=>{"use strict";var Z3r=CA();jA.exports=Z3r});var DA=u((Cjr,kA)=>{"use strict";var $3r=Ht(),Q3r=Wt(),GA=Fe(),UA=Me(),WA=xe(),HA=Be();function K3r(r,e,t,i,n,a,s){var o,v,f,l,c,p,q,y,m,g,h,E,N,C;if(a===0)return r;if(v=0,e==="float64"?(f=t,c=0):e==="complex64"?(v+=1,f=WA(t),c=HA(t)):(f=GA(t),c=UA(t)),i==="float64"?(l=n,p=0):i==="complex64"?(v+=1,l=WA(n),p=HA(n)):(l=GA(n),p=UA(n)),v===2?o=$3r:o=Q3r,y=r.data,q=r.setter,a===1)return s?q(y,0,new o(l,p)):q(y,0,new o(f,c)),r;for(q(y,0,new o(f,c)),s?N=a-1:N=a,h=(l-f)/N,E=(p-c)/N,C=1;C<N;C++)m=f+h*C,g=c+E*C,q(y,C,new o(m,g));return s&&q(y,N,new o(l,p)),r}kA.exports=K3r});var JA=u((jjr,XA)=>{"use strict";function r6r(r,e,t,i,n){var a,s,o,v,f;if(i===0)return r;if(a=r.data,s=r.setter,i===1)return n?s(a,0,t):s(a,0,e),r;for(s(a,0,e),n?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)s(a,f,e+v*f);return n&&s(a,o,t),r}XA.exports=r6r});var eO=u((Vjr,rO)=>{"use strict";var zA=xr(),YA=x().isPrimitive,e6r=_r(),ZA=b(),$A=Io(),t6r=VA(),i6r=kt(),n6r=Dt(),QA=mt(),a6r=DA(),u6r=JA(),KA=Bo(),s6r=xo(),o6r=Co(),v6r=jo();function f6r(r,e,t){var i,n,a,s,o,v,f;if(typeof r=="object"){if(a=$A(r),a===null){if(!zA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");a="complex128"}o=!0}else{if(!YA(r)||ZA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");a="float64"}if(typeof e=="object"){if(s=$A(e),s===null){if(!zA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");s="complex128"}o=!0}else{if(!YA(e)||ZA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");s="float64"}if(!e6r(t))throw new TypeError("invalid argument. Third argument must be an array-like object. Value: `"+t+"`.");if(i={endpoint:v6r.endpoint},arguments.length>3&&(n=o6r(i,arguments[3]),n))throw n;if(v=t6r(t),v===null&&(v="generic"),v==="complex64")return KA(i6r(t,0),a,r,s,e,t.length,i.endpoint),t;if(v==="complex128")return KA(n6r(t,0),a,r,s,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=QA(t),a6r(f,a,r,s,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=QA(t),f.accessors?(u6r(f,r,e,t.length,i.endpoint),t):(s6r(t,r,e,t.length,i.endpoint),t)}rO.exports=f6r});var nO=u((Gjr,iO)=>{"use strict";var l6r=w(),tO=LA(),c6r=eO();l6r(tO,"assign",c6r);iO.exports=tO});var uO=u((Ujr,aO)=>{"use strict";var p6r=b(),g6r=Re();function m6r(r,e,t){var i,n,a,s;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],s=1;s<r;s++){if(n+=t,a=e[n],p6r(a))return a;(a>i||a===i&&g6r(a))&&(i=a)}return i}aO.exports=m6r});var oO=u((Wjr,sO)=>{"use strict";var q6r=b(),y6r=Re();function h6r(r,e,t,i){var n,a,s,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,s=e[a],q6r(s))return s;(s>n||s===n&&y6r(s))&&(n=s)}return n}sO.exports=h6r});var lO=u((Hjr,fO)=>{"use strict";var d6r=w(),vO=uO(),w6r=oO();d6r(vO,"ndarray",w6r);fO.exports=vO});var pO=u((kjr,cO)=>{"use strict";var b6r=lO();cO.exports=b6r});var qO=u((Djr,mO)=>{"use strict";var gO=b(),E6r=Re();function N6r(r,e,t,i,n){var a,s,o,v,f;if(r<=0)return NaN;for(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,f=0;f<r&&i[o]!==0;f++)s+=t,o+=n;if(f===r)return NaN;if(a=e[s],gO(a))return a;for(f+=1,f;f<r;f++)if(s+=t,o+=n,!i[o]){if(v=e[s],gO(v))return v;(v>a||v===a&&E6r(v))&&(a=v)}return a}mO.exports=N6r});var dO=u((Xjr,hO)=>{"use strict";var yO=b(),A6r=Re();function O6r(r,e,t,i,n,a,s){var o,v,f,l,c;if(r<=0)return NaN;for(v=i,f=s,c=0;c<r&&n[f]!==0;c++)v+=t,f+=a;if(c===r)return NaN;if(o=e[v],yO(o))return o;for(c+=1,c;c<r;c++)if(v+=t,f+=a,!n[f]){if(l=e[v],yO(l))return l;(l>o||l===o&&A6r(l))&&(o=l)}return o}hO.exports=O6r});var EO=u((Jjr,bO)=>{"use strict";var S6r=w(),wO=qO(),T6r=dO();S6r(wO,"ndarray",T6r);bO.exports=wO});var AO=u((zjr,NO)=>{"use strict";var L6r=ar().isPrimitive,I6r=T();function P6r(r,e){if(!L6r(r))throw new TypeError(I6r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}NO.exports=P6r});var SO=u((Yjr,OO)=>{"use strict";function R6r(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}OO.exports=R6r});var LO=u((Zjr,TO)=>{"use strict";var _6r=T(),F6r=SO();function M6r(r,e,t){if(!F6r(r,e))throw new TypeError(_6r("invalid argument. %s must be broadcast compatible.",t))}TO.exports=M6r});var PO=u(($jr,IO)=>{"use strict";function x6r(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}IO.exports=x6r});var _O=u((Qjr,RO)=>{"use strict";var B6r=T(),C6r=PO();function j6r(r,e,t,i){if(!C6r(r,e))throw new TypeError(B6r("invalid argument. %s must be broadcast compatible with %s.",t,i))}RO.exports=j6r});var Vo=u((Kjr,FO)=>{"use strict";var V6r=T();function G6r(r,e){if(r===void 0)throw new Error(V6r("invalid invocation. Must provide %s.",e))}FO.exports=G6r});var xO=u((rVr,MO)=>{"use strict";var U6r=T();function W6r(r,e,t,i){if(!(r>e))throw new TypeError(U6r("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}MO.exports=W6r});var CO=u((eVr,BO)=>{"use strict";var H6r=T();function k6r(r,e,t,i){if(!(r>=e))throw new TypeError(H6r("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}BO.exports=k6r});var VO=u((tVr,jO)=>{"use strict";var D6r=Rr().isPrimitive,X6r=T();function J6r(r,e){if(!D6r(r))throw new TypeError(X6r("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}jO.exports=J6r});var UO=u((iVr,GO)=>{"use strict";var z6r=T();function Y6r(r,e,t,i){if(!(r<e))throw new TypeError(z6r("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}GO.exports=Y6r});var HO=u((nVr,WO)=>{"use strict";var Z6r=T();function $6r(r,e,t,i){if(!(r<=e))throw new TypeError(Z6r("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}WO.exports=$6r});var DO=u((aVr,kO)=>{"use strict";var Q6r=Ae().isPrimitive,K6r=T();function r4r(r,e){if(!Q6r(r))throw new TypeError(K6r("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}kO.exports=r4r});var JO=u((uVr,XO)=>{"use strict";var e4r=So().isPrimitive,t4r=T();function i4r(r,e){if(!e4r(r))throw new TypeError(t4r("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}XO.exports=i4r});var YO=u((sVr,zO)=>{"use strict";var n4r=x().isPrimitive,a4r=T();function u4r(r,e){if(!n4r(r))throw new TypeError(a4r("invalid argument. %s must be a number. Value: %s.",e,String(r)))}zO.exports=u4r});var $O=u((oVr,ZO)=>{"use strict";var s4r=T();function o4r(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(s4r('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}ZO.exports=o4r});var Go=u((vVr,QO)=>{"use strict";var v4r=Yr().isPrimitive,f4r=T();function l4r(r,e){if(!v4r(r))throw new TypeError(f4r("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}QO.exports=l4r});var rS=u((fVr,KO)=>{"use strict";var c4r=U().isPrimitive,p4r=T();function g4r(r,e){if(!c4r(r))throw new TypeError(p4r("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}KO.exports=g4r});var Uo=u((lVr,eS)=>{"use strict";var m4r=x().isPrimitive;function q4r(r){return m4r(r)&&r>=0&&r<=1}eS.exports=q4r});var Wo=u((cVr,tS)=>{"use strict";var y4r=x().isObject;function h4r(r){return y4r(r)&&r.valueOf()>=0&&r.valueOf()<=1}tS.exports=h4r});var nS=u((pVr,iS)=>{"use strict";var d4r=Uo(),w4r=Wo();function b4r(r){return d4r(r)||w4r(r)}iS.exports=b4r});var Xi=u((gVr,uS)=>{"use strict";var aS=w(),Ho=nS(),E4r=Uo(),N4r=Wo();aS(Ho,"isPrimitive",E4r);aS(Ho,"isObject",N4r);uS.exports=Ho});var oS=u((mVr,sS)=>{"use strict";var A4r=Xi().isPrimitive,O4r=T();function S4r(r,e){if(!A4r(r))throw new TypeError(O4r("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}sS.exports=S4r});var fS=u((qVr,vS)=>{"use strict";var T4r=fr(),L4r=T();function I4r(r,e){if(!T4r(r))throw new TypeError(L4r("invalid argument. %s must be a range. Value: %s.",e,String(r)))}vS.exports=I4r});var cS=u((yVr,lS)=>{"use strict";function P4r(r){return r.length===1||r[0].length===1}lS.exports=P4r});var gS=u((hVr,pS)=>{"use strict";var R4r=fr(),_4r=cS();function F4r(r){return R4r(r)&&_4r(r)}pS.exports=F4r});var qS=u((dVr,mS)=>{"use strict";var M4r=T(),x4r=gS();function B4r(r,e){if(!x4r(r))throw new TypeError(M4r("invalid argument. %s must consist of only a single row or a single column.",e))}mS.exports=B4r});var hS=u((wVr,yS)=>{"use strict";function C4r(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}yS.exports=C4r});var wS=u((bVr,dS)=>{"use strict";var j4r=T(),V4r=hS();function G4r(r,e,t){if(!V4r(r,e))throw new TypeError(j4r("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}dS.exports=G4r});var ES=u((EVr,bS)=>{"use strict";var U4r=D().isPrimitive,W4r=T();function H4r(r,e){if(!U4r(r))throw new TypeError(W4r("invalid argument. %s must be a string. Value: %s.",e,String(r)))}bS.exports=H4r});var AS=u((NVr,NS)=>{"use strict";var k4r=T();function D4r(r){throw new Error(k4r("invalid argument. Unrecognized option name. Value: %s.",String(r)))}NS.exports=D4r});var TS=u((AVr,SS)=>{"use strict";var OS=Go(),X4r=Vo();function J4r(r,e,t){OS(r,"Number of rows"),OS(e,"Number of columns"),X4r(t,"a pseudorandom number generator seed")}SS.exports=J4r});var IS=u((OVr,LS)=>{"use strict";var z4r=fr(),Y4r=Rr().isPrimitive,Z4r=T(),$4r=ea();function Q4r(r){if(Y4r(r))return r;if(z4r(r))return $4r(r);throw new TypeError(Z4r("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}LS.exports=Q4r});var RS=u((SVr,PS)=>{"use strict";var X={};X.isBoolean=AO();X.isBroadcastCompatible=LO();X.isBroadcastCompatibleWith=_O();X.isDefined=Vo();X.isGreaterThan=xO();X.isGreaterThanEqual=CO();X.isInteger=VO();X.isLessThan=UO();X.isLessThanEqual=HO();X.isNonNegativeInteger=DO();X.isNonNegativeNumber=JO();X.isNumber=YO();X.isOneOf=$O();X.isPositiveInteger=Go();X.isPositiveNumber=rS();X.isProbability=oS();X.isRange=fS();X.isRange1d=qS();X.isSameShape=wS();X.isString=ES();X.unrecognizedOptionName=AS();X.verifyCommonPRNGArgs=TS();X.verifyPRNGSeed=IS();PS.exports=X});var FS=u((TVr,_S)=>{"use strict";var ko=4;function K4r(r,e,t,i,n,a){var s,o,v,f;if(r<=0||e===0)return n;if(i===1&&a===1){if(v=r%ko,v>0)for(f=0;f<v;f++)n[f]+=e*t[f];if(r<ko)return n;for(f=v;f<r;f+=ko)n[f]+=e*t[f],n[f+1]+=e*t[f+1],n[f+2]+=e*t[f+2],n[f+3]+=e*t[f+3];return n}for(i<0?s=(1-r)*i:s=0,a<0?o=(1-r)*a:o=0,f=0;f<r;f++)n[o]+=e*t[s],s+=i,o+=a;return n}_S.exports=K4r});var xS=u((LVr,MS)=>{"use strict";var Ji=4;function r5r(r,e,t,i,n,a,s,o){var v,f,l,c;if(r<=0||e===0)return a;if(v=n,f=o,i===1&&s===1){if(l=r%Ji,l>0)for(c=0;c<l;c++)a[f]+=e*t[v],v+=i,f+=s;if(r<Ji)return a;for(c=l;c<r;c+=Ji)a[f]+=e*t[v],a[f+1]+=e*t[v+1],a[f+2]+=e*t[v+2],a[f+3]+=e*t[v+3],v+=Ji,f+=Ji;return a}for(c=0;c<r;c++)a[f]+=e*t[v],v+=i,f+=s;return a}MS.exports=r5r});var Do=u((IVr,CS)=>{"use strict";var e5r=w(),BS=FS(),t5r=xS();e5r(BS,"ndarray",t5r);CS.exports=BS});var VS=u((PVr,jS)=>{"use strict";var Xo={};Xo.daxpy=Do().ndarray;Xo.saxpy=Do().ndarray;jS.exports=Xo});var US=u((RVr,GS)=>{"use strict";function i5r(r){return r*r}GS.exports=i5r});var HS=u((_Vr,WS)=>{"use strict";var n5r=US();WS.exports=n5r});var DS=u((FVr,kS)=>{"use strict";function a5r(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}kS.exports=a5r});var JS=u((MVr,XS)=>{"use strict";function u5r(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}XS.exports=u5r});var ZS=u((xVr,YS)=>{"use strict";var s5r=b(),o5r=G(),zS=aa(),v5r=DS(),f5r=JS(),l5r=6123233995736766e-32;function c5r(r){var e,t,i,n,a;if(s5r(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*f5r(t),t=o5r(t+t),a=zS-t,t=t*n-l5r,a-=t,a+=zS;else{if(i<1e-8)return r;t=i*i,a=t*v5r(t),a=i*a+i}return e?-a:a}YS.exports=c5r});var bt=u((BVr,$S)=>{"use strict";var p5r=ZS();$S.exports=p5r});var eT=u((CVr,rT)=>{"use strict";var g5r=b(),QS=bt(),m5r=G(),KS=aa(),q5r=6123233995736766e-32;function y5r(r){var e;return g5r(r)?NaN:r<-1||r>1?NaN:r>.5?2*QS(m5r(.5-.5*r)):(e=KS-QS(r),e+=q5r,e+=KS,e)}rT.exports=y5r});var zi=u((jVr,tT)=>{"use strict";var h5r=eT();tT.exports=h5r});var uT=u((VVr,aT)=>{"use strict";var d5r=b(),w5r=Gt(),iT=G(),b5r=Hn(),nT=B(),E5r=1<<28;function N5r(r){var e;return d5r(r)?NaN:r<1?NaN:r===1?0:r>=E5r?nT(r)+b5r:r>2?nT(2*r-1/(r+iT(r*r-1))):(e=r-1,w5r(e+iT(2*e+e*e)))}aT.exports=N5r});var oT=u((GVr,sT)=>{"use strict";var A5r=uT();sT.exports=A5r});var fT=u((UVr,vT)=>{"use strict";var O5r=ua();function S5r(r){return O5r(1/r)}vT.exports=S5r});var cT=u((WVr,lT)=>{"use strict";var T5r=fT();lT.exports=T5r});var gT=u((HVr,pT)=>{"use strict";var L5r=bt();function I5r(r){return L5r(1+r)}pT.exports=I5r});var qT=u((kVr,mT)=>{"use strict";var P5r=gT();mT.exports=P5r});var hT=u((DVr,yT)=>{"use strict";var R5r=bt();function _5r(r){return R5r(1-r)}yT.exports=_5r});var wT=u((XVr,dT)=>{"use strict";var F5r=hT();dT.exports=F5r});var ET=u((JVr,bT)=>{"use strict";var M5r=bt();function x5r(r){return M5r(1/r)}bT.exports=x5r});var AT=u((zVr,NT)=>{"use strict";var B5r=ET();NT.exports=B5r});var LT=u((YVr,TT)=>{"use strict";var C5r=Oe(),j5r=b(),V5r=Gt(),OT=G(),G5r=Hn(),ST=B(),U5r=1/(1<<28),W5r=1<<28;function H5r(r){var e,t,i;return j5r(r)||C5r(r)?r:(r<0&&(r=-r,e=!0),r<U5r?i=r:r>W5r?i=ST(r)+G5r:r>2?i=ST(2*r+1/(OT(r*r+1)+r)):(t=r*r,i=V5r(r+t/(1+OT(1+t)))),e?-i:i)}TT.exports=H5r});var Jo=u((ZVr,IT)=>{"use strict";var k5r=LT();IT.exports=k5r});var RT=u(($Vr,PT)=>{"use strict";var D5r=Jo();function X5r(r){return D5r(1/r)}PT.exports=X5r});var FT=u((QVr,_T)=>{"use strict";var J5r=RT();_T.exports=J5r});var xT=u((KVr,MT)=>{"use strict";var z5r=zi(),Y5r=G();function Z5r(r){return 2*z5r(Y5r(r))}MT.exports=Z5r});var CT=u((rGr,BT)=>{"use strict";var $5r=xT();BT.exports=$5r});var VT=u((eGr,jT)=>{"use strict";var Q5r=bt(),K5r=G();function r8r(r){return 2*Q5r(K5r(r))}jT.exports=r8r});var UT=u((tGr,GT)=>{"use strict";var e8r=VT();GT.exports=e8r});var kT=u((iGr,HT)=>{"use strict";var t8r=b(),WT=Gt(),i8r=j(),n8r=J(),a8r=1/(1<<28);function u8r(r){var e,t;return t8r(r)?NaN:r<-1||r>1?NaN:r===1?i8r:r===-1?n8r:(r<0&&(e=!0,r=-r),r<a8r?e?-r:r:(r<.5?(t=r+r,t=.5*WT(t+t*r/(1-r))):t=.5*WT((r+r)/(1-r)),e?-t:t))}HT.exports=u8r});var XT=u((nGr,DT)=>{"use strict";var s8r=kT();DT.exports=s8r});var zT=u((aGr,JT)=>{"use strict";var o8r=zi();function v8r(r){return o8r(1+r)}JT.exports=v8r});var ZT=u((uGr,YT)=>{"use strict";var f8r=zT();YT.exports=f8r});var QT=u((sGr,$T)=>{"use strict";var l8r=zi();function c8r(r){return l8r(1-r)}$T.exports=c8r});var rL=u((oGr,KT)=>{"use strict";var p8r=QT();KT.exports=p8r});var zo=u((vGr,eL)=>{"use strict";var g8r=.9189385332046728;eL.exports=g8r});var tL=u((fGr,m8r)=>{m8r.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var iL=u((lGr,q8r)=>{q8r.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var nL=u((cGr,y8r)=>{y8r.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var uL=u((pGr,aL)=>{"use strict";function h8r(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}aL.exports=h8r});var oL=u((gGr,sL)=>{"use strict";function d8r(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}sL.exports=d8r});var fL=u((mGr,vL)=>{"use strict";function w8r(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}vL.exports=w8r});var cL=u((qGr,lL)=>{"use strict";function b8r(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}lL.exports=b8r});var gL=u((yGr,pL)=>{"use strict";function E8r(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}pL.exports=E8r});var qL=u((hGr,mL)=>{"use strict";function N8r(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}mL.exports=N8r});var bL=u((dGr,wL)=>{"use strict";var A8r=b(),O8r=Ar(),S8r=$(),qa=sr(),T8r=K(),L8r=Ct(),I8r=xi(),yL=Mi(),hL=Q(),P8r=B(),R8r=j(),_8r=J(),dL=Pe(),F8r=xs(),M8r=zo(),x8r=tL(),B8r=iL(),C8r=nL(),j8r=uL(),V8r=oL(),G8r=fL(),U8r=cL(),W8r=gL(),H8r=qL(),k8r=129,D8r=170,X8r=709,J8r=1.2433929443359375,z8r=.6986598968505859;function Yo(r){var e,t,i,n,a,s;if(A8r(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(O8r(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(s=(i+1)/2|0,s<=k8r)return-C8r[s]/(i+1)}else return(n&1)===0?B8r[n/2]:x8r[(n-3)/2];return S8r(r)<F8r?-.5-M8r*r:(t=1-r,r<0?T8r(r/2)===r/2?0:(e=r,r=t,t=e,r>D8r?(e=yL(.5*t)*2*Yo(r),a=I8r(r),a-=r*P8r(dL),a>X8r?e<0?_8r:R8r:e*qa(a)):yL(.5*t)*2*hL(dL,-r)*L8r(r)*Yo(r)):r<1?(e=j8r(t),e-=J8r,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+V8r(t)):r<=4?(e=z8r+1/-t,e+G8r(r-2)):r<=7?(e=U8r(r-4),1+qa(e)):r<15?(e=W8r(r-7),1+qa(e)):r<36?(e=H8r(r-15),1+qa(e)):1+hL(2,-r))}wL.exports=Yo});var NL=u((wGr,EL)=>{"use strict";var Y8r=bL();EL.exports=Y8r});var OL=u((bGr,AL)=>{"use strict";var rr={};rr.abs=$();rr.abs2=HS();rr.acos=zi();rr.acosh=oT();rr.acot=cT();rr.acovercos=qT();rr.acoversin=wT();rr.acsc=AT();rr.acsch=FT();rr.ahavercos=CT();rr.ahaversin=UT();rr.asin=bt();rr.asinh=Jo();rr.atan=ua();rr.atanh=XT();rr.avercos=ZT();rr.aversin=rL();rr.zeta=NL();AL.exports=rr});var LL=u((EGr,TL)=>{"use strict";var SL=b(),Z8r=B(),$8r=Pe(),Q8r=zs();function K8r(r,e){return SL(r)||SL(e)||e<=0?NaN:.5*Z8r($8r*Q8r*e*e)}TL.exports=K8r});var PL=u((NGr,IL)=>{"use strict";var rgr=LL();IL.exports=rgr});var FL=u((AGr,_L)=>{"use strict";var egr=sr(),RL=Q(),tgr=G(),igr=Pe(),ngr=j(),Zo=b();function agr(r,e,t){var i,n,a;return Zo(r)||Zo(e)||Zo(t)||t<0?NaN:t===0?r===e?ngr:0:(i=RL(t,2),n=1/tgr(i*igr),a=-1/(2*i),n*egr(a*RL(r-e,2)))}_L.exports=agr});var BL=u((OGr,xL)=>{"use strict";var ugr=j(),ML=b();function sgr(r,e){return ML(r)||ML(e)?NaN:r===e?ugr:0}xL.exports=sgr});var VL=u((SGr,jL)=>{"use strict";var ogr=I(),vgr=j(),CL=b();function fgr(r){if(CL(r))return ogr(NaN);return e;function e(t){return CL(t)?NaN:t===r?vgr:0}}jL.exports=fgr});var WL=u((TGr,UL)=>{"use strict";var lgr=w(),GL=BL(),cgr=VL();lgr(GL,"factory",cgr);UL.exports=GL});var DL=u((LGr,kL)=>{"use strict";var pgr=I(),ggr=WL().factory,$o=b(),mgr=G(),qgr=sr(),HL=Q(),ygr=Pe();function hgr(r,e){var t,i,n;if($o(r)||$o(e)||e<0)return pgr(NaN);if(e===0)return ggr(r);return t=HL(e,2),i=1/mgr(t*ygr),n=-1/(2*t),a;function a(s){return $o(s)?NaN:i*qgr(n*HL(s-r,2))}}kL.exports=hgr});var zL=u((IGr,JL)=>{"use strict";var dgr=w(),XL=FL(),wgr=DL();dgr(XL,"factory",wgr);JL.exports=XL});var ZL=u((PGr,YL)=>{"use strict";var ya={};ya.normal={};ya.normal.entropy=PL();ya.normal.pdf=zL();YL.exports=ya});var QL=u((RGr,$L)=>{"use strict";var bgr=D().isPrimitive,Egr=T();function Ngr(r){if(!bgr(r))throw new TypeError(Egr("invalid argument. First argument must be a string. Value: `%s`.",r));return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}$L.exports=Ngr});var ha=u((_Gr,KL)=>{"use strict";var Agr=QL();KL.exports=Agr});var eI=u((FGr,rI)=>{"use strict";var Ogr=D().isPrimitive,Sgr=T();function Tgr(r){if(!Ogr(r))throw new TypeError(Sgr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toLowerCase()}rI.exports=Tgr});var Qt=u((MGr,tI)=>{"use strict";var Lgr=eI();tI.exports=Lgr});var aI=u((xGr,nI)=>{"use strict";var Igr=D().isPrimitive,Pgr=T(),iI=/[-\/\\^$*+?.()|[\]{}]/g;function Rgr(r){var e,t,i;if(!Igr(r))throw new TypeError(Pgr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(iI,"\\$&"):(t=r.substring(1,i),t=t.replace(iI,"\\$&"),r=r[0]+t+r.substring(i),r)}nI.exports=Rgr});var sI=u((BGr,uI)=>{"use strict";var _gr=aI();uI.exports=_gr});var vI=u((CGr,oI)=>{"use strict";var Fgr=RegExp.prototype.exec;oI.exports=Fgr});var lI=u((jGr,fI)=>{"use strict";var Mgr=vI();function xgr(r){try{return Mgr.call(r),!0}catch{return!1}}fI.exports=xgr});var pI=u((VGr,cI)=>{"use strict";var Bgr=Ot(),Cgr=Z(),jgr=lI(),Vgr=Bgr();function Ggr(r){return typeof r=="object"?r instanceof RegExp?!0:Vgr?jgr(r):Cgr(r)==="[object RegExp]":!1}cI.exports=Ggr});var mI=u((GGr,gI)=>{"use strict";var Ugr=pI();gI.exports=Ugr});var yI=u((UGr,qI)=>{"use strict";var Wgr=sI(),Hgr=L(),Qo=D().isPrimitive,kgr=mI(),Ko=T();function Dgr(r,e,t){if(!Qo(r))throw new TypeError(Ko("invalid argument. First argument must be a string. Value: `%s`.",r));if(Qo(e))e=Wgr(e),e=new RegExp(e,"g");else if(!kgr(e))throw new TypeError(Ko("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!Qo(t)&&!Hgr(t))throw new TypeError(Ko("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return r.replace(e,t)}qI.exports=Dgr});var Et=u((WGr,hI)=>{"use strict";var Xgr=yI();hI.exports=Xgr});var wI=u((HGr,dI)=>{"use strict";var Jgr=D().isPrimitive,zgr=Et(),Ygr=T(),Zgr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function $gr(r){if(!Jgr(r))throw new TypeError(Ygr("invalid argument. Must provide a string. Value: `%s`.",r));return zgr(r,Zgr,"$1")}dI.exports=$gr});var Kt=u((kGr,bI)=>{"use strict";var Qgr=wI();bI.exports=Qgr});var NI=u((DGr,EI)=>{"use strict";var Kgr=D().isPrimitive,r7r=ha(),e7r=Qt(),da=Et(),t7r=T(),i7r=Kt(),n7r=/\s+/g,a7r=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,u7r=/(?:\s|^)([^\s]+)(?=\s|$)/g,s7r=/([a-z0-9])([A-Z])/g;function o7r(r,e,t){return e=e7r(e),t===0?e:r7r(e)}function v7r(r){if(!Kgr(r))throw new TypeError(t7r("invalid argument. First argument must be a string. Value: `%s`.",r));return r=da(r,a7r," "),r=da(r,n7r," "),r=da(r,s7r,"$1 $2"),r=i7r(r),r=da(r,u7r,o7r),r}EI.exports=v7r});var OI=u((XGr,AI)=>{"use strict";var f7r=NI();AI.exports=f7r});var TI=u((JGr,SI)=>{"use strict";var l7r=D().isPrimitive,c7r=T();function p7r(r){if(!l7r(r))throw new TypeError(c7r("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}SI.exports=p7r});var rv=u((zGr,LI)=>{"use strict";var g7r=TI();LI.exports=g7r});var PI=u((YGr,II)=>{"use strict";var m7r=D().isPrimitive,q7r=rv(),ev=Et(),y7r=T(),h7r=Kt(),d7r=/\s+/g,w7r=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,b7r=/([a-z0-9])([A-Z])/g;function E7r(r){if(!m7r(r))throw new TypeError(y7r("invalid argument. Must provide a string. Value: `%s`.",r));return r=ev(r,w7r," "),r=ev(r,b7r,"$1 $2"),r=h7r(r),r=ev(r,d7r,"_"),q7r(r)}II.exports=E7r});var _I=u((ZGr,RI)=>{"use strict";var N7r=PI();RI.exports=N7r});var MI=u(($Gr,FI)=>{"use strict";var A7r=D().isPrimitive,O7r=Qt(),tv=Et(),S7r=T(),T7r=Kt(),L7r=/\s+/g,I7r=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,P7r=/([a-z0-9])([A-Z])/g;function R7r(r){if(!A7r(r))throw new TypeError(S7r("invalid argument. Must provide a string. Value: `%s`.",r));return r=tv(r,I7r," "),r=tv(r,P7r,"$1 $2"),r=T7r(r),r=tv(r,L7r,"-"),O7r(r)}FI.exports=R7r});var BI=u((QGr,xI)=>{"use strict";var _7r=MI();xI.exports=_7r});var jI=u((KGr,CI)=>{"use strict";var F7r=D().isPrimitive,M7r=ha(),x7r=Qt(),wa=Et(),B7r=T(),C7r=Kt(),j7r=/\s+/g,V7r=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,G7r=/(?:\s|^)([^\s]+)(?=\s|$)/g,U7r=/([a-z0-9])([A-Z])/g;function W7r(r,e){return M7r(x7r(e))}function H7r(r){if(!F7r(r))throw new TypeError(B7r("invalid argument. First argument must be a string. Value: `%s`.",r));return r=wa(r,V7r," "),r=wa(r,j7r," "),r=wa(r,U7r,"$1 $2"),r=C7r(r),r=wa(r,G7r,W7r),r}CI.exports=H7r});var GI=u((rUr,VI)=>{"use strict";var k7r=jI();VI.exports=k7r});var WI=u((eUr,UI)=>{"use strict";var D7r=D().isPrimitive,X7r=Qt(),iv=Et(),J7r=T(),z7r=Kt(),Y7r=/\s+/g,Z7r=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,$7r=/([a-z0-9])([A-Z])/g;function Q7r(r){if(!D7r(r))throw new TypeError(J7r("invalid argument. Must provide a string. Value: `%s`.",r));return r=iv(r,Z7r," "),r=iv(r,$7r,"$1 $2"),r=z7r(r),r=iv(r,Y7r,"_"),X7r(r)}UI.exports=Q7r});var kI=u((tUr,HI)=>{"use strict";var K7r=WI();HI.exports=K7r});var JI=u((iUr,XI)=>{"use strict";var r9r=S(),DI=A(),e9r=ar().isPrimitive,t9r=D().isPrimitive;function i9r(r,e){return r9r(e)?DI(e,"flags")&&(r.flags=e.flags,!t9r(r.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+r.flags+"`."):DI(e,"capture")&&(r.capture=e.capture,!e9r(r.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+r.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}XI.exports=i9r});var ba=u((nUr,YI)=>{"use strict";var n9r=JI(),zI=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function a9r(r){var e,t;if(arguments.length>0){if(e={},t=n9r(e,r),t)throw t;return e.capture?new RegExp("("+zI+")",e.flags):new RegExp(zI,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}YI.exports=a9r});var $I=u((aUr,ZI)=>{"use strict";var u9r=ba(),s9r=u9r({capture:!0});ZI.exports=s9r});var KI=u((uUr,QI)=>{"use strict";var o9r=ba(),v9r=o9r();QI.exports=v9r});var tP=u((sUr,eP)=>{"use strict";var rP=w(),nv=ba(),f9r=$I(),l9r=KI();rP(nv,"REGEXP",l9r);rP(nv,"REGEXP_CAPTURE",f9r);eP.exports=nv});var nP=u((oUr,iP)=>{"use strict";var c9r=D().isPrimitive,p9r=tP(),g9r=T();function m9r(r){var e,t,i,n;if(!c9r(r))throw new TypeError(g9r("invalid argument. Must provide a string. Value: `%s`.",r));for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),p9r.REGEXP.test(i)?(t+=i,e=!0):e?(t+=i.toUpperCase(),e=!1):t+=i;return t}iP.exports=m9r});var uP=u((vUr,aP)=>{"use strict";var q9r=nP();aP.exports=q9r});var oP=u((fUr,sP)=>{"use strict";var y9r=D().isPrimitive,h9r=T();function d9r(r){if(!y9r(r))throw new TypeError(h9r("invalid argument. First argument must be a string. Value: `%s`.",r));return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}sP.exports=d9r});var fP=u((lUr,vP)=>{"use strict";var w9r=oP();vP.exports=w9r});var cP=u((cUr,lP)=>{"use strict";var Br={};Br.camelcase=OI();Br.capitalize=ha();Br.constantcase=_I();Br.kebabcase=BI();Br.lowercase=Qt();Br.pascalcase=GI();Br.snakecase=kI();Br.startcase=uP();Br.uncapitalize=fP();Br.uppercase=rv();lP.exports=Br});var gP=u((pUr,pP)=>{"use strict";var b9r=Ee();function E9r(r,e,t,i){b9r(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}pP.exports=E9r});var R=u((gUr,mP)=>{"use strict";var N9r=gP();mP.exports=N9r});var hP=u((mUr,yP)=>{"use strict";var qP=65535;function A9r(r,e){var t,i,n,a,s,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,s=(r&qP)>>>0,o=(e&qP)>>>0,t=s*o>>>0,i=n*o+s*a<<16>>>0,t+i>>>0}yP.exports=A9r});var wP=u((qUr,dP)=>{"use strict";var O9r=hP();dP.exports=O9r});var av=u((yUr,bP)=>{"use strict";function S9r(r,e,t,i,n,a,s){var o,v,f,l,c,p,q;for(o=e.data,v=n.data,l=e.getter,f=n.setter,c=i,p=s,q=0;q<r;q++)f(v,p,l(o,c)),c+=t,p+=a;return e}bP.exports=S9r});var AP=u((hUr,NP)=>{"use strict";var EP=mt(),T9r=av(),uv=8;function L9r(r,e,t,i,n){var a,s,o,v,f,l;if(r<=0)return i;if(o=EP(e),v=EP(i),o.accessors||v.accessors)return t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,T9r(r,o,t,a,v,n,s),v.data;if(t===1&&n===1){if(f=r%uv,f>0)for(l=0;l<f;l++)i[l]=e[l];if(r<uv)return i;for(l=f;l<r;l+=uv)i[l]=e[l],i[l+1]=e[l+1],i[l+2]=e[l+2],i[l+3]=e[l+3],i[l+4]=e[l+4],i[l+5]=e[l+5],i[l+6]=e[l+6],i[l+7]=e[l+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,l=0;l<r;l++)i[s]=e[a],a+=t,s+=n;return i}NP.exports=L9r});var TP=u((dUr,SP)=>{"use strict";var OP=mt(),I9r=av(),Yi=8;function P9r(r,e,t,i,n,a,s){var o,v,f,l,c,p;if(r<=0)return n;if(f=OP(e),l=OP(n),f.accessors||l.accessors)return I9r(r,f,t,i,l,a,s),l.data;if(o=i,v=s,t===1&&a===1){if(c=r%Yi,c>0)for(p=0;p<c;p++)n[v]=e[o],o+=t,v+=a;if(r<Yi)return n;for(p=c;p<r;p+=Yi)n[v]=e[o],n[v+1]=e[o+1],n[v+2]=e[o+2],n[v+3]=e[o+3],n[v+4]=e[o+4],n[v+5]=e[o+5],n[v+6]=e[o+6],n[v+7]=e[o+7],o+=Yi,v+=Yi;return n}for(p=0;p<r;p++)n[v]=e[o],o+=t,v+=a;return n}SP.exports=P9r});var Ce=u((wUr,IP)=>{"use strict";var R9r=w(),LP=AP(),_9r=TP();R9r(LP,"ndarray",_9r);IP.exports=LP});var RP=u((bUr,PP)=>{"use strict";function F9r(){}PP.exports=F9r});var FP=u((EUr,_P)=>{"use strict";var M9r=RP();function x9r(){return M9r.name==="foo"}_P.exports=x9r});var xP=u((NUr,MP)=>{"use strict";var B9r=FP();MP.exports=B9r});var CP=u((AUr,BP)=>{"use strict";var C9r=L(),j9r=xP(),V9r=N0().REGEXP,G9r=j9r();function U9r(r){if(C9r(r)===!1)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return G9r?r.name:V9r.exec(r.toString())[1]}BP.exports=U9r});var VP=u((OUr,jP)=>{"use strict";var W9r=CP();jP.exports=W9r});var UP=u((SUr,GP)=>{"use strict";var H9r=Ni(),k9r=Rt(),D9r=Ai(),X9r=Oi(),J9r=_t(),z9r=vt(),Y9r=or(),Z9r=Dr(),$9r=lr(),Q9r=[$9r,Z9r,z9r,Y9r,X9r,J9r,H9r,k9r,D9r];GP.exports=Q9r});var WP=u((TUr,K9r)=>{K9r.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var zP=u((LUr,JP)=>{"use strict";var rmr=Ne(),emr=VP(),DP=ut(),tmr=is(),imr=lr(),HP=UP(),kP=WP(),Ea=tmr()?DP(imr):XP;Ea=emr(Ea)==="TypedArray"?Ea:XP;function XP(){}function nmr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof Ea)return!0;for(t=0;t<HP.length;t++)if(r instanceof HP[t])return!0;for(;r;){for(e=rmr(r),t=0;t<kP.length;t++)if(kP[t]===e)return!0;r=DP(r)}return!1}JP.exports=nmr});var ZP=u((IUr,YP)=>{"use strict";var amr=zP();YP.exports=amr});var QP=u((PUr,$P)=>{"use strict";var umr=Di(),smr=Hi(),omr=[smr,umr];$P.exports=omr});var KP=u((RUr,vmr)=>{vmr.exports=["Complex64Array","Complex128Array"]});var iR=u((_Ur,tR)=>{"use strict";var fmr=Ne(),lmr=ut(),rR=QP(),eR=KP();function cmr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<rR.length;t++)if(r instanceof rR[t])return!0;for(;r;){for(e=fmr(r),t=0;t<eR.length;t++)if(eR[t]===e)return!0;r=lmr(r)}return!1}tR.exports=cmr});var aR=u((FUr,nR)=>{"use strict";var pmr=iR();nR.exports=pmr});var sR=u((MUr,uR)=>{"use strict";function gmr(r,e){if(typeof e!="function")throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+e+"`.");return r instanceof e}uR.exports=gmr});var vR=u((xUr,oR)=>{"use strict";var mmr=sR();oR.exports=mmr});var lR=u((BUr,fR)=>{"use strict";var qmr=Ni(),ymr=Rt(),hmr=Ai(),dmr=Oi(),wmr=_t(),bmr=vt(),Emr=or(),Nmr=Dr(),Amr=lr(),Omr=Di(),Smr=Hi(),Tmr=[[Amr,"Float64Array"],[Nmr,"Float32Array"],[bmr,"Int32Array"],[Emr,"Uint32Array"],[dmr,"Int16Array"],[wmr,"Uint16Array"],[qmr,"Int8Array"],[ymr,"Uint8Array"],[hmr,"Uint8ClampedArray"],[Omr,"Complex64Array"],[Smr,"Complex128Array"]];fR.exports=Tmr});var pR=u((CUr,cR)=>{"use strict";var Lmr=vR(),Imr=Ne(),Pmr=ut(),ri=lR();function Rmr(r){var e,t;for(t=0;t<ri.length;t++)if(Lmr(r,ri[t][0]))return ri[t][1];for(;r;){for(e=Imr(r),t=0;t<ri.length;t++)if(e===ri[t][1])return ri[t][1];r=Pmr(r)}}cR.exports=Rmr});var mR=u((jUr,gR)=>{"use strict";var _mr=ZP(),Fmr=aR(),Mmr=kt(),xmr=Dt(),Bmr=pR();function Cmr(r){var e,t,i;if(_mr(r))e=r;else if(Fmr(r))r.BYTES_PER_ELEMENT===8?e=Mmr(r,0):e=xmr(r,0);else throw new TypeError("invalid argument. Must provide a typed array. Value: `"+r+"`.");for(t={type:Bmr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}gR.exports=Cmr});var _=u((VUr,qR)=>{"use strict";var jmr=mR();qR.exports=jmr});var sv=u((GUr,yR)=>{"use strict";var Vmr=Tt(),Gmr=K(),Umr=Vmr-1;function Wmr(){var r=Gmr(1+Umr*Math.random());return r>>>0}yR.exports=Wmr});var mv=u((UUr,LR)=>{"use strict";var Zr=w(),je=P(),hR=R(),ov=A(),Hmr=S(),kmr=_r(),dR=kr(),Dmr=ar().isPrimitive,wR=Yr().isPrimitive,OR=Kn(),SR=Tt(),qr=or(),Xmr=Xs(),gv=wP(),ei=Ce(),Jmr=_(),bR=sv(),er=624,vv=397,ER=SR>>>0,zmr=19650218>>>0,fv=2147483648>>>0,lv=2147483647>>>0,Ymr=1812433253>>>0,Zmr=1664525>>>0,$mr=1566083941>>>0,Qmr=2636928640>>>0,Kmr=4022730752>>>0,rqr=2567483615>>>0,cv=[0>>>0,rqr>>>0],TR=1/(OR+1),eqr=67108864>>>0,tqr=2147483648>>>0,pv=1>>>0,iqr=OR*TR,Na=1,Aa=3,Ve=2,Ge=er+3,yr=er+5,Zi=er+6;function NR(r,e){var t;return e?t="option":t="argument",r.length<Zi+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==Na?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+Na+". Actual: "+r[0]+"."):r[1]!==Aa?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+Aa+". Actual: "+r[1]+"."):r[Ve]!==er?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+er+". Actual: "+r[Ve]+"."):r[Ge]!==1?new RangeError("invalid "+t+". `state` array has an incompatible section length. Expected: "+1 .toString()+". Actual: "+r[Ge]+"."):r[yr]!==r.length-Zi?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-Zi)+". Actual: "+r[yr]+"."):null}function AR(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=gv(t,Ymr)+i>>>0;return r}function nqr(r,e,t,i){var n,a,s,o;for(a=1,s=0,o=Xmr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=gv(n,Zmr)>>>0,r[a]=(r[a]>>>0^n)+t[s]+s>>>0,a+=1,s+=1,a>=e&&(r[0]=r[e-1],a=1),s>=i&&(s=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=gv(n,$mr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=tqr,r}function aqr(r){var e,t,i,n;for(n=er-vv,t=0;t<n;t++)e=r[t]&fv|r[t+1]&lv,r[t]=r[t+vv]^e>>>1^cv[e&pv];for(i=er-1;t<i;t++)e=r[t]&fv|r[t+1]&lv,r[t]=r[t-n]^e>>>1^cv[e&pv];return e=r[i]&fv|r[0]&lv,r[i]=r[vv-1]^e>>>1^cv[e&pv],r}function uqr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!Hmr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(ov(r,"copy")&&(i.copy=r.copy,!Dmr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(ov(r,"state")){if(t=r.state,i.state=!0,!dR(t))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+t+"`.");if(s=NR(t,!0),s)throw s;i.copy===!1?e=t:(e=new qr(t.length),ei(t.length,t,1,e,1)),t=new qr(e.buffer,e.byteOffset+(Ve+1)*e.BYTES_PER_ELEMENT,er),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,t[yr])}if(n===void 0)if(ov(r,"seed"))if(n=r.seed,i.seed=!0,wR(n)){if(n>ER)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");n>>>=0}else{if(kmr(n)===!1||n.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");if(n.length===1){if(n=n[0],!wR(n))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");if(n>ER)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");n>>>=0}else a=n.length,e=new qr(Zi+a),e[0]=Na,e[1]=Aa,e[Ve]=er,e[Ge]=1,e[Ge+1]=er,e[yr]=a,ei.ndarray(a,n,1,0,e,1,yr+1),t=new qr(e.buffer,e.byteOffset+(Ve+1)*e.BYTES_PER_ELEMENT,er),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,a),t=AR(t,er,zmr),t=nqr(t,er,n,a)}else n=bR()>>>0}else n=bR()>>>0;return t===void 0&&(e=new qr(Zi+1),e[0]=Na,e[1]=Aa,e[Ve]=er,e[Ge]=1,e[Ge+1]=er,e[yr]=1,e[yr+1]=n,t=new qr(e.buffer,e.byteOffset+(Ve+1)*e.BYTES_PER_ELEMENT,er),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,1),t=AR(t,er,n)),Zr(y,"NAME","mt19937"),je(y,"seed",o),je(y,"seedLength",v),hR(y,"state",c,p),je(y,"stateLength",f),je(y,"byteLength",l),Zr(y,"toJSON",q),Zr(y,"MIN",1),Zr(y,"MAX",SR),Zr(y,"normalized",m),Zr(m,"NAME",y.NAME),je(m,"seed",o),je(m,"seedLength",v),hR(m,"state",c,p),je(m,"stateLength",f),je(m,"byteLength",l),Zr(m,"toJSON",q),Zr(m,"MIN",0),Zr(m,"MAX",iqr),y;function o(){var g=e[yr];return ei(g,n,1,new qr(g),1)}function v(){return e[yr]}function f(){return e.length}function l(){return e.byteLength}function c(){var g=e.length;return ei(g,e,1,new qr(g),1)}function p(g){var h;if(!dR(g))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+g+"`.");if(h=NR(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?ei(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new qr(g.length)),ei(g.length,g,1,e,1)),t=new qr(e.buffer,e.byteOffset+(Ve+1)*e.BYTES_PER_ELEMENT,er),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,e[yr])}function q(){var g={};return g.type="PRNG",g.name=y.NAME,g.state=Jmr(e),g.params=[],g}function y(){var g,h;return h=e[Ge+1],h>=er&&(t=aqr(t),h=0),g=t[h],e[Ge+1]=h+1,g^=g>>>11,g^=g<<7&Qmr,g^=g<<15&Kmr,g^=g>>>18,g>>>0}function m(){var g=y()>>>5,h=y()>>>6;return(g*eqr+h)*TR}}LR.exports=uqr});var PR=u((WUr,IR)=>{"use strict";var sqr=mv(),oqr=sv(),vqr=sqr({seed:oqr()});IR.exports=vqr});var H=u((HUr,_R)=>{"use strict";var fqr=w(),RR=PR(),lqr=mv();fqr(RR,"factory",lqr);_R.exports=RR});var BR=u((kUr,xR)=>{"use strict";var FR=x().isPrimitive,MR=tr();function cqr(r,e){return!FR(r)||MR(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!FR(e)||MR(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):r>=e?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+r+","+e+"]`."):null}xR.exports=cqr});var jR=u((DUr,CR)=>{"use strict";var pqr=Q(),gqr=Ri(),mqr=na();function qqr(r,e,t){return e+pqr(gqr(mqr*r()),2)*(t-e)}CR.exports=qqr});var qv=u((XUr,XR)=>{"use strict";var $r=w(),Oa=P(),VR=R(),GR=S(),UR=L(),WR=A(),HR=I(),yqr=M(),Sa=H().factory,kR=b(),hqr=_(),dqr=BR(),DR=jR();function wqr(){var r,e,t,i,n,a;if(arguments.length===0)e=Sa();else if(arguments.length===1){if(r=arguments[0],!GR(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(WR(r,"prng")){if(!UR(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Sa(r)}else{if(n=arguments[0],a=arguments[1],i=dqr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!GR(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(WR(r,"prng")){if(!UR(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Sa(r)}else e=Sa()}return n===void 0?t=y:t=q,$r(t,"NAME","arcsine"),r&&r.prng?($r(t,"seed",null),$r(t,"seedLength",null),VR(t,"state",HR(null),yqr),$r(t,"stateLength",null),$r(t,"byteLength",null),$r(t,"toJSON",HR(null)),$r(t,"PRNG",e)):(Oa(t,"seed",s),Oa(t,"seedLength",o),VR(t,"state",l,c),Oa(t,"stateLength",v),Oa(t,"byteLength",f),$r(t,"toJSON",p),$r(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=hqr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return DR(e,n,a)}function y(m,g){return kR(m)||kR(g)||m>=g?NaN:DR(e,m,g)}}XR.exports=wqr});var zR=u((JUr,JR)=>{"use strict";var bqr=qv(),Eqr=bqr();JR.exports=Eqr});var $R=u((zUr,ZR)=>{"use strict";var Nqr=w(),YR=zR(),Aqr=qv();Nqr(YR,"factory",Aqr);ZR.exports=YR});var yv=u((YUr,i_)=>{"use strict";var Qr=w(),Ta=P(),QR=R(),KR=S(),Oqr=Xi().isPrimitive,r_=L(),e_=A(),t_=I(),Sqr=M(),La=H().factory,Tqr=b(),Lqr=_();function Iqr(){var r,e,t,i;if(arguments.length===0)e=La();else if(arguments.length===1&&KR(arguments[0]))if(r=arguments[0],e_(r,"prng")){if(!r_(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=La(r);else{if(i=arguments[0],!Oqr(i))throw new TypeError("invalid argument. First argument must be a probability. Value: `"+i+"`.");if(arguments.length>1){if(r=arguments[1],!KR(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(e_(r,"prng")){if(!r_(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=La(r)}else e=La()}return i===void 0?t=p:t=c,Qr(t,"NAME","bernoulli"),r&&r.prng?(Qr(t,"seed",null),Qr(t,"seedLength",null),QR(t,"state",t_(null),Sqr),Qr(t,"stateLength",null),Qr(t,"byteLength",null),Qr(t,"toJSON",t_(null)),Qr(t,"PRNG",e)):(Ta(t,"seed",n),Ta(t,"seedLength",a),QR(t,"state",v,f),Ta(t,"stateLength",s),Ta(t,"byteLength",o),Qr(t,"toJSON",l),Qr(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(q){e.state=q}function l(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=Lqr(e.state),i===void 0?q.params=[]:q.params=[i],q}function c(){return e()<=i?1:0}function p(q){return Tqr(q)||q<0||q>1?NaN:e()<=q?1:0}}i_.exports=Iqr});var a_=u((ZUr,n_)=>{"use strict";var Pqr=yv(),Rqr=Pqr();n_.exports=Rqr});var o_=u(($Ur,s_)=>{"use strict";var _qr=w(),u_=a_(),Fqr=yv();_qr(u_,"factory",Fqr);s_.exports=u_});var c_=u((QUr,l_)=>{"use strict";var Mqr=G(),v_=sr(),xqr=B(),f_=.00991256303526217;function Bqr(r,e){var t,i,n;for(i=v_(-.5*e*e),t=[],t.push(f_/i),t.push(e),n=2;n<r;n++)t[n]=Mqr(-2*xqr(f_/t[n-1]+i)),i=v_(-.5*t[n]*t[n]);return t.push(0),t}l_.exports=Bqr});var g_=u((KUr,p_)=>{"use strict";function Cqr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}p_.exports=Cqr});var y_=u((rWr,q_)=>{"use strict";var m_=B();function jqr(r,e,t){var i,n;do i=m_(r())/e,n=m_(r());while(-2*n<i*i);return t?i-e:e-i}q_.exports=jqr});var b_=u((eWr,w_)=>{"use strict";var Vqr=$(),h_=sr(),Gqr=c_(),Uqr=g_(),Wqr=y_(),Hqr=128,d_=3.442619855899,Nt=Gqr(Hqr,d_),kqr=Uqr(Nt),Dqr=127;function Xqr(r,e){return t;function t(){for(var i,n,a,s,o,v,f;;){if(o=2*r()-1,v=e()&Dqr,Vqr(o)<kqr[v])return o*Nt[v];if(v===0)return Wqr(r,d_,o<0);if(s=o*Nt[v],a=s*s,f=v+1,i=h_(-.5*(Nt[v]*Nt[v]-a)),n=h_(-.5*(Nt[f]*Nt[f]-a)),n+r()*(i-n)<1)return s}}}w_.exports=Xqr});var dv=u((tWr,A_)=>{"use strict";var Ue=w(),Ia=P(),E_=R(),Jqr=L(),zqr=S(),Yqr=ar().isPrimitive,Pa=A(),Zqr=kr(),hv=H().factory,N_=I(),$qr=M(),Qqr=K(),Kqr=Tt(),ryr=_(),eyr=b_();function tyr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!zqr(r))throw new TypeError("invalid argument. Must provide an object. Value: `"+r+"`.");if(Pa(r,"copy")&&(n.copy=r.copy,!Yqr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(Pa(r,"prng")){if(!Jqr(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else if(Pa(r,"state")){if(n.state=r.state,!Zqr(r.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+r.state+"`.")}else if(Pa(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+r.seed+"`.")}return n.state===void 0?e===void 0?(t=hv(n),e=t.normalized):(t=hv({seed:Qqr(1+Kqr*e()),copy:n.copy}),n.seed=null):(t=hv(n),e=t.normalized),i=eyr(e,t),Ue(i,"NAME","improved-ziggurat"),n.seed===null?(Ue(i,"seed",null),Ue(i,"seedLength",null)):(Ia(i,"seed",a),Ia(i,"seedLength",s)),r&&r.prng?(E_(i,"state",N_(null),$qr),Ue(i,"stateLength",null),Ue(i,"byteLength",null),Ue(i,"toJSON",N_(null))):(E_(i,"state",f,l),Ia(i,"stateLength",o),Ia(i,"byteLength",v),Ue(i,"toJSON",c)),Ue(i,"PRNG",e),i;function a(){return t.seed}function s(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function l(p){t.state=p}function c(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=ryr(t.state),p.params=[],p}}A_.exports=tyr});var S_=u((iWr,O_)=>{"use strict";var iyr=dv(),nyr=iyr();O_.exports=nyr});var We=u((nWr,L_)=>{"use strict";var ayr=w(),T_=S_(),uyr=dv();ayr(T_,"factory",uyr);L_.exports=T_});var R_=u((aWr,P_)=>{"use strict";var I_=U().isPrimitive;function syr(r,e){return I_(r)?I_(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}P_.exports=syr});var B_=u((uWr,x_)=>{"use strict";var __=B(),F_=G(),oyr=Q(),M_=1/3;function vyr(r,e,t){var i,n,a,s,o,v,f,l,c,p;for(t<1?(v=t+1-M_,o=1/F_(9*v),l=oyr(r(),1/t)):(v=t-M_,o=1/F_(9*v),l=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,n=f*f,a=1-.331*n*n,s=.5*n+v*(1-p+__(p)),c=r(),(c<a||__(c)<s)&&(i=!1)}return v*p*l}x_.exports=vyr});var V_=u((sWr,j_)=>{"use strict";var wv=Q(),C_=B();function fyr(r,e,t){var i,n,a,s,o,v,f,l;for(a=t-1,o=wv(a+a,.5),i=!0;i===!0;)s=e(),f=.5*(1+s/o),f>=0&&f<=1&&(v=r(),n=wv(s,4),l=8*t-12,l=1-n/l,v<=l?i=!1:(l+=.5*wv(n/(8*t-8),2),v<l&&(l=a*C_(4*f*(1-f)),l+=s*s/2,l>=C_(v)&&(i=!1))));return f}j_.exports=fyr});var U_=u((oWr,G_)=>{"use strict";var lyr=Q(),Ra=B();function cyr(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y;for(o=t-1,v=i-1,f=o+v,l=f*Ra(f),s=o/f,n=.5/lyr(f,.5),a=!0;a===!0;)c=e(),q=s+c*n,q>=0&&q<=1&&(p=r(),y=o*Ra(q/o),y+=v*Ra((1-q)/v),y+=l+.5*c*c,y>=Ra(p)&&(a=!1));return q}G_.exports=cyr});var k_=u((vWr,H_)=>{"use strict";var bv=sr(),W_=Q(),Ev=B();function pyr(r,e,t){for(var i,n,a,s,o,v,f;;)if(s=r(),o=r(),v=W_(s,1/e),f=W_(o,1/t),a=v+f,a<=1)return a>0?v/a:(i=Ev(s)/e,n=Ev(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),bv(i-Ev(bv(i)+bv(n))))}H_.exports=pyr});var J_=u((fWr,X_)=>{"use strict";var D_=B_(),gyr=V_(),myr=U_(),qyr=k_();function yyr(r,e,t,i){var n,a;return t===i&&t>1.5?gyr(r,e,t):t>1&&i>1?myr(r,e,t,i):t<1&&i<1?qyr(r,t,i):(n=D_(r,e,t),a=D_(r,e,i),n/(n+a))}X_.exports=yyr});var Sv=u((lWr,iF)=>{"use strict";var Kr=w(),_a=P(),z_=R(),Y_=S(),Z_=ar().isPrimitive,$_=L(),ti=A(),Q_=I(),hyr=M(),K_=We().factory,Fa=H().factory,rF=b(),Nv=Ce(),Av=or(),Ov=kr(),eF=Mt(),dyr=_(),wyr=R_(),tF=J_();function byr(){var r,e,t,i,n,a,s,o,v;if(o=!0,arguments.length===0)n={copy:!1},a=Fa(n);else if(arguments.length===1){if(n=arguments[0],!Y_(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ti(n,"copy")&&!Z_(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ti(n,"prng")){if(!$_(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ti(n,"state")&&!Ov(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=eF(n,1),n.copy===!1?o=!1:n.state&&(n.state=Nv(n.state.length,n.state,1,new Av(n.state.length),1)),n.copy=!1,a=Fa(n)}}else{if(t=arguments[0],i=arguments[1],v=wyr(t,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!Y_(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ti(n,"copy")&&!Z_(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ti(n,"prng")){if(!$_(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ti(n,"state")&&!Ov(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=eF(n,1),n.copy===!1?o=!1:n.state&&(n.state=Nv(n.state.length,n.state,1,new Av(n.state.length),1)),n.copy=!1,a=Fa(n)}}else n={copy:!1},a=Fa(n)}return n&&n.prng?e=K_({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=K_({state:r,copy:!1})),t===void 0?s=h:s=g,Kr(s,"NAME","beta"),n&&n.prng?(Kr(s,"seed",null),Kr(s,"seedLength",null),z_(s,"state",Q_(null),hyr),Kr(s,"stateLength",null),Kr(s,"byteLength",null),Kr(s,"toJSON",Q_(null)),Kr(s,"PRNG",a)):(_a(s,"seed",f),_a(s,"seedLength",l),z_(s,"state",q,y),_a(s,"stateLength",c),_a(s,"byteLength",p),Kr(s,"toJSON",m),Kr(s,"PRNG",a),a=a.normalized),s;function f(){return a.seed}function l(){return a.seedLength}function c(){return a.stateLength}function p(){return a.byteLength}function q(){return a.state}function y(E){if(!Ov(E))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+E+"`.");o&&(E=Nv(E.length,E,1,new Av(E.length),1)),a.state=E}function m(){var E={};return E.type="PRNG",E.name=s.NAME,E.state=dyr(a.state),t===void 0?E.params=[]:E.params=[t,i],E}function g(){return tF(a,e,t,i)}function h(E,N){return rF(E)||rF(N)||E<=0||N<=0?NaN:tF(a,e,E,N)}}iF.exports=byr});var aF=u((cWr,nF)=>{"use strict";var Eyr=Sv(),Nyr=Eyr();nF.exports=Nyr});var oF=u((pWr,sF)=>{"use strict";var Ayr=w(),uF=aF(),Oyr=Sv();Ayr(uF,"factory",Oyr);sF.exports=uF});var lF=u((gWr,fF)=>{"use strict";var vF=U().isPrimitive;function Syr(r,e){return vF(r)?vF(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}fF.exports=Syr});var gF=u((mWr,pF)=>{"use strict";var cF=B();function Tyr(r,e,t,i,n){var a,s,o,v,f,l,c;for(a=!0;a;){do f=e(),c=1+n*f;while(c<=0);c*=c*c,s=f*f,o=1-.331*s*s,v=.5*s+i*(1-c+cF(c)),l=r(),(l<o||cF(l)<v)&&(a=!1)}return 1/t*i*c}pF.exports=Tyr});var Rv=u((qWr,AF)=>{"use strict";var re=w(),Ma=P(),mF=R(),qF=S(),Tv=kr(),yF=ar().isPrimitive,hF=L(),ii=A(),dF=I(),Lyr=M(),wF=We().factory,xa=H().factory,bF=b(),Lv=G(),EF=Q(),Iv=Ce(),Pv=or(),Iyr=_(),NF=Mt(),Pyr=lF(),Ba=gF(),Ca=1/3;function Ryr(){var r,e,t,i,n,a,s,o,v,f,l;if(o=!0,arguments.length===0)n={copy:!1},a=xa(n);else if(arguments.length===1){if(n=arguments[0],!qF(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ii(n,"copy")&&!yF(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ii(n,"prng")){if(!hF(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ii(n,"state")&&!Tv(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=NF(n,1),n.copy===!1?o=!1:n.state&&(n.state=Iv(n.state.length,n.state,1,new Pv(n.state.length),1)),n.copy=!1,a=xa(n)}}else{if(e=arguments[0],i=arguments[1],v=Pyr(e,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!qF(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ii(n,"copy")&&!yF(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ii(n,"prng")){if(!hF(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ii(n,"state")&&!Tv(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=NF(n,1),n.copy===!1?o=!1:n.state&&(n.state=Iv(n.state.length,n.state,1,new Pv(n.state.length),1)),n.copy=!1,a=xa(n)}}else n={copy:!1},a=xa(n)}return n&&n.prng?t=wF({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=wF({state:r,copy:!1})),e===void 0?s=C:(e>=1?(s=E,l=e-Ca):(s=N,l=e+1-Ca),f=1/Lv(9*l)),re(s,"NAME","gamma"),n&&n.prng?(re(s,"seed",null),re(s,"seedLength",null),mF(s,"state",dF(null),Lyr),re(s,"stateLength",null),re(s,"byteLength",null),re(s,"toJSON",dF(null)),re(s,"PRNG",a)):(Ma(s,"seed",c),Ma(s,"seedLength",p),mF(s,"state",m,g),Ma(s,"stateLength",q),Ma(s,"byteLength",y),re(s,"toJSON",h),re(s,"PRNG",a),a=a.normalized),s;function c(){return a.seed}function p(){return a.seedLength}function q(){return a.stateLength}function y(){return a.byteLength}function m(){return a.state}function g(O){if(!Tv(O))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+O+"`.");o&&(O=Iv(O.length,O,1,new Pv(O.length),1)),a.state=O}function h(){var O={};return O.type="PRNG",O.name=s.NAME,O.state=Iyr(a.state),e===void 0?O.params=[]:O.params=[e,i],O}function E(){return Ba(a,t,i,l,f)}function N(){return Ba(a,t,i,l,f)*EF(a(),1/e)}function C(O,k){var nr,W;return bF(O)||bF(k)||O<=0||k<=0?NaN:O<1?(W=O+1-Ca,nr=1/Lv(9*W),Ba(a,t,k,W,nr)*EF(a(),1/O)):(W=O-Ca,nr=1/Lv(9*W),Ba(a,t,k,W,nr))}}AF.exports=Ryr});var SF=u((yWr,OF)=>{"use strict";var _yr=Rv(),Fyr=_yr();OF.exports=Fyr});var ni=u((hWr,LF)=>{"use strict";var Myr=w(),TF=SF(),xyr=Rv();Myr(TF,"factory",xyr);LF.exports=TF});var RF=u((dWr,PF)=>{"use strict";var IF=U().isPrimitive;function Byr(r,e){return IF(r)?IF(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}PF.exports=Byr});var FF=u((wWr,_F)=>{"use strict";function Cyr(r,e,t){return r(e,1)/r(t,1)}_F.exports=Cyr});var _v=u((bWr,VF)=>{"use strict";var He=w(),ja=P(),MF=R(),xF=S(),BF=I(),jyr=M(),Va=ni().factory,CF=b(),Vyr=_(),Gyr=RF(),jF=FF();function Uyr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=Va();else if(arguments.length===1){if(i=arguments[0],!xF(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");r=Va(i)}else{if(e=arguments[0],t=arguments[1],s=Gyr(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!xF(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");r=Va(i)}else r=Va()}return e===void 0?a=m:a=y,n=r.PRNG,He(a,"NAME","betaprime"),i&&i.prng?(He(a,"seed",null),He(a,"seedLength",null),MF(a,"state",BF(null),jyr),He(a,"stateLength",null),He(a,"byteLength",null),He(a,"toJSON",BF(null))):(ja(a,"seed",o),ja(a,"seedLength",v),MF(a,"state",c,p),ja(a,"stateLength",f),ja(a,"byteLength",l),He(a,"toJSON",q)),He(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function l(){return n.byteLength}function c(){return n.state}function p(g){n.state=g}function q(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=Vyr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function y(){return jF(r,e,t)}function m(g,h){return CF(g)||CF(h)||g<=0||h<=0?NaN:jF(r,g,h)}}VF.exports=Uyr});var UF=u((EWr,GF)=>{"use strict";var Wyr=_v(),Hyr=Wyr();GF.exports=Hyr});var kF=u((NWr,HF)=>{"use strict";var kyr=w(),WF=UF(),Dyr=_v();kyr(WF,"factory",Dyr);HF.exports=WF});var XF=u((AWr,DF)=>{"use strict";var Xyr=K();function Jyr(r){return Xyr(r)===r&&r>0}DF.exports=Jyr});var Fv=u((OWr,JF)=>{"use strict";var zyr=XF();JF.exports=zyr});var YF=u((SWr,zF)=>{"use strict";function Yyr(r){return r>=0&&r<=1}zF.exports=Yyr});var $F=u((TWr,ZF)=>{"use strict";var Zyr=YF();ZF.exports=Zyr});var KF=u((LWr,QF)=>{"use strict";var $yr=Yr().isPrimitive,Qyr=Xi().isPrimitive;function Kyr(r,e){return $yr(r)?Qyr(e)?null:new TypeError("invalid argument. Second argument must be a probability. Value: `"+e+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+e+"`.")}QF.exports=Kyr});var eM=u((IWr,rM)=>{"use strict";function rhr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}rM.exports=rhr});var iM=u((PWr,tM)=>{"use strict";var ehr=b();function thr(r){return r===0||ehr(r)?r:r<0?-1:1}tM.exports=thr});var Ga=u((RWr,nM)=>{"use strict";var ihr=iM();nM.exports=ihr});var uM=u((_Wr,aM)=>{"use strict";var nhr=Q(),ahr=1/12,uhr=1/360,shr=1/1260;function ohr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=nhr(r,2),(ahr-(uhr-shr/e)/e)/r}}aM.exports=ohr});var oM=u((FWr,sM)=>{"use strict";var Mv=K(),vhr=Ga(),fhr=G(),xv=$(),Ua=B(),Wa=uM(),lhr=1/6;function chr(r,e,t){var i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N,C,O,k,nr,W,zu,Cr,vr,tn;for(k=Mv((e+1)*t),f=e-k+1,nr=1-t,W=t/nr,l=(e+1)*W,s=e*t*nr,a=fhr(s),g=1.15+2.53*a,m=-.0873+.0248*g+.01*t,h=e*t+.5,i=(2.83+5.1/g)*a,y=.92-4.2/g,n=.86*y,N=(k+.5)*Ua((k+1)/(W*f)),N+=Wa(k)+Wa(e-k);;){if(vr=r(),vr<=n)return Cr=vr/y-.43,W=Cr*(2*m/(.5-xv(Cr))+g)+h,Mv(W);if(vr>=y?Cr=r()-.5:(Cr=vr/y-.93,Cr=vhr(Cr)*.5-Cr,vr=y*r()),c=.5-xv(Cr),O=Mv(Cr*(2*m/c+g)+h),!(O<0||O>e))if(vr=vr*i/(m/(c*c)+g),p=xv(O-k),p>15){if(vr=Ua(vr),o=p/s,v=(p/3+.625)*p,v+=lhr,v/=s,o*=v+.5,zu=-(p*p)/(2*s),vr<zu-o||vr<=zu+o&&(q=e-O+1,tn=N+(e+1)*Ua(f/q),tn+=(O+.5)*Ua(q*W/(O+1)),tn+=-(Wa(O)+Wa(e-O)),vr<=tn))return O}else{if(E=1,k<O)for(C=k;C<=O;C++)E*=l/C-W;else if(k>O)for(C=O;C<=k;C++)vr*=l/C-W;if(vr<=E)return O}}}sM.exports=chr});var lM=u((MWr,fM)=>{"use strict";var phr=eM(),ghr=oM();function vM(r,e,t){return t>.5?e-vM(r,e,1-t):e*t<10?phr(r,e,t):ghr(r,e,t)}fM.exports=vM});var Bv=u((xWr,dM)=>{"use strict";var ee=w(),Ha=P(),cM=R(),pM=S(),gM=L(),mM=A(),qM=I(),mhr=M(),yM=b(),qhr=Fv(),yhr=$F(),ka=H().factory,hhr=_(),dhr=KF(),hM=lM();function whr(){var r,e,t,i,n,a;if(arguments.length===0)e=ka();else if(arguments.length===1){if(r=arguments[0],!pM(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(mM(r,"prng")){if(!gM(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=ka(r)}else{if(n=arguments[0],a=arguments[1],i=dhr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!pM(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(mM(r,"prng")){if(!gM(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=ka(r)}else e=ka()}return n===void 0?t=y:t=q,ee(t,"NAME","binomial"),r&&r.prng?(ee(t,"seed",null),ee(t,"seedLength",null),cM(t,"state",qM(null),mhr),ee(t,"stateLength",null),ee(t,"byteLength",null),ee(t,"toJSON",qM(null)),ee(t,"PRNG",e)):(Ha(t,"seed",s),Ha(t,"seedLength",o),cM(t,"state",l,c),Ha(t,"stateLength",v),Ha(t,"byteLength",f),ee(t,"toJSON",p),ee(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=hhr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return hM(e,n,a)}function y(m,g){return yM(m)||yM(g)||!qhr(m)||!yhr(g)?NaN:hM(e,m,g)}}dM.exports=whr});var bM=u((BWr,wM)=>{"use strict";var bhr=Bv(),Ehr=bhr();wM.exports=Ehr});var AM=u((CWr,NM)=>{"use strict";var Nhr=w(),EM=bM(),Ahr=Bv();Nhr(EM,"factory",Ahr);NM.exports=EM});var SM=u((jWr,OM)=>{"use strict";var Ohr=G(),Shr=B(),Thr=Ri(),Lhr=Pi(),Ihr=Pe();function Phr(r){var e,t;return e=!0,i;function i(){var n,a,s,o;if(e){do n=r(),a=r();while(n===0);return s=Ohr(-2*Shr(n)),o=Ihr*a,t=s*Lhr(o),e=!1,s*Thr(o)}return e=!0,t}}OM.exports=Phr});var LM=u((VWr,TM)=>{"use strict";var Rhr=G(),_hr=B(),Fhr=Pi(),Mhr=Gr(),xhr=Fhr(Mhr);function Bhr(r){var e=Rhr(-2*_hr(r));return e*xhr}TM.exports=Bhr});var PM=u((GWr,IM)=>{"use strict";var Chr=G(),jhr=B(),Vhr=Pi(),Ghr=Pe();function Uhr(r){var e=Chr(-2*jhr(r)),t=Ghr*r;return e*Vhr(t)}IM.exports=Uhr});var Cv=u((UWr,MM)=>{"use strict";var Pr=w(),Da=P(),RM=R(),Whr=S(),Hhr=L(),khr=ar().isPrimitive,$i=A(),Dhr=kr(),_M=H().factory,FM=I(),Xhr=M(),Jhr=_(),zhr=SM(),Yhr=LM(),Zhr=PM();function $hr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!Whr(r))throw new TypeError("invalid argument. Must provide an object. Value: `"+r+"`.");if($i(r,"copy")&&(n.copy=r.copy,!khr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if($i(r,"prng")){if(!Hhr(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else if($i(r,"state")){if(n.state=r.state,!Dhr(r.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+r.state+"`.")}else if($i(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+r.seed+"`.")}return n.state===void 0?e===void 0?(i=_M(n),e=i.normalized):n.seed=null:(i=_M(n),e=i.normalized),t=zhr(e),Pr(t,"NAME","box-muller"),n.seed===null?(Pr(t,"seed",null),Pr(t,"seedLength",null)):(Da(t,"seed",a),Da(t,"seedLength",s)),r&&r.prng?(RM(t,"state",FM(null),Xhr),Pr(t,"stateLength",null),Pr(t,"byteLength",null),Pr(t,"toJSON",FM(null))):(RM(t,"state",f,l),Da(t,"stateLength",o),Da(t,"byteLength",v),Pr(t,"toJSON",c)),Pr(t,"PRNG",e),$i(e,"MIN")?(Pr(t,"MIN",Yhr(e.MIN)),Pr(t,"MAX",Zhr(e.MIN))):(Pr(t,"MIN",null),Pr(t,"MAX",null)),t;function a(){return i.seed}function s(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function l(p){i.state=p}function c(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=Jhr(i.state),p.params=[],p}}MM.exports=$hr});var BM=u((WWr,xM)=>{"use strict";var Qhr=Cv(),Khr=Qhr();xM.exports=Khr});var VM=u((HWr,jM)=>{"use strict";var rdr=w(),CM=BM(),edr=Cv();rdr(CM,"factory",edr);jM.exports=CM});var UM=u((kWr,GM)=>{"use strict";var tdr=x().isPrimitive,idr=U().isPrimitive,ndr=tr();function adr(r,e){return!tdr(r)||ndr(r)?new TypeError("invalid argument. `x0` must be a number primitive and not `NaN`. Value: `"+r+"`."):idr(e)?null:new TypeError("invalid argument. `gamma` must be a positive number. Value: `"+e+"`.")}GM.exports=adr});var HM=u((DWr,WM)=>{"use strict";var udr=bo(),sdr=Gr();function odr(r,e,t){return e+t*udr(sdr*(r()-.5))}WM.exports=odr});var jv=u((XWr,$M)=>{"use strict";var ke=w(),Xa=P(),kM=R(),DM=S(),XM=L(),JM=A(),zM=I(),vdr=M(),YM=b(),ai=We().factory,fdr=_(),ldr=UM(),ZM=HM();function cdr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=ai();else if(arguments.length===1){if(t=arguments[0],!DM(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(JM(t,"prng")){if(!XM(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ai({prng:t.prng})}else e=ai(t)}else{if(s=arguments[0],r=arguments[1],a=ldr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!DM(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(JM(t,"prng")){if(!XM(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ai({prng:t.prng})}else e=ai(t)}else e=ai()}return s===void 0?n=m:n=y,i=e.PRNG,ke(n,"NAME","cauchy"),t&&t.prng?(ke(n,"seed",null),ke(n,"seedLength",null),kM(n,"state",zM(null),vdr),ke(n,"stateLength",null),ke(n,"byteLength",null),ke(n,"toJSON",zM(null))):(Xa(n,"seed",o),Xa(n,"seedLength",v),kM(n,"state",c,p),Xa(n,"stateLength",f),Xa(n,"byteLength",l),ke(n,"toJSON",q)),ke(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=fdr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return ZM(e,s,r)}function m(g,h){return YM(g)||YM(h)||h<=0?NaN:ZM(e,g,h)}}$M.exports=cdr});var KM=u((JWr,QM)=>{"use strict";var pdr=jv(),gdr=pdr();QM.exports=gdr});var tx=u((zWr,ex)=>{"use strict";var mdr=w(),rx=KM(),qdr=jv();mdr(rx,"factory",qdr);ex.exports=rx});var Vv=u((YWr,ox)=>{"use strict";var De=w(),Ja=P(),ix=R(),ydr=U().isPrimitive,nx=S(),ax=L(),ux=A(),sx=I(),hdr=M(),ddr=b(),ui=ni().factory,wdr=_();function bdr(){var r,e,t,i,n;if(arguments.length===0)r=ui();else if(arguments.length===1&&nx(arguments[0]))if(t=arguments[0],ux(t,"prng")){if(!ax(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=ui({prng:t.prng})}else r=ui(t);else{if(n=arguments[0],!ydr(n))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+n+"`.");if(arguments.length>1){if(t=arguments[1],!nx(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(ux(t,"prng")){if(!ax(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=ui(n/2,.5,{prng:t.prng})}else r=ui(n/2,.5,t)}else r=ui(n/2,.5)}return n===void 0?i=q:i=p,e=r.PRNG,De(i,"NAME","chisquare"),t&&t.prng?(De(i,"seed",null),De(i,"seedLength",null),ix(i,"state",sx(null),hdr),De(i,"stateLength",null),De(i,"byteLength",null),De(i,"toJSON",sx(null))):(Ja(i,"seed",a),Ja(i,"seedLength",s),ix(i,"state",f,l),Ja(i,"stateLength",o),Ja(i,"byteLength",v),De(i,"toJSON",c)),De(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function l(y){e.state=y}function c(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=wdr(e.state),n===void 0?y.params=[]:y.params=[n],y}function p(){return r()}function q(y){return ddr(y)||y<=0?NaN:r(y/2,.5)}}ox.exports=bdr});var fx=u((ZWr,vx)=>{"use strict";var Edr=Vv(),Ndr=Edr();vx.exports=Ndr});var Qi=u(($Wr,cx)=>{"use strict";var Adr=w(),lx=fx(),Odr=Vv();Adr(lx,"factory",Odr);cx.exports=lx});var Gv=u((QWr,dx)=>{"use strict";var Xe=w(),za=P(),px=R(),Sdr=U().isPrimitive,gx=S(),mx=L(),qx=A(),yx=I(),Tdr=M(),Ldr=b(),si=Qi().factory,Idr=_(),hx=G();function Pdr(){var r,e,t,i,n;if(arguments.length===0)r=si();else if(arguments.length===1&&gx(arguments[0]))if(t=arguments[0],qx(t,"prng")){if(!mx(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=si({prng:t.prng})}else r=si(t);else{if(n=arguments[0],!Sdr(n))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+n+"`.");if(arguments.length>1){if(t=arguments[1],!gx(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(qx(t,"prng")){if(!mx(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=si(n,{prng:t.prng})}else r=si(n,t)}else r=si(n)}return n===void 0?i=q:i=p,e=r.PRNG,Xe(i,"NAME","chi"),t&&t.prng?(Xe(i,"seed",null),Xe(i,"seedLength",null),px(i,"state",yx(null),Tdr),Xe(i,"stateLength",null),Xe(i,"byteLength",null),Xe(i,"toJSON",yx(null))):(za(i,"seed",a),za(i,"seedLength",s),px(i,"state",f,l),za(i,"stateLength",o),za(i,"byteLength",v),Xe(i,"toJSON",c)),Xe(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function l(y){e.state=y}function c(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=Idr(e.state),n===void 0?y.params=[]:y.params=[n],y}function p(){return hx(r())}function q(y){return Ldr(y)||y<=0?NaN:hx(r(y))}}dx.exports=Pdr});var bx=u((KWr,wx)=>{"use strict";var Rdr=Gv(),_dr=Rdr();wx.exports=_dr});var Ax=u((rHr,Nx)=>{"use strict";var Fdr=w(),Ex=bx(),Mdr=Gv();Fdr(Ex,"factory",Mdr);Nx.exports=Ex});var Sx=u((eHr,Ox)=>{"use strict";var xdr=x().isPrimitive,Bdr=U().isPrimitive,Cdr=tr();function jdr(r,e){return!xdr(r)||Cdr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):Bdr(e)?null:new TypeError("invalid argument. `s` must be a positive number. Value: `"+e+"`.")}Ox.exports=jdr});var Lx=u((tHr,Tx)=>{"use strict";var Uv=b(),Vdr=Mi(),Gdr=Gr();function Udr(r,e,t){var i;return Uv(r)||Uv(e)||Uv(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+Vdr(i)/Gdr)/2)}Tx.exports=Udr});var Px=u((iHr,Ix)=>{"use strict";var Wdr=I(),Hdr=oo().factory,Wv=b(),kdr=Mi(),Ddr=Gr();function Xdr(r,e){if(Wv(r)||Wv(e)||e<0)return Wdr(NaN);if(e===0)return Hdr(r);return t;function t(i){var n;return Wv(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+kdr(n)/Ddr)/2)}}Ix.exports=Xdr});var Fx=u((nHr,_x)=>{"use strict";var Jdr=w(),Rx=Lx(),zdr=Px();Jdr(Rx,"factory",zdr);_x.exports=Rx});var Hv=u((aHr,Mx)=>{"use strict";var Ydr=Fx(),Zdr=1e4,$dr=1e-12;function Qdr(r,e,t){var i,n,a,s,o;for(o=1,i=e-t,n=e+t;o<Zdr;){if(s=(i+n)/2,n-i<$dr)return s;a=Ydr(s,e,t),r>a?i=s:n=s,o+=1}return s}Mx.exports=Qdr});var Bx=u((uHr,xx)=>{"use strict";var kv=b(),Kdr=Hv();function rwr(r,e,t){return kv(e)||kv(t)||kv(r)||t<0||r<0||r>1?NaN:t===0?e:Kdr(r,e,t)}xx.exports=rwr});var jx=u((sHr,Cx)=>{"use strict";var ewr=b();function twr(r,e){return ewr(r)||r<0||r>1?NaN:e}Cx.exports=twr});var Ux=u((oHr,Gx)=>{"use strict";var iwr=I(),Vx=b();function nwr(r){if(Vx(r))return iwr(NaN);return e;function e(t){return Vx(t)||t<0||t>1?NaN:r}}Gx.exports=nwr});var Dv=u((vHr,Hx)=>{"use strict";var awr=w(),Wx=jx(),uwr=Ux();awr(Wx,"factory",uwr);Hx.exports=Wx});var Dx=u((fHr,kx)=>{"use strict";var swr=I(),owr=Dv().factory,Xv=b(),vwr=Hv();function fwr(r,e){if(Xv(r)||Xv(e)||e<0)return swr(NaN);if(e===0)return owr(r);return t;function t(i){return Xv(i)||i<0||i>1?NaN:vwr(i,r,e)}}kx.exports=fwr});var zx=u((lHr,Jx)=>{"use strict";var lwr=w(),Xx=Bx(),cwr=Dx();lwr(Xx,"factory",cwr);Jx.exports=Xx});var Zx=u((cHr,Yx)=>{"use strict";var pwr=zx();function gwr(r,e,t){return pwr(r(),e,t)}Yx.exports=gwr});var Jv=u((pHr,nB)=>{"use strict";var te=w(),Ya=P(),$x=R(),Qx=S(),Kx=L(),rB=A(),eB=I(),mwr=M(),Za=H().factory,tB=b(),qwr=_(),ywr=Sx(),iB=Zx();function hwr(){var r,e,t,i,n,a;if(arguments.length===0)e=Za();else if(arguments.length===1){if(r=arguments[0],!Qx(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(rB(r,"prng")){if(!Kx(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Za(r)}else{if(n=arguments[0],a=arguments[1],i=ywr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Qx(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(rB(r,"prng")){if(!Kx(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Za(r)}else e=Za()}return n===void 0?t=y:t=q,te(t,"NAME","cosine"),r&&r.prng?(te(t,"seed",null),te(t,"seedLength",null),$x(t,"state",eB(null),mwr),te(t,"stateLength",null),te(t,"byteLength",null),te(t,"toJSON",eB(null)),te(t,"PRNG",e)):(Ya(t,"seed",s),Ya(t,"seedLength",o),$x(t,"state",l,c),Ya(t,"stateLength",v),Ya(t,"byteLength",f),te(t,"toJSON",p),te(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=qwr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return iB(e,n,a)}function y(m,g){return tB(m)||tB(g)||g<=0?NaN:iB(e,m,g)}}nB.exports=hwr});var uB=u((gHr,aB)=>{"use strict";var dwr=Jv(),wwr=dwr();aB.exports=wwr});var vB=u((mHr,oB)=>{"use strict";var bwr=w(),sB=uB(),Ewr=Jv();bwr(sB,"factory",Ewr);oB.exports=sB});var pB=u((qHr,cB)=>{"use strict";var fB=Rr().isPrimitive,lB=tr();function Nwr(r,e){return!fB(r)||lB(r)?new TypeError("invalid argument. First argument must be an integer and not `NaN`. Value: `"+r+"`."):!fB(e)||lB(e)?new TypeError("invalid argument. Second argument must be an integer and not `NaN`. Value: `"+e+"`."):r>e?new RangeError("invalid argument. Minimum support `a` must be less than or equal to maximum support `b`. Value: `["+r+","+e+"]`."):null}cB.exports=Nwr});var qB=u((yHr,mB)=>{"use strict";var zv=Kn(),oi=K();function gB(r,e,t){var i,n,a,s,o,v,f,l,c;if(a=t-e,a===0)return e;if(f=r.MIN,l=r.MAX,n=l-f,n===a)return r()-f+e;if(n<a)for(s=0;;){for(a===zv?(s=oi(a/(n+1)),a%(n+1)===n&&(s+=1)):s=oi((a+1)/(n+1)),i=0,v=1;v<=s;){if(i+=(r()-f)*v,v*n===a-v+1)return i;v*=n+1}if(c=gB(r,0,oi(a/v)),!(c>zv/v)&&(c*=v,i+=c,!(i>a)))return i+e}for(n===zv?(o=oi(n/(a+1)),n%(a+1)===a&&(o+=1)):o=oi((n+1)/(a+1));;)if(i=r()-f,i=oi(i/o),i<=a)return i+e}mB.exports=gB});var Yv=u((hHr,AB)=>{"use strict";var ie=w(),$a=P(),yB=R(),hB=S(),dB=L(),wB=A(),bB=I(),Awr=M(),Qa=H().factory,EB=b(),vi=Ar(),Owr=_(),Swr=pB(),NB=qB();function Twr(){var r,e,t,i,n,a;if(arguments.length===0)e=Qa();else if(arguments.length===1){if(r=arguments[0],!hB(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(wB(r,"prng")){if(!dB(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");if(e=r.prng,!vi(e.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!vi(e.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else e=Qa(r)}else{if(n=arguments[0],a=arguments[1],i=Swr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!hB(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(wB(r,"prng")){if(!dB(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");if(e=r.prng,!vi(e.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!vi(e.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else e=Qa(r)}else e=Qa()}return n===void 0?t=y:t=q,ie(t,"NAME","discrete-uniform"),r&&r.prng?(ie(t,"seed",null),ie(t,"seedLength",null),yB(t,"state",bB(null),Awr),ie(t,"stateLength",null),ie(t,"byteLength",null),ie(t,"toJSON",bB(null)),ie(t,"PRNG",e)):($a(t,"seed",s),$a(t,"seedLength",o),yB(t,"state",l,c),$a(t,"stateLength",v),$a(t,"byteLength",f),ie(t,"toJSON",p),ie(t,"PRNG",e)),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Owr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return NB(e,n,a)}function y(m,g){return EB(m)||EB(g)||!vi(m)||!vi(g)||m>g?NaN:NB(e,m,g)}}AB.exports=Twr});var SB=u((dHr,OB)=>{"use strict";var Lwr=Yv(),Iwr=Lwr();OB.exports=Iwr});var IB=u((wHr,LB)=>{"use strict";var Pwr=w(),TB=SB(),Rwr=Yv();Pwr(TB,"factory",Rwr);LB.exports=TB});var RB=u((bHr,PB)=>{"use strict";var _wr=U().isPrimitive,Fwr=Yr().isPrimitive;function Mwr(r,e){return Fwr(r)?_wr(e)?null:new TypeError("invalid argument. Second argument must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+r+"`.")}PB.exports=Mwr});var FB=u((EHr,_B)=>{"use strict";var xwr=B();function Bwr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*xwr(i)}_B.exports=Bwr});var Zv=u((NHr,UB)=>{"use strict";var ne=w(),Ka=P(),MB=R(),xB=S(),BB=L(),CB=A(),jB=I(),Cwr=M(),ru=H().factory,VB=b(),jwr=Fv(),Vwr=_(),Gwr=RB(),GB=FB();function Uwr(){var r,e,t,i,n,a;if(arguments.length===0)e=ru();else if(arguments.length===1){if(t=arguments[0],!xB(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(CB(t,"prng")){if(!BB(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=t.prng}else e=ru(t)}else{if(a=arguments[0],r=arguments[1],n=Gwr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!xB(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(CB(t,"prng")){if(!BB(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=t.prng}else e=ru(t)}else e=ru()}return a===void 0?i=y:i=q,ne(i,"NAME","erlang"),t&&t.prng?(ne(i,"seed",null),ne(i,"seedLength",null),MB(i,"state",jB(null),Cwr),ne(i,"stateLength",null),ne(i,"byteLength",null),ne(i,"toJSON",jB(null)),ne(i,"PRNG",e)):(Ka(i,"seed",s),Ka(i,"seedLength",o),MB(i,"state",l,c),Ka(i,"stateLength",v),Ka(i,"byteLength",f),ne(i,"toJSON",p),ne(i,"PRNG",e),e=e.normalized),i;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=Vwr(e.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return GB(e,a,r)}function y(m,g){return VB(m)||VB(g)||!jwr(m)||g<=0?NaN:GB(e,m,g)}}UB.exports=Uwr});var HB=u((AHr,WB)=>{"use strict";var Wwr=Zv(),Hwr=Wwr();WB.exports=Hwr});var XB=u((OHr,DB)=>{"use strict";var kwr=w(),kB=HB(),Dwr=Zv();kwr(kB,"factory",Dwr);DB.exports=kB});var zB=u((SHr,JB)=>{"use strict";var Xwr=B();function Jwr(r,e){return-Xwr(1-r())/e}JB.exports=Jwr});var $v=u((THr,eC)=>{"use strict";var ae=w(),eu=P(),YB=R(),zwr=U().isPrimitive,ZB=S(),$B=L(),QB=A(),KB=I(),Ywr=M(),tu=H().factory,Zwr=b(),$wr=_(),rC=zB();function Qwr(){var r,e,t,i;if(arguments.length===0)t=tu();else if(arguments.length===1&&ZB(arguments[0]))if(e=arguments[0],QB(e,"prng")){if(!$B(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=tu(e);else{if(r=arguments[0],!zwr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!ZB(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(QB(e,"prng")){if(!$B(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=tu(e)}else t=tu()}return r===void 0?i=p:i=c,ae(i,"NAME","exponential"),e&&e.prng?(ae(i,"seed",null),ae(i,"seedLength",null),YB(i,"state",KB(null),Ywr),ae(i,"stateLength",null),ae(i,"byteLength",null),ae(i,"toJSON",KB(null)),ae(i,"PRNG",t)):(eu(i,"seed",n),eu(i,"seedLength",a),YB(i,"state",v,f),eu(i,"stateLength",s),eu(i,"byteLength",o),ae(i,"toJSON",l),ae(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=$wr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return rC(t,r)}function p(q){return Zwr(q)||q<=0?NaN:rC(t,q)}}eC.exports=Qwr});var iC=u((LHr,tC)=>{"use strict";var Kwr=$v(),rbr=Kwr();tC.exports=rbr});var uC=u((IHr,aC)=>{"use strict";var ebr=w(),nC=iC(),tbr=$v();ebr(nC,"factory",tbr);aC.exports=nC});var vC=u((PHr,oC)=>{"use strict";var sC=U().isPrimitive;function ibr(r,e){return sC(r)?sC(e)?null:new TypeError("invalid argument. `d2` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `d1` must be a positive number. Value: `"+r+"`.")}oC.exports=ibr});var lC=u((RHr,fC)=>{"use strict";function nbr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}fC.exports=nbr});var Qv=u((_Hr,dC)=>{"use strict";var Je=w(),iu=P(),cC=R(),pC=S(),gC=L(),mC=A(),qC=I(),abr=M(),fi=Qi().factory,yC=b(),ubr=_(),sbr=vC(),hC=lC();function obr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=fi();else if(arguments.length===1){if(e=arguments[0],!pC(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(mC(e,"prng")){if(!gC(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");r=fi({prng:e.prng})}else r=fi(e)}else{if(a=arguments[0],s=arguments[1],n=sbr(a,s),n)throw n;if(arguments.length>2){if(e=arguments[2],!pC(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(mC(e,"prng")){if(!gC(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");r=fi({prng:e.prng})}else r=fi(e)}else r=fi()}return a===void 0?i=m:i=y,t=r.PRNG,Je(i,"NAME","f"),e&&e.prng?(Je(i,"seed",null),Je(i,"seedLength",null),cC(i,"state",qC(null),abr),Je(i,"stateLength",null),Je(i,"byteLength",null),Je(i,"toJSON",qC(null))):(iu(i,"seed",o),iu(i,"seedLength",v),cC(i,"state",c,p),iu(i,"stateLength",f),iu(i,"byteLength",l),Je(i,"toJSON",q)),Je(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function l(){return t.byteLength}function c(){return t.state}function p(g){t.state=g}function q(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=ubr(t.state),a===void 0?g.params=[]:g.params=[a,s],g}function y(){return hC(r,a,s)}function m(g,h){return yC(g)||yC(h)||g<=0||h<=0?NaN:hC(r,g,h)}}dC.exports=obr});var bC=u((FHr,wC)=>{"use strict";var vbr=Qv(),fbr=vbr();wC.exports=fbr});var AC=u((MHr,NC)=>{"use strict";var lbr=w(),EC=bC(),cbr=Qv();lbr(EC,"factory",cbr);NC.exports=EC});var TC=u((xHr,SC)=>{"use strict";var OC=U().isPrimitive,pbr=x().isPrimitive,Kv=tr();function gbr(r,e,t){return!OC(r)||Kv(r)?new TypeError("invalid argument. First argument must be a positive number primitive and not `NaN`. Value: `"+r+"`."):!OC(e)||Kv(e)?new TypeError("invalid argument. Second argument must be a positive number primitive and not `NaN`. Value: `"+e+"`."):!pbr(t)||Kv(t)?new TypeError("invalid argument. Third argument must be a number primitive and not `NaN`. Value: `"+t+"`."):null}SC.exports=gbr});var IC=u((BHr,LC)=>{"use strict";var mbr=Q(),qbr=B();function ybr(r,e,t,i){return i+t*mbr(-qbr(r()),-1/e)}LC.exports=ybr});var e1=u((CHr,BC)=>{"use strict";var ue=w(),nu=P(),PC=R(),RC=S(),_C=L(),FC=A(),MC=I(),hbr=M(),au=H().factory,r1=b(),dbr=_(),wbr=TC(),xC=IC();function bbr(){var r,e,t,i,n,a,s;if(arguments.length===0)t=au();else if(arguments.length===1){if(e=arguments[0],!RC(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(FC(e,"prng")){if(!_C(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=au(e)}else{if(r=arguments[0],a=arguments[1],s=arguments[2],n=wbr(r,a,s),n)throw n;if(arguments.length>3){if(e=arguments[3],!RC(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(FC(e,"prng")){if(!_C(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=au(e)}else t=au()}return r===void 0?i=m:i=y,ue(i,"NAME","frechet"),e&&e.prng?(ue(i,"seed",null),ue(i,"seedLength",null),PC(i,"state",MC(null),hbr),ue(i,"stateLength",null),ue(i,"byteLength",null),ue(i,"toJSON",MC(null)),ue(i,"PRNG",t)):(nu(i,"seed",o),nu(i,"seedLength",v),PC(i,"state",c,p),nu(i,"stateLength",f),nu(i,"byteLength",l),ue(i,"toJSON",q),ue(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function l(){return t.byteLength}function c(){return t.state}function p(g){t.state=g}function q(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=dbr(t.state),r===void 0?g.params=[]:g.params=[r,a,s],g}function y(){return xC(t,r,a,s)}function m(g,h,E){return r1(g)||r1(h)||r1(E)||g<=0||h<=0?NaN:xC(t,g,h,E)}}BC.exports=bbr});var jC=u((jHr,CC)=>{"use strict";var Ebr=e1(),Nbr=Ebr();CC.exports=Nbr});var UC=u((VHr,GC)=>{"use strict";var Abr=w(),VC=jC(),Obr=e1();Abr(VC,"factory",Obr);GC.exports=VC});var kC=u((GHr,HC)=>{"use strict";var Sbr=K(),WC=B();function Tbr(r,e){var t=r();return t===0&&(t=r()),Sbr(WC(t)/WC(1-e))}HC.exports=Tbr});var t1=u((UHr,$C)=>{"use strict";var se=w(),uu=P(),DC=R(),XC=S(),Lbr=Xi().isPrimitive,JC=L(),zC=A(),YC=I(),Ibr=M(),su=H().factory,Pbr=b(),Rbr=_(),ZC=kC();function _br(){var r,e,t,i;if(arguments.length===0)e=su();else if(arguments.length===1&&XC(arguments[0]))if(r=arguments[0],zC(r,"prng")){if(!JC(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=su(r);else{if(i=arguments[0],!Lbr(i))throw new TypeError("invalid argument. First argument must be a probability. Value: `"+i+"`.");if(arguments.length>1){if(r=arguments[1],!XC(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(zC(r,"prng")){if(!JC(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=su(r)}else e=su()}return i===void 0?t=p:t=c,se(t,"NAME","geometric"),r&&r.prng?(se(t,"seed",null),se(t,"seedLength",null),DC(t,"state",YC(null),Ibr),se(t,"stateLength",null),se(t,"byteLength",null),se(t,"toJSON",YC(null)),se(t,"PRNG",e)):(uu(t,"seed",n),uu(t,"seedLength",a),DC(t,"state",v,f),uu(t,"stateLength",s),uu(t,"byteLength",o),se(t,"toJSON",l),se(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(q){e.state=q}function l(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=Rbr(e.state),i===void 0?q.params=[]:q.params=[i],q}function c(){return ZC(e,i)}function p(q){return Pbr(q)||q<0||q>1?NaN:ZC(e,q)}}$C.exports=_br});var KC=u((WHr,QC)=>{"use strict";var Fbr=t1(),Mbr=Fbr();QC.exports=Mbr});var tj=u((HHr,ej)=>{"use strict";var xbr=w(),rj=KC(),Bbr=t1();xbr(rj,"factory",Bbr);ej.exports=rj});var nj=u((kHr,ij)=>{"use strict";var Cbr=x().isPrimitive,jbr=U().isPrimitive,Vbr=tr();function Gbr(r,e){return!Cbr(r)||Vbr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):jbr(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`.")}ij.exports=Gbr});var sj=u((DHr,uj)=>{"use strict";var aj=B();function Ubr(r,e,t){return e-t*aj(-aj(r()))}uj.exports=Ubr});var i1=u((XHr,mj)=>{"use strict";var oe=w(),ou=P(),oj=R(),vj=S(),fj=L(),lj=A(),cj=I(),Wbr=M(),vu=H().factory,pj=b(),Hbr=_(),kbr=nj(),gj=sj();function Dbr(){var r,e,t,i,n,a;if(arguments.length===0)t=vu();else if(arguments.length===1){if(e=arguments[0],!vj(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(lj(e,"prng")){if(!fj(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=vu(e)}else{if(a=arguments[0],r=arguments[1],n=kbr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!vj(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(lj(e,"prng")){if(!fj(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=vu(e)}else t=vu()}return a===void 0?i=y:i=q,oe(i,"NAME","gumbel"),e&&e.prng?(oe(i,"seed",null),oe(i,"seedLength",null),oj(i,"state",cj(null),Wbr),oe(i,"stateLength",null),oe(i,"byteLength",null),oe(i,"toJSON",cj(null)),oe(i,"PRNG",t)):(ou(i,"seed",s),ou(i,"seedLength",o),oj(i,"state",l,c),ou(i,"stateLength",v),ou(i,"byteLength",f),oe(i,"toJSON",p),oe(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function l(){return t.state}function c(m){t.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=Hbr(t.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return gj(t,a,r)}function y(m,g){return pj(m)||pj(g)||g<=0?NaN:gj(t,m,g)}}mj.exports=Dbr});var yj=u((JHr,qj)=>{"use strict";var Xbr=i1(),Jbr=Xbr();qj.exports=Jbr});var wj=u((zHr,dj)=>{"use strict";var zbr=w(),hj=yj(),Ybr=i1();zbr(hj,"factory",Ybr);dj.exports=hj});var Ej=u((YHr,bj)=>{"use strict";var Zbr=K();function $br(r){return Zbr(r)===r&&r>=0}bj.exports=$br});var Aj=u((ZHr,Nj)=>{"use strict";var Qbr=Ej();Nj.exports=Qbr});var Sj=u(($Hr,Oj)=>{"use strict";var n1=Ae().isPrimitive;function Kbr(r,e,t){return n1(r)?n1(e)?n1(t)?t>r?new RangeError("invalid argument. `n` must be less than or equal to `N`. Value: `"+t+"`."):e>r?new RangeError("invalid argument. `K` must be less than or equal to `N`. Value: `"+e+"`."):null:new TypeError("invalid argument. `n` must be a nonnegative integer. Value: `"+t+"`."):new TypeError("invalid argument. `K` must be a nonnegative integer. Value: `"+e+"`."):new TypeError("invalid argument. `N` must be a nonnegative integer. Value: `"+r+"`.")}Oj.exports=Kbr});var Tj=u((QHr,rEr)=>{rEr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var Ij=u((KHr,Lj)=>{"use strict";var eEr=b(),tEr=Ar(),iEr=Ct(),nEr=j(),aEr=Tj(),uEr=170;function sEr(r){return eEr(r)?NaN:tEr(r)?r<0?NaN:r<=uEr?aEr[r]:nEr:iEr(r+1)}Lj.exports=sEr});var Rj=u((rkr,Pj)=>{"use strict";var oEr=Ij();Pj.exports=oEr});var Fj=u((ekr,_j)=>{"use strict";var ze=Rj();function vEr(r,e,t,i){var n,a,s;for(i<t?(n=ze(t)*ze(e+t-i)/(ze(e+t)*ze(t-i)),s=0):(n=ze(e)*ze(i)/(ze(i-t)*ze(e+t)),s=i-t),a=r();a>n;)a-=n,n*=(e-s)*(i-s)/((s+1)*(t-i+1+s)),s+=1;return s}_j.exports=vEr});var xj=u((tkr,Mj)=>{"use strict";var fu=Fj();function fEr(r,e,t,i){var n,a,s,o;return i>e/2?(s=e-i,2*t<=e?(n=t,a=e-t,o=fu(r,n,a,s),t-o):(a=t,n=e-t,o=fu(r,n,a,s),i-e+t+o)):(s=i,2*t<=e?(n=t,a=e-t,o=fu(r,n,a,s),o):(n=e-t,a=t,o=fu(r,n,a,s),i-o))}Mj.exports=fEr});var u1=u((ikr,Hj)=>{"use strict";var ve=w(),lu=P(),Bj=R(),Cj=S(),jj=L(),Vj=A(),Gj=I(),lEr=M(),cu=H().factory,a1=Aj(),Uj=j(),cEr=_(),pEr=Sj(),Wj=xj();function gEr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=cu();else if(arguments.length===1){if(r=arguments[0],!Cj(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Vj(r,"prng")){if(!jj(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=cu(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=pEr(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!Cj(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Vj(r,"prng")){if(!jj(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=cu(r)}else e=cu()}return n===void 0?t=m:t=y,ve(t,"NAME","hypergeometric"),r&&r.prng?(ve(t,"seed",null),ve(t,"seedLength",null),Bj(t,"state",Gj(null),lEr),ve(t,"stateLength",null),ve(t,"byteLength",null),ve(t,"toJSON",Gj(null)),ve(t,"PRNG",e)):(lu(t,"seed",o),lu(t,"seedLength",v),Bj(t,"state",c,p),lu(t,"stateLength",f),lu(t,"byteLength",l),ve(t,"toJSON",q),ve(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function l(){return e.byteLength}function c(){return e.state}function p(g){e.state=g}function q(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=cEr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function y(){return Wj(e,n,a,s)}function m(g,h,E){return g===Uj||h===Uj||!a1(g)||!a1(h)||!a1(E)||E>g?NaN:Wj(e,g,h,E)}}Hj.exports=gEr});var Dj=u((nkr,kj)=>{"use strict";var mEr=u1(),qEr=mEr();kj.exports=qEr});var zj=u((akr,Jj)=>{"use strict";var yEr=w(),Xj=Dj(),hEr=u1();yEr(Xj,"factory",hEr);Jj.exports=Xj});var $j=u((ukr,Zj)=>{"use strict";var Yj=U().isPrimitive;function dEr(r,e){return Yj(r)?Yj(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}Zj.exports=dEr});var s1=u((skr,nV)=>{"use strict";var Ye=w(),pu=P(),Qj=R(),Kj=S(),rV=L(),eV=A(),tV=I(),wEr=M(),li=ni().factory,iV=b(),bEr=_(),EEr=$j();function NEr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=li();else if(arguments.length===1){if(i=arguments[0],!Kj(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(eV(i,"prng")){if(!rV(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");r=li({prng:i.prng})}else r=li(i)}else{if(e=arguments[0],t=arguments[1],s=EEr(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!Kj(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(eV(i,"prng")){if(!rV(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");r=li(e,t,{prng:i.prng})}else r=li(e,t,i)}else r=li(e,t)}return e===void 0?a=m:a=y,n=r.PRNG,Ye(a,"NAME","invgamma"),i&&i.prng?(Ye(a,"seed",null),Ye(a,"seedLength",null),Qj(a,"state",tV(null),wEr),Ye(a,"stateLength",null),Ye(a,"byteLength",null),Ye(a,"toJSON",tV(null))):(pu(a,"seed",o),pu(a,"seedLength",v),Qj(a,"state",c,p),pu(a,"stateLength",f),pu(a,"byteLength",l),Ye(a,"toJSON",q)),Ye(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function l(){return n.byteLength}function c(){return n.state}function p(g){n.state=g}function q(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=bEr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function y(){return 1/r()}function m(g,h){return iV(g)||iV(h)||g<=0||h<=0?NaN:1/r(g,h)}}nV.exports=NEr});var uV=u((okr,aV)=>{"use strict";var AEr=s1(),OEr=AEr();aV.exports=OEr});var vV=u((vkr,oV)=>{"use strict";var SEr=w(),sV=uV(),TEr=s1();SEr(sV,"factory",TEr);oV.exports=sV});var cV=u((fkr,lV)=>{"use strict";var fV=U().isPrimitive;function LEr(r,e){return fV(r)?fV(e)?null:new TypeError("invalid argument. `b` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `a` must be a positive number. Value: `"+r+"`.")}lV.exports=LEr});var mV=u((lkr,gV)=>{"use strict";var pV=Q();function IEr(r,e,t){var i=r();return pV(1-pV(1-i,1/t),1/e)}gV.exports=IEr});var o1=u((ckr,NV)=>{"use strict";var fe=w(),gu=P(),qV=R(),yV=S(),hV=L(),dV=A(),wV=I(),PEr=M(),mu=H().factory,bV=b(),REr=_(),_Er=cV(),EV=mV();function FEr(){var r,e,t,i,n,a;if(arguments.length===0)e=mu();else if(arguments.length===1){if(r=arguments[0],!yV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(dV(r,"prng")){if(!hV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=mu(r)}else{if(n=arguments[0],a=arguments[1],i=_Er(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!yV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(dV(r,"prng")){if(!hV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=mu(r)}else e=mu()}return n===void 0?t=y:t=q,fe(t,"NAME","kumaraswamy"),r&&r.prng?(fe(t,"seed",null),fe(t,"seedLength",null),qV(t,"state",wV(null),PEr),fe(t,"stateLength",null),fe(t,"byteLength",null),fe(t,"toJSON",wV(null)),fe(t,"PRNG",e)):(gu(t,"seed",s),gu(t,"seedLength",o),qV(t,"state",l,c),gu(t,"stateLength",v),gu(t,"byteLength",f),fe(t,"toJSON",p),fe(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=REr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return EV(e,n,a)}function y(m,g){return bV(m)||bV(g)||m<=0||g<=0?NaN:EV(e,m,g)}}NV.exports=FEr});var OV=u((pkr,AV)=>{"use strict";var MEr=o1(),xEr=MEr();AV.exports=xEr});var LV=u((gkr,TV)=>{"use strict";var BEr=w(),SV=OV(),CEr=o1();BEr(SV,"factory",CEr);TV.exports=SV});var PV=u((mkr,IV)=>{"use strict";var jEr=x().isPrimitive,VEr=U().isPrimitive,GEr=tr();function UEr(r,e){return!jEr(r)||GEr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):VEr(e)?null:new TypeError("invalid argument. `b` must be a positive number. Value: `"+e+"`.")}IV.exports=UEr});var _V=u((qkr,RV)=>{"use strict";var WEr=Ga(),HEr=$(),kEr=B();function DEr(r,e,t){var i=r()-.5;return e-t*WEr(i)*kEr(1-2*HEr(i))}RV.exports=DEr});var v1=u((ykr,GV)=>{"use strict";var le=w(),qu=P(),FV=R(),MV=S(),xV=L(),BV=A(),CV=I(),XEr=M(),yu=H().factory,jV=b(),JEr=_(),zEr=PV(),VV=_V();function YEr(){var r,e,t,i,n,a;if(arguments.length===0)e=yu();else if(arguments.length===1){if(r=arguments[0],!MV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(BV(r,"prng")){if(!xV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=yu(r)}else{if(n=arguments[0],a=arguments[1],i=zEr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!MV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(BV(r,"prng")){if(!xV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=yu(r)}else e=yu()}return n===void 0?t=y:t=q,le(t,"NAME","laplace"),r&&r.prng?(le(t,"seed",null),le(t,"seedLength",null),FV(t,"state",CV(null),XEr),le(t,"stateLength",null),le(t,"byteLength",null),le(t,"toJSON",CV(null)),le(t,"PRNG",e)):(qu(t,"seed",s),qu(t,"seedLength",o),FV(t,"state",l,c),qu(t,"stateLength",v),qu(t,"byteLength",f),le(t,"toJSON",p),le(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=JEr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return VV(e,n,a)}function y(m,g){return jV(m)||jV(g)||g<=0?NaN:VV(e,m,g)}}GV.exports=YEr});var WV=u((hkr,UV)=>{"use strict";var ZEr=v1(),$Er=ZEr();UV.exports=$Er});var DV=u((dkr,kV)=>{"use strict";var QEr=w(),HV=WV(),KEr=v1();QEr(HV,"factory",KEr);kV.exports=HV});var JV=u((wkr,XV)=>{"use strict";var rNr=x().isPrimitive,eNr=U().isPrimitive,tNr=tr();function iNr(r,e){return!rNr(r)||tNr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):eNr(e)?null:new TypeError("invalid argument. `c` must be a positive number. Value: `"+e+"`.")}XV.exports=iNr});var YV=u((bkr,zV)=>{"use strict";function nNr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}zV.exports=nNr});var $V=u((Ekr,ZV)=>{"use strict";function aNr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}ZV.exports=aNr});var KV=u((Nkr,QV)=>{"use strict";function uNr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}QV.exports=uNr});var eG=u((Akr,rG)=>{"use strict";function sNr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}rG.exports=sNr});var iG=u((Okr,tG)=>{"use strict";function oNr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}tG.exports=oNr});var sG=u((Skr,uG)=>{"use strict";var vNr=b(),nG=G(),aG=B(),fNr=j(),lNr=J(),cNr=YV(),pNr=$V(),gNr=KV(),mNr=eG(),qNr=iG(),yNr=.08913147449493408,hNr=2.249481201171875,dNr=.807220458984375,wNr=.9399557113647461,bNr=.9836282730102539;function ENr(r){var e,t,i,n,a,s;return vNr(r)?NaN:r===1?fNr:r===-1?lNr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),s=cNr(t),e*(a*yNr+a*s)):n>=.25?(a=nG(-2*aG(n)),n-=.25,s=pNr(n),e*(a/(hNr+s))):(n=nG(-aG(n)),n<3?(i=n-1.125,s=gNr(i),e*(dNr*n+s*n)):n<6?(i=n-3,s=mNr(i),e*(wNr*n+s*n)):(i=n-6,s=qNr(i),e*(bNr*n+s*n))))}uG.exports=ENr});var f1=u((Tkr,oG)=>{"use strict";var NNr=sG();oG.exports=NNr});var fG=u((Lkr,vG)=>{"use strict";var ANr=f1(),l1=b(),ONr=G();function SNr(r,e,t){var i,n;return l1(e)||l1(t)||l1(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*ONr(2),i+n*ANr(2*r-1))}vG.exports=SNr});var cG=u((Ikr,lG)=>{"use strict";var TNr=I(),LNr=Dv().factory,INr=f1(),c1=b(),PNr=G();function RNr(r,e){var t,i;if(c1(r)||c1(e)||e<0)return TNr(NaN);return e===0&&LNr(r),t=r,i=e*PNr(2),n;function n(a){return c1(a)||a<0||a>1?NaN:t+i*INr(2*a-1)}}lG.exports=RNr});var mG=u((Pkr,gG)=>{"use strict";var _Nr=w(),pG=fG(),FNr=cG();_Nr(pG,"factory",FNr);gG.exports=pG});var yG=u((Rkr,qG)=>{"use strict";var MNr=mG();function xNr(r,e,t){var i=MNr(1-r()/2,0,1);return e+t/(i*i)}qG.exports=xNr});var p1=u((_kr,OG)=>{"use strict";var ce=w(),hu=P(),hG=R(),dG=S(),wG=L(),bG=A(),EG=I(),BNr=M(),du=H().factory,NG=b(),CNr=_(),jNr=JV(),AG=yG();function VNr(){var r,e,t,i,n,a;if(arguments.length===0)e=du();else if(arguments.length===1){if(r=arguments[0],!dG(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(bG(r,"prng")){if(!wG(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=du(r)}else{if(n=arguments[0],a=arguments[1],i=jNr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!dG(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(bG(r,"prng")){if(!wG(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=du(r)}else e=du()}return n===void 0?t=y:t=q,ce(t,"NAME","levy"),r&&r.prng?(ce(t,"seed",null),ce(t,"seedLength",null),hG(t,"state",EG(null),BNr),ce(t,"stateLength",null),ce(t,"byteLength",null),ce(t,"toJSON",EG(null)),ce(t,"PRNG",e)):(hu(t,"seed",s),hu(t,"seedLength",o),hG(t,"state",l,c),hu(t,"stateLength",v),hu(t,"byteLength",f),ce(t,"toJSON",p),ce(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=CNr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return AG(e,n,a)}function y(m,g){return NG(m)||NG(g)||g<=0?NaN:AG(e,m,g)}}OG.exports=VNr});var TG=u((Fkr,SG)=>{"use strict";var GNr=p1(),UNr=GNr();SG.exports=UNr});var PG=u((Mkr,IG)=>{"use strict";var WNr=w(),LG=TG(),HNr=p1();WNr(LG,"factory",HNr);IG.exports=LG});var _G=u((xkr,RG)=>{"use strict";var kNr=x().isPrimitive,DNr=U().isPrimitive,XNr=tr();function JNr(r,e){return!kNr(r)||XNr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):DNr(e)?null:new TypeError("invalid argument. `s` must be a positive number. Value: `"+e+"`.")}RG.exports=JNr});var MG=u((Bkr,FG)=>{"use strict";var zNr=B();function YNr(r,e,t){var i=r();return e+t*zNr(i/(1-i))}FG.exports=YNr});var g1=u((Ckr,WG)=>{"use strict";var pe=w(),wu=P(),xG=R(),BG=S(),CG=L(),jG=A(),VG=I(),ZNr=M(),bu=H().factory,GG=b(),$Nr=_(),QNr=_G(),UG=MG();function KNr(){var r,e,t,i,n,a;if(arguments.length===0)e=bu();else if(arguments.length===1){if(r=arguments[0],!BG(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(jG(r,"prng")){if(!CG(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=bu(r)}else{if(n=arguments[0],a=arguments[1],i=QNr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!BG(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(jG(r,"prng")){if(!CG(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=bu(r)}else e=bu()}return n===void 0?t=y:t=q,pe(t,"NAME","logistic"),r&&r.prng?(pe(t,"seed",null),pe(t,"seedLength",null),xG(t,"state",VG(null),ZNr),pe(t,"stateLength",null),pe(t,"byteLength",null),pe(t,"toJSON",VG(null)),pe(t,"PRNG",e)):(wu(t,"seed",s),wu(t,"seedLength",o),xG(t,"state",l,c),wu(t,"stateLength",v),wu(t,"byteLength",f),pe(t,"toJSON",p),pe(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=$Nr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return UG(e,n,a)}function y(m,g){return GG(m)||GG(g)||g<=0?NaN:UG(e,m,g)}}WG.exports=KNr});var kG=u((jkr,HG)=>{"use strict";var rAr=g1(),eAr=rAr();HG.exports=eAr});var JG=u((Vkr,XG)=>{"use strict";var tAr=w(),DG=kG(),iAr=g1();tAr(DG,"factory",iAr);XG.exports=DG});var YG=u((Gkr,zG)=>{"use strict";var nAr=x().isPrimitive,aAr=U().isPrimitive,uAr=tr();function sAr(r,e){return!nAr(r)||uAr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):aAr(e)?null:new TypeError("invalid argument. `sigma` must be a positive number. Value: `"+e+"`.")}zG.exports=sAr});var $G=u((Ukr,ZG)=>{"use strict";var oAr=sr();function vAr(r,e,t){return oAr(e+t*r())}ZG.exports=vAr});var m1=u((Wkr,aU)=>{"use strict";var Ze=w(),Eu=P(),QG=R(),KG=S(),rU=L(),eU=A(),tU=I(),fAr=M(),ci=We().factory,iU=b(),lAr=_(),cAr=YG(),nU=$G();function pAr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=ci();else if(arguments.length===1){if(t=arguments[0],!KG(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(eU(t,"prng")){if(!rU(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ci({prng:t.prng})}else e=ci(t)}else{if(s=arguments[0],r=arguments[1],a=cAr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!KG(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(eU(t,"prng")){if(!rU(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ci({prng:t.prng})}else e=ci(t)}else e=ci()}return s===void 0?n=m:n=y,i=e.PRNG,Ze(n,"NAME","lognormal"),t&&t.prng?(Ze(n,"seed",null),Ze(n,"seedLength",null),QG(n,"state",tU(null),fAr),Ze(n,"stateLength",null),Ze(n,"byteLength",null),Ze(n,"toJSON",tU(null))):(Eu(n,"seed",o),Eu(n,"seedLength",v),QG(n,"state",c,p),Eu(n,"stateLength",f),Eu(n,"byteLength",l),Ze(n,"toJSON",q)),Ze(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=lAr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return nU(e,s,r)}function m(g,h){return iU(g)||iU(h)||h<=0?NaN:nU(e,g,h)}}aU.exports=pAr});var sU=u((Hkr,uU)=>{"use strict";var gAr=m1(),mAr=gAr();uU.exports=mAr});var fU=u((kkr,vU)=>{"use strict";var qAr=w(),oU=sU(),yAr=m1();qAr(oU,"factory",yAr);vU.exports=oU});var q1=u((Dkr,lU)=>{"use strict";var hAr=Ft(),dAr=K(),wAr=hAr-1;function bAr(){var r=dAr(1+wAr*Math.random());return r|0}lU.exports=bAr});var d1=u((Xkr,qU)=>{"use strict";var ge=w(),$e=P(),cU=R(),y1=A(),EAr=S(),NAr=ar().isPrimitive,AAr=_r(),OAr=Yr().isPrimitive,pU=yn(),Nu=Ft(),hr=vt(),pi=Ce(),SAr=_(),gU=q1(),h1=Nu-1|0,TAr=Nu-1|0,LAr=16807,Au=1,Ou=2,Qe=2,dr=4,Ki=5;function mU(r,e){var t;return e?t="option":t="argument",r.length<Ki+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==Au?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+Au+". Actual: "+r[0]+"."):r[1]!==Ou?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+Ou+". Actual: "+r[1]+"."):r[Qe]!==1?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+1 .toString()+". Actual: "+r[Qe]+"."):r[dr]!==r.length-Ki?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-Ki)+". Actual: "+r[dr]+"."):null}function IAr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!EAr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(y1(r,"copy")&&(i.copy=r.copy,!NAr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(y1(r,"state")){if(t=r.state,i.state=!0,!pU(t))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+t+"`.");if(s=mU(t,!0),s)throw s;i.copy===!1?e=t:(e=new hr(t.length),pi(t.length,t,1,e,1)),t=new hr(e.buffer,e.byteOffset+(Qe+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,t[dr])}if(n===void 0)if(y1(r,"seed"))if(n=r.seed,i.seed=!0,OAr(n)){if(n>TAr)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+n+"`.");n|=0}else if(AAr(n)&&n.length>0)a=n.length,e=new hr(Ki+a),e[0]=Au,e[1]=Ou,e[Qe]=1,e[dr]=a,pi.ndarray(a,n,1,0,e,1,dr+1),t=new hr(e.buffer,e.byteOffset+(Qe+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+n+"`.");else n=gU()|0}else n=gU()|0;return t===void 0&&(e=new hr(Ki+1),e[0]=Au,e[1]=Ou,e[Qe]=1,e[dr]=1,e[dr+1]=n,t=new hr(e.buffer,e.byteOffset+(Qe+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),ge(y,"NAME","minstd"),$e(y,"seed",o),$e(y,"seedLength",v),cU(y,"state",c,p),$e(y,"stateLength",f),$e(y,"byteLength",l),ge(y,"toJSON",q),ge(y,"MIN",1),ge(y,"MAX",Nu-1),ge(y,"normalized",m),ge(m,"NAME",y.NAME),$e(m,"seed",o),$e(m,"seedLength",v),cU(m,"state",c,p),$e(m,"stateLength",f),$e(m,"byteLength",l),ge(m,"toJSON",q),ge(m,"MIN",(y.MIN-1)/h1),ge(m,"MAX",(y.MAX-1)/h1),y;function o(){var g=e[dr];return pi(g,n,1,new hr(g),1)}function v(){return e[dr]}function f(){return e.length}function l(){return e.byteLength}function c(){var g=e.length;return pi(g,e,1,new hr(g),1)}function p(g){var h;if(!pU(g))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+g+"`.");if(h=mU(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?pi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new hr(g.length)),pi(g.length,g,1,e,1)),t=new hr(e.buffer,e.byteOffset+(Qe+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,e[dr])}function q(){var g={};return g.type="PRNG",g.name=y.NAME,g.state=SAr(e),g.params=[],g}function y(){var g=t[0]|0;return g=LAr*g%Nu|0,t[0]=g,g|0}function m(){return(y()-1)/h1}}qU.exports=IAr});var hU=u((Jkr,yU)=>{"use strict";var PAr=d1(),RAr=q1(),_Ar=PAr({seed:RAr()});yU.exports=_Ar});var bU=u((zkr,wU)=>{"use strict";var FAr=w(),dU=hU(),MAr=d1();FAr(dU,"factory",MAr);wU.exports=dU});var NU=u((Ykr,EU)=>{"use strict";var xAr=b(),BAr=8;function CAr(r,e,t){var i,n;for(n=0;n<BAr;n++)if(i=r(),xAr(i))throw new Error("unexpected error. PRNG returned `NaN`.");for(n=t-1;n>=0;n--)e[n]=r();return e}EU.exports=CAr});var w1=u((Zkr,AU)=>{"use strict";var jAr=Ft(),VAr=K(),GAr=jAr-1;function UAr(){var r=VAr(1+GAr*Math.random());return r|0}AU.exports=UAr});var N1=u(($kr,PU)=>{"use strict";var me=w(),Ke=P(),OU=R(),b1=A(),WAr=S(),HAr=ar().isPrimitive,kAr=_r(),DAr=Yr().isPrimitive,SU=yn(),gi=Ce(),XAr=K(),wr=vt(),rn=Ft(),JAr=_(),TU=NU(),LU=w1(),E1=rn-1|0,zAr=rn-1|0,YAr=16807,Er=32,Lu=1,Iu=3,rt=2,mi=Er+3,br=Er+6,en=Er+7,Su=mi+1,Tu=mi+2;function IU(r,e){var t;return e?t="option":t="argument",r.length<en+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==Lu?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+Lu+". Actual: "+r[0]+"."):r[1]!==Iu?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+Iu+". Actual: "+r[1]+"."):r[rt]!==Er?new RangeError("invalid "+t+". `state` array has an incompatible table length. Expected: "+Er+". Actual: "+r[rt]+"."):r[mi]!==2?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+2 .toString()+". Actual: "+r[mi]+"."):r[br]!==r.length-en?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-en)+". Actual: "+r[br]+"."):null}function ZAr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!WAr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(b1(r,"copy")&&(i.copy=r.copy,!HAr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(b1(r,"state")){if(t=r.state,i.state=!0,!SU(t))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+t+"`.");if(s=IU(t,!0),s)throw s;i.copy===!1?e=t:(e=new wr(t.length),gi(t.length,t,1,e,1)),t=new wr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,t[br])}if(n===void 0)if(b1(r,"seed"))if(n=r.seed,i.seed=!0,DAr(n)){if(n>zAr)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+n+"`.");n|=0}else if(kAr(n)&&n.length>0)a=n.length,e=new wr(en+a),e[0]=Lu,e[1]=Iu,e[rt]=Er,e[mi]=2,e[Tu]=n[0],e[br]=a,gi.ndarray(a,n,1,0,e,1,br+1),t=new wr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,a),t=TU(y,t,Er),e[Su]=t[0];else throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+n+"`.");else n=LU()|0}else n=LU()|0;return t===void 0&&(e=new wr(en+1),e[0]=Lu,e[1]=Iu,e[rt]=Er,e[mi]=2,e[Tu]=n,e[br]=1,e[br+1]=n,t=new wr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,1),t=TU(y,t,Er),e[Su]=t[0]),me(m,"NAME","minstd-shuffle"),Ke(m,"seed",o),Ke(m,"seedLength",v),OU(m,"state",c,p),Ke(m,"stateLength",f),Ke(m,"byteLength",l),me(m,"toJSON",q),me(m,"MIN",1),me(m,"MAX",rn-1),me(m,"normalized",g),me(g,"NAME",m.NAME),Ke(g,"seed",o),Ke(g,"seedLength",v),OU(g,"state",c,p),Ke(g,"stateLength",f),Ke(g,"byteLength",l),me(g,"toJSON",q),me(g,"MIN",(m.MIN-1)/E1),me(g,"MAX",(m.MAX-1)/E1),m;function o(){var h=e[br];return gi(h,n,1,new wr(h),1)}function v(){return e[br]}function f(){return e.length}function l(){return e.byteLength}function c(){var h=e.length;return gi(h,e,1,new wr(h),1)}function p(h){var E;if(!SU(h))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+h+"`.");if(E=IU(h,!1),E)throw E;i.copy===!1?i.state&&h.length===e.length?gi(h.length,h,1,e,1):(e=h,i.state=!0):(h.length!==e.length&&(e=new wr(h.length)),gi(h.length,h,1,e,1)),t=new wr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,e[br])}function q(){var h={};return h.type="PRNG",h.name=m.NAME,h.state=JAr(e),h.params=[],h}function y(){var h=e[Tu]|0;return h=YAr*h%rn|0,e[Tu]=h,h|0}function m(){var h,E;return h=e[Su],E=XAr(Er*(h/rn)),h=t[E],e[Su]=h,t[E]=y(),h}function g(){return(m()-1)/E1}}PU.exports=ZAr});var _U=u((Qkr,RU)=>{"use strict";var $Ar=N1(),QAr=w1(),KAr=$Ar({seed:QAr()});RU.exports=KAr});var xU=u((Kkr,MU)=>{"use strict";var rOr=w(),FU=_U(),eOr=N1();rOr(FU,"factory",eOr);MU.exports=FU});var CU=u((rDr,BU)=>{"use strict";var tOr=sr();function iOr(r,e){for(var t=r(),i=1;t>tOr(-e);)i+=1,t*=r();return i-1}BU.exports=iOr});var VU=u((eDr,jU)=>{"use strict";var nOr=K();function aOr(r){return nOr(r)===r&&r<0}jU.exports=aOr});var UU=u((tDr,GU)=>{"use strict";var uOr=VU();GU.exports=uOr});var HU=u((iDr,WU)=>{"use strict";var sOr=UU(),oOr=xi();function vOr(r){return sOr(r)?NaN:oOr(r+1)}WU.exports=vOr});var DU=u((nDr,kU)=>{"use strict";var fOr=HU();kU.exports=fOr});var YU=u((aDr,zU)=>{"use strict";var lOr=DU(),XU=K(),cOr=Ga(),pOr=G(),JU=$(),Pu=B(),gOr=zo(),mOr=1/12,qOr=1/360;function yOr(r,e){var t,i,n,a,s,o,v,f,l,c;for(t=pOr(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,s=-3.6224/(v-2)+.9277,n=.86*s;;){if(c=r(),c<=n)return l=c/s-.43,l*=2*o/(.5-JU(l))+v,l+=e+.445,XU(l);if(c>=s?l=r()-.5:(l=c/s-.93,l=cOr(l)*.5-l,c=s*r()),a=.5-JU(l),(a>=.013||a>=c)&&(f=XU((2*o/a+v)*l+e+.445),c*=i/(o/(a*a)+v),l=(f+.5)*Pu(e/f),l+=-e-gOr+f,l-=(mOr-qOr/(f*f))/f,f>=10&&l>=Pu(c*t)||(l=f*Pu(e)-e-lOr(f),f>=0&&f<=9&&l>=Pu(c))))return f}}zU.exports=yOr});var $U=u((uDr,ZU)=>{"use strict";var hOr=CU(),dOr=YU();function wOr(r,e){return e<30?hOr(r,e):dOr(r,e)}ZU.exports=wOr});var A1=u((sDr,nW)=>{"use strict";var qe=w(),Ru=P(),QU=R(),bOr=U().isPrimitive,KU=S(),rW=L(),eW=A(),tW=I(),EOr=M(),_u=H().factory,NOr=b(),AOr=_(),iW=$U();function OOr(){var r,e,t,i;if(arguments.length===0)t=_u();else if(arguments.length===1&&KU(arguments[0]))if(e=arguments[0],eW(e,"prng")){if(!rW(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=_u(e);else{if(r=arguments[0],!bOr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!KU(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(eW(e,"prng")){if(!rW(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=_u(e)}else t=_u()}return r===void 0?i=p:i=c,qe(i,"NAME","poisson"),e&&e.prng?(qe(i,"seed",null),qe(i,"seedLength",null),QU(i,"state",tW(null),EOr),qe(i,"stateLength",null),qe(i,"byteLength",null),qe(i,"toJSON",tW(null)),qe(i,"PRNG",t)):(Ru(i,"seed",n),Ru(i,"seedLength",a),QU(i,"state",v,f),Ru(i,"stateLength",s),Ru(i,"byteLength",o),qe(i,"toJSON",l),qe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=AOr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return iW(t,r)}function p(q){return NOr(q)||q<=0?NaN:iW(t,q)}}nW.exports=OOr});var uW=u((oDr,aW)=>{"use strict";var SOr=A1(),TOr=SOr();aW.exports=TOr});var O1=u((vDr,oW)=>{"use strict";var LOr=w(),sW=uW(),IOr=A1();LOr(sW,"factory",IOr);oW.exports=sW});var fW=u((fDr,vW)=>{"use strict";var POr=U().isPrimitive,ROr=x().isPrimitive,_Or=tr();function FOr(r,e){return POr(r)?!ROr(e)||_Or(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):e<=0||e>=1?new RangeError("invalid argument. Second argument must be on the interval `(0,1)`. Value: `"+e+"`."):null:new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.")}vW.exports=FOr});var I1=u((lDr,hW)=>{"use strict";var et=w(),Fu=P(),lW=R(),qi=A(),cW=S(),S1=kr(),pW=ar().isPrimitive,gW=L(),mW=I(),MOr=M(),qW=b(),yi=O1().factory,Mu=ni().factory,T1=Ce(),L1=or(),yW=Mt(),xOr=_(),BOr=fW();function COr(){var r,e,t,i,n,a,s,o,v,f;if(s=!0,arguments.length===0)i={copy:!1},t=yi(i);else if(arguments.length===1){if(i=arguments[0],!cW(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(qi(i,"copy")&&!pW(i.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+i.copy+"`.");if(qi(i,"prng")){if(!gW(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");t=yi({prng:i.prng})}else{if(qi(i,"state")&&!S1(i.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+i.state+"`.");i=yW(i,1),i.copy===!1?s=!1:i.state&&(i.state=T1(i.state.length,i.state,1,new L1(i.state.length),1)),i.copy=!1,t=yi(i)}}else{if(f=arguments[0],v=arguments[1],o=BOr(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!cW(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(qi(i,"copy")&&!pW(i.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+i.copy+"`.");if(qi(i,"prng")){if(!gW(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");t=yi({prng:i.prng})}else{if(qi(i,"state")&&!S1(i.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+i.state+"`.");i=yW(i,1),i.copy===!1?s=!1:i.state&&(i.state=T1(i.state.length,i.state,1,new L1(i.state.length),1)),i.copy=!1,t=yi(i)}}else i={copy:!1},t=yi(i)}return i&&i.prng?f===void 0?r=Mu({prng:i.prng}):r=Mu(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=Mu({state:e,copy:!1}):r=Mu(f,v/(1-v),{state:e,copy:!1})),f===void 0?n=E:n=h,a=t.PRNG,et(n,"NAME","negative-binomial"),i&&i.prng?(et(n,"seed",null),et(n,"seedLength",null),lW(n,"state",mW(null),MOr),et(n,"stateLength",null),et(n,"byteLength",null),et(n,"toJSON",mW(null))):(Fu(n,"seed",l),Fu(n,"seedLength",c),lW(n,"state",y,m),Fu(n,"stateLength",p),Fu(n,"byteLength",q),et(n,"toJSON",g)),et(n,"PRNG",a),n;function l(){return a.seed}function c(){return a.seedLength}function p(){return a.stateLength}function q(){return a.byteLength}function y(){return a.state}function m(N){if(!S1(N))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+N+"`.");s&&(N=T1(N.length,N,1,new L1(N.length),1)),a.state=N}function g(){var N={};return N.type="PRNG",N.name=n.NAME,N.state=xOr(a.state),f===void 0?N.params=[]:N.params=[f,v],N}function h(){return t(r())}function E(N,C){return qW(N)||qW(C)||C<=0||C>=1?NaN:t(r(N,C/(1-C)))}}hW.exports=COr});var wW=u((cDr,dW)=>{"use strict";var jOr=I1(),VOr=jOr();dW.exports=VOr});var NW=u((pDr,EW)=>{"use strict";var GOr=w(),bW=wW(),UOr=I1();GOr(bW,"factory",UOr);EW.exports=bW});var OW=u((gDr,AW)=>{"use strict";var WOr=x().isPrimitive,HOr=U().isPrimitive,kOr=tr();function DOr(r,e){return!WOr(r)||kOr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):HOr(e)?null:new TypeError("invalid argument. `sigma` must be a positive number. Value: `"+e+"`.")}AW.exports=DOr});var TW=u((mDr,SW)=>{"use strict";function XOr(r,e,t){return e+t*r()}SW.exports=XOr});var P1=u((qDr,xW)=>{"use strict";var tt=w(),xu=P(),LW=R(),IW=S(),PW=L(),RW=A(),_W=I(),JOr=M(),hi=We().factory,FW=b(),zOr=_(),YOr=OW(),MW=TW();function ZOr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=hi();else if(arguments.length===1){if(t=arguments[0],!IW(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(RW(t,"prng")){if(!PW(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=hi({prng:t.prng})}else e=hi(t)}else{if(s=arguments[0],r=arguments[1],a=YOr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!IW(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(RW(t,"prng")){if(!PW(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=hi({prng:t.prng})}else e=hi(t)}else e=hi()}return s===void 0?n=m:n=y,i=e.PRNG,tt(n,"NAME","normal"),t&&t.prng?(tt(n,"seed",null),tt(n,"seedLength",null),LW(n,"state",_W(null),JOr),tt(n,"stateLength",null),tt(n,"byteLength",null),tt(n,"toJSON",_W(null))):(xu(n,"seed",o),xu(n,"seedLength",v),LW(n,"state",c,p),xu(n,"stateLength",f),xu(n,"byteLength",l),tt(n,"toJSON",q)),tt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=zOr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return MW(e,s,r)}function m(g,h){return FW(g)||FW(h)||h<=0?NaN:MW(e,g,h)}}xW.exports=ZOr});var CW=u((yDr,BW)=>{"use strict";var $Or=P1(),QOr=$Or();BW.exports=QOr});var GW=u((hDr,VW)=>{"use strict";var KOr=w(),jW=CW(),rSr=P1();KOr(jW,"factory",rSr);VW.exports=jW});var HW=u((dDr,WW)=>{"use strict";var UW=U().isPrimitive;function eSr(r,e){return UW(r)?UW(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}WW.exports=eSr});var DW=u((wDr,kW)=>{"use strict";var tSr=Q();function iSr(r,e,t){return t/tSr(r(),1/e)}kW.exports=iSr});var R1=u((bDr,KW)=>{"use strict";var ye=w(),Bu=P(),XW=R(),JW=S(),zW=L(),YW=A(),ZW=I(),nSr=M(),Cu=H().factory,$W=b(),aSr=_(),uSr=HW(),QW=DW();function sSr(){var r,e,t,i,n,a;if(arguments.length===0)i=Cu();else if(arguments.length===1){if(t=arguments[0],!JW(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(YW(t,"prng")){if(!zW(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");i=t.prng}else i=Cu(t)}else{if(r=arguments[0],e=arguments[1],a=uSr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!JW(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(YW(t,"prng")){if(!zW(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");i=t.prng}else i=Cu(t)}else i=Cu()}return r===void 0?n=y:n=q,ye(n,"NAME","pareto-type1"),t&&t.prng?(ye(n,"seed",null),ye(n,"seedLength",null),XW(n,"state",ZW(null),nSr),ye(n,"stateLength",null),ye(n,"byteLength",null),ye(n,"toJSON",ZW(null)),ye(n,"PRNG",i)):(Bu(n,"seed",s),Bu(n,"seedLength",o),XW(n,"state",l,c),Bu(n,"stateLength",v),Bu(n,"byteLength",f),ye(n,"toJSON",p),ye(n,"PRNG",i),i=i.normalized),n;function s(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function l(){return i.state}function c(m){i.state=m}function p(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=aSr(i.state),r===void 0?m.params=[]:m.params=[r,e],m}function q(){return QW(i,r,e)}function y(m,g){return $W(m)||$W(g)||m<=0||g<=0?NaN:QW(i,m,g)}}KW.exports=sSr});var eH=u((EDr,rH)=>{"use strict";var oSr=R1(),vSr=oSr();rH.exports=vSr});var nH=u((NDr,iH)=>{"use strict";var fSr=w(),tH=eH(),lSr=R1();fSr(tH,"factory",lSr);iH.exports=tH});var uH=u((ADr,aH)=>{"use strict";var cSr=G(),pSr=B();function gSr(r,e){return e*cSr(-2*pSr(r()))}aH.exports=gSr});var _1=u((ODr,pH)=>{"use strict";var he=w(),ju=P(),sH=R(),mSr=U().isPrimitive,oH=S(),vH=L(),fH=A(),lH=I(),qSr=M(),Vu=H().factory,ySr=b(),hSr=_(),cH=uH();function dSr(){var r,e,t,i;if(arguments.length===0)t=Vu();else if(arguments.length===1&&oH(arguments[0]))if(e=arguments[0],fH(e,"prng")){if(!vH(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Vu(e);else{if(r=arguments[0],!mSr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!oH(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(fH(e,"prng")){if(!vH(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Vu(e)}else t=Vu()}return r===void 0?i=p:i=c,he(i,"NAME","rayleigh"),e&&e.prng?(he(i,"seed",null),he(i,"seedLength",null),sH(i,"state",lH(null),qSr),he(i,"stateLength",null),he(i,"byteLength",null),he(i,"toJSON",lH(null)),he(i,"PRNG",t)):(ju(i,"seed",n),ju(i,"seedLength",a),sH(i,"state",v,f),ju(i,"stateLength",s),ju(i,"byteLength",o),he(i,"toJSON",l),he(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=hSr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return cH(t,r)}function p(q){return ySr(q)||q<=0?NaN:cH(t,q)}}pH.exports=dSr});var mH=u((SDr,gH)=>{"use strict";var wSr=_1(),bSr=wSr();gH.exports=bSr});var hH=u((TDr,yH)=>{"use strict";var ESr=w(),qH=mH(),NSr=_1();ESr(qH,"factory",NSr);yH.exports=qH});var B1=u((LDr,TH)=>{"use strict";var it=w(),Gu=P(),dH=R(),di=A(),wH=U().isPrimitive,bH=S(),F1=kr(),EH=ar().isPrimitive,ASr=b(),NH=L(),AH=I(),OSr=M(),Uu=Qi().factory,wi=We().factory,M1=Ce(),x1=or(),OH=Mt(),SSr=_(),SH=G();function TSr(){var r,e,t,i,n,a,s,o;if(s=!0,arguments.length===0)n={copy:!1},t=wi(n);else if(arguments.length===1)if(bH(arguments[0])){if(n=arguments[0],di(n,"copy")&&!EH(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(di(n,"prng")){if(!NH(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=wi({prng:n.prng})}else{if(di(n,"state")&&!F1(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=OH(n,1),n.copy===!1?s=!1:n.state&&(n.state=M1(n.state.length,n.state,1,new x1(n.state.length),1)),n.copy=!1,t=wi(n)}}else{if(o=arguments[0],!wH(o))throw new TypeError("invalid argument. First argument must be a positive number or an options object. Value: `"+o+"`.");n={copy:!1},t=wi(n)}else{if(o=arguments[0],!wH(o))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+o+"`.");if(n=arguments[1],!bH(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(di(n,"copy")&&!EH(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(di(n,"prng")){if(!NH(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=wi({prng:n.prng})}else{if(di(n,"state")&&!F1(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=OH(n,1),n.copy===!1?s=!1:n.state&&(n.state=M1(n.state.length,n.state,1,new x1(n.state.length),1)),n.copy=!1,t=wi(n)}}return n&&n.prng?o===void 0?r=Uu({prng:n.prng}):r=Uu(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=Uu({state:e,copy:!1}):r=Uu(o,{state:e,copy:!1})),o===void 0?a=g:a=m,i=t.PRNG,it(a,"NAME","t"),n&&n.prng?(it(a,"seed",null),it(a,"seedLength",null),dH(a,"state",AH(null),OSr),it(a,"stateLength",null),it(a,"byteLength",null),it(a,"toJSON",AH(null))):(Gu(a,"seed",v),Gu(a,"seedLength",f),dH(a,"state",p,q),Gu(a,"stateLength",l),Gu(a,"byteLength",c),it(a,"toJSON",y)),it(a,"PRNG",i),a;function v(){return i.seed}function f(){return i.seedLength}function l(){return i.stateLength}function c(){return i.byteLength}function p(){return i.state}function q(h){if(!F1(h))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+h+"`.");s&&(h=M1(h.length,h,1,new x1(h.length),1)),i.state=h}function y(){var h={};return h.type="PRNG",h.name=a.NAME,h.state=SSr(i.state),o===void 0?h.params=[]:h.params=[o],h}function m(){return t()/SH(r()/o)}function g(h){return ASr(h)||h<=0?NaN:t()/SH(r(h)/h)}}TH.exports=TSr});var IH=u((IDr,LH)=>{"use strict";var LSr=B1(),ISr=LSr();LH.exports=ISr});var _H=u((PDr,RH)=>{"use strict";var PSr=w(),PH=IH(),RSr=B1();PSr(PH,"factory",RSr);RH.exports=PH});var MH=u((RDr,FH)=>{"use strict";var C1=x().isPrimitive,j1=tr();function _Sr(r,e,t){return!C1(r)||j1(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!C1(e)||j1(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):!C1(t)||j1(t)?new TypeError("invalid argument. Third argument must be a number primitive and not `NaN`. Value: `"+t+"`."):r<=t&&t<=e?null:new RangeError("invalid arguments. The condition `a <= c <= b` must be satisfied. Value: `["+r+","+e+","+t+"]`.")}FH.exports=_Sr});var CH=u((_Dr,BH)=>{"use strict";var xH=G();function FSr(r,e,t,i){var n,a,s;return n=(i-e)/(t-e),s=r(),s<n?(a=(t-e)*(i-e),e+xH(a*s)):(a=(t-e)*(t-i),t-xH(a*(1-s)))}BH.exports=FSr});var G1=u((FDr,kH)=>{"use strict";var de=w(),Wu=P(),jH=R(),VH=S(),GH=L(),UH=A(),WH=I(),MSr=M(),Hu=H().factory,V1=b(),xSr=_(),BSr=MH(),HH=CH();function CSr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=Hu();else if(arguments.length===1){if(r=arguments[0],!VH(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(UH(r,"prng")){if(!GH(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Hu(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=BSr(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!VH(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(UH(r,"prng")){if(!GH(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Hu(r)}else e=Hu()}return n===void 0?t=m:t=y,de(t,"NAME","triangular"),r&&r.prng?(de(t,"seed",null),de(t,"seedLength",null),jH(t,"state",WH(null),MSr),de(t,"stateLength",null),de(t,"byteLength",null),de(t,"toJSON",WH(null)),de(t,"PRNG",e)):(Wu(t,"seed",o),Wu(t,"seedLength",v),jH(t,"state",c,p),Wu(t,"stateLength",f),Wu(t,"byteLength",l),de(t,"toJSON",q),de(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function l(){return e.byteLength}function c(){return e.state}function p(g){e.state=g}function q(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=xSr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function y(){return HH(e,n,a,s)}function m(g,h,E){return V1(g)||V1(h)||V1(E)||!(g<=E&&E<=h)?NaN:HH(e,g,h,E)}}kH.exports=CSr});var XH=u((MDr,DH)=>{"use strict";var jSr=G1(),VSr=jSr();DH.exports=VSr});var YH=u((xDr,zH)=>{"use strict";var GSr=w(),JH=XH(),USr=G1();GSr(JH,"factory",USr);zH.exports=JH});var KH=u((BDr,QH)=>{"use strict";var ZH=x().isPrimitive,$H=tr();function WSr(r,e){return!ZH(r)||$H(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!ZH(e)||$H(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):r>=e?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+r+","+e+"]`."):null}QH.exports=WSr});var ek=u((CDr,rk)=>{"use strict";function HSr(r,e,t){var i=r();return t*i+(1-i)*e}rk.exports=HSr});var U1=u((jDr,vk)=>{"use strict";var we=w(),ku=P(),tk=R(),ik=S(),nk=L(),ak=A(),uk=I(),kSr=M(),Du=H().factory,sk=b(),DSr=_(),XSr=KH(),ok=ek();function JSr(){var r,e,t,i,n,a;if(arguments.length===0)e=Du();else if(arguments.length===1){if(r=arguments[0],!ik(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(ak(r,"prng")){if(!nk(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Du(r)}else{if(n=arguments[0],a=arguments[1],i=XSr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!ik(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(ak(r,"prng")){if(!nk(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Du(r)}else e=Du()}return n===void 0?t=y:t=q,we(t,"NAME","uniform"),r&&r.prng?(we(t,"seed",null),we(t,"seedLength",null),tk(t,"state",uk(null),kSr),we(t,"stateLength",null),we(t,"byteLength",null),we(t,"toJSON",uk(null)),we(t,"PRNG",e)):(ku(t,"seed",s),ku(t,"seedLength",o),tk(t,"state",l,c),ku(t,"stateLength",v),ku(t,"byteLength",f),we(t,"toJSON",p),we(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=DSr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return ok(e,n,a)}function y(m,g){return sk(m)||sk(g)||m>=g?NaN:ok(e,m,g)}}vk.exports=JSr});var lk=u((VDr,fk)=>{"use strict";var zSr=U1(),YSr=zSr();fk.exports=YSr});var gk=u((GDr,pk)=>{"use strict";var ZSr=w(),ck=lk(),$Sr=U1();ZSr(ck,"factory",$Sr);pk.exports=ck});var yk=u((UDr,qk)=>{"use strict";var mk=U().isPrimitive;function QSr(r,e){return mk(r)?mk(e)?null:new TypeError("invalid argument. Shape parameter must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. Scale parameter must be a positive number. Value: `"+r+"`.")}qk.exports=QSr});var dk=u((WDr,hk)=>{"use strict";var KSr=Q(),rTr=B();function eTr(r,e,t){return t*KSr(-rTr(1-r()),1/e)}hk.exports=eTr});var W1=u((HDr,Tk)=>{"use strict";var be=w(),Xu=P(),wk=R(),bk=S(),Ek=L(),Nk=A(),Ak=I(),tTr=M(),Ju=H().factory,Ok=b(),iTr=_(),nTr=yk(),Sk=dk();function aTr(){var r,e,t,i,n,a;if(arguments.length===0)t=Ju();else if(arguments.length===1){if(e=arguments[0],!bk(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(Nk(e,"prng")){if(!Ek(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Ju(e)}else{if(a=arguments[0],r=arguments[1],n=nTr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!bk(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(Nk(e,"prng")){if(!Ek(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Ju(e)}else t=Ju()}return r===void 0?i=y:i=q,be(i,"NAME","weibull"),e&&e.prng?(be(i,"seed",null),be(i,"seedLength",null),wk(i,"state",Ak(null),tTr),be(i,"stateLength",null),be(i,"byteLength",null),be(i,"toJSON",Ak(null)),be(i,"PRNG",t)):(Xu(i,"seed",s),Xu(i,"seedLength",o),wk(i,"state",l,c),Xu(i,"stateLength",v),Xu(i,"byteLength",f),be(i,"toJSON",p),be(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function l(){return t.state}function c(m){t.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=iTr(t.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return Sk(t,a,r)}function y(m,g){return Ok(m)||Ok(g)||m<=0||g<=0?NaN:Sk(t,m,g)}}Tk.exports=aTr});var Ik=u((kDr,Lk)=>{"use strict";var uTr=W1(),sTr=uTr();Lk.exports=sTr});var _k=u((DDr,Rk)=>{"use strict";var oTr=w(),Pk=Ik(),vTr=W1();oTr(Pk,"factory",vTr);Rk.exports=Pk});var Mk=u((XDr,Fk)=>{"use strict";var F={};F.arcsine=$R().factory;F.bernoulli=o_().factory;F.beta=oF().factory;F.betaprime=kF().factory;F.binomial=AM().factory;F.boxMueller=VM().factory;F.cauchy=tx().factory;F.chi=Ax().factory;F.chisquare=Qi().factory;F.cosine=vB().factory;F.discreteUniform=IB().factory;F.erlang=XB().factory;F.exponential=uC().factory;F.f=AC().factory;F.frechet=UC().factory;F.gamma=ni().factory;F.geometric=tj().factory;F.gumbel=wj().factory;F.hypergeometric=zj().factory;F.improvedZiggurat=We().factory;F.invgamma=vV().factory;F.kumaraswamy=LV().factory;F.laplace=DV().factory;F.levy=PG().factory;F.logistic=JG().factory;F.lognormal=fU().factory;F.minstd=bU().factory;F.minstdShuffle=xU().factory;F.mt19937=H().factory;F.negativeBinomial=NW().factory;F.normal=GW().factory;F.paretoType1=nH().factory;F.poisson=O1().factory;F.rayleigh=hH().factory;F.t=_H().factory;F.triangular=YH().factory;F.uniform=gk().factory;F.weibull=_k().factory;Fk.exports=F});var Bk=u((JDr,xk)=>{"use strict";function fTr(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N;for(y=e[1],m=e[0],g=r[0],h=r[1],l=t[0],c=t[1],s=l[1],o=l[0]-y*s,v=c[1],f=c[0]-y*v,p=0,q=0,n=[],E=0;E<m;E++){for(a=[],N=0;N<y;N++)a.push(i(g[p],h[q])),p+=s,q+=v;n.push(a),p+=o,q+=f}return n}xk.exports=fTr});var jk=u((zDr,Ck)=>{"use strict";var lTr=x().isPrimitive,cTr=j(),pTr=J(),gTr=T();function mTr(r,e){return t;function t(i){var n;if(!lTr(i)){if(e.nonnumeric===void 0)throw new TypeError(gTr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===cTr?e.pinf:n===pTr?e.ninf:n}}Ck.exports=mTr});var Wk=u((YDr,Uk)=>{"use strict";var Vk=x().isPrimitive,qTr=j(),yTr=J(),Gk=T();function hTr(r,e){return t;function t(i,n){var a;if(!Vk(i)){if(e.nonnumeric===void 0)throw new TypeError(Gk("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Vk(n)){if(e.nonnumeric===void 0)throw new TypeError(Gk("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===qTr?e.pinf:a===yTr?e.ninf:a}}Uk.exports=hTr});var kk=u((ZDr,Hk)=>{"use strict";var H1=x().isPrimitive,dTr=j(),wTr=J(),k1=T();function bTr(r,e){return t;function t(i,n,a){var s;if(!H1(i)){if(e.nonnumeric===void 0)throw new TypeError(k1("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!H1(n)){if(e.nonnumeric===void 0)throw new TypeError(k1("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!H1(a)){if(e.nonnumeric===void 0)throw new TypeError(k1("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return s=r(i,n,a),s!==s?e.nan:s===dTr?e.pinf:s===wTr?e.ninf:s}}Hk.exports=bTr});var Xk=u(($Dr,Dk)=>{"use strict";var ETr=D().isPrimitive,NTr=T();function ATr(r){return e;function e(t){if(!ETr(t))throw new TypeError(NTr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}Dk.exports=ATr});var Zk=u((QDr,Yk)=>{"use strict";var Jk=D().isPrimitive,zk=T();function OTr(r){return e;function e(t,i){if(!Jk(t))throw new TypeError(zk("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Jk(i))throw new TypeError(zk("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}Yk.exports=OTr});var Qk=u((KDr,$k)=>{"use strict";var D1=D().isPrimitive,X1=T();function STr(r){return e;function e(t,i){if(!D1(t))throw new TypeError(X1("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!D1(i))throw new TypeError(X1("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!D1(v3))throw new TypeError(X1("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(v3)));return r(t,i,v3)}}$k.exports=STr});var rD=u((rXr,Kk)=>{"use strict";function TTr(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N,C,O,k,nr,W;for(E=e[1],N=e[0],C=r[0],O=r[1],k=r[2],p=t[0],q=t[1],y=t[2],s=p[1],o=p[0]-E*s,v=q[1],f=q[0]-E*v,l=y[1],c=y[0]-E*l,m=0,g=0,h=0,n=[],nr=0;nr<N;nr++){for(a=[],W=0;W<E;W++)a.push(i(C[m],O[g],k[h])),m+=s,g+=v,h+=l;n.push(a),m+=o,g+=f,h+=c}return n}Kk.exports=TTr});var tD=u((eXr,eD)=>{"use strict";function LTr(r,e){var t,i,n,a,s;for(t=r.length,i=r[0].length,a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)n[s]=e(n[s]);return r}eD.exports=LTr});var nD=u((tXr,iD)=>{"use strict";var ITr=tD();function PTr(r,e){return ITr(r,e)}iD.exports=PTr});var uD=u((iXr,aD)=>{"use strict";var Wr={};Wr.binary2d=Bk();Wr.d_d=jk();Wr.dd_d=Wk();Wr.ddd_d=kk();Wr.s_o=Xk();Wr.ss_o=Zk();Wr.sss_o=Qk();Wr.ternary2d=rD();Wr.unary2d=nD();aD.exports=Wr});var oD=u((nXr,sD)=>{"use strict";var At=sp(),Nr,V={};V.ANSCOMBES_QUARTET=z5();V.bartlettTest=dw();V.broadcast=Sw();V.cumax=xw().ndarray;V.filled=jw();V.filledBy=Dw();V.flattenArray=ea();V.isArray=fr();V.isBoolean=ar().isPrimitive;V.isNumber=x().isPrimitive;V.isPositiveNumber=U().isPrimitive;V.isString=D().isPrimitive;V.iterator2array=yb();V.iterSawtoothWave=uE();V.linspace=nO();V.max=pO().ndarray;V.mskmax=EO().ndarray;V.assert={};Nr=RS();At(Nr,V.assert);V.blas={};Nr=VS();At(Nr,V.blas);Nr=OL();At(Nr,V);V.dists={};Nr=ZL();At(Nr,V.dists);Nr=cP();At(Nr,V);V.random={};Nr=Mk();At(Nr,V.random);V.tools={};Nr=uD();At(Nr,V.tools);sD.exports=V});var _Tr=u((aXr,vD)=>{var RTr=oD();vD.exports=RTr});return _Tr();})();
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
* @param {number} lambda - degrees of freedom
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
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
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
	return ns.filledBy( nrows, ncols, rand );
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
	ns.assert.verifyCommonPRNGArgs( nrows, ncols, s );
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
