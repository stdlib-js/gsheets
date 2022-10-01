/** @OnlyCurrentDoc */
var global = {};
"use strict";var ns=(()=>{var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var fn=u((h_r,a2)=>{"use strict";function WJ(r){return Object.keys(Object(r))}a2.exports=WJ});var s2=u((d_r,u2)=>{"use strict";var HJ=fn();function kJ(){return(HJ(arguments)||"").length!==2}function DJ(){return kJ(1,2)}u2.exports=DJ});var v2=u((w_r,o2)=>{"use strict";var XJ=typeof Object.keys<"u";o2.exports=XJ});var l2=u((b_r,f2)=>{"use strict";function JJ(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"}f2.exports=JJ});var p2=u((E_r,c2)=>{"use strict";var zJ=l2();c2.exports=zJ});var m2=u((N_r,g2)=>{"use strict";var YJ=p2(),ZJ=YJ();function QJ(){return ZJ&&typeof Symbol.toStringTag=="symbol"}g2.exports=QJ});var Ot=u((A_r,q2)=>{"use strict";var $J=m2();q2.exports=$J});var eu=u((O_r,y2)=>{"use strict";var KJ=Object.prototype.toString;y2.exports=KJ});var d2=u((S_r,h2)=>{"use strict";var xJ=eu();function rz(r){return xJ.call(r)}h2.exports=rz});var b2=u((T_r,w2)=>{"use strict";var ez=Object.prototype.hasOwnProperty;function tz(r,e){return r==null?!1:ez.call(r,e)}w2.exports=tz});var A=u((L_r,E2)=>{"use strict";var iz=b2();E2.exports=iz});var A2=u((I_r,N2)=>{"use strict";var nz=typeof Symbol=="function"?Symbol.toStringTag:"";N2.exports=nz});var S2=u((P_r,O2)=>{"use strict";var az=A(),bi=A2(),tu=eu();function uz(r){var e,t,i;if(r==null)return tu.call(r);t=r[bi],e=az(r,bi);try{r[bi]=void 0}catch{return tu.call(r)}return i=tu.call(r),e?r[bi]=t:delete r[bi],i}O2.exports=uz});var K=u((__r,T2)=>{"use strict";var sz=Ot(),oz=d2(),vz=S2(),iu;sz()?iu=vz:iu=oz;T2.exports=iu});var nu=u((R_r,L2)=>{"use strict";var fz=K();function lz(r){return fz(r)==="[object Arguments]"}L2.exports=lz});var _2=u((F_r,P2)=>{"use strict";var cz=nu(),I2;function pz(){return cz(arguments)}I2=pz();P2.exports=I2});var F2=u((M_r,R2)=>{"use strict";var gz=typeof Object.defineProperty=="function"?Object.defineProperty:null;R2.exports=gz});var C2=u((C_r,M2)=>{"use strict";var mz=F2();function qz(){try{return mz({},"x",{}),!0}catch{return!1}}M2.exports=qz});var j2=u((B_r,B2)=>{"use strict";var yz=Object.defineProperty;B2.exports=yz});var H2=u((j_r,W2)=>{"use strict";var St=Object.prototype,V2=St.toString,G2=St.__defineGetter__,U2=St.__defineSetter__,hz=St.__lookupGetter__,dz=St.__lookupSetter__;function wz(r,e,t){var i,n,a,s;if(typeof r!="object"||r===null||V2.call(r)==="[object Array]")throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if(typeof t!="object"||t===null||V2.call(t)==="[object Array]")throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if(n="value"in t,n&&(hz.call(r,e)||dz.call(r,e)?(i=r.__proto__,r.__proto__=St,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,s="set"in t,n&&(a||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&G2&&G2.call(r,e,t.get),s&&U2&&U2.call(r,e,t.set),r}W2.exports=wz});var Ee=u((V_r,k2)=>{"use strict";var bz=C2(),Ez=j2(),Nz=H2(),au;bz()?au=Ez:au=Nz;k2.exports=au});var X2=u((G_r,D2)=>{"use strict";var Az=Ee();function Oz(r,e,t){Az(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}D2.exports=Oz});var w=u((U_r,J2)=>{"use strict";var Sz=X2();J2.exports=Sz});var uu=u((W_r,z2)=>{"use strict";function Tz(r){return typeof r=="string"}z2.exports=Tz});var Z2=u((H_r,Y2)=>{"use strict";var Lz=String.prototype.valueOf;Y2.exports=Lz});var $2=u((k_r,Q2)=>{"use strict";var Iz=Z2();function Pz(r){try{return Iz.call(r),!0}catch{return!1}}Q2.exports=Pz});var su=u((D_r,K2)=>{"use strict";var _z=Ot(),Rz=K(),Fz=$2(),Mz=_z();function Cz(r){return typeof r=="object"?r instanceof String?!0:Mz?Fz(r):Rz(r)==="[object String]":!1}K2.exports=Cz});var rf=u((X_r,x2)=>{"use strict";var Bz=uu(),jz=su();function Vz(r){return Bz(r)||jz(r)}x2.exports=Vz});var X=u((J_r,tf)=>{"use strict";var ef=w(),ou=rf(),Gz=uu(),Uz=su();ef(ou,"isPrimitive",Gz);ef(ou,"isObject",Uz);tf.exports=ou});var vu=u((z_r,nf)=>{"use strict";function Wz(r){return typeof r=="number"}nf.exports=Wz});var uf=u((Y_r,af)=>{"use strict";af.exports=Number});var ln=u((Z_r,sf)=>{"use strict";var Hz=uf();sf.exports=Hz});var vf=u((Q_r,of)=>{"use strict";var kz=ln(),Dz=kz.prototype.toString;of.exports=Dz});var lf=u(($_r,ff)=>{"use strict";var Xz=vf();function Jz(r){try{return Xz.call(r),!0}catch{return!1}}ff.exports=Jz});var fu=u((K_r,cf)=>{"use strict";var zz=Ot(),Yz=K(),Zz=ln(),Qz=lf(),$z=zz();function Kz(r){return typeof r=="object"?r instanceof Zz?!0:$z?Qz(r):Yz(r)==="[object Number]":!1}cf.exports=Kz});var gf=u((x_r,pf)=>{"use strict";var xz=vu(),rY=fu();function eY(r){return xz(r)||rY(r)}pf.exports=eY});var j=u((rRr,qf)=>{"use strict";var mf=w(),lu=gf(),tY=vu(),iY=fu();mf(lu,"isPrimitive",tY);mf(lu,"isObject",iY);qf.exports=lu});var hf=u((eRr,yf)=>{"use strict";function nY(r){return r!==r}yf.exports=nY});var b=u((tRr,df)=>{"use strict";var aY=hf();df.exports=aY});var cu=u((iRr,wf)=>{"use strict";var uY=j().isPrimitive,sY=b();function oY(r){return uY(r)&&sY(r)}wf.exports=oY});var pu=u((nRr,bf)=>{"use strict";var vY=j().isObject,fY=b();function lY(r){return vY(r)&&fY(r.valueOf())}bf.exports=lY});var Nf=u((aRr,Ef)=>{"use strict";var cY=cu(),pY=pu();function gY(r){return cY(r)||pY(r)}Ef.exports=gY});var tr=u((uRr,Of)=>{"use strict";var Af=w(),gu=Nf(),mY=cu(),qY=pu();Af(gu,"isPrimitive",mY);Af(gu,"isObject",qY);Of.exports=gu});var M=u((sRr,Sf)=>{"use strict";var yY=Number.POSITIVE_INFINITY;Sf.exports=yY});var z=u((oRr,Tf)=>{"use strict";var hY=ln(),dY=hY.NEGATIVE_INFINITY;Tf.exports=dY});var If=u((vRr,Lf)=>{"use strict";var wY=Math.floor;Lf.exports=wY});var rr=u((fRr,Pf)=>{"use strict";var bY=If();Pf.exports=bY});var Rf=u((lRr,_f)=>{"use strict";var EY=rr();function NY(r){return EY(r)===r}_f.exports=NY});var Ar=u((cRr,Ff)=>{"use strict";var AY=Rf();Ff.exports=AY});var mu=u((pRr,Mf)=>{"use strict";var OY=M(),SY=z(),TY=Ar();function LY(r){return r<OY&&r>SY&&TY(r)}Mf.exports=LY});var qu=u((gRr,Cf)=>{"use strict";var IY=j().isPrimitive,PY=mu();function _Y(r){return IY(r)&&PY(r)}Cf.exports=_Y});var yu=u((mRr,Bf)=>{"use strict";var RY=j().isObject,FY=mu();function MY(r){return RY(r)&&FY(r.valueOf())}Bf.exports=MY});var Vf=u((qRr,jf)=>{"use strict";var CY=qu(),BY=yu();function jY(r){return CY(r)||BY(r)}jf.exports=jY});var Rr=u((yRr,Uf)=>{"use strict";var Gf=w(),hu=Vf(),VY=qu(),GY=yu();Gf(hu,"isPrimitive",VY);Gf(hu,"isObject",GY);Uf.exports=hu});var du=u((hRr,Wf)=>{"use strict";var UY=Object.prototype.propertyIsEnumerable;Wf.exports=UY});var Df=u((dRr,kf)=>{"use strict";var WY=du(),Hf;function HY(){return!WY.call("beep","0")}Hf=HY();kf.exports=Hf});var Jf=u((wRr,Xf)=>{"use strict";var kY=X(),DY=tr().isPrimitive,XY=Rr().isPrimitive,JY=du(),zY=Df();function YY(r,e){var t;return r==null?!1:(t=JY.call(r,e),!t&&zY&&kY(r)?(e=+e,!DY(e)&&XY(e)&&e>=0&&e<r.length):t)}Xf.exports=YY});var cn=u((bRr,zf)=>{"use strict";var ZY=Jf();zf.exports=ZY});var Zf=u((ERr,Yf)=>{"use strict";var QY=K(),wu;function $Y(r){return QY(r)==="[object Array]"}Array.isArray?wu=Array.isArray:wu=$Y;Yf.exports=wu});var lr=u((NRr,Qf)=>{"use strict";var KY=Zf();Qf.exports=KY});var Tt=u((ARr,$f)=>{"use strict";var xY=4294967295;$f.exports=xY});var xf=u((ORr,Kf)=>{"use strict";var rZ=A(),eZ=cn(),tZ=lr(),iZ=Ar(),nZ=Tt();function aZ(r){return r!==null&&typeof r=="object"&&!tZ(r)&&typeof r.length=="number"&&iZ(r.length)&&r.length>=0&&r.length<=nZ&&rZ(r,"callee")&&!eZ(r,"callee")}Kf.exports=aZ});var Eu=u((SRr,r3)=>{"use strict";var uZ=_2(),sZ=nu(),oZ=xf(),bu;uZ?bu=sZ:bu=oZ;r3.exports=bu});var i3=u((TRr,t3)=>{"use strict";var vZ=Eu(),e3=fn(),fZ=Array.prototype.slice;function lZ(r){return vZ(r)?e3(fZ.call(r)):e3(r)}t3.exports=lZ});var a3=u((LRr,n3)=>{"use strict";var cZ=lr();function pZ(r){if(typeof r!="function")throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return e;function e(t){var i,n;if(!cZ(t)||(i=t.length,i===0))return!1;for(n=0;n<i;n++)if(r(t[n])===!1)return!1;return!0}}n3.exports=pZ});var s3=u((IRr,u3)=>{"use strict";var gZ=a3();u3.exports=gZ});var f3=u((PRr,o3)=>{"use strict";function mZ(r){return r!==null&&typeof r=="object"}o3.exports=mZ});var Au=u((_Rr,l3)=>{"use strict";var qZ=w(),yZ=s3(),Nu=f3(),hZ=yZ(Nu);qZ(Nu,"isObjectLikeArray",hZ);l3.exports=Nu});var p3=u((RRr,c3)=>{"use strict";function dZ(){}c3.exports=dZ});var C=u((FRr,g3)=>{"use strict";var wZ=p3();g3.exports=wZ});var q3=u((MRr,m3)=>{"use strict";var bZ=cn(),EZ=C(),NZ=bZ(EZ,"prototype");m3.exports=NZ});var h3=u((CRr,y3)=>{"use strict";var AZ=cn(),OZ={toString:null},SZ=!AZ(OZ,"toString");y3.exports=SZ});var w3=u((BRr,d3)=>{"use strict";var TZ=9007199254740991;d3.exports=TZ});var E3=u((jRr,b3)=>{"use strict";var LZ=Ar(),IZ=w3();function PZ(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&LZ(r.length)&&r.length>=0&&r.length<=IZ}b3.exports=PZ});var Fr=u((VRr,N3)=>{"use strict";var _Z=E3();N3.exports=_Z});var S3=u((GRr,O3)=>{"use strict";var A3=tr(),RZ=Fr(),FZ=X().isPrimitive,MZ=Rr().isPrimitive;function CZ(r,e,t){var i,n;if(!RZ(r)&&!FZ(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(i=r.length,i===0)return-1;if(arguments.length===3){if(!MZ(t))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+t+"`.");if(t>=0){if(t>=i)return-1;n=t}else n=i+t,n<0&&(n=0)}else n=0;if(A3(e)){for(;n<i;n++)if(A3(r[n]))return n}else for(;n<i;n++)if(r[n]===e)return n;return-1}O3.exports=CZ});var pn=u((URr,T3)=>{"use strict";var BZ=S3();T3.exports=BZ});var I3=u((WRr,L3)=>{"use strict";var jZ=/./;L3.exports=jZ});var Ou=u((HRr,P3)=>{"use strict";function VZ(r){return typeof r=="boolean"}P3.exports=VZ});var R3=u((kRr,_3)=>{"use strict";var GZ=Boolean.prototype.toString;_3.exports=GZ});var M3=u((DRr,F3)=>{"use strict";var UZ=R3();function WZ(r){try{return UZ.call(r),!0}catch{return!1}}F3.exports=WZ});var Su=u((XRr,C3)=>{"use strict";var HZ=Ot(),kZ=K(),DZ=M3(),XZ=HZ();function JZ(r){return typeof r=="object"?r instanceof Boolean?!0:XZ?DZ(r):kZ(r)==="[object Boolean]":!1}C3.exports=JZ});var j3=u((JRr,B3)=>{"use strict";var zZ=Ou(),YZ=Su();function ZZ(r){return zZ(r)||YZ(r)}B3.exports=ZZ});var ar=u((zRr,G3)=>{"use strict";var V3=w(),Tu=j3(),QZ=Ou(),$Z=Su();V3(Tu,"isPrimitive",QZ);V3(Tu,"isObject",$Z);G3.exports=Tu});var W3=u((YRr,U3)=>{"use strict";function KZ(){return new Function("return this;")()}U3.exports=KZ});var k3=u((ZRr,H3)=>{"use strict";var xZ=typeof self=="object"?self:null;H3.exports=xZ});var X3=u((QRr,D3)=>{"use strict";var rQ=typeof window=="object"?window:null;D3.exports=rQ});var z3=u(($Rr,J3)=>{"use strict";var eQ=typeof global=="object"?global:null;J3.exports=eQ});var K3=u((KRr,$3)=>{"use strict";var tQ=ar().isPrimitive,iQ=W3(),Y3=k3(),Z3=X3(),Q3=z3();function nQ(r){if(arguments.length){if(!tQ(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return iQ()}if(Y3)return Y3;if(Z3)return Z3;if(Q3)return Q3;throw new Error("unexpected error. Unable to resolve global object.")}$3.exports=nQ});var rl=u((xRr,x3)=>{"use strict";var aQ=K3();x3.exports=aQ});var il=u((rFr,tl)=>{"use strict";var uQ=rl(),el=uQ(),sQ=el.document&&el.document.childNodes;tl.exports=sQ});var al=u((eFr,nl)=>{"use strict";var oQ=Int8Array;nl.exports=oQ});var sl=u((tFr,ul)=>{"use strict";var vQ=I3(),fQ=il(),lQ=al();function cQ(){return typeof vQ=="function"||typeof lQ=="object"||typeof fQ=="function"}ul.exports=cQ});var Lu=u((iFr,ol)=>{"use strict";function pQ(){return/^\s*function\s*([^(]*)/i}ol.exports=pQ});var fl=u((nFr,vl)=>{"use strict";var gQ=Lu(),mQ=gQ();vl.exports=mQ});var Iu=u((aFr,cl)=>{"use strict";var qQ=w(),ll=Lu(),yQ=fl();qQ(ll,"REGEXP",yQ);cl.exports=ll});var gl=u((uFr,pl)=>{"use strict";var hQ=Au();function dQ(r){return hQ(r)&&(r._isBuffer||r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r))}pl.exports=dQ});var nt=u((sFr,ml)=>{"use strict";var wQ=gl();ml.exports=wQ});var yl=u((oFr,ql)=>{"use strict";var bQ=K(),EQ=Iu().REGEXP,NQ=nt();function AQ(r){var e,t,i;if(t=bQ(r).slice(8,-1),(t==="Object"||t==="Error")&&r.constructor){if(i=r.constructor,typeof i.name=="string")return i.name;if(e=EQ.exec(i.toString()),e)return e[1]}return NQ(r)?"Buffer":t}ql.exports=AQ});var Ne=u((vFr,hl)=>{"use strict";var OQ=yl();hl.exports=OQ});var wl=u((fFr,dl)=>{"use strict";var SQ=Ne();function TQ(r){var e;return r===null?"null":(e=typeof r,e==="object"?SQ(r).toLowerCase():e)}dl.exports=TQ});var El=u((lFr,bl)=>{"use strict";var LQ=Ne();function IQ(r){return LQ(r).toLowerCase()}bl.exports=IQ});var gn=u((cFr,Nl)=>{"use strict";var PQ=sl(),_Q=wl(),RQ=El(),FQ=PQ()?RQ:_Q;Nl.exports=FQ});var Pu=u((pFr,Al)=>{"use strict";function MQ(r){return r.constructor&&r.constructor.prototype===r}Al.exports=MQ});var Ol=u((gFr,CQ)=>{CQ.exports=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"]});var Tl=u((mFr,Sl)=>{"use strict";var BQ=typeof window>"u"?void 0:window;Sl.exports=BQ});var _l=u((qFr,Pl)=>{"use strict";var jQ=A(),VQ=pn(),Ll=gn(),GQ=Pu(),UQ=Ol(),Lt=Tl(),Il;function WQ(){var r;if(Ll(Lt)==="undefined")return!1;for(r in Lt)try{VQ(UQ,r)===-1&&jQ(Lt,r)&&Lt[r]!==null&&Ll(Lt[r])==="object"&&GQ(Lt[r])}catch{return!0}return!1}Il=WQ();Pl.exports=Il});var Fl=u((yFr,Rl)=>{"use strict";var HQ=typeof window<"u";Rl.exports=HQ});var Bl=u((hFr,Cl)=>{"use strict";var kQ=_l(),Ml=Pu(),DQ=Fl();function XQ(r){if(DQ===!1&&!kQ)return Ml(r);try{return Ml(r)}catch{return!1}}Cl.exports=XQ});var jl=u((dFr,JQ)=>{JQ.exports=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"]});var Ul=u((wFr,Gl)=>{"use strict";var zQ=Au(),_u=A(),YQ=Eu(),ZQ=q3(),QQ=h3(),$Q=Bl(),Vl=jl();function KQ(r){var e,t,i,n,a,s,o;if(n=[],YQ(r)){for(o=0;o<r.length;o++)n.push(o.toString());return n}if(typeof r=="string"){if(r.length>0&&!_u(r,"0"))for(o=0;o<r.length;o++)n.push(o.toString())}else{if(i=typeof r=="function",i===!1&&!zQ(r))return n;t=ZQ&&i}for(a in r)!(t&&a==="prototype")&&_u(r,a)&&n.push(String(a));if(QQ)for(e=$Q(r),o=0;o<Vl.length;o++)s=Vl[o],!(e&&s==="constructor")&&_u(r,s)&&n.push(String(s));return n}Gl.exports=KQ});var Hl=u((bFr,Wl)=>{"use strict";var xQ=s2(),r$=v2(),e$=fn(),t$=i3(),i$=Ul(),mn;r$?xQ()?mn=t$:mn=e$:mn=i$;Wl.exports=mn});var Ei=u((EFr,kl)=>{"use strict";var n$=Hl();kl.exports=n$});var Ru=u((NFr,Dl)=>{"use strict";function a$(r){return typeof r=="number"}Dl.exports=a$});var Fu=u((AFr,Jl)=>{"use strict";function u$(r){return r[0]==="-"}function Xl(r){var e="",t;for(t=0;t<r;t++)e+="0";return e}function s$(r,e,t){var i=!1,n=e-r.length;return n<0||(u$(r)&&(i=!0,r=r.substr(1)),r=t?r+Xl(n):Xl(n)+r,i&&(r="-"+r)),r}Jl.exports=s$});var Ql=u((OFr,Zl)=>{"use strict";var o$=Ru(),zl=Fu(),v$=String.prototype.toLowerCase,Yl=String.prototype.toUpperCase;function f$(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;case"d":case"i":case"u":default:e=10;break}if(t=r.arg,i=parseInt(t,10),!isFinite(i)){if(!o$(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&(r.specifier==="u"||e!==10)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=zl(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),!i&&!r.precision?t="":r.precision&&(t=zl(t,r.precision,r.padRight)),r.sign&&(t=r.sign+t)),e===16&&(r.alternate&&(t="0x"+t),t=r.specifier===Yl.call(r.specifier)?Yl.call(t):v$.call(t)),e===8&&r.alternate&&t.charAt(0)!=="0"&&(t="0"+t),t}Zl.exports=f$});var Kl=u((SFr,$l)=>{"use strict";function l$(r){return typeof r=="string"}$l.exports=l$});var e6=u((TFr,r6)=>{"use strict";var c$=Ru(),p$=Math.abs,g$=String.prototype.toLowerCase,xl=String.prototype.toUpperCase,at=String.prototype.replace,m$=/e\+(\d)$/,q$=/e-(\d)$/,y$=/^(\d+)$/,h$=/^(\d+)e/,d$=/\.0$/,w$=/\.0*e/,b$=/(\..*[^0])0*e/;function E$(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!c$(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":p$(i)<1e-4?(e=r.precision,e>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=at.call(t,b$,"$1e"),t=at.call(t,w$,"e"),t=at.call(t,d$,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=at.call(t,m$,"e+0$1"),t=at.call(t,q$,"e-0$1"),r.alternate&&(t=at.call(t,y$,"$1."),t=at.call(t,h$,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===xl.call(r.specifier)?xl.call(t):g$.call(t),t}r6.exports=E$});var n6=u((LFr,i6)=>{"use strict";function t6(r){var e="",t;for(t=0;t<r;t++)e+=" ";return e}function N$(r,e,t){var i=e-r.length;return i<0||(r=t?r+t6(i):t6(i)+r),r}i6.exports=N$});var u6=u((IFr,a6)=>{"use strict";var A$=Ql(),O$=Kl(),S$=e6(),T$=n6(),L$=Fu(),I$=String.fromCharCode,qn=isNaN,P$=Array.isArray;function _$(r){var e={};return e.specifier=r.specifier,e.precision=r.precision===void 0?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function R$(r){var e,t,i,n,a,s,o,v,f;if(!P$(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",o=1,v=0;v<r.length;v++)if(i=r[v],O$(i))s+=i;else{if(e=i.precision!==void 0,i=_$(i),!i.specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+v+"`. Value: `"+i+"`.");for(i.mapping&&(o=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(n=t.charAt(f),n){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if(i.width==="*"){if(i.width=parseInt(arguments[o],10),o+=1,qn(i.width))throw new TypeError("the argument for * width at position "+o+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&i.precision==="*"){if(i.precision=parseInt(arguments[o],10),o+=1,qn(i.precision))throw new TypeError("the argument for * precision at position "+o+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[o],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=A$(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!qn(i.arg)){if(a=parseInt(i.arg,10),a<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=qn(a)?String(i.arg):I$(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=S$(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=L$(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=T$(i.arg,i.width,i.padRight)),s+=i.arg||"",o+=1}return s}a6.exports=R$});var o6=u((PFr,s6)=>{"use strict";var F$=u6();s6.exports=F$});var f6=u((_Fr,v6)=>{"use strict";var yn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M$(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return r[4]==="."&&r[5]===void 0&&(e.precision="1"),e}function C$(r){var e,t,i,n;for(t=[],n=0,i=yn.exec(r);i;)e=r.slice(n,yn.lastIndex-i[0].length),e.length&&t.push(e),t.push(M$(i)),n=yn.lastIndex,i=yn.exec(r);return e=r.slice(n),e.length&&t.push(e),t}v6.exports=C$});var c6=u((RFr,l6)=>{"use strict";var B$=f6();l6.exports=B$});var g6=u((FFr,p6)=>{"use strict";function j$(r){return typeof r=="string"}p6.exports=j$});var y6=u((MFr,q6)=>{"use strict";var V$=o6(),G$=c6(),U$=g6();function m6(r){var e,t,i;if(!U$(r))throw new TypeError(m6("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=G$(r),t=new Array(arguments.length),t[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return V$.apply(null,t)}q6.exports=m6});var S=u((CFr,h6)=>{"use strict";var W$=y6();h6.exports=W$});var w6=u((BFr,d6)=>{"use strict";var H$=Ei(),k$=A(),D$=S();function X$(r,e){var t,i,n;for(t=H$(r),n=0;n<t.length;n++){if(i=t[n],k$(e,i))throw new Error(D$("unexpected error. Property already exists on destination object. Property: %s.",i));e[i]=r[i]}return e}d6.exports=X$});var Mu=u((jFr,b6)=>{"use strict";var J$=Rr().isPrimitive;function z$(r){return J$(r)&&r>=0}b6.exports=z$});var Cu=u((VFr,E6)=>{"use strict";var Y$=Rr().isObject;function Z$(r){return Y$(r)&&r.valueOf()>=0}E6.exports=Z$});var A6=u((GFr,N6)=>{"use strict";var Q$=Mu(),$$=Cu();function K$(r){return Q$(r)||$$(r)}N6.exports=K$});var Ae=u((UFr,S6)=>{"use strict";var O6=w(),Bu=A6(),x$=Mu(),rK=Cu();O6(Bu,"isPrimitive",x$);O6(Bu,"isObject",rK);S6.exports=Bu});var L6=u((WFr,T6)=>{"use strict";var eK=gn();function tK(r){return eK(r)==="function"}T6.exports=tK});var L=u((HFr,I6)=>{"use strict";var iK=L6();I6.exports=iK});var _6=u((kFr,P6)=>{"use strict";var nK=Object.getPrototypeOf;P6.exports=nK});var F6=u((DFr,R6)=>{"use strict";function aK(r){return r.__proto__}R6.exports=aK});var C6=u((XFr,M6)=>{"use strict";var uK=K(),sK=F6();function oK(r){var e=sK(r);return e||e===null?e:uK(r.constructor)==="[object Function]"?r.constructor.prototype:r instanceof Object?Object.prototype:null}M6.exports=oK});var j6=u((JFr,B6)=>{"use strict";var vK=L(),fK=_6(),lK=C6(),ju;vK(Object.getPrototypeOf)?ju=fK:ju=lK;B6.exports=ju});var G6=u((zFr,V6)=>{"use strict";var cK=j6();function pK(r){return r==null?null:(r=Object(r),cK(r))}V6.exports=pK});var ut=u((YFr,U6)=>{"use strict";var gK=G6();U6.exports=gK});var H6=u((ZFr,W6)=>{"use strict";var mK=ut(),qK=K();function yK(r){if(typeof r!="object"||r===null)return!1;if(r instanceof Error)return!0;for(;r;){if(qK(r)==="[object Error]")return!0;r=mK(r)}return!1}W6.exports=yK});var D6=u((QFr,k6)=>{"use strict";var hK=H6();k6.exports=hK});var Vu=u(($Fr,X6)=>{"use strict";function dK(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}X6.exports=dK});var z6=u((KFr,J6)=>{"use strict";var wK=Vu(),bK=wK();J6.exports=bK});var Q6=u((xFr,Z6)=>{"use strict";var EK=w(),Y6=Vu(),NK=z6();EK(Y6,"REGEXP",NK);Z6.exports=Y6});var K6=u((rMr,$6)=>{"use strict";var AK=X().isPrimitive,OK=Q6(),SK=S();function TK(r){if(!AK(r))throw new TypeError(SK("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return r=OK().exec(r),r?new RegExp(r[1],r[2]):null}$6.exports=TK});var rc=u((eMr,x6)=>{"use strict";var LK=K6();x6.exports=LK});var tc=u((tMr,ec)=>{"use strict";var IK=typeof Object.getOwnPropertyNames<"u";ec.exports=IK});var nc=u((iMr,ic)=>{"use strict";var PK=Object.getOwnPropertyNames;function _K(r){return PK(Object(r))}ic.exports=_K});var uc=u((nMr,ac)=>{"use strict";var RK=Ei();function FK(r){return RK(Object(r))}ac.exports=FK});var oc=u((aMr,sc)=>{"use strict";var MK=tc(),CK=nc(),BK=uc(),Gu;MK?Gu=CK:Gu=BK;sc.exports=Gu});var fc=u((uMr,vc)=>{"use strict";var jK=typeof Object.getOwnPropertyDescriptor<"u";vc.exports=jK});var cc=u((sMr,lc)=>{"use strict";var VK=Object.getOwnPropertyDescriptor;function GK(r,e){var t;return r==null?null:(t=VK(r,e),t===void 0?null:t)}lc.exports=GK});var gc=u((oMr,pc)=>{"use strict";var UK=A();function WK(r,e){return UK(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null}pc.exports=WK});var qc=u((vMr,mc)=>{"use strict";var HK=fc(),kK=cc(),DK=gc(),Uu;HK?Uu=kK:Uu=DK;mc.exports=Uu});var hc=u((fMr,yc)=>{"use strict";var XK=typeof Buffer=="function"?Buffer:null;yc.exports=XK});var wc=u((lMr,dc)=>{"use strict";var JK=nt(),hn=hc();function zK(){var r,e;if(typeof hn!="function")return!1;try{typeof hn.from=="function"?e=hn.from([1,2,3,4]):e=new hn([1,2,3,4]),r=JK(e)&&e[0]===1&&e[1]===2&&e[2]===3&&e[3]===4}catch{r=!1}return r}dc.exports=zK});var Ec=u((cMr,bc)=>{"use strict";var YK=wc();bc.exports=YK});var Oc=u(dn=>{"use strict";dn.byteLength=QK;dn.toByteArray=KK;dn.fromByteArray=ex;var Gr=[],Tr=[],ZK=typeof Uint8Array<"u"?Uint8Array:Array,Wu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(st=0,Nc=Wu.length;st<Nc;++st)Gr[st]=Wu[st],Tr[Wu.charCodeAt(st)]=st;var st,Nc;Tr["-".charCodeAt(0)]=62;Tr["_".charCodeAt(0)]=63;function Ac(r){var e=r.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var i=t===e?0:4-t%4;return[t,i]}function QK(r){var e=Ac(r),t=e[0],i=e[1];return(t+i)*3/4-i}function $K(r,e,t){return(e+t)*3/4-t}function KK(r){var e,t=Ac(r),i=t[0],n=t[1],a=new ZK($K(r,i,n)),s=0,o=n>0?i-4:i,v;for(v=0;v<o;v+=4)e=Tr[r.charCodeAt(v)]<<18|Tr[r.charCodeAt(v+1)]<<12|Tr[r.charCodeAt(v+2)]<<6|Tr[r.charCodeAt(v+3)],a[s++]=e>>16&255,a[s++]=e>>8&255,a[s++]=e&255;return n===2&&(e=Tr[r.charCodeAt(v)]<<2|Tr[r.charCodeAt(v+1)]>>4,a[s++]=e&255),n===1&&(e=Tr[r.charCodeAt(v)]<<10|Tr[r.charCodeAt(v+1)]<<4|Tr[r.charCodeAt(v+2)]>>2,a[s++]=e>>8&255,a[s++]=e&255),a}function xK(r){return Gr[r>>18&63]+Gr[r>>12&63]+Gr[r>>6&63]+Gr[r&63]}function rx(r,e,t){for(var i,n=[],a=e;a<t;a+=3)i=(r[a]<<16&16711680)+(r[a+1]<<8&65280)+(r[a+2]&255),n.push(xK(i));return n.join("")}function ex(r){for(var e,t=r.length,i=t%3,n=[],a=16383,s=0,o=t-i;s<o;s+=a)n.push(rx(r,s,s+a>o?o:s+a));return i===1?(e=r[t-1],n.push(Gr[e>>2]+Gr[e<<4&63]+"==")):i===2&&(e=(r[t-2]<<8)+r[t-1],n.push(Gr[e>>10]+Gr[e>>4&63]+Gr[e<<2&63]+"=")),n.join("")}});var Sc=u(Hu=>{Hu.read=function(r,e,t,i,n){var a,s,o=n*8-i-1,v=(1<<o)-1,f=v>>1,l=-7,c=t?n-1:0,p=t?-1:1,q=r[e+c];for(c+=p,a=q&(1<<-l)-1,q>>=-l,l+=o;l>0;a=a*256+r[e+c],c+=p,l-=8);for(s=a&(1<<-l)-1,a>>=-l,l+=i;l>0;s=s*256+r[e+c],c+=p,l-=8);if(a===0)a=1-f;else{if(a===v)return s?NaN:(q?-1:1)*(1/0);s=s+Math.pow(2,i),a=a-f}return(q?-1:1)*s*Math.pow(2,a-i)};Hu.write=function(r,e,t,i,n,a){var s,o,v,f=a*8-n-1,l=(1<<f)-1,c=l>>1,p=n===23?Math.pow(2,-24)-Math.pow(2,-77):0,q=i?0:a-1,y=i?1:-1,m=e<0||e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(v=Math.pow(2,-s))<1&&(s--,v*=2),s+c>=1?e+=p/v:e+=p*Math.pow(2,1-c),e*v>=2&&(s++,v/=2),s+c>=l?(o=0,s=l):s+c>=1?(o=(e*v-1)*Math.pow(2,n),s=s+c):(o=e*Math.pow(2,c-1)*Math.pow(2,n),s=0));n>=8;r[t+q]=o&255,q+=y,o/=256,n-=8);for(s=s<<n|o,f+=n;f>0;r[t+q]=s&255,q+=y,s/=256,f-=8);r[t+q-y]|=m*128}});var Gc=u(Pt=>{"use strict";var ku=Oc(),It=Sc(),Tc=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Pt.Buffer=d;Pt.SlowBuffer=sx;Pt.INSPECT_MAX_BYTES=50;var wn=2147483647;Pt.kMaxLength=wn;d.TYPED_ARRAY_SUPPORT=tx();!d.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function tx(){try{var r=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),r.foo()===42}catch{return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}});Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function kr(r){if(r>wn)throw new RangeError('The value "'+r+'" is invalid for option "size"');var e=new Uint8Array(r);return Object.setPrototypeOf(e,d.prototype),e}function d(r,e,t){if(typeof r=="number"){if(typeof e=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return zu(r)}return Pc(r,e,t)}d.poolSize=8192;function Pc(r,e,t){if(typeof r=="string")return nx(r,e);if(ArrayBuffer.isView(r))return ax(r);if(r==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r);if(Ur(r,ArrayBuffer)||r&&Ur(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Ur(r,SharedArrayBuffer)||r&&Ur(r.buffer,SharedArrayBuffer)))return Xu(r,e,t);if(typeof r=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var i=r.valueOf&&r.valueOf();if(i!=null&&i!==r)return d.from(i,e,t);var n=ux(r);if(n)return n;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof r[Symbol.toPrimitive]=="function")return d.from(r[Symbol.toPrimitive]("string"),e,t);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}d.from=function(r,e,t){return Pc(r,e,t)};Object.setPrototypeOf(d.prototype,Uint8Array.prototype);Object.setPrototypeOf(d,Uint8Array);function _c(r){if(typeof r!="number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError('The value "'+r+'" is invalid for option "size"')}function ix(r,e,t){return _c(r),r<=0?kr(r):e!==void 0?typeof t=="string"?kr(r).fill(e,t):kr(r).fill(e):kr(r)}d.alloc=function(r,e,t){return ix(r,e,t)};function zu(r){return _c(r),kr(r<0?0:Yu(r)|0)}d.allocUnsafe=function(r){return zu(r)};d.allocUnsafeSlow=function(r){return zu(r)};function nx(r,e){if((typeof e!="string"||e==="")&&(e="utf8"),!d.isEncoding(e))throw new TypeError("Unknown encoding: "+e);var t=Rc(r,e)|0,i=kr(t),n=i.write(r,e);return n!==t&&(i=i.slice(0,n)),i}function Du(r){for(var e=r.length<0?0:Yu(r.length)|0,t=kr(e),i=0;i<e;i+=1)t[i]=r[i]&255;return t}function ax(r){if(Ur(r,Uint8Array)){var e=new Uint8Array(r);return Xu(e.buffer,e.byteOffset,e.byteLength)}return Du(r)}function Xu(r,e,t){if(e<0||r.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError('"length" is outside of buffer bounds');var i;return e===void 0&&t===void 0?i=new Uint8Array(r):t===void 0?i=new Uint8Array(r,e):i=new Uint8Array(r,e,t),Object.setPrototypeOf(i,d.prototype),i}function ux(r){if(d.isBuffer(r)){var e=Yu(r.length)|0,t=kr(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)return typeof r.length!="number"||Zu(r.length)?kr(0):Du(r);if(r.type==="Buffer"&&Array.isArray(r.data))return Du(r.data)}function Yu(r){if(r>=wn)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+wn.toString(16)+" bytes");return r|0}function sx(r){return+r!=r&&(r=0),d.alloc(+r)}d.isBuffer=function(e){return e!=null&&e._isBuffer===!0&&e!==d.prototype};d.compare=function(e,t){if(Ur(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),Ur(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var i=e.length,n=t.length,a=0,s=Math.min(i,n);a<s;++a)if(e[a]!==t[a]){i=e[a],n=t[a];break}return i<n?-1:n<i?1:0};d.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};d.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(e.length===0)return d.alloc(0);var i;if(t===void 0)for(t=0,i=0;i<e.length;++i)t+=e[i].length;var n=d.allocUnsafe(t),a=0;for(i=0;i<e.length;++i){var s=e[i];if(Ur(s,Uint8Array))a+s.length>n.length?d.from(s).copy(n,a):Uint8Array.prototype.set.call(n,s,a);else if(d.isBuffer(s))s.copy(n,a);else throw new TypeError('"list" argument must be an Array of Buffers');a+=s.length}return n};function Rc(r,e){if(d.isBuffer(r))return r.length;if(ArrayBuffer.isView(r)||Ur(r,ArrayBuffer))return r.byteLength;if(typeof r!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof r);var t=r.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&t===0)return 0;for(var n=!1;;)switch(e){case"ascii":case"latin1":case"binary":return t;case"utf8":case"utf-8":return Ju(r).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"base64":return Vc(r).length;default:if(n)return i?-1:Ju(r).length;e=(""+e).toLowerCase(),n=!0}}d.byteLength=Rc;function ox(r,e,t){var i=!1;if((e===void 0||e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return hx(this,e,t);case"utf8":case"utf-8":return Mc(this,e,t);case"ascii":return qx(this,e,t);case"latin1":case"binary":return yx(this,e,t);case"base64":return gx(this,e,t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return dx(this,e,t);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),i=!0}}d.prototype._isBuffer=!0;function ot(r,e,t){var i=r[e];r[e]=r[t],r[t]=i}d.prototype.swap16=function(){var e=this.length;if(e%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)ot(this,t,t+1);return this};d.prototype.swap32=function(){var e=this.length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)ot(this,t,t+3),ot(this,t+1,t+2);return this};d.prototype.swap64=function(){var e=this.length;if(e%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)ot(this,t,t+7),ot(this,t+1,t+6),ot(this,t+2,t+5),ot(this,t+3,t+4);return this};d.prototype.toString=function(){var e=this.length;return e===0?"":arguments.length===0?Mc(this,0,e):ox.apply(this,arguments)};d.prototype.toLocaleString=d.prototype.toString;d.prototype.equals=function(e){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e?!0:d.compare(this,e)===0};d.prototype.inspect=function(){var e="",t=Pt.INSPECT_MAX_BYTES;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"};Tc&&(d.prototype[Tc]=d.prototype.inspect);d.prototype.compare=function(e,t,i,n,a){if(Ur(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),i===void 0&&(i=e?e.length:0),n===void 0&&(n=0),a===void 0&&(a=this.length),t<0||i>e.length||n<0||a>this.length)throw new RangeError("out of range index");if(n>=a&&t>=i)return 0;if(n>=a)return-1;if(t>=i)return 1;if(t>>>=0,i>>>=0,n>>>=0,a>>>=0,this===e)return 0;for(var s=a-n,o=i-t,v=Math.min(s,o),f=this.slice(n,a),l=e.slice(t,i),c=0;c<v;++c)if(f[c]!==l[c]){s=f[c],o=l[c];break}return s<o?-1:o<s?1:0};function Fc(r,e,t,i,n){if(r.length===0)return-1;if(typeof t=="string"?(i=t,t=0):t>2147483647?t=2147483647:t<-2147483648&&(t=-2147483648),t=+t,Zu(t)&&(t=n?0:r.length-1),t<0&&(t=r.length+t),t>=r.length){if(n)return-1;t=r.length-1}else if(t<0)if(n)t=0;else return-1;if(typeof e=="string"&&(e=d.from(e,i)),d.isBuffer(e))return e.length===0?-1:Lc(r,e,t,i,n);if(typeof e=="number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?n?Uint8Array.prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Lc(r,[e],t,i,n);throw new TypeError("val must be string, number or Buffer")}function Lc(r,e,t,i,n){var a=1,s=r.length,o=e.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(r.length<2||e.length<2)return-1;a=2,s/=2,o/=2,t/=2}function v(q,y){return a===1?q[y]:q.readUInt16BE(y*a)}var f;if(n){var l=-1;for(f=t;f<s;f++)if(v(r,f)===v(e,l===-1?0:f-l)){if(l===-1&&(l=f),f-l+1===o)return l*a}else l!==-1&&(f-=f-l),l=-1}else for(t+o>s&&(t=s-o),f=t;f>=0;f--){for(var c=!0,p=0;p<o;p++)if(v(r,f+p)!==v(e,p)){c=!1;break}if(c)return f}return-1}d.prototype.includes=function(e,t,i){return this.indexOf(e,t,i)!==-1};d.prototype.indexOf=function(e,t,i){return Fc(this,e,t,i,!0)};d.prototype.lastIndexOf=function(e,t,i){return Fc(this,e,t,i,!1)};function vx(r,e,t,i){t=Number(t)||0;var n=r.length-t;i?(i=Number(i),i>n&&(i=n)):i=n;var a=e.length;i>a/2&&(i=a/2);for(var s=0;s<i;++s){var o=parseInt(e.substr(s*2,2),16);if(Zu(o))return s;r[t+s]=o}return s}function fx(r,e,t,i){return bn(Ju(e,r.length-t),r,t,i)}function lx(r,e,t,i){return bn(Ex(e),r,t,i)}function cx(r,e,t,i){return bn(Vc(e),r,t,i)}function px(r,e,t,i){return bn(Nx(e,r.length-t),r,t,i)}d.prototype.write=function(e,t,i,n){if(t===void 0)n="utf8",i=this.length,t=0;else if(i===void 0&&typeof t=="string")n=t,i=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(i)?(i=i>>>0,n===void 0&&(n="utf8")):(n=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var a=this.length-t;if((i===void 0||i>a)&&(i=a),e.length>0&&(i<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var s=!1;;)switch(n){case"hex":return vx(this,e,t,i);case"utf8":case"utf-8":return fx(this,e,t,i);case"ascii":case"latin1":case"binary":return lx(this,e,t,i);case"base64":return cx(this,e,t,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return px(this,e,t,i);default:if(s)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),s=!0}};d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function gx(r,e,t){return e===0&&t===r.length?ku.fromByteArray(r):ku.fromByteArray(r.slice(e,t))}function Mc(r,e,t){t=Math.min(r.length,t);for(var i=[],n=e;n<t;){var a=r[n],s=null,o=a>239?4:a>223?3:a>191?2:1;if(n+o<=t){var v,f,l,c;switch(o){case 1:a<128&&(s=a);break;case 2:v=r[n+1],(v&192)===128&&(c=(a&31)<<6|v&63,c>127&&(s=c));break;case 3:v=r[n+1],f=r[n+2],(v&192)===128&&(f&192)===128&&(c=(a&15)<<12|(v&63)<<6|f&63,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:v=r[n+1],f=r[n+2],l=r[n+3],(v&192)===128&&(f&192)===128&&(l&192)===128&&(c=(a&15)<<18|(v&63)<<12|(f&63)<<6|l&63,c>65535&&c<1114112&&(s=c))}}s===null?(s=65533,o=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|s&1023),i.push(s),n+=o}return mx(i)}var Ic=4096;function mx(r){var e=r.length;if(e<=Ic)return String.fromCharCode.apply(String,r);for(var t="",i=0;i<e;)t+=String.fromCharCode.apply(String,r.slice(i,i+=Ic));return t}function qx(r,e,t){var i="";t=Math.min(r.length,t);for(var n=e;n<t;++n)i+=String.fromCharCode(r[n]&127);return i}function yx(r,e,t){var i="";t=Math.min(r.length,t);for(var n=e;n<t;++n)i+=String.fromCharCode(r[n]);return i}function hx(r,e,t){var i=r.length;(!e||e<0)&&(e=0),(!t||t<0||t>i)&&(t=i);for(var n="",a=e;a<t;++a)n+=Ax[r[a]];return n}function dx(r,e,t){for(var i=r.slice(e,t),n="",a=0;a<i.length-1;a+=2)n+=String.fromCharCode(i[a]+i[a+1]*256);return n}d.prototype.slice=function(e,t){var i=this.length;e=~~e,t=t===void 0?i:~~t,e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,d.prototype),n};function ir(r,e,t){if(r%1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUintLE=d.prototype.readUIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ir(e,t,this.length);for(var n=this[e],a=1,s=0;++s<t&&(a*=256);)n+=this[e+s]*a;return n};d.prototype.readUintBE=d.prototype.readUIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ir(e,t,this.length);for(var n=this[e+--t],a=1;t>0&&(a*=256);)n+=this[e+--t]*a;return n};d.prototype.readUint8=d.prototype.readUInt8=function(e,t){return e=e>>>0,t||ir(e,1,this.length),this[e]};d.prototype.readUint16LE=d.prototype.readUInt16LE=function(e,t){return e=e>>>0,t||ir(e,2,this.length),this[e]|this[e+1]<<8};d.prototype.readUint16BE=d.prototype.readUInt16BE=function(e,t){return e=e>>>0,t||ir(e,2,this.length),this[e]<<8|this[e+1]};d.prototype.readUint32LE=d.prototype.readUInt32LE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216};d.prototype.readUint32BE=d.prototype.readUInt32BE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])};d.prototype.readIntLE=function(e,t,i){e=e>>>0,t=t>>>0,i||ir(e,t,this.length);for(var n=this[e],a=1,s=0;++s<t&&(a*=256);)n+=this[e+s]*a;return a*=128,n>=a&&(n-=Math.pow(2,8*t)),n};d.prototype.readIntBE=function(e,t,i){e=e>>>0,t=t>>>0,i||ir(e,t,this.length);for(var n=t,a=1,s=this[e+--n];n>0&&(a*=256);)s+=this[e+--n]*a;return a*=128,s>=a&&(s-=Math.pow(2,8*t)),s};d.prototype.readInt8=function(e,t){return e=e>>>0,t||ir(e,1,this.length),this[e]&128?(255-this[e]+1)*-1:this[e]};d.prototype.readInt16LE=function(e,t){e=e>>>0,t||ir(e,2,this.length);var i=this[e]|this[e+1]<<8;return i&32768?i|4294901760:i};d.prototype.readInt16BE=function(e,t){e=e>>>0,t||ir(e,2,this.length);var i=this[e+1]|this[e]<<8;return i&32768?i|4294901760:i};d.prototype.readInt32LE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24};d.prototype.readInt32BE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]};d.prototype.readFloatLE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),It.read(this,e,!0,23,4)};d.prototype.readFloatBE=function(e,t){return e=e>>>0,t||ir(e,4,this.length),It.read(this,e,!1,23,4)};d.prototype.readDoubleLE=function(e,t){return e=e>>>0,t||ir(e,8,this.length),It.read(this,e,!0,52,8)};d.prototype.readDoubleBE=function(e,t){return e=e>>>0,t||ir(e,8,this.length),It.read(this,e,!1,52,8)};function pr(r,e,t,i,n,a){if(!d.isBuffer(r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<a)throw new RangeError('"value" argument is out of bounds');if(t+i>r.length)throw new RangeError("Index out of range")}d.prototype.writeUintLE=d.prototype.writeUIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){var a=Math.pow(2,8*i)-1;pr(this,e,t,i,a,0)}var s=1,o=0;for(this[t]=e&255;++o<i&&(s*=256);)this[t+o]=e/s&255;return t+i};d.prototype.writeUintBE=d.prototype.writeUIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,i=i>>>0,!n){var a=Math.pow(2,8*i)-1;pr(this,e,t,i,a,0)}var s=i-1,o=1;for(this[t+s]=e&255;--s>=0&&(o*=256);)this[t+s]=e/o&255;return t+i};d.prototype.writeUint8=d.prototype.writeUInt8=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,1,255,0),this[t]=e&255,t+1};d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2};d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2};d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+4};d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};d.prototype.writeIntLE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){var a=Math.pow(2,8*i-1);pr(this,e,t,i,a-1,-a)}var s=0,o=1,v=0;for(this[t]=e&255;++s<i&&(o*=256);)e<0&&v===0&&this[t+s-1]!==0&&(v=1),this[t+s]=(e/o>>0)-v&255;return t+i};d.prototype.writeIntBE=function(e,t,i,n){if(e=+e,t=t>>>0,!n){var a=Math.pow(2,8*i-1);pr(this,e,t,i,a-1,-a)}var s=i-1,o=1,v=0;for(this[t+s]=e&255;--s>=0&&(o*=256);)e<0&&v===0&&this[t+s+1]!==0&&(v=1),this[t+s]=(e/o>>0)-v&255;return t+i};d.prototype.writeInt8=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1};d.prototype.writeInt16LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,32767,-32768),this[t]=e&255,this[t+1]=e>>>8,t+2};d.prototype.writeInt16BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,t+2};d.prototype.writeInt32LE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4};d.prototype.writeInt32BE=function(e,t,i){return e=+e,t=t>>>0,i||pr(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4};function Cc(r,e,t,i,n,a){if(t+i>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError("Index out of range")}function Bc(r,e,t,i,n){return e=+e,t=t>>>0,n||Cc(r,e,t,4,34028234663852886e22,-34028234663852886e22),It.write(r,e,t,i,23,4),t+4}d.prototype.writeFloatLE=function(e,t,i){return Bc(this,e,t,!0,i)};d.prototype.writeFloatBE=function(e,t,i){return Bc(this,e,t,!1,i)};function jc(r,e,t,i,n){return e=+e,t=t>>>0,n||Cc(r,e,t,8,17976931348623157e292,-17976931348623157e292),It.write(r,e,t,i,52,8),t+8}d.prototype.writeDoubleLE=function(e,t,i){return jc(this,e,t,!0,i)};d.prototype.writeDoubleBE=function(e,t,i){return jc(this,e,t,!1,i)};d.prototype.copy=function(e,t,i,n){if(!d.isBuffer(e))throw new TypeError("argument should be a Buffer");if(i||(i=0),!n&&n!==0&&(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<i&&(n=i),n===i||e.length===0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-i&&(n=e.length-t+i);var a=n-i;return this===e&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(t,i,n):Uint8Array.prototype.set.call(e,this.subarray(i,n),t),a};d.prototype.fill=function(e,t,i,n){if(typeof e=="string"){if(typeof t=="string"?(n=t,t=0,i=this.length):typeof i=="string"&&(n=i,i=this.length),n!==void 0&&typeof n!="string")throw new TypeError("encoding must be a string");if(typeof n=="string"&&!d.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(e.length===1){var a=e.charCodeAt(0);(n==="utf8"&&a<128||n==="latin1")&&(e=a)}}else typeof e=="number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.length<i)throw new RangeError("Out of range index");if(i<=t)return this;t=t>>>0,i=i===void 0?this.length:i>>>0,e||(e=0);var s;if(typeof e=="number")for(s=t;s<i;++s)this[s]=e;else{var o=d.isBuffer(e)?e:d.from(e,n),v=o.length;if(v===0)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(s=0;s<i-t;++s)this[s+t]=o[s%v]}return this};var wx=/[^+/0-9A-Za-z-_]/g;function bx(r){if(r=r.split("=")[0],r=r.trim().replace(wx,""),r.length<2)return"";for(;r.length%4!==0;)r=r+"=";return r}function Ju(r,e){e=e||1/0;for(var t,i=r.length,n=null,a=[],s=0;s<i;++s){if(t=r.charCodeAt(s),t>55295&&t<57344){if(!n){if(t>56319){(e-=3)>-1&&a.push(239,191,189);continue}else if(s+1===i){(e-=3)>-1&&a.push(239,191,189);continue}n=t;continue}if(t<56320){(e-=3)>-1&&a.push(239,191,189),n=t;continue}t=(n-55296<<10|t-56320)+65536}else n&&(e-=3)>-1&&a.push(239,191,189);if(n=null,t<128){if((e-=1)<0)break;a.push(t)}else if(t<2048){if((e-=2)<0)break;a.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;a.push(t>>12|224,t>>6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;a.push(t>>18|240,t>>12&63|128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return a}function Ex(r){for(var e=[],t=0;t<r.length;++t)e.push(r.charCodeAt(t)&255);return e}function Nx(r,e){for(var t,i,n,a=[],s=0;s<r.length&&!((e-=2)<0);++s)t=r.charCodeAt(s),i=t>>8,n=t%256,a.push(n),a.push(i);return a}function Vc(r){return ku.toByteArray(bx(r))}function bn(r,e,t,i){for(var n=0;n<i&&!(n+t>=e.length||n>=r.length);++n)e[n+t]=r[n];return n}function Ur(r,e){return r instanceof e||r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}function Zu(r){return r!==r}var Ax=function(){for(var r="0123456789abcdef",e=new Array(256),t=0;t<16;++t)for(var i=t*16,n=0;n<16;++n)e[i+n]=r[t]+r[n];return e}()});var Wc=u((qMr,Uc)=>{"use strict";var Ox=Gc().Buffer;Uc.exports=Ox});var kc=u((yMr,Hc)=>{"use strict";function Sx(){throw new Error("not implemented")}Hc.exports=Sx});var En=u((hMr,Dc)=>{"use strict";var Tx=Ec(),Lx=Wc(),Ix=kc(),Qu;Tx()?Qu=Lx:Qu=Ix;Dc.exports=Qu});var Jc=u((dMr,Xc)=>{"use strict";var Px=L(),_x=En(),Rx=Px(_x.from);Xc.exports=Rx});var Yc=u((wMr,zc)=>{"use strict";var Fx=nt(),Mx=En();function Cx(r){if(!Fx(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return Mx.from(r)}zc.exports=Cx});var Qc=u((bMr,Zc)=>{"use strict";var Bx=nt(),jx=En();function Vx(r){if(!Bx(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new jx(r)}Zc.exports=Vx});var Kc=u((EMr,$c)=>{"use strict";var Gx=Jc(),Ux=Yc(),Wx=Qc(),$u;Gx?$u=Ux:$u=Wx;$c.exports=$u});var rp=u((NMr,xc)=>{"use strict";var Hx=K(),kx=typeof Int8Array=="function";function Dx(r){return kx&&r instanceof Int8Array||Hx(r)==="[object Int8Array]"}xc.exports=Dx});var tp=u((AMr,ep)=>{"use strict";var Xx=rp();ep.exports=Xx});var np=u((OMr,ip)=>{"use strict";var Jx=127;ip.exports=Jx});var up=u((SMr,ap)=>{"use strict";var zx=-128;ap.exports=zx});var op=u((TMr,sp)=>{"use strict";var Yx=typeof Int8Array=="function"?Int8Array:null;sp.exports=Yx});var lp=u((LMr,fp)=>{"use strict";var Zx=tp(),Qx=np(),$x=up(),vp=op();function Kx(){var r,e;if(typeof vp!="function")return!1;try{e=new vp([1,3.14,-3.14,Qx+1]),r=Zx(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===$x}catch{r=!1}return r}fp.exports=Kx});var pp=u((IMr,cp)=>{"use strict";var xx=lp();cp.exports=xx});var mp=u((PMr,gp)=>{"use strict";var rrr=typeof Int8Array=="function"?Int8Array:void 0;gp.exports=rrr});var yp=u((_Mr,qp)=>{"use strict";function err(){throw new Error("not implemented")}qp.exports=err});var Ni=u((RMr,hp)=>{"use strict";var trr=pp(),irr=mp(),nrr=yp(),Ku;trr()?Ku=irr:Ku=nrr;hp.exports=Ku});var wp=u((FMr,dp)=>{"use strict";var arr=K(),urr=typeof Uint8Array=="function";function srr(r){return urr&&r instanceof Uint8Array||arr(r)==="[object Uint8Array]"}dp.exports=srr});var Ep=u((MMr,bp)=>{"use strict";var orr=wp();bp.exports=orr});var Ap=u((CMr,Np)=>{"use strict";var vrr=255;Np.exports=vrr});var Sp=u((BMr,Op)=>{"use strict";var frr=typeof Uint8Array=="function"?Uint8Array:null;Op.exports=frr});var Ip=u((jMr,Lp)=>{"use strict";var lrr=Ep(),xu=Ap(),Tp=Sp();function crr(){var r,e;if(typeof Tp!="function")return!1;try{e=[1,3.14,-3.14,xu+1,xu+2],e=new Tp(e),r=lrr(e)&&e[0]===1&&e[1]===3&&e[2]===xu-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}Lp.exports=crr});var _p=u((VMr,Pp)=>{"use strict";var prr=Ip();Pp.exports=prr});var Fp=u((GMr,Rp)=>{"use strict";var grr=typeof Uint8Array=="function"?Uint8Array:void 0;Rp.exports=grr});var Cp=u((UMr,Mp)=>{"use strict";function mrr(){throw new Error("not implemented")}Mp.exports=mrr});var _t=u((WMr,Bp)=>{"use strict";var qrr=_p(),yrr=Fp(),hrr=Cp(),rs;qrr()?rs=yrr:rs=hrr;Bp.exports=rs});var Vp=u((HMr,jp)=>{"use strict";var drr=K(),wrr=typeof Uint8ClampedArray=="function";function brr(r){return wrr&&r instanceof Uint8ClampedArray||drr(r)==="[object Uint8ClampedArray]"}jp.exports=brr});var Up=u((kMr,Gp)=>{"use strict";var Err=Vp();Gp.exports=Err});var Hp=u((DMr,Wp)=>{"use strict";var Nrr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:null;Wp.exports=Nrr});var Xp=u((XMr,Dp)=>{"use strict";var Arr=Up(),kp=Hp();function Orr(){var r,e;if(typeof kp!="function")return!1;try{e=new kp([-1,0,1,3.14,4.99,255,256]),r=Arr(e)&&e[0]===0&&e[1]===0&&e[2]===1&&e[3]===3&&e[4]===5&&e[5]===255&&e[6]===255}catch{r=!1}return r}Dp.exports=Orr});var zp=u((JMr,Jp)=>{"use strict";var Srr=Xp();Jp.exports=Srr});var Zp=u((zMr,Yp)=>{"use strict";var Trr=typeof Uint8ClampedArray=="function"?Uint8ClampedArray:void 0;Yp.exports=Trr});var $p=u((YMr,Qp)=>{"use strict";function Lrr(){throw new Error("not implemented")}Qp.exports=Lrr});var Ai=u((ZMr,Kp)=>{"use strict";var Irr=zp(),Prr=Zp(),_rr=$p(),es;Irr()?es=Prr:es=_rr;Kp.exports=es});var r4=u((QMr,xp)=>{"use strict";var Rrr=K(),Frr=typeof Int16Array=="function";function Mrr(r){return Frr&&r instanceof Int16Array||Rrr(r)==="[object Int16Array]"}xp.exports=Mrr});var t4=u(($Mr,e4)=>{"use strict";var Crr=r4();e4.exports=Crr});var n4=u((KMr,i4)=>{"use strict";var Brr=32767;i4.exports=Brr});var u4=u((xMr,a4)=>{"use strict";var jrr=-32768;a4.exports=jrr});var o4=u((rCr,s4)=>{"use strict";var Vrr=typeof Int16Array=="function"?Int16Array:null;s4.exports=Vrr});var l4=u((eCr,f4)=>{"use strict";var Grr=t4(),Urr=n4(),Wrr=u4(),v4=o4();function Hrr(){var r,e;if(typeof v4!="function")return!1;try{e=new v4([1,3.14,-3.14,Urr+1]),r=Grr(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===Wrr}catch{r=!1}return r}f4.exports=Hrr});var p4=u((tCr,c4)=>{"use strict";var krr=l4();c4.exports=krr});var m4=u((iCr,g4)=>{"use strict";var Drr=typeof Int16Array=="function"?Int16Array:void 0;g4.exports=Drr});var y4=u((nCr,q4)=>{"use strict";function Xrr(){throw new Error("not implemented")}q4.exports=Xrr});var Oi=u((aCr,h4)=>{"use strict";var Jrr=p4(),zrr=m4(),Yrr=y4(),ts;Jrr()?ts=zrr:ts=Yrr;h4.exports=ts});var w4=u((uCr,d4)=>{"use strict";var Zrr=K(),Qrr=typeof Uint16Array=="function";function $rr(r){return Qrr&&r instanceof Uint16Array||Zrr(r)==="[object Uint16Array]"}d4.exports=$rr});var E4=u((sCr,b4)=>{"use strict";var Krr=w4();b4.exports=Krr});var A4=u((oCr,N4)=>{"use strict";var xrr=65535;N4.exports=xrr});var S4=u((vCr,O4)=>{"use strict";var rer=typeof Uint16Array=="function"?Uint16Array:null;O4.exports=rer});var I4=u((fCr,L4)=>{"use strict";var eer=E4(),is=A4(),T4=S4();function ter(){var r,e;if(typeof T4!="function")return!1;try{e=[1,3.14,-3.14,is+1,is+2],e=new T4(e),r=eer(e)&&e[0]===1&&e[1]===3&&e[2]===is-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}L4.exports=ter});var _4=u((lCr,P4)=>{"use strict";var ier=I4();P4.exports=ier});var F4=u((cCr,R4)=>{"use strict";var ner=typeof Uint16Array=="function"?Uint16Array:void 0;R4.exports=ner});var C4=u((pCr,M4)=>{"use strict";function aer(){throw new Error("not implemented")}M4.exports=aer});var Rt=u((gCr,B4)=>{"use strict";var uer=_4(),ser=F4(),oer=C4(),ns;uer()?ns=ser:ns=oer;B4.exports=ns});var V4=u((mCr,j4)=>{"use strict";var ver=K(),fer=typeof Int32Array=="function";function ler(r){return fer&&r instanceof Int32Array||ver(r)==="[object Int32Array]"}j4.exports=ler});var Nn=u((qCr,G4)=>{"use strict";var cer=V4();G4.exports=cer});var Ft=u((yCr,U4)=>{"use strict";var per=2147483647;U4.exports=per});var H4=u((hCr,W4)=>{"use strict";var ger=-2147483648;W4.exports=ger});var D4=u((dCr,k4)=>{"use strict";var mer=typeof Int32Array=="function"?Int32Array:null;k4.exports=mer});var z4=u((wCr,J4)=>{"use strict";var qer=Nn(),yer=Ft(),her=H4(),X4=D4();function der(){var r,e;if(typeof X4!="function")return!1;try{e=new X4([1,3.14,-3.14,yer+1]),r=qer(e)&&e[0]===1&&e[1]===3&&e[2]===-3&&e[3]===her}catch{r=!1}return r}J4.exports=der});var Z4=u((bCr,Y4)=>{"use strict";var wer=z4();Y4.exports=wer});var $4=u((ECr,Q4)=>{"use strict";var ber=typeof Int32Array=="function"?Int32Array:void 0;Q4.exports=ber});var x4=u((NCr,K4)=>{"use strict";function Eer(){throw new Error("not implemented")}K4.exports=Eer});var vt=u((ACr,r8)=>{"use strict";var Ner=Z4(),Aer=$4(),Oer=x4(),as;Ner()?as=Aer:as=Oer;r8.exports=as});var t8=u((OCr,e8)=>{"use strict";var Ser=K(),Ter=typeof Uint32Array=="function";function Ler(r){return Ter&&r instanceof Uint32Array||Ser(r)==="[object Uint32Array]"}e8.exports=Ler});var Dr=u((SCr,i8)=>{"use strict";var Ier=t8();i8.exports=Ier});var a8=u((TCr,n8)=>{"use strict";var Per=typeof Uint32Array=="function"?Uint32Array:null;n8.exports=Per});var o8=u((LCr,s8)=>{"use strict";var _er=Dr(),us=Tt(),u8=a8();function Rer(){var r,e;if(typeof u8!="function")return!1;try{e=[1,3.14,-3.14,us+1,us+2],e=new u8(e),r=_er(e)&&e[0]===1&&e[1]===3&&e[2]===us-2&&e[3]===0&&e[4]===1}catch{r=!1}return r}s8.exports=Rer});var f8=u((ICr,v8)=>{"use strict";var Fer=o8();v8.exports=Fer});var c8=u((PCr,l8)=>{"use strict";var Mer=typeof Uint32Array=="function"?Uint32Array:void 0;l8.exports=Mer});var g8=u((_Cr,p8)=>{"use strict";function Cer(){throw new Error("not implemented")}p8.exports=Cer});var or=u((RCr,m8)=>{"use strict";var Ber=f8(),jer=c8(),Ver=g8(),ss;Ber()?ss=jer:ss=Ver;m8.exports=ss});var y8=u((FCr,q8)=>{"use strict";var Ger=K(),Uer=typeof Float32Array=="function";function Wer(r){return Uer&&r instanceof Float32Array||Ger(r)==="[object Float32Array]"}q8.exports=Wer});var d8=u((MCr,h8)=>{"use strict";var Her=y8();h8.exports=Her});var b8=u((CCr,w8)=>{"use strict";var ker=typeof Float32Array=="function"?Float32Array:null;w8.exports=ker});var A8=u((BCr,N8)=>{"use strict";var Der=d8(),Xer=M(),E8=b8();function Jer(){var r,e;if(typeof E8!="function")return!1;try{e=new E8([1,3.14,-3.14,5e40]),r=Der(e)&&e[0]===1&&e[1]===3.140000104904175&&e[2]===-3.140000104904175&&e[3]===Xer}catch{r=!1}return r}N8.exports=Jer});var S8=u((jCr,O8)=>{"use strict";var zer=A8();O8.exports=zer});var L8=u((VCr,T8)=>{"use strict";var Yer=typeof Float32Array=="function"?Float32Array:void 0;T8.exports=Yer});var P8=u((GCr,I8)=>{"use strict";function Zer(){throw new Error("not implemented")}I8.exports=Zer});var Xr=u((UCr,_8)=>{"use strict";var Qer=S8(),$er=L8(),Ker=P8(),os;Qer()?os=$er:os=Ker;_8.exports=os});var F8=u((WCr,R8)=>{"use strict";var xer=K(),rtr=typeof Float64Array=="function";function etr(r){return rtr&&r instanceof Float64Array||xer(r)==="[object Float64Array]"}R8.exports=etr});var C8=u((HCr,M8)=>{"use strict";var ttr=F8();M8.exports=ttr});var j8=u((kCr,B8)=>{"use strict";var itr=typeof Float64Array=="function"?Float64Array:null;B8.exports=itr});var U8=u((DCr,G8)=>{"use strict";var ntr=C8(),V8=j8();function atr(){var r,e;if(typeof V8!="function")return!1;try{e=new V8([1,3.14,-3.14,NaN]),r=ntr(e)&&e[0]===1&&e[1]===3.14&&e[2]===-3.14&&e[3]!==e[3]}catch{r=!1}return r}G8.exports=atr});var vs=u((XCr,W8)=>{"use strict";var utr=U8();W8.exports=utr});var k8=u((JCr,H8)=>{"use strict";var str=typeof Float64Array=="function"?Float64Array:void 0;H8.exports=str});var X8=u((zCr,D8)=>{"use strict";function otr(){throw new Error("not implemented")}D8.exports=otr});var cr=u((YCr,J8)=>{"use strict";var vtr=vs(),ftr=k8(),ltr=X8(),fs;vtr()?fs=ftr:fs=ltr;J8.exports=fs});var Z8=u((ZCr,Y8)=>{"use strict";var ctr=Ni(),ptr=_t(),gtr=Ai(),mtr=Oi(),qtr=Rt(),ytr=vt(),htr=or(),dtr=Xr(),wtr=cr(),z8;function btr(r){return new ctr(r)}function Etr(r){return new ptr(r)}function Ntr(r){return new gtr(r)}function Atr(r){return new mtr(r)}function Otr(r){return new qtr(r)}function Str(r){return new ytr(r)}function Ttr(r){return new htr(r)}function Ltr(r){return new dtr(r)}function Itr(r){return new wtr(r)}function Ptr(){var r={int8array:btr,uint8array:Etr,uint8clampedarray:Ntr,int16array:Atr,uint16array:Otr,int32array:Str,uint32array:Ttr,float32array:Ltr,float64array:Itr};return r}z8=Ptr();Y8.exports=z8});var r5=u((QCr,x8)=>{"use strict";var An=A(),ls=lr(),Q8=nt(),_tr=D6(),$8=gn(),Rtr=rc(),Ftr=pn(),K8=Ei(),Mtr=oc(),Si=qc(),Ctr=ut(),Ti=Ee(),Btr=Kc(),jtr=Z8();function Vtr(r){var e,t,i,n,a,s,o,v;for(e=[],n=[],o=Object.create(Ctr(r)),e.push(r),n.push(o),t=Mtr(r),v=0;v<t.length;v++)i=t[v],a=Si(r,i),An(a,"value")&&(s=ls(r[i])?[]:{},a.value=ft(r[i],s,e,n,-1)),Ti(o,i,a);return Object.isExtensible(r)||Object.preventExtensions(o),Object.isSealed(r)&&Object.seal(o),Object.isFrozen(r)&&Object.freeze(o),o}function Gtr(r){var e=[],t=[],i,n,a,s,o,v;for(o=new r.constructor(r.message),e.push(r),t.push(o),r.stack&&(o.stack=r.stack),r.code&&(o.code=r.code),r.errno&&(o.errno=r.errno),r.syscall&&(o.syscall=r.syscall),i=K8(r),v=0;v<i.length;v++)s=i[v],n=Si(r,s),An(n,"value")&&(a=ls(r[s])?[]:{},n.value=ft(r[s],a,e,t,-1)),Ti(o,s,n);return o}function ft(r,e,t,i,n){var a,s,o,v,f,l,c,p,q,y;if(n-=1,typeof r!="object"||r===null)return r;if(Q8(r))return Btr(r);if(_tr(r))return Gtr(r);if(o=$8(r),o==="date")return new Date(+r);if(o==="regexp")return Rtr(r.toString());if(o==="set")return new Set(r);if(o==="map")return new Map(r);if(o==="string"||o==="boolean"||o==="number")return r.valueOf();if(f=jtr[o],f)return f(r);if(o!=="array"&&o!=="object")return typeof Object.freeze=="function"?Vtr(r):{};if(s=K8(r),n>0)for(a=o,y=0;y<s.length;y++){if(l=s[y],p=r[l],o=$8(p),typeof p!="object"||p===null||o!=="array"&&o!=="object"||Q8(p)){a==="object"?(v=Si(r,l),An(v,"value")&&(v.value=ft(p)),Ti(e,l,v)):e[l]=ft(p);continue}if(q=Ftr(t,p),q!==-1){e[l]=i[q];continue}c=ls(p)?new Array(p.length):{},t.push(p),i.push(c),a==="array"?e[l]=ft(p,c,t,i,n):(v=Si(r,l),An(v,"value")&&(v.value=ft(p,c,t,i,n)),Ti(e,l,v))}else if(o==="array")for(y=0;y<s.length;y++)l=s[y],e[l]=r[l];else for(y=0;y<s.length;y++)l=s[y],v=Si(r,l),Ti(e,l,v);return Object.isExtensible(r)||Object.preventExtensions(e),Object.isSealed(r)&&Object.seal(e),Object.isFrozen(r)&&Object.freeze(e),e}x8.exports=ft});var t5=u(($Cr,e5)=>{"use strict";var Utr=lr(),Wtr=Ae().isPrimitive,Htr=M(),ktr=r5();function Dtr(r,e){var t;if(arguments.length>1){if(!Wtr(e))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+e+"`.");if(e===0)return r}else e=Htr;return t=Utr(r)?new Array(r.length):{},ktr(r,t,[r],[t],e)}e5.exports=Dtr});var Mt=u((KCr,i5)=>{"use strict";var Xtr=t5();i5.exports=Xtr});var n5=u((xCr,Jtr)=>{Jtr.exports=[[[10,8.04],[8,6.95],[13,7.58],[9,8.81],[11,8.33],[14,9.96],[6,7.24],[4,4.26],[12,10.84],[7,4.82],[5,5.68]],[[10,9.14],[8,8.14],[13,8.74],[9,8.77],[11,9.26],[14,8.1],[6,6.13],[4,3.1],[12,9.13],[7,7.26],[5,4.74]],[[10,7.46],[8,6.77],[13,12.74],[9,7.11],[11,7.81],[14,8.84],[6,6.08],[4,5.39],[12,8.15],[7,6.42],[5,5.73]],[[8,6.58],[8,5.76],[8,7.71],[8,8.84],[8,8.47],[8,7.04],[8,5.25],[19,12.5],[8,5.56],[8,7.91],[8,6.89]]]});var u5=u((rBr,a5)=>{"use strict";var ztr=Mt(),Ytr=n5();function Ztr(){return ztr(Ytr)}a5.exports=Ztr});var o5=u((eBr,s5)=>{"use strict";var Qtr=lr();function $tr(r){return typeof r=="object"&&r!==null&&!Qtr(r)}s5.exports=$tr});var On=u((tBr,v5)=>{"use strict";var Ktr=o5();v5.exports=Ktr});var c5=u((iBr,l5)=>{"use strict";var xtr=On(),f5=L(),rir=ut(),Sn=A(),eir=K(),tir=Object.prototype;function iir(r){var e;for(e in r)if(!Sn(r,e))return!1;return!0}function nir(r){var e;return xtr(r)?(e=rir(r),e?!Sn(r,"constructor")&&Sn(e,"constructor")&&f5(e.constructor)&&eir(e.constructor)==="[object Function]"&&Sn(e,"isPrototypeOf")&&f5(e.isPrototypeOf)&&(e===tir||iir(r)):!0):!1}l5.exports=nir});var T=u((nBr,p5)=>{"use strict";var air=c5();p5.exports=air});var m5=u((aBr,g5)=>{"use strict";var uir=Ee();function sir(r,e,t){uir(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}g5.exports=sir});var y5=u((uBr,q5)=>{"use strict";var oir=m5();q5.exports=oir});var d5=u((sBr,h5)=>{"use strict";var vir=M(),fir=z();function lir(r){return r===vir||r===fir}h5.exports=lir});var Oe=u((oBr,w5)=>{"use strict";var cir=d5();w5.exports=cir});var E5=u((vBr,b5)=>{"use strict";function pir(r){return Math.abs(r)}b5.exports=pir});var Z=u((fBr,N5)=>{"use strict";var gir=E5();N5.exports=gir});var O5=u((lBr,A5)=>{"use strict";var mir=_t(),qir=Rt(),yir={uint16:qir,uint8:mir};A5.exports=yir});var I5=u((cBr,L5)=>{"use strict";var S5=O5(),T5;function hir(){var r,e;return r=new S5.uint16(1),r[0]=4660,e=new S5.uint8(r.buffer),e[0]===52}T5=hir();L5.exports=T5});var lt=u((pBr,P5)=>{"use strict";var dir=I5();P5.exports=dir});var R5=u((gBr,_5)=>{"use strict";var wir=lt(),cs;wir===!0?cs=1:cs=0;_5.exports=cs});var C5=u((mBr,M5)=>{"use strict";var bir=or(),Eir=cr(),Nir=R5(),F5=new Eir(1),Air=new bir(F5.buffer);function Oir(r){return F5[0]=r,Air[Nir]}M5.exports=Oir});var vr=u((qBr,B5)=>{"use strict";var Sir=C5();B5.exports=Sir});var V5=u((yBr,j5)=>{"use strict";var Tir=lt(),ps;Tir===!0?ps=1:ps=0;j5.exports=ps});var U5=u((hBr,G5)=>{"use strict";var Lir=or(),Iir=cr(),Pir=V5(),gs=new Iir(1),_ir=new Lir(gs.buffer);function Rir(r,e){return gs[0]=r,_ir[Pir]=e>>>0,gs[0]}G5.exports=Rir});var Ct=u((dBr,W5)=>{"use strict";var Fir=U5();W5.exports=Fir});var Se=u((wBr,H5)=>{"use strict";var Mir=1023;H5.exports=Mir});var D5=u((bBr,k5)=>{"use strict";function Cir(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}k5.exports=Cir});var J5=u((EBr,X5)=>{"use strict";function Bir(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}X5.exports=Bir});var Q5=u((NBr,Z5)=>{"use strict";var z5=vr(),jir=Ct(),Vir=b(),Gir=Se(),Uir=z(),Wir=D5(),Hir=J5(),Tn=.6931471803691238,Ln=19082149292705877e-26,kir=0x40000000000000,Dir=.3333333333333333,Y5=1048575,Xir=2146435072,Jir=1048576,zir=1072693248;function Yir(r){var e,t,i,n,a,s,o,v,f,l,c,p;return r===0?Uir:Vir(r)||r<0?NaN:(t=z5(r),a=0,t<Jir&&(a-=54,r*=kir,t=z5(r)),t>=Xir?r+r:(a+=(t>>20)-Gir|0,t&=Y5,v=t+614244&1048576|0,r=jir(r,t|v^zir),a+=v>>20|0,o=r-1,(Y5&2+t)<3?o===0?a===0?0:a*Tn+a*Ln:(s=o*o*(.5-Dir*o),a===0?o-s:a*Tn-(s-a*Ln-o)):(l=o/(2+o),p=l*l,v=t-398458|0,c=p*p,f=440401-t|0,n=c*Wir(c),i=p*Hir(c),v|=f,s=i+n,v>0?(e=.5*o*o,a===0?o-(e-l*(e+s)):a*Tn-(e-(l*(e+s)+a*Ln)-o)):a===0?o-l*(o-s):a*Tn-(l*(o-s)-a*Ln-o))))}Z5.exports=Yir});var B=u((ABr,$5)=>{"use strict";var Zir=Q5();$5.exports=Zir});var x5=u((OBr,K5)=>{"use strict";var Qir=Math.ceil;K5.exports=Qir});var e7=u((SBr,r7)=>{"use strict";var $ir=x5();r7.exports=$ir});var i7=u((TBr,t7)=>{"use strict";var Kir=rr(),xir=e7();function rnr(r){return r<0?xir(r):Kir(r)}t7.exports=rnr});var In=u((LBr,n7)=>{"use strict";var enr=i7();n7.exports=enr});var u7=u((IBr,a7)=>{"use strict";function tnr(r){return r===0?.0416666666666666:.0416666666666666+r*(-.001388888888887411+r*2480158728947673e-20)}a7.exports=tnr});var o7=u((PBr,s7)=>{"use strict";function inr(r){return r===0?-27557314351390663e-23:-27557314351390663e-23+r*(2087572321298175e-24+r*-11359647557788195e-27)}s7.exports=inr});var f7=u((_Br,v7)=>{"use strict";var nnr=u7(),anr=o7();function unr(r,e){var t,i,n,a;return a=r*r,n=a*a,i=a*nnr(a),i+=n*n*anr(a),t=.5*a,n=1-t,n+(1-n-t+(a*i-r*e))}v7.exports=unr});var ms=u((RBr,l7)=>{"use strict";var snr=f7();l7.exports=snr});var g7=u((FBr,p7)=>{"use strict";var c7=-.16666666666666632,onr=.00833333333332249,vnr=-.0001984126982985795,fnr=27557313707070068e-22,lnr=-25050760253406863e-24,cnr=158969099521155e-24;function pnr(r,e){var t,i,n,a;return a=r*r,n=a*a,t=onr+a*(vnr+a*fnr)+a*n*(lnr+a*cnr),i=a*r,e===0?r+i*(c7+a*t):r-(a*(.5*e-i*t)-e-i*c7)}p7.exports=pnr});var qs=u((MBr,m7)=>{"use strict";var gnr=g7();m7.exports=gnr});var y7=u((CBr,q7)=>{"use strict";var mnr=lt(),ys;mnr===!0?ys=0:ys=1;q7.exports=ys});var w7=u((BBr,d7)=>{"use strict";var qnr=or(),ynr=cr(),hnr=y7(),h7=new ynr(1),dnr=new qnr(h7.buffer);function wnr(r){return h7[0]=r,dnr[hnr]}d7.exports=wnr});var E7=u((jBr,b7)=>{"use strict";var bnr=w7();b7.exports=bnr});var O7=u((VBr,A7)=>{"use strict";var Enr=lt(),N7,hs,ds;Enr===!0?(hs=1,ds=0):(hs=0,ds=1);N7={HIGH:hs,LOW:ds};A7.exports=N7});var P7=u((GBr,I7)=>{"use strict";var Nnr=or(),Anr=cr(),T7=O7(),L7=new Anr(1),S7=new Nnr(L7.buffer),Onr=T7.HIGH,Snr=T7.LOW;function Tnr(r,e){return S7[Onr]=r,S7[Snr]=e,L7[0]}I7.exports=Tnr});var Pn=u((UBr,_7)=>{"use strict";var Lnr=P7();_7.exports=Lnr});var F7=u((WBr,R7)=>{"use strict";var Inr=1023;R7.exports=Inr});var C7=u((HBr,M7)=>{"use strict";var Pnr=-1023;M7.exports=Pnr});var j7=u((kBr,B7)=>{"use strict";var _nr=-1074;B7.exports=_nr});var U7=u((DBr,G7)=>{"use strict";var Rnr=lt(),V7,ws,bs;Rnr===!0?(ws=1,bs=0):(ws=0,bs=1);V7={HIGH:ws,LOW:bs};G7.exports=V7});var X7=u((XBr,D7)=>{"use strict";var Fnr=or(),Mnr=cr(),H7=U7(),k7=new Mnr(1),W7=new Fnr(k7.buffer),Cnr=H7.HIGH,Bnr=H7.LOW;function jnr(r,e){return k7[0]=e,r[0]=W7[Cnr],r[1]=W7[Bnr],r}D7.exports=jnr});var Y7=u((JBr,z7)=>{"use strict";var J7=X7();function Vnr(r,e){return arguments.length===1?J7([0,0],r):J7(r,e)}z7.exports=Vnr});var _n=u((zBr,Z7)=>{"use strict";var Gnr=Y7();Z7.exports=Gnr});var $7=u((YBr,Q7)=>{"use strict";var Unr=_n(),Wnr=vr(),Hnr=Pn(),knr=2147483648>>>0,Dnr=2147483647,Es=[0,0];function Xnr(r,e){var t,i;return Unr(Es,r),t=Es[0],t&=Dnr,i=Wnr(e),i&=knr,t|=i,Hnr(t,Es[1])}Q7.exports=Xnr});var Rn=u((ZBr,K7)=>{"use strict";var Jnr=$7();K7.exports=Jnr});var r9=u((QBr,x7)=>{"use strict";var znr=22250738585072014e-324;x7.exports=znr});var t9=u(($Br,e9)=>{"use strict";var Ynr=r9(),Znr=Oe(),Qnr=b(),$nr=Z(),Knr=4503599627370496;function xnr(r,e){return Qnr(e)||Znr(e)?(r[0]=e,r[1]=0,r):e!==0&&$nr(e)<Ynr?(r[0]=e*Knr,r[1]=-52,r):(r[0]=e,r[1]=0,r)}e9.exports=xnr});var a9=u((KBr,n9)=>{"use strict";var i9=t9();function rar(r,e){return arguments.length===1?i9([0,0],r):i9(r,e)}n9.exports=rar});var s9=u((xBr,u9)=>{"use strict";var ear=a9();u9.exports=ear});var v9=u((rjr,o9)=>{"use strict";var tar=2146435072;o9.exports=tar});var l9=u((ejr,f9)=>{"use strict";var iar=vr(),nar=v9(),aar=Se();function uar(r){var e=iar(r);return e=(e&nar)>>>20,e-aar|0}f9.exports=uar});var p9=u((tjr,c9)=>{"use strict";var sar=l9();c9.exports=sar});var m9=u((ijr,g9)=>{"use strict";var oar=M(),far=z(),lar=Se(),car=F7(),par=C7(),gar=j7(),mar=b(),qar=Oe(),yar=Rn(),har=s9(),dar=p9(),war=_n(),bar=Pn(),Ear=2220446049250313e-31,Nar=2148532223>>>0,Ns=[0,0],As=[0,0];function Aar(r,e){var t,i;return e===0||r===0||mar(r)||qar(r)?r:(har(Ns,r),r=Ns[0],e+=Ns[1],e+=dar(r),e<gar?yar(0,r):e>car?r<0?far:oar:(e<=par?(e+=52,i=Ear):i=1,war(As,r),t=As[0],t&=Nar,t|=e+lar<<20,i*bar(t,As[1])))}g9.exports=Aar});var Fn=u((njr,q9)=>{"use strict";var Oar=m9();q9.exports=Oar});var h9=u((ajr,y9)=>{"use strict";function Sar(r,e){var t,i;for(t=[],i=0;i<e;i++)t.push(r);return t}y9.exports=Sar});var Os=u((ujr,d9)=>{"use strict";var Tar=h9();d9.exports=Tar});var b9=u((sjr,w9)=>{"use strict";var Lar=Os();function Iar(r){return Lar(0,r)}w9.exports=Iar});var N9=u((ojr,E9)=>{"use strict";var Par=b9();E9.exports=Par});var L9=u((vjr,T9)=>{"use strict";var _ar=rr(),Mn=Fn(),jn=N9(),O9=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Rar=[1.570796251296997,7549789415861596e-23,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Ss=16777216,Ts=5960464477539063e-23,Cn=jn(20),A9=jn(20),Bn=jn(20),ur=jn(20);function S9(r,e,t,i,n,a,s,o,v){var f,l,c,p,q,y,m,g,h;for(p=a,h=i[t],g=t,q=0;g>0;q++)l=Ts*h|0,ur[q]=h-Ss*l|0,h=i[g-1]+l,g-=1;if(h=Mn(h,n),h-=8*_ar(h*.125),m=h|0,h-=m,c=0,n>0?(q=ur[t-1]>>24-n,m+=q,ur[t-1]-=q<<24-n,c=ur[t-1]>>23-n):n===0?c=ur[t-1]>>23:h>=.5&&(c=2),c>0){for(m+=1,f=0,q=0;q<t;q++)g=ur[q],f===0?g!==0&&(f=1,ur[q]=16777216-g):ur[q]=16777215-g;if(n>0)switch(n){case 1:ur[t-1]&=8388607;break;case 2:ur[t-1]&=4194303;break}c===2&&(h=1-h,f!==0&&(h-=Mn(1,n)))}if(h===0){for(g=0,q=t-1;q>=a;q--)g|=ur[q];if(g===0){for(y=1;ur[a-y]===0;y++);for(q=t+1;q<=t+y;q++){for(v[o+q]=O9[s+q],l=0,g=0;g<=o;g++)l+=r[g]*v[o+(q-g)];i[q]=l}return t+=y,S9(r,e,t,i,n,a,s,o,v)}}if(h===0)for(t-=1,n-=24;ur[t]===0;)t-=1,n-=24;else h=Mn(h,-n),h>=Ss?(l=Ts*h|0,ur[t]=h-Ss*l|0,t+=1,n+=24,ur[t]=l):ur[t]=h|0;for(l=Mn(1,n),q=t;q>=0;q--)i[q]=l*ur[q],l*=Ts;for(q=t;q>=0;q--){for(l=0,y=0;y<=p&&y<=t-q;y++)l+=Rar[y]*i[q+y];Bn[t-q]=l}for(l=0,q=t;q>=0;q--)l+=Bn[q];for(c===0?e[0]=l:e[0]=-l,l=Bn[0]-l,q=1;q<=t;q++)l+=Bn[q];return c===0?e[1]=l:e[1]=-l,m&7}function Far(r,e,t,i){var n,a,s,o,v,f,l,c,p;for(a=4,o=i-1,s=(t-3)/24|0,s<0&&(s=0),f=t-24*(s+1),c=s-o,p=o+a,l=0;l<=p;l++)c<0?Cn[l]=0:Cn[l]=O9[c],c+=1;for(l=0;l<=a;l++){for(n=0,c=0;c<=o;c++)n+=r[c]*Cn[o+(l-c)];A9[l]=n}return v=a,S9(r,e,v,A9,f,a,s,o,Cn)}T9.exports=Far});var P9=u((fjr,I9)=>{"use strict";var Mar=Math.round;I9.exports=Mar});var Ls=u((ljr,_9)=>{"use strict";var Car=P9();_9.exports=Car});var C9=u((cjr,M9)=>{"use strict";var Bar=Ls(),R9=vr(),jar=.6366197723675814,Var=1.5707963267341256,Gar=6077100506506192e-26,Uar=6077100506303966e-26,War=20222662487959506e-37,Har=20222662487111665e-37,kar=84784276603689e-45,F9=2047;function Dar(r,e,t){var i,n,a,s,o,v,f;return n=Bar(r*jar),s=r-n*Var,o=n*Gar,f=e>>20|0,t[0]=s-o,i=R9(t[0]),v=f-(i>>20&F9),v>16&&(a=s,o=n*Uar,s=a-o,o=n*War-(a-s-o),t[0]=s-o,i=R9(t[0]),v=f-(i>>20&F9),v>49&&(a=s,o=n*Har,s=a-o,o=n*kar-(a-s-o),t[0]=s-o)),t[1]=s-t[0]-o,n}M9.exports=Dar});var j9=u((pjr,B9)=>{"use strict";var Xar=vr(),Jar=E7(),zar=Pn(),Yar=L9(),Vn=C9(),Zar=0,Qar=16777216,Te=1.5707963267341256,ct=6077100506506192e-26,Gn=2*ct,Un=3*ct,Wn=4*ct,$ar=2147483647,Kar=2146435072,xar=1048575,r0r=598523,e0r=1072243195,t0r=1073928572,i0r=1074752122,n0r=1074977148,a0r=1075183036,u0r=1075388923,s0r=1075594811,o0r=1094263291,Li=[0,0,0],Ii=[0,0];function v0r(r,e){var t,i,n,a,s,o,v,f;if(n=Xar(r),a=n&$ar|0,a<=e0r)return e[0]=r,e[1]=0,0;if(a<=i0r)return(a&xar)===r0r?Vn(r,a,e):a<=t0r?r>0?(f=r-Te,e[0]=f-ct,e[1]=f-e[0]-ct,1):(f=r+Te,e[0]=f+ct,e[1]=f-e[0]+ct,-1):r>0?(f=r-2*Te,e[0]=f-Gn,e[1]=f-e[0]-Gn,2):(f=r+2*Te,e[0]=f+Gn,e[1]=f-e[0]+Gn,-2);if(a<=s0r)return a<=a0r?a===n0r?Vn(r,a,e):r>0?(f=r-3*Te,e[0]=f-Un,e[1]=f-e[0]-Un,3):(f=r+3*Te,e[0]=f+Un,e[1]=f-e[0]+Un,-3):a===u0r?Vn(r,a,e):r>0?(f=r-4*Te,e[0]=f-Wn,e[1]=f-e[0]-Wn,4):(f=r+4*Te,e[0]=f+Wn,e[1]=f-e[0]+Wn,-4);if(a<o0r)return Vn(r,a,e);if(a>=Kar)return e[0]=NaN,e[1]=NaN,0;for(t=Jar(r),i=(a>>20)-1046,f=zar(a-(i<<20|0),t),o=0;o<2;o++)Li[o]=f|0,f=(f-Li[o])*Qar;for(Li[2]=f,s=3;Li[s-1]===Zar;)s-=1;return v=Yar(Li,Ii,i,s,1),r<0?(e[0]=-Ii[0],e[1]=-Ii[1],-v):(e[0]=Ii[0],e[1]=Ii[1],v)}B9.exports=v0r});var Pi=u((gjr,V9)=>{"use strict";var f0r=j9();V9.exports=f0r});var W9=u((mjr,U9)=>{"use strict";var l0r=vr(),Is=ms(),G9=qs(),c0r=Pi(),Jr=[0,0],p0r=2147483647,g0r=1072243195,m0r=1044381696,q0r=2146435072;function y0r(r){var e,t;if(e=l0r(r),e&=p0r,e<=g0r)return e<m0r?1:Is(r,0);if(e>=q0r)return NaN;switch(t=c0r(r,Jr),t&3){case 0:return Is(Jr[0],Jr[1]);case 1:return-G9(Jr[0],Jr[1]);case 2:return-Is(Jr[0],Jr[1]);default:return G9(Jr[0],Jr[1])}}U9.exports=y0r});var _i=u((qjr,H9)=>{"use strict";var h0r=W9();H9.exports=h0r});var X9=u((yjr,D9)=>{"use strict";var d0r=vr(),k9=ms(),Ps=qs(),w0r=Pi(),b0r=2147483647,E0r=2146435072,N0r=1072243195,A0r=1045430272,zr=[0,0];function O0r(r){var e,t;if(e=d0r(r),e&=b0r,e<=N0r)return e<A0r?r:Ps(r,0);if(e>=E0r)return NaN;switch(t=w0r(r,zr),t&3){case 0:return Ps(zr[0],zr[1]);case 1:return k9(zr[0],zr[1]);case 2:return-Ps(zr[0],zr[1]);default:return-k9(zr[0],zr[1])}}D9.exports=O0r});var Ri=u((hjr,J9)=>{"use strict";var S0r=X9();J9.exports=S0r});var Lr=u((djr,z9)=>{"use strict";var T0r=3.141592653589793;z9.exports=T0r});var Q9=u((wjr,Z9)=>{"use strict";var L0r=b(),I0r=Oe(),Y9=_i(),_s=Ri(),P0r=Z(),Fi=Rn(),Mi=Lr();function _0r(r){var e,t;return L0r(r)?NaN:I0r(r)?NaN:(t=r%2,e=P0r(t),e===0||e===1?Fi(0,t):e<.25?_s(Mi*t):e<.75?(e=.5-e,Fi(Y9(Mi*e),t)):e<1.25?(t=Fi(1,t)-t,_s(Mi*t)):e<1.75?(e-=1.5,-Fi(Y9(Mi*e),t)):(t-=Fi(2,t),_s(Mi*t)))}Z9.exports=_0r});var Ci=u((bjr,$9)=>{"use strict";var R0r=Q9();$9.exports=R0r});var x9=u((Ejr,K9)=>{"use strict";function F0r(r){return r===0?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+r*25214456545125733e-21)))}K9.exports=F0r});var eg=u((Njr,rg)=>{"use strict";function M0r(r){return r===0?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+r*44864094961891516e-21)))}rg.exports=M0r});var ig=u((Ajr,tg)=>{"use strict";function C0r(r){return r===0?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+r*7326684307446256e-21))))}tg.exports=C0r});var ag=u((Ojr,ng)=>{"use strict";function B0r(r){return r===0?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+r*3194753265841009e-20))))}ng.exports=B0r});var sg=u((Sjr,ug)=>{"use strict";function j0r(r){return r===0?-.032788541075985965:-.032788541075985965+r*(.006100538702462913+r*(-.0014034646998923284+r*.00031563207090362595))}ug.exports=j0r});var vg=u((Tjr,og)=>{"use strict";function V0r(r){return r===0?.01797067508118204:.01797067508118204+r*(-.0036845201678113826+r*(.000881081882437654+r*-.00031275416837512086))}og.exports=V0r});var lg=u((Ljr,fg)=>{"use strict";function G0r(r){return r===0?-.010314224129834144:-.010314224129834144+r*(.0022596478090061247+r*(-.0005385953053567405+r*.0003355291926355191))}fg.exports=G0r});var pg=u((Ijr,cg)=>{"use strict";function U0r(r){return r===0?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+r*.013381091853678766)))}cg.exports=U0r});var mg=u((Pjr,gg)=>{"use strict";function W0r(r){return r===0?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+r*.003217092422824239)))}gg.exports=W0r});var yg=u((_jr,qg)=>{"use strict";function H0r(r){return r===0?.08333333333333297:.08333333333333297+r*(-.0027777777772877554+r*(.0007936505586430196+r*(-.00059518755745034+r*(.0008363399189962821+r*-.0016309293409657527))))}qg.exports=H0r});var wg=u((Rjr,dg)=>{"use strict";var k0r=b(),D0r=Oe(),X0r=Z(),Bt=B(),J0r=In(),z0r=Ci(),Y0r=Lr(),Rs=M(),Z0r=x9(),Q0r=eg(),$0r=ig(),K0r=ag(),x0r=sg(),rur=vg(),eur=lg(),tur=pg(),iur=mg(),nur=yg(),aur=.07721566490153287,uur=.3224670334241136,sur=1,our=-.07721566490153287,vur=.48383612272381005,fur=-.1475877229945939,lur=.06462494023913339,cur=-.07721566490153287,pur=1,gur=.4189385332046727,Hn=1.4616321449683622,mur=4503599627370496,qur=0x400000000000000,yur=8470329472543003e-37,hg=1.4616321449683622,hur=-.12148629053584961,dur=-3638676997039505e-33;function wur(r){var e,t,i,n,a,s,o,v,f,l,c,p,q;if(k0r(r)||D0r(r))return r;if(r===0)return Rs;if(r<0?(e=!0,r=-r):e=!1,r<yur)return-Bt(r);if(e){if(r>=mur||(f=z0r(r),f===0))return Rs;t=Bt(Y0r/X0r(f*r))}if(r===1||r===2)return 0;if(r<2)switch(r<=.9?(q=-Bt(r),r>=Hn-1+.27?(c=1-r,i=0):r>=Hn-1-.27?(c=r-(hg-1),i=1):(c=r,i=2)):(q=0,r>=Hn+.27?(c=2-r,i=0):r>=Hn-.27?(c=r-hg,i=1):(c=r-1,i=2)),i){case 0:p=c*c,s=aur+p*Z0r(p),a=p*(uur+p*Q0r(p)),o=c*s+a,q+=o-.5*c;break;case 1:p=c*c,l=p*c,s=vur+l*x0r(l),a=fur+l*rur(l),n=lur+l*eur(l),o=p*s-(dur-l*(a+c*n)),q+=hur+o;break;case 2:s=c*(cur+c*tur(c)),a=pur+c*iur(c),q+=-.5*c+s/a;break}else if(r<8)switch(i=J0r(r),c=r-i,o=c*(our+c*K0r(c)),v=sur+c*$0r(c),q=.5*c+o/v,p=1,i){case 7:p*=c+6;case 6:p*=c+5;case 5:p*=c+4;case 4:p*=c+3;case 3:p*=c+2,q+=Bt(p)}else r<qur?(f=Bt(r),p=1/r,c=p*p,l=gur+p*nur(c),q=(r-.5)*(f-1)+l):q=r*(Bt(r)-1);return e&&(q=t-q),q}dg.exports=wur});var Bi=u((Fjr,bg)=>{"use strict";var bur=wg();bg.exports=bur});var Ng=u((Mjr,Eg)=>{"use strict";var Eur=z();function Nur(r){return r===0&&1/r===Eur}Eg.exports=Nur});var Fs=u((Cjr,Ag)=>{"use strict";var Aur=Ng();Ag.exports=Aur});var Ms=u((Bjr,Og)=>{"use strict";var Our=2.5066282746310007;Og.exports=Our});var Tg=u((jjr,Sg)=>{"use strict";var Sur=Ar();function Tur(r){return Sur(r/2)}Sg.exports=Tur});var kn=u((Vjr,Lg)=>{"use strict";var Lur=Tg();Lg.exports=Lur});var _g=u((Gjr,Pg)=>{"use strict";var Ig=kn();function Iur(r){return r>0?Ig(r-1):Ig(r+1)}Pg.exports=Iur});var Cs=u((Ujr,Rg)=>{"use strict";var Pur=_g();Rg.exports=Pur});var Mg=u((Wjr,Fg)=>{"use strict";var _ur=Math.sqrt;Fg.exports=_ur});var G=u((Hjr,Cg)=>{"use strict";var Rur=Mg();Cg.exports=Rur});var jg=u((kjr,Bg)=>{"use strict";var Fur=lt(),Bs;Fur===!0?Bs=0:Bs=1;Bg.exports=Bs});var Gg=u((Djr,Vg)=>{"use strict";var Mur=or(),Cur=cr(),Bur=jg(),js=new Cur(1),jur=new Mur(js.buffer);function Vur(r,e){return js[0]=r,jur[Bur]=e>>>0,js[0]}Vg.exports=Vur});var pt=u((Xjr,Ug)=>{"use strict";var Gur=Gg();Ug.exports=Gur});var Hg=u((Jjr,Wg)=>{"use strict";function Uur(r){return r|0}Wg.exports=Uur});var Vs=u((zjr,kg)=>{"use strict";var Wur=Hg();kg.exports=Wur});var Jg=u((Yjr,Xg)=>{"use strict";var Dg=Cs(),Hur=Rn(),kur=z(),Dn=M();function Dur(r,e){return e===kur?Dn:e===Dn?0:e>0?Dg(e)?r:0:Dg(e)?Hur(Dn,r):Dn}Xg.exports=Dur});var Yg=u((Zjr,zg)=>{"use strict";var Xur=vr(),Jur=2147483647,zur=1072693247,Xn=1e300,Jn=1e-300;function Yur(r,e){var t,i;return i=Xur(r),t=i&Jur,t<=zur?e<0?Xn*Xn:Jn*Jn:e>0?Xn*Xn:Jn*Jn}zg.exports=Yur});var $g=u((Qjr,Qg)=>{"use strict";var Zur=Z(),Zg=M();function Qur(r,e){return r===-1?(r-r)/(r-r):r===1?1:Zur(r)<1==(e===Zg)?0:Zg}Qg.exports=Qur});var xg=u(($jr,Kg)=>{"use strict";function $ur(r){return r===0?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+r*.20697501780033842))))}Kg.exports=$ur});var im=u((Kjr,tm)=>{"use strict";var Kur=vr(),zn=pt(),rm=Ct(),xur=Se(),rsr=xg(),esr=1048575,em=1048576,tsr=1072693248,isr=536870912,nsr=524288,asr=20,usr=9007199254740992,ssr=.9617966939259756,osr=.9617967009544373,vsr=-7028461650952758e-24,fsr=[1,1.5],lsr=[0,.5849624872207642],csr=[0,1350039202129749e-23];function psr(r,e,t){var i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N,V,O,D,nr,H;return D=0,t<em&&(e*=usr,D-=53,t=Kur(e)),D+=(t>>asr)-xur|0,nr=t&esr|0,t=nr|tsr|0,nr<=235662?H=0:nr<767610?H=1:(H=0,D+=1,t-=em),e=rm(e,t),l=fsr[H],V=e-l,O=1/(e+l),n=V*O,s=zn(n,0),i=(t>>1|isr)+nsr,i+=H<<18,v=rm(0,i),f=e-(v-l),o=O*(V-s*v-s*f),a=n*n,N=a*a*rsr(a),N+=o*(s+n),a=s*s,v=3+a+N,v=zn(v,0),f=N-(v-3-a),V=s*v,O=o*v+f*n,p=V+O,p=zn(p,0),q=O-(p-V),y=osr*p,m=vsr*p+q*ssr+csr[H],c=lsr[H],E=D,g=y+m+c+E,g=zn(g,0),h=m-(g-E-c-y),r[0]=g,r[1]=h,r}tm.exports=psr});var am=u((xjr,nm)=>{"use strict";function gsr(r){return r===0?.5:.5+r*(-.3333333333333333+r*.25)}nm.exports=gsr});var sm=u((rVr,um)=>{"use strict";var msr=pt(),qsr=am(),ysr=1.4426950408889634,hsr=1.4426950216293335,dsr=19259629911266175e-24;function wsr(r,e){var t,i,n,a,s,o;return n=e-1,a=n*n*qsr(n),s=hsr*n,o=n*dsr-a*ysr,i=s+o,i=msr(i,0),t=o-(i-s),r[0]=i,r[1]=t,r}um.exports=wsr});var Yn=u((eVr,om)=>{"use strict";var bsr=.6931471805599453;om.exports=bsr});var fm=u((tVr,vm)=>{"use strict";function Esr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}vm.exports=Esr});var ym=u((iVr,qm)=>{"use strict";var Nsr=vr(),lm=Ct(),Asr=pt(),Osr=Vs(),Ssr=Fn(),Tsr=Yn(),cm=Se(),Lsr=fm(),pm=2147483647,gm=1048575,mm=1048576,Isr=1071644672,ji=20,Psr=.6931471824645996,_sr=-1904654299957768e-24;function Rsr(r,e,t){var i,n,a,s,o,v,f,l,c,p,q;return p=r&pm|0,q=(p>>ji)-cm|0,c=0,p>Isr&&(c=r+(mm>>q+1)>>>0,q=((c&pm)>>ji)-cm|0,i=(c&~(gm>>q))>>>0,a=lm(0,i),c=(c&gm|mm)>>ji-q>>>0,r<0&&(c=-c),e-=a),a=t+e,a=Asr(a,0),o=a*Psr,v=(t-(a-e))*Tsr+a*_sr,l=o+v,f=v-(l-o),a=l*l,n=l-a*Lsr(a),s=l*n/(n-2)-(f+l*f),l=1-(s-l),r=Nsr(l),r=Osr(r),r+=c<<ji>>>0,r>>ji<=0?l=Ssr(l,c):l=lm(l,r),l}qm.exports=Rsr});var Lm=u((nVr,Tm)=>{"use strict";var hm=b(),dm=Cs(),wm=Oe(),Fsr=Ar(),bm=G(),Msr=Z(),Gs=_n(),Csr=pt(),Em=Vs(),Bsr=z(),jsr=M(),Vsr=Jg(),Gsr=Yg(),Usr=$g(),Wsr=im(),Hsr=sm(),ksr=ym(),Us=2147483647,Dsr=1072693247,Xsr=1105199104,Jsr=1139802112,Nm=1083179008,zsr=1072693248,Ysr=1083231232,Zsr=3230714880>>>0,Am=31,Le=1e300,Ie=1e-300,Qsr=8008566259537294e-32,Yr=[0,0],Om=[0,0];function Sm(r,e){var t,i,n,a,s,o,v,f,l,c,p,q,y,m,g,h;if(hm(r)||hm(e))return NaN;if(Gs(Yr,e),o=Yr[0],v=Yr[1],v===0){if(e===0)return 1;if(e===1)return r;if(e===-1)return 1/r;if(e===.5)return bm(r);if(e===-.5)return 1/bm(r);if(e===2)return r*r;if(e===3)return r*r*r;if(e===4)return r*=r,r*r;if(wm(e))return Usr(r,e)}if(Gs(Yr,r),a=Yr[0],s=Yr[1],s===0){if(a===0)return Vsr(r,e);if(r===1)return 1;if(r===-1&&dm(e))return-1;if(wm(r))return r===Bsr?Sm(-0,-e):e<0?0:jsr}if(r<0&&Fsr(e)===!1)return(r-r)/(r-r);if(n=Msr(r),t=a&Us|0,i=o&Us|0,f=a>>>Am|0,l=o>>>Am|0,f&&dm(e)?f=-1:f=1,i>Xsr){if(i>Jsr)return Gsr(r,e);if(t<Dsr)return l===1?f*Le*Le:f*Ie*Ie;if(t>zsr)return l===0?f*Le*Le:f*Ie*Ie;y=Hsr(Om,n)}else y=Wsr(Om,n,t);if(c=Csr(e,0),q=(e-c)*y[0]+e*y[1],p=c*y[0],m=q+p,Gs(Yr,m),g=Em(Yr[0]),h=Em(Yr[1]),g>=Nm){if((g-Nm|h)!==0||q+Qsr>m-p)return f*Le*Le}else if((g&Us)>=Ysr&&((g-Zsr|h)!==0||q<=m-p))return f*Ie*Ie;return m=ksr(g,p,q),f*m}Tm.exports=Sm});var x=u((aVr,Im)=>{"use strict";var $sr=Lm();Im.exports=$sr});var _m=u((uVr,Pm)=>{"use strict";function Ksr(r){return r===0?.16666666666666602:.16666666666666602+r*(-.0027777777777015593+r*(6613756321437934e-20+r*(-16533902205465252e-22+r*41381367970572385e-24)))}Pm.exports=Ksr});var Fm=u((sVr,Rm)=>{"use strict";var xsr=Fn(),ror=_m();function eor(r,e,t){var i,n,a,s;return i=r-e,n=i*i,a=i-n*ror(n),s=1-(e-i*a/(2-a)-r),xsr(s,t)}Rm.exports=eor});var Gm=u((oVr,Vm)=>{"use strict";var tor=b(),Mm=In(),ior=z(),Cm=M(),nor=Fm(),aor=.6931471803691238,uor=19082149292705877e-26,Bm=1.4426950408889634,sor=709.782712893384,oor=-745.1332191019411,jm=1/(1<<28),vor=-jm;function lor(r){var e,t,i;return tor(r)||r===Cm?r:r===ior?0:r>sor?Cm:r<oor?0:r>vor&&r<jm?1+r:(r<0?i=Mm(Bm*r-.5):i=Mm(Bm*r+.5),e=r-i*aor,t=i*uor,nor(e,t,i))}Vm.exports=lor});var sr=u((vVr,Um)=>{"use strict";var cor=Gm();Um.exports=cor});var Hm=u((fVr,Wm)=>{"use strict";function por(r){return r===0?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(-.0026813261780578124+r*(-.00022954996161337813+r*.0007873113957930937)))}Wm.exports=por});var Xm=u((lVr,Dm)=>{"use strict";var gor=Ms(),km=x(),mor=sr(),qor=Hm(),yor=143.01608;function hor(r){var e,t,i;return e=1/r,e=1+e*qor(e),t=mor(r),r>yor?(i=km(r,.5*r-.25),t=i*(i/t)):t=km(r,r-.5)/t,gor*t*e}Dm.exports=hor});var zm=u((cVr,Jm)=>{"use strict";var dor=.5772156649015329;Jm.exports=dor});var Zm=u((pVr,Ym)=>{"use strict";var wor=zm();function bor(r,e){return e/((1+wor*r)*r)}Ym.exports=bor});var $m=u((gVr,Qm)=>{"use strict";function Eor(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+r*0)))))),i=1+r*(.0714304917030273+r*(-.23459179571824335+r*(.035823639860549865+r*(.011813978522206043+r*(-.004456419138517973+r*(.0005396055804933034+r*-23158187332412014e-21))))))):(r=1/r,t=0+r*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+r*1)))))),i=-23158187332412014e-21+r*(.0005396055804933034+r*(-.004456419138517973+r*(.011813978522206043+r*(.035823639860549865+r*(-.23459179571824335+r*(.0714304917030273+r*1))))))),t/i)}Qm.exports=Eor});var aq=u((mVr,nq)=>{"use strict";var Nor=b(),Aor=Ar(),Oor=Fs(),Km=Z(),Sor=rr(),Tor=Ri(),xm=M(),rq=z(),eq=Lr(),tq=Xm(),iq=Zm(),Lor=$m();function Ior(r){var e,t,i,n;if(Aor(r)&&r<0||r===rq||Nor(r))return NaN;if(r===0)return Oor(r)?rq:xm;if(r>171.61447887182297)return xm;if(r<-170.5674972726612)return 0;if(t=Km(r),t>33)return r>=0?tq(r):(i=Sor(t),(i&1)===0?e=-1:e=1,n=t-i,n>.5&&(i+=1,n=t-i),n=t*Tor(eq*n),e*eq/(Km(n)*tq(t)));for(n=1;r>=3;)r-=1,n*=r;for(;r<0;){if(r>-1e-9)return iq(r,n);n/=r,r+=1}for(;r<2;){if(r<1e-9)return iq(r,n);n/=r,r+=1}return r===2?n:(r-=2,n*Lor(r))}nq.exports=Ior});var jt=u((qVr,uq)=>{"use strict";var Por=aq();uq.exports=Por});var Ws=u((yVr,sq)=>{"use strict";var _or=14901161193847656e-24;sq.exports=_or});var vq=u((hVr,oq)=>{"use strict";var Ror=17976931348623157e292;oq.exports=Ror});var Zn=u((dVr,fq)=>{"use strict";var For=709.782712893384;fq.exports=For});var cq=u((wVr,lq)=>{"use strict";var Mor=sr();function Cor(r,e){var t,i,n,a;if(n=Mor(-e),i=n,i!==0)for(t=i,a=1;a<r;++a)t/=a,t*=e,i+=t;return i}lq.exports=Cor});var gq=u((bVr,pq)=>{"use strict";function Bor(r){return r===0?-.3250421072470015:-.3250421072470015+r*(-.02848174957559851+r*(-.005770270296489442+r*-23763016656650163e-21))}pq.exports=Bor});var qq=u((EVr,mq)=>{"use strict";function jor(r){return r===0?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+r*-3960228278775368e-21)))}mq.exports=jor});var hq=u((NVr,yq)=>{"use strict";function Vor(r){return r===0?.41485611868374833:.41485611868374833+r*(-.3722078760357013+r*(.31834661990116175+r*(-.11089469428239668+r*(.035478304325618236+r*-.002166375594868791))))}yq.exports=Vor});var wq=u((AVr,dq)=>{"use strict";function Gor(r){return r===0?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+r*.011984499846799107))))}dq.exports=Gor});var Eq=u((OVr,bq)=>{"use strict";function Uor(r){return r===0?-.6938585727071818:-.6938585727071818+r*(-10.558626225323291+r*(-62.375332450326006+r*(-162.39666946257347+r*(-184.60509290671104+r*(-81.2874355063066+r*-9.814329344169145)))))}bq.exports=Uor});var Aq=u((SVr,Nq)=>{"use strict";function Wor(r){return r===0?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+r*-.0604244152148581))))))}Nq.exports=Wor});var Sq=u((TVr,Oq)=>{"use strict";function Hor(r){return r===0?-.799283237680523:-.799283237680523+r*(-17.757954917754752+r*(-160.63638485582192+r*(-637.5664433683896+r*(-1025.0951316110772+r*-483.5191916086514))))}Oq.exports=Hor});var Lq=u((LVr,Tq)=>{"use strict";function kor(r){return r===0?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+r*-22.44095244658582)))))}Tq.exports=kor});var Rq=u((IVr,_q)=>{"use strict";var Dor=b(),Iq=sr(),Xor=pt(),Jor=M(),zor=z(),Yor=gq(),Zor=qq(),Qor=hq(),$or=wq(),Kor=Eq(),xor=Aq(),r1r=Sq(),e1r=Lq(),Qn=1e-300,t1r=13877787807814457e-33,Pq=.8450629115104675,i1r=.12837916709551256,n1r=1,a1r=-.0023621185607526594,u1r=1,s1r=-.009864944034847148,o1r=1,v1r=-.0098649429247001,f1r=1;function l1r(r){var e,t,i,n,a,s,o,v;if(Dor(r))return NaN;if(r===Jor)return 0;if(r===zor)return 2;if(r===0)return 1;if(r<0?(e=!0,t=-r):(e=!1,t=r),t<.84375)return t<t1r?1-r:(i=r*r,n=i1r+i*Yor(i),a=n1r+i*Zor(i),s=n/a,r<.25?1-(r+r*s):(n=r*s,n+=r-.5,.5-n));if(t<1.25)return a=t-1,o=a1r+a*Qor(a),v=u1r+a*$or(a),e?1+Pq+o/v:1-Pq-o/v;if(t<28){if(a=1/(t*t),t<2.857142857142857)n=s1r+a*Kor(a),a=o1r+a*xor(a);else{if(r<-6)return 2-Qn;n=v1r+a*r1r(a),a=f1r+a*e1r(a)}return i=Xor(t,0),n=Iq(-(i*i)-.5625)*Iq((i-t)*(i+t)+n/a),e?2-n/t:n/t}return e?2-Qn:Qn*Qn}_q.exports=l1r});var Hs=u((PVr,Fq)=>{"use strict";var c1r=Rq();Fq.exports=c1r});var Bq=u((_Vr,Cq)=>{"use strict";var p1r=Hs(),Mq=G(),g1r=sr(),m1r=Lr();function q1r(r,e){var t,i,n,a,s;if(a=p1r(Mq(e)),a!==0&&r>1){for(i=g1r(-e)/Mq(m1r*e),i*=e,t=.5,i/=t,n=i,s=2;s<r;++s)i/=s-t,i*=e,n+=i;a+=n}return a}Cq.exports=q1r});var ks=u((RVr,jq)=>{"use strict";var y1r=-708.3964185322641;jq.exports=y1r});var Wq=u((FVr,Uq)=>{"use strict";var Vt=sr(),$n=x(),h1r=B(),Vq=Zn(),Gq=ks();function d1r(r,e){var t,i;return i=r*h1r(e),e>=1?i<Vq&&-e>Gq?t=$n(e,r)*Vt(-e):r>=1?t=$n(e/Vt(e/r),r):t=Vt(i-e):i>Gq?t=$n(e,r)*Vt(-e):e/r<Vq?t=$n(e/Vt(e/r),r):t=Vt(i-e),t}Uq.exports=d1r});var Ds=u((MVr,Hq)=>{"use strict";function w1r(r,e){var t,i;if(i=r.length,i<2||e===0)return i===0?0:r[0];for(i-=1,t=r[i]*e+r[i-1],i-=2;i>=0;)t=t*e+r[i],i-=1;return t}Hq.exports=w1r});var Dq=u((CVr,kq)=>{"use strict";var b1r=Ds();function E1r(r){var e,t,i,n;if(r.length>500)return a;if(e="return function evalpoly(x){",t=r.length,t===0)e+="return 0.0;";else if(t===1)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],i=t-1,n=1;n<t;n++)e+="+x*",n<i&&(e+="("),e+=r[n];for(n=0;n<i-1;n++)e+=")";e+=";"}return e+="}",e+="//# sourceURL=evalpoly.factory.js",new Function(e)();function a(s){return b1r(r,s)}}kq.exports=E1r});var zq=u((BVr,Jq)=>{"use strict";var N1r=w(),Xq=Ds(),A1r=Dq();N1r(Xq,"factory",A1r);Jq.exports=Xq});var Pe=u((jVr,Yq)=>{"use strict";var O1r=6.283185307179586;Yq.exports=O1r});var Qq=u((VVr,Zq)=>{"use strict";function S1r(r){return r===0?-.3333333333333333:-.3333333333333333+r*(.08333333333333333+r*(-.014814814814814815+r*(.0011574074074074073+r*(.0003527336860670194+r*(-.0001787551440329218+r*(3919263178522438e-20+r*(-21854485106799924e-22+r*(-185406221071516e-20+r*(8296711340953087e-22+r*(-17665952736826078e-23+r*(6707853543401498e-24+r*(10261809784240309e-24+r*(-4382036018453353e-24+r*914769958223679e-24)))))))))))))}Zq.exports=S1r});var Kq=u((GVr,$q)=>{"use strict";function T1r(r){return r===0?-.001851851851851852:-.001851851851851852+r*(-.003472222222222222+r*(.0026455026455026454+r*(-.0009902263374485596+r*(.00020576131687242798+r*(-4018775720164609e-22+r*(-18098550334489977e-21+r*(764916091608111e-20+r*(-16120900894563446e-22+r*(4647127802807434e-24+r*(1378633446915721e-22+r*(-5752545603517705e-23+r*11951628599778148e-24)))))))))))}$q.exports=T1r});var ry=u((UVr,xq)=>{"use strict";function L1r(r){return r===0?.004133597883597883:.004133597883597883+r*(-.0026813271604938273+r*(.0007716049382716049+r*(20093878600823047e-22+r*(-.00010736653226365161+r*(52923448829120125e-21+r*(-12760635188618728e-21+r*(3423578734096138e-23+r*(13721957309062932e-22+r*(-6298992138380055e-22+r*14280614206064242e-23)))))))))}xq.exports=L1r});var ty=u((WVr,ey)=>{"use strict";function I1r(r){return r===0?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(-.0004691894943952557+r*(.00026772063206283885+r*(-7561801671883977e-20+r*(-2396505113867297e-22+r*(11082654115347302e-21+r*(-56749528269915965e-22+r*14230900732435883e-22)))))))}ey.exports=I1r});var ny=u((HVr,iy)=>{"use strict";function P1r(r){return r===0?-.0008618882909167117:-.0008618882909167117+r*(.0007840392217200666+r*(-.0002990724803031902+r*(-14638452578843418e-22+r*(6641498215465122e-20+r*(-3968365047179435e-20+r*11375726970678419e-21)))))}iy.exports=P1r});var uy=u((kVr,ay)=>{"use strict";function _1r(r){return r===0?-.00033679855336635813:-.00033679855336635813+r*(-6972813758365858e-20+r*(.0002772753244959392+r*(-.00019932570516188847+r*(6797780477937208e-20+r*(1419062920643967e-22+r*(-13594048189768693e-21+r*(8018470256334202e-21+r*-2291481176508095e-21)))))))}ay.exports=_1r});var oy=u((DVr,sy)=>{"use strict";function R1r(r){return r===0?.0005313079364639922:.0005313079364639922+r*(-.0005921664373536939+r*(.0002708782096718045+r*(7902353232660328e-22+r*(-8153969367561969e-20+r*(561168275310625e-19+r*-18329116582843375e-21)))))}sy.exports=R1r});var fy=u((XVr,vy)=>{"use strict";function F1r(r){return r===0?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(-.00033493161081142234+r*(.0002812695154763237+r*-.00010976582244684731)))}vy.exports=F1r});var cy=u((JVr,ly)=>{"use strict";function M1r(r){return r===0?-.0006526239185953094:-.0006526239185953094+r*(.0008394987206720873+r*-.000438297098541721)}ly.exports=M1r});var gy=u((zVr,py)=>{"use strict";var C1r=zq(),B1r=Hs(),Xs=G(),j1r=sr(),V1r=B(),G1r=Pe(),U1r=Qq(),W1r=Kq(),H1r=ry(),k1r=ty(),D1r=ny(),X1r=uy(),J1r=oy(),z1r=fy(),Y1r=cy(),Mr=[0,0,0,0,0,0,0,0,0,0];function Z1r(r,e){var t,i,n,a,s;return i=(e-r)/r,n=-V1r(1+i)+i,a=r*n,s=Xs(2*n),e<r&&(s=-s),Mr[0]=U1r(s),Mr[1]=W1r(s),Mr[2]=H1r(s),Mr[3]=k1r(s),Mr[4]=D1r(s),Mr[5]=X1r(s),Mr[6]=J1r(s),Mr[7]=z1r(s),Mr[8]=Y1r(s),Mr[9]=-.0005967612901927463,t=C1r(Mr,1/r),t*=j1r(-a)/Xs(G1r*r),e<r&&(t=-t),t+=B1r(Xs(a))/2,t}py.exports=Z1r});var qy=u((YVr,my)=>{"use strict";var Q1r=eval;my.exports=Q1r});var hy=u((ZVr,yy)=>{"use strict";var $1r=qy();function K1r(){var r;try{$1r('"use strict"; (function* () {})'),r=!0}catch{r=!1}return r}yy.exports=K1r});var Js=u((QVr,dy)=>{"use strict";var x1r=hy();dy.exports=x1r});var Gt=u(($Vr,wy)=>{"use strict";var rvr=2220446049250313e-31;wy.exports=rvr});var Ey=u((KVr,by)=>{"use strict";var Kn=Z(),evr=Gt(),tvr=1e6;function ivr(r,e){var t,i,n,a,s,o;if(o={},arguments.length>1&&(o=e),i=o.tolerance||evr,a=o.maxTerms||tvr,s=o.initialValue||0,t=typeof r.next=="function",t===!0){for(n of r)if(s+=n,Kn(i*s)>=Kn(n)||--a===0)break}else do n=r(),s+=n;while(Kn(i*s)<Kn(n)&&--a);return s}by.exports=ivr});var Oy=u((xVr,Ay)=>{"use strict";var Ny=Z(),nvr=Gt(),avr=1e6;function uvr(r,e){var t,i,n,a,s;s={},arguments.length>1&&(s=e),t=s.tolerance||nvr,n=s.maxTerms||avr,a=s.initialValue||0;do i=r(),a+=i;while(Ny(t*a)<Ny(i)&&--n);return a}Ay.exports=uvr});var Ys=u((rGr,Sy)=>{"use strict";var svr=Js(),ovr=Ey(),vvr=Oy(),zs;svr()?zs=ovr:zs=vvr;Sy.exports=zs});var Ly=u((eGr,Ty)=>{"use strict";function fvr(r,e){var t=1,i=r,n=e;return a;function a(){var s=t;return i+=1,t*=n/i,s}}Ty.exports=fvr});var Py=u((tGr,Iy)=>{"use strict";var lvr=Ys(),cvr=Ly();function pvr(r,e,t){var i,n;return t=t||0,n=cvr(r,e),i=lvr(n,{initialValue:t}),i}Iy.exports=pvr});var Ry=u((iGr,_y)=>{"use strict";function gvr(r){var e,t,i;return r===0?1/0:(r<0?e=-r:e=r,e<=1?(t=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+r*4624429436045379e-20))))))))),i=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+r*1)))))))))):(r=1/r,t=4624429436045379e-20+r*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+r*709811.662581658))))))))),i=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+r*0)))))))))),t/i)}_y.exports=gvr});var My=u((nGr,Fy)=>{"use strict";var mvr=Ry();Fy.exports=mvr});var By=u((aGr,Cy)=>{"use strict";var qvr=My();Cy.exports=qvr});var Vy=u((uGr,jy)=>{"use strict";function yvr(r){return r===0?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+r*.14798198605116586)))))}jy.exports=yvr});var ky=u((sGr,Hy)=>{"use strict";var hvr=b(),Gy=vr(),Uy=Ct(),dvr=M(),wvr=z(),Wy=Se(),bvr=Vy(),Zs=.6931471803691238,Qs=19082149292705877e-26,Evr=.41421356237309503,Nvr=-.2928932188134525,Avr=1862645149230957e-24,Ovr=5551115123125783e-32,Svr=9007199254740992,Tvr=.6666666666666666;function Lvr(r){var e,t,i,n,a,s,o,v,f,l;if(r<-1||hvr(r))return NaN;if(r===-1)return wvr;if(r===dvr||r===0)return r;if(r<0?i=-r:i=r,l=1,i<Evr){if(i<Avr)return i<Ovr?r:r-r*r*.5;r>Nvr&&(l=0,n=r,t=1)}return l!==0&&(i<Svr?(f=1+r,t=Gy(f),l=(t>>20)-Wy,l>0?a=1-(f-r):a=r-(f-1),a/=f):(f=r,t=Gy(f),l=(t>>20)-Wy,a=0),t&=1048575,t<434334?f=Uy(f,t|1072693248):(l+=1,f=Uy(f,t|1071644672),t=1048576-t>>2),n=f-1),e=.5*n*n,t===0?n===0?(a+=l*Qs,l*Zs+a):(v=e*(1-Tvr*n),l*Zs-(v-(l*Qs+a)-n)):(s=n/(2+n),o=s*s,v=o*bvr(o),l===0?n-(e-s*(e+v)):l*Zs-(e-(s*(e+v)+(l*Qs+a))-n))}Hy.exports=Lvr});var Ut=u((oGr,Dy)=>{"use strict";var Ivr=ky();Dy.exports=Ivr});var Jy=u((vGr,Xy)=>{"use strict";var Pvr=M();function _vr(r){return r===0&&1/r===Pvr}Xy.exports=_vr});var _e=u((fGr,zy)=>{"use strict";var Rvr=Jy();zy.exports=Rvr});var Qy=u((lGr,Zy)=>{"use strict";var Yy=_e(),$s=b(),Fvr=z(),xn=M();function Mvr(r,e){var t,i,n,a;if(t=arguments.length,t===2)return $s(r)||$s(e)?NaN:r===xn||e===xn?xn:r===e&&r===0?Yy(r)?r:e:r>e?r:e;for(i=Fvr,a=0;a<t;a++){if(n=arguments[a],$s(n)||n===xn)return n;(n>i||n===i&&n===0&&Yy(n))&&(i=n)}return i}Zy.exports=Mvr});var Ks=u((cGr,$y)=>{"use strict";var Cvr=Qy();$y.exports=Cvr});var rh=u((pGr,xy)=>{"use strict";var Ky=Fs(),xs=b(),ra=z(),Bvr=M();function jvr(r,e){var t,i,n,a;if(t=arguments.length,t===2)return xs(r)||xs(e)?NaN:r===ra||e===ra?ra:r===e&&r===0?Ky(r)?r:e:r<e?r:e;for(i=Bvr,a=0;a<t;a++){if(n=arguments[a],xs(n)||n===ra)return n;(n<i||n===i&&n===0&&Ky(n))&&(i=n)}return i}xy.exports=jvr});var th=u((gGr,eh)=>{"use strict";var Vvr=rh();eh.exports=Vvr});var nh=u((mGr,ih)=>{"use strict";var Gvr=10.900511;ih.exports=Gvr});var ro=u((qGr,ah)=>{"use strict";var Uvr=2.718281828459045;ah.exports=Uvr});var oh=u((yGr,sh)=>{"use strict";var Wvr=By(),Hvr=Bi(),kvr=jt(),Dvr=Ut(),Xvr=G(),Jvr=Z(),Re=sr(),Vi=x(),eo=Ks(),to=th(),uh=B(),ea=Zn(),Gi=ks(),io=nh(),zvr=ro();function Yvr(r,e){var t,i,n,a,s,o,v;return n=r+io-.5,v=(e-r-io+.5)/n,r<1?e<=Gi?Re(r*uh(e)-e-Hvr(r)):Vi(e,r)*Re(-e)/kvr(r):(Jvr(v*v*r)<=100&&r>150?(t=r*(Dvr(v)-v)+e*(.5-io)/n,t=Re(t)):(a=r*uh(e/n),s=r-e,to(a,s)<=Gi||eo(a,s)>=ea?(i=s/r,to(a,s)/2>Gi&&eo(a,s)/2<ea?(o=Vi(e/n,r/2)*Re(s/2),t=o*o):to(a,s)/4>Gi&&eo(a,s)/4<ea&&e>r?(o=Vi(e/n,r/4)*Re(s/4),t=o*o,t*=t):i>Gi&&i<ea?t=Vi(e*Re(i)/n,r):t=Re(a+s)):t=Vi(e/n,r)*Re(s)),t*=Xvr(n/zvr)/Wvr(r),t)}sh.exports=Yvr});var fh=u((hGr,vh)=>{"use strict";var Zvr=.34657359027997264;vh.exports=Zvr});var ch=u((dGr,lh)=>{"use strict";function Qvr(r){return r===0?-.03333333333333313:-.03333333333333313+r*(.0015873015872548146+r*(-793650757867488e-19+r*(4008217827329362e-21+r*-20109921818362437e-23)))}lh.exports=Qvr});var qh=u((wGr,mh)=>{"use strict";var $vr=b(),no=vr(),ta=Ct(),ph=M(),Kvr=z(),xvr=Se(),r2r=fh(),e2r=ch(),t2r=709.782712893384,ao=.6931471803691238,uo=19082149292705877e-26,gh=1.4426950408889634,i2r=38.816242111356935,n2r=1.0397207708399179;function a2r(r){var e,t,i,n,a,s,o,v,f,l,c,p;if(r===ph||$vr(r))return r;if(r===Kvr)return-1;if(r===0)return r;if(r<0?(t=!0,o=-r):(t=!1,o=r),o>=i2r){if(t)return-1;if(o>=t2r)return ph}if(a=no(o)|0,o>r2r)o<n2r?t?(i=r+ao,n=-uo,p=-1):(i=r-ao,n=uo,p=1):(t?p=gh*r-.5:p=gh*r+.5,p|=0,l=p,i=r-l*ao,n=l*uo),r=i-n,f=i-r-n;else{if(a<1016070144)return r;p=0}return e=.5*r,v=r*e,s=1+v*e2r(v),l=3-s*e,c=v*((s-l)/(6-r*l)),p===0?r-(r*c-v):(c=r*(c-f)-f,c-=v,p===-1?.5*(r-c)-.5:p===1?r<-.25?-2*(c-(r+.5)):1+2*(r-c):p<=-2||p>56?(o=1-(c-r),i=no(o)+(p<<20)|0,o=ta(o,i),o-1):(l=1,p<20?(i=1072693248-(2097152>>p)|0,l=ta(l,i),o=l-(c-r)):(i=xvr-p<<20|0,l=ta(l,i),o=r-(c+l),o+=1),i=no(o)+(p<<20)|0,ta(o,i)))}mh.exports=a2r});var so=u((bGr,yh)=>{"use strict";var u2r=qh();yh.exports=u2r});var bh=u((EGr,wh)=>{"use strict";var hh=b(),dh=Z(),s2r=so(),o2r=B(),v2r=x(),f2r=In();function l2r(r,e){var t;if(hh(r)||hh(e))return NaN;if(e===0)return 0;if(r===0)return-1;if(r<0&&e%2===0&&(r=-r),r>0){if((dh(e*(r-1))<.5||dh(e)<.2)&&(t=o2r(r)*e,t<.5))return s2r(t)}else if(f2r(e)!==e)return NaN;return v2r(r,e)-1}wh.exports=l2r});var Nh=u((NGr,Eh)=>{"use strict";var c2r=bh();Eh.exports=c2r});var Oh=u((AGr,Ah)=>{"use strict";function p2r(r){var e,t,i;return r===0?-.01803556856784494:(r<0?e=-r:e=r,e<=1?(t=-.01803556856784494+r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(-.0002594535632054381+r*(-.0005410098692152044+r*(-3245886498259485e-20+r*0)))))),i=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+r*-22335276320861708e-23))))))):(r=1/r,t=0+r*(-3245886498259485e-20+r*(-.0005410098692152044+r*(-.0002594535632054381+r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+r*-.01803556856784494)))))),i=-22335276320861708e-23+r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+r*1))))))),t/i)}Ah.exports=p2r});var Th=u((OGr,Sh)=>{"use strict";function g2r(r){var e,t,i;return r===0?.04906224540690395:(r<0?e=-r:e=r,e<=1?(t=.04906224540690395+r*(-.09691175301595212+r*(-.4149833583594954+r*(-.4065671242119384+r*(-.1584135863906922+r*(-.024014982064857155+r*-.0010034668769627955))))),i=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+r*.001957681026011072)))))):(r=1/r,t=-.0010034668769627955+r*(-.024014982064857155+r*(-.1584135863906922+r*(-.4065671242119384+r*(-.4149833583594954+r*(-.09691175301595212+r*.04906224540690395))))),i=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+r*1)))))),t/i)}Sh.exports=g2r});var Ih=u((SGr,Lh)=>{"use strict";function m2r(r){var e,t,i;return r===0?-.029232972183027003:(r<0?e=-r:e=r,e<=1?(t=-.029232972183027003+r*(.14421626775719232+r*(-.14244039073863127+r*(.05428096940550536+r*(-.008505359768683364+r*(.0004311713426792973+r*0))))),i=1+r*(-1.5016935605448505+r*(.846973248876495+r*(-.22009515181499575+r*(.02558279715597587+r*(-.0010066679553914337+r*-8271935218912905e-22)))))):(r=1/r,t=0+r*(.0004311713426792973+r*(-.008505359768683364+r*(.05428096940550536+r*(-.14244039073863127+r*(.14421626775719232+r*-.029232972183027003))))),i=-8271935218912905e-22+r*(-.0010066679553914337+r*(.02558279715597587+r*(-.22009515181499575+r*(.846973248876495+r*(-1.5016935605448505+r*1)))))),t/i)}Lh.exports=m2r});var _h=u((TGr,Ph)=>{"use strict";var oo=B(),q2r=Gt(),y2r=Oh(),h2r=Th(),d2r=Ih(),w2r=.15896368026733398,b2r=.5281534194946289,E2r=.45201730728149414;function N2r(r,e,t){var i,n,a,s;if(r<q2r)return-oo(r);if(e===0||t===0)return 0;if(n=0,r>2){if(r>=3){do r-=1,t-=1,n+=oo(r);while(r>=3);t=r-2}return a=t*(r+1),s=y2r(t),n+=a*w2r+a*s,n}return r<1&&(n+=-oo(r),t=e,e=r,r+=1),r<=1.5?(a=h2r(e),i=e*t,n+=i*b2r+i*a,n):(a=t*e,s=d2r(-t),n+=a*E2r+a*s,n)}Ph.exports=N2r});var Bh=u((LGr,Ch)=>{"use strict";var Rh=jt(),Fh=so(),A2r=Ut(),O2r=b(),Mh=_h();function S2r(r){return O2r(r)?NaN:r<0?r<-.5?Rh(1+r)-1:Fh(-A2r(r)+Mh(r+2,r+1,r)):r<2?Fh(Mh(r+1,r,r-1)):Rh(1+r)-1}Ch.exports=S2r});var Vh=u((IGr,jh)=>{"use strict";var T2r=Bh();jh.exports=T2r});var Uh=u((PGr,Gh)=>{"use strict";function L2r(r,e){var t,i,n,a;return t=-e,e=-e,i=r+1,n=1,s;function s(){return a=t/i,t*=e,n+=1,t/=n,i+=1,a}}Gh.exports=L2r});var Hh=u((_Gr,Wh)=>{"use strict";var I2r=Nh(),P2r=Ys(),_2r=Vh(),R2r=Uh();function F2r(r,e,t){var i,n,a,s,o;return n=_2r(r),a=(n+1)/r,s=I2r(e,r),n-=s,n/=r,o=R2r(r,e),s+=1,i=t?a:0,n=-s*P2r(o,{initialValue:(i-n)/s}),t&&(n=-n),[n,a]}Wh.exports=F2r});var vo=u((RGr,kh)=>{"use strict";var M2r=11754943508222875e-54;kh.exports=M2r});var Xh=u((FGr,Dh)=>{"use strict";var ia=Z(),Wr=vo(),C2r=Gt(),B2r=1e6;function j2r(r,e,t){var i,n,a,s,o,v,f;if(i=typeof r.next=="function",f=i?r.next().value:r(),s=f[1],a=f[0],s===0&&(s=Wr),o=s,v=0,i===!0)do f=r.next().value,f&&(v=f[1]+f[0]*v,v===0&&(v=Wr),o=f[1]+f[0]/o,o===0&&(o=Wr),v=1/v,n=o*v,s*=n);while(ia(n-1)>e&&--t);else do f=r(),f&&(v=f[1]+f[0]*v,v===0&&(v=Wr),o=f[1]+f[0]/o,o===0&&(o=Wr),v=1/v,n=o*v,s*=n);while(f&&ia(n-1)>e&&--t);return a/s}function V2r(r,e,t){var i,n,a,s,o,v;if(i=typeof r.next=="function",v=i?r.next().value:r(),a=v[1],a===0&&(a=Wr),s=a,o=0,i===!0)do v=r.next().value,v&&(o=v[1]+v[0]*o,o===0&&(o=Wr),s=v[1]+v[0]/s,s===0&&(s=Wr),o=1/o,n=s*o,a*=n);while(v&&ia(n-1)>e&&--t);else do v=r(),v&&(o=v[1]+v[0]*o,o===0&&(o=Wr),s=v[1]+v[0]/s,s===0&&(s=Wr),o=1/o,n=s*o,a*=n);while(v&&ia(n-1)>e&&--t);return a}function G2r(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),t=i.maxIter||B2r,n=i.tolerance||C2r,i.keep?V2r(r,n,t):j2r(r,n,t)}Dh.exports=G2r});var Yh=u((MGr,zh)=>{"use strict";var Jh=Z(),U2r=Gt(),Wt=vo(),W2r=1e6;function H2r(r,e,t){var i,n,a,s,o,v;v=r(),o=v[1],n=v[0],o===0&&(o=Wt),a=o,s=0;do v=r(),v&&(s=v[1]+v[0]*s,s===0&&(s=Wt),a=v[1]+v[0]/a,a===0&&(a=Wt),s=1/s,i=a*s,o*=i);while(v&&Jh(i-1)>e&&--t);return n/o}function k2r(r,e,t){var i,n,a,s,o;o=r(),s=o[1],s===0&&(s=Wt),n=s,a=0;do o=r(),o&&(a=o[1]+o[0]*a,a===0&&(a=Wt),n=o[1]+o[0]/n,n===0&&(n=Wt),a=1/a,i=n*a,s*=i);while(o&&Jh(i-1)>e&&--t);return s}function D2r(r,e){var t,i,n;return i={},arguments.length>1&&(i=e),n=i.tolerance||U2r,t=i.maxIter||W2r,i.keep?k2r(r,n,t):H2r(r,n,t)}zh.exports=D2r});var Qh=u((CGr,Zh)=>{"use strict";var X2r=Js(),J2r=Xh(),z2r=Yh(),fo;X2r()?fo=J2r:fo=z2r;Zh.exports=fo});var Kh=u((BGr,$h)=>{"use strict";function Y2r(r,e){var t=e-r+1,i=r,n=0;return a;function a(){return n+=1,t+=2,[n*(i-n),t]}}$h.exports=Y2r});var rd=u((jGr,xh)=>{"use strict";var Z2r=Qh(),Q2r=Kh();function $2r(r,e){var t=Q2r(r,e);return 1/(e-r+1+Z2r(t))}xh.exports=$2r});var fd=u((VGr,vd)=>{"use strict";var K2r=Bi(),x2r=rr(),Ui=jt(),ed=Z(),rfr=sr(),td=x(),Cr=B(),efr=Ws(),id=vq(),tfr=Ms(),nd=Zn(),ifr=M(),nfr=cq(),afr=Bq(),ad=Wq(),ufr=gy(),lo=Py(),ud=oh(),sfr=Hh(),sd=rd(),ofr=170;function od(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,E;if(r<0||e<=0)return NaN;if(a=t===void 0?!0:t,c=i,p=0,e>=ofr&&!a)return c&&e*4<r?(p=e*Cr(r)-r,p+=Cr(sd(e,r))):!c&&e>4*r?(p=e*Cr(r)-r,o=0,p+=Cr(lo(e,r,o)/e)):(p=od(e,r,!0,c),p===0?c?(p=1+1/(12*e)+1/(288*e*e),p=Cr(p)-e+(e-.5)*Cr(e),p+=Cr(tfr)):(p=e*Cr(r)-r,o=0,p+=Cr(lo(e,r,o)/e)):p=Cr(p)+K2r(e)),p>nd?ifr:rfr(p);switch(l=e<30&&e<=r+1&&r<nd,l?(h=x2r(e),q=h===e,v=q?!1:ed(h-e)===.5):q=v=!1,q&&r>.6?(c=!c,s=0):v&&r>.2?(c=!c,s=1):r<efr&&e>1?s=6:r<.5?-.4/Cr(r)<e?s=2:s=3:r<1.1?r*.75<e?s=2:s=3:(f=!1,a&&e>20&&(y=ed((r-e)/e),e>200?20/e>y*y&&(f=!0):y<.4&&(f=!0)),f?s=5:r-1/(3*r)<e?s=2:(s=4,c=!c)),s){case 0:p=nfr(e,r),a===!1&&(p*=Ui(e));break;case 1:p=afr(e,r),a===!1&&(p*=Ui(e));break;case 2:p=a?ud(e,r):ad(e,r),p!==0&&(o=0,n=!1,c&&(o=a?1:Ui(e),a||p>=1||id*p>o?(o/=p,a||e<1||id/e>o?(o*=-e,n=!0):o=0):o=0)),p*=lo(e,r,o)/e,n&&(c=!1,p=-p);break;case 3:c=!c,g=sfr(e,r,c),p=g[0],E=g[1],c=!1,a&&(p/=E);break;case 4:p=a?ud(e,r):ad(e,r),p!==0&&(p*=sd(e,r));break;case 5:p=ufr(e,r),r>=e&&(c=!c);break;case 6:p=a?td(r,e)/Ui(e+1):td(r,e)/e,p*=1-e*r/(e+1);break}return a&&p>1&&(p=1),c&&(m=a?1:Ui(e),p=m-p),p}vd.exports=od});var co=u((GGr,ld)=>{"use strict";var vfr=fd();ld.exports=vfr});var pd=u((UGr,cd)=>{"use strict";var ffr=co(),po=b(),lfr=M();function cfr(r,e,t){return po(r)||po(e)||po(t)||e<0||t<=0?NaN:e===0?r<0?0:1:r<=0?0:r===lfr?1:ffr(r*t,e)}cd.exports=cfr});var md=u((WGr,gd)=>{"use strict";function pfr(r){return e;function e(){return r}}gd.exports=pfr});var I=u((HGr,qd)=>{"use strict";var gfr=md();qd.exports=gfr});var dd=u((kGr,hd)=>{"use strict";var yd=b();function mfr(r,e){return yd(r)||yd(e)?NaN:r<e?0:1}hd.exports=mfr});var Ed=u((DGr,bd)=>{"use strict";var qfr=I(),wd=b();function yfr(r){if(wd(r))return qfr(NaN);return e;function e(t){return wd(t)?NaN:t<r?0:1}}bd.exports=yfr});var go=u((XGr,Ad)=>{"use strict";var hfr=w(),Nd=dd(),dfr=Ed();hfr(Nd,"factory",dfr);Ad.exports=Nd});var Td=u((JGr,Sd)=>{"use strict";var wfr=I(),bfr=go().factory,Efr=co(),Od=b(),Nfr=M();function Afr(r,e){if(Od(r)||Od(e)||r<0||e<=0)return wfr(NaN);if(r===0)return bfr(0);return t;function t(i){return i<=0?0:i===Nfr?1:Efr(i*e,r)}}Sd.exports=Afr});var mo=u((zGr,Id)=>{"use strict";var Ofr=w(),Ld=pd(),Sfr=Td();Ofr(Ld,"factory",Sfr);Id.exports=Ld});var _d=u((YGr,Pd)=>{"use strict";var Tfr=mo();function Lfr(r,e){return Tfr(r,e/2,.5)}Pd.exports=Lfr});var Fd=u((ZGr,Rd)=>{"use strict";var Ifr=mo().factory;function Pfr(r){return Ifr(r/2,.5)}Rd.exports=Pfr});var Bd=u((QGr,Cd)=>{"use strict";var _fr=w(),Md=_d(),Rfr=Fd();_fr(Md,"factory",Rfr);Cd.exports=Md});var Gd=u(($Gr,Vd)=>{"use strict";var Ffr=T(),Mfr=A(),Cfr=pn(),jd=["values","indices","*"];function Bfr(r,e){return Ffr(e)?Mfr(e,"returns")&&(r.returns=e.returns,Cfr(jd,r.returns)===-1)?new TypeError('invalid option. `returns` option must be one of the following: "'+jd.join('", "')+'". Option: `'+r.returns+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}Vd.exports=Bfr});var Wd=u((KGr,Ud)=>{"use strict";var jfr=A();function Vfr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),jfr(t,n)?t[n].push(r[a]):t[n]=[r[a]];return t}Ud.exports=Vfr});var kd=u((xGr,Hd)=>{"use strict";var Gfr=A();function Ufr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),Gfr(t,n)?t[n].push(a):t[n]=[a];return t}Hd.exports=Ufr});var Xd=u((rUr,Dd)=>{"use strict";var Wfr=A();function Hfr(r,e){var t,i,n,a;for(i=r.length,t={},a=0;a<i;a++)n=e[a].toString(),Wfr(t,n)?t[n].push([a,r[a]]):t[n]=[[a,r[a]]];return t}Dd.exports=Hfr});var Yd=u((eUr,zd)=>{"use strict";var Jd=Fr(),kfr=Gd(),Dfr=Wd(),Xfr=kd(),Jfr=Xd();function zfr(r,e,t){var i,n,a;if(!Jd(r))throw new TypeError("invalid argument. First argument must be a collection. Value: `"+r+"`.");if(i={returns:"values"},arguments.length===2)a=e;else{if(n=kfr(i,e),n)throw n;a=t}if(!Jd(a))throw new TypeError("invalid argument. Last argument must be a collection. Value: `"+a+"`.");if(r.length!==a.length)throw new RangeError("invalid arguments. First and last arguments must be the same length.");return i.returns==="values"?Dfr(r,a):i.returns==="indices"?Xfr(r,a):Jfr(r,a)}zd.exports=zfr});var Qd=u((tUr,Zd)=>{"use strict";var Yfr=Yd();Zd.exports=Yfr});var Kd=u((iUr,$d)=>{"use strict";function Zfr(r){var e,t,i,n,a,s;for(e=0,t=0,n=0,i=r.length,a=0;a<i;a++)s=r[a],e=s-t,t+=e/(a+1),n+=e*(s-t);return n/(a-1)}$d.exports=Zfr});var ew=u((nUr,rw)=>{"use strict";var Qfr=lr(),$fr=j().isPrimitive,Kfr=T(),xfr=tr(),xd=A();function r3r(r,e){return Kfr(e)?xd(e,"alpha")&&(r.alpha=e.alpha,!$fr(r.alpha)||xfr(r.alpha))?new TypeError("invalid option. `alpha` option must be a number primitive. Option: `"+r.alpha+"`."):xd(e,"groups")&&(r.groups=e.groups,!Qfr(r.groups))?new TypeError("invalid option. `groups` option must be an array. Option: `"+r.groups+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}rw.exports=r3r});var qo=u((aUr,tw)=>{"use strict";var e3r=Rr().isPrimitive;function t3r(r){return e3r(r)&&r>0}tw.exports=t3r});var yo=u((uUr,iw)=>{"use strict";var i3r=Rr().isObject;function n3r(r){return i3r(r)&&r.valueOf()>0}iw.exports=n3r});var aw=u((sUr,nw)=>{"use strict";var a3r=qo(),u3r=yo();function s3r(r){return a3r(r)||u3r(r)}nw.exports=s3r});var Zr=u((oUr,sw)=>{"use strict";var uw=w(),ho=aw(),o3r=qo(),v3r=yo();uw(ho,"isPrimitive",o3r);uw(ho,"isObject",v3r);sw.exports=ho});var na=u((vUr,ow)=>{"use strict";var f3r=9007199254740991;ow.exports=f3r});var fw=u((fUr,vw)=>{"use strict";var l3r=308;vw.exports=l3r});var cw=u((lUr,lw)=>{"use strict";var c3r=-308;lw.exports=c3r});var gw=u((cUr,pw)=>{"use strict";var p3r=-324;pw.exports=p3r});var bw=u((pUr,ww)=>{"use strict";var mw=b(),aa=Oe(),qw=x(),g3r=Z(),yw=Ls(),m3r=na(),hw=fw(),q3r=cw(),y3r=gw(),h3r=m3r+1,dw=1e308;function d3r(r,e){var t,i;return mw(r)||mw(e)||aa(e)?NaN:aa(r)||r===0||e<y3r||g3r(r)>h3r&&e<=0?r:e>hw?0*r:e<q3r?(t=qw(10,-(e+hw)),i=r*dw*t,aa(i)?r:yw(i)/dw/t):(t=qw(10,-e),i=r*t,aa(i)?r:yw(i)/t)}ww.exports=d3r});var Nw=u((gUr,Ew)=>{"use strict";var w3r=bw();Ew.exports=w3r});var Sw=u((mUr,Ow)=>{"use strict";var b3r=Zr(),E3r=T(),N3r=ar().isPrimitive,Aw=A(),wo=Nw();function A3r(r){var e,t,i;if(t=4,e=!0,arguments.length>0){if(!E3r(r))throw new TypeError("invalid argument. First argument must be an options object. Value: `"+r+"`.");if(Aw(r,"digits")){if(!b3r(r.digits))throw new TypeError("invalid option. `digits` option must be a positive integer. Option: `"+r.digits+"`.");t=r.digits}if(Aw(r,"decision")){if(!N3r(r.decision))throw new TypeError("invalid option. `decision` option must be a boolean primitive. Option: `"+r.decision+"`.");e=r.decision}}return i="",i+=this.method,i+=`

`,i+="Null hypothesis: The variances in all groups are the same.",i+=`

`,i+="    pValue: "+wo(this.pValue,-t)+`
`,i+="    statistic: "+wo(this.statistic,-t)+`
`,i+="    df: "+wo(this.df,-t),i+=`

`,e&&(i+="Test Decision: ",this.rejected?i+="Reject null in favor of alternative at "+this.alpha*100+"% significance level":i+="Fail to reject null in favor of alternative at "+this.alpha*100+"% significance level",i+=`
`),i}Ow.exports=A3r});var Iw=u((qUr,Lw)=>{"use strict";var O3r=Fr(),S3r=T(),gt=y5(),T3r=Ei(),L3r=Bd(),I3r=Qd(),Tw=B(),P3r=Kd(),_3r=ew(),R3r=Sw();function F3r(){var r,e,t,i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N;if(v=[],e=arguments.length,f={},S3r(arguments[e-1])&&(r=arguments[e-1],e-=1,q=_3r(f,r),q))throw q;if(f.groups){if(n=I3r(arguments[0],f.groups),i=T3r(n),e=i.length,e<2)throw new Error("invalid number of groups. `groups` array must contain at least two unique elements. Value: `"+i+"`.");for(N=0;N<e;N++)v.push(n[i[N]])}else for(N=0;N<e;N++)v.push(arguments[N]);for(s=0,t=0,o=0,y=0,h=new Array(e),E=h.slice(),N=0;N<e;N++){if(p=v[N],!O3r(p))throw new TypeError("invalid argument. Must provide array-like arguments. Value: `"+p+"`.");if(p.length===0)throw new Error("invalid argument. Supplied arrays cannot be empty. Value: `"+p+"`.");h[N]=p.length-1,s+=h[N],t+=1/h[N],E[N]=P3r(p),o+=h[N]*E[N],y+=h[N]*Tw(E[N])}if(o/=s,f.alpha===void 0?a=.05:a=f.alpha,a<0||a>1)throw new RangeError("invalid argument. Option `alpha` must be a number in the range 0 to 1. Value: `"+a+"`.");return c=s*Tw(o)-y,c/=1+(t-1/s)/(3*(e-1)),g=e-1,l=1-L3r(c,g),m={},gt(m,"rejected",l<=a),gt(m,"alpha",a),gt(m,"pValue",l),gt(m,"statistic",c),gt(m,"df",g),gt(m,"method","Bartlett's test of equal variances"),gt(m,"print",R3r),m}Lw.exports=F3r});var _w=u((yUr,Pw)=>{"use strict";var M3r=Iw();Pw.exports=M3r});var Fw=u((hUr,Rw)=>{"use strict";function C3r(r){var e,t,i,n,a,s,o,v,f,l,c;if(v=r.length,t=[],v===0)return t;if(n=r[0],f=n.length,v===1){for(l=0;l<f;l++)t.push(n[l]);return t}for(e=[f],l=1;l<v;l++)e.push(r[l].length),e[l]>f&&(f=e[l]);for(l=0;l<f;l++)t.push(0);for(l=f-1;l>=0;){for(a=e[0]-f+l,a>=0?i=n[a]:i=1,c=1;c<v;c++){if(s=e[c]-f+l,s>=0?o=r[c][s]:o=1,i===1){i=o;continue}if(!(o===1||i===o))return null}t[l]=i,l-=1}return t}Rw.exports=C3r});var Cw=u((dUr,Mw)=>{"use strict";var B3r=Fw();Mw.exports=B3r});var ua=u((wUr,Bw)=>{"use strict";function j3r(r){var e,t,i,n,a,s;if(t=r.length,t===1)return r[0];for(i=r[0].length,e=[],a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)e.push(n[s]);return e}Bw.exports=j3r});var Vw=u((bUr,jw)=>{"use strict";var V3r=j().isPrimitive,G3r=X().isPrimitive,U3r=ar().isPrimitive,W3r=lr(),H3r=Cw(),k3r=S(),D3r=ua(),X3r={number:V3r,string:G3r,boolean:U3r};function J3r(r,e,t){var i,n,a,s,o,v,f,l,c,p;if(r.length!==e.length||e.length!==t.length)throw new RangeError("invalid argument. Input arguments must have the same length.");for(a=[],n=[],p=0;p<r.length;p++)if(c=r[p],o=e[p],l=X3r[o],l(c))n.push([c]),a.push([1,1]);else if(W3r(c))n.push(D3r(c)),a.push([c.length,c[0].length]);else throw new TypeError(k3r("invalid argument. %s must be either a %s or a range of %ss. Value: %s.",t[p],o,o,String(c)));if(s=H3r(a),s===null)throw new Error("invalid argument. Input arguments are not broadcast compatible.");for(i=[],p=0;p<a.length;p++)f=a[p],v=[],f[0]===1?v.push(0):v.push(f[1]),f[1]===1?v.push(0):v.push(1),i.push(v);return[n,s,i]}jw.exports=J3r});var Uw=u((EUr,Gw)=>{"use strict";var bo=b(),z3r=_e();function Y3r(r,e,t,i,n){var a,s,o,v,f;if(r<=0)return i;if(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,a=e[s],i[o]=a,o+=n,f=1,bo(a)===!1)for(f;f<r;f++){if(s+=t,v=e[s],bo(v)){a=v;break}(v>a||v===a&&z3r(v))&&(a=v),i[o]=a,o+=n}if(bo(a))for(f;f<r;f++)i[o]=a,o+=n;return i}Gw.exports=Y3r});var Hw=u((NUr,Ww)=>{"use strict";var Eo=b(),Z3r=_e();function Q3r(r,e,t,i,n,a,s){var o,v,f,l,c;if(r<=0)return n;if(v=i,f=s,o=e[v],n[f]=o,f+=a,c=1,Eo(o)===!1)for(c;c<r;c++){if(v+=t,l=e[v],Eo(l)){o=l;break}(l>o||l===o&&Z3r(l))&&(o=l),n[f]=o,f+=a}if(Eo(o))for(c;c<r;c++)n[f]=o,f+=a;return n}Ww.exports=Q3r});var Xw=u((AUr,Dw)=>{"use strict";var $3r=w(),kw=Uw(),K3r=Hw();$3r(kw,"ndarray",K3r);Dw.exports=kw});var zw=u((OUr,Jw)=>{"use strict";var x3r=Xw();Jw.exports=x3r});var Qw=u((SUr,Zw)=>{"use strict";var Yw=Os();function rlr(r,e,t){var i,n;if(e===1)return Yw(t,r);for(i=[],n=0;n<r;n++)i.push(Yw(t,e));return i}Zw.exports=rlr});var Kw=u((TUr,$w)=>{"use strict";function elr(r,e,t){var i,n;for(i=[],n=0;n<r;n++)i.push(e.call(t,n));return i}$w.exports=elr});var rb=u((LUr,xw)=>{"use strict";var tlr=Kw();xw.exports=tlr});var ib=u((IUr,tb)=>{"use strict";var eb=rb();function ilr(r,e,t){var i,n;if(e===1)return eb(r,t);for(i=[],n=0;n<r;n++)i.push(eb(e,t));return i}tb.exports=ilr});var No=u((PUr,nb)=>{"use strict";var nlr=j().isPrimitive;function alr(r){return nlr(r)&&r>0}nb.exports=alr});var Ao=u((_Ur,ab)=>{"use strict";var ulr=j().isObject;function slr(r){return ulr(r)&&r.valueOf()>0}ab.exports=slr});var sb=u((RUr,ub)=>{"use strict";var olr=No(),vlr=Ao();function flr(r){return olr(r)||vlr(r)}ub.exports=flr});var W=u((FUr,vb)=>{"use strict";var ob=w(),Oo=sb(),llr=No(),clr=Ao();ob(Oo,"isPrimitive",llr);ob(Oo,"isObject",clr);vb.exports=Oo});var lb=u((MUr,fb)=>{"use strict";var plr=L();function glr(r){var e=typeof r;return r!==null&&(e==="object"||e==="function")&&plr(r.next)}fb.exports=glr});var pb=u((CUr,cb)=>{"use strict";var mlr=lb();cb.exports=mlr});var mb=u((BUr,gb)=>{"use strict";function qlr(r,e){return r[e]}gb.exports=qlr});var yb=u((jUr,qb)=>{"use strict";function ylr(r,e){return r.get(e)}qb.exports=ylr});var db=u((VUr,hb)=>{"use strict";function hlr(r,e,t){r[e]=t}hb.exports=hlr});var bb=u((GUr,wb)=>{"use strict";function dlr(r,e,t){r.set(t,e)}wb.exports=dlr});var Nb=u((UUr,Eb)=>{"use strict";var wlr=mb(),blr=yb(),Elr=db(),Nlr=bb();function Alr(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?blr:wlr,setter:e?Nlr:Elr}}Eb.exports=Alr});var mt=u((WUr,Ab)=>{"use strict";var Olr=Nb();Ab.exports=Olr});var Tb=u((HUr,Sb)=>{"use strict";var Ob=L(),Slr=Fr(),Tlr=pb(),Llr=mt();function Ilr(){var r,e,t,i,n,a,s,o;if(r=arguments[0],arguments.length>1)if(Slr(arguments[1])){if(i=arguments[1],arguments.length>2){if(t=arguments[2],!Ob(t))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+t+"`.");e=arguments[3]}}else{if(t=arguments[1],!Ob(t))throw new TypeError("invalid argument. Callback argument must be a function. Value: `"+t+"`.");e=arguments[2]}if(!Tlr(r))throw new TypeError("invalid argument. Iterator argument must be an iterator protocol-compliant object. Value: `"+r+"`.");if(s=-1,i===void 0){if(i=[],t){for(;s+=1,o=r.next(),!o.done;)i.push(t.call(e,o.value,s));return i}for(;o=r.next(),!o.done;)i.push(o.value);return i}if(n=i.length,a=Llr(i).setter,t){for(;s<n-1&&(s+=1,o=r.next(),!o.done);)a(i,s,t.call(e,o.value,s));return i}for(;s<n-1&&(s+=1,o=r.next(),!o.done);)a(i,s,o.value);return i}Sb.exports=Ilr});var Ib=u((kUr,Lb)=>{"use strict";var Plr=Tb();Lb.exports=Plr});var _b=u((DUr,Pb)=>{"use strict";var _lr=A();function Rlr(){return typeof Symbol=="function"&&typeof Symbol("foo")=="symbol"&&_lr(Symbol,"iterator")&&typeof Symbol.iterator=="symbol"}Pb.exports=Rlr});var sa=u((XUr,Rb)=>{"use strict";var Flr=_b();Rb.exports=Flr});var Mb=u((JUr,Fb)=>{"use strict";var Mlr=sa(),Clr=Mlr()?Symbol.iterator:null;Fb.exports=Clr});var oa=u((zUr,Cb)=>{"use strict";var Blr=Mb();Cb.exports=Blr});var jb=u((YUr,Bb)=>{"use strict";function jlr(r){return r===0?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+r*-18558637485527546e-21))))}Bb.exports=jlr});var Gb=u((ZUr,Vb)=>{"use strict";function Vlr(r){return r===0?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+r*2590730518636337e-20))))}Vb.exports=Vlr});var Hb=u((QUr,Wb)=>{"use strict";var Glr=vr(),Ub=pt(),Ulr=jb(),Wlr=Gb(),Hlr=.7853981633974483,klr=3061616997868383e-32,Dlr=.3333333333333341,Xlr=2147483647;function Jlr(r,e,t){var i,n,a,s,o,v,f,l,c;return i=Glr(r),n=i&Xlr|0,n>=1072010280&&(r<0&&(r=-r,e=-e),c=Hlr-r,l=klr-e,r=c+l,e=0),c=r*r,l=c*c,s=Ulr(l),f=c*Wlr(l),o=c*r,s=e+c*(o*(s+f)+e),s+=Dlr*o,l=r+s,n>=1072010280?(f=t,(1-(i>>30&2))*(f-2*(r-(l*l/(l+f)-s)))):t===1?l:(c=l,Ub(c,0),f=s-(c-r),a=-1/l,v=a,Ub(v,0),o=1+v*c,v+a*(o+v*f))}Wb.exports=Jlr});var Db=u(($Ur,kb)=>{"use strict";var zlr=Hb();kb.exports=zlr});var zb=u((KUr,Jb)=>{"use strict";var Ylr=vr(),Xb=Db(),Zlr=Pi(),So=[0,0],Qlr=2147483647,$lr=1072243195,Klr=2146435072,xlr=1044381696;function r6r(r){var e,t;return e=Ylr(r),e&=Qlr,e<=$lr?e<xlr?r:Xb(r,0,1):e>=Klr?NaN:(t=Zlr(r,So),Xb(So[0],So[1],1-((t&1)<<1)))}Jb.exports=r6r});var To=u((xUr,Yb)=>{"use strict";var e6r=zb();Yb.exports=e6r});var va=u((rWr,Zb)=>{"use strict";var t6r=1.5707963267948966;Zb.exports=t6r});var fa=u((eWr,Qb)=>{"use strict";var i6r=.7853981633974483;Qb.exports=i6r});var Kb=u((tWr,$b)=>{"use strict";function n6r(r){return r===0?-64.85021904942025:-64.85021904942025+r*(-122.88666844901361+r*(-75.00855792314705+r*(-16.157537187333652+r*-.8750608600031904)))}$b.exports=n6r});var rE=u((iWr,xb)=>{"use strict";function a6r(r){return r===0?194.5506571482614:194.5506571482614+r*(485.3903996359137+r*(432.88106049129027+r*(165.02700983169885+r*(24.858464901423062+r*1))))}xb.exports=a6r});var iE=u((nWr,tE)=>{"use strict";var u6r=b(),s6r=M(),Lo=va(),o6r=fa(),v6r=z(),f6r=Kb(),l6r=rE(),eE=6123233995736766e-32,c6r=2.414213562373095;function p6r(r){var e,t,i,n;return u6r(r)||r===0?r:r===s6r?Lo:r===v6r?-Lo:(r<0&&(t=!0,r=-r),e=0,r>c6r?(i=Lo,e=1,r=-(1/r)):r<=.66?i=0:(i=o6r,e=2,r=(r-1)/(r+1)),n=r*r,n=n*f6r(n)/l6r(n),n=r*n+r,e===2?n+=.5*eE:e===1&&(n+=eE),i+=n,t?-i:i)}tE.exports=p6r});var la=u((aWr,nE)=>{"use strict";var g6r=iE();nE.exports=g6r});var Io=u((uWr,aE)=>{"use strict";var m6r=j().isPrimitive;function q6r(r){return m6r(r)&&r>=0}aE.exports=q6r});var Po=u((sWr,uE)=>{"use strict";var y6r=j().isObject;function h6r(r){return y6r(r)&&r.valueOf()>=0}uE.exports=h6r});var oE=u((oWr,sE)=>{"use strict";var d6r=Io(),w6r=Po();function b6r(r){return d6r(r)||w6r(r)}sE.exports=b6r});var Ro=u((vWr,fE)=>{"use strict";var vE=w(),_o=oE(),E6r=Io(),N6r=Po();vE(_o,"isPrimitive",E6r);vE(_o,"isObject",N6r);fE.exports=_o});var cE=u((fWr,lE)=>{"use strict";var A6r=T(),ca=A(),O6r=Rr().isPrimitive,S6r=Zr().isPrimitive,T6r=Ae().isPrimitive,L6r=Ro().isPrimitive;function I6r(r,e){return A6r(e)?ca(e,"period")&&(r.period=e.period,!S6r(e.period))?new TypeError("invalid option. `period` option must be an positive integer. Option: `"+e.period+"`."):ca(e,"amplitude")&&(r.amplitude=e.amplitude,!L6r(e.amplitude))?new TypeError("invalid option. `amplitude` option must be a nonnegative number. Option: `"+e.amplitude+"`."):ca(e,"offset")&&(r.offset=e.offset,!O6r(e.offset))?new TypeError("invalid option. `offset` option must be an integer. Option: `"+e.offset+"`."):ca(e,"iter")&&(r.iter=e.iter,!T6r(e.iter))?new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+e.iter+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}lE.exports=I6r});var qE=u((lWr,mE)=>{"use strict";var Fo=w(),pE=oa(),P6r=To(),_6r=la(),R6r=va(),F6r=Lr(),M6r=cE();function gE(r){var e,t,i,n,a,s,o,v;if(e={period:10,amplitude:1,offset:0,iter:1e308},arguments.length&&(n=M6r(e,r),n))throw n;return a=(e.period-e.offset)%e.period,a<0&&(a+=e.period),a-=1,s=F6r/e.period,o=e.amplitude/R6r,v=0,t={},Fo(t,"next",f),Fo(t,"return",l),pE&&Fo(t,pE,c),t;function f(){return v+=1,i||v>e.iter?{done:!0}:(a+=1,a%=e.period,{value:o*_6r(P6r(s*a)),done:!1})}function l(p){return i=!0,arguments.length?{value:p,done:!0}:{done:!0}}function c(){return gE(e)}}mE.exports=gE});var hE=u((cWr,yE)=>{"use strict";var C6r=qE();yE.exports=C6r});var wE=u((pWr,dE)=>{"use strict";function B6r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}dE.exports=B6r});var EE=u((gWr,bE)=>{"use strict";function j6r(){var r={};return r.type="Complex128",r.re=this.re,r.im=this.im,r}bE.exports=j6r});var SE=u((mWr,OE)=>{"use strict";var NE=j().isPrimitive,AE=Ee(),Wi=w(),V6r=wE(),G6r=EE();function qt(r,e){if(!(this instanceof qt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!NE(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!NE(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return AE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),AE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Wi(qt,"BYTES_PER_ELEMENT",8);Wi(qt.prototype,"BYTES_PER_ELEMENT",8);Wi(qt.prototype,"byteLength",16);Wi(qt.prototype,"toString",V6r);Wi(qt.prototype,"toJSON",G6r);OE.exports=qt});var Ht=u((qWr,TE)=>{"use strict";var U6r=SE();TE.exports=U6r});var IE=u((yWr,LE)=>{"use strict";var W6r=typeof Math.fround=="function"?Math.fround:null;LE.exports=W6r});var RE=u((hWr,_E)=>{"use strict";var H6r=Xr(),PE=new H6r(1);function k6r(r){return PE[0]=r,PE[0]}_E.exports=k6r});var CE=u((dWr,ME)=>{"use strict";var FE=IE(),D6r=RE(),Mo;typeof FE=="function"?Mo=FE:Mo=D6r;ME.exports=Mo});var jE=u((wWr,BE)=>{"use strict";function X6r(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i",r}BE.exports=X6r});var GE=u((bWr,VE)=>{"use strict";function J6r(){var r={};return r.type="Complex64",r.re=this.re,r.im=this.im,r}VE.exports=J6r});var DE=u((EWr,kE)=>{"use strict";var UE=j().isPrimitive,WE=Ee(),Hi=w(),HE=CE(),z6r=jE(),Y6r=GE();function yt(r,e){if(!(this instanceof yt))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!UE(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!UE(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return WE(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:HE(r)}),WE(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:HE(e)}),this}Hi(yt,"BYTES_PER_ELEMENT",4);Hi(yt.prototype,"BYTES_PER_ELEMENT",4);Hi(yt.prototype,"byteLength",8);Hi(yt.prototype,"toString",z6r);Hi(yt.prototype,"toJSON",Y6r);kE.exports=yt});var kt=u((NWr,XE)=>{"use strict";var Z6r=DE();XE.exports=Z6r});var zE=u((AWr,JE)=>{"use strict";var Q6r=Ht(),$6r=kt();function K6r(r){return r instanceof Q6r||r instanceof $6r?!0:typeof r=="object"&&r!==null&&typeof r.re=="number"&&typeof r.im=="number"}JE.exports=K6r});var Br=u((OWr,YE)=>{"use strict";var x6r=zE();YE.exports=x6r});var QE=u((SWr,ZE)=>{"use strict";var rcr={Complex64:"complex64",Complex128:"complex128"};ZE.exports=rcr});var KE=u((TWr,$E)=>{"use strict";var ecr=kt(),tcr=Ht(),icr=[ecr,tcr];$E.exports=icr});var rN=u((LWr,xE)=>{"use strict";var ncr=["complex64","complex128"];xE.exports=ncr});var iN=u((IWr,tN)=>{"use strict";var acr=Ne(),ucr=QE(),scr=KE(),eN=rN(),ocr=eN.length;function vcr(r){var e;for(e=0;e<ocr;e++)if(r instanceof scr[e])return eN[e];return ucr[acr(r)]||null}tN.exports=vcr});var Co=u((PWr,nN)=>{"use strict";var fcr=iN();nN.exports=fcr});var uN=u((_Wr,aN)=>{"use strict";var lcr=4294967295;aN.exports=lcr});var oN=u((RWr,sN)=>{"use strict";var ccr=Ar(),pcr=uN();function gcr(r){return typeof r=="object"&&r!==null&&typeof r.length=="number"&&ccr(r.length)&&r.length>=0&&r.length<=pcr}sN.exports=gcr});var ht=u((FWr,vN)=>{"use strict";var mcr=oN();vN.exports=mcr});var lN=u((MWr,fN)=>{"use strict";var qcr=K(),ycr=typeof ArrayBuffer=="function";function hcr(r){return ycr&&r instanceof ArrayBuffer||qcr(r)==="[object ArrayBuffer]"}fN.exports=hcr});var Bo=u((CWr,cN)=>{"use strict";var dcr=lN();cN.exports=dcr});var gN=u((BWr,pN)=>{"use strict";var wcr=Ee();function bcr(r,e,t){wcr(r,e,{configurable:!1,enumerable:!1,get:t})}pN.exports=bcr});var P=u((jWr,mN)=>{"use strict";var Ecr=gN();mN.exports=Ecr});var yN=u((VWr,qN)=>{"use strict";function Ncr(r){return r.re}qN.exports=Ncr});var Fe=u((GWr,hN)=>{"use strict";var Acr=yN();hN.exports=Acr});var wN=u((UWr,dN)=>{"use strict";function Ocr(r){return r.im}dN.exports=Ocr});var Me=u((WWr,bN)=>{"use strict";var Scr=wN();bN.exports=Scr});var NN=u((HWr,EN)=>{"use strict";var Tcr=Xr();function Lcr(r,e){return new Tcr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}EN.exports=Lcr});var Dt=u((kWr,AN)=>{"use strict";var Icr=NN();AN.exports=Icr});var SN=u((DWr,ON)=>{"use strict";var Pcr=cr();function _cr(r,e){return new Pcr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}ON.exports=_cr});var Xt=u((XWr,TN)=>{"use strict";var Rcr=SN();TN.exports=Rcr});var IN=u((JWr,LN)=>{"use strict";var Fcr=ht(),Mcr=Br(),Ccr=Fe(),Bcr=Me();function jcr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,Fcr(i)&&i.length>=2)e.push(i[0],i[1]);else if(Mcr(i))e.push(Ccr(i),Bcr(i));else return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");return e}LN.exports=jcr});var _N=u((zWr,PN)=>{"use strict";var Vcr=ht(),Gcr=Br(),Ucr=Fe(),Wcr=Me();function Hcr(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),Vcr(a)&&a.length>=2)i.push(a[0],a[1]);else if(Gcr(a))i.push(Ucr(a),Wcr(a));else return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+a+"`.");return i}PN.exports=Hcr});var FN=u((YWr,RN)=>{"use strict";var kcr=Br(),Dcr=Fe(),Xcr=Me();function Jcr(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!kcr(i))return null;r[a]=Dcr(i),r[a+1]=Xcr(i),a+=2}return r}RN.exports=Jcr});var HN=u((ZWr,WN)=>{"use strict";var ki=Ae().isPrimitive,MN=ht(),Vo=Fr(),CN=Bo(),BN=On(),zcr=lr(),dt=L(),Jt=Br(),pa=kn(),jo=Ar(),Ycr=sa(),zt=oa(),gr=w(),qa=P(),Ir=cr(),jN=Ht(),ga=Fe(),ma=Me(),Zcr=Dt(),Qcr=Xt(),$cr=mt(),VN=IN(),Kcr=_N(),xcr=FN(),Or=Ir.BYTES_PER_ELEMENT*2,GN=Ycr();function Yt(r){return r instanceof Q||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function UN(r){return r===Q||r.name==="Complex64Array"}function rpr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Or/2}function epr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Or}function Q(){var r,e,t,i;if(e=arguments.length,!(this instanceof Q))return e===0?new Q:e===1?new Q(arguments[0]):e===2?new Q(arguments[0],arguments[1]):new Q(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Ir(0);else if(e===1)if(ki(arguments[0]))t=new Ir(arguments[0]*2);else if(Vo(arguments[0]))if(t=arguments[0],i=t.length,i&&zcr(t)&&Jt(t[0])){if(t=xcr(new Ir(i*2),t),t===null){if(!pa(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Ir(arguments[0])}}else{if(rpr(t))t=Zcr(t,0);else if(epr(t))t=Qcr(t,0);else if(!pa(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Ir(t)}else if(CN(arguments[0])){if(t=arguments[0],!jo(t.byteLength/Or))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Or+". Byte length: `"+t.byteLength+"`.");t=new Ir(t)}else if(BN(arguments[0])){if(t=arguments[0],GN===!1)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!dt(t[zt]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(t=t[zt](),!dt(t.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(t=VN(t),t instanceof Error)throw t;t=new Ir(t)}else throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");else{if(t=arguments[0],!CN(t))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(r=arguments[1],!ki(r))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!jo(r/Or))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Or+". Value: `"+r+"`.");if(e===2){if(i=t.byteLength-r,!jo(i/Or))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Or+". View byte length: `"+i+"`.");t=new Ir(t,r)}else{if(i=arguments[2],!ki(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*Or>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*Or+"`.");t=new Ir(t,r,i*2)}}return gr(this,"_buffer",t),gr(this,"_length",t.length/2),this}gr(Q,"BYTES_PER_ELEMENT",Or);gr(Q,"name","Complex128Array");gr(Q,"from",function(e){var t,i,n,a,s,o,v,f,l,c,p;if(!dt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!UN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!dt(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");i>2&&(t=arguments[2])}if(Yt(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,e.get(c),c),Jt(l))s[p]=ga(l),s[p+1]=ma(l);else if(MN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(Vo(e)){if(n){for(v=e.length,o=$cr(e),c=0;c<v;c++)if(!Jt(o.getter(e,c))){f=!0;break}if(f){if(!pa(v))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+v+"`.");for(a=new this(v/2),s=a._buffer,c=0;c<v;c++)s[c]=n.call(t,o.getter(e,c),c);return a}for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,o.getter(e,c),c),Jt(l))s[p]=ga(l),s[p+1]=ma(l);else if(MN(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(BN(e)&&GN&&dt(e[zt])){if(s=e[zt](),!dt(s.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(n?o=Kcr(s,n,t):o=VN(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,c=0;c<v;c++)s[c]=o[c];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")});gr(Q,"of",function(){var e,t;if(!dt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!UN(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});qa(Q.prototype,"buffer",function(){return this._buffer.buffer});qa(Q.prototype,"byteLength",function(){return this._buffer.byteLength});qa(Q.prototype,"byteOffset",function(){return this._buffer.byteOffset});gr(Q.prototype,"BYTES_PER_ELEMENT",Q.BYTES_PER_ELEMENT);gr(Q.prototype,"copyWithin",function(e,t){if(!Yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});gr(Q.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!Yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},gr(i,"next",v),gr(i,"return",f),zt&&gr(i,zt,l),i;function v(){var c;return s+=1,a||s>=n?{done:!0}:(o+=2,c=new jN(e[o],e[o+1]),{value:[s,c],done:!1})}function f(c){return a=!0,arguments.length?{value:c,done:!0}:{done:!0}}function l(){return t.entries()}});gr(Q.prototype,"get",function(e){var t;if(!Yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!ki(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new jN(t[e],t[e+1])});qa(Q.prototype,"length",function(){return this._length});gr(Q.prototype,"set",function(e){var t,i,n,a,s,o,v,f,l;if(!Yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!ki(i))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+i+"`.")}else i=0;if(Jt(e)){if(i>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+i+"`.");i*=2,n[i]=ga(e),n[i+1]=ma(e);return}if(Yt(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,l=n.byteOffset+i*Or,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Ir(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(Vo(e)){for(o=e.length,f=0;f<o;f++)if(!Jt(e[f])){s=!0;break}if(s){if(!pa(o))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+o+"`.");if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,l=n.byteOffset+i*Or,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Ir(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=ga(v),n[i+1]=ma(v),i+=2;return}throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.")});WN.exports=Q});var Di=u((QWr,kN)=>{"use strict";var tpr=HN();kN.exports=tpr});var XN=u(($Wr,DN)=>{"use strict";function ipr(r){return r.re}DN.exports=ipr});var Ce=u((KWr,JN)=>{"use strict";var npr=XN();JN.exports=npr});var YN=u((xWr,zN)=>{"use strict";function apr(r){return r.im}zN.exports=apr});var Be=u((rHr,ZN)=>{"use strict";var upr=YN();ZN.exports=upr});var $N=u((eHr,QN)=>{"use strict";var spr=ht(),opr=Br(),vpr=Ce(),fpr=Be();function lpr(r){var e,t,i;for(e=[];t=r.next(),!t.done;)if(i=t.value,spr(i)&&i.length>=2)e.push(i[0],i[1]);else if(opr(i))e.push(vpr(i),fpr(i));else return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");return e}QN.exports=lpr});var xN=u((tHr,KN)=>{"use strict";var cpr=ht(),ppr=Br(),gpr=Ce(),mpr=Be();function qpr(r,e,t){var i,n,a,s;for(i=[],s=-1;n=r.next(),!n.done;)if(s+=1,a=e.call(t,n.value,s),cpr(a)&&a.length>=2)i.push(a[0],a[1]);else if(ppr(a))i.push(gpr(a),mpr(a));else return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+a+"`.");return i}KN.exports=qpr});var eA=u((iHr,rA)=>{"use strict";var ypr=Br(),hpr=Ce(),dpr=Be();function wpr(r,e){var t,i,n,a;for(t=e.length,a=0,n=0;n<t;n++){if(i=e[n],!ypr(i))return null;r[a]=hpr(i),r[a+1]=dpr(i),a+=2}return r}rA.exports=wpr});var fA=u((nHr,vA)=>{"use strict";var Xi=Ae().isPrimitive,tA=ht(),Uo=Fr(),iA=Bo(),nA=On(),bpr=lr(),wt=L(),Zt=Br(),ya=kn(),Go=Ar(),Epr=sa(),Qt=oa(),mr=w(),wa=P(),Pr=Xr(),aA=kt(),ha=Ce(),da=Be(),Npr=Dt(),Apr=Xt(),Opr=mt(),uA=$N(),Spr=xN(),Tpr=eA(),Sr=Pr.BYTES_PER_ELEMENT*2,sA=Epr();function $t(r){return r instanceof $||typeof r=="object"&&r!==null&&(r.constructor.name==="Complex64Array"||r.constructor.name==="Complex128Array")&&typeof r._length=="number"&&typeof r._buffer=="object"}function oA(r){return r===$||r.name==="Complex128Array"}function Lpr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex64Array"&&r.BYTES_PER_ELEMENT===Sr}function Ipr(r){return typeof r=="object"&&r!==null&&r.constructor.name==="Complex128Array"&&r.BYTES_PER_ELEMENT===Sr*2}function $(){var r,e,t,i;if(e=arguments.length,!(this instanceof $))return e===0?new $:e===1?new $(arguments[0]):e===2?new $(arguments[0],arguments[1]):new $(arguments[0],arguments[1],arguments[2]);if(e===0)t=new Pr(0);else if(e===1)if(Xi(arguments[0]))t=new Pr(arguments[0]*2);else if(Uo(arguments[0]))if(t=arguments[0],i=t.length,i&&bpr(t)&&Zt(t[0])){if(t=Tpr(new Pr(i*2),t),t===null){if(!ya(i))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Pr(arguments[0])}}else{if(Lpr(t))t=Npr(t,0);else if(Ipr(t))t=Apr(t,0);else if(!ya(i))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+i+"`.");t=new Pr(t)}else if(iA(arguments[0])){if(t=arguments[0],!Go(t.byteLength/Sr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Sr+". Byte length: `"+t.byteLength+"`.");t=new Pr(t)}else if(nA(arguments[0])){if(t=arguments[0],sA===!1)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!wt(t[Qt]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(t=t[Qt](),!wt(t.next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if(t=uA(t),t instanceof Error)throw t;t=new Pr(t)}else throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");else{if(t=arguments[0],!iA(t))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(r=arguments[1],!Xi(r))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Go(r/Sr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Sr+". Value: `"+r+"`.");if(e===2){if(i=t.byteLength-r,!Go(i/Sr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Sr+". View byte length: `"+i+"`.");t=new Pr(t,r)}else{if(i=arguments[2],!Xi(i))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+i+"`.");if(i*Sr>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+i*Sr+"`.");t=new Pr(t,r,i*2)}}return mr(this,"_buffer",t),mr(this,"_length",t.length/2),this}mr($,"BYTES_PER_ELEMENT",Sr);mr($,"name","Complex64Array");mr($,"from",function(e){var t,i,n,a,s,o,v,f,l,c,p;if(!wt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!oA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(i=arguments.length,i>1){if(n=arguments[1],!wt(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");i>2&&(t=arguments[2])}if($t(e)){if(v=e.length,n){for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,e.get(c),c),Zt(l))s[p]=ha(l),s[p+1]=da(l);else if(tA(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(Uo(e)){if(n){for(v=e.length,o=Opr(e),c=0;c<v;c++)if(!Zt(o.getter(e,c))){f=!0;break}if(f){if(!ya(v))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+v+"`.");for(a=new this(v/2),s=a._buffer,c=0;c<v;c++)s[c]=n.call(t,o.getter(e,c),c);return a}for(a=new this(v),s=a._buffer,p=0,c=0;c<v;c++){if(l=n.call(t,o.getter(e,c),c),Zt(l))s[p]=ha(l),s[p+1]=da(l);else if(tA(l)&&l.length>=2)s[p]=l[0],s[p+1]=l[1];else throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");p+=2}return a}return new this(e)}if(nA(e)&&sA&&wt(e[Qt])){if(s=e[Qt](),!wt(s.next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if(n?o=Spr(s,n,t):o=uA(s),o instanceof Error)throw o;for(v=o.length/2,a=new this(v),s=a._buffer,c=0;c<v;c++)s[c]=o[c];return a}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")});mr($,"of",function(){var e,t;if(!wt(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!oA(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);return new this(e)});wa($.prototype,"buffer",function(){return this._buffer.buffer});wa($.prototype,"byteLength",function(){return this._buffer.byteLength});wa($.prototype,"byteOffset",function(){return this._buffer.byteOffset});mr($.prototype,"BYTES_PER_ELEMENT",$.BYTES_PER_ELEMENT);mr($.prototype,"copyWithin",function(e,t){if(!$t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return arguments.length===2?this._buffer.copyWithin(e*2,t*2):this._buffer.copyWithin(e*2,t*2,arguments[2]*2),this});mr($.prototype,"entries",function(){var e,t,i,n,a,s,o;if(!$t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return t=this,e=this._buffer,n=this._length,s=-1,o=-2,i={},mr(i,"next",v),mr(i,"return",f),Qt&&mr(i,Qt,l),i;function v(){var c;return s+=1,a||s>=n?{done:!0}:(o+=2,c=new aA(e[o],e[o+1]),{value:[s,c],done:!1})}function f(c){return a=!0,arguments.length?{value:c,done:!0}:{done:!0}}function l(){return t.entries()}});mr($.prototype,"get",function(e){var t;if(!$t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Xi(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return t=this._buffer,e*=2,new aA(t[e],t[e+1])});wa($.prototype,"length",function(){return this._length});mr($.prototype,"set",function(e){var t,i,n,a,s,o,v,f,l;if(!$t(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(i=arguments[1],!Xi(i))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+i+"`.")}else i=0;if(Zt(e)){if(i>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+i+"`.");i*=2,n[i]=ha(e),n[i+1]=da(e);return}if($t(e)){if(o=e._length,i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e._buffer,l=n.byteOffset+i*Sr,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Pr(t.length),f=0;f<t.length;f++)a[f]=t[f];t=a}for(i*=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(Uo(e)){for(o=e.length,f=0;f<o;f++)if(!Zt(e[f])){s=!0;break}if(s){if(!ya(o))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+o+"`.");if(i+o/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(t=e,l=n.byteOffset+i*Sr,t.buffer===n.buffer&&t.byteOffset<l&&t.byteOffset+t.byteLength>l){for(a=new Pr(o),f=0;f<o;f++)a[f]=t[f];t=a}for(i*=2,o/=2,l=0,f=0;f<o;f++)n[i]=t[l],n[i+1]=t[l+1],i+=2,l+=2;return}if(i+o>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(i*=2,f=0;f<o;f++)v=e[f],n[i]=ha(v),n[i+1]=da(v),i+=2;return}throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.")});vA.exports=$});var Ji=u((aHr,lA)=>{"use strict";var Ppr=fA();lA.exports=Ppr});var pA=u((uHr,cA)=>{"use strict";var _pr=cr(),Rpr=Xr(),Fpr=Di(),Mpr=Ji(),Cpr={float64:_pr,float32:Rpr,complex128:Fpr,complex64:Mpr};cA.exports=Cpr});var mA=u((sHr,gA)=>{"use strict";var Bpr=pA();function jpr(r){return Bpr[r]||null}gA.exports=jpr});var yA=u((oHr,qA)=>{"use strict";var Vpr=mA();qA.exports=Vpr});var dA=u((vHr,hA)=>{"use strict";function Gpr(r,e,t,i){var n,a,s,o;if(t===0)return[];if(t===1)return i?[e]:[r];for(n=[r],i?a=t-1:a=t,s=(e-r)/a,o=1;o<a;o++)n.push(r+s*o);return i&&n.push(e),n}hA.exports=Gpr});var OA=u((fHr,AA)=>{"use strict";var Upr=kt(),Wpr=Ht(),wA=Fe(),bA=Me(),EA=Ce(),NA=Be();function Hpr(r,e,t,i,n,a){var s,o,v,f,l,c,p,q,y,m,g,h,E;if(n===0)return[];if(o=0,r==="float64"?(f=e,c=0):r==="complex64"?(o+=1,f=EA(e),c=NA(e)):(f=wA(e),c=bA(e)),t==="float64"?(l=i,p=0):t==="complex64"?(o+=1,l=EA(i),p=NA(i)):(l=wA(i),p=bA(i)),o===2?s=Upr:s=Wpr,n===1)return a?[new s(l,p)]:[new s(f,c)];for(v=[new s(f,c)],a?h=n-1:h=n,m=(l-f)/h,g=(p-c)/h,E=1;E<h;E++)q=f+m*E,y=c+g*E,v.push(new s(q,y));return a&&v.push(new s(l,p)),v}AA.exports=Hpr});var Wo=u((lHr,SA)=>{"use strict";function kpr(r,e,t,i,n){var a,s,o;if(i===0)return r;if(i===1)return n?r[0]=t:r[0]=e,r;for(r[0]=e,n?a=i-1:a=i,s=(t-e)/a,o=1;o<a;o++)r[o]=e+s*o;return n&&(r[a]=t),r}SA.exports=kpr});var Ho=u((cHr,_A)=>{"use strict";var TA=Fe(),LA=Me(),IA=Ce(),PA=Be();function Dpr(r,e,t,i,n,a,s){var o,v,f,l,c,p,q,y,m;if(a===0)return r;if(e==="float64"?(o=t,f=0):e==="complex64"?(o=IA(t),f=PA(t)):(o=TA(t),f=LA(t)),i==="float64"?(v=n,l=0):i==="complex64"?(v=IA(n),l=PA(n)):(v=TA(n),l=LA(n)),a===1)return s?(r[0]=v,r[1]=l):(r[0]=o,r[1]=f),r;for(r[0]=o,r[1]=f,s?q=a-1:q=a,c=(v-o)/q,p=(l-f)/q,m=2,y=1;y<q;y++)r[m]=o+c*y,r[m+1]=f+p*y,m+=2;return s&&(r[m]=v,r[m+1]=l),r}_A.exports=Dpr});var ko=u((pHr,FA)=>{"use strict";var Xpr=T(),RA=A(),Jpr=X().isPrimitive,zpr=ar().isPrimitive;function Ypr(r,e){return Xpr(e)?RA(e,"dtype")&&(r.dtype=e.dtype,!Jpr(r.dtype))?new TypeError("invalid option. `dtype` option must be a string. Option: `"+r.dtype+"`."):RA(e,"endpoint")&&(r.endpoint=e.endpoint,!zpr(r.endpoint))?new TypeError("invalid option. `endpoint` option must be a boolean. Option: `"+r.endpoint+"`."):null:new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}FA.exports=Ypr});var Do=u((gHr,Zpr)=>{Zpr.exports={endpoint:!0}});var UA=u((mHr,GA)=>{"use strict";var MA=Br(),CA=j().isPrimitive,Qpr=Ae().isPrimitive,BA=b(),jA=Co(),$pr=yA(),Kpr=Dt(),xpr=Xt(),r4r=dA(),e4r=OA(),t4r=Wo(),VA=Ho(),i4r=ko(),n4r=Do();function a4r(r,e,t){var i,n,a,s,o,v,f;if(typeof r=="object"){if(o=jA(r),o===null){if(!MA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");o="complex128"}f=!0}else{if(!CA(r)||BA(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");o="float64"}if(typeof e=="object"){if(v=jA(e),v===null){if(!MA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");v="complex128"}f=!0}else{if(!CA(e)||BA(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");v="float64"}if(!Qpr(t))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+t+"`.");if(i={endpoint:n4r.endpoint},o===v?i.dtype=o:i.dtype="complex128",arguments.length>3&&(a=i4r(i,arguments[3]),a))throw a;if(i.dtype==="generic")return f?e4r(o,r,v,e,t,i.endpoint):r4r(r,e,t,i.endpoint);if(n=$pr(i.dtype),n===null)throw new TypeError('invalid argument. `dtype` option must be a real or complex floating-point data type or "generic". Option: `'+i.dtype+"`.");if(s=new n(t),i.dtype==="complex64")return VA(Kpr(s,0),o,r,v,e,t,i.endpoint),s;if(i.dtype==="complex128")return VA(xpr(s,0),o,r,v,e,t,i.endpoint),s;if(f)throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array data type must be a complex number data type or "generic".');return t4r(s,r,e,t,i.endpoint)}GA.exports=a4r});var HA=u((qHr,WA)=>{"use strict";var u4r={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"};WA.exports=u4r});var DA=u((yHr,kA)=>{"use strict";var s4r=cr(),o4r=Xr(),v4r=or(),f4r=vt(),l4r=Rt(),c4r=Oi(),p4r=_t(),g4r=Ai(),m4r=Ni(),q4r=Ji(),y4r=Di(),h4r=[s4r,o4r,f4r,v4r,c4r,l4r,m4r,p4r,g4r,q4r,y4r];kA.exports=h4r});var JA=u((hHr,XA)=>{"use strict";var d4r=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"];XA.exports=d4r});var ZA=u((dHr,YA)=>{"use strict";var w4r=nt(),b4r=lr(),E4r=Ne(),N4r=HA(),A4r=DA(),zA=JA(),O4r=zA.length;function S4r(r){var e;if(b4r(r))return"generic";if(w4r(r))return null;for(e=0;e<O4r;e++)if(r instanceof A4r[e])return zA[e];return N4r[E4r(r)]||null}YA.exports=S4r});var $A=u((wHr,QA)=>{"use strict";var T4r=ZA();QA.exports=T4r});var iO=u((bHr,tO)=>{"use strict";var L4r=kt(),I4r=Ht(),KA=Fe(),xA=Me(),rO=Ce(),eO=Be();function P4r(r,e,t,i,n,a,s){var o,v,f,l,c,p,q,y,m,g,h,E,N,V;if(a===0)return r;if(v=0,e==="float64"?(f=t,c=0):e==="complex64"?(v+=1,f=rO(t),c=eO(t)):(f=KA(t),c=xA(t)),i==="float64"?(l=n,p=0):i==="complex64"?(v+=1,l=rO(n),p=eO(n)):(l=KA(n),p=xA(n)),v===2?o=L4r:o=I4r,y=r.data,q=r.setter,a===1)return s?q(y,0,new o(l,p)):q(y,0,new o(f,c)),r;for(q(y,0,new o(f,c)),s?N=a-1:N=a,h=(l-f)/N,E=(p-c)/N,V=1;V<N;V++)m=f+h*V,g=c+E*V,q(y,V,new o(m,g));return s&&q(y,N,new o(l,p)),r}tO.exports=P4r});var aO=u((EHr,nO)=>{"use strict";function _4r(r,e,t,i,n){var a,s,o,v,f;if(i===0)return r;if(a=r.data,s=r.setter,i===1)return n?s(a,0,t):s(a,0,e),r;for(s(a,0,e),n?o=i-1:o=i,v=(t-e)/o,f=1;f<o;f++)s(a,f,e+v*f);return n&&s(a,o,t),r}nO.exports=_4r});var pO=u((NHr,cO)=>{"use strict";var uO=Br(),sO=j().isPrimitive,R4r=Fr(),oO=b(),vO=Co(),F4r=$A(),M4r=Dt(),C4r=Xt(),fO=mt(),B4r=iO(),j4r=aO(),lO=Ho(),V4r=Wo(),G4r=ko(),U4r=Do();function W4r(r,e,t){var i,n,a,s,o,v,f;if(typeof r=="object"){if(a=vO(r),a===null){if(!uO(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");a="complex128"}o=!0}else{if(!sO(r)||oO(r))throw new TypeError("invalid argument. First argument must be either a real or complex number. Value: `"+r+"`.");a="float64"}if(typeof e=="object"){if(s=vO(e),s===null){if(!uO(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");s="complex128"}o=!0}else{if(!sO(e)||oO(e))throw new TypeError("invalid argument. Second argument must be either a real or complex number. Value: `"+e+"`.");s="float64"}if(!R4r(t))throw new TypeError("invalid argument. Third argument must be an array-like object. Value: `"+t+"`.");if(i={endpoint:U4r.endpoint},arguments.length>3&&(n=G4r(i,arguments[3]),n))throw n;if(v=F4r(t),v===null&&(v="generic"),v==="complex64")return lO(M4r(t,0),a,r,s,e,t.length,i.endpoint),t;if(v==="complex128")return lO(C4r(t,0),a,r,s,e,t.length,i.endpoint),t;if(o){if(v==="generic")return f=fO(t),B4r(f,a,r,s,e,t.length,i.endpoint),t;throw new TypeError('invalid arguments. If either of the first two arguments are complex numbers, the output array must be a complex number array or a "generic" array-like object.')}return f=fO(t),f.accessors?(j4r(f,r,e,t.length,i.endpoint),t):(V4r(t,r,e,t.length,i.endpoint),t)}cO.exports=W4r});var qO=u((AHr,mO)=>{"use strict";var H4r=w(),gO=UA(),k4r=pO();H4r(gO,"assign",k4r);mO.exports=gO});var hO=u((OHr,yO)=>{"use strict";var D4r=b(),X4r=_e();function J4r(r,e,t){var i,n,a,s;if(r<=0)return NaN;if(r===1||t===0)return e[0];for(t<0?n=(1-r)*t:n=0,i=e[n],s=1;s<r;s++){if(n+=t,a=e[n],D4r(a))return a;(a>i||a===i&&X4r(a))&&(i=a)}return i}yO.exports=J4r});var wO=u((SHr,dO)=>{"use strict";var z4r=b(),Y4r=_e();function Z4r(r,e,t,i){var n,a,s,o;if(r<=0)return NaN;if(r===1||t===0)return e[i];for(a=i,n=e[a],o=1;o<r;o++){if(a+=t,s=e[a],z4r(s))return s;(s>n||s===n&&Y4r(s))&&(n=s)}return n}dO.exports=Z4r});var NO=u((THr,EO)=>{"use strict";var Q4r=w(),bO=hO(),$4r=wO();Q4r(bO,"ndarray",$4r);EO.exports=bO});var OO=u((LHr,AO)=>{"use strict";var K4r=NO();AO.exports=K4r});var LO=u((IHr,TO)=>{"use strict";var SO=b(),x4r=_e();function r8r(r,e,t,i,n){var a,s,o,v,f;if(r<=0)return NaN;for(t<0?s=(1-r)*t:s=0,n<0?o=(1-r)*n:o=0,f=0;f<r&&i[o]!==0;f++)s+=t,o+=n;if(f===r)return NaN;if(a=e[s],SO(a))return a;for(f+=1,f;f<r;f++)if(s+=t,o+=n,!i[o]){if(v=e[s],SO(v))return v;(v>a||v===a&&x4r(v))&&(a=v)}return a}TO.exports=r8r});var _O=u((PHr,PO)=>{"use strict";var IO=b(),e8r=_e();function t8r(r,e,t,i,n,a,s){var o,v,f,l,c;if(r<=0)return NaN;for(v=i,f=s,c=0;c<r&&n[f]!==0;c++)v+=t,f+=a;if(c===r)return NaN;if(o=e[v],IO(o))return o;for(c+=1,c;c<r;c++)if(v+=t,f+=a,!n[f]){if(l=e[v],IO(l))return l;(l>o||l===o&&e8r(l))&&(o=l)}return o}PO.exports=t8r});var MO=u((_Hr,FO)=>{"use strict";var i8r=w(),RO=LO(),n8r=_O();i8r(RO,"ndarray",n8r);FO.exports=RO});var BO=u((RHr,CO)=>{"use strict";function a8r(r,e,t,i,n){if(arguments.length>3){if(i!=="closed"&&i!=="open")throw new TypeError("invalid argument. `left` must be one of the following strings: 'closed' or 'open'. Value: `"+i+"`.");if(n!=="closed"&&n!=="open")throw new TypeError("invalid argument. `right` must be one of the following strings: 'closed' or 'open'. Value: `"+n+"`.")}return i==="closed"||i===void 0?n==="closed"||n===void 0?r>=e&&r<=t:r>=e&&r<t:n==="closed"||n===void 0?r>e&&r<=t:r>e&&r<t}CO.exports=a8r});var VO=u((FHr,jO)=>{"use strict";var u8r=BO();jO.exports=u8r});var UO=u((MHr,GO)=>{"use strict";var s8r=j().isPrimitive,o8r=VO(),v8r=S();function f8r(r,e,t,i,n,a){var s,o;if(!(s8r(r)&&o8r(r,e,t,i,n)))throw i==="closed"?s="[":s="(",n==="closed"?o="]":o=")",new TypeError(v8r("invalid argument. %s must be a number on the interval: %s%d, %d%s. Value: %s.",a,s,e,t,o,String(r)))}GO.exports=f8r});var HO=u((CHr,WO)=>{"use strict";var l8r=ar().isPrimitive,c8r=S();function p8r(r,e){if(!l8r(r))throw new TypeError(c8r("invalid argument. %s must be a boolean. Value: %s.",e,String(r)))}WO.exports=p8r});var DO=u((BHr,kO)=>{"use strict";function g8r(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,e!==1&&i!==1&&i!==e||t!==1&&n!==1&&n!==t)return!1;return!0}kO.exports=g8r});var JO=u((jHr,XO)=>{"use strict";var m8r=S(),q8r=DO();function y8r(r,e,t){if(!q8r(r,e))throw new TypeError(m8r("invalid argument. %s must be broadcast compatible.",t))}XO.exports=y8r});var YO=u((VHr,zO)=>{"use strict";function h8r(r){var e,t,i,n,a,s;for(e=r.length,t=r[0].length,s=1;s<arguments.length;s++)if(a=arguments[s],i=a.length,n=a[0].length,i!==1&&i!==e||n!==1&&n!==t)return!1;return!0}zO.exports=h8r});var QO=u((GHr,ZO)=>{"use strict";var d8r=S(),w8r=YO();function b8r(r,e,t,i){if(!w8r(r,e))throw new TypeError(d8r("invalid argument. %s must be broadcast compatible with %s.",t,i))}ZO.exports=b8r});var Xo=u((UHr,$O)=>{"use strict";var E8r=S();function N8r(r,e){if(r===void 0)throw new Error(E8r("invalid invocation. Must provide %s.",e))}$O.exports=N8r});var xO=u((WHr,KO)=>{"use strict";var A8r=S();function O8r(r,e,t,i){if(!(r>e))throw new TypeError(A8r("invalid argument. %s must be greater than %s. Values: [%s, %s].",t,i,String(r),String(e)))}KO.exports=O8r});var eS=u((HHr,rS)=>{"use strict";var S8r=S();function T8r(r,e,t,i){if(!(r>=e))throw new TypeError(S8r("invalid argument. %s must be greater than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}rS.exports=T8r});var iS=u((kHr,tS)=>{"use strict";var L8r=Rr().isPrimitive,I8r=S();function P8r(r,e){if(!L8r(r))throw new TypeError(I8r("invalid argument. %s must be an integer. Value: %s.",e,String(r)))}tS.exports=P8r});var aS=u((DHr,nS)=>{"use strict";var _8r=S();function R8r(r,e,t,i){if(!(r<e))throw new TypeError(_8r("invalid argument. %s must be less than %s. Values: [%s, %s].",t,i,String(r),String(e)))}nS.exports=R8r});var sS=u((XHr,uS)=>{"use strict";var F8r=S();function M8r(r,e,t,i){if(!(r<=e))throw new TypeError(F8r("invalid argument. %s must be less than or equal to %s. Values: [%s, %s].",t,i,String(r),String(e)))}uS.exports=M8r});var vS=u((JHr,oS)=>{"use strict";var C8r=Ae().isPrimitive,B8r=S();function j8r(r,e){if(!C8r(r))throw new TypeError(B8r("invalid argument. %s must be a nonnegative integer. Value: %s.",e,String(r)))}oS.exports=j8r});var lS=u((zHr,fS)=>{"use strict";var V8r=Ro().isPrimitive,G8r=S();function U8r(r,e){if(!V8r(r))throw new TypeError(G8r("invalid argument. %s must be a nonnegative number. Value: %s.",e,String(r)))}fS.exports=U8r});var pS=u((YHr,cS)=>{"use strict";var W8r=j().isPrimitive,H8r=S();function k8r(r,e){if(!W8r(r))throw new TypeError(H8r("invalid argument. %s must be a number. Value: %s.",e,String(r)))}cS.exports=k8r});var mS=u((ZHr,gS)=>{"use strict";var D8r=S();function X8r(r,e,t){if(!(e.indexOf(r)>=0))throw new TypeError(D8r('invalid argument. Unrecognized %s. Must provide one of the following values: [ "%s" ]. Value: %s.',t,e.join('", "'),String(r)))}gS.exports=X8r});var Jo=u((QHr,qS)=>{"use strict";var J8r=Zr().isPrimitive,z8r=S();function Y8r(r,e){if(!J8r(r))throw new TypeError(z8r("invalid argument. %s must be a positive integer. Value: %s.",e,String(r)))}qS.exports=Y8r});var hS=u(($Hr,yS)=>{"use strict";var Z8r=W().isPrimitive,Q8r=S();function $8r(r,e){if(!Z8r(r))throw new TypeError(Q8r("invalid argument. %s must be a positive number. Value: %s.",e,String(r)))}yS.exports=$8r});var zo=u((KHr,dS)=>{"use strict";var K8r=j().isPrimitive;function x8r(r){return K8r(r)&&r>=0&&r<=1}dS.exports=x8r});var Yo=u((xHr,wS)=>{"use strict";var r5r=j().isObject;function e5r(r){return r5r(r)&&r.valueOf()>=0&&r.valueOf()<=1}wS.exports=e5r});var ES=u((rkr,bS)=>{"use strict";var t5r=zo(),i5r=Yo();function n5r(r){return t5r(r)||i5r(r)}bS.exports=n5r});var zi=u((ekr,AS)=>{"use strict";var NS=w(),Zo=ES(),a5r=zo(),u5r=Yo();NS(Zo,"isPrimitive",a5r);NS(Zo,"isObject",u5r);AS.exports=Zo});var SS=u((tkr,OS)=>{"use strict";var s5r=zi().isPrimitive,o5r=S();function v5r(r,e){if(!s5r(r))throw new TypeError(o5r("invalid argument. %s must be a probability (i.e., value between 0 and 1, inclusive). Value: %s.",e,String(r)))}OS.exports=v5r});var LS=u((ikr,TS)=>{"use strict";var f5r=lr(),l5r=S();function c5r(r,e){if(!f5r(r))throw new TypeError(l5r("invalid argument. %s must be a range. Value: %s.",e,String(r)))}TS.exports=c5r});var PS=u((nkr,IS)=>{"use strict";function p5r(r){return r.length===1||r[0].length===1}IS.exports=p5r});var RS=u((akr,_S)=>{"use strict";var g5r=lr(),m5r=PS();function q5r(r){return g5r(r)&&m5r(r)}_S.exports=q5r});var MS=u((ukr,FS)=>{"use strict";var y5r=S(),h5r=RS();function d5r(r,e){if(!h5r(r))throw new TypeError(y5r("invalid argument. %s must consist of only a single row or a single column.",e))}FS.exports=d5r});var BS=u((skr,CS)=>{"use strict";function w5r(r){var e,t,i,n;for(e=r.length,t=r[0].length,n=1;n<arguments.length;n++)if(i=arguments[n],i.length!==e||i[0].length!==t)return!1;return!0}CS.exports=w5r});var VS=u((okr,jS)=>{"use strict";var b5r=S(),E5r=BS();function N5r(r,e,t){if(!E5r(r,e))throw new TypeError(b5r("invalid argument. %s must have the same shape (i.e., the same number of rows and columns).",t))}jS.exports=N5r});var US=u((vkr,GS)=>{"use strict";var A5r=X().isPrimitive,O5r=S();function S5r(r,e){if(!A5r(r))throw new TypeError(O5r("invalid argument. %s must be a string. Value: %s.",e,String(r)))}GS.exports=S5r});var HS=u((fkr,WS)=>{"use strict";var T5r=S();function L5r(r){throw new Error(T5r("invalid argument. Unrecognized option name. Value: %s.",String(r)))}WS.exports=L5r});var XS=u((lkr,DS)=>{"use strict";var kS=Jo(),I5r=Xo();function P5r(r,e,t){kS(r,"Number of rows"),kS(e,"Number of columns"),I5r(t,"a pseudorandom number generator seed")}DS.exports=P5r});var zS=u((ckr,JS)=>{"use strict";var _5r=lr(),R5r=Rr().isPrimitive,F5r=S(),M5r=ua();function C5r(r){if(R5r(r))return r;if(_5r(r))return M5r(r);throw new TypeError(F5r("invalid argument. Pseudorandom number generator seed must be an integer or a range of integers. Value: %s.",String(r)))}JS.exports=C5r});var ZS=u((pkr,YS)=>{"use strict";var J={};J.isBetween=UO();J.isBoolean=HO();J.isBroadcastCompatible=JO();J.isBroadcastCompatibleWith=QO();J.isDefined=Xo();J.isGreaterThan=xO();J.isGreaterThanEqual=eS();J.isInteger=iS();J.isLessThan=aS();J.isLessThanEqual=sS();J.isNonNegativeInteger=vS();J.isNonNegativeNumber=lS();J.isNumber=pS();J.isOneOf=mS();J.isPositiveInteger=Jo();J.isPositiveNumber=hS();J.isProbability=SS();J.isRange=LS();J.isRange1d=MS();J.isSameShape=VS();J.isString=US();J.unrecognizedOptionName=HS();J.verifyCommonPRNGArgs=XS();J.verifyPRNGSeed=zS();YS.exports=J});var $S=u((gkr,QS)=>{"use strict";var Qo=4;function B5r(r,e,t,i,n,a){var s,o,v,f;if(r<=0||e===0)return n;if(i===1&&a===1){if(v=r%Qo,v>0)for(f=0;f<v;f++)n[f]+=e*t[f];if(r<Qo)return n;for(f=v;f<r;f+=Qo)n[f]+=e*t[f],n[f+1]+=e*t[f+1],n[f+2]+=e*t[f+2],n[f+3]+=e*t[f+3];return n}for(i<0?s=(1-r)*i:s=0,a<0?o=(1-r)*a:o=0,f=0;f<r;f++)n[o]+=e*t[s],s+=i,o+=a;return n}QS.exports=B5r});var xS=u((mkr,KS)=>{"use strict";var Yi=4;function j5r(r,e,t,i,n,a,s,o){var v,f,l,c;if(r<=0||e===0)return a;if(v=n,f=o,i===1&&s===1){if(l=r%Yi,l>0)for(c=0;c<l;c++)a[f]+=e*t[v],v+=i,f+=s;if(r<Yi)return a;for(c=l;c<r;c+=Yi)a[f]+=e*t[v],a[f+1]+=e*t[v+1],a[f+2]+=e*t[v+2],a[f+3]+=e*t[v+3],v+=Yi,f+=Yi;return a}for(c=0;c<r;c++)a[f]+=e*t[v],v+=i,f+=s;return a}KS.exports=j5r});var $o=u((qkr,eT)=>{"use strict";var V5r=w(),rT=$S(),G5r=xS();V5r(rT,"ndarray",G5r);eT.exports=rT});var iT=u((ykr,tT)=>{"use strict";var Ko={};Ko.daxpy=$o().ndarray;Ko.saxpy=$o().ndarray;tT.exports=Ko});var aT=u((hkr,nT)=>{"use strict";function U5r(r){return r*r}nT.exports=U5r});var sT=u((dkr,uT)=>{"use strict";var W5r=aT();uT.exports=W5r});var vT=u((wkr,oT)=>{"use strict";function H5r(r){var e,t,i;return r===0?.16666666666666713:(r<0?e=-r:e=r,e<=1?(t=-8.198089802484825+r*(19.562619833175948+r*(-16.262479672107002+r*(5.444622390564711+r*(-.6019598008014124+r*.004253011369004428)))),i=-49.18853881490881+r*(139.51056146574857+r*(-147.1791292232726+r*(70.49610280856842+r*(-14.740913729888538+r*1))))):(r=1/r,t=.004253011369004428+r*(-.6019598008014124+r*(5.444622390564711+r*(-16.262479672107002+r*(19.562619833175948+r*-8.198089802484825)))),i=1+r*(-14.740913729888538+r*(70.49610280856842+r*(-147.1791292232726+r*(139.51056146574857+r*-49.18853881490881))))),t/i)}oT.exports=H5r});var lT=u((bkr,fT)=>{"use strict";function k5r(r){var e,t,i;return r===0?.08333333333333809:(r<0?e=-r:e=r,e<=1?(t=28.536655482610616+r*(-25.56901049652825+r*(6.968710824104713+r*(-.5634242780008963+r*.002967721961301243))),i=342.43986579130785+r*(-383.8770957603691+r*(147.0656354026815+r*(-21.947795316429207+r*1)))):(r=1/r,t=.002967721961301243+r*(-.5634242780008963+r*(6.968710824104713+r*(-25.56901049652825+r*28.536655482610616))),i=1+r*(-21.947795316429207+r*(147.0656354026815+r*(-383.8770957603691+r*342.43986579130785)))),t/i)}fT.exports=k5r});var gT=u((Ekr,pT)=>{"use strict";var D5r=b(),X5r=G(),cT=fa(),J5r=vT(),z5r=lT(),Y5r=6123233995736766e-32;function Z5r(r){var e,t,i,n,a;if(D5r(r))return NaN;if(r>0?i=r:(e=!0,i=-r),i>1)return NaN;if(i>.625)t=1-i,n=t*z5r(t),t=X5r(t+t),a=cT-t,t=t*n-Y5r,a-=t,a+=cT;else{if(i<1e-8)return r;t=i*i,a=t*J5r(t),a=i*a+i}return e?-a:a}pT.exports=Z5r});var bt=u((Nkr,mT)=>{"use strict";var Q5r=gT();mT.exports=Q5r});var dT=u((Akr,hT)=>{"use strict";var $5r=b(),qT=bt(),K5r=G(),yT=fa(),x5r=6123233995736766e-32;function r7r(r){var e;return $5r(r)?NaN:r<-1||r>1?NaN:r>.5?2*qT(K5r(.5-.5*r)):(e=yT-qT(r),e+=x5r,e+=yT,e)}hT.exports=r7r});var Zi=u((Okr,wT)=>{"use strict";var e7r=dT();wT.exports=e7r});var AT=u((Skr,NT)=>{"use strict";var t7r=b(),i7r=Ut(),bT=G(),n7r=Yn(),ET=B(),a7r=1<<28;function u7r(r){var e;return t7r(r)?NaN:r<1?NaN:r===1?0:r>=a7r?ET(r)+n7r:r>2?ET(2*r-1/(r+bT(r*r-1))):(e=r-1,i7r(e+bT(2*e+e*e)))}NT.exports=u7r});var ST=u((Tkr,OT)=>{"use strict";var s7r=AT();OT.exports=s7r});var LT=u((Lkr,TT)=>{"use strict";var o7r=la();function v7r(r){return o7r(1/r)}TT.exports=v7r});var PT=u((Ikr,IT)=>{"use strict";var f7r=LT();IT.exports=f7r});var RT=u((Pkr,_T)=>{"use strict";var l7r=bt();function c7r(r){return l7r(1+r)}_T.exports=c7r});var MT=u((_kr,FT)=>{"use strict";var p7r=RT();FT.exports=p7r});var BT=u((Rkr,CT)=>{"use strict";var g7r=bt();function m7r(r){return g7r(1-r)}CT.exports=m7r});var VT=u((Fkr,jT)=>{"use strict";var q7r=BT();jT.exports=q7r});var UT=u((Mkr,GT)=>{"use strict";var y7r=bt();function h7r(r){return y7r(1/r)}GT.exports=h7r});var HT=u((Ckr,WT)=>{"use strict";var d7r=UT();WT.exports=d7r});var JT=u((Bkr,XT)=>{"use strict";var w7r=Oe(),b7r=b(),E7r=Ut(),kT=G(),N7r=Yn(),DT=B(),A7r=1/(1<<28),O7r=1<<28;function S7r(r){var e,t,i;return b7r(r)||w7r(r)?r:(r<0&&(r=-r,e=!0),r<A7r?i=r:r>O7r?i=DT(r)+N7r:r>2?i=DT(2*r+1/(kT(r*r+1)+r)):(t=r*r,i=E7r(r+t/(1+kT(1+t)))),e?-i:i)}XT.exports=S7r});var xo=u((jkr,zT)=>{"use strict";var T7r=JT();zT.exports=T7r});var ZT=u((Vkr,YT)=>{"use strict";var L7r=xo();function I7r(r){return L7r(1/r)}YT.exports=I7r});var $T=u((Gkr,QT)=>{"use strict";var P7r=ZT();QT.exports=P7r});var xT=u((Ukr,KT)=>{"use strict";var _7r=Zi(),R7r=G();function F7r(r){return 2*_7r(R7r(r))}KT.exports=F7r});var eL=u((Wkr,rL)=>{"use strict";var M7r=xT();rL.exports=M7r});var iL=u((Hkr,tL)=>{"use strict";var C7r=bt(),B7r=G();function j7r(r){return 2*C7r(B7r(r))}tL.exports=j7r});var aL=u((kkr,nL)=>{"use strict";var V7r=iL();nL.exports=V7r});var oL=u((Dkr,sL)=>{"use strict";var G7r=b(),uL=Ut(),U7r=M(),W7r=z(),H7r=1/(1<<28);function k7r(r){var e,t;return G7r(r)?NaN:r<-1||r>1?NaN:r===1?U7r:r===-1?W7r:(r<0&&(e=!0,r=-r),r<H7r?e?-r:r:(r<.5?(t=r+r,t=.5*uL(t+t*r/(1-r))):t=.5*uL((r+r)/(1-r)),e?-t:t))}sL.exports=k7r});var fL=u((Xkr,vL)=>{"use strict";var D7r=oL();vL.exports=D7r});var cL=u((Jkr,lL)=>{"use strict";var X7r=Zi();function J7r(r){return X7r(1+r)}lL.exports=J7r});var gL=u((zkr,pL)=>{"use strict";var z7r=cL();pL.exports=z7r});var qL=u((Ykr,mL)=>{"use strict";var Y7r=Zi();function Z7r(r){return Y7r(1-r)}mL.exports=Z7r});var hL=u((Zkr,yL)=>{"use strict";var Q7r=qL();yL.exports=Q7r});var bL=u((Qkr,wL)=>{"use strict";var dL=-.16666666666666632,$7r=.00833333333332249,K7r=-.0001984126982985795,x7r=27557313707070068e-22,r9r=-25050760253406863e-24,e9r=158969099521155e-24,t9r=.0416666666666666,i9r=-.001388888888887411,n9r=2480158728947673e-20,a9r=-27557314351390663e-23,u9r=2087572321298175e-24,s9r=-11359647557788195e-27;function o9r(r,e,t){var i,n,a,s,o;return o=e*e,s=o*o,n=$7r+o*(K7r+o*x7r)+o*s*(r9r+o*e9r),a=o*e,t===0?r[0]=e+a*(dL+o*n):r[0]=e-(o*(.5*t-a*n)-t-a*dL),n=o*(t9r+o*(i9r+o*n9r)),n+=s*s*(a9r+o*(u9r+o*s9r)),i=.5*o,s=1-i,r[1]=s+(1-s-i+(o*n-e*t)),r}wL.exports=o9r});var AL=u(($kr,NL)=>{"use strict";var v9r=vr(),f9r=Pi(),EL=bL(),l9r=2147483647,c9r=2146435072,p9r=1072243195,g9r=1044381696,r1=[0,0];function m9r(r,e){var t,i;if(t=v9r(e),t&=l9r,t<=p9r)return t<g9r&&(e|0)===0&&(r[0]=e,r[1]=0),EL(r,e,0);if(t>=c9r)return r[0]=NaN,r[1]=NaN,r;switch(i=f9r(e,r1),EL(r,r1[0],r1[1]),i&3){case 1:return t=r[1],r[1]=-r[0],r[0]=t,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return t=-r[1],r[1]=r[0],r[0]=t,r;default:return r}}NL.exports=m9r});var TL=u((Kkr,SL)=>{"use strict";var OL=AL();function q9r(r,e){return arguments.length===1?OL([0,0],r):OL(r,e)}SL.exports=q9r});var Qi=u((xkr,LL)=>{"use strict";var y9r=TL();LL.exports=y9r});var PL=u((rDr,IL)=>{"use strict";function h9r(r){var e,t,i;return r===0?-.17291506903064494:(r<0?e=-r:e=r,e<=1?(t=-4129866850099087e-4+r*(2728250787860594e-5+r*(-6214070042354012e-7+r*(663029979048338e-8+r*(-36629.81465510709+r*(103.44222815443189+r*-.12117036164593528))))),i=2388378799633229e-3+r*(2632819830085965e-5+r*(13985097372263435e-8+r*(456126.9622421994+r*(936.1402239233771+r*(1+r*0)))))):(r=1/r,t=-.12117036164593528+r*(103.44222815443189+r*(-36629.81465510709+r*(663029979048338e-8+r*(-6214070042354012e-7+r*(2728250787860594e-5+r*-4129866850099087e-4))))),i=0+r*(1+r*(936.1402239233771+r*(456126.9622421994+r*(13985097372263435e-8+r*(2632819830085965e-5+r*2388378799633229e-3)))))),t/i)}IL.exports=h9r});var RL=u((eDr,_L)=>{"use strict";function d9r(r){var e,t,i;return r===0?.005119512965174424:(r<0?e=-r:e=r,e<=1?(t=-1831.9397969392085+r*(-12254.07816137899+r*(-7287.970246446462+r*(10341.910641583727+r*(11725.046279757104+r*(4417.670702532509+r*(743.2119668062425+r*48.5917033559165)))))),i=-357834.78026152303+r*(245991.0226258631+r*(-84055.06259116957+r*(18680.99000835919+r*(-2945.876654550934+r*(333.07310774649073+r*(-25.258076240801554+r*1))))))):(r=1/r,t=48.5917033559165+r*(743.2119668062425+r*(4417.670702532509+r*(11725.046279757104+r*(10341.910641583727+r*(-7287.970246446462+r*(-12254.07816137899+r*-1831.9397969392085)))))),i=1+r*(-25.258076240801554+r*(333.07310774649073+r*(-2945.876654550934+r*(18680.99000835919+r*(-84055.06259116957+r*(245991.0226258631+r*-357834.78026152303))))))),t/i)}_L.exports=d9r});var ML=u((tDr,FL)=>{"use strict";function w9r(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}FL.exports=w9r});var BL=u((iDr,CL)=>{"use strict";function b9r(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}CL.exports=b9r});var VL=u((nDr,jL)=>{"use strict";var E9r=G(),N9r=Qi(),A9r=M(),O9r=PL(),S9r=RL(),T9r=ML(),L9r=BL(),I9r=.5641895835477563,P9r=2.404825557695773,_9r=5.520078110286311,R9r=616,F9r=-.0014244423042272315,M9r=1413,C9r=.0005468602863106496,$i=[0,0];function B9r(r){var e,t,i,n,a,s;return r<0&&(r=-r),r===A9r?0:r===0?1:r<=4?(a=r*r,n=O9r(a),s=(r+P9r)*(r-R9r/256-F9r),s*n):r<=8?(a=1-r*r/64,n=S9r(a),s=(r+_9r)*(r-M9r/256-C9r),s*n):(a=8/r,i=a*a,e=T9r(i),t=L9r(i),s=I9r/E9r(r),N9r($i,r),s*(e*($i[1]+$i[0])-a*t*($i[0]-$i[1])))}jL.exports=B9r});var e1=u((aDr,GL)=>{"use strict";var j9r=VL();GL.exports=j9r});var ba=u((uDr,UL)=>{"use strict";var V9r=1.772453850905516;UL.exports=V9r});var HL=u((sDr,WL)=>{"use strict";function G9r(r){var e,t,i;return r===0?-.03405537391318949:(r<0?e=-r:e=r,e<=1?(t=-14258509801366644e-5+r*(667810412614924e-5+r*(-11548696764841276e-8+r*(980629.0409895825+r*(-4461.579298277507+r*(10.650724020080236+r*-.010767857011487301))))),i=41868604460820176e-4+r*(4209190228258013e-5+r*(20228375140097034e-8+r*(591176.1449417479+r*(1074.227223951738+r*(1+r*0)))))):(r=1/r,t=-.010767857011487301+r*(10.650724020080236+r*(-4461.579298277507+r*(980629.0409895825+r*(-11548696764841276e-8+r*(667810412614924e-5+r*-14258509801366644e-5))))),i=0+r*(1+r*(1074.227223951738+r*(591176.1449417479+r*(20228375140097034e-8+r*(4209190228258013e-5+r*41868604460820176e-4)))))),t/i)}WL.exports=G9r});var DL=u((oDr,kL)=>{"use strict";function U9r(r){var e,t,i;return r===0?-.010158790774176108:(r<0?e=-r:e=r,e<=1?(t=-0x3e45840c066730+r*(16608531731299018e-1+r*(-36658018905416664e-3+r*(3558066567091062e-4+r*(-18113931269860668e-7+r*(5079326614801118e-9+r*(-7502.334222078161+r*4.6179191852758255)))))),i=1725390588844768e3+r*(0x3cda8dbce6f4c4+r*(8489934616548142e-2+r*(27622777286244086e-5+r*(6487250289959639e-7+r*(1.1267125065029138e6+r*(1388.6978985861358+r*1))))))):(r=1/r,t=4.6179191852758255+r*(-7502.334222078161+r*(5079326614801118e-9+r*(-18113931269860668e-7+r*(3558066567091062e-4+r*(-36658018905416664e-3+r*(16608531731299018e-1+r*-0x3e45840c066730)))))),i=1+r*(1388.6978985861358+r*(1.1267125065029138e6+r*(6487250289959639e-7+r*(27622777286244086e-5+r*(8489934616548142e-2+r*(0x3cda8dbce6f4c4+r*1725390588844768e3))))))),t/i)}kL.exports=U9r});var JL=u((vDr,XL)=>{"use strict";function W9r(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}XL.exports=W9r});var YL=u((fDr,zL)=>{"use strict";function H9r(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}zL.exports=H9r});var QL=u((lDr,ZL)=>{"use strict";var k9r=G(),D9r=Z(),X9r=Qi(),J9r=M(),z9r=ba(),Y9r=HL(),Z9r=DL(),Q9r=JL(),$9r=YL(),K9r=3.8317059702075125,x9r=7.015586669815619,rgr=981,egr=-.0003252797924876844,tgr=1796,igr=-38330184381246464e-21,Ki=[0,0];function ngr(r){var e,t,i,n,a,s,o,v;return v=D9r(r),r===0||v===J9r?0:(v<=4?(s=r*r,a=Y9r(s),o=v*(v+K9r)*(v-rgr/256-egr),e=o*a):v<=8?(s=r*r,a=Z9r(s),o=v*(v+x9r)*(v-tgr/256-igr),e=o*a):(s=8/v,n=s*s,t=Q9r(n),i=$9r(n),o=1/(k9r(v)*z9r),X9r(Ki,v),e=o*(t*(Ki[0]-Ki[1])+s*i*(Ki[0]+Ki[1]))),r<0&&(e*=-1),e)}ZL.exports=ngr});var t1=u((cDr,$L)=>{"use strict";var agr=QL();$L.exports=agr});var xL=u((pDr,KL)=>{"use strict";function ugr(r){var e,t,i;return r===0?.18214429522164177:(r<0?e=-r:e=r,e<=1?(t=10723538782003177e-5+r*(-837162554512605e-5+r*(2042227435737662e-7+r*(-212875484744018e-8+r*(10102.532948020907+r*-18.402381979244993)))),i=5887386573899703e-4+r*(8161718777729036e-6+r*(55662956624278255e-9+r*(238893.93209447255+r*(664.7598668924019+r*1))))):(r=1/r,t=-18.402381979244993+r*(10102.532948020907+r*(-212875484744018e-8+r*(2042227435737662e-7+r*(-837162554512605e-5+r*10723538782003177e-5)))),i=1+r*(664.7598668924019+r*(238893.93209447255+r*(55662956624278255e-9+r*(8161718777729036e-6+r*5887386573899703e-4))))),t/i)}KL.exports=ugr});var eI=u((gDr,rI)=>{"use strict";function sgr(r){var e,t,i;return r===0?-.051200622130023854:(r<0?e=-r:e=r,e<=1?(t=-2221397696756619e-2+r*(-5510743520672264e-4+r*(4360009863860306e-5+r*(-6959043939461962e-7+r*(4690528861167863e-9+r*(-14566.865832663636+r*17.427031242901595))))),i=4338614658070726e-1+r*(5426682441941234e-3+r*(3401510384997124e-5+r*(1396020277098683e-7+r*(406699.82352539554+r*(830.3085761207029+r*1)))))):(r=1/r,t=17.427031242901595+r*(-14566.865832663636+r*(4690528861167863e-9+r*(-6959043939461962e-7+r*(4360009863860306e-5+r*(-5510743520672264e-4+r*-2221397696756619e-2))))),i=1+r*(830.3085761207029+r*(406699.82352539554+r*(1396020277098683e-7+r*(3401510384997124e-5+r*(5426682441941234e-3+r*4338614658070726e-1)))))),t/i)}rI.exports=sgr});var iI=u((mDr,tI)=>{"use strict";function ogr(r){var e,t,i;return r===0?-.023356489432789604:(r<0?e=-r:e=r,e<=1?(t=-8072872690515021+r*(6701664186917324e-1+r*(-12829912364088687e-5+r*(-19363051266772083e-5+r*(21958827170518103e-7+r*(-10085539923498211e-9+r*(21363.5341693139+r*-17.439661319197498)))))),i=0x4cbf33e862b0ac0+r*(0xdf3ce698dfcbf+r*(225983779240429e-1+r*(8692612110420982e-5+r*(24727219475672302e-8+r*(539247.3920976806+r*(879.0336216812844+r*1))))))):(r=1/r,t=-17.439661319197498+r*(21363.5341693139+r*(-10085539923498211e-9+r*(21958827170518103e-7+r*(-19363051266772083e-5+r*(-12829912364088687e-5+r*(6701664186917324e-1+r*-8072872690515021)))))),i=1+r*(879.0336216812844+r*(539247.3920976806+r*(24727219475672302e-8+r*(8692612110420982e-5+r*(225983779240429e-1+r*(0xdf3ce698dfcbf+r*0x4cbf33e862b0ac0))))))),t/i)}tI.exports=ogr});var aI=u((qDr,nI)=>{"use strict";function vgr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=22779.090197304686+r*(41345.38663958076+r*(21170.523380864943+r*(3480.648644324927+r*(153.76201909008356+r*.8896154842421046)))),i=22779.090197304686+r*(41370.41249551042+r*(21215.350561880117+r*(3502.8735138235606+r*(157.11159858080893+r*1))))):(r=1/r,t=.8896154842421046+r*(153.76201909008356+r*(3480.648644324927+r*(21170.523380864943+r*(41345.38663958076+r*22779.090197304686)))),i=1+r*(157.11159858080893+r*(3502.8735138235606+r*(21215.350561880117+r*(41370.41249551042+r*22779.090197304686))))),t/i)}nI.exports=vgr});var sI=u((yDr,uI)=>{"use strict";function fgr(r){var e,t,i;return r===0?-.015625:(r<0?e=-r:e=r,e<=1?(t=-89.22660020080009+r*(-185.91953644342993+r*(-111.83429920482737+r*(-22.300261666214197+r*(-1.244102674583564+r*-.008803330304868075)))),i=5710.502412851206+r*(11951.131543434614+r*(7264.278016921102+r*(1488.7231232283757+r*(90.59376959499312+r*1))))):(r=1/r,t=-.008803330304868075+r*(-1.244102674583564+r*(-22.300261666214197+r*(-111.83429920482737+r*(-185.91953644342993+r*-89.22660020080009)))),i=1+r*(90.59376959499312+r*(1488.7231232283757+r*(7264.278016921102+r*(11951.131543434614+r*5710.502412851206))))),t/i)}uI.exports=fgr});var cI=u((hDr,lI)=>{"use strict";var i1=B(),lgr=G(),cgr=Lr(),pgr=ba(),ggr=z(),mgr=M(),qgr=Qi(),n1=e1(),ygr=xL(),hgr=eI(),dgr=iI(),wgr=aI(),bgr=sI(),Egr=1/pgr,a1=2/cgr,oI=.8935769662791675,vI=3.957678419314858,fI=7.086051060301773,Ngr=228,Agr=.0029519662791675214,Ogr=1013,Sgr=.0006471693148578684,Tgr=1814,Lgr=.00011356030177269763,xi=[0,0];function Igr(r){var e,t,i,n,a,s,o;return r<0?NaN:r===0?ggr:r===mgr?0:r<=3?(a=r*r,s=i1(r/oI)*n1(r)*a1,n=ygr(a),o=(r+oI)*(r-Ngr/256-Agr),s+o*n):r<=5.5?(a=r*r,s=i1(r/vI)*n1(r)*a1,n=hgr(a),o=(r+vI)*(r-Ogr/256-Sgr),s+o*n):r<=8?(a=r*r,s=i1(r/fI)*n1(r)*a1,n=dgr(a),o=(r+fI)*(r-Tgr/256-Lgr),s+o*n):(a=8/r,i=a*a,e=wgr(i),t=bgr(i),o=Egr/lgr(r),qgr(xi,r),o*(e*(xi[0]-xi[1])+a*t*(xi[1]+xi[0])))}lI.exports=Igr});var gI=u((dDr,pI)=>{"use strict";var Pgr=cI();pI.exports=Pgr});var qI=u((wDr,mI)=>{"use strict";function _gr(r){var e,t,i;return r===0?.13187550549740895:(r<0?e=-r:e=r,e<=1?(t=4053572661257955e-2+r*(5470861171652543e-3+r*(-375959744978196e-3+r*(7214454821450256e-6+r*(-591574799974084e-7+r*(221579.5322228026+r*-317.1442466004613))))),i=3073787392107929e-1+r*(4127228620040646e-3+r*(27800352738690586e-6+r*(12250435122182964e-8+r*(381364.70753052575+r*(820.7990816839387+r*1)))))):(r=1/r,t=-317.1442466004613+r*(221579.5322228026+r*(-591574799974084e-7+r*(7214454821450256e-6+r*(-375959744978196e-3+r*(5470861171652543e-3+r*4053572661257955e-2))))),i=1+r*(820.7990816839387+r*(381364.70753052575+r*(12250435122182964e-8+r*(27800352738690586e-6+r*(4127228620040646e-3+r*3073787392107929e-1)))))),t/i)}mI.exports=_gr});var hI=u((bDr,yI)=>{"use strict";function Rgr(r){var e,t,i;return r===0?.021593919914419626:(r<0?e=-r:e=r,e<=1?(t=0x9fcaed579ed86000+r*(-5680809457472421e3+r*(-0x53fb01dd8596c0+r*(40686275289804745e-1+r*(-59530713129741984e-3+r*(3745367396243849e-4+r*(-11957961912070618e-7+r*(1.9153806858264203e6+r*-1233.7180442012952))))))),i=5332184431331618e5+r*(5696819882285718e3+r*(0x6d8e405cd717f0+r*(1118701006585697e-1+r*(30221766852960406e-5+r*(6355031808708892e-7+r*(1.0453748201934079e6+r*(1285.516484932161+r*1)))))))):(r=1/r,t=-1233.7180442012952+r*(1.9153806858264203e6+r*(-11957961912070618e-7+r*(3745367396243849e-4+r*(-59530713129741984e-3+r*(40686275289804745e-1+r*(-0x53fb01dd8596c0+r*(-5680809457472421e3+r*0x9fcaed579ed86000))))))),i=1+r*(1285.516484932161+r*(1.0453748201934079e6+r*(6355031808708892e-7+r*(30221766852960406e-5+r*(1118701006585697e-1+r*(0x6d8e405cd717f0+r*(5696819882285718e3+r*5332184431331618e5)))))))),t/i)}yI.exports=Rgr});var wI=u((EDr,dI)=>{"use strict";function Fgr(r){var e,t,i;return r===0?1:(r<0?e=-r:e=r,e<=1?(t=-4435757816794128e-9+r*(-9942246505077641e-9+r*(-6603373248364939e-9+r*(-1.5235293511811374e6+r*(-109824.05543459347+r*(-1611.6166443246102+r*0))))),i=-4435757816794128e-9+r*(-9934124389934586e-9+r*(-6.5853394797230875e6+r*(-1.5118095066341609e6+r*(-107263.8599110382+r*(-1455.0094401904962+r*1)))))):(r=1/r,t=0+r*(-1611.6166443246102+r*(-109824.05543459347+r*(-1.5235293511811374e6+r*(-6603373248364939e-9+r*(-9942246505077641e-9+r*-4435757816794128e-9))))),i=1+r*(-1455.0094401904962+r*(-107263.8599110382+r*(-1.5118095066341609e6+r*(-6.5853394797230875e6+r*(-9934124389934586e-9+r*-4435757816794128e-9)))))),t/i)}dI.exports=Fgr});var EI=u((NDr,bI)=>{"use strict";function Mgr(r){var e,t,i;return r===0?.046875:(r<0?e=-r:e=r,e<=1?(t=33220.913409857225+r*(85145.1606753357+r*(66178.83658127084+r*(18494.262873223866+r*(1706.375429020768+r*(35.26513384663603+r*0))))),i=708712.8194102874+r*(1.8194580422439973e6+r*(1419460669603721e-9+r*(400294.43582266977+r*(37890.2297457722+r*(863.8367769604992+r*1)))))):(r=1/r,t=0+r*(35.26513384663603+r*(1706.375429020768+r*(18494.262873223866+r*(66178.83658127084+r*(85145.1606753357+r*33220.913409857225))))),i=1+r*(863.8367769604992+r*(37890.2297457722+r*(400294.43582266977+r*(1419460669603721e-9+r*(1.8194580422439973e6+r*708712.8194102874)))))),t/i)}bI.exports=Mgr});var II=u((ADr,LI)=>{"use strict";var NI=B(),Cgr=G(),Bgr=Lr(),jgr=ba(),Vgr=z(),Ggr=M(),Ugr=Qi(),AI=t1(),Wgr=qI(),Hgr=hI(),kgr=wI(),Dgr=EI(),Xgr=1/jgr,OI=2/Bgr,SI=2.197141326031017,TI=5.429681040794135,Jgr=562,zgr=.001828826031017035,Ygr=1390,Zgr=-6459205864867228e-21,rn=[0,0];function Qgr(r){var e,t,i,n,a,s,o;return r<0?NaN:r===0?Vgr:r===Ggr?0:r<=4?(a=r*r,s=NI(r/SI)*AI(r)*OI,n=Wgr(a),o=(r+SI)*(r-Jgr/256-zgr)/r,s+o*n):r<=8?(a=r*r,s=NI(r/TI)*AI(r)*OI,n=Hgr(a),o=(r+TI)*(r-Ygr/256-Zgr)/r,s+o*n):(a=8/r,i=a*a,e=kgr(i),t=Dgr(i),o=Xgr/Cgr(r),Ugr(rn,r),o*(a*t*(rn[0]-rn[1])-e*(rn[0]+rn[1])))}LI.exports=Qgr});var _I=u((ODr,PI)=>{"use strict";var $gr=II();PI.exports=$gr});var u1=u((SDr,RI)=>{"use strict";var Kgr=.9189385332046728;RI.exports=Kgr});var FI=u((TDr,xgr)=>{xgr.exports=[1.2020569031595942,1.03692775514337,1.008349277381923,1.0020083928260821,1.0004941886041194,1.0001227133475785,1.000030588236307,1.0000076371976379,1.0000019082127165,1.0000004769329869,1.000000119219926,1.0000000298035034,1.0000000074507118,1.0000000018626598,1.0000000004656628,1.0000000001164155,1.0000000000291038,1.000000000007276,1.000000000001819,1.0000000000004547,1.0000000000001137,1.0000000000000284,1.000000000000007,1.0000000000000018,1.0000000000000004,1.0000000000000002,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]});var MI=u((LDr,rmr)=>{rmr.exports=[-.5,1.6449340668482264,1.0823232337111381,1.0173430619844492,1.0040773561979444,1.000994575127818,1.000246086553308,1.0000612481350588,1.0000152822594086,1.000003817293265,1.0000009539620338,1.0000002384505027,1.000000059608189,1.0000000149015549,1.000000003725334,1.0000000009313275,1.000000000232831,1.0000000000582077,1.000000000014552,1.000000000003638,1.0000000000009095,1.0000000000002274,1.0000000000000568,1.0000000000000142,1.0000000000000036,1.0000000000000009,1.0000000000000002,1]});var CI=u((IDr,emr)=>{emr.exports=[1,.16666666666666666,-.03333333333333333,.023809523809523808,-.03333333333333333,.07575757575757576,-.2531135531135531,1.1666666666666667,-7.092156862745098,54.971177944862156,-529.1242424242424,6192.123188405797,-86580.25311355312,1.4255171666666667e6,-27298231067816094e-9,6015808739006424e-7,-15116315767092157e-6,4296146430611667e-4,-13711655205088332e-3,4883323189735932e-1,-0x448e22fd0e7564,0xbae4b5e068b9980,-40338071854059454e3,21150748638081993e5,-12086626522296526e7,7500866746076964e9,-5038778101481069e11,36528776484818122e12,-2849876930245088e15,23865427499683627e16,-21399949257225335e18,20500975723478097e20,-2093800591134638e23,22752696488463515e24,-26257710286239577e26,3212508210271803e29,-4159827816679471e31,5692069548203528e33,-8218362941978458e35,12502904327166994e37,-2001558323324837e40,33674982915364376e41,-5947097050313545e44,11011910323627977e46,-21355259545253502e48,43328896986641194e50,-9188552824166933e53,20346896776329074e55,-4700383395803573e58,1131804344548425e61,-28382249570693707e62,7406424897967885e65,-20096454802756605e67,5665717005080594e70,-16584511154136216e72,5036885995049238e75,-15861468237658186e77,51756743617545625e79,-17488921840217116e82,6116051999495218e85,-22122776912707833e87,8272277679877097e90,-3195892511141571e93,12750082223387793e95,-5250092308677413e98,22301817894241627e100,-976845219309552e104,4409836197845295e106,-2050857088646409e109,9821443327979128e111,-4841260079820888e114,24553088801480982e116,-12806926804084748e119,6867616710466858e122,-37846468581969106e124,2142610125066529e128,-12456727137183695e130,7434578755100016e133,-45535795304641704e135,2861211281685887e139,-1843772355203387e142,12181154536221047e144,-8248218718531412e147,5722587793783294e150,-40668530525059105e152,29596092064642052e155,-22049522565189457e158,168125970728896e163,-13116736213556958e164,10467894009478039e167,-8543289357883371e170,7128782132248655e173,-608029314555359e177,5299677642484992e179,-4719425916874586e182,4292841379140298e185,-39876744968232205e187,3781978041935888e191,-3661423368368119e194,3617609027237286e197,-3647077264519136e200,3750875543645441e203,-3934586729643903e206,4208821114819008e209,-4590229622061792e212,5103172577262957e215,-5782276230365695e218,6676248216783588e221,-7853530764445042e224,9410689406705872e227,-11484933873465185e230,14272958742848785e233,-1805955958690931e237,23261535307660807e239,-30495751715499594e242,4068580607643398e246,-5523103132197436e249,76277279396434395e251,-10715571119697886e255,15310200895969188e258,-22244891682179836e261,3286267919069014e265,-4935592895596035e268,7534957120083251e271,-11691485154584178e274,1843526146783894e278,-2953682617296808e281,4807932127750157e284,-7950212504588525e287,13352784187354634e290]});var jI=u((PDr,BI)=>{"use strict";function tmr(r){var e,t,i;return r===0?.2433929443359375:(r<0?e=-r:e=r,e<=1?(t=.2433929443359375+r*(-.4909247051635357+r*(.055761621477604675+r*(-.003209124988790859+r*(.0004515345286457964+r*-9332412703570615e-21)))),i=1+r*(-.27996033431034445+r*(.04196762233099861+r*(-.00413421406552171+r*(.00024978985622317937+r*-10185578841856403e-21))))):(r=1/r,t=-9332412703570615e-21+r*(.0004515345286457964+r*(-.003209124988790859+r*(.055761621477604675+r*(-.4909247051635357+r*.2433929443359375)))),i=-10185578841856403e-21+r*(.00024978985622317937+r*(-.00413421406552171+r*(.04196762233099861+r*(-.27996033431034445+r*1))))),t/i)}BI.exports=tmr});var GI=u((_Dr,VI)=>{"use strict";function imr(r){var e,t,i;return r===0?.5772156649015329:(r<0?e=-r:e=r,e<=1?(t=.5772156649015329+r*(.24321064694010716+r*(.04173646739882165+r*(.003902520870728433+r*(.0002496063671518772+r*1101084409767329e-20)))),i=1+r*(.29520127712663174+r*(.043460910607305496+r*(.004349305820858264+r*(.0002557842261404885+r*10991819782396113e-21))))):(r=1/r,t=1101084409767329e-20+r*(.0002496063671518772+r*(.003902520870728433+r*(.04173646739882165+r*(.24321064694010716+r*.5772156649015329)))),i=10991819782396113e-21+r*(.0002557842261404885+r*(.004349305820858264+r*(.043460910607305496+r*(.29520127712663174+r*1))))),t/i)}VI.exports=imr});var WI=u((RDr,UI)=>{"use strict";function nmr(r){var e,t,i;return r===0?-.053725830002359504:(r<0?e=-r:e=r,e<=1?(t=-.053725830002359504+r*(.04451634732923656+r*(.012867767353451996+r*(.0009754177045739176+r*(7698751015736541e-20+r*(3280325100003831e-21+r*0))))),i=1+r*(.3338319455303405+r*(.048779843129140764+r*(.0047903970857355845+r*(.00027077670395633634+r*(10695186753205734e-21+r*23627662397497864e-24)))))):(r=1/r,t=0+r*(3280325100003831e-21+r*(7698751015736541e-20+r*(.0009754177045739176+r*(.012867767353451996+r*(.04451634732923656+r*-.053725830002359504))))),i=23627662397497864e-24+r*(10695186753205734e-21+r*(.00027077670395633634+r*(.0047903970857355845+r*(.048779843129140764+r*(.3338319455303405+r*1)))))),t/i)}UI.exports=nmr});var kI=u((FDr,HI)=>{"use strict";function amr(r){var e,t,i;return r===0?-2.497101906022594:(r<0?e=-r:e=r,e<=1?(t=-2.497101906022594+r*(-2.600133018094757+r*(-.9392604353771099+r*(-.13844861799574154+r*(-.007017212405498024+r*(-22925731059489392e-21+r*(0+r*(0+r*0))))))),i=1+r*(.7060390259377451+r*(.15739599649558628+r*(.010611795097684508+r*(-36910273311764616e-21+r*(49340956392759e-19+r*(-23405548702528722e-23+r*(7188337293654598e-24+r*-11292001134749475e-26)))))))):(r=1/r,t=0+r*(0+r*(0+r*(-22925731059489392e-21+r*(-.007017212405498024+r*(-.13844861799574154+r*(-.9392604353771099+r*(-2.600133018094757+r*-2.497101906022594))))))),i=-11292001134749475e-26+r*(7188337293654598e-24+r*(-23405548702528722e-23+r*(49340956392759e-19+r*(-36910273311764616e-21+r*(.010611795097684508+r*(.15739599649558628+r*(.7060390259377451+r*1)))))))),t/i)}HI.exports=amr});var XI=u((MDr,DI)=>{"use strict";function umr(r){var e,t,i;return r===0?-4.785580284951356:(r<0?e=-r:e=r,e<=1?(t=-4.785580284951356+r*(-1.8919736488197254+r*(-.21140713487441282+r*(-.0001892047582600767+r*(.0011514092388917874+r*(6399492042131645e-20+r*(1393489324453249e-21+r*(0+r*0))))))),i=1+r*(.24434533737818856+r*(.008733707544922887+r*(-.0011759276533443448+r*(-7437436828999331e-20+r*(-21750464515767985e-22+r*(4710012640030765e-24+r*(-8333784406253855e-26+r*6998415452048457e-28)))))))):(r=1/r,t=0+r*(0+r*(1393489324453249e-21+r*(6399492042131645e-20+r*(.0011514092388917874+r*(-.0001892047582600767+r*(-.21140713487441282+r*(-1.8919736488197254+r*-4.785580284951356))))))),i=6998415452048457e-28+r*(-8333784406253855e-26+r*(4710012640030765e-24+r*(-21750464515767985e-22+r*(-7437436828999331e-20+r*(-.0011759276533443448+r*(.008733707544922887+r*(.24434533737818856+r*1)))))))),t/i)}DI.exports=umr});var zI=u((CDr,JI)=>{"use strict";function smr(r){var e,t,i;return r===0?-10.39489505733089:(r<0?e=-r:e=r,e<=1?(t=-10.39489505733089+r*(-2.858272196711067+r*(-.34772826653924577+r*(-.025115606465534634+r*(-.001194591734169687+r*(-3825293235079675e-20+r*(-7855236337967234e-22+r*-8214657090954655e-24)))))),i=1+r*(.2081963335726719+r*(.019568765731720502+r*(.0011107963810248593+r*(40850774626603926e-21+r*(9555611230656935e-22+r*(1185071534740229e-23+r*2226094836273526e-30))))))):(r=1/r,t=-8214657090954655e-24+r*(-7855236337967234e-22+r*(-3825293235079675e-20+r*(-.001194591734169687+r*(-.025115606465534634+r*(-.34772826653924577+r*(-2.858272196711067+r*-10.39489505733089)))))),i=2226094836273526e-30+r*(1185071534740229e-23+r*(9555611230656935e-22+r*(40850774626603926e-21+r*(.0011107963810248593+r*(.019568765731720502+r*(.2081963335726719+r*1))))))),t/i)}JI.exports=smr});var KI=u((BDr,$I)=>{"use strict";var omr=b(),vmr=Ar(),fmr=Z(),Ea=sr(),lmr=rr(),cmr=jt(),pmr=Bi(),YI=Ci(),ZI=x(),gmr=B(),mmr=M(),qmr=z(),QI=Pe(),ymr=Ws(),hmr=u1(),dmr=FI(),wmr=MI(),bmr=CI(),Emr=jI(),Nmr=GI(),Amr=WI(),Omr=kI(),Smr=XI(),Tmr=zI(),Lmr=129,Imr=170,Pmr=709,_mr=1.2433929443359375,Rmr=.6986598968505859;function s1(r){var e,t,i,n,a,s;if(omr(r))return NaN;if(r===1)return NaN;if(r>=56)return 1;if(vmr(r)&&(n=r|0,n===r))if(n<0){if(i=-n|0,(i&1)===0)return 0;if(s=(i+1)/2|0,s<=Lmr)return-bmr[s]/(i+1)}else return(n&1)===0?wmr[n/2]:dmr[(n-3)/2];return fmr(r)<ymr?-.5-hmr*r:(t=1-r,r<0?lmr(r/2)===r/2?0:(e=r,r=t,t=e,r>Imr?(e=YI(.5*t)*2*s1(r),a=pmr(r),a-=r*gmr(QI),a>Pmr?e<0?qmr:mmr:e*Ea(a)):YI(.5*t)*2*ZI(QI,-r)*cmr(r)*s1(r)):r<1?(e=Emr(t),e-=_mr,e+=t,e/=t,e):r<=2?(t=-t,e=1/t,e+Nmr(t)):r<=4?(e=Rmr+1/-t,e+Amr(r-2)):r<=7?(e=Omr(r-4),1+Ea(e)):r<15?(e=Smr(r-7),1+Ea(e)):r<36?(e=Tmr(r-15),1+Ea(e)):1+ZI(2,-r))}$I.exports=s1});var rP=u((jDr,xI)=>{"use strict";var Fmr=KI();xI.exports=Fmr});var tP=u((VDr,eP)=>{"use strict";var Y={};Y.abs=Z();Y.abs2=sT();Y.acos=Zi();Y.acosh=ST();Y.acot=PT();Y.acovercos=MT();Y.acoversin=VT();Y.acsc=HT();Y.acsch=$T();Y.ahavercos=eL();Y.ahaversin=aL();Y.asin=bt();Y.asinh=xo();Y.atan=la();Y.atanh=fL();Y.avercos=gL();Y.aversin=hL();Y.besselj0=e1();Y.besselj1=t1();Y.bessely0=gI();Y.bessely1=_I();Y.zeta=rP();eP.exports=Y});var aP=u((GDr,nP)=>{"use strict";var iP=b(),Mmr=B(),Cmr=Pe(),Bmr=ro();function jmr(r,e){return iP(r)||iP(e)||e<=0?NaN:.5*Mmr(Cmr*Bmr*e*e)}nP.exports=jmr});var sP=u((UDr,uP)=>{"use strict";var Vmr=aP();uP.exports=Vmr});var fP=u((WDr,vP)=>{"use strict";var Gmr=sr(),oP=x(),Umr=G(),Wmr=Pe(),Hmr=M(),o1=b();function kmr(r,e,t){var i,n,a;return o1(r)||o1(e)||o1(t)||t<0?NaN:t===0?r===e?Hmr:0:(i=oP(t,2),n=1/Umr(i*Wmr),a=-1/(2*i),n*Gmr(a*oP(r-e,2)))}vP.exports=kmr});var pP=u((HDr,cP)=>{"use strict";var Dmr=M(),lP=b();function Xmr(r,e){return lP(r)||lP(e)?NaN:r===e?Dmr:0}cP.exports=Xmr});var qP=u((kDr,mP)=>{"use strict";var Jmr=I(),zmr=M(),gP=b();function Ymr(r){if(gP(r))return Jmr(NaN);return e;function e(t){return gP(t)?NaN:t===r?zmr:0}}mP.exports=Ymr});var dP=u((DDr,hP)=>{"use strict";var Zmr=w(),yP=pP(),Qmr=qP();Zmr(yP,"factory",Qmr);hP.exports=yP});var EP=u((XDr,bP)=>{"use strict";var $mr=I(),Kmr=dP().factory,v1=b(),xmr=G(),rqr=sr(),wP=x(),eqr=Pe();function tqr(r,e){var t,i,n;if(v1(r)||v1(e)||e<0)return $mr(NaN);if(e===0)return Kmr(r);return t=wP(e,2),i=1/xmr(t*eqr),n=-1/(2*t),a;function a(s){return v1(s)?NaN:i*rqr(n*wP(s-r,2))}}bP.exports=tqr});var OP=u((JDr,AP)=>{"use strict";var iqr=w(),NP=fP(),nqr=EP();iqr(NP,"factory",nqr);AP.exports=NP});var TP=u((zDr,SP)=>{"use strict";var Na={};Na.normal={};Na.normal.entropy=sP();Na.normal.pdf=OP();SP.exports=Na});var IP=u((YDr,LP)=>{"use strict";var aqr=X().isPrimitive,uqr=S();function sqr(r){if(!aqr(r))throw new TypeError(uqr("invalid argument. First argument must be a string. Value: `%s`.",r));return r===""?"":r.charAt(0).toUpperCase()+r.slice(1)}LP.exports=sqr});var Aa=u((ZDr,PP)=>{"use strict";var oqr=IP();PP.exports=oqr});var RP=u((QDr,_P)=>{"use strict";var vqr=X().isPrimitive,fqr=S();function lqr(r){if(!vqr(r))throw new TypeError(fqr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toLowerCase()}_P.exports=lqr});var Kt=u(($Dr,FP)=>{"use strict";var cqr=RP();FP.exports=cqr});var BP=u((KDr,CP)=>{"use strict";var pqr=X().isPrimitive,gqr=S(),MP=/[-\/\\^$*+?.()|[\]{}]/g;function mqr(r){var e,t,i;if(!pqr(r))throw new TypeError(gqr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(MP,"\\$&"):(t=r.substring(1,i),t=t.replace(MP,"\\$&"),r=r[0]+t+r.substring(i),r)}CP.exports=mqr});var VP=u((xDr,jP)=>{"use strict";var qqr=BP();jP.exports=qqr});var UP=u((rXr,GP)=>{"use strict";var yqr=RegExp.prototype.exec;GP.exports=yqr});var HP=u((eXr,WP)=>{"use strict";var hqr=UP();function dqr(r){try{return hqr.call(r),!0}catch{return!1}}WP.exports=dqr});var DP=u((tXr,kP)=>{"use strict";var wqr=Ot(),bqr=K(),Eqr=HP(),Nqr=wqr();function Aqr(r){return typeof r=="object"?r instanceof RegExp?!0:Nqr?Eqr(r):bqr(r)==="[object RegExp]":!1}kP.exports=Aqr});var JP=u((iXr,XP)=>{"use strict";var Oqr=DP();XP.exports=Oqr});var YP=u((nXr,zP)=>{"use strict";var Sqr=VP(),Tqr=L(),f1=X().isPrimitive,Lqr=JP(),l1=S();function Iqr(r,e,t){if(!f1(r))throw new TypeError(l1("invalid argument. First argument must be a string. Value: `%s`.",r));if(f1(e))e=Sqr(e),e=new RegExp(e,"g");else if(!Lqr(e))throw new TypeError(l1("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!f1(t)&&!Tqr(t))throw new TypeError(l1("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",t));return r.replace(e,t)}zP.exports=Iqr});var Et=u((aXr,ZP)=>{"use strict";var Pqr=YP();ZP.exports=Pqr});var $P=u((uXr,QP)=>{"use strict";var _qr=X().isPrimitive,Rqr=Et(),Fqr=S(),Mqr=/^[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*([\S\s]*?)[\u0020\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]*$/;function Cqr(r){if(!_qr(r))throw new TypeError(Fqr("invalid argument. Must provide a string. Value: `%s`.",r));return Rqr(r,Mqr,"$1")}QP.exports=Cqr});var xt=u((sXr,KP)=>{"use strict";var Bqr=$P();KP.exports=Bqr});var r_=u((oXr,xP)=>{"use strict";var jqr=X().isPrimitive,Vqr=Aa(),Gqr=Kt(),Oa=Et(),Uqr=S(),Wqr=xt(),Hqr=/\s+/g,kqr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Dqr=/(?:\s|^)([^\s]+)(?=\s|$)/g,Xqr=/([a-z0-9])([A-Z])/g;function Jqr(r,e,t){return e=Gqr(e),t===0?e:Vqr(e)}function zqr(r){if(!jqr(r))throw new TypeError(Uqr("invalid argument. First argument must be a string. Value: `%s`.",r));return r=Oa(r,kqr," "),r=Oa(r,Hqr," "),r=Oa(r,Xqr,"$1 $2"),r=Wqr(r),r=Oa(r,Dqr,Jqr),r}xP.exports=zqr});var t_=u((vXr,e_)=>{"use strict";var Yqr=r_();e_.exports=Yqr});var n_=u((fXr,i_)=>{"use strict";var Zqr=X().isPrimitive,Qqr=S();function $qr(r){if(!Zqr(r))throw new TypeError(Qqr("invalid argument. Must provide a string. Value: `%s`.",r));return r.toUpperCase()}i_.exports=$qr});var c1=u((lXr,a_)=>{"use strict";var Kqr=n_();a_.exports=Kqr});var s_=u((cXr,u_)=>{"use strict";var xqr=X().isPrimitive,ryr=c1(),p1=Et(),eyr=S(),tyr=xt(),iyr=/\s+/g,nyr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,ayr=/([a-z0-9])([A-Z])/g;function uyr(r){if(!xqr(r))throw new TypeError(eyr("invalid argument. Must provide a string. Value: `%s`.",r));return r=p1(r,nyr," "),r=p1(r,ayr,"$1 $2"),r=tyr(r),r=p1(r,iyr,"_"),ryr(r)}u_.exports=uyr});var v_=u((pXr,o_)=>{"use strict";var syr=s_();o_.exports=syr});var l_=u((gXr,f_)=>{"use strict";var oyr=X().isPrimitive,vyr=Kt(),g1=Et(),fyr=S(),lyr=xt(),cyr=/\s+/g,pyr=/[!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,gyr=/([a-z0-9])([A-Z])/g;function myr(r){if(!oyr(r))throw new TypeError(fyr("invalid argument. Must provide a string. Value: `%s`.",r));return r=g1(r,pyr," "),r=g1(r,gyr,"$1 $2"),r=lyr(r),r=g1(r,cyr,"-"),vyr(r)}f_.exports=myr});var p_=u((mXr,c_)=>{"use strict";var qyr=l_();c_.exports=qyr});var m_=u((qXr,g_)=>{"use strict";var yyr=X().isPrimitive,hyr=Aa(),dyr=Kt(),Sa=Et(),wyr=S(),byr=xt(),Eyr=/\s+/g,Nyr=/[-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Ayr=/(?:\s|^)([^\s]+)(?=\s|$)/g,Oyr=/([a-z0-9])([A-Z])/g;function Syr(r,e){return hyr(dyr(e))}function Tyr(r){if(!yyr(r))throw new TypeError(wyr("invalid argument. First argument must be a string. Value: `%s`.",r));return r=Sa(r,Nyr," "),r=Sa(r,Eyr," "),r=Sa(r,Oyr,"$1 $2"),r=byr(r),r=Sa(r,Ayr,Syr),r}g_.exports=Tyr});var y_=u((yXr,q_)=>{"use strict";var Lyr=m_();q_.exports=Lyr});var d_=u((hXr,h_)=>{"use strict";var Iyr=X().isPrimitive,Pyr=Kt(),m1=Et(),_yr=S(),Ryr=xt(),Fyr=/\s+/g,Myr=/[\-!"'(),–.:;<>?`{}|~\/\\\[\]_#$*&^@%]+/g,Cyr=/([a-z0-9])([A-Z])/g;function Byr(r){if(!Iyr(r))throw new TypeError(_yr("invalid argument. Must provide a string. Value: `%s`.",r));return r=m1(r,Myr," "),r=m1(r,Cyr,"$1 $2"),r=Ryr(r),r=m1(r,Fyr,"_"),Pyr(r)}h_.exports=Byr});var b_=u((dXr,w_)=>{"use strict";var jyr=d_();w_.exports=jyr});var A_=u((wXr,N_)=>{"use strict";var Vyr=T(),E_=A(),Gyr=ar().isPrimitive,Uyr=X().isPrimitive;function Wyr(r,e){return Vyr(e)?E_(e,"flags")&&(r.flags=e.flags,!Uyr(r.flags))?new TypeError("invalid option. `flags` option must be a string primitive. Option: `"+r.flags+"`."):E_(e,"capture")&&(r.capture=e.capture,!Gyr(r.capture))?new TypeError("invalid option. `capture` option must be a boolean primitive. Option: `"+r.capture+"`."):null:new TypeError("invalid argument. Options must be an object. Value: `"+e+"`.")}N_.exports=Wyr});var Ta=u((bXr,S_)=>{"use strict";var Hyr=A_(),O_=`[	
\v\f\r \x85\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]`;function kyr(r){var e,t;if(arguments.length>0){if(e={},t=Hyr(e,r),t)throw t;return e.capture?new RegExp("("+O_+")",e.flags):new RegExp(O_,e.flags)}return/[\u0009\u000A\u000B\u000C\u000D\u0020\u0085\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/}S_.exports=kyr});var L_=u((EXr,T_)=>{"use strict";var Dyr=Ta(),Xyr=Dyr({capture:!0});T_.exports=Xyr});var P_=u((NXr,I_)=>{"use strict";var Jyr=Ta(),zyr=Jyr();I_.exports=zyr});var F_=u((AXr,R_)=>{"use strict";var __=w(),q1=Ta(),Yyr=L_(),Zyr=P_();__(q1,"REGEXP",Zyr);__(q1,"REGEXP_CAPTURE",Yyr);R_.exports=q1});var C_=u((OXr,M_)=>{"use strict";var Qyr=X().isPrimitive,$yr=F_(),Kyr=S();function xyr(r){var e,t,i,n;if(!Qyr(r))throw new TypeError(Kyr("invalid argument. Must provide a string. Value: `%s`.",r));for(e=!0,t="",n=0;n<r.length;n++)i=r.charAt(n),$yr.REGEXP.test(i)?(t+=i,e=!0):e?(t+=i.toUpperCase(),e=!1):t+=i;return t}M_.exports=xyr});var j_=u((SXr,B_)=>{"use strict";var rhr=C_();B_.exports=rhr});var G_=u((TXr,V_)=>{"use strict";var ehr=X().isPrimitive,thr=S();function ihr(r){if(!ehr(r))throw new TypeError(thr("invalid argument. First argument must be a string. Value: `%s`.",r));return r===""?"":r.charAt(0).toLowerCase()+r.slice(1)}V_.exports=ihr});var W_=u((LXr,U_)=>{"use strict";var nhr=G_();U_.exports=nhr});var k_=u((IXr,H_)=>{"use strict";var jr={};jr.camelcase=t_();jr.capitalize=Aa();jr.constantcase=v_();jr.kebabcase=p_();jr.lowercase=Kt();jr.pascalcase=y_();jr.snakecase=b_();jr.startcase=j_();jr.uncapitalize=W_();jr.uppercase=c1();H_.exports=jr});var X_=u((PXr,D_)=>{"use strict";var ahr=Ee();function uhr(r,e,t,i){ahr(r,e,{configurable:!1,enumerable:!1,get:t,set:i})}D_.exports=uhr});var _=u((_Xr,J_)=>{"use strict";var shr=X_();J_.exports=shr});var Z_=u((RXr,Y_)=>{"use strict";var z_=65535;function ohr(r,e){var t,i,n,a,s,o;return r>>>=0,e>>>=0,n=r>>>16>>>0,a=e>>>16>>>0,s=(r&z_)>>>0,o=(e&z_)>>>0,t=s*o>>>0,i=n*o+s*a<<16>>>0,t+i>>>0}Y_.exports=ohr});var $_=u((FXr,Q_)=>{"use strict";var vhr=Z_();Q_.exports=vhr});var y1=u((MXr,K_)=>{"use strict";function fhr(r,e,t,i,n,a,s){var o,v,f,l,c,p,q;for(o=e.data,v=n.data,l=e.getter,f=n.setter,c=i,p=s,q=0;q<r;q++)f(v,p,l(o,c)),c+=t,p+=a;return e}K_.exports=fhr});var eR=u((CXr,rR)=>{"use strict";var x_=mt(),lhr=y1(),h1=8;function chr(r,e,t,i,n){var a,s,o,v,f,l;if(r<=0)return i;if(o=x_(e),v=x_(i),o.accessors||v.accessors)return t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,lhr(r,o,t,a,v,n,s),v.data;if(t===1&&n===1){if(f=r%h1,f>0)for(l=0;l<f;l++)i[l]=e[l];if(r<h1)return i;for(l=f;l<r;l+=h1)i[l]=e[l],i[l+1]=e[l+1],i[l+2]=e[l+2],i[l+3]=e[l+3],i[l+4]=e[l+4],i[l+5]=e[l+5],i[l+6]=e[l+6],i[l+7]=e[l+7];return i}for(t<0?a=(1-r)*t:a=0,n<0?s=(1-r)*n:s=0,l=0;l<r;l++)i[s]=e[a],a+=t,s+=n;return i}rR.exports=chr});var nR=u((BXr,iR)=>{"use strict";var tR=mt(),phr=y1(),en=8;function ghr(r,e,t,i,n,a,s){var o,v,f,l,c,p;if(r<=0)return n;if(f=tR(e),l=tR(n),f.accessors||l.accessors)return phr(r,f,t,i,l,a,s),l.data;if(o=i,v=s,t===1&&a===1){if(c=r%en,c>0)for(p=0;p<c;p++)n[v]=e[o],o+=t,v+=a;if(r<en)return n;for(p=c;p<r;p+=en)n[v]=e[o],n[v+1]=e[o+1],n[v+2]=e[o+2],n[v+3]=e[o+3],n[v+4]=e[o+4],n[v+5]=e[o+5],n[v+6]=e[o+6],n[v+7]=e[o+7],o+=en,v+=en;return n}for(p=0;p<r;p++)n[v]=e[o],o+=t,v+=a;return n}iR.exports=ghr});var je=u((jXr,uR)=>{"use strict";var mhr=w(),aR=eR(),qhr=nR();mhr(aR,"ndarray",qhr);uR.exports=aR});var oR=u((VXr,sR)=>{"use strict";function yhr(){}sR.exports=yhr});var fR=u((GXr,vR)=>{"use strict";var hhr=oR();function dhr(){return hhr.name==="foo"}vR.exports=dhr});var cR=u((UXr,lR)=>{"use strict";var whr=fR();lR.exports=whr});var gR=u((WXr,pR)=>{"use strict";var bhr=L(),Ehr=cR(),Nhr=Iu().REGEXP,Ahr=Ehr();function Ohr(r){if(bhr(r)===!1)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return Ahr?r.name:Nhr.exec(r.toString())[1]}pR.exports=Ohr});var qR=u((HXr,mR)=>{"use strict";var Shr=gR();mR.exports=Shr});var hR=u((kXr,yR)=>{"use strict";var Thr=Ni(),Lhr=_t(),Ihr=Ai(),Phr=Oi(),_hr=Rt(),Rhr=vt(),Fhr=or(),Mhr=Xr(),Chr=cr(),Bhr=[Chr,Mhr,Rhr,Fhr,Phr,_hr,Thr,Lhr,Ihr];yR.exports=Bhr});var dR=u((DXr,jhr)=>{jhr.exports=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"]});var OR=u((XXr,AR)=>{"use strict";var Vhr=Ne(),Ghr=qR(),ER=ut(),Uhr=vs(),Whr=cr(),wR=hR(),bR=dR(),La=Uhr()?ER(Whr):NR;La=Ghr(La)==="TypedArray"?La:NR;function NR(){}function Hhr(r){var e,t;if(typeof r!="object"||r===null)return!1;if(r instanceof La)return!0;for(t=0;t<wR.length;t++)if(r instanceof wR[t])return!0;for(;r;){for(e=Vhr(r),t=0;t<bR.length;t++)if(bR[t]===e)return!0;r=ER(r)}return!1}AR.exports=Hhr});var TR=u((JXr,SR)=>{"use strict";var khr=OR();SR.exports=khr});var IR=u((zXr,LR)=>{"use strict";var Dhr=Ji(),Xhr=Di(),Jhr=[Xhr,Dhr];LR.exports=Jhr});var PR=u((YXr,zhr)=>{zhr.exports=["Complex64Array","Complex128Array"]});var MR=u((ZXr,FR)=>{"use strict";var Yhr=Ne(),Zhr=ut(),_R=IR(),RR=PR();function Qhr(r){var e,t;if(typeof r!="object"||r===null)return!1;for(t=0;t<_R.length;t++)if(r instanceof _R[t])return!0;for(;r;){for(e=Yhr(r),t=0;t<RR.length;t++)if(RR[t]===e)return!0;r=Zhr(r)}return!1}FR.exports=Qhr});var BR=u((QXr,CR)=>{"use strict";var $hr=MR();CR.exports=$hr});var VR=u(($Xr,jR)=>{"use strict";function Khr(r,e){if(typeof e!="function")throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+e+"`.");return r instanceof e}jR.exports=Khr});var UR=u((KXr,GR)=>{"use strict";var xhr=VR();GR.exports=xhr});var HR=u((xXr,WR)=>{"use strict";var rdr=Ni(),edr=_t(),tdr=Ai(),idr=Oi(),ndr=Rt(),adr=vt(),udr=or(),sdr=Xr(),odr=cr(),vdr=Ji(),fdr=Di(),ldr=[[odr,"Float64Array"],[sdr,"Float32Array"],[adr,"Int32Array"],[udr,"Uint32Array"],[idr,"Int16Array"],[ndr,"Uint16Array"],[rdr,"Int8Array"],[edr,"Uint8Array"],[tdr,"Uint8ClampedArray"],[vdr,"Complex64Array"],[fdr,"Complex128Array"]];WR.exports=ldr});var DR=u((rJr,kR)=>{"use strict";var cdr=UR(),pdr=Ne(),gdr=ut(),ri=HR();function mdr(r){var e,t;for(t=0;t<ri.length;t++)if(cdr(r,ri[t][0]))return ri[t][1];for(;r;){for(e=pdr(r),t=0;t<ri.length;t++)if(e===ri[t][1])return ri[t][1];r=gdr(r)}}kR.exports=mdr});var JR=u((eJr,XR)=>{"use strict";var qdr=TR(),ydr=BR(),hdr=Dt(),ddr=Xt(),wdr=DR();function bdr(r){var e,t,i;if(qdr(r))e=r;else if(ydr(r))r.BYTES_PER_ELEMENT===8?e=hdr(r,0):e=ddr(r,0);else throw new TypeError("invalid argument. Must provide a typed array. Value: `"+r+"`.");for(t={type:wdr(r),data:[]},i=0;i<e.length;i++)t.data.push(e[i]);return t}XR.exports=bdr});var R=u((tJr,zR)=>{"use strict";var Edr=JR();zR.exports=Edr});var d1=u((iJr,YR)=>{"use strict";var Ndr=Tt(),Adr=rr(),Odr=Ndr-1;function Sdr(){var r=Adr(1+Odr*Math.random());return r>>>0}YR.exports=Sdr});var T1=u((nJr,aF)=>{"use strict";var Qr=w(),Ve=P(),ZR=_(),w1=A(),Tdr=T(),Ldr=Fr(),QR=Dr(),Idr=ar().isPrimitive,$R=Zr().isPrimitive,tF=na(),iF=Tt(),qr=or(),Pdr=Ks(),S1=$_(),ei=je(),_dr=R(),KR=d1(),er=624,b1=397,xR=iF>>>0,Rdr=19650218>>>0,E1=2147483648>>>0,N1=2147483647>>>0,Fdr=1812433253>>>0,Mdr=1664525>>>0,Cdr=1566083941>>>0,Bdr=2636928640>>>0,jdr=4022730752>>>0,Vdr=2567483615>>>0,A1=[0>>>0,Vdr>>>0],nF=1/(tF+1),Gdr=67108864>>>0,Udr=2147483648>>>0,O1=1>>>0,Wdr=tF*nF,Ia=1,Pa=3,Ge=2,Ue=er+3,yr=er+5,tn=er+6;function rF(r,e){var t;return e?t="option":t="argument",r.length<tn+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==Ia?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+Ia+". Actual: "+r[0]+"."):r[1]!==Pa?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+Pa+". Actual: "+r[1]+"."):r[Ge]!==er?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+er+". Actual: "+r[Ge]+"."):r[Ue]!==1?new RangeError("invalid "+t+". `state` array has an incompatible section length. Expected: "+1 .toString()+". Actual: "+r[Ue]+"."):r[yr]!==r.length-tn?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-tn)+". Actual: "+r[yr]+"."):null}function eF(r,e,t){var i;for(r[0]=t>>>0,i=1;i<e;i++)t=r[i-1]>>>0,t=(t^t>>>30)>>>0,r[i]=S1(t,Fdr)+i>>>0;return r}function Hdr(r,e,t,i){var n,a,s,o;for(a=1,s=0,o=Pdr(e,i);o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=S1(n,Mdr)>>>0,r[a]=(r[a]>>>0^n)+t[s]+s>>>0,a+=1,s+=1,a>=e&&(r[0]=r[e-1],a=1),s>=i&&(s=0);for(o=e-1;o>0;o--)n=r[a-1]>>>0,n=(n^n>>>30)>>>0,n=S1(n,Cdr)>>>0,r[a]=(r[a]>>>0^n)-a>>>0,a+=1,a>=e&&(r[0]=r[e-1],a=1);return r[0]=Udr,r}function kdr(r){var e,t,i,n;for(n=er-b1,t=0;t<n;t++)e=r[t]&E1|r[t+1]&N1,r[t]=r[t+b1]^e>>>1^A1[e&O1];for(i=er-1;t<i;t++)e=r[t]&E1|r[t+1]&N1,r[t]=r[t-n]^e>>>1^A1[e&O1];return e=r[i]&E1|r[0]&N1,r[i]=r[b1-1]^e>>>1^A1[e&O1],r}function Ddr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!Tdr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(w1(r,"copy")&&(i.copy=r.copy,!Idr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(w1(r,"state")){if(t=r.state,i.state=!0,!QR(t))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+t+"`.");if(s=rF(t,!0),s)throw s;i.copy===!1?e=t:(e=new qr(t.length),ei(t.length,t,1,e,1)),t=new qr(e.buffer,e.byteOffset+(Ge+1)*e.BYTES_PER_ELEMENT,er),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,t[yr])}if(n===void 0)if(w1(r,"seed"))if(n=r.seed,i.seed=!0,$R(n)){if(n>xR)throw new RangeError("invalid option. `seed` option must be a positive integer less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");n>>>=0}else{if(Ldr(n)===!1||n.length<1)throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");if(n.length===1){if(n=n[0],!$R(n))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");if(n>xR)throw new RangeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+n+"`.");n>>>=0}else a=n.length,e=new qr(tn+a),e[0]=Ia,e[1]=Pa,e[Ge]=er,e[Ue]=1,e[Ue+1]=er,e[yr]=a,ei.ndarray(a,n,1,0,e,1,yr+1),t=new qr(e.buffer,e.byteOffset+(Ge+1)*e.BYTES_PER_ELEMENT,er),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,a),t=eF(t,er,Rdr),t=Hdr(t,er,n,a)}else n=KR()>>>0}else n=KR()>>>0;return t===void 0&&(e=new qr(tn+1),e[0]=Ia,e[1]=Pa,e[Ge]=er,e[Ue]=1,e[Ue+1]=er,e[yr]=1,e[yr+1]=n,t=new qr(e.buffer,e.byteOffset+(Ge+1)*e.BYTES_PER_ELEMENT,er),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,1),t=eF(t,er,n)),Qr(y,"NAME","mt19937"),Ve(y,"seed",o),Ve(y,"seedLength",v),ZR(y,"state",c,p),Ve(y,"stateLength",f),Ve(y,"byteLength",l),Qr(y,"toJSON",q),Qr(y,"MIN",1),Qr(y,"MAX",iF),Qr(y,"normalized",m),Qr(m,"NAME",y.NAME),Ve(m,"seed",o),Ve(m,"seedLength",v),ZR(m,"state",c,p),Ve(m,"stateLength",f),Ve(m,"byteLength",l),Qr(m,"toJSON",q),Qr(m,"MIN",0),Qr(m,"MAX",Wdr),y;function o(){var g=e[yr];return ei(g,n,1,new qr(g),1)}function v(){return e[yr]}function f(){return e.length}function l(){return e.byteLength}function c(){var g=e.length;return ei(g,e,1,new qr(g),1)}function p(g){var h;if(!QR(g))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+g+"`.");if(h=rF(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?ei(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new qr(g.length)),ei(g.length,g,1,e,1)),t=new qr(e.buffer,e.byteOffset+(Ge+1)*e.BYTES_PER_ELEMENT,er),n=new qr(e.buffer,e.byteOffset+(yr+1)*e.BYTES_PER_ELEMENT,e[yr])}function q(){var g={};return g.type="PRNG",g.name=y.NAME,g.state=_dr(e),g.params=[],g}function y(){var g,h;return h=e[Ue+1],h>=er&&(t=kdr(t),h=0),g=t[h],e[Ue+1]=h+1,g^=g>>>11,g^=g<<7&Bdr,g^=g<<15&jdr,g^=g>>>18,g>>>0}function m(){var g=y()>>>5,h=y()>>>6;return(g*Gdr+h)*nF}}aF.exports=Ddr});var sF=u((aJr,uF)=>{"use strict";var Xdr=T1(),Jdr=d1(),zdr=Xdr({seed:Jdr()});uF.exports=zdr});var k=u((uJr,vF)=>{"use strict";var Ydr=w(),oF=sF(),Zdr=T1();Ydr(oF,"factory",Zdr);vF.exports=oF});var pF=u((sJr,cF)=>{"use strict";var fF=j().isPrimitive,lF=tr();function Qdr(r,e){return!fF(r)||lF(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!fF(e)||lF(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):r>=e?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+r+","+e+"]`."):null}cF.exports=Qdr});var mF=u((oJr,gF)=>{"use strict";var $dr=x(),Kdr=Ri(),xdr=va();function rwr(r,e,t){return e+$dr(Kdr(xdr*r()),2)*(t-e)}gF.exports=rwr});var L1=u((vJr,NF)=>{"use strict";var $r=w(),_a=P(),qF=_(),yF=T(),hF=L(),dF=A(),wF=I(),ewr=C(),Ra=k().factory,bF=b(),twr=R(),iwr=pF(),EF=mF();function nwr(){var r,e,t,i,n,a;if(arguments.length===0)e=Ra();else if(arguments.length===1){if(r=arguments[0],!yF(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(dF(r,"prng")){if(!hF(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ra(r)}else{if(n=arguments[0],a=arguments[1],i=iwr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!yF(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(dF(r,"prng")){if(!hF(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ra(r)}else e=Ra()}return n===void 0?t=y:t=q,$r(t,"NAME","arcsine"),r&&r.prng?($r(t,"seed",null),$r(t,"seedLength",null),qF(t,"state",wF(null),ewr),$r(t,"stateLength",null),$r(t,"byteLength",null),$r(t,"toJSON",wF(null)),$r(t,"PRNG",e)):(_a(t,"seed",s),_a(t,"seedLength",o),qF(t,"state",l,c),_a(t,"stateLength",v),_a(t,"byteLength",f),$r(t,"toJSON",p),$r(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=twr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return EF(e,n,a)}function y(m,g){return bF(m)||bF(g)||m>=g?NaN:EF(e,m,g)}}NF.exports=nwr});var OF=u((fJr,AF)=>{"use strict";var awr=L1(),uwr=awr();AF.exports=uwr});var LF=u((lJr,TF)=>{"use strict";var swr=w(),SF=OF(),owr=L1();swr(SF,"factory",owr);TF.exports=SF});var I1=u((cJr,MF)=>{"use strict";var Kr=w(),Fa=P(),IF=_(),PF=T(),vwr=zi().isPrimitive,_F=L(),RF=A(),FF=I(),fwr=C(),Ma=k().factory,lwr=b(),cwr=R();function pwr(){var r,e,t,i;if(arguments.length===0)e=Ma();else if(arguments.length===1&&PF(arguments[0]))if(r=arguments[0],RF(r,"prng")){if(!_F(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ma(r);else{if(i=arguments[0],!vwr(i))throw new TypeError("invalid argument. First argument must be a probability. Value: `"+i+"`.");if(arguments.length>1){if(r=arguments[1],!PF(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(RF(r,"prng")){if(!_F(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Ma(r)}else e=Ma()}return i===void 0?t=p:t=c,Kr(t,"NAME","bernoulli"),r&&r.prng?(Kr(t,"seed",null),Kr(t,"seedLength",null),IF(t,"state",FF(null),fwr),Kr(t,"stateLength",null),Kr(t,"byteLength",null),Kr(t,"toJSON",FF(null)),Kr(t,"PRNG",e)):(Fa(t,"seed",n),Fa(t,"seedLength",a),IF(t,"state",v,f),Fa(t,"stateLength",s),Fa(t,"byteLength",o),Kr(t,"toJSON",l),Kr(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(q){e.state=q}function l(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=cwr(e.state),i===void 0?q.params=[]:q.params=[i],q}function c(){return e()<=i?1:0}function p(q){return lwr(q)||q<0||q>1?NaN:e()<=q?1:0}}MF.exports=pwr});var BF=u((pJr,CF)=>{"use strict";var gwr=I1(),mwr=gwr();CF.exports=mwr});var GF=u((gJr,VF)=>{"use strict";var qwr=w(),jF=BF(),ywr=I1();qwr(jF,"factory",ywr);VF.exports=jF});var kF=u((mJr,HF)=>{"use strict";var hwr=G(),UF=sr(),dwr=B(),WF=.00991256303526217;function wwr(r,e){var t,i,n;for(i=UF(-.5*e*e),t=[],t.push(WF/i),t.push(e),n=2;n<r;n++)t[n]=hwr(-2*dwr(WF/t[n-1]+i)),i=UF(-.5*t[n]*t[n]);return t.push(0),t}HF.exports=wwr});var XF=u((qJr,DF)=>{"use strict";function bwr(r){var e,t;for(e=[],t=0;t<r.length-1;t++)e.push(r[t+1]/r[t]);return e}DF.exports=bwr});var YF=u((yJr,zF)=>{"use strict";var JF=B();function Ewr(r,e,t){var i,n;do i=JF(r())/e,n=JF(r());while(-2*n<i*i);return t?i-e:e-i}zF.exports=Ewr});var KF=u((hJr,$F)=>{"use strict";var Nwr=Z(),ZF=sr(),Awr=kF(),Owr=XF(),Swr=YF(),Twr=128,QF=3.442619855899,Nt=Awr(Twr,QF),Lwr=Owr(Nt),Iwr=127;function Pwr(r,e){return t;function t(){for(var i,n,a,s,o,v,f;;){if(o=2*r()-1,v=e()&Iwr,Nwr(o)<Lwr[v])return o*Nt[v];if(v===0)return Swr(r,QF,o<0);if(s=o*Nt[v],a=s*s,f=v+1,i=ZF(-.5*(Nt[v]*Nt[v]-a)),n=ZF(-.5*(Nt[f]*Nt[f]-a)),n+r()*(i-n)<1)return s}}}$F.exports=Pwr});var _1=u((dJr,eM)=>{"use strict";var We=w(),Ca=P(),xF=_(),_wr=L(),Rwr=T(),Fwr=ar().isPrimitive,Ba=A(),Mwr=Dr(),P1=k().factory,rM=I(),Cwr=C(),Bwr=rr(),jwr=Tt(),Vwr=R(),Gwr=KF();function Uwr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!Rwr(r))throw new TypeError("invalid argument. Must provide an object. Value: `"+r+"`.");if(Ba(r,"copy")&&(n.copy=r.copy,!Fwr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(Ba(r,"prng")){if(!_wr(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else if(Ba(r,"state")){if(n.state=r.state,!Mwr(r.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+r.state+"`.")}else if(Ba(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+r.seed+"`.")}return n.state===void 0?e===void 0?(t=P1(n),e=t.normalized):(t=P1({seed:Bwr(1+jwr*e()),copy:n.copy}),n.seed=null):(t=P1(n),e=t.normalized),i=Gwr(e,t),We(i,"NAME","improved-ziggurat"),n.seed===null?(We(i,"seed",null),We(i,"seedLength",null)):(Ca(i,"seed",a),Ca(i,"seedLength",s)),r&&r.prng?(xF(i,"state",rM(null),Cwr),We(i,"stateLength",null),We(i,"byteLength",null),We(i,"toJSON",rM(null))):(xF(i,"state",f,l),Ca(i,"stateLength",o),Ca(i,"byteLength",v),We(i,"toJSON",c)),We(i,"PRNG",e),i;function a(){return t.seed}function s(){return t.seedLength}function o(){return t.stateLength}function v(){return t.byteLength}function f(){return t.state}function l(p){t.state=p}function c(){var p={};return p.type="PRNG",p.name=i.NAME,p.state=Vwr(t.state),p.params=[],p}}eM.exports=Uwr});var iM=u((wJr,tM)=>{"use strict";var Wwr=_1(),Hwr=Wwr();tM.exports=Hwr});var He=u((bJr,aM)=>{"use strict";var kwr=w(),nM=iM(),Dwr=_1();kwr(nM,"factory",Dwr);aM.exports=nM});var oM=u((EJr,sM)=>{"use strict";var uM=W().isPrimitive;function Xwr(r,e){return uM(r)?uM(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}sM.exports=Xwr});var pM=u((NJr,cM)=>{"use strict";var vM=B(),fM=G(),Jwr=x(),lM=1/3;function zwr(r,e,t){var i,n,a,s,o,v,f,l,c,p;for(t<1?(v=t+1-lM,o=1/fM(9*v),l=Jwr(r(),1/t)):(v=t-lM,o=1/fM(9*v),l=1),i=!0;i;){do f=e(),p=1+o*f;while(p<=0);p*=p*p,n=f*f,a=1-.331*n*n,s=.5*n+v*(1-p+vM(p)),c=r(),(c<a||vM(c)<s)&&(i=!1)}return v*p*l}cM.exports=zwr});var qM=u((AJr,mM)=>{"use strict";var R1=x(),gM=B();function Ywr(r,e,t){var i,n,a,s,o,v,f,l;for(a=t-1,o=R1(a+a,.5),i=!0;i===!0;)s=e(),f=.5*(1+s/o),f>=0&&f<=1&&(v=r(),n=R1(s,4),l=8*t-12,l=1-n/l,v<=l?i=!1:(l+=.5*R1(n/(8*t-8),2),v<l&&(l=a*gM(4*f*(1-f)),l+=s*s/2,l>=gM(v)&&(i=!1))));return f}mM.exports=Ywr});var hM=u((OJr,yM)=>{"use strict";var Zwr=x(),ja=B();function Qwr(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y;for(o=t-1,v=i-1,f=o+v,l=f*ja(f),s=o/f,n=.5/Zwr(f,.5),a=!0;a===!0;)c=e(),q=s+c*n,q>=0&&q<=1&&(p=r(),y=o*ja(q/o),y+=v*ja((1-q)/v),y+=l+.5*c*c,y>=ja(p)&&(a=!1));return q}yM.exports=Qwr});var bM=u((SJr,wM)=>{"use strict";var F1=sr(),dM=x(),M1=B();function $wr(r,e,t){for(var i,n,a,s,o,v,f;;)if(s=r(),o=r(),v=dM(s,1/e),f=dM(o,1/t),a=v+f,a<=1)return a>0?v/a:(i=M1(s)/e,n=M1(o)/t,i>n?(n-=i,i=0):(i-=n,n=0),F1(i-M1(F1(i)+F1(n))))}wM.exports=$wr});var AM=u((TJr,NM)=>{"use strict";var EM=pM(),Kwr=qM(),xwr=hM(),rbr=bM();function ebr(r,e,t,i){var n,a;return t===i&&t>1.5?Kwr(r,e,t):t>1&&i>1?xwr(r,e,t,i):t<1&&i<1?rbr(r,t,i):(n=EM(r,e,t),a=EM(r,e,i),n/(n+a))}NM.exports=ebr});var V1=u((LJr,MM)=>{"use strict";var xr=w(),Va=P(),OM=_(),SM=T(),TM=ar().isPrimitive,LM=L(),ti=A(),IM=I(),tbr=C(),PM=He().factory,Ga=k().factory,_M=b(),C1=je(),B1=or(),j1=Dr(),RM=Mt(),ibr=R(),nbr=oM(),FM=AM();function abr(){var r,e,t,i,n,a,s,o,v;if(o=!0,arguments.length===0)n={copy:!1},a=Ga(n);else if(arguments.length===1){if(n=arguments[0],!SM(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ti(n,"copy")&&!TM(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ti(n,"prng")){if(!LM(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ti(n,"state")&&!j1(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=RM(n,1),n.copy===!1?o=!1:n.state&&(n.state=C1(n.state.length,n.state,1,new B1(n.state.length),1)),n.copy=!1,a=Ga(n)}}else{if(t=arguments[0],i=arguments[1],v=nbr(t,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!SM(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ti(n,"copy")&&!TM(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ti(n,"prng")){if(!LM(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ti(n,"state")&&!j1(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=RM(n,1),n.copy===!1?o=!1:n.state&&(n.state=C1(n.state.length,n.state,1,new B1(n.state.length),1)),n.copy=!1,a=Ga(n)}}else n={copy:!1},a=Ga(n)}return n&&n.prng?e=PM({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),e=PM({state:r,copy:!1})),t===void 0?s=h:s=g,xr(s,"NAME","beta"),n&&n.prng?(xr(s,"seed",null),xr(s,"seedLength",null),OM(s,"state",IM(null),tbr),xr(s,"stateLength",null),xr(s,"byteLength",null),xr(s,"toJSON",IM(null)),xr(s,"PRNG",a)):(Va(s,"seed",f),Va(s,"seedLength",l),OM(s,"state",q,y),Va(s,"stateLength",c),Va(s,"byteLength",p),xr(s,"toJSON",m),xr(s,"PRNG",a),a=a.normalized),s;function f(){return a.seed}function l(){return a.seedLength}function c(){return a.stateLength}function p(){return a.byteLength}function q(){return a.state}function y(E){if(!j1(E))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+E+"`.");o&&(E=C1(E.length,E,1,new B1(E.length),1)),a.state=E}function m(){var E={};return E.type="PRNG",E.name=s.NAME,E.state=ibr(a.state),t===void 0?E.params=[]:E.params=[t,i],E}function g(){return FM(a,e,t,i)}function h(E,N){return _M(E)||_M(N)||E<=0||N<=0?NaN:FM(a,e,E,N)}}MM.exports=abr});var BM=u((IJr,CM)=>{"use strict";var ubr=V1(),sbr=ubr();CM.exports=sbr});var GM=u((PJr,VM)=>{"use strict";var obr=w(),jM=BM(),vbr=V1();obr(jM,"factory",vbr);VM.exports=jM});var HM=u((_Jr,WM)=>{"use strict";var UM=W().isPrimitive;function fbr(r,e){return UM(r)?UM(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}WM.exports=fbr});var XM=u((RJr,DM)=>{"use strict";var kM=B();function lbr(r,e,t,i,n){var a,s,o,v,f,l,c;for(a=!0;a;){do f=e(),c=1+n*f;while(c<=0);c*=c*c,s=f*f,o=1-.331*s*s,v=.5*s+i*(1-c+kM(c)),l=r(),(l<o||kM(l)<v)&&(a=!1)}return 1/t*i*c}DM.exports=lbr});var k1=u((FJr,eC)=>{"use strict";var re=w(),Ua=P(),JM=_(),zM=T(),G1=Dr(),YM=ar().isPrimitive,ZM=L(),ii=A(),QM=I(),cbr=C(),$M=He().factory,Wa=k().factory,KM=b(),U1=G(),xM=x(),W1=je(),H1=or(),pbr=R(),rC=Mt(),gbr=HM(),Ha=XM(),ka=1/3;function mbr(){var r,e,t,i,n,a,s,o,v,f,l;if(o=!0,arguments.length===0)n={copy:!1},a=Wa(n);else if(arguments.length===1){if(n=arguments[0],!zM(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ii(n,"copy")&&!YM(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ii(n,"prng")){if(!ZM(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ii(n,"state")&&!G1(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=rC(n,1),n.copy===!1?o=!1:n.state&&(n.state=W1(n.state.length,n.state,1,new H1(n.state.length),1)),n.copy=!1,a=Wa(n)}}else{if(e=arguments[0],i=arguments[1],v=gbr(e,i),v)throw v;if(arguments.length>2){if(n=arguments[2],!zM(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(ii(n,"copy")&&!YM(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(ii(n,"prng")){if(!ZM(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");a=n.prng}else{if(ii(n,"state")&&!G1(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=rC(n,1),n.copy===!1?o=!1:n.state&&(n.state=W1(n.state.length,n.state,1,new H1(n.state.length),1)),n.copy=!1,a=Wa(n)}}else n={copy:!1},a=Wa(n)}return n&&n.prng?t=$M({prng:n.prng}):(n.state?r=n.state:(r=a.state,a.state=r),t=$M({state:r,copy:!1})),e===void 0?s=V:(e>=1?(s=E,l=e-ka):(s=N,l=e+1-ka),f=1/U1(9*l)),re(s,"NAME","gamma"),n&&n.prng?(re(s,"seed",null),re(s,"seedLength",null),JM(s,"state",QM(null),cbr),re(s,"stateLength",null),re(s,"byteLength",null),re(s,"toJSON",QM(null)),re(s,"PRNG",a)):(Ua(s,"seed",c),Ua(s,"seedLength",p),JM(s,"state",m,g),Ua(s,"stateLength",q),Ua(s,"byteLength",y),re(s,"toJSON",h),re(s,"PRNG",a),a=a.normalized),s;function c(){return a.seed}function p(){return a.seedLength}function q(){return a.stateLength}function y(){return a.byteLength}function m(){return a.state}function g(O){if(!G1(O))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+O+"`.");o&&(O=W1(O.length,O,1,new H1(O.length),1)),a.state=O}function h(){var O={};return O.type="PRNG",O.name=s.NAME,O.state=pbr(a.state),e===void 0?O.params=[]:O.params=[e,i],O}function E(){return Ha(a,t,i,l,f)}function N(){return Ha(a,t,i,l,f)*xM(a(),1/e)}function V(O,D){var nr,H;return KM(O)||KM(D)||O<=0||D<=0?NaN:O<1?(H=O+1-ka,nr=1/U1(9*H),Ha(a,t,D,H,nr)*xM(a(),1/O)):(H=O-ka,nr=1/U1(9*H),Ha(a,t,D,H,nr))}}eC.exports=mbr});var iC=u((MJr,tC)=>{"use strict";var qbr=k1(),ybr=qbr();tC.exports=ybr});var ni=u((CJr,aC)=>{"use strict";var hbr=w(),nC=iC(),dbr=k1();hbr(nC,"factory",dbr);aC.exports=nC});var oC=u((BJr,sC)=>{"use strict";var uC=W().isPrimitive;function wbr(r,e){return uC(r)?uC(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}sC.exports=wbr});var fC=u((jJr,vC)=>{"use strict";function bbr(r,e,t){return r(e,1)/r(t,1)}vC.exports=bbr});var D1=u((VJr,qC)=>{"use strict";var ke=w(),Da=P(),lC=_(),cC=T(),pC=I(),Ebr=C(),Xa=ni().factory,gC=b(),Nbr=R(),Abr=oC(),mC=fC();function Obr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=Xa();else if(arguments.length===1){if(i=arguments[0],!cC(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");r=Xa(i)}else{if(e=arguments[0],t=arguments[1],s=Abr(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!cC(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");r=Xa(i)}else r=Xa()}return e===void 0?a=m:a=y,n=r.PRNG,ke(a,"NAME","betaprime"),i&&i.prng?(ke(a,"seed",null),ke(a,"seedLength",null),lC(a,"state",pC(null),Ebr),ke(a,"stateLength",null),ke(a,"byteLength",null),ke(a,"toJSON",pC(null))):(Da(a,"seed",o),Da(a,"seedLength",v),lC(a,"state",c,p),Da(a,"stateLength",f),Da(a,"byteLength",l),ke(a,"toJSON",q)),ke(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function l(){return n.byteLength}function c(){return n.state}function p(g){n.state=g}function q(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=Nbr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function y(){return mC(r,e,t)}function m(g,h){return gC(g)||gC(h)||g<=0||h<=0?NaN:mC(r,g,h)}}qC.exports=Obr});var hC=u((GJr,yC)=>{"use strict";var Sbr=D1(),Tbr=Sbr();yC.exports=Tbr});var bC=u((UJr,wC)=>{"use strict";var Lbr=w(),dC=hC(),Ibr=D1();Lbr(dC,"factory",Ibr);wC.exports=dC});var NC=u((WJr,EC)=>{"use strict";var Pbr=rr();function _br(r){return Pbr(r)===r&&r>0}EC.exports=_br});var X1=u((HJr,AC)=>{"use strict";var Rbr=NC();AC.exports=Rbr});var SC=u((kJr,OC)=>{"use strict";function Fbr(r){return r>=0&&r<=1}OC.exports=Fbr});var LC=u((DJr,TC)=>{"use strict";var Mbr=SC();TC.exports=Mbr});var PC=u((XJr,IC)=>{"use strict";var Cbr=Zr().isPrimitive,Bbr=zi().isPrimitive;function jbr(r,e){return Cbr(r)?Bbr(e)?null:new TypeError("invalid argument. Second argument must be a probability. Value: `"+e+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+e+"`.")}IC.exports=jbr});var RC=u((JJr,_C)=>{"use strict";function Vbr(r,e,t){var i=0,n;for(n=0;n<e;n++)r()<=t&&(i+=1);return i}_C.exports=Vbr});var MC=u((zJr,FC)=>{"use strict";var Gbr=b();function Ubr(r){return r===0||Gbr(r)?r:r<0?-1:1}FC.exports=Ubr});var Ja=u((YJr,CC)=>{"use strict";var Wbr=MC();CC.exports=Wbr});var jC=u((ZJr,BC)=>{"use strict";var Hbr=x(),kbr=1/12,Dbr=1/360,Xbr=1/1260;function Jbr(r){var e;switch(r){case 0:return .08106146679532726;case 1:return .04134069595540929;case 2:return .02767792568499834;case 3:return .02079067210376509;case 4:return .01664469118982119;case 5:return .01387612882307075;case 6:return .01189670994589177;case 7:return .01041126526197209;case 8:return .009255462182712733;case 9:return .00833056343336287;default:return r+=1,e=Hbr(r,2),(kbr-(Dbr-Xbr/e)/e)/r}}BC.exports=Jbr});var GC=u((QJr,VC)=>{"use strict";var J1=rr(),zbr=Ja(),Ybr=G(),z1=Z(),za=B(),Ya=jC(),Zbr=1/6;function Qbr(r,e,t){var i,n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N,V,O,D,nr,H,ru,Vr,fr,vn;for(D=J1((e+1)*t),f=e-D+1,nr=1-t,H=t/nr,l=(e+1)*H,s=e*t*nr,a=Ybr(s),g=1.15+2.53*a,m=-.0873+.0248*g+.01*t,h=e*t+.5,i=(2.83+5.1/g)*a,y=.92-4.2/g,n=.86*y,N=(D+.5)*za((D+1)/(H*f)),N+=Ya(D)+Ya(e-D);;){if(fr=r(),fr<=n)return Vr=fr/y-.43,H=Vr*(2*m/(.5-z1(Vr))+g)+h,J1(H);if(fr>=y?Vr=r()-.5:(Vr=fr/y-.93,Vr=zbr(Vr)*.5-Vr,fr=y*r()),c=.5-z1(Vr),O=J1(Vr*(2*m/c+g)+h),!(O<0||O>e))if(fr=fr*i/(m/(c*c)+g),p=z1(O-D),p>15){if(fr=za(fr),o=p/s,v=(p/3+.625)*p,v+=Zbr,v/=s,o*=v+.5,ru=-(p*p)/(2*s),fr<ru-o||fr<=ru+o&&(q=e-O+1,vn=N+(e+1)*za(f/q),vn+=(O+.5)*za(q*H/(O+1)),vn+=-(Ya(O)+Ya(e-O)),fr<=vn))return O}else{if(E=1,D<O)for(V=D;V<=O;V++)E*=l/V-H;else if(D>O)for(V=O;V<=D;V++)fr*=l/V-H;if(fr<=E)return O}}}VC.exports=Qbr});var HC=u(($Jr,WC)=>{"use strict";var $br=RC(),Kbr=GC();function UC(r,e,t){return t>.5?e-UC(r,e,1-t):e*t<10?$br(r,e,t):Kbr(r,e,t)}WC.exports=UC});var Y1=u((KJr,QC)=>{"use strict";var ee=w(),Za=P(),kC=_(),DC=T(),XC=L(),JC=A(),zC=I(),xbr=C(),YC=b(),rEr=X1(),eEr=LC(),Qa=k().factory,tEr=R(),iEr=PC(),ZC=HC();function nEr(){var r,e,t,i,n,a;if(arguments.length===0)e=Qa();else if(arguments.length===1){if(r=arguments[0],!DC(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(JC(r,"prng")){if(!XC(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Qa(r)}else{if(n=arguments[0],a=arguments[1],i=iEr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!DC(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(JC(r,"prng")){if(!XC(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Qa(r)}else e=Qa()}return n===void 0?t=y:t=q,ee(t,"NAME","binomial"),r&&r.prng?(ee(t,"seed",null),ee(t,"seedLength",null),kC(t,"state",zC(null),xbr),ee(t,"stateLength",null),ee(t,"byteLength",null),ee(t,"toJSON",zC(null)),ee(t,"PRNG",e)):(Za(t,"seed",s),Za(t,"seedLength",o),kC(t,"state",l,c),Za(t,"stateLength",v),Za(t,"byteLength",f),ee(t,"toJSON",p),ee(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=tEr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return ZC(e,n,a)}function y(m,g){return YC(m)||YC(g)||!rEr(m)||!eEr(g)?NaN:ZC(e,m,g)}}QC.exports=nEr});var KC=u((xJr,$C)=>{"use strict";var aEr=Y1(),uEr=aEr();$C.exports=uEr});var eB=u((rzr,rB)=>{"use strict";var sEr=w(),xC=KC(),oEr=Y1();sEr(xC,"factory",oEr);rB.exports=xC});var iB=u((ezr,tB)=>{"use strict";var vEr=G(),fEr=B(),lEr=Ri(),cEr=_i(),pEr=Pe();function gEr(r){var e,t;return e=!0,i;function i(){var n,a,s,o;if(e){do n=r(),a=r();while(n===0);return s=vEr(-2*fEr(n)),o=pEr*a,t=s*cEr(o),e=!1,s*lEr(o)}return e=!0,t}}tB.exports=gEr});var aB=u((tzr,nB)=>{"use strict";var mEr=G(),qEr=B(),yEr=_i(),hEr=Lr(),dEr=yEr(hEr);function wEr(r){var e=mEr(-2*qEr(r));return e*dEr}nB.exports=wEr});var sB=u((izr,uB)=>{"use strict";var bEr=G(),EEr=B(),NEr=_i(),AEr=Pe();function OEr(r){var e=bEr(-2*EEr(r)),t=AEr*r;return e*NEr(t)}uB.exports=OEr});var Z1=u((nzr,lB)=>{"use strict";var _r=w(),$a=P(),oB=_(),SEr=T(),TEr=L(),LEr=ar().isPrimitive,nn=A(),IEr=Dr(),vB=k().factory,fB=I(),PEr=C(),_Er=R(),REr=iB(),FEr=aB(),MEr=sB();function CEr(r){var e,t,i,n;if(n={copy:!0},arguments.length){if(!SEr(r))throw new TypeError("invalid argument. Must provide an object. Value: `"+r+"`.");if(nn(r,"copy")&&(n.copy=r.copy,!LEr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(nn(r,"prng")){if(!TEr(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else if(nn(r,"state")){if(n.state=r.state,!IEr(r.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+r.state+"`.")}else if(nn(r,"seed")&&(n.seed=r.seed,r.seed===void 0))throw new TypeError("invalid option. `seed` option must be either a positive integer less than or equal to the maximum unsigned 32-bit integer or an array-like object containing integer values less than or equal to the maximum unsigned 32-bit integer. Option: `"+r.seed+"`.")}return n.state===void 0?e===void 0?(i=vB(n),e=i.normalized):n.seed=null:(i=vB(n),e=i.normalized),t=REr(e),_r(t,"NAME","box-muller"),n.seed===null?(_r(t,"seed",null),_r(t,"seedLength",null)):($a(t,"seed",a),$a(t,"seedLength",s)),r&&r.prng?(oB(t,"state",fB(null),PEr),_r(t,"stateLength",null),_r(t,"byteLength",null),_r(t,"toJSON",fB(null))):(oB(t,"state",f,l),$a(t,"stateLength",o),$a(t,"byteLength",v),_r(t,"toJSON",c)),_r(t,"PRNG",e),nn(e,"MIN")?(_r(t,"MIN",FEr(e.MIN)),_r(t,"MAX",MEr(e.MIN))):(_r(t,"MIN",null),_r(t,"MAX",null)),t;function a(){return i.seed}function s(){return i.seedLength}function o(){return i.stateLength}function v(){return i.byteLength}function f(){return i.state}function l(p){i.state=p}function c(){var p={};return p.type="PRNG",p.name=t.NAME,p.state=_Er(i.state),p.params=[],p}}lB.exports=CEr});var pB=u((azr,cB)=>{"use strict";var BEr=Z1(),jEr=BEr();cB.exports=jEr});var qB=u((uzr,mB)=>{"use strict";var VEr=w(),gB=pB(),GEr=Z1();VEr(gB,"factory",GEr);mB.exports=gB});var hB=u((szr,yB)=>{"use strict";var UEr=j().isPrimitive,WEr=W().isPrimitive,HEr=tr();function kEr(r,e){return!UEr(r)||HEr(r)?new TypeError("invalid argument. `x0` must be a number primitive and not `NaN`. Value: `"+r+"`."):WEr(e)?null:new TypeError("invalid argument. `gamma` must be a positive number. Value: `"+e+"`.")}yB.exports=kEr});var wB=u((ozr,dB)=>{"use strict";var DEr=To(),XEr=Lr();function JEr(r,e,t){return e+t*DEr(XEr*(r()-.5))}dB.exports=JEr});var Q1=u((vzr,LB)=>{"use strict";var De=w(),Ka=P(),bB=_(),EB=T(),NB=L(),AB=A(),OB=I(),zEr=C(),SB=b(),ai=He().factory,YEr=R(),ZEr=hB(),TB=wB();function QEr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=ai();else if(arguments.length===1){if(t=arguments[0],!EB(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(AB(t,"prng")){if(!NB(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ai({prng:t.prng})}else e=ai(t)}else{if(s=arguments[0],r=arguments[1],a=ZEr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!EB(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(AB(t,"prng")){if(!NB(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ai({prng:t.prng})}else e=ai(t)}else e=ai()}return s===void 0?n=m:n=y,i=e.PRNG,De(n,"NAME","cauchy"),t&&t.prng?(De(n,"seed",null),De(n,"seedLength",null),bB(n,"state",OB(null),zEr),De(n,"stateLength",null),De(n,"byteLength",null),De(n,"toJSON",OB(null))):(Ka(n,"seed",o),Ka(n,"seedLength",v),bB(n,"state",c,p),Ka(n,"stateLength",f),Ka(n,"byteLength",l),De(n,"toJSON",q)),De(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=YEr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return TB(e,s,r)}function m(g,h){return SB(g)||SB(h)||h<=0?NaN:TB(e,g,h)}}LB.exports=QEr});var PB=u((fzr,IB)=>{"use strict";var $Er=Q1(),KEr=$Er();IB.exports=KEr});var FB=u((lzr,RB)=>{"use strict";var xEr=w(),_B=PB(),rNr=Q1();xEr(_B,"factory",rNr);RB.exports=_B});var $1=u((czr,GB)=>{"use strict";var Xe=w(),xa=P(),MB=_(),eNr=W().isPrimitive,CB=T(),BB=L(),jB=A(),VB=I(),tNr=C(),iNr=b(),ui=ni().factory,nNr=R();function aNr(){var r,e,t,i,n;if(arguments.length===0)r=ui();else if(arguments.length===1&&CB(arguments[0]))if(t=arguments[0],jB(t,"prng")){if(!BB(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=ui({prng:t.prng})}else r=ui(t);else{if(n=arguments[0],!eNr(n))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+n+"`.");if(arguments.length>1){if(t=arguments[1],!CB(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(jB(t,"prng")){if(!BB(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=ui(n/2,.5,{prng:t.prng})}else r=ui(n/2,.5,t)}else r=ui(n/2,.5)}return n===void 0?i=q:i=p,e=r.PRNG,Xe(i,"NAME","chisquare"),t&&t.prng?(Xe(i,"seed",null),Xe(i,"seedLength",null),MB(i,"state",VB(null),tNr),Xe(i,"stateLength",null),Xe(i,"byteLength",null),Xe(i,"toJSON",VB(null))):(xa(i,"seed",a),xa(i,"seedLength",s),MB(i,"state",f,l),xa(i,"stateLength",o),xa(i,"byteLength",v),Xe(i,"toJSON",c)),Xe(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function l(y){e.state=y}function c(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=nNr(e.state),n===void 0?y.params=[]:y.params=[n],y}function p(){return r()}function q(y){return iNr(y)||y<=0?NaN:r(y/2,.5)}}GB.exports=aNr});var WB=u((pzr,UB)=>{"use strict";var uNr=$1(),sNr=uNr();UB.exports=sNr});var an=u((gzr,kB)=>{"use strict";var oNr=w(),HB=WB(),vNr=$1();oNr(HB,"factory",vNr);kB.exports=HB});var K1=u((mzr,QB)=>{"use strict";var Je=w(),r0=P(),DB=_(),fNr=W().isPrimitive,XB=T(),JB=L(),zB=A(),YB=I(),lNr=C(),cNr=b(),si=an().factory,pNr=R(),ZB=G();function gNr(){var r,e,t,i,n;if(arguments.length===0)r=si();else if(arguments.length===1&&XB(arguments[0]))if(t=arguments[0],zB(t,"prng")){if(!JB(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=si({prng:t.prng})}else r=si(t);else{if(n=arguments[0],!fNr(n))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+n+"`.");if(arguments.length>1){if(t=arguments[1],!XB(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(zB(t,"prng")){if(!JB(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");r=si(n,{prng:t.prng})}else r=si(n,t)}else r=si(n)}return n===void 0?i=q:i=p,e=r.PRNG,Je(i,"NAME","chi"),t&&t.prng?(Je(i,"seed",null),Je(i,"seedLength",null),DB(i,"state",YB(null),lNr),Je(i,"stateLength",null),Je(i,"byteLength",null),Je(i,"toJSON",YB(null))):(r0(i,"seed",a),r0(i,"seedLength",s),DB(i,"state",f,l),r0(i,"stateLength",o),r0(i,"byteLength",v),Je(i,"toJSON",c)),Je(i,"PRNG",e),i;function a(){return e.seed}function s(){return e.seedLength}function o(){return e.stateLength}function v(){return e.byteLength}function f(){return e.state}function l(y){e.state=y}function c(){var y={};return y.type="PRNG",y.name=i.NAME,y.state=pNr(e.state),n===void 0?y.params=[]:y.params=[n],y}function p(){return ZB(r())}function q(y){return cNr(y)||y<=0?NaN:ZB(r(y))}}QB.exports=gNr});var KB=u((qzr,$B)=>{"use strict";var mNr=K1(),qNr=mNr();$B.exports=qNr});var ej=u((yzr,rj)=>{"use strict";var yNr=w(),xB=KB(),hNr=K1();yNr(xB,"factory",hNr);rj.exports=xB});var ij=u((hzr,tj)=>{"use strict";var dNr=j().isPrimitive,wNr=W().isPrimitive,bNr=tr();function ENr(r,e){return!dNr(r)||bNr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):wNr(e)?null:new TypeError("invalid argument. `s` must be a positive number. Value: `"+e+"`.")}tj.exports=ENr});var aj=u((dzr,nj)=>{"use strict";var x1=b(),NNr=Ci(),ANr=Lr();function ONr(r,e,t){var i;return x1(r)||x1(e)||x1(t)||t<0?NaN:t===0?r<e?0:1:r<e-t?0:r>e+t?1:(i=(r-e)/t,(1+i+NNr(i)/ANr)/2)}nj.exports=ONr});var sj=u((wzr,uj)=>{"use strict";var SNr=I(),TNr=go().factory,rv=b(),LNr=Ci(),INr=Lr();function PNr(r,e){if(rv(r)||rv(e)||e<0)return SNr(NaN);if(e===0)return TNr(r);return t;function t(i){var n;return rv(i)?NaN:i<r-e?0:i>r+e?1:(n=(i-r)/e,(1+n+LNr(n)/INr)/2)}}uj.exports=PNr});var fj=u((bzr,vj)=>{"use strict";var _Nr=w(),oj=aj(),RNr=sj();_Nr(oj,"factory",RNr);vj.exports=oj});var ev=u((Ezr,lj)=>{"use strict";var FNr=fj(),MNr=1e4,CNr=1e-12;function BNr(r,e,t){var i,n,a,s,o;for(o=1,i=e-t,n=e+t;o<MNr;){if(s=(i+n)/2,n-i<CNr)return s;a=FNr(s,e,t),r>a?i=s:n=s,o+=1}return s}lj.exports=BNr});var pj=u((Nzr,cj)=>{"use strict";var tv=b(),jNr=ev();function VNr(r,e,t){return tv(e)||tv(t)||tv(r)||t<0||r<0||r>1?NaN:t===0?e:jNr(r,e,t)}cj.exports=VNr});var mj=u((Azr,gj)=>{"use strict";var GNr=b();function UNr(r,e){return GNr(r)||r<0||r>1?NaN:e}gj.exports=UNr});var hj=u((Ozr,yj)=>{"use strict";var WNr=I(),qj=b();function HNr(r){if(qj(r))return WNr(NaN);return e;function e(t){return qj(t)||t<0||t>1?NaN:r}}yj.exports=HNr});var iv=u((Szr,wj)=>{"use strict";var kNr=w(),dj=mj(),DNr=hj();kNr(dj,"factory",DNr);wj.exports=dj});var Ej=u((Tzr,bj)=>{"use strict";var XNr=I(),JNr=iv().factory,nv=b(),zNr=ev();function YNr(r,e){if(nv(r)||nv(e)||e<0)return XNr(NaN);if(e===0)return JNr(r);return t;function t(i){return nv(i)||i<0||i>1?NaN:zNr(i,r,e)}}bj.exports=YNr});var Oj=u((Lzr,Aj)=>{"use strict";var ZNr=w(),Nj=pj(),QNr=Ej();ZNr(Nj,"factory",QNr);Aj.exports=Nj});var Tj=u((Izr,Sj)=>{"use strict";var $Nr=Oj();function KNr(r,e,t){return $Nr(r(),e,t)}Sj.exports=KNr});var av=u((Pzr,Cj)=>{"use strict";var te=w(),e0=P(),Lj=_(),Ij=T(),Pj=L(),_j=A(),Rj=I(),xNr=C(),t0=k().factory,Fj=b(),rAr=R(),eAr=ij(),Mj=Tj();function tAr(){var r,e,t,i,n,a;if(arguments.length===0)e=t0();else if(arguments.length===1){if(r=arguments[0],!Ij(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(_j(r,"prng")){if(!Pj(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=t0(r)}else{if(n=arguments[0],a=arguments[1],i=eAr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Ij(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(_j(r,"prng")){if(!Pj(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=t0(r)}else e=t0()}return n===void 0?t=y:t=q,te(t,"NAME","cosine"),r&&r.prng?(te(t,"seed",null),te(t,"seedLength",null),Lj(t,"state",Rj(null),xNr),te(t,"stateLength",null),te(t,"byteLength",null),te(t,"toJSON",Rj(null)),te(t,"PRNG",e)):(e0(t,"seed",s),e0(t,"seedLength",o),Lj(t,"state",l,c),e0(t,"stateLength",v),e0(t,"byteLength",f),te(t,"toJSON",p),te(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=rAr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return Mj(e,n,a)}function y(m,g){return Fj(m)||Fj(g)||g<=0?NaN:Mj(e,m,g)}}Cj.exports=tAr});var jj=u((_zr,Bj)=>{"use strict";var iAr=av(),nAr=iAr();Bj.exports=nAr});var Uj=u((Rzr,Gj)=>{"use strict";var aAr=w(),Vj=jj(),uAr=av();aAr(Vj,"factory",uAr);Gj.exports=Vj});var Dj=u((Fzr,kj)=>{"use strict";var Wj=Rr().isPrimitive,Hj=tr();function sAr(r,e){return!Wj(r)||Hj(r)?new TypeError("invalid argument. First argument must be an integer and not `NaN`. Value: `"+r+"`."):!Wj(e)||Hj(e)?new TypeError("invalid argument. Second argument must be an integer and not `NaN`. Value: `"+e+"`."):r>e?new RangeError("invalid argument. Minimum support `a` must be less than or equal to maximum support `b`. Value: `["+r+","+e+"]`."):null}kj.exports=sAr});var zj=u((Mzr,Jj)=>{"use strict";var uv=na(),oi=rr();function Xj(r,e,t){var i,n,a,s,o,v,f,l,c;if(a=t-e,a===0)return e;if(f=r.MIN,l=r.MAX,n=l-f,n===a)return r()-f+e;if(n<a)for(s=0;;){for(a===uv?(s=oi(a/(n+1)),a%(n+1)===n&&(s+=1)):s=oi((a+1)/(n+1)),i=0,v=1;v<=s;){if(i+=(r()-f)*v,v*n===a-v+1)return i;v*=n+1}if(c=Xj(r,0,oi(a/v)),!(c>uv/v)&&(c*=v,i+=c,!(i>a)))return i+e}for(n===uv?(o=oi(n/(a+1)),n%(a+1)===a&&(o+=1)):o=oi((n+1)/(a+1));;)if(i=r()-f,i=oi(i/o),i<=a)return i+e}Jj.exports=Xj});var sv=u((Czr,eV)=>{"use strict";var ie=w(),i0=P(),Yj=_(),Zj=T(),Qj=L(),$j=A(),Kj=I(),oAr=C(),n0=k().factory,xj=b(),vi=Ar(),vAr=R(),fAr=Dj(),rV=zj();function lAr(){var r,e,t,i,n,a;if(arguments.length===0)e=n0();else if(arguments.length===1){if(r=arguments[0],!Zj(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if($j(r,"prng")){if(!Qj(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");if(e=r.prng,!vi(e.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!vi(e.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else e=n0(r)}else{if(n=arguments[0],a=arguments[1],i=fAr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!Zj(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if($j(r,"prng")){if(!Qj(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");if(e=r.prng,!vi(e.MIN))throw new TypeError("invalid option. `prng` option must have a `MIN` property specifying the minimum possible pseudorandom integer value.");if(!vi(e.MAX))throw new TypeError("invalid option. `prng` option must have a `MAX` property specifying the maximum possible pseudorandom integer value.")}else e=n0(r)}else e=n0()}return n===void 0?t=y:t=q,ie(t,"NAME","discrete-uniform"),r&&r.prng?(ie(t,"seed",null),ie(t,"seedLength",null),Yj(t,"state",Kj(null),oAr),ie(t,"stateLength",null),ie(t,"byteLength",null),ie(t,"toJSON",Kj(null)),ie(t,"PRNG",e)):(i0(t,"seed",s),i0(t,"seedLength",o),Yj(t,"state",l,c),i0(t,"stateLength",v),i0(t,"byteLength",f),ie(t,"toJSON",p),ie(t,"PRNG",e)),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=vAr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return rV(e,n,a)}function y(m,g){return xj(m)||xj(g)||!vi(m)||!vi(g)||m>g?NaN:rV(e,m,g)}}eV.exports=lAr});var iV=u((Bzr,tV)=>{"use strict";var cAr=sv(),pAr=cAr();tV.exports=pAr});var uV=u((jzr,aV)=>{"use strict";var gAr=w(),nV=iV(),mAr=sv();gAr(nV,"factory",mAr);aV.exports=nV});var oV=u((Vzr,sV)=>{"use strict";var qAr=W().isPrimitive,yAr=Zr().isPrimitive;function hAr(r,e){return yAr(r)?qAr(e)?null:new TypeError("invalid argument. Second argument must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. First argument must be a positive integer. Value: `"+r+"`.")}sV.exports=hAr});var fV=u((Gzr,vV)=>{"use strict";var dAr=B();function wAr(r,e,t){var i,n;for(i=1,n=0;n<e;n++)i*=r();return-(1/t)*dAr(i)}vV.exports=wAr});var ov=u((Uzr,hV)=>{"use strict";var ne=w(),a0=P(),lV=_(),cV=T(),pV=L(),gV=A(),mV=I(),bAr=C(),u0=k().factory,qV=b(),EAr=X1(),NAr=R(),AAr=oV(),yV=fV();function OAr(){var r,e,t,i,n,a;if(arguments.length===0)e=u0();else if(arguments.length===1){if(t=arguments[0],!cV(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(gV(t,"prng")){if(!pV(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=t.prng}else e=u0(t)}else{if(a=arguments[0],r=arguments[1],n=AAr(a,r),n)throw n;if(arguments.length>2){if(t=arguments[2],!cV(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(gV(t,"prng")){if(!pV(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=t.prng}else e=u0(t)}else e=u0()}return a===void 0?i=y:i=q,ne(i,"NAME","erlang"),t&&t.prng?(ne(i,"seed",null),ne(i,"seedLength",null),lV(i,"state",mV(null),bAr),ne(i,"stateLength",null),ne(i,"byteLength",null),ne(i,"toJSON",mV(null)),ne(i,"PRNG",e)):(a0(i,"seed",s),a0(i,"seedLength",o),lV(i,"state",l,c),a0(i,"stateLength",v),a0(i,"byteLength",f),ne(i,"toJSON",p),ne(i,"PRNG",e),e=e.normalized),i;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=NAr(e.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return yV(e,a,r)}function y(m,g){return qV(m)||qV(g)||!EAr(m)||g<=0?NaN:yV(e,m,g)}}hV.exports=OAr});var wV=u((Wzr,dV)=>{"use strict";var SAr=ov(),TAr=SAr();dV.exports=TAr});var NV=u((Hzr,EV)=>{"use strict";var LAr=w(),bV=wV(),IAr=ov();LAr(bV,"factory",IAr);EV.exports=bV});var OV=u((kzr,AV)=>{"use strict";var PAr=B();function _Ar(r,e){return-PAr(1-r())/e}AV.exports=_Ar});var vv=u((Dzr,RV)=>{"use strict";var ae=w(),s0=P(),SV=_(),RAr=W().isPrimitive,TV=T(),LV=L(),IV=A(),PV=I(),FAr=C(),o0=k().factory,MAr=b(),CAr=R(),_V=OV();function BAr(){var r,e,t,i;if(arguments.length===0)t=o0();else if(arguments.length===1&&TV(arguments[0]))if(e=arguments[0],IV(e,"prng")){if(!LV(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=o0(e);else{if(r=arguments[0],!RAr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!TV(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(IV(e,"prng")){if(!LV(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=o0(e)}else t=o0()}return r===void 0?i=p:i=c,ae(i,"NAME","exponential"),e&&e.prng?(ae(i,"seed",null),ae(i,"seedLength",null),SV(i,"state",PV(null),FAr),ae(i,"stateLength",null),ae(i,"byteLength",null),ae(i,"toJSON",PV(null)),ae(i,"PRNG",t)):(s0(i,"seed",n),s0(i,"seedLength",a),SV(i,"state",v,f),s0(i,"stateLength",s),s0(i,"byteLength",o),ae(i,"toJSON",l),ae(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=CAr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return _V(t,r)}function p(q){return MAr(q)||q<=0?NaN:_V(t,q)}}RV.exports=BAr});var MV=u((Xzr,FV)=>{"use strict";var jAr=vv(),VAr=jAr();FV.exports=VAr});var jV=u((Jzr,BV)=>{"use strict";var GAr=w(),CV=MV(),UAr=vv();GAr(CV,"factory",UAr);BV.exports=CV});var UV=u((zzr,GV)=>{"use strict";var VV=W().isPrimitive;function WAr(r,e){return VV(r)?VV(e)?null:new TypeError("invalid argument. `d2` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `d1` must be a positive number. Value: `"+r+"`.")}GV.exports=WAr});var HV=u((Yzr,WV)=>{"use strict";function HAr(r,e,t){var i=r(e)/e,n=r(t)/t;return i/n}WV.exports=HAr});var fv=u((Zzr,QV)=>{"use strict";var ze=w(),v0=P(),kV=_(),DV=T(),XV=L(),JV=A(),zV=I(),kAr=C(),fi=an().factory,YV=b(),DAr=R(),XAr=UV(),ZV=HV();function JAr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=fi();else if(arguments.length===1){if(e=arguments[0],!DV(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(JV(e,"prng")){if(!XV(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");r=fi({prng:e.prng})}else r=fi(e)}else{if(a=arguments[0],s=arguments[1],n=XAr(a,s),n)throw n;if(arguments.length>2){if(e=arguments[2],!DV(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(JV(e,"prng")){if(!XV(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");r=fi({prng:e.prng})}else r=fi(e)}else r=fi()}return a===void 0?i=m:i=y,t=r.PRNG,ze(i,"NAME","f"),e&&e.prng?(ze(i,"seed",null),ze(i,"seedLength",null),kV(i,"state",zV(null),kAr),ze(i,"stateLength",null),ze(i,"byteLength",null),ze(i,"toJSON",zV(null))):(v0(i,"seed",o),v0(i,"seedLength",v),kV(i,"state",c,p),v0(i,"stateLength",f),v0(i,"byteLength",l),ze(i,"toJSON",q)),ze(i,"PRNG",t),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function l(){return t.byteLength}function c(){return t.state}function p(g){t.state=g}function q(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=DAr(t.state),a===void 0?g.params=[]:g.params=[a,s],g}function y(){return ZV(r,a,s)}function m(g,h){return YV(g)||YV(h)||g<=0||h<=0?NaN:ZV(r,g,h)}}QV.exports=JAr});var KV=u((Qzr,$V)=>{"use strict";var zAr=fv(),YAr=zAr();$V.exports=YAr});var eG=u(($zr,rG)=>{"use strict";var ZAr=w(),xV=KV(),QAr=fv();ZAr(xV,"factory",QAr);rG.exports=xV});var nG=u((Kzr,iG)=>{"use strict";var tG=W().isPrimitive,$Ar=j().isPrimitive,lv=tr();function KAr(r,e,t){return!tG(r)||lv(r)?new TypeError("invalid argument. First argument must be a positive number primitive and not `NaN`. Value: `"+r+"`."):!tG(e)||lv(e)?new TypeError("invalid argument. Second argument must be a positive number primitive and not `NaN`. Value: `"+e+"`."):!$Ar(t)||lv(t)?new TypeError("invalid argument. Third argument must be a number primitive and not `NaN`. Value: `"+t+"`."):null}iG.exports=KAr});var uG=u((xzr,aG)=>{"use strict";var xAr=x(),rOr=B();function eOr(r,e,t,i){return i+t*xAr(-rOr(r()),-1/e)}aG.exports=eOr});var pv=u((rYr,pG)=>{"use strict";var ue=w(),f0=P(),sG=_(),oG=T(),vG=L(),fG=A(),lG=I(),tOr=C(),l0=k().factory,cv=b(),iOr=R(),nOr=nG(),cG=uG();function aOr(){var r,e,t,i,n,a,s;if(arguments.length===0)t=l0();else if(arguments.length===1){if(e=arguments[0],!oG(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(fG(e,"prng")){if(!vG(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=l0(e)}else{if(r=arguments[0],a=arguments[1],s=arguments[2],n=nOr(r,a,s),n)throw n;if(arguments.length>3){if(e=arguments[3],!oG(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(fG(e,"prng")){if(!vG(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=l0(e)}else t=l0()}return r===void 0?i=m:i=y,ue(i,"NAME","frechet"),e&&e.prng?(ue(i,"seed",null),ue(i,"seedLength",null),sG(i,"state",lG(null),tOr),ue(i,"stateLength",null),ue(i,"byteLength",null),ue(i,"toJSON",lG(null)),ue(i,"PRNG",t)):(f0(i,"seed",o),f0(i,"seedLength",v),sG(i,"state",c,p),f0(i,"stateLength",f),f0(i,"byteLength",l),ue(i,"toJSON",q),ue(i,"PRNG",t),t=t.normalized),i;function o(){return t.seed}function v(){return t.seedLength}function f(){return t.stateLength}function l(){return t.byteLength}function c(){return t.state}function p(g){t.state=g}function q(){var g={};return g.type="PRNG",g.name=i.NAME,g.state=iOr(t.state),r===void 0?g.params=[]:g.params=[r,a,s],g}function y(){return cG(t,r,a,s)}function m(g,h,E){return cv(g)||cv(h)||cv(E)||g<=0||h<=0?NaN:cG(t,g,h,E)}}pG.exports=aOr});var mG=u((eYr,gG)=>{"use strict";var uOr=pv(),sOr=uOr();gG.exports=sOr});var hG=u((tYr,yG)=>{"use strict";var oOr=w(),qG=mG(),vOr=pv();oOr(qG,"factory",vOr);yG.exports=qG});var bG=u((iYr,wG)=>{"use strict";var fOr=rr(),dG=B();function lOr(r,e){var t=r();return t===0&&(t=r()),fOr(dG(t)/dG(1-e))}wG.exports=lOr});var gv=u((nYr,LG)=>{"use strict";var se=w(),c0=P(),EG=_(),NG=T(),cOr=zi().isPrimitive,AG=L(),OG=A(),SG=I(),pOr=C(),p0=k().factory,gOr=b(),mOr=R(),TG=bG();function qOr(){var r,e,t,i;if(arguments.length===0)e=p0();else if(arguments.length===1&&NG(arguments[0]))if(r=arguments[0],OG(r,"prng")){if(!AG(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=p0(r);else{if(i=arguments[0],!cOr(i))throw new TypeError("invalid argument. First argument must be a probability. Value: `"+i+"`.");if(arguments.length>1){if(r=arguments[1],!NG(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(OG(r,"prng")){if(!AG(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=p0(r)}else e=p0()}return i===void 0?t=p:t=c,se(t,"NAME","geometric"),r&&r.prng?(se(t,"seed",null),se(t,"seedLength",null),EG(t,"state",SG(null),pOr),se(t,"stateLength",null),se(t,"byteLength",null),se(t,"toJSON",SG(null)),se(t,"PRNG",e)):(c0(t,"seed",n),c0(t,"seedLength",a),EG(t,"state",v,f),c0(t,"stateLength",s),c0(t,"byteLength",o),se(t,"toJSON",l),se(t,"PRNG",e),e=e.normalized),t;function n(){return e.seed}function a(){return e.seedLength}function s(){return e.stateLength}function o(){return e.byteLength}function v(){return e.state}function f(q){e.state=q}function l(){var q={};return q.type="PRNG",q.name=t.NAME,q.state=mOr(e.state),i===void 0?q.params=[]:q.params=[i],q}function c(){return TG(e,i)}function p(q){return gOr(q)||q<0||q>1?NaN:TG(e,q)}}LG.exports=qOr});var PG=u((aYr,IG)=>{"use strict";var yOr=gv(),hOr=yOr();IG.exports=hOr});var FG=u((uYr,RG)=>{"use strict";var dOr=w(),_G=PG(),wOr=gv();dOr(_G,"factory",wOr);RG.exports=_G});var CG=u((sYr,MG)=>{"use strict";var bOr=j().isPrimitive,EOr=W().isPrimitive,NOr=tr();function AOr(r,e){return!bOr(r)||NOr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):EOr(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`.")}MG.exports=AOr});var VG=u((oYr,jG)=>{"use strict";var BG=B();function OOr(r,e,t){return e-t*BG(-BG(r()))}jG.exports=OOr});var mv=u((vYr,JG)=>{"use strict";var oe=w(),g0=P(),GG=_(),UG=T(),WG=L(),HG=A(),kG=I(),SOr=C(),m0=k().factory,DG=b(),TOr=R(),LOr=CG(),XG=VG();function IOr(){var r,e,t,i,n,a;if(arguments.length===0)t=m0();else if(arguments.length===1){if(e=arguments[0],!UG(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(HG(e,"prng")){if(!WG(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=m0(e)}else{if(a=arguments[0],r=arguments[1],n=LOr(a,r),n)throw n;if(arguments.length>2){if(e=arguments[2],!UG(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(HG(e,"prng")){if(!WG(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=m0(e)}else t=m0()}return a===void 0?i=y:i=q,oe(i,"NAME","gumbel"),e&&e.prng?(oe(i,"seed",null),oe(i,"seedLength",null),GG(i,"state",kG(null),SOr),oe(i,"stateLength",null),oe(i,"byteLength",null),oe(i,"toJSON",kG(null)),oe(i,"PRNG",t)):(g0(i,"seed",s),g0(i,"seedLength",o),GG(i,"state",l,c),g0(i,"stateLength",v),g0(i,"byteLength",f),oe(i,"toJSON",p),oe(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function l(){return t.state}function c(m){t.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=TOr(t.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return XG(t,a,r)}function y(m,g){return DG(m)||DG(g)||g<=0?NaN:XG(t,m,g)}}JG.exports=IOr});var YG=u((fYr,zG)=>{"use strict";var POr=mv(),_Or=POr();zG.exports=_Or});var $G=u((lYr,QG)=>{"use strict";var ROr=w(),ZG=YG(),FOr=mv();ROr(ZG,"factory",FOr);QG.exports=ZG});var xG=u((cYr,KG)=>{"use strict";var MOr=rr();function COr(r){return MOr(r)===r&&r>=0}KG.exports=COr});var eU=u((pYr,rU)=>{"use strict";var BOr=xG();rU.exports=BOr});var iU=u((gYr,tU)=>{"use strict";var qv=Ae().isPrimitive;function jOr(r,e,t){return qv(r)?qv(e)?qv(t)?t>r?new RangeError("invalid argument. `n` must be less than or equal to `N`. Value: `"+t+"`."):e>r?new RangeError("invalid argument. `K` must be less than or equal to `N`. Value: `"+e+"`."):null:new TypeError("invalid argument. `n` must be a nonnegative integer. Value: `"+t+"`."):new TypeError("invalid argument. `K` must be a nonnegative integer. Value: `"+e+"`."):new TypeError("invalid argument. `N` must be a nonnegative integer. Value: `"+r+"`.")}tU.exports=jOr});var nU=u((mYr,VOr)=>{VOr.exports=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3,20922789888e3,355687428096e3,6402373705728e3,121645100408832e3,243290200817664e4,5109094217170944e4,11240007277776077e5,2585201673888498e7,6204484017332394e8,15511210043330986e9,40329146112660565e10,10888869450418352e12,30488834461171387e13,8841761993739702e15,26525285981219107e16,8222838654177922e18,2631308369336935e20,8683317618811886e21,29523279903960416e22,10333147966386145e24,37199332678990125e25,13763753091226346e27,5230226174666011e29,20397882081197444e30,8159152832478977e32,3345252661316381e34,140500611775288e37,6041526306337383e37,2658271574788449e39,11962222086548019e40,5502622159812089e42,25862324151116818e43,12413915592536073e45,6082818640342675e47,30414093201713376e48,15511187532873822e50,8065817517094388e52,42748832840600255e53,2308436973392414e56,12696403353658276e57,7109985878048635e59,40526919504877214e60,23505613312828785e62,13868311854568984e64,832098711274139e67,5075802138772248e68,3146997326038794e70,198260831540444e73,12688693218588417e73,8247650592082472e75,5443449390774431e77,3647111091818868e79,24800355424368305e80,1711224524281413e83,11978571669969892e84,8504785885678623e86,61234458376886085e87,44701154615126844e89,3307885441519386e92,248091408113954e95,18854947016660504e95,14518309202828587e97,11324281178206297e99,8946182130782976e101,7156945704626381e103,5797126020747368e105,4753643337012842e107,3945523969720659e109,3314240134565353e111,281710411438055e114,24227095383672734e114,2107757298379528e117,18548264225739844e118,1650795516090846e121,14857159644817615e122,1352001527678403e125,12438414054641308e126,11567725070816416e128,1087366156656743e131,1032997848823906e133,9916779348709496e134,9619275968248212e136,9426890448883248e138,9332621544394415e140,9332621544394415e142,942594775983836e145,9614466715035127e146,990290071648618e149,10299016745145628e150,1081396758240291e153,11462805637347084e154,1226520203196138e157,1324641819451829e159,14438595832024937e160,1588245541522743e163,17629525510902446e164,1974506857221074e167,22311927486598138e168,25435597334721877e170,2925093693493016e173,3393108684451898e175,3969937160808721e177,4684525849754291e179,5574585761207606e181,6689502913449127e183,8094298525273444e185,9875044200833601e187,1214630436702533e190,1506141741511141e192,1882677176888926e194,2372173242880047e196,30126600184576594e197,3856204823625804e200,4974504222477287e202,6466855489220474e204,847158069087882e207,11182486511960043e208,14872707060906857e210,19929427461615188e212,26904727073180504e214,3659042881952549e217,5012888748274992e219,6917786472619489e221,9615723196941089e223,13462012475717526e225,1898143759076171e228,2695364137888163e230,3854370717180073e232,55502938327393044e233,8047926057471992e236,11749972043909107e238,1727245890454639e241,25563239178728654e242,380892263763057e246,5713383956445855e247,862720977423324e250,13113358856834524e251,20063439050956823e253,30897696138473508e255,4789142901463394e258,7471062926282894e260,11729568794264145e262,1853271869493735e265,29467022724950384e266,47147236359920616e268,7590705053947219e271,12296942187394494e273,20044015765453026e275,3287218585534296e278,5423910666131589e280,9003691705778438e282,1503616514864999e285,25260757449731984e286,4269068009004705e289,7257415615307999e291]});var uU=u((qYr,aU)=>{"use strict";var GOr=b(),UOr=Ar(),WOr=jt(),HOr=M(),kOr=nU(),DOr=170;function XOr(r){return GOr(r)?NaN:UOr(r)?r<0?NaN:r<=DOr?kOr[r]:HOr:WOr(r+1)}aU.exports=XOr});var oU=u((yYr,sU)=>{"use strict";var JOr=uU();sU.exports=JOr});var fU=u((hYr,vU)=>{"use strict";var Ye=oU();function zOr(r,e,t,i){var n,a,s;for(i<t?(n=Ye(t)*Ye(e+t-i)/(Ye(e+t)*Ye(t-i)),s=0):(n=Ye(e)*Ye(i)/(Ye(i-t)*Ye(e+t)),s=i-t),a=r();a>n;)a-=n,n*=(e-s)*(i-s)/((s+1)*(t-i+1+s)),s+=1;return s}vU.exports=zOr});var cU=u((dYr,lU)=>{"use strict";var q0=fU();function YOr(r,e,t,i){var n,a,s,o;return i>e/2?(s=e-i,2*t<=e?(n=t,a=e-t,o=q0(r,n,a,s),t-o):(a=t,n=e-t,o=q0(r,n,a,s),i-e+t+o)):(s=i,2*t<=e?(n=t,a=e-t,o=q0(r,n,a,s),o):(n=e-t,a=t,o=q0(r,n,a,s),i-o))}lU.exports=YOr});var hv=u((wYr,wU)=>{"use strict";var ve=w(),y0=P(),pU=_(),gU=T(),mU=L(),qU=A(),yU=I(),ZOr=C(),h0=k().factory,yv=eU(),hU=M(),QOr=R(),$Or=iU(),dU=cU();function KOr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=h0();else if(arguments.length===1){if(r=arguments[0],!gU(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(qU(r,"prng")){if(!mU(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=h0(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=$Or(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!gU(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(qU(r,"prng")){if(!mU(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=h0(r)}else e=h0()}return n===void 0?t=m:t=y,ve(t,"NAME","hypergeometric"),r&&r.prng?(ve(t,"seed",null),ve(t,"seedLength",null),pU(t,"state",yU(null),ZOr),ve(t,"stateLength",null),ve(t,"byteLength",null),ve(t,"toJSON",yU(null)),ve(t,"PRNG",e)):(y0(t,"seed",o),y0(t,"seedLength",v),pU(t,"state",c,p),y0(t,"stateLength",f),y0(t,"byteLength",l),ve(t,"toJSON",q),ve(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function l(){return e.byteLength}function c(){return e.state}function p(g){e.state=g}function q(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=QOr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function y(){return dU(e,n,a,s)}function m(g,h,E){return g===hU||h===hU||!yv(g)||!yv(h)||!yv(E)||E>g?NaN:dU(e,g,h,E)}}wU.exports=KOr});var EU=u((bYr,bU)=>{"use strict";var xOr=hv(),rSr=xOr();bU.exports=rSr});var OU=u((EYr,AU)=>{"use strict";var eSr=w(),NU=EU(),tSr=hv();eSr(NU,"factory",tSr);AU.exports=NU});var LU=u((NYr,TU)=>{"use strict";var SU=W().isPrimitive;function iSr(r,e){return SU(r)?SU(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}TU.exports=iSr});var dv=u((AYr,CU)=>{"use strict";var Ze=w(),d0=P(),IU=_(),PU=T(),_U=L(),RU=A(),FU=I(),nSr=C(),li=ni().factory,MU=b(),aSr=R(),uSr=LU();function sSr(){var r,e,t,i,n,a,s;if(arguments.length===0)r=li();else if(arguments.length===1){if(i=arguments[0],!PU(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(RU(i,"prng")){if(!_U(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");r=li({prng:i.prng})}else r=li(i)}else{if(e=arguments[0],t=arguments[1],s=uSr(e,t),s)throw s;if(arguments.length>2){if(i=arguments[2],!PU(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(RU(i,"prng")){if(!_U(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");r=li(e,t,{prng:i.prng})}else r=li(e,t,i)}else r=li(e,t)}return e===void 0?a=m:a=y,n=r.PRNG,Ze(a,"NAME","invgamma"),i&&i.prng?(Ze(a,"seed",null),Ze(a,"seedLength",null),IU(a,"state",FU(null),nSr),Ze(a,"stateLength",null),Ze(a,"byteLength",null),Ze(a,"toJSON",FU(null))):(d0(a,"seed",o),d0(a,"seedLength",v),IU(a,"state",c,p),d0(a,"stateLength",f),d0(a,"byteLength",l),Ze(a,"toJSON",q)),Ze(a,"PRNG",n),a;function o(){return n.seed}function v(){return n.seedLength}function f(){return n.stateLength}function l(){return n.byteLength}function c(){return n.state}function p(g){n.state=g}function q(){var g={};return g.type="PRNG",g.name=a.NAME,g.state=aSr(n.state),e===void 0?g.params=[]:g.params=[e,t],g}function y(){return 1/r()}function m(g,h){return MU(g)||MU(h)||g<=0||h<=0?NaN:1/r(g,h)}}CU.exports=sSr});var jU=u((OYr,BU)=>{"use strict";var oSr=dv(),vSr=oSr();BU.exports=vSr});var UU=u((SYr,GU)=>{"use strict";var fSr=w(),VU=jU(),lSr=dv();fSr(VU,"factory",lSr);GU.exports=VU});var kU=u((TYr,HU)=>{"use strict";var WU=W().isPrimitive;function cSr(r,e){return WU(r)?WU(e)?null:new TypeError("invalid argument. `b` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `a` must be a positive number. Value: `"+r+"`.")}HU.exports=cSr});var JU=u((LYr,XU)=>{"use strict";var DU=x();function pSr(r,e,t){var i=r();return DU(1-DU(1-i,1/t),1/e)}XU.exports=pSr});var wv=u((IYr,rW)=>{"use strict";var fe=w(),w0=P(),zU=_(),YU=T(),ZU=L(),QU=A(),$U=I(),gSr=C(),b0=k().factory,KU=b(),mSr=R(),qSr=kU(),xU=JU();function ySr(){var r,e,t,i,n,a;if(arguments.length===0)e=b0();else if(arguments.length===1){if(r=arguments[0],!YU(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(QU(r,"prng")){if(!ZU(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=b0(r)}else{if(n=arguments[0],a=arguments[1],i=qSr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!YU(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(QU(r,"prng")){if(!ZU(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=b0(r)}else e=b0()}return n===void 0?t=y:t=q,fe(t,"NAME","kumaraswamy"),r&&r.prng?(fe(t,"seed",null),fe(t,"seedLength",null),zU(t,"state",$U(null),gSr),fe(t,"stateLength",null),fe(t,"byteLength",null),fe(t,"toJSON",$U(null)),fe(t,"PRNG",e)):(w0(t,"seed",s),w0(t,"seedLength",o),zU(t,"state",l,c),w0(t,"stateLength",v),w0(t,"byteLength",f),fe(t,"toJSON",p),fe(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=mSr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return xU(e,n,a)}function y(m,g){return KU(m)||KU(g)||m<=0||g<=0?NaN:xU(e,m,g)}}rW.exports=ySr});var tW=u((PYr,eW)=>{"use strict";var hSr=wv(),dSr=hSr();eW.exports=dSr});var aW=u((_Yr,nW)=>{"use strict";var wSr=w(),iW=tW(),bSr=wv();wSr(iW,"factory",bSr);nW.exports=iW});var sW=u((RYr,uW)=>{"use strict";var ESr=j().isPrimitive,NSr=W().isPrimitive,ASr=tr();function OSr(r,e){return!ESr(r)||ASr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):NSr(e)?null:new TypeError("invalid argument. `b` must be a positive number. Value: `"+e+"`.")}uW.exports=OSr});var vW=u((FYr,oW)=>{"use strict";var SSr=Ja(),TSr=Z(),LSr=B();function ISr(r,e,t){var i=r()-.5;return e-t*SSr(i)*LSr(1-2*TSr(i))}oW.exports=ISr});var bv=u((MYr,yW)=>{"use strict";var le=w(),E0=P(),fW=_(),lW=T(),cW=L(),pW=A(),gW=I(),PSr=C(),N0=k().factory,mW=b(),_Sr=R(),RSr=sW(),qW=vW();function FSr(){var r,e,t,i,n,a;if(arguments.length===0)e=N0();else if(arguments.length===1){if(r=arguments[0],!lW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(pW(r,"prng")){if(!cW(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=N0(r)}else{if(n=arguments[0],a=arguments[1],i=RSr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!lW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(pW(r,"prng")){if(!cW(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=N0(r)}else e=N0()}return n===void 0?t=y:t=q,le(t,"NAME","laplace"),r&&r.prng?(le(t,"seed",null),le(t,"seedLength",null),fW(t,"state",gW(null),PSr),le(t,"stateLength",null),le(t,"byteLength",null),le(t,"toJSON",gW(null)),le(t,"PRNG",e)):(E0(t,"seed",s),E0(t,"seedLength",o),fW(t,"state",l,c),E0(t,"stateLength",v),E0(t,"byteLength",f),le(t,"toJSON",p),le(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=_Sr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return qW(e,n,a)}function y(m,g){return mW(m)||mW(g)||g<=0?NaN:qW(e,m,g)}}yW.exports=FSr});var dW=u((CYr,hW)=>{"use strict";var MSr=bv(),CSr=MSr();hW.exports=CSr});var EW=u((BYr,bW)=>{"use strict";var BSr=w(),wW=dW(),jSr=bv();BSr(wW,"factory",jSr);bW.exports=wW});var AW=u((jYr,NW)=>{"use strict";var VSr=j().isPrimitive,GSr=W().isPrimitive,USr=tr();function WSr(r,e){return!VSr(r)||USr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):GSr(e)?null:new TypeError("invalid argument. `c` must be a positive number. Value: `"+e+"`.")}NW.exports=WSr});var SW=u((VYr,OW)=>{"use strict";function HSr(r){var e,t,i;return r===0?-.0005087819496582806:(r<0?e=-r:e=r,e<=1?(t=-.0005087819496582806+r*(-.008368748197417368+r*(.03348066254097446+r*(-.012692614766297404+r*(-.03656379714117627+r*(.02198786811111689+r*(.008226878746769157+r*(-.005387729650712429+r*(0+r*0)))))))),i=1+r*(-.9700050433032906+r*(-1.5657455823417585+r*(1.5622155839842302+r*(.662328840472003+r*(-.7122890234154284+r*(-.05273963823400997+r*(.07952836873415717+r*(-.0023339375937419+r*.0008862163904564247))))))))):(r=1/r,t=0+r*(0+r*(-.005387729650712429+r*(.008226878746769157+r*(.02198786811111689+r*(-.03656379714117627+r*(-.012692614766297404+r*(.03348066254097446+r*(-.008368748197417368+r*-.0005087819496582806)))))))),i=.0008862163904564247+r*(-.0023339375937419+r*(.07952836873415717+r*(-.05273963823400997+r*(-.7122890234154284+r*(.662328840472003+r*(1.5622155839842302+r*(-1.5657455823417585+r*(-.9700050433032906+r*1))))))))),t/i)}OW.exports=HSr});var LW=u((GYr,TW)=>{"use strict";function kSr(r){var e,t,i;return r===0?-.20243350835593876:(r<0?e=-r:e=r,e<=1?(t=-.20243350835593876+r*(.10526468069939171+r*(8.3705032834312+r*(17.644729840837403+r*(-18.851064805871424+r*(-44.6382324441787+r*(17.445385985570866+r*(21.12946554483405+r*-3.6719225470772936))))))),i=1+r*(6.242641248542475+r*(3.971343795334387+r*(-28.66081804998+r*(-20.14326346804852+r*(48.560921310873994+r*(10.826866735546016+r*(-22.643693341313973+r*1.7211476576120028)))))))):(r=1/r,t=-3.6719225470772936+r*(21.12946554483405+r*(17.445385985570866+r*(-44.6382324441787+r*(-18.851064805871424+r*(17.644729840837403+r*(8.3705032834312+r*(.10526468069939171+r*-.20243350835593876))))))),i=1.7211476576120028+r*(-22.643693341313973+r*(10.826866735546016+r*(48.560921310873994+r*(-20.14326346804852+r*(-28.66081804998+r*(3.971343795334387+r*(6.242641248542475+r*1)))))))),t/i)}TW.exports=kSr});var PW=u((UYr,IW)=>{"use strict";function DSr(r){var e,t,i;return r===0?-.1311027816799519:(r<0?e=-r:e=r,e<=1?(t=-.1311027816799519+r*(-.16379404719331705+r*(.11703015634199525+r*(.38707973897260434+r*(.3377855389120359+r*(.14286953440815717+r*(.029015791000532906+r*(.0021455899538880526+r*(-6794655751811263e-22+r*(28522533178221704e-24+r*-681149956853777e-24))))))))),i=1+r*(3.4662540724256723+r*(5.381683457070069+r*(4.778465929458438+r*(2.5930192162362027+r*(.848854343457902+r*(.15226433829533179+r*(.011059242293464892+r*(0+r*(0+r*0)))))))))):(r=1/r,t=-681149956853777e-24+r*(28522533178221704e-24+r*(-6794655751811263e-22+r*(.0021455899538880526+r*(.029015791000532906+r*(.14286953440815717+r*(.3377855389120359+r*(.38707973897260434+r*(.11703015634199525+r*(-.16379404719331705+r*-.1311027816799519))))))))),i=0+r*(0+r*(0+r*(.011059242293464892+r*(.15226433829533179+r*(.848854343457902+r*(2.5930192162362027+r*(4.778465929458438+r*(5.381683457070069+r*(3.4662540724256723+r*1)))))))))),t/i)}IW.exports=DSr});var RW=u((WYr,_W)=>{"use strict";function XSr(r){var e,t,i;return r===0?-.0350353787183178:(r<0?e=-r:e=r,e<=1?(t=-.0350353787183178+r*(-.0022242652921344794+r*(.018557330651423107+r*(.009508047013259196+r*(.0018712349281955923+r*(.00015754461742496055+r*(460469890584318e-20+r*(-2304047769118826e-25+r*26633922742578204e-28))))))),i=1+r*(1.3653349817554064+r*(.7620591645536234+r*(.22009110576413124+r*(.03415891436709477+r*(.00263861676657016+r*(7646752923027944e-20+r*(0+r*0)))))))):(r=1/r,t=26633922742578204e-28+r*(-2304047769118826e-25+r*(460469890584318e-20+r*(.00015754461742496055+r*(.0018712349281955923+r*(.009508047013259196+r*(.018557330651423107+r*(-.0022242652921344794+r*-.0350353787183178))))))),i=0+r*(0+r*(7646752923027944e-20+r*(.00263861676657016+r*(.03415891436709477+r*(.22009110576413124+r*(.7620591645536234+r*(1.3653349817554064+r*1)))))))),t/i)}_W.exports=XSr});var MW=u((HYr,FW)=>{"use strict";function JSr(r){var e,t,i;return r===0?-.016743100507663373:(r<0?e=-r:e=r,e<=1?(t=-.016743100507663373+r*(-.0011295143874558028+r*(.001056288621524929+r*(.00020938631748758808+r*(14962478375834237e-21+r*(44969678992770644e-23+r*(4625961635228786e-24+r*(-2811287356288318e-29+r*9905570997331033e-32))))))),i=1+r*(.5914293448864175+r*(.1381518657490833+r*(.016074608709367652+r*(.0009640118070051656+r*(27533547476472603e-21+r*(282243172016108e-21+r*(0+r*0)))))))):(r=1/r,t=9905570997331033e-32+r*(-2811287356288318e-29+r*(4625961635228786e-24+r*(44969678992770644e-23+r*(14962478375834237e-21+r*(.00020938631748758808+r*(.001056288621524929+r*(-.0011295143874558028+r*-.016743100507663373))))))),i=0+r*(0+r*(282243172016108e-21+r*(27533547476472603e-21+r*(.0009640118070051656+r*(.016074608709367652+r*(.1381518657490833+r*(.5914293448864175+r*1)))))))),t/i)}FW.exports=JSr});var VW=u((kYr,jW)=>{"use strict";var zSr=b(),CW=G(),BW=B(),YSr=M(),ZSr=z(),QSr=SW(),$Sr=LW(),KSr=PW(),xSr=RW(),rTr=MW(),eTr=.08913147449493408,tTr=2.249481201171875,iTr=.807220458984375,nTr=.9399557113647461,aTr=.9836282730102539;function uTr(r){var e,t,i,n,a,s;return zSr(r)?NaN:r===1?YSr:r===-1?ZSr:r===0?r:r>1||r<-1?NaN:(r<0?(e=-1,t=-r):(e=1,t=r),n=1-t,t<=.5?(a=t*(t+10),s=QSr(t),e*(a*eTr+a*s)):n>=.25?(a=CW(-2*BW(n)),n-=.25,s=$Sr(n),e*(a/(tTr+s))):(n=CW(-BW(n)),n<3?(i=n-1.125,s=KSr(i),e*(iTr*n+s*n)):n<6?(i=n-3,s=xSr(i),e*(nTr*n+s*n)):(i=n-6,s=rTr(i),e*(aTr*n+s*n))))}jW.exports=uTr});var Ev=u((DYr,GW)=>{"use strict";var sTr=VW();GW.exports=sTr});var WW=u((XYr,UW)=>{"use strict";var oTr=Ev(),Nv=b(),vTr=G();function fTr(r,e,t){var i,n;return Nv(e)||Nv(t)||Nv(r)||t<0||r<0||r>1?NaN:t===0?e:(i=e,n=t*vTr(2),i+n*oTr(2*r-1))}UW.exports=fTr});var kW=u((JYr,HW)=>{"use strict";var lTr=I(),cTr=iv().factory,pTr=Ev(),Av=b(),gTr=G();function mTr(r,e){var t,i;if(Av(r)||Av(e)||e<0)return lTr(NaN);return e===0&&cTr(r),t=r,i=e*gTr(2),n;function n(a){return Av(a)||a<0||a>1?NaN:t+i*pTr(2*a-1)}}HW.exports=mTr});var JW=u((zYr,XW)=>{"use strict";var qTr=w(),DW=WW(),yTr=kW();qTr(DW,"factory",yTr);XW.exports=DW});var YW=u((YYr,zW)=>{"use strict";var hTr=JW();function dTr(r,e,t){var i=hTr(1-r()/2,0,1);return e+t/(i*i)}zW.exports=dTr});var Ov=u((ZYr,tH)=>{"use strict";var ce=w(),A0=P(),ZW=_(),QW=T(),$W=L(),KW=A(),xW=I(),wTr=C(),O0=k().factory,rH=b(),bTr=R(),ETr=AW(),eH=YW();function NTr(){var r,e,t,i,n,a;if(arguments.length===0)e=O0();else if(arguments.length===1){if(r=arguments[0],!QW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(KW(r,"prng")){if(!$W(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=O0(r)}else{if(n=arguments[0],a=arguments[1],i=ETr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!QW(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(KW(r,"prng")){if(!$W(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=O0(r)}else e=O0()}return n===void 0?t=y:t=q,ce(t,"NAME","levy"),r&&r.prng?(ce(t,"seed",null),ce(t,"seedLength",null),ZW(t,"state",xW(null),wTr),ce(t,"stateLength",null),ce(t,"byteLength",null),ce(t,"toJSON",xW(null)),ce(t,"PRNG",e)):(A0(t,"seed",s),A0(t,"seedLength",o),ZW(t,"state",l,c),A0(t,"stateLength",v),A0(t,"byteLength",f),ce(t,"toJSON",p),ce(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=bTr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return eH(e,n,a)}function y(m,g){return rH(m)||rH(g)||g<=0?NaN:eH(e,m,g)}}tH.exports=NTr});var nH=u((QYr,iH)=>{"use strict";var ATr=Ov(),OTr=ATr();iH.exports=OTr});var sH=u(($Yr,uH)=>{"use strict";var STr=w(),aH=nH(),TTr=Ov();STr(aH,"factory",TTr);uH.exports=aH});var vH=u((KYr,oH)=>{"use strict";var LTr=j().isPrimitive,ITr=W().isPrimitive,PTr=tr();function _Tr(r,e){return!LTr(r)||PTr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):ITr(e)?null:new TypeError("invalid argument. `s` must be a positive number. Value: `"+e+"`.")}oH.exports=_Tr});var lH=u((xYr,fH)=>{"use strict";var RTr=B();function FTr(r,e,t){var i=r();return e+t*RTr(i/(1-i))}fH.exports=FTr});var Sv=u((rZr,dH)=>{"use strict";var pe=w(),S0=P(),cH=_(),pH=T(),gH=L(),mH=A(),qH=I(),MTr=C(),T0=k().factory,yH=b(),CTr=R(),BTr=vH(),hH=lH();function jTr(){var r,e,t,i,n,a;if(arguments.length===0)e=T0();else if(arguments.length===1){if(r=arguments[0],!pH(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(mH(r,"prng")){if(!gH(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=T0(r)}else{if(n=arguments[0],a=arguments[1],i=BTr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!pH(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(mH(r,"prng")){if(!gH(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=T0(r)}else e=T0()}return n===void 0?t=y:t=q,pe(t,"NAME","logistic"),r&&r.prng?(pe(t,"seed",null),pe(t,"seedLength",null),cH(t,"state",qH(null),MTr),pe(t,"stateLength",null),pe(t,"byteLength",null),pe(t,"toJSON",qH(null)),pe(t,"PRNG",e)):(S0(t,"seed",s),S0(t,"seedLength",o),cH(t,"state",l,c),S0(t,"stateLength",v),S0(t,"byteLength",f),pe(t,"toJSON",p),pe(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=CTr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return hH(e,n,a)}function y(m,g){return yH(m)||yH(g)||g<=0?NaN:hH(e,m,g)}}dH.exports=jTr});var bH=u((eZr,wH)=>{"use strict";var VTr=Sv(),GTr=VTr();wH.exports=GTr});var AH=u((tZr,NH)=>{"use strict";var UTr=w(),EH=bH(),WTr=Sv();UTr(EH,"factory",WTr);NH.exports=EH});var SH=u((iZr,OH)=>{"use strict";var HTr=j().isPrimitive,kTr=W().isPrimitive,DTr=tr();function XTr(r,e){return!HTr(r)||DTr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):kTr(e)?null:new TypeError("invalid argument. `sigma` must be a positive number. Value: `"+e+"`.")}OH.exports=XTr});var LH=u((nZr,TH)=>{"use strict";var JTr=sr();function zTr(r,e,t){return JTr(e+t*r())}TH.exports=zTr});var Tv=u((aZr,BH)=>{"use strict";var Qe=w(),L0=P(),IH=_(),PH=T(),_H=L(),RH=A(),FH=I(),YTr=C(),ci=He().factory,MH=b(),ZTr=R(),QTr=SH(),CH=LH();function $Tr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=ci();else if(arguments.length===1){if(t=arguments[0],!PH(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(RH(t,"prng")){if(!_H(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ci({prng:t.prng})}else e=ci(t)}else{if(s=arguments[0],r=arguments[1],a=QTr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!PH(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(RH(t,"prng")){if(!_H(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=ci({prng:t.prng})}else e=ci(t)}else e=ci()}return s===void 0?n=m:n=y,i=e.PRNG,Qe(n,"NAME","lognormal"),t&&t.prng?(Qe(n,"seed",null),Qe(n,"seedLength",null),IH(n,"state",FH(null),YTr),Qe(n,"stateLength",null),Qe(n,"byteLength",null),Qe(n,"toJSON",FH(null))):(L0(n,"seed",o),L0(n,"seedLength",v),IH(n,"state",c,p),L0(n,"stateLength",f),L0(n,"byteLength",l),Qe(n,"toJSON",q)),Qe(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=ZTr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return CH(e,s,r)}function m(g,h){return MH(g)||MH(h)||h<=0?NaN:CH(e,g,h)}}BH.exports=$Tr});var VH=u((uZr,jH)=>{"use strict";var KTr=Tv(),xTr=KTr();jH.exports=xTr});var WH=u((sZr,UH)=>{"use strict";var rLr=w(),GH=VH(),eLr=Tv();rLr(GH,"factory",eLr);UH.exports=GH});var Lv=u((oZr,HH)=>{"use strict";var tLr=Ft(),iLr=rr(),nLr=tLr-1;function aLr(){var r=iLr(1+nLr*Math.random());return r|0}HH.exports=aLr});var _v=u((vZr,zH)=>{"use strict";var ge=w(),$e=P(),kH=_(),Iv=A(),uLr=T(),sLr=ar().isPrimitive,oLr=Fr(),vLr=Zr().isPrimitive,DH=Nn(),I0=Ft(),hr=vt(),pi=je(),fLr=R(),XH=Lv(),Pv=I0-1|0,lLr=I0-1|0,cLr=16807,P0=1,_0=2,Ke=2,dr=4,un=5;function JH(r,e){var t;return e?t="option":t="argument",r.length<un+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==P0?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+P0+". Actual: "+r[0]+"."):r[1]!==_0?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+_0+". Actual: "+r[1]+"."):r[Ke]!==1?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+1 .toString()+". Actual: "+r[Ke]+"."):r[dr]!==r.length-un?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-un)+". Actual: "+r[dr]+"."):null}function pLr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!uLr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Iv(r,"copy")&&(i.copy=r.copy,!sLr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(Iv(r,"state")){if(t=r.state,i.state=!0,!DH(t))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+t+"`.");if(s=JH(t,!0),s)throw s;i.copy===!1?e=t:(e=new hr(t.length),pi(t.length,t,1,e,1)),t=new hr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,t[dr])}if(n===void 0)if(Iv(r,"seed"))if(n=r.seed,i.seed=!0,vLr(n)){if(n>lLr)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+n+"`.");n|=0}else if(oLr(n)&&n.length>0)a=n.length,e=new hr(un+a),e[0]=P0,e[1]=_0,e[Ke]=1,e[dr]=a,pi.ndarray(a,n,1,0,e,1,dr+1),t=new hr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,a),t[0]=n[0];else throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+n+"`.");else n=XH()|0}else n=XH()|0;return t===void 0&&(e=new hr(un+1),e[0]=P0,e[1]=_0,e[Ke]=1,e[dr]=1,e[dr+1]=n,t=new hr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,1),t[0]=n[0]),ge(y,"NAME","minstd"),$e(y,"seed",o),$e(y,"seedLength",v),kH(y,"state",c,p),$e(y,"stateLength",f),$e(y,"byteLength",l),ge(y,"toJSON",q),ge(y,"MIN",1),ge(y,"MAX",I0-1),ge(y,"normalized",m),ge(m,"NAME",y.NAME),$e(m,"seed",o),$e(m,"seedLength",v),kH(m,"state",c,p),$e(m,"stateLength",f),$e(m,"byteLength",l),ge(m,"toJSON",q),ge(m,"MIN",(y.MIN-1)/Pv),ge(m,"MAX",(y.MAX-1)/Pv),y;function o(){var g=e[dr];return pi(g,n,1,new hr(g),1)}function v(){return e[dr]}function f(){return e.length}function l(){return e.byteLength}function c(){var g=e.length;return pi(g,e,1,new hr(g),1)}function p(g){var h;if(!DH(g))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+g+"`.");if(h=JH(g,!1),h)throw h;i.copy===!1?i.state&&g.length===e.length?pi(g.length,g,1,e,1):(e=g,i.state=!0):(g.length!==e.length&&(e=new hr(g.length)),pi(g.length,g,1,e,1)),t=new hr(e.buffer,e.byteOffset+(Ke+1)*e.BYTES_PER_ELEMENT,1),n=new hr(e.buffer,e.byteOffset+(dr+1)*e.BYTES_PER_ELEMENT,e[dr])}function q(){var g={};return g.type="PRNG",g.name=y.NAME,g.state=fLr(e),g.params=[],g}function y(){var g=t[0]|0;return g=cLr*g%I0|0,t[0]=g,g|0}function m(){return(y()-1)/Pv}}zH.exports=pLr});var ZH=u((fZr,YH)=>{"use strict";var gLr=_v(),mLr=Lv(),qLr=gLr({seed:mLr()});YH.exports=qLr});var KH=u((lZr,$H)=>{"use strict";var yLr=w(),QH=ZH(),hLr=_v();yLr(QH,"factory",hLr);$H.exports=QH});var rk=u((cZr,xH)=>{"use strict";var dLr=b(),wLr=8;function bLr(r,e,t){var i,n;for(n=0;n<wLr;n++)if(i=r(),dLr(i))throw new Error("unexpected error. PRNG returned `NaN`.");for(n=t-1;n>=0;n--)e[n]=r();return e}xH.exports=bLr});var Rv=u((pZr,ek)=>{"use strict";var ELr=Ft(),NLr=rr(),ALr=ELr-1;function OLr(){var r=NLr(1+ALr*Math.random());return r|0}ek.exports=OLr});var Cv=u((gZr,sk)=>{"use strict";var me=w(),xe=P(),tk=_(),Fv=A(),SLr=T(),TLr=ar().isPrimitive,LLr=Fr(),ILr=Zr().isPrimitive,ik=Nn(),gi=je(),PLr=rr(),wr=vt(),sn=Ft(),_Lr=R(),nk=rk(),ak=Rv(),Mv=sn-1|0,RLr=sn-1|0,FLr=16807,Er=32,M0=1,C0=3,rt=2,mi=Er+3,br=Er+6,on=Er+7,R0=mi+1,F0=mi+2;function uk(r,e){var t;return e?t="option":t="argument",r.length<on+1?new RangeError("invalid "+t+". `state` array has insufficient length."):r[0]!==M0?new RangeError("invalid "+t+". `state` array has an incompatible schema version. Expected: "+M0+". Actual: "+r[0]+"."):r[1]!==C0?new RangeError("invalid "+t+". `state` array has an incompatible number of sections. Expected: "+C0+". Actual: "+r[1]+"."):r[rt]!==Er?new RangeError("invalid "+t+". `state` array has an incompatible table length. Expected: "+Er+". Actual: "+r[rt]+"."):r[mi]!==2?new RangeError("invalid "+t+". `state` array has an incompatible state length. Expected: "+2 .toString()+". Actual: "+r[mi]+"."):r[br]!==r.length-on?new RangeError("invalid "+t+". `state` array length is incompatible with seed section length. Expected: "+(r.length-on)+". Actual: "+r[br]+"."):null}function MLr(r){var e,t,i,n,a,s;if(i={},arguments.length){if(!SLr(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(Fv(r,"copy")&&(i.copy=r.copy,!TLr(r.copy)))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+r.copy+"`.");if(Fv(r,"state")){if(t=r.state,i.state=!0,!ik(t))throw new TypeError("invalid option. `state` option must be an Int32Array. Option: `"+t+"`.");if(s=uk(t,!0),s)throw s;i.copy===!1?e=t:(e=new wr(t.length),gi(t.length,t,1,e,1)),t=new wr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,t[br])}if(n===void 0)if(Fv(r,"seed"))if(n=r.seed,i.seed=!0,ILr(n)){if(n>RLr)throw new RangeError("invalid option. `seed` option must be a positive integer less than the maximum signed 32-bit integer. Option: `"+n+"`.");n|=0}else if(LLr(n)&&n.length>0)a=n.length,e=new wr(on+a),e[0]=M0,e[1]=C0,e[rt]=Er,e[mi]=2,e[F0]=n[0],e[br]=a,gi.ndarray(a,n,1,0,e,1,br+1),t=new wr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,a),t=nk(y,t,Er),e[R0]=t[0];else throw new TypeError("invalid option. `seed` option must be either a positive integer less than the maximum signed 32-bit integer or an array-like object containing integer values less than the maximum signed 32-bit integer. Option: `"+n+"`.");else n=ak()|0}else n=ak()|0;return t===void 0&&(e=new wr(on+1),e[0]=M0,e[1]=C0,e[rt]=Er,e[mi]=2,e[F0]=n,e[br]=1,e[br+1]=n,t=new wr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,1),t=nk(y,t,Er),e[R0]=t[0]),me(m,"NAME","minstd-shuffle"),xe(m,"seed",o),xe(m,"seedLength",v),tk(m,"state",c,p),xe(m,"stateLength",f),xe(m,"byteLength",l),me(m,"toJSON",q),me(m,"MIN",1),me(m,"MAX",sn-1),me(m,"normalized",g),me(g,"NAME",m.NAME),xe(g,"seed",o),xe(g,"seedLength",v),tk(g,"state",c,p),xe(g,"stateLength",f),xe(g,"byteLength",l),me(g,"toJSON",q),me(g,"MIN",(m.MIN-1)/Mv),me(g,"MAX",(m.MAX-1)/Mv),m;function o(){var h=e[br];return gi(h,n,1,new wr(h),1)}function v(){return e[br]}function f(){return e.length}function l(){return e.byteLength}function c(){var h=e.length;return gi(h,e,1,new wr(h),1)}function p(h){var E;if(!ik(h))throw new TypeError("invalid argument. Must provide an Int32Array. Value: `"+h+"`.");if(E=uk(h,!1),E)throw E;i.copy===!1?i.state&&h.length===e.length?gi(h.length,h,1,e,1):(e=h,i.state=!0):(h.length!==e.length&&(e=new wr(h.length)),gi(h.length,h,1,e,1)),t=new wr(e.buffer,e.byteOffset+(rt+1)*e.BYTES_PER_ELEMENT,Er),n=new wr(e.buffer,e.byteOffset+(br+1)*e.BYTES_PER_ELEMENT,e[br])}function q(){var h={};return h.type="PRNG",h.name=m.NAME,h.state=_Lr(e),h.params=[],h}function y(){var h=e[F0]|0;return h=FLr*h%sn|0,e[F0]=h,h|0}function m(){var h,E;return h=e[R0],E=PLr(Er*(h/sn)),h=t[E],e[R0]=h,t[E]=y(),h}function g(){return(m()-1)/Mv}}sk.exports=MLr});var vk=u((mZr,ok)=>{"use strict";var CLr=Cv(),BLr=Rv(),jLr=CLr({seed:BLr()});ok.exports=jLr});var ck=u((qZr,lk)=>{"use strict";var VLr=w(),fk=vk(),GLr=Cv();VLr(fk,"factory",GLr);lk.exports=fk});var gk=u((yZr,pk)=>{"use strict";var ULr=sr();function WLr(r,e){for(var t=r(),i=1;t>ULr(-e);)i+=1,t*=r();return i-1}pk.exports=WLr});var qk=u((hZr,mk)=>{"use strict";var HLr=rr();function kLr(r){return HLr(r)===r&&r<0}mk.exports=kLr});var hk=u((dZr,yk)=>{"use strict";var DLr=qk();yk.exports=DLr});var wk=u((wZr,dk)=>{"use strict";var XLr=hk(),JLr=Bi();function zLr(r){return XLr(r)?NaN:JLr(r+1)}dk.exports=zLr});var Ek=u((bZr,bk)=>{"use strict";var YLr=wk();bk.exports=YLr});var Sk=u((EZr,Ok)=>{"use strict";var ZLr=Ek(),Nk=rr(),QLr=Ja(),$Lr=G(),Ak=Z(),B0=B(),KLr=u1(),xLr=1/12,rIr=1/360;function eIr(r,e){var t,i,n,a,s,o,v,f,l,c;for(t=$Lr(e),v=2.53*t+.931,o=.02483*v-.059,i=1.1328/(v-3.4)+1.1239,s=-3.6224/(v-2)+.9277,n=.86*s;;){if(c=r(),c<=n)return l=c/s-.43,l*=2*o/(.5-Ak(l))+v,l+=e+.445,Nk(l);if(c>=s?l=r()-.5:(l=c/s-.93,l=QLr(l)*.5-l,c=s*r()),a=.5-Ak(l),(a>=.013||a>=c)&&(f=Nk((2*o/a+v)*l+e+.445),c*=i/(o/(a*a)+v),l=(f+.5)*B0(e/f),l+=-e-KLr+f,l-=(xLr-rIr/(f*f))/f,f>=10&&l>=B0(c*t)||(l=f*B0(e)-e-ZLr(f),f>=0&&f<=9&&l>=B0(c))))return f}}Ok.exports=eIr});var Lk=u((NZr,Tk)=>{"use strict";var tIr=gk(),iIr=Sk();function nIr(r,e){return e<30?tIr(r,e):iIr(r,e)}Tk.exports=nIr});var Bv=u((AZr,Ck)=>{"use strict";var qe=w(),j0=P(),Ik=_(),aIr=W().isPrimitive,Pk=T(),_k=L(),Rk=A(),Fk=I(),uIr=C(),V0=k().factory,sIr=b(),oIr=R(),Mk=Lk();function vIr(){var r,e,t,i;if(arguments.length===0)t=V0();else if(arguments.length===1&&Pk(arguments[0]))if(e=arguments[0],Rk(e,"prng")){if(!_k(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=V0(e);else{if(r=arguments[0],!aIr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!Pk(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(Rk(e,"prng")){if(!_k(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=V0(e)}else t=V0()}return r===void 0?i=p:i=c,qe(i,"NAME","poisson"),e&&e.prng?(qe(i,"seed",null),qe(i,"seedLength",null),Ik(i,"state",Fk(null),uIr),qe(i,"stateLength",null),qe(i,"byteLength",null),qe(i,"toJSON",Fk(null)),qe(i,"PRNG",t)):(j0(i,"seed",n),j0(i,"seedLength",a),Ik(i,"state",v,f),j0(i,"stateLength",s),j0(i,"byteLength",o),qe(i,"toJSON",l),qe(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=oIr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return Mk(t,r)}function p(q){return sIr(q)||q<=0?NaN:Mk(t,q)}}Ck.exports=vIr});var jk=u((OZr,Bk)=>{"use strict";var fIr=Bv(),lIr=fIr();Bk.exports=lIr});var jv=u((SZr,Gk)=>{"use strict";var cIr=w(),Vk=jk(),pIr=Bv();cIr(Vk,"factory",pIr);Gk.exports=Vk});var Wk=u((TZr,Uk)=>{"use strict";var gIr=W().isPrimitive,mIr=j().isPrimitive,qIr=tr();function yIr(r,e){return gIr(r)?!mIr(e)||qIr(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):e<=0||e>=1?new RangeError("invalid argument. Second argument must be on the interval `(0,1)`. Value: `"+e+"`."):null:new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.")}Uk.exports=yIr});var Wv=u((LZr,Zk)=>{"use strict";var et=w(),G0=P(),Hk=_(),qi=A(),kk=T(),Vv=Dr(),Dk=ar().isPrimitive,Xk=L(),Jk=I(),hIr=C(),zk=b(),yi=jv().factory,U0=ni().factory,Gv=je(),Uv=or(),Yk=Mt(),dIr=R(),wIr=Wk();function bIr(){var r,e,t,i,n,a,s,o,v,f;if(s=!0,arguments.length===0)i={copy:!1},t=yi(i);else if(arguments.length===1){if(i=arguments[0],!kk(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(qi(i,"copy")&&!Dk(i.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+i.copy+"`.");if(qi(i,"prng")){if(!Xk(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");t=yi({prng:i.prng})}else{if(qi(i,"state")&&!Vv(i.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+i.state+"`.");i=Yk(i,1),i.copy===!1?s=!1:i.state&&(i.state=Gv(i.state.length,i.state,1,new Uv(i.state.length),1)),i.copy=!1,t=yi(i)}}else{if(f=arguments[0],v=arguments[1],o=wIr(f,v),o)throw o;if(arguments.length>2){if(i=arguments[2],!kk(i))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+i+"`.");if(qi(i,"copy")&&!Dk(i.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+i.copy+"`.");if(qi(i,"prng")){if(!Xk(i.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+i.prng+"`.");t=yi({prng:i.prng})}else{if(qi(i,"state")&&!Vv(i.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+i.state+"`.");i=Yk(i,1),i.copy===!1?s=!1:i.state&&(i.state=Gv(i.state.length,i.state,1,new Uv(i.state.length),1)),i.copy=!1,t=yi(i)}}else i={copy:!1},t=yi(i)}return i&&i.prng?f===void 0?r=U0({prng:i.prng}):r=U0(f,v/(1-v),{prng:i.prng}):(i.state?e=i.state:(e=t.state,t.state=e),f===void 0?r=U0({state:e,copy:!1}):r=U0(f,v/(1-v),{state:e,copy:!1})),f===void 0?n=E:n=h,a=t.PRNG,et(n,"NAME","negative-binomial"),i&&i.prng?(et(n,"seed",null),et(n,"seedLength",null),Hk(n,"state",Jk(null),hIr),et(n,"stateLength",null),et(n,"byteLength",null),et(n,"toJSON",Jk(null))):(G0(n,"seed",l),G0(n,"seedLength",c),Hk(n,"state",y,m),G0(n,"stateLength",p),G0(n,"byteLength",q),et(n,"toJSON",g)),et(n,"PRNG",a),n;function l(){return a.seed}function c(){return a.seedLength}function p(){return a.stateLength}function q(){return a.byteLength}function y(){return a.state}function m(N){if(!Vv(N))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+N+"`.");s&&(N=Gv(N.length,N,1,new Uv(N.length),1)),a.state=N}function g(){var N={};return N.type="PRNG",N.name=n.NAME,N.state=dIr(a.state),f===void 0?N.params=[]:N.params=[f,v],N}function h(){return t(r())}function E(N,V){return zk(N)||zk(V)||V<=0||V>=1?NaN:t(r(N,V/(1-V)))}}Zk.exports=bIr});var $k=u((IZr,Qk)=>{"use strict";var EIr=Wv(),NIr=EIr();Qk.exports=NIr});var rD=u((PZr,xk)=>{"use strict";var AIr=w(),Kk=$k(),OIr=Wv();AIr(Kk,"factory",OIr);xk.exports=Kk});var tD=u((_Zr,eD)=>{"use strict";var SIr=j().isPrimitive,TIr=W().isPrimitive,LIr=tr();function IIr(r,e){return!SIr(r)||LIr(r)?new TypeError("invalid argument. `mu` must be a number primitive and not `NaN`. Value: `"+r+"`."):TIr(e)?null:new TypeError("invalid argument. `sigma` must be a positive number. Value: `"+e+"`.")}eD.exports=IIr});var nD=u((RZr,iD)=>{"use strict";function PIr(r,e,t){return e+t*r()}iD.exports=PIr});var Hv=u((FZr,cD)=>{"use strict";var tt=w(),W0=P(),aD=_(),uD=T(),sD=L(),oD=A(),vD=I(),_Ir=C(),hi=He().factory,fD=b(),RIr=R(),FIr=tD(),lD=nD();function MIr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=hi();else if(arguments.length===1){if(t=arguments[0],!uD(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(oD(t,"prng")){if(!sD(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=hi({prng:t.prng})}else e=hi(t)}else{if(s=arguments[0],r=arguments[1],a=FIr(s,r),a)throw a;if(arguments.length>2){if(t=arguments[2],!uD(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(oD(t,"prng")){if(!sD(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");e=hi({prng:t.prng})}else e=hi(t)}else e=hi()}return s===void 0?n=m:n=y,i=e.PRNG,tt(n,"NAME","normal"),t&&t.prng?(tt(n,"seed",null),tt(n,"seedLength",null),aD(n,"state",vD(null),_Ir),tt(n,"stateLength",null),tt(n,"byteLength",null),tt(n,"toJSON",vD(null))):(W0(n,"seed",o),W0(n,"seedLength",v),aD(n,"state",c,p),W0(n,"stateLength",f),W0(n,"byteLength",l),tt(n,"toJSON",q)),tt(n,"PRNG",i),n;function o(){return i.seed}function v(){return i.seedLength}function f(){return i.stateLength}function l(){return i.byteLength}function c(){return i.state}function p(g){i.state=g}function q(){var g={};return g.type="PRNG",g.name=n.NAME,g.state=RIr(i.state),s===void 0?g.params=[]:g.params=[s,r],g}function y(){return lD(e,s,r)}function m(g,h){return fD(g)||fD(h)||h<=0?NaN:lD(e,g,h)}}cD.exports=MIr});var gD=u((MZr,pD)=>{"use strict";var CIr=Hv(),BIr=CIr();pD.exports=BIr});var yD=u((CZr,qD)=>{"use strict";var jIr=w(),mD=gD(),VIr=Hv();jIr(mD,"factory",VIr);qD.exports=mD});var wD=u((BZr,dD)=>{"use strict";var hD=W().isPrimitive;function GIr(r,e){return hD(r)?hD(e)?null:new TypeError("invalid argument. `beta` must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. `alpha` must be a positive number. Value: `"+r+"`.")}dD.exports=GIr});var ED=u((jZr,bD)=>{"use strict";var UIr=x();function WIr(r,e,t){return t/UIr(r(),1/e)}bD.exports=WIr});var kv=u((VZr,PD)=>{"use strict";var ye=w(),H0=P(),ND=_(),AD=T(),OD=L(),SD=A(),TD=I(),HIr=C(),k0=k().factory,LD=b(),kIr=R(),DIr=wD(),ID=ED();function XIr(){var r,e,t,i,n,a;if(arguments.length===0)i=k0();else if(arguments.length===1){if(t=arguments[0],!AD(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(SD(t,"prng")){if(!OD(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");i=t.prng}else i=k0(t)}else{if(r=arguments[0],e=arguments[1],a=DIr(r,e),a)throw a;if(arguments.length>2){if(t=arguments[2],!AD(t))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.");if(SD(t,"prng")){if(!OD(t.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+t.prng+"`.");i=t.prng}else i=k0(t)}else i=k0()}return r===void 0?n=y:n=q,ye(n,"NAME","pareto-type1"),t&&t.prng?(ye(n,"seed",null),ye(n,"seedLength",null),ND(n,"state",TD(null),HIr),ye(n,"stateLength",null),ye(n,"byteLength",null),ye(n,"toJSON",TD(null)),ye(n,"PRNG",i)):(H0(n,"seed",s),H0(n,"seedLength",o),ND(n,"state",l,c),H0(n,"stateLength",v),H0(n,"byteLength",f),ye(n,"toJSON",p),ye(n,"PRNG",i),i=i.normalized),n;function s(){return i.seed}function o(){return i.seedLength}function v(){return i.stateLength}function f(){return i.byteLength}function l(){return i.state}function c(m){i.state=m}function p(){var m={};return m.type="PRNG",m.name=n.NAME,m.state=kIr(i.state),r===void 0?m.params=[]:m.params=[r,e],m}function q(){return ID(i,r,e)}function y(m,g){return LD(m)||LD(g)||m<=0||g<=0?NaN:ID(i,m,g)}}PD.exports=XIr});var RD=u((GZr,_D)=>{"use strict";var JIr=kv(),zIr=JIr();_D.exports=zIr});var CD=u((UZr,MD)=>{"use strict";var YIr=w(),FD=RD(),ZIr=kv();YIr(FD,"factory",ZIr);MD.exports=FD});var jD=u((WZr,BD)=>{"use strict";var QIr=G(),$Ir=B();function KIr(r,e){return e*QIr(-2*$Ir(r()))}BD.exports=KIr});var Dv=u((HZr,DD)=>{"use strict";var he=w(),D0=P(),VD=_(),xIr=W().isPrimitive,GD=T(),UD=L(),WD=A(),HD=I(),rPr=C(),X0=k().factory,ePr=b(),tPr=R(),kD=jD();function iPr(){var r,e,t,i;if(arguments.length===0)t=X0();else if(arguments.length===1&&GD(arguments[0]))if(e=arguments[0],WD(e,"prng")){if(!UD(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=X0(e);else{if(r=arguments[0],!xIr(r))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+r+"`.");if(arguments.length>1){if(e=arguments[1],!GD(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(WD(e,"prng")){if(!UD(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=X0(e)}else t=X0()}return r===void 0?i=p:i=c,he(i,"NAME","rayleigh"),e&&e.prng?(he(i,"seed",null),he(i,"seedLength",null),VD(i,"state",HD(null),rPr),he(i,"stateLength",null),he(i,"byteLength",null),he(i,"toJSON",HD(null)),he(i,"PRNG",t)):(D0(i,"seed",n),D0(i,"seedLength",a),VD(i,"state",v,f),D0(i,"stateLength",s),D0(i,"byteLength",o),he(i,"toJSON",l),he(i,"PRNG",t),t=t.normalized),i;function n(){return t.seed}function a(){return t.seedLength}function s(){return t.stateLength}function o(){return t.byteLength}function v(){return t.state}function f(q){t.state=q}function l(){var q={};return q.type="PRNG",q.name=i.NAME,q.state=tPr(t.state),r===void 0?q.params=[]:q.params=[r],q}function c(){return kD(t,r)}function p(q){return ePr(q)||q<=0?NaN:kD(t,q)}}DD.exports=iPr});var JD=u((kZr,XD)=>{"use strict";var nPr=Dv(),aPr=nPr();XD.exports=aPr});var ZD=u((DZr,YD)=>{"use strict";var uPr=w(),zD=JD(),sPr=Dv();uPr(zD,"factory",sPr);YD.exports=zD});var Yv=u((XZr,nX)=>{"use strict";var it=w(),J0=P(),QD=_(),di=A(),$D=W().isPrimitive,KD=T(),Xv=Dr(),xD=ar().isPrimitive,oPr=b(),rX=L(),eX=I(),vPr=C(),z0=an().factory,wi=He().factory,Jv=je(),zv=or(),tX=Mt(),fPr=R(),iX=G();function lPr(){var r,e,t,i,n,a,s,o;if(s=!0,arguments.length===0)n={copy:!1},t=wi(n);else if(arguments.length===1)if(KD(arguments[0])){if(n=arguments[0],di(n,"copy")&&!xD(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(di(n,"prng")){if(!rX(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=wi({prng:n.prng})}else{if(di(n,"state")&&!Xv(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=tX(n,1),n.copy===!1?s=!1:n.state&&(n.state=Jv(n.state.length,n.state,1,new zv(n.state.length),1)),n.copy=!1,t=wi(n)}}else{if(o=arguments[0],!$D(o))throw new TypeError("invalid argument. First argument must be a positive number or an options object. Value: `"+o+"`.");n={copy:!1},t=wi(n)}else{if(o=arguments[0],!$D(o))throw new TypeError("invalid argument. First argument must be a positive number. Value: `"+o+"`.");if(n=arguments[1],!KD(n))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.");if(di(n,"copy")&&!xD(n.copy))throw new TypeError("invalid option. `copy` option must be a boolean. Option: `"+n.copy+"`.");if(di(n,"prng")){if(!rX(n.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+n.prng+"`.");t=wi({prng:n.prng})}else{if(di(n,"state")&&!Xv(n.state))throw new TypeError("invalid option. `state` option must be a Uint32Array. Option: `"+n.state+"`.");n=tX(n,1),n.copy===!1?s=!1:n.state&&(n.state=Jv(n.state.length,n.state,1,new zv(n.state.length),1)),n.copy=!1,t=wi(n)}}return n&&n.prng?o===void 0?r=z0({prng:n.prng}):r=z0(o,{prng:n.prng}):(n.state?e=n.state:(e=t.state,t.state=e),o===void 0?r=z0({state:e,copy:!1}):r=z0(o,{state:e,copy:!1})),o===void 0?a=g:a=m,i=t.PRNG,it(a,"NAME","t"),n&&n.prng?(it(a,"seed",null),it(a,"seedLength",null),QD(a,"state",eX(null),vPr),it(a,"stateLength",null),it(a,"byteLength",null),it(a,"toJSON",eX(null))):(J0(a,"seed",v),J0(a,"seedLength",f),QD(a,"state",p,q),J0(a,"stateLength",l),J0(a,"byteLength",c),it(a,"toJSON",y)),it(a,"PRNG",i),a;function v(){return i.seed}function f(){return i.seedLength}function l(){return i.stateLength}function c(){return i.byteLength}function p(){return i.state}function q(h){if(!Xv(h))throw new TypeError("invalid argument. Must provide a Uint32Array. Value: `"+h+"`.");s&&(h=Jv(h.length,h,1,new zv(h.length),1)),i.state=h}function y(){var h={};return h.type="PRNG",h.name=a.NAME,h.state=fPr(i.state),o===void 0?h.params=[]:h.params=[o],h}function m(){return t()/iX(r()/o)}function g(h){return oPr(h)||h<=0?NaN:t()/iX(r(h)/h)}}nX.exports=lPr});var uX=u((JZr,aX)=>{"use strict";var cPr=Yv(),pPr=cPr();aX.exports=pPr});var vX=u((zZr,oX)=>{"use strict";var gPr=w(),sX=uX(),mPr=Yv();gPr(sX,"factory",mPr);oX.exports=sX});var lX=u((YZr,fX)=>{"use strict";var Zv=j().isPrimitive,Qv=tr();function qPr(r,e,t){return!Zv(r)||Qv(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!Zv(e)||Qv(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):!Zv(t)||Qv(t)?new TypeError("invalid argument. Third argument must be a number primitive and not `NaN`. Value: `"+t+"`."):r<=t&&t<=e?null:new RangeError("invalid arguments. The condition `a <= c <= b` must be satisfied. Value: `["+r+","+e+","+t+"]`.")}fX.exports=qPr});var gX=u((ZZr,pX)=>{"use strict";var cX=G();function yPr(r,e,t,i){var n,a,s;return n=(i-e)/(t-e),s=r(),s<n?(a=(t-e)*(i-e),e+cX(a*s)):(a=(t-e)*(t-i),t-cX(a*(1-s)))}pX.exports=yPr});var Kv=u((QZr,bX)=>{"use strict";var de=w(),Y0=P(),mX=_(),qX=T(),yX=L(),hX=A(),dX=I(),hPr=C(),Z0=k().factory,$v=b(),dPr=R(),wPr=lX(),wX=gX();function bPr(){var r,e,t,i,n,a,s;if(arguments.length===0)e=Z0();else if(arguments.length===1){if(r=arguments[0],!qX(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(hX(r,"prng")){if(!yX(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Z0(r)}else{if(n=arguments[0],a=arguments[1],s=arguments[2],i=wPr(n,a,s),i)throw i;if(arguments.length>3){if(r=arguments[3],!qX(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(hX(r,"prng")){if(!yX(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=Z0(r)}else e=Z0()}return n===void 0?t=m:t=y,de(t,"NAME","triangular"),r&&r.prng?(de(t,"seed",null),de(t,"seedLength",null),mX(t,"state",dX(null),hPr),de(t,"stateLength",null),de(t,"byteLength",null),de(t,"toJSON",dX(null)),de(t,"PRNG",e)):(Y0(t,"seed",o),Y0(t,"seedLength",v),mX(t,"state",c,p),Y0(t,"stateLength",f),Y0(t,"byteLength",l),de(t,"toJSON",q),de(t,"PRNG",e),e=e.normalized),t;function o(){return e.seed}function v(){return e.seedLength}function f(){return e.stateLength}function l(){return e.byteLength}function c(){return e.state}function p(g){e.state=g}function q(){var g={};return g.type="PRNG",g.name=t.NAME,g.state=dPr(e.state),n===void 0?g.params=[]:g.params=[n,a,s],g}function y(){return wX(e,n,a,s)}function m(g,h,E){return $v(g)||$v(h)||$v(E)||!(g<=E&&E<=h)?NaN:wX(e,g,h,E)}}bX.exports=bPr});var NX=u(($Zr,EX)=>{"use strict";var EPr=Kv(),NPr=EPr();EX.exports=NPr});var SX=u((KZr,OX)=>{"use strict";var APr=w(),AX=NX(),OPr=Kv();APr(AX,"factory",OPr);OX.exports=AX});var PX=u((xZr,IX)=>{"use strict";var TX=j().isPrimitive,LX=tr();function SPr(r,e){return!TX(r)||LX(r)?new TypeError("invalid argument. First argument must be a number primitive and not `NaN`. Value: `"+r+"`."):!TX(e)||LX(e)?new TypeError("invalid argument. Second argument must be a number primitive and not `NaN`. Value: `"+e+"`."):r>=e?new RangeError("invalid argument. Minimum support `a` must be less than maximum support `b`. Value: `["+r+","+e+"]`."):null}IX.exports=SPr});var RX=u((rQr,_X)=>{"use strict";function TPr(r,e,t){var i=r();return t*i+(1-i)*e}_X.exports=TPr});var xv=u((eQr,UX)=>{"use strict";var we=w(),Q0=P(),FX=_(),MX=T(),CX=L(),BX=A(),jX=I(),LPr=C(),$0=k().factory,VX=b(),IPr=R(),PPr=PX(),GX=RX();function _Pr(){var r,e,t,i,n,a;if(arguments.length===0)e=$0();else if(arguments.length===1){if(r=arguments[0],!MX(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(BX(r,"prng")){if(!CX(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=$0(r)}else{if(n=arguments[0],a=arguments[1],i=PPr(n,a),i)throw i;if(arguments.length>2){if(r=arguments[2],!MX(r))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+r+"`.");if(BX(r,"prng")){if(!CX(r.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+r.prng+"`.");e=r.prng}else e=$0(r)}else e=$0()}return n===void 0?t=y:t=q,we(t,"NAME","uniform"),r&&r.prng?(we(t,"seed",null),we(t,"seedLength",null),FX(t,"state",jX(null),LPr),we(t,"stateLength",null),we(t,"byteLength",null),we(t,"toJSON",jX(null)),we(t,"PRNG",e)):(Q0(t,"seed",s),Q0(t,"seedLength",o),FX(t,"state",l,c),Q0(t,"stateLength",v),Q0(t,"byteLength",f),we(t,"toJSON",p),we(t,"PRNG",e),e=e.normalized),t;function s(){return e.seed}function o(){return e.seedLength}function v(){return e.stateLength}function f(){return e.byteLength}function l(){return e.state}function c(m){e.state=m}function p(){var m={};return m.type="PRNG",m.name=t.NAME,m.state=IPr(e.state),n===void 0?m.params=[]:m.params=[n,a],m}function q(){return GX(e,n,a)}function y(m,g){return VX(m)||VX(g)||m>=g?NaN:GX(e,m,g)}}UX.exports=_Pr});var HX=u((tQr,WX)=>{"use strict";var RPr=xv(),FPr=RPr();WX.exports=FPr});var XX=u((iQr,DX)=>{"use strict";var MPr=w(),kX=HX(),CPr=xv();MPr(kX,"factory",CPr);DX.exports=kX});var YX=u((nQr,zX)=>{"use strict";var JX=W().isPrimitive;function BPr(r,e){return JX(r)?JX(e)?null:new TypeError("invalid argument. Shape parameter must be a positive number. Value: `"+e+"`."):new TypeError("invalid argument. Scale parameter must be a positive number. Value: `"+r+"`.")}zX.exports=BPr});var QX=u((aQr,ZX)=>{"use strict";var jPr=x(),VPr=B();function GPr(r,e,t){return t*jPr(-VPr(1-r()),1/e)}ZX.exports=GPr});var r2=u((uQr,nJ)=>{"use strict";var be=w(),K0=P(),$X=_(),KX=T(),xX=L(),rJ=A(),eJ=I(),UPr=C(),x0=k().factory,tJ=b(),WPr=R(),HPr=YX(),iJ=QX();function kPr(){var r,e,t,i,n,a;if(arguments.length===0)t=x0();else if(arguments.length===1){if(e=arguments[0],!KX(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(rJ(e,"prng")){if(!xX(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=x0(e)}else{if(a=arguments[0],r=arguments[1],n=HPr(r,a),n)throw n;if(arguments.length>2){if(e=arguments[2],!KX(e))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.");if(rJ(e,"prng")){if(!xX(e.prng))throw new TypeError("invalid option. `prng` option must be a pseudorandom number generator function. Option: `"+e.prng+"`.");t=e.prng}else t=x0(e)}else t=x0()}return r===void 0?i=y:i=q,be(i,"NAME","weibull"),e&&e.prng?(be(i,"seed",null),be(i,"seedLength",null),$X(i,"state",eJ(null),UPr),be(i,"stateLength",null),be(i,"byteLength",null),be(i,"toJSON",eJ(null)),be(i,"PRNG",t)):(K0(i,"seed",s),K0(i,"seedLength",o),$X(i,"state",l,c),K0(i,"stateLength",v),K0(i,"byteLength",f),be(i,"toJSON",p),be(i,"PRNG",t),t=t.normalized),i;function s(){return t.seed}function o(){return t.seedLength}function v(){return t.stateLength}function f(){return t.byteLength}function l(){return t.state}function c(m){t.state=m}function p(){var m={};return m.type="PRNG",m.name=i.NAME,m.state=WPr(t.state),a===void 0?m.params=[]:m.params=[a,r],m}function q(){return iJ(t,a,r)}function y(m,g){return tJ(m)||tJ(g)||m<=0||g<=0?NaN:iJ(t,m,g)}}nJ.exports=kPr});var uJ=u((sQr,aJ)=>{"use strict";var DPr=r2(),XPr=DPr();aJ.exports=XPr});var vJ=u((oQr,oJ)=>{"use strict";var JPr=w(),sJ=uJ(),zPr=r2();JPr(sJ,"factory",zPr);oJ.exports=sJ});var lJ=u((vQr,fJ)=>{"use strict";var F={};F.arcsine=LF().factory;F.bernoulli=GF().factory;F.beta=GM().factory;F.betaprime=bC().factory;F.binomial=eB().factory;F.boxMueller=qB().factory;F.cauchy=FB().factory;F.chi=ej().factory;F.chisquare=an().factory;F.cosine=Uj().factory;F.discreteUniform=uV().factory;F.erlang=NV().factory;F.exponential=jV().factory;F.f=eG().factory;F.frechet=hG().factory;F.gamma=ni().factory;F.geometric=FG().factory;F.gumbel=$G().factory;F.hypergeometric=OU().factory;F.improvedZiggurat=He().factory;F.invgamma=UU().factory;F.kumaraswamy=aW().factory;F.laplace=EW().factory;F.levy=sH().factory;F.logistic=AH().factory;F.lognormal=WH().factory;F.minstd=KH().factory;F.minstdShuffle=ck().factory;F.mt19937=k().factory;F.negativeBinomial=rD().factory;F.normal=yD().factory;F.pareto1=CD().factory;F.poisson=jv().factory;F.rayleigh=ZD().factory;F.t=vX().factory;F.triangular=SX().factory;F.uniform=XX().factory;F.weibull=vJ().factory;fJ.exports=F});var pJ=u((fQr,cJ)=>{"use strict";function YPr(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N;for(y=e[1],m=e[0],g=r[0],h=r[1],l=t[0],c=t[1],s=l[1],o=l[0]-y*s,v=c[1],f=c[0]-y*v,p=0,q=0,n=[],E=0;E<m;E++){for(a=[],N=0;N<y;N++)a.push(i(g[p],h[q])),p+=s,q+=v;n.push(a),p+=o,q+=f}return n}cJ.exports=YPr});var mJ=u((lQr,gJ)=>{"use strict";var ZPr=j().isPrimitive,QPr=M(),$Pr=z(),KPr=S();function xPr(r,e){return t;function t(i){var n;if(!ZPr(i)){if(e.nonnumeric===void 0)throw new TypeError(KPr("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}return n=r(i),n!==n?e.nan:n===QPr?e.pinf:n===$Pr?e.ninf:n}}gJ.exports=xPr});var dJ=u((cQr,hJ)=>{"use strict";var qJ=j().isPrimitive,r_r=M(),e_r=z(),yJ=S();function t_r(r,e){return t;function t(i,n){var a;if(!qJ(i)){if(e.nonnumeric===void 0)throw new TypeError(yJ("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!qJ(n)){if(e.nonnumeric===void 0)throw new TypeError(yJ("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}return a=r(i,n),a!==a?e.nan:a===r_r?e.pinf:a===e_r?e.ninf:a}}hJ.exports=t_r});var bJ=u((pQr,wJ)=>{"use strict";var e2=j().isPrimitive,i_r=M(),n_r=z(),t2=S();function a_r(r,e){return t;function t(i,n,a){var s;if(!e2(i)){if(e.nonnumeric===void 0)throw new TypeError(t2("invalid argument. First argument must be a number or a range of numbers. Value: %s.",String(i)));return e.nonnumeric}if(!e2(n)){if(e.nonnumeric===void 0)throw new TypeError(t2("invalid argument. Second argument must be a number or a range of numbers. Value: %s.",String(n)));return e.nonnumeric}if(!e2(a)){if(e.nonnumeric===void 0)throw new TypeError(t2("invalid argument. Third argument must be a number or a range of numbers. Value: %s.",String(a)));return e.nonnumeric}return s=r(i,n,a),s!==s?e.nan:s===i_r?e.pinf:s===n_r?e.ninf:s}}wJ.exports=a_r});var NJ=u((gQr,EJ)=>{"use strict";var u_r=X().isPrimitive,s_r=S();function o_r(r){return e;function e(t){if(!u_r(t))throw new TypeError(s_r("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));return r(t)}}EJ.exports=o_r});var TJ=u((mQr,SJ)=>{"use strict";var AJ=X().isPrimitive,OJ=S();function v_r(r){return e;function e(t,i){if(!AJ(t))throw new TypeError(OJ("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!AJ(i))throw new TypeError(OJ("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));return r(t,i)}}SJ.exports=v_r});var IJ=u((qQr,LJ)=>{"use strict";var i2=X().isPrimitive,n2=S();function f_r(r){return e;function e(t,i){if(!i2(t))throw new TypeError(n2("invalid argument. First argument must be a string or a range of strings. Value: %s.",String(t)));if(!i2(i))throw new TypeError(n2("invalid argument. Second argument must be a string or a range of strings. Value: %s.",String(i)));if(!i2(v3))throw new TypeError(n2("invalid argument. Third argument must be a string or a range of strings. Value: %s.",String(v3)));return r(t,i,v3)}}LJ.exports=f_r});var _J=u((yQr,PJ)=>{"use strict";function l_r(r,e,t,i){var n,a,s,o,v,f,l,c,p,q,y,m,g,h,E,N,V,O,D,nr,H;for(E=e[1],N=e[0],V=r[0],O=r[1],D=r[2],p=t[0],q=t[1],y=t[2],s=p[1],o=p[0]-E*s,v=q[1],f=q[0]-E*v,l=y[1],c=y[0]-E*l,m=0,g=0,h=0,n=[],nr=0;nr<N;nr++){for(a=[],H=0;H<E;H++)a.push(i(V[m],O[g],D[h])),m+=s,g+=v,h+=l;n.push(a),m+=o,g+=f,h+=c}return n}PJ.exports=l_r});var FJ=u((hQr,RJ)=>{"use strict";function c_r(r,e){var t,i,n,a,s;for(t=r.length,i=r[0].length,a=0;a<t;a++)for(n=r[a],s=0;s<i;s++)n[s]=e(n[s]);return r}RJ.exports=c_r});var CJ=u((dQr,MJ)=>{"use strict";var p_r=FJ();function g_r(r,e){return p_r(r,e)}MJ.exports=g_r});var jJ=u((wQr,BJ)=>{"use strict";var Hr={};Hr.binary2d=pJ();Hr.d_d=mJ();Hr.dd_d=dJ();Hr.ddd_d=bJ();Hr.s_o=NJ();Hr.ss_o=TJ();Hr.sss_o=IJ();Hr.ternary2d=_J();Hr.unary2d=CJ();BJ.exports=Hr});var GJ=u((bQr,VJ)=>{"use strict";var At=w6(),Nr,U={};U.ANSCOMBES_QUARTET=u5();U.bartlettTest=_w();U.broadcast=Vw();U.cumax=zw().ndarray;U.filled=Qw();U.filledBy=ib();U.flattenArray=ua();U.isArray=lr();U.isBoolean=ar().isPrimitive;U.isNumber=j().isPrimitive;U.isPositiveNumber=W().isPrimitive;U.isString=X().isPrimitive;U.iterator2array=Ib();U.iterSawtoothWave=hE();U.linspace=qO();U.max=OO().ndarray;U.mskmax=MO().ndarray;U.assert={};Nr=ZS();At(Nr,U.assert);U.blas={};Nr=iT();At(Nr,U.blas);Nr=tP();At(Nr,U);U.dists={};Nr=TP();At(Nr,U.dists);Nr=k_();At(Nr,U);U.random={};Nr=lJ();At(Nr,U.random);U.tools={};Nr=jJ();At(Nr,U.tools);VJ.exports=U});var q_r=u((EQr,UJ)=>{var m_r=GJ();UJ.exports=m_r});return q_r();})();
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
