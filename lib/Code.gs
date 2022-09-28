/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var rn=u((QOr,H1)=>{"use strict";function qk(r){return Object.keys(Object(r))}H1.exports=qk});var D1=u((KOr,k1)=>{"use strict";var hk=rn();function dk(){return(hk(arguments)||"").length!==2}function wk(){return dk(1,2)}k1.exports=wk});var J1=u((rSr,X1)=>{"use strict";var bk=typeof Object.keys<"u";X1.exports=bk});var Y1=u((eSr,z1)=>{"use strict";function Ek(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}z1.exports=Ek});var $1=u((tSr,Z1)=>{"use strict";var Nk=Y1();Z1.exports=Nk});var K1=u((iSr,Q1)=>{"use strict";var Ak=$1(),Ok=Ak();function Sk(){return Ok&&typeof Symbol.toStringTag=="symbol"}Q1.exports=Sk});var Nt=u((nSr,rf)=>{"use strict";var Tk=K1();rf.exports=Tk});var Du=u((aSr,ef)=>{"use strict";var Lk=Object.prototype.toString;ef.exports=Lk});var nf=u((uSr,tf)=>{"use strict";var Ik=Du();function Pk(r){return Ik.call(r)}tf.exports=Pk});var uf=u((sSr,af)=>{"use strict";var _k=Object.prototype.hasOwnProperty;function Rk(r,e){return r==null?!1:_k.call(r,e)}af.exports=Rk});var A=u((oSr,sf)=>{"use strict";var Fk=uf();sf.exports=Fk});var vf=u((vSr,of)=>{"use strict";var Mk=typeof Symbol=="function"?Symbol.toStringTag:"";of.exports=Mk});var lf=u((fSr,ff)=>{"use strict";var xk=A(),di=vf(),Xu=Du();function Bk(r){var e,t,i;if(r==null)return Xu.call(r);t=r[di],e=xk(r,di);try{r[di]=void 0}catch{return Xu.call(r)}return i=Xu.call(r),e?r[di]=t:delete r[di],i}ff.exports=Bk});var Y=u((lSr,cf)=>{"use strict";var Ck=Nt(),jk=nf(),Vk=lf(),Ju;Ck()?Ju=Vk:Ju=jk;cf.exports=Ju});var zu=u((cSr,pf)=>{"use strict";var Gk=Y();function Uk(r){return Gk(r)==="[object Arguments]"}pf.exports=Uk});var yf=u((pSr,mf)=>{"use strict";var Wk=zu(),gf;function Hk(){return Wk(arguments)}gf=Hk();mf.exports=gf});var hf=u((gSr,qf)=>{"use strict";var kk=typeof Object.defineProperty=="function"?Object.defineProperty:null;qf.exports=kk});var wf=u((mSr,df)=>{"use strict";var Dk=hf();function Xk(){try{return Dk({},"x",{}),!0}catch{return!1}}df.exports=Xk});var Ef=u((ySr,bf)=>{"use strict";var Jk=Object.defineProperty;bf.exports=Jk});var Tf=u((qSr,Sf)=>{"use strict";var At=Object.prototype,Nf=At.toString,Af=At.__defineGetter__,Of=At.__defineSetter__,zk=At.__lookupGetter__,Yk=At.__lookupSetter__;function Zk(r,e,t){var i,n,a,s;if(typeof r!="object"||r===null||Nf.call(r)==="[object Array]")throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if(typeof t!="object"||t===null||Nf.call(t)==="[object Array]")throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if(n="value"in t,n&&(zk.call(r,e)||Yk.call(r,e)?(i=r.__proto__,r.__proto__=At,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,s="set"in t,n&&(a||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Af&&Af.call(r,e,t.get),s&&Of&&Of.call(r,e,t.set),r}Sf.exports=Zk});var be=u((hSr,Lf)=>{"use strict";var $k=wf(),Qk=Ef(),Kk=Tf(),Yu;$k()?Yu=Qk:Yu=Kk;Lf.exports=Yu});var Pf=u((dSr,If)=>{"use strict";var rD=be();function eD(r,e,t){rD(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}If.exports=eD});var w=u((wSr,_f)=>{"use strict";var tD=Pf();_f.exports=tD});var Zu=u((bSr,Rf)=>{"use strict";function iD(r){return typeof r=="string"}Rf.exports=iD});var Mf=u((ESr,Ff)=>{"use strict";var nD=String.prototype.valueOf;Ff.exports=nD});var Bf=u((NSr,xf)=>{"use strict";var aD=Mf();function uD(r){try{return aD.call(r),!0}catch{return!1}}xf.exports=uD});var $u=u((ASr,Cf)=>{"use strict";var sD=Nt(),oD=Y(),vD=Bf(),fD=sD();function lD(r){return typeof r=="object"?r instanceof String?!0:fD?vD(r):oD(r)==="[object String]":!1}Cf.exports=lD});var Vf=u((OSr,jf)=>{"use strict";var cD=Zu(),pD=$u();function gD(r){return cD(r)||pD(r)}jf.exports=gD});var k=u((SSr,Uf)=>{"use strict";var Gf=w(),Qu=Vf(),mD=Zu(),yD=$u();Gf(Qu,"isPrimitive",mD);Gf(Qu,"isObject",yD);Uf.exports=Qu});var Ku=u((TSr,Wf)=>{"use strict";function qD(r){return typeof r=="number"}Wf.exports=qD});var kf=u((LSr,Hf)=>{"use strict";Hf.exports=Number});var en=u((ISr,Df)=>{"use strict";var hD=kf();Df.exports=hD});var Jf=u((PSr,Xf)=>{"use strict";var dD=en(),wD=dD.prototype.toString;Xf.exports=wD});var Yf=u((_Sr,zf)=>{"use strict";var bD=Jf();function ED(r){try{return bD.call(r),!0}catch{return!1}}zf.exports=ED});var r0=u((RSr,Zf)=>{"use strict";var ND=Nt(),AD=Y(),OD=en(),SD=Yf(),TD=ND();function LD(r){return typeof r=="object"?r instanceof OD?!0:TD?SD(r):AD(r)==="[object Number]":!1}Zf.exports=LD});var Qf=u((FSr,$f)=>{"use strict";var ID=Ku(),PD=r0();function _D(r){return ID(r)||PD(r)}$f.exports=_D});var x=u((MSr,rl)=>{"use strict";var Kf=w(),e0=Qf(),RD=Ku(),FD=r0();Kf(e0,"isPrimitive",RD);Kf(e0,"isObject",FD);rl.exports=e0});var tl=u((xSr,el)=>{"use strict";function MD(r){return r!==r}el.exports=MD});var b=u((BSr,il)=>{"use strict";var xD=tl();il.exports=xD});var t0=u((CSr,nl)=>{"use strict";var BD=x().isPrimitive,CD=b();function jD(r){return BD(r)&&CD(r)}nl.exports=jD});var i0=u((jSr,al)=>{"use strict";var VD=x().isObject,GD=b();function UD(r){return VD(r)&&GD(r.valueOf())}al.exports=UD});var sl=u((VSr,ul)=>{"use strict";var WD=t0(),HD=i0();function kD(r){return WD(r)||HD(r)}ul.exports=kD});var er=u((GSr,vl)=>{"use strict";var ol=w(),n0=sl(),DD=t0(),XD=i0();ol(n0,"isPrimitive",DD);ol(n0,"isObject",XD);vl.exports=n0});var j=u((USr,fl)=>{"use strict";var JD=Number.POSITIVE_INFINITY;fl.exports=JD});var Z=u((WSr,ll)=>{"use strict";var zD=en(),YD=zD.NEGATIVE_INFINITY;ll.exports=YD});var pl=u((HSr,cl)=>{"use strict";var ZD=Math.floor;cl.exports=ZD});var K=u((kSr,gl)=>{"use strict";var $D=pl();gl.exports=$D});var yl=u((DSr,ml)=>{"use strict";var QD=K();function KD(r){return QD(r)===r}ml.exports=KD});var Nr=u((XSr,ql)=>{"use strict";var rX=yl();ql.exports=rX});var a0=u((JSr,hl)=>{"use strict";var eX=j(),tX=Z(),iX=Nr();function nX(r){return r<eX&&r>tX&&iX(r)}hl.exports=nX});var u0=u((zSr,dl)=>{"use strict";var aX=x().isPrimitive,uX=a0();function sX(r){return aX(r)&&uX(r)}dl.exports=sX});var s0=u((YSr,wl)=>{"use strict";var oX=x().isObject,vX=a0();function fX(r){return oX(r)&&vX(r.valueOf())}wl.exports=fX});var El=u((ZSr,bl)=>{"use strict";var lX=u0(),cX=s0();function pX(r){return lX(r)||cX(r)}bl.exports=pX});var Pr=u(($Sr,Al)=>{"use strict";var Nl=w(),o0=El(),gX=u0(),mX=s0();Nl(o0,"isPrimitive",gX);Nl(o0,"isObject",mX);Al.exports=o0});var v0=u((QSr,Ol)=>{"use strict";var yX=Object.prototype.propertyIsEnumerable;Ol.exports=yX});var Ll=u((KSr,Tl)=>{"use strict";var qX=v0(),Sl;function hX(){return!qX.call("beep","0")}Sl=hX();Tl.exports=Sl});var Pl=u((rTr,Il)=>{"use strict";var dX=k(),wX=er().isPrimitive,bX=Pr().isPrimitive,EX=v0(),NX=Ll();function AX(r,e){var t;return r==null?!1:(t=EX.call(r,e),!t&&NX&&dX(r)?(e=+e,!wX(e)&&bX(e)&&e>=0&&e<r.length):t)}Il.exports=AX});var tn=u((eTr,_l)=>{"use strict";var OX=Pl();_l.exports=OX});var Fl=u((tTr,Rl)=>{"use strict";var SX=Y(),f0;function TX(r){return SX(r)==="[object Array]"}Array.isArray?f0=Array.isArray:f0=TX;Rl.exports=f0});var vr=u((iTr,Ml)=>{"use strict";var LX=Fl();Ml.exports=LX});var Ot=u((nTr,xl)=>{"use strict";var IX=4294967295;xl.exports=IX});var Cl=u((aTr,Bl)=>{"use strict";var PX=A(),_X=tn(),RX=vr(),FX=Nr(),MX=Ot();function xX(r){return r!==null&&typeof r=="object"&&!RX(r)&&typeof r.length=="number"&&FX(r.length)&&r.length>=0&&r.length<=MX&&PX(r,"callee")&&!_X(r,"callee")}Bl.exports=xX});var c0=u((uTr,jl)=>{"use strict";var BX=yf(),CX=zu(),jX=Cl(),l0;BX?l0=CX:l0=jX;jl.exports=l0});var Ul=u((sTr,Gl)=>{"use strict";var VX=c0(),Vl=rn(),GX=Array.prototype.slice;function UX(r){return VX(r)?Vl(GX.call(r)):Vl(r)}Gl.exports=UX});var Hl=u((oTr,Wl)=>{"use strict";var WX=vr();function HX(r){if(typeof r!="function")throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return e;function e(t){var i,n;if(!WX(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}Wl.exports=HX});var Dl=u((vTr,kl)=>{"use strict";var kX=Hl();kl.exports=kX});var Jl=u((fTr,Xl)=>{"use strict";function DX(r){return r!==null&&typeof r=="object"}Xl.exports=DX});var g0=u((lTr,zl)=>{"use strict";var XX=w(),JX=Dl(),p0=Jl(),zX=JX(p0);XX(p0,"isObjectLikeArray",zX);zl.exports=p0});var Zl=u((cTr,Yl)=>{"use strict";function YX(){}Yl.exports=YX});var M=u((pTr,$l)=>{"use strict";var ZX=Zl();$l.exports=ZX});var Kl=u((gTr,Ql)=>{"use strict";var $X=tn(),QX=M(),KX=$X(QX,"prototype");Ql.exports=KX});var e2=u((mTr,r2)=>{"use strict";var rJ=tn(),eJ={toString:null},tJ=!rJ(eJ,"toString");r2.exports=tJ});var i2=u((yTr,t2)=>{"use strict";var iJ=9007199254740991;t2.exports=iJ});var a2=u((qTr,n2)=>{"use strict";var nJ=Nr(),aJ=i2();function uJ(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&nJ(r.length)&&r.length>=0&&r.length<=aJ}n2.exports=uJ});var _r=u((hTr,u2)=>{"use strict";var sJ=a2();u2.exports=sJ});var v2=u((dTr,o2)=>{"use strict";var s2=er(),oJ=_r(),vJ=k().isPrimitive,fJ=Pr().isPrimitive;function lJ(r,e,t){var i,n;if(!oJ(r)&&!vJ(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(i=r.length,i===0)return-1;if(arguments.length===3){if(!fJ(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(s2(e)){for(;n<i;n++)if(s2(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}o2.exports=lJ});var nn=u((wTr,f2)=>{"use strict";var cJ=v2();f2.exports=cJ});var c2=u((bTr,l2)=>{"use strict";var pJ=/./;l2.exports=pJ});var m0=u((ETr,p2)=>{"use strict";function gJ(r){return typeof r=="boolean"}p2.exports=gJ});var m2=u((NTr,g2)=>{"use strict";var mJ=Boolean.prototype.toString;g2.exports=mJ});var q2=u((ATr,y2)=>{"use strict";var yJ=m2();function qJ(r){try{return yJ.call(r),!0}catch{return!1}}y2.exports=qJ});var y0=u((OTr,h2)=>{"use strict";var hJ=Nt(),dJ=Y(),wJ=q2(),bJ=hJ();function EJ(r){return typeof r=="object"?r instanceof Boolean?!0:bJ?wJ(r):dJ(r)==="[object Boolean]":!1}h2.exports=EJ});var w2=u((STr,d2)=>{"use strict";var NJ=m0(),AJ=y0();function OJ(r){return NJ(r)||AJ(r)}d2.exports=OJ});var nr=u((TTr,E2)=>{"use strict";var b2=w(),q0=w2(),SJ=m0(),TJ=y0();b2(q0,"isPrimitive",SJ);b2(q0,"isObject",TJ);E2.exports=q0});var A2=u((LTr,N2)=>{"use strict";function LJ(){return new Function("return this;")()}N2.exports=LJ});var S2=u((ITr,O2)=>{"use strict";var IJ=typeof self=="object"?self:null;O2.exports=IJ});var L2=u((PTr,T2)=>{"use strict";var PJ=typeof window=="object"?window:null;T2.exports=PJ});var P2=u((_Tr,I2)=>{"use strict";var _J=typeof global=="object"?global:null;I2.exports=_J});var x2=u((RTr,M2)=>{"use strict";var RJ=nr().isPrimitive,FJ=A2(),_2=S2(),R2=L2(),F2=P2();function MJ(r){if(arguments.length){if(!RJ(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return FJ()}if(_2)return _2;if(R2)return R2;if(F2)return F2;throw new Error("unexpected error. Unable to resolve global object.")}M2.exports=MJ});var C2=u((FTr,B2)=>{"use strict";var xJ=x2();B2.exports=xJ});var G2=u((MTr,V2)=>{"use strict";var BJ=C2(),j2=BJ(),CJ=j2.document&&j2.document.childNodes;V2.exports=CJ});var W2=u((xTr,U2)=>{"use strict";var jJ=Int8Array;U2.exports=jJ});var k2=u((BTr,H2)=>{"use strict";var VJ=c2(),GJ=G2(),UJ=W2();function WJ(){return typeof VJ=="function"||typeof UJ=="object"||typeof GJ=="function"}H2.exports=WJ});var h0=u((CTr,D2)=>{"use strict";function HJ(){return/^\s*function\s*([^(]*)/i}D2.exports=HJ});var J2=u((jTr,X2)=>{"use strict";var kJ=h0(),DJ=kJ();X2.exports=DJ});var d0=u((VTr,Y2)=>{"use strict";var XJ=w(),z2=h0(),JJ=J2();XJ(z2,"REGEXP",JJ);Y2.exports=z2});var $2=u((GTr,Z2)=>{"use strict";var zJ=g0();function YJ(r){return zJ(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}Z2.exports=YJ});var tt=u((UTr,Q2)=>{"use strict";var ZJ=$2();Q2.exports=ZJ});var rc=u((WTr,K2)=>{"use strict";var $J=Y(),QJ=d0().REGEXP,KJ=tt();function rz(r){var e,t,i;if(t=$J(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=QJ.exec(i.toString()),e)return e[1]}return KJ(r)?"Buffer":t}K2.exports=rz});var Ee=u((HTr,ec)=>{"use strict";var ez=rc();ec.exports=ez});var ic=u((kTr,tc)=>{"use strict";var tz=Ee();function iz(r){var e;return r===null?"null":(e=typeof r,e==="object"?tz(r).toLowerCase():e)}tc.exports=iz});var ac=u((DTr,nc)=>{"use strict";var nz=Ee();function az(r){return nz(r).toLowerCase()}nc.exports=az});var an=u((XTr,uc)=>{"use strict";var uz=k2(),sz=ic(),oz=ac(),vz=uz()?oz:sz;uc.exports=vz});var w0=u((JTr,sc)=>{"use strict";function fz(r){return r.constructor&&r.constructor.prototype===r}sc.exports=fz});var oc=u((zTr,lz)=>{lz.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var fc=u((YTr,vc)=>{"use strict";var cz=typeof window>"u"?void 0:window;vc.exports=cz});var gc=u((ZTr,pc)=>{"use strict";var pz=A(),gz=nn(),lc=an(),mz=w0(),yz=oc(),St=fc(),cc;function qz(){var r;if(lc(St)==="undefined")return!1;for(r in St)try{gz(yz,r)===-1&&pz(St,r)&&St[r]!==null&&lc(St[r])==="object"&&mz(St[r])}catch{return!0}return!1}cc=qz();pc.exports=cc});var yc=u(($Tr,mc)=>{"use strict";var hz=typeof window<"u";mc.exports=hz});var dc=u((QTr,hc)=>{"use strict";var dz=gc(),qc=w0(),wz=yc();function bz(r){if(wz===!1&&!dz)return qc(r);try{return qc(r)}catch{return!1}}hc.exports=bz});var wc=u((KTr,Ez)=>{Ez.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Nc=u((rLr,Ec)=>{"use strict";var Nz=g0(),b0=A(),Az=c0(),Oz=Kl(),Sz=e2(),Tz=dc(),bc=wc();function Lz(r){var e,t,i,n,a,s,o;if(n=[],Az(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!b0(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!Nz(r))return n;t=Oz&&i}for(a in r)!(t&&a==="prototype")&&b0(r,a)&&n.push(String(a));if(Sz)for(e=Tz(r),o=0;o<bc.length;o++)s=bc[o],!(e&&s==="constructor")&&b0(r,s)&&n.push(String(s));return n}Ec.exports=Lz});var Oc=u((eLr,Ac)=>{"use strict";var Iz=D1(),Pz=J1(),_z=rn(),Rz=Ul(),Fz=Nc(),un;Pz?Iz()?un=Rz:un=_z:un=Fz;Ac.exports=un});var wi=u((tLr,Sc)=>{"use strict";var Mz=Oc();Sc.exports=Mz});var E0=u((iLr,Tc)=>{"use strict";function xz(r){return typeof r=="number"}Tc.exports=xz});var N0=u((nLr,Ic)=>{"use strict";function Bz(r){return r[0]==="-"}function Lc(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function Cz(r,e,t){var i=!1,n=e-r.length;return n<0||(Bz(r)&&(i=!0,r=r.substr(1)),r=t?r+Lc(n):Lc(n)+r,i&&(r="-"+r)),r}Ic.exports=Cz});var Fc=u((aLr,Rc)=>{"use strict";var jz=E0(),Pc=N0(),Vz=String.prototype.toLowerCase,_c=String.prototype.toUpperCase;function Gz(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!jz(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=Pc(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=Pc(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===_c.call(r.specifier)?_c.call(t):Vz.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Rc.exports=Gz});var xc=u((uLr,Mc)=>{"use strict";function Uz(r){return typeof r=="string"}Mc.exports=Uz});var jc=u((sLr,Cc)=>{"use strict";var Wz=E0(),Hz=Math.abs,kz=String.prototype.toLowerCase,Bc=String.prototype.toUpperCase,it=String.prototype.replace,Dz=/e\+(\d)$/,Xz=/e-(\d)$/,Jz=/^(\d+)$/,zz=/^(\d+)e/,Yz=/\.0$/,Zz=/\.0*e/,$z=/(\..*[^0])0*e/;function Qz(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!Wz(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":Hz(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=it.call(t,$z,"$1e"),t=it.call(t,Zz,"e"),t=it.call(t,Yz,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=it.call(t,Dz,"e+0$1"),t=it.call(t,Xz,"e-0$1"),r.alternate&&(t=it.call(t,Jz,"$1."),t=it.call(t,zz,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Bc.call(r.specifier)?Bc.call(t):kz.call(t),t}Cc.exports=Qz});var Uc=u((oLr,Gc)=>{"use strict";function Vc(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function Kz(r,e,t){var i=e-r.length;return i<0||(r=t?r+Vc(i):Vc(i)+r),r}Gc.exports=Kz});var Hc=u((vLr,Wc)=>{"use strict";var rY=Fc(),eY=xc(),tY=jc(),iY=Uc(),nY=N0(),aY=String.fromCharCode,sn=isNaN,uY=Array.isArray;function sY(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function oY(r){var e,t,i,n,a,s,o,v,f;if(!uY(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",o=1,v=0;v<r.length;v++)if(i=r[v],eY(i))s+=i;else{if(e=i.precision!==void 0,i=sY(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,sn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,sn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=rY(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!sn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=sn(a)?String(i.arg):aY(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=tY(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=nY(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=iY(i.arg,i.width,i.padRight)),s+=i.arg||"",o+=1}return s}Wc.exports=oY});var Dc=u((fLr,kc)=>{"use strict";var vY=Hc();kc.exports=vY});var Jc=u((lLr,Xc)=>{"use strict";var on=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function fY(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function lY(r){var e,t,i,n;for(t=[],n=0,i=on.exec(r);i;)e=r.slice(n,on.lastIndex-i[0].length),e.length&&t.push(e),t.push(fY(i)),n=on.lastIndex,i=on.exec(r);return e=r.slice(n),e.length&&t.push(e),t}Xc.exports=lY});var Yc=u((cLr,zc)=>{"use strict";var cY=Jc();zc.exports=cY});var $c=u((pLr,Zc)=>{"use strict";function pY(r){return typeof r=="string"}Zc.exports=pY});var rp=u((gLr,Kc)=>{"use strict";var gY=Dc(),mY=Yc(),yY=$c();function Qc(r){var e,t,i;if(!yY(r))throw new TypeError(Qc("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=mY(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return gY.apply(null,t)}Kc.exports=Qc});var T=u((mLr,ep)=>{"use strict";var qY=rp();ep.exports=qY});var ip=u((yLr,tp)=>{"use strict";var hY=wi(),dY=A(),wY=T();function bY(r,e){var t,i,n;for(t=hY(r),n=0;n<t.length;n++){if(i=t[n],dY(e,i))throw new Error(wY("unexpected error. Property already exists on destination object. Property: %s.",i));e[i]=r[i]}return e}tp.exports=bY});var A0=u((qLr,np)=>{"use strict";var EY=Pr().isPrimitive;function NY(r){return EY(r)&&r>=0}np.exports=NY});var O0=u((hLr,ap)=>{"use strict";var AY=Pr().isObject;function OY(r){return AY(r)&&r.valueOf()>=0}ap.exports=OY});var sp=u((dLr,up)=>{"use strict";var SY=A0(),TY=O0();function LY(r){return SY(r)||TY(r)}up.exports=LY});var Ne=u((wLr,vp)=>{"use strict";var op=w(),S0=sp(),IY=A0(),PY=O0();op(S0,"isPrimitive",IY);op(S0,"isObject",PY);vp.exports=S0});var lp=u((bLr,fp)=>{"use strict";var _Y=an();function RY(r){return _Y(r)==="function"}fp.exports=RY});var L=u((ELr,cp)=>{"use strict";var FY=lp();cp.exports=FY});var gp=u((NLr,pp)=>{"use strict";var MY=Object.getPrototypeOf;pp.exports=MY});var yp=u((ALr,mp)=>{"use strict";function xY(r){return r.__proto__}mp.exports=xY});var hp=u((OLr,qp)=>{"use strict";var BY=Y(),CY=yp();function jY(r){var e=CY(r);return e||e===null?e:BY(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}qp.exports=jY});var wp=u((SLr,dp)=>{"use strict";var VY=L(),GY=gp(),UY=hp(),T0;VY(Object.getPrototypeOf)?T0=GY:T0=UY;dp.exports=T0});var Ep=u((TLr,bp)=>{"use strict";var WY=wp();function HY(r){return r==null?null:(r=Object(r),WY(r))}bp.exports=HY});var nt=u((LLr,Np)=>{"use strict";var kY=Ep();Np.exports=kY});var Op=u((ILr,Ap)=>{"use strict";var DY=nt(),XY=Y();function JY(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(XY(r)==="[object Error]")return!0;r=DY(r)}return!1}Ap.exports=JY});var Tp=u((PLr,Sp)=>{"use strict";var zY=Op();Sp.exports=zY});var L0=u((_Lr,Lp)=>{"use strict";function YY(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}Lp.exports=YY});var Pp=u((RLr,Ip)=>{"use strict";var ZY=L0(),$Y=ZY();Ip.exports=$Y});var Fp=u((FLr,Rp)=>{"use strict";var QY=w(),_p=L0(),KY=Pp();QY(_p,"REGEXP",KY);Rp.exports=_p});var xp=u((MLr,Mp)=>{"use strict";var rZ=k().isPrimitive,eZ=Fp(),tZ=T();function iZ(r){if(!rZ(r))throw new TypeError(tZ("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=eZ().exec(r),r?new RegExp(r[1],r[2]):null}Mp.exports=iZ});var Cp=u((xLr,Bp)=>{"use strict";var nZ=xp();Bp.exports=nZ});var Vp=u((BLr,jp)=>{"use strict";var aZ=typeof Object.getOwnPropertyNames<"u";jp.exports=aZ});var Up=u((CLr,Gp)=>{"use strict";var uZ=Object.getOwnPropertyNames;function sZ(r){return uZ(Object(r))}Gp.exports=sZ});var Hp=u((jLr,Wp)=>{"use strict";var oZ=wi();function vZ(r){return oZ(Object(r))}Wp.exports=vZ});var Dp=u((VLr,kp)=>{"use strict";var fZ=Vp(),lZ=Up(),cZ=Hp(),I0;fZ?I0=lZ:I0=cZ;kp.exports=I0});var Jp=u((GLr,Xp)=>{"use strict";var pZ=typeof Object.getOwnPropertyDescriptor<"u";Xp.exports=pZ});var Yp=u((ULr,zp)=>{"use strict";var gZ=Object.getOwnPropertyDescriptor;function mZ(r,e){var t;return r==null?null:(t=gZ(r,e),t===void 0?null:t)}zp.exports=mZ});var $p=u((WLr,Zp)=>{"use strict";var yZ=A();function qZ(r,e){return yZ(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}Zp.exports=qZ});var Kp=u((HLr,Qp)=>{"use strict";var hZ=Jp(),dZ=Yp(),wZ=$p(),P0;hZ?P0=dZ:P0=wZ;Qp.exports=P0});var e3=u((kLr,r3)=>{"use strict";var bZ=typeof Buffer=="function"?Buffer:null;r3.exports=bZ});var i3=u((DLr,t3)=>{"use strict";var EZ=tt(),vn=e3();function NZ(){var r,e;if(typeof vn!="function")return!1;try{typeof vn.from=="function"?e=vn.from([1,2,3,4]):e=new vn([1,2,3,4]),r=EZ(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}t3.exports=NZ});var a3=u((XLr,n3)=>{"use strict";var AZ=i3();n3.exports=AZ});var o3=u(fn=>{"use strict";fn.byteLength=SZ;fn.toByteArray=LZ;fn.fromByteArray=_Z;var Cr=[],Sr=[],OZ=typeof Uint8Array<"u"?Uint8Array:Array,_0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(at=0,u3=_0.length;at<u3;++at)Cr[at]=_0[at],Sr[_0.charCodeAt(at)]=at;var at,u3;Sr["-".charCodeAt(0)]=62;Sr["_".charCodeAt(0)]=63;function s3(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function SZ(r){var e=s3(r),t=e[0],i=e[1];return(t+i)*3/4-i}function TZ(r,e,t){return(e+t)*3/4-t}function LZ(r){var e,t=s3(r),i=t[0],n=t[1],a=new OZ(TZ(r,i,n)),s=0,o=n>0?i-4:i,v;for(v=0;v<o;v+=4)e=Sr[r.charCodeAt(v)]<<18|Sr[r.charCodeAt(v+1)]<<12|Sr[r.charCodeAt(v+2)]<<6|Sr[r.charCodeAt(v+3)],a[s++]=e>>16&255,a[s++]=e>>8&255,a[s++]=e&255;return n===2&&(e=Sr[r.charCodeAt(v)]<<2|Sr[r.charCodeAt(v+1)]>>4,a[s++]=e&255),n===1&&(e=Sr[r.charCodeAt(v)]<<10|Sr[r.charCodeAt(v+1)]<<4|Sr[r.charCodeAt(v+2)]>>2,a[s++]=e>>8&255,a[s++]=e&255),a}function IZ(r){return Cr[r>>18&63]+Cr[r>>12&63]+Cr[r>>6&63]+Cr[r&63]}function PZ(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(IZ(i));return n.join("")}function _Z(r){for(var e,t=r.length,i=t%3,n=[],a=16383,s=0,o=t-i;s<o;s+=a)n.push(PZ(r,s,s+a>o?o:s+a));return i===1?(e=r[t-1],n.push(Cr[e>>2]+Cr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(Cr[e>>10]+Cr[e>>4&63]+Cr[e<<2&63]+"=")),n.join("")}});var f3=u(R0=>{R0.read=function(r,e,t,i,n){var a,s,o=n*8-i-1,v=(1<<o)-1,f=v>>1,l=-7,c=t?n-1:0,p=t?-1:1,y=r[e+c];for(c+=p,a=y&(1<<-l)-1,y>>=-l,l+=o;l>0;a=a*256+r[e+c],c+=p,l-=8);for(s=a&(1<<-l)-1,a>>=-l,l+=i;l>0;s=s*256+r[e+c],c+=p,l-=8);if(a===0)a=1-f;else{if(a===v)return s?NaN:(y?-1:1)*(1/0);s=s+Math.pow(2,i),a=a-f}return(y?-1:1)*s*Math.pow(2,a-i)};R0.write=function(r,e,t,i,n,a){var s,o,v,f=a*8-n-1,l=(1<<f)-1,c=l>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,y=i?0:a-1,q=i?1:-1,m=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-s))<1&&(s--,v*=2),s+c>=1?e+=p/v:e+=p*Math.pow(2,1-c),e*v>=2&&(s++,v/=2),s+c>=l?(o=0,s=l):s+c>=1?(o=(e*v-1)*Math.pow(2,n),s=s+c):(o=e*Math.pow(2,c-1)*Math.pow(2,n),s=0));n>=8;r[t+y]=o&255,y+=q,o/=256,n-=8);for(s=s<<n|o,f+=n;f>0;r[t+y]=s&255,y+=q,s/=256,f-=8);r[t+y-q]|=m*128}});var N3=u(Lt=>{"use strict";var F0=o3(),Tt=f3(),l3=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Lt.Buffer=d;Lt.SlowBuffer=CZ;Lt.INSPECT_MAX_BYTES=50;var ln=2147483647;Lt.kMaxLength=ln;d.TYPED_ARRAY_SUPPORT=RZ();!d.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function RZ(){try{var r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function Wr(r){if(r>ln)throw new RangeError('The value "'+r+'" is invalid for option "size"');var e=new Uint8Array(r);return Object.setPrototypeOf(e,d.prototype),e}function d(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return C0(r)}return g3(r,e,t)}d.poolSize=8192;function g3(r,e,t){if(typeof r=="string")return MZ(r,e);if(ArrayBuffer.isView(r))return xZ(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(jr(r,ArrayBuffer)||r&&jr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(jr(r,SharedArrayBuffer)||r&&jr(r.buffer,SharedArrayBuffer)))return x0(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return d.from(i,e,t);var n=BZ(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return d.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}d.from=function(r,e,t){return g3(r,e,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function m3(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function FZ(r,e,t){return m3(r),r<=0?Wr(r):e!==void 0?typeof t=="string"?Wr(r).fill(e,t):Wr(r).fill(e):Wr(r)}d.alloc=function(r,e,t){return FZ(r,e,t)};function C0(r){return m3(r),Wr(r<0?0:j0(r)|0)}d.allocUnsafe=function(r){return C0(r)};d.allocUnsafeSlow=function(r){return C0(r)};function MZ(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!d.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var t=y3(r,e)|0,i=Wr(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function M0(r){for(var e=r.length<0?0:j0(r.length)|0,t=Wr(e),i=0;i<e;i+=1)t[i]=r[i]&255;return t}function xZ(r){if(jr(r,Uint8Array)){var e=new Uint8Array(r);return x0(e.buffer,e.byteOffset,e.byteLength)}return M0(r)}function x0(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');var i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,d.prototype),i}function BZ(r){if(d.isBuffer(r)){var e=j0(r.length)|0,t=Wr(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||V0(r.length)?Wr(0):M0(r);if(r.type==="Buffer"&&Array.isArray(r.data))return M0(r.data)}function j0(r){if(r>=ln)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+ln.toString(16)+" bytes");return r|0}function CZ(r){return+r!=r&&(r=0),d.alloc(+r)}d.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==d.prototype};d.compare=function(e,t){if(jr(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),jr(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var i=e.length,n=t.length,a=0,s=Math.min(i,n);a<s;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};d.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return d.alloc(0);var i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;var n=d.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){var s=e[i];if(jr(s,Uint8Array))a+s.length>n.length?d.from(s).copy(n,a):Uint8Array.prototype.set.call(n,s,a);else if(d.isBuffer(s))s.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return n};function y3(r,e){if(d.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||jr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);var t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return B0(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return E3(r).length;default:if(n)return i?-1:B0(r).length;e=(""+e).toLowerCase(),n=!0}}d.byteLength=y3;function jZ(r,e,t){var i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return zZ(this,e,t);case"utf8":case"utf-8":return h3(this,e,t);case"ascii":return XZ(this,e,t);case"latin1":case"binary":return JZ(this,e,t);case"base64":return kZ(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return YZ(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}d.prototype._isBuffer=!0;function ut(r,e,t){var i=r[e];r[e]=r[t],r[t]=i}d.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)ut(this,t,t+1);return this};d.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)ut(this,t,t+3),ut(this,t+1,t+2);return this};d.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)ut(this,t,t+7),ut(this,t+1,t+6),ut(this,t+2,t+5),ut(this,t+3,t+4);return this};d.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?h3(this,0,e):jZ.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(e){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:d.compare(this,e)===0};d.prototype.inspect=function(){var e="",t=Lt.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};l3&&(d.prototype[l3]=d.prototype.inspect);d.prototype.compare=function(e,t,i,n,a){if(jr(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;for(var s=a-n,o=i-t,v=Math.min(s,o),f=this.slice(n,a),l=e.slice(t,i),c=0;c<v;++c)if(f[c]!==l[c]){s=f[c],o=l[c];break}return s<o?-1:o<s?1:0};function q3(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,V0(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=d.from(e,i)),d.isBuffer(e))return e.length===0?-1:c3(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):c3(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function c3(r,e,t,i,n){var a=1,s=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,s/=2,o/=2,t/=2}function v(y,q){return a===1?y[q]:y.readUInt16BE(q*a)}var f;if(n){var l=-1;for(f=t;f<s;f++)if(v(r,f)===v(e,l===-1?0:f-l)){if(l===-1&&(l=f),f-l+1===o)return l*a}else l!==-1&&(f-=f-l),l=-1}else for(t+o>s&&(t=s-o),f=t;f>=0;f--){for(var c=!0,p=0;p<o;p++)if(v(r,f+p)!==v(e,p)){c=!1;break}if(c)return f}return-1}d.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};d.prototype.indexOf=function(e,t,i){return q3(this,e,t,i,!0)};d.prototype.lastIndexOf=function(e,t,i){return q3(this,e,t,i,!1)};function VZ(r,e,t,i){t=Number(t)||0;var n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;var a=e.length;i>a/2&&(i=a/2);for(var s=0;s<i;++s){var o=parseInt(e.substr(s*2,2),16);if(V0(o))return s;r[t+s]=o}return s}function GZ(r,e,t,i){return cn(B0(e,r.length-t),r,t,i)}function UZ(r,e,t,i){return cn(QZ(e),r,t,i)}function WZ(r,e,t,i){return cn(E3(e),r,t,i)}function HZ(r,e,t,i){return cn(KZ(e,r.length-t),r,t,i)}d.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return VZ(this,e,t,i);case"utf8":case"utf-8":return GZ(this,e,t,i);case"ascii":case"latin1":case"binary":return UZ(this,e,t,i);case"base64":return WZ(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return HZ(this,e,t,i);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function kZ(r,e,t){return e===0&&t===r.length?F0.fromByteArray(r):F0.fromByteArray(r.slice(e,t))}function h3(r,e,t){t=Math.min(r.length,t);for(var i=[],n=e;n<t;){var a=r[n],s=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){var v,f,l,c;switch(o){case 1:a<128&&(s=a);break;case 2:v=r[n+1],(v&192)===128&&(c=(a&31)<<6|v&63,c>127&&(s=c));break;case 3:v=r[n+1],f=r[n+2],(v&192)===128&&(f&192)===128&&(c=(a&15)<<12|(v&63)<<6|f&63,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:v=r[n+1],f=r[n+2],l=r[n+3],(v&192)===128&&(f&192)===128&&(l&192)===128&&(c=(a&15)<<18|(v&63)<<12|(f&63)<<6|l&63,c>65535&&c<1114112&&(s=c))}}s===null?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|s&1023),i.push(s),n+=o}return DZ(i)}var p3=4096;function DZ(r){var e=r.length;if(e<=p3)return String.fromCharCode.apply(String,r);for(var t="",i=0;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=p3));return t}function XZ(r,e,t){var i="";t=Math.min(r.length,t);for(var n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function JZ(r,e,t){var i="";t=Math.min(r.length,t);for(var n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function zZ(r,e,t){var i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);for(var n="",a=e;a<t;++a)n+=r$[r[a]];return n}function YZ(r,e,t){for(var i=r.slice(e,t),n="",a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}d.prototype.slice=function(e,t){var i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,d.prototype),n};function tr(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||tr(e,t,this.length);for(var n=this[e],a=1,s=0;++s<t&&(a*=256);)n+=this[e+s]*a;return n};d.prototype.readUintBE=d.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||tr(e,t,this.length);for(var n=this[e+--t],a=1;t>0&&(a*=256);)n+=this[e+--t]*a;return n};d.prototype.readUint8=d.prototype.readUInt8=function(e,t){return e=e>>>0,t||tr(e,1,this.length),this[e]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||tr(e,2,this.length),this[e]|this[e+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||tr(e,2,this.length),this[e]<<8|this[e+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||tr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||tr(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};d.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||tr(e,t,this.length);for(var n=this[e],a=1,s=0;++s<t&&(a*=256);)n+=this[e+s]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};d.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||tr(e,t,this.length);for(var n=t,a=1,s=this[e+--n];n>0&&(a*=256);)s+=this[e+--n]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*t)),s};d.prototype.readInt8=function(e,t){return e=e>>>0,t||tr(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};d.prototype.readInt16LE=function(e,t){e=e>>>0,t||tr(e,2,this.length);var i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};d.prototype.readInt16BE=function(e,t){e=e>>>0,t||tr(e,2,this.length);var i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};d.prototype.readInt32LE=function(e,t){return e=e>>>0,t||tr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};d.prototype.readInt32BE=function(e,t){return e=e>>>0,t||tr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};d.prototype.readFloatLE=function(e,t){return e=e>>>0,t||tr(e,4,this.length),Tt.read(this,e,!0,23,4)};d.prototype.readFloatBE=function(e,t){return e=e>>>0,t||tr(e,4,this.length),Tt.read(this,e,!1,23,4)};d.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||tr(e,8,this.length),Tt.read(this,e,!0,52,8)};d.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||tr(e,8,this.length),Tt.read(this,e,!1,52,8)};function cr(r,e,t,i,n,a){if(!d.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){var a=Math.pow(2,8*i)-1;cr(this,e,t,i,a,0)}var s=1,o=0;for(this[t]=e&255;++o<i&&(s*=256);)this[t+o]=e/s&255;return t+i};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){var a=Math.pow(2,8*i)-1;cr(this,e,t,i,a,0)}var s=i-1,o=1;for(this[t+s]=e&255;--s>=0&&(o*=256);)this[t+s]=e/o&255;return t+i};d.prototype.writeUint8=d.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||cr(this,e,t,1,255,0),this[t]=e&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||cr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||cr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||cr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||cr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};d.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){var a=Math.pow(2,8*i-1);cr(this,e,t,i,a-1,-a)}var s=0,o=1,v=0;for(this[t]=e&255;++s<i&&(o*=256);)e<0&&v===0&&this[t+s-1]!==0&&(v=1),this[t+s]=(e/o>>0)-v&255;return t+i};d.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){var a=Math.pow(2,8*i-1);cr(this,e,t,i,a-1,-a)}var s=i-1,o=1,v=0;for(this[t+s]=e&255;--s>=0&&(o*=256);)e<0&&v===0&&this[t+s+1]!==0&&(v=1),this[t+s]=(e/o>>0)-v&255;return t+i};d.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||cr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};d.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||cr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};d.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||cr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};d.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||cr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};d.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||cr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function d3(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function w3(r,e,t,i,n){return e=+e,t=t>>>0,n||d3(r,e,t,4,34028234663852886e22,-34028234663852886e22),Tt.write(r,e,t,i,23,4),t+4}d.prototype.writeFloatLE=function(e,t,i){return w3(this,e,t,!0,i)};d.prototype.writeFloatBE=function(e,t,i){return w3(this,e,t,!1,i)};function b3(r,e,t,i,n){return e=+e,t=t>>>0,n||d3(r,e,t,8,17976931348623157e292,-17976931348623157e292),Tt.write(r,e,t,i,52,8),t+8}d.prototype.writeDoubleLE=function(e,t,i){return b3(this,e,t,!0,i)};d.prototype.writeDoubleBE=function(e,t,i){return b3(this,e,t,!1,i)};d.prototype.copy=function(e,t,i,n){if(!d.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);var a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};d.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!d.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var a=e.charCodeAt(0);(n==="utf8"&&a<128||n==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<i;++s)this[s]=e;else{var o=d.isBuffer(e)?e:d.from(e,n),v=o.length;if(v===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<i-t;++s)this[s+t]=o[s%v]}return this};var ZZ=/[^+/0-9A-Za-z-_]/g;function $Z(r){if(r=r.split("=")[0],r=r.trim().replace(ZZ,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function B0(r,e){e=e||1/0;for(var t,i=r.length,n=null,a=[],s=0;s<i;++s){if(t=r.charCodeAt(s),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(s+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function QZ(r){for(var e=[],t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function KZ(r,e){for(var t,i,n,a=[],s=0;s<r.length&&!((e-=2)<0);++s)t=r.charCodeAt(s),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function E3(r){return F0.toByteArray($Z(r))}function cn(r,e,t,i){for(var n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function jr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function V0(r){return r!==r}var r$=function(){for(var r="0123456789abcdef",e=new Array(256),t=0;t<16;++t)for(var i=t*16,n=0;n<16;++n)e[i+n]=r[t]+r[n];return e}()});var O3=u((ZLr,A3)=>{"use strict";var e$=N3().Buffer;A3.exports=e$});var T3=u(($Lr,S3)=>{"use strict";function t$(){throw new Error("not implemented")}S3.exports=t$});var pn=u((QLr,L3)=>{"use strict";var i$=a3(),n$=O3(),a$=T3(),G0;i$()?G0=n$:G0=a$;L3.exports=G0});var P3=u((KLr,I3)=>{"use strict";var u$=L(),s$=pn(),o$=u$(s$.from);I3.exports=o$});var R3=u((rIr,_3)=>{"use strict";var v$=tt(),f$=pn();function l$(r){if(!v$(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return f$.from(r)}_3.exports=l$});var M3=u((eIr,F3)=>{"use strict";var c$=tt(),p$=pn();function g$(r){if(!c$(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new p$(r)}F3.exports=g$});var B3=u((tIr,x3)=>{"use strict";var m$=P3(),y$=R3(),q$=M3(),U0;m$?U0=y$:U0=q$;x3.exports=U0});var j3=u((iIr,C3)=>{"use strict";var h$=Y(),d$=typeof Int8Array=="function";function w$(r){return d$&&r instanceof Int8Array||h$(r)==="[object Int8Array]"}C3.exports=w$});var G3=u((nIr,V3)=>{"use strict";var b$=j3();V3.exports=b$});var W3=u((aIr,U3)=>{"use strict";var E$=127;U3.exports=E$});var k3=u((uIr,H3)=>{"use strict";var N$=-128;H3.exports=N$});var X3=u((sIr,D3)=>{"use strict";var A$=typeof Int8Array=="function"?Int8Array:null;D3.exports=A$});var Y3=u((oIr,z3)=>{"use strict";var O$=G3(),S$=W3(),T$=k3(),J3=X3();function L$(){var r,e;if(typeof J3!="function")return!1;try{e=new J3([1,3.14,-3.14,S$+1]),r=O$(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===T$}catch{r=!1}return r}z3.exports=L$});var $3=u((vIr,Z3)=>{"use strict";var I$=Y3();Z3.exports=I$});var K3=u((fIr,Q3)=>{"use strict";var P$=typeof Int8Array=="function"?Int8Array:void 0;Q3.exports=P$});var e6=u((lIr,r6)=>{"use strict";function _$(){throw new Error("not implemented")}r6.exports=_$});var bi=u((cIr,t6)=>{"use strict";var R$=$3(),F$=K3(),M$=e6(),W0;R$()?W0=F$:W0=M$;t6.exports=W0});var n6=u((pIr,i6)=>{"use strict";var x$=Y(),B$=typeof Uint8Array=="function";function C$(r){return B$&&r instanceof Uint8Array||x$(r)==="[object Uint8Array]"}i6.exports=C$});var u6=u((gIr,a6)=>{"use strict";var j$=n6();a6.exports=j$});var o6=u((mIr,s6)=>{"use strict";var V$=255;s6.exports=V$});var f6=u((yIr,v6)=>{"use strict";var G$=typeof Uint8Array=="function"?Uint8Array:null;v6.exports=G$});var p6=u((qIr,c6)=>{"use strict";var U$=u6(),H0=o6(),l6=f6();function W$(){var r,e;if(typeof l6!="function")return!1;try{e=[1,3.14,-3.14,H0+1,H0+2],e=new l6(e),r=U$(e)&&e[0]===1&&e[1]===3&&e[2]===H0-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}c6.exports=W$});var m6=u((hIr,g6)=>{"use strict";var H$=p6();g6.exports=H$});var q6=u((dIr,y6)=>{"use strict";var k$=typeof Uint8Array=="function"?Uint8Array:void 0;y6.exports=k$});var d6=u((wIr,h6)=>{"use strict";function D$(){throw new Error("not implemented")}h6.exports=D$});var It=u((bIr,w6)=>{"use strict";var X$=m6(),J$=q6(),z$=d6(),k0;X$()?k0=J$:k0=z$;w6.exports=k0});var E6=u((EIr,b6)=>{"use strict";var Y$=Y(),Z$=typeof Uint8ClampedArray=="function";function $$(r){return Z$&&r instanceof Uint8ClampedArray||Y$(r)==="[object Uint8ClampedArray]"}b6.exports=$$});var A6=u((NIr,N6)=>{"use strict";var Q$=E6();N6.exports=Q$});var S6=u((AIr,O6)=>{"use strict";var K$=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;O6.exports=K$});var I6=u((OIr,L6)=>{"use strict";var rQ=A6(),T6=S6();function eQ(){var r,e;if(typeof T6!="function")return!1;try{e=new T6([-1,0,1,3.14,4.99,255,256]),r=rQ(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}L6.exports=eQ});var _6=u((SIr,P6)=>{"use strict";var tQ=I6();P6.exports=tQ});var F6=u((TIr,R6)=>{"use strict";var iQ=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;R6.exports=iQ});var x6=u((LIr,M6)=>{"use strict";function nQ(){throw new Error("not implemented")}M6.exports=nQ});var Ei=u((IIr,B6)=>{"use strict";var aQ=_6(),uQ=F6(),sQ=x6(),D0;aQ()?D0=uQ:D0=sQ;B6.exports=D0});var j6=u((PIr,C6)=>{"use strict";var oQ=Y(),vQ=typeof Int16Array=="function";function fQ(r){return vQ&&r instanceof Int16Array||oQ(r)==="[object Int16Array]"}C6.exports=fQ});var G6=u((_Ir,V6)=>{"use strict";var lQ=j6();V6.exports=lQ});var W6=u((RIr,U6)=>{"use strict";var cQ=32767;U6.exports=cQ});var k6=u((FIr,H6)=>{"use strict";var pQ=-32768;H6.exports=pQ});var X6=u((MIr,D6)=>{"use strict";var gQ=typeof Int16Array=="function"?Int16Array:null;D6.exports=gQ});var Y6=u((xIr,z6)=>{"use strict";var mQ=G6(),yQ=W6(),qQ=k6(),J6=X6();function hQ(){var r,e;if(typeof J6!="function")return!1;try{e=new J6([1,3.14,-3.14,yQ+1]),r=mQ(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===qQ}catch{r=!1}return r}z6.exports=hQ});var $6=u((BIr,Z6)=>{"use strict";var dQ=Y6();Z6.exports=dQ});var K6=u((CIr,Q6)=>{"use strict";var wQ=typeof Int16Array=="function"?Int16Array:void 0;Q6.exports=wQ});var e4=u((jIr,r4)=>{"use strict";function bQ(){throw new Error("not implemented")}r4.exports=bQ});var Ni=u((VIr,t4)=>{"use strict";var EQ=$6(),NQ=K6(),AQ=e4(),X0;EQ()?X0=NQ:X0=AQ;t4.exports=X0});var n4=u((GIr,i4)=>{"use strict";var OQ=Y(),SQ=typeof Uint16Array=="function";function TQ(r){return SQ&&r instanceof Uint16Array||OQ(r)==="[object Uint16Array]"}i4.exports=TQ});var u4=u((UIr,a4)=>{"use strict";var LQ=n4();a4.exports=LQ});var o4=u((WIr,s4)=>{"use strict";var IQ=65535;s4.exports=IQ});var f4=u((HIr,v4)=>{"use strict";var PQ=typeof Uint16Array=="function"?Uint16Array:null;v4.exports=PQ});var p4=u((kIr,c4)=>{"use strict";var _Q=u4(),J0=o4(),l4=f4();function RQ(){var r,e;if(typeof l4!="function")return!1;try{e=[1,3.14,-3.14,J0+1,J0+2],e=new l4(e),r=_Q(e)&&e[0]===1&&e[1]===3&&e[2]===J0-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}c4.exports=RQ});var m4=u((DIr,g4)=>{"use strict";var FQ=p4();g4.exports=FQ});var q4=u((XIr,y4)=>{"use strict";var MQ=typeof Uint16Array=="function"?Uint16Array:void 0;y4.exports=MQ});var d4=u((JIr,h4)=>{"use strict";function xQ(){throw new Error("not implemented")}h4.exports=xQ});var Pt=u((zIr,w4)=>{"use strict";var BQ=m4(),CQ=q4(),jQ=d4(),z0;BQ()?z0=CQ:z0=jQ;w4.exports=z0});var E4=u((YIr,b4)=>{"use strict";var VQ=Y(),GQ=typeof Int32Array=="function";function UQ(r){return GQ&&r instanceof Int32Array||VQ(r)==="[object Int32Array]"}b4.exports=UQ});var gn=u((ZIr,N4)=>{"use strict";var WQ=E4();N4.exports=WQ});var _t=u(($Ir,A4)=>{"use strict";var HQ=2147483647;A4.exports=HQ});var S4=u((QIr,O4)=>{"use strict";var kQ=-2147483648;O4.exports=kQ});var L4=u((KIr,T4)=>{"use strict";var DQ=typeof Int32Array=="function"?Int32Array:null;T4.exports=DQ});var _4=u((rPr,P4)=>{"use strict";var XQ=gn(),JQ=_t(),zQ=S4(),I4=L4();function YQ(){var r,e;if(typeof I4!="function")return!1;try{e=new I4([1,3.14,-3.14,JQ+1]),r=XQ(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===zQ}catch{r=!1}return r}P4.exports=YQ});var F4=u((ePr,R4)=>{"use strict";var ZQ=_4();R4.exports=ZQ});var x4=u((tPr,M4)=>{"use strict";var $Q=typeof Int32Array=="function"?Int32Array:void 0;M4.exports=$Q});var C4=u((iPr,B4)=>{"use strict";function QQ(){throw new Error("not implemented")}B4.exports=QQ});var st=u((nPr,j4)=>{"use strict";var KQ=F4(),rK=x4(),eK=C4(),Y0;KQ()?Y0=rK:Y0=eK;j4.exports=Y0});var G4=u((aPr,V4)=>{"use strict";var tK=Y(),iK=typeof Uint32Array=="function";function nK(r){return iK&&r instanceof Uint32Array||tK(r)==="[object Uint32Array]"}V4.exports=nK});var Hr=u((uPr,U4)=>{"use strict";var aK=G4();U4.exports=aK});var H4=u((sPr,W4)=>{"use strict";var uK=typeof Uint32Array=="function"?Uint32Array:null;W4.exports=uK});var X4=u((oPr,D4)=>{"use strict";var sK=Hr(),Z0=Ot(),k4=H4();function oK(){var r,e;if(typeof k4!="function")return!1;try{e=[1,3.14,-3.14,Z0+1,Z0+2],e=new k4(e),r=sK(e)&&e[0]===1&&e[1]===3&&e[2]===Z0-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}D4.exports=oK});var z4=u((vPr,J4)=>{"use strict";var vK=X4();J4.exports=vK});var Z4=u((fPr,Y4)=>{"use strict";var fK=typeof Uint32Array=="function"?Uint32Array:void 0;Y4.exports=fK});var Q4=u((lPr,$4)=>{"use strict";function lK(){throw new Error("not implemented")}$4.exports=lK});var sr=u((cPr,K4)=>{"use strict";var cK=z4(),pK=Z4(),gK=Q4(),$0;cK()?$0=pK:$0=gK;K4.exports=$0});var e5=u((pPr,r5)=>{"use strict";var mK=Y(),yK=typeof Float32Array=="function";function qK(r){return yK&&r instanceof Float32Array||mK(r)==="[object Float32Array]"}r5.exports=qK});var i5=u((gPr,t5)=>{"use strict";var hK=e5();t5.exports=hK});var a5=u((mPr,n5)=>{"use strict";var dK=typeof Float32Array=="function"?Float32Array:null;n5.exports=dK});var o5=u((yPr,s5)=>{"use strict";var wK=i5(),bK=j(),u5=a5();function EK(){var r,e;if(typeof u5!="function")return!1;try{e=new u5([1,3.14,-3.14,5e40]),r=wK(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===bK}catch{r=!1}return r}s5.exports=EK});var f5=u((qPr,v5)=>{"use strict";var NK=o5();v5.exports=NK});var c5=u((hPr,l5)=>{"use strict";var AK=typeof Float32Array=="function"?Float32Array:void 0;l5.exports=AK});var g5=u((dPr,p5)=>{"use strict";function OK(){throw new Error("not implemented")}p5.exports=OK});var kr=u((wPr,m5)=>{"use strict";var SK=f5(),TK=c5(),LK=g5(),Q0;SK()?Q0=TK:Q0=LK;m5.exports=Q0});var q5=u((bPr,y5)=>{"use strict";var IK=Y(),PK=typeof Float64Array=="function";function _K(r){return PK&&r instanceof Float64Array||IK(r)==="[object Float64Array]"}y5.exports=_K});var d5=u((EPr,h5)=>{"use strict";var RK=q5();h5.exports=RK});var b5=u((NPr,w5)=>{"use strict";var FK=typeof Float64Array=="function"?Float64Array:null;w5.exports=FK});var A5=u((APr,N5)=>{"use strict";var MK=d5(),E5=b5();function xK(){var r,e;if(typeof E5!="function")return!1;try{e=new E5([1,3.14,-3.14,NaN]),r=MK(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}N5.exports=xK});var K0=u((OPr,O5)=>{"use strict";var BK=A5();O5.exports=BK});var T5=u((SPr,S5)=>{"use strict";var CK=typeof Float64Array=="function"?Float64Array:void 0;S5.exports=CK});var I5=u((TPr,L5)=>{"use strict";function jK(){throw new Error("not implemented")}L5.exports=jK});var fr=u((LPr,P5)=>{"use strict";var VK=K0(),GK=T5(),UK=I5(),rs;VK()?rs=GK:rs=UK;P5.exports=rs});var F5=u((IPr,R5)=>{"use strict";var WK=bi(),HK=It(),kK=Ei(),DK=Ni(),XK=Pt(),JK=st(),zK=sr(),YK=kr(),ZK=fr(),_5;function $K(r){return new WK(r)}function QK(r){return new HK(r)}function KK(r){return new kK(r)}function rrr(r){return new DK(r)}function err(r){return new XK(r)}function trr(r){return new JK(r)}function irr(r){return new zK(r)}function nrr(r){return new YK(r)}function arr(r){return new ZK(r)}function urr(){var r={int8array:$K,uint8array:QK,uint8clampedarray:KK,int16array:rrr,uint16array:err,int32array:trr,uint32array:irr,float32array:nrr,float64array:arr};return r}_5=urr();R5.exports=_5});var j5=u((PPr,C5)=>{"use strict";var mn=A(),es=vr(),M5=tt(),srr=Tp(),x5=an(),orr=Cp(),vrr=nn(),B5=wi(),frr=Dp(),Ai=Kp(),lrr=nt(),Oi=be(),crr=B3(),prr=F5();function grr(r){var e,t,i,n,a,s,o,v;for(e=[],n=[],o=Object.create(lrr(r)),e.push(r),n.push(o),t=frr(r),v=0;v<t.length;v++)i=t[v],a=Ai(r,i),mn(a,"value")&&(s=es(r[i])?[]:{},a.value=ot(r[i],s,e,n,-1)),Oi(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function mrr(r){var e=[],t=[],i,n,a,s,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=B5(r),v=0;v<i.length;v++)s=i[v],n=Ai(r,s),mn(n,"value")&&(a=es(r[s])?[]:{},n.value=ot(r[s],a,e,t,-1)),Oi(o,s,n);return o}function ot(r,e,t,i,n){var a,s,o,v,f,l,c,p,y,q;if(n-=1,typeof r!="object"||r===null)return r;if(M5(r))return crr(r);if(srr(r))return mrr(r);if(o=x5(r),o==="date")return new Date(+r);if(o==="regexp")return orr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=prr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?grr(r):{};if(s=B5(r),n>0)for(a=o,q=0;q<s.length;q++){if(l=s[q],p=r[l],o=x5(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||M5(p)){a==="object"?(v=Ai(r,l),mn(v,"value")&&(v.value=ot(p)),Oi(e,l,v)):e[l]=ot(p);continue}if(y=vrr(t,p),y!==-1){e[l]=i[y];continue}c=es(p)?new Array(p.length):{},t.push(p),i.push(c),a==="array"?e[l]=ot(p,c,t,i,n):(v=Ai(r,l),mn(v,"value")&&(v.value=ot(p,c,t,i,n)),Oi(e,l,v))}else if(o==="array")for(q=0;q<s.length;q++)l=s[q],e[l]=r[l];else for(q=0;q<s.length;q++)l=s[q],v=Ai(r,l),Oi(e,l,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}C5.exports=ot});var G5=u((_Pr,V5)=>{"use strict";var yrr=vr(),qrr=Ne().isPrimitive,hrr=j(),drr=j5();function wrr(r,e){var t;if(arguments.length>1){if(!qrr(e))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+e+"`.");if(e===0)return r}else e=hrr;return t=yrr(r)?new Array(r.length):{},drr(r,t,[r],[t],e)}V5.exports=wrr});var Rt=u((RPr,U5)=>{"use strict";var brr=G5();U5.exports=brr});var W5=u((FPr,Err)=>{Err.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var k5=u((MPr,H5)=>{"use strict";var Nrr=Rt(),Arr=W5();function Orr(){return Nrr(Arr)}H5.exports=Orr});var X5=u((xPr,D5)=>{"use strict";var Srr=vr();function Trr(r){return typeof r=="object"&&r!==null&&!Srr(r)}D5.exports=Trr});var yn=u((BPr,J5)=>{"use strict";var Lrr=X5();J5.exports=Lrr});var Z5=u((CPr,Y5)=>{"use strict";var Irr=yn(),z5=L(),Prr=nt(),qn=A(),_rr=Y(),Rrr=Object.prototype;function Frr(r){var e;for(e in r)if(!qn(r,e))return!1;return!0}function Mrr(r){var e;return Irr(r)?(e=Prr(r),e?!qn(r,"constructor")&&qn(e,"constructor")&&z5(e.constructor)&&_rr(e.constructor)==="[object Function]"&&qn(e,"isPrototypeOf")&&z5(e.isPrototypeOf)&&(e===Rrr||Frr(r)):!0):!1}Y5.exports=Mrr});var S=u((jPr,$5)=>{"use strict";var xrr=Z5();$5.exports=xrr});var K5=u((VPr,Q5)=>{"use strict";var Brr=be();function Crr(r,e,t){Brr(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}Q5.exports=Crr});var e8=u((GPr,r8)=>{"use strict";var jrr=K5();r8.exports=jrr});var i8=u((UPr,t8)=>{"use strict";var Vrr=j(),Grr=Z();function Urr(r){return r===Vrr||r===Grr}t8.exports=Urr});var vt=u((WPr,n8)=>{"use strict";var Wrr=i8();n8.exports=Wrr});var u8=u((HPr,a8)=>{"use strict";function Hrr(r){return Math.abs(r)}a8.exports=Hrr});var $=u((kPr,s8)=>{"use strict";var krr=u8();s8.exports=krr});var v8=u((DPr,o8)=>{"use strict";var Drr=It(),Xrr=Pt(),Jrr={uint16:Xrr,uint8:Drr};o8.exports=Jrr});var p8=u((XPr,c8)=>{"use strict";var f8=v8(),l8;function zrr(){var r,e;return r=new f8.uint16(1),r[0]=4660,e=new f8.uint8(r.buffer),e[0]===52}l8=zrr();c8.exports=l8});var ft=u((JPr,g8)=>{"use strict";var Yrr=p8();g8.exports=Yrr});var y8=u((zPr,m8)=>{"use strict";var Zrr=ft(),ts;Zrr===!0?ts=1:ts=0;m8.exports=ts});var d8=u((YPr,h8)=>{"use strict";var $rr=sr(),Qrr=fr(),Krr=y8(),q8=new Qrr(1),rer=new $rr(q8.buffer);function eer(r){return q8[0]=r,rer[Krr]}h8.exports=eer});var lr=u((ZPr,w8)=>{"use strict";var ter=d8();w8.exports=ter});var E8=u(($Pr,b8)=>{"use strict";var ier=ft(),is;ier===!0?is=1:is=0;b8.exports=is});var A8=u((QPr,N8)=>{"use strict";var ner=sr(),aer=fr(),uer=E8(),ns=new aer(1),ser=new ner(ns.buffer);function oer(r,e){return ns[0]=r,ser[uer]=e>>>0,ns[0]}N8.exports=oer});var Ft=u((KPr,O8)=>{"use strict";var ver=A8();O8.exports=ver});var Ae=u((r_r,S8)=>{"use strict";var fer=1023;S8.exports=fer});var L8=u((e_r,T8)=>{"use strict";function ler(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}T8.exports=ler});var P8=u((t_r,I8)=>{"use strict";function cer(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}I8.exports=cer});var M8=u((i_r,F8)=>{"use strict";var _8=lr(),per=Ft(),ger=b(),mer=Ae(),yer=Z(),qer=L8(),her=P8(),hn=.6931471803691238,dn=19082149292705877e-26,der=0x40000000000000,wer=.3333333333333333,R8=1048575,ber=2146435072,Eer=1048576,Ner=1072693248;function Aer(r){var e,t,i,n,a,s,o,v,f,l,c,p;return r===0?yer:ger(r)||r<0?NaN:(t=_8(r),a=0,t<Eer&&(a-=54,r*=der,t=_8(r)),t>=ber?r+r:(a+=(t>>20)-mer|0,t&=R8,v=t+614244&1048576|0,r=per(r,t|v^Ner),a+=v>>20|0,o=r-1,(R8&2+t)<3?o===0?a===0?0:a*hn+a*dn:(s=o*o*(.5-wer*o),a===0?o-s:a*hn-(s-a*dn-o)):(l=o/(2+o),p=l*l,v=t-398458|0,c=p*p,f=440401-t|0,n=c*qer(c),i=p*her(c),v|=f,s=i+n,v>0?(e=.5*o*o,a===0?o-(e-l*(e+s)):a*hn-(e-(l*(e+s)+a*dn)-o)):a===0?o-l*(o-s):a*hn-(l*(o-s)-a*dn-o))))}F8.exports=Aer});var B=u((n_r,x8)=>{"use strict";var Oer=M8();x8.exports=Oer});var C8=u((a_r,B8)=>{"use strict";var Ser=Math.ceil;B8.exports=Ser});var V8=u((u_r,j8)=>{"use strict";var Ter=C8();j8.exports=Ter});var U8=u((s_r,G8)=>{"use strict";var Ler=K(),Ier=V8();function Per(r){return r<0?Ier(r):Ler(r)}G8.exports=Per});var wn=u((o_r,W8)=>{"use strict";var _er=U8();W8.exports=_er});var k8=u((v_r,H8)=>{"use strict";function Rer(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}H8.exports=Rer});var X8=u((f_r,D8)=>{"use strict";function Fer(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}D8.exports=Fer});var z8=u((l_r,J8)=>{"use strict";var Mer=k8(),xer=X8();function Ber(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*Mer(a),i+=n*n*xer(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}J8.exports=Ber});var as=u((c_r,Y8)=>{"use strict";var Cer=z8();Y8.exports=Cer});var Q8=u((p_r,$8)=>{"use strict";var Z8=-.16666666666666632,jer=.00833333333332249,Ver=-.0001984126982985795,Ger=27557313707070068e-22,Uer=-25050760253406863e-24,Wer=158969099521155e-24;function Her(r,e){var t,i,n,a;return a=r*r,n=a*a,t=jer+a*(Ver+a*Ger)+a*n*(Uer+a*Wer),i=a*r,e===0?r+i*(Z8+a*t):r-(a*(.5*e-i*t)-e-i*Z8)}$8.exports=Her});var us=u((g_r,K8)=>{"use strict";var ker=Q8();K8.exports=ker});var eg=u((m_r,rg)=>{"use strict";var Der=ft(),ss;Der===!0?ss=0:ss=1;rg.exports=ss});var ng=u((y_r,ig)=>{"use strict";var Xer=sr(),Jer=fr(),zer=eg(),tg=new Jer(1),Yer=new Xer(tg.buffer);function Zer(r){return tg[0]=r,Yer[zer]}ig.exports=Zer});var ug=u((q_r,ag)=>{"use strict";var $er=ng();ag.exports=$er});var vg=u((h_r,og)=>{"use strict";var Qer=ft(),sg,os,vs;Qer===!0?(os=1,vs=0):(os=0,vs=1);sg={HIGH:os,LOW:vs};og.exports=sg});var gg=u((d_r,pg)=>{"use strict";var Ker=sr(),rtr=fr(),lg=vg(),cg=new rtr(1),fg=new Ker(cg.buffer),etr=lg.HIGH,ttr=lg.LOW;function itr(r,e){return fg[etr]=r,fg[ttr]=e,cg[0]}pg.exports=itr});var bn=u((w_r,mg)=>{"use strict";var ntr=gg();mg.exports=ntr});var qg=u((b_r,yg)=>{"use strict";var atr=1023;yg.exports=atr});var dg=u((E_r,hg)=>{"use strict";var utr=-1023;hg.exports=utr});var bg=u((N_r,wg)=>{"use strict";var str=-1074;wg.exports=str});var Ag=u((A_r,Ng)=>{"use strict";var otr=ft(),Eg,fs,ls;otr===!0?(fs=1,ls=0):(fs=0,ls=1);Eg={HIGH:fs,LOW:ls};Ng.exports=Eg});var Ig=u((O_r,Lg)=>{"use strict";var vtr=sr(),ftr=fr(),Sg=Ag(),Tg=new ftr(1),Og=new vtr(Tg.buffer),ltr=Sg.HIGH,ctr=Sg.LOW;function ptr(r,e){return Tg[0]=e,r[0]=Og[ltr],r[1]=Og[ctr],r}Lg.exports=ptr});var Rg=u((S_r,_g)=>{"use strict";var Pg=Ig();function gtr(r,e){return arguments.length===1?Pg([0,0],r):Pg(r,e)}_g.exports=gtr});var En=u((T_r,Fg)=>{"use strict";var mtr=Rg();Fg.exports=mtr});var xg=u((L_r,Mg)=>{"use strict";var ytr=En(),qtr=lr(),htr=bn(),dtr=2147483648>>>0,wtr=2147483647,cs=[0,0];function btr(r,e){var t,i;return ytr(cs,r),t=cs[0],t&=wtr,i=qtr(e),i&=dtr,t|=i,htr(t,cs[1])}Mg.exports=btr});var Nn=u((I_r,Bg)=>{"use strict";var Etr=xg();Bg.exports=Etr});var jg=u((P_r,Cg)=>{"use strict";var Ntr=22250738585072014e-324;Cg.exports=Ntr});var Gg=u((__r,Vg)=>{"use strict";var Atr=jg(),Otr=vt(),Str=b(),Ttr=$(),Ltr=4503599627370496;function Itr(r,e){return Str(e)||Otr(e)?(r[0]=e,r[1]=0,r):e!==0&&Ttr(e)<Atr?(r[0]=e*Ltr,r[1]=-52,r):(r[0]=e,r[1]=0,r)}Vg.exports=Itr});var Hg=u((R_r,Wg)=>{"use strict";var Ug=Gg();function Ptr(r,e){return arguments.length===1?Ug([0,0],r):Ug(r,e)}Wg.exports=Ptr});var Dg=u((F_r,kg)=>{"use strict";var _tr=Hg();kg.exports=_tr});var Jg=u((M_r,Xg)=>{"use strict";var Rtr=2146435072;Xg.exports=Rtr});var Yg=u((x_r,zg)=>{"use strict";var Ftr=lr(),Mtr=Jg(),xtr=Ae();function Btr(r){var e=Ftr(r);return e=(e&Mtr)>>>20,e-xtr|0}zg.exports=Btr});var $g=u((B_r,Zg)=>{"use strict";var Ctr=Yg();Zg.exports=Ctr});var Kg=u((C_r,Qg)=>{"use strict";var jtr=j(),Vtr=Z(),Gtr=Ae(),Utr=qg(),Wtr=dg(),Htr=bg(),ktr=b(),Dtr=vt(),Xtr=Nn(),Jtr=Dg(),ztr=$g(),Ytr=En(),Ztr=bn(),$tr=2220446049250313e-31,Qtr=2148532223>>>0,ps=[0,0],gs=[0,0];function Ktr(r,e){var t,i;return e===0||r===0||ktr(r)||Dtr(r)?r:(Jtr(ps,r),r=ps[0],e+=ps[1],e+=ztr(r),e<Htr?Xtr(0,r):e>Utr?r<0?Vtr:jtr:(e<=Wtr?(e+=52,i=$tr):i=1,Ytr(gs,r),t=gs[0],t&=Qtr,t|=e+Gtr<<20,i*Ztr(t,gs[1])))}Qg.exports=Ktr});var An=u((j_r,r7)=>{"use strict";var rir=Kg();r7.exports=rir});var t7=u((V_r,e7)=>{"use strict";function eir(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}e7.exports=eir});var ms=u((G_r,i7)=>{"use strict";var tir=t7();i7.exports=tir});var a7=u((U_r,n7)=>{"use strict";var iir=ms();function nir(r){return iir(0,r)}n7.exports=nir});var s7=u((W_r,u7)=>{"use strict";var air=a7();u7.exports=air});var c7=u((H_r,l7)=>{"use strict";var uir=K(),On=An(),Ln=s7(),v7=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],sir=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ys=16777216,qs=5960464477539063e-23,Sn=Ln(20),o7=Ln(20),Tn=Ln(20),ar=Ln(20);function f7(r,e,t,i,n,a,s,o,v){var f,l,c,p,y,q,m,g,h;for(p=a,h=i[t],g=t,y=0;g>0;y++)l=qs*h|0,ar[y]=h-ys*l|0,h=i[g-1]+l,g-=1;if(h=On(h,n),h-=8*uir(h*.125),m=h|0,h-=m,c=0,n>0?(y=ar[t-1]>>24-n,m+=y,ar[t-1]-=y<<24-n,c=ar[t-1]>>23-n):n===0?c=ar[t-1]>>23:h>=.5&&(c=2),c>0){for(m+=1,f=0,y=0;y<t;y++)g=ar[y],f===0?g!==0&&(f=1,ar[y]=16777216-g):ar[y]=16777215-g;if(n>0)switch(n){case 1:ar[t-1]&=8388607;break;case 2:ar[t-1]&=4194303;break}c===2&&(h=1-h,f!==0&&(h-=On(1,n)))}if(h===0){for(g=0,y=t-1;y>=a;y--)g|=ar[y];if(g===0){for(q=1;ar[a-q]===0;q++);for(y=t+1;y<=t+q;y++){for(v[o+y]=v7[s+y],l=0,g=0;g<=o;g++)l+=r[g]*v[o+(y-g)];i[y]=l}return t+=q,f7(r,e,t,i,n,a,s,o,v)}}if(h===0)for(t-=1,n-=24;ar[t]===0;)t-=1,n-=24;else h=On(h,-n),h>=ys?(l=qs*h|0,ar[t]=h-ys*l|0,t+=1,n+=24,ar[t]=l):ar[t]=h|0;for(l=On(1,n),y=t;y>=0;y--)i[y]=l*ar[y],l*=qs;for(y=t;y>=0;y--){for(l=0,q=0;q<=p&&q<=t-y;q++)l+=sir[q]*i[y+q];Tn[t-y]=l}for(l=0,y=t;y>=0;y--)l+=Tn[y];for(c===0?e[0]=l:e[0]=-l,l=Tn[0]-l,y=1;y<=t;y++)l+=Tn[y];return c===0?e[1]=l:e[1]=-l,m&7}function oir(r,e,t,i){var n,a,s,o,v,f,l,c,p;for(a=4,o=i-1,s=(t-3)/24|0,s<0&&(s=0),f=t-24*(s+1),c=s-o,p=o+a,l=0;l<=p;l++)c<0?Sn[l]=0:Sn[l]=v7[c],c+=1;for(l=0;l<=a;l++){for(n=0,c=0;c<=o;c++)n+=r[c]*Sn[o+(l-c)];o7[l]=n}return v=a,f7(r,e,v,o7,f,a,s,o,Sn)}l7.exports=oir});var g7=u((k_r,p7)=>{"use strict";var vir=Math.round;p7.exports=vir});var hs=u((D_r,m7)=>{"use strict";var fir=g7();m7.exports=fir});var d7=u((X_r,h7)=>{"use strict";var lir=hs(),y7=lr(),cir=.6366197723675814,pir=1.5707963267341256,gir=6077100506506192e-26,mir=6077100506303966e-26,yir=20222662487959506e-37,qir=20222662487111665e-37,hir=84784276603689e-45,q7=2047;function dir(r,e,t){var i,n,a,s,o,v,f;return n=lir(r*cir),s=r-n*pir,o=n*gir,f=e>>20|0,t[0]=s-o,i=y7(t[0]),v=f-(i>>20&q7),v>16&&(a=s,o=n*mir,s=a-o,o=n*yir-(a-s-o),t[0]=s-o,i=y7(t[0]),v=f-(i>>20&q7),v>49&&(a=s,o=n*qir,s=a-o,o=n*hir-(a-s-o),t[0]=s-o)),t[1]=s-t[0]-o,n}h7.exports=dir});var b7=u((J_r,w7)=>{"use strict";var wir=lr(),bir=ug(),Eir=bn(),Nir=c7(),In=d7(),Air=0,Oir=16777216,Oe=1.5707963267341256,lt=6077100506506192e-26,Pn=2*lt,_n=3*lt,Rn=4*lt,Sir=2147483647,Tir=2146435072,Lir=1048575,Iir=598523,Pir=1072243195,_ir=1073928572,Rir=1074752122,Fir=1074977148,Mir=1075183036,xir=1075388923,Bir=1075594811,Cir=1094263291,Si=[0,0,0],Ti=[0,0];function jir(r,e){var t,i,n,a,s,o,v,f;if(n=wir(r),a=n&Sir|0,a<=Pir)return e[0]=r,e[1]=0,0;if(a<=Rir)return(a&Lir)===Iir?In(r,a,e):a<=_ir?r>0?(f=r-Oe,e[0]=f-lt,e[1]=f-e[0]-lt,1):(f=r+Oe,e[0]=f+lt,e[1]=f-e[0]+lt,-1):r>0?(f=r-2*Oe,e[0]=f-Pn,e[1]=f-e[0]-Pn,2):(f=r+2*Oe,e[0]=f+Pn,e[1]=f-e[0]+Pn,-2);if(a<=Bir)return a<=Mir?a===Fir?In(r,a,e):r>0?(f=r-3*Oe,e[0]=f-_n,e[1]=f-e[0]-_n,3):(f=r+3*Oe,e[0]=f+_n,e[1]=f-e[0]+_n,-3):a===xir?In(r,a,e):r>0?(f=r-4*Oe,e[0]=f-Rn,e[1]=f-e[0]-Rn,4):(f=r+4*Oe,e[0]=f+Rn,e[1]=f-e[0]+Rn,-4);if(a<Cir)return In(r,a,e);if(a>=Tir)return e[0]=NaN,e[1]=NaN,0;for(t=bir(r),i=(a>>20)-1046,f=Eir(a-(i<<20|0),t),o=0;o<2;o++)Si[o]=f|0,f=(f-Si[o])*Oir;for(Si[2]=f,s=3;Si[s-1]===Air;)s-=1;return v=Nir(Si,Ti,i,s,1),r<0?(e[0]=-Ti[0],e[1]=-Ti[1],-v):(e[0]=Ti[0],e[1]=Ti[1],v)}w7.exports=jir});var Fn=u((z_r,E7)=>{"use strict";var Vir=b7();E7.exports=Vir});var O7=u((Y_r,A7)=>{"use strict";var Gir=lr(),ds=as(),N7=us(),Uir=Fn(),Dr=[0,0],Wir=2147483647,Hir=1072243195,kir=1044381696,Dir=2146435072;function Xir(r){var e,t;if(e=Gir(r),e&=Wir,e<=Hir)return e<kir?1:ds(r,0);if(e>=Dir)return NaN;switch(t=Uir(r,Dr),t&3){case 0:return ds(Dr[0],Dr[1]);case 1:return-N7(Dr[0],Dr[1]);case 2:return-ds(Dr[0],Dr[1]);default:return N7(Dr[0],Dr[1])}}A7.exports=Xir});var Li=u((Z_r,S7)=>{"use strict";var Jir=O7();S7.exports=Jir});var I7=u(($_r,L7)=>{"use strict";var zir=lr(),T7=as(),ws=us(),Yir=Fn(),Zir=2147483647,$ir=2146435072,Qir=1072243195,Kir=1045430272,Xr=[0,0];function rnr(r){var e,t;if(e=zir(r),e&=Zir,e<=Qir)return e<Kir?r:ws(r,0);if(e>=$ir)return NaN;switch(t=Yir(r,Xr),t&3){case 0:return ws(Xr[0],Xr[1]);case 1:return T7(Xr[0],Xr[1]);case 2:return-ws(Xr[0],Xr[1]);default:return-T7(Xr[0],Xr[1])}}L7.exports=rnr});var Ii=u((Q_r,P7)=>{"use strict";var enr=I7();P7.exports=enr});var Vr=u((K_r,_7)=>{"use strict";var tnr=3.141592653589793;_7.exports=tnr});var M7=u((rRr,F7)=>{"use strict";var inr=b(),nnr=vt(),R7=Li(),bs=Ii(),anr=$(),Pi=Nn(),_i=Vr();function unr(r){var e,t;return inr(r)?NaN:nnr(r)?NaN:(t=r%2,e=anr(t),e===0||e===1?Pi(0,t):e<.25?bs(_i*t):e<.75?(e=.5-e,Pi(R7(_i*e),t)):e<1.25?(t=Pi(1,t)-t,bs(_i*t)):e<1.75?(e-=1.5,-Pi(R7(_i*e),t)):(t-=Pi(2,t),bs(_i*t)))}F7.exports=unr});var Ri=u((eRr,x7)=>{"use strict";var snr=M7();x7.exports=snr});var C7=u((tRr,B7)=>{"use strict";function onr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}B7.exports=onr});var V7=u((iRr,j7)=>{"use strict";function vnr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}j7.exports=vnr});var U7=u((nRr,G7)=>{"use strict";function fnr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}G7.exports=fnr});var H7=u((aRr,W7)=>{"use strict";function lnr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}W7.exports=lnr});var D7=u((uRr,k7)=>{"use strict";function cnr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}k7.exports=cnr});var J7=u((sRr,X7)=>{"use strict";function pnr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}X7.exports=pnr});var Y7=u((oRr,z7)=>{"use strict";function gnr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}z7.exports=gnr});var $7=u((vRr,Z7)=>{"use strict";function mnr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}Z7.exports=mnr});var K7=u((fRr,Q7)=>{"use strict";function ynr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}Q7.exports=ynr});var e9=u((lRr,r9)=>{"use strict";function qnr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}r9.exports=qnr});var n9=u((cRr,i9)=>{"use strict";var hnr=b(),dnr=vt(),wnr=$(),Mt=B(),bnr=wn(),Enr=Ri(),Nnr=Vr(),Es=j(),Anr=C7(),Onr=V7(),Snr=U7(),Tnr=H7(),Lnr=D7(),Inr=J7(),Pnr=Y7(),_nr=$7(),Rnr=K7(),Fnr=e9(),Mnr=.07721566490153287,xnr=.3224670334241136,Bnr=1,Cnr=-.07721566490153287,jnr=.48383612272381005,Vnr=-.1475877229945939,Gnr=.06462494023913339,Unr=-.07721566490153287,Wnr=1,Hnr=.4189385332046727,Mn=1.4616321449683622,knr=4503599627370496,Dnr=0x400000000000000,Xnr=8470329472543003e-37,t9=1.4616321449683622,Jnr=-.12148629053584961,znr=-3638676997039505e-33;function Ynr(r){var e,t,i,n,a,s,o,v,f,l,c,p,y;if(hnr(r)||dnr(r))return r;if(r===0)return Es;if(r<0?(e=!0,r=-r):e=!1,r<Xnr)return-Mt(r);if(e){if(r>=knr||(f=Enr(r),f===0))return Es;t=Mt(Nnr/wnr(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(y=-Mt(r),r>=Mn-1+.27?(c=1-r,i=0):r>=Mn-1-.27?(c=r-(t9-1),i=1):(c=r,i=2)):(y=0,r>=Mn+.27?(c=2-r,i=0):r>=Mn-.27?(c=r-t9,i=1):(c=r-1,i=2)),i){case 0:p=c*c,s=Mnr+p*Anr(p),a=p*(xnr+p*Onr(p)),o=c*s+a,y+=o-.5*c;break;case 1:p=c*c,l=p*c,s=jnr+l*Lnr(l),a=Vnr+l*Inr(l),n=Gnr+l*Pnr(l),o=p*s-(znr-l*(a+c*n)),y+=Jnr+o;break;case 2:s=c*(Unr+c*_nr(c)),a=Wnr+c*Rnr(c),y+=-.5*c+s/a;break}else if(r<8)switch(i=bnr(r),c=r-i,o=c*(Cnr+c*Tnr(c)),v=Bnr+c*Snr(c),y=.5*c+o/v,p=1,i){case 7:p*=c+6;case 6:p*=c+5;case 5:p*=c+4;case 4:p*=c+3;case 3:p*=c+2,y+=Mt(p)}else r<Dnr?(f=Mt(r),p=1/r,c=p*p,l=Hnr+p*Fnr(c),y=(r-.5)*(f-1)+l):y=r*(Mt(r)-1);return e&&(y=t-y),y}i9.exports=Ynr});var Fi=u((pRr,a9)=>{"use strict";var Znr=n9();a9.exports=Znr});var s9=u((gRr,u9)=>{"use strict";var $nr=Z();function Qnr(r){return r===0&&1/r===$nr}u9.exports=Qnr});var Ns=u((mRr,o9)=>{"use strict";var Knr=s9();o9.exports=Knr});var As=u((yRr,v9)=>{"use strict";var rar=2.5066282746310007;v9.exports=rar});var l9=u((qRr,f9)=>{"use strict";var ear=Nr();function tar(r){return ear(r/2)}f9.exports=tar});var xn=u((hRr,c9)=>{"use strict";var iar=l9();c9.exports=iar});var m9=u((dRr,g9)=>{"use strict";var p9=xn();function nar(r){return r>0?p9(r-1):p9(r+1)}g9.exports=nar});var Os=u((wRr,y9)=>{"use strict";var aar=m9();y9.exports=aar});var h9=u((bRr,q9)=>{"use strict";var uar=Math.sqrt;q9.exports=uar});var D=u((ERr,d9)=>{"use strict";var sar=h9();d9.exports=sar});var b9=u((NRr,w9)=>{"use strict";var oar=ft(),Ss;oar===!0?Ss=0:Ss=1;w9.exports=Ss});var N9=u((ARr,E9)=>{"use strict";var far=sr(),lar=fr(),car=b9(),Ts=new lar(1),par=new far(Ts.buffer);function gar(r,e){return Ts[0]=r,par[car]=e>>>0,Ts[0]}E9.exports=gar});var ct=u((ORr,A9)=>{"use strict";var mar=N9();A9.exports=mar});var S9=u((SRr,O9)=>{"use strict";function yar(r){return r|0}O9.exports=yar});var Ls=u((TRr,T9)=>{"use strict";var qar=S9();T9.exports=qar});var P9=u((LRr,I9)=>{"use strict";var L9=Os(),har=Nn(),dar=Z(),Bn=j();function war(r,e){return e===dar?Bn:e===Bn?0:e>0?L9(e)?r:0:L9(e)?har(Bn,r):Bn}I9.exports=war});var R9=u((IRr,_9)=>{"use strict";var bar=lr(),Ear=2147483647,Nar=1072693247,Cn=1e300,jn=1e-300;function Aar(r,e){var t,i;return i=bar(r),t=i&Ear,t<=Nar?e<0?Cn*Cn:jn*jn:e>0?Cn*Cn:jn*jn}_9.exports=Aar});var x9=u((PRr,M9)=>{"use strict";var Oar=$(),F9=j();function Sar(r,e){return r===-1?(r-r)/(r-r):r===1?1:Oar(r)<1==(e===F9)?0:F9}M9.exports=Sar});var C9=u((_Rr,B9)=>{"use strict";function Tar(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}B9.exports=Tar});var U9=u((RRr,G9)=>{"use strict";var Lar=lr(),Vn=ct(),j9=Ft(),Iar=Ae(),Par=C9(),_ar=1048575,V9=1048576,Rar=1072693248,Far=536870912,Mar=524288,xar=20,Bar=9007199254740992,Car=.9617966939259756,jar=.9617967009544373,Var=-7028461650952758e-24,Gar=[1,1.5],Uar=[0,.5849624872207642],War=[0,1350039202129749e-23];function Har(r,e,t){var i,n,a,s,o,v,f,l,c,p,y,q,m,g,h,E,N,C,O,H,ir,U;return H=0,t<V9&&(e*=Bar,H-=53,t=Lar(e)),H+=(t>>xar)-Iar|0,ir=t&_ar|0,t=ir|Rar|0,ir<=235662?U=0:ir<767610?U=1:(U=0,H+=1,t-=V9),e=j9(e,t),l=Gar[U],C=e-l,O=1/(e+l),n=C*O,s=Vn(n,0),i=(t>>1|Far)+Mar,i+=U<<18,v=j9(0,i),f=e-(v-l),o=O*(C-s*v-s*f),a=n*n,N=a*a*Par(a),N+=o*(s+n),a=s*s,v=3+a+N,v=Vn(v,0),f=N-(v-3-a),C=s*v,O=o*v+f*n,p=C+O,p=Vn(p,0),y=O-(p-C),q=jar*p,m=Var*p+y*Car+War[U],c=Uar[U],E=H,g=q+m+c+E,g=Vn(g,0),h=m-(g-E-c-q),r[0]=g,r[1]=h,r}G9.exports=Har});var H9=u((FRr,W9)=>{"use strict";function kar(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}W9.exports=kar});var D9=u((MRr,k9)=>{"use strict";var Dar=ct(),Xar=H9(),Jar=1.4426950408889634,zar=1.4426950216293335,Yar=19259629911266175e-24;function Zar(r,e){var t,i,n,a,s,o;return n=e-1,a=n*n*Xar(n),s=zar*n,o=n*Yar-a*Jar,i=s+o,i=Dar(i,0),t=o-(i-s),r[0]=i,r[1]=t,r}k9.exports=Zar});var Is=u((xRr,X9)=>{"use strict";var $ar=.6931471805599453;X9.exports=$ar});var z9=u((BRr,J9)=>{"use strict";function Qar(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}J9.exports=Qar});var em=u((CRr,rm)=>{"use strict";var Kar=lr(),Y9=Ft(),rur=ct(),eur=Ls(),tur=An(),iur=Is(),Z9=Ae(),nur=z9(),$9=2147483647,Q9=1048575,K9=1048576,aur=1071644672,Mi=20,uur=.6931471824645996,sur=-1904654299957768e-24;function our(r,e,t){var i,n,a,s,o,v,f,l,c,p,y;return p=r&$9|0,y=(p>>Mi)-Z9|0,c=0,p>aur&&(c=r+(K9>>y+1)>>>0,y=((c&$9)>>Mi)-Z9|0,i=(c&~(Q9>>y))>>>0,a=Y9(0,i),c=(c&Q9|K9)>>Mi-y>>>0,r<0&&(c=-c),e-=a),a=t+e,a=rur(a,0),o=a*uur,v=(t-(a-e))*iur+a*sur,l=o+v,f=v-(l-o),a=l*l,n=l-a*nur(a),s=l*n/(n-2)-(f+l*f),l=1-(s-l),r=Kar(l),r=eur(r),r+=c<<Mi>>>0,r>>Mi<=0?l=tur(l,c):l=Y9(l,r),l}rm.exports=our});var cm=u((jRr,lm)=>{"use strict";var tm=b(),im=Os(),nm=vt(),vur=Nr(),am=D(),fur=$(),Ps=En(),lur=ct(),um=Ls(),cur=Z(),pur=j(),gur=P9(),mur=R9(),yur=x9(),qur=U9(),hur=D9(),dur=em(),_s=2147483647,wur=1072693247,bur=1105199104,Eur=1139802112,sm=1083179008,Nur=1072693248,Aur=1083231232,Our=3230714880>>>0,om=31,Se=1e300,Te=1e-300,Sur=8008566259537294e-32,Jr=[0,0],vm=[0,0];function fm(r,e){var t,i,n,a,s,o,v,f,l,c,p,y,q,m,g,h;if(tm(r)||tm(e))return NaN;if(Ps(Jr,e),o=Jr[0],v=Jr[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return am(r);if(e===-.5)return 1/am(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(nm(e))return yur(r,e)}if(Ps(Jr,r),a=Jr[0],s=Jr[1],s===0){if(a===0)return gur(r,e);if(r===1)return 1;if(r===-1&&im(e))return-1;if(nm(r))return r===cur?fm(-0,-e):e<0?0:pur}if(r<0&&vur(e)===!1)return(r-r)/(r-r);if(n=fur(r),t=a&_s|0,i=o&_s|0,f=a>>>om|0,l=o>>>om|0,f&&im(e)?f=-1:f=1,i>bur){if(i>Eur)return mur(r,e);if(t<wur)return l===1?f*Se*Se:f*Te*Te;if(t>Nur)return l===0?f*Se*Se:f*Te*Te;q=hur(vm,n)}else q=qur(vm,n,t);if(c=lur(e,0),y=(e-c)*q[0]+e*q[1],p=c*q[0],m=y+p,Ps(Jr,m),g=um(Jr[0]),h=um(Jr[1]),g>=sm){if((g-sm|h)!==0||y+Sur>m-p)return f*Se*Se}else if((g&_s)>=Aur&&((g-Our|h)!==0||y<=m-p))return f*Te*Te;return m=dur(g,p,y),f*m}lm.exports=fm});var Q=u((VRr,pm)=>{"use strict";var Tur=cm();pm.exports=Tur});var mm=u((GRr,gm)=>{"use strict";function Lur(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}gm.exports=Lur});var qm=u((URr,ym)=>{"use strict";var Iur=An(),Pur=mm();function _ur(r,e,t){var i,n,a,s;return i=r-e,n=i*i,a=i-n*Pur(n),s=1-(e-i*a/(2-a)-r),Iur(s,t)}ym.exports=_ur});var Nm=u((WRr,Em)=>{"use strict";var Rur=b(),hm=wn(),Fur=Z(),dm=j(),Mur=qm(),xur=.6931471803691238,Bur=19082149292705877e-26,wm=1.4426950408889634,Cur=709.782712893384,jur=-745.1332191019411,bm=1/(1<<28),Vur=-bm;function Gur(r){var e,t,i;return Rur(r)||r===dm?r:r===Fur?0:r>Cur?dm:r<jur?0:r>Vur&&r<bm?1+r:(r<0?i=hm(wm*r-.5):i=hm(wm*r+.5),e=r-i*xur,t=i*Bur,Mur(e,t,i))}Em.exports=Gur});var ur=u((HRr,Am)=>{"use strict";var Uur=Nm();Am.exports=Uur});var Sm=u((kRr,Om)=>{"use strict";function Wur(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}Om.exports=Wur});var Im=u((DRr,Lm)=>{"use strict";var Hur=As(),Tm=Q(),kur=ur(),Dur=Sm(),Xur=143.01608;function Jur(r){var e,t,i;return e=1/r,e=1+e*Dur(e),t=kur(r),r>Xur?(i=Tm(r,.5*r-.25),t=i*(i/t)):t=Tm(r,r-.5)/t,Hur*t*e}Lm.exports=Jur});var _m=u((XRr,Pm)=>{"use strict";var zur=.5772156649015329;Pm.exports=zur});var Fm=u((JRr,Rm)=>{"use strict";var Yur=_m();function Zur(r,e){return e/((1+Yur*r)*r)}Rm.exports=Zur});var xm=u((zRr,Mm)=>{"use strict";function $ur(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}Mm.exports=$ur});var Hm=u((YRr,Wm)=>{"use strict";var Qur=b(),Kur=Nr(),r0r=Ns(),Bm=$(),e0r=K(),t0r=Ii(),Cm=j(),jm=Z(),Vm=Vr(),Gm=Im(),Um=Fm(),i0r=xm();function n0r(r){var e,t,i,n;if(Kur(r)&&r<0||r===jm||Qur(r))return NaN;if(r===0)return r0r(r)?jm:Cm;if(r>171.61447887182297)return Cm;if(r<-170.5674972726612)return 0;if(t=Bm(r),t>33)return r>=0?Gm(r):(i=e0r(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*t0r(Vm*n),e*Vm/(Bm(n)*Gm(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return Um(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return Um(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*i0r(r))}Wm.exports=n0r});var xt=u((ZRr,km)=>{"use strict";var a0r=Hm();km.exports=a0r});var Rs=u(($Rr,Dm)=>{"use strict";var u0r=14901161193847656e-24;Dm.exports=u0r});var Jm=u((QRr,Xm)=>{"use strict";var s0r=17976931348623157e292;Xm.exports=s0r});var Gn=u((KRr,zm)=>{"use strict";var o0r=709.782712893384;zm.exports=o0r});var Zm=u((rFr,Ym)=>{"use strict";var v0r=ur();function f0r(r,e){var t,i,n,a;if(n=v0r(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}Ym.exports=f0r});var Qm=u((eFr,$m)=>{"use strict";function l0r(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}$m.exports=l0r});var ry=u((tFr,Km)=>{"use strict";function c0r(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}Km.exports=c0r});var ty=u((iFr,ey)=>{"use strict";function p0r(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}ey.exports=p0r});var ny=u((nFr,iy)=>{"use strict";function g0r(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}iy.exports=g0r});var uy=u((aFr,ay)=>{"use strict";function m0r(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}ay.exports=m0r});var oy=u((uFr,sy)=>{"use strict";function y0r(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}sy.exports=y0r});var fy=u((sFr,vy)=>{"use strict";function q0r(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}vy.exports=q0r});var cy=u((oFr,ly)=>{"use strict";function h0r(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}ly.exports=h0r});var yy=u((vFr,my)=>{"use strict";var d0r=b(),py=ur(),w0r=ct(),b0r=j(),E0r=Z(),N0r=Qm(),A0r=ry(),O0r=ty(),S0r=ny(),T0r=uy(),L0r=oy(),I0r=fy(),P0r=cy(),Un=1e-300,_0r=13877787807814457e-33,gy=.8450629115104675,R0r=.12837916709551256,F0r=1,M0r=-.0023621185607526594,x0r=1,B0r=-.009864944034847148,C0r=1,j0r=-.0098649429247001,V0r=1;function G0r(r){var e,t,i,n,a,s,o,v;if(d0r(r))return NaN;if(r===b0r)return 0;if(r===E0r)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<_0r?1-r:(i=r*r,n=R0r+i*N0r(i),a=F0r+i*A0r(i),s=n/a,r<.25?1-(r+r*s):(n=r*s,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=M0r+a*O0r(a),v=x0r+a*S0r(a),e?1+gy+o/v:1-gy-o/v;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=B0r+a*T0r(a),a=C0r+a*L0r(a);else{if(r<-6)return 2-Un;n=j0r+a*I0r(a),a=V0r+a*P0r(a)}return i=w0r(t,0),n=py(-(i*i)-.5625)*py((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-Un:Un*Un}my.exports=G0r});var Fs=u((fFr,qy)=>{"use strict";var U0r=yy();qy.exports=U0r});var wy=u((lFr,dy)=>{"use strict";var W0r=Fs(),hy=D(),H0r=ur(),k0r=Vr();function D0r(r,e){var t,i,n,a,s;if(a=W0r(hy(e)),a!==0&&r>1){for(i=H0r(-e)/hy(k0r*e),i*=e,t=.5,i/=t,n=i,s=2;s<r;++s)i/=s-t,i*=e,n+=i;a+=n}return a}dy.exports=D0r});var Ms=u((cFr,by)=>{"use strict";var X0r=-708.3964185322641;by.exports=X0r});var Oy=u((pFr,Ay)=>{"use strict";var Bt=ur(),Wn=Q(),J0r=B(),Ey=Gn(),Ny=Ms();function z0r(r,e){var t,i;return i=r*J0r(e),e>=1?i<Ey&&-e>Ny?t=Wn(e,r)*Bt(-e):r>=1?t=Wn(e/Bt(e/r),r):t=Bt(i-e):i>Ny?t=Wn(e,r)*Bt(-e):e/r<Ey?t=Wn(e/Bt(e/r),r):t=Bt(i-e),t}Ay.exports=z0r});var xs=u((gFr,Sy)=>{"use strict";function Y0r(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Sy.exports=Y0r});var Ly=u((mFr,Ty)=>{"use strict";var Z0r=xs();function $0r(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new Function(e)();function a(s){return Z0r(r,s)}}Ty.exports=$0r});var _y=u((yFr,Py)=>{"use strict";var Q0r=w(),Iy=xs(),K0r=Ly();Q0r(Iy,"factory",K0r);Py.exports=Iy});var Le=u((qFr,Ry)=>{"use strict";var rsr=6.283185307179586;Ry.exports=rsr});var My=u((hFr,Fy)=>{"use strict";function esr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}Fy.exports=esr});var By=u((dFr,xy)=>{"use strict";function tsr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}xy.exports=tsr});var jy=u((wFr,Cy)=>{"use strict";function isr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}Cy.exports=isr});var Gy=u((bFr,Vy)=>{"use strict";function nsr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}Vy.exports=nsr});var Wy=u((EFr,Uy)=>{"use strict";function asr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}Uy.exports=asr});var ky=u((NFr,Hy)=>{"use strict";function usr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}Hy.exports=usr});var Xy=u((AFr,Dy)=>{"use strict";function ssr(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}Dy.exports=ssr});var zy=u((OFr,Jy)=>{"use strict";function osr(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}Jy.exports=osr});var Zy=u((SFr,Yy)=>{"use strict";function vsr(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Yy.exports=vsr});var Qy=u((TFr,$y)=>{"use strict";var fsr=_y(),lsr=Fs(),Bs=D(),csr=ur(),psr=B(),gsr=Le(),msr=My(),ysr=By(),qsr=jy(),hsr=Gy(),dsr=Wy(),wsr=ky(),bsr=Xy(),Esr=zy(),Nsr=Zy(),Rr=[0,0,0,0,0,0,0,0,0,0];function Asr(r,e){var t,i,n,a,s;return i=(e-r)/r,n=-psr(1+i)+i,a=r*n,s=Bs(2*n),e<r&&(s=-s),Rr[0]=msr(s),Rr[1]=ysr(s),Rr[2]=qsr(s),Rr[3]=hsr(s),Rr[4]=dsr(s),Rr[5]=wsr(s),Rr[6]=bsr(s),Rr[7]=Esr(s),Rr[8]=Nsr(s),Rr[9]=-.0005967612901927463,t=fsr(Rr,1/r),t*=csr(-a)/Bs(gsr*r),e<r&&(t=-t),t+=lsr(Bs(a))/2,t}$y.exports=Asr});var rq=u((LFr,Ky)=>{"use strict";var Osr=eval;Ky.exports=Osr});var tq=u((IFr,eq)=>{"use strict";var Ssr=rq();function Tsr(){var r;try{Ssr('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}eq.exports=Tsr});var Cs=u((PFr,iq)=>{"use strict";var Lsr=tq();iq.exports=Lsr});var Ct=u((_Fr,nq)=>{"use strict";var Isr=2220446049250313e-31;nq.exports=Isr});var uq=u((RFr,aq)=>{"use strict";var Hn=$(),Psr=Ct(),_sr=1e6;function Rsr(r,e){var t,i,n,a,s,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||Psr,a=o.maxTerms||_sr,s=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(s+=n,Hn(i*s)>=Hn(n)||--a===0)break}else do n=r(),s+=n;while(Hn(i*s)<Hn(n)&&--a);return s}aq.exports=Rsr});var vq=u((FFr,oq)=>{"use strict";var sq=$(),Fsr=Ct(),Msr=1e6;function xsr(r,e){var t,i,n,a,s;s={},arguments.length>1&&(s=e),t=s.tolerance||Fsr,n=s.maxTerms||Msr,a=s.initialValue||0;do i=r(),a+=i;while(sq(t*a)<sq(i)&&--n);return a}oq.exports=xsr});var Vs=u((MFr,fq)=>{"use strict";var Bsr=Cs(),Csr=uq(),jsr=vq(),js;Bsr()?js=Csr:js=jsr;fq.exports=js});var cq=u((xFr,lq)=>{"use strict";function Vsr(r,e){var t=1,i=r,n=e;return a;function a(){var s=t;return i+=1,t*=n/i,s}}lq.exports=Vsr});var gq=u((BFr,pq)=>{"use strict";var Gsr=Vs(),Usr=cq();function Wsr(r,e,t){var i,n;return t=t||0,n=Usr(r,e),i=Gsr(n,{initialValue:t}),i}pq.exports=Wsr});var yq=u((CFr,mq)=>{"use strict";function Hsr(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}mq.exports=Hsr});var hq=u((jFr,qq)=>{"use strict";var ksr=yq();qq.exports=ksr});var wq=u((VFr,dq)=>{"use strict";var Dsr=hq();dq.exports=Dsr});var Eq=u((GFr,bq)=>{"use strict";function Xsr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}bq.exports=Xsr});var Tq=u((UFr,Sq)=>{"use strict";var Jsr=b(),Nq=lr(),Aq=Ft(),zsr=j(),Ysr=Z(),Oq=Ae(),Zsr=Eq(),Gs=.6931471803691238,Us=19082149292705877e-26,$sr=.41421356237309503,Qsr=-.2928932188134525,Ksr=1862645149230957e-24,ror=5551115123125783e-32,eor=9007199254740992,tor=.6666666666666666;function ior(r){var e,t,i,n,a,s,o,v,f,l;if(r<-1||Jsr(r))return NaN;if(r===-1)return Ysr;if(r===zsr||r===0)return r;if(r<0?i=-r:i=r,l=1,i<$sr){if(i<Ksr)return i<ror?r:r-r*r*.5;r>Qsr&&(l=0,n=r,t=1)}return l!==0&&(i<eor?(f=1+r,t=Nq(f),l=(t>>20)-Oq,l>0?a=1-(f-r):a=r-(f-1),a/=f):(f=r,t=Nq(f),l=(t>>20)-Oq,a=0),t&=1048575,t<434334?f=Aq(f,t|1072693248):(l+=1,f=Aq(f,t|1071644672),t=1048576-t>>2),n=f-1),e=.5*n*n,t===0?n===0?(a+=l*Us,l*Gs+a):(v=e*(1-tor*n),l*Gs-(v-(l*Us+a)-n)):(s=n/(2+n),o=s*s,v=o*Zsr(o),l===0?n-(e-s*(e+v)):l*Gs-(e-(s*(e+v)+(l*Us+a))-n))}Sq.exports=ior});var kn=u((WFr,Lq)=>{"use strict";var nor=Tq();Lq.exports=nor});var Pq=u((HFr,Iq)=>{"use strict";var aor=j();function uor(r){return r===0&&1/r===aor}Iq.exports=uor});var Ie=u((kFr,_q)=>{"use strict";var sor=Pq();_q.exports=sor});var Mq=u((DFr,Fq)=>{"use strict";var Rq=Ie(),Ws=b(),oor=Z(),Dn=j();function vor(r,e){var t,i,n,a;if(t=arguments.length,t===2)return Ws(r)||Ws(e)?NaN:r===Dn||e===Dn?Dn:r===e&&r===0?Rq(r)?r:e:r>e?r:e;for(i=oor,a=0;a<t;a++){if(n=arguments[a],Ws(n)||n===Dn)return n;(n>i||n===i&&n===0&&Rq(n))&&(i=n)}return i}Fq.exports=vor});var Hs=u((XFr,xq)=>{"use strict";var lor=Mq();xq.exports=lor});var jq=u((JFr,Cq)=>{"use strict";var Bq=Ns(),ks=b(),Xn=Z(),cor=j();function por(r,e){var t,i,n,a;if(t=arguments.length,t===2)return ks(r)||ks(e)?NaN:r===Xn||e===Xn?Xn:r===e&&r===0?Bq(r)?r:e:r<e?r:e;for(i=cor,a=0;a<t;a++){if(n=arguments[a],ks(n)||n===Xn)return n;(n<i||n===i&&n===0&&Bq(n))&&(i=n)}return i}Cq.exports=por});var Gq=u((zFr,Vq)=>{"use strict";var gor=jq();Vq.exports=gor});var Wq=u((YFr,Uq)=>{"use strict";var mor=10.900511;Uq.exports=mor});var Ds=u((ZFr,Hq)=>{"use strict";var yor=2.718281828459045;Hq.exports=yor});var Xq=u(($Fr,Dq)=>{"use strict";var qor=wq(),hor=Fi(),dor=xt(),wor=kn(),bor=D(),Eor=$(),Pe=ur(),xi=Q(),Xs=Hs(),Js=Gq(),kq=B(),Jn=Gn(),Bi=Ms(),zs=Wq(),Nor=Ds();function Aor(r,e){var t,i,n,a,s,o,v;return n=r+zs-.5,v=(e-r-zs+.5)/n,r<1?e<=Bi?Pe(r*kq(e)-e-hor(r)):xi(e,r)*Pe(-e)/dor(r):(Eor(v*v*r)<=100&&r>150?(t=r*(wor(v)-v)+e*(.5-zs)/n,t=Pe(t)):(a=r*kq(e/n),s=r-e,Js(a,s)<=Bi||Xs(a,s)>=Jn?(i=s/r,Js(a,s)/2>Bi&&Xs(a,s)/2<Jn?(o=xi(e/n,r/2)*Pe(s/2),t=o*o):Js(a,s)/4>Bi&&Xs(a,s)/4<Jn&&e>r?(o=xi(e/n,r/4)*Pe(s/4),t=o*o,t*=t):i>Bi&&i<Jn?t=xi(e*Pe(i)/n,r):t=Pe(a+s)):t=xi(e/n,r)*Pe(s)),t*=bor(n/Nor)/qor(r),t)}Dq.exports=Aor});var zq=u((QFr,Jq)=>{"use strict";var Oor=.34657359027997264;Jq.exports=Oor});var Zq=u((KFr,Yq)=>{"use strict";function Sor(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}Yq.exports=Sor});var rh=u((rMr,Kq)=>{"use strict";var Tor=b(),Ys=lr(),zn=Ft(),$q=j(),Lor=Z(),Ior=Ae(),Por=zq(),_or=Zq(),Ror=709.782712893384,Zs=.6931471803691238,$s=19082149292705877e-26,Qq=1.4426950408889634,For=38.816242111356935,Mor=1.0397207708399179;function xor(r){var e,t,i,n,a,s,o,v,f,l,c,p;if(r===$q||Tor(r))return r;if(r===Lor)return-1;if(r===0)return r;if(r<0?(t=!0,o=-r):(t=!1,o=r),o>=For){if(t)return-1;if(o>=Ror)return $q}if(a=Ys(o)|0,o>Por)o<Mor?t?(i=r+Zs,n=-$s,p=-1):(i=r-Zs,n=$s,p=1):(t?p=Qq*r-.5:p=Qq*r+.5,p|=0,l=p,i=r-l*Zs,n=l*$s),r=i-n,f=i-r-n;else{if(a<1016070144)return r;p=0}return e=.5*r,v=r*e,s=1+v*_or(v),l=3-s*e,c=v*((s-l)/(6-r*l)),p===0?r-(r*c-v):(c=r*(c-f)-f,c-=v,p===-1?.5*(r-c)-.5:p===1?r<-.25?-2*(c-(r+.5)):1+2*(r-c):p<=-2||p>56?(o=1-(c-r),i=Ys(o)+(p<<20)|0,o=zn(o,i),o-1):(l=1,p<20?(i=1072693248-(2097152>>p)|0,l=zn(l,i),o=l-(c-r)):(i=Ior-p<<20|0,l=zn(l,i),o=r-(c+l),o+=1),i=Ys(o)+(p<<20)|0,zn(o,i)))}Kq.exports=xor});var Qs=u((eMr,eh)=>{"use strict";var Bor=rh();eh.exports=Bor});var ah=u((tMr,nh)=>{"use strict";var th=b(),ih=$(),Cor=Qs(),jor=B(),Vor=Q(),Gor=wn();function Uor(r,e){var t;if(th(r)||th(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((ih(e*(r-1))<.5||ih(e)<.2)&&(t=jor(r)*e,t<.5))return Cor(t)}else if(Gor(e)!==e)return NaN;return Vor(r,e)-1}nh.exports=Uor});var sh=u((iMr,uh)=>{"use strict";var Wor=ah();uh.exports=Wor});var vh=u((nMr,oh)=>{"use strict";function Hor(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}oh.exports=Hor});var lh=u((aMr,fh)=>{"use strict";function kor(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}fh.exports=kor});var ph=u((uMr,ch)=>{"use strict";function Dor(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}ch.exports=Dor});var mh=u((sMr,gh)=>{"use strict";var Ks=B(),Xor=Ct(),Jor=vh(),zor=lh(),Yor=ph(),Zor=.15896368026733398,$or=.5281534194946289,Qor=.45201730728149414;function Kor(r,e,t){var i,n,a,s;if(r<Xor)return-Ks(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=Ks(r);while(r>=3);t=r-2}return a=t*(r+1),s=Jor(t),n+=a*Zor+a*s,n}return r<1&&(n+=-Ks(r),t=e,e=r,r+=1),r<=1.5?(a=zor(e),i=e*t,n+=i*$or+i*a,n):(a=t*e,s=Yor(-t),n+=a*Qor+a*s,n)}gh.exports=Kor});var wh=u((oMr,dh)=>{"use strict";var yh=xt(),qh=Qs(),rvr=kn(),evr=b(),hh=mh();function tvr(r){return evr(r)?NaN:r<0?r<-.5?yh(1+r)-1:qh(-rvr(r)+hh(r+2,r+1,r)):r<2?qh(hh(r+1,r,r-1)):yh(1+r)-1}dh.exports=tvr});var Eh=u((vMr,bh)=>{"use strict";var ivr=wh();bh.exports=ivr});var Ah=u((fMr,Nh)=>{"use strict";function nvr(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,s;function s(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}Nh.exports=nvr});var Sh=u((lMr,Oh)=>{"use strict";var avr=sh(),uvr=Vs(),svr=Eh(),ovr=Ah();function vvr(r,e,t){var i,n,a,s,o;return n=svr(r),a=(n+1)/r,s=avr(e,r),n-=s,n/=r,o=ovr(r,e),s+=1,i=t?a:0,n=-s*uvr(o,{initialValue:(i-n)/s}),t&&(n=-n),[n,a]}Oh.exports=vvr});var ro=u((cMr,Th)=>{"use strict";var fvr=11754943508222875e-54;Th.exports=fvr});var Ih=u((pMr,Lh)=>{"use strict";var Yn=$(),Gr=ro(),lvr=Ct(),cvr=1e6;function pvr(r,e,t){var i,n,a,s,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),s=f[1],a=f[0],s===0&&(s=Gr),o=s,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=Gr),o=f[1]+f[0]/o,o===0&&(o=Gr),v=1/v,n=o*v,s*=n);while(Yn(n-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=Gr),o=f[1]+f[0]/o,o===0&&(o=Gr),v=1/v,n=o*v,s*=n);while(f&&Yn(n-1)>e&&--t);return a/s}function gvr(r,e,t){var i,n,a,s,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),a=v[1],a===0&&(a=Gr),s=a,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=Gr),s=v[1]+v[0]/s,s===0&&(s=Gr),o=1/o,n=s*o,a*=n);while(v&&Yn(n-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=Gr),s=v[1]+v[0]/s,s===0&&(s=Gr),o=1/o,n=s*o,a*=n);while(v&&Yn(n-1)>e&&--t);return a}function mvr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||cvr,n=i.tolerance||lvr,i.keep?gvr(r,n,t):pvr(r,n,t)}Lh.exports=mvr});var Rh=u((gMr,_h)=>{"use strict";var Ph=$(),yvr=Ct(),jt=ro(),qvr=1e6;function hvr(r,e,t){var i,n,a,s,o,v;v=r(),o=v[1],n=v[0],o===0&&(o=jt),a=o,s=0;do v=r(),v&&(s=v[1]+v[0]*s,s===0&&(s=jt),a=v[1]+v[0]/a,a===0&&(a=jt),s=1/s,i=a*s,o*=i);while(v&&Ph(i-1)>e&&--t);return n/o}function dvr(r,e,t){var i,n,a,s,o;o=r(),s=o[1],s===0&&(s=jt),n=s,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=jt),n=o[1]+o[0]/n,n===0&&(n=jt),a=1/a,i=n*a,s*=i);while(o&&Ph(i-1)>e&&--t);return s}function wvr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||yvr,t=i.maxIter||qvr,i.keep?dvr(r,n,t):hvr(r,n,t)}_h.exports=wvr});var Mh=u((mMr,Fh)=>{"use strict";var bvr=Cs(),Evr=Ih(),Nvr=Rh(),eo;bvr()?eo=Evr:eo=Nvr;Fh.exports=eo});var Bh=u((yMr,xh)=>{"use strict";function Avr(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}xh.exports=Avr});var jh=u((qMr,Ch)=>{"use strict";var Ovr=Mh(),Svr=Bh();function Tvr(r,e){var t=Svr(r,e);return 1/(e-r+1+Ovr(t))}Ch.exports=Tvr});var zh=u((hMr,Jh)=>{"use strict";var Lvr=Fi(),Ivr=K(),Ci=xt(),Vh=$(),Pvr=ur(),Gh=Q(),Fr=B(),_vr=Rs(),Uh=Jm(),Rvr=As(),Wh=Gn(),Fvr=j(),Mvr=Zm(),xvr=wy(),Hh=Oy(),Bvr=Qy(),to=gq(),kh=Xq(),Cvr=Sh(),Dh=jh(),jvr=170;function Xh(r,e,t,i){var n,a,s,o,v,f,l,c,p,y,q,m,g,h,E;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,c=i,p=0,e>=jvr&&!a)return c&&e*4<r?(p=e*Fr(r)-r,p+=Fr(Dh(e,r))):!c&&e>4*r?(p=e*Fr(r)-r,o=0,p+=Fr(to(e,r,o)/e)):(p=Xh(e,r,!0,c),p===0?c?(p=1+1/(12*e)+1/(288*e*e),p=Fr(p)-e+(e-.5)*Fr(e),p+=Fr(Rvr)):(p=e*Fr(r)-r,o=0,p+=Fr(to(e,r,o)/e)):p=Fr(p)+Lvr(e)),p>Wh?Fvr:Pvr(p);switch(l=e<30&&e<=r+1&&r<Wh,l?(h=Ivr(e),y=h===e,v=y?!1:Vh(h-e)===.5):y=v=!1,y&&r>.6?(c=!c,s=0):v&&r>.2?(c=!c,s=1):r<_vr&&e>1?s=6:r<.5?-.4/Fr(r)<e?s=2:s=3:r<1.1?r*.75<e?s=2:s=3:(f=!1,a&&e>20&&(q=Vh((r-e)/e),e>200?20/e>q*q&&(f=!0):q<.4&&(f=!0)),f?s=5:r-1/(3*r)<e?s=2:(s=4,c=!c)),s){case 0:p=Mvr(e,r),a===!1&&(p*=Ci(e));break;case 1:p=xvr(e,r),a===!1&&(p*=Ci(e));break;case 2:p=a?kh(e,r):Hh(e,r),p!==0&&(o=0,n=!1,c&&(o=a?1:Ci(e),a||p>=1||Uh*p>o?(o/=p,a||e<1||Uh/e>o?(o*=-e,n=!0):o=0):o=0)),p*=to(e,r,o)/e,n&&(c=!1,p=-p);break;case 3:c=!c,g=Cvr(e,r,c),p=g[0],E=g[1],c=!1,a&&(p/=E);break;case 4:p=a?kh(e,r):Hh(e,r),p!==0&&(p*=Dh(e,r));break;case 5:p=Bvr(e,r),r>=e&&(c=!c);break;case 6:p=a?Gh(r,e)/Ci(e+1):Gh(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),c&&(m=a?1:Ci(e),p=m-p),p}Jh.exports=Xh});var io=u((dMr,Yh)=>{"use strict";var Vvr=zh();Yh.exports=Vvr});var $h=u((wMr,Zh)=>{"use strict";var Gvr=io(),no=b(),Uvr=j();function Wvr(r,e,t){return no(r)||no(e)||no(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===Uvr?1:Gvr(r*t,e)}Zh.exports=Wvr});var Kh=u((bMr,Qh)=>{"use strict";function Hvr(r){return e;function e(){return r}}Qh.exports=Hvr});var I=u((EMr,rd)=>{"use strict";var kvr=Kh();rd.exports=kvr});var id=u((NMr,td)=>{"use strict";var ed=b();function Dvr(r,e){return ed(r)||ed(e)?NaN:r<e?0:1}td.exports=Dvr});var ud=u((AMr,ad)=>{"use strict";var Xvr=I(),nd=b();function Jvr(r){if(nd(r))return Xvr(NaN);return e;function e(t){return nd(t)?NaN:t<r?0:1}}ad.exports=Jvr});var ao=u((OMr,od)=>{"use strict";var zvr=w(),sd=id(),Yvr=ud();zvr(sd,"factory",Yvr);od.exports=sd});var ld=u((SMr,fd)=>{"use strict";var Zvr=I(),$vr=ao().factory,Qvr=io(),vd=b(),Kvr=j();function r1r(r,e){if(vd(r)||vd(e)||r<0||e<=0)return Zvr(NaN);if(r===0)return $vr(0);return t;function t(i){return i<=0?0:i===Kvr?1:Qvr(i*e,r)}}fd.exports=r1r});var uo=u((TMr,pd)=>{"use strict";var e1r=w(),cd=$h(),t1r=ld();e1r(cd,"factory",t1r);pd.exports=cd});var md=u((LMr,gd)=>{"use strict";var i1r=uo();function n1r(r,e){return i1r(r,e/2,.5)}gd.exports=n1r});var qd=u((IMr,yd)=>{"use strict";var a1r=uo().factory;function u1r(r){return a1r(r/2,.5)}yd.exports=u1r});var wd=u((PMr,dd)=>{"use strict";var s1r=w(),hd=md(),o1r=qd();s1r(hd,"factory",o1r);dd.exports=hd});var Nd=u((_Mr,Ed)=>{"use strict";var v1r=S(),f1r=A(),l1r=nn(),bd=["values","indices","*"];function c1r(r,e){return v1r(e)?f1r(e,"returns")&&(r.returns=e.returns,l1r(bd,r.returns)===-1)?new TypeError('invalid option. `returns` option must be one of the following: "'+bd.join('", "')+'". Option: `'+r.returns+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}Ed.exports=c1r});var Od=u((RMr,Ad)=>{"use strict";var p1r=A();function g1r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),p1r(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}Ad.exports=g1r});var Td=u((FMr,Sd)=>{"use strict";var m1r=A();function y1r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),m1r(t,n)?t[n].push(a):t[n]=[a];return t}Sd.exports=y1r});var Id=u((MMr,Ld)=>{"use strict";var q1r=A();function h1r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),q1r(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}Ld.exports=h1r});var Rd=u((xMr,_d)=>{"use strict";var Pd=_r(),d1r=Nd(),w1r=Od(),b1r=Td(),E1r=Id();function N1r(r,e,t){var i,n,a;if(!Pd(r))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+r+"`.");if(i={returns:"values"},arguments.length===2)a=e;else{if(n=d1r(i,e),n)throw n;a=t}if(!Pd(a))throw new TypeError("invalid argument. Last argument must be a collection. Value: `"+a+"`.");if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?w1r(r,a):i.returns==="indices"?b1r(r,a):E1r(r,a)}_d.exports=N1r});var Md=u((BMr,Fd)=>{"use strict";var A1r=Rd();Fd.exports=A1r});var Bd=u((CMr,xd)=>{"use strict";function O1r(r){var e,t,i,n,a,s;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)s=r[a],e=s-t,t+=e/(a+1),n+=e*(s-t);return n/(a-1)}xd.exports=O1r});var Vd=u((jMr,jd)=>{"use strict";var S1r=vr(),T1r=x().isPrimitive,L1r=S(),I1r=er(),Cd=A();function P1r(r,e){return L1r(e)?Cd(e,"alpha")&&(r.alpha=e.alpha,!T1r(r.alpha)||I1r(r.alpha))?new TypeError("invalid option. `alpha` option must be a number primitive. Option: `"+r.alpha+"`."):Cd(e,"groups")&&(r.groups=e.groups,!S1r(r.groups))?new TypeError("invalid option. `groups` option must be an array. Option: `"+r.groups+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}jd.exports=P1r});var so=u((VMr,Gd)=>{"use strict";var _1r=Pr().isPrimitive;function R1r(r){return _1r(r)&&r>0}Gd.exports=R1r});var oo=u((GMr,Ud)=>{"use strict";var F1r=Pr().isObject;function M1r(r){return F1r(r)&&r.valueOf()>0}Ud.exports=M1r});var Hd=u((UMr,Wd)=>{"use strict";var x1r=so(),B1r=oo();function C1r(r){return x1r(r)||B1r(r)}Wd.exports=C1r});var zr=u((WMr,Dd)=>{"use strict";var kd=w(),vo=Hd(),j1r=so(),V1r=oo();kd(vo,"isPrimitive",j1r);kd(vo,"isObject",V1r);Dd.exports=vo});var Zn=u((HMr,Xd)=>{"use strict";var G1r=9007199254740991;Xd.exports=G1r});var zd=u((kMr,Jd)=>{"use strict";var U1r=308;Jd.exports=U1r});var Zd=u((DMr,Yd)=>{"use strict";var W1r=-308;Yd.exports=W1r});var Qd=u((XMr,$d)=>{"use strict";var H1r=-324;$d.exports=H1r});var aw=u((JMr,nw)=>{"use strict";var Kd=b(),$n=vt(),rw=Q(),k1r=$(),ew=hs(),D1r=Zn(),tw=zd(),X1r=Zd(),J1r=Qd(),z1r=D1r+1,iw=1e308;function Y1r(r,e){var t,i;return Kd(r)||Kd(e)||$n(e)?NaN:$n(r)||r===0||e<J1r||k1r(r)>z1r&&e<=0?r:e>tw?0*r:e<X1r?(t=rw(10,-(e+tw)),i=r*iw*t,$n(i)?r:ew(i)/iw/t):(t=rw(10,-e),i=r*t,$n(i)?r:ew(i)/t)}nw.exports=Y1r});var sw=u((zMr,uw)=>{"use strict";var Z1r=aw();uw.exports=Z1r});var fw=u((YMr,vw)=>{"use strict";var $1r=zr(),Q1r=S(),K1r=nr().isPrimitive,ow=A(),fo=sw();function rfr(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!Q1r(r))throw new TypeError("invalid argument. First argument must be an options object. Value: `"+r+"`.");if(ow(r,"digits")){if(!$1r(r.digits))throw new TypeError("invalid option. `digits` option must be a positive integer. Option: `"+r.digits+"`.");t=r.digits}if(ow(r,"decision")){if(!K1r(r.decision))throw new TypeError("invalid option. `decision` option must be a boolean primitive. Option: `"+r.decision+"`.");e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+fo(this.pValue,-t)+`
`,i+="    statistic: "+fo(this.statistic,-t)+`
`,i+="    df: "+fo(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}vw.exports=rfr});var pw=u((ZMr,cw)=>{"use strict";var efr=_r(),tfr=S(),pt=e8(),ifr=wi(),nfr=wd(),afr=Md(),lw=B(),ufr=Bd(),sfr=Vd(),ofr=fw();function vfr(){var r,e,t,i,n,a,s,o,v,f,l,c,p,y,q,m,g,h,E,N;if(v=[],e=arguments.length,f={},tfr(arguments[e-1])&&(r=arguments[e-1],e-=1,y=sfr(f,r),y))throw y;if(f.groups){if(n=afr(arguments[0],f.groups),i=ifr(n),e=i.length,e<2)throw new Error("invalid number of groups. `groups` array must contain at least two unique elements. Value: `"+i+"`.");for(N=0;N<e;N++)v.push(n[i[N]])}else for(N=0;N<e;N++)v.push(arguments[N]);for(s=0,t=0,o=0,q=0,h=new Array(e),E=h.slice(),N=0;N<e;N++){if(p=v[N],!efr(p))throw new TypeError("invalid argument. Must provide array-like arguments. Value: `"+p+"`.");if(p.length===0)throw new Error("invalid argument. Supplied arrays cannot be empty. Value: `"+p+"`.");h[N]=p.length-1,s+=h[N],t+=1/h[N],E[N]=ufr(p),o+=h[N]*E[N],q+=h[N]*lw(E[N])}if(o/=s,f.alpha===void 0?a=.05:a=f.alpha,a<0||a>1)throw new RangeError("invalid argument. Option `alpha` must be a number in the range 0 to 1. Value: `"+a+"`.");return c=s*lw(o)-q,c/=1+(t-1/s)/(3*(e-1)),g=e-1,l=1-nfr(c,g),m={},pt(m,"rejected",l<=a),pt(m,"alpha",a),pt(m,"pValue",l),pt(m,"statistic",c),pt(m,"df",g),pt(m,"method","Bartlett's test of equal variances"),pt(m,"print",ofr),m}cw.exports=vfr});var mw=u(($Mr,gw)=>{"use strict";var ffr=pw();gw.exports=ffr});var qw=u((QMr,yw)=>{"use strict";function lfr(r){var e,t,i,n,a,s,o,v,f,l,c;if(v=r.length,t=[],v===0)return t;if(n=r[0],f=n.length,v===1){for(l=0;l<f;l++)t.push(n[l]);return t}for(e=[f],l=1;l<v;l++)e.push(r[l].length),e[l]>f&&(f=e[l]);for(l=0;l<f;l++)t.push(0);for(l=f-1;l>=0;){for(a=e[0]-f+l,a>=0?i=n[a]:i=1,c=1;c<v;c++){if(s=e[c]-f+l,s>=0?o=r[c][s]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[l]=i,l-=1}return t}yw.exports=lfr});var dw=u((KMr,hw)=>{"use strict";var cfr=qw();hw.exports=cfr});var Qn=u((rxr,ww)=>{"use strict";function pfr(r){var e,t,i,n,a,s;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)e.push(n[s]);return e}ww.exports=pfr});var Ew=u((exr,bw)=>{"use strict";var gfr=x().isPrimitive,mfr=k().isPrimitive,yfr=nr().isPrimitive,qfr=vr(),hfr=dw(),dfr=T(),wfr=Qn(),bfr={number:gfr,string:mfr,boolean:yfr};function Efr(r,e,t){var i,n,a,s,o,v,f,l,c,p;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],n=[],p=0;p<r.length;p++)if(c=r[p],o=e[p],l=bfr[o],l(c))n.push([c]),a.push([1,1]);else if(qfr(c))n.push(wfr(c)),a.push([c.length,c[0].length]);else throw new TypeError(dfr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[p],o,o,String(c)));if(s=hfr(a),s===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");for(i=[],p=0;p<a.length;p++)f=a[p],v=[],f[0]===1?v.push(0):v.push(f[1]),f[1]===1?v.push(0):v.push(1),i.push(v);return[n,s,i]}bw.exports=Efr});var Aw=u((txr,Nw)=>{"use strict";var lo=b(),Nfr=Ie();function Afr(r,e,t,i,n){var a,s,o,v,f;if(r<=0)return i;if(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,a=e[s],i[o]=a,o+=n,f=1,lo(a)===!1)for(f;f<r;f++){if(s+=t,v=e[s],lo(v)){a=v;break}(v>a||v===a&&Nfr(v))&&(a=v),i[o]=a,o+=n}if(lo(a))for(f;f<r;f++)i[o]=a,o+=n;return i}Nw.exports=Afr});var Sw=u((ixr,Ow)=>{"use strict";var co=b(),Ofr=Ie();function Sfr(r,e,t,i,n,a,s){var o,v,f,l,c;if(r<=0)return n;if(v=i,f=s,o=e[v],n[f]=o,f+=a,c=1,co(o)===!1)for(c;c<r;c++){if(v+=t,l=e[v],co(l)){o=l;break}(l>o||l===o&&Ofr(l))&&(o=l),n[f]=o,f+=a}if(co(o))for(c;c<r;c++)n[f]=o,f+=a;return n}Ow.exports=Sfr});var Iw=u((nxr,Lw)=>{"use strict";var Tfr=w(),Tw=Aw(),Lfr=Sw();Tfr(Tw,"ndarray",Lfr);Lw.exports=Tw});var _w=u((axr,Pw)=>{"use strict";var Ifr=Iw();Pw.exports=Ifr});var Mw=u((uxr,Fw)=>{"use strict";var Rw=ms();function Pfr(r,e,t){var i,n;if(e===1)return Rw(t,r);for(i=[],n=0;n<r;n++)i.push(Rw(t,e));return i}Fw.exports=Pfr});var Bw=u((sxr,xw)=>{"use strict";function _fr(r,e,t){var i,n;for(i=[],n=0;n<r;n++)i.push(e.call(t,n));return i}xw.exports=_fr});var jw=u((oxr,Cw)=>{"use strict";var Rfr=Bw();Cw.exports=Rfr});var Uw=u((vxr,Gw)=>{"use strict";var Vw=jw();function Ffr(r,e,t){var i,n;if(e===1)return Vw(r,t);for(i=[],n=0;n<r;n++)i.push(Vw(e,t));return i}Gw.exports=Ffr});var po=u((fxr,Ww)=>{"use strict";var Mfr=x().isPrimitive;function xfr(r){return Mfr(r)&&r>0}Ww.exports=xfr});var go=u((lxr,Hw)=>{"use strict";var Bfr=x().isObject;function Cfr(r){return Bfr(r)&&r.valueOf()>0}Hw.exports=Cfr});var Dw=u((cxr,kw)=>{"use strict";var jfr=po(),Vfr=go();function Gfr(r){return jfr(r)||Vfr(r)}kw.exports=Gfr});var G=u((pxr,Jw)=>{"use strict";var Xw=w(),mo=Dw(),Ufr=po(),Wfr=go();Xw(mo,"isPrimitive",Ufr);Xw(mo,"isObject",Wfr);Jw.exports=mo});var Yw=u((gxr,zw)=>{"use strict";var Hfr=L();function kfr(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&Hfr(r.next)}zw.exports=kfr});var $w=u((mxr,Zw)=>{"use strict";var Dfr=Yw();Zw.exports=Dfr});var Kw=u((yxr,Qw)=>{"use strict";function Xfr(r,e){return r[e]}Qw.exports=Xfr});var eb=u((qxr,rb)=>{"use strict";function Jfr(r,e){return r.get(e)}rb.exports=Jfr});var ib=u((hxr,tb)=>{"use strict";function zfr(r,e,t){r[e]=t}tb.exports=zfr});var ab=u((dxr,nb)=>{"use strict";function Yfr(r,e,t){r.set(t,e)}nb.exports=Yfr});var sb=u((wxr,ub)=>{"use strict";var Zfr=Kw(),$fr=eb(),Qfr=ib(),Kfr=ab();function rlr(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?$fr:Zfr,setter:e?Kfr:Qfr}}ub.exports=rlr});var gt=u((bxr,ob)=>{"use strict";var elr=sb();ob.exports=elr});var lb=u((Exr,fb)=>{"use strict";var vb=L(),tlr=_r(),ilr=$w(),nlr=gt();function alr(){var r,e,t,i,n,a,s,o;if(r=arguments[0],arguments.length>1)if(tlr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!vb(t))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+t+"`.");e=arguments[3]}}else{if(t=arguments[1],!vb(t))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+t+"`.");e=arguments[2]}if(!ilr(r))throw new TypeError("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(s=-1,i===void 0){if(i=[],t){for(;s+=1,o=r.next(),!o.done;)i.push(t.call(e,o.value,s));return i}for(;o=r.next(),!o.done;)i.push(o.value);return i}if(n=i.length,a=nlr(i).setter,t){for(;s<n-1&&(s+=1,o=r.next(),!o.done);)a(i,s,t.call(e,o.value,s));return i}for(;s<n-1&&(s+=1,o=r.next(),!o.done);)a(i,s,o.value);return i}fb.exports=alr});var pb=u((Nxr,cb)=>{"use strict";var ulr=lb();cb.exports=ulr});var mb=u((Axr,gb)=>{"use strict";var slr=A();function olr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"&&slr(Symbol,"iterator")&&typeof Symbol.iterator=="symbol"}gb.exports=olr});var Kn=u((Oxr,yb)=>{"use strict";var vlr=mb();yb.exports=vlr});var hb=u((Sxr,qb)=>{"use strict";var flr=Kn(),llr=flr()?Symbol.iterator:null;qb.exports=llr});var ra=u((Txr,db)=>{"use strict";var clr=hb();db.exports=clr});var bb=u((Lxr,wb)=>{"use strict";function plr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}wb.exports=plr});var Nb=u((Ixr,Eb)=>{"use strict";function glr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}Eb.exports=glr});var Sb=u((Pxr,Ob)=>{"use strict";var mlr=lr(),Ab=ct(),ylr=bb(),qlr=Nb(),hlr=.7853981633974483,dlr=3061616997868383e-32,wlr=.3333333333333341,blr=2147483647;function Elr(r,e,t){var i,n,a,s,o,v,f,l,c;return i=mlr(r),n=i&blr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),c=hlr-r,l=dlr-e,r=c+l,e=0),c=r*r,l=c*c,s=ylr(l),f=c*qlr(l),o=c*r,s=e+c*(o*(s+f)+e),s+=wlr*o,l=r+s,n>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(l*l/(l+f)-s)))):t===1?l:(c=l,Ab(c,0),f=s-(c-r),a=-1/l,v=a,Ab(v,0),o=1+v*c,v+a*(o+v*f))}Ob.exports=Elr});var Lb=u((_xr,Tb)=>{"use strict";var Nlr=Sb();Tb.exports=Nlr});var _b=u((Rxr,Pb)=>{"use strict";var Alr=lr(),Ib=Lb(),Olr=Fn(),yo=[0,0],Slr=2147483647,Tlr=1072243195,Llr=2146435072,Ilr=1044381696;function Plr(r){var e,t;return e=Alr(r),e&=Slr,e<=Tlr?e<Ilr?r:Ib(r,0,1):e>=Llr?NaN:(t=Olr(r,yo),Ib(yo[0],yo[1],1-((t&1)<<1)))}Pb.exports=Plr});var qo=u((Fxr,Rb)=>{"use strict";var _lr=_b();Rb.exports=_lr});var ea=u((Mxr,Fb)=>{"use strict";var Rlr=1.5707963267948966;Fb.exports=Rlr});var ta=u((xxr,Mb)=>{"use strict";var Flr=.7853981633974483;Mb.exports=Flr});var Bb=u((Bxr,xb)=>{"use strict";function Mlr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}xb.exports=Mlr});var jb=u((Cxr,Cb)=>{"use strict";function xlr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}Cb.exports=xlr});var Ub=u((jxr,Gb)=>{"use strict";var Blr=b(),Clr=j(),ho=ea(),jlr=ta(),Vlr=Z(),Glr=Bb(),Ulr=jb(),Vb=6123233995736766e-32,Wlr=2.414213562373095;function Hlr(r){var e,t,i,n;return Blr(r)||r===0?r:r===Clr?ho:r===Vlr?-ho:(r<0&&(t=!0,r=-r),e=0,r>Wlr?(i=ho,e=1,r=-(1/r)):r<=.66?i=0:(i=jlr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*Glr(n)/Ulr(n),n=r*n+r,e===2?n+=.5*Vb:e===1&&(n+=Vb),i+=n,t?-i:i)}Gb.exports=Hlr});var Hb=u((Vxr,Wb)=>{"use strict";var klr=Ub();Wb.exports=klr});var wo=u((Gxr,kb)=>{"use strict";var Dlr=x().isPrimitive;function Xlr(r){return Dlr(r)&&r>=0}kb.exports=Xlr});var bo=u((Uxr,Db)=>{"use strict";var Jlr=x().isObject;function zlr(r){return Jlr(r)&&r.valueOf()>=0}Db.exports=zlr});var Jb=u((Wxr,Xb)=>{"use strict";var Ylr=wo(),Zlr=bo();function $lr(r){return Ylr(r)||Zlr(r)}Xb.exports=$lr});var No=u((Hxr,Yb)=>{"use strict";var zb=w(),Eo=Jb(),Qlr=wo(),Klr=bo();zb(Eo,"isPrimitive",Qlr);zb(Eo,"isObject",Klr);Yb.exports=Eo});var $b=u((kxr,Zb)=>{"use strict";var r2r=S(),ia=A(),e2r=Pr().isPrimitive,t2r=zr().isPrimitive,i2r=Ne().isPrimitive,n2r=No().isPrimitive;function a2r(r,e){return r2r(e)?ia(e,"period")&&(r.period=e.period,!t2r(e.period))?new TypeError("invalid option. `period` option must be an positive integer. Option: `"+e.period+"`."):ia(e,"amplitude")&&(r.amplitude=e.amplitude,!n2r(e.amplitude))?new TypeError("invalid option. `amplitude` option must be a nonnegative number. Option: `"+e.amplitude+"`."):ia(e,"offset")&&(r.offset=e.offset,!e2r(e.offset))?new TypeError("invalid option. `offset` option must be an integer. Option: `"+e.offset+"`."):ia(e,"iter")&&(r.iter=e.iter,!i2r(e.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}Zb.exports=a2r});var eE=u((Dxr,rE)=>{"use strict";var Ao=w(),Qb=ra(),u2r=qo(),s2r=Hb(),o2r=ea(),v2r=Vr(),f2r=$b();function Kb(r){var e,t,i,n,a,s,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=f2r(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,s=v2r/e.period,o=e.amplitude/o2r,v=0,t={},Ao(t,"next",f),Ao(t,"return",l),Qb&&Ao(t,Qb,c),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*s2r(u2r(s*a)),done:!1})}function l(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function c(){return Kb(e)}}rE.exports=Kb});var iE=u((Xxr,tE)=>{"use strict";var l2r=eE();tE.exports=l2r});var aE=u((Jxr,nE)=>{"use strict";function c2r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}nE.exports=c2r});var sE=u((zxr,uE)=>{"use strict";function p2r(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}uE.exports=p2r});var lE=u((Yxr,fE)=>{"use strict";var oE=x().isPrimitive,vE=be(),ji=w(),g2r=aE(),m2r=sE();function mt(r,e){if(!(this instanceof mt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!oE(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!oE(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return vE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),vE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}ji(mt,"BYTES_PER_ELEMENT",8);ji(mt.prototype,"BYTES_PER_ELEMENT",8);ji(mt.prototype,"byteLength",16);ji(mt.prototype,"toString",g2r);ji(mt.prototype,"toJSON",m2r);fE.exports=mt});var Vt=u((Zxr,cE)=>{"use strict";var y2r=lE();cE.exports=y2r});var gE=u(($xr,pE)=>{"use strict";var q2r=typeof Math.fround=="function"?Math.fround:null;pE.exports=q2r});var qE=u((Qxr,yE)=>{"use strict";var h2r=kr(),mE=new h2r(1);function d2r(r){return mE[0]=r,mE[0]}yE.exports=d2r});var wE=u((Kxr,dE)=>{"use strict";var hE=gE(),w2r=qE(),Oo;typeof hE=="function"?Oo=hE:Oo=w2r;dE.exports=Oo});var EE=u((rBr,bE)=>{"use strict";function b2r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}bE.exports=b2r});var AE=u((eBr,NE)=>{"use strict";function E2r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}NE.exports=E2r});var IE=u((tBr,LE)=>{"use strict";var OE=x().isPrimitive,SE=be(),Vi=w(),TE=wE(),N2r=EE(),A2r=AE();function yt(r,e){if(!(this instanceof yt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!OE(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!OE(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return SE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:TE(r)}),SE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:TE(e)}),this}Vi(yt,"BYTES_PER_ELEMENT",4);Vi(yt.prototype,"BYTES_PER_ELEMENT",4);Vi(yt.prototype,"byteLength",8);Vi(yt.prototype,"toString",N2r);Vi(yt.prototype,"toJSON",A2r);LE.exports=yt});var Gt=u((iBr,PE)=>{"use strict";var O2r=IE();PE.exports=O2r});var RE=u((nBr,_E)=>{"use strict";var S2r=Vt(),T2r=Gt();function L2r(r){return r instanceof S2r||r instanceof T2r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}_E.exports=L2r});var Mr=u((aBr,FE)=>{"use strict";var I2r=RE();FE.exports=I2r});var xE=u((uBr,ME)=>{"use strict";var P2r={Complex64:"complex64",Complex128:"complex128"};ME.exports=P2r});var CE=u((sBr,BE)=>{"use strict";var _2r=Gt(),R2r=Vt(),F2r=[_2r,R2r];BE.exports=F2r});var VE=u((oBr,jE)=>{"use strict";var M2r=["complex64","complex128"];jE.exports=M2r});var WE=u((vBr,UE)=>{"use strict";var x2r=Ee(),B2r=xE(),C2r=CE(),GE=VE(),j2r=GE.length;function V2r(r){var e;for(e=0;e<j2r;e++)if(r instanceof C2r[e])return GE[e];return B2r[x2r(r)]||null}UE.exports=V2r});var So=u((fBr,HE)=>{"use strict";var G2r=WE();HE.exports=G2r});var DE=u((lBr,kE)=>{"use strict";var U2r=4294967295;kE.exports=U2r});var JE=u((cBr,XE)=>{"use strict";var W2r=Nr(),H2r=DE();function k2r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&W2r(r.length)&&r.length>=0&&r.length<=H2r}XE.exports=k2r});var qt=u((pBr,zE)=>{"use strict";var D2r=JE();zE.exports=D2r});var ZE=u((gBr,YE)=>{"use strict";var X2r=Y(),J2r=typeof ArrayBuffer=="function";function z2r(r){return J2r&&r instanceof ArrayBuffer||X2r(r)==="[object ArrayBuffer]"}YE.exports=z2r});var To=u((mBr,$E)=>{"use strict";var Y2r=ZE();$E.exports=Y2r});var KE=u((yBr,QE)=>{"use strict";var Z2r=be();function $2r(r,e,t){Z2r(r,e,{configurable:!1,enumerable:!1,get:t})}QE.exports=$2r});var P=u((qBr,rN)=>{"use strict";var Q2r=KE();rN.exports=Q2r});var tN=u((hBr,eN)=>{"use strict";function K2r(r){return r.re}eN.exports=K2r});var _e=u((dBr,iN)=>{"use strict";var rcr=tN();iN.exports=rcr});var aN=u((wBr,nN)=>{"use strict";function ecr(r){return r.im}nN.exports=ecr});var Re=u((bBr,uN)=>{"use strict";var tcr=aN();uN.exports=tcr});var oN=u((EBr,sN)=>{"use strict";var icr=kr();function ncr(r,e){return new icr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}sN.exports=ncr});var Ut=u((NBr,vN)=>{"use strict";var acr=oN();vN.exports=acr});var lN=u((ABr,fN)=>{"use strict";var ucr=fr();function scr(r,e){return new ucr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}fN.exports=scr});var Wt=u((OBr,cN)=>{"use strict";var ocr=lN();cN.exports=ocr});var gN=u((SBr,pN)=>{"use strict";var vcr=qt(),fcr=Mr(),lcr=_e(),ccr=Re();function pcr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,vcr(i)&&i.length>=2)e.push(i[0],i[1]);else if(fcr(i))e.push(lcr(i),ccr(i));else return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");return e}pN.exports=pcr});var yN=u((TBr,mN)=>{"use strict";var gcr=qt(),mcr=Mr(),ycr=_e(),qcr=Re();function hcr(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),gcr(a)&&a.length>=2)i.push(a[0],a[1]);else if(mcr(a))i.push(ycr(a),qcr(a));else return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+a+"`.");return i}mN.exports=hcr});var hN=u((LBr,qN)=>{"use strict";var dcr=Mr(),wcr=_e(),bcr=Re();function Ecr(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!dcr(i))return null;r[a]=wcr(i),r[a+1]=bcr(i),a+=2}return r}qN.exports=Ecr});var TN=u((IBr,SN)=>{"use strict";var Gi=Ne().isPrimitive,dN=qt(),Io=_r(),wN=To(),bN=yn(),Ncr=vr(),ht=L(),Ht=Mr(),na=xn(),Lo=Nr(),Acr=Kn(),kt=ra(),pr=w(),sa=P(),Tr=fr(),EN=Vt(),aa=_e(),ua=Re(),Ocr=Ut(),Scr=Wt(),Tcr=gt(),NN=gN(),Lcr=yN(),Icr=hN(),Ar=Tr.BYTES_PER_ELEMENT*2,AN=Acr();function Dt(r){return r instanceof J||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function ON(r){return r===J||r.name==="Complex64Array"}function Pcr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Ar/2}function _cr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Ar}function J(){var r,e,t,i;if(e=arguments.length,!(this instanceof J))return e===0?new J:e===1?new J(arguments[0]):e===2?new J(arguments[0],arguments[1]):new J(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Tr(0);else if(e===1)if(Gi(arguments[0]))t=new Tr(arguments[0]*2);else if(Io(arguments[0]))if(t=arguments[0],i=t.length,i&&Ncr(t)&&Ht(t[0])){if(t=Icr(new Tr(i*2),t),t===null){if(!na(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Tr(arguments[0])}}else{if(Pcr(t))t=Ocr(t,0);else if(_cr(t))t=Scr(t,0);else if(!na(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Tr(t)}else if(wN(arguments[0])){if(t=arguments[0],!Lo(t.byteLength/Ar))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Ar+". Byte length: `"+t.byteLength+"`.");t=new Tr(t)}else if(bN(arguments[0])){if(t=arguments[0],AN===!1)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!ht(t[kt]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(t=t[kt](),!ht(t.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(t=NN(t),t instanceof Error)throw t;t=new Tr(t)}else throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");else{if(t=arguments[0],!wN(t))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(r=arguments[1],!Gi(r))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Lo(r/Ar))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Ar+". Value: `"+r+"`.");if(e===2){if(i=t.byteLength-r,!Lo(i/Ar))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Ar+". View byte length: `"+i+"`.");t=new Tr(t,r)}else{if(i=arguments[2],!Gi(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*Ar>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*Ar+"`.");t=new Tr(t,r,i*2)}}return pr(this,"_buffer",t),pr(this,"_length",t.length/2),this}pr(J,"BYTES_PER_ELEMENT",Ar);pr(J,"name","Complex128Array");pr(J,"from",function(e){var t,i,n,a,s,o,v,f,l,c,p;if(!ht(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ON(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!ht(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");i>2&&(t=arguments[2])}if(Dt(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,e.get(c),c),Ht(l))s[p]=aa(l),s[p+1]=ua(l);else if(dN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(Io(e)){if(n){for(v=e.length,o=Tcr(e),c=0;c<v;c++)if(!Ht(o.getter(e,c))){f=!0;break}if(f){if(!na(v))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+v+"`.");for(a=new this(v/2),s=a._buffer,c=0;c<v;c++)s[c]=n.call(t,o.getter(e,c),c);return a}for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,o.getter(e,c),c),Ht(l))s[p]=aa(l),s[p+1]=ua(l);else if(dN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(bN(e)&&AN&&ht(e[kt])){if(s=e[kt](),!ht(s.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(n?o=Lcr(s,n,t):o=NN(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,c=0;c<v;c++)s[c]=o[c];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")});pr(J,"of",function(){var e,t;if(!ht(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ON(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});sa(J.prototype,"buffer",function(){return this._buffer.buffer});sa(J.prototype,"byteLength",function(){return this._buffer.byteLength});sa(J.prototype,"byteOffset",function(){return this._buffer.byteOffset});pr(J.prototype,"BYTES_PER_ELEMENT",J.BYTES_PER_ELEMENT);pr(J.prototype,"copyWithin",function(e,t){if(!Dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});pr(J.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!Dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},pr(i,"next",v),pr(i,"return",f),kt&&pr(i,kt,l),i;function v(){var c;return s+=1,a||s>=n?{done:!0}:(o+=2,c=new EN(e[o],e[o+1]),{value:[s,c],done:!1})}function f(c){return a=!0,arguments.length?{value:c,done:!0}:{done:!0}}function l(){return t.entries()}});pr(J.prototype,"get",function(e){var t;if(!Dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Gi(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new EN(t[e],t[e+1])});sa(J.prototype,"length",function(){return this._length});pr(J.prototype,"set",function(e){var t,i,n,a,s,o,v,f,l;if(!Dt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Gi(i))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+i+"`.")}else i=0;if(Ht(e)){if(i>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+i+"`.");i*=2,n[i]=aa(e),n[i+1]=ua(e);return}if(Dt(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,l=n.byteOffset+i*Ar,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Tr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(Io(e)){for(o=e.length,f=0;f<o;f++)if(!Ht(e[f])){s=!0;break}if(s){if(!na(o))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+o+"`.");if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,l=n.byteOffset+i*Ar,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Tr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=aa(v),n[i+1]=ua(v),i+=2;return}throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.")});SN.exports=J});var Ui=u((PBr,LN)=>{"use strict";var Rcr=TN();LN.exports=Rcr});var PN=u((_Br,IN)=>{"use strict";function Fcr(r){return r.re}IN.exports=Fcr});var Fe=u((RBr,_N)=>{"use strict";var Mcr=PN();_N.exports=Mcr});var FN=u((FBr,RN)=>{"use strict";function xcr(r){return r.im}RN.exports=xcr});var Me=u((MBr,MN)=>{"use strict";var Bcr=FN();MN.exports=Bcr});var BN=u((xBr,xN)=>{"use strict";var Ccr=qt(),jcr=Mr(),Vcr=Fe(),Gcr=Me();function Ucr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,Ccr(i)&&i.length>=2)e.push(i[0],i[1]);else if(jcr(i))e.push(Vcr(i),Gcr(i));else return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");return e}xN.exports=Ucr});var jN=u((BBr,CN)=>{"use strict";var Wcr=qt(),Hcr=Mr(),kcr=Fe(),Dcr=Me();function Xcr(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),Wcr(a)&&a.length>=2)i.push(a[0],a[1]);else if(Hcr(a))i.push(kcr(a),Dcr(a));else return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+a+"`.");return i}CN.exports=Xcr});var GN=u((CBr,VN)=>{"use strict";var Jcr=Mr(),zcr=Fe(),Ycr=Me();function Zcr(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!Jcr(i))return null;r[a]=zcr(i),r[a+1]=Ycr(i),a+=2}return r}VN.exports=Zcr});var YN=u((jBr,zN)=>{"use strict";var Wi=Ne().isPrimitive,UN=qt(),_o=_r(),WN=To(),HN=yn(),$cr=vr(),dt=L(),Xt=Mr(),oa=xn(),Po=Nr(),Qcr=Kn(),Jt=ra(),gr=w(),la=P(),Lr=kr(),kN=Gt(),va=Fe(),fa=Me(),Kcr=Ut(),rpr=Wt(),epr=gt(),DN=BN(),tpr=jN(),ipr=GN(),Or=Lr.BYTES_PER_ELEMENT*2,XN=Qcr();function zt(r){return r instanceof z||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function JN(r){return r===z||r.name==="Complex128Array"}function npr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Or}function apr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Or*2}function z(){var r,e,t,i;if(e=arguments.length,!(this instanceof z))return e===0?new z:e===1?new z(arguments[0]):e===2?new z(arguments[0],arguments[1]):new z(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Lr(0);else if(e===1)if(Wi(arguments[0]))t=new Lr(arguments[0]*2);else if(_o(arguments[0]))if(t=arguments[0],i=t.length,i&&$cr(t)&&Xt(t[0])){if(t=ipr(new Lr(i*2),t),t===null){if(!oa(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Lr(arguments[0])}}else{if(npr(t))t=Kcr(t,0);else if(apr(t))t=rpr(t,0);else if(!oa(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Lr(t)}else if(WN(arguments[0])){if(t=arguments[0],!Po(t.byteLength/Or))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Or+". Byte length: `"+t.byteLength+"`.");t=new Lr(t)}else if(HN(arguments[0])){if(t=arguments[0],XN===!1)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!dt(t[Jt]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(t=t[Jt](),!dt(t.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(t=DN(t),t instanceof Error)throw t;t=new Lr(t)}else throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");else{if(t=arguments[0],!WN(t))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(r=arguments[1],!Wi(r))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Po(r/Or))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Or+". Value: `"+r+"`.");if(e===2){if(i=t.byteLength-r,!Po(i/Or))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Or+". View byte length: `"+i+"`.");t=new Lr(t,r)}else{if(i=arguments[2],!Wi(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*Or>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*Or+"`.");t=new Lr(t,r,i*2)}}return gr(this,"_buffer",t),gr(this,"_length",t.length/2),this}gr(z,"BYTES_PER_ELEMENT",Or);gr(z,"name","Complex64Array");gr(z,"from",function(e){var t,i,n,a,s,o,v,f,l,c,p;if(!dt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!JN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!dt(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");i>2&&(t=arguments[2])}if(zt(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,e.get(c),c),Xt(l))s[p]=va(l),s[p+1]=fa(l);else if(UN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(_o(e)){if(n){for(v=e.length,o=epr(e),c=0;c<v;c++)if(!Xt(o.getter(e,c))){f=!0;break}if(f){if(!oa(v))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+v+"`.");for(a=new this(v/2),s=a._buffer,c=0;c<v;c++)s[c]=n.call(t,o.getter(e,c),c);return a}for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,o.getter(e,c),c),Xt(l))s[p]=va(l),s[p+1]=fa(l);else if(UN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(HN(e)&&XN&&dt(e[Jt])){if(s=e[Jt](),!dt(s.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(n?o=tpr(s,n,t):o=DN(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,c=0;c<v;c++)s[c]=o[c];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")});gr(z,"of",function(){var e,t;if(!dt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!JN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});la(z.prototype,"buffer",function(){return this._buffer.buffer});la(z.prototype,"byteLength",function(){return this._buffer.byteLength});la(z.prototype,"byteOffset",function(){return this._buffer.byteOffset});gr(z.prototype,"BYTES_PER_ELEMENT",z.BYTES_PER_ELEMENT);gr(z.prototype,"copyWithin",function(e,t){if(!zt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});gr(z.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!zt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},gr(i,"next",v),gr(i,"return",f),Jt&&gr(i,Jt,l),i;function v(){var c;return s+=1,a||s>=n?{done:!0}:(o+=2,c=new kN(e[o],e[o+1]),{value:[s,c],done:!1})}function f(c){return a=!0,arguments.length?{value:c,done:!0}:{done:!0}}function l(){return t.entries()}});gr(z.prototype,"get",function(e){var t;if(!zt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Wi(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new kN(t[e],t[e+1])});la(z.prototype,"length",function(){return this._length});gr(z.prototype,"set",function(e){var t,i,n,a,s,o,v,f,l;if(!zt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Wi(i))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+i+"`.")}else i=0;if(Xt(e)){if(i>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+i+"`.");i*=2,n[i]=va(e),n[i+1]=fa(e);return}if(zt(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,l=n.byteOffset+i*Or,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Lr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(_o(e)){for(o=e.length,f=0;f<o;f++)if(!Xt(e[f])){s=!0;break}if(s){if(!oa(o))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+o+"`.");if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,l=n.byteOffset+i*Or,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Lr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=va(v),n[i+1]=fa(v),i+=2;return}throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.")});zN.exports=z});var Hi=u((VBr,ZN)=>{"use strict";var upr=YN();ZN.exports=upr});var QN=u((GBr,$N)=>{"use strict";var spr=fr(),opr=kr(),vpr=Ui(),fpr=Hi(),lpr={float64:spr,float32:opr,complex128:vpr,complex64:fpr};$N.exports=lpr});var rA=u((UBr,KN)=>{"use strict";var cpr=QN();function ppr(r){return cpr[r]||null}KN.exports=ppr});var tA=u((WBr,eA)=>{"use strict";var gpr=rA();eA.exports=gpr});var nA=u((HBr,iA)=>{"use strict";function mpr(r,e,t,i){var n,a,s,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,s=(e-r)/a,o=1;o<a;o++)n.push(r+s*o);return i&&n.push(e),n}iA.exports=mpr});var fA=u((kBr,vA)=>{"use strict";var ypr=Gt(),qpr=Vt(),aA=_e(),uA=Re(),sA=Fe(),oA=Me();function hpr(r,e,t,i,n,a){var s,o,v,f,l,c,p,y,q,m,g,h,E;if(n===0)return[];if(o=0,r==="float64"?(f=e,c=0):r==="complex64"?(o+=1,f=sA(e),c=oA(e)):(f=aA(e),c=uA(e)),t==="float64"?(l=i,p=0):t==="complex64"?(o+=1,l=sA(i),p=oA(i)):(l=aA(i),p=uA(i)),o===2?s=ypr:s=qpr,n===1)return a?[new s(l,p)]:[new s(f,c)];for(v=[new s(f,c)],a?h=n-1:h=n,m=(l-f)/h,g=(p-c)/h,E=1;E<h;E++)y=f+m*E,q=c+g*E,v.push(new s(y,q));return a&&v.push(new s(l,p)),v}vA.exports=hpr});var Ro=u((DBr,lA)=>{"use strict";function dpr(r,e,t,i,n){var a,s,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,s=(t-e)/a,o=1;o<a;o++)r[o]=e+s*o;return n&&(r[a]=t),r}lA.exports=dpr});var Fo=u((XBr,yA)=>{"use strict";var cA=_e(),pA=Re(),gA=Fe(),mA=Me();function wpr(r,e,t,i,n,a,s){var o,v,f,l,c,p,y,q,m;if(a===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=gA(t),f=mA(t)):(o=cA(t),f=pA(t)),i==="float64"?(v=n,l=0):i==="complex64"?(v=gA(n),l=mA(n)):(v=cA(n),l=pA(n)),a===1)return s?(r[0]=v,r[1]=l):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,s?y=a-1:y=a,c=(v-o)/y,p=(l-f)/y,m=2,q=1;q<y;q++)r[m]=o+c*q,r[m+1]=f+p*q,m+=2;return s&&(r[m]=v,r[m+1]=l),r}yA.exports=wpr});var Mo=u((JBr,hA)=>{"use strict";var bpr=S(),qA=A(),Epr=k().isPrimitive,Npr=nr().isPrimitive;function Apr(r,e){return bpr(e)?qA(e,"dtype")&&(r.dtype=e.dtype,!Epr(r.dtype))?new TypeError("invalid option. `dtype` option must be a string. Option: `"+r.dtype+"`."):qA(e,"endpoint")&&(r.endpoint=e.endpoint,!Npr(r.endpoint))?new TypeError("invalid option. `endpoint` option must be a boolean. Option: `"+r.endpoint+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}hA.exports=Apr});var xo=u((zBr,Opr)=>{Opr.exports={endpoint:!0}});var OA=u((YBr,AA)=>{"use strict";var dA=Mr(),wA=x().isPrimitive,Spr=Ne().isPrimitive,bA=b(),EA=So(),Tpr=tA(),Lpr=Ut(),Ipr=Wt(),Ppr=nA(),_pr=fA(),Rpr=Ro(),NA=Fo(),Fpr=Mo(),Mpr=xo();function xpr(r,e,t){var i,n,a,s,o,v,f;if(typeof r=="object"){if(o=EA(r),o===null){if(!dA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");o="complex128"}f=!0}else{if(!wA(r)||bA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");o="float64"}if(typeof e=="object"){if(v=EA(e),v===null){if(!dA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");v="complex128"}f=!0}else{if(!wA(e)||bA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");v="float64"}if(!Spr(t))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+t+"`.");if(i={endpoint:Mpr.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=Fpr(i,arguments[3]),a))throw a;if(i.dtype==="generic")return f?_pr(o,r,v,e,t,i.endpoint):Ppr(r,e,t,i.endpoint);if(n=Tpr(i.dtype),n===null)throw new TypeError('invalid argument. `dtype` option must be a real or complex floating-point data type or "generic". Option: `'+i.dtype+"`.");if(s=new n(t),i.dtype==="complex64")return NA(Lpr(s,0),o,r,v,e,t,i.endpoint),s;if(i.dtype==="complex128")return NA(Ipr(s,0),o,r,v,e,t,i.endpoint),s;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return Rpr(s,r,e,t,i.endpoint)}AA.exports=xpr});var TA=u((ZBr,SA)=>{"use strict";var Bpr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};SA.exports=Bpr});var IA=u(($Br,LA)=>{"use strict";var Cpr=fr(),jpr=kr(),Vpr=sr(),Gpr=st(),Upr=Pt(),Wpr=Ni(),Hpr=It(),kpr=Ei(),Dpr=bi(),Xpr=Hi(),Jpr=Ui(),zpr=[Cpr,jpr,Gpr,Vpr,Wpr,Upr,Dpr,Hpr,kpr,Xpr,Jpr];LA.exports=zpr});var _A=u((QBr,PA)=>{"use strict";var Ypr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];PA.exports=Ypr});var MA=u((KBr,FA)=>{"use strict";var Zpr=tt(),$pr=vr(),Qpr=Ee(),Kpr=TA(),r3r=IA(),RA=_A(),e3r=RA.length;function t3r(r){var e;if($pr(r))return"generic";if(Zpr(r))return null;for(e=0;e<e3r;e++)if(r instanceof r3r[e])return RA[e];return Kpr[Qpr(r)]||null}FA.exports=t3r});var BA=u((rCr,xA)=>{"use strict";var i3r=MA();xA.exports=i3r});var WA=u((eCr,UA)=>{"use strict";var n3r=Gt(),a3r=Vt(),CA=_e(),jA=Re(),VA=Fe(),GA=Me();function u3r(r,e,t,i,n,a,s){var o,v,f,l,c,p,y,q,m,g,h,E,N,C;if(a===0)return r;if(v=0,e==="float64"?(f=t,c=0):e==="complex64"?(v+=1,f=VA(t),c=GA(t)):(f=CA(t),c=jA(t)),i==="float64"?(l=n,p=0):i==="complex64"?(v+=1,l=VA(n),p=GA(n)):(l=CA(n),p=jA(n)),v===2?o=n3r:o=a3r,q=r.data,y=r.setter,a===1)return s?y(q,0,new o(l,p)):y(q,0,new o(f,c)),r;for(y(q,0,new o(f,c)),s?N=a-1:N=a,h=(l-f)/N,E=(p-c)/N,C=1;C<N;C++)m=f+h*C,g=c+E*C,y(q,C,new o(m,g));return s&&y(q,N,new o(l,p)),r}UA.exports=u3r});var kA=u((tCr,HA)=>{"use strict";function s3r(r,e,t,i,n){var a,s,o,v,f;if(i===0)return r;if(a=r.data,s=r.setter,i===1)return n?s(a,0,t):s(a,0,e),r;for(s(a,0,e),n?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)s(a,f,e+v*f);return n&&s(a,o,t),r}HA.exports=s3r});var QA=u((iCr,$A)=>{"use strict";var DA=Mr(),XA=x().isPrimitive,o3r=_r(),JA=b(),zA=So(),v3r=BA(),f3r=Ut(),l3r=Wt(),YA=gt(),c3r=WA(),p3r=kA(),ZA=Fo(),g3r=Ro(),m3r=Mo(),y3r=xo();function q3r(r,e,t){var i,n,a,s,o,v,f;if(typeof r=="object"){if(a=zA(r),a===null){if(!DA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");a="complex128"}o=!0}else{if(!XA(r)||JA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");a="float64"}if(typeof e=="object"){if(s=zA(e),s===null){if(!DA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");s="complex128"}o=!0}else{if(!XA(e)||JA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");s="float64"}if(!o3r(t))throw new TypeError("invalid argument. Third argument must be an array-like object. Value: `"+t+"`.");if(i={endpoint:y3r.endpoint},arguments.length>3&&(n=m3r(i,arguments[3]),n))throw n;if(v=v3r(t),v===null&&(v="generic"),v==="complex64")return ZA(f3r(t,0),a,r,s,e,t.length,i.endpoint),t;if(v==="complex128")return ZA(l3r(t,0),a,r,s,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=YA(t),c3r(f,a,r,s,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=YA(t),f.accessors?(p3r(f,r,e,t.length,i.endpoint),t):(g3r(t,r,e,t.length,i.endpoint),t)}$A.exports=q3r});var eO=u((nCr,rO)=>{"use strict";var h3r=w(),KA=OA(),d3r=QA();h3r(KA,"assign",d3r);rO.exports=KA});var iO=u((aCr,tO)=>{"use strict";var w3r=b(),b3r=Ie();function E3r(r,e,t){var i,n,a,s;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],s=1;s<r;s++){if(n+=t,a=e[n],w3r(a))return a;(a>i||a===i&&b3r(a))&&(i=a)}return i}tO.exports=E3r});var aO=u((uCr,nO)=>{"use strict";var N3r=b(),A3r=Ie();function O3r(r,e,t,i){var n,a,s,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,s=e[a],N3r(s))return s;(s>n||s===n&&A3r(s))&&(n=s)}return n}nO.exports=O3r});var oO=u((sCr,sO)=>{"use strict";var S3r=w(),uO=iO(),T3r=aO();S3r(uO,"ndarray",T3r);sO.exports=uO});var fO=u((oCr,vO)=>{"use strict";var L3r=oO();vO.exports=L3r});var pO=u((vCr,cO)=>{"use strict";var lO=b(),I3r=Ie();function P3r(r,e,t,i,n){var a,s,o,v,f;if(r<=0)return NaN;for(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,f=0;f<r&&i[o]!==0;f++)s+=t,o+=n;if(f===r)return NaN;if(a=e[s],lO(a))return a;for(f+=1,f;f<r;f++)if(s+=t,o+=n,!i[o]){if(v=e[s],lO(v))return v;(v>a||v===a&&I3r(v))&&(a=v)}return a}cO.exports=P3r});var yO=u((fCr,mO)=>{"use strict";var gO=b(),_3r=Ie();function R3r(r,e,t,i,n,a,s){var o,v,f,l,c;if(r<=0)return NaN;for(v=i,f=s,c=0;c<r&&n[f]!==0;c++)v+=t,f+=a;if(c===r)return NaN;if(o=e[v],gO(o))return o;for(c+=1,c;c<r;c++)if(v+=t,f+=a,!n[f]){if(l=e[v],gO(l))return l;(l>o||l===o&&_3r(l))&&(o=l)}return o}mO.exports=R3r});var dO=u((lCr,hO)=>{"use strict";var F3r=w(),qO=pO(),M3r=yO();F3r(qO,"ndarray",M3r);hO.exports=qO});var bO=u((cCr,wO)=>{"use strict";var x3r=nr().isPrimitive,B3r=T();function C3r(r,e){if(!x3r(r))throw new TypeError(B3r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}wO.exports=C3r});var NO=u((pCr,EO)=>{"use strict";function j3r(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}EO.exports=j3r});var OO=u((gCr,AO)=>{"use strict";var V3r=T(),G3r=NO();function U3r(r,e,t){if(!G3r(r,e))throw new TypeError(V3r("invalid argument. %s must be broadcast compatible.",t))}AO.exports=U3r});var TO=u((mCr,SO)=>{"use strict";function W3r(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}SO.exports=W3r});var IO=u((yCr,LO)=>{"use strict";var H3r=T(),k3r=TO();function D3r(r,e,t,i){if(!k3r(r,e))throw new TypeError(H3r("invalid argument. %s must be broadcast compatible with %s.",t,i))}LO.exports=D3r});var Bo=u((qCr,PO)=>{"use strict";var X3r=T();function J3r(r,e){if(r===void 0)throw new Error(X3r("invalid invocation. Must provide %s.",e))}PO.exports=J3r});var RO=u((hCr,_O)=>{"use strict";var z3r=T();function Y3r(r,e,t,i){if(!(r>e))throw new TypeError(z3r("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}_O.exports=Y3r});var MO=u((dCr,FO)=>{"use strict";var Z3r=T();function $3r(r,e,t,i){if(!(r>=e))throw new TypeError(Z3r("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}FO.exports=$3r});var BO=u((wCr,xO)=>{"use strict";var Q3r=Pr().isPrimitive,K3r=T();function r6r(r,e){if(!Q3r(r))throw new TypeError(K3r("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}xO.exports=r6r});var jO=u((bCr,CO)=>{"use strict";var e6r=T();function t6r(r,e,t,i){if(!(r<e))throw new TypeError(e6r("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}CO.exports=t6r});var GO=u((ECr,VO)=>{"use strict";var i6r=T();function n6r(r,e,t,i){if(!(r<=e))throw new TypeError(i6r("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}VO.exports=n6r});var WO=u((NCr,UO)=>{"use strict";var a6r=Ne().isPrimitive,u6r=T();function s6r(r,e){if(!a6r(r))throw new TypeError(u6r("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}UO.exports=s6r});var kO=u((ACr,HO)=>{"use strict";var o6r=No().isPrimitive,v6r=T();function f6r(r,e){if(!o6r(r))throw new TypeError(v6r("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}HO.exports=f6r});var XO=u((OCr,DO)=>{"use strict";var l6r=x().isPrimitive,c6r=T();function p6r(r,e){if(!l6r(r))throw new TypeError(c6r("invalid argument. %s must be a number. Value: %s.",e,String(r)))}DO.exports=p6r});var zO=u((SCr,JO)=>{"use strict";var g6r=T();function m6r(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(g6r('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}JO.exports=m6r});var Co=u((TCr,YO)=>{"use strict";var y6r=zr().isPrimitive,q6r=T();function h6r(r,e){if(!y6r(r))throw new TypeError(q6r("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}YO.exports=h6r});var $O=u((LCr,ZO)=>{"use strict";var d6r=G().isPrimitive,w6r=T();function b6r(r,e){if(!d6r(r))throw new TypeError(w6r("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}ZO.exports=b6r});var jo=u((ICr,QO)=>{"use strict";var E6r=x().isPrimitive;function N6r(r){return E6r(r)&&r>=0&&r<=1}QO.exports=N6r});var Vo=u((PCr,KO)=>{"use strict";var A6r=x().isObject;function O6r(r){return A6r(r)&&r.valueOf()>=0&&r.valueOf()<=1}KO.exports=O6r});var eS=u((_Cr,rS)=>{"use strict";var S6r=jo(),T6r=Vo();function L6r(r){return S6r(r)||T6r(r)}rS.exports=L6r});var ki=u((RCr,iS)=>{"use strict";var tS=w(),Go=eS(),I6r=jo(),P6r=Vo();tS(Go,"isPrimitive",I6r);tS(Go,"isObject",P6r);iS.exports=Go});var aS=u((FCr,nS)=>{"use strict";var _6r=ki().isPrimitive,R6r=T();function F6r(r,e){if(!_6r(r))throw new TypeError(R6r("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}nS.exports=F6r});var sS=u((MCr,uS)=>{"use strict";var M6r=vr(),x6r=T();function B6r(r,e){if(!M6r(r))throw new TypeError(x6r("invalid argument. %s must be a range. Value: %s.",e,String(r)))}uS.exports=B6r});var vS=u((xCr,oS)=>{"use strict";function C6r(r){return r.length===1||r[0].length===1}oS.exports=C6r});var lS=u((BCr,fS)=>{"use strict";var j6r=vr(),V6r=vS();function G6r(r){return j6r(r)&&V6r(r)}fS.exports=G6r});var pS=u((CCr,cS)=>{"use strict";var U6r=T(),W6r=lS();function H6r(r,e){if(!W6r(r))throw new TypeError(U6r("invalid argument. %s must consist of only a single row or a single column.",e))}cS.exports=H6r});var mS=u((jCr,gS)=>{"use strict";function k6r(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}gS.exports=k6r});var qS=u((VCr,yS)=>{"use strict";var D6r=T(),X6r=mS();function J6r(r,e,t){if(!X6r(r,e))throw new TypeError(D6r("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}yS.exports=J6r});var dS=u((GCr,hS)=>{"use strict";var z6r=k().isPrimitive,Y6r=T();function Z6r(r,e){if(!z6r(r))throw new TypeError(Y6r("invalid argument. %s must be a string. Value: %s.",e,String(r)))}hS.exports=Z6r});var bS=u((UCr,wS)=>{"use strict";var $6r=T();function Q6r(r){throw new Error($6r("invalid argument. Unrecognized option name. Value: %s.",String(r)))}wS.exports=Q6r});var AS=u((WCr,NS)=>{"use strict";var ES=Co(),K6r=Bo();function r4r(r,e,t){ES(r,"Number of rows"),ES(e,"Number of columns"),K6r(t,"a pseudorandom number generator seed")}NS.exports=r4r});var SS=u((HCr,OS)=>{"use strict";var e4r=vr(),t4r=Pr().isPrimitive,i4r=T(),n4r=Qn();function a4r(r){if(t4r(r))return r;if(e4r(r))return n4r(r);throw new TypeError(i4r("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}OS.exports=a4r});var LS=u((kCr,TS)=>{"use strict";var X={};X.isBoolean=bO();X.isBroadcastCompatible=OO();X.isBroadcastCompatibleWith=IO();X.isDefined=Bo();X.isGreaterThan=RO();X.isGreaterThanEqual=MO();X.isInteger=BO();X.isLessThan=jO();X.isLessThanEqual=GO();X.isNonNegativeInteger=WO();X.isNonNegativeNumber=kO();X.isNumber=XO();X.isOneOf=zO();X.isPositiveInteger=Co();X.isPositiveNumber=$O();X.isProbability=aS();X.isRange=sS();X.isRange1d=pS();X.isSameShape=qS();X.isString=dS();X.unrecognizedOptionName=bS();X.verifyCommonPRNGArgs=AS();X.verifyPRNGSeed=SS();TS.exports=X});var PS=u((DCr,IS)=>{"use strict";var Uo=4;function u4r(r,e,t,i,n,a){var s,o,v,f;if(r<=0||e===0)return n;if(i===1&&a===1){if(v=r%Uo,v>0)for(f=0;f<v;f++)n[f]+=e*t[f];if(r<Uo)return n;for(f=v;f<r;f+=Uo)n[f]+=e*t[f],n[f+1]+=e*t[f+1],n[f+2]+=e*t[f+2],n[f+3]+=e*t[f+3];return n}for(i<0?s=(1-r)*i:s=0,a<0?o=(1-r)*a:o=0,f=0;f<r;f++)n[o]+=e*t[s],s+=i,o+=a;return n}IS.exports=u4r});var RS=u((XCr,_S)=>{"use strict";var Di=4;function s4r(r,e,t,i,n,a,s,o){var v,f,l,c;if(r<=0||e===0)return a;if(v=n,f=o,i===1&&s===1){if(l=r%Di,l>0)for(c=0;c<l;c++)a[f]+=e*t[v],v+=i,f+=s;if(r<Di)return a;for(c=l;c<r;c+=Di)a[f]+=e*t[v],a[f+1]+=e*t[v+1],a[f+2]+=e*t[v+2],a[f+3]+=e*t[v+3],v+=Di,f+=Di;return a}for(c=0;c<r;c++)a[f]+=e*t[v],v+=i,f+=s;return a}_S.exports=s4r});var Wo=u((JCr,MS)=>{"use strict";var o4r=w(),FS=PS(),v4r=RS();o4r(FS,"ndarray",v4r);MS.exports=FS});var BS=u((zCr,xS)=>{"use strict";var Ho={};Ho.daxpy=Wo().ndarray;Ho.saxpy=Wo().ndarray;xS.exports=Ho});var jS=u((YCr,CS)=>{"use strict";function f4r(r){return r*r}CS.exports=f4r});var GS=u((ZCr,VS)=>{"use strict";var l4r=jS();VS.exports=l4r});var WS=u(($Cr,US)=>{"use strict";function c4r(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}US.exports=c4r});var kS=u((QCr,HS)=>{"use strict";function p4r(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}HS.exports=p4r});var JS=u((KCr,XS)=>{"use strict";var g4r=b(),m4r=D(),DS=ta(),y4r=WS(),q4r=kS(),h4r=6123233995736766e-32;function d4r(r){var e,t,i,n,a;if(g4r(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*q4r(t),t=m4r(t+t),a=DS-t,t=t*n-h4r,a-=t,a+=DS;else{if(i<1e-8)return r;t=i*i,a=t*y4r(t),a=i*a+i}return e?-a:a}XS.exports=d4r});var YS=u((rjr,zS)=>{"use strict";var w4r=JS();zS.exports=w4r});var KS=u((ejr,QS)=>{"use strict";var b4r=b(),ZS=YS(),E4r=D(),$S=ta(),N4r=6123233995736766e-32;function A4r(r){var e;return b4r(r)?NaN:r<-1||r>1?NaN:r>.5?2*ZS(E4r(.5-.5*r)):(e=$S-ZS(r),e+=N4r,e+=$S,e)}QS.exports=A4r});var eT=u((tjr,rT)=>{"use strict";var O4r=KS();rT.exports=O4r});var aT=u((ijr,nT)=>{"use strict";var S4r=b(),T4r=kn(),tT=D(),L4r=Is(),iT=B(),I4r=1<<28;function P4r(r){var e;return S4r(r)?NaN:r<1?NaN:r===1?0:r>=I4r?iT(r)+L4r:r>2?iT(2*r-1/(r+tT(r*r-1))):(e=r-1,T4r(e+tT(2*e+e*e)))}nT.exports=P4r});var sT=u((njr,uT)=>{"use strict";var _4r=aT();uT.exports=_4r});var ko=u((ajr,oT)=>{"use strict";var R4r=.9189385332046728;oT.exports=R4r});var vT=u((ujr,F4r)=>{F4r.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var fT=u((sjr,M4r)=>{M4r.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var lT=u((ojr,x4r)=>{x4r.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var pT=u((vjr,cT)=>{"use strict";function B4r(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}cT.exports=B4r});var mT=u((fjr,gT)=>{"use strict";function C4r(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}gT.exports=C4r});var qT=u((ljr,yT)=>{"use strict";function j4r(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}yT.exports=j4r});var dT=u((cjr,hT)=>{"use strict";function V4r(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}hT.exports=V4r});var bT=u((pjr,wT)=>{"use strict";function G4r(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}wT.exports=G4r});var NT=u((gjr,ET)=>{"use strict";function U4r(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}ET.exports=U4r});var LT=u((mjr,TT)=>{"use strict";var W4r=b(),H4r=Nr(),k4r=$(),ca=ur(),D4r=K(),X4r=xt(),J4r=Fi(),AT=Ri(),OT=Q(),z4r=B(),Y4r=j(),Z4r=Z(),ST=Le(),$4r=Rs(),Q4r=ko(),K4r=vT(),r5r=fT(),e5r=lT(),t5r=pT(),i5r=mT(),n5r=qT(),a5r=dT(),u5r=bT(),s5r=NT(),o5r=129,v5r=170,f5r=709,l5r=1.2433929443359375,c5r=.6986598968505859;function Do(r){var e,t,i,n,a,s;if(W4r(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(H4r(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(s=(i+1)/2|0,s<=o5r)return-e5r[s]/(i+1)}else return(n&1)===0?r5r[n/2]:K4r[(n-3)/2];return k4r(r)<$4r?-.5-Q4r*r:(t=1-r,r<0?D4r(r/2)===r/2?0:(e=r,r=t,t=e,r>v5r?(e=AT(.5*t)*2*Do(r),a=J4r(r),a-=r*z4r(ST),a>f5r?e<0?Z4r:Y4r:e*ca(a)):AT(.5*t)*2*OT(ST,-r)*X4r(r)*Do(r)):r<1?(e=t5r(t),e-=l5r,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+i5r(t)):r<=4?(e=c5r+1/-t,e+n5r(r-2)):r<=7?(e=a5r(r-4),1+ca(e)):r<15?(e=u5r(r-7),1+ca(e)):r<36?(e=s5r(r-15),1+ca(e)):1+OT(2,-r))}TT.exports=Do});var PT=u((yjr,IT)=>{"use strict";var p5r=LT();IT.exports=p5r});var RT=u((qjr,_T)=>{"use strict";var Yt={};Yt.abs=$();Yt.abs2=GS();Yt.acos=eT();Yt.acosh=sT();Yt.zeta=PT();_T.exports=Yt});var xT=u((hjr,MT)=>{"use strict";var FT=b(),g5r=B(),m5r=Le(),y5r=Ds();function q5r(r,e){return FT(r)||FT(e)||e<=0?NaN:.5*g5r(m5r*y5r*e*e)}MT.exports=q5r});var CT=u((djr,BT)=>{"use strict";var h5r=xT();BT.exports=h5r});var GT=u((wjr,VT)=>{"use strict";var d5r=ur(),jT=Q(),w5r=D(),b5r=Le(),E5r=j(),Xo=b();function N5r(r,e,t){var i,n,a;return Xo(r)||Xo(e)||Xo(t)||t<0?NaN:t===0?r===e?E5r:0:(i=jT(t,2),n=1/w5r(i*b5r),a=-1/(2*i),n*d5r(a*jT(r-e,2)))}VT.exports=N5r});var HT=u((bjr,WT)=>{"use strict";var A5r=j(),UT=b();function O5r(r,e){return UT(r)||UT(e)?NaN:r===e?A5r:0}WT.exports=O5r});var XT=u((Ejr,DT)=>{"use strict";var S5r=I(),T5r=j(),kT=b();function L5r(r){if(kT(r))return S5r(NaN);return e;function e(t){return kT(t)?NaN:t===r?T5r:0}}DT.exports=L5r});var YT=u((Njr,zT)=>{"use strict";var I5r=w(),JT=HT(),P5r=XT();I5r(JT,"factory",P5r);zT.exports=JT});var QT=u((Ajr,$T)=>{"use strict";var _5r=I(),R5r=YT().factory,Jo=b(),F5r=D(),M5r=ur(),ZT=Q(),x5r=Le();function B5r(r,e){var t,i,n;if(Jo(r)||Jo(e)||e<0)return _5r(NaN);if(e===0)return R5r(r);return t=ZT(e,2),i=1/F5r(t*x5r),n=-1/(2*t),a;function a(s){return Jo(s)?NaN:i*M5r(n*ZT(s-r,2))}}$T.exports=B5r});var eL=u((Ojr,rL)=>{"use strict";var C5r=w(),KT=GT(),j5r=QT();C5r(KT,"factory",j5r);rL.exports=KT});var iL=u((Sjr,tL)=>{"use strict";var pa={};pa.normal={};pa.normal.entropy=CT();pa.normal.pdf=eL();tL.exports=pa});var aL=u((Tjr,nL)=>{"use strict";var V5r=k().isPrimitive,G5r=T();function U5r(r){if(!V5r(r))throw new TypeError(G5r("invalid argument. First argument must be a string. Value: `%s`.",r));return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}nL.exports=U5r});var ga=u((Ljr,uL)=>{"use strict";var W5r=aL();uL.exports=W5r});var oL=u((Ijr,sL)=>{"use strict";var H5r=k().isPrimitive,k5r=T();function D5r(r){if(!H5r(r))throw new TypeError(k5r("invalid argument. Must provide a string. Value: `%s`.",r));return r.toLowerCase()}sL.exports=D5r});var Zt=u((Pjr,vL)=>{"use strict";var X5r=oL();vL.exports=X5r});var cL=u((_jr,lL)=>{"use strict";var J5r=k().isPrimitive,z5r=T(),fL=/[-\/\\^$*+?.()|[\]{}]/g;function Y5r(r){var e,t,i;if(!J5r(r))throw new TypeError(z5r("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(fL,"\\$&"):(t=r.substring(1,i),t=t.replace(fL,"\\$&"),r=r[0]+t+r.substring(i),r)}lL.exports=Y5r});var gL=u((Rjr,pL)=>{"use strict";var Z5r=cL();pL.exports=Z5r});var yL=u((Fjr,mL)=>{"use strict";var $5r=RegExp.prototype.exec;mL.exports=$5r});var hL=u((Mjr,qL)=>{"use strict";var Q5r=yL();function K5r(r){try{return Q5r.call(r),!0}catch{return!1}}qL.exports=K5r});var wL=u((xjr,dL)=>{"use strict";var r8r=Nt(),e8r=Y(),t8r=hL(),i8r=r8r();function n8r(r){return typeof r=="object"?r instanceof RegExp?!0:i8r?t8r(r):e8r(r)==="[object RegExp]":!1}dL.exports=n8r});var EL=u((Bjr,bL)=>{"use strict";var a8r=wL();bL.exports=a8r});var AL=u((Cjr,NL)=>{"use strict";var u8r=gL(),s8r=L(),zo=k().isPrimitive,o8r=EL(),Yo=T();function v8r(r,e,t){if(!zo(r))throw new TypeError(Yo("invalid argument. First argument must be a string. Value: `%s`.",r));if(zo(e))e=u8r(e),e=new RegExp(e,"g");else if(!o8r(e))throw new TypeError(Yo("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!zo(t)&&!s8r(t))throw new TypeError(Yo("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return r.replace(e,t)}NL.exports=v8r});var wt=u((jjr,OL)=>{"use strict";var f8r=AL();OL.exports=f8r});var TL=u((Vjr,SL)=>{"use strict";var l8r=k().isPrimitive,c8r=wt(),p8r=T(),g8r=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function m8r(r){if(!l8r(r))throw new TypeError(p8r("invalid argument. Must provide a string. Value: `%s`.",r));return c8r(r,g8r,"$1")}SL.exports=m8r});var $t=u((Gjr,LL)=>{"use strict";var y8r=TL();LL.exports=y8r});var PL=u((Ujr,IL)=>{"use strict";var q8r=k().isPrimitive,h8r=ga(),d8r=Zt(),ma=wt(),w8r=T(),b8r=$t(),E8r=/\s+/g,N8r=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,A8r=/(?:\s|^)([^\s]+)(?=\s|$)/g,O8r=/([a-z0-9])([A-Z])/g;function S8r(r,e,t){return e=d8r(e),t===0?e:h8r(e)}function T8r(r){if(!q8r(r))throw new TypeError(w8r("invalid argument. First argument must be a string. Value: `%s`.",r));return r=ma(r,N8r," "),r=ma(r,E8r," "),r=ma(r,O8r,"$1 $2"),r=b8r(r),r=ma(r,A8r,S8r),r}IL.exports=T8r});var RL=u((Wjr,_L)=>{"use strict";var L8r=PL();_L.exports=L8r});var ML=u((Hjr,FL)=>{"use strict";var I8r=k().isPrimitive,P8r=T();function _8r(r){if(!I8r(r))throw new TypeError(P8r("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}FL.exports=_8r});var Zo=u((kjr,xL)=>{"use strict";var R8r=ML();xL.exports=R8r});var CL=u((Djr,BL)=>{"use strict";var F8r=k().isPrimitive,M8r=Zo(),$o=wt(),x8r=T(),B8r=$t(),C8r=/\s+/g,j8r=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,V8r=/([a-z0-9])([A-Z])/g;function G8r(r){if(!F8r(r))throw new TypeError(x8r("invalid argument. Must provide a string. Value: `%s`.",r));return r=$o(r,j8r," "),r=$o(r,V8r,"$1 $2"),r=B8r(r),r=$o(r,C8r,"_"),M8r(r)}BL.exports=G8r});var VL=u((Xjr,jL)=>{"use strict";var U8r=CL();jL.exports=U8r});var UL=u((Jjr,GL)=>{"use strict";var W8r=k().isPrimitive,H8r=Zt(),Qo=wt(),k8r=T(),D8r=$t(),X8r=/\s+/g,J8r=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,z8r=/([a-z0-9])([A-Z])/g;function Y8r(r){if(!W8r(r))throw new TypeError(k8r("invalid argument. Must provide a string. Value: `%s`.",r));return r=Qo(r,J8r," "),r=Qo(r,z8r,"$1 $2"),r=D8r(r),r=Qo(r,X8r,"-"),H8r(r)}GL.exports=Y8r});var HL=u((zjr,WL)=>{"use strict";var Z8r=UL();WL.exports=Z8r});var DL=u((Yjr,kL)=>{"use strict";var $8r=k().isPrimitive,Q8r=ga(),K8r=Zt(),ya=wt(),rgr=T(),egr=$t(),tgr=/\s+/g,igr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,ngr=/(?:\s|^)([^\s]+)(?=\s|$)/g,agr=/([a-z0-9])([A-Z])/g;function ugr(r,e){return Q8r(K8r(e))}function sgr(r){if(!$8r(r))throw new TypeError(rgr("invalid argument. First argument must be a string. Value: `%s`.",r));return r=ya(r,igr," "),r=ya(r,tgr," "),r=ya(r,agr,"$1 $2"),r=egr(r),r=ya(r,ngr,ugr),r}kL.exports=sgr});var JL=u((Zjr,XL)=>{"use strict";var ogr=DL();XL.exports=ogr});var YL=u(($jr,zL)=>{"use strict";var vgr=k().isPrimitive,fgr=Zt(),Ko=wt(),lgr=T(),cgr=$t(),pgr=/\s+/g,ggr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,mgr=/([a-z0-9])([A-Z])/g;function ygr(r){if(!vgr(r))throw new TypeError(lgr("invalid argument. Must provide a string. Value: `%s`.",r));return r=Ko(r,ggr," "),r=Ko(r,mgr,"$1 $2"),r=cgr(r),r=Ko(r,pgr,"_"),fgr(r)}zL.exports=ygr});var $L=u((Qjr,ZL)=>{"use strict";var qgr=YL();ZL.exports=qgr});var rI=u((Kjr,KL)=>{"use strict";var hgr=S(),QL=A(),dgr=nr().isPrimitive,wgr=k().isPrimitive;function bgr(r,e){return hgr(e)?QL(e,"flags")&&(r.flags=e.flags,!wgr(r.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+r.flags+"`."):QL(e,"capture")&&(r.capture=e.capture,!dgr(r.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+r.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}KL.exports=bgr});var qa=u((rVr,tI)=>{"use strict";var Egr=rI(),eI=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function Ngr(r){var e,t;if(arguments.length>0){if(e={},t=Egr(e,r),t)throw t;return e.capture?new RegExp("("+eI+")",e.flags):new RegExp(eI,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}tI.exports=Ngr});var nI=u((eVr,iI)=>{"use strict";var Agr=qa(),Ogr=Agr({capture:!0});iI.exports=Ogr});var uI=u((tVr,aI)=>{"use strict";var Sgr=qa(),Tgr=Sgr();aI.exports=Tgr});var vI=u((iVr,oI)=>{"use strict";var sI=w(),rv=qa(),Lgr=nI(),Igr=uI();sI(rv,"REGEXP",Igr);sI(rv,"REGEXP_CAPTURE",Lgr);oI.exports=rv});var lI=u((nVr,fI)=>{"use strict";var Pgr=k().isPrimitive,_gr=vI(),Rgr=T();function Fgr(r){var e,t,i,n;if(!Pgr(r))throw new TypeError(Rgr("invalid argument. Must provide a string. Value: `%s`.",r));for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),_gr.REGEXP.test(i)?(t+=i,e=!0):e?(t+=i.toUpperCase(),e=!1):t+=i;return t}fI.exports=Fgr});var pI=u((aVr,cI)=>{"use strict";var Mgr=lI();cI.exports=Mgr});var mI=u((uVr,gI)=>{"use strict";var xgr=k().isPrimitive,Bgr=T();function Cgr(r){if(!xgr(r))throw new TypeError(Bgr("invalid argument. First argument must be a string. Value: `%s`.",r));return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}gI.exports=Cgr});var qI=u((sVr,yI)=>{"use strict";var jgr=mI();yI.exports=jgr});var dI=u((oVr,hI)=>{"use strict";var xr={};xr.camelcase=RL();xr.capitalize=ga();xr.constantcase=VL();xr.kebabcase=HL();xr.lowercase=Zt();xr.pascalcase=JL();xr.snakecase=$L();xr.startcase=pI();xr.uncapitalize=qI();xr.uppercase=Zo();hI.exports=xr});var bI=u((vVr,wI)=>{"use strict";var Vgr=be();function Ggr(r,e,t,i){Vgr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}wI.exports=Ggr});var _=u((fVr,EI)=>{"use strict";var Ugr=bI();EI.exports=Ugr});var OI=u((lVr,AI)=>{"use strict";var NI=65535;function Wgr(r,e){var t,i,n,a,s,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,s=(r&NI)>>>0,o=(e&NI)>>>0,t=s*o>>>0,i=n*o+s*a<<16>>>0,t+i>>>0}AI.exports=Wgr});var TI=u((cVr,SI)=>{"use strict";var Hgr=OI();SI.exports=Hgr});var ev=u((pVr,LI)=>{"use strict";function kgr(r,e,t,i,n,a,s){var o,v,f,l,c,p,y;for(o=e.data,v=n.data,l=e.getter,f=n.setter,c=i,p=s,y=0;y<r;y++)f(v,p,l(o,c)),c+=t,p+=a;return e}LI.exports=kgr});var _I=u((gVr,PI)=>{"use strict";var II=gt(),Dgr=ev(),tv=8;function Xgr(r,e,t,i,n){var a,s,o,v,f,l;if(r<=0)return i;if(o=II(e),v=II(i),o.accessors||v.accessors)return t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,Dgr(r,o,t,a,v,n,s),v.data;if(t===1&&n===1){if(f=r%tv,f>0)for(l=0;l<f;l++)i[l]=e[l];if(r<tv)return i;for(l=f;l<r;l+=tv)i[l]=e[l],i[l+1]=e[l+1],i[l+2]=e[l+2],i[l+3]=e[l+3],i[l+4]=e[l+4],i[l+5]=e[l+5],i[l+6]=e[l+6],i[l+7]=e[l+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,l=0;l<r;l++)i[s]=e[a],a+=t,s+=n;return i}PI.exports=Xgr});var MI=u((mVr,FI)=>{"use strict";var RI=gt(),Jgr=ev(),Xi=8;function zgr(r,e,t,i,n,a,s){var o,v,f,l,c,p;if(r<=0)return n;if(f=RI(e),l=RI(n),f.accessors||l.accessors)return Jgr(r,f,t,i,l,a,s),l.data;if(o=i,v=s,t===1&&a===1){if(c=r%Xi,c>0)for(p=0;p<c;p++)n[v]=e[o],o+=t,v+=a;if(r<Xi)return n;for(p=c;p<r;p+=Xi)n[v]=e[o],n[v+1]=e[o+1],n[v+2]=e[o+2],n[v+3]=e[o+3],n[v+4]=e[o+4],n[v+5]=e[o+5],n[v+6]=e[o+6],n[v+7]=e[o+7],o+=Xi,v+=Xi;return n}for(p=0;p<r;p++)n[v]=e[o],o+=t,v+=a;return n}FI.exports=zgr});var xe=u((yVr,BI)=>{"use strict";var Ygr=w(),xI=_I(),Zgr=MI();Ygr(xI,"ndarray",Zgr);BI.exports=xI});var jI=u((qVr,CI)=>{"use strict";function $gr(){}CI.exports=$gr});var GI=u((hVr,VI)=>{"use strict";var Qgr=jI();function Kgr(){return Qgr.name==="foo"}VI.exports=Kgr});var WI=u((dVr,UI)=>{"use strict";var r7r=GI();UI.exports=r7r});var kI=u((wVr,HI)=>{"use strict";var e7r=L(),t7r=WI(),i7r=d0().REGEXP,n7r=t7r();function a7r(r){if(e7r(r)===!1)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return n7r?r.name:i7r.exec(r.toString())[1]}HI.exports=a7r});var XI=u((bVr,DI)=>{"use strict";var u7r=kI();DI.exports=u7r});var zI=u((EVr,JI)=>{"use strict";var s7r=bi(),o7r=It(),v7r=Ei(),f7r=Ni(),l7r=Pt(),c7r=st(),p7r=sr(),g7r=kr(),m7r=fr(),y7r=[m7r,g7r,c7r,p7r,f7r,l7r,s7r,o7r,v7r];JI.exports=y7r});var YI=u((NVr,q7r)=>{q7r.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var eP=u((AVr,rP)=>{"use strict";var h7r=Ee(),d7r=XI(),QI=nt(),w7r=K0(),b7r=fr(),ZI=zI(),$I=YI(),ha=w7r()?QI(b7r):KI;ha=d7r(ha)==="TypedArray"?ha:KI;function KI(){}function E7r(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof ha)return!0;for(t=0;t<ZI.length;t++)if(r instanceof ZI[t])return!0;for(;r;){for(e=h7r(r),t=0;t<$I.length;t++)if($I[t]===e)return!0;r=QI(r)}return!1}rP.exports=E7r});var iP=u((OVr,tP)=>{"use strict";var N7r=eP();tP.exports=N7r});var aP=u((SVr,nP)=>{"use strict";var A7r=Hi(),O7r=Ui(),S7r=[O7r,A7r];nP.exports=S7r});var uP=u((TVr,T7r)=>{T7r.exports=["Complex64Array","Complex128Array"]});var fP=u((LVr,vP)=>{"use strict";var L7r=Ee(),I7r=nt(),sP=aP(),oP=uP();function P7r(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<sP.length;t++)if(r instanceof sP[t])return!0;for(;r;){for(e=L7r(r),t=0;t<oP.length;t++)if(oP[t]===e)return!0;r=I7r(r)}return!1}vP.exports=P7r});var cP=u((IVr,lP)=>{"use strict";var _7r=fP();lP.exports=_7r});var gP=u((PVr,pP)=>{"use strict";function R7r(r,e){if(typeof e!="function")throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+e+"`.");return r instanceof e}pP.exports=R7r});var yP=u((_Vr,mP)=>{"use strict";var F7r=gP();mP.exports=F7r});var hP=u((RVr,qP)=>{"use strict";var M7r=bi(),x7r=It(),B7r=Ei(),C7r=Ni(),j7r=Pt(),V7r=st(),G7r=sr(),U7r=kr(),W7r=fr(),H7r=Hi(),k7r=Ui(),D7r=[[W7r,"Float64Array"],[U7r,"Float32Array"],[V7r,"Int32Array"],[G7r,"Uint32Array"],[C7r,"Int16Array"],[j7r,"Uint16Array"],[M7r,"Int8Array"],[x7r,"Uint8Array"],[B7r,"Uint8ClampedArray"],[H7r,"Complex64Array"],[k7r,"Complex128Array"]];qP.exports=D7r});var wP=u((FVr,dP)=>{"use strict";var X7r=yP(),J7r=Ee(),z7r=nt(),Qt=hP();function Y7r(r){var e,t;for(t=0;t<Qt.length;t++)if(X7r(r,Qt[t][0]))return Qt[t][1];for(;r;){for(e=J7r(r),t=0;t<Qt.length;t++)if(e===Qt[t][1])return Qt[t][1];r=z7r(r)}}dP.exports=Y7r});var EP=u((MVr,bP)=>{"use strict";var Z7r=iP(),$7r=cP(),Q7r=Ut(),K7r=Wt(),r9r=wP();function e9r(r){var e,t,i;if(Z7r(r))e=r;else if($7r(r))r.BYTES_PER_ELEMENT===8?e=Q7r(r,0):e=K7r(r,0);else throw new TypeError("invalid argument. Must provide a typed array. Value: `"+r+"`.");for(t={type:r9r(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}bP.exports=e9r});var R=u((xVr,NP)=>{"use strict";var t9r=EP();NP.exports=t9r});var iv=u((BVr,AP)=>{"use strict";var i9r=Ot(),n9r=K(),a9r=i9r-1;function u9r(){var r=n9r(1+a9r*Math.random());return r>>>0}AP.exports=u9r});var lv=u((CVr,xP)=>{"use strict";var Yr=w(),Be=P(),OP=_(),nv=A(),s9r=S(),o9r=_r(),SP=Hr(),v9r=nr().isPrimitive,TP=zr().isPrimitive,RP=Zn(),FP=Ot(),mr=sr(),f9r=Hs(),fv=TI(),Kt=xe(),l9r=R(),LP=iv(),rr=624,av=397,IP=FP>>>0,c9r=19650218>>>0,uv=2147483648>>>0,sv=2147483647>>>0,p9r=1812433253>>>0,g9r=1664525>>>0,m9r=1566083941>>>0,y9r=2636928640>>>0,q9r=4022730752>>>0,h9r=2567483615>>>0,ov=[0>>>0,h9r>>>0],MP=1/(RP+1),d9r=67108864>>>0,w9r=2147483648>>>0,vv=1>>>0,b9r=RP*MP,da=1,wa=3,Ce=2,je=rr+3,yr=rr+5,Ji=rr+6;function PP(r,e){var t;return e?t="option":t="argument",r.length<Ji+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==da?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+da+". Actual: "+r[0]+"."):r[1]!==wa?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+wa+". Actual: "+r[1]+"."):r[Ce]!==rr?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+rr+". Actual: "+r[Ce]+"."):r[je]!==1?new RangeError("invalid "+t+". `state` array has an incompatible section length. Expected: "+1 .toString()+". Actual: "+r[je]+"."):r[yr]!==r.length-Ji?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-Ji)+". Actual: "+r[yr]+"."):null}function _P(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=fv(t,p9r)+i>>>0;return r}function E9r(r,e,t,i){var n,a,s,o;for(a=1,s=0,o=f9r(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=fv(n,g9r)>>>0,r[a]=(r[a]>>>0^n)+t[s]+s>>>0,a+=1,s+=1,a>=e&&(r[0]=r[e-1],a=1),s>=i&&(s=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=fv(n,m9r)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=w9r,r}function N9r(r){var e,t,i,n;for(n=rr-av,t=0;t<n;t++)e=r[t]&uv|r[t+1]&sv,r[t]=r[t+av]^e>>>1^ov[e&vv];for(i=rr-1;t<i;t++)e=r[t]&uv|r[t+1]&sv,r[t]=r[t-n]^e>>>1^ov[e&vv];return e=r[i]&uv|r[0]&sv,r[i]=r[av-1]^e>>>1^ov[e&vv],r}function A9r(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!s9r(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(nv(r,"copy")&&(i.copy=r.copy,!v9r(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(nv(r,"state")){if(t=r.state,i.state=!0,!SP(t))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+t+"`.");if(s=PP(t,!0),s)throw s;i.copy===!1?e=t:(e=new mr(t.length),Kt(t.length,t,1,e,1)),t=new mr(e.buffer,e.byteOffset+(Ce+1)*e.BYTES_PER_ELEMENT,rr),n=new mr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,t[yr])}if(n===void 0)if(nv(r,"seed"))if(n=r.seed,i.seed=!0,TP(n)){if(n>IP)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");n>>>=0}else{if(o9r(n)===!1||n.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");if(n.length===1){if(n=n[0],!TP(n))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");if(n>IP)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");n>>>=0}else a=n.length,e=new mr(Ji+a),e[0]=da,e[1]=wa,e[Ce]=rr,e[je]=1,e[je+1]=rr,e[yr]=a,Kt.ndarray(a,n,1,0,e,1,yr+1),t=new mr(e.buffer,e.byteOffset+(Ce+1)*e.BYTES_PER_ELEMENT,rr),n=new mr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,a),t=_P(t,rr,c9r),t=E9r(t,rr,n,a)}else n=LP()>>>0}else n=LP()>>>0;return t===void 0&&(e=new mr(Ji+1),e[0]=da,e[1]=wa,e[Ce]=rr,e[je]=1,e[je+1]=rr,e[yr]=1,e[yr+1]=n,t=new mr(e.buffer,e.byteOffset+(Ce+1)*e.BYTES_PER_ELEMENT,rr),n=new mr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,1),t=_P(t,rr,n)),Yr(q,"NAME","mt19937"),Be(q,"seed",o),Be(q,"seedLength",v),OP(q,"state",c,p),Be(q,"stateLength",f),Be(q,"byteLength",l),Yr(q,"toJSON",y),Yr(q,"MIN",1),Yr(q,"MAX",FP),Yr(q,"normalized",m),Yr(m,"NAME",q.NAME),Be(m,"seed",o),Be(m,"seedLength",v),OP(m,"state",c,p),Be(m,"stateLength",f),Be(m,"byteLength",l),Yr(m,"toJSON",y),Yr(m,"MIN",0),Yr(m,"MAX",b9r),q;function o(){var g=e[yr];return Kt(g,n,1,new mr(g),1)}function v(){return e[yr]}function f(){return e.length}function l(){return e.byteLength}function c(){var g=e.length;return Kt(g,e,1,new mr(g),1)}function p(g){var h;if(!SP(g))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+g+"`.");if(h=PP(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?Kt(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new mr(g.length)),Kt(g.length,g,1,e,1)),t=new mr(e.buffer,e.byteOffset+(Ce+1)*e.BYTES_PER_ELEMENT,rr),n=new mr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,e[yr])}function y(){var g={};return g.type="PRNG",g.name=q.NAME,g.state=l9r(e),g.params=[],g}function q(){var g,h;return h=e[je+1],h>=rr&&(t=N9r(t),h=0),g=t[h],e[je+1]=h+1,g^=g>>>11,g^=g<<7&y9r,g^=g<<15&q9r,g^=g>>>18,g>>>0}function m(){var g=q()>>>5,h=q()>>>6;return(g*d9r+h)*MP}}xP.exports=A9r});var CP=u((jVr,BP)=>{"use strict";var O9r=lv(),S9r=iv(),T9r=O9r({seed:S9r()});BP.exports=T9r});var W=u((VVr,VP)=>{"use strict";var L9r=w(),jP=CP(),I9r=lv();L9r(jP,"factory",I9r);VP.exports=jP});var HP=u((GVr,WP)=>{"use strict";var GP=x().isPrimitive,UP=er();function P9r(r,e){return!GP(r)||UP(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!GP(e)||UP(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):r>=e?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+r+","+e+"]`."):null}WP.exports=P9r});var DP=u((UVr,kP)=>{"use strict";var _9r=Q(),R9r=Ii(),F9r=ea();function M9r(r,e,t){return e+_9r(R9r(F9r*r()),2)*(t-e)}kP.exports=M9r});var cv=u((WVr,KP)=>{"use strict";var Zr=w(),ba=P(),XP=_(),JP=S(),zP=L(),YP=A(),ZP=I(),x9r=M(),Ea=W().factory,$P=b(),B9r=R(),C9r=HP(),QP=DP();function j9r(){var r,e,t,i,n,a;if(arguments.length===0)e=Ea();else if(arguments.length===1){if(r=arguments[0],!JP(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(YP(r,"prng")){if(!zP(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ea(r)}else{if(n=arguments[0],a=arguments[1],i=C9r(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!JP(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(YP(r,"prng")){if(!zP(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ea(r)}else e=Ea()}return n===void 0?t=q:t=y,Zr(t,"NAME","arcsine"),r&&r.prng?(Zr(t,"seed",null),Zr(t,"seedLength",null),XP(t,"state",ZP(null),x9r),Zr(t,"stateLength",null),Zr(t,"byteLength",null),Zr(t,"toJSON",ZP(null)),Zr(t,"PRNG",e)):(ba(t,"seed",s),ba(t,"seedLength",o),XP(t,"state",l,c),ba(t,"stateLength",v),ba(t,"byteLength",f),Zr(t,"toJSON",p),Zr(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=B9r(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function y(){return QP(e,n,a)}function q(m,g){return $P(m)||$P(g)||m>=g?NaN:QP(e,m,g)}}KP.exports=j9r});var e_=u((HVr,r_)=>{"use strict";var V9r=cv(),G9r=V9r();r_.exports=G9r});var n_=u((kVr,i_)=>{"use strict";var U9r=w(),t_=e_(),W9r=cv();U9r(t_,"factory",W9r);i_.exports=t_});var pv=u((DVr,f_)=>{"use strict";var $r=w(),Na=P(),a_=_(),u_=S(),H9r=ki().isPrimitive,s_=L(),o_=A(),v_=I(),k9r=M(),Aa=W().factory,D9r=b(),X9r=R();function J9r(){var r,e,t,i;if(arguments.length===0)e=Aa();else if(arguments.length===1&&u_(arguments[0]))if(r=arguments[0],o_(r,"prng")){if(!s_(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Aa(r);else{if(i=arguments[0],!H9r(i))throw new TypeError("invalid argument. First argument must be a probability. Value: `"+i+"`.");if(arguments.length>1){if(r=arguments[1],!u_(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(o_(r,"prng")){if(!s_(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Aa(r)}else e=Aa()}return i===void 0?t=p:t=c,$r(t,"NAME","bernoulli"),r&&r.prng?($r(t,"seed",null),$r(t,"seedLength",null),a_(t,"state",v_(null),k9r),$r(t,"stateLength",null),$r(t,"byteLength",null),$r(t,"toJSON",v_(null)),$r(t,"PRNG",e)):(Na(t,"seed",n),Na(t,"seedLength",a),a_(t,"state",v,f),Na(t,"stateLength",s),Na(t,"byteLength",o),$r(t,"toJSON",l),$r(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=t.NAME,y.state=X9r(e.state),i===void 0?y.params=[]:y.params=[i],y}function c(){return e()<=i?1:0}function p(y){return D9r(y)||y<0||y>1?NaN:e()<=y?1:0}}f_.exports=J9r});var c_=u((XVr,l_)=>{"use strict";var z9r=pv(),Y9r=z9r();l_.exports=Y9r});var m_=u((JVr,g_)=>{"use strict";var Z9r=w(),p_=c_(),$9r=pv();Z9r(p_,"factory",$9r);g_.exports=p_});var d_=u((zVr,h_)=>{"use strict";var Q9r=D(),y_=ur(),K9r=B(),q_=.00991256303526217;function rmr(r,e){var t,i,n;for(i=y_(-.5*e*e),t=[],t.push(q_/i),t.push(e),n=2;n<r;n++)t[n]=Q9r(-2*K9r(q_/t[n-1]+i)),i=y_(-.5*t[n]*t[n]);return t.push(0),t}h_.exports=rmr});var b_=u((YVr,w_)=>{"use strict";function emr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}w_.exports=emr});var A_=u((ZVr,N_)=>{"use strict";var E_=B();function tmr(r,e,t){var i,n;do i=E_(r())/e,n=E_(r());while(-2*n<i*i);return t?i-e:e-i}N_.exports=tmr});var L_=u(($Vr,T_)=>{"use strict";var imr=$(),O_=ur(),nmr=d_(),amr=b_(),umr=A_(),smr=128,S_=3.442619855899,bt=nmr(smr,S_),omr=amr(bt),vmr=127;function fmr(r,e){return t;function t(){for(var i,n,a,s,o,v,f;;){if(o=2*r()-1,v=e()&vmr,imr(o)<omr[v])return o*bt[v];if(v===0)return umr(r,S_,o<0);if(s=o*bt[v],a=s*s,f=v+1,i=O_(-.5*(bt[v]*bt[v]-a)),n=O_(-.5*(bt[f]*bt[f]-a)),n+r()*(i-n)<1)return s}}}T_.exports=fmr});var mv=u((QVr,__)=>{"use strict";var Ve=w(),Oa=P(),I_=_(),lmr=L(),cmr=S(),pmr=nr().isPrimitive,Sa=A(),gmr=Hr(),gv=W().factory,P_=I(),mmr=M(),ymr=K(),qmr=Ot(),hmr=R(),dmr=L_();function wmr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!cmr(r))throw new TypeError("invalid argument. Must provide an object. Value: `"+r+"`.");if(Sa(r,"copy")&&(n.copy=r.copy,!pmr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(Sa(r,"prng")){if(!lmr(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else if(Sa(r,"state")){if(n.state=r.state,!gmr(r.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+r.state+"`.")}else if(Sa(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+r.seed+"`.")}return n.state===void 0?e===void 0?(t=gv(n),e=t.normalized):(t=gv({seed:ymr(1+qmr*e()),copy:n.copy}),n.seed=null):(t=gv(n),e=t.normalized),i=dmr(e,t),Ve(i,"NAME","improved-ziggurat"),n.seed===null?(Ve(i,"seed",null),Ve(i,"seedLength",null)):(Oa(i,"seed",a),Oa(i,"seedLength",s)),r&&r.prng?(I_(i,"state",P_(null),mmr),Ve(i,"stateLength",null),Ve(i,"byteLength",null),Ve(i,"toJSON",P_(null))):(I_(i,"state",f,l),Oa(i,"stateLength",o),Oa(i,"byteLength",v),Ve(i,"toJSON",c)),Ve(i,"PRNG",e),i;function a(){return t.seed}function s(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function l(p){t.state=p}function c(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=hmr(t.state),p.params=[],p}}__.exports=wmr});var F_=u((KVr,R_)=>{"use strict";var bmr=mv(),Emr=bmr();R_.exports=Emr});var Ge=u((rGr,x_)=>{"use strict";var Nmr=w(),M_=F_(),Amr=mv();Nmr(M_,"factory",Amr);x_.exports=M_});var j_=u((eGr,C_)=>{"use strict";var B_=G().isPrimitive;function Omr(r,e){return B_(r)?B_(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}C_.exports=Omr});var H_=u((tGr,W_)=>{"use strict";var V_=B(),G_=D(),Smr=Q(),U_=1/3;function Tmr(r,e,t){var i,n,a,s,o,v,f,l,c,p;for(t<1?(v=t+1-U_,o=1/G_(9*v),l=Smr(r(),1/t)):(v=t-U_,o=1/G_(9*v),l=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,n=f*f,a=1-.331*n*n,s=.5*n+v*(1-p+V_(p)),c=r(),(c<a||V_(c)<s)&&(i=!1)}return v*p*l}W_.exports=Tmr});var X_=u((iGr,D_)=>{"use strict";var yv=Q(),k_=B();function Lmr(r,e,t){var i,n,a,s,o,v,f,l;for(a=t-1,o=yv(a+a,.5),i=!0;i===!0;)s=e(),f=.5*(1+s/o),f>=0&&f<=1&&(v=r(),n=yv(s,4),l=8*t-12,l=1-n/l,v<=l?i=!1:(l+=.5*yv(n/(8*t-8),2),v<l&&(l=a*k_(4*f*(1-f)),l+=s*s/2,l>=k_(v)&&(i=!1))));return f}D_.exports=Lmr});var z_=u((nGr,J_)=>{"use strict";var Imr=Q(),Ta=B();function Pmr(r,e,t,i){var n,a,s,o,v,f,l,c,p,y,q;for(o=t-1,v=i-1,f=o+v,l=f*Ta(f),s=o/f,n=.5/Imr(f,.5),a=!0;a===!0;)c=e(),y=s+c*n,y>=0&&y<=1&&(p=r(),q=o*Ta(y/o),q+=v*Ta((1-y)/v),q+=l+.5*c*c,q>=Ta(p)&&(a=!1));return y}J_.exports=Pmr});var $_=u((aGr,Z_)=>{"use strict";var qv=ur(),Y_=Q(),hv=B();function _mr(r,e,t){for(var i,n,a,s,o,v,f;;)if(s=r(),o=r(),v=Y_(s,1/e),f=Y_(o,1/t),a=v+f,a<=1)return a>0?v/a:(i=hv(s)/e,n=hv(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),qv(i-hv(qv(i)+qv(n))))}Z_.exports=_mr});var rR=u((uGr,K_)=>{"use strict";var Q_=H_(),Rmr=X_(),Fmr=z_(),Mmr=$_();function xmr(r,e,t,i){var n,a;return t===i&&t>1.5?Rmr(r,e,t):t>1&&i>1?Fmr(r,e,t,i):t<1&&i<1?Mmr(r,t,i):(n=Q_(r,e,t),a=Q_(r,e,i),n/(n+a))}K_.exports=xmr});var Ev=u((sGr,fR)=>{"use strict";var Qr=w(),La=P(),eR=_(),tR=S(),iR=nr().isPrimitive,nR=L(),ri=A(),aR=I(),Bmr=M(),uR=Ge().factory,Ia=W().factory,sR=b(),dv=xe(),wv=sr(),bv=Hr(),oR=Rt(),Cmr=R(),jmr=j_(),vR=rR();function Vmr(){var r,e,t,i,n,a,s,o,v;if(o=!0,arguments.length===0)n={copy:!1},a=Ia(n);else if(arguments.length===1){if(n=arguments[0],!tR(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ri(n,"copy")&&!iR(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ri(n,"prng")){if(!nR(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ri(n,"state")&&!bv(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=oR(n,1),n.copy===!1?o=!1:n.state&&(n.state=dv(n.state.length,n.state,1,new wv(n.state.length),1)),n.copy=!1,a=Ia(n)}}else{if(t=arguments[0],i=arguments[1],v=jmr(t,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!tR(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ri(n,"copy")&&!iR(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ri(n,"prng")){if(!nR(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ri(n,"state")&&!bv(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=oR(n,1),n.copy===!1?o=!1:n.state&&(n.state=dv(n.state.length,n.state,1,new wv(n.state.length),1)),n.copy=!1,a=Ia(n)}}else n={copy:!1},a=Ia(n)}return n&&n.prng?e=uR({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=uR({state:r,copy:!1})),t===void 0?s=h:s=g,Qr(s,"NAME","beta"),n&&n.prng?(Qr(s,"seed",null),Qr(s,"seedLength",null),eR(s,"state",aR(null),Bmr),Qr(s,"stateLength",null),Qr(s,"byteLength",null),Qr(s,"toJSON",aR(null)),Qr(s,"PRNG",a)):(La(s,"seed",f),La(s,"seedLength",l),eR(s,"state",y,q),La(s,"stateLength",c),La(s,"byteLength",p),Qr(s,"toJSON",m),Qr(s,"PRNG",a),a=a.normalized),s;function f(){return a.seed}function l(){return a.seedLength}function c(){return a.stateLength}function p(){return a.byteLength}function y(){return a.state}function q(E){if(!bv(E))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+E+"`.");o&&(E=dv(E.length,E,1,new wv(E.length),1)),a.state=E}function m(){var E={};return E.type="PRNG",E.name=s.NAME,E.state=Cmr(a.state),t===void 0?E.params=[]:E.params=[t,i],E}function g(){return vR(a,e,t,i)}function h(E,N){return sR(E)||sR(N)||E<=0||N<=0?NaN:vR(a,e,E,N)}}fR.exports=Vmr});var cR=u((oGr,lR)=>{"use strict";var Gmr=Ev(),Umr=Gmr();lR.exports=Umr});var mR=u((vGr,gR)=>{"use strict";var Wmr=w(),pR=cR(),Hmr=Ev();Wmr(pR,"factory",Hmr);gR.exports=pR});var hR=u((fGr,qR)=>{"use strict";var yR=G().isPrimitive;function kmr(r,e){return yR(r)?yR(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}qR.exports=kmr});var bR=u((lGr,wR)=>{"use strict";var dR=B();function Dmr(r,e,t,i,n){var a,s,o,v,f,l,c;for(a=!0;a;){do f=e(),c=1+n*f;while(c<=0);c*=c*c,s=f*f,o=1-.331*s*s,v=.5*s+i*(1-c+dR(c)),l=r(),(l<o||dR(l)<v)&&(a=!1)}return 1/t*i*c}wR.exports=Dmr});var Tv=u((cGr,_R)=>{"use strict";var Kr=w(),Pa=P(),ER=_(),NR=S(),Nv=Hr(),AR=nr().isPrimitive,OR=L(),ei=A(),SR=I(),Xmr=M(),TR=Ge().factory,_a=W().factory,LR=b(),Av=D(),IR=Q(),Ov=xe(),Sv=sr(),Jmr=R(),PR=Rt(),zmr=hR(),Ra=bR(),Fa=1/3;function Ymr(){var r,e,t,i,n,a,s,o,v,f,l;if(o=!0,arguments.length===0)n={copy:!1},a=_a(n);else if(arguments.length===1){if(n=arguments[0],!NR(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ei(n,"copy")&&!AR(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ei(n,"prng")){if(!OR(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ei(n,"state")&&!Nv(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=PR(n,1),n.copy===!1?o=!1:n.state&&(n.state=Ov(n.state.length,n.state,1,new Sv(n.state.length),1)),n.copy=!1,a=_a(n)}}else{if(e=arguments[0],i=arguments[1],v=zmr(e,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!NR(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ei(n,"copy")&&!AR(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ei(n,"prng")){if(!OR(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ei(n,"state")&&!Nv(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=PR(n,1),n.copy===!1?o=!1:n.state&&(n.state=Ov(n.state.length,n.state,1,new Sv(n.state.length),1)),n.copy=!1,a=_a(n)}}else n={copy:!1},a=_a(n)}return n&&n.prng?t=TR({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=TR({state:r,copy:!1})),e===void 0?s=C:(e>=1?(s=E,l=e-Fa):(s=N,l=e+1-Fa),f=1/Av(9*l)),Kr(s,"NAME","gamma"),n&&n.prng?(Kr(s,"seed",null),Kr(s,"seedLength",null),ER(s,"state",SR(null),Xmr),Kr(s,"stateLength",null),Kr(s,"byteLength",null),Kr(s,"toJSON",SR(null)),Kr(s,"PRNG",a)):(Pa(s,"seed",c),Pa(s,"seedLength",p),ER(s,"state",m,g),Pa(s,"stateLength",y),Pa(s,"byteLength",q),Kr(s,"toJSON",h),Kr(s,"PRNG",a),a=a.normalized),s;function c(){return a.seed}function p(){return a.seedLength}function y(){return a.stateLength}function q(){return a.byteLength}function m(){return a.state}function g(O){if(!Nv(O))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+O+"`.");o&&(O=Ov(O.length,O,1,new Sv(O.length),1)),a.state=O}function h(){var O={};return O.type="PRNG",O.name=s.NAME,O.state=Jmr(a.state),e===void 0?O.params=[]:O.params=[e,i],O}function E(){return Ra(a,t,i,l,f)}function N(){return Ra(a,t,i,l,f)*IR(a(),1/e)}function C(O,H){var ir,U;return LR(O)||LR(H)||O<=0||H<=0?NaN:O<1?(U=O+1-Fa,ir=1/Av(9*U),Ra(a,t,H,U,ir)*IR(a(),1/O)):(U=O-Fa,ir=1/Av(9*U),Ra(a,t,H,U,ir))}}_R.exports=Ymr});var FR=u((pGr,RR)=>{"use strict";var Zmr=Tv(),$mr=Zmr();RR.exports=$mr});var ti=u((gGr,xR)=>{"use strict";var Qmr=w(),MR=FR(),Kmr=Tv();Qmr(MR,"factory",Kmr);xR.exports=MR});var jR=u((mGr,CR)=>{"use strict";var BR=G().isPrimitive;function ryr(r,e){return BR(r)?BR(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}CR.exports=ryr});var GR=u((yGr,VR)=>{"use strict";function eyr(r,e,t){return r(e,1)/r(t,1)}VR.exports=eyr});var Lv=u((qGr,XR)=>{"use strict";var Ue=w(),Ma=P(),UR=_(),WR=S(),HR=I(),tyr=M(),xa=ti().factory,kR=b(),iyr=R(),nyr=jR(),DR=GR();function ayr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=xa();else if(arguments.length===1){if(i=arguments[0],!WR(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");r=xa(i)}else{if(e=arguments[0],t=arguments[1],s=nyr(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!WR(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");r=xa(i)}else r=xa()}return e===void 0?a=m:a=q,n=r.PRNG,Ue(a,"NAME","betaprime"),i&&i.prng?(Ue(a,"seed",null),Ue(a,"seedLength",null),UR(a,"state",HR(null),tyr),Ue(a,"stateLength",null),Ue(a,"byteLength",null),Ue(a,"toJSON",HR(null))):(Ma(a,"seed",o),Ma(a,"seedLength",v),UR(a,"state",c,p),Ma(a,"stateLength",f),Ma(a,"byteLength",l),Ue(a,"toJSON",y)),Ue(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function l(){return n.byteLength}function c(){return n.state}function p(g){n.state=g}function y(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=iyr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function q(){return DR(r,e,t)}function m(g,h){return kR(g)||kR(h)||g<=0||h<=0?NaN:DR(r,g,h)}}XR.exports=ayr});var zR=u((hGr,JR)=>{"use strict";var uyr=Lv(),syr=uyr();JR.exports=syr});var $R=u((dGr,ZR)=>{"use strict";var oyr=w(),YR=zR(),vyr=Lv();oyr(YR,"factory",vyr);ZR.exports=YR});var KR=u((wGr,QR)=>{"use strict";var fyr=K();function lyr(r){return fyr(r)===r&&r>0}QR.exports=lyr});var Iv=u((bGr,rF)=>{"use strict";var cyr=KR();rF.exports=cyr});var tF=u((EGr,eF)=>{"use strict";function pyr(r){return r>=0&&r<=1}eF.exports=pyr});var nF=u((NGr,iF)=>{"use strict";var gyr=tF();iF.exports=gyr});var uF=u((AGr,aF)=>{"use strict";var myr=zr().isPrimitive,yyr=ki().isPrimitive;function qyr(r,e){return myr(r)?yyr(e)?null:new TypeError("invalid argument. Second argument must be a probability. Value: `"+e+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+e+"`.")}aF.exports=qyr});var oF=u((OGr,sF)=>{"use strict";function hyr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}sF.exports=hyr});var fF=u((SGr,vF)=>{"use strict";var dyr=b();function wyr(r){return r===0||dyr(r)?r:r<0?-1:1}vF.exports=wyr});var Ba=u((TGr,lF)=>{"use strict";var byr=fF();lF.exports=byr});var pF=u((LGr,cF)=>{"use strict";var Eyr=Q(),Nyr=1/12,Ayr=1/360,Oyr=1/1260;function Syr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=Eyr(r,2),(Nyr-(Ayr-Oyr/e)/e)/r}}cF.exports=Syr});var mF=u((IGr,gF)=>{"use strict";var Pv=K(),Tyr=Ba(),Lyr=D(),_v=$(),Ca=B(),ja=pF(),Iyr=1/6;function Pyr(r,e,t){var i,n,a,s,o,v,f,l,c,p,y,q,m,g,h,E,N,C,O,H,ir,U,ku,Br,or,Ki;for(H=Pv((e+1)*t),f=e-H+1,ir=1-t,U=t/ir,l=(e+1)*U,s=e*t*ir,a=Lyr(s),g=1.15+2.53*a,m=-.0873+.0248*g+.01*t,h=e*t+.5,i=(2.83+5.1/g)*a,q=.92-4.2/g,n=.86*q,N=(H+.5)*Ca((H+1)/(U*f)),N+=ja(H)+ja(e-H);;){if(or=r(),or<=n)return Br=or/q-.43,U=Br*(2*m/(.5-_v(Br))+g)+h,Pv(U);if(or>=q?Br=r()-.5:(Br=or/q-.93,Br=Tyr(Br)*.5-Br,or=q*r()),c=.5-_v(Br),O=Pv(Br*(2*m/c+g)+h),!(O<0||O>e))if(or=or*i/(m/(c*c)+g),p=_v(O-H),p>15){if(or=Ca(or),o=p/s,v=(p/3+.625)*p,v+=Iyr,v/=s,o*=v+.5,ku=-(p*p)/(2*s),or<ku-o||or<=ku+o&&(y=e-O+1,Ki=N+(e+1)*Ca(f/y),Ki+=(O+.5)*Ca(y*U/(O+1)),Ki+=-(ja(O)+ja(e-O)),or<=Ki))return O}else{if(E=1,H<O)for(C=H;C<=O;C++)E*=l/C-U;else if(H>O)for(C=O;C<=H;C++)or*=l/C-U;if(or<=E)return O}}}gF.exports=Pyr});var hF=u((PGr,qF)=>{"use strict";var _yr=oF(),Ryr=mF();function yF(r,e,t){return t>.5?e-yF(r,e,1-t):e*t<10?_yr(r,e,t):Ryr(r,e,t)}qF.exports=yF});var Rv=u((_Gr,SF)=>{"use strict";var re=w(),Va=P(),dF=_(),wF=S(),bF=L(),EF=A(),NF=I(),Fyr=M(),AF=b(),Myr=Iv(),xyr=nF(),Ga=W().factory,Byr=R(),Cyr=uF(),OF=hF();function jyr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ga();else if(arguments.length===1){if(r=arguments[0],!wF(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(EF(r,"prng")){if(!bF(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ga(r)}else{if(n=arguments[0],a=arguments[1],i=Cyr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!wF(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(EF(r,"prng")){if(!bF(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ga(r)}else e=Ga()}return n===void 0?t=q:t=y,re(t,"NAME","binomial"),r&&r.prng?(re(t,"seed",null),re(t,"seedLength",null),dF(t,"state",NF(null),Fyr),re(t,"stateLength",null),re(t,"byteLength",null),re(t,"toJSON",NF(null)),re(t,"PRNG",e)):(Va(t,"seed",s),Va(t,"seedLength",o),dF(t,"state",l,c),Va(t,"stateLength",v),Va(t,"byteLength",f),re(t,"toJSON",p),re(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Byr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function y(){return OF(e,n,a)}function q(m,g){return AF(m)||AF(g)||!Myr(m)||!xyr(g)?NaN:OF(e,m,g)}}SF.exports=jyr});var LF=u((RGr,TF)=>{"use strict";var Vyr=Rv(),Gyr=Vyr();TF.exports=Gyr});var _F=u((FGr,PF)=>{"use strict";var Uyr=w(),IF=LF(),Wyr=Rv();Uyr(IF,"factory",Wyr);PF.exports=IF});var FF=u((MGr,RF)=>{"use strict";var Hyr=D(),kyr=B(),Dyr=Ii(),Xyr=Li(),Jyr=Le();function zyr(r){var e,t;return e=!0,i;function i(){var n,a,s,o;if(e){do n=r(),a=r();while(n===0);return s=Hyr(-2*kyr(n)),o=Jyr*a,t=s*Xyr(o),e=!1,s*Dyr(o)}return e=!0,t}}RF.exports=zyr});var xF=u((xGr,MF)=>{"use strict";var Yyr=D(),Zyr=B(),$yr=Li(),Qyr=Vr(),Kyr=$yr(Qyr);function rqr(r){var e=Yyr(-2*Zyr(r));return e*Kyr}MF.exports=rqr});var CF=u((BGr,BF)=>{"use strict";var eqr=D(),tqr=B(),iqr=Li(),nqr=Le();function aqr(r){var e=eqr(-2*tqr(r)),t=nqr*r;return e*iqr(t)}BF.exports=aqr});var Fv=u((CGr,UF)=>{"use strict";var Ir=w(),Ua=P(),jF=_(),uqr=S(),sqr=L(),oqr=nr().isPrimitive,zi=A(),vqr=Hr(),VF=W().factory,GF=I(),fqr=M(),lqr=R(),cqr=FF(),pqr=xF(),gqr=CF();function mqr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!uqr(r))throw new TypeError("invalid argument. Must provide an object. Value: `"+r+"`.");if(zi(r,"copy")&&(n.copy=r.copy,!oqr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(zi(r,"prng")){if(!sqr(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else if(zi(r,"state")){if(n.state=r.state,!vqr(r.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+r.state+"`.")}else if(zi(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+r.seed+"`.")}return n.state===void 0?e===void 0?(i=VF(n),e=i.normalized):n.seed=null:(i=VF(n),e=i.normalized),t=cqr(e),Ir(t,"NAME","box-muller"),n.seed===null?(Ir(t,"seed",null),Ir(t,"seedLength",null)):(Ua(t,"seed",a),Ua(t,"seedLength",s)),r&&r.prng?(jF(t,"state",GF(null),fqr),Ir(t,"stateLength",null),Ir(t,"byteLength",null),Ir(t,"toJSON",GF(null))):(jF(t,"state",f,l),Ua(t,"stateLength",o),Ua(t,"byteLength",v),Ir(t,"toJSON",c)),Ir(t,"PRNG",e),zi(e,"MIN")?(Ir(t,"MIN",pqr(e.MIN)),Ir(t,"MAX",gqr(e.MIN))):(Ir(t,"MIN",null),Ir(t,"MAX",null)),t;function a(){return i.seed}function s(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function l(p){i.state=p}function c(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=lqr(i.state),p.params=[],p}}UF.exports=mqr});var HF=u((jGr,WF)=>{"use strict";var yqr=Fv(),qqr=yqr();WF.exports=qqr});var XF=u((VGr,DF)=>{"use strict";var hqr=w(),kF=HF(),dqr=Fv();hqr(kF,"factory",dqr);DF.exports=kF});var zF=u((GGr,JF)=>{"use strict";var wqr=x().isPrimitive,bqr=G().isPrimitive,Eqr=er();function Nqr(r,e){return!wqr(r)||Eqr(r)?new TypeError("invalid argument. `x0` must be a number primitive and not `NaN`. Value: `"+r+"`."):bqr(e)?null:new TypeError("invalid argument. `gamma` must be a positive number. Value: `"+e+"`.")}JF.exports=Nqr});var ZF=u((UGr,YF)=>{"use strict";var Aqr=qo(),Oqr=Vr();function Sqr(r,e,t){return e+t*Aqr(Oqr*(r()-.5))}YF.exports=Sqr});var Mv=u((WGr,nM)=>{"use strict";var We=w(),Wa=P(),$F=_(),QF=S(),KF=L(),rM=A(),eM=I(),Tqr=M(),tM=b(),ii=Ge().factory,Lqr=R(),Iqr=zF(),iM=ZF();function Pqr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=ii();else if(arguments.length===1){if(t=arguments[0],!QF(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(rM(t,"prng")){if(!KF(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ii({prng:t.prng})}else e=ii(t)}else{if(s=arguments[0],r=arguments[1],a=Iqr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!QF(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(rM(t,"prng")){if(!KF(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ii({prng:t.prng})}else e=ii(t)}else e=ii()}return s===void 0?n=m:n=q,i=e.PRNG,We(n,"NAME","cauchy"),t&&t.prng?(We(n,"seed",null),We(n,"seedLength",null),$F(n,"state",eM(null),Tqr),We(n,"stateLength",null),We(n,"byteLength",null),We(n,"toJSON",eM(null))):(Wa(n,"seed",o),Wa(n,"seedLength",v),$F(n,"state",c,p),Wa(n,"stateLength",f),Wa(n,"byteLength",l),We(n,"toJSON",y)),We(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function y(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=Lqr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function q(){return iM(e,s,r)}function m(g,h){return tM(g)||tM(h)||h<=0?NaN:iM(e,g,h)}}nM.exports=Pqr});var uM=u((HGr,aM)=>{"use strict";var _qr=Mv(),Rqr=_qr();aM.exports=Rqr});var vM=u((kGr,oM)=>{"use strict";var Fqr=w(),sM=uM(),Mqr=Mv();Fqr(sM,"factory",Mqr);oM.exports=sM});var xv=u((DGr,mM)=>{"use strict";var He=w(),Ha=P(),fM=_(),xqr=G().isPrimitive,lM=S(),cM=L(),pM=A(),gM=I(),Bqr=M(),Cqr=b(),ni=ti().factory,jqr=R();function Vqr(){var r,e,t,i,n;if(arguments.length===0)r=ni();else if(arguments.length===1&&lM(arguments[0]))if(t=arguments[0],pM(t,"prng")){if(!cM(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=ni({prng:t.prng})}else r=ni(t);else{if(n=arguments[0],!xqr(n))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+n+"`.");if(arguments.length>1){if(t=arguments[1],!lM(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(pM(t,"prng")){if(!cM(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=ni(n/2,.5,{prng:t.prng})}else r=ni(n/2,.5,t)}else r=ni(n/2,.5)}return n===void 0?i=y:i=p,e=r.PRNG,He(i,"NAME","chisquare"),t&&t.prng?(He(i,"seed",null),He(i,"seedLength",null),fM(i,"state",gM(null),Bqr),He(i,"stateLength",null),He(i,"byteLength",null),He(i,"toJSON",gM(null))):(Ha(i,"seed",a),Ha(i,"seedLength",s),fM(i,"state",f,l),Ha(i,"stateLength",o),Ha(i,"byteLength",v),He(i,"toJSON",c)),He(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function l(q){e.state=q}function c(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=jqr(e.state),n===void 0?q.params=[]:q.params=[n],q}function p(){return r()}function y(q){return Cqr(q)||q<=0?NaN:r(q/2,.5)}}mM.exports=Vqr});var qM=u((XGr,yM)=>{"use strict";var Gqr=xv(),Uqr=Gqr();yM.exports=Uqr});var Yi=u((JGr,dM)=>{"use strict";var Wqr=w(),hM=qM(),Hqr=xv();Wqr(hM,"factory",Hqr);dM.exports=hM});var Bv=u((zGr,SM)=>{"use strict";var ke=w(),ka=P(),wM=_(),kqr=G().isPrimitive,bM=S(),EM=L(),NM=A(),AM=I(),Dqr=M(),Xqr=b(),ai=Yi().factory,Jqr=R(),OM=D();function zqr(){var r,e,t,i,n;if(arguments.length===0)r=ai();else if(arguments.length===1&&bM(arguments[0]))if(t=arguments[0],NM(t,"prng")){if(!EM(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=ai({prng:t.prng})}else r=ai(t);else{if(n=arguments[0],!kqr(n))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+n+"`.");if(arguments.length>1){if(t=arguments[1],!bM(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(NM(t,"prng")){if(!EM(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=ai(n,{prng:t.prng})}else r=ai(n,t)}else r=ai(n)}return n===void 0?i=y:i=p,e=r.PRNG,ke(i,"NAME","chi"),t&&t.prng?(ke(i,"seed",null),ke(i,"seedLength",null),wM(i,"state",AM(null),Dqr),ke(i,"stateLength",null),ke(i,"byteLength",null),ke(i,"toJSON",AM(null))):(ka(i,"seed",a),ka(i,"seedLength",s),wM(i,"state",f,l),ka(i,"stateLength",o),ka(i,"byteLength",v),ke(i,"toJSON",c)),ke(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function l(q){e.state=q}function c(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=Jqr(e.state),n===void 0?q.params=[]:q.params=[n],q}function p(){return OM(r())}function y(q){return Xqr(q)||q<=0?NaN:OM(r(q))}}SM.exports=zqr});var LM=u((YGr,TM)=>{"use strict";var Yqr=Bv(),Zqr=Yqr();TM.exports=Zqr});var _M=u((ZGr,PM)=>{"use strict";var $qr=w(),IM=LM(),Qqr=Bv();$qr(IM,"factory",Qqr);PM.exports=IM});var FM=u(($Gr,RM)=>{"use strict";var Kqr=x().isPrimitive,rhr=G().isPrimitive,ehr=er();function thr(r,e){return!Kqr(r)||ehr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):rhr(e)?null:new TypeError("invalid argument. `s` must be a positive number. Value: `"+e+"`.")}RM.exports=thr});var xM=u((QGr,MM)=>{"use strict";var Cv=b(),ihr=Ri(),nhr=Vr();function ahr(r,e,t){var i;return Cv(r)||Cv(e)||Cv(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+ihr(i)/nhr)/2)}MM.exports=ahr});var CM=u((KGr,BM)=>{"use strict";var uhr=I(),shr=ao().factory,jv=b(),ohr=Ri(),vhr=Vr();function fhr(r,e){if(jv(r)||jv(e)||e<0)return uhr(NaN);if(e===0)return shr(r);return t;function t(i){var n;return jv(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+ohr(n)/vhr)/2)}}BM.exports=fhr});var GM=u((rUr,VM)=>{"use strict";var lhr=w(),jM=xM(),chr=CM();lhr(jM,"factory",chr);VM.exports=jM});var Vv=u((eUr,UM)=>{"use strict";var phr=GM(),ghr=1e4,mhr=1e-12;function yhr(r,e,t){var i,n,a,s,o;for(o=1,i=e-t,n=e+t;o<ghr;){if(s=(i+n)/2,n-i<mhr)return s;a=phr(s,e,t),r>a?i=s:n=s,o+=1}return s}UM.exports=yhr});var HM=u((tUr,WM)=>{"use strict";var Gv=b(),qhr=Vv();function hhr(r,e,t){return Gv(e)||Gv(t)||Gv(r)||t<0||r<0||r>1?NaN:t===0?e:qhr(r,e,t)}WM.exports=hhr});var DM=u((iUr,kM)=>{"use strict";var dhr=b();function whr(r,e){return dhr(r)||r<0||r>1?NaN:e}kM.exports=whr});var zM=u((nUr,JM)=>{"use strict";var bhr=I(),XM=b();function Ehr(r){if(XM(r))return bhr(NaN);return e;function e(t){return XM(t)||t<0||t>1?NaN:r}}JM.exports=Ehr});var Uv=u((aUr,ZM)=>{"use strict";var Nhr=w(),YM=DM(),Ahr=zM();Nhr(YM,"factory",Ahr);ZM.exports=YM});var QM=u((uUr,$M)=>{"use strict";var Ohr=I(),Shr=Uv().factory,Wv=b(),Thr=Vv();function Lhr(r,e){if(Wv(r)||Wv(e)||e<0)return Ohr(NaN);if(e===0)return Shr(r);return t;function t(i){return Wv(i)||i<0||i>1?NaN:Thr(i,r,e)}}$M.exports=Lhr});var ex=u((sUr,rx)=>{"use strict";var Ihr=w(),KM=HM(),Phr=QM();Ihr(KM,"factory",Phr);rx.exports=KM});var ix=u((oUr,tx)=>{"use strict";var _hr=ex();function Rhr(r,e,t){return _hr(r(),e,t)}tx.exports=Rhr});var Hv=u((vUr,lx)=>{"use strict";var ee=w(),Da=P(),nx=_(),ax=S(),ux=L(),sx=A(),ox=I(),Fhr=M(),Xa=W().factory,vx=b(),Mhr=R(),xhr=FM(),fx=ix();function Bhr(){var r,e,t,i,n,a;if(arguments.length===0)e=Xa();else if(arguments.length===1){if(r=arguments[0],!ax(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(sx(r,"prng")){if(!ux(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Xa(r)}else{if(n=arguments[0],a=arguments[1],i=xhr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!ax(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(sx(r,"prng")){if(!ux(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Xa(r)}else e=Xa()}return n===void 0?t=q:t=y,ee(t,"NAME","cosine"),r&&r.prng?(ee(t,"seed",null),ee(t,"seedLength",null),nx(t,"state",ox(null),Fhr),ee(t,"stateLength",null),ee(t,"byteLength",null),ee(t,"toJSON",ox(null)),ee(t,"PRNG",e)):(Da(t,"seed",s),Da(t,"seedLength",o),nx(t,"state",l,c),Da(t,"stateLength",v),Da(t,"byteLength",f),ee(t,"toJSON",p),ee(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Mhr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function y(){return fx(e,n,a)}function q(m,g){return vx(m)||vx(g)||g<=0?NaN:fx(e,m,g)}}lx.exports=Bhr});var px=u((fUr,cx)=>{"use strict";var Chr=Hv(),jhr=Chr();cx.exports=jhr});var yx=u((lUr,mx)=>{"use strict";var Vhr=w(),gx=px(),Ghr=Hv();Vhr(gx,"factory",Ghr);mx.exports=gx});var wx=u((cUr,dx)=>{"use strict";var qx=Pr().isPrimitive,hx=er();function Uhr(r,e){return!qx(r)||hx(r)?new TypeError("invalid argument. First argument must be an integer and not `NaN`. Value: `"+r+"`."):!qx(e)||hx(e)?new TypeError("invalid argument. Second argument must be an integer and not `NaN`. Value: `"+e+"`."):r>e?new RangeError("invalid argument. Minimum support `a` must be less than or equal to maximum support `b`. Value: `["+r+","+e+"]`."):null}dx.exports=Uhr});var Nx=u((pUr,Ex)=>{"use strict";var kv=Zn(),ui=K();function bx(r,e,t){var i,n,a,s,o,v,f,l,c;if(a=t-e,a===0)return e;if(f=r.MIN,l=r.MAX,n=l-f,n===a)return r()-f+e;if(n<a)for(s=0;;){for(a===kv?(s=ui(a/(n+1)),a%(n+1)===n&&(s+=1)):s=ui((a+1)/(n+1)),i=0,v=1;v<=s;){if(i+=(r()-f)*v,v*n===a-v+1)return i;v*=n+1}if(c=bx(r,0,ui(a/v)),!(c>kv/v)&&(c*=v,i+=c,!(i>a)))return i+e}for(n===kv?(o=ui(n/(a+1)),n%(a+1)===a&&(o+=1)):o=ui((n+1)/(a+1));;)if(i=r()-f,i=ui(i/o),i<=a)return i+e}Ex.exports=bx});var Dv=u((gUr,_x)=>{"use strict";var te=w(),Ja=P(),Ax=_(),Ox=S(),Sx=L(),Tx=A(),Lx=I(),Whr=M(),za=W().factory,Ix=b(),si=Nr(),Hhr=R(),khr=wx(),Px=Nx();function Dhr(){var r,e,t,i,n,a;if(arguments.length===0)e=za();else if(arguments.length===1){if(r=arguments[0],!Ox(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Tx(r,"prng")){if(!Sx(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");if(e=r.prng,!si(e.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!si(e.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else e=za(r)}else{if(n=arguments[0],a=arguments[1],i=khr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Ox(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Tx(r,"prng")){if(!Sx(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");if(e=r.prng,!si(e.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!si(e.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else e=za(r)}else e=za()}return n===void 0?t=q:t=y,te(t,"NAME","discrete-uniform"),r&&r.prng?(te(t,"seed",null),te(t,"seedLength",null),Ax(t,"state",Lx(null),Whr),te(t,"stateLength",null),te(t,"byteLength",null),te(t,"toJSON",Lx(null)),te(t,"PRNG",e)):(Ja(t,"seed",s),Ja(t,"seedLength",o),Ax(t,"state",l,c),Ja(t,"stateLength",v),Ja(t,"byteLength",f),te(t,"toJSON",p),te(t,"PRNG",e)),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Hhr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function y(){return Px(e,n,a)}function q(m,g){return Ix(m)||Ix(g)||!si(m)||!si(g)||m>g?NaN:Px(e,m,g)}}_x.exports=Dhr});var Fx=u((mUr,Rx)=>{"use strict";var Xhr=Dv(),Jhr=Xhr();Rx.exports=Jhr});var Bx=u((yUr,xx)=>{"use strict";var zhr=w(),Mx=Fx(),Yhr=Dv();zhr(Mx,"factory",Yhr);xx.exports=Mx});var jx=u((qUr,Cx)=>{"use strict";var Zhr=G().isPrimitive,$hr=zr().isPrimitive;function Qhr(r,e){return $hr(r)?Zhr(e)?null:new TypeError("invalid argument. Second argument must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+r+"`.")}Cx.exports=Qhr});var Gx=u((hUr,Vx)=>{"use strict";var Khr=B();function rdr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*Khr(i)}Vx.exports=rdr});var Xv=u((dUr,zx)=>{"use strict";var ie=w(),Ya=P(),Ux=_(),Wx=S(),Hx=L(),kx=A(),Dx=I(),edr=M(),Za=W().factory,Xx=b(),tdr=Iv(),idr=R(),ndr=jx(),Jx=Gx();function adr(){var r,e,t,i,n,a;if(arguments.length===0)e=Za();else if(arguments.length===1){if(t=arguments[0],!Wx(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(kx(t,"prng")){if(!Hx(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=t.prng}else e=Za(t)}else{if(a=arguments[0],r=arguments[1],n=ndr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!Wx(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(kx(t,"prng")){if(!Hx(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=t.prng}else e=Za(t)}else e=Za()}return a===void 0?i=q:i=y,ie(i,"NAME","erlang"),t&&t.prng?(ie(i,"seed",null),ie(i,"seedLength",null),Ux(i,"state",Dx(null),edr),ie(i,"stateLength",null),ie(i,"byteLength",null),ie(i,"toJSON",Dx(null)),ie(i,"PRNG",e)):(Ya(i,"seed",s),Ya(i,"seedLength",o),Ux(i,"state",l,c),Ya(i,"stateLength",v),Ya(i,"byteLength",f),ie(i,"toJSON",p),ie(i,"PRNG",e),e=e.normalized),i;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=idr(e.state),a===void 0?m.params=[]:m.params=[a,r],m}function y(){return Jx(e,a,r)}function q(m,g){return Xx(m)||Xx(g)||!tdr(m)||g<=0?NaN:Jx(e,m,g)}}zx.exports=adr});var Zx=u((wUr,Yx)=>{"use strict";var udr=Xv(),sdr=udr();Yx.exports=sdr});var Kx=u((bUr,Qx)=>{"use strict";var odr=w(),$x=Zx(),vdr=Xv();odr($x,"factory",vdr);Qx.exports=$x});var eB=u((EUr,rB)=>{"use strict";var fdr=B();function ldr(r,e){return-fdr(1-r())/e}rB.exports=ldr});var Jv=u((NUr,oB)=>{"use strict";var ne=w(),$a=P(),tB=_(),cdr=G().isPrimitive,iB=S(),nB=L(),aB=A(),uB=I(),pdr=M(),Qa=W().factory,gdr=b(),mdr=R(),sB=eB();function ydr(){var r,e,t,i;if(arguments.length===0)t=Qa();else if(arguments.length===1&&iB(arguments[0]))if(e=arguments[0],aB(e,"prng")){if(!nB(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Qa(e);else{if(r=arguments[0],!cdr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!iB(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(aB(e,"prng")){if(!nB(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Qa(e)}else t=Qa()}return r===void 0?i=p:i=c,ne(i,"NAME","exponential"),e&&e.prng?(ne(i,"seed",null),ne(i,"seedLength",null),tB(i,"state",uB(null),pdr),ne(i,"stateLength",null),ne(i,"byteLength",null),ne(i,"toJSON",uB(null)),ne(i,"PRNG",t)):($a(i,"seed",n),$a(i,"seedLength",a),tB(i,"state",v,f),$a(i,"stateLength",s),$a(i,"byteLength",o),ne(i,"toJSON",l),ne(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(y){t.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=mdr(t.state),r===void 0?y.params=[]:y.params=[r],y}function c(){return sB(t,r)}function p(y){return gdr(y)||y<=0?NaN:sB(t,y)}}oB.exports=ydr});var fB=u((AUr,vB)=>{"use strict";var qdr=Jv(),hdr=qdr();vB.exports=hdr});var pB=u((OUr,cB)=>{"use strict";var ddr=w(),lB=fB(),wdr=Jv();ddr(lB,"factory",wdr);cB.exports=lB});var yB=u((SUr,mB)=>{"use strict";var gB=G().isPrimitive;function bdr(r,e){return gB(r)?gB(e)?null:new TypeError("invalid argument. `d2` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `d1` must be a positive number. Value: `"+r+"`.")}mB.exports=bdr});var hB=u((TUr,qB)=>{"use strict";function Edr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}qB.exports=Edr});var zv=u((LUr,SB)=>{"use strict";var De=w(),Ka=P(),dB=_(),wB=S(),bB=L(),EB=A(),NB=I(),Ndr=M(),oi=Yi().factory,AB=b(),Adr=R(),Odr=yB(),OB=hB();function Sdr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=oi();else if(arguments.length===1){if(e=arguments[0],!wB(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(EB(e,"prng")){if(!bB(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");r=oi({prng:e.prng})}else r=oi(e)}else{if(a=arguments[0],s=arguments[1],n=Odr(a,s),n)throw n;if(arguments.length>2){if(e=arguments[2],!wB(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(EB(e,"prng")){if(!bB(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");r=oi({prng:e.prng})}else r=oi(e)}else r=oi()}return a===void 0?i=m:i=q,t=r.PRNG,De(i,"NAME","f"),e&&e.prng?(De(i,"seed",null),De(i,"seedLength",null),dB(i,"state",NB(null),Ndr),De(i,"stateLength",null),De(i,"byteLength",null),De(i,"toJSON",NB(null))):(Ka(i,"seed",o),Ka(i,"seedLength",v),dB(i,"state",c,p),Ka(i,"stateLength",f),Ka(i,"byteLength",l),De(i,"toJSON",y)),De(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function l(){return t.byteLength}function c(){return t.state}function p(g){t.state=g}function y(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=Adr(t.state),a===void 0?g.params=[]:g.params=[a,s],g}function q(){return OB(r,a,s)}function m(g,h){return AB(g)||AB(h)||g<=0||h<=0?NaN:OB(r,g,h)}}SB.exports=Sdr});var LB=u((IUr,TB)=>{"use strict";var Tdr=zv(),Ldr=Tdr();TB.exports=Ldr});var _B=u((PUr,PB)=>{"use strict";var Idr=w(),IB=LB(),Pdr=zv();Idr(IB,"factory",Pdr);PB.exports=IB});var MB=u((_Ur,FB)=>{"use strict";var RB=G().isPrimitive,_dr=x().isPrimitive,Yv=er();function Rdr(r,e,t){return!RB(r)||Yv(r)?new TypeError("invalid argument. First argument must be a positive number primitive and not `NaN`. Value: `"+r+"`."):!RB(e)||Yv(e)?new TypeError("invalid argument. Second argument must be a positive number primitive and not `NaN`. Value: `"+e+"`."):!_dr(t)||Yv(t)?new TypeError("invalid argument. Third argument must be a number primitive and not `NaN`. Value: `"+t+"`."):null}FB.exports=Rdr});var BB=u((RUr,xB)=>{"use strict";var Fdr=Q(),Mdr=B();function xdr(r,e,t,i){return i+t*Fdr(-Mdr(r()),-1/e)}xB.exports=xdr});var $v=u((FUr,HB)=>{"use strict";var ae=w(),ru=P(),CB=_(),jB=S(),VB=L(),GB=A(),UB=I(),Bdr=M(),eu=W().factory,Zv=b(),Cdr=R(),jdr=MB(),WB=BB();function Vdr(){var r,e,t,i,n,a,s;if(arguments.length===0)t=eu();else if(arguments.length===1){if(e=arguments[0],!jB(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(GB(e,"prng")){if(!VB(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=eu(e)}else{if(r=arguments[0],a=arguments[1],s=arguments[2],n=jdr(r,a,s),n)throw n;if(arguments.length>3){if(e=arguments[3],!jB(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(GB(e,"prng")){if(!VB(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=eu(e)}else t=eu()}return r===void 0?i=m:i=q,ae(i,"NAME","frechet"),e&&e.prng?(ae(i,"seed",null),ae(i,"seedLength",null),CB(i,"state",UB(null),Bdr),ae(i,"stateLength",null),ae(i,"byteLength",null),ae(i,"toJSON",UB(null)),ae(i,"PRNG",t)):(ru(i,"seed",o),ru(i,"seedLength",v),CB(i,"state",c,p),ru(i,"stateLength",f),ru(i,"byteLength",l),ae(i,"toJSON",y),ae(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function l(){return t.byteLength}function c(){return t.state}function p(g){t.state=g}function y(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=Cdr(t.state),r===void 0?g.params=[]:g.params=[r,a,s],g}function q(){return WB(t,r,a,s)}function m(g,h,E){return Zv(g)||Zv(h)||Zv(E)||g<=0||h<=0?NaN:WB(t,g,h,E)}}HB.exports=Vdr});var DB=u((MUr,kB)=>{"use strict";var Gdr=$v(),Udr=Gdr();kB.exports=Udr});var zB=u((xUr,JB)=>{"use strict";var Wdr=w(),XB=DB(),Hdr=$v();Wdr(XB,"factory",Hdr);JB.exports=XB});var $B=u((BUr,ZB)=>{"use strict";var kdr=K(),YB=B();function Ddr(r,e){var t=r();return t===0&&(t=r()),kdr(YB(t)/YB(1-e))}ZB.exports=Ddr});var Qv=u((CUr,nC)=>{"use strict";var ue=w(),tu=P(),QB=_(),KB=S(),Xdr=ki().isPrimitive,rC=L(),eC=A(),tC=I(),Jdr=M(),iu=W().factory,zdr=b(),Ydr=R(),iC=$B();function Zdr(){var r,e,t,i;if(arguments.length===0)e=iu();else if(arguments.length===1&&KB(arguments[0]))if(r=arguments[0],eC(r,"prng")){if(!rC(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=iu(r);else{if(i=arguments[0],!Xdr(i))throw new TypeError("invalid argument. First argument must be a probability. Value: `"+i+"`.");if(arguments.length>1){if(r=arguments[1],!KB(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(eC(r,"prng")){if(!rC(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=iu(r)}else e=iu()}return i===void 0?t=p:t=c,ue(t,"NAME","geometric"),r&&r.prng?(ue(t,"seed",null),ue(t,"seedLength",null),QB(t,"state",tC(null),Jdr),ue(t,"stateLength",null),ue(t,"byteLength",null),ue(t,"toJSON",tC(null)),ue(t,"PRNG",e)):(tu(t,"seed",n),tu(t,"seedLength",a),QB(t,"state",v,f),tu(t,"stateLength",s),tu(t,"byteLength",o),ue(t,"toJSON",l),ue(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(y){e.state=y}function l(){var y={};return y.type="PRNG",y.name=t.NAME,y.state=Ydr(e.state),i===void 0?y.params=[]:y.params=[i],y}function c(){return iC(e,i)}function p(y){return zdr(y)||y<0||y>1?NaN:iC(e,y)}}nC.exports=Zdr});var uC=u((jUr,aC)=>{"use strict";var $dr=Qv(),Qdr=$dr();aC.exports=Qdr});var vC=u((VUr,oC)=>{"use strict";var Kdr=w(),sC=uC(),rwr=Qv();Kdr(sC,"factory",rwr);oC.exports=sC});var lC=u((GUr,fC)=>{"use strict";var ewr=x().isPrimitive,twr=G().isPrimitive,iwr=er();function nwr(r,e){return!ewr(r)||iwr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):twr(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`.")}fC.exports=nwr});var gC=u((UUr,pC)=>{"use strict";var cC=B();function awr(r,e,t){return e-t*cC(-cC(r()))}pC.exports=awr});var Kv=u((WUr,EC)=>{"use strict";var se=w(),nu=P(),mC=_(),yC=S(),qC=L(),hC=A(),dC=I(),uwr=M(),au=W().factory,wC=b(),swr=R(),owr=lC(),bC=gC();function vwr(){var r,e,t,i,n,a;if(arguments.length===0)t=au();else if(arguments.length===1){if(e=arguments[0],!yC(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(hC(e,"prng")){if(!qC(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=au(e)}else{if(a=arguments[0],r=arguments[1],n=owr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!yC(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(hC(e,"prng")){if(!qC(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=au(e)}else t=au()}return a===void 0?i=q:i=y,se(i,"NAME","gumbel"),e&&e.prng?(se(i,"seed",null),se(i,"seedLength",null),mC(i,"state",dC(null),uwr),se(i,"stateLength",null),se(i,"byteLength",null),se(i,"toJSON",dC(null)),se(i,"PRNG",t)):(nu(i,"seed",s),nu(i,"seedLength",o),mC(i,"state",l,c),nu(i,"stateLength",v),nu(i,"byteLength",f),se(i,"toJSON",p),se(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function l(){return t.state}function c(m){t.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=swr(t.state),a===void 0?m.params=[]:m.params=[a,r],m}function y(){return bC(t,a,r)}function q(m,g){return wC(m)||wC(g)||g<=0?NaN:bC(t,m,g)}}EC.exports=vwr});var AC=u((HUr,NC)=>{"use strict";var fwr=Kv(),lwr=fwr();NC.exports=lwr});var TC=u((kUr,SC)=>{"use strict";var cwr=w(),OC=AC(),pwr=Kv();cwr(OC,"factory",pwr);SC.exports=OC});var IC=u((DUr,LC)=>{"use strict";var gwr=K();function mwr(r){return gwr(r)===r&&r>=0}LC.exports=mwr});var _C=u((XUr,PC)=>{"use strict";var ywr=IC();PC.exports=ywr});var FC=u((JUr,RC)=>{"use strict";var r1=Ne().isPrimitive;function qwr(r,e,t){return r1(r)?r1(e)?r1(t)?t>r?new RangeError("invalid argument. `n` must be less than or equal to `N`. Value: `"+t+"`."):e>r?new RangeError("invalid argument. `K` must be less than or equal to `N`. Value: `"+e+"`."):null:new TypeError("invalid argument. `n` must be a nonnegative integer. Value: `"+t+"`."):new TypeError("invalid argument. `K` must be a nonnegative integer. Value: `"+e+"`."):new TypeError("invalid argument. `N` must be a nonnegative integer. Value: `"+r+"`.")}RC.exports=qwr});var MC=u((zUr,hwr)=>{hwr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var BC=u((YUr,xC)=>{"use strict";var dwr=b(),wwr=Nr(),bwr=xt(),Ewr=j(),Nwr=MC(),Awr=170;function Owr(r){return dwr(r)?NaN:wwr(r)?r<0?NaN:r<=Awr?Nwr[r]:Ewr:bwr(r+1)}xC.exports=Owr});var jC=u((ZUr,CC)=>{"use strict";var Swr=BC();CC.exports=Swr});var GC=u(($Ur,VC)=>{"use strict";var Xe=jC();function Twr(r,e,t,i){var n,a,s;for(i<t?(n=Xe(t)*Xe(e+t-i)/(Xe(e+t)*Xe(t-i)),s=0):(n=Xe(e)*Xe(i)/(Xe(i-t)*Xe(e+t)),s=i-t),a=r();a>n;)a-=n,n*=(e-s)*(i-s)/((s+1)*(t-i+1+s)),s+=1;return s}VC.exports=Twr});var WC=u((QUr,UC)=>{"use strict";var uu=GC();function Lwr(r,e,t,i){var n,a,s,o;return i>e/2?(s=e-i,2*t<=e?(n=t,a=e-t,o=uu(r,n,a,s),t-o):(a=t,n=e-t,o=uu(r,n,a,s),i-e+t+o)):(s=i,2*t<=e?(n=t,a=e-t,o=uu(r,n,a,s),o):(n=e-t,a=t,o=uu(r,n,a,s),i-o))}UC.exports=Lwr});var t1=u((KUr,ZC)=>{"use strict";var oe=w(),su=P(),HC=_(),kC=S(),DC=L(),XC=A(),JC=I(),Iwr=M(),ou=W().factory,e1=_C(),zC=j(),Pwr=R(),_wr=FC(),YC=WC();function Rwr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=ou();else if(arguments.length===1){if(r=arguments[0],!kC(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(XC(r,"prng")){if(!DC(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=ou(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=_wr(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!kC(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(XC(r,"prng")){if(!DC(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=ou(r)}else e=ou()}return n===void 0?t=m:t=q,oe(t,"NAME","hypergeometric"),r&&r.prng?(oe(t,"seed",null),oe(t,"seedLength",null),HC(t,"state",JC(null),Iwr),oe(t,"stateLength",null),oe(t,"byteLength",null),oe(t,"toJSON",JC(null)),oe(t,"PRNG",e)):(su(t,"seed",o),su(t,"seedLength",v),HC(t,"state",c,p),su(t,"stateLength",f),su(t,"byteLength",l),oe(t,"toJSON",y),oe(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function l(){return e.byteLength}function c(){return e.state}function p(g){e.state=g}function y(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Pwr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function q(){return YC(e,n,a,s)}function m(g,h,E){return g===zC||h===zC||!e1(g)||!e1(h)||!e1(E)||E>g?NaN:YC(e,g,h,E)}}ZC.exports=Rwr});var QC=u((rWr,$C)=>{"use strict";var Fwr=t1(),Mwr=Fwr();$C.exports=Mwr});var ej=u((eWr,rj)=>{"use strict";var xwr=w(),KC=QC(),Bwr=t1();xwr(KC,"factory",Bwr);rj.exports=KC});var nj=u((tWr,ij)=>{"use strict";var tj=G().isPrimitive;function Cwr(r,e){return tj(r)?tj(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}ij.exports=Cwr});var i1=u((iWr,lj)=>{"use strict";var Je=w(),vu=P(),aj=_(),uj=S(),sj=L(),oj=A(),vj=I(),jwr=M(),vi=ti().factory,fj=b(),Vwr=R(),Gwr=nj();function Uwr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=vi();else if(arguments.length===1){if(i=arguments[0],!uj(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(oj(i,"prng")){if(!sj(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");r=vi({prng:i.prng})}else r=vi(i)}else{if(e=arguments[0],t=arguments[1],s=Gwr(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!uj(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(oj(i,"prng")){if(!sj(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");r=vi(e,t,{prng:i.prng})}else r=vi(e,t,i)}else r=vi(e,t)}return e===void 0?a=m:a=q,n=r.PRNG,Je(a,"NAME","invgamma"),i&&i.prng?(Je(a,"seed",null),Je(a,"seedLength",null),aj(a,"state",vj(null),jwr),Je(a,"stateLength",null),Je(a,"byteLength",null),Je(a,"toJSON",vj(null))):(vu(a,"seed",o),vu(a,"seedLength",v),aj(a,"state",c,p),vu(a,"stateLength",f),vu(a,"byteLength",l),Je(a,"toJSON",y)),Je(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function l(){return n.byteLength}function c(){return n.state}function p(g){n.state=g}function y(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=Vwr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function q(){return 1/r()}function m(g,h){return fj(g)||fj(h)||g<=0||h<=0?NaN:1/r(g,h)}}lj.exports=Uwr});var pj=u((nWr,cj)=>{"use strict";var Wwr=i1(),Hwr=Wwr();cj.exports=Hwr});var yj=u((aWr,mj)=>{"use strict";var kwr=w(),gj=pj(),Dwr=i1();kwr(gj,"factory",Dwr);mj.exports=gj});var dj=u((uWr,hj)=>{"use strict";var qj=G().isPrimitive;function Xwr(r,e){return qj(r)?qj(e)?null:new TypeError("invalid argument. `b` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `a` must be a positive number. Value: `"+r+"`.")}hj.exports=Xwr});var Ej=u((sWr,bj)=>{"use strict";var wj=Q();function Jwr(r,e,t){var i=r();return wj(1-wj(1-i,1/t),1/e)}bj.exports=Jwr});var n1=u((oWr,Pj)=>{"use strict";var ve=w(),fu=P(),Nj=_(),Aj=S(),Oj=L(),Sj=A(),Tj=I(),zwr=M(),lu=W().factory,Lj=b(),Ywr=R(),Zwr=dj(),Ij=Ej();function $wr(){var r,e,t,i,n,a;if(arguments.length===0)e=lu();else if(arguments.length===1){if(r=arguments[0],!Aj(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Sj(r,"prng")){if(!Oj(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=lu(r)}else{if(n=arguments[0],a=arguments[1],i=Zwr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Aj(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Sj(r,"prng")){if(!Oj(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=lu(r)}else e=lu()}return n===void 0?t=q:t=y,ve(t,"NAME","kumaraswamy"),r&&r.prng?(ve(t,"seed",null),ve(t,"seedLength",null),Nj(t,"state",Tj(null),zwr),ve(t,"stateLength",null),ve(t,"byteLength",null),ve(t,"toJSON",Tj(null)),ve(t,"PRNG",e)):(fu(t,"seed",s),fu(t,"seedLength",o),Nj(t,"state",l,c),fu(t,"stateLength",v),fu(t,"byteLength",f),ve(t,"toJSON",p),ve(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Ywr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function y(){return Ij(e,n,a)}function q(m,g){return Lj(m)||Lj(g)||m<=0||g<=0?NaN:Ij(e,m,g)}}Pj.exports=$wr});var Rj=u((vWr,_j)=>{"use strict";var Qwr=n1(),Kwr=Qwr();_j.exports=Kwr});var xj=u((fWr,Mj)=>{"use strict";var rbr=w(),Fj=Rj(),ebr=n1();rbr(Fj,"factory",ebr);Mj.exports=Fj});var Cj=u((lWr,Bj)=>{"use strict";var tbr=x().isPrimitive,ibr=G().isPrimitive,nbr=er();function abr(r,e){return!tbr(r)||nbr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):ibr(e)?null:new TypeError("invalid argument. `b` must be a positive number. Value: `"+e+"`.")}Bj.exports=abr});var Vj=u((cWr,jj)=>{"use strict";var ubr=Ba(),sbr=$(),obr=B();function vbr(r,e,t){var i=r()-.5;return e-t*ubr(i)*obr(1-2*sbr(i))}jj.exports=vbr});var a1=u((pWr,Jj)=>{"use strict";var fe=w(),cu=P(),Gj=_(),Uj=S(),Wj=L(),Hj=A(),kj=I(),fbr=M(),pu=W().factory,Dj=b(),lbr=R(),cbr=Cj(),Xj=Vj();function pbr(){var r,e,t,i,n,a;if(arguments.length===0)e=pu();else if(arguments.length===1){if(r=arguments[0],!Uj(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Hj(r,"prng")){if(!Wj(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=pu(r)}else{if(n=arguments[0],a=arguments[1],i=cbr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Uj(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Hj(r,"prng")){if(!Wj(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=pu(r)}else e=pu()}return n===void 0?t=q:t=y,fe(t,"NAME","laplace"),r&&r.prng?(fe(t,"seed",null),fe(t,"seedLength",null),Gj(t,"state",kj(null),fbr),fe(t,"stateLength",null),fe(t,"byteLength",null),fe(t,"toJSON",kj(null)),fe(t,"PRNG",e)):(cu(t,"seed",s),cu(t,"seedLength",o),Gj(t,"state",l,c),cu(t,"stateLength",v),cu(t,"byteLength",f),fe(t,"toJSON",p),fe(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=lbr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function y(){return Xj(e,n,a)}function q(m,g){return Dj(m)||Dj(g)||g<=0?NaN:Xj(e,m,g)}}Jj.exports=pbr});var Yj=u((gWr,zj)=>{"use strict";var gbr=a1(),mbr=gbr();zj.exports=mbr});var Qj=u((mWr,$j)=>{"use strict";var ybr=w(),Zj=Yj(),qbr=a1();ybr(Zj,"factory",qbr);$j.exports=Zj});var rV=u((yWr,Kj)=>{"use strict";var hbr=x().isPrimitive,dbr=G().isPrimitive,wbr=er();function bbr(r,e){return!hbr(r)||wbr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):dbr(e)?null:new TypeError("invalid argument. `c` must be a positive number. Value: `"+e+"`.")}Kj.exports=bbr});var tV=u((qWr,eV)=>{"use strict";function Ebr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}eV.exports=Ebr});var nV=u((hWr,iV)=>{"use strict";function Nbr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}iV.exports=Nbr});var uV=u((dWr,aV)=>{"use strict";function Abr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}aV.exports=Abr});var oV=u((wWr,sV)=>{"use strict";function Obr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}sV.exports=Obr});var fV=u((bWr,vV)=>{"use strict";function Sbr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}vV.exports=Sbr});var gV=u((EWr,pV)=>{"use strict";var Tbr=b(),lV=D(),cV=B(),Lbr=j(),Ibr=Z(),Pbr=tV(),_br=nV(),Rbr=uV(),Fbr=oV(),Mbr=fV(),xbr=.08913147449493408,Bbr=2.249481201171875,Cbr=.807220458984375,jbr=.9399557113647461,Vbr=.9836282730102539;function Gbr(r){var e,t,i,n,a,s;return Tbr(r)?NaN:r===1?Lbr:r===-1?Ibr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),s=Pbr(t),e*(a*xbr+a*s)):n>=.25?(a=lV(-2*cV(n)),n-=.25,s=_br(n),e*(a/(Bbr+s))):(n=lV(-cV(n)),n<3?(i=n-1.125,s=Rbr(i),e*(Cbr*n+s*n)):n<6?(i=n-3,s=Fbr(i),e*(jbr*n+s*n)):(i=n-6,s=Mbr(i),e*(Vbr*n+s*n))))}pV.exports=Gbr});var u1=u((NWr,mV)=>{"use strict";var Ubr=gV();mV.exports=Ubr});var qV=u((AWr,yV)=>{"use strict";var Wbr=u1(),s1=b(),Hbr=D();function kbr(r,e,t){var i,n;return s1(e)||s1(t)||s1(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*Hbr(2),i+n*Wbr(2*r-1))}yV.exports=kbr});var dV=u((OWr,hV)=>{"use strict";var Dbr=I(),Xbr=Uv().factory,Jbr=u1(),o1=b(),zbr=D();function Ybr(r,e){var t,i;if(o1(r)||o1(e)||e<0)return Dbr(NaN);return e===0&&Xbr(r),t=r,i=e*zbr(2),n;function n(a){return o1(a)||a<0||a>1?NaN:t+i*Jbr(2*a-1)}}hV.exports=Ybr});var EV=u((SWr,bV)=>{"use strict";var Zbr=w(),wV=qV(),$br=dV();Zbr(wV,"factory",$br);bV.exports=wV});var AV=u((TWr,NV)=>{"use strict";var Qbr=EV();function Kbr(r,e,t){var i=Qbr(1-r()/2,0,1);return e+t/(i*i)}NV.exports=Kbr});var v1=u((LWr,RV)=>{"use strict";var le=w(),gu=P(),OV=_(),SV=S(),TV=L(),LV=A(),IV=I(),rEr=M(),mu=W().factory,PV=b(),eEr=R(),tEr=rV(),_V=AV();function iEr(){var r,e,t,i,n,a;if(arguments.length===0)e=mu();else if(arguments.length===1){if(r=arguments[0],!SV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(LV(r,"prng")){if(!TV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=mu(r)}else{if(n=arguments[0],a=arguments[1],i=tEr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!SV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(LV(r,"prng")){if(!TV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=mu(r)}else e=mu()}return n===void 0?t=q:t=y,le(t,"NAME","levy"),r&&r.prng?(le(t,"seed",null),le(t,"seedLength",null),OV(t,"state",IV(null),rEr),le(t,"stateLength",null),le(t,"byteLength",null),le(t,"toJSON",IV(null)),le(t,"PRNG",e)):(gu(t,"seed",s),gu(t,"seedLength",o),OV(t,"state",l,c),gu(t,"stateLength",v),gu(t,"byteLength",f),le(t,"toJSON",p),le(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=eEr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function y(){return _V(e,n,a)}function q(m,g){return PV(m)||PV(g)||g<=0?NaN:_V(e,m,g)}}RV.exports=iEr});var MV=u((IWr,FV)=>{"use strict";var nEr=v1(),aEr=nEr();FV.exports=aEr});var CV=u((PWr,BV)=>{"use strict";var uEr=w(),xV=MV(),sEr=v1();uEr(xV,"factory",sEr);BV.exports=xV});var VV=u((_Wr,jV)=>{"use strict";var oEr=x().isPrimitive,vEr=G().isPrimitive,fEr=er();function lEr(r,e){return!oEr(r)||fEr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):vEr(e)?null:new TypeError("invalid argument. `s` must be a positive number. Value: `"+e+"`.")}jV.exports=lEr});var UV=u((RWr,GV)=>{"use strict";var cEr=B();function pEr(r,e,t){var i=r();return e+t*cEr(i/(1-i))}GV.exports=pEr});var f1=u((FWr,YV)=>{"use strict";var ce=w(),yu=P(),WV=_(),HV=S(),kV=L(),DV=A(),XV=I(),gEr=M(),qu=W().factory,JV=b(),mEr=R(),yEr=VV(),zV=UV();function qEr(){var r,e,t,i,n,a;if(arguments.length===0)e=qu();else if(arguments.length===1){if(r=arguments[0],!HV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(DV(r,"prng")){if(!kV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=qu(r)}else{if(n=arguments[0],a=arguments[1],i=yEr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!HV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(DV(r,"prng")){if(!kV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=qu(r)}else e=qu()}return n===void 0?t=q:t=y,ce(t,"NAME","logistic"),r&&r.prng?(ce(t,"seed",null),ce(t,"seedLength",null),WV(t,"state",XV(null),gEr),ce(t,"stateLength",null),ce(t,"byteLength",null),ce(t,"toJSON",XV(null)),ce(t,"PRNG",e)):(yu(t,"seed",s),yu(t,"seedLength",o),WV(t,"state",l,c),yu(t,"stateLength",v),yu(t,"byteLength",f),ce(t,"toJSON",p),ce(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=mEr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function y(){return zV(e,n,a)}function q(m,g){return JV(m)||JV(g)||g<=0?NaN:zV(e,m,g)}}YV.exports=qEr});var $V=u((MWr,ZV)=>{"use strict";var hEr=f1(),dEr=hEr();ZV.exports=dEr});var rG=u((xWr,KV)=>{"use strict";var wEr=w(),QV=$V(),bEr=f1();wEr(QV,"factory",bEr);KV.exports=QV});var tG=u((BWr,eG)=>{"use strict";var EEr=x().isPrimitive,NEr=G().isPrimitive,AEr=er();function OEr(r,e){return!EEr(r)||AEr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):NEr(e)?null:new TypeError("invalid argument. `sigma` must be a positive number. Value: `"+e+"`.")}eG.exports=OEr});var nG=u((CWr,iG)=>{"use strict";var SEr=ur();function TEr(r,e,t){return SEr(e+t*r())}iG.exports=TEr});var l1=u((jWr,cG)=>{"use strict";var ze=w(),hu=P(),aG=_(),uG=S(),sG=L(),oG=A(),vG=I(),LEr=M(),fi=Ge().factory,fG=b(),IEr=R(),PEr=tG(),lG=nG();function _Er(){var r,e,t,i,n,a,s;if(arguments.length===0)e=fi();else if(arguments.length===1){if(t=arguments[0],!uG(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(oG(t,"prng")){if(!sG(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=fi({prng:t.prng})}else e=fi(t)}else{if(s=arguments[0],r=arguments[1],a=PEr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!uG(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(oG(t,"prng")){if(!sG(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=fi({prng:t.prng})}else e=fi(t)}else e=fi()}return s===void 0?n=m:n=q,i=e.PRNG,ze(n,"NAME","lognormal"),t&&t.prng?(ze(n,"seed",null),ze(n,"seedLength",null),aG(n,"state",vG(null),LEr),ze(n,"stateLength",null),ze(n,"byteLength",null),ze(n,"toJSON",vG(null))):(hu(n,"seed",o),hu(n,"seedLength",v),aG(n,"state",c,p),hu(n,"stateLength",f),hu(n,"byteLength",l),ze(n,"toJSON",y)),ze(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function y(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=IEr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function q(){return lG(e,s,r)}function m(g,h){return fG(g)||fG(h)||h<=0?NaN:lG(e,g,h)}}cG.exports=_Er});var gG=u((VWr,pG)=>{"use strict";var REr=l1(),FEr=REr();pG.exports=FEr});var qG=u((GWr,yG)=>{"use strict";var MEr=w(),mG=gG(),xEr=l1();MEr(mG,"factory",xEr);yG.exports=mG});var c1=u((UWr,hG)=>{"use strict";var BEr=_t(),CEr=K(),jEr=BEr-1;function VEr(){var r=CEr(1+jEr*Math.random());return r|0}hG.exports=VEr});var m1=u((WWr,NG)=>{"use strict";var pe=w(),Ye=P(),dG=_(),p1=A(),GEr=S(),UEr=nr().isPrimitive,WEr=_r(),HEr=zr().isPrimitive,wG=gn(),du=_t(),qr=st(),li=xe(),kEr=R(),bG=c1(),g1=du-1|0,DEr=du-1|0,XEr=16807,wu=1,bu=2,Ze=2,hr=4,Zi=5;function EG(r,e){var t;return e?t="option":t="argument",r.length<Zi+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==wu?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+wu+". Actual: "+r[0]+"."):r[1]!==bu?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+bu+". Actual: "+r[1]+"."):r[Ze]!==1?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+1 .toString()+". Actual: "+r[Ze]+"."):r[hr]!==r.length-Zi?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-Zi)+". Actual: "+r[hr]+"."):null}function JEr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!GEr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(p1(r,"copy")&&(i.copy=r.copy,!UEr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(p1(r,"state")){if(t=r.state,i.state=!0,!wG(t))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+t+"`.");if(s=EG(t,!0),s)throw s;i.copy===!1?e=t:(e=new qr(t.length),li(t.length,t,1,e,1)),t=new qr(e.buffer,e.byteOffset+(Ze+1)*e.BYTES_PER_ELEMENT,1),n=new qr(e.buffer,e.byteOffset+(hr+1)*e.BYTES_PER_ELEMENT,t[hr])}if(n===void 0)if(p1(r,"seed"))if(n=r.seed,i.seed=!0,HEr(n)){if(n>DEr)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+n+"`.");n|=0}else if(WEr(n)&&n.length>0)a=n.length,e=new qr(Zi+a),e[0]=wu,e[1]=bu,e[Ze]=1,e[hr]=a,li.ndarray(a,n,1,0,e,1,hr+1),t=new qr(e.buffer,e.byteOffset+(Ze+1)*e.BYTES_PER_ELEMENT,1),n=new qr(e.buffer,e.byteOffset+(hr+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+n+"`.");else n=bG()|0}else n=bG()|0;return t===void 0&&(e=new qr(Zi+1),e[0]=wu,e[1]=bu,e[Ze]=1,e[hr]=1,e[hr+1]=n,t=new qr(e.buffer,e.byteOffset+(Ze+1)*e.BYTES_PER_ELEMENT,1),n=new qr(e.buffer,e.byteOffset+(hr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),pe(q,"NAME","minstd"),Ye(q,"seed",o),Ye(q,"seedLength",v),dG(q,"state",c,p),Ye(q,"stateLength",f),Ye(q,"byteLength",l),pe(q,"toJSON",y),pe(q,"MIN",1),pe(q,"MAX",du-1),pe(q,"normalized",m),pe(m,"NAME",q.NAME),Ye(m,"seed",o),Ye(m,"seedLength",v),dG(m,"state",c,p),Ye(m,"stateLength",f),Ye(m,"byteLength",l),pe(m,"toJSON",y),pe(m,"MIN",(q.MIN-1)/g1),pe(m,"MAX",(q.MAX-1)/g1),q;function o(){var g=e[hr];return li(g,n,1,new qr(g),1)}function v(){return e[hr]}function f(){return e.length}function l(){return e.byteLength}function c(){var g=e.length;return li(g,e,1,new qr(g),1)}function p(g){var h;if(!wG(g))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+g+"`.");if(h=EG(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?li(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new qr(g.length)),li(g.length,g,1,e,1)),t=new qr(e.buffer,e.byteOffset+(Ze+1)*e.BYTES_PER_ELEMENT,1),n=new qr(e.buffer,e.byteOffset+(hr+1)*e.BYTES_PER_ELEMENT,e[hr])}function y(){var g={};return g.type="PRNG",g.name=q.NAME,g.state=kEr(e),g.params=[],g}function q(){var g=t[0]|0;return g=XEr*g%du|0,t[0]=g,g|0}function m(){return(q()-1)/g1}}NG.exports=JEr});var OG=u((HWr,AG)=>{"use strict";var zEr=m1(),YEr=c1(),ZEr=zEr({seed:YEr()});AG.exports=ZEr});var LG=u((kWr,TG)=>{"use strict";var $Er=w(),SG=OG(),QEr=m1();$Er(SG,"factory",QEr);TG.exports=SG});var PG=u((DWr,IG)=>{"use strict";var KEr=b(),rNr=8;function eNr(r,e,t){var i,n;for(n=0;n<rNr;n++)if(i=r(),KEr(i))throw new Error("unexpected error. PRNG returned `NaN`.");for(n=t-1;n>=0;n--)e[n]=r();return e}IG.exports=eNr});var y1=u((XWr,_G)=>{"use strict";var tNr=_t(),iNr=K(),nNr=tNr-1;function aNr(){var r=iNr(1+nNr*Math.random());return r|0}_G.exports=aNr});var d1=u((JWr,CG)=>{"use strict";var ge=w(),$e=P(),RG=_(),q1=A(),uNr=S(),sNr=nr().isPrimitive,oNr=_r(),vNr=zr().isPrimitive,FG=gn(),ci=xe(),fNr=K(),dr=st(),$i=_t(),lNr=R(),MG=PG(),xG=y1(),h1=$i-1|0,cNr=$i-1|0,pNr=16807,br=32,Au=1,Ou=3,Qe=2,pi=br+3,wr=br+6,Qi=br+7,Eu=pi+1,Nu=pi+2;function BG(r,e){var t;return e?t="option":t="argument",r.length<Qi+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==Au?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+Au+". Actual: "+r[0]+"."):r[1]!==Ou?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+Ou+". Actual: "+r[1]+"."):r[Qe]!==br?new RangeError("invalid "+t+". `state` array has an incompatible table length. Expected: "+br+". Actual: "+r[Qe]+"."):r[pi]!==2?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+2 .toString()+". Actual: "+r[pi]+"."):r[wr]!==r.length-Qi?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-Qi)+". Actual: "+r[wr]+"."):null}function gNr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!uNr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(q1(r,"copy")&&(i.copy=r.copy,!sNr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(q1(r,"state")){if(t=r.state,i.state=!0,!FG(t))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+t+"`.");if(s=BG(t,!0),s)throw s;i.copy===!1?e=t:(e=new dr(t.length),ci(t.length,t,1,e,1)),t=new dr(e.buffer,e.byteOffset+(Qe+1)*e.BYTES_PER_ELEMENT,br),n=new dr(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,t[wr])}if(n===void 0)if(q1(r,"seed"))if(n=r.seed,i.seed=!0,vNr(n)){if(n>cNr)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+n+"`.");n|=0}else if(oNr(n)&&n.length>0)a=n.length,e=new dr(Qi+a),e[0]=Au,e[1]=Ou,e[Qe]=br,e[pi]=2,e[Nu]=n[0],e[wr]=a,ci.ndarray(a,n,1,0,e,1,wr+1),t=new dr(e.buffer,e.byteOffset+(Qe+1)*e.BYTES_PER_ELEMENT,br),n=new dr(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,a),t=MG(q,t,br),e[Eu]=t[0];else throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+n+"`.");else n=xG()|0}else n=xG()|0;return t===void 0&&(e=new dr(Qi+1),e[0]=Au,e[1]=Ou,e[Qe]=br,e[pi]=2,e[Nu]=n,e[wr]=1,e[wr+1]=n,t=new dr(e.buffer,e.byteOffset+(Qe+1)*e.BYTES_PER_ELEMENT,br),n=new dr(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,1),t=MG(q,t,br),e[Eu]=t[0]),ge(m,"NAME","minstd-shuffle"),$e(m,"seed",o),$e(m,"seedLength",v),RG(m,"state",c,p),$e(m,"stateLength",f),$e(m,"byteLength",l),ge(m,"toJSON",y),ge(m,"MIN",1),ge(m,"MAX",$i-1),ge(m,"normalized",g),ge(g,"NAME",m.NAME),$e(g,"seed",o),$e(g,"seedLength",v),RG(g,"state",c,p),$e(g,"stateLength",f),$e(g,"byteLength",l),ge(g,"toJSON",y),ge(g,"MIN",(m.MIN-1)/h1),ge(g,"MAX",(m.MAX-1)/h1),m;function o(){var h=e[wr];return ci(h,n,1,new dr(h),1)}function v(){return e[wr]}function f(){return e.length}function l(){return e.byteLength}function c(){var h=e.length;return ci(h,e,1,new dr(h),1)}function p(h){var E;if(!FG(h))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+h+"`.");if(E=BG(h,!1),E)throw E;i.copy===!1?i.state&&h.length===e.length?ci(h.length,h,1,e,1):(e=h,i.state=!0):(h.length!==e.length&&(e=new dr(h.length)),ci(h.length,h,1,e,1)),t=new dr(e.buffer,e.byteOffset+(Qe+1)*e.BYTES_PER_ELEMENT,br),n=new dr(e.buffer,e.byteOffset+(wr+1)*e.BYTES_PER_ELEMENT,e[wr])}function y(){var h={};return h.type="PRNG",h.name=m.NAME,h.state=lNr(e),h.params=[],h}function q(){var h=e[Nu]|0;return h=pNr*h%$i|0,e[Nu]=h,h|0}function m(){var h,E;return h=e[Eu],E=fNr(br*(h/$i)),h=t[E],e[Eu]=h,t[E]=q(),h}function g(){return(m()-1)/h1}}CG.exports=gNr});var VG=u((zWr,jG)=>{"use strict";var mNr=d1(),yNr=y1(),qNr=mNr({seed:yNr()});jG.exports=qNr});var WG=u((YWr,UG)=>{"use strict";var hNr=w(),GG=VG(),dNr=d1();hNr(GG,"factory",dNr);UG.exports=GG});var kG=u((ZWr,HG)=>{"use strict";var wNr=ur();function bNr(r,e){for(var t=r(),i=1;t>wNr(-e);)i+=1,t*=r();return i-1}HG.exports=bNr});var XG=u(($Wr,DG)=>{"use strict";var ENr=K();function NNr(r){return ENr(r)===r&&r<0}DG.exports=NNr});var zG=u((QWr,JG)=>{"use strict";var ANr=XG();JG.exports=ANr});var ZG=u((KWr,YG)=>{"use strict";var ONr=zG(),SNr=Fi();function TNr(r){return ONr(r)?NaN:SNr(r+1)}YG.exports=TNr});var QG=u((rHr,$G)=>{"use strict";var LNr=ZG();$G.exports=LNr});var tU=u((eHr,eU)=>{"use strict";var INr=QG(),KG=K(),PNr=Ba(),_Nr=D(),rU=$(),Su=B(),RNr=ko(),FNr=1/12,MNr=1/360;function xNr(r,e){var t,i,n,a,s,o,v,f,l,c;for(t=_Nr(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,s=-3.6224/(v-2)+.9277,n=.86*s;;){if(c=r(),c<=n)return l=c/s-.43,l*=2*o/(.5-rU(l))+v,l+=e+.445,KG(l);if(c>=s?l=r()-.5:(l=c/s-.93,l=PNr(l)*.5-l,c=s*r()),a=.5-rU(l),(a>=.013||a>=c)&&(f=KG((2*o/a+v)*l+e+.445),c*=i/(o/(a*a)+v),l=(f+.5)*Su(e/f),l+=-e-RNr+f,l-=(FNr-MNr/(f*f))/f,f>=10&&l>=Su(c*t)||(l=f*Su(e)-e-INr(f),f>=0&&f<=9&&l>=Su(c))))return f}}eU.exports=xNr});var nU=u((tHr,iU)=>{"use strict";var BNr=kG(),CNr=tU();function jNr(r,e){return e<30?BNr(r,e):CNr(r,e)}iU.exports=jNr});var w1=u((iHr,lU)=>{"use strict";var me=w(),Tu=P(),aU=_(),VNr=G().isPrimitive,uU=S(),sU=L(),oU=A(),vU=I(),GNr=M(),Lu=W().factory,UNr=b(),WNr=R(),fU=nU();function HNr(){var r,e,t,i;if(arguments.length===0)t=Lu();else if(arguments.length===1&&uU(arguments[0]))if(e=arguments[0],oU(e,"prng")){if(!sU(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Lu(e);else{if(r=arguments[0],!VNr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!uU(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(oU(e,"prng")){if(!sU(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Lu(e)}else t=Lu()}return r===void 0?i=p:i=c,me(i,"NAME","poisson"),e&&e.prng?(me(i,"seed",null),me(i,"seedLength",null),aU(i,"state",vU(null),GNr),me(i,"stateLength",null),me(i,"byteLength",null),me(i,"toJSON",vU(null)),me(i,"PRNG",t)):(Tu(i,"seed",n),Tu(i,"seedLength",a),aU(i,"state",v,f),Tu(i,"stateLength",s),Tu(i,"byteLength",o),me(i,"toJSON",l),me(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(y){t.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=WNr(t.state),r===void 0?y.params=[]:y.params=[r],y}function c(){return fU(t,r)}function p(y){return UNr(y)||y<=0?NaN:fU(t,y)}}lU.exports=HNr});var pU=u((nHr,cU)=>{"use strict";var kNr=w1(),DNr=kNr();cU.exports=DNr});var b1=u((aHr,mU)=>{"use strict";var XNr=w(),gU=pU(),JNr=w1();XNr(gU,"factory",JNr);mU.exports=gU});var qU=u((uHr,yU)=>{"use strict";var zNr=G().isPrimitive,YNr=x().isPrimitive,ZNr=er();function $Nr(r,e){return zNr(r)?!YNr(e)||ZNr(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):e<=0||e>=1?new RangeError("invalid argument. Second argument must be on the interval `(0,1)`. Value: `"+e+"`."):null:new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.")}yU.exports=$Nr});var O1=u((sHr,OU)=>{"use strict";var Ke=w(),Iu=P(),hU=_(),gi=A(),dU=S(),E1=Hr(),wU=nr().isPrimitive,bU=L(),EU=I(),QNr=M(),NU=b(),mi=b1().factory,Pu=ti().factory,N1=xe(),A1=sr(),AU=Rt(),KNr=R(),rAr=qU();function eAr(){var r,e,t,i,n,a,s,o,v,f;if(s=!0,arguments.length===0)i={copy:!1},t=mi(i);else if(arguments.length===1){if(i=arguments[0],!dU(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(gi(i,"copy")&&!wU(i.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+i.copy+"`.");if(gi(i,"prng")){if(!bU(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");t=mi({prng:i.prng})}else{if(gi(i,"state")&&!E1(i.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+i.state+"`.");i=AU(i,1),i.copy===!1?s=!1:i.state&&(i.state=N1(i.state.length,i.state,1,new A1(i.state.length),1)),i.copy=!1,t=mi(i)}}else{if(f=arguments[0],v=arguments[1],o=rAr(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!dU(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(gi(i,"copy")&&!wU(i.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+i.copy+"`.");if(gi(i,"prng")){if(!bU(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");t=mi({prng:i.prng})}else{if(gi(i,"state")&&!E1(i.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+i.state+"`.");i=AU(i,1),i.copy===!1?s=!1:i.state&&(i.state=N1(i.state.length,i.state,1,new A1(i.state.length),1)),i.copy=!1,t=mi(i)}}else i={copy:!1},t=mi(i)}return i&&i.prng?f===void 0?r=Pu({prng:i.prng}):r=Pu(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=Pu({state:e,copy:!1}):r=Pu(f,v/(1-v),{state:e,copy:!1})),f===void 0?n=E:n=h,a=t.PRNG,Ke(n,"NAME","negative-binomial"),i&&i.prng?(Ke(n,"seed",null),Ke(n,"seedLength",null),hU(n,"state",EU(null),QNr),Ke(n,"stateLength",null),Ke(n,"byteLength",null),Ke(n,"toJSON",EU(null))):(Iu(n,"seed",l),Iu(n,"seedLength",c),hU(n,"state",q,m),Iu(n,"stateLength",p),Iu(n,"byteLength",y),Ke(n,"toJSON",g)),Ke(n,"PRNG",a),n;function l(){return a.seed}function c(){return a.seedLength}function p(){return a.stateLength}function y(){return a.byteLength}function q(){return a.state}function m(N){if(!E1(N))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+N+"`.");s&&(N=N1(N.length,N,1,new A1(N.length),1)),a.state=N}function g(){var N={};return N.type="PRNG",N.name=n.NAME,N.state=KNr(a.state),f===void 0?N.params=[]:N.params=[f,v],N}function h(){return t(r())}function E(N,C){return NU(N)||NU(C)||C<=0||C>=1?NaN:t(r(N,C/(1-C)))}}OU.exports=eAr});var TU=u((oHr,SU)=>{"use strict";var tAr=O1(),iAr=tAr();SU.exports=iAr});var PU=u((vHr,IU)=>{"use strict";var nAr=w(),LU=TU(),aAr=O1();nAr(LU,"factory",aAr);IU.exports=LU});var RU=u((fHr,_U)=>{"use strict";var uAr=x().isPrimitive,sAr=G().isPrimitive,oAr=er();function vAr(r,e){return!uAr(r)||oAr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):sAr(e)?null:new TypeError("invalid argument. `sigma` must be a positive number. Value: `"+e+"`.")}_U.exports=vAr});var MU=u((lHr,FU)=>{"use strict";function fAr(r,e,t){return e+t*r()}FU.exports=fAr});var S1=u((cHr,WU)=>{"use strict";var rt=w(),_u=P(),xU=_(),BU=S(),CU=L(),jU=A(),VU=I(),lAr=M(),yi=Ge().factory,GU=b(),cAr=R(),pAr=RU(),UU=MU();function gAr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=yi();else if(arguments.length===1){if(t=arguments[0],!BU(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(jU(t,"prng")){if(!CU(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=yi({prng:t.prng})}else e=yi(t)}else{if(s=arguments[0],r=arguments[1],a=pAr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!BU(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(jU(t,"prng")){if(!CU(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=yi({prng:t.prng})}else e=yi(t)}else e=yi()}return s===void 0?n=m:n=q,i=e.PRNG,rt(n,"NAME","normal"),t&&t.prng?(rt(n,"seed",null),rt(n,"seedLength",null),xU(n,"state",VU(null),lAr),rt(n,"stateLength",null),rt(n,"byteLength",null),rt(n,"toJSON",VU(null))):(_u(n,"seed",o),_u(n,"seedLength",v),xU(n,"state",c,p),_u(n,"stateLength",f),_u(n,"byteLength",l),rt(n,"toJSON",y)),rt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function y(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=cAr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function q(){return UU(e,s,r)}function m(g,h){return GU(g)||GU(h)||h<=0?NaN:UU(e,g,h)}}WU.exports=gAr});var kU=u((pHr,HU)=>{"use strict";var mAr=S1(),yAr=mAr();HU.exports=yAr});var JU=u((gHr,XU)=>{"use strict";var qAr=w(),DU=kU(),hAr=S1();qAr(DU,"factory",hAr);XU.exports=DU});var ZU=u((mHr,YU)=>{"use strict";var zU=G().isPrimitive;function dAr(r,e){return zU(r)?zU(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}YU.exports=dAr});var QU=u((yHr,$U)=>{"use strict";var wAr=Q();function bAr(r,e,t){return t/wAr(r(),1/e)}$U.exports=bAr});var T1=u((qHr,uW)=>{"use strict";var ye=w(),Ru=P(),KU=_(),rW=S(),eW=L(),tW=A(),iW=I(),EAr=M(),Fu=W().factory,nW=b(),NAr=R(),AAr=ZU(),aW=QU();function OAr(){var r,e,t,i,n,a;if(arguments.length===0)i=Fu();else if(arguments.length===1){if(t=arguments[0],!rW(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(tW(t,"prng")){if(!eW(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");i=t.prng}else i=Fu(t)}else{if(r=arguments[0],e=arguments[1],a=AAr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!rW(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(tW(t,"prng")){if(!eW(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");i=t.prng}else i=Fu(t)}else i=Fu()}return r===void 0?n=q:n=y,ye(n,"NAME","pareto-type1"),t&&t.prng?(ye(n,"seed",null),ye(n,"seedLength",null),KU(n,"state",iW(null),EAr),ye(n,"stateLength",null),ye(n,"byteLength",null),ye(n,"toJSON",iW(null)),ye(n,"PRNG",i)):(Ru(n,"seed",s),Ru(n,"seedLength",o),KU(n,"state",l,c),Ru(n,"stateLength",v),Ru(n,"byteLength",f),ye(n,"toJSON",p),ye(n,"PRNG",i),i=i.normalized),n;function s(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function l(){return i.state}function c(m){i.state=m}function p(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=NAr(i.state),r===void 0?m.params=[]:m.params=[r,e],m}function y(){return aW(i,r,e)}function q(m,g){return nW(m)||nW(g)||m<=0||g<=0?NaN:aW(i,m,g)}}uW.exports=OAr});var oW=u((hHr,sW)=>{"use strict";var SAr=T1(),TAr=SAr();sW.exports=TAr});var lW=u((dHr,fW)=>{"use strict";var LAr=w(),vW=oW(),IAr=T1();LAr(vW,"factory",IAr);fW.exports=vW});var pW=u((wHr,cW)=>{"use strict";var PAr=D(),_Ar=B();function RAr(r,e){return e*PAr(-2*_Ar(r()))}cW.exports=RAr});var L1=u((bHr,wW)=>{"use strict";var qe=w(),Mu=P(),gW=_(),FAr=G().isPrimitive,mW=S(),yW=L(),qW=A(),hW=I(),MAr=M(),xu=W().factory,xAr=b(),BAr=R(),dW=pW();function CAr(){var r,e,t,i;if(arguments.length===0)t=xu();else if(arguments.length===1&&mW(arguments[0]))if(e=arguments[0],qW(e,"prng")){if(!yW(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=xu(e);else{if(r=arguments[0],!FAr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!mW(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(qW(e,"prng")){if(!yW(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=xu(e)}else t=xu()}return r===void 0?i=p:i=c,qe(i,"NAME","rayleigh"),e&&e.prng?(qe(i,"seed",null),qe(i,"seedLength",null),gW(i,"state",hW(null),MAr),qe(i,"stateLength",null),qe(i,"byteLength",null),qe(i,"toJSON",hW(null)),qe(i,"PRNG",t)):(Mu(i,"seed",n),Mu(i,"seedLength",a),gW(i,"state",v,f),Mu(i,"stateLength",s),Mu(i,"byteLength",o),qe(i,"toJSON",l),qe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(y){t.state=y}function l(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=BAr(t.state),r===void 0?y.params=[]:y.params=[r],y}function c(){return dW(t,r)}function p(y){return xAr(y)||y<=0?NaN:dW(t,y)}}wW.exports=CAr});var EW=u((EHr,bW)=>{"use strict";var jAr=L1(),VAr=jAr();bW.exports=VAr});var OW=u((NHr,AW)=>{"use strict";var GAr=w(),NW=EW(),UAr=L1();GAr(NW,"factory",UAr);AW.exports=NW});var R1=u((AHr,MW)=>{"use strict";var et=w(),Bu=P(),SW=_(),qi=A(),TW=G().isPrimitive,LW=S(),I1=Hr(),IW=nr().isPrimitive,WAr=b(),PW=L(),_W=I(),HAr=M(),Cu=Yi().factory,hi=Ge().factory,P1=xe(),_1=sr(),RW=Rt(),kAr=R(),FW=D();function DAr(){var r,e,t,i,n,a,s,o;if(s=!0,arguments.length===0)n={copy:!1},t=hi(n);else if(arguments.length===1)if(LW(arguments[0])){if(n=arguments[0],qi(n,"copy")&&!IW(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(qi(n,"prng")){if(!PW(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=hi({prng:n.prng})}else{if(qi(n,"state")&&!I1(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=RW(n,1),n.copy===!1?s=!1:n.state&&(n.state=P1(n.state.length,n.state,1,new _1(n.state.length),1)),n.copy=!1,t=hi(n)}}else{if(o=arguments[0],!TW(o))throw new TypeError("invalid argument. First argument must be a positive number or an options object. Value: `"+o+"`.");n={copy:!1},t=hi(n)}else{if(o=arguments[0],!TW(o))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+o+"`.");if(n=arguments[1],!LW(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(qi(n,"copy")&&!IW(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(qi(n,"prng")){if(!PW(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=hi({prng:n.prng})}else{if(qi(n,"state")&&!I1(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=RW(n,1),n.copy===!1?s=!1:n.state&&(n.state=P1(n.state.length,n.state,1,new _1(n.state.length),1)),n.copy=!1,t=hi(n)}}return n&&n.prng?o===void 0?r=Cu({prng:n.prng}):r=Cu(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=Cu({state:e,copy:!1}):r=Cu(o,{state:e,copy:!1})),o===void 0?a=g:a=m,i=t.PRNG,et(a,"NAME","t"),n&&n.prng?(et(a,"seed",null),et(a,"seedLength",null),SW(a,"state",_W(null),HAr),et(a,"stateLength",null),et(a,"byteLength",null),et(a,"toJSON",_W(null))):(Bu(a,"seed",v),Bu(a,"seedLength",f),SW(a,"state",p,y),Bu(a,"stateLength",l),Bu(a,"byteLength",c),et(a,"toJSON",q)),et(a,"PRNG",i),a;function v(){return i.seed}function f(){return i.seedLength}function l(){return i.stateLength}function c(){return i.byteLength}function p(){return i.state}function y(h){if(!I1(h))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+h+"`.");s&&(h=P1(h.length,h,1,new _1(h.length),1)),i.state=h}function q(){var h={};return h.type="PRNG",h.name=a.NAME,h.state=kAr(i.state),o===void 0?h.params=[]:h.params=[o],h}function m(){return t()/FW(r()/o)}function g(h){return WAr(h)||h<=0?NaN:t()/FW(r(h)/h)}}MW.exports=DAr});var BW=u((OHr,xW)=>{"use strict";var XAr=R1(),JAr=XAr();xW.exports=JAr});var VW=u((SHr,jW)=>{"use strict";var zAr=w(),CW=BW(),YAr=R1();zAr(CW,"factory",YAr);jW.exports=CW});var UW=u((THr,GW)=>{"use strict";var F1=x().isPrimitive,M1=er();function ZAr(r,e,t){return!F1(r)||M1(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!F1(e)||M1(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):!F1(t)||M1(t)?new TypeError("invalid argument. Third argument must be a number primitive and not `NaN`. Value: `"+t+"`."):r<=t&&t<=e?null:new RangeError("invalid arguments. The condition `a <= c <= b` must be satisfied. Value: `["+r+","+e+","+t+"]`.")}GW.exports=ZAr});var kW=u((LHr,HW)=>{"use strict";var WW=D();function $Ar(r,e,t,i){var n,a,s;return n=(i-e)/(t-e),s=r(),s<n?(a=(t-e)*(i-e),e+WW(a*s)):(a=(t-e)*(t-i),t-WW(a*(1-s)))}HW.exports=$Ar});var B1=u((IHr,$W)=>{"use strict";var he=w(),ju=P(),DW=_(),XW=S(),JW=L(),zW=A(),YW=I(),QAr=M(),Vu=W().factory,x1=b(),KAr=R(),rOr=UW(),ZW=kW();function eOr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=Vu();else if(arguments.length===1){if(r=arguments[0],!XW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(zW(r,"prng")){if(!JW(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Vu(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=rOr(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!XW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(zW(r,"prng")){if(!JW(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Vu(r)}else e=Vu()}return n===void 0?t=m:t=q,he(t,"NAME","triangular"),r&&r.prng?(he(t,"seed",null),he(t,"seedLength",null),DW(t,"state",YW(null),QAr),he(t,"stateLength",null),he(t,"byteLength",null),he(t,"toJSON",YW(null)),he(t,"PRNG",e)):(ju(t,"seed",o),ju(t,"seedLength",v),DW(t,"state",c,p),ju(t,"stateLength",f),ju(t,"byteLength",l),he(t,"toJSON",y),he(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function l(){return e.byteLength}function c(){return e.state}function p(g){e.state=g}function y(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=KAr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function q(){return ZW(e,n,a,s)}function m(g,h,E){return x1(g)||x1(h)||x1(E)||!(g<=E&&E<=h)?NaN:ZW(e,g,h,E)}}$W.exports=eOr});var KW=u((PHr,QW)=>{"use strict";var tOr=B1(),iOr=tOr();QW.exports=iOr});var tH=u((_Hr,eH)=>{"use strict";var nOr=w(),rH=KW(),aOr=B1();nOr(rH,"factory",aOr);eH.exports=rH});var uH=u((RHr,aH)=>{"use strict";var iH=x().isPrimitive,nH=er();function uOr(r,e){return!iH(r)||nH(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!iH(e)||nH(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):r>=e?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+r+","+e+"]`."):null}aH.exports=uOr});var oH=u((FHr,sH)=>{"use strict";function sOr(r,e,t){var i=r();return t*i+(1-i)*e}sH.exports=sOr});var C1=u((MHr,yH)=>{"use strict";var de=w(),Gu=P(),vH=_(),fH=S(),lH=L(),cH=A(),pH=I(),oOr=M(),Uu=W().factory,gH=b(),vOr=R(),fOr=uH(),mH=oH();function lOr(){var r,e,t,i,n,a;if(arguments.length===0)e=Uu();else if(arguments.length===1){if(r=arguments[0],!fH(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(cH(r,"prng")){if(!lH(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Uu(r)}else{if(n=arguments[0],a=arguments[1],i=fOr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!fH(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(cH(r,"prng")){if(!lH(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Uu(r)}else e=Uu()}return n===void 0?t=q:t=y,de(t,"NAME","uniform"),r&&r.prng?(de(t,"seed",null),de(t,"seedLength",null),vH(t,"state",pH(null),oOr),de(t,"stateLength",null),de(t,"byteLength",null),de(t,"toJSON",pH(null)),de(t,"PRNG",e)):(Gu(t,"seed",s),Gu(t,"seedLength",o),vH(t,"state",l,c),Gu(t,"stateLength",v),Gu(t,"byteLength",f),de(t,"toJSON",p),de(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=vOr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function y(){return mH(e,n,a)}function q(m,g){return gH(m)||gH(g)||m>=g?NaN:mH(e,m,g)}}yH.exports=lOr});var hH=u((xHr,qH)=>{"use strict";var cOr=C1(),pOr=cOr();qH.exports=pOr});var bH=u((BHr,wH)=>{"use strict";var gOr=w(),dH=hH(),mOr=C1();gOr(dH,"factory",mOr);wH.exports=dH});var AH=u((CHr,NH)=>{"use strict";var EH=G().isPrimitive;function yOr(r,e){return EH(r)?EH(e)?null:new TypeError("invalid argument. Shape parameter must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. Scale parameter must be a positive number. Value: `"+r+"`.")}NH.exports=yOr});var SH=u((jHr,OH)=>{"use strict";var qOr=Q(),hOr=B();function dOr(r,e,t){return t*qOr(-hOr(1-r()),1/e)}OH.exports=dOr});var j1=u((VHr,MH)=>{"use strict";var we=w(),Wu=P(),TH=_(),LH=S(),IH=L(),PH=A(),_H=I(),wOr=M(),Hu=W().factory,RH=b(),bOr=R(),EOr=AH(),FH=SH();function NOr(){var r,e,t,i,n,a;if(arguments.length===0)t=Hu();else if(arguments.length===1){if(e=arguments[0],!LH(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(PH(e,"prng")){if(!IH(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Hu(e)}else{if(a=arguments[0],r=arguments[1],n=EOr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!LH(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(PH(e,"prng")){if(!IH(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Hu(e)}else t=Hu()}return r===void 0?i=q:i=y,we(i,"NAME","weibull"),e&&e.prng?(we(i,"seed",null),we(i,"seedLength",null),TH(i,"state",_H(null),wOr),we(i,"stateLength",null),we(i,"byteLength",null),we(i,"toJSON",_H(null)),we(i,"PRNG",t)):(Wu(i,"seed",s),Wu(i,"seedLength",o),TH(i,"state",l,c),Wu(i,"stateLength",v),Wu(i,"byteLength",f),we(i,"toJSON",p),we(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function l(){return t.state}function c(m){t.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=bOr(t.state),a===void 0?m.params=[]:m.params=[a,r],m}function y(){return FH(t,a,r)}function q(m,g){return RH(m)||RH(g)||m<=0||g<=0?NaN:FH(t,m,g)}}MH.exports=NOr});var BH=u((GHr,xH)=>{"use strict";var AOr=j1(),OOr=AOr();xH.exports=OOr});var VH=u((UHr,jH)=>{"use strict";var SOr=w(),CH=BH(),TOr=j1();SOr(CH,"factory",TOr);jH.exports=CH});var UH=u((WHr,GH)=>{"use strict";var F={};F.arcsine=n_().factory;F.bernoulli=m_().factory;F.beta=mR().factory;F.betaprime=$R().factory;F.binomial=_F().factory;F.boxMueller=XF().factory;F.cauchy=vM().factory;F.chi=_M().factory;F.chisquare=Yi().factory;F.cosine=yx().factory;F.discreteUniform=Bx().factory;F.erlang=Kx().factory;F.exponential=pB().factory;F.f=_B().factory;F.frechet=zB().factory;F.gamma=ti().factory;F.geometric=vC().factory;F.gumbel=TC().factory;F.hypergeometric=ej().factory;F.improvedZiggurat=Ge().factory;F.invgamma=yj().factory;F.kumaraswamy=xj().factory;F.laplace=Qj().factory;F.levy=CV().factory;F.logistic=rG().factory;F.lognormal=qG().factory;F.minstd=LG().factory;F.minstdShuffle=WG().factory;F.mt19937=W().factory;F.negativeBinomial=PU().factory;F.normal=JU().factory;F.paretoType1=lW().factory;F.poisson=b1().factory;F.rayleigh=OW().factory;F.t=VW().factory;F.triangular=tH().factory;F.uniform=bH().factory;F.weibull=VH().factory;GH.exports=F});var HH=u((HHr,WH)=>{"use strict";function LOr(r,e,t,i){var n,a,s,o,v,f,l,c,p,y,q,m,g,h,E,N;for(q=e[1],m=e[0],g=r[0],h=r[1],l=t[0],c=t[1],s=l[1],o=l[0]-q*s,v=c[1],f=c[0]-q*v,p=0,y=0,n=[],E=0;E<m;E++){for(a=[],N=0;N<q;N++)a.push(i(g[p],h[y])),p+=s,y+=v;n.push(a),p+=o,y+=f}return n}WH.exports=LOr});var DH=u((kHr,kH)=>{"use strict";var IOr=x().isPrimitive,POr=j(),_Or=Z(),ROr=T();function FOr(r,e){return t;function t(i){var n;if(!IOr(i)){if(e.nonnumeric===void 0)throw new TypeError(ROr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===POr?e.pinf:n===_Or?e.ninf:n}}kH.exports=FOr});var YH=u((DHr,zH)=>{"use strict";var XH=x().isPrimitive,MOr=j(),xOr=Z(),JH=T();function BOr(r,e){return t;function t(i,n){var a;if(!XH(i)){if(e.nonnumeric===void 0)throw new TypeError(JH("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!XH(n)){if(e.nonnumeric===void 0)throw new TypeError(JH("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===MOr?e.pinf:a===xOr?e.ninf:a}}zH.exports=BOr});var $H=u((XHr,ZH)=>{"use strict";var V1=x().isPrimitive,COr=j(),jOr=Z(),G1=T();function VOr(r,e){return t;function t(i,n,a){var s;if(!V1(i)){if(e.nonnumeric===void 0)throw new TypeError(G1("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!V1(n)){if(e.nonnumeric===void 0)throw new TypeError(G1("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!V1(a)){if(e.nonnumeric===void 0)throw new TypeError(G1("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return s=r(i,n,a),s!==s?e.nan:s===COr?e.pinf:s===jOr?e.ninf:s}}ZH.exports=VOr});var KH=u((JHr,QH)=>{"use strict";var GOr=k().isPrimitive,UOr=T();function WOr(r){return e;function e(t){if(!GOr(t))throw new TypeError(UOr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}QH.exports=WOr});var ik=u((zHr,tk)=>{"use strict";var rk=k().isPrimitive,ek=T();function HOr(r){return e;function e(t,i){if(!rk(t))throw new TypeError(ek("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!rk(i))throw new TypeError(ek("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}tk.exports=HOr});var ak=u((YHr,nk)=>{"use strict";var U1=k().isPrimitive,W1=T();function kOr(r){return e;function e(t,i){if(!U1(t))throw new TypeError(W1("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!U1(i))throw new TypeError(W1("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!U1(v3))throw new TypeError(W1("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(v3)));return r(t,i,v3)}}nk.exports=kOr});var sk=u((ZHr,uk)=>{"use strict";function DOr(r,e,t,i){var n,a,s,o,v,f,l,c,p,y,q,m,g,h,E,N,C,O,H,ir,U;for(E=e[1],N=e[0],C=r[0],O=r[1],H=r[2],p=t[0],y=t[1],q=t[2],s=p[1],o=p[0]-E*s,v=y[1],f=y[0]-E*v,l=q[1],c=q[0]-E*l,m=0,g=0,h=0,n=[],ir=0;ir<N;ir++){for(a=[],U=0;U<E;U++)a.push(i(C[m],O[g],H[h])),m+=s,g+=v,h+=l;n.push(a),m+=o,g+=f,h+=c}return n}uk.exports=DOr});var vk=u(($Hr,ok)=>{"use strict";function XOr(r,e){var t,i,n,a,s;for(t=r.length,i=r[0].length,a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)n[s]=e(n[s]);return r}ok.exports=XOr});var lk=u((QHr,fk)=>{"use strict";var JOr=vk();function zOr(r,e){return JOr(r,e)}fk.exports=zOr});var pk=u((KHr,ck)=>{"use strict";var Ur={};Ur.binary2d=HH();Ur.d_d=DH();Ur.dd_d=YH();Ur.ddd_d=$H();Ur.s_o=KH();Ur.ss_o=ik();Ur.sss_o=ak();Ur.ternary2d=sk();Ur.unary2d=lk();ck.exports=Ur});var mk=u((rkr,gk)=>{"use strict";var Et=ip(),Er,V={};V.ANSCOMBES_QUARTET=k5();V.bartlettTest=mw();V.broadcast=Ew();V.cumax=_w().ndarray;V.filled=Mw();V.filledBy=Uw();V.flattenArray=Qn();V.isArray=vr();V.isBoolean=nr().isPrimitive;V.isNumber=x().isPrimitive;V.isPositiveNumber=G().isPrimitive;V.isString=k().isPrimitive;V.iterator2array=pb();V.iterSawtoothWave=iE();V.linspace=eO();V.max=fO().ndarray;V.mskmax=dO().ndarray;V.assert={};Er=LS();Et(Er,V.assert);V.blas={};Er=BS();Et(Er,V.blas);Er=RT();Et(Er,V);V.dists={};Er=iL();Et(Er,V.dists);Er=dI();Et(Er,V);V.random={};Er=UH();Et(Er,V.random);V.tools={};Er=pk();Et(Er,V.tools);gk.exports=V});var ZOr=u((ekr,yk)=>{var YOr=mk();yk.exports=YOr});return ZOr();})();
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
