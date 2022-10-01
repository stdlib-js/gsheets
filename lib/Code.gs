/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var nn=u((XTr,J1)=>{"use strict";function qD(r){return Object.keys(Object(r))}J1.exports=qD});var Y1=u((JTr,z1)=>{"use strict";var yD=nn();function hD(){return(yD(arguments)||"").length!==2}function dD(){return hD(1,2)}z1.exports=dD});var $1=u((zTr,Z1)=>{"use strict";var wD=typeof Object.keys<"u";Z1.exports=wD});var K1=u((YTr,Q1)=>{"use strict";function bD(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}Q1.exports=bD});var ef=u((ZTr,rf)=>{"use strict";var ED=K1();rf.exports=ED});var nf=u(($Tr,tf)=>{"use strict";var ND=ef(),AD=ND();function OD(){return AD&&typeof Symbol.toStringTag=="symbol"}tf.exports=OD});var Ot=u((QTr,af)=>{"use strict";var SD=nf();af.exports=SD});var Yu=u((KTr,uf)=>{"use strict";var TD=Object.prototype.toString;uf.exports=TD});var of=u((rLr,sf)=>{"use strict";var LD=Yu();function ID(r){return LD.call(r)}sf.exports=ID});var ff=u((eLr,vf)=>{"use strict";var PD=Object.prototype.hasOwnProperty;function RD(r,e){return r==null?!1:PD.call(r,e)}vf.exports=RD});var A=u((tLr,lf)=>{"use strict";var _D=ff();lf.exports=_D});var pf=u((iLr,cf)=>{"use strict";var FD=typeof Symbol=="function"?Symbol.toStringTag:"";cf.exports=FD});var mf=u((nLr,gf)=>{"use strict";var MD=A(),bi=pf(),Zu=Yu();function xD(r){var e,t,i;if(r==null)return Zu.call(r);t=r[bi],e=MD(r,bi);try{r[bi]=void 0}catch{return Zu.call(r)}return i=Zu.call(r),e?r[bi]=t:delete r[bi],i}gf.exports=xD});var Z=u((aLr,qf)=>{"use strict";var BD=Ot(),CD=of(),jD=mf(),$u;BD()?$u=jD:$u=CD;qf.exports=$u});var Qu=u((uLr,yf)=>{"use strict";var VD=Z();function GD(r){return VD(r)==="[object Arguments]"}yf.exports=GD});var wf=u((sLr,df)=>{"use strict";var UD=Qu(),hf;function WD(){return UD(arguments)}hf=WD();df.exports=hf});var Ef=u((oLr,bf)=>{"use strict";var HD=typeof Object.defineProperty=="function"?Object.defineProperty:null;bf.exports=HD});var Af=u((vLr,Nf)=>{"use strict";var kD=Ef();function DD(){try{return kD({},"x",{}),!0}catch{return!1}}Nf.exports=DD});var Sf=u((fLr,Of)=>{"use strict";var XD=Object.defineProperty;Of.exports=XD});var Rf=u((lLr,Pf)=>{"use strict";var St=Object.prototype,Tf=St.toString,Lf=St.__defineGetter__,If=St.__defineSetter__,JD=St.__lookupGetter__,zD=St.__lookupSetter__;function YD(r,e,t){var i,n,a,s;if(typeof r!="object"||r===null||Tf.call(r)==="[object Array]")throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if(typeof t!="object"||t===null||Tf.call(t)==="[object Array]")throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if(n="value"in t,n&&(JD.call(r,e)||zD.call(r,e)?(i=r.__proto__,r.__proto__=St,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,s="set"in t,n&&(a||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Lf&&Lf.call(r,e,t.get),s&&If&&If.call(r,e,t.set),r}Pf.exports=YD});var Ee=u((cLr,_f)=>{"use strict";var ZD=Af(),$D=Sf(),QD=Rf(),Ku;ZD()?Ku=$D:Ku=QD;_f.exports=Ku});var Mf=u((pLr,Ff)=>{"use strict";var KD=Ee();function rX(r,e,t){KD(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}Ff.exports=rX});var w=u((gLr,xf)=>{"use strict";var eX=Mf();xf.exports=eX});var r0=u((mLr,Bf)=>{"use strict";function tX(r){return typeof r=="string"}Bf.exports=tX});var jf=u((qLr,Cf)=>{"use strict";var iX=String.prototype.valueOf;Cf.exports=iX});var Gf=u((yLr,Vf)=>{"use strict";var nX=jf();function aX(r){try{return nX.call(r),!0}catch{return!1}}Vf.exports=aX});var e0=u((hLr,Uf)=>{"use strict";var uX=Ot(),sX=Z(),oX=Gf(),vX=uX();function fX(r){return typeof r=="object"?r instanceof String?!0:vX?oX(r):sX(r)==="[object String]":!1}Uf.exports=fX});var Hf=u((dLr,Wf)=>{"use strict";var lX=r0(),cX=e0();function pX(r){return lX(r)||cX(r)}Wf.exports=pX});var D=u((wLr,Df)=>{"use strict";var kf=w(),t0=Hf(),gX=r0(),mX=e0();kf(t0,"isPrimitive",gX);kf(t0,"isObject",mX);Df.exports=t0});var i0=u((bLr,Xf)=>{"use strict";function qX(r){return typeof r=="number"}Xf.exports=qX});var zf=u((ELr,Jf)=>{"use strict";Jf.exports=Number});var an=u((NLr,Yf)=>{"use strict";var yX=zf();Yf.exports=yX});var $f=u((ALr,Zf)=>{"use strict";var hX=an(),dX=hX.prototype.toString;Zf.exports=dX});var Kf=u((OLr,Qf)=>{"use strict";var wX=$f();function bX(r){try{return wX.call(r),!0}catch{return!1}}Qf.exports=bX});var n0=u((SLr,rl)=>{"use strict";var EX=Ot(),NX=Z(),AX=an(),OX=Kf(),SX=EX();function TX(r){return typeof r=="object"?r instanceof AX?!0:SX?OX(r):NX(r)==="[object Number]":!1}rl.exports=TX});var tl=u((TLr,el)=>{"use strict";var LX=i0(),IX=n0();function PX(r){return LX(r)||IX(r)}el.exports=PX});var x=u((LLr,nl)=>{"use strict";var il=w(),a0=tl(),RX=i0(),_X=n0();il(a0,"isPrimitive",RX);il(a0,"isObject",_X);nl.exports=a0});var ul=u((ILr,al)=>{"use strict";function FX(r){return r!==r}al.exports=FX});var b=u((PLr,sl)=>{"use strict";var MX=ul();sl.exports=MX});var u0=u((RLr,ol)=>{"use strict";var xX=x().isPrimitive,BX=b();function CX(r){return xX(r)&&BX(r)}ol.exports=CX});var s0=u((_Lr,vl)=>{"use strict";var jX=x().isObject,VX=b();function GX(r){return jX(r)&&VX(r.valueOf())}vl.exports=GX});var ll=u((FLr,fl)=>{"use strict";var UX=u0(),WX=s0();function HX(r){return UX(r)||WX(r)}fl.exports=HX});var tr=u((MLr,pl)=>{"use strict";var cl=w(),o0=ll(),kX=u0(),DX=s0();cl(o0,"isPrimitive",kX);cl(o0,"isObject",DX);pl.exports=o0});var j=u((xLr,gl)=>{"use strict";var XX=Number.POSITIVE_INFINITY;gl.exports=XX});var J=u((BLr,ml)=>{"use strict";var JX=an(),zX=JX.NEGATIVE_INFINITY;ml.exports=zX});var yl=u((CLr,ql)=>{"use strict";var YX=Math.floor;ql.exports=YX});var K=u((jLr,hl)=>{"use strict";var ZX=yl();hl.exports=ZX});var wl=u((VLr,dl)=>{"use strict";var $X=K();function QX(r){return $X(r)===r}dl.exports=QX});var Ar=u((GLr,bl)=>{"use strict";var KX=wl();bl.exports=KX});var v0=u((ULr,El)=>{"use strict";var rJ=j(),eJ=J(),tJ=Ar();function iJ(r){return r<rJ&&r>eJ&&tJ(r)}El.exports=iJ});var f0=u((WLr,Nl)=>{"use strict";var nJ=x().isPrimitive,aJ=v0();function uJ(r){return nJ(r)&&aJ(r)}Nl.exports=uJ});var l0=u((HLr,Al)=>{"use strict";var sJ=x().isObject,oJ=v0();function vJ(r){return sJ(r)&&oJ(r.valueOf())}Al.exports=vJ});var Sl=u((kLr,Ol)=>{"use strict";var fJ=f0(),lJ=l0();function cJ(r){return fJ(r)||lJ(r)}Ol.exports=cJ});var Rr=u((DLr,Ll)=>{"use strict";var Tl=w(),c0=Sl(),pJ=f0(),gJ=l0();Tl(c0,"isPrimitive",pJ);Tl(c0,"isObject",gJ);Ll.exports=c0});var p0=u((XLr,Il)=>{"use strict";var mJ=Object.prototype.propertyIsEnumerable;Il.exports=mJ});var _l=u((JLr,Rl)=>{"use strict";var qJ=p0(),Pl;function yJ(){return!qJ.call("beep","0")}Pl=yJ();Rl.exports=Pl});var Ml=u((zLr,Fl)=>{"use strict";var hJ=D(),dJ=tr().isPrimitive,wJ=Rr().isPrimitive,bJ=p0(),EJ=_l();function NJ(r,e){var t;return r==null?!1:(t=bJ.call(r,e),!t&&EJ&&hJ(r)?(e=+e,!dJ(e)&&wJ(e)&&e>=0&&e<r.length):t)}Fl.exports=NJ});var un=u((YLr,xl)=>{"use strict";var AJ=Ml();xl.exports=AJ});var Cl=u((ZLr,Bl)=>{"use strict";var OJ=Z(),g0;function SJ(r){return OJ(r)==="[object Array]"}Array.isArray?g0=Array.isArray:g0=SJ;Bl.exports=g0});var fr=u(($Lr,jl)=>{"use strict";var TJ=Cl();jl.exports=TJ});var Tt=u((QLr,Vl)=>{"use strict";var LJ=4294967295;Vl.exports=LJ});var Ul=u((KLr,Gl)=>{"use strict";var IJ=A(),PJ=un(),RJ=fr(),_J=Ar(),FJ=Tt();function MJ(r){return r!==null&&typeof r=="object"&&!RJ(r)&&typeof r.length=="number"&&_J(r.length)&&r.length>=0&&r.length<=FJ&&IJ(r,"callee")&&!PJ(r,"callee")}Gl.exports=MJ});var q0=u((rIr,Wl)=>{"use strict";var xJ=wf(),BJ=Qu(),CJ=Ul(),m0;xJ?m0=BJ:m0=CJ;Wl.exports=m0});var Dl=u((eIr,kl)=>{"use strict";var jJ=q0(),Hl=nn(),VJ=Array.prototype.slice;function GJ(r){return jJ(r)?Hl(VJ.call(r)):Hl(r)}kl.exports=GJ});var Jl=u((tIr,Xl)=>{"use strict";var UJ=fr();function WJ(r){if(typeof r!="function")throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return e;function e(t){var i,n;if(!UJ(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}Xl.exports=WJ});var Yl=u((iIr,zl)=>{"use strict";var HJ=Jl();zl.exports=HJ});var $l=u((nIr,Zl)=>{"use strict";function kJ(r){return r!==null&&typeof r=="object"}Zl.exports=kJ});var h0=u((aIr,Ql)=>{"use strict";var DJ=w(),XJ=Yl(),y0=$l(),JJ=XJ(y0);DJ(y0,"isObjectLikeArray",JJ);Ql.exports=y0});var r2=u((uIr,Kl)=>{"use strict";function zJ(){}Kl.exports=zJ});var M=u((sIr,e2)=>{"use strict";var YJ=r2();e2.exports=YJ});var i2=u((oIr,t2)=>{"use strict";var ZJ=un(),$J=M(),QJ=ZJ($J,"prototype");t2.exports=QJ});var a2=u((vIr,n2)=>{"use strict";var KJ=un(),rz={toString:null},ez=!KJ(rz,"toString");n2.exports=ez});var s2=u((fIr,u2)=>{"use strict";var tz=9007199254740991;u2.exports=tz});var v2=u((lIr,o2)=>{"use strict";var iz=Ar(),nz=s2();function az(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&iz(r.length)&&r.length>=0&&r.length<=nz}o2.exports=az});var _r=u((cIr,f2)=>{"use strict";var uz=v2();f2.exports=uz});var p2=u((pIr,c2)=>{"use strict";var l2=tr(),sz=_r(),oz=D().isPrimitive,vz=Rr().isPrimitive;function fz(r,e,t){var i,n;if(!sz(r)&&!oz(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(i=r.length,i===0)return-1;if(arguments.length===3){if(!vz(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(l2(e)){for(;n<i;n++)if(l2(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}c2.exports=fz});var sn=u((gIr,g2)=>{"use strict";var lz=p2();g2.exports=lz});var q2=u((mIr,m2)=>{"use strict";var cz=/./;m2.exports=cz});var d0=u((qIr,y2)=>{"use strict";function pz(r){return typeof r=="boolean"}y2.exports=pz});var d2=u((yIr,h2)=>{"use strict";var gz=Boolean.prototype.toString;h2.exports=gz});var b2=u((hIr,w2)=>{"use strict";var mz=d2();function qz(r){try{return mz.call(r),!0}catch{return!1}}w2.exports=qz});var w0=u((dIr,E2)=>{"use strict";var yz=Ot(),hz=Z(),dz=b2(),wz=yz();function bz(r){return typeof r=="object"?r instanceof Boolean?!0:wz?dz(r):hz(r)==="[object Boolean]":!1}E2.exports=bz});var A2=u((wIr,N2)=>{"use strict";var Ez=d0(),Nz=w0();function Az(r){return Ez(r)||Nz(r)}N2.exports=Az});var ar=u((bIr,S2)=>{"use strict";var O2=w(),b0=A2(),Oz=d0(),Sz=w0();O2(b0,"isPrimitive",Oz);O2(b0,"isObject",Sz);S2.exports=b0});var L2=u((EIr,T2)=>{"use strict";function Tz(){return new Function("return this;")()}T2.exports=Tz});var P2=u((NIr,I2)=>{"use strict";var Lz=typeof self=="object"?self:null;I2.exports=Lz});var _2=u((AIr,R2)=>{"use strict";var Iz=typeof window=="object"?window:null;R2.exports=Iz});var M2=u((OIr,F2)=>{"use strict";var Pz=typeof global=="object"?global:null;F2.exports=Pz});var V2=u((SIr,j2)=>{"use strict";var Rz=ar().isPrimitive,_z=L2(),x2=P2(),B2=_2(),C2=M2();function Fz(r){if(arguments.length){if(!Rz(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return _z()}if(x2)return x2;if(B2)return B2;if(C2)return C2;throw new Error("unexpected error. Unable to resolve global object.")}j2.exports=Fz});var U2=u((TIr,G2)=>{"use strict";var Mz=V2();G2.exports=Mz});var k2=u((LIr,H2)=>{"use strict";var xz=U2(),W2=xz(),Bz=W2.document&&W2.document.childNodes;H2.exports=Bz});var X2=u((IIr,D2)=>{"use strict";var Cz=Int8Array;D2.exports=Cz});var z2=u((PIr,J2)=>{"use strict";var jz=q2(),Vz=k2(),Gz=X2();function Uz(){return typeof jz=="function"||typeof Gz=="object"||typeof Vz=="function"}J2.exports=Uz});var E0=u((RIr,Y2)=>{"use strict";function Wz(){return/^\s*function\s*([^(]*)/i}Y2.exports=Wz});var $2=u((_Ir,Z2)=>{"use strict";var Hz=E0(),kz=Hz();Z2.exports=kz});var N0=u((FIr,K2)=>{"use strict";var Dz=w(),Q2=E0(),Xz=$2();Dz(Q2,"REGEXP",Xz);K2.exports=Q2});var ec=u((MIr,rc)=>{"use strict";var Jz=h0();function zz(r){return Jz(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}rc.exports=zz});var nt=u((xIr,tc)=>{"use strict";var Yz=ec();tc.exports=Yz});var nc=u((BIr,ic)=>{"use strict";var Zz=Z(),$z=N0().REGEXP,Qz=nt();function Kz(r){var e,t,i;if(t=Zz(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=$z.exec(i.toString()),e)return e[1]}return Qz(r)?"Buffer":t}ic.exports=Kz});var Ne=u((CIr,ac)=>{"use strict";var rY=nc();ac.exports=rY});var sc=u((jIr,uc)=>{"use strict";var eY=Ne();function tY(r){var e;return r===null?"null":(e=typeof r,e==="object"?eY(r).toLowerCase():e)}uc.exports=tY});var vc=u((VIr,oc)=>{"use strict";var iY=Ne();function nY(r){return iY(r).toLowerCase()}oc.exports=nY});var on=u((GIr,fc)=>{"use strict";var aY=z2(),uY=sc(),sY=vc(),oY=aY()?sY:uY;fc.exports=oY});var A0=u((UIr,lc)=>{"use strict";function vY(r){return r.constructor&&r.constructor.prototype===r}lc.exports=vY});var cc=u((WIr,fY)=>{fY.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var gc=u((HIr,pc)=>{"use strict";var lY=typeof window>"u"?void 0:window;pc.exports=lY});var hc=u((kIr,yc)=>{"use strict";var cY=A(),pY=sn(),mc=on(),gY=A0(),mY=cc(),Lt=gc(),qc;function qY(){var r;if(mc(Lt)==="undefined")return!1;for(r in Lt)try{pY(mY,r)===-1&&cY(Lt,r)&&Lt[r]!==null&&mc(Lt[r])==="object"&&gY(Lt[r])}catch{return!0}return!1}qc=qY();yc.exports=qc});var wc=u((DIr,dc)=>{"use strict";var yY=typeof window<"u";dc.exports=yY});var Nc=u((XIr,Ec)=>{"use strict";var hY=hc(),bc=A0(),dY=wc();function wY(r){if(dY===!1&&!hY)return bc(r);try{return bc(r)}catch{return!1}}Ec.exports=wY});var Ac=u((JIr,bY)=>{bY.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Tc=u((zIr,Sc)=>{"use strict";var EY=h0(),O0=A(),NY=q0(),AY=i2(),OY=a2(),SY=Nc(),Oc=Ac();function TY(r){var e,t,i,n,a,s,o;if(n=[],NY(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!O0(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!EY(r))return n;t=AY&&i}for(a in r)!(t&&a==="prototype")&&O0(r,a)&&n.push(String(a));if(OY)for(e=SY(r),o=0;o<Oc.length;o++)s=Oc[o],!(e&&s==="constructor")&&O0(r,s)&&n.push(String(s));return n}Sc.exports=TY});var Ic=u((YIr,Lc)=>{"use strict";var LY=Y1(),IY=$1(),PY=nn(),RY=Dl(),_Y=Tc(),vn;IY?LY()?vn=RY:vn=PY:vn=_Y;Lc.exports=vn});var Ei=u((ZIr,Pc)=>{"use strict";var FY=Ic();Pc.exports=FY});var S0=u(($Ir,Rc)=>{"use strict";function MY(r){return typeof r=="number"}Rc.exports=MY});var T0=u((QIr,Fc)=>{"use strict";function xY(r){return r[0]==="-"}function _c(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function BY(r,e,t){var i=!1,n=e-r.length;return n<0||(xY(r)&&(i=!0,r=r.substr(1)),r=t?r+_c(n):_c(n)+r,i&&(r="-"+r)),r}Fc.exports=BY});var Cc=u((KIr,Bc)=>{"use strict";var CY=S0(),Mc=T0(),jY=String.prototype.toLowerCase,xc=String.prototype.toUpperCase;function VY(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!CY(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Mc(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=Mc(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===xc.call(r.specifier)?xc.call(t):jY.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Bc.exports=VY});var Vc=u((rPr,jc)=>{"use strict";function GY(r){return typeof r=="string"}jc.exports=GY});var Wc=u((ePr,Uc)=>{"use strict";var UY=S0(),WY=Math.abs,HY=String.prototype.toLowerCase,Gc=String.prototype.toUpperCase,at=String.prototype.replace,kY=/e\+(\d)$/,DY=/e-(\d)$/,XY=/^(\d+)$/,JY=/^(\d+)e/,zY=/\.0$/,YY=/\.0*e/,ZY=/(\..*[^0])0*e/;function $Y(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!UY(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":WY(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=at.call(t,ZY,"$1e"),t=at.call(t,YY,"e"),t=at.call(t,zY,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=at.call(t,kY,"e+0$1"),t=at.call(t,DY,"e-0$1"),r.alternate&&(t=at.call(t,XY,"$1."),t=at.call(t,JY,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Gc.call(r.specifier)?Gc.call(t):HY.call(t),t}Uc.exports=$Y});var Dc=u((tPr,kc)=>{"use strict";function Hc(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function QY(r,e,t){var i=e-r.length;return i<0||(r=t?r+Hc(i):Hc(i)+r),r}kc.exports=QY});var Jc=u((iPr,Xc)=>{"use strict";var KY=Cc(),rZ=Vc(),eZ=Wc(),tZ=Dc(),iZ=T0(),nZ=String.fromCharCode,fn=isNaN,aZ=Array.isArray;function uZ(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function sZ(r){var e,t,i,n,a,s,o,v,f;if(!aZ(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",o=1,v=0;v<r.length;v++)if(i=r[v],rZ(i))s+=i;else{if(e=i.precision!==void 0,i=uZ(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,fn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,fn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=KY(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!fn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=fn(a)?String(i.arg):nZ(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=eZ(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=iZ(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=tZ(i.arg,i.width,i.padRight)),s+=i.arg||"",o+=1}return s}Xc.exports=sZ});var Yc=u((nPr,zc)=>{"use strict";var oZ=Jc();zc.exports=oZ});var $c=u((aPr,Zc)=>{"use strict";var ln=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function vZ(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function fZ(r){var e,t,i,n;for(t=[],n=0,i=ln.exec(r);i;)e=r.slice(n,ln.lastIndex-i[0].length),e.length&&t.push(e),t.push(vZ(i)),n=ln.lastIndex,i=ln.exec(r);return e=r.slice(n),e.length&&t.push(e),t}Zc.exports=fZ});var Kc=u((uPr,Qc)=>{"use strict";var lZ=$c();Qc.exports=lZ});var ep=u((sPr,rp)=>{"use strict";function cZ(r){return typeof r=="string"}rp.exports=cZ});var np=u((oPr,ip)=>{"use strict";var pZ=Yc(),gZ=Kc(),mZ=ep();function tp(r){var e,t,i;if(!mZ(r))throw new TypeError(tp("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=gZ(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return pZ.apply(null,t)}ip.exports=tp});var S=u((vPr,ap)=>{"use strict";var qZ=np();ap.exports=qZ});var sp=u((fPr,up)=>{"use strict";var yZ=Ei(),hZ=A(),dZ=S();function wZ(r,e){var t,i,n;for(t=yZ(r),n=0;n<t.length;n++){if(i=t[n],hZ(e,i))throw new Error(dZ("unexpected error. Property already exists on destination object. Property: %s.",i));e[i]=r[i]}return e}up.exports=wZ});var L0=u((lPr,op)=>{"use strict";var bZ=Rr().isPrimitive;function EZ(r){return bZ(r)&&r>=0}op.exports=EZ});var I0=u((cPr,vp)=>{"use strict";var NZ=Rr().isObject;function AZ(r){return NZ(r)&&r.valueOf()>=0}vp.exports=AZ});var lp=u((pPr,fp)=>{"use strict";var OZ=L0(),SZ=I0();function TZ(r){return OZ(r)||SZ(r)}fp.exports=TZ});var Ae=u((gPr,pp)=>{"use strict";var cp=w(),P0=lp(),LZ=L0(),IZ=I0();cp(P0,"isPrimitive",LZ);cp(P0,"isObject",IZ);pp.exports=P0});var mp=u((mPr,gp)=>{"use strict";var PZ=on();function RZ(r){return PZ(r)==="function"}gp.exports=RZ});var L=u((qPr,qp)=>{"use strict";var _Z=mp();qp.exports=_Z});var hp=u((yPr,yp)=>{"use strict";var FZ=Object.getPrototypeOf;yp.exports=FZ});var wp=u((hPr,dp)=>{"use strict";function MZ(r){return r.__proto__}dp.exports=MZ});var Ep=u((dPr,bp)=>{"use strict";var xZ=Z(),BZ=wp();function CZ(r){var e=BZ(r);return e||e===null?e:xZ(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}bp.exports=CZ});var Ap=u((wPr,Np)=>{"use strict";var jZ=L(),VZ=hp(),GZ=Ep(),R0;jZ(Object.getPrototypeOf)?R0=VZ:R0=GZ;Np.exports=R0});var Sp=u((bPr,Op)=>{"use strict";var UZ=Ap();function WZ(r){return r==null?null:(r=Object(r),UZ(r))}Op.exports=WZ});var ut=u((EPr,Tp)=>{"use strict";var HZ=Sp();Tp.exports=HZ});var Ip=u((NPr,Lp)=>{"use strict";var kZ=ut(),DZ=Z();function XZ(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(DZ(r)==="[object Error]")return!0;r=kZ(r)}return!1}Lp.exports=XZ});var Rp=u((APr,Pp)=>{"use strict";var JZ=Ip();Pp.exports=JZ});var _0=u((OPr,_p)=>{"use strict";function zZ(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}_p.exports=zZ});var Mp=u((SPr,Fp)=>{"use strict";var YZ=_0(),ZZ=YZ();Fp.exports=ZZ});var Cp=u((TPr,Bp)=>{"use strict";var $Z=w(),xp=_0(),QZ=Mp();$Z(xp,"REGEXP",QZ);Bp.exports=xp});var Vp=u((LPr,jp)=>{"use strict";var KZ=D().isPrimitive,r$=Cp(),e$=S();function t$(r){if(!KZ(r))throw new TypeError(e$("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=r$().exec(r),r?new RegExp(r[1],r[2]):null}jp.exports=t$});var Up=u((IPr,Gp)=>{"use strict";var i$=Vp();Gp.exports=i$});var Hp=u((PPr,Wp)=>{"use strict";var n$=typeof Object.getOwnPropertyNames<"u";Wp.exports=n$});var Dp=u((RPr,kp)=>{"use strict";var a$=Object.getOwnPropertyNames;function u$(r){return a$(Object(r))}kp.exports=u$});var Jp=u((_Pr,Xp)=>{"use strict";var s$=Ei();function o$(r){return s$(Object(r))}Xp.exports=o$});var Yp=u((FPr,zp)=>{"use strict";var v$=Hp(),f$=Dp(),l$=Jp(),F0;v$?F0=f$:F0=l$;zp.exports=F0});var $p=u((MPr,Zp)=>{"use strict";var c$=typeof Object.getOwnPropertyDescriptor<"u";Zp.exports=c$});var Kp=u((xPr,Qp)=>{"use strict";var p$=Object.getOwnPropertyDescriptor;function g$(r,e){var t;return r==null?null:(t=p$(r,e),t===void 0?null:t)}Qp.exports=g$});var e3=u((BPr,r3)=>{"use strict";var m$=A();function q$(r,e){return m$(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}r3.exports=q$});var i3=u((CPr,t3)=>{"use strict";var y$=$p(),h$=Kp(),d$=e3(),M0;y$?M0=h$:M0=d$;t3.exports=M0});var a3=u((jPr,n3)=>{"use strict";var w$=typeof Buffer=="function"?Buffer:null;n3.exports=w$});var s3=u((VPr,u3)=>{"use strict";var b$=nt(),cn=a3();function E$(){var r,e;if(typeof cn!="function")return!1;try{typeof cn.from=="function"?e=cn.from([1,2,3,4]):e=new cn([1,2,3,4]),r=b$(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}u3.exports=E$});var f3=u((GPr,o3)=>{"use strict";var N$=s3();o3.exports=N$});var p3=u(pn=>{"use strict";pn.byteLength=O$;pn.toByteArray=T$;pn.fromByteArray=P$;var jr=[],Tr=[],A$=typeof Uint8Array<"u"?Uint8Array:Array,x0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(st=0,l3=x0.length;st<l3;++st)jr[st]=x0[st],Tr[x0.charCodeAt(st)]=st;var st,l3;Tr["-".charCodeAt(0)]=62;Tr["_".charCodeAt(0)]=63;function c3(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function O$(r){var e=c3(r),t=e[0],i=e[1];return(t+i)*3/4-i}function S$(r,e,t){return(e+t)*3/4-t}function T$(r){var e,t=c3(r),i=t[0],n=t[1],a=new A$(S$(r,i,n)),s=0,o=n>0?i-4:i,v;for(v=0;v<o;v+=4)e=Tr[r.charCodeAt(v)]<<18|Tr[r.charCodeAt(v+1)]<<12|Tr[r.charCodeAt(v+2)]<<6|Tr[r.charCodeAt(v+3)],a[s++]=e>>16&255,a[s++]=e>>8&255,a[s++]=e&255;return n===2&&(e=Tr[r.charCodeAt(v)]<<2|Tr[r.charCodeAt(v+1)]>>4,a[s++]=e&255),n===1&&(e=Tr[r.charCodeAt(v)]<<10|Tr[r.charCodeAt(v+1)]<<4|Tr[r.charCodeAt(v+2)]>>2,a[s++]=e>>8&255,a[s++]=e&255),a}function L$(r){return jr[r>>18&63]+jr[r>>12&63]+jr[r>>6&63]+jr[r&63]}function I$(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(L$(i));return n.join("")}function P$(r){for(var e,t=r.length,i=t%3,n=[],a=16383,s=0,o=t-i;s<o;s+=a)n.push(I$(r,s,s+a>o?o:s+a));return i===1?(e=r[t-1],n.push(jr[e>>2]+jr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(jr[e>>10]+jr[e>>4&63]+jr[e<<2&63]+"=")),n.join("")}});var g3=u(B0=>{B0.read=function(r,e,t,i,n){var a,s,o=n*8-i-1,v=(1<<o)-1,f=v>>1,l=-7,c=t?n-1:0,p=t?-1:1,q=r[e+c];for(c+=p,a=q&(1<<-l)-1,q>>=-l,l+=o;l>0;a=a*256+r[e+c],c+=p,l-=8);for(s=a&(1<<-l)-1,a>>=-l,l+=i;l>0;s=s*256+r[e+c],c+=p,l-=8);if(a===0)a=1-f;else{if(a===v)return s?NaN:(q?-1:1)*(1/0);s=s+Math.pow(2,i),a=a-f}return(q?-1:1)*s*Math.pow(2,a-i)};B0.write=function(r,e,t,i,n,a){var s,o,v,f=a*8-n-1,l=(1<<f)-1,c=l>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,q=i?0:a-1,y=i?1:-1,m=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-s))<1&&(s--,v*=2),s+c>=1?e+=p/v:e+=p*Math.pow(2,1-c),e*v>=2&&(s++,v/=2),s+c>=l?(o=0,s=l):s+c>=1?(o=(e*v-1)*Math.pow(2,n),s=s+c):(o=e*Math.pow(2,c-1)*Math.pow(2,n),s=0));n>=8;r[t+q]=o&255,q+=y,o/=256,n-=8);for(s=s<<n|o,f+=n;f>0;r[t+q]=s&255,q+=y,s/=256,f-=8);r[t+q-y]|=m*128}});var T3=u(Pt=>{"use strict";var C0=p3(),It=g3(),m3=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Pt.Buffer=d;Pt.SlowBuffer=B$;Pt.INSPECT_MAX_BYTES=50;var gn=2147483647;Pt.kMaxLength=gn;d.TYPED_ARRAY_SUPPORT=R$();!d.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function R$(){try{var r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function Hr(r){if(r>gn)throw new RangeError('The value "'+r+'" is invalid for option "size"');var e=new Uint8Array(r);return Object.setPrototypeOf(e,d.prototype),e}function d(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return U0(r)}return h3(r,e,t)}d.poolSize=8192;function h3(r,e,t){if(typeof r=="string")return F$(r,e);if(ArrayBuffer.isView(r))return M$(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Vr(r,ArrayBuffer)||r&&Vr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Vr(r,SharedArrayBuffer)||r&&Vr(r.buffer,SharedArrayBuffer)))return V0(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return d.from(i,e,t);var n=x$(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return d.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}d.from=function(r,e,t){return h3(r,e,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function d3(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function _$(r,e,t){return d3(r),r<=0?Hr(r):e!==void 0?typeof t=="string"?Hr(r).fill(e,t):Hr(r).fill(e):Hr(r)}d.alloc=function(r,e,t){return _$(r,e,t)};function U0(r){return d3(r),Hr(r<0?0:W0(r)|0)}d.allocUnsafe=function(r){return U0(r)};d.allocUnsafeSlow=function(r){return U0(r)};function F$(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!d.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var t=w3(r,e)|0,i=Hr(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function j0(r){for(var e=r.length<0?0:W0(r.length)|0,t=Hr(e),i=0;i<e;i+=1)t[i]=r[i]&255;return t}function M$(r){if(Vr(r,Uint8Array)){var e=new Uint8Array(r);return V0(e.buffer,e.byteOffset,e.byteLength)}return j0(r)}function V0(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');var i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,d.prototype),i}function x$(r){if(d.isBuffer(r)){var e=W0(r.length)|0,t=Hr(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||H0(r.length)?Hr(0):j0(r);if(r.type==="Buffer"&&Array.isArray(r.data))return j0(r.data)}function W0(r){if(r>=gn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+gn.toString(16)+" bytes");return r|0}function B$(r){return+r!=r&&(r=0),d.alloc(+r)}d.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==d.prototype};d.compare=function(e,t){if(Vr(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),Vr(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var i=e.length,n=t.length,a=0,s=Math.min(i,n);a<s;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};d.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return d.alloc(0);var i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;var n=d.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){var s=e[i];if(Vr(s,Uint8Array))a+s.length>n.length?d.from(s).copy(n,a):Uint8Array.prototype.set.call(n,s,a);else if(d.isBuffer(s))s.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return n};function w3(r,e){if(d.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Vr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);var t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return G0(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return S3(r).length;default:if(n)return i?-1:G0(r).length;e=(""+e).toLowerCase(),n=!0}}d.byteLength=w3;function C$(r,e,t){var i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return J$(this,e,t);case"utf8":case"utf-8":return E3(this,e,t);case"ascii":return D$(this,e,t);case"latin1":case"binary":return X$(this,e,t);case"base64":return H$(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return z$(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}d.prototype._isBuffer=!0;function ot(r,e,t){var i=r[e];r[e]=r[t],r[t]=i}d.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)ot(this,t,t+1);return this};d.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)ot(this,t,t+3),ot(this,t+1,t+2);return this};d.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)ot(this,t,t+7),ot(this,t+1,t+6),ot(this,t+2,t+5),ot(this,t+3,t+4);return this};d.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?E3(this,0,e):C$.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(e){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:d.compare(this,e)===0};d.prototype.inspect=function(){var e="",t=Pt.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};m3&&(d.prototype[m3]=d.prototype.inspect);d.prototype.compare=function(e,t,i,n,a){if(Vr(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;for(var s=a-n,o=i-t,v=Math.min(s,o),f=this.slice(n,a),l=e.slice(t,i),c=0;c<v;++c)if(f[c]!==l[c]){s=f[c],o=l[c];break}return s<o?-1:o<s?1:0};function b3(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,H0(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=d.from(e,i)),d.isBuffer(e))return e.length===0?-1:q3(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):q3(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function q3(r,e,t,i,n){var a=1,s=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,s/=2,o/=2,t/=2}function v(q,y){return a===1?q[y]:q.readUInt16BE(y*a)}var f;if(n){var l=-1;for(f=t;f<s;f++)if(v(r,f)===v(e,l===-1?0:f-l)){if(l===-1&&(l=f),f-l+1===o)return l*a}else l!==-1&&(f-=f-l),l=-1}else for(t+o>s&&(t=s-o),f=t;f>=0;f--){for(var c=!0,p=0;p<o;p++)if(v(r,f+p)!==v(e,p)){c=!1;break}if(c)return f}return-1}d.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};d.prototype.indexOf=function(e,t,i){return b3(this,e,t,i,!0)};d.prototype.lastIndexOf=function(e,t,i){return b3(this,e,t,i,!1)};function j$(r,e,t,i){t=Number(t)||0;var n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;var a=e.length;i>a/2&&(i=a/2);for(var s=0;s<i;++s){var o=parseInt(e.substr(s*2,2),16);if(H0(o))return s;r[t+s]=o}return s}function V$(r,e,t,i){return mn(G0(e,r.length-t),r,t,i)}function G$(r,e,t,i){return mn($$(e),r,t,i)}function U$(r,e,t,i){return mn(S3(e),r,t,i)}function W$(r,e,t,i){return mn(Q$(e,r.length-t),r,t,i)}d.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return j$(this,e,t,i);case"utf8":case"utf-8":return V$(this,e,t,i);case"ascii":case"latin1":case"binary":return G$(this,e,t,i);case"base64":return U$(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return W$(this,e,t,i);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function H$(r,e,t){return e===0&&t===r.length?C0.fromByteArray(r):C0.fromByteArray(r.slice(e,t))}function E3(r,e,t){t=Math.min(r.length,t);for(var i=[],n=e;n<t;){var a=r[n],s=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){var v,f,l,c;switch(o){case 1:a<128&&(s=a);break;case 2:v=r[n+1],(v&192)===128&&(c=(a&31)<<6|v&63,c>127&&(s=c));break;case 3:v=r[n+1],f=r[n+2],(v&192)===128&&(f&192)===128&&(c=(a&15)<<12|(v&63)<<6|f&63,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:v=r[n+1],f=r[n+2],l=r[n+3],(v&192)===128&&(f&192)===128&&(l&192)===128&&(c=(a&15)<<18|(v&63)<<12|(f&63)<<6|l&63,c>65535&&c<1114112&&(s=c))}}s===null?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|s&1023),i.push(s),n+=o}return k$(i)}var y3=4096;function k$(r){var e=r.length;if(e<=y3)return String.fromCharCode.apply(String,r);for(var t="",i=0;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=y3));return t}function D$(r,e,t){var i="";t=Math.min(r.length,t);for(var n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function X$(r,e,t){var i="";t=Math.min(r.length,t);for(var n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function J$(r,e,t){var i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);for(var n="",a=e;a<t;++a)n+=K$[r[a]];return n}function z$(r,e,t){for(var i=r.slice(e,t),n="",a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}d.prototype.slice=function(e,t){var i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,d.prototype),n};function ir(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ir(e,t,this.length);for(var n=this[e],a=1,s=0;++s<t&&(a*=256);)n+=this[e+s]*a;return n};d.prototype.readUintBE=d.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ir(e,t,this.length);for(var n=this[e+--t],a=1;t>0&&(a*=256);)n+=this[e+--t]*a;return n};d.prototype.readUint8=d.prototype.readUInt8=function(e,t){return e=e>>>0,t||ir(e,1,this.length),this[e]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ir(e,2,this.length),this[e]|this[e+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ir(e,2,this.length),this[e]<<8|this[e+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};d.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ir(e,t,this.length);for(var n=this[e],a=1,s=0;++s<t&&(a*=256);)n+=this[e+s]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};d.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ir(e,t,this.length);for(var n=t,a=1,s=this[e+--n];n>0&&(a*=256);)s+=this[e+--n]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*t)),s};d.prototype.readInt8=function(e,t){return e=e>>>0,t||ir(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};d.prototype.readInt16LE=function(e,t){e=e>>>0,t||ir(e,2,this.length);var i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};d.prototype.readInt16BE=function(e,t){e=e>>>0,t||ir(e,2,this.length);var i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};d.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};d.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};d.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),It.read(this,e,!0,23,4)};d.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),It.read(this,e,!1,23,4)};d.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ir(e,8,this.length),It.read(this,e,!0,52,8)};d.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ir(e,8,this.length),It.read(this,e,!1,52,8)};function pr(r,e,t,i,n,a){if(!d.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){var a=Math.pow(2,8*i)-1;pr(this,e,t,i,a,0)}var s=1,o=0;for(this[t]=e&255;++o<i&&(s*=256);)this[t+o]=e/s&255;return t+i};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){var a=Math.pow(2,8*i)-1;pr(this,e,t,i,a,0)}var s=i-1,o=1;for(this[t+s]=e&255;--s>=0&&(o*=256);)this[t+s]=e/o&255;return t+i};d.prototype.writeUint8=d.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,1,255,0),this[t]=e&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};d.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){var a=Math.pow(2,8*i-1);pr(this,e,t,i,a-1,-a)}var s=0,o=1,v=0;for(this[t]=e&255;++s<i&&(o*=256);)e<0&&v===0&&this[t+s-1]!==0&&(v=1),this[t+s]=(e/o>>0)-v&255;return t+i};d.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){var a=Math.pow(2,8*i-1);pr(this,e,t,i,a-1,-a)}var s=i-1,o=1,v=0;for(this[t+s]=e&255;--s>=0&&(o*=256);)e<0&&v===0&&this[t+s+1]!==0&&(v=1),this[t+s]=(e/o>>0)-v&255;return t+i};d.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};d.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};d.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};d.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};d.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function N3(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function A3(r,e,t,i,n){return e=+e,t=t>>>0,n||N3(r,e,t,4,34028234663852886e22,-34028234663852886e22),It.write(r,e,t,i,23,4),t+4}d.prototype.writeFloatLE=function(e,t,i){return A3(this,e,t,!0,i)};d.prototype.writeFloatBE=function(e,t,i){return A3(this,e,t,!1,i)};function O3(r,e,t,i,n){return e=+e,t=t>>>0,n||N3(r,e,t,8,17976931348623157e292,-17976931348623157e292),It.write(r,e,t,i,52,8),t+8}d.prototype.writeDoubleLE=function(e,t,i){return O3(this,e,t,!0,i)};d.prototype.writeDoubleBE=function(e,t,i){return O3(this,e,t,!1,i)};d.prototype.copy=function(e,t,i,n){if(!d.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);var a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};d.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!d.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var a=e.charCodeAt(0);(n==="utf8"&&a<128||n==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<i;++s)this[s]=e;else{var o=d.isBuffer(e)?e:d.from(e,n),v=o.length;if(v===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<i-t;++s)this[s+t]=o[s%v]}return this};var Y$=/[^+/0-9A-Za-z-_]/g;function Z$(r){if(r=r.split("=")[0],r=r.trim().replace(Y$,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function G0(r,e){e=e||1/0;for(var t,i=r.length,n=null,a=[],s=0;s<i;++s){if(t=r.charCodeAt(s),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(s+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function $$(r){for(var e=[],t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function Q$(r,e){for(var t,i,n,a=[],s=0;s<r.length&&!((e-=2)<0);++s)t=r.charCodeAt(s),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function S3(r){return C0.toByteArray(Z$(r))}function mn(r,e,t,i){for(var n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function Vr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function H0(r){return r!==r}var K$=function(){for(var r="0123456789abcdef",e=new Array(256),t=0;t<16;++t)for(var i=t*16,n=0;n<16;++n)e[i+n]=r[t]+r[n];return e}()});var I3=u((kPr,L3)=>{"use strict";var rQ=T3().Buffer;L3.exports=rQ});var R3=u((DPr,P3)=>{"use strict";function eQ(){throw new Error("not implemented")}P3.exports=eQ});var qn=u((XPr,_3)=>{"use strict";var tQ=f3(),iQ=I3(),nQ=R3(),k0;tQ()?k0=iQ:k0=nQ;_3.exports=k0});var M3=u((JPr,F3)=>{"use strict";var aQ=L(),uQ=qn(),sQ=aQ(uQ.from);F3.exports=sQ});var B3=u((zPr,x3)=>{"use strict";var oQ=nt(),vQ=qn();function fQ(r){if(!oQ(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return vQ.from(r)}x3.exports=fQ});var j3=u((YPr,C3)=>{"use strict";var lQ=nt(),cQ=qn();function pQ(r){if(!lQ(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new cQ(r)}C3.exports=pQ});var G3=u((ZPr,V3)=>{"use strict";var gQ=M3(),mQ=B3(),qQ=j3(),D0;gQ?D0=mQ:D0=qQ;V3.exports=D0});var W3=u(($Pr,U3)=>{"use strict";var yQ=Z(),hQ=typeof Int8Array=="function";function dQ(r){return hQ&&r instanceof Int8Array||yQ(r)==="[object Int8Array]"}U3.exports=dQ});var k3=u((QPr,H3)=>{"use strict";var wQ=W3();H3.exports=wQ});var X3=u((KPr,D3)=>{"use strict";var bQ=127;D3.exports=bQ});var z3=u((rRr,J3)=>{"use strict";var EQ=-128;J3.exports=EQ});var Z3=u((eRr,Y3)=>{"use strict";var NQ=typeof Int8Array=="function"?Int8Array:null;Y3.exports=NQ});var K3=u((tRr,Q3)=>{"use strict";var AQ=k3(),OQ=X3(),SQ=z3(),$3=Z3();function TQ(){var r,e;if(typeof $3!="function")return!1;try{e=new $3([1,3.14,-3.14,OQ+1]),r=AQ(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===SQ}catch{r=!1}return r}Q3.exports=TQ});var e6=u((iRr,r6)=>{"use strict";var LQ=K3();r6.exports=LQ});var i6=u((nRr,t6)=>{"use strict";var IQ=typeof Int8Array=="function"?Int8Array:void 0;t6.exports=IQ});var a6=u((aRr,n6)=>{"use strict";function PQ(){throw new Error("not implemented")}n6.exports=PQ});var Ni=u((uRr,u6)=>{"use strict";var RQ=e6(),_Q=i6(),FQ=a6(),X0;RQ()?X0=_Q:X0=FQ;u6.exports=X0});var o6=u((sRr,s6)=>{"use strict";var MQ=Z(),xQ=typeof Uint8Array=="function";function BQ(r){return xQ&&r instanceof Uint8Array||MQ(r)==="[object Uint8Array]"}s6.exports=BQ});var f6=u((oRr,v6)=>{"use strict";var CQ=o6();v6.exports=CQ});var c6=u((vRr,l6)=>{"use strict";var jQ=255;l6.exports=jQ});var g6=u((fRr,p6)=>{"use strict";var VQ=typeof Uint8Array=="function"?Uint8Array:null;p6.exports=VQ});var y6=u((lRr,q6)=>{"use strict";var GQ=f6(),J0=c6(),m6=g6();function UQ(){var r,e;if(typeof m6!="function")return!1;try{e=[1,3.14,-3.14,J0+1,J0+2],e=new m6(e),r=GQ(e)&&e[0]===1&&e[1]===3&&e[2]===J0-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}q6.exports=UQ});var d6=u((cRr,h6)=>{"use strict";var WQ=y6();h6.exports=WQ});var b6=u((pRr,w6)=>{"use strict";var HQ=typeof Uint8Array=="function"?Uint8Array:void 0;w6.exports=HQ});var N6=u((gRr,E6)=>{"use strict";function kQ(){throw new Error("not implemented")}E6.exports=kQ});var Rt=u((mRr,A6)=>{"use strict";var DQ=d6(),XQ=b6(),JQ=N6(),z0;DQ()?z0=XQ:z0=JQ;A6.exports=z0});var S6=u((qRr,O6)=>{"use strict";var zQ=Z(),YQ=typeof Uint8ClampedArray=="function";function ZQ(r){return YQ&&r instanceof Uint8ClampedArray||zQ(r)==="[object Uint8ClampedArray]"}O6.exports=ZQ});var L6=u((yRr,T6)=>{"use strict";var $Q=S6();T6.exports=$Q});var P6=u((hRr,I6)=>{"use strict";var QQ=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;I6.exports=QQ});var F6=u((dRr,_6)=>{"use strict";var KQ=L6(),R6=P6();function rK(){var r,e;if(typeof R6!="function")return!1;try{e=new R6([-1,0,1,3.14,4.99,255,256]),r=KQ(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}_6.exports=rK});var x6=u((wRr,M6)=>{"use strict";var eK=F6();M6.exports=eK});var C6=u((bRr,B6)=>{"use strict";var tK=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;B6.exports=tK});var V6=u((ERr,j6)=>{"use strict";function iK(){throw new Error("not implemented")}j6.exports=iK});var Ai=u((NRr,G6)=>{"use strict";var nK=x6(),aK=C6(),uK=V6(),Y0;nK()?Y0=aK:Y0=uK;G6.exports=Y0});var W6=u((ARr,U6)=>{"use strict";var sK=Z(),oK=typeof Int16Array=="function";function vK(r){return oK&&r instanceof Int16Array||sK(r)==="[object Int16Array]"}U6.exports=vK});var k6=u((ORr,H6)=>{"use strict";var fK=W6();H6.exports=fK});var X6=u((SRr,D6)=>{"use strict";var lK=32767;D6.exports=lK});var z6=u((TRr,J6)=>{"use strict";var cK=-32768;J6.exports=cK});var Z6=u((LRr,Y6)=>{"use strict";var pK=typeof Int16Array=="function"?Int16Array:null;Y6.exports=pK});var K6=u((IRr,Q6)=>{"use strict";var gK=k6(),mK=X6(),qK=z6(),$6=Z6();function yK(){var r,e;if(typeof $6!="function")return!1;try{e=new $6([1,3.14,-3.14,mK+1]),r=gK(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===qK}catch{r=!1}return r}Q6.exports=yK});var e4=u((PRr,r4)=>{"use strict";var hK=K6();r4.exports=hK});var i4=u((RRr,t4)=>{"use strict";var dK=typeof Int16Array=="function"?Int16Array:void 0;t4.exports=dK});var a4=u((_Rr,n4)=>{"use strict";function wK(){throw new Error("not implemented")}n4.exports=wK});var Oi=u((FRr,u4)=>{"use strict";var bK=e4(),EK=i4(),NK=a4(),Z0;bK()?Z0=EK:Z0=NK;u4.exports=Z0});var o4=u((MRr,s4)=>{"use strict";var AK=Z(),OK=typeof Uint16Array=="function";function SK(r){return OK&&r instanceof Uint16Array||AK(r)==="[object Uint16Array]"}s4.exports=SK});var f4=u((xRr,v4)=>{"use strict";var TK=o4();v4.exports=TK});var c4=u((BRr,l4)=>{"use strict";var LK=65535;l4.exports=LK});var g4=u((CRr,p4)=>{"use strict";var IK=typeof Uint16Array=="function"?Uint16Array:null;p4.exports=IK});var y4=u((jRr,q4)=>{"use strict";var PK=f4(),$0=c4(),m4=g4();function RK(){var r,e;if(typeof m4!="function")return!1;try{e=[1,3.14,-3.14,$0+1,$0+2],e=new m4(e),r=PK(e)&&e[0]===1&&e[1]===3&&e[2]===$0-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}q4.exports=RK});var d4=u((VRr,h4)=>{"use strict";var _K=y4();h4.exports=_K});var b4=u((GRr,w4)=>{"use strict";var FK=typeof Uint16Array=="function"?Uint16Array:void 0;w4.exports=FK});var N4=u((URr,E4)=>{"use strict";function MK(){throw new Error("not implemented")}E4.exports=MK});var _t=u((WRr,A4)=>{"use strict";var xK=d4(),BK=b4(),CK=N4(),Q0;xK()?Q0=BK:Q0=CK;A4.exports=Q0});var S4=u((HRr,O4)=>{"use strict";var jK=Z(),VK=typeof Int32Array=="function";function GK(r){return VK&&r instanceof Int32Array||jK(r)==="[object Int32Array]"}O4.exports=GK});var yn=u((kRr,T4)=>{"use strict";var UK=S4();T4.exports=UK});var Ft=u((DRr,L4)=>{"use strict";var WK=2147483647;L4.exports=WK});var P4=u((XRr,I4)=>{"use strict";var HK=-2147483648;I4.exports=HK});var _4=u((JRr,R4)=>{"use strict";var kK=typeof Int32Array=="function"?Int32Array:null;R4.exports=kK});var x4=u((zRr,M4)=>{"use strict";var DK=yn(),XK=Ft(),JK=P4(),F4=_4();function zK(){var r,e;if(typeof F4!="function")return!1;try{e=new F4([1,3.14,-3.14,XK+1]),r=DK(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===JK}catch{r=!1}return r}M4.exports=zK});var C4=u((YRr,B4)=>{"use strict";var YK=x4();B4.exports=YK});var V4=u((ZRr,j4)=>{"use strict";var ZK=typeof Int32Array=="function"?Int32Array:void 0;j4.exports=ZK});var U4=u(($Rr,G4)=>{"use strict";function $K(){throw new Error("not implemented")}G4.exports=$K});var vt=u((QRr,W4)=>{"use strict";var QK=C4(),KK=V4(),rrr=U4(),K0;QK()?K0=KK:K0=rrr;W4.exports=K0});var k4=u((KRr,H4)=>{"use strict";var err=Z(),trr=typeof Uint32Array=="function";function irr(r){return trr&&r instanceof Uint32Array||err(r)==="[object Uint32Array]"}H4.exports=irr});var kr=u((r_r,D4)=>{"use strict";var nrr=k4();D4.exports=nrr});var J4=u((e_r,X4)=>{"use strict";var arr=typeof Uint32Array=="function"?Uint32Array:null;X4.exports=arr});var Z4=u((t_r,Y4)=>{"use strict";var urr=kr(),rs=Tt(),z4=J4();function srr(){var r,e;if(typeof z4!="function")return!1;try{e=[1,3.14,-3.14,rs+1,rs+2],e=new z4(e),r=urr(e)&&e[0]===1&&e[1]===3&&e[2]===rs-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Y4.exports=srr});var Q4=u((i_r,$4)=>{"use strict";var orr=Z4();$4.exports=orr});var r5=u((n_r,K4)=>{"use strict";var vrr=typeof Uint32Array=="function"?Uint32Array:void 0;K4.exports=vrr});var t5=u((a_r,e5)=>{"use strict";function frr(){throw new Error("not implemented")}e5.exports=frr});var or=u((u_r,i5)=>{"use strict";var lrr=Q4(),crr=r5(),prr=t5(),es;lrr()?es=crr:es=prr;i5.exports=es});var a5=u((s_r,n5)=>{"use strict";var grr=Z(),mrr=typeof Float32Array=="function";function qrr(r){return mrr&&r instanceof Float32Array||grr(r)==="[object Float32Array]"}n5.exports=qrr});var s5=u((o_r,u5)=>{"use strict";var yrr=a5();u5.exports=yrr});var v5=u((v_r,o5)=>{"use strict";var hrr=typeof Float32Array=="function"?Float32Array:null;o5.exports=hrr});var c5=u((f_r,l5)=>{"use strict";var drr=s5(),wrr=j(),f5=v5();function brr(){var r,e;if(typeof f5!="function")return!1;try{e=new f5([1,3.14,-3.14,5e40]),r=drr(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===wrr}catch{r=!1}return r}l5.exports=brr});var g5=u((l_r,p5)=>{"use strict";var Err=c5();p5.exports=Err});var q5=u((c_r,m5)=>{"use strict";var Nrr=typeof Float32Array=="function"?Float32Array:void 0;m5.exports=Nrr});var h5=u((p_r,y5)=>{"use strict";function Arr(){throw new Error("not implemented")}y5.exports=Arr});var Dr=u((g_r,d5)=>{"use strict";var Orr=g5(),Srr=q5(),Trr=h5(),ts;Orr()?ts=Srr:ts=Trr;d5.exports=ts});var b5=u((m_r,w5)=>{"use strict";var Lrr=Z(),Irr=typeof Float64Array=="function";function Prr(r){return Irr&&r instanceof Float64Array||Lrr(r)==="[object Float64Array]"}w5.exports=Prr});var N5=u((q_r,E5)=>{"use strict";var Rrr=b5();E5.exports=Rrr});var O5=u((y_r,A5)=>{"use strict";var _rr=typeof Float64Array=="function"?Float64Array:null;A5.exports=_rr});var L5=u((h_r,T5)=>{"use strict";var Frr=N5(),S5=O5();function Mrr(){var r,e;if(typeof S5!="function")return!1;try{e=new S5([1,3.14,-3.14,NaN]),r=Frr(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}T5.exports=Mrr});var is=u((d_r,I5)=>{"use strict";var xrr=L5();I5.exports=xrr});var R5=u((w_r,P5)=>{"use strict";var Brr=typeof Float64Array=="function"?Float64Array:void 0;P5.exports=Brr});var F5=u((b_r,_5)=>{"use strict";function Crr(){throw new Error("not implemented")}_5.exports=Crr});var lr=u((E_r,M5)=>{"use strict";var jrr=is(),Vrr=R5(),Grr=F5(),ns;jrr()?ns=Vrr:ns=Grr;M5.exports=ns});var C5=u((N_r,B5)=>{"use strict";var Urr=Ni(),Wrr=Rt(),Hrr=Ai(),krr=Oi(),Drr=_t(),Xrr=vt(),Jrr=or(),zrr=Dr(),Yrr=lr(),x5;function Zrr(r){return new Urr(r)}function $rr(r){return new Wrr(r)}function Qrr(r){return new Hrr(r)}function Krr(r){return new krr(r)}function rer(r){return new Drr(r)}function eer(r){return new Xrr(r)}function ter(r){return new Jrr(r)}function ier(r){return new zrr(r)}function ner(r){return new Yrr(r)}function aer(){var r={int8array:Zrr,uint8array:$rr,uint8clampedarray:Qrr,int16array:Krr,uint16array:rer,int32array:eer,uint32array:ter,float32array:ier,float64array:ner};return r}x5=aer();B5.exports=x5});var W5=u((A_r,U5)=>{"use strict";var hn=A(),as=fr(),j5=nt(),uer=Rp(),V5=on(),ser=Up(),oer=sn(),G5=Ei(),ver=Yp(),Si=i3(),fer=ut(),Ti=Ee(),ler=G3(),cer=C5();function per(r){var e,t,i,n,a,s,o,v;for(e=[],n=[],o=Object.create(fer(r)),e.push(r),n.push(o),t=ver(r),v=0;v<t.length;v++)i=t[v],a=Si(r,i),hn(a,"value")&&(s=as(r[i])?[]:{},a.value=ft(r[i],s,e,n,-1)),Ti(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function ger(r){var e=[],t=[],i,n,a,s,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=G5(r),v=0;v<i.length;v++)s=i[v],n=Si(r,s),hn(n,"value")&&(a=as(r[s])?[]:{},n.value=ft(r[s],a,e,t,-1)),Ti(o,s,n);return o}function ft(r,e,t,i,n){var a,s,o,v,f,l,c,p,q,y;if(n-=1,typeof r!="object"||r===null)return r;if(j5(r))return ler(r);if(uer(r))return ger(r);if(o=V5(r),o==="date")return new Date(+r);if(o==="regexp")return ser(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=cer[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?per(r):{};if(s=G5(r),n>0)for(a=o,y=0;y<s.length;y++){if(l=s[y],p=r[l],o=V5(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||j5(p)){a==="object"?(v=Si(r,l),hn(v,"value")&&(v.value=ft(p)),Ti(e,l,v)):e[l]=ft(p);continue}if(q=oer(t,p),q!==-1){e[l]=i[q];continue}c=as(p)?new Array(p.length):{},t.push(p),i.push(c),a==="array"?e[l]=ft(p,c,t,i,n):(v=Si(r,l),hn(v,"value")&&(v.value=ft(p,c,t,i,n)),Ti(e,l,v))}else if(o==="array")for(y=0;y<s.length;y++)l=s[y],e[l]=r[l];else for(y=0;y<s.length;y++)l=s[y],v=Si(r,l),Ti(e,l,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}U5.exports=ft});var k5=u((O_r,H5)=>{"use strict";var mer=fr(),qer=Ae().isPrimitive,yer=j(),her=W5();function der(r,e){var t;if(arguments.length>1){if(!qer(e))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+e+"`.");if(e===0)return r}else e=yer;return t=mer(r)?new Array(r.length):{},her(r,t,[r],[t],e)}H5.exports=der});var Mt=u((S_r,D5)=>{"use strict";var wer=k5();D5.exports=wer});var X5=u((T_r,ber)=>{ber.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var z5=u((L_r,J5)=>{"use strict";var Eer=Mt(),Ner=X5();function Aer(){return Eer(Ner)}J5.exports=Aer});var Z5=u((I_r,Y5)=>{"use strict";var Oer=fr();function Ser(r){return typeof r=="object"&&r!==null&&!Oer(r)}Y5.exports=Ser});var dn=u((P_r,$5)=>{"use strict";var Ter=Z5();$5.exports=Ter});var r8=u((R_r,K5)=>{"use strict";var Ler=dn(),Q5=L(),Ier=ut(),wn=A(),Per=Z(),Rer=Object.prototype;function _er(r){var e;for(e in r)if(!wn(r,e))return!1;return!0}function Fer(r){var e;return Ler(r)?(e=Ier(r),e?!wn(r,"constructor")&&wn(e,"constructor")&&Q5(e.constructor)&&Per(e.constructor)==="[object Function]"&&wn(e,"isPrototypeOf")&&Q5(e.isPrototypeOf)&&(e===Rer||_er(r)):!0):!1}K5.exports=Fer});var T=u((__r,e8)=>{"use strict";var Mer=r8();e8.exports=Mer});var i8=u((F_r,t8)=>{"use strict";var xer=Ee();function Ber(r,e,t){xer(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}t8.exports=Ber});var a8=u((M_r,n8)=>{"use strict";var Cer=i8();n8.exports=Cer});var s8=u((x_r,u8)=>{"use strict";var jer=j(),Ver=J();function Ger(r){return r===jer||r===Ver}u8.exports=Ger});var Oe=u((B_r,o8)=>{"use strict";var Uer=s8();o8.exports=Uer});var f8=u((C_r,v8)=>{"use strict";function Wer(r){return Math.abs(r)}v8.exports=Wer});var $=u((j_r,l8)=>{"use strict";var Her=f8();l8.exports=Her});var p8=u((V_r,c8)=>{"use strict";var ker=Rt(),Der=_t(),Xer={uint16:Der,uint8:ker};c8.exports=Xer});var y8=u((G_r,q8)=>{"use strict";var g8=p8(),m8;function Jer(){var r,e;return r=new g8.uint16(1),r[0]=4660,e=new g8.uint8(r.buffer),e[0]===52}m8=Jer();q8.exports=m8});var lt=u((U_r,h8)=>{"use strict";var zer=y8();h8.exports=zer});var w8=u((W_r,d8)=>{"use strict";var Yer=lt(),us;Yer===!0?us=1:us=0;d8.exports=us});var N8=u((H_r,E8)=>{"use strict";var Zer=or(),$er=lr(),Qer=w8(),b8=new $er(1),Ker=new Zer(b8.buffer);function rtr(r){return b8[0]=r,Ker[Qer]}E8.exports=rtr});var cr=u((k_r,A8)=>{"use strict";var etr=N8();A8.exports=etr});var S8=u((D_r,O8)=>{"use strict";var ttr=lt(),ss;ttr===!0?ss=1:ss=0;O8.exports=ss});var L8=u((X_r,T8)=>{"use strict";var itr=or(),ntr=lr(),atr=S8(),os=new ntr(1),utr=new itr(os.buffer);function str(r,e){return os[0]=r,utr[atr]=e>>>0,os[0]}T8.exports=str});var xt=u((J_r,I8)=>{"use strict";var otr=L8();I8.exports=otr});var Se=u((z_r,P8)=>{"use strict";var vtr=1023;P8.exports=vtr});var _8=u((Y_r,R8)=>{"use strict";function ftr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}R8.exports=ftr});var M8=u((Z_r,F8)=>{"use strict";function ltr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}F8.exports=ltr});var j8=u(($_r,C8)=>{"use strict";var x8=cr(),ctr=xt(),ptr=b(),gtr=Se(),mtr=J(),qtr=_8(),ytr=M8(),bn=.6931471803691238,En=19082149292705877e-26,htr=0x40000000000000,dtr=.3333333333333333,B8=1048575,wtr=2146435072,btr=1048576,Etr=1072693248;function Ntr(r){var e,t,i,n,a,s,o,v,f,l,c,p;return r===0?mtr:ptr(r)||r<0?NaN:(t=x8(r),a=0,t<btr&&(a-=54,r*=htr,t=x8(r)),t>=wtr?r+r:(a+=(t>>20)-gtr|0,t&=B8,v=t+614244&1048576|0,r=ctr(r,t|v^Etr),a+=v>>20|0,o=r-1,(B8&2+t)<3?o===0?a===0?0:a*bn+a*En:(s=o*o*(.5-dtr*o),a===0?o-s:a*bn-(s-a*En-o)):(l=o/(2+o),p=l*l,v=t-398458|0,c=p*p,f=440401-t|0,n=c*qtr(c),i=p*ytr(c),v|=f,s=i+n,v>0?(e=.5*o*o,a===0?o-(e-l*(e+s)):a*bn-(e-(l*(e+s)+a*En)-o)):a===0?o-l*(o-s):a*bn-(l*(o-s)-a*En-o))))}C8.exports=Ntr});var B=u((Q_r,V8)=>{"use strict";var Atr=j8();V8.exports=Atr});var U8=u((K_r,G8)=>{"use strict";var Otr=Math.ceil;G8.exports=Otr});var H8=u((rFr,W8)=>{"use strict";var Str=U8();W8.exports=Str});var D8=u((eFr,k8)=>{"use strict";var Ttr=K(),Ltr=H8();function Itr(r){return r<0?Ltr(r):Ttr(r)}k8.exports=Itr});var Nn=u((tFr,X8)=>{"use strict";var Ptr=D8();X8.exports=Ptr});var z8=u((iFr,J8)=>{"use strict";function Rtr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}J8.exports=Rtr});var Z8=u((nFr,Y8)=>{"use strict";function _tr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}Y8.exports=_tr});var Q8=u((aFr,$8)=>{"use strict";var Ftr=z8(),Mtr=Z8();function xtr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*Ftr(a),i+=n*n*Mtr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}$8.exports=xtr});var vs=u((uFr,K8)=>{"use strict";var Btr=Q8();K8.exports=Btr});var tg=u((sFr,eg)=>{"use strict";var rg=-.16666666666666632,Ctr=.00833333333332249,jtr=-.0001984126982985795,Vtr=27557313707070068e-22,Gtr=-25050760253406863e-24,Utr=158969099521155e-24;function Wtr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=Ctr+a*(jtr+a*Vtr)+a*n*(Gtr+a*Utr),i=a*r,e===0?r+i*(rg+a*t):r-(a*(.5*e-i*t)-e-i*rg)}eg.exports=Wtr});var fs=u((oFr,ig)=>{"use strict";var Htr=tg();ig.exports=Htr});var ag=u((vFr,ng)=>{"use strict";var ktr=lt(),ls;ktr===!0?ls=0:ls=1;ng.exports=ls});var og=u((fFr,sg)=>{"use strict";var Dtr=or(),Xtr=lr(),Jtr=ag(),ug=new Xtr(1),ztr=new Dtr(ug.buffer);function Ytr(r){return ug[0]=r,ztr[Jtr]}sg.exports=Ytr});var fg=u((lFr,vg)=>{"use strict";var Ztr=og();vg.exports=Ztr});var pg=u((cFr,cg)=>{"use strict";var $tr=lt(),lg,cs,ps;$tr===!0?(cs=1,ps=0):(cs=0,ps=1);lg={HIGH:cs,LOW:ps};cg.exports=lg});var hg=u((pFr,yg)=>{"use strict";var Qtr=or(),Ktr=lr(),mg=pg(),qg=new Ktr(1),gg=new Qtr(qg.buffer),rir=mg.HIGH,eir=mg.LOW;function tir(r,e){return gg[rir]=r,gg[eir]=e,qg[0]}yg.exports=tir});var An=u((gFr,dg)=>{"use strict";var iir=hg();dg.exports=iir});var bg=u((mFr,wg)=>{"use strict";var nir=1023;wg.exports=nir});var Ng=u((qFr,Eg)=>{"use strict";var air=-1023;Eg.exports=air});var Og=u((yFr,Ag)=>{"use strict";var uir=-1074;Ag.exports=uir});var Lg=u((hFr,Tg)=>{"use strict";var sir=lt(),Sg,gs,ms;sir===!0?(gs=1,ms=0):(gs=0,ms=1);Sg={HIGH:gs,LOW:ms};Tg.exports=Sg});var Fg=u((dFr,_g)=>{"use strict";var oir=or(),vir=lr(),Pg=Lg(),Rg=new vir(1),Ig=new oir(Rg.buffer),fir=Pg.HIGH,lir=Pg.LOW;function cir(r,e){return Rg[0]=e,r[0]=Ig[fir],r[1]=Ig[lir],r}_g.exports=cir});var Bg=u((wFr,xg)=>{"use strict";var Mg=Fg();function pir(r,e){return arguments.length===1?Mg([0,0],r):Mg(r,e)}xg.exports=pir});var On=u((bFr,Cg)=>{"use strict";var gir=Bg();Cg.exports=gir});var Vg=u((EFr,jg)=>{"use strict";var mir=On(),qir=cr(),yir=An(),hir=2147483648>>>0,dir=2147483647,qs=[0,0];function wir(r,e){var t,i;return mir(qs,r),t=qs[0],t&=dir,i=qir(e),i&=hir,t|=i,yir(t,qs[1])}jg.exports=wir});var Sn=u((NFr,Gg)=>{"use strict";var bir=Vg();Gg.exports=bir});var Wg=u((AFr,Ug)=>{"use strict";var Eir=22250738585072014e-324;Ug.exports=Eir});var kg=u((OFr,Hg)=>{"use strict";var Nir=Wg(),Air=Oe(),Oir=b(),Sir=$(),Tir=4503599627370496;function Lir(r,e){return Oir(e)||Air(e)?(r[0]=e,r[1]=0,r):e!==0&&Sir(e)<Nir?(r[0]=e*Tir,r[1]=-52,r):(r[0]=e,r[1]=0,r)}Hg.exports=Lir});var Jg=u((SFr,Xg)=>{"use strict";var Dg=kg();function Iir(r,e){return arguments.length===1?Dg([0,0],r):Dg(r,e)}Xg.exports=Iir});var Yg=u((TFr,zg)=>{"use strict";var Pir=Jg();zg.exports=Pir});var $g=u((LFr,Zg)=>{"use strict";var Rir=2146435072;Zg.exports=Rir});var Kg=u((IFr,Qg)=>{"use strict";var _ir=cr(),Fir=$g(),Mir=Se();function xir(r){var e=_ir(r);return e=(e&Fir)>>>20,e-Mir|0}Qg.exports=xir});var e7=u((PFr,r7)=>{"use strict";var Bir=Kg();r7.exports=Bir});var i7=u((RFr,t7)=>{"use strict";var Cir=j(),jir=J(),Vir=Se(),Gir=bg(),Uir=Ng(),Wir=Og(),Hir=b(),kir=Oe(),Dir=Sn(),Xir=Yg(),Jir=e7(),zir=On(),Yir=An(),Zir=2220446049250313e-31,$ir=2148532223>>>0,ys=[0,0],hs=[0,0];function Qir(r,e){var t,i;return e===0||r===0||Hir(r)||kir(r)?r:(Xir(ys,r),r=ys[0],e+=ys[1],e+=Jir(r),e<Wir?Dir(0,r):e>Gir?r<0?jir:Cir:(e<=Uir?(e+=52,i=Zir):i=1,zir(hs,r),t=hs[0],t&=$ir,t|=e+Vir<<20,i*Yir(t,hs[1])))}t7.exports=Qir});var Tn=u((_Fr,n7)=>{"use strict";var Kir=i7();n7.exports=Kir});var u7=u((FFr,a7)=>{"use strict";function rnr(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}a7.exports=rnr});var ds=u((MFr,s7)=>{"use strict";var enr=u7();s7.exports=enr});var v7=u((xFr,o7)=>{"use strict";var tnr=ds();function inr(r){return tnr(0,r)}o7.exports=inr});var l7=u((BFr,f7)=>{"use strict";var nnr=v7();f7.exports=nnr});var q7=u((CFr,m7)=>{"use strict";var anr=K(),Ln=Tn(),Rn=l7(),p7=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],unr=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ws=16777216,bs=5960464477539063e-23,In=Rn(20),c7=Rn(20),Pn=Rn(20),ur=Rn(20);function g7(r,e,t,i,n,a,s,o,v){var f,l,c,p,q,y,m,g,h;for(p=a,h=i[t],g=t,q=0;g>0;q++)l=bs*h|0,ur[q]=h-ws*l|0,h=i[g-1]+l,g-=1;if(h=Ln(h,n),h-=8*anr(h*.125),m=h|0,h-=m,c=0,n>0?(q=ur[t-1]>>24-n,m+=q,ur[t-1]-=q<<24-n,c=ur[t-1]>>23-n):n===0?c=ur[t-1]>>23:h>=.5&&(c=2),c>0){for(m+=1,f=0,q=0;q<t;q++)g=ur[q],f===0?g!==0&&(f=1,ur[q]=16777216-g):ur[q]=16777215-g;if(n>0)switch(n){case 1:ur[t-1]&=8388607;break;case 2:ur[t-1]&=4194303;break}c===2&&(h=1-h,f!==0&&(h-=Ln(1,n)))}if(h===0){for(g=0,q=t-1;q>=a;q--)g|=ur[q];if(g===0){for(y=1;ur[a-y]===0;y++);for(q=t+1;q<=t+y;q++){for(v[o+q]=p7[s+q],l=0,g=0;g<=o;g++)l+=r[g]*v[o+(q-g)];i[q]=l}return t+=y,g7(r,e,t,i,n,a,s,o,v)}}if(h===0)for(t-=1,n-=24;ur[t]===0;)t-=1,n-=24;else h=Ln(h,-n),h>=ws?(l=bs*h|0,ur[t]=h-ws*l|0,t+=1,n+=24,ur[t]=l):ur[t]=h|0;for(l=Ln(1,n),q=t;q>=0;q--)i[q]=l*ur[q],l*=bs;for(q=t;q>=0;q--){for(l=0,y=0;y<=p&&y<=t-q;y++)l+=unr[y]*i[q+y];Pn[t-q]=l}for(l=0,q=t;q>=0;q--)l+=Pn[q];for(c===0?e[0]=l:e[0]=-l,l=Pn[0]-l,q=1;q<=t;q++)l+=Pn[q];return c===0?e[1]=l:e[1]=-l,m&7}function snr(r,e,t,i){var n,a,s,o,v,f,l,c,p;for(a=4,o=i-1,s=(t-3)/24|0,s<0&&(s=0),f=t-24*(s+1),c=s-o,p=o+a,l=0;l<=p;l++)c<0?In[l]=0:In[l]=p7[c],c+=1;for(l=0;l<=a;l++){for(n=0,c=0;c<=o;c++)n+=r[c]*In[o+(l-c)];c7[l]=n}return v=a,g7(r,e,v,c7,f,a,s,o,In)}m7.exports=snr});var h7=u((jFr,y7)=>{"use strict";var onr=Math.round;y7.exports=onr});var Es=u((VFr,d7)=>{"use strict";var vnr=h7();d7.exports=vnr});var N7=u((GFr,E7)=>{"use strict";var fnr=Es(),w7=cr(),lnr=.6366197723675814,cnr=1.5707963267341256,pnr=6077100506506192e-26,gnr=6077100506303966e-26,mnr=20222662487959506e-37,qnr=20222662487111665e-37,ynr=84784276603689e-45,b7=2047;function hnr(r,e,t){var i,n,a,s,o,v,f;return n=fnr(r*lnr),s=r-n*cnr,o=n*pnr,f=e>>20|0,t[0]=s-o,i=w7(t[0]),v=f-(i>>20&b7),v>16&&(a=s,o=n*gnr,s=a-o,o=n*mnr-(a-s-o),t[0]=s-o,i=w7(t[0]),v=f-(i>>20&b7),v>49&&(a=s,o=n*qnr,s=a-o,o=n*ynr-(a-s-o),t[0]=s-o)),t[1]=s-t[0]-o,n}E7.exports=hnr});var O7=u((UFr,A7)=>{"use strict";var dnr=cr(),wnr=fg(),bnr=An(),Enr=q7(),_n=N7(),Nnr=0,Anr=16777216,Te=1.5707963267341256,ct=6077100506506192e-26,Fn=2*ct,Mn=3*ct,xn=4*ct,Onr=2147483647,Snr=2146435072,Tnr=1048575,Lnr=598523,Inr=1072243195,Pnr=1073928572,Rnr=1074752122,_nr=1074977148,Fnr=1075183036,Mnr=1075388923,xnr=1075594811,Bnr=1094263291,Li=[0,0,0],Ii=[0,0];function Cnr(r,e){var t,i,n,a,s,o,v,f;if(n=dnr(r),a=n&Onr|0,a<=Inr)return e[0]=r,e[1]=0,0;if(a<=Rnr)return(a&Tnr)===Lnr?_n(r,a,e):a<=Pnr?r>0?(f=r-Te,e[0]=f-ct,e[1]=f-e[0]-ct,1):(f=r+Te,e[0]=f+ct,e[1]=f-e[0]+ct,-1):r>0?(f=r-2*Te,e[0]=f-Fn,e[1]=f-e[0]-Fn,2):(f=r+2*Te,e[0]=f+Fn,e[1]=f-e[0]+Fn,-2);if(a<=xnr)return a<=Fnr?a===_nr?_n(r,a,e):r>0?(f=r-3*Te,e[0]=f-Mn,e[1]=f-e[0]-Mn,3):(f=r+3*Te,e[0]=f+Mn,e[1]=f-e[0]+Mn,-3):a===Mnr?_n(r,a,e):r>0?(f=r-4*Te,e[0]=f-xn,e[1]=f-e[0]-xn,4):(f=r+4*Te,e[0]=f+xn,e[1]=f-e[0]+xn,-4);if(a<Bnr)return _n(r,a,e);if(a>=Snr)return e[0]=NaN,e[1]=NaN,0;for(t=wnr(r),i=(a>>20)-1046,f=bnr(a-(i<<20|0),t),o=0;o<2;o++)Li[o]=f|0,f=(f-Li[o])*Anr;for(Li[2]=f,s=3;Li[s-1]===Nnr;)s-=1;return v=Enr(Li,Ii,i,s,1),r<0?(e[0]=-Ii[0],e[1]=-Ii[1],-v):(e[0]=Ii[0],e[1]=Ii[1],v)}A7.exports=Cnr});var Bn=u((WFr,S7)=>{"use strict";var jnr=O7();S7.exports=jnr});var I7=u((HFr,L7)=>{"use strict";var Vnr=cr(),Ns=vs(),T7=fs(),Gnr=Bn(),Xr=[0,0],Unr=2147483647,Wnr=1072243195,Hnr=1044381696,knr=2146435072;function Dnr(r){var e,t;if(e=Vnr(r),e&=Unr,e<=Wnr)return e<Hnr?1:Ns(r,0);if(e>=knr)return NaN;switch(t=Gnr(r,Xr),t&3){case 0:return Ns(Xr[0],Xr[1]);case 1:return-T7(Xr[0],Xr[1]);case 2:return-Ns(Xr[0],Xr[1]);default:return T7(Xr[0],Xr[1])}}L7.exports=Dnr});var Pi=u((kFr,P7)=>{"use strict";var Xnr=I7();P7.exports=Xnr});var F7=u((DFr,_7)=>{"use strict";var Jnr=cr(),R7=vs(),As=fs(),znr=Bn(),Ynr=2147483647,Znr=2146435072,$nr=1072243195,Qnr=1045430272,Jr=[0,0];function Knr(r){var e,t;if(e=Jnr(r),e&=Ynr,e<=$nr)return e<Qnr?r:As(r,0);if(e>=Znr)return NaN;switch(t=znr(r,Jr),t&3){case 0:return As(Jr[0],Jr[1]);case 1:return R7(Jr[0],Jr[1]);case 2:return-As(Jr[0],Jr[1]);default:return-R7(Jr[0],Jr[1])}}_7.exports=Knr});var Ri=u((XFr,M7)=>{"use strict";var rar=F7();M7.exports=rar});var Gr=u((JFr,x7)=>{"use strict";var ear=3.141592653589793;x7.exports=ear});var j7=u((zFr,C7)=>{"use strict";var tar=b(),iar=Oe(),B7=Pi(),Os=Ri(),nar=$(),_i=Sn(),Fi=Gr();function aar(r){var e,t;return tar(r)?NaN:iar(r)?NaN:(t=r%2,e=nar(t),e===0||e===1?_i(0,t):e<.25?Os(Fi*t):e<.75?(e=.5-e,_i(B7(Fi*e),t)):e<1.25?(t=_i(1,t)-t,Os(Fi*t)):e<1.75?(e-=1.5,-_i(B7(Fi*e),t)):(t-=_i(2,t),Os(Fi*t)))}C7.exports=aar});var Mi=u((YFr,V7)=>{"use strict";var uar=j7();V7.exports=uar});var U7=u((ZFr,G7)=>{"use strict";function sar(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}G7.exports=sar});var H7=u(($Fr,W7)=>{"use strict";function oar(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}W7.exports=oar});var D7=u((QFr,k7)=>{"use strict";function far(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}k7.exports=far});var J7=u((KFr,X7)=>{"use strict";function lar(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}X7.exports=lar});var Y7=u((rMr,z7)=>{"use strict";function car(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}z7.exports=car});var $7=u((eMr,Z7)=>{"use strict";function par(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}Z7.exports=par});var K7=u((tMr,Q7)=>{"use strict";function gar(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}Q7.exports=gar});var e9=u((iMr,r9)=>{"use strict";function mar(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}r9.exports=mar});var i9=u((nMr,t9)=>{"use strict";function qar(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}t9.exports=qar});var a9=u((aMr,n9)=>{"use strict";function yar(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}n9.exports=yar});var o9=u((uMr,s9)=>{"use strict";var har=b(),dar=Oe(),war=$(),Bt=B(),bar=Nn(),Ear=Mi(),Nar=Gr(),Ss=j(),Aar=U7(),Oar=H7(),Sar=D7(),Tar=J7(),Lar=Y7(),Iar=$7(),Par=K7(),Rar=e9(),_ar=i9(),Far=a9(),Mar=.07721566490153287,xar=.3224670334241136,Bar=1,Car=-.07721566490153287,jar=.48383612272381005,Var=-.1475877229945939,Gar=.06462494023913339,Uar=-.07721566490153287,War=1,Har=.4189385332046727,Cn=1.4616321449683622,kar=4503599627370496,Dar=0x400000000000000,Xar=8470329472543003e-37,u9=1.4616321449683622,Jar=-.12148629053584961,zar=-3638676997039505e-33;function Yar(r){var e,t,i,n,a,s,o,v,f,l,c,p,q;if(har(r)||dar(r))return r;if(r===0)return Ss;if(r<0?(e=!0,r=-r):e=!1,r<Xar)return-Bt(r);if(e){if(r>=kar||(f=Ear(r),f===0))return Ss;t=Bt(Nar/war(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(q=-Bt(r),r>=Cn-1+.27?(c=1-r,i=0):r>=Cn-1-.27?(c=r-(u9-1),i=1):(c=r,i=2)):(q=0,r>=Cn+.27?(c=2-r,i=0):r>=Cn-.27?(c=r-u9,i=1):(c=r-1,i=2)),i){case 0:p=c*c,s=Mar+p*Aar(p),a=p*(xar+p*Oar(p)),o=c*s+a,q+=o-.5*c;break;case 1:p=c*c,l=p*c,s=jar+l*Lar(l),a=Var+l*Iar(l),n=Gar+l*Par(l),o=p*s-(zar-l*(a+c*n)),q+=Jar+o;break;case 2:s=c*(Uar+c*Rar(c)),a=War+c*_ar(c),q+=-.5*c+s/a;break}else if(r<8)switch(i=bar(r),c=r-i,o=c*(Car+c*Tar(c)),v=Bar+c*Sar(c),q=.5*c+o/v,p=1,i){case 7:p*=c+6;case 6:p*=c+5;case 5:p*=c+4;case 4:p*=c+3;case 3:p*=c+2,q+=Bt(p)}else r<Dar?(f=Bt(r),p=1/r,c=p*p,l=Har+p*Far(c),q=(r-.5)*(f-1)+l):q=r*(Bt(r)-1);return e&&(q=t-q),q}s9.exports=Yar});var xi=u((sMr,v9)=>{"use strict";var Zar=o9();v9.exports=Zar});var l9=u((oMr,f9)=>{"use strict";var $ar=J();function Qar(r){return r===0&&1/r===$ar}f9.exports=Qar});var Ts=u((vMr,c9)=>{"use strict";var Kar=l9();c9.exports=Kar});var Ls=u((fMr,p9)=>{"use strict";var rur=2.5066282746310007;p9.exports=rur});var m9=u((lMr,g9)=>{"use strict";var eur=Ar();function tur(r){return eur(r/2)}g9.exports=tur});var jn=u((cMr,q9)=>{"use strict";var iur=m9();q9.exports=iur});var d9=u((pMr,h9)=>{"use strict";var y9=jn();function nur(r){return r>0?y9(r-1):y9(r+1)}h9.exports=nur});var Is=u((gMr,w9)=>{"use strict";var aur=d9();w9.exports=aur});var E9=u((mMr,b9)=>{"use strict";var uur=Math.sqrt;b9.exports=uur});var G=u((qMr,N9)=>{"use strict";var sur=E9();N9.exports=sur});var O9=u((yMr,A9)=>{"use strict";var our=lt(),Ps;our===!0?Ps=0:Ps=1;A9.exports=Ps});var T9=u((hMr,S9)=>{"use strict";var vur=or(),fur=lr(),lur=O9(),Rs=new fur(1),cur=new vur(Rs.buffer);function pur(r,e){return Rs[0]=r,cur[lur]=e>>>0,Rs[0]}S9.exports=pur});var pt=u((dMr,L9)=>{"use strict";var gur=T9();L9.exports=gur});var P9=u((wMr,I9)=>{"use strict";function mur(r){return r|0}I9.exports=mur});var _s=u((bMr,R9)=>{"use strict";var qur=P9();R9.exports=qur});var M9=u((EMr,F9)=>{"use strict";var _9=Is(),yur=Sn(),hur=J(),Vn=j();function dur(r,e){return e===hur?Vn:e===Vn?0:e>0?_9(e)?r:0:_9(e)?yur(Vn,r):Vn}F9.exports=dur});var B9=u((NMr,x9)=>{"use strict";var wur=cr(),bur=2147483647,Eur=1072693247,Gn=1e300,Un=1e-300;function Nur(r,e){var t,i;return i=wur(r),t=i&bur,t<=Eur?e<0?Gn*Gn:Un*Un:e>0?Gn*Gn:Un*Un}x9.exports=Nur});var V9=u((AMr,j9)=>{"use strict";var Aur=$(),C9=j();function Our(r,e){return r===-1?(r-r)/(r-r):r===1?1:Aur(r)<1==(e===C9)?0:C9}j9.exports=Our});var U9=u((OMr,G9)=>{"use strict";function Sur(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}G9.exports=Sur});var D9=u((SMr,k9)=>{"use strict";var Tur=cr(),Wn=pt(),W9=xt(),Lur=Se(),Iur=U9(),Pur=1048575,H9=1048576,Rur=1072693248,_ur=536870912,Fur=524288,Mur=20,xur=9007199254740992,Bur=.9617966939259756,Cur=.9617967009544373,jur=-7028461650952758e-24,Vur=[1,1.5],Gur=[0,.5849624872207642],Uur=[0,1350039202129749e-23];function Wur(r,e,t){var i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N,C,O,k,nr,W;return k=0,t<H9&&(e*=xur,k-=53,t=Tur(e)),k+=(t>>Mur)-Lur|0,nr=t&Pur|0,t=nr|Rur|0,nr<=235662?W=0:nr<767610?W=1:(W=0,k+=1,t-=H9),e=W9(e,t),l=Vur[W],C=e-l,O=1/(e+l),n=C*O,s=Wn(n,0),i=(t>>1|_ur)+Fur,i+=W<<18,v=W9(0,i),f=e-(v-l),o=O*(C-s*v-s*f),a=n*n,N=a*a*Iur(a),N+=o*(s+n),a=s*s,v=3+a+N,v=Wn(v,0),f=N-(v-3-a),C=s*v,O=o*v+f*n,p=C+O,p=Wn(p,0),q=O-(p-C),y=Cur*p,m=jur*p+q*Bur+Uur[W],c=Gur[W],E=k,g=y+m+c+E,g=Wn(g,0),h=m-(g-E-c-y),r[0]=g,r[1]=h,r}k9.exports=Wur});var J9=u((TMr,X9)=>{"use strict";function Hur(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}X9.exports=Hur});var Y9=u((LMr,z9)=>{"use strict";var kur=pt(),Dur=J9(),Xur=1.4426950408889634,Jur=1.4426950216293335,zur=19259629911266175e-24;function Yur(r,e){var t,i,n,a,s,o;return n=e-1,a=n*n*Dur(n),s=Jur*n,o=n*zur-a*Xur,i=s+o,i=kur(i,0),t=o-(i-s),r[0]=i,r[1]=t,r}z9.exports=Yur});var Hn=u((IMr,Z9)=>{"use strict";var Zur=.6931471805599453;Z9.exports=Zur});var Q9=u((PMr,$9)=>{"use strict";function $ur(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}$9.exports=$ur});var am=u((RMr,nm)=>{"use strict";var Qur=cr(),K9=xt(),Kur=pt(),r0r=_s(),e0r=Tn(),t0r=Hn(),rm=Se(),i0r=Q9(),em=2147483647,tm=1048575,im=1048576,n0r=1071644672,Bi=20,a0r=.6931471824645996,u0r=-1904654299957768e-24;function s0r(r,e,t){var i,n,a,s,o,v,f,l,c,p,q;return p=r&em|0,q=(p>>Bi)-rm|0,c=0,p>n0r&&(c=r+(im>>q+1)>>>0,q=((c&em)>>Bi)-rm|0,i=(c&~(tm>>q))>>>0,a=K9(0,i),c=(c&tm|im)>>Bi-q>>>0,r<0&&(c=-c),e-=a),a=t+e,a=Kur(a,0),o=a*a0r,v=(t-(a-e))*t0r+a*u0r,l=o+v,f=v-(l-o),a=l*l,n=l-a*i0r(a),s=l*n/(n-2)-(f+l*f),l=1-(s-l),r=Qur(l),r=r0r(r),r+=c<<Bi>>>0,r>>Bi<=0?l=e0r(l,c):l=K9(l,r),l}nm.exports=s0r});var qm=u((_Mr,mm)=>{"use strict";var um=b(),sm=Is(),om=Oe(),o0r=Ar(),vm=G(),v0r=$(),Fs=On(),f0r=pt(),fm=_s(),l0r=J(),c0r=j(),p0r=M9(),g0r=B9(),m0r=V9(),q0r=D9(),y0r=Y9(),h0r=am(),Ms=2147483647,d0r=1072693247,w0r=1105199104,b0r=1139802112,lm=1083179008,E0r=1072693248,N0r=1083231232,A0r=3230714880>>>0,cm=31,Le=1e300,Ie=1e-300,O0r=8008566259537294e-32,zr=[0,0],pm=[0,0];function gm(r,e){var t,i,n,a,s,o,v,f,l,c,p,q,y,m,g,h;if(um(r)||um(e))return NaN;if(Fs(zr,e),o=zr[0],v=zr[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return vm(r);if(e===-.5)return 1/vm(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(om(e))return m0r(r,e)}if(Fs(zr,r),a=zr[0],s=zr[1],s===0){if(a===0)return p0r(r,e);if(r===1)return 1;if(r===-1&&sm(e))return-1;if(om(r))return r===l0r?gm(-0,-e):e<0?0:c0r}if(r<0&&o0r(e)===!1)return(r-r)/(r-r);if(n=v0r(r),t=a&Ms|0,i=o&Ms|0,f=a>>>cm|0,l=o>>>cm|0,f&&sm(e)?f=-1:f=1,i>w0r){if(i>b0r)return g0r(r,e);if(t<d0r)return l===1?f*Le*Le:f*Ie*Ie;if(t>E0r)return l===0?f*Le*Le:f*Ie*Ie;y=y0r(pm,n)}else y=q0r(pm,n,t);if(c=f0r(e,0),q=(e-c)*y[0]+e*y[1],p=c*y[0],m=q+p,Fs(zr,m),g=fm(zr[0]),h=fm(zr[1]),g>=lm){if((g-lm|h)!==0||q+O0r>m-p)return f*Le*Le}else if((g&Ms)>=N0r&&((g-A0r|h)!==0||q<=m-p))return f*Ie*Ie;return m=h0r(g,p,q),f*m}mm.exports=gm});var Q=u((FMr,ym)=>{"use strict";var S0r=qm();ym.exports=S0r});var dm=u((MMr,hm)=>{"use strict";function T0r(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}hm.exports=T0r});var bm=u((xMr,wm)=>{"use strict";var L0r=Tn(),I0r=dm();function P0r(r,e,t){var i,n,a,s;return i=r-e,n=i*i,a=i-n*I0r(n),s=1-(e-i*a/(2-a)-r),L0r(s,t)}wm.exports=P0r});var Tm=u((BMr,Sm)=>{"use strict";var R0r=b(),Em=Nn(),_0r=J(),Nm=j(),F0r=bm(),M0r=.6931471803691238,x0r=19082149292705877e-26,Am=1.4426950408889634,B0r=709.782712893384,C0r=-745.1332191019411,Om=1/(1<<28),j0r=-Om;function V0r(r){var e,t,i;return R0r(r)||r===Nm?r:r===_0r?0:r>B0r?Nm:r<C0r?0:r>j0r&&r<Om?1+r:(r<0?i=Em(Am*r-.5):i=Em(Am*r+.5),e=r-i*M0r,t=i*x0r,F0r(e,t,i))}Sm.exports=V0r});var sr=u((CMr,Lm)=>{"use strict";var G0r=Tm();Lm.exports=G0r});var Pm=u((jMr,Im)=>{"use strict";function U0r(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}Im.exports=U0r});var Fm=u((VMr,_m)=>{"use strict";var W0r=Ls(),Rm=Q(),H0r=sr(),k0r=Pm(),D0r=143.01608;function X0r(r){var e,t,i;return e=1/r,e=1+e*k0r(e),t=H0r(r),r>D0r?(i=Rm(r,.5*r-.25),t=i*(i/t)):t=Rm(r,r-.5)/t,W0r*t*e}_m.exports=X0r});var xm=u((GMr,Mm)=>{"use strict";var J0r=.5772156649015329;Mm.exports=J0r});var Cm=u((UMr,Bm)=>{"use strict";var z0r=xm();function Y0r(r,e){return e/((1+z0r*r)*r)}Bm.exports=Y0r});var Vm=u((WMr,jm)=>{"use strict";function Z0r(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}jm.exports=Z0r});var Jm=u((HMr,Xm)=>{"use strict";var $0r=b(),Q0r=Ar(),K0r=Ts(),Gm=$(),rsr=K(),esr=Ri(),Um=j(),Wm=J(),Hm=Gr(),km=Fm(),Dm=Cm(),tsr=Vm();function isr(r){var e,t,i,n;if(Q0r(r)&&r<0||r===Wm||$0r(r))return NaN;if(r===0)return K0r(r)?Wm:Um;if(r>171.61447887182297)return Um;if(r<-170.5674972726612)return 0;if(t=Gm(r),t>33)return r>=0?km(r):(i=rsr(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*esr(Hm*n),e*Hm/(Gm(n)*km(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return Dm(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return Dm(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*tsr(r))}Xm.exports=isr});var Ct=u((kMr,zm)=>{"use strict";var nsr=Jm();zm.exports=nsr});var xs=u((DMr,Ym)=>{"use strict";var asr=14901161193847656e-24;Ym.exports=asr});var $m=u((XMr,Zm)=>{"use strict";var usr=17976931348623157e292;Zm.exports=usr});var kn=u((JMr,Qm)=>{"use strict";var ssr=709.782712893384;Qm.exports=ssr});var rq=u((zMr,Km)=>{"use strict";var osr=sr();function vsr(r,e){var t,i,n,a;if(n=osr(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}Km.exports=vsr});var tq=u((YMr,eq)=>{"use strict";function fsr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}eq.exports=fsr});var nq=u((ZMr,iq)=>{"use strict";function lsr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}iq.exports=lsr});var uq=u(($Mr,aq)=>{"use strict";function csr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}aq.exports=csr});var oq=u((QMr,sq)=>{"use strict";function psr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}sq.exports=psr});var fq=u((KMr,vq)=>{"use strict";function gsr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}vq.exports=gsr});var cq=u((rxr,lq)=>{"use strict";function msr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}lq.exports=msr});var gq=u((exr,pq)=>{"use strict";function qsr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}pq.exports=qsr});var qq=u((txr,mq)=>{"use strict";function ysr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}mq.exports=ysr});var wq=u((ixr,dq)=>{"use strict";var hsr=b(),yq=sr(),dsr=pt(),wsr=j(),bsr=J(),Esr=tq(),Nsr=nq(),Asr=uq(),Osr=oq(),Ssr=fq(),Tsr=cq(),Lsr=gq(),Isr=qq(),Dn=1e-300,Psr=13877787807814457e-33,hq=.8450629115104675,Rsr=.12837916709551256,_sr=1,Fsr=-.0023621185607526594,Msr=1,xsr=-.009864944034847148,Bsr=1,Csr=-.0098649429247001,jsr=1;function Vsr(r){var e,t,i,n,a,s,o,v;if(hsr(r))return NaN;if(r===wsr)return 0;if(r===bsr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<Psr?1-r:(i=r*r,n=Rsr+i*Esr(i),a=_sr+i*Nsr(i),s=n/a,r<.25?1-(r+r*s):(n=r*s,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=Fsr+a*Asr(a),v=Msr+a*Osr(a),e?1+hq+o/v:1-hq-o/v;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=xsr+a*Ssr(a),a=Bsr+a*Tsr(a);else{if(r<-6)return 2-Dn;n=Csr+a*Lsr(a),a=jsr+a*Isr(a)}return i=dsr(t,0),n=yq(-(i*i)-.5625)*yq((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-Dn:Dn*Dn}dq.exports=Vsr});var Bs=u((nxr,bq)=>{"use strict";var Gsr=wq();bq.exports=Gsr});var Aq=u((axr,Nq)=>{"use strict";var Usr=Bs(),Eq=G(),Wsr=sr(),Hsr=Gr();function ksr(r,e){var t,i,n,a,s;if(a=Usr(Eq(e)),a!==0&&r>1){for(i=Wsr(-e)/Eq(Hsr*e),i*=e,t=.5,i/=t,n=i,s=2;s<r;++s)i/=s-t,i*=e,n+=i;a+=n}return a}Nq.exports=ksr});var Cs=u((uxr,Oq)=>{"use strict";var Dsr=-708.3964185322641;Oq.exports=Dsr});var Iq=u((sxr,Lq)=>{"use strict";var jt=sr(),Xn=Q(),Xsr=B(),Sq=kn(),Tq=Cs();function Jsr(r,e){var t,i;return i=r*Xsr(e),e>=1?i<Sq&&-e>Tq?t=Xn(e,r)*jt(-e):r>=1?t=Xn(e/jt(e/r),r):t=jt(i-e):i>Tq?t=Xn(e,r)*jt(-e):e/r<Sq?t=Xn(e/jt(e/r),r):t=jt(i-e),t}Lq.exports=Jsr});var js=u((oxr,Pq)=>{"use strict";function zsr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Pq.exports=zsr});var _q=u((vxr,Rq)=>{"use strict";var Ysr=js();function Zsr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new Function(e)();function a(s){return Ysr(r,s)}}Rq.exports=Zsr});var xq=u((fxr,Mq)=>{"use strict";var $sr=w(),Fq=js(),Qsr=_q();$sr(Fq,"factory",Qsr);Mq.exports=Fq});var Pe=u((lxr,Bq)=>{"use strict";var Ksr=6.283185307179586;Bq.exports=Ksr});var jq=u((cxr,Cq)=>{"use strict";function ror(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}Cq.exports=ror});var Gq=u((pxr,Vq)=>{"use strict";function eor(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}Vq.exports=eor});var Wq=u((gxr,Uq)=>{"use strict";function tor(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}Uq.exports=tor});var kq=u((mxr,Hq)=>{"use strict";function ior(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}Hq.exports=ior});var Xq=u((qxr,Dq)=>{"use strict";function nor(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}Dq.exports=nor});var zq=u((yxr,Jq)=>{"use strict";function aor(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}Jq.exports=aor});var Zq=u((hxr,Yq)=>{"use strict";function uor(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}Yq.exports=uor});var Qq=u((dxr,$q)=>{"use strict";function sor(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}$q.exports=sor});var ry=u((wxr,Kq)=>{"use strict";function oor(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Kq.exports=oor});var ty=u((bxr,ey)=>{"use strict";var vor=xq(),lor=Bs(),Vs=G(),cor=sr(),por=B(),gor=Pe(),mor=jq(),qor=Gq(),yor=Wq(),hor=kq(),dor=Xq(),wor=zq(),bor=Zq(),Eor=Qq(),Nor=ry(),Fr=[0,0,0,0,0,0,0,0,0,0];function Aor(r,e){var t,i,n,a,s;return i=(e-r)/r,n=-por(1+i)+i,a=r*n,s=Vs(2*n),e<r&&(s=-s),Fr[0]=mor(s),Fr[1]=qor(s),Fr[2]=yor(s),Fr[3]=hor(s),Fr[4]=dor(s),Fr[5]=wor(s),Fr[6]=bor(s),Fr[7]=Eor(s),Fr[8]=Nor(s),Fr[9]=-.0005967612901927463,t=vor(Fr,1/r),t*=cor(-a)/Vs(gor*r),e<r&&(t=-t),t+=lor(Vs(a))/2,t}ey.exports=Aor});var ny=u((Exr,iy)=>{"use strict";var Oor=eval;iy.exports=Oor});var uy=u((Nxr,ay)=>{"use strict";var Sor=ny();function Tor(){var r;try{Sor('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}ay.exports=Tor});var Gs=u((Axr,sy)=>{"use strict";var Lor=uy();sy.exports=Lor});var Vt=u((Oxr,oy)=>{"use strict";var Ior=2220446049250313e-31;oy.exports=Ior});var fy=u((Sxr,vy)=>{"use strict";var Jn=$(),Por=Vt(),Ror=1e6;function _or(r,e){var t,i,n,a,s,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||Por,a=o.maxTerms||Ror,s=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(s+=n,Jn(i*s)>=Jn(n)||--a===0)break}else do n=r(),s+=n;while(Jn(i*s)<Jn(n)&&--a);return s}vy.exports=_or});var py=u((Txr,cy)=>{"use strict";var ly=$(),For=Vt(),Mor=1e6;function xor(r,e){var t,i,n,a,s;s={},arguments.length>1&&(s=e),t=s.tolerance||For,n=s.maxTerms||Mor,a=s.initialValue||0;do i=r(),a+=i;while(ly(t*a)<ly(i)&&--n);return a}cy.exports=xor});var Ws=u((Lxr,gy)=>{"use strict";var Bor=Gs(),Cor=fy(),jor=py(),Us;Bor()?Us=Cor:Us=jor;gy.exports=Us});var qy=u((Ixr,my)=>{"use strict";function Vor(r,e){var t=1,i=r,n=e;return a;function a(){var s=t;return i+=1,t*=n/i,s}}my.exports=Vor});var hy=u((Pxr,yy)=>{"use strict";var Gor=Ws(),Uor=qy();function Wor(r,e,t){var i,n;return t=t||0,n=Uor(r,e),i=Gor(n,{initialValue:t}),i}yy.exports=Wor});var wy=u((Rxr,dy)=>{"use strict";function Hor(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}dy.exports=Hor});var Ey=u((_xr,by)=>{"use strict";var kor=wy();by.exports=kor});var Ay=u((Fxr,Ny)=>{"use strict";var Dor=Ey();Ny.exports=Dor});var Sy=u((Mxr,Oy)=>{"use strict";function Xor(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}Oy.exports=Xor});var Ry=u((xxr,Py)=>{"use strict";var Jor=b(),Ty=cr(),Ly=xt(),zor=j(),Yor=J(),Iy=Se(),Zor=Sy(),Hs=.6931471803691238,ks=19082149292705877e-26,$or=.41421356237309503,Qor=-.2928932188134525,Kor=1862645149230957e-24,rvr=5551115123125783e-32,evr=9007199254740992,tvr=.6666666666666666;function ivr(r){var e,t,i,n,a,s,o,v,f,l;if(r<-1||Jor(r))return NaN;if(r===-1)return Yor;if(r===zor||r===0)return r;if(r<0?i=-r:i=r,l=1,i<$or){if(i<Kor)return i<rvr?r:r-r*r*.5;r>Qor&&(l=0,n=r,t=1)}return l!==0&&(i<evr?(f=1+r,t=Ty(f),l=(t>>20)-Iy,l>0?a=1-(f-r):a=r-(f-1),a/=f):(f=r,t=Ty(f),l=(t>>20)-Iy,a=0),t&=1048575,t<434334?f=Ly(f,t|1072693248):(l+=1,f=Ly(f,t|1071644672),t=1048576-t>>2),n=f-1),e=.5*n*n,t===0?n===0?(a+=l*ks,l*Hs+a):(v=e*(1-tvr*n),l*Hs-(v-(l*ks+a)-n)):(s=n/(2+n),o=s*s,v=o*Zor(o),l===0?n-(e-s*(e+v)):l*Hs-(e-(s*(e+v)+(l*ks+a))-n))}Py.exports=ivr});var Gt=u((Bxr,_y)=>{"use strict";var nvr=Ry();_y.exports=nvr});var My=u((Cxr,Fy)=>{"use strict";var avr=j();function uvr(r){return r===0&&1/r===avr}Fy.exports=uvr});var Re=u((jxr,xy)=>{"use strict";var svr=My();xy.exports=svr});var jy=u((Vxr,Cy)=>{"use strict";var By=Re(),Ds=b(),ovr=J(),zn=j();function vvr(r,e){var t,i,n,a;if(t=arguments.length,t===2)return Ds(r)||Ds(e)?NaN:r===zn||e===zn?zn:r===e&&r===0?By(r)?r:e:r>e?r:e;for(i=ovr,a=0;a<t;a++){if(n=arguments[a],Ds(n)||n===zn)return n;(n>i||n===i&&n===0&&By(n))&&(i=n)}return i}Cy.exports=vvr});var Xs=u((Gxr,Vy)=>{"use strict";var fvr=jy();Vy.exports=fvr});var Wy=u((Uxr,Uy)=>{"use strict";var Gy=Ts(),Js=b(),Yn=J(),lvr=j();function cvr(r,e){var t,i,n,a;if(t=arguments.length,t===2)return Js(r)||Js(e)?NaN:r===Yn||e===Yn?Yn:r===e&&r===0?Gy(r)?r:e:r<e?r:e;for(i=lvr,a=0;a<t;a++){if(n=arguments[a],Js(n)||n===Yn)return n;(n<i||n===i&&n===0&&Gy(n))&&(i=n)}return i}Uy.exports=cvr});var ky=u((Wxr,Hy)=>{"use strict";var pvr=Wy();Hy.exports=pvr});var Xy=u((Hxr,Dy)=>{"use strict";var gvr=10.900511;Dy.exports=gvr});var zs=u((kxr,Jy)=>{"use strict";var mvr=2.718281828459045;Jy.exports=mvr});var Zy=u((Dxr,Yy)=>{"use strict";var qvr=Ay(),yvr=xi(),hvr=Ct(),dvr=Gt(),wvr=G(),bvr=$(),_e=sr(),Ci=Q(),Ys=Xs(),Zs=ky(),zy=B(),Zn=kn(),ji=Cs(),$s=Xy(),Evr=zs();function Nvr(r,e){var t,i,n,a,s,o,v;return n=r+$s-.5,v=(e-r-$s+.5)/n,r<1?e<=ji?_e(r*zy(e)-e-yvr(r)):Ci(e,r)*_e(-e)/hvr(r):(bvr(v*v*r)<=100&&r>150?(t=r*(dvr(v)-v)+e*(.5-$s)/n,t=_e(t)):(a=r*zy(e/n),s=r-e,Zs(a,s)<=ji||Ys(a,s)>=Zn?(i=s/r,Zs(a,s)/2>ji&&Ys(a,s)/2<Zn?(o=Ci(e/n,r/2)*_e(s/2),t=o*o):Zs(a,s)/4>ji&&Ys(a,s)/4<Zn&&e>r?(o=Ci(e/n,r/4)*_e(s/4),t=o*o,t*=t):i>ji&&i<Zn?t=Ci(e*_e(i)/n,r):t=_e(a+s)):t=Ci(e/n,r)*_e(s)),t*=wvr(n/Evr)/qvr(r),t)}Yy.exports=Nvr});var Qy=u((Xxr,$y)=>{"use strict";var Avr=.34657359027997264;$y.exports=Avr});var rh=u((Jxr,Ky)=>{"use strict";function Ovr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}Ky.exports=Ovr});var nh=u((zxr,ih)=>{"use strict";var Svr=b(),Qs=cr(),$n=xt(),eh=j(),Tvr=J(),Lvr=Se(),Ivr=Qy(),Pvr=rh(),Rvr=709.782712893384,Ks=.6931471803691238,ro=19082149292705877e-26,th=1.4426950408889634,_vr=38.816242111356935,Fvr=1.0397207708399179;function Mvr(r){var e,t,i,n,a,s,o,v,f,l,c,p;if(r===eh||Svr(r))return r;if(r===Tvr)return-1;if(r===0)return r;if(r<0?(t=!0,o=-r):(t=!1,o=r),o>=_vr){if(t)return-1;if(o>=Rvr)return eh}if(a=Qs(o)|0,o>Ivr)o<Fvr?t?(i=r+Ks,n=-ro,p=-1):(i=r-Ks,n=ro,p=1):(t?p=th*r-.5:p=th*r+.5,p|=0,l=p,i=r-l*Ks,n=l*ro),r=i-n,f=i-r-n;else{if(a<1016070144)return r;p=0}return e=.5*r,v=r*e,s=1+v*Pvr(v),l=3-s*e,c=v*((s-l)/(6-r*l)),p===0?r-(r*c-v):(c=r*(c-f)-f,c-=v,p===-1?.5*(r-c)-.5:p===1?r<-.25?-2*(c-(r+.5)):1+2*(r-c):p<=-2||p>56?(o=1-(c-r),i=Qs(o)+(p<<20)|0,o=$n(o,i),o-1):(l=1,p<20?(i=1072693248-(2097152>>p)|0,l=$n(l,i),o=l-(c-r)):(i=Lvr-p<<20|0,l=$n(l,i),o=r-(c+l),o+=1),i=Qs(o)+(p<<20)|0,$n(o,i)))}ih.exports=Mvr});var eo=u((Yxr,ah)=>{"use strict";var xvr=nh();ah.exports=xvr});var vh=u((Zxr,oh)=>{"use strict";var uh=b(),sh=$(),Bvr=eo(),Cvr=B(),jvr=Q(),Vvr=Nn();function Gvr(r,e){var t;if(uh(r)||uh(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((sh(e*(r-1))<.5||sh(e)<.2)&&(t=Cvr(r)*e,t<.5))return Bvr(t)}else if(Vvr(e)!==e)return NaN;return jvr(r,e)-1}oh.exports=Gvr});var lh=u(($xr,fh)=>{"use strict";var Uvr=vh();fh.exports=Uvr});var ph=u((Qxr,ch)=>{"use strict";function Wvr(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}ch.exports=Wvr});var mh=u((Kxr,gh)=>{"use strict";function Hvr(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}gh.exports=Hvr});var yh=u((rBr,qh)=>{"use strict";function kvr(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}qh.exports=kvr});var dh=u((eBr,hh)=>{"use strict";var to=B(),Dvr=Vt(),Xvr=ph(),Jvr=mh(),zvr=yh(),Yvr=.15896368026733398,Zvr=.5281534194946289,$vr=.45201730728149414;function Qvr(r,e,t){var i,n,a,s;if(r<Dvr)return-to(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=to(r);while(r>=3);t=r-2}return a=t*(r+1),s=Xvr(t),n+=a*Yvr+a*s,n}return r<1&&(n+=-to(r),t=e,e=r,r+=1),r<=1.5?(a=Jvr(e),i=e*t,n+=i*Zvr+i*a,n):(a=t*e,s=zvr(-t),n+=a*$vr+a*s,n)}hh.exports=Qvr});var Ah=u((tBr,Nh)=>{"use strict";var wh=Ct(),bh=eo(),Kvr=Gt(),r1r=b(),Eh=dh();function e1r(r){return r1r(r)?NaN:r<0?r<-.5?wh(1+r)-1:bh(-Kvr(r)+Eh(r+2,r+1,r)):r<2?bh(Eh(r+1,r,r-1)):wh(1+r)-1}Nh.exports=e1r});var Sh=u((iBr,Oh)=>{"use strict";var t1r=Ah();Oh.exports=t1r});var Lh=u((nBr,Th)=>{"use strict";function i1r(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,s;function s(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}Th.exports=i1r});var Ph=u((aBr,Ih)=>{"use strict";var n1r=lh(),a1r=Ws(),u1r=Sh(),s1r=Lh();function o1r(r,e,t){var i,n,a,s,o;return n=u1r(r),a=(n+1)/r,s=n1r(e,r),n-=s,n/=r,o=s1r(r,e),s+=1,i=t?a:0,n=-s*a1r(o,{initialValue:(i-n)/s}),t&&(n=-n),[n,a]}Ih.exports=o1r});var io=u((uBr,Rh)=>{"use strict";var v1r=11754943508222875e-54;Rh.exports=v1r});var Fh=u((sBr,_h)=>{"use strict";var Qn=$(),Ur=io(),f1r=Vt(),l1r=1e6;function c1r(r,e,t){var i,n,a,s,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),s=f[1],a=f[0],s===0&&(s=Ur),o=s,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=Ur),o=f[1]+f[0]/o,o===0&&(o=Ur),v=1/v,n=o*v,s*=n);while(Qn(n-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=Ur),o=f[1]+f[0]/o,o===0&&(o=Ur),v=1/v,n=o*v,s*=n);while(f&&Qn(n-1)>e&&--t);return a/s}function p1r(r,e,t){var i,n,a,s,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),a=v[1],a===0&&(a=Ur),s=a,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=Ur),s=v[1]+v[0]/s,s===0&&(s=Ur),o=1/o,n=s*o,a*=n);while(v&&Qn(n-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=Ur),s=v[1]+v[0]/s,s===0&&(s=Ur),o=1/o,n=s*o,a*=n);while(v&&Qn(n-1)>e&&--t);return a}function g1r(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||l1r,n=i.tolerance||f1r,i.keep?p1r(r,n,t):c1r(r,n,t)}_h.exports=g1r});var Bh=u((oBr,xh)=>{"use strict";var Mh=$(),m1r=Vt(),Ut=io(),q1r=1e6;function y1r(r,e,t){var i,n,a,s,o,v;v=r(),o=v[1],n=v[0],o===0&&(o=Ut),a=o,s=0;do v=r(),v&&(s=v[1]+v[0]*s,s===0&&(s=Ut),a=v[1]+v[0]/a,a===0&&(a=Ut),s=1/s,i=a*s,o*=i);while(v&&Mh(i-1)>e&&--t);return n/o}function h1r(r,e,t){var i,n,a,s,o;o=r(),s=o[1],s===0&&(s=Ut),n=s,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=Ut),n=o[1]+o[0]/n,n===0&&(n=Ut),a=1/a,i=n*a,s*=i);while(o&&Mh(i-1)>e&&--t);return s}function d1r(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||m1r,t=i.maxIter||q1r,i.keep?h1r(r,n,t):y1r(r,n,t)}xh.exports=d1r});var jh=u((vBr,Ch)=>{"use strict";var w1r=Gs(),b1r=Fh(),E1r=Bh(),no;w1r()?no=b1r:no=E1r;Ch.exports=no});var Gh=u((fBr,Vh)=>{"use strict";function N1r(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}Vh.exports=N1r});var Wh=u((lBr,Uh)=>{"use strict";var A1r=jh(),O1r=Gh();function S1r(r,e){var t=O1r(r,e);return 1/(e-r+1+A1r(t))}Uh.exports=S1r});var Qh=u((cBr,$h)=>{"use strict";var T1r=xi(),L1r=K(),Vi=Ct(),Hh=$(),I1r=sr(),kh=Q(),Mr=B(),P1r=xs(),Dh=$m(),R1r=Ls(),Xh=kn(),_1r=j(),F1r=rq(),M1r=Aq(),Jh=Iq(),x1r=ty(),ao=hy(),zh=Zy(),B1r=Ph(),Yh=Wh(),C1r=170;function Zh(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,E;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,c=i,p=0,e>=C1r&&!a)return c&&e*4<r?(p=e*Mr(r)-r,p+=Mr(Yh(e,r))):!c&&e>4*r?(p=e*Mr(r)-r,o=0,p+=Mr(ao(e,r,o)/e)):(p=Zh(e,r,!0,c),p===0?c?(p=1+1/(12*e)+1/(288*e*e),p=Mr(p)-e+(e-.5)*Mr(e),p+=Mr(R1r)):(p=e*Mr(r)-r,o=0,p+=Mr(ao(e,r,o)/e)):p=Mr(p)+T1r(e)),p>Xh?_1r:I1r(p);switch(l=e<30&&e<=r+1&&r<Xh,l?(h=L1r(e),q=h===e,v=q?!1:Hh(h-e)===.5):q=v=!1,q&&r>.6?(c=!c,s=0):v&&r>.2?(c=!c,s=1):r<P1r&&e>1?s=6:r<.5?-.4/Mr(r)<e?s=2:s=3:r<1.1?r*.75<e?s=2:s=3:(f=!1,a&&e>20&&(y=Hh((r-e)/e),e>200?20/e>y*y&&(f=!0):y<.4&&(f=!0)),f?s=5:r-1/(3*r)<e?s=2:(s=4,c=!c)),s){case 0:p=F1r(e,r),a===!1&&(p*=Vi(e));break;case 1:p=M1r(e,r),a===!1&&(p*=Vi(e));break;case 2:p=a?zh(e,r):Jh(e,r),p!==0&&(o=0,n=!1,c&&(o=a?1:Vi(e),a||p>=1||Dh*p>o?(o/=p,a||e<1||Dh/e>o?(o*=-e,n=!0):o=0):o=0)),p*=ao(e,r,o)/e,n&&(c=!1,p=-p);break;case 3:c=!c,g=B1r(e,r,c),p=g[0],E=g[1],c=!1,a&&(p/=E);break;case 4:p=a?zh(e,r):Jh(e,r),p!==0&&(p*=Yh(e,r));break;case 5:p=x1r(e,r),r>=e&&(c=!c);break;case 6:p=a?kh(r,e)/Vi(e+1):kh(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),c&&(m=a?1:Vi(e),p=m-p),p}$h.exports=Zh});var uo=u((pBr,Kh)=>{"use strict";var j1r=Qh();Kh.exports=j1r});var ed=u((gBr,rd)=>{"use strict";var V1r=uo(),so=b(),G1r=j();function U1r(r,e,t){return so(r)||so(e)||so(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===G1r?1:V1r(r*t,e)}rd.exports=U1r});var id=u((mBr,td)=>{"use strict";function W1r(r){return e;function e(){return r}}td.exports=W1r});var I=u((qBr,nd)=>{"use strict";var H1r=id();nd.exports=H1r});var sd=u((yBr,ud)=>{"use strict";var ad=b();function k1r(r,e){return ad(r)||ad(e)?NaN:r<e?0:1}ud.exports=k1r});var fd=u((hBr,vd)=>{"use strict";var D1r=I(),od=b();function X1r(r){if(od(r))return D1r(NaN);return e;function e(t){return od(t)?NaN:t<r?0:1}}vd.exports=X1r});var oo=u((dBr,cd)=>{"use strict";var J1r=w(),ld=sd(),z1r=fd();J1r(ld,"factory",z1r);cd.exports=ld});var md=u((wBr,gd)=>{"use strict";var Y1r=I(),Z1r=oo().factory,$1r=uo(),pd=b(),Q1r=j();function K1r(r,e){if(pd(r)||pd(e)||r<0||e<=0)return Y1r(NaN);if(r===0)return Z1r(0);return t;function t(i){return i<=0?0:i===Q1r?1:$1r(i*e,r)}}gd.exports=K1r});var vo=u((bBr,yd)=>{"use strict";var rfr=w(),qd=ed(),efr=md();rfr(qd,"factory",efr);yd.exports=qd});var dd=u((EBr,hd)=>{"use strict";var tfr=vo();function ifr(r,e){return tfr(r,e/2,.5)}hd.exports=ifr});var bd=u((NBr,wd)=>{"use strict";var nfr=vo().factory;function afr(r){return nfr(r/2,.5)}wd.exports=afr});var Ad=u((ABr,Nd)=>{"use strict";var ufr=w(),Ed=dd(),sfr=bd();ufr(Ed,"factory",sfr);Nd.exports=Ed});var Td=u((OBr,Sd)=>{"use strict";var ofr=T(),vfr=A(),ffr=sn(),Od=["values","indices","*"];function lfr(r,e){return ofr(e)?vfr(e,"returns")&&(r.returns=e.returns,ffr(Od,r.returns)===-1)?new TypeError('invalid option. `returns` option must be one of the following: "'+Od.join('", "')+'". Option: `'+r.returns+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}Sd.exports=lfr});var Id=u((SBr,Ld)=>{"use strict";var cfr=A();function pfr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),cfr(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}Ld.exports=pfr});var Rd=u((TBr,Pd)=>{"use strict";var gfr=A();function mfr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),gfr(t,n)?t[n].push(a):t[n]=[a];return t}Pd.exports=mfr});var Fd=u((LBr,_d)=>{"use strict";var qfr=A();function yfr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),qfr(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}_d.exports=yfr});var Bd=u((IBr,xd)=>{"use strict";var Md=_r(),hfr=Td(),dfr=Id(),wfr=Rd(),bfr=Fd();function Efr(r,e,t){var i,n,a;if(!Md(r))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+r+"`.");if(i={returns:"values"},arguments.length===2)a=e;else{if(n=hfr(i,e),n)throw n;a=t}if(!Md(a))throw new TypeError("invalid argument. Last argument must be a collection. Value: `"+a+"`.");if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?dfr(r,a):i.returns==="indices"?wfr(r,a):bfr(r,a)}xd.exports=Efr});var jd=u((PBr,Cd)=>{"use strict";var Nfr=Bd();Cd.exports=Nfr});var Gd=u((RBr,Vd)=>{"use strict";function Afr(r){var e,t,i,n,a,s;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)s=r[a],e=s-t,t+=e/(a+1),n+=e*(s-t);return n/(a-1)}Vd.exports=Afr});var Hd=u((_Br,Wd)=>{"use strict";var Ofr=fr(),Sfr=x().isPrimitive,Tfr=T(),Lfr=tr(),Ud=A();function Ifr(r,e){return Tfr(e)?Ud(e,"alpha")&&(r.alpha=e.alpha,!Sfr(r.alpha)||Lfr(r.alpha))?new TypeError("invalid option. `alpha` option must be a number primitive. Option: `"+r.alpha+"`."):Ud(e,"groups")&&(r.groups=e.groups,!Ofr(r.groups))?new TypeError("invalid option. `groups` option must be an array. Option: `"+r.groups+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}Wd.exports=Ifr});var fo=u((FBr,kd)=>{"use strict";var Pfr=Rr().isPrimitive;function Rfr(r){return Pfr(r)&&r>0}kd.exports=Rfr});var lo=u((MBr,Dd)=>{"use strict";var _fr=Rr().isObject;function Ffr(r){return _fr(r)&&r.valueOf()>0}Dd.exports=Ffr});var Jd=u((xBr,Xd)=>{"use strict";var Mfr=fo(),xfr=lo();function Bfr(r){return Mfr(r)||xfr(r)}Xd.exports=Bfr});var Yr=u((BBr,Yd)=>{"use strict";var zd=w(),co=Jd(),Cfr=fo(),jfr=lo();zd(co,"isPrimitive",Cfr);zd(co,"isObject",jfr);Yd.exports=co});var Kn=u((CBr,Zd)=>{"use strict";var Vfr=9007199254740991;Zd.exports=Vfr});var Qd=u((jBr,$d)=>{"use strict";var Gfr=308;$d.exports=Gfr});var rw=u((VBr,Kd)=>{"use strict";var Ufr=-308;Kd.exports=Ufr});var tw=u((GBr,ew)=>{"use strict";var Wfr=-324;ew.exports=Wfr});var vw=u((UBr,ow)=>{"use strict";var iw=b(),ra=Oe(),nw=Q(),Hfr=$(),aw=Es(),kfr=Kn(),uw=Qd(),Dfr=rw(),Xfr=tw(),Jfr=kfr+1,sw=1e308;function zfr(r,e){var t,i;return iw(r)||iw(e)||ra(e)?NaN:ra(r)||r===0||e<Xfr||Hfr(r)>Jfr&&e<=0?r:e>uw?0*r:e<Dfr?(t=nw(10,-(e+uw)),i=r*sw*t,ra(i)?r:aw(i)/sw/t):(t=nw(10,-e),i=r*t,ra(i)?r:aw(i)/t)}ow.exports=zfr});var lw=u((WBr,fw)=>{"use strict";var Yfr=vw();fw.exports=Yfr});var gw=u((HBr,pw)=>{"use strict";var Zfr=Yr(),$fr=T(),Qfr=ar().isPrimitive,cw=A(),po=lw();function Kfr(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!$fr(r))throw new TypeError("invalid argument. First argument must be an options object. Value: `"+r+"`.");if(cw(r,"digits")){if(!Zfr(r.digits))throw new TypeError("invalid option. `digits` option must be a positive integer. Option: `"+r.digits+"`.");t=r.digits}if(cw(r,"decision")){if(!Qfr(r.decision))throw new TypeError("invalid option. `decision` option must be a boolean primitive. Option: `"+r.decision+"`.");e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+po(this.pValue,-t)+`
`,i+="    statistic: "+po(this.statistic,-t)+`
`,i+="    df: "+po(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}pw.exports=Kfr});var yw=u((kBr,qw)=>{"use strict";var rlr=_r(),elr=T(),gt=a8(),tlr=Ei(),ilr=Ad(),nlr=jd(),mw=B(),alr=Gd(),ulr=Hd(),slr=gw();function olr(){var r,e,t,i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N;if(v=[],e=arguments.length,f={},elr(arguments[e-1])&&(r=arguments[e-1],e-=1,q=ulr(f,r),q))throw q;if(f.groups){if(n=nlr(arguments[0],f.groups),i=tlr(n),e=i.length,e<2)throw new Error("invalid number of groups. `groups` array must contain at least two unique elements. Value: `"+i+"`.");for(N=0;N<e;N++)v.push(n[i[N]])}else for(N=0;N<e;N++)v.push(arguments[N]);for(s=0,t=0,o=0,y=0,h=new Array(e),E=h.slice(),N=0;N<e;N++){if(p=v[N],!rlr(p))throw new TypeError("invalid argument. Must provide array-like arguments. Value: `"+p+"`.");if(p.length===0)throw new Error("invalid argument. Supplied arrays cannot be empty. Value: `"+p+"`.");h[N]=p.length-1,s+=h[N],t+=1/h[N],E[N]=alr(p),o+=h[N]*E[N],y+=h[N]*mw(E[N])}if(o/=s,f.alpha===void 0?a=.05:a=f.alpha,a<0||a>1)throw new RangeError("invalid argument. Option `alpha` must be a number in the range 0 to 1. Value: `"+a+"`.");return c=s*mw(o)-y,c/=1+(t-1/s)/(3*(e-1)),g=e-1,l=1-ilr(c,g),m={},gt(m,"rejected",l<=a),gt(m,"alpha",a),gt(m,"pValue",l),gt(m,"statistic",c),gt(m,"df",g),gt(m,"method","Bartlett's test of equal variances"),gt(m,"print",slr),m}qw.exports=olr});var dw=u((DBr,hw)=>{"use strict";var vlr=yw();hw.exports=vlr});var bw=u((XBr,ww)=>{"use strict";function flr(r){var e,t,i,n,a,s,o,v,f,l,c;if(v=r.length,t=[],v===0)return t;if(n=r[0],f=n.length,v===1){for(l=0;l<f;l++)t.push(n[l]);return t}for(e=[f],l=1;l<v;l++)e.push(r[l].length),e[l]>f&&(f=e[l]);for(l=0;l<f;l++)t.push(0);for(l=f-1;l>=0;){for(a=e[0]-f+l,a>=0?i=n[a]:i=1,c=1;c<v;c++){if(s=e[c]-f+l,s>=0?o=r[c][s]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[l]=i,l-=1}return t}ww.exports=flr});var Nw=u((JBr,Ew)=>{"use strict";var llr=bw();Ew.exports=llr});var ea=u((zBr,Aw)=>{"use strict";function clr(r){var e,t,i,n,a,s;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)e.push(n[s]);return e}Aw.exports=clr});var Sw=u((YBr,Ow)=>{"use strict";var plr=x().isPrimitive,glr=D().isPrimitive,mlr=ar().isPrimitive,qlr=fr(),ylr=Nw(),hlr=S(),dlr=ea(),wlr={number:plr,string:glr,boolean:mlr};function blr(r,e,t){var i,n,a,s,o,v,f,l,c,p;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],n=[],p=0;p<r.length;p++)if(c=r[p],o=e[p],l=wlr[o],l(c))n.push([c]),a.push([1,1]);else if(qlr(c))n.push(dlr(c)),a.push([c.length,c[0].length]);else throw new TypeError(hlr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[p],o,o,String(c)));if(s=ylr(a),s===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");for(i=[],p=0;p<a.length;p++)f=a[p],v=[],f[0]===1?v.push(0):v.push(f[1]),f[1]===1?v.push(0):v.push(1),i.push(v);return[n,s,i]}Ow.exports=blr});var Lw=u((ZBr,Tw)=>{"use strict";var go=b(),Elr=Re();function Nlr(r,e,t,i,n){var a,s,o,v,f;if(r<=0)return i;if(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,a=e[s],i[o]=a,o+=n,f=1,go(a)===!1)for(f;f<r;f++){if(s+=t,v=e[s],go(v)){a=v;break}(v>a||v===a&&Elr(v))&&(a=v),i[o]=a,o+=n}if(go(a))for(f;f<r;f++)i[o]=a,o+=n;return i}Tw.exports=Nlr});var Pw=u(($Br,Iw)=>{"use strict";var mo=b(),Alr=Re();function Olr(r,e,t,i,n,a,s){var o,v,f,l,c;if(r<=0)return n;if(v=i,f=s,o=e[v],n[f]=o,f+=a,c=1,mo(o)===!1)for(c;c<r;c++){if(v+=t,l=e[v],mo(l)){o=l;break}(l>o||l===o&&Alr(l))&&(o=l),n[f]=o,f+=a}if(mo(o))for(c;c<r;c++)n[f]=o,f+=a;return n}Iw.exports=Olr});var Fw=u((QBr,_w)=>{"use strict";var Slr=w(),Rw=Lw(),Tlr=Pw();Slr(Rw,"ndarray",Tlr);_w.exports=Rw});var xw=u((KBr,Mw)=>{"use strict";var Llr=Fw();Mw.exports=Llr});var jw=u((rCr,Cw)=>{"use strict";var Bw=ds();function Ilr(r,e,t){var i,n;if(e===1)return Bw(t,r);for(i=[],n=0;n<r;n++)i.push(Bw(t,e));return i}Cw.exports=Ilr});var Gw=u((eCr,Vw)=>{"use strict";function Plr(r,e,t){var i,n;for(i=[],n=0;n<r;n++)i.push(e.call(t,n));return i}Vw.exports=Plr});var Ww=u((tCr,Uw)=>{"use strict";var Rlr=Gw();Uw.exports=Rlr});var Dw=u((iCr,kw)=>{"use strict";var Hw=Ww();function _lr(r,e,t){var i,n;if(e===1)return Hw(r,t);for(i=[],n=0;n<r;n++)i.push(Hw(e,t));return i}kw.exports=_lr});var qo=u((nCr,Xw)=>{"use strict";var Flr=x().isPrimitive;function Mlr(r){return Flr(r)&&r>0}Xw.exports=Mlr});var yo=u((aCr,Jw)=>{"use strict";var xlr=x().isObject;function Blr(r){return xlr(r)&&r.valueOf()>0}Jw.exports=Blr});var Yw=u((uCr,zw)=>{"use strict";var Clr=qo(),jlr=yo();function Vlr(r){return Clr(r)||jlr(r)}zw.exports=Vlr});var U=u((sCr,$w)=>{"use strict";var Zw=w(),ho=Yw(),Glr=qo(),Ulr=yo();Zw(ho,"isPrimitive",Glr);Zw(ho,"isObject",Ulr);$w.exports=ho});var Kw=u((oCr,Qw)=>{"use strict";var Wlr=L();function Hlr(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&Wlr(r.next)}Qw.exports=Hlr});var eb=u((vCr,rb)=>{"use strict";var klr=Kw();rb.exports=klr});var ib=u((fCr,tb)=>{"use strict";function Dlr(r,e){return r[e]}tb.exports=Dlr});var ab=u((lCr,nb)=>{"use strict";function Xlr(r,e){return r.get(e)}nb.exports=Xlr});var sb=u((cCr,ub)=>{"use strict";function Jlr(r,e,t){r[e]=t}ub.exports=Jlr});var vb=u((pCr,ob)=>{"use strict";function zlr(r,e,t){r.set(t,e)}ob.exports=zlr});var lb=u((gCr,fb)=>{"use strict";var Ylr=ib(),Zlr=ab(),$lr=sb(),Qlr=vb();function Klr(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?Zlr:Ylr,setter:e?Qlr:$lr}}fb.exports=Klr});var mt=u((mCr,cb)=>{"use strict";var r2r=lb();cb.exports=r2r});var mb=u((qCr,gb)=>{"use strict";var pb=L(),e2r=_r(),t2r=eb(),i2r=mt();function n2r(){var r,e,t,i,n,a,s,o;if(r=arguments[0],arguments.length>1)if(e2r(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!pb(t))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+t+"`.");e=arguments[3]}}else{if(t=arguments[1],!pb(t))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+t+"`.");e=arguments[2]}if(!t2r(r))throw new TypeError("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(s=-1,i===void 0){if(i=[],t){for(;s+=1,o=r.next(),!o.done;)i.push(t.call(e,o.value,s));return i}for(;o=r.next(),!o.done;)i.push(o.value);return i}if(n=i.length,a=i2r(i).setter,t){for(;s<n-1&&(s+=1,o=r.next(),!o.done);)a(i,s,t.call(e,o.value,s));return i}for(;s<n-1&&(s+=1,o=r.next(),!o.done);)a(i,s,o.value);return i}gb.exports=n2r});var yb=u((yCr,qb)=>{"use strict";var a2r=mb();qb.exports=a2r});var db=u((hCr,hb)=>{"use strict";var u2r=A();function s2r(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"&&u2r(Symbol,"iterator")&&typeof Symbol.iterator=="symbol"}hb.exports=s2r});var ta=u((dCr,wb)=>{"use strict";var o2r=db();wb.exports=o2r});var Eb=u((wCr,bb)=>{"use strict";var v2r=ta(),f2r=v2r()?Symbol.iterator:null;bb.exports=f2r});var ia=u((bCr,Nb)=>{"use strict";var l2r=Eb();Nb.exports=l2r});var Ob=u((ECr,Ab)=>{"use strict";function c2r(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}Ab.exports=c2r});var Tb=u((NCr,Sb)=>{"use strict";function p2r(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}Sb.exports=p2r});var Pb=u((ACr,Ib)=>{"use strict";var g2r=cr(),Lb=pt(),m2r=Ob(),q2r=Tb(),y2r=.7853981633974483,h2r=3061616997868383e-32,d2r=.3333333333333341,w2r=2147483647;function b2r(r,e,t){var i,n,a,s,o,v,f,l,c;return i=g2r(r),n=i&w2r|0,n>=1072010280&&(r<0&&(r=-r,e=-e),c=y2r-r,l=h2r-e,r=c+l,e=0),c=r*r,l=c*c,s=m2r(l),f=c*q2r(l),o=c*r,s=e+c*(o*(s+f)+e),s+=d2r*o,l=r+s,n>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(l*l/(l+f)-s)))):t===1?l:(c=l,Lb(c,0),f=s-(c-r),a=-1/l,v=a,Lb(v,0),o=1+v*c,v+a*(o+v*f))}Ib.exports=b2r});var _b=u((OCr,Rb)=>{"use strict";var E2r=Pb();Rb.exports=E2r});var xb=u((SCr,Mb)=>{"use strict";var N2r=cr(),Fb=_b(),A2r=Bn(),wo=[0,0],O2r=2147483647,S2r=1072243195,T2r=2146435072,L2r=1044381696;function I2r(r){var e,t;return e=N2r(r),e&=O2r,e<=S2r?e<L2r?r:Fb(r,0,1):e>=T2r?NaN:(t=A2r(r,wo),Fb(wo[0],wo[1],1-((t&1)<<1)))}Mb.exports=I2r});var bo=u((TCr,Bb)=>{"use strict";var P2r=xb();Bb.exports=P2r});var na=u((LCr,Cb)=>{"use strict";var R2r=1.5707963267948966;Cb.exports=R2r});var aa=u((ICr,jb)=>{"use strict";var _2r=.7853981633974483;jb.exports=_2r});var Gb=u((PCr,Vb)=>{"use strict";function F2r(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}Vb.exports=F2r});var Wb=u((RCr,Ub)=>{"use strict";function M2r(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}Ub.exports=M2r});var Db=u((_Cr,kb)=>{"use strict";var x2r=b(),B2r=j(),Eo=na(),C2r=aa(),j2r=J(),V2r=Gb(),G2r=Wb(),Hb=6123233995736766e-32,U2r=2.414213562373095;function W2r(r){var e,t,i,n;return x2r(r)||r===0?r:r===B2r?Eo:r===j2r?-Eo:(r<0&&(t=!0,r=-r),e=0,r>U2r?(i=Eo,e=1,r=-(1/r)):r<=.66?i=0:(i=C2r,e=2,r=(r-1)/(r+1)),n=r*r,n=n*V2r(n)/G2r(n),n=r*n+r,e===2?n+=.5*Hb:e===1&&(n+=Hb),i+=n,t?-i:i)}kb.exports=W2r});var ua=u((FCr,Xb)=>{"use strict";var H2r=Db();Xb.exports=H2r});var No=u((MCr,Jb)=>{"use strict";var k2r=x().isPrimitive;function D2r(r){return k2r(r)&&r>=0}Jb.exports=D2r});var Ao=u((xCr,zb)=>{"use strict";var X2r=x().isObject;function J2r(r){return X2r(r)&&r.valueOf()>=0}zb.exports=J2r});var Zb=u((BCr,Yb)=>{"use strict";var z2r=No(),Y2r=Ao();function Z2r(r){return z2r(r)||Y2r(r)}Yb.exports=Z2r});var So=u((CCr,Qb)=>{"use strict";var $b=w(),Oo=Zb(),$2r=No(),Q2r=Ao();$b(Oo,"isPrimitive",$2r);$b(Oo,"isObject",Q2r);Qb.exports=Oo});var rE=u((jCr,Kb)=>{"use strict";var K2r=T(),sa=A(),rcr=Rr().isPrimitive,ecr=Yr().isPrimitive,tcr=Ae().isPrimitive,icr=So().isPrimitive;function ncr(r,e){return K2r(e)?sa(e,"period")&&(r.period=e.period,!ecr(e.period))?new TypeError("invalid option. `period` option must be an positive integer. Option: `"+e.period+"`."):sa(e,"amplitude")&&(r.amplitude=e.amplitude,!icr(e.amplitude))?new TypeError("invalid option. `amplitude` option must be a nonnegative number. Option: `"+e.amplitude+"`."):sa(e,"offset")&&(r.offset=e.offset,!rcr(e.offset))?new TypeError("invalid option. `offset` option must be an integer. Option: `"+e.offset+"`."):sa(e,"iter")&&(r.iter=e.iter,!tcr(e.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}Kb.exports=ncr});var nE=u((VCr,iE)=>{"use strict";var To=w(),eE=ia(),acr=bo(),ucr=ua(),scr=na(),ocr=Gr(),vcr=rE();function tE(r){var e,t,i,n,a,s,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=vcr(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,s=ocr/e.period,o=e.amplitude/scr,v=0,t={},To(t,"next",f),To(t,"return",l),eE&&To(t,eE,c),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*ucr(acr(s*a)),done:!1})}function l(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function c(){return tE(e)}}iE.exports=tE});var uE=u((GCr,aE)=>{"use strict";var fcr=nE();aE.exports=fcr});var oE=u((UCr,sE)=>{"use strict";function lcr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}sE.exports=lcr});var fE=u((WCr,vE)=>{"use strict";function ccr(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}vE.exports=ccr});var gE=u((HCr,pE)=>{"use strict";var lE=x().isPrimitive,cE=Ee(),Gi=w(),pcr=oE(),gcr=fE();function qt(r,e){if(!(this instanceof qt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!lE(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!lE(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return cE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),cE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Gi(qt,"BYTES_PER_ELEMENT",8);Gi(qt.prototype,"BYTES_PER_ELEMENT",8);Gi(qt.prototype,"byteLength",16);Gi(qt.prototype,"toString",pcr);Gi(qt.prototype,"toJSON",gcr);pE.exports=qt});var Wt=u((kCr,mE)=>{"use strict";var mcr=gE();mE.exports=mcr});var yE=u((DCr,qE)=>{"use strict";var qcr=typeof Math.fround=="function"?Math.fround:null;qE.exports=qcr});var wE=u((XCr,dE)=>{"use strict";var ycr=Dr(),hE=new ycr(1);function hcr(r){return hE[0]=r,hE[0]}dE.exports=hcr});var NE=u((JCr,EE)=>{"use strict";var bE=yE(),dcr=wE(),Lo;typeof bE=="function"?Lo=bE:Lo=dcr;EE.exports=Lo});var OE=u((zCr,AE)=>{"use strict";function wcr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}AE.exports=wcr});var TE=u((YCr,SE)=>{"use strict";function bcr(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}SE.exports=bcr});var _E=u((ZCr,RE)=>{"use strict";var LE=x().isPrimitive,IE=Ee(),Ui=w(),PE=NE(),Ecr=OE(),Ncr=TE();function yt(r,e){if(!(this instanceof yt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!LE(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!LE(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return IE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:PE(r)}),IE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:PE(e)}),this}Ui(yt,"BYTES_PER_ELEMENT",4);Ui(yt.prototype,"BYTES_PER_ELEMENT",4);Ui(yt.prototype,"byteLength",8);Ui(yt.prototype,"toString",Ecr);Ui(yt.prototype,"toJSON",Ncr);RE.exports=yt});var Ht=u(($Cr,FE)=>{"use strict";var Acr=_E();FE.exports=Acr});var xE=u((QCr,ME)=>{"use strict";var Ocr=Wt(),Scr=Ht();function Tcr(r){return r instanceof Ocr||r instanceof Scr?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}ME.exports=Tcr});var xr=u((KCr,BE)=>{"use strict";var Lcr=xE();BE.exports=Lcr});var jE=u((rjr,CE)=>{"use strict";var Icr={Complex64:"complex64",Complex128:"complex128"};CE.exports=Icr});var GE=u((ejr,VE)=>{"use strict";var Pcr=Ht(),Rcr=Wt(),_cr=[Pcr,Rcr];VE.exports=_cr});var WE=u((tjr,UE)=>{"use strict";var Fcr=["complex64","complex128"];UE.exports=Fcr});var DE=u((ijr,kE)=>{"use strict";var Mcr=Ne(),xcr=jE(),Bcr=GE(),HE=WE(),Ccr=HE.length;function jcr(r){var e;for(e=0;e<Ccr;e++)if(r instanceof Bcr[e])return HE[e];return xcr[Mcr(r)]||null}kE.exports=jcr});var Io=u((njr,XE)=>{"use strict";var Vcr=DE();XE.exports=Vcr});var zE=u((ajr,JE)=>{"use strict";var Gcr=4294967295;JE.exports=Gcr});var ZE=u((ujr,YE)=>{"use strict";var Ucr=Ar(),Wcr=zE();function Hcr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&Ucr(r.length)&&r.length>=0&&r.length<=Wcr}YE.exports=Hcr});var ht=u((sjr,$E)=>{"use strict";var kcr=ZE();$E.exports=kcr});var KE=u((ojr,QE)=>{"use strict";var Dcr=Z(),Xcr=typeof ArrayBuffer=="function";function Jcr(r){return Xcr&&r instanceof ArrayBuffer||Dcr(r)==="[object ArrayBuffer]"}QE.exports=Jcr});var Po=u((vjr,rN)=>{"use strict";var zcr=KE();rN.exports=zcr});var tN=u((fjr,eN)=>{"use strict";var Ycr=Ee();function Zcr(r,e,t){Ycr(r,e,{configurable:!1,enumerable:!1,get:t})}eN.exports=Zcr});var P=u((ljr,iN)=>{"use strict";var $cr=tN();iN.exports=$cr});var aN=u((cjr,nN)=>{"use strict";function Qcr(r){return r.re}nN.exports=Qcr});var Fe=u((pjr,uN)=>{"use strict";var Kcr=aN();uN.exports=Kcr});var oN=u((gjr,sN)=>{"use strict";function rpr(r){return r.im}sN.exports=rpr});var Me=u((mjr,vN)=>{"use strict";var epr=oN();vN.exports=epr});var lN=u((qjr,fN)=>{"use strict";var tpr=Dr();function ipr(r,e){return new tpr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}fN.exports=ipr});var kt=u((yjr,cN)=>{"use strict";var npr=lN();cN.exports=npr});var gN=u((hjr,pN)=>{"use strict";var apr=lr();function upr(r,e){return new apr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}pN.exports=upr});var Dt=u((djr,mN)=>{"use strict";var spr=gN();mN.exports=spr});var yN=u((wjr,qN)=>{"use strict";var opr=ht(),vpr=xr(),fpr=Fe(),lpr=Me();function cpr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,opr(i)&&i.length>=2)e.push(i[0],i[1]);else if(vpr(i))e.push(fpr(i),lpr(i));else return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");return e}qN.exports=cpr});var dN=u((bjr,hN)=>{"use strict";var ppr=ht(),gpr=xr(),mpr=Fe(),qpr=Me();function ypr(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),ppr(a)&&a.length>=2)i.push(a[0],a[1]);else if(gpr(a))i.push(mpr(a),qpr(a));else return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+a+"`.");return i}hN.exports=ypr});var bN=u((Ejr,wN)=>{"use strict";var hpr=xr(),dpr=Fe(),wpr=Me();function bpr(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!hpr(i))return null;r[a]=dpr(i),r[a+1]=wpr(i),a+=2}return r}wN.exports=bpr});var PN=u((Njr,IN)=>{"use strict";var Wi=Ae().isPrimitive,EN=ht(),_o=_r(),NN=Po(),AN=dn(),Epr=fr(),dt=L(),Xt=xr(),oa=jn(),Ro=Ar(),Npr=ta(),Jt=ia(),gr=w(),la=P(),Lr=lr(),ON=Wt(),va=Fe(),fa=Me(),Apr=kt(),Opr=Dt(),Spr=mt(),SN=yN(),Tpr=dN(),Lpr=bN(),Or=Lr.BYTES_PER_ELEMENT*2,TN=Npr();function zt(r){return r instanceof z||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function LN(r){return r===z||r.name==="Complex64Array"}function Ipr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Or/2}function Ppr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Or}function z(){var r,e,t,i;if(e=arguments.length,!(this instanceof z))return e===0?new z:e===1?new z(arguments[0]):e===2?new z(arguments[0],arguments[1]):new z(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Lr(0);else if(e===1)if(Wi(arguments[0]))t=new Lr(arguments[0]*2);else if(_o(arguments[0]))if(t=arguments[0],i=t.length,i&&Epr(t)&&Xt(t[0])){if(t=Lpr(new Lr(i*2),t),t===null){if(!oa(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Lr(arguments[0])}}else{if(Ipr(t))t=Apr(t,0);else if(Ppr(t))t=Opr(t,0);else if(!oa(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Lr(t)}else if(NN(arguments[0])){if(t=arguments[0],!Ro(t.byteLength/Or))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Or+". Byte length: `"+t.byteLength+"`.");t=new Lr(t)}else if(AN(arguments[0])){if(t=arguments[0],TN===!1)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!dt(t[Jt]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(t=t[Jt](),!dt(t.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(t=SN(t),t instanceof Error)throw t;t=new Lr(t)}else throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");else{if(t=arguments[0],!NN(t))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(r=arguments[1],!Wi(r))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Ro(r/Or))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Or+". Value: `"+r+"`.");if(e===2){if(i=t.byteLength-r,!Ro(i/Or))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Or+". View byte length: `"+i+"`.");t=new Lr(t,r)}else{if(i=arguments[2],!Wi(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*Or>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*Or+"`.");t=new Lr(t,r,i*2)}}return gr(this,"_buffer",t),gr(this,"_length",t.length/2),this}gr(z,"BYTES_PER_ELEMENT",Or);gr(z,"name","Complex128Array");gr(z,"from",function(e){var t,i,n,a,s,o,v,f,l,c,p;if(!dt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!LN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!dt(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");i>2&&(t=arguments[2])}if(zt(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,e.get(c),c),Xt(l))s[p]=va(l),s[p+1]=fa(l);else if(EN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(_o(e)){if(n){for(v=e.length,o=Spr(e),c=0;c<v;c++)if(!Xt(o.getter(e,c))){f=!0;break}if(f){if(!oa(v))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+v+"`.");for(a=new this(v/2),s=a._buffer,c=0;c<v;c++)s[c]=n.call(t,o.getter(e,c),c);return a}for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,o.getter(e,c),c),Xt(l))s[p]=va(l),s[p+1]=fa(l);else if(EN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(AN(e)&&TN&&dt(e[Jt])){if(s=e[Jt](),!dt(s.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(n?o=Tpr(s,n,t):o=SN(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,c=0;c<v;c++)s[c]=o[c];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")});gr(z,"of",function(){var e,t;if(!dt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!LN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});la(z.prototype,"buffer",function(){return this._buffer.buffer});la(z.prototype,"byteLength",function(){return this._buffer.byteLength});la(z.prototype,"byteOffset",function(){return this._buffer.byteOffset});gr(z.prototype,"BYTES_PER_ELEMENT",z.BYTES_PER_ELEMENT);gr(z.prototype,"copyWithin",function(e,t){if(!zt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});gr(z.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!zt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},gr(i,"next",v),gr(i,"return",f),Jt&&gr(i,Jt,l),i;function v(){var c;return s+=1,a||s>=n?{done:!0}:(o+=2,c=new ON(e[o],e[o+1]),{value:[s,c],done:!1})}function f(c){return a=!0,arguments.length?{value:c,done:!0}:{done:!0}}function l(){return t.entries()}});gr(z.prototype,"get",function(e){var t;if(!zt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Wi(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new ON(t[e],t[e+1])});la(z.prototype,"length",function(){return this._length});gr(z.prototype,"set",function(e){var t,i,n,a,s,o,v,f,l;if(!zt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Wi(i))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+i+"`.")}else i=0;if(Xt(e)){if(i>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+i+"`.");i*=2,n[i]=va(e),n[i+1]=fa(e);return}if(zt(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,l=n.byteOffset+i*Or,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Lr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(_o(e)){for(o=e.length,f=0;f<o;f++)if(!Xt(e[f])){s=!0;break}if(s){if(!oa(o))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+o+"`.");if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,l=n.byteOffset+i*Or,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Lr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=va(v),n[i+1]=fa(v),i+=2;return}throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.")});IN.exports=z});var Hi=u((Ajr,RN)=>{"use strict";var Rpr=PN();RN.exports=Rpr});var FN=u((Ojr,_N)=>{"use strict";function _pr(r){return r.re}_N.exports=_pr});var xe=u((Sjr,MN)=>{"use strict";var Fpr=FN();MN.exports=Fpr});var BN=u((Tjr,xN)=>{"use strict";function Mpr(r){return r.im}xN.exports=Mpr});var Be=u((Ljr,CN)=>{"use strict";var xpr=BN();CN.exports=xpr});var VN=u((Ijr,jN)=>{"use strict";var Bpr=ht(),Cpr=xr(),jpr=xe(),Vpr=Be();function Gpr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,Bpr(i)&&i.length>=2)e.push(i[0],i[1]);else if(Cpr(i))e.push(jpr(i),Vpr(i));else return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");return e}jN.exports=Gpr});var UN=u((Pjr,GN)=>{"use strict";var Upr=ht(),Wpr=xr(),Hpr=xe(),kpr=Be();function Dpr(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),Upr(a)&&a.length>=2)i.push(a[0],a[1]);else if(Wpr(a))i.push(Hpr(a),kpr(a));else return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+a+"`.");return i}GN.exports=Dpr});var HN=u((Rjr,WN)=>{"use strict";var Xpr=xr(),Jpr=xe(),zpr=Be();function Ypr(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!Xpr(i))return null;r[a]=Jpr(i),r[a+1]=zpr(i),a+=2}return r}WN.exports=Ypr});var QN=u((_jr,$N)=>{"use strict";var ki=Ae().isPrimitive,kN=ht(),Mo=_r(),DN=Po(),XN=dn(),Zpr=fr(),wt=L(),Yt=xr(),ca=jn(),Fo=Ar(),$pr=ta(),Zt=ia(),mr=w(),ma=P(),Ir=Dr(),JN=Ht(),pa=xe(),ga=Be(),Qpr=kt(),Kpr=Dt(),r3r=mt(),zN=VN(),e3r=UN(),t3r=HN(),Sr=Ir.BYTES_PER_ELEMENT*2,YN=$pr();function $t(r){return r instanceof Y||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function ZN(r){return r===Y||r.name==="Complex128Array"}function i3r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Sr}function n3r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Sr*2}function Y(){var r,e,t,i;if(e=arguments.length,!(this instanceof Y))return e===0?new Y:e===1?new Y(arguments[0]):e===2?new Y(arguments[0],arguments[1]):new Y(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Ir(0);else if(e===1)if(ki(arguments[0]))t=new Ir(arguments[0]*2);else if(Mo(arguments[0]))if(t=arguments[0],i=t.length,i&&Zpr(t)&&Yt(t[0])){if(t=t3r(new Ir(i*2),t),t===null){if(!ca(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Ir(arguments[0])}}else{if(i3r(t))t=Qpr(t,0);else if(n3r(t))t=Kpr(t,0);else if(!ca(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Ir(t)}else if(DN(arguments[0])){if(t=arguments[0],!Fo(t.byteLength/Sr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Sr+". Byte length: `"+t.byteLength+"`.");t=new Ir(t)}else if(XN(arguments[0])){if(t=arguments[0],YN===!1)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!wt(t[Zt]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(t=t[Zt](),!wt(t.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(t=zN(t),t instanceof Error)throw t;t=new Ir(t)}else throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");else{if(t=arguments[0],!DN(t))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(r=arguments[1],!ki(r))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Fo(r/Sr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Sr+". Value: `"+r+"`.");if(e===2){if(i=t.byteLength-r,!Fo(i/Sr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Sr+". View byte length: `"+i+"`.");t=new Ir(t,r)}else{if(i=arguments[2],!ki(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*Sr>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*Sr+"`.");t=new Ir(t,r,i*2)}}return mr(this,"_buffer",t),mr(this,"_length",t.length/2),this}mr(Y,"BYTES_PER_ELEMENT",Sr);mr(Y,"name","Complex64Array");mr(Y,"from",function(e){var t,i,n,a,s,o,v,f,l,c,p;if(!wt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ZN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!wt(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");i>2&&(t=arguments[2])}if($t(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,e.get(c),c),Yt(l))s[p]=pa(l),s[p+1]=ga(l);else if(kN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(Mo(e)){if(n){for(v=e.length,o=r3r(e),c=0;c<v;c++)if(!Yt(o.getter(e,c))){f=!0;break}if(f){if(!ca(v))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+v+"`.");for(a=new this(v/2),s=a._buffer,c=0;c<v;c++)s[c]=n.call(t,o.getter(e,c),c);return a}for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,o.getter(e,c),c),Yt(l))s[p]=pa(l),s[p+1]=ga(l);else if(kN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(XN(e)&&YN&&wt(e[Zt])){if(s=e[Zt](),!wt(s.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(n?o=e3r(s,n,t):o=zN(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,c=0;c<v;c++)s[c]=o[c];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")});mr(Y,"of",function(){var e,t;if(!wt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ZN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});ma(Y.prototype,"buffer",function(){return this._buffer.buffer});ma(Y.prototype,"byteLength",function(){return this._buffer.byteLength});ma(Y.prototype,"byteOffset",function(){return this._buffer.byteOffset});mr(Y.prototype,"BYTES_PER_ELEMENT",Y.BYTES_PER_ELEMENT);mr(Y.prototype,"copyWithin",function(e,t){if(!$t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});mr(Y.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!$t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},mr(i,"next",v),mr(i,"return",f),Zt&&mr(i,Zt,l),i;function v(){var c;return s+=1,a||s>=n?{done:!0}:(o+=2,c=new JN(e[o],e[o+1]),{value:[s,c],done:!1})}function f(c){return a=!0,arguments.length?{value:c,done:!0}:{done:!0}}function l(){return t.entries()}});mr(Y.prototype,"get",function(e){var t;if(!$t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ki(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new JN(t[e],t[e+1])});ma(Y.prototype,"length",function(){return this._length});mr(Y.prototype,"set",function(e){var t,i,n,a,s,o,v,f,l;if(!$t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!ki(i))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+i+"`.")}else i=0;if(Yt(e)){if(i>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+i+"`.");i*=2,n[i]=pa(e),n[i+1]=ga(e);return}if($t(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,l=n.byteOffset+i*Sr,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Ir(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(Mo(e)){for(o=e.length,f=0;f<o;f++)if(!Yt(e[f])){s=!0;break}if(s){if(!ca(o))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+o+"`.");if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,l=n.byteOffset+i*Sr,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Ir(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=pa(v),n[i+1]=ga(v),i+=2;return}throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.")});$N.exports=Y});var Di=u((Fjr,KN)=>{"use strict";var a3r=QN();KN.exports=a3r});var eA=u((Mjr,rA)=>{"use strict";var u3r=lr(),s3r=Dr(),o3r=Hi(),v3r=Di(),f3r={float64:u3r,float32:s3r,complex128:o3r,complex64:v3r};rA.exports=f3r});var iA=u((xjr,tA)=>{"use strict";var l3r=eA();function c3r(r){return l3r[r]||null}tA.exports=c3r});var aA=u((Bjr,nA)=>{"use strict";var p3r=iA();nA.exports=p3r});var sA=u((Cjr,uA)=>{"use strict";function g3r(r,e,t,i){var n,a,s,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,s=(e-r)/a,o=1;o<a;o++)n.push(r+s*o);return i&&n.push(e),n}uA.exports=g3r});var pA=u((jjr,cA)=>{"use strict";var m3r=Ht(),q3r=Wt(),oA=Fe(),vA=Me(),fA=xe(),lA=Be();function y3r(r,e,t,i,n,a){var s,o,v,f,l,c,p,q,y,m,g,h,E;if(n===0)return[];if(o=0,r==="float64"?(f=e,c=0):r==="complex64"?(o+=1,f=fA(e),c=lA(e)):(f=oA(e),c=vA(e)),t==="float64"?(l=i,p=0):t==="complex64"?(o+=1,l=fA(i),p=lA(i)):(l=oA(i),p=vA(i)),o===2?s=m3r:s=q3r,n===1)return a?[new s(l,p)]:[new s(f,c)];for(v=[new s(f,c)],a?h=n-1:h=n,m=(l-f)/h,g=(p-c)/h,E=1;E<h;E++)q=f+m*E,y=c+g*E,v.push(new s(q,y));return a&&v.push(new s(l,p)),v}cA.exports=y3r});var xo=u((Vjr,gA)=>{"use strict";function h3r(r,e,t,i,n){var a,s,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,s=(t-e)/a,o=1;o<a;o++)r[o]=e+s*o;return n&&(r[a]=t),r}gA.exports=h3r});var Bo=u((Gjr,dA)=>{"use strict";var mA=Fe(),qA=Me(),yA=xe(),hA=Be();function d3r(r,e,t,i,n,a,s){var o,v,f,l,c,p,q,y,m;if(a===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=yA(t),f=hA(t)):(o=mA(t),f=qA(t)),i==="float64"?(v=n,l=0):i==="complex64"?(v=yA(n),l=hA(n)):(v=mA(n),l=qA(n)),a===1)return s?(r[0]=v,r[1]=l):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,s?q=a-1:q=a,c=(v-o)/q,p=(l-f)/q,m=2,y=1;y<q;y++)r[m]=o+c*y,r[m+1]=f+p*y,m+=2;return s&&(r[m]=v,r[m+1]=l),r}dA.exports=d3r});var Co=u((Ujr,bA)=>{"use strict";var w3r=T(),wA=A(),b3r=D().isPrimitive,E3r=ar().isPrimitive;function N3r(r,e){return w3r(e)?wA(e,"dtype")&&(r.dtype=e.dtype,!b3r(r.dtype))?new TypeError("invalid option. `dtype` option must be a string. Option: `"+r.dtype+"`."):wA(e,"endpoint")&&(r.endpoint=e.endpoint,!E3r(r.endpoint))?new TypeError("invalid option. `endpoint` option must be a boolean. Option: `"+r.endpoint+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}bA.exports=N3r});var jo=u((Wjr,A3r)=>{A3r.exports={endpoint:!0}});var LA=u((Hjr,TA)=>{"use strict";var EA=xr(),NA=x().isPrimitive,O3r=Ae().isPrimitive,AA=b(),OA=Io(),S3r=aA(),T3r=kt(),L3r=Dt(),I3r=sA(),P3r=pA(),R3r=xo(),SA=Bo(),_3r=Co(),F3r=jo();function M3r(r,e,t){var i,n,a,s,o,v,f;if(typeof r=="object"){if(o=OA(r),o===null){if(!EA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");o="complex128"}f=!0}else{if(!NA(r)||AA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");o="float64"}if(typeof e=="object"){if(v=OA(e),v===null){if(!EA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");v="complex128"}f=!0}else{if(!NA(e)||AA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");v="float64"}if(!O3r(t))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+t+"`.");if(i={endpoint:F3r.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=_3r(i,arguments[3]),a))throw a;if(i.dtype==="generic")return f?P3r(o,r,v,e,t,i.endpoint):I3r(r,e,t,i.endpoint);if(n=S3r(i.dtype),n===null)throw new TypeError('invalid argument. `dtype` option must be a real or complex floating-point data type or "generic". Option: `'+i.dtype+"`.");if(s=new n(t),i.dtype==="complex64")return SA(T3r(s,0),o,r,v,e,t,i.endpoint),s;if(i.dtype==="complex128")return SA(L3r(s,0),o,r,v,e,t,i.endpoint),s;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return R3r(s,r,e,t,i.endpoint)}TA.exports=M3r});var PA=u((kjr,IA)=>{"use strict";var x3r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};IA.exports=x3r});var _A=u((Djr,RA)=>{"use strict";var B3r=lr(),C3r=Dr(),j3r=or(),V3r=vt(),G3r=_t(),U3r=Oi(),W3r=Rt(),H3r=Ai(),k3r=Ni(),D3r=Di(),X3r=Hi(),J3r=[B3r,C3r,V3r,j3r,U3r,G3r,k3r,W3r,H3r,D3r,X3r];RA.exports=J3r});var MA=u((Xjr,FA)=>{"use strict";var z3r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];FA.exports=z3r});var CA=u((Jjr,BA)=>{"use strict";var Y3r=nt(),Z3r=fr(),$3r=Ne(),Q3r=PA(),K3r=_A(),xA=MA(),r6r=xA.length;function e6r(r){var e;if(Z3r(r))return"generic";if(Y3r(r))return null;for(e=0;e<r6r;e++)if(r instanceof K3r[e])return xA[e];return Q3r[$3r(r)]||null}BA.exports=e6r});var VA=u((zjr,jA)=>{"use strict";var t6r=CA();jA.exports=t6r});var DA=u((Yjr,kA)=>{"use strict";var i6r=Ht(),n6r=Wt(),GA=Fe(),UA=Me(),WA=xe(),HA=Be();function a6r(r,e,t,i,n,a,s){var o,v,f,l,c,p,q,y,m,g,h,E,N,C;if(a===0)return r;if(v=0,e==="float64"?(f=t,c=0):e==="complex64"?(v+=1,f=WA(t),c=HA(t)):(f=GA(t),c=UA(t)),i==="float64"?(l=n,p=0):i==="complex64"?(v+=1,l=WA(n),p=HA(n)):(l=GA(n),p=UA(n)),v===2?o=i6r:o=n6r,y=r.data,q=r.setter,a===1)return s?q(y,0,new o(l,p)):q(y,0,new o(f,c)),r;for(q(y,0,new o(f,c)),s?N=a-1:N=a,h=(l-f)/N,E=(p-c)/N,C=1;C<N;C++)m=f+h*C,g=c+E*C,q(y,C,new o(m,g));return s&&q(y,N,new o(l,p)),r}kA.exports=a6r});var JA=u((Zjr,XA)=>{"use strict";function u6r(r,e,t,i,n){var a,s,o,v,f;if(i===0)return r;if(a=r.data,s=r.setter,i===1)return n?s(a,0,t):s(a,0,e),r;for(s(a,0,e),n?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)s(a,f,e+v*f);return n&&s(a,o,t),r}XA.exports=u6r});var eO=u(($jr,rO)=>{"use strict";var zA=xr(),YA=x().isPrimitive,s6r=_r(),ZA=b(),$A=Io(),o6r=VA(),v6r=kt(),f6r=Dt(),QA=mt(),l6r=DA(),c6r=JA(),KA=Bo(),p6r=xo(),g6r=Co(),m6r=jo();function q6r(r,e,t){var i,n,a,s,o,v,f;if(typeof r=="object"){if(a=$A(r),a===null){if(!zA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");a="complex128"}o=!0}else{if(!YA(r)||ZA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");a="float64"}if(typeof e=="object"){if(s=$A(e),s===null){if(!zA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");s="complex128"}o=!0}else{if(!YA(e)||ZA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");s="float64"}if(!s6r(t))throw new TypeError("invalid argument. Third argument must be an array-like object. Value: `"+t+"`.");if(i={endpoint:m6r.endpoint},arguments.length>3&&(n=g6r(i,arguments[3]),n))throw n;if(v=o6r(t),v===null&&(v="generic"),v==="complex64")return KA(v6r(t,0),a,r,s,e,t.length,i.endpoint),t;if(v==="complex128")return KA(f6r(t,0),a,r,s,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=QA(t),l6r(f,a,r,s,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=QA(t),f.accessors?(c6r(f,r,e,t.length,i.endpoint),t):(p6r(t,r,e,t.length,i.endpoint),t)}rO.exports=q6r});var nO=u((Qjr,iO)=>{"use strict";var y6r=w(),tO=LA(),h6r=eO();y6r(tO,"assign",h6r);iO.exports=tO});var uO=u((Kjr,aO)=>{"use strict";var d6r=b(),w6r=Re();function b6r(r,e,t){var i,n,a,s;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],s=1;s<r;s++){if(n+=t,a=e[n],d6r(a))return a;(a>i||a===i&&w6r(a))&&(i=a)}return i}aO.exports=b6r});var oO=u((rVr,sO)=>{"use strict";var E6r=b(),N6r=Re();function A6r(r,e,t,i){var n,a,s,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,s=e[a],E6r(s))return s;(s>n||s===n&&N6r(s))&&(n=s)}return n}sO.exports=A6r});var lO=u((eVr,fO)=>{"use strict";var O6r=w(),vO=uO(),S6r=oO();O6r(vO,"ndarray",S6r);fO.exports=vO});var pO=u((tVr,cO)=>{"use strict";var T6r=lO();cO.exports=T6r});var qO=u((iVr,mO)=>{"use strict";var gO=b(),L6r=Re();function I6r(r,e,t,i,n){var a,s,o,v,f;if(r<=0)return NaN;for(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,f=0;f<r&&i[o]!==0;f++)s+=t,o+=n;if(f===r)return NaN;if(a=e[s],gO(a))return a;for(f+=1,f;f<r;f++)if(s+=t,o+=n,!i[o]){if(v=e[s],gO(v))return v;(v>a||v===a&&L6r(v))&&(a=v)}return a}mO.exports=I6r});var dO=u((nVr,hO)=>{"use strict";var yO=b(),P6r=Re();function R6r(r,e,t,i,n,a,s){var o,v,f,l,c;if(r<=0)return NaN;for(v=i,f=s,c=0;c<r&&n[f]!==0;c++)v+=t,f+=a;if(c===r)return NaN;if(o=e[v],yO(o))return o;for(c+=1,c;c<r;c++)if(v+=t,f+=a,!n[f]){if(l=e[v],yO(l))return l;(l>o||l===o&&P6r(l))&&(o=l)}return o}hO.exports=R6r});var EO=u((aVr,bO)=>{"use strict";var _6r=w(),wO=qO(),F6r=dO();_6r(wO,"ndarray",F6r);bO.exports=wO});var AO=u((uVr,NO)=>{"use strict";function M6r(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError("invalid argument. `left` must be one of the following strings: 'closed' or 'open'. Value: `"+i+"`.");if(n!=="closed"&&n!=="open")throw new TypeError("invalid argument. `right` must be one of the following strings: 'closed' or 'open'. Value: `"+n+"`.")}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}NO.exports=M6r});var SO=u((sVr,OO)=>{"use strict";var x6r=AO();OO.exports=x6r});var LO=u((oVr,TO)=>{"use strict";var B6r=x().isPrimitive,C6r=SO(),j6r=S();function V6r(r,e,t,i,n,a){var s,o;if(!(B6r(r)&&C6r(r,e,t,i,n)))throw i==="closed"?s="[":s="(",n==="closed"?o="]":o=")",new TypeError(j6r("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,s,e,t,o,String(r)))}TO.exports=V6r});var PO=u((vVr,IO)=>{"use strict";var G6r=ar().isPrimitive,U6r=S();function W6r(r,e){if(!G6r(r))throw new TypeError(U6r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}IO.exports=W6r});var _O=u((fVr,RO)=>{"use strict";function H6r(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}RO.exports=H6r});var MO=u((lVr,FO)=>{"use strict";var k6r=S(),D6r=_O();function X6r(r,e,t){if(!D6r(r,e))throw new TypeError(k6r("invalid argument. %s must be broadcast compatible.",t))}FO.exports=X6r});var BO=u((cVr,xO)=>{"use strict";function J6r(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}xO.exports=J6r});var jO=u((pVr,CO)=>{"use strict";var z6r=S(),Y6r=BO();function Z6r(r,e,t,i){if(!Y6r(r,e))throw new TypeError(z6r("invalid argument. %s must be broadcast compatible with %s.",t,i))}CO.exports=Z6r});var Vo=u((gVr,VO)=>{"use strict";var $6r=S();function Q6r(r,e){if(r===void 0)throw new Error($6r("invalid invocation. Must provide %s.",e))}VO.exports=Q6r});var UO=u((mVr,GO)=>{"use strict";var K6r=S();function r4r(r,e,t,i){if(!(r>e))throw new TypeError(K6r("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}GO.exports=r4r});var HO=u((qVr,WO)=>{"use strict";var e4r=S();function t4r(r,e,t,i){if(!(r>=e))throw new TypeError(e4r("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}WO.exports=t4r});var DO=u((yVr,kO)=>{"use strict";var i4r=Rr().isPrimitive,n4r=S();function a4r(r,e){if(!i4r(r))throw new TypeError(n4r("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}kO.exports=a4r});var JO=u((hVr,XO)=>{"use strict";var u4r=S();function s4r(r,e,t,i){if(!(r<e))throw new TypeError(u4r("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}XO.exports=s4r});var YO=u((dVr,zO)=>{"use strict";var o4r=S();function v4r(r,e,t,i){if(!(r<=e))throw new TypeError(o4r("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}zO.exports=v4r});var $O=u((wVr,ZO)=>{"use strict";var f4r=Ae().isPrimitive,l4r=S();function c4r(r,e){if(!f4r(r))throw new TypeError(l4r("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}ZO.exports=c4r});var KO=u((bVr,QO)=>{"use strict";var p4r=So().isPrimitive,g4r=S();function m4r(r,e){if(!p4r(r))throw new TypeError(g4r("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}QO.exports=m4r});var eS=u((EVr,rS)=>{"use strict";var q4r=x().isPrimitive,y4r=S();function h4r(r,e){if(!q4r(r))throw new TypeError(y4r("invalid argument. %s must be a number. Value: %s.",e,String(r)))}rS.exports=h4r});var iS=u((NVr,tS)=>{"use strict";var d4r=S();function w4r(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(d4r('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}tS.exports=w4r});var Go=u((AVr,nS)=>{"use strict";var b4r=Yr().isPrimitive,E4r=S();function N4r(r,e){if(!b4r(r))throw new TypeError(E4r("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}nS.exports=N4r});var uS=u((OVr,aS)=>{"use strict";var A4r=U().isPrimitive,O4r=S();function S4r(r,e){if(!A4r(r))throw new TypeError(O4r("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}aS.exports=S4r});var Uo=u((SVr,sS)=>{"use strict";var T4r=x().isPrimitive;function L4r(r){return T4r(r)&&r>=0&&r<=1}sS.exports=L4r});var Wo=u((TVr,oS)=>{"use strict";var I4r=x().isObject;function P4r(r){return I4r(r)&&r.valueOf()>=0&&r.valueOf()<=1}oS.exports=P4r});var fS=u((LVr,vS)=>{"use strict";var R4r=Uo(),_4r=Wo();function F4r(r){return R4r(r)||_4r(r)}vS.exports=F4r});var Xi=u((IVr,cS)=>{"use strict";var lS=w(),Ho=fS(),M4r=Uo(),x4r=Wo();lS(Ho,"isPrimitive",M4r);lS(Ho,"isObject",x4r);cS.exports=Ho});var gS=u((PVr,pS)=>{"use strict";var B4r=Xi().isPrimitive,C4r=S();function j4r(r,e){if(!B4r(r))throw new TypeError(C4r("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}pS.exports=j4r});var qS=u((RVr,mS)=>{"use strict";var V4r=fr(),G4r=S();function U4r(r,e){if(!V4r(r))throw new TypeError(G4r("invalid argument. %s must be a range. Value: %s.",e,String(r)))}mS.exports=U4r});var hS=u((_Vr,yS)=>{"use strict";function W4r(r){return r.length===1||r[0].length===1}yS.exports=W4r});var wS=u((FVr,dS)=>{"use strict";var H4r=fr(),k4r=hS();function D4r(r){return H4r(r)&&k4r(r)}dS.exports=D4r});var ES=u((MVr,bS)=>{"use strict";var X4r=S(),J4r=wS();function z4r(r,e){if(!J4r(r))throw new TypeError(X4r("invalid argument. %s must consist of only a single row or a single column.",e))}bS.exports=z4r});var AS=u((xVr,NS)=>{"use strict";function Y4r(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}NS.exports=Y4r});var SS=u((BVr,OS)=>{"use strict";var Z4r=S(),$4r=AS();function Q4r(r,e,t){if(!$4r(r,e))throw new TypeError(Z4r("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}OS.exports=Q4r});var LS=u((CVr,TS)=>{"use strict";var K4r=D().isPrimitive,r5r=S();function e5r(r,e){if(!K4r(r))throw new TypeError(r5r("invalid argument. %s must be a string. Value: %s.",e,String(r)))}TS.exports=e5r});var PS=u((jVr,IS)=>{"use strict";var t5r=S();function i5r(r){throw new Error(t5r("invalid argument. Unrecognized option name. Value: %s.",String(r)))}IS.exports=i5r});var FS=u((VVr,_S)=>{"use strict";var RS=Go(),n5r=Vo();function a5r(r,e,t){RS(r,"Number of rows"),RS(e,"Number of columns"),n5r(t,"a pseudorandom number generator seed")}_S.exports=a5r});var xS=u((GVr,MS)=>{"use strict";var u5r=fr(),s5r=Rr().isPrimitive,o5r=S(),v5r=ea();function f5r(r){if(s5r(r))return r;if(u5r(r))return v5r(r);throw new TypeError(o5r("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}MS.exports=f5r});var CS=u((UVr,BS)=>{"use strict";var X={};X.isBetween=LO();X.isBoolean=PO();X.isBroadcastCompatible=MO();X.isBroadcastCompatibleWith=jO();X.isDefined=Vo();X.isGreaterThan=UO();X.isGreaterThanEqual=HO();X.isInteger=DO();X.isLessThan=JO();X.isLessThanEqual=YO();X.isNonNegativeInteger=$O();X.isNonNegativeNumber=KO();X.isNumber=eS();X.isOneOf=iS();X.isPositiveInteger=Go();X.isPositiveNumber=uS();X.isProbability=gS();X.isRange=qS();X.isRange1d=ES();X.isSameShape=SS();X.isString=LS();X.unrecognizedOptionName=PS();X.verifyCommonPRNGArgs=FS();X.verifyPRNGSeed=xS();BS.exports=X});var VS=u((WVr,jS)=>{"use strict";var ko=4;function l5r(r,e,t,i,n,a){var s,o,v,f;if(r<=0||e===0)return n;if(i===1&&a===1){if(v=r%ko,v>0)for(f=0;f<v;f++)n[f]+=e*t[f];if(r<ko)return n;for(f=v;f<r;f+=ko)n[f]+=e*t[f],n[f+1]+=e*t[f+1],n[f+2]+=e*t[f+2],n[f+3]+=e*t[f+3];return n}for(i<0?s=(1-r)*i:s=0,a<0?o=(1-r)*a:o=0,f=0;f<r;f++)n[o]+=e*t[s],s+=i,o+=a;return n}jS.exports=l5r});var US=u((HVr,GS)=>{"use strict";var Ji=4;function c5r(r,e,t,i,n,a,s,o){var v,f,l,c;if(r<=0||e===0)return a;if(v=n,f=o,i===1&&s===1){if(l=r%Ji,l>0)for(c=0;c<l;c++)a[f]+=e*t[v],v+=i,f+=s;if(r<Ji)return a;for(c=l;c<r;c+=Ji)a[f]+=e*t[v],a[f+1]+=e*t[v+1],a[f+2]+=e*t[v+2],a[f+3]+=e*t[v+3],v+=Ji,f+=Ji;return a}for(c=0;c<r;c++)a[f]+=e*t[v],v+=i,f+=s;return a}GS.exports=c5r});var Do=u((kVr,HS)=>{"use strict";var p5r=w(),WS=VS(),g5r=US();p5r(WS,"ndarray",g5r);HS.exports=WS});var DS=u((DVr,kS)=>{"use strict";var Xo={};Xo.daxpy=Do().ndarray;Xo.saxpy=Do().ndarray;kS.exports=Xo});var JS=u((XVr,XS)=>{"use strict";function m5r(r){return r*r}XS.exports=m5r});var YS=u((JVr,zS)=>{"use strict";var q5r=JS();zS.exports=q5r});var $S=u((zVr,ZS)=>{"use strict";function y5r(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}ZS.exports=y5r});var KS=u((YVr,QS)=>{"use strict";function h5r(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}QS.exports=h5r});var tT=u((ZVr,eT)=>{"use strict";var d5r=b(),w5r=G(),rT=aa(),b5r=$S(),E5r=KS(),N5r=6123233995736766e-32;function A5r(r){var e,t,i,n,a;if(d5r(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*E5r(t),t=w5r(t+t),a=rT-t,t=t*n-N5r,a-=t,a+=rT;else{if(i<1e-8)return r;t=i*i,a=t*b5r(t),a=i*a+i}return e?-a:a}eT.exports=A5r});var bt=u(($Vr,iT)=>{"use strict";var O5r=tT();iT.exports=O5r});var sT=u((QVr,uT)=>{"use strict";var S5r=b(),nT=bt(),T5r=G(),aT=aa(),L5r=6123233995736766e-32;function I5r(r){var e;return S5r(r)?NaN:r<-1||r>1?NaN:r>.5?2*nT(T5r(.5-.5*r)):(e=aT-nT(r),e+=L5r,e+=aT,e)}uT.exports=I5r});var zi=u((KVr,oT)=>{"use strict";var P5r=sT();oT.exports=P5r});var cT=u((rGr,lT)=>{"use strict";var R5r=b(),_5r=Gt(),vT=G(),F5r=Hn(),fT=B(),M5r=1<<28;function x5r(r){var e;return R5r(r)?NaN:r<1?NaN:r===1?0:r>=M5r?fT(r)+F5r:r>2?fT(2*r-1/(r+vT(r*r-1))):(e=r-1,_5r(e+vT(2*e+e*e)))}lT.exports=x5r});var gT=u((eGr,pT)=>{"use strict";var B5r=cT();pT.exports=B5r});var qT=u((tGr,mT)=>{"use strict";var C5r=ua();function j5r(r){return C5r(1/r)}mT.exports=j5r});var hT=u((iGr,yT)=>{"use strict";var V5r=qT();yT.exports=V5r});var wT=u((nGr,dT)=>{"use strict";var G5r=bt();function U5r(r){return G5r(1+r)}dT.exports=U5r});var ET=u((aGr,bT)=>{"use strict";var W5r=wT();bT.exports=W5r});var AT=u((uGr,NT)=>{"use strict";var H5r=bt();function k5r(r){return H5r(1-r)}NT.exports=k5r});var ST=u((sGr,OT)=>{"use strict";var D5r=AT();OT.exports=D5r});var LT=u((oGr,TT)=>{"use strict";var X5r=bt();function J5r(r){return X5r(1/r)}TT.exports=J5r});var PT=u((vGr,IT)=>{"use strict";var z5r=LT();IT.exports=z5r});var MT=u((fGr,FT)=>{"use strict";var Y5r=Oe(),Z5r=b(),$5r=Gt(),RT=G(),Q5r=Hn(),_T=B(),K5r=1/(1<<28),r8r=1<<28;function e8r(r){var e,t,i;return Z5r(r)||Y5r(r)?r:(r<0&&(r=-r,e=!0),r<K5r?i=r:r>r8r?i=_T(r)+Q5r:r>2?i=_T(2*r+1/(RT(r*r+1)+r)):(t=r*r,i=$5r(r+t/(1+RT(1+t)))),e?-i:i)}FT.exports=e8r});var Jo=u((lGr,xT)=>{"use strict";var t8r=MT();xT.exports=t8r});var CT=u((cGr,BT)=>{"use strict";var i8r=Jo();function n8r(r){return i8r(1/r)}BT.exports=n8r});var VT=u((pGr,jT)=>{"use strict";var a8r=CT();jT.exports=a8r});var UT=u((gGr,GT)=>{"use strict";var u8r=zi(),s8r=G();function o8r(r){return 2*u8r(s8r(r))}GT.exports=o8r});var HT=u((mGr,WT)=>{"use strict";var v8r=UT();WT.exports=v8r});var DT=u((qGr,kT)=>{"use strict";var f8r=bt(),l8r=G();function c8r(r){return 2*f8r(l8r(r))}kT.exports=c8r});var JT=u((yGr,XT)=>{"use strict";var p8r=DT();XT.exports=p8r});var ZT=u((hGr,YT)=>{"use strict";var g8r=b(),zT=Gt(),m8r=j(),q8r=J(),y8r=1/(1<<28);function h8r(r){var e,t;return g8r(r)?NaN:r<-1||r>1?NaN:r===1?m8r:r===-1?q8r:(r<0&&(e=!0,r=-r),r<y8r?e?-r:r:(r<.5?(t=r+r,t=.5*zT(t+t*r/(1-r))):t=.5*zT((r+r)/(1-r)),e?-t:t))}YT.exports=h8r});var QT=u((dGr,$T)=>{"use strict";var d8r=ZT();$T.exports=d8r});var rL=u((wGr,KT)=>{"use strict";var w8r=zi();function b8r(r){return w8r(1+r)}KT.exports=b8r});var tL=u((bGr,eL)=>{"use strict";var E8r=rL();eL.exports=E8r});var nL=u((EGr,iL)=>{"use strict";var N8r=zi();function A8r(r){return N8r(1-r)}iL.exports=A8r});var uL=u((NGr,aL)=>{"use strict";var O8r=nL();aL.exports=O8r});var zo=u((AGr,sL)=>{"use strict";var S8r=.9189385332046728;sL.exports=S8r});var oL=u((OGr,T8r)=>{T8r.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var vL=u((SGr,L8r)=>{L8r.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var fL=u((TGr,I8r)=>{I8r.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var cL=u((LGr,lL)=>{"use strict";function P8r(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}lL.exports=P8r});var gL=u((IGr,pL)=>{"use strict";function R8r(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}pL.exports=R8r});var qL=u((PGr,mL)=>{"use strict";function _8r(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}mL.exports=_8r});var hL=u((RGr,yL)=>{"use strict";function F8r(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}yL.exports=F8r});var wL=u((_Gr,dL)=>{"use strict";function M8r(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}dL.exports=M8r});var EL=u((FGr,bL)=>{"use strict";function x8r(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}bL.exports=x8r});var TL=u((MGr,SL)=>{"use strict";var B8r=b(),C8r=Ar(),j8r=$(),qa=sr(),V8r=K(),G8r=Ct(),U8r=xi(),NL=Mi(),AL=Q(),W8r=B(),H8r=j(),k8r=J(),OL=Pe(),D8r=xs(),X8r=zo(),J8r=oL(),z8r=vL(),Y8r=fL(),Z8r=cL(),$8r=gL(),Q8r=qL(),K8r=hL(),rgr=wL(),egr=EL(),tgr=129,igr=170,ngr=709,agr=1.2433929443359375,ugr=.6986598968505859;function Yo(r){var e,t,i,n,a,s;if(B8r(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(C8r(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(s=(i+1)/2|0,s<=tgr)return-Y8r[s]/(i+1)}else return(n&1)===0?z8r[n/2]:J8r[(n-3)/2];return j8r(r)<D8r?-.5-X8r*r:(t=1-r,r<0?V8r(r/2)===r/2?0:(e=r,r=t,t=e,r>igr?(e=NL(.5*t)*2*Yo(r),a=U8r(r),a-=r*W8r(OL),a>ngr?e<0?k8r:H8r:e*qa(a)):NL(.5*t)*2*AL(OL,-r)*G8r(r)*Yo(r)):r<1?(e=Z8r(t),e-=agr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+$8r(t)):r<=4?(e=ugr+1/-t,e+Q8r(r-2)):r<=7?(e=K8r(r-4),1+qa(e)):r<15?(e=rgr(r-7),1+qa(e)):r<36?(e=egr(r-15),1+qa(e)):1+AL(2,-r))}SL.exports=Yo});var IL=u((xGr,LL)=>{"use strict";var sgr=TL();LL.exports=sgr});var RL=u((BGr,PL)=>{"use strict";var rr={};rr.abs=$();rr.abs2=YS();rr.acos=zi();rr.acosh=gT();rr.acot=hT();rr.acovercos=ET();rr.acoversin=ST();rr.acsc=PT();rr.acsch=VT();rr.ahavercos=HT();rr.ahaversin=JT();rr.asin=bt();rr.asinh=Jo();rr.atan=ua();rr.atanh=QT();rr.avercos=tL();rr.aversin=uL();rr.zeta=IL();PL.exports=rr});var ML=u((CGr,FL)=>{"use strict";var _L=b(),ogr=B(),vgr=Pe(),fgr=zs();function lgr(r,e){return _L(r)||_L(e)||e<=0?NaN:.5*ogr(vgr*fgr*e*e)}FL.exports=lgr});var BL=u((jGr,xL)=>{"use strict";var cgr=ML();xL.exports=cgr});var VL=u((VGr,jL)=>{"use strict";var pgr=sr(),CL=Q(),ggr=G(),mgr=Pe(),qgr=j(),Zo=b();function ygr(r,e,t){var i,n,a;return Zo(r)||Zo(e)||Zo(t)||t<0?NaN:t===0?r===e?qgr:0:(i=CL(t,2),n=1/ggr(i*mgr),a=-1/(2*i),n*pgr(a*CL(r-e,2)))}jL.exports=ygr});var WL=u((GGr,UL)=>{"use strict";var hgr=j(),GL=b();function dgr(r,e){return GL(r)||GL(e)?NaN:r===e?hgr:0}UL.exports=dgr});var DL=u((UGr,kL)=>{"use strict";var wgr=I(),bgr=j(),HL=b();function Egr(r){if(HL(r))return wgr(NaN);return e;function e(t){return HL(t)?NaN:t===r?bgr:0}}kL.exports=Egr});var zL=u((WGr,JL)=>{"use strict";var Ngr=w(),XL=WL(),Agr=DL();Ngr(XL,"factory",Agr);JL.exports=XL});var $L=u((HGr,ZL)=>{"use strict";var Ogr=I(),Sgr=zL().factory,$o=b(),Tgr=G(),Lgr=sr(),YL=Q(),Igr=Pe();function Pgr(r,e){var t,i,n;if($o(r)||$o(e)||e<0)return Ogr(NaN);if(e===0)return Sgr(r);return t=YL(e,2),i=1/Tgr(t*Igr),n=-1/(2*t),a;function a(s){return $o(s)?NaN:i*Lgr(n*YL(s-r,2))}}ZL.exports=Pgr});var rI=u((kGr,KL)=>{"use strict";var Rgr=w(),QL=VL(),_gr=$L();Rgr(QL,"factory",_gr);KL.exports=QL});var tI=u((DGr,eI)=>{"use strict";var ya={};ya.normal={};ya.normal.entropy=BL();ya.normal.pdf=rI();eI.exports=ya});var nI=u((XGr,iI)=>{"use strict";var Fgr=D().isPrimitive,Mgr=S();function xgr(r){if(!Fgr(r))throw new TypeError(Mgr("invalid argument. First argument must be a string. Value: `%s`.",r));return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}iI.exports=xgr});var ha=u((JGr,aI)=>{"use strict";var Bgr=nI();aI.exports=Bgr});var sI=u((zGr,uI)=>{"use strict";var Cgr=D().isPrimitive,jgr=S();function Vgr(r){if(!Cgr(r))throw new TypeError(jgr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toLowerCase()}uI.exports=Vgr});var Qt=u((YGr,oI)=>{"use strict";var Ggr=sI();oI.exports=Ggr});var lI=u((ZGr,fI)=>{"use strict";var Ugr=D().isPrimitive,Wgr=S(),vI=/[-\/\\^$*+?.()|[\]{}]/g;function Hgr(r){var e,t,i;if(!Ugr(r))throw new TypeError(Wgr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(vI,"\\$&"):(t=r.substring(1,i),t=t.replace(vI,"\\$&"),r=r[0]+t+r.substring(i),r)}fI.exports=Hgr});var pI=u(($Gr,cI)=>{"use strict";var kgr=lI();cI.exports=kgr});var mI=u((QGr,gI)=>{"use strict";var Dgr=RegExp.prototype.exec;gI.exports=Dgr});var yI=u((KGr,qI)=>{"use strict";var Xgr=mI();function Jgr(r){try{return Xgr.call(r),!0}catch{return!1}}qI.exports=Jgr});var dI=u((rUr,hI)=>{"use strict";var zgr=Ot(),Ygr=Z(),Zgr=yI(),$gr=zgr();function Qgr(r){return typeof r=="object"?r instanceof RegExp?!0:$gr?Zgr(r):Ygr(r)==="[object RegExp]":!1}hI.exports=Qgr});var bI=u((eUr,wI)=>{"use strict";var Kgr=dI();wI.exports=Kgr});var NI=u((tUr,EI)=>{"use strict";var r7r=pI(),e7r=L(),Qo=D().isPrimitive,t7r=bI(),Ko=S();function i7r(r,e,t){if(!Qo(r))throw new TypeError(Ko("invalid argument. First argument must be a string. Value: `%s`.",r));if(Qo(e))e=r7r(e),e=new RegExp(e,"g");else if(!t7r(e))throw new TypeError(Ko("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!Qo(t)&&!e7r(t))throw new TypeError(Ko("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return r.replace(e,t)}EI.exports=i7r});var Et=u((iUr,AI)=>{"use strict";var n7r=NI();AI.exports=n7r});var SI=u((nUr,OI)=>{"use strict";var a7r=D().isPrimitive,u7r=Et(),s7r=S(),o7r=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function v7r(r){if(!a7r(r))throw new TypeError(s7r("invalid argument. Must provide a string. Value: `%s`.",r));return u7r(r,o7r,"$1")}OI.exports=v7r});var Kt=u((aUr,TI)=>{"use strict";var f7r=SI();TI.exports=f7r});var II=u((uUr,LI)=>{"use strict";var l7r=D().isPrimitive,c7r=ha(),p7r=Qt(),da=Et(),g7r=S(),m7r=Kt(),q7r=/\s+/g,y7r=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,h7r=/(?:\s|^)([^\s]+)(?=\s|$)/g,d7r=/([a-z0-9])([A-Z])/g;function w7r(r,e,t){return e=p7r(e),t===0?e:c7r(e)}function b7r(r){if(!l7r(r))throw new TypeError(g7r("invalid argument. First argument must be a string. Value: `%s`.",r));return r=da(r,y7r," "),r=da(r,q7r," "),r=da(r,d7r,"$1 $2"),r=m7r(r),r=da(r,h7r,w7r),r}LI.exports=b7r});var RI=u((sUr,PI)=>{"use strict";var E7r=II();PI.exports=E7r});var FI=u((oUr,_I)=>{"use strict";var N7r=D().isPrimitive,A7r=S();function O7r(r){if(!N7r(r))throw new TypeError(A7r("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}_I.exports=O7r});var rv=u((vUr,MI)=>{"use strict";var S7r=FI();MI.exports=S7r});var BI=u((fUr,xI)=>{"use strict";var T7r=D().isPrimitive,L7r=rv(),ev=Et(),I7r=S(),P7r=Kt(),R7r=/\s+/g,_7r=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,F7r=/([a-z0-9])([A-Z])/g;function M7r(r){if(!T7r(r))throw new TypeError(I7r("invalid argument. Must provide a string. Value: `%s`.",r));return r=ev(r,_7r," "),r=ev(r,F7r,"$1 $2"),r=P7r(r),r=ev(r,R7r,"_"),L7r(r)}xI.exports=M7r});var jI=u((lUr,CI)=>{"use strict";var x7r=BI();CI.exports=x7r});var GI=u((cUr,VI)=>{"use strict";var B7r=D().isPrimitive,C7r=Qt(),tv=Et(),j7r=S(),V7r=Kt(),G7r=/\s+/g,U7r=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,W7r=/([a-z0-9])([A-Z])/g;function H7r(r){if(!B7r(r))throw new TypeError(j7r("invalid argument. Must provide a string. Value: `%s`.",r));return r=tv(r,U7r," "),r=tv(r,W7r,"$1 $2"),r=V7r(r),r=tv(r,G7r,"-"),C7r(r)}VI.exports=H7r});var WI=u((pUr,UI)=>{"use strict";var k7r=GI();UI.exports=k7r});var kI=u((gUr,HI)=>{"use strict";var D7r=D().isPrimitive,X7r=ha(),J7r=Qt(),wa=Et(),z7r=S(),Y7r=Kt(),Z7r=/\s+/g,$7r=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Q7r=/(?:\s|^)([^\s]+)(?=\s|$)/g,K7r=/([a-z0-9])([A-Z])/g;function r9r(r,e){return X7r(J7r(e))}function e9r(r){if(!D7r(r))throw new TypeError(z7r("invalid argument. First argument must be a string. Value: `%s`.",r));return r=wa(r,$7r," "),r=wa(r,Z7r," "),r=wa(r,K7r,"$1 $2"),r=Y7r(r),r=wa(r,Q7r,r9r),r}HI.exports=e9r});var XI=u((mUr,DI)=>{"use strict";var t9r=kI();DI.exports=t9r});var zI=u((qUr,JI)=>{"use strict";var i9r=D().isPrimitive,n9r=Qt(),iv=Et(),a9r=S(),u9r=Kt(),s9r=/\s+/g,o9r=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,v9r=/([a-z0-9])([A-Z])/g;function f9r(r){if(!i9r(r))throw new TypeError(a9r("invalid argument. Must provide a string. Value: `%s`.",r));return r=iv(r,o9r," "),r=iv(r,v9r,"$1 $2"),r=u9r(r),r=iv(r,s9r,"_"),n9r(r)}JI.exports=f9r});var ZI=u((yUr,YI)=>{"use strict";var l9r=zI();YI.exports=l9r});var KI=u((hUr,QI)=>{"use strict";var c9r=T(),$I=A(),p9r=ar().isPrimitive,g9r=D().isPrimitive;function m9r(r,e){return c9r(e)?$I(e,"flags")&&(r.flags=e.flags,!g9r(r.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+r.flags+"`."):$I(e,"capture")&&(r.capture=e.capture,!p9r(r.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+r.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}QI.exports=m9r});var ba=u((dUr,eP)=>{"use strict";var q9r=KI(),rP=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function y9r(r){var e,t;if(arguments.length>0){if(e={},t=q9r(e,r),t)throw t;return e.capture?new RegExp("("+rP+")",e.flags):new RegExp(rP,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}eP.exports=y9r});var iP=u((wUr,tP)=>{"use strict";var h9r=ba(),d9r=h9r({capture:!0});tP.exports=d9r});var aP=u((bUr,nP)=>{"use strict";var w9r=ba(),b9r=w9r();nP.exports=b9r});var oP=u((EUr,sP)=>{"use strict";var uP=w(),nv=ba(),E9r=iP(),N9r=aP();uP(nv,"REGEXP",N9r);uP(nv,"REGEXP_CAPTURE",E9r);sP.exports=nv});var fP=u((NUr,vP)=>{"use strict";var A9r=D().isPrimitive,O9r=oP(),S9r=S();function T9r(r){var e,t,i,n;if(!A9r(r))throw new TypeError(S9r("invalid argument. Must provide a string. Value: `%s`.",r));for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),O9r.REGEXP.test(i)?(t+=i,e=!0):e?(t+=i.toUpperCase(),e=!1):t+=i;return t}vP.exports=T9r});var cP=u((AUr,lP)=>{"use strict";var L9r=fP();lP.exports=L9r});var gP=u((OUr,pP)=>{"use strict";var I9r=D().isPrimitive,P9r=S();function R9r(r){if(!I9r(r))throw new TypeError(P9r("invalid argument. First argument must be a string. Value: `%s`.",r));return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}pP.exports=R9r});var qP=u((SUr,mP)=>{"use strict";var _9r=gP();mP.exports=_9r});var hP=u((TUr,yP)=>{"use strict";var Br={};Br.camelcase=RI();Br.capitalize=ha();Br.constantcase=jI();Br.kebabcase=WI();Br.lowercase=Qt();Br.pascalcase=XI();Br.snakecase=ZI();Br.startcase=cP();Br.uncapitalize=qP();Br.uppercase=rv();yP.exports=Br});var wP=u((LUr,dP)=>{"use strict";var F9r=Ee();function M9r(r,e,t,i){F9r(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}dP.exports=M9r});var R=u((IUr,bP)=>{"use strict";var x9r=wP();bP.exports=x9r});var AP=u((PUr,NP)=>{"use strict";var EP=65535;function B9r(r,e){var t,i,n,a,s,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,s=(r&EP)>>>0,o=(e&EP)>>>0,t=s*o>>>0,i=n*o+s*a<<16>>>0,t+i>>>0}NP.exports=B9r});var SP=u((RUr,OP)=>{"use strict";var C9r=AP();OP.exports=C9r});var av=u((_Ur,TP)=>{"use strict";function j9r(r,e,t,i,n,a,s){var o,v,f,l,c,p,q;for(o=e.data,v=n.data,l=e.getter,f=n.setter,c=i,p=s,q=0;q<r;q++)f(v,p,l(o,c)),c+=t,p+=a;return e}TP.exports=j9r});var PP=u((FUr,IP)=>{"use strict";var LP=mt(),V9r=av(),uv=8;function G9r(r,e,t,i,n){var a,s,o,v,f,l;if(r<=0)return i;if(o=LP(e),v=LP(i),o.accessors||v.accessors)return t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,V9r(r,o,t,a,v,n,s),v.data;if(t===1&&n===1){if(f=r%uv,f>0)for(l=0;l<f;l++)i[l]=e[l];if(r<uv)return i;for(l=f;l<r;l+=uv)i[l]=e[l],i[l+1]=e[l+1],i[l+2]=e[l+2],i[l+3]=e[l+3],i[l+4]=e[l+4],i[l+5]=e[l+5],i[l+6]=e[l+6],i[l+7]=e[l+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,l=0;l<r;l++)i[s]=e[a],a+=t,s+=n;return i}IP.exports=G9r});var FP=u((MUr,_P)=>{"use strict";var RP=mt(),U9r=av(),Yi=8;function W9r(r,e,t,i,n,a,s){var o,v,f,l,c,p;if(r<=0)return n;if(f=RP(e),l=RP(n),f.accessors||l.accessors)return U9r(r,f,t,i,l,a,s),l.data;if(o=i,v=s,t===1&&a===1){if(c=r%Yi,c>0)for(p=0;p<c;p++)n[v]=e[o],o+=t,v+=a;if(r<Yi)return n;for(p=c;p<r;p+=Yi)n[v]=e[o],n[v+1]=e[o+1],n[v+2]=e[o+2],n[v+3]=e[o+3],n[v+4]=e[o+4],n[v+5]=e[o+5],n[v+6]=e[o+6],n[v+7]=e[o+7],o+=Yi,v+=Yi;return n}for(p=0;p<r;p++)n[v]=e[o],o+=t,v+=a;return n}_P.exports=W9r});var Ce=u((xUr,xP)=>{"use strict";var H9r=w(),MP=PP(),k9r=FP();H9r(MP,"ndarray",k9r);xP.exports=MP});var CP=u((BUr,BP)=>{"use strict";function D9r(){}BP.exports=D9r});var VP=u((CUr,jP)=>{"use strict";var X9r=CP();function J9r(){return X9r.name==="foo"}jP.exports=J9r});var UP=u((jUr,GP)=>{"use strict";var z9r=VP();GP.exports=z9r});var HP=u((VUr,WP)=>{"use strict";var Y9r=L(),Z9r=UP(),$9r=N0().REGEXP,Q9r=Z9r();function K9r(r){if(Y9r(r)===!1)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return Q9r?r.name:$9r.exec(r.toString())[1]}WP.exports=K9r});var DP=u((GUr,kP)=>{"use strict";var rmr=HP();kP.exports=rmr});var JP=u((UUr,XP)=>{"use strict";var emr=Ni(),tmr=Rt(),imr=Ai(),nmr=Oi(),amr=_t(),umr=vt(),smr=or(),omr=Dr(),vmr=lr(),fmr=[vmr,omr,umr,smr,nmr,amr,emr,tmr,imr];XP.exports=fmr});var zP=u((WUr,lmr)=>{lmr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var rR=u((HUr,KP)=>{"use strict";var cmr=Ne(),pmr=DP(),$P=ut(),gmr=is(),mmr=lr(),YP=JP(),ZP=zP(),Ea=gmr()?$P(mmr):QP;Ea=pmr(Ea)==="TypedArray"?Ea:QP;function QP(){}function qmr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof Ea)return!0;for(t=0;t<YP.length;t++)if(r instanceof YP[t])return!0;for(;r;){for(e=cmr(r),t=0;t<ZP.length;t++)if(ZP[t]===e)return!0;r=$P(r)}return!1}KP.exports=qmr});var tR=u((kUr,eR)=>{"use strict";var ymr=rR();eR.exports=ymr});var nR=u((DUr,iR)=>{"use strict";var hmr=Di(),dmr=Hi(),wmr=[dmr,hmr];iR.exports=wmr});var aR=u((XUr,bmr)=>{bmr.exports=["Complex64Array","Complex128Array"]});var vR=u((JUr,oR)=>{"use strict";var Emr=Ne(),Nmr=ut(),uR=nR(),sR=aR();function Amr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<uR.length;t++)if(r instanceof uR[t])return!0;for(;r;){for(e=Emr(r),t=0;t<sR.length;t++)if(sR[t]===e)return!0;r=Nmr(r)}return!1}oR.exports=Amr});var lR=u((zUr,fR)=>{"use strict";var Omr=vR();fR.exports=Omr});var pR=u((YUr,cR)=>{"use strict";function Smr(r,e){if(typeof e!="function")throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+e+"`.");return r instanceof e}cR.exports=Smr});var mR=u((ZUr,gR)=>{"use strict";var Tmr=pR();gR.exports=Tmr});var yR=u(($Ur,qR)=>{"use strict";var Lmr=Ni(),Imr=Rt(),Pmr=Ai(),Rmr=Oi(),_mr=_t(),Fmr=vt(),Mmr=or(),xmr=Dr(),Bmr=lr(),Cmr=Di(),jmr=Hi(),Vmr=[[Bmr,"Float64Array"],[xmr,"Float32Array"],[Fmr,"Int32Array"],[Mmr,"Uint32Array"],[Rmr,"Int16Array"],[_mr,"Uint16Array"],[Lmr,"Int8Array"],[Imr,"Uint8Array"],[Pmr,"Uint8ClampedArray"],[Cmr,"Complex64Array"],[jmr,"Complex128Array"]];qR.exports=Vmr});var dR=u((QUr,hR)=>{"use strict";var Gmr=mR(),Umr=Ne(),Wmr=ut(),ri=yR();function Hmr(r){var e,t;for(t=0;t<ri.length;t++)if(Gmr(r,ri[t][0]))return ri[t][1];for(;r;){for(e=Umr(r),t=0;t<ri.length;t++)if(e===ri[t][1])return ri[t][1];r=Wmr(r)}}hR.exports=Hmr});var bR=u((KUr,wR)=>{"use strict";var kmr=tR(),Dmr=lR(),Xmr=kt(),Jmr=Dt(),zmr=dR();function Ymr(r){var e,t,i;if(kmr(r))e=r;else if(Dmr(r))r.BYTES_PER_ELEMENT===8?e=Xmr(r,0):e=Jmr(r,0);else throw new TypeError("invalid argument. Must provide a typed array. Value: `"+r+"`.");for(t={type:zmr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}wR.exports=Ymr});var _=u((rWr,ER)=>{"use strict";var Zmr=bR();ER.exports=Zmr});var sv=u((eWr,NR)=>{"use strict";var $mr=Tt(),Qmr=K(),Kmr=$mr-1;function rqr(){var r=Qmr(1+Kmr*Math.random());return r>>>0}NR.exports=rqr});var mv=u((tWr,MR)=>{"use strict";var Zr=w(),je=P(),AR=R(),ov=A(),eqr=T(),tqr=_r(),OR=kr(),iqr=ar().isPrimitive,SR=Yr().isPrimitive,RR=Kn(),_R=Tt(),qr=or(),nqr=Xs(),gv=SP(),ei=Ce(),aqr=_(),TR=sv(),er=624,vv=397,LR=_R>>>0,uqr=19650218>>>0,fv=2147483648>>>0,lv=2147483647>>>0,sqr=1812433253>>>0,oqr=1664525>>>0,vqr=1566083941>>>0,fqr=2636928640>>>0,lqr=4022730752>>>0,cqr=2567483615>>>0,cv=[0>>>0,cqr>>>0],FR=1/(RR+1),pqr=67108864>>>0,gqr=2147483648>>>0,pv=1>>>0,mqr=RR*FR,Na=1,Aa=3,Ve=2,Ge=er+3,yr=er+5,Zi=er+6;function IR(r,e){var t;return e?t="option":t="argument",r.length<Zi+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==Na?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+Na+". Actual: "+r[0]+"."):r[1]!==Aa?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+Aa+". Actual: "+r[1]+"."):r[Ve]!==er?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+er+". Actual: "+r[Ve]+"."):r[Ge]!==1?new RangeError("invalid "+t+". `state` array has an incompatible section length. Expected: "+1 .toString()+". Actual: "+r[Ge]+"."):r[yr]!==r.length-Zi?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-Zi)+". Actual: "+r[yr]+"."):null}function PR(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=gv(t,sqr)+i>>>0;return r}function qqr(r,e,t,i){var n,a,s,o;for(a=1,s=0,o=nqr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=gv(n,oqr)>>>0,r[a]=(r[a]>>>0^n)+t[s]+s>>>0,a+=1,s+=1,a>=e&&(r[0]=r[e-1],a=1),s>=i&&(s=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=gv(n,vqr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=gqr,r}function yqr(r){var e,t,i,n;for(n=er-vv,t=0;t<n;t++)e=r[t]&fv|r[t+1]&lv,r[t]=r[t+vv]^e>>>1^cv[e&pv];for(i=er-1;t<i;t++)e=r[t]&fv|r[t+1]&lv,r[t]=r[t-n]^e>>>1^cv[e&pv];return e=r[i]&fv|r[0]&lv,r[i]=r[vv-1]^e>>>1^cv[e&pv],r}function hqr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!eqr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(ov(r,"copy")&&(i.copy=r.copy,!iqr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(ov(r,"state")){if(t=r.state,i.state=!0,!OR(t))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+t+"`.");if(s=IR(t,!0),s)throw s;i.copy===!1?e=t:(e=new qr(t.length),ei(t.length,t,1,e,1)),t=new qr(e.buffer,e.byteOffset+(Ve+1)*e.BYTES_PER_ELEMENT,er),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,t[yr])}if(n===void 0)if(ov(r,"seed"))if(n=r.seed,i.seed=!0,SR(n)){if(n>LR)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");n>>>=0}else{if(tqr(n)===!1||n.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");if(n.length===1){if(n=n[0],!SR(n))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");if(n>LR)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");n>>>=0}else a=n.length,e=new qr(Zi+a),e[0]=Na,e[1]=Aa,e[Ve]=er,e[Ge]=1,e[Ge+1]=er,e[yr]=a,ei.ndarray(a,n,1,0,e,1,yr+1),t=new qr(e.buffer,e.byteOffset+(Ve+1)*e.BYTES_PER_ELEMENT,er),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,a),t=PR(t,er,uqr),t=qqr(t,er,n,a)}else n=TR()>>>0}else n=TR()>>>0;return t===void 0&&(e=new qr(Zi+1),e[0]=Na,e[1]=Aa,e[Ve]=er,e[Ge]=1,e[Ge+1]=er,e[yr]=1,e[yr+1]=n,t=new qr(e.buffer,e.byteOffset+(Ve+1)*e.BYTES_PER_ELEMENT,er),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,1),t=PR(t,er,n)),Zr(y,"NAME","mt19937"),je(y,"seed",o),je(y,"seedLength",v),AR(y,"state",c,p),je(y,"stateLength",f),je(y,"byteLength",l),Zr(y,"toJSON",q),Zr(y,"MIN",1),Zr(y,"MAX",_R),Zr(y,"normalized",m),Zr(m,"NAME",y.NAME),je(m,"seed",o),je(m,"seedLength",v),AR(m,"state",c,p),je(m,"stateLength",f),je(m,"byteLength",l),Zr(m,"toJSON",q),Zr(m,"MIN",0),Zr(m,"MAX",mqr),y;function o(){var g=e[yr];return ei(g,n,1,new qr(g),1)}function v(){return e[yr]}function f(){return e.length}function l(){return e.byteLength}function c(){var g=e.length;return ei(g,e,1,new qr(g),1)}function p(g){var h;if(!OR(g))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+g+"`.");if(h=IR(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?ei(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new qr(g.length)),ei(g.length,g,1,e,1)),t=new qr(e.buffer,e.byteOffset+(Ve+1)*e.BYTES_PER_ELEMENT,er),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,e[yr])}function q(){var g={};return g.type="PRNG",g.name=y.NAME,g.state=aqr(e),g.params=[],g}function y(){var g,h;return h=e[Ge+1],h>=er&&(t=yqr(t),h=0),g=t[h],e[Ge+1]=h+1,g^=g>>>11,g^=g<<7&fqr,g^=g<<15&lqr,g^=g>>>18,g>>>0}function m(){var g=y()>>>5,h=y()>>>6;return(g*pqr+h)*FR}}MR.exports=hqr});var BR=u((iWr,xR)=>{"use strict";var dqr=mv(),wqr=sv(),bqr=dqr({seed:wqr()});xR.exports=bqr});var H=u((nWr,jR)=>{"use strict";var Eqr=w(),CR=BR(),Nqr=mv();Eqr(CR,"factory",Nqr);jR.exports=CR});var WR=u((aWr,UR)=>{"use strict";var VR=x().isPrimitive,GR=tr();function Aqr(r,e){return!VR(r)||GR(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!VR(e)||GR(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):r>=e?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+r+","+e+"]`."):null}UR.exports=Aqr});var kR=u((uWr,HR)=>{"use strict";var Oqr=Q(),Sqr=Ri(),Tqr=na();function Lqr(r,e,t){return e+Oqr(Sqr(Tqr*r()),2)*(t-e)}HR.exports=Lqr});var qv=u((sWr,QR)=>{"use strict";var $r=w(),Oa=P(),DR=R(),XR=T(),JR=L(),zR=A(),YR=I(),Iqr=M(),Sa=H().factory,ZR=b(),Pqr=_(),Rqr=WR(),$R=kR();function _qr(){var r,e,t,i,n,a;if(arguments.length===0)e=Sa();else if(arguments.length===1){if(r=arguments[0],!XR(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(zR(r,"prng")){if(!JR(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Sa(r)}else{if(n=arguments[0],a=arguments[1],i=Rqr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!XR(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(zR(r,"prng")){if(!JR(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Sa(r)}else e=Sa()}return n===void 0?t=y:t=q,$r(t,"NAME","arcsine"),r&&r.prng?($r(t,"seed",null),$r(t,"seedLength",null),DR(t,"state",YR(null),Iqr),$r(t,"stateLength",null),$r(t,"byteLength",null),$r(t,"toJSON",YR(null)),$r(t,"PRNG",e)):(Oa(t,"seed",s),Oa(t,"seedLength",o),DR(t,"state",l,c),Oa(t,"stateLength",v),Oa(t,"byteLength",f),$r(t,"toJSON",p),$r(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Pqr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return $R(e,n,a)}function y(m,g){return ZR(m)||ZR(g)||m>=g?NaN:$R(e,m,g)}}QR.exports=_qr});var r_=u((oWr,KR)=>{"use strict";var Fqr=qv(),Mqr=Fqr();KR.exports=Mqr});var i_=u((vWr,t_)=>{"use strict";var xqr=w(),e_=r_(),Bqr=qv();xqr(e_,"factory",Bqr);t_.exports=e_});var yv=u((fWr,v_)=>{"use strict";var Qr=w(),Ta=P(),n_=R(),a_=T(),Cqr=Xi().isPrimitive,u_=L(),s_=A(),o_=I(),jqr=M(),La=H().factory,Vqr=b(),Gqr=_();function Uqr(){var r,e,t,i;if(arguments.length===0)e=La();else if(arguments.length===1&&a_(arguments[0]))if(r=arguments[0],s_(r,"prng")){if(!u_(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=La(r);else{if(i=arguments[0],!Cqr(i))throw new TypeError("invalid argument. First argument must be a probability. Value: `"+i+"`.");if(arguments.length>1){if(r=arguments[1],!a_(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(s_(r,"prng")){if(!u_(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=La(r)}else e=La()}return i===void 0?t=p:t=c,Qr(t,"NAME","bernoulli"),r&&r.prng?(Qr(t,"seed",null),Qr(t,"seedLength",null),n_(t,"state",o_(null),jqr),Qr(t,"stateLength",null),Qr(t,"byteLength",null),Qr(t,"toJSON",o_(null)),Qr(t,"PRNG",e)):(Ta(t,"seed",n),Ta(t,"seedLength",a),n_(t,"state",v,f),Ta(t,"stateLength",s),Ta(t,"byteLength",o),Qr(t,"toJSON",l),Qr(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(q){e.state=q}function l(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=Gqr(e.state),i===void 0?q.params=[]:q.params=[i],q}function c(){return e()<=i?1:0}function p(q){return Vqr(q)||q<0||q>1?NaN:e()<=q?1:0}}v_.exports=Uqr});var l_=u((lWr,f_)=>{"use strict";var Wqr=yv(),Hqr=Wqr();f_.exports=Hqr});var g_=u((cWr,p_)=>{"use strict";var kqr=w(),c_=l_(),Dqr=yv();kqr(c_,"factory",Dqr);p_.exports=c_});var h_=u((pWr,y_)=>{"use strict";var Xqr=G(),m_=sr(),Jqr=B(),q_=.00991256303526217;function zqr(r,e){var t,i,n;for(i=m_(-.5*e*e),t=[],t.push(q_/i),t.push(e),n=2;n<r;n++)t[n]=Xqr(-2*Jqr(q_/t[n-1]+i)),i=m_(-.5*t[n]*t[n]);return t.push(0),t}y_.exports=zqr});var w_=u((gWr,d_)=>{"use strict";function Yqr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}d_.exports=Yqr});var N_=u((mWr,E_)=>{"use strict";var b_=B();function Zqr(r,e,t){var i,n;do i=b_(r())/e,n=b_(r());while(-2*n<i*i);return t?i-e:e-i}E_.exports=Zqr});var T_=u((qWr,S_)=>{"use strict";var $qr=$(),A_=sr(),Qqr=h_(),Kqr=w_(),ryr=N_(),eyr=128,O_=3.442619855899,Nt=Qqr(eyr,O_),tyr=Kqr(Nt),iyr=127;function nyr(r,e){return t;function t(){for(var i,n,a,s,o,v,f;;){if(o=2*r()-1,v=e()&iyr,$qr(o)<tyr[v])return o*Nt[v];if(v===0)return ryr(r,O_,o<0);if(s=o*Nt[v],a=s*s,f=v+1,i=A_(-.5*(Nt[v]*Nt[v]-a)),n=A_(-.5*(Nt[f]*Nt[f]-a)),n+r()*(i-n)<1)return s}}}S_.exports=nyr});var dv=u((yWr,P_)=>{"use strict";var Ue=w(),Ia=P(),L_=R(),ayr=L(),uyr=T(),syr=ar().isPrimitive,Pa=A(),oyr=kr(),hv=H().factory,I_=I(),vyr=M(),fyr=K(),lyr=Tt(),cyr=_(),pyr=T_();function gyr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!uyr(r))throw new TypeError("invalid argument. Must provide an object. Value: `"+r+"`.");if(Pa(r,"copy")&&(n.copy=r.copy,!syr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(Pa(r,"prng")){if(!ayr(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else if(Pa(r,"state")){if(n.state=r.state,!oyr(r.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+r.state+"`.")}else if(Pa(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+r.seed+"`.")}return n.state===void 0?e===void 0?(t=hv(n),e=t.normalized):(t=hv({seed:fyr(1+lyr*e()),copy:n.copy}),n.seed=null):(t=hv(n),e=t.normalized),i=pyr(e,t),Ue(i,"NAME","improved-ziggurat"),n.seed===null?(Ue(i,"seed",null),Ue(i,"seedLength",null)):(Ia(i,"seed",a),Ia(i,"seedLength",s)),r&&r.prng?(L_(i,"state",I_(null),vyr),Ue(i,"stateLength",null),Ue(i,"byteLength",null),Ue(i,"toJSON",I_(null))):(L_(i,"state",f,l),Ia(i,"stateLength",o),Ia(i,"byteLength",v),Ue(i,"toJSON",c)),Ue(i,"PRNG",e),i;function a(){return t.seed}function s(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function l(p){t.state=p}function c(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=cyr(t.state),p.params=[],p}}P_.exports=gyr});var __=u((hWr,R_)=>{"use strict";var myr=dv(),qyr=myr();R_.exports=qyr});var We=u((dWr,M_)=>{"use strict";var yyr=w(),F_=__(),hyr=dv();yyr(F_,"factory",hyr);M_.exports=F_});var C_=u((wWr,B_)=>{"use strict";var x_=U().isPrimitive;function dyr(r,e){return x_(r)?x_(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}B_.exports=dyr});var W_=u((bWr,U_)=>{"use strict";var j_=B(),V_=G(),wyr=Q(),G_=1/3;function byr(r,e,t){var i,n,a,s,o,v,f,l,c,p;for(t<1?(v=t+1-G_,o=1/V_(9*v),l=wyr(r(),1/t)):(v=t-G_,o=1/V_(9*v),l=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,n=f*f,a=1-.331*n*n,s=.5*n+v*(1-p+j_(p)),c=r(),(c<a||j_(c)<s)&&(i=!1)}return v*p*l}U_.exports=byr});var D_=u((EWr,k_)=>{"use strict";var wv=Q(),H_=B();function Eyr(r,e,t){var i,n,a,s,o,v,f,l;for(a=t-1,o=wv(a+a,.5),i=!0;i===!0;)s=e(),f=.5*(1+s/o),f>=0&&f<=1&&(v=r(),n=wv(s,4),l=8*t-12,l=1-n/l,v<=l?i=!1:(l+=.5*wv(n/(8*t-8),2),v<l&&(l=a*H_(4*f*(1-f)),l+=s*s/2,l>=H_(v)&&(i=!1))));return f}k_.exports=Eyr});var J_=u((NWr,X_)=>{"use strict";var Nyr=Q(),Ra=B();function Ayr(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y;for(o=t-1,v=i-1,f=o+v,l=f*Ra(f),s=o/f,n=.5/Nyr(f,.5),a=!0;a===!0;)c=e(),q=s+c*n,q>=0&&q<=1&&(p=r(),y=o*Ra(q/o),y+=v*Ra((1-q)/v),y+=l+.5*c*c,y>=Ra(p)&&(a=!1));return q}X_.exports=Ayr});var Z_=u((AWr,Y_)=>{"use strict";var bv=sr(),z_=Q(),Ev=B();function Oyr(r,e,t){for(var i,n,a,s,o,v,f;;)if(s=r(),o=r(),v=z_(s,1/e),f=z_(o,1/t),a=v+f,a<=1)return a>0?v/a:(i=Ev(s)/e,n=Ev(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),bv(i-Ev(bv(i)+bv(n))))}Y_.exports=Oyr});var K_=u((OWr,Q_)=>{"use strict";var $_=W_(),Syr=D_(),Tyr=J_(),Lyr=Z_();function Iyr(r,e,t,i){var n,a;return t===i&&t>1.5?Syr(r,e,t):t>1&&i>1?Tyr(r,e,t,i):t<1&&i<1?Lyr(r,t,i):(n=$_(r,e,t),a=$_(r,e,i),n/(n+a))}Q_.exports=Iyr});var Sv=u((SWr,vF)=>{"use strict";var Kr=w(),_a=P(),rF=R(),eF=T(),tF=ar().isPrimitive,iF=L(),ti=A(),nF=I(),Pyr=M(),aF=We().factory,Fa=H().factory,uF=b(),Nv=Ce(),Av=or(),Ov=kr(),sF=Mt(),Ryr=_(),_yr=C_(),oF=K_();function Fyr(){var r,e,t,i,n,a,s,o,v;if(o=!0,arguments.length===0)n={copy:!1},a=Fa(n);else if(arguments.length===1){if(n=arguments[0],!eF(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ti(n,"copy")&&!tF(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ti(n,"prng")){if(!iF(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ti(n,"state")&&!Ov(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=sF(n,1),n.copy===!1?o=!1:n.state&&(n.state=Nv(n.state.length,n.state,1,new Av(n.state.length),1)),n.copy=!1,a=Fa(n)}}else{if(t=arguments[0],i=arguments[1],v=_yr(t,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!eF(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ti(n,"copy")&&!tF(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ti(n,"prng")){if(!iF(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ti(n,"state")&&!Ov(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=sF(n,1),n.copy===!1?o=!1:n.state&&(n.state=Nv(n.state.length,n.state,1,new Av(n.state.length),1)),n.copy=!1,a=Fa(n)}}else n={copy:!1},a=Fa(n)}return n&&n.prng?e=aF({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=aF({state:r,copy:!1})),t===void 0?s=h:s=g,Kr(s,"NAME","beta"),n&&n.prng?(Kr(s,"seed",null),Kr(s,"seedLength",null),rF(s,"state",nF(null),Pyr),Kr(s,"stateLength",null),Kr(s,"byteLength",null),Kr(s,"toJSON",nF(null)),Kr(s,"PRNG",a)):(_a(s,"seed",f),_a(s,"seedLength",l),rF(s,"state",q,y),_a(s,"stateLength",c),_a(s,"byteLength",p),Kr(s,"toJSON",m),Kr(s,"PRNG",a),a=a.normalized),s;function f(){return a.seed}function l(){return a.seedLength}function c(){return a.stateLength}function p(){return a.byteLength}function q(){return a.state}function y(E){if(!Ov(E))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+E+"`.");o&&(E=Nv(E.length,E,1,new Av(E.length),1)),a.state=E}function m(){var E={};return E.type="PRNG",E.name=s.NAME,E.state=Ryr(a.state),t===void 0?E.params=[]:E.params=[t,i],E}function g(){return oF(a,e,t,i)}function h(E,N){return uF(E)||uF(N)||E<=0||N<=0?NaN:oF(a,e,E,N)}}vF.exports=Fyr});var lF=u((TWr,fF)=>{"use strict";var Myr=Sv(),xyr=Myr();fF.exports=xyr});var gF=u((LWr,pF)=>{"use strict";var Byr=w(),cF=lF(),Cyr=Sv();Byr(cF,"factory",Cyr);pF.exports=cF});var yF=u((IWr,qF)=>{"use strict";var mF=U().isPrimitive;function jyr(r,e){return mF(r)?mF(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}qF.exports=jyr});var wF=u((PWr,dF)=>{"use strict";var hF=B();function Vyr(r,e,t,i,n){var a,s,o,v,f,l,c;for(a=!0;a;){do f=e(),c=1+n*f;while(c<=0);c*=c*c,s=f*f,o=1-.331*s*s,v=.5*s+i*(1-c+hF(c)),l=r(),(l<o||hF(l)<v)&&(a=!1)}return 1/t*i*c}dF.exports=Vyr});var Rv=u((RWr,PF)=>{"use strict";var re=w(),Ma=P(),bF=R(),EF=T(),Tv=kr(),NF=ar().isPrimitive,AF=L(),ii=A(),OF=I(),Gyr=M(),SF=We().factory,xa=H().factory,TF=b(),Lv=G(),LF=Q(),Iv=Ce(),Pv=or(),Uyr=_(),IF=Mt(),Wyr=yF(),Ba=wF(),Ca=1/3;function Hyr(){var r,e,t,i,n,a,s,o,v,f,l;if(o=!0,arguments.length===0)n={copy:!1},a=xa(n);else if(arguments.length===1){if(n=arguments[0],!EF(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ii(n,"copy")&&!NF(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ii(n,"prng")){if(!AF(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ii(n,"state")&&!Tv(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=IF(n,1),n.copy===!1?o=!1:n.state&&(n.state=Iv(n.state.length,n.state,1,new Pv(n.state.length),1)),n.copy=!1,a=xa(n)}}else{if(e=arguments[0],i=arguments[1],v=Wyr(e,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!EF(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ii(n,"copy")&&!NF(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ii(n,"prng")){if(!AF(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ii(n,"state")&&!Tv(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=IF(n,1),n.copy===!1?o=!1:n.state&&(n.state=Iv(n.state.length,n.state,1,new Pv(n.state.length),1)),n.copy=!1,a=xa(n)}}else n={copy:!1},a=xa(n)}return n&&n.prng?t=SF({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=SF({state:r,copy:!1})),e===void 0?s=C:(e>=1?(s=E,l=e-Ca):(s=N,l=e+1-Ca),f=1/Lv(9*l)),re(s,"NAME","gamma"),n&&n.prng?(re(s,"seed",null),re(s,"seedLength",null),bF(s,"state",OF(null),Gyr),re(s,"stateLength",null),re(s,"byteLength",null),re(s,"toJSON",OF(null)),re(s,"PRNG",a)):(Ma(s,"seed",c),Ma(s,"seedLength",p),bF(s,"state",m,g),Ma(s,"stateLength",q),Ma(s,"byteLength",y),re(s,"toJSON",h),re(s,"PRNG",a),a=a.normalized),s;function c(){return a.seed}function p(){return a.seedLength}function q(){return a.stateLength}function y(){return a.byteLength}function m(){return a.state}function g(O){if(!Tv(O))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+O+"`.");o&&(O=Iv(O.length,O,1,new Pv(O.length),1)),a.state=O}function h(){var O={};return O.type="PRNG",O.name=s.NAME,O.state=Uyr(a.state),e===void 0?O.params=[]:O.params=[e,i],O}function E(){return Ba(a,t,i,l,f)}function N(){return Ba(a,t,i,l,f)*LF(a(),1/e)}function C(O,k){var nr,W;return TF(O)||TF(k)||O<=0||k<=0?NaN:O<1?(W=O+1-Ca,nr=1/Lv(9*W),Ba(a,t,k,W,nr)*LF(a(),1/O)):(W=O-Ca,nr=1/Lv(9*W),Ba(a,t,k,W,nr))}}PF.exports=Hyr});var _F=u((_Wr,RF)=>{"use strict";var kyr=Rv(),Dyr=kyr();RF.exports=Dyr});var ni=u((FWr,MF)=>{"use strict";var Xyr=w(),FF=_F(),Jyr=Rv();Xyr(FF,"factory",Jyr);MF.exports=FF});var CF=u((MWr,BF)=>{"use strict";var xF=U().isPrimitive;function zyr(r,e){return xF(r)?xF(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}BF.exports=zyr});var VF=u((xWr,jF)=>{"use strict";function Yyr(r,e,t){return r(e,1)/r(t,1)}jF.exports=Yyr});var _v=u((BWr,DF)=>{"use strict";var He=w(),ja=P(),GF=R(),UF=T(),WF=I(),Zyr=M(),Va=ni().factory,HF=b(),$yr=_(),Qyr=CF(),kF=VF();function Kyr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=Va();else if(arguments.length===1){if(i=arguments[0],!UF(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");r=Va(i)}else{if(e=arguments[0],t=arguments[1],s=Qyr(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!UF(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");r=Va(i)}else r=Va()}return e===void 0?a=m:a=y,n=r.PRNG,He(a,"NAME","betaprime"),i&&i.prng?(He(a,"seed",null),He(a,"seedLength",null),GF(a,"state",WF(null),Zyr),He(a,"stateLength",null),He(a,"byteLength",null),He(a,"toJSON",WF(null))):(ja(a,"seed",o),ja(a,"seedLength",v),GF(a,"state",c,p),ja(a,"stateLength",f),ja(a,"byteLength",l),He(a,"toJSON",q)),He(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function l(){return n.byteLength}function c(){return n.state}function p(g){n.state=g}function q(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=$yr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function y(){return kF(r,e,t)}function m(g,h){return HF(g)||HF(h)||g<=0||h<=0?NaN:kF(r,g,h)}}DF.exports=Kyr});var JF=u((CWr,XF)=>{"use strict";var rhr=_v(),ehr=rhr();XF.exports=ehr});var ZF=u((jWr,YF)=>{"use strict";var thr=w(),zF=JF(),ihr=_v();thr(zF,"factory",ihr);YF.exports=zF});var QF=u((VWr,$F)=>{"use strict";var nhr=K();function ahr(r){return nhr(r)===r&&r>0}$F.exports=ahr});var Fv=u((GWr,KF)=>{"use strict";var uhr=QF();KF.exports=uhr});var eM=u((UWr,rM)=>{"use strict";function shr(r){return r>=0&&r<=1}rM.exports=shr});var iM=u((WWr,tM)=>{"use strict";var ohr=eM();tM.exports=ohr});var aM=u((HWr,nM)=>{"use strict";var vhr=Yr().isPrimitive,fhr=Xi().isPrimitive;function lhr(r,e){return vhr(r)?fhr(e)?null:new TypeError("invalid argument. Second argument must be a probability. Value: `"+e+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+e+"`.")}nM.exports=lhr});var sM=u((kWr,uM)=>{"use strict";function chr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}uM.exports=chr});var vM=u((DWr,oM)=>{"use strict";var phr=b();function ghr(r){return r===0||phr(r)?r:r<0?-1:1}oM.exports=ghr});var Ga=u((XWr,fM)=>{"use strict";var mhr=vM();fM.exports=mhr});var cM=u((JWr,lM)=>{"use strict";var qhr=Q(),yhr=1/12,hhr=1/360,dhr=1/1260;function whr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=qhr(r,2),(yhr-(hhr-dhr/e)/e)/r}}lM.exports=whr});var gM=u((zWr,pM)=>{"use strict";var Mv=K(),bhr=Ga(),Ehr=G(),xv=$(),Ua=B(),Wa=cM(),Nhr=1/6;function Ahr(r,e,t){var i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N,C,O,k,nr,W,zu,Cr,vr,tn;for(k=Mv((e+1)*t),f=e-k+1,nr=1-t,W=t/nr,l=(e+1)*W,s=e*t*nr,a=Ehr(s),g=1.15+2.53*a,m=-.0873+.0248*g+.01*t,h=e*t+.5,i=(2.83+5.1/g)*a,y=.92-4.2/g,n=.86*y,N=(k+.5)*Ua((k+1)/(W*f)),N+=Wa(k)+Wa(e-k);;){if(vr=r(),vr<=n)return Cr=vr/y-.43,W=Cr*(2*m/(.5-xv(Cr))+g)+h,Mv(W);if(vr>=y?Cr=r()-.5:(Cr=vr/y-.93,Cr=bhr(Cr)*.5-Cr,vr=y*r()),c=.5-xv(Cr),O=Mv(Cr*(2*m/c+g)+h),!(O<0||O>e))if(vr=vr*i/(m/(c*c)+g),p=xv(O-k),p>15){if(vr=Ua(vr),o=p/s,v=(p/3+.625)*p,v+=Nhr,v/=s,o*=v+.5,zu=-(p*p)/(2*s),vr<zu-o||vr<=zu+o&&(q=e-O+1,tn=N+(e+1)*Ua(f/q),tn+=(O+.5)*Ua(q*W/(O+1)),tn+=-(Wa(O)+Wa(e-O)),vr<=tn))return O}else{if(E=1,k<O)for(C=k;C<=O;C++)E*=l/C-W;else if(k>O)for(C=O;C<=k;C++)vr*=l/C-W;if(vr<=E)return O}}}pM.exports=Ahr});var yM=u((YWr,qM)=>{"use strict";var Ohr=sM(),Shr=gM();function mM(r,e,t){return t>.5?e-mM(r,e,1-t):e*t<10?Ohr(r,e,t):Shr(r,e,t)}qM.exports=mM});var Bv=u((ZWr,OM)=>{"use strict";var ee=w(),Ha=P(),hM=R(),dM=T(),wM=L(),bM=A(),EM=I(),Thr=M(),NM=b(),Lhr=Fv(),Ihr=iM(),ka=H().factory,Phr=_(),Rhr=aM(),AM=yM();function _hr(){var r,e,t,i,n,a;if(arguments.length===0)e=ka();else if(arguments.length===1){if(r=arguments[0],!dM(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(bM(r,"prng")){if(!wM(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=ka(r)}else{if(n=arguments[0],a=arguments[1],i=Rhr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!dM(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(bM(r,"prng")){if(!wM(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=ka(r)}else e=ka()}return n===void 0?t=y:t=q,ee(t,"NAME","binomial"),r&&r.prng?(ee(t,"seed",null),ee(t,"seedLength",null),hM(t,"state",EM(null),Thr),ee(t,"stateLength",null),ee(t,"byteLength",null),ee(t,"toJSON",EM(null)),ee(t,"PRNG",e)):(Ha(t,"seed",s),Ha(t,"seedLength",o),hM(t,"state",l,c),Ha(t,"stateLength",v),Ha(t,"byteLength",f),ee(t,"toJSON",p),ee(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Phr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return AM(e,n,a)}function y(m,g){return NM(m)||NM(g)||!Lhr(m)||!Ihr(g)?NaN:AM(e,m,g)}}OM.exports=_hr});var TM=u(($Wr,SM)=>{"use strict";var Fhr=Bv(),Mhr=Fhr();SM.exports=Mhr});var PM=u((QWr,IM)=>{"use strict";var xhr=w(),LM=TM(),Bhr=Bv();xhr(LM,"factory",Bhr);IM.exports=LM});var _M=u((KWr,RM)=>{"use strict";var Chr=G(),jhr=B(),Vhr=Ri(),Ghr=Pi(),Uhr=Pe();function Whr(r){var e,t;return e=!0,i;function i(){var n,a,s,o;if(e){do n=r(),a=r();while(n===0);return s=Chr(-2*jhr(n)),o=Uhr*a,t=s*Ghr(o),e=!1,s*Vhr(o)}return e=!0,t}}RM.exports=Whr});var MM=u((rHr,FM)=>{"use strict";var Hhr=G(),khr=B(),Dhr=Pi(),Xhr=Gr(),Jhr=Dhr(Xhr);function zhr(r){var e=Hhr(-2*khr(r));return e*Jhr}FM.exports=zhr});var BM=u((eHr,xM)=>{"use strict";var Yhr=G(),Zhr=B(),$hr=Pi(),Qhr=Pe();function Khr(r){var e=Yhr(-2*Zhr(r)),t=Qhr*r;return e*$hr(t)}xM.exports=Khr});var Cv=u((tHr,GM)=>{"use strict";var Pr=w(),Da=P(),CM=R(),rdr=T(),edr=L(),tdr=ar().isPrimitive,$i=A(),idr=kr(),jM=H().factory,VM=I(),ndr=M(),adr=_(),udr=_M(),sdr=MM(),odr=BM();function vdr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!rdr(r))throw new TypeError("invalid argument. Must provide an object. Value: `"+r+"`.");if($i(r,"copy")&&(n.copy=r.copy,!tdr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if($i(r,"prng")){if(!edr(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else if($i(r,"state")){if(n.state=r.state,!idr(r.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+r.state+"`.")}else if($i(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+r.seed+"`.")}return n.state===void 0?e===void 0?(i=jM(n),e=i.normalized):n.seed=null:(i=jM(n),e=i.normalized),t=udr(e),Pr(t,"NAME","box-muller"),n.seed===null?(Pr(t,"seed",null),Pr(t,"seedLength",null)):(Da(t,"seed",a),Da(t,"seedLength",s)),r&&r.prng?(CM(t,"state",VM(null),ndr),Pr(t,"stateLength",null),Pr(t,"byteLength",null),Pr(t,"toJSON",VM(null))):(CM(t,"state",f,l),Da(t,"stateLength",o),Da(t,"byteLength",v),Pr(t,"toJSON",c)),Pr(t,"PRNG",e),$i(e,"MIN")?(Pr(t,"MIN",sdr(e.MIN)),Pr(t,"MAX",odr(e.MIN))):(Pr(t,"MIN",null),Pr(t,"MAX",null)),t;function a(){return i.seed}function s(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function l(p){i.state=p}function c(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=adr(i.state),p.params=[],p}}GM.exports=vdr});var WM=u((iHr,UM)=>{"use strict";var fdr=Cv(),ldr=fdr();UM.exports=ldr});var DM=u((nHr,kM)=>{"use strict";var cdr=w(),HM=WM(),pdr=Cv();cdr(HM,"factory",pdr);kM.exports=HM});var JM=u((aHr,XM)=>{"use strict";var gdr=x().isPrimitive,mdr=U().isPrimitive,qdr=tr();function ydr(r,e){return!gdr(r)||qdr(r)?new TypeError("invalid argument. `x0` must be a number primitive and not `NaN`. Value: `"+r+"`."):mdr(e)?null:new TypeError("invalid argument. `gamma` must be a positive number. Value: `"+e+"`.")}XM.exports=ydr});var YM=u((uHr,zM)=>{"use strict";var hdr=bo(),ddr=Gr();function wdr(r,e,t){return e+t*hdr(ddr*(r()-.5))}zM.exports=wdr});var jv=u((sHr,ix)=>{"use strict";var ke=w(),Xa=P(),ZM=R(),$M=T(),QM=L(),KM=A(),rx=I(),bdr=M(),ex=b(),ai=We().factory,Edr=_(),Ndr=JM(),tx=YM();function Adr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=ai();else if(arguments.length===1){if(t=arguments[0],!$M(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(KM(t,"prng")){if(!QM(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ai({prng:t.prng})}else e=ai(t)}else{if(s=arguments[0],r=arguments[1],a=Ndr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!$M(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(KM(t,"prng")){if(!QM(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ai({prng:t.prng})}else e=ai(t)}else e=ai()}return s===void 0?n=m:n=y,i=e.PRNG,ke(n,"NAME","cauchy"),t&&t.prng?(ke(n,"seed",null),ke(n,"seedLength",null),ZM(n,"state",rx(null),bdr),ke(n,"stateLength",null),ke(n,"byteLength",null),ke(n,"toJSON",rx(null))):(Xa(n,"seed",o),Xa(n,"seedLength",v),ZM(n,"state",c,p),Xa(n,"stateLength",f),Xa(n,"byteLength",l),ke(n,"toJSON",q)),ke(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=Edr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return tx(e,s,r)}function m(g,h){return ex(g)||ex(h)||h<=0?NaN:tx(e,g,h)}}ix.exports=Adr});var ax=u((oHr,nx)=>{"use strict";var Odr=jv(),Sdr=Odr();nx.exports=Sdr});var ox=u((vHr,sx)=>{"use strict";var Tdr=w(),ux=ax(),Ldr=jv();Tdr(ux,"factory",Ldr);sx.exports=ux});var Vv=u((fHr,gx)=>{"use strict";var De=w(),Ja=P(),vx=R(),Idr=U().isPrimitive,fx=T(),lx=L(),cx=A(),px=I(),Pdr=M(),Rdr=b(),ui=ni().factory,_dr=_();function Fdr(){var r,e,t,i,n;if(arguments.length===0)r=ui();else if(arguments.length===1&&fx(arguments[0]))if(t=arguments[0],cx(t,"prng")){if(!lx(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=ui({prng:t.prng})}else r=ui(t);else{if(n=arguments[0],!Idr(n))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+n+"`.");if(arguments.length>1){if(t=arguments[1],!fx(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(cx(t,"prng")){if(!lx(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=ui(n/2,.5,{prng:t.prng})}else r=ui(n/2,.5,t)}else r=ui(n/2,.5)}return n===void 0?i=q:i=p,e=r.PRNG,De(i,"NAME","chisquare"),t&&t.prng?(De(i,"seed",null),De(i,"seedLength",null),vx(i,"state",px(null),Pdr),De(i,"stateLength",null),De(i,"byteLength",null),De(i,"toJSON",px(null))):(Ja(i,"seed",a),Ja(i,"seedLength",s),vx(i,"state",f,l),Ja(i,"stateLength",o),Ja(i,"byteLength",v),De(i,"toJSON",c)),De(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function l(y){e.state=y}function c(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=_dr(e.state),n===void 0?y.params=[]:y.params=[n],y}function p(){return r()}function q(y){return Rdr(y)||y<=0?NaN:r(y/2,.5)}}gx.exports=Fdr});var qx=u((lHr,mx)=>{"use strict";var Mdr=Vv(),xdr=Mdr();mx.exports=xdr});var Qi=u((cHr,hx)=>{"use strict";var Bdr=w(),yx=qx(),Cdr=Vv();Bdr(yx,"factory",Cdr);hx.exports=yx});var Gv=u((pHr,Ox)=>{"use strict";var Xe=w(),za=P(),dx=R(),jdr=U().isPrimitive,wx=T(),bx=L(),Ex=A(),Nx=I(),Vdr=M(),Gdr=b(),si=Qi().factory,Udr=_(),Ax=G();function Wdr(){var r,e,t,i,n;if(arguments.length===0)r=si();else if(arguments.length===1&&wx(arguments[0]))if(t=arguments[0],Ex(t,"prng")){if(!bx(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=si({prng:t.prng})}else r=si(t);else{if(n=arguments[0],!jdr(n))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+n+"`.");if(arguments.length>1){if(t=arguments[1],!wx(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Ex(t,"prng")){if(!bx(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=si(n,{prng:t.prng})}else r=si(n,t)}else r=si(n)}return n===void 0?i=q:i=p,e=r.PRNG,Xe(i,"NAME","chi"),t&&t.prng?(Xe(i,"seed",null),Xe(i,"seedLength",null),dx(i,"state",Nx(null),Vdr),Xe(i,"stateLength",null),Xe(i,"byteLength",null),Xe(i,"toJSON",Nx(null))):(za(i,"seed",a),za(i,"seedLength",s),dx(i,"state",f,l),za(i,"stateLength",o),za(i,"byteLength",v),Xe(i,"toJSON",c)),Xe(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function l(y){e.state=y}function c(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=Udr(e.state),n===void 0?y.params=[]:y.params=[n],y}function p(){return Ax(r())}function q(y){return Gdr(y)||y<=0?NaN:Ax(r(y))}}Ox.exports=Wdr});var Tx=u((gHr,Sx)=>{"use strict";var Hdr=Gv(),kdr=Hdr();Sx.exports=kdr});var Px=u((mHr,Ix)=>{"use strict";var Ddr=w(),Lx=Tx(),Xdr=Gv();Ddr(Lx,"factory",Xdr);Ix.exports=Lx});var _x=u((qHr,Rx)=>{"use strict";var Jdr=x().isPrimitive,zdr=U().isPrimitive,Ydr=tr();function Zdr(r,e){return!Jdr(r)||Ydr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):zdr(e)?null:new TypeError("invalid argument. `s` must be a positive number. Value: `"+e+"`.")}Rx.exports=Zdr});var Mx=u((yHr,Fx)=>{"use strict";var Uv=b(),$dr=Mi(),Qdr=Gr();function Kdr(r,e,t){var i;return Uv(r)||Uv(e)||Uv(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+$dr(i)/Qdr)/2)}Fx.exports=Kdr});var Bx=u((hHr,xx)=>{"use strict";var rwr=I(),ewr=oo().factory,Wv=b(),twr=Mi(),iwr=Gr();function nwr(r,e){if(Wv(r)||Wv(e)||e<0)return rwr(NaN);if(e===0)return ewr(r);return t;function t(i){var n;return Wv(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+twr(n)/iwr)/2)}}xx.exports=nwr});var Vx=u((dHr,jx)=>{"use strict";var awr=w(),Cx=Mx(),uwr=Bx();awr(Cx,"factory",uwr);jx.exports=Cx});var Hv=u((wHr,Gx)=>{"use strict";var swr=Vx(),owr=1e4,vwr=1e-12;function fwr(r,e,t){var i,n,a,s,o;for(o=1,i=e-t,n=e+t;o<owr;){if(s=(i+n)/2,n-i<vwr)return s;a=swr(s,e,t),r>a?i=s:n=s,o+=1}return s}Gx.exports=fwr});var Wx=u((bHr,Ux)=>{"use strict";var kv=b(),lwr=Hv();function cwr(r,e,t){return kv(e)||kv(t)||kv(r)||t<0||r<0||r>1?NaN:t===0?e:lwr(r,e,t)}Ux.exports=cwr});var kx=u((EHr,Hx)=>{"use strict";var pwr=b();function gwr(r,e){return pwr(r)||r<0||r>1?NaN:e}Hx.exports=gwr});var Jx=u((NHr,Xx)=>{"use strict";var mwr=I(),Dx=b();function qwr(r){if(Dx(r))return mwr(NaN);return e;function e(t){return Dx(t)||t<0||t>1?NaN:r}}Xx.exports=qwr});var Dv=u((AHr,Yx)=>{"use strict";var ywr=w(),zx=kx(),hwr=Jx();ywr(zx,"factory",hwr);Yx.exports=zx});var $x=u((OHr,Zx)=>{"use strict";var dwr=I(),wwr=Dv().factory,Xv=b(),bwr=Hv();function Ewr(r,e){if(Xv(r)||Xv(e)||e<0)return dwr(NaN);if(e===0)return wwr(r);return t;function t(i){return Xv(i)||i<0||i>1?NaN:bwr(i,r,e)}}Zx.exports=Ewr});var rB=u((SHr,Kx)=>{"use strict";var Nwr=w(),Qx=Wx(),Awr=$x();Nwr(Qx,"factory",Awr);Kx.exports=Qx});var tB=u((THr,eB)=>{"use strict";var Owr=rB();function Swr(r,e,t){return Owr(r(),e,t)}eB.exports=Swr});var Jv=u((LHr,fB)=>{"use strict";var te=w(),Ya=P(),iB=R(),nB=T(),aB=L(),uB=A(),sB=I(),Twr=M(),Za=H().factory,oB=b(),Lwr=_(),Iwr=_x(),vB=tB();function Pwr(){var r,e,t,i,n,a;if(arguments.length===0)e=Za();else if(arguments.length===1){if(r=arguments[0],!nB(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(uB(r,"prng")){if(!aB(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Za(r)}else{if(n=arguments[0],a=arguments[1],i=Iwr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!nB(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(uB(r,"prng")){if(!aB(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Za(r)}else e=Za()}return n===void 0?t=y:t=q,te(t,"NAME","cosine"),r&&r.prng?(te(t,"seed",null),te(t,"seedLength",null),iB(t,"state",sB(null),Twr),te(t,"stateLength",null),te(t,"byteLength",null),te(t,"toJSON",sB(null)),te(t,"PRNG",e)):(Ya(t,"seed",s),Ya(t,"seedLength",o),iB(t,"state",l,c),Ya(t,"stateLength",v),Ya(t,"byteLength",f),te(t,"toJSON",p),te(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Lwr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return vB(e,n,a)}function y(m,g){return oB(m)||oB(g)||g<=0?NaN:vB(e,m,g)}}fB.exports=Pwr});var cB=u((IHr,lB)=>{"use strict";var Rwr=Jv(),_wr=Rwr();lB.exports=_wr});var mB=u((PHr,gB)=>{"use strict";var Fwr=w(),pB=cB(),Mwr=Jv();Fwr(pB,"factory",Mwr);gB.exports=pB});var dB=u((RHr,hB)=>{"use strict";var qB=Rr().isPrimitive,yB=tr();function xwr(r,e){return!qB(r)||yB(r)?new TypeError("invalid argument. First argument must be an integer and not `NaN`. Value: `"+r+"`."):!qB(e)||yB(e)?new TypeError("invalid argument. Second argument must be an integer and not `NaN`. Value: `"+e+"`."):r>e?new RangeError("invalid argument. Minimum support `a` must be less than or equal to maximum support `b`. Value: `["+r+","+e+"]`."):null}hB.exports=xwr});var EB=u((_Hr,bB)=>{"use strict";var zv=Kn(),oi=K();function wB(r,e,t){var i,n,a,s,o,v,f,l,c;if(a=t-e,a===0)return e;if(f=r.MIN,l=r.MAX,n=l-f,n===a)return r()-f+e;if(n<a)for(s=0;;){for(a===zv?(s=oi(a/(n+1)),a%(n+1)===n&&(s+=1)):s=oi((a+1)/(n+1)),i=0,v=1;v<=s;){if(i+=(r()-f)*v,v*n===a-v+1)return i;v*=n+1}if(c=wB(r,0,oi(a/v)),!(c>zv/v)&&(c*=v,i+=c,!(i>a)))return i+e}for(n===zv?(o=oi(n/(a+1)),n%(a+1)===a&&(o+=1)):o=oi((n+1)/(a+1));;)if(i=r()-f,i=oi(i/o),i<=a)return i+e}bB.exports=wB});var Yv=u((FHr,PB)=>{"use strict";var ie=w(),$a=P(),NB=R(),AB=T(),OB=L(),SB=A(),TB=I(),Bwr=M(),Qa=H().factory,LB=b(),vi=Ar(),Cwr=_(),jwr=dB(),IB=EB();function Vwr(){var r,e,t,i,n,a;if(arguments.length===0)e=Qa();else if(arguments.length===1){if(r=arguments[0],!AB(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(SB(r,"prng")){if(!OB(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");if(e=r.prng,!vi(e.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!vi(e.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else e=Qa(r)}else{if(n=arguments[0],a=arguments[1],i=jwr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!AB(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(SB(r,"prng")){if(!OB(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");if(e=r.prng,!vi(e.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!vi(e.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else e=Qa(r)}else e=Qa()}return n===void 0?t=y:t=q,ie(t,"NAME","discrete-uniform"),r&&r.prng?(ie(t,"seed",null),ie(t,"seedLength",null),NB(t,"state",TB(null),Bwr),ie(t,"stateLength",null),ie(t,"byteLength",null),ie(t,"toJSON",TB(null)),ie(t,"PRNG",e)):($a(t,"seed",s),$a(t,"seedLength",o),NB(t,"state",l,c),$a(t,"stateLength",v),$a(t,"byteLength",f),ie(t,"toJSON",p),ie(t,"PRNG",e)),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Cwr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return IB(e,n,a)}function y(m,g){return LB(m)||LB(g)||!vi(m)||!vi(g)||m>g?NaN:IB(e,m,g)}}PB.exports=Vwr});var _B=u((MHr,RB)=>{"use strict";var Gwr=Yv(),Uwr=Gwr();RB.exports=Uwr});var xB=u((xHr,MB)=>{"use strict";var Wwr=w(),FB=_B(),Hwr=Yv();Wwr(FB,"factory",Hwr);MB.exports=FB});var CB=u((BHr,BB)=>{"use strict";var kwr=U().isPrimitive,Dwr=Yr().isPrimitive;function Xwr(r,e){return Dwr(r)?kwr(e)?null:new TypeError("invalid argument. Second argument must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+r+"`.")}BB.exports=Xwr});var VB=u((CHr,jB)=>{"use strict";var Jwr=B();function zwr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*Jwr(i)}jB.exports=zwr});var Zv=u((jHr,JB)=>{"use strict";var ne=w(),Ka=P(),GB=R(),UB=T(),WB=L(),HB=A(),kB=I(),Ywr=M(),ru=H().factory,DB=b(),Zwr=Fv(),$wr=_(),Qwr=CB(),XB=VB();function Kwr(){var r,e,t,i,n,a;if(arguments.length===0)e=ru();else if(arguments.length===1){if(t=arguments[0],!UB(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(HB(t,"prng")){if(!WB(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=t.prng}else e=ru(t)}else{if(a=arguments[0],r=arguments[1],n=Qwr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!UB(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(HB(t,"prng")){if(!WB(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=t.prng}else e=ru(t)}else e=ru()}return a===void 0?i=y:i=q,ne(i,"NAME","erlang"),t&&t.prng?(ne(i,"seed",null),ne(i,"seedLength",null),GB(i,"state",kB(null),Ywr),ne(i,"stateLength",null),ne(i,"byteLength",null),ne(i,"toJSON",kB(null)),ne(i,"PRNG",e)):(Ka(i,"seed",s),Ka(i,"seedLength",o),GB(i,"state",l,c),Ka(i,"stateLength",v),Ka(i,"byteLength",f),ne(i,"toJSON",p),ne(i,"PRNG",e),e=e.normalized),i;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=$wr(e.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return XB(e,a,r)}function y(m,g){return DB(m)||DB(g)||!Zwr(m)||g<=0?NaN:XB(e,m,g)}}JB.exports=Kwr});var YB=u((VHr,zB)=>{"use strict";var rbr=Zv(),ebr=rbr();zB.exports=ebr});var QB=u((GHr,$B)=>{"use strict";var tbr=w(),ZB=YB(),ibr=Zv();tbr(ZB,"factory",ibr);$B.exports=ZB});var rC=u((UHr,KB)=>{"use strict";var nbr=B();function abr(r,e){return-nbr(1-r())/e}KB.exports=abr});var $v=u((WHr,sC)=>{"use strict";var ae=w(),eu=P(),eC=R(),ubr=U().isPrimitive,tC=T(),iC=L(),nC=A(),aC=I(),sbr=M(),tu=H().factory,obr=b(),vbr=_(),uC=rC();function fbr(){var r,e,t,i;if(arguments.length===0)t=tu();else if(arguments.length===1&&tC(arguments[0]))if(e=arguments[0],nC(e,"prng")){if(!iC(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=tu(e);else{if(r=arguments[0],!ubr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!tC(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(nC(e,"prng")){if(!iC(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=tu(e)}else t=tu()}return r===void 0?i=p:i=c,ae(i,"NAME","exponential"),e&&e.prng?(ae(i,"seed",null),ae(i,"seedLength",null),eC(i,"state",aC(null),sbr),ae(i,"stateLength",null),ae(i,"byteLength",null),ae(i,"toJSON",aC(null)),ae(i,"PRNG",t)):(eu(i,"seed",n),eu(i,"seedLength",a),eC(i,"state",v,f),eu(i,"stateLength",s),eu(i,"byteLength",o),ae(i,"toJSON",l),ae(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=vbr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return uC(t,r)}function p(q){return obr(q)||q<=0?NaN:uC(t,q)}}sC.exports=fbr});var vC=u((HHr,oC)=>{"use strict";var lbr=$v(),cbr=lbr();oC.exports=cbr});var cC=u((kHr,lC)=>{"use strict";var pbr=w(),fC=vC(),gbr=$v();pbr(fC,"factory",gbr);lC.exports=fC});var mC=u((DHr,gC)=>{"use strict";var pC=U().isPrimitive;function mbr(r,e){return pC(r)?pC(e)?null:new TypeError("invalid argument. `d2` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `d1` must be a positive number. Value: `"+r+"`.")}gC.exports=mbr});var yC=u((XHr,qC)=>{"use strict";function qbr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}qC.exports=qbr});var Qv=u((JHr,OC)=>{"use strict";var Je=w(),iu=P(),hC=R(),dC=T(),wC=L(),bC=A(),EC=I(),ybr=M(),fi=Qi().factory,NC=b(),hbr=_(),dbr=mC(),AC=yC();function wbr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=fi();else if(arguments.length===1){if(e=arguments[0],!dC(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(bC(e,"prng")){if(!wC(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");r=fi({prng:e.prng})}else r=fi(e)}else{if(a=arguments[0],s=arguments[1],n=dbr(a,s),n)throw n;if(arguments.length>2){if(e=arguments[2],!dC(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(bC(e,"prng")){if(!wC(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");r=fi({prng:e.prng})}else r=fi(e)}else r=fi()}return a===void 0?i=m:i=y,t=r.PRNG,Je(i,"NAME","f"),e&&e.prng?(Je(i,"seed",null),Je(i,"seedLength",null),hC(i,"state",EC(null),ybr),Je(i,"stateLength",null),Je(i,"byteLength",null),Je(i,"toJSON",EC(null))):(iu(i,"seed",o),iu(i,"seedLength",v),hC(i,"state",c,p),iu(i,"stateLength",f),iu(i,"byteLength",l),Je(i,"toJSON",q)),Je(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function l(){return t.byteLength}function c(){return t.state}function p(g){t.state=g}function q(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=hbr(t.state),a===void 0?g.params=[]:g.params=[a,s],g}function y(){return AC(r,a,s)}function m(g,h){return NC(g)||NC(h)||g<=0||h<=0?NaN:AC(r,g,h)}}OC.exports=wbr});var TC=u((zHr,SC)=>{"use strict";var bbr=Qv(),Ebr=bbr();SC.exports=Ebr});var PC=u((YHr,IC)=>{"use strict";var Nbr=w(),LC=TC(),Abr=Qv();Nbr(LC,"factory",Abr);IC.exports=LC});var FC=u((ZHr,_C)=>{"use strict";var RC=U().isPrimitive,Obr=x().isPrimitive,Kv=tr();function Sbr(r,e,t){return!RC(r)||Kv(r)?new TypeError("invalid argument. First argument must be a positive number primitive and not `NaN`. Value: `"+r+"`."):!RC(e)||Kv(e)?new TypeError("invalid argument. Second argument must be a positive number primitive and not `NaN`. Value: `"+e+"`."):!Obr(t)||Kv(t)?new TypeError("invalid argument. Third argument must be a number primitive and not `NaN`. Value: `"+t+"`."):null}_C.exports=Sbr});var xC=u(($Hr,MC)=>{"use strict";var Tbr=Q(),Lbr=B();function Ibr(r,e,t,i){return i+t*Tbr(-Lbr(r()),-1/e)}MC.exports=Ibr});var e1=u((QHr,WC)=>{"use strict";var ue=w(),nu=P(),BC=R(),CC=T(),jC=L(),VC=A(),GC=I(),Pbr=M(),au=H().factory,r1=b(),Rbr=_(),_br=FC(),UC=xC();function Fbr(){var r,e,t,i,n,a,s;if(arguments.length===0)t=au();else if(arguments.length===1){if(e=arguments[0],!CC(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(VC(e,"prng")){if(!jC(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=au(e)}else{if(r=arguments[0],a=arguments[1],s=arguments[2],n=_br(r,a,s),n)throw n;if(arguments.length>3){if(e=arguments[3],!CC(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(VC(e,"prng")){if(!jC(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=au(e)}else t=au()}return r===void 0?i=m:i=y,ue(i,"NAME","frechet"),e&&e.prng?(ue(i,"seed",null),ue(i,"seedLength",null),BC(i,"state",GC(null),Pbr),ue(i,"stateLength",null),ue(i,"byteLength",null),ue(i,"toJSON",GC(null)),ue(i,"PRNG",t)):(nu(i,"seed",o),nu(i,"seedLength",v),BC(i,"state",c,p),nu(i,"stateLength",f),nu(i,"byteLength",l),ue(i,"toJSON",q),ue(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function l(){return t.byteLength}function c(){return t.state}function p(g){t.state=g}function q(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=Rbr(t.state),r===void 0?g.params=[]:g.params=[r,a,s],g}function y(){return UC(t,r,a,s)}function m(g,h,E){return r1(g)||r1(h)||r1(E)||g<=0||h<=0?NaN:UC(t,g,h,E)}}WC.exports=Fbr});var kC=u((KHr,HC)=>{"use strict";var Mbr=e1(),xbr=Mbr();HC.exports=xbr});var JC=u((rkr,XC)=>{"use strict";var Bbr=w(),DC=kC(),Cbr=e1();Bbr(DC,"factory",Cbr);XC.exports=DC});var ZC=u((ekr,YC)=>{"use strict";var jbr=K(),zC=B();function Vbr(r,e){var t=r();return t===0&&(t=r()),jbr(zC(t)/zC(1-e))}YC.exports=Vbr});var t1=u((tkr,ij)=>{"use strict";var se=w(),uu=P(),$C=R(),QC=T(),Gbr=Xi().isPrimitive,KC=L(),rj=A(),ej=I(),Ubr=M(),su=H().factory,Wbr=b(),Hbr=_(),tj=ZC();function kbr(){var r,e,t,i;if(arguments.length===0)e=su();else if(arguments.length===1&&QC(arguments[0]))if(r=arguments[0],rj(r,"prng")){if(!KC(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=su(r);else{if(i=arguments[0],!Gbr(i))throw new TypeError("invalid argument. First argument must be a probability. Value: `"+i+"`.");if(arguments.length>1){if(r=arguments[1],!QC(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(rj(r,"prng")){if(!KC(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=su(r)}else e=su()}return i===void 0?t=p:t=c,se(t,"NAME","geometric"),r&&r.prng?(se(t,"seed",null),se(t,"seedLength",null),$C(t,"state",ej(null),Ubr),se(t,"stateLength",null),se(t,"byteLength",null),se(t,"toJSON",ej(null)),se(t,"PRNG",e)):(uu(t,"seed",n),uu(t,"seedLength",a),$C(t,"state",v,f),uu(t,"stateLength",s),uu(t,"byteLength",o),se(t,"toJSON",l),se(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(q){e.state=q}function l(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=Hbr(e.state),i===void 0?q.params=[]:q.params=[i],q}function c(){return tj(e,i)}function p(q){return Wbr(q)||q<0||q>1?NaN:tj(e,q)}}ij.exports=kbr});var aj=u((ikr,nj)=>{"use strict";var Dbr=t1(),Xbr=Dbr();nj.exports=Xbr});var oj=u((nkr,sj)=>{"use strict";var Jbr=w(),uj=aj(),zbr=t1();Jbr(uj,"factory",zbr);sj.exports=uj});var fj=u((akr,vj)=>{"use strict";var Ybr=x().isPrimitive,Zbr=U().isPrimitive,$br=tr();function Qbr(r,e){return!Ybr(r)||$br(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):Zbr(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`.")}vj.exports=Qbr});var pj=u((ukr,cj)=>{"use strict";var lj=B();function Kbr(r,e,t){return e-t*lj(-lj(r()))}cj.exports=Kbr});var i1=u((skr,bj)=>{"use strict";var oe=w(),ou=P(),gj=R(),mj=T(),qj=L(),yj=A(),hj=I(),rEr=M(),vu=H().factory,dj=b(),eEr=_(),tEr=fj(),wj=pj();function iEr(){var r,e,t,i,n,a;if(arguments.length===0)t=vu();else if(arguments.length===1){if(e=arguments[0],!mj(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(yj(e,"prng")){if(!qj(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=vu(e)}else{if(a=arguments[0],r=arguments[1],n=tEr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!mj(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(yj(e,"prng")){if(!qj(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=vu(e)}else t=vu()}return a===void 0?i=y:i=q,oe(i,"NAME","gumbel"),e&&e.prng?(oe(i,"seed",null),oe(i,"seedLength",null),gj(i,"state",hj(null),rEr),oe(i,"stateLength",null),oe(i,"byteLength",null),oe(i,"toJSON",hj(null)),oe(i,"PRNG",t)):(ou(i,"seed",s),ou(i,"seedLength",o),gj(i,"state",l,c),ou(i,"stateLength",v),ou(i,"byteLength",f),oe(i,"toJSON",p),oe(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function l(){return t.state}function c(m){t.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=eEr(t.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return wj(t,a,r)}function y(m,g){return dj(m)||dj(g)||g<=0?NaN:wj(t,m,g)}}bj.exports=iEr});var Nj=u((okr,Ej)=>{"use strict";var nEr=i1(),aEr=nEr();Ej.exports=aEr});var Sj=u((vkr,Oj)=>{"use strict";var uEr=w(),Aj=Nj(),sEr=i1();uEr(Aj,"factory",sEr);Oj.exports=Aj});var Lj=u((fkr,Tj)=>{"use strict";var oEr=K();function vEr(r){return oEr(r)===r&&r>=0}Tj.exports=vEr});var Pj=u((lkr,Ij)=>{"use strict";var fEr=Lj();Ij.exports=fEr});var _j=u((ckr,Rj)=>{"use strict";var n1=Ae().isPrimitive;function lEr(r,e,t){return n1(r)?n1(e)?n1(t)?t>r?new RangeError("invalid argument. `n` must be less than or equal to `N`. Value: `"+t+"`."):e>r?new RangeError("invalid argument. `K` must be less than or equal to `N`. Value: `"+e+"`."):null:new TypeError("invalid argument. `n` must be a nonnegative integer. Value: `"+t+"`."):new TypeError("invalid argument. `K` must be a nonnegative integer. Value: `"+e+"`."):new TypeError("invalid argument. `N` must be a nonnegative integer. Value: `"+r+"`.")}Rj.exports=lEr});var Fj=u((pkr,cEr)=>{cEr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var xj=u((gkr,Mj)=>{"use strict";var pEr=b(),gEr=Ar(),mEr=Ct(),qEr=j(),yEr=Fj(),hEr=170;function dEr(r){return pEr(r)?NaN:gEr(r)?r<0?NaN:r<=hEr?yEr[r]:qEr:mEr(r+1)}Mj.exports=dEr});var Cj=u((mkr,Bj)=>{"use strict";var wEr=xj();Bj.exports=wEr});var Vj=u((qkr,jj)=>{"use strict";var ze=Cj();function bEr(r,e,t,i){var n,a,s;for(i<t?(n=ze(t)*ze(e+t-i)/(ze(e+t)*ze(t-i)),s=0):(n=ze(e)*ze(i)/(ze(i-t)*ze(e+t)),s=i-t),a=r();a>n;)a-=n,n*=(e-s)*(i-s)/((s+1)*(t-i+1+s)),s+=1;return s}jj.exports=bEr});var Uj=u((ykr,Gj)=>{"use strict";var fu=Vj();function EEr(r,e,t,i){var n,a,s,o;return i>e/2?(s=e-i,2*t<=e?(n=t,a=e-t,o=fu(r,n,a,s),t-o):(a=t,n=e-t,o=fu(r,n,a,s),i-e+t+o)):(s=i,2*t<=e?(n=t,a=e-t,o=fu(r,n,a,s),o):(n=e-t,a=t,o=fu(r,n,a,s),i-o))}Gj.exports=EEr});var u1=u((hkr,Yj)=>{"use strict";var ve=w(),lu=P(),Wj=R(),Hj=T(),kj=L(),Dj=A(),Xj=I(),NEr=M(),cu=H().factory,a1=Pj(),Jj=j(),AEr=_(),OEr=_j(),zj=Uj();function SEr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=cu();else if(arguments.length===1){if(r=arguments[0],!Hj(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Dj(r,"prng")){if(!kj(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=cu(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=OEr(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!Hj(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Dj(r,"prng")){if(!kj(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=cu(r)}else e=cu()}return n===void 0?t=m:t=y,ve(t,"NAME","hypergeometric"),r&&r.prng?(ve(t,"seed",null),ve(t,"seedLength",null),Wj(t,"state",Xj(null),NEr),ve(t,"stateLength",null),ve(t,"byteLength",null),ve(t,"toJSON",Xj(null)),ve(t,"PRNG",e)):(lu(t,"seed",o),lu(t,"seedLength",v),Wj(t,"state",c,p),lu(t,"stateLength",f),lu(t,"byteLength",l),ve(t,"toJSON",q),ve(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function l(){return e.byteLength}function c(){return e.state}function p(g){e.state=g}function q(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=AEr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function y(){return zj(e,n,a,s)}function m(g,h,E){return g===Jj||h===Jj||!a1(g)||!a1(h)||!a1(E)||E>g?NaN:zj(e,g,h,E)}}Yj.exports=SEr});var $j=u((dkr,Zj)=>{"use strict";var TEr=u1(),LEr=TEr();Zj.exports=LEr});var rV=u((wkr,Kj)=>{"use strict";var IEr=w(),Qj=$j(),PEr=u1();IEr(Qj,"factory",PEr);Kj.exports=Qj});var iV=u((bkr,tV)=>{"use strict";var eV=U().isPrimitive;function REr(r,e){return eV(r)?eV(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}tV.exports=REr});var s1=u((Ekr,fV)=>{"use strict";var Ye=w(),pu=P(),nV=R(),aV=T(),uV=L(),sV=A(),oV=I(),_Er=M(),li=ni().factory,vV=b(),FEr=_(),MEr=iV();function xEr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=li();else if(arguments.length===1){if(i=arguments[0],!aV(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(sV(i,"prng")){if(!uV(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");r=li({prng:i.prng})}else r=li(i)}else{if(e=arguments[0],t=arguments[1],s=MEr(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!aV(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(sV(i,"prng")){if(!uV(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");r=li(e,t,{prng:i.prng})}else r=li(e,t,i)}else r=li(e,t)}return e===void 0?a=m:a=y,n=r.PRNG,Ye(a,"NAME","invgamma"),i&&i.prng?(Ye(a,"seed",null),Ye(a,"seedLength",null),nV(a,"state",oV(null),_Er),Ye(a,"stateLength",null),Ye(a,"byteLength",null),Ye(a,"toJSON",oV(null))):(pu(a,"seed",o),pu(a,"seedLength",v),nV(a,"state",c,p),pu(a,"stateLength",f),pu(a,"byteLength",l),Ye(a,"toJSON",q)),Ye(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function l(){return n.byteLength}function c(){return n.state}function p(g){n.state=g}function q(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=FEr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function y(){return 1/r()}function m(g,h){return vV(g)||vV(h)||g<=0||h<=0?NaN:1/r(g,h)}}fV.exports=xEr});var cV=u((Nkr,lV)=>{"use strict";var BEr=s1(),CEr=BEr();lV.exports=CEr});var mV=u((Akr,gV)=>{"use strict";var jEr=w(),pV=cV(),VEr=s1();jEr(pV,"factory",VEr);gV.exports=pV});var hV=u((Okr,yV)=>{"use strict";var qV=U().isPrimitive;function GEr(r,e){return qV(r)?qV(e)?null:new TypeError("invalid argument. `b` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `a` must be a positive number. Value: `"+r+"`.")}yV.exports=GEr});var bV=u((Skr,wV)=>{"use strict";var dV=Q();function UEr(r,e,t){var i=r();return dV(1-dV(1-i,1/t),1/e)}wV.exports=UEr});var o1=u((Tkr,IV)=>{"use strict";var fe=w(),gu=P(),EV=R(),NV=T(),AV=L(),OV=A(),SV=I(),WEr=M(),mu=H().factory,TV=b(),HEr=_(),kEr=hV(),LV=bV();function DEr(){var r,e,t,i,n,a;if(arguments.length===0)e=mu();else if(arguments.length===1){if(r=arguments[0],!NV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(OV(r,"prng")){if(!AV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=mu(r)}else{if(n=arguments[0],a=arguments[1],i=kEr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!NV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(OV(r,"prng")){if(!AV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=mu(r)}else e=mu()}return n===void 0?t=y:t=q,fe(t,"NAME","kumaraswamy"),r&&r.prng?(fe(t,"seed",null),fe(t,"seedLength",null),EV(t,"state",SV(null),WEr),fe(t,"stateLength",null),fe(t,"byteLength",null),fe(t,"toJSON",SV(null)),fe(t,"PRNG",e)):(gu(t,"seed",s),gu(t,"seedLength",o),EV(t,"state",l,c),gu(t,"stateLength",v),gu(t,"byteLength",f),fe(t,"toJSON",p),fe(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=HEr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return LV(e,n,a)}function y(m,g){return TV(m)||TV(g)||m<=0||g<=0?NaN:LV(e,m,g)}}IV.exports=DEr});var RV=u((Lkr,PV)=>{"use strict";var XEr=o1(),JEr=XEr();PV.exports=JEr});var MV=u((Ikr,FV)=>{"use strict";var zEr=w(),_V=RV(),YEr=o1();zEr(_V,"factory",YEr);FV.exports=_V});var BV=u((Pkr,xV)=>{"use strict";var ZEr=x().isPrimitive,$Er=U().isPrimitive,QEr=tr();function KEr(r,e){return!ZEr(r)||QEr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):$Er(e)?null:new TypeError("invalid argument. `b` must be a positive number. Value: `"+e+"`.")}xV.exports=KEr});var jV=u((Rkr,CV)=>{"use strict";var rNr=Ga(),eNr=$(),tNr=B();function iNr(r,e,t){var i=r()-.5;return e-t*rNr(i)*tNr(1-2*eNr(i))}CV.exports=iNr});var v1=u((_kr,XV)=>{"use strict";var le=w(),qu=P(),VV=R(),GV=T(),UV=L(),WV=A(),HV=I(),nNr=M(),yu=H().factory,kV=b(),aNr=_(),uNr=BV(),DV=jV();function sNr(){var r,e,t,i,n,a;if(arguments.length===0)e=yu();else if(arguments.length===1){if(r=arguments[0],!GV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(WV(r,"prng")){if(!UV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=yu(r)}else{if(n=arguments[0],a=arguments[1],i=uNr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!GV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(WV(r,"prng")){if(!UV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=yu(r)}else e=yu()}return n===void 0?t=y:t=q,le(t,"NAME","laplace"),r&&r.prng?(le(t,"seed",null),le(t,"seedLength",null),VV(t,"state",HV(null),nNr),le(t,"stateLength",null),le(t,"byteLength",null),le(t,"toJSON",HV(null)),le(t,"PRNG",e)):(qu(t,"seed",s),qu(t,"seedLength",o),VV(t,"state",l,c),qu(t,"stateLength",v),qu(t,"byteLength",f),le(t,"toJSON",p),le(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=aNr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return DV(e,n,a)}function y(m,g){return kV(m)||kV(g)||g<=0?NaN:DV(e,m,g)}}XV.exports=sNr});var zV=u((Fkr,JV)=>{"use strict";var oNr=v1(),vNr=oNr();JV.exports=vNr});var $V=u((Mkr,ZV)=>{"use strict";var fNr=w(),YV=zV(),lNr=v1();fNr(YV,"factory",lNr);ZV.exports=YV});var KV=u((xkr,QV)=>{"use strict";var cNr=x().isPrimitive,pNr=U().isPrimitive,gNr=tr();function mNr(r,e){return!cNr(r)||gNr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):pNr(e)?null:new TypeError("invalid argument. `c` must be a positive number. Value: `"+e+"`.")}QV.exports=mNr});var eG=u((Bkr,rG)=>{"use strict";function qNr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}rG.exports=qNr});var iG=u((Ckr,tG)=>{"use strict";function yNr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}tG.exports=yNr});var aG=u((jkr,nG)=>{"use strict";function hNr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}nG.exports=hNr});var sG=u((Vkr,uG)=>{"use strict";function dNr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}uG.exports=dNr});var vG=u((Gkr,oG)=>{"use strict";function wNr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}oG.exports=wNr});var pG=u((Ukr,cG)=>{"use strict";var bNr=b(),fG=G(),lG=B(),ENr=j(),NNr=J(),ANr=eG(),ONr=iG(),SNr=aG(),TNr=sG(),LNr=vG(),INr=.08913147449493408,PNr=2.249481201171875,RNr=.807220458984375,_Nr=.9399557113647461,FNr=.9836282730102539;function MNr(r){var e,t,i,n,a,s;return bNr(r)?NaN:r===1?ENr:r===-1?NNr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),s=ANr(t),e*(a*INr+a*s)):n>=.25?(a=fG(-2*lG(n)),n-=.25,s=ONr(n),e*(a/(PNr+s))):(n=fG(-lG(n)),n<3?(i=n-1.125,s=SNr(i),e*(RNr*n+s*n)):n<6?(i=n-3,s=TNr(i),e*(_Nr*n+s*n)):(i=n-6,s=LNr(i),e*(FNr*n+s*n))))}cG.exports=MNr});var f1=u((Wkr,gG)=>{"use strict";var xNr=pG();gG.exports=xNr});var qG=u((Hkr,mG)=>{"use strict";var BNr=f1(),l1=b(),CNr=G();function jNr(r,e,t){var i,n;return l1(e)||l1(t)||l1(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*CNr(2),i+n*BNr(2*r-1))}mG.exports=jNr});var hG=u((kkr,yG)=>{"use strict";var VNr=I(),GNr=Dv().factory,UNr=f1(),c1=b(),WNr=G();function HNr(r,e){var t,i;if(c1(r)||c1(e)||e<0)return VNr(NaN);return e===0&&GNr(r),t=r,i=e*WNr(2),n;function n(a){return c1(a)||a<0||a>1?NaN:t+i*UNr(2*a-1)}}yG.exports=HNr});var bG=u((Dkr,wG)=>{"use strict";var kNr=w(),dG=qG(),DNr=hG();kNr(dG,"factory",DNr);wG.exports=dG});var NG=u((Xkr,EG)=>{"use strict";var XNr=bG();function JNr(r,e,t){var i=XNr(1-r()/2,0,1);return e+t/(i*i)}EG.exports=JNr});var p1=u((Jkr,RG)=>{"use strict";var ce=w(),hu=P(),AG=R(),OG=T(),SG=L(),TG=A(),LG=I(),zNr=M(),du=H().factory,IG=b(),YNr=_(),ZNr=KV(),PG=NG();function $Nr(){var r,e,t,i,n,a;if(arguments.length===0)e=du();else if(arguments.length===1){if(r=arguments[0],!OG(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(TG(r,"prng")){if(!SG(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=du(r)}else{if(n=arguments[0],a=arguments[1],i=ZNr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!OG(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(TG(r,"prng")){if(!SG(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=du(r)}else e=du()}return n===void 0?t=y:t=q,ce(t,"NAME","levy"),r&&r.prng?(ce(t,"seed",null),ce(t,"seedLength",null),AG(t,"state",LG(null),zNr),ce(t,"stateLength",null),ce(t,"byteLength",null),ce(t,"toJSON",LG(null)),ce(t,"PRNG",e)):(hu(t,"seed",s),hu(t,"seedLength",o),AG(t,"state",l,c),hu(t,"stateLength",v),hu(t,"byteLength",f),ce(t,"toJSON",p),ce(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=YNr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return PG(e,n,a)}function y(m,g){return IG(m)||IG(g)||g<=0?NaN:PG(e,m,g)}}RG.exports=$Nr});var FG=u((zkr,_G)=>{"use strict";var QNr=p1(),KNr=QNr();_G.exports=KNr});var BG=u((Ykr,xG)=>{"use strict";var rAr=w(),MG=FG(),eAr=p1();rAr(MG,"factory",eAr);xG.exports=MG});var jG=u((Zkr,CG)=>{"use strict";var tAr=x().isPrimitive,iAr=U().isPrimitive,nAr=tr();function aAr(r,e){return!tAr(r)||nAr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):iAr(e)?null:new TypeError("invalid argument. `s` must be a positive number. Value: `"+e+"`.")}CG.exports=aAr});var GG=u(($kr,VG)=>{"use strict";var uAr=B();function sAr(r,e,t){var i=r();return e+t*uAr(i/(1-i))}VG.exports=sAr});var g1=u((Qkr,zG)=>{"use strict";var pe=w(),wu=P(),UG=R(),WG=T(),HG=L(),kG=A(),DG=I(),oAr=M(),bu=H().factory,XG=b(),vAr=_(),fAr=jG(),JG=GG();function lAr(){var r,e,t,i,n,a;if(arguments.length===0)e=bu();else if(arguments.length===1){if(r=arguments[0],!WG(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(kG(r,"prng")){if(!HG(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=bu(r)}else{if(n=arguments[0],a=arguments[1],i=fAr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!WG(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(kG(r,"prng")){if(!HG(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=bu(r)}else e=bu()}return n===void 0?t=y:t=q,pe(t,"NAME","logistic"),r&&r.prng?(pe(t,"seed",null),pe(t,"seedLength",null),UG(t,"state",DG(null),oAr),pe(t,"stateLength",null),pe(t,"byteLength",null),pe(t,"toJSON",DG(null)),pe(t,"PRNG",e)):(wu(t,"seed",s),wu(t,"seedLength",o),UG(t,"state",l,c),wu(t,"stateLength",v),wu(t,"byteLength",f),pe(t,"toJSON",p),pe(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=vAr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return JG(e,n,a)}function y(m,g){return XG(m)||XG(g)||g<=0?NaN:JG(e,m,g)}}zG.exports=lAr});var ZG=u((Kkr,YG)=>{"use strict";var cAr=g1(),pAr=cAr();YG.exports=pAr});var KG=u((rDr,QG)=>{"use strict";var gAr=w(),$G=ZG(),mAr=g1();gAr($G,"factory",mAr);QG.exports=$G});var eU=u((eDr,rU)=>{"use strict";var qAr=x().isPrimitive,yAr=U().isPrimitive,hAr=tr();function dAr(r,e){return!qAr(r)||hAr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):yAr(e)?null:new TypeError("invalid argument. `sigma` must be a positive number. Value: `"+e+"`.")}rU.exports=dAr});var iU=u((tDr,tU)=>{"use strict";var wAr=sr();function bAr(r,e,t){return wAr(e+t*r())}tU.exports=bAr});var m1=u((iDr,lU)=>{"use strict";var Ze=w(),Eu=P(),nU=R(),aU=T(),uU=L(),sU=A(),oU=I(),EAr=M(),ci=We().factory,vU=b(),NAr=_(),AAr=eU(),fU=iU();function OAr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=ci();else if(arguments.length===1){if(t=arguments[0],!aU(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(sU(t,"prng")){if(!uU(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ci({prng:t.prng})}else e=ci(t)}else{if(s=arguments[0],r=arguments[1],a=AAr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!aU(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(sU(t,"prng")){if(!uU(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ci({prng:t.prng})}else e=ci(t)}else e=ci()}return s===void 0?n=m:n=y,i=e.PRNG,Ze(n,"NAME","lognormal"),t&&t.prng?(Ze(n,"seed",null),Ze(n,"seedLength",null),nU(n,"state",oU(null),EAr),Ze(n,"stateLength",null),Ze(n,"byteLength",null),Ze(n,"toJSON",oU(null))):(Eu(n,"seed",o),Eu(n,"seedLength",v),nU(n,"state",c,p),Eu(n,"stateLength",f),Eu(n,"byteLength",l),Ze(n,"toJSON",q)),Ze(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=NAr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return fU(e,s,r)}function m(g,h){return vU(g)||vU(h)||h<=0?NaN:fU(e,g,h)}}lU.exports=OAr});var pU=u((nDr,cU)=>{"use strict";var SAr=m1(),TAr=SAr();cU.exports=TAr});var qU=u((aDr,mU)=>{"use strict";var LAr=w(),gU=pU(),IAr=m1();LAr(gU,"factory",IAr);mU.exports=gU});var q1=u((uDr,yU)=>{"use strict";var PAr=Ft(),RAr=K(),_Ar=PAr-1;function FAr(){var r=RAr(1+_Ar*Math.random());return r|0}yU.exports=FAr});var d1=u((sDr,EU)=>{"use strict";var ge=w(),$e=P(),hU=R(),y1=A(),MAr=T(),xAr=ar().isPrimitive,BAr=_r(),CAr=Yr().isPrimitive,dU=yn(),Nu=Ft(),hr=vt(),pi=Ce(),jAr=_(),wU=q1(),h1=Nu-1|0,VAr=Nu-1|0,GAr=16807,Au=1,Ou=2,Qe=2,dr=4,Ki=5;function bU(r,e){var t;return e?t="option":t="argument",r.length<Ki+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==Au?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+Au+". Actual: "+r[0]+"."):r[1]!==Ou?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+Ou+". Actual: "+r[1]+"."):r[Qe]!==1?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+1 .toString()+". Actual: "+r[Qe]+"."):r[dr]!==r.length-Ki?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-Ki)+". Actual: "+r[dr]+"."):null}function UAr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!MAr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(y1(r,"copy")&&(i.copy=r.copy,!xAr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(y1(r,"state")){if(t=r.state,i.state=!0,!dU(t))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+t+"`.");if(s=bU(t,!0),s)throw s;i.copy===!1?e=t:(e=new hr(t.length),pi(t.length,t,1,e,1)),t=new hr(e.buffer,e.byteOffset+(Qe+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,t[dr])}if(n===void 0)if(y1(r,"seed"))if(n=r.seed,i.seed=!0,CAr(n)){if(n>VAr)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+n+"`.");n|=0}else if(BAr(n)&&n.length>0)a=n.length,e=new hr(Ki+a),e[0]=Au,e[1]=Ou,e[Qe]=1,e[dr]=a,pi.ndarray(a,n,1,0,e,1,dr+1),t=new hr(e.buffer,e.byteOffset+(Qe+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+n+"`.");else n=wU()|0}else n=wU()|0;return t===void 0&&(e=new hr(Ki+1),e[0]=Au,e[1]=Ou,e[Qe]=1,e[dr]=1,e[dr+1]=n,t=new hr(e.buffer,e.byteOffset+(Qe+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),ge(y,"NAME","minstd"),$e(y,"seed",o),$e(y,"seedLength",v),hU(y,"state",c,p),$e(y,"stateLength",f),$e(y,"byteLength",l),ge(y,"toJSON",q),ge(y,"MIN",1),ge(y,"MAX",Nu-1),ge(y,"normalized",m),ge(m,"NAME",y.NAME),$e(m,"seed",o),$e(m,"seedLength",v),hU(m,"state",c,p),$e(m,"stateLength",f),$e(m,"byteLength",l),ge(m,"toJSON",q),ge(m,"MIN",(y.MIN-1)/h1),ge(m,"MAX",(y.MAX-1)/h1),y;function o(){var g=e[dr];return pi(g,n,1,new hr(g),1)}function v(){return e[dr]}function f(){return e.length}function l(){return e.byteLength}function c(){var g=e.length;return pi(g,e,1,new hr(g),1)}function p(g){var h;if(!dU(g))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+g+"`.");if(h=bU(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?pi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new hr(g.length)),pi(g.length,g,1,e,1)),t=new hr(e.buffer,e.byteOffset+(Qe+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,e[dr])}function q(){var g={};return g.type="PRNG",g.name=y.NAME,g.state=jAr(e),g.params=[],g}function y(){var g=t[0]|0;return g=GAr*g%Nu|0,t[0]=g,g|0}function m(){return(y()-1)/h1}}EU.exports=UAr});var AU=u((oDr,NU)=>{"use strict";var WAr=d1(),HAr=q1(),kAr=WAr({seed:HAr()});NU.exports=kAr});var TU=u((vDr,SU)=>{"use strict";var DAr=w(),OU=AU(),XAr=d1();DAr(OU,"factory",XAr);SU.exports=OU});var IU=u((fDr,LU)=>{"use strict";var JAr=b(),zAr=8;function YAr(r,e,t){var i,n;for(n=0;n<zAr;n++)if(i=r(),JAr(i))throw new Error("unexpected error. PRNG returned `NaN`.");for(n=t-1;n>=0;n--)e[n]=r();return e}LU.exports=YAr});var w1=u((lDr,PU)=>{"use strict";var ZAr=Ft(),$Ar=K(),QAr=ZAr-1;function KAr(){var r=$Ar(1+QAr*Math.random());return r|0}PU.exports=KAr});var N1=u((cDr,BU)=>{"use strict";var me=w(),Ke=P(),RU=R(),b1=A(),rOr=T(),eOr=ar().isPrimitive,tOr=_r(),iOr=Yr().isPrimitive,_U=yn(),gi=Ce(),nOr=K(),wr=vt(),rn=Ft(),aOr=_(),FU=IU(),MU=w1(),E1=rn-1|0,uOr=rn-1|0,sOr=16807,Er=32,Lu=1,Iu=3,rt=2,mi=Er+3,br=Er+6,en=Er+7,Su=mi+1,Tu=mi+2;function xU(r,e){var t;return e?t="option":t="argument",r.length<en+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==Lu?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+Lu+". Actual: "+r[0]+"."):r[1]!==Iu?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+Iu+". Actual: "+r[1]+"."):r[rt]!==Er?new RangeError("invalid "+t+". `state` array has an incompatible table length. Expected: "+Er+". Actual: "+r[rt]+"."):r[mi]!==2?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+2 .toString()+". Actual: "+r[mi]+"."):r[br]!==r.length-en?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-en)+". Actual: "+r[br]+"."):null}function oOr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!rOr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(b1(r,"copy")&&(i.copy=r.copy,!eOr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(b1(r,"state")){if(t=r.state,i.state=!0,!_U(t))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+t+"`.");if(s=xU(t,!0),s)throw s;i.copy===!1?e=t:(e=new wr(t.length),gi(t.length,t,1,e,1)),t=new wr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,t[br])}if(n===void 0)if(b1(r,"seed"))if(n=r.seed,i.seed=!0,iOr(n)){if(n>uOr)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+n+"`.");n|=0}else if(tOr(n)&&n.length>0)a=n.length,e=new wr(en+a),e[0]=Lu,e[1]=Iu,e[rt]=Er,e[mi]=2,e[Tu]=n[0],e[br]=a,gi.ndarray(a,n,1,0,e,1,br+1),t=new wr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,a),t=FU(y,t,Er),e[Su]=t[0];else throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+n+"`.");else n=MU()|0}else n=MU()|0;return t===void 0&&(e=new wr(en+1),e[0]=Lu,e[1]=Iu,e[rt]=Er,e[mi]=2,e[Tu]=n,e[br]=1,e[br+1]=n,t=new wr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,1),t=FU(y,t,Er),e[Su]=t[0]),me(m,"NAME","minstd-shuffle"),Ke(m,"seed",o),Ke(m,"seedLength",v),RU(m,"state",c,p),Ke(m,"stateLength",f),Ke(m,"byteLength",l),me(m,"toJSON",q),me(m,"MIN",1),me(m,"MAX",rn-1),me(m,"normalized",g),me(g,"NAME",m.NAME),Ke(g,"seed",o),Ke(g,"seedLength",v),RU(g,"state",c,p),Ke(g,"stateLength",f),Ke(g,"byteLength",l),me(g,"toJSON",q),me(g,"MIN",(m.MIN-1)/E1),me(g,"MAX",(m.MAX-1)/E1),m;function o(){var h=e[br];return gi(h,n,1,new wr(h),1)}function v(){return e[br]}function f(){return e.length}function l(){return e.byteLength}function c(){var h=e.length;return gi(h,e,1,new wr(h),1)}function p(h){var E;if(!_U(h))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+h+"`.");if(E=xU(h,!1),E)throw E;i.copy===!1?i.state&&h.length===e.length?gi(h.length,h,1,e,1):(e=h,i.state=!0):(h.length!==e.length&&(e=new wr(h.length)),gi(h.length,h,1,e,1)),t=new wr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,e[br])}function q(){var h={};return h.type="PRNG",h.name=m.NAME,h.state=aOr(e),h.params=[],h}function y(){var h=e[Tu]|0;return h=sOr*h%rn|0,e[Tu]=h,h|0}function m(){var h,E;return h=e[Su],E=nOr(Er*(h/rn)),h=t[E],e[Su]=h,t[E]=y(),h}function g(){return(m()-1)/E1}}BU.exports=oOr});var jU=u((pDr,CU)=>{"use strict";var vOr=N1(),fOr=w1(),lOr=vOr({seed:fOr()});CU.exports=lOr});var UU=u((gDr,GU)=>{"use strict";var cOr=w(),VU=jU(),pOr=N1();cOr(VU,"factory",pOr);GU.exports=VU});var HU=u((mDr,WU)=>{"use strict";var gOr=sr();function mOr(r,e){for(var t=r(),i=1;t>gOr(-e);)i+=1,t*=r();return i-1}WU.exports=mOr});var DU=u((qDr,kU)=>{"use strict";var qOr=K();function yOr(r){return qOr(r)===r&&r<0}kU.exports=yOr});var JU=u((yDr,XU)=>{"use strict";var hOr=DU();XU.exports=hOr});var YU=u((hDr,zU)=>{"use strict";var dOr=JU(),wOr=xi();function bOr(r){return dOr(r)?NaN:wOr(r+1)}zU.exports=bOr});var $U=u((dDr,ZU)=>{"use strict";var EOr=YU();ZU.exports=EOr});var eW=u((wDr,rW)=>{"use strict";var NOr=$U(),QU=K(),AOr=Ga(),OOr=G(),KU=$(),Pu=B(),SOr=zo(),TOr=1/12,LOr=1/360;function IOr(r,e){var t,i,n,a,s,o,v,f,l,c;for(t=OOr(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,s=-3.6224/(v-2)+.9277,n=.86*s;;){if(c=r(),c<=n)return l=c/s-.43,l*=2*o/(.5-KU(l))+v,l+=e+.445,QU(l);if(c>=s?l=r()-.5:(l=c/s-.93,l=AOr(l)*.5-l,c=s*r()),a=.5-KU(l),(a>=.013||a>=c)&&(f=QU((2*o/a+v)*l+e+.445),c*=i/(o/(a*a)+v),l=(f+.5)*Pu(e/f),l+=-e-SOr+f,l-=(TOr-LOr/(f*f))/f,f>=10&&l>=Pu(c*t)||(l=f*Pu(e)-e-NOr(f),f>=0&&f<=9&&l>=Pu(c))))return f}}rW.exports=IOr});var iW=u((bDr,tW)=>{"use strict";var POr=HU(),ROr=eW();function _Or(r,e){return e<30?POr(r,e):ROr(r,e)}tW.exports=_Or});var A1=u((EDr,fW)=>{"use strict";var qe=w(),Ru=P(),nW=R(),FOr=U().isPrimitive,aW=T(),uW=L(),sW=A(),oW=I(),MOr=M(),_u=H().factory,xOr=b(),BOr=_(),vW=iW();function COr(){var r,e,t,i;if(arguments.length===0)t=_u();else if(arguments.length===1&&aW(arguments[0]))if(e=arguments[0],sW(e,"prng")){if(!uW(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=_u(e);else{if(r=arguments[0],!FOr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!aW(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(sW(e,"prng")){if(!uW(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=_u(e)}else t=_u()}return r===void 0?i=p:i=c,qe(i,"NAME","poisson"),e&&e.prng?(qe(i,"seed",null),qe(i,"seedLength",null),nW(i,"state",oW(null),MOr),qe(i,"stateLength",null),qe(i,"byteLength",null),qe(i,"toJSON",oW(null)),qe(i,"PRNG",t)):(Ru(i,"seed",n),Ru(i,"seedLength",a),nW(i,"state",v,f),Ru(i,"stateLength",s),Ru(i,"byteLength",o),qe(i,"toJSON",l),qe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=BOr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return vW(t,r)}function p(q){return xOr(q)||q<=0?NaN:vW(t,q)}}fW.exports=COr});var cW=u((NDr,lW)=>{"use strict";var jOr=A1(),VOr=jOr();lW.exports=VOr});var O1=u((ADr,gW)=>{"use strict";var GOr=w(),pW=cW(),UOr=A1();GOr(pW,"factory",UOr);gW.exports=pW});var qW=u((ODr,mW)=>{"use strict";var WOr=U().isPrimitive,HOr=x().isPrimitive,kOr=tr();function DOr(r,e){return WOr(r)?!HOr(e)||kOr(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):e<=0||e>=1?new RangeError("invalid argument. Second argument must be on the interval `(0,1)`. Value: `"+e+"`."):null:new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.")}mW.exports=DOr});var I1=u((SDr,AW)=>{"use strict";var et=w(),Fu=P(),yW=R(),qi=A(),hW=T(),S1=kr(),dW=ar().isPrimitive,wW=L(),bW=I(),XOr=M(),EW=b(),yi=O1().factory,Mu=ni().factory,T1=Ce(),L1=or(),NW=Mt(),JOr=_(),zOr=qW();function YOr(){var r,e,t,i,n,a,s,o,v,f;if(s=!0,arguments.length===0)i={copy:!1},t=yi(i);else if(arguments.length===1){if(i=arguments[0],!hW(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(qi(i,"copy")&&!dW(i.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+i.copy+"`.");if(qi(i,"prng")){if(!wW(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");t=yi({prng:i.prng})}else{if(qi(i,"state")&&!S1(i.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+i.state+"`.");i=NW(i,1),i.copy===!1?s=!1:i.state&&(i.state=T1(i.state.length,i.state,1,new L1(i.state.length),1)),i.copy=!1,t=yi(i)}}else{if(f=arguments[0],v=arguments[1],o=zOr(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!hW(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(qi(i,"copy")&&!dW(i.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+i.copy+"`.");if(qi(i,"prng")){if(!wW(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");t=yi({prng:i.prng})}else{if(qi(i,"state")&&!S1(i.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+i.state+"`.");i=NW(i,1),i.copy===!1?s=!1:i.state&&(i.state=T1(i.state.length,i.state,1,new L1(i.state.length),1)),i.copy=!1,t=yi(i)}}else i={copy:!1},t=yi(i)}return i&&i.prng?f===void 0?r=Mu({prng:i.prng}):r=Mu(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=Mu({state:e,copy:!1}):r=Mu(f,v/(1-v),{state:e,copy:!1})),f===void 0?n=E:n=h,a=t.PRNG,et(n,"NAME","negative-binomial"),i&&i.prng?(et(n,"seed",null),et(n,"seedLength",null),yW(n,"state",bW(null),XOr),et(n,"stateLength",null),et(n,"byteLength",null),et(n,"toJSON",bW(null))):(Fu(n,"seed",l),Fu(n,"seedLength",c),yW(n,"state",y,m),Fu(n,"stateLength",p),Fu(n,"byteLength",q),et(n,"toJSON",g)),et(n,"PRNG",a),n;function l(){return a.seed}function c(){return a.seedLength}function p(){return a.stateLength}function q(){return a.byteLength}function y(){return a.state}function m(N){if(!S1(N))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+N+"`.");s&&(N=T1(N.length,N,1,new L1(N.length),1)),a.state=N}function g(){var N={};return N.type="PRNG",N.name=n.NAME,N.state=JOr(a.state),f===void 0?N.params=[]:N.params=[f,v],N}function h(){return t(r())}function E(N,C){return EW(N)||EW(C)||C<=0||C>=1?NaN:t(r(N,C/(1-C)))}}AW.exports=YOr});var SW=u((TDr,OW)=>{"use strict";var ZOr=I1(),$Or=ZOr();OW.exports=$Or});var IW=u((LDr,LW)=>{"use strict";var QOr=w(),TW=SW(),KOr=I1();QOr(TW,"factory",KOr);LW.exports=TW});var RW=u((IDr,PW)=>{"use strict";var rSr=x().isPrimitive,eSr=U().isPrimitive,tSr=tr();function iSr(r,e){return!rSr(r)||tSr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):eSr(e)?null:new TypeError("invalid argument. `sigma` must be a positive number. Value: `"+e+"`.")}PW.exports=iSr});var FW=u((PDr,_W)=>{"use strict";function nSr(r,e,t){return e+t*r()}_W.exports=nSr});var P1=u((RDr,UW)=>{"use strict";var tt=w(),xu=P(),MW=R(),xW=T(),BW=L(),CW=A(),jW=I(),aSr=M(),hi=We().factory,VW=b(),uSr=_(),sSr=RW(),GW=FW();function oSr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=hi();else if(arguments.length===1){if(t=arguments[0],!xW(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(CW(t,"prng")){if(!BW(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=hi({prng:t.prng})}else e=hi(t)}else{if(s=arguments[0],r=arguments[1],a=sSr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!xW(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(CW(t,"prng")){if(!BW(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=hi({prng:t.prng})}else e=hi(t)}else e=hi()}return s===void 0?n=m:n=y,i=e.PRNG,tt(n,"NAME","normal"),t&&t.prng?(tt(n,"seed",null),tt(n,"seedLength",null),MW(n,"state",jW(null),aSr),tt(n,"stateLength",null),tt(n,"byteLength",null),tt(n,"toJSON",jW(null))):(xu(n,"seed",o),xu(n,"seedLength",v),MW(n,"state",c,p),xu(n,"stateLength",f),xu(n,"byteLength",l),tt(n,"toJSON",q)),tt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=uSr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return GW(e,s,r)}function m(g,h){return VW(g)||VW(h)||h<=0?NaN:GW(e,g,h)}}UW.exports=oSr});var HW=u((_Dr,WW)=>{"use strict";var vSr=P1(),fSr=vSr();WW.exports=fSr});var XW=u((FDr,DW)=>{"use strict";var lSr=w(),kW=HW(),cSr=P1();lSr(kW,"factory",cSr);DW.exports=kW});var YW=u((MDr,zW)=>{"use strict";var JW=U().isPrimitive;function pSr(r,e){return JW(r)?JW(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}zW.exports=pSr});var $W=u((xDr,ZW)=>{"use strict";var gSr=Q();function mSr(r,e,t){return t/gSr(r(),1/e)}ZW.exports=mSr});var R1=u((BDr,aH)=>{"use strict";var ye=w(),Bu=P(),QW=R(),KW=T(),rH=L(),eH=A(),tH=I(),qSr=M(),Cu=H().factory,iH=b(),ySr=_(),hSr=YW(),nH=$W();function dSr(){var r,e,t,i,n,a;if(arguments.length===0)i=Cu();else if(arguments.length===1){if(t=arguments[0],!KW(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(eH(t,"prng")){if(!rH(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");i=t.prng}else i=Cu(t)}else{if(r=arguments[0],e=arguments[1],a=hSr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!KW(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(eH(t,"prng")){if(!rH(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");i=t.prng}else i=Cu(t)}else i=Cu()}return r===void 0?n=y:n=q,ye(n,"NAME","pareto-type1"),t&&t.prng?(ye(n,"seed",null),ye(n,"seedLength",null),QW(n,"state",tH(null),qSr),ye(n,"stateLength",null),ye(n,"byteLength",null),ye(n,"toJSON",tH(null)),ye(n,"PRNG",i)):(Bu(n,"seed",s),Bu(n,"seedLength",o),QW(n,"state",l,c),Bu(n,"stateLength",v),Bu(n,"byteLength",f),ye(n,"toJSON",p),ye(n,"PRNG",i),i=i.normalized),n;function s(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function l(){return i.state}function c(m){i.state=m}function p(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=ySr(i.state),r===void 0?m.params=[]:m.params=[r,e],m}function q(){return nH(i,r,e)}function y(m,g){return iH(m)||iH(g)||m<=0||g<=0?NaN:nH(i,m,g)}}aH.exports=dSr});var sH=u((CDr,uH)=>{"use strict";var wSr=R1(),bSr=wSr();uH.exports=bSr});var fH=u((jDr,vH)=>{"use strict";var ESr=w(),oH=sH(),NSr=R1();ESr(oH,"factory",NSr);vH.exports=oH});var cH=u((VDr,lH)=>{"use strict";var ASr=G(),OSr=B();function SSr(r,e){return e*ASr(-2*OSr(r()))}lH.exports=SSr});var _1=u((GDr,dH)=>{"use strict";var he=w(),ju=P(),pH=R(),TSr=U().isPrimitive,gH=T(),mH=L(),qH=A(),yH=I(),LSr=M(),Vu=H().factory,ISr=b(),PSr=_(),hH=cH();function RSr(){var r,e,t,i;if(arguments.length===0)t=Vu();else if(arguments.length===1&&gH(arguments[0]))if(e=arguments[0],qH(e,"prng")){if(!mH(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Vu(e);else{if(r=arguments[0],!TSr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!gH(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(qH(e,"prng")){if(!mH(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Vu(e)}else t=Vu()}return r===void 0?i=p:i=c,he(i,"NAME","rayleigh"),e&&e.prng?(he(i,"seed",null),he(i,"seedLength",null),pH(i,"state",yH(null),LSr),he(i,"stateLength",null),he(i,"byteLength",null),he(i,"toJSON",yH(null)),he(i,"PRNG",t)):(ju(i,"seed",n),ju(i,"seedLength",a),pH(i,"state",v,f),ju(i,"stateLength",s),ju(i,"byteLength",o),he(i,"toJSON",l),he(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=PSr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return hH(t,r)}function p(q){return ISr(q)||q<=0?NaN:hH(t,q)}}dH.exports=RSr});var bH=u((UDr,wH)=>{"use strict";var _Sr=_1(),FSr=_Sr();wH.exports=FSr});var AH=u((WDr,NH)=>{"use strict";var MSr=w(),EH=bH(),xSr=_1();MSr(EH,"factory",xSr);NH.exports=EH});var B1=u((HDr,FH)=>{"use strict";var it=w(),Gu=P(),OH=R(),di=A(),SH=U().isPrimitive,TH=T(),F1=kr(),LH=ar().isPrimitive,BSr=b(),IH=L(),PH=I(),CSr=M(),Uu=Qi().factory,wi=We().factory,M1=Ce(),x1=or(),RH=Mt(),jSr=_(),_H=G();function VSr(){var r,e,t,i,n,a,s,o;if(s=!0,arguments.length===0)n={copy:!1},t=wi(n);else if(arguments.length===1)if(TH(arguments[0])){if(n=arguments[0],di(n,"copy")&&!LH(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(di(n,"prng")){if(!IH(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=wi({prng:n.prng})}else{if(di(n,"state")&&!F1(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=RH(n,1),n.copy===!1?s=!1:n.state&&(n.state=M1(n.state.length,n.state,1,new x1(n.state.length),1)),n.copy=!1,t=wi(n)}}else{if(o=arguments[0],!SH(o))throw new TypeError("invalid argument. First argument must be a positive number or an options object. Value: `"+o+"`.");n={copy:!1},t=wi(n)}else{if(o=arguments[0],!SH(o))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+o+"`.");if(n=arguments[1],!TH(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(di(n,"copy")&&!LH(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(di(n,"prng")){if(!IH(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=wi({prng:n.prng})}else{if(di(n,"state")&&!F1(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=RH(n,1),n.copy===!1?s=!1:n.state&&(n.state=M1(n.state.length,n.state,1,new x1(n.state.length),1)),n.copy=!1,t=wi(n)}}return n&&n.prng?o===void 0?r=Uu({prng:n.prng}):r=Uu(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=Uu({state:e,copy:!1}):r=Uu(o,{state:e,copy:!1})),o===void 0?a=g:a=m,i=t.PRNG,it(a,"NAME","t"),n&&n.prng?(it(a,"seed",null),it(a,"seedLength",null),OH(a,"state",PH(null),CSr),it(a,"stateLength",null),it(a,"byteLength",null),it(a,"toJSON",PH(null))):(Gu(a,"seed",v),Gu(a,"seedLength",f),OH(a,"state",p,q),Gu(a,"stateLength",l),Gu(a,"byteLength",c),it(a,"toJSON",y)),it(a,"PRNG",i),a;function v(){return i.seed}function f(){return i.seedLength}function l(){return i.stateLength}function c(){return i.byteLength}function p(){return i.state}function q(h){if(!F1(h))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+h+"`.");s&&(h=M1(h.length,h,1,new x1(h.length),1)),i.state=h}function y(){var h={};return h.type="PRNG",h.name=a.NAME,h.state=jSr(i.state),o===void 0?h.params=[]:h.params=[o],h}function m(){return t()/_H(r()/o)}function g(h){return BSr(h)||h<=0?NaN:t()/_H(r(h)/h)}}FH.exports=VSr});var xH=u((kDr,MH)=>{"use strict";var GSr=B1(),USr=GSr();MH.exports=USr});var jH=u((DDr,CH)=>{"use strict";var WSr=w(),BH=xH(),HSr=B1();WSr(BH,"factory",HSr);CH.exports=BH});var GH=u((XDr,VH)=>{"use strict";var C1=x().isPrimitive,j1=tr();function kSr(r,e,t){return!C1(r)||j1(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!C1(e)||j1(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):!C1(t)||j1(t)?new TypeError("invalid argument. Third argument must be a number primitive and not `NaN`. Value: `"+t+"`."):r<=t&&t<=e?null:new RangeError("invalid arguments. The condition `a <= c <= b` must be satisfied. Value: `["+r+","+e+","+t+"]`.")}VH.exports=kSr});var HH=u((JDr,WH)=>{"use strict";var UH=G();function DSr(r,e,t,i){var n,a,s;return n=(i-e)/(t-e),s=r(),s<n?(a=(t-e)*(i-e),e+UH(a*s)):(a=(t-e)*(t-i),t-UH(a*(1-s)))}WH.exports=DSr});var G1=u((zDr,ZH)=>{"use strict";var de=w(),Wu=P(),kH=R(),DH=T(),XH=L(),JH=A(),zH=I(),XSr=M(),Hu=H().factory,V1=b(),JSr=_(),zSr=GH(),YH=HH();function YSr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=Hu();else if(arguments.length===1){if(r=arguments[0],!DH(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(JH(r,"prng")){if(!XH(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Hu(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=zSr(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!DH(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(JH(r,"prng")){if(!XH(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Hu(r)}else e=Hu()}return n===void 0?t=m:t=y,de(t,"NAME","triangular"),r&&r.prng?(de(t,"seed",null),de(t,"seedLength",null),kH(t,"state",zH(null),XSr),de(t,"stateLength",null),de(t,"byteLength",null),de(t,"toJSON",zH(null)),de(t,"PRNG",e)):(Wu(t,"seed",o),Wu(t,"seedLength",v),kH(t,"state",c,p),Wu(t,"stateLength",f),Wu(t,"byteLength",l),de(t,"toJSON",q),de(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function l(){return e.byteLength}function c(){return e.state}function p(g){e.state=g}function q(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=JSr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function y(){return YH(e,n,a,s)}function m(g,h,E){return V1(g)||V1(h)||V1(E)||!(g<=E&&E<=h)?NaN:YH(e,g,h,E)}}ZH.exports=YSr});var QH=u((YDr,$H)=>{"use strict";var ZSr=G1(),$Sr=ZSr();$H.exports=$Sr});var ek=u((ZDr,rk)=>{"use strict";var QSr=w(),KH=QH(),KSr=G1();QSr(KH,"factory",KSr);rk.exports=KH});var ak=u(($Dr,nk)=>{"use strict";var tk=x().isPrimitive,ik=tr();function rTr(r,e){return!tk(r)||ik(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!tk(e)||ik(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):r>=e?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+r+","+e+"]`."):null}nk.exports=rTr});var sk=u((QDr,uk)=>{"use strict";function eTr(r,e,t){var i=r();return t*i+(1-i)*e}uk.exports=eTr});var U1=u((KDr,mk)=>{"use strict";var we=w(),ku=P(),ok=R(),vk=T(),fk=L(),lk=A(),ck=I(),tTr=M(),Du=H().factory,pk=b(),iTr=_(),nTr=ak(),gk=sk();function aTr(){var r,e,t,i,n,a;if(arguments.length===0)e=Du();else if(arguments.length===1){if(r=arguments[0],!vk(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(lk(r,"prng")){if(!fk(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Du(r)}else{if(n=arguments[0],a=arguments[1],i=nTr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!vk(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(lk(r,"prng")){if(!fk(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Du(r)}else e=Du()}return n===void 0?t=y:t=q,we(t,"NAME","uniform"),r&&r.prng?(we(t,"seed",null),we(t,"seedLength",null),ok(t,"state",ck(null),tTr),we(t,"stateLength",null),we(t,"byteLength",null),we(t,"toJSON",ck(null)),we(t,"PRNG",e)):(ku(t,"seed",s),ku(t,"seedLength",o),ok(t,"state",l,c),ku(t,"stateLength",v),ku(t,"byteLength",f),we(t,"toJSON",p),we(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=iTr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return gk(e,n,a)}function y(m,g){return pk(m)||pk(g)||m>=g?NaN:gk(e,m,g)}}mk.exports=aTr});var yk=u((rXr,qk)=>{"use strict";var uTr=U1(),sTr=uTr();qk.exports=sTr});var wk=u((eXr,dk)=>{"use strict";var oTr=w(),hk=yk(),vTr=U1();oTr(hk,"factory",vTr);dk.exports=hk});var Nk=u((tXr,Ek)=>{"use strict";var bk=U().isPrimitive;function fTr(r,e){return bk(r)?bk(e)?null:new TypeError("invalid argument. Shape parameter must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. Scale parameter must be a positive number. Value: `"+r+"`.")}Ek.exports=fTr});var Ok=u((iXr,Ak)=>{"use strict";var lTr=Q(),cTr=B();function pTr(r,e,t){return t*lTr(-cTr(1-r()),1/e)}Ak.exports=pTr});var W1=u((nXr,Fk)=>{"use strict";var be=w(),Xu=P(),Sk=R(),Tk=T(),Lk=L(),Ik=A(),Pk=I(),gTr=M(),Ju=H().factory,Rk=b(),mTr=_(),qTr=Nk(),_k=Ok();function yTr(){var r,e,t,i,n,a;if(arguments.length===0)t=Ju();else if(arguments.length===1){if(e=arguments[0],!Tk(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(Ik(e,"prng")){if(!Lk(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Ju(e)}else{if(a=arguments[0],r=arguments[1],n=qTr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!Tk(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(Ik(e,"prng")){if(!Lk(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Ju(e)}else t=Ju()}return r===void 0?i=y:i=q,be(i,"NAME","weibull"),e&&e.prng?(be(i,"seed",null),be(i,"seedLength",null),Sk(i,"state",Pk(null),gTr),be(i,"stateLength",null),be(i,"byteLength",null),be(i,"toJSON",Pk(null)),be(i,"PRNG",t)):(Xu(i,"seed",s),Xu(i,"seedLength",o),Sk(i,"state",l,c),Xu(i,"stateLength",v),Xu(i,"byteLength",f),be(i,"toJSON",p),be(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function l(){return t.state}function c(m){t.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=mTr(t.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return _k(t,a,r)}function y(m,g){return Rk(m)||Rk(g)||m<=0||g<=0?NaN:_k(t,m,g)}}Fk.exports=yTr});var xk=u((aXr,Mk)=>{"use strict";var hTr=W1(),dTr=hTr();Mk.exports=dTr});var jk=u((uXr,Ck)=>{"use strict";var wTr=w(),Bk=xk(),bTr=W1();wTr(Bk,"factory",bTr);Ck.exports=Bk});var Gk=u((sXr,Vk)=>{"use strict";var F={};F.arcsine=i_().factory;F.bernoulli=g_().factory;F.beta=gF().factory;F.betaprime=ZF().factory;F.binomial=PM().factory;F.boxMueller=DM().factory;F.cauchy=ox().factory;F.chi=Px().factory;F.chisquare=Qi().factory;F.cosine=mB().factory;F.discreteUniform=xB().factory;F.erlang=QB().factory;F.exponential=cC().factory;F.f=PC().factory;F.frechet=JC().factory;F.gamma=ni().factory;F.geometric=oj().factory;F.gumbel=Sj().factory;F.hypergeometric=rV().factory;F.improvedZiggurat=We().factory;F.invgamma=mV().factory;F.kumaraswamy=MV().factory;F.laplace=$V().factory;F.levy=BG().factory;F.logistic=KG().factory;F.lognormal=qU().factory;F.minstd=TU().factory;F.minstdShuffle=UU().factory;F.mt19937=H().factory;F.negativeBinomial=IW().factory;F.normal=XW().factory;F.pareto1=fH().factory;F.poisson=O1().factory;F.rayleigh=AH().factory;F.t=jH().factory;F.triangular=ek().factory;F.uniform=wk().factory;F.weibull=jk().factory;Vk.exports=F});var Wk=u((oXr,Uk)=>{"use strict";function ETr(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N;for(y=e[1],m=e[0],g=r[0],h=r[1],l=t[0],c=t[1],s=l[1],o=l[0]-y*s,v=c[1],f=c[0]-y*v,p=0,q=0,n=[],E=0;E<m;E++){for(a=[],N=0;N<y;N++)a.push(i(g[p],h[q])),p+=s,q+=v;n.push(a),p+=o,q+=f}return n}Uk.exports=ETr});var kk=u((vXr,Hk)=>{"use strict";var NTr=x().isPrimitive,ATr=j(),OTr=J(),STr=S();function TTr(r,e){return t;function t(i){var n;if(!NTr(i)){if(e.nonnumeric===void 0)throw new TypeError(STr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===ATr?e.pinf:n===OTr?e.ninf:n}}Hk.exports=TTr});var zk=u((fXr,Jk)=>{"use strict";var Dk=x().isPrimitive,LTr=j(),ITr=J(),Xk=S();function PTr(r,e){return t;function t(i,n){var a;if(!Dk(i)){if(e.nonnumeric===void 0)throw new TypeError(Xk("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Dk(n)){if(e.nonnumeric===void 0)throw new TypeError(Xk("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===LTr?e.pinf:a===ITr?e.ninf:a}}Jk.exports=PTr});var Zk=u((lXr,Yk)=>{"use strict";var H1=x().isPrimitive,RTr=j(),_Tr=J(),k1=S();function FTr(r,e){return t;function t(i,n,a){var s;if(!H1(i)){if(e.nonnumeric===void 0)throw new TypeError(k1("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!H1(n)){if(e.nonnumeric===void 0)throw new TypeError(k1("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!H1(a)){if(e.nonnumeric===void 0)throw new TypeError(k1("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return s=r(i,n,a),s!==s?e.nan:s===RTr?e.pinf:s===_Tr?e.ninf:s}}Yk.exports=FTr});var Qk=u((cXr,$k)=>{"use strict";var MTr=D().isPrimitive,xTr=S();function BTr(r){return e;function e(t){if(!MTr(t))throw new TypeError(xTr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}$k.exports=BTr});var tD=u((pXr,eD)=>{"use strict";var Kk=D().isPrimitive,rD=S();function CTr(r){return e;function e(t,i){if(!Kk(t))throw new TypeError(rD("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Kk(i))throw new TypeError(rD("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}eD.exports=CTr});var nD=u((gXr,iD)=>{"use strict";var D1=D().isPrimitive,X1=S();function jTr(r){return e;function e(t,i){if(!D1(t))throw new TypeError(X1("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!D1(i))throw new TypeError(X1("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!D1(v3))throw new TypeError(X1("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(v3)));return r(t,i,v3)}}iD.exports=jTr});var uD=u((mXr,aD)=>{"use strict";function VTr(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N,C,O,k,nr,W;for(E=e[1],N=e[0],C=r[0],O=r[1],k=r[2],p=t[0],q=t[1],y=t[2],s=p[1],o=p[0]-E*s,v=q[1],f=q[0]-E*v,l=y[1],c=y[0]-E*l,m=0,g=0,h=0,n=[],nr=0;nr<N;nr++){for(a=[],W=0;W<E;W++)a.push(i(C[m],O[g],k[h])),m+=s,g+=v,h+=l;n.push(a),m+=o,g+=f,h+=c}return n}aD.exports=VTr});var oD=u((qXr,sD)=>{"use strict";function GTr(r,e){var t,i,n,a,s;for(t=r.length,i=r[0].length,a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)n[s]=e(n[s]);return r}sD.exports=GTr});var fD=u((yXr,vD)=>{"use strict";var UTr=oD();function WTr(r,e){return UTr(r,e)}vD.exports=WTr});var cD=u((hXr,lD)=>{"use strict";var Wr={};Wr.binary2d=Wk();Wr.d_d=kk();Wr.dd_d=zk();Wr.ddd_d=Zk();Wr.s_o=Qk();Wr.ss_o=tD();Wr.sss_o=nD();Wr.ternary2d=uD();Wr.unary2d=fD();lD.exports=Wr});var gD=u((dXr,pD)=>{"use strict";var At=sp(),Nr,V={};V.ANSCOMBES_QUARTET=z5();V.bartlettTest=dw();V.broadcast=Sw();V.cumax=xw().ndarray;V.filled=jw();V.filledBy=Dw();V.flattenArray=ea();V.isArray=fr();V.isBoolean=ar().isPrimitive;V.isNumber=x().isPrimitive;V.isPositiveNumber=U().isPrimitive;V.isString=D().isPrimitive;V.iterator2array=yb();V.iterSawtoothWave=uE();V.linspace=nO();V.max=pO().ndarray;V.mskmax=EO().ndarray;V.assert={};Nr=CS();At(Nr,V.assert);V.blas={};Nr=DS();At(Nr,V.blas);Nr=RL();At(Nr,V);V.dists={};Nr=tI();At(Nr,V.dists);Nr=hP();At(Nr,V);V.random={};Nr=Gk();At(Nr,V.random);V.tools={};Nr=cD();At(Nr,V.tools);pD.exports=V});var kTr=u((wXr,mD)=>{var HTr=gD();mD.exports=HTr});return kTr();})();
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
