/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var U1=u((tTr,G1)=>{"use strict";function Ck(r){return Math.abs(r)}G1.exports=Ck});var z=u((iTr,W1)=>{"use strict";var jk=U1();W1.exports=jk});var k1=u((nTr,H1)=>{"use strict";function Vk(r){return r*r}H1.exports=Vk});var X1=u((aTr,D1)=>{"use strict";var Gk=k1();D1.exports=Gk});var z1=u((uTr,J1)=>{"use strict";function Uk(r){return r!==r}J1.exports=Uk});var E=u((sTr,Y1)=>{"use strict";var Wk=z1();Y1.exports=Wk});var $1=u((oTr,Z1)=>{"use strict";var Hk=Math.sqrt;Z1.exports=Hk});var V=u((vTr,Q1)=>{"use strict";var kk=$1();Q1.exports=kk});var Yi=u((fTr,K1)=>{"use strict";var Dk=.7853981633974483;K1.exports=Dk});var ef=u((lTr,rf)=>{"use strict";function Xk(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}rf.exports=Xk});var nf=u((cTr,tf)=>{"use strict";function Jk(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}tf.exports=Jk});var sf=u((pTr,uf)=>{"use strict";var zk=E(),Yk=V(),af=Yi(),Zk=ef(),$k=nf(),Qk=6123233995736766e-32;function Kk(r){var e,t,i,n,a;if(zk(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*$k(t),t=Yk(t+t),a=af-t,t=t*n-Qk,a-=t,a+=af;else{if(i<1e-8)return r;t=i*i,a=t*Zk(t),a=i*a+i}return e?-a:a}uf.exports=Kk});var Qe=u((gTr,of)=>{"use strict";var rD=sf();of.exports=rD});var cf=u((mTr,lf)=>{"use strict";var eD=E(),vf=Qe(),tD=V(),ff=Yi(),iD=6123233995736766e-32;function nD(r){var e;return eD(r)?NaN:r<-1||r>1?NaN:r>.5?2*vf(tD(.5-.5*r)):(e=ff-vf(r),e+=iD,e+=ff,e)}lf.exports=nD});var gi=u((qTr,pf)=>{"use strict";var aD=cf();pf.exports=aD});var mf=u((yTr,gf)=>{"use strict";function uD(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}gf.exports=uD});var yf=u((hTr,qf)=>{"use strict";var sD=mf();qf.exports=sD});var df=u((dTr,hf)=>{"use strict";var oD=yf(),vD=oD();function fD(){return vD&&typeof Symbol.toStringTag=="symbol"}hf.exports=fD});var ht=u((wTr,wf)=>{"use strict";var lD=df();wf.exports=lD});var Uu=u((bTr,bf)=>{"use strict";var cD=Object.prototype.toString;bf.exports=cD});var Nf=u((ETr,Ef)=>{"use strict";var pD=Uu();function gD(r){return pD.call(r)}Ef.exports=gD});var Of=u((NTr,Af)=>{"use strict";var mD=Object.prototype.hasOwnProperty;function qD(r,e){return r==null?!1:mD.call(r,e)}Af.exports=qD});var O=u((ATr,Sf)=>{"use strict";var yD=Of();Sf.exports=yD});var Lf=u((OTr,Tf)=>{"use strict";var hD=typeof Symbol=="function"?Symbol.toStringTag:"";Tf.exports=hD});var Pf=u((STr,If)=>{"use strict";var dD=O(),mi=Lf(),Wu=Uu();function wD(r){var e,t,i;if(r==null)return Wu.call(r);t=r[mi],e=dD(r,mi);try{r[mi]=void 0}catch{return Wu.call(r)}return i=Wu.call(r),e?r[mi]=t:delete r[mi],i}If.exports=wD});var Y=u((TTr,Rf)=>{"use strict";var bD=ht(),ED=Nf(),ND=Pf(),Hu;bD()?Hu=ND:Hu=ED;Rf.exports=Hu});var Ff=u((LTr,_f)=>{"use strict";var AD=Y(),OD=typeof Uint32Array=="function";function SD(r){return OD&&r instanceof Uint32Array||AD(r)==="[object Uint32Array]"}_f.exports=SD});var Cr=u((ITr,Mf)=>{"use strict";var TD=Ff();Mf.exports=TD});var dt=u((PTr,xf)=>{"use strict";var LD=4294967295;xf.exports=LD});var Cf=u((RTr,Bf)=>{"use strict";var ID=typeof Uint32Array=="function"?Uint32Array:null;Bf.exports=ID});var Gf=u((_Tr,Vf)=>{"use strict";var PD=Cr(),ku=dt(),jf=Cf();function RD(){var r,e;if(typeof jf!="function")return!1;try{e=[1,3.14,-3.14,ku+1,ku+2],e=new jf(e),r=PD(e)&&e[0]===1&&e[1]===3&&e[2]===ku-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Vf.exports=RD});var Wf=u((FTr,Uf)=>{"use strict";var _D=Gf();Uf.exports=_D});var kf=u((MTr,Hf)=>{"use strict";var FD=typeof Uint32Array=="function"?Uint32Array:void 0;Hf.exports=FD});var Xf=u((xTr,Df)=>{"use strict";function MD(){throw new Error("not implemented")}Df.exports=MD});var ar=u((BTr,Jf)=>{"use strict";var xD=Wf(),BD=kf(),CD=Xf(),Du;xD()?Du=BD:Du=CD;Jf.exports=Du});var Yf=u((CTr,zf)=>{"use strict";var jD=Y(),VD=typeof Float64Array=="function";function GD(r){return VD&&r instanceof Float64Array||jD(r)==="[object Float64Array]"}zf.exports=GD});var $f=u((jTr,Zf)=>{"use strict";var UD=Yf();Zf.exports=UD});var Kf=u((VTr,Qf)=>{"use strict";var WD=typeof Float64Array=="function"?Float64Array:null;Qf.exports=WD});var tl=u((GTr,el)=>{"use strict";var HD=$f(),rl=Kf();function kD(){var r,e;if(typeof rl!="function")return!1;try{e=new rl([1,3.14,-3.14,NaN]),r=HD(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}el.exports=kD});var Xu=u((UTr,il)=>{"use strict";var DD=tl();il.exports=DD});var al=u((WTr,nl)=>{"use strict";var XD=typeof Float64Array=="function"?Float64Array:void 0;nl.exports=XD});var sl=u((HTr,ul)=>{"use strict";function JD(){throw new Error("not implemented")}ul.exports=JD});var sr=u((kTr,ol)=>{"use strict";var zD=Xu(),YD=al(),ZD=sl(),Ju;zD()?Ju=YD:Ju=ZD;ol.exports=Ju});var fl=u((DTr,vl)=>{"use strict";var $D=Y(),QD=typeof Uint8Array=="function";function KD(r){return QD&&r instanceof Uint8Array||$D(r)==="[object Uint8Array]"}vl.exports=KD});var cl=u((XTr,ll)=>{"use strict";var rX=fl();ll.exports=rX});var gl=u((JTr,pl)=>{"use strict";var eX=255;pl.exports=eX});var ql=u((zTr,ml)=>{"use strict";var tX=typeof Uint8Array=="function"?Uint8Array:null;ml.exports=tX});var dl=u((YTr,hl)=>{"use strict";var iX=cl(),zu=gl(),yl=ql();function nX(){var r,e;if(typeof yl!="function")return!1;try{e=[1,3.14,-3.14,zu+1,zu+2],e=new yl(e),r=iX(e)&&e[0]===1&&e[1]===3&&e[2]===zu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}hl.exports=nX});var bl=u((ZTr,wl)=>{"use strict";var aX=dl();wl.exports=aX});var Nl=u(($Tr,El)=>{"use strict";var uX=typeof Uint8Array=="function"?Uint8Array:void 0;El.exports=uX});var Ol=u((QTr,Al)=>{"use strict";function sX(){throw new Error("not implemented")}Al.exports=sX});var wt=u((KTr,Sl)=>{"use strict";var oX=bl(),vX=Nl(),fX=Ol(),Yu;oX()?Yu=vX:Yu=fX;Sl.exports=Yu});var Ll=u((rLr,Tl)=>{"use strict";var lX=Y(),cX=typeof Uint16Array=="function";function pX(r){return cX&&r instanceof Uint16Array||lX(r)==="[object Uint16Array]"}Tl.exports=pX});var Pl=u((eLr,Il)=>{"use strict";var gX=Ll();Il.exports=gX});var _l=u((tLr,Rl)=>{"use strict";var mX=65535;Rl.exports=mX});var Ml=u((iLr,Fl)=>{"use strict";var qX=typeof Uint16Array=="function"?Uint16Array:null;Fl.exports=qX});var Cl=u((nLr,Bl)=>{"use strict";var yX=Pl(),Zu=_l(),xl=Ml();function hX(){var r,e;if(typeof xl!="function")return!1;try{e=[1,3.14,-3.14,Zu+1,Zu+2],e=new xl(e),r=yX(e)&&e[0]===1&&e[1]===3&&e[2]===Zu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Bl.exports=hX});var Vl=u((aLr,jl)=>{"use strict";var dX=Cl();jl.exports=dX});var Ul=u((uLr,Gl)=>{"use strict";var wX=typeof Uint16Array=="function"?Uint16Array:void 0;Gl.exports=wX});var Hl=u((sLr,Wl)=>{"use strict";function bX(){throw new Error("not implemented")}Wl.exports=bX});var bt=u((oLr,kl)=>{"use strict";var EX=Vl(),NX=Ul(),AX=Hl(),$u;EX()?$u=NX:$u=AX;kl.exports=$u});var Xl=u((vLr,Dl)=>{"use strict";var OX=wt(),SX=bt(),TX={uint16:SX,uint8:OX};Dl.exports=TX});var Zl=u((fLr,Yl)=>{"use strict";var Jl=Xl(),zl;function LX(){var r,e;return r=new Jl.uint16(1),r[0]=4660,e=new Jl.uint8(r.buffer),e[0]===52}zl=LX();Yl.exports=zl});var Ke=u((lLr,$l)=>{"use strict";var IX=Zl();$l.exports=IX});var Kl=u((cLr,Ql)=>{"use strict";var PX=Ke(),Qu;PX===!0?Qu=1:Qu=0;Ql.exports=Qu});var t2=u((pLr,e2)=>{"use strict";var RX=ar(),_X=sr(),FX=Kl(),r2=new _X(1),MX=new RX(r2.buffer);function xX(r){return r2[0]=r,MX[FX]}e2.exports=xX});var or=u((gLr,i2)=>{"use strict";var BX=t2();i2.exports=BX});var a2=u((mLr,n2)=>{"use strict";var CX=Ke(),Ku;CX===!0?Ku=1:Ku=0;n2.exports=Ku});var s2=u((qLr,u2)=>{"use strict";var jX=ar(),VX=sr(),GX=a2(),r0=new VX(1),UX=new jX(r0.buffer);function WX(r,e){return r0[0]=r,UX[GX]=e>>>0,r0[0]}u2.exports=WX});var Et=u((yLr,o2)=>{"use strict";var HX=s2();o2.exports=HX});var j=u((hLr,v2)=>{"use strict";var kX=Number.POSITIVE_INFINITY;v2.exports=kX});var l2=u((dLr,f2)=>{"use strict";f2.exports=Number});var Zi=u((wLr,c2)=>{"use strict";var DX=l2();c2.exports=DX});var D=u((bLr,p2)=>{"use strict";var XX=Zi(),JX=XX.NEGATIVE_INFINITY;p2.exports=JX});var qe=u((ELr,g2)=>{"use strict";var zX=1023;g2.exports=zX});var q2=u((NLr,m2)=>{"use strict";function YX(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}m2.exports=YX});var b2=u((ALr,w2)=>{"use strict";var ZX=E(),y2=or(),h2=Et(),$X=j(),QX=D(),d2=qe(),KX=q2(),e0=.6931471803691238,t0=19082149292705877e-26,rJ=.41421356237309503,eJ=-.2928932188134525,tJ=1862645149230957e-24,iJ=5551115123125783e-32,nJ=9007199254740992,aJ=.6666666666666666;function uJ(r){var e,t,i,n,a,s,o,v,f,l;if(r<-1||ZX(r))return NaN;if(r===-1)return QX;if(r===$X||r===0)return r;if(r<0?i=-r:i=r,l=1,i<rJ){if(i<tJ)return i<iJ?r:r-r*r*.5;r>eJ&&(l=0,n=r,t=1)}return l!==0&&(i<nJ?(f=1+r,t=y2(f),l=(t>>20)-d2,l>0?a=1-(f-r):a=r-(f-1),a/=f):(f=r,t=y2(f),l=(t>>20)-d2,a=0),t&=1048575,t<434334?f=h2(f,t|1072693248):(l+=1,f=h2(f,t|1071644672),t=1048576-t>>2),n=f-1),e=.5*n*n,t===0?n===0?(a+=l*t0,l*e0+a):(v=e*(1-aJ*n),l*e0-(v-(l*t0+a)-n)):(s=n/(2+n),o=s*s,v=o*KX(o),l===0?n-(e-s*(e+v)):l*e0-(e-(s*(e+v)+(l*t0+a))-n))}w2.exports=uJ});var Nt=u((OLr,E2)=>{"use strict";var sJ=b2();E2.exports=sJ});var $i=u((SLr,N2)=>{"use strict";var oJ=.6931471805599453;N2.exports=oJ});var O2=u((TLr,A2)=>{"use strict";function vJ(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}A2.exports=vJ});var T2=u((LLr,S2)=>{"use strict";function fJ(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}S2.exports=fJ});var R2=u((ILr,P2)=>{"use strict";var L2=or(),lJ=Et(),cJ=E(),pJ=qe(),gJ=D(),mJ=O2(),qJ=T2(),Qi=.6931471803691238,Ki=19082149292705877e-26,yJ=0x40000000000000,hJ=.3333333333333333,I2=1048575,dJ=2146435072,wJ=1048576,bJ=1072693248;function EJ(r){var e,t,i,n,a,s,o,v,f,l,c,p;return r===0?gJ:cJ(r)||r<0?NaN:(t=L2(r),a=0,t<wJ&&(a-=54,r*=yJ,t=L2(r)),t>=dJ?r+r:(a+=(t>>20)-pJ|0,t&=I2,v=t+614244&1048576|0,r=lJ(r,t|v^bJ),a+=v>>20|0,o=r-1,(I2&2+t)<3?o===0?a===0?0:a*Qi+a*Ki:(s=o*o*(.5-hJ*o),a===0?o-s:a*Qi-(s-a*Ki-o)):(l=o/(2+o),p=l*l,v=t-398458|0,c=p*p,f=440401-t|0,n=c*mJ(c),i=p*qJ(c),v|=f,s=i+n,v>0?(e=.5*o*o,a===0?o-(e-l*(e+s)):a*Qi-(e-(l*(e+s)+a*Ki)-o)):a===0?o-l*(o-s):a*Qi-(l*(o-s)-a*Ki-o))))}P2.exports=EJ});var x=u((PLr,_2)=>{"use strict";var NJ=R2();_2.exports=NJ});var B2=u((RLr,x2)=>{"use strict";var AJ=E(),OJ=Nt(),F2=V(),SJ=$i(),M2=x(),TJ=1<<28;function LJ(r){var e;return AJ(r)?NaN:r<1?NaN:r===1?0:r>=TJ?M2(r)+SJ:r>2?M2(2*r-1/(r+F2(r*r-1))):(e=r-1,OJ(e+F2(2*e+e*e)))}x2.exports=LJ});var j2=u((_Lr,C2)=>{"use strict";var IJ=B2();C2.exports=IJ});var rn=u((FLr,V2)=>{"use strict";var PJ=1.5707963267948966;V2.exports=PJ});var U2=u((MLr,G2)=>{"use strict";function RJ(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}G2.exports=RJ});var H2=u((xLr,W2)=>{"use strict";function _J(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}W2.exports=_J});var X2=u((BLr,D2)=>{"use strict";var FJ=E(),MJ=j(),i0=rn(),xJ=Yi(),BJ=D(),CJ=U2(),jJ=H2(),k2=6123233995736766e-32,VJ=2.414213562373095;function GJ(r){var e,t,i,n;return FJ(r)||r===0?r:r===MJ?i0:r===BJ?-i0:(r<0&&(t=!0,r=-r),e=0,r>VJ?(i=i0,e=1,r=-(1/r)):r<=.66?i=0:(i=xJ,e=2,r=(r-1)/(r+1)),n=r*r,n=n*CJ(n)/jJ(n),n=r*n+r,e===2?n+=.5*k2:e===1&&(n+=k2),i+=n,t?-i:i)}D2.exports=GJ});var en=u((CLr,J2)=>{"use strict";var UJ=X2();J2.exports=UJ});var Y2=u((jLr,z2)=>{"use strict";var WJ=en();function HJ(r){return WJ(1/r)}z2.exports=HJ});var $2=u((VLr,Z2)=>{"use strict";var kJ=Y2();Z2.exports=kJ});var K2=u((GLr,Q2)=>{"use strict";var DJ=Qe();function XJ(r){return DJ(1+r)}Q2.exports=XJ});var ec=u((ULr,rc)=>{"use strict";var JJ=K2();rc.exports=JJ});var ic=u((WLr,tc)=>{"use strict";var zJ=Qe();function YJ(r){return zJ(1-r)}tc.exports=YJ});var ac=u((HLr,nc)=>{"use strict";var ZJ=ic();nc.exports=ZJ});var sc=u((kLr,uc)=>{"use strict";var $J=Qe();function QJ(r){return $J(1/r)}uc.exports=QJ});var vc=u((DLr,oc)=>{"use strict";var KJ=sc();oc.exports=KJ});var lc=u((XLr,fc)=>{"use strict";var rz=j(),ez=D();function tz(r){return r===rz||r===ez}fc.exports=tz});var ye=u((JLr,cc)=>{"use strict";var iz=lc();cc.exports=iz});var qc=u((zLr,mc)=>{"use strict";var nz=ye(),az=E(),uz=Nt(),pc=V(),sz=$i(),gc=x(),oz=1/(1<<28),vz=1<<28;function fz(r){var e,t,i;return az(r)||nz(r)?r:(r<0&&(r=-r,e=!0),r<oz?i=r:r>vz?i=gc(r)+sz:r>2?i=gc(2*r+1/(pc(r*r+1)+r)):(t=r*r,i=uz(r+t/(1+pc(1+t)))),e?-i:i)}mc.exports=fz});var n0=u((YLr,yc)=>{"use strict";var lz=qc();yc.exports=lz});var dc=u((ZLr,hc)=>{"use strict";var cz=n0();function pz(r){return cz(1/r)}hc.exports=pz});var bc=u(($Lr,wc)=>{"use strict";var gz=dc();wc.exports=gz});var Nc=u((QLr,Ec)=>{"use strict";var mz=gi(),qz=V();function yz(r){return 2*mz(qz(r))}Ec.exports=yz});var Oc=u((KLr,Ac)=>{"use strict";var hz=Nc();Ac.exports=hz});var Tc=u((rIr,Sc)=>{"use strict";var dz=Qe(),wz=V();function bz(r){return 2*dz(wz(r))}Sc.exports=bz});var Ic=u((eIr,Lc)=>{"use strict";var Ez=Tc();Lc.exports=Ez});var Rc=u((tIr,Pc)=>{"use strict";var Nz=Y(),a0;function Az(r){return Nz(r)==="[object Array]"}Array.isArray?a0=Array.isArray:a0=Az;Pc.exports=a0});var vr=u((iIr,_c)=>{"use strict";var Oz=Rc();_c.exports=Oz});var Mc=u((nIr,Fc)=>{"use strict";var Sz=typeof Object.defineProperty=="function"?Object.defineProperty:null;Fc.exports=Sz});var Bc=u((aIr,xc)=>{"use strict";var Tz=Mc();function Lz(){try{return Tz({},"x",{}),!0}catch{return!1}}xc.exports=Lz});var jc=u((uIr,Cc)=>{"use strict";var Iz=Object.defineProperty;Cc.exports=Iz});var Hc=u((sIr,Wc)=>{"use strict";var At=Object.prototype,Vc=At.toString,Gc=At.__defineGetter__,Uc=At.__defineSetter__,Pz=At.__lookupGetter__,Rz=At.__lookupSetter__;function _z(r,e,t){var i,n,a,s;if(typeof r!="object"||r===null||Vc.call(r)==="[object Array]")throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if(typeof t!="object"||t===null||Vc.call(t)==="[object Array]")throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if(n="value"in t,n&&(Pz.call(r,e)||Rz.call(r,e)?(i=r.__proto__,r.__proto__=At,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,s="set"in t,n&&(a||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Gc&&Gc.call(r,e,t.get),s&&Uc&&Uc.call(r,e,t.set),r}Wc.exports=_z});var he=u((oIr,kc)=>{"use strict";var Fz=Bc(),Mz=jc(),xz=Hc(),u0;Fz()?u0=Mz:u0=xz;kc.exports=u0});var Xc=u((vIr,Dc)=>{"use strict";var Bz=he();function Cz(r,e,t){Bz(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}Dc.exports=Cz});var b=u((fIr,Jc)=>{"use strict";var jz=Xc();Jc.exports=jz});var s0=u((lIr,zc)=>{"use strict";function Vz(r){return typeof r=="number"}zc.exports=Vz});var Zc=u((cIr,Yc)=>{"use strict";var Gz=Zi(),Uz=Gz.prototype.toString;Yc.exports=Uz});var Qc=u((pIr,$c)=>{"use strict";var Wz=Zc();function Hz(r){try{return Wz.call(r),!0}catch{return!1}}$c.exports=Hz});var o0=u((gIr,Kc)=>{"use strict";var kz=ht(),Dz=Y(),Xz=Zi(),Jz=Qc(),zz=kz();function Yz(r){return typeof r=="object"?r instanceof Xz?!0:zz?Jz(r):Dz(r)==="[object Number]":!1}Kc.exports=Yz});var ep=u((mIr,rp)=>{"use strict";var Zz=s0(),$z=o0();function Qz(r){return Zz(r)||$z(r)}rp.exports=Qz});var B=u((qIr,ip)=>{"use strict";var tp=b(),v0=ep(),Kz=s0(),rY=o0();tp(v0,"isPrimitive",Kz);tp(v0,"isObject",rY);ip.exports=v0});var ap=u((yIr,np)=>{"use strict";var eY=Math.floor;np.exports=eY});var $=u((hIr,up)=>{"use strict";var tY=ap();up.exports=tY});var op=u((dIr,sp)=>{"use strict";var iY=$();function nY(r){return iY(r)===r}sp.exports=nY});var wr=u((wIr,vp)=>{"use strict";var aY=op();vp.exports=aY});var f0=u((bIr,fp)=>{"use strict";var uY=j(),sY=D(),oY=wr();function vY(r){return r<uY&&r>sY&&oY(r)}fp.exports=vY});var l0=u((EIr,lp)=>{"use strict";var fY=B().isPrimitive,lY=f0();function cY(r){return fY(r)&&lY(r)}lp.exports=cY});var c0=u((NIr,cp)=>{"use strict";var pY=B().isObject,gY=f0();function mY(r){return pY(r)&&gY(r.valueOf())}cp.exports=mY});var gp=u((AIr,pp)=>{"use strict";var qY=l0(),yY=c0();function hY(r){return qY(r)||yY(r)}pp.exports=hY});var Tr=u((OIr,qp)=>{"use strict";var mp=b(),p0=gp(),dY=l0(),wY=c0();mp(p0,"isPrimitive",dY);mp(p0,"isObject",wY);qp.exports=p0});var g0=u((SIr,yp)=>{"use strict";var bY=Tr().isPrimitive;function EY(r){return bY(r)&&r>=0}yp.exports=EY});var m0=u((TIr,hp)=>{"use strict";var NY=Tr().isObject;function AY(r){return NY(r)&&r.valueOf()>=0}hp.exports=AY});var wp=u((LIr,dp)=>{"use strict";var OY=g0(),SY=m0();function TY(r){return OY(r)||SY(r)}dp.exports=TY});var de=u((IIr,Ep)=>{"use strict";var bp=b(),q0=wp(),LY=g0(),IY=m0();bp(q0,"isPrimitive",LY);bp(q0,"isObject",IY);Ep.exports=q0});var Ap=u((PIr,Np)=>{"use strict";var PY=vr();function RY(r){if(typeof r!="function")throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return e;function e(t){var i,n;if(!PY(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}Np.exports=RY});var Sp=u((RIr,Op)=>{"use strict";var _Y=Ap();Op.exports=_Y});var Lp=u((_Ir,Tp)=>{"use strict";function FY(r){return r!==null&&typeof r=="object"}Tp.exports=FY});var h0=u((FIr,Ip)=>{"use strict";var MY=b(),xY=Sp(),y0=Lp(),BY=xY(y0);MY(y0,"isObjectLikeArray",BY);Ip.exports=y0});var Rp=u((MIr,Pp)=>{"use strict";var CY=h0();function jY(r){return CY(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}Pp.exports=jY});var rt=u((xIr,_p)=>{"use strict";var VY=Rp();_p.exports=VY});var Mp=u((BIr,Fp)=>{"use strict";var GY=/./;Fp.exports=GY});var d0=u((CIr,xp)=>{"use strict";function UY(r){return typeof r=="boolean"}xp.exports=UY});var Cp=u((jIr,Bp)=>{"use strict";var WY=Boolean.prototype.toString;Bp.exports=WY});var Vp=u((VIr,jp)=>{"use strict";var HY=Cp();function kY(r){try{return HY.call(r),!0}catch{return!1}}jp.exports=kY});var w0=u((GIr,Gp)=>{"use strict";var DY=ht(),XY=Y(),JY=Vp(),zY=DY();function YY(r){return typeof r=="object"?r instanceof Boolean?!0:zY?JY(r):XY(r)==="[object Boolean]":!1}Gp.exports=YY});var Wp=u((UIr,Up)=>{"use strict";var ZY=d0(),$Y=w0();function QY(r){return ZY(r)||$Y(r)}Up.exports=QY});var tr=u((WIr,kp)=>{"use strict";var Hp=b(),b0=Wp(),KY=d0(),rZ=w0();Hp(b0,"isPrimitive",KY);Hp(b0,"isObject",rZ);kp.exports=b0});var Xp=u((HIr,Dp)=>{"use strict";function eZ(){return new Function("return this;")()}Dp.exports=eZ});var zp=u((kIr,Jp)=>{"use strict";var tZ=typeof self=="object"?self:null;Jp.exports=tZ});var Zp=u((DIr,Yp)=>{"use strict";var iZ=typeof window=="object"?window:null;Yp.exports=iZ});var Qp=u((XIr,$p)=>{"use strict";var nZ=typeof global=="object"?global:null;$p.exports=nZ});var i3=u((JIr,t3)=>{"use strict";var aZ=tr().isPrimitive,uZ=Xp(),Kp=zp(),r3=Zp(),e3=Qp();function sZ(r){if(arguments.length){if(!aZ(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return uZ()}if(Kp)return Kp;if(r3)return r3;if(e3)return e3;throw new Error("unexpected error. Unable to resolve global object.")}t3.exports=sZ});var a3=u((zIr,n3)=>{"use strict";var oZ=i3();n3.exports=oZ});var o3=u((YIr,s3)=>{"use strict";var vZ=a3(),u3=vZ(),fZ=u3.document&&u3.document.childNodes;s3.exports=fZ});var l3=u((ZIr,f3)=>{"use strict";var lZ=Int8Array;f3.exports=lZ});var p3=u(($Ir,c3)=>{"use strict";var cZ=Mp(),pZ=o3(),gZ=l3();function mZ(){return typeof cZ=="function"||typeof gZ=="object"||typeof pZ=="function"}c3.exports=mZ});var E0=u((QIr,g3)=>{"use strict";function qZ(){return/^\s*function\s*([^(]*)/i}g3.exports=qZ});var q3=u((KIr,m3)=>{"use strict";var yZ=E0(),hZ=yZ();m3.exports=hZ});var N0=u((rPr,h3)=>{"use strict";var dZ=b(),y3=E0(),wZ=q3();dZ(y3,"REGEXP",wZ);h3.exports=y3});var w3=u((ePr,d3)=>{"use strict";var bZ=Y(),EZ=N0().REGEXP,NZ=rt();function AZ(r){var e,t,i;if(t=bZ(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=EZ.exec(i.toString()),e)return e[1]}return NZ(r)?"Buffer":t}d3.exports=AZ});var we=u((tPr,b3)=>{"use strict";var OZ=w3();b3.exports=OZ});var N3=u((iPr,E3)=>{"use strict";var SZ=we();function TZ(r){var e;return r===null?"null":(e=typeof r,e==="object"?SZ(r).toLowerCase():e)}E3.exports=TZ});var O3=u((nPr,A3)=>{"use strict";var LZ=we();function IZ(r){return LZ(r).toLowerCase()}A3.exports=IZ});var tn=u((aPr,S3)=>{"use strict";var PZ=p3(),RZ=N3(),_Z=O3(),FZ=PZ()?_Z:RZ;S3.exports=FZ});var L3=u((uPr,T3)=>{"use strict";var MZ=tn();function xZ(r){return MZ(r)==="function"}T3.exports=xZ});var I=u((sPr,I3)=>{"use strict";var BZ=L3();I3.exports=BZ});var R3=u((oPr,P3)=>{"use strict";var CZ=Object.getPrototypeOf;P3.exports=CZ});var F3=u((vPr,_3)=>{"use strict";function jZ(r){return r.__proto__}_3.exports=jZ});var x3=u((fPr,M3)=>{"use strict";var VZ=Y(),GZ=F3();function UZ(r){var e=GZ(r);return e||e===null?e:VZ(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}M3.exports=UZ});var C3=u((lPr,B3)=>{"use strict";var WZ=I(),HZ=R3(),kZ=x3(),A0;WZ(Object.getPrototypeOf)?A0=HZ:A0=kZ;B3.exports=A0});var V3=u((cPr,j3)=>{"use strict";var DZ=C3();function XZ(r){return r==null?null:(r=Object(r),DZ(r))}j3.exports=XZ});var et=u((pPr,G3)=>{"use strict";var JZ=V3();G3.exports=JZ});var W3=u((gPr,U3)=>{"use strict";var zZ=et(),YZ=Y();function ZZ(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(YZ(r)==="[object Error]")return!0;r=zZ(r)}return!1}U3.exports=ZZ});var k3=u((mPr,H3)=>{"use strict";var $Z=W3();H3.exports=$Z});var O0=u((qPr,D3)=>{"use strict";function QZ(r){return typeof r=="string"}D3.exports=QZ});var J3=u((yPr,X3)=>{"use strict";var KZ=String.prototype.valueOf;X3.exports=KZ});var Y3=u((hPr,z3)=>{"use strict";var r$=J3();function e$(r){try{return r$.call(r),!0}catch{return!1}}z3.exports=e$});var S0=u((dPr,Z3)=>{"use strict";var t$=ht(),i$=Y(),n$=Y3(),a$=t$();function u$(r){return typeof r=="object"?r instanceof String?!0:a$?n$(r):i$(r)==="[object String]":!1}Z3.exports=u$});var Q3=u((wPr,$3)=>{"use strict";var s$=O0(),o$=S0();function v$(r){return s$(r)||o$(r)}$3.exports=v$});var k=u((bPr,r6)=>{"use strict";var K3=b(),T0=Q3(),f$=O0(),l$=S0();K3(T0,"isPrimitive",f$);K3(T0,"isObject",l$);r6.exports=T0});var L0=u((EPr,e6)=>{"use strict";function c$(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}e6.exports=c$});var i6=u((NPr,t6)=>{"use strict";var p$=L0(),g$=p$();t6.exports=g$});var u6=u((APr,a6)=>{"use strict";var m$=b(),n6=L0(),q$=i6();m$(n6,"REGEXP",q$);a6.exports=n6});var I0=u((OPr,s6)=>{"use strict";function y$(r){return typeof r=="number"}s6.exports=y$});var P0=u((SPr,v6)=>{"use strict";function h$(r){return r[0]==="-"}function o6(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function d$(r,e,t){var i=!1,n=e-r.length;return n<0||(h$(r)&&(i=!0,r=r.substr(1)),r=t?r+o6(n):o6(n)+r,i&&(r="-"+r)),r}v6.exports=d$});var p6=u((TPr,c6)=>{"use strict";var w$=I0(),f6=P0(),b$=String.prototype.toLowerCase,l6=String.prototype.toUpperCase;function E$(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!w$(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=f6(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=f6(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===l6.call(r.specifier)?l6.call(t):b$.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}c6.exports=E$});var m6=u((LPr,g6)=>{"use strict";function N$(r){return typeof r=="string"}g6.exports=N$});var h6=u((IPr,y6)=>{"use strict";var A$=I0(),O$=Math.abs,S$=String.prototype.toLowerCase,q6=String.prototype.toUpperCase,tt=String.prototype.replace,T$=/e\+(\d)$/,L$=/e-(\d)$/,I$=/^(\d+)$/,P$=/^(\d+)e/,R$=/\.0$/,_$=/\.0*e/,F$=/(\..*[^0])0*e/;function M$(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!A$(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":O$(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=tt.call(t,F$,"$1e"),t=tt.call(t,_$,"e"),t=tt.call(t,R$,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=tt.call(t,T$,"e+0$1"),t=tt.call(t,L$,"e-0$1"),r.alternate&&(t=tt.call(t,I$,"$1."),t=tt.call(t,P$,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===q6.call(r.specifier)?q6.call(t):S$.call(t),t}y6.exports=M$});var b6=u((PPr,w6)=>{"use strict";function d6(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function x$(r,e,t){var i=e-r.length;return i<0||(r=t?r+d6(i):d6(i)+r),r}w6.exports=x$});var N6=u((RPr,E6)=>{"use strict";var B$=p6(),C$=m6(),j$=h6(),V$=b6(),G$=P0(),U$=String.fromCharCode,nn=isNaN,W$=Array.isArray;function H$(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k$(r){var e,t,i,n,a,s,o,v,f;if(!W$(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",o=1,v=0;v<r.length;v++)if(i=r[v],C$(i))s+=i;else{if(e=i.precision!==void 0,i=H$(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,nn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,nn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=B$(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!nn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=nn(a)?String(i.arg):U$(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=j$(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=G$(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=V$(i.arg,i.width,i.padRight)),s+=i.arg||"",o+=1}return s}E6.exports=k$});var O6=u((_Pr,A6)=>{"use strict";var D$=N6();A6.exports=D$});var T6=u((FPr,S6)=>{"use strict";var an=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function X$(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function J$(r){var e,t,i,n;for(t=[],n=0,i=an.exec(r);i;)e=r.slice(n,an.lastIndex-i[0].length),e.length&&t.push(e),t.push(X$(i)),n=an.lastIndex,i=an.exec(r);return e=r.slice(n),e.length&&t.push(e),t}S6.exports=J$});var I6=u((MPr,L6)=>{"use strict";var z$=T6();L6.exports=z$});var R6=u((xPr,P6)=>{"use strict";function Y$(r){return typeof r=="string"}P6.exports=Y$});var M6=u((BPr,F6)=>{"use strict";var Z$=O6(),$$=I6(),Q$=R6();function _6(r){var e,t,i;if(!Q$(r))throw new TypeError(_6("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=$$(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return Z$.apply(null,t)}F6.exports=_6});var L=u((CPr,x6)=>{"use strict";var K$=M6();x6.exports=K$});var C6=u((jPr,B6)=>{"use strict";var rQ=k().isPrimitive,eQ=u6(),tQ=L();function iQ(r){if(!rQ(r))throw new TypeError(tQ("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=eQ().exec(r),r?new RegExp(r[1],r[2]):null}B6.exports=iQ});var V6=u((VPr,j6)=>{"use strict";var nQ=C6();j6.exports=nQ});var R0=u((GPr,G6)=>{"use strict";var aQ=B().isPrimitive,uQ=E();function sQ(r){return aQ(r)&&uQ(r)}G6.exports=sQ});var _0=u((UPr,U6)=>{"use strict";var oQ=B().isObject,vQ=E();function fQ(r){return oQ(r)&&vQ(r.valueOf())}U6.exports=fQ});var H6=u((WPr,W6)=>{"use strict";var lQ=R0(),cQ=_0();function pQ(r){return lQ(r)||cQ(r)}W6.exports=pQ});var K=u((HPr,D6)=>{"use strict";var k6=b(),F0=H6(),gQ=R0(),mQ=_0();k6(F0,"isPrimitive",gQ);k6(F0,"isObject",mQ);D6.exports=F0});var J6=u((kPr,X6)=>{"use strict";var qQ=9007199254740991;X6.exports=qQ});var Y6=u((DPr,z6)=>{"use strict";var yQ=wr(),hQ=J6();function dQ(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&yQ(r.length)&&r.length>=0&&r.length<=hQ}z6.exports=dQ});var Lr=u((XPr,Z6)=>{"use strict";var wQ=Y6();Z6.exports=wQ});var K6=u((JPr,Q6)=>{"use strict";var $6=K(),bQ=Lr(),EQ=k().isPrimitive,NQ=Tr().isPrimitive;function AQ(r,e,t){var i,n;if(!bQ(r)&&!EQ(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(i=r.length,i===0)return-1;if(arguments.length===3){if(!NQ(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if($6(e)){for(;n<i;n++)if($6(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}Q6.exports=AQ});var un=u((zPr,r4)=>{"use strict";var OQ=K6();r4.exports=OQ});var sn=u((YPr,e4)=>{"use strict";function SQ(r){return Object.keys(Object(r))}e4.exports=SQ});var i4=u((ZPr,t4)=>{"use strict";var TQ=sn();function LQ(){return(TQ(arguments)||"").length!==2}function IQ(){return LQ(1,2)}t4.exports=IQ});var a4=u(($Pr,n4)=>{"use strict";var PQ=typeof Object.keys<"u";n4.exports=PQ});var M0=u((QPr,u4)=>{"use strict";var RQ=Y();function _Q(r){return RQ(r)==="[object Arguments]"}u4.exports=_Q});var v4=u((KPr,o4)=>{"use strict";var FQ=M0(),s4;function MQ(){return FQ(arguments)}s4=MQ();o4.exports=s4});var x0=u((rRr,f4)=>{"use strict";var xQ=Object.prototype.propertyIsEnumerable;f4.exports=xQ});var p4=u((eRr,c4)=>{"use strict";var BQ=x0(),l4;function CQ(){return!BQ.call("beep","0")}l4=CQ();c4.exports=l4});var m4=u((tRr,g4)=>{"use strict";var jQ=k(),VQ=K().isPrimitive,GQ=Tr().isPrimitive,UQ=x0(),WQ=p4();function HQ(r,e){var t;return r==null?!1:(t=UQ.call(r,e),!t&&WQ&&jQ(r)?(e=+e,!VQ(e)&&GQ(e)&&e>=0&&e<r.length):t)}g4.exports=HQ});var on=u((iRr,q4)=>{"use strict";var kQ=m4();q4.exports=kQ});var h4=u((nRr,y4)=>{"use strict";var DQ=O(),XQ=on(),JQ=vr(),zQ=wr(),YQ=dt();function ZQ(r){return r!==null&&typeof r=="object"&&!JQ(r)&&typeof r.length=="number"&&zQ(r.length)&&r.length>=0&&r.length<=YQ&&DQ(r,"callee")&&!XQ(r,"callee")}y4.exports=ZQ});var C0=u((aRr,d4)=>{"use strict";var $Q=v4(),QQ=M0(),KQ=h4(),B0;$Q?B0=QQ:B0=KQ;d4.exports=B0});var E4=u((uRr,b4)=>{"use strict";var rK=C0(),w4=sn(),eK=Array.prototype.slice;function tK(r){return rK(r)?w4(eK.call(r)):w4(r)}b4.exports=tK});var A4=u((sRr,N4)=>{"use strict";function iK(){}N4.exports=iK});var M=u((oRr,O4)=>{"use strict";var nK=A4();O4.exports=nK});var T4=u((vRr,S4)=>{"use strict";var aK=on(),uK=M(),sK=aK(uK,"prototype");S4.exports=sK});var I4=u((fRr,L4)=>{"use strict";var oK=on(),vK={toString:null},fK=!oK(vK,"toString");L4.exports=fK});var j0=u((lRr,P4)=>{"use strict";function lK(r){return r.constructor&&r.constructor.prototype===r}P4.exports=lK});var R4=u((cRr,cK)=>{cK.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var F4=u((pRr,_4)=>{"use strict";var pK=typeof window>"u"?void 0:window;_4.exports=pK});var C4=u((gRr,B4)=>{"use strict";var gK=O(),mK=un(),M4=tn(),qK=j0(),yK=R4(),Ot=F4(),x4;function hK(){var r;if(M4(Ot)==="undefined")return!1;for(r in Ot)try{mK(yK,r)===-1&&gK(Ot,r)&&Ot[r]!==null&&M4(Ot[r])==="object"&&qK(Ot[r])}catch{return!0}return!1}x4=hK();B4.exports=x4});var V4=u((mRr,j4)=>{"use strict";var dK=typeof window<"u";j4.exports=dK});var W4=u((qRr,U4)=>{"use strict";var wK=C4(),G4=j0(),bK=V4();function EK(r){if(bK===!1&&!wK)return G4(r);try{return G4(r)}catch{return!1}}U4.exports=EK});var H4=u((yRr,NK)=>{NK.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var X4=u((hRr,D4)=>{"use strict";var AK=h0(),V0=O(),OK=C0(),SK=T4(),TK=I4(),LK=W4(),k4=H4();function IK(r){var e,t,i,n,a,s,o;if(n=[],OK(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!V0(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!AK(r))return n;t=SK&&i}for(a in r)!(t&&a==="prototype")&&V0(r,a)&&n.push(String(a));if(TK)for(e=LK(r),o=0;o<k4.length;o++)s=k4[o],!(e&&s==="constructor")&&V0(r,s)&&n.push(String(s));return n}D4.exports=IK});var z4=u((dRr,J4)=>{"use strict";var PK=i4(),RK=a4(),_K=sn(),FK=E4(),MK=X4(),vn;RK?PK()?vn=FK:vn=_K:vn=MK;J4.exports=vn});var fn=u((wRr,Y4)=>{"use strict";var xK=z4();Y4.exports=xK});var $4=u((bRr,Z4)=>{"use strict";var BK=typeof Object.getOwnPropertyNames<"u";Z4.exports=BK});var K4=u((ERr,Q4)=>{"use strict";var CK=Object.getOwnPropertyNames;function jK(r){return CK(Object(r))}Q4.exports=jK});var e5=u((NRr,r5)=>{"use strict";var VK=fn();function GK(r){return VK(Object(r))}r5.exports=GK});var i5=u((ARr,t5)=>{"use strict";var UK=$4(),WK=K4(),HK=e5(),G0;UK?G0=WK:G0=HK;t5.exports=G0});var a5=u((ORr,n5)=>{"use strict";var kK=typeof Object.getOwnPropertyDescriptor<"u";n5.exports=kK});var s5=u((SRr,u5)=>{"use strict";var DK=Object.getOwnPropertyDescriptor;function XK(r,e){var t;return r==null?null:(t=DK(r,e),t===void 0?null:t)}u5.exports=XK});var v5=u((TRr,o5)=>{"use strict";var JK=O();function zK(r,e){return JK(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}o5.exports=zK});var l5=u((LRr,f5)=>{"use strict";var YK=a5(),ZK=s5(),$K=v5(),U0;YK?U0=ZK:U0=$K;f5.exports=U0});var p5=u((IRr,c5)=>{"use strict";var QK=typeof Buffer=="function"?Buffer:null;c5.exports=QK});var m5=u((PRr,g5)=>{"use strict";var KK=rt(),ln=p5();function rrr(){var r,e;if(typeof ln!="function")return!1;try{typeof ln.from=="function"?e=ln.from([1,2,3,4]):e=new ln([1,2,3,4]),r=KK(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}g5.exports=rrr});var y5=u((RRr,q5)=>{"use strict";var err=m5();q5.exports=err});var w5=u(cn=>{"use strict";cn.byteLength=irr;cn.toByteArray=arr;cn.fromByteArray=orr;var Fr=[],Nr=[],trr=typeof Uint8Array<"u"?Uint8Array:Array,W0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(it=0,h5=W0.length;it<h5;++it)Fr[it]=W0[it],Nr[W0.charCodeAt(it)]=it;var it,h5;Nr["-".charCodeAt(0)]=62;Nr["_".charCodeAt(0)]=63;function d5(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function irr(r){var e=d5(r),t=e[0],i=e[1];return(t+i)*3/4-i}function nrr(r,e,t){return(e+t)*3/4-t}function arr(r){var e,t=d5(r),i=t[0],n=t[1],a=new trr(nrr(r,i,n)),s=0,o=n>0?i-4:i,v;for(v=0;v<o;v+=4)e=Nr[r.charCodeAt(v)]<<18|Nr[r.charCodeAt(v+1)]<<12|Nr[r.charCodeAt(v+2)]<<6|Nr[r.charCodeAt(v+3)],a[s++]=e>>16&255,a[s++]=e>>8&255,a[s++]=e&255;return n===2&&(e=Nr[r.charCodeAt(v)]<<2|Nr[r.charCodeAt(v+1)]>>4,a[s++]=e&255),n===1&&(e=Nr[r.charCodeAt(v)]<<10|Nr[r.charCodeAt(v+1)]<<4|Nr[r.charCodeAt(v+2)]>>2,a[s++]=e>>8&255,a[s++]=e&255),a}function urr(r){return Fr[r>>18&63]+Fr[r>>12&63]+Fr[r>>6&63]+Fr[r&63]}function srr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(urr(i));return n.join("")}function orr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,s=0,o=t-i;s<o;s+=a)n.push(srr(r,s,s+a>o?o:s+a));return i===1?(e=r[t-1],n.push(Fr[e>>2]+Fr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(Fr[e>>10]+Fr[e>>4&63]+Fr[e<<2&63]+"=")),n.join("")}});var b5=u(H0=>{H0.read=function(r,e,t,i,n){var a,s,o=n*8-i-1,v=(1<<o)-1,f=v>>1,l=-7,c=t?n-1:0,p=t?-1:1,q=r[e+c];for(c+=p,a=q&(1<<-l)-1,q>>=-l,l+=o;l>0;a=a*256+r[e+c],c+=p,l-=8);for(s=a&(1<<-l)-1,a>>=-l,l+=i;l>0;s=s*256+r[e+c],c+=p,l-=8);if(a===0)a=1-f;else{if(a===v)return s?NaN:(q?-1:1)*(1/0);s=s+Math.pow(2,i),a=a-f}return(q?-1:1)*s*Math.pow(2,a-i)};H0.write=function(r,e,t,i,n,a){var s,o,v,f=a*8-n-1,l=(1<<f)-1,c=l>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,q=i?0:a-1,y=i?1:-1,m=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-s))<1&&(s--,v*=2),s+c>=1?e+=p/v:e+=p*Math.pow(2,1-c),e*v>=2&&(s++,v/=2),s+c>=l?(o=0,s=l):s+c>=1?(o=(e*v-1)*Math.pow(2,n),s=s+c):(o=e*Math.pow(2,c-1)*Math.pow(2,n),s=0));n>=8;r[t+q]=o&255,q+=y,o/=256,n-=8);for(s=s<<n|o,f+=n;f>0;r[t+q]=s&255,q+=y,s/=256,f-=8);r[t+q-y]|=m*128}});var M5=u(Tt=>{"use strict";var k0=w5(),St=b5(),E5=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Tt.Buffer=w;Tt.SlowBuffer=grr;Tt.INSPECT_MAX_BYTES=50;var pn=2147483647;Tt.kMaxLength=pn;w.TYPED_ARRAY_SUPPORT=vrr();!w.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function vrr(){try{var r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(w.prototype,"parent",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.buffer}});Object.defineProperty(w.prototype,"offset",{enumerable:!0,get:function(){if(!!w.isBuffer(this))return this.byteOffset}});function jr(r){if(r>pn)throw new RangeError('The value "'+r+'" is invalid for option "size"');var e=new Uint8Array(r);return Object.setPrototypeOf(e,w.prototype),e}function w(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return z0(r)}return O5(r,e,t)}w.poolSize=8192;function O5(r,e,t){if(typeof r=="string")return lrr(r,e);if(ArrayBuffer.isView(r))return crr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Mr(r,ArrayBuffer)||r&&Mr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Mr(r,SharedArrayBuffer)||r&&Mr(r.buffer,SharedArrayBuffer)))return X0(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return w.from(i,e,t);var n=prr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return w.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}w.from=function(r,e,t){return O5(r,e,t)};Object.setPrototypeOf(w.prototype,Uint8Array.prototype);Object.setPrototypeOf(w,Uint8Array);function S5(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function frr(r,e,t){return S5(r),r<=0?jr(r):e!==void 0?typeof t=="string"?jr(r).fill(e,t):jr(r).fill(e):jr(r)}w.alloc=function(r,e,t){return frr(r,e,t)};function z0(r){return S5(r),jr(r<0?0:Y0(r)|0)}w.allocUnsafe=function(r){return z0(r)};w.allocUnsafeSlow=function(r){return z0(r)};function lrr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!w.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var t=T5(r,e)|0,i=jr(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function D0(r){for(var e=r.length<0?0:Y0(r.length)|0,t=jr(e),i=0;i<e;i+=1)t[i]=r[i]&255;return t}function crr(r){if(Mr(r,Uint8Array)){var e=new Uint8Array(r);return X0(e.buffer,e.byteOffset,e.byteLength)}return D0(r)}function X0(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');var i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,w.prototype),i}function prr(r){if(w.isBuffer(r)){var e=Y0(r.length)|0,t=jr(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||Z0(r.length)?jr(0):D0(r);if(r.type==="Buffer"&&Array.isArray(r.data))return D0(r.data)}function Y0(r){if(r>=pn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+pn.toString(16)+" bytes");return r|0}function grr(r){return+r!=r&&(r=0),w.alloc(+r)}w.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==w.prototype};w.compare=function(e,t){if(Mr(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),Mr(t,Uint8Array)&&(t=w.from(t,t.offset,t.byteLength)),!w.isBuffer(e)||!w.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var i=e.length,n=t.length,a=0,s=Math.min(i,n);a<s;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};w.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};w.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return w.alloc(0);var i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;var n=w.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){var s=e[i];if(Mr(s,Uint8Array))a+s.length>n.length?w.from(s).copy(n,a):Uint8Array.prototype.set.call(n,s,a);else if(w.isBuffer(s))s.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return n};function T5(r,e){if(w.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Mr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);var t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return J0(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return F5(r).length;default:if(n)return i?-1:J0(r).length;e=(""+e).toLowerCase(),n=!0}}w.byteLength=T5;function mrr(r,e,t){var i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Orr(this,e,t);case"utf8":case"utf-8":return I5(this,e,t);case"ascii":return Nrr(this,e,t);case"latin1":case"binary":return Arr(this,e,t);case"base64":return brr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Srr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}w.prototype._isBuffer=!0;function nt(r,e,t){var i=r[e];r[e]=r[t],r[t]=i}w.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)nt(this,t,t+1);return this};w.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)nt(this,t,t+3),nt(this,t+1,t+2);return this};w.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)nt(this,t,t+7),nt(this,t+1,t+6),nt(this,t+2,t+5),nt(this,t+3,t+4);return this};w.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?I5(this,0,e):mrr.apply(this,arguments)};w.prototype.toLocaleString=w.prototype.toString;w.prototype.equals=function(e){if(!w.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:w.compare(this,e)===0};w.prototype.inspect=function(){var e="",t=Tt.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};E5&&(w.prototype[E5]=w.prototype.inspect);w.prototype.compare=function(e,t,i,n,a){if(Mr(e,Uint8Array)&&(e=w.from(e,e.offset,e.byteLength)),!w.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;for(var s=a-n,o=i-t,v=Math.min(s,o),f=this.slice(n,a),l=e.slice(t,i),c=0;c<v;++c)if(f[c]!==l[c]){s=f[c],o=l[c];break}return s<o?-1:o<s?1:0};function L5(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Z0(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=w.from(e,i)),w.isBuffer(e))return e.length===0?-1:N5(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):N5(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function N5(r,e,t,i,n){var a=1,s=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,s/=2,o/=2,t/=2}function v(q,y){return a===1?q[y]:q.readUInt16BE(y*a)}var f;if(n){var l=-1;for(f=t;f<s;f++)if(v(r,f)===v(e,l===-1?0:f-l)){if(l===-1&&(l=f),f-l+1===o)return l*a}else l!==-1&&(f-=f-l),l=-1}else for(t+o>s&&(t=s-o),f=t;f>=0;f--){for(var c=!0,p=0;p<o;p++)if(v(r,f+p)!==v(e,p)){c=!1;break}if(c)return f}return-1}w.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};w.prototype.indexOf=function(e,t,i){return L5(this,e,t,i,!0)};w.prototype.lastIndexOf=function(e,t,i){return L5(this,e,t,i,!1)};function qrr(r,e,t,i){t=Number(t)||0;var n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;var a=e.length;i>a/2&&(i=a/2);for(var s=0;s<i;++s){var o=parseInt(e.substr(s*2,2),16);if(Z0(o))return s;r[t+s]=o}return s}function yrr(r,e,t,i){return gn(J0(e,r.length-t),r,t,i)}function hrr(r,e,t,i){return gn(Irr(e),r,t,i)}function drr(r,e,t,i){return gn(F5(e),r,t,i)}function wrr(r,e,t,i){return gn(Prr(e,r.length-t),r,t,i)}w.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return qrr(this,e,t,i);case"utf8":case"utf-8":return yrr(this,e,t,i);case"ascii":case"latin1":case"binary":return hrr(this,e,t,i);case"base64":return drr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return wrr(this,e,t,i);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}};w.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function brr(r,e,t){return e===0&&t===r.length?k0.fromByteArray(r):k0.fromByteArray(r.slice(e,t))}function I5(r,e,t){t=Math.min(r.length,t);for(var i=[],n=e;n<t;){var a=r[n],s=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){var v,f,l,c;switch(o){case 1:a<128&&(s=a);break;case 2:v=r[n+1],(v&192)===128&&(c=(a&31)<<6|v&63,c>127&&(s=c));break;case 3:v=r[n+1],f=r[n+2],(v&192)===128&&(f&192)===128&&(c=(a&15)<<12|(v&63)<<6|f&63,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:v=r[n+1],f=r[n+2],l=r[n+3],(v&192)===128&&(f&192)===128&&(l&192)===128&&(c=(a&15)<<18|(v&63)<<12|(f&63)<<6|l&63,c>65535&&c<1114112&&(s=c))}}s===null?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|s&1023),i.push(s),n+=o}return Err(i)}var A5=4096;function Err(r){var e=r.length;if(e<=A5)return String.fromCharCode.apply(String,r);for(var t="",i=0;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=A5));return t}function Nrr(r,e,t){var i="";t=Math.min(r.length,t);for(var n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function Arr(r,e,t){var i="";t=Math.min(r.length,t);for(var n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function Orr(r,e,t){var i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);for(var n="",a=e;a<t;++a)n+=Rrr[r[a]];return n}function Srr(r,e,t){for(var i=r.slice(e,t),n="",a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}w.prototype.slice=function(e,t){var i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,w.prototype),n};function rr(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}w.prototype.readUintLE=w.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||rr(e,t,this.length);for(var n=this[e],a=1,s=0;++s<t&&(a*=256);)n+=this[e+s]*a;return n};w.prototype.readUintBE=w.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||rr(e,t,this.length);for(var n=this[e+--t],a=1;t>0&&(a*=256);)n+=this[e+--t]*a;return n};w.prototype.readUint8=w.prototype.readUInt8=function(e,t){return e=e>>>0,t||rr(e,1,this.length),this[e]};w.prototype.readUint16LE=w.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||rr(e,2,this.length),this[e]|this[e+1]<<8};w.prototype.readUint16BE=w.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||rr(e,2,this.length),this[e]<<8|this[e+1]};w.prototype.readUint32LE=w.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||rr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};w.prototype.readUint32BE=w.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||rr(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};w.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||rr(e,t,this.length);for(var n=this[e],a=1,s=0;++s<t&&(a*=256);)n+=this[e+s]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};w.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||rr(e,t,this.length);for(var n=t,a=1,s=this[e+--n];n>0&&(a*=256);)s+=this[e+--n]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*t)),s};w.prototype.readInt8=function(e,t){return e=e>>>0,t||rr(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};w.prototype.readInt16LE=function(e,t){e=e>>>0,t||rr(e,2,this.length);var i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};w.prototype.readInt16BE=function(e,t){e=e>>>0,t||rr(e,2,this.length);var i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};w.prototype.readInt32LE=function(e,t){return e=e>>>0,t||rr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};w.prototype.readInt32BE=function(e,t){return e=e>>>0,t||rr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};w.prototype.readFloatLE=function(e,t){return e=e>>>0,t||rr(e,4,this.length),St.read(this,e,!0,23,4)};w.prototype.readFloatBE=function(e,t){return e=e>>>0,t||rr(e,4,this.length),St.read(this,e,!1,23,4)};w.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||rr(e,8,this.length),St.read(this,e,!0,52,8)};w.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||rr(e,8,this.length),St.read(this,e,!1,52,8)};function fr(r,e,t,i,n,a){if(!w.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}w.prototype.writeUintLE=w.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){var a=Math.pow(2,8*i)-1;fr(this,e,t,i,a,0)}var s=1,o=0;for(this[t]=e&255;++o<i&&(s*=256);)this[t+o]=e/s&255;return t+i};w.prototype.writeUintBE=w.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){var a=Math.pow(2,8*i)-1;fr(this,e,t,i,a,0)}var s=i-1,o=1;for(this[t+s]=e&255;--s>=0&&(o*=256);)this[t+s]=e/o&255;return t+i};w.prototype.writeUint8=w.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||fr(this,e,t,1,255,0),this[t]=e&255,t+1};w.prototype.writeUint16LE=w.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||fr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeUint16BE=w.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||fr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeUint32LE=w.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||fr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};w.prototype.writeUint32BE=w.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||fr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};w.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){var a=Math.pow(2,8*i-1);fr(this,e,t,i,a-1,-a)}var s=0,o=1,v=0;for(this[t]=e&255;++s<i&&(o*=256);)e<0&&v===0&&this[t+s-1]!==0&&(v=1),this[t+s]=(e/o>>0)-v&255;return t+i};w.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){var a=Math.pow(2,8*i-1);fr(this,e,t,i,a-1,-a)}var s=i-1,o=1,v=0;for(this[t+s]=e&255;--s>=0&&(o*=256);)e<0&&v===0&&this[t+s+1]!==0&&(v=1),this[t+s]=(e/o>>0)-v&255;return t+i};w.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||fr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};w.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||fr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};w.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||fr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};w.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||fr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};w.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||fr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function P5(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function R5(r,e,t,i,n){return e=+e,t=t>>>0,n||P5(r,e,t,4,34028234663852886e22,-34028234663852886e22),St.write(r,e,t,i,23,4),t+4}w.prototype.writeFloatLE=function(e,t,i){return R5(this,e,t,!0,i)};w.prototype.writeFloatBE=function(e,t,i){return R5(this,e,t,!1,i)};function _5(r,e,t,i,n){return e=+e,t=t>>>0,n||P5(r,e,t,8,17976931348623157e292,-17976931348623157e292),St.write(r,e,t,i,52,8),t+8}w.prototype.writeDoubleLE=function(e,t,i){return _5(this,e,t,!0,i)};w.prototype.writeDoubleBE=function(e,t,i){return _5(this,e,t,!1,i)};w.prototype.copy=function(e,t,i,n){if(!w.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);var a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};w.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!w.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var a=e.charCodeAt(0);(n==="utf8"&&a<128||n==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<i;++s)this[s]=e;else{var o=w.isBuffer(e)?e:w.from(e,n),v=o.length;if(v===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<i-t;++s)this[s+t]=o[s%v]}return this};var Trr=/[^+/0-9A-Za-z-_]/g;function Lrr(r){if(r=r.split("=")[0],r=r.trim().replace(Trr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function J0(r,e){e=e||1/0;for(var t,i=r.length,n=null,a=[],s=0;s<i;++s){if(t=r.charCodeAt(s),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(s+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function Irr(r){for(var e=[],t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function Prr(r,e){for(var t,i,n,a=[],s=0;s<r.length&&!((e-=2)<0);++s)t=r.charCodeAt(s),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function F5(r){return k0.toByteArray(Lrr(r))}function gn(r,e,t,i){for(var n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function Mr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function Z0(r){return r!==r}var Rrr=function(){for(var r="0123456789abcdef",e=new Array(256),t=0;t<16;++t)for(var i=t*16,n=0;n<16;++n)e[i+n]=r[t]+r[n];return e}()});var B5=u((xRr,x5)=>{"use strict";var _rr=M5().Buffer;x5.exports=_rr});var j5=u((BRr,C5)=>{"use strict";function Frr(){throw new Error("not implemented")}C5.exports=Frr});var mn=u((CRr,V5)=>{"use strict";var Mrr=y5(),xrr=B5(),Brr=j5(),$0;Mrr()?$0=xrr:$0=Brr;V5.exports=$0});var U5=u((jRr,G5)=>{"use strict";var Crr=I(),jrr=mn(),Vrr=Crr(jrr.from);G5.exports=Vrr});var H5=u((VRr,W5)=>{"use strict";var Grr=rt(),Urr=mn();function Wrr(r){if(!Grr(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return Urr.from(r)}W5.exports=Wrr});var D5=u((GRr,k5)=>{"use strict";var Hrr=rt(),krr=mn();function Drr(r){if(!Hrr(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new krr(r)}k5.exports=Drr});var J5=u((URr,X5)=>{"use strict";var Xrr=U5(),Jrr=H5(),zrr=D5(),Q0;Xrr?Q0=Jrr:Q0=zrr;X5.exports=Q0});var Y5=u((WRr,z5)=>{"use strict";var Yrr=Y(),Zrr=typeof Int8Array=="function";function $rr(r){return Zrr&&r instanceof Int8Array||Yrr(r)==="[object Int8Array]"}z5.exports=$rr});var $5=u((HRr,Z5)=>{"use strict";var Qrr=Y5();Z5.exports=Qrr});var K5=u((kRr,Q5)=>{"use strict";var Krr=127;Q5.exports=Krr});var e8=u((DRr,r8)=>{"use strict";var rer=-128;r8.exports=rer});var i8=u((XRr,t8)=>{"use strict";var eer=typeof Int8Array=="function"?Int8Array:null;t8.exports=eer});var u8=u((JRr,a8)=>{"use strict";var ter=$5(),ier=K5(),ner=e8(),n8=i8();function aer(){var r,e;if(typeof n8!="function")return!1;try{e=new n8([1,3.14,-3.14,ier+1]),r=ter(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===ner}catch{r=!1}return r}a8.exports=aer});var o8=u((zRr,s8)=>{"use strict";var uer=u8();s8.exports=uer});var f8=u((YRr,v8)=>{"use strict";var ser=typeof Int8Array=="function"?Int8Array:void 0;v8.exports=ser});var c8=u((ZRr,l8)=>{"use strict";function oer(){throw new Error("not implemented")}l8.exports=oer});var qi=u(($Rr,p8)=>{"use strict";var ver=o8(),fer=f8(),ler=c8(),K0;ver()?K0=fer:K0=ler;p8.exports=K0});var m8=u((QRr,g8)=>{"use strict";var cer=Y(),per=typeof Uint8ClampedArray=="function";function ger(r){return per&&r instanceof Uint8ClampedArray||cer(r)==="[object Uint8ClampedArray]"}g8.exports=ger});var y8=u((KRr,q8)=>{"use strict";var mer=m8();q8.exports=mer});var d8=u((r_r,h8)=>{"use strict";var qer=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;h8.exports=qer});var E8=u((e_r,b8)=>{"use strict";var yer=y8(),w8=d8();function her(){var r,e;if(typeof w8!="function")return!1;try{e=new w8([-1,0,1,3.14,4.99,255,256]),r=yer(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}b8.exports=her});var A8=u((t_r,N8)=>{"use strict";var der=E8();N8.exports=der});var S8=u((i_r,O8)=>{"use strict";var wer=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;O8.exports=wer});var L8=u((n_r,T8)=>{"use strict";function ber(){throw new Error("not implemented")}T8.exports=ber});var yi=u((a_r,I8)=>{"use strict";var Eer=A8(),Ner=S8(),Aer=L8(),rs;Eer()?rs=Ner:rs=Aer;I8.exports=rs});var R8=u((u_r,P8)=>{"use strict";var Oer=Y(),Ser=typeof Int16Array=="function";function Ter(r){return Ser&&r instanceof Int16Array||Oer(r)==="[object Int16Array]"}P8.exports=Ter});var F8=u((s_r,_8)=>{"use strict";var Ler=R8();_8.exports=Ler});var x8=u((o_r,M8)=>{"use strict";var Ier=32767;M8.exports=Ier});var C8=u((v_r,B8)=>{"use strict";var Per=-32768;B8.exports=Per});var V8=u((f_r,j8)=>{"use strict";var Rer=typeof Int16Array=="function"?Int16Array:null;j8.exports=Rer});var W8=u((l_r,U8)=>{"use strict";var _er=F8(),Fer=x8(),Mer=C8(),G8=V8();function xer(){var r,e;if(typeof G8!="function")return!1;try{e=new G8([1,3.14,-3.14,Fer+1]),r=_er(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Mer}catch{r=!1}return r}U8.exports=xer});var k8=u((c_r,H8)=>{"use strict";var Ber=W8();H8.exports=Ber});var X8=u((p_r,D8)=>{"use strict";var Cer=typeof Int16Array=="function"?Int16Array:void 0;D8.exports=Cer});var z8=u((g_r,J8)=>{"use strict";function jer(){throw new Error("not implemented")}J8.exports=jer});var hi=u((m_r,Y8)=>{"use strict";var Ver=k8(),Ger=X8(),Uer=z8(),es;Ver()?es=Ger:es=Uer;Y8.exports=es});var $8=u((q_r,Z8)=>{"use strict";var Wer=Y(),Her=typeof Int32Array=="function";function ker(r){return Her&&r instanceof Int32Array||Wer(r)==="[object Int32Array]"}Z8.exports=ker});var qn=u((y_r,Q8)=>{"use strict";var Der=$8();Q8.exports=Der});var Lt=u((h_r,K8)=>{"use strict";var Xer=2147483647;K8.exports=Xer});var eg=u((d_r,rg)=>{"use strict";var Jer=-2147483648;rg.exports=Jer});var ig=u((w_r,tg)=>{"use strict";var zer=typeof Int32Array=="function"?Int32Array:null;tg.exports=zer});var ug=u((b_r,ag)=>{"use strict";var Yer=qn(),Zer=Lt(),$er=eg(),ng=ig();function Qer(){var r,e;if(typeof ng!="function")return!1;try{e=new ng([1,3.14,-3.14,Zer+1]),r=Yer(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===$er}catch{r=!1}return r}ag.exports=Qer});var og=u((E_r,sg)=>{"use strict";var Ker=ug();sg.exports=Ker});var fg=u((N_r,vg)=>{"use strict";var rtr=typeof Int32Array=="function"?Int32Array:void 0;vg.exports=rtr});var cg=u((A_r,lg)=>{"use strict";function etr(){throw new Error("not implemented")}lg.exports=etr});var at=u((O_r,pg)=>{"use strict";var ttr=og(),itr=fg(),ntr=cg(),ts;ttr()?ts=itr:ts=ntr;pg.exports=ts});var mg=u((S_r,gg)=>{"use strict";var atr=Y(),utr=typeof Float32Array=="function";function str(r){return utr&&r instanceof Float32Array||atr(r)==="[object Float32Array]"}gg.exports=str});var yg=u((T_r,qg)=>{"use strict";var otr=mg();qg.exports=otr});var dg=u((L_r,hg)=>{"use strict";var vtr=typeof Float32Array=="function"?Float32Array:null;hg.exports=vtr});var Eg=u((I_r,bg)=>{"use strict";var ftr=yg(),ltr=j(),wg=dg();function ctr(){var r,e;if(typeof wg!="function")return!1;try{e=new wg([1,3.14,-3.14,5e40]),r=ftr(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===ltr}catch{r=!1}return r}bg.exports=ctr});var Ag=u((P_r,Ng)=>{"use strict";var ptr=Eg();Ng.exports=ptr});var Sg=u((R_r,Og)=>{"use strict";var gtr=typeof Float32Array=="function"?Float32Array:void 0;Og.exports=gtr});var Lg=u((__r,Tg)=>{"use strict";function mtr(){throw new Error("not implemented")}Tg.exports=mtr});var Vr=u((F_r,Ig)=>{"use strict";var qtr=Ag(),ytr=Sg(),htr=Lg(),is;qtr()?is=ytr:is=htr;Ig.exports=is});var _g=u((M_r,Rg)=>{"use strict";var dtr=qi(),wtr=wt(),btr=yi(),Etr=hi(),Ntr=bt(),Atr=at(),Otr=ar(),Str=Vr(),Ttr=sr(),Pg;function Ltr(r){return new dtr(r)}function Itr(r){return new wtr(r)}function Ptr(r){return new btr(r)}function Rtr(r){return new Etr(r)}function _tr(r){return new Ntr(r)}function Ftr(r){return new Atr(r)}function Mtr(r){return new Otr(r)}function xtr(r){return new Str(r)}function Btr(r){return new Ttr(r)}function Ctr(){var r={int8array:Ltr,uint8array:Itr,uint8clampedarray:Ptr,int16array:Rtr,uint16array:_tr,int32array:Ftr,uint32array:Mtr,float32array:xtr,float64array:Btr};return r}Pg=Ctr();Rg.exports=Pg});var Cg=u((x_r,Bg)=>{"use strict";var yn=O(),ns=vr(),Fg=rt(),jtr=k3(),Mg=tn(),Vtr=V6(),Gtr=un(),xg=fn(),Utr=i5(),di=l5(),Wtr=et(),wi=he(),Htr=J5(),ktr=_g();function Dtr(r){var e,t,i,n,a,s,o,v;for(e=[],n=[],o=Object.create(Wtr(r)),e.push(r),n.push(o),t=Utr(r),v=0;v<t.length;v++)i=t[v],a=di(r,i),yn(a,"value")&&(s=ns(r[i])?[]:{},a.value=ut(r[i],s,e,n,-1)),wi(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function Xtr(r){var e=[],t=[],i,n,a,s,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=xg(r),v=0;v<i.length;v++)s=i[v],n=di(r,s),yn(n,"value")&&(a=ns(r[s])?[]:{},n.value=ut(r[s],a,e,t,-1)),wi(o,s,n);return o}function ut(r,e,t,i,n){var a,s,o,v,f,l,c,p,q,y;if(n-=1,typeof r!="object"||r===null)return r;if(Fg(r))return Htr(r);if(jtr(r))return Xtr(r);if(o=Mg(r),o==="date")return new Date(+r);if(o==="regexp")return Vtr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=ktr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?Dtr(r):{};if(s=xg(r),n>0)for(a=o,y=0;y<s.length;y++){if(l=s[y],p=r[l],o=Mg(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||Fg(p)){a==="object"?(v=di(r,l),yn(v,"value")&&(v.value=ut(p)),wi(e,l,v)):e[l]=ut(p);continue}if(q=Gtr(t,p),q!==-1){e[l]=i[q];continue}c=ns(p)?new Array(p.length):{},t.push(p),i.push(c),a==="array"?e[l]=ut(p,c,t,i,n):(v=di(r,l),yn(v,"value")&&(v.value=ut(p,c,t,i,n)),wi(e,l,v))}else if(o==="array")for(y=0;y<s.length;y++)l=s[y],e[l]=r[l];else for(y=0;y<s.length;y++)l=s[y],v=di(r,l),wi(e,l,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}Bg.exports=ut});var Vg=u((B_r,jg)=>{"use strict";var Jtr=vr(),ztr=de().isPrimitive,Ytr=j(),Ztr=Cg();function $tr(r,e){var t;if(arguments.length>1){if(!ztr(e))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+e+"`.");if(e===0)return r}else e=Ytr;return t=Jtr(r)?new Array(r.length):{},Ztr(r,t,[r],[t],e)}jg.exports=$tr});var It=u((C_r,Gg)=>{"use strict";var Qtr=Vg();Gg.exports=Qtr});var Ug=u((j_r,Ktr)=>{Ktr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var Hg=u((V_r,Wg)=>{"use strict";var rir=It(),eir=Ug();function tir(){return rir(eir)}Wg.exports=tir});var Xg=u((G_r,Dg)=>{"use strict";var iir=E(),kg=Nt(),nir=j(),air=D(),uir=1/(1<<28);function sir(r){var e,t;return iir(r)?NaN:r<-1||r>1?NaN:r===1?nir:r===-1?air:(r<0&&(e=!0,r=-r),r<uir?e?-r:r:(r<.5?(t=r+r,t=.5*kg(t+t*r/(1-r))):t=.5*kg((r+r)/(1-r)),e?-t:t))}Dg.exports=sir});var zg=u((U_r,Jg)=>{"use strict";var oir=Xg();Jg.exports=oir});var Zg=u((W_r,Yg)=>{"use strict";var vir=gi();function fir(r){return vir(1+r)}Yg.exports=fir});var Qg=u((H_r,$g)=>{"use strict";var lir=Zg();$g.exports=lir});var r7=u((k_r,Kg)=>{"use strict";var cir=gi();function pir(r){return cir(1-r)}Kg.exports=pir});var t7=u((D_r,e7)=>{"use strict";var gir=r7();e7.exports=gir});var n7=u((X_r,i7)=>{"use strict";var mir=tr().isPrimitive,qir=L();function yir(r,e){if(!mir(r))throw new TypeError(qir("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}i7.exports=yir});var u7=u((J_r,a7)=>{"use strict";function hir(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}a7.exports=hir});var o7=u((z_r,s7)=>{"use strict";var dir=L(),wir=u7();function bir(r,e,t){if(!wir(r,e))throw new TypeError(dir("invalid argument. %s must be broadcast compatible.",t))}s7.exports=bir});var f7=u((Y_r,v7)=>{"use strict";function Eir(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}v7.exports=Eir});var c7=u((Z_r,l7)=>{"use strict";var Nir=L(),Air=f7();function Oir(r,e,t,i){if(!Air(r,e))throw new TypeError(Nir("invalid argument. %s must be broadcast compatible with %s.",t,i))}l7.exports=Oir});var as=u(($_r,p7)=>{"use strict";var Sir=L();function Tir(r,e){if(r===void 0)throw new Error(Sir("invalid invocation. Must provide %s.",e))}p7.exports=Tir});var m7=u((Q_r,g7)=>{"use strict";var Lir=L();function Iir(r,e,t,i){if(!(r>e))throw new TypeError(Lir("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}g7.exports=Iir});var y7=u((K_r,q7)=>{"use strict";var Pir=L();function Rir(r,e,t,i){if(!(r>=e))throw new TypeError(Pir("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}q7.exports=Rir});var d7=u((rFr,h7)=>{"use strict";var _ir=Tr().isPrimitive,Fir=L();function Mir(r,e){if(!_ir(r))throw new TypeError(Fir("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}h7.exports=Mir});var b7=u((eFr,w7)=>{"use strict";var xir=L();function Bir(r,e,t,i){if(!(r<e))throw new TypeError(xir("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}w7.exports=Bir});var N7=u((tFr,E7)=>{"use strict";var Cir=L();function jir(r,e,t,i){if(!(r<=e))throw new TypeError(Cir("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}E7.exports=jir});var O7=u((iFr,A7)=>{"use strict";var Vir=de().isPrimitive,Gir=L();function Uir(r,e){if(!Vir(r))throw new TypeError(Gir("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}A7.exports=Uir});var us=u((nFr,S7)=>{"use strict";var Wir=B().isPrimitive;function Hir(r){return Wir(r)&&r>=0}S7.exports=Hir});var ss=u((aFr,T7)=>{"use strict";var kir=B().isObject;function Dir(r){return kir(r)&&r.valueOf()>=0}T7.exports=Dir});var I7=u((uFr,L7)=>{"use strict";var Xir=us(),Jir=ss();function zir(r){return Xir(r)||Jir(r)}L7.exports=zir});var vs=u((sFr,R7)=>{"use strict";var P7=b(),os=I7(),Yir=us(),Zir=ss();P7(os,"isPrimitive",Yir);P7(os,"isObject",Zir);R7.exports=os});var F7=u((oFr,_7)=>{"use strict";var $ir=vs().isPrimitive,Qir=L();function Kir(r,e){if(!$ir(r))throw new TypeError(Qir("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}_7.exports=Kir});var x7=u((vFr,M7)=>{"use strict";var rnr=B().isPrimitive,enr=L();function tnr(r,e){if(!rnr(r))throw new TypeError(enr("invalid argument. %s must be a number. Value: %s.",e,String(r)))}M7.exports=tnr});var C7=u((fFr,B7)=>{"use strict";var inr=L();function nnr(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(inr('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}B7.exports=nnr});var fs=u((lFr,j7)=>{"use strict";var anr=Tr().isPrimitive;function unr(r){return anr(r)&&r>0}j7.exports=unr});var ls=u((cFr,V7)=>{"use strict";var snr=Tr().isObject;function onr(r){return snr(r)&&r.valueOf()>0}V7.exports=onr});var U7=u((pFr,G7)=>{"use strict";var vnr=fs(),fnr=ls();function lnr(r){return vnr(r)||fnr(r)}G7.exports=lnr});var Gr=u((gFr,H7)=>{"use strict";var W7=b(),cs=U7(),cnr=fs(),pnr=ls();W7(cs,"isPrimitive",cnr);W7(cs,"isObject",pnr);H7.exports=cs});var ps=u((mFr,k7)=>{"use strict";var gnr=Gr().isPrimitive,mnr=L();function qnr(r,e){if(!gnr(r))throw new TypeError(mnr("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}k7.exports=qnr});var gs=u((qFr,D7)=>{"use strict";var ynr=B().isPrimitive;function hnr(r){return ynr(r)&&r>0}D7.exports=hnr});var ms=u((yFr,X7)=>{"use strict";var dnr=B().isObject;function wnr(r){return dnr(r)&&r.valueOf()>0}X7.exports=wnr});var z7=u((hFr,J7)=>{"use strict";var bnr=gs(),Enr=ms();function Nnr(r){return bnr(r)||Enr(r)}J7.exports=Nnr});var G=u((dFr,Z7)=>{"use strict";var Y7=b(),qs=z7(),Anr=gs(),Onr=ms();Y7(qs,"isPrimitive",Anr);Y7(qs,"isObject",Onr);Z7.exports=qs});var Q7=u((wFr,$7)=>{"use strict";var Snr=G().isPrimitive,Tnr=L();function Lnr(r,e){if(!Snr(r))throw new TypeError(Tnr("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}$7.exports=Lnr});var ys=u((bFr,K7)=>{"use strict";var Inr=B().isPrimitive;function Pnr(r){return Inr(r)&&r>=0&&r<=1}K7.exports=Pnr});var hs=u((EFr,r9)=>{"use strict";var Rnr=B().isObject;function _nr(r){return Rnr(r)&&r.valueOf()>=0&&r.valueOf()<=1}r9.exports=_nr});var t9=u((NFr,e9)=>{"use strict";var Fnr=ys(),Mnr=hs();function xnr(r){return Fnr(r)||Mnr(r)}e9.exports=xnr});var bi=u((AFr,n9)=>{"use strict";var i9=b(),ds=t9(),Bnr=ys(),Cnr=hs();i9(ds,"isPrimitive",Bnr);i9(ds,"isObject",Cnr);n9.exports=ds});var u9=u((OFr,a9)=>{"use strict";var jnr=bi().isPrimitive,Vnr=L();function Gnr(r,e){if(!jnr(r))throw new TypeError(Vnr("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}a9.exports=Gnr});var o9=u((SFr,s9)=>{"use strict";var Unr=vr(),Wnr=L();function Hnr(r,e){if(!Unr(r))throw new TypeError(Wnr("invalid argument. %s must be a range. Value: %s.",e,String(r)))}s9.exports=Hnr});var f9=u((TFr,v9)=>{"use strict";function knr(r){return r.length===1||r[0].length===1}v9.exports=knr});var ws=u((LFr,l9)=>{"use strict";var Dnr=vr(),Xnr=f9();function Jnr(r){return Dnr(r)&&Xnr(r)}l9.exports=Jnr});var p9=u((IFr,c9)=>{"use strict";var znr=L(),Ynr=ws();function Znr(r,e){if(!Ynr(r))throw new TypeError(znr("invalid argument. %s must consist of only a single row or a single column.",e))}c9.exports=Znr});var m9=u((PFr,g9)=>{"use strict";function $nr(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}g9.exports=$nr});var y9=u((RFr,q9)=>{"use strict";var Qnr=L(),Knr=m9();function rar(r,e,t){if(!Knr(r,e))throw new TypeError(Qnr("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}q9.exports=rar});var d9=u((_Fr,h9)=>{"use strict";var ear=k().isPrimitive,tar=L();function iar(r,e){if(!ear(r))throw new TypeError(tar("invalid argument. %s must be a string. Value: %s.",e,String(r)))}h9.exports=iar});var b9=u((FFr,w9)=>{"use strict";var nar=L();function aar(r){throw new Error(nar("invalid argument. Unrecognized option name. Value: %s.",String(r)))}w9.exports=aar});var A9=u((MFr,N9)=>{"use strict";var E9=ps(),uar=as();function sar(r,e,t){E9(r,"Number of rows"),E9(e,"Number of columns"),uar(t,"a pseudorandom number generator seed")}N9.exports=sar});var hn=u((xFr,O9)=>{"use strict";function oar(r){var e,t,i,n,a,s;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)e.push(n[s]);return e}O9.exports=oar});var T9=u((BFr,S9)=>{"use strict";var far=vr(),lar=Tr().isPrimitive,car=L(),par=hn();function gar(r){if(lar(r))return r;if(far(r))return par(r);throw new TypeError(car("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}S9.exports=gar});var I9=u((CFr,L9)=>{"use strict";var mar=vr();function qar(r){return typeof r=="object"&&r!==null&&!mar(r)}L9.exports=qar});var dn=u((jFr,P9)=>{"use strict";var yar=I9();P9.exports=yar});var F9=u((VFr,_9)=>{"use strict";var har=dn(),R9=I(),dar=et(),wn=O(),war=Y(),bar=Object.prototype;function Ear(r){var e;for(e in r)if(!wn(r,e))return!1;return!0}function Nar(r){var e;return har(r)?(e=dar(r),e?!wn(r,"constructor")&&wn(e,"constructor")&&R9(e.constructor)&&war(e.constructor)==="[object Function]"&&wn(e,"isPrototypeOf")&&R9(e.isPrototypeOf)&&(e===bar||Ear(r)):!0):!1}_9.exports=Nar});var T=u((GFr,M9)=>{"use strict";var Aar=F9();M9.exports=Aar});var B9=u((UFr,x9)=>{"use strict";var Oar=he();function Sar(r,e,t){Oar(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}x9.exports=Sar});var j9=u((WFr,C9)=>{"use strict";var Tar=B9();C9.exports=Tar});var G9=u((HFr,V9)=>{"use strict";var Lar=Math.ceil;V9.exports=Lar});var W9=u((kFr,U9)=>{"use strict";var Iar=G9();U9.exports=Iar});var k9=u((DFr,H9)=>{"use strict";var Par=$(),Rar=W9();function _ar(r){return r<0?Rar(r):Par(r)}H9.exports=_ar});var bn=u((XFr,D9)=>{"use strict";var Far=k9();D9.exports=Far});var J9=u((JFr,X9)=>{"use strict";function Mar(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}X9.exports=Mar});var Y9=u((zFr,z9)=>{"use strict";function xar(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}z9.exports=xar});var $9=u((YFr,Z9)=>{"use strict";var Bar=J9(),Car=Y9();function jar(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*Bar(a),i+=n*n*Car(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}Z9.exports=jar});var bs=u((ZFr,Q9)=>{"use strict";var Var=$9();Q9.exports=Var});var em=u(($Fr,rm)=>{"use strict";var K9=-.16666666666666632,Gar=.00833333333332249,Uar=-.0001984126982985795,War=27557313707070068e-22,Har=-25050760253406863e-24,kar=158969099521155e-24;function Dar(r,e){var t,i,n,a;return a=r*r,n=a*a,t=Gar+a*(Uar+a*War)+a*n*(Har+a*kar),i=a*r,e===0?r+i*(K9+a*t):r-(a*(.5*e-i*t)-e-i*K9)}rm.exports=Dar});var Es=u((QFr,tm)=>{"use strict";var Xar=em();tm.exports=Xar});var nm=u((KFr,im)=>{"use strict";var Jar=Ke(),Ns;Jar===!0?Ns=0:Ns=1;im.exports=Ns});var sm=u((rMr,um)=>{"use strict";var zar=ar(),Yar=sr(),Zar=nm(),am=new Yar(1),$ar=new zar(am.buffer);function Qar(r){return am[0]=r,$ar[Zar]}um.exports=Qar});var vm=u((eMr,om)=>{"use strict";var Kar=sm();om.exports=Kar});var cm=u((tMr,lm)=>{"use strict";var rur=Ke(),fm,As,Os;rur===!0?(As=1,Os=0):(As=0,Os=1);fm={HIGH:As,LOW:Os};lm.exports=fm});var ym=u((iMr,qm)=>{"use strict";var eur=ar(),tur=sr(),gm=cm(),mm=new tur(1),pm=new eur(mm.buffer),iur=gm.HIGH,nur=gm.LOW;function aur(r,e){return pm[iur]=r,pm[nur]=e,mm[0]}qm.exports=aur});var En=u((nMr,hm)=>{"use strict";var uur=ym();hm.exports=uur});var wm=u((aMr,dm)=>{"use strict";var sur=1023;dm.exports=sur});var Em=u((uMr,bm)=>{"use strict";var our=-1023;bm.exports=our});var Am=u((sMr,Nm)=>{"use strict";var vur=-1074;Nm.exports=vur});var Tm=u((oMr,Sm)=>{"use strict";var fur=Ke(),Om,Ss,Ts;fur===!0?(Ss=1,Ts=0):(Ss=0,Ts=1);Om={HIGH:Ss,LOW:Ts};Sm.exports=Om});var _m=u((vMr,Rm)=>{"use strict";var lur=ar(),cur=sr(),Im=Tm(),Pm=new cur(1),Lm=new lur(Pm.buffer),pur=Im.HIGH,gur=Im.LOW;function mur(r,e){return Pm[0]=e,r[0]=Lm[pur],r[1]=Lm[gur],r}Rm.exports=mur});var xm=u((fMr,Mm)=>{"use strict";var Fm=_m();function qur(r,e){return arguments.length===1?Fm([0,0],r):Fm(r,e)}Mm.exports=qur});var Nn=u((lMr,Bm)=>{"use strict";var yur=xm();Bm.exports=yur});var jm=u((cMr,Cm)=>{"use strict";var hur=Nn(),dur=or(),wur=En(),bur=2147483648>>>0,Eur=2147483647,Ls=[0,0];function Nur(r,e){var t,i;return hur(Ls,r),t=Ls[0],t&=Eur,i=dur(e),i&=bur,t|=i,wur(t,Ls[1])}Cm.exports=Nur});var An=u((pMr,Vm)=>{"use strict";var Aur=jm();Vm.exports=Aur});var Um=u((gMr,Gm)=>{"use strict";var Our=22250738585072014e-324;Gm.exports=Our});var Hm=u((mMr,Wm)=>{"use strict";var Sur=Um(),Tur=ye(),Lur=E(),Iur=z(),Pur=4503599627370496;function Rur(r,e){return Lur(e)||Tur(e)?(r[0]=e,r[1]=0,r):e!==0&&Iur(e)<Sur?(r[0]=e*Pur,r[1]=-52,r):(r[0]=e,r[1]=0,r)}Wm.exports=Rur});var Xm=u((qMr,Dm)=>{"use strict";var km=Hm();function _ur(r,e){return arguments.length===1?km([0,0],r):km(r,e)}Dm.exports=_ur});var zm=u((yMr,Jm)=>{"use strict";var Fur=Xm();Jm.exports=Fur});var Zm=u((hMr,Ym)=>{"use strict";var Mur=2146435072;Ym.exports=Mur});var Qm=u((dMr,$m)=>{"use strict";var xur=or(),Bur=Zm(),Cur=qe();function jur(r){var e=xur(r);return e=(e&Bur)>>>20,e-Cur|0}$m.exports=jur});var rq=u((wMr,Km)=>{"use strict";var Vur=Qm();Km.exports=Vur});var tq=u((bMr,eq)=>{"use strict";var Gur=j(),Uur=D(),Wur=qe(),Hur=wm(),kur=Em(),Dur=Am(),Xur=E(),Jur=ye(),zur=An(),Yur=zm(),Zur=rq(),$ur=Nn(),Qur=En(),Kur=2220446049250313e-31,r0r=2148532223>>>0,Is=[0,0],Ps=[0,0];function e0r(r,e){var t,i;return e===0||r===0||Xur(r)||Jur(r)?r:(Yur(Is,r),r=Is[0],e+=Is[1],e+=Zur(r),e<Dur?zur(0,r):e>Hur?r<0?Uur:Gur:(e<=kur?(e+=52,i=Kur):i=1,$ur(Ps,r),t=Ps[0],t&=r0r,t|=e+Wur<<20,i*Qur(t,Ps[1])))}eq.exports=e0r});var On=u((EMr,iq)=>{"use strict";var t0r=tq();iq.exports=t0r});var aq=u((NMr,nq)=>{"use strict";function i0r(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}nq.exports=i0r});var Rs=u((AMr,uq)=>{"use strict";var n0r=aq();uq.exports=n0r});var oq=u((OMr,sq)=>{"use strict";var a0r=Rs();function u0r(r){return a0r(0,r)}sq.exports=u0r});var fq=u((SMr,vq)=>{"use strict";var s0r=oq();vq.exports=s0r});var mq=u((TMr,gq)=>{"use strict";var o0r=$(),Sn=On(),In=fq(),cq=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],v0r=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],_s=16777216,Fs=5960464477539063e-23,Tn=In(20),lq=In(20),Ln=In(20),ir=In(20);function pq(r,e,t,i,n,a,s,o,v){var f,l,c,p,q,y,m,g,h;for(p=a,h=i[t],g=t,q=0;g>0;q++)l=Fs*h|0,ir[q]=h-_s*l|0,h=i[g-1]+l,g-=1;if(h=Sn(h,n),h-=8*o0r(h*.125),m=h|0,h-=m,c=0,n>0?(q=ir[t-1]>>24-n,m+=q,ir[t-1]-=q<<24-n,c=ir[t-1]>>23-n):n===0?c=ir[t-1]>>23:h>=.5&&(c=2),c>0){for(m+=1,f=0,q=0;q<t;q++)g=ir[q],f===0?g!==0&&(f=1,ir[q]=16777216-g):ir[q]=16777215-g;if(n>0)switch(n){case 1:ir[t-1]&=8388607;break;case 2:ir[t-1]&=4194303;break}c===2&&(h=1-h,f!==0&&(h-=Sn(1,n)))}if(h===0){for(g=0,q=t-1;q>=a;q--)g|=ir[q];if(g===0){for(y=1;ir[a-y]===0;y++);for(q=t+1;q<=t+y;q++){for(v[o+q]=cq[s+q],l=0,g=0;g<=o;g++)l+=r[g]*v[o+(q-g)];i[q]=l}return t+=y,pq(r,e,t,i,n,a,s,o,v)}}if(h===0)for(t-=1,n-=24;ir[t]===0;)t-=1,n-=24;else h=Sn(h,-n),h>=_s?(l=Fs*h|0,ir[t]=h-_s*l|0,t+=1,n+=24,ir[t]=l):ir[t]=h|0;for(l=Sn(1,n),q=t;q>=0;q--)i[q]=l*ir[q],l*=Fs;for(q=t;q>=0;q--){for(l=0,y=0;y<=p&&y<=t-q;y++)l+=v0r[y]*i[q+y];Ln[t-q]=l}for(l=0,q=t;q>=0;q--)l+=Ln[q];for(c===0?e[0]=l:e[0]=-l,l=Ln[0]-l,q=1;q<=t;q++)l+=Ln[q];return c===0?e[1]=l:e[1]=-l,m&7}function f0r(r,e,t,i){var n,a,s,o,v,f,l,c,p;for(a=4,o=i-1,s=(t-3)/24|0,s<0&&(s=0),f=t-24*(s+1),c=s-o,p=o+a,l=0;l<=p;l++)c<0?Tn[l]=0:Tn[l]=cq[c],c+=1;for(l=0;l<=a;l++){for(n=0,c=0;c<=o;c++)n+=r[c]*Tn[o+(l-c)];lq[l]=n}return v=a,pq(r,e,v,lq,f,a,s,o,Tn)}gq.exports=f0r});var yq=u((LMr,qq)=>{"use strict";var l0r=Math.round;qq.exports=l0r});var Ms=u((IMr,hq)=>{"use strict";var c0r=yq();hq.exports=c0r});var Eq=u((PMr,bq)=>{"use strict";var p0r=Ms(),dq=or(),g0r=.6366197723675814,m0r=1.5707963267341256,q0r=6077100506506192e-26,y0r=6077100506303966e-26,h0r=20222662487959506e-37,d0r=20222662487111665e-37,w0r=84784276603689e-45,wq=2047;function b0r(r,e,t){var i,n,a,s,o,v,f;return n=p0r(r*g0r),s=r-n*m0r,o=n*q0r,f=e>>20|0,t[0]=s-o,i=dq(t[0]),v=f-(i>>20&wq),v>16&&(a=s,o=n*y0r,s=a-o,o=n*h0r-(a-s-o),t[0]=s-o,i=dq(t[0]),v=f-(i>>20&wq),v>49&&(a=s,o=n*d0r,s=a-o,o=n*w0r-(a-s-o),t[0]=s-o)),t[1]=s-t[0]-o,n}bq.exports=b0r});var Aq=u((RMr,Nq)=>{"use strict";var E0r=or(),N0r=vm(),A0r=En(),O0r=mq(),Pn=Eq(),S0r=0,T0r=16777216,be=1.5707963267341256,st=6077100506506192e-26,Rn=2*st,_n=3*st,Fn=4*st,L0r=2147483647,I0r=2146435072,P0r=1048575,R0r=598523,_0r=1072243195,F0r=1073928572,M0r=1074752122,x0r=1074977148,B0r=1075183036,C0r=1075388923,j0r=1075594811,V0r=1094263291,Ei=[0,0,0],Ni=[0,0];function G0r(r,e){var t,i,n,a,s,o,v,f;if(n=E0r(r),a=n&L0r|0,a<=_0r)return e[0]=r,e[1]=0,0;if(a<=M0r)return(a&P0r)===R0r?Pn(r,a,e):a<=F0r?r>0?(f=r-be,e[0]=f-st,e[1]=f-e[0]-st,1):(f=r+be,e[0]=f+st,e[1]=f-e[0]+st,-1):r>0?(f=r-2*be,e[0]=f-Rn,e[1]=f-e[0]-Rn,2):(f=r+2*be,e[0]=f+Rn,e[1]=f-e[0]+Rn,-2);if(a<=j0r)return a<=B0r?a===x0r?Pn(r,a,e):r>0?(f=r-3*be,e[0]=f-_n,e[1]=f-e[0]-_n,3):(f=r+3*be,e[0]=f+_n,e[1]=f-e[0]+_n,-3):a===C0r?Pn(r,a,e):r>0?(f=r-4*be,e[0]=f-Fn,e[1]=f-e[0]-Fn,4):(f=r+4*be,e[0]=f+Fn,e[1]=f-e[0]+Fn,-4);if(a<V0r)return Pn(r,a,e);if(a>=I0r)return e[0]=NaN,e[1]=NaN,0;for(t=N0r(r),i=(a>>20)-1046,f=A0r(a-(i<<20|0),t),o=0;o<2;o++)Ei[o]=f|0,f=(f-Ei[o])*T0r;for(Ei[2]=f,s=3;Ei[s-1]===S0r;)s-=1;return v=O0r(Ei,Ni,i,s,1),r<0?(e[0]=-Ni[0],e[1]=-Ni[1],-v):(e[0]=Ni[0],e[1]=Ni[1],v)}Nq.exports=G0r});var Mn=u((_Mr,Oq)=>{"use strict";var U0r=Aq();Oq.exports=U0r});var Lq=u((FMr,Tq)=>{"use strict";var W0r=or(),xs=bs(),Sq=Es(),H0r=Mn(),Ur=[0,0],k0r=2147483647,D0r=1072243195,X0r=1044381696,J0r=2146435072;function z0r(r){var e,t;if(e=W0r(r),e&=k0r,e<=D0r)return e<X0r?1:xs(r,0);if(e>=J0r)return NaN;switch(t=H0r(r,Ur),t&3){case 0:return xs(Ur[0],Ur[1]);case 1:return-Sq(Ur[0],Ur[1]);case 2:return-xs(Ur[0],Ur[1]);default:return Sq(Ur[0],Ur[1])}}Tq.exports=z0r});var Ai=u((MMr,Iq)=>{"use strict";var Y0r=Lq();Iq.exports=Y0r});var _q=u((xMr,Rq)=>{"use strict";var Z0r=or(),Pq=bs(),Bs=Es(),$0r=Mn(),Q0r=2147483647,K0r=2146435072,rsr=1072243195,esr=1045430272,Wr=[0,0];function tsr(r){var e,t;if(e=Z0r(r),e&=Q0r,e<=rsr)return e<esr?r:Bs(r,0);if(e>=K0r)return NaN;switch(t=$0r(r,Wr),t&3){case 0:return Bs(Wr[0],Wr[1]);case 1:return Pq(Wr[0],Wr[1]);case 2:return-Bs(Wr[0],Wr[1]);default:return-Pq(Wr[0],Wr[1])}}Rq.exports=tsr});var Oi=u((BMr,Fq)=>{"use strict";var isr=_q();Fq.exports=isr});var xr=u((CMr,Mq)=>{"use strict";var nsr=3.141592653589793;Mq.exports=nsr});var Cq=u((jMr,Bq)=>{"use strict";var asr=E(),usr=ye(),xq=Ai(),Cs=Oi(),ssr=z(),Si=An(),Ti=xr();function osr(r){var e,t;return asr(r)?NaN:usr(r)?NaN:(t=r%2,e=ssr(t),e===0||e===1?Si(0,t):e<.25?Cs(Ti*t):e<.75?(e=.5-e,Si(xq(Ti*e),t)):e<1.25?(t=Si(1,t)-t,Cs(Ti*t)):e<1.75?(e-=1.5,-Si(xq(Ti*e),t)):(t-=Si(2,t),Cs(Ti*t)))}Bq.exports=osr});var Li=u((VMr,jq)=>{"use strict";var vsr=Cq();jq.exports=vsr});var Gq=u((GMr,Vq)=>{"use strict";function fsr(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}Vq.exports=fsr});var Wq=u((UMr,Uq)=>{"use strict";function lsr(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}Uq.exports=lsr});var kq=u((WMr,Hq)=>{"use strict";function csr(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}Hq.exports=csr});var Xq=u((HMr,Dq)=>{"use strict";function psr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}Dq.exports=psr});var zq=u((kMr,Jq)=>{"use strict";function gsr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}Jq.exports=gsr});var Zq=u((DMr,Yq)=>{"use strict";function msr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}Yq.exports=msr});var Qq=u((XMr,$q)=>{"use strict";function qsr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}$q.exports=qsr});var ry=u((JMr,Kq)=>{"use strict";function ysr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}Kq.exports=ysr});var ty=u((zMr,ey)=>{"use strict";function hsr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}ey.exports=hsr});var ny=u((YMr,iy)=>{"use strict";function dsr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}iy.exports=dsr});var sy=u((ZMr,uy)=>{"use strict";var wsr=E(),bsr=ye(),Esr=z(),Pt=x(),Nsr=bn(),Asr=Li(),Osr=xr(),js=j(),Ssr=Gq(),Tsr=Wq(),Lsr=kq(),Isr=Xq(),Psr=zq(),Rsr=Zq(),_sr=Qq(),Fsr=ry(),Msr=ty(),xsr=ny(),Bsr=.07721566490153287,Csr=.3224670334241136,jsr=1,Vsr=-.07721566490153287,Gsr=.48383612272381005,Usr=-.1475877229945939,Wsr=.06462494023913339,Hsr=-.07721566490153287,ksr=1,Dsr=.4189385332046727,xn=1.4616321449683622,Xsr=4503599627370496,Jsr=0x400000000000000,zsr=8470329472543003e-37,ay=1.4616321449683622,Ysr=-.12148629053584961,Zsr=-3638676997039505e-33;function $sr(r){var e,t,i,n,a,s,o,v,f,l,c,p,q;if(wsr(r)||bsr(r))return r;if(r===0)return js;if(r<0?(e=!0,r=-r):e=!1,r<zsr)return-Pt(r);if(e){if(r>=Xsr||(f=Asr(r),f===0))return js;t=Pt(Osr/Esr(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(q=-Pt(r),r>=xn-1+.27?(c=1-r,i=0):r>=xn-1-.27?(c=r-(ay-1),i=1):(c=r,i=2)):(q=0,r>=xn+.27?(c=2-r,i=0):r>=xn-.27?(c=r-ay,i=1):(c=r-1,i=2)),i){case 0:p=c*c,s=Bsr+p*Ssr(p),a=p*(Csr+p*Tsr(p)),o=c*s+a,q+=o-.5*c;break;case 1:p=c*c,l=p*c,s=Gsr+l*Psr(l),a=Usr+l*Rsr(l),n=Wsr+l*_sr(l),o=p*s-(Zsr-l*(a+c*n)),q+=Ysr+o;break;case 2:s=c*(Hsr+c*Fsr(c)),a=ksr+c*Msr(c),q+=-.5*c+s/a;break}else if(r<8)switch(i=Nsr(r),c=r-i,o=c*(Vsr+c*Isr(c)),v=jsr+c*Lsr(c),q=.5*c+o/v,p=1,i){case 7:p*=c+6;case 6:p*=c+5;case 5:p*=c+4;case 4:p*=c+3;case 3:p*=c+2,q+=Pt(p)}else r<Jsr?(f=Pt(r),p=1/r,c=p*p,l=Dsr+p*xsr(c),q=(r-.5)*(f-1)+l):q=r*(Pt(r)-1);return e&&(q=t-q),q}uy.exports=$sr});var Ii=u(($Mr,oy)=>{"use strict";var Qsr=sy();oy.exports=Qsr});var fy=u((QMr,vy)=>{"use strict";var Ksr=D();function ror(r){return r===0&&1/r===Ksr}vy.exports=ror});var Vs=u((KMr,ly)=>{"use strict";var eor=fy();ly.exports=eor});var Gs=u((rxr,cy)=>{"use strict";var tor=2.5066282746310007;cy.exports=tor});var gy=u((exr,py)=>{"use strict";var ior=wr();function nor(r){return ior(r/2)}py.exports=nor});var Bn=u((txr,my)=>{"use strict";var aor=gy();my.exports=aor});var hy=u((ixr,yy)=>{"use strict";var qy=Bn();function uor(r){return r>0?qy(r-1):qy(r+1)}yy.exports=uor});var Us=u((nxr,dy)=>{"use strict";var sor=hy();dy.exports=sor});var by=u((axr,wy)=>{"use strict";var oor=Ke(),Ws;oor===!0?Ws=0:Ws=1;wy.exports=Ws});var Ny=u((uxr,Ey)=>{"use strict";var vor=ar(),lor=sr(),cor=by(),Hs=new lor(1),por=new vor(Hs.buffer);function gor(r,e){return Hs[0]=r,por[cor]=e>>>0,Hs[0]}Ey.exports=gor});var ot=u((sxr,Ay)=>{"use strict";var mor=Ny();Ay.exports=mor});var Sy=u((oxr,Oy)=>{"use strict";function qor(r){return r|0}Oy.exports=qor});var ks=u((vxr,Ty)=>{"use strict";var yor=Sy();Ty.exports=yor});var Py=u((fxr,Iy)=>{"use strict";var Ly=Us(),hor=An(),dor=D(),Cn=j();function wor(r,e){return e===dor?Cn:e===Cn?0:e>0?Ly(e)?r:0:Ly(e)?hor(Cn,r):Cn}Iy.exports=wor});var _y=u((lxr,Ry)=>{"use strict";var bor=or(),Eor=2147483647,Nor=1072693247,jn=1e300,Vn=1e-300;function Aor(r,e){var t,i;return i=bor(r),t=i&Eor,t<=Nor?e<0?jn*jn:Vn*Vn:e>0?jn*jn:Vn*Vn}Ry.exports=Aor});var xy=u((cxr,My)=>{"use strict";var Oor=z(),Fy=j();function Sor(r,e){return r===-1?(r-r)/(r-r):r===1?1:Oor(r)<1==(e===Fy)?0:Fy}My.exports=Sor});var Cy=u((pxr,By)=>{"use strict";function Tor(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}By.exports=Tor});var Uy=u((gxr,Gy)=>{"use strict";var Lor=or(),Gn=ot(),jy=Et(),Ior=qe(),Por=Cy(),Ror=1048575,Vy=1048576,_or=1072693248,For=536870912,Mor=524288,xor=20,Bor=9007199254740992,Cor=.9617966939259756,jor=.9617967009544373,Vor=-7028461650952758e-24,Gor=[1,1.5],Uor=[0,.5849624872207642],Wor=[0,1350039202129749e-23];function Hor(r,e,t){var i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,N,A,C,S,H,er,U;return H=0,t<Vy&&(e*=Bor,H-=53,t=Lor(e)),H+=(t>>xor)-Ior|0,er=t&Ror|0,t=er|_or|0,er<=235662?U=0:er<767610?U=1:(U=0,H+=1,t-=Vy),e=jy(e,t),l=Gor[U],C=e-l,S=1/(e+l),n=C*S,s=Gn(n,0),i=(t>>1|For)+Mor,i+=U<<18,v=jy(0,i),f=e-(v-l),o=S*(C-s*v-s*f),a=n*n,A=a*a*Por(a),A+=o*(s+n),a=s*s,v=3+a+A,v=Gn(v,0),f=A-(v-3-a),C=s*v,S=o*v+f*n,p=C+S,p=Gn(p,0),q=S-(p-C),y=jor*p,m=Vor*p+q*Cor+Wor[U],c=Uor[U],N=H,g=y+m+c+N,g=Gn(g,0),h=m-(g-N-c-y),r[0]=g,r[1]=h,r}Gy.exports=Hor});var Hy=u((mxr,Wy)=>{"use strict";function kor(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}Wy.exports=kor});var Dy=u((qxr,ky)=>{"use strict";var Dor=ot(),Xor=Hy(),Jor=1.4426950408889634,zor=1.4426950216293335,Yor=19259629911266175e-24;function Zor(r,e){var t,i,n,a,s,o;return n=e-1,a=n*n*Xor(n),s=zor*n,o=n*Yor-a*Jor,i=s+o,i=Dor(i,0),t=o-(i-s),r[0]=i,r[1]=t,r}ky.exports=Zor});var Jy=u((yxr,Xy)=>{"use strict";function $or(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}Xy.exports=$or});var rh=u((hxr,Ky)=>{"use strict";var Qor=or(),zy=Et(),Kor=ot(),rvr=ks(),evr=On(),tvr=$i(),Yy=qe(),ivr=Jy(),Zy=2147483647,$y=1048575,Qy=1048576,nvr=1071644672,Pi=20,avr=.6931471824645996,uvr=-1904654299957768e-24;function svr(r,e,t){var i,n,a,s,o,v,f,l,c,p,q;return p=r&Zy|0,q=(p>>Pi)-Yy|0,c=0,p>nvr&&(c=r+(Qy>>q+1)>>>0,q=((c&Zy)>>Pi)-Yy|0,i=(c&~($y>>q))>>>0,a=zy(0,i),c=(c&$y|Qy)>>Pi-q>>>0,r<0&&(c=-c),e-=a),a=t+e,a=Kor(a,0),o=a*avr,v=(t-(a-e))*tvr+a*uvr,l=o+v,f=v-(l-o),a=l*l,n=l-a*ivr(a),s=l*n/(n-2)-(f+l*f),l=1-(s-l),r=Qor(l),r=rvr(r),r+=c<<Pi>>>0,r>>Pi<=0?l=evr(l,c):l=zy(l,r),l}Ky.exports=svr});var lh=u((dxr,fh)=>{"use strict";var eh=E(),th=Us(),ih=ye(),ovr=wr(),nh=V(),vvr=z(),Ds=Nn(),fvr=ot(),ah=ks(),lvr=D(),cvr=j(),pvr=Py(),gvr=_y(),mvr=xy(),qvr=Uy(),yvr=Dy(),hvr=rh(),Xs=2147483647,dvr=1072693247,wvr=1105199104,bvr=1139802112,uh=1083179008,Evr=1072693248,Nvr=1083231232,Avr=3230714880>>>0,sh=31,Ee=1e300,Ne=1e-300,Ovr=8008566259537294e-32,Hr=[0,0],oh=[0,0];function vh(r,e){var t,i,n,a,s,o,v,f,l,c,p,q,y,m,g,h;if(eh(r)||eh(e))return NaN;if(Ds(Hr,e),o=Hr[0],v=Hr[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return nh(r);if(e===-.5)return 1/nh(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(ih(e))return mvr(r,e)}if(Ds(Hr,r),a=Hr[0],s=Hr[1],s===0){if(a===0)return pvr(r,e);if(r===1)return 1;if(r===-1&&th(e))return-1;if(ih(r))return r===lvr?vh(-0,-e):e<0?0:cvr}if(r<0&&ovr(e)===!1)return(r-r)/(r-r);if(n=vvr(r),t=a&Xs|0,i=o&Xs|0,f=a>>>sh|0,l=o>>>sh|0,f&&th(e)?f=-1:f=1,i>wvr){if(i>bvr)return gvr(r,e);if(t<dvr)return l===1?f*Ee*Ee:f*Ne*Ne;if(t>Evr)return l===0?f*Ee*Ee:f*Ne*Ne;y=yvr(oh,n)}else y=qvr(oh,n,t);if(c=fvr(e,0),q=(e-c)*y[0]+e*y[1],p=c*y[0],m=q+p,Ds(Hr,m),g=ah(Hr[0]),h=ah(Hr[1]),g>=uh){if((g-uh|h)!==0||q+Ovr>m-p)return f*Ee*Ee}else if((g&Xs)>=Nvr&&((g-Avr|h)!==0||q<=m-p))return f*Ne*Ne;return m=hvr(g,p,q),f*m}fh.exports=vh});var Z=u((wxr,ch)=>{"use strict";var Svr=lh();ch.exports=Svr});var gh=u((bxr,ph)=>{"use strict";function Tvr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}ph.exports=Tvr});var qh=u((Exr,mh)=>{"use strict";var Lvr=On(),Ivr=gh();function Pvr(r,e,t){var i,n,a,s;return i=r-e,n=i*i,a=i-n*Ivr(n),s=1-(e-i*a/(2-a)-r),Lvr(s,t)}mh.exports=Pvr});var Eh=u((Nxr,bh)=>{"use strict";var Rvr=E(),yh=bn(),_vr=D(),hh=j(),Fvr=qh(),Mvr=.6931471803691238,xvr=19082149292705877e-26,dh=1.4426950408889634,Bvr=709.782712893384,Cvr=-745.1332191019411,wh=1/(1<<28),jvr=-wh;function Vvr(r){var e,t,i;return Rvr(r)||r===hh?r:r===_vr?0:r>Bvr?hh:r<Cvr?0:r>jvr&&r<wh?1+r:(r<0?i=yh(dh*r-.5):i=yh(dh*r+.5),e=r-i*Mvr,t=i*xvr,Fvr(e,t,i))}bh.exports=Vvr});var nr=u((Axr,Nh)=>{"use strict";var Gvr=Eh();Nh.exports=Gvr});var Oh=u((Oxr,Ah)=>{"use strict";function Uvr(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}Ah.exports=Uvr});var Lh=u((Sxr,Th)=>{"use strict";var Wvr=Gs(),Sh=Z(),Hvr=nr(),kvr=Oh(),Dvr=143.01608;function Xvr(r){var e,t,i;return e=1/r,e=1+e*kvr(e),t=Hvr(r),r>Dvr?(i=Sh(r,.5*r-.25),t=i*(i/t)):t=Sh(r,r-.5)/t,Wvr*t*e}Th.exports=Xvr});var Ph=u((Txr,Ih)=>{"use strict";var Jvr=.5772156649015329;Ih.exports=Jvr});var _h=u((Lxr,Rh)=>{"use strict";var zvr=Ph();function Yvr(r,e){return e/((1+zvr*r)*r)}Rh.exports=Yvr});var Mh=u((Ixr,Fh)=>{"use strict";function Zvr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}Fh.exports=Zvr});var Wh=u((Pxr,Uh)=>{"use strict";var $vr=E(),Qvr=wr(),Kvr=Vs(),xh=z(),r1r=$(),e1r=Oi(),Bh=j(),Ch=D(),jh=xr(),Vh=Lh(),Gh=_h(),t1r=Mh();function i1r(r){var e,t,i,n;if(Qvr(r)&&r<0||r===Ch||$vr(r))return NaN;if(r===0)return Kvr(r)?Ch:Bh;if(r>171.61447887182297)return Bh;if(r<-170.5674972726612)return 0;if(t=xh(r),t>33)return r>=0?Vh(r):(i=r1r(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*e1r(jh*n),e*jh/(xh(n)*Vh(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return Gh(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return Gh(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*t1r(r))}Uh.exports=i1r});var Rt=u((Rxr,Hh)=>{"use strict";var n1r=Wh();Hh.exports=n1r});var Js=u((_xr,kh)=>{"use strict";var a1r=14901161193847656e-24;kh.exports=a1r});var Xh=u((Fxr,Dh)=>{"use strict";var u1r=17976931348623157e292;Dh.exports=u1r});var Un=u((Mxr,Jh)=>{"use strict";var s1r=709.782712893384;Jh.exports=s1r});var Yh=u((xxr,zh)=>{"use strict";var o1r=nr();function v1r(r,e){var t,i,n,a;if(n=o1r(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}zh.exports=v1r});var $h=u((Bxr,Zh)=>{"use strict";function f1r(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}Zh.exports=f1r});var Kh=u((Cxr,Qh)=>{"use strict";function l1r(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}Qh.exports=l1r});var ed=u((jxr,rd)=>{"use strict";function c1r(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}rd.exports=c1r});var id=u((Vxr,td)=>{"use strict";function p1r(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}td.exports=p1r});var ad=u((Gxr,nd)=>{"use strict";function g1r(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}nd.exports=g1r});var sd=u((Uxr,ud)=>{"use strict";function m1r(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}ud.exports=m1r});var vd=u((Wxr,od)=>{"use strict";function q1r(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}od.exports=q1r});var ld=u((Hxr,fd)=>{"use strict";function y1r(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}fd.exports=y1r});var md=u((kxr,gd)=>{"use strict";var h1r=E(),cd=nr(),d1r=ot(),w1r=j(),b1r=D(),E1r=$h(),N1r=Kh(),A1r=ed(),O1r=id(),S1r=ad(),T1r=sd(),L1r=vd(),I1r=ld(),Wn=1e-300,P1r=13877787807814457e-33,pd=.8450629115104675,R1r=.12837916709551256,_1r=1,F1r=-.0023621185607526594,M1r=1,x1r=-.009864944034847148,B1r=1,C1r=-.0098649429247001,j1r=1;function V1r(r){var e,t,i,n,a,s,o,v;if(h1r(r))return NaN;if(r===w1r)return 0;if(r===b1r)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<P1r?1-r:(i=r*r,n=R1r+i*E1r(i),a=_1r+i*N1r(i),s=n/a,r<.25?1-(r+r*s):(n=r*s,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=F1r+a*A1r(a),v=M1r+a*O1r(a),e?1+pd+o/v:1-pd-o/v;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=x1r+a*S1r(a),a=B1r+a*T1r(a);else{if(r<-6)return 2-Wn;n=C1r+a*L1r(a),a=j1r+a*I1r(a)}return i=d1r(t,0),n=cd(-(i*i)-.5625)*cd((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-Wn:Wn*Wn}gd.exports=V1r});var zs=u((Dxr,qd)=>{"use strict";var G1r=md();qd.exports=G1r});var dd=u((Xxr,hd)=>{"use strict";var U1r=zs(),yd=V(),W1r=nr(),H1r=xr();function k1r(r,e){var t,i,n,a,s;if(a=U1r(yd(e)),a!==0&&r>1){for(i=W1r(-e)/yd(H1r*e),i*=e,t=.5,i/=t,n=i,s=2;s<r;++s)i/=s-t,i*=e,n+=i;a+=n}return a}hd.exports=k1r});var Ys=u((Jxr,wd)=>{"use strict";var D1r=-708.3964185322641;wd.exports=D1r});var Ad=u((zxr,Nd)=>{"use strict";var _t=nr(),Hn=Z(),X1r=x(),bd=Un(),Ed=Ys();function J1r(r,e){var t,i;return i=r*X1r(e),e>=1?i<bd&&-e>Ed?t=Hn(e,r)*_t(-e):r>=1?t=Hn(e/_t(e/r),r):t=_t(i-e):i>Ed?t=Hn(e,r)*_t(-e):e/r<bd?t=Hn(e/_t(e/r),r):t=_t(i-e),t}Nd.exports=J1r});var Zs=u((Yxr,Od)=>{"use strict";function z1r(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Od.exports=z1r});var Td=u((Zxr,Sd)=>{"use strict";var Y1r=Zs();function Z1r(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new Function(e)();function a(s){return Y1r(r,s)}}Sd.exports=Z1r});var Pd=u(($xr,Id)=>{"use strict";var $1r=b(),Ld=Zs(),Q1r=Td();$1r(Ld,"factory",Q1r);Id.exports=Ld});var Ae=u((Qxr,Rd)=>{"use strict";var K1r=6.283185307179586;Rd.exports=K1r});var Fd=u((Kxr,_d)=>{"use strict";function rfr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}_d.exports=rfr});var xd=u((rBr,Md)=>{"use strict";function efr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}Md.exports=efr});var Cd=u((eBr,Bd)=>{"use strict";function tfr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}Bd.exports=tfr});var Vd=u((tBr,jd)=>{"use strict";function ifr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}jd.exports=ifr});var Ud=u((iBr,Gd)=>{"use strict";function nfr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}Gd.exports=nfr});var Hd=u((nBr,Wd)=>{"use strict";function afr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}Wd.exports=afr});var Dd=u((aBr,kd)=>{"use strict";function ufr(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}kd.exports=ufr});var Jd=u((uBr,Xd)=>{"use strict";function sfr(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}Xd.exports=sfr});var Yd=u((sBr,zd)=>{"use strict";function ofr(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}zd.exports=ofr});var $d=u((oBr,Zd)=>{"use strict";var vfr=Pd(),ffr=zs(),$s=V(),lfr=nr(),cfr=x(),pfr=Ae(),gfr=Fd(),mfr=xd(),qfr=Cd(),yfr=Vd(),hfr=Ud(),dfr=Hd(),wfr=Dd(),bfr=Jd(),Efr=Yd(),Ir=[0,0,0,0,0,0,0,0,0,0];function Nfr(r,e){var t,i,n,a,s;return i=(e-r)/r,n=-cfr(1+i)+i,a=r*n,s=$s(2*n),e<r&&(s=-s),Ir[0]=gfr(s),Ir[1]=mfr(s),Ir[2]=qfr(s),Ir[3]=yfr(s),Ir[4]=hfr(s),Ir[5]=dfr(s),Ir[6]=wfr(s),Ir[7]=bfr(s),Ir[8]=Efr(s),Ir[9]=-.0005967612901927463,t=vfr(Ir,1/r),t*=lfr(-a)/$s(pfr*r),e<r&&(t=-t),t+=ffr($s(a))/2,t}Zd.exports=Nfr});var Kd=u((vBr,Qd)=>{"use strict";var Afr=eval;Qd.exports=Afr});var ew=u((fBr,rw)=>{"use strict";var Ofr=Kd();function Sfr(){var r;try{Ofr('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}rw.exports=Sfr});var Qs=u((lBr,tw)=>{"use strict";var Tfr=ew();tw.exports=Tfr});var Ft=u((cBr,iw)=>{"use strict";var Lfr=2220446049250313e-31;iw.exports=Lfr});var aw=u((pBr,nw)=>{"use strict";var kn=z(),Ifr=Ft(),Pfr=1e6;function Rfr(r,e){var t,i,n,a,s,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||Ifr,a=o.maxTerms||Pfr,s=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(s+=n,kn(i*s)>=kn(n)||--a===0)break}else do n=r(),s+=n;while(kn(i*s)<kn(n)&&--a);return s}nw.exports=Rfr});var ow=u((gBr,sw)=>{"use strict";var uw=z(),_fr=Ft(),Ffr=1e6;function Mfr(r,e){var t,i,n,a,s;s={},arguments.length>1&&(s=e),t=s.tolerance||_fr,n=s.maxTerms||Ffr,a=s.initialValue||0;do i=r(),a+=i;while(uw(t*a)<uw(i)&&--n);return a}sw.exports=Mfr});var ro=u((mBr,vw)=>{"use strict";var xfr=Qs(),Bfr=aw(),Cfr=ow(),Ks;xfr()?Ks=Bfr:Ks=Cfr;vw.exports=Ks});var lw=u((qBr,fw)=>{"use strict";function jfr(r,e){var t=1,i=r,n=e;return a;function a(){var s=t;return i+=1,t*=n/i,s}}fw.exports=jfr});var pw=u((yBr,cw)=>{"use strict";var Vfr=ro(),Gfr=lw();function Ufr(r,e,t){var i,n;return t=t||0,n=Gfr(r,e),i=Vfr(n,{initialValue:t}),i}cw.exports=Ufr});var mw=u((hBr,gw)=>{"use strict";function Wfr(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}gw.exports=Wfr});var yw=u((dBr,qw)=>{"use strict";var Hfr=mw();qw.exports=Hfr});var dw=u((wBr,hw)=>{"use strict";var kfr=yw();hw.exports=kfr});var bw=u((bBr,ww)=>{"use strict";var Dfr=j();function Xfr(r){return r===0&&1/r===Dfr}ww.exports=Xfr});var Oe=u((EBr,Ew)=>{"use strict";var Jfr=bw();Ew.exports=Jfr});var Ow=u((NBr,Aw)=>{"use strict";var Nw=Oe(),eo=E(),zfr=D(),Dn=j();function Yfr(r,e){var t,i,n,a;if(t=arguments.length,t===2)return eo(r)||eo(e)?NaN:r===Dn||e===Dn?Dn:r===e&&r===0?Nw(r)?r:e:r>e?r:e;for(i=zfr,a=0;a<t;a++){if(n=arguments[a],eo(n)||n===Dn)return n;(n>i||n===i&&n===0&&Nw(n))&&(i=n)}return i}Aw.exports=Yfr});var to=u((ABr,Sw)=>{"use strict";var Zfr=Ow();Sw.exports=Zfr});var Iw=u((OBr,Lw)=>{"use strict";var Tw=Vs(),io=E(),Xn=D(),$fr=j();function Qfr(r,e){var t,i,n,a;if(t=arguments.length,t===2)return io(r)||io(e)?NaN:r===Xn||e===Xn?Xn:r===e&&r===0?Tw(r)?r:e:r<e?r:e;for(i=$fr,a=0;a<t;a++){if(n=arguments[a],io(n)||n===Xn)return n;(n<i||n===i&&n===0&&Tw(n))&&(i=n)}return i}Lw.exports=Qfr});var Rw=u((SBr,Pw)=>{"use strict";var Kfr=Iw();Pw.exports=Kfr});var Fw=u((TBr,_w)=>{"use strict";var rlr=10.900511;_w.exports=rlr});var no=u((LBr,Mw)=>{"use strict";var elr=2.718281828459045;Mw.exports=elr});var Cw=u((IBr,Bw)=>{"use strict";var tlr=dw(),ilr=Ii(),nlr=Rt(),alr=Nt(),ulr=V(),slr=z(),Se=nr(),Ri=Z(),ao=to(),uo=Rw(),xw=x(),Jn=Un(),_i=Ys(),so=Fw(),olr=no();function vlr(r,e){var t,i,n,a,s,o,v;return n=r+so-.5,v=(e-r-so+.5)/n,r<1?e<=_i?Se(r*xw(e)-e-ilr(r)):Ri(e,r)*Se(-e)/nlr(r):(slr(v*v*r)<=100&&r>150?(t=r*(alr(v)-v)+e*(.5-so)/n,t=Se(t)):(a=r*xw(e/n),s=r-e,uo(a,s)<=_i||ao(a,s)>=Jn?(i=s/r,uo(a,s)/2>_i&&ao(a,s)/2<Jn?(o=Ri(e/n,r/2)*Se(s/2),t=o*o):uo(a,s)/4>_i&&ao(a,s)/4<Jn&&e>r?(o=Ri(e/n,r/4)*Se(s/4),t=o*o,t*=t):i>_i&&i<Jn?t=Ri(e*Se(i)/n,r):t=Se(a+s)):t=Ri(e/n,r)*Se(s)),t*=ulr(n/olr)/tlr(r),t)}Bw.exports=vlr});var Vw=u((PBr,jw)=>{"use strict";var flr=.34657359027997264;jw.exports=flr});var Uw=u((RBr,Gw)=>{"use strict";function llr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}Gw.exports=llr});var Dw=u((_Br,kw)=>{"use strict";var clr=E(),oo=or(),zn=Et(),Ww=j(),plr=D(),glr=qe(),mlr=Vw(),qlr=Uw(),ylr=709.782712893384,vo=.6931471803691238,fo=19082149292705877e-26,Hw=1.4426950408889634,hlr=38.816242111356935,dlr=1.0397207708399179;function wlr(r){var e,t,i,n,a,s,o,v,f,l,c,p;if(r===Ww||clr(r))return r;if(r===plr)return-1;if(r===0)return r;if(r<0?(t=!0,o=-r):(t=!1,o=r),o>=hlr){if(t)return-1;if(o>=ylr)return Ww}if(a=oo(o)|0,o>mlr)o<dlr?t?(i=r+vo,n=-fo,p=-1):(i=r-vo,n=fo,p=1):(t?p=Hw*r-.5:p=Hw*r+.5,p|=0,l=p,i=r-l*vo,n=l*fo),r=i-n,f=i-r-n;else{if(a<1016070144)return r;p=0}return e=.5*r,v=r*e,s=1+v*qlr(v),l=3-s*e,c=v*((s-l)/(6-r*l)),p===0?r-(r*c-v):(c=r*(c-f)-f,c-=v,p===-1?.5*(r-c)-.5:p===1?r<-.25?-2*(c-(r+.5)):1+2*(r-c):p<=-2||p>56?(o=1-(c-r),i=oo(o)+(p<<20)|0,o=zn(o,i),o-1):(l=1,p<20?(i=1072693248-(2097152>>p)|0,l=zn(l,i),o=l-(c-r)):(i=glr-p<<20|0,l=zn(l,i),o=r-(c+l),o+=1),i=oo(o)+(p<<20)|0,zn(o,i)))}kw.exports=wlr});var lo=u((FBr,Xw)=>{"use strict";var blr=Dw();Xw.exports=blr});var Zw=u((MBr,Yw)=>{"use strict";var Jw=E(),zw=z(),Elr=lo(),Nlr=x(),Alr=Z(),Olr=bn();function Slr(r,e){var t;if(Jw(r)||Jw(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((zw(e*(r-1))<.5||zw(e)<.2)&&(t=Nlr(r)*e,t<.5))return Elr(t)}else if(Olr(e)!==e)return NaN;return Alr(r,e)-1}Yw.exports=Slr});var Qw=u((xBr,$w)=>{"use strict";var Tlr=Zw();$w.exports=Tlr});var rb=u((BBr,Kw)=>{"use strict";function Llr(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}Kw.exports=Llr});var tb=u((CBr,eb)=>{"use strict";function Ilr(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}eb.exports=Ilr});var nb=u((jBr,ib)=>{"use strict";function Plr(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}ib.exports=Plr});var ub=u((VBr,ab)=>{"use strict";var co=x(),Rlr=Ft(),_lr=rb(),Flr=tb(),Mlr=nb(),xlr=.15896368026733398,Blr=.5281534194946289,Clr=.45201730728149414;function jlr(r,e,t){var i,n,a,s;if(r<Rlr)return-co(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=co(r);while(r>=3);t=r-2}return a=t*(r+1),s=_lr(t),n+=a*xlr+a*s,n}return r<1&&(n+=-co(r),t=e,e=r,r+=1),r<=1.5?(a=Flr(e),i=e*t,n+=i*Blr+i*a,n):(a=t*e,s=Mlr(-t),n+=a*Clr+a*s,n)}ab.exports=jlr});var lb=u((GBr,fb)=>{"use strict";var sb=Rt(),ob=lo(),Vlr=Nt(),Glr=E(),vb=ub();function Ulr(r){return Glr(r)?NaN:r<0?r<-.5?sb(1+r)-1:ob(-Vlr(r)+vb(r+2,r+1,r)):r<2?ob(vb(r+1,r,r-1)):sb(1+r)-1}fb.exports=Ulr});var pb=u((UBr,cb)=>{"use strict";var Wlr=lb();cb.exports=Wlr});var mb=u((WBr,gb)=>{"use strict";function Hlr(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,s;function s(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}gb.exports=Hlr});var yb=u((HBr,qb)=>{"use strict";var klr=Qw(),Dlr=ro(),Xlr=pb(),Jlr=mb();function zlr(r,e,t){var i,n,a,s,o;return n=Xlr(r),a=(n+1)/r,s=klr(e,r),n-=s,n/=r,o=Jlr(r,e),s+=1,i=t?a:0,n=-s*Dlr(o,{initialValue:(i-n)/s}),t&&(n=-n),[n,a]}qb.exports=zlr});var po=u((kBr,hb)=>{"use strict";var Ylr=11754943508222875e-54;hb.exports=Ylr});var wb=u((DBr,db)=>{"use strict";var Yn=z(),Br=po(),Zlr=Ft(),$lr=1e6;function Qlr(r,e,t){var i,n,a,s,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),s=f[1],a=f[0],s===0&&(s=Br),o=s,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=Br),o=f[1]+f[0]/o,o===0&&(o=Br),v=1/v,n=o*v,s*=n);while(Yn(n-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=Br),o=f[1]+f[0]/o,o===0&&(o=Br),v=1/v,n=o*v,s*=n);while(f&&Yn(n-1)>e&&--t);return a/s}function Klr(r,e,t){var i,n,a,s,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),a=v[1],a===0&&(a=Br),s=a,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=Br),s=v[1]+v[0]/s,s===0&&(s=Br),o=1/o,n=s*o,a*=n);while(v&&Yn(n-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=Br),s=v[1]+v[0]/s,s===0&&(s=Br),o=1/o,n=s*o,a*=n);while(v&&Yn(n-1)>e&&--t);return a}function r2r(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||$lr,n=i.tolerance||Zlr,i.keep?Klr(r,n,t):Qlr(r,n,t)}db.exports=r2r});var Nb=u((XBr,Eb)=>{"use strict";var bb=z(),e2r=Ft(),Mt=po(),t2r=1e6;function i2r(r,e,t){var i,n,a,s,o,v;v=r(),o=v[1],n=v[0],o===0&&(o=Mt),a=o,s=0;do v=r(),v&&(s=v[1]+v[0]*s,s===0&&(s=Mt),a=v[1]+v[0]/a,a===0&&(a=Mt),s=1/s,i=a*s,o*=i);while(v&&bb(i-1)>e&&--t);return n/o}function n2r(r,e,t){var i,n,a,s,o;o=r(),s=o[1],s===0&&(s=Mt),n=s,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=Mt),n=o[1]+o[0]/n,n===0&&(n=Mt),a=1/a,i=n*a,s*=i);while(o&&bb(i-1)>e&&--t);return s}function a2r(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||e2r,t=i.maxIter||t2r,i.keep?n2r(r,n,t):i2r(r,n,t)}Eb.exports=a2r});var Ob=u((JBr,Ab)=>{"use strict";var u2r=Qs(),s2r=wb(),o2r=Nb(),go;u2r()?go=s2r:go=o2r;Ab.exports=go});var Tb=u((zBr,Sb)=>{"use strict";function v2r(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}Sb.exports=v2r});var Ib=u((YBr,Lb)=>{"use strict";var f2r=Ob(),l2r=Tb();function c2r(r,e){var t=l2r(r,e);return 1/(e-r+1+f2r(t))}Lb.exports=c2r});var Vb=u((ZBr,jb)=>{"use strict";var p2r=Ii(),g2r=$(),Fi=Rt(),Pb=z(),m2r=nr(),Rb=Z(),Pr=x(),q2r=Js(),_b=Xh(),y2r=Gs(),Fb=Un(),h2r=j(),d2r=Yh(),w2r=dd(),Mb=Ad(),b2r=$d(),mo=pw(),xb=Cw(),E2r=yb(),Bb=Ib(),N2r=170;function Cb(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,N;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,c=i,p=0,e>=N2r&&!a)return c&&e*4<r?(p=e*Pr(r)-r,p+=Pr(Bb(e,r))):!c&&e>4*r?(p=e*Pr(r)-r,o=0,p+=Pr(mo(e,r,o)/e)):(p=Cb(e,r,!0,c),p===0?c?(p=1+1/(12*e)+1/(288*e*e),p=Pr(p)-e+(e-.5)*Pr(e),p+=Pr(y2r)):(p=e*Pr(r)-r,o=0,p+=Pr(mo(e,r,o)/e)):p=Pr(p)+p2r(e)),p>Fb?h2r:m2r(p);switch(l=e<30&&e<=r+1&&r<Fb,l?(h=g2r(e),q=h===e,v=q?!1:Pb(h-e)===.5):q=v=!1,q&&r>.6?(c=!c,s=0):v&&r>.2?(c=!c,s=1):r<q2r&&e>1?s=6:r<.5?-.4/Pr(r)<e?s=2:s=3:r<1.1?r*.75<e?s=2:s=3:(f=!1,a&&e>20&&(y=Pb((r-e)/e),e>200?20/e>y*y&&(f=!0):y<.4&&(f=!0)),f?s=5:r-1/(3*r)<e?s=2:(s=4,c=!c)),s){case 0:p=d2r(e,r),a===!1&&(p*=Fi(e));break;case 1:p=w2r(e,r),a===!1&&(p*=Fi(e));break;case 2:p=a?xb(e,r):Mb(e,r),p!==0&&(o=0,n=!1,c&&(o=a?1:Fi(e),a||p>=1||_b*p>o?(o/=p,a||e<1||_b/e>o?(o*=-e,n=!0):o=0):o=0)),p*=mo(e,r,o)/e,n&&(c=!1,p=-p);break;case 3:c=!c,g=E2r(e,r,c),p=g[0],N=g[1],c=!1,a&&(p/=N);break;case 4:p=a?xb(e,r):Mb(e,r),p!==0&&(p*=Bb(e,r));break;case 5:p=b2r(e,r),r>=e&&(c=!c);break;case 6:p=a?Rb(r,e)/Fi(e+1):Rb(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),c&&(m=a?1:Fi(e),p=m-p),p}jb.exports=Cb});var qo=u(($Br,Gb)=>{"use strict";var A2r=Vb();Gb.exports=A2r});var Wb=u((QBr,Ub)=>{"use strict";var O2r=qo(),yo=E(),S2r=j();function T2r(r,e,t){return yo(r)||yo(e)||yo(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===S2r?1:O2r(r*t,e)}Ub.exports=T2r});var kb=u((KBr,Hb)=>{"use strict";function L2r(r){return e;function e(){return r}}Hb.exports=L2r});var P=u((rCr,Db)=>{"use strict";var I2r=kb();Db.exports=I2r});var zb=u((eCr,Jb)=>{"use strict";var Xb=E();function P2r(r,e){return Xb(r)||Xb(e)?NaN:r<e?0:1}Jb.exports=P2r});var $b=u((tCr,Zb)=>{"use strict";var R2r=P(),Yb=E();function _2r(r){if(Yb(r))return R2r(NaN);return e;function e(t){return Yb(t)?NaN:t<r?0:1}}Zb.exports=_2r});var ho=u((iCr,Kb)=>{"use strict";var F2r=b(),Qb=zb(),M2r=$b();F2r(Qb,"factory",M2r);Kb.exports=Qb});var tE=u((nCr,eE)=>{"use strict";var x2r=P(),B2r=ho().factory,C2r=qo(),rE=E(),j2r=j();function V2r(r,e){if(rE(r)||rE(e)||r<0||e<=0)return x2r(NaN);if(r===0)return B2r(0);return t;function t(i){return i<=0?0:i===j2r?1:C2r(i*e,r)}}eE.exports=V2r});var wo=u((aCr,nE)=>{"use strict";var G2r=b(),iE=Wb(),U2r=tE();G2r(iE,"factory",U2r);nE.exports=iE});var uE=u((uCr,aE)=>{"use strict";var W2r=wo();function H2r(r,e){return W2r(r,e/2,.5)}aE.exports=H2r});var oE=u((sCr,sE)=>{"use strict";var k2r=wo().factory;function D2r(r){return k2r(r/2,.5)}sE.exports=D2r});var lE=u((oCr,fE)=>{"use strict";var X2r=b(),vE=uE(),J2r=oE();X2r(vE,"factory",J2r);fE.exports=vE});var gE=u((vCr,pE)=>{"use strict";var z2r=T(),Y2r=O(),Z2r=un(),cE=["values","indices","*"];function $2r(r,e){return z2r(e)?Y2r(e,"returns")&&(r.returns=e.returns,Z2r(cE,r.returns)===-1)?new TypeError('invalid option. `returns` option must be one of the following: "'+cE.join('", "')+'". Option: `'+r.returns+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}pE.exports=$2r});var qE=u((fCr,mE)=>{"use strict";var Q2r=O();function K2r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),Q2r(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}mE.exports=K2r});var hE=u((lCr,yE)=>{"use strict";var rcr=O();function ecr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),rcr(t,n)?t[n].push(a):t[n]=[a];return t}yE.exports=ecr});var wE=u((cCr,dE)=>{"use strict";var tcr=O();function icr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),tcr(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}dE.exports=icr});var NE=u((pCr,EE)=>{"use strict";var bE=Lr(),ncr=gE(),acr=qE(),ucr=hE(),scr=wE();function ocr(r,e,t){var i,n,a;if(!bE(r))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+r+"`.");if(i={returns:"values"},arguments.length===2)a=e;else{if(n=ncr(i,e),n)throw n;a=t}if(!bE(a))throw new TypeError("invalid argument. Last argument must be a collection. Value: `"+a+"`.");if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?acr(r,a):i.returns==="indices"?ucr(r,a):scr(r,a)}EE.exports=ocr});var OE=u((gCr,AE)=>{"use strict";var vcr=NE();AE.exports=vcr});var TE=u((mCr,SE)=>{"use strict";function fcr(r){var e,t,i,n,a,s;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)s=r[a],e=s-t,t+=e/(a+1),n+=e*(s-t);return n/(a-1)}SE.exports=fcr});var PE=u((qCr,IE)=>{"use strict";var lcr=vr(),ccr=B().isPrimitive,pcr=T(),gcr=K(),LE=O();function mcr(r,e){return pcr(e)?LE(e,"alpha")&&(r.alpha=e.alpha,!ccr(r.alpha)||gcr(r.alpha))?new TypeError("invalid option. `alpha` option must be a number primitive. Option: `"+r.alpha+"`."):LE(e,"groups")&&(r.groups=e.groups,!lcr(r.groups))?new TypeError("invalid option. `groups` option must be an array. Option: `"+r.groups+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}IE.exports=mcr});var Zn=u((yCr,RE)=>{"use strict";var qcr=9007199254740991;RE.exports=qcr});var FE=u((hCr,_E)=>{"use strict";var ycr=308;_E.exports=ycr});var xE=u((dCr,ME)=>{"use strict";var hcr=-308;ME.exports=hcr});var CE=u((wCr,BE)=>{"use strict";var dcr=-324;BE.exports=dcr});var kE=u((bCr,HE)=>{"use strict";var jE=E(),$n=ye(),VE=Z(),wcr=z(),GE=Ms(),bcr=Zn(),UE=FE(),Ecr=xE(),Ncr=CE(),Acr=bcr+1,WE=1e308;function Ocr(r,e){var t,i;return jE(r)||jE(e)||$n(e)?NaN:$n(r)||r===0||e<Ncr||wcr(r)>Acr&&e<=0?r:e>UE?0*r:e<Ecr?(t=VE(10,-(e+UE)),i=r*WE*t,$n(i)?r:GE(i)/WE/t):(t=VE(10,-e),i=r*t,$n(i)?r:GE(i)/t)}HE.exports=Ocr});var XE=u((ECr,DE)=>{"use strict";var Scr=kE();DE.exports=Scr});var YE=u((NCr,zE)=>{"use strict";var Tcr=Gr(),Lcr=T(),Icr=tr().isPrimitive,JE=O(),bo=XE();function Pcr(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!Lcr(r))throw new TypeError("invalid argument. First argument must be an options object. Value: `"+r+"`.");if(JE(r,"digits")){if(!Tcr(r.digits))throw new TypeError("invalid option. `digits` option must be a positive integer. Option: `"+r.digits+"`.");t=r.digits}if(JE(r,"decision")){if(!Icr(r.decision))throw new TypeError("invalid option. `decision` option must be a boolean primitive. Option: `"+r.decision+"`.");e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+bo(this.pValue,-t)+`
`,i+="    statistic: "+bo(this.statistic,-t)+`
`,i+="    df: "+bo(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}zE.exports=Pcr});var QE=u((ACr,$E)=>{"use strict";var Rcr=Lr(),_cr=T(),vt=j9(),Fcr=fn(),Mcr=lE(),xcr=OE(),ZE=x(),Bcr=TE(),Ccr=PE(),jcr=YE();function Vcr(){var r,e,t,i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,N,A;if(v=[],e=arguments.length,f={},_cr(arguments[e-1])&&(r=arguments[e-1],e-=1,q=Ccr(f,r),q))throw q;if(f.groups){if(n=xcr(arguments[0],f.groups),i=Fcr(n),e=i.length,e<2)throw new Error("invalid number of groups. `groups` array must contain at least two unique elements. Value: `"+i+"`.");for(A=0;A<e;A++)v.push(n[i[A]])}else for(A=0;A<e;A++)v.push(arguments[A]);for(s=0,t=0,o=0,y=0,h=new Array(e),N=h.slice(),A=0;A<e;A++){if(p=v[A],!Rcr(p))throw new TypeError("invalid argument. Must provide array-like arguments. Value: `"+p+"`.");if(p.length===0)throw new Error("invalid argument. Supplied arrays cannot be empty. Value: `"+p+"`.");h[A]=p.length-1,s+=h[A],t+=1/h[A],N[A]=Bcr(p),o+=h[A]*N[A],y+=h[A]*ZE(N[A])}if(o/=s,f.alpha===void 0?a=.05:a=f.alpha,a<0||a>1)throw new RangeError("invalid argument. Option `alpha` must be a number in the range 0 to 1. Value: `"+a+"`.");return c=s*ZE(o)-y,c/=1+(t-1/s)/(3*(e-1)),g=e-1,l=1-Mcr(c,g),m={},vt(m,"rejected",l<=a),vt(m,"alpha",a),vt(m,"pValue",l),vt(m,"statistic",c),vt(m,"df",g),vt(m,"method","Bartlett's test of equal variances"),vt(m,"print",jcr),m}$E.exports=Vcr});var rN=u((OCr,KE)=>{"use strict";var Gcr=QE();KE.exports=Gcr});var tN=u((SCr,eN)=>{"use strict";var Eo=4;function Ucr(r,e,t,i,n,a){var s,o,v,f;if(r<=0||e===0)return n;if(i===1&&a===1){if(v=r%Eo,v>0)for(f=0;f<v;f++)n[f]+=e*t[f];if(r<Eo)return n;for(f=v;f<r;f+=Eo)n[f]+=e*t[f],n[f+1]+=e*t[f+1],n[f+2]+=e*t[f+2],n[f+3]+=e*t[f+3];return n}for(i<0?s=(1-r)*i:s=0,a<0?o=(1-r)*a:o=0,f=0;f<r;f++)n[o]+=e*t[s],s+=i,o+=a;return n}eN.exports=Ucr});var nN=u((TCr,iN)=>{"use strict";var Mi=4;function Wcr(r,e,t,i,n,a,s,o){var v,f,l,c;if(r<=0||e===0)return a;if(v=n,f=o,i===1&&s===1){if(l=r%Mi,l>0)for(c=0;c<l;c++)a[f]+=e*t[v],v+=i,f+=s;if(r<Mi)return a;for(c=l;c<r;c+=Mi)a[f]+=e*t[v],a[f+1]+=e*t[v+1],a[f+2]+=e*t[v+2],a[f+3]+=e*t[v+3],v+=Mi,f+=Mi;return a}for(c=0;c<r;c++)a[f]+=e*t[v],v+=i,f+=s;return a}iN.exports=Wcr});var No=u((LCr,uN)=>{"use strict";var Hcr=b(),aN=tN(),kcr=nN();Hcr(aN,"ndarray",kcr);uN.exports=aN});var oN=u((ICr,sN)=>{"use strict";function Dcr(r){var e,t,i,n,a,s,o,v,f,l,c;if(v=r.length,t=[],v===0)return t;if(n=r[0],f=n.length,v===1){for(l=0;l<f;l++)t.push(n[l]);return t}for(e=[f],l=1;l<v;l++)e.push(r[l].length),e[l]>f&&(f=e[l]);for(l=0;l<f;l++)t.push(0);for(l=f-1;l>=0;){for(a=e[0]-f+l,a>=0?i=n[a]:i=1,c=1;c<v;c++){if(s=e[c]-f+l,s>=0?o=r[c][s]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[l]=i,l-=1}return t}sN.exports=Dcr});var fN=u((PCr,vN)=>{"use strict";var Xcr=oN();vN.exports=Xcr});var cN=u((RCr,lN)=>{"use strict";var Jcr=B().isPrimitive,zcr=k().isPrimitive,Ycr=tr().isPrimitive,Zcr=vr(),$cr=fN(),Qcr=L(),Kcr=hn(),rpr={number:Jcr,string:zcr,boolean:Ycr};function epr(r,e,t){var i,n,a,s,o,v,f,l,c,p;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],n=[],p=0;p<r.length;p++)if(c=r[p],o=e[p],l=rpr[o],l(c))n.push([c]),a.push([1,1]);else if(Zcr(c))n.push(Kcr(c)),a.push([c.length,c[0].length]);else throw new TypeError(Qcr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[p],o,o,String(c)));if(s=$cr(a),s===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");for(i=[],p=0;p<a.length;p++)f=a[p],v=[],f[0]===1?v.push(0):v.push(f[1]),f[1]===1?v.push(0):v.push(1),i.push(v);return[n,s,i]}lN.exports=epr});var gN=u((_Cr,pN)=>{"use strict";var tpr=k().isPrimitive,ipr=L();function npr(r){if(!tpr(r))throw new TypeError(ipr("invalid argument. First argument must be a string. Value: `%s`.",r));return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}pN.exports=npr});var Qn=u((FCr,mN)=>{"use strict";var apr=gN();mN.exports=apr});var yN=u((MCr,qN)=>{"use strict";var upr=k().isPrimitive,spr=L();function opr(r){if(!upr(r))throw new TypeError(spr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toLowerCase()}qN.exports=opr});var xt=u((xCr,hN)=>{"use strict";var vpr=yN();hN.exports=vpr});var bN=u((BCr,wN)=>{"use strict";var fpr=k().isPrimitive,lpr=L(),dN=/[-\/\\^$*+?.()|[\]{}]/g;function cpr(r){var e,t,i;if(!fpr(r))throw new TypeError(lpr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(dN,"\\$&"):(t=r.substring(1,i),t=t.replace(dN,"\\$&"),r=r[0]+t+r.substring(i),r)}wN.exports=cpr});var NN=u((CCr,EN)=>{"use strict";var ppr=bN();EN.exports=ppr});var ON=u((jCr,AN)=>{"use strict";var gpr=RegExp.prototype.exec;AN.exports=gpr});var TN=u((VCr,SN)=>{"use strict";var mpr=ON();function qpr(r){try{return mpr.call(r),!0}catch{return!1}}SN.exports=qpr});var IN=u((GCr,LN)=>{"use strict";var ypr=ht(),hpr=Y(),dpr=TN(),wpr=ypr();function bpr(r){return typeof r=="object"?r instanceof RegExp?!0:wpr?dpr(r):hpr(r)==="[object RegExp]":!1}LN.exports=bpr});var RN=u((UCr,PN)=>{"use strict";var Epr=IN();PN.exports=Epr});var FN=u((WCr,_N)=>{"use strict";var Npr=NN(),Apr=I(),Ao=k().isPrimitive,Opr=RN(),Oo=L();function Spr(r,e,t){if(!Ao(r))throw new TypeError(Oo("invalid argument. First argument must be a string. Value: `%s`.",r));if(Ao(e))e=Npr(e),e=new RegExp(e,"g");else if(!Opr(e))throw new TypeError(Oo("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!Ao(t)&&!Apr(t))throw new TypeError(Oo("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return r.replace(e,t)}_N.exports=Spr});var ft=u((HCr,MN)=>{"use strict";var Tpr=FN();MN.exports=Tpr});var BN=u((kCr,xN)=>{"use strict";var Lpr=k().isPrimitive,Ipr=ft(),Ppr=L(),Rpr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function _pr(r){if(!Lpr(r))throw new TypeError(Ppr("invalid argument. Must provide a string. Value: `%s`.",r));return Ipr(r,Rpr,"$1")}xN.exports=_pr});var Bt=u((DCr,CN)=>{"use strict";var Fpr=BN();CN.exports=Fpr});var VN=u((XCr,jN)=>{"use strict";var Mpr=k().isPrimitive,xpr=Qn(),Bpr=xt(),Kn=ft(),Cpr=L(),jpr=Bt(),Vpr=/\s+/g,Gpr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Upr=/(?:\s|^)([^\s]+)(?=\s|$)/g,Wpr=/([a-z0-9])([A-Z])/g;function Hpr(r,e,t){return e=Bpr(e),t===0?e:xpr(e)}function kpr(r){if(!Mpr(r))throw new TypeError(Cpr("invalid argument. First argument must be a string. Value: `%s`.",r));return r=Kn(r,Gpr," "),r=Kn(r,Vpr," "),r=Kn(r,Wpr,"$1 $2"),r=jpr(r),r=Kn(r,Upr,Hpr),r}jN.exports=kpr});var UN=u((JCr,GN)=>{"use strict";var Dpr=VN();GN.exports=Dpr});var HN=u((zCr,WN)=>{"use strict";var Xpr=k().isPrimitive,Jpr=L();function zpr(r){if(!Xpr(r))throw new TypeError(Jpr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}WN.exports=zpr});var So=u((YCr,kN)=>{"use strict";var Ypr=HN();kN.exports=Ypr});var XN=u((ZCr,DN)=>{"use strict";var Zpr=k().isPrimitive,$pr=So(),To=ft(),Qpr=L(),Kpr=Bt(),r3r=/\s+/g,e3r=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,t3r=/([a-z0-9])([A-Z])/g;function i3r(r){if(!Zpr(r))throw new TypeError(Qpr("invalid argument. Must provide a string. Value: `%s`.",r));return r=To(r,e3r," "),r=To(r,t3r,"$1 $2"),r=Kpr(r),r=To(r,r3r,"_"),$pr(r)}DN.exports=i3r});var zN=u(($Cr,JN)=>{"use strict";var n3r=XN();JN.exports=n3r});var ZN=u((QCr,YN)=>{"use strict";var Lo=E(),a3r=Oe();function u3r(r,e,t,i,n){var a,s,o,v,f;if(r<=0)return i;if(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,a=e[s],i[o]=a,o+=n,f=1,Lo(a)===!1)for(f;f<r;f++){if(s+=t,v=e[s],Lo(v)){a=v;break}(v>a||v===a&&a3r(v))&&(a=v),i[o]=a,o+=n}if(Lo(a))for(f;f<r;f++)i[o]=a,o+=n;return i}YN.exports=u3r});var QN=u((KCr,$N)=>{"use strict";var Io=E(),s3r=Oe();function o3r(r,e,t,i,n,a,s){var o,v,f,l,c;if(r<=0)return n;if(v=i,f=s,o=e[v],n[f]=o,f+=a,c=1,Io(o)===!1)for(c;c<r;c++){if(v+=t,l=e[v],Io(l)){o=l;break}(l>o||l===o&&s3r(l))&&(o=l),n[f]=o,f+=a}if(Io(o))for(c;c<r;c++)n[f]=o,f+=a;return n}$N.exports=o3r});var eA=u((rjr,rA)=>{"use strict";var v3r=b(),KN=ZN(),f3r=QN();v3r(KN,"ndarray",f3r);rA.exports=KN});var iA=u((ejr,tA)=>{"use strict";var l3r=eA();tA.exports=l3r});var uA=u((tjr,aA)=>{"use strict";var nA=E(),c3r=x(),p3r=Ae(),g3r=no();function m3r(r,e){return nA(r)||nA(e)||e<=0?NaN:.5*c3r(p3r*g3r*e*e)}aA.exports=m3r});var oA=u((ijr,sA)=>{"use strict";var q3r=uA();sA.exports=q3r});var lA=u((njr,fA)=>{"use strict";var y3r=nr(),vA=Z(),h3r=V(),d3r=Ae(),w3r=j(),Po=E();function b3r(r,e,t){var i,n,a;return Po(r)||Po(e)||Po(t)||t<0?NaN:t===0?r===e?w3r:0:(i=vA(t,2),n=1/h3r(i*d3r),a=-1/(2*i),n*y3r(a*vA(r-e,2)))}fA.exports=b3r});var gA=u((ajr,pA)=>{"use strict";var E3r=j(),cA=E();function N3r(r,e){return cA(r)||cA(e)?NaN:r===e?E3r:0}pA.exports=N3r});var yA=u((ujr,qA)=>{"use strict";var A3r=P(),O3r=j(),mA=E();function S3r(r){if(mA(r))return A3r(NaN);return e;function e(t){return mA(t)?NaN:t===r?O3r:0}}qA.exports=S3r});var wA=u((sjr,dA)=>{"use strict";var T3r=b(),hA=gA(),L3r=yA();T3r(hA,"factory",L3r);dA.exports=hA});var NA=u((ojr,EA)=>{"use strict";var I3r=P(),P3r=wA().factory,Ro=E(),R3r=V(),_3r=nr(),bA=Z(),F3r=Ae();function M3r(r,e){var t,i,n;if(Ro(r)||Ro(e)||e<0)return I3r(NaN);if(e===0)return P3r(r);return t=bA(e,2),i=1/R3r(t*F3r),n=-1/(2*t),a;function a(s){return Ro(s)?NaN:i*_3r(n*bA(s-r,2))}}EA.exports=M3r});var SA=u((vjr,OA)=>{"use strict";var x3r=b(),AA=lA(),B3r=NA();x3r(AA,"factory",B3r);OA.exports=AA});var IA=u((fjr,LA)=>{"use strict";var TA=Rs();function C3r(r,e,t){var i,n;if(e===1)return TA(t,r);for(i=[],n=0;n<r;n++)i.push(TA(t,e));return i}LA.exports=C3r});var RA=u((ljr,PA)=>{"use strict";function j3r(r,e,t){var i,n;for(i=[],n=0;n<r;n++)i.push(e.call(t,n));return i}PA.exports=j3r});var FA=u((cjr,_A)=>{"use strict";var V3r=RA();_A.exports=V3r});var BA=u((pjr,xA)=>{"use strict";var MA=FA();function G3r(r,e,t){var i,n;if(e===1)return MA(r,t);for(i=[],n=0;n<r;n++)i.push(MA(e,t));return i}xA.exports=G3r});var jA=u((gjr,CA)=>{"use strict";var U3r=I();function W3r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&U3r(r.next)}CA.exports=W3r});var GA=u((mjr,VA)=>{"use strict";var H3r=jA();VA.exports=H3r});var WA=u((qjr,UA)=>{"use strict";function k3r(r,e){return r[e]}UA.exports=k3r});var kA=u((yjr,HA)=>{"use strict";function D3r(r,e){return r.get(e)}HA.exports=D3r});var XA=u((hjr,DA)=>{"use strict";function X3r(r,e,t){r[e]=t}DA.exports=X3r});var zA=u((djr,JA)=>{"use strict";function J3r(r,e,t){r.set(t,e)}JA.exports=J3r});var ZA=u((wjr,YA)=>{"use strict";var z3r=WA(),Y3r=kA(),Z3r=XA(),$3r=zA();function Q3r(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?Y3r:z3r,setter:e?$3r:Z3r}}YA.exports=Q3r});var lt=u((bjr,$A)=>{"use strict";var K3r=ZA();$A.exports=K3r});var rO=u((Ejr,KA)=>{"use strict";var QA=I(),r6r=Lr(),e6r=GA(),t6r=lt();function i6r(){var r,e,t,i,n,a,s,o;if(r=arguments[0],arguments.length>1)if(r6r(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!QA(t))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+t+"`.");e=arguments[3]}}else{if(t=arguments[1],!QA(t))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+t+"`.");e=arguments[2]}if(!e6r(r))throw new TypeError("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(s=-1,i===void 0){if(i=[],t){for(;s+=1,o=r.next(),!o.done;)i.push(t.call(e,o.value,s));return i}for(;o=r.next(),!o.done;)i.push(o.value);return i}if(n=i.length,a=t6r(i).setter,t){for(;s<n-1&&(s+=1,o=r.next(),!o.done);)a(i,s,t.call(e,o.value,s));return i}for(;s<n-1&&(s+=1,o=r.next(),!o.done);)a(i,s,o.value);return i}KA.exports=i6r});var tO=u((Njr,eO)=>{"use strict";var n6r=rO();eO.exports=n6r});var nO=u((Ajr,iO)=>{"use strict";var a6r=O();function u6r(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"&&a6r(Symbol,"iterator")&&typeof Symbol.iterator=="symbol"}iO.exports=u6r});var ra=u((Ojr,aO)=>{"use strict";var s6r=nO();aO.exports=s6r});var sO=u((Sjr,uO)=>{"use strict";var o6r=ra(),v6r=o6r()?Symbol.iterator:null;uO.exports=v6r});var ea=u((Tjr,oO)=>{"use strict";var f6r=sO();oO.exports=f6r});var fO=u((Ljr,vO)=>{"use strict";function l6r(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}vO.exports=l6r});var cO=u((Ijr,lO)=>{"use strict";function c6r(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}lO.exports=c6r});var mO=u((Pjr,gO)=>{"use strict";var p6r=or(),pO=ot(),g6r=fO(),m6r=cO(),q6r=.7853981633974483,y6r=3061616997868383e-32,h6r=.3333333333333341,d6r=2147483647;function w6r(r,e,t){var i,n,a,s,o,v,f,l,c;return i=p6r(r),n=i&d6r|0,n>=1072010280&&(r<0&&(r=-r,e=-e),c=q6r-r,l=y6r-e,r=c+l,e=0),c=r*r,l=c*c,s=g6r(l),f=c*m6r(l),o=c*r,s=e+c*(o*(s+f)+e),s+=h6r*o,l=r+s,n>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(l*l/(l+f)-s)))):t===1?l:(c=l,pO(c,0),f=s-(c-r),a=-1/l,v=a,pO(v,0),o=1+v*c,v+a*(o+v*f))}gO.exports=w6r});var yO=u((Rjr,qO)=>{"use strict";var b6r=mO();qO.exports=b6r});var wO=u((_jr,dO)=>{"use strict";var E6r=or(),hO=yO(),N6r=Mn(),_o=[0,0],A6r=2147483647,O6r=1072243195,S6r=2146435072,T6r=1044381696;function L6r(r){var e,t;return e=E6r(r),e&=A6r,e<=O6r?e<T6r?r:hO(r,0,1):e>=S6r?NaN:(t=N6r(r,_o),hO(_o[0],_o[1],1-((t&1)<<1)))}dO.exports=L6r});var Fo=u((Fjr,bO)=>{"use strict";var I6r=wO();bO.exports=I6r});var NO=u((Mjr,EO)=>{"use strict";var P6r=T(),ta=O(),R6r=Tr().isPrimitive,_6r=Gr().isPrimitive,F6r=de().isPrimitive,M6r=vs().isPrimitive;function x6r(r,e){return P6r(e)?ta(e,"period")&&(r.period=e.period,!_6r(e.period))?new TypeError("invalid option. `period` option must be an positive integer. Option: `"+e.period+"`."):ta(e,"amplitude")&&(r.amplitude=e.amplitude,!M6r(e.amplitude))?new TypeError("invalid option. `amplitude` option must be a nonnegative number. Option: `"+e.amplitude+"`."):ta(e,"offset")&&(r.offset=e.offset,!R6r(e.offset))?new TypeError("invalid option. `offset` option must be an integer. Option: `"+e.offset+"`."):ta(e,"iter")&&(r.iter=e.iter,!F6r(e.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}EO.exports=x6r});var TO=u((xjr,SO)=>{"use strict";var Mo=b(),AO=ea(),B6r=Fo(),C6r=en(),j6r=rn(),V6r=xr(),G6r=NO();function OO(r){var e,t,i,n,a,s,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=G6r(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,s=V6r/e.period,o=e.amplitude/j6r,v=0,t={},Mo(t,"next",f),Mo(t,"return",l),AO&&Mo(t,AO,c),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*C6r(B6r(s*a)),done:!1})}function l(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function c(){return OO(e)}}SO.exports=OO});var IO=u((Bjr,LO)=>{"use strict";var U6r=TO();LO.exports=U6r});var RO=u((Cjr,PO)=>{"use strict";var W6r=k().isPrimitive,H6r=xt(),xo=ft(),k6r=L(),D6r=Bt(),X6r=/\s+/g,J6r=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,z6r=/([a-z0-9])([A-Z])/g;function Y6r(r){if(!W6r(r))throw new TypeError(k6r("invalid argument. Must provide a string. Value: `%s`.",r));return r=xo(r,J6r," "),r=xo(r,z6r,"$1 $2"),r=D6r(r),r=xo(r,X6r,"-"),H6r(r)}PO.exports=Y6r});var FO=u((jjr,_O)=>{"use strict";var Z6r=RO();_O.exports=Z6r});var xO=u((Vjr,MO)=>{"use strict";function $6r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}MO.exports=$6r});var CO=u((Gjr,BO)=>{"use strict";function Q6r(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}BO.exports=Q6r});var UO=u((Ujr,GO)=>{"use strict";var jO=B().isPrimitive,VO=he(),xi=b(),K6r=xO(),r4r=CO();function ct(r,e){if(!(this instanceof ct))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!jO(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!jO(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return VO(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),VO(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}xi(ct,"BYTES_PER_ELEMENT",8);xi(ct.prototype,"BYTES_PER_ELEMENT",8);xi(ct.prototype,"byteLength",16);xi(ct.prototype,"toString",K6r);xi(ct.prototype,"toJSON",r4r);GO.exports=ct});var Ct=u((Wjr,WO)=>{"use strict";var e4r=UO();WO.exports=e4r});var kO=u((Hjr,HO)=>{"use strict";var t4r=typeof Math.fround=="function"?Math.fround:null;HO.exports=t4r});var JO=u((kjr,XO)=>{"use strict";var i4r=Vr(),DO=new i4r(1);function n4r(r){return DO[0]=r,DO[0]}XO.exports=n4r});var ZO=u((Djr,YO)=>{"use strict";var zO=kO(),a4r=JO(),Bo;typeof zO=="function"?Bo=zO:Bo=a4r;YO.exports=Bo});var QO=u((Xjr,$O)=>{"use strict";function u4r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}$O.exports=u4r});var rS=u((Jjr,KO)=>{"use strict";function s4r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}KO.exports=s4r});var aS=u((zjr,nS)=>{"use strict";var eS=B().isPrimitive,tS=he(),Bi=b(),iS=ZO(),o4r=QO(),v4r=rS();function pt(r,e){if(!(this instanceof pt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!eS(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!eS(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return tS(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:iS(r)}),tS(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:iS(e)}),this}Bi(pt,"BYTES_PER_ELEMENT",4);Bi(pt.prototype,"BYTES_PER_ELEMENT",4);Bi(pt.prototype,"byteLength",8);Bi(pt.prototype,"toString",o4r);Bi(pt.prototype,"toJSON",v4r);nS.exports=pt});var jt=u((Yjr,uS)=>{"use strict";var f4r=aS();uS.exports=f4r});var oS=u((Zjr,sS)=>{"use strict";var l4r=Ct(),c4r=jt();function p4r(r){return r instanceof l4r||r instanceof c4r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}sS.exports=p4r});var Rr=u(($jr,vS)=>{"use strict";var g4r=oS();vS.exports=g4r});var lS=u((Qjr,fS)=>{"use strict";var m4r={Complex64:"complex64",Complex128:"complex128"};fS.exports=m4r});var pS=u((Kjr,cS)=>{"use strict";var q4r=jt(),y4r=Ct(),h4r=[q4r,y4r];cS.exports=h4r});var mS=u((rVr,gS)=>{"use strict";var d4r=["complex64","complex128"];gS.exports=d4r});var hS=u((eVr,yS)=>{"use strict";var w4r=we(),b4r=lS(),E4r=pS(),qS=mS(),N4r=qS.length;function A4r(r){var e;for(e=0;e<N4r;e++)if(r instanceof E4r[e])return qS[e];return b4r[w4r(r)]||null}yS.exports=A4r});var Co=u((tVr,dS)=>{"use strict";var O4r=hS();dS.exports=O4r});var bS=u((iVr,wS)=>{"use strict";var S4r=4294967295;wS.exports=S4r});var NS=u((nVr,ES)=>{"use strict";var T4r=wr(),L4r=bS();function I4r(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&T4r(r.length)&&r.length>=0&&r.length<=L4r}ES.exports=I4r});var gt=u((aVr,AS)=>{"use strict";var P4r=NS();AS.exports=P4r});var SS=u((uVr,OS)=>{"use strict";var R4r=Y(),_4r=typeof ArrayBuffer=="function";function F4r(r){return _4r&&r instanceof ArrayBuffer||R4r(r)==="[object ArrayBuffer]"}OS.exports=F4r});var jo=u((sVr,TS)=>{"use strict";var M4r=SS();TS.exports=M4r});var IS=u((oVr,LS)=>{"use strict";var x4r=he();function B4r(r,e,t){x4r(r,e,{configurable:!1,enumerable:!1,get:t})}LS.exports=B4r});var R=u((vVr,PS)=>{"use strict";var C4r=IS();PS.exports=C4r});var _S=u((fVr,RS)=>{"use strict";function j4r(r){return r.re}RS.exports=j4r});var Te=u((lVr,FS)=>{"use strict";var V4r=_S();FS.exports=V4r});var xS=u((cVr,MS)=>{"use strict";function G4r(r){return r.im}MS.exports=G4r});var Le=u((pVr,BS)=>{"use strict";var U4r=xS();BS.exports=U4r});var jS=u((gVr,CS)=>{"use strict";var W4r=Vr();function H4r(r,e){return new W4r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}CS.exports=H4r});var Vt=u((mVr,VS)=>{"use strict";var k4r=jS();VS.exports=k4r});var US=u((qVr,GS)=>{"use strict";var D4r=sr();function X4r(r,e){return new D4r(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}GS.exports=X4r});var Gt=u((yVr,WS)=>{"use strict";var J4r=US();WS.exports=J4r});var kS=u((hVr,HS)=>{"use strict";var z4r=gt(),Y4r=Rr(),Z4r=Te(),$4r=Le();function Q4r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,z4r(i)&&i.length>=2)e.push(i[0],i[1]);else if(Y4r(i))e.push(Z4r(i),$4r(i));else return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");return e}HS.exports=Q4r});var XS=u((dVr,DS)=>{"use strict";var K4r=gt(),r5r=Rr(),e5r=Te(),t5r=Le();function i5r(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),K4r(a)&&a.length>=2)i.push(a[0],a[1]);else if(r5r(a))i.push(e5r(a),t5r(a));else return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+a+"`.");return i}DS.exports=i5r});var zS=u((wVr,JS)=>{"use strict";var n5r=Rr(),a5r=Te(),u5r=Le();function s5r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!n5r(i))return null;r[a]=a5r(i),r[a+1]=u5r(i),a+=2}return r}JS.exports=s5r});var iT=u((bVr,tT)=>{"use strict";var Ci=de().isPrimitive,YS=gt(),Go=Lr(),ZS=jo(),$S=dn(),o5r=vr(),mt=I(),Ut=Rr(),ia=Bn(),Vo=wr(),v5r=ra(),Wt=ea(),lr=b(),ua=R(),Ar=sr(),QS=Ct(),na=Te(),aa=Le(),f5r=Vt(),l5r=Gt(),c5r=lt(),KS=kS(),p5r=XS(),g5r=zS(),br=Ar.BYTES_PER_ELEMENT*2,rT=v5r();function Ht(r){return r instanceof X||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function eT(r){return r===X||r.name==="Complex64Array"}function m5r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===br/2}function q5r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===br}function X(){var r,e,t,i;if(e=arguments.length,!(this instanceof X))return e===0?new X:e===1?new X(arguments[0]):e===2?new X(arguments[0],arguments[1]):new X(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Ar(0);else if(e===1)if(Ci(arguments[0]))t=new Ar(arguments[0]*2);else if(Go(arguments[0]))if(t=arguments[0],i=t.length,i&&o5r(t)&&Ut(t[0])){if(t=g5r(new Ar(i*2),t),t===null){if(!ia(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Ar(arguments[0])}}else{if(m5r(t))t=f5r(t,0);else if(q5r(t))t=l5r(t,0);else if(!ia(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Ar(t)}else if(ZS(arguments[0])){if(t=arguments[0],!Vo(t.byteLength/br))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+br+". Byte length: `"+t.byteLength+"`.");t=new Ar(t)}else if($S(arguments[0])){if(t=arguments[0],rT===!1)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!mt(t[Wt]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(t=t[Wt](),!mt(t.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(t=KS(t),t instanceof Error)throw t;t=new Ar(t)}else throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");else{if(t=arguments[0],!ZS(t))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(r=arguments[1],!Ci(r))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Vo(r/br))throw new RangeError("invalid argument. Byte offset must be a multiple of "+br+". Value: `"+r+"`.");if(e===2){if(i=t.byteLength-r,!Vo(i/br))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+br+". View byte length: `"+i+"`.");t=new Ar(t,r)}else{if(i=arguments[2],!Ci(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*br>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*br+"`.");t=new Ar(t,r,i*2)}}return lr(this,"_buffer",t),lr(this,"_length",t.length/2),this}lr(X,"BYTES_PER_ELEMENT",br);lr(X,"name","Complex128Array");lr(X,"from",function(e){var t,i,n,a,s,o,v,f,l,c,p;if(!mt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!eT(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!mt(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");i>2&&(t=arguments[2])}if(Ht(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,e.get(c),c),Ut(l))s[p]=na(l),s[p+1]=aa(l);else if(YS(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(Go(e)){if(n){for(v=e.length,o=c5r(e),c=0;c<v;c++)if(!Ut(o.getter(e,c))){f=!0;break}if(f){if(!ia(v))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+v+"`.");for(a=new this(v/2),s=a._buffer,c=0;c<v;c++)s[c]=n.call(t,o.getter(e,c),c);return a}for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,o.getter(e,c),c),Ut(l))s[p]=na(l),s[p+1]=aa(l);else if(YS(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if($S(e)&&rT&&mt(e[Wt])){if(s=e[Wt](),!mt(s.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(n?o=p5r(s,n,t):o=KS(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,c=0;c<v;c++)s[c]=o[c];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")});lr(X,"of",function(){var e,t;if(!mt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!eT(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});ua(X.prototype,"buffer",function(){return this._buffer.buffer});ua(X.prototype,"byteLength",function(){return this._buffer.byteLength});ua(X.prototype,"byteOffset",function(){return this._buffer.byteOffset});lr(X.prototype,"BYTES_PER_ELEMENT",X.BYTES_PER_ELEMENT);lr(X.prototype,"copyWithin",function(e,t){if(!Ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});lr(X.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!Ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},lr(i,"next",v),lr(i,"return",f),Wt&&lr(i,Wt,l),i;function v(){var c;return s+=1,a||s>=n?{done:!0}:(o+=2,c=new QS(e[o],e[o+1]),{value:[s,c],done:!1})}function f(c){return a=!0,arguments.length?{value:c,done:!0}:{done:!0}}function l(){return t.entries()}});lr(X.prototype,"get",function(e){var t;if(!Ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ci(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new QS(t[e],t[e+1])});ua(X.prototype,"length",function(){return this._length});lr(X.prototype,"set",function(e){var t,i,n,a,s,o,v,f,l;if(!Ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Ci(i))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+i+"`.")}else i=0;if(Ut(e)){if(i>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+i+"`.");i*=2,n[i]=na(e),n[i+1]=aa(e);return}if(Ht(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,l=n.byteOffset+i*br,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Ar(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(Go(e)){for(o=e.length,f=0;f<o;f++)if(!Ut(e[f])){s=!0;break}if(s){if(!ia(o))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+o+"`.");if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,l=n.byteOffset+i*br,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Ar(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=na(v),n[i+1]=aa(v),i+=2;return}throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.")});tT.exports=X});var ji=u((EVr,nT)=>{"use strict";var y5r=iT();nT.exports=y5r});var uT=u((NVr,aT)=>{"use strict";function h5r(r){return r.re}aT.exports=h5r});var Ie=u((AVr,sT)=>{"use strict";var d5r=uT();sT.exports=d5r});var vT=u((OVr,oT)=>{"use strict";function w5r(r){return r.im}oT.exports=w5r});var Pe=u((SVr,fT)=>{"use strict";var b5r=vT();fT.exports=b5r});var cT=u((TVr,lT)=>{"use strict";var E5r=gt(),N5r=Rr(),A5r=Ie(),O5r=Pe();function S5r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,E5r(i)&&i.length>=2)e.push(i[0],i[1]);else if(N5r(i))e.push(A5r(i),O5r(i));else return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");return e}lT.exports=S5r});var gT=u((LVr,pT)=>{"use strict";var T5r=gt(),L5r=Rr(),I5r=Ie(),P5r=Pe();function R5r(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),T5r(a)&&a.length>=2)i.push(a[0],a[1]);else if(L5r(a))i.push(I5r(a),P5r(a));else return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+a+"`.");return i}pT.exports=R5r});var qT=u((IVr,mT)=>{"use strict";var _5r=Rr(),F5r=Ie(),M5r=Pe();function x5r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!_5r(i))return null;r[a]=F5r(i),r[a+1]=M5r(i),a+=2}return r}mT.exports=x5r});var OT=u((PVr,AT)=>{"use strict";var Vi=de().isPrimitive,yT=gt(),Wo=Lr(),hT=jo(),dT=dn(),B5r=vr(),qt=I(),kt=Rr(),sa=Bn(),Uo=wr(),C5r=ra(),Dt=ea(),cr=b(),fa=R(),Or=Vr(),wT=jt(),oa=Ie(),va=Pe(),j5r=Vt(),V5r=Gt(),G5r=lt(),bT=cT(),U5r=gT(),W5r=qT(),Er=Or.BYTES_PER_ELEMENT*2,ET=C5r();function Xt(r){return r instanceof J||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function NT(r){return r===J||r.name==="Complex128Array"}function H5r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Er}function k5r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Er*2}function J(){var r,e,t,i;if(e=arguments.length,!(this instanceof J))return e===0?new J:e===1?new J(arguments[0]):e===2?new J(arguments[0],arguments[1]):new J(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Or(0);else if(e===1)if(Vi(arguments[0]))t=new Or(arguments[0]*2);else if(Wo(arguments[0]))if(t=arguments[0],i=t.length,i&&B5r(t)&&kt(t[0])){if(t=W5r(new Or(i*2),t),t===null){if(!sa(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Or(arguments[0])}}else{if(H5r(t))t=j5r(t,0);else if(k5r(t))t=V5r(t,0);else if(!sa(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Or(t)}else if(hT(arguments[0])){if(t=arguments[0],!Uo(t.byteLength/Er))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Er+". Byte length: `"+t.byteLength+"`.");t=new Or(t)}else if(dT(arguments[0])){if(t=arguments[0],ET===!1)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!qt(t[Dt]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(t=t[Dt](),!qt(t.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(t=bT(t),t instanceof Error)throw t;t=new Or(t)}else throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");else{if(t=arguments[0],!hT(t))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(r=arguments[1],!Vi(r))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Uo(r/Er))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Er+". Value: `"+r+"`.");if(e===2){if(i=t.byteLength-r,!Uo(i/Er))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Er+". View byte length: `"+i+"`.");t=new Or(t,r)}else{if(i=arguments[2],!Vi(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*Er>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*Er+"`.");t=new Or(t,r,i*2)}}return cr(this,"_buffer",t),cr(this,"_length",t.length/2),this}cr(J,"BYTES_PER_ELEMENT",Er);cr(J,"name","Complex64Array");cr(J,"from",function(e){var t,i,n,a,s,o,v,f,l,c,p;if(!qt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!NT(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!qt(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");i>2&&(t=arguments[2])}if(Xt(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,e.get(c),c),kt(l))s[p]=oa(l),s[p+1]=va(l);else if(yT(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(Wo(e)){if(n){for(v=e.length,o=G5r(e),c=0;c<v;c++)if(!kt(o.getter(e,c))){f=!0;break}if(f){if(!sa(v))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+v+"`.");for(a=new this(v/2),s=a._buffer,c=0;c<v;c++)s[c]=n.call(t,o.getter(e,c),c);return a}for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,o.getter(e,c),c),kt(l))s[p]=oa(l),s[p+1]=va(l);else if(yT(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(dT(e)&&ET&&qt(e[Dt])){if(s=e[Dt](),!qt(s.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(n?o=U5r(s,n,t):o=bT(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,c=0;c<v;c++)s[c]=o[c];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")});cr(J,"of",function(){var e,t;if(!qt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!NT(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});fa(J.prototype,"buffer",function(){return this._buffer.buffer});fa(J.prototype,"byteLength",function(){return this._buffer.byteLength});fa(J.prototype,"byteOffset",function(){return this._buffer.byteOffset});cr(J.prototype,"BYTES_PER_ELEMENT",J.BYTES_PER_ELEMENT);cr(J.prototype,"copyWithin",function(e,t){if(!Xt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});cr(J.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!Xt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},cr(i,"next",v),cr(i,"return",f),Dt&&cr(i,Dt,l),i;function v(){var c;return s+=1,a||s>=n?{done:!0}:(o+=2,c=new wT(e[o],e[o+1]),{value:[s,c],done:!1})}function f(c){return a=!0,arguments.length?{value:c,done:!0}:{done:!0}}function l(){return t.entries()}});cr(J.prototype,"get",function(e){var t;if(!Xt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Vi(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new wT(t[e],t[e+1])});fa(J.prototype,"length",function(){return this._length});cr(J.prototype,"set",function(e){var t,i,n,a,s,o,v,f,l;if(!Xt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Vi(i))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+i+"`.")}else i=0;if(kt(e)){if(i>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+i+"`.");i*=2,n[i]=oa(e),n[i+1]=va(e);return}if(Xt(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,l=n.byteOffset+i*Er,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Or(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(Wo(e)){for(o=e.length,f=0;f<o;f++)if(!kt(e[f])){s=!0;break}if(s){if(!sa(o))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+o+"`.");if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,l=n.byteOffset+i*Er,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Or(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=oa(v),n[i+1]=va(v),i+=2;return}throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.")});AT.exports=J});var Gi=u((RVr,ST)=>{"use strict";var D5r=OT();ST.exports=D5r});var LT=u((_Vr,TT)=>{"use strict";var X5r=sr(),J5r=Vr(),z5r=ji(),Y5r=Gi(),Z5r={float64:X5r,float32:J5r,complex128:z5r,complex64:Y5r};TT.exports=Z5r});var PT=u((FVr,IT)=>{"use strict";var $5r=LT();function Q5r(r){return $5r[r]||null}IT.exports=Q5r});var _T=u((MVr,RT)=>{"use strict";var K5r=PT();RT.exports=K5r});var MT=u((xVr,FT)=>{"use strict";function r8r(r,e,t,i){var n,a,s,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,s=(e-r)/a,o=1;o<a;o++)n.push(r+s*o);return i&&n.push(e),n}FT.exports=r8r});var GT=u((BVr,VT)=>{"use strict";var e8r=jt(),t8r=Ct(),xT=Te(),BT=Le(),CT=Ie(),jT=Pe();function i8r(r,e,t,i,n,a){var s,o,v,f,l,c,p,q,y,m,g,h,N;if(n===0)return[];if(o=0,r==="float64"?(f=e,c=0):r==="complex64"?(o+=1,f=CT(e),c=jT(e)):(f=xT(e),c=BT(e)),t==="float64"?(l=i,p=0):t==="complex64"?(o+=1,l=CT(i),p=jT(i)):(l=xT(i),p=BT(i)),o===2?s=e8r:s=t8r,n===1)return a?[new s(l,p)]:[new s(f,c)];for(v=[new s(f,c)],a?h=n-1:h=n,m=(l-f)/h,g=(p-c)/h,N=1;N<h;N++)q=f+m*N,y=c+g*N,v.push(new s(q,y));return a&&v.push(new s(l,p)),v}VT.exports=i8r});var Ho=u((CVr,UT)=>{"use strict";function n8r(r,e,t,i,n){var a,s,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,s=(t-e)/a,o=1;o<a;o++)r[o]=e+s*o;return n&&(r[a]=t),r}UT.exports=n8r});var ko=u((jVr,XT)=>{"use strict";var WT=Te(),HT=Le(),kT=Ie(),DT=Pe();function a8r(r,e,t,i,n,a,s){var o,v,f,l,c,p,q,y,m;if(a===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=kT(t),f=DT(t)):(o=WT(t),f=HT(t)),i==="float64"?(v=n,l=0):i==="complex64"?(v=kT(n),l=DT(n)):(v=WT(n),l=HT(n)),a===1)return s?(r[0]=v,r[1]=l):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,s?q=a-1:q=a,c=(v-o)/q,p=(l-f)/q,m=2,y=1;y<q;y++)r[m]=o+c*y,r[m+1]=f+p*y,m+=2;return s&&(r[m]=v,r[m+1]=l),r}XT.exports=a8r});var Do=u((VVr,zT)=>{"use strict";var u8r=T(),JT=O(),s8r=k().isPrimitive,o8r=tr().isPrimitive;function v8r(r,e){return u8r(e)?JT(e,"dtype")&&(r.dtype=e.dtype,!s8r(r.dtype))?new TypeError("invalid option. `dtype` option must be a string. Option: `"+r.dtype+"`."):JT(e,"endpoint")&&(r.endpoint=e.endpoint,!o8r(r.endpoint))?new TypeError("invalid option. `endpoint` option must be a boolean. Option: `"+r.endpoint+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}zT.exports=v8r});var Xo=u((GVr,f8r)=>{f8r.exports={endpoint:!0}});var eL=u((UVr,rL)=>{"use strict";var YT=Rr(),ZT=B().isPrimitive,l8r=de().isPrimitive,$T=E(),QT=Co(),c8r=_T(),p8r=Vt(),g8r=Gt(),m8r=MT(),q8r=GT(),y8r=Ho(),KT=ko(),h8r=Do(),d8r=Xo();function w8r(r,e,t){var i,n,a,s,o,v,f;if(typeof r=="object"){if(o=QT(r),o===null){if(!YT(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");o="complex128"}f=!0}else{if(!ZT(r)||$T(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");o="float64"}if(typeof e=="object"){if(v=QT(e),v===null){if(!YT(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");v="complex128"}f=!0}else{if(!ZT(e)||$T(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");v="float64"}if(!l8r(t))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+t+"`.");if(i={endpoint:d8r.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=h8r(i,arguments[3]),a))throw a;if(i.dtype==="generic")return f?q8r(o,r,v,e,t,i.endpoint):m8r(r,e,t,i.endpoint);if(n=c8r(i.dtype),n===null)throw new TypeError('invalid argument. `dtype` option must be a real or complex floating-point data type or "generic". Option: `'+i.dtype+"`.");if(s=new n(t),i.dtype==="complex64")return KT(p8r(s,0),o,r,v,e,t,i.endpoint),s;if(i.dtype==="complex128")return KT(g8r(s,0),o,r,v,e,t,i.endpoint),s;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return y8r(s,r,e,t,i.endpoint)}rL.exports=w8r});var iL=u((WVr,tL)=>{"use strict";var b8r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};tL.exports=b8r});var aL=u((HVr,nL)=>{"use strict";var E8r=sr(),N8r=Vr(),A8r=ar(),O8r=at(),S8r=bt(),T8r=hi(),L8r=wt(),I8r=yi(),P8r=qi(),R8r=Gi(),_8r=ji(),F8r=[E8r,N8r,O8r,A8r,T8r,S8r,P8r,L8r,I8r,R8r,_8r];nL.exports=F8r});var sL=u((kVr,uL)=>{"use strict";var M8r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];uL.exports=M8r});var fL=u((DVr,vL)=>{"use strict";var x8r=rt(),B8r=vr(),C8r=we(),j8r=iL(),V8r=aL(),oL=sL(),G8r=oL.length;function U8r(r){var e;if(B8r(r))return"generic";if(x8r(r))return null;for(e=0;e<G8r;e++)if(r instanceof V8r[e])return oL[e];return j8r[C8r(r)]||null}vL.exports=U8r});var cL=u((XVr,lL)=>{"use strict";var W8r=fL();lL.exports=W8r});var hL=u((JVr,yL)=>{"use strict";var H8r=jt(),k8r=Ct(),pL=Te(),gL=Le(),mL=Ie(),qL=Pe();function D8r(r,e,t,i,n,a,s){var o,v,f,l,c,p,q,y,m,g,h,N,A,C;if(a===0)return r;if(v=0,e==="float64"?(f=t,c=0):e==="complex64"?(v+=1,f=mL(t),c=qL(t)):(f=pL(t),c=gL(t)),i==="float64"?(l=n,p=0):i==="complex64"?(v+=1,l=mL(n),p=qL(n)):(l=pL(n),p=gL(n)),v===2?o=H8r:o=k8r,y=r.data,q=r.setter,a===1)return s?q(y,0,new o(l,p)):q(y,0,new o(f,c)),r;for(q(y,0,new o(f,c)),s?A=a-1:A=a,h=(l-f)/A,N=(p-c)/A,C=1;C<A;C++)m=f+h*C,g=c+N*C,q(y,C,new o(m,g));return s&&q(y,A,new o(l,p)),r}yL.exports=D8r});var wL=u((zVr,dL)=>{"use strict";function X8r(r,e,t,i,n){var a,s,o,v,f;if(i===0)return r;if(a=r.data,s=r.setter,i===1)return n?s(a,0,t):s(a,0,e),r;for(s(a,0,e),n?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)s(a,f,e+v*f);return n&&s(a,o,t),r}dL.exports=X8r});var LL=u((YVr,TL)=>{"use strict";var bL=Rr(),EL=B().isPrimitive,J8r=Lr(),NL=E(),AL=Co(),z8r=cL(),Y8r=Vt(),Z8r=Gt(),OL=lt(),$8r=hL(),Q8r=wL(),SL=ko(),K8r=Ho(),rgr=Do(),egr=Xo();function tgr(r,e,t){var i,n,a,s,o,v,f;if(typeof r=="object"){if(a=AL(r),a===null){if(!bL(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");a="complex128"}o=!0}else{if(!EL(r)||NL(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");a="float64"}if(typeof e=="object"){if(s=AL(e),s===null){if(!bL(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");s="complex128"}o=!0}else{if(!EL(e)||NL(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");s="float64"}if(!J8r(t))throw new TypeError("invalid argument. Third argument must be an array-like object. Value: `"+t+"`.");if(i={endpoint:egr.endpoint},arguments.length>3&&(n=rgr(i,arguments[3]),n))throw n;if(v=z8r(t),v===null&&(v="generic"),v==="complex64")return SL(Y8r(t,0),a,r,s,e,t.length,i.endpoint),t;if(v==="complex128")return SL(Z8r(t,0),a,r,s,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=OL(t),$8r(f,a,r,s,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=OL(t),f.accessors?(Q8r(f,r,e,t.length,i.endpoint),t):(K8r(t,r,e,t.length,i.endpoint),t)}TL.exports=tgr});var RL=u((ZVr,PL)=>{"use strict";var igr=b(),IL=eL(),ngr=LL();igr(IL,"assign",ngr);PL.exports=IL});var Jo=u(($Vr,_L)=>{"use strict";function agr(r,e){var t,i,n,a,s;for(t=r.length,i=r[0].length,a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)n[s]=e(n[s]);return r}_L.exports=agr});var ML=u((QVr,FL)=>{"use strict";var ugr=E(),sgr=Oe();function ogr(r,e,t){var i,n,a,s;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],s=1;s<r;s++){if(n+=t,a=e[n],ugr(a))return a;(a>i||a===i&&sgr(a))&&(i=a)}return i}FL.exports=ogr});var BL=u((KVr,xL)=>{"use strict";var vgr=E(),fgr=Oe();function lgr(r,e,t,i){var n,a,s,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,s=e[a],vgr(s))return s;(s>n||s===n&&fgr(s))&&(n=s)}return n}xL.exports=lgr});var VL=u((rGr,jL)=>{"use strict";var cgr=b(),CL=ML(),pgr=BL();cgr(CL,"ndarray",pgr);jL.exports=CL});var UL=u((eGr,GL)=>{"use strict";var ggr=VL();GL.exports=ggr});var kL=u((tGr,HL)=>{"use strict";var WL=E(),mgr=Oe();function qgr(r,e,t,i,n){var a,s,o,v,f;if(r<=0)return NaN;for(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,f=0;f<r&&i[o]!==0;f++)s+=t,o+=n;if(f===r)return NaN;if(a=e[s],WL(a))return a;for(f+=1,f;f<r;f++)if(s+=t,o+=n,!i[o]){if(v=e[s],WL(v))return v;(v>a||v===a&&mgr(v))&&(a=v)}return a}HL.exports=qgr});var JL=u((iGr,XL)=>{"use strict";var DL=E(),ygr=Oe();function hgr(r,e,t,i,n,a,s){var o,v,f,l,c;if(r<=0)return NaN;for(v=i,f=s,c=0;c<r&&n[f]!==0;c++)v+=t,f+=a;if(c===r)return NaN;if(o=e[v],DL(o))return o;for(c+=1,c;c<r;c++)if(v+=t,f+=a,!n[f]){if(l=e[v],DL(l))return l;(l>o||l===o&&ygr(l))&&(o=l)}return o}XL.exports=hgr});var ZL=u((nGr,YL)=>{"use strict";var dgr=b(),zL=kL(),wgr=JL();dgr(zL,"ndarray",wgr);YL.exports=zL});var QL=u((aGr,$L)=>{"use strict";var bgr=k().isPrimitive,Egr=Qn(),Ngr=xt(),la=ft(),Agr=L(),Ogr=Bt(),Sgr=/\s+/g,Tgr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Lgr=/(?:\s|^)([^\s]+)(?=\s|$)/g,Igr=/([a-z0-9])([A-Z])/g;function Pgr(r,e){return Egr(Ngr(e))}function Rgr(r){if(!bgr(r))throw new TypeError(Agr("invalid argument. First argument must be a string. Value: `%s`.",r));return r=la(r,Tgr," "),r=la(r,Sgr," "),r=la(r,Igr,"$1 $2"),r=Ogr(r),r=la(r,Lgr,Pgr),r}$L.exports=Rgr});var rI=u((uGr,KL)=>{"use strict";var _gr=QL();KL.exports=_gr});var tI=u((sGr,eI)=>{"use strict";var Fgr=he();function Mgr(r,e,t,i){Fgr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}eI.exports=Mgr});var _=u((oGr,iI)=>{"use strict";var xgr=tI();iI.exports=xgr});var uI=u((vGr,aI)=>{"use strict";var nI=65535;function Bgr(r,e){var t,i,n,a,s,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,s=(r&nI)>>>0,o=(e&nI)>>>0,t=s*o>>>0,i=n*o+s*a<<16>>>0,t+i>>>0}aI.exports=Bgr});var oI=u((fGr,sI)=>{"use strict";var Cgr=uI();sI.exports=Cgr});var zo=u((lGr,vI)=>{"use strict";function jgr(r,e,t,i,n,a,s){var o,v,f,l,c,p,q;for(o=e.data,v=n.data,l=e.getter,f=n.setter,c=i,p=s,q=0;q<r;q++)f(v,p,l(o,c)),c+=t,p+=a;return e}vI.exports=jgr});var cI=u((cGr,lI)=>{"use strict";var fI=lt(),Vgr=zo(),Yo=8;function Ggr(r,e,t,i,n){var a,s,o,v,f,l;if(r<=0)return i;if(o=fI(e),v=fI(i),o.accessors||v.accessors)return t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,Vgr(r,o,t,a,v,n,s),v.data;if(t===1&&n===1){if(f=r%Yo,f>0)for(l=0;l<f;l++)i[l]=e[l];if(r<Yo)return i;for(l=f;l<r;l+=Yo)i[l]=e[l],i[l+1]=e[l+1],i[l+2]=e[l+2],i[l+3]=e[l+3],i[l+4]=e[l+4],i[l+5]=e[l+5],i[l+6]=e[l+6],i[l+7]=e[l+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,l=0;l<r;l++)i[s]=e[a],a+=t,s+=n;return i}lI.exports=Ggr});var mI=u((pGr,gI)=>{"use strict";var pI=lt(),Ugr=zo(),Ui=8;function Wgr(r,e,t,i,n,a,s){var o,v,f,l,c,p;if(r<=0)return n;if(f=pI(e),l=pI(n),f.accessors||l.accessors)return Ugr(r,f,t,i,l,a,s),l.data;if(o=i,v=s,t===1&&a===1){if(c=r%Ui,c>0)for(p=0;p<c;p++)n[v]=e[o],o+=t,v+=a;if(r<Ui)return n;for(p=c;p<r;p+=Ui)n[v]=e[o],n[v+1]=e[o+1],n[v+2]=e[o+2],n[v+3]=e[o+3],n[v+4]=e[o+4],n[v+5]=e[o+5],n[v+6]=e[o+6],n[v+7]=e[o+7],o+=Ui,v+=Ui;return n}for(p=0;p<r;p++)n[v]=e[o],o+=t,v+=a;return n}gI.exports=Wgr});var Re=u((gGr,yI)=>{"use strict";var Hgr=b(),qI=cI(),kgr=mI();Hgr(qI,"ndarray",kgr);yI.exports=qI});var dI=u((mGr,hI)=>{"use strict";function Dgr(){}hI.exports=Dgr});var bI=u((qGr,wI)=>{"use strict";var Xgr=dI();function Jgr(){return Xgr.name==="foo"}wI.exports=Jgr});var NI=u((yGr,EI)=>{"use strict";var zgr=bI();EI.exports=zgr});var OI=u((hGr,AI)=>{"use strict";var Ygr=I(),Zgr=NI(),$gr=N0().REGEXP,Qgr=Zgr();function Kgr(r){if(Ygr(r)===!1)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return Qgr?r.name:$gr.exec(r.toString())[1]}AI.exports=Kgr});var TI=u((dGr,SI)=>{"use strict";var r7r=OI();SI.exports=r7r});var II=u((wGr,LI)=>{"use strict";var e7r=qi(),t7r=wt(),i7r=yi(),n7r=hi(),a7r=bt(),u7r=at(),s7r=ar(),o7r=Vr(),v7r=sr(),f7r=[v7r,o7r,u7r,s7r,n7r,a7r,e7r,t7r,i7r];LI.exports=f7r});var PI=u((bGr,l7r)=>{l7r.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var BI=u((EGr,xI)=>{"use strict";var c7r=we(),p7r=TI(),FI=et(),g7r=Xu(),m7r=sr(),RI=II(),_I=PI(),ca=g7r()?FI(m7r):MI;ca=p7r(ca)==="TypedArray"?ca:MI;function MI(){}function q7r(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof ca)return!0;for(t=0;t<RI.length;t++)if(r instanceof RI[t])return!0;for(;r;){for(e=c7r(r),t=0;t<_I.length;t++)if(_I[t]===e)return!0;r=FI(r)}return!1}xI.exports=q7r});var jI=u((NGr,CI)=>{"use strict";var y7r=BI();CI.exports=y7r});var GI=u((AGr,VI)=>{"use strict";var h7r=Gi(),d7r=ji(),w7r=[d7r,h7r];VI.exports=w7r});var UI=u((OGr,b7r)=>{b7r.exports=["Complex64Array","Complex128Array"]});var DI=u((SGr,kI)=>{"use strict";var E7r=we(),N7r=et(),WI=GI(),HI=UI();function A7r(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<WI.length;t++)if(r instanceof WI[t])return!0;for(;r;){for(e=E7r(r),t=0;t<HI.length;t++)if(HI[t]===e)return!0;r=N7r(r)}return!1}kI.exports=A7r});var JI=u((TGr,XI)=>{"use strict";var O7r=DI();XI.exports=O7r});var YI=u((LGr,zI)=>{"use strict";function S7r(r,e){if(typeof e!="function")throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+e+"`.");return r instanceof e}zI.exports=S7r});var $I=u((IGr,ZI)=>{"use strict";var T7r=YI();ZI.exports=T7r});var KI=u((PGr,QI)=>{"use strict";var L7r=qi(),I7r=wt(),P7r=yi(),R7r=hi(),_7r=bt(),F7r=at(),M7r=ar(),x7r=Vr(),B7r=sr(),C7r=Gi(),j7r=ji(),V7r=[[B7r,"Float64Array"],[x7r,"Float32Array"],[F7r,"Int32Array"],[M7r,"Uint32Array"],[R7r,"Int16Array"],[_7r,"Uint16Array"],[L7r,"Int8Array"],[I7r,"Uint8Array"],[P7r,"Uint8ClampedArray"],[C7r,"Complex64Array"],[j7r,"Complex128Array"]];QI.exports=V7r});var eP=u((RGr,rP)=>{"use strict";var G7r=$I(),U7r=we(),W7r=et(),Jt=KI();function H7r(r){var e,t;for(t=0;t<Jt.length;t++)if(G7r(r,Jt[t][0]))return Jt[t][1];for(;r;){for(e=U7r(r),t=0;t<Jt.length;t++)if(e===Jt[t][1])return Jt[t][1];r=W7r(r)}}rP.exports=H7r});var iP=u((_Gr,tP)=>{"use strict";var k7r=jI(),D7r=JI(),X7r=Vt(),J7r=Gt(),z7r=eP();function Y7r(r){var e,t,i;if(k7r(r))e=r;else if(D7r(r))r.BYTES_PER_ELEMENT===8?e=X7r(r,0):e=J7r(r,0);else throw new TypeError("invalid argument. Must provide a typed array. Value: `"+r+"`.");for(t={type:z7r(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}tP.exports=Y7r});var F=u((FGr,nP)=>{"use strict";var Z7r=iP();nP.exports=Z7r});var Zo=u((MGr,aP)=>{"use strict";var $7r=dt(),Q7r=$(),K7r=$7r-1;function r9r(){var r=Q7r(1+K7r*Math.random());return r>>>0}aP.exports=r9r});var nv=u((xGr,qP)=>{"use strict";var kr=b(),_e=R(),uP=_(),$o=O(),e9r=T(),t9r=Lr(),sP=Cr(),i9r=tr().isPrimitive,oP=Gr().isPrimitive,pP=Zn(),gP=dt(),pr=ar(),n9r=to(),iv=oI(),zt=Re(),a9r=F(),vP=Zo(),Q=624,Qo=397,fP=gP>>>0,u9r=19650218>>>0,Ko=2147483648>>>0,rv=2147483647>>>0,s9r=1812433253>>>0,o9r=1664525>>>0,v9r=1566083941>>>0,f9r=2636928640>>>0,l9r=4022730752>>>0,c9r=2567483615>>>0,ev=[0>>>0,c9r>>>0],mP=1/(pP+1),p9r=67108864>>>0,g9r=2147483648>>>0,tv=1>>>0,m9r=pP*mP,pa=1,ga=3,Fe=2,Me=Q+3,gr=Q+5,Wi=Q+6;function lP(r,e){var t;return e?t="option":t="argument",r.length<Wi+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==pa?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+pa+". Actual: "+r[0]+"."):r[1]!==ga?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+ga+". Actual: "+r[1]+"."):r[Fe]!==Q?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+Q+". Actual: "+r[Fe]+"."):r[Me]!==1?new RangeError("invalid "+t+". `state` array has an incompatible section length. Expected: "+1 .toString()+". Actual: "+r[Me]+"."):r[gr]!==r.length-Wi?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-Wi)+". Actual: "+r[gr]+"."):null}function cP(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=iv(t,s9r)+i>>>0;return r}function q9r(r,e,t,i){var n,a,s,o;for(a=1,s=0,o=n9r(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=iv(n,o9r)>>>0,r[a]=(r[a]>>>0^n)+t[s]+s>>>0,a+=1,s+=1,a>=e&&(r[0]=r[e-1],a=1),s>=i&&(s=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=iv(n,v9r)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=g9r,r}function y9r(r){var e,t,i,n;for(n=Q-Qo,t=0;t<n;t++)e=r[t]&Ko|r[t+1]&rv,r[t]=r[t+Qo]^e>>>1^ev[e&tv];for(i=Q-1;t<i;t++)e=r[t]&Ko|r[t+1]&rv,r[t]=r[t-n]^e>>>1^ev[e&tv];return e=r[i]&Ko|r[0]&rv,r[i]=r[Qo-1]^e>>>1^ev[e&tv],r}function h9r(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!e9r(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if($o(r,"copy")&&(i.copy=r.copy,!i9r(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if($o(r,"state")){if(t=r.state,i.state=!0,!sP(t))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+t+"`.");if(s=lP(t,!0),s)throw s;i.copy===!1?e=t:(e=new pr(t.length),zt(t.length,t,1,e,1)),t=new pr(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,Q),n=new pr(e.buffer,e.byteOffset+(gr+1)*e.BYTES_PER_ELEMENT,t[gr])}if(n===void 0)if($o(r,"seed"))if(n=r.seed,i.seed=!0,oP(n)){if(n>fP)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");n>>>=0}else{if(t9r(n)===!1||n.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");if(n.length===1){if(n=n[0],!oP(n))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");if(n>fP)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");n>>>=0}else a=n.length,e=new pr(Wi+a),e[0]=pa,e[1]=ga,e[Fe]=Q,e[Me]=1,e[Me+1]=Q,e[gr]=a,zt.ndarray(a,n,1,0,e,1,gr+1),t=new pr(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,Q),n=new pr(e.buffer,e.byteOffset+(gr+1)*e.BYTES_PER_ELEMENT,a),t=cP(t,Q,u9r),t=q9r(t,Q,n,a)}else n=vP()>>>0}else n=vP()>>>0;return t===void 0&&(e=new pr(Wi+1),e[0]=pa,e[1]=ga,e[Fe]=Q,e[Me]=1,e[Me+1]=Q,e[gr]=1,e[gr+1]=n,t=new pr(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,Q),n=new pr(e.buffer,e.byteOffset+(gr+1)*e.BYTES_PER_ELEMENT,1),t=cP(t,Q,n)),kr(y,"NAME","mt19937"),_e(y,"seed",o),_e(y,"seedLength",v),uP(y,"state",c,p),_e(y,"stateLength",f),_e(y,"byteLength",l),kr(y,"toJSON",q),kr(y,"MIN",1),kr(y,"MAX",gP),kr(y,"normalized",m),kr(m,"NAME",y.NAME),_e(m,"seed",o),_e(m,"seedLength",v),uP(m,"state",c,p),_e(m,"stateLength",f),_e(m,"byteLength",l),kr(m,"toJSON",q),kr(m,"MIN",0),kr(m,"MAX",m9r),y;function o(){var g=e[gr];return zt(g,n,1,new pr(g),1)}function v(){return e[gr]}function f(){return e.length}function l(){return e.byteLength}function c(){var g=e.length;return zt(g,e,1,new pr(g),1)}function p(g){var h;if(!sP(g))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+g+"`.");if(h=lP(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?zt(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new pr(g.length)),zt(g.length,g,1,e,1)),t=new pr(e.buffer,e.byteOffset+(Fe+1)*e.BYTES_PER_ELEMENT,Q),n=new pr(e.buffer,e.byteOffset+(gr+1)*e.BYTES_PER_ELEMENT,e[gr])}function q(){var g={};return g.type="PRNG",g.name=y.NAME,g.state=a9r(e),g.params=[],g}function y(){var g,h;return h=e[Me+1],h>=Q&&(t=y9r(t),h=0),g=t[h],e[Me+1]=h+1,g^=g>>>11,g^=g<<7&f9r,g^=g<<15&l9r,g^=g>>>18,g>>>0}function m(){var g=y()>>>5,h=y()>>>6;return(g*p9r+h)*mP}}qP.exports=h9r});var hP=u((BGr,yP)=>{"use strict";var d9r=nv(),w9r=Zo(),b9r=d9r({seed:w9r()});yP.exports=b9r});var W=u((CGr,wP)=>{"use strict";var E9r=b(),dP=hP(),N9r=nv();E9r(dP,"factory",N9r);wP.exports=dP});var AP=u((jGr,NP)=>{"use strict";var bP=B().isPrimitive,EP=K();function A9r(r,e){return!bP(r)||EP(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!bP(e)||EP(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):r>=e?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+r+","+e+"]`."):null}NP.exports=A9r});var SP=u((VGr,OP)=>{"use strict";var O9r=Z(),S9r=Oi(),T9r=rn();function L9r(r,e,t){return e+O9r(S9r(T9r*r()),2)*(t-e)}OP.exports=L9r});var av=u((GGr,MP)=>{"use strict";var Dr=b(),ma=R(),TP=_(),LP=T(),IP=I(),PP=O(),RP=P(),I9r=M(),qa=W().factory,_P=E(),P9r=F(),R9r=AP(),FP=SP();function _9r(){var r,e,t,i,n,a;if(arguments.length===0)e=qa();else if(arguments.length===1){if(r=arguments[0],!LP(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(PP(r,"prng")){if(!IP(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=qa(r)}else{if(n=arguments[0],a=arguments[1],i=R9r(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!LP(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(PP(r,"prng")){if(!IP(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=qa(r)}else e=qa()}return n===void 0?t=y:t=q,Dr(t,"NAME","arcsine"),r&&r.prng?(Dr(t,"seed",null),Dr(t,"seedLength",null),TP(t,"state",RP(null),I9r),Dr(t,"stateLength",null),Dr(t,"byteLength",null),Dr(t,"toJSON",RP(null)),Dr(t,"PRNG",e)):(ma(t,"seed",s),ma(t,"seedLength",o),TP(t,"state",l,c),ma(t,"stateLength",v),ma(t,"byteLength",f),Dr(t,"toJSON",p),Dr(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=P9r(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return FP(e,n,a)}function y(m,g){return _P(m)||_P(g)||m>=g?NaN:FP(e,m,g)}}MP.exports=_9r});var BP=u((UGr,xP)=>{"use strict";var F9r=av(),M9r=F9r();xP.exports=M9r});var VP=u((WGr,jP)=>{"use strict";var x9r=b(),CP=BP(),B9r=av();x9r(CP,"factory",B9r);jP.exports=CP});var uv=u((HGr,DP)=>{"use strict";var Xr=b(),ya=R(),GP=_(),UP=T(),C9r=bi().isPrimitive,WP=I(),HP=O(),kP=P(),j9r=M(),ha=W().factory,V9r=E(),G9r=F();function U9r(){var r,e,t,i;if(arguments.length===0)e=ha();else if(arguments.length===1&&UP(arguments[0]))if(r=arguments[0],HP(r,"prng")){if(!WP(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=ha(r);else{if(i=arguments[0],!C9r(i))throw new TypeError("invalid argument. First argument must be a probability. Value: `"+i+"`.");if(arguments.length>1){if(r=arguments[1],!UP(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(HP(r,"prng")){if(!WP(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=ha(r)}else e=ha()}return i===void 0?t=p:t=c,Xr(t,"NAME","bernoulli"),r&&r.prng?(Xr(t,"seed",null),Xr(t,"seedLength",null),GP(t,"state",kP(null),j9r),Xr(t,"stateLength",null),Xr(t,"byteLength",null),Xr(t,"toJSON",kP(null)),Xr(t,"PRNG",e)):(ya(t,"seed",n),ya(t,"seedLength",a),GP(t,"state",v,f),ya(t,"stateLength",s),ya(t,"byteLength",o),Xr(t,"toJSON",l),Xr(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(q){e.state=q}function l(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=G9r(e.state),i===void 0?q.params=[]:q.params=[i],q}function c(){return e()<=i?1:0}function p(q){return V9r(q)||q<0||q>1?NaN:e()<=q?1:0}}DP.exports=U9r});var JP=u((kGr,XP)=>{"use strict";var W9r=uv(),H9r=W9r();XP.exports=H9r});var ZP=u((DGr,YP)=>{"use strict";var k9r=b(),zP=JP(),D9r=uv();k9r(zP,"factory",D9r);YP.exports=zP});var rR=u((XGr,KP)=>{"use strict";var X9r=V(),$P=nr(),J9r=x(),QP=.00991256303526217;function z9r(r,e){var t,i,n;for(i=$P(-.5*e*e),t=[],t.push(QP/i),t.push(e),n=2;n<r;n++)t[n]=X9r(-2*J9r(QP/t[n-1]+i)),i=$P(-.5*t[n]*t[n]);return t.push(0),t}KP.exports=z9r});var tR=u((JGr,eR)=>{"use strict";function Y9r(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}eR.exports=Y9r});var aR=u((zGr,nR)=>{"use strict";var iR=x();function Z9r(r,e,t){var i,n;do i=iR(r())/e,n=iR(r());while(-2*n<i*i);return t?i-e:e-i}nR.exports=Z9r});var vR=u((YGr,oR)=>{"use strict";var $9r=z(),uR=nr(),Q9r=rR(),K9r=tR(),rmr=aR(),emr=128,sR=3.442619855899,yt=Q9r(emr,sR),tmr=K9r(yt),imr=127;function nmr(r,e){return t;function t(){for(var i,n,a,s,o,v,f;;){if(o=2*r()-1,v=e()&imr,$9r(o)<tmr[v])return o*yt[v];if(v===0)return rmr(r,sR,o<0);if(s=o*yt[v],a=s*s,f=v+1,i=uR(-.5*(yt[v]*yt[v]-a)),n=uR(-.5*(yt[f]*yt[f]-a)),n+r()*(i-n)<1)return s}}}oR.exports=nmr});var ov=u((ZGr,cR)=>{"use strict";var xe=b(),da=R(),fR=_(),amr=I(),umr=T(),smr=tr().isPrimitive,wa=O(),omr=Cr(),sv=W().factory,lR=P(),vmr=M(),fmr=$(),lmr=dt(),cmr=F(),pmr=vR();function gmr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!umr(r))throw new TypeError("invalid argument. Must provide an object. Value: `"+r+"`.");if(wa(r,"copy")&&(n.copy=r.copy,!smr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(wa(r,"prng")){if(!amr(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else if(wa(r,"state")){if(n.state=r.state,!omr(r.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+r.state+"`.")}else if(wa(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+r.seed+"`.")}return n.state===void 0?e===void 0?(t=sv(n),e=t.normalized):(t=sv({seed:fmr(1+lmr*e()),copy:n.copy}),n.seed=null):(t=sv(n),e=t.normalized),i=pmr(e,t),xe(i,"NAME","improved-ziggurat"),n.seed===null?(xe(i,"seed",null),xe(i,"seedLength",null)):(da(i,"seed",a),da(i,"seedLength",s)),r&&r.prng?(fR(i,"state",lR(null),vmr),xe(i,"stateLength",null),xe(i,"byteLength",null),xe(i,"toJSON",lR(null))):(fR(i,"state",f,l),da(i,"stateLength",o),da(i,"byteLength",v),xe(i,"toJSON",c)),xe(i,"PRNG",e),i;function a(){return t.seed}function s(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function l(p){t.state=p}function c(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=cmr(t.state),p.params=[],p}}cR.exports=gmr});var gR=u(($Gr,pR)=>{"use strict";var mmr=ov(),qmr=mmr();pR.exports=qmr});var Be=u((QGr,qR)=>{"use strict";var ymr=b(),mR=gR(),hmr=ov();ymr(mR,"factory",hmr);qR.exports=mR});var dR=u((KGr,hR)=>{"use strict";var yR=G().isPrimitive;function dmr(r,e){return yR(r)?yR(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}hR.exports=dmr});var AR=u((rUr,NR)=>{"use strict";var wR=x(),bR=V(),wmr=Z(),ER=1/3;function bmr(r,e,t){var i,n,a,s,o,v,f,l,c,p;for(t<1?(v=t+1-ER,o=1/bR(9*v),l=wmr(r(),1/t)):(v=t-ER,o=1/bR(9*v),l=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,n=f*f,a=1-.331*n*n,s=.5*n+v*(1-p+wR(p)),c=r(),(c<a||wR(c)<s)&&(i=!1)}return v*p*l}NR.exports=bmr});var TR=u((eUr,SR)=>{"use strict";var vv=Z(),OR=x();function Emr(r,e,t){var i,n,a,s,o,v,f,l;for(a=t-1,o=vv(a+a,.5),i=!0;i===!0;)s=e(),f=.5*(1+s/o),f>=0&&f<=1&&(v=r(),n=vv(s,4),l=8*t-12,l=1-n/l,v<=l?i=!1:(l+=.5*vv(n/(8*t-8),2),v<l&&(l=a*OR(4*f*(1-f)),l+=s*s/2,l>=OR(v)&&(i=!1))));return f}SR.exports=Emr});var IR=u((tUr,LR)=>{"use strict";var Nmr=Z(),ba=x();function Amr(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y;for(o=t-1,v=i-1,f=o+v,l=f*ba(f),s=o/f,n=.5/Nmr(f,.5),a=!0;a===!0;)c=e(),q=s+c*n,q>=0&&q<=1&&(p=r(),y=o*ba(q/o),y+=v*ba((1-q)/v),y+=l+.5*c*c,y>=ba(p)&&(a=!1));return q}LR.exports=Amr});var _R=u((iUr,RR)=>{"use strict";var fv=nr(),PR=Z(),lv=x();function Omr(r,e,t){for(var i,n,a,s,o,v,f;;)if(s=r(),o=r(),v=PR(s,1/e),f=PR(o,1/t),a=v+f,a<=1)return a>0?v/a:(i=lv(s)/e,n=lv(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),fv(i-lv(fv(i)+fv(n))))}RR.exports=Omr});var xR=u((nUr,MR)=>{"use strict";var FR=AR(),Smr=TR(),Tmr=IR(),Lmr=_R();function Imr(r,e,t,i){var n,a;return t===i&&t>1.5?Smr(r,e,t):t>1&&i>1?Tmr(r,e,t,i):t<1&&i<1?Lmr(r,t,i):(n=FR(r,e,t),a=FR(r,e,i),n/(n+a))}MR.exports=Imr});var mv=u((aUr,DR)=>{"use strict";var Jr=b(),Ea=R(),BR=_(),CR=T(),jR=tr().isPrimitive,VR=I(),Yt=O(),GR=P(),Pmr=M(),UR=Be().factory,Na=W().factory,WR=E(),cv=Re(),pv=ar(),gv=Cr(),HR=It(),Rmr=F(),_mr=dR(),kR=xR();function Fmr(){var r,e,t,i,n,a,s,o,v;if(o=!0,arguments.length===0)n={copy:!1},a=Na(n);else if(arguments.length===1){if(n=arguments[0],!CR(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(Yt(n,"copy")&&!jR(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(Yt(n,"prng")){if(!VR(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(Yt(n,"state")&&!gv(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=HR(n,1),n.copy===!1?o=!1:n.state&&(n.state=cv(n.state.length,n.state,1,new pv(n.state.length),1)),n.copy=!1,a=Na(n)}}else{if(t=arguments[0],i=arguments[1],v=_mr(t,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!CR(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(Yt(n,"copy")&&!jR(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(Yt(n,"prng")){if(!VR(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(Yt(n,"state")&&!gv(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=HR(n,1),n.copy===!1?o=!1:n.state&&(n.state=cv(n.state.length,n.state,1,new pv(n.state.length),1)),n.copy=!1,a=Na(n)}}else n={copy:!1},a=Na(n)}return n&&n.prng?e=UR({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=UR({state:r,copy:!1})),t===void 0?s=h:s=g,Jr(s,"NAME","beta"),n&&n.prng?(Jr(s,"seed",null),Jr(s,"seedLength",null),BR(s,"state",GR(null),Pmr),Jr(s,"stateLength",null),Jr(s,"byteLength",null),Jr(s,"toJSON",GR(null)),Jr(s,"PRNG",a)):(Ea(s,"seed",f),Ea(s,"seedLength",l),BR(s,"state",q,y),Ea(s,"stateLength",c),Ea(s,"byteLength",p),Jr(s,"toJSON",m),Jr(s,"PRNG",a),a=a.normalized),s;function f(){return a.seed}function l(){return a.seedLength}function c(){return a.stateLength}function p(){return a.byteLength}function q(){return a.state}function y(N){if(!gv(N))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+N+"`.");o&&(N=cv(N.length,N,1,new pv(N.length),1)),a.state=N}function m(){var N={};return N.type="PRNG",N.name=s.NAME,N.state=Rmr(a.state),t===void 0?N.params=[]:N.params=[t,i],N}function g(){return kR(a,e,t,i)}function h(N,A){return WR(N)||WR(A)||N<=0||A<=0?NaN:kR(a,e,N,A)}}DR.exports=Fmr});var JR=u((uUr,XR)=>{"use strict";var Mmr=mv(),xmr=Mmr();XR.exports=xmr});var ZR=u((sUr,YR)=>{"use strict";var Bmr=b(),zR=JR(),Cmr=mv();Bmr(zR,"factory",Cmr);YR.exports=zR});var KR=u((oUr,QR)=>{"use strict";var $R=G().isPrimitive;function jmr(r,e){return $R(r)?$R(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}QR.exports=jmr});var t_=u((vUr,e_)=>{"use strict";var r_=x();function Vmr(r,e,t,i,n){var a,s,o,v,f,l,c;for(a=!0;a;){do f=e(),c=1+n*f;while(c<=0);c*=c*c,s=f*f,o=1-.331*s*s,v=.5*s+i*(1-c+r_(c)),l=r(),(l<o||r_(l)<v)&&(a=!1)}return 1/t*i*c}e_.exports=Vmr});var wv=u((fUr,c_)=>{"use strict";var zr=b(),Aa=R(),i_=_(),n_=T(),qv=Cr(),a_=tr().isPrimitive,u_=I(),Zt=O(),s_=P(),Gmr=M(),o_=Be().factory,Oa=W().factory,v_=E(),yv=V(),f_=Z(),hv=Re(),dv=ar(),Umr=F(),l_=It(),Wmr=KR(),Sa=t_(),Ta=1/3;function Hmr(){var r,e,t,i,n,a,s,o,v,f,l;if(o=!0,arguments.length===0)n={copy:!1},a=Oa(n);else if(arguments.length===1){if(n=arguments[0],!n_(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(Zt(n,"copy")&&!a_(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(Zt(n,"prng")){if(!u_(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(Zt(n,"state")&&!qv(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=l_(n,1),n.copy===!1?o=!1:n.state&&(n.state=hv(n.state.length,n.state,1,new dv(n.state.length),1)),n.copy=!1,a=Oa(n)}}else{if(e=arguments[0],i=arguments[1],v=Wmr(e,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!n_(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(Zt(n,"copy")&&!a_(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(Zt(n,"prng")){if(!u_(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(Zt(n,"state")&&!qv(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=l_(n,1),n.copy===!1?o=!1:n.state&&(n.state=hv(n.state.length,n.state,1,new dv(n.state.length),1)),n.copy=!1,a=Oa(n)}}else n={copy:!1},a=Oa(n)}return n&&n.prng?t=o_({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=o_({state:r,copy:!1})),e===void 0?s=C:(e>=1?(s=N,l=e-Ta):(s=A,l=e+1-Ta),f=1/yv(9*l)),zr(s,"NAME","gamma"),n&&n.prng?(zr(s,"seed",null),zr(s,"seedLength",null),i_(s,"state",s_(null),Gmr),zr(s,"stateLength",null),zr(s,"byteLength",null),zr(s,"toJSON",s_(null)),zr(s,"PRNG",a)):(Aa(s,"seed",c),Aa(s,"seedLength",p),i_(s,"state",m,g),Aa(s,"stateLength",q),Aa(s,"byteLength",y),zr(s,"toJSON",h),zr(s,"PRNG",a),a=a.normalized),s;function c(){return a.seed}function p(){return a.seedLength}function q(){return a.stateLength}function y(){return a.byteLength}function m(){return a.state}function g(S){if(!qv(S))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+S+"`.");o&&(S=hv(S.length,S,1,new dv(S.length),1)),a.state=S}function h(){var S={};return S.type="PRNG",S.name=s.NAME,S.state=Umr(a.state),e===void 0?S.params=[]:S.params=[e,i],S}function N(){return Sa(a,t,i,l,f)}function A(){return Sa(a,t,i,l,f)*f_(a(),1/e)}function C(S,H){var er,U;return v_(S)||v_(H)||S<=0||H<=0?NaN:S<1?(U=S+1-Ta,er=1/yv(9*U),Sa(a,t,H,U,er)*f_(a(),1/S)):(U=S-Ta,er=1/yv(9*U),Sa(a,t,H,U,er))}}c_.exports=Hmr});var g_=u((lUr,p_)=>{"use strict";var kmr=wv(),Dmr=kmr();p_.exports=Dmr});var $t=u((cUr,q_)=>{"use strict";var Xmr=b(),m_=g_(),Jmr=wv();Xmr(m_,"factory",Jmr);q_.exports=m_});var d_=u((pUr,h_)=>{"use strict";var y_=G().isPrimitive;function zmr(r,e){return y_(r)?y_(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}h_.exports=zmr});var b_=u((gUr,w_)=>{"use strict";function Ymr(r,e,t){return r(e,1)/r(t,1)}w_.exports=Ymr});var bv=u((mUr,T_)=>{"use strict";var Ce=b(),La=R(),E_=_(),N_=T(),A_=P(),Zmr=M(),Ia=$t().factory,O_=E(),$mr=F(),Qmr=d_(),S_=b_();function Kmr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=Ia();else if(arguments.length===1){if(i=arguments[0],!N_(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");r=Ia(i)}else{if(e=arguments[0],t=arguments[1],s=Qmr(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!N_(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");r=Ia(i)}else r=Ia()}return e===void 0?a=m:a=y,n=r.PRNG,Ce(a,"NAME","betaprime"),i&&i.prng?(Ce(a,"seed",null),Ce(a,"seedLength",null),E_(a,"state",A_(null),Zmr),Ce(a,"stateLength",null),Ce(a,"byteLength",null),Ce(a,"toJSON",A_(null))):(La(a,"seed",o),La(a,"seedLength",v),E_(a,"state",c,p),La(a,"stateLength",f),La(a,"byteLength",l),Ce(a,"toJSON",q)),Ce(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function l(){return n.byteLength}function c(){return n.state}function p(g){n.state=g}function q(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=$mr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function y(){return S_(r,e,t)}function m(g,h){return O_(g)||O_(h)||g<=0||h<=0?NaN:S_(r,g,h)}}T_.exports=Kmr});var I_=u((qUr,L_)=>{"use strict";var rqr=bv(),eqr=rqr();L_.exports=eqr});var __=u((yUr,R_)=>{"use strict";var tqr=b(),P_=I_(),iqr=bv();tqr(P_,"factory",iqr);R_.exports=P_});var M_=u((hUr,F_)=>{"use strict";var nqr=$();function aqr(r){return nqr(r)===r&&r>0}F_.exports=aqr});var Ev=u((dUr,x_)=>{"use strict";var uqr=M_();x_.exports=uqr});var C_=u((wUr,B_)=>{"use strict";function sqr(r){return r>=0&&r<=1}B_.exports=sqr});var V_=u((bUr,j_)=>{"use strict";var oqr=C_();j_.exports=oqr});var U_=u((EUr,G_)=>{"use strict";var vqr=Gr().isPrimitive,fqr=bi().isPrimitive;function lqr(r,e){return vqr(r)?fqr(e)?null:new TypeError("invalid argument. Second argument must be a probability. Value: `"+e+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+e+"`.")}G_.exports=lqr});var H_=u((NUr,W_)=>{"use strict";function cqr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}W_.exports=cqr});var D_=u((AUr,k_)=>{"use strict";var pqr=E();function gqr(r){return r===0||pqr(r)?r:r<0?-1:1}k_.exports=gqr});var Pa=u((OUr,X_)=>{"use strict";var mqr=D_();X_.exports=mqr});var z_=u((SUr,J_)=>{"use strict";var qqr=Z(),yqr=1/12,hqr=1/360,dqr=1/1260;function wqr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=qqr(r,2),(yqr-(hqr-dqr/e)/e)/r}}J_.exports=wqr});var Z_=u((TUr,Y_)=>{"use strict";var Nv=$(),bqr=Pa(),Eqr=V(),Av=z(),Ra=x(),_a=z_(),Nqr=1/6;function Aqr(r,e,t){var i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,N,A,C,S,H,er,U,Gu,_r,ur,zi;for(H=Nv((e+1)*t),f=e-H+1,er=1-t,U=t/er,l=(e+1)*U,s=e*t*er,a=Eqr(s),g=1.15+2.53*a,m=-.0873+.0248*g+.01*t,h=e*t+.5,i=(2.83+5.1/g)*a,y=.92-4.2/g,n=.86*y,A=(H+.5)*Ra((H+1)/(U*f)),A+=_a(H)+_a(e-H);;){if(ur=r(),ur<=n)return _r=ur/y-.43,U=_r*(2*m/(.5-Av(_r))+g)+h,Nv(U);if(ur>=y?_r=r()-.5:(_r=ur/y-.93,_r=bqr(_r)*.5-_r,ur=y*r()),c=.5-Av(_r),S=Nv(_r*(2*m/c+g)+h),!(S<0||S>e))if(ur=ur*i/(m/(c*c)+g),p=Av(S-H),p>15){if(ur=Ra(ur),o=p/s,v=(p/3+.625)*p,v+=Nqr,v/=s,o*=v+.5,Gu=-(p*p)/(2*s),ur<Gu-o||ur<=Gu+o&&(q=e-S+1,zi=A+(e+1)*Ra(f/q),zi+=(S+.5)*Ra(q*U/(S+1)),zi+=-(_a(S)+_a(e-S)),ur<=zi))return S}else{if(N=1,H<S)for(C=H;C<=S;C++)N*=l/C-U;else if(H>S)for(C=S;C<=H;C++)ur*=l/C-U;if(ur<=N)return S}}}Y_.exports=Aqr});var K_=u((LUr,Q_)=>{"use strict";var Oqr=H_(),Sqr=Z_();function $_(r,e,t){return t>.5?e-$_(r,e,1-t):e*t<10?Oqr(r,e,t):Sqr(r,e,t)}Q_.exports=$_});var Ov=u((IUr,sF)=>{"use strict";var Yr=b(),Fa=R(),rF=_(),eF=T(),tF=I(),iF=O(),nF=P(),Tqr=M(),aF=E(),Lqr=Ev(),Iqr=V_(),Ma=W().factory,Pqr=F(),Rqr=U_(),uF=K_();function _qr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ma();else if(arguments.length===1){if(r=arguments[0],!eF(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(iF(r,"prng")){if(!tF(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ma(r)}else{if(n=arguments[0],a=arguments[1],i=Rqr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!eF(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(iF(r,"prng")){if(!tF(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ma(r)}else e=Ma()}return n===void 0?t=y:t=q,Yr(t,"NAME","binomial"),r&&r.prng?(Yr(t,"seed",null),Yr(t,"seedLength",null),rF(t,"state",nF(null),Tqr),Yr(t,"stateLength",null),Yr(t,"byteLength",null),Yr(t,"toJSON",nF(null)),Yr(t,"PRNG",e)):(Fa(t,"seed",s),Fa(t,"seedLength",o),rF(t,"state",l,c),Fa(t,"stateLength",v),Fa(t,"byteLength",f),Yr(t,"toJSON",p),Yr(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Pqr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return uF(e,n,a)}function y(m,g){return aF(m)||aF(g)||!Lqr(m)||!Iqr(g)?NaN:uF(e,m,g)}}sF.exports=_qr});var vF=u((PUr,oF)=>{"use strict";var Fqr=Ov(),Mqr=Fqr();oF.exports=Mqr});var cF=u((RUr,lF)=>{"use strict";var xqr=b(),fF=vF(),Bqr=Ov();xqr(fF,"factory",Bqr);lF.exports=fF});var gF=u((_Ur,pF)=>{"use strict";var Cqr=V(),jqr=x(),Vqr=Oi(),Gqr=Ai(),Uqr=Ae();function Wqr(r){var e,t;return e=!0,i;function i(){var n,a,s,o;if(e){do n=r(),a=r();while(n===0);return s=Cqr(-2*jqr(n)),o=Uqr*a,t=s*Gqr(o),e=!1,s*Vqr(o)}return e=!0,t}}pF.exports=Wqr});var qF=u((FUr,mF)=>{"use strict";var Hqr=V(),kqr=x(),Dqr=Ai(),Xqr=xr(),Jqr=Dqr(Xqr);function zqr(r){var e=Hqr(-2*kqr(r));return e*Jqr}mF.exports=zqr});var hF=u((MUr,yF)=>{"use strict";var Yqr=V(),Zqr=x(),$qr=Ai(),Qqr=Ae();function Kqr(r){var e=Yqr(-2*Zqr(r)),t=Qqr*r;return e*$qr(t)}yF.exports=Kqr});var Sv=u((xUr,EF)=>{"use strict";var Sr=b(),xa=R(),dF=_(),ryr=T(),eyr=I(),tyr=tr().isPrimitive,Hi=O(),iyr=Cr(),wF=W().factory,bF=P(),nyr=M(),ayr=F(),uyr=gF(),syr=qF(),oyr=hF();function vyr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!ryr(r))throw new TypeError("invalid argument. Must provide an object. Value: `"+r+"`.");if(Hi(r,"copy")&&(n.copy=r.copy,!tyr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(Hi(r,"prng")){if(!eyr(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else if(Hi(r,"state")){if(n.state=r.state,!iyr(r.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+r.state+"`.")}else if(Hi(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+r.seed+"`.")}return n.state===void 0?e===void 0?(i=wF(n),e=i.normalized):n.seed=null:(i=wF(n),e=i.normalized),t=uyr(e),Sr(t,"NAME","box-muller"),n.seed===null?(Sr(t,"seed",null),Sr(t,"seedLength",null)):(xa(t,"seed",a),xa(t,"seedLength",s)),r&&r.prng?(dF(t,"state",bF(null),nyr),Sr(t,"stateLength",null),Sr(t,"byteLength",null),Sr(t,"toJSON",bF(null))):(dF(t,"state",f,l),xa(t,"stateLength",o),xa(t,"byteLength",v),Sr(t,"toJSON",c)),Sr(t,"PRNG",e),Hi(e,"MIN")?(Sr(t,"MIN",syr(e.MIN)),Sr(t,"MAX",oyr(e.MIN))):(Sr(t,"MIN",null),Sr(t,"MAX",null)),t;function a(){return i.seed}function s(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function l(p){i.state=p}function c(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=ayr(i.state),p.params=[],p}}EF.exports=vyr});var AF=u((BUr,NF)=>{"use strict";var fyr=Sv(),lyr=fyr();NF.exports=lyr});var TF=u((CUr,SF)=>{"use strict";var cyr=b(),OF=AF(),pyr=Sv();cyr(OF,"factory",pyr);SF.exports=OF});var IF=u((jUr,LF)=>{"use strict";var gyr=B().isPrimitive,myr=G().isPrimitive,qyr=K();function yyr(r,e){return!gyr(r)||qyr(r)?new TypeError("invalid argument. `x0` must be a number primitive and not `NaN`. Value: `"+r+"`."):myr(e)?null:new TypeError("invalid argument. `gamma` must be a positive number. Value: `"+e+"`.")}LF.exports=yyr});var RF=u((VUr,PF)=>{"use strict";var hyr=Fo(),dyr=xr();function wyr(r,e,t){return e+t*hyr(dyr*(r()-.5))}PF.exports=wyr});var Tv=u((GUr,VF)=>{"use strict";var je=b(),Ba=R(),_F=_(),FF=T(),MF=I(),xF=O(),BF=P(),byr=M(),CF=E(),Qt=Be().factory,Eyr=F(),Nyr=IF(),jF=RF();function Ayr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=Qt();else if(arguments.length===1){if(t=arguments[0],!FF(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(xF(t,"prng")){if(!MF(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=Qt({prng:t.prng})}else e=Qt(t)}else{if(s=arguments[0],r=arguments[1],a=Nyr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!FF(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(xF(t,"prng")){if(!MF(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=Qt({prng:t.prng})}else e=Qt(t)}else e=Qt()}return s===void 0?n=m:n=y,i=e.PRNG,je(n,"NAME","cauchy"),t&&t.prng?(je(n,"seed",null),je(n,"seedLength",null),_F(n,"state",BF(null),byr),je(n,"stateLength",null),je(n,"byteLength",null),je(n,"toJSON",BF(null))):(Ba(n,"seed",o),Ba(n,"seedLength",v),_F(n,"state",c,p),Ba(n,"stateLength",f),Ba(n,"byteLength",l),je(n,"toJSON",q)),je(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=Eyr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return jF(e,s,r)}function m(g,h){return CF(g)||CF(h)||h<=0?NaN:jF(e,g,h)}}VF.exports=Ayr});var UF=u((UUr,GF)=>{"use strict";var Oyr=Tv(),Syr=Oyr();GF.exports=Syr});var kF=u((WUr,HF)=>{"use strict";var Tyr=b(),WF=UF(),Lyr=Tv();Tyr(WF,"factory",Lyr);HF.exports=WF});var Lv=u((HUr,ZF)=>{"use strict";var Ve=b(),Ca=R(),DF=_(),Iyr=G().isPrimitive,XF=T(),JF=I(),zF=O(),YF=P(),Pyr=M(),Ryr=E(),Kt=$t().factory,_yr=F();function Fyr(){var r,e,t,i,n;if(arguments.length===0)r=Kt();else if(arguments.length===1&&XF(arguments[0]))if(t=arguments[0],zF(t,"prng")){if(!JF(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=Kt({prng:t.prng})}else r=Kt(t);else{if(n=arguments[0],!Iyr(n))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+n+"`.");if(arguments.length>1){if(t=arguments[1],!XF(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(zF(t,"prng")){if(!JF(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=Kt(n/2,.5,{prng:t.prng})}else r=Kt(n/2,.5,t)}else r=Kt(n/2,.5)}return n===void 0?i=q:i=p,e=r.PRNG,Ve(i,"NAME","chisquare"),t&&t.prng?(Ve(i,"seed",null),Ve(i,"seedLength",null),DF(i,"state",YF(null),Pyr),Ve(i,"stateLength",null),Ve(i,"byteLength",null),Ve(i,"toJSON",YF(null))):(Ca(i,"seed",a),Ca(i,"seedLength",s),DF(i,"state",f,l),Ca(i,"stateLength",o),Ca(i,"byteLength",v),Ve(i,"toJSON",c)),Ve(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function l(y){e.state=y}function c(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=_yr(e.state),n===void 0?y.params=[]:y.params=[n],y}function p(){return r()}function q(y){return Ryr(y)||y<=0?NaN:r(y/2,.5)}}ZF.exports=Fyr});var QF=u((kUr,$F)=>{"use strict";var Myr=Lv(),xyr=Myr();$F.exports=xyr});var ki=u((DUr,rM)=>{"use strict";var Byr=b(),KF=QF(),Cyr=Lv();Byr(KF,"factory",Cyr);rM.exports=KF});var Iv=u((XUr,sM)=>{"use strict";var Ge=b(),ja=R(),eM=_(),jyr=G().isPrimitive,tM=T(),iM=I(),nM=O(),aM=P(),Vyr=M(),Gyr=E(),ri=ki().factory,Uyr=F(),uM=V();function Wyr(){var r,e,t,i,n;if(arguments.length===0)r=ri();else if(arguments.length===1&&tM(arguments[0]))if(t=arguments[0],nM(t,"prng")){if(!iM(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=ri({prng:t.prng})}else r=ri(t);else{if(n=arguments[0],!jyr(n))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+n+"`.");if(arguments.length>1){if(t=arguments[1],!tM(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(nM(t,"prng")){if(!iM(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=ri(n,{prng:t.prng})}else r=ri(n,t)}else r=ri(n)}return n===void 0?i=q:i=p,e=r.PRNG,Ge(i,"NAME","chi"),t&&t.prng?(Ge(i,"seed",null),Ge(i,"seedLength",null),eM(i,"state",aM(null),Vyr),Ge(i,"stateLength",null),Ge(i,"byteLength",null),Ge(i,"toJSON",aM(null))):(ja(i,"seed",a),ja(i,"seedLength",s),eM(i,"state",f,l),ja(i,"stateLength",o),ja(i,"byteLength",v),Ge(i,"toJSON",c)),Ge(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function l(y){e.state=y}function c(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=Uyr(e.state),n===void 0?y.params=[]:y.params=[n],y}function p(){return uM(r())}function q(y){return Gyr(y)||y<=0?NaN:uM(r(y))}}sM.exports=Wyr});var vM=u((JUr,oM)=>{"use strict";var Hyr=Iv(),kyr=Hyr();oM.exports=kyr});var cM=u((zUr,lM)=>{"use strict";var Dyr=b(),fM=vM(),Xyr=Iv();Dyr(fM,"factory",Xyr);lM.exports=fM});var gM=u((YUr,pM)=>{"use strict";var Jyr=B().isPrimitive,zyr=G().isPrimitive,Yyr=K();function Zyr(r,e){return!Jyr(r)||Yyr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):zyr(e)?null:new TypeError("invalid argument. `s` must be a positive number. Value: `"+e+"`.")}pM.exports=Zyr});var qM=u((ZUr,mM)=>{"use strict";var Pv=E(),$yr=Li(),Qyr=xr();function Kyr(r,e,t){var i;return Pv(r)||Pv(e)||Pv(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+$yr(i)/Qyr)/2)}mM.exports=Kyr});var hM=u(($Ur,yM)=>{"use strict";var rhr=P(),ehr=ho().factory,Rv=E(),thr=Li(),ihr=xr();function nhr(r,e){if(Rv(r)||Rv(e)||e<0)return rhr(NaN);if(e===0)return ehr(r);return t;function t(i){var n;return Rv(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+thr(n)/ihr)/2)}}yM.exports=nhr});var bM=u((QUr,wM)=>{"use strict";var ahr=b(),dM=qM(),uhr=hM();ahr(dM,"factory",uhr);wM.exports=dM});var _v=u((KUr,EM)=>{"use strict";var shr=bM(),ohr=1e4,vhr=1e-12;function fhr(r,e,t){var i,n,a,s,o;for(o=1,i=e-t,n=e+t;o<ohr;){if(s=(i+n)/2,n-i<vhr)return s;a=shr(s,e,t),r>a?i=s:n=s,o+=1}return s}EM.exports=fhr});var AM=u((rWr,NM)=>{"use strict";var Fv=E(),lhr=_v();function chr(r,e,t){return Fv(e)||Fv(t)||Fv(r)||t<0||r<0||r>1?NaN:t===0?e:lhr(r,e,t)}NM.exports=chr});var SM=u((eWr,OM)=>{"use strict";var phr=E();function ghr(r,e){return phr(r)||r<0||r>1?NaN:e}OM.exports=ghr});var IM=u((tWr,LM)=>{"use strict";var mhr=P(),TM=E();function qhr(r){if(TM(r))return mhr(NaN);return e;function e(t){return TM(t)||t<0||t>1?NaN:r}}LM.exports=qhr});var Mv=u((iWr,RM)=>{"use strict";var yhr=b(),PM=SM(),hhr=IM();yhr(PM,"factory",hhr);RM.exports=PM});var FM=u((nWr,_M)=>{"use strict";var dhr=P(),whr=Mv().factory,xv=E(),bhr=_v();function Ehr(r,e){if(xv(r)||xv(e)||e<0)return dhr(NaN);if(e===0)return whr(r);return t;function t(i){return xv(i)||i<0||i>1?NaN:bhr(i,r,e)}}_M.exports=Ehr});var BM=u((aWr,xM)=>{"use strict";var Nhr=b(),MM=AM(),Ahr=FM();Nhr(MM,"factory",Ahr);xM.exports=MM});var jM=u((uWr,CM)=>{"use strict";var Ohr=BM();function Shr(r,e,t){return Ohr(r(),e,t)}CM.exports=Shr});var Bv=u((sWr,XM)=>{"use strict";var Zr=b(),Va=R(),VM=_(),GM=T(),UM=I(),WM=O(),HM=P(),Thr=M(),Ga=W().factory,kM=E(),Lhr=F(),Ihr=gM(),DM=jM();function Phr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ga();else if(arguments.length===1){if(r=arguments[0],!GM(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(WM(r,"prng")){if(!UM(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ga(r)}else{if(n=arguments[0],a=arguments[1],i=Ihr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!GM(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(WM(r,"prng")){if(!UM(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ga(r)}else e=Ga()}return n===void 0?t=y:t=q,Zr(t,"NAME","cosine"),r&&r.prng?(Zr(t,"seed",null),Zr(t,"seedLength",null),VM(t,"state",HM(null),Thr),Zr(t,"stateLength",null),Zr(t,"byteLength",null),Zr(t,"toJSON",HM(null)),Zr(t,"PRNG",e)):(Va(t,"seed",s),Va(t,"seedLength",o),VM(t,"state",l,c),Va(t,"stateLength",v),Va(t,"byteLength",f),Zr(t,"toJSON",p),Zr(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Lhr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return DM(e,n,a)}function y(m,g){return kM(m)||kM(g)||g<=0?NaN:DM(e,m,g)}}XM.exports=Phr});var zM=u((oWr,JM)=>{"use strict";var Rhr=Bv(),_hr=Rhr();JM.exports=_hr});var $M=u((vWr,ZM)=>{"use strict";var Fhr=b(),YM=zM(),Mhr=Bv();Fhr(YM,"factory",Mhr);ZM.exports=YM});var ex=u((fWr,rx)=>{"use strict";var QM=Tr().isPrimitive,KM=K();function xhr(r,e){return!QM(r)||KM(r)?new TypeError("invalid argument. First argument must be an integer and not `NaN`. Value: `"+r+"`."):!QM(e)||KM(e)?new TypeError("invalid argument. Second argument must be an integer and not `NaN`. Value: `"+e+"`."):r>e?new RangeError("invalid argument. Minimum support `a` must be less than or equal to maximum support `b`. Value: `["+r+","+e+"]`."):null}rx.exports=xhr});var nx=u((lWr,ix)=>{"use strict";var Cv=Zn(),ei=$();function tx(r,e,t){var i,n,a,s,o,v,f,l,c;if(a=t-e,a===0)return e;if(f=r.MIN,l=r.MAX,n=l-f,n===a)return r()-f+e;if(n<a)for(s=0;;){for(a===Cv?(s=ei(a/(n+1)),a%(n+1)===n&&(s+=1)):s=ei((a+1)/(n+1)),i=0,v=1;v<=s;){if(i+=(r()-f)*v,v*n===a-v+1)return i;v*=n+1}if(c=tx(r,0,ei(a/v)),!(c>Cv/v)&&(c*=v,i+=c,!(i>a)))return i+e}for(n===Cv?(o=ei(n/(a+1)),n%(a+1)===a&&(o+=1)):o=ei((n+1)/(a+1));;)if(i=r()-f,i=ei(i/o),i<=a)return i+e}ix.exports=tx});var jv=u((cWr,cx)=>{"use strict";var $r=b(),Ua=R(),ax=_(),ux=T(),sx=I(),ox=O(),vx=P(),Bhr=M(),Wa=W().factory,fx=E(),ti=wr(),Chr=F(),jhr=ex(),lx=nx();function Vhr(){var r,e,t,i,n,a;if(arguments.length===0)e=Wa();else if(arguments.length===1){if(r=arguments[0],!ux(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(ox(r,"prng")){if(!sx(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");if(e=r.prng,!ti(e.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!ti(e.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else e=Wa(r)}else{if(n=arguments[0],a=arguments[1],i=jhr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!ux(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(ox(r,"prng")){if(!sx(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");if(e=r.prng,!ti(e.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!ti(e.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else e=Wa(r)}else e=Wa()}return n===void 0?t=y:t=q,$r(t,"NAME","discrete-uniform"),r&&r.prng?($r(t,"seed",null),$r(t,"seedLength",null),ax(t,"state",vx(null),Bhr),$r(t,"stateLength",null),$r(t,"byteLength",null),$r(t,"toJSON",vx(null)),$r(t,"PRNG",e)):(Ua(t,"seed",s),Ua(t,"seedLength",o),ax(t,"state",l,c),Ua(t,"stateLength",v),Ua(t,"byteLength",f),$r(t,"toJSON",p),$r(t,"PRNG",e)),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Chr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return lx(e,n,a)}function y(m,g){return fx(m)||fx(g)||!ti(m)||!ti(g)||m>g?NaN:lx(e,m,g)}}cx.exports=Vhr});var gx=u((pWr,px)=>{"use strict";var Ghr=jv(),Uhr=Ghr();px.exports=Uhr});var yx=u((gWr,qx)=>{"use strict";var Whr=b(),mx=gx(),Hhr=jv();Whr(mx,"factory",Hhr);qx.exports=mx});var dx=u((mWr,hx)=>{"use strict";var khr=G().isPrimitive,Dhr=Gr().isPrimitive;function Xhr(r,e){return Dhr(r)?khr(e)?null:new TypeError("invalid argument. Second argument must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+r+"`.")}hx.exports=Xhr});var bx=u((qWr,wx)=>{"use strict";var Jhr=x();function zhr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*Jhr(i)}wx.exports=zhr});var Vv=u((yWr,Ix)=>{"use strict";var Qr=b(),Ha=R(),Ex=_(),Nx=T(),Ax=I(),Ox=O(),Sx=P(),Yhr=M(),ka=W().factory,Tx=E(),Zhr=Ev(),$hr=F(),Qhr=dx(),Lx=bx();function Khr(){var r,e,t,i,n,a;if(arguments.length===0)e=ka();else if(arguments.length===1){if(t=arguments[0],!Nx(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Ox(t,"prng")){if(!Ax(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=t.prng}else e=ka(t)}else{if(a=arguments[0],r=arguments[1],n=Qhr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!Nx(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Ox(t,"prng")){if(!Ax(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=t.prng}else e=ka(t)}else e=ka()}return a===void 0?i=y:i=q,Qr(i,"NAME","erlang"),t&&t.prng?(Qr(i,"seed",null),Qr(i,"seedLength",null),Ex(i,"state",Sx(null),Yhr),Qr(i,"stateLength",null),Qr(i,"byteLength",null),Qr(i,"toJSON",Sx(null)),Qr(i,"PRNG",e)):(Ha(i,"seed",s),Ha(i,"seedLength",o),Ex(i,"state",l,c),Ha(i,"stateLength",v),Ha(i,"byteLength",f),Qr(i,"toJSON",p),Qr(i,"PRNG",e),e=e.normalized),i;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=$hr(e.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return Lx(e,a,r)}function y(m,g){return Tx(m)||Tx(g)||!Zhr(m)||g<=0?NaN:Lx(e,m,g)}}Ix.exports=Khr});var Rx=u((hWr,Px)=>{"use strict";var rdr=Vv(),edr=rdr();Px.exports=edr});var Mx=u((dWr,Fx)=>{"use strict";var tdr=b(),_x=Rx(),idr=Vv();tdr(_x,"factory",idr);Fx.exports=_x});var Bx=u((wWr,xx)=>{"use strict";var ndr=x();function adr(r,e){return-ndr(1-r())/e}xx.exports=adr});var Gv=u((bWr,Hx)=>{"use strict";var Kr=b(),Da=R(),Cx=_(),udr=G().isPrimitive,jx=T(),Vx=I(),Gx=O(),Ux=P(),sdr=M(),Xa=W().factory,odr=E(),vdr=F(),Wx=Bx();function fdr(){var r,e,t,i;if(arguments.length===0)t=Xa();else if(arguments.length===1&&jx(arguments[0]))if(e=arguments[0],Gx(e,"prng")){if(!Vx(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Xa(e);else{if(r=arguments[0],!udr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!jx(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(Gx(e,"prng")){if(!Vx(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Xa(e)}else t=Xa()}return r===void 0?i=p:i=c,Kr(i,"NAME","exponential"),e&&e.prng?(Kr(i,"seed",null),Kr(i,"seedLength",null),Cx(i,"state",Ux(null),sdr),Kr(i,"stateLength",null),Kr(i,"byteLength",null),Kr(i,"toJSON",Ux(null)),Kr(i,"PRNG",t)):(Da(i,"seed",n),Da(i,"seedLength",a),Cx(i,"state",v,f),Da(i,"stateLength",s),Da(i,"byteLength",o),Kr(i,"toJSON",l),Kr(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=vdr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return Wx(t,r)}function p(q){return odr(q)||q<=0?NaN:Wx(t,q)}}Hx.exports=fdr});var Dx=u((EWr,kx)=>{"use strict";var ldr=Gv(),cdr=ldr();kx.exports=cdr});var zx=u((NWr,Jx)=>{"use strict";var pdr=b(),Xx=Dx(),gdr=Gv();pdr(Xx,"factory",gdr);Jx.exports=Xx});var $x=u((AWr,Zx)=>{"use strict";var Yx=G().isPrimitive;function mdr(r,e){return Yx(r)?Yx(e)?null:new TypeError("invalid argument. `d2` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `d1` must be a positive number. Value: `"+r+"`.")}Zx.exports=mdr});var Kx=u((OWr,Qx)=>{"use strict";function qdr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}Qx.exports=qdr});var Uv=u((SWr,sB)=>{"use strict";var Ue=b(),Ja=R(),rB=_(),eB=T(),tB=I(),iB=O(),nB=P(),ydr=M(),ii=ki().factory,aB=E(),hdr=F(),ddr=$x(),uB=Kx();function wdr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=ii();else if(arguments.length===1){if(e=arguments[0],!eB(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(iB(e,"prng")){if(!tB(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");r=ii({prng:e.prng})}else r=ii(e)}else{if(a=arguments[0],s=arguments[1],n=ddr(a,s),n)throw n;if(arguments.length>2){if(e=arguments[2],!eB(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(iB(e,"prng")){if(!tB(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");r=ii({prng:e.prng})}else r=ii(e)}else r=ii()}return a===void 0?i=m:i=y,t=r.PRNG,Ue(i,"NAME","f"),e&&e.prng?(Ue(i,"seed",null),Ue(i,"seedLength",null),rB(i,"state",nB(null),ydr),Ue(i,"stateLength",null),Ue(i,"byteLength",null),Ue(i,"toJSON",nB(null))):(Ja(i,"seed",o),Ja(i,"seedLength",v),rB(i,"state",c,p),Ja(i,"stateLength",f),Ja(i,"byteLength",l),Ue(i,"toJSON",q)),Ue(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function l(){return t.byteLength}function c(){return t.state}function p(g){t.state=g}function q(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=hdr(t.state),a===void 0?g.params=[]:g.params=[a,s],g}function y(){return uB(r,a,s)}function m(g,h){return aB(g)||aB(h)||g<=0||h<=0?NaN:uB(r,g,h)}}sB.exports=wdr});var vB=u((TWr,oB)=>{"use strict";var bdr=Uv(),Edr=bdr();oB.exports=Edr});var cB=u((LWr,lB)=>{"use strict";var Ndr=b(),fB=vB(),Adr=Uv();Ndr(fB,"factory",Adr);lB.exports=fB});var mB=u((IWr,gB)=>{"use strict";var pB=G().isPrimitive,Odr=B().isPrimitive,Wv=K();function Sdr(r,e,t){return!pB(r)||Wv(r)?new TypeError("invalid argument. First argument must be a positive number primitive and not `NaN`. Value: `"+r+"`."):!pB(e)||Wv(e)?new TypeError("invalid argument. Second argument must be a positive number primitive and not `NaN`. Value: `"+e+"`."):!Odr(t)||Wv(t)?new TypeError("invalid argument. Third argument must be a number primitive and not `NaN`. Value: `"+t+"`."):null}gB.exports=Sdr});var yB=u((PWr,qB)=>{"use strict";var Tdr=Z(),Ldr=x();function Idr(r,e,t,i){return i+t*Tdr(-Ldr(r()),-1/e)}qB.exports=Idr});var kv=u((RWr,AB)=>{"use strict";var re=b(),za=R(),hB=_(),dB=T(),wB=I(),bB=O(),EB=P(),Pdr=M(),Ya=W().factory,Hv=E(),Rdr=F(),_dr=mB(),NB=yB();function Fdr(){var r,e,t,i,n,a,s;if(arguments.length===0)t=Ya();else if(arguments.length===1){if(e=arguments[0],!dB(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(bB(e,"prng")){if(!wB(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Ya(e)}else{if(r=arguments[0],a=arguments[1],s=arguments[2],n=_dr(r,a,s),n)throw n;if(arguments.length>3){if(e=arguments[3],!dB(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(bB(e,"prng")){if(!wB(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Ya(e)}else t=Ya()}return r===void 0?i=m:i=y,re(i,"NAME","frechet"),e&&e.prng?(re(i,"seed",null),re(i,"seedLength",null),hB(i,"state",EB(null),Pdr),re(i,"stateLength",null),re(i,"byteLength",null),re(i,"toJSON",EB(null)),re(i,"PRNG",t)):(za(i,"seed",o),za(i,"seedLength",v),hB(i,"state",c,p),za(i,"stateLength",f),za(i,"byteLength",l),re(i,"toJSON",q),re(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function l(){return t.byteLength}function c(){return t.state}function p(g){t.state=g}function q(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=Rdr(t.state),r===void 0?g.params=[]:g.params=[r,a,s],g}function y(){return NB(t,r,a,s)}function m(g,h,N){return Hv(g)||Hv(h)||Hv(N)||g<=0||h<=0?NaN:NB(t,g,h,N)}}AB.exports=Fdr});var SB=u((_Wr,OB)=>{"use strict";var Mdr=kv(),xdr=Mdr();OB.exports=xdr});var IB=u((FWr,LB)=>{"use strict";var Bdr=b(),TB=SB(),Cdr=kv();Bdr(TB,"factory",Cdr);LB.exports=TB});var _B=u((MWr,RB)=>{"use strict";var jdr=$(),PB=x();function Vdr(r,e){var t=r();return t===0&&(t=r()),jdr(PB(t)/PB(1-e))}RB.exports=Vdr});var Dv=u((xWr,VB)=>{"use strict";var ee=b(),Za=R(),FB=_(),MB=T(),Gdr=bi().isPrimitive,xB=I(),BB=O(),CB=P(),Udr=M(),$a=W().factory,Wdr=E(),Hdr=F(),jB=_B();function kdr(){var r,e,t,i;if(arguments.length===0)e=$a();else if(arguments.length===1&&MB(arguments[0]))if(r=arguments[0],BB(r,"prng")){if(!xB(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=$a(r);else{if(i=arguments[0],!Gdr(i))throw new TypeError("invalid argument. First argument must be a probability. Value: `"+i+"`.");if(arguments.length>1){if(r=arguments[1],!MB(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(BB(r,"prng")){if(!xB(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=$a(r)}else e=$a()}return i===void 0?t=p:t=c,ee(t,"NAME","geometric"),r&&r.prng?(ee(t,"seed",null),ee(t,"seedLength",null),FB(t,"state",CB(null),Udr),ee(t,"stateLength",null),ee(t,"byteLength",null),ee(t,"toJSON",CB(null)),ee(t,"PRNG",e)):(Za(t,"seed",n),Za(t,"seedLength",a),FB(t,"state",v,f),Za(t,"stateLength",s),Za(t,"byteLength",o),ee(t,"toJSON",l),ee(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(q){e.state=q}function l(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=Hdr(e.state),i===void 0?q.params=[]:q.params=[i],q}function c(){return jB(e,i)}function p(q){return Wdr(q)||q<0||q>1?NaN:jB(e,q)}}VB.exports=kdr});var UB=u((BWr,GB)=>{"use strict";var Ddr=Dv(),Xdr=Ddr();GB.exports=Xdr});var kB=u((CWr,HB)=>{"use strict";var Jdr=b(),WB=UB(),zdr=Dv();Jdr(WB,"factory",zdr);HB.exports=WB});var XB=u((jWr,DB)=>{"use strict";var Ydr=B().isPrimitive,Zdr=G().isPrimitive,$dr=K();function Qdr(r,e){return!Ydr(r)||$dr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):Zdr(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`.")}DB.exports=Qdr});var YB=u((VWr,zB)=>{"use strict";var JB=x();function Kdr(r,e,t){return e-t*JB(-JB(r()))}zB.exports=Kdr});var Xv=u((GWr,iC)=>{"use strict";var te=b(),Qa=R(),ZB=_(),$B=T(),QB=I(),KB=O(),rC=P(),rwr=M(),Ka=W().factory,eC=E(),ewr=F(),twr=XB(),tC=YB();function iwr(){var r,e,t,i,n,a;if(arguments.length===0)t=Ka();else if(arguments.length===1){if(e=arguments[0],!$B(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(KB(e,"prng")){if(!QB(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Ka(e)}else{if(a=arguments[0],r=arguments[1],n=twr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!$B(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(KB(e,"prng")){if(!QB(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Ka(e)}else t=Ka()}return a===void 0?i=y:i=q,te(i,"NAME","gumbel"),e&&e.prng?(te(i,"seed",null),te(i,"seedLength",null),ZB(i,"state",rC(null),rwr),te(i,"stateLength",null),te(i,"byteLength",null),te(i,"toJSON",rC(null)),te(i,"PRNG",t)):(Qa(i,"seed",s),Qa(i,"seedLength",o),ZB(i,"state",l,c),Qa(i,"stateLength",v),Qa(i,"byteLength",f),te(i,"toJSON",p),te(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function l(){return t.state}function c(m){t.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=ewr(t.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return tC(t,a,r)}function y(m,g){return eC(m)||eC(g)||g<=0?NaN:tC(t,m,g)}}iC.exports=iwr});var aC=u((UWr,nC)=>{"use strict";var nwr=Xv(),awr=nwr();nC.exports=awr});var oC=u((WWr,sC)=>{"use strict";var uwr=b(),uC=aC(),swr=Xv();uwr(uC,"factory",swr);sC.exports=uC});var fC=u((HWr,vC)=>{"use strict";var owr=$();function vwr(r){return owr(r)===r&&r>=0}vC.exports=vwr});var cC=u((kWr,lC)=>{"use strict";var fwr=fC();lC.exports=fwr});var gC=u((DWr,pC)=>{"use strict";var Jv=de().isPrimitive;function lwr(r,e,t){return Jv(r)?Jv(e)?Jv(t)?t>r?new RangeError("invalid argument. `n` must be less than or equal to `N`. Value: `"+t+"`."):e>r?new RangeError("invalid argument. `K` must be less than or equal to `N`. Value: `"+e+"`."):null:new TypeError("invalid argument. `n` must be a nonnegative integer. Value: `"+t+"`."):new TypeError("invalid argument. `K` must be a nonnegative integer. Value: `"+e+"`."):new TypeError("invalid argument. `N` must be a nonnegative integer. Value: `"+r+"`.")}pC.exports=lwr});var mC=u((XWr,cwr)=>{cwr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var yC=u((JWr,qC)=>{"use strict";var pwr=E(),gwr=wr(),mwr=Rt(),qwr=j(),ywr=mC(),hwr=170;function dwr(r){return pwr(r)?NaN:gwr(r)?r<0?NaN:r<=hwr?ywr[r]:qwr:mwr(r+1)}qC.exports=dwr});var dC=u((zWr,hC)=>{"use strict";var wwr=yC();hC.exports=wwr});var bC=u((YWr,wC)=>{"use strict";var We=dC();function bwr(r,e,t,i){var n,a,s;for(i<t?(n=We(t)*We(e+t-i)/(We(e+t)*We(t-i)),s=0):(n=We(e)*We(i)/(We(i-t)*We(e+t)),s=i-t),a=r();a>n;)a-=n,n*=(e-s)*(i-s)/((s+1)*(t-i+1+s)),s+=1;return s}wC.exports=bwr});var NC=u((ZWr,EC)=>{"use strict";var ru=bC();function Ewr(r,e,t,i){var n,a,s,o;return i>e/2?(s=e-i,2*t<=e?(n=t,a=e-t,o=ru(r,n,a,s),t-o):(a=t,n=e-t,o=ru(r,n,a,s),i-e+t+o)):(s=i,2*t<=e?(n=t,a=e-t,o=ru(r,n,a,s),o):(n=e-t,a=t,o=ru(r,n,a,s),i-o))}EC.exports=Ewr});var Yv=u(($Wr,RC)=>{"use strict";var ie=b(),eu=R(),AC=_(),OC=T(),SC=I(),TC=O(),LC=P(),Nwr=M(),tu=W().factory,zv=cC(),IC=j(),Awr=F(),Owr=gC(),PC=NC();function Swr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=tu();else if(arguments.length===1){if(r=arguments[0],!OC(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(TC(r,"prng")){if(!SC(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=tu(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=Owr(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!OC(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(TC(r,"prng")){if(!SC(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=tu(r)}else e=tu()}return n===void 0?t=m:t=y,ie(t,"NAME","hypergeometric"),r&&r.prng?(ie(t,"seed",null),ie(t,"seedLength",null),AC(t,"state",LC(null),Nwr),ie(t,"stateLength",null),ie(t,"byteLength",null),ie(t,"toJSON",LC(null)),ie(t,"PRNG",e)):(eu(t,"seed",o),eu(t,"seedLength",v),AC(t,"state",c,p),eu(t,"stateLength",f),eu(t,"byteLength",l),ie(t,"toJSON",q),ie(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function l(){return e.byteLength}function c(){return e.state}function p(g){e.state=g}function q(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=Awr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function y(){return PC(e,n,a,s)}function m(g,h,N){return g===IC||h===IC||!zv(g)||!zv(h)||!zv(N)||N>g?NaN:PC(e,g,h,N)}}RC.exports=Swr});var FC=u((QWr,_C)=>{"use strict";var Twr=Yv(),Lwr=Twr();_C.exports=Lwr});var BC=u((KWr,xC)=>{"use strict";var Iwr=b(),MC=FC(),Pwr=Yv();Iwr(MC,"factory",Pwr);xC.exports=MC});var VC=u((rHr,jC)=>{"use strict";var CC=G().isPrimitive;function Rwr(r,e){return CC(r)?CC(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}jC.exports=Rwr});var Zv=u((eHr,XC)=>{"use strict";var He=b(),iu=R(),GC=_(),UC=T(),WC=I(),HC=O(),kC=P(),_wr=M(),ni=$t().factory,DC=E(),Fwr=F(),Mwr=VC();function xwr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=ni();else if(arguments.length===1){if(i=arguments[0],!UC(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(HC(i,"prng")){if(!WC(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");r=ni({prng:i.prng})}else r=ni(i)}else{if(e=arguments[0],t=arguments[1],s=Mwr(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!UC(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(HC(i,"prng")){if(!WC(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");r=ni(e,t,{prng:i.prng})}else r=ni(e,t,i)}else r=ni(e,t)}return e===void 0?a=m:a=y,n=r.PRNG,He(a,"NAME","invgamma"),i&&i.prng?(He(a,"seed",null),He(a,"seedLength",null),GC(a,"state",kC(null),_wr),He(a,"stateLength",null),He(a,"byteLength",null),He(a,"toJSON",kC(null))):(iu(a,"seed",o),iu(a,"seedLength",v),GC(a,"state",c,p),iu(a,"stateLength",f),iu(a,"byteLength",l),He(a,"toJSON",q)),He(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function l(){return n.byteLength}function c(){return n.state}function p(g){n.state=g}function q(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=Fwr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function y(){return 1/r()}function m(g,h){return DC(g)||DC(h)||g<=0||h<=0?NaN:1/r(g,h)}}XC.exports=xwr});var zC=u((tHr,JC)=>{"use strict";var Bwr=Zv(),Cwr=Bwr();JC.exports=Cwr});var $C=u((iHr,ZC)=>{"use strict";var jwr=b(),YC=zC(),Vwr=Zv();jwr(YC,"factory",Vwr);ZC.exports=YC});var rj=u((nHr,KC)=>{"use strict";var QC=G().isPrimitive;function Gwr(r,e){return QC(r)?QC(e)?null:new TypeError("invalid argument. `b` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `a` must be a positive number. Value: `"+r+"`.")}KC.exports=Gwr});var ij=u((aHr,tj)=>{"use strict";var ej=Z();function Uwr(r,e,t){var i=r();return ej(1-ej(1-i,1/t),1/e)}tj.exports=Uwr});var $v=u((uHr,lj)=>{"use strict";var ne=b(),nu=R(),nj=_(),aj=T(),uj=I(),sj=O(),oj=P(),Wwr=M(),au=W().factory,vj=E(),Hwr=F(),kwr=rj(),fj=ij();function Dwr(){var r,e,t,i,n,a;if(arguments.length===0)e=au();else if(arguments.length===1){if(r=arguments[0],!aj(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(sj(r,"prng")){if(!uj(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=au(r)}else{if(n=arguments[0],a=arguments[1],i=kwr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!aj(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(sj(r,"prng")){if(!uj(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=au(r)}else e=au()}return n===void 0?t=y:t=q,ne(t,"NAME","kumaraswamy"),r&&r.prng?(ne(t,"seed",null),ne(t,"seedLength",null),nj(t,"state",oj(null),Wwr),ne(t,"stateLength",null),ne(t,"byteLength",null),ne(t,"toJSON",oj(null)),ne(t,"PRNG",e)):(nu(t,"seed",s),nu(t,"seedLength",o),nj(t,"state",l,c),nu(t,"stateLength",v),nu(t,"byteLength",f),ne(t,"toJSON",p),ne(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Hwr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return fj(e,n,a)}function y(m,g){return vj(m)||vj(g)||m<=0||g<=0?NaN:fj(e,m,g)}}lj.exports=Dwr});var pj=u((sHr,cj)=>{"use strict";var Xwr=$v(),Jwr=Xwr();cj.exports=Jwr});var qj=u((oHr,mj)=>{"use strict";var zwr=b(),gj=pj(),Ywr=$v();zwr(gj,"factory",Ywr);mj.exports=gj});var hj=u((vHr,yj)=>{"use strict";var Zwr=B().isPrimitive,$wr=G().isPrimitive,Qwr=K();function Kwr(r,e){return!Zwr(r)||Qwr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):$wr(e)?null:new TypeError("invalid argument. `b` must be a positive number. Value: `"+e+"`.")}yj.exports=Kwr});var wj=u((fHr,dj)=>{"use strict";var rbr=Pa(),ebr=z(),tbr=x();function ibr(r,e,t){var i=r()-.5;return e-t*rbr(i)*tbr(1-2*ebr(i))}dj.exports=ibr});var Qv=u((lHr,Lj)=>{"use strict";var ae=b(),uu=R(),bj=_(),Ej=T(),Nj=I(),Aj=O(),Oj=P(),nbr=M(),su=W().factory,Sj=E(),abr=F(),ubr=hj(),Tj=wj();function sbr(){var r,e,t,i,n,a;if(arguments.length===0)e=su();else if(arguments.length===1){if(r=arguments[0],!Ej(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Aj(r,"prng")){if(!Nj(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=su(r)}else{if(n=arguments[0],a=arguments[1],i=ubr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Ej(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Aj(r,"prng")){if(!Nj(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=su(r)}else e=su()}return n===void 0?t=y:t=q,ae(t,"NAME","laplace"),r&&r.prng?(ae(t,"seed",null),ae(t,"seedLength",null),bj(t,"state",Oj(null),nbr),ae(t,"stateLength",null),ae(t,"byteLength",null),ae(t,"toJSON",Oj(null)),ae(t,"PRNG",e)):(uu(t,"seed",s),uu(t,"seedLength",o),bj(t,"state",l,c),uu(t,"stateLength",v),uu(t,"byteLength",f),ae(t,"toJSON",p),ae(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=abr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return Tj(e,n,a)}function y(m,g){return Sj(m)||Sj(g)||g<=0?NaN:Tj(e,m,g)}}Lj.exports=sbr});var Pj=u((cHr,Ij)=>{"use strict";var obr=Qv(),vbr=obr();Ij.exports=vbr});var Fj=u((pHr,_j)=>{"use strict";var fbr=b(),Rj=Pj(),lbr=Qv();fbr(Rj,"factory",lbr);_j.exports=Rj});var xj=u((gHr,Mj)=>{"use strict";var cbr=B().isPrimitive,pbr=G().isPrimitive,gbr=K();function mbr(r,e){return!cbr(r)||gbr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):pbr(e)?null:new TypeError("invalid argument. `c` must be a positive number. Value: `"+e+"`.")}Mj.exports=mbr});var Cj=u((mHr,Bj)=>{"use strict";function qbr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}Bj.exports=qbr});var Vj=u((qHr,jj)=>{"use strict";function ybr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}jj.exports=ybr});var Uj=u((yHr,Gj)=>{"use strict";function hbr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}Gj.exports=hbr});var Hj=u((hHr,Wj)=>{"use strict";function dbr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}Wj.exports=dbr});var Dj=u((dHr,kj)=>{"use strict";function wbr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}kj.exports=wbr});var Yj=u((wHr,zj)=>{"use strict";var bbr=E(),Xj=V(),Jj=x(),Ebr=j(),Nbr=D(),Abr=Cj(),Obr=Vj(),Sbr=Uj(),Tbr=Hj(),Lbr=Dj(),Ibr=.08913147449493408,Pbr=2.249481201171875,Rbr=.807220458984375,_br=.9399557113647461,Fbr=.9836282730102539;function Mbr(r){var e,t,i,n,a,s;return bbr(r)?NaN:r===1?Ebr:r===-1?Nbr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),s=Abr(t),e*(a*Ibr+a*s)):n>=.25?(a=Xj(-2*Jj(n)),n-=.25,s=Obr(n),e*(a/(Pbr+s))):(n=Xj(-Jj(n)),n<3?(i=n-1.125,s=Sbr(i),e*(Rbr*n+s*n)):n<6?(i=n-3,s=Tbr(i),e*(_br*n+s*n)):(i=n-6,s=Lbr(i),e*(Fbr*n+s*n))))}zj.exports=Mbr});var Kv=u((bHr,Zj)=>{"use strict";var xbr=Yj();Zj.exports=xbr});var Qj=u((EHr,$j)=>{"use strict";var Bbr=Kv(),r1=E(),Cbr=V();function jbr(r,e,t){var i,n;return r1(e)||r1(t)||r1(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*Cbr(2),i+n*Bbr(2*r-1))}$j.exports=jbr});var rV=u((NHr,Kj)=>{"use strict";var Vbr=P(),Gbr=Mv().factory,Ubr=Kv(),e1=E(),Wbr=V();function Hbr(r,e){var t,i;if(e1(r)||e1(e)||e<0)return Vbr(NaN);return e===0&&Gbr(r),t=r,i=e*Wbr(2),n;function n(a){return e1(a)||a<0||a>1?NaN:t+i*Ubr(2*a-1)}}Kj.exports=Hbr});var iV=u((AHr,tV)=>{"use strict";var kbr=b(),eV=Qj(),Dbr=rV();kbr(eV,"factory",Dbr);tV.exports=eV});var aV=u((OHr,nV)=>{"use strict";var Xbr=iV();function Jbr(r,e,t){var i=Xbr(1-r()/2,0,1);return e+t/(i*i)}nV.exports=Jbr});var t1=u((SHr,pV)=>{"use strict";var ue=b(),ou=R(),uV=_(),sV=T(),oV=I(),vV=O(),fV=P(),zbr=M(),vu=W().factory,lV=E(),Ybr=F(),Zbr=xj(),cV=aV();function $br(){var r,e,t,i,n,a;if(arguments.length===0)e=vu();else if(arguments.length===1){if(r=arguments[0],!sV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(vV(r,"prng")){if(!oV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=vu(r)}else{if(n=arguments[0],a=arguments[1],i=Zbr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!sV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(vV(r,"prng")){if(!oV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=vu(r)}else e=vu()}return n===void 0?t=y:t=q,ue(t,"NAME","levy"),r&&r.prng?(ue(t,"seed",null),ue(t,"seedLength",null),uV(t,"state",fV(null),zbr),ue(t,"stateLength",null),ue(t,"byteLength",null),ue(t,"toJSON",fV(null)),ue(t,"PRNG",e)):(ou(t,"seed",s),ou(t,"seedLength",o),uV(t,"state",l,c),ou(t,"stateLength",v),ou(t,"byteLength",f),ue(t,"toJSON",p),ue(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Ybr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return cV(e,n,a)}function y(m,g){return lV(m)||lV(g)||g<=0?NaN:cV(e,m,g)}}pV.exports=$br});var mV=u((THr,gV)=>{"use strict";var Qbr=t1(),Kbr=Qbr();gV.exports=Kbr});var hV=u((LHr,yV)=>{"use strict";var rEr=b(),qV=mV(),eEr=t1();rEr(qV,"factory",eEr);yV.exports=qV});var wV=u((IHr,dV)=>{"use strict";var tEr=B().isPrimitive,iEr=G().isPrimitive,nEr=K();function aEr(r,e){return!tEr(r)||nEr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):iEr(e)?null:new TypeError("invalid argument. `s` must be a positive number. Value: `"+e+"`.")}dV.exports=aEr});var EV=u((PHr,bV)=>{"use strict";var uEr=x();function sEr(r,e,t){var i=r();return e+t*uEr(i/(1-i))}bV.exports=sEr});var i1=u((RHr,PV)=>{"use strict";var se=b(),fu=R(),NV=_(),AV=T(),OV=I(),SV=O(),TV=P(),oEr=M(),lu=W().factory,LV=E(),vEr=F(),fEr=wV(),IV=EV();function lEr(){var r,e,t,i,n,a;if(arguments.length===0)e=lu();else if(arguments.length===1){if(r=arguments[0],!AV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(SV(r,"prng")){if(!OV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=lu(r)}else{if(n=arguments[0],a=arguments[1],i=fEr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!AV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(SV(r,"prng")){if(!OV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=lu(r)}else e=lu()}return n===void 0?t=y:t=q,se(t,"NAME","logistic"),r&&r.prng?(se(t,"seed",null),se(t,"seedLength",null),NV(t,"state",TV(null),oEr),se(t,"stateLength",null),se(t,"byteLength",null),se(t,"toJSON",TV(null)),se(t,"PRNG",e)):(fu(t,"seed",s),fu(t,"seedLength",o),NV(t,"state",l,c),fu(t,"stateLength",v),fu(t,"byteLength",f),se(t,"toJSON",p),se(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=vEr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return IV(e,n,a)}function y(m,g){return LV(m)||LV(g)||g<=0?NaN:IV(e,m,g)}}PV.exports=lEr});var _V=u((_Hr,RV)=>{"use strict";var cEr=i1(),pEr=cEr();RV.exports=pEr});var xV=u((FHr,MV)=>{"use strict";var gEr=b(),FV=_V(),mEr=i1();gEr(FV,"factory",mEr);MV.exports=FV});var CV=u((MHr,BV)=>{"use strict";var qEr=B().isPrimitive,yEr=G().isPrimitive,hEr=K();function dEr(r,e){return!qEr(r)||hEr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):yEr(e)?null:new TypeError("invalid argument. `sigma` must be a positive number. Value: `"+e+"`.")}BV.exports=dEr});var VV=u((xHr,jV)=>{"use strict";var wEr=nr();function bEr(r,e,t){return wEr(e+t*r())}jV.exports=bEr});var n1=u((BHr,JV)=>{"use strict";var ke=b(),cu=R(),GV=_(),UV=T(),WV=I(),HV=O(),kV=P(),EEr=M(),ai=Be().factory,DV=E(),NEr=F(),AEr=CV(),XV=VV();function OEr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=ai();else if(arguments.length===1){if(t=arguments[0],!UV(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(HV(t,"prng")){if(!WV(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ai({prng:t.prng})}else e=ai(t)}else{if(s=arguments[0],r=arguments[1],a=AEr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!UV(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(HV(t,"prng")){if(!WV(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ai({prng:t.prng})}else e=ai(t)}else e=ai()}return s===void 0?n=m:n=y,i=e.PRNG,ke(n,"NAME","lognormal"),t&&t.prng?(ke(n,"seed",null),ke(n,"seedLength",null),GV(n,"state",kV(null),EEr),ke(n,"stateLength",null),ke(n,"byteLength",null),ke(n,"toJSON",kV(null))):(cu(n,"seed",o),cu(n,"seedLength",v),GV(n,"state",c,p),cu(n,"stateLength",f),cu(n,"byteLength",l),ke(n,"toJSON",q)),ke(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=NEr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return XV(e,s,r)}function m(g,h){return DV(g)||DV(h)||h<=0?NaN:XV(e,g,h)}}JV.exports=OEr});var YV=u((CHr,zV)=>{"use strict";var SEr=n1(),TEr=SEr();zV.exports=TEr});var QV=u((jHr,$V)=>{"use strict";var LEr=b(),ZV=YV(),IEr=n1();LEr(ZV,"factory",IEr);$V.exports=ZV});var a1=u((VHr,KV)=>{"use strict";var PEr=Lt(),REr=$(),_Er=PEr-1;function FEr(){var r=REr(1+_Er*Math.random());return r|0}KV.exports=FEr});var o1=u((GHr,nG)=>{"use strict";var oe=b(),De=R(),rG=_(),u1=O(),MEr=T(),xEr=tr().isPrimitive,BEr=Lr(),CEr=Gr().isPrimitive,eG=qn(),pu=Lt(),mr=at(),ui=Re(),jEr=F(),tG=a1(),s1=pu-1|0,VEr=pu-1|0,GEr=16807,gu=1,mu=2,Xe=2,qr=4,Di=5;function iG(r,e){var t;return e?t="option":t="argument",r.length<Di+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==gu?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+gu+". Actual: "+r[0]+"."):r[1]!==mu?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+mu+". Actual: "+r[1]+"."):r[Xe]!==1?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+1 .toString()+". Actual: "+r[Xe]+"."):r[qr]!==r.length-Di?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-Di)+". Actual: "+r[qr]+"."):null}function UEr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!MEr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(u1(r,"copy")&&(i.copy=r.copy,!xEr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(u1(r,"state")){if(t=r.state,i.state=!0,!eG(t))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+t+"`.");if(s=iG(t,!0),s)throw s;i.copy===!1?e=t:(e=new mr(t.length),ui(t.length,t,1,e,1)),t=new mr(e.buffer,e.byteOffset+(Xe+1)*e.BYTES_PER_ELEMENT,1),n=new mr(e.buffer,e.byteOffset+(qr+1)*e.BYTES_PER_ELEMENT,t[qr])}if(n===void 0)if(u1(r,"seed"))if(n=r.seed,i.seed=!0,CEr(n)){if(n>VEr)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+n+"`.");n|=0}else if(BEr(n)&&n.length>0)a=n.length,e=new mr(Di+a),e[0]=gu,e[1]=mu,e[Xe]=1,e[qr]=a,ui.ndarray(a,n,1,0,e,1,qr+1),t=new mr(e.buffer,e.byteOffset+(Xe+1)*e.BYTES_PER_ELEMENT,1),n=new mr(e.buffer,e.byteOffset+(qr+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+n+"`.");else n=tG()|0}else n=tG()|0;return t===void 0&&(e=new mr(Di+1),e[0]=gu,e[1]=mu,e[Xe]=1,e[qr]=1,e[qr+1]=n,t=new mr(e.buffer,e.byteOffset+(Xe+1)*e.BYTES_PER_ELEMENT,1),n=new mr(e.buffer,e.byteOffset+(qr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),oe(y,"NAME","minstd"),De(y,"seed",o),De(y,"seedLength",v),rG(y,"state",c,p),De(y,"stateLength",f),De(y,"byteLength",l),oe(y,"toJSON",q),oe(y,"MIN",1),oe(y,"MAX",pu-1),oe(y,"normalized",m),oe(m,"NAME",y.NAME),De(m,"seed",o),De(m,"seedLength",v),rG(m,"state",c,p),De(m,"stateLength",f),De(m,"byteLength",l),oe(m,"toJSON",q),oe(m,"MIN",(y.MIN-1)/s1),oe(m,"MAX",(y.MAX-1)/s1),y;function o(){var g=e[qr];return ui(g,n,1,new mr(g),1)}function v(){return e[qr]}function f(){return e.length}function l(){return e.byteLength}function c(){var g=e.length;return ui(g,e,1,new mr(g),1)}function p(g){var h;if(!eG(g))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+g+"`.");if(h=iG(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?ui(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new mr(g.length)),ui(g.length,g,1,e,1)),t=new mr(e.buffer,e.byteOffset+(Xe+1)*e.BYTES_PER_ELEMENT,1),n=new mr(e.buffer,e.byteOffset+(qr+1)*e.BYTES_PER_ELEMENT,e[qr])}function q(){var g={};return g.type="PRNG",g.name=y.NAME,g.state=jEr(e),g.params=[],g}function y(){var g=t[0]|0;return g=GEr*g%pu|0,t[0]=g,g|0}function m(){return(y()-1)/s1}}nG.exports=UEr});var uG=u((UHr,aG)=>{"use strict";var WEr=o1(),HEr=a1(),kEr=WEr({seed:HEr()});aG.exports=kEr});var vG=u((WHr,oG)=>{"use strict";var DEr=b(),sG=uG(),XEr=o1();DEr(sG,"factory",XEr);oG.exports=sG});var lG=u((HHr,fG)=>{"use strict";var JEr=E(),zEr=8;function YEr(r,e,t){var i,n;for(n=0;n<zEr;n++)if(i=r(),JEr(i))throw new Error("unexpected error. PRNG returned `NaN`.");for(n=t-1;n>=0;n--)e[n]=r();return e}fG.exports=YEr});var v1=u((kHr,cG)=>{"use strict";var ZEr=Lt(),$Er=$(),QEr=ZEr-1;function KEr(){var r=$Er(1+QEr*Math.random());return r|0}cG.exports=KEr});var c1=u((DHr,hG)=>{"use strict";var ve=b(),Je=R(),pG=_(),f1=O(),rNr=T(),eNr=tr().isPrimitive,tNr=Lr(),iNr=Gr().isPrimitive,gG=qn(),si=Re(),nNr=$(),yr=at(),Xi=Lt(),aNr=F(),mG=lG(),qG=v1(),l1=Xi-1|0,uNr=Xi-1|0,sNr=16807,dr=32,hu=1,du=3,ze=2,oi=dr+3,hr=dr+6,Ji=dr+7,qu=oi+1,yu=oi+2;function yG(r,e){var t;return e?t="option":t="argument",r.length<Ji+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==hu?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+hu+". Actual: "+r[0]+"."):r[1]!==du?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+du+". Actual: "+r[1]+"."):r[ze]!==dr?new RangeError("invalid "+t+". `state` array has an incompatible table length. Expected: "+dr+". Actual: "+r[ze]+"."):r[oi]!==2?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+2 .toString()+". Actual: "+r[oi]+"."):r[hr]!==r.length-Ji?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-Ji)+". Actual: "+r[hr]+"."):null}function oNr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!rNr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(f1(r,"copy")&&(i.copy=r.copy,!eNr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(f1(r,"state")){if(t=r.state,i.state=!0,!gG(t))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+t+"`.");if(s=yG(t,!0),s)throw s;i.copy===!1?e=t:(e=new yr(t.length),si(t.length,t,1,e,1)),t=new yr(e.buffer,e.byteOffset+(ze+1)*e.BYTES_PER_ELEMENT,dr),n=new yr(e.buffer,e.byteOffset+(hr+1)*e.BYTES_PER_ELEMENT,t[hr])}if(n===void 0)if(f1(r,"seed"))if(n=r.seed,i.seed=!0,iNr(n)){if(n>uNr)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+n+"`.");n|=0}else if(tNr(n)&&n.length>0)a=n.length,e=new yr(Ji+a),e[0]=hu,e[1]=du,e[ze]=dr,e[oi]=2,e[yu]=n[0],e[hr]=a,si.ndarray(a,n,1,0,e,1,hr+1),t=new yr(e.buffer,e.byteOffset+(ze+1)*e.BYTES_PER_ELEMENT,dr),n=new yr(e.buffer,e.byteOffset+(hr+1)*e.BYTES_PER_ELEMENT,a),t=mG(y,t,dr),e[qu]=t[0];else throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+n+"`.");else n=qG()|0}else n=qG()|0;return t===void 0&&(e=new yr(Ji+1),e[0]=hu,e[1]=du,e[ze]=dr,e[oi]=2,e[yu]=n,e[hr]=1,e[hr+1]=n,t=new yr(e.buffer,e.byteOffset+(ze+1)*e.BYTES_PER_ELEMENT,dr),n=new yr(e.buffer,e.byteOffset+(hr+1)*e.BYTES_PER_ELEMENT,1),t=mG(y,t,dr),e[qu]=t[0]),ve(m,"NAME","minstd-shuffle"),Je(m,"seed",o),Je(m,"seedLength",v),pG(m,"state",c,p),Je(m,"stateLength",f),Je(m,"byteLength",l),ve(m,"toJSON",q),ve(m,"MIN",1),ve(m,"MAX",Xi-1),ve(m,"normalized",g),ve(g,"NAME",m.NAME),Je(g,"seed",o),Je(g,"seedLength",v),pG(g,"state",c,p),Je(g,"stateLength",f),Je(g,"byteLength",l),ve(g,"toJSON",q),ve(g,"MIN",(m.MIN-1)/l1),ve(g,"MAX",(m.MAX-1)/l1),m;function o(){var h=e[hr];return si(h,n,1,new yr(h),1)}function v(){return e[hr]}function f(){return e.length}function l(){return e.byteLength}function c(){var h=e.length;return si(h,e,1,new yr(h),1)}function p(h){var N;if(!gG(h))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+h+"`.");if(N=yG(h,!1),N)throw N;i.copy===!1?i.state&&h.length===e.length?si(h.length,h,1,e,1):(e=h,i.state=!0):(h.length!==e.length&&(e=new yr(h.length)),si(h.length,h,1,e,1)),t=new yr(e.buffer,e.byteOffset+(ze+1)*e.BYTES_PER_ELEMENT,dr),n=new yr(e.buffer,e.byteOffset+(hr+1)*e.BYTES_PER_ELEMENT,e[hr])}function q(){var h={};return h.type="PRNG",h.name=m.NAME,h.state=aNr(e),h.params=[],h}function y(){var h=e[yu]|0;return h=sNr*h%Xi|0,e[yu]=h,h|0}function m(){var h,N;return h=e[qu],N=nNr(dr*(h/Xi)),h=t[N],e[qu]=h,t[N]=y(),h}function g(){return(m()-1)/l1}}hG.exports=oNr});var wG=u((XHr,dG)=>{"use strict";var vNr=c1(),fNr=v1(),lNr=vNr({seed:fNr()});dG.exports=lNr});var NG=u((JHr,EG)=>{"use strict";var cNr=b(),bG=wG(),pNr=c1();cNr(bG,"factory",pNr);EG.exports=bG});var OG=u((zHr,AG)=>{"use strict";var gNr=nr();function mNr(r,e){for(var t=r(),i=1;t>gNr(-e);)i+=1,t*=r();return i-1}AG.exports=mNr});var TG=u((YHr,SG)=>{"use strict";var qNr=$();function yNr(r){return qNr(r)===r&&r<0}SG.exports=yNr});var IG=u((ZHr,LG)=>{"use strict";var hNr=TG();LG.exports=hNr});var RG=u(($Hr,PG)=>{"use strict";var dNr=IG(),wNr=Ii();function bNr(r){return dNr(r)?NaN:wNr(r+1)}PG.exports=bNr});var FG=u((QHr,_G)=>{"use strict";var ENr=RG();_G.exports=ENr});var p1=u((KHr,MG)=>{"use strict";var NNr=.9189385332046728;MG.exports=NNr});var jG=u((rkr,CG)=>{"use strict";var ANr=FG(),xG=$(),ONr=Pa(),SNr=V(),BG=z(),wu=x(),TNr=p1(),LNr=1/12,INr=1/360;function PNr(r,e){var t,i,n,a,s,o,v,f,l,c;for(t=SNr(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,s=-3.6224/(v-2)+.9277,n=.86*s;;){if(c=r(),c<=n)return l=c/s-.43,l*=2*o/(.5-BG(l))+v,l+=e+.445,xG(l);if(c>=s?l=r()-.5:(l=c/s-.93,l=ONr(l)*.5-l,c=s*r()),a=.5-BG(l),(a>=.013||a>=c)&&(f=xG((2*o/a+v)*l+e+.445),c*=i/(o/(a*a)+v),l=(f+.5)*wu(e/f),l+=-e-TNr+f,l-=(LNr-INr/(f*f))/f,f>=10&&l>=wu(c*t)||(l=f*wu(e)-e-ANr(f),f>=0&&f<=9&&l>=wu(c))))return f}}CG.exports=PNr});var GG=u((ekr,VG)=>{"use strict";var RNr=OG(),_Nr=jG();function FNr(r,e){return e<30?RNr(r,e):_Nr(r,e)}VG.exports=FNr});var g1=u((tkr,JG)=>{"use strict";var fe=b(),bu=R(),UG=_(),MNr=G().isPrimitive,WG=T(),HG=I(),kG=O(),DG=P(),xNr=M(),Eu=W().factory,BNr=E(),CNr=F(),XG=GG();function jNr(){var r,e,t,i;if(arguments.length===0)t=Eu();else if(arguments.length===1&&WG(arguments[0]))if(e=arguments[0],kG(e,"prng")){if(!HG(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Eu(e);else{if(r=arguments[0],!MNr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!WG(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(kG(e,"prng")){if(!HG(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Eu(e)}else t=Eu()}return r===void 0?i=p:i=c,fe(i,"NAME","poisson"),e&&e.prng?(fe(i,"seed",null),fe(i,"seedLength",null),UG(i,"state",DG(null),xNr),fe(i,"stateLength",null),fe(i,"byteLength",null),fe(i,"toJSON",DG(null)),fe(i,"PRNG",t)):(bu(i,"seed",n),bu(i,"seedLength",a),UG(i,"state",v,f),bu(i,"stateLength",s),bu(i,"byteLength",o),fe(i,"toJSON",l),fe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=CNr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return XG(t,r)}function p(q){return BNr(q)||q<=0?NaN:XG(t,q)}}JG.exports=jNr});var YG=u((ikr,zG)=>{"use strict";var VNr=g1(),GNr=VNr();zG.exports=GNr});var m1=u((nkr,$G)=>{"use strict";var UNr=b(),ZG=YG(),WNr=g1();UNr(ZG,"factory",WNr);$G.exports=ZG});var KG=u((akr,QG)=>{"use strict";var HNr=G().isPrimitive,kNr=B().isPrimitive,DNr=K();function XNr(r,e){return HNr(r)?!kNr(e)||DNr(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):e<=0||e>=1?new RangeError("invalid argument. Second argument must be on the interval `(0,1)`. Value: `"+e+"`."):null:new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.")}QG.exports=XNr});var d1=u((ukr,sU)=>{"use strict";var Ye=b(),Nu=R(),rU=_(),vi=O(),eU=T(),q1=Cr(),tU=tr().isPrimitive,iU=I(),nU=P(),JNr=M(),aU=E(),fi=m1().factory,Au=$t().factory,y1=Re(),h1=ar(),uU=It(),zNr=F(),YNr=KG();function ZNr(){var r,e,t,i,n,a,s,o,v,f;if(s=!0,arguments.length===0)i={copy:!1},t=fi(i);else if(arguments.length===1){if(i=arguments[0],!eU(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(vi(i,"copy")&&!tU(i.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+i.copy+"`.");if(vi(i,"prng")){if(!iU(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");t=fi({prng:i.prng})}else{if(vi(i,"state")&&!q1(i.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+i.state+"`.");i=uU(i,1),i.copy===!1?s=!1:i.state&&(i.state=y1(i.state.length,i.state,1,new h1(i.state.length),1)),i.copy=!1,t=fi(i)}}else{if(f=arguments[0],v=arguments[1],o=YNr(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!eU(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(vi(i,"copy")&&!tU(i.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+i.copy+"`.");if(vi(i,"prng")){if(!iU(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");t=fi({prng:i.prng})}else{if(vi(i,"state")&&!q1(i.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+i.state+"`.");i=uU(i,1),i.copy===!1?s=!1:i.state&&(i.state=y1(i.state.length,i.state,1,new h1(i.state.length),1)),i.copy=!1,t=fi(i)}}else i={copy:!1},t=fi(i)}return i&&i.prng?f===void 0?r=Au({prng:i.prng}):r=Au(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=Au({state:e,copy:!1}):r=Au(f,v/(1-v),{state:e,copy:!1})),f===void 0?n=N:n=h,a=t.PRNG,Ye(n,"NAME","negative-binomial"),i&&i.prng?(Ye(n,"seed",null),Ye(n,"seedLength",null),rU(n,"state",nU(null),JNr),Ye(n,"stateLength",null),Ye(n,"byteLength",null),Ye(n,"toJSON",nU(null))):(Nu(n,"seed",l),Nu(n,"seedLength",c),rU(n,"state",y,m),Nu(n,"stateLength",p),Nu(n,"byteLength",q),Ye(n,"toJSON",g)),Ye(n,"PRNG",a),n;function l(){return a.seed}function c(){return a.seedLength}function p(){return a.stateLength}function q(){return a.byteLength}function y(){return a.state}function m(A){if(!q1(A))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+A+"`.");s&&(A=y1(A.length,A,1,new h1(A.length),1)),a.state=A}function g(){var A={};return A.type="PRNG",A.name=n.NAME,A.state=zNr(a.state),f===void 0?A.params=[]:A.params=[f,v],A}function h(){return t(r())}function N(A,C){return aU(A)||aU(C)||C<=0||C>=1?NaN:t(r(A,C/(1-C)))}}sU.exports=ZNr});var vU=u((skr,oU)=>{"use strict";var $Nr=d1(),QNr=$Nr();oU.exports=QNr});var cU=u((okr,lU)=>{"use strict";var KNr=b(),fU=vU(),rAr=d1();KNr(fU,"factory",rAr);lU.exports=fU});var gU=u((vkr,pU)=>{"use strict";var eAr=B().isPrimitive,tAr=G().isPrimitive,iAr=K();function nAr(r,e){return!eAr(r)||iAr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):tAr(e)?null:new TypeError("invalid argument. `sigma` must be a positive number. Value: `"+e+"`.")}pU.exports=nAr});var qU=u((fkr,mU)=>{"use strict";function aAr(r,e,t){return e+t*r()}mU.exports=aAr});var w1=u((lkr,AU)=>{"use strict";var Ze=b(),Ou=R(),yU=_(),hU=T(),dU=I(),wU=O(),bU=P(),uAr=M(),li=Be().factory,EU=E(),sAr=F(),oAr=gU(),NU=qU();function vAr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=li();else if(arguments.length===1){if(t=arguments[0],!hU(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(wU(t,"prng")){if(!dU(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=li({prng:t.prng})}else e=li(t)}else{if(s=arguments[0],r=arguments[1],a=oAr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!hU(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(wU(t,"prng")){if(!dU(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=li({prng:t.prng})}else e=li(t)}else e=li()}return s===void 0?n=m:n=y,i=e.PRNG,Ze(n,"NAME","normal"),t&&t.prng?(Ze(n,"seed",null),Ze(n,"seedLength",null),yU(n,"state",bU(null),uAr),Ze(n,"stateLength",null),Ze(n,"byteLength",null),Ze(n,"toJSON",bU(null))):(Ou(n,"seed",o),Ou(n,"seedLength",v),yU(n,"state",c,p),Ou(n,"stateLength",f),Ou(n,"byteLength",l),Ze(n,"toJSON",q)),Ze(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=sAr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return NU(e,s,r)}function m(g,h){return EU(g)||EU(h)||h<=0?NaN:NU(e,g,h)}}AU.exports=vAr});var SU=u((ckr,OU)=>{"use strict";var fAr=w1(),lAr=fAr();OU.exports=lAr});var IU=u((pkr,LU)=>{"use strict";var cAr=b(),TU=SU(),pAr=w1();cAr(TU,"factory",pAr);LU.exports=TU});var _U=u((gkr,RU)=>{"use strict";var PU=G().isPrimitive;function gAr(r,e){return PU(r)?PU(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}RU.exports=gAr});var MU=u((mkr,FU)=>{"use strict";var mAr=Z();function qAr(r,e,t){return t/mAr(r(),1/e)}FU.exports=qAr});var b1=u((qkr,WU)=>{"use strict";var le=b(),Su=R(),xU=_(),BU=T(),CU=I(),jU=O(),VU=P(),yAr=M(),Tu=W().factory,GU=E(),hAr=F(),dAr=_U(),UU=MU();function wAr(){var r,e,t,i,n,a;if(arguments.length===0)i=Tu();else if(arguments.length===1){if(t=arguments[0],!BU(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(jU(t,"prng")){if(!CU(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");i=t.prng}else i=Tu(t)}else{if(r=arguments[0],e=arguments[1],a=dAr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!BU(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(jU(t,"prng")){if(!CU(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");i=t.prng}else i=Tu(t)}else i=Tu()}return r===void 0?n=y:n=q,le(n,"NAME","pareto-type1"),t&&t.prng?(le(n,"seed",null),le(n,"seedLength",null),xU(n,"state",VU(null),yAr),le(n,"stateLength",null),le(n,"byteLength",null),le(n,"toJSON",VU(null)),le(n,"PRNG",i)):(Su(n,"seed",s),Su(n,"seedLength",o),xU(n,"state",l,c),Su(n,"stateLength",v),Su(n,"byteLength",f),le(n,"toJSON",p),le(n,"PRNG",i),i=i.normalized),n;function s(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function l(){return i.state}function c(m){i.state=m}function p(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=hAr(i.state),r===void 0?m.params=[]:m.params=[r,e],m}function q(){return UU(i,r,e)}function y(m,g){return GU(m)||GU(g)||m<=0||g<=0?NaN:UU(i,m,g)}}WU.exports=wAr});var kU=u((ykr,HU)=>{"use strict";var bAr=b1(),EAr=bAr();HU.exports=EAr});var JU=u((hkr,XU)=>{"use strict";var NAr=b(),DU=kU(),AAr=b1();NAr(DU,"factory",AAr);XU.exports=DU});var YU=u((dkr,zU)=>{"use strict";var OAr=V(),SAr=x();function TAr(r,e){return e*OAr(-2*SAr(r()))}zU.exports=TAr});var E1=u((wkr,tW)=>{"use strict";var ce=b(),Lu=R(),ZU=_(),LAr=G().isPrimitive,$U=T(),QU=I(),KU=O(),rW=P(),IAr=M(),Iu=W().factory,PAr=E(),RAr=F(),eW=YU();function _Ar(){var r,e,t,i;if(arguments.length===0)t=Iu();else if(arguments.length===1&&$U(arguments[0]))if(e=arguments[0],KU(e,"prng")){if(!QU(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Iu(e);else{if(r=arguments[0],!LAr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!$U(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(KU(e,"prng")){if(!QU(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Iu(e)}else t=Iu()}return r===void 0?i=p:i=c,ce(i,"NAME","rayleigh"),e&&e.prng?(ce(i,"seed",null),ce(i,"seedLength",null),ZU(i,"state",rW(null),IAr),ce(i,"stateLength",null),ce(i,"byteLength",null),ce(i,"toJSON",rW(null)),ce(i,"PRNG",t)):(Lu(i,"seed",n),Lu(i,"seedLength",a),ZU(i,"state",v,f),Lu(i,"stateLength",s),Lu(i,"byteLength",o),ce(i,"toJSON",l),ce(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=RAr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return eW(t,r)}function p(q){return PAr(q)||q<=0?NaN:eW(t,q)}}tW.exports=_Ar});var nW=u((bkr,iW)=>{"use strict";var FAr=E1(),MAr=FAr();iW.exports=MAr});var sW=u((Ekr,uW)=>{"use strict";var xAr=b(),aW=nW(),BAr=E1();xAr(aW,"factory",BAr);uW.exports=aW});var S1=u((Nkr,qW)=>{"use strict";var $e=b(),Pu=R(),oW=_(),ci=O(),vW=G().isPrimitive,fW=T(),N1=Cr(),lW=tr().isPrimitive,CAr=E(),cW=I(),pW=P(),jAr=M(),Ru=ki().factory,pi=Be().factory,A1=Re(),O1=ar(),gW=It(),VAr=F(),mW=V();function GAr(){var r,e,t,i,n,a,s,o;if(s=!0,arguments.length===0)n={copy:!1},t=pi(n);else if(arguments.length===1)if(fW(arguments[0])){if(n=arguments[0],ci(n,"copy")&&!lW(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ci(n,"prng")){if(!cW(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=pi({prng:n.prng})}else{if(ci(n,"state")&&!N1(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=gW(n,1),n.copy===!1?s=!1:n.state&&(n.state=A1(n.state.length,n.state,1,new O1(n.state.length),1)),n.copy=!1,t=pi(n)}}else{if(o=arguments[0],!vW(o))throw new TypeError("invalid argument. First argument must be a positive number or an options object. Value: `"+o+"`.");n={copy:!1},t=pi(n)}else{if(o=arguments[0],!vW(o))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+o+"`.");if(n=arguments[1],!fW(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ci(n,"copy")&&!lW(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ci(n,"prng")){if(!cW(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=pi({prng:n.prng})}else{if(ci(n,"state")&&!N1(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=gW(n,1),n.copy===!1?s=!1:n.state&&(n.state=A1(n.state.length,n.state,1,new O1(n.state.length),1)),n.copy=!1,t=pi(n)}}return n&&n.prng?o===void 0?r=Ru({prng:n.prng}):r=Ru(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=Ru({state:e,copy:!1}):r=Ru(o,{state:e,copy:!1})),o===void 0?a=g:a=m,i=t.PRNG,$e(a,"NAME","t"),n&&n.prng?($e(a,"seed",null),$e(a,"seedLength",null),oW(a,"state",pW(null),jAr),$e(a,"stateLength",null),$e(a,"byteLength",null),$e(a,"toJSON",pW(null))):(Pu(a,"seed",v),Pu(a,"seedLength",f),oW(a,"state",p,q),Pu(a,"stateLength",l),Pu(a,"byteLength",c),$e(a,"toJSON",y)),$e(a,"PRNG",i),a;function v(){return i.seed}function f(){return i.seedLength}function l(){return i.stateLength}function c(){return i.byteLength}function p(){return i.state}function q(h){if(!N1(h))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+h+"`.");s&&(h=A1(h.length,h,1,new O1(h.length),1)),i.state=h}function y(){var h={};return h.type="PRNG",h.name=a.NAME,h.state=VAr(i.state),o===void 0?h.params=[]:h.params=[o],h}function m(){return t()/mW(r()/o)}function g(h){return CAr(h)||h<=0?NaN:t()/mW(r(h)/h)}}qW.exports=GAr});var hW=u((Akr,yW)=>{"use strict";var UAr=S1(),WAr=UAr();yW.exports=WAr});var bW=u((Okr,wW)=>{"use strict";var HAr=b(),dW=hW(),kAr=S1();HAr(dW,"factory",kAr);wW.exports=dW});var NW=u((Skr,EW)=>{"use strict";var T1=B().isPrimitive,L1=K();function DAr(r,e,t){return!T1(r)||L1(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!T1(e)||L1(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):!T1(t)||L1(t)?new TypeError("invalid argument. Third argument must be a number primitive and not `NaN`. Value: `"+t+"`."):r<=t&&t<=e?null:new RangeError("invalid arguments. The condition `a <= c <= b` must be satisfied. Value: `["+r+","+e+","+t+"]`.")}EW.exports=DAr});var SW=u((Tkr,OW)=>{"use strict";var AW=V();function XAr(r,e,t,i){var n,a,s;return n=(i-e)/(t-e),s=r(),s<n?(a=(t-e)*(i-e),e+AW(a*s)):(a=(t-e)*(t-i),t-AW(a*(1-s)))}OW.exports=XAr});var P1=u((Lkr,FW)=>{"use strict";var pe=b(),_u=R(),TW=_(),LW=T(),IW=I(),PW=O(),RW=P(),JAr=M(),Fu=W().factory,I1=E(),zAr=F(),YAr=NW(),_W=SW();function ZAr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=Fu();else if(arguments.length===1){if(r=arguments[0],!LW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(PW(r,"prng")){if(!IW(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Fu(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=YAr(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!LW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(PW(r,"prng")){if(!IW(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Fu(r)}else e=Fu()}return n===void 0?t=m:t=y,pe(t,"NAME","triangular"),r&&r.prng?(pe(t,"seed",null),pe(t,"seedLength",null),TW(t,"state",RW(null),JAr),pe(t,"stateLength",null),pe(t,"byteLength",null),pe(t,"toJSON",RW(null)),pe(t,"PRNG",e)):(_u(t,"seed",o),_u(t,"seedLength",v),TW(t,"state",c,p),_u(t,"stateLength",f),_u(t,"byteLength",l),pe(t,"toJSON",q),pe(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function l(){return e.byteLength}function c(){return e.state}function p(g){e.state=g}function q(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=zAr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function y(){return _W(e,n,a,s)}function m(g,h,N){return I1(g)||I1(h)||I1(N)||!(g<=N&&N<=h)?NaN:_W(e,g,h,N)}}FW.exports=ZAr});var xW=u((Ikr,MW)=>{"use strict";var $Ar=P1(),QAr=$Ar();MW.exports=QAr});var jW=u((Pkr,CW)=>{"use strict";var KAr=b(),BW=xW(),rOr=P1();KAr(BW,"factory",rOr);CW.exports=BW});var WW=u((Rkr,UW)=>{"use strict";var VW=B().isPrimitive,GW=K();function eOr(r,e){return!VW(r)||GW(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!VW(e)||GW(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):r>=e?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+r+","+e+"]`."):null}UW.exports=eOr});var kW=u((_kr,HW)=>{"use strict";function tOr(r,e,t){var i=r();return t*i+(1-i)*e}HW.exports=tOr});var R1=u((Fkr,QW)=>{"use strict";var ge=b(),Mu=R(),DW=_(),XW=T(),JW=I(),zW=O(),YW=P(),iOr=M(),xu=W().factory,ZW=E(),nOr=F(),aOr=WW(),$W=kW();function uOr(){var r,e,t,i,n,a;if(arguments.length===0)e=xu();else if(arguments.length===1){if(r=arguments[0],!XW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(zW(r,"prng")){if(!JW(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=xu(r)}else{if(n=arguments[0],a=arguments[1],i=aOr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!XW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(zW(r,"prng")){if(!JW(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=xu(r)}else e=xu()}return n===void 0?t=y:t=q,ge(t,"NAME","uniform"),r&&r.prng?(ge(t,"seed",null),ge(t,"seedLength",null),DW(t,"state",YW(null),iOr),ge(t,"stateLength",null),ge(t,"byteLength",null),ge(t,"toJSON",YW(null)),ge(t,"PRNG",e)):(Mu(t,"seed",s),Mu(t,"seedLength",o),DW(t,"state",l,c),Mu(t,"stateLength",v),Mu(t,"byteLength",f),ge(t,"toJSON",p),ge(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=nOr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return $W(e,n,a)}function y(m,g){return ZW(m)||ZW(g)||m>=g?NaN:$W(e,m,g)}}QW.exports=uOr});var rH=u((Mkr,KW)=>{"use strict";var sOr=R1(),oOr=sOr();KW.exports=oOr});var iH=u((xkr,tH)=>{"use strict";var vOr=b(),eH=rH(),fOr=R1();vOr(eH,"factory",fOr);tH.exports=eH});var uH=u((Bkr,aH)=>{"use strict";var nH=G().isPrimitive;function lOr(r,e){return nH(r)?nH(e)?null:new TypeError("invalid argument. Shape parameter must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. Scale parameter must be a positive number. Value: `"+r+"`.")}aH.exports=lOr});var oH=u((Ckr,sH)=>{"use strict";var cOr=Z(),pOr=x();function gOr(r,e,t){return t*cOr(-pOr(1-r()),1/e)}sH.exports=gOr});var _1=u((jkr,qH)=>{"use strict";var me=b(),Bu=R(),vH=_(),fH=T(),lH=I(),cH=O(),pH=P(),mOr=M(),Cu=W().factory,gH=E(),qOr=F(),yOr=uH(),mH=oH();function hOr(){var r,e,t,i,n,a;if(arguments.length===0)t=Cu();else if(arguments.length===1){if(e=arguments[0],!fH(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(cH(e,"prng")){if(!lH(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Cu(e)}else{if(a=arguments[0],r=arguments[1],n=yOr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!fH(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(cH(e,"prng")){if(!lH(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Cu(e)}else t=Cu()}return r===void 0?i=y:i=q,me(i,"NAME","weibull"),e&&e.prng?(me(i,"seed",null),me(i,"seedLength",null),vH(i,"state",pH(null),mOr),me(i,"stateLength",null),me(i,"byteLength",null),me(i,"toJSON",pH(null)),me(i,"PRNG",t)):(Bu(i,"seed",s),Bu(i,"seedLength",o),vH(i,"state",l,c),Bu(i,"stateLength",v),Bu(i,"byteLength",f),me(i,"toJSON",p),me(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function l(){return t.state}function c(m){t.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=qOr(t.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return mH(t,a,r)}function y(m,g){return gH(m)||gH(g)||m<=0||g<=0?NaN:mH(t,m,g)}}qH.exports=hOr});var hH=u((Vkr,yH)=>{"use strict";var dOr=_1(),wOr=dOr();yH.exports=wOr});var bH=u((Gkr,wH)=>{"use strict";var bOr=b(),dH=hH(),EOr=_1();bOr(dH,"factory",EOr);wH.exports=dH});var NH=u((Ukr,EH)=>{"use strict";var NOr=k().isPrimitive,AOr=xt(),F1=ft(),OOr=L(),SOr=Bt(),TOr=/\s+/g,LOr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,IOr=/([a-z0-9])([A-Z])/g;function POr(r){if(!NOr(r))throw new TypeError(OOr("invalid argument. Must provide a string. Value: `%s`.",r));return r=F1(r,LOr," "),r=F1(r,IOr,"$1 $2"),r=SOr(r),r=F1(r,TOr,"_"),AOr(r)}EH.exports=POr});var OH=u((Wkr,AH)=>{"use strict";var ROr=NH();AH.exports=ROr});var LH=u((Hkr,TH)=>{"use strict";var _Or=T(),SH=O(),FOr=tr().isPrimitive,MOr=k().isPrimitive;function xOr(r,e){return _Or(e)?SH(e,"flags")&&(r.flags=e.flags,!MOr(r.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+r.flags+"`."):SH(e,"capture")&&(r.capture=e.capture,!FOr(r.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+r.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}TH.exports=xOr});var ju=u((kkr,PH)=>{"use strict";var BOr=LH(),IH=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function COr(r){var e,t;if(arguments.length>0){if(e={},t=BOr(e,r),t)throw t;return e.capture?new RegExp("("+IH+")",e.flags):new RegExp(IH,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}PH.exports=COr});var _H=u((Dkr,RH)=>{"use strict";var jOr=ju(),VOr=jOr({capture:!0});RH.exports=VOr});var MH=u((Xkr,FH)=>{"use strict";var GOr=ju(),UOr=GOr();FH.exports=UOr});var CH=u((Jkr,BH)=>{"use strict";var xH=b(),M1=ju(),WOr=_H(),HOr=MH();xH(M1,"REGEXP",HOr);xH(M1,"REGEXP_CAPTURE",WOr);BH.exports=M1});var VH=u((zkr,jH)=>{"use strict";var kOr=k().isPrimitive,DOr=CH(),XOr=L();function JOr(r){var e,t,i,n;if(!kOr(r))throw new TypeError(XOr("invalid argument. Must provide a string. Value: `%s`.",r));for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),DOr.REGEXP.test(i)?(t+=i,e=!0):e?(t+=i.toUpperCase(),e=!1):t+=i;return t}jH.exports=JOr});var UH=u((Ykr,GH)=>{"use strict";var zOr=VH();GH.exports=zOr});var HH=u((Zkr,WH)=>{"use strict";function YOr(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,N,A;for(y=e[1],m=e[0],g=r[0],h=r[1],l=t[0],c=t[1],s=l[1],o=l[0]-y*s,v=c[1],f=c[0]-y*v,p=0,q=0,n=[],N=0;N<m;N++){for(a=[],A=0;A<y;A++)a.push(i(g[p],h[q])),p+=s,q+=v;n.push(a),p+=o,q+=f}return n}WH.exports=YOr});var DH=u(($kr,kH)=>{"use strict";var ZOr=B().isPrimitive,$Or=j(),QOr=D(),KOr=L();function rSr(r,e){return t;function t(i){var n;if(!ZOr(i)){if(e.nonnumeric===void 0)throw new TypeError(KOr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===$Or?e.pinf:n===QOr?e.ninf:n}}kH.exports=rSr});var YH=u((Qkr,zH)=>{"use strict";var XH=B().isPrimitive,eSr=j(),tSr=D(),JH=L();function iSr(r,e){return t;function t(i,n){var a;if(!XH(i)){if(e.nonnumeric===void 0)throw new TypeError(JH("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!XH(n)){if(e.nonnumeric===void 0)throw new TypeError(JH("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===eSr?e.pinf:a===tSr?e.ninf:a}}zH.exports=iSr});var $H=u((Kkr,ZH)=>{"use strict";var x1=B().isPrimitive,nSr=j(),aSr=D(),B1=L();function uSr(r,e){return t;function t(i,n,a){var s;if(!x1(i)){if(e.nonnumeric===void 0)throw new TypeError(B1("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!x1(n)){if(e.nonnumeric===void 0)throw new TypeError(B1("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!x1(a)){if(e.nonnumeric===void 0)throw new TypeError(B1("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return s=r(i,n,a),s!==s?e.nan:s===nSr?e.pinf:s===aSr?e.ninf:s}}ZH.exports=uSr});var KH=u((rDr,QH)=>{"use strict";var sSr=k().isPrimitive,oSr=L();function vSr(r){return e;function e(t){if(!sSr(t))throw new TypeError(oSr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}QH.exports=vSr});var ik=u((eDr,tk)=>{"use strict";var rk=k().isPrimitive,ek=L();function fSr(r){return e;function e(t,i){if(!rk(t))throw new TypeError(ek("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!rk(i))throw new TypeError(ek("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}tk.exports=fSr});var ak=u((tDr,nk)=>{"use strict";var C1=k().isPrimitive,j1=L();function lSr(r){return e;function e(t,i){if(!C1(t))throw new TypeError(j1("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!C1(i))throw new TypeError(j1("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!C1(v3))throw new TypeError(j1("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(v3)));return r(t,i,v3)}}nk.exports=lSr});var sk=u((iDr,uk)=>{"use strict";function cSr(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,N,A,C,S,H,er,U;for(N=e[1],A=e[0],C=r[0],S=r[1],H=r[2],p=t[0],q=t[1],y=t[2],s=p[1],o=p[0]-N*s,v=q[1],f=q[0]-N*v,l=y[1],c=y[0]-N*l,m=0,g=0,h=0,n=[],er=0;er<A;er++){for(a=[],U=0;U<N;U++)a.push(i(C[m],S[g],H[h])),m+=s,g+=v,h+=l;n.push(a),m+=o,g+=f,h+=c}return n}uk.exports=cSr});var vk=u((nDr,ok)=>{"use strict";var pSr=Jo();function gSr(r,e){return pSr(r,e)}ok.exports=gSr});var lk=u((aDr,fk)=>{"use strict";var mSr=k().isPrimitive,qSr=L();function ySr(r){if(!mSr(r))throw new TypeError(qSr("invalid argument. First argument must be a string. Value: `%s`.",r));return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}fk.exports=ySr});var pk=u((uDr,ck)=>{"use strict";var hSr=lk();ck.exports=hSr});var gk=u((sDr,dSr)=>{dSr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var mk=u((oDr,wSr)=>{wSr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var qk=u((vDr,bSr)=>{bSr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var hk=u((fDr,yk)=>{"use strict";function ESr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}yk.exports=ESr});var wk=u((lDr,dk)=>{"use strict";function NSr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}dk.exports=NSr});var Ek=u((cDr,bk)=>{"use strict";function ASr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}bk.exports=ASr});var Ak=u((pDr,Nk)=>{"use strict";function OSr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}Nk.exports=OSr});var Sk=u((gDr,Ok)=>{"use strict";function SSr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}Ok.exports=SSr});var Lk=u((mDr,Tk)=>{"use strict";function TSr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}Tk.exports=TSr});var Fk=u((qDr,_k)=>{"use strict";var LSr=E(),ISr=wr(),PSr=z(),Vu=nr(),RSr=$(),_Sr=Rt(),FSr=Ii(),Ik=Li(),Pk=Z(),MSr=x(),xSr=j(),BSr=D(),Rk=Ae(),CSr=Js(),jSr=p1(),VSr=gk(),GSr=mk(),USr=qk(),WSr=hk(),HSr=wk(),kSr=Ek(),DSr=Ak(),XSr=Sk(),JSr=Lk(),zSr=129,YSr=170,ZSr=709,$Sr=1.2433929443359375,QSr=.6986598968505859;function V1(r){var e,t,i,n,a,s;if(LSr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(ISr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(s=(i+1)/2|0,s<=zSr)return-USr[s]/(i+1)}else return(n&1)===0?GSr[n/2]:VSr[(n-3)/2];return PSr(r)<CSr?-.5-jSr*r:(t=1-r,r<0?RSr(r/2)===r/2?0:(e=r,r=t,t=e,r>YSr?(e=Ik(.5*t)*2*V1(r),a=FSr(r),a-=r*MSr(Rk),a>ZSr?e<0?BSr:xSr:e*Vu(a)):Ik(.5*t)*2*Pk(Rk,-r)*_Sr(r)*V1(r)):r<1?(e=WSr(t),e-=$Sr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+HSr(t)):r<=4?(e=QSr+1/-t,e+kSr(r-2)):r<=7?(e=DSr(r-4),1+Vu(e)):r<15?(e=XSr(r-7),1+Vu(e)):r<36?(e=JSr(r-15),1+Vu(e)):1+Pk(2,-r))}_k.exports=V1});var xk=u((yDr,Mk)=>{"use strict";var KSr=Fk();Mk.exports=KSr});var rTr=u((hDr,Bk)=>{var d={};d.abs=z();d.abs2=X1();d.acos=gi();d.acosh=j2();d.acot=$2();d.acovercos=ec();d.acoversin=ac();d.acsc=vc();d.acsch=bc();d.ahavercos=Oc();d.ahaversin=Ic();d.ANSCOMBES_QUARTET=Hg();d.asin=Qe();d.asinh=n0();d.atan=en();d.atanh=zg();d.avercos=Qg();d.aversin=t7();d.assert={};d.assert.isBoolean=n7();d.assert.isBroadcastCompatible=o7();d.assert.isBroadcastCompatibleWith=c7();d.assert.isDefined=as();d.assert.isGreaterThan=m7();d.assert.isGreaterThanEqual=y7();d.assert.isInteger=d7();d.assert.isLessThan=b7();d.assert.isLessThanEqual=N7();d.assert.isNonNegativeInteger=O7();d.assert.isNonNegativeNumber=F7();d.assert.isNumber=x7();d.assert.isOneOf=C7();d.assert.isPositiveInteger=ps();d.assert.isPositiveNumber=Q7();d.assert.isProbability=u9();d.assert.isRange=o9();d.assert.isRange1d=p9();d.assert.isSameShape=y9();d.assert.isString=d9();d.assert.unrecognizedOptionName=b9();d.assert.verifyCommonPRNGArgs=A9();d.assert.verifyPRNGSeed=T9();d.bartlettTest=rN();d.blas={};d.blas.daxpy=No().ndarray;d.blas.saxpy=No().ndarray;d.broadcast=cN();d.camelcase=UN();d.capitalize=Qn();d.constantcase=zN();d.cumax=iA().ndarray;d.dists={};d.dists.normal={};d.dists.normal.entropy=oA();d.dists.normal.pdf=SA();d.filled=IA();d.filledBy=BA();d.flattenArray=hn();d.format=L();d.isArray=vr();d.isBoolean=tr().isPrimitive;d.isNumber=B().isPrimitive;d.isPositiveNumber=G().isPrimitive;d.isRange1d=ws();d.isString=k().isPrimitive;d.iterator2array=tO();d.iterSawtoothWave=IO();d.kebabcase=FO();d.linspace=RL();d.lowercase=xt();d.map2d=Jo();d.max=UL().ndarray;d.mskmax=ZL().ndarray;d.pascalcase=rI();d.random={};d.random.arcsine=VP().factory;d.random.bernoulli=ZP().factory;d.random.beta=ZR().factory;d.random.betaprime=__().factory;d.random.binomial=cF().factory;d.random.boxMueller=TF().factory;d.random.cauchy=kF().factory;d.random.chi=cM().factory;d.random.chisquare=ki().factory;d.random.cosine=$M().factory;d.random.discreteUniform=yx().factory;d.random.erlang=Mx().factory;d.random.exponential=zx().factory;d.random.f=cB().factory;d.random.frechet=IB().factory;d.random.gamma=$t().factory;d.random.geometric=kB().factory;d.random.gumbel=oC().factory;d.random.hypergeometric=BC().factory;d.random.improvedZiggurat=Be().factory;d.random.invgamma=$C().factory;d.random.kumaraswamy=qj().factory;d.random.laplace=Fj().factory;d.random.levy=hV().factory;d.random.logistic=xV().factory;d.random.lognormal=QV().factory;d.random.minstd=vG().factory;d.random.minstdShuffle=NG().factory;d.random.mt19937=W().factory;d.random.negativeBinomial=cU().factory;d.random.normal=IU().factory;d.random.paretoType1=JU().factory;d.random.poisson=m1().factory;d.random.rayleigh=sW().factory;d.random.t=bW().factory;d.random.triangular=jW().factory;d.random.uniform=iH().factory;d.random.weibull=bH().factory;d.snakecase=OH();d.startcase=UH();d.tools={};d.tools.binary2d=HH();d.tools.d_d=DH();d.tools.dd_d=YH();d.tools.ddd_d=$H();d.tools.s_o=KH();d.tools.ss_o=ik();d.tools.sss_o=ak();d.tools.ternary2d=sk();d.tools.unary2d=vk();d.uncapitalize=pk();d.uppercase=So();d.zeta=xk();Bk.exports=d});return rTr();})();
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
