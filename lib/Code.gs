/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var dn=u((FMr,N2)=>{"use strict";function xz(r){return Object.keys(Object(r))}N2.exports=xz});var O2=u((MMr,A2)=>{"use strict";var rY=dn();function eY(){return(rY(arguments)||"").length!==2}function tY(){return eY(1,2)}A2.exports=tY});var T2=u((BMr,S2)=>{"use strict";var iY=typeof Object.keys<"u";S2.exports=iY});var L2=u((CMr,I2)=>{"use strict";function nY(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}I2.exports=nY});var P2=u((jMr,_2)=>{"use strict";var aY=L2();_2.exports=aY});var F2=u((GMr,R2)=>{"use strict";var uY=P2(),sY=uY();function oY(){return sY&&typeof Symbol.toStringTag=="symbol"}R2.exports=oY});var _t=u((VMr,M2)=>{"use strict";var vY=F2();M2.exports=vY});var su=u((UMr,B2)=>{"use strict";var fY=Object.prototype.toString;B2.exports=fY});var j2=u((HMr,C2)=>{"use strict";var lY=su();function cY(r){return lY.call(r)}C2.exports=cY});var V2=u((WMr,G2)=>{"use strict";var pY=Object.prototype.hasOwnProperty;function gY(r,e){return r==null?!1:pY.call(r,e)}G2.exports=gY});var A=u((kMr,U2)=>{"use strict";var mY=V2();U2.exports=mY});var W2=u((DMr,H2)=>{"use strict";var qY=typeof Symbol=="function"?Symbol.toStringTag:"";H2.exports=qY});var D2=u((XMr,k2)=>{"use strict";var yY=A(),Ii=W2(),ou=su();function hY(r){var e,t,i;if(r==null)return ou.call(r);t=r[Ii],e=yY(r,Ii);try{r[Ii]=void 0}catch{return ou.call(r)}return i=ou.call(r),e?r[Ii]=t:delete r[Ii],i}k2.exports=hY});var rr=u((JMr,X2)=>{"use strict";var dY=_t(),wY=j2(),bY=D2(),vu;dY()?vu=bY:vu=wY;X2.exports=vu});var fu=u((zMr,J2)=>{"use strict";var EY=rr();function NY(r){return EY(r)==="[object Arguments]"}J2.exports=NY});var $2=u((YMr,Y2)=>{"use strict";var AY=fu(),z2;function OY(){return AY(arguments)}z2=OY();Y2.exports=z2});var Q2=u(($Mr,Z2)=>{"use strict";var SY=typeof Object.defineProperty=="function"?Object.defineProperty:null;Z2.exports=SY});var x2=u((ZMr,K2)=>{"use strict";var TY=Q2();function IY(){try{return TY({},"x",{}),!0}catch{return!1}}K2.exports=IY});var ef=u((QMr,rf)=>{"use strict";var LY=Object.defineProperty;rf.exports=LY});var sf=u((KMr,uf)=>{"use strict";var Pt=Object.prototype,tf=Pt.toString,nf=Pt.__defineGetter__,af=Pt.__defineSetter__,_Y=Pt.__lookupGetter__,PY=Pt.__lookupSetter__;function RY(r,e,t){var i,n,a,s;if(typeof r!="object"||r===null||tf.call(r)==="[object Array]")throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if(typeof t!="object"||t===null||tf.call(t)==="[object Array]")throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if(n="value"in t,n&&(_Y.call(r,e)||PY.call(r,e)?(i=r.__proto__,r.__proto__=Pt,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,s="set"in t,n&&(a||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&nf&&nf.call(r,e,t.get),s&&af&&af.call(r,e,t.set),r}uf.exports=RY});var Se=u((xMr,of)=>{"use strict";var FY=x2(),MY=ef(),BY=sf(),lu;FY()?lu=MY:lu=BY;of.exports=lu});var ff=u((rBr,vf)=>{"use strict";var CY=Se();function jY(r,e,t){CY(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}vf.exports=jY});var w=u((eBr,lf)=>{"use strict";var GY=ff();lf.exports=GY});var cu=u((tBr,cf)=>{"use strict";function VY(r){return typeof r=="string"}cf.exports=VY});var gf=u((iBr,pf)=>{"use strict";var UY=String.prototype.valueOf;pf.exports=UY});var qf=u((nBr,mf)=>{"use strict";var HY=gf();function WY(r){try{return HY.call(r),!0}catch{return!1}}mf.exports=WY});var pu=u((aBr,yf)=>{"use strict";var kY=_t(),DY=rr(),XY=qf(),JY=kY();function zY(r){return typeof r=="object"?r instanceof String?!0:JY?XY(r):DY(r)==="[object String]":!1}yf.exports=zY});var df=u((uBr,hf)=>{"use strict";var YY=cu(),$Y=pu();function ZY(r){return YY(r)||$Y(r)}hf.exports=ZY});var z=u((sBr,bf)=>{"use strict";var wf=w(),gu=df(),QY=cu(),KY=pu();wf(gu,"isPrimitive",QY);wf(gu,"isObject",KY);bf.exports=gu});var mu=u((oBr,Ef)=>{"use strict";function xY(r){return typeof r=="number"}Ef.exports=xY});var Af=u((vBr,Nf)=>{"use strict";Nf.exports=Number});var wn=u((fBr,Of)=>{"use strict";var r$=Af();Of.exports=r$});var Tf=u((lBr,Sf)=>{"use strict";var e$=wn(),t$=e$.prototype.toString;Sf.exports=t$});var Lf=u((cBr,If)=>{"use strict";var i$=Tf();function n$(r){try{return i$.call(r),!0}catch{return!1}}If.exports=n$});var qu=u((pBr,_f)=>{"use strict";var a$=_t(),u$=rr(),s$=wn(),o$=Lf(),v$=a$();function f$(r){return typeof r=="object"?r instanceof s$?!0:v$?o$(r):u$(r)==="[object Number]":!1}_f.exports=f$});var Rf=u((gBr,Pf)=>{"use strict";var l$=mu(),c$=qu();function p$(r){return l$(r)||c$(r)}Pf.exports=p$});var j=u((mBr,Mf)=>{"use strict";var Ff=w(),yu=Rf(),g$=mu(),m$=qu();Ff(yu,"isPrimitive",g$);Ff(yu,"isObject",m$);Mf.exports=yu});var Cf=u((qBr,Bf)=>{"use strict";function q$(r){return r!==r}Bf.exports=q$});var b=u((yBr,jf)=>{"use strict";var y$=Cf();jf.exports=y$});var hu=u((hBr,Gf)=>{"use strict";var h$=j().isPrimitive,d$=b();function w$(r){return h$(r)&&d$(r)}Gf.exports=w$});var du=u((dBr,Vf)=>{"use strict";var b$=j().isObject,E$=b();function N$(r){return b$(r)&&E$(r.valueOf())}Vf.exports=N$});var Hf=u((wBr,Uf)=>{"use strict";var A$=hu(),O$=du();function S$(r){return A$(r)||O$(r)}Uf.exports=S$});var ir=u((bBr,kf)=>{"use strict";var Wf=w(),wu=Hf(),T$=hu(),I$=du();Wf(wu,"isPrimitive",T$);Wf(wu,"isObject",I$);kf.exports=wu});var P=u((EBr,Df)=>{"use strict";var L$=Number.POSITIVE_INFINITY;Df.exports=L$});var D=u((NBr,Xf)=>{"use strict";var _$=wn(),P$=_$.NEGATIVE_INFINITY;Xf.exports=P$});var zf=u((ABr,Jf)=>{"use strict";var R$=Math.floor;Jf.exports=R$});var Q=u((OBr,Yf)=>{"use strict";var F$=zf();Yf.exports=F$});var Zf=u((SBr,$f)=>{"use strict";var M$=Q();function B$(r){return M$(r)===r}$f.exports=B$});var Ar=u((TBr,Qf)=>{"use strict";var C$=Zf();Qf.exports=C$});var bu=u((IBr,Kf)=>{"use strict";var j$=P(),G$=D(),V$=Ar();function U$(r){return r<j$&&r>G$&&V$(r)}Kf.exports=U$});var Eu=u((LBr,xf)=>{"use strict";var H$=j().isPrimitive,W$=bu();function k$(r){return H$(r)&&W$(r)}xf.exports=k$});var Nu=u((_Br,rl)=>{"use strict";var D$=j().isObject,X$=bu();function J$(r){return D$(r)&&X$(r.valueOf())}rl.exports=J$});var tl=u((PBr,el)=>{"use strict";var z$=Eu(),Y$=Nu();function $$(r){return z$(r)||Y$(r)}el.exports=$$});var Fr=u((RBr,nl)=>{"use strict";var il=w(),Au=tl(),Z$=Eu(),Q$=Nu();il(Au,"isPrimitive",Z$);il(Au,"isObject",Q$);nl.exports=Au});var Ou=u((FBr,al)=>{"use strict";var K$=Object.prototype.propertyIsEnumerable;al.exports=K$});var ol=u((MBr,sl)=>{"use strict";var x$=Ou(),ul;function rZ(){return!x$.call("beep","0")}ul=rZ();sl.exports=ul});var fl=u((BBr,vl)=>{"use strict";var eZ=z(),tZ=ir().isPrimitive,iZ=Fr().isPrimitive,nZ=Ou(),aZ=ol();function uZ(r,e){var t;return r==null?!1:(t=nZ.call(r,e),!t&&aZ&&eZ(r)?(e=+e,!tZ(e)&&iZ(e)&&e>=0&&e<r.length):t)}vl.exports=uZ});var bn=u((CBr,ll)=>{"use strict";var sZ=fl();ll.exports=sZ});var pl=u((jBr,cl)=>{"use strict";var oZ=rr(),Su;function vZ(r){return oZ(r)==="[object Array]"}Array.isArray?Su=Array.isArray:Su=vZ;cl.exports=Su});var lr=u((GBr,gl)=>{"use strict";var fZ=pl();gl.exports=fZ});var Rt=u((VBr,ml)=>{"use strict";var lZ=4294967295;ml.exports=lZ});var yl=u((UBr,ql)=>{"use strict";var cZ=A(),pZ=bn(),gZ=lr(),mZ=Ar(),qZ=Rt();function yZ(r){return r!==null&&typeof r=="object"&&!gZ(r)&&typeof r.length=="number"&&mZ(r.length)&&r.length>=0&&r.length<=qZ&&cZ(r,"callee")&&!pZ(r,"callee")}ql.exports=yZ});var Iu=u((HBr,hl)=>{"use strict";var hZ=$2(),dZ=fu(),wZ=yl(),Tu;hZ?Tu=dZ:Tu=wZ;hl.exports=Tu});var bl=u((WBr,wl)=>{"use strict";var bZ=Iu(),dl=dn(),EZ=Array.prototype.slice;function NZ(r){return bZ(r)?dl(EZ.call(r)):dl(r)}wl.exports=NZ});var Nl=u((kBr,El)=>{"use strict";var AZ=lr();function OZ(r){if(typeof r!="function")throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return e;function e(t){var i,n;if(!AZ(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}El.exports=OZ});var Ol=u((DBr,Al)=>{"use strict";var SZ=Nl();Al.exports=SZ});var Tl=u((XBr,Sl)=>{"use strict";function TZ(r){return r!==null&&typeof r=="object"}Sl.exports=TZ});var _u=u((JBr,Il)=>{"use strict";var IZ=w(),LZ=Ol(),Lu=Tl(),_Z=LZ(Lu);IZ(Lu,"isObjectLikeArray",_Z);Il.exports=Lu});var _l=u((zBr,Ll)=>{"use strict";function PZ(){}Ll.exports=PZ});var B=u((YBr,Pl)=>{"use strict";var RZ=_l();Pl.exports=RZ});var Fl=u(($Br,Rl)=>{"use strict";var FZ=bn(),MZ=B(),BZ=FZ(MZ,"prototype");Rl.exports=BZ});var Bl=u((ZBr,Ml)=>{"use strict";var CZ=bn(),jZ={toString:null},GZ=!CZ(jZ,"toString");Ml.exports=GZ});var jl=u((QBr,Cl)=>{"use strict";var VZ=9007199254740991;Cl.exports=VZ});var Vl=u((KBr,Gl)=>{"use strict";var UZ=Ar(),HZ=jl();function WZ(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&UZ(r.length)&&r.length>=0&&r.length<=HZ}Gl.exports=WZ});var Mr=u((xBr,Ul)=>{"use strict";var kZ=Vl();Ul.exports=kZ});var kl=u((rCr,Wl)=>{"use strict";var Hl=ir(),DZ=Mr(),XZ=z().isPrimitive,JZ=Fr().isPrimitive;function zZ(r,e,t){var i,n;if(!DZ(r)&&!XZ(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(i=r.length,i===0)return-1;if(arguments.length===3){if(!JZ(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(Hl(e)){for(;n<i;n++)if(Hl(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}Wl.exports=zZ});var En=u((eCr,Dl)=>{"use strict";var YZ=kl();Dl.exports=YZ});var Jl=u((tCr,Xl)=>{"use strict";var $Z=/./;Xl.exports=$Z});var Pu=u((iCr,zl)=>{"use strict";function ZZ(r){return typeof r=="boolean"}zl.exports=ZZ});var $l=u((nCr,Yl)=>{"use strict";var QZ=Boolean.prototype.toString;Yl.exports=QZ});var Ql=u((aCr,Zl)=>{"use strict";var KZ=$l();function xZ(r){try{return KZ.call(r),!0}catch{return!1}}Zl.exports=xZ});var Ru=u((uCr,Kl)=>{"use strict";var rQ=_t(),eQ=rr(),tQ=Ql(),iQ=rQ();function nQ(r){return typeof r=="object"?r instanceof Boolean?!0:iQ?tQ(r):eQ(r)==="[object Boolean]":!1}Kl.exports=nQ});var r3=u((sCr,xl)=>{"use strict";var aQ=Pu(),uQ=Ru();function sQ(r){return aQ(r)||uQ(r)}xl.exports=sQ});var ur=u((oCr,t3)=>{"use strict";var e3=w(),Fu=r3(),oQ=Pu(),vQ=Ru();e3(Fu,"isPrimitive",oQ);e3(Fu,"isObject",vQ);t3.exports=Fu});var n3=u((vCr,i3)=>{"use strict";function fQ(){return new Function("return this;")()}i3.exports=fQ});var u3=u((fCr,a3)=>{"use strict";var lQ=typeof self=="object"?self:null;a3.exports=lQ});var o3=u((lCr,s3)=>{"use strict";var cQ=typeof window=="object"?window:null;s3.exports=cQ});var l3=u((cCr,f3)=>{"use strict";var pQ=typeof global=="object"?global:null;f3.exports=pQ});var q3=u((pCr,m3)=>{"use strict";var gQ=ur().isPrimitive,mQ=n3(),c3=u3(),p3=o3(),g3=l3();function qQ(r){if(arguments.length){if(!gQ(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return mQ()}if(c3)return c3;if(p3)return p3;if(g3)return g3;throw new Error("unexpected error. Unable to resolve global object.")}m3.exports=qQ});var h3=u((gCr,y3)=>{"use strict";var yQ=q3();y3.exports=yQ});var b3=u((mCr,w3)=>{"use strict";var hQ=h3(),d3=hQ(),dQ=d3.document&&d3.document.childNodes;w3.exports=dQ});var N3=u((qCr,E3)=>{"use strict";var wQ=Int8Array;E3.exports=wQ});var O3=u((yCr,A3)=>{"use strict";var bQ=Jl(),EQ=b3(),NQ=N3();function AQ(){return typeof bQ=="function"||typeof NQ=="object"||typeof EQ=="function"}A3.exports=AQ});var Mu=u((hCr,S3)=>{"use strict";function OQ(){return/^\s*function\s*([^(]*)/i}S3.exports=OQ});var I3=u((dCr,T3)=>{"use strict";var SQ=Mu(),TQ=SQ();T3.exports=TQ});var Bu=u((wCr,_3)=>{"use strict";var IQ=w(),L3=Mu(),LQ=I3();IQ(L3,"REGEXP",LQ);_3.exports=L3});var R3=u((bCr,P3)=>{"use strict";var _Q=_u();function PQ(r){return _Q(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}P3.exports=PQ});var st=u((ECr,F3)=>{"use strict";var RQ=R3();F3.exports=RQ});var B3=u((NCr,M3)=>{"use strict";var FQ=rr(),MQ=Bu().REGEXP,BQ=st();function CQ(r){var e,t,i;if(t=FQ(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=MQ.exec(i.toString()),e)return e[1]}return BQ(r)?"Buffer":t}M3.exports=CQ});var Te=u((ACr,C3)=>{"use strict";var jQ=B3();C3.exports=jQ});var G3=u((OCr,j3)=>{"use strict";var GQ=Te();function VQ(r){var e;return r===null?"null":(e=typeof r,e==="object"?GQ(r).toLowerCase():e)}j3.exports=VQ});var U3=u((SCr,V3)=>{"use strict";var UQ=Te();function HQ(r){return UQ(r).toLowerCase()}V3.exports=HQ});var Nn=u((TCr,H3)=>{"use strict";var WQ=O3(),kQ=G3(),DQ=U3(),XQ=WQ()?DQ:kQ;H3.exports=XQ});var Cu=u((ICr,W3)=>{"use strict";function JQ(r){return r.constructor&&r.constructor.prototype===r}W3.exports=JQ});var k3=u((LCr,zQ)=>{zQ.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var X3=u((_Cr,D3)=>{"use strict";var YQ=typeof window>"u"?void 0:window;D3.exports=YQ});var $3=u((PCr,Y3)=>{"use strict";var $Q=A(),ZQ=En(),J3=Nn(),QQ=Cu(),KQ=k3(),Ft=X3(),z3;function xQ(){var r;if(J3(Ft)==="undefined")return!1;for(r in Ft)try{ZQ(KQ,r)===-1&&$Q(Ft,r)&&Ft[r]!==null&&J3(Ft[r])==="object"&&QQ(Ft[r])}catch{return!0}return!1}z3=xQ();Y3.exports=z3});var Q3=u((RCr,Z3)=>{"use strict";var rK=typeof window<"u";Z3.exports=rK});var rc=u((FCr,x3)=>{"use strict";var eK=$3(),K3=Cu(),tK=Q3();function iK(r){if(tK===!1&&!eK)return K3(r);try{return K3(r)}catch{return!1}}x3.exports=iK});var ec=u((MCr,nK)=>{nK.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var nc=u((BCr,ic)=>{"use strict";var aK=_u(),ju=A(),uK=Iu(),sK=Fl(),oK=Bl(),vK=rc(),tc=ec();function fK(r){var e,t,i,n,a,s,o;if(n=[],uK(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!ju(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!aK(r))return n;t=sK&&i}for(a in r)!(t&&a==="prototype")&&ju(r,a)&&n.push(String(a));if(oK)for(e=vK(r),o=0;o<tc.length;o++)s=tc[o],!(e&&s==="constructor")&&ju(r,s)&&n.push(String(s));return n}ic.exports=fK});var uc=u((CCr,ac)=>{"use strict";var lK=O2(),cK=T2(),pK=dn(),gK=bl(),mK=nc(),An;cK?lK()?An=gK:An=pK:An=mK;ac.exports=An});var Li=u((jCr,sc)=>{"use strict";var qK=uc();sc.exports=qK});var Gu=u((GCr,oc)=>{"use strict";function yK(r){return typeof r=="number"}oc.exports=yK});var Vu=u((VCr,fc)=>{"use strict";function hK(r){return r[0]==="-"}function vc(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function dK(r,e,t){var i=!1,n=e-r.length;return n<0||(hK(r)&&(i=!0,r=r.substr(1)),r=t?r+vc(n):vc(n)+r,i&&(r="-"+r)),r}fc.exports=dK});var gc=u((UCr,pc)=>{"use strict";var wK=Gu(),lc=Vu(),bK=String.prototype.toLowerCase,cc=String.prototype.toUpperCase;function EK(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!wK(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=lc(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=lc(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===cc.call(r.specifier)?cc.call(t):bK.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}pc.exports=EK});var qc=u((HCr,mc)=>{"use strict";function NK(r){return typeof r=="string"}mc.exports=NK});var dc=u((WCr,hc)=>{"use strict";var AK=Gu(),OK=Math.abs,SK=String.prototype.toLowerCase,yc=String.prototype.toUpperCase,ot=String.prototype.replace,TK=/e\+(\d)$/,IK=/e-(\d)$/,LK=/^(\d+)$/,_K=/^(\d+)e/,PK=/\.0$/,RK=/\.0*e/,FK=/(\..*[^0])0*e/;function MK(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!AK(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":OK(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=ot.call(t,FK,"$1e"),t=ot.call(t,RK,"e"),t=ot.call(t,PK,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=ot.call(t,TK,"e+0$1"),t=ot.call(t,IK,"e-0$1"),r.alternate&&(t=ot.call(t,LK,"$1."),t=ot.call(t,_K,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===yc.call(r.specifier)?yc.call(t):SK.call(t),t}hc.exports=MK});var Ec=u((kCr,bc)=>{"use strict";function wc(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function BK(r,e,t){var i=e-r.length;return i<0||(r=t?r+wc(i):wc(i)+r),r}bc.exports=BK});var Ac=u((DCr,Nc)=>{"use strict";var CK=gc(),jK=qc(),GK=dc(),VK=Ec(),UK=Vu(),HK=String.fromCharCode,On=isNaN,WK=Array.isArray;function kK(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function DK(r){var e,t,i,n,a,s,o,v,f;if(!WK(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",o=1,v=0;v<r.length;v++)if(i=r[v],jK(i))s+=i;else{if(e=i.precision!==void 0,i=kK(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,On(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,On(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=CK(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!On(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=On(a)?String(i.arg):HK(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=GK(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=UK(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=VK(i.arg,i.width,i.padRight)),s+=i.arg||"",o+=1}return s}Nc.exports=DK});var Sc=u((XCr,Oc)=>{"use strict";var XK=Ac();Oc.exports=XK});var Ic=u((JCr,Tc)=>{"use strict";var Sn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function JK(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function zK(r){var e,t,i,n;for(t=[],n=0,i=Sn.exec(r);i;)e=r.slice(n,Sn.lastIndex-i[0].length),e.length&&t.push(e),t.push(JK(i)),n=Sn.lastIndex,i=Sn.exec(r);return e=r.slice(n),e.length&&t.push(e),t}Tc.exports=zK});var _c=u((zCr,Lc)=>{"use strict";var YK=Ic();Lc.exports=YK});var Rc=u((YCr,Pc)=>{"use strict";function $K(r){return typeof r=="string"}Pc.exports=$K});var Bc=u(($Cr,Mc)=>{"use strict";var ZK=Sc(),QK=_c(),KK=Rc();function Fc(r){var e,t,i;if(!KK(r))throw new TypeError(Fc("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=QK(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return ZK.apply(null,t)}Mc.exports=Fc});var S=u((ZCr,Cc)=>{"use strict";var xK=Bc();Cc.exports=xK});var Gc=u((QCr,jc)=>{"use strict";var rx=Li(),ex=A(),tx=S();function ix(r,e){var t,i,n;for(t=rx(r),n=0;n<t.length;n++){if(i=t[n],ex(e,i))throw new Error(tx("unexpected error. Property already exists on destination object. Property: %s.",i));e[i]=r[i]}return e}jc.exports=ix});var Uu=u((KCr,Vc)=>{"use strict";var nx=Fr().isPrimitive;function ax(r){return nx(r)&&r>=0}Vc.exports=ax});var Hu=u((xCr,Uc)=>{"use strict";var ux=Fr().isObject;function sx(r){return ux(r)&&r.valueOf()>=0}Uc.exports=sx});var Wc=u((rjr,Hc)=>{"use strict";var ox=Uu(),vx=Hu();function fx(r){return ox(r)||vx(r)}Hc.exports=fx});var Ie=u((ejr,Dc)=>{"use strict";var kc=w(),Wu=Wc(),lx=Uu(),cx=Hu();kc(Wu,"isPrimitive",lx);kc(Wu,"isObject",cx);Dc.exports=Wu});var Jc=u((tjr,Xc)=>{"use strict";var px=Nn();function gx(r){return px(r)==="function"}Xc.exports=gx});var I=u((ijr,zc)=>{"use strict";var mx=Jc();zc.exports=mx});var $c=u((njr,Yc)=>{"use strict";var qx=Object.getPrototypeOf;Yc.exports=qx});var Qc=u((ajr,Zc)=>{"use strict";function yx(r){return r.__proto__}Zc.exports=yx});var xc=u((ujr,Kc)=>{"use strict";var hx=rr(),dx=Qc();function wx(r){var e=dx(r);return e||e===null?e:hx(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}Kc.exports=wx});var e6=u((sjr,r6)=>{"use strict";var bx=I(),Ex=$c(),Nx=xc(),ku;bx(Object.getPrototypeOf)?ku=Ex:ku=Nx;r6.exports=ku});var i6=u((ojr,t6)=>{"use strict";var Ax=e6();function Ox(r){return r==null?null:(r=Object(r),Ax(r))}t6.exports=Ox});var vt=u((vjr,n6)=>{"use strict";var Sx=i6();n6.exports=Sx});var u6=u((fjr,a6)=>{"use strict";var Tx=vt(),Ix=rr();function Lx(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(Ix(r)==="[object Error]")return!0;r=Tx(r)}return!1}a6.exports=Lx});var o6=u((ljr,s6)=>{"use strict";var _x=u6();s6.exports=_x});var Du=u((cjr,v6)=>{"use strict";function Px(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}v6.exports=Px});var l6=u((pjr,f6)=>{"use strict";var Rx=Du(),Fx=Rx();f6.exports=Fx});var g6=u((gjr,p6)=>{"use strict";var Mx=w(),c6=Du(),Bx=l6();Mx(c6,"REGEXP",Bx);p6.exports=c6});var q6=u((mjr,m6)=>{"use strict";var Cx=z().isPrimitive,jx=g6(),Gx=S();function Vx(r){if(!Cx(r))throw new TypeError(Gx("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=jx().exec(r),r?new RegExp(r[1],r[2]):null}m6.exports=Vx});var h6=u((qjr,y6)=>{"use strict";var Ux=q6();y6.exports=Ux});var w6=u((yjr,d6)=>{"use strict";var Hx=typeof Object.getOwnPropertyNames<"u";d6.exports=Hx});var E6=u((hjr,b6)=>{"use strict";var Wx=Object.getOwnPropertyNames;function kx(r){return Wx(Object(r))}b6.exports=kx});var A6=u((djr,N6)=>{"use strict";var Dx=Li();function Xx(r){return Dx(Object(r))}N6.exports=Xx});var S6=u((wjr,O6)=>{"use strict";var Jx=w6(),zx=E6(),Yx=A6(),Xu;Jx?Xu=zx:Xu=Yx;O6.exports=Xu});var I6=u((bjr,T6)=>{"use strict";var $x=typeof Object.getOwnPropertyDescriptor<"u";T6.exports=$x});var _6=u((Ejr,L6)=>{"use strict";var Zx=Object.getOwnPropertyDescriptor;function Qx(r,e){var t;return r==null?null:(t=Zx(r,e),t===void 0?null:t)}L6.exports=Qx});var R6=u((Njr,P6)=>{"use strict";var Kx=A();function xx(r,e){return Kx(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}P6.exports=xx});var M6=u((Ajr,F6)=>{"use strict";var rrr=I6(),err=_6(),trr=R6(),Ju;rrr?Ju=err:Ju=trr;F6.exports=Ju});var C6=u((Ojr,B6)=>{"use strict";var irr=typeof Buffer=="function"?Buffer:null;B6.exports=irr});var G6=u((Sjr,j6)=>{"use strict";var nrr=st(),Tn=C6();function arr(){var r,e;if(typeof Tn!="function")return!1;try{typeof Tn.from=="function"?e=Tn.from([1,2,3,4]):e=new Tn([1,2,3,4]),r=nrr(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}j6.exports=arr});var U6=u((Tjr,V6)=>{"use strict";var urr=G6();V6.exports=urr});var k6=u(In=>{"use strict";In.byteLength=orr;In.toByteArray=frr;In.fromByteArray=prr;var Ur=[],Ir=[],srr=typeof Uint8Array<"u"?Uint8Array:Array,zu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(ft=0,H6=zu.length;ft<H6;++ft)Ur[ft]=zu[ft],Ir[zu.charCodeAt(ft)]=ft;var ft,H6;Ir["-".charCodeAt(0)]=62;Ir["_".charCodeAt(0)]=63;function W6(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function orr(r){var e=W6(r),t=e[0],i=e[1];return(t+i)*3/4-i}function vrr(r,e,t){return(e+t)*3/4-t}function frr(r){var e,t=W6(r),i=t[0],n=t[1],a=new srr(vrr(r,i,n)),s=0,o=n>0?i-4:i,v;for(v=0;v<o;v+=4)e=Ir[r.charCodeAt(v)]<<18|Ir[r.charCodeAt(v+1)]<<12|Ir[r.charCodeAt(v+2)]<<6|Ir[r.charCodeAt(v+3)],a[s++]=e>>16&255,a[s++]=e>>8&255,a[s++]=e&255;return n===2&&(e=Ir[r.charCodeAt(v)]<<2|Ir[r.charCodeAt(v+1)]>>4,a[s++]=e&255),n===1&&(e=Ir[r.charCodeAt(v)]<<10|Ir[r.charCodeAt(v+1)]<<4|Ir[r.charCodeAt(v+2)]>>2,a[s++]=e>>8&255,a[s++]=e&255),a}function lrr(r){return Ur[r>>18&63]+Ur[r>>12&63]+Ur[r>>6&63]+Ur[r&63]}function crr(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(lrr(i));return n.join("")}function prr(r){for(var e,t=r.length,i=t%3,n=[],a=16383,s=0,o=t-i;s<o;s+=a)n.push(crr(r,s,s+a>o?o:s+a));return i===1?(e=r[t-1],n.push(Ur[e>>2]+Ur[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(Ur[e>>10]+Ur[e>>4&63]+Ur[e<<2&63]+"=")),n.join("")}});var D6=u(Yu=>{Yu.read=function(r,e,t,i,n){var a,s,o=n*8-i-1,v=(1<<o)-1,f=v>>1,l=-7,c=t?n-1:0,p=t?-1:1,q=r[e+c];for(c+=p,a=q&(1<<-l)-1,q>>=-l,l+=o;l>0;a=a*256+r[e+c],c+=p,l-=8);for(s=a&(1<<-l)-1,a>>=-l,l+=i;l>0;s=s*256+r[e+c],c+=p,l-=8);if(a===0)a=1-f;else{if(a===v)return s?NaN:(q?-1:1)*(1/0);s=s+Math.pow(2,i),a=a-f}return(q?-1:1)*s*Math.pow(2,a-i)};Yu.write=function(r,e,t,i,n,a){var s,o,v,f=a*8-n-1,l=(1<<f)-1,c=l>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,q=i?0:a-1,y=i?1:-1,m=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-s))<1&&(s--,v*=2),s+c>=1?e+=p/v:e+=p*Math.pow(2,1-c),e*v>=2&&(s++,v/=2),s+c>=l?(o=0,s=l):s+c>=1?(o=(e*v-1)*Math.pow(2,n),s=s+c):(o=e*Math.pow(2,c-1)*Math.pow(2,n),s=0));n>=8;r[t+q]=o&255,q+=y,o/=256,n-=8);for(s=s<<n|o,f+=n;f>0;r[t+q]=s&255,q+=y,s/=256,f-=8);r[t+q-y]|=m*128}});var sp=u(jt=>{"use strict";var $u=k6(),Bt=D6(),X6=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;jt.Buffer=d;jt.SlowBuffer=drr;jt.INSPECT_MAX_BYTES=50;var Ln=2147483647;jt.kMaxLength=Ln;d.TYPED_ARRAY_SUPPORT=grr();!d.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function grr(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function Xr(r){if(r>Ln)throw new RangeError('The value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.setPrototypeOf(e,d.prototype),e}function d(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return xu(r)}return $6(r,e,t)}d.poolSize=8192;function $6(r,e,t){if(typeof r=="string")return qrr(r,e);if(ArrayBuffer.isView(r))return yrr(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Hr(r,ArrayBuffer)||r&&Hr(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Hr(r,SharedArrayBuffer)||r&&Hr(r.buffer,SharedArrayBuffer)))return Qu(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return d.from(i,e,t);let n=hrr(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return d.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}d.from=function(r,e,t){return $6(r,e,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function Z6(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function mrr(r,e,t){return Z6(r),r<=0?Xr(r):e!==void 0?typeof t=="string"?Xr(r).fill(e,t):Xr(r).fill(e):Xr(r)}d.alloc=function(r,e,t){return mrr(r,e,t)};function xu(r){return Z6(r),Xr(r<0?0:rs(r)|0)}d.allocUnsafe=function(r){return xu(r)};d.allocUnsafeSlow=function(r){return xu(r)};function qrr(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!d.isEncoding(e))throw new TypeError("Unknown encoding: "+e);let t=Q6(r,e)|0,i=Xr(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function Zu(r){let e=r.length<0?0:rs(r.length)|0,t=Xr(e);for(let i=0;i<e;i+=1)t[i]=r[i]&255;return t}function yrr(r){if(Hr(r,Uint8Array)){let e=new Uint8Array(r);return Qu(e.buffer,e.byteOffset,e.byteLength)}return Zu(r)}function Qu(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');let i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,d.prototype),i}function hrr(r){if(d.isBuffer(r)){let e=rs(r.length)|0,t=Xr(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||ts(r.length)?Xr(0):Zu(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Zu(r.data)}function rs(r){if(r>=Ln)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Ln.toString(16)+" bytes");return r|0}function drr(r){return+r!=r&&(r=0),d.alloc(+r)}d.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==d.prototype};d.compare=function(e,t){if(Hr(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),Hr(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let i=e.length,n=t.length;for(let a=0,s=Math.min(i,n);a<s;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};d.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return d.alloc(0);let i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;let n=d.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){let s=e[i];if(Hr(s,Uint8Array))a+s.length>n.length?(d.isBuffer(s)||(s=d.from(s)),s.copy(n,a)):Uint8Array.prototype.set.call(n,s,a);else if(d.isBuffer(s))s.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return n};function Q6(r,e){if(d.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Hr(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Ku(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return up(r).length;default:if(n)return i?-1:Ku(r).length;e=(""+e).toLowerCase(),n=!0}}d.byteLength=Q6;function wrr(r,e,t){let i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return _rr(this,e,t);case"utf8":case"utf-8":return x6(this,e,t);case"ascii":return Irr(this,e,t);case"latin1":case"binary":return Lrr(this,e,t);case"base64":return Srr(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Prr(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}d.prototype._isBuffer=!0;function lt(r,e,t){let i=r[e];r[e]=r[t],r[t]=i}d.prototype.swap16=function(){let e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)lt(this,t,t+1);return this};d.prototype.swap32=function(){let e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)lt(this,t,t+3),lt(this,t+1,t+2);return this};d.prototype.swap64=function(){let e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)lt(this,t,t+7),lt(this,t+1,t+6),lt(this,t+2,t+5),lt(this,t+3,t+4);return this};d.prototype.toString=function(){let e=this.length;return e===0?"":arguments.length===0?x6(this,0,e):wrr.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(e){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:d.compare(this,e)===0};d.prototype.inspect=function(){let e="",t=jt.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};X6&&(d.prototype[X6]=d.prototype.inspect);d.prototype.compare=function(e,t,i,n,a){if(Hr(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;let s=a-n,o=i-t,v=Math.min(s,o),f=this.slice(n,a),l=e.slice(t,i);for(let c=0;c<v;++c)if(f[c]!==l[c]){s=f[c],o=l[c];break}return s<o?-1:o<s?1:0};function K6(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,ts(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=d.from(e,i)),d.isBuffer(e))return e.length===0?-1:J6(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):J6(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function J6(r,e,t,i,n){let a=1,s=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,s/=2,o/=2,t/=2}function v(l,c){return a===1?l[c]:l.readUInt16BE(c*a)}let f;if(n){let l=-1;for(f=t;f<s;f++)if(v(r,f)===v(e,l===-1?0:f-l)){if(l===-1&&(l=f),f-l+1===o)return l*a}else l!==-1&&(f-=f-l),l=-1}else for(t+o>s&&(t=s-o),f=t;f>=0;f--){let l=!0;for(let c=0;c<o;c++)if(v(r,f+c)!==v(e,c)){l=!1;break}if(l)return f}return-1}d.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};d.prototype.indexOf=function(e,t,i){return K6(this,e,t,i,!0)};d.prototype.lastIndexOf=function(e,t,i){return K6(this,e,t,i,!1)};function brr(r,e,t,i){t=Number(t)||0;let n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;let a=e.length;i>a/2&&(i=a/2);let s;for(s=0;s<i;++s){let o=parseInt(e.substr(s*2,2),16);if(ts(o))return s;r[t+s]=o}return s}function Err(r,e,t,i){return _n(Ku(e,r.length-t),r,t,i)}function Nrr(r,e,t,i){return _n(Brr(e),r,t,i)}function Arr(r,e,t,i){return _n(up(e),r,t,i)}function Orr(r,e,t,i){return _n(Crr(e,r.length-t),r,t,i)}d.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let s=!1;for(;;)switch(n){case"hex":return brr(this,e,t,i);case"utf8":case"utf-8":return Err(this,e,t,i);case"ascii":case"latin1":case"binary":return Nrr(this,e,t,i);case"base64":return Arr(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Orr(this,e,t,i);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Srr(r,e,t){return e===0&&t===r.length?$u.fromByteArray(r):$u.fromByteArray(r.slice(e,t))}function x6(r,e,t){t=Math.min(r.length,t);let i=[],n=e;for(;n<t;){let a=r[n],s=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){let v,f,l,c;switch(o){case 1:a<128&&(s=a);break;case 2:v=r[n+1],(v&192)===128&&(c=(a&31)<<6|v&63,c>127&&(s=c));break;case 3:v=r[n+1],f=r[n+2],(v&192)===128&&(f&192)===128&&(c=(a&15)<<12|(v&63)<<6|f&63,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:v=r[n+1],f=r[n+2],l=r[n+3],(v&192)===128&&(f&192)===128&&(l&192)===128&&(c=(a&15)<<18|(v&63)<<12|(f&63)<<6|l&63,c>65535&&c<1114112&&(s=c))}}s===null?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|s&1023),i.push(s),n+=o}return Trr(i)}var z6=4096;function Trr(r){let e=r.length;if(e<=z6)return String.fromCharCode.apply(String,r);let t="",i=0;for(;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=z6));return t}function Irr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function Lrr(r,e,t){let i="";t=Math.min(r.length,t);for(let n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function _rr(r,e,t){let i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);let n="";for(let a=e;a<t;++a)n+=jrr[r[a]];return n}function Prr(r,e,t){let i=r.slice(e,t),n="";for(let a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}d.prototype.slice=function(e,t){let i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,d.prototype),n};function nr(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||nr(e,t,this.length);let n=this[e],a=1,s=0;for(;++s<t&&(a*=256);)n+=this[e+s]*a;return n};d.prototype.readUintBE=d.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||nr(e,t,this.length);let n=this[e+--t],a=1;for(;t>0&&(a*=256);)n+=this[e+--t]*a;return n};d.prototype.readUint8=d.prototype.readUInt8=function(e,t){return e=e>>>0,t||nr(e,1,this.length),this[e]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||nr(e,2,this.length),this[e]|this[e+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||nr(e,2,this.length),this[e]<<8|this[e+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||nr(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||nr(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};d.prototype.readBigUInt64LE=Le(function(e){e=e>>>0,Ct(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&_i(e,this.length-8);let n=t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,a=this[++e]+this[++e]*2**8+this[++e]*2**16+i*2**24;return BigInt(n)+(BigInt(a)<<BigInt(32))});d.prototype.readBigUInt64BE=Le(function(e){e=e>>>0,Ct(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&_i(e,this.length-8);let n=t*2**24+this[++e]*2**16+this[++e]*2**8+this[++e],a=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i;return(BigInt(n)<<BigInt(32))+BigInt(a)});d.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||nr(e,t,this.length);let n=this[e],a=1,s=0;for(;++s<t&&(a*=256);)n+=this[e+s]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};d.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||nr(e,t,this.length);let n=t,a=1,s=this[e+--n];for(;n>0&&(a*=256);)s+=this[e+--n]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*t)),s};d.prototype.readInt8=function(e,t){return e=e>>>0,t||nr(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};d.prototype.readInt16LE=function(e,t){e=e>>>0,t||nr(e,2,this.length);let i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};d.prototype.readInt16BE=function(e,t){e=e>>>0,t||nr(e,2,this.length);let i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};d.prototype.readInt32LE=function(e,t){return e=e>>>0,t||nr(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};d.prototype.readInt32BE=function(e,t){return e=e>>>0,t||nr(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};d.prototype.readBigInt64LE=Le(function(e){e=e>>>0,Ct(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&_i(e,this.length-8);let n=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(i<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)});d.prototype.readBigInt64BE=Le(function(e){e=e>>>0,Ct(e,"offset");let t=this[e],i=this[e+7];(t===void 0||i===void 0)&&_i(e,this.length-8);let n=(t<<24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+i)});d.prototype.readFloatLE=function(e,t){return e=e>>>0,t||nr(e,4,this.length),Bt.read(this,e,!0,23,4)};d.prototype.readFloatBE=function(e,t){return e=e>>>0,t||nr(e,4,this.length),Bt.read(this,e,!1,23,4)};d.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||nr(e,8,this.length),Bt.read(this,e,!0,52,8)};d.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||nr(e,8,this.length),Bt.read(this,e,!1,52,8)};function pr(r,e,t,i,n,a){if(!d.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;pr(this,e,t,i,o,0)}let a=1,s=0;for(this[t]=e&255;++s<i&&(a*=256);)this[t+s]=e/a&255;return t+i};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){let o=Math.pow(2,8*i)-1;pr(this,e,t,i,o,0)}let a=i-1,s=1;for(this[t+a]=e&255;--a>=0&&(s*=256);)this[t+a]=e/s&255;return t+i};d.prototype.writeUint8=d.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,1,255,0),this[t]=e&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function rp(r,e,t,i,n){ap(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a,a=a>>8,r[t++]=a;let s=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,r[t++]=s,t}function ep(r,e,t,i,n){ap(e,i,n,r,t,7);let a=Number(e&BigInt(4294967295));r[t+7]=a,a=a>>8,r[t+6]=a,a=a>>8,r[t+5]=a,a=a>>8,r[t+4]=a;let s=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+3]=s,s=s>>8,r[t+2]=s,s=s>>8,r[t+1]=s,s=s>>8,r[t]=s,t+8}d.prototype.writeBigUInt64LE=Le(function(e,t=0){return rp(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});d.prototype.writeBigUInt64BE=Le(function(e,t=0){return ep(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))});d.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);pr(this,e,t,i,v-1,-v)}let a=0,s=1,o=0;for(this[t]=e&255;++a<i&&(s*=256);)e<0&&o===0&&this[t+a-1]!==0&&(o=1),this[t+a]=(e/s>>0)-o&255;return t+i};d.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){let v=Math.pow(2,8*i-1);pr(this,e,t,i,v-1,-v)}let a=i-1,s=1,o=0;for(this[t+a]=e&255;--a>=0&&(s*=256);)e<0&&o===0&&this[t+a+1]!==0&&(o=1),this[t+a]=(e/s>>0)-o&255;return t+i};d.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};d.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};d.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};d.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};d.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};d.prototype.writeBigInt64LE=Le(function(e,t=0){return rp(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});d.prototype.writeBigInt64BE=Le(function(e,t=0){return ep(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function tp(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function ip(r,e,t,i,n){return e=+e,t=t>>>0,n||tp(r,e,t,4,34028234663852886e22,-34028234663852886e22),Bt.write(r,e,t,i,23,4),t+4}d.prototype.writeFloatLE=function(e,t,i){return ip(this,e,t,!0,i)};d.prototype.writeFloatBE=function(e,t,i){return ip(this,e,t,!1,i)};function np(r,e,t,i,n){return e=+e,t=t>>>0,n||tp(r,e,t,8,17976931348623157e292,-17976931348623157e292),Bt.write(r,e,t,i,52,8),t+8}d.prototype.writeDoubleLE=function(e,t,i){return np(this,e,t,!0,i)};d.prototype.writeDoubleBE=function(e,t,i){return np(this,e,t,!1,i)};d.prototype.copy=function(e,t,i,n){if(!d.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);let a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};d.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!d.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){let s=e.charCodeAt(0);(n==="utf8"&&s<128||n==="latin1")&&(e=s)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);let a;if(typeof e=="number")for(a=t;a<i;++a)this[a]=e;else{let s=d.isBuffer(e)?e:d.from(e,n),o=s.length;if(o===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<i-t;++a)this[a+t]=s[a%o]}return this};var Mt={};function es(r,e,t){Mt[r]=class extends t{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){return r}set code(n){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:n,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}}}es("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);es("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argument must be of type number. Received type ${typeof e}`},TypeError);es("ERR_OUT_OF_RANGE",function(r,e,t){let i=`The value of "${r}" is out of range.`,n=t;return Number.isInteger(t)&&Math.abs(t)>2**32?n=Y6(String(t)):typeof t=="bigint"&&(n=String(t),(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(n=Y6(n)),n+="n"),i+=` It must be ${e}. Received ${n}`,i},RangeError);function Y6(r){let e="",t=r.length,i=r[0]==="-"?1:0;for(;t>=i+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,t)}${e}`}function Rrr(r,e,t){Ct(e,"offset"),(r[e]===void 0||r[e+t]===void 0)&&_i(e,r.length-(t+1))}function ap(r,e,t,i,n,a){if(r>t||r<e){let s=typeof e=="bigint"?"n":"",o;throw a>3?e===0||e===BigInt(0)?o=`>= 0${s} and < 2${s} ** ${(a+1)*8}${s}`:o=`>= -(2${s} ** ${(a+1)*8-1}${s}) and < 2 ** ${(a+1)*8-1}${s}`:o=`>= ${e}${s} and <= ${t}${s}`,new Mt.ERR_OUT_OF_RANGE("value",o,r)}Rrr(i,n,a)}function Ct(r,e){if(typeof r!="number")throw new Mt.ERR_INVALID_ARG_TYPE(e,"number",r)}function _i(r,e,t){throw Math.floor(r)!==r?(Ct(r,t),new Mt.ERR_OUT_OF_RANGE(t||"offset","an integer",r)):e<0?new Mt.ERR_BUFFER_OUT_OF_BOUNDS:new Mt.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?1:0} and <= ${e}`,r)}var Frr=/[^+/0-9A-Za-z-_]/g;function Mrr(r){if(r=r.split("=")[0],r=r.trim().replace(Frr,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function Ku(r,e){e=e||1/0;let t,i=r.length,n=null,a=[];for(let s=0;s<i;++s){if(t=r.charCodeAt(s),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(s+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function Brr(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function Crr(r,e){let t,i,n,a=[];for(let s=0;s<r.length&&!((e-=2)<0);++s)t=r.charCodeAt(s),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function up(r){return $u.toByteArray(Mrr(r))}function _n(r,e,t,i){let n;for(n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function Hr(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function ts(r){return r!==r}var jrr=function(){let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let i=t*16;for(let n=0;n<16;++n)e[i+n]=r[t]+r[n]}return e}();function Le(r){return typeof BigInt>"u"?Grr:r}function Grr(){throw new Error("BigInt not supported")}});var vp=u((Rjr,op)=>{"use strict";var Vrr=sp().Buffer;op.exports=Vrr});var lp=u((Fjr,fp)=>{"use strict";function Urr(){throw new Error("not implemented")}fp.exports=Urr});var Pn=u((Mjr,cp)=>{"use strict";var Hrr=U6(),Wrr=vp(),krr=lp(),is;Hrr()?is=Wrr:is=krr;cp.exports=is});var gp=u((Bjr,pp)=>{"use strict";var Drr=I(),Xrr=Pn(),Jrr=Drr(Xrr.from);pp.exports=Jrr});var qp=u((Cjr,mp)=>{"use strict";var zrr=st(),Yrr=Pn();function $rr(r){if(!zrr(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return Yrr.from(r)}mp.exports=$rr});var hp=u((jjr,yp)=>{"use strict";var Zrr=st(),Qrr=Pn();function Krr(r){if(!Zrr(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new Qrr(r)}yp.exports=Krr});var wp=u((Gjr,dp)=>{"use strict";var xrr=gp(),rer=qp(),eer=hp(),ns;xrr?ns=rer:ns=eer;dp.exports=ns});var Ep=u((Vjr,bp)=>{"use strict";var ter=rr(),ier=typeof Int8Array=="function";function ner(r){return ier&&r instanceof Int8Array||ter(r)==="[object Int8Array]"}bp.exports=ner});var Ap=u((Ujr,Np)=>{"use strict";var aer=Ep();Np.exports=aer});var Sp=u((Hjr,Op)=>{"use strict";var uer=127;Op.exports=uer});var Ip=u((Wjr,Tp)=>{"use strict";var ser=-128;Tp.exports=ser});var _p=u((kjr,Lp)=>{"use strict";var oer=typeof Int8Array=="function"?Int8Array:null;Lp.exports=oer});var Fp=u((Djr,Rp)=>{"use strict";var ver=Ap(),fer=Sp(),ler=Ip(),Pp=_p();function cer(){var r,e;if(typeof Pp!="function")return!1;try{e=new Pp([1,3.14,-3.14,fer+1]),r=ver(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===ler}catch{r=!1}return r}Rp.exports=cer});var Bp=u((Xjr,Mp)=>{"use strict";var per=Fp();Mp.exports=per});var jp=u((Jjr,Cp)=>{"use strict";var ger=typeof Int8Array=="function"?Int8Array:void 0;Cp.exports=ger});var Vp=u((zjr,Gp)=>{"use strict";function mer(){throw new Error("not implemented")}Gp.exports=mer});var Pi=u((Yjr,Up)=>{"use strict";var qer=Bp(),yer=jp(),her=Vp(),as;qer()?as=yer:as=her;Up.exports=as});var Wp=u(($jr,Hp)=>{"use strict";var der=rr(),wer=typeof Uint8Array=="function";function ber(r){return wer&&r instanceof Uint8Array||der(r)==="[object Uint8Array]"}Hp.exports=ber});var Dp=u((Zjr,kp)=>{"use strict";var Eer=Wp();kp.exports=Eer});var Jp=u((Qjr,Xp)=>{"use strict";var Ner=255;Xp.exports=Ner});var Yp=u((Kjr,zp)=>{"use strict";var Aer=typeof Uint8Array=="function"?Uint8Array:null;zp.exports=Aer});var Qp=u((xjr,Zp)=>{"use strict";var Oer=Dp(),us=Jp(),$p=Yp();function Ser(){var r,e;if(typeof $p!="function")return!1;try{e=[1,3.14,-3.14,us+1,us+2],e=new $p(e),r=Oer(e)&&e[0]===1&&e[1]===3&&e[2]===us-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Zp.exports=Ser});var xp=u((rGr,Kp)=>{"use strict";var Ter=Qp();Kp.exports=Ter});var e4=u((eGr,r4)=>{"use strict";var Ier=typeof Uint8Array=="function"?Uint8Array:void 0;r4.exports=Ier});var i4=u((tGr,t4)=>{"use strict";function Ler(){throw new Error("not implemented")}t4.exports=Ler});var Gt=u((iGr,n4)=>{"use strict";var _er=xp(),Per=e4(),Rer=i4(),ss;_er()?ss=Per:ss=Rer;n4.exports=ss});var u4=u((nGr,a4)=>{"use strict";var Fer=rr(),Mer=typeof Uint8ClampedArray=="function";function Ber(r){return Mer&&r instanceof Uint8ClampedArray||Fer(r)==="[object Uint8ClampedArray]"}a4.exports=Ber});var o4=u((aGr,s4)=>{"use strict";var Cer=u4();s4.exports=Cer});var f4=u((uGr,v4)=>{"use strict";var jer=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;v4.exports=jer});var p4=u((sGr,c4)=>{"use strict";var Ger=o4(),l4=f4();function Ver(){var r,e;if(typeof l4!="function")return!1;try{e=new l4([-1,0,1,3.14,4.99,255,256]),r=Ger(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}c4.exports=Ver});var m4=u((oGr,g4)=>{"use strict";var Uer=p4();g4.exports=Uer});var y4=u((vGr,q4)=>{"use strict";var Her=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;q4.exports=Her});var d4=u((fGr,h4)=>{"use strict";function Wer(){throw new Error("not implemented")}h4.exports=Wer});var Ri=u((lGr,w4)=>{"use strict";var ker=m4(),Der=y4(),Xer=d4(),os;ker()?os=Der:os=Xer;w4.exports=os});var E4=u((cGr,b4)=>{"use strict";var Jer=rr(),zer=typeof Int16Array=="function";function Yer(r){return zer&&r instanceof Int16Array||Jer(r)==="[object Int16Array]"}b4.exports=Yer});var A4=u((pGr,N4)=>{"use strict";var $er=E4();N4.exports=$er});var S4=u((gGr,O4)=>{"use strict";var Zer=32767;O4.exports=Zer});var I4=u((mGr,T4)=>{"use strict";var Qer=-32768;T4.exports=Qer});var _4=u((qGr,L4)=>{"use strict";var Ker=typeof Int16Array=="function"?Int16Array:null;L4.exports=Ker});var F4=u((yGr,R4)=>{"use strict";var xer=A4(),rtr=S4(),etr=I4(),P4=_4();function ttr(){var r,e;if(typeof P4!="function")return!1;try{e=new P4([1,3.14,-3.14,rtr+1]),r=xer(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===etr}catch{r=!1}return r}R4.exports=ttr});var B4=u((hGr,M4)=>{"use strict";var itr=F4();M4.exports=itr});var j4=u((dGr,C4)=>{"use strict";var ntr=typeof Int16Array=="function"?Int16Array:void 0;C4.exports=ntr});var V4=u((wGr,G4)=>{"use strict";function atr(){throw new Error("not implemented")}G4.exports=atr});var Fi=u((bGr,U4)=>{"use strict";var utr=B4(),str=j4(),otr=V4(),vs;utr()?vs=str:vs=otr;U4.exports=vs});var W4=u((EGr,H4)=>{"use strict";var vtr=rr(),ftr=typeof Uint16Array=="function";function ltr(r){return ftr&&r instanceof Uint16Array||vtr(r)==="[object Uint16Array]"}H4.exports=ltr});var D4=u((NGr,k4)=>{"use strict";var ctr=W4();k4.exports=ctr});var J4=u((AGr,X4)=>{"use strict";var ptr=65535;X4.exports=ptr});var Y4=u((OGr,z4)=>{"use strict";var gtr=typeof Uint16Array=="function"?Uint16Array:null;z4.exports=gtr});var Q4=u((SGr,Z4)=>{"use strict";var mtr=D4(),fs=J4(),$4=Y4();function qtr(){var r,e;if(typeof $4!="function")return!1;try{e=[1,3.14,-3.14,fs+1,fs+2],e=new $4(e),r=mtr(e)&&e[0]===1&&e[1]===3&&e[2]===fs-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Z4.exports=qtr});var x4=u((TGr,K4)=>{"use strict";var ytr=Q4();K4.exports=ytr});var e8=u((IGr,r8)=>{"use strict";var htr=typeof Uint16Array=="function"?Uint16Array:void 0;r8.exports=htr});var i8=u((LGr,t8)=>{"use strict";function dtr(){throw new Error("not implemented")}t8.exports=dtr});var Vt=u((_Gr,n8)=>{"use strict";var wtr=x4(),btr=e8(),Etr=i8(),ls;wtr()?ls=btr:ls=Etr;n8.exports=ls});var u8=u((PGr,a8)=>{"use strict";var Ntr=rr(),Atr=typeof Int32Array=="function";function Otr(r){return Atr&&r instanceof Int32Array||Ntr(r)==="[object Int32Array]"}a8.exports=Otr});var Rn=u((RGr,s8)=>{"use strict";var Str=u8();s8.exports=Str});var Ut=u((FGr,o8)=>{"use strict";var Ttr=2147483647;o8.exports=Ttr});var f8=u((MGr,v8)=>{"use strict";var Itr=-2147483648;v8.exports=Itr});var c8=u((BGr,l8)=>{"use strict";var Ltr=typeof Int32Array=="function"?Int32Array:null;l8.exports=Ltr});var m8=u((CGr,g8)=>{"use strict";var _tr=Rn(),Ptr=Ut(),Rtr=f8(),p8=c8();function Ftr(){var r,e;if(typeof p8!="function")return!1;try{e=new p8([1,3.14,-3.14,Ptr+1]),r=_tr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Rtr}catch{r=!1}return r}g8.exports=Ftr});var y8=u((jGr,q8)=>{"use strict";var Mtr=m8();q8.exports=Mtr});var d8=u((GGr,h8)=>{"use strict";var Btr=typeof Int32Array=="function"?Int32Array:void 0;h8.exports=Btr});var b8=u((VGr,w8)=>{"use strict";function Ctr(){throw new Error("not implemented")}w8.exports=Ctr});var ct=u((UGr,E8)=>{"use strict";var jtr=y8(),Gtr=d8(),Vtr=b8(),cs;jtr()?cs=Gtr:cs=Vtr;E8.exports=cs});var A8=u((HGr,N8)=>{"use strict";var Utr=rr(),Htr=typeof Uint32Array=="function";function Wtr(r){return Htr&&r instanceof Uint32Array||Utr(r)==="[object Uint32Array]"}N8.exports=Wtr});var Jr=u((WGr,O8)=>{"use strict";var ktr=A8();O8.exports=ktr});var T8=u((kGr,S8)=>{"use strict";var Dtr=typeof Uint32Array=="function"?Uint32Array:null;S8.exports=Dtr});var _8=u((DGr,L8)=>{"use strict";var Xtr=Jr(),ps=Rt(),I8=T8();function Jtr(){var r,e;if(typeof I8!="function")return!1;try{e=[1,3.14,-3.14,ps+1,ps+2],e=new I8(e),r=Xtr(e)&&e[0]===1&&e[1]===3&&e[2]===ps-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}L8.exports=Jtr});var R8=u((XGr,P8)=>{"use strict";var ztr=_8();P8.exports=ztr});var M8=u((JGr,F8)=>{"use strict";var Ytr=typeof Uint32Array=="function"?Uint32Array:void 0;F8.exports=Ytr});var C8=u((zGr,B8)=>{"use strict";function $tr(){throw new Error("not implemented")}B8.exports=$tr});var vr=u((YGr,j8)=>{"use strict";var Ztr=R8(),Qtr=M8(),Ktr=C8(),gs;Ztr()?gs=Qtr:gs=Ktr;j8.exports=gs});var V8=u(($Gr,G8)=>{"use strict";var xtr=rr(),rir=typeof Float32Array=="function";function eir(r){return rir&&r instanceof Float32Array||xtr(r)==="[object Float32Array]"}G8.exports=eir});var H8=u((ZGr,U8)=>{"use strict";var tir=V8();U8.exports=tir});var k8=u((QGr,W8)=>{"use strict";var iir=typeof Float32Array=="function"?Float32Array:null;W8.exports=iir});var J8=u((KGr,X8)=>{"use strict";var nir=H8(),air=P(),D8=k8();function uir(){var r,e;if(typeof D8!="function")return!1;try{e=new D8([1,3.14,-3.14,5e40]),r=nir(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===air}catch{r=!1}return r}X8.exports=uir});var Y8=u((xGr,z8)=>{"use strict";var sir=J8();z8.exports=sir});var Z8=u((rVr,$8)=>{"use strict";var oir=typeof Float32Array=="function"?Float32Array:void 0;$8.exports=oir});var K8=u((eVr,Q8)=>{"use strict";function vir(){throw new Error("not implemented")}Q8.exports=vir});var zr=u((tVr,x8)=>{"use strict";var fir=Y8(),lir=Z8(),cir=K8(),ms;fir()?ms=lir:ms=cir;x8.exports=ms});var e5=u((iVr,r5)=>{"use strict";var pir=rr(),gir=typeof Float64Array=="function";function mir(r){return gir&&r instanceof Float64Array||pir(r)==="[object Float64Array]"}r5.exports=mir});var i5=u((nVr,t5)=>{"use strict";var qir=e5();t5.exports=qir});var a5=u((aVr,n5)=>{"use strict";var yir=typeof Float64Array=="function"?Float64Array:null;n5.exports=yir});var o5=u((uVr,s5)=>{"use strict";var hir=i5(),u5=a5();function dir(){var r,e;if(typeof u5!="function")return!1;try{e=new u5([1,3.14,-3.14,NaN]),r=hir(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}s5.exports=dir});var qs=u((sVr,v5)=>{"use strict";var wir=o5();v5.exports=wir});var l5=u((oVr,f5)=>{"use strict";var bir=typeof Float64Array=="function"?Float64Array:void 0;f5.exports=bir});var p5=u((vVr,c5)=>{"use strict";function Eir(){throw new Error("not implemented")}c5.exports=Eir});var cr=u((fVr,g5)=>{"use strict";var Nir=qs(),Air=l5(),Oir=p5(),ys;Nir()?ys=Air:ys=Oir;g5.exports=ys});var y5=u((lVr,q5)=>{"use strict";var Sir=Pi(),Tir=Gt(),Iir=Ri(),Lir=Fi(),_ir=Vt(),Pir=ct(),Rir=vr(),Fir=zr(),Mir=cr(),m5;function Bir(r){return new Sir(r)}function Cir(r){return new Tir(r)}function jir(r){return new Iir(r)}function Gir(r){return new Lir(r)}function Vir(r){return new _ir(r)}function Uir(r){return new Pir(r)}function Hir(r){return new Rir(r)}function Wir(r){return new Fir(r)}function kir(r){return new Mir(r)}function Dir(){var r={int8array:Bir,uint8array:Cir,uint8clampedarray:jir,int16array:Gir,uint16array:Vir,int32array:Uir,uint32array:Hir,float32array:Wir,float64array:kir};return r}m5=Dir();q5.exports=m5});var E5=u((cVr,b5)=>{"use strict";var Fn=A(),hs=lr(),h5=st(),Xir=o6(),d5=Nn(),Jir=h6(),zir=En(),w5=Li(),Yir=S6(),Mi=M6(),$ir=vt(),Bi=Se(),Zir=wp(),Qir=y5();function Kir(r){var e,t,i,n,a,s,o,v;for(e=[],n=[],o=Object.create($ir(r)),e.push(r),n.push(o),t=Yir(r),v=0;v<t.length;v++)i=t[v],a=Mi(r,i),Fn(a,"value")&&(s=hs(r[i])?[]:{},a.value=pt(r[i],s,e,n,-1)),Bi(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function xir(r){var e=[],t=[],i,n,a,s,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=w5(r),v=0;v<i.length;v++)s=i[v],n=Mi(r,s),Fn(n,"value")&&(a=hs(r[s])?[]:{},n.value=pt(r[s],a,e,t,-1)),Bi(o,s,n);return o}function pt(r,e,t,i,n){var a,s,o,v,f,l,c,p,q,y;if(n-=1,typeof r!="object"||r===null)return r;if(h5(r))return Zir(r);if(Xir(r))return xir(r);if(o=d5(r),o==="date")return new Date(+r);if(o==="regexp")return Jir(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=Qir[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?Kir(r):{};if(s=w5(r),n>0)for(a=o,y=0;y<s.length;y++){if(l=s[y],p=r[l],o=d5(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||h5(p)){a==="object"?(v=Mi(r,l),Fn(v,"value")&&(v.value=pt(p)),Bi(e,l,v)):e[l]=pt(p);continue}if(q=zir(t,p),q!==-1){e[l]=i[q];continue}c=hs(p)?new Array(p.length):{},t.push(p),i.push(c),a==="array"?e[l]=pt(p,c,t,i,n):(v=Mi(r,l),Fn(v,"value")&&(v.value=pt(p,c,t,i,n)),Bi(e,l,v))}else if(o==="array")for(y=0;y<s.length;y++)l=s[y],e[l]=r[l];else for(y=0;y<s.length;y++)l=s[y],v=Mi(r,l),Bi(e,l,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}b5.exports=pt});var A5=u((pVr,N5)=>{"use strict";var rnr=lr(),enr=Ie().isPrimitive,tnr=P(),inr=E5();function nnr(r,e){var t;if(arguments.length>1){if(!enr(e))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+e+"`.");if(e===0)return r}else e=tnr;return t=rnr(r)?new Array(r.length):{},inr(r,t,[r],[t],e)}N5.exports=nnr});var Ht=u((gVr,O5)=>{"use strict";var anr=A5();O5.exports=anr});var S5=u((mVr,unr)=>{unr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var I5=u((qVr,T5)=>{"use strict";var snr=Ht(),onr=S5();function vnr(){return snr(onr)}T5.exports=vnr});var _5=u((yVr,L5)=>{"use strict";var fnr=lr();function lnr(r){return typeof r=="object"&&r!==null&&!fnr(r)}L5.exports=lnr});var Mn=u((hVr,P5)=>{"use strict";var cnr=_5();P5.exports=cnr});var M5=u((dVr,F5)=>{"use strict";var pnr=Mn(),R5=I(),gnr=vt(),Bn=A(),mnr=rr(),qnr=Object.prototype;function ynr(r){var e;for(e in r)if(!Bn(r,e))return!1;return!0}function hnr(r){var e;return pnr(r)?(e=gnr(r),e?!Bn(r,"constructor")&&Bn(e,"constructor")&&R5(e.constructor)&&mnr(e.constructor)==="[object Function]"&&Bn(e,"isPrototypeOf")&&R5(e.isPrototypeOf)&&(e===qnr||ynr(r)):!0):!1}F5.exports=hnr});var T=u((wVr,B5)=>{"use strict";var dnr=M5();B5.exports=dnr});var j5=u((bVr,C5)=>{"use strict";var wnr=Se();function bnr(r,e,t){wnr(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}C5.exports=bnr});var V5=u((EVr,G5)=>{"use strict";var Enr=j5();G5.exports=Enr});var H5=u((NVr,U5)=>{"use strict";var Nnr=P(),Anr=D();function Onr(r){return r===Nnr||r===Anr}U5.exports=Onr});var Lr=u((AVr,W5)=>{"use strict";var Snr=H5();W5.exports=Snr});var D5=u((OVr,k5)=>{"use strict";function Tnr(r){return Math.abs(r)}k5.exports=Tnr});var Z=u((SVr,X5)=>{"use strict";var Inr=D5();X5.exports=Inr});var z5=u((TVr,J5)=>{"use strict";var Lnr=Gt(),_nr=Vt(),Pnr={uint16:_nr,uint8:Lnr};J5.exports=Pnr});var Q5=u((IVr,Z5)=>{"use strict";var Y5=z5(),$5;function Rnr(){var r,e;return r=new Y5.uint16(1),r[0]=4660,e=new Y5.uint8(r.buffer),e[0]===52}$5=Rnr();Z5.exports=$5});var gt=u((LVr,K5)=>{"use strict";var Fnr=Q5();K5.exports=Fnr});var r9=u((_Vr,x5)=>{"use strict";var Mnr=gt(),ds;Mnr===!0?ds=1:ds=0;x5.exports=ds});var i9=u((PVr,t9)=>{"use strict";var Bnr=vr(),Cnr=cr(),jnr=r9(),e9=new Cnr(1),Gnr=new Bnr(e9.buffer);function Vnr(r){return e9[0]=r,Gnr[jnr]}t9.exports=Vnr});var er=u((RVr,n9)=>{"use strict";var Unr=i9();n9.exports=Unr});var u9=u((FVr,a9)=>{"use strict";var Hnr=gt(),ws;Hnr===!0?ws=1:ws=0;a9.exports=ws});var o9=u((MVr,s9)=>{"use strict";var Wnr=vr(),knr=cr(),Dnr=u9(),bs=new knr(1),Xnr=new Wnr(bs.buffer);function Jnr(r,e){return bs[0]=r,Xnr[Dnr]=e>>>0,bs[0]}s9.exports=Jnr});var Yr=u((BVr,v9)=>{"use strict";var znr=o9();v9.exports=znr});var Wr=u((CVr,f9)=>{"use strict";var Ynr=1023;f9.exports=Ynr});var c9=u((jVr,l9)=>{"use strict";function $nr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}l9.exports=$nr});var g9=u((GVr,p9)=>{"use strict";function Znr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}p9.exports=Znr});var h9=u((VVr,y9)=>{"use strict";var m9=er(),Qnr=Yr(),Knr=b(),xnr=Wr(),rar=D(),ear=c9(),tar=g9(),Cn=.6931471803691238,jn=19082149292705877e-26,iar=0x40000000000000,nar=.3333333333333333,q9=1048575,aar=2146435072,uar=1048576,sar=1072693248;function oar(r){var e,t,i,n,a,s,o,v,f,l,c,p;return r===0?rar:Knr(r)||r<0?NaN:(t=m9(r),a=0,t<uar&&(a-=54,r*=iar,t=m9(r)),t>=aar?r+r:(a+=(t>>20)-xnr|0,t&=q9,v=t+614244&1048576|0,r=Qnr(r,t|v^sar),a+=v>>20|0,o=r-1,(q9&2+t)<3?o===0?a===0?0:a*Cn+a*jn:(s=o*o*(.5-nar*o),a===0?o-s:a*Cn-(s-a*jn-o)):(l=o/(2+o),p=l*l,v=t-398458|0,c=p*p,f=440401-t|0,n=c*ear(c),i=p*tar(c),v|=f,s=i+n,v>0?(e=.5*o*o,a===0?o-(e-l*(e+s)):a*Cn-(e-(l*(e+s)+a*jn)-o)):a===0?o-l*(o-s):a*Cn-(l*(o-s)-a*jn-o))))}y9.exports=oar});var C=u((UVr,d9)=>{"use strict";var far=h9();d9.exports=far});var b9=u((HVr,w9)=>{"use strict";var lar=Math.ceil;w9.exports=lar});var Ci=u((WVr,E9)=>{"use strict";var car=b9();E9.exports=car});var A9=u((kVr,N9)=>{"use strict";var par=Q(),gar=Ci();function mar(r){return r<0?gar(r):par(r)}N9.exports=mar});var Gn=u((DVr,O9)=>{"use strict";var qar=A9();O9.exports=qar});var T9=u((XVr,S9)=>{"use strict";function yar(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}S9.exports=yar});var L9=u((JVr,I9)=>{"use strict";function har(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}I9.exports=har});var P9=u((zVr,_9)=>{"use strict";var dar=T9(),war=L9();function bar(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*dar(a),i+=n*n*war(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}_9.exports=bar});var Es=u((YVr,R9)=>{"use strict";var Ear=P9();R9.exports=Ear});var B9=u(($Vr,M9)=>{"use strict";var F9=-.16666666666666632,Nar=.00833333333332249,Aar=-.0001984126982985795,Oar=27557313707070068e-22,Sar=-25050760253406863e-24,Tar=158969099521155e-24;function Iar(r,e){var t,i,n,a;return a=r*r,n=a*a,t=Nar+a*(Aar+a*Oar)+a*n*(Sar+a*Tar),i=a*r,e===0?r+i*(F9+a*t):r-(a*(.5*e-i*t)-e-i*F9)}M9.exports=Iar});var Ns=u((ZVr,C9)=>{"use strict";var Lar=B9();C9.exports=Lar});var G9=u((QVr,j9)=>{"use strict";var _ar=gt(),As;_ar===!0?As=0:As=1;j9.exports=As});var H9=u((KVr,U9)=>{"use strict";var Par=vr(),Rar=cr(),Far=G9(),V9=new Rar(1),Mar=new Par(V9.buffer);function Bar(r){return V9[0]=r,Mar[Far]}U9.exports=Bar});var k9=u((xVr,W9)=>{"use strict";var Car=H9();W9.exports=Car});var J9=u((rUr,X9)=>{"use strict";var jar=gt(),D9,Os,Ss;jar===!0?(Os=1,Ss=0):(Os=0,Ss=1);D9={HIGH:Os,LOW:Ss};X9.exports=D9});var Q9=u((eUr,Z9)=>{"use strict";var Gar=vr(),Var=cr(),Y9=J9(),$9=new Var(1),z9=new Gar($9.buffer),Uar=Y9.HIGH,Har=Y9.LOW;function War(r,e){return z9[Uar]=r,z9[Har]=e,$9[0]}Z9.exports=War});var ji=u((tUr,K9)=>{"use strict";var kar=Q9();K9.exports=kar});var Ts=u((iUr,x9)=>{"use strict";var Dar=1023;x9.exports=Dar});var e7=u((nUr,r7)=>{"use strict";var Xar=-1023;r7.exports=Xar});var Is=u((aUr,t7)=>{"use strict";var Jar=-1074;t7.exports=Jar});var a7=u((uUr,n7)=>{"use strict";var zar=gt(),i7,Ls,_s;zar===!0?(Ls=1,_s=0):(Ls=0,_s=1);i7={HIGH:Ls,LOW:_s};n7.exports=i7});var Ps=u((sUr,v7)=>{"use strict";var Yar=vr(),$ar=cr(),s7=a7(),o7=new $ar(1),u7=new Yar(o7.buffer),Zar=s7.HIGH,Qar=s7.LOW;function Kar(r,e,t,i){return o7[0]=r,e[i]=u7[Zar],e[i+t]=u7[Qar],e}v7.exports=Kar});var l7=u((oUr,f7)=>{"use strict";var xar=Ps();function r0r(r){return xar(r,[0>>>0,0>>>0],1,0)}f7.exports=r0r});var Wt=u((vUr,p7)=>{"use strict";var e0r=w(),c7=l7(),t0r=Ps();e0r(c7,"assign",t0r);p7.exports=c7});var m7=u((fUr,g7)=>{"use strict";var i0r=Wt(),n0r=er(),a0r=ji(),u0r=2147483648>>>0,s0r=2147483647,Rs=[0,0];function o0r(r,e){var t,i;return i0r(Rs,r),t=Rs[0],t&=s0r,i=n0r(e),i&=u0r,t|=i,a0r(t,Rs[1])}g7.exports=o0r});var Vn=u((lUr,q7)=>{"use strict";var v0r=m7();q7.exports=v0r});var Fs=u((cUr,y7)=>{"use strict";var f0r=22250738585072014e-324;y7.exports=f0r});var Ms=u((pUr,h7)=>{"use strict";var l0r=Fs(),c0r=Lr(),p0r=b(),g0r=Z(),m0r=4503599627370496;function q0r(r,e,t,i){return p0r(r)||c0r(r)?(e[i]=r,e[i+t]=0,e):r!==0&&g0r(r)<l0r?(e[i]=r*m0r,e[i+t]=-52,e):(e[i]=r,e[i+t]=0,e)}h7.exports=q0r});var w7=u((gUr,d7)=>{"use strict";var y0r=Ms();function h0r(r){return y0r(r,[0,0],1,0)}d7.exports=h0r});var N7=u((mUr,E7)=>{"use strict";var d0r=w(),b7=w7(),w0r=Ms();d0r(b7,"assign",w0r);E7.exports=b7});var O7=u((qUr,A7)=>{"use strict";var b0r=2146435072;A7.exports=b0r});var T7=u((yUr,S7)=>{"use strict";var E0r=er(),N0r=O7(),A0r=Wr();function O0r(r){var e=E0r(r);return e=(e&N0r)>>>20,e-A0r|0}S7.exports=O0r});var L7=u((hUr,I7)=>{"use strict";var S0r=T7();I7.exports=S0r});var P7=u((dUr,_7)=>{"use strict";var T0r=P(),I0r=D(),L0r=Wr(),_0r=Ts(),P0r=e7(),R0r=Is(),F0r=b(),M0r=Lr(),B0r=Vn(),C0r=N7().assign,j0r=L7(),G0r=Wt(),V0r=ji(),U0r=2220446049250313e-31,H0r=2148532223>>>0,Bs=[0,0],Cs=[0,0];function W0r(r,e){var t,i;return e===0||r===0||F0r(r)||M0r(r)?r:(C0r(r,Bs,1,0),r=Bs[0],e+=Bs[1],e+=j0r(r),e<R0r?B0r(0,r):e>_0r?r<0?I0r:T0r:(e<=P0r?(e+=52,i=U0r):i=1,G0r.assign(r,Cs,1,0),t=Cs[0],t&=H0r,t|=e+L0r<<20,i*V0r(t,Cs[1])))}_7.exports=W0r});var Un=u((wUr,R7)=>{"use strict";var k0r=P7();R7.exports=k0r});var M7=u((bUr,F7)=>{"use strict";function D0r(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}F7.exports=D0r});var js=u((EUr,B7)=>{"use strict";var X0r=M7();B7.exports=X0r});var j7=u((NUr,C7)=>{"use strict";var J0r=js();function z0r(r){return J0r(0,r)}C7.exports=z0r});var V7=u((AUr,G7)=>{"use strict";var Y0r=j7();G7.exports=Y0r});var D7=u((OUr,k7)=>{"use strict";var $0r=Q(),Hn=Un(),Dn=V7(),H7=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Z0r=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Gs=16777216,Vs=5960464477539063e-23,Wn=Dn(20),U7=Dn(20),kn=Dn(20),sr=Dn(20);function W7(r,e,t,i,n,a,s,o,v){var f,l,c,p,q,y,m,g,h;for(p=a,h=i[t],g=t,q=0;g>0;q++)l=Vs*h|0,sr[q]=h-Gs*l|0,h=i[g-1]+l,g-=1;if(h=Hn(h,n),h-=8*$0r(h*.125),m=h|0,h-=m,c=0,n>0?(q=sr[t-1]>>24-n,m+=q,sr[t-1]-=q<<24-n,c=sr[t-1]>>23-n):n===0?c=sr[t-1]>>23:h>=.5&&(c=2),c>0){for(m+=1,f=0,q=0;q<t;q++)g=sr[q],f===0?g!==0&&(f=1,sr[q]=16777216-g):sr[q]=16777215-g;if(n>0)switch(n){case 1:sr[t-1]&=8388607;break;case 2:sr[t-1]&=4194303;break}c===2&&(h=1-h,f!==0&&(h-=Hn(1,n)))}if(h===0){for(g=0,q=t-1;q>=a;q--)g|=sr[q];if(g===0){for(y=1;sr[a-y]===0;y++);for(q=t+1;q<=t+y;q++){for(v[o+q]=H7[s+q],l=0,g=0;g<=o;g++)l+=r[g]*v[o+(q-g)];i[q]=l}return t+=y,W7(r,e,t,i,n,a,s,o,v)}}if(h===0)for(t-=1,n-=24;sr[t]===0;)t-=1,n-=24;else h=Hn(h,-n),h>=Gs?(l=Vs*h|0,sr[t]=h-Gs*l|0,t+=1,n+=24,sr[t]=l):sr[t]=h|0;for(l=Hn(1,n),q=t;q>=0;q--)i[q]=l*sr[q],l*=Vs;for(q=t;q>=0;q--){for(l=0,y=0;y<=p&&y<=t-q;y++)l+=Z0r[y]*i[q+y];kn[t-q]=l}for(l=0,q=t;q>=0;q--)l+=kn[q];for(c===0?e[0]=l:e[0]=-l,l=kn[0]-l,q=1;q<=t;q++)l+=kn[q];return c===0?e[1]=l:e[1]=-l,m&7}function Q0r(r,e,t,i){var n,a,s,o,v,f,l,c,p;for(a=4,o=i-1,s=(t-3)/24|0,s<0&&(s=0),f=t-24*(s+1),c=s-o,p=o+a,l=0;l<=p;l++)c<0?Wn[l]=0:Wn[l]=H7[c],c+=1;for(l=0;l<=a;l++){for(n=0,c=0;c<=o;c++)n+=r[c]*Wn[o+(l-c)];U7[l]=n}return v=a,W7(r,e,v,U7,f,a,s,o,Wn)}k7.exports=Q0r});var J7=u((SUr,X7)=>{"use strict";var K0r=Math.round;X7.exports=K0r});var Us=u((TUr,z7)=>{"use strict";var x0r=J7();z7.exports=x0r});var Q7=u((IUr,Z7)=>{"use strict";var rur=Us(),Y7=er(),eur=.6366197723675814,tur=1.5707963267341256,iur=6077100506506192e-26,nur=6077100506303966e-26,aur=20222662487959506e-37,uur=20222662487111665e-37,sur=84784276603689e-45,$7=2047;function our(r,e,t){var i,n,a,s,o,v,f;return n=rur(r*eur),s=r-n*tur,o=n*iur,f=e>>20|0,t[0]=s-o,i=Y7(t[0]),v=f-(i>>20&$7),v>16&&(a=s,o=n*nur,s=a-o,o=n*aur-(a-s-o),t[0]=s-o,i=Y7(t[0]),v=f-(i>>20&$7),v>49&&(a=s,o=n*uur,s=a-o,o=n*sur-(a-s-o),t[0]=s-o)),t[1]=s-t[0]-o,n}Z7.exports=our});var x7=u((LUr,K7)=>{"use strict";var vur=er(),fur=k9(),lur=ji(),cur=D7(),Xn=Q7(),pur=0,gur=16777216,_e=1.5707963267341256,mt=6077100506506192e-26,Jn=2*mt,zn=3*mt,Yn=4*mt,mur=2147483647,qur=2146435072,yur=1048575,hur=598523,dur=1072243195,wur=1073928572,bur=1074752122,Eur=1074977148,Nur=1075183036,Aur=1075388923,Our=1075594811,Sur=1094263291,Gi=[0,0,0],Vi=[0,0];function Tur(r,e){var t,i,n,a,s,o,v,f;if(n=vur(r),a=n&mur|0,a<=dur)return e[0]=r,e[1]=0,0;if(a<=bur)return(a&yur)===hur?Xn(r,a,e):a<=wur?r>0?(f=r-_e,e[0]=f-mt,e[1]=f-e[0]-mt,1):(f=r+_e,e[0]=f+mt,e[1]=f-e[0]+mt,-1):r>0?(f=r-2*_e,e[0]=f-Jn,e[1]=f-e[0]-Jn,2):(f=r+2*_e,e[0]=f+Jn,e[1]=f-e[0]+Jn,-2);if(a<=Our)return a<=Nur?a===Eur?Xn(r,a,e):r>0?(f=r-3*_e,e[0]=f-zn,e[1]=f-e[0]-zn,3):(f=r+3*_e,e[0]=f+zn,e[1]=f-e[0]+zn,-3):a===Aur?Xn(r,a,e):r>0?(f=r-4*_e,e[0]=f-Yn,e[1]=f-e[0]-Yn,4):(f=r+4*_e,e[0]=f+Yn,e[1]=f-e[0]+Yn,-4);if(a<Sur)return Xn(r,a,e);if(a>=qur)return e[0]=NaN,e[1]=NaN,0;for(t=fur(r),i=(a>>20)-1046,f=lur(a-(i<<20|0),t),o=0;o<2;o++)Gi[o]=f|0,f=(f-Gi[o])*gur;for(Gi[2]=f,s=3;Gi[s-1]===pur;)s-=1;return v=cur(Gi,Vi,i,s,1),r<0?(e[0]=-Vi[0],e[1]=-Vi[1],-v):(e[0]=Vi[0],e[1]=Vi[1],v)}K7.exports=Tur});var Ui=u((_Ur,rg)=>{"use strict";var Iur=x7();rg.exports=Iur});var ig=u((PUr,tg)=>{"use strict";var Lur=er(),Hs=Es(),eg=Ns(),_ur=Ui(),$r=[0,0],Pur=2147483647,Rur=1072243195,Fur=1044381696,Mur=2146435072;function Bur(r){var e,t;if(e=Lur(r),e&=Pur,e<=Rur)return e<Fur?1:Hs(r,0);if(e>=Mur)return NaN;switch(t=_ur(r,$r),t&3){case 0:return Hs($r[0],$r[1]);case 1:return-eg($r[0],$r[1]);case 2:return-Hs($r[0],$r[1]);default:return eg($r[0],$r[1])}}tg.exports=Bur});var qt=u((RUr,ng)=>{"use strict";var Cur=ig();ng.exports=Cur});var sg=u((FUr,ug)=>{"use strict";var jur=er(),ag=Es(),Ws=Ns(),Gur=Ui(),Vur=2147483647,Uur=2146435072,Hur=1072243195,Wur=1045430272,Zr=[0,0];function kur(r){var e,t;if(e=jur(r),e&=Vur,e<=Hur)return e<Wur?r:Ws(r,0);if(e>=Uur)return NaN;switch(t=Gur(r,Zr),t&3){case 0:return Ws(Zr[0],Zr[1]);case 1:return ag(Zr[0],Zr[1]);case 2:return-Ws(Zr[0],Zr[1]);default:return-ag(Zr[0],Zr[1])}}ug.exports=kur});var yt=u((MUr,og)=>{"use strict";var Dur=sg();og.exports=Dur});var Or=u((BUr,vg)=>{"use strict";var Xur=3.141592653589793;vg.exports=Xur});var cg=u((CUr,lg)=>{"use strict";var Jur=b(),zur=Lr(),fg=qt(),ks=yt(),Yur=Z(),Hi=Vn(),Wi=Or();function $ur(r){var e,t;return Jur(r)?NaN:zur(r)?NaN:(t=r%2,e=Yur(t),e===0||e===1?Hi(0,t):e<.25?ks(Wi*t):e<.75?(e=.5-e,Hi(fg(Wi*e),t)):e<1.25?(t=Hi(1,t)-t,ks(Wi*t)):e<1.75?(e-=1.5,-Hi(fg(Wi*e),t)):(t-=Hi(2,t),ks(Wi*t)))}lg.exports=$ur});var ki=u((jUr,pg)=>{"use strict";var Zur=cg();pg.exports=Zur});var mg=u((GUr,gg)=>{"use strict";function Qur(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}gg.exports=Qur});var yg=u((VUr,qg)=>{"use strict";function Kur(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}qg.exports=Kur});var dg=u((UUr,hg)=>{"use strict";function xur(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}hg.exports=xur});var bg=u((HUr,wg)=>{"use strict";function rsr(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}wg.exports=rsr});var Ng=u((WUr,Eg)=>{"use strict";function esr(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}Eg.exports=esr});var Og=u((kUr,Ag)=>{"use strict";function tsr(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}Ag.exports=tsr});var Tg=u((DUr,Sg)=>{"use strict";function isr(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}Sg.exports=isr});var Lg=u((XUr,Ig)=>{"use strict";function nsr(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}Ig.exports=nsr});var Pg=u((JUr,_g)=>{"use strict";function asr(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}_g.exports=asr});var Fg=u((zUr,Rg)=>{"use strict";function usr(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}Rg.exports=usr});var Cg=u((YUr,Bg)=>{"use strict";var ssr=b(),osr=Lr(),vsr=Z(),kt=C(),fsr=Gn(),lsr=ki(),csr=Or(),Ds=P(),psr=mg(),gsr=yg(),msr=dg(),qsr=bg(),ysr=Ng(),hsr=Og(),dsr=Tg(),wsr=Lg(),bsr=Pg(),Esr=Fg(),Nsr=.07721566490153287,Asr=.3224670334241136,Osr=1,Ssr=-.07721566490153287,Tsr=.48383612272381005,Isr=-.1475877229945939,Lsr=.06462494023913339,_sr=-.07721566490153287,Psr=1,Rsr=.4189385332046727,$n=1.4616321449683622,Fsr=4503599627370496,Msr=0x400000000000000,Bsr=8470329472543003e-37,Mg=1.4616321449683622,Csr=-.12148629053584961,jsr=-3638676997039505e-33;function Gsr(r){var e,t,i,n,a,s,o,v,f,l,c,p,q;if(ssr(r)||osr(r))return r;if(r===0)return Ds;if(r<0?(e=!0,r=-r):e=!1,r<Bsr)return-kt(r);if(e){if(r>=Fsr||(f=lsr(r),f===0))return Ds;t=kt(csr/vsr(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(q=-kt(r),r>=$n-1+.27?(c=1-r,i=0):r>=$n-1-.27?(c=r-(Mg-1),i=1):(c=r,i=2)):(q=0,r>=$n+.27?(c=2-r,i=0):r>=$n-.27?(c=r-Mg,i=1):(c=r-1,i=2)),i){case 0:p=c*c,s=Nsr+p*psr(p),a=p*(Asr+p*gsr(p)),o=c*s+a,q+=o-.5*c;break;case 1:p=c*c,l=p*c,s=Tsr+l*ysr(l),a=Isr+l*hsr(l),n=Lsr+l*dsr(l),o=p*s-(jsr-l*(a+c*n)),q+=Csr+o;break;case 2:s=c*(_sr+c*wsr(c)),a=Psr+c*bsr(c),q+=-.5*c+s/a;break}else if(r<8)switch(i=fsr(r),c=r-i,o=c*(Ssr+c*qsr(c)),v=Osr+c*msr(c),q=.5*c+o/v,p=1,i){case 7:p*=c+6;case 6:p*=c+5;case 5:p*=c+4;case 4:p*=c+3;case 3:p*=c+2,q+=kt(p)}else r<Msr?(f=kt(r),p=1/r,c=p*p,l=Rsr+p*Esr(c),q=(r-.5)*(f-1)+l):q=r*(kt(r)-1);return e&&(q=t-q),q}Bg.exports=Gsr});var Di=u(($Ur,jg)=>{"use strict";var Vsr=Cg();jg.exports=Vsr});var Vg=u((ZUr,Gg)=>{"use strict";var Usr=D();function Hsr(r){return r===0&&1/r===Usr}Gg.exports=Hsr});var Xs=u((QUr,Ug)=>{"use strict";var Wsr=Vg();Ug.exports=Wsr});var Js=u((KUr,Hg)=>{"use strict";var ksr=2.5066282746310007;Hg.exports=ksr});var kg=u((xUr,Wg)=>{"use strict";var Dsr=Ar();function Xsr(r){return Dsr(r/2)}Wg.exports=Xsr});var Zn=u((rHr,Dg)=>{"use strict";var Jsr=kg();Dg.exports=Jsr});var zg=u((eHr,Jg)=>{"use strict";var Xg=Zn();function zsr(r){return r>0?Xg(r-1):Xg(r+1)}Jg.exports=zsr});var zs=u((tHr,Yg)=>{"use strict";var Ysr=zg();Yg.exports=Ysr});var Zg=u((iHr,$g)=>{"use strict";var $sr=Math.sqrt;$g.exports=$sr});var V=u((nHr,Qg)=>{"use strict";var Zsr=Zg();Qg.exports=Zsr});var xg=u((aHr,Kg)=>{"use strict";var Qsr=gt(),Ys;Qsr===!0?Ys=0:Ys=1;Kg.exports=Ys});var em=u((uHr,rm)=>{"use strict";var Ksr=vr(),xsr=cr(),ror=xg(),$s=new xsr(1),eor=new Ksr($s.buffer);function tor(r,e){return $s[0]=r,eor[ror]=e>>>0,$s[0]}rm.exports=tor});var Qr=u((sHr,tm)=>{"use strict";var ior=em();tm.exports=ior});var nm=u((oHr,im)=>{"use strict";function nor(r){return r|0}im.exports=nor});var Zs=u((vHr,am)=>{"use strict";var aor=nm();am.exports=aor});var om=u((fHr,sm)=>{"use strict";var um=zs(),uor=Vn(),sor=D(),Qn=P();function oor(r,e){return e===sor?Qn:e===Qn?0:e>0?um(e)?r:0:um(e)?uor(Qn,r):Qn}sm.exports=oor});var fm=u((lHr,vm)=>{"use strict";var vor=er(),lor=2147483647,cor=1072693247,Kn=1e300,xn=1e-300;function por(r,e){var t,i;return i=vor(r),t=i&lor,t<=cor?e<0?Kn*Kn:xn*xn:e>0?Kn*Kn:xn*xn}vm.exports=por});var pm=u((cHr,cm)=>{"use strict";var gor=Z(),lm=P();function mor(r,e){return r===-1?(r-r)/(r-r):r===1?1:gor(r)<1==(e===lm)?0:lm}cm.exports=mor});var mm=u((pHr,gm)=>{"use strict";function qor(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}gm.exports=qor});var dm=u((gHr,hm)=>{"use strict";var yor=er(),ra=Qr(),qm=Yr(),hor=Wr(),dor=mm(),wor=1048575,ym=1048576,bor=1072693248,Eor=536870912,Nor=524288,Aor=20,Oor=9007199254740992,Sor=.9617966939259756,Tor=.9617967009544373,Ior=-7028461650952758e-24,Lor=[1,1.5],_or=[0,.5849624872207642],Por=[0,1350039202129749e-23];function Ror(r,e,t){var i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N,G,O,J,ar,k;return J=0,t<ym&&(e*=Oor,J-=53,t=yor(e)),J+=(t>>Aor)-hor|0,ar=t&wor|0,t=ar|bor|0,ar<=235662?k=0:ar<767610?k=1:(k=0,J+=1,t-=ym),e=qm(e,t),l=Lor[k],G=e-l,O=1/(e+l),n=G*O,s=ra(n,0),i=(t>>1|Eor)+Nor,i+=k<<18,v=qm(0,i),f=e-(v-l),o=O*(G-s*v-s*f),a=n*n,N=a*a*dor(a),N+=o*(s+n),a=s*s,v=3+a+N,v=ra(v,0),f=N-(v-3-a),G=s*v,O=o*v+f*n,p=G+O,p=ra(p,0),q=O-(p-G),y=Tor*p,m=Ior*p+q*Sor+Por[k],c=_or[k],E=J,g=y+m+c+E,g=ra(g,0),h=m-(g-E-c-y),r[0]=g,r[1]=h,r}hm.exports=Ror});var bm=u((mHr,wm)=>{"use strict";function For(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}wm.exports=For});var Nm=u((qHr,Em)=>{"use strict";var Mor=Qr(),Bor=bm(),Cor=1.4426950408889634,jor=1.4426950216293335,Gor=19259629911266175e-24;function Vor(r,e){var t,i,n,a,s,o;return n=e-1,a=n*n*Bor(n),s=jor*n,o=n*Gor-a*Cor,i=s+o,i=Mor(i,0),t=o-(i-s),r[0]=i,r[1]=t,r}Em.exports=Vor});var ea=u((yHr,Am)=>{"use strict";var Uor=.6931471805599453;Am.exports=Uor});var Sm=u((hHr,Om)=>{"use strict";function Hor(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}Om.exports=Hor});var Fm=u((dHr,Rm)=>{"use strict";var Wor=er(),Tm=Yr(),kor=Qr(),Dor=Zs(),Xor=Un(),Jor=ea(),Im=Wr(),zor=Sm(),Lm=2147483647,_m=1048575,Pm=1048576,Yor=1071644672,Xi=20,$or=.6931471824645996,Zor=-1904654299957768e-24;function Qor(r,e,t){var i,n,a,s,o,v,f,l,c,p,q;return p=r&Lm|0,q=(p>>Xi)-Im|0,c=0,p>Yor&&(c=r+(Pm>>q+1)>>>0,q=((c&Lm)>>Xi)-Im|0,i=(c&~(_m>>q))>>>0,a=Tm(0,i),c=(c&_m|Pm)>>Xi-q>>>0,r<0&&(c=-c),e-=a),a=t+e,a=kor(a,0),o=a*$or,v=(t-(a-e))*Jor+a*Zor,l=o+v,f=v-(l-o),a=l*l,n=l-a*zor(a),s=l*n/(n-2)-(f+l*f),l=1-(s-l),r=Wor(l),r=Dor(r),r+=c<<Xi>>>0,r>>Xi<=0?l=Xor(l,c):l=Tm(l,r),l}Rm.exports=Qor});var Dm=u((wHr,km)=>{"use strict";var Mm=b(),Bm=zs(),Cm=Lr(),Kor=Ar(),jm=V(),xor=Z(),Qs=Wt(),r1r=Qr(),Gm=Zs(),e1r=D(),t1r=P(),i1r=om(),n1r=fm(),a1r=pm(),u1r=dm(),s1r=Nm(),o1r=Fm(),Ks=2147483647,v1r=1072693247,f1r=1105199104,l1r=1139802112,Vm=1083179008,c1r=1072693248,p1r=1083231232,g1r=3230714880>>>0,Um=31,Pe=1e300,Re=1e-300,m1r=8008566259537294e-32,Kr=[0,0],Hm=[0,0];function Wm(r,e){var t,i,n,a,s,o,v,f,l,c,p,q,y,m,g,h;if(Mm(r)||Mm(e))return NaN;if(Qs(Kr,e),o=Kr[0],v=Kr[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return jm(r);if(e===-.5)return 1/jm(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(Cm(e))return a1r(r,e)}if(Qs(Kr,r),a=Kr[0],s=Kr[1],s===0){if(a===0)return i1r(r,e);if(r===1)return 1;if(r===-1&&Bm(e))return-1;if(Cm(r))return r===e1r?Wm(-0,-e):e<0?0:t1r}if(r<0&&Kor(e)===!1)return(r-r)/(r-r);if(n=xor(r),t=a&Ks|0,i=o&Ks|0,f=a>>>Um|0,l=o>>>Um|0,f&&Bm(e)?f=-1:f=1,i>f1r){if(i>l1r)return n1r(r,e);if(t<v1r)return l===1?f*Pe*Pe:f*Re*Re;if(t>c1r)return l===0?f*Pe*Pe:f*Re*Re;y=s1r(Hm,n)}else y=u1r(Hm,n,t);if(c=r1r(e,0),q=(e-c)*y[0]+e*y[1],p=c*y[0],m=q+p,Qs(Kr,m),g=Gm(Kr[0]),h=Gm(Kr[1]),g>=Vm){if((g-Vm|h)!==0||q+m1r>m-p)return f*Pe*Pe}else if((g&Ks)>=p1r&&((g-g1r|h)!==0||q<=m-p))return f*Re*Re;return m=o1r(g,p,q),f*m}km.exports=Wm});var $=u((bHr,Xm)=>{"use strict";var q1r=Dm();Xm.exports=q1r});var zm=u((EHr,Jm)=>{"use strict";function y1r(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}Jm.exports=y1r});var $m=u((NHr,Ym)=>{"use strict";var h1r=Un(),d1r=zm();function w1r(r,e,t){var i,n,a,s;return i=r-e,n=i*i,a=i-n*d1r(n),s=1-(e-i*a/(2-a)-r),h1r(s,t)}Ym.exports=w1r});var eq=u((AHr,rq)=>{"use strict";var b1r=b(),Zm=Gn(),E1r=D(),Qm=P(),N1r=$m(),A1r=.6931471803691238,O1r=19082149292705877e-26,Km=1.4426950408889634,S1r=709.782712893384,T1r=-745.1332191019411,xm=1/(1<<28),I1r=-xm;function L1r(r){var e,t,i;return b1r(r)||r===Qm?r:r===E1r?0:r>S1r?Qm:r<T1r?0:r>I1r&&r<xm?1+r:(r<0?i=Zm(Km*r-.5):i=Zm(Km*r+.5),e=r-i*A1r,t=i*O1r,N1r(e,t,i))}rq.exports=L1r});var or=u((OHr,tq)=>{"use strict";var _1r=eq();tq.exports=_1r});var nq=u((SHr,iq)=>{"use strict";function P1r(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}iq.exports=P1r});var sq=u((THr,uq)=>{"use strict";var R1r=Js(),aq=$(),F1r=or(),M1r=nq(),B1r=143.01608;function C1r(r){var e,t,i;return e=1/r,e=1+e*M1r(e),t=F1r(r),r>B1r?(i=aq(r,.5*r-.25),t=i*(i/t)):t=aq(r,r-.5)/t,R1r*t*e}uq.exports=C1r});var vq=u((IHr,oq)=>{"use strict";var j1r=.5772156649015329;oq.exports=j1r});var lq=u((LHr,fq)=>{"use strict";var G1r=vq();function V1r(r,e){return e/((1+G1r*r)*r)}fq.exports=V1r});var pq=u((_Hr,cq)=>{"use strict";function U1r(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}cq.exports=U1r});var bq=u((PHr,wq)=>{"use strict";var H1r=b(),W1r=Ar(),k1r=Xs(),gq=Z(),D1r=Q(),X1r=yt(),mq=P(),qq=D(),yq=Or(),hq=sq(),dq=lq(),J1r=pq();function z1r(r){var e,t,i,n;if(W1r(r)&&r<0||r===qq||H1r(r))return NaN;if(r===0)return k1r(r)?qq:mq;if(r>171.61447887182297)return mq;if(r<-170.5674972726612)return 0;if(t=gq(r),t>33)return r>=0?hq(r):(i=D1r(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*X1r(yq*n),e*yq/(gq(n)*hq(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return dq(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return dq(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*J1r(r))}wq.exports=z1r});var Dt=u((RHr,Eq)=>{"use strict";var Y1r=bq();Eq.exports=Y1r});var xs=u((FHr,Nq)=>{"use strict";var $1r=14901161193847656e-24;Nq.exports=$1r});var Oq=u((MHr,Aq)=>{"use strict";var Z1r=17976931348623157e292;Aq.exports=Z1r});var ta=u((BHr,Sq)=>{"use strict";var Q1r=709.782712893384;Sq.exports=Q1r});var Iq=u((CHr,Tq)=>{"use strict";var K1r=or();function x1r(r,e){var t,i,n,a;if(n=K1r(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}Tq.exports=x1r});var _q=u((jHr,Lq)=>{"use strict";function rvr(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}Lq.exports=rvr});var Rq=u((GHr,Pq)=>{"use strict";function evr(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}Pq.exports=evr});var Mq=u((VHr,Fq)=>{"use strict";function tvr(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}Fq.exports=tvr});var Cq=u((UHr,Bq)=>{"use strict";function ivr(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}Bq.exports=ivr});var Gq=u((HHr,jq)=>{"use strict";function nvr(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}jq.exports=nvr});var Uq=u((WHr,Vq)=>{"use strict";function avr(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}Vq.exports=avr});var Wq=u((kHr,Hq)=>{"use strict";function uvr(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}Hq.exports=uvr});var Dq=u((DHr,kq)=>{"use strict";function svr(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}kq.exports=svr});var Yq=u((XHr,zq)=>{"use strict";var ovr=b(),Xq=or(),vvr=Qr(),fvr=P(),lvr=D(),cvr=_q(),pvr=Rq(),gvr=Mq(),mvr=Cq(),qvr=Gq(),yvr=Uq(),hvr=Wq(),dvr=Dq(),ia=1e-300,wvr=13877787807814457e-33,Jq=.8450629115104675,bvr=.12837916709551256,Evr=1,Nvr=-.0023621185607526594,Avr=1,Ovr=-.009864944034847148,Svr=1,Tvr=-.0098649429247001,Ivr=1;function Lvr(r){var e,t,i,n,a,s,o,v;if(ovr(r))return NaN;if(r===fvr)return 0;if(r===lvr)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<wvr?1-r:(i=r*r,n=bvr+i*cvr(i),a=Evr+i*pvr(i),s=n/a,r<.25?1-(r+r*s):(n=r*s,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=Nvr+a*gvr(a),v=Avr+a*mvr(a),e?1+Jq+o/v:1-Jq-o/v;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=Ovr+a*qvr(a),a=Svr+a*yvr(a);else{if(r<-6)return 2-ia;n=Tvr+a*hvr(a),a=Ivr+a*dvr(a)}return i=vvr(t,0),n=Xq(-(i*i)-.5625)*Xq((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-ia:ia*ia}zq.exports=Lvr});var ro=u((JHr,$q)=>{"use strict";var _vr=Yq();$q.exports=_vr});var Kq=u((zHr,Qq)=>{"use strict";var Pvr=ro(),Zq=V(),Rvr=or(),Fvr=Or();function Mvr(r,e){var t,i,n,a,s;if(a=Pvr(Zq(e)),a!==0&&r>1){for(i=Rvr(-e)/Zq(Fvr*e),i*=e,t=.5,i/=t,n=i,s=2;s<r;++s)i/=s-t,i*=e,n+=i;a+=n}return a}Qq.exports=Mvr});var eo=u((YHr,xq)=>{"use strict";var Bvr=-708.3964185322641;xq.exports=Bvr});var iy=u(($Hr,ty)=>{"use strict";var Xt=or(),na=$(),Cvr=C(),ry=ta(),ey=eo();function jvr(r,e){var t,i;return i=r*Cvr(e),e>=1?i<ry&&-e>ey?t=na(e,r)*Xt(-e):r>=1?t=na(e/Xt(e/r),r):t=Xt(i-e):i>ey?t=na(e,r)*Xt(-e):e/r<ry?t=na(e/Xt(e/r),r):t=Xt(i-e),t}ty.exports=jvr});var to=u((ZHr,ny)=>{"use strict";function Gvr(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}ny.exports=Gvr});var uy=u((QHr,ay)=>{"use strict";var Vvr=to();function Uvr(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new Function(e)();function a(s){return Vvr(r,s)}}ay.exports=Uvr});var vy=u((KHr,oy)=>{"use strict";var Hvr=w(),sy=to(),Wvr=uy();Hvr(sy,"factory",Wvr);oy.exports=sy});var Fe=u((xHr,fy)=>{"use strict";var kvr=6.283185307179586;fy.exports=kvr});var cy=u((rWr,ly)=>{"use strict";function Dvr(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}ly.exports=Dvr});var gy=u((eWr,py)=>{"use strict";function Xvr(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}py.exports=Xvr});var qy=u((tWr,my)=>{"use strict";function Jvr(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}my.exports=Jvr});var hy=u((iWr,yy)=>{"use strict";function zvr(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}yy.exports=zvr});var wy=u((nWr,dy)=>{"use strict";function Yvr(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}dy.exports=Yvr});var Ey=u((aWr,by)=>{"use strict";function $vr(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}by.exports=$vr});var Ay=u((uWr,Ny)=>{"use strict";function Zvr(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}Ny.exports=Zvr});var Sy=u((sWr,Oy)=>{"use strict";function Qvr(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}Oy.exports=Qvr});var Iy=u((oWr,Ty)=>{"use strict";function Kvr(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}Ty.exports=Kvr});var _y=u((vWr,Ly)=>{"use strict";var xvr=vy(),r2r=ro(),io=V(),e2r=or(),t2r=C(),i2r=Fe(),n2r=cy(),a2r=gy(),u2r=qy(),s2r=hy(),o2r=wy(),v2r=Ey(),f2r=Ay(),l2r=Sy(),c2r=Iy(),Br=[0,0,0,0,0,0,0,0,0,0];function p2r(r,e){var t,i,n,a,s;return i=(e-r)/r,n=-t2r(1+i)+i,a=r*n,s=io(2*n),e<r&&(s=-s),Br[0]=n2r(s),Br[1]=a2r(s),Br[2]=u2r(s),Br[3]=s2r(s),Br[4]=o2r(s),Br[5]=v2r(s),Br[6]=f2r(s),Br[7]=l2r(s),Br[8]=c2r(s),Br[9]=-.0005967612901927463,t=xvr(Br,1/r),t*=e2r(-a)/io(i2r*r),e<r&&(t=-t),t+=r2r(io(a))/2,t}Ly.exports=p2r});var Ry=u((fWr,Py)=>{"use strict";var g2r=eval;Py.exports=g2r});var My=u((lWr,Fy)=>{"use strict";var m2r=Ry();function q2r(){var r;try{m2r('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}Fy.exports=q2r});var no=u((cWr,By)=>{"use strict";var y2r=My();By.exports=y2r});var Jt=u((pWr,Cy)=>{"use strict";var h2r=2220446049250313e-31;Cy.exports=h2r});var Gy=u((gWr,jy)=>{"use strict";var aa=Z(),d2r=Jt(),w2r=1e6;function b2r(r,e){var t,i,n,a,s,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||d2r,a=o.maxTerms||w2r,s=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(s+=n,aa(i*s)>=aa(n)||--a===0)break}else do n=r(),s+=n;while(aa(i*s)<aa(n)&&--a);return s}jy.exports=b2r});var Hy=u((mWr,Uy)=>{"use strict";var Vy=Z(),E2r=Jt(),N2r=1e6;function A2r(r,e){var t,i,n,a,s;s={},arguments.length>1&&(s=e),t=s.tolerance||E2r,n=s.maxTerms||N2r,a=s.initialValue||0;do i=r(),a+=i;while(Vy(t*a)<Vy(i)&&--n);return a}Uy.exports=A2r});var uo=u((qWr,Wy)=>{"use strict";var O2r=no(),S2r=Gy(),T2r=Hy(),ao;O2r()?ao=S2r:ao=T2r;Wy.exports=ao});var Dy=u((yWr,ky)=>{"use strict";function I2r(r,e){var t=1,i=r,n=e;return a;function a(){var s=t;return i+=1,t*=n/i,s}}ky.exports=I2r});var Jy=u((hWr,Xy)=>{"use strict";var L2r=uo(),_2r=Dy();function P2r(r,e,t){var i,n;return t=t||0,n=_2r(r,e),i=L2r(n,{initialValue:t}),i}Xy.exports=P2r});var Yy=u((dWr,zy)=>{"use strict";function R2r(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}zy.exports=R2r});var Zy=u((wWr,$y)=>{"use strict";var F2r=Yy();$y.exports=F2r});var Ky=u((bWr,Qy)=>{"use strict";var M2r=Zy();Qy.exports=M2r});var rh=u((EWr,xy)=>{"use strict";function B2r(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}xy.exports=B2r});var ah=u((NWr,nh)=>{"use strict";var C2r=b(),eh=er(),th=Yr(),j2r=P(),G2r=D(),ih=Wr(),V2r=rh(),so=.6931471803691238,oo=19082149292705877e-26,U2r=.41421356237309503,H2r=-.2928932188134525,W2r=1862645149230957e-24,k2r=5551115123125783e-32,D2r=9007199254740992,X2r=.6666666666666666;function J2r(r){var e,t,i,n,a,s,o,v,f,l;if(r<-1||C2r(r))return NaN;if(r===-1)return G2r;if(r===j2r||r===0)return r;if(r<0?i=-r:i=r,l=1,i<U2r){if(i<W2r)return i<k2r?r:r-r*r*.5;r>H2r&&(l=0,n=r,t=1)}return l!==0&&(i<D2r?(f=1+r,t=eh(f),l=(t>>20)-ih,l>0?a=1-(f-r):a=r-(f-1),a/=f):(f=r,t=eh(f),l=(t>>20)-ih,a=0),t&=1048575,t<434334?f=th(f,t|1072693248):(l+=1,f=th(f,t|1071644672),t=1048576-t>>2),n=f-1),e=.5*n*n,t===0?n===0?(a+=l*oo,l*so+a):(v=e*(1-X2r*n),l*so-(v-(l*oo+a)-n)):(s=n/(2+n),o=s*s,v=o*V2r(o),l===0?n-(e-s*(e+v)):l*so-(e-(s*(e+v)+(l*oo+a))-n))}nh.exports=J2r});var zt=u((AWr,uh)=>{"use strict";var z2r=ah();uh.exports=z2r});var oh=u((OWr,sh)=>{"use strict";var Y2r=P();function $2r(r){return r===0&&1/r===Y2r}sh.exports=$2r});var Me=u((SWr,vh)=>{"use strict";var Z2r=oh();vh.exports=Z2r});var ch=u((TWr,lh)=>{"use strict";var fh=Me(),vo=b(),Q2r=D(),ua=P();function K2r(r,e){var t,i,n,a;if(t=arguments.length,t===2)return vo(r)||vo(e)?NaN:r===ua||e===ua?ua:r===e&&r===0?fh(r)?r:e:r>e?r:e;for(i=Q2r,a=0;a<t;a++){if(n=arguments[a],vo(n)||n===ua)return n;(n>i||n===i&&n===0&&fh(n))&&(i=n)}return i}lh.exports=K2r});var fo=u((IWr,ph)=>{"use strict";var x2r=ch();ph.exports=x2r});var qh=u((LWr,mh)=>{"use strict";var gh=Xs(),lo=b(),sa=D(),rfr=P();function efr(r,e){var t,i,n,a;if(t=arguments.length,t===2)return lo(r)||lo(e)?NaN:r===sa||e===sa?sa:r===e&&r===0?gh(r)?r:e:r<e?r:e;for(i=rfr,a=0;a<t;a++){if(n=arguments[a],lo(n)||n===sa)return n;(n<i||n===i&&n===0&&gh(n))&&(i=n)}return i}mh.exports=efr});var hh=u((_Wr,yh)=>{"use strict";var tfr=qh();yh.exports=tfr});var wh=u((PWr,dh)=>{"use strict";var ifr=10.900511;dh.exports=ifr});var co=u((RWr,bh)=>{"use strict";var nfr=2.718281828459045;bh.exports=nfr});var Ah=u((FWr,Nh)=>{"use strict";var afr=Ky(),ufr=Di(),sfr=Dt(),ofr=zt(),vfr=V(),ffr=Z(),Be=or(),Ji=$(),po=fo(),go=hh(),Eh=C(),oa=ta(),zi=eo(),mo=wh(),lfr=co();function cfr(r,e){var t,i,n,a,s,o,v;return n=r+mo-.5,v=(e-r-mo+.5)/n,r<1?e<=zi?Be(r*Eh(e)-e-ufr(r)):Ji(e,r)*Be(-e)/sfr(r):(ffr(v*v*r)<=100&&r>150?(t=r*(ofr(v)-v)+e*(.5-mo)/n,t=Be(t)):(a=r*Eh(e/n),s=r-e,go(a,s)<=zi||po(a,s)>=oa?(i=s/r,go(a,s)/2>zi&&po(a,s)/2<oa?(o=Ji(e/n,r/2)*Be(s/2),t=o*o):go(a,s)/4>zi&&po(a,s)/4<oa&&e>r?(o=Ji(e/n,r/4)*Be(s/4),t=o*o,t*=t):i>zi&&i<oa?t=Ji(e*Be(i)/n,r):t=Be(a+s)):t=Ji(e/n,r)*Be(s)),t*=vfr(n/lfr)/afr(r),t)}Nh.exports=cfr});var Sh=u((MWr,Oh)=>{"use strict";var pfr=.34657359027997264;Oh.exports=pfr});var Ih=u((BWr,Th)=>{"use strict";function gfr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}Th.exports=gfr});var Rh=u((CWr,Ph)=>{"use strict";var mfr=b(),qo=er(),va=Yr(),Lh=P(),qfr=D(),yfr=Wr(),hfr=Sh(),dfr=Ih(),wfr=709.782712893384,yo=.6931471803691238,ho=19082149292705877e-26,_h=1.4426950408889634,bfr=38.816242111356935,Efr=1.0397207708399179;function Nfr(r){var e,t,i,n,a,s,o,v,f,l,c,p;if(r===Lh||mfr(r))return r;if(r===qfr)return-1;if(r===0)return r;if(r<0?(t=!0,o=-r):(t=!1,o=r),o>=bfr){if(t)return-1;if(o>=wfr)return Lh}if(a=qo(o)|0,o>hfr)o<Efr?t?(i=r+yo,n=-ho,p=-1):(i=r-yo,n=ho,p=1):(t?p=_h*r-.5:p=_h*r+.5,p|=0,l=p,i=r-l*yo,n=l*ho),r=i-n,f=i-r-n;else{if(a<1016070144)return r;p=0}return e=.5*r,v=r*e,s=1+v*dfr(v),l=3-s*e,c=v*((s-l)/(6-r*l)),p===0?r-(r*c-v):(c=r*(c-f)-f,c-=v,p===-1?.5*(r-c)-.5:p===1?r<-.25?-2*(c-(r+.5)):1+2*(r-c):p<=-2||p>56?(o=1-(c-r),i=qo(o)+(p<<20)|0,o=va(o,i),o-1):(l=1,p<20?(i=1072693248-(2097152>>p)|0,l=va(l,i),o=l-(c-r)):(i=yfr-p<<20|0,l=va(l,i),o=r-(c+l),o+=1),i=qo(o)+(p<<20)|0,va(o,i)))}Ph.exports=Nfr});var wo=u((jWr,Fh)=>{"use strict";var Afr=Rh();Fh.exports=Afr});var jh=u((GWr,Ch)=>{"use strict";var Mh=b(),Bh=Z(),Ofr=wo(),Sfr=C(),Tfr=$(),Ifr=Gn();function Lfr(r,e){var t;if(Mh(r)||Mh(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((Bh(e*(r-1))<.5||Bh(e)<.2)&&(t=Sfr(r)*e,t<.5))return Ofr(t)}else if(Ifr(e)!==e)return NaN;return Tfr(r,e)-1}Ch.exports=Lfr});var Vh=u((VWr,Gh)=>{"use strict";var _fr=jh();Gh.exports=_fr});var Hh=u((UWr,Uh)=>{"use strict";function Pfr(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}Uh.exports=Pfr});var kh=u((HWr,Wh)=>{"use strict";function Rfr(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}Wh.exports=Rfr});var Xh=u((WWr,Dh)=>{"use strict";function Ffr(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}Dh.exports=Ffr});var zh=u((kWr,Jh)=>{"use strict";var bo=C(),Mfr=Jt(),Bfr=Hh(),Cfr=kh(),jfr=Xh(),Gfr=.15896368026733398,Vfr=.5281534194946289,Ufr=.45201730728149414;function Hfr(r,e,t){var i,n,a,s;if(r<Mfr)return-bo(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=bo(r);while(r>=3);t=r-2}return a=t*(r+1),s=Bfr(t),n+=a*Gfr+a*s,n}return r<1&&(n+=-bo(r),t=e,e=r,r+=1),r<=1.5?(a=Cfr(e),i=e*t,n+=i*Vfr+i*a,n):(a=t*e,s=jfr(-t),n+=a*Ufr+a*s,n)}Jh.exports=Hfr});var Kh=u((DWr,Qh)=>{"use strict";var Yh=Dt(),$h=wo(),Wfr=zt(),kfr=b(),Zh=zh();function Dfr(r){return kfr(r)?NaN:r<0?r<-.5?Yh(1+r)-1:$h(-Wfr(r)+Zh(r+2,r+1,r)):r<2?$h(Zh(r+1,r,r-1)):Yh(1+r)-1}Qh.exports=Dfr});var rd=u((XWr,xh)=>{"use strict";var Xfr=Kh();xh.exports=Xfr});var td=u((JWr,ed)=>{"use strict";function Jfr(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,s;function s(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}ed.exports=Jfr});var nd=u((zWr,id)=>{"use strict";var zfr=Vh(),Yfr=uo(),$fr=rd(),Zfr=td();function Qfr(r,e,t){var i,n,a,s,o;return n=$fr(r),a=(n+1)/r,s=zfr(e,r),n-=s,n/=r,o=Zfr(r,e),s+=1,i=t?a:0,n=-s*Yfr(o,{initialValue:(i-n)/s}),t&&(n=-n),[n,a]}id.exports=Qfr});var Eo=u((YWr,ad)=>{"use strict";var Kfr=11754943508222875e-54;ad.exports=Kfr});var sd=u(($Wr,ud)=>{"use strict";var fa=Z(),kr=Eo(),xfr=Jt(),rlr=1e6;function elr(r,e,t){var i,n,a,s,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),s=f[1],a=f[0],s===0&&(s=kr),o=s,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=kr),o=f[1]+f[0]/o,o===0&&(o=kr),v=1/v,n=o*v,s*=n);while(fa(n-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=kr),o=f[1]+f[0]/o,o===0&&(o=kr),v=1/v,n=o*v,s*=n);while(f&&fa(n-1)>e&&--t);return a/s}function tlr(r,e,t){var i,n,a,s,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),a=v[1],a===0&&(a=kr),s=a,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=kr),s=v[1]+v[0]/s,s===0&&(s=kr),o=1/o,n=s*o,a*=n);while(v&&fa(n-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=kr),s=v[1]+v[0]/s,s===0&&(s=kr),o=1/o,n=s*o,a*=n);while(v&&fa(n-1)>e&&--t);return a}function ilr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||rlr,n=i.tolerance||xfr,i.keep?tlr(r,n,t):elr(r,n,t)}ud.exports=ilr});var fd=u((ZWr,vd)=>{"use strict";var od=Z(),nlr=Jt(),Yt=Eo(),alr=1e6;function ulr(r,e,t){var i,n,a,s,o,v;v=r(),o=v[1],n=v[0],o===0&&(o=Yt),a=o,s=0;do v=r(),v&&(s=v[1]+v[0]*s,s===0&&(s=Yt),a=v[1]+v[0]/a,a===0&&(a=Yt),s=1/s,i=a*s,o*=i);while(v&&od(i-1)>e&&--t);return n/o}function slr(r,e,t){var i,n,a,s,o;o=r(),s=o[1],s===0&&(s=Yt),n=s,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=Yt),n=o[1]+o[0]/n,n===0&&(n=Yt),a=1/a,i=n*a,s*=i);while(o&&od(i-1)>e&&--t);return s}function olr(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||nlr,t=i.maxIter||alr,i.keep?slr(r,n,t):ulr(r,n,t)}vd.exports=olr});var cd=u((QWr,ld)=>{"use strict";var vlr=no(),flr=sd(),llr=fd(),No;vlr()?No=flr:No=llr;ld.exports=No});var gd=u((KWr,pd)=>{"use strict";function clr(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}pd.exports=clr});var qd=u((xWr,md)=>{"use strict";var plr=cd(),glr=gd();function mlr(r,e){var t=glr(r,e);return 1/(e-r+1+plr(t))}md.exports=mlr});var Sd=u((rkr,Od)=>{"use strict";var qlr=Di(),ylr=Q(),Yi=Dt(),yd=Z(),hlr=or(),hd=$(),Cr=C(),dlr=xs(),dd=Oq(),wlr=Js(),wd=ta(),blr=P(),Elr=Iq(),Nlr=Kq(),bd=iy(),Alr=_y(),Ao=Jy(),Ed=Ah(),Olr=nd(),Nd=qd(),Slr=170;function Ad(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,E;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,c=i,p=0,e>=Slr&&!a)return c&&e*4<r?(p=e*Cr(r)-r,p+=Cr(Nd(e,r))):!c&&e>4*r?(p=e*Cr(r)-r,o=0,p+=Cr(Ao(e,r,o)/e)):(p=Ad(e,r,!0,c),p===0?c?(p=1+1/(12*e)+1/(288*e*e),p=Cr(p)-e+(e-.5)*Cr(e),p+=Cr(wlr)):(p=e*Cr(r)-r,o=0,p+=Cr(Ao(e,r,o)/e)):p=Cr(p)+qlr(e)),p>wd?blr:hlr(p);switch(l=e<30&&e<=r+1&&r<wd,l?(h=ylr(e),q=h===e,v=q?!1:yd(h-e)===.5):q=v=!1,q&&r>.6?(c=!c,s=0):v&&r>.2?(c=!c,s=1):r<dlr&&e>1?s=6:r<.5?-.4/Cr(r)<e?s=2:s=3:r<1.1?r*.75<e?s=2:s=3:(f=!1,a&&e>20&&(y=yd((r-e)/e),e>200?20/e>y*y&&(f=!0):y<.4&&(f=!0)),f?s=5:r-1/(3*r)<e?s=2:(s=4,c=!c)),s){case 0:p=Elr(e,r),a===!1&&(p*=Yi(e));break;case 1:p=Nlr(e,r),a===!1&&(p*=Yi(e));break;case 2:p=a?Ed(e,r):bd(e,r),p!==0&&(o=0,n=!1,c&&(o=a?1:Yi(e),a||p>=1||dd*p>o?(o/=p,a||e<1||dd/e>o?(o*=-e,n=!0):o=0):o=0)),p*=Ao(e,r,o)/e,n&&(c=!1,p=-p);break;case 3:c=!c,g=Olr(e,r,c),p=g[0],E=g[1],c=!1,a&&(p/=E);break;case 4:p=a?Ed(e,r):bd(e,r),p!==0&&(p*=Nd(e,r));break;case 5:p=Alr(e,r),r>=e&&(c=!c);break;case 6:p=a?hd(r,e)/Yi(e+1):hd(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),c&&(m=a?1:Yi(e),p=m-p),p}Od.exports=Ad});var Oo=u((ekr,Td)=>{"use strict";var Tlr=Sd();Td.exports=Tlr});var Ld=u((tkr,Id)=>{"use strict";var Ilr=Oo(),So=b(),Llr=P();function _lr(r,e,t){return So(r)||So(e)||So(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===Llr?1:Ilr(r*t,e)}Id.exports=_lr});var Pd=u((ikr,_d)=>{"use strict";function Plr(r){return e;function e(){return r}}_d.exports=Plr});var L=u((nkr,Rd)=>{"use strict";var Rlr=Pd();Rd.exports=Rlr});var Bd=u((akr,Md)=>{"use strict";var Fd=b();function Flr(r,e){return Fd(r)||Fd(e)?NaN:r<e?0:1}Md.exports=Flr});var Gd=u((ukr,jd)=>{"use strict";var Mlr=L(),Cd=b();function Blr(r){if(Cd(r))return Mlr(NaN);return e;function e(t){return Cd(t)?NaN:t<r?0:1}}jd.exports=Blr});var To=u((skr,Ud)=>{"use strict";var Clr=w(),Vd=Bd(),jlr=Gd();Clr(Vd,"factory",jlr);Ud.exports=Vd});var kd=u((okr,Wd)=>{"use strict";var Glr=L(),Vlr=To().factory,Ulr=Oo(),Hd=b(),Hlr=P();function Wlr(r,e){if(Hd(r)||Hd(e)||r<0||e<=0)return Glr(NaN);if(r===0)return Vlr(0);return t;function t(i){return i<=0?0:i===Hlr?1:Ulr(i*e,r)}}Wd.exports=Wlr});var Io=u((vkr,Xd)=>{"use strict";var klr=w(),Dd=Ld(),Dlr=kd();klr(Dd,"factory",Dlr);Xd.exports=Dd});var zd=u((fkr,Jd)=>{"use strict";var Xlr=Io();function Jlr(r,e){return Xlr(r,e/2,.5)}Jd.exports=Jlr});var $d=u((lkr,Yd)=>{"use strict";var zlr=Io().factory;function Ylr(r){return zlr(r/2,.5)}Yd.exports=Ylr});var Kd=u((ckr,Qd)=>{"use strict";var $lr=w(),Zd=zd(),Zlr=$d();$lr(Zd,"factory",Zlr);Qd.exports=Zd});var ew=u((pkr,rw)=>{"use strict";var Qlr=T(),Klr=A(),xlr=En(),xd=["values","indices","*"];function r3r(r,e){return Qlr(e)?Klr(e,"returns")&&(r.returns=e.returns,xlr(xd,r.returns)===-1)?new TypeError('invalid option. `returns` option must be one of the following: "'+xd.join('", "')+'". Option: `'+r.returns+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}rw.exports=r3r});var iw=u((gkr,tw)=>{"use strict";var e3r=A();function t3r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),e3r(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}tw.exports=t3r});var aw=u((mkr,nw)=>{"use strict";var i3r=A();function n3r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),i3r(t,n)?t[n].push(a):t[n]=[a];return t}nw.exports=n3r});var sw=u((qkr,uw)=>{"use strict";var a3r=A();function u3r(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),a3r(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}uw.exports=u3r});var fw=u((ykr,vw)=>{"use strict";var ow=Mr(),s3r=ew(),o3r=iw(),v3r=aw(),f3r=sw();function l3r(r,e,t){var i,n,a;if(!ow(r))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+r+"`.");if(i={returns:"values"},arguments.length===2)a=e;else{if(n=s3r(i,e),n)throw n;a=t}if(!ow(a))throw new TypeError("invalid argument. Last argument must be a collection. Value: `"+a+"`.");if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?o3r(r,a):i.returns==="indices"?v3r(r,a):f3r(r,a)}vw.exports=l3r});var cw=u((hkr,lw)=>{"use strict";var c3r=fw();lw.exports=c3r});var gw=u((dkr,pw)=>{"use strict";function p3r(r){var e,t,i,n,a,s;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)s=r[a],e=s-t,t+=e/(a+1),n+=e*(s-t);return n/(a-1)}pw.exports=p3r});var yw=u((wkr,qw)=>{"use strict";var g3r=lr(),m3r=j().isPrimitive,q3r=T(),y3r=ir(),mw=A();function h3r(r,e){return q3r(e)?mw(e,"alpha")&&(r.alpha=e.alpha,!m3r(r.alpha)||y3r(r.alpha))?new TypeError("invalid option. `alpha` option must be a number primitive. Option: `"+r.alpha+"`."):mw(e,"groups")&&(r.groups=e.groups,!g3r(r.groups))?new TypeError("invalid option. `groups` option must be an array. Option: `"+r.groups+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}qw.exports=h3r});var Lo=u((bkr,hw)=>{"use strict";var d3r=Fr().isPrimitive;function w3r(r){return d3r(r)&&r>0}hw.exports=w3r});var _o=u((Ekr,dw)=>{"use strict";var b3r=Fr().isObject;function E3r(r){return b3r(r)&&r.valueOf()>0}dw.exports=E3r});var bw=u((Nkr,ww)=>{"use strict";var N3r=Lo(),A3r=_o();function O3r(r){return N3r(r)||A3r(r)}ww.exports=O3r});var xr=u((Akr,Nw)=>{"use strict";var Ew=w(),Po=bw(),S3r=Lo(),T3r=_o();Ew(Po,"isPrimitive",S3r);Ew(Po,"isObject",T3r);Nw.exports=Po});var $i=u((Okr,Aw)=>{"use strict";var I3r=9007199254740991;Aw.exports=I3r});var Ro=u((Skr,Ow)=>{"use strict";var L3r=308;Ow.exports=L3r});var Tw=u((Tkr,Sw)=>{"use strict";var _3r=-308;Sw.exports=_3r});var Fo=u((Ikr,Iw)=>{"use strict";var P3r=-324;Iw.exports=P3r});var Bw=u((Lkr,Mw)=>{"use strict";var Lw=b(),la=Lr(),_w=$(),R3r=Z(),Pw=Us(),F3r=$i(),Rw=Ro(),M3r=Tw(),B3r=Fo(),C3r=F3r+1,Fw=1e308;function j3r(r,e){var t,i;return Lw(r)||Lw(e)||la(e)?NaN:la(r)||r===0||e<B3r||R3r(r)>C3r&&e<=0?r:e>Rw?0*r:e<M3r?(t=_w(10,-(e+Rw)),i=r*Fw*t,la(i)?r:Pw(i)/Fw/t):(t=_w(10,-e),i=r*t,la(i)?r:Pw(i)/t)}Mw.exports=j3r});var jw=u((_kr,Cw)=>{"use strict";var G3r=Bw();Cw.exports=G3r});var Uw=u((Pkr,Vw)=>{"use strict";var V3r=xr(),U3r=T(),H3r=ur().isPrimitive,Gw=A(),Mo=jw();function W3r(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!U3r(r))throw new TypeError("invalid argument. First argument must be an options object. Value: `"+r+"`.");if(Gw(r,"digits")){if(!V3r(r.digits))throw new TypeError("invalid option. `digits` option must be a positive integer. Option: `"+r.digits+"`.");t=r.digits}if(Gw(r,"decision")){if(!H3r(r.decision))throw new TypeError("invalid option. `decision` option must be a boolean primitive. Option: `"+r.decision+"`.");e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+Mo(this.pValue,-t)+`
`,i+="    statistic: "+Mo(this.statistic,-t)+`
`,i+="    df: "+Mo(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}Vw.exports=W3r});var kw=u((Rkr,Ww)=>{"use strict";var k3r=Mr(),D3r=T(),ht=V5(),X3r=Li(),J3r=Kd(),z3r=cw(),Hw=C(),Y3r=gw(),$3r=yw(),Z3r=Uw();function Q3r(){var r,e,t,i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N;if(v=[],e=arguments.length,f={},D3r(arguments[e-1])&&(r=arguments[e-1],e-=1,q=$3r(f,r),q))throw q;if(f.groups){if(n=z3r(arguments[0],f.groups),i=X3r(n),e=i.length,e<2)throw new Error("invalid number of groups. `groups` array must contain at least two unique elements. Value: `"+i+"`.");for(N=0;N<e;N++)v.push(n[i[N]])}else for(N=0;N<e;N++)v.push(arguments[N]);for(s=0,t=0,o=0,y=0,h=new Array(e),E=h.slice(),N=0;N<e;N++){if(p=v[N],!k3r(p))throw new TypeError("invalid argument. Must provide array-like arguments. Value: `"+p+"`.");if(p.length===0)throw new Error("invalid argument. Supplied arrays cannot be empty. Value: `"+p+"`.");h[N]=p.length-1,s+=h[N],t+=1/h[N],E[N]=Y3r(p),o+=h[N]*E[N],y+=h[N]*Hw(E[N])}if(o/=s,f.alpha===void 0?a=.05:a=f.alpha,a<0||a>1)throw new RangeError("invalid argument. Option `alpha` must be a number in the range 0 to 1. Value: `"+a+"`.");return c=s*Hw(o)-y,c/=1+(t-1/s)/(3*(e-1)),g=e-1,l=1-J3r(c,g),m={},ht(m,"rejected",l<=a),ht(m,"alpha",a),ht(m,"pValue",l),ht(m,"statistic",c),ht(m,"df",g),ht(m,"method","Bartlett's test of equal variances"),ht(m,"print",Z3r),m}Ww.exports=Q3r});var Xw=u((Fkr,Dw)=>{"use strict";var K3r=kw();Dw.exports=K3r});var zw=u((Mkr,Jw)=>{"use strict";function x3r(r){var e,t,i,n,a,s,o,v,f,l,c;if(v=r.length,t=[],v===0)return t;if(n=r[0],f=n.length,v===1){for(l=0;l<f;l++)t.push(n[l]);return t}for(e=[f],l=1;l<v;l++)e.push(r[l].length),e[l]>f&&(f=e[l]);for(l=0;l<f;l++)t.push(0);for(l=f-1;l>=0;){for(a=e[0]-f+l,a>=0?i=n[a]:i=1,c=1;c<v;c++){if(s=e[c]-f+l,s>=0?o=r[c][s]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[l]=i,l-=1}return t}Jw.exports=x3r});var $w=u((Bkr,Yw)=>{"use strict";var rcr=zw();Yw.exports=rcr});var ca=u((Ckr,Zw)=>{"use strict";function ecr(r){var e,t,i,n,a,s;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)e.push(n[s]);return e}Zw.exports=ecr});var Kw=u((jkr,Qw)=>{"use strict";var tcr=j().isPrimitive,icr=z().isPrimitive,ncr=ur().isPrimitive,acr=lr(),ucr=$w(),scr=S(),ocr=ca(),vcr={number:tcr,string:icr,boolean:ncr};function fcr(r,e,t){var i,n,a,s,o,v,f,l,c,p;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],n=[],p=0;p<r.length;p++)if(c=r[p],o=e[p],l=vcr[o],l(c))n.push([c]),a.push([1,1]);else if(acr(c))n.push(ocr(c)),a.push([c.length,c[0].length]);else throw new TypeError(scr("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[p],o,o,String(c)));if(s=ucr(a),s===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");for(i=[],p=0;p<a.length;p++)f=a[p],v=[],f[0]===1?v.push(0):v.push(f[1]),f[1]===1?v.push(0):v.push(1),i.push(v);return[n,s,i]}Qw.exports=fcr});var rb=u((Gkr,xw)=>{"use strict";var Bo=b(),lcr=Me();function ccr(r,e,t,i,n){var a,s,o,v,f;if(r<=0)return i;if(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,a=e[s],i[o]=a,o+=n,f=1,Bo(a)===!1)for(f;f<r;f++){if(s+=t,v=e[s],Bo(v)){a=v;break}(v>a||v===a&&lcr(v))&&(a=v),i[o]=a,o+=n}if(Bo(a))for(f;f<r;f++)i[o]=a,o+=n;return i}xw.exports=ccr});var tb=u((Vkr,eb)=>{"use strict";var Co=b(),pcr=Me();function gcr(r,e,t,i,n,a,s){var o,v,f,l,c;if(r<=0)return n;if(v=i,f=s,o=e[v],n[f]=o,f+=a,c=1,Co(o)===!1)for(c;c<r;c++){if(v+=t,l=e[v],Co(l)){o=l;break}(l>o||l===o&&pcr(l))&&(o=l),n[f]=o,f+=a}if(Co(o))for(c;c<r;c++)n[f]=o,f+=a;return n}eb.exports=gcr});var ab=u((Ukr,nb)=>{"use strict";var mcr=w(),ib=rb(),qcr=tb();mcr(ib,"ndarray",qcr);nb.exports=ib});var sb=u((Hkr,ub)=>{"use strict";var ycr=ab();ub.exports=ycr});var fb=u((Wkr,vb)=>{"use strict";var ob=js();function hcr(r,e,t){var i,n;if(e===1)return ob(t,r);for(i=[],n=0;n<r;n++)i.push(ob(t,e));return i}vb.exports=hcr});var cb=u((kkr,lb)=>{"use strict";function dcr(r,e,t){var i,n;for(i=[],n=0;n<r;n++)i.push(e.call(t,n));return i}lb.exports=dcr});var gb=u((Dkr,pb)=>{"use strict";var wcr=cb();pb.exports=wcr});var yb=u((Xkr,qb)=>{"use strict";var mb=gb();function bcr(r,e,t){var i,n;if(e===1)return mb(r,t);for(i=[],n=0;n<r;n++)i.push(mb(e,t));return i}qb.exports=bcr});var jo=u((Jkr,hb)=>{"use strict";var Ecr=j().isPrimitive;function Ncr(r){return Ecr(r)&&r>0}hb.exports=Ncr});var Go=u((zkr,db)=>{"use strict";var Acr=j().isObject;function Ocr(r){return Acr(r)&&r.valueOf()>0}db.exports=Ocr});var bb=u((Ykr,wb)=>{"use strict";var Scr=jo(),Tcr=Go();function Icr(r){return Scr(r)||Tcr(r)}wb.exports=Icr});var W=u(($kr,Nb)=>{"use strict";var Eb=w(),Vo=bb(),Lcr=jo(),_cr=Go();Eb(Vo,"isPrimitive",Lcr);Eb(Vo,"isObject",_cr);Nb.exports=Vo});var Ob=u((Zkr,Ab)=>{"use strict";var Pcr=I();function Rcr(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&Pcr(r.next)}Ab.exports=Rcr});var Tb=u((Qkr,Sb)=>{"use strict";var Fcr=Ob();Sb.exports=Fcr});var Lb=u((Kkr,Ib)=>{"use strict";function Mcr(r,e){return r[e]}Ib.exports=Mcr});var Pb=u((xkr,_b)=>{"use strict";function Bcr(r,e){return r.get(e)}_b.exports=Bcr});var Fb=u((rDr,Rb)=>{"use strict";function Ccr(r,e,t){r[e]=t}Rb.exports=Ccr});var Bb=u((eDr,Mb)=>{"use strict";function jcr(r,e,t){r.set(t,e)}Mb.exports=jcr});var jb=u((tDr,Cb)=>{"use strict";var Gcr=Lb(),Vcr=Pb(),Ucr=Fb(),Hcr=Bb();function Wcr(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?Vcr:Gcr,setter:e?Hcr:Ucr}}Cb.exports=Wcr});var dt=u((iDr,Gb)=>{"use strict";var kcr=jb();Gb.exports=kcr});var Hb=u((nDr,Ub)=>{"use strict";var Vb=I(),Dcr=Mr(),Xcr=Tb(),Jcr=dt();function zcr(){var r,e,t,i,n,a,s,o;if(r=arguments[0],arguments.length>1)if(Dcr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!Vb(t))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+t+"`.");e=arguments[3]}}else{if(t=arguments[1],!Vb(t))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+t+"`.");e=arguments[2]}if(!Xcr(r))throw new TypeError("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(s=-1,i===void 0){if(i=[],t){for(;s+=1,o=r.next(),!o.done;)i.push(t.call(e,o.value,s));return i}for(;o=r.next(),!o.done;)i.push(o.value);return i}if(n=i.length,a=Jcr(i).setter,t){for(;s<n-1&&(s+=1,o=r.next(),!o.done);)a(i,s,t.call(e,o.value,s));return i}for(;s<n-1&&(s+=1,o=r.next(),!o.done);)a(i,s,o.value);return i}Ub.exports=zcr});var kb=u((aDr,Wb)=>{"use strict";var Ycr=Hb();Wb.exports=Ycr});var Xb=u((uDr,Db)=>{"use strict";var $cr=A();function Zcr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"&&$cr(Symbol,"iterator")&&typeof Symbol.iterator=="symbol"}Db.exports=Zcr});var pa=u((sDr,Jb)=>{"use strict";var Qcr=Xb();Jb.exports=Qcr});var Yb=u((oDr,zb)=>{"use strict";var Kcr=pa(),xcr=Kcr()?Symbol.iterator:null;zb.exports=xcr});var ga=u((vDr,$b)=>{"use strict";var r6r=Yb();$b.exports=r6r});var Qb=u((fDr,Zb)=>{"use strict";function e6r(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}Zb.exports=e6r});var xb=u((lDr,Kb)=>{"use strict";function t6r(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}Kb.exports=t6r});var tE=u((cDr,eE)=>{"use strict";var i6r=er(),rE=Qr(),n6r=Qb(),a6r=xb(),u6r=.7853981633974483,s6r=3061616997868383e-32,o6r=.3333333333333341,v6r=2147483647;function f6r(r,e,t){var i,n,a,s,o,v,f,l,c;return i=i6r(r),n=i&v6r|0,n>=1072010280&&(r<0&&(r=-r,e=-e),c=u6r-r,l=s6r-e,r=c+l,e=0),c=r*r,l=c*c,s=n6r(l),f=c*a6r(l),o=c*r,s=e+c*(o*(s+f)+e),s+=o6r*o,l=r+s,n>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(l*l/(l+f)-s)))):t===1?l:(c=l,rE(c,0),f=s-(c-r),a=-1/l,v=a,rE(v,0),o=1+v*c,v+a*(o+v*f))}eE.exports=f6r});var nE=u((pDr,iE)=>{"use strict";var l6r=tE();iE.exports=l6r});var sE=u((gDr,uE)=>{"use strict";var c6r=er(),aE=nE(),p6r=Ui(),Uo=[0,0],g6r=2147483647,m6r=1072243195,q6r=2146435072,y6r=1044381696;function h6r(r){var e,t;return e=c6r(r),e&=g6r,e<=m6r?e<y6r?r:aE(r,0,1):e>=q6r?NaN:(t=p6r(r,Uo),aE(Uo[0],Uo[1],1-((t&1)<<1)))}uE.exports=h6r});var Ho=u((mDr,oE)=>{"use strict";var d6r=sE();oE.exports=d6r});var ma=u((qDr,vE)=>{"use strict";var w6r=1.5707963267948966;vE.exports=w6r});var qa=u((yDr,fE)=>{"use strict";var b6r=.7853981633974483;fE.exports=b6r});var cE=u((hDr,lE)=>{"use strict";function E6r(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}lE.exports=E6r});var gE=u((dDr,pE)=>{"use strict";function N6r(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}pE.exports=N6r});var yE=u((wDr,qE)=>{"use strict";var A6r=b(),O6r=P(),Wo=ma(),S6r=qa(),T6r=D(),I6r=cE(),L6r=gE(),mE=6123233995736766e-32,_6r=2.414213562373095;function P6r(r){var e,t,i,n;return A6r(r)||r===0?r:r===O6r?Wo:r===T6r?-Wo:(r<0&&(t=!0,r=-r),e=0,r>_6r?(i=Wo,e=1,r=-(1/r)):r<=.66?i=0:(i=S6r,e=2,r=(r-1)/(r+1)),n=r*r,n=n*I6r(n)/L6r(n),n=r*n+r,e===2?n+=.5*mE:e===1&&(n+=mE),i+=n,t?-i:i)}qE.exports=P6r});var ya=u((bDr,hE)=>{"use strict";var R6r=yE();hE.exports=R6r});var ko=u((EDr,dE)=>{"use strict";var F6r=j().isPrimitive;function M6r(r){return F6r(r)&&r>=0}dE.exports=M6r});var Do=u((NDr,wE)=>{"use strict";var B6r=j().isObject;function C6r(r){return B6r(r)&&r.valueOf()>=0}wE.exports=C6r});var EE=u((ADr,bE)=>{"use strict";var j6r=ko(),G6r=Do();function V6r(r){return j6r(r)||G6r(r)}bE.exports=V6r});var Jo=u((ODr,AE)=>{"use strict";var NE=w(),Xo=EE(),U6r=ko(),H6r=Do();NE(Xo,"isPrimitive",U6r);NE(Xo,"isObject",H6r);AE.exports=Xo});var SE=u((SDr,OE)=>{"use strict";var W6r=T(),ha=A(),k6r=Fr().isPrimitive,D6r=xr().isPrimitive,X6r=Ie().isPrimitive,J6r=Jo().isPrimitive;function z6r(r,e){return W6r(e)?ha(e,"period")&&(r.period=e.period,!D6r(e.period))?new TypeError("invalid option. `period` option must be an positive integer. Option: `"+e.period+"`."):ha(e,"amplitude")&&(r.amplitude=e.amplitude,!J6r(e.amplitude))?new TypeError("invalid option. `amplitude` option must be a nonnegative number. Option: `"+e.amplitude+"`."):ha(e,"offset")&&(r.offset=e.offset,!k6r(e.offset))?new TypeError("invalid option. `offset` option must be an integer. Option: `"+e.offset+"`."):ha(e,"iter")&&(r.iter=e.iter,!X6r(e.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}OE.exports=z6r});var _E=u((TDr,LE)=>{"use strict";var zo=w(),TE=ga(),Y6r=Ho(),$6r=ya(),Z6r=ma(),Q6r=Or(),K6r=SE();function IE(r){var e,t,i,n,a,s,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=K6r(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,s=Q6r/e.period,o=e.amplitude/Z6r,v=0,t={},zo(t,"next",f),zo(t,"return",l),TE&&zo(t,TE,c),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*$6r(Y6r(s*a)),done:!1})}function l(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function c(){return IE(e)}}LE.exports=IE});var RE=u((IDr,PE)=>{"use strict";var x6r=_E();PE.exports=x6r});var ME=u((LDr,FE)=>{"use strict";function rpr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}FE.exports=rpr});var CE=u((_Dr,BE)=>{"use strict";function epr(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}BE.exports=epr});var UE=u((PDr,VE)=>{"use strict";var jE=j().isPrimitive,GE=Se(),Zi=w(),tpr=ME(),ipr=CE();function wt(r,e){if(!(this instanceof wt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!jE(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!jE(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return GE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),GE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Zi(wt,"BYTES_PER_ELEMENT",8);Zi(wt.prototype,"BYTES_PER_ELEMENT",8);Zi(wt.prototype,"byteLength",16);Zi(wt.prototype,"toString",tpr);Zi(wt.prototype,"toJSON",ipr);VE.exports=wt});var $t=u((RDr,HE)=>{"use strict";var npr=UE();HE.exports=npr});var kE=u((FDr,WE)=>{"use strict";var apr=typeof Math.fround=="function"?Math.fround:null;WE.exports=apr});var JE=u((MDr,XE)=>{"use strict";var upr=zr(),DE=new upr(1);function spr(r){return DE[0]=r,DE[0]}XE.exports=spr});var $E=u((BDr,YE)=>{"use strict";var zE=kE(),opr=JE(),Yo;typeof zE=="function"?Yo=zE:Yo=opr;YE.exports=Yo});var QE=u((CDr,ZE)=>{"use strict";function vpr(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}ZE.exports=vpr});var xE=u((jDr,KE)=>{"use strict";function fpr(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}KE.exports=fpr});var nN=u((GDr,iN)=>{"use strict";var rN=j().isPrimitive,eN=Se(),Qi=w(),tN=$E(),lpr=QE(),cpr=xE();function bt(r,e){if(!(this instanceof bt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!rN(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!rN(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return eN(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:tN(r)}),eN(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:tN(e)}),this}Qi(bt,"BYTES_PER_ELEMENT",4);Qi(bt.prototype,"BYTES_PER_ELEMENT",4);Qi(bt.prototype,"byteLength",8);Qi(bt.prototype,"toString",lpr);Qi(bt.prototype,"toJSON",cpr);iN.exports=bt});var Zt=u((VDr,aN)=>{"use strict";var ppr=nN();aN.exports=ppr});var sN=u((UDr,uN)=>{"use strict";var gpr=$t(),mpr=Zt();function qpr(r){return r instanceof gpr||r instanceof mpr?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}uN.exports=qpr});var jr=u((HDr,oN)=>{"use strict";var ypr=sN();oN.exports=ypr});var fN=u((WDr,vN)=>{"use strict";var hpr={Complex64:"complex64",Complex128:"complex128"};vN.exports=hpr});var cN=u((kDr,lN)=>{"use strict";var dpr=Zt(),wpr=$t(),bpr=[dpr,wpr];lN.exports=bpr});var gN=u((DDr,pN)=>{"use strict";var Epr=["complex64","complex128"];pN.exports=Epr});var yN=u((XDr,qN)=>{"use strict";var Npr=Te(),Apr=fN(),Opr=cN(),mN=gN(),Spr=mN.length;function Tpr(r){var e;for(e=0;e<Spr;e++)if(r instanceof Opr[e])return mN[e];return Apr[Npr(r)]||null}qN.exports=Tpr});var $o=u((JDr,hN)=>{"use strict";var Ipr=yN();hN.exports=Ipr});var wN=u((zDr,dN)=>{"use strict";var Lpr=4294967295;dN.exports=Lpr});var EN=u((YDr,bN)=>{"use strict";var _pr=Ar(),Ppr=wN();function Rpr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&_pr(r.length)&&r.length>=0&&r.length<=Ppr}bN.exports=Rpr});var Et=u(($Dr,NN)=>{"use strict";var Fpr=EN();NN.exports=Fpr});var ON=u((ZDr,AN)=>{"use strict";var Mpr=rr(),Bpr=typeof ArrayBuffer=="function";function Cpr(r){return Bpr&&r instanceof ArrayBuffer||Mpr(r)==="[object ArrayBuffer]"}AN.exports=Cpr});var Zo=u((QDr,SN)=>{"use strict";var jpr=ON();SN.exports=jpr});var IN=u((KDr,TN)=>{"use strict";var Gpr=Se();function Vpr(r,e,t){Gpr(r,e,{configurable:!1,enumerable:!1,get:t})}TN.exports=Vpr});var _=u((xDr,LN)=>{"use strict";var Upr=IN();LN.exports=Upr});var PN=u((rXr,_N)=>{"use strict";function Hpr(r){return r.re}_N.exports=Hpr});var Ce=u((eXr,RN)=>{"use strict";var Wpr=PN();RN.exports=Wpr});var MN=u((tXr,FN)=>{"use strict";function kpr(r){return r.im}FN.exports=kpr});var je=u((iXr,BN)=>{"use strict";var Dpr=MN();BN.exports=Dpr});var jN=u((nXr,CN)=>{"use strict";var Xpr=zr();function Jpr(r,e){return new Xpr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}CN.exports=Jpr});var Qt=u((aXr,GN)=>{"use strict";var zpr=jN();GN.exports=zpr});var UN=u((uXr,VN)=>{"use strict";var Ypr=cr();function $pr(r,e){return new Ypr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}VN.exports=$pr});var Kt=u((sXr,HN)=>{"use strict";var Zpr=UN();HN.exports=Zpr});var kN=u((oXr,WN)=>{"use strict";var Qpr=Et(),Kpr=jr(),xpr=Ce(),r4r=je();function e4r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,Qpr(i)&&i.length>=2)e.push(i[0],i[1]);else if(Kpr(i))e.push(xpr(i),r4r(i));else return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");return e}WN.exports=e4r});var XN=u((vXr,DN)=>{"use strict";var t4r=Et(),i4r=jr(),n4r=Ce(),a4r=je();function u4r(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),t4r(a)&&a.length>=2)i.push(a[0],a[1]);else if(i4r(a))i.push(n4r(a),a4r(a));else return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+a+"`.");return i}DN.exports=u4r});var zN=u((fXr,JN)=>{"use strict";var s4r=jr(),o4r=Ce(),v4r=je();function f4r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!s4r(i))return null;r[a]=o4r(i),r[a+1]=v4r(i),a+=2}return r}JN.exports=f4r});var tA=u((lXr,eA)=>{"use strict";var Ki=Ie().isPrimitive,YN=Et(),Ko=Mr(),$N=Zo(),ZN=Mn(),l4r=lr(),Nt=I(),xt=jr(),da=Zn(),Qo=Ar(),c4r=pa(),ri=ga(),gr=w(),Ea=_(),_r=cr(),QN=$t(),wa=Ce(),ba=je(),p4r=Qt(),g4r=Kt(),m4r=dt(),KN=kN(),q4r=XN(),y4r=zN(),Sr=_r.BYTES_PER_ELEMENT*2,xN=c4r();function ei(r){return r instanceof K||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function rA(r){return r===K||r.name==="Complex64Array"}function h4r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Sr/2}function d4r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Sr}function K(){var r,e,t,i;if(e=arguments.length,!(this instanceof K))return e===0?new K:e===1?new K(arguments[0]):e===2?new K(arguments[0],arguments[1]):new K(arguments[0],arguments[1],arguments[2]);if(e===0)t=new _r(0);else if(e===1)if(Ki(arguments[0]))t=new _r(arguments[0]*2);else if(Ko(arguments[0]))if(t=arguments[0],i=t.length,i&&l4r(t)&&xt(t[0])){if(t=y4r(new _r(i*2),t),t===null){if(!da(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new _r(arguments[0])}}else{if(h4r(t))t=p4r(t,0);else if(d4r(t))t=g4r(t,0);else if(!da(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new _r(t)}else if($N(arguments[0])){if(t=arguments[0],!Qo(t.byteLength/Sr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Sr+". Byte length: `"+t.byteLength+"`.");t=new _r(t)}else if(ZN(arguments[0])){if(t=arguments[0],xN===!1)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!Nt(t[ri]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(t=t[ri](),!Nt(t.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(t=KN(t),t instanceof Error)throw t;t=new _r(t)}else throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");else{if(t=arguments[0],!$N(t))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(r=arguments[1],!Ki(r))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Qo(r/Sr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Sr+". Value: `"+r+"`.");if(e===2){if(i=t.byteLength-r,!Qo(i/Sr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Sr+". View byte length: `"+i+"`.");t=new _r(t,r)}else{if(i=arguments[2],!Ki(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*Sr>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*Sr+"`.");t=new _r(t,r,i*2)}}return gr(this,"_buffer",t),gr(this,"_length",t.length/2),this}gr(K,"BYTES_PER_ELEMENT",Sr);gr(K,"name","Complex128Array");gr(K,"from",function(e){var t,i,n,a,s,o,v,f,l,c,p;if(!Nt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!rA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!Nt(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");i>2&&(t=arguments[2])}if(ei(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,e.get(c),c),xt(l))s[p]=wa(l),s[p+1]=ba(l);else if(YN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(Ko(e)){if(n){for(v=e.length,o=m4r(e),c=0;c<v;c++)if(!xt(o.getter(e,c))){f=!0;break}if(f){if(!da(v))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+v+"`.");for(a=new this(v/2),s=a._buffer,c=0;c<v;c++)s[c]=n.call(t,o.getter(e,c),c);return a}for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,o.getter(e,c),c),xt(l))s[p]=wa(l),s[p+1]=ba(l);else if(YN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(ZN(e)&&xN&&Nt(e[ri])){if(s=e[ri](),!Nt(s.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(n?o=q4r(s,n,t):o=KN(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,c=0;c<v;c++)s[c]=o[c];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")});gr(K,"of",function(){var e,t;if(!Nt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!rA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Ea(K.prototype,"buffer",function(){return this._buffer.buffer});Ea(K.prototype,"byteLength",function(){return this._buffer.byteLength});Ea(K.prototype,"byteOffset",function(){return this._buffer.byteOffset});gr(K.prototype,"BYTES_PER_ELEMENT",K.BYTES_PER_ELEMENT);gr(K.prototype,"copyWithin",function(e,t){if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});gr(K.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},gr(i,"next",v),gr(i,"return",f),ri&&gr(i,ri,l),i;function v(){var c;return s+=1,a||s>=n?{done:!0}:(o+=2,c=new QN(e[o],e[o+1]),{value:[s,c],done:!1})}function f(c){return a=!0,arguments.length?{value:c,done:!0}:{done:!0}}function l(){return t.entries()}});gr(K.prototype,"get",function(e){var t;if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ki(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new QN(t[e],t[e+1])});Ea(K.prototype,"length",function(){return this._length});gr(K.prototype,"set",function(e){var t,i,n,a,s,o,v,f,l;if(!ei(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Ki(i))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+i+"`.")}else i=0;if(xt(e)){if(i>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+i+"`.");i*=2,n[i]=wa(e),n[i+1]=ba(e);return}if(ei(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,l=n.byteOffset+i*Sr,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new _r(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(Ko(e)){for(o=e.length,f=0;f<o;f++)if(!xt(e[f])){s=!0;break}if(s){if(!da(o))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+o+"`.");if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,l=n.byteOffset+i*Sr,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new _r(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=wa(v),n[i+1]=ba(v),i+=2;return}throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.")});eA.exports=K});var xi=u((cXr,iA)=>{"use strict";var w4r=tA();iA.exports=w4r});var aA=u((pXr,nA)=>{"use strict";function b4r(r){return r.re}nA.exports=b4r});var Ge=u((gXr,uA)=>{"use strict";var E4r=aA();uA.exports=E4r});var oA=u((mXr,sA)=>{"use strict";function N4r(r){return r.im}sA.exports=N4r});var Ve=u((qXr,vA)=>{"use strict";var A4r=oA();vA.exports=A4r});var lA=u((yXr,fA)=>{"use strict";var O4r=Et(),S4r=jr(),T4r=Ge(),I4r=Ve();function L4r(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,O4r(i)&&i.length>=2)e.push(i[0],i[1]);else if(S4r(i))e.push(T4r(i),I4r(i));else return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");return e}fA.exports=L4r});var pA=u((hXr,cA)=>{"use strict";var _4r=Et(),P4r=jr(),R4r=Ge(),F4r=Ve();function M4r(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),_4r(a)&&a.length>=2)i.push(a[0],a[1]);else if(P4r(a))i.push(R4r(a),F4r(a));else return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+a+"`.");return i}cA.exports=M4r});var mA=u((dXr,gA)=>{"use strict";var B4r=jr(),C4r=Ge(),j4r=Ve();function G4r(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!B4r(i))return null;r[a]=C4r(i),r[a+1]=j4r(i),a+=2}return r}gA.exports=G4r});var AA=u((wXr,NA)=>{"use strict";var rn=Ie().isPrimitive,qA=Et(),r1=Mr(),yA=Zo(),hA=Mn(),V4r=lr(),At=I(),ti=jr(),Na=Zn(),xo=Ar(),U4r=pa(),ii=ga(),mr=w(),Sa=_(),Pr=zr(),dA=Zt(),Aa=Ge(),Oa=Ve(),H4r=Qt(),W4r=Kt(),k4r=dt(),wA=lA(),D4r=pA(),X4r=mA(),Tr=Pr.BYTES_PER_ELEMENT*2,bA=U4r();function ni(r){return r instanceof x||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function EA(r){return r===x||r.name==="Complex128Array"}function J4r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Tr}function z4r(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Tr*2}function x(){var r,e,t,i;if(e=arguments.length,!(this instanceof x))return e===0?new x:e===1?new x(arguments[0]):e===2?new x(arguments[0],arguments[1]):new x(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Pr(0);else if(e===1)if(rn(arguments[0]))t=new Pr(arguments[0]*2);else if(r1(arguments[0]))if(t=arguments[0],i=t.length,i&&V4r(t)&&ti(t[0])){if(t=X4r(new Pr(i*2),t),t===null){if(!Na(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Pr(arguments[0])}}else{if(J4r(t))t=H4r(t,0);else if(z4r(t))t=W4r(t,0);else if(!Na(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Pr(t)}else if(yA(arguments[0])){if(t=arguments[0],!xo(t.byteLength/Tr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Tr+". Byte length: `"+t.byteLength+"`.");t=new Pr(t)}else if(hA(arguments[0])){if(t=arguments[0],bA===!1)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!At(t[ii]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(t=t[ii](),!At(t.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(t=wA(t),t instanceof Error)throw t;t=new Pr(t)}else throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");else{if(t=arguments[0],!yA(t))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(r=arguments[1],!rn(r))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!xo(r/Tr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Tr+". Value: `"+r+"`.");if(e===2){if(i=t.byteLength-r,!xo(i/Tr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Tr+". View byte length: `"+i+"`.");t=new Pr(t,r)}else{if(i=arguments[2],!rn(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*Tr>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*Tr+"`.");t=new Pr(t,r,i*2)}}return mr(this,"_buffer",t),mr(this,"_length",t.length/2),this}mr(x,"BYTES_PER_ELEMENT",Tr);mr(x,"name","Complex64Array");mr(x,"from",function(e){var t,i,n,a,s,o,v,f,l,c,p;if(!At(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!EA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!At(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");i>2&&(t=arguments[2])}if(ni(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,e.get(c),c),ti(l))s[p]=Aa(l),s[p+1]=Oa(l);else if(qA(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(r1(e)){if(n){for(v=e.length,o=k4r(e),c=0;c<v;c++)if(!ti(o.getter(e,c))){f=!0;break}if(f){if(!Na(v))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+v+"`.");for(a=new this(v/2),s=a._buffer,c=0;c<v;c++)s[c]=n.call(t,o.getter(e,c),c);return a}for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,o.getter(e,c),c),ti(l))s[p]=Aa(l),s[p+1]=Oa(l);else if(qA(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(hA(e)&&bA&&At(e[ii])){if(s=e[ii](),!At(s.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(n?o=D4r(s,n,t):o=wA(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,c=0;c<v;c++)s[c]=o[c];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")});mr(x,"of",function(){var e,t;if(!At(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!EA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});Sa(x.prototype,"buffer",function(){return this._buffer.buffer});Sa(x.prototype,"byteLength",function(){return this._buffer.byteLength});Sa(x.prototype,"byteOffset",function(){return this._buffer.byteOffset});mr(x.prototype,"BYTES_PER_ELEMENT",x.BYTES_PER_ELEMENT);mr(x.prototype,"copyWithin",function(e,t){if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});mr(x.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},mr(i,"next",v),mr(i,"return",f),ii&&mr(i,ii,l),i;function v(){var c;return s+=1,a||s>=n?{done:!0}:(o+=2,c=new dA(e[o],e[o+1]),{value:[s,c],done:!1})}function f(c){return a=!0,arguments.length?{value:c,done:!0}:{done:!0}}function l(){return t.entries()}});mr(x.prototype,"get",function(e){var t;if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!rn(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new dA(t[e],t[e+1])});Sa(x.prototype,"length",function(){return this._length});mr(x.prototype,"set",function(e){var t,i,n,a,s,o,v,f,l;if(!ni(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!rn(i))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+i+"`.")}else i=0;if(ti(e)){if(i>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+i+"`.");i*=2,n[i]=Aa(e),n[i+1]=Oa(e);return}if(ni(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,l=n.byteOffset+i*Tr,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Pr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(r1(e)){for(o=e.length,f=0;f<o;f++)if(!ti(e[f])){s=!0;break}if(s){if(!Na(o))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+o+"`.");if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,l=n.byteOffset+i*Tr,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Pr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=Aa(v),n[i+1]=Oa(v),i+=2;return}throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.")});NA.exports=x});var en=u((bXr,OA)=>{"use strict";var Y4r=AA();OA.exports=Y4r});var TA=u((EXr,SA)=>{"use strict";var $4r=cr(),Z4r=zr(),Q4r=xi(),K4r=en(),x4r={float64:$4r,float32:Z4r,complex128:Q4r,complex64:K4r};SA.exports=x4r});var LA=u((NXr,IA)=>{"use strict";var r8r=TA();function e8r(r){return r8r[r]||null}IA.exports=e8r});var PA=u((AXr,_A)=>{"use strict";var t8r=LA();_A.exports=t8r});var FA=u((OXr,RA)=>{"use strict";function i8r(r,e,t,i){var n,a,s,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,s=(e-r)/a,o=1;o<a;o++)n.push(r+s*o);return i&&n.push(e),n}RA.exports=i8r});var VA=u((SXr,GA)=>{"use strict";var n8r=Zt(),a8r=$t(),MA=Ce(),BA=je(),CA=Ge(),jA=Ve();function u8r(r,e,t,i,n,a){var s,o,v,f,l,c,p,q,y,m,g,h,E;if(n===0)return[];if(o=0,r==="float64"?(f=e,c=0):r==="complex64"?(o+=1,f=CA(e),c=jA(e)):(f=MA(e),c=BA(e)),t==="float64"?(l=i,p=0):t==="complex64"?(o+=1,l=CA(i),p=jA(i)):(l=MA(i),p=BA(i)),o===2?s=n8r:s=a8r,n===1)return a?[new s(l,p)]:[new s(f,c)];for(v=[new s(f,c)],a?h=n-1:h=n,m=(l-f)/h,g=(p-c)/h,E=1;E<h;E++)q=f+m*E,y=c+g*E,v.push(new s(q,y));return a&&v.push(new s(l,p)),v}GA.exports=u8r});var e1=u((TXr,UA)=>{"use strict";function s8r(r,e,t,i,n){var a,s,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,s=(t-e)/a,o=1;o<a;o++)r[o]=e+s*o;return n&&(r[a]=t),r}UA.exports=s8r});var t1=u((IXr,XA)=>{"use strict";var HA=Ce(),WA=je(),kA=Ge(),DA=Ve();function o8r(r,e,t,i,n,a,s){var o,v,f,l,c,p,q,y,m;if(a===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=kA(t),f=DA(t)):(o=HA(t),f=WA(t)),i==="float64"?(v=n,l=0):i==="complex64"?(v=kA(n),l=DA(n)):(v=HA(n),l=WA(n)),a===1)return s?(r[0]=v,r[1]=l):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,s?q=a-1:q=a,c=(v-o)/q,p=(l-f)/q,m=2,y=1;y<q;y++)r[m]=o+c*y,r[m+1]=f+p*y,m+=2;return s&&(r[m]=v,r[m+1]=l),r}XA.exports=o8r});var i1=u((LXr,zA)=>{"use strict";var v8r=T(),JA=A(),f8r=z().isPrimitive,l8r=ur().isPrimitive;function c8r(r,e){return v8r(e)?JA(e,"dtype")&&(r.dtype=e.dtype,!f8r(r.dtype))?new TypeError("invalid option. `dtype` option must be a string. Option: `"+r.dtype+"`."):JA(e,"endpoint")&&(r.endpoint=e.endpoint,!l8r(r.endpoint))?new TypeError("invalid option. `endpoint` option must be a boolean. Option: `"+r.endpoint+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}zA.exports=c8r});var n1=u((_Xr,p8r)=>{p8r.exports={endpoint:!0}});var rO=u((PXr,xA)=>{"use strict";var YA=jr(),$A=j().isPrimitive,g8r=Ie().isPrimitive,ZA=b(),QA=$o(),m8r=PA(),q8r=Qt(),y8r=Kt(),h8r=FA(),d8r=VA(),w8r=e1(),KA=t1(),b8r=i1(),E8r=n1();function N8r(r,e,t){var i,n,a,s,o,v,f;if(typeof r=="object"){if(o=QA(r),o===null){if(!YA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");o="complex128"}f=!0}else{if(!$A(r)||ZA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");o="float64"}if(typeof e=="object"){if(v=QA(e),v===null){if(!YA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");v="complex128"}f=!0}else{if(!$A(e)||ZA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");v="float64"}if(!g8r(t))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+t+"`.");if(i={endpoint:E8r.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=b8r(i,arguments[3]),a))throw a;if(i.dtype==="generic")return f?d8r(o,r,v,e,t,i.endpoint):h8r(r,e,t,i.endpoint);if(n=m8r(i.dtype),n===null)throw new TypeError('invalid argument. `dtype` option must be a real or complex floating-point data type or "generic". Option: `'+i.dtype+"`.");if(s=new n(t),i.dtype==="complex64")return KA(q8r(s,0),o,r,v,e,t,i.endpoint),s;if(i.dtype==="complex128")return KA(y8r(s,0),o,r,v,e,t,i.endpoint),s;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return w8r(s,r,e,t,i.endpoint)}xA.exports=N8r});var tO=u((RXr,eO)=>{"use strict";var A8r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};eO.exports=A8r});var nO=u((FXr,iO)=>{"use strict";var O8r=cr(),S8r=zr(),T8r=vr(),I8r=ct(),L8r=Vt(),_8r=Fi(),P8r=Gt(),R8r=Ri(),F8r=Pi(),M8r=en(),B8r=xi(),C8r=[O8r,S8r,I8r,T8r,_8r,L8r,F8r,P8r,R8r,M8r,B8r];iO.exports=C8r});var uO=u((MXr,aO)=>{"use strict";var j8r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];aO.exports=j8r});var vO=u((BXr,oO)=>{"use strict";var G8r=st(),V8r=lr(),U8r=Te(),H8r=tO(),W8r=nO(),sO=uO(),k8r=sO.length;function D8r(r){var e;if(V8r(r))return"generic";if(G8r(r))return null;for(e=0;e<k8r;e++)if(r instanceof W8r[e])return sO[e];return H8r[U8r(r)]||null}oO.exports=D8r});var lO=u((CXr,fO)=>{"use strict";var X8r=vO();fO.exports=X8r});var yO=u((jXr,qO)=>{"use strict";var J8r=Zt(),z8r=$t(),cO=Ce(),pO=je(),gO=Ge(),mO=Ve();function Y8r(r,e,t,i,n,a,s){var o,v,f,l,c,p,q,y,m,g,h,E,N,G;if(a===0)return r;if(v=0,e==="float64"?(f=t,c=0):e==="complex64"?(v+=1,f=gO(t),c=mO(t)):(f=cO(t),c=pO(t)),i==="float64"?(l=n,p=0):i==="complex64"?(v+=1,l=gO(n),p=mO(n)):(l=cO(n),p=pO(n)),v===2?o=J8r:o=z8r,y=r.data,q=r.setter,a===1)return s?q(y,0,new o(l,p)):q(y,0,new o(f,c)),r;for(q(y,0,new o(f,c)),s?N=a-1:N=a,h=(l-f)/N,E=(p-c)/N,G=1;G<N;G++)m=f+h*G,g=c+E*G,q(y,G,new o(m,g));return s&&q(y,N,new o(l,p)),r}qO.exports=Y8r});var dO=u((GXr,hO)=>{"use strict";function $8r(r,e,t,i,n){var a,s,o,v,f;if(i===0)return r;if(a=r.data,s=r.setter,i===1)return n?s(a,0,t):s(a,0,e),r;for(s(a,0,e),n?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)s(a,f,e+v*f);return n&&s(a,o,t),r}hO.exports=$8r});var TO=u((VXr,SO)=>{"use strict";var wO=jr(),bO=j().isPrimitive,Z8r=Mr(),EO=b(),NO=$o(),Q8r=lO(),K8r=Qt(),x8r=Kt(),AO=dt(),r5r=yO(),e5r=dO(),OO=t1(),t5r=e1(),i5r=i1(),n5r=n1();function a5r(r,e,t){var i,n,a,s,o,v,f;if(typeof r=="object"){if(a=NO(r),a===null){if(!wO(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");a="complex128"}o=!0}else{if(!bO(r)||EO(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");a="float64"}if(typeof e=="object"){if(s=NO(e),s===null){if(!wO(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");s="complex128"}o=!0}else{if(!bO(e)||EO(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");s="float64"}if(!Z8r(t))throw new TypeError("invalid argument. Third argument must be an array-like object. Value: `"+t+"`.");if(i={endpoint:n5r.endpoint},arguments.length>3&&(n=i5r(i,arguments[3]),n))throw n;if(v=Q8r(t),v===null&&(v="generic"),v==="complex64")return OO(K8r(t,0),a,r,s,e,t.length,i.endpoint),t;if(v==="complex128")return OO(x8r(t,0),a,r,s,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=AO(t),r5r(f,a,r,s,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=AO(t),f.accessors?(e5r(f,r,e,t.length,i.endpoint),t):(t5r(t,r,e,t.length,i.endpoint),t)}SO.exports=a5r});var _O=u((UXr,LO)=>{"use strict";var u5r=w(),IO=rO(),s5r=TO();u5r(IO,"assign",s5r);LO.exports=IO});var RO=u((HXr,PO)=>{"use strict";var o5r=b(),v5r=Me();function f5r(r,e,t){var i,n,a,s;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],s=1;s<r;s++){if(n+=t,a=e[n],o5r(a))return a;(a>i||a===i&&v5r(a))&&(i=a)}return i}PO.exports=f5r});var MO=u((WXr,FO)=>{"use strict";var l5r=b(),c5r=Me();function p5r(r,e,t,i){var n,a,s,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,s=e[a],l5r(s))return s;(s>n||s===n&&c5r(s))&&(n=s)}return n}FO.exports=p5r});var jO=u((kXr,CO)=>{"use strict";var g5r=w(),BO=RO(),m5r=MO();g5r(BO,"ndarray",m5r);CO.exports=BO});var VO=u((DXr,GO)=>{"use strict";var q5r=jO();GO.exports=q5r});var WO=u((XXr,HO)=>{"use strict";var UO=b(),y5r=Me();function h5r(r,e,t,i,n){var a,s,o,v,f;if(r<=0)return NaN;for(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,f=0;f<r&&i[o]!==0;f++)s+=t,o+=n;if(f===r)return NaN;if(a=e[s],UO(a))return a;for(f+=1,f;f<r;f++)if(s+=t,o+=n,!i[o]){if(v=e[s],UO(v))return v;(v>a||v===a&&y5r(v))&&(a=v)}return a}HO.exports=h5r});var XO=u((JXr,DO)=>{"use strict";var kO=b(),d5r=Me();function w5r(r,e,t,i,n,a,s){var o,v,f,l,c;if(r<=0)return NaN;for(v=i,f=s,c=0;c<r&&n[f]!==0;c++)v+=t,f+=a;if(c===r)return NaN;if(o=e[v],kO(o))return o;for(c+=1,c;c<r;c++)if(v+=t,f+=a,!n[f]){if(l=e[v],kO(l))return l;(l>o||l===o&&d5r(l))&&(o=l)}return o}DO.exports=w5r});var YO=u((zXr,zO)=>{"use strict";var b5r=w(),JO=WO(),E5r=XO();b5r(JO,"ndarray",E5r);zO.exports=JO});var ZO=u((YXr,$O)=>{"use strict";function N5r(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError("invalid argument. `left` must be one of the following strings: 'closed' or 'open'. Value: `"+i+"`.");if(n!=="closed"&&n!=="open")throw new TypeError("invalid argument. `right` must be one of the following strings: 'closed' or 'open'. Value: `"+n+"`.")}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}$O.exports=N5r});var KO=u(($Xr,QO)=>{"use strict";var A5r=ZO();QO.exports=A5r});var rS=u((ZXr,xO)=>{"use strict";var O5r=j().isPrimitive,S5r=KO(),T5r=S();function I5r(r,e,t,i,n,a){var s,o;if(!(O5r(r)&&S5r(r,e,t,i,n)))throw i==="closed"?s="[":s="(",n==="closed"?o="]":o=")",new TypeError(T5r("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,s,e,t,o,String(r)))}xO.exports=I5r});var tS=u((QXr,eS)=>{"use strict";var L5r=ur().isPrimitive,_5r=S();function P5r(r,e){if(!L5r(r))throw new TypeError(_5r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}eS.exports=P5r});var nS=u((KXr,iS)=>{"use strict";function R5r(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}iS.exports=R5r});var uS=u((xXr,aS)=>{"use strict";var F5r=S(),M5r=nS();function B5r(r,e,t){if(!M5r(r,e))throw new TypeError(F5r("invalid argument. %s must be broadcast compatible.",t))}aS.exports=B5r});var oS=u((rJr,sS)=>{"use strict";function C5r(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}sS.exports=C5r});var fS=u((eJr,vS)=>{"use strict";var j5r=S(),G5r=oS();function V5r(r,e,t,i){if(!G5r(r,e))throw new TypeError(j5r("invalid argument. %s must be broadcast compatible with %s.",t,i))}vS.exports=V5r});var a1=u((tJr,lS)=>{"use strict";var U5r=S();function H5r(r,e){if(r===void 0)throw new Error(U5r("invalid invocation. Must provide %s.",e))}lS.exports=H5r});var pS=u((iJr,cS)=>{"use strict";var W5r=S();function k5r(r,e,t,i){if(!(r>e))throw new TypeError(W5r("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}cS.exports=k5r});var mS=u((nJr,gS)=>{"use strict";var D5r=S();function X5r(r,e,t,i){if(!(r>=e))throw new TypeError(D5r("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}gS.exports=X5r});var yS=u((aJr,qS)=>{"use strict";var J5r=Fr().isPrimitive,z5r=S();function Y5r(r,e){if(!J5r(r))throw new TypeError(z5r("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}qS.exports=Y5r});var dS=u((uJr,hS)=>{"use strict";var $5r=S();function Z5r(r,e,t,i){if(!(r<e))throw new TypeError($5r("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}hS.exports=Z5r});var bS=u((sJr,wS)=>{"use strict";var Q5r=S();function K5r(r,e,t,i){if(!(r<=e))throw new TypeError(Q5r("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}wS.exports=K5r});var NS=u((oJr,ES)=>{"use strict";var x5r=Ie().isPrimitive,r9r=S();function e9r(r,e){if(!x5r(r))throw new TypeError(r9r("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}ES.exports=e9r});var OS=u((vJr,AS)=>{"use strict";var t9r=Jo().isPrimitive,i9r=S();function n9r(r,e){if(!t9r(r))throw new TypeError(i9r("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}AS.exports=n9r});var TS=u((fJr,SS)=>{"use strict";var a9r=j().isPrimitive,u9r=S();function s9r(r,e){if(!a9r(r))throw new TypeError(u9r("invalid argument. %s must be a number. Value: %s.",e,String(r)))}SS.exports=s9r});var LS=u((lJr,IS)=>{"use strict";var o9r=S();function v9r(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(o9r('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}IS.exports=v9r});var u1=u((cJr,_S)=>{"use strict";var f9r=xr().isPrimitive,l9r=S();function c9r(r,e){if(!f9r(r))throw new TypeError(l9r("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}_S.exports=c9r});var RS=u((pJr,PS)=>{"use strict";var p9r=W().isPrimitive,g9r=S();function m9r(r,e){if(!p9r(r))throw new TypeError(g9r("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}PS.exports=m9r});var s1=u((gJr,FS)=>{"use strict";var q9r=j().isPrimitive;function y9r(r){return q9r(r)&&r>=0&&r<=1}FS.exports=y9r});var o1=u((mJr,MS)=>{"use strict";var h9r=j().isObject;function d9r(r){return h9r(r)&&r.valueOf()>=0&&r.valueOf()<=1}MS.exports=d9r});var CS=u((qJr,BS)=>{"use strict";var w9r=s1(),b9r=o1();function E9r(r){return w9r(r)||b9r(r)}BS.exports=E9r});var tn=u((yJr,GS)=>{"use strict";var jS=w(),v1=CS(),N9r=s1(),A9r=o1();jS(v1,"isPrimitive",N9r);jS(v1,"isObject",A9r);GS.exports=v1});var US=u((hJr,VS)=>{"use strict";var O9r=tn().isPrimitive,S9r=S();function T9r(r,e){if(!O9r(r))throw new TypeError(S9r("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}VS.exports=T9r});var WS=u((dJr,HS)=>{"use strict";var I9r=lr(),L9r=S();function _9r(r,e){if(!I9r(r))throw new TypeError(L9r("invalid argument. %s must be a range. Value: %s.",e,String(r)))}HS.exports=_9r});var DS=u((wJr,kS)=>{"use strict";function P9r(r){return r.length===1||r[0].length===1}kS.exports=P9r});var JS=u((bJr,XS)=>{"use strict";var R9r=lr(),F9r=DS();function M9r(r){return R9r(r)&&F9r(r)}XS.exports=M9r});var YS=u((EJr,zS)=>{"use strict";var B9r=S(),C9r=JS();function j9r(r,e){if(!C9r(r))throw new TypeError(B9r("invalid argument. %s must consist of only a single row or a single column.",e))}zS.exports=j9r});var ZS=u((NJr,$S)=>{"use strict";function G9r(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}$S.exports=G9r});var KS=u((AJr,QS)=>{"use strict";var V9r=S(),U9r=ZS();function H9r(r,e,t){if(!U9r(r,e))throw new TypeError(V9r("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}QS.exports=H9r});var rT=u((OJr,xS)=>{"use strict";var W9r=z().isPrimitive,k9r=S();function D9r(r,e){if(!W9r(r))throw new TypeError(k9r("invalid argument. %s must be a string. Value: %s.",e,String(r)))}xS.exports=D9r});var tT=u((SJr,eT)=>{"use strict";var X9r=S();function J9r(r){throw new Error(X9r("invalid argument. Unrecognized option name. Value: %s.",String(r)))}eT.exports=J9r});var aT=u((TJr,nT)=>{"use strict";var iT=u1(),z9r=a1();function Y9r(r,e,t){iT(r,"Number of rows"),iT(e,"Number of columns"),z9r(t,"a pseudorandom number generator seed")}nT.exports=Y9r});var sT=u((IJr,uT)=>{"use strict";var $9r=lr(),Z9r=Fr().isPrimitive,Q9r=S(),K9r=ca();function x9r(r){if(Z9r(r))return r;if($9r(r))return K9r(r);throw new TypeError(Q9r("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}uT.exports=x9r});var vT=u((LJr,oT)=>{"use strict";var Y={};Y.isBetween=rS();Y.isBoolean=tS();Y.isBroadcastCompatible=uS();Y.isBroadcastCompatibleWith=fS();Y.isDefined=a1();Y.isGreaterThan=pS();Y.isGreaterThanEqual=mS();Y.isInteger=yS();Y.isLessThan=dS();Y.isLessThanEqual=bS();Y.isNonNegativeInteger=NS();Y.isNonNegativeNumber=OS();Y.isNumber=TS();Y.isOneOf=LS();Y.isPositiveInteger=u1();Y.isPositiveNumber=RS();Y.isProbability=US();Y.isRange=WS();Y.isRange1d=YS();Y.isSameShape=KS();Y.isString=rT();Y.unrecognizedOptionName=tT();Y.verifyCommonPRNGArgs=aT();Y.verifyPRNGSeed=sT();oT.exports=Y});var lT=u((_Jr,fT)=>{"use strict";var f1=4;function r7r(r,e,t,i,n,a){var s,o,v,f;if(r<=0||e===0)return n;if(i===1&&a===1){if(v=r%f1,v>0)for(f=0;f<v;f++)n[f]+=e*t[f];if(r<f1)return n;for(f=v;f<r;f+=f1)n[f]+=e*t[f],n[f+1]+=e*t[f+1],n[f+2]+=e*t[f+2],n[f+3]+=e*t[f+3];return n}for(i<0?s=(1-r)*i:s=0,a<0?o=(1-r)*a:o=0,f=0;f<r;f++)n[o]+=e*t[s],s+=i,o+=a;return n}fT.exports=r7r});var pT=u((PJr,cT)=>{"use strict";var nn=4;function e7r(r,e,t,i,n,a,s,o){var v,f,l,c;if(r<=0||e===0)return a;if(v=n,f=o,i===1&&s===1){if(l=r%nn,l>0)for(c=0;c<l;c++)a[f]+=e*t[v],v+=i,f+=s;if(r<nn)return a;for(c=l;c<r;c+=nn)a[f]+=e*t[v],a[f+1]+=e*t[v+1],a[f+2]+=e*t[v+2],a[f+3]+=e*t[v+3],v+=nn,f+=nn;return a}for(c=0;c<r;c++)a[f]+=e*t[v],v+=i,f+=s;return a}cT.exports=e7r});var l1=u((RJr,mT)=>{"use strict";var t7r=w(),gT=lT(),i7r=pT();t7r(gT,"ndarray",i7r);mT.exports=gT});var yT=u((FJr,qT)=>{"use strict";var c1={};c1.daxpy=l1().ndarray;c1.saxpy=l1().ndarray;qT.exports=c1});var dT=u((MJr,hT)=>{"use strict";function n7r(r){return r*r}hT.exports=n7r});var bT=u((BJr,wT)=>{"use strict";var a7r=dT();wT.exports=a7r});var NT=u((CJr,ET)=>{"use strict";function u7r(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}ET.exports=u7r});var OT=u((jJr,AT)=>{"use strict";function s7r(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}AT.exports=s7r});var IT=u((GJr,TT)=>{"use strict";var o7r=b(),v7r=V(),ST=qa(),f7r=NT(),l7r=OT(),c7r=6123233995736766e-32;function p7r(r){var e,t,i,n,a;if(o7r(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*l7r(t),t=v7r(t+t),a=ST-t,t=t*n-c7r,a-=t,a+=ST;else{if(i<1e-8)return r;t=i*i,a=t*f7r(t),a=i*a+i}return e?-a:a}TT.exports=p7r});var Ot=u((VJr,LT)=>{"use strict";var g7r=IT();LT.exports=g7r});var FT=u((UJr,RT)=>{"use strict";var m7r=b(),_T=Ot(),q7r=V(),PT=qa(),y7r=6123233995736766e-32;function h7r(r){var e;return m7r(r)?NaN:r<-1||r>1?NaN:r>.5?2*_T(q7r(.5-.5*r)):(e=PT-_T(r),e+=y7r,e+=PT,e)}RT.exports=h7r});var an=u((HJr,MT)=>{"use strict";var d7r=FT();MT.exports=d7r});var GT=u((WJr,jT)=>{"use strict";var w7r=b(),b7r=zt(),BT=V(),E7r=ea(),CT=C(),N7r=1<<28;function A7r(r){var e;return w7r(r)?NaN:r<1?NaN:r===1?0:r>=N7r?CT(r)+E7r:r>2?CT(2*r-1/(r+BT(r*r-1))):(e=r-1,b7r(e+BT(2*e+e*e)))}jT.exports=A7r});var UT=u((kJr,VT)=>{"use strict";var O7r=GT();VT.exports=O7r});var WT=u((DJr,HT)=>{"use strict";var S7r=ya();function T7r(r){return S7r(1/r)}HT.exports=T7r});var DT=u((XJr,kT)=>{"use strict";var I7r=WT();kT.exports=I7r});var JT=u((JJr,XT)=>{"use strict";var L7r=Ot();function _7r(r){return L7r(1+r)}XT.exports=_7r});var YT=u((zJr,zT)=>{"use strict";var P7r=JT();zT.exports=P7r});var ZT=u((YJr,$T)=>{"use strict";var R7r=Ot();function F7r(r){return R7r(1-r)}$T.exports=F7r});var KT=u(($Jr,QT)=>{"use strict";var M7r=ZT();QT.exports=M7r});var rI=u((ZJr,xT)=>{"use strict";var B7r=Ot();function C7r(r){return B7r(1/r)}xT.exports=C7r});var tI=u((QJr,eI)=>{"use strict";var j7r=rI();eI.exports=j7r});var uI=u((KJr,aI)=>{"use strict";var G7r=Lr(),V7r=b(),U7r=zt(),iI=V(),H7r=ea(),nI=C(),W7r=1/(1<<28),k7r=1<<28;function D7r(r){var e,t,i;return V7r(r)||G7r(r)?r:(r<0&&(r=-r,e=!0),r<W7r?i=r:r>k7r?i=nI(r)+H7r:r>2?i=nI(2*r+1/(iI(r*r+1)+r)):(t=r*r,i=U7r(r+t/(1+iI(1+t)))),e?-i:i)}aI.exports=D7r});var p1=u((xJr,sI)=>{"use strict";var X7r=uI();sI.exports=X7r});var vI=u((rzr,oI)=>{"use strict";var J7r=p1();function z7r(r){return J7r(1/r)}oI.exports=z7r});var lI=u((ezr,fI)=>{"use strict";var Y7r=vI();fI.exports=Y7r});var pI=u((tzr,cI)=>{"use strict";var $7r=an(),Z7r=V();function Q7r(r){return 2*$7r(Z7r(r))}cI.exports=Q7r});var mI=u((izr,gI)=>{"use strict";var K7r=pI();gI.exports=K7r});var yI=u((nzr,qI)=>{"use strict";var x7r=Ot(),rgr=V();function egr(r){return 2*x7r(rgr(r))}qI.exports=egr});var dI=u((azr,hI)=>{"use strict";var tgr=yI();hI.exports=tgr});var EI=u((uzr,bI)=>{"use strict";var igr=b(),wI=zt(),ngr=P(),agr=D(),ugr=1/(1<<28);function sgr(r){var e,t;return igr(r)?NaN:r<-1||r>1?NaN:r===1?ngr:r===-1?agr:(r<0&&(e=!0,r=-r),r<ugr?e?-r:r:(r<.5?(t=r+r,t=.5*wI(t+t*r/(1-r))):t=.5*wI((r+r)/(1-r)),e?-t:t))}bI.exports=sgr});var AI=u((szr,NI)=>{"use strict";var ogr=EI();NI.exports=ogr});var SI=u((ozr,OI)=>{"use strict";var vgr=an();function fgr(r){return vgr(1+r)}OI.exports=fgr});var II=u((vzr,TI)=>{"use strict";var lgr=SI();TI.exports=lgr});var _I=u((fzr,LI)=>{"use strict";var cgr=an();function pgr(r){return cgr(1-r)}LI.exports=pgr});var RI=u((lzr,PI)=>{"use strict";var ggr=_I();PI.exports=ggr});var BI=u((czr,MI)=>{"use strict";var FI=-.16666666666666632,mgr=.00833333333332249,qgr=-.0001984126982985795,ygr=27557313707070068e-22,hgr=-25050760253406863e-24,dgr=158969099521155e-24,wgr=.0416666666666666,bgr=-.001388888888887411,Egr=2480158728947673e-20,Ngr=-27557314351390663e-23,Agr=2087572321298175e-24,Ogr=-11359647557788195e-27;function Sgr(r,e,t){var i,n,a,s,o;return o=e*e,s=o*o,n=mgr+o*(qgr+o*ygr)+o*s*(hgr+o*dgr),a=o*e,t===0?r[0]=e+a*(FI+o*n):r[0]=e-(o*(.5*t-a*n)-t-a*FI),n=o*(wgr+o*(bgr+o*Egr)),n+=s*s*(Ngr+o*(Agr+o*Ogr)),i=.5*o,s=1-i,r[1]=s+(1-s-i+(o*n-e*t)),r}MI.exports=Sgr});var GI=u((pzr,jI)=>{"use strict";var Tgr=er(),Igr=Ui(),CI=BI(),Lgr=2147483647,_gr=2146435072,Pgr=1072243195,Rgr=1044381696,g1=[0,0];function Fgr(r,e){var t,i;if(t=Tgr(e),t&=Lgr,t<=Pgr)return t<Rgr&&(e|0)===0&&(r[0]=e,r[1]=0),CI(r,e,0);if(t>=_gr)return r[0]=NaN,r[1]=NaN,r;switch(i=Igr(e,g1),CI(r,g1[0],g1[1]),i&3){case 1:return t=r[1],r[1]=-r[0],r[0]=t,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return t=-r[1],r[1]=r[0],r[0]=t,r;default:return r}}jI.exports=Fgr});var HI=u((gzr,UI)=>{"use strict";var VI=GI();function Mgr(r,e){return arguments.length===1?VI([0,0],r):VI(r,e)}UI.exports=Mgr});var un=u((mzr,WI)=>{"use strict";var Bgr=HI();WI.exports=Bgr});var DI=u((qzr,kI)=>{"use strict";function Cgr(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}kI.exports=Cgr});var JI=u((yzr,XI)=>{"use strict";function jgr(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}XI.exports=jgr});var YI=u((hzr,zI)=>{"use strict";function Ggr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}zI.exports=Ggr});var ZI=u((dzr,$I)=>{"use strict";function Vgr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}$I.exports=Vgr});var KI=u((wzr,QI)=>{"use strict";var Ugr=V(),Hgr=un(),Wgr=P(),kgr=DI(),Dgr=JI(),Xgr=YI(),Jgr=ZI(),zgr=.5641895835477563,Ygr=2.404825557695773,$gr=5.520078110286311,Zgr=616,Qgr=-.0014244423042272315,Kgr=1413,xgr=.0005468602863106496,sn=[0,0];function rmr(r){var e,t,i,n,a,s;return r<0&&(r=-r),r===Wgr?0:r===0?1:r<=4?(a=r*r,n=kgr(a),s=(r+Ygr)*(r-Zgr/256-Qgr),s*n):r<=8?(a=1-r*r/64,n=Dgr(a),s=(r+$gr)*(r-Kgr/256-xgr),s*n):(a=8/r,i=a*a,e=Xgr(i),t=Jgr(i),s=zgr/Ugr(r),Hgr(sn,r),s*(e*(sn[1]+sn[0])-a*t*(sn[0]-sn[1])))}QI.exports=rmr});var m1=u((bzr,xI)=>{"use strict";var emr=KI();xI.exports=emr});var Ta=u((Ezr,rL)=>{"use strict";var tmr=1.772453850905516;rL.exports=tmr});var tL=u((Nzr,eL)=>{"use strict";function imr(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}eL.exports=imr});var nL=u((Azr,iL)=>{"use strict";function nmr(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}iL.exports=nmr});var uL=u((Ozr,aL)=>{"use strict";function amr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}aL.exports=amr});var oL=u((Szr,sL)=>{"use strict";function umr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}sL.exports=umr});var fL=u((Tzr,vL)=>{"use strict";var smr=V(),omr=Z(),vmr=un(),fmr=P(),lmr=Ta(),cmr=tL(),pmr=nL(),gmr=uL(),mmr=oL(),qmr=3.8317059702075125,ymr=7.015586669815619,hmr=981,dmr=-.0003252797924876844,wmr=1796,bmr=-38330184381246464e-21,on=[0,0];function Emr(r){var e,t,i,n,a,s,o,v;return v=omr(r),r===0||v===fmr?0:(v<=4?(s=r*r,a=cmr(s),o=v*(v+qmr)*(v-hmr/256-dmr),e=o*a):v<=8?(s=r*r,a=pmr(s),o=v*(v+ymr)*(v-wmr/256-bmr),e=o*a):(s=8/v,n=s*s,t=gmr(n),i=mmr(n),o=1/(smr(v)*lmr),vmr(on,v),e=o*(t*(on[0]-on[1])+s*i*(on[0]+on[1]))),r<0&&(e*=-1),e)}vL.exports=Emr});var q1=u((Izr,lL)=>{"use strict";var Nmr=fL();lL.exports=Nmr});var pL=u((Lzr,cL)=>{"use strict";function Amr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}cL.exports=Amr});var mL=u((_zr,gL)=>{"use strict";function Omr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}gL.exports=Omr});var yL=u((Pzr,qL)=>{"use strict";function Smr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}qL.exports=Smr});var dL=u((Rzr,hL)=>{"use strict";function Tmr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}hL.exports=Tmr});var bL=u((Fzr,wL)=>{"use strict";function Imr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}wL.exports=Imr});var SL=u((Mzr,OL)=>{"use strict";var y1=C(),Lmr=V(),_mr=Or(),Pmr=Ta(),Rmr=D(),Fmr=P(),Mmr=un(),h1=m1(),Bmr=pL(),Cmr=mL(),jmr=yL(),Gmr=dL(),Vmr=bL(),Umr=1/Pmr,d1=2/_mr,EL=.8935769662791675,NL=3.957678419314858,AL=7.086051060301773,Hmr=228,Wmr=.0029519662791675214,kmr=1013,Dmr=.0006471693148578684,Xmr=1814,Jmr=.00011356030177269763,vn=[0,0];function zmr(r){var e,t,i,n,a,s,o;return r<0?NaN:r===0?Rmr:r===Fmr?0:r<=3?(a=r*r,s=y1(r/EL)*h1(r)*d1,n=Bmr(a),o=(r+EL)*(r-Hmr/256-Wmr),s+o*n):r<=5.5?(a=r*r,s=y1(r/NL)*h1(r)*d1,n=Cmr(a),o=(r+NL)*(r-kmr/256-Dmr),s+o*n):r<=8?(a=r*r,s=y1(r/AL)*h1(r)*d1,n=jmr(a),o=(r+AL)*(r-Xmr/256-Jmr),s+o*n):(a=8/r,i=a*a,e=Gmr(i),t=Vmr(i),o=Umr/Lmr(r),Mmr(vn,r),o*(e*(vn[0]-vn[1])+a*t*(vn[1]+vn[0])))}OL.exports=zmr});var IL=u((Bzr,TL)=>{"use strict";var Ymr=SL();TL.exports=Ymr});var _L=u((Czr,LL)=>{"use strict";function $mr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}LL.exports=$mr});var RL=u((jzr,PL)=>{"use strict";function Zmr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}PL.exports=Zmr});var ML=u((Gzr,FL)=>{"use strict";function Qmr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}FL.exports=Qmr});var CL=u((Vzr,BL)=>{"use strict";function Kmr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}BL.exports=Kmr});var kL=u((Uzr,WL)=>{"use strict";var jL=C(),xmr=V(),rqr=Or(),eqr=Ta(),tqr=D(),iqr=P(),nqr=un(),GL=q1(),aqr=_L(),uqr=RL(),sqr=ML(),oqr=CL(),vqr=1/eqr,VL=2/rqr,UL=2.197141326031017,HL=5.429681040794135,fqr=562,lqr=.001828826031017035,cqr=1390,pqr=-6459205864867228e-21,fn=[0,0];function gqr(r){var e,t,i,n,a,s,o;return r<0?NaN:r===0?tqr:r===iqr?0:r<=4?(a=r*r,s=jL(r/UL)*GL(r)*VL,n=aqr(a),o=(r+UL)*(r-fqr/256-lqr)/r,s+o*n):r<=8?(a=r*r,s=jL(r/HL)*GL(r)*VL,n=uqr(a),o=(r+HL)*(r-cqr/256-pqr)/r,s+o*n):(a=8/r,i=a*a,e=sqr(i),t=oqr(i),o=vqr/xmr(r),nqr(fn,r),o*(a*t*(fn[0]-fn[1])-e*(fn[0]+fn[1])))}WL.exports=gqr});var XL=u((Hzr,DL)=>{"use strict";var mqr=kL();DL.exports=mqr});var YL=u((Wzr,zL)=>{"use strict";var qqr=b(),yqr=Lr(),hqr=Z(),JL=qt(),dqr=yt(),wqr=Q(),w1=Or(),bqr=$i(),Eqr=bqr+1;function Nqr(r){var e,t,i,n;return qqr(r)?NaN:yqr(r)?NaN:(e=hqr(r),e>Eqr?1:(t=wqr(e),i=e-t,i===.5?0:(i<.25?n=JL(w1*i):i<.75?(i=.5-i,n=dqr(w1*i)):(i=1-i,n=-JL(w1*i)),t%2===1?-n:n)))}zL.exports=Nqr});var ZL=u((kzr,$L)=>{"use strict";var Aqr=YL();$L.exports=Aqr});var KL=u((Dzr,QL)=>{"use strict";var Oqr=1.618033988749895;QL.exports=Oqr});var r_=u((Xzr,xL)=>{"use strict";var Sqr=b(),Tqr=ZL(),Iqr=$(),Lqr=KL(),_qr=P(),Pqr=D(),Rqr=2.23606797749979;function Fqr(r){var e,t;return Sqr(r)||r===_qr||r===Pqr?NaN:(e=Iqr(Lqr,r),t=Tqr(r)/e,(e-t)/Rqr)}xL.exports=Fqr});var t_=u((Jzr,e_)=>{"use strict";var Mqr=r_();e_.exports=Mqr});var n_=u((zzr,i_)=>{"use strict";function Bqr(r){return r===0?1.87595182427177:1.87595182427177+r*(-1.8849797954337717+r*(1.6214297201053545+r*(-.758397934778766+r*.14599619288661245)))}i_.exports=Bqr});var o_=u((Yzr,s_)=>{"use strict";var Cqr=Fs(),E1=er(),jqr=Yr(),Gqr=Lr(),a_=ji(),Vqr=Wt(),Uqr=b(),Hqr=n_(),Wqr=2147483648>>>0,u_=2147483647>>>0,kqr=4294967295>>>0,Dqr=3221225472>>>0,Xqr=0x40000000000000,b1=2147483648>>>0,Jqr=1>>>0,zqr=715094163>>>0,Yqr=696219795>>>0,$qr=E1(Cqr),St=[0>>>0,0>>>0];function Zqr(r){var e,t,i,n,a,s,o;return r===0||Uqr(r)||Gqr(r)?r:(t=E1(r)>>>0,e=(t&Wqr)>>>0,t&=u_,t<$qr?(s=Xqr*r,i=(E1(s)&u_)>>>0,i=(i/3>>>0)+Yqr>>>0,s=a_(e|i,0)):(s=0,i=(t/3>>>0)+zqr>>>0,s=jqr(s,e|i)),n=s*s*(s/r),s*=Hqr(n),Vqr(St,s),St[1]&b1?(St[0]+=Jqr,St[1]&=~b1):St[1]|=b1,s=a_(St[0]&kqr,St[1]&Dqr),a=s*s,n=r/a,o=s+s,n=(n-s)/(o+n),s+=s*n,s)}s_.exports=Zqr});var f_=u(($zr,v_)=>{"use strict";var Qqr=o_();v_.exports=Qqr});var c_=u((Zzr,l_)=>{"use strict";function Kqr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}l_.exports=Kqr});var g_=u((Qzr,p_)=>{"use strict";function xqr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}p_.exports=xqr});var y_=u((Kzr,q_)=>{"use strict";var ryr=er(),eyr=c_(),tyr=g_(),m_=1048575,iyr=.3333333333333333;function nyr(r){var e,t,i,n,a,s,o,v,f,l,c;return n=ryr(r),a=r-1,(m_&2+n)<3?a===0?0:a*a*(iyr*a-.5):(s=a/(2+a),o=s*s,n&=m_,l=n-398458|0,f=o*o,c=440401-n|0,t=f*eyr(f),i=o*tyr(f),l|=c,v=i+t,l>0?(e=.5*a*a,s*(e+v)-e):s*(v-a))}q_.exports=nyr});var b_=u((xzr,w_)=>{"use strict";var h_=er(),ayr=Yr(),uyr=Qr(),syr=b(),oyr=Wr(),vyr=D(),fyr=y_(),lyr=0x40000000000000,d_=.4342944818781689,cyr=25082946711645275e-27,pyr=.30102999566361177,gyr=3694239077158931e-28,myr=1048575,qyr=2146435072,yyr=1048576,hyr=1072693248;function dyr(r){var e,t,i,n,a,s,o,v;return syr(r)||r<0?NaN:r===0?vyr:(t=h_(r),s=0,t<yyr&&(s-=54,r*=lyr,t=h_(r)),t>=qyr?r+r:(s+=(t>>20)-oyr|0,t&=myr,a=t+614244&1048576|0,r=ayr(r,t|a^hyr),s+=a>>20|0,o=s,n=fyr(r),r-=1,e=uyr(r,0),i=r-e,v=o*gyr+(r+n)*cyr,v+=(i+n)*d_+e*d_,v+o*pyr))}w_.exports=dyr});var N_=u((rYr,E_)=>{"use strict";var wyr=b_();E_.exports=wyr});var O_=u((eYr,A_)=>{"use strict";var byr=b(),Eyr=Lr(),Nyr=$(),Ayr=Q(),Oyr=Ci(),Syr=N_(),Tyr=Ro(),Iyr=Fo(),Lyr=P();function _yr(r){var e,t;return byr(r)||Eyr(r)||r===0?r:(r<0?(r=-r,e=-1):e=1,t=Syr(r),e===-1?t=Ayr(t):t=Oyr(t),t<=Iyr?e*0:t>Tyr?Lyr:e*Nyr(10,t))}A_.exports=_yr});var T_=u((tYr,S_)=>{"use strict";var Pyr=O_();S_.exports=Pyr});var L_=u((iYr,I_)=>{"use strict";function Ryr(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}I_.exports=Ryr});var P_=u((nYr,__)=>{"use strict";function Fyr(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}__.exports=Fyr});var M_=u((aYr,F_)=>{"use strict";var Myr=er(),Byr=L_(),Cyr=P_(),R_=1048575,jyr=.3333333333333333;function Gyr(r){var e,t,i,n,a,s,o,v,f,l,c;return n=Myr(r),a=r-1,(R_&2+n)<3?a===0?0:a*a*(jyr*a-.5):(s=a/(2+a),o=s*s,n&=R_,l=n-398458|0,f=o*o,c=440401-n|0,t=f*Byr(f),i=o*Cyr(f),l|=c,v=i+t,l>0?(e=.5*a*a,s*(e+v)-e):s*(v-a))}F_.exports=Gyr});var j_=u((uYr,C_)=>{"use strict";var Vyr=er(),Uyr=Yr(),Hyr=Qr(),Wyr=Wt(),kyr=b(),Dyr=Wr(),Xyr=D(),Jyr=M_(),zyr=0x40000000000000,B_=1.4426950407214463,Yyr=16751713164886512e-26,$yr=1048575,Zyr=2146435072,Qyr=1048576,Kyr=1072693248,xyr=2147483647,N1=[0,0];function rhr(r){var e,t,i,n,a,s,o;if(kyr(r)||r<0)return NaN;if(Wyr(N1,r),i=N1[0],n=N1[1],o=0,i<Qyr){if((i&xyr|n)===0)return Xyr;o-=54,r*=zyr,i=Vyr(r)}return i>=Zyr?r+r:(o+=(i>>20)-Dyr|0,i&=$yr,s=i+614244&1048576|0,r=Uyr(r,i|s^Kyr),o+=s>>20|0,a=Jyr(r),r-=1,e=Hyr(r,0),t=r-e,(r+a)*Yyr+(t+a)*B_+e*B_+o)}C_.exports=rhr});var V_=u((sYr,G_)=>{"use strict";var ehr=j_();G_.exports=ehr});var H_=u((oYr,U_)=>{"use strict";var thr=b(),ihr=Lr(),nhr=$(),ahr=Q(),uhr=Ci(),shr=V_(),ohr=Ts(),vhr=Is(),fhr=P();function lhr(r){var e,t;return thr(r)||ihr(r)||r===0||(r<0?(r=-r,e=-1):e=1,t=shr(r),t===vhr)?r:(e===-1?t=ahr(t):t=uhr(t),t>ohr?fhr:e*nhr(2,t))}U_.exports=lhr});var k_=u((vYr,W_)=>{"use strict";var chr=H_();W_.exports=chr});var A1=u((fYr,D_)=>{"use strict";var phr=.9189385332046728;D_.exports=phr});var X_=u((lYr,ghr)=>{ghr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var J_=u((cYr,mhr)=>{mhr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var z_=u((pYr,qhr)=>{qhr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var $_=u((gYr,Y_)=>{"use strict";function yhr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}Y_.exports=yhr});var Q_=u((mYr,Z_)=>{"use strict";function hhr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}Z_.exports=hhr});var x_=u((qYr,K_)=>{"use strict";function dhr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}K_.exports=dhr});var eP=u((yYr,rP)=>{"use strict";function whr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}rP.exports=whr});var iP=u((hYr,tP)=>{"use strict";function bhr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}tP.exports=bhr});var aP=u((dYr,nP)=>{"use strict";function Ehr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}nP.exports=Ehr});var fP=u((wYr,vP)=>{"use strict";var Nhr=b(),Ahr=Ar(),Ohr=Z(),Ia=or(),Shr=Q(),Thr=Dt(),Ihr=Di(),uP=ki(),sP=$(),Lhr=C(),_hr=P(),Phr=D(),oP=Fe(),Rhr=xs(),Fhr=A1(),Mhr=X_(),Bhr=J_(),Chr=z_(),jhr=$_(),Ghr=Q_(),Vhr=x_(),Uhr=eP(),Hhr=iP(),Whr=aP(),khr=129,Dhr=170,Xhr=709,Jhr=1.2433929443359375,zhr=.6986598968505859;function O1(r){var e,t,i,n,a,s;if(Nhr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(Ahr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(s=(i+1)/2|0,s<=khr)return-Chr[s]/(i+1)}else return(n&1)===0?Bhr[n/2]:Mhr[(n-3)/2];return Ohr(r)<Rhr?-.5-Fhr*r:(t=1-r,r<0?Shr(r/2)===r/2?0:(e=r,r=t,t=e,r>Dhr?(e=uP(.5*t)*2*O1(r),a=Ihr(r),a-=r*Lhr(oP),a>Xhr?e<0?Phr:_hr:e*Ia(a)):uP(.5*t)*2*sP(oP,-r)*Thr(r)*O1(r)):r<1?(e=jhr(t),e-=Jhr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+Ghr(t)):r<=4?(e=zhr+1/-t,e+Vhr(r-2)):r<=7?(e=Uhr(r-4),1+Ia(e)):r<15?(e=Hhr(r-7),1+Ia(e)):r<36?(e=Whr(r-15),1+Ia(e)):1+sP(2,-r))}vP.exports=O1});var cP=u((bYr,lP)=>{"use strict";var Yhr=fP();lP.exports=Yhr});var gP=u((EYr,pP)=>{"use strict";var U={};U.abs=Z();U.abs2=bT();U.acos=an();U.acosh=UT();U.acot=DT();U.acovercos=YT();U.acoversin=KT();U.acsc=tI();U.acsch=lI();U.ahavercos=mI();U.ahaversin=dI();U.asin=Ot();U.asinh=p1();U.atan=ya();U.atanh=AI();U.avercos=II();U.aversin=RI();U.besselj0=m1();U.besselj1=q1();U.bessely0=IL();U.bessely1=XL();U.binet=t_();U.cbrt=f_();U.ceil=Ci();U.ceil10=T_();U.ceil2=k_();U.cos=qt();U.sin=yt();U.sqrt=V();U.zeta=cP();pP.exports=U});var yP=u((NYr,qP)=>{"use strict";var mP=b(),$hr=C(),Zhr=Fe(),Qhr=co();function Khr(r,e){return mP(r)||mP(e)||e<=0?NaN:.5*$hr(Zhr*Qhr*e*e)}qP.exports=Khr});var dP=u((AYr,hP)=>{"use strict";var xhr=yP();hP.exports=xhr});var EP=u((OYr,bP)=>{"use strict";var rdr=or(),wP=$(),edr=V(),tdr=Fe(),idr=P(),S1=b();function ndr(r,e,t){var i,n,a;return S1(r)||S1(e)||S1(t)||t<0?NaN:t===0?r===e?idr:0:(i=wP(t,2),n=1/edr(i*tdr),a=-1/(2*i),n*rdr(a*wP(r-e,2)))}bP.exports=ndr});var OP=u((SYr,AP)=>{"use strict";var adr=P(),NP=b();function udr(r,e){return NP(r)||NP(e)?NaN:r===e?adr:0}AP.exports=udr});var IP=u((TYr,TP)=>{"use strict";var sdr=L(),odr=P(),SP=b();function vdr(r){if(SP(r))return sdr(NaN);return e;function e(t){return SP(t)?NaN:t===r?odr:0}}TP.exports=vdr});var PP=u((IYr,_P)=>{"use strict";var fdr=w(),LP=OP(),ldr=IP();fdr(LP,"factory",ldr);_P.exports=LP});var MP=u((LYr,FP)=>{"use strict";var cdr=L(),pdr=PP().factory,T1=b(),gdr=V(),mdr=or(),RP=$(),qdr=Fe();function ydr(r,e){var t,i,n;if(T1(r)||T1(e)||e<0)return cdr(NaN);if(e===0)return pdr(r);return t=RP(e,2),i=1/gdr(t*qdr),n=-1/(2*t),a;function a(s){return T1(s)?NaN:i*mdr(n*RP(s-r,2))}}FP.exports=ydr});var jP=u((_Yr,CP)=>{"use strict";var hdr=w(),BP=EP(),ddr=MP();hdr(BP,"factory",ddr);CP.exports=BP});var VP=u((PYr,GP)=>{"use strict";var La={};La.normal={};La.normal.entropy=dP();La.normal.pdf=jP();GP.exports=La});var HP=u((RYr,UP)=>{"use strict";var wdr=z().isPrimitive,bdr=S();function Edr(r){if(!wdr(r))throw new TypeError(bdr("invalid argument. First argument must be a string. Value: `%s`.",r));return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}UP.exports=Edr});var _a=u((FYr,WP)=>{"use strict";var Ndr=HP();WP.exports=Ndr});var DP=u((MYr,kP)=>{"use strict";var Adr=z().isPrimitive,Odr=S();function Sdr(r){if(!Adr(r))throw new TypeError(Odr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toLowerCase()}kP.exports=Sdr});var ai=u((BYr,XP)=>{"use strict";var Tdr=DP();XP.exports=Tdr});var YP=u((CYr,zP)=>{"use strict";var Idr=z().isPrimitive,Ldr=S(),JP=/[-\/\\^$*+?.()|[\]{}]/g;function _dr(r){var e,t,i;if(!Idr(r))throw new TypeError(Ldr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(JP,"\\$&"):(t=r.substring(1,i),t=t.replace(JP,"\\$&"),r=r[0]+t+r.substring(i),r)}zP.exports=_dr});var ZP=u((jYr,$P)=>{"use strict";var Pdr=YP();$P.exports=Pdr});var KP=u((GYr,QP)=>{"use strict";var Rdr=RegExp.prototype.exec;QP.exports=Rdr});var rR=u((VYr,xP)=>{"use strict";var Fdr=KP();function Mdr(r){try{return Fdr.call(r),!0}catch{return!1}}xP.exports=Mdr});var tR=u((UYr,eR)=>{"use strict";var Bdr=_t(),Cdr=rr(),jdr=rR(),Gdr=Bdr();function Vdr(r){return typeof r=="object"?r instanceof RegExp?!0:Gdr?jdr(r):Cdr(r)==="[object RegExp]":!1}eR.exports=Vdr});var nR=u((HYr,iR)=>{"use strict";var Udr=tR();iR.exports=Udr});var uR=u((WYr,aR)=>{"use strict";var Hdr=ZP(),Wdr=I(),I1=z().isPrimitive,kdr=nR(),L1=S();function Ddr(r,e,t){if(!I1(r))throw new TypeError(L1("invalid argument. First argument must be a string. Value: `%s`.",r));if(I1(e))e=Hdr(e),e=new RegExp(e,"g");else if(!kdr(e))throw new TypeError(L1("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!I1(t)&&!Wdr(t))throw new TypeError(L1("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return r.replace(e,t)}aR.exports=Ddr});var Tt=u((kYr,sR)=>{"use strict";var Xdr=uR();sR.exports=Xdr});var vR=u((DYr,oR)=>{"use strict";var Jdr=z().isPrimitive,zdr=Tt(),Ydr=S(),$dr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function Zdr(r){if(!Jdr(r))throw new TypeError(Ydr("invalid argument. Must provide a string. Value: `%s`.",r));return zdr(r,$dr,"$1")}oR.exports=Zdr});var ui=u((XYr,fR)=>{"use strict";var Qdr=vR();fR.exports=Qdr});var cR=u((JYr,lR)=>{"use strict";var Kdr=z().isPrimitive,xdr=_a(),rwr=ai(),Pa=Tt(),ewr=S(),twr=ui(),iwr=/\s+/g,nwr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,awr=/(?:\s|^)([^\s]+)(?=\s|$)/g,uwr=/([a-z0-9])([A-Z])/g;function swr(r,e,t){return e=rwr(e),t===0?e:xdr(e)}function owr(r){if(!Kdr(r))throw new TypeError(ewr("invalid argument. First argument must be a string. Value: `%s`.",r));return r=Pa(r,nwr," "),r=Pa(r,iwr," "),r=Pa(r,uwr,"$1 $2"),r=twr(r),r=Pa(r,awr,swr),r}lR.exports=owr});var gR=u((zYr,pR)=>{"use strict";var vwr=cR();pR.exports=vwr});var qR=u((YYr,mR)=>{"use strict";var fwr=z().isPrimitive,lwr=S();function cwr(r){if(!fwr(r))throw new TypeError(lwr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}mR.exports=cwr});var _1=u(($Yr,yR)=>{"use strict";var pwr=qR();yR.exports=pwr});var dR=u((ZYr,hR)=>{"use strict";var gwr=z().isPrimitive,mwr=_1(),P1=Tt(),qwr=S(),ywr=ui(),hwr=/\s+/g,dwr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,wwr=/([a-z0-9])([A-Z])/g;function bwr(r){if(!gwr(r))throw new TypeError(qwr("invalid argument. Must provide a string. Value: `%s`.",r));return r=P1(r,dwr," "),r=P1(r,wwr,"$1 $2"),r=ywr(r),r=P1(r,hwr,"_"),mwr(r)}hR.exports=bwr});var bR=u((QYr,wR)=>{"use strict";var Ewr=dR();wR.exports=Ewr});var NR=u((KYr,ER)=>{"use strict";var Nwr=z().isPrimitive,Awr=ai(),R1=Tt(),Owr=S(),Swr=ui(),Twr=/\s+/g,Iwr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Lwr=/([a-z0-9])([A-Z])/g;function _wr(r){if(!Nwr(r))throw new TypeError(Owr("invalid argument. Must provide a string. Value: `%s`.",r));return r=R1(r,Iwr," "),r=R1(r,Lwr,"$1 $2"),r=Swr(r),r=R1(r,Twr,"-"),Awr(r)}ER.exports=_wr});var OR=u((xYr,AR)=>{"use strict";var Pwr=NR();AR.exports=Pwr});var TR=u((r$r,SR)=>{"use strict";var Rwr=z().isPrimitive,Fwr=_a(),Mwr=ai(),Ra=Tt(),Bwr=S(),Cwr=ui(),jwr=/\s+/g,Gwr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Vwr=/(?:\s|^)([^\s]+)(?=\s|$)/g,Uwr=/([a-z0-9])([A-Z])/g;function Hwr(r,e){return Fwr(Mwr(e))}function Wwr(r){if(!Rwr(r))throw new TypeError(Bwr("invalid argument. First argument must be a string. Value: `%s`.",r));return r=Ra(r,Gwr," "),r=Ra(r,jwr," "),r=Ra(r,Uwr,"$1 $2"),r=Cwr(r),r=Ra(r,Vwr,Hwr),r}SR.exports=Wwr});var LR=u((e$r,IR)=>{"use strict";var kwr=TR();IR.exports=kwr});var PR=u((t$r,_R)=>{"use strict";var Dwr=z().isPrimitive,Xwr=ai(),F1=Tt(),Jwr=S(),zwr=ui(),Ywr=/\s+/g,$wr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Zwr=/([a-z0-9])([A-Z])/g;function Qwr(r){if(!Dwr(r))throw new TypeError(Jwr("invalid argument. Must provide a string. Value: `%s`.",r));return r=F1(r,$wr," "),r=F1(r,Zwr,"$1 $2"),r=zwr(r),r=F1(r,Ywr,"_"),Xwr(r)}_R.exports=Qwr});var FR=u((i$r,RR)=>{"use strict";var Kwr=PR();RR.exports=Kwr});var CR=u((n$r,BR)=>{"use strict";var xwr=T(),MR=A(),rbr=ur().isPrimitive,ebr=z().isPrimitive;function tbr(r,e){return xwr(e)?MR(e,"flags")&&(r.flags=e.flags,!ebr(r.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+r.flags+"`."):MR(e,"capture")&&(r.capture=e.capture,!rbr(r.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+r.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}BR.exports=tbr});var Fa=u((a$r,GR)=>{"use strict";var ibr=CR(),jR=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function nbr(r){var e,t;if(arguments.length>0){if(e={},t=ibr(e,r),t)throw t;return e.capture?new RegExp("("+jR+")",e.flags):new RegExp(jR,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}GR.exports=nbr});var UR=u((u$r,VR)=>{"use strict";var abr=Fa(),ubr=abr({capture:!0});VR.exports=ubr});var WR=u((s$r,HR)=>{"use strict";var sbr=Fa(),obr=sbr();HR.exports=obr});var XR=u((o$r,DR)=>{"use strict";var kR=w(),M1=Fa(),vbr=UR(),fbr=WR();kR(M1,"REGEXP",fbr);kR(M1,"REGEXP_CAPTURE",vbr);DR.exports=M1});var zR=u((v$r,JR)=>{"use strict";var lbr=z().isPrimitive,cbr=XR(),pbr=S();function gbr(r){var e,t,i,n;if(!lbr(r))throw new TypeError(pbr("invalid argument. Must provide a string. Value: `%s`.",r));for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),cbr.REGEXP.test(i)?(t+=i,e=!0):e?(t+=i.toUpperCase(),e=!1):t+=i;return t}JR.exports=gbr});var $R=u((f$r,YR)=>{"use strict";var mbr=zR();YR.exports=mbr});var QR=u((l$r,ZR)=>{"use strict";var qbr=z().isPrimitive,ybr=S();function hbr(r){if(!qbr(r))throw new TypeError(ybr("invalid argument. First argument must be a string. Value: `%s`.",r));return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}ZR.exports=hbr});var xR=u((c$r,KR)=>{"use strict";var dbr=QR();KR.exports=dbr});var eF=u((p$r,rF)=>{"use strict";var Gr={};Gr.camelcase=gR();Gr.capitalize=_a();Gr.constantcase=bR();Gr.kebabcase=OR();Gr.lowercase=ai();Gr.pascalcase=LR();Gr.snakecase=FR();Gr.startcase=$R();Gr.uncapitalize=xR();Gr.uppercase=_1();rF.exports=Gr});var iF=u((g$r,tF)=>{"use strict";var wbr=Se();function bbr(r,e,t,i){wbr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}tF.exports=bbr});var R=u((m$r,nF)=>{"use strict";var Ebr=iF();nF.exports=Ebr});var sF=u((q$r,uF)=>{"use strict";var aF=65535;function Nbr(r,e){var t,i,n,a,s,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,s=(r&aF)>>>0,o=(e&aF)>>>0,t=s*o>>>0,i=n*o+s*a<<16>>>0,t+i>>>0}uF.exports=Nbr});var vF=u((y$r,oF)=>{"use strict";var Abr=sF();oF.exports=Abr});var B1=u((h$r,fF)=>{"use strict";function Obr(r,e,t,i,n,a,s){var o,v,f,l,c,p,q;for(o=e.data,v=n.data,l=e.getter,f=n.setter,c=i,p=s,q=0;q<r;q++)f(v,p,l(o,c)),c+=t,p+=a;return e}fF.exports=Obr});var pF=u((d$r,cF)=>{"use strict";var lF=dt(),Sbr=B1(),C1=8;function Tbr(r,e,t,i,n){var a,s,o,v,f,l;if(r<=0)return i;if(o=lF(e),v=lF(i),o.accessors||v.accessors)return t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,Sbr(r,o,t,a,v,n,s),v.data;if(t===1&&n===1){if(f=r%C1,f>0)for(l=0;l<f;l++)i[l]=e[l];if(r<C1)return i;for(l=f;l<r;l+=C1)i[l]=e[l],i[l+1]=e[l+1],i[l+2]=e[l+2],i[l+3]=e[l+3],i[l+4]=e[l+4],i[l+5]=e[l+5],i[l+6]=e[l+6],i[l+7]=e[l+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,l=0;l<r;l++)i[s]=e[a],a+=t,s+=n;return i}cF.exports=Tbr});var qF=u((w$r,mF)=>{"use strict";var gF=dt(),Ibr=B1(),ln=8;function Lbr(r,e,t,i,n,a,s){var o,v,f,l,c,p;if(r<=0)return n;if(f=gF(e),l=gF(n),f.accessors||l.accessors)return Ibr(r,f,t,i,l,a,s),l.data;if(o=i,v=s,t===1&&a===1){if(c=r%ln,c>0)for(p=0;p<c;p++)n[v]=e[o],o+=t,v+=a;if(r<ln)return n;for(p=c;p<r;p+=ln)n[v]=e[o],n[v+1]=e[o+1],n[v+2]=e[o+2],n[v+3]=e[o+3],n[v+4]=e[o+4],n[v+5]=e[o+5],n[v+6]=e[o+6],n[v+7]=e[o+7],o+=ln,v+=ln;return n}for(p=0;p<r;p++)n[v]=e[o],o+=t,v+=a;return n}mF.exports=Lbr});var Ue=u((b$r,hF)=>{"use strict";var _br=w(),yF=pF(),Pbr=qF();_br(yF,"ndarray",Pbr);hF.exports=yF});var wF=u((E$r,dF)=>{"use strict";function Rbr(){}dF.exports=Rbr});var EF=u((N$r,bF)=>{"use strict";var Fbr=wF();function Mbr(){return Fbr.name==="foo"}bF.exports=Mbr});var AF=u((A$r,NF)=>{"use strict";var Bbr=EF();NF.exports=Bbr});var SF=u((O$r,OF)=>{"use strict";var Cbr=I(),jbr=AF(),Gbr=Bu().REGEXP,Vbr=jbr();function Ubr(r){if(Cbr(r)===!1)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return Vbr?r.name:Gbr.exec(r.toString())[1]}OF.exports=Ubr});var IF=u((S$r,TF)=>{"use strict";var Hbr=SF();TF.exports=Hbr});var _F=u((T$r,LF)=>{"use strict";var Wbr=Pi(),kbr=Gt(),Dbr=Ri(),Xbr=Fi(),Jbr=Vt(),zbr=ct(),Ybr=vr(),$br=zr(),Zbr=cr(),Qbr=[Zbr,$br,zbr,Ybr,Xbr,Jbr,Wbr,kbr,Dbr];LF.exports=Qbr});var PF=u((I$r,Kbr)=>{Kbr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var jF=u((L$r,CF)=>{"use strict";var xbr=Te(),rEr=IF(),MF=vt(),eEr=qs(),tEr=cr(),RF=_F(),FF=PF(),Ma=eEr()?MF(tEr):BF;Ma=rEr(Ma)==="TypedArray"?Ma:BF;function BF(){}function iEr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof Ma)return!0;for(t=0;t<RF.length;t++)if(r instanceof RF[t])return!0;for(;r;){for(e=xbr(r),t=0;t<FF.length;t++)if(FF[t]===e)return!0;r=MF(r)}return!1}CF.exports=iEr});var VF=u((_$r,GF)=>{"use strict";var nEr=jF();GF.exports=nEr});var HF=u((P$r,UF)=>{"use strict";var aEr=en(),uEr=xi(),sEr=[uEr,aEr];UF.exports=sEr});var WF=u((R$r,oEr)=>{oEr.exports=["Complex64Array","Complex128Array"]});var JF=u((F$r,XF)=>{"use strict";var vEr=Te(),fEr=vt(),kF=HF(),DF=WF();function lEr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<kF.length;t++)if(r instanceof kF[t])return!0;for(;r;){for(e=vEr(r),t=0;t<DF.length;t++)if(DF[t]===e)return!0;r=fEr(r)}return!1}XF.exports=lEr});var YF=u((M$r,zF)=>{"use strict";var cEr=JF();zF.exports=cEr});var ZF=u((B$r,$F)=>{"use strict";function pEr(r,e){if(typeof e!="function")throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+e+"`.");return r instanceof e}$F.exports=pEr});var KF=u((C$r,QF)=>{"use strict";var gEr=ZF();QF.exports=gEr});var rM=u((j$r,xF)=>{"use strict";var mEr=Pi(),qEr=Gt(),yEr=Ri(),hEr=Fi(),dEr=Vt(),wEr=ct(),bEr=vr(),EEr=zr(),NEr=cr(),AEr=en(),OEr=xi(),SEr=[[NEr,"Float64Array"],[EEr,"Float32Array"],[wEr,"Int32Array"],[bEr,"Uint32Array"],[hEr,"Int16Array"],[dEr,"Uint16Array"],[mEr,"Int8Array"],[qEr,"Uint8Array"],[yEr,"Uint8ClampedArray"],[AEr,"Complex64Array"],[OEr,"Complex128Array"]];xF.exports=SEr});var tM=u((G$r,eM)=>{"use strict";var TEr=KF(),IEr=Te(),LEr=vt(),si=rM();function _Er(r){var e,t;for(t=0;t<si.length;t++)if(TEr(r,si[t][0]))return si[t][1];for(;r;){for(e=IEr(r),t=0;t<si.length;t++)if(e===si[t][1])return si[t][1];r=LEr(r)}}eM.exports=_Er});var nM=u((V$r,iM)=>{"use strict";var PEr=VF(),REr=YF(),FEr=Qt(),MEr=Kt(),BEr=tM();function CEr(r){var e,t,i;if(PEr(r))e=r;else if(REr(r))r.BYTES_PER_ELEMENT===8?e=FEr(r,0):e=MEr(r,0);else throw new TypeError("invalid argument. Must provide a typed array. Value: `"+r+"`.");for(t={type:BEr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}iM.exports=CEr});var F=u((U$r,aM)=>{"use strict";var jEr=nM();aM.exports=jEr});var j1=u((H$r,uM)=>{"use strict";var GEr=Rt(),VEr=Q(),UEr=GEr-1;function HEr(){var r=VEr(1+UEr*Math.random());return r>>>0}uM.exports=HEr});var X1=u((W$r,yM)=>{"use strict";var re=w(),He=_(),sM=R(),G1=A(),WEr=T(),kEr=Mr(),oM=Jr(),DEr=ur().isPrimitive,vM=xr().isPrimitive,gM=$i(),mM=Rt(),qr=vr(),XEr=fo(),D1=vF(),oi=Ue(),JEr=F(),fM=j1(),tr=624,V1=397,lM=mM>>>0,zEr=19650218>>>0,U1=2147483648>>>0,H1=2147483647>>>0,YEr=1812433253>>>0,$Er=1664525>>>0,ZEr=1566083941>>>0,QEr=2636928640>>>0,KEr=4022730752>>>0,xEr=2567483615>>>0,W1=[0>>>0,xEr>>>0],qM=1/(gM+1),rNr=67108864>>>0,eNr=2147483648>>>0,k1=1>>>0,tNr=gM*qM,Ba=1,Ca=3,We=2,ke=tr+3,yr=tr+5,cn=tr+6;function cM(r,e){var t;return e?t="option":t="argument",r.length<cn+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==Ba?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+Ba+". Actual: "+r[0]+"."):r[1]!==Ca?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+Ca+". Actual: "+r[1]+"."):r[We]!==tr?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+tr+". Actual: "+r[We]+"."):r[ke]!==1?new RangeError("invalid "+t+". `state` array has an incompatible section length. Expected: "+1 .toString()+". Actual: "+r[ke]+"."):r[yr]!==r.length-cn?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-cn)+". Actual: "+r[yr]+"."):null}function pM(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=D1(t,YEr)+i>>>0;return r}function iNr(r,e,t,i){var n,a,s,o;for(a=1,s=0,o=XEr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=D1(n,$Er)>>>0,r[a]=(r[a]>>>0^n)+t[s]+s>>>0,a+=1,s+=1,a>=e&&(r[0]=r[e-1],a=1),s>=i&&(s=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=D1(n,ZEr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=eNr,r}function nNr(r){var e,t,i,n;for(n=tr-V1,t=0;t<n;t++)e=r[t]&U1|r[t+1]&H1,r[t]=r[t+V1]^e>>>1^W1[e&k1];for(i=tr-1;t<i;t++)e=r[t]&U1|r[t+1]&H1,r[t]=r[t-n]^e>>>1^W1[e&k1];return e=r[i]&U1|r[0]&H1,r[i]=r[V1-1]^e>>>1^W1[e&k1],r}function aNr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!WEr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(G1(r,"copy")&&(i.copy=r.copy,!DEr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(G1(r,"state")){if(t=r.state,i.state=!0,!oM(t))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+t+"`.");if(s=cM(t,!0),s)throw s;i.copy===!1?e=t:(e=new qr(t.length),oi(t.length,t,1,e,1)),t=new qr(e.buffer,e.byteOffset+(We+1)*e.BYTES_PER_ELEMENT,tr),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,t[yr])}if(n===void 0)if(G1(r,"seed"))if(n=r.seed,i.seed=!0,vM(n)){if(n>lM)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");n>>>=0}else{if(kEr(n)===!1||n.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");if(n.length===1){if(n=n[0],!vM(n))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");if(n>lM)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");n>>>=0}else a=n.length,e=new qr(cn+a),e[0]=Ba,e[1]=Ca,e[We]=tr,e[ke]=1,e[ke+1]=tr,e[yr]=a,oi.ndarray(a,n,1,0,e,1,yr+1),t=new qr(e.buffer,e.byteOffset+(We+1)*e.BYTES_PER_ELEMENT,tr),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,a),t=pM(t,tr,zEr),t=iNr(t,tr,n,a)}else n=fM()>>>0}else n=fM()>>>0;return t===void 0&&(e=new qr(cn+1),e[0]=Ba,e[1]=Ca,e[We]=tr,e[ke]=1,e[ke+1]=tr,e[yr]=1,e[yr+1]=n,t=new qr(e.buffer,e.byteOffset+(We+1)*e.BYTES_PER_ELEMENT,tr),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,1),t=pM(t,tr,n)),re(y,"NAME","mt19937"),He(y,"seed",o),He(y,"seedLength",v),sM(y,"state",c,p),He(y,"stateLength",f),He(y,"byteLength",l),re(y,"toJSON",q),re(y,"MIN",1),re(y,"MAX",mM),re(y,"normalized",m),re(m,"NAME",y.NAME),He(m,"seed",o),He(m,"seedLength",v),sM(m,"state",c,p),He(m,"stateLength",f),He(m,"byteLength",l),re(m,"toJSON",q),re(m,"MIN",0),re(m,"MAX",tNr),y;function o(){var g=e[yr];return oi(g,n,1,new qr(g),1)}function v(){return e[yr]}function f(){return e.length}function l(){return e.byteLength}function c(){var g=e.length;return oi(g,e,1,new qr(g),1)}function p(g){var h;if(!oM(g))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+g+"`.");if(h=cM(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?oi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new qr(g.length)),oi(g.length,g,1,e,1)),t=new qr(e.buffer,e.byteOffset+(We+1)*e.BYTES_PER_ELEMENT,tr),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,e[yr])}function q(){var g={};return g.type="PRNG",g.name=y.NAME,g.state=JEr(e),g.params=[],g}function y(){var g,h;return h=e[ke+1],h>=tr&&(t=nNr(t),h=0),g=t[h],e[ke+1]=h+1,g^=g>>>11,g^=g<<7&QEr,g^=g<<15&KEr,g^=g>>>18,g>>>0}function m(){var g=y()>>>5,h=y()>>>6;return(g*rNr+h)*qM}}yM.exports=aNr});var dM=u((k$r,hM)=>{"use strict";var uNr=X1(),sNr=j1(),oNr=uNr({seed:sNr()});hM.exports=oNr});var X=u((D$r,bM)=>{"use strict";var vNr=w(),wM=dM(),fNr=X1();vNr(wM,"factory",fNr);bM.exports=wM});var OM=u((X$r,AM)=>{"use strict";var EM=j().isPrimitive,NM=ir();function lNr(r,e){return!EM(r)||NM(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!EM(e)||NM(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):r>=e?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+r+","+e+"]`."):null}AM.exports=lNr});var TM=u((J$r,SM)=>{"use strict";var cNr=$(),pNr=yt(),gNr=ma();function mNr(r,e,t){return e+cNr(pNr(gNr*r()),2)*(t-e)}SM.exports=mNr});var J1=u((z$r,BM)=>{"use strict";var ee=w(),ja=_(),IM=R(),LM=T(),_M=I(),PM=A(),RM=L(),qNr=B(),Ga=X().factory,FM=b(),yNr=F(),hNr=OM(),MM=TM();function dNr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ga();else if(arguments.length===1){if(r=arguments[0],!LM(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(PM(r,"prng")){if(!_M(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ga(r)}else{if(n=arguments[0],a=arguments[1],i=hNr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!LM(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(PM(r,"prng")){if(!_M(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ga(r)}else e=Ga()}return n===void 0?t=y:t=q,ee(t,"NAME","arcsine"),r&&r.prng?(ee(t,"seed",null),ee(t,"seedLength",null),IM(t,"state",RM(null),qNr),ee(t,"stateLength",null),ee(t,"byteLength",null),ee(t,"toJSON",RM(null)),ee(t,"PRNG",e)):(ja(t,"seed",s),ja(t,"seedLength",o),IM(t,"state",l,c),ja(t,"stateLength",v),ja(t,"byteLength",f),ee(t,"toJSON",p),ee(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=yNr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return MM(e,n,a)}function y(m,g){return FM(m)||FM(g)||m>=g?NaN:MM(e,m,g)}}BM.exports=dNr});var jM=u((Y$r,CM)=>{"use strict";var wNr=J1(),bNr=wNr();CM.exports=bNr});var UM=u(($$r,VM)=>{"use strict";var ENr=w(),GM=jM(),NNr=J1();ENr(GM,"factory",NNr);VM.exports=GM});var z1=u((Z$r,JM)=>{"use strict";var te=w(),Va=_(),HM=R(),WM=T(),ANr=tn().isPrimitive,kM=I(),DM=A(),XM=L(),ONr=B(),Ua=X().factory,SNr=b(),TNr=F();function INr(){var r,e,t,i;if(arguments.length===0)e=Ua();else if(arguments.length===1&&WM(arguments[0]))if(r=arguments[0],DM(r,"prng")){if(!kM(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ua(r);else{if(i=arguments[0],!ANr(i))throw new TypeError("invalid argument. First argument must be a probability. Value: `"+i+"`.");if(arguments.length>1){if(r=arguments[1],!WM(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(DM(r,"prng")){if(!kM(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ua(r)}else e=Ua()}return i===void 0?t=p:t=c,te(t,"NAME","bernoulli"),r&&r.prng?(te(t,"seed",null),te(t,"seedLength",null),HM(t,"state",XM(null),ONr),te(t,"stateLength",null),te(t,"byteLength",null),te(t,"toJSON",XM(null)),te(t,"PRNG",e)):(Va(t,"seed",n),Va(t,"seedLength",a),HM(t,"state",v,f),Va(t,"stateLength",s),Va(t,"byteLength",o),te(t,"toJSON",l),te(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(q){e.state=q}function l(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=TNr(e.state),i===void 0?q.params=[]:q.params=[i],q}function c(){return e()<=i?1:0}function p(q){return SNr(q)||q<0||q>1?NaN:e()<=q?1:0}}JM.exports=INr});var YM=u((Q$r,zM)=>{"use strict";var LNr=z1(),_Nr=LNr();zM.exports=_Nr});var QM=u((K$r,ZM)=>{"use strict";var PNr=w(),$M=YM(),RNr=z1();PNr($M,"factory",RNr);ZM.exports=$M});var eB=u((x$r,rB)=>{"use strict";var FNr=V(),KM=or(),MNr=C(),xM=.00991256303526217;function BNr(r,e){var t,i,n;for(i=KM(-.5*e*e),t=[],t.push(xM/i),t.push(e),n=2;n<r;n++)t[n]=FNr(-2*MNr(xM/t[n-1]+i)),i=KM(-.5*t[n]*t[n]);return t.push(0),t}rB.exports=BNr});var iB=u((rZr,tB)=>{"use strict";function CNr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}tB.exports=CNr});var uB=u((eZr,aB)=>{"use strict";var nB=C();function jNr(r,e,t){var i,n;do i=nB(r())/e,n=nB(r());while(-2*n<i*i);return t?i-e:e-i}aB.exports=jNr});var fB=u((tZr,vB)=>{"use strict";var GNr=Z(),sB=or(),VNr=eB(),UNr=iB(),HNr=uB(),WNr=128,oB=3.442619855899,It=VNr(WNr,oB),kNr=UNr(It),DNr=127;function XNr(r,e){return t;function t(){for(var i,n,a,s,o,v,f;;){if(o=2*r()-1,v=e()&DNr,GNr(o)<kNr[v])return o*It[v];if(v===0)return HNr(r,oB,o<0);if(s=o*It[v],a=s*s,f=v+1,i=sB(-.5*(It[v]*It[v]-a)),n=sB(-.5*(It[f]*It[f]-a)),n+r()*(i-n)<1)return s}}}vB.exports=XNr});var $1=u((iZr,pB)=>{"use strict";var De=w(),Ha=_(),lB=R(),JNr=I(),zNr=T(),YNr=ur().isPrimitive,Wa=A(),$Nr=Jr(),Y1=X().factory,cB=L(),ZNr=B(),QNr=Q(),KNr=Rt(),xNr=F(),rAr=fB();function eAr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!zNr(r))throw new TypeError("invalid argument. Must provide an object. Value: `"+r+"`.");if(Wa(r,"copy")&&(n.copy=r.copy,!YNr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(Wa(r,"prng")){if(!JNr(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else if(Wa(r,"state")){if(n.state=r.state,!$Nr(r.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+r.state+"`.")}else if(Wa(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+r.seed+"`.")}return n.state===void 0?e===void 0?(t=Y1(n),e=t.normalized):(t=Y1({seed:QNr(1+KNr*e()),copy:n.copy}),n.seed=null):(t=Y1(n),e=t.normalized),i=rAr(e,t),De(i,"NAME","improved-ziggurat"),n.seed===null?(De(i,"seed",null),De(i,"seedLength",null)):(Ha(i,"seed",a),Ha(i,"seedLength",s)),r&&r.prng?(lB(i,"state",cB(null),ZNr),De(i,"stateLength",null),De(i,"byteLength",null),De(i,"toJSON",cB(null))):(lB(i,"state",f,l),Ha(i,"stateLength",o),Ha(i,"byteLength",v),De(i,"toJSON",c)),De(i,"PRNG",e),i;function a(){return t.seed}function s(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function l(p){t.state=p}function c(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=xNr(t.state),p.params=[],p}}pB.exports=eAr});var mB=u((nZr,gB)=>{"use strict";var tAr=$1(),iAr=tAr();gB.exports=iAr});var Xe=u((aZr,yB)=>{"use strict";var nAr=w(),qB=mB(),aAr=$1();nAr(qB,"factory",aAr);yB.exports=qB});var wB=u((uZr,dB)=>{"use strict";var hB=W().isPrimitive;function uAr(r,e){return hB(r)?hB(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}dB.exports=uAr});var OB=u((sZr,AB)=>{"use strict";var bB=C(),EB=V(),sAr=$(),NB=1/3;function oAr(r,e,t){var i,n,a,s,o,v,f,l,c,p;for(t<1?(v=t+1-NB,o=1/EB(9*v),l=sAr(r(),1/t)):(v=t-NB,o=1/EB(9*v),l=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,n=f*f,a=1-.331*n*n,s=.5*n+v*(1-p+bB(p)),c=r(),(c<a||bB(c)<s)&&(i=!1)}return v*p*l}AB.exports=oAr});var IB=u((oZr,TB)=>{"use strict";var Z1=$(),SB=C();function vAr(r,e,t){var i,n,a,s,o,v,f,l;for(a=t-1,o=Z1(a+a,.5),i=!0;i===!0;)s=e(),f=.5*(1+s/o),f>=0&&f<=1&&(v=r(),n=Z1(s,4),l=8*t-12,l=1-n/l,v<=l?i=!1:(l+=.5*Z1(n/(8*t-8),2),v<l&&(l=a*SB(4*f*(1-f)),l+=s*s/2,l>=SB(v)&&(i=!1))));return f}TB.exports=vAr});var _B=u((vZr,LB)=>{"use strict";var fAr=$(),ka=C();function lAr(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y;for(o=t-1,v=i-1,f=o+v,l=f*ka(f),s=o/f,n=.5/fAr(f,.5),a=!0;a===!0;)c=e(),q=s+c*n,q>=0&&q<=1&&(p=r(),y=o*ka(q/o),y+=v*ka((1-q)/v),y+=l+.5*c*c,y>=ka(p)&&(a=!1));return q}LB.exports=lAr});var FB=u((fZr,RB)=>{"use strict";var Q1=or(),PB=$(),K1=C();function cAr(r,e,t){for(var i,n,a,s,o,v,f;;)if(s=r(),o=r(),v=PB(s,1/e),f=PB(o,1/t),a=v+f,a<=1)return a>0?v/a:(i=K1(s)/e,n=K1(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),Q1(i-K1(Q1(i)+Q1(n))))}RB.exports=cAr});var CB=u((lZr,BB)=>{"use strict";var MB=OB(),pAr=IB(),gAr=_B(),mAr=FB();function qAr(r,e,t,i){var n,a;return t===i&&t>1.5?pAr(r,e,t):t>1&&i>1?gAr(r,e,t,i):t<1&&i<1?mAr(r,t,i):(n=MB(r,e,t),a=MB(r,e,i),n/(n+a))}BB.exports=qAr});var tv=u((cZr,JB)=>{"use strict";var ie=w(),Da=_(),jB=R(),GB=T(),VB=ur().isPrimitive,UB=I(),vi=A(),HB=L(),yAr=B(),WB=Xe().factory,Xa=X().factory,kB=b(),x1=Ue(),rv=vr(),ev=Jr(),DB=Ht(),hAr=F(),dAr=wB(),XB=CB();function wAr(){var r,e,t,i,n,a,s,o,v;if(o=!0,arguments.length===0)n={copy:!1},a=Xa(n);else if(arguments.length===1){if(n=arguments[0],!GB(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(vi(n,"copy")&&!VB(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(vi(n,"prng")){if(!UB(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(vi(n,"state")&&!ev(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=DB(n,1),n.copy===!1?o=!1:n.state&&(n.state=x1(n.state.length,n.state,1,new rv(n.state.length),1)),n.copy=!1,a=Xa(n)}}else{if(t=arguments[0],i=arguments[1],v=dAr(t,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!GB(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(vi(n,"copy")&&!VB(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(vi(n,"prng")){if(!UB(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(vi(n,"state")&&!ev(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=DB(n,1),n.copy===!1?o=!1:n.state&&(n.state=x1(n.state.length,n.state,1,new rv(n.state.length),1)),n.copy=!1,a=Xa(n)}}else n={copy:!1},a=Xa(n)}return n&&n.prng?e=WB({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=WB({state:r,copy:!1})),t===void 0?s=h:s=g,ie(s,"NAME","beta"),n&&n.prng?(ie(s,"seed",null),ie(s,"seedLength",null),jB(s,"state",HB(null),yAr),ie(s,"stateLength",null),ie(s,"byteLength",null),ie(s,"toJSON",HB(null)),ie(s,"PRNG",a)):(Da(s,"seed",f),Da(s,"seedLength",l),jB(s,"state",q,y),Da(s,"stateLength",c),Da(s,"byteLength",p),ie(s,"toJSON",m),ie(s,"PRNG",a),a=a.normalized),s;function f(){return a.seed}function l(){return a.seedLength}function c(){return a.stateLength}function p(){return a.byteLength}function q(){return a.state}function y(E){if(!ev(E))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+E+"`.");o&&(E=x1(E.length,E,1,new rv(E.length),1)),a.state=E}function m(){var E={};return E.type="PRNG",E.name=s.NAME,E.state=hAr(a.state),t===void 0?E.params=[]:E.params=[t,i],E}function g(){return XB(a,e,t,i)}function h(E,N){return kB(E)||kB(N)||E<=0||N<=0?NaN:XB(a,e,E,N)}}JB.exports=wAr});var YB=u((pZr,zB)=>{"use strict";var bAr=tv(),EAr=bAr();zB.exports=EAr});var QB=u((gZr,ZB)=>{"use strict";var NAr=w(),$B=YB(),AAr=tv();NAr($B,"factory",AAr);ZB.exports=$B});var rC=u((mZr,xB)=>{"use strict";var KB=W().isPrimitive;function OAr(r,e){return KB(r)?KB(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}xB.exports=OAr});var iC=u((qZr,tC)=>{"use strict";var eC=C();function SAr(r,e,t,i,n){var a,s,o,v,f,l,c;for(a=!0;a;){do f=e(),c=1+n*f;while(c<=0);c*=c*c,s=f*f,o=1-.331*s*s,v=.5*s+i*(1-c+eC(c)),l=r(),(l<o||eC(l)<v)&&(a=!1)}return 1/t*i*c}tC.exports=SAr});var sv=u((yZr,pC)=>{"use strict";var ne=w(),Ja=_(),nC=R(),aC=T(),iv=Jr(),uC=ur().isPrimitive,sC=I(),fi=A(),oC=L(),TAr=B(),vC=Xe().factory,za=X().factory,fC=b(),nv=V(),lC=$(),av=Ue(),uv=vr(),IAr=F(),cC=Ht(),LAr=rC(),Ya=iC(),$a=1/3;function _Ar(){var r,e,t,i,n,a,s,o,v,f,l;if(o=!0,arguments.length===0)n={copy:!1},a=za(n);else if(arguments.length===1){if(n=arguments[0],!aC(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(fi(n,"copy")&&!uC(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(fi(n,"prng")){if(!sC(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(fi(n,"state")&&!iv(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=cC(n,1),n.copy===!1?o=!1:n.state&&(n.state=av(n.state.length,n.state,1,new uv(n.state.length),1)),n.copy=!1,a=za(n)}}else{if(e=arguments[0],i=arguments[1],v=LAr(e,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!aC(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(fi(n,"copy")&&!uC(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(fi(n,"prng")){if(!sC(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(fi(n,"state")&&!iv(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=cC(n,1),n.copy===!1?o=!1:n.state&&(n.state=av(n.state.length,n.state,1,new uv(n.state.length),1)),n.copy=!1,a=za(n)}}else n={copy:!1},a=za(n)}return n&&n.prng?t=vC({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=vC({state:r,copy:!1})),e===void 0?s=G:(e>=1?(s=E,l=e-$a):(s=N,l=e+1-$a),f=1/nv(9*l)),ne(s,"NAME","gamma"),n&&n.prng?(ne(s,"seed",null),ne(s,"seedLength",null),nC(s,"state",oC(null),TAr),ne(s,"stateLength",null),ne(s,"byteLength",null),ne(s,"toJSON",oC(null)),ne(s,"PRNG",a)):(Ja(s,"seed",c),Ja(s,"seedLength",p),nC(s,"state",m,g),Ja(s,"stateLength",q),Ja(s,"byteLength",y),ne(s,"toJSON",h),ne(s,"PRNG",a),a=a.normalized),s;function c(){return a.seed}function p(){return a.seedLength}function q(){return a.stateLength}function y(){return a.byteLength}function m(){return a.state}function g(O){if(!iv(O))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+O+"`.");o&&(O=av(O.length,O,1,new uv(O.length),1)),a.state=O}function h(){var O={};return O.type="PRNG",O.name=s.NAME,O.state=IAr(a.state),e===void 0?O.params=[]:O.params=[e,i],O}function E(){return Ya(a,t,i,l,f)}function N(){return Ya(a,t,i,l,f)*lC(a(),1/e)}function G(O,J){var ar,k;return fC(O)||fC(J)||O<=0||J<=0?NaN:O<1?(k=O+1-$a,ar=1/nv(9*k),Ya(a,t,J,k,ar)*lC(a(),1/O)):(k=O-$a,ar=1/nv(9*k),Ya(a,t,J,k,ar))}}pC.exports=_Ar});var mC=u((hZr,gC)=>{"use strict";var PAr=sv(),RAr=PAr();gC.exports=RAr});var li=u((dZr,yC)=>{"use strict";var FAr=w(),qC=mC(),MAr=sv();FAr(qC,"factory",MAr);yC.exports=qC});var wC=u((wZr,dC)=>{"use strict";var hC=W().isPrimitive;function BAr(r,e){return hC(r)?hC(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}dC.exports=BAr});var EC=u((bZr,bC)=>{"use strict";function CAr(r,e,t){return r(e,1)/r(t,1)}bC.exports=CAr});var ov=u((EZr,IC)=>{"use strict";var Je=w(),Za=_(),NC=R(),AC=T(),OC=L(),jAr=B(),Qa=li().factory,SC=b(),GAr=F(),VAr=wC(),TC=EC();function UAr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=Qa();else if(arguments.length===1){if(i=arguments[0],!AC(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");r=Qa(i)}else{if(e=arguments[0],t=arguments[1],s=VAr(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!AC(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");r=Qa(i)}else r=Qa()}return e===void 0?a=m:a=y,n=r.PRNG,Je(a,"NAME","betaprime"),i&&i.prng?(Je(a,"seed",null),Je(a,"seedLength",null),NC(a,"state",OC(null),jAr),Je(a,"stateLength",null),Je(a,"byteLength",null),Je(a,"toJSON",OC(null))):(Za(a,"seed",o),Za(a,"seedLength",v),NC(a,"state",c,p),Za(a,"stateLength",f),Za(a,"byteLength",l),Je(a,"toJSON",q)),Je(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function l(){return n.byteLength}function c(){return n.state}function p(g){n.state=g}function q(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=GAr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function y(){return TC(r,e,t)}function m(g,h){return SC(g)||SC(h)||g<=0||h<=0?NaN:TC(r,g,h)}}IC.exports=UAr});var _C=u((NZr,LC)=>{"use strict";var HAr=ov(),WAr=HAr();LC.exports=WAr});var FC=u((AZr,RC)=>{"use strict";var kAr=w(),PC=_C(),DAr=ov();kAr(PC,"factory",DAr);RC.exports=PC});var BC=u((OZr,MC)=>{"use strict";var XAr=Q();function JAr(r){return XAr(r)===r&&r>0}MC.exports=JAr});var vv=u((SZr,CC)=>{"use strict";var zAr=BC();CC.exports=zAr});var GC=u((TZr,jC)=>{"use strict";function YAr(r){return r>=0&&r<=1}jC.exports=YAr});var UC=u((IZr,VC)=>{"use strict";var $Ar=GC();VC.exports=$Ar});var WC=u((LZr,HC)=>{"use strict";var ZAr=xr().isPrimitive,QAr=tn().isPrimitive;function KAr(r,e){return ZAr(r)?QAr(e)?null:new TypeError("invalid argument. Second argument must be a probability. Value: `"+e+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+e+"`.")}HC.exports=KAr});var DC=u((_Zr,kC)=>{"use strict";function xAr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}kC.exports=xAr});var JC=u((PZr,XC)=>{"use strict";var rOr=b();function eOr(r){return r===0||rOr(r)?r:r<0?-1:1}XC.exports=eOr});var Ka=u((RZr,zC)=>{"use strict";var tOr=JC();zC.exports=tOr});var $C=u((FZr,YC)=>{"use strict";var iOr=$(),nOr=1/12,aOr=1/360,uOr=1/1260;function sOr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=iOr(r,2),(nOr-(aOr-uOr/e)/e)/r}}YC.exports=sOr});var QC=u((MZr,ZC)=>{"use strict";var fv=Q(),oOr=Ka(),vOr=V(),lv=Z(),xa=C(),r0=$C(),fOr=1/6;function lOr(r,e,t){var i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N,G,O,J,ar,k,uu,Vr,fr,hn;for(J=fv((e+1)*t),f=e-J+1,ar=1-t,k=t/ar,l=(e+1)*k,s=e*t*ar,a=vOr(s),g=1.15+2.53*a,m=-.0873+.0248*g+.01*t,h=e*t+.5,i=(2.83+5.1/g)*a,y=.92-4.2/g,n=.86*y,N=(J+.5)*xa((J+1)/(k*f)),N+=r0(J)+r0(e-J);;){if(fr=r(),fr<=n)return Vr=fr/y-.43,k=Vr*(2*m/(.5-lv(Vr))+g)+h,fv(k);if(fr>=y?Vr=r()-.5:(Vr=fr/y-.93,Vr=oOr(Vr)*.5-Vr,fr=y*r()),c=.5-lv(Vr),O=fv(Vr*(2*m/c+g)+h),!(O<0||O>e))if(fr=fr*i/(m/(c*c)+g),p=lv(O-J),p>15){if(fr=xa(fr),o=p/s,v=(p/3+.625)*p,v+=fOr,v/=s,o*=v+.5,uu=-(p*p)/(2*s),fr<uu-o||fr<=uu+o&&(q=e-O+1,hn=N+(e+1)*xa(f/q),hn+=(O+.5)*xa(q*k/(O+1)),hn+=-(r0(O)+r0(e-O)),fr<=hn))return O}else{if(E=1,J<O)for(G=J;G<=O;G++)E*=l/G-k;else if(J>O)for(G=O;G<=J;G++)fr*=l/G-k;if(fr<=E)return O}}}ZC.exports=lOr});var rj=u((BZr,xC)=>{"use strict";var cOr=DC(),pOr=QC();function KC(r,e,t){return t>.5?e-KC(r,e,1-t):e*t<10?cOr(r,e,t):pOr(r,e,t)}xC.exports=KC});var cv=u((CZr,oj)=>{"use strict";var ae=w(),e0=_(),ej=R(),tj=T(),ij=I(),nj=A(),aj=L(),gOr=B(),uj=b(),mOr=vv(),qOr=UC(),t0=X().factory,yOr=F(),hOr=WC(),sj=rj();function dOr(){var r,e,t,i,n,a;if(arguments.length===0)e=t0();else if(arguments.length===1){if(r=arguments[0],!tj(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(nj(r,"prng")){if(!ij(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=t0(r)}else{if(n=arguments[0],a=arguments[1],i=hOr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!tj(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(nj(r,"prng")){if(!ij(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=t0(r)}else e=t0()}return n===void 0?t=y:t=q,ae(t,"NAME","binomial"),r&&r.prng?(ae(t,"seed",null),ae(t,"seedLength",null),ej(t,"state",aj(null),gOr),ae(t,"stateLength",null),ae(t,"byteLength",null),ae(t,"toJSON",aj(null)),ae(t,"PRNG",e)):(e0(t,"seed",s),e0(t,"seedLength",o),ej(t,"state",l,c),e0(t,"stateLength",v),e0(t,"byteLength",f),ae(t,"toJSON",p),ae(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=yOr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return sj(e,n,a)}function y(m,g){return uj(m)||uj(g)||!mOr(m)||!qOr(g)?NaN:sj(e,m,g)}}oj.exports=dOr});var fj=u((jZr,vj)=>{"use strict";var wOr=cv(),bOr=wOr();vj.exports=bOr});var pj=u((GZr,cj)=>{"use strict";var EOr=w(),lj=fj(),NOr=cv();EOr(lj,"factory",NOr);cj.exports=lj});var mj=u((VZr,gj)=>{"use strict";var AOr=V(),OOr=C(),SOr=yt(),TOr=qt(),IOr=Fe();function LOr(r){var e,t;return e=!0,i;function i(){var n,a,s,o;if(e){do n=r(),a=r();while(n===0);return s=AOr(-2*OOr(n)),o=IOr*a,t=s*TOr(o),e=!1,s*SOr(o)}return e=!0,t}}gj.exports=LOr});var yj=u((UZr,qj)=>{"use strict";var _Or=V(),POr=C(),ROr=qt(),FOr=Or(),MOr=ROr(FOr);function BOr(r){var e=_Or(-2*POr(r));return e*MOr}qj.exports=BOr});var dj=u((HZr,hj)=>{"use strict";var COr=V(),jOr=C(),GOr=qt(),VOr=Fe();function UOr(r){var e=COr(-2*jOr(r)),t=VOr*r;return e*GOr(t)}hj.exports=UOr});var pv=u((WZr,Nj)=>{"use strict";var Rr=w(),i0=_(),wj=R(),HOr=T(),WOr=I(),kOr=ur().isPrimitive,pn=A(),DOr=Jr(),bj=X().factory,Ej=L(),XOr=B(),JOr=F(),zOr=mj(),YOr=yj(),$Or=dj();function ZOr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!HOr(r))throw new TypeError("invalid argument. Must provide an object. Value: `"+r+"`.");if(pn(r,"copy")&&(n.copy=r.copy,!kOr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(pn(r,"prng")){if(!WOr(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else if(pn(r,"state")){if(n.state=r.state,!DOr(r.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+r.state+"`.")}else if(pn(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+r.seed+"`.")}return n.state===void 0?e===void 0?(i=bj(n),e=i.normalized):n.seed=null:(i=bj(n),e=i.normalized),t=zOr(e),Rr(t,"NAME","box-muller"),n.seed===null?(Rr(t,"seed",null),Rr(t,"seedLength",null)):(i0(t,"seed",a),i0(t,"seedLength",s)),r&&r.prng?(wj(t,"state",Ej(null),XOr),Rr(t,"stateLength",null),Rr(t,"byteLength",null),Rr(t,"toJSON",Ej(null))):(wj(t,"state",f,l),i0(t,"stateLength",o),i0(t,"byteLength",v),Rr(t,"toJSON",c)),Rr(t,"PRNG",e),pn(e,"MIN")?(Rr(t,"MIN",YOr(e.MIN)),Rr(t,"MAX",$Or(e.MIN))):(Rr(t,"MIN",null),Rr(t,"MAX",null)),t;function a(){return i.seed}function s(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function l(p){i.state=p}function c(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=JOr(i.state),p.params=[],p}}Nj.exports=ZOr});var Oj=u((kZr,Aj)=>{"use strict";var QOr=pv(),KOr=QOr();Aj.exports=KOr});var Ij=u((DZr,Tj)=>{"use strict";var xOr=w(),Sj=Oj(),rSr=pv();xOr(Sj,"factory",rSr);Tj.exports=Sj});var _j=u((XZr,Lj)=>{"use strict";var eSr=j().isPrimitive,tSr=W().isPrimitive,iSr=ir();function nSr(r,e){return!eSr(r)||iSr(r)?new TypeError("invalid argument. `x0` must be a number primitive and not `NaN`. Value: `"+r+"`."):tSr(e)?null:new TypeError("invalid argument. `gamma` must be a positive number. Value: `"+e+"`.")}Lj.exports=nSr});var Rj=u((JZr,Pj)=>{"use strict";var aSr=Ho(),uSr=Or();function sSr(r,e,t){return e+t*aSr(uSr*(r()-.5))}Pj.exports=sSr});var gv=u((zZr,Uj)=>{"use strict";var ze=w(),n0=_(),Fj=R(),Mj=T(),Bj=I(),Cj=A(),jj=L(),oSr=B(),Gj=b(),ci=Xe().factory,vSr=F(),fSr=_j(),Vj=Rj();function lSr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=ci();else if(arguments.length===1){if(t=arguments[0],!Mj(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Cj(t,"prng")){if(!Bj(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ci({prng:t.prng})}else e=ci(t)}else{if(s=arguments[0],r=arguments[1],a=fSr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!Mj(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Cj(t,"prng")){if(!Bj(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ci({prng:t.prng})}else e=ci(t)}else e=ci()}return s===void 0?n=m:n=y,i=e.PRNG,ze(n,"NAME","cauchy"),t&&t.prng?(ze(n,"seed",null),ze(n,"seedLength",null),Fj(n,"state",jj(null),oSr),ze(n,"stateLength",null),ze(n,"byteLength",null),ze(n,"toJSON",jj(null))):(n0(n,"seed",o),n0(n,"seedLength",v),Fj(n,"state",c,p),n0(n,"stateLength",f),n0(n,"byteLength",l),ze(n,"toJSON",q)),ze(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=vSr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return Vj(e,s,r)}function m(g,h){return Gj(g)||Gj(h)||h<=0?NaN:Vj(e,g,h)}}Uj.exports=lSr});var Wj=u((YZr,Hj)=>{"use strict";var cSr=gv(),pSr=cSr();Hj.exports=pSr});var Xj=u(($Zr,Dj)=>{"use strict";var gSr=w(),kj=Wj(),mSr=gv();gSr(kj,"factory",mSr);Dj.exports=kj});var mv=u((ZZr,Qj)=>{"use strict";var Ye=w(),a0=_(),Jj=R(),qSr=W().isPrimitive,zj=T(),Yj=I(),$j=A(),Zj=L(),ySr=B(),hSr=b(),pi=li().factory,dSr=F();function wSr(){var r,e,t,i,n;if(arguments.length===0)r=pi();else if(arguments.length===1&&zj(arguments[0]))if(t=arguments[0],$j(t,"prng")){if(!Yj(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=pi({prng:t.prng})}else r=pi(t);else{if(n=arguments[0],!qSr(n))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+n+"`.");if(arguments.length>1){if(t=arguments[1],!zj(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if($j(t,"prng")){if(!Yj(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=pi(n/2,.5,{prng:t.prng})}else r=pi(n/2,.5,t)}else r=pi(n/2,.5)}return n===void 0?i=q:i=p,e=r.PRNG,Ye(i,"NAME","chisquare"),t&&t.prng?(Ye(i,"seed",null),Ye(i,"seedLength",null),Jj(i,"state",Zj(null),ySr),Ye(i,"stateLength",null),Ye(i,"byteLength",null),Ye(i,"toJSON",Zj(null))):(a0(i,"seed",a),a0(i,"seedLength",s),Jj(i,"state",f,l),a0(i,"stateLength",o),a0(i,"byteLength",v),Ye(i,"toJSON",c)),Ye(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function l(y){e.state=y}function c(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=dSr(e.state),n===void 0?y.params=[]:y.params=[n],y}function p(){return r()}function q(y){return hSr(y)||y<=0?NaN:r(y/2,.5)}}Qj.exports=wSr});var xj=u((QZr,Kj)=>{"use strict";var bSr=mv(),ESr=bSr();Kj.exports=ESr});var gn=u((KZr,eG)=>{"use strict";var NSr=w(),rG=xj(),ASr=mv();NSr(rG,"factory",ASr);eG.exports=rG});var qv=u((xZr,oG)=>{"use strict";var $e=w(),u0=_(),tG=R(),OSr=W().isPrimitive,iG=T(),nG=I(),aG=A(),uG=L(),SSr=B(),TSr=b(),gi=gn().factory,ISr=F(),sG=V();function LSr(){var r,e,t,i,n;if(arguments.length===0)r=gi();else if(arguments.length===1&&iG(arguments[0]))if(t=arguments[0],aG(t,"prng")){if(!nG(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=gi({prng:t.prng})}else r=gi(t);else{if(n=arguments[0],!OSr(n))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+n+"`.");if(arguments.length>1){if(t=arguments[1],!iG(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(aG(t,"prng")){if(!nG(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=gi(n,{prng:t.prng})}else r=gi(n,t)}else r=gi(n)}return n===void 0?i=q:i=p,e=r.PRNG,$e(i,"NAME","chi"),t&&t.prng?($e(i,"seed",null),$e(i,"seedLength",null),tG(i,"state",uG(null),SSr),$e(i,"stateLength",null),$e(i,"byteLength",null),$e(i,"toJSON",uG(null))):(u0(i,"seed",a),u0(i,"seedLength",s),tG(i,"state",f,l),u0(i,"stateLength",o),u0(i,"byteLength",v),$e(i,"toJSON",c)),$e(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function l(y){e.state=y}function c(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=ISr(e.state),n===void 0?y.params=[]:y.params=[n],y}function p(){return sG(r())}function q(y){return TSr(y)||y<=0?NaN:sG(r(y))}}oG.exports=LSr});var fG=u((rQr,vG)=>{"use strict";var _Sr=qv(),PSr=_Sr();vG.exports=PSr});var pG=u((eQr,cG)=>{"use strict";var RSr=w(),lG=fG(),FSr=qv();RSr(lG,"factory",FSr);cG.exports=lG});var mG=u((tQr,gG)=>{"use strict";var MSr=j().isPrimitive,BSr=W().isPrimitive,CSr=ir();function jSr(r,e){return!MSr(r)||CSr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):BSr(e)?null:new TypeError("invalid argument. `s` must be a positive number. Value: `"+e+"`.")}gG.exports=jSr});var yG=u((iQr,qG)=>{"use strict";var yv=b(),GSr=ki(),VSr=Or();function USr(r,e,t){var i;return yv(r)||yv(e)||yv(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+GSr(i)/VSr)/2)}qG.exports=USr});var dG=u((nQr,hG)=>{"use strict";var HSr=L(),WSr=To().factory,hv=b(),kSr=ki(),DSr=Or();function XSr(r,e){if(hv(r)||hv(e)||e<0)return HSr(NaN);if(e===0)return WSr(r);return t;function t(i){var n;return hv(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+kSr(n)/DSr)/2)}}hG.exports=XSr});var EG=u((aQr,bG)=>{"use strict";var JSr=w(),wG=yG(),zSr=dG();JSr(wG,"factory",zSr);bG.exports=wG});var dv=u((uQr,NG)=>{"use strict";var YSr=EG(),$Sr=1e4,ZSr=1e-12;function QSr(r,e,t){var i,n,a,s,o;for(o=1,i=e-t,n=e+t;o<$Sr;){if(s=(i+n)/2,n-i<ZSr)return s;a=YSr(s,e,t),r>a?i=s:n=s,o+=1}return s}NG.exports=QSr});var OG=u((sQr,AG)=>{"use strict";var wv=b(),KSr=dv();function xSr(r,e,t){return wv(e)||wv(t)||wv(r)||t<0||r<0||r>1?NaN:t===0?e:KSr(r,e,t)}AG.exports=xSr});var TG=u((oQr,SG)=>{"use strict";var rTr=b();function eTr(r,e){return rTr(r)||r<0||r>1?NaN:e}SG.exports=eTr});var _G=u((vQr,LG)=>{"use strict";var tTr=L(),IG=b();function iTr(r){if(IG(r))return tTr(NaN);return e;function e(t){return IG(t)||t<0||t>1?NaN:r}}LG.exports=iTr});var bv=u((fQr,RG)=>{"use strict";var nTr=w(),PG=TG(),aTr=_G();nTr(PG,"factory",aTr);RG.exports=PG});var MG=u((lQr,FG)=>{"use strict";var uTr=L(),sTr=bv().factory,Ev=b(),oTr=dv();function vTr(r,e){if(Ev(r)||Ev(e)||e<0)return uTr(NaN);if(e===0)return sTr(r);return t;function t(i){return Ev(i)||i<0||i>1?NaN:oTr(i,r,e)}}FG.exports=vTr});var jG=u((cQr,CG)=>{"use strict";var fTr=w(),BG=OG(),lTr=MG();fTr(BG,"factory",lTr);CG.exports=BG});var VG=u((pQr,GG)=>{"use strict";var cTr=jG();function pTr(r,e,t){return cTr(r(),e,t)}GG.exports=pTr});var Nv=u((gQr,zG)=>{"use strict";var ue=w(),s0=_(),UG=R(),HG=T(),WG=I(),kG=A(),DG=L(),gTr=B(),o0=X().factory,XG=b(),mTr=F(),qTr=mG(),JG=VG();function yTr(){var r,e,t,i,n,a;if(arguments.length===0)e=o0();else if(arguments.length===1){if(r=arguments[0],!HG(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(kG(r,"prng")){if(!WG(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=o0(r)}else{if(n=arguments[0],a=arguments[1],i=qTr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!HG(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(kG(r,"prng")){if(!WG(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=o0(r)}else e=o0()}return n===void 0?t=y:t=q,ue(t,"NAME","cosine"),r&&r.prng?(ue(t,"seed",null),ue(t,"seedLength",null),UG(t,"state",DG(null),gTr),ue(t,"stateLength",null),ue(t,"byteLength",null),ue(t,"toJSON",DG(null)),ue(t,"PRNG",e)):(s0(t,"seed",s),s0(t,"seedLength",o),UG(t,"state",l,c),s0(t,"stateLength",v),s0(t,"byteLength",f),ue(t,"toJSON",p),ue(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=mTr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return JG(e,n,a)}function y(m,g){return XG(m)||XG(g)||g<=0?NaN:JG(e,m,g)}}zG.exports=yTr});var $G=u((mQr,YG)=>{"use strict";var hTr=Nv(),dTr=hTr();YG.exports=dTr});var KG=u((qQr,QG)=>{"use strict";var wTr=w(),ZG=$G(),bTr=Nv();wTr(ZG,"factory",bTr);QG.exports=ZG});var tV=u((yQr,eV)=>{"use strict";var xG=Fr().isPrimitive,rV=ir();function ETr(r,e){return!xG(r)||rV(r)?new TypeError("invalid argument. First argument must be an integer and not `NaN`. Value: `"+r+"`."):!xG(e)||rV(e)?new TypeError("invalid argument. Second argument must be an integer and not `NaN`. Value: `"+e+"`."):r>e?new RangeError("invalid argument. Minimum support `a` must be less than or equal to maximum support `b`. Value: `["+r+","+e+"]`."):null}eV.exports=ETr});var aV=u((hQr,nV)=>{"use strict";var Av=$i(),mi=Q();function iV(r,e,t){var i,n,a,s,o,v,f,l,c;if(a=t-e,a===0)return e;if(f=r.MIN,l=r.MAX,n=l-f,n===a)return r()-f+e;if(n<a)for(s=0;;){for(a===Av?(s=mi(a/(n+1)),a%(n+1)===n&&(s+=1)):s=mi((a+1)/(n+1)),i=0,v=1;v<=s;){if(i+=(r()-f)*v,v*n===a-v+1)return i;v*=n+1}if(c=iV(r,0,mi(a/v)),!(c>Av/v)&&(c*=v,i+=c,!(i>a)))return i+e}for(n===Av?(o=mi(n/(a+1)),n%(a+1)===a&&(o+=1)):o=mi((n+1)/(a+1));;)if(i=r()-f,i=mi(i/o),i<=a)return i+e}nV.exports=iV});var Ov=u((dQr,pV)=>{"use strict";var se=w(),v0=_(),uV=R(),sV=T(),oV=I(),vV=A(),fV=L(),NTr=B(),f0=X().factory,lV=b(),qi=Ar(),ATr=F(),OTr=tV(),cV=aV();function STr(){var r,e,t,i,n,a;if(arguments.length===0)e=f0();else if(arguments.length===1){if(r=arguments[0],!sV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(vV(r,"prng")){if(!oV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");if(e=r.prng,!qi(e.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!qi(e.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else e=f0(r)}else{if(n=arguments[0],a=arguments[1],i=OTr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!sV(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(vV(r,"prng")){if(!oV(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");if(e=r.prng,!qi(e.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!qi(e.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else e=f0(r)}else e=f0()}return n===void 0?t=y:t=q,se(t,"NAME","discrete-uniform"),r&&r.prng?(se(t,"seed",null),se(t,"seedLength",null),uV(t,"state",fV(null),NTr),se(t,"stateLength",null),se(t,"byteLength",null),se(t,"toJSON",fV(null)),se(t,"PRNG",e)):(v0(t,"seed",s),v0(t,"seedLength",o),uV(t,"state",l,c),v0(t,"stateLength",v),v0(t,"byteLength",f),se(t,"toJSON",p),se(t,"PRNG",e)),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=ATr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return cV(e,n,a)}function y(m,g){return lV(m)||lV(g)||!qi(m)||!qi(g)||m>g?NaN:cV(e,m,g)}}pV.exports=STr});var mV=u((wQr,gV)=>{"use strict";var TTr=Ov(),ITr=TTr();gV.exports=ITr});var hV=u((bQr,yV)=>{"use strict";var LTr=w(),qV=mV(),_Tr=Ov();LTr(qV,"factory",_Tr);yV.exports=qV});var wV=u((EQr,dV)=>{"use strict";var PTr=W().isPrimitive,RTr=xr().isPrimitive;function FTr(r,e){return RTr(r)?PTr(e)?null:new TypeError("invalid argument. Second argument must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+r+"`.")}dV.exports=FTr});var EV=u((NQr,bV)=>{"use strict";var MTr=C();function BTr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*MTr(i)}bV.exports=BTr});var Sv=u((AQr,_V)=>{"use strict";var oe=w(),l0=_(),NV=R(),AV=T(),OV=I(),SV=A(),TV=L(),CTr=B(),c0=X().factory,IV=b(),jTr=vv(),GTr=F(),VTr=wV(),LV=EV();function UTr(){var r,e,t,i,n,a;if(arguments.length===0)e=c0();else if(arguments.length===1){if(t=arguments[0],!AV(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(SV(t,"prng")){if(!OV(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=t.prng}else e=c0(t)}else{if(a=arguments[0],r=arguments[1],n=VTr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!AV(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(SV(t,"prng")){if(!OV(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=t.prng}else e=c0(t)}else e=c0()}return a===void 0?i=y:i=q,oe(i,"NAME","erlang"),t&&t.prng?(oe(i,"seed",null),oe(i,"seedLength",null),NV(i,"state",TV(null),CTr),oe(i,"stateLength",null),oe(i,"byteLength",null),oe(i,"toJSON",TV(null)),oe(i,"PRNG",e)):(l0(i,"seed",s),l0(i,"seedLength",o),NV(i,"state",l,c),l0(i,"stateLength",v),l0(i,"byteLength",f),oe(i,"toJSON",p),oe(i,"PRNG",e),e=e.normalized),i;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=GTr(e.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return LV(e,a,r)}function y(m,g){return IV(m)||IV(g)||!jTr(m)||g<=0?NaN:LV(e,m,g)}}_V.exports=UTr});var RV=u((OQr,PV)=>{"use strict";var HTr=Sv(),WTr=HTr();PV.exports=WTr});var BV=u((SQr,MV)=>{"use strict";var kTr=w(),FV=RV(),DTr=Sv();kTr(FV,"factory",DTr);MV.exports=FV});var jV=u((TQr,CV)=>{"use strict";var XTr=C();function JTr(r,e){return-XTr(1-r())/e}CV.exports=JTr});var Tv=u((IQr,DV)=>{"use strict";var ve=w(),p0=_(),GV=R(),zTr=W().isPrimitive,VV=T(),UV=I(),HV=A(),WV=L(),YTr=B(),g0=X().factory,$Tr=b(),ZTr=F(),kV=jV();function QTr(){var r,e,t,i;if(arguments.length===0)t=g0();else if(arguments.length===1&&VV(arguments[0]))if(e=arguments[0],HV(e,"prng")){if(!UV(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=g0(e);else{if(r=arguments[0],!zTr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!VV(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(HV(e,"prng")){if(!UV(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=g0(e)}else t=g0()}return r===void 0?i=p:i=c,ve(i,"NAME","exponential"),e&&e.prng?(ve(i,"seed",null),ve(i,"seedLength",null),GV(i,"state",WV(null),YTr),ve(i,"stateLength",null),ve(i,"byteLength",null),ve(i,"toJSON",WV(null)),ve(i,"PRNG",t)):(p0(i,"seed",n),p0(i,"seedLength",a),GV(i,"state",v,f),p0(i,"stateLength",s),p0(i,"byteLength",o),ve(i,"toJSON",l),ve(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=ZTr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return kV(t,r)}function p(q){return $Tr(q)||q<=0?NaN:kV(t,q)}}DV.exports=QTr});var JV=u((LQr,XV)=>{"use strict";var KTr=Tv(),xTr=KTr();XV.exports=xTr});var $V=u((_Qr,YV)=>{"use strict";var rIr=w(),zV=JV(),eIr=Tv();rIr(zV,"factory",eIr);YV.exports=zV});var KV=u((PQr,QV)=>{"use strict";var ZV=W().isPrimitive;function tIr(r,e){return ZV(r)?ZV(e)?null:new TypeError("invalid argument. `d2` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `d1` must be a positive number. Value: `"+r+"`.")}QV.exports=tIr});var rU=u((RQr,xV)=>{"use strict";function iIr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}xV.exports=iIr});var Iv=u((FQr,oU)=>{"use strict";var Ze=w(),m0=_(),eU=R(),tU=T(),iU=I(),nU=A(),aU=L(),nIr=B(),yi=gn().factory,uU=b(),aIr=F(),uIr=KV(),sU=rU();function sIr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=yi();else if(arguments.length===1){if(e=arguments[0],!tU(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(nU(e,"prng")){if(!iU(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");r=yi({prng:e.prng})}else r=yi(e)}else{if(a=arguments[0],s=arguments[1],n=uIr(a,s),n)throw n;if(arguments.length>2){if(e=arguments[2],!tU(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(nU(e,"prng")){if(!iU(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");r=yi({prng:e.prng})}else r=yi(e)}else r=yi()}return a===void 0?i=m:i=y,t=r.PRNG,Ze(i,"NAME","f"),e&&e.prng?(Ze(i,"seed",null),Ze(i,"seedLength",null),eU(i,"state",aU(null),nIr),Ze(i,"stateLength",null),Ze(i,"byteLength",null),Ze(i,"toJSON",aU(null))):(m0(i,"seed",o),m0(i,"seedLength",v),eU(i,"state",c,p),m0(i,"stateLength",f),m0(i,"byteLength",l),Ze(i,"toJSON",q)),Ze(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function l(){return t.byteLength}function c(){return t.state}function p(g){t.state=g}function q(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=aIr(t.state),a===void 0?g.params=[]:g.params=[a,s],g}function y(){return sU(r,a,s)}function m(g,h){return uU(g)||uU(h)||g<=0||h<=0?NaN:sU(r,g,h)}}oU.exports=sIr});var fU=u((MQr,vU)=>{"use strict";var oIr=Iv(),vIr=oIr();vU.exports=vIr});var pU=u((BQr,cU)=>{"use strict";var fIr=w(),lU=fU(),lIr=Iv();fIr(lU,"factory",lIr);cU.exports=lU});var qU=u((CQr,mU)=>{"use strict";var gU=W().isPrimitive,cIr=j().isPrimitive,Lv=ir();function pIr(r,e,t){return!gU(r)||Lv(r)?new TypeError("invalid argument. First argument must be a positive number primitive and not `NaN`. Value: `"+r+"`."):!gU(e)||Lv(e)?new TypeError("invalid argument. Second argument must be a positive number primitive and not `NaN`. Value: `"+e+"`."):!cIr(t)||Lv(t)?new TypeError("invalid argument. Third argument must be a number primitive and not `NaN`. Value: `"+t+"`."):null}mU.exports=pIr});var hU=u((jQr,yU)=>{"use strict";var gIr=$(),mIr=C();function qIr(r,e,t,i){return i+t*gIr(-mIr(r()),-1/e)}yU.exports=qIr});var Pv=u((GQr,OU)=>{"use strict";var fe=w(),q0=_(),dU=R(),wU=T(),bU=I(),EU=A(),NU=L(),yIr=B(),y0=X().factory,_v=b(),hIr=F(),dIr=qU(),AU=hU();function wIr(){var r,e,t,i,n,a,s;if(arguments.length===0)t=y0();else if(arguments.length===1){if(e=arguments[0],!wU(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(EU(e,"prng")){if(!bU(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=y0(e)}else{if(r=arguments[0],a=arguments[1],s=arguments[2],n=dIr(r,a,s),n)throw n;if(arguments.length>3){if(e=arguments[3],!wU(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(EU(e,"prng")){if(!bU(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=y0(e)}else t=y0()}return r===void 0?i=m:i=y,fe(i,"NAME","frechet"),e&&e.prng?(fe(i,"seed",null),fe(i,"seedLength",null),dU(i,"state",NU(null),yIr),fe(i,"stateLength",null),fe(i,"byteLength",null),fe(i,"toJSON",NU(null)),fe(i,"PRNG",t)):(q0(i,"seed",o),q0(i,"seedLength",v),dU(i,"state",c,p),q0(i,"stateLength",f),q0(i,"byteLength",l),fe(i,"toJSON",q),fe(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function l(){return t.byteLength}function c(){return t.state}function p(g){t.state=g}function q(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=hIr(t.state),r===void 0?g.params=[]:g.params=[r,a,s],g}function y(){return AU(t,r,a,s)}function m(g,h,E){return _v(g)||_v(h)||_v(E)||g<=0||h<=0?NaN:AU(t,g,h,E)}}OU.exports=wIr});var TU=u((VQr,SU)=>{"use strict";var bIr=Pv(),EIr=bIr();SU.exports=EIr});var _U=u((UQr,LU)=>{"use strict";var NIr=w(),IU=TU(),AIr=Pv();NIr(IU,"factory",AIr);LU.exports=IU});var FU=u((HQr,RU)=>{"use strict";var OIr=Q(),PU=C();function SIr(r,e){var t=r();return t===0&&(t=r()),OIr(PU(t)/PU(1-e))}RU.exports=SIr});var Rv=u((WQr,UU)=>{"use strict";var le=w(),h0=_(),MU=R(),BU=T(),TIr=tn().isPrimitive,CU=I(),jU=A(),GU=L(),IIr=B(),d0=X().factory,LIr=b(),_Ir=F(),VU=FU();function PIr(){var r,e,t,i;if(arguments.length===0)e=d0();else if(arguments.length===1&&BU(arguments[0]))if(r=arguments[0],jU(r,"prng")){if(!CU(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=d0(r);else{if(i=arguments[0],!TIr(i))throw new TypeError("invalid argument. First argument must be a probability. Value: `"+i+"`.");if(arguments.length>1){if(r=arguments[1],!BU(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(jU(r,"prng")){if(!CU(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=d0(r)}else e=d0()}return i===void 0?t=p:t=c,le(t,"NAME","geometric"),r&&r.prng?(le(t,"seed",null),le(t,"seedLength",null),MU(t,"state",GU(null),IIr),le(t,"stateLength",null),le(t,"byteLength",null),le(t,"toJSON",GU(null)),le(t,"PRNG",e)):(h0(t,"seed",n),h0(t,"seedLength",a),MU(t,"state",v,f),h0(t,"stateLength",s),h0(t,"byteLength",o),le(t,"toJSON",l),le(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(q){e.state=q}function l(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=_Ir(e.state),i===void 0?q.params=[]:q.params=[i],q}function c(){return VU(e,i)}function p(q){return LIr(q)||q<0||q>1?NaN:VU(e,q)}}UU.exports=PIr});var WU=u((kQr,HU)=>{"use strict";var RIr=Rv(),FIr=RIr();HU.exports=FIr});var XU=u((DQr,DU)=>{"use strict";var MIr=w(),kU=WU(),BIr=Rv();MIr(kU,"factory",BIr);DU.exports=kU});var zU=u((XQr,JU)=>{"use strict";var CIr=j().isPrimitive,jIr=W().isPrimitive,GIr=ir();function VIr(r,e){return!CIr(r)||GIr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):jIr(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`.")}JU.exports=VIr});var ZU=u((JQr,$U)=>{"use strict";var YU=C();function UIr(r,e,t){return e-t*YU(-YU(r()))}$U.exports=UIr});var Fv=u((zQr,nH)=>{"use strict";var ce=w(),w0=_(),QU=R(),KU=T(),xU=I(),rH=A(),eH=L(),HIr=B(),b0=X().factory,tH=b(),WIr=F(),kIr=zU(),iH=ZU();function DIr(){var r,e,t,i,n,a;if(arguments.length===0)t=b0();else if(arguments.length===1){if(e=arguments[0],!KU(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(rH(e,"prng")){if(!xU(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=b0(e)}else{if(a=arguments[0],r=arguments[1],n=kIr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!KU(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(rH(e,"prng")){if(!xU(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=b0(e)}else t=b0()}return a===void 0?i=y:i=q,ce(i,"NAME","gumbel"),e&&e.prng?(ce(i,"seed",null),ce(i,"seedLength",null),QU(i,"state",eH(null),HIr),ce(i,"stateLength",null),ce(i,"byteLength",null),ce(i,"toJSON",eH(null)),ce(i,"PRNG",t)):(w0(i,"seed",s),w0(i,"seedLength",o),QU(i,"state",l,c),w0(i,"stateLength",v),w0(i,"byteLength",f),ce(i,"toJSON",p),ce(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function l(){return t.state}function c(m){t.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=WIr(t.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return iH(t,a,r)}function y(m,g){return tH(m)||tH(g)||g<=0?NaN:iH(t,m,g)}}nH.exports=DIr});var uH=u((YQr,aH)=>{"use strict";var XIr=Fv(),JIr=XIr();aH.exports=JIr});var vH=u(($Qr,oH)=>{"use strict";var zIr=w(),sH=uH(),YIr=Fv();zIr(sH,"factory",YIr);oH.exports=sH});var lH=u((ZQr,fH)=>{"use strict";var $Ir=Q();function ZIr(r){return $Ir(r)===r&&r>=0}fH.exports=ZIr});var pH=u((QQr,cH)=>{"use strict";var QIr=lH();cH.exports=QIr});var mH=u((KQr,gH)=>{"use strict";var Mv=Ie().isPrimitive;function KIr(r,e,t){return Mv(r)?Mv(e)?Mv(t)?t>r?new RangeError("invalid argument. `n` must be less than or equal to `N`. Value: `"+t+"`."):e>r?new RangeError("invalid argument. `K` must be less than or equal to `N`. Value: `"+e+"`."):null:new TypeError("invalid argument. `n` must be a nonnegative integer. Value: `"+t+"`."):new TypeError("invalid argument. `K` must be a nonnegative integer. Value: `"+e+"`."):new TypeError("invalid argument. `N` must be a nonnegative integer. Value: `"+r+"`.")}gH.exports=KIr});var qH=u((xQr,xIr)=>{xIr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var hH=u((rKr,yH)=>{"use strict";var rLr=b(),eLr=Ar(),tLr=Dt(),iLr=P(),nLr=qH(),aLr=170;function uLr(r){return rLr(r)?NaN:eLr(r)?r<0?NaN:r<=aLr?nLr[r]:iLr:tLr(r+1)}yH.exports=uLr});var wH=u((eKr,dH)=>{"use strict";var sLr=hH();dH.exports=sLr});var EH=u((tKr,bH)=>{"use strict";var Qe=wH();function oLr(r,e,t,i){var n,a,s;for(i<t?(n=Qe(t)*Qe(e+t-i)/(Qe(e+t)*Qe(t-i)),s=0):(n=Qe(e)*Qe(i)/(Qe(i-t)*Qe(e+t)),s=i-t),a=r();a>n;)a-=n,n*=(e-s)*(i-s)/((s+1)*(t-i+1+s)),s+=1;return s}bH.exports=oLr});var AH=u((iKr,NH)=>{"use strict";var E0=EH();function vLr(r,e,t,i){var n,a,s,o;return i>e/2?(s=e-i,2*t<=e?(n=t,a=e-t,o=E0(r,n,a,s),t-o):(a=t,n=e-t,o=E0(r,n,a,s),i-e+t+o)):(s=i,2*t<=e?(n=t,a=e-t,o=E0(r,n,a,s),o):(n=e-t,a=t,o=E0(r,n,a,s),i-o))}NH.exports=vLr});var Cv=u((nKr,RH)=>{"use strict";var pe=w(),N0=_(),OH=R(),SH=T(),TH=I(),IH=A(),LH=L(),fLr=B(),A0=X().factory,Bv=pH(),_H=P(),lLr=F(),cLr=mH(),PH=AH();function pLr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=A0();else if(arguments.length===1){if(r=arguments[0],!SH(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(IH(r,"prng")){if(!TH(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=A0(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=cLr(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!SH(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(IH(r,"prng")){if(!TH(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=A0(r)}else e=A0()}return n===void 0?t=m:t=y,pe(t,"NAME","hypergeometric"),r&&r.prng?(pe(t,"seed",null),pe(t,"seedLength",null),OH(t,"state",LH(null),fLr),pe(t,"stateLength",null),pe(t,"byteLength",null),pe(t,"toJSON",LH(null)),pe(t,"PRNG",e)):(N0(t,"seed",o),N0(t,"seedLength",v),OH(t,"state",c,p),N0(t,"stateLength",f),N0(t,"byteLength",l),pe(t,"toJSON",q),pe(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function l(){return e.byteLength}function c(){return e.state}function p(g){e.state=g}function q(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=lLr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function y(){return PH(e,n,a,s)}function m(g,h,E){return g===_H||h===_H||!Bv(g)||!Bv(h)||!Bv(E)||E>g?NaN:PH(e,g,h,E)}}RH.exports=pLr});var MH=u((aKr,FH)=>{"use strict";var gLr=Cv(),mLr=gLr();FH.exports=mLr});var jH=u((uKr,CH)=>{"use strict";var qLr=w(),BH=MH(),yLr=Cv();qLr(BH,"factory",yLr);CH.exports=BH});var UH=u((sKr,VH)=>{"use strict";var GH=W().isPrimitive;function hLr(r,e){return GH(r)?GH(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}VH.exports=hLr});var jv=u((oKr,zH)=>{"use strict";var Ke=w(),O0=_(),HH=R(),WH=T(),kH=I(),DH=A(),XH=L(),dLr=B(),hi=li().factory,JH=b(),wLr=F(),bLr=UH();function ELr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=hi();else if(arguments.length===1){if(i=arguments[0],!WH(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(DH(i,"prng")){if(!kH(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");r=hi({prng:i.prng})}else r=hi(i)}else{if(e=arguments[0],t=arguments[1],s=bLr(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!WH(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(DH(i,"prng")){if(!kH(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");r=hi(e,t,{prng:i.prng})}else r=hi(e,t,i)}else r=hi(e,t)}return e===void 0?a=m:a=y,n=r.PRNG,Ke(a,"NAME","invgamma"),i&&i.prng?(Ke(a,"seed",null),Ke(a,"seedLength",null),HH(a,"state",XH(null),dLr),Ke(a,"stateLength",null),Ke(a,"byteLength",null),Ke(a,"toJSON",XH(null))):(O0(a,"seed",o),O0(a,"seedLength",v),HH(a,"state",c,p),O0(a,"stateLength",f),O0(a,"byteLength",l),Ke(a,"toJSON",q)),Ke(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function l(){return n.byteLength}function c(){return n.state}function p(g){n.state=g}function q(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=wLr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function y(){return 1/r()}function m(g,h){return JH(g)||JH(h)||g<=0||h<=0?NaN:1/r(g,h)}}zH.exports=ELr});var $H=u((vKr,YH)=>{"use strict";var NLr=jv(),ALr=NLr();YH.exports=ALr});var KH=u((fKr,QH)=>{"use strict";var OLr=w(),ZH=$H(),SLr=jv();OLr(ZH,"factory",SLr);QH.exports=ZH});var eW=u((lKr,rW)=>{"use strict";var xH=W().isPrimitive;function TLr(r,e){return xH(r)?xH(e)?null:new TypeError("invalid argument. `b` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `a` must be a positive number. Value: `"+r+"`.")}rW.exports=TLr});var nW=u((cKr,iW)=>{"use strict";var tW=$();function ILr(r,e,t){var i=r();return tW(1-tW(1-i,1/t),1/e)}iW.exports=ILr});var Gv=u((pKr,cW)=>{"use strict";var ge=w(),S0=_(),aW=R(),uW=T(),sW=I(),oW=A(),vW=L(),LLr=B(),T0=X().factory,fW=b(),_Lr=F(),PLr=eW(),lW=nW();function RLr(){var r,e,t,i,n,a;if(arguments.length===0)e=T0();else if(arguments.length===1){if(r=arguments[0],!uW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(oW(r,"prng")){if(!sW(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=T0(r)}else{if(n=arguments[0],a=arguments[1],i=PLr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!uW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(oW(r,"prng")){if(!sW(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=T0(r)}else e=T0()}return n===void 0?t=y:t=q,ge(t,"NAME","kumaraswamy"),r&&r.prng?(ge(t,"seed",null),ge(t,"seedLength",null),aW(t,"state",vW(null),LLr),ge(t,"stateLength",null),ge(t,"byteLength",null),ge(t,"toJSON",vW(null)),ge(t,"PRNG",e)):(S0(t,"seed",s),S0(t,"seedLength",o),aW(t,"state",l,c),S0(t,"stateLength",v),S0(t,"byteLength",f),ge(t,"toJSON",p),ge(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=_Lr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return lW(e,n,a)}function y(m,g){return fW(m)||fW(g)||m<=0||g<=0?NaN:lW(e,m,g)}}cW.exports=RLr});var gW=u((gKr,pW)=>{"use strict";var FLr=Gv(),MLr=FLr();pW.exports=MLr});var yW=u((mKr,qW)=>{"use strict";var BLr=w(),mW=gW(),CLr=Gv();BLr(mW,"factory",CLr);qW.exports=mW});var dW=u((qKr,hW)=>{"use strict";var jLr=j().isPrimitive,GLr=W().isPrimitive,VLr=ir();function ULr(r,e){return!jLr(r)||VLr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):GLr(e)?null:new TypeError("invalid argument. `b` must be a positive number. Value: `"+e+"`.")}hW.exports=ULr});var bW=u((yKr,wW)=>{"use strict";var HLr=Ka(),WLr=Z(),kLr=C();function DLr(r,e,t){var i=r()-.5;return e-t*HLr(i)*kLr(1-2*WLr(i))}wW.exports=DLr});var Vv=u((hKr,LW)=>{"use strict";var me=w(),I0=_(),EW=R(),NW=T(),AW=I(),OW=A(),SW=L(),XLr=B(),L0=X().factory,TW=b(),JLr=F(),zLr=dW(),IW=bW();function YLr(){var r,e,t,i,n,a;if(arguments.length===0)e=L0();else if(arguments.length===1){if(r=arguments[0],!NW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(OW(r,"prng")){if(!AW(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=L0(r)}else{if(n=arguments[0],a=arguments[1],i=zLr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!NW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(OW(r,"prng")){if(!AW(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=L0(r)}else e=L0()}return n===void 0?t=y:t=q,me(t,"NAME","laplace"),r&&r.prng?(me(t,"seed",null),me(t,"seedLength",null),EW(t,"state",SW(null),XLr),me(t,"stateLength",null),me(t,"byteLength",null),me(t,"toJSON",SW(null)),me(t,"PRNG",e)):(I0(t,"seed",s),I0(t,"seedLength",o),EW(t,"state",l,c),I0(t,"stateLength",v),I0(t,"byteLength",f),me(t,"toJSON",p),me(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=JLr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return IW(e,n,a)}function y(m,g){return TW(m)||TW(g)||g<=0?NaN:IW(e,m,g)}}LW.exports=YLr});var PW=u((dKr,_W)=>{"use strict";var $Lr=Vv(),ZLr=$Lr();_W.exports=ZLr});var MW=u((wKr,FW)=>{"use strict";var QLr=w(),RW=PW(),KLr=Vv();QLr(RW,"factory",KLr);FW.exports=RW});var CW=u((bKr,BW)=>{"use strict";var xLr=j().isPrimitive,r_r=W().isPrimitive,e_r=ir();function t_r(r,e){return!xLr(r)||e_r(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):r_r(e)?null:new TypeError("invalid argument. `c` must be a positive number. Value: `"+e+"`.")}BW.exports=t_r});var GW=u((EKr,jW)=>{"use strict";function i_r(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}jW.exports=i_r});var UW=u((NKr,VW)=>{"use strict";function n_r(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}VW.exports=n_r});var WW=u((AKr,HW)=>{"use strict";function a_r(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}HW.exports=a_r});var DW=u((OKr,kW)=>{"use strict";function u_r(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}kW.exports=u_r});var JW=u((SKr,XW)=>{"use strict";function s_r(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}XW.exports=s_r});var ZW=u((TKr,$W)=>{"use strict";var o_r=b(),zW=V(),YW=C(),v_r=P(),f_r=D(),l_r=GW(),c_r=UW(),p_r=WW(),g_r=DW(),m_r=JW(),q_r=.08913147449493408,y_r=2.249481201171875,h_r=.807220458984375,d_r=.9399557113647461,w_r=.9836282730102539;function b_r(r){var e,t,i,n,a,s;return o_r(r)?NaN:r===1?v_r:r===-1?f_r:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),s=l_r(t),e*(a*q_r+a*s)):n>=.25?(a=zW(-2*YW(n)),n-=.25,s=c_r(n),e*(a/(y_r+s))):(n=zW(-YW(n)),n<3?(i=n-1.125,s=p_r(i),e*(h_r*n+s*n)):n<6?(i=n-3,s=g_r(i),e*(d_r*n+s*n)):(i=n-6,s=m_r(i),e*(w_r*n+s*n))))}$W.exports=b_r});var Uv=u((IKr,QW)=>{"use strict";var E_r=ZW();QW.exports=E_r});var xW=u((LKr,KW)=>{"use strict";var N_r=Uv(),Hv=b(),A_r=V();function O_r(r,e,t){var i,n;return Hv(e)||Hv(t)||Hv(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*A_r(2),i+n*N_r(2*r-1))}KW.exports=O_r});var ek=u((_Kr,rk)=>{"use strict";var S_r=L(),T_r=bv().factory,I_r=Uv(),Wv=b(),L_r=V();function __r(r,e){var t,i;if(Wv(r)||Wv(e)||e<0)return S_r(NaN);return e===0&&T_r(r),t=r,i=e*L_r(2),n;function n(a){return Wv(a)||a<0||a>1?NaN:t+i*I_r(2*a-1)}}rk.exports=__r});var nk=u((PKr,ik)=>{"use strict";var P_r=w(),tk=xW(),R_r=ek();P_r(tk,"factory",R_r);ik.exports=tk});var uk=u((RKr,ak)=>{"use strict";var F_r=nk();function M_r(r,e,t){var i=F_r(1-r()/2,0,1);return e+t/(i*i)}ak.exports=M_r});var kv=u((FKr,gk)=>{"use strict";var qe=w(),_0=_(),sk=R(),ok=T(),vk=I(),fk=A(),lk=L(),B_r=B(),P0=X().factory,ck=b(),C_r=F(),j_r=CW(),pk=uk();function G_r(){var r,e,t,i,n,a;if(arguments.length===0)e=P0();else if(arguments.length===1){if(r=arguments[0],!ok(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(fk(r,"prng")){if(!vk(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=P0(r)}else{if(n=arguments[0],a=arguments[1],i=j_r(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!ok(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(fk(r,"prng")){if(!vk(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=P0(r)}else e=P0()}return n===void 0?t=y:t=q,qe(t,"NAME","levy"),r&&r.prng?(qe(t,"seed",null),qe(t,"seedLength",null),sk(t,"state",lk(null),B_r),qe(t,"stateLength",null),qe(t,"byteLength",null),qe(t,"toJSON",lk(null)),qe(t,"PRNG",e)):(_0(t,"seed",s),_0(t,"seedLength",o),sk(t,"state",l,c),_0(t,"stateLength",v),_0(t,"byteLength",f),qe(t,"toJSON",p),qe(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=C_r(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return pk(e,n,a)}function y(m,g){return ck(m)||ck(g)||g<=0?NaN:pk(e,m,g)}}gk.exports=G_r});var qk=u((MKr,mk)=>{"use strict";var V_r=kv(),U_r=V_r();mk.exports=U_r});var dk=u((BKr,hk)=>{"use strict";var H_r=w(),yk=qk(),W_r=kv();H_r(yk,"factory",W_r);hk.exports=yk});var bk=u((CKr,wk)=>{"use strict";var k_r=j().isPrimitive,D_r=W().isPrimitive,X_r=ir();function J_r(r,e){return!k_r(r)||X_r(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):D_r(e)?null:new TypeError("invalid argument. `s` must be a positive number. Value: `"+e+"`.")}wk.exports=J_r});var Nk=u((jKr,Ek)=>{"use strict";var z_r=C();function Y_r(r,e,t){var i=r();return e+t*z_r(i/(1-i))}Ek.exports=Y_r});var Dv=u((GKr,Pk)=>{"use strict";var ye=w(),R0=_(),Ak=R(),Ok=T(),Sk=I(),Tk=A(),Ik=L(),$_r=B(),F0=X().factory,Lk=b(),Z_r=F(),Q_r=bk(),_k=Nk();function K_r(){var r,e,t,i,n,a;if(arguments.length===0)e=F0();else if(arguments.length===1){if(r=arguments[0],!Ok(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Tk(r,"prng")){if(!Sk(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=F0(r)}else{if(n=arguments[0],a=arguments[1],i=Q_r(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Ok(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Tk(r,"prng")){if(!Sk(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=F0(r)}else e=F0()}return n===void 0?t=y:t=q,ye(t,"NAME","logistic"),r&&r.prng?(ye(t,"seed",null),ye(t,"seedLength",null),Ak(t,"state",Ik(null),$_r),ye(t,"stateLength",null),ye(t,"byteLength",null),ye(t,"toJSON",Ik(null)),ye(t,"PRNG",e)):(R0(t,"seed",s),R0(t,"seedLength",o),Ak(t,"state",l,c),R0(t,"stateLength",v),R0(t,"byteLength",f),ye(t,"toJSON",p),ye(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=Z_r(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return _k(e,n,a)}function y(m,g){return Lk(m)||Lk(g)||g<=0?NaN:_k(e,m,g)}}Pk.exports=K_r});var Fk=u((VKr,Rk)=>{"use strict";var x_r=Dv(),rPr=x_r();Rk.exports=rPr});var Ck=u((UKr,Bk)=>{"use strict";var ePr=w(),Mk=Fk(),tPr=Dv();ePr(Mk,"factory",tPr);Bk.exports=Mk});var Gk=u((HKr,jk)=>{"use strict";var iPr=j().isPrimitive,nPr=W().isPrimitive,aPr=ir();function uPr(r,e){return!iPr(r)||aPr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):nPr(e)?null:new TypeError("invalid argument. `sigma` must be a positive number. Value: `"+e+"`.")}jk.exports=uPr});var Uk=u((WKr,Vk)=>{"use strict";var sPr=or();function oPr(r,e,t){return sPr(e+t*r())}Vk.exports=oPr});var Xv=u((kKr,Yk)=>{"use strict";var xe=w(),M0=_(),Hk=R(),Wk=T(),kk=I(),Dk=A(),Xk=L(),vPr=B(),di=Xe().factory,Jk=b(),fPr=F(),lPr=Gk(),zk=Uk();function cPr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=di();else if(arguments.length===1){if(t=arguments[0],!Wk(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Dk(t,"prng")){if(!kk(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=di({prng:t.prng})}else e=di(t)}else{if(s=arguments[0],r=arguments[1],a=lPr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!Wk(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(Dk(t,"prng")){if(!kk(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=di({prng:t.prng})}else e=di(t)}else e=di()}return s===void 0?n=m:n=y,i=e.PRNG,xe(n,"NAME","lognormal"),t&&t.prng?(xe(n,"seed",null),xe(n,"seedLength",null),Hk(n,"state",Xk(null),vPr),xe(n,"stateLength",null),xe(n,"byteLength",null),xe(n,"toJSON",Xk(null))):(M0(n,"seed",o),M0(n,"seedLength",v),Hk(n,"state",c,p),M0(n,"stateLength",f),M0(n,"byteLength",l),xe(n,"toJSON",q)),xe(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=fPr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return zk(e,s,r)}function m(g,h){return Jk(g)||Jk(h)||h<=0?NaN:zk(e,g,h)}}Yk.exports=cPr});var Zk=u((DKr,$k)=>{"use strict";var pPr=Xv(),gPr=pPr();$k.exports=gPr});var xk=u((XKr,Kk)=>{"use strict";var mPr=w(),Qk=Zk(),qPr=Xv();mPr(Qk,"factory",qPr);Kk.exports=Qk});var Jv=u((JKr,rD)=>{"use strict";var yPr=Ut(),hPr=Q(),dPr=yPr-1;function wPr(){var r=hPr(1+dPr*Math.random());return r|0}rD.exports=wPr});var $v=u((zKr,aD)=>{"use strict";var he=w(),rt=_(),eD=R(),zv=A(),bPr=T(),EPr=ur().isPrimitive,NPr=Mr(),APr=xr().isPrimitive,tD=Rn(),B0=Ut(),hr=ct(),wi=Ue(),OPr=F(),iD=Jv(),Yv=B0-1|0,SPr=B0-1|0,TPr=16807,C0=1,j0=2,et=2,dr=4,mn=5;function nD(r,e){var t;return e?t="option":t="argument",r.length<mn+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==C0?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+C0+". Actual: "+r[0]+"."):r[1]!==j0?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+j0+". Actual: "+r[1]+"."):r[et]!==1?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+1 .toString()+". Actual: "+r[et]+"."):r[dr]!==r.length-mn?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-mn)+". Actual: "+r[dr]+"."):null}function IPr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!bPr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(zv(r,"copy")&&(i.copy=r.copy,!EPr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(zv(r,"state")){if(t=r.state,i.state=!0,!tD(t))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+t+"`.");if(s=nD(t,!0),s)throw s;i.copy===!1?e=t:(e=new hr(t.length),wi(t.length,t,1,e,1)),t=new hr(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,t[dr])}if(n===void 0)if(zv(r,"seed"))if(n=r.seed,i.seed=!0,APr(n)){if(n>SPr)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+n+"`.");n|=0}else if(NPr(n)&&n.length>0)a=n.length,e=new hr(mn+a),e[0]=C0,e[1]=j0,e[et]=1,e[dr]=a,wi.ndarray(a,n,1,0,e,1,dr+1),t=new hr(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+n+"`.");else n=iD()|0}else n=iD()|0;return t===void 0&&(e=new hr(mn+1),e[0]=C0,e[1]=j0,e[et]=1,e[dr]=1,e[dr+1]=n,t=new hr(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),he(y,"NAME","minstd"),rt(y,"seed",o),rt(y,"seedLength",v),eD(y,"state",c,p),rt(y,"stateLength",f),rt(y,"byteLength",l),he(y,"toJSON",q),he(y,"MIN",1),he(y,"MAX",B0-1),he(y,"normalized",m),he(m,"NAME",y.NAME),rt(m,"seed",o),rt(m,"seedLength",v),eD(m,"state",c,p),rt(m,"stateLength",f),rt(m,"byteLength",l),he(m,"toJSON",q),he(m,"MIN",(y.MIN-1)/Yv),he(m,"MAX",(y.MAX-1)/Yv),y;function o(){var g=e[dr];return wi(g,n,1,new hr(g),1)}function v(){return e[dr]}function f(){return e.length}function l(){return e.byteLength}function c(){var g=e.length;return wi(g,e,1,new hr(g),1)}function p(g){var h;if(!tD(g))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+g+"`.");if(h=nD(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?wi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new hr(g.length)),wi(g.length,g,1,e,1)),t=new hr(e.buffer,e.byteOffset+(et+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,e[dr])}function q(){var g={};return g.type="PRNG",g.name=y.NAME,g.state=OPr(e),g.params=[],g}function y(){var g=t[0]|0;return g=TPr*g%B0|0,t[0]=g,g|0}function m(){return(y()-1)/Yv}}aD.exports=IPr});var sD=u((YKr,uD)=>{"use strict";var LPr=$v(),_Pr=Jv(),PPr=LPr({seed:_Pr()});uD.exports=PPr});var fD=u(($Kr,vD)=>{"use strict";var RPr=w(),oD=sD(),FPr=$v();RPr(oD,"factory",FPr);vD.exports=oD});var cD=u((ZKr,lD)=>{"use strict";var MPr=b(),BPr=8;function CPr(r,e,t){var i,n;for(n=0;n<BPr;n++)if(i=r(),MPr(i))throw new Error("unexpected error. PRNG returned `NaN`.");for(n=t-1;n>=0;n--)e[n]=r();return e}lD.exports=CPr});var Zv=u((QKr,pD)=>{"use strict";var jPr=Ut(),GPr=Q(),VPr=jPr-1;function UPr(){var r=GPr(1+VPr*Math.random());return r|0}pD.exports=UPr});var xv=u((KKr,dD)=>{"use strict";var de=w(),tt=_(),gD=R(),Qv=A(),HPr=T(),WPr=ur().isPrimitive,kPr=Mr(),DPr=xr().isPrimitive,mD=Rn(),bi=Ue(),XPr=Q(),wr=ct(),qn=Ut(),JPr=F(),qD=cD(),yD=Zv(),Kv=qn-1|0,zPr=qn-1|0,YPr=16807,Er=32,U0=1,H0=3,it=2,Ei=Er+3,br=Er+6,yn=Er+7,G0=Ei+1,V0=Ei+2;function hD(r,e){var t;return e?t="option":t="argument",r.length<yn+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==U0?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+U0+". Actual: "+r[0]+"."):r[1]!==H0?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+H0+". Actual: "+r[1]+"."):r[it]!==Er?new RangeError("invalid "+t+". `state` array has an incompatible table length. Expected: "+Er+". Actual: "+r[it]+"."):r[Ei]!==2?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+2 .toString()+". Actual: "+r[Ei]+"."):r[br]!==r.length-yn?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-yn)+". Actual: "+r[br]+"."):null}function $Pr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!HPr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Qv(r,"copy")&&(i.copy=r.copy,!WPr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(Qv(r,"state")){if(t=r.state,i.state=!0,!mD(t))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+t+"`.");if(s=hD(t,!0),s)throw s;i.copy===!1?e=t:(e=new wr(t.length),bi(t.length,t,1,e,1)),t=new wr(e.buffer,e.byteOffset+(it+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,t[br])}if(n===void 0)if(Qv(r,"seed"))if(n=r.seed,i.seed=!0,DPr(n)){if(n>zPr)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+n+"`.");n|=0}else if(kPr(n)&&n.length>0)a=n.length,e=new wr(yn+a),e[0]=U0,e[1]=H0,e[it]=Er,e[Ei]=2,e[V0]=n[0],e[br]=a,bi.ndarray(a,n,1,0,e,1,br+1),t=new wr(e.buffer,e.byteOffset+(it+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,a),t=qD(y,t,Er),e[G0]=t[0];else throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+n+"`.");else n=yD()|0}else n=yD()|0;return t===void 0&&(e=new wr(yn+1),e[0]=U0,e[1]=H0,e[it]=Er,e[Ei]=2,e[V0]=n,e[br]=1,e[br+1]=n,t=new wr(e.buffer,e.byteOffset+(it+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,1),t=qD(y,t,Er),e[G0]=t[0]),de(m,"NAME","minstd-shuffle"),tt(m,"seed",o),tt(m,"seedLength",v),gD(m,"state",c,p),tt(m,"stateLength",f),tt(m,"byteLength",l),de(m,"toJSON",q),de(m,"MIN",1),de(m,"MAX",qn-1),de(m,"normalized",g),de(g,"NAME",m.NAME),tt(g,"seed",o),tt(g,"seedLength",v),gD(g,"state",c,p),tt(g,"stateLength",f),tt(g,"byteLength",l),de(g,"toJSON",q),de(g,"MIN",(m.MIN-1)/Kv),de(g,"MAX",(m.MAX-1)/Kv),m;function o(){var h=e[br];return bi(h,n,1,new wr(h),1)}function v(){return e[br]}function f(){return e.length}function l(){return e.byteLength}function c(){var h=e.length;return bi(h,e,1,new wr(h),1)}function p(h){var E;if(!mD(h))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+h+"`.");if(E=hD(h,!1),E)throw E;i.copy===!1?i.state&&h.length===e.length?bi(h.length,h,1,e,1):(e=h,i.state=!0):(h.length!==e.length&&(e=new wr(h.length)),bi(h.length,h,1,e,1)),t=new wr(e.buffer,e.byteOffset+(it+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,e[br])}function q(){var h={};return h.type="PRNG",h.name=m.NAME,h.state=JPr(e),h.params=[],h}function y(){var h=e[V0]|0;return h=YPr*h%qn|0,e[V0]=h,h|0}function m(){var h,E;return h=e[G0],E=XPr(Er*(h/qn)),h=t[E],e[G0]=h,t[E]=y(),h}function g(){return(m()-1)/Kv}}dD.exports=$Pr});var bD=u((xKr,wD)=>{"use strict";var ZPr=xv(),QPr=Zv(),KPr=ZPr({seed:QPr()});wD.exports=KPr});var AD=u((rxr,ND)=>{"use strict";var xPr=w(),ED=bD(),rRr=xv();xPr(ED,"factory",rRr);ND.exports=ED});var SD=u((exr,OD)=>{"use strict";var eRr=or();function tRr(r,e){for(var t=r(),i=1;t>eRr(-e);)i+=1,t*=r();return i-1}OD.exports=tRr});var ID=u((txr,TD)=>{"use strict";var iRr=Q();function nRr(r){return iRr(r)===r&&r<0}TD.exports=nRr});var _D=u((ixr,LD)=>{"use strict";var aRr=ID();LD.exports=aRr});var RD=u((nxr,PD)=>{"use strict";var uRr=_D(),sRr=Di();function oRr(r){return uRr(r)?NaN:sRr(r+1)}PD.exports=oRr});var MD=u((axr,FD)=>{"use strict";var vRr=RD();FD.exports=vRr});var GD=u((uxr,jD)=>{"use strict";var fRr=MD(),BD=Q(),lRr=Ka(),cRr=V(),CD=Z(),W0=C(),pRr=A1(),gRr=1/12,mRr=1/360;function qRr(r,e){var t,i,n,a,s,o,v,f,l,c;for(t=cRr(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,s=-3.6224/(v-2)+.9277,n=.86*s;;){if(c=r(),c<=n)return l=c/s-.43,l*=2*o/(.5-CD(l))+v,l+=e+.445,BD(l);if(c>=s?l=r()-.5:(l=c/s-.93,l=lRr(l)*.5-l,c=s*r()),a=.5-CD(l),(a>=.013||a>=c)&&(f=BD((2*o/a+v)*l+e+.445),c*=i/(o/(a*a)+v),l=(f+.5)*W0(e/f),l+=-e-pRr+f,l-=(gRr-mRr/(f*f))/f,f>=10&&l>=W0(c*t)||(l=f*W0(e)-e-fRr(f),f>=0&&f<=9&&l>=W0(c))))return f}}jD.exports=qRr});var UD=u((sxr,VD)=>{"use strict";var yRr=SD(),hRr=GD();function dRr(r,e){return e<30?yRr(r,e):hRr(r,e)}VD.exports=dRr});var r2=u((oxr,zD)=>{"use strict";var we=w(),k0=_(),HD=R(),wRr=W().isPrimitive,WD=T(),kD=I(),DD=A(),XD=L(),bRr=B(),D0=X().factory,ERr=b(),NRr=F(),JD=UD();function ARr(){var r,e,t,i;if(arguments.length===0)t=D0();else if(arguments.length===1&&WD(arguments[0]))if(e=arguments[0],DD(e,"prng")){if(!kD(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=D0(e);else{if(r=arguments[0],!wRr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!WD(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(DD(e,"prng")){if(!kD(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=D0(e)}else t=D0()}return r===void 0?i=p:i=c,we(i,"NAME","poisson"),e&&e.prng?(we(i,"seed",null),we(i,"seedLength",null),HD(i,"state",XD(null),bRr),we(i,"stateLength",null),we(i,"byteLength",null),we(i,"toJSON",XD(null)),we(i,"PRNG",t)):(k0(i,"seed",n),k0(i,"seedLength",a),HD(i,"state",v,f),k0(i,"stateLength",s),k0(i,"byteLength",o),we(i,"toJSON",l),we(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=NRr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return JD(t,r)}function p(q){return ERr(q)||q<=0?NaN:JD(t,q)}}zD.exports=ARr});var $D=u((vxr,YD)=>{"use strict";var ORr=r2(),SRr=ORr();YD.exports=SRr});var e2=u((fxr,QD)=>{"use strict";var TRr=w(),ZD=$D(),IRr=r2();TRr(ZD,"factory",IRr);QD.exports=ZD});var xD=u((lxr,KD)=>{"use strict";var LRr=W().isPrimitive,_Rr=j().isPrimitive,PRr=ir();function RRr(r,e){return LRr(r)?!_Rr(e)||PRr(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):e<=0||e>=1?new RangeError("invalid argument. Second argument must be on the interval `(0,1)`. Value: `"+e+"`."):null:new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.")}KD.exports=RRr});var a2=u((cxr,sX)=>{"use strict";var nt=w(),X0=_(),rX=R(),Ni=A(),eX=T(),t2=Jr(),tX=ur().isPrimitive,iX=I(),nX=L(),FRr=B(),aX=b(),Ai=e2().factory,J0=li().factory,i2=Ue(),n2=vr(),uX=Ht(),MRr=F(),BRr=xD();function CRr(){var r,e,t,i,n,a,s,o,v,f;if(s=!0,arguments.length===0)i={copy:!1},t=Ai(i);else if(arguments.length===1){if(i=arguments[0],!eX(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(Ni(i,"copy")&&!tX(i.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+i.copy+"`.");if(Ni(i,"prng")){if(!iX(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");t=Ai({prng:i.prng})}else{if(Ni(i,"state")&&!t2(i.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+i.state+"`.");i=uX(i,1),i.copy===!1?s=!1:i.state&&(i.state=i2(i.state.length,i.state,1,new n2(i.state.length),1)),i.copy=!1,t=Ai(i)}}else{if(f=arguments[0],v=arguments[1],o=BRr(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!eX(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(Ni(i,"copy")&&!tX(i.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+i.copy+"`.");if(Ni(i,"prng")){if(!iX(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");t=Ai({prng:i.prng})}else{if(Ni(i,"state")&&!t2(i.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+i.state+"`.");i=uX(i,1),i.copy===!1?s=!1:i.state&&(i.state=i2(i.state.length,i.state,1,new n2(i.state.length),1)),i.copy=!1,t=Ai(i)}}else i={copy:!1},t=Ai(i)}return i&&i.prng?f===void 0?r=J0({prng:i.prng}):r=J0(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=J0({state:e,copy:!1}):r=J0(f,v/(1-v),{state:e,copy:!1})),f===void 0?n=E:n=h,a=t.PRNG,nt(n,"NAME","negative-binomial"),i&&i.prng?(nt(n,"seed",null),nt(n,"seedLength",null),rX(n,"state",nX(null),FRr),nt(n,"stateLength",null),nt(n,"byteLength",null),nt(n,"toJSON",nX(null))):(X0(n,"seed",l),X0(n,"seedLength",c),rX(n,"state",y,m),X0(n,"stateLength",p),X0(n,"byteLength",q),nt(n,"toJSON",g)),nt(n,"PRNG",a),n;function l(){return a.seed}function c(){return a.seedLength}function p(){return a.stateLength}function q(){return a.byteLength}function y(){return a.state}function m(N){if(!t2(N))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+N+"`.");s&&(N=i2(N.length,N,1,new n2(N.length),1)),a.state=N}function g(){var N={};return N.type="PRNG",N.name=n.NAME,N.state=MRr(a.state),f===void 0?N.params=[]:N.params=[f,v],N}function h(){return t(r())}function E(N,G){return aX(N)||aX(G)||G<=0||G>=1?NaN:t(r(N,G/(1-G)))}}sX.exports=CRr});var vX=u((pxr,oX)=>{"use strict";var jRr=a2(),GRr=jRr();oX.exports=GRr});var cX=u((gxr,lX)=>{"use strict";var VRr=w(),fX=vX(),URr=a2();VRr(fX,"factory",URr);lX.exports=fX});var gX=u((mxr,pX)=>{"use strict";var HRr=j().isPrimitive,WRr=W().isPrimitive,kRr=ir();function DRr(r,e){return!HRr(r)||kRr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):WRr(e)?null:new TypeError("invalid argument. `sigma` must be a positive number. Value: `"+e+"`.")}pX.exports=DRr});var qX=u((qxr,mX)=>{"use strict";function XRr(r,e,t){return e+t*r()}mX.exports=XRr});var u2=u((yxr,AX)=>{"use strict";var at=w(),z0=_(),yX=R(),hX=T(),dX=I(),wX=A(),bX=L(),JRr=B(),Oi=Xe().factory,EX=b(),zRr=F(),YRr=gX(),NX=qX();function $Rr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=Oi();else if(arguments.length===1){if(t=arguments[0],!hX(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(wX(t,"prng")){if(!dX(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=Oi({prng:t.prng})}else e=Oi(t)}else{if(s=arguments[0],r=arguments[1],a=YRr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!hX(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(wX(t,"prng")){if(!dX(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=Oi({prng:t.prng})}else e=Oi(t)}else e=Oi()}return s===void 0?n=m:n=y,i=e.PRNG,at(n,"NAME","normal"),t&&t.prng?(at(n,"seed",null),at(n,"seedLength",null),yX(n,"state",bX(null),JRr),at(n,"stateLength",null),at(n,"byteLength",null),at(n,"toJSON",bX(null))):(z0(n,"seed",o),z0(n,"seedLength",v),yX(n,"state",c,p),z0(n,"stateLength",f),z0(n,"byteLength",l),at(n,"toJSON",q)),at(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=zRr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return NX(e,s,r)}function m(g,h){return EX(g)||EX(h)||h<=0?NaN:NX(e,g,h)}}AX.exports=$Rr});var SX=u((hxr,OX)=>{"use strict";var ZRr=u2(),QRr=ZRr();OX.exports=QRr});var LX=u((dxr,IX)=>{"use strict";var KRr=w(),TX=SX(),xRr=u2();KRr(TX,"factory",xRr);IX.exports=TX});var RX=u((wxr,PX)=>{"use strict";var _X=W().isPrimitive;function rFr(r,e){return _X(r)?_X(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}PX.exports=rFr});var MX=u((bxr,FX)=>{"use strict";var eFr=$();function tFr(r,e,t){return t/eFr(r(),1/e)}FX.exports=tFr});var s2=u((Exr,WX)=>{"use strict";var be=w(),Y0=_(),BX=R(),CX=T(),jX=I(),GX=A(),VX=L(),iFr=B(),$0=X().factory,UX=b(),nFr=F(),aFr=RX(),HX=MX();function uFr(){var r,e,t,i,n,a;if(arguments.length===0)i=$0();else if(arguments.length===1){if(t=arguments[0],!CX(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(GX(t,"prng")){if(!jX(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");i=t.prng}else i=$0(t)}else{if(r=arguments[0],e=arguments[1],a=aFr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!CX(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(GX(t,"prng")){if(!jX(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");i=t.prng}else i=$0(t)}else i=$0()}return r===void 0?n=y:n=q,be(n,"NAME","pareto-type1"),t&&t.prng?(be(n,"seed",null),be(n,"seedLength",null),BX(n,"state",VX(null),iFr),be(n,"stateLength",null),be(n,"byteLength",null),be(n,"toJSON",VX(null)),be(n,"PRNG",i)):(Y0(n,"seed",s),Y0(n,"seedLength",o),BX(n,"state",l,c),Y0(n,"stateLength",v),Y0(n,"byteLength",f),be(n,"toJSON",p),be(n,"PRNG",i),i=i.normalized),n;function s(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function l(){return i.state}function c(m){i.state=m}function p(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=nFr(i.state),r===void 0?m.params=[]:m.params=[r,e],m}function q(){return HX(i,r,e)}function y(m,g){return UX(m)||UX(g)||m<=0||g<=0?NaN:HX(i,m,g)}}WX.exports=uFr});var DX=u((Nxr,kX)=>{"use strict";var sFr=s2(),oFr=sFr();kX.exports=oFr});var zX=u((Axr,JX)=>{"use strict";var vFr=w(),XX=DX(),fFr=s2();vFr(XX,"factory",fFr);JX.exports=XX});var $X=u((Oxr,YX)=>{"use strict";var lFr=V(),cFr=C();function pFr(r,e){return e*lFr(-2*cFr(r()))}YX.exports=pFr});var o2=u((Sxr,tJ)=>{"use strict";var Ee=w(),Z0=_(),ZX=R(),gFr=W().isPrimitive,QX=T(),KX=I(),xX=A(),rJ=L(),mFr=B(),Q0=X().factory,qFr=b(),yFr=F(),eJ=$X();function hFr(){var r,e,t,i;if(arguments.length===0)t=Q0();else if(arguments.length===1&&QX(arguments[0]))if(e=arguments[0],xX(e,"prng")){if(!KX(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Q0(e);else{if(r=arguments[0],!gFr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!QX(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(xX(e,"prng")){if(!KX(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=Q0(e)}else t=Q0()}return r===void 0?i=p:i=c,Ee(i,"NAME","rayleigh"),e&&e.prng?(Ee(i,"seed",null),Ee(i,"seedLength",null),ZX(i,"state",rJ(null),mFr),Ee(i,"stateLength",null),Ee(i,"byteLength",null),Ee(i,"toJSON",rJ(null)),Ee(i,"PRNG",t)):(Z0(i,"seed",n),Z0(i,"seedLength",a),ZX(i,"state",v,f),Z0(i,"stateLength",s),Z0(i,"byteLength",o),Ee(i,"toJSON",l),Ee(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=yFr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return eJ(t,r)}function p(q){return qFr(q)||q<=0?NaN:eJ(t,q)}}tJ.exports=hFr});var nJ=u((Txr,iJ)=>{"use strict";var dFr=o2(),wFr=dFr();iJ.exports=wFr});var sJ=u((Ixr,uJ)=>{"use strict";var bFr=w(),aJ=nJ(),EFr=o2();bFr(aJ,"factory",EFr);uJ.exports=aJ});var c2=u((Lxr,qJ)=>{"use strict";var ut=w(),K0=_(),oJ=R(),Si=A(),vJ=W().isPrimitive,fJ=T(),v2=Jr(),lJ=ur().isPrimitive,NFr=b(),cJ=I(),pJ=L(),AFr=B(),x0=gn().factory,Ti=Xe().factory,f2=Ue(),l2=vr(),gJ=Ht(),OFr=F(),mJ=V();function SFr(){var r,e,t,i,n,a,s,o;if(s=!0,arguments.length===0)n={copy:!1},t=Ti(n);else if(arguments.length===1)if(fJ(arguments[0])){if(n=arguments[0],Si(n,"copy")&&!lJ(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(Si(n,"prng")){if(!cJ(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=Ti({prng:n.prng})}else{if(Si(n,"state")&&!v2(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=gJ(n,1),n.copy===!1?s=!1:n.state&&(n.state=f2(n.state.length,n.state,1,new l2(n.state.length),1)),n.copy=!1,t=Ti(n)}}else{if(o=arguments[0],!vJ(o))throw new TypeError("invalid argument. First argument must be a positive number or an options object. Value: `"+o+"`.");n={copy:!1},t=Ti(n)}else{if(o=arguments[0],!vJ(o))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+o+"`.");if(n=arguments[1],!fJ(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(Si(n,"copy")&&!lJ(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(Si(n,"prng")){if(!cJ(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=Ti({prng:n.prng})}else{if(Si(n,"state")&&!v2(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=gJ(n,1),n.copy===!1?s=!1:n.state&&(n.state=f2(n.state.length,n.state,1,new l2(n.state.length),1)),n.copy=!1,t=Ti(n)}}return n&&n.prng?o===void 0?r=x0({prng:n.prng}):r=x0(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=x0({state:e,copy:!1}):r=x0(o,{state:e,copy:!1})),o===void 0?a=g:a=m,i=t.PRNG,ut(a,"NAME","t"),n&&n.prng?(ut(a,"seed",null),ut(a,"seedLength",null),oJ(a,"state",pJ(null),AFr),ut(a,"stateLength",null),ut(a,"byteLength",null),ut(a,"toJSON",pJ(null))):(K0(a,"seed",v),K0(a,"seedLength",f),oJ(a,"state",p,q),K0(a,"stateLength",l),K0(a,"byteLength",c),ut(a,"toJSON",y)),ut(a,"PRNG",i),a;function v(){return i.seed}function f(){return i.seedLength}function l(){return i.stateLength}function c(){return i.byteLength}function p(){return i.state}function q(h){if(!v2(h))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+h+"`.");s&&(h=f2(h.length,h,1,new l2(h.length),1)),i.state=h}function y(){var h={};return h.type="PRNG",h.name=a.NAME,h.state=OFr(i.state),o===void 0?h.params=[]:h.params=[o],h}function m(){return t()/mJ(r()/o)}function g(h){return NFr(h)||h<=0?NaN:t()/mJ(r(h)/h)}}qJ.exports=SFr});var hJ=u((_xr,yJ)=>{"use strict";var TFr=c2(),IFr=TFr();yJ.exports=IFr});var bJ=u((Pxr,wJ)=>{"use strict";var LFr=w(),dJ=hJ(),_Fr=c2();LFr(dJ,"factory",_Fr);wJ.exports=dJ});var NJ=u((Rxr,EJ)=>{"use strict";var p2=j().isPrimitive,g2=ir();function PFr(r,e,t){return!p2(r)||g2(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!p2(e)||g2(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):!p2(t)||g2(t)?new TypeError("invalid argument. Third argument must be a number primitive and not `NaN`. Value: `"+t+"`."):r<=t&&t<=e?null:new RangeError("invalid arguments. The condition `a <= c <= b` must be satisfied. Value: `["+r+","+e+","+t+"]`.")}EJ.exports=PFr});var SJ=u((Fxr,OJ)=>{"use strict";var AJ=V();function RFr(r,e,t,i){var n,a,s;return n=(i-e)/(t-e),s=r(),s<n?(a=(t-e)*(i-e),e+AJ(a*s)):(a=(t-e)*(t-i),t-AJ(a*(1-s)))}OJ.exports=RFr});var q2=u((Mxr,FJ)=>{"use strict";var Ne=w(),ru=_(),TJ=R(),IJ=T(),LJ=I(),_J=A(),PJ=L(),FFr=B(),eu=X().factory,m2=b(),MFr=F(),BFr=NJ(),RJ=SJ();function CFr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=eu();else if(arguments.length===1){if(r=arguments[0],!IJ(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(_J(r,"prng")){if(!LJ(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=eu(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=BFr(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!IJ(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(_J(r,"prng")){if(!LJ(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=eu(r)}else e=eu()}return n===void 0?t=m:t=y,Ne(t,"NAME","triangular"),r&&r.prng?(Ne(t,"seed",null),Ne(t,"seedLength",null),TJ(t,"state",PJ(null),FFr),Ne(t,"stateLength",null),Ne(t,"byteLength",null),Ne(t,"toJSON",PJ(null)),Ne(t,"PRNG",e)):(ru(t,"seed",o),ru(t,"seedLength",v),TJ(t,"state",c,p),ru(t,"stateLength",f),ru(t,"byteLength",l),Ne(t,"toJSON",q),Ne(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function l(){return e.byteLength}function c(){return e.state}function p(g){e.state=g}function q(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=MFr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function y(){return RJ(e,n,a,s)}function m(g,h,E){return m2(g)||m2(h)||m2(E)||!(g<=E&&E<=h)?NaN:RJ(e,g,h,E)}}FJ.exports=CFr});var BJ=u((Bxr,MJ)=>{"use strict";var jFr=q2(),GFr=jFr();MJ.exports=GFr});var GJ=u((Cxr,jJ)=>{"use strict";var VFr=w(),CJ=BJ(),UFr=q2();VFr(CJ,"factory",UFr);jJ.exports=CJ});var WJ=u((jxr,HJ)=>{"use strict";var VJ=j().isPrimitive,UJ=ir();function HFr(r,e){return!VJ(r)||UJ(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!VJ(e)||UJ(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):r>=e?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+r+","+e+"]`."):null}HJ.exports=HFr});var DJ=u((Gxr,kJ)=>{"use strict";function WFr(r,e,t){var i=r();return t*i+(1-i)*e}kJ.exports=WFr});var y2=u((Vxr,KJ)=>{"use strict";var Ae=w(),tu=_(),XJ=R(),JJ=T(),zJ=I(),YJ=A(),$J=L(),kFr=B(),iu=X().factory,ZJ=b(),DFr=F(),XFr=WJ(),QJ=DJ();function JFr(){var r,e,t,i,n,a;if(arguments.length===0)e=iu();else if(arguments.length===1){if(r=arguments[0],!JJ(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(YJ(r,"prng")){if(!zJ(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=iu(r)}else{if(n=arguments[0],a=arguments[1],i=XFr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!JJ(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(YJ(r,"prng")){if(!zJ(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=iu(r)}else e=iu()}return n===void 0?t=y:t=q,Ae(t,"NAME","uniform"),r&&r.prng?(Ae(t,"seed",null),Ae(t,"seedLength",null),XJ(t,"state",$J(null),kFr),Ae(t,"stateLength",null),Ae(t,"byteLength",null),Ae(t,"toJSON",$J(null)),Ae(t,"PRNG",e)):(tu(t,"seed",s),tu(t,"seedLength",o),XJ(t,"state",l,c),tu(t,"stateLength",v),tu(t,"byteLength",f),Ae(t,"toJSON",p),Ae(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=DFr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return QJ(e,n,a)}function y(m,g){return ZJ(m)||ZJ(g)||m>=g?NaN:QJ(e,m,g)}}KJ.exports=JFr});var rz=u((Uxr,xJ)=>{"use strict";var zFr=y2(),YFr=zFr();xJ.exports=YFr});var iz=u((Hxr,tz)=>{"use strict";var $Fr=w(),ez=rz(),ZFr=y2();$Fr(ez,"factory",ZFr);tz.exports=ez});var uz=u((Wxr,az)=>{"use strict";var nz=W().isPrimitive;function QFr(r,e){return nz(r)?nz(e)?null:new TypeError("invalid argument. Shape parameter must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. Scale parameter must be a positive number. Value: `"+r+"`.")}az.exports=QFr});var oz=u((kxr,sz)=>{"use strict";var KFr=$(),xFr=C();function rMr(r,e,t){return t*KFr(-xFr(1-r()),1/e)}sz.exports=rMr});var h2=u((Dxr,qz)=>{"use strict";var Oe=w(),nu=_(),vz=R(),fz=T(),lz=I(),cz=A(),pz=L(),eMr=B(),au=X().factory,gz=b(),tMr=F(),iMr=uz(),mz=oz();function nMr(){var r,e,t,i,n,a;if(arguments.length===0)t=au();else if(arguments.length===1){if(e=arguments[0],!fz(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(cz(e,"prng")){if(!lz(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=au(e)}else{if(a=arguments[0],r=arguments[1],n=iMr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!fz(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(cz(e,"prng")){if(!lz(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=au(e)}else t=au()}return r===void 0?i=y:i=q,Oe(i,"NAME","weibull"),e&&e.prng?(Oe(i,"seed",null),Oe(i,"seedLength",null),vz(i,"state",pz(null),eMr),Oe(i,"stateLength",null),Oe(i,"byteLength",null),Oe(i,"toJSON",pz(null)),Oe(i,"PRNG",t)):(nu(i,"seed",s),nu(i,"seedLength",o),vz(i,"state",l,c),nu(i,"stateLength",v),nu(i,"byteLength",f),Oe(i,"toJSON",p),Oe(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function l(){return t.state}function c(m){t.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=tMr(t.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return mz(t,a,r)}function y(m,g){return gz(m)||gz(g)||m<=0||g<=0?NaN:mz(t,m,g)}}qz.exports=nMr});var hz=u((Xxr,yz)=>{"use strict";var aMr=h2(),uMr=aMr();yz.exports=uMr});var bz=u((Jxr,wz)=>{"use strict";var sMr=w(),dz=hz(),oMr=h2();sMr(dz,"factory",oMr);wz.exports=dz});var Nz=u((zxr,Ez)=>{"use strict";var M={};M.arcsine=UM().factory;M.bernoulli=QM().factory;M.beta=QB().factory;M.betaprime=FC().factory;M.binomial=pj().factory;M.boxMueller=Ij().factory;M.cauchy=Xj().factory;M.chi=pG().factory;M.chisquare=gn().factory;M.cosine=KG().factory;M.discreteUniform=hV().factory;M.erlang=BV().factory;M.exponential=$V().factory;M.f=pU().factory;M.frechet=_U().factory;M.gamma=li().factory;M.geometric=XU().factory;M.gumbel=vH().factory;M.hypergeometric=jH().factory;M.improvedZiggurat=Xe().factory;M.invgamma=KH().factory;M.kumaraswamy=yW().factory;M.laplace=MW().factory;M.levy=dk().factory;M.logistic=Ck().factory;M.lognormal=xk().factory;M.minstd=fD().factory;M.minstdShuffle=AD().factory;M.mt19937=X().factory;M.negativeBinomial=cX().factory;M.normal=LX().factory;M.pareto1=zX().factory;M.poisson=e2().factory;M.rayleigh=sJ().factory;M.t=bJ().factory;M.triangular=GJ().factory;M.uniform=iz().factory;M.weibull=bz().factory;Ez.exports=M});var Oz=u((Yxr,Az)=>{"use strict";function vMr(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N;for(y=e[1],m=e[0],g=r[0],h=r[1],l=t[0],c=t[1],s=l[1],o=l[0]-y*s,v=c[1],f=c[0]-y*v,p=0,q=0,n=[],E=0;E<m;E++){for(a=[],N=0;N<y;N++)a.push(i(g[p],h[q])),p+=s,q+=v;n.push(a),p+=o,q+=f}return n}Az.exports=vMr});var Tz=u(($xr,Sz)=>{"use strict";var fMr=j().isPrimitive,lMr=P(),cMr=D(),pMr=S();function gMr(r,e){return t;function t(i){var n;if(!fMr(i)){if(e.nonnumeric===void 0)throw new TypeError(pMr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===lMr?e.pinf:n===cMr?e.ninf:n}}Sz.exports=gMr});var Pz=u((Zxr,_z)=>{"use strict";var Iz=j().isPrimitive,mMr=P(),qMr=D(),Lz=S();function yMr(r,e){return t;function t(i,n){var a;if(!Iz(i)){if(e.nonnumeric===void 0)throw new TypeError(Lz("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!Iz(n)){if(e.nonnumeric===void 0)throw new TypeError(Lz("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===mMr?e.pinf:a===qMr?e.ninf:a}}_z.exports=yMr});var Fz=u((Qxr,Rz)=>{"use strict";var d2=j().isPrimitive,hMr=P(),dMr=D(),w2=S();function wMr(r,e){return t;function t(i,n,a){var s;if(!d2(i)){if(e.nonnumeric===void 0)throw new TypeError(w2("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!d2(n)){if(e.nonnumeric===void 0)throw new TypeError(w2("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!d2(a)){if(e.nonnumeric===void 0)throw new TypeError(w2("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return s=r(i,n,a),s!==s?e.nan:s===hMr?e.pinf:s===dMr?e.ninf:s}}Rz.exports=wMr});var Bz=u((Kxr,Mz)=>{"use strict";var bMr=z().isPrimitive,EMr=S();function NMr(r){return e;function e(t){if(!bMr(t))throw new TypeError(EMr("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}Mz.exports=NMr});var Vz=u((xxr,Gz)=>{"use strict";var Cz=z().isPrimitive,jz=S();function AMr(r){return e;function e(t,i){if(!Cz(t))throw new TypeError(jz("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!Cz(i))throw new TypeError(jz("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}Gz.exports=AMr});var Hz=u((rre,Uz)=>{"use strict";var b2=z().isPrimitive,E2=S();function OMr(r){return e;function e(t,i){if(!b2(t))throw new TypeError(E2("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!b2(i))throw new TypeError(E2("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!b2(v3))throw new TypeError(E2("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(v3)));return r(t,i,v3)}}Uz.exports=OMr});var kz=u((ere,Wz)=>{"use strict";function SMr(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N,G,O,J,ar,k;for(E=e[1],N=e[0],G=r[0],O=r[1],J=r[2],p=t[0],q=t[1],y=t[2],s=p[1],o=p[0]-E*s,v=q[1],f=q[0]-E*v,l=y[1],c=y[0]-E*l,m=0,g=0,h=0,n=[],ar=0;ar<N;ar++){for(a=[],k=0;k<E;k++)a.push(i(G[m],O[g],J[h])),m+=s,g+=v,h+=l;n.push(a),m+=o,g+=f,h+=c}return n}Wz.exports=SMr});var Xz=u((tre,Dz)=>{"use strict";function TMr(r,e){var t,i,n,a,s;for(t=r.length,i=r[0].length,a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)n[s]=e(n[s]);return r}Dz.exports=TMr});var zz=u((ire,Jz)=>{"use strict";var IMr=Xz();function LMr(r,e){return IMr(r,e)}Jz.exports=LMr});var $z=u((nre,Yz)=>{"use strict";var Dr={};Dr.binary2d=Oz();Dr.d_d=Tz();Dr.dd_d=Pz();Dr.ddd_d=Fz();Dr.s_o=Bz();Dr.ss_o=Vz();Dr.sss_o=Hz();Dr.ternary2d=kz();Dr.unary2d=zz();Yz.exports=Dr});var Qz=u((are,Zz)=>{"use strict";var Lt=Gc(),Nr,H={};H.ANSCOMBES_QUARTET=I5();H.bartlettTest=Xw();H.broadcast=Kw();H.cumax=sb().ndarray;H.filled=fb();H.filledBy=yb();H.flattenArray=ca();H.isArray=lr();H.isBoolean=ur().isPrimitive;H.isNumber=j().isPrimitive;H.isPositiveNumber=W().isPrimitive;H.isString=z().isPrimitive;H.iterator2array=kb();H.iterSawtoothWave=RE();H.linspace=_O();H.max=VO().ndarray;H.mskmax=YO().ndarray;H.assert={};Nr=vT();Lt(Nr,H.assert);H.blas={};Nr=yT();Lt(Nr,H.blas);Nr=gP();Lt(Nr,H);H.dists={};Nr=VP();Lt(Nr,H.dists);Nr=eF();Lt(Nr,H);H.random={};Nr=Nz();Lt(Nr,H.random);H.tools={};Nr=$z();Lt(Nr,H.tools);Zz.exports=H});var PMr=u((ure,Kz)=>{var _Mr=Qz();Kz.exports=_Mr});return PMr();})();
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
