/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var mn=u((hMr,q2)=>{"use strict";function Dz(r){return Object.keys(Object(r))}q2.exports=Dz});var h2=u((dMr,y2)=>{"use strict";var Xz=mn();function Jz(){return(Xz(arguments)||"").length!==2}function zz(){return Jz(1,2)}y2.exports=zz});var w2=u((wMr,d2)=>{"use strict";var Yz=typeof Object.keys<"u";d2.exports=Yz});var E2=u((bMr,b2)=>{"use strict";function Zz(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}b2.exports=Zz});var A2=u((EMr,N2)=>{"use strict";var Qz=E2();N2.exports=Qz});var S2=u((NMr,O2)=>{"use strict";var Kz=A2(),$z=Kz();function xz(){return $z&&typeof Symbol.toStringTag=="symbol"}O2.exports=xz});var Lt=u((AMr,T2)=>{"use strict";var rY=S2();T2.exports=rY});var iu=u((OMr,L2)=>{"use strict";var eY=Object.prototype.toString;L2.exports=eY});var _2=u((SMr,I2)=>{"use strict";var tY=iu();function iY(r){return tY.call(r)}I2.exports=iY});var R2=u((TMr,P2)=>{"use strict";var nY=Object.prototype.hasOwnProperty;function aY(r,e){return r==null?!1:nY.call(r,e)}P2.exports=aY});var A=u((LMr,F2)=>{"use strict";var uY=R2();F2.exports=uY});var B2=u((IMr,M2)=>{"use strict";var sY=typeof Symbol=="function"?Symbol.toStringTag:"";M2.exports=sY});var j2=u((_Mr,C2)=>{"use strict";var oY=A(),Oi=B2(),nu=iu();function vY(r){var e,t,i;if(r==null)return nu.call(r);t=r[Oi],e=oY(r,Oi);try{r[Oi]=void 0}catch{return nu.call(r)}return i=nu.call(r),e?r[Oi]=t:delete r[Oi],i}C2.exports=vY});var rr=u((PMr,G2)=>{"use strict";var fY=Lt(),lY=_2(),cY=j2(),au;fY()?au=cY:au=lY;G2.exports=au});var uu=u((RMr,V2)=>{"use strict";var pY=rr();function gY(r){return pY(r)==="[object Arguments]"}V2.exports=gY});var W2=u((FMr,H2)=>{"use strict";var mY=uu(),U2;function qY(){return mY(arguments)}U2=qY();H2.exports=U2});var D2=u((MMr,k2)=>{"use strict";var yY=typeof Object.defineProperty=="function"?Object.defineProperty:null;k2.exports=yY});var J2=u((BMr,X2)=>{"use strict";var hY=D2();function dY(){try{return hY({},"x",{}),!0}catch{return!1}}X2.exports=dY});var Y2=u((CMr,z2)=>{"use strict";var wY=Object.defineProperty;z2.exports=wY});var x2=u((jMr,$2)=>{"use strict";var It=Object.prototype,Z2=It.toString,Q2=It.__defineGetter__,K2=It.__defineSetter__,bY=It.__lookupGetter__,EY=It.__lookupSetter__;function NY(r,e,t){var i,n,a,s;if(typeof r!="object"||r===null||Z2.call(r)==="[object Array]")throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if(typeof t!="object"||t===null||Z2.call(t)==="[object Array]")throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if(n="value"in t,n&&(bY.call(r,e)||EY.call(r,e)?(i=r.__proto__,r.__proto__=It,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,s="set"in t,n&&(a||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Q2&&Q2.call(r,e,t.get),s&&K2&&K2.call(r,e,t.set),r}$2.exports=NY});var Se=u((GMr,rf)=>{"use strict";var AY=J2(),OY=Y2(),SY=x2(),su;AY()?su=OY:su=SY;rf.exports=su});var tf=u((VMr,ef)=>{"use strict";var TY=Se();function LY(r,e,t){TY(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}ef.exports=LY});var w=u((UMr,nf)=>{"use strict";var IY=tf();nf.exports=IY});var ou=u((HMr,af)=>{"use strict";function _Y(r){return typeof r=="string"}af.exports=_Y});var sf=u((WMr,uf)=>{"use strict";var PY=String.prototype.valueOf;uf.exports=PY});var vf=u((kMr,of)=>{"use strict";var RY=sf();function FY(r){try{return RY.call(r),!0}catch{return!1}}of.exports=FY});var vu=u((DMr,ff)=>{"use strict";var MY=Lt(),BY=rr(),CY=vf(),jY=MY();function GY(r){return typeof r=="object"?r instanceof String?!0:jY?CY(r):BY(r)==="[object String]":!1}ff.exports=GY});var cf=u((XMr,lf)=>{"use strict";var VY=ou(),UY=vu();function HY(r){return VY(r)||UY(r)}lf.exports=HY});var z=u((JMr,gf)=>{"use strict";var pf=w(),fu=cf(),WY=ou(),kY=vu();pf(fu,"isPrimitive",WY);pf(fu,"isObject",kY);gf.exports=fu});var lu=u((zMr,mf)=>{"use strict";function DY(r){return typeof r=="number"}mf.exports=DY});var yf=u((YMr,qf)=>{"use strict";qf.exports=Number});var qn=u((ZMr,hf)=>{"use strict";var XY=yf();hf.exports=XY});var wf=u((QMr,df)=>{"use strict";var JY=qn(),zY=JY.prototype.toString;df.exports=zY});var Ef=u((KMr,bf)=>{"use strict";var YY=wf();function ZY(r){try{return YY.call(r),!0}catch{return!1}}bf.exports=ZY});var cu=u(($Mr,Nf)=>{"use strict";var QY=Lt(),KY=rr(),$Y=qn(),xY=Ef(),rZ=QY();function eZ(r){return typeof r=="object"?r instanceof $Y?!0:rZ?xY(r):KY(r)==="[object Number]":!1}Nf.exports=eZ});var Of=u((xMr,Af)=>{"use strict";var tZ=lu(),iZ=cu();function nZ(r){return tZ(r)||iZ(r)}Af.exports=nZ});var j=u((rBr,Tf)=>{"use strict";var Sf=w(),pu=Of(),aZ=lu(),uZ=cu();Sf(pu,"isPrimitive",aZ);Sf(pu,"isObject",uZ);Tf.exports=pu});var If=u((eBr,Lf)=>{"use strict";function sZ(r){return r!==r}Lf.exports=sZ});var b=u((tBr,_f)=>{"use strict";var oZ=If();_f.exports=oZ});var gu=u((iBr,Pf)=>{"use strict";var vZ=j().isPrimitive,fZ=b();function lZ(r){return vZ(r)&&fZ(r)}Pf.exports=lZ});var mu=u((nBr,Rf)=>{"use strict";var cZ=j().isObject,pZ=b();function gZ(r){return cZ(r)&&pZ(r.valueOf())}Rf.exports=gZ});var Mf=u((aBr,Ff)=>{"use strict";var mZ=gu(),qZ=mu();function yZ(r){return mZ(r)||qZ(r)}Ff.exports=yZ});var ir=u((uBr,Cf)=>{"use strict";var Bf=w(),qu=Mf(),hZ=gu(),dZ=mu();Bf(qu,"isPrimitive",hZ);Bf(qu,"isObject",dZ);Cf.exports=qu});var P=u((sBr,jf)=>{"use strict";var wZ=Number.POSITIVE_INFINITY;jf.exports=wZ});var D=u((oBr,Gf)=>{"use strict";var bZ=qn(),EZ=bZ.NEGATIVE_INFINITY;Gf.exports=EZ});var Uf=u((vBr,Vf)=>{"use strict";var NZ=Math.floor;Vf.exports=NZ});var K=u((fBr,Hf)=>{"use strict";var AZ=Uf();Hf.exports=AZ});var kf=u((lBr,Wf)=>{"use strict";var OZ=K();function SZ(r){return OZ(r)===r}Wf.exports=SZ});var Ar=u((cBr,Df)=>{"use strict";var TZ=kf();Df.exports=TZ});var yu=u((pBr,Xf)=>{"use strict";var LZ=P(),IZ=D(),_Z=Ar();function PZ(r){return r<LZ&&r>IZ&&_Z(r)}Xf.exports=PZ});var hu=u((gBr,Jf)=>{"use strict";var RZ=j().isPrimitive,FZ=yu();function MZ(r){return RZ(r)&&FZ(r)}Jf.exports=MZ});var du=u((mBr,zf)=>{"use strict";var BZ=j().isObject,CZ=yu();function jZ(r){return BZ(r)&&CZ(r.valueOf())}zf.exports=jZ});var Zf=u((qBr,Yf)=>{"use strict";var GZ=hu(),VZ=du();function UZ(r){return GZ(r)||VZ(r)}Yf.exports=UZ});var Fr=u((yBr,Kf)=>{"use strict";var Qf=w(),wu=Zf(),HZ=hu(),WZ=du();Qf(wu,"isPrimitive",HZ);Qf(wu,"isObject",WZ);Kf.exports=wu});var bu=u((hBr,$f)=>{"use strict";var kZ=Object.prototype.propertyIsEnumerable;$f.exports=kZ});var e3=u((dBr,r3)=>{"use strict";var DZ=bu(),xf;function XZ(){return!DZ.call("beep","0")}xf=XZ();r3.exports=xf});var i3=u((wBr,t3)=>{"use strict";var JZ=z(),zZ=ir().isPrimitive,YZ=Fr().isPrimitive,ZZ=bu(),QZ=e3();function KZ(r,e){var t;return r==null?!1:(t=ZZ.call(r,e),!t&&QZ&&JZ(r)?(e=+e,!zZ(e)&&YZ(e)&&e>=0&&e<r.length):t)}t3.exports=KZ});var yn=u((bBr,n3)=>{"use strict";var $Z=i3();n3.exports=$Z});var u3=u((EBr,a3)=>{"use strict";var xZ=rr(),Eu;function rQ(r){return xZ(r)==="[object Array]"}Array.isArray?Eu=Array.isArray:Eu=rQ;a3.exports=Eu});var lr=u((NBr,s3)=>{"use strict";var eQ=u3();s3.exports=eQ});var _t=u((ABr,o3)=>{"use strict";var tQ=4294967295;o3.exports=tQ});var l3=u((OBr,f3)=>{"use strict";var iQ=A(),nQ=yn(),aQ=lr(),uQ=Ar(),sQ=_t();function oQ(r){return r!==null&&typeof r=="object"&&!aQ(r)&&typeof r.length=="number"&&uQ(r.length)&&r.length>=0&&r.length<=sQ&&iQ(r,"callee")&&!nQ(r,"callee")}f3.exports=oQ});var Au=u((SBr,c3)=>{"use strict";var vQ=W2(),fQ=uu(),lQ=l3(),Nu;vQ?Nu=fQ:Nu=lQ;c3.exports=Nu});var m3=u((TBr,g3)=>{"use strict";var cQ=Au(),p3=mn(),pQ=Array.prototype.slice;function gQ(r){return cQ(r)?p3(pQ.call(r)):p3(r)}g3.exports=gQ});var y3=u((LBr,q3)=>{"use strict";var mQ=lr();function qQ(r){if(typeof r!="function")throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return e;function e(t){var i,n;if(!mQ(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}q3.exports=qQ});var d3=u((IBr,h3)=>{"use strict";var yQ=y3();h3.exports=yQ});var b3=u((_Br,w3)=>{"use strict";function hQ(r){return r!==null&&typeof r=="object"}w3.exports=hQ});var Su=u((PBr,E3)=>{"use strict";var dQ=w(),wQ=d3(),Ou=b3(),bQ=wQ(Ou);dQ(Ou,"isObjectLikeArray",bQ);E3.exports=Ou});var A3=u((RBr,N3)=>{"use strict";function EQ(){}N3.exports=EQ});var B=u((FBr,O3)=>{"use strict";var NQ=A3();O3.exports=NQ});var T3=u((MBr,S3)=>{"use strict";var AQ=yn(),OQ=B(),SQ=AQ(OQ,"prototype");S3.exports=SQ});var I3=u((BBr,L3)=>{"use strict";var TQ=yn(),LQ={toString:null},IQ=!TQ(LQ,"toString");L3.exports=IQ});var P3=u((CBr,_3)=>{"use strict";var _Q=9007199254740991;_3.exports=_Q});var F3=u((jBr,R3)=>{"use strict";var PQ=Ar(),RQ=P3();function FQ(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&PQ(r.length)&&r.length>=0&&r.length<=RQ}R3.exports=FQ});var Mr=u((GBr,M3)=>{"use strict";var MQ=F3();M3.exports=MQ});var j3=u((VBr,C3)=>{"use strict";var B3=ir(),BQ=Mr(),CQ=z().isPrimitive,jQ=Fr().isPrimitive;function GQ(r,e,t){var i,n;if(!BQ(r)&&!CQ(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(i=r.length,i===0)return-1;if(arguments.length===3){if(!jQ(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(B3(e)){for(;n<i;n++)if(B3(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}C3.exports=GQ});var hn=u((UBr,G3)=>{"use strict";var VQ=j3();G3.exports=VQ});var U3=u((HBr,V3)=>{"use strict";var UQ=/./;V3.exports=UQ});var Tu=u((WBr,H3)=>{"use strict";function HQ(r){return typeof r=="boolean"}H3.exports=HQ});var k3=u((kBr,W3)=>{"use strict";var WQ=Boolean.prototype.toString;W3.exports=WQ});var X3=u((DBr,D3)=>{"use strict";var kQ=k3();function DQ(r){try{return kQ.call(r),!0}catch{return!1}}D3.exports=DQ});var Lu=u((XBr,J3)=>{"use strict";var XQ=Lt(),JQ=rr(),zQ=X3(),YQ=XQ();function ZQ(r){return typeof r=="object"?r instanceof Boolean?!0:YQ?zQ(r):JQ(r)==="[object Boolean]":!1}J3.exports=ZQ});var Y3=u((JBr,z3)=>{"use strict";var QQ=Tu(),KQ=Lu();function $Q(r){return QQ(r)||KQ(r)}z3.exports=$Q});var ur=u((zBr,Q3)=>{"use strict";var Z3=w(),Iu=Y3(),xQ=Tu(),rK=Lu();Z3(Iu,"isPrimitive",xQ);Z3(Iu,"isObject",rK);Q3.exports=Iu});var $3=u((YBr,K3)=>{"use strict";function eK(){return new Function("return this;")()}K3.exports=eK});var rl=u((ZBr,x3)=>{"use strict";var tK=typeof self=="object"?self:null;x3.exports=tK});var tl=u((QBr,el)=>{"use strict";var iK=typeof window=="object"?window:null;el.exports=iK});var nl=u((KBr,il)=>{"use strict";var nK=typeof global=="object"?global:null;il.exports=nK});var vl=u(($Br,ol)=>{"use strict";var aK=ur().isPrimitive,uK=$3(),al=rl(),ul=tl(),sl=nl();function sK(r){if(arguments.length){if(!aK(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return uK()}if(al)return al;if(ul)return ul;if(sl)return sl;throw new Error("unexpected error. Unable to resolve global object.")}ol.exports=sK});var ll=u((xBr,fl)=>{"use strict";var oK=vl();fl.exports=oK});var gl=u((rCr,pl)=>{"use strict";var vK=ll(),cl=vK(),fK=cl.document&&cl.document.childNodes;pl.exports=fK});var ql=u((eCr,ml)=>{"use strict";var lK=Int8Array;ml.exports=lK});var hl=u((tCr,yl)=>{"use strict";var cK=U3(),pK=gl(),gK=ql();function mK(){return typeof cK=="function"||typeof gK=="object"||typeof pK=="function"}yl.exports=mK});var _u=u((iCr,dl)=>{"use strict";function qK(){return/^\s*function\s*([^(]*)/i}dl.exports=qK});var bl=u((nCr,wl)=>{"use strict";var yK=_u(),hK=yK();wl.exports=hK});var Pu=u((aCr,Nl)=>{"use strict";var dK=w(),El=_u(),wK=bl();dK(El,"REGEXP",wK);Nl.exports=El});var Ol=u((uCr,Al)=>{"use strict";var bK=Su();function EK(r){return bK(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}Al.exports=EK});var ut=u((sCr,Sl)=>{"use strict";var NK=Ol();Sl.exports=NK});var Ll=u((oCr,Tl)=>{"use strict";var AK=rr(),OK=Pu().REGEXP,SK=ut();function TK(r){var e,t,i;if(t=AK(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=OK.exec(i.toString()),e)return e[1]}return SK(r)?"Buffer":t}Tl.exports=TK});var Te=u((vCr,Il)=>{"use strict";var LK=Ll();Il.exports=LK});var Pl=u((fCr,_l)=>{"use strict";var IK=Te();function _K(r){var e;return r===null?"null":(e=typeof r,e==="object"?IK(r).toLowerCase():e)}_l.exports=_K});var Fl=u((lCr,Rl)=>{"use strict";var PK=Te();function RK(r){return PK(r).toLowerCase()}Rl.exports=RK});var dn=u((cCr,Ml)=>{"use strict";var FK=hl(),MK=Pl(),BK=Fl(),CK=FK()?BK:MK;Ml.exports=CK});var Ru=u((pCr,Bl)=>{"use strict";function jK(r){return r.constructor&&r.constructor.prototype===r}Bl.exports=jK});var Cl=u((gCr,GK)=>{GK.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var Gl=u((mCr,jl)=>{"use strict";var VK=typeof window>"u"?void 0:window;jl.exports=VK});var Wl=u((qCr,Hl)=>{"use strict";var UK=A(),HK=hn(),Vl=dn(),WK=Ru(),kK=Cl(),Pt=Gl(),Ul;function DK(){var r;if(Vl(Pt)==="undefined")return!1;for(r in Pt)try{HK(kK,r)===-1&&UK(Pt,r)&&Pt[r]!==null&&Vl(Pt[r])==="object"&&WK(Pt[r])}catch{return!0}return!1}Ul=DK();Hl.exports=Ul});var Dl=u((yCr,kl)=>{"use strict";var XK=typeof window<"u";kl.exports=XK});var zl=u((hCr,Jl)=>{"use strict";var JK=Wl(),Xl=Ru(),zK=Dl();function YK(r){if(zK===!1&&!JK)return Xl(r);try{return Xl(r)}catch{return!1}}Jl.exports=YK});var Yl=u((dCr,ZK)=>{ZK.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Kl=u((wCr,Ql)=>{"use strict";var QK=Su(),Fu=A(),KK=Au(),$K=T3(),xK=I3(),r$=zl(),Zl=Yl();function e$(r){var e,t,i,n,a,s,o;if(n=[],KK(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!Fu(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!QK(r))return n;t=$K&&i}for(a in r)!(t&&a==="prototype")&&Fu(r,a)&&n.push(String(a));if(xK)for(e=r$(r),o=0;o<Zl.length;o++)s=Zl[o],!(e&&s==="constructor")&&Fu(r,s)&&n.push(String(s));return n}Ql.exports=e$});var xl=u((bCr,$l)=>{"use strict";var t$=h2(),i$=w2(),n$=mn(),a$=m3(),u$=Kl(),wn;i$?t$()?wn=a$:wn=n$:wn=u$;$l.exports=wn});var Si=u((ECr,r6)=>{"use strict";var s$=xl();r6.exports=s$});var Mu=u((NCr,e6)=>{"use strict";function o$(r){return typeof r=="number"}e6.exports=o$});var Bu=u((ACr,i6)=>{"use strict";function v$(r){return r[0]==="-"}function t6(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function f$(r,e,t){var i=!1,n=e-r.length;return n<0||(v$(r)&&(i=!0,r=r.substr(1)),r=t?r+t6(n):t6(n)+r,i&&(r="-"+r)),r}i6.exports=f$});var s6=u((OCr,u6)=>{"use strict";var l$=Mu(),n6=Bu(),c$=String.prototype.toLowerCase,a6=String.prototype.toUpperCase;function p$(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!l$(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=n6(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=n6(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===a6.call(r.specifier)?a6.call(t):c$.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}u6.exports=p$});var v6=u((SCr,o6)=>{"use strict";function g$(r){return typeof r=="string"}o6.exports=g$});var c6=u((TCr,l6)=>{"use strict";var m$=Mu(),q$=Math.abs,y$=String.prototype.toLowerCase,f6=String.prototype.toUpperCase,st=String.prototype.replace,h$=/e\+(\d)$/,d$=/e-(\d)$/,w$=/^(\d+)$/,b$=/^(\d+)e/,E$=/\.0$/,N$=/\.0*e/,A$=/(\..*[^0])0*e/;function O$(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!m$(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":q$(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=st.call(t,A$,"$1e"),t=st.call(t,N$,"e"),t=st.call(t,E$,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=st.call(t,h$,"e+0$1"),t=st.call(t,d$,"e-0$1"),r.alternate&&(t=st.call(t,w$,"$1."),t=st.call(t,b$,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===f6.call(r.specifier)?f6.call(t):y$.call(t),t}l6.exports=O$});var m6=u((LCr,g6)=>{"use strict";function p6(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function S$(r,e,t){var i=e-r.length;return i<0||(r=t?r+p6(i):p6(i)+r),r}g6.exports=S$});var y6=u((ICr,q6)=>{"use strict";var T$=s6(),L$=v6(),I$=c6(),_$=m6(),P$=Bu(),R$=String.fromCharCode,bn=isNaN,F$=Array.isArray;function M$(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function B$(r){var e,t,i,n,a,s,o,v,f;if(!F$(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",o=1,v=0;v<r.length;v++)if(i=r[v],L$(i))s+=i;else{if(e=i.precision!==void 0,i=M$(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,bn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,bn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=T$(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!bn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=bn(a)?String(i.arg):R$(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=I$(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=P$(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=_$(i.arg,i.width,i.padRight)),s+=i.arg||"",o+=1}return s}q6.exports=B$});var d6=u((_Cr,h6)=>{"use strict";var C$=y6();h6.exports=C$});var b6=u((PCr,w6)=>{"use strict";var En=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j$(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function G$(r){var e,t,i,n;for(t=[],n=0,i=En.exec(r);i;)e=r.slice(n,En.lastIndex-i[0].length),e.length&&t.push(e),t.push(j$(i)),n=En.lastIndex,i=En.exec(r);return e=r.slice(n),e.length&&t.push(e),t}w6.exports=G$});var N6=u((RCr,E6)=>{"use strict";var V$=b6();E6.exports=V$});var O6=u((FCr,A6)=>{"use strict";function U$(r){return typeof r=="string"}A6.exports=U$});var L6=u((MCr,T6)=>{"use strict";var H$=d6(),W$=N6(),k$=O6();function S6(r){var e,t,i;if(!k$(r))throw new TypeError(S6("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=W$(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return H$.apply(null,t)}T6.exports=S6});var S=u((BCr,I6)=>{"use strict";var D$=L6();I6.exports=D$});var P6=u((CCr,_6)=>{"use strict";var X$=Si(),J$=A(),z$=S();function Y$(r,e){var t,i,n;for(t=X$(r),n=0;n<t.length;n++){if(i=t[n],J$(e,i))throw new Error(z$("unexpected error. Property already exists on destination object. Property: %s.",i));e[i]=r[i]}return e}_6.exports=Y$});var Cu=u((jCr,R6)=>{"use strict";var Z$=Fr().isPrimitive;function Q$(r){return Z$(r)&&r>=0}R6.exports=Q$});var ju=u((GCr,F6)=>{"use strict";var K$=Fr().isObject;function $$(r){return K$(r)&&r.valueOf()>=0}F6.exports=$$});var B6=u((VCr,M6)=>{"use strict";var x$=Cu(),rx=ju();function ex(r){return x$(r)||rx(r)}M6.exports=ex});var Le=u((UCr,j6)=>{"use strict";var C6=w(),Gu=B6(),tx=Cu(),ix=ju();C6(Gu,"isPrimitive",tx);C6(Gu,"isObject",ix);j6.exports=Gu});var V6=u((HCr,G6)=>{"use strict";var nx=dn();function ax(r){return nx(r)==="function"}G6.exports=ax});var L=u((WCr,U6)=>{"use strict";var ux=V6();U6.exports=ux});var W6=u((kCr,H6)=>{"use strict";var sx=Object.getPrototypeOf;H6.exports=sx});var D6=u((DCr,k6)=>{"use strict";function ox(r){return r.__proto__}k6.exports=ox});var J6=u((XCr,X6)=>{"use strict";var vx=rr(),fx=D6();function lx(r){var e=fx(r);return e||e===null?e:vx(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}X6.exports=lx});var Y6=u((JCr,z6)=>{"use strict";var cx=L(),px=W6(),gx=J6(),Vu;cx(Object.getPrototypeOf)?Vu=px:Vu=gx;z6.exports=Vu});var Q6=u((zCr,Z6)=>{"use strict";var mx=Y6();function qx(r){return r==null?null:(r=Object(r),mx(r))}Z6.exports=qx});var ot=u((YCr,K6)=>{"use strict";var yx=Q6();K6.exports=yx});var x6=u((ZCr,$6)=>{"use strict";var hx=ot(),dx=rr();function wx(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(dx(r)==="[object Error]")return!0;r=hx(r)}return!1}$6.exports=wx});var ec=u((QCr,rc)=>{"use strict";var bx=x6();rc.exports=bx});var Uu=u((KCr,tc)=>{"use strict";function Ex(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}tc.exports=Ex});var nc=u(($Cr,ic)=>{"use strict";var Nx=Uu(),Ax=Nx();ic.exports=Ax});var sc=u((xCr,uc)=>{"use strict";var Ox=w(),ac=Uu(),Sx=nc();Ox(ac,"REGEXP",Sx);uc.exports=ac});var vc=u((rjr,oc)=>{"use strict";var Tx=z().isPrimitive,Lx=sc(),Ix=S();function _x(r){if(!Tx(r))throw new TypeError(Ix("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=Lx().exec(r),r?new RegExp(r[1],r[2]):null}oc.exports=_x});var lc=u((ejr,fc)=>{"use strict";var Px=vc();fc.exports=Px});var pc=u((tjr,cc)=>{"use strict";var Rx=typeof Object.getOwnPropertyNames<"u";cc.exports=Rx});var mc=u((ijr,gc)=>{"use strict";var Fx=Object.getOwnPropertyNames;function Mx(r){return Fx(Object(r))}gc.exports=Mx});var yc=u((njr,qc)=>{"use strict";var Bx=Si();function Cx(r){return Bx(Object(r))}qc.exports=Cx});var dc=u((ajr,hc)=>{"use strict";var jx=pc(),Gx=mc(),Vx=yc(),Hu;jx?Hu=Gx:Hu=Vx;hc.exports=Hu});var bc=u((ujr,wc)=>{"use strict";var Ux=typeof Object.getOwnPropertyDescriptor<"u";wc.exports=Ux});var Nc=u((sjr,Ec)=>{"use strict";var Hx=Object.getOwnPropertyDescriptor;function Wx(r,e){var t;return r==null?null:(t=Hx(r,e),t===void 0?null:t)}Ec.exports=Wx});var Oc=u((ojr,Ac)=>{"use strict";var kx=A();function Dx(r,e){return kx(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}Ac.exports=Dx});var Tc=u((vjr,Sc)=>{"use strict";var Xx=bc(),Jx=Nc(),zx=Oc(),Wu;Xx?Wu=Jx:Wu=zx;Sc.exports=Wu});var Ic=u((fjr,Lc)=>{"use strict";var Yx=typeof Buffer=="function"?Buffer:null;Lc.exports=Yx});var Pc=u((ljr,_c)=>{"use strict";var Zx=ut(),Nn=Ic();function Qx(){var r,e;if(typeof Nn!="function")return!1;try{typeof Nn.from=="function"?e=Nn.from([1,2,3,4]):e=new Nn([1,2,3,4]),r=Zx(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}_c.exports=Qx});var Fc=u((cjr,Rc)=>{"use strict";var Kx=Pc();Rc.exports=Kx});var Cc=u(An=>{"use strict";An.byteLength=xx;An.toByteArray=err;An.fromByteArray=nrr;var Ur=[],Lr=[],$x=typeof Uint8Array<"u"?Uint8Array:Array,ku="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(vt=0,Mc=ku.length;vt<Mc;++vt)Ur[vt]=ku[vt],Lr[ku.charCodeAt(vt)]=vt;var vt,Mc;Lr["-".charCodeAt(0)]=62;Lr["_".charCodeAt(0)]=63;function Bc(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function xx(r){var e=Bc(r),t=e[0],i=e[1];return(t+i)*3/4-i}function rrr(r,e,t){return(e+t)*3/4-t}function err(r){var e,t=Bc(r),i=t[0],n=t[1],a=new $x(rrr(r,i,n)),s=0,o=n>0?i-4:i,v;for(v=0;v<o;v+=4)e=Lr[r.charCodeAt(v)]<<18|Lr[r.charCodeAt(v+1)]<<12|Lr[r.charCodeAt(v+2)]<<6|Lr[r.charCodeAt(v+3)],a[s++]=e>>16&255,a[s++]=e>>8&255,a[s++]=e&255;return n===2&&(e=Lr[r.charCodeAt(v)]<<2|Lr[r.charCodeAt(v+1)]>>4,a[s++]=e&255),n===1&&(e=Lr[r.charCodeAt(v)]<<10|Lr[r.charCodeAt(v+1)]<<4|Lr[r.charCodeAt(v+2)]>>2,a[s++]=e>>8&255,a[s++]=e&255),a}function trr(r){return Ur[r>>18&63]+Ur[r>>12&63]+Ur[r>>6&63]+Ur[r&63]}function irr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(trr(i));return n.join("")}function nrr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,s=0,o=t-i;s<o;s+=a)n.push(irr(r,s,s+a>o?o:s+a));return i===1?(e=r[t-1],n.push(Ur[e>>2]+Ur[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(Ur[e>>10]+Ur[e>>4&63]+Ur[e<<2&63]+"=")),n.join("")}});var jc=u(Du=>{Du.read=function(r,e,t,i,n){var a,s,o=n*8-i-1,v=(1<<o)-1,f=v>>1,l=-7,c=t?n-1:0,p=t?-1:1,q=r[e+c];for(c+=p,a=q&(1<<-l)-1,q>>=-l,l+=o;l>0;a=a*256+r[e+c],c+=p,l-=8);for(s=a&(1<<-l)-1,a>>=-l,l+=i;l>0;s=s*256+r[e+c],c+=p,l-=8);if(a===0)a=1-f;else{if(a===v)return s?NaN:(q?-1:1)*(1/0);s=s+Math.pow(2,i),a=a-f}return(q?-1:1)*s*Math.pow(2,a-i)};Du.write=function(r,e,t,i,n,a){var s,o,v,f=a*8-n-1,l=(1<<f)-1,c=l>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,q=i?0:a-1,y=i?1:-1,m=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-s))<1&&(s--,v*=2),s+c>=1?e+=p/v:e+=p*Math.pow(2,1-c),e*v>=2&&(s++,v/=2),s+c>=l?(o=0,s=l):s+c>=1?(o=(e*v-1)*Math.pow(2,n),s=s+c):(o=e*Math.pow(2,c-1)*Math.pow(2,n),s=0));n>=8;r[t+q]=o&255,q+=y,o/=256,n-=8);for(s=s<<n|o,f+=n;f>0;r[t+q]=s&255,q+=y,s/=256,f-=8);r[t+q-y]|=m*128}});var Qc=u(Ft=>{"use strict";var Xu=Cc(),Rt=jc(),Gc=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Ft.Buffer=d;Ft.SlowBuffer=frr;Ft.INSPECT_MAX_BYTES=50;var On=2147483647;Ft.kMaxLength=On;d.TYPED_ARRAY_SUPPORT=arr();!d.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function arr(){try{var r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function Xr(r){if(r>On)throw new RangeError('The value "'+r+'" is invalid for option "size"');var e=new Uint8Array(r);return Object.setPrototypeOf(e,d.prototype),e}function d(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return Zu(r)}return Hc(r,e,t)}d.poolSize=8192;function Hc(r,e,t){if(typeof r=="string")return srr(r,e);if(ArrayBuffer.isView(r))return orr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Hr(r,ArrayBuffer)||r&&Hr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Hr(r,SharedArrayBuffer)||r&&Hr(r.buffer,SharedArrayBuffer)))return zu(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return d.from(i,e,t);var n=vrr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return d.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}d.from=function(r,e,t){return Hc(r,e,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function Wc(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function urr(r,e,t){return Wc(r),r<=0?Xr(r):e!==void 0?typeof t=="string"?Xr(r).fill(e,t):Xr(r).fill(e):Xr(r)}d.alloc=function(r,e,t){return urr(r,e,t)};function Zu(r){return Wc(r),Xr(r<0?0:Qu(r)|0)}d.allocUnsafe=function(r){return Zu(r)};d.allocUnsafeSlow=function(r){return Zu(r)};function srr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!d.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var t=kc(r,e)|0,i=Xr(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function Ju(r){for(var e=r.length<0?0:Qu(r.length)|0,t=Xr(e),i=0;i<e;i+=1)t[i]=r[i]&255;return t}function orr(r){if(Hr(r,Uint8Array)){var e=new Uint8Array(r);return zu(e.buffer,e.byteOffset,e.byteLength)}return Ju(r)}function zu(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');var i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,d.prototype),i}function vrr(r){if(d.isBuffer(r)){var e=Qu(r.length)|0,t=Xr(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||Ku(r.length)?Xr(0):Ju(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Ju(r.data)}function Qu(r){if(r>=On)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+On.toString(16)+" bytes");return r|0}function frr(r){return+r!=r&&(r=0),d.alloc(+r)}d.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==d.prototype};d.compare=function(e,t){if(Hr(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),Hr(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var i=e.length,n=t.length,a=0,s=Math.min(i,n);a<s;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};d.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return d.alloc(0);var i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;var n=d.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){var s=e[i];if(Hr(s,Uint8Array))a+s.length>n.length?d.from(s).copy(n,a):Uint8Array.prototype.set.call(n,s,a);else if(d.isBuffer(s))s.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return n};function kc(r,e){if(d.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Hr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);var t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Yu(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Zc(r).length;default:if(n)return i?-1:Yu(r).length;e=(""+e).toLowerCase(),n=!0}}d.byteLength=kc;function lrr(r,e,t){var i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return brr(this,e,t);case"utf8":case"utf-8":return Xc(this,e,t);case"ascii":return drr(this,e,t);case"latin1":case"binary":return wrr(this,e,t);case"base64":return yrr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Err(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}d.prototype._isBuffer=!0;function ft(r,e,t){var i=r[e];r[e]=r[t],r[t]=i}d.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)ft(this,t,t+1);return this};d.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)ft(this,t,t+3),ft(this,t+1,t+2);return this};d.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)ft(this,t,t+7),ft(this,t+1,t+6),ft(this,t+2,t+5),ft(this,t+3,t+4);return this};d.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Xc(this,0,e):lrr.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(e){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:d.compare(this,e)===0};d.prototype.inspect=function(){var e="",t=Ft.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};Gc&&(d.prototype[Gc]=d.prototype.inspect);d.prototype.compare=function(e,t,i,n,a){if(Hr(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;for(var s=a-n,o=i-t,v=Math.min(s,o),f=this.slice(n,a),l=e.slice(t,i),c=0;c<v;++c)if(f[c]!==l[c]){s=f[c],o=l[c];break}return s<o?-1:o<s?1:0};function Dc(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Ku(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=d.from(e,i)),d.isBuffer(e))return e.length===0?-1:Vc(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Vc(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function Vc(r,e,t,i,n){var a=1,s=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,s/=2,o/=2,t/=2}function v(q,y){return a===1?q[y]:q.readUInt16BE(y*a)}var f;if(n){var l=-1;for(f=t;f<s;f++)if(v(r,f)===v(e,l===-1?0:f-l)){if(l===-1&&(l=f),f-l+1===o)return l*a}else l!==-1&&(f-=f-l),l=-1}else for(t+o>s&&(t=s-o),f=t;f>=0;f--){for(var c=!0,p=0;p<o;p++)if(v(r,f+p)!==v(e,p)){c=!1;break}if(c)return f}return-1}d.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};d.prototype.indexOf=function(e,t,i){return Dc(this,e,t,i,!0)};d.prototype.lastIndexOf=function(e,t,i){return Dc(this,e,t,i,!1)};function crr(r,e,t,i){t=Number(t)||0;var n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;var a=e.length;i>a/2&&(i=a/2);for(var s=0;s<i;++s){var o=parseInt(e.substr(s*2,2),16);if(Ku(o))return s;r[t+s]=o}return s}function prr(r,e,t,i){return Sn(Yu(e,r.length-t),r,t,i)}function grr(r,e,t,i){return Sn(Orr(e),r,t,i)}function mrr(r,e,t,i){return Sn(Zc(e),r,t,i)}function qrr(r,e,t,i){return Sn(Srr(e,r.length-t),r,t,i)}d.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return crr(this,e,t,i);case"utf8":case"utf-8":return prr(this,e,t,i);case"ascii":case"latin1":case"binary":return grr(this,e,t,i);case"base64":return mrr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return qrr(this,e,t,i);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function yrr(r,e,t){return e===0&&t===r.length?Xu.fromByteArray(r):Xu.fromByteArray(r.slice(e,t))}function Xc(r,e,t){t=Math.min(r.length,t);for(var i=[],n=e;n<t;){var a=r[n],s=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){var v,f,l,c;switch(o){case 1:a<128&&(s=a);break;case 2:v=r[n+1],(v&192)===128&&(c=(a&31)<<6|v&63,c>127&&(s=c));break;case 3:v=r[n+1],f=r[n+2],(v&192)===128&&(f&192)===128&&(c=(a&15)<<12|(v&63)<<6|f&63,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:v=r[n+1],f=r[n+2],l=r[n+3],(v&192)===128&&(f&192)===128&&(l&192)===128&&(c=(a&15)<<18|(v&63)<<12|(f&63)<<6|l&63,c>65535&&c<1114112&&(s=c))}}s===null?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|s&1023),i.push(s),n+=o}return hrr(i)}var Uc=4096;function hrr(r){var e=r.length;if(e<=Uc)return String.fromCharCode.apply(String,r);for(var t="",i=0;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=Uc));return t}function drr(r,e,t){var i="";t=Math.min(r.length,t);for(var n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function wrr(r,e,t){var i="";t=Math.min(r.length,t);for(var n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function brr(r,e,t){var i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);for(var n="",a=e;a<t;++a)n+=Trr[r[a]];return n}function Err(r,e,t){for(var i=r.slice(e,t),n="",a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}d.prototype.slice=function(e,t){var i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,d.prototype),n};function nr(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||nr(e,t,this.length);for(var n=this[e],a=1,s=0;++s<t&&(a*=256);)n+=this[e+s]*a;return n};d.prototype.readUintBE=d.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||nr(e,t,this.length);for(var n=this[e+--t],a=1;t>0&&(a*=256);)n+=this[e+--t]*a;return n};d.prototype.readUint8=d.prototype.readUInt8=function(e,t){return e=e>>>0,t||nr(e,1,this.length),this[e]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||nr(e,2,this.length),this[e]|this[e+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||nr(e,2,this.length),this[e]<<8|this[e+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||nr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||nr(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};d.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||nr(e,t,this.length);for(var n=this[e],a=1,s=0;++s<t&&(a*=256);)n+=this[e+s]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};d.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||nr(e,t,this.length);for(var n=t,a=1,s=this[e+--n];n>0&&(a*=256);)s+=this[e+--n]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*t)),s};d.prototype.readInt8=function(e,t){return e=e>>>0,t||nr(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};d.prototype.readInt16LE=function(e,t){e=e>>>0,t||nr(e,2,this.length);var i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};d.prototype.readInt16BE=function(e,t){e=e>>>0,t||nr(e,2,this.length);var i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};d.prototype.readInt32LE=function(e,t){return e=e>>>0,t||nr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};d.prototype.readInt32BE=function(e,t){return e=e>>>0,t||nr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};d.prototype.readFloatLE=function(e,t){return e=e>>>0,t||nr(e,4,this.length),Rt.read(this,e,!0,23,4)};d.prototype.readFloatBE=function(e,t){return e=e>>>0,t||nr(e,4,this.length),Rt.read(this,e,!1,23,4)};d.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||nr(e,8,this.length),Rt.read(this,e,!0,52,8)};d.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||nr(e,8,this.length),Rt.read(this,e,!1,52,8)};function pr(r,e,t,i,n,a){if(!d.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){var a=Math.pow(2,8*i)-1;pr(this,e,t,i,a,0)}var s=1,o=0;for(this[t]=e&255;++o<i&&(s*=256);)this[t+o]=e/s&255;return t+i};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){var a=Math.pow(2,8*i)-1;pr(this,e,t,i,a,0)}var s=i-1,o=1;for(this[t+s]=e&255;--s>=0&&(o*=256);)this[t+s]=e/o&255;return t+i};d.prototype.writeUint8=d.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,1,255,0),this[t]=e&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};d.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){var a=Math.pow(2,8*i-1);pr(this,e,t,i,a-1,-a)}var s=0,o=1,v=0;for(this[t]=e&255;++s<i&&(o*=256);)e<0&&v===0&&this[t+s-1]!==0&&(v=1),this[t+s]=(e/o>>0)-v&255;return t+i};d.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){var a=Math.pow(2,8*i-1);pr(this,e,t,i,a-1,-a)}var s=i-1,o=1,v=0;for(this[t+s]=e&255;--s>=0&&(o*=256);)e<0&&v===0&&this[t+s+1]!==0&&(v=1),this[t+s]=(e/o>>0)-v&255;return t+i};d.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};d.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};d.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};d.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};d.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function Jc(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function zc(r,e,t,i,n){return e=+e,t=t>>>0,n||Jc(r,e,t,4,34028234663852886e22,-34028234663852886e22),Rt.write(r,e,t,i,23,4),t+4}d.prototype.writeFloatLE=function(e,t,i){return zc(this,e,t,!0,i)};d.prototype.writeFloatBE=function(e,t,i){return zc(this,e,t,!1,i)};function Yc(r,e,t,i,n){return e=+e,t=t>>>0,n||Jc(r,e,t,8,17976931348623157e292,-17976931348623157e292),Rt.write(r,e,t,i,52,8),t+8}d.prototype.writeDoubleLE=function(e,t,i){return Yc(this,e,t,!0,i)};d.prototype.writeDoubleBE=function(e,t,i){return Yc(this,e,t,!1,i)};d.prototype.copy=function(e,t,i,n){if(!d.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);var a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};d.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!d.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var a=e.charCodeAt(0);(n==="utf8"&&a<128||n==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<i;++s)this[s]=e;else{var o=d.isBuffer(e)?e:d.from(e,n),v=o.length;if(v===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<i-t;++s)this[s+t]=o[s%v]}return this};var Nrr=/[^+/0-9A-Za-z-_]/g;function Arr(r){if(r=r.split("=")[0],r=r.trim().replace(Nrr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function Yu(r,e){e=e||1/0;for(var t,i=r.length,n=null,a=[],s=0;s<i;++s){if(t=r.charCodeAt(s),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(s+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function Orr(r){for(var e=[],t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function Srr(r,e){for(var t,i,n,a=[],s=0;s<r.length&&!((e-=2)<0);++s)t=r.charCodeAt(s),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function Zc(r){return Xu.toByteArray(Arr(r))}function Sn(r,e,t,i){for(var n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function Hr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function Ku(r){return r!==r}var Trr=function(){for(var r="0123456789abcdef",e=new Array(256),t=0;t<16;++t)for(var i=t*16,n=0;n<16;++n)e[i+n]=r[t]+r[n];return e}()});var $c=u((qjr,Kc)=>{"use strict";var Lrr=Qc().Buffer;Kc.exports=Lrr});var rp=u((yjr,xc)=>{"use strict";function Irr(){throw new Error("not implemented")}xc.exports=Irr});var Tn=u((hjr,ep)=>{"use strict";var _rr=Fc(),Prr=$c(),Rrr=rp(),$u;_rr()?$u=Prr:$u=Rrr;ep.exports=$u});var ip=u((djr,tp)=>{"use strict";var Frr=L(),Mrr=Tn(),Brr=Frr(Mrr.from);tp.exports=Brr});var ap=u((wjr,np)=>{"use strict";var Crr=ut(),jrr=Tn();function Grr(r){if(!Crr(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return jrr.from(r)}np.exports=Grr});var sp=u((bjr,up)=>{"use strict";var Vrr=ut(),Urr=Tn();function Hrr(r){if(!Vrr(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new Urr(r)}up.exports=Hrr});var vp=u((Ejr,op)=>{"use strict";var Wrr=ip(),krr=ap(),Drr=sp(),xu;Wrr?xu=krr:xu=Drr;op.exports=xu});var lp=u((Njr,fp)=>{"use strict";var Xrr=rr(),Jrr=typeof Int8Array=="function";function zrr(r){return Jrr&&r instanceof Int8Array||Xrr(r)==="[object Int8Array]"}fp.exports=zrr});var pp=u((Ajr,cp)=>{"use strict";var Yrr=lp();cp.exports=Yrr});var mp=u((Ojr,gp)=>{"use strict";var Zrr=127;gp.exports=Zrr});var yp=u((Sjr,qp)=>{"use strict";var Qrr=-128;qp.exports=Qrr});var dp=u((Tjr,hp)=>{"use strict";var Krr=typeof Int8Array=="function"?Int8Array:null;hp.exports=Krr});var Ep=u((Ljr,bp)=>{"use strict";var $rr=pp(),xrr=mp(),rer=yp(),wp=dp();function eer(){var r,e;if(typeof wp!="function")return!1;try{e=new wp([1,3.14,-3.14,xrr+1]),r=$rr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===rer}catch{r=!1}return r}bp.exports=eer});var Ap=u((Ijr,Np)=>{"use strict";var ter=Ep();Np.exports=ter});var Sp=u((_jr,Op)=>{"use strict";var ier=typeof Int8Array=="function"?Int8Array:void 0;Op.exports=ier});var Lp=u((Pjr,Tp)=>{"use strict";function ner(){throw new Error("not implemented")}Tp.exports=ner});var Ti=u((Rjr,Ip)=>{"use strict";var aer=Ap(),uer=Sp(),ser=Lp(),rs;aer()?rs=uer:rs=ser;Ip.exports=rs});var Pp=u((Fjr,_p)=>{"use strict";var oer=rr(),ver=typeof Uint8Array=="function";function fer(r){return ver&&r instanceof Uint8Array||oer(r)==="[object Uint8Array]"}_p.exports=fer});var Fp=u((Mjr,Rp)=>{"use strict";var ler=Pp();Rp.exports=ler});var Bp=u((Bjr,Mp)=>{"use strict";var cer=255;Mp.exports=cer});var jp=u((Cjr,Cp)=>{"use strict";var per=typeof Uint8Array=="function"?Uint8Array:null;Cp.exports=per});var Up=u((jjr,Vp)=>{"use strict";var ger=Fp(),es=Bp(),Gp=jp();function mer(){var r,e;if(typeof Gp!="function")return!1;try{e=[1,3.14,-3.14,es+1,es+2],e=new Gp(e),r=ger(e)&&e[0]===1&&e[1]===3&&e[2]===es-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Vp.exports=mer});var Wp=u((Gjr,Hp)=>{"use strict";var qer=Up();Hp.exports=qer});var Dp=u((Vjr,kp)=>{"use strict";var yer=typeof Uint8Array=="function"?Uint8Array:void 0;kp.exports=yer});var Jp=u((Ujr,Xp)=>{"use strict";function her(){throw new Error("not implemented")}Xp.exports=her});var Mt=u((Hjr,zp)=>{"use strict";var der=Wp(),wer=Dp(),ber=Jp(),ts;der()?ts=wer:ts=ber;zp.exports=ts});var Zp=u((Wjr,Yp)=>{"use strict";var Eer=rr(),Ner=typeof Uint8ClampedArray=="function";function Aer(r){return Ner&&r instanceof Uint8ClampedArray||Eer(r)==="[object Uint8ClampedArray]"}Yp.exports=Aer});var Kp=u((kjr,Qp)=>{"use strict";var Oer=Zp();Qp.exports=Oer});var xp=u((Djr,$p)=>{"use strict";var Ser=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;$p.exports=Ser});var t4=u((Xjr,e4)=>{"use strict";var Ter=Kp(),r4=xp();function Ler(){var r,e;if(typeof r4!="function")return!1;try{e=new r4([-1,0,1,3.14,4.99,255,256]),r=Ter(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}e4.exports=Ler});var n4=u((Jjr,i4)=>{"use strict";var Ier=t4();i4.exports=Ier});var u4=u((zjr,a4)=>{"use strict";var _er=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;a4.exports=_er});var o4=u((Yjr,s4)=>{"use strict";function Per(){throw new Error("not implemented")}s4.exports=Per});var Li=u((Zjr,v4)=>{"use strict";var Rer=n4(),Fer=u4(),Mer=o4(),is;Rer()?is=Fer:is=Mer;v4.exports=is});var l4=u((Qjr,f4)=>{"use strict";var Ber=rr(),Cer=typeof Int16Array=="function";function jer(r){return Cer&&r instanceof Int16Array||Ber(r)==="[object Int16Array]"}f4.exports=jer});var p4=u((Kjr,c4)=>{"use strict";var Ger=l4();c4.exports=Ger});var m4=u(($jr,g4)=>{"use strict";var Ver=32767;g4.exports=Ver});var y4=u((xjr,q4)=>{"use strict";var Uer=-32768;q4.exports=Uer});var d4=u((rGr,h4)=>{"use strict";var Her=typeof Int16Array=="function"?Int16Array:null;h4.exports=Her});var E4=u((eGr,b4)=>{"use strict";var Wer=p4(),ker=m4(),Der=y4(),w4=d4();function Xer(){var r,e;if(typeof w4!="function")return!1;try{e=new w4([1,3.14,-3.14,ker+1]),r=Wer(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Der}catch{r=!1}return r}b4.exports=Xer});var A4=u((tGr,N4)=>{"use strict";var Jer=E4();N4.exports=Jer});var S4=u((iGr,O4)=>{"use strict";var zer=typeof Int16Array=="function"?Int16Array:void 0;O4.exports=zer});var L4=u((nGr,T4)=>{"use strict";function Yer(){throw new Error("not implemented")}T4.exports=Yer});var Ii=u((aGr,I4)=>{"use strict";var Zer=A4(),Qer=S4(),Ker=L4(),ns;Zer()?ns=Qer:ns=Ker;I4.exports=ns});var P4=u((uGr,_4)=>{"use strict";var $er=rr(),xer=typeof Uint16Array=="function";function rtr(r){return xer&&r instanceof Uint16Array||$er(r)==="[object Uint16Array]"}_4.exports=rtr});var F4=u((sGr,R4)=>{"use strict";var etr=P4();R4.exports=etr});var B4=u((oGr,M4)=>{"use strict";var ttr=65535;M4.exports=ttr});var j4=u((vGr,C4)=>{"use strict";var itr=typeof Uint16Array=="function"?Uint16Array:null;C4.exports=itr});var U4=u((fGr,V4)=>{"use strict";var ntr=F4(),as=B4(),G4=j4();function atr(){var r,e;if(typeof G4!="function")return!1;try{e=[1,3.14,-3.14,as+1,as+2],e=new G4(e),r=ntr(e)&&e[0]===1&&e[1]===3&&e[2]===as-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}V4.exports=atr});var W4=u((lGr,H4)=>{"use strict";var utr=U4();H4.exports=utr});var D4=u((cGr,k4)=>{"use strict";var str=typeof Uint16Array=="function"?Uint16Array:void 0;k4.exports=str});var J4=u((pGr,X4)=>{"use strict";function otr(){throw new Error("not implemented")}X4.exports=otr});var Bt=u((gGr,z4)=>{"use strict";var vtr=W4(),ftr=D4(),ltr=J4(),us;vtr()?us=ftr:us=ltr;z4.exports=us});var Z4=u((mGr,Y4)=>{"use strict";var ctr=rr(),ptr=typeof Int32Array=="function";function gtr(r){return ptr&&r instanceof Int32Array||ctr(r)==="[object Int32Array]"}Y4.exports=gtr});var Ln=u((qGr,Q4)=>{"use strict";var mtr=Z4();Q4.exports=mtr});var Ct=u((yGr,K4)=>{"use strict";var qtr=2147483647;K4.exports=qtr});var x4=u((hGr,$4)=>{"use strict";var ytr=-2147483648;$4.exports=ytr});var e8=u((dGr,r8)=>{"use strict";var htr=typeof Int32Array=="function"?Int32Array:null;r8.exports=htr});var n8=u((wGr,i8)=>{"use strict";var dtr=Ln(),wtr=Ct(),btr=x4(),t8=e8();function Etr(){var r,e;if(typeof t8!="function")return!1;try{e=new t8([1,3.14,-3.14,wtr+1]),r=dtr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===btr}catch{r=!1}return r}i8.exports=Etr});var u8=u((bGr,a8)=>{"use strict";var Ntr=n8();a8.exports=Ntr});var o8=u((EGr,s8)=>{"use strict";var Atr=typeof Int32Array=="function"?Int32Array:void 0;s8.exports=Atr});var f8=u((NGr,v8)=>{"use strict";function Otr(){throw new Error("not implemented")}v8.exports=Otr});var lt=u((AGr,l8)=>{"use strict";var Str=u8(),Ttr=o8(),Ltr=f8(),ss;Str()?ss=Ttr:ss=Ltr;l8.exports=ss});var p8=u((OGr,c8)=>{"use strict";var Itr=rr(),_tr=typeof Uint32Array=="function";function Ptr(r){return _tr&&r instanceof Uint32Array||Itr(r)==="[object Uint32Array]"}c8.exports=Ptr});var Jr=u((SGr,g8)=>{"use strict";var Rtr=p8();g8.exports=Rtr});var q8=u((TGr,m8)=>{"use strict";var Ftr=typeof Uint32Array=="function"?Uint32Array:null;m8.exports=Ftr});var d8=u((LGr,h8)=>{"use strict";var Mtr=Jr(),os=_t(),y8=q8();function Btr(){var r,e;if(typeof y8!="function")return!1;try{e=[1,3.14,-3.14,os+1,os+2],e=new y8(e),r=Mtr(e)&&e[0]===1&&e[1]===3&&e[2]===os-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}h8.exports=Btr});var b8=u((IGr,w8)=>{"use strict";var Ctr=d8();w8.exports=Ctr});var N8=u((_Gr,E8)=>{"use strict";var jtr=typeof Uint32Array=="function"?Uint32Array:void 0;E8.exports=jtr});var O8=u((PGr,A8)=>{"use strict";function Gtr(){throw new Error("not implemented")}A8.exports=Gtr});var vr=u((RGr,S8)=>{"use strict";var Vtr=b8(),Utr=N8(),Htr=O8(),vs;Vtr()?vs=Utr:vs=Htr;S8.exports=vs});var L8=u((FGr,T8)=>{"use strict";var Wtr=rr(),ktr=typeof Float32Array=="function";function Dtr(r){return ktr&&r instanceof Float32Array||Wtr(r)==="[object Float32Array]"}T8.exports=Dtr});var _8=u((MGr,I8)=>{"use strict";var Xtr=L8();I8.exports=Xtr});var R8=u((BGr,P8)=>{"use strict";var Jtr=typeof Float32Array=="function"?Float32Array:null;P8.exports=Jtr});var B8=u((CGr,M8)=>{"use strict";var ztr=_8(),Ytr=P(),F8=R8();function Ztr(){var r,e;if(typeof F8!="function")return!1;try{e=new F8([1,3.14,-3.14,5e40]),r=ztr(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===Ytr}catch{r=!1}return r}M8.exports=Ztr});var j8=u((jGr,C8)=>{"use strict";var Qtr=B8();C8.exports=Qtr});var V8=u((GGr,G8)=>{"use strict";var Ktr=typeof Float32Array=="function"?Float32Array:void 0;G8.exports=Ktr});var H8=u((VGr,U8)=>{"use strict";function $tr(){throw new Error("not implemented")}U8.exports=$tr});var zr=u((UGr,W8)=>{"use strict";var xtr=j8(),rir=V8(),eir=H8(),fs;xtr()?fs=rir:fs=eir;W8.exports=fs});var D8=u((HGr,k8)=>{"use strict";var tir=rr(),iir=typeof Float64Array=="function";function nir(r){return iir&&r instanceof Float64Array||tir(r)==="[object Float64Array]"}k8.exports=nir});var J8=u((WGr,X8)=>{"use strict";var air=D8();X8.exports=air});var Y8=u((kGr,z8)=>{"use strict";var uir=typeof Float64Array=="function"?Float64Array:null;z8.exports=uir});var K8=u((DGr,Q8)=>{"use strict";var sir=J8(),Z8=Y8();function oir(){var r,e;if(typeof Z8!="function")return!1;try{e=new Z8([1,3.14,-3.14,NaN]),r=sir(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}Q8.exports=oir});var ls=u((XGr,$8)=>{"use strict";var vir=K8();$8.exports=vir});var r5=u((JGr,x8)=>{"use strict";var fir=typeof Float64Array=="function"?Float64Array:void 0;x8.exports=fir});var t5=u((zGr,e5)=>{"use strict";function lir(){throw new Error("not implemented")}e5.exports=lir});var cr=u((YGr,i5)=>{"use strict";var cir=ls(),pir=r5(),gir=t5(),cs;cir()?cs=pir:cs=gir;i5.exports=cs});var u5=u((ZGr,a5)=>{"use strict";var mir=Ti(),qir=Mt(),yir=Li(),hir=Ii(),dir=Bt(),wir=lt(),bir=vr(),Eir=zr(),Nir=cr(),n5;function Air(r){return new mir(r)}function Oir(r){return new qir(r)}function Sir(r){return new yir(r)}function Tir(r){return new hir(r)}function Lir(r){return new dir(r)}function Iir(r){return new wir(r)}function _ir(r){return new bir(r)}function Pir(r){return new Eir(r)}function Rir(r){return new Nir(r)}function Fir(){var r={int8array:Air,uint8array:Oir,uint8clampedarray:Sir,int16array:Tir,uint16array:Lir,int32array:Iir,uint32array:_ir,float32array:Pir,float64array:Rir};return r}n5=Fir();a5.exports=n5});var l5=u((QGr,f5)=>{"use strict";var In=A(),ps=lr(),s5=ut(),Mir=ec(),o5=dn(),Bir=lc(),Cir=hn(),v5=Si(),jir=dc(),_i=Tc(),Gir=ot(),Pi=Se(),Vir=vp(),Uir=u5();function Hir(r){var e,t,i,n,a,s,o,v;for(e=[],n=[],o=Object.create(Gir(r)),e.push(r),n.push(o),t=jir(r),v=0;v<t.length;v++)i=t[v],a=_i(r,i),In(a,"value")&&(s=ps(r[i])?[]:{},a.value=ct(r[i],s,e,n,-1)),Pi(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function Wir(r){var e=[],t=[],i,n,a,s,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=v5(r),v=0;v<i.length;v++)s=i[v],n=_i(r,s),In(n,"value")&&(a=ps(r[s])?[]:{},n.value=ct(r[s],a,e,t,-1)),Pi(o,s,n);return o}function ct(r,e,t,i,n){var a,s,o,v,f,l,c,p,q,y;if(n-=1,typeof r!="object"||r===null)return r;if(s5(r))return Vir(r);if(Mir(r))return Wir(r);if(o=o5(r),o==="date")return new Date(+r);if(o==="regexp")return Bir(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=Uir[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?Hir(r):{};if(s=v5(r),n>0)for(a=o,y=0;y<s.length;y++){if(l=s[y],p=r[l],o=o5(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||s5(p)){a==="object"?(v=_i(r,l),In(v,"value")&&(v.value=ct(p)),Pi(e,l,v)):e[l]=ct(p);continue}if(q=Cir(t,p),q!==-1){e[l]=i[q];continue}c=ps(p)?new Array(p.length):{},t.push(p),i.push(c),a==="array"?e[l]=ct(p,c,t,i,n):(v=_i(r,l),In(v,"value")&&(v.value=ct(p,c,t,i,n)),Pi(e,l,v))}else if(o==="array")for(y=0;y<s.length;y++)l=s[y],e[l]=r[l];else for(y=0;y<s.length;y++)l=s[y],v=_i(r,l),Pi(e,l,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}f5.exports=ct});var p5=u((KGr,c5)=>{"use strict";var kir=lr(),Dir=Le().isPrimitive,Xir=P(),Jir=l5();function zir(r,e){var t;if(arguments.length>1){if(!Dir(e))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+e+"`.");if(e===0)return r}else e=Xir;return t=kir(r)?new Array(r.length):{},Jir(r,t,[r],[t],e)}c5.exports=zir});var jt=u(($Gr,g5)=>{"use strict";var Yir=p5();g5.exports=Yir});var m5=u((xGr,Zir)=>{Zir.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var y5=u((rVr,q5)=>{"use strict";var Qir=jt(),Kir=m5();function $ir(){return Qir(Kir)}q5.exports=$ir});var d5=u((eVr,h5)=>{"use strict";var xir=lr();function rnr(r){return typeof r=="object"&&r!==null&&!xir(r)}h5.exports=rnr});var _n=u((tVr,w5)=>{"use strict";var enr=d5();w5.exports=enr});var N5=u((iVr,E5)=>{"use strict";var tnr=_n(),b5=L(),inr=ot(),Pn=A(),nnr=rr(),anr=Object.prototype;function unr(r){var e;for(e in r)if(!Pn(r,e))return!1;return!0}function snr(r){var e;return tnr(r)?(e=inr(r),e?!Pn(r,"constructor")&&Pn(e,"constructor")&&b5(e.constructor)&&nnr(e.constructor)==="[object Function]"&&Pn(e,"isPrototypeOf")&&b5(e.isPrototypeOf)&&(e===anr||unr(r)):!0):!1}E5.exports=snr});var T=u((nVr,A5)=>{"use strict";var onr=N5();A5.exports=onr});var S5=u((aVr,O5)=>{"use strict";var vnr=Se();function fnr(r,e,t){vnr(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}O5.exports=fnr});var L5=u((uVr,T5)=>{"use strict";var lnr=S5();T5.exports=lnr});var _5=u((sVr,I5)=>{"use strict";var cnr=P(),pnr=D();function gnr(r){return r===cnr||r===pnr}I5.exports=gnr});var Ir=u((oVr,P5)=>{"use strict";var mnr=_5();P5.exports=mnr});var F5=u((vVr,R5)=>{"use strict";function qnr(r){return Math.abs(r)}R5.exports=qnr});var Q=u((fVr,M5)=>{"use strict";var ynr=F5();M5.exports=ynr});var C5=u((lVr,B5)=>{"use strict";var hnr=Mt(),dnr=Bt(),wnr={uint16:dnr,uint8:hnr};B5.exports=wnr});var U5=u((cVr,V5)=>{"use strict";var j5=C5(),G5;function bnr(){var r,e;return r=new j5.uint16(1),r[0]=4660,e=new j5.uint8(r.buffer),e[0]===52}G5=bnr();V5.exports=G5});var pt=u((pVr,H5)=>{"use strict";var Enr=U5();H5.exports=Enr});var k5=u((gVr,W5)=>{"use strict";var Nnr=pt(),gs;Nnr===!0?gs=1:gs=0;W5.exports=gs});var J5=u((mVr,X5)=>{"use strict";var Anr=vr(),Onr=cr(),Snr=k5(),D5=new Onr(1),Tnr=new Anr(D5.buffer);function Lnr(r){return D5[0]=r,Tnr[Snr]}X5.exports=Lnr});var er=u((qVr,z5)=>{"use strict";var Inr=J5();z5.exports=Inr});var Z5=u((yVr,Y5)=>{"use strict";var _nr=pt(),ms;_nr===!0?ms=1:ms=0;Y5.exports=ms});var K5=u((hVr,Q5)=>{"use strict";var Pnr=vr(),Rnr=cr(),Fnr=Z5(),qs=new Rnr(1),Mnr=new Pnr(qs.buffer);function Bnr(r,e){return qs[0]=r,Mnr[Fnr]=e>>>0,qs[0]}Q5.exports=Bnr});var Yr=u((dVr,$5)=>{"use strict";var Cnr=K5();$5.exports=Cnr});var Wr=u((wVr,x5)=>{"use strict";var jnr=1023;x5.exports=jnr});var e9=u((bVr,r9)=>{"use strict";function Gnr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}r9.exports=Gnr});var i9=u((EVr,t9)=>{"use strict";function Vnr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}t9.exports=Vnr});var s9=u((NVr,u9)=>{"use strict";var n9=er(),Unr=Yr(),Hnr=b(),Wnr=Wr(),knr=D(),Dnr=e9(),Xnr=i9(),Rn=.6931471803691238,Fn=19082149292705877e-26,Jnr=0x40000000000000,znr=.3333333333333333,a9=1048575,Ynr=2146435072,Znr=1048576,Qnr=1072693248;function Knr(r){var e,t,i,n,a,s,o,v,f,l,c,p;return r===0?knr:Hnr(r)||r<0?NaN:(t=n9(r),a=0,t<Znr&&(a-=54,r*=Jnr,t=n9(r)),t>=Ynr?r+r:(a+=(t>>20)-Wnr|0,t&=a9,v=t+614244&1048576|0,r=Unr(r,t|v^Qnr),a+=v>>20|0,o=r-1,(a9&2+t)<3?o===0?a===0?0:a*Rn+a*Fn:(s=o*o*(.5-znr*o),a===0?o-s:a*Rn-(s-a*Fn-o)):(l=o/(2+o),p=l*l,v=t-398458|0,c=p*p,f=440401-t|0,n=c*Dnr(c),i=p*Xnr(c),v|=f,s=i+n,v>0?(e=.5*o*o,a===0?o-(e-l*(e+s)):a*Rn-(e-(l*(e+s)+a*Fn)-o)):a===0?o-l*(o-s):a*Rn-(l*(o-s)-a*Fn-o))))}u9.exports=Knr});var C=u((AVr,o9)=>{"use strict";var $nr=s9();o9.exports=$nr});var f9=u((OVr,v9)=>{"use strict";var xnr=Math.ceil;v9.exports=xnr});var Ri=u((SVr,l9)=>{"use strict";var rar=f9();l9.exports=rar});var p9=u((TVr,c9)=>{"use strict";var ear=K(),tar=Ri();function iar(r){return r<0?tar(r):ear(r)}c9.exports=iar});var Mn=u((LVr,g9)=>{"use strict";var nar=p9();g9.exports=nar});var q9=u((IVr,m9)=>{"use strict";function aar(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}m9.exports=aar});var h9=u((_Vr,y9)=>{"use strict";function uar(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}y9.exports=uar});var w9=u((PVr,d9)=>{"use strict";var sar=q9(),oar=h9();function far(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*sar(a),i+=n*n*oar(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}d9.exports=far});var ys=u((RVr,b9)=>{"use strict";var lar=w9();b9.exports=lar});var A9=u((FVr,N9)=>{"use strict";var E9=-.16666666666666632,car=.00833333333332249,par=-.0001984126982985795,gar=27557313707070068e-22,mar=-25050760253406863e-24,qar=158969099521155e-24;function yar(r,e){var t,i,n,a;return a=r*r,n=a*a,t=car+a*(par+a*gar)+a*n*(mar+a*qar),i=a*r,e===0?r+i*(E9+a*t):r-(a*(.5*e-i*t)-e-i*E9)}N9.exports=yar});var hs=u((MVr,O9)=>{"use strict";var har=A9();O9.exports=har});var T9=u((BVr,S9)=>{"use strict";var dar=pt(),ds;dar===!0?ds=0:ds=1;S9.exports=ds});var _9=u((CVr,I9)=>{"use strict";var war=vr(),bar=cr(),Ear=T9(),L9=new bar(1),Nar=new war(L9.buffer);function Aar(r){return L9[0]=r,Nar[Ear]}I9.exports=Aar});var R9=u((jVr,P9)=>{"use strict";var Oar=_9();P9.exports=Oar});var B9=u((GVr,M9)=>{"use strict";var Sar=pt(),F9,ws,bs;Sar===!0?(ws=1,bs=0):(ws=0,bs=1);F9={HIGH:ws,LOW:bs};M9.exports=F9});var U9=u((VVr,V9)=>{"use strict";var Tar=vr(),Lar=cr(),j9=B9(),G9=new Lar(1),C9=new Tar(G9.buffer),Iar=j9.HIGH,_ar=j9.LOW;function Par(r,e){return C9[Iar]=r,C9[_ar]=e,G9[0]}V9.exports=Par});var Fi=u((UVr,H9)=>{"use strict";var Rar=U9();H9.exports=Rar});var Es=u((HVr,W9)=>{"use strict";var Far=1023;W9.exports=Far});var D9=u((WVr,k9)=>{"use strict";var Mar=-1023;k9.exports=Mar});var Ns=u((kVr,X9)=>{"use strict";var Bar=-1074;X9.exports=Bar});var Y9=u((DVr,z9)=>{"use strict";var Car=pt(),J9,As,Os;Car===!0?(As=1,Os=0):(As=0,Os=1);J9={HIGH:As,LOW:Os};z9.exports=J9});var x9=u((XVr,$9)=>{"use strict";var jar=vr(),Gar=cr(),Q9=Y9(),K9=new Gar(1),Z9=new jar(K9.buffer),Var=Q9.HIGH,Uar=Q9.LOW;function Har(r,e){return K9[0]=e,r[0]=Z9[Var],r[1]=Z9[Uar],r}$9.exports=Har});var t7=u((JVr,e7)=>{"use strict";var r7=x9();function War(r,e){return arguments.length===1?r7([0,0],r):r7(r,e)}e7.exports=War});var Gt=u((zVr,i7)=>{"use strict";var kar=t7();i7.exports=kar});var a7=u((YVr,n7)=>{"use strict";var Dar=Gt(),Xar=er(),Jar=Fi(),zar=2147483648>>>0,Yar=2147483647,Ss=[0,0];function Zar(r,e){var t,i;return Dar(Ss,r),t=Ss[0],t&=Yar,i=Xar(e),i&=zar,t|=i,Jar(t,Ss[1])}n7.exports=Zar});var Bn=u((ZVr,u7)=>{"use strict";var Qar=a7();u7.exports=Qar});var Ts=u((QVr,s7)=>{"use strict";var Kar=22250738585072014e-324;s7.exports=Kar});var v7=u((KVr,o7)=>{"use strict";var $ar=Ts(),xar=Ir(),r0r=b(),e0r=Q(),t0r=4503599627370496;function i0r(r,e){return r0r(e)||xar(e)?(r[0]=e,r[1]=0,r):e!==0&&e0r(e)<$ar?(r[0]=e*t0r,r[1]=-52,r):(r[0]=e,r[1]=0,r)}o7.exports=i0r});var c7=u(($Vr,l7)=>{"use strict";var f7=v7();function n0r(r,e){return arguments.length===1?f7([0,0],r):f7(r,e)}l7.exports=n0r});var g7=u((xVr,p7)=>{"use strict";var a0r=c7();p7.exports=a0r});var q7=u((rUr,m7)=>{"use strict";var u0r=2146435072;m7.exports=u0r});var h7=u((eUr,y7)=>{"use strict";var s0r=er(),o0r=q7(),v0r=Wr();function f0r(r){var e=s0r(r);return e=(e&o0r)>>>20,e-v0r|0}y7.exports=f0r});var w7=u((tUr,d7)=>{"use strict";var l0r=h7();d7.exports=l0r});var E7=u((iUr,b7)=>{"use strict";var c0r=P(),p0r=D(),g0r=Wr(),m0r=Es(),q0r=D9(),y0r=Ns(),h0r=b(),d0r=Ir(),w0r=Bn(),b0r=g7(),E0r=w7(),N0r=Gt(),A0r=Fi(),O0r=2220446049250313e-31,S0r=2148532223>>>0,Ls=[0,0],Is=[0,0];function T0r(r,e){var t,i;return e===0||r===0||h0r(r)||d0r(r)?r:(b0r(Ls,r),r=Ls[0],e+=Ls[1],e+=E0r(r),e<y0r?w0r(0,r):e>m0r?r<0?p0r:c0r:(e<=q0r?(e+=52,i=O0r):i=1,N0r(Is,r),t=Is[0],t&=S0r,t|=e+g0r<<20,i*A0r(t,Is[1])))}b7.exports=T0r});var Cn=u((nUr,N7)=>{"use strict";var L0r=E7();N7.exports=L0r});var O7=u((aUr,A7)=>{"use strict";function I0r(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}A7.exports=I0r});var _s=u((uUr,S7)=>{"use strict";var _0r=O7();S7.exports=_0r});var L7=u((sUr,T7)=>{"use strict";var P0r=_s();function R0r(r){return P0r(0,r)}T7.exports=R0r});var _7=u((oUr,I7)=>{"use strict";var F0r=L7();I7.exports=F0r});var B7=u((vUr,M7)=>{"use strict";var M0r=K(),jn=Cn(),Un=_7(),R7=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],B0r=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ps=16777216,Rs=5960464477539063e-23,Gn=Un(20),P7=Un(20),Vn=Un(20),sr=Un(20);function F7(r,e,t,i,n,a,s,o,v){var f,l,c,p,q,y,m,g,h;for(p=a,h=i[t],g=t,q=0;g>0;q++)l=Rs*h|0,sr[q]=h-Ps*l|0,h=i[g-1]+l,g-=1;if(h=jn(h,n),h-=8*M0r(h*.125),m=h|0,h-=m,c=0,n>0?(q=sr[t-1]>>24-n,m+=q,sr[t-1]-=q<<24-n,c=sr[t-1]>>23-n):n===0?c=sr[t-1]>>23:h>=.5&&(c=2),c>0){for(m+=1,f=0,q=0;q<t;q++)g=sr[q],f===0?g!==0&&(f=1,sr[q]=16777216-g):sr[q]=16777215-g;if(n>0)switch(n){case 1:sr[t-1]&=8388607;break;case 2:sr[t-1]&=4194303;break}c===2&&(h=1-h,f!==0&&(h-=jn(1,n)))}if(h===0){for(g=0,q=t-1;q>=a;q--)g|=sr[q];if(g===0){for(y=1;sr[a-y]===0;y++);for(q=t+1;q<=t+y;q++){for(v[o+q]=R7[s+q],l=0,g=0;g<=o;g++)l+=r[g]*v[o+(q-g)];i[q]=l}return t+=y,F7(r,e,t,i,n,a,s,o,v)}}if(h===0)for(t-=1,n-=24;sr[t]===0;)t-=1,n-=24;else h=jn(h,-n),h>=Ps?(l=Rs*h|0,sr[t]=h-Ps*l|0,t+=1,n+=24,sr[t]=l):sr[t]=h|0;for(l=jn(1,n),q=t;q>=0;q--)i[q]=l*sr[q],l*=Rs;for(q=t;q>=0;q--){for(l=0,y=0;y<=p&&y<=t-q;y++)l+=B0r[y]*i[q+y];Vn[t-q]=l}for(l=0,q=t;q>=0;q--)l+=Vn[q];for(c===0?e[0]=l:e[0]=-l,l=Vn[0]-l,q=1;q<=t;q++)l+=Vn[q];return c===0?e[1]=l:e[1]=-l,m&7}function C0r(r,e,t,i){var n,a,s,o,v,f,l,c,p;for(a=4,o=i-1,s=(t-3)/24|0,s<0&&(s=0),f=t-24*(s+1),c=s-o,p=o+a,l=0;l<=p;l++)c<0?Gn[l]=0:Gn[l]=R7[c],c+=1;for(l=0;l<=a;l++){for(n=0,c=0;c<=o;c++)n+=r[c]*Gn[o+(l-c)];P7[l]=n}return v=a,F7(r,e,v,P7,f,a,s,o,Gn)}M7.exports=C0r});var j7=u((fUr,C7)=>{"use strict";var j0r=Math.round;C7.exports=j0r});var Fs=u((lUr,G7)=>{"use strict";var G0r=j7();G7.exports=G0r});var W7=u((cUr,H7)=>{"use strict";var V0r=Fs(),V7=er(),U0r=.6366197723675814,H0r=1.5707963267341256,W0r=6077100506506192e-26,k0r=6077100506303966e-26,D0r=20222662487959506e-37,X0r=20222662487111665e-37,J0r=84784276603689e-45,U7=2047;function z0r(r,e,t){var i,n,a,s,o,v,f;return n=V0r(r*U0r),s=r-n*H0r,o=n*W0r,f=e>>20|0,t[0]=s-o,i=V7(t[0]),v=f-(i>>20&U7),v>16&&(a=s,o=n*k0r,s=a-o,o=n*D0r-(a-s-o),t[0]=s-o,i=V7(t[0]),v=f-(i>>20&U7),v>49&&(a=s,o=n*X0r,s=a-o,o=n*J0r-(a-s-o),t[0]=s-o)),t[1]=s-t[0]-o,n}H7.exports=z0r});var D7=u((pUr,k7)=>{"use strict";var Y0r=er(),Z0r=R9(),Q0r=Fi(),K0r=B7(),Hn=W7(),$0r=0,x0r=16777216,Ie=1.5707963267341256,gt=6077100506506192e-26,Wn=2*gt,kn=3*gt,Dn=4*gt,rur=2147483647,eur=2146435072,tur=1048575,iur=598523,nur=1072243195,aur=1073928572,uur=1074752122,sur=1074977148,our=1075183036,vur=1075388923,fur=1075594811,lur=1094263291,Mi=[0,0,0],Bi=[0,0];function cur(r,e){var t,i,n,a,s,o,v,f;if(n=Y0r(r),a=n&rur|0,a<=nur)return e[0]=r,e[1]=0,0;if(a<=uur)return(a&tur)===iur?Hn(r,a,e):a<=aur?r>0?(f=r-Ie,e[0]=f-gt,e[1]=f-e[0]-gt,1):(f=r+Ie,e[0]=f+gt,e[1]=f-e[0]+gt,-1):r>0?(f=r-2*Ie,e[0]=f-Wn,e[1]=f-e[0]-Wn,2):(f=r+2*Ie,e[0]=f+Wn,e[1]=f-e[0]+Wn,-2);if(a<=fur)return a<=our?a===sur?Hn(r,a,e):r>0?(f=r-3*Ie,e[0]=f-kn,e[1]=f-e[0]-kn,3):(f=r+3*Ie,e[0]=f+kn,e[1]=f-e[0]+kn,-3):a===vur?Hn(r,a,e):r>0?(f=r-4*Ie,e[0]=f-Dn,e[1]=f-e[0]-Dn,4):(f=r+4*Ie,e[0]=f+Dn,e[1]=f-e[0]+Dn,-4);if(a<lur)return Hn(r,a,e);if(a>=eur)return e[0]=NaN,e[1]=NaN,0;for(t=Z0r(r),i=(a>>20)-1046,f=Q0r(a-(i<<20|0),t),o=0;o<2;o++)Mi[o]=f|0,f=(f-Mi[o])*x0r;for(Mi[2]=f,s=3;Mi[s-1]===$0r;)s-=1;return v=K0r(Mi,Bi,i,s,1),r<0?(e[0]=-Bi[0],e[1]=-Bi[1],-v):(e[0]=Bi[0],e[1]=Bi[1],v)}k7.exports=cur});var Ci=u((gUr,X7)=>{"use strict";var pur=D7();X7.exports=pur});var Y7=u((mUr,z7)=>{"use strict";var gur=er(),Ms=ys(),J7=hs(),mur=Ci(),Zr=[0,0],qur=2147483647,yur=1072243195,hur=1044381696,dur=2146435072;function wur(r){var e,t;if(e=gur(r),e&=qur,e<=yur)return e<hur?1:Ms(r,0);if(e>=dur)return NaN;switch(t=mur(r,Zr),t&3){case 0:return Ms(Zr[0],Zr[1]);case 1:return-J7(Zr[0],Zr[1]);case 2:return-Ms(Zr[0],Zr[1]);default:return J7(Zr[0],Zr[1])}}z7.exports=wur});var mt=u((qUr,Z7)=>{"use strict";var bur=Y7();Z7.exports=bur});var $7=u((yUr,K7)=>{"use strict";var Eur=er(),Q7=ys(),Bs=hs(),Nur=Ci(),Aur=2147483647,Our=2146435072,Sur=1072243195,Tur=1045430272,Qr=[0,0];function Lur(r){var e,t;if(e=Eur(r),e&=Aur,e<=Sur)return e<Tur?r:Bs(r,0);if(e>=Our)return NaN;switch(t=Nur(r,Qr),t&3){case 0:return Bs(Qr[0],Qr[1]);case 1:return Q7(Qr[0],Qr[1]);case 2:return-Bs(Qr[0],Qr[1]);default:return-Q7(Qr[0],Qr[1])}}K7.exports=Lur});var Vt=u((hUr,x7)=>{"use strict";var Iur=$7();x7.exports=Iur});var Or=u((dUr,rg)=>{"use strict";var _ur=3.141592653589793;rg.exports=_ur});var ig=u((wUr,tg)=>{"use strict";var Pur=b(),Rur=Ir(),eg=mt(),Cs=Vt(),Fur=Q(),ji=Bn(),Gi=Or();function Mur(r){var e,t;return Pur(r)?NaN:Rur(r)?NaN:(t=r%2,e=Fur(t),e===0||e===1?ji(0,t):e<.25?Cs(Gi*t):e<.75?(e=.5-e,ji(eg(Gi*e),t)):e<1.25?(t=ji(1,t)-t,Cs(Gi*t)):e<1.75?(e-=1.5,-ji(eg(Gi*e),t)):(t-=ji(2,t),Cs(Gi*t)))}tg.exports=Mur});var Vi=u((bUr,ng)=>{"use strict";var Bur=ig();ng.exports=Bur});var ug=u((EUr,ag)=>{"use strict";function Cur(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}ag.exports=Cur});var og=u((NUr,sg)=>{"use strict";function jur(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}sg.exports=jur});var fg=u((AUr,vg)=>{"use strict";function Gur(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}vg.exports=Gur});var cg=u((OUr,lg)=>{"use strict";function Vur(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}lg.exports=Vur});var gg=u((SUr,pg)=>{"use strict";function Uur(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}pg.exports=Uur});var qg=u((TUr,mg)=>{"use strict";function Hur(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}mg.exports=Hur});var hg=u((LUr,yg)=>{"use strict";function Wur(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}yg.exports=Wur});var wg=u((IUr,dg)=>{"use strict";function kur(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}dg.exports=kur});var Eg=u((_Ur,bg)=>{"use strict";function Dur(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}bg.exports=Dur});var Ag=u((PUr,Ng)=>{"use strict";function Xur(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}Ng.exports=Xur});var Tg=u((RUr,Sg)=>{"use strict";var Jur=b(),zur=Ir(),Yur=Q(),Ut=C(),Zur=Mn(),Qur=Vi(),Kur=Or(),js=P(),$ur=ug(),xur=og(),rsr=fg(),esr=cg(),tsr=gg(),isr=qg(),nsr=hg(),asr=wg(),usr=Eg(),ssr=Ag(),osr=.07721566490153287,vsr=.3224670334241136,fsr=1,lsr=-.07721566490153287,csr=.48383612272381005,psr=-.1475877229945939,gsr=.06462494023913339,msr=-.07721566490153287,qsr=1,ysr=.4189385332046727,Xn=1.4616321449683622,hsr=4503599627370496,dsr=0x400000000000000,wsr=8470329472543003e-37,Og=1.4616321449683622,bsr=-.12148629053584961,Esr=-3638676997039505e-33;function Nsr(r){var e,t,i,n,a,s,o,v,f,l,c,p,q;if(Jur(r)||zur(r))return r;if(r===0)return js;if(r<0?(e=!0,r=-r):e=!1,r<wsr)return-Ut(r);if(e){if(r>=hsr||(f=Qur(r),f===0))return js;t=Ut(Kur/Yur(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(q=-Ut(r),r>=Xn-1+.27?(c=1-r,i=0):r>=Xn-1-.27?(c=r-(Og-1),i=1):(c=r,i=2)):(q=0,r>=Xn+.27?(c=2-r,i=0):r>=Xn-.27?(c=r-Og,i=1):(c=r-1,i=2)),i){case 0:p=c*c,s=osr+p*$ur(p),a=p*(vsr+p*xur(p)),o=c*s+a,q+=o-.5*c;break;case 1:p=c*c,l=p*c,s=csr+l*tsr(l),a=psr+l*isr(l),n=gsr+l*nsr(l),o=p*s-(Esr-l*(a+c*n)),q+=bsr+o;break;case 2:s=c*(msr+c*asr(c)),a=qsr+c*usr(c),q+=-.5*c+s/a;break}else if(r<8)switch(i=Zur(r),c=r-i,o=c*(lsr+c*esr(c)),v=fsr+c*rsr(c),q=.5*c+o/v,p=1,i){case 7:p*=c+6;case 6:p*=c+5;case 5:p*=c+4;case 4:p*=c+3;case 3:p*=c+2,q+=Ut(p)}else r<dsr?(f=Ut(r),p=1/r,c=p*p,l=ysr+p*ssr(c),q=(r-.5)*(f-1)+l):q=r*(Ut(r)-1);return e&&(q=t-q),q}Sg.exports=Nsr});var Ui=u((FUr,Lg)=>{"use strict";var Asr=Tg();Lg.exports=Asr});var _g=u((MUr,Ig)=>{"use strict";var Osr=D();function Ssr(r){return r===0&&1/r===Osr}Ig.exports=Ssr});var Gs=u((BUr,Pg)=>{"use strict";var Tsr=_g();Pg.exports=Tsr});var Vs=u((CUr,Rg)=>{"use strict";var Lsr=2.5066282746310007;Rg.exports=Lsr});var Mg=u((jUr,Fg)=>{"use strict";var Isr=Ar();function _sr(r){return Isr(r/2)}Fg.exports=_sr});var Jn=u((GUr,Bg)=>{"use strict";var Psr=Mg();Bg.exports=Psr});var Gg=u((VUr,jg)=>{"use strict";var Cg=Jn();function Rsr(r){return r>0?Cg(r-1):Cg(r+1)}jg.exports=Rsr});var Us=u((UUr,Vg)=>{"use strict";var Fsr=Gg();Vg.exports=Fsr});var Hg=u((HUr,Ug)=>{"use strict";var Msr=Math.sqrt;Ug.exports=Msr});var V=u((WUr,Wg)=>{"use strict";var Bsr=Hg();Wg.exports=Bsr});var Dg=u((kUr,kg)=>{"use strict";var Csr=pt(),Hs;Csr===!0?Hs=0:Hs=1;kg.exports=Hs});var Jg=u((DUr,Xg)=>{"use strict";var jsr=vr(),Gsr=cr(),Vsr=Dg(),Ws=new Gsr(1),Usr=new jsr(Ws.buffer);function Hsr(r,e){return Ws[0]=r,Usr[Vsr]=e>>>0,Ws[0]}Xg.exports=Hsr});var Kr=u((XUr,zg)=>{"use strict";var Wsr=Jg();zg.exports=Wsr});var Zg=u((JUr,Yg)=>{"use strict";function ksr(r){return r|0}Yg.exports=ksr});var ks=u((zUr,Qg)=>{"use strict";var Dsr=Zg();Qg.exports=Dsr});var xg=u((YUr,$g)=>{"use strict";var Kg=Us(),Xsr=Bn(),Jsr=D(),zn=P();function zsr(r,e){return e===Jsr?zn:e===zn?0:e>0?Kg(e)?r:0:Kg(e)?Xsr(zn,r):zn}$g.exports=zsr});var em=u((ZUr,rm)=>{"use strict";var Ysr=er(),Zsr=2147483647,Qsr=1072693247,Yn=1e300,Zn=1e-300;function Ksr(r,e){var t,i;return i=Ysr(r),t=i&Zsr,t<=Qsr?e<0?Yn*Yn:Zn*Zn:e>0?Yn*Yn:Zn*Zn}rm.exports=Ksr});var nm=u((QUr,im)=>{"use strict";var $sr=Q(),tm=P();function xsr(r,e){return r===-1?(r-r)/(r-r):r===1?1:$sr(r)<1==(e===tm)?0:tm}im.exports=xsr});var um=u((KUr,am)=>{"use strict";function ror(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}am.exports=ror});var fm=u(($Ur,vm)=>{"use strict";var eor=er(),Qn=Kr(),sm=Yr(),tor=Wr(),ior=um(),nor=1048575,om=1048576,aor=1072693248,uor=536870912,sor=524288,oor=20,vor=9007199254740992,lor=.9617966939259756,cor=.9617967009544373,por=-7028461650952758e-24,gor=[1,1.5],mor=[0,.5849624872207642],qor=[0,1350039202129749e-23];function yor(r,e,t){var i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N,G,O,J,ar,k;return J=0,t<om&&(e*=vor,J-=53,t=eor(e)),J+=(t>>oor)-tor|0,ar=t&nor|0,t=ar|aor|0,ar<=235662?k=0:ar<767610?k=1:(k=0,J+=1,t-=om),e=sm(e,t),l=gor[k],G=e-l,O=1/(e+l),n=G*O,s=Qn(n,0),i=(t>>1|uor)+sor,i+=k<<18,v=sm(0,i),f=e-(v-l),o=O*(G-s*v-s*f),a=n*n,N=a*a*ior(a),N+=o*(s+n),a=s*s,v=3+a+N,v=Qn(v,0),f=N-(v-3-a),G=s*v,O=o*v+f*n,p=G+O,p=Qn(p,0),q=O-(p-G),y=cor*p,m=por*p+q*lor+qor[k],c=mor[k],E=J,g=y+m+c+E,g=Qn(g,0),h=m-(g-E-c-y),r[0]=g,r[1]=h,r}vm.exports=yor});var cm=u((xUr,lm)=>{"use strict";function hor(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}lm.exports=hor});var gm=u((rHr,pm)=>{"use strict";var dor=Kr(),wor=cm(),bor=1.4426950408889634,Eor=1.4426950216293335,Nor=19259629911266175e-24;function Aor(r,e){var t,i,n,a,s,o;return n=e-1,a=n*n*wor(n),s=Eor*n,o=n*Nor-a*bor,i=s+o,i=dor(i,0),t=o-(i-s),r[0]=i,r[1]=t,r}pm.exports=Aor});var Kn=u((eHr,mm)=>{"use strict";var Oor=.6931471805599453;mm.exports=Oor});var ym=u((tHr,qm)=>{"use strict";function Sor(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}qm.exports=Sor});var Am=u((iHr,Nm)=>{"use strict";var Tor=er(),hm=Yr(),Lor=Kr(),Ior=ks(),_or=Cn(),Por=Kn(),dm=Wr(),Ror=ym(),wm=2147483647,bm=1048575,Em=1048576,For=1071644672,Hi=20,Mor=.6931471824645996,Bor=-1904654299957768e-24;function Cor(r,e,t){var i,n,a,s,o,v,f,l,c,p,q;return p=r&wm|0,q=(p>>Hi)-dm|0,c=0,p>For&&(c=r+(Em>>q+1)>>>0,q=((c&wm)>>Hi)-dm|0,i=(c&~(bm>>q))>>>0,a=hm(0,i),c=(c&bm|Em)>>Hi-q>>>0,r<0&&(c=-c),e-=a),a=t+e,a=Lor(a,0),o=a*Mor,v=(t-(a-e))*Por+a*Bor,l=o+v,f=v-(l-o),a=l*l,n=l-a*Ror(a),s=l*n/(n-2)-(f+l*f),l=1-(s-l),r=Tor(l),r=Ior(r),r+=c<<Hi>>>0,r>>Hi<=0?l=_or(l,c):l=hm(l,r),l}Nm.exports=Cor});var Bm=u((nHr,Mm)=>{"use strict";var Om=b(),Sm=Us(),Tm=Ir(),jor=Ar(),Lm=V(),Gor=Q(),Ds=Gt(),Vor=Kr(),Im=ks(),Uor=D(),Hor=P(),Wor=xg(),kor=em(),Dor=nm(),Xor=fm(),Jor=gm(),zor=Am(),Xs=2147483647,Yor=1072693247,Zor=1105199104,Qor=1139802112,_m=1083179008,Kor=1072693248,$or=1083231232,xor=3230714880>>>0,Pm=31,_e=1e300,Pe=1e-300,r1r=8008566259537294e-32,$r=[0,0],Rm=[0,0];function Fm(r,e){var t,i,n,a,s,o,v,f,l,c,p,q,y,m,g,h;if(Om(r)||Om(e))return NaN;if(Ds($r,e),o=$r[0],v=$r[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return Lm(r);if(e===-.5)return 1/Lm(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(Tm(e))return Dor(r,e)}if(Ds($r,r),a=$r[0],s=$r[1],s===0){if(a===0)return Wor(r,e);if(r===1)return 1;if(r===-1&&Sm(e))return-1;if(Tm(r))return r===Uor?Fm(-0,-e):e<0?0:Hor}if(r<0&&jor(e)===!1)return(r-r)/(r-r);if(n=Gor(r),t=a&Xs|0,i=o&Xs|0,f=a>>>Pm|0,l=o>>>Pm|0,f&&Sm(e)?f=-1:f=1,i>Zor){if(i>Qor)return kor(r,e);if(t<Yor)return l===1?f*_e*_e:f*Pe*Pe;if(t>Kor)return l===0?f*_e*_e:f*Pe*Pe;y=Jor(Rm,n)}else y=Xor(Rm,n,t);if(c=Vor(e,0),q=(e-c)*y[0]+e*y[1],p=c*y[0],m=q+p,Ds($r,m),g=Im($r[0]),h=Im($r[1]),g>=_m){if((g-_m|h)!==0||q+r1r>m-p)return f*_e*_e}else if((g&Xs)>=$or&&((g-xor|h)!==0||q<=m-p))return f*Pe*Pe;return m=zor(g,p,q),f*m}Mm.exports=Fm});var Z=u((aHr,Cm)=>{"use strict";var e1r=Bm();Cm.exports=e1r});var Gm=u((uHr,jm)=>{"use strict";function t1r(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}jm.exports=t1r});var Um=u((sHr,Vm)=>{"use strict";var i1r=Cn(),n1r=Gm();function a1r(r,e,t){var i,n,a,s;return i=r-e,n=i*i,a=i-n*n1r(n),s=1-(e-i*a/(2-a)-r),i1r(s,t)}Vm.exports=a1r});var Jm=u((oHr,Xm)=>{"use strict";var u1r=b(),Hm=Mn(),s1r=D(),Wm=P(),o1r=Um(),v1r=.6931471803691238,f1r=19082149292705877e-26,km=1.4426950408889634,l1r=709.782712893384,c1r=-745.1332191019411,Dm=1/(1<<28),p1r=-Dm;function g1r(r){var e,t,i;return u1r(r)||r===Wm?r:r===s1r?0:r>l1r?Wm:r<c1r?0:r>p1r&&r<Dm?1+r:(r<0?i=Hm(km*r-.5):i=Hm(km*r+.5),e=r-i*v1r,t=i*f1r,o1r(e,t,i))}Xm.exports=g1r});var or=u((vHr,zm)=>{"use strict";var m1r=Jm();zm.exports=m1r});var Zm=u((fHr,Ym)=>{"use strict";function q1r(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}Ym.exports=q1r});var $m=u((lHr,Km)=>{"use strict";var y1r=Vs(),Qm=Z(),h1r=or(),d1r=Zm(),w1r=143.01608;function b1r(r){var e,t,i;return e=1/r,e=1+e*d1r(e),t=h1r(r),r>w1r?(i=Qm(r,.5*r-.25),t=i*(i/t)):t=Qm(r,r-.5)/t,y1r*t*e}Km.exports=b1r});var rq=u((cHr,xm)=>{"use strict";var E1r=.5772156649015329;xm.exports=E1r});var tq=u((pHr,eq)=>{"use strict";var N1r=rq();function A1r(r,e){return e/((1+N1r*r)*r)}eq.exports=A1r});var nq=u((gHr,iq)=>{"use strict";function O1r(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}iq.exports=O1r});var cq=u((mHr,lq)=>{"use strict";var S1r=b(),T1r=Ar(),L1r=Gs(),aq=Q(),I1r=K(),_1r=Vt(),uq=P(),sq=D(),oq=Or(),vq=$m(),fq=tq(),P1r=nq();function R1r(r){var e,t,i,n;if(T1r(r)&&r<0||r===sq||S1r(r))return NaN;if(r===0)return L1r(r)?sq:uq;if(r>171.61447887182297)return uq;if(r<-170.5674972726612)return 0;if(t=aq(r),t>33)return r>=0?vq(r):(i=I1r(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*_1r(oq*n),e*oq/(aq(n)*vq(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return fq(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return fq(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*P1r(r))}lq.exports=R1r});var Ht=u((qHr,pq)=>{"use strict";var F1r=cq();pq.exports=F1r});var Js=u((yHr,gq)=>{"use strict";var M1r=14901161193847656e-24;gq.exports=M1r});var qq=u((hHr,mq)=>{"use strict";var B1r=17976931348623157e292;mq.exports=B1r});var $n=u((dHr,yq)=>{"use strict";var C1r=709.782712893384;yq.exports=C1r});var dq=u((wHr,hq)=>{"use strict";var j1r=or();function G1r(r,e){var t,i,n,a;if(n=j1r(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}hq.exports=G1r});var bq=u((bHr,wq)=>{"use strict";function V1r(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}wq.exports=V1r});var Nq=u((EHr,Eq)=>{"use strict";function U1r(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}Eq.exports=U1r});var Oq=u((NHr,Aq)=>{"use strict";function H1r(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}Aq.exports=H1r});var Tq=u((AHr,Sq)=>{"use strict";function W1r(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}Sq.exports=W1r});var Iq=u((OHr,Lq)=>{"use strict";function k1r(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}Lq.exports=k1r});var Pq=u((SHr,_q)=>{"use strict";function D1r(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}_q.exports=D1r});var Fq=u((THr,Rq)=>{"use strict";function X1r(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}Rq.exports=X1r});var Bq=u((LHr,Mq)=>{"use strict";function J1r(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}Mq.exports=J1r});var Vq=u((IHr,Gq)=>{"use strict";var z1r=b(),Cq=or(),Y1r=Kr(),Z1r=P(),Q1r=D(),K1r=bq(),$1r=Nq(),x1r=Oq(),rvr=Tq(),evr=Iq(),tvr=Pq(),ivr=Fq(),nvr=Bq(),xn=1e-300,avr=13877787807814457e-33,jq=.8450629115104675,uvr=.12837916709551256,svr=1,ovr=-.0023621185607526594,vvr=1,fvr=-.009864944034847148,lvr=1,cvr=-.0098649429247001,pvr=1;function gvr(r){var e,t,i,n,a,s,o,v;if(z1r(r))return NaN;if(r===Z1r)return 0;if(r===Q1r)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<avr?1-r:(i=r*r,n=uvr+i*K1r(i),a=svr+i*$1r(i),s=n/a,r<.25?1-(r+r*s):(n=r*s,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=ovr+a*x1r(a),v=vvr+a*rvr(a),e?1+jq+o/v:1-jq-o/v;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=fvr+a*evr(a),a=lvr+a*tvr(a);else{if(r<-6)return 2-xn;n=cvr+a*ivr(a),a=pvr+a*nvr(a)}return i=Y1r(t,0),n=Cq(-(i*i)-.5625)*Cq((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-xn:xn*xn}Gq.exports=gvr});var zs=u((_Hr,Uq)=>{"use strict";var mvr=Vq();Uq.exports=mvr});var kq=u((PHr,Wq)=>{"use strict";var qvr=zs(),Hq=V(),yvr=or(),hvr=Or();function dvr(r,e){var t,i,n,a,s;if(a=qvr(Hq(e)),a!==0&&r>1){for(i=yvr(-e)/Hq(hvr*e),i*=e,t=.5,i/=t,n=i,s=2;s<r;++s)i/=s-t,i*=e,n+=i;a+=n}return a}Wq.exports=dvr});var Ys=u((RHr,Dq)=>{"use strict";var wvr=-708.3964185322641;Dq.exports=wvr});var Yq=u((FHr,zq)=>{"use strict";var Wt=or(),ra=Z(),bvr=C(),Xq=$n(),Jq=Ys();function Evr(r,e){var t,i;return i=r*bvr(e),e>=1?i<Xq&&-e>Jq?t=ra(e,r)*Wt(-e):r>=1?t=ra(e/Wt(e/r),r):t=Wt(i-e):i>Jq?t=ra(e,r)*Wt(-e):e/r<Xq?t=ra(e/Wt(e/r),r):t=Wt(i-e),t}zq.exports=Evr});var Zs=u((MHr,Zq)=>{"use strict";function Nvr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Zq.exports=Nvr});var Kq=u((BHr,Qq)=>{"use strict";var Avr=Zs();function Ovr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new Function(e)();function a(s){return Avr(r,s)}}Qq.exports=Ovr});var ry=u((CHr,xq)=>{"use strict";var Svr=w(),$q=Zs(),Tvr=Kq();Svr($q,"factory",Tvr);xq.exports=$q});var Re=u((jHr,ey)=>{"use strict";var Lvr=6.283185307179586;ey.exports=Lvr});var iy=u((GHr,ty)=>{"use strict";function Ivr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}ty.exports=Ivr});var ay=u((VHr,ny)=>{"use strict";function _vr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}ny.exports=_vr});var sy=u((UHr,uy)=>{"use strict";function Pvr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}uy.exports=Pvr});var vy=u((HHr,oy)=>{"use strict";function Rvr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}oy.exports=Rvr});var ly=u((WHr,fy)=>{"use strict";function Fvr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}fy.exports=Fvr});var py=u((kHr,cy)=>{"use strict";function Mvr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}cy.exports=Mvr});var my=u((DHr,gy)=>{"use strict";function Bvr(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}gy.exports=Bvr});var yy=u((XHr,qy)=>{"use strict";function Cvr(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}qy.exports=Cvr});var dy=u((JHr,hy)=>{"use strict";function jvr(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}hy.exports=jvr});var by=u((zHr,wy)=>{"use strict";var Gvr=ry(),Vvr=zs(),Qs=V(),Uvr=or(),Hvr=C(),Wvr=Re(),kvr=iy(),Dvr=ay(),Xvr=sy(),Jvr=vy(),zvr=ly(),Yvr=py(),Zvr=my(),Qvr=yy(),Kvr=dy(),Br=[0,0,0,0,0,0,0,0,0,0];function $vr(r,e){var t,i,n,a,s;return i=(e-r)/r,n=-Hvr(1+i)+i,a=r*n,s=Qs(2*n),e<r&&(s=-s),Br[0]=kvr(s),Br[1]=Dvr(s),Br[2]=Xvr(s),Br[3]=Jvr(s),Br[4]=zvr(s),Br[5]=Yvr(s),Br[6]=Zvr(s),Br[7]=Qvr(s),Br[8]=Kvr(s),Br[9]=-.0005967612901927463,t=Gvr(Br,1/r),t*=Uvr(-a)/Qs(Wvr*r),e<r&&(t=-t),t+=Vvr(Qs(a))/2,t}wy.exports=$vr});var Ny=u((YHr,Ey)=>{"use strict";var xvr=eval;Ey.exports=xvr});var Oy=u((ZHr,Ay)=>{"use strict";var r2r=Ny();function e2r(){var r;try{r2r('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}Ay.exports=e2r});var Ks=u((QHr,Sy)=>{"use strict";var t2r=Oy();Sy.exports=t2r});var kt=u((KHr,Ty)=>{"use strict";var i2r=2220446049250313e-31;Ty.exports=i2r});var Iy=u(($Hr,Ly)=>{"use strict";var ea=Q(),n2r=kt(),a2r=1e6;function u2r(r,e){var t,i,n,a,s,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||n2r,a=o.maxTerms||a2r,s=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(s+=n,ea(i*s)>=ea(n)||--a===0)break}else do n=r(),s+=n;while(ea(i*s)<ea(n)&&--a);return s}Ly.exports=u2r});var Ry=u((xHr,Py)=>{"use strict";var _y=Q(),s2r=kt(),o2r=1e6;function v2r(r,e){var t,i,n,a,s;s={},arguments.length>1&&(s=e),t=s.tolerance||s2r,n=s.maxTerms||o2r,a=s.initialValue||0;do i=r(),a+=i;while(_y(t*a)<_y(i)&&--n);return a}Py.exports=v2r});var xs=u((rWr,Fy)=>{"use strict";var f2r=Ks(),l2r=Iy(),c2r=Ry(),$s;f2r()?$s=l2r:$s=c2r;Fy.exports=$s});var By=u((eWr,My)=>{"use strict";function p2r(r,e){var t=1,i=r,n=e;return a;function a(){var s=t;return i+=1,t*=n/i,s}}My.exports=p2r});var jy=u((tWr,Cy)=>{"use strict";var g2r=xs(),m2r=By();function q2r(r,e,t){var i,n;return t=t||0,n=m2r(r,e),i=g2r(n,{initialValue:t}),i}Cy.exports=q2r});var Vy=u((iWr,Gy)=>{"use strict";function y2r(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}Gy.exports=y2r});var Hy=u((nWr,Uy)=>{"use strict";var h2r=Vy();Uy.exports=h2r});var ky=u((aWr,Wy)=>{"use strict";var d2r=Hy();Wy.exports=d2r});var Xy=u((uWr,Dy)=>{"use strict";function w2r(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}Dy.exports=w2r});var Qy=u((sWr,Zy)=>{"use strict";var b2r=b(),Jy=er(),zy=Yr(),E2r=P(),N2r=D(),Yy=Wr(),A2r=Xy(),ro=.6931471803691238,eo=19082149292705877e-26,O2r=.41421356237309503,S2r=-.2928932188134525,T2r=1862645149230957e-24,L2r=5551115123125783e-32,I2r=9007199254740992,_2r=.6666666666666666;function P2r(r){var e,t,i,n,a,s,o,v,f,l;if(r<-1||b2r(r))return NaN;if(r===-1)return N2r;if(r===E2r||r===0)return r;if(r<0?i=-r:i=r,l=1,i<O2r){if(i<T2r)return i<L2r?r:r-r*r*.5;r>S2r&&(l=0,n=r,t=1)}return l!==0&&(i<I2r?(f=1+r,t=Jy(f),l=(t>>20)-Yy,l>0?a=1-(f-r):a=r-(f-1),a/=f):(f=r,t=Jy(f),l=(t>>20)-Yy,a=0),t&=1048575,t<434334?f=zy(f,t|1072693248):(l+=1,f=zy(f,t|1071644672),t=1048576-t>>2),n=f-1),e=.5*n*n,t===0?n===0?(a+=l*eo,l*ro+a):(v=e*(1-_2r*n),l*ro-(v-(l*eo+a)-n)):(s=n/(2+n),o=s*s,v=o*A2r(o),l===0?n-(e-s*(e+v)):l*ro-(e-(s*(e+v)+(l*eo+a))-n))}Zy.exports=P2r});var Dt=u((oWr,Ky)=>{"use strict";var R2r=Qy();Ky.exports=R2r});var xy=u((vWr,$y)=>{"use strict";var F2r=P();function M2r(r){return r===0&&1/r===F2r}$y.exports=M2r});var Fe=u((fWr,rh)=>{"use strict";var B2r=xy();rh.exports=B2r});var ih=u((lWr,th)=>{"use strict";var eh=Fe(),to=b(),C2r=D(),ta=P();function j2r(r,e){var t,i,n,a;if(t=arguments.length,t===2)return to(r)||to(e)?NaN:r===ta||e===ta?ta:r===e&&r===0?eh(r)?r:e:r>e?r:e;for(i=C2r,a=0;a<t;a++){if(n=arguments[a],to(n)||n===ta)return n;(n>i||n===i&&n===0&&eh(n))&&(i=n)}return i}th.exports=j2r});var io=u((cWr,nh)=>{"use strict";var G2r=ih();nh.exports=G2r});var sh=u((pWr,uh)=>{"use strict";var ah=Gs(),no=b(),ia=D(),V2r=P();function U2r(r,e){var t,i,n,a;if(t=arguments.length,t===2)return no(r)||no(e)?NaN:r===ia||e===ia?ia:r===e&&r===0?ah(r)?r:e:r<e?r:e;for(i=V2r,a=0;a<t;a++){if(n=arguments[a],no(n)||n===ia)return n;(n<i||n===i&&n===0&&ah(n))&&(i=n)}return i}uh.exports=U2r});var vh=u((gWr,oh)=>{"use strict";var H2r=sh();oh.exports=H2r});var lh=u((mWr,fh)=>{"use strict";var W2r=10.900511;fh.exports=W2r});var ao=u((qWr,ch)=>{"use strict";var k2r=2.718281828459045;ch.exports=k2r});var mh=u((yWr,gh)=>{"use strict";var D2r=ky(),X2r=Ui(),J2r=Ht(),z2r=Dt(),Y2r=V(),Z2r=Q(),Me=or(),Wi=Z(),uo=io(),so=vh(),ph=C(),na=$n(),ki=Ys(),oo=lh(),Q2r=ao();function K2r(r,e){var t,i,n,a,s,o,v;return n=r+oo-.5,v=(e-r-oo+.5)/n,r<1?e<=ki?Me(r*ph(e)-e-X2r(r)):Wi(e,r)*Me(-e)/J2r(r):(Z2r(v*v*r)<=100&&r>150?(t=r*(z2r(v)-v)+e*(.5-oo)/n,t=Me(t)):(a=r*ph(e/n),s=r-e,so(a,s)<=ki||uo(a,s)>=na?(i=s/r,so(a,s)/2>ki&&uo(a,s)/2<na?(o=Wi(e/n,r/2)*Me(s/2),t=o*o):so(a,s)/4>ki&&uo(a,s)/4<na&&e>r?(o=Wi(e/n,r/4)*Me(s/4),t=o*o,t*=t):i>ki&&i<na?t=Wi(e*Me(i)/n,r):t=Me(a+s)):t=Wi(e/n,r)*Me(s)),t*=Y2r(n/Q2r)/D2r(r),t)}gh.exports=K2r});var yh=u((hWr,qh)=>{"use strict";var $2r=.34657359027997264;qh.exports=$2r});var dh=u((dWr,hh)=>{"use strict";function x2r(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}hh.exports=x2r});var Nh=u((wWr,Eh)=>{"use strict";var rfr=b(),vo=er(),aa=Yr(),wh=P(),efr=D(),tfr=Wr(),ifr=yh(),nfr=dh(),afr=709.782712893384,fo=.6931471803691238,lo=19082149292705877e-26,bh=1.4426950408889634,ufr=38.816242111356935,sfr=1.0397207708399179;function ofr(r){var e,t,i,n,a,s,o,v,f,l,c,p;if(r===wh||rfr(r))return r;if(r===efr)return-1;if(r===0)return r;if(r<0?(t=!0,o=-r):(t=!1,o=r),o>=ufr){if(t)return-1;if(o>=afr)return wh}if(a=vo(o)|0,o>ifr)o<sfr?t?(i=r+fo,n=-lo,p=-1):(i=r-fo,n=lo,p=1):(t?p=bh*r-.5:p=bh*r+.5,p|=0,l=p,i=r-l*fo,n=l*lo),r=i-n,f=i-r-n;else{if(a<1016070144)return r;p=0}return e=.5*r,v=r*e,s=1+v*nfr(v),l=3-s*e,c=v*((s-l)/(6-r*l)),p===0?r-(r*c-v):(c=r*(c-f)-f,c-=v,p===-1?.5*(r-c)-.5:p===1?r<-.25?-2*(c-(r+.5)):1+2*(r-c):p<=-2||p>56?(o=1-(c-r),i=vo(o)+(p<<20)|0,o=aa(o,i),o-1):(l=1,p<20?(i=1072693248-(2097152>>p)|0,l=aa(l,i),o=l-(c-r)):(i=tfr-p<<20|0,l=aa(l,i),o=r-(c+l),o+=1),i=vo(o)+(p<<20)|0,aa(o,i)))}Eh.exports=ofr});var co=u((bWr,Ah)=>{"use strict";var vfr=Nh();Ah.exports=vfr});var Lh=u((EWr,Th)=>{"use strict";var Oh=b(),Sh=Q(),ffr=co(),lfr=C(),cfr=Z(),pfr=Mn();function gfr(r,e){var t;if(Oh(r)||Oh(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((Sh(e*(r-1))<.5||Sh(e)<.2)&&(t=lfr(r)*e,t<.5))return ffr(t)}else if(pfr(e)!==e)return NaN;return cfr(r,e)-1}Th.exports=gfr});var _h=u((NWr,Ih)=>{"use strict";var mfr=Lh();Ih.exports=mfr});var Rh=u((AWr,Ph)=>{"use strict";function qfr(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}Ph.exports=qfr});var Mh=u((OWr,Fh)=>{"use strict";function yfr(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}Fh.exports=yfr});var Ch=u((SWr,Bh)=>{"use strict";function hfr(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}Bh.exports=hfr});var Gh=u((TWr,jh)=>{"use strict";var po=C(),dfr=kt(),wfr=Rh(),bfr=Mh(),Efr=Ch(),Nfr=.15896368026733398,Afr=.5281534194946289,Ofr=.45201730728149414;function Sfr(r,e,t){var i,n,a,s;if(r<dfr)return-po(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=po(r);while(r>=3);t=r-2}return a=t*(r+1),s=wfr(t),n+=a*Nfr+a*s,n}return r<1&&(n+=-po(r),t=e,e=r,r+=1),r<=1.5?(a=bfr(e),i=e*t,n+=i*Afr+i*a,n):(a=t*e,s=Efr(-t),n+=a*Ofr+a*s,n)}jh.exports=Sfr});var kh=u((LWr,Wh)=>{"use strict";var Vh=Ht(),Uh=co(),Tfr=Dt(),Lfr=b(),Hh=Gh();function Ifr(r){return Lfr(r)?NaN:r<0?r<-.5?Vh(1+r)-1:Uh(-Tfr(r)+Hh(r+2,r+1,r)):r<2?Uh(Hh(r+1,r,r-1)):Vh(1+r)-1}Wh.exports=Ifr});var Xh=u((IWr,Dh)=>{"use strict";var _fr=kh();Dh.exports=_fr});var zh=u((_Wr,Jh)=>{"use strict";function Pfr(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,s;function s(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}Jh.exports=Pfr});var Zh=u((PWr,Yh)=>{"use strict";var Rfr=_h(),Ffr=xs(),Mfr=Xh(),Bfr=zh();function Cfr(r,e,t){var i,n,a,s,o;return n=Mfr(r),a=(n+1)/r,s=Rfr(e,r),n-=s,n/=r,o=Bfr(r,e),s+=1,i=t?a:0,n=-s*Ffr(o,{initialValue:(i-n)/s}),t&&(n=-n),[n,a]}Yh.exports=Cfr});var go=u((RWr,Qh)=>{"use strict";var jfr=11754943508222875e-54;Qh.exports=jfr});var $h=u((FWr,Kh)=>{"use strict";var ua=Q(),kr=go(),Gfr=kt(),Vfr=1e6;function Ufr(r,e,t){var i,n,a,s,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),s=f[1],a=f[0],s===0&&(s=kr),o=s,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=kr),o=f[1]+f[0]/o,o===0&&(o=kr),v=1/v,n=o*v,s*=n);while(ua(n-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=kr),o=f[1]+f[0]/o,o===0&&(o=kr),v=1/v,n=o*v,s*=n);while(f&&ua(n-1)>e&&--t);return a/s}function Hfr(r,e,t){var i,n,a,s,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),a=v[1],a===0&&(a=kr),s=a,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=kr),s=v[1]+v[0]/s,s===0&&(s=kr),o=1/o,n=s*o,a*=n);while(v&&ua(n-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=kr),s=v[1]+v[0]/s,s===0&&(s=kr),o=1/o,n=s*o,a*=n);while(v&&ua(n-1)>e&&--t);return a}function Wfr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||Vfr,n=i.tolerance||Gfr,i.keep?Hfr(r,n,t):Ufr(r,n,t)}Kh.exports=Wfr});var ed=u((MWr,rd)=>{"use strict";var xh=Q(),kfr=kt(),Xt=go(),Dfr=1e6;function Xfr(r,e,t){var i,n,a,s,o,v;v=r(),o=v[1],n=v[0],o===0&&(o=Xt),a=o,s=0;do v=r(),v&&(s=v[1]+v[0]*s,s===0&&(s=Xt),a=v[1]+v[0]/a,a===0&&(a=Xt),s=1/s,i=a*s,o*=i);while(v&&xh(i-1)>e&&--t);return n/o}function Jfr(r,e,t){var i,n,a,s,o;o=r(),s=o[1],s===0&&(s=Xt),n=s,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=Xt),n=o[1]+o[0]/n,n===0&&(n=Xt),a=1/a,i=n*a,s*=i);while(o&&xh(i-1)>e&&--t);return s}function zfr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||kfr,t=i.maxIter||Dfr,i.keep?Jfr(r,n,t):Xfr(r,n,t)}rd.exports=zfr});var id=u((BWr,td)=>{"use strict";var Yfr=Ks(),Zfr=$h(),Qfr=ed(),mo;Yfr()?mo=Zfr:mo=Qfr;td.exports=mo});var ad=u((CWr,nd)=>{"use strict";function Kfr(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}nd.exports=Kfr});var sd=u((jWr,ud)=>{"use strict";var $fr=id(),xfr=ad();function r3r(r,e){var t=xfr(r,e);return 1/(e-r+1+$fr(t))}ud.exports=r3r});var yd=u((GWr,qd)=>{"use strict";var e3r=Ui(),t3r=K(),Di=Ht(),od=Q(),i3r=or(),vd=Z(),Cr=C(),n3r=Js(),fd=qq(),a3r=Vs(),ld=$n(),u3r=P(),s3r=dq(),o3r=kq(),cd=Yq(),v3r=by(),qo=jy(),pd=mh(),f3r=Zh(),gd=sd(),l3r=170;function md(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,E;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,c=i,p=0,e>=l3r&&!a)return c&&e*4<r?(p=e*Cr(r)-r,p+=Cr(gd(e,r))):!c&&e>4*r?(p=e*Cr(r)-r,o=0,p+=Cr(qo(e,r,o)/e)):(p=md(e,r,!0,c),p===0?c?(p=1+1/(12*e)+1/(288*e*e),p=Cr(p)-e+(e-.5)*Cr(e),p+=Cr(a3r)):(p=e*Cr(r)-r,o=0,p+=Cr(qo(e,r,o)/e)):p=Cr(p)+e3r(e)),p>ld?u3r:i3r(p);switch(l=e<30&&e<=r+1&&r<ld,l?(h=t3r(e),q=h===e,v=q?!1:od(h-e)===.5):q=v=!1,q&&r>.6?(c=!c,s=0):v&&r>.2?(c=!c,s=1):r<n3r&&e>1?s=6:r<.5?-.4/Cr(r)<e?s=2:s=3:r<1.1?r*.75<e?s=2:s=3:(f=!1,a&&e>20&&(y=od((r-e)/e),e>200?20/e>y*y&&(f=!0):y<.4&&(f=!0)),f?s=5:r-1/(3*r)<e?s=2:(s=4,c=!c)),s){case 0:p=s3r(e,r),a===!1&&(p*=Di(e));break;case 1:p=o3r(e,r),a===!1&&(p*=Di(e));break;case 2:p=a?pd(e,r):cd(e,r),p!==0&&(o=0,n=!1,c&&(o=a?1:Di(e),a||p>=1||fd*p>o?(o/=p,a||e<1||fd/e>o?(o*=-e,n=!0):o=0):o=0)),p*=qo(e,r,o)/e,n&&(c=!1,p=-p);break;case 3:c=!c,g=f3r(e,r,c),p=g[0],E=g[1],c=!1,a&&(p/=E);break;case 4:p=a?pd(e,r):cd(e,r),p!==0&&(p*=gd(e,r));break;case 5:p=v3r(e,r),r>=e&&(c=!c);break;case 6:p=a?vd(r,e)/Di(e+1):vd(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),c&&(m=a?1:Di(e),p=m-p),p}qd.exports=md});var yo=u((VWr,hd)=>{"use strict";var c3r=yd();hd.exports=c3r});var wd=u((UWr,dd)=>{"use strict";var p3r=yo(),ho=b(),g3r=P();function m3r(r,e,t){return ho(r)||ho(e)||ho(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===g3r?1:p3r(r*t,e)}dd.exports=m3r});var Ed=u((HWr,bd)=>{"use strict";function q3r(r){return e;function e(){return r}}bd.exports=q3r});var I=u((WWr,Nd)=>{"use strict";var y3r=Ed();Nd.exports=y3r});var Sd=u((kWr,Od)=>{"use strict";var Ad=b();function h3r(r,e){return Ad(r)||Ad(e)?NaN:r<e?0:1}Od.exports=h3r});var Id=u((DWr,Ld)=>{"use strict";var d3r=I(),Td=b();function w3r(r){if(Td(r))return d3r(NaN);return e;function e(t){return Td(t)?NaN:t<r?0:1}}Ld.exports=w3r});var wo=u((XWr,Pd)=>{"use strict";var b3r=w(),_d=Sd(),E3r=Id();b3r(_d,"factory",E3r);Pd.exports=_d});var Md=u((JWr,Fd)=>{"use strict";var N3r=I(),A3r=wo().factory,O3r=yo(),Rd=b(),S3r=P();function T3r(r,e){if(Rd(r)||Rd(e)||r<0||e<=0)return N3r(NaN);if(r===0)return A3r(0);return t;function t(i){return i<=0?0:i===S3r?1:O3r(i*e,r)}}Fd.exports=T3r});var bo=u((zWr,Cd)=>{"use strict";var L3r=w(),Bd=wd(),I3r=Md();L3r(Bd,"factory",I3r);Cd.exports=Bd});var Gd=u((YWr,jd)=>{"use strict";var _3r=bo();function P3r(r,e){return _3r(r,e/2,.5)}jd.exports=P3r});var Ud=u((ZWr,Vd)=>{"use strict";var R3r=bo().factory;function F3r(r){return R3r(r/2,.5)}Vd.exports=F3r});var kd=u((QWr,Wd)=>{"use strict";var M3r=w(),Hd=Gd(),B3r=Ud();M3r(Hd,"factory",B3r);Wd.exports=Hd});var Jd=u((KWr,Xd)=>{"use strict";var C3r=T(),j3r=A(),G3r=hn(),Dd=["values","indices","*"];function V3r(r,e){return C3r(e)?j3r(e,"returns")&&(r.returns=e.returns,G3r(Dd,r.returns)===-1)?new TypeError('invalid option. `returns` option must be one of the following: "'+Dd.join('", "')+'". Option: `'+r.returns+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}Xd.exports=V3r});var Yd=u(($Wr,zd)=>{"use strict";var U3r=A();function H3r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),U3r(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}zd.exports=H3r});var Qd=u((xWr,Zd)=>{"use strict";var W3r=A();function k3r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),W3r(t,n)?t[n].push(a):t[n]=[a];return t}Zd.exports=k3r});var $d=u((rkr,Kd)=>{"use strict";var D3r=A();function X3r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),D3r(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}Kd.exports=X3r});var ew=u((ekr,rw)=>{"use strict";var xd=Mr(),J3r=Jd(),z3r=Yd(),Y3r=Qd(),Z3r=$d();function Q3r(r,e,t){var i,n,a;if(!xd(r))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+r+"`.");if(i={returns:"values"},arguments.length===2)a=e;else{if(n=J3r(i,e),n)throw n;a=t}if(!xd(a))throw new TypeError("invalid argument. Last argument must be a collection. Value: `"+a+"`.");if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?z3r(r,a):i.returns==="indices"?Y3r(r,a):Z3r(r,a)}rw.exports=Q3r});var iw=u((tkr,tw)=>{"use strict";var K3r=ew();tw.exports=K3r});var aw=u((ikr,nw)=>{"use strict";function $3r(r){var e,t,i,n,a,s;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)s=r[a],e=s-t,t+=e/(a+1),n+=e*(s-t);return n/(a-1)}nw.exports=$3r});var ow=u((nkr,sw)=>{"use strict";var x3r=lr(),rlr=j().isPrimitive,elr=T(),tlr=ir(),uw=A();function ilr(r,e){return elr(e)?uw(e,"alpha")&&(r.alpha=e.alpha,!rlr(r.alpha)||tlr(r.alpha))?new TypeError("invalid option. `alpha` option must be a number primitive. Option: `"+r.alpha+"`."):uw(e,"groups")&&(r.groups=e.groups,!x3r(r.groups))?new TypeError("invalid option. `groups` option must be an array. Option: `"+r.groups+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}sw.exports=ilr});var Eo=u((akr,vw)=>{"use strict";var nlr=Fr().isPrimitive;function alr(r){return nlr(r)&&r>0}vw.exports=alr});var No=u((ukr,fw)=>{"use strict";var ulr=Fr().isObject;function slr(r){return ulr(r)&&r.valueOf()>0}fw.exports=slr});var cw=u((skr,lw)=>{"use strict";var olr=Eo(),vlr=No();function flr(r){return olr(r)||vlr(r)}lw.exports=flr});var xr=u((okr,gw)=>{"use strict";var pw=w(),Ao=cw(),llr=Eo(),clr=No();pw(Ao,"isPrimitive",llr);pw(Ao,"isObject",clr);gw.exports=Ao});var Xi=u((vkr,mw)=>{"use strict";var plr=9007199254740991;mw.exports=plr});var Oo=u((fkr,qw)=>{"use strict";var glr=308;qw.exports=glr});var hw=u((lkr,yw)=>{"use strict";var mlr=-308;yw.exports=mlr});var So=u((ckr,dw)=>{"use strict";var qlr=-324;dw.exports=qlr});var Sw=u((pkr,Ow)=>{"use strict";var ww=b(),sa=Ir(),bw=Z(),ylr=Q(),Ew=Fs(),hlr=Xi(),Nw=Oo(),dlr=hw(),wlr=So(),blr=hlr+1,Aw=1e308;function Elr(r,e){var t,i;return ww(r)||ww(e)||sa(e)?NaN:sa(r)||r===0||e<wlr||ylr(r)>blr&&e<=0?r:e>Nw?0*r:e<dlr?(t=bw(10,-(e+Nw)),i=r*Aw*t,sa(i)?r:Ew(i)/Aw/t):(t=bw(10,-e),i=r*t,sa(i)?r:Ew(i)/t)}Ow.exports=Elr});var Lw=u((gkr,Tw)=>{"use strict";var Nlr=Sw();Tw.exports=Nlr});var Pw=u((mkr,_w)=>{"use strict";var Alr=xr(),Olr=T(),Slr=ur().isPrimitive,Iw=A(),To=Lw();function Tlr(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!Olr(r))throw new TypeError("invalid argument. First argument must be an options object. Value: `"+r+"`.");if(Iw(r,"digits")){if(!Alr(r.digits))throw new TypeError("invalid option. `digits` option must be a positive integer. Option: `"+r.digits+"`.");t=r.digits}if(Iw(r,"decision")){if(!Slr(r.decision))throw new TypeError("invalid option. `decision` option must be a boolean primitive. Option: `"+r.decision+"`.");e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+To(this.pValue,-t)+`
`,i+="    statistic: "+To(this.statistic,-t)+`
`,i+="    df: "+To(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}_w.exports=Tlr});var Mw=u((qkr,Fw)=>{"use strict";var Llr=Mr(),Ilr=T(),qt=L5(),_lr=Si(),Plr=kd(),Rlr=iw(),Rw=C(),Flr=aw(),Mlr=ow(),Blr=Pw();function Clr(){var r,e,t,i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N;if(v=[],e=arguments.length,f={},Ilr(arguments[e-1])&&(r=arguments[e-1],e-=1,q=Mlr(f,r),q))throw q;if(f.groups){if(n=Rlr(arguments[0],f.groups),i=_lr(n),e=i.length,e<2)throw new Error("invalid number of groups. `groups` array must contain at least two unique elements. Value: `"+i+"`.");for(N=0;N<e;N++)v.push(n[i[N]])}else for(N=0;N<e;N++)v.push(arguments[N]);for(s=0,t=0,o=0,y=0,h=new Array(e),E=h.slice(),N=0;N<e;N++){if(p=v[N],!Llr(p))throw new TypeError("invalid argument. Must provide array-like arguments. Value: `"+p+"`.");if(p.length===0)throw new Error("invalid argument. Supplied arrays cannot be empty. Value: `"+p+"`.");h[N]=p.length-1,s+=h[N],t+=1/h[N],E[N]=Flr(p),o+=h[N]*E[N],y+=h[N]*Rw(E[N])}if(o/=s,f.alpha===void 0?a=.05:a=f.alpha,a<0||a>1)throw new RangeError("invalid argument. Option `alpha` must be a number in the range 0 to 1. Value: `"+a+"`.");return c=s*Rw(o)-y,c/=1+(t-1/s)/(3*(e-1)),g=e-1,l=1-Plr(c,g),m={},qt(m,"rejected",l<=a),qt(m,"alpha",a),qt(m,"pValue",l),qt(m,"statistic",c),qt(m,"df",g),qt(m,"method","Bartlett's test of equal variances"),qt(m,"print",Blr),m}Fw.exports=Clr});var Cw=u((ykr,Bw)=>{"use strict";var jlr=Mw();Bw.exports=jlr});var Gw=u((hkr,jw)=>{"use strict";function Glr(r){var e,t,i,n,a,s,o,v,f,l,c;if(v=r.length,t=[],v===0)return t;if(n=r[0],f=n.length,v===1){for(l=0;l<f;l++)t.push(n[l]);return t}for(e=[f],l=1;l<v;l++)e.push(r[l].length),e[l]>f&&(f=e[l]);for(l=0;l<f;l++)t.push(0);for(l=f-1;l>=0;){for(a=e[0]-f+l,a>=0?i=n[a]:i=1,c=1;c<v;c++){if(s=e[c]-f+l,s>=0?o=r[c][s]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[l]=i,l-=1}return t}jw.exports=Glr});var Uw=u((dkr,Vw)=>{"use strict";var Vlr=Gw();Vw.exports=Vlr});var oa=u((wkr,Hw)=>{"use strict";function Ulr(r){var e,t,i,n,a,s;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)e.push(n[s]);return e}Hw.exports=Ulr});var kw=u((bkr,Ww)=>{"use strict";var Hlr=j().isPrimitive,Wlr=z().isPrimitive,klr=ur().isPrimitive,Dlr=lr(),Xlr=Uw(),Jlr=S(),zlr=oa(),Ylr={number:Hlr,string:Wlr,boolean:klr};function Zlr(r,e,t){var i,n,a,s,o,v,f,l,c,p;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],n=[],p=0;p<r.length;p++)if(c=r[p],o=e[p],l=Ylr[o],l(c))n.push([c]),a.push([1,1]);else if(Dlr(c))n.push(zlr(c)),a.push([c.length,c[0].length]);else throw new TypeError(Jlr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[p],o,o,String(c)));if(s=Xlr(a),s===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");for(i=[],p=0;p<a.length;p++)f=a[p],v=[],f[0]===1?v.push(0):v.push(f[1]),f[1]===1?v.push(0):v.push(1),i.push(v);return[n,s,i]}Ww.exports=Zlr});var Xw=u((Ekr,Dw)=>{"use strict";var Lo=b(),Qlr=Fe();function Klr(r,e,t,i,n){var a,s,o,v,f;if(r<=0)return i;if(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,a=e[s],i[o]=a,o+=n,f=1,Lo(a)===!1)for(f;f<r;f++){if(s+=t,v=e[s],Lo(v)){a=v;break}(v>a||v===a&&Qlr(v))&&(a=v),i[o]=a,o+=n}if(Lo(a))for(f;f<r;f++)i[o]=a,o+=n;return i}Dw.exports=Klr});var zw=u((Nkr,Jw)=>{"use strict";var Io=b(),$lr=Fe();function xlr(r,e,t,i,n,a,s){var o,v,f,l,c;if(r<=0)return n;if(v=i,f=s,o=e[v],n[f]=o,f+=a,c=1,Io(o)===!1)for(c;c<r;c++){if(v+=t,l=e[v],Io(l)){o=l;break}(l>o||l===o&&$lr(l))&&(o=l),n[f]=o,f+=a}if(Io(o))for(c;c<r;c++)n[f]=o,f+=a;return n}Jw.exports=xlr});var Qw=u((Akr,Zw)=>{"use strict";var r6r=w(),Yw=Xw(),e6r=zw();r6r(Yw,"ndarray",e6r);Zw.exports=Yw});var $w=u((Okr,Kw)=>{"use strict";var t6r=Qw();Kw.exports=t6r});var eb=u((Skr,rb)=>{"use strict";var xw=_s();function i6r(r,e,t){var i,n;if(e===1)return xw(t,r);for(i=[],n=0;n<r;n++)i.push(xw(t,e));return i}rb.exports=i6r});var ib=u((Tkr,tb)=>{"use strict";function n6r(r,e,t){var i,n;for(i=[],n=0;n<r;n++)i.push(e.call(t,n));return i}tb.exports=n6r});var ab=u((Lkr,nb)=>{"use strict";var a6r=ib();nb.exports=a6r});var ob=u((Ikr,sb)=>{"use strict";var ub=ab();function u6r(r,e,t){var i,n;if(e===1)return ub(r,t);for(i=[],n=0;n<r;n++)i.push(ub(e,t));return i}sb.exports=u6r});var _o=u((_kr,vb)=>{"use strict";var s6r=j().isPrimitive;function o6r(r){return s6r(r)&&r>0}vb.exports=o6r});var Po=u((Pkr,fb)=>{"use strict";var v6r=j().isObject;function f6r(r){return v6r(r)&&r.valueOf()>0}fb.exports=f6r});var cb=u((Rkr,lb)=>{"use strict";var l6r=_o(),c6r=Po();function p6r(r){return l6r(r)||c6r(r)}lb.exports=p6r});var W=u((Fkr,gb)=>{"use strict";var pb=w(),Ro=cb(),g6r=_o(),m6r=Po();pb(Ro,"isPrimitive",g6r);pb(Ro,"isObject",m6r);gb.exports=Ro});var qb=u((Mkr,mb)=>{"use strict";var q6r=L();function y6r(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&q6r(r.next)}mb.exports=y6r});var hb=u((Bkr,yb)=>{"use strict";var h6r=qb();yb.exports=h6r});var wb=u((Ckr,db)=>{"use strict";function d6r(r,e){return r[e]}db.exports=d6r});var Eb=u((jkr,bb)=>{"use strict";function w6r(r,e){return r.get(e)}bb.exports=w6r});var Ab=u((Gkr,Nb)=>{"use strict";function b6r(r,e,t){r[e]=t}Nb.exports=b6r});var Sb=u((Vkr,Ob)=>{"use strict";function E6r(r,e,t){r.set(t,e)}Ob.exports=E6r});var Lb=u((Ukr,Tb)=>{"use strict";var N6r=wb(),A6r=Eb(),O6r=Ab(),S6r=Sb();function T6r(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?A6r:N6r,setter:e?S6r:O6r}}Tb.exports=T6r});var yt=u((Hkr,Ib)=>{"use strict";var L6r=Lb();Ib.exports=L6r});var Rb=u((Wkr,Pb)=>{"use strict";var _b=L(),I6r=Mr(),_6r=hb(),P6r=yt();function R6r(){var r,e,t,i,n,a,s,o;if(r=arguments[0],arguments.length>1)if(I6r(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!_b(t))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+t+"`.");e=arguments[3]}}else{if(t=arguments[1],!_b(t))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+t+"`.");e=arguments[2]}if(!_6r(r))throw new TypeError("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(s=-1,i===void 0){if(i=[],t){for(;s+=1,o=r.next(),!o.done;)i.push(t.call(e,o.value,s));return i}for(;o=r.next(),!o.done;)i.push(o.value);return i}if(n=i.length,a=P6r(i).setter,t){for(;s<n-1&&(s+=1,o=r.next(),!o.done);)a(i,s,t.call(e,o.value,s));return i}for(;s<n-1&&(s+=1,o=r.next(),!o.done);)a(i,s,o.value);return i}Pb.exports=R6r});var Mb=u((kkr,Fb)=>{"use strict";var F6r=Rb();Fb.exports=F6r});var Cb=u((Dkr,Bb)=>{"use strict";var M6r=A();function B6r(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"&&M6r(Symbol,"iterator")&&typeof Symbol.iterator=="symbol"}Bb.exports=B6r});var va=u((Xkr,jb)=>{"use strict";var C6r=Cb();jb.exports=C6r});var Vb=u((Jkr,Gb)=>{"use strict";var j6r=va(),G6r=j6r()?Symbol.iterator:null;Gb.exports=G6r});var fa=u((zkr,Ub)=>{"use strict";var V6r=Vb();Ub.exports=V6r});var Wb=u((Ykr,Hb)=>{"use strict";function U6r(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}Hb.exports=U6r});var Db=u((Zkr,kb)=>{"use strict";function H6r(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}kb.exports=H6r});var zb=u((Qkr,Jb)=>{"use strict";var W6r=er(),Xb=Kr(),k6r=Wb(),D6r=Db(),X6r=.7853981633974483,J6r=3061616997868383e-32,z6r=.3333333333333341,Y6r=2147483647;function Z6r(r,e,t){var i,n,a,s,o,v,f,l,c;return i=W6r(r),n=i&Y6r|0,n>=1072010280&&(r<0&&(r=-r,e=-e),c=X6r-r,l=J6r-e,r=c+l,e=0),c=r*r,l=c*c,s=k6r(l),f=c*D6r(l),o=c*r,s=e+c*(o*(s+f)+e),s+=z6r*o,l=r+s,n>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(l*l/(l+f)-s)))):t===1?l:(c=l,Xb(c,0),f=s-(c-r),a=-1/l,v=a,Xb(v,0),o=1+v*c,v+a*(o+v*f))}Jb.exports=Z6r});var Zb=u((Kkr,Yb)=>{"use strict";var Q6r=zb();Yb.exports=Q6r});var $b=u(($kr,Kb)=>{"use strict";var K6r=er(),Qb=Zb(),$6r=Ci(),Fo=[0,0],x6r=2147483647,rcr=1072243195,ecr=2146435072,tcr=1044381696;function icr(r){var e,t;return e=K6r(r),e&=x6r,e<=rcr?e<tcr?r:Qb(r,0,1):e>=ecr?NaN:(t=$6r(r,Fo),Qb(Fo[0],Fo[1],1-((t&1)<<1)))}Kb.exports=icr});var Mo=u((xkr,xb)=>{"use strict";var ncr=$b();xb.exports=ncr});var la=u((rDr,rE)=>{"use strict";var acr=1.5707963267948966;rE.exports=acr});var ca=u((eDr,eE)=>{"use strict";var ucr=.7853981633974483;eE.exports=ucr});var iE=u((tDr,tE)=>{"use strict";function scr(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}tE.exports=scr});var aE=u((iDr,nE)=>{"use strict";function ocr(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}nE.exports=ocr});var oE=u((nDr,sE)=>{"use strict";var vcr=b(),fcr=P(),Bo=la(),lcr=ca(),ccr=D(),pcr=iE(),gcr=aE(),uE=6123233995736766e-32,mcr=2.414213562373095;function qcr(r){var e,t,i,n;return vcr(r)||r===0?r:r===fcr?Bo:r===ccr?-Bo:(r<0&&(t=!0,r=-r),e=0,r>mcr?(i=Bo,e=1,r=-(1/r)):r<=.66?i=0:(i=lcr,e=2,r=(r-1)/(r+1)),n=r*r,n=n*pcr(n)/gcr(n),n=r*n+r,e===2?n+=.5*uE:e===1&&(n+=uE),i+=n,t?-i:i)}sE.exports=qcr});var pa=u((aDr,vE)=>{"use strict";var ycr=oE();vE.exports=ycr});var Co=u((uDr,fE)=>{"use strict";var hcr=j().isPrimitive;function dcr(r){return hcr(r)&&r>=0}fE.exports=dcr});var jo=u((sDr,lE)=>{"use strict";var wcr=j().isObject;function bcr(r){return wcr(r)&&r.valueOf()>=0}lE.exports=bcr});var pE=u((oDr,cE)=>{"use strict";var Ecr=Co(),Ncr=jo();function Acr(r){return Ecr(r)||Ncr(r)}cE.exports=Acr});var Vo=u((vDr,mE)=>{"use strict";var gE=w(),Go=pE(),Ocr=Co(),Scr=jo();gE(Go,"isPrimitive",Ocr);gE(Go,"isObject",Scr);mE.exports=Go});var yE=u((fDr,qE)=>{"use strict";var Tcr=T(),ga=A(),Lcr=Fr().isPrimitive,Icr=xr().isPrimitive,_cr=Le().isPrimitive,Pcr=Vo().isPrimitive;function Rcr(r,e){return Tcr(e)?ga(e,"period")&&(r.period=e.period,!Icr(e.period))?new TypeError("invalid option. `period` option must be an positive integer. Option: `"+e.period+"`."):ga(e,"amplitude")&&(r.amplitude=e.amplitude,!Pcr(e.amplitude))?new TypeError("invalid option. `amplitude` option must be a nonnegative number. Option: `"+e.amplitude+"`."):ga(e,"offset")&&(r.offset=e.offset,!Lcr(e.offset))?new TypeError("invalid option. `offset` option must be an integer. Option: `"+e.offset+"`."):ga(e,"iter")&&(r.iter=e.iter,!_cr(e.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}qE.exports=Rcr});var bE=u((lDr,wE)=>{"use strict";var Uo=w(),hE=fa(),Fcr=Mo(),Mcr=pa(),Bcr=la(),Ccr=Or(),jcr=yE();function dE(r){var e,t,i,n,a,s,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=jcr(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,s=Ccr/e.period,o=e.amplitude/Bcr,v=0,t={},Uo(t,"next",f),Uo(t,"return",l),hE&&Uo(t,hE,c),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*Mcr(Fcr(s*a)),done:!1})}function l(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function c(){return dE(e)}}wE.exports=dE});var NE=u((cDr,EE)=>{"use strict";var Gcr=bE();EE.exports=Gcr});var OE=u((pDr,AE)=>{"use strict";function Vcr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}AE.exports=Vcr});var TE=u((gDr,SE)=>{"use strict";function Ucr(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}SE.exports=Ucr});var PE=u((mDr,_E)=>{"use strict";var LE=j().isPrimitive,IE=Se(),Ji=w(),Hcr=OE(),Wcr=TE();function ht(r,e){if(!(this instanceof ht))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!LE(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!LE(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return IE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),IE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Ji(ht,"BYTES_PER_ELEMENT",8);Ji(ht.prototype,"BYTES_PER_ELEMENT",8);Ji(ht.prototype,"byteLength",16);Ji(ht.prototype,"toString",Hcr);Ji(ht.prototype,"toJSON",Wcr);_E.exports=ht});var Jt=u((qDr,RE)=>{"use strict";var kcr=PE();RE.exports=kcr});var ME=u((yDr,FE)=>{"use strict";var Dcr=typeof Math.fround=="function"?Math.fround:null;FE.exports=Dcr});var jE=u((hDr,CE)=>{"use strict";var Xcr=zr(),BE=new Xcr(1);function Jcr(r){return BE[0]=r,BE[0]}CE.exports=Jcr});var UE=u((dDr,VE)=>{"use strict";var GE=ME(),zcr=jE(),Ho;typeof GE=="function"?Ho=GE:Ho=zcr;VE.exports=Ho});var WE=u((wDr,HE)=>{"use strict";function Ycr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}HE.exports=Ycr});var DE=u((bDr,kE)=>{"use strict";function Zcr(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}kE.exports=Zcr});var ZE=u((EDr,YE)=>{"use strict";var XE=j().isPrimitive,JE=Se(),zi=w(),zE=UE(),Qcr=WE(),Kcr=DE();function dt(r,e){if(!(this instanceof dt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!XE(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!XE(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return JE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:zE(r)}),JE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:zE(e)}),this}zi(dt,"BYTES_PER_ELEMENT",4);zi(dt.prototype,"BYTES_PER_ELEMENT",4);zi(dt.prototype,"byteLength",8);zi(dt.prototype,"toString",Qcr);zi(dt.prototype,"toJSON",Kcr);YE.exports=dt});var zt=u((NDr,QE)=>{"use strict";var $cr=ZE();QE.exports=$cr});var $E=u((ADr,KE)=>{"use strict";var xcr=Jt(),rpr=zt();function epr(r){return r instanceof xcr||r instanceof rpr?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}KE.exports=epr});var jr=u((ODr,xE)=>{"use strict";var tpr=$E();xE.exports=tpr});var eN=u((SDr,rN)=>{"use strict";var ipr={Complex64:"complex64",Complex128:"complex128"};rN.exports=ipr});var iN=u((TDr,tN)=>{"use strict";var npr=zt(),apr=Jt(),upr=[npr,apr];tN.exports=upr});var aN=u((LDr,nN)=>{"use strict";var spr=["complex64","complex128"];nN.exports=spr});var oN=u((IDr,sN)=>{"use strict";var opr=Te(),vpr=eN(),fpr=iN(),uN=aN(),lpr=uN.length;function cpr(r){var e;for(e=0;e<lpr;e++)if(r instanceof fpr[e])return uN[e];return vpr[opr(r)]||null}sN.exports=cpr});var Wo=u((_Dr,vN)=>{"use strict";var ppr=oN();vN.exports=ppr});var lN=u((PDr,fN)=>{"use strict";var gpr=4294967295;fN.exports=gpr});var pN=u((RDr,cN)=>{"use strict";var mpr=Ar(),qpr=lN();function ypr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&mpr(r.length)&&r.length>=0&&r.length<=qpr}cN.exports=ypr});var wt=u((FDr,gN)=>{"use strict";var hpr=pN();gN.exports=hpr});var qN=u((MDr,mN)=>{"use strict";var dpr=rr(),wpr=typeof ArrayBuffer=="function";function bpr(r){return wpr&&r instanceof ArrayBuffer||dpr(r)==="[object ArrayBuffer]"}mN.exports=bpr});var ko=u((BDr,yN)=>{"use strict";var Epr=qN();yN.exports=Epr});var dN=u((CDr,hN)=>{"use strict";var Npr=Se();function Apr(r,e,t){Npr(r,e,{configurable:!1,enumerable:!1,get:t})}hN.exports=Apr});var _=u((jDr,wN)=>{"use strict";var Opr=dN();wN.exports=Opr});var EN=u((GDr,bN)=>{"use strict";function Spr(r){return r.re}bN.exports=Spr});var Be=u((VDr,NN)=>{"use strict";var Tpr=EN();NN.exports=Tpr});var ON=u((UDr,AN)=>{"use strict";function Lpr(r){return r.im}AN.exports=Lpr});var Ce=u((HDr,SN)=>{"use strict";var Ipr=ON();SN.exports=Ipr});var LN=u((WDr,TN)=>{"use strict";var _pr=zr();function Ppr(r,e){return new _pr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}TN.exports=Ppr});var Yt=u((kDr,IN)=>{"use strict";var Rpr=LN();IN.exports=Rpr});var PN=u((DDr,_N)=>{"use strict";var Fpr=cr();function Mpr(r,e){return new Fpr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}_N.exports=Mpr});var Zt=u((XDr,RN)=>{"use strict";var Bpr=PN();RN.exports=Bpr});var MN=u((JDr,FN)=>{"use strict";var Cpr=wt(),jpr=jr(),Gpr=Be(),Vpr=Ce();function Upr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,Cpr(i)&&i.length>=2)e.push(i[0],i[1]);else if(jpr(i))e.push(Gpr(i),Vpr(i));else return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");return e}FN.exports=Upr});var CN=u((zDr,BN)=>{"use strict";var Hpr=wt(),Wpr=jr(),kpr=Be(),Dpr=Ce();function Xpr(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),Hpr(a)&&a.length>=2)i.push(a[0],a[1]);else if(Wpr(a))i.push(kpr(a),Dpr(a));else return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+a+"`.");return i}BN.exports=Xpr});var GN=u((YDr,jN)=>{"use strict";var Jpr=jr(),zpr=Be(),Ypr=Ce();function Zpr(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!Jpr(i))return null;r[a]=zpr(i),r[a+1]=Ypr(i),a+=2}return r}jN.exports=Zpr});var zN=u((ZDr,JN)=>{"use strict";var Yi=Le().isPrimitive,VN=wt(),Xo=Mr(),UN=ko(),HN=_n(),Qpr=lr(),bt=L(),Qt=jr(),ma=Jn(),Do=Ar(),Kpr=va(),Kt=fa(),gr=w(),ha=_(),_r=cr(),WN=Jt(),qa=Be(),ya=Ce(),$pr=Yt(),xpr=Zt(),r4r=yt(),kN=MN(),e4r=CN(),t4r=GN(),Sr=_r.BYTES_PER_ELEMENT*2,DN=Kpr();function $t(r){return r instanceof $||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function XN(r){return r===$||r.name==="Complex64Array"}function i4r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Sr/2}function n4r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Sr}function $(){var r,e,t,i;if(e=arguments.length,!(this instanceof $))return e===0?new $:e===1?new $(arguments[0]):e===2?new $(arguments[0],arguments[1]):new $(arguments[0],arguments[1],arguments[2]);if(e===0)t=new _r(0);else if(e===1)if(Yi(arguments[0]))t=new _r(arguments[0]*2);else if(Xo(arguments[0]))if(t=arguments[0],i=t.length,i&&Qpr(t)&&Qt(t[0])){if(t=t4r(new _r(i*2),t),t===null){if(!ma(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new _r(arguments[0])}}else{if(i4r(t))t=$pr(t,0);else if(n4r(t))t=xpr(t,0);else if(!ma(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new _r(t)}else if(UN(arguments[0])){if(t=arguments[0],!Do(t.byteLength/Sr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Sr+". Byte length: `"+t.byteLength+"`.");t=new _r(t)}else if(HN(arguments[0])){if(t=arguments[0],DN===!1)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!bt(t[Kt]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(t=t[Kt](),!bt(t.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(t=kN(t),t instanceof Error)throw t;t=new _r(t)}else throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");else{if(t=arguments[0],!UN(t))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(r=arguments[1],!Yi(r))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Do(r/Sr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Sr+". Value: `"+r+"`.");if(e===2){if(i=t.byteLength-r,!Do(i/Sr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Sr+". View byte length: `"+i+"`.");t=new _r(t,r)}else{if(i=arguments[2],!Yi(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*Sr>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*Sr+"`.");t=new _r(t,r,i*2)}}return gr(this,"_buffer",t),gr(this,"_length",t.length/2),this}gr($,"BYTES_PER_ELEMENT",Sr);gr($,"name","Complex128Array");gr($,"from",function(e){var t,i,n,a,s,o,v,f,l,c,p;if(!bt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!XN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!bt(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");i>2&&(t=arguments[2])}if($t(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,e.get(c),c),Qt(l))s[p]=qa(l),s[p+1]=ya(l);else if(VN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(Xo(e)){if(n){for(v=e.length,o=r4r(e),c=0;c<v;c++)if(!Qt(o.getter(e,c))){f=!0;break}if(f){if(!ma(v))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+v+"`.");for(a=new this(v/2),s=a._buffer,c=0;c<v;c++)s[c]=n.call(t,o.getter(e,c),c);return a}for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,o.getter(e,c),c),Qt(l))s[p]=qa(l),s[p+1]=ya(l);else if(VN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(HN(e)&&DN&&bt(e[Kt])){if(s=e[Kt](),!bt(s.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(n?o=e4r(s,n,t):o=kN(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,c=0;c<v;c++)s[c]=o[c];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")});gr($,"of",function(){var e,t;if(!bt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!XN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});ha($.prototype,"buffer",function(){return this._buffer.buffer});ha($.prototype,"byteLength",function(){return this._buffer.byteLength});ha($.prototype,"byteOffset",function(){return this._buffer.byteOffset});gr($.prototype,"BYTES_PER_ELEMENT",$.BYTES_PER_ELEMENT);gr($.prototype,"copyWithin",function(e,t){if(!$t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});gr($.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!$t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},gr(i,"next",v),gr(i,"return",f),Kt&&gr(i,Kt,l),i;function v(){var c;return s+=1,a||s>=n?{done:!0}:(o+=2,c=new WN(e[o],e[o+1]),{value:[s,c],done:!1})}function f(c){return a=!0,arguments.length?{value:c,done:!0}:{done:!0}}function l(){return t.entries()}});gr($.prototype,"get",function(e){var t;if(!$t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Yi(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new WN(t[e],t[e+1])});ha($.prototype,"length",function(){return this._length});gr($.prototype,"set",function(e){var t,i,n,a,s,o,v,f,l;if(!$t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Yi(i))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+i+"`.")}else i=0;if(Qt(e)){if(i>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+i+"`.");i*=2,n[i]=qa(e),n[i+1]=ya(e);return}if($t(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,l=n.byteOffset+i*Sr,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new _r(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(Xo(e)){for(o=e.length,f=0;f<o;f++)if(!Qt(e[f])){s=!0;break}if(s){if(!ma(o))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+o+"`.");if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,l=n.byteOffset+i*Sr,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new _r(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=qa(v),n[i+1]=ya(v),i+=2;return}throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.")});JN.exports=$});var Zi=u((QDr,YN)=>{"use strict";var a4r=zN();YN.exports=a4r});var QN=u((KDr,ZN)=>{"use strict";function u4r(r){return r.re}ZN.exports=u4r});var je=u(($Dr,KN)=>{"use strict";var s4r=QN();KN.exports=s4r});var xN=u((xDr,$N)=>{"use strict";function o4r(r){return r.im}$N.exports=o4r});var Ge=u((rXr,rA)=>{"use strict";var v4r=xN();rA.exports=v4r});var tA=u((eXr,eA)=>{"use strict";var f4r=wt(),l4r=jr(),c4r=je(),p4r=Ge();function g4r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,f4r(i)&&i.length>=2)e.push(i[0],i[1]);else if(l4r(i))e.push(c4r(i),p4r(i));else return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");return e}eA.exports=g4r});var nA=u((tXr,iA)=>{"use strict";var m4r=wt(),q4r=jr(),y4r=je(),h4r=Ge();function d4r(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),m4r(a)&&a.length>=2)i.push(a[0],a[1]);else if(q4r(a))i.push(y4r(a),h4r(a));else return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+a+"`.");return i}iA.exports=d4r});var uA=u((iXr,aA)=>{"use strict";var w4r=jr(),b4r=je(),E4r=Ge();function N4r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!w4r(i))return null;r[a]=b4r(i),r[a+1]=E4r(i),a+=2}return r}aA.exports=N4r});var mA=u((nXr,gA)=>{"use strict";var Qi=Le().isPrimitive,sA=wt(),zo=Mr(),oA=ko(),vA=_n(),A4r=lr(),Et=L(),xt=jr(),da=Jn(),Jo=Ar(),O4r=va(),ri=fa(),mr=w(),Ea=_(),Pr=zr(),fA=zt(),wa=je(),ba=Ge(),S4r=Yt(),T4r=Zt(),L4r=yt(),lA=tA(),I4r=nA(),_4r=uA(),Tr=Pr.BYTES_PER_ELEMENT*2,cA=O4r();function ei(r){return r instanceof x||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function pA(r){return r===x||r.name==="Complex128Array"}function P4r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Tr}function R4r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Tr*2}function x(){var r,e,t,i;if(e=arguments.length,!(this instanceof x))return e===0?new x:e===1?new x(arguments[0]):e===2?new x(arguments[0],arguments[1]):new x(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Pr(0);else if(e===1)if(Qi(arguments[0]))t=new Pr(arguments[0]*2);else if(zo(arguments[0]))if(t=arguments[0],i=t.length,i&&A4r(t)&&xt(t[0])){if(t=_4r(new Pr(i*2),t),t===null){if(!da(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Pr(arguments[0])}}else{if(P4r(t))t=S4r(t,0);else if(R4r(t))t=T4r(t,0);else if(!da(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Pr(t)}else if(oA(arguments[0])){if(t=arguments[0],!Jo(t.byteLength/Tr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Tr+". Byte length: `"+t.byteLength+"`.");t=new Pr(t)}else if(vA(arguments[0])){if(t=arguments[0],cA===!1)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Et(t[ri]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(t=t[ri](),!Et(t.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(t=lA(t),t instanceof Error)throw t;t=new Pr(t)}else throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");else{if(t=arguments[0],!oA(t))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(r=arguments[1],!Qi(r))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Jo(r/Tr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Tr+". Value: `"+r+"`.");if(e===2){if(i=t.byteLength-r,!Jo(i/Tr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Tr+". View byte length: `"+i+"`.");t=new Pr(t,r)}else{if(i=arguments[2],!Qi(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*Tr>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*Tr+"`.");t=new Pr(t,r,i*2)}}return mr(this,"_buffer",t),mr(this,"_length",t.length/2),this}mr(x,"BYTES_PER_ELEMENT",Tr);mr(x,"name","Complex64Array");mr(x,"from",function(e){var t,i,n,a,s,o,v,f,l,c,p;if(!Et(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!pA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Et(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");i>2&&(t=arguments[2])}if(ei(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,e.get(c),c),xt(l))s[p]=wa(l),s[p+1]=ba(l);else if(sA(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(zo(e)){if(n){for(v=e.length,o=L4r(e),c=0;c<v;c++)if(!xt(o.getter(e,c))){f=!0;break}if(f){if(!da(v))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+v+"`.");for(a=new this(v/2),s=a._buffer,c=0;c<v;c++)s[c]=n.call(t,o.getter(e,c),c);return a}for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,o.getter(e,c),c),xt(l))s[p]=wa(l),s[p+1]=ba(l);else if(sA(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(vA(e)&&cA&&Et(e[ri])){if(s=e[ri](),!Et(s.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(n?o=I4r(s,n,t):o=lA(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,c=0;c<v;c++)s[c]=o[c];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")});mr(x,"of",function(){var e,t;if(!Et(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!pA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Ea(x.prototype,"buffer",function(){return this._buffer.buffer});Ea(x.prototype,"byteLength",function(){return this._buffer.byteLength});Ea(x.prototype,"byteOffset",function(){return this._buffer.byteOffset});mr(x.prototype,"BYTES_PER_ELEMENT",x.BYTES_PER_ELEMENT);mr(x.prototype,"copyWithin",function(e,t){if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});mr(x.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},mr(i,"next",v),mr(i,"return",f),ri&&mr(i,ri,l),i;function v(){var c;return s+=1,a||s>=n?{done:!0}:(o+=2,c=new fA(e[o],e[o+1]),{value:[s,c],done:!1})}function f(c){return a=!0,arguments.length?{value:c,done:!0}:{done:!0}}function l(){return t.entries()}});mr(x.prototype,"get",function(e){var t;if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Qi(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new fA(t[e],t[e+1])});Ea(x.prototype,"length",function(){return this._length});mr(x.prototype,"set",function(e){var t,i,n,a,s,o,v,f,l;if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Qi(i))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+i+"`.")}else i=0;if(xt(e)){if(i>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+i+"`.");i*=2,n[i]=wa(e),n[i+1]=ba(e);return}if(ei(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,l=n.byteOffset+i*Tr,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Pr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(zo(e)){for(o=e.length,f=0;f<o;f++)if(!xt(e[f])){s=!0;break}if(s){if(!da(o))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+o+"`.");if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,l=n.byteOffset+i*Tr,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Pr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=wa(v),n[i+1]=ba(v),i+=2;return}throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.")});gA.exports=x});var Ki=u((aXr,qA)=>{"use strict";var F4r=mA();qA.exports=F4r});var hA=u((uXr,yA)=>{"use strict";var M4r=cr(),B4r=zr(),C4r=Zi(),j4r=Ki(),G4r={float64:M4r,float32:B4r,complex128:C4r,complex64:j4r};yA.exports=G4r});var wA=u((sXr,dA)=>{"use strict";var V4r=hA();function U4r(r){return V4r[r]||null}dA.exports=U4r});var EA=u((oXr,bA)=>{"use strict";var H4r=wA();bA.exports=H4r});var AA=u((vXr,NA)=>{"use strict";function W4r(r,e,t,i){var n,a,s,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,s=(e-r)/a,o=1;o<a;o++)n.push(r+s*o);return i&&n.push(e),n}NA.exports=W4r});var _A=u((fXr,IA)=>{"use strict";var k4r=zt(),D4r=Jt(),OA=Be(),SA=Ce(),TA=je(),LA=Ge();function X4r(r,e,t,i,n,a){var s,o,v,f,l,c,p,q,y,m,g,h,E;if(n===0)return[];if(o=0,r==="float64"?(f=e,c=0):r==="complex64"?(o+=1,f=TA(e),c=LA(e)):(f=OA(e),c=SA(e)),t==="float64"?(l=i,p=0):t==="complex64"?(o+=1,l=TA(i),p=LA(i)):(l=OA(i),p=SA(i)),o===2?s=k4r:s=D4r,n===1)return a?[new s(l,p)]:[new s(f,c)];for(v=[new s(f,c)],a?h=n-1:h=n,m=(l-f)/h,g=(p-c)/h,E=1;E<h;E++)q=f+m*E,y=c+g*E,v.push(new s(q,y));return a&&v.push(new s(l,p)),v}IA.exports=X4r});var Yo=u((lXr,PA)=>{"use strict";function J4r(r,e,t,i,n){var a,s,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,s=(t-e)/a,o=1;o<a;o++)r[o]=e+s*o;return n&&(r[a]=t),r}PA.exports=J4r});var Zo=u((cXr,CA)=>{"use strict";var RA=Be(),FA=Ce(),MA=je(),BA=Ge();function z4r(r,e,t,i,n,a,s){var o,v,f,l,c,p,q,y,m;if(a===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=MA(t),f=BA(t)):(o=RA(t),f=FA(t)),i==="float64"?(v=n,l=0):i==="complex64"?(v=MA(n),l=BA(n)):(v=RA(n),l=FA(n)),a===1)return s?(r[0]=v,r[1]=l):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,s?q=a-1:q=a,c=(v-o)/q,p=(l-f)/q,m=2,y=1;y<q;y++)r[m]=o+c*y,r[m+1]=f+p*y,m+=2;return s&&(r[m]=v,r[m+1]=l),r}CA.exports=z4r});var Qo=u((pXr,GA)=>{"use strict";var Y4r=T(),jA=A(),Z4r=z().isPrimitive,Q4r=ur().isPrimitive;function K4r(r,e){return Y4r(e)?jA(e,"dtype")&&(r.dtype=e.dtype,!Z4r(r.dtype))?new TypeError("invalid option. `dtype` option must be a string. Option: `"+r.dtype+"`."):jA(e,"endpoint")&&(r.endpoint=e.endpoint,!Q4r(r.endpoint))?new TypeError("invalid option. `endpoint` option must be a boolean. Option: `"+r.endpoint+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}GA.exports=K4r});var Ko=u((gXr,$4r)=>{$4r.exports={endpoint:!0}});var XA=u((mXr,DA)=>{"use strict";var VA=jr(),UA=j().isPrimitive,x4r=Le().isPrimitive,HA=b(),WA=Wo(),r8r=EA(),e8r=Yt(),t8r=Zt(),i8r=AA(),n8r=_A(),a8r=Yo(),kA=Zo(),u8r=Qo(),s8r=Ko();function o8r(r,e,t){var i,n,a,s,o,v,f;if(typeof r=="object"){if(o=WA(r),o===null){if(!VA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");o="complex128"}f=!0}else{if(!UA(r)||HA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");o="float64"}if(typeof e=="object"){if(v=WA(e),v===null){if(!VA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");v="complex128"}f=!0}else{if(!UA(e)||HA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");v="float64"}if(!x4r(t))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+t+"`.");if(i={endpoint:s8r.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=u8r(i,arguments[3]),a))throw a;if(i.dtype==="generic")return f?n8r(o,r,v,e,t,i.endpoint):i8r(r,e,t,i.endpoint);if(n=r8r(i.dtype),n===null)throw new TypeError('invalid argument. `dtype` option must be a real or complex floating-point data type or "generic". Option: `'+i.dtype+"`.");if(s=new n(t),i.dtype==="complex64")return kA(e8r(s,0),o,r,v,e,t,i.endpoint),s;if(i.dtype==="complex128")return kA(t8r(s,0),o,r,v,e,t,i.endpoint),s;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return a8r(s,r,e,t,i.endpoint)}DA.exports=o8r});var zA=u((qXr,JA)=>{"use strict";var v8r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};JA.exports=v8r});var ZA=u((yXr,YA)=>{"use strict";var f8r=cr(),l8r=zr(),c8r=vr(),p8r=lt(),g8r=Bt(),m8r=Ii(),q8r=Mt(),y8r=Li(),h8r=Ti(),d8r=Ki(),w8r=Zi(),b8r=[f8r,l8r,p8r,c8r,m8r,g8r,h8r,q8r,y8r,d8r,w8r];YA.exports=b8r});var KA=u((hXr,QA)=>{"use strict";var E8r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];QA.exports=E8r});var rO=u((dXr,xA)=>{"use strict";var N8r=ut(),A8r=lr(),O8r=Te(),S8r=zA(),T8r=ZA(),$A=KA(),L8r=$A.length;function I8r(r){var e;if(A8r(r))return"generic";if(N8r(r))return null;for(e=0;e<L8r;e++)if(r instanceof T8r[e])return $A[e];return S8r[O8r(r)]||null}xA.exports=I8r});var tO=u((wXr,eO)=>{"use strict";var _8r=rO();eO.exports=_8r});var oO=u((bXr,sO)=>{"use strict";var P8r=zt(),R8r=Jt(),iO=Be(),nO=Ce(),aO=je(),uO=Ge();function F8r(r,e,t,i,n,a,s){var o,v,f,l,c,p,q,y,m,g,h,E,N,G;if(a===0)return r;if(v=0,e==="float64"?(f=t,c=0):e==="complex64"?(v+=1,f=aO(t),c=uO(t)):(f=iO(t),c=nO(t)),i==="float64"?(l=n,p=0):i==="complex64"?(v+=1,l=aO(n),p=uO(n)):(l=iO(n),p=nO(n)),v===2?o=P8r:o=R8r,y=r.data,q=r.setter,a===1)return s?q(y,0,new o(l,p)):q(y,0,new o(f,c)),r;for(q(y,0,new o(f,c)),s?N=a-1:N=a,h=(l-f)/N,E=(p-c)/N,G=1;G<N;G++)m=f+h*G,g=c+E*G,q(y,G,new o(m,g));return s&&q(y,N,new o(l,p)),r}sO.exports=F8r});var fO=u((EXr,vO)=>{"use strict";function M8r(r,e,t,i,n){var a,s,o,v,f;if(i===0)return r;if(a=r.data,s=r.setter,i===1)return n?s(a,0,t):s(a,0,e),r;for(s(a,0,e),n?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)s(a,f,e+v*f);return n&&s(a,o,t),r}vO.exports=M8r});var hO=u((NXr,yO)=>{"use strict";var lO=jr(),cO=j().isPrimitive,B8r=Mr(),pO=b(),gO=Wo(),C8r=tO(),j8r=Yt(),G8r=Zt(),mO=yt(),V8r=oO(),U8r=fO(),qO=Zo(),H8r=Yo(),W8r=Qo(),k8r=Ko();function D8r(r,e,t){var i,n,a,s,o,v,f;if(typeof r=="object"){if(a=gO(r),a===null){if(!lO(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");a="complex128"}o=!0}else{if(!cO(r)||pO(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");a="float64"}if(typeof e=="object"){if(s=gO(e),s===null){if(!lO(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");s="complex128"}o=!0}else{if(!cO(e)||pO(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");s="float64"}if(!B8r(t))throw new TypeError("invalid argument. Third argument must be an array-like object. Value: `"+t+"`.");if(i={endpoint:k8r.endpoint},arguments.length>3&&(n=W8r(i,arguments[3]),n))throw n;if(v=C8r(t),v===null&&(v="generic"),v==="complex64")return qO(j8r(t,0),a,r,s,e,t.length,i.endpoint),t;if(v==="complex128")return qO(G8r(t,0),a,r,s,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=mO(t),V8r(f,a,r,s,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=mO(t),f.accessors?(U8r(f,r,e,t.length,i.endpoint),t):(H8r(t,r,e,t.length,i.endpoint),t)}yO.exports=D8r});var bO=u((AXr,wO)=>{"use strict";var X8r=w(),dO=XA(),J8r=hO();X8r(dO,"assign",J8r);wO.exports=dO});var NO=u((OXr,EO)=>{"use strict";var z8r=b(),Y8r=Fe();function Z8r(r,e,t){var i,n,a,s;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],s=1;s<r;s++){if(n+=t,a=e[n],z8r(a))return a;(a>i||a===i&&Y8r(a))&&(i=a)}return i}EO.exports=Z8r});var OO=u((SXr,AO)=>{"use strict";var Q8r=b(),K8r=Fe();function $8r(r,e,t,i){var n,a,s,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,s=e[a],Q8r(s))return s;(s>n||s===n&&K8r(s))&&(n=s)}return n}AO.exports=$8r});var LO=u((TXr,TO)=>{"use strict";var x8r=w(),SO=NO(),r5r=OO();x8r(SO,"ndarray",r5r);TO.exports=SO});var _O=u((LXr,IO)=>{"use strict";var e5r=LO();IO.exports=e5r});var FO=u((IXr,RO)=>{"use strict";var PO=b(),t5r=Fe();function i5r(r,e,t,i,n){var a,s,o,v,f;if(r<=0)return NaN;for(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,f=0;f<r&&i[o]!==0;f++)s+=t,o+=n;if(f===r)return NaN;if(a=e[s],PO(a))return a;for(f+=1,f;f<r;f++)if(s+=t,o+=n,!i[o]){if(v=e[s],PO(v))return v;(v>a||v===a&&t5r(v))&&(a=v)}return a}RO.exports=i5r});var CO=u((_Xr,BO)=>{"use strict";var MO=b(),n5r=Fe();function a5r(r,e,t,i,n,a,s){var o,v,f,l,c;if(r<=0)return NaN;for(v=i,f=s,c=0;c<r&&n[f]!==0;c++)v+=t,f+=a;if(c===r)return NaN;if(o=e[v],MO(o))return o;for(c+=1,c;c<r;c++)if(v+=t,f+=a,!n[f]){if(l=e[v],MO(l))return l;(l>o||l===o&&n5r(l))&&(o=l)}return o}BO.exports=a5r});var VO=u((PXr,GO)=>{"use strict";var u5r=w(),jO=FO(),s5r=CO();u5r(jO,"ndarray",s5r);GO.exports=jO});var HO=u((RXr,UO)=>{"use strict";function o5r(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError("invalid argument. `left` must be one of the following strings: 'closed' or 'open'. Value: `"+i+"`.");if(n!=="closed"&&n!=="open")throw new TypeError("invalid argument. `right` must be one of the following strings: 'closed' or 'open'. Value: `"+n+"`.")}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}UO.exports=o5r});var kO=u((FXr,WO)=>{"use strict";var v5r=HO();WO.exports=v5r});var XO=u((MXr,DO)=>{"use strict";var f5r=j().isPrimitive,l5r=kO(),c5r=S();function p5r(r,e,t,i,n,a){var s,o;if(!(f5r(r)&&l5r(r,e,t,i,n)))throw i==="closed"?s="[":s="(",n==="closed"?o="]":o=")",new TypeError(c5r("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,s,e,t,o,String(r)))}DO.exports=p5r});var zO=u((BXr,JO)=>{"use strict";var g5r=ur().isPrimitive,m5r=S();function q5r(r,e){if(!g5r(r))throw new TypeError(m5r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}JO.exports=q5r});var ZO=u((CXr,YO)=>{"use strict";function y5r(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}YO.exports=y5r});var KO=u((jXr,QO)=>{"use strict";var h5r=S(),d5r=ZO();function w5r(r,e,t){if(!d5r(r,e))throw new TypeError(h5r("invalid argument. %s must be broadcast compatible.",t))}QO.exports=w5r});var xO=u((GXr,$O)=>{"use strict";function b5r(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}$O.exports=b5r});var eS=u((VXr,rS)=>{"use strict";var E5r=S(),N5r=xO();function A5r(r,e,t,i){if(!N5r(r,e))throw new TypeError(E5r("invalid argument. %s must be broadcast compatible with %s.",t,i))}rS.exports=A5r});var $o=u((UXr,tS)=>{"use strict";var O5r=S();function S5r(r,e){if(r===void 0)throw new Error(O5r("invalid invocation. Must provide %s.",e))}tS.exports=S5r});var nS=u((HXr,iS)=>{"use strict";var T5r=S();function L5r(r,e,t,i){if(!(r>e))throw new TypeError(T5r("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}iS.exports=L5r});var uS=u((WXr,aS)=>{"use strict";var I5r=S();function _5r(r,e,t,i){if(!(r>=e))throw new TypeError(I5r("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}aS.exports=_5r});var oS=u((kXr,sS)=>{"use strict";var P5r=Fr().isPrimitive,R5r=S();function F5r(r,e){if(!P5r(r))throw new TypeError(R5r("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}sS.exports=F5r});var fS=u((DXr,vS)=>{"use strict";var M5r=S();function B5r(r,e,t,i){if(!(r<e))throw new TypeError(M5r("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}vS.exports=B5r});var cS=u((XXr,lS)=>{"use strict";var C5r=S();function j5r(r,e,t,i){if(!(r<=e))throw new TypeError(C5r("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}lS.exports=j5r});var gS=u((JXr,pS)=>{"use strict";var G5r=Le().isPrimitive,V5r=S();function U5r(r,e){if(!G5r(r))throw new TypeError(V5r("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}pS.exports=U5r});var qS=u((zXr,mS)=>{"use strict";var H5r=Vo().isPrimitive,W5r=S();function k5r(r,e){if(!H5r(r))throw new TypeError(W5r("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}mS.exports=k5r});var hS=u((YXr,yS)=>{"use strict";var D5r=j().isPrimitive,X5r=S();function J5r(r,e){if(!D5r(r))throw new TypeError(X5r("invalid argument. %s must be a number. Value: %s.",e,String(r)))}yS.exports=J5r});var wS=u((ZXr,dS)=>{"use strict";var z5r=S();function Y5r(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(z5r('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}dS.exports=Y5r});var xo=u((QXr,bS)=>{"use strict";var Z5r=xr().isPrimitive,Q5r=S();function K5r(r,e){if(!Z5r(r))throw new TypeError(Q5r("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}bS.exports=K5r});var NS=u((KXr,ES)=>{"use strict";var $5r=W().isPrimitive,x5r=S();function r9r(r,e){if(!$5r(r))throw new TypeError(x5r("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}ES.exports=r9r});var r1=u(($Xr,AS)=>{"use strict";var e9r=j().isPrimitive;function t9r(r){return e9r(r)&&r>=0&&r<=1}AS.exports=t9r});var e1=u((xXr,OS)=>{"use strict";var i9r=j().isObject;function n9r(r){return i9r(r)&&r.valueOf()>=0&&r.valueOf()<=1}OS.exports=n9r});var TS=u((rJr,SS)=>{"use strict";var a9r=r1(),u9r=e1();function s9r(r){return a9r(r)||u9r(r)}SS.exports=s9r});var $i=u((eJr,IS)=>{"use strict";var LS=w(),t1=TS(),o9r=r1(),v9r=e1();LS(t1,"isPrimitive",o9r);LS(t1,"isObject",v9r);IS.exports=t1});var PS=u((tJr,_S)=>{"use strict";var f9r=$i().isPrimitive,l9r=S();function c9r(r,e){if(!f9r(r))throw new TypeError(l9r("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}_S.exports=c9r});var FS=u((iJr,RS)=>{"use strict";var p9r=lr(),g9r=S();function m9r(r,e){if(!p9r(r))throw new TypeError(g9r("invalid argument. %s must be a range. Value: %s.",e,String(r)))}RS.exports=m9r});var BS=u((nJr,MS)=>{"use strict";function q9r(r){return r.length===1||r[0].length===1}MS.exports=q9r});var jS=u((aJr,CS)=>{"use strict";var y9r=lr(),h9r=BS();function d9r(r){return y9r(r)&&h9r(r)}CS.exports=d9r});var VS=u((uJr,GS)=>{"use strict";var w9r=S(),b9r=jS();function E9r(r,e){if(!b9r(r))throw new TypeError(w9r("invalid argument. %s must consist of only a single row or a single column.",e))}GS.exports=E9r});var HS=u((sJr,US)=>{"use strict";function N9r(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}US.exports=N9r});var kS=u((oJr,WS)=>{"use strict";var A9r=S(),O9r=HS();function S9r(r,e,t){if(!O9r(r,e))throw new TypeError(A9r("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}WS.exports=S9r});var XS=u((vJr,DS)=>{"use strict";var T9r=z().isPrimitive,L9r=S();function I9r(r,e){if(!T9r(r))throw new TypeError(L9r("invalid argument. %s must be a string. Value: %s.",e,String(r)))}DS.exports=I9r});var zS=u((fJr,JS)=>{"use strict";var _9r=S();function P9r(r){throw new Error(_9r("invalid argument. Unrecognized option name. Value: %s.",String(r)))}JS.exports=P9r});var QS=u((lJr,ZS)=>{"use strict";var YS=xo(),R9r=$o();function F9r(r,e,t){YS(r,"Number of rows"),YS(e,"Number of columns"),R9r(t,"a pseudorandom number generator seed")}ZS.exports=F9r});var $S=u((cJr,KS)=>{"use strict";var M9r=lr(),B9r=Fr().isPrimitive,C9r=S(),j9r=oa();function G9r(r){if(B9r(r))return r;if(M9r(r))return j9r(r);throw new TypeError(C9r("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}KS.exports=G9r});var rT=u((pJr,xS)=>{"use strict";var Y={};Y.isBetween=XO();Y.isBoolean=zO();Y.isBroadcastCompatible=KO();Y.isBroadcastCompatibleWith=eS();Y.isDefined=$o();Y.isGreaterThan=nS();Y.isGreaterThanEqual=uS();Y.isInteger=oS();Y.isLessThan=fS();Y.isLessThanEqual=cS();Y.isNonNegativeInteger=gS();Y.isNonNegativeNumber=qS();Y.isNumber=hS();Y.isOneOf=wS();Y.isPositiveInteger=xo();Y.isPositiveNumber=NS();Y.isProbability=PS();Y.isRange=FS();Y.isRange1d=VS();Y.isSameShape=kS();Y.isString=XS();Y.unrecognizedOptionName=zS();Y.verifyCommonPRNGArgs=QS();Y.verifyPRNGSeed=$S();xS.exports=Y});var tT=u((gJr,eT)=>{"use strict";var i1=4;function V9r(r,e,t,i,n,a){var s,o,v,f;if(r<=0||e===0)return n;if(i===1&&a===1){if(v=r%i1,v>0)for(f=0;f<v;f++)n[f]+=e*t[f];if(r<i1)return n;for(f=v;f<r;f+=i1)n[f]+=e*t[f],n[f+1]+=e*t[f+1],n[f+2]+=e*t[f+2],n[f+3]+=e*t[f+3];return n}for(i<0?s=(1-r)*i:s=0,a<0?o=(1-r)*a:o=0,f=0;f<r;f++)n[o]+=e*t[s],s+=i,o+=a;return n}eT.exports=V9r});var nT=u((mJr,iT)=>{"use strict";var xi=4;function U9r(r,e,t,i,n,a,s,o){var v,f,l,c;if(r<=0||e===0)return a;if(v=n,f=o,i===1&&s===1){if(l=r%xi,l>0)for(c=0;c<l;c++)a[f]+=e*t[v],v+=i,f+=s;if(r<xi)return a;for(c=l;c<r;c+=xi)a[f]+=e*t[v],a[f+1]+=e*t[v+1],a[f+2]+=e*t[v+2],a[f+3]+=e*t[v+3],v+=xi,f+=xi;return a}for(c=0;c<r;c++)a[f]+=e*t[v],v+=i,f+=s;return a}iT.exports=U9r});var n1=u((qJr,uT)=>{"use strict";var H9r=w(),aT=tT(),W9r=nT();H9r(aT,"ndarray",W9r);uT.exports=aT});var oT=u((yJr,sT)=>{"use strict";var a1={};a1.daxpy=n1().ndarray;a1.saxpy=n1().ndarray;sT.exports=a1});var fT=u((hJr,vT)=>{"use strict";function k9r(r){return r*r}vT.exports=k9r});var cT=u((dJr,lT)=>{"use strict";var D9r=fT();lT.exports=D9r});var gT=u((wJr,pT)=>{"use strict";function X9r(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}pT.exports=X9r});var qT=u((bJr,mT)=>{"use strict";function J9r(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}mT.exports=J9r});var dT=u((EJr,hT)=>{"use strict";var z9r=b(),Y9r=V(),yT=ca(),Z9r=gT(),Q9r=qT(),K9r=6123233995736766e-32;function $9r(r){var e,t,i,n,a;if(z9r(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*Q9r(t),t=Y9r(t+t),a=yT-t,t=t*n-K9r,a-=t,a+=yT;else{if(i<1e-8)return r;t=i*i,a=t*Z9r(t),a=i*a+i}return e?-a:a}hT.exports=$9r});var Nt=u((NJr,wT)=>{"use strict";var x9r=dT();wT.exports=x9r});var AT=u((AJr,NT)=>{"use strict";var r7r=b(),bT=Nt(),e7r=V(),ET=ca(),t7r=6123233995736766e-32;function i7r(r){var e;return r7r(r)?NaN:r<-1||r>1?NaN:r>.5?2*bT(e7r(.5-.5*r)):(e=ET-bT(r),e+=t7r,e+=ET,e)}NT.exports=i7r});var rn=u((OJr,OT)=>{"use strict";var n7r=AT();OT.exports=n7r});var IT=u((SJr,LT)=>{"use strict";var a7r=b(),u7r=Dt(),ST=V(),s7r=Kn(),TT=C(),o7r=1<<28;function v7r(r){var e;return a7r(r)?NaN:r<1?NaN:r===1?0:r>=o7r?TT(r)+s7r:r>2?TT(2*r-1/(r+ST(r*r-1))):(e=r-1,u7r(e+ST(2*e+e*e)))}LT.exports=v7r});var PT=u((TJr,_T)=>{"use strict";var f7r=IT();_T.exports=f7r});var FT=u((LJr,RT)=>{"use strict";var l7r=pa();function c7r(r){return l7r(1/r)}RT.exports=c7r});var BT=u((IJr,MT)=>{"use strict";var p7r=FT();MT.exports=p7r});var jT=u((_Jr,CT)=>{"use strict";var g7r=Nt();function m7r(r){return g7r(1+r)}CT.exports=m7r});var VT=u((PJr,GT)=>{"use strict";var q7r=jT();GT.exports=q7r});var HT=u((RJr,UT)=>{"use strict";var y7r=Nt();function h7r(r){return y7r(1-r)}UT.exports=h7r});var kT=u((FJr,WT)=>{"use strict";var d7r=HT();WT.exports=d7r});var XT=u((MJr,DT)=>{"use strict";var w7r=Nt();function b7r(r){return w7r(1/r)}DT.exports=b7r});var zT=u((BJr,JT)=>{"use strict";var E7r=XT();JT.exports=E7r});var KT=u((CJr,QT)=>{"use strict";var N7r=Ir(),A7r=b(),O7r=Dt(),YT=V(),S7r=Kn(),ZT=C(),T7r=1/(1<<28),L7r=1<<28;function I7r(r){var e,t,i;return A7r(r)||N7r(r)?r:(r<0&&(r=-r,e=!0),r<T7r?i=r:r>L7r?i=ZT(r)+S7r:r>2?i=ZT(2*r+1/(YT(r*r+1)+r)):(t=r*r,i=O7r(r+t/(1+YT(1+t)))),e?-i:i)}QT.exports=I7r});var u1=u((jJr,$T)=>{"use strict";var _7r=KT();$T.exports=_7r});var rL=u((GJr,xT)=>{"use strict";var P7r=u1();function R7r(r){return P7r(1/r)}xT.exports=R7r});var tL=u((VJr,eL)=>{"use strict";var F7r=rL();eL.exports=F7r});var nL=u((UJr,iL)=>{"use strict";var M7r=rn(),B7r=V();function C7r(r){return 2*M7r(B7r(r))}iL.exports=C7r});var uL=u((HJr,aL)=>{"use strict";var j7r=nL();aL.exports=j7r});var oL=u((WJr,sL)=>{"use strict";var G7r=Nt(),V7r=V();function U7r(r){return 2*G7r(V7r(r))}sL.exports=U7r});var fL=u((kJr,vL)=>{"use strict";var H7r=oL();vL.exports=H7r});var pL=u((DJr,cL)=>{"use strict";var W7r=b(),lL=Dt(),k7r=P(),D7r=D(),X7r=1/(1<<28);function J7r(r){var e,t;return W7r(r)?NaN:r<-1||r>1?NaN:r===1?k7r:r===-1?D7r:(r<0&&(e=!0,r=-r),r<X7r?e?-r:r:(r<.5?(t=r+r,t=.5*lL(t+t*r/(1-r))):t=.5*lL((r+r)/(1-r)),e?-t:t))}cL.exports=J7r});var mL=u((XJr,gL)=>{"use strict";var z7r=pL();gL.exports=z7r});var yL=u((JJr,qL)=>{"use strict";var Y7r=rn();function Z7r(r){return Y7r(1+r)}qL.exports=Z7r});var dL=u((zJr,hL)=>{"use strict";var Q7r=yL();hL.exports=Q7r});var bL=u((YJr,wL)=>{"use strict";var K7r=rn();function $7r(r){return K7r(1-r)}wL.exports=$7r});var NL=u((ZJr,EL)=>{"use strict";var x7r=bL();EL.exports=x7r});var SL=u((QJr,OL)=>{"use strict";var AL=-.16666666666666632,rgr=.00833333333332249,egr=-.0001984126982985795,tgr=27557313707070068e-22,igr=-25050760253406863e-24,ngr=158969099521155e-24,agr=.0416666666666666,ugr=-.001388888888887411,sgr=2480158728947673e-20,ogr=-27557314351390663e-23,vgr=2087572321298175e-24,fgr=-11359647557788195e-27;function lgr(r,e,t){var i,n,a,s,o;return o=e*e,s=o*o,n=rgr+o*(egr+o*tgr)+o*s*(igr+o*ngr),a=o*e,t===0?r[0]=e+a*(AL+o*n):r[0]=e-(o*(.5*t-a*n)-t-a*AL),n=o*(agr+o*(ugr+o*sgr)),n+=s*s*(ogr+o*(vgr+o*fgr)),i=.5*o,s=1-i,r[1]=s+(1-s-i+(o*n-e*t)),r}OL.exports=lgr});var IL=u((KJr,LL)=>{"use strict";var cgr=er(),pgr=Ci(),TL=SL(),ggr=2147483647,mgr=2146435072,qgr=1072243195,ygr=1044381696,s1=[0,0];function hgr(r,e){var t,i;if(t=cgr(e),t&=ggr,t<=qgr)return t<ygr&&(e|0)===0&&(r[0]=e,r[1]=0),TL(r,e,0);if(t>=mgr)return r[0]=NaN,r[1]=NaN,r;switch(i=pgr(e,s1),TL(r,s1[0],s1[1]),i&3){case 1:return t=r[1],r[1]=-r[0],r[0]=t,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return t=-r[1],r[1]=r[0],r[0]=t,r;default:return r}}LL.exports=hgr});var RL=u(($Jr,PL)=>{"use strict";var _L=IL();function dgr(r,e){return arguments.length===1?_L([0,0],r):_L(r,e)}PL.exports=dgr});var en=u((xJr,FL)=>{"use strict";var wgr=RL();FL.exports=wgr});var BL=u((rzr,ML)=>{"use strict";function bgr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}ML.exports=bgr});var jL=u((ezr,CL)=>{"use strict";function Egr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}CL.exports=Egr});var VL=u((tzr,GL)=>{"use strict";function Ngr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}GL.exports=Ngr});var HL=u((izr,UL)=>{"use strict";function Agr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}UL.exports=Agr});var kL=u((nzr,WL)=>{"use strict";var Ogr=V(),Sgr=en(),Tgr=P(),Lgr=BL(),Igr=jL(),_gr=VL(),Pgr=HL(),Rgr=.5641895835477563,Fgr=2.404825557695773,Mgr=5.520078110286311,Bgr=616,Cgr=-.0014244423042272315,jgr=1413,Ggr=.0005468602863106496,tn=[0,0];function Vgr(r){var e,t,i,n,a,s;return r<0&&(r=-r),r===Tgr?0:r===0?1:r<=4?(a=r*r,n=Lgr(a),s=(r+Fgr)*(r-Bgr/256-Cgr),s*n):r<=8?(a=1-r*r/64,n=Igr(a),s=(r+Mgr)*(r-jgr/256-Ggr),s*n):(a=8/r,i=a*a,e=_gr(i),t=Pgr(i),s=Rgr/Ogr(r),Sgr(tn,r),s*(e*(tn[1]+tn[0])-a*t*(tn[0]-tn[1])))}WL.exports=Vgr});var o1=u((azr,DL)=>{"use strict";var Ugr=kL();DL.exports=Ugr});var Na=u((uzr,XL)=>{"use strict";var Hgr=1.772453850905516;XL.exports=Hgr});var zL=u((szr,JL)=>{"use strict";function Wgr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}JL.exports=Wgr});var ZL=u((ozr,YL)=>{"use strict";function kgr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}YL.exports=kgr});var KL=u((vzr,QL)=>{"use strict";function Dgr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}QL.exports=Dgr});var xL=u((fzr,$L)=>{"use strict";function Xgr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}$L.exports=Xgr});var eI=u((lzr,rI)=>{"use strict";var Jgr=V(),zgr=Q(),Ygr=en(),Zgr=P(),Qgr=Na(),Kgr=zL(),$gr=ZL(),xgr=KL(),rmr=xL(),emr=3.8317059702075125,tmr=7.015586669815619,imr=981,nmr=-.0003252797924876844,amr=1796,umr=-38330184381246464e-21,nn=[0,0];function smr(r){var e,t,i,n,a,s,o,v;return v=zgr(r),r===0||v===Zgr?0:(v<=4?(s=r*r,a=Kgr(s),o=v*(v+emr)*(v-imr/256-nmr),e=o*a):v<=8?(s=r*r,a=$gr(s),o=v*(v+tmr)*(v-amr/256-umr),e=o*a):(s=8/v,n=s*s,t=xgr(n),i=rmr(n),o=1/(Jgr(v)*Qgr),Ygr(nn,v),e=o*(t*(nn[0]-nn[1])+s*i*(nn[0]+nn[1]))),r<0&&(e*=-1),e)}rI.exports=smr});var v1=u((czr,tI)=>{"use strict";var omr=eI();tI.exports=omr});var nI=u((pzr,iI)=>{"use strict";function vmr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}iI.exports=vmr});var uI=u((gzr,aI)=>{"use strict";function fmr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}aI.exports=fmr});var oI=u((mzr,sI)=>{"use strict";function lmr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}sI.exports=lmr});var fI=u((qzr,vI)=>{"use strict";function cmr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}vI.exports=cmr});var cI=u((yzr,lI)=>{"use strict";function pmr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}lI.exports=pmr});var yI=u((hzr,qI)=>{"use strict";var f1=C(),gmr=V(),mmr=Or(),qmr=Na(),ymr=D(),hmr=P(),dmr=en(),l1=o1(),wmr=nI(),bmr=uI(),Emr=oI(),Nmr=fI(),Amr=cI(),Omr=1/qmr,c1=2/mmr,pI=.8935769662791675,gI=3.957678419314858,mI=7.086051060301773,Smr=228,Tmr=.0029519662791675214,Lmr=1013,Imr=.0006471693148578684,_mr=1814,Pmr=.00011356030177269763,an=[0,0];function Rmr(r){var e,t,i,n,a,s,o;return r<0?NaN:r===0?ymr:r===hmr?0:r<=3?(a=r*r,s=f1(r/pI)*l1(r)*c1,n=wmr(a),o=(r+pI)*(r-Smr/256-Tmr),s+o*n):r<=5.5?(a=r*r,s=f1(r/gI)*l1(r)*c1,n=bmr(a),o=(r+gI)*(r-Lmr/256-Imr),s+o*n):r<=8?(a=r*r,s=f1(r/mI)*l1(r)*c1,n=Emr(a),o=(r+mI)*(r-_mr/256-Pmr),s+o*n):(a=8/r,i=a*a,e=Nmr(i),t=Amr(i),o=Omr/gmr(r),dmr(an,r),o*(e*(an[0]-an[1])+a*t*(an[1]+an[0])))}qI.exports=Rmr});var dI=u((dzr,hI)=>{"use strict";var Fmr=yI();hI.exports=Fmr});var bI=u((wzr,wI)=>{"use strict";function Mmr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}wI.exports=Mmr});var NI=u((bzr,EI)=>{"use strict";function Bmr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}EI.exports=Bmr});var OI=u((Ezr,AI)=>{"use strict";function Cmr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}AI.exports=Cmr});var TI=u((Nzr,SI)=>{"use strict";function jmr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}SI.exports=jmr});var MI=u((Azr,FI)=>{"use strict";var LI=C(),Gmr=V(),Vmr=Or(),Umr=Na(),Hmr=D(),Wmr=P(),kmr=en(),II=v1(),Dmr=bI(),Xmr=NI(),Jmr=OI(),zmr=TI(),Ymr=1/Umr,_I=2/Vmr,PI=2.197141326031017,RI=5.429681040794135,Zmr=562,Qmr=.001828826031017035,Kmr=1390,$mr=-6459205864867228e-21,un=[0,0];function xmr(r){var e,t,i,n,a,s,o;return r<0?NaN:r===0?Hmr:r===Wmr?0:r<=4?(a=r*r,s=LI(r/PI)*II(r)*_I,n=Dmr(a),o=(r+PI)*(r-Zmr/256-Qmr)/r,s+o*n):r<=8?(a=r*r,s=LI(r/RI)*II(r)*_I,n=Xmr(a),o=(r+RI)*(r-Kmr/256-$mr)/r,s+o*n):(a=8/r,i=a*a,e=Jmr(i),t=zmr(i),o=Ymr/Gmr(r),kmr(un,r),o*(a*t*(un[0]-un[1])-e*(un[0]+un[1])))}FI.exports=xmr});var CI=u((Ozr,BI)=>{"use strict";var rqr=MI();BI.exports=rqr});var VI=u((Szr,GI)=>{"use strict";var eqr=b(),tqr=Ir(),iqr=Q(),jI=mt(),nqr=Vt(),aqr=K(),p1=Or(),uqr=Xi(),sqr=uqr+1;function oqr(r){var e,t,i,n;return eqr(r)?NaN:tqr(r)?NaN:(e=iqr(r),e>sqr?1:(t=aqr(e),i=e-t,i===.5?0:(i<.25?n=jI(p1*i):i<.75?(i=.5-i,n=nqr(p1*i)):(i=1-i,n=-jI(p1*i)),t%2===1?-n:n)))}GI.exports=oqr});var HI=u((Tzr,UI)=>{"use strict";var vqr=VI();UI.exports=vqr});var kI=u((Lzr,WI)=>{"use strict";var fqr=1.618033988749895;WI.exports=fqr});var XI=u((Izr,DI)=>{"use strict";var lqr=b(),cqr=HI(),pqr=Z(),gqr=kI(),mqr=P(),qqr=D(),yqr=2.23606797749979;function hqr(r){var e,t;return lqr(r)||r===mqr||r===qqr?NaN:(e=pqr(gqr,r),t=cqr(r)/e,(e-t)/yqr)}DI.exports=hqr});var zI=u((_zr,JI)=>{"use strict";var dqr=XI();JI.exports=dqr});var ZI=u((Pzr,YI)=>{"use strict";function wqr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}YI.exports=wqr});var xI=u((Rzr,$I)=>{"use strict";var bqr=Ts(),m1=er(),Eqr=Yr(),Nqr=Ir(),QI=Fi(),Aqr=Gt(),Oqr=b(),Sqr=ZI(),Tqr=2147483648>>>0,KI=2147483647>>>0,Lqr=4294967295>>>0,Iqr=3221225472>>>0,_qr=0x40000000000000,g1=2147483648>>>0,Pqr=1>>>0,Rqr=715094163>>>0,Fqr=696219795>>>0,Mqr=m1(bqr),At=[0>>>0,0>>>0];function Bqr(r){var e,t,i,n,a,s,o;return r===0||Oqr(r)||Nqr(r)?r:(t=m1(r)>>>0,e=(t&Tqr)>>>0,t&=KI,t<Mqr?(s=_qr*r,i=(m1(s)&KI)>>>0,i=(i/3>>>0)+Fqr>>>0,s=QI(e|i,0)):(s=0,i=(t/3>>>0)+Rqr>>>0,s=Eqr(s,e|i)),n=s*s*(s/r),s*=Sqr(n),Aqr(At,s),At[1]&g1?(At[0]+=Pqr,At[1]&=~g1):At[1]|=g1,s=QI(At[0]&Lqr,At[1]&Iqr),a=s*s,n=r/a,o=s+s,n=(n-s)/(o+n),s+=s*n,s)}$I.exports=Bqr});var e_=u((Fzr,r_)=>{"use strict";var Cqr=xI();r_.exports=Cqr});var i_=u((Mzr,t_)=>{"use strict";function jqr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}t_.exports=jqr});var a_=u((Bzr,n_)=>{"use strict";function Gqr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}n_.exports=Gqr});var o_=u((Czr,s_)=>{"use strict";var Vqr=er(),Uqr=i_(),Hqr=a_(),u_=1048575,Wqr=.3333333333333333;function kqr(r){var e,t,i,n,a,s,o,v,f,l,c;return n=Vqr(r),a=r-1,(u_&2+n)<3?a===0?0:a*a*(Wqr*a-.5):(s=a/(2+a),o=s*s,n&=u_,l=n-398458|0,f=o*o,c=440401-n|0,t=f*Uqr(f),i=o*Hqr(f),l|=c,v=i+t,l>0?(e=.5*a*a,s*(e+v)-e):s*(v-a))}s_.exports=kqr});var c_=u((jzr,l_)=>{"use strict";var v_=er(),Dqr=Yr(),Xqr=Kr(),Jqr=b(),zqr=Wr(),Yqr=D(),Zqr=o_(),Qqr=0x40000000000000,f_=.4342944818781689,Kqr=25082946711645275e-27,$qr=.30102999566361177,xqr=3694239077158931e-28,ryr=1048575,eyr=2146435072,tyr=1048576,iyr=1072693248;function nyr(r){var e,t,i,n,a,s,o,v;return Jqr(r)||r<0?NaN:r===0?Yqr:(t=v_(r),s=0,t<tyr&&(s-=54,r*=Qqr,t=v_(r)),t>=eyr?r+r:(s+=(t>>20)-zqr|0,t&=ryr,a=t+614244&1048576|0,r=Dqr(r,t|a^iyr),s+=a>>20|0,o=s,n=Zqr(r),r-=1,e=Xqr(r,0),i=r-e,v=o*xqr+(r+n)*Kqr,v+=(i+n)*f_+e*f_,v+o*$qr))}l_.exports=nyr});var g_=u((Gzr,p_)=>{"use strict";var ayr=c_();p_.exports=ayr});var q_=u((Vzr,m_)=>{"use strict";var uyr=b(),syr=Ir(),oyr=Z(),vyr=K(),fyr=Ri(),lyr=g_(),cyr=Oo(),pyr=So(),gyr=P();function myr(r){var e,t;return uyr(r)||syr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=lyr(r),e===-1?t=vyr(t):t=fyr(t),t<=pyr?e*0:t>cyr?gyr:e*oyr(10,t))}m_.exports=myr});var h_=u((Uzr,y_)=>{"use strict";var qyr=q_();y_.exports=qyr});var w_=u((Hzr,d_)=>{"use strict";function yyr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}d_.exports=yyr});var E_=u((Wzr,b_)=>{"use strict";function hyr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}b_.exports=hyr});var O_=u((kzr,A_)=>{"use strict";var dyr=er(),wyr=w_(),byr=E_(),N_=1048575,Eyr=.3333333333333333;function Nyr(r){var e,t,i,n,a,s,o,v,f,l,c;return n=dyr(r),a=r-1,(N_&2+n)<3?a===0?0:a*a*(Eyr*a-.5):(s=a/(2+a),o=s*s,n&=N_,l=n-398458|0,f=o*o,c=440401-n|0,t=f*wyr(f),i=o*byr(f),l|=c,v=i+t,l>0?(e=.5*a*a,s*(e+v)-e):s*(v-a))}A_.exports=Nyr});var L_=u((Dzr,T_)=>{"use strict";var Ayr=er(),Oyr=Yr(),Syr=Kr(),Tyr=Gt(),Lyr=b(),Iyr=Wr(),_yr=D(),Pyr=O_(),Ryr=0x40000000000000,S_=1.4426950407214463,Fyr=16751713164886512e-26,Myr=1048575,Byr=2146435072,Cyr=1048576,jyr=1072693248,Gyr=2147483647,q1=[0,0];function Vyr(r){var e,t,i,n,a,s,o;if(Lyr(r)||r<0)return NaN;if(Tyr(q1,r),i=q1[0],n=q1[1],o=0,i<Cyr){if((i&Gyr|n)===0)return _yr;o-=54,r*=Ryr,i=Ayr(r)}return i>=Byr?r+r:(o+=(i>>20)-Iyr|0,i&=Myr,s=i+614244&1048576|0,r=Oyr(r,i|s^jyr),o+=s>>20|0,a=Pyr(r),r-=1,e=Syr(r,0),t=r-e,(r+a)*Fyr+(t+a)*S_+e*S_+o)}T_.exports=Vyr});var __=u((Xzr,I_)=>{"use strict";var Uyr=L_();I_.exports=Uyr});var R_=u((Jzr,P_)=>{"use strict";var Hyr=b(),Wyr=Ir(),kyr=Z(),Dyr=K(),Xyr=Ri(),Jyr=__(),zyr=Es(),Yyr=Ns(),Zyr=P();function Qyr(r){var e,t;return Hyr(r)||Wyr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=Jyr(r),t===Yyr)?r:(e===-1?t=Dyr(t):t=Xyr(t),t>zyr?Zyr:e*kyr(2,t))}P_.exports=Qyr});var M_=u((zzr,F_)=>{"use strict";var Kyr=R_();F_.exports=Kyr});var y1=u((Yzr,B_)=>{"use strict";var $yr=.9189385332046728;B_.exports=$yr});var C_=u((Zzr,xyr)=>{xyr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var j_=u((Qzr,rhr)=>{rhr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var G_=u((Kzr,ehr)=>{ehr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var U_=u(($zr,V_)=>{"use strict";function thr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}V_.exports=thr});var W_=u((xzr,H_)=>{"use strict";function ihr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}H_.exports=ihr});var D_=u((rYr,k_)=>{"use strict";function nhr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}k_.exports=nhr});var J_=u((eYr,X_)=>{"use strict";function ahr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}X_.exports=ahr});var Y_=u((tYr,z_)=>{"use strict";function uhr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}z_.exports=uhr});var Q_=u((iYr,Z_)=>{"use strict";function shr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}Z_.exports=shr});var eP=u((nYr,rP)=>{"use strict";var ohr=b(),vhr=Ar(),fhr=Q(),Aa=or(),lhr=K(),chr=Ht(),phr=Ui(),K_=Vi(),$_=Z(),ghr=C(),mhr=P(),qhr=D(),x_=Re(),yhr=Js(),hhr=y1(),dhr=C_(),whr=j_(),bhr=G_(),Ehr=U_(),Nhr=W_(),Ahr=D_(),Ohr=J_(),Shr=Y_(),Thr=Q_(),Lhr=129,Ihr=170,_hr=709,Phr=1.2433929443359375,Rhr=.6986598968505859;function h1(r){var e,t,i,n,a,s;if(ohr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(vhr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(s=(i+1)/2|0,s<=Lhr)return-bhr[s]/(i+1)}else return(n&1)===0?whr[n/2]:dhr[(n-3)/2];return fhr(r)<yhr?-.5-hhr*r:(t=1-r,r<0?lhr(r/2)===r/2?0:(e=r,r=t,t=e,r>Ihr?(e=K_(.5*t)*2*h1(r),a=phr(r),a-=r*ghr(x_),a>_hr?e<0?qhr:mhr:e*Aa(a)):K_(.5*t)*2*$_(x_,-r)*chr(r)*h1(r)):r<1?(e=Ehr(t),e-=Phr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+Nhr(t)):r<=4?(e=Rhr+1/-t,e+Ahr(r-2)):r<=7?(e=Ohr(r-4),1+Aa(e)):r<15?(e=Shr(r-7),1+Aa(e)):r<36?(e=Thr(r-15),1+Aa(e)):1+$_(2,-r))}rP.exports=h1});var iP=u((aYr,tP)=>{"use strict";var Fhr=eP();tP.exports=Fhr});var aP=u((uYr,nP)=>{"use strict";var H={};H.abs=Q();H.abs2=cT();H.acos=rn();H.acosh=PT();H.acot=BT();H.acovercos=VT();H.acoversin=kT();H.acsc=zT();H.acsch=tL();H.ahavercos=uL();H.ahaversin=fL();H.asin=Nt();H.asinh=u1();H.atan=pa();H.atanh=mL();H.avercos=dL();H.aversin=NL();H.besselj0=o1();H.besselj1=v1();H.bessely0=dI();H.bessely1=CI();H.binet=zI();H.cbrt=e_();H.ceil=Ri();H.ceil10=h_();H.ceil2=M_();H.cos=mt();H.zeta=iP();nP.exports=H});var oP=u((sYr,sP)=>{"use strict";var uP=b(),Mhr=C(),Bhr=Re(),Chr=ao();function jhr(r,e){return uP(r)||uP(e)||e<=0?NaN:.5*Mhr(Bhr*Chr*e*e)}sP.exports=jhr});var fP=u((oYr,vP)=>{"use strict";var Ghr=oP();vP.exports=Ghr});var pP=u((vYr,cP)=>{"use strict";var Vhr=or(),lP=Z(),Uhr=V(),Hhr=Re(),Whr=P(),d1=b();function khr(r,e,t){var i,n,a;return d1(r)||d1(e)||d1(t)||t<0?NaN:t===0?r===e?Whr:0:(i=lP(t,2),n=1/Uhr(i*Hhr),a=-1/(2*i),n*Vhr(a*lP(r-e,2)))}cP.exports=khr});var qP=u((fYr,mP)=>{"use strict";var Dhr=P(),gP=b();function Xhr(r,e){return gP(r)||gP(e)?NaN:r===e?Dhr:0}mP.exports=Xhr});var dP=u((lYr,hP)=>{"use strict";var Jhr=I(),zhr=P(),yP=b();function Yhr(r){if(yP(r))return Jhr(NaN);return e;function e(t){return yP(t)?NaN:t===r?zhr:0}}hP.exports=Yhr});var EP=u((cYr,bP)=>{"use strict";var Zhr=w(),wP=qP(),Qhr=dP();Zhr(wP,"factory",Qhr);bP.exports=wP});var OP=u((pYr,AP)=>{"use strict";var Khr=I(),$hr=EP().factory,w1=b(),xhr=V(),rdr=or(),NP=Z(),edr=Re();function tdr(r,e){var t,i,n;if(w1(r)||w1(e)||e<0)return Khr(NaN);if(e===0)return $hr(r);return t=NP(e,2),i=1/xhr(t*edr),n=-1/(2*t),a;function a(s){return w1(s)?NaN:i*rdr(n*NP(s-r,2))}}AP.exports=tdr});var LP=u((gYr,TP)=>{"use strict";var idr=w(),SP=pP(),ndr=OP();idr(SP,"factory",ndr);TP.exports=SP});var _P=u((mYr,IP)=>{"use strict";var Oa={};Oa.normal={};Oa.normal.entropy=fP();Oa.normal.pdf=LP();IP.exports=Oa});var RP=u((qYr,PP)=>{"use strict";var adr=z().isPrimitive,udr=S();function sdr(r){if(!adr(r))throw new TypeError(udr("invalid argument. First argument must be a string. Value: `%s`.",r));return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}PP.exports=sdr});var Sa=u((yYr,FP)=>{"use strict";var odr=RP();FP.exports=odr});var BP=u((hYr,MP)=>{"use strict";var vdr=z().isPrimitive,fdr=S();function ldr(r){if(!vdr(r))throw new TypeError(fdr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toLowerCase()}MP.exports=ldr});var ti=u((dYr,CP)=>{"use strict";var cdr=BP();CP.exports=cdr});var VP=u((wYr,GP)=>{"use strict";var pdr=z().isPrimitive,gdr=S(),jP=/[-\/\\^$*+?.()|[\]{}]/g;function mdr(r){var e,t,i;if(!pdr(r))throw new TypeError(gdr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(jP,"\\$&"):(t=r.substring(1,i),t=t.replace(jP,"\\$&"),r=r[0]+t+r.substring(i),r)}GP.exports=mdr});var HP=u((bYr,UP)=>{"use strict";var qdr=VP();UP.exports=qdr});var kP=u((EYr,WP)=>{"use strict";var ydr=RegExp.prototype.exec;WP.exports=ydr});var XP=u((NYr,DP)=>{"use strict";var hdr=kP();function ddr(r){try{return hdr.call(r),!0}catch{return!1}}DP.exports=ddr});var zP=u((AYr,JP)=>{"use strict";var wdr=Lt(),bdr=rr(),Edr=XP(),Ndr=wdr();function Adr(r){return typeof r=="object"?r instanceof RegExp?!0:Ndr?Edr(r):bdr(r)==="[object RegExp]":!1}JP.exports=Adr});var ZP=u((OYr,YP)=>{"use strict";var Odr=zP();YP.exports=Odr});var KP=u((SYr,QP)=>{"use strict";var Sdr=HP(),Tdr=L(),b1=z().isPrimitive,Ldr=ZP(),E1=S();function Idr(r,e,t){if(!b1(r))throw new TypeError(E1("invalid argument. First argument must be a string. Value: `%s`.",r));if(b1(e))e=Sdr(e),e=new RegExp(e,"g");else if(!Ldr(e))throw new TypeError(E1("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!b1(t)&&!Tdr(t))throw new TypeError(E1("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return r.replace(e,t)}QP.exports=Idr});var Ot=u((TYr,$P)=>{"use strict";var _dr=KP();$P.exports=_dr});var rR=u((LYr,xP)=>{"use strict";var Pdr=z().isPrimitive,Rdr=Ot(),Fdr=S(),Mdr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function Bdr(r){if(!Pdr(r))throw new TypeError(Fdr("invalid argument. Must provide a string. Value: `%s`.",r));return Rdr(r,Mdr,"$1")}xP.exports=Bdr});var ii=u((IYr,eR)=>{"use strict";var Cdr=rR();eR.exports=Cdr});var iR=u((_Yr,tR)=>{"use strict";var jdr=z().isPrimitive,Gdr=Sa(),Vdr=ti(),Ta=Ot(),Udr=S(),Hdr=ii(),Wdr=/\s+/g,kdr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Ddr=/(?:\s|^)([^\s]+)(?=\s|$)/g,Xdr=/([a-z0-9])([A-Z])/g;function Jdr(r,e,t){return e=Vdr(e),t===0?e:Gdr(e)}function zdr(r){if(!jdr(r))throw new TypeError(Udr("invalid argument. First argument must be a string. Value: `%s`.",r));return r=Ta(r,kdr," "),r=Ta(r,Wdr," "),r=Ta(r,Xdr,"$1 $2"),r=Hdr(r),r=Ta(r,Ddr,Jdr),r}tR.exports=zdr});var aR=u((PYr,nR)=>{"use strict";var Ydr=iR();nR.exports=Ydr});var sR=u((RYr,uR)=>{"use strict";var Zdr=z().isPrimitive,Qdr=S();function Kdr(r){if(!Zdr(r))throw new TypeError(Qdr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}uR.exports=Kdr});var N1=u((FYr,oR)=>{"use strict";var $dr=sR();oR.exports=$dr});var fR=u((MYr,vR)=>{"use strict";var xdr=z().isPrimitive,rwr=N1(),A1=Ot(),ewr=S(),twr=ii(),iwr=/\s+/g,nwr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,awr=/([a-z0-9])([A-Z])/g;function uwr(r){if(!xdr(r))throw new TypeError(ewr("invalid argument. Must provide a string. Value: `%s`.",r));return r=A1(r,nwr," "),r=A1(r,awr,"$1 $2"),r=twr(r),r=A1(r,iwr,"_"),rwr(r)}vR.exports=uwr});var cR=u((BYr,lR)=>{"use strict";var swr=fR();lR.exports=swr});var gR=u((CYr,pR)=>{"use strict";var owr=z().isPrimitive,vwr=ti(),O1=Ot(),fwr=S(),lwr=ii(),cwr=/\s+/g,pwr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,gwr=/([a-z0-9])([A-Z])/g;function mwr(r){if(!owr(r))throw new TypeError(fwr("invalid argument. Must provide a string. Value: `%s`.",r));return r=O1(r,pwr," "),r=O1(r,gwr,"$1 $2"),r=lwr(r),r=O1(r,cwr,"-"),vwr(r)}pR.exports=mwr});var qR=u((jYr,mR)=>{"use strict";var qwr=gR();mR.exports=qwr});var hR=u((GYr,yR)=>{"use strict";var ywr=z().isPrimitive,hwr=Sa(),dwr=ti(),La=Ot(),wwr=S(),bwr=ii(),Ewr=/\s+/g,Nwr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Awr=/(?:\s|^)([^\s]+)(?=\s|$)/g,Owr=/([a-z0-9])([A-Z])/g;function Swr(r,e){return hwr(dwr(e))}function Twr(r){if(!ywr(r))throw new TypeError(wwr("invalid argument. First argument must be a string. Value: `%s`.",r));return r=La(r,Nwr," "),r=La(r,Ewr," "),r=La(r,Owr,"$1 $2"),r=bwr(r),r=La(r,Awr,Swr),r}yR.exports=Twr});var wR=u((VYr,dR)=>{"use strict";var Lwr=hR();dR.exports=Lwr});var ER=u((UYr,bR)=>{"use strict";var Iwr=z().isPrimitive,_wr=ti(),S1=Ot(),Pwr=S(),Rwr=ii(),Fwr=/\s+/g,Mwr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Bwr=/([a-z0-9])([A-Z])/g;function Cwr(r){if(!Iwr(r))throw new TypeError(Pwr("invalid argument. Must provide a string. Value: `%s`.",r));return r=S1(r,Mwr," "),r=S1(r,Bwr,"$1 $2"),r=Rwr(r),r=S1(r,Fwr,"_"),_wr(r)}bR.exports=Cwr});var AR=u((HYr,NR)=>{"use strict";var jwr=ER();NR.exports=jwr});var TR=u((WYr,SR)=>{"use strict";var Gwr=T(),OR=A(),Vwr=ur().isPrimitive,Uwr=z().isPrimitive;function Hwr(r,e){return Gwr(e)?OR(e,"flags")&&(r.flags=e.flags,!Uwr(r.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+r.flags+"`."):OR(e,"capture")&&(r.capture=e.capture,!Vwr(r.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+r.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}SR.exports=Hwr});var Ia=u((kYr,IR)=>{"use strict";var Wwr=TR(),LR=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function kwr(r){var e,t;if(arguments.length>0){if(e={},t=Wwr(e,r),t)throw t;return e.capture?new RegExp("("+LR+")",e.flags):new RegExp(LR,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}IR.exports=kwr});var PR=u((DYr,_R)=>{"use strict";var Dwr=Ia(),Xwr=Dwr({capture:!0});_R.exports=Xwr});var FR=u((XYr,RR)=>{"use strict";var Jwr=Ia(),zwr=Jwr();RR.exports=zwr});var CR=u((JYr,BR)=>{"use strict";var MR=w(),T1=Ia(),Ywr=PR(),Zwr=FR();MR(T1,"REGEXP",Zwr);MR(T1,"REGEXP_CAPTURE",Ywr);BR.exports=T1});var GR=u((zYr,jR)=>{"use strict";var Qwr=z().isPrimitive,Kwr=CR(),$wr=S();function xwr(r){var e,t,i,n;if(!Qwr(r))throw new TypeError($wr("invalid argument. Must provide a string. Value: `%s`.",r));for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),Kwr.REGEXP.test(i)?(t+=i,e=!0):e?(t+=i.toUpperCase(),e=!1):t+=i;return t}jR.exports=xwr});var UR=u((YYr,VR)=>{"use strict";var rbr=GR();VR.exports=rbr});var WR=u((ZYr,HR)=>{"use strict";var ebr=z().isPrimitive,tbr=S();function ibr(r){if(!ebr(r))throw new TypeError(tbr("invalid argument. First argument must be a string. Value: `%s`.",r));return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}HR.exports=ibr});var DR=u((QYr,kR)=>{"use strict";var nbr=WR();kR.exports=nbr});var JR=u((KYr,XR)=>{"use strict";var Gr={};Gr.camelcase=aR();Gr.capitalize=Sa();Gr.constantcase=cR();Gr.kebabcase=qR();Gr.lowercase=ti();Gr.pascalcase=wR();Gr.snakecase=AR();Gr.startcase=UR();Gr.uncapitalize=DR();Gr.uppercase=N1();XR.exports=Gr});var YR=u(($Yr,zR)=>{"use strict";var abr=Se();function ubr(r,e,t,i){abr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}zR.exports=ubr});var R=u((xYr,ZR)=>{"use strict";var sbr=YR();ZR.exports=sbr});var $R=u((rZr,KR)=>{"use strict";var QR=65535;function obr(r,e){var t,i,n,a,s,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,s=(r&QR)>>>0,o=(e&QR)>>>0,t=s*o>>>0,i=n*o+s*a<<16>>>0,t+i>>>0}KR.exports=obr});var rF=u((eZr,xR)=>{"use strict";var vbr=$R();xR.exports=vbr});var L1=u((tZr,eF)=>{"use strict";function fbr(r,e,t,i,n,a,s){var o,v,f,l,c,p,q;for(o=e.data,v=n.data,l=e.getter,f=n.setter,c=i,p=s,q=0;q<r;q++)f(v,p,l(o,c)),c+=t,p+=a;return e}eF.exports=fbr});var nF=u((iZr,iF)=>{"use strict";var tF=yt(),lbr=L1(),I1=8;function cbr(r,e,t,i,n){var a,s,o,v,f,l;if(r<=0)return i;if(o=tF(e),v=tF(i),o.accessors||v.accessors)return t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,lbr(r,o,t,a,v,n,s),v.data;if(t===1&&n===1){if(f=r%I1,f>0)for(l=0;l<f;l++)i[l]=e[l];if(r<I1)return i;for(l=f;l<r;l+=I1)i[l]=e[l],i[l+1]=e[l+1],i[l+2]=e[l+2],i[l+3]=e[l+3],i[l+4]=e[l+4],i[l+5]=e[l+5],i[l+6]=e[l+6],i[l+7]=e[l+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,l=0;l<r;l++)i[s]=e[a],a+=t,s+=n;return i}iF.exports=cbr});var sF=u((nZr,uF)=>{"use strict";var aF=yt(),pbr=L1(),sn=8;function gbr(r,e,t,i,n,a,s){var o,v,f,l,c,p;if(r<=0)return n;if(f=aF(e),l=aF(n),f.accessors||l.accessors)return pbr(r,f,t,i,l,a,s),l.data;if(o=i,v=s,t===1&&a===1){if(c=r%sn,c>0)for(p=0;p<c;p++)n[v]=e[o],o+=t,v+=a;if(r<sn)return n;for(p=c;p<r;p+=sn)n[v]=e[o],n[v+1]=e[o+1],n[v+2]=e[o+2],n[v+3]=e[o+3],n[v+4]=e[o+4],n[v+5]=e[o+5],n[v+6]=e[o+6],n[v+7]=e[o+7],o+=sn,v+=sn;return n}for(p=0;p<r;p++)n[v]=e[o],o+=t,v+=a;return n}uF.exports=gbr});var Ve=u((aZr,vF)=>{"use strict";var mbr=w(),oF=nF(),qbr=sF();mbr(oF,"ndarray",qbr);vF.exports=oF});var lF=u((uZr,fF)=>{"use strict";function ybr(){}fF.exports=ybr});var pF=u((sZr,cF)=>{"use strict";var hbr=lF();function dbr(){return hbr.name==="foo"}cF.exports=dbr});var mF=u((oZr,gF)=>{"use strict";var wbr=pF();gF.exports=wbr});var yF=u((vZr,qF)=>{"use strict";var bbr=L(),Ebr=mF(),Nbr=Pu().REGEXP,Abr=Ebr();function Obr(r){if(bbr(r)===!1)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return Abr?r.name:Nbr.exec(r.toString())[1]}qF.exports=Obr});var dF=u((fZr,hF)=>{"use strict";var Sbr=yF();hF.exports=Sbr});var bF=u((lZr,wF)=>{"use strict";var Tbr=Ti(),Lbr=Mt(),Ibr=Li(),_br=Ii(),Pbr=Bt(),Rbr=lt(),Fbr=vr(),Mbr=zr(),Bbr=cr(),Cbr=[Bbr,Mbr,Rbr,Fbr,_br,Pbr,Tbr,Lbr,Ibr];wF.exports=Cbr});var EF=u((cZr,jbr)=>{jbr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var LF=u((pZr,TF)=>{"use strict";var Gbr=Te(),Vbr=dF(),OF=ot(),Ubr=ls(),Hbr=cr(),NF=bF(),AF=EF(),_a=Ubr()?OF(Hbr):SF;_a=Vbr(_a)==="TypedArray"?_a:SF;function SF(){}function Wbr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof _a)return!0;for(t=0;t<NF.length;t++)if(r instanceof NF[t])return!0;for(;r;){for(e=Gbr(r),t=0;t<AF.length;t++)if(AF[t]===e)return!0;r=OF(r)}return!1}TF.exports=Wbr});var _F=u((gZr,IF)=>{"use strict";var kbr=LF();IF.exports=kbr});var RF=u((mZr,PF)=>{"use strict";var Dbr=Ki(),Xbr=Zi(),Jbr=[Xbr,Dbr];PF.exports=Jbr});var FF=u((qZr,zbr)=>{zbr.exports=["Complex64Array","Complex128Array"]});var jF=u((yZr,CF)=>{"use strict";var Ybr=Te(),Zbr=ot(),MF=RF(),BF=FF();function Qbr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<MF.length;t++)if(r instanceof MF[t])return!0;for(;r;){for(e=Ybr(r),t=0;t<BF.length;t++)if(BF[t]===e)return!0;r=Zbr(r)}return!1}CF.exports=Qbr});var VF=u((hZr,GF)=>{"use strict";var Kbr=jF();GF.exports=Kbr});var HF=u((dZr,UF)=>{"use strict";function $br(r,e){if(typeof e!="function")throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+e+"`.");return r instanceof e}UF.exports=$br});var kF=u((wZr,WF)=>{"use strict";var xbr=HF();WF.exports=xbr});var XF=u((bZr,DF)=>{"use strict";var rEr=Ti(),eEr=Mt(),tEr=Li(),iEr=Ii(),nEr=Bt(),aEr=lt(),uEr=vr(),sEr=zr(),oEr=cr(),vEr=Ki(),fEr=Zi(),lEr=[[oEr,"Float64Array"],[sEr,"Float32Array"],[aEr,"Int32Array"],[uEr,"Uint32Array"],[iEr,"Int16Array"],[nEr,"Uint16Array"],[rEr,"Int8Array"],[eEr,"Uint8Array"],[tEr,"Uint8ClampedArray"],[vEr,"Complex64Array"],[fEr,"Complex128Array"]];DF.exports=lEr});var zF=u((EZr,JF)=>{"use strict";var cEr=kF(),pEr=Te(),gEr=ot(),ni=XF();function mEr(r){var e,t;for(t=0;t<ni.length;t++)if(cEr(r,ni[t][0]))return ni[t][1];for(;r;){for(e=pEr(r),t=0;t<ni.length;t++)if(e===ni[t][1])return ni[t][1];r=gEr(r)}}JF.exports=mEr});var ZF=u((NZr,YF)=>{"use strict";var qEr=_F(),yEr=VF(),hEr=Yt(),dEr=Zt(),wEr=zF();function bEr(r){var e,t,i;if(qEr(r))e=r;else if(yEr(r))r.BYTES_PER_ELEMENT===8?e=hEr(r,0):e=dEr(r,0);else throw new TypeError("invalid argument. Must provide a typed array. Value: `"+r+"`.");for(t={type:wEr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}YF.exports=bEr});var F=u((AZr,QF)=>{"use strict";var EEr=ZF();QF.exports=EEr});var _1=u((OZr,KF)=>{"use strict";var NEr=_t(),AEr=K(),OEr=NEr-1;function SEr(){var r=AEr(1+OEr*Math.random());return r>>>0}KF.exports=SEr});var G1=u((SZr,oM)=>{"use strict";var re=w(),Ue=_(),$F=R(),P1=A(),TEr=T(),LEr=Mr(),xF=Jr(),IEr=ur().isPrimitive,rM=xr().isPrimitive,aM=Xi(),uM=_t(),qr=vr(),_Er=io(),j1=rF(),ai=Ve(),PEr=F(),eM=_1(),tr=624,R1=397,tM=uM>>>0,REr=19650218>>>0,F1=2147483648>>>0,M1=2147483647>>>0,FEr=1812433253>>>0,MEr=1664525>>>0,BEr=1566083941>>>0,CEr=2636928640>>>0,jEr=4022730752>>>0,GEr=2567483615>>>0,B1=[0>>>0,GEr>>>0],sM=1/(aM+1),VEr=67108864>>>0,UEr=2147483648>>>0,C1=1>>>0,HEr=aM*sM,Pa=1,Ra=3,He=2,We=tr+3,yr=tr+5,on=tr+6;function iM(r,e){var t;return e?t="option":t="argument",r.length<on+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==Pa?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+Pa+". Actual: "+r[0]+"."):r[1]!==Ra?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+Ra+". Actual: "+r[1]+"."):r[He]!==tr?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+tr+". Actual: "+r[He]+"."):r[We]!==1?new RangeError("invalid "+t+". `state` array has an incompatible section length. Expected: "+1 .toString()+". Actual: "+r[We]+"."):r[yr]!==r.length-on?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-on)+". Actual: "+r[yr]+"."):null}function nM(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=j1(t,FEr)+i>>>0;return r}function WEr(r,e,t,i){var n,a,s,o;for(a=1,s=0,o=_Er(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=j1(n,MEr)>>>0,r[a]=(r[a]>>>0^n)+t[s]+s>>>0,a+=1,s+=1,a>=e&&(r[0]=r[e-1],a=1),s>=i&&(s=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=j1(n,BEr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=UEr,r}function kEr(r){var e,t,i,n;for(n=tr-R1,t=0;t<n;t++)e=r[t]&F1|r[t+1]&M1,r[t]=r[t+R1]^e>>>1^B1[e&C1];for(i=tr-1;t<i;t++)e=r[t]&F1|r[t+1]&M1,r[t]=r[t-n]^e>>>1^B1[e&C1];return e=r[i]&F1|r[0]&M1,r[i]=r[R1-1]^e>>>1^B1[e&C1],r}function DEr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!TEr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(P1(r,"copy")&&(i.copy=r.copy,!IEr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(P1(r,"state")){if(t=r.state,i.state=!0,!xF(t))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+t+"`.");if(s=iM(t,!0),s)throw s;i.copy===!1?e=t:(e=new qr(t.length),ai(t.length,t,1,e,1)),t=new qr(e.buffer,e.byteOffset+(He+1)*e.BYTES_PER_ELEMENT,tr),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,t[yr])}if(n===void 0)if(P1(r,"seed"))if(n=r.seed,i.seed=!0,rM(n)){if(n>tM)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");n>>>=0}else{if(LEr(n)===!1||n.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");if(n.length===1){if(n=n[0],!rM(n))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");if(n>tM)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");n>>>=0}else a=n.length,e=new qr(on+a),e[0]=Pa,e[1]=Ra,e[He]=tr,e[We]=1,e[We+1]=tr,e[yr]=a,ai.ndarray(a,n,1,0,e,1,yr+1),t=new qr(e.buffer,e.byteOffset+(He+1)*e.BYTES_PER_ELEMENT,tr),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,a),t=nM(t,tr,REr),t=WEr(t,tr,n,a)}else n=eM()>>>0}else n=eM()>>>0;return t===void 0&&(e=new qr(on+1),e[0]=Pa,e[1]=Ra,e[He]=tr,e[We]=1,e[We+1]=tr,e[yr]=1,e[yr+1]=n,t=new qr(e.buffer,e.byteOffset+(He+1)*e.BYTES_PER_ELEMENT,tr),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,1),t=nM(t,tr,n)),re(y,"NAME","mt19937"),Ue(y,"seed",o),Ue(y,"seedLength",v),$F(y,"state",c,p),Ue(y,"stateLength",f),Ue(y,"byteLength",l),re(y,"toJSON",q),re(y,"MIN",1),re(y,"MAX",uM),re(y,"normalized",m),re(m,"NAME",y.NAME),Ue(m,"seed",o),Ue(m,"seedLength",v),$F(m,"state",c,p),Ue(m,"stateLength",f),Ue(m,"byteLength",l),re(m,"toJSON",q),re(m,"MIN",0),re(m,"MAX",HEr),y;function o(){var g=e[yr];return ai(g,n,1,new qr(g),1)}function v(){return e[yr]}function f(){return e.length}function l(){return e.byteLength}function c(){var g=e.length;return ai(g,e,1,new qr(g),1)}function p(g){var h;if(!xF(g))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+g+"`.");if(h=iM(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?ai(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new qr(g.length)),ai(g.length,g,1,e,1)),t=new qr(e.buffer,e.byteOffset+(He+1)*e.BYTES_PER_ELEMENT,tr),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,e[yr])}function q(){var g={};return g.type="PRNG",g.name=y.NAME,g.state=PEr(e),g.params=[],g}function y(){var g,h;return h=e[We+1],h>=tr&&(t=kEr(t),h=0),g=t[h],e[We+1]=h+1,g^=g>>>11,g^=g<<7&CEr,g^=g<<15&jEr,g^=g>>>18,g>>>0}function m(){var g=y()>>>5,h=y()>>>6;return(g*VEr+h)*sM}}oM.exports=DEr});var fM=u((TZr,vM)=>{"use strict";var XEr=G1(),JEr=_1(),zEr=XEr({seed:JEr()});vM.exports=zEr});var X=u((LZr,cM)=>{"use strict";var YEr=w(),lM=fM(),ZEr=G1();YEr(lM,"factory",ZEr);cM.exports=lM});var qM=u((IZr,mM)=>{"use strict";var pM=j().isPrimitive,gM=ir();function QEr(r,e){return!pM(r)||gM(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!pM(e)||gM(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):r>=e?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+r+","+e+"]`."):null}mM.exports=QEr});var hM=u((_Zr,yM)=>{"use strict";var KEr=Z(),$Er=Vt(),xEr=la();function rNr(r,e,t){return e+KEr($Er(xEr*r()),2)*(t-e)}yM.exports=rNr});var V1=u((PZr,SM)=>{"use strict";var ee=w(),Fa=_(),dM=R(),wM=T(),bM=L(),EM=A(),NM=I(),eNr=B(),Ma=X().factory,AM=b(),tNr=F(),iNr=qM(),OM=hM();function nNr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ma();else if(arguments.length===1){if(r=arguments[0],!wM(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(EM(r,"prng")){if(!bM(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ma(r)}else{if(n=arguments[0],a=arguments[1],i=iNr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!wM(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(EM(r,"prng")){if(!bM(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ma(r)}else e=Ma()}return n===void 0?t=y:t=q,ee(t,"NAME","arcsine"),r&&r.prng?(ee(t,"seed",null),ee(t,"seedLength",null),dM(t,"state",NM(null),eNr),ee(t,"stateLength",null),ee(t,"byteLength",null),ee(t,"toJSON",NM(null)),ee(t,"PRNG",e)):(Fa(t,"seed",s),Fa(t,"seedLength",o),dM(t,"state",l,c),Fa(t,"stateLength",v),Fa(t,"byteLength",f),ee(t,"toJSON",p),ee(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=tNr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return OM(e,n,a)}function y(m,g){return AM(m)||AM(g)||m>=g?NaN:OM(e,m,g)}}SM.exports=nNr});var LM=u((RZr,TM)=>{"use strict";var aNr=V1(),uNr=aNr();TM.exports=uNr});var PM=u((FZr,_M)=>{"use strict";var sNr=w(),IM=LM(),oNr=V1();sNr(IM,"factory",oNr);_M.exports=IM});var U1=u((MZr,jM)=>{"use strict";var te=w(),Ba=_(),RM=R(),FM=T(),vNr=$i().isPrimitive,MM=L(),BM=A(),CM=I(),fNr=B(),Ca=X().factory,lNr=b(),cNr=F();function pNr(){var r,e,t,i;if(arguments.length===0)e=Ca();else if(arguments.length===1&&FM(arguments[0]))if(r=arguments[0],BM(r,"prng")){if(!MM(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ca(r);else{if(i=arguments[0],!vNr(i))throw new TypeError("invalid argument. First argument must be a probability. Value: `"+i+"`.");if(arguments.length>1){if(r=arguments[1],!FM(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(BM(r,"prng")){if(!MM(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ca(r)}else e=Ca()}return i===void 0?t=p:t=c,te(t,"NAME","bernoulli"),r&&r.prng?(te(t,"seed",null),te(t,"seedLength",null),RM(t,"state",CM(null),fNr),te(t,"stateLength",null),te(t,"byteLength",null),te(t,"toJSON",CM(null)),te(t,"PRNG",e)):(Ba(t,"seed",n),Ba(t,"seedLength",a),RM(t,"state",v,f),Ba(t,"stateLength",s),Ba(t,"byteLength",o),te(t,"toJSON",l),te(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(q){e.state=q}function l(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=cNr(e.state),i===void 0?q.params=[]:q.params=[i],q}function c(){return e()<=i?1:0}function p(q){return lNr(q)||q<0||q>1?NaN:e()<=q?1:0}}jM.exports=pNr});var VM=u((BZr,GM)=>{"use strict";var gNr=U1(),mNr=gNr();GM.exports=mNr});var WM=u((CZr,HM)=>{"use strict";var qNr=w(),UM=VM(),yNr=U1();qNr(UM,"factory",yNr);HM.exports=UM});var JM=u((jZr,XM)=>{"use strict";var hNr=V(),kM=or(),dNr=C(),DM=.00991256303526217;function wNr(r,e){var t,i,n;for(i=kM(-.5*e*e),t=[],t.push(DM/i),t.push(e),n=2;n<r;n++)t[n]=hNr(-2*dNr(DM/t[n-1]+i)),i=kM(-.5*t[n]*t[n]);return t.push(0),t}XM.exports=wNr});var YM=u((GZr,zM)=>{"use strict";function bNr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}zM.exports=bNr});var KM=u((VZr,QM)=>{"use strict";var ZM=C();function ENr(r,e,t){var i,n;do i=ZM(r())/e,n=ZM(r());while(-2*n<i*i);return t?i-e:e-i}QM.exports=ENr});var eB=u((UZr,rB)=>{"use strict";var NNr=Q(),$M=or(),ANr=JM(),ONr=YM(),SNr=KM(),TNr=128,xM=3.442619855899,St=ANr(TNr,xM),LNr=ONr(St),INr=127;function _Nr(r,e){return t;function t(){for(var i,n,a,s,o,v,f;;){if(o=2*r()-1,v=e()&INr,NNr(o)<LNr[v])return o*St[v];if(v===0)return SNr(r,xM,o<0);if(s=o*St[v],a=s*s,f=v+1,i=$M(-.5*(St[v]*St[v]-a)),n=$M(-.5*(St[f]*St[f]-a)),n+r()*(i-n)<1)return s}}}rB.exports=_Nr});var W1=u((HZr,nB)=>{"use strict";var ke=w(),ja=_(),tB=R(),PNr=L(),RNr=T(),FNr=ur().isPrimitive,Ga=A(),MNr=Jr(),H1=X().factory,iB=I(),BNr=B(),CNr=K(),jNr=_t(),GNr=F(),VNr=eB();function UNr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!RNr(r))throw new TypeError("invalid argument. Must provide an object. Value: `"+r+"`.");if(Ga(r,"copy")&&(n.copy=r.copy,!FNr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(Ga(r,"prng")){if(!PNr(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else if(Ga(r,"state")){if(n.state=r.state,!MNr(r.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+r.state+"`.")}else if(Ga(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+r.seed+"`.")}return n.state===void 0?e===void 0?(t=H1(n),e=t.normalized):(t=H1({seed:CNr(1+jNr*e()),copy:n.copy}),n.seed=null):(t=H1(n),e=t.normalized),i=VNr(e,t),ke(i,"NAME","improved-ziggurat"),n.seed===null?(ke(i,"seed",null),ke(i,"seedLength",null)):(ja(i,"seed",a),ja(i,"seedLength",s)),r&&r.prng?(tB(i,"state",iB(null),BNr),ke(i,"stateLength",null),ke(i,"byteLength",null),ke(i,"toJSON",iB(null))):(tB(i,"state",f,l),ja(i,"stateLength",o),ja(i,"byteLength",v),ke(i,"toJSON",c)),ke(i,"PRNG",e),i;function a(){return t.seed}function s(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function l(p){t.state=p}function c(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=GNr(t.state),p.params=[],p}}nB.exports=UNr});var uB=u((WZr,aB)=>{"use strict";var HNr=W1(),WNr=HNr();aB.exports=WNr});var De=u((kZr,oB)=>{"use strict";var kNr=w(),sB=uB(),DNr=W1();kNr(sB,"factory",DNr);oB.exports=sB});var lB=u((DZr,fB)=>{"use strict";var vB=W().isPrimitive;function XNr(r,e){return vB(r)?vB(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}fB.exports=XNr});var qB=u((XZr,mB)=>{"use strict";var cB=C(),pB=V(),JNr=Z(),gB=1/3;function zNr(r,e,t){var i,n,a,s,o,v,f,l,c,p;for(t<1?(v=t+1-gB,o=1/pB(9*v),l=JNr(r(),1/t)):(v=t-gB,o=1/pB(9*v),l=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,n=f*f,a=1-.331*n*n,s=.5*n+v*(1-p+cB(p)),c=r(),(c<a||cB(c)<s)&&(i=!1)}return v*p*l}mB.exports=zNr});var dB=u((JZr,hB)=>{"use strict";var k1=Z(),yB=C();function YNr(r,e,t){var i,n,a,s,o,v,f,l;for(a=t-1,o=k1(a+a,.5),i=!0;i===!0;)s=e(),f=.5*(1+s/o),f>=0&&f<=1&&(v=r(),n=k1(s,4),l=8*t-12,l=1-n/l,v<=l?i=!1:(l+=.5*k1(n/(8*t-8),2),v<l&&(l=a*yB(4*f*(1-f)),l+=s*s/2,l>=yB(v)&&(i=!1))));return f}hB.exports=YNr});var bB=u((zZr,wB)=>{"use strict";var ZNr=Z(),Va=C();function QNr(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y;for(o=t-1,v=i-1,f=o+v,l=f*Va(f),s=o/f,n=.5/ZNr(f,.5),a=!0;a===!0;)c=e(),q=s+c*n,q>=0&&q<=1&&(p=r(),y=o*Va(q/o),y+=v*Va((1-q)/v),y+=l+.5*c*c,y>=Va(p)&&(a=!1));return q}wB.exports=QNr});var AB=u((YZr,NB)=>{"use strict";var D1=or(),EB=Z(),X1=C();function KNr(r,e,t){for(var i,n,a,s,o,v,f;;)if(s=r(),o=r(),v=EB(s,1/e),f=EB(o,1/t),a=v+f,a<=1)return a>0?v/a:(i=X1(s)/e,n=X1(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),D1(i-X1(D1(i)+D1(n))))}NB.exports=KNr});var TB=u((ZZr,SB)=>{"use strict";var OB=qB(),$Nr=dB(),xNr=bB(),rAr=AB();function eAr(r,e,t,i){var n,a;return t===i&&t>1.5?$Nr(r,e,t):t>1&&i>1?xNr(r,e,t,i):t<1&&i<1?rAr(r,t,i):(n=OB(r,e,t),a=OB(r,e,i),n/(n+a))}SB.exports=eAr});var Z1=u((QZr,jB)=>{"use strict";var ie=w(),Ua=_(),LB=R(),IB=T(),_B=ur().isPrimitive,PB=L(),ui=A(),RB=I(),tAr=B(),FB=De().factory,Ha=X().factory,MB=b(),J1=Ve(),z1=vr(),Y1=Jr(),BB=jt(),iAr=F(),nAr=lB(),CB=TB();function aAr(){var r,e,t,i,n,a,s,o,v;if(o=!0,arguments.length===0)n={copy:!1},a=Ha(n);else if(arguments.length===1){if(n=arguments[0],!IB(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ui(n,"copy")&&!_B(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ui(n,"prng")){if(!PB(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ui(n,"state")&&!Y1(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=BB(n,1),n.copy===!1?o=!1:n.state&&(n.state=J1(n.state.length,n.state,1,new z1(n.state.length),1)),n.copy=!1,a=Ha(n)}}else{if(t=arguments[0],i=arguments[1],v=nAr(t,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!IB(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ui(n,"copy")&&!_B(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ui(n,"prng")){if(!PB(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ui(n,"state")&&!Y1(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=BB(n,1),n.copy===!1?o=!1:n.state&&(n.state=J1(n.state.length,n.state,1,new z1(n.state.length),1)),n.copy=!1,a=Ha(n)}}else n={copy:!1},a=Ha(n)}return n&&n.prng?e=FB({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=FB({state:r,copy:!1})),t===void 0?s=h:s=g,ie(s,"NAME","beta"),n&&n.prng?(ie(s,"seed",null),ie(s,"seedLength",null),LB(s,"state",RB(null),tAr),ie(s,"stateLength",null),ie(s,"byteLength",null),ie(s,"toJSON",RB(null)),ie(s,"PRNG",a)):(Ua(s,"seed",f),Ua(s,"seedLength",l),LB(s,"state",q,y),Ua(s,"stateLength",c),Ua(s,"byteLength",p),ie(s,"toJSON",m),ie(s,"PRNG",a),a=a.normalized),s;function f(){return a.seed}function l(){return a.seedLength}function c(){return a.stateLength}function p(){return a.byteLength}function q(){return a.state}function y(E){if(!Y1(E))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+E+"`.");o&&(E=J1(E.length,E,1,new z1(E.length),1)),a.state=E}function m(){var E={};return E.type="PRNG",E.name=s.NAME,E.state=iAr(a.state),t===void 0?E.params=[]:E.params=[t,i],E}function g(){return CB(a,e,t,i)}function h(E,N){return MB(E)||MB(N)||E<=0||N<=0?NaN:CB(a,e,E,N)}}jB.exports=aAr});var VB=u((KZr,GB)=>{"use strict";var uAr=Z1(),sAr=uAr();GB.exports=sAr});var WB=u(($Zr,HB)=>{"use strict";var oAr=w(),UB=VB(),vAr=Z1();oAr(UB,"factory",vAr);HB.exports=UB});var XB=u((xZr,DB)=>{"use strict";var kB=W().isPrimitive;function fAr(r,e){return kB(r)?kB(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}DB.exports=fAr});var YB=u((rQr,zB)=>{"use strict";var JB=C();function lAr(r,e,t,i,n){var a,s,o,v,f,l,c;for(a=!0;a;){do f=e(),c=1+n*f;while(c<=0);c*=c*c,s=f*f,o=1-.331*s*s,v=.5*s+i*(1-c+JB(c)),l=r(),(l<o||JB(l)<v)&&(a=!1)}return 1/t*i*c}zB.exports=lAr});var rv=u((eQr,nC)=>{"use strict";var ne=w(),Wa=_(),ZB=R(),QB=T(),Q1=Jr(),KB=ur().isPrimitive,$B=L(),si=A(),xB=I(),cAr=B(),rC=De().factory,ka=X().factory,eC=b(),K1=V(),tC=Z(),$1=Ve(),x1=vr(),pAr=F(),iC=jt(),gAr=XB(),Da=YB(),Xa=1/3;function mAr(){var r,e,t,i,n,a,s,o,v,f,l;if(o=!0,arguments.length===0)n={copy:!1},a=ka(n);else if(arguments.length===1){if(n=arguments[0],!QB(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(si(n,"copy")&&!KB(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(si(n,"prng")){if(!$B(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(si(n,"state")&&!Q1(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=iC(n,1),n.copy===!1?o=!1:n.state&&(n.state=$1(n.state.length,n.state,1,new x1(n.state.length),1)),n.copy=!1,a=ka(n)}}else{if(e=arguments[0],i=arguments[1],v=gAr(e,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!QB(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(si(n,"copy")&&!KB(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(si(n,"prng")){if(!$B(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(si(n,"state")&&!Q1(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=iC(n,1),n.copy===!1?o=!1:n.state&&(n.state=$1(n.state.length,n.state,1,new x1(n.state.length),1)),n.copy=!1,a=ka(n)}}else n={copy:!1},a=ka(n)}return n&&n.prng?t=rC({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=rC({state:r,copy:!1})),e===void 0?s=G:(e>=1?(s=E,l=e-Xa):(s=N,l=e+1-Xa),f=1/K1(9*l)),ne(s,"NAME","gamma"),n&&n.prng?(ne(s,"seed",null),ne(s,"seedLength",null),ZB(s,"state",xB(null),cAr),ne(s,"stateLength",null),ne(s,"byteLength",null),ne(s,"toJSON",xB(null)),ne(s,"PRNG",a)):(Wa(s,"seed",c),Wa(s,"seedLength",p),ZB(s,"state",m,g),Wa(s,"stateLength",q),Wa(s,"byteLength",y),ne(s,"toJSON",h),ne(s,"PRNG",a),a=a.normalized),s;function c(){return a.seed}function p(){return a.seedLength}function q(){return a.stateLength}function y(){return a.byteLength}function m(){return a.state}function g(O){if(!Q1(O))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+O+"`.");o&&(O=$1(O.length,O,1,new x1(O.length),1)),a.state=O}function h(){var O={};return O.type="PRNG",O.name=s.NAME,O.state=pAr(a.state),e===void 0?O.params=[]:O.params=[e,i],O}function E(){return Da(a,t,i,l,f)}function N(){return Da(a,t,i,l,f)*tC(a(),1/e)}function G(O,J){var ar,k;return eC(O)||eC(J)||O<=0||J<=0?NaN:O<1?(k=O+1-Xa,ar=1/K1(9*k),Da(a,t,J,k,ar)*tC(a(),1/O)):(k=O-Xa,ar=1/K1(9*k),Da(a,t,J,k,ar))}}nC.exports=mAr});var uC=u((tQr,aC)=>{"use strict";var qAr=rv(),yAr=qAr();aC.exports=yAr});var oi=u((iQr,oC)=>{"use strict";var hAr=w(),sC=uC(),dAr=rv();hAr(sC,"factory",dAr);oC.exports=sC});var lC=u((nQr,fC)=>{"use strict";var vC=W().isPrimitive;function wAr(r,e){return vC(r)?vC(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}fC.exports=wAr});var pC=u((aQr,cC)=>{"use strict";function bAr(r,e,t){return r(e,1)/r(t,1)}cC.exports=bAr});var ev=u((uQr,dC)=>{"use strict";var Xe=w(),Ja=_(),gC=R(),mC=T(),qC=I(),EAr=B(),za=oi().factory,yC=b(),NAr=F(),AAr=lC(),hC=pC();function OAr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=za();else if(arguments.length===1){if(i=arguments[0],!mC(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");r=za(i)}else{if(e=arguments[0],t=arguments[1],s=AAr(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!mC(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");r=za(i)}else r=za()}return e===void 0?a=m:a=y,n=r.PRNG,Xe(a,"NAME","betaprime"),i&&i.prng?(Xe(a,"seed",null),Xe(a,"seedLength",null),gC(a,"state",qC(null),EAr),Xe(a,"stateLength",null),Xe(a,"byteLength",null),Xe(a,"toJSON",qC(null))):(Ja(a,"seed",o),Ja(a,"seedLength",v),gC(a,"state",c,p),Ja(a,"stateLength",f),Ja(a,"byteLength",l),Xe(a,"toJSON",q)),Xe(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function l(){return n.byteLength}function c(){return n.state}function p(g){n.state=g}function q(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=NAr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function y(){return hC(r,e,t)}function m(g,h){return yC(g)||yC(h)||g<=0||h<=0?NaN:hC(r,g,h)}}dC.exports=OAr});var bC=u((sQr,wC)=>{"use strict";var SAr=ev(),TAr=SAr();wC.exports=TAr});var AC=u((oQr,NC)=>{"use strict";var LAr=w(),EC=bC(),IAr=ev();LAr(EC,"factory",IAr);NC.exports=EC});var SC=u((vQr,OC)=>{"use strict";var _Ar=K();function PAr(r){return _Ar(r)===r&&r>0}OC.exports=PAr});var tv=u((fQr,TC)=>{"use strict";var RAr=SC();TC.exports=RAr});var IC=u((lQr,LC)=>{"use strict";function FAr(r){return r>=0&&r<=1}LC.exports=FAr});var PC=u((cQr,_C)=>{"use strict";var MAr=IC();_C.exports=MAr});var FC=u((pQr,RC)=>{"use strict";var BAr=xr().isPrimitive,CAr=$i().isPrimitive;function jAr(r,e){return BAr(r)?CAr(e)?null:new TypeError("invalid argument. Second argument must be a probability. Value: `"+e+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+e+"`.")}RC.exports=jAr});var BC=u((gQr,MC)=>{"use strict";function GAr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}MC.exports=GAr});var jC=u((mQr,CC)=>{"use strict";var VAr=b();function UAr(r){return r===0||VAr(r)?r:r<0?-1:1}CC.exports=UAr});var Ya=u((qQr,GC)=>{"use strict";var HAr=jC();GC.exports=HAr});var UC=u((yQr,VC)=>{"use strict";var WAr=Z(),kAr=1/12,DAr=1/360,XAr=1/1260;function JAr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=WAr(r,2),(kAr-(DAr-XAr/e)/e)/r}}VC.exports=JAr});var WC=u((hQr,HC)=>{"use strict";var iv=K(),zAr=Ya(),YAr=V(),nv=Q(),Za=C(),Qa=UC(),ZAr=1/6;function QAr(r,e,t){var i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N,G,O,J,ar,k,tu,Vr,fr,gn;for(J=iv((e+1)*t),f=e-J+1,ar=1-t,k=t/ar,l=(e+1)*k,s=e*t*ar,a=YAr(s),g=1.15+2.53*a,m=-.0873+.0248*g+.01*t,h=e*t+.5,i=(2.83+5.1/g)*a,y=.92-4.2/g,n=.86*y,N=(J+.5)*Za((J+1)/(k*f)),N+=Qa(J)+Qa(e-J);;){if(fr=r(),fr<=n)return Vr=fr/y-.43,k=Vr*(2*m/(.5-nv(Vr))+g)+h,iv(k);if(fr>=y?Vr=r()-.5:(Vr=fr/y-.93,Vr=zAr(Vr)*.5-Vr,fr=y*r()),c=.5-nv(Vr),O=iv(Vr*(2*m/c+g)+h),!(O<0||O>e))if(fr=fr*i/(m/(c*c)+g),p=nv(O-J),p>15){if(fr=Za(fr),o=p/s,v=(p/3+.625)*p,v+=ZAr,v/=s,o*=v+.5,tu=-(p*p)/(2*s),fr<tu-o||fr<=tu+o&&(q=e-O+1,gn=N+(e+1)*Za(f/q),gn+=(O+.5)*Za(q*k/(O+1)),gn+=-(Qa(O)+Qa(e-O)),fr<=gn))return O}else{if(E=1,J<O)for(G=J;G<=O;G++)E*=l/G-k;else if(J>O)for(G=O;G<=J;G++)fr*=l/G-k;if(fr<=E)return O}}}HC.exports=QAr});var XC=u((dQr,DC)=>{"use strict";var KAr=BC(),$Ar=WC();function kC(r,e,t){return t>.5?e-kC(r,e,1-t):e*t<10?KAr(r,e,t):$Ar(r,e,t)}DC.exports=kC});var av=u((wQr,xC)=>{"use strict";var ae=w(),Ka=_(),JC=R(),zC=T(),YC=L(),ZC=A(),QC=I(),xAr=B(),KC=b(),rOr=tv(),eOr=PC(),$a=X().factory,tOr=F(),iOr=FC(),$C=XC();function nOr(){var r,e,t,i,n,a;if(arguments.length===0)e=$a();else if(arguments.length===1){if(r=arguments[0],!zC(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(ZC(r,"prng")){if(!YC(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=$a(r)}else{if(n=arguments[0],a=arguments[1],i=iOr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!zC(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(ZC(r,"prng")){if(!YC(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=$a(r)}else e=$a()}return n===void 0?t=y:t=q,ae(t,"NAME","binomial"),r&&r.prng?(ae(t,"seed",null),ae(t,"seedLength",null),JC(t,"state",QC(null),xAr),ae(t,"stateLength",null),ae(t,"byteLength",null),ae(t,"toJSON",QC(null)),ae(t,"PRNG",e)):(Ka(t,"seed",s),Ka(t,"seedLength",o),JC(t,"state",l,c),Ka(t,"stateLength",v),Ka(t,"byteLength",f),ae(t,"toJSON",p),ae(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=tOr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return $C(e,n,a)}function y(m,g){return KC(m)||KC(g)||!rOr(m)||!eOr(g)?NaN:$C(e,m,g)}}xC.exports=nOr});var ej=u((bQr,rj)=>{"use strict";var aOr=av(),uOr=aOr();rj.exports=uOr});var nj=u((EQr,ij)=>{"use strict";var sOr=w(),tj=ej(),oOr=av();sOr(tj,"factory",oOr);ij.exports=tj});var uj=u((NQr,aj)=>{"use strict";var vOr=V(),fOr=C(),lOr=Vt(),cOr=mt(),pOr=Re();function gOr(r){var e,t;return e=!0,i;function i(){var n,a,s,o;if(e){do n=r(),a=r();while(n===0);return s=vOr(-2*fOr(n)),o=pOr*a,t=s*cOr(o),e=!1,s*lOr(o)}return e=!0,t}}aj.exports=gOr});var oj=u((AQr,sj)=>{"use strict";var mOr=V(),qOr=C(),yOr=mt(),hOr=Or(),dOr=yOr(hOr);function wOr(r){var e=mOr(-2*qOr(r));return e*dOr}sj.exports=wOr});var fj=u((OQr,vj)=>{"use strict";var bOr=V(),EOr=C(),NOr=mt(),AOr=Re();function OOr(r){var e=bOr(-2*EOr(r)),t=AOr*r;return e*NOr(t)}vj.exports=OOr});var uv=u((SQr,gj)=>{"use strict";var Rr=w(),xa=_(),lj=R(),SOr=T(),TOr=L(),LOr=ur().isPrimitive,vn=A(),IOr=Jr(),cj=X().factory,pj=I(),_Or=B(),POr=F(),ROr=uj(),FOr=oj(),MOr=fj();function BOr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!SOr(r))throw new TypeError("invalid argument. Must provide an object. Value: `"+r+"`.");if(vn(r,"copy")&&(n.copy=r.copy,!LOr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(vn(r,"prng")){if(!TOr(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else if(vn(r,"state")){if(n.state=r.state,!IOr(r.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+r.state+"`.")}else if(vn(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+r.seed+"`.")}return n.state===void 0?e===void 0?(i=cj(n),e=i.normalized):n.seed=null:(i=cj(n),e=i.normalized),t=ROr(e),Rr(t,"NAME","box-muller"),n.seed===null?(Rr(t,"seed",null),Rr(t,"seedLength",null)):(xa(t,"seed",a),xa(t,"seedLength",s)),r&&r.prng?(lj(t,"state",pj(null),_Or),Rr(t,"stateLength",null),Rr(t,"byteLength",null),Rr(t,"toJSON",pj(null))):(lj(t,"state",f,l),xa(t,"stateLength",o),xa(t,"byteLength",v),Rr(t,"toJSON",c)),Rr(t,"PRNG",e),vn(e,"MIN")?(Rr(t,"MIN",FOr(e.MIN)),Rr(t,"MAX",MOr(e.MIN))):(Rr(t,"MIN",null),Rr(t,"MAX",null)),t;function a(){return i.seed}function s(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function l(p){i.state=p}function c(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=POr(i.state),p.params=[],p}}gj.exports=BOr});var qj=u((TQr,mj)=>{"use strict";var COr=uv(),jOr=COr();mj.exports=jOr});var dj=u((LQr,hj)=>{"use strict";var GOr=w(),yj=qj(),VOr=uv();GOr(yj,"factory",VOr);hj.exports=yj});var bj=u((IQr,wj)=>{"use strict";var UOr=j().isPrimitive,HOr=W().isPrimitive,WOr=ir();function kOr(r,e){return!UOr(r)||WOr(r)?new TypeError("invalid argument. `x0` must be a number primitive and not `NaN`. Value: `"+r+"`."):HOr(e)?null:new TypeError("invalid argument. `gamma` must be a positive number. Value: `"+e+"`.")}wj.exports=kOr});var Nj=u((_Qr,Ej)=>{"use strict";var DOr=Mo(),XOr=Or();function JOr(r,e,t){return e+t*DOr(XOr*(r()-.5))}Ej.exports=JOr});var sv=u((PQr,Pj)=>{"use strict";var Je=w(),r0=_(),Aj=R(),Oj=T(),Sj=L(),Tj=A(),Lj=I(),zOr=B(),Ij=b(),vi=De().factory,YOr=F(),ZOr=bj(),_j=Nj();function QOr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=vi();else if(arguments.length===1){if(t=arguments[0],!Oj(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Tj(t,"prng")){if(!Sj(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=vi({prng:t.prng})}else e=vi(t)}else{if(s=arguments[0],r=arguments[1],a=ZOr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!Oj(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Tj(t,"prng")){if(!Sj(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=vi({prng:t.prng})}else e=vi(t)}else e=vi()}return s===void 0?n=m:n=y,i=e.PRNG,Je(n,"NAME","cauchy"),t&&t.prng?(Je(n,"seed",null),Je(n,"seedLength",null),Aj(n,"state",Lj(null),zOr),Je(n,"stateLength",null),Je(n,"byteLength",null),Je(n,"toJSON",Lj(null))):(r0(n,"seed",o),r0(n,"seedLength",v),Aj(n,"state",c,p),r0(n,"stateLength",f),r0(n,"byteLength",l),Je(n,"toJSON",q)),Je(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=YOr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return _j(e,s,r)}function m(g,h){return Ij(g)||Ij(h)||h<=0?NaN:_j(e,g,h)}}Pj.exports=QOr});var Fj=u((RQr,Rj)=>{"use strict";var KOr=sv(),$Or=KOr();Rj.exports=$Or});var Cj=u((FQr,Bj)=>{"use strict";var xOr=w(),Mj=Fj(),rSr=sv();xOr(Mj,"factory",rSr);Bj.exports=Mj});var ov=u((MQr,Wj)=>{"use strict";var ze=w(),e0=_(),jj=R(),eSr=W().isPrimitive,Gj=T(),Vj=L(),Uj=A(),Hj=I(),tSr=B(),iSr=b(),fi=oi().factory,nSr=F();function aSr(){var r,e,t,i,n;if(arguments.length===0)r=fi();else if(arguments.length===1&&Gj(arguments[0]))if(t=arguments[0],Uj(t,"prng")){if(!Vj(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=fi({prng:t.prng})}else r=fi(t);else{if(n=arguments[0],!eSr(n))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+n+"`.");if(arguments.length>1){if(t=arguments[1],!Gj(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Uj(t,"prng")){if(!Vj(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=fi(n/2,.5,{prng:t.prng})}else r=fi(n/2,.5,t)}else r=fi(n/2,.5)}return n===void 0?i=q:i=p,e=r.PRNG,ze(i,"NAME","chisquare"),t&&t.prng?(ze(i,"seed",null),ze(i,"seedLength",null),jj(i,"state",Hj(null),tSr),ze(i,"stateLength",null),ze(i,"byteLength",null),ze(i,"toJSON",Hj(null))):(e0(i,"seed",a),e0(i,"seedLength",s),jj(i,"state",f,l),e0(i,"stateLength",o),e0(i,"byteLength",v),ze(i,"toJSON",c)),ze(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function l(y){e.state=y}function c(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=nSr(e.state),n===void 0?y.params=[]:y.params=[n],y}function p(){return r()}function q(y){return iSr(y)||y<=0?NaN:r(y/2,.5)}}Wj.exports=aSr});var Dj=u((BQr,kj)=>{"use strict";var uSr=ov(),sSr=uSr();kj.exports=sSr});var fn=u((CQr,Jj)=>{"use strict";var oSr=w(),Xj=Dj(),vSr=ov();oSr(Xj,"factory",vSr);Jj.exports=Xj});var vv=u((jQr,xj)=>{"use strict";var Ye=w(),t0=_(),zj=R(),fSr=W().isPrimitive,Yj=T(),Zj=L(),Qj=A(),Kj=I(),lSr=B(),cSr=b(),li=fn().factory,pSr=F(),$j=V();function gSr(){var r,e,t,i,n;if(arguments.length===0)r=li();else if(arguments.length===1&&Yj(arguments[0]))if(t=arguments[0],Qj(t,"prng")){if(!Zj(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=li({prng:t.prng})}else r=li(t);else{if(n=arguments[0],!fSr(n))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+n+"`.");if(arguments.length>1){if(t=arguments[1],!Yj(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Qj(t,"prng")){if(!Zj(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=li(n,{prng:t.prng})}else r=li(n,t)}else r=li(n)}return n===void 0?i=q:i=p,e=r.PRNG,Ye(i,"NAME","chi"),t&&t.prng?(Ye(i,"seed",null),Ye(i,"seedLength",null),zj(i,"state",Kj(null),lSr),Ye(i,"stateLength",null),Ye(i,"byteLength",null),Ye(i,"toJSON",Kj(null))):(t0(i,"seed",a),t0(i,"seedLength",s),zj(i,"state",f,l),t0(i,"stateLength",o),t0(i,"byteLength",v),Ye(i,"toJSON",c)),Ye(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function l(y){e.state=y}function c(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=pSr(e.state),n===void 0?y.params=[]:y.params=[n],y}function p(){return $j(r())}function q(y){return cSr(y)||y<=0?NaN:$j(r(y))}}xj.exports=gSr});var eG=u((GQr,rG)=>{"use strict";var mSr=vv(),qSr=mSr();rG.exports=qSr});var nG=u((VQr,iG)=>{"use strict";var ySr=w(),tG=eG(),hSr=vv();ySr(tG,"factory",hSr);iG.exports=tG});var uG=u((UQr,aG)=>{"use strict";var dSr=j().isPrimitive,wSr=W().isPrimitive,bSr=ir();function ESr(r,e){return!dSr(r)||bSr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):wSr(e)?null:new TypeError("invalid argument. `s` must be a positive number. Value: `"+e+"`.")}aG.exports=ESr});var oG=u((HQr,sG)=>{"use strict";var fv=b(),NSr=Vi(),ASr=Or();function OSr(r,e,t){var i;return fv(r)||fv(e)||fv(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+NSr(i)/ASr)/2)}sG.exports=OSr});var fG=u((WQr,vG)=>{"use strict";var SSr=I(),TSr=wo().factory,lv=b(),LSr=Vi(),ISr=Or();function _Sr(r,e){if(lv(r)||lv(e)||e<0)return SSr(NaN);if(e===0)return TSr(r);return t;function t(i){var n;return lv(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+LSr(n)/ISr)/2)}}vG.exports=_Sr});var pG=u((kQr,cG)=>{"use strict";var PSr=w(),lG=oG(),RSr=fG();PSr(lG,"factory",RSr);cG.exports=lG});var cv=u((DQr,gG)=>{"use strict";var FSr=pG(),MSr=1e4,BSr=1e-12;function CSr(r,e,t){var i,n,a,s,o;for(o=1,i=e-t,n=e+t;o<MSr;){if(s=(i+n)/2,n-i<BSr)return s;a=FSr(s,e,t),r>a?i=s:n=s,o+=1}return s}gG.exports=CSr});var qG=u((XQr,mG)=>{"use strict";var pv=b(),jSr=cv();function GSr(r,e,t){return pv(e)||pv(t)||pv(r)||t<0||r<0||r>1?NaN:t===0?e:jSr(r,e,t)}mG.exports=GSr});var hG=u((JQr,yG)=>{"use strict";var VSr=b();function USr(r,e){return VSr(r)||r<0||r>1?NaN:e}yG.exports=USr});var bG=u((zQr,wG)=>{"use strict";var HSr=I(),dG=b();function WSr(r){if(dG(r))return HSr(NaN);return e;function e(t){return dG(t)||t<0||t>1?NaN:r}}wG.exports=WSr});var gv=u((YQr,NG)=>{"use strict";var kSr=w(),EG=hG(),DSr=bG();kSr(EG,"factory",DSr);NG.exports=EG});var OG=u((ZQr,AG)=>{"use strict";var XSr=I(),JSr=gv().factory,mv=b(),zSr=cv();function YSr(r,e){if(mv(r)||mv(e)||e<0)return XSr(NaN);if(e===0)return JSr(r);return t;function t(i){return mv(i)||i<0||i>1?NaN:zSr(i,r,e)}}AG.exports=YSr});var LG=u((QQr,TG)=>{"use strict";var ZSr=w(),SG=qG(),QSr=OG();ZSr(SG,"factory",QSr);TG.exports=SG});var _G=u((KQr,IG)=>{"use strict";var KSr=LG();function $Sr(r,e,t){return KSr(r(),e,t)}IG.exports=$Sr});var qv=u(($Qr,GG)=>{"use strict";var ue=w(),i0=_(),PG=R(),RG=T(),FG=L(),MG=A(),BG=I(),xSr=B(),n0=X().factory,CG=b(),rTr=F(),eTr=uG(),jG=_G();function tTr(){var r,e,t,i,n,a;if(arguments.length===0)e=n0();else if(arguments.length===1){if(r=arguments[0],!RG(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(MG(r,"prng")){if(!FG(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=n0(r)}else{if(n=arguments[0],a=arguments[1],i=eTr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!RG(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(MG(r,"prng")){if(!FG(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=n0(r)}else e=n0()}return n===void 0?t=y:t=q,ue(t,"NAME","cosine"),r&&r.prng?(ue(t,"seed",null),ue(t,"seedLength",null),PG(t,"state",BG(null),xSr),ue(t,"stateLength",null),ue(t,"byteLength",null),ue(t,"toJSON",BG(null)),ue(t,"PRNG",e)):(i0(t,"seed",s),i0(t,"seedLength",o),PG(t,"state",l,c),i0(t,"stateLength",v),i0(t,"byteLength",f),ue(t,"toJSON",p),ue(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=rTr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return jG(e,n,a)}function y(m,g){return CG(m)||CG(g)||g<=0?NaN:jG(e,m,g)}}GG.exports=tTr});var UG=u((xQr,VG)=>{"use strict";var iTr=qv(),nTr=iTr();VG.exports=nTr});var kG=u((rKr,WG)=>{"use strict";var aTr=w(),HG=UG(),uTr=qv();aTr(HG,"factory",uTr);WG.exports=HG});var zG=u((eKr,JG)=>{"use strict";var DG=Fr().isPrimitive,XG=ir();function sTr(r,e){return!DG(r)||XG(r)?new TypeError("invalid argument. First argument must be an integer and not `NaN`. Value: `"+r+"`."):!DG(e)||XG(e)?new TypeError("invalid argument. Second argument must be an integer and not `NaN`. Value: `"+e+"`."):r>e?new RangeError("invalid argument. Minimum support `a` must be less than or equal to maximum support `b`. Value: `["+r+","+e+"]`."):null}JG.exports=sTr});var QG=u((tKr,ZG)=>{"use strict";var yv=Xi(),ci=K();function YG(r,e,t){var i,n,a,s,o,v,f,l,c;if(a=t-e,a===0)return e;if(f=r.MIN,l=r.MAX,n=l-f,n===a)return r()-f+e;if(n<a)for(s=0;;){for(a===yv?(s=ci(a/(n+1)),a%(n+1)===n&&(s+=1)):s=ci((a+1)/(n+1)),i=0,v=1;v<=s;){if(i+=(r()-f)*v,v*n===a-v+1)return i;v*=n+1}if(c=YG(r,0,ci(a/v)),!(c>yv/v)&&(c*=v,i+=c,!(i>a)))return i+e}for(n===yv?(o=ci(n/(a+1)),n%(a+1)===a&&(o+=1)):o=ci((n+1)/(a+1));;)if(i=r()-f,i=ci(i/o),i<=a)return i+e}ZG.exports=YG});var hv=u((iKr,nV)=>{"use strict";var se=w(),a0=_(),KG=R(),$G=T(),xG=L(),rV=A(),eV=I(),oTr=B(),u0=X().factory,tV=b(),pi=Ar(),vTr=F(),fTr=zG(),iV=QG();function lTr(){var r,e,t,i,n,a;if(arguments.length===0)e=u0();else if(arguments.length===1){if(r=arguments[0],!$G(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(rV(r,"prng")){if(!xG(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");if(e=r.prng,!pi(e.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!pi(e.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else e=u0(r)}else{if(n=arguments[0],a=arguments[1],i=fTr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!$G(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(rV(r,"prng")){if(!xG(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");if(e=r.prng,!pi(e.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!pi(e.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else e=u0(r)}else e=u0()}return n===void 0?t=y:t=q,se(t,"NAME","discrete-uniform"),r&&r.prng?(se(t,"seed",null),se(t,"seedLength",null),KG(t,"state",eV(null),oTr),se(t,"stateLength",null),se(t,"byteLength",null),se(t,"toJSON",eV(null)),se(t,"PRNG",e)):(a0(t,"seed",s),a0(t,"seedLength",o),KG(t,"state",l,c),a0(t,"stateLength",v),a0(t,"byteLength",f),se(t,"toJSON",p),se(t,"PRNG",e)),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=vTr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return iV(e,n,a)}function y(m,g){return tV(m)||tV(g)||!pi(m)||!pi(g)||m>g?NaN:iV(e,m,g)}}nV.exports=lTr});var uV=u((nKr,aV)=>{"use strict";var cTr=hv(),pTr=cTr();aV.exports=pTr});var vV=u((aKr,oV)=>{"use strict";var gTr=w(),sV=uV(),mTr=hv();gTr(sV,"factory",mTr);oV.exports=sV});var lV=u((uKr,fV)=>{"use strict";var qTr=W().isPrimitive,yTr=xr().isPrimitive;function hTr(r,e){return yTr(r)?qTr(e)?null:new TypeError("invalid argument. Second argument must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+r+"`.")}fV.exports=hTr});var pV=u((sKr,cV)=>{"use strict";var dTr=C();function wTr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*dTr(i)}cV.exports=wTr});var dv=u((oKr,bV)=>{"use strict";var oe=w(),s0=_(),gV=R(),mV=T(),qV=L(),yV=A(),hV=I(),bTr=B(),o0=X().factory,dV=b(),ETr=tv(),NTr=F(),ATr=lV(),wV=pV();function OTr(){var r,e,t,i,n,a;if(arguments.length===0)e=o0();else if(arguments.length===1){if(t=arguments[0],!mV(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(yV(t,"prng")){if(!qV(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=t.prng}else e=o0(t)}else{if(a=arguments[0],r=arguments[1],n=ATr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!mV(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(yV(t,"prng")){if(!qV(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=t.prng}else e=o0(t)}else e=o0()}return a===void 0?i=y:i=q,oe(i,"NAME","erlang"),t&&t.prng?(oe(i,"seed",null),oe(i,"seedLength",null),gV(i,"state",hV(null),bTr),oe(i,"stateLength",null),oe(i,"byteLength",null),oe(i,"toJSON",hV(null)),oe(i,"PRNG",e)):(s0(i,"seed",s),s0(i,"seedLength",o),gV(i,"state",l,c),s0(i,"stateLength",v),s0(i,"byteLength",f),oe(i,"toJSON",p),oe(i,"PRNG",e),e=e.normalized),i;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=NTr(e.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return wV(e,a,r)}function y(m,g){return dV(m)||dV(g)||!ETr(m)||g<=0?NaN:wV(e,m,g)}}bV.exports=OTr});var NV=u((vKr,EV)=>{"use strict";var STr=dv(),TTr=STr();EV.exports=TTr});var SV=u((fKr,OV)=>{"use strict";var LTr=w(),AV=NV(),ITr=dv();LTr(AV,"factory",ITr);OV.exports=AV});var LV=u((lKr,TV)=>{"use strict";var _Tr=C();function PTr(r,e){return-_Tr(1-r())/e}TV.exports=PTr});var wv=u((cKr,BV)=>{"use strict";var ve=w(),v0=_(),IV=R(),RTr=W().isPrimitive,_V=T(),PV=L(),RV=A(),FV=I(),FTr=B(),f0=X().factory,MTr=b(),BTr=F(),MV=LV();function CTr(){var r,e,t,i;if(arguments.length===0)t=f0();else if(arguments.length===1&&_V(arguments[0]))if(e=arguments[0],RV(e,"prng")){if(!PV(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=f0(e);else{if(r=arguments[0],!RTr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!_V(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(RV(e,"prng")){if(!PV(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=f0(e)}else t=f0()}return r===void 0?i=p:i=c,ve(i,"NAME","exponential"),e&&e.prng?(ve(i,"seed",null),ve(i,"seedLength",null),IV(i,"state",FV(null),FTr),ve(i,"stateLength",null),ve(i,"byteLength",null),ve(i,"toJSON",FV(null)),ve(i,"PRNG",t)):(v0(i,"seed",n),v0(i,"seedLength",a),IV(i,"state",v,f),v0(i,"stateLength",s),v0(i,"byteLength",o),ve(i,"toJSON",l),ve(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=BTr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return MV(t,r)}function p(q){return MTr(q)||q<=0?NaN:MV(t,q)}}BV.exports=CTr});var jV=u((pKr,CV)=>{"use strict";var jTr=wv(),GTr=jTr();CV.exports=GTr});var UV=u((gKr,VV)=>{"use strict";var VTr=w(),GV=jV(),UTr=wv();VTr(GV,"factory",UTr);VV.exports=GV});var kV=u((mKr,WV)=>{"use strict";var HV=W().isPrimitive;function HTr(r,e){return HV(r)?HV(e)?null:new TypeError("invalid argument. `d2` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `d1` must be a positive number. Value: `"+r+"`.")}WV.exports=HTr});var XV=u((qKr,DV)=>{"use strict";function WTr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}DV.exports=WTr});var bv=u((yKr,xV)=>{"use strict";var Ze=w(),l0=_(),JV=R(),zV=T(),YV=L(),ZV=A(),QV=I(),kTr=B(),gi=fn().factory,KV=b(),DTr=F(),XTr=kV(),$V=XV();function JTr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=gi();else if(arguments.length===1){if(e=arguments[0],!zV(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(ZV(e,"prng")){if(!YV(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");r=gi({prng:e.prng})}else r=gi(e)}else{if(a=arguments[0],s=arguments[1],n=XTr(a,s),n)throw n;if(arguments.length>2){if(e=arguments[2],!zV(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(ZV(e,"prng")){if(!YV(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");r=gi({prng:e.prng})}else r=gi(e)}else r=gi()}return a===void 0?i=m:i=y,t=r.PRNG,Ze(i,"NAME","f"),e&&e.prng?(Ze(i,"seed",null),Ze(i,"seedLength",null),JV(i,"state",QV(null),kTr),Ze(i,"stateLength",null),Ze(i,"byteLength",null),Ze(i,"toJSON",QV(null))):(l0(i,"seed",o),l0(i,"seedLength",v),JV(i,"state",c,p),l0(i,"stateLength",f),l0(i,"byteLength",l),Ze(i,"toJSON",q)),Ze(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function l(){return t.byteLength}function c(){return t.state}function p(g){t.state=g}function q(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=DTr(t.state),a===void 0?g.params=[]:g.params=[a,s],g}function y(){return $V(r,a,s)}function m(g,h){return KV(g)||KV(h)||g<=0||h<=0?NaN:$V(r,g,h)}}xV.exports=JTr});var eU=u((hKr,rU)=>{"use strict";var zTr=bv(),YTr=zTr();rU.exports=YTr});var nU=u((dKr,iU)=>{"use strict";var ZTr=w(),tU=eU(),QTr=bv();ZTr(tU,"factory",QTr);iU.exports=tU});var sU=u((wKr,uU)=>{"use strict";var aU=W().isPrimitive,KTr=j().isPrimitive,Ev=ir();function $Tr(r,e,t){return!aU(r)||Ev(r)?new TypeError("invalid argument. First argument must be a positive number primitive and not `NaN`. Value: `"+r+"`."):!aU(e)||Ev(e)?new TypeError("invalid argument. Second argument must be a positive number primitive and not `NaN`. Value: `"+e+"`."):!KTr(t)||Ev(t)?new TypeError("invalid argument. Third argument must be a number primitive and not `NaN`. Value: `"+t+"`."):null}uU.exports=$Tr});var vU=u((bKr,oU)=>{"use strict";var xTr=Z(),rLr=C();function eLr(r,e,t,i){return i+t*xTr(-rLr(r()),-1/e)}oU.exports=eLr});var Av=u((EKr,qU)=>{"use strict";var fe=w(),c0=_(),fU=R(),lU=T(),cU=L(),pU=A(),gU=I(),tLr=B(),p0=X().factory,Nv=b(),iLr=F(),nLr=sU(),mU=vU();function aLr(){var r,e,t,i,n,a,s;if(arguments.length===0)t=p0();else if(arguments.length===1){if(e=arguments[0],!lU(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(pU(e,"prng")){if(!cU(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=p0(e)}else{if(r=arguments[0],a=arguments[1],s=arguments[2],n=nLr(r,a,s),n)throw n;if(arguments.length>3){if(e=arguments[3],!lU(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(pU(e,"prng")){if(!cU(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=p0(e)}else t=p0()}return r===void 0?i=m:i=y,fe(i,"NAME","frechet"),e&&e.prng?(fe(i,"seed",null),fe(i,"seedLength",null),fU(i,"state",gU(null),tLr),fe(i,"stateLength",null),fe(i,"byteLength",null),fe(i,"toJSON",gU(null)),fe(i,"PRNG",t)):(c0(i,"seed",o),c0(i,"seedLength",v),fU(i,"state",c,p),c0(i,"stateLength",f),c0(i,"byteLength",l),fe(i,"toJSON",q),fe(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function l(){return t.byteLength}function c(){return t.state}function p(g){t.state=g}function q(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=iLr(t.state),r===void 0?g.params=[]:g.params=[r,a,s],g}function y(){return mU(t,r,a,s)}function m(g,h,E){return Nv(g)||Nv(h)||Nv(E)||g<=0||h<=0?NaN:mU(t,g,h,E)}}qU.exports=aLr});var hU=u((NKr,yU)=>{"use strict";var uLr=Av(),sLr=uLr();yU.exports=sLr});var bU=u((AKr,wU)=>{"use strict";var oLr=w(),dU=hU(),vLr=Av();oLr(dU,"factory",vLr);wU.exports=dU});var AU=u((OKr,NU)=>{"use strict";var fLr=K(),EU=C();function lLr(r,e){var t=r();return t===0&&(t=r()),fLr(EU(t)/EU(1-e))}NU.exports=lLr});var Ov=u((SKr,PU)=>{"use strict";var le=w(),g0=_(),OU=R(),SU=T(),cLr=$i().isPrimitive,TU=L(),LU=A(),IU=I(),pLr=B(),m0=X().factory,gLr=b(),mLr=F(),_U=AU();function qLr(){var r,e,t,i;if(arguments.length===0)e=m0();else if(arguments.length===1&&SU(arguments[0]))if(r=arguments[0],LU(r,"prng")){if(!TU(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=m0(r);else{if(i=arguments[0],!cLr(i))throw new TypeError("invalid argument. First argument must be a probability. Value: `"+i+"`.");if(arguments.length>1){if(r=arguments[1],!SU(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(LU(r,"prng")){if(!TU(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=m0(r)}else e=m0()}return i===void 0?t=p:t=c,le(t,"NAME","geometric"),r&&r.prng?(le(t,"seed",null),le(t,"seedLength",null),OU(t,"state",IU(null),pLr),le(t,"stateLength",null),le(t,"byteLength",null),le(t,"toJSON",IU(null)),le(t,"PRNG",e)):(g0(t,"seed",n),g0(t,"seedLength",a),OU(t,"state",v,f),g0(t,"stateLength",s),g0(t,"byteLength",o),le(t,"toJSON",l),le(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(q){e.state=q}function l(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=mLr(e.state),i===void 0?q.params=[]:q.params=[i],q}function c(){return _U(e,i)}function p(q){return gLr(q)||q<0||q>1?NaN:_U(e,q)}}PU.exports=qLr});var FU=u((TKr,RU)=>{"use strict";var yLr=Ov(),hLr=yLr();RU.exports=hLr});var CU=u((LKr,BU)=>{"use strict";var dLr=w(),MU=FU(),wLr=Ov();dLr(MU,"factory",wLr);BU.exports=MU});var GU=u((IKr,jU)=>{"use strict";var bLr=j().isPrimitive,ELr=W().isPrimitive,NLr=ir();function ALr(r,e){return!bLr(r)||NLr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):ELr(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`.")}jU.exports=ALr});var HU=u((_Kr,UU)=>{"use strict";var VU=C();function OLr(r,e,t){return e-t*VU(-VU(r()))}UU.exports=OLr});var Sv=u((PKr,ZU)=>{"use strict";var ce=w(),q0=_(),WU=R(),kU=T(),DU=L(),XU=A(),JU=I(),SLr=B(),y0=X().factory,zU=b(),TLr=F(),LLr=GU(),YU=HU();function ILr(){var r,e,t,i,n,a;if(arguments.length===0)t=y0();else if(arguments.length===1){if(e=arguments[0],!kU(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(XU(e,"prng")){if(!DU(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=y0(e)}else{if(a=arguments[0],r=arguments[1],n=LLr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!kU(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(XU(e,"prng")){if(!DU(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=y0(e)}else t=y0()}return a===void 0?i=y:i=q,ce(i,"NAME","gumbel"),e&&e.prng?(ce(i,"seed",null),ce(i,"seedLength",null),WU(i,"state",JU(null),SLr),ce(i,"stateLength",null),ce(i,"byteLength",null),ce(i,"toJSON",JU(null)),ce(i,"PRNG",t)):(q0(i,"seed",s),q0(i,"seedLength",o),WU(i,"state",l,c),q0(i,"stateLength",v),q0(i,"byteLength",f),ce(i,"toJSON",p),ce(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function l(){return t.state}function c(m){t.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=TLr(t.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return YU(t,a,r)}function y(m,g){return zU(m)||zU(g)||g<=0?NaN:YU(t,m,g)}}ZU.exports=ILr});var KU=u((RKr,QU)=>{"use strict";var _Lr=Sv(),PLr=_Lr();QU.exports=PLr});var rH=u((FKr,xU)=>{"use strict";var RLr=w(),$U=KU(),FLr=Sv();RLr($U,"factory",FLr);xU.exports=$U});var tH=u((MKr,eH)=>{"use strict";var MLr=K();function BLr(r){return MLr(r)===r&&r>=0}eH.exports=BLr});var nH=u((BKr,iH)=>{"use strict";var CLr=tH();iH.exports=CLr});var uH=u((CKr,aH)=>{"use strict";var Tv=Le().isPrimitive;function jLr(r,e,t){return Tv(r)?Tv(e)?Tv(t)?t>r?new RangeError("invalid argument. `n` must be less than or equal to `N`. Value: `"+t+"`."):e>r?new RangeError("invalid argument. `K` must be less than or equal to `N`. Value: `"+e+"`."):null:new TypeError("invalid argument. `n` must be a nonnegative integer. Value: `"+t+"`."):new TypeError("invalid argument. `K` must be a nonnegative integer. Value: `"+e+"`."):new TypeError("invalid argument. `N` must be a nonnegative integer. Value: `"+r+"`.")}aH.exports=jLr});var sH=u((jKr,GLr)=>{GLr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var vH=u((GKr,oH)=>{"use strict";var VLr=b(),ULr=Ar(),HLr=Ht(),WLr=P(),kLr=sH(),DLr=170;function XLr(r){return VLr(r)?NaN:ULr(r)?r<0?NaN:r<=DLr?kLr[r]:WLr:HLr(r+1)}oH.exports=XLr});var lH=u((VKr,fH)=>{"use strict";var JLr=vH();fH.exports=JLr});var pH=u((UKr,cH)=>{"use strict";var Qe=lH();function zLr(r,e,t,i){var n,a,s;for(i<t?(n=Qe(t)*Qe(e+t-i)/(Qe(e+t)*Qe(t-i)),s=0):(n=Qe(e)*Qe(i)/(Qe(i-t)*Qe(e+t)),s=i-t),a=r();a>n;)a-=n,n*=(e-s)*(i-s)/((s+1)*(t-i+1+s)),s+=1;return s}cH.exports=zLr});var mH=u((HKr,gH)=>{"use strict";var h0=pH();function YLr(r,e,t,i){var n,a,s,o;return i>e/2?(s=e-i,2*t<=e?(n=t,a=e-t,o=h0(r,n,a,s),t-o):(a=t,n=e-t,o=h0(r,n,a,s),i-e+t+o)):(s=i,2*t<=e?(n=t,a=e-t,o=h0(r,n,a,s),o):(n=e-t,a=t,o=h0(r,n,a,s),i-o))}gH.exports=YLr});var Iv=u((WKr,NH)=>{"use strict";var pe=w(),d0=_(),qH=R(),yH=T(),hH=L(),dH=A(),wH=I(),ZLr=B(),w0=X().factory,Lv=nH(),bH=P(),QLr=F(),KLr=uH(),EH=mH();function $Lr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=w0();else if(arguments.length===1){if(r=arguments[0],!yH(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(dH(r,"prng")){if(!hH(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=w0(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=KLr(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!yH(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(dH(r,"prng")){if(!hH(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=w0(r)}else e=w0()}return n===void 0?t=m:t=y,pe(t,"NAME","hypergeometric"),r&&r.prng?(pe(t,"seed",null),pe(t,"seedLength",null),qH(t,"state",wH(null),ZLr),pe(t,"stateLength",null),pe(t,"byteLength",null),pe(t,"toJSON",wH(null)),pe(t,"PRNG",e)):(d0(t,"seed",o),d0(t,"seedLength",v),qH(t,"state",c,p),d0(t,"stateLength",f),d0(t,"byteLength",l),pe(t,"toJSON",q),pe(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function l(){return e.byteLength}function c(){return e.state}function p(g){e.state=g}function q(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=QLr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function y(){return EH(e,n,a,s)}function m(g,h,E){return g===bH||h===bH||!Lv(g)||!Lv(h)||!Lv(E)||E>g?NaN:EH(e,g,h,E)}}NH.exports=$Lr});var OH=u((kKr,AH)=>{"use strict";var xLr=Iv(),rIr=xLr();AH.exports=rIr});var LH=u((DKr,TH)=>{"use strict";var eIr=w(),SH=OH(),tIr=Iv();eIr(SH,"factory",tIr);TH.exports=SH});var PH=u((XKr,_H)=>{"use strict";var IH=W().isPrimitive;function iIr(r,e){return IH(r)?IH(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}_H.exports=iIr});var _v=u((JKr,GH)=>{"use strict";var Ke=w(),b0=_(),RH=R(),FH=T(),MH=L(),BH=A(),CH=I(),nIr=B(),mi=oi().factory,jH=b(),aIr=F(),uIr=PH();function sIr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=mi();else if(arguments.length===1){if(i=arguments[0],!FH(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(BH(i,"prng")){if(!MH(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");r=mi({prng:i.prng})}else r=mi(i)}else{if(e=arguments[0],t=arguments[1],s=uIr(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!FH(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(BH(i,"prng")){if(!MH(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");r=mi(e,t,{prng:i.prng})}else r=mi(e,t,i)}else r=mi(e,t)}return e===void 0?a=m:a=y,n=r.PRNG,Ke(a,"NAME","invgamma"),i&&i.prng?(Ke(a,"seed",null),Ke(a,"seedLength",null),RH(a,"state",CH(null),nIr),Ke(a,"stateLength",null),Ke(a,"byteLength",null),Ke(a,"toJSON",CH(null))):(b0(a,"seed",o),b0(a,"seedLength",v),RH(a,"state",c,p),b0(a,"stateLength",f),b0(a,"byteLength",l),Ke(a,"toJSON",q)),Ke(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function l(){return n.byteLength}function c(){return n.state}function p(g){n.state=g}function q(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=aIr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function y(){return 1/r()}function m(g,h){return jH(g)||jH(h)||g<=0||h<=0?NaN:1/r(g,h)}}GH.exports=sIr});var UH=u((zKr,VH)=>{"use strict";var oIr=_v(),vIr=oIr();VH.exports=vIr});var kH=u((YKr,WH)=>{"use strict";var fIr=w(),HH=UH(),lIr=_v();fIr(HH,"factory",lIr);WH.exports=HH});var JH=u((ZKr,XH)=>{"use strict";var DH=W().isPrimitive;function cIr(r,e){return DH(r)?DH(e)?null:new TypeError("invalid argument. `b` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `a` must be a positive number. Value: `"+r+"`.")}XH.exports=cIr});var ZH=u((QKr,YH)=>{"use strict";var zH=Z();function pIr(r,e,t){var i=r();return zH(1-zH(1-i,1/t),1/e)}YH.exports=pIr});var Pv=u((KKr,iW)=>{"use strict";var ge=w(),E0=_(),QH=R(),KH=T(),$H=L(),xH=A(),rW=I(),gIr=B(),N0=X().factory,eW=b(),mIr=F(),qIr=JH(),tW=ZH();function yIr(){var r,e,t,i,n,a;if(arguments.length===0)e=N0();else if(arguments.length===1){if(r=arguments[0],!KH(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(xH(r,"prng")){if(!$H(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=N0(r)}else{if(n=arguments[0],a=arguments[1],i=qIr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!KH(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(xH(r,"prng")){if(!$H(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=N0(r)}else e=N0()}return n===void 0?t=y:t=q,ge(t,"NAME","kumaraswamy"),r&&r.prng?(ge(t,"seed",null),ge(t,"seedLength",null),QH(t,"state",rW(null),gIr),ge(t,"stateLength",null),ge(t,"byteLength",null),ge(t,"toJSON",rW(null)),ge(t,"PRNG",e)):(E0(t,"seed",s),E0(t,"seedLength",o),QH(t,"state",l,c),E0(t,"stateLength",v),E0(t,"byteLength",f),ge(t,"toJSON",p),ge(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=mIr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return tW(e,n,a)}function y(m,g){return eW(m)||eW(g)||m<=0||g<=0?NaN:tW(e,m,g)}}iW.exports=yIr});var aW=u(($Kr,nW)=>{"use strict";var hIr=Pv(),dIr=hIr();nW.exports=dIr});var oW=u((xKr,sW)=>{"use strict";var wIr=w(),uW=aW(),bIr=Pv();wIr(uW,"factory",bIr);sW.exports=uW});var fW=u((r$r,vW)=>{"use strict";var EIr=j().isPrimitive,NIr=W().isPrimitive,AIr=ir();function OIr(r,e){return!EIr(r)||AIr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):NIr(e)?null:new TypeError("invalid argument. `b` must be a positive number. Value: `"+e+"`.")}vW.exports=OIr});var cW=u((e$r,lW)=>{"use strict";var SIr=Ya(),TIr=Q(),LIr=C();function IIr(r,e,t){var i=r()-.5;return e-t*SIr(i)*LIr(1-2*TIr(i))}lW.exports=IIr});var Rv=u((t$r,wW)=>{"use strict";var me=w(),A0=_(),pW=R(),gW=T(),mW=L(),qW=A(),yW=I(),_Ir=B(),O0=X().factory,hW=b(),PIr=F(),RIr=fW(),dW=cW();function FIr(){var r,e,t,i,n,a;if(arguments.length===0)e=O0();else if(arguments.length===1){if(r=arguments[0],!gW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(qW(r,"prng")){if(!mW(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=O0(r)}else{if(n=arguments[0],a=arguments[1],i=RIr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!gW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(qW(r,"prng")){if(!mW(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=O0(r)}else e=O0()}return n===void 0?t=y:t=q,me(t,"NAME","laplace"),r&&r.prng?(me(t,"seed",null),me(t,"seedLength",null),pW(t,"state",yW(null),_Ir),me(t,"stateLength",null),me(t,"byteLength",null),me(t,"toJSON",yW(null)),me(t,"PRNG",e)):(A0(t,"seed",s),A0(t,"seedLength",o),pW(t,"state",l,c),A0(t,"stateLength",v),A0(t,"byteLength",f),me(t,"toJSON",p),me(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=PIr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return dW(e,n,a)}function y(m,g){return hW(m)||hW(g)||g<=0?NaN:dW(e,m,g)}}wW.exports=FIr});var EW=u((i$r,bW)=>{"use strict";var MIr=Rv(),BIr=MIr();bW.exports=BIr});var OW=u((n$r,AW)=>{"use strict";var CIr=w(),NW=EW(),jIr=Rv();CIr(NW,"factory",jIr);AW.exports=NW});var TW=u((a$r,SW)=>{"use strict";var GIr=j().isPrimitive,VIr=W().isPrimitive,UIr=ir();function HIr(r,e){return!GIr(r)||UIr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):VIr(e)?null:new TypeError("invalid argument. `c` must be a positive number. Value: `"+e+"`.")}SW.exports=HIr});var IW=u((u$r,LW)=>{"use strict";function WIr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}LW.exports=WIr});var PW=u((s$r,_W)=>{"use strict";function kIr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}_W.exports=kIr});var FW=u((o$r,RW)=>{"use strict";function DIr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}RW.exports=DIr});var BW=u((v$r,MW)=>{"use strict";function XIr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}MW.exports=XIr});var jW=u((f$r,CW)=>{"use strict";function JIr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}CW.exports=JIr});var HW=u((l$r,UW)=>{"use strict";var zIr=b(),GW=V(),VW=C(),YIr=P(),ZIr=D(),QIr=IW(),KIr=PW(),$Ir=FW(),xIr=BW(),r_r=jW(),e_r=.08913147449493408,t_r=2.249481201171875,i_r=.807220458984375,n_r=.9399557113647461,a_r=.9836282730102539;function u_r(r){var e,t,i,n,a,s;return zIr(r)?NaN:r===1?YIr:r===-1?ZIr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),s=QIr(t),e*(a*e_r+a*s)):n>=.25?(a=GW(-2*VW(n)),n-=.25,s=KIr(n),e*(a/(t_r+s))):(n=GW(-VW(n)),n<3?(i=n-1.125,s=$Ir(i),e*(i_r*n+s*n)):n<6?(i=n-3,s=xIr(i),e*(n_r*n+s*n)):(i=n-6,s=r_r(i),e*(a_r*n+s*n))))}UW.exports=u_r});var Fv=u((c$r,WW)=>{"use strict";var s_r=HW();WW.exports=s_r});var DW=u((p$r,kW)=>{"use strict";var o_r=Fv(),Mv=b(),v_r=V();function f_r(r,e,t){var i,n;return Mv(e)||Mv(t)||Mv(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*v_r(2),i+n*o_r(2*r-1))}kW.exports=f_r});var JW=u((g$r,XW)=>{"use strict";var l_r=I(),c_r=gv().factory,p_r=Fv(),Bv=b(),g_r=V();function m_r(r,e){var t,i;if(Bv(r)||Bv(e)||e<0)return l_r(NaN);return e===0&&c_r(r),t=r,i=e*g_r(2),n;function n(a){return Bv(a)||a<0||a>1?NaN:t+i*p_r(2*a-1)}}XW.exports=m_r});var ZW=u((m$r,YW)=>{"use strict";var q_r=w(),zW=DW(),y_r=JW();q_r(zW,"factory",y_r);YW.exports=zW});var KW=u((q$r,QW)=>{"use strict";var h_r=ZW();function d_r(r,e,t){var i=h_r(1-r()/2,0,1);return e+t/(i*i)}QW.exports=d_r});var Cv=u((y$r,ak)=>{"use strict";var qe=w(),S0=_(),$W=R(),xW=T(),rk=L(),ek=A(),tk=I(),w_r=B(),T0=X().factory,ik=b(),b_r=F(),E_r=TW(),nk=KW();function N_r(){var r,e,t,i,n,a;if(arguments.length===0)e=T0();else if(arguments.length===1){if(r=arguments[0],!xW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(ek(r,"prng")){if(!rk(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=T0(r)}else{if(n=arguments[0],a=arguments[1],i=E_r(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!xW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(ek(r,"prng")){if(!rk(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=T0(r)}else e=T0()}return n===void 0?t=y:t=q,qe(t,"NAME","levy"),r&&r.prng?(qe(t,"seed",null),qe(t,"seedLength",null),$W(t,"state",tk(null),w_r),qe(t,"stateLength",null),qe(t,"byteLength",null),qe(t,"toJSON",tk(null)),qe(t,"PRNG",e)):(S0(t,"seed",s),S0(t,"seedLength",o),$W(t,"state",l,c),S0(t,"stateLength",v),S0(t,"byteLength",f),qe(t,"toJSON",p),qe(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=b_r(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return nk(e,n,a)}function y(m,g){return ik(m)||ik(g)||g<=0?NaN:nk(e,m,g)}}ak.exports=N_r});var sk=u((h$r,uk)=>{"use strict";var A_r=Cv(),O_r=A_r();uk.exports=O_r});var fk=u((d$r,vk)=>{"use strict";var S_r=w(),ok=sk(),T_r=Cv();S_r(ok,"factory",T_r);vk.exports=ok});var ck=u((w$r,lk)=>{"use strict";var L_r=j().isPrimitive,I_r=W().isPrimitive,__r=ir();function P_r(r,e){return!L_r(r)||__r(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):I_r(e)?null:new TypeError("invalid argument. `s` must be a positive number. Value: `"+e+"`.")}lk.exports=P_r});var gk=u((b$r,pk)=>{"use strict";var R_r=C();function F_r(r,e,t){var i=r();return e+t*R_r(i/(1-i))}pk.exports=F_r});var jv=u((E$r,Ek)=>{"use strict";var ye=w(),L0=_(),mk=R(),qk=T(),yk=L(),hk=A(),dk=I(),M_r=B(),I0=X().factory,wk=b(),B_r=F(),C_r=ck(),bk=gk();function j_r(){var r,e,t,i,n,a;if(arguments.length===0)e=I0();else if(arguments.length===1){if(r=arguments[0],!qk(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(hk(r,"prng")){if(!yk(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=I0(r)}else{if(n=arguments[0],a=arguments[1],i=C_r(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!qk(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(hk(r,"prng")){if(!yk(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=I0(r)}else e=I0()}return n===void 0?t=y:t=q,ye(t,"NAME","logistic"),r&&r.prng?(ye(t,"seed",null),ye(t,"seedLength",null),mk(t,"state",dk(null),M_r),ye(t,"stateLength",null),ye(t,"byteLength",null),ye(t,"toJSON",dk(null)),ye(t,"PRNG",e)):(L0(t,"seed",s),L0(t,"seedLength",o),mk(t,"state",l,c),L0(t,"stateLength",v),L0(t,"byteLength",f),ye(t,"toJSON",p),ye(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=B_r(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return bk(e,n,a)}function y(m,g){return wk(m)||wk(g)||g<=0?NaN:bk(e,m,g)}}Ek.exports=j_r});var Ak=u((N$r,Nk)=>{"use strict";var G_r=jv(),V_r=G_r();Nk.exports=V_r});var Tk=u((A$r,Sk)=>{"use strict";var U_r=w(),Ok=Ak(),H_r=jv();U_r(Ok,"factory",H_r);Sk.exports=Ok});var Ik=u((O$r,Lk)=>{"use strict";var W_r=j().isPrimitive,k_r=W().isPrimitive,D_r=ir();function X_r(r,e){return!W_r(r)||D_r(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):k_r(e)?null:new TypeError("invalid argument. `sigma` must be a positive number. Value: `"+e+"`.")}Lk.exports=X_r});var Pk=u((S$r,_k)=>{"use strict";var J_r=or();function z_r(r,e,t){return J_r(e+t*r())}_k.exports=z_r});var Gv=u((T$r,Vk)=>{"use strict";var $e=w(),_0=_(),Rk=R(),Fk=T(),Mk=L(),Bk=A(),Ck=I(),Y_r=B(),qi=De().factory,jk=b(),Z_r=F(),Q_r=Ik(),Gk=Pk();function K_r(){var r,e,t,i,n,a,s;if(arguments.length===0)e=qi();else if(arguments.length===1){if(t=arguments[0],!Fk(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Bk(t,"prng")){if(!Mk(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=qi({prng:t.prng})}else e=qi(t)}else{if(s=arguments[0],r=arguments[1],a=Q_r(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!Fk(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Bk(t,"prng")){if(!Mk(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=qi({prng:t.prng})}else e=qi(t)}else e=qi()}return s===void 0?n=m:n=y,i=e.PRNG,$e(n,"NAME","lognormal"),t&&t.prng?($e(n,"seed",null),$e(n,"seedLength",null),Rk(n,"state",Ck(null),Y_r),$e(n,"stateLength",null),$e(n,"byteLength",null),$e(n,"toJSON",Ck(null))):(_0(n,"seed",o),_0(n,"seedLength",v),Rk(n,"state",c,p),_0(n,"stateLength",f),_0(n,"byteLength",l),$e(n,"toJSON",q)),$e(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=Z_r(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return Gk(e,s,r)}function m(g,h){return jk(g)||jk(h)||h<=0?NaN:Gk(e,g,h)}}Vk.exports=K_r});var Hk=u((L$r,Uk)=>{"use strict";var $_r=Gv(),x_r=$_r();Uk.exports=x_r});var Dk=u((I$r,kk)=>{"use strict";var rPr=w(),Wk=Hk(),ePr=Gv();rPr(Wk,"factory",ePr);kk.exports=Wk});var Vv=u((_$r,Xk)=>{"use strict";var tPr=Ct(),iPr=K(),nPr=tPr-1;function aPr(){var r=iPr(1+nPr*Math.random());return r|0}Xk.exports=aPr});var Wv=u((P$r,Qk)=>{"use strict";var he=w(),xe=_(),Jk=R(),Uv=A(),uPr=T(),sPr=ur().isPrimitive,oPr=Mr(),vPr=xr().isPrimitive,zk=Ln(),P0=Ct(),hr=lt(),yi=Ve(),fPr=F(),Yk=Vv(),Hv=P0-1|0,lPr=P0-1|0,cPr=16807,R0=1,F0=2,rt=2,dr=4,ln=5;function Zk(r,e){var t;return e?t="option":t="argument",r.length<ln+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==R0?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+R0+". Actual: "+r[0]+"."):r[1]!==F0?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+F0+". Actual: "+r[1]+"."):r[rt]!==1?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+1 .toString()+". Actual: "+r[rt]+"."):r[dr]!==r.length-ln?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-ln)+". Actual: "+r[dr]+"."):null}function pPr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!uPr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Uv(r,"copy")&&(i.copy=r.copy,!sPr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(Uv(r,"state")){if(t=r.state,i.state=!0,!zk(t))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+t+"`.");if(s=Zk(t,!0),s)throw s;i.copy===!1?e=t:(e=new hr(t.length),yi(t.length,t,1,e,1)),t=new hr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,t[dr])}if(n===void 0)if(Uv(r,"seed"))if(n=r.seed,i.seed=!0,vPr(n)){if(n>lPr)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+n+"`.");n|=0}else if(oPr(n)&&n.length>0)a=n.length,e=new hr(ln+a),e[0]=R0,e[1]=F0,e[rt]=1,e[dr]=a,yi.ndarray(a,n,1,0,e,1,dr+1),t=new hr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+n+"`.");else n=Yk()|0}else n=Yk()|0;return t===void 0&&(e=new hr(ln+1),e[0]=R0,e[1]=F0,e[rt]=1,e[dr]=1,e[dr+1]=n,t=new hr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),he(y,"NAME","minstd"),xe(y,"seed",o),xe(y,"seedLength",v),Jk(y,"state",c,p),xe(y,"stateLength",f),xe(y,"byteLength",l),he(y,"toJSON",q),he(y,"MIN",1),he(y,"MAX",P0-1),he(y,"normalized",m),he(m,"NAME",y.NAME),xe(m,"seed",o),xe(m,"seedLength",v),Jk(m,"state",c,p),xe(m,"stateLength",f),xe(m,"byteLength",l),he(m,"toJSON",q),he(m,"MIN",(y.MIN-1)/Hv),he(m,"MAX",(y.MAX-1)/Hv),y;function o(){var g=e[dr];return yi(g,n,1,new hr(g),1)}function v(){return e[dr]}function f(){return e.length}function l(){return e.byteLength}function c(){var g=e.length;return yi(g,e,1,new hr(g),1)}function p(g){var h;if(!zk(g))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+g+"`.");if(h=Zk(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?yi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new hr(g.length)),yi(g.length,g,1,e,1)),t=new hr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,e[dr])}function q(){var g={};return g.type="PRNG",g.name=y.NAME,g.state=fPr(e),g.params=[],g}function y(){var g=t[0]|0;return g=cPr*g%P0|0,t[0]=g,g|0}function m(){return(y()-1)/Hv}}Qk.exports=pPr});var $k=u((R$r,Kk)=>{"use strict";var gPr=Wv(),mPr=Vv(),qPr=gPr({seed:mPr()});Kk.exports=qPr});var eD=u((F$r,rD)=>{"use strict";var yPr=w(),xk=$k(),hPr=Wv();yPr(xk,"factory",hPr);rD.exports=xk});var iD=u((M$r,tD)=>{"use strict";var dPr=b(),wPr=8;function bPr(r,e,t){var i,n;for(n=0;n<wPr;n++)if(i=r(),dPr(i))throw new Error("unexpected error. PRNG returned `NaN`.");for(n=t-1;n>=0;n--)e[n]=r();return e}tD.exports=bPr});var kv=u((B$r,nD)=>{"use strict";var EPr=Ct(),NPr=K(),APr=EPr-1;function OPr(){var r=NPr(1+APr*Math.random());return r|0}nD.exports=OPr});var Jv=u((C$r,fD)=>{"use strict";var de=w(),et=_(),aD=R(),Dv=A(),SPr=T(),TPr=ur().isPrimitive,LPr=Mr(),IPr=xr().isPrimitive,uD=Ln(),hi=Ve(),_Pr=K(),wr=lt(),cn=Ct(),PPr=F(),sD=iD(),oD=kv(),Xv=cn-1|0,RPr=cn-1|0,FPr=16807,Er=32,C0=1,j0=3,tt=2,di=Er+3,br=Er+6,pn=Er+7,M0=di+1,B0=di+2;function vD(r,e){var t;return e?t="option":t="argument",r.length<pn+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==C0?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+C0+". Actual: "+r[0]+"."):r[1]!==j0?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+j0+". Actual: "+r[1]+"."):r[tt]!==Er?new RangeError("invalid "+t+". `state` array has an incompatible table length. Expected: "+Er+". Actual: "+r[tt]+"."):r[di]!==2?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+2 .toString()+". Actual: "+r[di]+"."):r[br]!==r.length-pn?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-pn)+". Actual: "+r[br]+"."):null}function MPr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!SPr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Dv(r,"copy")&&(i.copy=r.copy,!TPr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(Dv(r,"state")){if(t=r.state,i.state=!0,!uD(t))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+t+"`.");if(s=vD(t,!0),s)throw s;i.copy===!1?e=t:(e=new wr(t.length),hi(t.length,t,1,e,1)),t=new wr(e.buffer,e.byteOffset+(tt+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,t[br])}if(n===void 0)if(Dv(r,"seed"))if(n=r.seed,i.seed=!0,IPr(n)){if(n>RPr)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+n+"`.");n|=0}else if(LPr(n)&&n.length>0)a=n.length,e=new wr(pn+a),e[0]=C0,e[1]=j0,e[tt]=Er,e[di]=2,e[B0]=n[0],e[br]=a,hi.ndarray(a,n,1,0,e,1,br+1),t=new wr(e.buffer,e.byteOffset+(tt+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,a),t=sD(y,t,Er),e[M0]=t[0];else throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+n+"`.");else n=oD()|0}else n=oD()|0;return t===void 0&&(e=new wr(pn+1),e[0]=C0,e[1]=j0,e[tt]=Er,e[di]=2,e[B0]=n,e[br]=1,e[br+1]=n,t=new wr(e.buffer,e.byteOffset+(tt+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,1),t=sD(y,t,Er),e[M0]=t[0]),de(m,"NAME","minstd-shuffle"),et(m,"seed",o),et(m,"seedLength",v),aD(m,"state",c,p),et(m,"stateLength",f),et(m,"byteLength",l),de(m,"toJSON",q),de(m,"MIN",1),de(m,"MAX",cn-1),de(m,"normalized",g),de(g,"NAME",m.NAME),et(g,"seed",o),et(g,"seedLength",v),aD(g,"state",c,p),et(g,"stateLength",f),et(g,"byteLength",l),de(g,"toJSON",q),de(g,"MIN",(m.MIN-1)/Xv),de(g,"MAX",(m.MAX-1)/Xv),m;function o(){var h=e[br];return hi(h,n,1,new wr(h),1)}function v(){return e[br]}function f(){return e.length}function l(){return e.byteLength}function c(){var h=e.length;return hi(h,e,1,new wr(h),1)}function p(h){var E;if(!uD(h))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+h+"`.");if(E=vD(h,!1),E)throw E;i.copy===!1?i.state&&h.length===e.length?hi(h.length,h,1,e,1):(e=h,i.state=!0):(h.length!==e.length&&(e=new wr(h.length)),hi(h.length,h,1,e,1)),t=new wr(e.buffer,e.byteOffset+(tt+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,e[br])}function q(){var h={};return h.type="PRNG",h.name=m.NAME,h.state=PPr(e),h.params=[],h}function y(){var h=e[B0]|0;return h=FPr*h%cn|0,e[B0]=h,h|0}function m(){var h,E;return h=e[M0],E=_Pr(Er*(h/cn)),h=t[E],e[M0]=h,t[E]=y(),h}function g(){return(m()-1)/Xv}}fD.exports=MPr});var cD=u((j$r,lD)=>{"use strict";var BPr=Jv(),CPr=kv(),jPr=BPr({seed:CPr()});lD.exports=jPr});var mD=u((G$r,gD)=>{"use strict";var GPr=w(),pD=cD(),VPr=Jv();GPr(pD,"factory",VPr);gD.exports=pD});var yD=u((V$r,qD)=>{"use strict";var UPr=or();function HPr(r,e){for(var t=r(),i=1;t>UPr(-e);)i+=1,t*=r();return i-1}qD.exports=HPr});var dD=u((U$r,hD)=>{"use strict";var WPr=K();function kPr(r){return WPr(r)===r&&r<0}hD.exports=kPr});var bD=u((H$r,wD)=>{"use strict";var DPr=dD();wD.exports=DPr});var ND=u((W$r,ED)=>{"use strict";var XPr=bD(),JPr=Ui();function zPr(r){return XPr(r)?NaN:JPr(r+1)}ED.exports=zPr});var OD=u((k$r,AD)=>{"use strict";var YPr=ND();AD.exports=YPr});var ID=u((D$r,LD)=>{"use strict";var ZPr=OD(),SD=K(),QPr=Ya(),KPr=V(),TD=Q(),G0=C(),$Pr=y1(),xPr=1/12,rRr=1/360;function eRr(r,e){var t,i,n,a,s,o,v,f,l,c;for(t=KPr(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,s=-3.6224/(v-2)+.9277,n=.86*s;;){if(c=r(),c<=n)return l=c/s-.43,l*=2*o/(.5-TD(l))+v,l+=e+.445,SD(l);if(c>=s?l=r()-.5:(l=c/s-.93,l=QPr(l)*.5-l,c=s*r()),a=.5-TD(l),(a>=.013||a>=c)&&(f=SD((2*o/a+v)*l+e+.445),c*=i/(o/(a*a)+v),l=(f+.5)*G0(e/f),l+=-e-$Pr+f,l-=(xPr-rRr/(f*f))/f,f>=10&&l>=G0(c*t)||(l=f*G0(e)-e-ZPr(f),f>=0&&f<=9&&l>=G0(c))))return f}}LD.exports=eRr});var PD=u((X$r,_D)=>{"use strict";var tRr=yD(),iRr=ID();function nRr(r,e){return e<30?tRr(r,e):iRr(r,e)}_D.exports=nRr});var zv=u((J$r,GD)=>{"use strict";var we=w(),V0=_(),RD=R(),aRr=W().isPrimitive,FD=T(),MD=L(),BD=A(),CD=I(),uRr=B(),U0=X().factory,sRr=b(),oRr=F(),jD=PD();function vRr(){var r,e,t,i;if(arguments.length===0)t=U0();else if(arguments.length===1&&FD(arguments[0]))if(e=arguments[0],BD(e,"prng")){if(!MD(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=U0(e);else{if(r=arguments[0],!aRr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!FD(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(BD(e,"prng")){if(!MD(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=U0(e)}else t=U0()}return r===void 0?i=p:i=c,we(i,"NAME","poisson"),e&&e.prng?(we(i,"seed",null),we(i,"seedLength",null),RD(i,"state",CD(null),uRr),we(i,"stateLength",null),we(i,"byteLength",null),we(i,"toJSON",CD(null)),we(i,"PRNG",t)):(V0(i,"seed",n),V0(i,"seedLength",a),RD(i,"state",v,f),V0(i,"stateLength",s),V0(i,"byteLength",o),we(i,"toJSON",l),we(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=oRr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return jD(t,r)}function p(q){return sRr(q)||q<=0?NaN:jD(t,q)}}GD.exports=vRr});var UD=u((z$r,VD)=>{"use strict";var fRr=zv(),lRr=fRr();VD.exports=lRr});var Yv=u((Y$r,WD)=>{"use strict";var cRr=w(),HD=UD(),pRr=zv();cRr(HD,"factory",pRr);WD.exports=HD});var DD=u((Z$r,kD)=>{"use strict";var gRr=W().isPrimitive,mRr=j().isPrimitive,qRr=ir();function yRr(r,e){return gRr(r)?!mRr(e)||qRr(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):e<=0||e>=1?new RangeError("invalid argument. Second argument must be on the interval `(0,1)`. Value: `"+e+"`."):null:new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.")}kD.exports=yRr});var $v=u((Q$r,$D)=>{"use strict";var it=w(),H0=_(),XD=R(),wi=A(),JD=T(),Zv=Jr(),zD=ur().isPrimitive,YD=L(),ZD=I(),hRr=B(),QD=b(),bi=Yv().factory,W0=oi().factory,Qv=Ve(),Kv=vr(),KD=jt(),dRr=F(),wRr=DD();function bRr(){var r,e,t,i,n,a,s,o,v,f;if(s=!0,arguments.length===0)i={copy:!1},t=bi(i);else if(arguments.length===1){if(i=arguments[0],!JD(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(wi(i,"copy")&&!zD(i.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+i.copy+"`.");if(wi(i,"prng")){if(!YD(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");t=bi({prng:i.prng})}else{if(wi(i,"state")&&!Zv(i.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+i.state+"`.");i=KD(i,1),i.copy===!1?s=!1:i.state&&(i.state=Qv(i.state.length,i.state,1,new Kv(i.state.length),1)),i.copy=!1,t=bi(i)}}else{if(f=arguments[0],v=arguments[1],o=wRr(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!JD(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(wi(i,"copy")&&!zD(i.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+i.copy+"`.");if(wi(i,"prng")){if(!YD(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");t=bi({prng:i.prng})}else{if(wi(i,"state")&&!Zv(i.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+i.state+"`.");i=KD(i,1),i.copy===!1?s=!1:i.state&&(i.state=Qv(i.state.length,i.state,1,new Kv(i.state.length),1)),i.copy=!1,t=bi(i)}}else i={copy:!1},t=bi(i)}return i&&i.prng?f===void 0?r=W0({prng:i.prng}):r=W0(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=W0({state:e,copy:!1}):r=W0(f,v/(1-v),{state:e,copy:!1})),f===void 0?n=E:n=h,a=t.PRNG,it(n,"NAME","negative-binomial"),i&&i.prng?(it(n,"seed",null),it(n,"seedLength",null),XD(n,"state",ZD(null),hRr),it(n,"stateLength",null),it(n,"byteLength",null),it(n,"toJSON",ZD(null))):(H0(n,"seed",l),H0(n,"seedLength",c),XD(n,"state",y,m),H0(n,"stateLength",p),H0(n,"byteLength",q),it(n,"toJSON",g)),it(n,"PRNG",a),n;function l(){return a.seed}function c(){return a.seedLength}function p(){return a.stateLength}function q(){return a.byteLength}function y(){return a.state}function m(N){if(!Zv(N))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+N+"`.");s&&(N=Qv(N.length,N,1,new Kv(N.length),1)),a.state=N}function g(){var N={};return N.type="PRNG",N.name=n.NAME,N.state=dRr(a.state),f===void 0?N.params=[]:N.params=[f,v],N}function h(){return t(r())}function E(N,G){return QD(N)||QD(G)||G<=0||G>=1?NaN:t(r(N,G/(1-G)))}}$D.exports=bRr});var rX=u((K$r,xD)=>{"use strict";var ERr=$v(),NRr=ERr();xD.exports=NRr});var iX=u(($$r,tX)=>{"use strict";var ARr=w(),eX=rX(),ORr=$v();ARr(eX,"factory",ORr);tX.exports=eX});var aX=u((x$r,nX)=>{"use strict";var SRr=j().isPrimitive,TRr=W().isPrimitive,LRr=ir();function IRr(r,e){return!SRr(r)||LRr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):TRr(e)?null:new TypeError("invalid argument. `sigma` must be a positive number. Value: `"+e+"`.")}nX.exports=IRr});var sX=u((rxr,uX)=>{"use strict";function _Rr(r,e,t){return e+t*r()}uX.exports=_Rr});var xv=u((exr,mX)=>{"use strict";var nt=w(),k0=_(),oX=R(),vX=T(),fX=L(),lX=A(),cX=I(),PRr=B(),Ei=De().factory,pX=b(),RRr=F(),FRr=aX(),gX=sX();function MRr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=Ei();else if(arguments.length===1){if(t=arguments[0],!vX(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(lX(t,"prng")){if(!fX(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=Ei({prng:t.prng})}else e=Ei(t)}else{if(s=arguments[0],r=arguments[1],a=FRr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!vX(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(lX(t,"prng")){if(!fX(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=Ei({prng:t.prng})}else e=Ei(t)}else e=Ei()}return s===void 0?n=m:n=y,i=e.PRNG,nt(n,"NAME","normal"),t&&t.prng?(nt(n,"seed",null),nt(n,"seedLength",null),oX(n,"state",cX(null),PRr),nt(n,"stateLength",null),nt(n,"byteLength",null),nt(n,"toJSON",cX(null))):(k0(n,"seed",o),k0(n,"seedLength",v),oX(n,"state",c,p),k0(n,"stateLength",f),k0(n,"byteLength",l),nt(n,"toJSON",q)),nt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=RRr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return gX(e,s,r)}function m(g,h){return pX(g)||pX(h)||h<=0?NaN:gX(e,g,h)}}mX.exports=MRr});var yX=u((txr,qX)=>{"use strict";var BRr=xv(),CRr=BRr();qX.exports=CRr});var wX=u((ixr,dX)=>{"use strict";var jRr=w(),hX=yX(),GRr=xv();jRr(hX,"factory",GRr);dX.exports=hX});var NX=u((nxr,EX)=>{"use strict";var bX=W().isPrimitive;function VRr(r,e){return bX(r)?bX(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}EX.exports=VRr});var OX=u((axr,AX)=>{"use strict";var URr=Z();function HRr(r,e,t){return t/URr(r(),1/e)}AX.exports=HRr});var r2=u((uxr,FX)=>{"use strict";var be=w(),D0=_(),SX=R(),TX=T(),LX=L(),IX=A(),_X=I(),WRr=B(),X0=X().factory,PX=b(),kRr=F(),DRr=NX(),RX=OX();function XRr(){var r,e,t,i,n,a;if(arguments.length===0)i=X0();else if(arguments.length===1){if(t=arguments[0],!TX(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(IX(t,"prng")){if(!LX(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");i=t.prng}else i=X0(t)}else{if(r=arguments[0],e=arguments[1],a=DRr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!TX(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(IX(t,"prng")){if(!LX(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");i=t.prng}else i=X0(t)}else i=X0()}return r===void 0?n=y:n=q,be(n,"NAME","pareto-type1"),t&&t.prng?(be(n,"seed",null),be(n,"seedLength",null),SX(n,"state",_X(null),WRr),be(n,"stateLength",null),be(n,"byteLength",null),be(n,"toJSON",_X(null)),be(n,"PRNG",i)):(D0(n,"seed",s),D0(n,"seedLength",o),SX(n,"state",l,c),D0(n,"stateLength",v),D0(n,"byteLength",f),be(n,"toJSON",p),be(n,"PRNG",i),i=i.normalized),n;function s(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function l(){return i.state}function c(m){i.state=m}function p(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=kRr(i.state),r===void 0?m.params=[]:m.params=[r,e],m}function q(){return RX(i,r,e)}function y(m,g){return PX(m)||PX(g)||m<=0||g<=0?NaN:RX(i,m,g)}}FX.exports=XRr});var BX=u((sxr,MX)=>{"use strict";var JRr=r2(),zRr=JRr();MX.exports=zRr});var GX=u((oxr,jX)=>{"use strict";var YRr=w(),CX=BX(),ZRr=r2();YRr(CX,"factory",ZRr);jX.exports=CX});var UX=u((vxr,VX)=>{"use strict";var QRr=V(),KRr=C();function $Rr(r,e){return e*QRr(-2*KRr(r()))}VX.exports=$Rr});var e2=u((fxr,zX)=>{"use strict";var Ee=w(),J0=_(),HX=R(),xRr=W().isPrimitive,WX=T(),kX=L(),DX=A(),XX=I(),rFr=B(),z0=X().factory,eFr=b(),tFr=F(),JX=UX();function iFr(){var r,e,t,i;if(arguments.length===0)t=z0();else if(arguments.length===1&&WX(arguments[0]))if(e=arguments[0],DX(e,"prng")){if(!kX(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=z0(e);else{if(r=arguments[0],!xRr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!WX(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(DX(e,"prng")){if(!kX(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=z0(e)}else t=z0()}return r===void 0?i=p:i=c,Ee(i,"NAME","rayleigh"),e&&e.prng?(Ee(i,"seed",null),Ee(i,"seedLength",null),HX(i,"state",XX(null),rFr),Ee(i,"stateLength",null),Ee(i,"byteLength",null),Ee(i,"toJSON",XX(null)),Ee(i,"PRNG",t)):(J0(i,"seed",n),J0(i,"seedLength",a),HX(i,"state",v,f),J0(i,"stateLength",s),J0(i,"byteLength",o),Ee(i,"toJSON",l),Ee(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=tFr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return JX(t,r)}function p(q){return eFr(q)||q<=0?NaN:JX(t,q)}}zX.exports=iFr});var ZX=u((lxr,YX)=>{"use strict";var nFr=e2(),aFr=nFr();YX.exports=aFr});var $X=u((cxr,KX)=>{"use strict";var uFr=w(),QX=ZX(),sFr=e2();uFr(QX,"factory",sFr);KX.exports=QX});var a2=u((pxr,sJ)=>{"use strict";var at=w(),Y0=_(),xX=R(),Ni=A(),rJ=W().isPrimitive,eJ=T(),t2=Jr(),tJ=ur().isPrimitive,oFr=b(),iJ=L(),nJ=I(),vFr=B(),Z0=fn().factory,Ai=De().factory,i2=Ve(),n2=vr(),aJ=jt(),fFr=F(),uJ=V();function lFr(){var r,e,t,i,n,a,s,o;if(s=!0,arguments.length===0)n={copy:!1},t=Ai(n);else if(arguments.length===1)if(eJ(arguments[0])){if(n=arguments[0],Ni(n,"copy")&&!tJ(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(Ni(n,"prng")){if(!iJ(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=Ai({prng:n.prng})}else{if(Ni(n,"state")&&!t2(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=aJ(n,1),n.copy===!1?s=!1:n.state&&(n.state=i2(n.state.length,n.state,1,new n2(n.state.length),1)),n.copy=!1,t=Ai(n)}}else{if(o=arguments[0],!rJ(o))throw new TypeError("invalid argument. First argument must be a positive number or an options object. Value: `"+o+"`.");n={copy:!1},t=Ai(n)}else{if(o=arguments[0],!rJ(o))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+o+"`.");if(n=arguments[1],!eJ(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(Ni(n,"copy")&&!tJ(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(Ni(n,"prng")){if(!iJ(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=Ai({prng:n.prng})}else{if(Ni(n,"state")&&!t2(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=aJ(n,1),n.copy===!1?s=!1:n.state&&(n.state=i2(n.state.length,n.state,1,new n2(n.state.length),1)),n.copy=!1,t=Ai(n)}}return n&&n.prng?o===void 0?r=Z0({prng:n.prng}):r=Z0(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=Z0({state:e,copy:!1}):r=Z0(o,{state:e,copy:!1})),o===void 0?a=g:a=m,i=t.PRNG,at(a,"NAME","t"),n&&n.prng?(at(a,"seed",null),at(a,"seedLength",null),xX(a,"state",nJ(null),vFr),at(a,"stateLength",null),at(a,"byteLength",null),at(a,"toJSON",nJ(null))):(Y0(a,"seed",v),Y0(a,"seedLength",f),xX(a,"state",p,q),Y0(a,"stateLength",l),Y0(a,"byteLength",c),at(a,"toJSON",y)),at(a,"PRNG",i),a;function v(){return i.seed}function f(){return i.seedLength}function l(){return i.stateLength}function c(){return i.byteLength}function p(){return i.state}function q(h){if(!t2(h))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+h+"`.");s&&(h=i2(h.length,h,1,new n2(h.length),1)),i.state=h}function y(){var h={};return h.type="PRNG",h.name=a.NAME,h.state=fFr(i.state),o===void 0?h.params=[]:h.params=[o],h}function m(){return t()/uJ(r()/o)}function g(h){return oFr(h)||h<=0?NaN:t()/uJ(r(h)/h)}}sJ.exports=lFr});var vJ=u((gxr,oJ)=>{"use strict";var cFr=a2(),pFr=cFr();oJ.exports=pFr});var cJ=u((mxr,lJ)=>{"use strict";var gFr=w(),fJ=vJ(),mFr=a2();gFr(fJ,"factory",mFr);lJ.exports=fJ});var gJ=u((qxr,pJ)=>{"use strict";var u2=j().isPrimitive,s2=ir();function qFr(r,e,t){return!u2(r)||s2(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!u2(e)||s2(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):!u2(t)||s2(t)?new TypeError("invalid argument. Third argument must be a number primitive and not `NaN`. Value: `"+t+"`."):r<=t&&t<=e?null:new RangeError("invalid arguments. The condition `a <= c <= b` must be satisfied. Value: `["+r+","+e+","+t+"]`.")}pJ.exports=qFr});var yJ=u((yxr,qJ)=>{"use strict";var mJ=V();function yFr(r,e,t,i){var n,a,s;return n=(i-e)/(t-e),s=r(),s<n?(a=(t-e)*(i-e),e+mJ(a*s)):(a=(t-e)*(t-i),t-mJ(a*(1-s)))}qJ.exports=yFr});var v2=u((hxr,AJ)=>{"use strict";var Ne=w(),Q0=_(),hJ=R(),dJ=T(),wJ=L(),bJ=A(),EJ=I(),hFr=B(),K0=X().factory,o2=b(),dFr=F(),wFr=gJ(),NJ=yJ();function bFr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=K0();else if(arguments.length===1){if(r=arguments[0],!dJ(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(bJ(r,"prng")){if(!wJ(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=K0(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=wFr(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!dJ(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(bJ(r,"prng")){if(!wJ(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=K0(r)}else e=K0()}return n===void 0?t=m:t=y,Ne(t,"NAME","triangular"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),hJ(t,"state",EJ(null),hFr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",EJ(null)),Ne(t,"PRNG",e)):(Q0(t,"seed",o),Q0(t,"seedLength",v),hJ(t,"state",c,p),Q0(t,"stateLength",f),Q0(t,"byteLength",l),Ne(t,"toJSON",q),Ne(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function l(){return e.byteLength}function c(){return e.state}function p(g){e.state=g}function q(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=dFr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function y(){return NJ(e,n,a,s)}function m(g,h,E){return o2(g)||o2(h)||o2(E)||!(g<=E&&E<=h)?NaN:NJ(e,g,h,E)}}AJ.exports=bFr});var SJ=u((dxr,OJ)=>{"use strict";var EFr=v2(),NFr=EFr();OJ.exports=NFr});var IJ=u((wxr,LJ)=>{"use strict";var AFr=w(),TJ=SJ(),OFr=v2();AFr(TJ,"factory",OFr);LJ.exports=TJ});var FJ=u((bxr,RJ)=>{"use strict";var _J=j().isPrimitive,PJ=ir();function SFr(r,e){return!_J(r)||PJ(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!_J(e)||PJ(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):r>=e?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+r+","+e+"]`."):null}RJ.exports=SFr});var BJ=u((Exr,MJ)=>{"use strict";function TFr(r,e,t){var i=r();return t*i+(1-i)*e}MJ.exports=TFr});var f2=u((Nxr,kJ)=>{"use strict";var Ae=w(),$0=_(),CJ=R(),jJ=T(),GJ=L(),VJ=A(),UJ=I(),LFr=B(),x0=X().factory,HJ=b(),IFr=F(),_Fr=FJ(),WJ=BJ();function PFr(){var r,e,t,i,n,a;if(arguments.length===0)e=x0();else if(arguments.length===1){if(r=arguments[0],!jJ(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(VJ(r,"prng")){if(!GJ(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=x0(r)}else{if(n=arguments[0],a=arguments[1],i=_Fr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!jJ(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(VJ(r,"prng")){if(!GJ(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=x0(r)}else e=x0()}return n===void 0?t=y:t=q,Ae(t,"NAME","uniform"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),CJ(t,"state",UJ(null),LFr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",UJ(null)),Ae(t,"PRNG",e)):($0(t,"seed",s),$0(t,"seedLength",o),CJ(t,"state",l,c),$0(t,"stateLength",v),$0(t,"byteLength",f),Ae(t,"toJSON",p),Ae(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=IFr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return WJ(e,n,a)}function y(m,g){return HJ(m)||HJ(g)||m>=g?NaN:WJ(e,m,g)}}kJ.exports=PFr});var XJ=u((Axr,DJ)=>{"use strict";var RFr=f2(),FFr=RFr();DJ.exports=FFr});var YJ=u((Oxr,zJ)=>{"use strict";var MFr=w(),JJ=XJ(),BFr=f2();MFr(JJ,"factory",BFr);zJ.exports=JJ});var KJ=u((Sxr,QJ)=>{"use strict";var ZJ=W().isPrimitive;function CFr(r,e){return ZJ(r)?ZJ(e)?null:new TypeError("invalid argument. Shape parameter must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. Scale parameter must be a positive number. Value: `"+r+"`.")}QJ.exports=CFr});var xJ=u((Txr,$J)=>{"use strict";var jFr=Z(),GFr=C();function VFr(r,e,t){return t*jFr(-GFr(1-r()),1/e)}$J.exports=VFr});var l2=u((Lxr,sz)=>{"use strict";var Oe=w(),ru=_(),rz=R(),ez=T(),tz=L(),iz=A(),nz=I(),UFr=B(),eu=X().factory,az=b(),HFr=F(),WFr=KJ(),uz=xJ();function kFr(){var r,e,t,i,n,a;if(arguments.length===0)t=eu();else if(arguments.length===1){if(e=arguments[0],!ez(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(iz(e,"prng")){if(!tz(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=eu(e)}else{if(a=arguments[0],r=arguments[1],n=WFr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!ez(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(iz(e,"prng")){if(!tz(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=eu(e)}else t=eu()}return r===void 0?i=y:i=q,Oe(i,"NAME","weibull"),e&&e.prng?(Oe(i,"seed",null),Oe(i,"seedLength",null),rz(i,"state",nz(null),UFr),Oe(i,"stateLength",null),Oe(i,"byteLength",null),Oe(i,"toJSON",nz(null)),Oe(i,"PRNG",t)):(ru(i,"seed",s),ru(i,"seedLength",o),rz(i,"state",l,c),ru(i,"stateLength",v),ru(i,"byteLength",f),Oe(i,"toJSON",p),Oe(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function l(){return t.state}function c(m){t.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=HFr(t.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return uz(t,a,r)}function y(m,g){return az(m)||az(g)||m<=0||g<=0?NaN:uz(t,m,g)}}sz.exports=kFr});var vz=u((Ixr,oz)=>{"use strict";var DFr=l2(),XFr=DFr();oz.exports=XFr});var cz=u((_xr,lz)=>{"use strict";var JFr=w(),fz=vz(),zFr=l2();JFr(fz,"factory",zFr);lz.exports=fz});var gz=u((Pxr,pz)=>{"use strict";var M={};M.arcsine=PM().factory;M.bernoulli=WM().factory;M.beta=WB().factory;M.betaprime=AC().factory;M.binomial=nj().factory;M.boxMueller=dj().factory;M.cauchy=Cj().factory;M.chi=nG().factory;M.chisquare=fn().factory;M.cosine=kG().factory;M.discreteUniform=vV().factory;M.erlang=SV().factory;M.exponential=UV().factory;M.f=nU().factory;M.frechet=bU().factory;M.gamma=oi().factory;M.geometric=CU().factory;M.gumbel=rH().factory;M.hypergeometric=LH().factory;M.improvedZiggurat=De().factory;M.invgamma=kH().factory;M.kumaraswamy=oW().factory;M.laplace=OW().factory;M.levy=fk().factory;M.logistic=Tk().factory;M.lognormal=Dk().factory;M.minstd=eD().factory;M.minstdShuffle=mD().factory;M.mt19937=X().factory;M.negativeBinomial=iX().factory;M.normal=wX().factory;M.pareto1=GX().factory;M.poisson=Yv().factory;M.rayleigh=$X().factory;M.t=cJ().factory;M.triangular=IJ().factory;M.uniform=YJ().factory;M.weibull=cz().factory;pz.exports=M});var qz=u((Rxr,mz)=>{"use strict";function YFr(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N;for(y=e[1],m=e[0],g=r[0],h=r[1],l=t[0],c=t[1],s=l[1],o=l[0]-y*s,v=c[1],f=c[0]-y*v,p=0,q=0,n=[],E=0;E<m;E++){for(a=[],N=0;N<y;N++)a.push(i(g[p],h[q])),p+=s,q+=v;n.push(a),p+=o,q+=f}return n}mz.exports=YFr});var hz=u((Fxr,yz)=>{"use strict";var ZFr=j().isPrimitive,QFr=P(),KFr=D(),$Fr=S();function xFr(r,e){return t;function t(i){var n;if(!ZFr(i)){if(e.nonnumeric===void 0)throw new TypeError($Fr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===QFr?e.pinf:n===KFr?e.ninf:n}}yz.exports=xFr});var Ez=u((Mxr,bz)=>{"use strict";var dz=j().isPrimitive,rMr=P(),eMr=D(),wz=S();function tMr(r,e){return t;function t(i,n){var a;if(!dz(i)){if(e.nonnumeric===void 0)throw new TypeError(wz("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!dz(n)){if(e.nonnumeric===void 0)throw new TypeError(wz("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===rMr?e.pinf:a===eMr?e.ninf:a}}bz.exports=tMr});var Az=u((Bxr,Nz)=>{"use strict";var c2=j().isPrimitive,iMr=P(),nMr=D(),p2=S();function aMr(r,e){return t;function t(i,n,a){var s;if(!c2(i)){if(e.nonnumeric===void 0)throw new TypeError(p2("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!c2(n)){if(e.nonnumeric===void 0)throw new TypeError(p2("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!c2(a)){if(e.nonnumeric===void 0)throw new TypeError(p2("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return s=r(i,n,a),s!==s?e.nan:s===iMr?e.pinf:s===nMr?e.ninf:s}}Nz.exports=aMr});var Sz=u((Cxr,Oz)=>{"use strict";var uMr=z().isPrimitive,sMr=S();function oMr(r){return e;function e(t){if(!uMr(t))throw new TypeError(sMr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}Oz.exports=oMr});var _z=u((jxr,Iz)=>{"use strict";var Tz=z().isPrimitive,Lz=S();function vMr(r){return e;function e(t,i){if(!Tz(t))throw new TypeError(Lz("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Tz(i))throw new TypeError(Lz("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}Iz.exports=vMr});var Rz=u((Gxr,Pz)=>{"use strict";var g2=z().isPrimitive,m2=S();function fMr(r){return e;function e(t,i){if(!g2(t))throw new TypeError(m2("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!g2(i))throw new TypeError(m2("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!g2(v3))throw new TypeError(m2("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(v3)));return r(t,i,v3)}}Pz.exports=fMr});var Mz=u((Vxr,Fz)=>{"use strict";function lMr(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N,G,O,J,ar,k;for(E=e[1],N=e[0],G=r[0],O=r[1],J=r[2],p=t[0],q=t[1],y=t[2],s=p[1],o=p[0]-E*s,v=q[1],f=q[0]-E*v,l=y[1],c=y[0]-E*l,m=0,g=0,h=0,n=[],ar=0;ar<N;ar++){for(a=[],k=0;k<E;k++)a.push(i(G[m],O[g],J[h])),m+=s,g+=v,h+=l;n.push(a),m+=o,g+=f,h+=c}return n}Fz.exports=lMr});var Cz=u((Uxr,Bz)=>{"use strict";function cMr(r,e){var t,i,n,a,s;for(t=r.length,i=r[0].length,a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)n[s]=e(n[s]);return r}Bz.exports=cMr});var Gz=u((Hxr,jz)=>{"use strict";var pMr=Cz();function gMr(r,e){return pMr(r,e)}jz.exports=gMr});var Uz=u((Wxr,Vz)=>{"use strict";var Dr={};Dr.binary2d=qz();Dr.d_d=hz();Dr.dd_d=Ez();Dr.ddd_d=Az();Dr.s_o=Sz();Dr.ss_o=_z();Dr.sss_o=Rz();Dr.ternary2d=Mz();Dr.unary2d=Gz();Vz.exports=Dr});var Wz=u((kxr,Hz)=>{"use strict";var Tt=P6(),Nr,U={};U.ANSCOMBES_QUARTET=y5();U.bartlettTest=Cw();U.broadcast=kw();U.cumax=$w().ndarray;U.filled=eb();U.filledBy=ob();U.flattenArray=oa();U.isArray=lr();U.isBoolean=ur().isPrimitive;U.isNumber=j().isPrimitive;U.isPositiveNumber=W().isPrimitive;U.isString=z().isPrimitive;U.iterator2array=Mb();U.iterSawtoothWave=NE();U.linspace=bO();U.max=_O().ndarray;U.mskmax=VO().ndarray;U.assert={};Nr=rT();Tt(Nr,U.assert);U.blas={};Nr=oT();Tt(Nr,U.blas);Nr=aP();Tt(Nr,U);U.dists={};Nr=_P();Tt(Nr,U.dists);Nr=JR();Tt(Nr,U);U.random={};Nr=gz();Tt(Nr,U.random);U.tools={};Nr=Uz();Tt(Nr,U.tools);Hz.exports=U});var qMr=u((Dxr,kz)=>{var mMr=Wz();kz.exports=mMr});return qMr();})();
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
